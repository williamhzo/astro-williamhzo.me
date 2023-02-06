import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

export const get = async () => {
  const posts = await getCollection('notes');

  return rss({
    title: 'William Hermozo — williamhzo.me',
    description: 'Freelance Frontend Engineer and Web Designer',
    site: import.meta.env.SITE, // will use "site" astro.config.js.
    items: posts.map(({ data, body }) => ({
      link: data.canonicalUrl,
      title: data.title,
      pubDate: data.publishedDate,
      content: sanitizeHtml(parser.render(body)),
    })),
    customData: `<language>en-gb</language>`,
  });
};
