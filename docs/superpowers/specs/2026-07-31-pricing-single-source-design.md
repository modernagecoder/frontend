# Single-Source-of-Truth Pricing System — Design

**Status:** Design approved 2026-07-31 — implementation in progress
**Branch:** `pricing-single-source`
**Date started:** 2026-07-31

> This file is committed incrementally on purpose. If the session ends, everything
> established so far survives here and work can resume from this document alone.

---

## 1. What the owner asked for

One file that controls every price on the site, so that editing it updates every page
automatically — existing pages and any page added later — without breaking anything and
without damaging SEO.

The price dimensions that must be independently editable:

| Dimension | Values |
|---|---|
| Subject | Coding, Maths (must be separately editable even where the numbers are equal today) |
| Region | India, International |
| Tier | Group, Mini-Batch, Personalised 1-on-1 |

**Added mid-session (second requirement):** visitors in almost every country should see the
price in *their own currency*, adjusted for purchasing power parity, so it feels locally
affordable — while the owner takes no loss, the site stays smooth, and Razorpay keeps working.

---

## 2. Decisions already made by the owner

Captured verbatim from answered questions on 2026-07-31.

### 2.1 Prose prices → tag them, with review before shipping
Structured price components, JSON-LD and JS get rewritten automatically by the build.
Prices written into sentences, FAQ answers and meta descriptions get a **one-time review
list**; the owner hand-approves the tagging once, after which prose updates automatically too.

*Rejected:* auto-rewriting sentences (mangles grammar and multi-price sentences), and
leaving prose untouched (guarantees visible-vs-schema drift).

### 2.2 Currencies → USD is the real price, others are derived
The owner sets USD. The config holds an owner-controlled rate per currency, and the build
stamps approximations. One number to maintain instead of four or five per SKU.

*Rejected:* hand-pricing every currency, and stripping the AED/AUD figures already live on
country pages.

### 2.3 Reserve future slots for exactly two things
- **International Mini-Batch** — the ₹2,499 Mini-Batch tier is India-only today and hidden
  from international visitors. A slot exists so it can be switched on without a rebuild.
- **Per-course price overrides** — today only the two premium Codex/Claude Code courses are
  priced differently. Any course must be able to get its own price without touching code.

*Not wanted:* discount / sibling / annual-pricing slots.

### 2.4 Working practice
- All work happens on branch `pricing-single-source`. Nothing lands on `main`.
- Commit locally after every meaningful step, so nothing is lost if limits are exhausted.

---

## 3. Terrain established so far (verified by reading the repo)

- **591** HTML pages under `src/pages/`.
- **299** of them contain a hardcoded `₹` figure.
- **472** contain a JSON-LD `"price"` field. The most common single block appears **527** times
  as `"price": "1499"`.
- Netlify build command (`netlify.toml`), verbatim:
  ```
  npm install && npm run generate:all && npm run build:inline && npm run minify && cd lovewall && npm install && npm run build && cd ..
  ```
- `content/blog/generated/` and `content/courses/generated/` are **gitignored** — Netlify
  rebuilds them from `content/*/data/*.json` on every deploy.
- `scripts/generate-courses.js` holds `getTierPrices()` (line ~647) with two hardcoded tables
  (standard vs premium "agents" courses) that feed both the visible price and the JSON-LD offers.
- `src/js/international-pricing.js` holds a second, independent price table plus
  `genericPriceSwap()` — a value-keyed regex replacer over text nodes.
- `src/js/course-payment.js` holds a **third** price table and computes the amount actually
  charged (`processPayment`, `finalAmount`, `currency`).
- `jsdom` is already a dependency → rendered verification is possible without installing a browser.
  Playwright is **not** installed.

### 3.1 The finding that determines the architecture

`genericPriceSwap()` in `international-pricing.js` is already a value-keyed replacer, and its
rules table has **already had to fork three ways** (`isAgentsContext`, `isMathsContext`, default)
because the same number means different things:

