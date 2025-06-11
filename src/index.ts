import { debug } from 'debug';
import * as path from 'path';
import * as fs from 'fs/promises';

import { crawl, type CrawlOptions } from './page';
import { concatMarkdown } from './unified';
import { formatMarkdown } from './prettier';

const log = debug('llms-txt-gen');

interface Site extends CrawlOptions {
  name: string;
}

const outputPath = path.join(process.cwd(), 'out');
await fs.mkdir(outputPath, { recursive: true });

async function generate(site: Site) {
  log('crawl', site.name);
  const pages = await crawl(site);
  const contents: string[] = [];
  for (let idx = 0; idx < pages.length; idx++) {
    const page = pages[idx]!;
    const content = await page.getContent();
    if (content) contents.push(content);
    log(`completed page ${idx + 1} of ${pages.length}`);
  }
  const output = await concatMarkdown(contents);
  const formatted = await formatMarkdown(output);
  const file = path.join(outputPath, `llms-full-${site.name}.txt`);
  await fs.writeFile(file, formatted, 'utf-8');
}

let sites: Site[] = [
  {
    name: 'react-native-reanimated',
    baseURL: 'https://docs.swmansion.com/react-native-reanimated/',
    include: [
      '/react-native-reanimated/docs/(.*)',
    ],
    exclude: [
      '/react-native-reanimated/docs/next/(.*)',
      '/react-native-reanimated/docs/2.x/(.*)',
      '/react-native-reanimated/docs/1.x/(.*)',
    ],
  },
  {
    name: 'react-native-gesture-handler',
    baseURL: 'https://docs.swmansion.com/react-native-gesture-handler/',
    include: [
      '/react-native-gesture-handler/docs/(.*)',
    ],
    exclude: [
      '/react-native-gesture-handler/docs/1.x/(.*)',
    ],
  },
  {
    name: 'nativewind',
    baseURL: 'https://www.nativewind.dev/docs',
    include: [
      '/docs/(.*)',
    ],
  },
  {
    name: 'react-native',
    baseURL: 'https://reactnative.dev/docs/getting-started',
    include: [
      '/docs/(.*)',
    ],
    exclude: [
      '/docs/(0\\..*)',
      '/docs/next/(.*)',
    ],
  },
];

const args = process.argv.slice(2);
if (args.length) {
  sites = sites.filter((site) => args.includes(site.name));
}

for (const site of sites) {
  await generate(site);
  log('generated llms-full.txt for', site.name);
}
