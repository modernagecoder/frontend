# Tier 3 — International Maths Ladder — Design Spec

**Date:** 2026-07-06
**Source plan:** `marketing/50-HIGH-IMPACT-PAGES.md` Tier 3 (items 12-14, 24-27, 29-33, 37, 49). Phase-2 grades (item 50: 9th-12th, K-2) DEFERRED.
**User requirements locked:** depth ultra-SEO-rich content, ~1000-1500 lines per page, real course cards, strong layered CTAs, quality-first positioning (NEVER budget-led — see feedback memory), think deeply per page.

## Scope: 18 NEW pages + 11 country-page maths sections

Grade ladder (6, US-market, US spelling "math"): `/online-math-tutor-3rd-grade` `/online-math-tutor-4th-grade` `/online-math-tutor-5th-grade` `/online-math-tutor-6th-grade` `/online-math-tutor-7th-grade` `/online-math-tutor-8th-grade`
Exam boards (2, global): `/ib-maths-tuition-online` `/igcse-maths-tuition-online`
Country markets (3): `/online-maths-tuition-singapore` `/online-maths-tutoring-australia` `/online-math-tutor-canada`
Specialty US (7): `/summer-math-program-online` `/algebra-2-tutoring-online` `/precalculus-tutoring-online` `/calculus-tutoring-online` `/isee-ssat-math-prep` `/math-catch-up-program` `/singapore-math-method-tutoring`
IMPROVE: 11 `coding-classes-in-<country>` pages get a `cp-maths` section linking the relevant new pages.

All 18 slugs verified collision-free.

## Design system

Join the EXISTING maths cluster: shared `/css/maths-pages.css` (`mp-` prefix, Hanken Grotesk head / Lora serif / Inter body / JetBrains Mono), alternating `mp-section` / `mp-section--alt`, `.mp-wrap`, `.mp-eyebrow`, `.mp-price-grid` (featured 1:1 card), `.mp-btn mp-btn-primary/-ghost`, `openCallbackModal()` CTAs. Clone shell conventions from `src/pages/sat-math-tutoring-online.html` (474 lines — Tier 3 pages are ~2-3x deeper). Static premium USD pricing on-page: **$150/month 1-on-1 (featured) · $100/month small group · 8 live one-hour classes/month · cancel anytime · no registration fee**. New CSS additions (if needed) go in a small appended block in maths-pages.css, `mp3-` prefixed, once.

## The 19-section depth formula (EVERY page, ~1000-1500 lines)

1. **Hero**: eyebrow, keyword-bearing H1, direct-answer lead (AEO: the answer in the first 40 words), dual CTA (Book a free demo + anchor to topic map), trust chips (1-hr live classes · 8/month · 4.9 across 547 reviews · free demo).
2. **Answer-first box**: the 20-second answer to the page's core query.
3. **The real problem**: parent-specific pain for THIS level/market, written with genuine insight (why 6th-grade math breaks kids: the arithmetic-to-abstraction cliff, etc.).
4. **Signs checklist**: 8-10 concrete "signs your child needs this" observations.
5. **Our method for THIS level**: depth pedagogy applied specifically (4-6 cards).
6. **Worked example #1**: real math from this exact grade/syllabus solved step-by-step in prose+steps, showing HOW we teach it (bar model for 3rd grade, negative-number reasoning for 6th, IGCSE extended vectors, calculus limits, ISEE quant trap).
7. **FULL topic map**: the entire actual curriculum — Common Core domains w/ subtopics per grade; IB AA/AI x SL/HL structure + papers + IA; IGCSE 0580 Core/Extended + 0606 Additional papers; Singapore MOE primary/secondary + PSLE; Australian Curriculum + NAPLAN years + HSC/VCE/QCE; Canada provincial (Ontario/BC/Alberta); Algebra 2 / Precalc / Calc unit maps; ISEE/SSAT levels + question types. THE big SEO meat — tables/domain cards, comprehensive.
8. **Worked example #2**: a second, different-domain example (harder or contrasting).
9. **The learning journey**: phased plan (diagnose → rebuild foundations → advance → maintain/extend), what happens in month 1/2/3.
10. **One class hour, minute by minute**: what a 60-minute live class actually contains (warm-up retrieval, concept teaching, guided application, independent solve, recap + practice set).
11. **Honest fit**: who this genuinely fits and who it does not (credibility section).
12. **Course cards**: 2-3 REAL MAC maths courses with title, blurb, link `/courses/<slug>`. Slugs: elementary-mathematics-complete-masterclass, comprehensive-middle-school-mathematics-mastery, complete-high-school-mathematics-mastery, college-mathematics-complete-masterclass, olympiad-competition-mathematics-mastery (+ data-analytics/business-finance where apt). Pull exact display titles from `content/courses/data/*.json` at build time.
13. **Pricing**: premium quality-first framing ("one full hour of real teaching, twice a week"), $150 featured / $100 group, per-class math as value proof, guarantee link.
14. **Mentors + proof**: mentor depth pitch + ONLY real Google review quotes (the verified 8: Shewta Singh, Samridho Mondal, Ritu Kedia, Sonam Oswal, Shradha Saraf, Sonu Goyal, Ria Mukherjee, Vineeta Bhatter). NEVER invented quotes.
15. **Honest comparison** vs the alternatives for this intent (centers/apps/worksheets/local tutors — reuse verified Tier 2 fact base w/ sources + "as of July 2026").
16. **Parent FAQ**: 10-12 deep Q&As + matching FAQPage JSON-LD.
17. **Glossary**: 10-15 key terms for this level defined crisply (SEO-rich definitions block).
18. **Related pages**: link-pill row (grade neighbors chain 3rd↔4th↔...; every page links /best-online-math-tutoring-2026, /online-math-tutor-cost, /pricing, relevant vs- pages).
19. **Final CTA band**: dark, quality-led ("Watch one full hour of real teaching, free"), Book free demo + secondary link.

