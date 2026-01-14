/**
 * Script to add trailing slashes to course URLs in sitemap.xml
 * This fixes the canonical tag mismatch issue
 */
const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');

// Read the sitemap
let content = fs.readFileSync(sitemapPath, 'utf8');

// Add trailing slashes to course URLs that don't have them
// Pattern: /courses/[course-slug] that doesn't end with /
content = content.replace(
    /<loc>(https:\/\/learn\.modernagecoders\.com\/courses\/[a-z0-9-]+)(?!\/)<\/loc>/gi,
    '<loc>$1/</loc>'
);

// Write back
fs.writeFileSync(sitemapPath, content, 'utf8');

console.log('Sitemap updated with trailing slashes for course URLs');

// Count changes
const matches = content.match(/<loc>https:\/\/learn\.modernagecoders\.com\/courses\/[a-z0-9-]+\/<\/loc>/gi);
console.log(`Total course URLs with trailing slashes: ${matches ? matches.length : 0}`);
