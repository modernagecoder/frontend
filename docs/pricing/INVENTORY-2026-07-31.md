# Pricing Surface Inventory — measured 2026-07-31

> Produced by a six-agent sweep of the repository before any pricing work began.
> Every count was re-measured by the synthesising agent; where the upstream readers
> disagreed, the number here wins. This is the factual baseline the single-source
> pricing system is designed against.

# PROPAGATION MAP: price surfaces, Modern Age Coders frontend

All counts below are my own, re-measured in this session. Where the six upstream reports disagreed, my number wins. Pattern basis is stated per line.

**Do not plan against these upstream numbers (all superseded here):** meta-desc-with-price 110 / 79; city cluster 152; `.md` twins with price 501 / 504; "479 price-bearing files"; course JSONs 116 vs 117; "116 course pages". Also **retracted outright**: the claim that `{{PRICE_LIFETIME}}` "always resolves (0 unresolved placeholders)" — see SKU section.

---

## 1. Surfaces in dependency order

Basis: `src/pages/*.html` = 591 files, `src/pages/*.md` = 584, `content/courses/data/*.json` = 117 (116 course files + `courses-config.json`), `content/courses/generated/*/` = 115 dirs.

| # | Layer | Files | Runs when | Notes |
|---|---|---|---|---|
| 0 | **Charge-path stores (parallel authority, not downstream)** | 3 | runtime | `content/courses/data/courses-config.json` fetched by `src/js/course-payment.js:192` = the India Razorpay amount. `src/js/international-pricing.js PRICES.international*` = the USD amount. `src/js/summer-camp-enrollment.js:159` + `src/js/winter-camp-enrollment.js:14` read **neither** (`return this.isIndian() ? 4999 : 60;`). |
| 1 | **Build generators that run on every Netlify deploy** | 6 | `npm run generate:all` | `netlify.toml` build: `npm install && npm run generate:all && npm run build:inline && npm run minify && ...`, `publish = "."`. Chain: generate:blogs, generate:courses, generate:resources, generate:static-md, generate:llms, generate:sitemap-html, generate:sitemap-index, verify:sitemap. |
| 1a | `scripts/generate-courses.js` `getTierPrices(slug)` (line 647) | drives 115 dirs | deploy | Hardcoded strings; slug regex `/codex-and-claude-code/i` selects the premium branch. Feeds both visible `{{PRICE_GROUP}}/{{PRICE_MINIBATCH}}/{{PRICE_PERSONAL}}` (template lines 195/202/208) and the three INR JSON-LD Offers (line 753+). |
| 1b | `content/courses/template/course-template.html` | 1 | deploy | Lines 226/234 hardcode `$40` / `$100` as **literals**, post-swapped by order-dependent regexes in generate-courses.js:1256-1275. |
| 1c | `scripts/generate-llms-full.js` -> `llms-full.txt` (tracked at root) | 1 | deploy | Reads `llms.txt` as input + per-course `meta.price`. Line 158 hardcodes a wrong figure (verified). |
| 1d | `scripts/generate-blogs.js` <- `content/blog/data/*.json` | 4 priced | deploy | Output `content/blog/generated/` gitignored. |
| 1e | `scripts/generate-static-md.js` -> `src/pages/*.md` | 584 | deploy | Pure derivation, no price literals; overwrites unconditionally. |
| 2 | **One-shot generators whose output is COMMITTED and which never run on deploy** | 3 | manual only | `scripts/build-city-warm.py` (131 city pages, in-place rewrite), `scripts/generate-age-grade-pages.js` (46 pages), `scripts/gen_aiml_pages.py` (17-20 pages + hand-written `.md`). Editing these changes nothing until re-run and the diff committed. |
| 3 | **Hand-maintained static HTML — the bulk** | **529 of 591** carry one of our price values | never regenerated | Basis: union of INR-bearing (386) and USD-bearing (159) under a currency-anchored pattern. No script owns these. |
| 4 | **Derived twins** | 584 `.md` (391 priced), `llms-full.txt` | deploy | Self-heal **only** if layer 3 is fixed AND `generate:all` runs AND the ~400-file `.md` diff is committed. Twins are git-tracked, so the repo can lag prod. |
| 5 | **Runtime JS overlay (display only, non-India visitors)** | 325 of 591 pages load `international-pricing.js` | per visitor | Rewrites visible text nodes; skips `SCRIPT/STYLE/NOSCRIPT/TEXTAREA/TITLE`, so JSON-LD and `<title>` are never touched. **61 INR-bearing pages do not load it at all** (measured: 386 INR pages minus intersection with the 325). |
| 6 | **Unreachable by any text tool** | 4 | n/a | `content/blog/image-src/coding-class-fees-india-2026/{00-hero,01-per-class}.html` rendered to `public/images/blog/coding-class-fees-india-2026/{00-hero,01-per-class}.png` (all four confirmed present). A stale price ships as a PNG. |
| 7 | **Stale served copies** | 2 | n/a | `src/pages/pricing.html.backup` and `src/pages/index2.html` both exist. `publish = "."`, so repo root is web root. |
| 8 | **Routing** | 2 | n/a | `_redirects` + `netlify.toml`. **No routing work is needed for a price change**; `/pricing`, the `/coding-fee-calculator` family and `/llms.txt` are already wired in both files. No price appears in any sitemap. |

