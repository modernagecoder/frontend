# Tier 1 Conversion Pages — Design Spec

**Date:** 2026-07-05
**Source plan:** `marketing/50-HIGH-IMPACT-PAGES.md` — Tier 1, items 1–8
**Goal:** Optimize the surfaces all ~100 daily leads pass through, and open the international USD path. New pages: /thank-you, /guarantee, /team. Rebuilds: /pricing, /success-stories, /book-demo, homepage intl variant. Fix: intl USD checkout.

## Decisions locked with user (2026-07-05)

1. **Guarantee policy:** free demo + cancel anytime. NO money-back or refund claims anywhere — the business does not offer one. Risk reversal = free demo class before payment, monthly billing, no lock-in, no registration fee.
2. **Demo booking:** custom timezone-aware slot-picker feeding the EXISTING backend (`/api/contact/submit`, slot text rides in the `message` field). No external booking tool, no backend changes.
3. **Team facts:** draft founder bio from repo (`company-profile.md` + site content) with `[NEEDS-FACT]` placeholders for education, credentials, photo, LinkedIn. User corrects on review.
4. **Success stories:** only verifiable existing assets — Student Labs projects (real screenshots), Wall of Love videos (/love), already-published named testimonials. Each story cites its source.
5. **Build style:** sequential, small-first, each item browser-verified before the next.
6. **Homepage intl:** client-side content swap (extend existing detection). No geo-IP edge serving, no separate page.
7. **Brand theme (user emphasis, corrected 2026-07-05):** every page must match the LIVE homepage vibe. The live homepage on `main` is the editorial **"Ledger & Proof"** design (`index-redesign.css`): warm paper `#FBF8F2`, ink `#1C1814`, amber `#B45309`/`#D97706`, Fraunces display / Inter body / JetBrains Mono. book-demo, pricing, and success-stories already share `src/css/editorial-theme.css` (`body.editorial` + one page-specific stylesheet each). New pages (/thank-you, /guarantee, /team) follow that exact pattern: `editorial-theme.css` + one new page CSS file + `body class="editorial"` + the inlined nav/footer marker convention.

## Hard constraints

- **No fabricated numbers or claims.** Only already-published facts. Rating usage follows the current site-wide convention (commit `4dd0dfac`): `AggregateRating 4.9 / reviewCount 547` sourced from real Google reviews is permitted in schema and visible text; never invent any other rating/count values.
- **No refund/money-back language** (per decision 1).
- Intl visitors never see INR (`international-pricing.js` handles swap; new price mentions must use its detectable markup patterns or `data-india-only`).
- Every new indexable page: entries in BOTH `_redirects` and `netlify.toml`, `sitemap.xml`, and a `.md` twin. Redirect rules tested locally before push (prod outage 2026-04-30 rule).
- Nav/footer: edit `components/nav.html` / `components/footer.html` only; new pages follow the existing static-page inclusion convention (match whatever pattern `book-demo.html` uses).
- Copy voice: no em/en dashes, no emojis in page copy, no AI-marketing words (unlock/elevate/game-changer), age span written "6 to 67".
- Don't commit re-inlined `src/pages` nav cruft; `content/**/generated/**` never hand-edited.

## Item 1 — `/thank-you` (NEW, noindex)

**Purpose:** post-lead confirmation destination for ALL lead forms; first real conversion-tracking URL for ads.

- File `src/pages/thank-you.html`, route `/thank-you` in `_redirects` + `netlify.toml`. `<meta name="robots" content="noindex">`. NOT in sitemap, no `.md` twin.
- Accepts `?src=<form-id>` (home-form | callback | book-demo | contact) for analytics; page works with no param.
- Sections: confirmation headline; "What happens next" 3-step timeline (team reaches out within 24 hours on the number provided → schedule your free demo → attend, no payment needed); WhatsApp CTA (`wa.me/919123366161`, prefilled "Hi, I just submitted a request on the website"); demo-prep tips (laptop/desktop preferred, stable internet, student present); proof strip linking /love and /student-labs; explore links (/courses, /how-we-teach, /pricing).
- **Form wiring (4 forms redirect here on success):**
  - Homepage try-coding form (`src/pages/index.html` ~line 3781 success handler) → `/thank-you?src=home-form`
  - Callback modal (`src/js/callback-modal.js`) → `/thank-you?src=callback`
  - Book-demo form (`src/pages/book-demo.html` submit handler) → `/thank-you?src=book-demo`
  - Contact page form (`src/pages/contact.html`) → `/thank-you?src=contact`
  - Redirect only AFTER the API call succeeds; on API failure keep current inline error behavior.

