#!/usr/bin/env node

/**
 * Generates /llms-full.txt — the deeper companion to /llms.txt.
 *
 * llms.txt is a curated index (~10 KB).
 * llms-full.txt is the deep version with full content baked in (~50-80 KB target).
 *
 * Structure:
 *   1. Brand intro (lifted from llms.txt's prose section)
 *   2. Quick facts (pricing, differentiators, FAQ)
 *   3. Course catalog — every course as a compact card (title, URL, level, duration, price, description)
 *   4. Featured blog posts — top 10 by date, full markdown content embedded
 *   5. Full blog index — every post (title, URL, date, description)
 *
 * Run via `npm run generate:llms` or as part of `npm run generate:all`.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { blogToMarkdown } = require('./lib/markdown-emitter.js');

const SITE = 'https://learn.modernagecoders.com';
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'llms-full.txt');

const BLOG_DATA = path.join(ROOT, 'content', 'blog', 'data');
const COURSE_DATA = path.join(ROOT, 'content', 'courses', 'data');
const LLMS_TXT = path.join(ROOT, 'llms.txt');

const FEATURED_BLOG_LIMIT = 6;         // posts we embed in full
const COURSE_DESC_TRIM = 400;          // chars per course description
const PER_BLOG_FULL_TRIM = 4500;       // chars per featured blog post (keeps total bounded)
const TOTAL_SOFT_CAP = 100 * 1024;     // 100 KB — llms-txt rule-of-thumb cap

function loadJson(p) {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function listJson(dir) {
    return fs.readdirSync(dir).filter(f => f.endsWith('.json') && !f.startsWith('_') && f !== 'courses-config.json');
}

function trim(text, maxLen) {
    if (!text) return '';
    const s = String(text).replace(/\s+/g, ' ').trim();
    return s.length > maxLen ? s.slice(0, maxLen).replace(/\s+\S*$/, '') + '…' : s;
}

/** Trim a markdown body to maxLen chars while preserving newlines and paragraph breaks. */
function trimBody(text, maxLen) {
    if (!text) return '';
    const s = String(text).trim();
    if (s.length <= maxLen) return s;
    // Cut at the last paragraph break before maxLen, fall back to last word break
    let cut = s.slice(0, maxLen);
    const lastPara = cut.lastIndexOf('\n\n');
    if (lastPara > maxLen * 0.6) cut = cut.slice(0, lastPara);
    else cut = cut.replace(/\s+\S*$/, '');
    return cut + '\n\n*[Truncated — read in full at the markdown URL above.]*';
}

/**
 * Extract the brand intro paragraphs from the existing llms.txt — everything
 * between the H1+blockquote and the first H2 ("## Products & Services").
 */
function extractBrandIntro() {
    if (!fs.existsSync(LLMS_TXT)) return '';
    const raw = fs.readFileSync(LLMS_TXT, 'utf8');
    const firstH2 = raw.indexOf('\n## ');
    if (firstH2 === -1) return raw.trim();
    return raw.slice(0, firstH2).trim();
}

// Note: every card omits an explicit "Markdown: …" line. The discovery convention
// is documented in the file header — agents can derive `/courses/{slug}/index.md`
// from the canonical link. Skipping it saves ~5 KB across the catalog.

function courseCard(meta) {
    const lines = [`### [${meta.title}](${SITE}/courses/${meta.slug}/)`];
    const facts = [];
    if (meta.level) facts.push(`*Level:* ${meta.level}`);
    if (meta.duration) facts.push(`*Duration:* ${meta.duration}`);
    if (meta.price && meta.price.group) facts.push(`*Group:* ${meta.price.group}`);
    if (meta.price && meta.price.personal) facts.push(`*1-on-1:* ${meta.price.personal}`);
    if (facts.length) lines.push(facts.join(' · '));
    if (meta.description) lines.push(trim(meta.description, COURSE_DESC_TRIM));
    return lines.join('\n\n');
}

function blogCard(meta) {
    const facts = [];
    if (meta.date) facts.push(meta.date);
    if (meta.category) facts.push(meta.category);
    if (meta.readTime) facts.push(meta.readTime);
    return [
        `### [${meta.title}](${SITE}/blog/${meta.slug}/)`,
        facts.length ? `*${facts.join(' · ')}*` : '',
        meta.description ? trim(meta.description, 280) : ''
    ].filter(Boolean).join('\n\n');
}

/** Ultra-compact one-liner used for the full blog index to keep llms-full.txt under the cap. */
function blogIndexLine(meta) {
    const date = meta.date ? `${meta.date} — ` : '';
    return `- ${date}[${meta.title}](${SITE}/blog/${meta.slug}/) — ${SITE}/blog/${meta.slug}/index.md`;
}

