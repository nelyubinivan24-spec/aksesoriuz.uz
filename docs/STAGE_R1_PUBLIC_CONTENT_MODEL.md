# Stage R1 Public Content Model

Date: 2026-05-31

## Purpose

Separate public commercial product content from internal migration and SEO-control data.

This stage prevents internal terms such as migration, backlog, manifest, draft status, legacy URL, and source section from being rendered on public pages.

## Changes

- Added public product-family profiles in `src/data/productFamilies.ts`.
- Rebuilt `src/data/products.ts` as public commercial product data.
- Removed `ProductStatus`, `draft-from-current-site`, and `legacyUrl` from the public `Product` type.
- Added `src/data/productTraceability.ts` for internal mapping between modeled product pages and original RU URLs.
- Updated `scripts/generate-legacy-migration.mjs` to read traceability from the internal traceability file instead of public product records.
- Rebuilt `ProductCard` around B2B commercial fields:
  - custom-made badge;
  - family label;
  - use case;
  - materials;
  - quote-first CTA.
- Removed direct `legacyMigration.ts` imports from public category and subcategory pages.
- Removed public links to original source sections from subcategory pages.
- Reworked product detail pages so they describe custom production and quote requirements instead of internal reference status.
- Cleaned public wording that used "reference item", "draft", "source section", and similar internal/project terms.

## Internal Data Boundary

Public layer:

- `src/data/products.ts`
- `src/data/productFamilies.ts`
- catalog/category/service/page components

Internal control layer:

- `src/data/legacyMigration.ts`
- `src/data/productTraceability.ts`
- `scripts/generate-legacy-migration.mjs`

Rule:

- public pages can use public product families and product data;
- public pages must not import `legacyMigration.ts`;
- old URL coverage remains traceable through internal data and the migration check.

## Verification

Commands:

- `npm run check`
- `npm run check:legacy-migration`
- `npm run build`

Browser checks:

- `/ru/`
- `/ru/catalog/`
- `/ru/catalog/business-products/`
- `/ru/catalog/business-products/diaries/`
- `/ru/products/diary-blknt-0001/`
- `/en/catalog/business-products/`
- `/en/products/diary-blknt-0001/`

Results:

- no forbidden public terms found on checked pages;
- no horizontal overflow found on checked pages;
- build completed with 175 generated pages.

## Remaining Work

This stage does not finish the premium redesign. It creates the safety boundary needed before the homepage, catalog, category, product, service, and industry pages are redesigned in the following stages.