---

## 2. Static vs runtime

**Static (must be rewritten at build time or by hand):** all 529 price-bearing `src/pages/*.html`; 439 files containing `priceCurrency` (JSON-LD); 94 `<meta name="description">`; the `.md` corpus; `llms.txt` (hand-maintained input) and `llms-full.txt`; `content/courses/generated/*`; `courses-config.json`; the two blog poster HTML files and their PNGs.

**Runtime (JS swaps per visitor, never reaches a crawler):** the USD display on 325 pages. Two independent mechanisms:
- Named-component swaps (`.price-amount`, `.plan-price`, `.enrollment-option .price`, `.pricing-amount .currency + .price`, `.hero-stat strong`, `[data-enroll-camp]`) plus heading-**text** matching (`text.includes('group')`, `includes('personal')`, `includes('code queens')`), which breaks silently on any copy edit.
- `genericPriceSwap()` TreeWalker, whose **regex keys are the current India prices** (`/(?:₹|\bRs\.?)\s*1,?499(?!\d)/g` etc.), with a self-documented ordering hazard at line 349: "Order matters: ₹49,999 must be handled before ₹4,999."

**Outside every JS mechanism:** `src/pages/real-coding-classes.html` (both currencies authored in HTML, toggled by the `.rc-usd` body class) and `src/pages/coding-fee-calculator.html` (its own 15-subject x 4-age INR matrix plus a 12-country FX table). Neither loads `international-pricing.js`.

**Consequence:** Googlebot always indexes the rupee price. A JS-executing crawler outside India renders USD text against INR JSON-LD on the same page.

---

## 3. SEO-critical surfaces and the exact failure

| Surface | Count | What breaks if stale |
|---|---|---|
| JSON-LD `Offer` / `AggregateOffer` | **439** `src/pages/*.html` + 115 generated course pages | Rendered-vs-structured price mismatch. `generate-courses.js` already records a prior outage of this class (`offers.category` held a tier name, failing a required property and making every course page ineligible for the Course rich result). |
| `<meta name="description">` with a price | **94** | The literal SERP snippet. Comma-less form `₹1499/mo` on the school pages differs from the `₹1,499` in the body, so a comma-aware regex misses it. |
| `og:description` / `twitter:description` | ~89 / ~81 (a near-but-not-identical subset of the 94, so the three tags drift independently) | Social/AI-preview snippet. |
| FAQPage `acceptedAnswer.text` | ~412 files repo-wide | Free prose, three currencies, all three tiers in one sentence, plus derived arithmetic inside the answer. Hardest surface on the site. |
| `<title>` / `og:title` | `pricing.html` only (plus hackathon prize) | |
| `.md` twins | 391 of 584 priced | Committed crawler corpus; goes stale in git until `generate:static-md` runs and the diff is committed. |
| `llms.txt` / `llms-full.txt` | 2 | The AI-engine feed. `llms.txt` lines 401-406 are currently the most accurate price statement in the repo and are hand-maintained, so they rot silently. |

