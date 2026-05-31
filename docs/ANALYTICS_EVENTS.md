# Analytics Events

## Purpose

Define measurable conversion events for the new website.

Analytics should show which pages, product categories, CTAs, and contact channels generate qualified leads.

## Analytics Tools

Recommended:

- Yandex Metrika;
- GA4 if needed;
- server/form submission logs if backend is added.

## Event Naming Convention

Use clear snake_case event names.

Pattern:

- `area_action_context`

Examples:

- `hero_click_quote`
- `product_submit_quote`
- `mobile_click_whatsapp`

## Core Conversion Events

### Quote Request

Event:

- `lead_submit_quote`

Trigger:

- successful quick quote or product quote form submission.

Parameters:

- page_type;
- page_url;
- language;
- product_id;
- product_name;
- category;
- industry;
- cta_source;
- quantity_range if available;

### Sample Request

Event:

- `lead_submit_sample`

Trigger:

- successful sample request form submission.

Parameters:

- product_id;
- product_name;
- category;
- page_url;
- cta_source.

### Project Brief

Event:

- `lead_submit_brief`

Trigger:

- successful project brief form submission.

Parameters:

- project_type;
- service;
- category;
- page_url;
- has_deadline;
- has_file_upload if available.

### Price Catalog Request

Events:

- `price_catalog_view`
- `price_catalog_download`
- `lead_submit_price_catalog`

Trigger:

- viewing, downloading, or requesting the price catalog.

Parameters:

- catalog_type;
- category_interest;
- gated;
- page_url;
- cta_source.

## Contact Click Events

### Phone

Event:

- `contact_click_phone`

Parameters:

- phone_number;
- page_url;
- cta_source;
- page_type.

### Telegram

Event:

- `contact_click_telegram`

Parameters:

- page_url;
- cta_source;
- page_type.

### WhatsApp

Event:

- `contact_click_whatsapp`

Parameters:

- page_url;
- cta_source;
- page_type.

### Email

Event:

- `contact_click_email`

Parameters:

- page_url;
- cta_source;
- page_type.

## Engagement Events

### Catalog Filter

Event:

- `catalog_apply_filter`

Parameters:

- filter_type;
- filter_value;
- result_count;
- page_url.

### Product Card CTA

Events:

- `product_card_click_details`
- `product_card_click_quote`
- `product_card_add_inquiry`

Parameters:

- product_id;
- product_name;
- category;
- list_context;
- position.

### Product Gallery

Event:

- `product_gallery_interaction`

Parameters:

- product_id;
- interaction_type;
- image_index.

### Industry Path Click

Event:

- `industry_path_click`

Parameters:

- industry;
- page_url;
- cta_source.

### Technology Path Click

Event:

- `technology_path_click`

Parameters:

- technology;
- page_url;
- cta_source.

## Form Funnel Events

Recommended if forms become multi-step:

- `form_start`
- `form_step_complete`
- `form_validation_error`
- `form_submit_success`
- `form_submit_error`

Parameters:

- form_type;
- step_number;
- error_type;
- page_url;
- cta_source.

## Page Type Values

Use consistent page type values:

- `home`
- `catalog`
- `category`
- `product`
- `industry`
- `service`
- `clients`
- `faq`
- `contact`
- `legal`

## CTA Source Values

Recommended values:

- `header`
- `hero`
- `mobile_sticky`
- `category_card`
- `product_card`
- `product_detail`
- `service_detail`
- `industry_detail`
- `gallery`
- `footer`
- `contact_page`
- `price_catalog_block`

## Reporting Questions

Analytics should answer:

- Which audience path generates the most leads?
- Which product categories generate quote requests?
- Which pages drive Telegram/WhatsApp clicks?
- Which CTAs work best on mobile?
- Does price catalog access increase quote requests?
- Which production services bring commercial interest?
- Which products are viewed often but do not convert?

## Implementation Notes

- Track only after consent if required by local/legal policy.
- Do not send personally identifiable information into analytics tools.
- Product names are acceptable only if they do not include personal data.
- Form submission payloads belong in backend/email/CRM, not analytics event parameters.

