# 25 Maths SEO Landing Pages (USA + UK) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build 25 ultra-detailed, SEO-rich maths landing pages for USA + UK that rank in Google, get cited by AI assistants, capture leads via the existing callback flow, and link to the matching maths course pages — all at USD 100/mo (1:1) and USD 40/mo (group), with zero India/₹ pricing.

**Architecture:** Each page is a standalone `src/pages/<slug>.html` + a `.md` twin, modelled on the existing `coding-classes-in-united-states.html` template (gtag, JSON-LD `@graph`, OG/Twitter, geo + hreflang, international callback modal). All pages share one new base stylesheet `src/css/maths-pages.css`; each page gets a distinct body theme class for a unique colour/hero/layout so none feel templated. Pages are routed in `netlify.toml` + `_redirects` and listed in `sitemap.xml`.

**Tech Stack:** Plain HTML/CSS/JS (no framework). Reused JS: `/js/callback-modal.js` + `/js/country-code-selector.js`. Backend lead endpoint already live at `https://backend-modernagecoders.vercel.app/api/callback/request`. Hosting: Netlify.

---

## Reference: The Gold Template

`src/pages/coding-classes-in-united-states.html` is the canonical reference for `<head>`, JSON-LD, callback modal, and footer scripts. Copy its *structure*, never its prose.

**Course-page link targets (existing, do not create):**
- Elementary/kids → `/courses/elementary-mathematics-complete-masterclass`
- Middle school → `/courses/comprehensive-middle-school-mathematics-mastery`
- High school → `/courses/complete-high-school-mathematics-mastery`
- College → `/courses/college-mathematics-complete-masterclass`
- Business/finance (adults) → `/courses/complete-business-finance-mathematics-mastery`
- Data analytics (adults) → `/courses/data-analytics-mathematics-masterclass`
- Olympiad → `/courses/olympiad-competition-mathematics-mastery`

