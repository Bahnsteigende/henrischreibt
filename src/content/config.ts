import { defineCollection, z } from 'astro:content';

// Collection "blog" mit optionaler Kategorie
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(), // z.B. '2025-09-08'
    collection: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};