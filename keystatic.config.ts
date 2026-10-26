import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  collections: {
    blog: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { frontmatter: 'yaml' },
      schema: {
        title: fields.text({ label: 'Titel' }),
        slug: fields.text({
          label: 'Slug',
          description: 'URL-slug, bijv. 2026-03-24-toolbox',
        }),
        date: fields.text({
          label: 'Datum',
          description: 'Schrijf de datum uit, bijv. 24 maart 2026',
        }),
        readingTime: fields.text({
          label: 'Leestijd',
          description: 'Bijv. 3 min',
        }),
        category: fields.text({
          label: 'Categorie',
          description: 'Weergegeven label op de blog card, bijv. Workflow',
        }),
        categoryVariant: fields.select({
          label: 'Categorie variant',
          description: 'Bepaalt de kleur van de tag',
          options: [
            { label: 'Tooling', value: 'tooling' },
            { label: 'Artificial Intelligence', value: 'ai' },
            { label: 'Training', value: 'training' },
            { label: 'Design System', value: 'design-system' },
            { label: 'Design', value: 'design' },
            { label: 'Workflow', value: 'workflow' },
          ],
          defaultValue: 'design',
        }),
        summary: fields.text({
          label: 'Samenvatting',
          description: 'Getoond op de blog listing card. Geen punt aan het einde.',
          multiline: true,
        }),
        heroImage: fields.image({
          label: 'Hero afbeelding',
          directory: 'public',
          publicPath: '/',
          description: 'Naamgeving: featured-YYYY-MM-DD.png',
        }),
        heroImageAlt: fields.text({ label: 'Hero afbeelding alt-tekst' }),
        kicker: fields.text({
          label: 'Kicker',
          validation: { isRequired: false },
        }),
        seoTitle: fields.text({
          label: 'SEO titel',
          description: 'Optioneel. Valt terug op titel als leeg.',
          validation: { isRequired: false },
        }),
        draft: fields.checkbox({
          label: 'Draft (verborgen in listing)',
          defaultValue: true,
        }),
      },
    }),

    cases: collection({
      label: 'Cases',
      slugField: 'title',
      path: 'src/content/cases/*',
      format: { frontmatter: 'yaml' },
      schema: {
        title: fields.text({ label: 'Titel' }),
        slug: fields.text({
          label: 'Slug',
          description: 'URL-slug, bijv. 2025-09-23-helderheid-in-het-universum',
        }),
        date: fields.text({
          label: 'Datum',
          description: 'Schrijf de datum uit, bijv. 23 september 2025',
        }),
        summary: fields.text({
          label: 'Samenvatting',
          description: 'Getoond op homepage en showcase card. Geen punt aan het einde.',
          multiline: true,
        }),
        kicker: fields.text({
          label: 'Kicker',
          description: 'Tags, bijv. UX / User Research / Design System',
        }),
        heroImage: fields.image({
          label: 'Hero afbeelding',
          directory: 'public',
          publicPath: '/',
          description: 'Naamgeving: thumb###.png',
        }),
        heroImageAlt: fields.text({ label: 'Hero afbeelding alt-tekst' }),
        seoTitle: fields.text({
          label: 'SEO titel',
          description: 'Optioneel. Valt terug op titel als leeg.',
          validation: { isRequired: false },
        }),
        draft: fields.checkbox({
          label: 'Draft (verborgen in listing)',
          defaultValue: true,
        }),
      },
    }),
  },
});
