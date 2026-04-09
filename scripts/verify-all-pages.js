/**
 * Verify All Pages Have Component System
 */

const fs = require('fs');

const pages = [
    'src/pages/index.html',
    'src/pages/about.html',
    'src/pages/contact.html',
    'src/pages/course.html',
    'src/pages/pricing.html',
    'src/pages/login.html',
    'src/pages/beat-the-babu.html',
    'src/pages/faq.html',
    'src/pages/terms.html',
    'src/pages/privacy.html',
    'src/pages/student-labs.html',
    'src/pages/404.html'
];

console.log('╔════════════════════════════════════════════════════════════╗');
console.log('║  Verify Component System on All Pages                     ║');
console.log('╚════════════════════════════════════════════════════════════╝\n');

let allGood = true;

pages.forEach(page => {
    const content = fs.readFileSync(page, 'utf8');
    
    const hasNavPlaceholder = content.includes('nav-placeholder');
    const hasFooterPlaceholder = content.includes('footer-placeholder');
    const hasComponentLoader = content.includes('components-loader.js');
    
    const status = hasNavPlaceholder && hasFooterPlaceholder && hasComponentLoader ? '✅' : '❌';
    
    console.log(`${status} ${page}`);
    
    if (!hasNavPlaceholder) {
        console.log(`   ⚠️  Missing: nav-placeholder`);
        allGood = false;
    }
    if (!hasFooterPlaceholder) {
        console.log(`   ⚠️  Missing: footer-placeholder`);
        allGood = false;
    }
    if (!hasComponentLoader) {
        console.log(`   ⚠️  Missing: components-loader.js`);
        allGood = false;
    }
});

console.log('\n╔════════════════════════════════════════════════════════════╗');
if (allGood) {
    console.log('║  ✅ ALL PAGES VERIFIED - COMPONENT SYSTEM WORKING!        ║');
} else {
    console.log('║  ⚠️  SOME PAGES NEED ATTENTION                            ║');
}
console.log('╚════════════════════════════════════════════════════════════╝\n');

if (allGood) {
    console.log('🎉 Perfect! All pages have:');
    console.log('   ✅ Navigation placeholder');
    console.log('   ✅ Footer placeholder');
    console.log('   ✅ Component loader script\n');
    console.log('🚀 Test all pages at: http://localhost:3001\n');
}
