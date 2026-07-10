# Gulf Pages Cluster (UAE / Saudi Arabia / Qatar) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build 20 SEO landing pages promoting AI, Python, and coding courses to UAE, Saudi Arabia, and Qatar, with three new country design identities, full routing, and `.md` twins.

**Architecture:** Static, self-contained HTML pages in `src/pages/` (own nav/footer like the existing country pages), one shared CSS identity file per country in `src/css/`, hub-and-spoke internal linking, explicit routing in both `_redirects` and `netlify.toml`, entries in `sitemap.xml`, twins via `npm run generate:static-md`.

**Tech Stack:** Plain HTML/CSS/JS (no framework), Google Fonts, existing lead backend `https://backend-modernagecoders.vercel.app/api/callback/request`, Netlify hosting.

**Spec:** `docs/superpowers/specs/2026-07-10-gulf-pages-design.md` (approved). Read it before starting any task.

## Global Constraints

- NO emoji anywhere (SVG icons only). NO em dashes and NO en dashes anywhere; use commas or restructure. The ✓ and ★ glyphs are allowed (site convention).
- Light backgrounds only. No dark-neon, no purple/AI-gradient look, no flashy animation.
- Course section appears IMMEDIATELY after the hero on every page (owner requirement).
- Reviews: ONLY the 8 real verified reviews listed in "Shared content blocks". Never invent names, quotes, scores, outcomes, employers, localities, or statistics.
- Trust figures: only "4.9 rating across 547+ Google reviews".
- No placement/job guarantees, salary promises, refund promises, or "recorded sessions" claims.
- Pricing appears near the bottom: $40/month group, $100/month 1-on-1, with "about AED 150 / SAR 150 / QAR 145" equivalents. Do NOT include `src/js/international-pricing.js` on these pages.
- Every page: unique title (55-65 chars), meta description (150-160 chars), OG/Twitter tags, canonical, EducationalOrganization + FAQPage + BreadcrumbList schema. NO AggregateRating schema.
- Word target per page: 2,500-4,000 words of unique, country-specific, honest content. No templated-sounding copy; write each page for its keyword and audience.
- Routing: every page must be added to BOTH `_redirects` AND `netlify.toml` (they must stay in sync) or it 404s. Never push untested redirect rules.
- Commit after each task with a descriptive message.

## File structure

Create:
- `src/css/gulf-sa.css` (Saudi "Sadu" identity, class prefix `gsa-`)
- `src/css/gulf-qa.css` (Qatar "Pearl" identity, class prefix `gqa-`)
- `src/css/gulf-ae.css` (UAE "Meridian" identity, class prefix `gae-`)
- 20 pages in `src/pages/` (slugs in the task tables below)

Modify:
- `_redirects` (replace 3 existing forced 301s, add new 200 rules + `.md` rules)
- `netlify.toml` (same changes as `_redirects`)
- `sitemap.xml` (20 new `<url>` entries)
- `src/pages/coding-classes-in-uae.html` (add "Explore by city" spoke-links block)

Generated (by `npm run generate:static-md`, committed):
- 20 `.md` twins next to each page.

## Shared content blocks (used by every page task)

### Country constants

| Country | countryCode | countryIso | countryName | Timezone label | Local price line |
|---|---|---|---|---|---|
| UAE | `+971` | `AE` | `United Arab Emirates` | GST (UTC+4) | about AED 150 group / AED 370 one-on-one |
| Saudi Arabia | `+966` | `SA` | `Saudi Arabia` | AST (UTC+3) | about SAR 150 group / SAR 375 one-on-one |
| Qatar | `+974` | `QA` | `Qatar` | AST (UTC+3) | about QAR 145 group / QAR 365 one-on-one |

WhatsApp CTA link on all pages: `https://wa.me/919123366161` (prefill text per page, e.g. `?text=Hi,%20I%20want%20a%20free%20demo%20for%20coding%20classes%20in%20Dubai`).

### Featured courses (real slugs → real thumbnails)

All link to `/courses/<slug>` (served by the courses catch-all; no routing needed). Use `<img loading="lazy" width and height set>`.

| Age band | Course slug | Thumbnail |
|---|---|---|
| Kids (6-12) | `python-ai-kids` | `/images/python-kids.webp` |
| Kids | `vibe-coding-for-kids` | `/images/vibe-coding-kids.webp` |
| Kids | `ai-tools-kids` | `/images/ai-tools-kids.webp` |
| Teens (13-18) | `python-teens` | `/images/python-teens.webp` |
| Teens | `ai-ml-teens` | `/images/ai-ml-teens.webp` |
| Teens | `vibe-coding-for-teens` | `/images/vibe-coding-teens.webp` |
| Teens | `codex-claude-code-teens` | `/images/codex-claude-code-teens.webp` |
| College & Professionals | `python-mastery-college` | `/images/python-college.webp` |
| College & Professionals | `ai-ml-college` | `/images/ai-ml-college.webp` |
| College & Professionals | `python-ai-automation-college` | `/images/python-automation-ai-college.webp` |
| College & Professionals | `gen-ai` | `/images/generative-ai-college.webp` |
| College & Professionals | `codex-claude-code-adults` | `/images/codex-claude-code-adults.webp` |

Every page features 6-9 of these grouped under Kids / Teens / College & Professionals subheadings with anchor pills (`<a href="#kids">Kids</a>` etc., no JS tabs). Python pages lead with the Python tracks; AI pages lead with AI tracks; kids pages show Kids + Teens only plus a one-line adult pointer.