**Two live mismatches confirmed by me, before anyone touches anything:**
1. `src/pages/index.html:286-289` publishes `"name": "Personalized 1-on-1 Classes", "price": "2499"` while the page visibly shows ₹4,999. Highest-authority page on the site.
2. `src/pages/pricing.html:100-101` publishes `"lowPrice": "1499", "highPrice": "4999"` while line 450 visibly quotes `&#8377;9,999` for the agents 1-on-1. The AggregateOffer understates the range Google sees on the page.
3. `scripts/generate-llms-full.js:158` emits `1-on-1 from ₹2499/month` (real: ₹4,999) and omits Mini Batch entirely.

---

## 4. The SKU set the system must model

Axes with evidence: **subject** {coding, maths, premium-agents, camps} x **region** {India, International} x **tier** {group, miniBatch, personal, lifetime, oneTime}.

**SKUs that exist (evidence: a price table entry AND a rendered surface):**

| Subject | Region | group | miniBatch | personal | lifetime | one-time |
|---|---|---|---|---|---|---|
| coding | India | ₹1,499 | ₹2,499 | ₹4,999 | ₹49,999 (config only) | - |
| coding | Intl | $40 | **does not exist** | $100 | $599 (config only) | - |
| maths | India | **no separate SKU** | **no separate SKU** | **no separate SKU** | - | - |
| maths | Intl | $100 | **does not exist** | $150 | **does not exist** | - |
| premium-agents | India | ₹2,499 | ₹4,999 | ₹9,999 | ₹44,999 / ₹19,999 (per-course) | - |
| premium-agents | Intl | $100 | **does not exist** | $150 | **does not exist** | - |
| camps (summer/winter) | India | - | - | - | - | ₹4,999 |
| camps | Intl | - | - | - | - | $60 |

**Combinations that DO NOT exist and must not be invented:**

- **USD Mini-Batch, any subject.** Primary source, `src/js/international-pricing.js` header comment, verbatim: *"For international users, only 2 tiers are shown ($40 Group, $100 Personal). The Mini Batch tier is hidden via [data-india-only=\"true\"] — NOT re-priced. No USD price exists for Mini Batch."* Backed by `"indiaOnly": true` in courses-config.json and a two-layer guard in `course-payment.js:293` and `:424` keyed on the literal string `'miniBatch'`.
- **India maths as a distinct SKU.** There is an `internationalMaths` table but no `indiaMaths`. The subject axis bifurcates **only** internationally. A config with `maths.india.*` fabricates SKUs that were never sold.
- **maths lifetime, agents lifetime, maths summer, agents summer.** `internationalMaths` and `internationalAgents` carry only `group` and `personal`.
- **USD camp Offer in schema.** The $60 exists only at runtime and in the two camp JS files; no `priceCurrency: USD` Offer exists on any camp page.
- **USD Offer on any generated course page.** All 115 publish INR only, while the visible page shows $40/$100 or $100/$150.

**Lifetime is a config/charge-path SKU, not a rendered one.** Verified: `content/courses/template/course-template.html` contains `{{PRICE_GROUP}}` (195), `{{PRICE_MINIBATCH}}` (202), `{{PRICE_PERSONAL}}` (208) and **no `{{PRICE_LIFETIME}}` at all**, yet `generate-courses.js:1083` runs `html.replace(/{{PRICE_LIFETIME}}/g, ...)` against nothing. Lifetime therefore reaches users only via the `course-curriculum-data` JSON island, `llms-full.txt`, the `.md` twins and Razorpay. Its values also disagree across stores: `international-pricing.js` ₹49,999, `courses-config.json` defaultPricing 49999 with per-course 19999 / 34999 / 44999, and rendered `meta.price.lifetime` ₹34,999 / ₹39,999.

