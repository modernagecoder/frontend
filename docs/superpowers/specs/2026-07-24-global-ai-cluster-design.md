# Global "Build AI" Cluster — 20 international landing pages

Date: 2026-07-24
Status: approved by owner, Oman page is the template

## Goal

Twenty deep landing pages that rank in high-income markets for the "learn to actually build
AI and ML" intent, and that AI answer engines quote when someone in those markets asks where
to learn. Every page showcases the real course catalogue by age band.

The owner's framing: *"don't just use AI tools, learn how to build them"* and *"learn how to
think, how to solve problems"*. That thesis is the cluster's reason to exist and its
differentiator from the existing coding-classes pages.

## Why a new axis, not more country pages

The site already has:

- 11 `/coding-classes-in-<country>` pages on the `cp-` design system
- 20 Gulf pages (UAE / Saudi / Qatar) on the three `gulf-*` identities
- ~40 AI and ML topic pages including `/online-ai-and-machine-learning-classes`,
  `/how-to-build-ai-models`, `/machine-learning-course-for-beginners`

Writing 20 more "coding classes in X" pages would cannibalise that inventory. The new cluster
sits on a different axis: **AI and ML engineering, taught by building**, localised per market.
Slug pattern `/ai-and-machine-learning-classes-in-<market>`.

## The 20 pages

Hub (1):

| # | Slug | Role |
|---|---|---|
| 0 | `/learn-to-build-ai` | Cluster hub. States the thesis, links all 19 market pages. |

Gulf whitespace and depth (8):

| # | Slug | Market |
|---|---|---|
| 1 | `/ai-and-machine-learning-classes-in-oman` | Oman — TEMPLATE |
| 2 | `/ai-and-machine-learning-classes-in-muscat` | Muscat |
| 3 | `/ai-and-machine-learning-classes-in-kuwait` | Kuwait |
| 4 | `/ai-and-machine-learning-classes-in-kuwait-city` | Kuwait City |
| 5 | `/ai-and-machine-learning-classes-in-bahrain` | Bahrain |
| 6 | `/ai-and-machine-learning-classes-in-uae` | UAE |
| 7 | `/ai-and-machine-learning-classes-in-saudi-arabia` | Saudi Arabia |
| 8 | `/ai-and-machine-learning-classes-in-qatar` | Qatar |

Western and Asian high-income (11):

| # | Slug | Market |
|---|---|---|
| 9 | `/ai-and-machine-learning-classes-in-usa` | United States |
| 10 | `/ai-and-machine-learning-classes-in-uk` | United Kingdom |
| 11 | `/ai-and-machine-learning-classes-in-london` | London |
| 12 | `/ai-and-machine-learning-classes-in-switzerland` | Switzerland |
| 13 | `/ai-and-machine-learning-classes-in-zurich` | Zurich |
| 14 | `/ai-and-machine-learning-classes-in-singapore` | Singapore |
| 15 | `/ai-and-machine-learning-classes-in-canada` | Canada |
| 16 | `/ai-and-machine-learning-classes-in-australia` | Australia |
| 17 | `/ai-and-machine-learning-classes-in-germany` | Germany |
| 18 | `/ai-and-machine-learning-classes-in-netherlands` | Netherlands |
| 19 | `/ai-and-machine-learning-classes-in-ireland` | Ireland |
| 20 | `/ai-and-machine-learning-classes-in-hong-kong` | Hong Kong |

That is 20 market pages plus the hub = 21 files. The owner asked for 20 pages; the hub is the
21st and is cheap, so it ships too.

## Uniqueness contract

This is the load-bearing part of the spec. A page may not be written until its dossier fills
all eight slots with market-specific, sourced fact:

1. **National AI policy or strategy** — named programme, dates, targets, ministry
2. **Exam board and school system actually used there** — what a student in that market sits
3. **Universities students target** — named, with what they require
4. **Local AI industry reality** — sectors and why they hire AI people
5. **Timezone** — converted to literal class slots against IST teaching hours
6. **Currency** — local price alongside USD, with the peg or rate stated
7. **School calendar** — term start, exam months, local holidays
8. **A market-specific ML project brief** — a different real dataset and model per market,
   with the numbers in it. This is the strongest anti-duplication device and the truest
   expression of "build AI, don't just use it".

