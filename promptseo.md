# 🌐 ULTIMATE SEO + GEO MASTER PROMPT
### World's Most Complete Website SEO & AI Discoverability System
> Copy this entire prompt and paste it to analyze any website or codebase

---

## ═══════════════════════════════════════════
## MASTER INSTRUCTION TO AI
## ═══════════════════════════════════════════

You are the world's top SEO strategist, technical SEO engineer, content architect, and GEO (Generative Engine Optimization) specialist combined. Your task is to perform a **COMPLETE 360° SEO + GEO AUDIT** of the provided website/codebase.

You must analyze EVERYTHING below — do not skip any section. For each finding, provide:
1. **Current State** — what exists now
2. **Problem** — what is wrong or missing
3. **Fix** — exact code, content, or action to implement
4. **Priority** — CRITICAL / HIGH / MEDIUM / LOW
5. **Estimated Impact** — traffic/ranking/AI visibility uplift expected

---

## ═══════════════════════════════════════════
## PHASE 1 — DEEP CODEBASE & SITE ANALYSIS
## ═══════════════════════════════════════════

### 1.1 — FULL SITE INVENTORY

Scan every single file and URL. Build a complete map:

```
SCAN CHECKLIST:
□ All HTML/JSX/TSX/PHP/Blade/Twig template files
□ All routes (React Router, Next.js pages/, app/, Laravel routes)
□ All components that render page content
□ robots.txt — does it exist? Is it blocking crawlers?
□ sitemap.xml — does it exist? Is it complete? Is it linked in robots.txt?
□ .htaccess or next.config.js or vercel.json — redirect rules
□ _redirects file (Netlify/Vercel) — are redirects correct?
□ Package.json / go.mod / requirements.txt — framework & version
□ Meta tags in <head> — title, description, canonical, OG, Twitter Cards
□ Schema.org JSON-LD scripts — do they exist per page?
□ Hreflang tags — multilingual if applicable
□ Favicon + Apple Touch Icons
□ manifest.json / PWA setup
```

For EVERY page/route found, fill this table:

| URL/Route | Title Tag | Meta Desc | H1 | Canonical | Schema | OG Tags | Status |
|-----------|-----------|-----------|----|-----------| -------|---------|--------|
| / | ? | ? | ? | ? | ? | ? | ? |
| /about | ? | ? | ? | ? | ? | ? | ? |
| /[every route] | ? | ? | ? | ? | ? | ? | ? |

---

### 1.2 — TECHNICAL SEO DEEP AUDIT

#### A. CRAWLABILITY & INDEXABILITY

```
CHECK:
□ robots.txt — Disallow rules blocking important pages?
□ X-Robots-Tag headers — Any noindex in HTTP headers?
□ Meta robots tags — noindex, nofollow, noarchive present anywhere accidentally?
□ Canonical tags — Self-referencing? Cross-domain? Relative vs absolute?
□ 404 pages — Custom 404 with navigation? Soft 404s returning 200?
□ Redirect chains — 301 → 301 → 301? (must be max 1 hop)
□ Redirect loops — A→B→A?
□ www vs non-www — is one canonical? Redirect enforced?
□ HTTP vs HTTPS — full redirect? HSTS header set?
□ Trailing slash consistency — /about vs /about/ — pick one, enforce everywhere
□ URL case sensitivity — /About vs /about — lowercase enforced?
□ Parameters — ?utm_source, ?ref, ?page — excluded from indexing properly?
□ Pagination — rel="next"/rel="prev" or canonical to page 1?
□ Infinite scroll — paginated fallback for crawlers?
□ JavaScript rendering — is content in raw HTML or only after JS executes?
□ Crawl budget — large sites: sitemap index? Priority set correctly?
```

**GENERATE:**
- A corrected `robots.txt`
- A dynamic `sitemap.xml` generator (code)
- All required redirect rules

---

#### B. CORE WEB VITALS (CWV) — PASS OR FAIL

```
MEASURE & FIX:
□ LCP (Largest Contentful Paint) — target <2.5s
   - What is the LCP element on each key page? (hero image? H1? above-fold text?)
   - Is LCP image preloaded? <link rel="preload" as="image" fetchpriority="high">
   - Is LCP image served in WebP/AVIF?
   - Is LCP image lazy-loaded? (WRONG — must be eager for LCP)
   
□ CLS (Cumulative Layout Shift) — target <0.1
   - Images without width/height attributes? (causes CLS)
   - Ads or iframes without reserved space?
   - Fonts causing FOUT? Use font-display: optional or swap?
   - Dynamic content injected above existing content?
   
□ INP (Interaction to Next Paint) — target <200ms
   - Heavy JS on main thread?
   - Long tasks blocking interaction?
   - Third-party scripts (analytics, chat, ads) blocking?
   
□ TTFB (Time to First Byte) — target <600ms
   - Server response slow? (hosting issue)
   - No CDN? (Cloudflare, Fastly, Vercel Edge)
   - No caching headers? (Cache-Control: max-age=31536000 for assets)
   - No compression? (Brotli > gzip)
```

**GENERATE exact code fixes for every CWV issue found.**

---

#### C. PAGE SPEED & PERFORMANCE

```
AUDIT:
□ Images — unoptimized? Use next/image, <img loading="lazy">, srcset, sizes
□ JavaScript — bundle size? Code splitting? Tree shaking? Defer non-critical
□ CSS — unused CSS? Critical CSS inlined? Large frameworks (Tailwind purge?)
□ Fonts — Google Fonts blocking? Self-host with font-display: swap
□ Third-party scripts — Tag Manager, analytics, chat, A/B tools — async/defer?
□ Resource hints — dns-prefetch, preconnect, preload used correctly?
□ HTTP/2 or HTTP/3 — multiplexing enabled?
□ Service Worker — caching static assets?
□ Render-blocking resources — scripts in <head> without async/defer?
```

