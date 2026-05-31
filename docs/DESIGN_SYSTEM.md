# UI Design System

## Purpose

Define the visual and interaction system for the new Aksessoriuz website before application scaffolding and page implementation.

This document sets the design direction for:

- brand feel;
- typography;
- color;
- layout;
- components;
- product cards;
- forms;
- responsive behavior;
- accessibility;
- implementation tokens.

## Design Goal

The site should feel like a premium B2B production partner:

- precise;
- material-aware;
- trustworthy;
- practical;
- modern;
- visually rich through real products;
- not decorative for its own sake.

The design should not feel like:

- a generic online shop;
- a template catalog;
- a luxury fashion site;
- a heavy industrial factory site;
- a landing page with vague marketing graphics.

## Visual Strategy

### Core Idea

Physical brand details, produced with care.

The interface should make product materials, finishing, and business use cases visible. Product photography and close-up details should carry the visual identity more than abstract decoration.

### Visual Keywords

- premium utility;
- tactile materials;
- structured catalog;
- confident whitespace;
- industrial precision;
- business hospitality;
- clear conversion.

### Image Direction

Preferred:

- real product photography;
- close-ups of texture, logo application, stitching, engraving, embossing, and edges;
- products in business context: table, hotel room, reception, corporate gift set, packaging setup;
- production process details;
- grouped product compositions.

Avoid:

- dark blurred stock photos;
- unrelated lifestyle imagery;
- generic office stock photos;
- overly glossy luxury scenes;
- placeholder products;
- irrelevant demo items.

## Color System

The palette should be neutral, professional, and material-friendly, with restrained accents. Avoid a one-color theme.

### Core Colors

```text
ink-950        #111827  primary text and dark surfaces
graphite-800   #2F3742  secondary dark UI
steel-600      #667085  secondary text
line-200       #D9DEE7  borders and dividers
mist-100       #F3F6F8  soft section background
white          #FFFFFF  primary background
```

### Accent Colors

```text
emerald-700    #047857  primary action and confirmation
teal-600       #0F766E  secondary action and active filters
brass-500      #B8893A  small premium accent only
clay-600       #B45309  warning/attention only
red-600        #DC2626  errors
```

Usage rules:

- `emerald-700` is the main CTA color.
- `brass-500` is only for small accents, badges, or material notes.
- Do not make the site dominated by brass, brown, beige, or dark blue.
- Use product imagery to create richness.
- Keep backgrounds mostly white or mist.

## Typography

Recommended type direction:

- clean sans-serif;
- strong but not oversized headings;
- readable product specs;
- compact catalog text;
- no negative letter spacing.

Possible implementation fonts:

- `Inter` for UI and body;
- `Manrope` or `Inter Tight` for headings if a more distinctive voice is needed.

Final choice should be made during implementation based on rendering quality and language support.

### Type Scale

Desktop:

```text
display-lg   56px / 1.05  hero only
display-md   44px / 1.10  major page headers
h1           40px / 1.15
h2           30px / 1.20
h3           24px / 1.25
h4           20px / 1.30
body-lg      18px / 1.55
body         16px / 1.55
body-sm      14px / 1.45
caption      12px / 1.35
```

Mobile:

```text
display-lg   38px / 1.10
display-md   32px / 1.15
h1           30px / 1.18
h2           24px / 1.22
h3           20px / 1.28
body         16px / 1.55
body-sm      14px / 1.45
caption      12px / 1.35
```

Rules:

- Do not scale font size with viewport width.
- Use hero-scale text only in true page heroes.
- Product cards and compact panels use smaller, tighter headings.
- Text must not overflow buttons, cards, filters, or badges.

## Layout System

### Container

```text
max-width: 1200px
wide max-width: 1440px for image-heavy sections
page padding desktop: 40px
page padding tablet: 24px
page padding mobile: 16px
```

### Grid

Desktop:

- 12-column grid;
- 24px gutters.

Tablet:

- 8-column grid;
- 20px gutters.

Mobile:

- 4-column grid;
- 16px gutters.

### Section Rhythm

Desktop:

- major section padding: 96px top/bottom;
- compact section padding: 56px top/bottom.

Mobile:

- major section padding: 56px top/bottom;
- compact section padding: 36px top/bottom.

### Border Radius

Use restrained radii:

```text
radius-sm  4px
radius-md  8px
radius-lg  12px only for larger media blocks or modals
radius-pill 999px for pills/badges only
```

Rules:

- Cards should usually use 8px or less.
- Avoid nested cards.
- Do not put page sections inside floating cards.

## Component System

## Buttons

### Primary Button

Use for:

- Request calculation;
- Request this product;
- Send brief.

Style:

- emerald background;
- white text;
- icon where useful;
- strong hover state;
- minimum height 44px.

### Secondary Button

Use for:

- View catalog;
- View products;
- View work.

Style:

- white or transparent background;
- dark text;
- border;
- subtle hover.

### Tertiary / Text Button

Use for:

- View details;
- Learn more;
- Related links.

Rules:

- Use icons for common actions where appropriate.
- Avoid long text inside small buttons.
- Buttons must support loading and disabled states.

## Icons

Use `lucide` icons when available.

Recommended icon use:

- phone;
- message;
- send;
- search;
- filter;
- arrow right;
- chevron down;
- package;
- factory;
- badge/check;
- image/gallery;
- language.

Rules:

- Icons support labels; they do not replace important text unless context is obvious.
- Icon-only buttons need accessible labels.

