import { debug } from 'debug';
import { createFallback } from 'ai-fallback';
import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

import { makeCacheFileHelper } from './path';

const log = debug('llms-txt-gen.rewrite');

const cacheDir = path.join(process.cwd(), '.cache/rewrite');
await fs.mkdir(cacheDir, { recursive: true });
const getCacheFile = makeCacheFileHelper(cacheDir, '.txt');

const SYSTEM_PROMPT = `
Reformat markdown content you're given into an llms-full.txt file, also in markdown format
- Reformat for an AI and paraphrase where necessary, but be faithful to the original
- Keep code snippets and keep them in TypeScript or TypeScript typings format
- For markdown tables, keep all relevant information in the table
- Don't mention other content, pages, or external content
- Don't write your own content
- Don't add or use any knowledge you may have on the subject
- Don't add your own interpretation or notes and only reinterpret the input content
- Don't wrap the output in a markdown code block
Only return the reformatted markdown content and stop when you've processed all input markdown content
`;

const ai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_API_URL,
});

const ollama = createOpenAI({
  baseURL: 'http://localhost:11434/v1',
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
    temperature: 0.05,
    maxSteps: 5,
    experimental_continueSteps: true,
    model: createFallback({
      models: [
        ollama('phi4:14b'),
        ai('@cf/mistralai/mistral-small-3.1-24b-instruct'),
      ],
      onError(error, modelId) {
        log(`error using model ${modelId}`, error);
      },
    }),
    onStepFinish({ finishReason, text }) {
      if (finishReason !== 'stop')
        log(`inference step (length: ${text.length})`, finishReason); 
    },
    messages: [
      {
        role: 'system',
        content: SYSTEM_PROMPT.trim(),
      },
      {
        role: 'user',
        content: input,
      },
    ],
  });
  const output: string[] = [];
  for await (const chunk of textStream)
    output.push(chunk);
  const text = output.join('');
  await fs.writeFile(cacheFile, text, 'utf-8');
  return text;
}
