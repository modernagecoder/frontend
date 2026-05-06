#!/usr/bin/env node

/**
 * Static page → markdown twin generator.
 *
 * Walks every HTML page in `src/pages/` (the hand-written, non-templated pages
 * like /about, /pricing, /faq, the homepage, city/locality landing pages, etc.)
 * and emits a `.md` companion right next to the `.html`.
 *
 * The build step `inline-components` and Netlify's serve step both leave these
 * `.md` files untouched, so they ride along for free.
 *
 * Routing for the .md companion is added to `_redirects` separately.
 *
 * Usage: `npm run generate:static-md` (or as part of `npm run generate:all`).
 */

'use strict';

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'src', 'pages');
const SITE = 'https://learn.modernagecoders.com';

// Files we never expose to AI (mirrors robots.txt disallow + dev-only pages)
const SKIP_NAMES = new Set([
    '404.html',
    'bootstrap.html',
    'check-status.html',
    'dummy.html',
    'form-example.html'
]);

function shouldSkip(filename) {
    if (SKIP_NAMES.has(filename)) return true;
    if (/^test-/i.test(filename)) return true;
    if (/-test\.html$/i.test(filename)) return true;
    return false;
}

// ---------- Metadata extraction ----------

function escapeYaml(s) {
    return JSON.stringify(String(s || ''));
}

function buildFrontMatter({ title, description, canonical, keywords, source }) {
    const lines = ['---'];
    if (title) lines.push(`title: ${escapeYaml(title)}`);
    if (description) lines.push(`description: ${escapeYaml(description)}`);
    if (canonical) lines.push(`canonical: ${canonical}`);
    if (keywords && keywords.length) {
        const list = keywords.slice(0, 12).map(k => escapeYaml(k)).join(', ');
        lines.push(`keywords: [${list}]`);
    }
    if (source) lines.push(`source: ${source}`);
    lines.push('---', '');
    return lines.join('\n');
}

// ---------- DOM → markdown walker ----------

const BLOCK_TAGS = new Set([
    'address', 'article', 'aside', 'blockquote', 'details', 'dialog', 'div',
    'dl', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'header',
    'hgroup', 'hr', 'main', 'menu', 'nav', 'ol', 'p', 'pre', 'section',
    'summary', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'ul',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
]);

function inlineText($, node) {
    if (!node) return '';
    if (node.type === 'text') {
        return node.data.replace(/\s+/g, ' ');
    }
    if (node.type !== 'tag') return '';

    const $node = $(node);
    const tag = node.name.toLowerCase();

    switch (tag) {
        case 'br':
            return '\n';
        case 'strong':
        case 'b':
            return `**${childrenInline($, node).trim()}**`;
        case 'em':
        case 'i':
            return `*${childrenInline($, node).trim()}*`;
        case 'code':
            return `\`${$node.text().replace(/`/g, '\\`')}\``;
        case 'a': {
            const text = childrenInline($, node).trim();
            const href = $node.attr('href') || '';
            if (!href || href.startsWith('javascript:') || href === '#') return text;
            // Drop anchor-only links (e.g. #book-demo) — markdown readers can't follow them anyway
            if (href.startsWith('#')) return text;
            return text ? `[${text}](${href})` : '';
        }
        case 'span':
        case 'small':
        case 'mark':
        case 'u':
        case 'sub':
        case 'sup':
            return childrenInline($, node);
        case 'img': {
            const alt = ($node.attr('alt') || '').replace(/[\[\]]/g, '');
            const src = $node.attr('src') || $node.attr('data-src') || '';
            if (!src) return '';
            return `![${alt}](${src})`;
        }
        default:
            return childrenInline($, node);
    }
}

function childrenInline($, node) {
    let out = '';
    for (const child of node.children || []) {
        out += inlineText($, child);
    }
    return out;
}

function emitListItems($, listNode, ordered) {
    const items = [];
    let n = 0;
    $(listNode).children('li').each((_, li) => {
        n++;
        const prefix = ordered ? `${n}. ` : '- ';
        const content = walkBlocks($, li, 0).trim();
        // Indent continuation lines so nested blocks render correctly
        const indented = content.split('\n').map((l, i) => i === 0 ? l : '  ' + l).join('\n');
        items.push(prefix + indented);
    });
    return items.join('\n') + '\n';
}

function emitTable($, tableNode) {
    const rows = [];
    $(tableNode).find('tr').each((_, tr) => {
        const cells = [];
        $(tr).children('th,td').each((__, cell) => {
            const text = childrenInline($, cell).replace(/\|/g, '\\|').replace(/\n/g, ' ').trim();
            cells.push(text || ' ');
        });
        if (cells.length) rows.push(cells);
    });
    if (!rows.length) return '';
    const head = rows[0];
    const body = rows.slice(1);
    let out = `| ${head.join(' | ')} |\n| ${head.map(() => '---').join(' | ')} |\n`;
    for (const row of body) out += `| ${row.join(' | ')} |\n`;
    return out + '\n';
}

