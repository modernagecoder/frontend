/**
 * Fix Enrollment Modal - Remove Duplicates and Add New Professional Modal
 * This script cleans up the course template and adds the new modal system
 */

const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, '../content/courses/template/course-template.html');

console.log('🔧 Fixing enrollment modal in course template...\n');

// Read the template
let template = fs.readFileSync(templatePath, 'utf8');

// Step 1: Remove all old modal HTML (enrollmentModal, paymentChoiceModal, razorpayFormModal)
console.log('📝 Step 1: Removing old modal HTML...');

// Remove the old enrollmentModal section
const enrollmentModalStart = template.indexOf('<!-- Enrollment Contact Modal -->');
const enrollmentModalEnd = template.indexOf('</div>\n    </div>\n\n    <!-- Modal Styles -->');
if (enrollmentModalStart !== -1 && enrollmentModalEnd !== -1) {
  const endOfModalStyles = template.indexOf('</style>', enrollmentModalEnd) + 8;
  template = template.substring(0, enrollmentModalStart) + template.substring(endOfModalStyles);
  console.log('   ✓ Removed old enrollmentModal');
}

// Remove paymentChoiceModal sections (there are multiple)
let paymentModalCount = 0;
while (template.includes('id="paymentChoiceModal"')) {
  const start = template.indexOf('<div id="paymentChoiceModal"');
  if (start === -1) break;
  
  // Find the closing div for this modal
  let depth = 0;
  let pos = start;
  let inTag = false;
  let tagName = '';
  
  while (pos < template.length) {
    if (template[pos] === '<') {
      inTag = true;
      tagName = '';
      // Check if it's a closing tag
      if (template[pos + 1] === '/') {
        pos += 2;
        while (pos < template.length && template[pos] !== '>') {
          tagName += template[pos];
          pos++;
        }
        if (tagName.trim() === 'div') {
          depth--;
          if (depth === 0) {
            // Found the closing div
            template = template.substring(0, start) + template.substring(pos + 1);
            paymentModalCount++;
            break;
          }
        }
      } else {
        pos++;
        while (pos < template.length && template[pos] !== '>' && template[pos] !== ' ') {
          tagName += template[pos];
          pos++;
        }
        if (tagName === 'div') {
          depth++;
        }
      }
    }
    pos++;
  }
  
  if (depth !== 0) {
    // Couldn't find proper closing, just remove a large chunk
    const end = template.indexOf('</div>', start + 1000);
    if (end !== -1) {
      template = template.substring(0, start) + template.substring(end + 6);
      paymentModalCount++;
    } else {
      break;
    }
  }
}
console.log(`   ✓ Removed ${paymentModalCount} paymentChoiceModal instances`);

// Remove old modal JavaScript
const modalScriptStart = template.indexOf('<!-- Modal JavaScript -->');
if (modalScriptStart !== -1) {
  const modalScriptEnd = template.indexOf('</script>', modalScriptStart) + 9;
  template = template.substring(0, modalScriptStart) + template.substring(modalScriptEnd);
  console.log('   ✓ Removed old modal JavaScript');
}

// Remove duplicate Razorpay script tags
let razorpayScriptCount = 0;
const razorpayScriptPattern = /<script src="https:\/\/checkout\.razorpay\.com\/v1\/checkout\.js"><\/script>/g;
const matches = template.match(razorpayScriptPattern);
if (matches && matches.length > 1) {
  // Keep only the first one
  template = template.replace(razorpayScriptPattern, (match, offset) => {
    if (razorpayScriptCount === 0) {
      razorpayScriptCount++;
      return match;
    }
    razorpayScriptCount++;
    return '';
  });
  console.log(`   ✓ Removed ${razorpayScriptCount - 1} duplicate Razorpay script tags`);
}

// Remove inline payment modal functions
const functionsToRemove = [
  'function openPaymentModal()',
  'function closePaymentModal()',
  'function openRazorpayForm()',
  'function closeRazorpayForm()',
  'async function processRazorpay('
];

functionsToRemove.forEach(funcName => {
  const funcStart = template.indexOf(funcName);
  if (funcStart !== -1) {
    // Find the end of this function
    let braceCount = 0;
    let pos = funcStart;
    let foundStart = false;
    
    while (pos < template.length) {
      if (template[pos] === '{') {
        braceCount++;
        foundStart = true;
      } else if (template[pos] === '}') {
        braceCount--;
        if (foundStart && braceCount === 0) {
          // Found the end
          template = template.substring(0, funcStart) + template.substring(pos + 1);
          console.log(`   ✓ Removed ${funcName}`);
          break;
        }
      }
      pos++;
    }
  }
});

console.log('\n📝 Step 2: Adding new professional modal system...');

// Step 2: Add the new CSS and JS includes before the closing </body> tag
const bodyCloseIndex = template.lastIndexOf('</body>');
if (bodyCloseIndex !== -1) {
  const newIncludes = `
    <!-- Professional Enrollment Modal System -->
    <link rel="stylesheet" href="/css/enrollment-modal.css">
    <script src="/js/enrollment-modal.js"></script>

`;
  template = template.substring(0, bodyCloseIndex) + newIncludes + template.substring(bodyCloseIndex);
  console.log('   ✓ Added new CSS and JS includes');
}

// Step 3: Clean up any remaining duplicate script references
console.log('\n📝 Step 3: Cleaning up duplicate scripts...');

// Remove duplicate course-payment.js references
let coursePaymentCount = 0;
const coursePaymentPattern = /<script src="\/js\/course-payment\.js"><\/script>/g;
const coursePaymentMatches = template.match(coursePaymentPattern);
if (coursePaymentMatches && coursePaymentMatches.length > 1) {
  template = template.replace(coursePaymentPattern, (match, offset) => {
    if (coursePaymentCount === 0) {
      coursePaymentCount++;
      return match;
    }
    coursePaymentCount++;
    return '';
  });
  console.log(`   ✓ Removed ${coursePaymentCount - 1} duplicate course-payment.js references`);
}

// Step 4: Write the updated template
fs.writeFileSync(templatePath, template, 'utf8');

console.log('\n✅ Successfully fixed enrollment modal!');
console.log('\n📋 Summary:');
console.log('   • Removed old enrollmentModal HTML');
console.log(`   • Removed ${paymentModalCount} duplicate paymentChoiceModal instances`);
console.log('   • Removed old modal JavaScript functions');
console.log('   • Added new professional modal CSS and JS');
console.log('   • Cleaned up duplicate script references');
console.log('\n🎉 The enrollment modal is now clean and professional!');
console.log('\n📝 Next steps:');
console.log('   1. Test the enrollment button on any course page');
console.log('   2. Verify only ONE modal opens');
console.log('   3. Check that both payment options work correctly');
