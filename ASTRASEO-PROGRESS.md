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
- [ ] A5 Desktop navigation no longer carries `aria-hidden="true"` while visible
- [ ] A6 Minifier covers every CSS/JS file the pages actually load (was 7 CSS + 3 JS by hand)
- [ ] A7 Build fails if a routed, indexable page is missing from the sitemap
- [ ] A8 Lead event fires once per server lead id, not per thank-you load
- [ ] A9 Mobile homepage shows headline and actions before the decoration
- [ ] A10 Catalog cards rendered as HTML with real links; first image per page not lazy
- [ ] A11 llms.txt facts and format (batch 5 to 10, ages 6 to 67, recordings, demo optional)
- [ ] A12 Schema only claims the reviews and places the page shows (from the census)

## Phase B: messaging on three pages (PREVIEW BEFORE ANY SWEEP)

- [ ] B1 `/book-demo`: "Don't wait to experience how we teach" with the three actions and the sign-in disclosure
- [ ] B2 `/how-we-teach`: closing section "Like the way we teach? Start your learning journey."
- [ ] B3 Shared teaching-depth section on homepage, how-we-teach and course pages
- [ ] B4 "Free demo first" becomes "A free live demo is available before you enroll" (3 files)
- [ ] B5 Homepage CTA order: Watch a Real Class, Explore Courses, Book a Free Demo
- [ ] B6 One mobile action bar: two actions, WhatsApp/Misti as a compact help control, keyboard-safe

## Phase C: shared data

- [ ] C1 `content/recordings.json` drives every recording mention (audience, language, access)
- [ ] C2 Course "At a glance" facts block + schema fields generated from course JSON
- [ ] C3 The nine buyer questions answered on every course page (and its markdown twin)
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