function walkBlocks($, node, depth) {
    if (!node) return '';
    if (node.type === 'text') {
        const t = node.data.replace(/\s+/g, ' ');
        return t.trim() ? t : '';
    }
    if (node.type !== 'tag') return '';

    const tag = node.name.toLowerCase();
    const $node = $(node);

    // Skip noise nodes outright
    if (['script', 'style', 'noscript', 'iframe', 'svg', 'canvas', 'video', 'audio', 'template'].includes(tag)) return '';
    if ($node.attr('hidden') !== undefined) return '';
    if ($node.attr('aria-hidden') === 'true') return '';
    const role = $node.attr('role') || '';
    if (role === 'dialog' || role === 'navigation' || role === 'contentinfo') return '';
    const classes = ($node.attr('class') || '').split(/\s+/);
    if (classes.some(c => /(^|-)modal$|^callback-overlay$|^enrollment-|^payment-modal$|^chatbot|^cookie-/.test(c))) return '';

    switch (tag) {
        case 'h1': case 'h2': case 'h3': case 'h4': case 'h5': case 'h6': {
            const lvl = parseInt(tag[1], 10);
            // Headings should be a single line — collapse any <br> or interior whitespace
            const text = childrenInline($, node).replace(/\s+/g, ' ').trim();
            if (!text) return '';
            return `\n\n${'#'.repeat(lvl)} ${text}\n\n`;
        }

        case 'p': {
            const text = childrenInline($, node).trim();
            return text ? `\n\n${text}\n\n` : '';
        }

        case 'ul':
            return '\n\n' + emitListItems($, node, false) + '\n';
        case 'ol':
            return '\n\n' + emitListItems($, node, true) + '\n';

        case 'pre': {
            const codeNode = $node.children('code').first();
            const lang = codeNode.length ? (codeNode.attr('class') || '').match(/language-(\w+)/)?.[1] || '' : '';
            const code = (codeNode.length ? codeNode.text() : $node.text()).replace(/\n+$/, '');
            return `\n\n\`\`\`${lang}\n${code}\n\`\`\`\n\n`;
        }

        case 'blockquote': {
            // Walk CHILDREN (not the same node) — recursing on `node` here would loop forever.
            let inner = '';
            for (const child of node.children || []) {
                inner += walkBlocks($, child, depth + 1);
            }
            inner = inner.trim();
            if (!inner) return '';
            const quoted = inner.split('\n').map(l => l ? `> ${l}` : '>').join('\n');
            return `\n\n${quoted}\n\n`;
        }

        case 'hr':
            return `\n\n---\n\n`;

        case 'table':
            return '\n\n' + emitTable($, node);

        case 'figure': {
            // Walk CHILDREN (not the same node) — recursing on `node` here would loop forever.
            let inner = '';
            for (const child of node.children || []) {
                inner += walkBlocks($, child, depth + 1);
            }
            inner = inner.trim();
            return inner ? `\n\n${inner}\n\n` : '';
        }
        case 'figcaption': {
            const text = childrenInline($, node).trim();
            return text ? `\n\n*${text}*\n\n` : '';
        }

        // Forms and form controls — interactive content has no markdown equivalent
        case 'form': case 'input': case 'textarea': case 'select': case 'option':
        case 'button': case 'label':
            return '';

        case 'img': case 'a': case 'br': case 'strong': case 'b': case 'em':
        case 'i': case 'code': case 'span': case 'small': case 'mark': case 'u':
        case 'sub': case 'sup': {
            const text = inlineText($, node).trim();
            return text ? text : '';
        }

        // Generic block container — recurse
        default: {
            let out = '';
            for (const child of node.children || []) {
                out += walkBlocks($, child, depth + 1);
            }
            return out;
        }
    }
}

function tidy(md) {
    return md
        .replace(/\r\n/g, '\n')
        .replace(/[ \t]+\n/g, '\n')
        .replace(/\n{3,}/g, '\n\n')
        .replace(/^[ \t]+|[ \t]+$/gm, m => m.replace(/\t/g, '    '))
        .trim();
}

// ---------- Per-file conversion ----------

