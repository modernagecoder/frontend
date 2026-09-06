# Astraseo Growth Plan: Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make learn.modernagecoders.com a site where a visitor can watch a real class, judge the teaching, choose a course and enroll without waiting, while every technical, search, AI-visibility and international-readiness defect in `astraseo.md` is repaired at the source (shared data, generators, components), one verified commit at a time.

**Architecture:** Plain HTML/CSS/JS site on Netlify with Node generators (`scripts/`), course/blog JSON as content source, shared `components/nav.html` + `components/footer.html` inlined at build, and an Express backend in `../backend` (Vercel). Every fix lands in the generator, component or data file that owns the fact, never in hundreds of pages by hand. Visible messaging changes are built on the three core pages first and held for the owner's eyes before any sweep.

**Tech Stack:** Node 22, cheerio, clean-css, terser, sharp; Express + Mongoose backend; Playwright available for rendered audits; GA4 (`G-N8BM164YJP`) and Google Ads (`AW-16910316353`) tags.

**Spec:** `astraseo.md` (repo root). Progress tracker: `ASTRASEO-PROGRESS.md` (repo root).

## Global Constraints

- Preserve the existing static architecture, the configured prices (`pricing.config.jsonc`, India flat 1,499 / 2,999 / 4,999, international $100 / $150) and the assisted international payment route. Never describe assisted payment as instant checkout.
- Brand numbers come only from `scripts/brand-facts.json`: 10,000+ students, 547 reviews, 4.9 rating, founded 2020, 25+ countries, ages 6 to 67, group batch 5 to 10.
- No em-dashes anywhere in new copy. One currency per visitor; no prices inside FAQ text.
- The two recording libraries require a Google sign-in. Say "free, no payment, no card, just a quick Google sign-in". Never "no sign-up".
- Libraries: Kids 6 to 12 `https://modernagecoders.graphy.com/courses/How-We-Teach-The-Modern-Age-Coders-Methodology-kids-Coding-6a3a27597efbc77440b2c68f`; Teens and adults 13+ (also maths) `https://modernagecoders.graphy.com/courses/How-We-Teach-The-Modern-Age-Coders-Methodology-6a1888029a4f81888c408ab9`.
- Never noindex a landing, city, or course page. Never push untested redirects. `_redirects` and `netlify.toml` stay in sync.
- The owner rejected a demo-to-enrolment funnel on 2026-09-05 (paid demo, `/enrol` page, 700-page sweep). This plan keeps the free demo, adds no paid demo, creates no `/enrol` page, and builds messaging on three pages only until the owner says yes.
- Commit after every task, on `main`, message in plain English, ending with the session attribution trailer. Backend changes commit in `../backend` on `main`.
- Update `ASTRASEO-PROGRESS.md` at the end of every task with what shipped, the commit hash, what was verified, and what is left.

---

## Phase A: Technical foundations (no preview needed; each item is a measurable repair)

### Task A1: Accept every valid email address (backend and model)

**Files:**
- Modify: `../backend/server.js:1866` (contact submit), `../backend/api/contact/submit.js:43,143`, `../backend/api/contact.js:27`, `../backend/models/Contact.js` (email `match`)
- Create: `../backend/lib/validateEmail.js`, `../backend/scripts/test-validate-email.js`

**Interfaces:**
- Produces: `isValidEmail(value) -> boolean` in `lib/validateEmail.js`; regex `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/` (accepts `+` aliases, subdomains, TLDs longer than 3 chars; rejects spaces, missing `@`, missing dot).

- [ ] **Step 1: Write the failing test** (`../backend/scripts/test-validate-email.js`)

```js
const assert = require('assert');
const { isValidEmail } = require('../lib/validateEmail');
const ok = ['parent+kid@gmail.com', 'a.b@school.education', 'x@y.co', 'first.last@sub.example.online', 'name@domain.info'];
const bad = ['no-at.com', 'two@@x.com', 'space in@x.com', 'x@nodot', '', '@x.com'];
ok.forEach(e => assert.strictEqual(isValidEmail(e), true, 'should accept ' + e));
bad.forEach(e => assert.strictEqual(isValidEmail(e), false, 'should reject ' + e));
console.log('validateEmail: all cases pass');
```

