/**
 * Build-Time Component Inliner
 * 
 * Replaces <div id="nav-placeholder"></div> and <div id="footer-placeholder"></div>
 * with actual nav.html and footer.html content at build time.
 * 
 * This eliminates:
 *   - FOUC (Flash of Unstyled Content) for nav/footer
 *   - Extra HTTP requests at runtime
 *   - SEO blind spots (Google can now see nav/footer in source)
 * 
 * Run: node scripts/inline-components.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// Component files
const NAV_FILE = path.join(ROOT, 'components', 'nav.html');
const FOOTER_FILE = path.join(ROOT, 'components', 'footer.html');

// Scripts that must exist on every page, injected before </body> at build time.
//
//   attribution.js     - records which page earned each lead. Must run on every
//                        page, since any page can be the first one a visitor sees.
//   demo-slot-picker.js- builds the optional "pick a demo time" chips inside the
//                        callback modal, whose markup is inlined on 438 pages.
//
// Injecting them here rather than editing pages by hand is what keeps this
// working for generated blog and course pages too, which are rebuilt on deploy.
const GLOBAL_LEAD_SCRIPTS = [
    '/js/attribution.js',
    '/js/demo-slot-picker.js'
];

// Directories to scan for HTML files
const SCAN_DIRS = [
    path.join(ROOT, 'src', 'pages'),
    path.join(ROOT, 'content', 'blog', 'generated'),
    path.join(ROOT, 'content', 'courses', 'generated'),
];

// ── Read component HTML ──────────────────────────────────────────

function readComponent(filePath) {
    if (!fs.existsSync(filePath)) {
        console.error(`❌ Component file not found: ${filePath}`);
        process.exit(1);
    }
    return fs.readFileSync(filePath, 'utf-8');
}

// ── Find all HTML files recursively ──────────────────────────────

function findHtmlFiles(dir) {
    const results = [];
    if (!fs.existsSync(dir)) return results;

    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...findHtmlFiles(fullPath));
        } else if (entry.name.endsWith('.html')) {
            results.push(fullPath);
        }
    }
    return results;
}

// ── Inline a single HTML file ────────────────────────────────────

function inlineFile(filePath, navHtml, footerHtml) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const original = content;
    let changes = 0;

    // Wrappers for re-inlining support
    const NAV_START = '<!-- BEGIN_INLINED_NAV -->';
    const NAV_END = '<!-- END_INLINED_NAV -->';
    const FOOTER_START = '<!-- BEGIN_INLINED_FOOTER -->';
    const FOOTER_END = '<!-- END_INLINED_FOOTER -->';

    const wrappedNav = `${NAV_START}\n${navHtml}\n${NAV_END}`;
    const wrappedFooter = `${FOOTER_START}\n${footerHtml}\n${FOOTER_END}`;

    // 1. Update ALREADY INLINED nav (Update mode)
    //    Look for content between Start/End comments
    const navBlockRegex = new RegExp(`${NAV_START}[\\s\\S]*?${NAV_END}`, 'gi');
    if (navBlockRegex.test(content)) {
        content = content.replace(navBlockRegex, wrappedNav);
        changes++;
    }
    // 2. Or replace placeholder (First run)
    else {
        const navPlaceholderRegex = /<div\s+id=["']nav-placeholder["']\s*>\s*<\/div>/gi;
        if (navPlaceholderRegex.test(content)) {
            content = content.replace(navPlaceholderRegex, wrappedNav);
            changes++;
        }
    }

    // 3. Update ALREADY INLINED footer (Update mode)
    const footerBlockRegex = new RegExp(`${FOOTER_START}[\\s\\S]*?${FOOTER_END}`, 'gi');
    if (footerBlockRegex.test(content)) {
        content = content.replace(footerBlockRegex, wrappedFooter);
        changes++;
    }
    // 4. Or replace placeholder (First run)
    else {
        const footerPlaceholderRegex = /<div\s+id=["']footer-placeholder["']\s*>\s*<\/div>/gi;
        if (footerPlaceholderRegex.test(content)) {
            content = content.replace(footerPlaceholderRegex, wrappedFooter);
            changes++;
        }
    }

    // 5. Remove <script src="/js/components-loader.js"></script> (and /src/js/ variant)
    // ... (rest remains same)
    const loaderScriptRegex = /\s*<script\s+src=["']\/(?:src\/)?js\/components-loader\.js["']\s*>\s*<\/script>\s*/gi;
    if (loaderScriptRegex.test(content)) {
        content = content.replace(loaderScriptRegex, '\n');
        changes++;
    }

    // 4. Remove custom inline fetch patterns for nav
    //    Pattern: fetch('/components/nav.html').then(r => r.text()).then(d => { ... });
    const inlineNavFetchRegex = /\s*fetch\s*\(\s*['"]\/components\/nav\.html['"]\s*\)\.then\s*\([^)]*\)\s*\.then\s*\([^{]*\{[^}]*\}\s*\)\s*;?\s*/gi;
    content = content.replace(inlineNavFetchRegex, '\n');

    // 5. Remove custom inline fetch patterns for footer
    const inlineFooterFetchRegex = /\s*fetch\s*\(\s*['"]\/components\/footer\.html['"]\s*\)\.then\s*\([^)]*\)\s*\.then\s*\([^{]*\{[^}]*\}\s*\)\s*;?\s*/gi;
    content = content.replace(inlineFooterFetchRegex, '\n');

    // 6. Remove multi-line fetch blocks for nav (business-solutions, success-stories style)
    const multilineNavFetchRegex = /\s*\/\/\s*Load\s+navigation.*?\n\s*fetch\s*\(\s*['"]\/components\/nav\.html['"]\s*\)\s*\n\s*\.then\s*\(\s*response\s*=>\s*response\.text\(\)\s*\)\s*\n\s*\.then\s*\(\s*data\s*=>\s*\{[^}]*\}\s*\)\s*;?\s*/gi;
    content = content.replace(multilineNavFetchRegex, '\n');

    // 7. Remove multi-line fetch blocks for footer
    const multilineFooterFetchRegex = /\s*fetch\s*\(\s*['"]\/components\/footer\.html['"]\s*\)\s*\n\s*\.then\s*\(\s*response\s*=>\s*response\.text\(\)\s*\)\s*\n\s*\.then\s*\(\s*data\s*=>\s*\{[^}]*\}\s*\)\s*;?\s*/gi;
    content = content.replace(multilineFooterFetchRegex, '\n');

    // 8. Add componentsLoaded event dispatcher + copyright year (if we made changes)
    //    Insert just before </body>
    if (changes > 0) {
        const componentBootstrap = `
    <!-- Components inlined at build time -->
    <script>
        (function() {
            // Fire componentsLoaded event for backward compatibility
            document.dispatchEvent(new CustomEvent('componentsLoaded'));
            // Set copyright year
            var c = document.getElementById('copyright');
            if (c) c.innerHTML = '\\u00A9 ' + new Date().getFullYear() + ' Modern Age Coders. All Rights Reserved.';
        })();
    </script>`;

        content = content.replace(/<\/body>/i, componentBootstrap + '\n</body>');
    }

    // 9. Guarantee the site-wide lead scripts are on every page.
    //
    //    Deliberately OUTSIDE the `changes > 0` block above. Attribution has to
    //    record the first page of a visit, which means it must run on every
    //    page - not only the ones that happen to carry a nav or footer. Only
    //    362 of 588 static pages have a nav marker, so keying this off nav
    //    changes would silently miss around 40% of landing pages and quietly
    //    mis-credit the leads that came from them.
    //
    //    Idempotent: pages that already reference a script are left alone, so
    //    re-running the build never stacks up duplicate tags.
    if (/<\/body>/i.test(content)) {
        GLOBAL_LEAD_SCRIPTS.forEach((src) => {
            // Escape for use in a regex - these are plain paths, but building
            // the pattern from the constant keeps the two in step.
            const present = new RegExp(src.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
            if (!present.test(content)) {
                content = content.replace(
                    /<\/body>/i,
                    `    <script src="${src}" defer></script>\n</body>`
                );
            }
        });
    }

    // Write back if changed
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf-8');
        return true;
    }
    return false;
}

// ── Main ─────────────────────────────────────────────────────────

function main() {
    console.log('╔════════════════════════════════════════════════════════════╗');
    console.log('║  Build-Time Component Inliner                             ║');
    console.log('╚════════════════════════════════════════════════════════════╝\n');

    // Read components
    const navHtml = readComponent(NAV_FILE);
    const footerHtml = readComponent(FOOTER_FILE);
    console.log(`✅ Loaded nav.html (${navHtml.length} bytes)`);
    console.log(`✅ Loaded footer.html (${footerHtml.length} bytes)\n`);

    // Collect HTML files
    let allFiles = [];
    for (const dir of SCAN_DIRS) {
        const files = findHtmlFiles(dir);
        console.log(`📂 ${path.relative(ROOT, dir)}: ${files.length} HTML files`);
        allFiles.push(...files);
    }

    console.log(`\n🔍 Total HTML files to process: ${allFiles.length}\n`);

    // Process each file
    let inlinedCount = 0;
    let skippedCount = 0;

    for (const filePath of allFiles) {
        const relativePath = path.relative(ROOT, filePath);
        const wasInlined = inlineFile(filePath, navHtml, footerHtml);
        if (wasInlined) {
            console.log(`  ✅ ${relativePath}`);
            inlinedCount++;
        } else {
            skippedCount++;
        }
    }

    // Summary
    console.log('\n╔════════════════════════════════════════════════════════════╗');
    console.log(`║  ✅ Inlined: ${String(inlinedCount).padEnd(4)} | ⏭️  Skipped: ${String(skippedCount).padEnd(4)}              ║`);
    console.log('╚════════════════════════════════════════════════════════════╝\n');

    if (inlinedCount > 0) {
        console.log('🚀 Nav and footer are now embedded in the HTML source!');
        console.log('   ✅ No more FOUC');
        console.log('   ✅ Google can see nav/footer content');
        console.log('   ✅ No extra fetch() calls at runtime\n');
    }
}

main();
