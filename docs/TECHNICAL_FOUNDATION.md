# Technical Foundation

## Status

Initial implementation for Stage 7.

## Stack

Accepted and implemented:

- Astro
- TypeScript
- React islands
- Tailwind CSS
- Astro sitemap integration

## Package Scripts

```bash
npm run dev
npm run check
npm run build
npm run preview
```

## Implemented Foundation

Configuration:

- `astro.config.mjs`
- `tsconfig.json`
- `tailwind.config.mjs`
- `postcss.config.mjs`
- `.editorconfig`
- `.gitignore`

Core source structure:

- `src/layouts/BaseLayout.astro`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/MobileStickyBar.astro`
- `src/components/QuoteForm.tsx`
- `src/components/ProductGroupCard.astro`
- `src/data/site.ts`
- `src/data/navigation.ts`
- `src/lib/i18n.ts`
- `src/lib/seo.ts`
- `src/types/content.ts`
- `src/styles/global.css`

Routes:

- `/`
- `/ru/`
- `/en/`
- `/ru/catalog/`
- `/en/catalog/`
- `/ru/catalog/{slug}/`
- `/en/catalog/{slug}/`
- `/ru/services/`
- `/en/services/`
- `/ru/services/{slug}/`
- `/en/services/{slug}/`
- `/ru/products/{slug}/`
- `/en/products/{slug}/`
- `/ru/industries/`
- `/en/industries/`
- `/ru/work/`
- `/en/work/`
- `/ru/clients/`
- `/en/clients/`
- `/ru/about/`
- `/en/about/`
- `/ru/faq/`
- `/en/faq/`
- `/ru/contact/`
- `/en/contact/`
- `/robots.txt`

Generated during build:

- static HTML pages;
- sitemap index through `@astrojs/sitemap`;
- Astro type files.

## Tailwind Decision

Tailwind is implemented through the stable PostCSS pipeline with Tailwind 3.

Reason:

The latest `@tailwindcss/vite` integration produced a build-time incompatibility in the current Astro/Vite/Rolldown toolchain. Tailwind 3 with PostCSS builds cleanly and is stable for the foundation.

## Validation

Current validation command:

```bash
npm run build
```

Expected result:

- Astro check passes.
- Astro static build passes.
- Sitemap is generated.

## Known Follow-Ups

- Replace placeholder visual blocks with real product imagery.
- Connect form submission backend or CRM later.
- Add real product/category data after product cards are provided.
- Replace temporary product cards with final client-approved product data.
- Add backend/CRM form submission for project briefs and sample requests.
- Add privacy and legal pages before production launch.
- Decide deployment provider.
- Review `npm audit` moderate findings before launch; do not use forced breaking fixes blindly.