- [ ] **Step 2: Run it, expect MODULE_NOT_FOUND**
- [ ] **Step 3: Implement `lib/validateEmail.js`** exporting `EMAIL_RE` and `isValidEmail`; replace the four `\w{2,3}` regexes with `EMAIL_RE`/`isValidEmail`; keep messages.
- [ ] **Step 4: Run the test, expect pass; `node -e "require('./server.js')"` loads without error**
- [ ] **Step 5: Commit in `../backend`**: "Accept plus-aliases and long domain endings in lead emails"

### Task A2: Consistent crawler rules (robots.txt generated from one policy)

**Files:**
- Create: `scripts/robots-policy.json`, `scripts/generate-robots.js`, `scripts/verify-robots.js`
- Modify: `robots.txt` (generated), `package.json` (`generate:robots`, `verify:robots` inside `generate:derived`)

**Why:** In robots.txt the most specific `User-agent` group wins and the rest are ignored, so `User-agent: Googlebot / Allow: /` gives Googlebot none of the `Disallow` lines. Every named group must carry the full disallow list.

- [ ] **Step 1: Write `verify-robots.js`**: parse robots.txt into groups; for every group assert the same `Disallow` set as `*`; assert exactly one `Sitemap:` line pointing at `sitemap-index.xml`. Run it: expect FAIL naming Googlebot, Bingbot and 20 AI groups.
- [ ] **Step 2: Write `robots-policy.json`** (`disallow` list, `allowHints` list, `namedAgents` with optional crawl-delay, `sitemap`), and `generate-robots.js` that writes every group with the shared disallow list.
- [ ] **Step 3: Run generate then verify: expect PASS. Diff robots.txt to confirm no path lost.**
- [ ] **Step 4: Wire into `generate:derived` (generate before verify) and commit**: "Give every named crawler the same disallow rules"

### Task A3: Course hero image is the LCP element, load it eagerly

**Files:**
- Modify: `scripts/generate-courses.js:1244` (hero `<img>`), `scripts/generate-blogs.js:695` (blog hero)

- [ ] **Step 1: Read image size**: `node -e "require('sharp')('public/images/python-teens.webp').metadata().then(m=>console.log(m.width,m.height))"` (expect 800x450).
- [ ] **Step 2: Change hero `<img>`** to `width="800" height="450" fetchpriority="high" decoding="async"` and drop `loading="lazy"`; blog hero: drop lazy, add `fetchpriority="high"`; listing/related cards stay lazy.
- [ ] **Step 3: Regenerate one course (`npm run generate:courses`) and grep the generated page**: hero has `fetchpriority="high"`, no `loading="lazy"` on `.hero-course-image`.
- [ ] **Step 4: Commit**: "Load course and blog hero images eagerly with dimensions"

### Task A4: Course facts agree: duration panel from the course's own data

**Files:**
- Modify: `content/courses/template/course-template.html:172-186` (cd-duration), `scripts/generate-courses.js` (new `{{DURATION_PANEL_*}}` fields)

- [ ] **Step 1: Census**: `node -e` over `content/courses/data/*.json` printing `meta.duration` shapes; confirm all 121 carry a range like "10-12 months (40-48 weeks)".
- [ ] **Step 2: Replace the hardcoded "6 to 9 months"** with `{{DURATION}}` (standard pace) and derive "Accelerated" from `meta.commitment` (more classes per week); paragraph reads "This course runs {{DURATION}} at {{COMMITMENT}}. Faster with more classes per week."
- [ ] **Step 3: Regenerate, then verify** with a script: for 5 random generated pages, the visible panel text and the schema `timeRequired` contain the same month range.
- [ ] **Step 4: Commit**: "Course duration panel now reads the course's own duration"

### Task A5: Visible navigation is never marked hidden