---

#### D. MOBILE SEO

```
AUDIT:
□ Viewport meta tag — <meta name="viewport" content="width=device-width, initial-scale=1">
□ Responsive design — does every page work on 320px to 1920px?
□ Tap targets — buttons/links min 44x44px?
□ Font sizes — minimum 16px body text? (Google penalizes smaller)
□ Horizontal scrolling — any element causing overflow-x?
□ Mobile-specific content — same content as desktop? (don't hide content on mobile)
□ AMP — needed? (news sites mostly; not required for most)
□ Touch gestures — carousels, menus work without hover?
```

---

#### E. STRUCTURED DATA / SCHEMA MARKUP

For EACH page type, add the correct Schema.org JSON-LD. Generate complete, valid code:

```json
// HOME PAGE
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://yourdomain.com/#website",
      "url": "https://yourdomain.com/",
      "name": "Brand Name",
      "description": "What the site is about",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://yourdomain.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://yourdomain.com/#organization",
      "name": "Brand Name",
      "url": "https://yourdomain.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yourdomain.com/logo.png",
        "width": 512,
        "height": 512
      },
      "sameAs": [
        "https://twitter.com/yourhandle",
        "https://linkedin.com/company/yourcompany",
        "https://facebook.com/yourpage",
        "https://instagram.com/yourhandle",
        "https://www.youtube.com/@yourchannel",
        "https://en.wikipedia.org/wiki/YourBrand"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-xxx-xxx-xxxx",
        "contactType": "customer service",
        "availableLanguage": ["English"]
      }
    }
  ]
}

// ARTICLE / BLOG POST PAGE
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title (max 110 chars)",
  "description": "Article description (max 160 chars)",
  "image": {
    "@type": "ImageObject",
    "url": "https://yourdomain.com/images/article-og.jpg",
    "width": 1200,
    "height": 630
  },
  "author": {
    "@type": "Person",
    "name": "Author Full Name",
    "url": "https://yourdomain.com/author/name",
    "sameAs": ["https://twitter.com/authorhandle"]
  },
  "publisher": {
    "@type": "Organization",
    "name": "Brand Name",
    "@id": "https://yourdomain.com/#organization"
  },
  "datePublished": "2024-01-01T00:00:00Z",
  "dateModified": "2024-06-01T00:00:00Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://yourdomain.com/blog/article-slug"
  }
}

// PRODUCT PAGE
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Product Name",
  "description": "Product description",
  "image": ["https://yourdomain.com/images/product1.jpg"],
  "brand": { "@type": "Brand", "name": "Brand Name" },
  "offers": {
    "@type": "Offer",
    "url": "https://yourdomain.com/products/slug",
    "priceCurrency": "USD",
    "price": "99.00",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock",
    "seller": { "@type": "Organization", "name": "Brand Name" }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}

// FAQ PAGE / FAQ SECTION
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is [topic]?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Complete answer here. Write 2-4 sentences minimum."
      }
    }
  ]
}

// LOCAL BUSINESS
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Business Name",
  "image": "https://yourdomain.com/images/storefront.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7128,
    "longitude": -74.0060
  },
  "url": "https://yourdomain.com",
  "telephone": "+1-xxx-xxx-xxxx",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
}

// BREADCRUMB (every page except home)
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yourdomain.com/" },
    { "@type": "ListItem", "position": 2, "name": "Category", "item": "https://yourdomain.com/category/" },
    { "@type": "ListItem", "position": 3, "name": "Page Title", "item": "https://yourdomain.com/category/page/" }
  ]
}

// HOW-TO PAGE
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to [Do Something]",
  "description": "Step-by-step guide to...",
  "totalTime": "PT30M",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Step 1 Title",
      "text": "Step 1 full instructions.",
      "image": "https://yourdomain.com/images/step1.jpg"
    }
  ]
}

// VIDEO PAGE
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Video Title",
  "description": "Video description",
  "thumbnailUrl": "https://yourdomain.com/images/video-thumb.jpg",
  "uploadDate": "2024-01-01T00:00:00Z",
  "duration": "PT5M30S",
  "contentUrl": "https://yourdomain.com/videos/video.mp4",
  "embedUrl": "https://www.youtube.com/embed/videoID"
}
```

**Also add for EVERY page type that applies:** SoftwareApplication, Course, Event, Recipe, Review, Person, MedicalCondition (if applicable).

---

#### F. OPEN GRAPH + TWITTER CARD TAGS

Generate for EVERY page:

