/**
 * Touch Target Size Measurement Script
 * Measures all interactive elements to verify they meet 44x44px minimum requirement
 * Requirements: 5.1, 5.2
 */

const fs = require('fs');
const path = require('path');

// Minimum touch target size (44x44px as per Apple/Google guidelines)
const MIN_TOUCH_TARGET_SIZE = 44;

/**
 * Get all HTML files to test
 */
function getHtmlFiles() {
    const files = [];
    
    // Main pages
    if (fs.existsSync('src/pages/index.html')) files.push('src/pages/index.html');
    if (fs.existsSync('src/pages/about.html')) files.push('src/pages/about.html');
    if (fs.existsSync('src/pages/course.html')) files.push('src/pages/course.html');
    if (fs.existsSync('src/pages/404.html')) files.push('src/pages/404.html');
    if (fs.existsSync('src/pages/contact.html')) files.push('src/pages/contact.html');
    if (fs.existsSync('src/pages/pricing.html')) files.push('src/pages/pricing.html');
    if (fs.existsSync('src/pages/terms.html')) files.push('src/pages/terms.html');
    if (fs.existsSync('src/pages/privacy.html')) files.push('src/pages/privacy.html');
    
    // Generated course pages
    const coursesDir = 'src/pages/courses';
    if (fs.existsSync(coursesDir)) {
        const courseFiles = fs.readdirSync(coursesDir)
            .filter(file => file.endsWith('.html'))
            .map(file => path.join(coursesDir, file));
        files.push(...courseFiles);
    }
    
    // Generated blog pages
    const blogDir = 'src/pages/blog';
    if (fs.existsSync(blogDir)) {
        const blogFiles = fs.readdirSync(blogDir)
            .filter(file => file.endsWith('.html'))
            .map(file => path.join(blogDir, file));
        files.push(...blogFiles);
    }
    
    return files;
}

/**
 * Extract interactive elements from HTML content
 */
function extractInteractiveElements(htmlContent, filePath) {
    const elements = [];
    
    // Selectors for interactive elements
    const interactiveSelectors = [
        'button',
        'a[href]',
        'input[type="button"]',
        'input[type="submit"]',
        'input[type="reset"]',
        '[role="button"]',
        '[onclick]',
        'select',
        'textarea',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="tel"]',
        'input[type="password"]',
        'input[type="search"]',
        'input[type="url"]',
        'input[type="number"]',
        '[tabindex]:not([tabindex="-1"])'
    ];
    
    // Simple regex-based extraction (for basic analysis)
    interactiveSelectors.forEach(selector => {
        const tagName = selector.split('[')[0].split(':')[0];
        const regex = new RegExp(`<${tagName}[^>]*>`, 'gi');
        let match;
        
        while ((match = regex.exec(htmlContent)) !== null) {
            const element = match[0];
            const elementInfo = {
                file: filePath,
                tag: tagName,
                element: element,
                line: htmlContent.substring(0, match.index).split('\n').length,
                selector: selector
            };
            elements.push(elementInfo);
        }
    });
    
    return elements;
}

/**
 * Analyze CSS for touch target sizing
 */
function analyzeCSSForTouchTargets() {
    const cssFiles = [];
    
    // Find CSS files
    if (fs.existsSync('src/css')) {
        const files = fs.readdirSync('src/css')
            .filter(file => file.endsWith('.css'))
            .map(file => path.join('src/css', file));
        cssFiles.push(...files);
    }
    
    const touchTargetRules = [];
    
    cssFiles.forEach(cssFile => {
        if (fs.existsSync(cssFile)) {
            const cssContent = fs.readFileSync(cssFile, 'utf8');
            
            // Look for button and link sizing rules
            const rules = [
                { selector: 'button', property: 'min-width|min-height|width|height|padding' },
                { selector: 'a', property: 'min-width|min-height|width|height|padding' },
                { selector: '.btn', property: 'min-width|min-height|width|height|padding' },
                { selector: 'input', property: 'min-width|min-height|width|height|padding' },
                { selector: '[role="button"]', property: 'min-width|min-height|width|height|padding' }
            ];
            
            rules.forEach(rule => {
                const regex = new RegExp(`${rule.selector}[^{]*{[^}]*(?:${rule.property})[^}]*}`, 'gi');
                let match;
                
                while ((match = regex.exec(cssContent)) !== null) {
                    touchTargetRules.push({
                        file: cssFile,
                        rule: match[0],
                        selector: rule.selector
                    });
                }
            });
        }
    });
    
    return touchTargetRules;
}

