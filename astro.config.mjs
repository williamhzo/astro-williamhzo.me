import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://williamhzo.me/',
  integrations: [sitemap()],
  experimental: {
    // see https://docs.astro.build/en/guides/content-collections/
    contentCollections: true,
  },
});
