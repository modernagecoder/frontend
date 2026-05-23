# 25 Maths SEO Landing Pages (USA + UK) — Design Spec

**Date:** 2026-05-23
**Owner:** Modern Age Coders (learn.modernagecoders.com)
**Goal:** Publish 25 ultra-detailed, SEO-rich maths landing pages targeting USA + UK
students across age groups and high-intent exams. Pages must rank in Google and be
citable by AI assistants (ChatGPT / Claude / Perplexity), capture leads, and convert
to enrolments at USD 100/month (1:1) or USD 40/month (group).

---

## 1. Scope & Non-Goals

**In scope**
- 25 standalone HTML landing pages under `src/pages/`, each with a `.md` twin for AI crawlers.
- One shared base stylesheet `src/css/maths-pages.css` + a distinct per-page layout/theme.
- Lead capture via the existing homepage callback mechanism (`src/js/callback-modal.js`),
  not `mailto:`.
- Links from each page to the matching `/courses/...mathematics...` course page.
- Internal interlinking across the 25 pages.
- `netlify.toml` + `_redirects` registration and `sitemap.xml` entries for all 25.

**Non-goals (this batch)**
- India pages / ₹4999 pricing. **No page in this batch mentions ₹ or India pricing.**
- Other countries (Canada, Australia, UAE, Singapore) — future batch.
- New course pages — we link to existing maths course pages only.
- Backend/CRM changes — reuse existing lead flow as-is.

---

## 2. Pricing (identical on every page)

- **1:1 Private Mentorship — USD 100 / month** (8 sessions, 2 per week).
- **Small-Group Cohort — USD 40 / month** (8 sessions, 2 per week).
- All-ages (6–65), live, year-round. No India/₹ pricing anywhere in this batch.

---

## 3. The 25 Pages (URL map)

### USA (12)
| # | Page | URL | Course link |
|---|------|-----|-------------|
| 1 | Maths Tutoring for Kids (elementary 6–11) | `/online-maths-tutoring-for-kids-in-usa` | elementary-mathematics-complete-masterclass |
| 2 | Maths Tutoring for Teens (middle + high) | `/online-maths-tutoring-for-teens-in-usa` | comprehensive-middle-school + complete-high-school |
| 3 | Maths Tutoring for College Students | `/online-maths-tutoring-for-college-students-in-usa` | college-mathematics-complete-masterclass |
| 4 | Maths Classes for Adults | `/online-maths-classes-for-adults-in-usa` | business-finance / data-analytics mathematics |
| 5 | SAT Math Prep | `/sat-math-tutoring-online` | complete-high-school-mathematics-mastery |
| 6 | ACT Math Prep | `/act-math-tutoring-online` | complete-high-school-mathematics-mastery |
| 7 | AP Calculus AB & BC | `/ap-calculus-tutoring-online` | college-mathematics-complete-masterclass |
| 8 | AP Statistics | `/ap-statistics-tutoring-online` | data-analytics-mathematics-masterclass |
| 9 | Math Olympiad (AMC 8/10/12, MATHCOUNTS) | `/math-olympiad-amc-tutoring` | olympiad-competition-mathematics-mastery |
| 10 | Algebra (Pre-Algebra, Algebra 1 & 2) | `/algebra-tutoring-online-usa` | complete-high-school-mathematics-mastery |
| 11 | Geometry | `/geometry-tutoring-online-usa` | complete-high-school-mathematics-mastery |
| 12 | Homeschool Math Curriculum | `/homeschool-math-curriculum-usa` | elementary + middle-school mathematics |