CTAs LAYERED: hero, after worked example #1 ("See this taught live"), pricing buttons, final band. All demo CTAs → /book-demo (or openCallbackModal per sibling convention).

## Hard constraints

- Quality-first positioning everywhere (depth/interactive/1-hour classes students wait for; price as closing value proof only).
- Facts: curriculum content described from real syllabi (Common Core, CIE, IB, MOE, ACARA, provincial); NO invented statistics (no "students improve X%"); competitor prices only from the verified Tier 2 fact base with sources+date; real quotes only.
- US-market pages: "math", static USD. UK/AU/SG/IB/IGCSE pages: "maths". Canada: "math". No INR anywhere on these pages; no international-pricing.js needed (static USD).
- Head SEO per page: title <=60 chars, description <=155, canonical, hreflang trio, OG/Twitter, md alternate, mac-org-ld block, FAQPage + BreadcrumbList (+ Course schema NOT added — course pages own that).
- Routing: BOTH `_redirects` + `netlify.toml` + `sitemap.xml` + `.md` twin (+ twin routes) per page — reuse add-routes.js (anchored on /instructors block).
- No em dashes, no emojis, age span "6 to 67". Browser-verify (desktop+mobile, zero console errors) then commit, one commit per page. User pushes.

## Item 49 — country-page maths sections

One `cp-maths`-style section injected into each of the 11 `coding-classes-in-<country>.html` pages after their existing featured block: heading "Mathematics, taught with the same depth", 2-3 sentence premium maths pitch (live 1-hour classes, $100 group / $150 1-on-1), and 3-4 link pills to the market-relevant new pages (UK→IGCSE/IB+gcse existing; AU→australia page+IB; SG→singapore+singapore-method; CA→canada+grade ladder; US→grade ladder+summer+algebra2; UAE→existing UAE maths pages+IB; others→IB/IGCSE+grade ladder). Match each page's cp- accent (inline styles or existing cp classes). Commit as one batch after inspection of the cp- structure.

## Existing-cluster gotcha (flagged, NOT fixed this run)

`sat-math-tutoring-online.html` (and possibly siblings) carry anonymous unverifiable quotes ("Parent of a junior, New Jersey"). User to decide later whether to sweep the old cluster; Tier 3 pages use only the verified 8.

## Build order

Grade ladder 3rd→8th (template-setter = 3rd grade) → summer → catch-up → algebra-2 → precalculus → calculus → isee-ssat → singapore-method → ib → igcse → singapore → australia → canada → country sections (item 49) → final sweep (routing parity x18, sitemap +18, link check, console pass).

## Out of scope

Item 50 (9th-12th, K-2); fixing old cluster quotes; new courses; backend; Tier 4-5.
