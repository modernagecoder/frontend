#!/usr/bin/env node

/**
 * Update Course Category Links in index.html
 * Convert query parameter URLs to clean URLs
 */

const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, 'src', 'pages', 'index.html');

console.log('🔧 Updating course category links in index.html...\n');

let content = fs.readFileSync(indexHtmlPath, 'utf8');
let changeCount = 0;

const replacements = [
    // Coding courses
    { old: '/courses?tab=coding&subtab=kids', new: '/courses/coding/kids' },
    { old: '/courses?tab=coding&subtab=teens', new: '/courses/coding/teens' },
    { old: '/courses?tab=coding&subtab=college', new: '/courses/coding/college' },
    { old: '/courses?tab=coding&subtab=customized', new: '/courses/coding/corporate' },
    { old: '/courses?tab=coding&subtab=girls', new: '/courses/coding/girls' },
    
    // Mathematics courses
    { old: '/courses?tab=maths&subtab=elementary', new: '/courses/mathematics/elementary' },
    { old: '/courses?tab=maths&subtab=middle', new: '/courses/mathematics/middle-school' },
    { old: '/courses?tab=maths&subtab=high', new: '/courses/mathematics/high-school' },
    { old: '/courses?tab=maths&subtab=college', new: '/courses/mathematics/college' },
    { old: '/courses?tab=maths&subtab=professional', new: '/courses/mathematics/professional' }
];

replacements.forEach(({ old, new: newUrl }) => {
    const regex = new RegExp(old.replace(/[?&]/g, '\\$&'), 'g');
    const matches = content.match(regex);
    if (matches) {
        content = content.replace(regex, newUrl);
        changeCount += matches.length;
        console.log(`✓ Updated ${matches.length} instances: ${old} → ${newUrl}`);
    }
});

fs.writeFileSync(indexHtmlPath, content, 'utf8');

console.log(`\n✅ Complete! Updated ${changeCount} links in index.html`);
console.log('\nAll course category links now use clean, SEO-friendly URLs!');