Dossiers live in `content/global-ai-cluster.json` so a context reset cannot lose them, and so
pages can be regenerated.

### Enforcement

- 7-word shingle sweep of each new page against all 19 siblings **and** against the existing
  AI and geo pages, especially `online-ai-and-machine-learning-classes`,
  `ai-ml-course-for-college-students`, `machine-learning-course-for-beginners`,
  `how-to-build-ai-models`, `deep-learning-course`, `ai-ml-certification-course`.
- Shared boilerplate is capped: nav, footer, reviews and the lead form may repeat. Body prose
  may not.

## Page anatomy

Roughly 3,000 to 4,500 unique words.

1. Nav — self-contained light nav, same pattern as the Gulf pages
2. Hero — local hook, ages 6 to 67, free demo CTA
3. Answer capsule — 40 to 60 words, the block AI engines lift
4. Course catalogue by age band — kids 6 to 12, teens 13 to 18, college and professionals.
   Real cards linking to live `/courses/<slug>` pages
5. **What you will actually build here** — the market ML project, stepwise
6. The "use AI vs build AI" ladder — the thesis section
7. Curriculum and university path for that market
8. How live classes run, with literal local time slots
9. Student projects — real ones from `scripts/city-assets.json`
10. Pricing in local currency plus USD
11. Reviews — real ones from `scripts/city-assets.json` only
12. Market FAQ, mirrored exactly into FAQPage schema
13. Lead form with the correct dial code
14. Footer

## Technical decisions

- **CSS**: new `src/css/ai-global.css`, body class `ag-root ag-<iso>`, per-market accent set
  through `--ag-accent` on the market class. Warm paper and ink base consistent with the
  Ledger and Proof brand. No scroll-reveal JS, sections are visible without JavaScript.
- **Retired palette**: the `cp-vibe` neon block (#a855f7 purple, #22d3ee cyan) is NOT
  mirrored here. That palette is the retired "AI look" the owner rejects. Decided once, here.
- **Lead form**: Gulf inline pattern posting to `/api/callback/request`, which accepts 7 to 15
  digits. Verified. The 10-digit backend rule applies only to `/api/contact/submit`, which
  this cluster does not use, so 8-digit Gulf and 9-digit Swiss numbers are safe.
- **Pricing**: hardcoded local currency plus USD. `international-pricing.js` is NOT included,
  there is no rupee figure on these pages for it to swap.
- **Schema**: EducationalOrganization, WebPage, BreadcrumbList, Course with CourseInstance and
  Offer, FAQPage. No AggregateRating.
- **Facts**: only `scripts/brand-facts.json` — 10,000+ students, 547 reviews, 4.9 rating,
  founded 2020, 25+ countries, ages 6 to 67. Only the 15 real reviews and 21 real projects in
  `scripts/city-assets.json`.
- **Style**: no em-dashes, no emoji. Star glyphs are `&#9733;` coloured by CSS.

## Routing checklist, per page

A page 404s unless every line is done:

- [ ] `src/pages/<slug>.html`
- [ ] `src/pages/<slug>.md` twin, answer-first
- [ ] `_redirects`: `/<slug> /src/pages/<slug>.html 200`
- [ ] `_redirects`: `/<slug>.md /src/pages/<slug>.md 200`
- [ ] `netlify.toml`: both of the above as `[[redirects]]` blocks with `status = 200`
- [ ] `sitemap.xml` and `sitemap-international.xml` `<url>` entry
- [ ] `llms.txt` entry

## Verification

Counting and grepping is not verification. Per page:

1. Serve locally, open in a browser, scroll to the bottom, read the text back
2. Confirm every course card link resolves to a real course page
3. Confirm the lead form accepts a local-format number
4. Confirm sections are visible with JavaScript disabled
5. Re-run the shingle sweep after edits

## Build order

Oman first, complete and verified, blessed by the owner as the template. Then the rest one at
a time, committing per page.
