import { debug } from 'debug';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { makeCacheFileHelper } from './path';

const log = debug('llms-txt-gen:fetch');

const cacheDir = path.join(process.cwd(), '.cache/fetch');
await fs.mkdir(cacheDir, { recursive: true });
const getCacheFile = makeCacheFileHelper(cacheDir);

export async function fetchHtml(url: URL): Promise<string | null> {
  const cacheFile = await getCacheFile(url);
  let content: string;
  try {
    content = await fs.readFile(cacheFile, 'utf-8');
    if (content) {
      log('loading from cache', url.pathname);
      return content;
    }
  } catch {}
  log('loading', url.pathname);
  const response = await fetch(url, {
    headers: {
      'Accept': 'text/html, application/xhtml+xml, application/xml',
      'Accept-Language': 'en-US',
    },
  });
  if (response.ok) {
    const contentType = response.headers.get('Content-Type');
    if (!contentType || !contentType.startsWith('text/html')) {
      log('discarded', url.pathname);
      return null;
    }
    content =  await response.text();
    await fs.writeFile(cacheFile, content, 'utf-8');
    return content;
  } else if (response.status < 500) {
    return null;
  } else {
    throw new Error(`HTTP: ${response.status}`);
  }
}
