# Content Model

## Purpose

Define the data structure for the new website before implementation.

The content model must support:

- bilingual content;
- scalable product catalog;
- industry-based navigation;
- production-service pages;
- quote-first conversion;
- SEO metadata;
- product relationships;
- future CMS migration.

## Content Architecture

Recommended content entities:

1. Product.
2. Product category.
3. Product subcategory.
4. Industry.
5. Service / production technology.
6. Material.
7. Branding method.
8. Case study / work example.
9. Client.
10. FAQ item.
11. Lead form configuration.
12. SEO metadata.

Implementation direction:

- Use structured content files first.
- Keep the model CMS-ready.
- Avoid hardcoding product cards directly into page templates.

## Localization Model

Each entity should support at least:

- Russian (`ru`);
- English (`en`).

Recommended pattern:

```ts
{
  id: "menu-folder-mmcbm-0001",
  slug: {
    ru: "menu-folder-mmcbm-0001",
    en: "menu-folder-mmcbm-0001"
  },
  title: {
    ru: "Папка для меню MMCBM-0001",
    en: "Menu folder MMCBM-0001"
  }
}
```

Rules:

- Do not publish incomplete English pages with Russian UI text.
- If translation is not ready, either hide the page from EN navigation or clearly mark translation as pending in content workflow.
- Slugs may be shared across languages for operational simplicity.

## Shared Field Types

### Localized String

```ts
type LocalizedString = {
  ru: string;
  en: string;
}
```

### Localized Rich Text

```ts
type LocalizedRichText = {
  ru: string;
  en: string;
}
```

### SEO Metadata

```ts
type SeoMeta = {
  title: LocalizedString;
  description: LocalizedString;
  keywords?: {
    ru?: string[];
    en?: string[];
  };
  ogImage?: string;
  noindex?: boolean;
}
```

### Image Asset

```ts
type ImageAsset = {
  src: string;
  alt: LocalizedString;
  caption?: LocalizedString;
  type?: "hero" | "gallery" | "detail" | "process" | "client";
}
```

Image rules:

- Every meaningful product image needs descriptive alt text.
- File names should be stable and descriptive.
- Product images should support WebP/AVIF conversion during implementation.

## Product Model

Purpose:

Represent one sellable or requestable product.

Recommended fields:

```ts
type Product = {
  id: string;
  sku?: string;
  status: "draft" | "review" | "published" | "archived";
  slug: LocalizedString;
  title: LocalizedString;
  shortTitle?: LocalizedString;
  summary: LocalizedString;
  description: LocalizedRichText;
  categoryIds: string[];
  subcategoryIds?: string[];
  industryIds: string[];
  materialIds?: string[];
  brandingMethodIds?: string[];
  serviceIds?: string[];
  useCaseIds?: string[];
  colors?: LocalizedString[];
  dimensions?: string;
  moq?: string;
  productionTime?: string;
  priceMode: "quote" | "from-price" | "fixed" | "hidden";
  priceFrom?: number;
  currency?: "UZS" | "USD";
  images: ImageAsset[];
  relatedProductIds?: string[];
  relatedServiceIds?: string[];
  badges?: LocalizedString[];
  ctaLabel?: LocalizedString;
  seo: SeoMeta;
}
```

Required fields for launch:

- id;
- status;
- slug;
- title;
- summary;
- categoryIds;
- industryIds;
- images;
- priceMode;
- seo.

Optional but recommended:

- materials;
- branding methods;
- MOQ;
- production time;
- related products;
- related services.

Product page must not require:

- fixed price;
- direct checkout;
- online payment.

## Product Category Model

Purpose:

Represent top-level and SEO-relevant catalog groups.

```ts
type ProductCategory = {
  id: string;
  slug: LocalizedString;
  title: LocalizedString;
  navigationTitle?: LocalizedString;
  summary: LocalizedString;
  description: LocalizedRichText;
  priority: "high" | "medium" | "low";
  parentId?: string;
  heroImage?: ImageAsset;
  featuredProductIds?: string[];
  relatedIndustryIds?: string[];
  relatedServiceIds?: string[];
  seo: SeoMeta;
}
```

Initial top-level category IDs:

- `restaurant-accessories`
- `hotel-accessories`
- `business-products`
- `packaging-souvenirs`
- `uniforms-textile`
- `production-services`

## Industry Model

Purpose:

Represent buyer-specific landing pages.

```ts
type Industry = {
  id: string;
  slug: LocalizedString;
  title: LocalizedString;
  summary: LocalizedString;
  description: LocalizedRichText;
  painPoints: LocalizedString[];
  recommendedCategoryIds: string[];
  featuredProductIds?: string[];
  serviceIds?: string[];
  proofClientIds?: string[];
  faqIds?: string[];
  heroImage?: ImageAsset;
  seo: SeoMeta;
}
```

Initial industry IDs:

- `restaurants-cafes`
- `hotels-hospitality`
- `corporate-clients`
- `retail-packaging`
- `agencies-custom-projects`