**gtag head block (paste verbatim into every page `<head>`):**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-N8BM164YJP"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-N8BM164YJP');gtag('config','AW-16910316353');</script>
```

**Footer scripts (paste verbatim before `</body>` on every page):**
```html
<script src="/js/callback-modal.js" defer></script>
<script src="/js/country-code-selector.js?v=20260513c" defer></script>
```

**Callback modal markup** — copy lines 155–176 of `coding-classes-in-united-states.html` verbatim into each page (just below `<body>`), then per page: change the `+1` span to `+1` (US pages) or `+44` (UK pages), the placeholder text ("US mobile number" / "UK mobile number"), and the icon-circle gradient + stroke colour to match that page's theme. `country-code-selector.js` upgrades this into a searchable country dropdown automatically.

---

## Per-Page Section Order (all 25 — author unique prose each time)

1. Hero (H1 = exact search phrase, honest one-line promise, trust strip, dual CTA: `onclick="openCallbackModal()"` + course link)
2. The honest problem (why typical maths help fails THIS audience)
3. How we teach — logic, not rote (the method, step by step)
4. A real worked example (one hard topic for THIS page, taught our way)
5. Maths logic = coding logic (made concrete for this age/exam)
6. What we cover (page-specific curriculum / exam syllabus — detailed)
7. Who it's for & honest outcomes
8. How classes work (1:1, 8/mo, 2 weekly, time zones, tools, parent updates)
9. Pricing (USD 100 / USD 40) + prominent matching course-page link
10. Proof & mentor quality
11. Honest comparison table (us vs apps vs crammers vs generic tutors)
12. FAQ (10–14 page-specific Qs — mirrored exactly in `FAQPage` JSON-LD)
13. Final CTA + callback form trigger
14. Internal links (4–6 sibling maths pages + home + `/courses`)

**Banned in all prose:** emoji; ₹/INR/India pricing; hype ("world's best", "#1", "unlock your potential"); AI-filler ("in today's fast-paced world", "look no further", "elevate", "delve"). Write like a real maths teacher explaining things plainly.

---

## Task 0: Shared base stylesheet `src/css/maths-pages.css`

**Files:**
- Create: `src/css/maths-pages.css`

- [ ] **Step 1: Author the base stylesheet**

Write a base sheet containing ONLY shared, theme-neutral rules driven by CSS custom properties so each page overrides the palette via its body theme class. Include:
- `:root` design tokens: `--mp-bg`, `--mp-ink`, `--mp-muted`, `--mp-accent`, `--mp-accent-2`, `--mp-surface`, `--mp-border`, `--mp-radius`, `--mp-maxw: 1140px`, fluid type scale via `clamp()`.
- Reset/normalize (box-sizing, margin reset, `img{max-width:100%}`, `:focus-visible` ring).
- Layout: `.mp-wrap` (centered max-width), responsive grid helpers.
- Components: top nav bar, footer, buttons (`.mp-btn`, `.mp-btn-primary`, `.mp-btn-ghost`), trust strip, section heading rhythm, comparison table, FAQ accordion (`<details>`/`<summary>` styled), internal-link card grid, the lead-form CTA band.
- Mobile-first; one breakpoint at `768px`, one at `1024px`.
- No page-specific colours here — those live under theme classes per page.

- [ ] **Step 2: Verify the file is valid CSS (no syntax errors)**

Run: `npx --yes csso-cli src/css/maths-pages.css -o /dev/null` (PowerShell: `npx --yes csso-cli src/css/maths-pages.css -o $null`)
Expected: exits 0, no parse error.

- [ ] **Step 3: Commit**

```bash
git add src/css/maths-pages.css
git commit -m "feat(maths-seo): add shared base stylesheet for maths landing pages"
```

---

## Tasks 1–25: One page each

Every page task follows the SAME 6 steps below. Only the **page parameters** block changes. Read the params, then execute steps for that page.

### Shared steps for every page task

- [ ] **Step A: Create `src/pages/<slug>.html`** following the Gold Template structure: gtag head block, unique `<title>`/`<meta description>`/`<meta keywords>`, `canonical`, OG+Twitter, `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">`, `geo.region` + `geo.placename`, hreflang (`en-us` or `en-gb` + `x-default`), `<link rel="alternate" type="text/markdown" href="/src/pages/<slug>.md">`, and a JSON-LD `@graph` with `EducationalOrganization` (`@id` `https://learn.modernagecoders.com/#org`), `WebPage`, `BreadcrumbList`, `Course` (two Offers: USD 100 "1:1 Private Mentorship" + USD 40 "Small-Group Cohort"), and `FAQPage` mirroring the on-page FAQ. Link `/css/maths-pages.css`. Set `<body class="mp-root <theme-class>">`. Paste callback modal markup + footer scripts. Author all 14 sections with unique prose per the page params.

- [ ] **Step B: Create `src/pages/<slug>.md`** — clean markdown twin: H1, the honest pitch, "how we teach", what's covered, pricing (USD 100 / USD 40), and the FAQ as `### Q` / answer pairs. Same factual content as the HTML, no markup noise. (Match an existing `.md` twin's style, e.g. `coding-classes-in-united-states.md`.)

- [ ] **Step C: Verify no banned content** —
Run: `grep -nEi "₹|INR|rupee|4999|world.?s best|#1 |unlock your potential|in today.?s fast|look no further|delve" src/pages/<slug>.html`
Expected: NO matches (empty output). Fix any hit before proceeding.

- [ ] **Step D: Verify SEO scaffolding present** —
Run: `grep -c -E "application/ld\+json|FAQPage|\"price\": ?\"100|\"price\": ?\"40|rel=\"canonical\"|openCallbackModal|/courses/" src/pages/<slug>.html`
Expected: count ≥ 6 (schema, FAQ, both prices, canonical, callback trigger, course link all present).

- [ ] **Step E: Visual check** — open the page in a browser (Playwright or `npx serve` + manual) at mobile (390px) and desktop (1280px). Confirm: hero renders, theme colour is distinct from the previous page, comparison table + FAQ accordion work, callback modal opens on CTA click, no layout overflow. Note distinctness vs the prior page.

- [ ] **Step F: Commit** —
```bash
git add src/pages/<slug>.html src/pages/<slug>.md
git commit -m "feat(maths-seo): add <slug> landing page"
```

---

### Page parameters

