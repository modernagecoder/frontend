#!/usr/bin/env node

/**
 * Implement Clean Course Category URLs
 * 
 * OLD: /courses?tab=coding&subtab=teens
 * NEW: /courses/coding/teens
 * 
 * This improves SEO and user experience
 */

const fs = require('fs');
const path = require('path');

const courseHtmlPath = path.join(__dirname, 'src', 'pages', 'course.html');

console.log('🔧 Implementing clean course category URLs...\n');

// Read the course.html file
let content = fs.readFileSync(courseHtmlPath, 'utf8');
let changeCount = 0;

// 1. Update navigation dropdown links
console.log('Step 1: Updating navigation dropdown links...');

const dropdownReplacements = [
    { old: '/courses?tab=coding&subtab=kids', new: '/courses/coding/kids' },
    { old: '/courses?tab=coding&subtab=teens', new: '/courses/coding/teens' },
    { old: '/courses?tab=coding&subtab=college', new: '/courses/coding/college' },
    { old: '/courses?tab=coding&subtab=customized', new: '/courses/coding/corporate' },
    { old: '/courses?tab=coding&subtab=girls', new: '/courses/coding/girls' },
    { old: '/courses?tab=maths&subtab=elementary', new: '/courses/mathematics/elementary' },
    { old: '/courses?tab=maths&subtab=middle', new: '/courses/mathematics/middle-school' },
    { old: '/courses?tab=maths&subtab=high', new: '/courses/mathematics/high-school' },
    { old: '/courses?tab=maths&subtab=college', new: '/courses/mathematics/college' },
    { old: '/courses?tab=maths&subtab=professional', new: '/courses/mathematics/professional' },
    { old: '/courses?tab=maths&subtab=girls', new: '/courses/mathematics/girls' }
];

dropdownReplacements.forEach(({ old, new: newUrl }) => {
    const regex = new RegExp(old.replace(/[?&]/g, '\\$&'), 'g');
    const matches = content.match(regex);
    if (matches) {
        content = content.replace(regex, newUrl);
        changeCount += matches.length;
        console.log(`  ✓ Updated ${matches.length} instances: ${old} → ${newUrl}`);
    }
});

// 2. Update the JavaScript URL parameter handling
console.log('\nStep 2: Updating JavaScript to handle clean URLs...');

const oldUrlHandling = `            // Handle URL parameters for direct tab access
            const urlParams = new URLSearchParams(window.location.search);
            const urlTab = urlParams.get('tab');
            const urlSubtab = urlParams.get('subtab');

            console.log('URL Parameters:', { tab: urlTab, subtab: urlSubtab });

            if (urlTab) {
                console.log(\`Attempting to activate tab: \${urlTab}\`);
                // Find and click the main tab
                const mainTabButton = document.querySelector(\`.main-tab[data-tab="\${urlTab}"]\`);
                console.log('Main tab button found:', mainTabButton);
                if (mainTabButton) {
                    mainTabButton.click();
                    console.log(\`Clicked main tab: \${urlTab}\`);

                    // If subtab is specified, activate it after a short delay
                    if (urlSubtab) {
                        setTimeout(() => {
                            const subTabButton = document.querySelector(\`.sub-tab[data-subtab="\${urlSubtab}"][data-main="\${urlTab}"]\`);
                            console.log('Sub tab button found:', subTabButton);
                            if (subTabButton) {
                                subTabButton.click();
                                console.log(\`Clicked sub tab: \${urlSubtab}\`);
                            } else {
                                console.warn(\`Sub tab button not found for: \${urlSubtab}\`);
                            }
                        }, 100);
                    }
                } else {
                    console.warn(\`Main tab button not found for: \${urlTab}\`);
                }
            } else {
                console.log('No URL parameters detected, using default tabs');
            }`;

const newUrlHandling = `            // Handle clean URL paths for direct tab access
            // Support both old query params and new clean URLs
            const urlParams = new URLSearchParams(window.location.search);
            let urlTab = urlParams.get('tab');
            let urlSubtab = urlParams.get('subtab');

            // Parse clean URL format: /courses/coding/teens
            const pathParts = window.location.pathname.split('/').filter(p => p);
            if (pathParts.length >= 3 && pathParts[0] === 'courses') {
                urlTab = pathParts[1]; // 'coding' or 'mathematics'
                urlSubtab = pathParts[2]; // 'kids', 'teens', etc.
                
                // Map 'mathematics' to 'maths' for internal tab system
                if (urlTab === 'mathematics') {
                    urlTab = 'maths';
                }
                
                // Map URL-friendly names to internal subtab names
                const subtabMap = {
                    'middle-school': 'middle',
                    'high-school': 'high',
                    'corporate': 'customized'
                };
                urlSubtab = subtabMap[urlSubtab] || urlSubtab;
            }

            console.log('URL Parameters:', { tab: urlTab, subtab: urlSubtab });

            if (urlTab) {
                console.log(\`Attempting to activate tab: \${urlTab}\`);
                // Find and click the main tab
                const mainTabButton = document.querySelector(\`.main-tab[data-tab="\${urlTab}"]\`);
                console.log('Main tab button found:', mainTabButton);
                if (mainTabButton) {
                    mainTabButton.click();
                    console.log(\`Clicked main tab: \${urlTab}\`);

                    // If subtab is specified, activate it after a short delay
                    if (urlSubtab) {
                        setTimeout(() => {
                            const subTabButton = document.querySelector(\`.sub-tab[data-subtab="\${urlSubtab}"][data-main="\${urlTab}"]\`);
                            console.log('Sub tab button found:', subTabButton);
                            if (subTabButton) {
                                subTabButton.click();
                                console.log(\`Clicked sub tab: \${urlSubtab}\`);
                            } else {
                                console.warn(\`Sub tab button not found for: \${urlSubtab}\`);
                            }
                        }, 100);
                    }
                } else {
                    console.warn(\`Main tab button not found for: \${urlTab}\`);
                }
            } else {
                console.log('No URL parameters detected, using default tabs');
            }`;

if (content.includes(oldUrlHandling)) {
    content = content.replace(oldUrlHandling, newUrlHandling);
    console.log('  ✓ Updated JavaScript URL handling to support clean URLs');
    changeCount++;
} else {
    console.log('  ⚠️  Could not find exact JavaScript block to replace');
}

// Write the updated content
fs.writeFileSync(courseHtmlPath, content, 'utf8');

console.log(`\n✅ Complete! Made ${changeCount} changes to course.html`);
console.log('\n📋 Summary of URL Changes:');
console.log('  OLD: /courses?tab=coding&subtab=teens');
console.log('  NEW: /courses/coding/teens');
console.log('\n  OLD: /courses?tab=maths&subtab=high');
console.log('  NEW: /courses/mathematics/high-school');
