# Tier 3 International Maths Ladder Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: superpowers:executing-plans. The 19-section depth formula, fact rules, scope and constraints live in the spec `docs/superpowers/specs/2026-07-06-tier3-maths-ladder-design.md` — every task implicitly includes them. ~1000-1500 lines per page, ultra SEO-rich, quality-first positioning.

**Goal:** 18 deep maths landing pages joining the existing `maths-pages.css` (`mp-`) cluster + maths sections on 11 country pages.

**Mechanics:** extract head/nav/footer shell from `src/pages/sat-math-tutoring-online.html` into `t3-template.html` with tokens ({{TITLE}} {{DESC}} {{SLUG}} {{OG_TITLE}} {{OG_DESC}} {{SCHEMA}} {{MAIN}}); reuse render-cx.js pattern (new render-t3.js) + add-routes.js (idempotent, /instructors anchor). Per page: main content authored in 2 scratchpad parts (sections 1-10, 11-19) then concatenated; FAQPage+Breadcrumb schema file; config json; render; hand-write `.md` twin (~120 lines, mirrors key sections); add routes; browser-verify (1440+390, 0 console errors, FAQ toggle, JSON-LD parses); commit.

**Course cards (real slugs):** elementary-mathematics-complete-masterclass "Complete Elementary Mathematics Masterclass"; comprehensive-middle-school-mathematics-mastery "Complete Middle School Mathematics Mastery Program"; complete-high-school-mathematics-mastery "Complete High School Mathematics Mastery Program (Grade 9 to 12)"; college-mathematics-complete-masterclass "Complete College Mathematics Masterclass"; olympiad-competition-mathematics-mastery "Complete Olympiad & Competition Mathematics Mastery Program". Map: grades 3-5→elementary+middle+olympiad; 6-8→middle+high+olympiad; alg2/precalc→high+college; calculus→high+college; IB/IGCSE→high+college; SG/AU/CA→elementary+middle+high; summer/catch-up→elementary+middle+high; ISEE/SSAT→elementary+middle+olympiad; sg-method→elementary+middle.

### Tasks (one commit each)
1. Foundation: t3-template.html + render-t3.js + (if needed) `mp3-` CSS additions (course-card grid, glossary grid, signs checklist, minute-by-minute timeline, worked-example block) appended once to maths-pages.css.
2. /online-math-tutor-3rd-grade — TEMPLATE-SETTER, full 19 sections, Common Core grade 3 domains (OA, NBT, NF, MD, G) fully mapped; bar-model worked examples.
3-7. Grades 4th, 5th, 6th, 7th, 8th — same formula, grade-specific domains + examples (4th: multi-digit mult/division, fraction equivalence; 5th: decimals, volume, fraction ops; 6th: ratios, negative numbers, expressions; 7th: proportionality, rational numbers, probability; 8th: linear equations, functions, Pythagorean).
8. /summer-math-program-online — catch-up + get-ahead tracks, 8-week structure.
9. /math-catch-up-program — diagnostic-first, gap-repair journey.
10. /algebra-2-tutoring-online — unit map (functions families, polynomials, rationals, exponentials/logs, trig, sequences, probability).
11. /precalculus-tutoring-online — trig deep, vectors, matrices, limits preview.
12. /calculus-tutoring-online — limits, derivatives, integrals, applications; AP Calc AB/BC framing.
13. /isee-ssat-math-prep — both tests' levels + question types (QR vs achievement).
14. /singapore-math-method-tutoring — CPA approach, bar modeling, number bonds; the METHOD.
15. /ib-maths-tuition-online — AA vs AI, SL vs HL, papers, IA exploration, global.
16. /igcse-maths-tuition-online — CIE 0580 Core/Extended papers, 0606 Additional, grading.
17. /online-maths-tuition-singapore — MOE syllabus, PSLE, secondary streams, timezone fit.
18. /online-maths-tutoring-australia — Australian Curriculum, NAPLAN 3/5/7/9, HSC/VCE/QCE, timezone fit.
19. /online-math-tutor-canada — provincial (Ontario, BC, Alberta), EQAO, timezone fit.
20. Item 49: inspect cp- structure on one country page; inject "Mathematics, taught with the same depth" section + market-mapped link pills into all 11; verify 3 samples; one commit.
21. Final sweep: routing parity x18, sitemap +18, internal link resolution, console pass on all, memory update.
