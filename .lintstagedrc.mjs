import { relative } from 'node:path';

const getStagedFiles = (filenames) => {
  return filenames.map((f) => relative(process.cwd(), f));
};

const buildBiomeCommand = (filenames) => {
  return `biome format --write ${getStagedFiles(filenames).join(' ')}`;
};

const builTypeCommand = (filenames) => {
  // tsc-files: A tiny tool to run `tsc` on specific files without ignoring `tsconfig.json`.
  return `tsc-files --noEmit --skipLibCheck ${getStagedFiles(filenames).join(
    ' '
  )}`;
};

const buildLintCommand = (filenames) => {
  return `biome check ${getStagedFiles(filenames).join(' ')}`;
};

const lintStagedConfig = {
  '**/*.{js,jsx,ts,tsx}': buildLintCommand,
  '**/*.{ts,tsx}': builTypeCommand,
  '**/*.{js,jsx,ts,tsx,json,css,scss,md}': buildBiomeCommand,
};

export default lintStagedConfig;
