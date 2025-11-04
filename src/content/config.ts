import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
    external: z.string().url().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),   // ✅ NEW
  }),
});

export const collections = { blog };
