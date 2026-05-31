# Lead Forms

## Purpose

Define website forms and lead-capture mechanics.

The system should support quick inquiries, product-specific quote requests, sample requests, detailed briefs, and price catalog requests.

## Form Principles

- Keep first contact short.
- Capture page and product context automatically.
- Do not require price, MOQ, or timeline fields until business data is confirmed.
- Use phone and messenger as primary contact channels.
- Make every form mobile-friendly.
- Use clear consent text where required.

## Form 1: Quick Quote Request

Use on:

- homepage hero;
- catalog;
- category pages;
- product pages;
- mobile sticky CTA.

Purpose:

Capture users who want pricing or consultation.

Fields:

- name;
- phone;
- Telegram or WhatsApp;
- category or product interest;
- approximate quantity;
- message.

Hidden/context fields:

- page URL;
- page title;
- product name;
- product code/SKU;
- category;
- language;
- CTA source;
- UTM parameters.

Required fields:

- name;
- phone or messenger contact.

Optional fields:

- quantity;
- message.

Submit label:

- Request calculation.

Success message:

Your request has been received. We will contact you to clarify materials, quantity, branding, and timing.

## Form 2: Product Reference Brief

Use on:

- product detail pages;
- product cards;
- category reference sections.

Purpose:

Capture interest in a specific product reference and route it into manager-led project discussion.

Fields:

- name;
- phone;
- Telegram or WhatsApp;
- quantity;
- preferred material;
- branding method;
- comment.

Hidden/context fields:

- product name;
- product SKU/code;
- product category;
- selected options;
- page URL;
- language.

Required fields:

- phone or messenger contact.

Submit label:

- Discuss this project.

## Form 3: Sample Request

Use on:

- product pages;
- material sections;
- category pages where physical quality matters.

Purpose:

Reduce quality uncertainty and move cautious buyers toward purchase.

Fields:

- name;
- company;
- phone;
- Telegram or WhatsApp;
- product/category of interest;
- city;
- message.

Potential future fields:

- delivery address;
- sample type;
- paid/free sample status.

Submit label:

- Request sample.

Business dependency:

Need decision on whether samples are free, paid, or case-by-case.

## Form 4: Project Brief

Use on:

- service pages;
- custom production pages;
- packaging pages;
- agency/custom project path.

Purpose:

Collect detailed information for custom production.

Fields:

- name;
- company;
- phone;
- Telegram or WhatsApp;
- project type;
- product or service needed;
- approximate quantity;
- desired material;
- branding method;
- deadline;
- message;
- file upload if technically supported later.

Required fields:

- contact;
- project type or message.

Submit label:

- Send brief.

Business dependency:

File upload should be added only if hosting/backend supports secure handling. Otherwise, route file transfer to Telegram/WhatsApp after submission.

## Form 5: Price Catalog Request

Use on:

- homepage;
- catalog;
- pricing/catalog CTA block.

Purpose:

Support users who want pricing orientation while preserving quote-first sales logic.

Variants:

1. Public view/download:
   - no form;
   - track download/view event.
2. Gated download:
   - name;
   - phone;
   - Telegram or WhatsApp;
   - company;
   - category interest.
3. Manager-sent catalog:
   - contact;
   - preferred messenger;
   - category interest.

Recommended initial variant:

Manager-sent or gated catalog until pricing strategy is confirmed.

Submit label:

- Get price catalog.

## Form 6: Contact Page Inquiry

Use on:

- contact page.

Purpose:

General inquiry route.

Fields:

- name;
- phone;
- Telegram or WhatsApp;
- company;
- request topic;
- message.

Request topic options:

- products;
- restaurant/hotel accessories;
- packaging;
- corporate gifts;
- uniforms;
- production services;
- price catalog;
- other.

Submit label:

- Send request.

## Validation Rules

Phone:

- allow Uzbekistan phone formats;
- do not block international numbers;
- normalize later if needed.

Messenger:

- allow Telegram username, WhatsApp number, or free text.

Quantity:

- numeric when possible;
- allow text like "not sure yet" only in message if quantity is optional.

Consent:

- include personal data processing consent checkbox where legally required.

## Lead Routing Tags

Recommended tags:

- `industry:restaurant`
- `industry:hotel`
- `industry:corporate`
- `industry:retail`
- `industry:agency`
- `category:business-products`
- `category:restaurant-accessories`
- `category:hotel-accessories`
- `category:packaging`
- `category:uniforms`
- `service:uv-printing`
- `service:laser`
- `service:embossing`
- `service:foiling`
- `intent:quote`
- `intent:sample`
- `intent:brief`
- `intent:price-catalog`

## Backend Decision Needed Later

Before implementation, decide:

- where form submissions go;
- whether email delivery is needed;
- whether Telegram bot integration is needed;
- whether CRM integration is needed;
- whether file upload is supported;
- spam protection method;
- personal data storage policy.