/**
 * Generate browser automation script for measuring elements
 */
function generateMeasurementScript() {
    return `
// Browser console script to measure touch targets
// Run this in Chrome DevTools console on each page

function measureTouchTargets() {
    const MIN_SIZE = 44;
    const results = [];
    
    // Interactive element selectors
    const selectors = [
        'button',
        'a[href]',
        'input[type="button"]',
        'input[type="submit"]',
        'input[type="reset"]',
        '[role="button"]',
        'select',
        'textarea',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="tel"]',
        'input[type="password"]',
        'input[type="search"]',
        'input[type="url"]',
        'input[type="number"]'
    ];
    
    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        
        elements.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            const computedStyle = window.getComputedStyle(element);
            
            // Get actual dimensions including padding
            const width = rect.width;
            const height = rect.height;
            
            const result = {
                selector: selector,
                index: index,
                element: element.tagName.toLowerCase() + (element.className ? '.' + element.className.split(' ').join('.') : ''),
                width: Math.round(width),
                height: Math.round(height),
                meetsMinWidth: width >= MIN_SIZE,
                meetsMinHeight: height >= MIN_SIZE,
                meetsRequirement: width >= MIN_SIZE && height >= MIN_SIZE,
                text: element.textContent?.trim().substring(0, 50) || element.value || element.alt || '[no text]',
                visible: rect.width > 0 && rect.height > 0 && computedStyle.visibility !== 'hidden' && computedStyle.display !== 'none'
            };
            
            results.push(result);
        });
    });
    
    // Filter to only visible elements
    const visibleResults = results.filter(r => r.visible);
    
    // Summary
    const total = visibleResults.length;
    const passing = visibleResults.filter(r => r.meetsRequirement).length;
    const failing = visibleResults.filter(r => !r.meetsRequirement).length;
    
    console.log('=== TOUCH TARGET MEASUREMENT RESULTS ===');
    console.log(\`Total interactive elements: \${total}\`);
    console.log(\`Passing (≥44x44px): \${passing}\`);
    console.log(\`Failing (<44x44px): \${failing}\`);
    console.log(\`Pass rate: \${Math.round((passing/total)*100)}%\`);
    
    if (failing > 0) {
        console.log('\\n=== FAILING ELEMENTS ===');
        visibleResults.filter(r => !r.meetsRequirement).forEach(r => {
            console.log(\`❌ \${r.element}: \${r.width}x\${r.height}px - "\${r.text}"\`);
        });
    }
    
    console.log('\\n=== ALL RESULTS ===');
    console.table(visibleResults.map(r => ({
        Element: r.element,
        Size: \`\${r.width}x\${r.height}px\`,
        Pass: r.meetsRequirement ? '✅' : '❌',
        Text: r.text
    })));
    
    return {
        total,
        passing,
        failing,
        passRate: Math.round((passing/total)*100),
        results: visibleResults
    };
}

// Run the measurement
const touchTargetResults = measureTouchTargets();
`;
}

/**
 * Main measurement function
 */