> Theme classes must each use a visually distinct palette (vary hue, accent pairing, hero treatment). Suggested anchor hue given per page — pick complementary accents so adjacent pages never look alike.

**Task 1 — Maths Tutoring for Kids in the USA**
- slug: `online-maths-tutoring-for-kids-in-usa` · theme: `mp-kids-us` (warm coral/teal, playful but not childish) · geo: US
- H1 target: "Online Maths Tutoring for Kids in the USA" · audience: elementary, ages 6–11 (Grades K–5)
- Worked example: *why* you can't divide by zero / why "borrowing" in subtraction actually works (place value)
- Curriculum: number sense, place value, fractions as meaning not tricks, word-problem reasoning, intro to logical patterns; Common Core grade strands referenced honestly
- Course link: elementary masterclass · Siblings: tasks 2,3,9,12,13

**Task 2 — Maths Tutoring for Teens in the USA**
- slug: `online-maths-tutoring-for-teens-in-usa` · theme: `mp-teens-us` (indigo/lime) · geo: US
- audience: middle + high school (Grades 6–12) · Worked example: why the quadratic formula works (completing the square derivation)
- Curriculum: pre-algebra → algebra 2, geometry proofs as logic, functions, intro trig/pre-calc, SAT/ACT readiness signposting
- Course link: high-school masterclass · Siblings: 5,6,10,11,3

