import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  site: 'https://williamhzo.me/',
  integrations: [
    sitemap({
      // exclude page from the generated sitemap
      filter: (page) => page !== 'https://williamhzo.me/notes/playground',
    }),
    prefetch(),
  ],
  experimental: {
    contentCollections: true,
  },
});
