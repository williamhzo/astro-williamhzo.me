import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
  schema: {
    title: z.string(),
    publishedDate: z.date(),
    description: z.string(),
    slug: z.string(),
    publish: z.boolean(),
    draft: z.boolean().default(false),
  },
});

export const collections = { notes };
