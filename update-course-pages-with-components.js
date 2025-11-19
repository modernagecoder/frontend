/**
 * Script to Update All Generated Course Pages with Navigation and Footer Components
 * This script adds the component placeholders and proper script loading to all course pages
 */

const fs = require('fs');
const path = require('path');

const COURSES_DIR = './content/courses/generated';

// The old hardcoded navigation HTML pattern to find
const OLD_NAV_START = '<header>';
const OLD_NAV_END = '</header>';

// The new navigation placeholder
const NEW_NAV = '    <!-- Navigation Component Placeholder -->\n    <div id="nav-placeholder"></div>';

// The old script loading pattern
const OLD_SCRIPTS = `    <!-- Load Mobile Navigation JavaScript -->
    <script src="/js/mobile-navigation.js"></script>
    
    <!-- Load Share Button JavaScript -->
    <script src="/js/share-button.js"></script>
</body>

</html>`;

// The new script loading with components
const NEW_SCRIPTS = `    <!-- Footer Component Placeholder -->
    <div id="footer-placeholder"></div>

    <!-- ============================================ -->
    <!-- COMPONENT LOADER SCRIPT                      -->
    <!-- Loads navigation and footer components       -->
    <!-- MUST BE LOADED BEFORE OTHER SCRIPTS          -->
    <!-- ============================================ -->
    <script src="/js/components-loader.js"></script>
    
    <!-- ============================================ -->
    <!-- MOBILE NAVIGATION SCRIPT                     -->
    <!-- Handles hamburger menu functionality         -->
    <!-- ============================================ -->
    <script src="/js/mobile-navigation.js"></script>
    
    <!-- Load Share Button JavaScript -->
    <script src="/js/share-button.js"></script>
</body>

</html>`;

// CSS to add in head
const CSS_TO_ADD = `    
    <!-- Load main site CSS for navigation and footer -->
    <link rel="stylesheet" href="/src/css/style.css">
    <link rel="stylesheet" href="/src/css/responsive.css">
    <link rel="stylesheet" href="/src/css/mobile-nav-fix.css">
    <link rel="stylesheet" href="/src/css/mobile-nav-final-fix.css">`;

function updateCourseFile(filePath) {
    try {
        console.log(`Processing: ${filePath}`);
        
        let content = fs.readFileSync(filePath, 'utf8');
        let updated = false;
        
        // Step 1: Add CSS files if not present
        if (!content.includes('/src/css/style.css')) {
            content = content.replace('</head>', `${CSS_TO_ADD}\n</head>`);
            updated = true;
            console.log('  ✓ Added CSS files');
        }
        
        // Step 2: Replace hardcoded navigation with placeholder
        if (content.includes('<header>') && content.includes('</header>')) {
            // Find the entire header section
            const headerStart = content.indexOf('<header>');
            const headerEnd = content.indexOf('</header>') + '</header>'.length;
            
            if (headerStart !== -1 && headerEnd !== -1) {
                const oldHeader = content.substring(headerStart, headerEnd);
                content = content.replace(oldHeader, NEW_NAV);
                updated = true;
                console.log('  ✓ Replaced navigation with component placeholder');
            }
        }
        
        // Step 3: Update script loading at the end
        if (content.includes('<!-- Load Mobile Navigation JavaScript -->')) {
            // Find and replace the old script section
            const scriptPattern = /<!-- Load Mobile Navigation JavaScript -->[\s\S]*?<\/html>/;
            content = content.replace(scriptPattern, NEW_SCRIPTS);
            updated = true;
            console.log('  ✓ Updated script loading with components');
        }
        
        // Write back if updated
        if (updated) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`  ✅ Successfully updated: ${filePath}\n`);
            return true;
        } else {
            console.log(`  ⏭️  No changes needed: ${filePath}\n`);
            return false;
        }
        
    } catch (error) {
        console.error(`  ❌ Error processing ${filePath}:`, error.message);
        return false;
    }
}

function updateAllCourses() {
    console.log('🚀 Starting course pages update...\n');
    
    let totalProcessed = 0;
    let totalUpdated = 0;
    
    try {
        // Read all course directories
        const courseDirs = fs.readdirSync(COURSES_DIR, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);
        
        console.log(`Found ${courseDirs.length} course directories\n`);
        
        // Process each course
        for (const courseDir of courseDirs) {
            const indexPath = path.join(COURSES_DIR, courseDir, 'index.html');
            
            if (fs.existsSync(indexPath)) {
                totalProcessed++;
                if (updateCourseFile(indexPath)) {
                    totalUpdated++;
                }
            } else {
                console.log(`⚠️  No index.html found in: ${courseDir}\n`);
            }
        }
        
        console.log('\n' + '='.repeat(60));
        console.log('📊 Update Summary:');
        console.log('='.repeat(60));
        console.log(`Total courses processed: ${totalProcessed}`);
        console.log(`Total courses updated: ${totalUpdated}`);
        console.log(`No changes needed: ${totalProcessed - totalUpdated}`);
        console.log('='.repeat(60));
        console.log('\n✅ Course pages update complete!');
        console.log('\n📝 Next steps:');
        console.log('1. Test a course page in your browser');
        console.log('2. Verify navigation and footer appear correctly');
        console.log('3. Test hamburger menu on mobile (≤900px width)');
        console.log('4. Check that all links work properly\n');
        
    } catch (error) {
        console.error('❌ Fatal error:', error);
        process.exit(1);
    }
}

// Run the update
updateAllCourses();