function htmlToMarkdownPage(html, relSource) {
    const $ = cheerio.load(html, { decodeEntities: true });

    const title = $('title').first().text().trim();
    const description = ($('meta[name="description"]').attr('content') || '').trim();
    const canonical = ($('link[rel="canonical"]').attr('href') || '').trim();
    const keywordsRaw = ($('meta[name="keywords"]').attr('content') || '').trim();
    const keywords = keywordsRaw ? keywordsRaw.split(',').map(s => s.trim()).filter(Boolean) : [];

    // Some pages don't use <main> — fall back to <body> with extra pruning.
    let $main = $('main').first();
    if (!$main.length) {
        const $body = $('body').first();
        if (!$body.length) return null;
        // Strip page chrome that <main> would have excluded by structure
        $body.find('header, nav, footer').remove();
        $body.find('.site-header, .site-footer, .navbar, .nav, .footer, .header').remove();
        $main = $body;
    }

    // Pre-prune nodes we will never want, so the walker doesn't have to think about them
    $main.find('script, style, noscript, iframe, svg, canvas, video, audio, template').remove();
    $main.find('[hidden], [aria-hidden="true"]').remove();
    $main.find('[role="dialog"], [role="navigation"], [role="contentinfo"]').remove();
    $main.find('.modal, .callback-overlay, .callback-modal, .enrollment-modal, .payment-modal, .chatbot, .cookie-banner').remove();
    $main.find('.cta-button, .btn, .button').each((_, el) => {
        // Keep CTA text content but unwrap from the styling element so it appears as plain text
        const $el = $(el);
        if ($el.is('a') && $el.attr('href')) return; // keep links
        $el.replaceWith($el.text());
    });

    let body = walkBlocks($, $main[0], 0);
    body = tidy(body);

    if (!body) return null;

    const fm = buildFrontMatter({
        title,
        description,
        canonical: canonical || null,
        keywords,
        source: relSource
    });

    // No prepended `# title` — the body's own H1 serves as the visible heading,
    // and the SEO title lives in the front matter. Avoids the double-H1 problem.
    const intro = description ? `> ${description}\n\n` : '';

    const footer = canonical
        ? `\n\n---\n\n*Canonical: ${canonical.startsWith('http') ? canonical : SITE + canonical}*\n`
        : '';

    return fm + intro + body + footer;
}

// ---------- Driver ----------

function listStaticPages() {
    const out = [];
    const queue = [PAGES_DIR];
    while (queue.length) {
        const dir = queue.shift();
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            const full = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                queue.push(full);
                continue;
            }
            if (!entry.isFile() || !entry.name.endsWith('.html')) continue;
            if (shouldSkip(entry.name)) continue;
            out.push(full);
        }
    }
    return out;
}

/**
 * Inject `<link rel="alternate" type="text/markdown" href="/foo.md">` into the
 * HTML head if it isn't already there. Returns the (possibly modified) HTML.
 * Idempotent — running twice is a no-op.
 */
function ensureAlternateMarkdownLink(html, mdUrlPath) {
    if (/<link[^>]+rel=["']alternate["'][^>]+type=["']text\/markdown["']/i.test(html)) {
        return html; // already present
    }
    const tag = `    <link rel="alternate" type="text/markdown" href="${mdUrlPath}" title="Markdown version for AI agents">\n`;
    // Anchor: insert immediately after the canonical link if present, else after <head>
    const canonicalRegex = /(<link[^>]+rel=["']canonical["'][^>]*>\s*)/i;
    if (canonicalRegex.test(html)) {
        return html.replace(canonicalRegex, `$1\n${tag}`);
    }
    const headRegex = /(<head[^>]*>\s*)/i;
    if (headRegex.test(html)) {
        return html.replace(headRegex, `$1\n${tag}`);
    }
    return html;
}

/** Derive the public .md URL from the source file path (src/pages/foo.html → /foo.md). */
function urlPathForMd(file) {
    const rel = path.relative(PAGES_DIR, file).replace(/\\/g, '/');
    if (rel === 'index.html') return '/index.md';
    return '/' + rel.replace(/\.html$/, '.md');
}

function generate() {
    console.log('🚀 Generating markdown twins for static pages…');

    const files = listStaticPages();
    console.log(`📄 Found ${files.length} static pages`);

    let ok = 0, skipped = 0, failed = 0, injected = 0;
    let totalBytes = 0;

    for (const file of files) {
        const rel = path.relative(ROOT, file).replace(/\\/g, '/');
        try {
            const html = fs.readFileSync(file, 'utf8');
            const md = htmlToMarkdownPage(html, rel);
            if (!md) {
                skipped++;
                continue;
            }

            // 1. Write the .md companion
            const mdPath = file.replace(/\.html$/, '.md');
            fs.writeFileSync(mdPath, md, 'utf8');
            ok++;
            totalBytes += Buffer.byteLength(md, 'utf8');

            // 2. Idempotently inject <link rel="alternate" type="text/markdown"> into the HTML head
            const mdUrl = urlPathForMd(file);
            const updated = ensureAlternateMarkdownLink(html, mdUrl);
            if (updated !== html) {
                fs.writeFileSync(file, updated, 'utf8');
                injected++;
            }
        } catch (e) {
            failed++;
            console.warn(`  ⚠️  ${rel}: ${e.message}`);
        }
    }

    const avgKB = ok ? (totalBytes / ok / 1024).toFixed(1) : '0';
    console.log(`✅ Wrote ${ok} markdown files  (skipped ${skipped}, failed ${failed})`);
    console.log(`   Total ${(totalBytes / 1024).toFixed(1)} KB · avg ${avgKB} KB/page`);
    console.log(`   Injected <link rel="alternate" type="text/markdown"> into ${injected} HTML heads`);
}

if (require.main === module) {
    try {
        generate();
    } catch (e) {
        console.error('❌ generate-static-md failed:', e.message);
        console.error(e.stack);
        process.exit(1);
    }
}

module.exports = { generate, htmlToMarkdownPage };
