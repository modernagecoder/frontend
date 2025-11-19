/**
 * Aggressive CSS Cleanup for Course Pages
 * Removes ALL navigation-related CSS including orphaned rules
 */

const fs = require('fs');
const path = require('path');

const COURSES_DIR = './content/courses/generated';
const TEMPLATE_DIR = './content/courses/template';

function aggressiveCleanup(cssContent) {
    let cleaned = cssContent;
    
    // Remove the entire navigation section and everything related
    const patterns = [
        // Navigation section markers
        /\/\* --- NAVIGATION BAR \(SHARED\) --- \*\/[\s\S]*?(?=\/\*|$)/g,
        
        // Any .course-detail-page rules
        /\.course-detail-page[^{]*{[^}]*}/g,
        /body\.course-detail-page[^{]*{[^}]*}/g,
        
        // Logo-related rules
        /\.logo[^{]*{[^}]*}/g,
        /\.logo-icon[^{]*{[^}]*}/g,
        /\.logo-img[^{]*{[^}]*}/g,
        /\.logo-text[^{]*{[^}]*}/g,
        /\.logo:hover[^{]*{[^}]*}/g,
        /\.logo:hover\s+\.logo-icon[^{]*{[^}]*}/g,
        /\.logo:hover\s+\.logo-img[^{]*{[^}]*}/g,
        
        // Dropdown rules
        /\.dropdown[^{]*{[^}]*}/g,
        /\.dropdown-content[^{]*{[^}]*}/g,
        /\.dropdown:hover[^{]*{[^}]*}/g,
        /\.dropdown:hover\s+\.dropdown-content[^{]*{[^}]*}/g,
        /\.dropdown-item[^{]*{[^}]*}/g,
        
        // Any orphaned navigation rules
        /header\s*{[^}]*}/g,
        /nav\s*{[^}]*}/g,
        /\.navbar[^{]*{[^}]*}/g,
        /\.nav-container[^{]*{[^}]*}/g,
        /\.nav-menu[^{]*{[^}]*}/g,
        /\.nav-item[^{]*{[^}]*}/g,
        /\.nav-link[^{]*{[^}]*}/g,
        /\.mobile-menu-btn[^{]*{[^}]*}/g,
        /\.back-button[^{]*{[^}]*}/g,
        /\.cta-button[^{]*{[^}]*}/g,
        
        // Remove empty lines left behind
        /\n\s*\n\s*\n/g
    ];
    
    patterns.forEach(pattern => {
        cleaned = cleaned.replace(pattern, '\n\n');
    });
    
    // Clean up multiple empty lines
    cleaned = cleaned.replace(/\n{3,}/g, '\n\n');
    
    return cleaned;
}

function processFile(filePath) {
    try {
        console.log(`Processing: ${filePath}`);
        
        let content = fs.readFileSync(filePath, 'utf8');
        const originalLength = content.length;
        
        const cleaned = aggressiveCleanup(content);
        const newLength = cleaned.length;
        
        if (originalLength !== newLength) {
            fs.writeFileSync(filePath, cleaned, 'utf8');
            const removed = originalLength - newLength;
            console.log(`  ✅ Removed ${removed} characters of CSS\n`);
            return true;
        } else {
            console.log(`  ⏭️  No changes needed\n`);
            return false;
        }
        
    } catch (error) {
        console.error(`  ❌ Error:`, error.message);
        return false;
    }
}

function cleanupAll() {
    console.log('🧹 Aggressive CSS Cleanup Starting...\n');
    console.log('='.repeat(60) + '\n');
    
    let totalProcessed = 0;
    let totalCleaned = 0;
    
    try {
        // Clean template
        console.log('STEP 1: Clean Template\n');
        const templatePath = path.join(TEMPLATE_DIR, 'course-template.css');
        if (fs.existsSync(templatePath)) {
            totalProcessed++;
            if (processFile(templatePath)) {
                totalCleaned++;
            }
        }
        
        // Clean all courses
        console.log('='.repeat(60));
        console.log('STEP 2: Clean All Course CSS Files\n');
        console.log('='.repeat(60) + '\n');
        
        const courseDirs = fs.readdirSync(COURSES_DIR, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);
        
        for (const courseDir of courseDirs) {
            const stylePath = path.join(COURSES_DIR, courseDir, 'style.css');
            
            if (fs.existsSync(stylePath)) {
                totalProcessed++;
                if (processFile(stylePath)) {
                    totalCleaned++;
                }
            }
        }
        
        console.log('\n' + '='.repeat(60));
        console.log('📊 Cleanup Summary');
        console.log('='.repeat(60));
        console.log(`Files processed: ${totalProcessed}`);
        console.log(`Files cleaned: ${totalCleaned}`);
        console.log(`No changes: ${totalProcessed - totalCleaned}`);
        console.log('='.repeat(60));
        console.log('\n✅ Aggressive cleanup complete!');
        console.log('\n🔥 All navigation CSS has been removed');
        console.log('📝 Course pages will now use ONLY main site navigation styles\n');
        
    } catch (error) {
        console.error('❌ Fatal error:', error);
        process.exit(1);
    }
}

cleanupAll();
