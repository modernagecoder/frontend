/**
 * Touch Target Validation Script
 * Validates that CSS rules properly implement 44x44px minimum touch targets
 * Requirements: 5.1, 5.2
 */

const fs = require('fs');
const path = require('path');

/**
 * Parse CSS to find touch target rules
 */
function parseTouchTargetCSS() {
    const cssFiles = [
        'src/css/responsive.css',
        'src/css/style.css',
        'src/css/keyboard-navigation.css'
    ];
    
    const touchTargetRules = [];
    const issues = [];
    
    cssFiles.forEach(cssFile => {
        if (fs.existsSync(cssFile)) {
            const cssContent = fs.readFileSync(cssFile, 'utf8');
            
            // Check for button touch target rules
            const buttonSelectors = [
                'button',
                'input[type="submit"]',
                'input[type="button"]',
                'input[type="reset"]',
                '.btn',
                '.cta-button',
                '.card-button',
                '.plan-button',
                '.mobile-menu-btn'
            ];
            
            // Check for link touch target rules
            const linkSelectors = [
                'a',
                '.nav-link',
                '.dropdown-item',
                '.footer-link'
            ];
            
            // Look for min-height and min-width rules
            const minSizeRegex = /min-(width|height):\s*(\d+)px/g;
            let match;
            
            while ((match = minSizeRegex.exec(cssContent)) !== null) {
                const property = match[1];
                const value = parseInt(match[2]);
                
                touchTargetRules.push({
                    file: cssFile,
                    property: `min-${property}`,
                    value: value,
                    meetsRequirement: value >= 44,
                    context: cssContent.substring(Math.max(0, match.index - 100), match.index + 100)
                });
                
                if (value < 44) {
                    issues.push({
                        file: cssFile,
                        issue: `min-${property}: ${value}px is less than required 44px`,
                        severity: 'error'
                    });
                }
            }
            
            // Check for specific button and link rules
            [...buttonSelectors, ...linkSelectors].forEach(selector => {
                const selectorRegex = new RegExp(`${selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^{]*{[^}]*}`, 'gi');
                let selectorMatch;
                
                while ((selectorMatch = selectorRegex.exec(cssContent)) !== null) {
                    const rule = selectorMatch[0];
                    const hasMinHeight = /min-height:\s*(\d+)px/.test(rule);
                    const hasMinWidth = /min-width:\s*(\d+)px/.test(rule);
                    
                    if (hasMinHeight || hasMinWidth) {
                        touchTargetRules.push({
                            file: cssFile,
                            selector: selector,
                            rule: rule,
                            hasMinHeight,
                            hasMinWidth
                        });
                    }
                }
            });
        }
    });
    
    return { touchTargetRules, issues };
}

/**
 * Check HTML files for interactive elements
 */
function checkHTMLElements() {
    const htmlFiles = [
        'src/pages/index.html',
        'src/pages/about.html',
        'src/pages/course.html',
        'src/pages/404.html',
        'src/pages/contact.html',
        'src/pages/pricing.html',
        'src/pages/terms.html',
        'src/pages/privacy.html'
    ];
    
    const elementCounts = {};
    
    htmlFiles.forEach(file => {
        if (fs.existsSync(file)) {
            const content = fs.readFileSync(file, 'utf8');
            
            // Count interactive elements
            const buttonCount = (content.match(/<button[^>]*>/gi) || []).length;
            const linkCount = (content.match(/<a[^>]*href[^>]*>/gi) || []).length;
            const inputCount = (content.match(/<input[^>]*type="(button|submit|reset)"[^>]*>/gi) || []).length;
            
            elementCounts[file] = {
                buttons: buttonCount,
                links: linkCount,
                inputs: inputCount,
                total: buttonCount + linkCount + inputCount
            };
        }
    });
    
    return elementCounts;
}

/**
 * Generate testing instructions
 */
