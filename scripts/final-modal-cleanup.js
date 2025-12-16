/**
 * Final Modal Cleanup - Remove ALL old modal code
 */

const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, '../content/courses/template/course-template.html');

console.log('🔧 Final cleanup of template...\n');

let template = fs.readFileSync(templatePath, 'utf8');

// Remove everything from "<!-- Enrollment Contact Modal -->" to "<!-- Footer Component Placeholder -->"
const startMarker = '<!-- Enrollment Contact Modal -->';
const endMarker = '<!-- Footer Component Placeholder -->';

const startIndex = template.indexOf(startMarker);
const endIndex = template.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  template = template.substring(0, startIndex) + template.substring(endIndex);
  console.log('✓ Removed all old modal HTML and scripts');
}

// Remove duplicate Professional Enrollment Modal System includes
let count = 0;
const pattern = /<!-- Professional Enrollment Modal System -->\s*<link rel="stylesheet" href="[^"]+enrollment-modal\.css">\s*<script src="[^"]+enrollment-modal\.js"><\/script>/g;

template = template.replace(pattern, (match) => {
  count++;
  if (count === 1) {
    // Keep the first one with correct relative path
    return '<!-- Professional Enrollment Modal System -->\n    <link rel="stylesheet" href="../../../../css/enrollment-modal.css">\n    <script src="../../../../js/enrollment-modal.js"></script>';
  }
  return ''; // Remove duplicates
});

console.log(`✓ Cleaned up ${count > 1 ? count - 1 : 0} duplicate modal includes`);

// Write back
fs.writeFileSync(templatePath, template, 'utf8');

console.log('\n✅ Template is now clean!');
console.log('📝 Regenerate courses with: node scripts/generate-courses.js');
