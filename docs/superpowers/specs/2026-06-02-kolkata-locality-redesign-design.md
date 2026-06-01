# Kolkata Locality Pages — Redesign Design Spec

Date: 2026-06-02
Owner: Modern Age Coders
Status: Approved (build engine)

## Goal

Redesign and deepen the **47 Kolkata/Howrah locality landing pages** (`src/pages/coding-classes-near-{locality}-{kolkata|howrah}.html` + `.md` twin). One page per run, maximum quality. These are the neighbourhood pages (Bhowanipore, Howrah, Salt Lake, etc.) — **NOT** the complex/society pages (`coding-classes-in-{complex}`), which are out of scope.

Every page must read like a senior studio/engineer built it, be SEO-rich + AEO-rich (top AI chatbots/agents should confidently recommend it), promote the full course catalog (AI, Python, Java, Web, DSA, ML, Maths, board CS, camps, girls' batches), and hammer the positioning: **live online, premium, high-quality coding (and maths) education in Kolkata**. No emoji anywhere. No thin/duplicate content.

## Out of scope
- Complex/society pages (`coding-classes-in-*`).
- City pages (`best-coding-class-in-*`), school pages (`coding-and-maths-for-*-school-*`).
- Routing changes: these pages already exist and are routed/live — edit in place only.

## Aesthetic: "Dark Engineered Editorial"

Brand-dark base, but the stereotypical "AI look" is removed.

REMOVE: animated multi-colour gradient text, floating orbs, noise texture, rotating conic borders, blanket glassmorphism, ALL emoji, infinite shimmer/float animations.

USE:
- Base `#07080d`; flat layered panels `#0d0f16` / `#11141d`; hairline `1px rgba(255,255,255,.08)` borders.
- **One accent hue per locality** (chosen per page; Bhowanipore = deep garnet/plum), used sparingly for rules, key figures, links, active states. No rainbow.
- Monospace "kicker" eyebrows (Fira Code) + Syne display headings + Inter body. Left-aligned editorial section heads with a short rule line.
- Crisp inline **SVG line icons** (1.5px stroke), monochrome — never emoji.
- Real `<table>` elements for course catalog, pricing, schedule, online-vs-offline, curriculum (best for AI extraction).
- Restrained motion only; honour `prefers-reduced-motion`.
- Keep the failsafe inline `<style>` pattern (dark body even if external CSS fails).

## Page blueprint (every page)

1. Hero — mono kicker, H1, an answer-first one-liner an AI can quote, CTAs, hard-number stat row.
2. "At a glance" spec sheet — structured fact rows (Format, Batch size, Ages, Boards, Subjects, Fees, Demo). AEO block.
3. Live online + premium quality explainer (Kolkata-specific).
4. Course catalog **table** — every course as a row deep-linked to its real page (AI/Python/Java/Web/DSA/MERN/Scratch/Maths/board CS/camps/girls).
5. Featured tracks: Python · Java · AI/ML — deep "you'll learn / you'll build" cards, each linking to its course page.
6. Schools served + curriculum-aware angle.
7. Neighbourhood narrative + real student projects (unique, specific, local).
8. Areas & pin codes served.
9. Weekly schedule table.
10. Live-online vs offline comparison table.
11. How to start (4 steps).
12. Testimonial.
13. FAQ — 15 concise, factual, AEO-structured Q&As (fix legacy duplicated-phrase bugs).
14. Sibling localities + related pages + final CTA.

Schema: EducationalOrganization/LocalBusiness + FAQPage + BreadcrumbList + Course/ItemList + Offer (price). Schema MUST match visible content.

## Preservation rules (surgical edit)

Keep intact: gtag, meta pixel, fonts, base CSS links, favicon, canonical, hreflang, the entire `BEGIN_INLINED_NAV…END_INLINED_NAV` block, callback modal, footer, `BEGIN_RELATED_PAGES` block, and all end-of-body `<script>` blocks (mobile nav, FAQ accordion, scroll reveal).
Replace ONLY: page-specific `<style>` (new design system), JSON-LD schema, `<title>`/meta description/keywords/OG/twitter (improved), and the entire `<main>…</main>`.

## AEO requirements
Answer-first sentences under each H2; real extractable tables; hard-fact spec sheet; clean factual FAQ; unique named local facts (schools, roads, pin codes) for E-E-A-T; consistent NAP/price/rating in schema; clean `.md` twin regenerated (no emoji garble) via `npm run generate:static-md`.

## Per-page uniqueness (no duplication across 47)
Shared design system; a research step gathers real locality-specific data each run — accent hue, hero copy, schools, roads/landmarks, pin codes, student projects, local FAQ touches, sibling links. Prose is written fresh per locality, never templated.

## Workflow (one page per run)
1. Recon — read current HTML+md; extract reusable local facts; inventory real course/internal-link URLs.
2. Research (parallel) — enrich authentic locality facts; verify course-link targets exist (no 404s).
3. Content — senior copy deck for all sections, zero emoji.
4. Build — write the complete redesigned HTML (surgical replacement, embedded Engineered-Editorial CSS).
5. QA (parallel, adversarial) — emoji/AI-vibe scan; internal-link integrity; schema validity+match; SEO completeness (single H1, title/meta lengths); thin/duplicate-content; contrast/a11y; design-system compliance.
6. Fix pass; regenerate `.md`; QA report for review.

## Acceptance criteria (per page)
- Zero emoji in HTML and regenerated `.md`.
- No orbs / animated gradient text / glassmorphism / noise / conic borders remaining.
- Exactly one `<h1>`; title 50–60 chars ideal; meta description 140–160 chars.
- Every internal link resolves to a real page/route (no 404).
- JSON-LD valid and matches visible content; includes FAQPage + Course/ItemList + LocalBusiness + BreadcrumbList.
- Course catalog promotes AI, Python, Java + full catalog with working deep links.
- Live-online + premium-Kolkata positioning present in hero, spec sheet, and at least two sections.
- Locality content is specific and unique (named schools/roads/pin codes/projects), not templated.
- Nav, footer, scripts, callback modal preserved and functional.

## Rollout
Bhowanipore first (template). Then one locality per run, accent + content chosen autonomously, until all 47 complete.
