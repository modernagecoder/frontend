#!/usr/bin/env node
/**
 * verify-demo-time-picker.js
 * ------------------------------------------------------------------
 * Fails the build when any page, template or script builds its OWN demo time
 * picker instead of using the shared one in src/js/demo-slot-picker.js.
 *
 * Why: overseas visitors must see demo times in their own clock only, never
 * in IST (owner, 2026-10-26). The shared picker does that, and sends the team
 * both clocks. Until then three separate pickers (callback modal, /book-demo,
 * priority demo form) each showed "06:00 pm IST" chips, and a fix to one did
 * not reach the others. A new page that copies an old picker would bring the
 * IST chips back, so this check names the file instead.
 *
 * How to build a demo time picker on a new page:
 *   - markup only: #bd-day-row, #bd-time-row (empty divs) and a hidden
 *     #demo-slot input; demo-slot-picker.js mounts itself on them; or
 *   - from script: window.MACDemoTime.build({ dayRow, timeRow, hidden, ... }).
 *
 * Usage:  node scripts/verify-demo-time-picker.js
 * Exit 1 when a home-made IST picker is found.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

// Pages, shared scripts, components and the generators that write pages.
// content/ is page DATA (copy, facts) and is read by the generators in
// scripts/, so a picker can only enter through the places listed here.
const SCAN = ['src/pages', 'src/js', 'components', 'scripts'];
const SKIP_DIRS = new Set(['node_modules', '.git', 'admin', 'generated-md']);
const ALLOWED = new Set([
    path.join('src', 'js', 'demo-slot-picker.js'),
    path.join('scripts', 'verify-demo-time-picker.js')
]);

// Fingerprints of a picker that labels its chips in IST. Narrow on purpose:
// prose that mentions IST (batch times, time-zone tables) never matches.
const PATTERNS = [
    { re: /DEMO_HOURS_IST/, why: 'defines its own IST demo window' },
    { re: /\bistLabel\b/, why: 'builds IST chip labels' },
    { re: /['"] IST<\/b>/, why: 'renders "IST" inside a time chip' },
    { re: /['"]\s*IST['"]\s*\+\s*\(?\s*isIST/, why: 'writes an IST slot string itself' }
];

function walk(rel, out) {
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) return;
    const stat = fs.statSync(abs);
    if (stat.isFile()) { out.push(rel); return; }
    for (const entry of fs.readdirSync(abs, { withFileTypes: true })) {
        if (SKIP_DIRS.has(entry.name)) continue;
        const child = path.join(rel, entry.name);
        if (entry.isDirectory()) walk(child, out);
        else if (/\.(html|js|mjs|cjs)$/.test(entry.name)) out.push(child);
    }
}

const files = [];
SCAN.forEach((rel) => walk(rel, files));

const hits = [];
for (const rel of files) {
    if (ALLOWED.has(rel)) continue;
    const text = fs.readFileSync(path.join(ROOT, rel), 'utf8');
    for (const p of PATTERNS) {
        const m = text.match(p.re);
        if (m) {
            const line = text.slice(0, m.index).split('\n').length;
            hits.push(`${rel.replace(/\\/g, '/')}:${line}  ${p.why}`);
        }
    }
}

if (hits.length) {
    console.error('❌ Home-made demo time picker found. Overseas visitors would see IST.');
    console.error('   Use the shared picker (src/js/demo-slot-picker.js, window.MACDemoTime) instead:');
    hits.forEach((h) => console.error('   ' + h));
    process.exit(1);
}
console.log(`✅ verify:demo-time: ${files.length} files checked, every demo time picker is the shared one`);
