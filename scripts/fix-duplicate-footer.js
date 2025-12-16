/**
 * Fix duplicate footer issue in template
 * Remove duplicate content after payment modal
 */
const fs = require('fs');
const path = require('path');

const TEMPLATE_PATH = path.join(__dirname, '../content/courses/template/course-template.html');

// Read template
let template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

// Find the first footer placeholder (the correct one)
const firstFooterIndex = template.indexOf('<div id="footer-placeholder"></div>');

if (firstFooterIndex === -1) {
    console.log('❌ No footer placeholder found');
    process.exit(1);
}

// Find the second footer placeholder (duplicate)
const secondFooterIndex = template.indexOf('<div id="footer-placeholder"></div>', firstFooterIndex + 1);

if (secondFooterIndex === -1) {
    console.log('✅ No duplicate footer found - template is clean');
    process.exit(0);
}

console.log('🔍 Found duplicate footer at position:', secondFooterIndex);

// Find where the payment modal ends (should be right before the duplicate)
const paymentModalEnd = template.lastIndexOf('</style>');
const scriptSectionStart = template.indexOf('<!-- Razorpay Payment Integration -->');

// The correct structure should be:
// ... main content ...
// <div id="footer-placeholder"></div>
// <!-- Payment Modal -->
// <script>...</script>
// </body>
// </html>

// Find everything after the first footer placeholder
const afterFirstFooter = template.substring(firstFooterIndex);

// Find where the payment modal starts
const paymentModalStart = afterFirstFooter.indexOf('<!-- PAYMENT CHOICE MODAL');

if (paymentModalStart === -1) {
    console.log('❌ Payment modal not found');
    process.exit(1);
}

// Extract just the payment modal and scripts
const paymentSection = afterFirstFooter.substring(paymentModalStart);

// Find the end of the payment section (should end with </body></html>)
const bodyEndIndex = paymentSection.indexOf('</body>');
const cleanPaymentSection = paymentSection.substring(0, bodyEndIndex + '</body>\n</html>'.length);

// Rebuild template: everything up to first footer + footer + payment section
const beforeFooter = template.substring(0, firstFooterIndex);
const cleanTemplate = beforeFooter + '<div id="footer-placeholder"></div>\n\n    ' + cleanPaymentSection;

// Write cleaned template
fs.writeFileSync(TEMPLATE_PATH, cleanTemplate, 'utf8');

console.log('✅ Fixed duplicate footer in template');
console.log('📝 Regenerate courses to apply fix');
