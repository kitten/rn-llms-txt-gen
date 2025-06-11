import { format } from 'prettier';

export async function formatMarkdown(input: string) {
  return format(input, {
    semi: false,
    singleQuote: false,
    trailingComma: 'es5',
    proseWrap: 'never',
    parser: 'markdown',
  });
}
