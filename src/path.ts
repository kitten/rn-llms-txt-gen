import * as fs from 'node:fs/promises';
import * as path from 'node:path';

export const makeCacheFileHelper = (baseDir: string, ext = '.html') => async (url: URL) => {
  const { hostname, pathname } = url;
  const name = pathname.split('/').filter(Boolean).join('_');
  const targetDir = path.join(baseDir, hostname);
  const basename = path.basename(name, path.extname(name));
  await fs.mkdir(targetDir, { recursive: true });
  return path.join(targetDir, `${basename}${ext}`);
};
