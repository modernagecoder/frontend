/**
 * Properly clean template - remove duplicate footer and everything after it
 */
const fs = require('fs');
const path = require('path');

const TEMPLATE_PATH = path.join(__dirname, '../content/courses/template/course-template.html');

// Read template
let lines = fs.readFileSync(TEMPLATE_PATH, 'utf8').split('\n');

console.log(`📄 Template has ${lines.length} lines`);

// Find all footer-placeholder occurrences
let footerLines = [];
lines.forEach((line, index) => {
    if (line.includes('footer-placeholder')) {
        footerLines.push(index + 1); // Line numbers are 1-based
    }
});

console.log(`🔍 Found footer-placeholder at lines: ${footerLines.join(', ')}`);

if (footerLines.length < 2) {
    console.log('✅ Template is clean - only one footer');
    process.exit(0);
}

// Keep everything up to and including the first footer
// Then add the payment modal and close tags
const firstFooterLine = footerLines[0] - 1; // Convert to 0-based index

// Find where payment modal starts (should be after first footer)
let paymentModalLine = -1;
for (let i = firstFooterLine + 1; i < lines.length; i++) {
    if (lines[i].includes('<!-- PAYMENT CHOICE MODAL')) {
        paymentModalLine = i;
        break;
    }
}

if (paymentModalLine === -1) {
    console.log('❌ Payment modal not found');
    process.exit(1);
}

console.log(`📍 Payment modal starts at line ${paymentModalLine + 1}`);

// Find where the file should end (</html>)
let htmlEndLine = -1;
for (let i = paymentModalLine; i < lines.length; i++) {
    if (lines[i].trim() === '</html>') {
        htmlEndLine = i;
        break;
    }
}

if (htmlEndLine === -1) {
    console.log('❌ </html> not found after payment modal');
    process.exit(1);
}

console.log(`📍 First </html> after payment modal at line ${htmlEndLine + 1}`);

// Build clean template: everything up to first footer + payment modal section
const cleanLines = [
    ...lines.slice(0, firstFooterLine + 1), // Up to and including first footer
    '', // Empty line
    ...lines.slice(paymentModalLine, htmlEndLine + 1) // Payment modal to </html>
];

// Write clean template
fs.writeFileSync(TEMPLATE_PATH, cleanLines.join('\n'), 'utf8');

console.log(`✅ Template cleaned: ${lines.length} → ${cleanLines.length} lines`);
console.log('📝 Regenerate courses to apply fix');
