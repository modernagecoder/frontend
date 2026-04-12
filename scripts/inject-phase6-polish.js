/**
 * inject-phase6-polish.js — Add Phase 6 polish CSS/JS to all HTML pages
 *
 * For every HTML page in src/pages/, this script:
 *   1. Detects the body class (about-page, pricing-page, etc.)
 *   2. Picks the matching page-specific CSS from src/css/pages/
 *   3. Injects (idempotent — re-runs are safe):
 *      - <link rel="stylesheet" href="/css/pages/global.css">
 *      - <link rel="stylesheet" href="/css/pages/{matched}.css">
 *      - <script src="/js/ux-enhancements.js" defer>
 *      - <script src="/js/hover-prefetch.js" defer>
 *      - SW registration script
 *
 * Run: node scripts/inject-phase6-polish.js
 *
 * Idempotent: looks for the marker comment "Phase 6 UI/UX Polish" and skips
 * any file that already has it.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'src', 'pages');

const MARKER = 'Phase 7 Distinctive Identity';
const VERSION = '20260411-p7';

// Body class → page CSS mapping. Pages without a matching class get only global.css.
const PAGE_CSS_MAP = {
    'about-page': 'about.css',
    'pricing-page': 'pricing.css',
    'contact-page': 'contact.css',
    'courses-page': 'courses-listing.css',
    'faq-page': 'faq.css',
    'best-coding-page': 'landing.css',
    'landing-page': 'landing.css',
    'blog-page': 'blog.css',
    'blog-detail-page': 'blog.css',
    'course-detail-page': 'course-detail.css',
};

function detectBodyClass(html) {
    const m = html.match(/<body[^>]*\bclass=["']([^"']+)["']/);
    if (!m) return null;
    return m[1].split(/\s+/);
}

function pickPageCss(bodyClasses) {
    if (!bodyClasses) return null;
    for (const c of bodyClasses) {
        if (PAGE_CSS_MAP[c]) return PAGE_CSS_MAP[c];
    }
    return null;
}

function buildInjection(pageCss) {
    const lines = [];
    lines.push('    <!-- ' + MARKER + ' -->');
    lines.push('    <link rel="stylesheet" href="/css/pages/global.css?v=' + VERSION + '">');
    if (pageCss) {
        lines.push('    <link rel="stylesheet" href="/css/pages/' + pageCss + '?v=' + VERSION + '">');
    }
    // Phase 7 — distinctive identity layer (loaded LAST so it overrides)
    lines.push('    <link rel="stylesheet" href="/css/pages/identity.css?v=' + VERSION + '">');
    lines.push('    <script src="/js/ux-enhancements.js" defer></script>');
    lines.push('    <script src="/js/hover-prefetch.js" defer></script>');
    lines.push('    <script>if(\'serviceWorker\' in navigator){window.addEventListener(\'load\',function(){navigator.serviceWorker.register(\'/sw.js\').catch(function(){});});}</script>');
    return lines.join('\n');
}

function injectIntoHtml(html, bodyClasses) {
    if (html.indexOf(MARKER) !== -1) {
        return { html, status: 'already-injected' };
    }

    const pageCss = pickPageCss(bodyClasses);
    const injection = buildInjection(pageCss);

    // Insert just before </head>
    const headEnd = html.indexOf('</head>');
    if (headEnd === -1) {
        return { html, status: 'no-head' };
    }

    const newHtml = html.slice(0, headEnd) + injection + '\n' + html.slice(headEnd);
    return { html: newHtml, status: 'injected', pageCss: pageCss || '(global only)' };
}

function processFile(filePath) {
    const html = fs.readFileSync(filePath, 'utf-8');
    const bodyClasses = detectBodyClass(html);
    const result = injectIntoHtml(html, bodyClasses);

    if (result.status === 'injected') {
        fs.writeFileSync(filePath, result.html, 'utf-8');
    }
    return {
        file: path.relative(ROOT, filePath),
        status: result.status,
        bodyClass: bodyClasses ? bodyClasses.join(' ') : '(none)',
        pageCss: result.pageCss,
    };
}

function walkDir(dir, fn) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            walkDir(full, fn);
        } else if (entry.name.endsWith('.html')) {
            fn(full);
        }
    }
}

console.log('🎨 Phase 6 polish injection — scanning HTML pages...\n');

let stats = { injected: 0, skipped: 0, errors: 0 };
const samples = [];

const SCAN_DIRS = [
    PAGES_DIR,
    path.join(ROOT, 'content', 'blog', 'generated'),
    path.join(ROOT, 'content', 'courses', 'generated'),
];

for (const dir of SCAN_DIRS) {
    walkDir(dir, (file) => {
        try {
            const result = processFile(file);
            if (result.status === 'injected') {
                stats.injected++;
                if (samples.length < 8) samples.push(result);
            } else if (result.status === 'already-injected') {
                stats.skipped++;
            } else {
                stats.errors++;
                console.log('  ⚠ ' + result.status + ': ' + result.file);
            }
        } catch (e) {
            stats.errors++;
            console.log('  ✗ ' + path.relative(ROOT, file) + ': ' + e.message);
        }
    });
}

console.log('Sample injections:');
samples.forEach(s => {
    console.log('  + ' + s.file);
    console.log('    body=' + s.bodyClass + ' → page-css=' + s.pageCss);
});

console.log();
console.log('Summary:');
console.log('  Injected:', stats.injected);
console.log('  Skipped (already done):', stats.skipped);
console.log('  Errors:', stats.errors);
