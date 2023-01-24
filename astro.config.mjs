import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  site: 'https://williamhzo.me/',
  integrations: [sitemap(), prefetch()],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'nord',
      wrap: false,
    },
  },
});