## Header

Desktop:

- logo left;
- main nav center/left;
- contact/CTA right;
- compact enough to keep hero visible.

Mobile:

- logo;
- messenger shortcut;
- language;
- menu button;
- sticky action bar below viewport bottom.

States:

- default;
- scrolled;
- menu open;
- active language;
- active page.

## Navigation Menus

Products mega menu:

- top category groups;
- popular products;
- quick quote CTA.

Industries menu:

- restaurants/cafes;
- hotels;
- corporate;
- retail/packaging;
- agencies/custom.

Services menu:

- UV printing;
- laser;
- embossing;
- foiling;
- printing;
- custom production.

Rules:

- Menus must be scannable.
- Do not overwhelm users with every subcategory in the first navigation level.

## Product Cards

Card content:

- image;
- product name;
- short use-case or category;
- material tags;
- branding method tags;
- primary CTA: Request calculation;
- secondary: View details, discuss project, or request sample.

States:

- default;
- hover;
- selected as a project reference;
- missing image fallback;
- loading/skeleton.

Rules:

- Product image aspect ratio should be stable.
- Text should not shift card height unpredictably.
- Do not show "Buy" unless direct purchase becomes real.
- Do not show fake prices.

## Category Cards

Content:

- strong image or material/product detail;
- category name;
- 1-line value statement;
- sample product tags;
- CTA.

Use:

- homepage;
- catalog discovery;
- footer/related sections.

## Industry Cards

Content:

- business type;
- specific product examples;
- outcome copy;
- CTA.

Example:

Restaurants and cafes:

- menu covers;
- check holders;
- table tents;
- reserves.

## Service Cards

Content:

- service name;
- compatible materials;
- typical product examples;
- CTA.

Visual:

- production detail photo or process image preferred.

## Tags and Badges

Use for:

- material;
- branding method;
- industry;
- use case;
- status.

Style:

- compact;
- high contrast;
- stable height;
- avoid excessive color variety.

## Forms

General rules:

- one-column on mobile;
- grouped fields on desktop only where helpful;
- clear labels;
- helper text for uncertain fields;
- phone or messenger as required;
- product/page context should be hidden but captured.

Field states:

- default;
- focus;
- filled;
- error;
- disabled;
- loading.

Form components:

- text input;
- phone input;
- textarea;
- select/menu;
- checkbox;
- file upload placeholder only if backend supports it later;
- submit button;
- success message;
- error message.

Quote form should feel quick, not bureaucratic.

## Project Reference UI

Components:

- reference count badge if multi-reference selection is implemented;
- drawer or page;
- selected reference row;
- quantity field;
- remove action;
- submit project brief form.

Rules:

- This is a B2B project brief helper, not an order interface.
- Use reference, project, sample, and calculation language.
- No payment UI.

## Gallery

Use for:

- product pages;
- work page;
- homepage proof section.

Rules:

- stable aspect ratios;
- thumbnails;
- zoom/detail view where useful;
- alt text;
- no layout shift.

## Tables / Specs

Use compact spec lists instead of heavy tables where possible.

Spec layout:

- label;
- value;
- optional icon.

Examples:

- Material;
- Branding;
- Dimensions;
- Minimum order;
- Production time.

## Empty States

Catalog no results:

- explain no exact match;
- suggest clearing filters;
- offer manager help.

Missing product image:

- use branded neutral placeholder only as temporary internal state;
- do not launch with generic placeholders for priority products.

## Accessibility

Requirements:

- visible focus states;
- sufficient color contrast;
- semantic headings;
- accessible labels for icon buttons;
- form errors tied to fields;
- keyboard navigable menus;
- no text embedded only in images.

## Responsive Rules

Breakpoints:

```text
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

Mobile priorities:

- fast contact;
- quote CTA;
- product images;
- filters as drawer;
- no horizontal overflow.

Desktop priorities:

- richer comparison;
- visible filters;
- multi-column product grids;
- deeper navigation.

## Motion

Use minimal motion:

- hover transitions;
- menu open/close;
- filter drawer;
- form success;
- gallery transitions.

Rules:

- motion should support clarity;
- no decorative parallax;
- respect reduced motion preferences.

## Implementation Tokens

Suggested token groups:

```text
colors
typography
spacing
radius
shadow
zIndex
breakpoints
```

Shadow system:

```text
shadow-sm subtle card separation
shadow-md dropdowns and floating CTA
shadow-lg modals/drawers only
```

Use shadows sparingly. Borders and spacing should do most of the layout work.

## Design Acceptance Criteria

Stage 6 is accepted when:

- visual direction is clear;
- color and type systems are defined;
- layout and responsive rules are defined;
- component behavior is defined;
- product cards and forms have clear states;
- accessibility constraints are documented;
- system is ready to be translated into code in Stage 7.

## Stage 9 Premium Upgrade Notes

The initial implementation proved the structure but did not yet feel premium enough. Stage 9 upgraded the live UI direction with these additional rules:

- the homepage hero should be product-led and use real Aksessoriuz imagery;
- product/category cards should launch with real imagery where available, not neutral placeholders;
- dark premium sections are acceptable when balanced by white and mist sections;
- brass is used only as a small premium accent;
- trust proof should appear early, using current-site facts and client logos;
- production capability should be visible through service imagery, not only text;
- forms should feel like quick B2B calculation requests, not internal prototypes.

These rules should guide future product, category, service, and case page designs.
