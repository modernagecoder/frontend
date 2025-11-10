const fs = require('fs');
const path = require('path');

// URL mapping for clean URLs
const urlMap = {
    'index.html': '/',
    'about.html': '/about',
    'course.html': '/courses',
    'pricing.html': '/pricing',
    'contact.html': '/contact',
    'faq.html': '/faq',
    'terms.html': '/terms',
    'privacy.html': '/privacy',
    'login.html': '/login',
    '/content/blog/generated/index.html': '/blog'
};

// Files to update
const pagesToUpdate = [
    'src/pages/index.html',
    'src/pages/about.html',
    'src/pages/course.html',
    'src/pages/pricing.html',
    'src/pages/contact.html',
    'src/pages/faq.html',
    'src/pages/terms.html',
    'src/pages/privacy.html',
    'src/pages/login.html',
    'src/pages/404.html'
];

function updateNavigationLinks(filePath) {
    console.log(`\n📝 Updating: ${filePath}`);
    
    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  File not found: ${filePath}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let changeCount = 0;

    // Replace all navigation links
    Object.entries(urlMap).forEach(([oldUrl, newUrl]) => {
        // Match href="oldUrl" (with or without quotes)
        const patterns = [
            new RegExp(`href="${oldUrl}"`, 'g'),
            new RegExp(`href='${oldUrl}'`, 'g')
        ];

        patterns.forEach(pattern => {
            const matches = content.match(pattern);
            if (matches) {
                changeCount += matches.length;
                content = content.replace(pattern, `href="${newUrl}"`);
            }
        });
    });

    // Update course.html links with query parameters
    content = content.replace(/href="course\.html\?/g, 'href="/courses?');
    
    // Update blog links
    content = content.replace(/href="\/content\/blog\/generated\/index\.html"/g, 'href="/blog"');

    // Write back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated ${changeCount} links in ${path.basename(filePath)}`);
}

// Update all pages
console.log('🚀 Starting navigation URL cleanup...\n');
pagesToUpdate.forEach(updateNavigationLinks);
console.log('\n✨ All navigation links updated to clean URLs!');
