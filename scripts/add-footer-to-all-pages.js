/**
 * Add Footer Placeholder to All Pages
 */

const fs = require('fs');

const pagesToUpdate = [
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
    'src/pages/projects.html',
    'src/pages/404.html',
    'src/pages/index.html'
];

const FOOTER_PLACEHOLDER = `
    <!-- ============================================ -->
    <!-- FOOTER COMPONENT                             -->
    <!-- Loaded from: /components/footer.html         -->
    <!-- ============================================ -->
    <div id="footer-placeholder"></div>
`;

function addFooter(filePath) {
    console.log(`\n📄 Processing: ${filePath}`);
    
    if (!fs.existsSync(filePath)) {
        console.log(`   ⚠️  File not found`);
        return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if footer placeholder already exists
    if (content.includes('footer-placeholder')) {
        console.log(`   ℹ️  Footer placeholder already exists`);
        return false;
    }
    
    // Add footer placeholder before the component loader script
    if (content.includes('<!-- COMPONENT LOADER SCRIPT -->')) {
        content = content.replace(
            '    <!-- ============================================ -->',
            FOOTER_PLACEHOLDER + '\n    <!-- ============================================ -->'
        );
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`   ✅ Footer placeholder added`);
        return true;
    }
    
    // Fallback: add before closing body tag
    if (content.includes('</body>')) {
        content = content.replace('</body>', `${FOOTER_PLACEHOLDER}\n</body>`);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`   ✅ Footer placeholder added (before </body>)`);
        return true;
    }
    
    console.log(`   ⚠️  Could not find insertion point`);
    return false;
}

console.log('╔════════════════════════════════════════════════════════════╗');
console.log('║  Add Footer Placeholder to All Pages                      ║');
console.log('╚════════════════════════════════════════════════════════════╝');

let count = 0;
for (const page of pagesToUpdate) {
    if (addFooter(page)) count++;
}

console.log(`\n✅ Added footer to ${count} pages!`);
console.log(`\n🎉 All pages now have navigation AND footer!\n`);
