/**
 * find-unused-files.js — Identify CSS/JS files in src/ that are not referenced anywhere.
 *
 * Scans every .html, .js, .css, .md file in the project and builds a set of
 * filenames that are referenced. Then lists files in src/css/ and src/js/
 * that don't appear in that set.
 *
 * Read-only: prints the list, doesn't delete anything.
 *
 * Run: node scripts/find-unused-files.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// Directories to SCAN for references (where files might be referenced from)
const SCAN_DIRS = [
    'src/pages',
    'src/css',
    'src/js',
    'src/admin',
    'components',
    'content',
    'scripts',
    'public',
    'lovewall/src',
    'lovewall/dist',
];

// Single files at root
const SCAN_FILES = [
    'sw.js',
    '_redirects',
    'netlify.toml',
    '_headers',
];

// Directories to AUDIT for unused files
const AUDIT_DIRS = [
    { dir: 'src/css', kind: 'css' },
    { dir: 'src/js', kind: 'js' },
];

const TEXT_EXTENSIONS = new Set(['.html', '.js', '.css', '.md', '.json', '.toml']);

function walk(dir, fn) {
    const full = path.join(ROOT, dir);
    if (!fs.existsSync(full)) return;
    function walkRecursive(d) {
        const entries = fs.readdirSync(d, { withFileTypes: true });
        for (const entry of entries) {
            const fp = path.join(d, entry.name);
            if (entry.isDirectory()) {
                if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
                walkRecursive(fp);
            } else {
                fn(fp);
            }
        }
    }
    walkRecursive(full);
}

// Build the set of referenced filenames
const referenced = new Set();

function scanFile(fp) {
    const ext = path.extname(fp).toLowerCase();
    if (!TEXT_EXTENSIONS.has(ext)) return;
    let content;
    try {
        content = fs.readFileSync(fp, 'utf-8');
    } catch (e) {
        return;
    }
    // Match anything that looks like a filename ending in .css or .js
    // (with or without query string, with or without path)
    const fileMatches = content.match(/[\w\-/.]+\.(css|js)(?=[\s'"?#)>;,]|$)/gi);
    if (!fileMatches) return;
    for (const m of fileMatches) {
        // Strip path, just keep filename
        const base = path.basename(m.split('?')[0]);
        referenced.add(base);
    }
}

console.log('Scanning for file references...');
for (const dir of SCAN_DIRS) walk(dir, scanFile);
for (const f of SCAN_FILES) {
    const fp = path.join(ROOT, f);
    if (fs.existsSync(fp)) scanFile(fp);
}

console.log('Found ' + referenced.size + ' unique file references\n');

// Now audit each target directory
const unusedByKind = {};
for (const { dir, kind } of AUDIT_DIRS) {
    unusedByKind[kind] = [];
    walk(dir, (fp) => {
        const ext = path.extname(fp).toLowerCase();
        if (ext !== '.' + kind) return;
        const base = path.basename(fp);
        if (!referenced.has(base)) {
            const rel = path.relative(ROOT, fp);
            const size = fs.statSync(fp).size;
            unusedByKind[kind].push({ file: rel, size });
        }
    });
}

let totalSize = 0;
for (const kind of Object.keys(unusedByKind)) {
    const list = unusedByKind[kind];
    console.log('=== UNUSED ' + kind.toUpperCase() + ' FILES (' + list.length + ') ===');
    list.sort((a, b) => b.size - a.size);
    for (const item of list) {
        const kb = (item.size / 1024).toFixed(1);
        console.log('  ' + kb.padStart(8) + ' KB  ' + item.file);
        totalSize += item.size;
    }
    console.log();
}

console.log('Total wasted: ' + (totalSize / 1024).toFixed(1) + ' KB');
