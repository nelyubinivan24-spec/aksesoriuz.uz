# Stage 11 B2B Project Brief Correction

## Status

Implemented on 2026-05-31.

## Reason

The client clarified that Aksessoriuz is a B2B custom-production business, not an online store.

The site should not communicate self-service product purchase mechanics. Product pages should act as examples and references for negotiation, sample requests, and project calculation.

## Business Understanding

Aksessoriuz sells:

- restaurant and hotel products;
- business accessories;
- exclusive packaging;
- corporate souvenirs and promo gifts;
- custom production from eco-leather, wood, metal, acrylic, and other materials.

The purchase cycle happens through:

- discussion with a manager;
- quantity and material clarification;
- branding method selection;
- sample or reference discussion;
- timing and budget alignment;
- commercial proposal.

## Implemented Changes

UI wording:

- "Draft card" became "Reference item".
- "В запрос" became "Обсудить проект".
- Product pages now use "Запросить расчет проекта" and "Заказать образец".
- Product pages explicitly state that examples are references, not self-service purchase products.

Form:

- `QuoteForm` is now a project brief.
- Added fields for:
  - item/task;
  - approximate quantity;
  - deadline or launch date;
  - materials, logo, branding, and references.

Product pages:

- Reframed as reference pages for custom production.
- Added project brief language.
- Kept current-site source links for traceability.

Documentation:

- Updated next steps away from inquiry-list mechanics.
- Updated Stage 10 wording to quote/sample requests.
- Updated technical follow-up toward backend/CRM project brief submission.

## Rule Going Forward

Do not implement:

- self-service purchase flow;
- payment flow;
- buy button;
- e-commerce order flow.

Do implement:

- project brief;
- sample request;
- consultation request;
- quote request;
- reference-based product discussion;
- CRM or manager handoff.
