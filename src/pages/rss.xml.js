// import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';

const postsImportResult = import.meta.glob('../content/**/*.md', {
  eager: true,
});
const posts = Object.values(postsImportResult);

// see https://docs.astro.build/en/guides/rss/ for more.
export const get = () =>
  rss({
    title: 'William Hermozo — williamhzo.me',
    description: 'Freelance Frontend Engineer and Web Designer',
    site: import.meta.env.SITE, // will use "site" astro.config.js.
    items: posts.map((post) => ({
      link: post.frontmatter.canonicalUrl,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.publishedDate,
      content: sanitizeHtml(post.compiledContent()),
    })),
    // items: pagesGlobToRssItems(
    //   posts.map((post) => ({
    //     link: post.frontmatter.canonicalUrl,
    //     title: post.frontmatter.title,
    //     pubDate: post.frontmatter.publishedDate,
    //     content: sanitizeHtml(post.compiledContent()),
    //   }))
    // ),
    customData: `<language>en-gb</language>`,
  });
