import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    series: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

const schreibportfolioCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    publisher: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    url: z.string().url(),
    external: z.boolean().default(true),
  }),
});

const diversesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.enum(['text', 'sonstiges']).default('sonstiges'),
    description: z.string().optional(),
    url: z.string().url().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  schreibportfolio: schreibportfolioCollection,
  diverses: diversesCollection,
};
