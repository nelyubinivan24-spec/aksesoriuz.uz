# UX Wireframes

## Purpose

Define the structure and interaction logic of key pages before visual design.

These wireframes are textual and structural. They define:

- page sections;
- content priority;
- CTA placement;
- conversion paths;
- mobile behavior;
- expected states.

Visual design, colors, typography, and component styling will be handled in Stage 6.

## UX Principles

The site should:

- explain the offer quickly;
- let users browse by business type, product type, or production technology;
- keep quote request actions visible;
- avoid direct self-service purchase assumptions;
- support mobile-first inquiries;
- show real products and proof early;
- make product pages useful even without fixed prices;
- reduce uncertainty around materials, branding, quantities, and timing.

## Global Layout

### Header

Desktop structure:

1. Logo.
2. Main navigation:
   - Products;
   - Industries;
   - Services;
   - Work / Clients;
   - About;
   - FAQ;
   - Contact.
3. Language switcher.
4. Fast contact:
   - phone;
   - Telegram/WhatsApp icon.
5. Primary CTA:
   - Request calculation.

Mobile structure:

1. Logo.
2. Messenger icon.
3. Language switcher.
4. Menu button.
5. Sticky action bar:
   - Call;
   - Messenger;
   - Quote.

Behavior:

- Header should remain compact.
- Mobile sticky bar should not cover form submit buttons.
- Quote CTA should carry page context.

### Footer

Columns:

1. Products.
2. Industries.
3. Services.
4. Company.
5. Contact.

Footer content:

- phone;
- Telegram/WhatsApp;
- email;
- address;
- social links;
- privacy;
- short brand statement.

## Homepage Wireframe

Goal:

Position Aksessoriuz as a universal B2B production partner and route visitors into the right path.

### Section 1: Hero

Content:

- H1: direct business outcome, not abstract slogan.
- Supporting copy: custom branded products, packaging, accessories, uniforms, and production services.
- Proof strip:
  - years of experience;
  - clients;
  - production technologies;
  - Uzbekistan/Tashkent service area.
- Primary CTA: Request calculation.
- Secondary CTA: View catalog.
- Optional tertiary: View price catalog.
- Visual: high-quality product composition or production/product collage.

UX notes:

- Avoid generic stock imagery.
- Hero should immediately show physical products.
- CTA should open quote form with source `hero`.

### Section 2: Choose Your Path

Tabs or segmented cards:

1. By business type.
2. By product.
3. By production technology.

Default tab:

- By business type.

Business cards:

- Restaurants and cafes;
- Hotels and hospitality;
- Corporate clients;
- Retail and packaging;
- Agencies and custom projects.

Each card:

- short use-case copy;
- 3-5 relevant product examples;
- CTA: View solutions.

### Section 3: Featured Product Groups

Cards:

- Restaurant accessories;
- Hotel accessories;
- Business products;
- Packaging and souvenirs;
- Uniforms and textile;
- Production services.

Each card:

- image;
- title;
- short benefit;
- sample product tags;
- CTA: View category.

### Section 4: Real Work Gallery

Purpose:

Build trust visually before long explanations.

Content:

- selected product photos;
- filters by industry or product group;
- CTA on each item: Request similar product.

States:

- if no case data yet, show curated product examples.
- do not show placeholder/demo items.

### Section 5: Materials and Branding Methods

Content:

- materials:
  - eco-leather;
  - natural leather;
  - wood;
  - acrylic;
  - textile;
  - paper/cardboard;
  - metal.
- methods:
  - UV printing;
  - laser engraving;
  - embossing;
  - foiling;
  - printing.

CTA:

- Ask about materials.

UX note:

This section should reassure buyers who are unsure what to choose.

### Section 6: Process

Steps:

1. Choose a product or send a brief.
2. Select material and branding method.
3. Confirm quantity and timing.
4. Approve sample/design.
5. Production and delivery.

CTA:

- Send brief.

### Section 7: Clients and Proof

Content:

- client logos;
- short industry labels;
- optional testimonial snippets;
- link to work/clients page.

CTA:

- View work.

### Section 8: Final Quote Block

Content:

- short reassurance copy;
- quote form or compact CTA panel;
- phone/messenger fallback.

Primary CTA:

- Request calculation.

## Catalog Wireframe

Goal:

Help users find relevant products and request calculation without self-service purchase complexity.

### Section 1: Catalog Hero

Content:

- H1: product catalog for branded business products.
- Intro: browse by industry, product type, material, or technology.
- Primary CTA: Request calculation.
- Secondary CTA: View price catalog if available.

### Section 2: Catalog Discovery Tabs

Tabs:

1. Industries.
2. Categories.
3. Materials.
4. Branding methods.

Each tab shows structured cards and links to filtered/catalog views.

### Section 3: Filters and Product Grid

Desktop:

- left filter sidebar;
- product grid.

Mobile:

- filter drawer;
- product grid;
- sticky quote action.

Filters:

- industry;
- category;
- material;
- branding method;
- use case.

Product card:

- image;
- title;
- short use case;
- material tags;
- branding method tags;
- CTA: Request calculation;
- optional: Discuss project or request sample.

Empty state:

- message: no exact match;
- CTA: send request to manager.

### Section 4: Category Explainer

Content:

- why these products matter;
- materials;
- branding options;
- ordering process.

### Section 5: Catalog CTA

Options:

- request calculation;
- send product list;
- request price catalog.

## Category Page Wireframe

Goal:

Turn category browsing into a relevant project brief.

Sections:

1. Category hero:
   - H1;
   - short commercial intro;
   - primary CTA.
