/**
 * Remove Old Modal Completely from Template
 */

const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, '../content/courses/template/course-template.html');

console.log('🔧 Removing old modal HTML completely...\n');

let template = fs.readFileSync(templatePath, 'utf8');

// Find and remove the entire old modal section
const modalStart = template.indexOf('<!-- Enrollment Contact Modal -->');
const modalEnd = template.indexOf('<!-- Modal JavaScript -->');

if (modalStart !== -1 && modalEnd !== -1) {
  // Remove everything from modal start to just before Modal JavaScript
  template = template.substring(0, modalStart) + template.substring(modalEnd);
  console.log('✓ Removed old enrollment modal HTML');
}

// Remove the Modal JavaScript section
const jsStart = template.indexOf('<!-- Modal JavaScript -->');
if (jsStart !== -1) {
  const jsEnd = template.indexOf('</script>', jsStart) + 9;
  template = template.substring(0, jsStart) + template.substring(jsEnd);
  console.log('✓ Removed old modal JavaScript');
}

// Remove all the old modal styles
const styleStart = template.indexOf('<!-- Modal Styles -->');
if (styleStart !== -1) {
  // Find the closing </style> tag after this comment
  const styleEnd = template.indexOf('</style>', styleStart) + 8;
  template = template.substring(0, styleStart) + template.substring(styleEnd);
  console.log('✓ Removed old modal styles');
}

// Write back
fs.writeFileSync(templatePath, template, 'utf8');

console.log('\n✅ Old modal completely removed!');
console.log('📝 Now regenerate courses with: node scripts/generate-courses.js');
