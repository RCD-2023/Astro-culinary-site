// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
// 2. Define collection(s) using zod (https://zod.dev/api)
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    categorie: z.string(),
    pubDate: z.date(),
    author: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection,
};
