# Astraseo growth plan: progress tracker

Spec: `astraseo.md`. Plan with steps: `docs/superpowers/plans/2026-09-06-astraseo-growth.md`.
Started 2026-09-06. Every task below is committed on `main` as its own commit so any single
change can be reverted alone. Backend changes are committed in `../backend`.

Legend: `[ ]` not started · `[~]` in progress · `[x]` done and verified · `[!]` held, needs the owner

## How the plan was adjusted, and why

1. **Technical repairs first, messaging second.** On 2026-09-05 the owner rejected a funnel
   rebuild on first sight after it had swept 700 pages. So the visible copy changes in this
   plan (Phase B) are built on three pages only, each in its own commit, and stop there until
   the owner has looked at them. Nothing in Phase A changes what a visitor reads.
2. **No paid demo, no `/enrol` page, no sweep.** The free live demo stays. The spec's
   "direct enrolment" already exists (Razorpay on course pages in India, team-assisted payment
   abroad); the work is to say so honestly and to stop implying a demo is required.
3. **Nothing is invented.** Instructor names, recording durations, teacher availability and
   local student evidence are not in the data. Where the spec asks for them, the page says
   what is true ("Modern Age Coders mentors", "free with a Google sign-in") or the item is
   marked `[!]` for the owner.

## Phase A: technical foundations

- [x] A1 Email validation accepts `+` aliases and long domain endings. Backend `60f72fe`: one shared rule in `lib/validateEmail.js` replaced 7 copies (server.js, api/contact/submit.js, Contact, CorporateTraining, User, BusinessSolution models); 20-case test passes. Frontend forms already used the lenient rule and keep entered data on error.
- [x] A2 robots.txt generated from `scripts/robots-policy.json` by `generate-robots.js`; `verify-robots.js` runs in `generate:derived` and fails the build if any of the 22 groups drifts. Before: 21 named groups had zero disallow rules. Same agents, same paths, nothing lost.
- [x] A3 Course and blog hero images load eagerly with `fetchpriority="high"` and 800x450 dimensions (were `loading="lazy"`). Verified on all 121 generated course pages.
- [x] A4 Course duration panel reads the course's own `meta.duration` and `meta.commitment` (was a fixed "6 to 9 months" on every page). Verified 121/121: visible panel, hero badge and schema `timeRequired` agree; 0 pages still say 6 to 9 months.
- [x] A5 Desktop navigation no longer carries `aria-hidden="true"` while visible. `syncMenuAria()` in unified-mobile-nav.js, mobile-navigation.js and the mainbundle.js copy decides from the rendered hamburger (stylesheet truth), re-syncs on resize. `scripts/test-nav-aria.js` (Playwright, 4 pages x 2 widths) went from 3 failures to pass.
- [x] A6 `46e5b7b7` Minifier derives its list from every `<link>`/`<script>` across 1,389 HTML files: 48 CSS + 37 JS (was a hand list of 7 + 3; editorial-theme.css, index-redesign.css, international-pricing.js, country-code-selector.js and ux-enhancements.js were all unminified in production). Skips `*.min.*` and the hash-stamped pricing data; a parse error leaves the original in place. Found for E2: `premium-legal.css` is referenced by 4 pages but does not exist; `meta-pixel.js` minifies to nothing (dead pixel).
- [x] A7 `2d3e5f7e` `scripts/page-manifest.js` derives the published-page manifest (770 routed static pages, 761 indexable, canonical, sitemap membership) from `_redirects` plus each page head; `verify-sitemap.js` now fails on a missing indexable page or a canonical that is not one of the page routes. Proven: dropping `/about` from a scratch sitemap fails the build with the page named. Today: 0 missing, 0 mismatches.
- [x] A8 `6da95e42` Both lead forms carry the server id (`contactId` / `requestId`, already returned by the backend) to `/thank-you?lid=`; the page fires `lead_thank_you` once per id (localStorage), once per session for older `src`-only handoffs, and never on a direct visit. `scripts/test-thank-you-dedupe.js` (Playwright) proves reload and revisit fire 0.
- [x] A9 `889bfe32` Mobile homepage shows eyebrow, headline, paragraph, three CTAs, trust line and toggle inside the first 844px viewport (CTA bottom at 672px); the symbol card follows at 260px. Also fixed 335px of sideways scroll on the homepage at 390px (`html{overflow-x:clip}`, the same root cause memory recorded for the editorial theme). Measured with Playwright; `index-redesign.css?v=` bumped.
- [x] A10 `f1fa15a3` first-image sweep (152 pages eager, idempotent script). Catalog: `scripts/prerender-course-cards.js` (in `generate:html`) writes the default 16 cards as HTML inside the grid using the page's own card function (byte-identical, no flash) and regenerates the "Browse all 122 courses" index from coursesData (the hand-typed strip listed 72). Card title and button are real anchors. Verified with Playwright: JS off = 16 cards, 32 card links, 122 index links; JS on = same 16, filter to teens = 35, 0 console errors; phone = all index links >= 44px, no sideways scroll. Markdown twin `/courses.md` went from 5 course links to 154. Also fixed the catalog eyebrow "Ages 6 to 65" to 6 to 67.
- [x] A11 `5729c5d0` llms.txt: batch size 5 to 10 (was 4-8 in 6 places, contradicting brand-facts), ages 6 to 67 stated, the 13+ AI Tools course moved out of the kids list, the demo FAQ says the live demo is optional and points to the two free recording libraries (Google sign-in disclosed), 0 em-dashes (was 25). llms-full.txt regenerated.
- [x] A12 `0b8350a9` Removed the 4 identical Review nodes that every one of the 121 Course schemas claimed as reviews of that course (484 nodes, none about the course on the page). AggregateRating stays per the owner decision of 2026-07-01, with its 2026-09-15 GSC checkpoint noted in the generator. Census facts: 0 Review nodes in static pages; LocalBusiness on 245 city pages carries no address (correct, `areaServed` only); the only postal address anywhere is the real Kolkata office; 0 static pages have hreflang (course and blog pages do). Open from the census: hreflang for the country-page cluster (C4).

