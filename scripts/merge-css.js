// Script to merge all supplementary CSS files for index.html into one bundle
const fs = require('fs');
const path = require('path');

const cssDir = path.join(__dirname, '..', 'src', 'css');

// Files in exact cascade order (matching index.html link order)
const files = [
    'responsive.css',
    'spacing-and-tabs-fix.css',
    'keyboard-navigation.css',
    'testimonials-carousel.css',
    'certificate-carousel.css',
    'mobile-testimonials-certificates-fix.css',
    'corporate-training.css',
    'mobile-nav-final-fix.css',
    'vertical-large-image-cards.css',
    'new-coding-cards.css',
    'mobile-centering-fix.css',
    'mobile-tabs-width-fix.css',
    'mobile-tab-content-fix.css',
    'mobile-testimonials-improved.css',
    'mobile-testimonials-compact.css',
    'try-coding-enhanced.css',
    'why-learn-section.css'
];

let output = `/**
 * INDEX BUNDLE CSS
 * Auto-generated bundle of all supplementary CSS files for index.html
 * This reduces 17 HTTP requests down to 1.
 * 
 * Files included (in cascade order):
${files.map((f, i) => ` *   ${i + 1}. ${f}`).join('\n')}
 *
 * Generated: ${new Date().toISOString()}
 */\n\n`;

for (const file of files) {
    const filePath = path.join(cssDir, file);
    if (!fs.existsSync(filePath)) {
        console.error(`WARNING: File not found: ${file}`);
        continue;
    }
    const content = fs.readFileSync(filePath, 'utf-8');
    output += `/* ============================================================ */\n`;
    output += `/* ===== FROM: ${file} ===== */\n`;
    output += `/* ============================================================ */\n\n`;
    output += content;
    output += '\n\n';
    console.log(`Added: ${file} (${content.length} bytes)`);
}

const outPath = path.join(cssDir, 'index-bundle.css');
fs.writeFileSync(outPath, output, 'utf-8');
console.log(`\nDone! Created: ${outPath}`);
console.log(`Total size: ${output.length} bytes (${(output.length / 1024).toFixed(1)} KB)`);