function generateTestingInstructions() {
    return `
# Touch Target Testing Instructions

## Automated Browser Testing

1. **Open Chrome DevTools**
   - Open each page in Chrome
   - Press F12 to open DevTools
   - Switch to mobile device emulation (iPhone 12 Pro - 390x844px)

2. **Run Measurement Script**
   - Copy the content of 'touch-target-measurement.js'
   - Paste into Console tab
   - Press Enter to execute

3. **Review Results**
   - Check console output for failing elements
   - Note any elements smaller than 44x44px
   - Document issues for fixing

## Manual Testing Checklist

### Pages to Test:
- [ ] Homepage (src/pages/index.html)
- [ ] About page (src/pages/about.html)
- [ ] Courses page (src/pages/course.html)
- [ ] 404 page (src/pages/404.html)
- [ ] Contact page (src/pages/contact.html)
- [ ] Pricing page (src/pages/pricing.html)
- [ ] Terms page (src/pages/terms.html)
- [ ] Privacy page (src/pages/privacy.html)

### Elements to Verify:
- [ ] All buttons ≥ 44x44px
- [ ] All navigation links ≥ 44x44px
- [ ] All form inputs ≥ 44px height
- [ ] All interactive icons ≥ 44x44px
- [ ] Minimum 8px spacing between touch targets

### Testing Process:
1. Enable mobile device emulation
2. Use Chrome DevTools ruler to measure elements
3. Verify touch targets meet minimum size
4. Test tap accuracy on actual mobile device
5. Document any failing elements

## Expected Results:
- 100% pass rate for touch target sizes
- No horizontal scrolling on mobile
- Easy tapping without accidental clicks
- Proper spacing between interactive elements
`;
}

/**
 * Main validation function
 */
function validateTouchTargets() {
    console.log('🎯 Touch Target Validation');
    console.log('==========================\n');
    
    // Parse CSS rules
    const { touchTargetRules, issues } = parseTouchTargetCSS();
    console.log(`📋 Found ${touchTargetRules.length} touch target CSS rules`);
    
    // Check HTML elements
    const elementCounts = checkHTMLElements();
    const totalElements = Object.values(elementCounts).reduce((sum, counts) => sum + counts.total, 0);
    console.log(`🔍 Found ${totalElements} interactive elements across all pages\n`);
    
    // Report issues
    if (issues.length > 0) {
        console.log('❌ CSS Issues Found:');
        issues.forEach(issue => {
            console.log(`   ${issue.file}: ${issue.issue}`);
        });
        console.log('');
    } else {
        console.log('✅ No CSS touch target issues found\n');
    }
    
    // Show element breakdown
    console.log('📊 Interactive Elements by Page:');
    Object.entries(elementCounts).forEach(([file, counts]) => {
        console.log(`   ${file}:`);
        console.log(`     Buttons: ${counts.buttons}`);
        console.log(`     Links: ${counts.links}`);
        console.log(`     Inputs: ${counts.inputs}`);
        console.log(`     Total: ${counts.total}`);
    });
    
    // Generate testing instructions
    const instructions = generateTestingInstructions();
    fs.writeFileSync('TOUCH-TARGET-TESTING-INSTRUCTIONS.md', instructions);
    
    console.log('\n📋 Testing instructions generated: TOUCH-TARGET-TESTING-INSTRUCTIONS.md');
    console.log('\n🔧 Next Steps:');
    console.log('   1. Run browser testing on each page');
    console.log('   2. Use touch-target-measurement.js script');
    console.log('   3. Document any failing elements');
    console.log('   4. Fix CSS for elements < 44x44px');
    
    return {
        touchTargetRules,
        issues,
        elementCounts,
        totalElements,
        summary: {
            cssRules: touchTargetRules.length,
            issues: issues.length,
            totalElements,
            pagesAnalyzed: Object.keys(elementCounts).length
        }
    };
}

// Run if called directly
if (require.main === module) {
    validateTouchTargets();
}

module.exports = { validateTouchTargets };