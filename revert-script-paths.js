const fs = require('fs');
const path = require('path');

const pagesDir = './src/pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html') && !f.endsWith('.backup'));

console.log(`Found ${files.length} HTML files to process`);

files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Revert script paths back to /js/ (which the dev server maps to src/js/)
    const replacements = [
        { from: 'src="/src/js/components-loader.js"', to: 'src="/js/components-loader.js"' },
        { from: 'src="/src/js/unified-mobile-nav.js"', to: 'src="/js/unified-mobile-nav.js"' },
        { from: 'src="/src/js/keyboard-navigation.js"', to: 'src="/js/keyboard-navigation.js"' },
        { from: 'src="/src/js/tab-accessibility.js"', to: 'src="/js/tab-accessibility.js"' }
    ];
    
    replacements.forEach(({ from, to }) => {
        if (content.includes(from)) {
            content = content.replace(new RegExp(from, 'g'), to);
            modified = true;
        }
    });
    
    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Reverted: ${file}`);
    } else {
        console.log(`  Skipped: ${file} (no changes needed)`);
    }
});

console.log('\nDone! Paths reverted to /js/ which maps to src/js/ via dev server');
