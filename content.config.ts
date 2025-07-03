import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/**",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string().or(z.date()),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().optional().default(false),
      }),
    }),
  },
});