### UK (13)
| # | Page | URL | Course link |
|---|------|-----|-------------|
| 13 | Maths Tuition for Kids (KS1/KS2 primary) | `/online-maths-tuition-for-kids-in-uk` | elementary-mathematics-complete-masterclass |
| 14 | Maths Tuition for Teens (KS3/KS4) | `/online-maths-tuition-for-teens-in-uk` | comprehensive-middle-school + complete-high-school |
| 15 | Maths Tuition for College / Sixth Form | `/online-maths-tuition-for-college-students-in-uk` | college-mathematics-complete-masterclass |
| 16 | Maths Classes for Adults | `/online-maths-classes-for-adults-in-uk` | business-finance / data-analytics mathematics |
| 17 | GCSE Maths Tuition | `/gcse-maths-tuition-online` | complete-high-school-mathematics-mastery |
| 18 | A-Level Maths Tuition | `/a-level-maths-tuition-online` | college-mathematics-complete-masterclass |
| 19 | Further Maths (A-Level) Tuition | `/further-maths-tuition-online` | college-mathematics-complete-masterclass |
| 20 | 11 Plus Maths Tuition | `/11-plus-maths-tuition` | elementary-mathematics-complete-masterclass |
| 21 | KS2 Maths Tuition (SATs) | `/ks2-maths-tuition-online` | elementary-mathematics-complete-masterclass |
| 22 | KS3 Maths Tuition | `/ks3-maths-tuition-online` | comprehensive-middle-school-mathematics-mastery |
| 23 | Common Entrance Maths (13+) | `/common-entrance-maths-tuition` | comprehensive-middle-school-mathematics-mastery |
| 24 | Functional Skills Maths (adults) | `/functional-skills-maths-tuition-online` | business-finance-mathematics-mastery |
| 25 | UKMT Maths Challenge / Olympiad | `/ukmt-maths-challenge-tutoring` | olympiad-competition-mathematics-mastery |

---

## 4. Content Philosophy (every page, no exaggeration)

1. **Logic, not the recipe.** No rote learning, no formula memorisation — students derive
   *why* a result is true, then apply it. Recurring spine of every page.
2. **Maths logic = coding logic.** Decomposition, pattern-finding, abstraction, and
   debugging your own reasoning — the same thinking that builds strong programmers. Ties
   the maths offering to the Modern Age Coders brand. Genuine differentiator.
3. **1:1 live human mentorship**, 8 classes/month, year-round — positioned honestly
   against pre-recorded apps and 12-week crammers.
4. **Human voice.** Specific, plain, teacherly copy. No hype ("world's best"), no emoji,
   no AI-tells (no "in today's fast-paced world", no "unlock your potential" filler).
   Each page's wording is genuinely unique — not the same paragraphs with the noun swapped.

---

## 5. Per-Page Section Structure (expanded — clears every parent doubt, no clutter)

Each page contains these sections, ordered for a parent reading top to bottom. Content in
every section is **page-specific** (exam board, age, country), never boilerplate.

1. **Hero** — H1 with the exact search phrase, one-line honest promise, trust strip
   (years, students, countries, rating), dual CTA: "Book a free trial" (callback) +
   "See the course".
2. **The honest problem** — why typical maths help fails this audience (cramming for the
   test, forgetting it after, hating the subject). Sets up our contrast.
3. **How we teach — logic, not rote** — the actual method, step by step, so a parent
   understands what a lesson looks like.