- **₹4,999** = India 1-on-1 coding *and* premium-agents Mini-Batch *and* summer camp fee
- **₹2,499** = India Mini-Batch *and* premium-agents Group tier
- **$100** = international coding 1-on-1 *and* international maths Group
- **$150** = international maths 1-on-1 *and* premium-agents 1-on-1

The code comments at lines 350–378 document these collisions explicitly.

**Therefore: find-and-replace by value can never be safe here. Semantic tagging is mandatory,**
and tags must carry `subject.region.tier` — not just tier — because India coding and India maths
are both ₹1,499/₹2,499/₹4,999 today and the owner wants them separately editable. The day they
diverge, every untagged `₹1,499` becomes unresolvable.

---

## 4. Investigations in flight

1. **Pricing surface inventory** (`wf_1ec27b4c-f4f`) — 5 parallel readers mapping every
   surface a price change must reach, plus a collision analysis and a propagation map.
2. **PPP / multi-currency research** (`wf_c4504c4d-929`) — verifying Razorpay's real
   multi-currency and international-recurring limits, World Bank PPP data sources, Google's
   policy on geo-varying prices and cloaking, country detection on Netlify, and the
   commercial mechanics (floor price, FX/fee stack, VPN abuse).

Neither had returned when this revision was committed. **No implementation may begin until
their findings are folded in and the design below is approved.**

---

## 4b. STATUS — what is built and what is not (as of commit `daa094c7`)

### Working and verified

| Piece | File | Evidence it works |
|---|---|---|
| The one config file | `pricing/pricing.config.jsonc` | `pricing:check` validates it and prints the resulting worldwide ladder |
| Resolver + formatter | `scripts/pricing/lib/config.js` | 26 tests |
| PPP engine + floor | `scripts/pricing/lib/ppp.js` | floor test walks every subject × tier × 208 economies |
| Live data fetch | `scripts/pricing/refresh.js` | fetched 208 economies + 166 currencies, ECB cross-check passed |
| Stamping engine | `scripts/pricing/lib/stamp.js` | 26 tests, incl. real markup from the live site |
| apply / preview | `scripts/pricing/apply.js` | 347 anchors across 720 files |
| verify | `scripts/pricing/verify.js` | 345 offers checked; catches visible-vs-schema mismatch |
| Course generator wired | `scripts/generate-courses.js` | **115/115 courses byte-identical** before/after; changing one config number moved coding but not maths or agents |
| Operating guide | `pricing/README.md` | — |
| Live homepage bug | `src/pages/index.html` | JSON-LD now 4999, matching the visible ₹4,999 |

Commands live in `package.json`: `pricing:refresh`, `pricing:check`, `pricing:preview`,
`pricing:apply`, `pricing:verify`.

### NOT built yet — the remaining work, in order

1. **Browser runtime for worldwide pricing.** `src/js/pricing-data.generated.js` is
   emitted (101 KB, 208 countries) but **nothing reads it yet**. Needs: a timezone→country
   table (IANA `zone.tab` + `backward`, measured at 3.9 KB brotli, 100% ICU coverage), the
   local-currency estimate line, and a visible country switcher writing `nf_country`.
   Until this ships, international visitors see the flat $40/$100 exactly as before.
2. **Retire the three private price tables.** `international-pricing.js`,
   `course-payment.js`, and the two camp files must read `window.MAC_PRICING`. Critical:
   `genericPriceSwap()` uses the *current prices as regex keys*, so changing a price today
   silently disables the international swap. `verify` already lists these four files.
3. **Charge path.** Razorpay must be given the PPP price for the visitor's country, and
   `courses-config.json` must stop being a second source of truth for the India amount.
