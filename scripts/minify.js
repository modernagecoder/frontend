/**
 * Minify the CSS and JS files the pages actually load.
 * Run: npm run minify           (writes in place; Netlify runs this, the build is ephemeral)
 *      node scripts/minify.js --dry   (list what would be minified, touch nothing)
 *
 * Source files in git remain unminified.
 *
 * WHY THE LIST IS BUILT FROM THE HTML
 * This script used to carry a hand-typed list of 7 CSS and 3 JS files. The
 * site moved on: editorial-theme.css and index-redesign.css style most pages,
 * international-pricing.js and country-code-selector.js run on 500+ pages,
 * and none of them were on the list, so visitors received the unminified
 * originals while the "optimised" list shrank files few pages used. The list
 * is now derived from every <link href="/css/..."> and <script src="/js/...">
 * across src/pages, the components, the generated blog/course/resource pages
 * and the page templates, so a new stylesheet is covered the day it is added.
 *
 * Skipped on purpose: already-minified *.min.* files, and the
 * *.generated.js pricing data (stamped by pricing:apply with a content hash;
 * it is tiny and rewriting it after hashing buys nothing).
 */

const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');
const { minify } = require('terser');

const ROOT = path.resolve(__dirname, '..');
const DRY = process.argv.includes('--dry');

// Where HTML that can reference assets lives.
const HTML_ROOTS = [
    'src/pages',
    'components',
    'content/blog/template',
    'content/courses/template',
    'content/resources/template',
    'content/blog/generated',
    'content/courses/generated',
    'content/resources/generated',
];

// URL prefix -> directory on disk (mirrors the 200 rewrites in _redirects).
const URL_MAP = [
    ['/css/', 'src/css/'],
    ['/js/', 'src/js/'],
];

function walkHtml(dir, out) {
    const full = path.join(ROOT, dir);
    if (!fs.existsSync(full)) return out;
    for (const e of fs.readdirSync(full, { withFileTypes: true })) {
        const rel = path.posix.join(dir, e.name);
        if (e.isDirectory()) walkHtml(rel, out);
        else if (/\.html?$/i.test(e.name)) out.push(rel);
    }
    return out;
}

function collectAssets() {
    const refs = new Map(); // disk path -> number of referencing files
    const re = /(?:href|src)\s*=\s*["']((?:\/css\/|\/js\/)[^"'?#]+)/g;
    let files = 0;
    for (const dir of HTML_ROOTS) {
        for (const rel of walkHtml(dir, [])) {
            files++;
            const html = fs.readFileSync(path.join(ROOT, rel), 'utf8');
            const seen = new Set();
            let m;
            while ((m = re.exec(html))) {
                const url = m[1];
                if (seen.has(url)) continue;
                seen.add(url);
                for (const [prefix, dir] of URL_MAP) {
                    if (url.startsWith(prefix)) {
                        const disk = dir + url.slice(prefix.length);
                        refs.set(disk, (refs.get(disk) || 0) + 1);
                    }
                }
            }
        }
    }
    return { refs, files };
}

function shouldSkip(disk) {
    const base = path.basename(disk);
    if (/\.min\.(css|js)$/i.test(base)) return 'already minified';
    if (/\.generated\.js$/i.test(base)) return 'generated pricing data';
    if (!fs.existsSync(path.join(ROOT, disk))) return 'not found';
    return null;
}

async function minifyCSS(files) {
    const cleanCSS = new CleanCSS({ level: 1, compatibility: '*' });
    let before = 0, after = 0, done = 0;
    for (const file of files) {
        const filePath = path.join(ROOT, file);
        const input = fs.readFileSync(filePath, 'utf8');
        const output = cleanCSS.minify(input);
        if (output.errors && output.errors.length > 0) {
            console.error(`  [error] ${file}:`, output.errors);
            continue;
        }
        if (!DRY) fs.writeFileSync(filePath, output.styles, 'utf8');
        before += input.length;
        after += output.styles.length;
        done++;
        console.log(`  [css] ${file}: ${(input.length / 1024).toFixed(1)}KB -> ${(output.styles.length / 1024).toFixed(1)}KB (${Math.round((1 - output.styles.length / input.length) * 100)}% smaller)`);
    }
    console.log(`  [css] ${done} files: ${(before / 1024).toFixed(1)}KB -> ${(after / 1024).toFixed(1)}KB\n`);
}

async function minifyJS(files) {
    let before = 0, after = 0, done = 0;
    for (const file of files) {
        const filePath = path.join(ROOT, file);
        const input = fs.readFileSync(filePath, 'utf8');
        let result;
        try {
            result = await minify(input, {
                compress: { drop_console: true, passes: 2 },
                mangle: true,
                format: { comments: false },
            });
        } catch (err) {
            // A parse error means the file is not plain script (or is broken);
            // leave the original in place rather than fail the deploy.
            console.error(`  [error] ${file}: ${err.message} (left unminified)`);
            continue;
        }
        if (!result.code) { console.error(`  [error] ${file}: empty output (left unminified)`); continue; }
        if (!DRY) fs.writeFileSync(filePath, result.code, 'utf8');
        before += input.length;
        after += result.code.length;
        done++;
        console.log(`  [js]  ${file}: ${(input.length / 1024).toFixed(1)}KB -> ${(result.code.length / 1024).toFixed(1)}KB (${Math.round((1 - result.code.length / input.length) * 100)}% smaller)`);
    }
    console.log(`  [js]  ${done} files: ${(before / 1024).toFixed(1)}KB -> ${(after / 1024).toFixed(1)}KB\n`);
}

async function main() {
    console.log(`\nMinifying assets referenced by the HTML${DRY ? ' (dry run, nothing written)' : ''}...\n`);
    const { refs, files } = collectAssets();
    const css = [], js = [], skipped = [];
    for (const [disk] of [...refs.entries()].sort((a, b) => b[1] - a[1])) {
        const why = shouldSkip(disk);
        if (why) { skipped.push(`${disk} (${why})`); continue; }
        if (disk.endsWith('.css')) css.push(disk);
        else if (disk.endsWith('.js')) js.push(disk);
    }
    console.log(`  scanned ${files} HTML files: ${css.length} CSS + ${js.length} JS referenced, ${skipped.length} skipped`);
    skipped.forEach((s) => console.log(`  [skip] ${s}`));
    console.log('');
    await minifyCSS(css);
    await minifyJS(js);
    console.log('Minification complete.\n');
}

main().catch((err) => { console.error('Minification failed:', err); process.exit(1); });
