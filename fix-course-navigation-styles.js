/**
 * Fix Course Navigation Styles
 * Removes conflicting navigation CSS from course pages
 * Ensures course pages use main site navigation styles only
 */

const fs = require('fs');
const path = require('path');

const COURSES_DIR = './content/courses/generated';
const TEMPLATE_DIR = './content/courses/template';

// CSS sections to remove from course style.css files
const CSS_SECTIONS_TO_REMOVE = [
    '/* --- NAVIGATION BAR (SHARED) --- */',
    'header {',
    'nav {',
    '.navbar',
    '.nav-container',
    '.nav-menu',
    '.nav-item',
    '.nav-link',
    '.mobile-menu-btn',
    '.dropdown',
    '.back-button',
    '.logo',
    '.cta-button'
];

function removeCSSSection(content, startMarker, endMarker) {
    const regex = new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`, 'g');
    return content.replace(regex, '');
}

function removeNavigationCSS(cssContent) {
    let cleaned = cssContent;
    
    // Remove the entire navigation section
    const navSectionStart = /\/\* --- NAVIGATION BAR \(SHARED\) --- \*\//;
    const navSectionEnd = /\/\* --- COURSE HERO SECTION --- \*\//;
    
    const startMatch = cleaned.match(navSectionStart);
    const endMatch = cleaned.match(navSectionEnd);
    
    if (startMatch && endMatch) {
        const startIndex = cleaned.indexOf(startMatch[0]);
        const endIndex = cleaned.indexOf(endMatch[0]);
        
        if (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) {
            cleaned = cleaned.substring(0, startIndex) + cleaned.substring(endIndex);
            console.log('  ✓ Removed navigation CSS section');
        }
    }
    
    // Also remove any stray navigation-related rules
    const navPatterns = [
        /header\s*{[^}]*}/g,
        /nav\s*{[^}]*}/g,
        /\.navbar[^{]*{[^}]*}/g,
        /\.nav-container[^{]*{[^}]*}/g,
        /\.nav-menu[^{]*{[^}]*}/g,
        /\.nav-item[^{]*{[^}]*}/g,
        /\.nav-link[^{]*{[^}]*}/g,
        /\.mobile-menu-btn[^{]*{[^}]*}/g,
        /\.back-button[^{]*{[^}]*}/g,
        /body\.course-detail-page\s+nav[^{]*{[^}]*}/g
    ];
    
    navPatterns.forEach(pattern => {
        cleaned = cleaned.replace(pattern, '');
    });
    
    // Clean up multiple empty lines
    cleaned = cleaned.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    return cleaned;
}

function updateCourseStyleFile(filePath) {
    try {
        console.log(`Processing: ${filePath}`);
        
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if it has navigation CSS
        if (content.includes('NAVIGATION BAR') || content.includes('.navbar') || content.includes('.nav-menu')) {
            const cleaned = removeNavigationCSS(content);
            fs.writeFileSync(filePath, cleaned, 'utf8');
            console.log(`  ✅ Removed navigation CSS from: ${filePath}\n`);
            return true;
        } else {
            console.log(`  ⏭️  No navigation CSS found: ${filePath}\n`);
            return false;
        }
        
    } catch (error) {
        console.error(`  ❌ Error processing ${filePath}:`, error.message);
        return false;
    }
}

function updateTemplateStyleFile() {
    const templateStylePath = path.join(TEMPLATE_DIR, 'course-template.css');
    
    if (fs.existsSync(templateStylePath)) {
        console.log('📝 Updating template CSS file...\n');
        return updateCourseStyleFile(templateStylePath);
    } else {
        console.log('⚠️  Template CSS file not found\n');
        return false;
    }
}

function updateAllCourseStyles() {
    console.log('🚀 Fixing course navigation styles...\n');
    
    let totalProcessed = 0;
    let totalUpdated = 0;
    
    try {
        // First update the template
        console.log('='.repeat(60));
        console.log('STEP 1: Update Template CSS');
        console.log('='.repeat(60) + '\n');
        
        if (updateTemplateStyleFile()) {
            totalUpdated++;
        }
        totalProcessed++;
        
        // Then update all generated courses
        console.log('='.repeat(60));
        console.log('STEP 2: Update Generated Course CSS Files');
        console.log('='.repeat(60) + '\n');
        
        const courseDirs = fs.readdirSync(COURSES_DIR, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);
        
        console.log(`Found ${courseDirs.length} course directories\n`);
        
        for (const courseDir of courseDirs) {
            const stylePath = path.join(COURSES_DIR, courseDir, 'style.css');
            
            if (fs.existsSync(stylePath)) {
                totalProcessed++;
                if (updateCourseStyleFile(stylePath)) {
                    totalUpdated++;
                }
            }
        }
        
        console.log('\n' + '='.repeat(60));
        console.log('📊 Update Summary:');
        console.log('='.repeat(60));
        console.log(`Total CSS files processed: ${totalProcessed}`);
        console.log(`Total CSS files updated: ${totalUpdated}`);
        console.log(`No changes needed: ${totalProcessed - totalUpdated}`);
        console.log('='.repeat(60));
        console.log('\n✅ Course navigation styles fixed!');
        console.log('\n📝 What was done:');
        console.log('- Removed all navigation CSS from course style files');
        console.log('- Course pages will now use main site navigation styles');
        console.log('- Navigation will look identical to other pages');
        console.log('- Hamburger menu will work properly\n');
        console.log('🧪 Next steps:');
        console.log('1. Clear browser cache (Ctrl+Shift+Delete)');
        console.log('2. Restart your dev server');
        console.log('3. Test a course page');
        console.log('4. Verify navigation looks the same as main site\n');
        
    } catch (error) {
        console.error('❌ Fatal error:', error);
        process.exit(1);
    }
}

// Run the fix
updateAllCourseStyles();
