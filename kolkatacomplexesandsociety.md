# Master Prompt — Hyper-Local Complex Landing Page (Modern Age Coders)

> HOW TO USE THIS FILE
> 1. Build ONE page per run. Never generate multiple complexes in one go.
> 2. Fill in the three placeholders below, paste the whole prompt into your agent, run it.
> 3. Review the output against the SELF-REVIEW CHECKLIST at the bottom before publishing.
> 4. Repeat for the next complex. Keep every page genuinely distinct (see LOCAL RESEARCH STEP).
>
> Placeholders for this run:
> - {{COMPLEX_NAME}} = e.g. Unitech Uniworld City
> - {{COMPLEX_AREA}} = e.g. New Town, Kolkata
> - {{COMPLEX_SLUG}} = e.g. uniworld-city  (lowercase, hyphenated)
>   The live URL becomes a SINGLE segment: learn.modernagecoders.com/coding-classes-in-{{COMPLEX_SLUG}}
>   (e.g. /coding-classes-in-uniworld-city). Never a /coding-classes/{{COMPLEX_SLUG}} two-part path.

---

## ROLE

You are a senior front-end engineer and conversion-focused content strategist with deep expertise in technical SEO, generative-engine optimisation (GEO/AEO), and editorial web design. You are building a single, production-ready landing page for **Modern Age Coders** (learn.modernagecoders.com), a live-online coding and mathematics school based in Kolkata.

The page targets families and learners in or near **{{COMPLEX_NAME}}, {{COMPLEX_AREA}}**. The goal: rank for local searches, earn the trust of discerning parents, and convert them into enquiries and demo bookings. The page must be good enough that a careful parent trusts it on first read and an AI assistant would confidently recommend it when asked about coding classes for children in that area.

## NON-NEGOTIABLE CONSTRAINTS

- Build exactly ONE page for {{COMPLEX_NAME}}. Do not scaffold other localities.
- NO emojis anywhere — not in copy, headings, buttons, or icons.
- NO exaggeration, hype, or unverifiable claims. Every statement must be defensible.
- Write ALL CSS by hand for this page. Do not ship a recognisable template or default framework look. The page must read as the work of a professional human designer.
- Mobile-first and fully responsive. Fast LCP, no layout shift, accessible (WCAG AA).
- Use ONLY real business facts (below) and real social proof. Where real testimonials, numbers, or credentials are not yet supplied, insert a clearly commented placeholder — never invent them.

## BRAND FACTS (verify before use; correct anything outdated)

- Name: Modern Age Coders
- Site: learn.modernagecoders.com
- Base: Kolkata, India. Classes are 100% live and online (instructor-led, not pre-recorded).
- Audience: children, teens, and adults.
- Subjects: Python, Java, AI/ML, web development, and mathematics.
- Formats: live group classes, one-to-one personalised sessions, summer camps, corporate training.
- Special tracks: Queen Coders / Princess Coders (girls-only batches).
- Pricing: group mini-batch classes Rs 2,499/month; one-to-one Rs 4,999/month — each includes two live classes per week. (Confirm current pricing before publishing.)
- Contact: +91 91233 66161.
- Teaching philosophy: fundamentals before tools; manual implementation before built-in shortcuts; deliberate "AI Trap" moments that show students where AI fails without real understanding.

If any fact above is stale or you are unsure, leave a visible HTML comment flagging it for human confirmation rather than guessing.

## LOCAL RESEARCH STEP (this is what prevents a thin, duplicate "doorway" page)

Before writing, gather genuinely specific, accurate context about {{COMPLEX_NAME}} and {{COMPLEX_AREA}}, and weave it naturally through the page so it could not be confused with any other locality page:

