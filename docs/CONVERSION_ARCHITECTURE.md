# Conversion Architecture

## Purpose

Define how the new website turns visitors into qualified leads.

The site is quote-first, not checkout-first. Most products are custom, price depends on materials, quantity, branding method, deadlines, and production complexity.

## Conversion Strategy

Primary conversion:

- request exact calculation.

Secondary conversions:

- request a sample;
- send a project brief;
- contact via Telegram or WhatsApp;
- call by phone;
- view or request a price catalog;
- ask about materials or branding technology.

The website should support both fast mobile inquiries and more detailed procurement-style requests.

## Lead Quality Principle

Forms should collect enough information to route and qualify the request without making the first step heavy.

Recommended rule:

- short form for first contact;
- expanded brief for users who are ready to specify details;
- product/category context should be captured automatically whenever possible.

## Global CTA System

### Primary CTA

Label options:

- Request calculation
- Get exact quote
- Calculate my order

Use on:

- hero;
- catalog pages;
- product pages;
- industry pages;
- service pages;
- sticky mobile bar.

### Secondary CTA

Label options:

- View catalog
- Order a sample
- Send a brief
- Ask about materials
- View price catalog

Use when:

- users are still browsing;
- quality/material proof matters;
- product specs are not yet selected;
- user needs pricing context before contacting.

### Fast Contact CTA

Channels:

- Telegram;
- WhatsApp;
- phone.

Use:

- header;
- mobile sticky bar;
- product pages;
- contact page;
- footer;
- after form submission.

## Page-Level Conversion Design

### Homepage

Goal:

Move visitors into the right path quickly.

Primary action:

- Request calculation.

Secondary actions:

- View catalog;
- Choose business type;
- View price catalog if available.

Recommended conversion blocks:

1. Hero quote CTA.
2. Business-type navigation.
3. Category navigation.
4. Production technology navigation.
5. Work examples with "request similar product".
6. Process block with "send brief".
7. Client proof block.
8. Final quote CTA.

### Catalog

Goal:

Help users find relevant products without forcing them to know internal categories.

Primary action:

- Request calculation for selected products/category.

Secondary actions:

- filter by industry;
- filter by material;
- filter by branding method;
- request catalog/price list;
- ask manager.

Recommended mechanics:

- product inquiry context is carried into forms;
- category pages include a quote panel;
- filters should never hide the contact path.

### Product Page

Goal:

Convert product interest into a qualified quote request.

Primary action:

- Request this product.

Secondary actions:

- Order sample;
- Ask about materials;
- Add to inquiry list;
- View similar products.

Product inquiry should capture:

- product name;
- product SKU/code if available;
- category;
- selected material if available;
- selected branding method if available.

### Industry Landing Pages

Pages:

- Restaurants and cafes;
- Hotels and hospitality;
- Corporate clients;
- Retail and packaging;
- Agencies and custom projects.

Goal:

Help users see relevant product sets for their business type.

Primary action:

- Get a set for my business.

Secondary actions:

- View products;
- Send venue/company requirements;
- Request sample set.

### Service Pages

Pages:

- UV printing;
- Laser cutting and engraving;
- Embossing;
- Foiling;
- Printing;
- Custom production/carpentry where applicable.

Goal:

Capture users who know the production technology they need.

Primary action:

- Discuss production task.

Secondary actions:

- View products made with this technology;
- Ask about compatible materials;
- Upload/send design later if supported.

### Contacts

Goal:

Provide the most direct inquiry route.

Primary action:

- Submit inquiry.

Secondary actions:

- call;
- Telegram;
- WhatsApp;
- email;
- visit address.

The contact form should be more general but still allow category selection.

## Mobile Conversion Mechanics

Mobile users should always have visible fast actions.

Recommended sticky mobile bar:

- Call;
- Telegram/WhatsApp;
- Request quote.

Rules:

- do not cover critical form buttons;
- collapse or hide on final form step if necessary;
- keep labels short;
- track all clicks as analytics events.

## Inquiry List Option

For catalog browsing, support an "inquiry list" pattern instead of a shopping cart.

Purpose:

- user can add multiple products;
- final action is request calculation;
- no checkout/payment logic needed.

Recommended label:

- Add to inquiry
- Request with this product

This can be implemented in a later phase if initial catalog scope is large.

## Price Catalog Mechanic

Price catalog is optional and should not replace quote request.

Possible implementation:

1. Public PDF download.
2. Online price catalog page.
3. Gated download after contact details.
4. Manager-sent catalog via Telegram/WhatsApp.

Recommended initial approach:

- prepare UI slot for "View price catalog";
- keep it inactive or route to inquiry until real pricing is available;
- avoid fake prices.

## Post-Submission Experience

After form submission:

- confirm request was received;
- set response expectation;
- show Telegram/WhatsApp as faster contact;
- recommend sending logo/reference files through messenger if upload is not implemented;
- preserve submitted product context.

Suggested message:

Thank you. We received your request and will contact you to clarify materials, quantity, branding, and timing.

## Conversion Risks

Avoid:

- generic "Buy" buttons for quote-based products;
- forms without product/category context;
- too many required fields in first step;
- hidden contacts on mobile;
- placeholder prices;
- asking for files before user trusts the company;
- making price catalog the only path to pricing.

## Acceptance Criteria

Stage 2 is accepted when:

- every main page type has a primary CTA;
- lead forms are defined;
- mobile sticky actions are defined;
- analytics events are defined;
- optional price catalog logic is defined;
- no conversion path depends on unavailable pricing or undefined MOQ.