function measureTouchTargets() {
    console.log('🔍 Touch Target Size Measurement Tool');
    console.log('=====================================\n');
    
    const htmlFiles = getHtmlFiles();
    console.log(`Found ${htmlFiles.length} HTML files to analyze:\n`);
    
    const allElements = [];
    
    // Analyze HTML files
    htmlFiles.forEach(file => {
        if (fs.existsSync(file)) {
            console.log(`📄 Analyzing: ${file}`);
            const content = fs.readFileSync(file, 'utf8');
            const elements = extractInteractiveElements(content, file);
            allElements.push(...elements);
            console.log(`   Found ${elements.length} interactive elements`);
        }
    });
    
    console.log(`\n📊 Total interactive elements found: ${allElements.length}\n`);
    
    // Analyze CSS rules
    console.log('🎨 Analyzing CSS for touch target rules...');
    const cssRules = analyzeCSSForTouchTargets();
    console.log(`   Found ${cssRules.length} relevant CSS rules\n`);
    
    // Generate browser measurement script
    const measurementScript = generateMeasurementScript();
    fs.writeFileSync('touch-target-measurement.js', measurementScript);
    
    // Create detailed report
    const report = {
        timestamp: new Date().toISOString(),
        summary: {
            totalHtmlFiles: htmlFiles.length,
            totalInteractiveElements: allElements.length,
            totalCssRules: cssRules.length
        },
        files: htmlFiles.map(file => ({
            file,
            elementCount: allElements.filter(el => el.file === file).length
        })),
        interactiveElements: allElements,
        cssRules: cssRules,
        instructions: [
            '1. Open each page in Chrome DevTools',
            '2. Switch to mobile device emulation (iPhone 12 Pro, 390x844)',
            '3. Open Console tab',
            '4. Copy and paste the content of touch-target-measurement.js',
            '5. Press Enter to run the measurement',
            '6. Review results and note any failing elements',
            '7. Repeat for all pages'
        ]
    };
    
    // Write detailed report
    fs.writeFileSync('touch-target-analysis-report.json', JSON.stringify(report, null, 2));
    
    // Create summary report
    const summaryReport = `# Touch Target Size Measurement Report

Generated: ${new Date().toLocaleString()}

## Summary
- **Total HTML files analyzed**: ${htmlFiles.length}
- **Total interactive elements found**: ${allElements.length}
- **CSS rules for touch targets**: ${cssRules.length}

## Requirements
- **Minimum touch target size**: 44x44 pixels
- **Requirements covered**: 5.1 (buttons ≥ 44x44px), 5.2 (links ≥ 44x44px)

## Files Analyzed
${htmlFiles.map(file => `- ${file} (${allElements.filter(el => el.file === file).length} elements)`).join('\n')}

## Interactive Elements by Type
${Object.entries(
    allElements.reduce((acc, el) => {
        acc[el.tag] = (acc[el.tag] || 0) + 1;
        return acc;
    }, {})
).map(([tag, count]) => `- ${tag}: ${count} elements`).join('\n')}

## Manual Testing Instructions

### 1. Automated Measurement
A browser script has been generated: \`touch-target-measurement.js\`

### 2. Testing Process
1. Open each page in Chrome DevTools
2. Enable device emulation (iPhone 12 Pro - 390x844px)
3. Open Console tab
4. Copy and paste the content of \`touch-target-measurement.js\`
5. Press Enter to run the measurement
6. Review results for failing elements

### 3. Pages to Test
${htmlFiles.map(file => `- [ ] ${file}`).join('\n')}

### 4. Expected Results
- All buttons should be ≥ 44x44px
- All links should be ≥ 44x44px
- Pass rate should be 100%

## CSS Rules Found
${cssRules.length > 0 ? cssRules.map(rule => `
### ${rule.file}
\`\`\`css
${rule.rule}
\`\`\`
`).join('\n') : 'No specific touch target CSS rules found.'}

## Next Steps
1. Run the manual testing process above
2. Document any failing elements
3. Update CSS to fix elements smaller than 44x44px
4. Re-test to verify all elements pass
5. Update this report with final results

## Notes
- This analysis is based on static HTML/CSS analysis
- Actual measurements must be done in the browser
- Some elements may be styled dynamically via JavaScript
- Mobile viewport testing is essential for accurate measurements
`;

    fs.writeFileSync('TOUCH-TARGET-MEASUREMENT-REPORT.md', summaryReport);
    
    console.log('📋 Reports generated:');
    console.log('   - touch-target-measurement.js (browser script)');
    console.log('   - touch-target-analysis-report.json (detailed data)');
    console.log('   - TOUCH-TARGET-MEASUREMENT-REPORT.md (summary report)');
    
    console.log('\n🔧 Manual Testing Required:');
    console.log('   1. Open Chrome DevTools on each page');
    console.log('   2. Enable mobile device emulation');
    console.log('   3. Run the measurement script in console');
    console.log('   4. Document results');
    
    console.log('\n✅ Touch target measurement setup complete!');
    
    return report;
}

// Run if called directly
if (require.main === module) {
    measureTouchTargets();
}

module.exports = { measureTouchTargets };