- The complex's character (approx. scale, the kind of families who live there, well-known nearby landmarks).
- 2 to 4 real, reputable nearby schools or boards common in the area (so the maths/coding content can map to what local children actually study).
- The realistic local reason live-online beats commuting here (traffic on the connecting road, parents' schedules, safety, time saved versus a physical centre).
- One or two locally relevant hooks (a nearby tech park, an exam culture, a community trait) — only if true.

Do not fabricate any local detail. If you cannot verify something, omit it. Accuracy is more valuable than colour.

## PAGE ARCHITECTURE (in this order; each section must earn its place)

1. **Hero** — A specific, non-generic headline naming the locality and the real outcome (not "unlock your child's potential"). One supporting line stating the format (live, online, small batches) and the subjects. One primary CTA (Book a free demo) and one secondary (See courses). No stock-photo cliché.
2. **Local relevance block** — Speak directly to families in {{COMPLEX_NAME}}: the commute reality, why live-online fits, a nod to nearby schools. This is the section that makes the page locally unique.
3. **How we teach** — Concretely explain the live, instructor-led method; fundamentals-before-tools; manual-before-built-in; the "AI Trap" approach. Show the pedagogy, do not just assert quality.
4. **Courses and age tracks** — Clear paths for children, teens, and adults across Python, Java, AI/ML, web development, and mathematics. Mention the girls-only Queen/Princess Coders track. Link each to its full course page.
5. **Why live-online works** — Address the real parent objection ("is online as good?") honestly: small batches, recorded sessions for revision, parent visibility, no travel. No overpromising.
6. **The Love Wall (testimonials)** — A dedicated, well-designed social-proof section. Render ONLY real testimonials supplied by the business. If none are supplied yet, build the component and insert clearly commented placeholders (`<!-- REAL TESTIMONIAL NEEDED -->`). Never invent quotes, names, or ratings. Link out to the full reviews page at **/love** (this is the live URL — do not link /testimonials, which does not resolve).
7. **Founder / credibility** — Brief, honest note on the founder teaching directly and leading a vetted instructor team. No invented awards, rankings, or partnerships.
8. **Pricing** — Transparent indicative pricing with the two formats. Confirm figures before publish.
9. **FAQ** — 6 to 10 real questions a parent in this area would ask (format, ages, trial, devices needed, batch size, how to start, refund/trial policy). Each answer opens with a direct one-sentence response, then detail. Mark up with FAQPage schema.
10. **Final CTA** — A calm, confident close with the demo CTA and the phone number. No fake urgency.
11. **Footer** — Internal links to /courses, /how-we-teach, /love (the testimonials / Love wall lives at /love, NOT /testimonials), /pricing, /contact, and 2 to 3 sibling locality pages; contact details; copyright.

## SEO REQUIREMENTS

- Title tag: under ~60 characters, includes the locality and primary intent (e.g. "Coding & Maths Classes near {{COMPLEX_NAME}} | Live Online").
- Meta description: ~150 to 160 characters, specific and non-generic, with a soft call to action.
- Exactly one H1; logical H2/H3 hierarchy; semantic HTML5 landmarks (header, main, section, nav, footer).
- Target long-tail keywords naturally (e.g. "coding classes for kids near {{COMPLEX_NAME}}", "Python tuition {{COMPLEX_AREA}}", "online maths classes {{COMPLEX_AREA}}"). No keyword stuffing; write for humans first.
- Structured data (JSON-LD): EducationalOrganization (or LocalBusiness), Course, FAQPage, and BreadcrumbList. Keep schema 100% consistent with the visible page content.
- Canonical tag, Open Graph and Twitter Card tags, descriptive alt text on every image, and a clean URL slug. Use a SINGLE-SEGMENT slug only — never a two-part path. The pattern is: learn.modernagecoders.com/coding-classes-in-{{COMPLEX_SLUG}} (e.g. /coding-classes-in-uniworld-city). Do NOT use /coding-classes/{{COMPLEX_SLUG}}. Keep this single-segment pattern consistent across every locality page.
- Add the new page to the sitemap and link to it from the relevant area/parent page and from sibling locality pages.

## GEO / AEO REQUIREMENTS (so AI assistants surface and recommend the page)

AI models recommend pages that are clearly structured, factually consistent, and directly answer real questions. Do this:

- Open each major section with a single clear, extractable sentence that answers the implied question, then expand.
- State concrete, verifiable facts plainly (subjects, ages served, live-online format, batch approach, contact, location) so a model can extract them without ambiguity.
- Make the organisation a clean, citable entity: consistent name, location, founder, and contact across copy and schema.
- Cover the topic comprehensively (what is taught, for whom, how, where, at what cost, how to start) so the page is the best single answer to "coding classes for kids near {{COMPLEX_AREA}}".
- Keep semantic HTML clean so parsers map structure correctly.
- Never include contradictory or fabricated facts; inconsistency destroys both trust and AI recommendation. Honesty is a ranking asset here, not a constraint.

## DESIGN & UX SYSTEM (kill the generic "AI look")

Avoid these tells of templated/AI-generated design:
- Centered hero over a purple/indigo gradient with three identical feature cards.
- Overused glassmorphism, neon gradients, or default framework styling.
- Emoji used as icons. Generic, soulless stock imagery.

Instead, design with intent:
- Build a small, deliberate design system: a restrained palette anchored on the Modern Age Coders teal brand plus one or two accents and a true neutral scale; a clear typographic scale with a confident heading face paired with a highly legible body face; an 8-point spacing system.
- Use editorial layout: purposeful asymmetry, generous and intentional whitespace, strong typographic hierarchy, and a clear reading rhythm. Let the content breathe.
- Components should feel custom (custom section treatments, a distinctive testimonial wall, considered buttons and form fields), not picked off a shelf.
- Motion is subtle and tasteful (gentle reveals, considered hover states) and never blocks reading or hurts performance. Respect prefers-reduced-motion.
- Imagery, if used, must be coherent and trustworthy; prefer clean illustration, real screenshots, or restrained graphics over generic stock. No emoji icons — use a consistent line-icon set or none.
- The result should look like a confident, premium, human-designed school site that an upper-middle-class parent instantly trusts.

## COPY VOICE RULES

- Write in clear, warm, confident, parent-respecting English. Concrete over abstract. Specific over superlative.
- Banned hype words and phrases: unleash, unlock, elevate, empower, seamless, cutting-edge, game-changer, revolutionise, world-class, leverage, robust, synergy, "in today's fast-paced world", "dive in / deep dive", "embark on a journey", "look no further", "nestled", "transform your child", "passionate about". Find honest, specific alternatives.
- State outcomes you can stand behind. No guaranteed grades, no guaranteed results, no fake scarcity, no invented statistics.

## TECHNICAL OUTPUT

- Deliver a single, self-contained, production-ready page (HTML with hand-written CSS; vanilla JS only if genuinely needed). State clearly where the file should live and its filename.
- File and slug naming: save the page at `src/pages/coding-classes-in-{{COMPLEX_SLUG}}.html`. The filename matches the single-segment slug exactly.
- Hand-author all CSS; ensure mobile-first responsiveness, fast LCP, zero significant layout shift, and WCAG AA (contrast, focus states, alt text, semantic landmarks, keyboard navigation).
- If the page collects enquiries, include a short, honest data/privacy note and accessible form labels.
- Validate that every JSON-LD claim matches the visible content exactly.

## PUBLISHING & ROUTING (do ALL of these — a page 404s until it is wired everywhere)

There is NO catch-all that serves `src/pages/*`. A new page returns 404 until its clean URL is added to BOTH `_redirects` and `netlify.toml`. For each page you build:

1. **HTML page** — `src/pages/coding-classes-in-{{COMPLEX_SLUG}}.html`.
2. **AI `.md` twin (mandatory)** — also create `src/pages/coding-classes-in-{{COMPLEX_SLUG}}.md`: a clean, no-emoji markdown mirror of the page for AI agents / LLM crawlers, with frontmatter (`title`, `description`, `canonical`, `keywords`, `source`) matching the page. Every page must have its `.md` twin.
3. **`_redirects`** — add two lines (place them ABOVE the `/* ... 404` catch-all at the bottom of the file):
   - `/coding-classes-in-{{COMPLEX_SLUG}} /src/pages/coding-classes-in-{{COMPLEX_SLUG}}.html 200`
   - `/coding-classes-in-{{COMPLEX_SLUG}}.md /src/pages/coding-classes-in-{{COMPLEX_SLUG}}.md 200`
4. **`netlify.toml`** — add the matching `[[redirects]]` blocks (status 200) for BOTH the page and the `.md` twin. `_redirects` and `netlify.toml` must stay in sync.
5. **`sitemap.xml`** — add ONE `<url>` entry for the page's clean URL (the `.md` twin is NOT added to the sitemap).
6. Confirm the canonical, OG `og:url`, hreflang, and BreadcrumbList JSON-LD inside the page all use the single-segment `/coding-classes-in-{{COMPLEX_SLUG}}` URL.

## SELF-REVIEW CHECKLIST (the agent must confirm each before finishing)

- [ ] Only ONE complex ({{COMPLEX_NAME}}) is covered.
- [ ] No emojis anywhere.
- [ ] No exaggeration; every claim is defensible; no invented testimonials, numbers, awards, or partnerships.
- [ ] At least 3 genuinely specific, accurate local details make this page distinct from any other locality page (anti-doorway).
- [ ] One H1, clean heading hierarchy, semantic landmarks.
- [ ] Title, meta description, canonical, OG/Twitter, alt text, and the single-segment /coding-classes-in-{{COMPLEX_SLUG}} URL are all set (NOT a /coding-classes/{{COMPLEX_SLUG}} two-part path).
- [ ] EducationalOrganization/LocalBusiness, Course, FAQPage, and BreadcrumbList JSON-LD are present and match visible content.
- [ ] FAQ answers open with a direct sentence and reflect real parent questions.
- [ ] Internal links to /courses, /how-we-teach, /love, /pricing, /contact, and sibling localities (Love wall is /love, never /testimonials).
- [ ] The AI `.md` twin is created at `src/pages/coding-classes-in-{{COMPLEX_SLUG}}.md`.
- [ ] Page wired in ALL of: `_redirects` (page + .md, above the 404 catch-all), `netlify.toml` (page + .md), and `sitemap.xml` (page only).
- [ ] CSS is hand-written; the design avoids the generic AI look and reads as professionally crafted.
- [ ] Responsive, fast, accessible (WCAG AA), reduced-motion respected.
- [ ] Any unverified business fact is flagged in an HTML comment for human confirmation.