### The ONLY allowed reviews (verbatim; may trim at sentence boundaries)

1. **Sonam Oswal, Parent of Dhairya:** "My child Dhairya is really enjoying the Modern Age Coders classes. This is his first online class and he eagerly looks forward to it. I can already see his improvement, and the teachers are very cooperative and listen to our suggestions. Overall, I am very happy with the class."
2. **Krishnam Bhatter, Former student:** "I am truly grateful for my experience at Modern Age Coders. My teachers were not only teachers but also mentors and friendly figures. The perks are excellent: one-on-one doubt solving, mentoring and regular tests. The most impressive part was working on real-world projects."
3. **Ria Mukherjee, Parent:** "The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it. The teachers explain complex concepts clearly with practical exercises and interactive content. The projects were challenging and rewarding."
4. **Sonu Goyal, Parent:** "Modern Age Coders have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students' confidence, keeps them updated with technology, and inspires them to learn without hesitation."
5. **Shradha Saraf, Parent of Mivaan:** "Mivaan enjoys the class. He understands the concepts and completes his tasks with excitement. He has started taking real interest in coding. Truly an amazing class."
6. **Poonam Rathore, Parent:** "My son has been attending this class for a few months and I have been genuinely impressed with his progress and enthusiasm. The instructors are patient and knowledgeable. He looks forward to every class and his confidence has grown."
7. **Samridho Mondal, Student:** "Modern Age Coders has been a game-changer for me. I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I can now confidently write complex programs with ease."
8. **Shewta Singh, Mother of Ishan:** "My son struggled with maths for years. Integrating it into coding projects has transformed his understanding and confidence. Highly recommended."

Use 3-6 per page, varied per page, subtitle role only (no cities). Section framing: "We teach live and online, so students from [country] join the same small batches as our community worldwide. These are real, verified reviews." Link to `/love` ("Wall of Love").

### Lead form (copy this pattern; change constants per page)

Form markup (place inside the final CTA section; `SOURCE` is the page slug + `-inline`):

```html
<form class="gsa-leadform" onsubmit="submitInlineLead(event)">
  <input type="text" name="name" placeholder="Parent or student name" required>
  <input type="tel" name="phone" placeholder="Phone or WhatsApp number" required>
  <select name="age" required>
    <option value="" disabled selected>Who is this for?</option>
    <option>Child (6 to 12)</option>
    <option>Teen (13 to 18)</option>
    <option>College student</option>
    <option>Working professional</option>
  </select>
  <button type="submit">Book My Free Demo</button>
  <p class="gsa-form-fine">Free demo class. No card needed. A mentor will call you.</p>
</form>
```

Script (adapt the three country constants and SOURCE; this matches the working UAE page implementation):

```html
<script>
window.submitInlineLead = function (e) {
  e.preventDefault();
  var form = e.target;
  var name = (form.querySelector('input[name="name"]') || {}).value || '';
  var phoneRaw = (form.querySelector('input[type="tel"]') || {}).value || '';
  var age = (form.querySelector('select[name="age"]') || {}).value || '';
  var phoneDigits = phoneRaw.replace(/\D/g, '');
  if (phoneDigits.length < 7) { alert('Please enter a valid phone number.'); return; }
  var btn = form.querySelector('button[type="submit"]');
  var oldText = btn.textContent;
  btn.disabled = true; btn.textContent = 'Sending...';
  var API_URL = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
    ? 'http://localhost:5000' : 'https://backend-modernagecoders.vercel.app';
  fetch(API_URL + '/api/callback/request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      phone: phoneDigits, countryCode: '+966', countryIso: 'SA', countryName: 'Saudi Arabia',
      source: 'coding-classes-in-saudi-arabia-inline', meta: { name: name, age: age }
    })
  }).then(function (r) { return r.json(); }).then(function (data) {
    if (data && data.success) {
      form.innerHTML = '<p class="gsa-form-ok">Thank you' + (name ? ', ' + name.split(' ')[0] : '') + '. A mentor will call you within a few hours.</p>';
    } else {
      alert((data && data.message) || 'Something went wrong. Please try again.');
      btn.disabled = false; btn.textContent = oldText;
    }
  }).catch(function () {
    alert('Network error. Please try again.');
    btn.disabled = false; btn.textContent = oldText;
  });
};
</script>
```

