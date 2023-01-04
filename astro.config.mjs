import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  site: 'https://williamhzo.me/',
  integrations: [sitemap()],
  experimental: {
    contentCollections: true,
  },
});
