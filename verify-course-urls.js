#!/usr/bin/env node

/**
 * Verify Course URLs Script
 * Checks if all course folders have corresponding sitemap entries
 * and if all sitemap URLs point to existing files
 */

const fs = require('fs');
const path = require('path');

const COURSES_DIR = './content/courses/generated';
const SITEMAP_PATH = './sitemap.xml';

console.log('🔍 Verifying Course URLs...\n');

// Get all course folders
const courseFolders = fs.readdirSync(COURSES_DIR)
  .filter(item => {
    const fullPath = path.join(COURSES_DIR, item);
    return fs.statSync(fullPath).isDirectory();
  });

console.log(`✅ Found ${courseFolders.length} course folders\n`);

// Read sitemap
const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');

// Extract course URLs from sitemap
const courseUrlRegex = /<loc>https:\/\/learn\.modernagecoders\.com\/courses\/([^<]+)<\/loc>/g;
const sitemapUrls = [];
let match;

while ((match = courseUrlRegex.exec(sitemapContent)) !== null) {
  sitemapUrls.push(match[1].replace(/\/$/, '')); // Remove trailing slash
}

console.log(`📄 Found ${sitemapUrls.length} course URLs in sitemap\n`);

// Check for missing folders
console.log('🔎 Checking for missing course folders...');
const missingFolders = [];
sitemapUrls.forEach(url => {
  const folderPath = path.join(COURSES_DIR, url);
  const indexPath = path.join(folderPath, 'index.html');
  
  if (!fs.existsSync(indexPath)) {
    missingFolders.push(url);
    console.log(`❌ Missing: ${url}`);
  }
});

if (missingFolders.length === 0) {
  console.log('✅ All sitemap URLs have corresponding folders\n');
} else {
  console.log(`\n⚠️  ${missingFolders.length} URLs missing folders\n`);
}

// Check for folders not in sitemap
console.log('🔎 Checking for folders not in sitemap...');
const missingUrls = [];
courseFolders.forEach(folder => {
  if (!sitemapUrls.includes(folder)) {
    missingUrls.push(folder);
    console.log(`⚠️  Not in sitemap: ${folder}`);
  }
});

if (missingUrls.length === 0) {
  console.log('✅ All course folders are in sitemap\n');
} else {
  console.log(`\n⚠️  ${missingUrls.length} folders not in sitemap\n`);
}

// Summary
console.log('📊 Summary:');
console.log(`   Course folders: ${courseFolders.length}`);
console.log(`   Sitemap URLs: ${sitemapUrls.length}`);
console.log(`   Missing folders: ${missingFolders.length}`);
console.log(`   Missing URLs: ${missingUrls.length}`);

if (missingFolders.length === 0 && missingUrls.length === 0) {
  console.log('\n✅ All course URLs are properly configured!');
  process.exit(0);
} else {
  console.log('\n⚠️  Some issues found. Please review above.');
  process.exit(1);
}