**Real SKUs outside the owner's canonical list (the config must either model or explicitly disown them):**
- ₹1,999 as **four different school-bootcamp programmes** at one number: CBSE CS Practical (Birla), Informatics Practices & Data Science (BHS Mukundapur), ISC CS Practical (Don Bosco), Girls in Tech AI & Web Dev (Sushila Birla). Present inside FAQPage JSON-LD, so already indexed.
- ₹2,999 school 1-on-1 tier (has its own `genericPriceSwap` rule mapping to $100 / $150).
- ₹34,999 to ₹69,999 lifetime **range** hand-written on `real-coding-classes.html:219`, backed by no store.
- `$599` intl lifetime, present in three JS/JSON stores, rendered nowhere.

---

## 5. Migration cost, blunt

**Files needing a one-time semantic-tagging pass: 529 static HTML pages**, plus 1 course template, 1 blog-poster pair, 116 course JSONs and 4 blog JSONs. Derivation: 386 INR-bearing + 159 USD-bearing under a currency-anchored pattern, deduplicated to 529 of 591; the remaining 62 pages carry no price of ours.

**Automatable without human review (regular, per-cluster shapes, roughly 380 files):**
- City cluster 131 (`.price-grid > .price-card > .pv`, uniform `&#8377;` entity).
- Grade/age ladder 46, AI/ML intl 20-21, Gulf 7, country 14 (but the country split-span `<span class="cur">USD</span><span class="amt">100</span>` contains no currency character, so it needs a shape-specific rule).
- The 439 JSON-LD `Offer` blocks, except the Kolkata locality cluster.
- The 94 meta descriptions and their og/twitter siblings, once entity-decoded.

**Human review mandatory (roughly 150 files, and these are the ones that will burn the project):**
- FAQ prose and `acceptedAnswer.text`, three competing shapes, all tiers in one sentence.
- Derived arithmetic that must be **recomputed, not substituted**: ₹187 / ₹312 / ₹625 per live class, $5 / $12.50 / $18.75 per hour, across ~52 files plus a blog image alt and a rendered PNG.
- 57 files with local-currency equivalents (AED 146.90, AUD 57, KD 12.312 citing the Central Bank of Kuwait) with no FX source in the repo.
- 52 files of competitor/market ranges, 6 with salary or funding figures, 2 with third-party exam fees, 3 with hackathon prize money, 1 with a B2B quote.
- Taught lesson content sharing the same numerals: `z-index: 9999` quiz questions, `border-radius: 9999px`, `sumOfDigits(9999)` expecting 36, SQL rows `4999.00 / 2499.99 / 1999.00` **with their pre-rendered expected output stored alongside**, a CSS lesson's fake `Rs 2,999 / strike Rs 4,999` offer card, and a Singapore-maths word problem where "3 units = $60" must stay consistent with "1 unit = $20".
- One student testimonial quoting a price (`hackathon-prep-adults.json:517`, "Best ₹49,999 I've spent on my career").
- The Kolkata locality cluster: 30 files, seven mutually incompatible AggregateOffer/Offer property sets, no two agreeing.

**Prerequisite work that is not tagging:** reconcile four disagreeing authorities (`getTierPrices()` for display+schema, `courses-config.json` for the India charge, `international-pricing.js` for the USD charge, `meta.price` for llms/md), fix the three live mismatches in section 3, and decide the fate of 61 INR pages that never load the swap script and 21 static-USD pages (14 country + 7 Gulf) that show dollars to Indian visitors.

---

## 6. Top 5 ways this goes wrong, ranked

