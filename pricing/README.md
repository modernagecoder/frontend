# How to change a price

Everything about money on this website is controlled by one file:

```
pricing/pricing.config.jsonc
```

Change a number there and every page updates — the price people see, the
price Google is told, the price AI engines quote, and the amount Razorpay
actually charges.

---

## The easiest way: the price editor page

```bash
npm run dev
```

Then open **http://localhost:3001/__pricing** in your browser.

You get a simple form with every price on the site, grouped by market:

- **India — Coding** (group / Mini Batch / 1-on-1, in rupees per month)
- **India — Maths** (same three, maths 1-on-1 is the one price that differs)
- **India — Premium Codex/Claude courses** (currently same as coding)
- **India — Other** (school bootcamps, holiday camp)
- **Outside India** (the flat US-dollar prices every non-Indian visitor pays)

Change the numbers, press **Save & update every page**, and it does the whole
job: rewrites the config file, updates every page, and then double-checks
that what every page shows matches what it tells Google. You will see the
full report on screen. If anything is wrong it says so in plain English and
puts the old prices back — nothing half-changes.

When it says **✓ Done**, the changes exist only on your computer. To make
them live:

```bash
git add -A
git commit -m "Raise group coding to Rs1,799"
git push
```

Netlify rebuilds and the new prices are live everywhere within a few minutes.
Visitors' browsers pick them up immediately — the pages carry a version stamp
that changes whenever a price changes, so nobody is ever shown a stale price
from their cache.

**The editor only exists on your computer.** It is part of the local dev
server, which never runs on the live site, so nobody on the internet can
open it or change your prices.

---

## By hand (if you prefer editing the file)

```bash
# 1. Open pricing/pricing.config.jsonc and change a number.

npm run pricing:check      # is my file valid? shows the resulting prices
npm run pricing:preview    # exactly what would change, changes nothing
npm run pricing:apply      # write it into every page
npm run pricing:verify     # prove nothing broke
npm run pricing:test       # 50 checks, including prices rendered in a real browser

git add -A
git commit -m "Raise group coding to Rs1,799"
git push
```

If `check` or `verify` complains, **stop and read what it says.** They are
written to tell you what is wrong in plain English, not to be clicked past.

Rules for editing the file directly:

- Plain digits only: `4999`, never `4,999` or `"4999"` or `₹4999`.
- `null` means "we do not sell this" — the plan is hidden on pages and
  Razorpay refuses to charge for it. It is never given a made-up price.
- Change **values** only. The structure (which rows exist) is rewritten by
  the editor page from `scripts/pricing/config-template.js`, so structural
  hand-edits get overwritten on the next editor save.

---

## The pricing model (deliberately simple)

Owner's decision, 2026-08-01: **flat pricing.**

| Who | Group | Mini Batch | 1-on-1 |
| --- | --- | --- | --- |
| India — coding | ₹1,499/mo | ₹2,999/mo | ₹4,999/mo |
| India — maths | ₹1,499/mo | ₹2,999/mo | ₹4,999/mo |
| Everywhere else — every course | **$100/mo** | not sold | **$150/mo** |

- One US-dollar price list for the entire world outside India. No
  per-country prices, no currency conversion, no purchasing-power
  adjustment. A visitor in Dublin, Karachi, Muscat, New York and London
  all see the same $100 / $150 and pay in dollars.
- Mini Batch is an India-only plan. Outside India the card simply does not
  appear.
- Maths follows the coding prices on every tier; the old ₹8,500 maths
  1-on-1 exception ended 2026-08-10. India 1-on-1 runs 1 class a week
  (4 a month) — see display.classesPerMonthOverrides in the config.
- The AI-agents courses (Codex + Claude Code, Copilot Studio) currently
  cost the same as every other course, but keep their own rows in the config — put bigger numbers
  there and premium pricing is back on without touching anything else.
- School bootcamps and holiday camps have their own one-off rows.

How a visitor's market is decided: the browser looks at the visitor's
language/region settings and timezone. Indian settings → rupees; anything
else → dollars. When nothing can be detected it assumes India (the home
market). You can preview either view on any page by adding `?test=india` or
`?test=intl` to the address.

If the pricing data somehow fails to load for an international visitor, the
payment button refuses to charge rather than guessing — a failed lookup can
never bill the rupee amount in dollars or vice versa.

---

## What updates automatically when you save

1. **Visible prices** on every page — every price figure is tagged with a
   `data-price` anchor, so the pipeline finds and rewrites all of them.