```html
<!-- Primary Meta -->
<title>Primary Keyword — Secondary | Brand Name</title>
<meta name="description" content="155-160 char description with primary keyword naturally included. Compelling, click-worthy.">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<link rel="canonical" href="https://yourdomain.com/page-url/">

<!-- Open Graph (Facebook, LinkedIn, WhatsApp, Slack) -->
<meta property="og:type" content="website"><!-- or article, product -->
<meta property="og:url" content="https://yourdomain.com/page-url/">
<meta property="og:title" content="Title for social sharing (can differ from title tag)">
<meta property="og:description" content="Social description — emotional, curiosity-driven, 155 chars">
<meta property="og:image" content="https://yourdomain.com/og/page-og-image.jpg"><!-- 1200x630px minimum -->
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Image description for accessibility">
<meta property="og:site_name" content="Brand Name">
<meta property="og:locale" content="en_US">

<!-- Twitter / X Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@yourtwitterhandle">
<meta name="twitter:creator" content="@authorhandle">
<meta name="twitter:title" content="Title for Twitter (max 70 chars)">
<meta name="twitter:description" content="Description for Twitter (max 200 chars)">
<meta name="twitter:image" content="https://yourdomain.com/og/twitter-image.jpg"><!-- 1200x628px -->
<meta name="twitter:image:alt" content="Image description">

<!-- Article-specific OG tags (blog/news pages only) -->
<meta property="article:published_time" content="2024-01-01T00:00:00Z">
<meta property="article:modified_time" content="2024-06-01T00:00:00Z">
<meta property="article:author" content="https://yourdomain.com/author/name">
<meta property="article:section" content="Technology">
<meta property="article:tag" content="keyword1">
<meta property="article:tag" content="keyword2">
```

---

## ═══════════════════════════════════════════
## PHASE 2 — KEYWORD RESEARCH ENGINE
## ═══════════════════════════════════════════

### 2.1 — KEYWORD UNIVERSE DISCOVERY

**Using web search, research and discover ALL of the following for this website's niche/industry:**

#### STEP 1 — SEED KEYWORD EXTRACTION

From the codebase/content, extract:
- Primary business category (e.g., "project management software")
- Core offering (e.g., "task tracking for remote teams")
- Target audience (e.g., "startup founders", "freelancers", "enterprise CIOs")
- Geographic focus (local/national/global)
- Problems solved (e.g., "team productivity", "deadline management")

#### STEP 2 — KEYWORD RESEARCH (Search internet for current data)

For each seed keyword, research and return:

```
KEYWORD RESEARCH TABLE FORMAT:

| Keyword | Monthly Searches | Difficulty | CPC | Intent | Priority |
|---------|-----------------|------------|-----|--------|----------|
| [keyword] | [volume] | [0-100] | [$] | [I/N/C/T] | [1-5] |

INTENT KEY:
I = Informational (wants to learn)
N = Navigational (looking for specific site)
C = Commercial (comparing before buying)
T = Transactional (ready to buy/signup)
```

**RESEARCH THESE KEYWORD TYPES:**

1. **HEAD TERMS** (1-2 words, high volume, high competition)
   - Search: "[industry] + most searched keywords [current year]"
   - Search: "top keywords for [niche] site"

2. **BODY KEYWORDS** (2-3 words, medium volume, medium competition)
   - Search: "[seed keyword] related keywords"
   - Search: "best [service/product] for [audience]"

3. **LONG-TAIL KEYWORDS** (4+ words, lower volume, HIGH conversion, low competition)
   - Search: "people also ask [seed keyword]"
   - Search: "[seed keyword] questions people ask"
   - Format: "how to [action] with [product]", "best [product] for [specific use case]"

4. **QUESTION KEYWORDS** (critical for Featured Snippets + AI answers)
   - "How to [action related to niche]"
   - "What is [term in niche]"
   - "Why does [problem in niche] happen"
   - "When should [audience] use [solution]"
   - "Which [product/service] is best for [use case]"
   - "Can [product] do [specific task]"

5. **COMPARISON KEYWORDS** (high commercial intent)
   - "[Brand] vs [Competitor]"
   - "[Product] alternatives"
   - "Best [category] tools/software/services"
   - "[Product] review"
   - "[Product] pricing"

6. **TRENDING KEYWORDS** (search "[niche] trending topics [current year]")
   - New industry terminology
   - Recently viral topics in the niche
   - AI-related queries in the niche
   - "[niche] + AI" combinations

7. **SEMANTIC / LSI KEYWORDS** (related terms Google associates with topic)
   - Synonyms and related concepts
   - Industry jargon and technical terms
   - Adjacent topics that share audience

8. **LOCAL KEYWORDS** (if applicable)
   - "[Service] in [City]"
   - "[Service] near me"
   - "Best [service] [city/region]"

9. **NEGATIVE KEYWORDS** (what NOT to target — list irrelevant high-volume terms to avoid)

#### STEP 3 — KEYWORD GAP ANALYSIS

Search online for top 5 competitors for main keyword. For each competitor, identify:
- Keywords they rank for that this site doesn't
- Content topics they have that this site is missing
- Their top-performing pages by estimated traffic

#### STEP 4 — KEYWORD TO PAGE MAPPING

Create a complete map — one primary keyword per page, no cannibalization:

```
KEYWORD-PAGE MAP:

Homepage:        [brand name] / [primary category keyword]
/about:          [brand name] team / about [company type]
/services:       [service category keyword]
/services/[x]:   [specific service keyword]
/blog:           [niche] blog / [niche] tips
/blog/[post]:    [long-tail keyword — unique per post]
/contact:        contact [brand] / [brand] support
/pricing:        [brand] pricing / [category] cost
/[new page]:     [keyword gap opportunity]
```

---

### 2.2 — CONTENT STRATEGY FOR KEYWORD DOMINANCE

**For every keyword cluster identified, recommend SPECIFIC page/content creation:**

#### PILLAR PAGES (long, comprehensive — target head terms)
- Format: 3,000-5,000 word ultimate guide
- Target: 1 head term + 5-10 related body keywords
- Structure: H1 → Introduction → Table of Contents → H2 sections → H3 subsections → FAQ → Conclusion

#### CLUSTER CONTENT (shorter, focused — target long-tail)
- Format: 800-1,500 word focused article
- Target: 1 long-tail keyword per article
- Internal link: always link back to pillar page

