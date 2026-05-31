# Stage 9 Premium Homepage Upgrade

## Status

Implemented on 2026-05-31.

## Objective

Move the site from a clean technical B2B foundation to a more premium, product-led presentation while preserving the current-site catalog and capability coverage.

## Audit Finding

Before this stage, the local homepage had:

- 3 main sections;
- no product imagery in the page content;
- a functional but generic B2B layout;
- complete catalog logic, but insufficient premium visual impact.

Conclusion:

The foundation was correct, but the homepage needed real product imagery, stronger trust signals, deeper section rhythm, and a richer production story.

## Implemented Improvements

Homepage:

- full-bleed product-led hero with a real Aksessoriuz image from the current site;
- premium dark hero treatment with restrained brass and emerald accents;
- trust strip with current-site proof points;
- three discovery paths: by business type, by product, and by technology;
- full product group section with real category imagery;
- dark production capabilities section with service imagery;
- materials and methods section;
- B2B process section;
- client proof section using current-site logos;
- final quote CTA.

Components:

- `ProductGroupCard` now supports real imagery, category badges, stable media aspect ratio, and stronger hover states.
- `QuoteForm` now has a more premium form treatment and cleaner commercial helper text.
- `Header` now uses a more polished sticky treatment and stronger brand lockup.

Taxonomy:

- `src/data/catalog.ts` now stores image assets for catalog groups and capabilities.

## Validation

Build command:

```bash
npm.cmd run build
```

Result:

- 0 errors;
- 0 warnings;
- 51 static pages built.

Browser checks:

- `/ru/`
- `/en/`
- `/ru/catalog/`
- `/ru/catalog/restaurant-accessories/`
- `/ru/services/laser-cutting-engraving/`
- mobile viewport `390x844` for `/ru/`

Observed:

- no horizontal overflow;
- homepage has 7 sections and 23 images;
- catalog and service routes render with imagery.

## Remaining Design Work

The premium direction is now materially stronger, but the final quality still depends on:

- client-provided final product cards and images;
- real case studies and project photography;
- stronger mobile navigation mechanics;
- connected form submission;
- product detail pages and inquiry-list mechanics.
