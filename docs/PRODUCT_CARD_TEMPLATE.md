# Product Card Input Template

## Purpose

Use this template when providing new product cards for the catalog.

The more fields provided, the stronger the product page and SEO will be. Unknown fields can be left blank and filled later.

## Minimum Required Data

For each product, provide at least:

- product name;
- product category;
- short description;
- product images;
- target industry or use case;
- available materials if known;
- branding methods if known.

## Product Input Template

```md
## Product

Product name:

Product code / SKU:

Category:

Subcategory:

Target industries:

Short description:

Full description:

Materials:

Colors:

Dimensions:

Branding methods:

Minimum order:

Production time:

Price mode:
- quote
- from-price
- fixed
- hidden

Price from:

Currency:

Use cases:

Related products:

Related services:

Images:
- file name / link:
- alt description:

SEO title:

SEO description:

Notes:
```

## Spreadsheet Columns

If products are provided as a spreadsheet, use these columns:

```text
id
sku
status
ru_title
en_title
ru_slug
en_slug
ru_summary
en_summary
ru_description
en_description
category_ids
subcategory_ids
industry_ids
material_ids
branding_method_ids
service_ids
colors
dimensions
moq
production_time
price_mode
price_from
currency
image_files
ru_image_alt
en_image_alt
related_product_ids
related_service_ids
ru_seo_title
en_seo_title
ru_seo_description
en_seo_description
notes
```

## Category IDs

Use these top-level category IDs:

- `restaurant-accessories`
- `hotel-accessories`
- `business-products`
- `packaging-souvenirs`
- `uniforms-textile`
- `production-services`

## Industry IDs

Use these industry IDs:

- `restaurants-cafes`
- `hotels-hospitality`
- `corporate-clients`
- `retail-packaging`
- `agencies-custom-projects`

## Material IDs

Use these material IDs:

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

## Branding Method IDs

Use these branding method IDs:

- `uv-printing`
- `laser-engraving`
- `embossing`
- `foiling`
- `printing`
- `embroidery`
- `marking`

## Price Mode Rules

Recommended default:

- `quote`

Use `from-price` only when a reliable starting price is available and can be maintained.

Use `fixed` only for products that truly have stable prices.

Use `hidden` for products that should be shown as examples but not priced publicly.

## Image Rules

Preferred:

- real product photos;
- clean background or context photo;
- close-up details;
- consistent naming.

Avoid:

- placeholder images;
- irrelevant demo products;
- low-resolution screenshots;
- images with unrelated logos unless permitted.

## Good Product Description Pattern

Use this structure:

1. What the product is.
2. Who it is for.
3. Where it is used.
4. Materials and finish.
5. Branding options.
6. How to request calculation.

Example structure:

```text
Custom menu folder for restaurants, cafes, and hotels. Made from eco-leather with optional logo application by UV printing, embossing, or laser engraving. Suitable for main menus, bar menus, and premium guest presentation. Request calculation based on quantity, material, and branding method.
```

