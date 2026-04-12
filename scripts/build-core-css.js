/**
 * build-core-css.js — Merge the new architecture files into core.css
 *
 * Phase 1 CSS Architecture Overhaul.
 * Outputs src/css/core.css which is the single file every page loads
 * for tokens + reset + base + layout + components + utilities.
 *
 * Page-specific CSS (pages/*.css) stays separate for code splitting.
 */

const fs = require('fs');
const path = require('path');

const cssDir = path.join(__dirname, '..', 'src', 'css');

// Order matters — files cascade in this order.
// @layer in tokens.css declares layer order, but physical order is still
// used when a property isn't inside a layer.
const files = [
    'tokens.css',
    'reset.css',
    'base.css',
    'layout.css',
    'components.css',
    'utilities.css',
];

let output = `/**
 * CORE.CSS — Auto-generated bundle
 *
 * DO NOT EDIT DIRECTLY.
 * Edit the source files in src/css/ and run \`npm run build:core-css\`.
 *
 * Source files (in cascade order):
${files.map((f, i) => ` *   ${i + 1}. ${f}`).join('\n')}
 *
 * Generated: ${new Date().toISOString()}
 */

`;

let totalBytes = 0;

for (const file of files) {
    const filePath = path.join(cssDir, file);
    if (!fs.existsSync(filePath)) {
        console.error(`[ERROR] Missing source file: ${file}`);
        process.exit(1);
    }
    const content = fs.readFileSync(filePath, 'utf-8');
    output += `\n/* ============================================================ */\n`;
    output += `/* ===== FROM: ${file} ===== */\n`;
    output += `/* ============================================================ */\n\n`;
    output += content;
    output += '\n';
    totalBytes += content.length;
    console.log(`  [add] ${file}: ${(content.length / 1024).toFixed(1)} KB`);
}

const outPath = path.join(cssDir, 'core.css');
fs.writeFileSync(outPath, output, 'utf-8');

console.log(`\n  [done] core.css: ${(output.length / 1024).toFixed(1)} KB total`);
console.log(`  [path] ${outPath}`);
