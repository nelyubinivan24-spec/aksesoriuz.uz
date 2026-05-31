# SEO Structure

## Purpose

Define URL, metadata, indexing, and structured data rules for the rebuilt website.

The SEO strategy supports:

- commercial discovery in Russian and English;
- future Uzbek expansion;
- scalable product/category indexing;
- quote-first B2B conversion;
- clean technical SEO.

## URL Rules

General rules:

- Use lowercase Latin slugs.
- Use hyphens, not underscores.
- Keep URLs stable.
- Avoid category-dependent product URLs.
- Avoid duplicate routes with and without trailing slash.
- Use one canonical URL per page.

Language prefixes:

- Russian: `/ru/`
- English: `/en/`

Recommended trailing slash:

- Use trailing slash consistently.

Example:

- `/ru/catalog/restaurant-accessories/`
- `/en/catalog/restaurant-accessories/`

## Core URL Patterns

Home:

- `/ru/`
- `/en/`

Catalog:

- `/ru/catalog/`
- `/en/catalog/`

Category:

- `/ru/catalog/{category-slug}/`
- `/en/catalog/{category-slug}/`

Product:

- `/ru/products/{product-slug}/`
- `/en/products/{product-slug}/`

Industry:

- `/ru/industries/{industry-slug}/`
- `/en/industries/{industry-slug}/`

Service:

- `/ru/services/{service-slug}/`
- `/en/services/{service-slug}/`

Work/cases:

- `/ru/work/`
- `/ru/work/{case-slug}/`
- `/en/work/`
- `/en/work/{case-slug}/`

## Canonical Rules

Each indexable page must have:

- canonical URL;
- language alternates;
- x-default if appropriate.

Product canonical:

- product canonical should point to `/products/{product-slug}/`, not category URL.

Filter canonical:

- filtered catalog URLs should not be indexed unless intentionally created as SEO landing pages.

Recommended:

- catalog filters use query state or client-side state;
- only curated category/industry/service pages are indexable.

## Hreflang

Required for translated pages:

- `ru`
- `en`
- `x-default`

Future:

- `uz` when Uzbek content is added.

## Metadata Templates

### Homepage

Title pattern:

- `Aksessoriuz — branded products, packaging and accessories for business`

Russian direction:

- `Aksessoriuz — брендированная продукция, упаковка и аксессуары для бизнеса`

Description should mention:

- custom production;
- restaurants, hotels, corporate clients;
- quote request;
- Tashkent/Uzbekistan where natural.

### Category Page

Title pattern:

- `{Category} in Tashkent | Custom production by Aksessoriuz`

Russian direction:

- `{Категория} в Ташкенте на заказ | Aksessoriuz`

Description should mention:

- product group;
- materials or branding;
- quote/request;
- business audience.

### Product Page

Title pattern:

- `{Product name} | Custom branded production in Tashkent`

Russian direction:

- `{Название товара} на заказ в Ташкенте | Aksessoriuz`

Description should mention:

- product purpose;
- materials;
- branding methods;
- quote request.

### Industry Page

Title pattern:

- `Branded products for {Industry} | Aksessoriuz`

Russian direction:

- `Брендированная продукция для {сегмент} | Aksessoriuz`

Description should mention:

- products for that business type;
- relevant categories;
- custom production;
- quote request.

### Service Page

Title pattern:

- `{Service} in Tashkent | Aksessoriuz`

Russian direction:

- `{Услуга} в Ташкенте | Aksessoriuz`

Description should mention:

- technology;
- compatible materials;
- business use cases;
- request/consultation.

## Heading Rules

Each page must have:

- exactly one H1;
- logical H2/H3 structure;
- no empty headings;
- no duplicated H1 blocks caused by sliders or hidden mobile sections.

## Structured Data

Recommended Schema.org:

### Organization

Use on all pages:

- name;
- URL;
- logo;
- contact details;
- social profiles;
- address if confirmed.

### LocalBusiness

Use if address and business details are confirmed.

Fields:

- name;
- address;
- phone;
- opening hours;
- area served.

### Product

Use on product pages.

Fields:

- name;
- image;
- description;
- SKU;
- brand;
- category.

Price:

- omit fixed price unless reliable;
- avoid fake `Offer` data.

### Service

Use on service pages.

Fields:

- serviceType;
- provider;
- areaServed;
- description.

### FAQPage

Use on FAQ sections where questions and answers are visible on page.

## Indexing Strategy

Index:

- homepage;
- main catalog page;
- curated category pages;
- product pages with real content/images;
- industry pages;
- service pages;
- work/case pages;
- FAQ;
- contact;
- price catalog page if public and useful.

Noindex or avoid generating:

- empty product pages;
- search result pages;
- filtered pages with thin duplicate content;
- internal form success pages;
- test/demo pages;
- incomplete English pages.

## Sitemap Rules

Generate XML sitemap automatically.

Include:

- canonical indexable pages;
- lastmod if available;
- language alternates if supported by framework/tooling.

Exclude:

- query URLs;
- filter states;
- internal API routes;
- non-public pages.

## Robots Rules

Allow public pages.

Disallow:

- internal API routes;
- admin routes if any;
- search result pages if generated;
- temporary previews if any.

## Image SEO

Each product image should have descriptive alt text.

Alt pattern:

- `{product name} made from {material} for {industry}`

Russian direction:

- `{название товара} из {материал} для {сегмент}`

Avoid:

- empty alt on meaningful product images;
- file names as alt;
- repeated generic alt like "image".

## SEO Landing Page Backlog

Initial high-priority SEO pages:

### HoReCA

- menu covers;
- menu folders;
- check holders;
- table tents;
- reserved signs;
- placemats;
- napkin holders.

### Hotels

- hotel folders;
- guest information folders;
- branded hotel accessories;
- key holders.

### Business Products

- business sets;
- diaries with logo;
- folders with logo;
- cardholders;
- corporate gifts.

### Packaging

- branded packaging;
- gift boxes;
- branded bags;
- premium packaging.

### Services

- UV printing;
- laser cutting and engraving;
- embossing;
- foiling;
- printing.

## Technical SEO Acceptance Criteria

Stage 3 SEO structure is accepted when:

- URL patterns are clear;
- canonical and hreflang rules are defined;
- metadata templates are defined;
- structured data plan is defined;
- index/noindex rules are defined;
- sitemap and robots rules are defined;
- image SEO rules are defined.

