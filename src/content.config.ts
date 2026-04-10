import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string(),
    readingTime: z.string(),
    category: z.string(),
    categoryVariant: z.enum(["tooling", "ai", "training", "design-system"]),
    summary: z.string(),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    kicker: z.string().optional(),
    seoTitle: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const cases = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cases" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string(),
    summary: z.string(),
    kicker: z.string(),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    seoTitle: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog, cases };
