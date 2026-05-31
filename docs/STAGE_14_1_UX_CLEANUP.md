# Stage 14.1 UX Cleanup

## Status

Implemented on 2026-05-31.

## Reason

After Stage 14, the catalog structure was technically correct, but the public interface mixed client-facing pages with internal migration language.

The client also reported confusion between:

- the local rebuilt site and the current production site;
- the homepage and subcategory pages;
- the active Russian interface and the English language switch.

## Implemented Cleanup

- Replaced Russian-page English service labels with Russian client-facing labels.
- Removed public wording such as `backlog`, `manifest`, `legacy URL`, and migration-control language from visible RU pages.
- Reworked subcategory hero blocks to use product imagery with a dark transparent overlay, closer to the homepage visual direction.
- Changed the language switch from a single target label to a clearer `RU / EN` control with the active locale emphasized.
- Replaced technical subcategory counts with business terms: positions in direction, ready references, and quote-by-batch.
- Replaced service-page migration notes with production and technology-selection copy.

## Validation

Commands run:

- `npm run check`
- `npm run check:legacy-migration`
- `npm run build`

Build result:

- 175 static pages generated;
- 0 errors;
- 0 warnings.

Browser checks:

- `/ru/`
- `/ru/catalog/business-products/`
- `/ru/catalog/business-products/diaries/`
- `/ru/services/`
- `/ru/services/uv-printing/`

Checked:

- no public RU occurrences of internal migration terms on tested pages;
- `RU / EN` language control is visible;
- Russian brand subline is visible in the header;
- subcategory pages keep B2B project logic;
- no horizontal overflow on tested desktop viewport.

## Next Recommendation

Continue to Stage 15 after approval: lightweight reference pages or redirect decisions for the remaining backlog product records.