4. **Tag the remaining static pages.** ~529 files. Sequence: `pricing.html` visible cards →
   city cluster (131, uniform shape) → country/Gulf/AI-ML → meta descriptions (94) →
   FAQ prose (~150, needs human review per the owner's decision).
5. **Netlify build wiring.** Add `pricing:apply && pricing:verify` to the build command,
   after `generate:all`.
6. **Derived twins.** `.md` corpus (391 priced) and `llms-full.txt` regenerate from source;
   `generate-llms-full.js:158` has a hardcoded wrong price to remove.
7. **Prerequisite, not optional:** the lead backend requires exactly 10 digits for phone.
   A correct Nigerian price feeding a form that rejects Nigerian numbers converts at zero.

### Owner actions that block parts of this

- **Service GST** — `gstOnServicePercent` is 0, assuming zero-rated export under LUT.
  Unconfirmed. If it is 18, the floor rises ~22%.
- **Razorpay FX spread** — undisclosed by Razorpay. Currently buffered at 3%.
  One live low-value charge, reading back `payment.base_amount`, would settle it.

---

## 5. Design direction (as built)

Recorded so the thinking is not lost. Subject to change once research lands.

### 5.1 The one file
`pricing/pricing.config.json` — the only file the owner edits. Shape, roughly:

- `currencies` — symbol, formatting locale, owner-controlled rate per USD, `approx: true`
- `plans[subject][region][tier]` — the actual numbers. `null` means **not sold**, and the
  build must refuse to emit a price for it rather than inventing one. (There is no USD
  Mini-Batch today; an empty slot someone later fills in wrongly is a real risk.)
- `courseOverrides` — slug → named price table, for the premium courses and any future one

### 5.2 The token
Every price occurrence in HTML becomes semantically anchored:

```html
<span data-price="coding.india.group">₹1,499</span>
```

The committed value is the last-stamped one, so the page is always valid standalone. This is
the same pattern `build:inline` already uses for nav/footer.

For JSON-LD, which cannot carry attributes inside the JSON, the anchor goes on the script tag:

```html
<script type="application/ld+json" data-price-scope="coding.india">
```

…and offers are matched by their `name` field against a lexicon
(`"Group Classes"` → group, `"Mini Batch (3-4 students)"` → miniBatch,
`"1:1 Private Tuition"` → personal). An unrecognised offer name **fails the build** rather
than being silently skipped.

### 5.3 Propagation
- `scripts/apply-pricing.js` stamps every anchor from the config.
- `src/js/pricing-data.generated.js` is emitted from the same config; `international-pricing.js`
  and `course-payment.js` are refactored to read it, and their private price tables are deleted.
  **The charged amount and the displayed amount must come from the same source** — a config that
  drives display but not the charge means a customer pays the wrong price.
- Runs in the Netlify build *and* is committed, so the diff is reviewable and the deploy is
  self-healing.

### 5.4 Verification that actually discriminates
A grep count will pass on broken output — that failure mode has already shipped bugs on this
project twice. `scripts/verify-pricing.js` must assert, and fail the build on:

1. every `[data-price]` key resolves to a real config key;
2. every JSON-LD price resolves to config and matches it;
3. **visible price == JSON-LD price, per page** ← catches the historic failure mode;
4. no ₹/$ figure remains outside a `[data-price]` anchor or an explicit allowlist;
5. no numeric price literal remains in the payment JS.

Plus a jsdom pass that loads sample pages in both India and International mode and reads the
rendered text back.

### 5.5 Migration
Sequenced by propagation cost, not page count:
1. Generated course pages first — fix `getTierPrices()` + `courses-config.json` + template,
   rerun, ~106 pages and their JSON-LD propagate for free. Proves the pipeline.
2. JSON-LD across hand-written clusters — highest SEO stakes, few regular shapes.
3. Structured visible components — selector-driven, mechanical.
4. Prose last, as a review list per the owner's decision.

### 5.6 Open risks to resolve
- `sw.js` service worker may serve returning visitors stale prices after a config change.
- `callback-modal.js` is duplicated inside `mainbundle.js` (per project memory) — the
  double-edit trap applies to anything bundled there.
- PPP pricing means genuinely charging less in poorer countries; "no loss" is reconciled by a
  floor price and possibly higher prices in high-income countries. Needs owner sign-off with
  real numbers.
- Googlebot crawls predominantly from US IPs; what the crawler sees must match what the
  JSON-LD claims. Pattern to be confirmed by research before any geo-varying price ships.
