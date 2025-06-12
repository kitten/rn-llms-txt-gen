import { debug } from 'debug';
import { Readability } from '@mozilla/readability';
import { Window } from 'happy-dom';

const log = debug('llms-txt-gen:dom');

export function parseBody(url: URL, html: string): Document {
  const window = new Window({ url: `${url}` });
  const document = window.document;
  document.body.innerHTML = html;
  return document as any;
}

export interface Content {
  title: string;
  html: string;
}

export function extractContent(document: Document): Content | undefined {
  const readability = new Readability(document, {
    nbTopCandidates: 10,
    charThreshold: 100,
    disableJSONLD: true,
  });
  const result = readability.parse();
  let content = result?.content;
  if (!content) {
    content = document.querySelector('article')?.innerHTML;
    if (!content) {
      content = document.querySelector('main')?.innerHTML;
    }
    log('extracted fallback', document.location.pathname);
  } else {
    log('extracted readability', document.location.pathname);
  }
  return content ? {
    title: result?.title || document.title,
    html: content,
  } : undefined;
}

export function extractLinks(document: Document): URL[] {
  const currentUrl = new URL(document.location.href);
  const maybeToHref = (element: Element): string | null => {
    if (element.tagName !== 'A')
      return null;
    const link = element as HTMLAnchorElement;
    if (link.href.startsWith('#'))
      return null;
    const href = new URL(link.href, document.location.href);
    if (currentUrl.pathname === href.pathname)
      return null;
    if (href.origin !== currentUrl.origin)
      return null;
    href.hash = '';
    return href.pathname;
  };
  const inNavAnchors = Array.from(document.querySelectorAll('nav a'))
    .map(maybeToHref)
    .filter((x): x is string => !!x);
  const outNavAnchors = Array.from(document.querySelectorAll(':not(nav) a'))
    .map(maybeToHref)
    .filter((x): x is string => !!x);
  const pathnames = [...new Set([...outNavAnchors, ...inNavAnchors])];
  return pathnames.map((pathname) => new URL(pathname, currentUrl));
}
