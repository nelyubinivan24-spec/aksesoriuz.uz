# Sitemap

## Purpose

Define the new website structure before UX wireframes and implementation.

The sitemap follows the approved strategy:

- universal B2B positioning;
- priority for HoReCA/hospitality, packaging, corporate products, production services, and uniforms;
- three discovery paths: by business type, by product type, and by production technology;
- quote-first conversion.

## Language Structure

Initial languages:

- Russian as the primary/default language.
- English as a secondary language.

Recommended URL approach:

- Russian: `/ru/...`
- English: `/en/...`

Homepage options:

1. Redirect `/` to `/ru/`.
2. Serve Russian homepage at `/` and keep `/ru/` as canonical-aligned alternate.

Recommended:

Redirect `/` to `/ru/` or serve `/ru/` as the canonical primary route. This avoids ambiguity and makes hreflang easier.

Future language option:

- Uzbek can be added later with `/uz/...` if content resources and SEO strategy support it.

## Top-Level Navigation

Recommended desktop navigation:

1. Products
2. Industries
3. Services
4. Work / Clients
5. About
6. FAQ
7. Contact
8. Request calculation

Recommended mobile navigation:

1. Products
2. For restaurants and cafes
3. For hotels
4. Packaging
5. Corporate gifts
6. Services
7. Contact
8. Sticky actions: call, messenger, quote

## Core Pages

### Home

Russian:

- `/ru/`

English:

- `/en/`

Purpose:

- communicate universal B2B production partner positioning;
- route users by business type, product category, or technology;
- drive quote requests.

Primary CTA:

- Request calculation.

Secondary CTA:

- View catalog.

### Products / Catalog

Russian:

- `/ru/catalog/`

English:

- `/en/catalog/`

Purpose:

- show all product groups;
- enable filtering by industry, material, branding method, and product type;
- convert catalog browsing into quote requests.

Primary CTA:

- Request calculation.

Secondary CTA:

- View price catalog, if available.

### Industries

Index:

- `/ru/industries/`
- `/en/industries/`

Industry pages:

- `/ru/industries/restaurants-cafes/`
- `/ru/industries/hotels-hospitality/`
- `/ru/industries/corporate-clients/`
- `/ru/industries/retail-packaging/`
- `/ru/industries/agencies-custom-projects/`

English:

- `/en/industries/restaurants-cafes/`
- `/en/industries/hotels-hospitality/`
- `/en/industries/corporate-clients/`
- `/en/industries/retail-packaging/`
- `/en/industries/agencies-custom-projects/`

Purpose:

- solve the "what do you make for my business?" question;
- group relevant products and services by buyer context.

### Services

Index:

- `/ru/services/`
- `/en/services/`

Service pages:

- `/ru/services/uv-printing/`
- `/ru/services/printing/`
- `/ru/services/foiling/`
- `/ru/services/laser-cutting-engraving/`
- `/ru/services/embossing/`
- `/ru/services/marking/`
- `/ru/services/food-photography/`
- `/ru/services/souvenir-production/`
- `/ru/services/uniforms-textile/`
- `/ru/services/carpentry-production/`

English:

- `/en/services/uv-printing/`
- `/en/services/printing/`
- `/en/services/foiling/`
- `/en/services/laser-cutting-engraving/`
- `/en/services/embossing/`
- `/en/services/marking/`
- `/en/services/food-photography/`
- `/en/services/souvenir-production/`
- `/en/services/uniforms-textile/`
- `/en/services/carpentry-production/`

Purpose:

- capture users searching by production technology;
- explain materials, use cases, examples, and request process.

### Work / Clients

Pages:

- `/ru/work/`
- `/en/work/`
- `/ru/clients/`
- `/en/clients/`

Optional future case pages:

- `/ru/work/{case-slug}/`
- `/en/work/{case-slug}/`

Purpose:

- show proof through clients, real products, industries, and cases.

### About

Pages:

- `/ru/about/`
- `/en/about/`

Purpose:

- explain production capability, process, team, experience, and geography.

### FAQ

Pages:

- `/ru/faq/`
- `/en/faq/`

Purpose:

- answer questions about materials, minimum order, timing, delivery, payment, samples, and branding methods.

### Contact

Pages:

- `/ru/contact/`
- `/en/contact/`

Purpose:

- direct inquiry route with form, phone, Telegram/WhatsApp, email, address, and working hours.

### Price Catalog

Optional pages:

- `/ru/price-catalog/`
- `/en/price-catalog/`

Purpose:

- support view/download/request price catalog mechanics.

Status:

- optional until pricing strategy is finalized.

### Legal / Utility

Pages:

- `/ru/privacy/`
- `/en/privacy/`
- `/ru/terms/`
- `/en/terms/`

Purpose:

- personal data and service/legal requirements.

## Catalog Category Pages

Primary category URLs:

- `/ru/catalog/restaurant-accessories/`
- `/ru/catalog/hotel-accessories/`
- `/ru/catalog/business-products/`
- `/ru/catalog/packaging-souvenirs/`
- `/ru/catalog/uniforms-textile/`
- `/ru/catalog/production-services/`

English equivalents:

- `/en/catalog/restaurant-accessories/`
- `/en/catalog/hotel-accessories/`
- `/en/catalog/business-products/`
- `/en/catalog/packaging-souvenirs/`
- `/en/catalog/uniforms-textile/`
- `/en/catalog/production-services/`

## Product Pages

Pattern:

- `/ru/products/{product-slug}/`
- `/en/products/{product-slug}/`

Rationale:

- Product URLs remain stable even if category membership changes.
- Products can belong to multiple categories or industries.
- SKU/code can be shown on the page but should not dominate the URL.

Example:

- `/ru/products/menu-folder-mmcbm-0001/`
- `/en/products/menu-folder-mmcbm-0001/`

## Recommended Footer Structure

Columns:

1. Products
2. Industries
3. Services
4. Company
5. Contact

Footer should include:

- phone;
- Telegram;
- WhatsApp;
- email;
- address;
- social links;
- privacy link.

## Sitemap Acceptance Criteria

This sitemap is accepted when:

- all key audiences have a route;
- all product groups have a route;
- service pages support technology-based search;
- quote request paths are present across page types;
- language structure is clear;
- URLs are stable enough for implementation.