**Files:**
- Modify: `src/js/unified-mobile-nav.js` (setupAccessibility, closeMenu, handleResize), `src/js/mobile-navigation.js` (init + close), `src/js/mainbundle.js` (the duplicated copy, lines ~1005-1070)
- Create: `scripts/test-nav-aria.mjs` (Playwright, desktop 1280 and mobile 390)

- [ ] **Step 1: Write the Playwright test** that loads `http://localhost:3001/` and `/courses` at 1280: `#navMenu` has no `aria-hidden="true"` and the first `.nav-link` is focusable; at 390: menu closed has `aria-hidden="true"`, after tapping `#mobileMenuBtn` it is `"false"` and `aria-expanded="true"`. Run: expect FAIL at 1280.
- [ ] **Step 2: Add `syncMenuAria()`** in each script: if the off-canvas media query (`max-width: 980px`) matches and the menu is closed set `aria-hidden="true"`, else remove the attribute; call on init, close, open and on resize (matchMedia change).
- [ ] **Step 3: Run the test again: expect PASS at both widths.**
- [ ] **Step 4: Commit**: "Only mark the navigation hidden when it is actually off-screen"

### Task A6: Minify every asset the live pages actually load

**Files:**
- Modify: `scripts/minify.js` (build the list from the dependency graph)

- [ ] **Step 1: Write the graph scan**: walk `src/pages/**/*.html`, `components/*.html`, `content/**/generated/**/*.html`; collect `/css/*.css` and `/js/*.js` references; map to `src/css`, `src/js`; skip `*.min.js`. Print counts (`--dry`).
- [ ] **Step 2: Minify only referenced files; on a terser parse error skip that file and keep going; print a summary; exit non-zero only on I/O errors.**
- [ ] **Step 3: Run `node scripts/minify.js --dry`** and confirm editorial-theme.css, index-redesign.css, country-code-selector.js, international-pricing.js and ux-enhancements.js are now included. Do NOT run without `--dry` (it rewrites files in place; Netlify runs it).
- [ ] **Step 4: Commit**: "Minify the assets pages actually load, found from the HTML"

### Task A7: Sitemap omissions become impossible (manifest check inside the build)

**Files:**
- Create: `scripts/page-manifest.js` (exports `buildManifest()` -> `[{url, file, type, indexable, canonical, inSitemap}]`)
- Modify: `scripts/verify-sitemap.js` (fail on any routed, indexable static page missing from sitemap or whose canonical disagrees with its route)

- [ ] **Step 1: Write `page-manifest.js`** from `_redirects` 200 rules + `src/pages` robots/canonical; add `--print` to dump a table.
- [ ] **Step 2: Extend `verify-sitemap.js`**: missing indexable pages -> FAIL with the list; canonical != route -> FAIL (allow the `/index.html` -> `/` case).
- [ ] **Step 3: Run `npm run verify:sitemap`**: expect PASS today (0 missing found on 2026-09-06), and prove the guard by temporarily removing one `<url>` in a scratch copy.
- [ ] **Step 4: Commit**: "Fail the build if a routed page is missing from the sitemap"

### Task A8: Lead events count once (server id + dedupe on thank-you)

**Files:**
- Modify: `../backend/server.js` (`/api/contact/submit`, `/api/callback/request` responses include `leadId`), `src/pages/book-demo.html:1271`, `src/js/callback-modal.js:103`, `src/js/mainbundle.js` (duplicate modal), `src/pages/thank-you.html:476`

- [ ] **Step 1: Backend returns `leadId: saved._id`** in the success JSON of both endpoints (server.js has the saved doc in scope).
- [ ] **Step 2: Frontend redirects** to `/thank-you?src=book-demo&lid=<leadId>`; thank-you fires `lead_thank_you` only if `lid` is present and not already in `localStorage['mac_lead_fired']` (array capped at 20); no `lid` -> once per `sessionStorage` key.
- [ ] **Step 3: Verify in a browser**: submit the callback modal on localhost against the live API with a test number, land on thank-you, reload twice, `dataLayer` shows one event.
- [ ] **Step 4: Commit both repos**: "Count a lead once, by its server id, not per thank-you load"