## Item 2 — `/guarantee` (NEW)

**Purpose:** honest risk-reversal page killing the price-hesitation objection.

- File `src/pages/guarantee.html`, full routing + sitemap + `.md` twin. Indexable.
- Positioning: "Start with zero risk." Promises (all true today): free demo class before any payment; monthly billing, cancel any month, no lock-in; no registration or signup fee; small live batches (4–8); you keep every project you build; direct WhatsApp access to the team.
- Sections: hero promise; "How the risk-free start works" 3 steps; promise cards; FAQ (6–8 Q&A) with `FAQPage` schema; CTA to /book-demo.
- Linked FROM: /pricing risk-reversal strip, /book-demo, /thank-you.

## Item 3 — `/team` (NEW)

**Purpose:** E-E-A-T — named humans behind the brand.

- File `src/pages/team.html`, route `/team` (+ alias `/instructors` 301 → `/team`), full routing + sitemap + `.md` twin.
- Founder section: Shivam Khemka ("Shivam Sir"), bio drafted from `company-profile.md` and site voice; `[NEEDS-FACT]` placeholders for education, credentials, years teaching, photo, LinkedIn URL. Placeholders must be visually obvious in review but the page must still read complete if user removes them (write around them).
- Teaching team section: the mentor model described honestly (live small batches, project-first, maths-first rigor) + 3 instructor card slots marked `[NEEDS-FACT]` (name, subject, bio, photo) hidden behind an HTML comment until facts arrive — page ships founder-first.
- Schema: `Person` for founder; add `founder` reference to the site `Organization` schema on this page; `sameAs` LinkedIn once provided.
- Add "Our Team" link to footer (and nav About area if one exists) via `components/`.

## Item 4 — Intl USD checkout (VERIFY + FIX)

**Bug found during design:** maths course pages display $100 group / $150 personal (`international-pricing.js` `internationalMaths`) but `course-payment.js` `showPaymentModal`/`processPayment` hardcode flat coding prices ($40/$100) — intl maths buyers would be undercharged and data mismatched.

- Fix: `course-payment.js` reads intl prices from `window.InternationalPricing.PRICES` (single source of truth), maths-aware via `InternationalPricing.isMathsContext()`. Fallback constants kept only if `InternationalPricing` absent.
- Fix `enrollment-modal.js` line ~64: plan-appropriate price text instead of generic "$40 USD/month" (and maths-aware).
- Verify end-to-end locally with `?test=intl`: course page (one coding + one maths) → Enroll → Pay Online → modal shows correct USD → `create-order` request body carries correct `amount` + `currency: USD`. Create ONE test order against the production backend to confirm Razorpay accepts USD order creation; do NOT complete payment. If order creation fails for USD, flag to user (Razorpay international enablement is account-side).

## Item 5 — `/success-stories` (REBUILD)

- Rebuild body of `src/pages/success-stories.html` (route + `.md` twin exist; update twin content).
- 8–10 case-study cards, each from a verifiable source: Student Labs exhibits (14 real projects w/ real screenshots), Wall of Love videos, named testimonials already published on site/GMB. Card = student first name (as already published) + course/track + what they actually built or said + real screenshot/quote + "source" link (/love video or /student-labs exhibit).
- No `Review`/`AggregateRating` schema this pass (consent not established). Visible sourcing instead.
- CTA: /book-demo + /love.
- Homepage-brand theme (replace any off-brand styling in current page body).

## Item 6 — `/pricing` (REBUILD as value-justification)

Keep: 3 tabs (Coding/Maths/Custom), tier cards, prices, intl auto-swap, existing FAQ. Surgical additions:

1. **Per-class value strip** (below tier cards, per tab): "₹1,499/month at 8 live classes = about ₹187 per live class" — class-count facts pulled from existing published copy (maths intl = 8/mo confirmed; coding counts verified from course pages during implementation; if unverifiable, omit that tab's strip rather than guess). Auto-swaps to USD math for intl (e.g. "$100/mo ≈ $12.50 per live class").
2. **Comparison table** ("What families pay elsewhere"): intl view — Mathnasium $200–425/mo, Kumon ~$150–220/subject/mo, Juni ~$250/mo, Cuemath US ~$249/mo; numbers RE-VERIFIED by web search during implementation and labelled "typical published prices, as of July 2026". India view — qualitative comparison only (live vs recorded, batch size, projects, no unverifiable INR competitor numbers). Implemented as two blocks toggled by the existing region mechanism (`data-india-only` / intl-only pattern).
3. **Risk-reversal strip** linking `/guarantee`: free demo, monthly no lock-in, no registration fee.
4. `pricing.html.backup` stays untouched (out of scope).

## Item 7 — `/book-demo` (IMPROVE)

- **Slot-picker** added above the existing form fields: next 7 days as day chips × time slots generated from an IST availability window — constant `DEMO_HOURS_IST = { start: 10, end: 20 }` `[NEEDS-FACT: confirm window]` — converted to the visitor's timezone via `Intl.DateTimeFormat` (shows both: "7:00 PM IST · 9:30 AM EDT"). Selection is optional (a "flexible / contact me" default). Chosen slot appended to the `message` value: `Preferred demo slot: Tue 8 Jul, 19:00 IST (09:30 EDT)`.
- Content: sharpen "What You'll Get" into a 40-minute demo agenda; add teacher-preview block linking /how-we-teach ("watch real recorded lessons"); no-payment reassurance + /guarantee link.
- On success → redirect `/thank-you?src=book-demo`.
- Update `book-demo.md` twin.

## Item 8 — Homepage intl variant (IMPROVE)

Mechanism: intl-only content lives in the static HTML (hidden by default, `.intl-only` + `[data-india-only]` counterpart), toggled by the existing detection (`window.__MAC_IS_INDIAN`). India visitors + crawlers see today's page unchanged (default = India). No cloaking risk.

- Hero subline swap for intl: live online classes from anywhere, timezone-friendly scheduling, USD pricing.
- Trust strip: same real numbers, intl framing (e.g. "students across N countries" ONLY if N is already published — else keep existing stats).
- One new "Families abroad choose us" strip after the hero area: price teaser (live 1-on-1 and small-group from $40–150/month vs $200+ at US tutoring centers), IST/timezone reassurance, link /pricing + /book-demo.
- JS: extend `international-pricing.js` `updateHomePage()` or a small dedicated function — reuse the existing init path, no new script file unless needed.

## Build order

/thank-you → /guarantee → /team → checkout fix → /success-stories → /pricing → /book-demo → homepage intl. Each verified before the next.

## Verification (every item)

1. Local dev server + real-browser pass (desktop 1440 + mobile 390 widths), zero console errors.
2. Intl checks with `?test=intl` and `?test=india` on every page showing prices or intl content — no ₹ visible in intl mode, no $ artifacts in India mode.
3. Forms: submit once each with obviously-test data (name "TEST PLEASE IGNORE") against the real backend; confirm redirect to /thank-you with correct `?src`.
4. Routing: `_redirects`/`netlify.toml` parity for every new route; rules tested locally before push.
5. Schema: FAQPage (/guarantee) and Person (/team) pass Google Rich Results Test; confirm NO AggregateRating anywhere new.
6. Nav/footer: components edited only in `components/`; verify via `build:inline` preview then revert re-inlined pages.
7. `.md` twins updated for /guarantee, /team, /pricing, /book-demo, /success-stories.

## Out of scope (explicit)

- Tier 2–5 of the 50-pages plan; competitor comparison PAGES (Tier 2); any India city/locality pages; review schema re-add; backend changes; Razorpay account configuration (flag only); homepage redesign branch (`redesign/homepage-editorial`) untouched — all work targets `main`'s live homepage.