### Head template (adapt per page; replace ALL-CAPS placeholders)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PAGE_TITLE</title>
  <meta name="description" content="META_DESCRIPTION">
  <meta name="keywords" content="KEYWORDS_COMMA_LIST">
  <link rel="canonical" href="https://learn.modernagecoders.com/SLUG">
  <meta property="og:type" content="website">
  <meta property="og:title" content="PAGE_TITLE">
  <meta property="og:description" content="META_DESCRIPTION">
  <meta property="og:url" content="https://learn.modernagecoders.com/SLUG">
  <meta property="og:image" content="https://learn.modernagecoders.com/images/og-default.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="PAGE_TITLE">
  <meta name="twitter:description" content="META_DESCRIPTION">
  <link rel="icon" type="image/png" href="/favicon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="GOOGLE_FONTS_URL_FOR_IDENTITY" rel="stylesheet">
  <link rel="stylesheet" href="/css/IDENTITY_CSS_FILE?v=20260710">
  <script type="application/ld+json">
  { "@context": "https://schema.org", "@type": "EducationalOrganization",
    "name": "Modern Age Coders",
    "url": "https://learn.modernagecoders.com",
    "logo": "https://learn.modernagecoders.com/images/logo.png",
    "description": "Live online coding, AI and maths classes for kids, teens, college students and professionals.",
    "areaServed": "COUNTRY_NAME",
    "sameAs": ["https://www.youtube.com/@modernagecoders", "https://wa.me/919123366161"] }
  </script>
  <script type="application/ld+json">
  { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://learn.modernagecoders.com/" },
    { "@type": "ListItem", "position": 2, "name": "PAGE_H1", "item": "https://learn.modernagecoders.com/SLUG" } ] }
  </script>
  <script type="application/ld+json">
  { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
    { "@type": "Question", "name": "FAQ_Q1", "acceptedAnswer": { "@type": "Answer", "text": "FAQ_A1" } }
  ] }
  </script>
</head>
```

FAQPage schema must mirror the visible FAQ section exactly (same questions/answers, 6-8 entries).

### Page skeleton (identical order on every page; spec section 'Page anatomy')

1. Own light nav (brand link `/`, links: Courses `/courses`, How We Teach `/how-we-teach`, Reviews `/love`, Book Demo `#demo` button). Self-contained like the existing country pages, styled by the identity CSS.
2. Hero: keyword H1, honest value paragraph, primary CTA button to `#demo`, WhatsApp secondary CTA, trust line "4.9 rating across 547+ Google reviews".
3. `<section id="courses">` course cards grouped Kids / Teens / College & Professionals (see featured courses table).
4. How live classes work in [country]: live 1-hour classes, batches of 5-8, evening and weekend slots in the local timezone, English medium, real projects students keep.
5. Python/AI depth section (expanded syllabus arc + honest professionals subsection on the 6 topic pages).
6. Why families choose us: 6-card honest feature grid (expert instructors, small batches, project-based, completion certificates, progress updates, free demo first).
7. Reviews section (3-6 real reviews + /love link).
8. Pricing: group $40/month, one-on-one $100/month + local equivalent line + "free demo first, no hidden fees".
9. FAQ (6-8 country-specific Q&As, matches FAQPage schema).
10. `<section id="demo">` final CTA + lead form.
11. Own footer: links to `/courses`, `/love`, `/how-we-teach`, hub and sibling pages (internal linking), copyright line.

---

### Task 1: Saudi "Sadu" identity CSS + flagship hub page

**Files:**
- Create: `src/css/gulf-sa.css`
- Create: `src/pages/coding-classes-in-saudi-arabia.html`

**Interfaces:**
- Produces: `gulf-sa.css` with class prefix `gsa-` consumed by Tasks 5 pages. Core classes every Saudi page uses: `gsa-nav`, `gsa-hero`, `gsa-h1`, `gsa-btn` / `gsa-btn-ghost`, `gsa-section`, `gsa-eyebrow`, `gsa-h2`, `gsa-course-grid`, `gsa-course-card`, `gsa-band` (Sadu divider motif), `gsa-feature-grid`, `gsa-review-card`, `gsa-price-card`, `gsa-faq-item`, `gsa-leadform`, `gsa-form-ok`, `gsa-form-fine`, `gsa-footer`.

- [ ] **Step 1: Write `src/css/gulf-sa.css`.** Design tokens: `--gsa-ivory:#F7F3EA` (page bg), `--gsa-ink:#2B2118` (text), `--gsa-maroon:#7A2E2E` (primary accent), `--gsa-palm:#2E5E3F` (secondary), `--gsa-sand:#D9CBB0` (borders/soft fills), white card surfaces. Fonts: 'Zilla Slab' (700/600 headings) + 'Inter' (body) via Google Fonts. The `gsa-band` class renders a subtle repeating Al-Sadu-style geometric strip using a pure-CSS `repeating-linear-gradient` (45deg triangles in maroon/palm/sand at low saturation, height 10px) used as a section divider. Buttons: maroon fill, ivory text, 2px radius (rectilinear, textile-like). Cards: white, 1px sand border, no drop shadows heavier than `0 1px 2px rgba(43,33,24,.06)`. All text contrast WCAG AA on ivory. Responsive: single column under 720px, nav collapses to logo + Book Demo button. NO emoji content, no neon, no dark sections except the footer may use `--gsa-ink` bg with ivory text.
- [ ] **Step 2: Build `coding-classes-in-saudi-arabia.html`** using the head template, page skeleton, form block (SA constants, source `coding-classes-in-saudi-arabia-inline`), featured courses (full 3-band set), 5 reviews, and this brief:
  - Title: `Coding Classes in Saudi Arabia | Live Online Python & AI for Kids to Adults`
  - Meta: `Live online coding classes in Saudi Arabia for kids, teens and professionals. Small batches of 5 to 8, real projects, Python and AI tracks, evening AST slots. Free demo class.`
  - H1: `Coding Classes in Saudi Arabia`
  - Content angles: Vision 2030 tech-economy context stated honestly (Saudi families investing in tech skills); serves Riyadh, Jeddah, Dammam/Khobar (link the three city spokes in a "Where our Saudi students join from" block); international schools (British/American/Indian CBSE) fit; English-medium live classes; evening AST timings after school/work.
  - FAQ topics (write 7): online vs in-person in KSA; class timings AST; which curriculum fits Saudi school systems; ages served; language of instruction; price and payment; how the free demo works.
  - HUB duty: prominent links block to `/coding-classes-in-riyadh`, `/coding-classes-in-jeddah`, `/coding-classes-in-dammam`, `/coding-classes-for-kids-in-riyadh`, `/python-classes-in-saudi-arabia`, `/ai-classes-in-saudi-arabia`.