2. **Google's structured data** (the JSON-LD schema blocks) — offers are
   restamped from the config; the verifier then re-reads every page and
   fails loudly if a shown price and a schema price ever disagree.
3. **AI-engine feeds** — `llms.txt` and the `.md` twins of pages are
   regenerated with the new figures.
4. **Razorpay** — the checkout reads the same generated data file, so the
   charge always matches the page. India pays in INR, everyone else in USD.
5. **Course pages** — regenerated course HTML picks prices up from the same
   config (`courseOverrides` maps a course slug to a different price row).
6. **Caches** — the generated pricing script gets a new content-hash
   version stamp, so browsers and the service worker fetch the new prices
   immediately.

Future pages are covered too: `pricing:apply` injects the two pricing
scripts into any page that shows a price and `pricing:verify` fails any
page that is missing them, so a page added next year cannot silently show
the wrong region's prices.

---

## The safety nets

- **`pricing:check`** — validates the config before anything is written:
  digits only, no missing required prices, every `courseOverrides` slug
  matches a real course.
- **`pricing:preview`** — shows the exact replacements `apply` would make,
  and changes nothing.
- **`pricing:verify`** — re-reads every page after `apply` and confirms:
  every shown price matches the config, every schema price matches its
  shown price, no **retired figure** (old prices like $40, $149.99,
  ₹2,499, ₹4,999, ₹9,999) survives anywhere Google or a visitor can see
  it, and every price-bearing page carries the two pricing scripts.
- **`pricing:test`** — 51 automated checks: 26 on the stamping logic, 16
  that render real pages in a headless browser and read the visible text
  back (India view, international view, hidden Mini Batch, the per-plan
  schedule overrides and India overlays, the refuse-to-charge path), and 9 on phone-number
  handling.
- **Netlify runs `apply` + `verify` on every deploy** — a deploy with a
  price mismatch fails instead of going live.
- The editor page runs `check → apply → verify` for you on every save and
  rolls the config back if `check` rejects it.

---

## Files in this folder

| File | What it is |
| --- | --- |
| `pricing.config.jsonc` | **The prices.** The only file you edit. |
| `README.md` | This guide. |

The machinery lives in `scripts/pricing/`:

| File | Job |
| --- | --- |
| `editor.js` | The `/__pricing` editor page (local dev server only). |
| `config-template.js` | Renders the config file; keeps its comments intact. |
| `check.js` | Validates the config, prints the resulting price table. |
| `apply.js` | Writes prices into pages, schema, feeds; injects scripts. |
| `verify.js` | Proves every page matches the config. |
| `test-stamp.js` / `test-rendered.js` / `test-phone.js` | The 50 tests. |
| `lib/config.js` / `lib/stamp.js` | Shared price resolution and schema stamping. |
| `tag.js`, `sweep-india.js`, `sweep-retired.js` | One-off migration tools already run; kept for history. |

Browser-side: `src/js/pricing-data.generated.js` (the prices, generated —
never edit) and `src/js/international-pricing.js` (detects India vs not,
fills the anchors, hides unsold plans).

---

## Things that will bite you if you forget

- **Changing a price to a brand-new number needs one backend step too.**
  The payment server only accepts a fixed list of amounts (a safety net so
  nobody can tamper with the checkout and pay ₹1). The list lives in the
  backend repo — `routes/payment.js` and `server.js`, constants
  `VALID_INR_AMOUNTS` / `VALID_USD_AMOUNTS` — and must contain every price
  you sell. If you save a price the list doesn't know, the site will SHOW
  the new price but every payment at it is rejected as "Invalid amount"
  until the backend list is updated and redeployed. (Reverting to a price
  already in the list needs nothing.)
- **Never hand-type a price into a page.** Untagged figures are exactly
  what this system exists to eliminate. If a new page needs a price, give
  it a `data-price="subject.region.tier"` anchor and let the pipeline fill
  it in — copy an existing one from `src/pages/pricing.html`.
- **Prose sentences** ("costs less than a pizza a month") are not touched
  automatically. `TAGGING-REVIEW.md` lists the ones found during
  migration; review them when the wording matters.
- **Generated course pages** (`content/courses/generated/`) are rebuilt on
  deploy — editing them is useless; prices flow from the config and
  `content/courses/data/*.json`.
- The `updated` date in the config changes on every editor save. That is
  what re-stamps the cache version — it is supposed to change; do not
  "tidy" it back.
