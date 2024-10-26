import baseConfig from '@packages/ui/tailwind.config';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'],
  presets: [baseConfig],
  theme: {},
};

export default config;