### Task A9: Mobile hero puts the offer first

**Files:**
- Modify: `src/css/index-redesign.css:861-866` (remove `.hero-image{order:-1}`, cap the symbol card at 260px on phones)

- [ ] **Step 1: Screenshot the homepage at 390 (Playwright) before.**
- [ ] **Step 2: Change the rule** so headline, paragraph and CTAs render first and the specimen card follows at `max-width:280px`.
- [ ] **Step 3: Screenshot after; assert the `h1` and `.hero-cta` bounding boxes are inside the first 844px viewport.**
- [ ] **Step 4: Bump `index-redesign.css?v=` on index.html; commit**: "Mobile homepage shows the headline and actions before the decoration"

### Task A10: First image in `<main>` is not lazy (442 pages) + catalog cards in HTML

**Files:**
- Create: `scripts/fix-first-image-priority.js` (idempotent sweep, `--dry` default)
- Create: `scripts/prerender-course-cards.js`; Modify: `src/pages/course.html` (grid gets server-rendered cards between `<!-- BEGIN_STATIC_CARDS -->` markers; `renderCourses()` skips the initial render when static cards exist and no filter is active)

- [ ] **Step 1: Sweep**: for each page, the first `<img>` inside `<main>` (skipping logos and `aria-hidden`) loses `loading="lazy"` and gains `fetchpriority="high"`; only if that image sits within the first 6,000 characters of `<main>` (above the fold heuristic). `--dry` prints counts; `--apply` writes.
- [ ] **Step 2: Prerender cards**: parse `coursesData` from course.html (`eval` of the literal, as the JS does), render the same card HTML as `generateCourseCard()` for the default view (coding/kids) with `<a href="{templateUrl}">` links; JS keeps filtering; markdown twin of `/courses` must now list every course link.
- [ ] **Step 3: Verify**: with JS disabled (Playwright `javaScriptEnabled:false`) `/courses` shows cards with real links; with JS on, filtering still works and no duplicate cards; `npm run generate:static-md` for course.html only and count `/courses/` links (>100).
- [ ] **Step 4: Commit**: "Catalog cards render as HTML with real links; first images load eagerly"

### Task A11: llms.txt facts and format

**Files:**
- Modify: `llms.txt` (batch "5 to 10", no em-dashes, AI Tools for Teens moved under Teens, demos optional, recordings with Google sign-in, "ages 6 to 67"); regenerate `llms-full.txt`

- [ ] **Step 1: `grep -n "4-8\|—\|AI Tools for Teens" llms.txt`** to list every defect.
- [ ] **Step 2: Fix; run `npm run generate:llms`; commit**: "llms.txt: batch size, ages, recordings and optional demo stated correctly"

### Task A12: Schema matches the visible evidence (from the census)

