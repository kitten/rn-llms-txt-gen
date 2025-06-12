import { debug } from 'debug';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { URLPattern } from 'urlpattern-polyfill/urlpattern';
import { WeightedDiGraph, KruskalMST, Edge } from 'js-graph-algorithms';
import { extractContent, extractLinks, parseBody } from "./dom";
import { fetchHtml } from "./fetch";
import { htmlToMarkdown, sanitizeHtml, transferTitle } from "./unified";
import { rewriteMarkdown } from './rewrite';
import { makeCacheFileHelper } from './path';

const log = debug('llms-txt-gen:graph');

export interface CrawlOptions {
  baseURL: URL | string;
  include?: string[];
  exclude?: string[];
}

const cacheDir = path.join(process.cwd(), '.cache/page');
await fs.mkdir(cacheDir, { recursive: true });
const getCacheFile = makeCacheFileHelper(cacheDir, '.md');

async function extractContentToMarkdown(url: URL, html: string): Promise<string | null> {
  const cacheFile = await getCacheFile(url);
  try {
    const content = await fs.readFile(cacheFile, 'utf-8');
    if (content) {
      log('extracted output from cache', url.pathname);
      return content;
    }
  } catch {}
  log('extracting content', url.pathname);
  const doc = parseBody(url, html);
  const output = extractContent(doc);
  if (output) {
    const markdown = await htmlToMarkdown(output);
    await fs.writeFile(cacheFile, markdown, 'utf-8');
    return markdown;
  } else {
    return null;
  }
}

class Root {
  baseURL: URL;
  #include: URLPattern[];
  #exclude: URLPattern[];
  #pages: Map<string, Page> = new Map();
  #origin: Page;

  constructor(opts: CrawlOptions) {
    const baseURL = new URL(opts.baseURL);
    const baseURLStr = baseURL.toString();
    this.baseURL = baseURL;
    this.#origin = new Page(this, baseURL);
    this.#pages.set(opts.baseURL.toString(), this.#origin);
    const toPattern = (pattern: string) => new URLPattern(pattern, baseURLStr);
    this.#include = opts.include?.map(toPattern) ?? [];
    this.#exclude = opts.exclude?.map(toPattern) ?? [];
  }

  isURLAllowed(url: URL): boolean {
    if (url.origin !== this.baseURL.origin)
      return false;
    if (this.#include.length) {
      if (this.#include.some((pattern) => pattern.test(url))) {
        return !this.#exclude.some((pattern) => pattern.test(url));
      } else {
        return false;
      }
    } else if (this.#exclude.length) {
      return !this.#exclude.some((pattern) => pattern.test(url));
    } else {
      return true;
    }
  }

  get origin() {
    return this.#origin;
  }

  getPage(url: URL) {
    let page = this.#pages.get(url.toString());
    if (!page) {
      page = new Page(this, url);
      this.#pages.set(url.toString(), page);
    }
    return page;
  }

  async crawlPages(): Promise<Page[]> {
    return await crawlPages(this.#origin);
  }
}

class Page {
  root: Root;
  url: URL;
  isPage = true;

  #html: string | null = null;
  #content: string | null = null;
  #links: Page[] | null = null;

  _id?: number;

  constructor(root: Root, url: URL) {
    this.root = root;
    this.url = url;
  }

  async getHTML() {
    if (this.#html !== null || !this.isPage)
      return this.#html;
    const content = await fetchHtml(this.url)
    if (!content) {
      this.isPage = false;
      return (this.#html = null);
    } else {
      const sanitized = await sanitizeHtml(content);
      return (this.#html = sanitized);
    }
  }

  async getLinks() {
    if (this.#links !== null || !this.isPage)
      return this.#links;
    const html = await this.getHTML();
    if (!html) return [];
    const doc = parseBody(this.url, html);
    const urls = extractLinks(doc);
    return urls
      .filter((url) => this.root.isURLAllowed(url))
      .map((url) => this.root.getPage(url));
  }

  async getContent(): Promise<string | null> {
    if (this.#content !== null || !this.isPage)
      return this.#content;
    const html = await this.getHTML();
    if (!html) return (this.#content = null);
    const markdown = await extractContentToMarkdown(this.url, html);
    if (!markdown) return (this.#content = null);
    const rewritten = await rewriteMarkdown(this.url, markdown);
    return (this.#content = await transferTitle(markdown, rewritten));
  }
}

async function crawlPages(page: Page, visited = new Set<Page>([page]), depth = 1): Promise<Page[]> {
  const links = await page.getLinks();
  if (links) {
    log(`crawling (${links.length} links, depth = ${depth})`, page.url.pathname);
    for (const link of links) {
      if (visited.has(link)) {
        continue;
      } else {
        visited.add(page);
        await crawlPages(link, visited, depth + 1);
      }
    }
  }
  return [...visited].filter((page) => !!page.isPage);
}

export async function crawl(opts: CrawlOptions): Promise<Page[]> {
  const root = new Root(opts);
  const pages = await root.crawlPages();
  const graph = new WeightedDiGraph(pages.length);
  if (pages.length <= 1) {
    return pages;
  }
  for (let idx = 0; idx < pages.length; idx++) {
    pages[idx]!._id = idx;
  }
  for (let i = 0; i < pages.length; i++) {
    const from = pages[i]!;
    const links = await from.getLinks();
    if (!links) continue;
    for (let j = 0; j < links.length; j++) {
      const to = links[j]!;
      if (to._id != null && to.isPage) {
        const weight = links.length - j;
        const edge = new Edge(i, to._id!, weight);
        graph.addEdge(edge);
      }
    }
  }
  const kruskal = new KruskalMST(graph);
  const output = new Set<Page>([root.origin]);
  for (const edge of kruskal.mst) {
    const page = pages[edge.from()];
    if (page) output.add(page);
  }
  return [...output];
}
