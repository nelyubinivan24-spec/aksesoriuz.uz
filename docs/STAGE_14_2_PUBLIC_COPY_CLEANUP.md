# Stage 14.2 Public Copy Cleanup

## Status

Implemented on 2026-05-31.

## Reason

The public site still contained process-oriented wording that explained the rebuild itself, such as references to the new structure, the current site, future content stages, and integration work.

That wording is not appropriate for visitors. The website should communicate only the business offer, product categories, production capabilities, project calculation logic, and trust signals.

## Implemented Cleanup

- Removed public copy about the site being rebuilt or structured.
- Removed public copy about the current site being a source.
- Removed public copy about future content stages and integration stages.
- Rewrote homepage text around production, materials, branding, and B2B quote logic.
- Rewrote catalog, subcategory, product, service, FAQ, about, clients, and work pages to use client-facing commercial language.
- Replaced old-source product descriptions with neutral project-reference descriptions.

## Validation

Commands run:

- `npm run check`
- `npm run check:legacy-migration`
- `npm run build`

Browser checks:

- `/ru/`
- `/ru/catalog/business-products/`
- `/ru/catalog/business-products/diaries/`
- `/ru/products/diary-blknt-0001/`
- `/ru/work/`
- `/en/`

Checked:

- no visible phrases about new structure, current site, next content stage, integration stage, migration, backlog, or manifest on tested pages;
- no horizontal overflow on tested desktop viewport.