**Files:**
- Create: `scripts/audit-schema-evidence.js` (report: Review nodes whose reviewer is not on the page's visible text; LocalBusiness `address` on pages for a different city; duplicate Organization nodes)
- Modify: the generator or fixer that owns each finding (decided from the census: `fix-local-schema.py` pattern, parse JSON-LD before and after, refuse to write on breakage)

- [ ] **Step 1: Run the audit, commit the report to `seo/astraseo-2026-09/schema-evidence.md`.**
- [ ] **Step 2: Fix the top classes** (reused reviews on pages that do not show them; a physical address claimed in cities with no presence becomes `areaServed`); re-run the audit to 0 for those classes.
- [ ] **Step 3: Commit**: "Schema only claims reviews and places the page shows"

---

## Phase B: Messaging (three core pages, separate commits, PREVIEW before any sweep)

### Task B1: `/book-demo` "Don't wait to experience how we teach"

**Files:** `src/pages/book-demo.html:432-449`, `src/css/book-demo-redesign.css`, FAQ (visible + FAQPage schema) already present.

- [ ] Replace `.bd-watch-strip` copy with the spec's heading, body, three actions (Watch a Real Class -> `/how-we-teach#library`, Choose a Course and Enroll -> `/courses`, quiet link "Prefer a live demo? Choose a time" -> `#contactForm`) and the disclosure line; keep the two library buttons under the first action as the kids/teens choice.
- [ ] Verify at 390 and 1280: buttons >= 44px, contrast >= 4.5:1, no overlap with the sticky bar; commit: "Book-demo: watch now or enroll now, live demo optional"

### Task B2: `/how-we-teach` closing section

**Files:** `src/pages/how-we-teach.html:526-533`, `src/css/how-we-teach.css`

- [ ] Replace the CTA band with "Like the way we teach? Start your learning journey." + body + actions "Choose My Course & Enroll" (`/courses`) and "Book a Free Live Demo" (`openCallbackModal()`); if `?course=<slug>` is present, swap the first action for "Enroll in This Course" pointing at `/courses/<slug>#enroll` (small inline script, no fetch).
- [ ] Update the last FAQ so the demo reads as optional; keep the FAQPage schema in sync; commit: "How-we-teach ends with an enrolment choice, demo optional"

### Task B3: Shared teaching-depth section

**Files:** Create `components/teaching-depth.html`; Modify `scripts/inline-components.js` (inline `<!-- BEGIN_INLINED_TEACHING_DEPTH -->` marker); place the marker on `src/pages/index.html` (after the answer capsule), `src/pages/how-we-teach.html` (after the hero), `content/courses/template/course-template.html` (before the enrolment CTA).

- [ ] Write the component with the spec's heading, body, supporting line and the six observable practices; no numbers, no prices, no em-dashes; style with editorial tokens (works on `body.editorial` and the course page).
- [ ] Inline-components must also fill the marker on generated course pages (generate:courses runs before build:inline on Netlify; locally run both); verify on the three pages; commit: "Teaching-depth section on homepage, how-we-teach and course pages"

### Task B4: No page implies a demo is mandatory before payment

**Files:** `content/courses/template/course-template.html:195` ("Free demo first" -> "A free live demo is available before you enroll"), `src/pages/index.html:809` capsule sentence, `src/pages/pricing.html` (grep "demo first").

- [ ] `grep -rn "demo first\|Free demo first" src/pages/index.html src/pages/pricing.html content/courses/template` and rewrite those lines only; leave the 60-page tail for the sweep decision; commit: "Say the free demo is available, not required"

### Task B5: Homepage CTA order

**Files:** `src/pages/index.html:714-718`

- [ ] Reorder to Watch a Real Class (primary, `/how-we-teach`), Explore Courses (outline), Book a Free Demo (outline); keep all three; commit: "Homepage: watch a real class first"

### Task B6: Shared mobile action bar with two actions

**Files:** `components/footer.html:284-311` (bar), `content/courses/template/course-template.html` (adds `<body data-sticky="course">`), `src/pages/book-demo.html` (`data-sticky="demo"`)

- [ ] Default bar stays WhatsApp + Book Free Demo. On `data-sticky="course"` the bar shows Enroll (`#enroll`) + Watch Class (`/how-we-teach#library`) and WhatsApp collapses into a 44px icon; Misti keeps its lift; on `data-sticky="demo"` the bar shows Book (`#contactForm`) + Watch Class. `body{padding-bottom}` reserves space; bar hides while an input is focused (keyboard) using `focusin/focusout`.
- [ ] Verify on course page and book-demo at 390: nothing covered, all taps >= 44px; commit: "One mobile action bar: two actions, help control, keyboard-safe"

---

## Phase C: Shared data for facts, recordings and AI summaries

### Task C1: Recording metadata as data

**Files:** Create `content/recordings.json` (two libraries: audience, ages, subjects, teachingLanguage "English or Hindi, by class", format "recorded group classes", access "Free with a Google sign-in", updated "frequently", relatedCourses by ageGroup); Modify `scripts/generate-courses.js` (hero "Watch a class" links the audience-matched library and is labelled "teaching-method sample"), `src/pages/how-we-teach.html` library cards read the same facts.

### Task C2: Course facts block generated from JSON

**Files:** Modify `scripts/generate-courses.js`, `content/courses/template/course-template.html` (new `<section class="cd-facts">` "At a glance": audience, prerequisites, language, duration, weekly commitment, class length, group size from brand-facts, format, price link, certificate); Modify the Course JSON-LD (`inLanguage`, `audience`, `courseMode: online live`, `courseWorkload`).

### Task C3: The nine questions answered on every course page

**Files:** Modify `scripts/generate-courses.js` to build a `cd-answers` list from existing sections (who_is_this_for, program_overview, prerequisites, faqs, certification) and the recordings data; include "Can I watch the teaching before deciding?" and "Can I enroll without a live demo?" with truthful answers. Also emit the same text into the markdown twin automatically (it is HTML).

### Task C4: Market records

**Files:** Create `content/markets.json` (per country page: currency, billing period, included classes, payment route "assisted by the team over WhatsApp", timezone, support hours IST); Create `scripts/verify-markets.js` (country pages show the market's currency only and the assisted-payment wording).

---

## Phase D: Backend states, idempotency, reporting

### Task D1: Inquiry vs reservation vs confirmation

**Files:** `../backend/models/leadTracking.js` (demoSlot gets `state: inquiry|reserved|confirmed|attended|cancelled`, default inquiry), `../backend/routes/admin/contacts.js` (PATCH state with audit trail), `../backend/routes/admin/analytics.js` (counts by state), `src/admin/*` (state chip + filter).

### Task D2: Idempotent submissions

**Files:** `../backend/server.js` both public endpoints accept `submissionId` (uuid from the client, `crypto.randomUUID()` with fallback), store it unique-sparse on Contact and CallbackRequest, and return the existing lead on a repeat instead of creating a second one; frontend generates it once per form fill and reuses it on retry.

---

## Phase E: Performance budget and asset hygiene

### Task E1: Budget report
- Create `scripts/perf-budget.mjs`: for homepage, /courses, /book-demo, /pricing, one course, one blog, one resource, one international page: sum gzip bytes of referenced CSS, JS and above-the-fold images; compare with the budgets (JS 150 KB, CSS 80 KB, hero 150 KB, initial 1 MB); write `seo/astraseo-2026-09/perf-budget.md`.

### Task E2: Duplicate and dead asset references
- Scan every page for the same `<script src>` or `<link href>` twice, and preloads whose target is never used; fix in the component or template that emits them.

### Task E3 (HELD): Razorpay on click
- Needs a test payment; document in progress file, do not ship blind.

---

## Phase F: Content and distribution cadence (owner-executed; documented, not coded)

- Weekly: improve two high-intent pages, one instructor-reviewed guide, one teaching demonstration with transcript, one verified student outcome. Five-week rotation kids -> teens -> college -> professionals -> corporate. Recorded in `ASTRASEO-PROGRESS.md` with the first four weeks' page picks.

---

## Self-review notes

- Spec coverage: 2A/2B/2C -> B1/B2/B3; 2D audience table -> B3 copy + C3; 3 CTA hierarchy -> B5/B6/B1/B2 (catalog, pricing, confirmation rows handled in B4/B6 and thank-you already links recordings); 3B recording entries -> C1; 3C course order -> C2/C3; 3D direct enrolment -> existing Razorpay + assisted route, wording in B4, id/dedupe in A8/D2; 3E mobile -> B6; 4 repair backlog -> A1..A12; 5A -> C2; 5B -> A2/A7/A12; 5C -> C3; 5D -> C4; 5E -> F; 6 interfaces -> A7 manifest, C1 recordings, D1/D2, reporting D1; 7 tests -> the verify scripts in each task.
- Deliberately not built: availability API with genuinely bookable slots (no teacher calendar source exists; owner must supply one), translations, paid acquisition, a `/enrol` page or paid demo (rejected 2026-09-05).
