import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import astroLayouts from 'astro-layouts';

const layoutOptions = {
  'notes/*.md': '/src/layouts/PostLayout.astro',
};

export default defineConfig({
  site: 'https://williamhzo.me/',
  markdown: {
    remarkPlugins: [[astroLayouts, layoutOptions]],
  },
  integrations: [sitemap()],
});