- [ ] **Step 3: Verify the page renders.** Run dev server if not running: `npm run dev` (background, port 3001). Open `http://localhost:3001/src/pages/coding-classes-in-saudi-arabia.html` with Playwright browser tools at 1280px and 390px widths. Expected: hero + courses section visible above the fold sequence, no horizontal scroll, 0 console errors.
- [ ] **Step 4: Integrity sweep.** Run: `grep -PnE "\x{2014}|\x{2013}" src/pages/coding-classes-in-saudi-arabia.html src/css/gulf-sa.css` expecting no matches; `python -c "import io,re,sys;t=io.open('src/pages/coding-classes-in-saudi-arabia.html',encoding='utf-8').read();import unicodedata;e=[c for c in t if unicodedata.category(c)=='So' and ord(c)>0x2600];print('EMOJI',e[:5] if e else 'NONE')"` expecting NONE (★ and ✓ are category Sm/So below the emoji planes; if ★/✓ appear in the list they are allowed, everything else is not). Word count check: `python -c "import io,re;t=io.open('src/pages/coding-classes-in-saudi-arabia.html',encoding='utf-8').read();t=re.sub('<[^>]+>',' ',t);print(len(t.split()))"` expecting >= 2500.
- [ ] **Step 5: Commit.** `git add src/css/gulf-sa.css src/pages/coding-classes-in-saudi-arabia.html && git commit -m "Gulf cluster: Saudi Sadu identity + coding-classes-in-saudi-arabia hub"`

### Task 2: Qatar "Pearl" identity CSS + flagship hub page

**Files:**
- Create: `src/css/gulf-qa.css`
- Create: `src/pages/coding-classes-in-qatar.html`

**Interfaces:**
- Produces: `gulf-qa.css`, prefix `gqa-`, same class inventory as Task 1 but `gqa-` (nav, hero, h1, btn, btn-ghost, section, eyebrow, h2, course-grid, course-card, feature-grid, review-card, price-card, faq-item, leadform, form-ok, form-fine, footer, plus `gqa-rule` thin divider).

- [ ] **Step 1: Write `src/css/gulf-qa.css`.** Tokens: `--gqa-alabaster:#F8F7F4` (bg), `--gqa-ink:#1F2933`, `--gqa-teal:#155E63` (primary), `--gqa-pearl:#C8CDD0` (rules/borders), `--gqa-oxblood:#6E2B2B` (rare accent for small labels only). Fonts: 'Newsreader' (500/600 headings, optical sizing) + 'Inter' body. Museum-label aesthetic: generous whitespace (section padding 96px desktop), `gqa-rule` = 1px pearl horizontal rules, small uppercase letterspaced eyebrows in teal, thin-border cards (no shadows), buttons teal fill with 999px pill radius. Responsive as Task 1. Footer: ink bg, alabaster text.
- [ ] **Step 2: Build `coding-classes-in-qatar.html`** (head template, skeleton, QA form constants, source `coding-classes-in-qatar-inline`, full 3-band course set, 5 reviews) with brief:
  - Title: `Coding Classes in Qatar | Live Online Python & AI for Kids, Teens, Adults`
  - Meta: `Live online coding classes in Qatar. Kids, teens and professionals learn Python, AI and web development in small batches of 5 to 8 with evening AST slots. Free demo.`
  - H1: `Coding Classes in Qatar`
  - Angles: Doha-centred families (link `/coding-classes-in-doha`, `/coding-classes-for-kids-in-doha`); Qatar National Vision 2030 education focus stated honestly; international schools (British, American, Indian CBSE/MES-style, IB) fit; expat family friendliness; evening AST timings.
  - FAQ topics (7): same structure as Task 1 adapted to Qatar.
  - HUB duty: links block to `/coding-classes-in-doha`, `/coding-classes-for-kids-in-doha`, `/python-classes-in-qatar`, `/ai-classes-in-qatar`.
- [ ] **Step 3: Verify render** (same method as Task 1 Step 3, URL `.../coding-classes-in-qatar.html`). Expected: 0 console errors, no horizontal scroll at 390px.
- [ ] **Step 4: Integrity sweep** (same three commands as Task 1 Step 4 against the new files). Expected: no dashes, no emoji, >= 2500 words.
- [ ] **Step 5: Commit.** `git add src/css/gulf-qa.css src/pages/coding-classes-in-qatar.html && git commit -m "Gulf cluster: Qatar Pearl identity + coding-classes-in-qatar hub"`

### Task 3: UAE "Meridian" identity CSS + flagship Dubai page

**Files:**
- Create: `src/css/gulf-ae.css`
- Create: `src/pages/coding-classes-in-dubai.html`

**Interfaces:**
- Produces: `gulf-ae.css`, prefix `gae-`, same class inventory (`gae-nav` ... `gae-footer`) plus `gae-grid-bg` (faint architectural grid backdrop for hero).

