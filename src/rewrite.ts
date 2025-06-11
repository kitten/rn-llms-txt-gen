import { debug } from 'debug';
import { createFallback } from 'ai-fallback';
import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { createOllama } from 'ollama-ai-provider';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

import { makeCacheFileHelper } from './path';

const log = debug('llms-txt-gen.rewrite');

const cacheDir = path.join(process.cwd(), '.cache/rewrite');
await fs.mkdir(cacheDir, { recursive: true });
const getCacheFile = makeCacheFileHelper(cacheDir, '.txt');

if (!process.env.OPENAI_API_KEY) throw new Error('Missing OPENAI_API_KEY env var');
if (!process.env.OPENAI_API_URL) throw new Error('Missing OPENAI_API_URL env var');

const SYSTEM_PROMPT = `
Reformat markdown content you're given into an llms-full.txt file, also in markdown format
- Reformat for an AI and paraphrase where necessary, but be faithful to the original
- Avoid using emphasis and use Github Flavored markdown syntax
- Keep code snippets and keep them in TypeScript or TypeScript typings format
- Don't mention other content, pages, or external content (Remove sentences such as "Refer to", "Read more", "Learn how to")
- For markdown tables, keep all relevant information in the table and remove table legends and emoji
- Remove icon legends or irrelevant text
- Don't add to the content or use any knowledge you may have on the subject
- Format the output in AI-friendly markdown and preserve inline code
- Remove sub-headings if they don't add crucial information or context
- Don't wrap your output in a code block
`;

const ai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_API_URL,
});

const ollama = createOllama({
  baseURL: 'http://localhost:11434/api',
});

export async function rewriteMarkdown(url: URL, input: string) {
  const cacheFile = await getCacheFile(url);
  let content: string;
  try {
    content = await fs.readFile(cacheFile, 'utf-8');
    if (content) {
      log('prompt output from cache', url.pathname);
      return content;
    }
  } catch {}
  log('prompting to rewrite', url.pathname);
  const { textStream } = streamText({
    model: createFallback({
      models: [
        ollama('mistral-small3.1:24b'),
        ai('@cf/mistralai/mistral-small-3.1-24b-instruct'),
      ],
      onError(error, modelId) {
        log(`error using model ${modelId}`, error);
      },
    }),
    maxSteps: 5,
    experimental_continueSteps: true,
    temperature: 0.05,
    system: SYSTEM_PROMPT.trim(),
    prompt: input,
  });
  const output = [];
  for await (const chunk of textStream)
    output.push(chunk);
  const text = output.join('');
  await fs.writeFile(cacheFile, text, 'utf-8');
  return text;
}
