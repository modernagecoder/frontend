#!/usr/bin/env node

/**
 * Generate Complete Sitemap
 * Creates a sitemap with ALL course folders
 */

const fs = require('fs');
const path = require('path');

const COURSES_DIR = './content/courses/generated';
const SITEMAP_PATH = './sitemap.xml';
const BASE_URL = 'https://learn.modernagecoders.com';
const TODAY = new Date().toISOString().split('T')[0];

console.log('🚀 Generating complete sitemap...\n');

// Get all course folders
const courseFolders = fs.readdirSync(COURSES_DIR)
  .filter(item => {
    const fullPath = path.join(COURSES_DIR, item);
    const indexPath = path.join(fullPath, 'index.html');
    return fs.statSync(fullPath).isDirectory() && fs.existsSync(indexPath);
  })
  .sort();

console.log(`✅ Found ${courseFolders.length} course folders\n`);

// Generate sitemap XML
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <!-- Homepage -->
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Main Pages -->
  <url>
    <loc>${BASE_URL}/courses</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>${BASE_URL}/about</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${BASE_URL}/contact</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${BASE_URL}/pricing</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${BASE_URL}/faq</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>${BASE_URL}/blog</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${BASE_URL}/login</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>

  <!-- Static Pages (City, Summer Camp, Challenges, etc.) -->
${fs.readdirSync('./src/pages')
    .filter(file => {
      // Exclude basic pages already listed or invalid
      const exclude = ['index.html', '404.html', 'course.html', 'about.html', 'contact.html', 'pricing.html', 'faq.html', 'login.html', 'privacy.html', 'terms.html', 'check-status.html', 'dummy.html', 'form-example.html'];
      return file.endsWith('.html') && !file.includes('.backup') && !file.startsWith('test-') && !exclude.includes(file);
    })
    .map(file => {
      const slug = file.replace('.html', '');
      return `  <url>
    <loc>${BASE_URL}/${slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`;
    }).join('\n  \n')}

  <!-- Category Pages -->
${fs.readdirSync('./src/pages/category')
    .filter(file => file.endsWith('.html'))
    .map(file => `  <url>
    <loc>${BASE_URL}/category/${file}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('\n  \n')}
  
  <!-- All Course Pages -->
${courseFolders.map(folder => `  <url>
    <loc>${BASE_URL}/courses/${folder}/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n  \n')}
  
  <!-- Blog Posts -->
${fs.readdirSync('./content/blog/generated').filter(item => {
      const fullPath = path.join('./content/blog/generated', item);
      const indexPath = path.join(fullPath, 'index.html');
      return fs.statSync(fullPath).isDirectory() && fs.existsSync(indexPath);
    }).map(folder => `  <url>
    <loc>${BASE_URL}/blog/${folder}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n  \n')}
  
  <!-- Legal Pages -->
  <url>
    <loc>${BASE_URL}/terms</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
  <url>
    <loc>${BASE_URL}/privacy</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
</urlset>
`;

// Write sitemap
fs.writeFileSync(SITEMAP_PATH, sitemapContent, 'utf-8');

console.log(`✅ Generated sitemap with ${courseFolders.length} courses`);
console.log(`📄 Saved to: ${SITEMAP_PATH}\n`);

// Show sample URLs
console.log('📋 Sample course URLs:');
courseFolders.slice(0, 5).forEach(folder => {
  console.log(`   ${BASE_URL}/courses/${folder}/`);
});
console.log(`   ... and ${courseFolders.length - 5} more\n`);

console.log('✅ Done! Run "node verify-course-urls.js" to verify.');