- [ ] **Step 1: Write `src/css/gulf-ae.css`.** Tokens: `--gae-paper:#FAFAF7` (bg), `--gae-ink:#16213A` (deep ink blue, also headings), `--gae-brass:#A67C2E` (accent), `--gae-line:#DDD9CE` (grid lines/borders). Fonts: 'Source Serif 4' (600 headings) + 'Inter' body; Google Fonts URL for all AE pages: `https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=Inter:wght@400;500;600;700&display=swap`. (Saudi pages use the same URL pattern with `Zilla+Slab:wght@600;700`; Qatar with `Newsreader:opsz,wght@6..72,500;6..72,600`.) `gae-grid-bg`: hero background of faint 1px `--gae-line` grid via `background-image: linear-gradient(...)` repeating at 56px, echoing architectural drawings. Buttons: ink fill, paper text, 4px radius; ghost variant brass border. Cards: paper-white, 1px line border, brass top-rule on hover. Responsive as Task 1.
- [ ] **Step 2: Build `coding-classes-in-dubai.html`** (head template, skeleton, AE form constants, source `coding-classes-in-dubai-inline`, full course set, 5 reviews) with brief:
  - Title: `Coding Classes in Dubai | Live Online Python, AI & Web Dev for All Ages`
  - Meta: `Join live online coding classes in Dubai. Kids, teens and professionals build real Python, AI and web projects in small batches of 5 to 8. GST evening slots. Free demo.`
  - H1: `Coding Classes in Dubai`
  - Angles: Dubai school landscape (British GEMS-style, American, Indian CBSE/ICSE, IB) fit stated generally and honestly (no invented school partnerships); after-school GST timings; expat families; adult upskilling in Dubai's tech job market described honestly without salary claims; links up to `/coding-classes-in-uae` hub and sideways to `/coding-classes-for-kids-in-dubai`, `/python-classes-in-dubai`, `/ai-classes-in-dubai`.
  - FAQ topics (7): online format; GST timings; curriculum fit for Dubai schools; ages; English medium; pricing in AED terms; free demo.
- [ ] **Step 3: Verify render** (same method; URL `.../coding-classes-in-dubai.html`). Expected: 0 console errors, courses section directly after hero.
- [ ] **Step 4: Integrity sweep** (same commands against the two new files). Expected: clean.
- [ ] **Step 5: Commit.** `git add src/css/gulf-ae.css src/pages/coding-classes-in-dubai.html && git commit -m "Gulf cluster: UAE Meridian identity + coding-classes-in-dubai flagship"`

### Task 4: Remaining UAE pages (7)

**Files:**
- Create: `src/pages/coding-classes-in-abu-dhabi.html`, `src/pages/coding-classes-in-sharjah.html`, `src/pages/coding-classes-for-kids-in-dubai.html`, `src/pages/python-classes-in-dubai.html`, `src/pages/ai-classes-in-dubai.html`, `src/pages/python-for-kids-in-dubai.html`, `src/pages/ai-classes-for-kids-in-uae.html`

**Interfaces:**
- Consumes: `gulf-ae.css` classes from Task 3. All pages use AE form constants with source `<slug>-inline`.

Each page: head template + skeleton + Meridian identity, unique hero composition (vary: split hero, centered hero, hero with course-count stat line), unique 2,500+ word content per brief, 3-6 reviews varied per page, links up to `/coding-classes-in-uae` and to 2-3 UAE siblings.

- [ ] **Step 1: Build `coding-classes-in-abu-dhabi.html`.** Title: `Coding Classes in Abu Dhabi | Live Python & AI Courses Online`. H1: `Coding Classes in Abu Dhabi`. Meta (150-160 chars, unique). Angles: capital-city families, Khalifa City/Reem Island school communities named only as areas (never as testimonial localities), ADEK school-system diversity, GST evening slots.
- [ ] **Step 2: Build `coding-classes-in-sharjah.html`.** Title: `Coding Classes in Sharjah | Live Online Coding for Kids & Teens`. H1: `Coding Classes in Sharjah`. Angles: value-conscious families, University City education culture, commute-free online advantage.
- [ ] **Step 3: Build `coding-classes-for-kids-in-dubai.html`.** Title: `Coding Classes for Kids in Dubai | Ages 6-12, Live & Online`. H1: `Coding Classes for Kids in Dubai`. Parent-only page: courses section shows Kids band first then Teens; angles: screen-time-to-creation narrative, Scratch to Python progression, batch size, progress updates to parents; FAQ includes "is 6 too young".
- [ ] **Step 4: Build `python-classes-in-dubai.html`.** Title: `Python Classes in Dubai | Live Course for Teens & Professionals`. H1: `Python Classes in Dubai`. Topic page: syllabus arc section (basics, data structures, OOP, automation, AI libraries), professionals subsection (career context honest, no salary promises), courses section leads with `python-teens`, `python-mastery-college`, `python-ai-automation-college`, `python-ai-kids`.
- [ ] **Step 5: Build `ai-classes-in-dubai.html`.** Title: `AI Classes in Dubai | Learn AI & Machine Learning Live Online`. H1: `AI Classes in Dubai`. Topic page: what students build (chatbots, ML models, AI agents from real course curricula), tools named from the real courses (Python, scikit-learn, LLM APIs), courses lead with `ai-ml-teens`, `ai-ml-college`, `gen-ai`, `codex-claude-code-adults`, `ai-tools-kids`.
- [ ] **Step 6: Build `python-for-kids-in-dubai.html`.** Title: `Python for Kids in Dubai | Fun Live Classes, Ages 8-14`. H1: `Python for Kids in Dubai`. Parent page: why Python first for kids, game/turtle projects from real kids courses, courses lead with `python-ai-kids`, `python-teens`, `vibe-coding-for-kids`.
- [ ] **Step 7: Build `ai-classes-for-kids-in-uae.html`.** Title: `AI Classes for Kids in UAE | Safe, Hands-On AI Learning`. H1: `AI Classes for Kids in the UAE`. Parent page: age-appropriate AI literacy, responsible-AI framing; courses lead with `ai-tools-kids`, `python-ai-kids`, `vibe-coding-for-kids`, then `ai-ml-teens` as the growth path.
- [ ] **Step 8: Verify all 7.** Playwright: load each at 1280px, spot-check 2 at 390px. Expected: 0 console errors each. Integrity sweep (Task 1 Step 4 commands, once across all 7 files). Word counts all >= 2500.
- [ ] **Step 9: Commit.** `git add src/pages/coding-classes-in-abu-dhabi.html src/pages/coding-classes-in-sharjah.html src/pages/coding-classes-for-kids-in-dubai.html src/pages/python-classes-in-dubai.html src/pages/ai-classes-in-dubai.html src/pages/python-for-kids-in-dubai.html src/pages/ai-classes-for-kids-in-uae.html && git commit -m "Gulf cluster: 7 UAE Meridian spoke pages"`

