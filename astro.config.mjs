// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
//https://docs.astro.build/en/reference/configuration-reference/#output
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  output: 'server',
  adapter: vercel(),
});