#!/usr/bin/env node

/**
 * Update ALL Course Category Links Across All Pages
 * Convert query parameter URLs to clean, SEO-friendly URLs
 */

const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

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

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let fileChangeCount = 0;
    
    replacements.forEach(({ old, new: newUrl }) => {
        const regex = new RegExp(old.replace(/[?&]/g, '\\$&'), 'g');
        const matches = content.match(regex);
        if (matches) {
            content = content.replace(regex, newUrl);
            fileChangeCount += matches.length;
        }
    });
    
    if (fileChangeCount > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
        return fileChangeCount;
    }
    
    return 0;
}

console.log('🔧 Updating course category links across all pages...\n');

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'));
let totalChanges = 0;
let filesUpdated = 0;

files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    const changes = updateFile(filePath);
    
    if (changes > 0) {
        console.log(`✓ ${file}: Updated ${changes} links`);
        totalChanges += changes;
        filesUpdated++;
    }
});

console.log(`\n✅ Complete!`);
console.log(`   Files updated: ${filesUpdated}`);
console.log(`   Total links updated: ${totalChanges}`);
console.log('\n🚀 All course category links now use clean, SEO-friendly URLs!');
console.log('\n📋 URL Format:');
console.log('   OLD: /courses?tab=coding&subtab=teens');
console.log('   NEW: /courses/coding/teens');
