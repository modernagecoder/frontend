# 50 High-Impact Pages — Modern Age Coders (learn.modernagecoders.com)

> Recovered from the plan-mode session on 2026-07-02 20:49 UTC (~02:19 AM IST, 3 July 2026).
> This is the strategy plan only. The fuller per-page spec (step 1 of Implementation) was never generated.

## Context

User gets ~100 genuine leads/day. Goal: a ranked list of 50 pages (new + improvements) to multiply sales. Strategic answers locked in: **(1) International first** ($40/$100 coding, $100/$150 maths — 4–8x India revenue), **(2) Maths tuition + kids/teens coding convert best**, **(3) Price objection is the #1 drop-off**.

Deep exploration completed (3 agents): full inventory of 472 routed pages / 664 sitemap URLs / 73 courses / 83 blogs / 173 resources; complete funnel map (leads POST to Vercel backend, Razorpay checkout, WhatsApp intl path); all ~20 strategy docs extracted (VISIBILITY-SEO-AEO-PLAN, planbyclaude, company-profile, etc.).

**Core insight:** the price objection is a market-mismatch signal — at ₹4,999 India finds it expensive, but at $100–150/mo the site undercuts Mathnasium ($200–425/mo), Kumon ($150–220/subject), Juni (~$250/mo), Cuemath US (~$249/mo) by 2–5x, and no page ever says so. Plus all 100 daily leads squeeze through 4 never-optimized conversion surfaces (pricing, book-demo, missing thank-you moment, course-template intl path = WhatsApp-only).

## Verified funnel gaps (zero pages exist for these)

/team, instructors, founder bio, free-trial, thank-you (lead), outcomes/results, guarantee, cost/"how much", grade-level maths, IB global, IGCSE maths, Singapore/Australia/Canada maths, Scratch/Roblox/Minecraft landings, intl competitor comparisons, email capture anywhere (syllabus PDF is ungated).

## Locked constraints respected

- No new India city/locality pages (user paused these in VISIBILITY plan).
- Intl pages never show INR (countryprompt rule).
- No /reviews aggregate until a real review source exists (compliance flag).
- Off-site items (GBP, Trustpilot…) excluded — pages only.

## The Ranked 50

Tier 1 — Conversion multipliers (touch all ~100 leads/day):
1. IMPROVE `/pricing` — rebuild as value-justification: per-class math ($150/mo ≈ $19/class vs Mathnasium $200–425/mo), comparison table, risk reversal
2. NEW `/thank-you` — post-lead next-steps page (today: inline text only); what-happens-next + WhatsApp CTA + demo-prep + proof
3. IMPROVE `/book-demo` — real scheduling (timezone-aware slots), what-to-expect, teacher preview to cut ghosting
4. NEW `/team` — founder Shivam Khemka + instructor bios (planned in VISIBILITY, never built; E-E-A-T bottleneck)
5. IMPROVE course template intl checkout — USD booking path (intl buyers currently get WhatsApp-only modal); fixes all 72 course pages at once
6. IMPROVE `/success-stories` — 8–10 attributed case studies + Review/Person schema (planned, unbuilt)
7. NEW `/guarantee` — 7-day money-back risk-reversal page (recommended in company-profile, absent)
8. IMPROVE homepage — geo-aware intl variant (detection JS exists; intl visitors still see India-first messaging)

Tier 2 — Price-objection killers:
9. NEW `/online-math-tutor-cost` (US cost-transparency AEO)
10. NEW `/modern-age-coders-vs-mathnasium`
11. NEW `/modern-age-coders-vs-kumon`
17. IMPROVE `/coding-fee-calculator` — add USD + maths tiers
19. NEW `/modern-age-coders-vs-outschool`
20. NEW `/best-online-math-tutoring-2026` (honest listicle AEO)
38. NEW `/coding-classes-for-kids-cost` (US)
39. NEW `/modern-age-coders-vs-cuemath` (global maths)
40. NEW `/modern-age-coders-vs-juni-learning`
41. NEW `/modern-age-coders-vs-tynker`
42. NEW `/best-online-coding-classes-for-kids-2026` (AEO listicle)
43. NEW `/private-math-tutor-vs-online-tutoring`
45. NEW `/coding-classes-cost-india-2026`
46. NEW `/modern-age-coders-vs-codingal`

