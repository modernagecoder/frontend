/**
 * Script to add Razorpay payment integration to all generated course pages
 * Run with: node scripts/add-payment-to-courses.js
 */

const fs = require('fs');
const path = require('path');

const GENERATED_DIR = path.join(__dirname, '../content/courses/generated');

// Scripts to add before </body>
const PAYMENT_SCRIPTS = `
    <!-- ============================================ -->
    <!-- RAZORPAY PAYMENT INTEGRATION                 -->
    <!-- Handles course enrollment payments           -->
    <!-- ============================================ -->
    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    <script src="/js/course-payment.js"></script>
`;

function addPaymentToCoursePage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if already has payment integration
    if (content.includes('course-payment.js')) {
      console.log(`⏭️  Already has payment: ${filePath}`);
      return false;
    }
    
    // Find </body> and add scripts before it
    if (content.includes('</body>')) {
      content = content.replace('</body>', PAYMENT_SCRIPTS + '\n</body>');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Added payment to: ${filePath}`);
      return true;
    } else {
      console.log(`⚠️  No </body> found: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processAllCourses() {
  console.log('🚀 Adding payment integration to all course pages...\n');
  
  let updated = 0;
  let skipped = 0;
  let errors = 0;

  const items = fs.readdirSync(GENERATED_DIR);
  
  for (const item of items) {
    const itemPath = path.join(GENERATED_DIR, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      const indexPath = path.join(itemPath, 'index.html');
      
      if (fs.existsSync(indexPath)) {
        const result = addPaymentToCoursePage(indexPath);
        if (result) updated++;
        else skipped++;
      }
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`   ✅ Updated: ${updated}`);
  console.log(`   ⏭️  Skipped: ${skipped}`);
  console.log(`   ❌ Errors: ${errors}`);
}

// Run the script
processAllCourses();