#### PROGRAMMATIC SEO PAGES (for scalable keyword coverage)
If site has data/locations/categories, generate pages programmatically:
- "[City] + [Service]" pages (for local)
- "[Product] + [Use Case]" pages
- "[Comparison] pages" for every competitor pair
- Template: same structure, unique localized/specific content

---

## ═══════════════════════════════════════════
## PHASE 3 — ON-PAGE SEO — EVERY PAGE
## ═══════════════════════════════════════════

### 3.1 — TITLE TAG OPTIMIZATION

Rules for perfect title tags:
```
FORMAT: Primary Keyword — Secondary Keyword | Brand Name
LENGTH: 50-60 characters (600px max)
RULES:
□ Primary keyword as close to beginning as possible
□ Emotionally compelling (use power words: Best, Complete, Free, Guide, Proven)
□ Unique for every single page — no duplicates anywhere
□ Includes year if content is evergreen and dated ("2024 Guide")
□ No keyword stuffing — must read naturally
□ Brand name at END only (unless brand IS the primary keyword)

EXAMPLES:
✅ "Project Management Software for Remote Teams | Taskify"
✅ "How to Write SEO Content: Complete 2024 Guide | BlogPro"
✅ "Best CRM for Small Business: Top 10 Reviewed | SalesHub"
❌ "Home Page - Welcome to Our Website" (no keywords)
❌ "software software software project management Taskify" (stuffed)
❌ "Taskify - Project Management Software for Remote Teams and In-Office Teams and Freelancers" (too long)
```

Generate optimized title tags for every page found.

---

### 3.2 — META DESCRIPTION OPTIMIZATION

```
FORMAT: [Hook/problem statement]. [What page delivers]. [CTA].
LENGTH: 150-160 characters
RULES:
□ Include primary keyword naturally (Google bolds it in SERPs)
□ Include a clear call-to-action (Learn more, Get started, See pricing)
□ Create curiosity or urgency — must earn the click
□ Unique for every page — no duplicates
□ Don't use quotes (Google removes them in snippets)

EXAMPLES:
✅ "Struggling with team deadlines? Taskify helps 50,000+ teams ship faster. Free 14-day trial — no credit card needed."
✅ "Everything you need to know about ketogenic diets in one place. Science-backed advice, meal plans, and shopping lists."
❌ "Welcome to our website. We offer products and services for your needs." (meaningless)
❌ "Project management software project management tools for projects and managing." (stuffed)
```

Generate optimized meta descriptions for every page.

---

### 3.3 — HEADING HIERARCHY AUDIT & FIX

```
RULES:
□ Every page has EXACTLY ONE <h1>
□ H1 contains the exact primary keyword (or close variant)
□ H1 is the first visible heading on page
□ H2s contain secondary keywords and sub-topics
□ H3s contain long-tail keywords and specific questions
□ H4-H6 for granular subsections only
□ No heading is purely decorative (every heading helps a user navigate)
□ Headings form a logical outline — no skipping levels (H1→H3 without H2)
□ Question headings trigger Featured Snippets: "What is X?" "How does Y work?"

SCAN ALL FILES — REPORT:
- Pages with no H1
- Pages with multiple H1s
- Pages where H1 doesn't contain target keyword
- Pages with broken heading hierarchy
- Missed keyword opportunities in existing headings
```

---

### 3.4 — CONTENT QUALITY & E-E-A-T SIGNALS

Google's quality algorithm evaluates **Experience, Expertise, Authoritativeness, Trustworthiness**:

```
E-E-A-T CHECKLIST:

EXPERIENCE:
□ Does content include first-person experiences, case studies, or examples?
□ Are there original images, screenshots, or data (not just stock)?
□ Does content demonstrate practical usage of the topic?

EXPERTISE:
□ Is content authored by a named expert with credentials?
□ Does each blog post have an author bio with qualifications?
□ Does author schema link to social profiles / professional pages?
□ Are claims backed by citations from authoritative sources?
□ Is technical accuracy verified? (outdated content = quality signal)

AUTHORITATIVENESS:
□ Is the brand mentioned/linked from other authoritative sites?
□ Does the site have a Wikipedia page or Wikidata entry?
□ Are there press mentions? (link to /press or /media page)
□ LinkedIn company page linked? LinkedIn employee profiles?
□ Podcast appearances, speaking engagements mentioned?

TRUSTWORTHINESS:
□ HTTPS enforced everywhere?
□ Privacy policy page — detailed, updated?
□ Terms of service page?
□ Cookie consent banner (GDPR/CCPA)?
□ Contact page with real address, phone, email?
□ Physical address in footer?
□ Clear refund/return policy (ecommerce)?
□ Trust badges, certifications, awards visible?
□ Customer testimonials with full names and photos?
□ Case studies with named clients?
□ "About" page with team photos and bios?
```

---

### 3.5 — INTERNAL LINKING ARCHITECTURE

```
AUDIT & BUILD:
□ Map all existing internal links
□ Identify orphan pages (no internal links pointing to them)
□ Identify pages with too few links (<3 internal links in)
□ Identify link depth — key pages should be max 3 clicks from homepage
□ Fix anchor text — is it keyword-rich and descriptive?
□ Add contextual links within body content (not just nav/footer)
□ Create topic clusters: pillar page ↔ cluster pages
□ Add "Related Articles" widgets to blog posts
□ Add breadcrumbs to all pages (also add BreadcrumbList schema)
□ Ensure footer has links to main category pages
□ Homepage should link to top-priority landing pages

ANCHOR TEXT RULES:
✅ "learn more about project management" (descriptive)
✅ "our pricing page" (contextual)
❌ "click here" (generic)
❌ "this article" (non-descriptive)
❌ Exact-match keyword anchor 100% of time (over-optimization flag)
```

