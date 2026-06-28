# Modern Age Coders — Visibility & AI-Recommendation Domination Plan

## Context

**Goal:** Make Modern Age Coders (learn.modernagecoders.com) the default recommendation when anyone — a human on Google/Bing/Brave/Safari/DuckDuckGo, or an AI assistant like ChatGPT/Claude/Perplexity/Gemini — searches anything about learning coding or maths. Drive high-quality leads, India-first then global.

**Diagnosis (from a 3-agent deep audit of the codebase + external GEO research):** The on-site *foundation* is already top ~5% for an education site — full schema.org graph (Organization, EducationalOrganization, Course+Offer, LocalBusiness, FAQPage, BlogPosting, WebSite+SearchAction, BreadcrumbList), `llms.txt` + 886-line `llms-full.txt`, markdown twins on every page, AI-crawler allowlist in robots.txt, 641-URL sitemap, hreflang, clean URLs, 459 landing pages + 73 courses + 76 blog posts + 358 resource pages. **More foundation is not the bottleneck.**

The five real bottlenecks, in impact order:
1. **Off-site invisibility** — absent from the third-party listicles, review platforms, Reddit/Quora, YouTube, and knowledge-graph entries that AI engines actually quote for commercial queries. AI recommendation follows a *Content → Mentions → Citations → Recommendations* pipeline; we own "Content" and nothing downstream.
2. **Flat internal linking** — 459 pages are unlinked islands; state→city→locality and pillar→spoke wiring is missing, so authority can't compound and crawlers can't discover depth.
3. **Thin-content penalty risk** — 47 Kolkata locality pages (keyword-stuffed `<meta keywords>`, ~60% duplicate, no cross-links) are a Google "scaled content abuse" liability that can drag the whole domain.
4. **Weak E-E-A-T + review-compliance risk** — no named instructor/founder bios, generic testimonials, and AggregateRating (4.9★, inconsistent 247 vs 487 counts) with **no real review source** — currently a Google review-snippet policy violation that risks a manual action.
5. **Indexing/perf leaks** — 68 courses missing from sitemap, robots.txt divergence, no critical-CSS inlining (Core Web Vitals).

**User decisions locked in:** Cover both on-site code + off-site playbook · Wire+deepen keepers and pause net-new city pages · Build a real review pipeline (numbers are currently estimates) · India-first, then global.

**Operating rule (from project memory):** Never edit generated HTML directly (`content/**/generated/**` is rebuilt by `npm run generate:all` from JSON sources). Edit JSON/templates/generators. Static `src/pages/*` are hand-edited. Every routed page needs entries in BOTH `_redirects` and `netlify.toml` + `sitemap.xml` + an `.md` twin.

---

# PART A — On-site (code) work in the repo

## Tier 0 — Compliance & leak fixes (Week 1, low effort, high risk-reduction)

**A0.1 — Make review schema honest (CRITICAL, do first).** The site asserts `AggregateRating` (4.9★, 247–487 reviews) with no verifiable review source, and About-page testimonials ("Priya Sharma", "Rahul Mehta", "Amit Patel") read as placeholders. This violates Google's review-snippet policy (self-serving ratings) and undermines AI trust.
- Remove `AggregateRating` from `Organization`/`LocalBusiness`/`Course` JSON-LD everywhere until backed by a real review platform — OR keep only genuinely-sourced numbers. Files: `src/pages/index.html` (~lines 60–126), all `src/pages/best-coding-class-in-*.html`, `src/pages/coding-classes-in-*.html`, `content/courses/template/course-template.html`, city-page generator/template.
- Replace generic testimonials in `src/pages/about.html` with real, attributed ones (first name + age/class + city + specific outcome) as they're collected.
- Reconcile any remaining counts so they're consistent site-wide.
- Re-add `AggregateRating` **sourced from the real Google Business Profile / Trustpilot** once Part B reviews exist (Tier B1).

**A0.2 — Fix robots.txt divergence.** `netlify.toml` sets `publish = "."`, so root `/robots.txt` is served and `/public/robots.txt` is dead but diverged (missing `/api/` disallow + AI-crawler rules). Delete `public/robots.txt` (or make it identical to root). Keep one source of truth.

**A0.3 — Close the sitemap leak.** Main `sitemap.xml` (641 URLs) + `content/courses/generated/sitemap.xml` only lists **5 category URLs** — the 68 individual course pages are absent. Extend the course sitemap generator to emit `/courses/{slug}` for all courses with `lastmod`; ensure city/state/locality/topic hubs, `/course-atlas`, and new hub pages (Tier 1) are all in `sitemap.xml`. Confirm `sitemap-resources.xml` rewrite still resolves.

**A0.4 — Strip spam signals.** Remove the keyword-stuffed `<meta name="keywords">` tags from locality/city pages (ignored by Google, reads as spam). Standardize `<meta robots>` to the rich-snippet variant already on city pages (`max-image-preview:large, max-snippet:-1`).

## Tier 1 — Internal-linking architecture (Weeks 1–4, highest on-site ROI)

