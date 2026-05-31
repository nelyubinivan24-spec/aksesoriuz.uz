# Stage 14 Subcategory Landing Pages

## Status

Implemented on 2026-05-31.

## Purpose

Stage 14 turns the catalog coverage data from Stage 13 into visible B2B navigation and landing pages.

The goal is to make the original product subcategories discoverable in the new site without creating self-service purchase mechanics.

## Implemented Routes

New dynamic routes:

- `/ru/catalog/{group}/{subcategory}/`
- `/en/catalog/{group}/{subcategory}/`

Generated pages:

- 30 RU subcategory landing pages;
- 30 EN subcategory landing pages;
- 60 new static pages total.

Examples:

- `/ru/catalog/restaurant-accessories/restaurant-menu-covers/`
- `/ru/catalog/business-products/diaries/`
- `/en/catalog/business-products/diaries/`

## Implemented UX

Catalog group pages now show current-site subcategory cards that link to landing pages instead of sending users directly to a contact form.

Each subcategory page includes:

- back link to parent catalog group;
- B2B product-direction hero;
- source/current-site section link;
- legacy URL count;
- modeled reference count;
- backlog count;
- product family coverage cards;
- available reference product cards;
- project brief CTA.

## Business Logic

Subcategory pages are not product purchase pages.

They are B2B decision pages that help a buyer:

- choose a product direction;
- understand which product families are covered;
- see available reference items;
- request a project calculation;
- request manager discussion around materials, branding, quantity, and timing.

## Data Used

- `src/data/catalogCoverage.ts`
- `src/data/legacyMigration.ts`
- `src/data/products.ts`
- `src/data/catalog.ts`

## Validation

Commands run:

- `npm run check`
- `npm run build`

Build result:

- 175 static pages generated;
- 0 errors;
- 0 warnings.

Browser checks:

- `/ru/catalog/restaurant-accessories/`
- `/ru/catalog/restaurant-accessories/restaurant-menu-covers/`
- `/en/catalog/business-products/diaries/`
- mobile `/ru/catalog/business-products/diaries/`

Checked:

- required B2B CTAs are present;
- no old purchase-list wording is visible;
- no horizontal overflow on tested desktop/mobile viewports.

## Stage 15 Recommendation

Next stage should be: Lightweight reference pages for backlog product records.

Required outcomes:

1. Create a route strategy for the 223 backlog records in `legacyMigration.ts`.
2. Decide which backlog records become public lightweight reference pages.
3. Decide which backlog records redirect to subcategory/family pages.
4. Add SEO-safe metadata for lightweight reference records.
5. Keep all pages as B2B references with project brief conversion.
6. Prepare old URL redirect rules for production.
