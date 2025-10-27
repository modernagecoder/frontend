/**
 * Color Contrast Testing Tool
 * Tests WCAG AA compliance for all text elements
 * Requirements: 7.5 - Text contrast meets 4.5:1 ratio
 */

class ColorContrastTester {
    constructor() {
        this.results = [];
        this.wcagAAThreshold = 4.5;
        this.wcagAAAThreshold = 7.0;
        this.largeTextThreshold = 3.0; // For text >= 18pt or bold >= 14pt
    }

    async runAllTests() {
        console.log('🎨 Starting Color Contrast Tests...\n');
        
        // Test all text elements on the page
        await this.testAllTextElements();
        
        // Test specific UI components
        await this.testUIComponents();
        
        // Generate report
        this.generateReport();
        
        return this.results;
    }

    async testAllTextElements() {
        console.log('🔍 Testing all text elements...');
        
        // Get all text-containing elements
        const textElements = this.getAllTextElements();
        
        console.log(`Found ${textElements.length} text elements to test`);
        
        for (const element of textElements) {
            await this.testElementContrast(element);
        }
    }

    getAllTextElements() {
        const textSelectors = [
            'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'span', 'div', 'a', 'button', 'label',
            'li', 'td', 'th', 'caption',
            'input', 'textarea', 'select',
            '.nav-link', '.card-title', '.card-description',
            '.section-title', '.section-subtitle',
            '.feature-item', '.course-card'
        ];
        
        const elements = [];
        
        textSelectors.forEach(selector => {
            const found = document.querySelectorAll(selector);
            found.forEach(el => {
                // Only include elements with actual text content
                if (el.textContent && el.textContent.trim().length > 0) {
                    // Skip if element is hidden
                    const styles = getComputedStyle(el);
                    if (styles.display !== 'none' && 
                        styles.visibility !== 'hidden' && 
                        styles.opacity !== '0') {
                        elements.push(el);
                    }
                }
            });
        });
        
        // Remove duplicates
        return [...new Set(elements)];
    }

    async testElementContrast(element) {
        try {
            const styles = getComputedStyle(element);
            const textColor = styles.color;
            const backgroundColor = this.getEffectiveBackgroundColor(element);
            
            if (!textColor || !backgroundColor) {
                return;
            }
            
            const contrast = this.calculateContrast(textColor, backgroundColor);
            const fontSize = parseFloat(styles.fontSize);
            const fontWeight = styles.fontWeight;
            const isLargeText = this.isLargeText(fontSize, fontWeight);
            
            const threshold = isLargeText ? this.largeTextThreshold : this.wcagAAThreshold;
            const passes = contrast >= threshold;
            const passesAAA = contrast >= this.wcagAAAThreshold;
            
            const result = {
                element: this.getElementDescription(element),
                textColor: textColor,
                backgroundColor: backgroundColor,
                contrast: contrast,
                fontSize: fontSize,
                fontWeight: fontWeight,
                isLargeText: isLargeText,
                threshold: threshold,
                passes: passes,
                passesAAA: passesAAA,
                wcagLevel: passesAAA ? 'AAA' : passes ? 'AA' : 'Fail',
                text: element.textContent.trim().substring(0, 50) + (element.textContent.length > 50 ? '...' : '')
            };
            
            this.results.push(result);
            
            // Log result
            const status = passes ? '✅' : '❌';
            const level = passesAAA ? 'AAA' : passes ? 'AA' : 'FAIL';
            console.log(`${status} ${result.element}: ${contrast.toFixed(2)}:1 (${level})`);
            
        } catch (error) {
            console.warn(`Error testing element:`, element, error);
        }
    }

    getEffectiveBackgroundColor(element) {
        // Walk up the DOM tree to find the effective background color
        let currentElement = element;
        
        while (currentElement && currentElement !== document.body) {
            const styles = getComputedStyle(currentElement);
            const bgColor = styles.backgroundColor;
            
            if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
                return bgColor;
            }
            
            currentElement = currentElement.parentElement;
        }
        
