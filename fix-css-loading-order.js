/**
 * Fix CSS Loading Order in Course Pages
 * Load main site CSS BEFORE course CSS so navigation styles take priority
 */

const fs = require('fs');
const path = require('path');

const COURSES_DIR = './content/courses/generated';

const OLD_CSS_ORDER = `    <link rel="stylesheet" href="/content/courses/generated/`;

const NEW_CSS_ORDER = `    <!-- Load main site CSS FIRST for navigation and footer -->
    <link rel="stylesheet" href="/src/css/style.css">
    <link rel="stylesheet" href="/src/css/responsive.css">
    <link rel="stylesheet" href="/src/css/mobile-nav-fix.css">
    <link rel="stylesheet" href="/src/css/mobile-nav-final-fix.css">
    
    <!-- Then load course-specific CSS (will not override navigation) -->
    <link rel="stylesheet" href="/content/courses/generated/`;

function fixCSSOrder(htmlPath) {
    try {
        console.log(`Processing: ${htmlPath}`);
        
        let content = fs.readFileSync(htmlPath, 'utf8');
        
        // Check if already fixed
        if (content.includes('<!-- Load main site CSS FIRST')) {
            console.log('  ⏭️  Already fixed\n');
            return false;
        }
        
        // Find and replace the CSS loading section
        const cssPattern = /(<link rel="stylesheet" href="\/content\/courses\/generated\/[^>]+>[\s\S]*?<link rel="stylesheet" href="\/css\/share-button\.css">[\s\S]*?<!-- Load main site CSS for navigation and footer -->[\s\S]*?<link rel="stylesheet" href="\/src\/css\/mobile-nav-final-fix\.css">)/;
        
        if (cssPattern.test(content)) {
            // Extract course slug
            const slugMatch = content.match(/\/content\/courses\/generated\/([^\/]+)\//);
            const slug = slugMatch ? slugMatch[1] : 'SLUG';
            
            const newCSS = `    <!-- Load main site CSS FIRST for navigation and footer -->
    <link rel="stylesheet" href="/src/css/style.css">
    <link rel="stylesheet" href="/src/css/responsive.css">
    <link rel="stylesheet" href="/src/css/mobile-nav-fix.css">
    <link rel="stylesheet" href="/src/css/mobile-nav-final-fix.css">
    
    <!-- Then load course-specific CSS (will not override navigation) -->
    <link rel="stylesheet" href="/content/courses/generated/${slug}/style.css">
    <link rel="stylesheet" href="/content/courses/generated/${slug}/mobile-responsive-fix.css">
    <link rel="stylesheet" href="/css/share-button.css">`;
            
            content = content.replace(cssPattern, newCSS);
            fs.writeFileSync(htmlPath, content, 'utf8');
            console.log('  ✅ Fixed CSS loading order\n');
            return true;
        } else {
            console.log('  ⚠️  Pattern not found\n');
            return false;
        }
        
    } catch (error) {
        console.error(`  ❌ Error:`, error.message);
        return false;
    }
}

function fixAll() {
    console.log('🔧 Fixing CSS Loading Order...\n');
    console.log('='.repeat(60) + '\n');
    
    let totalProcessed = 0;
    let totalFixed = 0;
    
    try {
        const courseDirs = fs.readdirSync(COURSES_DIR, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);
        
        console.log(`Found ${courseDirs.length} course directories\n`);
        
        for (const courseDir of courseDirs) {
            const indexPath = path.join(COURSES_DIR, courseDir, 'index.html');
            
            if (fs.existsSync(indexPath)) {
                totalProcessed++;
                if (fixCSSOrder(indexPath)) {
                    totalFixed++;
                }
            }
        }
        
        console.log('\n' + '='.repeat(60));
        console.log('📊 Summary');
        console.log('='.repeat(60));
        console.log(`Files processed: ${totalProcessed}`);
        console.log(`Files fixed: ${totalFixed}`);
        console.log(`Already fixed: ${totalProcessed - totalFixed}`);
        console.log('='.repeat(60));
        console.log('\n✅ CSS loading order fixed!');
        console.log('\n📝 Main site CSS now loads FIRST');
        console.log('🎯 Navigation styles will take priority');
        console.log('📚 Course content styles preserved\n');
        
    } catch (error) {
        console.error('❌ Fatal error:', error);
        process.exit(1);
    }
}

fixAll();
