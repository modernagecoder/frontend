const fs = require('fs');
const path = require('path');

const pagesDir = './src/pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html') && !f.endsWith('.backup'));

console.log(`Found ${files.length} HTML files to process`);

files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix script paths
    const replacements = [
        { from: 'src="/js/components-loader.js"', to: 'src="/src/js/components-loader.js"' },
        { from: 'src="/js/unified-mobile-nav.js"', to: 'src="/src/js/unified-mobile-nav.js"' },
        { from: 'src="/js/keyboard-navigation.js"', to: 'src="/src/js/keyboard-navigation.js"' },
        { from: 'src="/js/tab-accessibility.js"', to: 'src="/src/js/tab-accessibility.js"' }
    ];
    
    replacements.forEach(({ from, to }) => {
        if (content.includes(from)) {
            content = content.replace(new RegExp(from, 'g'), to);
            modified = true;
        }
    });
    
    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Fixed: ${file}`);
    } else {
        console.log(`  Skipped: ${file} (no changes needed)`);
    }
});

console.log('\nDone!');
