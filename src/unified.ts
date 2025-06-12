import type { Heading, List, ListItem, PhrasingContent, Root } from 'mdast';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { defaultSchema as defaultSanitizeSchema } from 'hast-util-sanitize';
import rehypeParse from 'rehype-parse';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import rehypeRemark from 'rehype-remark';
import remarkStringify from 'remark-stringify';
import remarkUnlink from 'remark-unlink';
import remarkNormalizeHeadings from 'remark-normalize-headings';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs';

const toString = (nodes: PhrasingContent[]): string =>
  nodes.map((node) => {
    switch (node.type) {
      case 'break':
        return '\n';
      case 'delete':
      case 'emphasis':
      case 'link':
      case 'strong':
        return toString(node.children);
      case 'inlineCode':
        return `\`${node.value}\``;
      case 'text':
        return node.value;
      case 'footnoteReference':
      case 'html':
      case 'image':
      case 'imageReference':
      case 'linkReference':
      default:
        return '';
    }
  }).join('');

export async function sanitizeHtml(html: string): Promise<string> {
  const vfile = await unified()
    .use(rehypeParse)
    .use(rehypeSanitize, {
      tagNames: [
        ...defaultSanitizeSchema.tagNames!.filter((tag) => tag !== 'details'),
        'content-region',
        'footer',
        'header',
        'main',
        'article',
        'section',
        'nav',
      ],
      strip: ['script', 'style', 'details'],
    })
    .use(rehypeStringify)
    .process(html)
  return vfile.toString();
}

export async function htmlToMarkdown(content: {
  title: string;
  html: string;
}): Promise<string> {
  function remarkDisqualify() {
    return function (tree: Root) {
      visit(tree, function (node, index, parent) {
        if (!parent || typeof index !== 'number') {
          return;
        } else if (node.type === 'thematicBreak' && parent) {
          parent.children.splice(index, 1);
        } else if (node.type === 'table' && parent) {
          if (node.children.length === 2) {
            const heading = node.children[0]!;
            const items = node.children[1]!;
            const zip = heading.children.map((headRow, idx) => {
              const itemRow = items.children[idx]!;
              return {
                type: 'listItem',
                spread: false,
                children: [
                  ...headRow.children,
                  ...itemRow.children,
                ],
              } as ListItem;
            });
            parent.children.splice(index, 1, {
              type: 'list',
              spread: false,
              children: zip,
            } as List);
          }
        } else if (node.type === 'image' || node.type === 'imageReference') {
          parent.children.splice(index, 1);
        } else if (node.type === 'link' || node.type === 'linkReference') {
          if (node.children.length === 0)
            parent.children.splice(index, 1);
        } else if (node.type === 'html') {
          parent.children.splice(index, 1);
        } else if (node.type === 'heading') {
          const child = node.children[0];
          if (node.children.length === 0)
            parent.children.splice(index, 1);
          if (node.children.length > 1 || !child || child.type !== 'text')
            return;
          const value = child.value.trim();
          switch (value) {
            case 'Example':
            case 'Remarks':
            case 'Note':
            case '':
              parent.children.splice(index, 1);
              break;
            default:
              return;
          }
        } else if (node.type === 'text') {
          if (!parent || parent.type !== 'paragraph' || parent.children.length > 1)
            return;
          const value = node.value.trim();
          if (
            value.startsWith('Last updated on ') ||
            value.startsWith('Copyright ')
          ) {
            parent.children.splice(index, 1);
            return;
          }
          switch (value) {
            case 'Loading...':
            case 'Caution':
            case 'tsx':
              parent.children.splice(index, 1);
              break;
            default:
              return;
          }
        }
      });
    };
  }
  const md = await unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeSanitize, {
      strip: ['script', 'style', 'nav'],
    })
    .use(remarkGfm, {
      tablePipeAlign: false,
      tableCellPadding: false,
    })
    .use(rehypeRemark, { document: false })
    .use(remarkDisqualify)
    .use(remarkUnlink)
    .use(remarkNormalizeHeadings)
    .use(remarkSqueezeParagraphs)
    .use(remarkStringify, {
      incrementListMarker: false,
      ruleSpaces: false,
      tightDefinitions: true,
    })
    .process(content.html);
  return md.toString().replace(/[\u200B-\u200D\uFEFF]/g, '');
}

export async function concatMarkdown(
  contents: (string | null)[] | Promise<string | null>[]
): Promise<string> {
  const md = await unified()
    .use(remarkParse, { fragment: true })
    .use(remarkGfm, {
      tablePipeAlign: false,
      tableCellPadding: false,
    })
    .use(remarkNormalizeHeadings)
    .use(remarkSqueezeParagraphs)
    .use(remarkStringify, {
      incrementListMarker: false,
      ruleSpaces: false,
      tightDefinitions: true,
    })
    .process(
      (await Promise.all(contents)).join('\n\n')
    );
  return md.toString();
}

function extractTitle(markdown: string): string | null {
  const tree = unified()
    .use(remarkParse, { fragment: true })
    .use(remarkGfm, {
      tablePipeAlign: false,
      tableCellPadding: false,
    })
    .parse(markdown);
  const node = tree.children[0];
  if (node && node.type === 'heading' && node.depth === 1) {
    return toString(node.children);
  } else {
    return null;
  }
}

export function remarkTitle(opts: { title: string }) {
  return function checkTitleTransformer(root: Root) {
    const node = root.children[0]!;
    const replacement: Heading = {
      type: 'heading',
      depth: 1,
      children: [
        { type: 'text', value: opts.title }
      ]
    };
    if (node && node.type === 'heading') {
      node.depth = 1;
      node.children = replacement.children;
    } else {
      root.children?.unshift(replacement);
    }
  }
}

export async function transferTitle(from: string, to: string): Promise<string> {
  const title = extractTitle(from);
  if (!title) return to;
  const md = await unified()
    .use(remarkParse, { fragment: true })
    .use(remarkGfm, {
      tablePipeAlign: false,
      tableCellPadding: false,
    })
    .use(remarkTitle, { title })
    .use(remarkStringify, {
      bullet: '-',
      incrementListMarker: false,
      ruleSpaces: false,
      tightDefinitions: true,
    })
    .process(to);
  return md.toString();
}