### Task 5: Remaining Saudi pages (6)

**Files:**
- Create: `src/pages/coding-classes-in-riyadh.html`, `src/pages/coding-classes-in-jeddah.html`, `src/pages/coding-classes-in-dammam.html`, `src/pages/coding-classes-for-kids-in-riyadh.html`, `src/pages/python-classes-in-saudi-arabia.html`, `src/pages/ai-classes-in-saudi-arabia.html`

**Interfaces:**
- Consumes: `gulf-sa.css` classes from Task 1. SA form constants, source `<slug>-inline`. All link up to `/coding-classes-in-saudi-arabia`.

- [ ] **Step 1: Build `coding-classes-in-riyadh.html`.** Title: `Coding Classes in Riyadh | Live Online Python & AI Courses`. H1: `Coding Classes in Riyadh`. Angles: capital tech momentum (honest Vision 2030 framing), international and national school families, AST evening slots.
- [ ] **Step 2: Build `coding-classes-in-jeddah.html`.** Title: `Coding Classes in Jeddah | Live Coding for Kids, Teens & Adults`. H1: `Coding Classes in Jeddah`. Angles: west-coast families, creative-city culture, commute-free online learning.
- [ ] **Step 3: Build `coding-classes-in-dammam.html`.** Title: `Coding Classes in Dammam & Khobar | Live Online Courses`. H1: `Coding Classes in Dammam, Khobar and the Eastern Province`. Angles: Eastern Province families (Dammam, Khobar, Dhahran named as areas), energy-sector families upskilling kids.
- [ ] **Step 4: Build `coding-classes-for-kids-in-riyadh.html`.** Title: `Coding Classes for Kids in Riyadh | Ages 6-12, Live Online`. H1: `Coding Classes for Kids in Riyadh`. Parent page mirroring Task 4 Step 3 structure with unique Riyadh copy.
- [ ] **Step 5: Build `python-classes-in-saudi-arabia.html`.** Title: `Python Classes in Saudi Arabia | Live Course, Beginner to Advanced`. H1: `Python Classes in Saudi Arabia`. Topic page: syllabus arc + professionals subsection (Saudi digital-economy context, honest), Python-led course set.
- [ ] **Step 6: Build `ai-classes-in-saudi-arabia.html`.** Title: `AI Classes in Saudi Arabia | Learn AI & ML Live Online`. H1: `AI Classes in Saudi Arabia`. Topic page: AI-led course set, what students build, honest Vision 2030 AI-skills context.
- [ ] **Step 7: Verify all 6** (Playwright load each, 0 console errors; integrity sweep; word counts >= 2500).
- [ ] **Step 8: Commit.** `git add src/pages/coding-classes-in-riyadh.html src/pages/coding-classes-in-jeddah.html src/pages/coding-classes-in-dammam.html src/pages/coding-classes-for-kids-in-riyadh.html src/pages/python-classes-in-saudi-arabia.html src/pages/ai-classes-in-saudi-arabia.html && git commit -m "Gulf cluster: 6 Saudi Sadu spoke pages"`

### Task 6: Remaining Qatar pages (4)

**Files:**
- Create: `src/pages/coding-classes-in-doha.html`, `src/pages/coding-classes-for-kids-in-doha.html`, `src/pages/python-classes-in-qatar.html`, `src/pages/ai-classes-in-qatar.html`

**Interfaces:**
- Consumes: `gulf-qa.css` classes from Task 2. QA form constants, source `<slug>-inline`. All link up to `/coding-classes-in-qatar`.

