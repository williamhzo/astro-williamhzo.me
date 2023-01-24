import { defineCollection, z } from 'astro:content';

const notesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    publishedDate: z.date(),
    description: z.string(),
    canonicalUrl: z.string().url(),
    publish: z.boolean(),
    draft: z.boolean().default(false),
    noindex: z.boolean().default(false),
  }),
});

export const collections = { notes: notesCollection };
