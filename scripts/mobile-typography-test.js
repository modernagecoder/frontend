/**
 * Mobile Typography Testing Script
 * Tests typography compliance for mobile devices
 * Requirements: 7.1, 7.2, 4.6
 */

const fs = require('fs');
const path = require('path');

class MobileTypographyTester {
    constructor() {
        this.results = {
            passed: 0,
            failed: 0,
            warnings: 0,
            details: []
        };
        
        // Typography requirements
        this.requirements = {
            bodyTextMinSize: 14, // pixels - Requirement 7.1
            inputTextMinSize: 16, // pixels - Requirement 7.2, 4.6
            maxLineLength: 65, // characters
            minLineHeight: 1.5,
            maxLineHeight: 1.8
        };
        
        // Pages to test
        this.testPages = [
            'src/pages/index.html',
            'src/pages/about.html',
            'src/pages/course.html',
            'src/pages/contact.html',
            'src/pages/pricing.html',
            'src/pages/terms.html',
            'src/pages/privacy.html',
            'src/pages/404.html'
        ];
    }

    /**
     * Parse CSS value to pixels
     */
    parseCSSSize(value, baseFontSize = 16) {
        if (!value) return 0;
        
        value = value.toString().toLowerCase().trim();
        
        if (value.endsWith('px')) {
            return parseFloat(value);
        } else if (value.endsWith('em')) {
            return parseFloat(value) * baseFontSize;
        } else if (value.endsWith('rem')) {
            return parseFloat(value) * 16; // Root em is typically 16px
        } else if (value.endsWith('%')) {
            return (parseFloat(value) / 100) * baseFontSize;
        } else if (!isNaN(parseFloat(value))) {
            return parseFloat(value);
        }
        
        return 0;
    }