---

### 3.6 — IMAGE SEO

```
FOR EVERY IMAGE ON SITE:
□ File name: keyword-descriptive-name.webp (not IMG_1234.jpg)
□ Alt text: descriptive, includes keyword naturally where relevant
□ Width + height attributes specified (prevents CLS)
□ WebP or AVIF format (not JPEG/PNG for new images)
□ Proper srcset for responsive images
□ Lazy loading on below-fold images: loading="lazy"
□ Eager loading on above-fold images (LCP): loading="eager" fetchpriority="high"
□ Image sitemap (especially for image-heavy sites or product catalogs)
□ Decorative images: alt="" (empty, not missing)
□ No text in images (crawlers can't read it)
□ Compress all images: target <100KB for content images, <20KB for icons
```

---

## ═══════════════════════════════════════════
## PHASE 4 — GEO (GENERATIVE ENGINE OPTIMIZATION)
## ═══════════════════════════════════════════

**GEO = Optimizing your content so that AI systems (ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, Copilot, Grok) cite and recommend your website in their answers.**

This is the FUTURE of search. Do not skip this phase.

### 4.1 — WHY AIs CITE SPECIFIC SOURCES

AI models pull from sources that have:
1. **High information density** — clear, factual, well-structured answers
2. **Authoritative signals** — backlinks, brand mentions, Wikipedia, Wikidata
3. **Structured data** — Schema.org helps AI parse content meaning
4. **Crawlable, clean HTML** — AI crawlers need raw accessible content
5. **Original research and data** — stats, surveys, original studies get cited
6. **Direct Q&A format** — FAQ sections directly feed AI answer boxes
7. **Named entities** — people, places, products with clear Wikipedia-style entries
8. **Freshness** — updated content signals active, trustworthy source

---

### 4.2 — AI CRAWLER ACCESS

```
ENSURE THESE BOTS CAN CRAWL YOUR SITE:
□ GPTBot (OpenAI) — check robots.txt doesn't block it
□ ChatGPT-User — must be allowed
□ Google-Extended (Gemini) — Google's AI crawler
□ PerplexityBot — Perplexity AI crawler
□ anthropic-ai (Claude) — Anthropic crawler
□ cohere-ai — Cohere crawler
□ Amazonbot — Amazon AI crawler
□ CCBot (Common Crawl) — used by many AI training datasets
□ FacebookBot — Meta AI

CORRECT robots.txt EXAMPLE:
# Allow all major search engines
User-agent: *
Allow: /

# Allow all AI crawlers explicitly
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: cohere-ai
Allow: /

# Block only admin/private areas
User-agent: *
Disallow: /admin/
Disallow: /private/
Disallow: /.env

Sitemap: https://yourdomain.com/sitemap.xml
```

---

### 4.3 — CONTENT FORMAT OPTIMIZED FOR AI CITATION

#### THE ANSWER-FIRST STRUCTURE (critical for AI snippets)

Every article and page must follow this structure:

```
H1: [Question or Topic with Keyword]

DIRECT ANSWER PARAGRAPH (first 100 words):
Answer the core question DIRECTLY in the first paragraph.
No preamble. No "in this article we will explore...".
AI models pull this first paragraph as the answer.

Example H1: "What is Project Management Software?"
Example First Paragraph:
"Project management software is a tool that helps teams plan, execute, 
and track projects in one centralized platform. It typically includes 
task assignment, deadline tracking, file sharing, and progress 
reporting features. Popular examples include Asana, Monday.com, 
and Jira. Most modern project management software is cloud-based 
and supports remote team collaboration."
```

#### DEFINITION BOXES (AI loves clearly defined terms)

Add to every article that introduces new concepts:
```html
<div class="definition-box" itemscope itemtype="https://schema.org/DefinedTerm">
  <strong itemprop="name">Project Management Software</strong>
  <p itemprop="description">A digital tool that helps teams plan, execute, 
  and track projects by centralizing task management, deadlines, 
  communication, and file sharing in one platform.</p>
</div>
```

#### STATISTICS & DATA TABLES (AI cites statistics heavily)

Include original or cited statistics with proper markup:
```html
<table>
  <caption>Project Management Software Market Statistics 2024</caption>
  <thead><tr><th>Metric</th><th>Value</th><th>Source</th></tr></thead>
  <tbody>
    <tr><td>Global market size</td><td>$6.68 billion</td><td>Grand View Research, 2024</td></tr>
    <tr><td>Expected CAGR</td><td>10.67%</td><td>MarketsandMarkets, 2024</td></tr>
    <tr><td>Teams using PM software</td><td>77%</td><td>PMI Report 2024</td></tr>
  </tbody>
</table>
```

#### COMPREHENSIVE FAQ SECTIONS (direct AI prompt matches)

Every page must have an FAQ section with 5-10 questions that match EXACT phrases people ask AI chatbots:

```html
<section itemscope itemtype="https://schema.org/FAQPage">
  <h2>Frequently Asked Questions</h2>
  
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">What is the best project management software for small teams?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p itemprop="text">For small teams of 2-15 people, the best project management 
      software options are Trello (visual, free tier), Asana (task-focused, $10/user/month), 
      and Notion (flexible all-in-one, free tier available). Taskify is specifically 
      designed for small remote teams and offers a permanently free plan for up to 5 users.</p>
    </div>
  </div>
  
  <!-- Repeat for 5-10 more questions -->
</section>
```

