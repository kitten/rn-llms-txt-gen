declare module 'remark-title' {
  interface TitleOptions {
    title: string;
  }
  export default function remarkTitle(opts: TitleOptions): (tree: Root) => undefined;
  export type Root = import('mdast').Root;
}
