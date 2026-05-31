# Original Site Inventory

## Purpose

Keep the rebuilt website aligned with the existing `aksesoriuz.uz` product and service coverage.

The new design, structure, and mechanics can change, but the product and capability scope should not become poorer than the current site.

## Extraction

Source:

- `https://aksesoriuz.uz/sitemap/lang/ru`

Checked:

- 2026-05-31

Observed RU sitemap:

- 305 URLs total.
- 34 category/catalog URLs.
- 11 service/capability URLs.
- About 255 product detail URLs detected in the crawl.
- Main info pages: home, about, FAQ, contacts, clients.

## Current Main Product Groups

### Business Products

Original URL:

- `https://aksesoriuz.uz/ru/biznes-produkcija/`

Subcategories on current site:

- business sets;
- diaries;
- keychains;
- business card holders;
- cardholders;
- catalogues and proposal books;
- mouse pads;
- wallets, portmone, clutches;
- paper folders and signature folders;
- planners;
- placemats;
- cup holders;
- certificates and badges.

### Hotels

Original URL:

- `https://aksesoriuz.uz/ru/dlja-gostinic/`

Subcategories on current site:

- menu and folders;
- napkin holders;
- serving trays / menazhnitsy.

### Restaurants and Cafes

Original URL:

- `https://aksesoriuz.uz/ru/dlja-restoranov-i-kafe/`

Subcategories on current site:

- menu covers and bar menu covers;
- checkholders;
- checkboxes;
- reserved signs;
- serving trays / menazhnitsy;
- napkin holders;
- table tents;
- business card and flyer holders;
- tablets / clipboards;
- toothpick holders;
- wooden tableware;
- placemats.

### Packaging and Souvenirs

Original URL:

- `https://aksesoriuz.uz/ru/upakovka-i-suvenirnaja-produkcija/`

Current site treats this as a major product group. The rebuilt site should keep it as a top-level category and expand it into structured packaging/souvenir subcategories as product cards are provided.

### Uniform

Original URL:

- `https://aksesoriuz.uz/ru/uniforma/`

Current site treats uniform as a product category. The rebuilt site should keep it as both:

- a product group;
- a service/content path through uniforms and textile production.

## Current Service / Capability Pages

The current site includes these production/service capabilities:

- embossing;
- services index;
- UV printing;
- printing;
- foiling;
- laser cutting and engraving;
- food photography;
- marking;
- packaging and souvenir production;
- uniforms and textile products;
- carpentry production.

## Product Families Observed In Product URLs

The current product URLs strongly indicate these large families:

- menu folders / menu covers;
- checkholders;
- checkboxes;
- diaries and notebooks;
- planners;
- paper/document folders;
- catalogues and proposal books;
- business sets;
- reserves;
- placemats;
- mats;
- trays and wooden tableware;
- napkin holders;
- table tents;
- business card and flyer holders;
- toothpick holders;
- uniforms;
- aprons;
- boxes;
- badges and ID products;
- cardholders;
- business card holders;
- wallets and accessories.

## Rebuild Rule

The new website must keep all existing commercial coverage available through one or more of:

- catalog category;
- subcategory;
- industry page;
- service page;
- product tag/filter;
- SEO landing page.

It is acceptable to rename and reorganize categories for better UX, but not to remove commercial capabilities.

## Implementation Rule

The codebase should keep a canonical taxonomy source in `src/data/catalog.ts`.

This source should include:

- complete top-level groups;
- legacy/current-site category mapping;
- capability/service list;
- product family names;
- original URLs for traceability.

## Stage 8 Implementation Status

Implemented in the Astro foundation:

- `src/data/catalog.ts` as the canonical taxonomy source.
- Catalog index pages for RU and EN.
- Dynamic catalog group pages for RU and EN.
- Services index pages for RU and EN.
- Dynamic service/capability pages for RU and EN.
- Industry, work, client, about, FAQ, and contact routes for RU and EN.

Current limitation:

- Individual product detail pages from the old sitemap are not migrated yet because the client will provide new product cards. The old product URL count is kept as a migration control point, and every new product card should be mapped to this taxonomy before launch.