- [ ] **Step 1: Build `coding-classes-in-doha.html`.** Title: `Coding Classes in Doha | Live Online Python & AI for All Ages`. H1: `Coding Classes in Doha`. Angles: Doha family communities (West Bay, The Pearl, Al Rayyan as areas only), Education City knowledge culture, AST evenings.
- [ ] **Step 2: Build `coding-classes-for-kids-in-doha.html`.** Title: `Coding Classes for Kids in Doha | Ages 6-12, Live & Online`. H1: `Coding Classes for Kids in Doha`. Parent page mirroring Task 4 Step 3 structure with unique Doha copy.
- [ ] **Step 3: Build `python-classes-in-qatar.html`.** Title: `Python Classes in Qatar | Live Online Course for All Levels`. H1: `Python Classes in Qatar`. Topic page: syllabus arc + professionals subsection, Python-led course set.
- [ ] **Step 4: Build `ai-classes-in-qatar.html`.** Title: `AI Classes in Qatar | Hands-On AI & ML, Live Online`. H1: `AI Classes in Qatar`. Topic page: AI-led course set, honest Qatar digital-agenda context.
- [ ] **Step 5: Verify all 4** (Playwright, integrity sweep, word counts).
- [ ] **Step 6: Commit.** `git add src/pages/coding-classes-in-doha.html src/pages/coding-classes-for-kids-in-doha.html src/pages/python-classes-in-qatar.html src/pages/ai-classes-in-qatar.html && git commit -m "Gulf cluster: 4 Qatar Pearl spoke pages"`

### Task 7: Routing, sitemap, and UAE hub spoke links

**Files:**
- Modify: `_redirects` (UAE block near the existing `/coding-classes-in-uae` rules)
- Modify: `netlify.toml` (matching blocks)
- Modify: `sitemap.xml`
- Modify: `src/pages/coding-classes-in-uae.html`

CRITICAL: `_redirects` currently contains forced redirects that will SHADOW three new pages. These exact lines MUST be replaced (not kept alongside new rules):

```
/coding-classes-in-dubai /coding-classes-in-uae 301!
/coding-classes-in-abu-dhabi /coding-classes-in-uae 301!
/coding-classes-in-sharjah /coding-classes-in-uae 301!
```

`netlify.toml` has three matching `[[redirects]]` blocks (from = those three slugs, to = `/coding-classes-in-uae`, status = 301) that must also be replaced.

- [ ] **Step 1: Update `_redirects`.** Replace the three lines above with 200 rules, and add rules for all other new pages plus `.md` twins. Full block to end up with (placed with the other UAE rules):

```
/coding-classes-in-dubai /src/pages/coding-classes-in-dubai.html 200
/coding-classes-in-abu-dhabi /src/pages/coding-classes-in-abu-dhabi.html 200
/coding-classes-in-sharjah /src/pages/coding-classes-in-sharjah.html 200
/coding-classes-for-kids-in-dubai /src/pages/coding-classes-for-kids-in-dubai.html 200
/python-classes-in-dubai /src/pages/python-classes-in-dubai.html 200
/ai-classes-in-dubai /src/pages/ai-classes-in-dubai.html 200
/python-for-kids-in-dubai /src/pages/python-for-kids-in-dubai.html 200
/ai-classes-for-kids-in-uae /src/pages/ai-classes-for-kids-in-uae.html 200
/coding-classes-in-saudi-arabia /src/pages/coding-classes-in-saudi-arabia.html 200
/coding-classes-in-riyadh /src/pages/coding-classes-in-riyadh.html 200
/coding-classes-in-jeddah /src/pages/coding-classes-in-jeddah.html 200
/coding-classes-in-dammam /src/pages/coding-classes-in-dammam.html 200
/coding-classes-for-kids-in-riyadh /src/pages/coding-classes-for-kids-in-riyadh.html 200
/python-classes-in-saudi-arabia /src/pages/python-classes-in-saudi-arabia.html 200
/ai-classes-in-saudi-arabia /src/pages/ai-classes-in-saudi-arabia.html 200
/coding-classes-in-qatar /src/pages/coding-classes-in-qatar.html 200
/coding-classes-in-doha /src/pages/coding-classes-in-doha.html 200
/coding-classes-for-kids-in-doha /src/pages/coding-classes-for-kids-in-doha.html 200
/python-classes-in-qatar /src/pages/python-classes-in-qatar.html 200
/ai-classes-in-qatar /src/pages/ai-classes-in-qatar.html 200
```

