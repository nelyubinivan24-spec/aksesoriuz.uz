# Restart Audit

Date: 2026-05-31

## Why This Restart Exists

The current rebuild drifted into an internal migration interface instead of a premium public B2B website. This is a strategic failure, not a small copy issue.

The public website must sell Aksessoriuz as a custom B2B manufacturer. It must never explain the website rebuild, migration stages, backlog records, internal URL coverage, draft statuses, or development workflow.

## Business Essence

Aksessoriuz is a B2B custom production company, not an online store.

The real business model:

- clients do not add products to a cart;
- clients choose references, product families, materials, branding methods, quantities, and deadlines;
- the sale happens through direct negotiation, sample discussion, quote calculation, design/layout approval, production, and delivery;
- the website's job is to create trust, explain capabilities, show product breadth, and generate qualified requests.

The original site positions the company as a manufacturer of restaurant and hotel products, menu folders, bill folders, bill boxes, badges, business accessories, exclusive packaging, corporate souvenirs, promo gifts, and custom items from artificial leather, wood, metal, acrylic, and other materials.

Original proof points that must stay visible:

- founded in 2013;
- 12+ years of experience;
- 1,500+ satisfied clients;
- free delivery, if still commercially valid;
- trusted by brands such as Korzinka, UzCard, HYATT, Crafers, Evos, RC Cola, and many more;
- works with restaurants, hotels, large retail chains, state institutions, and companies across industries.

Primary sources checked:

- https://aksesoriuz.uz/ru/o-kompanii/
- https://aksesoriuz.uz/ru/produkcija/
- https://aksesoriuz.uz/ru/uslugi/
- https://aksesoriuz.uz/sitemap/lang/ru
- https://aksesoriuz.uz/sitemap/lang/en

## Original Site Coverage Lock

The rebuild must not become poorer than the original site.

Sitemap control:

| Sitemap | Total URLs | Product-like URLs | Non-product URLs |
| --- | ---: | ---: | ---: |
| RU | 305 | 255 | 50 |
| EN | 304 | 255 | 49 |

Original top-level commercial groups:

- business products;
- hotel products;
- restaurant and cafe products;
- packaging and souvenir products;
- uniform;
- services and production technologies.

Original service/capability coverage:

- UV printing;
- printing / polygraphy;
- foiling;
- laser cutting and engraving;
- embossing;
- marking;
- food photography;
- packaging and souvenir production;
- uniforms and textile products;
- carpentry production.

Original product family counts from RU sitemap:

| SKU family | Count | Commercial meaning |
| --- | ---: | --- |
| MMCBM | 66 | Menu folders and menu covers |
| CHK | 45 | Checkholders and check boxes |
| BX | 26 | Boxes, cases, packaging |
| RZRV | 16 | Reserved signs |
| BLKNT | 13 | Diaries and notebooks |
| MNJ | 13 | Serving trays / menazhnitsy |
| KVRKMK | 12 | Mouse pads / mats |
| UEBJ | 10 | ID covers, badges, certificates |
| EBJ | 10 | Badges |
| SLV | 9 | Napkin holders |
| PPK | 7 | Document folders |
| PLNT | 5 | Clipboards / tablets |
| CDH | 5 | Cardholders |
| PDSTKN | 4 | Cup holders |
| VZTFL | 3 | Stands / holders |
| VZTN | 3 | Business card holders |
| UNFM | 3 | Uniforms |
| BZNSNBR | 3 | Business sets |
| FART | 2 | Aprons |
| TBLTNT | 2 | Table tents |
| KTLG | 2 | Bags / catalog packaging |
| KYCHN | 1 | Keychains |
| DRP | 1 | Wooden tableware |
| SUGB | 1 | Proposal books |
| KSHLK | 1 | Wallets |
| BRLK | 1 | Keychains |
| PLN | 1 | Planners |

## What Is Wrong In The Current Rebuild

### Strategic Problems

