# Tier 1 Conversion Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build/optimize the 8 Tier 1 conversion surfaces from `docs/superpowers/specs/2026-07-05-tier1-conversion-pages-design.md`: new /thank-you, /guarantee, /team; intl USD checkout fix; rebuilt /success-stories; value-justified /pricing; slot-picker /book-demo; geo-aware homepage intl variant.

**Architecture:** Plain static HTML pages in `src/pages/` on the shared editorial "Ledger & Proof" theme (`src/css/editorial-theme.css` + one small page CSS each + `body class="editorial"`), nav/footer baked with `BEGIN_INLINED_NAV/FOOTER` markers (refreshed by `npm run build:inline` on deploy). Region behavior via existing `src/js/international-pricing.js` (`window.__MAC_IS_INDIAN`), extended with a `data-intl-only` unhide mechanism. Leads keep POSTing to the existing Vercel backend; no backend changes.

**Tech Stack:** Vanilla HTML/CSS/JS, Netlify routing (`_redirects` + `netlify.toml`), JSON-LD schema, dev server `npm run dev` → http://localhost:3001.

## Global Constraints

- Brand: editorial theme only — paper `#FBF8F2`, ink `#1C1814`, amber `#B45309`/`#D97706`, green `#1F8A55`, Fraunces display / Inter body / JetBrains Mono (all from `editorial-theme.css`; add `class="editorial"` to `<body>`).
- Copy: no em/en dashes, no emojis, no words unlock/elevate/dive in/game-changer; age span "6 to 67" if written out.
- Facts: only already-published claims. Real rating `4.9` / `547` (GMB) allowed in text and in the site's existing AggregateRating pattern; published tier facts: 2 classes/week (8/month) all tiers; Group ₹1,499 (max 10 students), Mini Batch ₹2,499 (3-4 students, India-only), 1-on-1 ₹4,999; intl coding $40/$100, intl maths $100/$150; "None. Cancel anytime", "No hidden fees", "15+ countries", "since 2020", "500+ projects", "350+ student builders" are published. NO money-back/refund language anywhere.
- Intl visitors never see ₹: India-only content marked `data-india-only="true"`; intl-only content marked `data-intl-only="true" hidden`.
- Every new indexable page: route in BOTH `_redirects` and `netlify.toml` + `sitemap.xml` + `.md` twin (+ `.md` route in both files). /thank-you is noindex: routes only, no sitemap/twin.
- New pages carry: gtag head block (`G-N8BM164YJP`, `AW-16910316353`), meta-pixel.js, canonical, `<link rel="alternate" type="text/markdown">` (indexable pages), OG/Twitter meta, favicon links — copy head pattern from `src/pages/book-demo.html` lines 1-170.
- Nav block = copy `src/pages/book-demo.html` lines 197-411 verbatim (includes `BEGIN_INLINED_NAV` markers); footer block = lines 1151-1383 verbatim (includes `BEGIN_INLINED_FOOTER` markers). build:inline refreshes marker contents on deploy.
- Commit after each task; never push (user pushes).
- Phone/WhatsApp: +91 91233 66161 → `https://wa.me/919123366161`.

---

### Task 1: `data-intl-only` mechanism in international-pricing.js

**Files:**
- Modify: `src/js/international-pricing.js:134-147` (updateAllPages)

**Interfaces:**
- Produces: any element with `data-intl-only="true" hidden` becomes visible for intl visitors; `data-india-only="true"` elements hidden for intl (existing). India visitors: no JS action (HTML defaults = India view). Used by Tasks 7, 8, 9.

- [ ] **Step 1: Add showIntlOnlySections and call it first in updateAllPages**

In `updateAllPages()` (line 134), add `this.showIntlOnlySections();` as the FIRST line, and add the method after `hideIndiaOnlyCards` (line 154):

```js
  // Reveal intl-only blocks (hidden by default in markup so India/crawlers see India view).
  showIntlOnlySections() {
    document.querySelectorAll('[data-intl-only="true"]').forEach(function(el) {
      el.hidden = false;
      el.style.removeProperty('display');
    });
  },
```

- [ ] **Step 2: Verify with a scratch check**

