# Stage 13 B2B Catalog Coverage System

## Status

Implemented on 2026-05-31.

## Purpose

Stage 13 converts the current-site inventory into maintainable project data.

The goal is to make sure every product URL from the original website has a migration decision before launch, even if final client-approved product cards are not ready yet.

## Sources

- `https://aksesoriuz.uz/sitemap/lang/ru`
- `https://aksesoriuz.uz/sitemap/lang/en`
- Existing rebuild product data in `src/data/products.ts`

## Implemented Data

### Legacy Migration Manifest

File:

- `src/data/legacyMigration.ts`

Generated from:

- `scripts/generate-legacy-migration.mjs`

NPM commands:

- `npm run generate:legacy-migration`
- `npm run check:legacy-migration`

Coverage:

| Metric | Count |
| --- | ---: |
| RU sitemap URLs | 305 |
| EN sitemap URLs | 304 |
| RU product URLs | 255 |
| EN product URLs | 255 |
| Already modeled B2B reference pages | 32 |
| Backlog reference records | 223 |
| RU product records without exact EN SKU match | 3 |

Each record includes:

- original RU slug;
- original RU URL;
- matching EN URLs when found;
- SKU;
- SKU code;
- canonical family ID;
- target catalog group;
- migration decision;
- current or proposed destination.

### Migration Decisions

The current decision types are:

- `modeled-reference-page`: the old URL is already represented by an existing B2B reference product page in the rebuild.
- `family-reference-backlog`: the old URL still needs lightweight reference data or a final client-approved product card.

This prevents accidental product loss while avoiding premature creation of weak product pages.

### Product Family Taxonomy

The manifest maps SKU/code families to canonical product families:

- menu folders;
- checkholders;
- check boxes;
- boxes and packaging;
- reserved signs;
- diaries and notebooks;
- serving trays;
- mouse pads;
- ID covers and badges;
- document folders;
- napkin holders;
- clipboards;
- cardholders;
- cup holders;
- stands and holders;
- business card holders;
- uniforms;
- business sets;
- aprons;
- table tents;
- packaging;
- keychains;
- wooden tableware;
- proposal books;
- wallets;
- planners.

### Subcategory Coverage Data

File:

- `src/data/catalogCoverage.ts`

Coverage:

- 30 original product/category subcategories;
- each mapped to a new top-level catalog group;
- each marked for `subcategory-landing-page` strategy;
- each connected to canonical product family IDs.

This is the base for future subcategory landing pages, filters, and SEO pages.

## Rules Confirmed

Do not create self-service purchase mechanics.

Do create:

- B2B reference pages;
- product-family pages;
- subcategory landing pages;
- project brief conversion;
- sample request paths;
- manager handoff paths.

## Stage 14 Recommendation

Next stage should be: Subcategory landing pages and catalog navigation upgrade.

Required outcomes:

1. Add dynamic routes for subcategory landing pages.
2. Show subcategory cards on catalog group pages using `legacySubcategoryCoverage`.
3. Connect each subcategory to matching product families and reference products.
4. Add project brief CTA to each subcategory page.
5. Add SEO title/description rules for subcategories.
6. Keep product pages as references until final product cards are approved.

## Validation

Commands run:

- `npm run generate:legacy-migration`
- `npm run check:legacy-migration`
- `npm run check`
- `npm run build`
