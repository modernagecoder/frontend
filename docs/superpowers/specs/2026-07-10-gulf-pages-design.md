# Gulf Pages Cluster: 20 SEO Landing Pages for UAE, Saudi Arabia, Qatar

**Date:** 2026-07-10
**Status:** Approved by owner (audience, architecture, page map, design identities, anatomy)
**Goal:** 20 high-quality, SEO-rich landing pages promoting AI, Python, and coding courses to Gulf audiences. Bring organic traffic and demo-booking / WhatsApp leads.

## Decisions made with owner

1. **Audience:** Both parents and professionals, parent-leaning. Most pages target parents of kids/teens (largest Gulf search volume, especially Indian/expat families). The six Python/AI topic pages carry the adult/professional targeting with dedicated sections.
2. **Architecture:** Hub-and-spoke. Saudi Arabia and Qatar get new country hub pages (zero existing coverage). UAE already has a hub (`/coding-classes-in-uae`), so its budget goes entirely to spokes.
3. **Design:** Three new country design identities, one shared CSS file per country, per-page hero/layout variation. No emoji, no flashy/AI look, no dark-neon, light backgrounds, SVG icons only, no em dashes.
4. **Course section near the top:** immediately after the hero on every page (owner requirement).

## The 20 pages

All files in `src/pages/`, clean URLs (no .html), one `.md` twin each.

### UAE (8 pages) — spokes of existing hub `/coding-classes-in-uae`
| # | Slug | Primary keyword | Lean |
|---|------|-----------------|------|
| 1 | `coding-classes-in-dubai` | coding classes in Dubai | parents + general |
| 2 | `coding-classes-in-abu-dhabi` | coding classes in Abu Dhabi | parents + general |
| 3 | `coding-classes-in-sharjah` | coding classes in Sharjah | parents + general |
| 4 | `coding-classes-for-kids-in-dubai` | coding classes for kids in Dubai | parents |
| 5 | `python-classes-in-dubai` | python course in Dubai | professionals + teens |
| 6 | `ai-classes-in-dubai` | AI course in Dubai | professionals + teens |
| 7 | `python-for-kids-in-dubai` | python for kids Dubai | parents |
| 8 | `ai-classes-for-kids-in-uae` | AI classes for kids UAE | parents |

### Saudi Arabia (7 pages)
| # | Slug | Primary keyword | Lean |
|---|------|-----------------|------|
| 9 | `coding-classes-in-saudi-arabia` | coding classes in Saudi Arabia | HUB |
| 10 | `coding-classes-in-riyadh` | coding classes in Riyadh | parents + general |
| 11 | `coding-classes-in-jeddah` | coding classes in Jeddah | parents + general |
| 12 | `coding-classes-in-dammam` | coding classes in Dammam / Khobar / Eastern Province | parents + general |
| 13 | `coding-classes-for-kids-in-riyadh` | coding classes for kids in Riyadh | parents |
| 14 | `python-classes-in-saudi-arabia` | python course Saudi Arabia | professionals + teens |
| 15 | `ai-classes-in-saudi-arabia` | AI course Saudi Arabia | professionals + teens |

### Qatar (5 pages)
| # | Slug | Primary keyword | Lean |
|---|------|-----------------|------|
| 16 | `coding-classes-in-qatar` | coding classes in Qatar | HUB |
| 17 | `coding-classes-in-doha` | coding classes in Doha | parents + general |
| 18 | `coding-classes-for-kids-in-doha` | coding classes for kids in Doha | parents |
| 19 | `python-classes-in-qatar` | python course Qatar | professionals + teens |
| 20 | `ai-classes-in-qatar` | AI course Qatar | professionals + teens |

## Design identities (one per country)

Shared constraints for all three: light backgrounds, editorial not flashy, no emoji anywhere, no em/en dashes anywhere, SVG icons only, no purple/neon "AI look," Arabic-geometry influence as subtle motif never pastiche, fully responsive, system-fallback-safe Google Fonts.

