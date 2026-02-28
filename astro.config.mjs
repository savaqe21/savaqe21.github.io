// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://nbakh16.github.io',
  base: '/my-portfolio',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon()]
});