**Questions to include:** Research "People Also Ask" for your keywords + common ChatGPT/Perplexity queries about your topic.

---

### 4.4 — BRAND ENTITY BUILDING FOR AI RECOGNITION

AI models understand the world through "entities" — recognizable real-world things. Your brand must be an established entity:

```
ENTITY BUILDING CHECKLIST:

WIKIDATA PRESENCE (most important for AI):
□ Create Wikidata entry for your company/brand
□ Add: instance of, official website, inception date, country, industry
□ Link to Wikipedia article (if notable enough)
□ Add logo, description in multiple languages

WIKIPEDIA (if applicable):
□ Ensure company meets Wikipedia notability guidelines
□ Create/maintain Wikipedia article with proper citations
□ Link from Wikipedia to your official website

GOOGLE KNOWLEDGE PANEL:
□ Claim Google Knowledge Panel via Google Search Console
□ Add official social profiles, logo, description
□ Add sameAs markup to Schema (links to Wikipedia, Wikidata, social profiles)

SOCIAL ENTITY SIGNALS:
□ Consistent brand name EXACTLY across all platforms
□ Complete profiles (bio, logo, website link) on:
   - LinkedIn Company Page (most important for B2B)
   - Twitter/X Official Account
   - Facebook Business Page
   - Instagram Business Account
   - YouTube Channel
   - Crunchbase listing
   - AngelList listing (if startup)
   - G2, Capterra, Trustpilot (if software/service)
   - BBB (Better Business Bureau)

BRAND MENTION STRATEGY:
□ Get coverage on authoritative industry publications
□ Respond to HARO (Help a Reporter Out) requests
□ Guest post on DA50+ sites in your niche
□ Podcast appearances — request show notes link to site
□ Industry directory listings (niche-specific)
□ Award submissions (SaaS: G2 Leader badges, etc.)
```

---

### 4.5 — LLMS.TXT FILE (NEW AI STANDARD — 2024)

Create `/llms.txt` at your domain root — the emerging standard for AI crawlers:

```markdown
# BrandName

> One sentence summary of what your website/company does.

Your company provides [brief description]. This file helps AI language models 
understand and correctly describe our content and offerings.

## About

[2-3 paragraphs describing what your company does, who you serve, 
your unique value proposition, founding year, location, key achievements]

## Products & Services

- [Product/Service 1]: [Description] — [URL]
- [Product/Service 2]: [Description] — [URL]
- [Product/Service 3]: [Description] — [URL]

## Key Pages

- [Homepage](https://yourdomain.com): [What the homepage covers]
- [About](https://yourdomain.com/about): [Team, mission, history]
- [Blog](https://yourdomain.com/blog): [Main topics covered]
- [Documentation](https://yourdomain.com/docs): [What docs cover]

## Core Topics We Cover

- [Topic 1]: [Brief description of your coverage/expertise]
- [Topic 2]: [Brief description]
- [Topic 3]: [Brief description]

## Frequently Asked Questions

Q: What does [BrandName] do?
A: [Complete, factual answer — 2-3 sentences]

Q: Who is [BrandName] for?
A: [Target audience description]

Q: How is [BrandName] different from [Main Competitor]?
A: [Honest differentiation — 2-3 sentences]

## Contact & Social

- Website: https://yourdomain.com
- LinkedIn: https://linkedin.com/company/yourbrand
- Twitter: https://twitter.com/yourhandle
- Contact: contact@yourdomain.com

## Licensing & Usage

Content on this site is © [Year] [BrandName]. 
AI systems may cite and reference our content with proper attribution.
```

---

### 4.6 — AI OVERVIEW / FEATURED SNIPPET OPTIMIZATION

To appear in Google AI Overviews and Featured Snippets:

```
SNIPPET OPTIMIZATION TECHNIQUES:

FOR "WHAT IS" QUERIES:
- Answer in exactly 2-3 sentences starting with "[Term] is..."
- Follow with a 3-5 bullet point list of key features/properties
- Include a simple definition table

FOR "HOW TO" QUERIES:
- Numbered step-by-step list (8 steps maximum)
- Each step: Action verb + clear instruction (15-25 words max per step)
- Add HowTo schema

FOR "BEST/TOP" QUERIES:
- Provide a table with ranked options
- Include: Name, Key Feature, Price, Rating
- Write a 1-2 sentence summary per item
- Add ItemList schema

FOR "WHY" QUERIES:
- Direct answer first: "[Topic] because..."
- Follow with 3-5 numbered reasons
- Each reason: Bold heading + 2-3 sentence explanation

CONTENT LENGTH FOR SNIPPETS:
- Paragraph snippets: 40-60 words exactly
- List snippets: 8 items maximum
- Table snippets: 3-5 columns, 5-8 rows

PLACEMENT:
- Put snippet-optimized content near TOP of page (within first 1/3)
- Under a clear H2 or H3 that is phrased as a question
- Immediately below the question — no preamble
```

---

## ═══════════════════════════════════════════
## PHASE 5 — CONTENT GAP & NEW PAGE CREATION
## ═══════════════════════════════════════════

### 5.1 — CONTENT GAP ANALYSIS

Using keyword research from Phase 2, identify ALL pages that should be created:

```
FOR EACH MISSING PAGE, PROVIDE:

1. TARGET URL SLUG: /category/keyword-as-slug
2. TARGET KEYWORD: [primary keyword]
3. SEARCH VOLUME: [monthly searches]
4. CONTENT TYPE: [Guide / Listicle / Comparison / Landing Page / Tool Page]
5. WORD COUNT TARGET: [800 / 1500 / 3000 / 5000]
6. CONTENT BRIEF:
   - H1: [Exact heading]
   - Meta Title: [SEO title]
   - Meta Description: [160 chars]
   - H2 Sections: [list of sections]
   - Questions to answer (FAQ)
   - Internal links to include
   - Schema type to add
7. COMPETITIVE DIFFERENTIATION: What will make this page BETTER than current #1 result?
```

---

### 5.2 — COMPLETE CONTENT BRIEF TEMPLATE

For each new page, generate a full brief:

```markdown
## CONTENT BRIEF: [Page Title]

**Target URL:** /[slug]
**Primary Keyword:** [keyword] | Volume: [X]/mo | Difficulty: [X]/100
**Secondary Keywords:** [list 3-5]
**Content Type:** [Pillar Guide / Blog Post / Landing Page / Tool Page]
**Target Word Count:** [number]
**Content Goal:** [Rank for keyword / Generate leads / Build authority]

### SEO Elements
- **H1:** [Exact H1 — includes primary keyword]
- **Title Tag:** [50-60 chars] | Brand
- **Meta Description:** [150-160 chars with CTA]
- **URL Slug:** /[keyword-slug]
- **Canonical:** https://yourdomain.com/[slug]/

### Content Outline

**Introduction (150 words)**
- Open with the reader's problem/pain point
- State what page delivers
- Include primary keyword in first 100 words

**[H2 Section 1]: [Keyword-Rich Heading]**
- [What to cover]
- [Secondary keyword to include]

**[H2 Section 2]: [Keyword-Rich Heading]**
- [What to cover]

[Continue for all sections]

**FAQ Section**
1. [Exact question people ask Google/ChatGPT]
2. [Exact question people ask Google/ChatGPT]
3. [Exact question people ask Google/ChatGPT]
4. [Exact question people ask Google/ChatGPT]
5. [Exact question people ask Google/ChatGPT]

**Conclusion**
- Summarize key takeaways
- Clear CTA

### Internal Links to Include
- Link TO this page from: [existing page 1], [existing page 2]
- Link FROM this page to: [related page 1], [pillar page]

### Schema Markup
- Type: [Article / FAQPage / HowTo / Product]
- Additional: BreadcrumbList

### Featured Snippet Opportunity
- [Specific section that could rank for featured snippet]
- [Format: paragraph / list / table]

### E-E-A-T Requirements
- Include original data/statistic from research
- Credit expert quote or cite authoritative source
- Add author bio with relevant credentials
- Include publish date + last updated date

### Competitive Advantage
To beat current #1 result, this page must:
- [Specific advantage 1]
- [Specific advantage 2]
- [Specific advantage 3]
```

---

## ═══════════════════════════════════════════
## PHASE 6 — ADVANCED TECHNICAL SEO
## ═══════════════════════════════════════════

### 6.1 — SECURITY & TRUST

```
□ SSL certificate valid and not expiring within 60 days?
□ HSTS header: Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
□ Security headers all set:
  - Content-Security-Policy
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: SAMEORIGIN
  - Referrer-Policy: strict-origin-when-cross-origin
  - Permissions-Policy
□ No mixed content (HTTP resources on HTTPS page)?
□ Safe browsing — check Google Safe Browsing status
□ Site not blacklisted in DNSBL?
```

---

### 6.2 — URL STRUCTURE

```
PERFECT URL STRUCTURE:
□ All lowercase: /project-management/ not /Project-Management/
□ Hyphens, not underscores: /my-page/ not /my_page/
□ Short and descriptive: /blog/seo-guide/ not /blog/post?id=1234
□ Include target keyword: /tools/seo-checker/ not /tools/tool-5/
□ Consistent trailing slash (pick one, enforce with redirects)
□ No dates in blog URLs (unless news): /blog/seo-guide/ not /blog/2022/01/seo-guide/
□ Category structure: /[category]/[subcategory]/[page]/
□ No more than 3 directory levels for important pages
□ Remove stop words (a, the, and) from URLs when possible
□ Special characters, spaces, capitals all need to be fixed
```

---

### 6.3 — INTERNATIONALIZATION (if multilingual)

```
□ hreflang tags on all pages pointing to all language versions
□ Language-specific URLs: /en/, /es/, /fr/ OR subdomains OR ccTLDs
□ x-default hreflang for international/default version
□ Translated meta tags (not just page content)
□ Currency, date format, phone format localized
□ Local schema for each country/region
□ Separate sitemaps per language in sitemap index
□ Content actually TRANSLATED (not just Google Translated)
```

---

### 6.4 — MONITORING & MEASUREMENT SETUP

```
TOOLS TO CONFIGURE:
□ Google Search Console — domain property verified
□ Google Analytics 4 — custom events: form_submit, purchase, scroll_depth, video_play
□ Bing Webmaster Tools — separate from Google, real traffic source
□ Yandex Webmaster (if CIS market)
□ Google Tag Manager — centralized script management

GA4 EVENTS TO TRACK (for SEO insights):
□ page_view (automatic)
□ scroll (90% scroll depth)
□ file_download
□ outbound_click (external links)
□ form_start + form_submit
□ search (site search)
□ video_start, video_complete
□ user_engagement (time on page)

SEARCH CONSOLE MONITORING:
□ Verify all URL variants (www, non-www, http, https)
□ Submit sitemap
□ Check Core Web Vitals report weekly
□ Monitor Search Appearance > Rich Results
□ Set up email alerts for manual actions
□ Check Coverage report for indexing issues
□ Monitor Performance for CTR improvements
```