- The site has been optimized around preserving old URLs instead of helping a buyer understand and request production.
- The current public language overuses "reference" and "project" without enough product value, materials, use cases, proof, or production confidence.
- The catalog looks like a technical coverage map rather than a premium commercial catalog.
- Product cards do not yet answer enough B2B questions: use case, material, branding method, customization, quantity logic, timeline logic, and next action.
- The page structure does not yet reflect the original site's full commercial breadth in a user-friendly way.
- The site does not yet make Aksessoriuz feel like a serious production partner with process, quality control, and proof.

### UX/UI Problems

- The homepage has useful pieces but lacks a strong premium system: product-led storytelling, proof, industry paths, material/technology explanation, and clear conversion flow are not yet integrated enough.
- Category pages are too generic and text-heavy; they do not yet feel like curated product directions.
- The current product grid has weak hierarchy: large empty text zones, repetitive badges, generic copy, and insufficient commercial scanning value.
- Subcategory pages look like landing pages for internal coverage instead of buyer decision pages.
- Mobile navigation has a button but no finished menu mechanics.
- Language switching is too basic and should preserve the equivalent page where possible.
- There is no strong "request calculation" flow tied to selected product interests.

### Content Problems

- Public content must not say or imply: current site, new structure, migration, backlog, manifest, future stage, draft, temporary cards, integration stage, or internal route strategy.
- Internal documents can contain migration language, but public components and pages cannot render it.
- Current product descriptions are too generic and nearly identical.
- The site needs a controlled product content model before more public product pages are produced.

### Technical Problems

- Current Astro foundation is usable and should be kept.
- `src/data/legacyMigration.ts` is useful as an internal SEO/migration control file, but it must stay disconnected from public commercial copy.
- `src/data/products.ts` contains only 32 modeled public products while the original site has 255 product URLs.
- Product data mixes public product logic with internal status names. This should be separated.
- Header, navigation, form integration, analytics events, redirects, and asset optimization are incomplete.
- External original-site images are useful for interim references but should be reviewed for final asset strategy and optimization.

## Non-Negotiable Rules Going Forward

1. No public page may mention development, redesign, migration, old URLs, backlog, draft states, future stages, or internal project work.
2. No cart, checkout, online purchase, or self-service ecommerce language.
3. Every public page must answer a buyer question or move the buyer toward a qualified request.
4. Every original product family and service capability must have a clear public destination.
5. Internal migration data must be isolated from public content.
6. Russian pages must remain Russian by default; English must not become the accidental active state.
7. Product cards are not placeholders. If data is incomplete, the card must still be commercially useful.
8. Premium design means better product presentation, hierarchy, proof, and usability, not only dark colors.
9. Every stage must include build checks, browser checks, mobile checks, and forbidden-language scans.
10. No new public implementation stage starts before its structure and acceptance criteria are approved.

## What To Keep

- Astro technical foundation.
- GitHub branch workflow.
- Existing sitemap and original-site inventory documents.
- Legacy migration data as internal SEO/control data.
- Catalog taxonomy as a starting point, after rewriting public labels and separating internal fields.
- Product images from the original site as temporary visual assets, subject to optimization and replacement.
- Quote-first business logic.

## What To Replace

- Homepage structure and copy.
- Catalog index and category pages.
- Product card design and data model.
- Product detail page structure.
- Subcategory landing page logic.
- Service pages.
- Industry pages.
- Work/cases pages.
- Header and mobile navigation.
- Lead form flow and intent capture.
- Public labels that say "example", "reference", "draft", or similar too mechanically.

## What To Remove From Public UI

- Internal migration counts as public value.
- Any "current site" language.
- Any "new structure" language.
- Any "stage", "future", "backlog", "manifest", "legacy URL" language.
- Any explanation that the site is being rebuilt.
- Any product-card copy that sounds like a placeholder.

## Restart Outcome

The next implementation line should be treated as a new product direction:

- premium B2B manufacturer website;
- full product and capability coverage;
- quote-first conversion;
- commercial catalog, not migration catalog;
- design system driven by product photography, materials, production quality, and trust.