**1. A bare-number replace corrupts the site outside the price namespace.**
`9999` is overwhelmingly not a price here: `z-index:9999` in `components/nav.html:180` (`99999`), `content/courses/template/course-template.css:106`, `src/js/summer-camp-enrollment.js:111` (which also holds `coursePrice: 4999` twelve lines later), `border-radius: 9999px`, and quiz questions whose subject *is* the number 9999. This value alone disqualifies bare-number replacement. Same class: `SQL:1999` in a taught lesson, and `4999` as a substring of `49999 / 44999 / 34999`.

**2. The same number is a different tier depending on page context, and the codebase already special-cases it.**
`generate-courses.js:648-652` uses the literal `'2499'` for **group** in the premium branch and for **miniBatch** in the standard branch, inside one function. `international-pricing.js` maps ₹2,499 to $40 (default), $150 (maths) or $100 (agents), and ₹4,999 to $100 or $150. One sentence carries two meanings of `$100`: `src/pages/coding-vs-maths.html:395` "Coding: $40 a month group, $100 1-on-1. Mathematics: $100 group, $150 1-on-1." File name does not disambiguate either: `coding-classes-in-australia.html:744` carries the **maths** $100.

**3. Display and charge are wired to different stores, so the site can advertise one price and bill another.**
India display comes from `getTierPrices()` at build time; the India charge comes from `courses-config.json` fetched at runtime by `course-payment.js:192`. The camps read neither (`isIndian() ? 4999 : 60` straight into the create-order body). `sw.js` serves `.js` cache-first with background revalidation while the `courses-config.json` fetch falls through to the network, and **no price script carries a `?v=` token** (only 6 unrelated JS files do), with `CACHE_VERSION = 'mac-v1'` never bumped. After a price change a returning visitor can be shown the old price by cached JS and charged the new one by fresh JSON on the same page load. `course-payment.js` already documents the reverse failure as "a 90x overcharge."

**4. The JS holds the old prices as regex match keys, so changing a price silently disables the international swap on hundreds of pages.**
`genericPriceSwap()` matches `(?:₹|\bRs\.?)\s*1,?499(?!\d)`. Change ₹1,499 to anything else and no rule fires: international visitors see raw rupees. Worse, `hideGenericMiniBatchCards()` fails **open** on a stale key, leaving an India-only Mini Batch card visible to a foreign visitor who can then click toward a plan with no USD price. Both failures are invisible to grep and to counting; they only show in a rendered browser at a non-IN locale (`?test=intl` is the only harness that exists).

**5. Regeneration either wipes the work or resurrects wrong data.**
`generate-static-md.js` unconditionally overwrites every `src/pages/*.md`, including the hand-written twins produced by `gen_aiml_pages.py:1036` and `gen-b2b-services.js:829`. `content/{blog,courses}/generated/` are gitignored and rebuilt on Netlify, so hand edits there are wasted. And harvesting `meta.price` from the 116 course JSONs would resurrect six values that `getTierPrices()` currently suppresses: ₹999, ₹1,999, ₹2,999, ₹3,999, ₹5,999, ₹8,999. `scripts/update-course-json-pricing.js` is the archaeological proof this already went wrong once: it matched `/2[,]?499/`, needed a hand-written idempotency guard, skipped every course that did not match the pattern (which is exactly why the six wrong values survive), and emitted a third display format `₹2499/month` with no comma. Six further fossil codemods (`update-payment-ui.js`, `fix-payment-button.js`, and four siblings) embed ₹1,499 inside retired `#a855f7` dark-theme markup and must be excluded from any repo-wide pattern.

---

### Open discrepancy, not smoothed
`content/courses/data/` holds 117 JSON files; minus `courses-config.json` that is 116 course sources, but only 115 dirs exist under `content/courses/generated/`. Resolved by slug (generated dirs are named from `meta.slug`, not the filename): the missing one is `content/courses/data/data-analytics-mathematics.json`, slug `data-analytics-mathematics-masterclass`. Since `generated/` is gitignored and rebuilt by Netlify, the local tree may simply be stale; whether that course is live needs a check against production before any count of "course pages" is trusted.