- **UAE "Meridian"** (`src/css/gulf-ae.css`, prefix `gae-`): paper-white base, deep ink blue (#1B2A4A range) + warm brass (#A67C2E range) accent, fine architectural grid lines, high-contrast serif display + clean grotesk body. Confident, international, premium.
- **Saudi "Sadu"** (`src/css/gulf-sa.css`, prefix `gsa-`): warm ivory base, deep maroon/terracotta (#7A2E2E range) + palm green (#2E5E3F range) accents, subtle Al-Sadu-inspired geometric band motifs as section dividers, strong slab-serif headings. Rooted, warm, family-first.
- **Qatar "Pearl"** (`src/css/gulf-qa.css`, prefix `gqa-`): soft alabaster base, deep Gulf teal (#155E63 range) + pearl grey, generous whitespace, refined serif, thin rules, museum-label aesthetic. Quiet luxury.

Hex values above are directional ranges; final palette tuned during build for WCAG AA contrast. Per-page variation comes from hero composition and section emphasis, not from breaking the identity.

## Page anatomy (every page, top to bottom)

1. **Standard inlined nav** (BEGIN_INLINED_NAV block copied from a current page).
2. **Hero:** keyword H1, honest value line, primary CTA "Book a Free Demo" (scrolls to form) + secondary WhatsApp CTA, trust line "4.9 rating across 547+ Google reviews" (real GMB figure).
3. **Courses section (immediately after hero):** real course cards with real thumbnails, grouped by age band (Kids / Teens / College & Professionals) under clear subheadings with anchor pills (no JS tabs; simple and robust), linking to real `/courses/<slug>` pages. Featured set drawn from: python-ai-kids, vibe-coding-for-kids, ai-tools-kids, python-teens, ai-ml-teens, vibe-coding-for-teens, python-mastery-college, python-ai-automation-college, ai-ml-college, gen-ai, codex-claude-code-adults/teens. Topic pages weight their subject (Python pages lead with Python tracks, AI pages with AI tracks).
4. **How live classes work in [country]:** live 1-hour classes, small batches (5-8), evening/weekend Gulf-friendly slots, English-medium, real projects students keep. No "recorded sessions" claims.
5. **Python/AI depth section:** what students actually learn and build, real tools. On the six topic pages this expands into a fuller syllabus arc (beginner to advanced) and a professionals subsection (career context stated honestly, no salary promises).
6. **Why families in [country] choose us:** honest feature grid (expert instructors, small batches, project-based, certificates, progress updates, free demo). No invented stats or enrollment numbers.
7. **Reviews:** ONLY the 8 real verified reviews (Sonam Oswal, Ria Mukherjee, Krishnam Bhatter, Sonu Goyal, Shradha Saraf, Poonam Rathore, Samridho Mondal, Shewta Singh), 3-6 per page, honest framing: live online, same batches as our community worldwide, link to /love.
8. **Pricing (near bottom, quality-first rule):** $40/month group, $100/month 1-on-1, with approximate local equivalents (about AED 150, SAR 150, QAR 145). No hidden fees, free demo first. Prices are hardcoded USD-first; do NOT include `international-pricing.js` on these pages (nothing to convert, same exclusion pattern as real-coding-classes).
9. **Country FAQ (6-8 questions) with FAQPage schema:** school-system fit (CBSE/Indian, British, American, IB schools in that country), class timings in local timezone, English-medium, online delivery, payment options, age ranges, free demo. All answers honest.
10. **Final CTA + demo form** (standard form markup with correct unique area id per page) and standard inlined footer.

Hubs additionally include: city links block (their spokes), country-level intro, and a link back to /courses. City/topic spokes link up to their hub and sideways to 2-3 siblings.

## SEO / technical

- Unique title (55-65 chars), meta description (150-160), OG/Twitter tags, canonical `https://learn.modernagecoders.com/<slug>`.
- Schema per page: EducationalOrganization (site standard), FAQPage, BreadcrumbList. NO AggregateRating (site-wide rule until sourced from a real platform). No fabricated review schema.
- `.md` twin per page via `npm run generate:static-md` (adds the alternate link tag automatically); twins committed.
- Routing: every page added to BOTH `_redirects` AND `netlify.toml` (both must stay in sync) + `sitemap.xml`. Pages 404 without explicit routing.
- Internal links INTO the cluster: existing `/coding-classes-in-uae` page gets a small "Explore by city" links block to the 8 new UAE spokes. Hubs listed in sitemap.
- Word count target: 2,500-4,000 words of genuinely useful, country-specific content per page. No spun/templated-sounding copy; each page written for its keyword and audience.
- Saudi pages may reference Vision 2030 / tech-economy context honestly; Qatar pages may reference National Vision 2030 / education focus; UAE pages the schools/tech-hub context. No invented partnerships or approvals.

## Integrity rules (hard constraints)

- Only the 8 real verified reviews; never invent names, quotes, outcomes, scores, employers, or localities.
- Real 4.9 / 547+ Google review figures only.
- No invented student projects with named personas; describe curriculum projects as "what students build in the course" (course-derived, real).
- No placement/job guarantees, salary promises, refund promises, or "recorded sessions" claims.
- No emoji, no em/en dashes, quality-first positioning (price appears late as value proof).

## Build plan (summary)

1. Three CSS identity files first.
2. Build hub pages (saudi-arabia, qatar) as the flagship implementations of Sadu and Pearl; Dubai city page as the Meridian flagship.
3. Roll out remaining pages per country, varying hero/layout per page.
4. Wire routing (_redirects + netlify.toml + sitemap.xml) for all 20.
5. UAE hub gets spoke-links block.
6. `generate:static-md` for twins.
7. Verify each page in browser (desktop + mobile widths, 0 console errors), sweep for emoji/dashes/fabrication markers, check routing parity.
8. Commit in reviewable chunks (CSS, then per-country batches, then routing+twins).

## Success criteria

- 20 pages live, all routed (no 404s), in sitemap, with twins.
- Course section visible immediately after hero on every page.
- Zero emoji, zero em/en dashes, zero fabricated content, zero console errors.
- Three visually distinct, non-AI-looking, light editorial identities.
- Each page has unique 2,500+ word content targeting its keyword.