Build a **hub-and-spoke graph** so 459 pages stop being islands. Prefer a reusable approach over hand-editing 459 files.

**A1.1 — Reusable "related links" block + injection script.** Create one partial/snippet (e.g. `components/related-links.html`) and a Node script that injects a contextual cross-link section into each cluster page, driven by a relationship map derived from existing `netlify.toml`/`_redirects` city↔state data:
- **State page** → links to all its city pages ("Our coding classes across {State}").
- **City page** → links to parent state + its localities + 4–6 sibling cities ("Nearby cities / Neighbourhoods we serve").
- **Locality page** → links up to parent city + parent state + 3–5 sibling localities.
- **Topic spoke** (each Java/C++/AI-ML/Maths page) → links to its pillar + 3 related spokes.

**A1.2 — Hub/index pages.** Ensure these exist, are content-rich, in nav/footer, and in sitemap:
- City hub: enhance `/coding-classes-in-india` into a true index linking all 131 cities grouped by state.
- Topic pillars: confirm/establish pillars for AI-ML, Java (`best-java-classes-in-india` exists), C++ (pillar exists), Python, Maths — each linking all spokes; spokes link back.
- `/course-atlas` (exists) and `/courses` — link prominently from homepage hero/section, not just footer.

**A1.3 — Homepage as a discovery hub.** Surface top-10 cities, the topic pillars, and the city/course hubs from `src/pages/index.html` so crawlers hit hubs before deep pages.

## Tier 2 — Thin-content remediation (Weeks 3–6, penalty-risk removal)

**A2.1 — Deepen the keeper localities.** Pick the top ~12 Kolkata localities by intent (Park Street, Salt Lake, New Town, Ballygunge, Behala, Howrah, etc.). Give each genuinely unique content: named local schools, commute/board context, locality-specific pricing reality, and (later) a local testimonial. Remove duplicate boilerplate.
**A2.2 — Consolidate or no-index the rest.** Lower-intent localities: either merge into a richer parent "Kolkata neighbourhoods" section or set `noindex` until differentiated. Goal: no page survives that's <60% unique.
**A2.3 — Pause net-new city pages** until A1 wiring + A2 differentiation ship (user decision). City pages keep their genuine local narratives + get cross-links + one unique data point each.

## Tier 3 — E-E-A-T depth (Weeks 3–6, trust = ranking + AI-citation confidence)

**A3.1 — Founder/instructor authority.** Create `src/pages/team.html` (`/team` or `/instructors`): named founder **Shivam Khemka** bio, credentials, teaching philosophy, photo; key mentors. Add `Person` (founder) to Organization schema and `sameAs` his LinkedIn. Wire into nav/footer/sitemap/`.md` twin/redirects.
**A3.2 — Real success stories.** Rebuild `src/pages/success-stories.html` with 8–10 detailed, attributed case studies (name, age/class/school, course, measurable outcome). Add `Review`/`Person` schema once consent obtained.
**A3.3 — NAP + address.** Add the registered "The Mahaviras Education LLP" business address to footer + `src/pages/about.html` + `src/pages/contact.html` + `LocalBusiness` schema; state the timezone (IST) on hours. Enables GBP + local trust.
**A3.4 — Blog author bylines.** Replace `author: "Modern Age Coders"` with real named authors in blog JSON sources + `blog-template.html` `Person` schema.

## Tier 4 — AEO content the AIs quote (Weeks 4–8)

**A4.1 — Sharpen the differentiator.** Drop the contestable "world's first/only coding+maths" claim (Cuemath contests it). Reframe around the defensible wedge: **small 4–8 live batches + maths-first engineering rigor + real projects from day one + Vibe Coding/AI**. Update `src/pages/index.html` H1 to keyword-bearing + wedge: e.g. *"Live Online Coding & Maths Classes for Kids, Teens & Adults — Small 4–8 Batches."* Update `llms.txt`, `llms-full.txt`, `about.html` consistently.
**A4.2 — Comparison & data pages (high AI-citation value).** Create honest, numeric-dense, FAQ-rich pages that AI extracts:
- `/modern-age-coders-vs-whitehat-jr-cuemath-codingal` — fair feature/price/batch-size comparison.
- "How much do coding classes cost in India (2026)" data page; "Best age to start coding"; "Coding vs Maths — why both."
Each: FAQPage schema (≈20% AI citation weight), specific numbers, `dateModified` kept fresh.
**A4.3 — Freshness cadence.** Update money/hub pages monthly and bump `lastmod` — pages refreshed within 30 days get ~2.5× more Perplexity citations. Add a lightweight monthly "refresh" checklist.
**A4.4 — Keep `llms-full.txt` authoritative** — add the comparison data, real review stats (once live), and instructor bios; maximize numeric density.

## Tier 5 — Core Web Vitals (Weeks 6–8)

Inline critical above-the-fold CSS on `src/pages/index.html`; defer the 6 render-blocking stylesheets; trim `index-bundle.css`; add AVIF alongside WebP; add `preconnect` for fonts/analytics; verify `loading=lazy` + width/height everywhere. Target green LCP/CLS/INP on mobile.