2. Relevant subcategories.
3. Product grid.
4. Materials and branding methods for this category.
5. Related industries.
6. FAQ.
7. Final quote block.

UX notes:

- Category pages should be SEO landing pages.
- Do not rely only on product grid.

## Product Page Wireframe

Goal:

Convert interest in one product reference into quote request, sample request, or project discussion.

### Section 1: Product Hero

Layout:

- image gallery;
- product title;
- short summary;
- category and industry tags;
- materials;
- branding methods;
- primary CTA: Request this product;
- secondary CTA: Order sample;
- optional: Discuss as project reference.

If MOQ or timing unknown:

- omit or show "confirmed after brief" only if approved.

### Section 2: Product Details

Content:

- description;
- use cases;
- material options;
- branding options;
- dimensions if available;
- colors if available.

### Section 3: Customization

Content:

- logo placement;
- material/finish choices;
- production methods;
- what affects price.

CTA:

- Ask about customization.

### Section 4: Related Products

Purpose:

Keep users browsing relevant alternatives.

Cards:

- similar products;
- products from same category;
- products used together.

### Section 5: Related Services

Show:

- UV printing;
- laser engraving;
- embossing;
- foiling;
- printing;
- any relevant service.

### Section 6: Product Quote Form

Fields:

- contact;
- quantity;
- material;
- branding method;
- message.

Hidden:

- product ID;
- product title;
- page URL;
- CTA source.

## Industry Page Wireframe

Goal:

Show a business-specific set of products and reduce "is this for us?" uncertainty.

Sections:

1. Hero:
   - H1 for industry;
   - key outcomes;
   - CTA: Get a set for my business.
2. Common needs:
   - cards grouped by use case.
3. Recommended products:
   - curated product cards.
4. Relevant services:
   - branding and production methods.
5. Real examples / clients:
   - proof by industry.
6. Process:
   - from brief to production.
7. FAQ:
   - industry-specific questions.
8. Quote block:
   - industry preselected.

## Service Page Wireframe

Goal:

Capture users searching by production technology and connect services to products.

Sections:

1. Service hero:
   - H1;
   - short explanation;
   - compatible materials;
   - CTA: Discuss production task.
2. What this service is used for:
   - product examples;
   - business use cases.
3. Materials:
   - compatible materials with constraints.
4. Work examples:
   - gallery.
5. Process:
   - file/brief;
   - test/sample;
   - production.
6. Related products.
7. FAQ.
8. Brief form.

## Work / Clients Page Wireframe

Goal:

Provide proof through clients, products, and industries.

Sections:

1. Hero:
   - trust positioning.
2. Client logos:
   - filter by industry if many.
3. Work gallery:
   - product/case cards.
4. Case studies:
   - optional detailed stories.
5. CTA:
   - Request similar product.

## About Page Wireframe

Goal:

Build credibility around production capability and reliability.

Sections:

1. Company positioning.
2. Production capabilities.
3. Materials and technologies.
4. Process and quality control.
5. Geography and delivery.
6. Team/experience if available.
7. Client proof.
8. CTA.

## FAQ Page Wireframe

Goal:

Answer practical buying questions.

Groups:

- materials;
- branding methods;
- minimum order;
- production time;
- samples;
- delivery;
- payment;
- price catalog;
- custom orders.

UX:

- search or category tabs if FAQ grows.
- each FAQ can appear on related category/service pages.

## Contact Page Wireframe

Goal:

Make it easy to contact and submit a qualified project request.

Sections:

1. Contact hero:
   - direct message;
   - phone/messenger emphasis.
2. Contact cards:
   - phone;
   - Telegram;
   - WhatsApp;
   - email;
   - address.
3. Project request form:
   - name;
   - phone;
   - messenger;
   - company;
   - topic;
   - message.
4. Visit/location:
   - map if useful;
   - address;
   - working hours if confirmed.
5. FAQ mini-block:
   - response time;
   - samples;
   - price catalog.

## Project Reference Flow

Purpose:

Allow users to use one or more product examples as references for a B2B project brief.

Flow:

1. User opens a product reference from the catalog.
2. User chooses project quote, sample request, or direct contact.
3. Product context is passed into the project brief.
4. User adds quantity, material, branding, deadline, and message.
5. User submits one project request.
6. Manager clarifies details and prepares the calculation or sample discussion.

States:

- no reference selected:
  - allow a general project brief.
- reference selected:
  - show the product reference and editable project fields.
- submitted:
  - confirmation and messenger fallback.

Implementation note:

Persistent multi-reference selection can be a later interactive feature. The initial version should pass one product/category context directly into the project brief.

## Mobile UX Rules

### Sticky Bar

Buttons:

- Call;
- Messenger;
- Quote.

Rules:

- visible on major pages;
- hides or shifts above form submit when needed;
- track clicks;
- keep labels short.

### Mobile Navigation

Priority links:

1. Products.
2. Restaurants and cafes.
3. Hotels.
4. Packaging.
5. Corporate gifts.
6. Services.
7. Contact.

### Mobile Forms

Rules:

- one-column;
- large tap targets;
- minimal required fields;
- messenger/phone accepted;
- product context prefilled where possible.

### Mobile Catalog

Rules:

- filter drawer, not always-open sidebar;
- visible active filter chips;
- quick reset;
- quote CTA visible after product cards.

## UX Acceptance Criteria

Stage 5 is accepted when:

- each key page type has a clear section order;
- each page has primary and secondary CTA logic;
- mobile navigation and sticky actions are defined;
- catalog and product browsing support quote-first conversion;
- project reference behavior is defined;
- wireframes align with the content model and sitemap.