Run: `node -e "const s=require('fs').readFileSync('src/js/international-pricing.js','utf8'); console.log(s.includes('showIntlOnlySections')&&s.match(/updateAllPages\(\)\s*\{\s*this\.showIntlOnlySections/s)?'OK':'MISSING')"`
Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add src/js/international-pricing.js
git commit -m "Add data-intl-only reveal mechanism for international visitors"
```

---

### Task 2: `/thank-you` page (noindex) + routes

**Files:**
- Create: `src/pages/thank-you.html`, `src/css/thank-you.css`
- Modify: `_redirects` (after line 678 /welcome block), `netlify.toml` (after the /welcome block ~line 2560)

**Interfaces:**
- Produces: `/thank-you` URL accepting `?src=home-form|callback|book-demo|contact`. Task 3 redirects forms here.

- [ ] **Step 1: Create the page**

Shell: book-demo head pattern (gtag, meta-pixel, favicons); `<meta name="robots" content="noindex, nofollow">`; NO md alternate; `<body class="editorial">`; nav block (book-demo 197-411); footer block (book-demo 1151-1383); CSS links `editorial-theme.css?v=20260626g` + `/css/thank-you.css?v=20260705`.

Body content (all sections inside `<main class="ty-main">`):

1. Hero: eyebrow `Request received` · H1 `You are in. Here is what happens next.` · sub `Your details just reached our team. A real person, not a bot, will contact you within 24 hours.`
2. `.ty-steps` 3 numbered cards:
   - `1 · We call or WhatsApp you` / `Within 24 hours on the number you shared. We listen first: goals, level, schedule.`
   - `2 · We schedule your free demo` / `A live class with a real teacher, at a time that works for your family and your timezone.`
   - `3 · You attend, then decide` / `See exactly how we teach before any payment. No card details, no obligation.`
3. WhatsApp CTA card: `Want to move faster?` + button `Message us on WhatsApp` → `https://wa.me/919123366161?text=Hi!%20I%20just%20submitted%20a%20request%20on%20the%20website.` + line `Or call +91 91233 66161`
4. `.ty-prep` "Get demo-ready in 2 minutes": laptop or desktop with Chrome; stable internet; the student present; questions welcome.
5. `.ty-proof` "While you wait, see the proof": 3 link cards → `/love` (Wall of Love: video reviews from real families), `/student-labs` (Student Labs: 21 live projects built by students), `/how-we-teach` (Watch how a real class runs).
6. Small explore row: links `/courses`, `/pricing`.

`src` param: tiny inline script reads `new URLSearchParams(location.search).get('src')` and fires `gtag('event','lead_thank_you',{form_source:src||'direct'})` when gtag exists.

`thank-you.css`: `.ty-` prefixed, editorial tokens only (var(--paper), var(--ink), var(--amber)...), max-width var(--container), responsive grid for steps/proof cards at 900px/600px breakpoints.

- [ ] **Step 2: Add routes**

`_redirects` (after /welcome line 678):
```
# Post-lead thank-you page (noindex funnel page)
/thank-you /src/pages/thank-you.html 200
```
`netlify.toml` (after /welcome block):
```toml
# Post-lead thank-you page (noindex funnel page)
[[redirects]]
  from = "/thank-you"
  to = "/src/pages/thank-you.html"
  status = 200
```

- [ ] **Step 3: Verify in browser**

Run `npm run dev` (background). Open `http://localhost:3001/thank-you?src=home-form` via Playwright at 1440px and 390px. Expected: editorial paper theme, nav+footer render, all 6 sections present, zero console errors, robots meta = noindex.

- [ ] **Step 4: Commit**

```bash
git add src/pages/thank-you.html src/css/thank-you.css _redirects netlify.toml
git commit -m "Add /thank-you post-lead page with next steps and proof links"
```

---

### Task 3: Redirect all 4 lead forms to /thank-you

**Files:**
- Modify: `src/pages/index.html:3781-3782`, `src/pages/book-demo.html:1107-1108`, `src/pages/contact.html:1166-1167`, `src/js/callback-modal.js:77-84`, `src/js/mainbundle.js` (~1442-1465, duplicate callback handler)

**Interfaces:**
- Consumes: `/thank-you` from Task 2. Redirect ONLY after successful API response; error paths unchanged.

- [ ] **Step 1: index.html** — replace lines 3781-3782:

```js
                            // Success: hand off to the thank-you page
                            window.location.href = '/thank-you?src=home-form';
                            return;
```
(fbq Lead at 3773-3778 stays before it.)

- [ ] **Step 2: book-demo.html** — replace lines 1107-1108 with `window.location.href = '/thank-you?src=book-demo'; return;` (fbq stays).

- [ ] **Step 3: contact.html** — replace lines 1166-1167 with `window.location.href = '/thank-you?src=contact'; return;` (fbq stays).

- [ ] **Step 4: callback-modal.js lines 82-84** — inside `if (data.success)`, replace form-toggle + setTimeout with:

```js
            window.location.href = '/thank-you?src=callback';
            return;
```
(keep fbq Contact). Apply the IDENTICAL change to the duplicate handler in `src/js/mainbundle.js` (search `api/callback/request`, ~line 1444, same success block).