---

# PART B — Off-site authority & AEO growth playbook (you execute; I supply templates/targets)

This is the **100x lever** — what actually makes AI engines recommend you.

**B1 — Real review engine (do first; unblocks A0.1 re-add).**
- Create + verify **Google Business Profile** (India address) → Maps, local pack, and AI local answers. Drive 50→100+ real reviews via a post-class WhatsApp ask + QR card + email follow-up.
- Add **Trustpilot**, **Justdial/Sulekha** (India), and course reviews. Only after these exist, re-add review schema sourced from them.

**B2 — Get into the listicles AI quotes.** Target the ranking "best online coding classes for kids India" lists (techradiance, sharingourexperiences, multibhashi, coachingselect, scienceandsamosa, vedantu, etc.). Outreach: offer free trial seats / data / expert quotes for inclusion. These pages are *what ChatGPT/Perplexity cite*.

**B3 — Knowledge-graph entity.** Create **Wikidata** item (org, founder, founded 2020), **Crunchbase**, **LinkedIn company page**, and claim the **Google Knowledge Panel**. Keep NAP + description byte-identical across all (the "consensus" signal).

**B4 — Reddit / Quora / community.** Authentically answer "best coding classes for kids" questions on Quora, r/india, r/bangalore, r/IndianParents, parenting forums. Perplexity + Google AI heavily cite these.

**B5 — YouTube.** Student-project showcases, founder teaching clips, "Python for kids" tutorials → 2nd search engine + feeds Gemini/Google. Embed on-site with `VideoObject` schema for video rich results.

**B6 — Press / earned media + backlinks.** 2–3 EdTech / India press placements; founder thought-leadership on LinkedIn; leverage the 358 resource tutorials as link-bait; formalize school-partnership backlinks (school pages already exist).

---

# Phased roadmap (India-first)

- **Phase 1 (Wk 1–2):** A0 compliance/leaks · B1 GBP + review drive starts · A1.1 linking script + A1.2 hubs begun · A4.1 H1/differentiator · B3 Wikidata/LinkedIn/Crunchbase.
- **Phase 2 (Wk 3–6):** Finish A1 wiring · A2 locality remediation · A3 E-E-A-T pages + address · A4.2 comparison/data pages · reviews → 50+ · B2 listicle outreach · B4 Reddit/Quora cadence.
- **Phase 3 (Wk 7–12):** A5 performance · A4.3 freshness cadence · B5 YouTube · B6 press/backlinks · re-add review schema · **then begin the international layer** (country-page depth, currency/payment, timezone trust).

---

# Critical files & patterns

- **Schema/reviews:** `src/pages/index.html`, `src/pages/best-coding-class-in-*.html`, `src/pages/coding-classes-in-*.html`, `content/courses/template/course-template.html`, `content/blog/template/blog-template.html`, city-page generator.
- **Robots/sitemap:** delete/sync `public/robots.txt`; extend course sitemap generator feeding `content/courses/generated/sitemap.xml` + `sitemap.xml`; verify `netlify.toml` rewrites.
- **Internal linking:** new `components/related-links.html` + Node injection script using city↔state map from `netlify.toml`/`_redirects`.
- **Hubs/E-E-A-T:** enhance `/coding-classes-in-india`, `/course-atlas`, topic pillars; new `src/pages/team.html`; rebuild `src/pages/success-stories.html`; edit `src/pages/about.html`, `contact.html`, nav/footer components.
- **AEO content:** new comparison/data pages in `src/pages/`; update `llms.txt`, `llms-full.txt`.
- **Generators:** reuse `npm run generate:all` / `generate:static-md` (see `package.json`); never hand-edit `content/**/generated/**`.

# Verification

1. **Schema:** run changed pages through Google Rich Results Test + Schema.org validator; confirm no `AggregateRating` without a real source; confirm `Person`/founder + `VideoObject` validate.
2. **Sitemap/index:** `npm run generate:all`, then assert `sitemap.xml` contains all 68 `/courses/{slug}` + hubs (count URLs). Submit in Google Search Console; watch Coverage.
3. **Internal links:** crawl with Screaming Frog (free) or a link-check script — verify zero orphan cluster pages, each city links to state+localities+siblings, each spoke links to its pillar.
4. **Robots:** confirm only root `robots.txt` served; test in GSC robots tester; verify AI bots allowed, `/api/` disallowed.
5. **CWV:** Lighthouse mobile before/after on homepage + a city page; target green LCP/CLS/INP.
6. **AEO baseline & tracking:** today, ask ChatGPT/Perplexity/Gemini "best online coding classes for kids in India" → record that brand is absent. Re-check monthly for first mention/citation. Track GBP reviews count, GSC impressions/clicks, and AI-referral traffic in analytics.
7. **Local/regression:** test redirect rules locally/preview before push (never push untested redirects); confirm every new routed page has `_redirects` + `netlify.toml` + sitemap + `.md` twin.
