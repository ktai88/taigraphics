# TaiGraphics

Portfolio + blog built with Astro.

## Content Collections

Blog and case detail pages are markdown-driven:

- Blog entries: `src/content/blog/*.md`
- Case entries: `src/content/cases/*.md`
- Collection schema: `src/content.config.ts`

Routes are generated automatically:

- Blog detail: `/blog/[slug]` via `src/pages/blog/[slug].astro`
- Case detail: `/cases/[slug]` via `src/pages/cases/[slug].astro`

Overview pages auto-update from collections:

- Blog overview: `src/pages/blog.astro`
- Homepage case cards: `src/pages/index.astro`

## Publishing Workflow

1. Copy a template:
   - `docs/blog-post-template.md`
   - `docs/case-template.md`
2. Add your new file in:
   - `src/content/blog/`
   - `src/content/cases/`
3. Keep `draft: true` while writing.
4. Set `draft: false` (or remove `draft`) when ready to publish.
5. Run `npm run build` to verify.

`draft: true` hides entries from:

- blog/case overview cards
- generated detail routes

## Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server |
| `npm run build` | Build production site |
| `npm run preview` | Preview built site |