## Service Model

Purpose:

Represent production technologies and service landing pages.

```ts
type Service = {
  id: string;
  slug: LocalizedString;
  title: LocalizedString;
  summary: LocalizedString;
  description: LocalizedRichText;
  compatibleMaterialIds?: string[];
  relatedCategoryIds?: string[];
  relatedProductIds?: string[];
  processSteps?: {
    title: LocalizedString;
    description: LocalizedString;
  }[];
  examples?: ImageAsset[];
  faqIds?: string[];
  seo: SeoMeta;
}
```

Initial service IDs:

- `uv-printing`
- `laser-cutting-engraving`
- `embossing`
- `foiling`
- `printing`
- `marking`
- `food-photography`
- `custom-production`

## Material Model

Purpose:

Power product specs, filters, and educational content.

```ts
type Material = {
  id: string;
  title: LocalizedString;
  summary?: LocalizedString;
  compatibleServiceIds?: string[];
  image?: ImageAsset;
}
```

Initial material IDs:

- `eco-leather`
- `natural-leather`
- `wood`
- `plywood`
- `acrylic`
- `metal`
- `textile`
- `paper-cardboard`
- `plastic`
- `mixed`

## Branding Method Model

Purpose:

Power filters, product specs, service relationships, and quote forms.

```ts
type BrandingMethod = {
  id: string;
  title: LocalizedString;
  summary?: LocalizedString;
  relatedServiceId?: string;
  compatibleMaterialIds?: string[];
}
```

Initial branding method IDs:

- `uv-printing`
- `laser-engraving`
- `embossing`
- `foiling`
- `printing`
- `embroidery`
- `marking`

## Case Study Model

Purpose:

Show proof through real work and client outcomes.

```ts
type CaseStudy = {
  id: string;
  status: "draft" | "published";
  slug: LocalizedString;
  title: LocalizedString;
  clientId?: string;
  industryIds: string[];
  categoryIds: string[];
  productIds?: string[];
  serviceIds?: string[];
  summary: LocalizedString;
  challenge?: LocalizedRichText;
  solution?: LocalizedRichText;
  result?: LocalizedRichText;
  images: ImageAsset[];
  seo: SeoMeta;
}
```

Case studies can be added later. The content model should support them from the beginning.

## Client Model

Purpose:

Represent logos and client proof.

```ts
type Client = {
  id: string;
  name: string;
  logo?: ImageAsset;
  industryIds?: string[];
  website?: string;
  canPublish: boolean;
  sortOrder?: number;
}
```

Rules:

- Only publish logos with `canPublish: true`.
- Keep client names consistent.
- Prefer high-quality vector or transparent logos where available.

## FAQ Model

Purpose:

Support global FAQ, category FAQ, product FAQ, and service FAQ.

```ts
type FaqItem = {
  id: string;
  question: LocalizedString;
  answer: LocalizedRichText;
  topicIds?: string[];
  relatedCategoryIds?: string[];
  relatedIndustryIds?: string[];
  relatedServiceIds?: string[];
  sortOrder?: number;
}
```

FAQ topics:

- materials;
- minimum order;
- production time;
- delivery;
- payment;
- samples;
- branding methods;
- price catalog;
- custom orders.

## Lead Form Configuration

Purpose:

Keep form labels and context consistent.

```ts
type LeadFormConfig = {
  id: string;
  type: "quote" | "product" | "sample" | "brief" | "price-catalog" | "contact";
  title: LocalizedString;
  description?: LocalizedString;
  submitLabel: LocalizedString;
  successMessage: LocalizedString;
  requiredFields: string[];
  optionalFields: string[];
}
```

## SEO Rules By Entity

### Product

Required:

- title;
- description;
- canonical path;
- image alt;
- Product schema without fake price.

### Category

Required:

- commercial H1;
- intro text;
- unique title and description;
- FAQ where possible.

### Industry

Required:

- audience-specific H1;
- relevant product groups;
- proof/client examples;
- quote CTA.

### Service

Required:

- service H1;
- compatible materials;
- examples;
- Service schema;
- related products.

## Status Workflow

Recommended statuses:

- `draft`: incomplete content;
- `review`: ready for internal review;
- `published`: public;
- `archived`: hidden from navigation and sitemap.

Publishing rule:

Only `published` content should appear in production navigation, sitemap, and indexable pages.

## Data Quality Rules

Before launch, each published product must have:

- real product name;
- no demo placeholders;
- at least one image;
- meaningful alt text;
- category;
- industry;
- quote CTA;
- SEO title;
- SEO description.

Before launch, each published EN page must have:

- English title;
- English UI labels;
- English description;
- no Russian leftovers except brand/product names where intentional.

## Future CMS Compatibility

The model should be easy to migrate to:

- Decap CMS;
- Sanity;
- Strapi;
- Contentful;
- custom admin;
- spreadsheet-driven import.

Do not rely on framework-only assumptions that would make later CMS migration difficult.