- [ ] **Step 5: Verify**

With dev server + Playwright: submit homepage form (name `TEST PLEASE IGNORE`, email test@example.com, real-format phone) → expect navigation to `/thank-you?src=home-form`. Submit callback modal → `/thank-you?src=callback`. Repeat on /book-demo and /contact. All against production backend (leads are labelled TEST).

- [ ] **Step 6: Commit**

```bash
git add src/pages/index.html src/pages/book-demo.html src/pages/contact.html src/js/callback-modal.js src/js/mainbundle.js
git commit -m "Redirect all lead forms to /thank-you on success"
```

---

### Task 4: `/guarantee` page + full routing

**Files:**
- Create: `src/pages/guarantee.html`, `src/css/guarantee.css`, `src/pages/guarantee.md`
- Modify: `_redirects`, `netlify.toml`, `sitemap.xml`

**Interfaces:**
- Produces: `/guarantee` URL. Linked from Tasks 7 (/pricing) and 8 (/book-demo) and already from /thank-you? No — /thank-you does not link it; pricing + book-demo do.

- [ ] **Step 1: Create page**

Shell: full indexable head (canonical `https://learn.modernagecoders.com/guarantee`, md alternate `/src/pages/guarantee.md`, OG/Twitter), `body class="editorial"`, nav/footer blocks, CSS `editorial-theme.css` + `/css/guarantee.css?v=20260705`, `.gr-` class prefix.

Content:
1. Hero: eyebrow `Our promise` · H1 `Start with zero risk.` · sub `No lock-in. No registration fee. No payment until you have seen a real class with a real teacher.`
2. `.gr-steps` "How the risk-free start works": `1 · Book a free demo` (pick a time, costs nothing, no card details) · `2 · Attend a real live class` (meet the actual teacher, real lesson, ask anything) · `3 · Decide on your terms` (join monthly if it fits; walk away if it does not, no obligation).
3. `.gr-promises` 6 cards (each icon + title + 2 lines):
   - `A free demo before any payment` — every student starts with a live demo class; you judge us first.
   - `Monthly billing, cancel anytime` — no contracts, no 6 or 12 month packs; stop any month, no cancellation fee.
   - `No registration or hidden fees` — the price on /pricing is the whole price.
   - `Small live batches` — group classes capped at 10 students; mini batches of 3 to 4; full 1-on-1 available.
   - `You keep everything you build` — projects, code, certificates stay yours.
   - `A real human on WhatsApp` — direct line +91 91233 66161, not a ticket queue.