Plus 20 `.md` rules in the same style as the existing UAE one, e.g. `/coding-classes-in-dubai.md /src/pages/coding-classes-in-dubai.md 200` (one per page).
- [ ] **Step 2: Update `netlify.toml`.** Change the three existing 301 blocks for dubai/abu-dhabi/sharjah to `to = "/src/pages/<slug>.html"`, `status = 200`, and add `[[redirects]]` blocks (from/to/status = 200) for the other 17 pages + 20 `.md` twins, mirroring Step 1 exactly.
- [ ] **Step 3: Add 20 `sitemap.xml` entries** before the closing `</urlset>`, following the existing UAE entry format: `<loc>` clean URL, `<lastmod>2026-07-10</lastmod>`, `<changefreq>weekly</changefreq>`, `<priority>0.9</priority>` for the 2 hubs and `0.85` for the 18 spokes, with hreflang alternates `en` + (`en-ae`/`ar-ae` for UAE pages, `en-sa`/`ar-sa` for Saudi, `en-qa`/`ar-qa` for Qatar).
- [ ] **Step 4: Add spoke-links block to `src/pages/coding-classes-in-uae.html`.** Insert a compact "Explore coding classes by emirate and topic" section (styled with the page's existing `cp-` classes, before its FAQ section) linking the 8 new UAE pages by clean URL.
- [ ] **Step 5: Verify routing parity.** Run: `python -c "import io,re;r=io.open('_redirects',encoding='utf-8').read();n=io.open('netlify.toml',encoding='utf-8').read();slugs=['coding-classes-in-dubai','coding-classes-in-abu-dhabi','coding-classes-in-sharjah','coding-classes-for-kids-in-dubai','python-classes-in-dubai','ai-classes-in-dubai','python-for-kids-in-dubai','ai-classes-for-kids-in-uae','coding-classes-in-saudi-arabia','coding-classes-in-riyadh','coding-classes-in-jeddah','coding-classes-in-dammam','coding-classes-for-kids-in-riyadh','python-classes-in-saudi-arabia','ai-classes-in-saudi-arabia','coding-classes-in-qatar','coding-classes-in-doha','coding-classes-for-kids-in-doha','python-classes-in-qatar','ai-classes-in-qatar'];missing=[s for s in slugs if ('/'+s+' /src/pages/'+s+'.html 200') not in re.sub(r'\s+',' ',r) or ('from = \"/'+s+'\"') not in n];old=[s for s in ['coding-classes-in-dubai','coding-classes-in-abu-dhabi','coding-classes-in-sharjah'] if '/'+s+' /coding-classes-in-uae 301' in r];print('MISSING',missing);print('STALE-301',old)"` Expected output: `MISSING []` and `STALE-301 []`. Also `grep -c 'learn.modernagecoders.com/coding-classes-in-qatar' sitemap.xml` expected >= 1.
- [ ] **Step 6: Commit.** `git add _redirects netlify.toml sitemap.xml src/pages/coding-classes-in-uae.html && git commit -m "Gulf cluster: routing + sitemap for 20 pages, UAE hub spoke links"`

### Task 8: Twins, full verification sweep, final commit

**Files:**
- Create (generated): 20 `.md` twins in `src/pages/`
- The generator also injects the markdown alternate `<link>` into the 20 new `.html` heads.

- [ ] **Step 1: Generate twins.** Run: `npm run generate:static-md`. Expected: "Wrote 546 markdown files (skipped 0, failed 0)" (526 existing + 20 new) and "Injected <link ...> into 20 HTML heads".
- [ ] **Step 2: Confirm twin scope.** Run: `git status --short src/pages | grep -c '^??'` expected 20 new `.md` files (the 20 new `.html` files are already committed; their heads now show as modified from the link injection, which is expected). No other pages should be modified: `git diff --name-only src/pages | grep -vE '(dubai|abu-dhabi|sharjah|kids-in-dubai|kids-in-uae|saudi|riyadh|jeddah|dammam|qatar|doha)'` expected empty.
- [ ] **Step 3: Full-page sweep across all 20 pages.** Run the emoji/dash/wordcount checks from Task 1 Step 4 across all 20 files (loop). Also fabrication sweep: `grep -lE "Priya|Rajesh|marks went from|scored [0-9]+%|placement|recorded session" src/pages/coding-classes-in-saudi-arabia.html src/pages/coding-classes-in-qatar.html src/pages/coding-classes-in-dubai.html src/pages/coding-classes-in-abu-dhabi.html src/pages/coding-classes-in-sharjah.html src/pages/coding-classes-for-kids-in-dubai.html src/pages/python-classes-in-dubai.html src/pages/ai-classes-in-dubai.html src/pages/python-for-kids-in-dubai.html src/pages/ai-classes-for-kids-in-uae.html src/pages/coding-classes-in-riyadh.html src/pages/coding-classes-in-jeddah.html src/pages/coding-classes-in-dammam.html src/pages/coding-classes-for-kids-in-riyadh.html src/pages/python-classes-in-saudi-arabia.html src/pages/ai-classes-in-saudi-arabia.html src/pages/coding-classes-in-doha.html src/pages/coding-classes-for-kids-in-doha.html src/pages/python-classes-in-qatar.html src/pages/ai-classes-in-qatar.html` expected: no output.
- [ ] **Step 4: Link check.** Verify every internal link on the 20 pages resolves: all `/courses/<slug>` hrefs match a file in `content/courses/data/<slug>.json`, and all hub/sibling links are within the 20-slug set or `/coding-classes-in-uae`, `/courses`, `/love`, `/how-we-teach`, `/`. Script it with a short Python loop over `href="/..."` matches; expected: no unknown internal links.
- [ ] **Step 5: Browser spot-verification.** With the dev server, load 6 pages via Playwright (2 per country, mix hub/spoke/topic) at 1280px and 390px. Expected: 0 console errors, hero then courses order, forms render, no horizontal scroll.
- [ ] **Step 6: Commit.** `git add src/pages/*.md src/pages/*.html && git commit -m "Gulf cluster: markdown twins + alternate links for 20 pages"`

---

## Self-review notes

- Spec coverage: 20 pages (Tasks 1-6), 3 identities (Tasks 1-3), routing both files + sitemap (Task 7), UAE hub links (Task 7), twins (Task 8), integrity/verification (every task + Task 8). Pricing/reviews/courses blocks are defined once in Shared content blocks and referenced per task.
- The three pre-existing 301s are the one landmine; Task 7 replaces them explicitly and Step 5 asserts no stale 301 remains.
- Deliberate non-goals per spec: no changes to nav/footer components, no AggregateRating schema, no `international-pricing.js`, no llms-full regeneration.
