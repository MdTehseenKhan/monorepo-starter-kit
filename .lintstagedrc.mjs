export default {
  '**/*.{ts,tsx}': 'tsc-files --noEmit --skipLibCheck',
  '**/*.{js,jsx,ts,tsx}': 'biome lint --fix',
  '**/*.{js,jsx,ts,tsx,json,css,scss,md}': 'biome format --write',
};
