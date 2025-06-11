import { debug } from 'debug';
import { createFallback } from 'ai-fallback';
import { generateText } from 'ai';
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
- Where the format isn't easily understandable by AI, reformat it faithfully to make it processable
- Reformat for an AI and paraphrase where necessary, but don't add interpretations
- Preserve code snippets and keep them in TypeScript or TypeScript typings format
- Avoid using emphasis or excessive markdown syntax, but keep code snippets where they are
- Don't mention other content, pages, or external content (Remove sentences such as "Refer to", "Read more")
- When encountering a markdown table, ensure that you don't output a separate legend, and keep all relevant information in the table
- Don't use any knowledge you may have on the subject. Only output what you're given.
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
  const { text } = await generateText({
    model: createFallback({
      models: [
        ollama('gemma:7b'),
        ai('@hf/google/gemma-7b-it'),
      ],
      onError(error, modelId) {
        log(`error using model ${modelId}`, error);
      },
    }),
    system: SYSTEM_PROMPT.trim(),
    prompt: input,
  });
  await fs.writeFile(cacheFile, text, 'utf-8');
  return text;
}
