# Client Input Log

This file records approved client inputs that affect strategy, UX, content, and technical decisions.

## 2026-05-31: Stage 1 Strategy Inputs

### Client Priority

The website should not exclude or strongly de-prioritize any major client group. Aksessoriuz is interested in all qualified clients, while the strongest commercial emphasis should be guided by market research and profitability.

Implication:

- Build a universal B2B website structure.
- Keep all major product and audience segments accessible.
- Use market research and business data to decide which segments receive stronger homepage, SEO, and campaign emphasis.

### Category Priority

All current and future categories remain strategically relevant.

Implication:

- The catalog should be scalable.
- Product architecture should support many categories without creating navigation overload.
- Homepage should highlight representative category groups, not every individual category.

### Pricing Direction

Primary conversion should lead to inquiry or quote request.

Possible secondary pricing mechanic:

- downloadable catalog with prices;
- viewable price catalog;
- gated or ungated price list;
- "from" pricing only if reliable and maintained.

Implication:

- Product pages should not use generic fixed-price e-commerce mechanics by default.
- CTA language should focus on calculation, consultation, sample, and brief submission.

### Minimum Orders and Timelines

Minimum order quantities and production timelines are not finalized yet.

Implication:

- Content model must include fields for MOQ and timing.
- UI should support "to be confirmed" or omit these fields until reliable data is available.
- Final launch content should not invent order terms.

### Public Client Proof

Client logos and cases may be used broadly.

Implication:

- Build strong client proof sections.
- Use logos and case studies where available.
- Final launch should still verify image/logo quality and public-use suitability.

## 2026-05-31: Stage 1 Market Priorities Approved

The client approved the initial market research direction and recommended strategic priority ranking as the basis for Stage 2.

Approved priority order:

1. HoReCa and hospitality accessories.
2. Packaging and branded presentation.
3. Corporate gifts and business products.
4. Production services: UV printing, laser cutting/engraving, embossing, foiling, printing.
5. Uniforms and textile.

Approved structural direction:

- The homepage should support three discovery paths:
  - by business type;
  - by product type;
  - by production technology.
- Primary conversion remains quote/request based.
- Price catalog remains a possible secondary mechanic.

Implication:

Stage 2 should define the conversion system around quote requests, sample requests, brief submission, quick contact, and optional price catalog access.

## 2026-05-31: Stage 2 Conversion Architecture Approved

The client approved the Stage 2 conversion direction.

Approved conversion system:

- Primary conversion: request calculation / quote.
- Secondary conversions:
  - sample request;
  - project brief;
  - Telegram/WhatsApp;
  - phone call;
  - price catalog.
- Product selection should use an inquiry-list concept rather than a direct checkout cart.
- Mobile version should include sticky actions:
  - call;
  - Telegram/WhatsApp;
  - request calculation.
- File and logo exchange can initially be routed through Telegram/WhatsApp until backend and secure upload handling are defined.

Implication:

Stage 3 information architecture should organize pages around the approved conversion system and keep quote request paths visible across homepage, catalog, product, industry, and service pages.

## 2026-05-31: Stage 3 Information Architecture Approved

The client approved the Stage 3 information architecture direction.

Approved structure:

- Russian and English routes:
  - `/ru/`
  - `/en/`
- Catalog index:
  - `/catalog/`
- Product pages:
  - `/products/{slug}/`
- Homepage discovery paths:
  - by business type;
  - by product type;
  - by production technology.
- Main catalog groups:
  - restaurant and cafe accessories;
  - hotel and hospitality accessories;
  - business products and corporate gifts;
  - packaging and souvenirs;
  - uniforms and textile products;
  - production services and custom manufacturing.
- SEO rules:
  - canonical URLs;
  - hreflang;
  - Schema.org;
  - unique H1 and metadata;
  - noindex for filters and utility pages where needed.

Implication:

Stage 4 should define structured content models that support these routes, catalog groups, SEO fields, quote-first conversion, and future product expansion.

## 2026-05-31: Stage 4 Content Model Approved

The client approved the Stage 4 content model direction.

Approved content model:

- Products, categories, industries, services, materials, branding methods, cases, clients, FAQ, forms, and SEO metadata should be structured data.
- Product cards should not be manually hardcoded into page templates.
- Product data should support bilingual content, quote-first conversion, SEO fields, images, materials, branding methods, related products, and related services.
- New product cards should follow the product input template or spreadsheet columns.

Implication:

Stage 5 wireframes should use modular page sections powered by the structured content model rather than one-off page layouts.

## 2026-05-31: Stage 5 UX Wireframes Approved

The client approved the Stage 5 wireframe direction.

Approved UX structure:

- Global header and footer.
- Homepage with hero, path selection, product groups, real work, materials, process, client proof, and quote CTA.
- Catalog with discovery tabs, filters, product grid, category explainer, and quote CTA.
- Category pages as SEO landing pages.
- Product pages with gallery, specs, customization, related products/services, and product quote form.
- Industry pages for business-specific product sets.
- Service pages for production technology entry points.
- Work/clients, about, FAQ, and contact pages.
- Inquiry list concept instead of cart.
- Mobile sticky actions and mobile-first forms.

Implication:

Stage 6 should define a visual system that supports premium B2B manufacturing, dense catalog utility, strong product imagery, and clear conversion without looking like a generic template catalog.

## 2026-05-31: Stage 6 UI Design System Approved

The client approved the Stage 6 UI design system direction.

Approved design direction:

- Premium B2B production partner.
- Real product photography and material details should carry the visual identity.
- Neutral professional palette with restrained emerald/teal action colors and limited brass accent.
- Compact, practical catalog UI instead of a decorative template.
- Quote-first product cards and forms.
- Mobile-first sticky contact actions.
- Accessibility, stable dimensions, and responsive behavior are required.

Implication:

Stage 7 should translate the approved strategy, UX, and design system into a technical Astro foundation with reusable layouts, components, tokens, SEO helpers, and route structure.

## 2026-05-31: Stage 8 Catalog Coverage Confirmation

The client explicitly confirmed that the rebuilt site must not lose what exists on the current website.

Client instruction:

- continue development;
- keep the current site's product and capability coverage in mind;
- make the product and capability list as complete as the original site.

Implication:

- The rebuilt catalog must preserve all current commercial groups and subgroups.
- Current service/capability pages must be represented in the new structure.
- Product cards can be redesigned and replaced later, but the taxonomy should already have traceability to the current site.
- Missing product/card details should be treated as a content backlog, not as permission to remove categories.