**Task 3 — Maths Tutoring for College Students in the USA**
- slug: `online-maths-tutoring-for-college-students-in-usa` · theme: `mp-college-us` (slate/amber) · geo: US
- audience: undergraduates · Worked example: the limit definition behind a derivative (why calculus isn't memorising rules)
- Curriculum: single + multivariable calculus, linear algebra, discrete maths, probability/stats, proof writing
- Course link: college masterclass · Siblings: 7,8,4,2

**Task 4 — Maths Classes for Adults in the USA**
- slug: `online-maths-classes-for-adults-in-usa` · theme: `mp-adults-us` (deep green/copper) · geo: US
- audience: adult learners, career-changers, returning students · Worked example: what a percentage really is (so finance maths stops being scary)
- Curriculum: foundations refresher, statistics for work, financial maths, data literacy, GRE/GMAT quant signpost
- Course link: business-finance masterclass · Siblings: 8,3,7,15

**Task 5 — SAT Math Prep**
- slug: `sat-math-tutoring-online` · theme: `mp-sat` (navy/red, exam-serious) · geo: US
- Worked example: a hard SAT linear-systems problem solved by reasoning, not plugging
- Curriculum: Heart of Algebra, Problem Solving & Data Analysis, Passport to Advanced Math, Additional Topics; Digital SAT (Bluebook) format; pacing/strategy
- Course link: high-school masterclass · Siblings: 6,2,10,11

**Task 6 — ACT Math Prep**
- slug: `act-math-tutoring-online` · theme: `mp-act` (teal/orange) · geo: US
- Worked example: an ACT geometry/trig question done by understanding the figure
- Curriculum: pre-algebra, elementary+intermediate algebra, coordinate+plane geometry, trig; 60-questions-in-60-min pacing
- Course link: high-school masterclass · Siblings: 5,2,11,10

**Task 7 — AP Calculus AB & BC**
- slug: `ap-calculus-tutoring-online` · theme: `mp-apcalc` (royal blue/gold) · geo: US
- Worked example: why the Fundamental Theorem of Calculus links area and slope
- Curriculum: AP CED units (limits, derivatives, integrals, FTC, series for BC), FRQ technique, calculator+no-calc sections
- Course link: college masterclass · Siblings: 8,3,2,5

**Task 8 — AP Statistics**
- slug: `ap-statistics-tutoring-online` · theme: `mp-apstats` (plum/sky) · geo: US
- Worked example: why a p-value is not "the chance the hypothesis is true"
- Curriculum: AP Stats units (exploring data, sampling+experiments, probability, inference), FRQ + investigative task
- Course link: data-analytics masterclass · Siblings: 7,3,4,2

**Task 9 — Math Olympiad (AMC 8/10/12, MATHCOUNTS)**
- slug: `math-olympiad-amc-tutoring` · theme: `mp-olympiad-us` (black/gold medal) · geo: US
- Worked example: a clever AMC counting problem solved by reframing, not formula
- Curriculum: AMC 8/10/12 + MATHCOUNTS topics (number theory, combinatorics, geometry, clever algebra), AIME pathway
- Course link: olympiad masterclass · Siblings: 25,2,5,11

**Task 10 — Algebra (Pre-Algebra, Algebra 1 & 2)**
- slug: `algebra-tutoring-online-usa` · theme: `mp-algebra` (emerald/violet) · geo: US
- Worked example: why "do the same to both sides" preserves truth (balance/equality logic)
- Curriculum: variables+expressions, linear+quadratic equations, functions, systems, polynomials, exponentials/logs
- Course link: high-school masterclass · Siblings: 11,5,6,2

**Task 11 — Geometry**
- slug: `geometry-tutoring-online-usa` · theme: `mp-geometry` (cyan/coral, geometric motifs) · geo: US
- Worked example: a two-column proof reframed as "a chain of logical 'if-then' steps" (ties to coding)
- Curriculum: definitions+postulates, congruence/similarity, proofs, circles, coordinate geometry, area/volume, intro trig
- Course link: high-school masterclass · Siblings: 10,5,6,2

**Task 12 — Homeschool Math Curriculum (USA)**
- slug: `homeschool-math-curriculum-usa` · theme: `mp-homeschool` (sage/terracotta, warm) · geo: US
- Worked example: how we build a custom scope-and-sequence around one child's gaps
- Curriculum: K–12 mapped to Common Core (optional), placement, mastery-based pacing, parent reporting, portfolio
- Course link: elementary + middle-school · Siblings: 1,2,3,13

**Task 13 — Maths Tuition for Kids in the UK**
- slug: `online-maths-tuition-for-kids-in-uk` · theme: `mp-kids-uk` (sunny yellow/blue) · geo: GB
- audience: primary, KS1+KS2 (ages 5–11) · Worked example: why number bonds make mental maths fast (place-value logic)
- Curriculum: KS1/KS2 national curriculum, times tables fluency with understanding, fractions, reasoning+problem solving, Year 6 SATs readiness
- Course link: elementary masterclass · Siblings: 14,21,20,1

**Task 14 — Maths Tuition for Teens in the UK**
- slug: `online-maths-tuition-for-teens-in-uk` · theme: `mp-teens-uk` (purple/teal) · geo: GB
- audience: secondary, KS3+KS4 (ages 11–16) · Worked example: why the quadratic formula works (completing the square)
- Curriculum: KS3 → GCSE foundation+higher topics, algebra, geometry, ratio, probability, GCSE readiness
- Course link: high-school masterclass · Siblings: 17,22,23,15

**Task 15 — Maths Tuition for College / Sixth Form in the UK**
- slug: `online-maths-tuition-for-college-students-in-uk` · theme: `mp-college-uk` (charcoal/gold) · geo: GB
- audience: 16–19, sixth form/college, undergrad · Worked example: the limit idea behind differentiation
- Curriculum: A-Level pure+applied, university foundation maths, STEP signpost, proof
- Course link: college masterclass · Siblings: 18,19,16,14

**Task 16 — Maths Classes for Adults in the UK**
- slug: `online-maths-classes-for-adults-in-uk` · theme: `mp-adults-uk` (forest/bronze) · geo: GB
- audience: adults, returners, career-change · Worked example: what a percentage really is (everyday+work maths)
- Curriculum: numeracy refresher, Functional Skills signpost, GCSE resit support, stats for work, financial maths
- Course link: business-finance masterclass · Siblings: 24,17,15,4

**Task 17 — GCSE Maths Tuition**
- slug: `gcse-maths-tuition-online` · theme: `mp-gcse` (exam blue/green) · geo: GB
- Worked example: a higher-tier GCSE algebra question solved by reasoning
- Curriculum: AQA/Edexcel/OCR foundation+higher; number, algebra, ratio+proportion, geometry, probability, statistics; grades 1–9; resit support
- Course link: high-school masterclass · Siblings: 18,19,14,22

**Task 18 — A-Level Maths Tuition**
- slug: `a-level-maths-tuition-online` · theme: `mp-alevel` (deep teal/amber) · geo: GB
- Worked example: why integration reverses differentiation
- Curriculum: pure (algebra, functions, calculus, trig, vectors), statistics, mechanics; Edexcel/AQA/OCR; exam technique
- Course link: college masterclass · Siblings: 19,17,15,7

**Task 19 — Further Maths (A-Level) Tuition**
- slug: `further-maths-tuition-online` · theme: `mp-furthermaths` (indigo/cyan) · geo: GB
- Worked example: complex numbers as rotations (geometry of i)
- Curriculum: core pure (complex, matrices, proof by induction, polar), further mechanics/stats/decision; STEP/MAT signpost
- Course link: college masterclass · Siblings: 18,15,9,25

**Task 20 — 11 Plus Maths Tuition**
- slug: `11-plus-maths-tuition` · theme: `mp-elevenplus` (heritage navy/gold) · geo: GB
- audience: ages 9–11, grammar/independent entry · Worked example: a tricky 11+ ratio word problem solved by drawing it out
- Curriculum: GL+CEM style, arithmetic fluency, problem solving, time-pressured reasoning, non-verbal links
- Course link: elementary masterclass · Siblings: 23,21,13,14

**Task 21 — KS2 Maths Tuition (SATs)**
- slug: `ks2-maths-tuition-online` · theme: `mp-ks2` (bright green/orange) · geo: GB
- audience: Years 3–6 · Worked example: why long division works (repeated grouping)
- Curriculum: KS2 national curriculum, arithmetic+reasoning papers, Year 6 SATs, fractions/decimals/percentages
- Course link: elementary masterclass · Siblings: 13,22,20,17

**Task 22 — KS3 Maths Tuition**
- slug: `ks3-maths-tuition-online` · theme: `mp-ks3` (azure/magenta) · geo: GB
- audience: Years 7–9 · Worked example: why negative × negative = positive (pattern/number-line logic)
- Curriculum: KS3 national curriculum, building the bridge to GCSE, algebra foundations, ratio, geometry
- Course link: middle-school masterclass · Siblings: 17,14,21,23

**Task 23 — Common Entrance Maths (13+)**
- slug: `common-entrance-maths-tuition` · theme: `mp-commonentrance` (burgundy/cream) · geo: GB
- audience: 11+/13+ ISEB Common Entrance, independent senior schools · Worked example: a 13+ multi-step problem broken into clear steps
- Curriculum: ISEB CE 13+ levels 1–3, calculator+non-calculator, scholarship signpost
- Course link: middle-school masterclass · Siblings: 20,14,22,17

**Task 24 — Functional Skills Maths (adults)**
- slug: `functional-skills-maths-tuition-online` · theme: `mp-functionalskills` (steel blue/lime) · geo: GB
- audience: adults, Entry 3 / L1 / L2 · Worked example: working out a real budget/measurement task
- Curriculum: Entry Level 3, Level 1, Level 2; number, measure+shape, data handling; apprenticeship/college requirement context
- Course link: business-finance masterclass · Siblings: 16,17,4,15

**Task 25 — UKMT Maths Challenge / Olympiad**
- slug: `ukmt-maths-challenge-tutoring` · theme: `mp-ukmt` (black/gold, medal) · geo: GB
- Worked example: a Junior/Intermediate Challenge problem solved by an elegant insight
- Curriculum: Junior/Intermediate/Senior Maths Challenge, Kangaroo, BMO pathway; problem-solving heuristics
- Course link: olympiad masterclass · Siblings: 9,19,18,17

---

## Task 26: Routing — `netlify.toml` + `_redirects`

**Files:**
- Modify: `netlify.toml`
- Modify: `_redirects`

- [ ] **Step 1: Add clean-URL → file rules + `.html` → clean-URL redirects for all 25 slugs**

For each slug add to BOTH files (kept in sync per project rule). Pattern in `netlify.toml`:
```toml
[[redirects]]
  from = "/<slug>"
  to = "/src/pages/<slug>.html"
  status = 200

[[redirects]]
  from = "/<slug>.html"
  to = "/<slug>"
  status = 301
```
And the `_redirects` equivalent lines:
```
/<slug>            /src/pages/<slug>.html   200
/<slug>.html       /<slug>                  301!
```
> Project rule: NEVER use untested catch-all/splat redirects. Add only these explicit per-slug rules.

- [ ] **Step 2: Verify all 25 slugs are present in both files**

Run (PowerShell): for each slug `Select-String -Path netlify.toml,_redirects -SimpleMatch "/<slug>"` — confirm 2 files matched per slug.
Expected: every slug found in both `netlify.toml` and `_redirects`.

- [ ] **Step 3: Commit**
```bash
git add netlify.toml _redirects
git commit -m "feat(maths-seo): route 25 maths landing pages in netlify.toml and _redirects"
```

---

## Task 27: Sitemap

**Files:**
- Modify: `sitemap.xml`

- [ ] **Step 1: Add 25 `<url>` entries**

For each clean URL, append:
```xml
  <url>
    <loc>https://learn.modernagecoders.com/<slug></loc>
    <lastmod>2026-05-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
```

- [ ] **Step 2: Verify count + validity**

Run: `grep -c "<loc>" sitemap.xml` (should increase by 25) and `npx --yes xml-formatter sitemap.xml > /dev/null` (PowerShell: `$null`) to confirm well-formed XML.
Expected: 25 new `<loc>` lines; XML parses without error.

- [ ] **Step 3: Commit**
```bash
git add sitemap.xml
git commit -m "feat(maths-seo): add 25 maths landing pages to sitemap"
```

---

## Task 28: Final integrity sweep

**Files:** read-only audit across all 25 pages.

- [ ] **Step 1: No banned content anywhere**
Run: `grep -rlEi "₹|INR|rupee|4999|world.?s best|unlock your potential|in today.?s fast|look no further" src/pages/*maths* src/pages/*-usa* src/pages/*-uk* src/pages/sat-* src/pages/act-* src/pages/ap-* src/pages/gcse-* src/pages/a-level-* src/pages/11-plus-* src/pages/ks2-* src/pages/ks3-* src/pages/*olympiad* src/pages/*entrance* src/pages/*functional* src/pages/ukmt-* src/pages/algebra-* src/pages/geometry-* src/pages/further-*`
Expected: NO files listed.

- [ ] **Step 2: Every page links to a course page and triggers the callback**
Run a loop confirming each of the 25 files contains both `/courses/` and `openCallbackModal`.
Expected: 25/25 pass.

- [ ] **Step 3: Internal-link integrity** — confirm every sibling link target slug in each page corresponds to a real file in `src/pages/`. Fix any typo'd slug.
Expected: no broken sibling links.

- [ ] **Step 4: Each `<title>` and `<meta description>` is unique across the 25 pages**
Run: extract titles, `sort | uniq -d` → expect empty (no duplicates).

- [ ] **Step 5: Final commit (if fixes made)**
```bash
git add -A
git commit -m "fix(maths-seo): final integrity sweep across 25 maths pages"
```

---

## Self-Review (against spec)

- Spec §3 (25 URLs) → Tasks 1–25 cover all 25 exactly. ✓
- Spec §2 pricing (USD 100/40, no ₹) → Step A Course schema + Step C/Task 28 banned-content checks. ✓
- Spec §4 philosophy → Per-page sections 3,4,5 + "Banned in all prose" list. ✓
- Spec §5 (14 sections, clears doubts) → "Per-Page Section Order" applied in Step A. ✓
- Spec §6 (SEO/tech: schema, .md twin, geo, hreflang, routing, sitemap) → Step A, Step B, Task 26, Task 27. ✓
- Spec §7 (shared base CSS + per-page theme) → Task 0 + per-page theme classes. ✓
- Spec §8 (one page at a time, finished) → Tasks 1–25 each fully self-contained incl. verify + commit. ✓
- Spec §9 acceptance criteria → Task 28 sweep. ✓
- Placeholder scan: page params give concrete slug/theme/worked-example/curriculum/course/siblings per page — no TBDs. ✓
- Naming consistency: `openCallbackModal`, `/css/maths-pages.css`, `mp-root` + theme classes used consistently. ✓
