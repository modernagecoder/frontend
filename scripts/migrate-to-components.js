/**
 * Migration Script for Component System
 * 
 * This script helps migrate existing HTML pages to use the new component system.
 * It replaces hardcoded navigation and footer with placeholders.
 * 
 * Usage: node scripts/migrate-to-components.js <path-to-html-file>
 */

const fs = require('fs');
const path = require('path');

// Navigation patterns to find and replace
const NAV_START_PATTERN = /<header>\s*<nav>/i;
const NAV_END_PATTERN = /<\/nav>\s*<\/header>/i;

// Footer patterns to find and replace
const FOOTER_START_PATTERN = /<footer[^>]*class="site-footer"[^>]*>/i;
const FOOTER_END_PATTERN = /<\/footer>/i;

// Replacement placeholders
const NAV_PLACEHOLDER = '<div id="nav-placeholder"></div>';
const FOOTER_PLACEHOLDER = '<div id="footer-placeholder"></div>';
const COMPONENT_LOADER_SCRIPT = '<script src="/js/components-loader.js"></script>';

/**
 * Extract content between two patterns
 */
function extractBetween(content, startPattern, endPattern) {
    const startMatch = content.match(startPattern);
    if (!startMatch) return null;

    const startIndex = startMatch.index;
    const afterStart = content.substring(startIndex);
    
    const endMatch = afterStart.match(endPattern);
    if (!endMatch) return null;

    const endIndex = startIndex + endMatch.index + endMatch[0].length;
    
    return {
        start: startIndex,
        end: endIndex,
        content: content.substring(startIndex, endIndex)
    };
}

/**
 * Migrate a single HTML file
 */
function migrateFile(filePath) {
    console.log(`\n📄 Processing: ${filePath}`);

    // Read file
    let content;
    try {
        content = fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        console.error(`❌ Error reading file: ${error.message}`);
        return false;
    }

    let modified = false;
    let newContent = content;

    // Replace navigation
    const navSection = extractBetween(content, NAV_START_PATTERN, NAV_END_PATTERN);
    if (navSection) {
        console.log('  ✅ Found navigation section');
        newContent = newContent.substring(0, navSection.start) + 
                     NAV_PLACEHOLDER + 
                     newContent.substring(navSection.end);
        modified = true;
    } else {
        console.log('  ⚠️  Navigation section not found or already migrated');
    }

    // Replace footer
    const footerSection = extractBetween(newContent, FOOTER_START_PATTERN, FOOTER_END_PATTERN);
    if (footerSection) {
        console.log('  ✅ Found footer section');
        newContent = newContent.substring(0, footerSection.start) + 
                     FOOTER_PLACEHOLDER + 
                     newContent.substring(footerSection.end);
        modified = true;
    } else {
        console.log('  ⚠️  Footer section not found or already migrated');
    }

    // Add component loader script if not present
    if (!newContent.includes('components-loader.js')) {
        console.log('  ✅ Adding component loader script');
        // Add before closing </body> tag
        newContent = newContent.replace('</body>', `    ${COMPONENT_LOADER_SCRIPT}\n</body>`);
        modified = true;
    } else {
        console.log('  ℹ️  Component loader script already present');
    }

    // Save backup and write new file
    if (modified) {
        const backupPath = filePath + '.backup';
        try {
            fs.writeFileSync(backupPath, content, 'utf8');
            console.log(`  💾 Backup saved: ${backupPath}`);
            
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`  ✅ File migrated successfully!`);
            return true;
        } catch (error) {
            console.error(`  ❌ Error writing file: ${error.message}`);
            return false;
        }
    } else {
        console.log('  ℹ️  No changes needed');
        return false;
    }
}

/**
 * Main execution
 */
function main() {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        console.log(`
╔════════════════════════════════════════════════════════════╗
║  Component System Migration Script                        ║
╚════════════════════════════════════════════════════════════╝

Usage:
  node scripts/migrate-to-components.js <file-path>
  node scripts/migrate-to-components.js src/pages/about.html

What it does:
  ✓ Replaces <header><nav>...</nav></header> with placeholder
  ✓ Replaces <footer>...</footer> with placeholder
  ✓ Adds component loader script
  ✓ Creates backup file (.backup extension)

Example:
  node scripts/migrate-to-components.js src/pages/about.html
        `);
        process.exit(0);
    }

    const filePath = args[0];
    
    if (!fs.existsSync(filePath)) {
        console.error(`❌ File not found: ${filePath}`);
        process.exit(1);
    }

    console.log('╔════════════════════════════════════════════════════════════╗');
    console.log('║  Component System Migration                                ║');
    console.log('╚════════════════════════════════════════════════════════════╝');

    const success = migrateFile(filePath);
    
    if (success) {
        console.log('\n✅ Migration completed successfully!');
        console.log('\n📝 Next steps:');
        console.log('   1. Test the page in your browser');
        console.log('   2. If everything works, delete the .backup file');
        console.log('   3. If there are issues, restore from .backup file');
    } else {
        console.log('\n⚠️  Migration completed with warnings');
    }
}

// Run the script
main();
