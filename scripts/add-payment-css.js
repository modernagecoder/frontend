/**
 * Add payment modal CSS to all course pages
 */
const fs = require('fs');
const path = require('path');

const GENERATED_DIR = path.join(__dirname, '../content/courses/generated');
const CSS_LINK = '<link rel="stylesheet" href="/css/payment-modal.css">';

function addCssToPage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('payment-modal.css')) {
      return 'skipped';
    }
    
    // Add CSS link before </head>
    if (content.includes('</head>')) {
      content = content.replace('</head>', `    ${CSS_LINK}\n</head>`);
      fs.writeFileSync(filePath, content, 'utf8');
      return 'updated';
    }
    return 'no-head';
  } catch (error) {
    return 'error';
  }
}

console.log('🎨 Adding payment CSS to course pages...\n');
let updated = 0, skipped = 0;

const items = fs.readdirSync(GENERATED_DIR);
for (const item of items) {
  const itemPath = path.join(GENERATED_DIR, item);
  if (fs.statSync(itemPath).isDirectory()) {
    const indexPath = path.join(itemPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      const result = addCssToPage(indexPath);
      if (result === 'updated') {
        updated++;
        console.log(`✅ ${item}`);
      } else {
        skipped++;
      }
    }
  }
}

console.log(`\n📊 Updated: ${updated}, Skipped: ${skipped}`);
