#!/usr/bin/env node

/**
 * Viewport Meta Tag Validator
 * 
 * This script validates that all HTML pages have the proper viewport meta tag
 * with the correct content: width=device-width, initial-scale=1.0
 */

const fs = require('fs');
const path = require('path');

// Configuration
const REQUIRED_VIEWPORT_CONTENT = 'width=device-width, initial-scale=1.0';

// Directories to scan for HTML files
const SCAN_DIRECTORIES = [
    'src/pages',
    'content/blog/generated',
    'content/courses/generated',
    'content/blog/template',
    'content/courses/template'
];

// Files to exclude from validation
const EXCLUDE_FILES = [
    'test-touch-targets.html', // Test file
    'form-example.html',       // Example file
    'test-backend.html',       // Test file
    'check-status.html'        // Test file
];

/**
 * Recursively find all HTML files in a directory
 */
function findHtmlFiles(dir, files = []) {
    if (!fs.existsSync(dir)) {
        return files;
    }

    const items = fs.readdirSync(dir);
    
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            findHtmlFiles(fullPath, files);
        } else if (item.endsWith('.html') && !EXCLUDE_FILES.includes(item)) {
            files.push(fullPath);
        }
    }
    
    return files;
}

/**
 * Validate viewport meta tag in an HTML file using regex
 */
function validateViewportTag(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Look for viewport meta tag using regex
        const viewportRegex = /<meta\s+name=["']viewport["']\s+content=["']([^"']+)["'][^>]*>/i;
        const match = content.match(viewportRegex);
        
        if (!match) {
            return {
                valid: false,
                error: 'Missing viewport meta tag',
                file: filePath
            };
        }
        
        const content_attr = match[1];
        
        // Normalize content for comparison (remove extra spaces)
        const normalizedContent = content_attr.replace(/\s+/g, ' ').trim();
        const normalizedRequired = REQUIRED_VIEWPORT_CONTENT.replace(/\s+/g, ' ').trim();
        
        if (normalizedContent !== normalizedRequired) {
            return {
                valid: false,
                error: `Incorrect viewport content. Expected: "${REQUIRED_VIEWPORT_CONTENT}", Found: "${content_attr}"`,
                file: filePath
            };
        }
        
        return {
            valid: true,
            file: filePath
        };
        
    } catch (error) {
        return {
            valid: false,
            error: `Error reading file: ${error.message}`,
            file: filePath
        };
    }
}

/**
 * Main validation function
 */
function validateAllPages() {
    console.log('🔍 Validating viewport meta tags across all HTML pages...\n');
    
    let allFiles = [];
    
    // Collect all HTML files from scan directories
    for (const dir of SCAN_DIRECTORIES) {
        const files = findHtmlFiles(dir);
        allFiles = allFiles.concat(files);
    }
    
    // Also check root level HTML files
    const rootFiles = fs.readdirSync('.')
        .filter(file => file.endsWith('.html') && !EXCLUDE_FILES.includes(file))
        .map(file => path.join('.', file));
    
    allFiles = allFiles.concat(rootFiles);
    
    if (allFiles.length === 0) {
        console.log('❌ No HTML files found to validate');
        return false;
    }
    
    console.log(`📄 Found ${allFiles.length} HTML files to validate\n`);
    
    const results = [];
    const errors = [];
    
    // Validate each file
    for (const file of allFiles) {
        const result = validateViewportTag(file);
        results.push(result);
        
        if (result.valid) {
            console.log(`✅ ${file}`);
        } else {
            console.log(`❌ ${file}: ${result.error}`);
            errors.push(result);
        }
    }
    
    // Summary
    console.log(`\n📊 Validation Summary:`);
    console.log(`   Total files: ${results.length}`);
    console.log(`   Valid: ${results.filter(r => r.valid).length}`);
    console.log(`   Invalid: ${errors.length}`);
    
    if (errors.length > 0) {
        console.log(`\n❌ Files with viewport issues:`);
        errors.forEach(error => {
            console.log(`   • ${error.file}: ${error.error}`);
        });
        return false;
    } else {
        console.log(`\n🎉 All HTML pages have proper viewport meta tags!`);
        return true;
    }
}

// Run validation if script is executed directly
if (require.main === module) {
    const success = validateAllPages();
    process.exit(success ? 0 : 1);
}

module.exports = { validateAllPages, validateViewportTag };