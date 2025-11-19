/**
 * Apply Component System to All Pages
 * This script updates all HTML pages to use the component system
 */

const fs = require('fs');
const path = require('path');

// Pages to update
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
    'src/pages/404.html'
];

// Navigation patterns to find and replace
const NAV_PATTERNS = [
    /<header>\s*<nav>[\s\S]*?<\/nav>\s*<\/header>/i,
    /<header[\s\S]*?<\/header>/i
];

// Footer pattern
const FOOTER_PATTERN = /<footer[\s\S]*?<\/footer>/i;

// Replacement placeholders
const NAV_PLACEHOLDER = `    <!-- ============================================ -->
    <!-- NAVIGATION COMPONENT                         -->
    <!-- Loaded from: /components/nav.html            -->
    <!-- ============================================ -->
    <div id="nav-placeholder"></div>`;

const FOOTER_PLACEHOLDER = `    <!-- ============================================ -->
    <!-- FOOTER COMPONENT                             -->
    <!-- Loaded from: /components/footer.html         -->
    <!-- ============================================ -->
    <div id="footer-placeholder"></div>`;

const COMPONENT_LOADER_SCRIPT = `    <!-- ============================================ -->
    <!-- COMPONENT LOADER SCRIPT                      -->
    <!-- Loads navigation and footer components       -->
    <!-- ============================================ -->
    <script src="/js/components-loader.js"></script>`;

/**
 * Update a single page
 */
function updatePage(filePath) {
    console.log(`\n📄 Processing: ${filePath}`);
    
    if (!fs.existsSync(filePath)) {
        console.log(`   ⚠️  File not found, skipping`);
        return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Create backup
    const backupPath = filePath + '.backup';
    fs.writeFileSync(backupPath, content, 'utf8');
    console.log(`   💾 Backup created: ${backupPath}`);
    
    // Replace navigation
    let navReplaced = false;
    for (const pattern of NAV_PATTERNS) {
        if (pattern.test(content)) {
            content = content.replace(pattern, NAV_PLACEHOLDER);
            console.log(`   ✅ Navigation replaced`);
            navReplaced = true;
            modified = true;
            break;
        }
    }
    if (!navReplaced) {
        console.log(`   ℹ️  Navigation not found or already replaced`);
    }
    
    // Replace footer
    if (FOOTER_PATTERN.test(content)) {
        content = content.replace(FOOTER_PATTERN, FOOTER_PLACEHOLDER);
        console.log(`   ✅ Footer replaced`);
        modified = true;
    } else {
        console.log(`   ℹ️  Footer not found or already replaced`);
    }
    
    // Add component loader script if not present
    if (!content.includes('components-loader.js')) {
        // Add before closing </body> tag
        content = content.replace('</body>', `${COMPONENT_LOADER_SCRIPT}\n\n</body>`);
        console.log(`   ✅ Component loader script added`);
        modified = true;
    } else {
        console.log(`   ℹ️  Component loader script already present`);
    }
    
    // Save updated file
    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`   ✅ File updated successfully!`);
        return true;
    } else {
        console.log(`   ℹ️  No changes needed`);
        return false;
    }
}

/**
 * Main execution
 */
function main() {
    console.log('╔════════════════════════════════════════════════════════════╗');
    console.log('║  Apply Component System to All Pages                      ║');
    console.log('╚════════════════════════════════════════════════════════════╝');
    
    let successCount = 0;
    let skipCount = 0;
    
    for (const filePath of pagesToUpdate) {
        const result = updatePage(filePath);
        if (result) {
            successCount++;
        } else {
            skipCount++;
        }
    }
    
    console.log('\n╔════════════════════════════════════════════════════════════╗');
    console.log('║  Summary                                                   ║');
    console.log('╚════════════════════════════════════════════════════════════╝');
    console.log(`\n   ✅ Updated: ${successCount} pages`);
    console.log(`   ℹ️  Skipped: ${skipCount} pages`);
    console.log(`\n   💾 Backup files created with .backup extension`);
    console.log(`\n   🎉 All pages now use the component system!`);
    console.log(`\n   📝 Next: Restart your dev server (npm run dev)`);
    console.log(`\n   🌐 Then test all pages at http://localhost:3001\n`);
}

// Run the script
main();