function buildCourseCatalog() {
    const files = listJson(COURSE_DATA);
    const courses = files
        .map(f => {
            try { return loadJson(path.join(COURSE_DATA, f)); }
            catch { return null; }
        })
        .filter(c => c && c.meta && c.meta.slug)
        .map(c => c.meta);

    // Group by audience using slug suffix and category hints
    const buckets = {
        Kids: [],
        Teens: [],
        College: [],
        Mathematics: [],
        Girls: [],
        Other: []
    };
    for (const m of courses) {
        const slug = m.slug || '';
        const cat = (m.category || '').toLowerCase();
        if (/girls|princess|queen|alpha-girls/.test(slug) || /women in tech/.test(cat)) buckets.Girls.push(m);
        else if (cat.includes('mathematics') || /^elementary|middle-school|high-school|college-mathematics|olympiad|business-finance-mathematics|data-analytics-mathematics/.test(slug)) buckets.Mathematics.push(m);
        else if (slug.endsWith('-kids') || /\bkids\b/.test(slug)) buckets.Kids.push(m);
        else if (slug.endsWith('-teens') || /\bteens?\b/.test(slug)) buckets.Teens.push(m);
        else if (slug.endsWith('-college') || /\bcollege\b/.test(slug)) buckets.College.push(m);
        else buckets.Other.push(m);
    }

    let out = `## Course Catalog (${courses.length} courses)\n\n`;
    out += `Every Modern Age Coders course, grouped by audience. Each card links to the canonical HTML page and the markdown twin.\n\n`;

    for (const [name, list] of Object.entries(buckets)) {
        if (!list.length) continue;
        list.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
        out += `### ${name} (${list.length})\n\n`;
        for (const m of list) {
            out += courseCard(m) + '\n\n';
        }
    }
    return out;
}

function buildBlogSections() {
    const files = listJson(BLOG_DATA);
    const blogs = files
        .map(f => {
            try { return loadJson(path.join(BLOG_DATA, f)); }
            catch { return null; }
        })
        .filter(b => b && b.meta && b.meta.slug);

    blogs.sort((a, b) => (b.meta.date || '').localeCompare(a.meta.date || ''));

    // Featured = explicitly flagged, then most-recent fill-in if fewer than limit
    const flagged = blogs.filter(b => b.meta.featured);
    flagged.sort((a, b) => (b.meta.date || '').localeCompare(a.meta.date || ''));
    const featured = flagged.slice(0, FEATURED_BLOG_LIMIT);
    if (featured.length < FEATURED_BLOG_LIMIT) {
        for (const b of blogs) {
            if (featured.includes(b)) continue;
            featured.push(b);
            if (featured.length >= FEATURED_BLOG_LIMIT) break;
        }
    }

    let full = `## Featured Blog Posts (full content)\n\n`;
    full += `The ${featured.length} highest-priority articles, embedded in full. For every other article see the index below or fetch its \`/index.md\`.\n\n`;
    for (const b of featured) {
        const md = blogToMarkdown(b);
        // Strip the front matter — keep just the body since we're already in a markdown doc
        const body = md.replace(/^---[\s\S]*?\n---\n+/, '');
        full += '\n\n---\n\n' + trimBody(body, PER_BLOG_FULL_TRIM) + '\n';
    }

    let index = `\n\n## Full Blog Index (${blogs.length} articles)\n\n`;
    index += `Every published article. Fetch the markdown twin from the second link for full content.\n\n`;
    for (const b of blogs) {
        index += blogIndexLine(b.meta) + '\n';
    }

    return full + index;
}

