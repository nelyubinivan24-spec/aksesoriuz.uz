# Stage 10 Product Foundation

## Status

Implemented on 2026-05-31.

## Objective

Create a working product-card layer before final client product cards are available.

The client approved using the current `aksesoriuz.uz` website actively as a temporary source.

## Source

Temporary cards are based on:

- current RU sitemap: `https://aksesoriuz.uz/sitemap/lang/ru`;
- current product pages from `https://aksesoriuz.uz/ru/.../`;
- current product images from the website's public image paths.

## Implemented

Data:

- `src/data/products.ts`
- 32 temporary product cards.
- RU/EN titles.
- SKU/code.
- current-site legacy URL.
- current-site image URL.
- category mapping.
- draft status.
- materials, branding methods, industries.

Components:

- `src/components/ProductCard.astro`

Routes:

- `/ru/products/{slug}/`
- `/en/products/{slug}/`

Catalog integration:

- homepage draft product storefront;
- category product grids;
- related products on product pages;
- product quote and sample-request CTAs;
- links back to current-site source cards for traceability.

## Current Product Coverage

Draft cards cover:

- menu folders;
- check holders;
- check boxes;
- reserved signs;
- serving trays;
- napkin holders;
- table tents;
- clipboards;
- wooden tableware;
- proposal books;
- diaries;
- document folders;
- planners;
- business sets;
- cardholders;
- wallets;
- mouse pads;
- keychains;
- ID covers and badges;
- business card holders;
- gift boxes;
- branded bags;
- aprons;
- uniforms.

## Validation

Build command:

```bash
npm.cmd run build
```

Result:

- 0 errors;
- 0 warnings;
- 115 static pages built.

Browser checks:

- `/ru/`
- `/ru/catalog/restaurant-accessories/`
- `/ru/products/menu-folder-mmcbm-0001/`
- `/en/products/business-set-bznsnbr-0001/`
- mobile viewport `390x844` for `/ru/products/menu-folder-mmcbm-0001/`

Observed:

- no horizontal overflow;
- product cards render with images;
- product detail pages render RU/EN;
- project quote and sample-request CTAs are present.

## Limitations

These product cards are not final commercial content and should be treated as examples/references for B2B project discussion, not as self-service purchase products.

Before launch, each product should be replaced or confirmed with:

- approved name;
- final description;
- final images/gallery;
- exact material options;
- dimensions;
- MOQ;
- production timing;
- available branding methods;
- price or price-catalog logic if approved.