## Phase B: messaging on three pages (PREVIEW BEFORE ANY SWEEP)

Owner: please open ,  and  (and any course page) locally or on a draft deploy before this goes live. Each page is its own commit (hashes below), so a single page can be reverted without touching the rest.

- [x] B1 `cbc145f8` `/book-demo` strip: the brief's heading and body, the two age libraries, Choose a Course & Enroll, a quiet "Prefer a live demo? Choose a time below" link, and the Google sign-in / English-Hindi disclosure. Booking form untouched. PREVIEW PAGE.
- [x] B2 `6c1f4e28` `/how-we-teach` closing: Choose My Course & Enroll first, Book a Free Live Demo second; `?course=<slug>` turns the first action into "Enroll in This Course" (verified). Also found and fixed: the page's inline markers were decorated, so the build had never refreshed its nav or footer (`9a65c24a`). PREVIEW PAGE.
- [x] B3 `84e33f46` `components/teaching-depth.html` (the brief's copy, six practices, two actions) synced by `scripts/sync-shared-sections.js` into the homepage, the teaching page and the course template (121 pages); runs first in `generate:html`. Course pages pass their slug through to the teaching page.
- [x] B4 No page implies a demo before payment: course template trust line, homepage capsule (`0340ea2c`), pricing capsule and risk chip (`3b785c09`).
- [x] B5 `0340ea2c` Homepage hero: Watch a Real Class (primary), Explore Courses, Book a Free Demo. PREVIEW PAGE.
- [x] B6 `e1bc22bb` + `9a65c24a` + `dedd5706`: course pages show Enroll + Watch Class (re-pointed at the matched library), the booking page Book a Demo + Watch Class, WhatsApp and Misti in one 44px help control, floats hidden there, bar hidden while a field has focus. Other pages keep WhatsApp + Book Free Demo (now 44px, and the WhatsApp float finally hides on phones as originally intended). Root causes fixed on the way: the floats' inline !important styles, and 104 pages carrying 2 to 3 stacked copies of both floats (394 anchors, 197 style blocks removed). Verified with Playwright on 4 pages x 2 widths.

## Phase C: shared data

- [x] C1 `content/recordings.json` holds the two libraries with audience, ages, subjects, access (Google sign-in), languages, update cadence, watch tip and how-to steps (owner facts of 2026-08-06, nothing added). Course pages now link the library that matches the course audience (20 kids, 101 teens-and-up; grades and classes are not read as ages), labelled "Watch a real class (ages ...)" with the sign-in disclosure under the hero links.
- [x] C2 "At a glance" block on all 121 course pages (`scripts/lib/course-facts.js`): who it is for, prerequisites, format, language, duration, weekly commitment, class size (brand-facts), price (link to the plans, no literal), certificate, watch first, live demo optional. Course schema gains `inLanguage` and `EducationalAudience`. Same facts in every markdown twin.
- [x] C3 "Straight answers" section on all 121 pages and twins: who, what they build, how deep, who teaches (truthful: mentors, seen in the recordings), practice/feedback/assessment, cost (plans in your currency, no literal), schedule, watch before deciding, enroll without a live demo (assisted payment abroad stated). Two new FAQs (visible + FAQPage) on every course. Verified with Playwright at 1280/390: 0 text under 12px, contrast 5.17:1, no overflow, 0 console errors.
- [ ] C4 `content/markets.json` + verifier for currency and assisted-payment wording

## Phase D: backend

- [ ] D1 Demo states: inquiry / reserved / confirmed / attended / cancelled, reported separately
- [ ] D2 Idempotent submissions (client `submissionId`), duplicate retries return the same lead

## Phase E: performance

- [ ] E1 Budget report for 8 page types against the spec's budgets
- [ ] E2 Duplicate and dead asset references removed at the source
- [!] E3 Razorpay on click: needs a live test payment before shipping

## Phase F: content and distribution (owner-executed)

- [ ] F1 Four-week editorial calendar with the exact pages to improve and the guide topics

## Held for the owner

- Availability API with genuinely bookable slots: no teacher calendar exists in the system.
  The slot picker offers preferred times, which the team confirms by hand. Needs a source of
  truth (Google Calendar or the admin panel) before it can be built honestly.
- Instructor identity on course pages: only 6 of 121 course JSONs name an author.
- 3,367 instances of "5-8 students" still on the site (owner ruled the batch is 5 to 10 on
  2026-09-03; reconciliation script in `seo/superseo-2026-09/`, not run: it is a revenue call).

## Log

- 2026-09-06: read the spec, confirmed each repair-backlog item against the code, wrote the plan.
- 2026-09-07: Phase A complete (12 of 12). Phase C1 to C3 shipped (course facts, answers, recordings data). Phase B shipped on the three core pages plus the course template, with the mobile bar and three pre-existing defects fixed along the way (decorated markers on how-we-teach, inline float styles, 104 pages with stacked duplicate floats).
