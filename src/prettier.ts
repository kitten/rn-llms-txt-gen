import { format } from 'prettier';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import remarkGfm from 'remark-gfm';

async function reformat(content: string): Promise<string> {
  // NOTE: We reformat with remark again to get rid of prettier's
  // table formatting mostly. This doesn't work well as LLM input
  const md = await unified()
    .use(remarkParse, { fragment: true })
    .use(remarkGfm, {
      tablePipeAlign: false,
      tableCellPadding: false,
    })
    .use(remarkStringify, {
      bullet: '-',
      incrementListMarker: false,
      ruleSpaces: false,
      tightDefinitions: true,
    })
    .process(content);
  return md.toString();
}

export async function formatMarkdown(input: string) {
  return reformat(await format(input, {
    semi: false,
    singleQuote: false,
    trailingComma: 'es5',
    proseWrap: 'never',
    parser: 'markdown',
  }));
}