        // Default to body background or black
        const bodyStyles = getComputedStyle(document.body);
        return bodyStyles.backgroundColor || 'rgb(0, 0, 0)';
    }

    calculateContrast(color1, color2) {
        const rgb1 = this.parseColor(color1);
        const rgb2 = this.parseColor(color2);
        
        if (!rgb1 || !rgb2) {
            return 0;
        }
        
        const l1 = this.getLuminance(rgb1);
        const l2 = this.getLuminance(rgb2);
        
        const lighter = Math.max(l1, l2);
        const darker = Math.min(l1, l2);
        
        return (lighter + 0.05) / (darker + 0.05);
    }

    parseColor(colorString) {
        // Handle rgb() and rgba() formats
        const rgbMatch = colorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
        if (rgbMatch) {
            return {
                r: parseInt(rgbMatch[1]),
                g: parseInt(rgbMatch[2]),
                b: parseInt(rgbMatch[3])
            };
        }
        
        // Handle hex colors
        const hexMatch = colorString.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
        if (hexMatch) {
            return {
                r: parseInt(hexMatch[1], 16),
                g: parseInt(hexMatch[2], 16),
                b: parseInt(hexMatch[3], 16)
            };
        }
        
        // Handle named colors (basic set)
        const namedColors = {
            'black': { r: 0, g: 0, b: 0 },
            'white': { r: 255, g: 255, b: 255 },
            'red': { r: 255, g: 0, b: 0 },
            'green': { r: 0, g: 128, b: 0 },
            'blue': { r: 0, g: 0, b: 255 }
        };
        
        return namedColors[colorString.toLowerCase()] || null;
    }

    getLuminance(rgb) {
        // Convert RGB to relative luminance
        const rsRGB = rgb.r / 255;
        const gsRGB = rgb.g / 255;
        const bsRGB = rgb.b / 255;
        
        const r = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
        const g = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
        const b = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);
        
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }

    isLargeText(fontSize, fontWeight) {
        // Large text is 18pt+ or bold 14pt+
        // Convert px to pt (assuming 96 DPI: 1pt = 1.33px)
        const fontSizePt = fontSize * 0.75;
        
        const isBold = fontWeight === 'bold' || 
                      fontWeight === 'bolder' || 
                      parseInt(fontWeight) >= 700;
        
        return fontSizePt >= 18 || (isBold && fontSizePt >= 14);
    }

    getElementDescription(element) {
        let description = element.tagName.toLowerCase();
        
        if (element.id) {
            description += `#${element.id}`;
        }
        
        if (element.className) {
            const classes = element.className.split(' ').slice(0, 2).join('.');
            if (classes) {
                description += `.${classes}`;
            }
        }
        
        return description;
    }

    async testUIComponents() {
        console.log('\n🎨 Testing specific UI components...');
        
        // Test navigation
        await this.testNavigation();
        
        // Test buttons
        await this.testButtons();
        
        // Test cards
        await this.testCards();
        
        // Test forms
        await this.testForms();
    }

    async testNavigation() {
        const navElements = document.querySelectorAll('.nav-link, .dropdown-item');
        
        for (const element of navElements) {
            // Test normal state
            await this.testElementContrast(element);
            
            // Test hover state (if possible)
            element.classList.add('hover-test');
            await this.testElementContrast(element);
            element.classList.remove('hover-test');
        }
    }

    async testButtons() {
        const buttons = document.querySelectorAll('button, .btn, .cta-button, .card-button');
        
        for (const button of buttons) {
            await this.testElementContrast(button);
        }
    }

    async testCards() {
        const cards = document.querySelectorAll('.course-card, .feature-item, .demographic-card');
        
        for (const card of cards) {
            // Test card title
            const title = card.querySelector('.card-title, h3, h4');
            if (title) {
                await this.testElementContrast(title);
            }
            
            // Test card description
            const description = card.querySelector('.card-description, p');
            if (description) {
                await this.testElementContrast(description);
            }
        }
    }

    async testForms() {
        const formElements = document.querySelectorAll('input, textarea, select, label');
        
        for (const element of formElements) {
            if (element.textContent || element.value || element.placeholder) {
                await this.testElementContrast(element);
            }
        }
    }

    generateReport() {
        console.log('\n📊 COLOR CONTRAST TEST REPORT');
        console.log('==============================');
        
        const total = this.results.length;
        const passed = this.results.filter(r => r.passes).length;
        const failed = this.results.filter(r => !r.passes).length;
        const aaa = this.results.filter(r => r.passesAAA).length;
        
        console.log(`\nSummary:`);
        console.log(`✅ WCAG AA Compliant: ${passed}/${total} (${(passed/total*100).toFixed(1)}%)`);
        console.log(`🏆 WCAG AAA Compliant: ${aaa}/${total} (${(aaa/total*100).toFixed(1)}%)`);
        console.log(`❌ Failed: ${failed}/${total} (${(failed/total*100).toFixed(1)}%)`);
        
        // Calculate overall score
        const score = (passed / total * 100).toFixed(1);
        console.log(`\n🎯 Overall Contrast Score: ${score}%`);
        
        if (score >= 95) {
            console.log('🏆 Excellent color contrast compliance!');
        } else if (score >= 90) {
            console.log('👍 Good color contrast with minor issues');
        } else if (score >= 75) {
            console.log('⚠️ Moderate contrast issues - needs attention');
        } else {
            console.log('❌ Poor color contrast - requires immediate attention');
        }
        
        // Show failed elements
        const failedElements = this.results.filter(r => !r.passes);
        if (failedElements.length > 0) {
            console.log('\n❌ FAILED ELEMENTS:');
            console.log('===================');
            
            failedElements.forEach(result => {
                console.log(`${result.element}: ${result.contrast.toFixed(2)}:1 (needs ${result.threshold}:1)`);
                console.log(`  Text: "${result.text}"`);
                console.log(`  Colors: ${result.textColor} on ${result.backgroundColor}`);
                console.log('');
            });
        }
        
        // Show lowest contrast ratios
        const sortedResults = [...this.results].sort((a, b) => a.contrast - b.contrast);
        const lowestContrast = sortedResults.slice(0, 5);
        
        if (lowestContrast.length > 0) {
            console.log('\n⚠️ LOWEST CONTRAST RATIOS:');
            console.log('==========================');
            
            lowestContrast.forEach(result => {
                const status = result.passes ? '✅' : '❌';
                console.log(`${status} ${result.element}: ${result.contrast.toFixed(2)}:1`);
            });
        }
        
        // Recommendations
        this.generateRecommendations();
        
        return {
            score: parseFloat(score),
            total,
            passed,
            failed,
            aaa,
            results: this.results,
            failedElements
        };
    }

    generateRecommendations() {
        console.log('\n💡 RECOMMENDATIONS');
        console.log('==================');
        
        const failedElements = this.results.filter(r => !r.passes);
        
        if (failedElements.length === 0) {
            console.log('🎉 No recommendations - excellent color contrast!');
            return;
        }
        
        const recommendations = new Set();
        
        // Analyze common issues
        const lowContrastText = failedElements.filter(r => !r.isLargeText);
        const lowContrastLarge = failedElements.filter(r => r.isLargeText);
        
        if (lowContrastText.length > 0) {
            recommendations.add('Increase contrast for body text to at least 4.5:1');
        }
        
        if (lowContrastLarge.length > 0) {
            recommendations.add('Increase contrast for large text to at least 3.0:1');
        }
        
        // Check for common problem areas
        const navIssues = failedElements.filter(r => r.element.includes('nav'));
        const buttonIssues = failedElements.filter(r => r.element.includes('button'));
        const cardIssues = failedElements.filter(r => r.element.includes('card'));
        
        if (navIssues.length > 0) {
            recommendations.add('Improve navigation text contrast');
        }
        
        if (buttonIssues.length > 0) {
            recommendations.add('Improve button text contrast');
        }
        
        if (cardIssues.length > 0) {
            recommendations.add('Improve card content contrast');
        }
        
        // Specific color suggestions
        const darkBackgrounds = failedElements.filter(r => 
            r.backgroundColor.includes('rgb(0') || 
            r.backgroundColor.includes('#000')
        );
        
        if (darkBackgrounds.length > 0) {
            recommendations.add('Use lighter text colors on dark backgrounds');
        }
        
        Array.from(recommendations).forEach((rec, index) => {
            console.log(`${index + 1}. ${rec}`);
        });
        
        console.log('\n🔧 Quick Fixes:');
        console.log('- Use #FFFFFF (white) text on dark backgrounds');
        console.log('- Use #000000 (black) text on light backgrounds');
        console.log('- Test colors with WebAIM Contrast Checker');
        console.log('- Consider using CSS custom properties for consistent colors');
    }

    // Utility method to test specific color combinations
    testColorCombination(textColor, backgroundColor) {
        const contrast = this.calculateContrast(textColor, backgroundColor);
        const passesAA = contrast >= this.wcagAAThreshold;
        const passesAAA = contrast >= this.wcagAAAThreshold;
        
        return {
            contrast: contrast,
            passesAA: passesAA,
            passesAAA: passesAAA,
            wcagLevel: passesAAA ? 'AAA' : passesAA ? 'AA' : 'Fail'
        };
    }
}

// Auto-run tests if script is loaded directly
if (typeof window !== 'undefined') {
    window.ColorContrastTester = ColorContrastTester;
    
    // Add a global function to run tests
    window.runContrastTests = function() {
        const tester = new ColorContrastTester();
        return tester.runAllTests();
    };
    
    // Add utility function for quick color testing
    window.testColors = function(textColor, backgroundColor) {
        const tester = new ColorContrastTester();
        return tester.testColorCombination(textColor, backgroundColor);
    };
    
    console.log('🎨 Color Contrast Tester loaded!');
    console.log('Run tests with: runContrastTests()');
    console.log('Test specific colors with: testColors("#000000", "#FFFFFF")');
}

// Export for Node.js if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ColorContrastTester;
}