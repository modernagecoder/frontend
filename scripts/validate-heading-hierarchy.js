#!/usr/bin/env node

/**
 * Heading Hierarchy Validation Script
 * Validates that all HTML pages have proper heading hierarchy:
 * - Only one h1 per page
 * - No skipped heading levels (h1 -> h2 -> h3, not h1 -> h3)
 * - Proper semantic structure
 */

const fs = require('fs');
const path = require('path');

// Pages to validate
const pagesToValidate = [
    'src/pages/index.html',
    'src/pages/about.html',
    'src/pages/course.html',
    'src/pages/contact.html',
    'src/pages/pricing.html',
    'src/pages/terms.html',
    'src/pages/privacy.html',
    'src/pages/404.html'
];

/**
 * Extract heading information from HTML content using regex
 */
function extractHeadings(htmlContent) {
    const headings = [];
    
    // Regex to match heading tags and their content (with multiline support)
    const headingRegex = /<h([1-6])[^>]*>([\s\S]*?)<\/h[1-6]>/gi;
    let match;
    let index = 0;
    
    while ((match = headingRegex.exec(htmlContent)) !== null) {
        const level = parseInt(match[1]);
        const text = match[2]
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .replace(/\s+/g, ' ')    // Normalize whitespace
            .trim();
        
        headings.push({
            level: level,
            text: text,
            tagName: `h${level}`,
            index: index++
        });
    }
    
    return headings;
}

/**
 * Validate heading hierarchy for a single page
 */
function validateHeadingHierarchy(headings, pagePath) {
    const errors = [];
    const warnings = [];
    
    // Check for h1 presence and uniqueness
    const h1Count = headings.filter(h => h.level === 1).length;
    if (h1Count === 0) {
        errors.push('Missing h1 tag - every page should have exactly one h1');
    } else if (h1Count > 1) {
        errors.push(`Multiple h1 tags found (${h1Count}) - should have only one h1 per page`);
    }
    
    // Check for skipped heading levels
    for (let i = 1; i < headings.length; i++) {
        const currentLevel = headings[i].level;
        const previousLevel = headings[i - 1].level;
        
        // If jumping more than one level up (e.g., h2 to h4)
        if (currentLevel > previousLevel + 1) {
            errors.push(`Skipped heading level: ${headings[i - 1].tagName} (level ${previousLevel}) followed by ${headings[i].tagName} (level ${currentLevel}). Text: "${headings[i].text}"`);
        }
    }
    
    // Check if h1 is the first heading
    if (headings.length > 0 && headings[0].level !== 1) {
        warnings.push(`First heading is ${headings[0].tagName}, should be h1. Text: "${headings[0].text}"`);
    }
    
    return { errors, warnings };
}

/**
 * Main validation function
 */
function validateAllPages() {
    console.log('🔍 Validating heading hierarchy across all pages...\n');
    
    let totalErrors = 0;
    let totalWarnings = 0;
    const results = [];
    
    pagesToValidate.forEach(pagePath => {
        console.log(`📄 Checking ${pagePath}...`);
        
        try {
            if (!fs.existsSync(pagePath)) {
                console.log(`   ❌ File not found: ${pagePath}`);
                return;
            }
            
            const htmlContent = fs.readFileSync(pagePath, 'utf8');
            const headings = extractHeadings(htmlContent);
            const validation = validateHeadingHierarchy(headings, pagePath);
            
            results.push({
                page: pagePath,
                headings: headings,
                errors: validation.errors,
                warnings: validation.warnings
            });
            
            // Display results for this page
            console.log(`   📊 Found ${headings.length} headings`);
            
            if (validation.errors.length === 0 && validation.warnings.length === 0) {
                console.log('   ✅ Heading hierarchy is valid');
            } else {
                if (validation.errors.length > 0) {
                    console.log(`   ❌ ${validation.errors.length} error(s):`);
                    validation.errors.forEach(error => {
                        console.log(`      • ${error}`);
                    });
                    totalErrors += validation.errors.length;
                }
                
                if (validation.warnings.length > 0) {
                    console.log(`   ⚠️  ${validation.warnings.length} warning(s):`);
                    validation.warnings.forEach(warning => {
                        console.log(`      • ${warning}`);
                    });
                    totalWarnings += validation.warnings.length;
                }
            }
            
            // Show heading structure
            if (headings.length > 0) {
                console.log('   📋 Heading structure:');
                headings.forEach(heading => {
                    const indent = '      ' + '  '.repeat(heading.level - 1);
                    console.log(`${indent}${heading.tagName}: ${heading.text}`);
                });
            }
            
        } catch (error) {
            console.log(`   ❌ Error reading file: ${error.message}`);
        }
        
        console.log(''); // Empty line for readability
    });
    
    // Summary
    console.log('📊 VALIDATION SUMMARY');
    console.log('='.repeat(50));
    console.log(`Total pages checked: ${pagesToValidate.length}`);
    console.log(`Total errors: ${totalErrors}`);
    console.log(`Total warnings: ${totalWarnings}`);
    
    if (totalErrors === 0) {
        console.log('✅ All pages have valid heading hierarchy!');
    } else {
        console.log('❌ Some pages have heading hierarchy issues that need to be fixed.');
    }
    
    return { totalErrors, totalWarnings, results };
}

// Run validation if this script is executed directly
if (require.main === module) {
    validateAllPages();
}

module.exports = { validateAllPages, extractHeadings, validateHeadingHierarchy };