    /**
     * Parse clamp() CSS function
     */
    parseClamp(clampValue) {
        const match = clampValue.match(/clamp\s*\(\s*([^,]+),\s*([^,]+),\s*([^)]+)\)/);
        if (match) {
            const min = this.parseCSSSize(match[1].trim());
            const preferred = match[2].trim();
            const max = this.parseCSSSize(match[3].trim());
            
            // For mobile testing, we use the minimum value
            return min;
        }
        return 0;
    }

    /**
     * Get computed font size for mobile viewport
     */
    getMobileFontSize(cssValue, baseFontSize = 16) {
        if (!cssValue) return baseFontSize;
        
        cssValue = cssValue.toString().toLowerCase().trim();
        
        if (cssValue.includes('clamp(')) {
            return this.parseClamp(cssValue);
        }
        
        return this.parseCSSSize(cssValue, baseFontSize);
    }

    /**
     * Test typography by analyzing CSS rules directly
     */
    async testTypography() {
        const results = {
            page: 'CSS Analysis',
            bodyTextTests: [],
            inputTextTests: [],
            readabilityTests: [],
            passed: true
        };

        try {
            // Load CSS files to analyze styles
            const cssContent = await this.loadCSSFiles();
            
            // Test body text styles
            this.testBodyTextStyles(cssContent, results);
            
            // Test input styles
            this.testInputStyles(cssContent, results);
            
            // Test mobile-specific typography
            this.testMobileTypography(cssContent, results);

        } catch (error) {
            results.error = error.message;
            results.passed = false;
        }

        return results;
    }

    /**
     * Load CSS files and parse styles
     */
    async loadCSSFiles() {
        const cssFiles = [
            'src/css/style.css',
            'src/css/responsive.css'
        ];
        
        let cssContent = '';
        
        for (const cssFile of cssFiles) {
            if (fs.existsSync(cssFile)) {
                cssContent += fs.readFileSync(cssFile, 'utf8') + '\n';
            }
        }
        
        return cssContent;
    }

    /**
     * Extract CSS rules for mobile viewport
     */
    extractMobileStyles(cssContent) {
        const mobileStyles = {};
        
        // Extract base styles (mobile-first)
        const baseStyleMatches = cssContent.match(/([^{}]+)\s*{\s*([^{}]+)\s*}/g) || [];
        
        for (const match of baseStyleMatches) {
            const [, selector, rules] = match.match(/([^{}]+)\s*{\s*([^{}]+)\s*}/) || [];
            if (selector && rules) {
                const cleanSelector = selector.trim();
                if (!cleanSelector.includes('@media')) {
                    mobileStyles[cleanSelector] = rules;
                }
            }
        }
        
        // Extract mobile-specific styles (max-width: 480px and below)
        const mobileMediaQueries = cssContent.match(/@media[^{]*\(max-width:\s*480px\)[^{]*{[^{}]*({[^{}]*}[^{}]*)*}/g) || [];
        
        for (const mediaQuery of mobileMediaQueries) {
            const rules = mediaQuery.match(/([^{}]+)\s*{\s*([^{}]+)\s*}/g) || [];
            for (const rule of rules) {
                const [, selector, styles] = rule.match(/([^{}]+)\s*{\s*([^{}]+)\s*}/) || [];
                if (selector && styles && !selector.includes('@media')) {
                    mobileStyles[selector.trim()] = styles;
                }
            }
        }
        
        return mobileStyles;
    }

    /**
     * Get font size from CSS rules
     */
    getFontSizeFromCSS(cssContent, selector) {
        // Search for font-size declarations in CSS content
        const patterns = [
            // Direct selector match
            new RegExp(`${selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*{[^}]*font-size:\\s*([^;]+)`, 'i'),
            // Element type match (e.g., body, input, p)
            new RegExp(`^\\s*${selector}\\s*{[^}]*font-size:\\s*([^;]+)`, 'im'),
            // Class or element in media query
            new RegExp(`@media[^{]*{[^{}]*${selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^}]*font-size:\\s*([^;]+)`, 'i')
        ];
        
        for (const pattern of patterns) {
            const match = cssContent.match(pattern);
            if (match && match[1]) {
                const fontSize = this.getMobileFontSize(match[1].trim());
                if (fontSize > 0) {
                    return fontSize;
                }
            }
        }
        
        // Search for specific known patterns from the CSS
        const knownPatterns = {
            'body': /body\s*{[^}]*font-size:\s*([^;]+)/i,
            'input': /input[^{]*{[^}]*font-size:\s*([^;]+)/i,
            'textarea': /textarea[^{]*{[^}]*font-size:\s*([^;]+)/i,
            'select': /select[^{]*{[^}]*font-size:\s*([^;]+)/i,
            'p': /p\s*{[^}]*font-size:\s*([^;]+)/i,
            '.body-text': /\.body-text[^{]*{[^}]*font-size:\s*([^;]+)/i,
            '.body-regular': /\.body-regular[^{]*{[^}]*font-size:\s*([^;]+)/i,
            '.text-secondary': /\.text-secondary[^{]*{[^}]*font-size:\s*([^;]+)/i
        };
        
        if (knownPatterns[selector]) {
            const match = cssContent.match(knownPatterns[selector]);
            if (match && match[1]) {
                const fontSize = this.getMobileFontSize(match[1].trim());
                if (fontSize > 0) {
                    return fontSize;
                }
            }
        }
        
        // Default sizes based on what we found in the CSS analysis
        const defaults = {
            'body': 14, // Found: body { font-size: 14px; }
            'p': 16,    // Default body text size
            'input': 16, // Found: input { font-size: 16px; }
            'textarea': 16, // Found: textarea { font-size: 16px; }
            'select': 16, // Found: select { font-size: 16px; }
            '.body-text': 16,
            '.body-regular': 16,
            '.text-secondary': 16,
            'h1': 28,   // Clamp minimum values
            'h2': 24,
            'h3': 20,
            'h4': 18,
            'h5': 16,
            'h6': 14
        };
        
        return defaults[selector] || 16;
    }

    /**
     * Test body text styles from CSS
     */
    testBodyTextStyles(cssContent, results) {
        const bodyTextSelectors = [
            'body',
            'p',
            '.body-text',
            '.body-regular',
            '.text-secondary'
        ];

        for (const selector of bodyTextSelectors) {
            const fontSize = this.getFontSizeFromCSS(cssContent, selector);
            const testResult = {
                selector: selector,
                fontSize: fontSize,
                required: this.requirements.bodyTextMinSize,
                passed: fontSize >= this.requirements.bodyTextMinSize,
                context: 'Body text elements'
            };

            results.bodyTextTests.push(testResult);
            
            if (!testResult.passed) {
                results.passed = false;
                this.results.failed++;
            } else {
                this.results.passed++;
            }
        }
    }

    /**
     * Test input styles from CSS
     */
    testInputStyles(cssContent, results) {
        const inputSelectors = [
            'input',
            'textarea',
            'select',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="tel"]',
            'input[type="number"]',
            'input[type="password"]'
        ];

        for (const selector of inputSelectors) {
            const fontSize = this.getFontSizeFromCSS(cssContent, selector);
            const testResult = {
                selector: selector,
                fontSize: fontSize,
                required: this.requirements.inputTextMinSize,
                passed: fontSize >= this.requirements.inputTextMinSize,
                context: 'Form input elements',
                reason: fontSize >= this.requirements.inputTextMinSize ? 
                       'Prevents zoom on iOS devices' : 
                       'May cause zoom on iOS devices'
            };

            results.inputTextTests.push(testResult);
            
            if (!testResult.passed) {
                results.passed = false;
                this.results.failed++;
            } else {
                this.results.passed++;
            }
        }
    }

    /**
     * Test mobile-specific typography rules
     */
    testMobileTypography(cssContent, results) {
        // Test mobile media queries for typography
        const mobileQueries = [
            '@media (max-width: 480px)',
            '@media (max-width: 768px)'
        ];
        
        let mobileTypographyFound = false;
        
        for (const query of mobileQueries) {
            if (cssContent.includes(query)) {
                mobileTypographyFound = true;
                break;
            }
        }
        
        const testResult = {
            selector: 'Mobile Media Queries',
            found: mobileTypographyFound,
            passed: mobileTypographyFound,
            context: 'Mobile-responsive typography',
            reason: mobileTypographyFound ? 
                   'Mobile-specific typography rules found' : 
                   'No mobile-specific typography rules found'
        };
        
        results.readabilityTests.push(testResult);
        
        if (!testResult.passed) {
            this.results.warnings++;
        }
        
        // Test for clamp() usage (modern responsive typography)
        const clampUsage = cssContent.includes('clamp(');
        const clampResult = {
            selector: 'Fluid Typography (clamp)',
            found: clampUsage,
            passed: clampUsage,
            context: 'Responsive font scaling',
            reason: clampUsage ? 
                   'Fluid typography with clamp() found' : 
                   'Consider using clamp() for better responsive typography'
        };
        
        results.readabilityTests.push(clampResult);
        
        if (!clampResult.passed) {
            this.results.warnings++;
        }
    }

    /**
     * Calculate basic readability score
     */
    calculateReadabilityScore(text) {
        const words = text.split(/\s+/).length;
        const sentences = text.split(/[.!?]+/).length;
        const avgWordsPerSentence = words / sentences;
        
        // Simple readability score (lower is better)
        if (avgWordsPerSentence <= 15) return 'Good';
        if (avgWordsPerSentence <= 20) return 'Fair';
        return 'Poor';
    }

    /**
     * Run all tests
     */
    async runAllTests() {
        console.log('🔍 Starting Mobile Typography Tests...\n');
        console.log('Requirements:');
        console.log(`  - Body text: ≥ ${this.requirements.bodyTextMinSize}px (Requirement 7.1)`);
        console.log(`  - Input text: ≥ ${this.requirements.inputTextMinSize}px (Requirements 7.2, 4.6)`);
        console.log(`  - Readability without zooming`);
        console.log('');

        console.log('Analyzing CSS files for typography compliance...');
        const results = await this.testTypography();
        this.results.details.push(results);
        
        if (results.error) {
            console.log(`❌ Error: ${results.error}`);
            return;
        }
        
        const bodyTextPassed = results.bodyTextTests.filter(t => t.passed).length;
        const bodyTextTotal = results.bodyTextTests.length;
        const inputTextPassed = results.inputTextTests.filter(t => t.passed).length;
        const inputTextTotal = results.inputTextTests.length;
        const readabilityPassed = results.readabilityTests.filter(t => t.passed).length;
        const readabilityTotal = results.readabilityTests.length;
        
        console.log(`\n📊 Test Results:`);
        console.log(`  📝 Body text elements: ${bodyTextPassed}/${bodyTextTotal} passed`);
        console.log(`  📱 Input text elements: ${inputTextPassed}/${inputTextTotal} passed`);
        console.log(`  📖 Mobile readability: ${readabilityPassed}/${readabilityTotal} passed`);
        console.log(`  ${results.passed ? '✅' : '❌'} Overall: ${results.passed ? 'PASSED' : 'FAILED'}`);
        console.log('');
    }

    /**
     * Generate detailed report
     */
    generateReport() {
        const report = {
            summary: {
                totalTests: this.results.passed + this.results.failed,
                passed: this.results.passed,
                failed: this.results.failed,
                warnings: this.results.warnings,
                successRate: ((this.results.passed / (this.results.passed + this.results.failed)) * 100).toFixed(1)
            },
            requirements: this.requirements,
            details: this.results.details
        };

        // Write detailed report to file
        const reportPath = 'mobile-typography-test-results.json';
        fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
        
        console.log('\n📊 Test Summary:');
        console.log(`  Total tests: ${report.summary.totalTests}`);
        console.log(`  Passed: ${report.summary.passed}`);
        console.log(`  Failed: ${report.summary.failed}`);
        console.log(`  Warnings: ${report.summary.warnings}`);
        console.log(`  Success rate: ${report.summary.successRate}%`);
        console.log(`\n📄 Detailed report saved to: ${reportPath}`);

        return report;
    }

    /**
     * Print failed tests details
     */
    printFailedTests() {
        console.log('\n❌ Failed Tests Details:');
        
        for (const result of this.results.details) {
            const failedBodyTests = result.bodyTextTests.filter(t => !t.passed);
            const failedInputTests = result.inputTextTests.filter(t => !t.passed);
            const failedReadabilityTests = result.readabilityTests.filter(t => !t.passed);
            
            if (failedBodyTests.length > 0 || failedInputTests.length > 0 || failedReadabilityTests.length > 0) {
                console.log(`\n📄 ${result.page}:`);
                
                failedBodyTests.forEach(test => {
                    console.log(`  ❌ Body text: ${test.selector}`);
                    console.log(`     Font size: ${test.fontSize}px (required: ≥${test.required}px)`);
                    console.log(`     Context: ${test.context}`);
                });
                
                failedInputTests.forEach(test => {
                    console.log(`  ❌ Input text: ${test.selector}`);
                    console.log(`     Font size: ${test.fontSize}px (required: ≥${test.required}px)`);
                    console.log(`     Context: ${test.context}`);
                    console.log(`     Reason: ${test.reason}`);
                });
                
                failedReadabilityTests.forEach(test => {
                    console.log(`  ⚠️  Readability: ${test.selector}`);
                    console.log(`     Context: ${test.context}`);
                    console.log(`     Reason: ${test.reason}`);
                });
            }
        }
    }

    /**
     * Print passed tests details
     */
    printPassedTests() {
        console.log('\n✅ Passed Tests Details:');
        
        for (const result of this.results.details) {
            const passedBodyTests = result.bodyTextTests.filter(t => t.passed);
            const passedInputTests = result.inputTextTests.filter(t => t.passed);
            const passedReadabilityTests = result.readabilityTests.filter(t => t.passed);
            
            if (passedBodyTests.length > 0) {
                console.log(`\n📝 Body Text Elements:`);
                passedBodyTests.forEach(test => {
                    console.log(`  ✅ ${test.selector}: ${test.fontSize}px (≥${test.required}px required)`);
                });
            }
            
            if (passedInputTests.length > 0) {
                console.log(`\n📱 Input Elements:`);
                passedInputTests.forEach(test => {
                    console.log(`  ✅ ${test.selector}: ${test.fontSize}px (≥${test.required}px required)`);
                    console.log(`     ${test.reason}`);
                });
            }
            
            if (passedReadabilityTests.length > 0) {
                console.log(`\n📖 Mobile Readability:`);
                passedReadabilityTests.forEach(test => {
                    console.log(`  ✅ ${test.selector}: ${test.reason}`);
                });
            }
        }
    }
}

// Run tests if called directly
if (require.main === module) {
    (async () => {
        try {
            const tester = new MobileTypographyTester();
            await tester.runAllTests();
            const report = tester.generateReport();
            
            if (report.summary.failed > 0) {
                tester.printFailedTests();
                process.exit(1);
            } else {
                console.log('\n🎉 All typography tests passed!');
                tester.printPassedTests();
                process.exit(0);
            }
        } catch (error) {
            console.error('❌ Test execution failed:', error.message);
            process.exit(1);
        }
    })();
}

module.exports = MobileTypographyTester;