4. **A real worked example** — one hard topic for this page (e.g. *why* the quadratic
   formula works for an algebra page; *why* you can't divide by zero for KS2) shown the
   way we'd teach it. Proves depth, not claims.
5. **Maths logic = coding logic** — the differentiator, made concrete for this age/exam.
6. **What we cover** — detailed, page-specific curriculum / exam-board syllabus
   (AP CED units, GCSE foundation+higher topics, AMC topic list, KS2 SATs strands, etc.).
7. **Who this is for & outcomes** — honest outcomes (grades, confidence, fluency), no
   guarantees of "A* in 4 weeks".
8. **How classes work** — 1:1, 8/month, 2 weekly, scheduling, time zones (US 6 zones /
   UK GMT), tools, what happens between classes, parent updates.
9. **Pricing** — USD 100 (1:1) / USD 40 (group), what's included, + prominent link to the
   matching course page.
10. **Proof & mentor quality** — who teaches, how mentors are picked, sample results
    framed honestly.
11. **Honest comparison** — us vs maths apps vs crammers vs generic tutors (table), fair
    not dishonest.
12. **FAQ (extensive)** — every realistic parent doubt for this audience (10–14 Qs):
    pricing, refunds/trial, time zones, exam alignment, "will it actually raise grades",
    "my child hates maths", devices needed, tutor consistency, homework, safeguarding,
    starting mid-year, etc. Feeds `FAQPage` JSON-LD.
13. **Final CTA + lead form** — callback form (reuses `callback-modal.js`) + course link.
14. **Internal links** — 4–6 sibling maths pages (same country and/or adjacent
    age/exam), plus home and `/courses`.

---

## 6. SEO / Technical Build (per page)

- **`<head>`**: gtag (same IDs as existing pages), unique `<title>`, `<meta description>`,
  `<meta keywords>` (page-specific researched terms), `canonical`, OG + Twitter,
  `<meta name="robots">`, `geo.region` = `US` or `GB`, `geo.placename`, `hreflang`
  (`en-us`/`en-gb` + `x-default`), and `<link rel="alternate" type="text/markdown">` to
  the `.md` twin.
- **JSON-LD `@graph`**: `EducationalOrganization` (reuse `#org`), `WebPage`,
  `BreadcrumbList`, `Course` with both Offers (USD 100 / USD 40), and `FAQPage` mirroring
  the on-page FAQ. Modelled on `coding-classes-in-united-states.html`.
- **`.md` twin**: clean markdown version of the page content (same pattern as existing
  `.md` files) for AI-agent crawling and citation.
- **Fonts**: page may pick a distinct Google Font pairing per theme to reinforce
  uniqueness (within the existing preconnect pattern).
- **Routing**: add `from`/`to` rules in `netlify.toml` **and** `_redirects` (both kept in
  sync per project rule), including `.html` → clean-URL redirect.
- **Sitemap**: add all 25 clean URLs to `sitemap.xml`.

---

## 7. CSS Strategy

- **`src/css/maths-pages.css`** — shared base: CSS reset/tokens, nav, footer, callback
  form, buttons, responsive grid, FAQ accordion, comparison table. Loaded by all 25 pages.
- **Per-page uniqueness** — each page sets a body theme class (e.g. `mp-sat`, `mp-gcse`,
  `mp-kids-uk`) that drives a distinct colour theme, hero treatment, and at least one
  signature layout element so no two pages feel templated. Page-scoped rules live in the
  shared file under the theme class (keeps one HTTP request, still visually unique).
- **No AI look**: varied section rhythm, asymmetric layouts where appropriate, real
  typographic hierarchy, restrained palette per page, zero emoji.

---

## 8. Execution Model

- **One page at a time, fully finished** (HTML + `.md` + CSS theme + routing + sitemap +
  visual check) before starting the next. No batch shortcuts. Quality over speed.
- Build order: shared CSS base first → US pages 1–12 → UK pages 13–25 → final routing &
  sitemap sweep → link-integrity check.
- Each page verified rendering locally (Netlify dev / static serve) before moving on.

---

## 9. Acceptance Criteria

- All 25 pages exist, each with unique title/description/keywords and unique visible copy
  (no paragraph reused verbatim across pages).
- Each page: valid JSON-LD (Course + FAQPage + BreadcrumbList), working callback form,
  working course-page link, 4–6 internal sibling links, `.md` twin present.
- Pricing shows USD 100 / USD 40 only. **Zero mention of ₹, INR, or India pricing.**
- All 25 routed in `netlify.toml` + `_redirects` and present in `sitemap.xml`.
- No emoji; no AI-filler phrasing; renders correctly mobile + desktop.
