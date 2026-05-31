# Restart Implementation Plan

Date: 2026-05-31

## Operating Rule

No more one-line public-site patches as the main workflow.

Work must proceed in controlled stages:

- define the commercial and UX goal;
- implement a complete page or system slice;
- verify in browser on desktop and mobile;
- scan for forbidden language;
- build successfully;
- commit to a GitHub branch;
- ask for approval before moving to the next major stage.

## Stage R0: Restart Audit And Guardrails

Status: in progress.

Deliverables:

- `docs/RESTART_AUDIT.md`
- `docs/RESTART_INFORMATION_ARCHITECTURE.md`
- `docs/RESTART_IMPLEMENTATION_PLAN.md`

Acceptance:

- business essence is clear;
- original site coverage is locked;
- public-site mistakes are documented;
- non-negotiable rules are documented;
- next implementation sequence is clear.

## Stage R1: Public Content Model Separation

Goal:

Separate internal migration control from public commercial product data.

Work:

- keep `legacyMigration.ts` internal;
- create or redesign public product/category/service content models;
- remove public dependency on internal statuses;
- define product-family data that can support 255 original product URLs without rendering weak pages;
- define rules for incomplete product data.

Acceptance:

- public pages cannot accidentally render migration/backlog/draft language;
- every product card has commercial fields;
- old URL coverage remains traceable internally.

## Stage R2: Premium Homepage Rebuild

Goal:

Rebuild the homepage as the design and commercial standard for the whole website.

Work:

- keep the transparent product-led hero direction the client liked;
- rewrite first viewport around custom branded production;
- add strong product direction cards;
- add buyer task paths;
- add production capability proof;
- add material/finishing section;
- add client trust section;
- add clear B2B process;
- add quote CTA and project brief.

Acceptance:

- homepage does not mention internal project work;
- first screen explains the business within seconds;
- product imagery is visible and premium;
- desktop and mobile are checked by browser screenshot;
- no horizontal overflow;
- all CTAs are quote/contact oriented.

## Stage R3: Catalog System Rebuild

Goal:

Turn the catalog from a migration map into a premium product discovery system.

Work:

- rebuild catalog index;
- rebuild top-level category pages;
- create buyer modes: by product, by industry, by technology/material;
- redesign product cards;
- add subcategory navigation;
- add meaningful empty/incomplete data handling;
- keep all original product families represented.

Acceptance:

- a buyer can quickly find relevant products;
- product cards have useful B2B decision data;
- no cart or checkout behavior;
- no internal migration wording;
- all original groups and subgroups are represented.

## Stage R4: Product Detail System

Goal:

Create product pages that support B2B negotiation and quote requests.

Work:

- redesign product detail page;
- add image gallery;
- add product use cases;
- add materials and branding methods;
- add related products and services;
- connect quote form with selected product context;
- create redirect/content strategy for the 255 original product URLs.

Acceptance:

- product pages are commercially useful even without price;
- buyer understands what to ask for;
- product page never feels like a fake online store;
- old product URLs have decisions.

## Stage R5: Industry Pages

Goal:

Make the site useful for different B2B buyer contexts.

Pages:

- restaurants and cafes;
- hotels and hospitality;
- corporate clients;
- retail and packaging;
- events and agencies;
- uniforms and staff teams.

Acceptance:

- each page shows relevant product bundles;
- each page includes a reason to trust Aksessoriuz;
- each page has quote CTA and relevant products.

## Stage R6: Production And Services Pages

Goal:

Show Aksessoriuz as a real production partner, not just a catalog.

Pages:

- UV printing;
- printing / polygraphy;
- foiling;
- laser cutting and engraving;
- embossing;
- marking;
- packaging and souvenir production;
- uniforms and textile;
- carpentry production;
- food photography if confirmed.

Acceptance:

- each service explains materials, products, visual result, and limitations;
- service pages link to relevant product families;
- service pages generate requests.

## Stage R7: Proof, Cases, Clients

Goal:

Strengthen trust with evidence.

Work:

- create case page structure;
- add client logo section;
- add product gallery / finished work blocks;
- avoid invented case claims;
- use original proof points where valid.

Acceptance:

- site looks credible for premium B2B production;
- proof is concrete, not decorative.

## Stage R8: Forms, Integrations, Analytics

Goal:

Turn interest into measurable requests.

Work:

- connect form backend or CRM;
- define Telegram/WhatsApp path;
- add GA4/Yandex events;
- add quote-intent tracking;
- add downloadable/viewable catalog logic if client approves.

Acceptance:

- form submissions work;
- events are measurable;
- manager receives enough data to respond.

## Stage R9: SEO, Redirects, QA, Launch Readiness

Goal:

Prepare for production without losing original-site search value.

Work:

- redirect map for original URLs;
- SEO metadata;
- sitemap;
- robots;
- schema.org;
- performance and image optimization;
- mobile QA;
- accessibility checks;
- final forbidden-language scan.

Acceptance:

- build passes;
- no broken internal links;
- no horizontal overflow;
- no public internal language;
- all priority pages visually checked;
- production launch checklist complete.

## Mandatory Checks Per Stage

Commands:

- `npm run check`
- `npm run build`
- `npm run check:legacy-migration` when migration data changes

Browser checks:

- desktop width around 1280 px;
- tablet width around 768 px;
- mobile width around 390 px;
- RU and EN route sanity checks;
- current page remains in expected language;
- no visible overflow.

Forbidden public terms scan:

- current site;
- old site;
- migration;
- backlog;
- manifest;
- draft;
- stage;
- future cards;
- new structure;
- internal;
- temporary;
- integration stage;
- legacy URL.

Russian equivalents must also be scanned:

- текущий сайт;
- старый сайт;
- миграция;
- бэклог;
- манифест;
- черновик;
- этап;
- будущие карточки;
- новая структура;
- внутренний;
- временный;
- этап интеграции;
- старые URL.