4. FAQ (7 items, `.gr-faq`, button+panel accordion like pricing's `.faq-item` pattern) with matching FAQPage JSON-LD:
   - Is the demo class really free? → Yes. It is a full live class with a real teacher, and there is no charge and no card required.
   - Do I need to enter card details to try a class? → No. Payment happens only after you decide to join, and only month by month.
   - Are there any long-term contracts? → No. Every plan is monthly. You can stop any month without a cancellation fee.
   - Is there a registration or admission fee? → No. You pay only the monthly fee listed on our pricing page.
   - What if my child does not enjoy the classes? → Talk to us. We can change the teacher, pace, or track. Because billing is monthly, you are never locked in beyond the month you paid for.
   - Will the price change after I join? → Pricing is transparent and published on the pricing page. Any future change never applies mid-month to a class you already paid for.
   - Do international students get the same promise? → Yes. Free demo, monthly billing, and no lock-in apply worldwide, with USD pricing shown automatically.
5. CTA band: `Try a class before you decide anything.` button `Book your free demo` → `/book-demo`, secondary link `See transparent pricing` → `/pricing`.

Schema: FAQPage JSON-LD mirroring the 7 Q&A + BreadcrumbList (Home → Guarantee).

- [ ] **Step 2: Create `guarantee.md` twin** — frontmatter (title/description/canonical/keywords/source like book-demo.md) + markdown of hero, steps, promises, FAQ.

- [ ] **Step 3: Routes + sitemap**

`_redirects`:
```
# Zero-risk promise page
/guarantee /src/pages/guarantee.html 200
/guarantee.md /src/pages/guarantee.md 200
```
`netlify.toml`: two matching `[[redirects]]` blocks (from/to/status 200).
`sitemap.xml` (near /pricing entry):
```xml
  <url>
    <loc>https://learn.modernagecoders.com/guarantee</loc>
    <lastmod>2026-07-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
```

- [ ] **Step 4: Verify** — browser 1440/390, zero console errors, accordion works, FAQ schema validates (paste JSON-LD into a JSON parser check: `node -e "JSON.parse(...)"` on the extracted block), `/guarantee.md` serves.

- [ ] **Step 5: Commit**

```bash
git add src/pages/guarantee.html src/pages/guarantee.md src/css/guarantee.css _redirects netlify.toml sitemap.xml
git commit -m "Add /guarantee zero-risk promise page with FAQPage schema"
```

---

### Task 5: `/team` page + full routing + footer link

**Files:**
- Create: `src/pages/team.html`, `src/css/team.css`, `src/pages/team.md`
- Modify: `_redirects`, `netlify.toml`, `sitemap.xml`, `components/footer.html` (add link)

**Interfaces:**
- Produces: `/team` URL (+ `/instructors` 301 alias). Footer link site-wide after next build:inline.

- [ ] **Step 1: Create page**

Shell as Task 4, `.tm-` prefix, canonical `/team`.

Content:
1. Hero: eyebrow `The people behind the screen` · H1 `Learn from mentors, not videos.` · sub `Every class at Modern Age Coders is taught live by a person who knows your child's name, pace, and goals.`
2. Founder section (`.tm-founder`): name `Shivam Khemka` `[NEEDS-FACT: confirm full-name spelling]`, known to families as `Shivam Sir`. Draft bio (write around missing facts): founded Modern Age Coders in 2020; teaches live classes every week; built the maths-first, project-first method the school runs on; families describe him and the mentor team as "not only teachers, but also mentors, life counselors and a friendly figure" (real Vineeta Bhatter quote, cite as Google review). Photo slot `[NEEDS-FACT: founder photo]` (ship with brand-styled initials avatar until provided). `[NEEDS-FACT: education/credentials line]` `[NEEDS-FACT: LinkedIn URL for sameAs]`.
3. Mentor cards (`.tm-mentors`): `Mihir Sir` and `Sonu Sir` (real first names published in the Vineeta Bhatter testimonial) with role `Senior Coding Mentor` `[NEEDS-FACT: full names, subjects, bios, photos]`; initials avatars.
4. `.tm-values` "How we teach" 4 cards: live only, small batches (max 10), projects from day one, maths and code taught together — each linking /how-we-teach.
5. Proof band: 4.9 rating · 547 reviews · 15+ countries · since 2020 (published numbers) + Vineeta Bhatter quote card.
6. CTA: `Meet us in a free demo class` → /book-demo.

Schema: `Person` (Shivam Khemka, jobTitle Founder, worksFor Organization Modern Age Coders) + BreadcrumbList. Omit sameAs until URL provided.

- [ ] **Step 2: `team.md` twin** (same pattern as Task 4).

- [ ] **Step 3: Routes + sitemap + footer link**

`_redirects`:
```
# Team / founder page
/team /src/pages/team.html 200
/team.md /src/pages/team.md 200
/instructors /team 301!
```
`netlify.toml`: three matching blocks (the alias with `status = 301, force = true`).
`sitemap.xml`: /team entry (priority 0.7, monthly, lastmod 2026-07-05).
`components/footer.html`: add `<li><a href="/team">Our Team</a></li>` in the Quick Links list (locate `Success Stories` link, add after it).

- [ ] **Step 4: Verify** — browser both widths; `[NEEDS-FACT]` markers visible in page for user review (styled as subtle amber-dashed outline chips via team.css so the user spots them, e.g. `.tm-needs-fact`); Person schema JSON parses; `/instructors` 301 works on dev server (or verify rule syntax matches existing 301! rules).

- [ ] **Step 5: Commit**

```bash
git add src/pages/team.html src/pages/team.md src/css/team.css _redirects netlify.toml sitemap.xml components/footer.html
git commit -m "Add /team founder and mentors page with Person schema"
```

---

### Task 6: Intl USD checkout fix (maths price bug) + end-to-end verify

**Files:**
- Modify: `src/js/course-payment.js:258-280` (showPaymentModal) and `:392-399` (processPayment), `src/js/enrollment-modal.js:62-65`

**Interfaces:**
- Consumes: `window.InternationalPricing.PRICES` + `.isMathsContext()` (existing).
- Produces: correct USD amounts for maths courses ($100 group / $150 personal) in modal display AND charged amount.

- [ ] **Step 1: Single price source in course-payment.js**

Add helper near top of `CoursePayment`:

```js
  // Intl prices from the single source of truth (international-pricing.js),
  // maths-aware. Falls back to flat coding prices if that script is absent.
  getIntlPricing: function(planType) {
    var ip = window.InternationalPricing;
    var table = (ip && ip.isMathsContext && ip.isMathsContext() && ip.PRICES.internationalMaths)
      ? ip.PRICES.internationalMaths
      : (ip ? ip.PRICES.international : null);
    var fallback = {
      group:    { amount: 40,  display: '$40',  period: '/month' },
      personal: { amount: 100, display: '$100', period: '/month' },
      lifetime: { amount: 599, display: '$599', period: '' }
    };
    var p = (table && table[planType]) || fallback[planType];
    if (!p) return null;
    return { amount: p.amount, display: p.display + (p.period || '') };
  },
```

In `showPaymentModal` replace the hardcoded `intlPrices` map + `displayPricing` line with:

```js
    var intlP = this.getIntlPricing(planType);
    const displayPricing = isIndian ? pricing : (intlP || pricing);
```

In `processPayment` replace the hardcoded `intlPrices`/`intlDisplayPrices`/`finalAmount`/`buttonPriceText` block with:

```js
      const isIndian = window.__MAC_IS_INDIAN !== undefined ? window.__MAC_IS_INDIAN : (ccInfo.iso === 'IN');
      var intlP = this.getIntlPricing(planType);
      const finalAmount = isIndian ? amount : (intlP ? intlP.amount : amount);
      const currency = isIndian ? 'INR' : 'USD';
      const buttonPriceText = isIndian ? this.getPricing(planType).display : (intlP ? intlP.display : this.getPricing(planType).display);
```

- [ ] **Step 2: enrollment-modal.js plan-aware price text** — replace line 64:

```js
    var intlGroup = (window.CoursePayment && CoursePayment.getIntlPricing) ? CoursePayment.getIntlPricing('group') : null;
    const priceText = isIndian ? '' : ' (from ' + ((intlGroup && intlGroup.display) || '$40/month') + ' USD)';
```
(Null-guarded: enrollment-modal's code runs when the modal opens, after course-payment.js has parsed; the fallback covers any page where it has not.)
(Keep it simple: message quotes the group-tier starting price, maths-aware via the shared helper.)

- [ ] **Step 3: Verify end-to-end**

Dev server + Playwright: open one coding course (`/courses/python-ai-kids?test=intl`) and one maths course page with `?test=intl` (find a generated maths course with `data-subject="maths"`; if none exists under /courses, verify maths pricing on `/pricing?test=intl` display instead and modal on the coding course). In enroll → Pay Online modal: coding shows $40/$100, maths context shows $100/$150. Intercept the `create-order` request (Playwright network) and assert body `currency: "USD"` and correct amount. Then send ONE real create-order POST to `https://backend-modernagecoders.vercel.app/api/payment/create-order` with USD + test name `TEST PLEASE IGNORE` and record whether Razorpay accepts USD (success => order id returned). Do NOT proceed to payment. If USD rejected: report to user (account-side enablement needed).

- [ ] **Step 4: Commit**

```bash
git add src/js/course-payment.js src/js/enrollment-modal.js
git commit -m "Fix intl checkout: maths-aware USD prices from single source"
```

---

### Task 7: `/pricing` value-justification additions

**Files:**
- Modify: `src/pages/pricing.html` (insertions at ~567/722 tab ends, after 824, before 948), `src/css/pricing-redesign.css` (append styles), `src/pages/pricing.md` (update)

**Interfaces:**
- Consumes: `data-intl-only` mechanism (Task 1), `/guarantee` (Task 4).

- [ ] **Step 1: Per-class value strips**

Inside `#tab-coding` after its last tier card (before line 567 close) insert `.pv-perclass` block:
- India variant `data-india-only="true"`: `Every plan is 2 live classes a week, 8 a month.` + chips: `Group ₹1,499 ≈ ₹187 per live class` · `Mini Batch ₹2,499 ≈ ₹312 per live class` · `1-on-1 ₹4,999 ≈ ₹625 per live class` + line `Live teaching, not recordings.`
- Intl variant `data-intl-only="true" hidden`: `Group $40 ≈ $5 per live class` · `1-on-1 $100 ≈ $12.50 per live class`.

Same inside `#tab-maths` (before 722): India chips identical ₹ math; intl chips `Group $100 ≈ $12.50 per live class` · `1-on-1 $150 ≈ $18.75 per live class`.

- [ ] **Step 2: Intl comparison table** (`data-intl-only="true" hidden`, insert after the legacy intl section end ~line 946, before comparison-section 948):

`.pv-intl-compare`: H2 `What families pay elsewhere` + table:

| | Modern Age Coders | Mathnasium | Kumon | Juni Learning | Cuemath (US) |
|---|---|---|---|---|---|
| Monthly price | $40 group · $100 to $150 1-on-1 | $300 to $450 | $150 to $220 per subject | from $275 (1-on-1) | $200 to $256 |
| Format | Live small group + 1-on-1 | In-center / hybrid | Worksheet-based | Live online | Live online |
| Coding + Maths | Both, integrated | Maths only | Maths and reading | Coding focus | Maths only |
| Contracts | None, monthly | Varies + enrollment fee | Registration fee | Monthly | Plans/packages |

Note under table: `Typical published US prices as of July 2026. Sources: tutors.com, brighterly.com, myelearningworld.com, cuemath.com. Verify current rates with each provider.`

- [ ] **Step 3: Risk-reversal strip** (region-neutral, insert directly after the tabs section close at 824): `.pv-risk` band: `Free demo before you pay · Monthly billing, cancel anytime · No registration fee` + link `Read our zero-risk promise` → `/guarantee`.

- [ ] **Step 4: Styles** — append `.pv-perclass/.pv-intl-compare/.pv-risk` styles to `pricing-redesign.css` (editorial tokens, table `overflow-x:auto` wrapper for mobile).

- [ ] **Step 5: Update `pricing.md`** — add per-class math, risk-reversal promises, and intl comparison summary to the twin.

- [ ] **Step 6: Verify** — `/pricing` (India default): strips show ₹ math, NO intl table visible, risk strip visible. `/pricing?test=intl`: $ math chips, intl table visible, zero ₹ anywhere on page (assert via page text scan), Mini Batch hidden. Both widths, zero console errors.

- [ ] **Step 7: Commit**

```bash
git add src/pages/pricing.html src/css/pricing-redesign.css src/pages/pricing.md
git commit -m "Pricing: per-class value math, intl comparison table, risk-reversal strip"
```

---

### Task 8: `/book-demo` slot-picker + trust content + redirect polish

**Files:**
- Modify: `src/pages/book-demo.html` (form area ~468-510, "What You'll Get" ~523, submit handler ~1080), `src/css/book-demo-redesign.css` (append), `src/pages/book-demo.md` (update)

**Interfaces:**
- Consumes: `/thank-you` (Task 2, redirect done in Task 3), `/guarantee` (Task 4), backend `message` field.
- Produces: `Preferred demo slot: <Day DD Mon>, HH:MM IST (HH:MM <local tz abbr>)` appended to message.

- [ ] **Step 1: Slot-picker markup** — inside the Schedule form section above the existing fields: `.bd-slots` block: label `Pick a preferred demo slot (optional)` + `#bd-day-row` (7 day chips) + `#bd-time-row` (time chips) + hidden `<input type="hidden" id="demo-slot" name="demo-slot">` + `.bd-slot-note` `Times shown in your local timezone alongside IST. Flexible? Leave unselected.`

- [ ] **Step 2: Slot-picker JS** (inline script before existing form handler):

```js
(function initSlotPicker() {
    var DEMO_HOURS_IST = { start: 10, end: 20 }; // [NEEDS-FACT] demo availability window, IST
    var IST_TZ = 'Asia/Kolkata';
    var dayRow = document.getElementById('bd-day-row');
    var timeRow = document.getElementById('bd-time-row');
    var slotInput = document.getElementById('demo-slot');
    if (!dayRow || !timeRow || !slotInput) return;

    var localTz = 'your timezone';
    try { localTz = Intl.DateTimeFormat().resolvedOptions().timeZone || localTz; } catch (e) {}

    function istDate(base, hour) {
        // Build a Date representing base date at `hour`:00 IST
        var y = base.getFullYear(), m = base.getMonth(), d = base.getDate();
        // IST = UTC+5:30 → hour IST = (hour - 5.5) UTC
        return new Date(Date.UTC(y, m, d, hour - 5, -30));
    }
    function fmt(dt, tz, opts) {
        return new Intl.DateTimeFormat('en-GB', Object.assign({ timeZone: tz }, opts)).format(dt);
    }

    var days = [];
    var now = new Date();
    for (var i = 1; i <= 7; i++) { // start tomorrow
        var d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
        days.push(d);
    }
    var selectedDay = null, selectedTime = null;

    function renderTimes() {
        timeRow.innerHTML = '';
        if (!selectedDay) { timeRow.hidden = true; return; }
        timeRow.hidden = false;
        for (var h = DEMO_HOURS_IST.start; h <= DEMO_HOURS_IST.end; h++) {
            (function (h) {
                var dt = istDate(selectedDay, h);
                var istLabel = fmt(dt, IST_TZ, { hour: '2-digit', minute: '2-digit', hour12: true });
                var localLabel = fmt(dt, undefined, { hour: '2-digit', minute: '2-digit', hour12: true });
                var btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'bd-chip bd-time-chip';
                btn.innerHTML = '<b>' + istLabel + ' IST</b><span>' + localLabel + ' local</span>';
                btn.addEventListener('click', function () {
                    selectedTime = { hour: h, ist: istLabel, local: localLabel };
                    timeRow.querySelectorAll('.bd-time-chip').forEach(function (c) { c.classList.remove('active'); });
                    btn.classList.add('active');
                    writeSlot();
                });
                timeRow.appendChild(btn);
            })(h);
        }
    }
    function writeSlot() {
        if (selectedDay && selectedTime) {
            var dayLabel = fmt(selectedDay, IST_TZ, { weekday: 'short', day: 'numeric', month: 'short' });
            slotInput.value = dayLabel + ', ' + selectedTime.ist + ' IST (' + selectedTime.local + ' ' + localTz + ')';
        } else { slotInput.value = ''; }
    }
    days.forEach(function (d) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'bd-chip bd-day-chip';
        btn.innerHTML = '<b>' + fmt(d, undefined, { weekday: 'short' }) + '</b><span>' + fmt(d, undefined, { day: 'numeric', month: 'short' }) + '</span>';
        btn.addEventListener('click', function () {
            selectedDay = d; selectedTime = null; slotInput.value = '';
            dayRow.querySelectorAll('.bd-day-chip').forEach(function (c) { c.classList.remove('active'); });
            btn.classList.add('active');
            renderTimes();
        });
        dayRow.appendChild(btn);
    });
})();
```

- [ ] **Step 3: Feed slot into message** — modify line ~1080:

```js
                message: '[Demo Request] ' + document.getElementById('message').value.trim()
                    + (document.getElementById('demo-slot').value ? ' | Preferred slot: ' + document.getElementById('demo-slot').value : '')
```

- [ ] **Step 4: Trust content** — sharpen "What You'll Get" (existing section 523) into a demo agenda list using ONLY claims already on the page; add `.bd-teacher-preview` card linking `/how-we-teach` (`Watch recordings of real classes before you book`) and a `.bd-zero-risk` line linking `/guarantee` (`No payment, no card, no obligation. Read our promise`). Add visible rating line `★ 4.9 · 547 Google reviews` (site-published numbers) near the form.

- [ ] **Step 5: Styles** — append `.bd-chip` (paper chip, amber active state), `.bd-slots`, `.bd-teacher-preview`, `.bd-zero-risk` to book-demo-redesign.css.

- [ ] **Step 6: Update book-demo.md** — mention slot picking + zero-risk promise.

- [ ] **Step 7: Verify** — browser: pick day → times render with dual timezone labels; hidden input fills; submit test lead → message contains `| Preferred slot:` (assert via network intercept) → redirects to /thank-you?src=book-demo. Mobile 390px chip wrap. Zero console errors.

- [ ] **Step 8: Commit**

```bash
git add src/pages/book-demo.html src/css/book-demo-redesign.css src/pages/book-demo.md
git commit -m "Book-demo: timezone-aware slot picker, teacher preview, zero-risk links"
```

---

### Task 9: Homepage international variant

**Files:**
- Modify: `src/pages/index.html` (subline 603-606, new strip between 697 and 700), `src/css/index-redesign.css` (append)

**Interfaces:**
- Consumes: `data-intl-only`/`data-india-only` mechanism (Task 1; international-pricing.js loads at index.html:4467).

- [ ] **Step 1: Hero subline swap** — wrap existing subline `<p>` (603-606) with `data-india-only="true"`, add sibling:

```html
                <p data-intl-only="true" hidden>
                    Live online coding and maths classes taught by real mentors, joined by families in
                    <span class="hero-emphasis">15+ countries</span>. Small batches, evening-friendly slots
                    in your timezone, and transparent USD pricing from $40 a month.
                </p>
```

- [ ] **Step 2: Intl strip** — insert between `</section>` (697) and USP section (700):

```html
        <!-- ====== INTERNATIONAL FAMILIES STRIP (intl visitors only) ====== -->
        <section class="section intl-families" data-intl-only="true" hidden>
```
Content: H2 `Why families abroad choose us` + 3 cards:
- `2 to 5x less than local centers` — `Live 1-on-1 from $100 to $150 a month. US tutoring centers typically run $200 to $450 a month.` link `Compare pricing` → /pricing
- `Your timezone, not ours` — `Live classes scheduled around your family's evenings. Students join from 15+ countries.`
- `Same teachers, same method` — `4.9 rated across 547 Google reviews. Coding and maths taught together, projects from day one.` link `Book a free demo` → /book-demo

- [ ] **Step 3: Styles** — append `.intl-families` styles to index-redesign.css matching adjacent sections (reuse existing card/section classes where possible).

- [ ] **Step 4: Verify** — `/` (default): page byte-identical behavior, no intl strip, subline unchanged, zero console errors. `/?test=intl`: subline swapped, strip visible, prices in hero area show $ (existing swap), NO ₹ anywhere (page text scan). `/?test=india`: India view. Both widths.

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.html src/css/index-redesign.css
git commit -m "Homepage: geo-aware international variant strip and hero subline"
```

---

### Task 10: `/success-stories` rebuild

**Files:**
- Modify: `src/pages/success-stories.html` (body 373-467 rebuild), `src/css/success-redesign.css` (extend), `src/pages/success-stories.md` (update)

**Interfaces:**
- Consumes: real assets only — testimonials (index.html 2260-2453), Student Labs projects (student-labs.html 451-680), 7 feedback videos (course-template 435-489), student quotes (student-labs 771/776).

- [ ] **Step 1: Rebuild body** — keep hero H1 (`Real students,` ...) + shell; replace the 8 flat quote cards with:

1. Stats band (published): `4.9 · 547 Google reviews` · `500+ projects built` · `350+ student builders` · `15+ countries`.
2. `.ss-case-grid` 10 case cards, each: student first name + context · course/track · the real quote (trimmed to ≤50 words) · outcome/build line · source label + link:
   - Somraj (Grade student, Kolkata family) — quote Ria Mukherjee (mother) — built the Image Slider Website (student-labs link) — source: Google review + Student Labs
   - Harshit — student quote from Student Labs — built Misti, an AI chatbot for maths and coding — source: Student Labs
   - Isha — student quote from Student Labs — built Moxo, an animated company landing page — source: Student Labs
   - Samridho (Grade 9) — his own quote (class topper line) — source: Google review
   - Dhairya — quote Sonam Oswal (mother) — source: Google review
   - Mivaan — quote Shradha Saraf (mother) — source: Google review
   - Ishan — quote Shewta Singh (mother), maths-transformation angle — source: Google review
   - Aditya — quote Ritu Kedia (mother) — source: Google review
   - Nikit — quote Sonu Goyal (father) — source: Google review
   - Krishnam — quote Vineeta Bhatter (mother), mentors angle — source: Google review
3. Video wall: the 7 real feedback videos (IDs `U7vTcMULDY8, GhoF3-d-92E, Up6S920LyRs, j-eaIPbSksc, 5hgvxieimTM, v9pNat8vY9M, 7Y4qFO1VwKc`) using the course-template click-to-embed pattern (youtube-nocookie) + links to `/love` and the playlist `https://youtube.com/playlist?list=PLfTigabkzKdy4y52hmNOQRaL8gsc9lbU1`.
4. Project strip: 3 featured Student Labs cards (Misti, NutriLife, GuardianX) with real `/images/projects/*.webp` screenshots linking `/student-labs`.
5. CTA band: `Write the next story` → /book-demo + Google review link `https://g.page/r/Cff_QkHNaP9yEAE/review`.

No new Review/AggregateRating schema beyond what the page already carries.

- [ ] **Step 2: Update success-stories.md** to match new content.

- [ ] **Step 3: Verify** — browser both widths; every quote text matches its source verbatim-or-trimmed (no invented words); all image paths resolve (no 404s in network log); videos click-to-play; zero console errors.

- [ ] **Step 4: Commit**

```bash
git add src/pages/success-stories.html src/css/success-redesign.css src/pages/success-stories.md
git commit -m "Success stories: 10 sourced case studies, video wall, project proof"
```

---

### Task 11: Final verification sweep

**Files:** none created; possible small fixes.

- [ ] **Step 1: Routing parity** — script-check every new route exists in BOTH files:

```bash
for r in /thank-you /guarantee /guarantee.md /team /team.md /instructors; do grep -q "^$r " _redirects && grep -q "from = \"$r\"" netlify.toml && echo "OK $r" || echo "MISSING $r"; done
```
Expected: 6 × OK.

- [ ] **Step 2: build:inline dry-run** — run `npm run build:inline`, confirm new pages' nav/footer markers get refreshed without error, then `git checkout -- src/pages content/` to revert re-inlined cruft (verify `git status` clean of unintended changes, keeping only our task edits).

- [ ] **Step 3: Full browser pass** — dev server: /, /?test=intl, /pricing, /pricing?test=intl, /book-demo, /guarantee, /team, /success-stories, /thank-you — 1440px + 390px, console clean, no ₹ in any ?test=intl view.

- [ ] **Step 4: Sitemap sanity** — `node -e` count `<loc>` before/after = +2 (/guarantee, /team).

- [ ] **Step 5: Commit any fixes**

```bash
git add -A && git commit -m "Tier 1 verification fixes"
```