Tier 3 — International maths (highest-ticket SKU):
12. NEW `/online-math-tutor-{3rd..8th}-grade` (6 pages, mirrors python-for-age pattern)
13. NEW `/ib-maths-tuition-online` (global; only UAE exists)
14. NEW `/igcse-maths-tuition-online`
24. NEW `/online-maths-tuition-singapore`
25. NEW `/online-maths-tutoring-australia` (NAPLAN/HSC/VCE)
26. NEW `/online-math-tutor-canada`
27. NEW `/summer-math-program-online` (US summer NOW — fastest time-to-revenue)
29. NEW `/algebra-2-tutoring-online`
30. NEW `/precalculus-tutoring-online`
31. NEW `/calculus-tutoring-online`
32. NEW `/isee-ssat-math-prep` (wealthiest US parent segment)
33. NEW `/math-catch-up-program` (learning-loss emotional intent)
37. NEW `/singapore-math-method-tutoring` (the METHOD, distinct from #24)
49. IMPROVE 11 country pages — add maths sections (currently coding-only)
50. NEW `/online-math-tutor-{9th..12th}-grade` + K–2 (phase 2 of grade ladder)

Tier 4 — International kids coding:
21. NEW `/scratch-coding-classes-for-kids` (planned, unbuilt)
22. NEW `/roblox-coding-classes-for-kids`
23. NEW `/minecraft-coding-classes-for-kids`
28. NEW `/online-coding-summer-camp` (intl-facing; US camps $200–500/wk vs $60)
34. NEW `/online-coding-classes-for-kids-usa`
35. NEW `/online-coding-classes-for-kids-uk`
36. NEW `/homeschool-coding-curriculum` (maths twin exists, proves pattern)

Tier 5 — Trust/AEO + funnel completion:
15. NEW `/free-trial`
16. NEW `/results` (uses published earned-not-given pass rates)
18. NEW `/parent-faq`
44. NEW gated lead magnet `/free-coding-starter-kit` + gate syllabus PDF (site has ZERO email capture)
47. NEW `/best-age-to-start-coding` (planned AEO)
48. NEW `/coding-vs-maths` (owns core differentiator)

## Implementation (on approval)

1. Write the full deliverable to `marketing/50-HIGH-IMPACT-PAGES.md`: all 50 in ranked order, each with — slug, NEW/IMPROVE, target keywords/intent, why it multiplies sales (citing the codebase fact), content spec (sections, proof elements, CTA strategy, internal links to existing pages/courses), pricing display rules (intl = USD only), effort (S/M/L), and a suggested 4-phase build order (Phase 1 = items 1–8 + #27 seasonal; Phase 2 = price-objection set; Phase 3 = intl maths ladder; Phase 4 = kids coding + AEO).
2. Include the "cut candidates" appendix (15 near-misses with one-line reasons) and the strategic insight summary.
3. Present the ranked list + key insights in chat.

No site code is modified in this task — the deliverable is the strategy document only. Building the pages themselves is follow-up work the user can commission per phase.

## Verification

- Every NEW slug grep-checked against `src/pages/`, `_redirects`, and `sitemap.xml` to guarantee zero collisions with the 472 existing pages (already verified for all 50 during planning).
- Every IMPROVE item cites the exact existing file (e.g. `src/pages/pricing.html`, `content/courses/template/course-template.html`, `src/js/international-pricing.js`).
- Cross-check against locked decisions list above.

## Critical files (for the follow-up build work)

- `src/pages/pricing.html`, `src/pages/book-demo.html`, `src/pages/success-stories.html`, `src/pages/index.html`
- `content/courses/template/course-template.html` + `src/js/enrollment-modal.js`, `src/js/course-payment.js`, `src/js/international-pricing.js`
- Routing: `_redirects` + `netlify.toml` (both), `sitemap.xml`, plus `.md` twin per new page (AEO convention)
- Proven templates to clone: UAE/USA/UK maths pages, `python-for-N-year-olds` cluster, country-page `cp-` system
