import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
  schema: {
    title: z.string(),
    publishedDate: z.date(),
    description: z.string(),
    slug: z.string(),
    canonicalUrl: z.string().url(),
    publish: z.boolean(),
    draft: z.boolean().default(false), // drafts are excluded from builds
    noindex: z.boolean().default(false),
  },
});

export const collections = { notes };