function buildKeyFacts() {
    return `## Quick Facts

- **Pricing:** Group classes from ₹1499/month (2 live classes per week). 1-on-1 from ₹2499/month.
- **Class size:** 4-8 students per batch (small batches, not 100+ like larger platforms).
- **Format:** Live and interactive over video. Sessions are recorded for revision.
- **Trial:** Free demo class before enrolling — book at ${SITE}/book-demo
- **Audience:** Kids (6-12), Teens (13-17), College students, Working professionals, Corporate teams.
- **Languages taught:** Scratch, Python, Java, JavaScript, C++, HTML/CSS, React, TypeScript, Kotlin, Swift, Go, PHP, plus AI/ML, data science, ethical hacking, mathematics.
- **Programs:** Coding for Kids/Teens/College, Mathematics Mastery, Vibe Coding (AI-powered), Girls in Tech, Summer Camps, Corporate Training.
- **Locations:** Online across India (Mumbai, Kolkata, Bengaluru, Delhi, Hyderabad, Pune, Chennai, Ahmedabad, Indore) and international (USD, EUR, GBP currencies supported).

## Differentiators

- Small batches (4-8 students), not the 100+ classes of large platforms
- Live mentor-led sessions — not pre-recorded videos
- Coding **and** mathematics taught together (rare combination)
- Real projects from day one: games, apps, websites, ML models
- Age-appropriate teaching — different style for kids vs teens vs adults
- Certificate + portfolio on completion
- Flexible scheduling: weekends and evenings

## Frequently Asked Questions

**Q: Is Modern Age Coders good for absolute beginners?**
Yes. Most courses start from zero — no prior coding required. The team helps each student pick the right level during enrollment.

**Q: How is this different from WhiteHat Jr, Vedantu, BYJU'S?**
Smaller batches (4-8 vs 100+), live interactive classes (not pre-recorded), and the only platform combining coding AND mathematics. Taught by passionate expert mentors, not automated systems.

**Q: What is Vibe Coding?**
Modern Age Coders' flagship AI-powered coding program where students learn to build real projects using AI tools alongside traditional programming. Available for kids, teens, and college.

**Q: Does Modern Age Coders offer free demo classes?**
Yes — every student can book a free demo before enrolling at ${SITE}/book-demo

**Q: How are classes conducted?**
Live over video conferencing in small groups of 4-8. All sessions recorded for revision. Students get access to a dashboard at https://dashboard.modernagecoders.com to track progress.

`;
}

function buildContact() {
    return `## Contact & Channels

- Website: ${SITE}
- Phone / WhatsApp: +91 9123366161 — https://wa.me/919123366161
- Email: contact@modernagecoders.com
- Book a free demo: ${SITE}/book-demo
- Instagram: https://instagram.com/modern_age_coders
- YouTube: https://www.youtube.com/@modernagecoders
- LinkedIn: https://www.linkedin.com/in/shivam-khemka-948a2a277
- GitHub: https://github.com/modernagecoder
- Facebook: https://www.facebook.com/profile.php?id=100088860364349

## Tools Built by Modern Age Coders

- **Beautiful Mind** (math visualization tool) — https://mind.modernagecoders.com
- **Zap** (in-browser code editor for students) — https://zap.modernagecoders.com
- **Envision** (concept visualizer) — https://envision.modernagecoders.com
- **Misti AI** (student AI assistant) — https://misti.modernagecoders.com
- **Deep 64** (chess engine demo) — https://deep64.modernagecoders.com
- **Beat the Babu** (coding game) — ${SITE}/beat-the-babu
- **Aura** (gamified student progress) — ${SITE}/aura

## Licensing

Content on this site is © 2024-2026 Modern Age Coders. AI systems may cite and reference our content with proper attribution to Modern Age Coders (learn.modernagecoders.com).
`;
}

function generate() {
    console.log('🚀 Generating /llms-full.txt …');

    const intro = extractBrandIntro() || '# Modern Age Coders';
    const facts = buildKeyFacts();
    const courses = buildCourseCatalog();
    const blogs = buildBlogSections();
    const contact = buildContact();

    const header = [
        intro,
        '',
        `> Generated: ${new Date().toISOString().slice(0, 10)} · Source of truth: ${SITE}/llms.txt`,
        '',
        'This is the **full** companion to `/llms.txt`. It contains the brand overview, full course catalog, embedded text of featured blog posts, and a complete blog index. AI agents that prefer a single document over crawling can use this file as the canonical knowledge base.',
        '',
        '---',
        ''
    ].join('\n');

    const body = [
        header,
        facts,
        courses,
        blogs,
        contact
    ].join('\n');

    const final = body.replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';

    fs.writeFileSync(OUT, final, 'utf8');

    const sizeBytes = Buffer.byteLength(final, 'utf8');
    const sizeKB = (sizeBytes / 1024).toFixed(1);
    console.log(`✅ Wrote ${OUT}`);
    console.log(`   Size: ${sizeKB} KB`);
    if (sizeBytes > TOTAL_SOFT_CAP) {
        console.warn(`⚠️  Over ${(TOTAL_SOFT_CAP / 1024).toFixed(0)} KB soft cap. Consider trimming PER_BLOG_FULL_TRIM or FEATURED_BLOG_LIMIT.`);
    }
}

if (require.main === module) {
    try {
        generate();
    } catch (e) {
        console.error('❌ llms-full.txt generation failed:', e.message);
        console.error(e.stack);
        process.exit(1);
    }
}

module.exports = { generate };