---

## ═══════════════════════════════════════════
## PHASE 7 — LINK BUILDING & AUTHORITY SIGNALS
## ═══════════════════════════════════════════

### 7.1 — BACKLINK STRATEGY

```
QUICK WINS (implement immediately):
□ Submit to relevant industry directories
□ Create/claim Google Business Profile
□ Submit to Bing Places
□ Crunchbase company listing
□ DMOZ alternatives (niche directories)
□ ProductHunt launch (SaaS)
□ GitHub repository (open source tools)
□ Resource page link building — find "[niche] resources" pages
□ Broken link building — find broken links pointing to competitors
□ Reclaim unlinked brand mentions (search "[BrandName]" -site:yourdomain.com)

CONTENT-LED LINK BUILDING:
□ Original research/survey — publish data, get cited
□ Free tools (calculators, generators, checkers)
□ Comprehensive industry reports (annual)
□ Infographics with embed codes
□ Ultimate guides that become reference resources

EARNED AUTHORITY:
□ HARO (Help A Reporter Out) — answer journalist queries
□ SourceBottle — similar to HARO
□ Quoted.io — expert quotes platform
□ Podcast guest appearances — request show notes link
□ Conference speaking — conference site links to speakers
□ University partnerships / .edu links
```

---

### 7.2 — DIGITAL PR SETUP

```
□ /press or /newsroom page — press kit with:
  - Company factsheet (founding year, team size, funding, key metrics)
  - High-res logo pack (SVG, PNG on light/dark background)
  - Founder headshots
  - Product screenshots
  - Press release template
  - Press contact email
□ Press releases for major milestones:
  - Product launches
  - Funding rounds
  - User milestones
  - Awards/certifications
  - Partnerships
□ Embargo management for major news
□ PRNewswire / Business Wire distribution for major announcements
```

---

## ═══════════════════════════════════════════
## PHASE 8 — LOCAL SEO (if applicable)
## ═══════════════════════════════════════════

```
□ Google Business Profile:
  - Claimed and verified?
  - NAP (Name, Address, Phone) exactly matching website?
  - All categories selected (primary + secondary)?
  - Business hours set?
  - Photos: exterior, interior, team, products (minimum 10)?
  - Products/Services listed?
  - Q&A populated?
  - Posts published regularly (weekly)?
  - Responding to all reviews?

□ Citation Building (NAP consistency):
  - Yelp, Bing Places, Apple Maps, Facebook, Yellow Pages
  - Industry-specific directories
  - Local chamber of commerce
  - NAP MUST BE IDENTICAL across all — same abbreviations, punctuation

□ Local Content:
  - Location pages for each city/area served
  - Local keyword targeting: "[service] in [city]"
  - Local schema on each location page
  - Embedded Google Map
  - Local testimonials/reviews from local customers

□ Review Strategy:
  - Process for requesting reviews post-purchase
  - Review response template (respond to ALL reviews)
  - Minimum 50 Google reviews target
  - Schema markup for reviews on website
```

---

## ═══════════════════════════════════════════
## PHASE 9 — FINAL DELIVERABLES CHECKLIST
## ═══════════════════════════════════════════

After completing all phases, provide these EXACT DELIVERABLES:

```
DELIVERABLE 1: PRIORITY ACTION PLAN
- Top 10 CRITICAL fixes (do this week)
- Top 20 HIGH priority (do this month)
- Top 30 MEDIUM priority (do this quarter)
- LONG-TERM roadmap (6-12 months)

DELIVERABLE 2: COMPLETE KEYWORD MASTER LIST
- Excel/CSV table with all keywords, volumes, difficulty, intent, assigned page

DELIVERABLE 3: ALL FIXED META TAGS
- Every page: new title tag + meta description (ready to paste in)

DELIVERABLE 4: ALL SCHEMA JSON-LD
- Complete, valid, ready-to-paste JSON-LD for every page type

DELIVERABLE 5: robots.txt (complete, corrected file)

DELIVERABLE 6: sitemap.xml (complete, with all URLs, correct priorities)

DELIVERABLE 7: llms.txt (complete file for AI crawlers)

DELIVERABLE 8: IMAGE OPTIMIZATION LIST
- Every image: new filename, new alt text, compression needed

DELIVERABLE 9: CONTENT CALENDAR
- 12-month calendar of new pages/posts to create
- Each with: keyword target, title, brief, URL, target publish date

DELIVERABLE 10: INTERNAL LINKING MAP
- Complete graph of recommended internal links to add

DELIVERABLE 11: TECHNICAL FIXES CODE
- Every technical SEO issue: exact code fix ready to implement

DELIVERABLE 12: CWV IMPROVEMENT PLAN
- Specific code changes to improve each Core Web Vitals metric
```

---

## ═══════════════════════════════════════════
## SCORING RUBRIC
## ═══════════════════════════════════════════

After completing the audit, score the website:

```
SEO HEALTH SCORE:
Category                    | Max Score | Current Score | Target Score
---------------------------|-----------|---------------|-------------
Technical SEO               |    25     |      ?        |     25
On-Page SEO                |    20     |      ?        |     20
Content Quality (E-E-A-T)   |    15     |      ?        |     15
Keyword Optimization        |    15     |      ?        |     15
Schema/Structured Data      |    10     |      ?        |     10
Core Web Vitals             |    10     |      ?        |     10
GEO / AI Visibility         |    5      |      ?        |      5
TOTAL                       |   100     |      ?        |    100
```

---