/**
 * Automated Accessibility Scanner
 * Comprehensive WCAG compliance checker
 * Requirements: 12.2, 12.4 - ARIA attributes and heading hierarchy
 */

class AccessibilityScanner {
    constructor() {
        this.results = [];
        this.errors = [];
        this.warnings = [];
        this.passes = [];
        this.currentTest = '';
    }

    async runAllScans() {
        console.log('♿ Starting Automated Accessibility Scan...\n');
        
        // Core accessibility tests
        this.scanHeadingHierarchy();
        this.scanAriaAttributes();
        this.scanFormLabels();
        this.scanImageAltText();
        this.scanKeyboardAccessibility();
        this.scanFocusManagement();
        this.scanSemanticHTML();
        this.scanColorContrast();
        this.scanLanguageAttributes();
        this.scanLandmarks();
        this.scanTables();
        this.scanLists();
        
        // Generate comprehensive report
        this.generateReport();
        
        return {
            score: this.calculateScore(),
            errors: this.errors,
            warnings: this.warnings,
            passes: this.passes,
            results: this.results
        };
    }

    scanHeadingHierarchy() {
        this.currentTest = 'Heading Hierarchy';
        console.log(`🔍 Scanning: ${this.currentTest}`);
        
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        const headingLevels = Array.from(headings).map(h => parseInt(h.tagName.charAt(1)));
        
        // Check for h1
        const h1Count = document.querySelectorAll('h1').length;
        if (h1Count === 0) {
            this.addError('No h1 heading found - every page should have exactly one h1');
        } else if (h1Count > 1) {
            this.addError(`Multiple h1 headings found (${h1Count}) - should have exactly one per page`);
        } else {
            this.addPass('Exactly one h1 heading found');
        }
        
        // Check for skipped levels
        let previousLevel = 0;
        let skippedLevels = [];
        
        headingLevels.forEach((level, index) => {
            if (index === 0) {
                if (level !== 1) {
                    this.addError(`First heading is h${level}, should be h1`);
                }
            } else {
                const levelJump = level - previousLevel;
                if (levelJump > 1) {
                    skippedLevels.push(`h${previousLevel} to h${level}`);
                }
            }
            previousLevel = level;
        });
        
        if (skippedLevels.length === 0) {
            this.addPass('No skipped heading levels detected');
        } else {
            this.addError(`Skipped heading levels: ${skippedLevels.join(', ')}`);
        }
        
        // Check heading content
        const emptyHeadings = Array.from(headings).filter(h => !h.textContent.trim());
        if (emptyHeadings.length > 0) {
            this.addError(`${emptyHeadings.length} empty headings found`);
        } else {
            this.addPass('All headings have content');
        }
        
        console.log(`Found ${headings.length} headings (h1: ${h1Count})`);
    }

    scanAriaAttributes() {
        this.currentTest = 'ARIA Attributes';
        console.log(`🔍 Scanning: ${this.currentTest}`);
        
        // Check for proper ARIA usage
        const elementsWithAria = document.querySelectorAll('[aria-label], [aria-labelledby], [aria-describedby], [role]');
        const interactiveElements = document.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        
        // Check dropdown toggles
        const dropdownToggles = document.querySelectorAll('.dropdown .nav-link, [aria-haspopup]');
        let dropdownIssues = 0;
        
        dropdownToggles.forEach(toggle => {
            if (!toggle.getAttribute('aria-haspopup')) {
                dropdownIssues++;
            }
            if (!toggle.getAttribute('aria-expanded')) {
                dropdownIssues++;
            }
        });
        
        if (dropdownIssues === 0 && dropdownToggles.length > 0) {
            this.addPass(`${dropdownToggles.length} dropdown toggles properly configured`);
        } else if (dropdownIssues > 0) {
            this.addError(`${dropdownIssues} ARIA issues in dropdown toggles`);
        }
        
        // Check navigation current page
        const navLinks = document.querySelectorAll('.nav-link');
        const hasCurrentPage = Array.from(navLinks).some(link => 
            link.getAttribute('aria-current') === 'page'
        );
        
        if (hasCurrentPage) {
            this.addPass('Current page properly marked with aria-current');
        } else {
            this.addWarning('No navigation item marked as current page');
        }
        
        // Check button labels
        const buttons = document.querySelectorAll('button');
        let unlabeledButtons = 0;
        
        buttons.forEach(button => {
            const hasLabel = button.textContent.trim() ||
                            button.getAttribute('aria-label') ||
                            button.getAttribute('aria-labelledby') ||
                            button.querySelector('img[alt]');
            
            if (!hasLabel) {
                unlabeledButtons++;
            }
        });
        
        if (unlabeledButtons === 0) {
            this.addPass('All buttons have accessible labels');
        } else {
            this.addError(`${unlabeledButtons} buttons lack accessible labels`);
        }
        
        // Check for invalid ARIA
        const invalidAria = this.findInvalidAriaAttributes();
        if (invalidAria.length === 0) {
            this.addPass('No invalid ARIA attributes found');
        } else {
            this.addError(`${invalidAria.length} invalid ARIA attributes found`);
        }
        
        console.log(`Found ${elementsWithAria.length} elements with ARIA attributes`);
    }

    findInvalidAriaAttributes() {
        const validAriaAttributes = [
            'aria-label', 'aria-labelledby', 'aria-describedby', 'aria-expanded',
            'aria-haspopup', 'aria-current', 'aria-hidden', 'aria-live',
            'aria-atomic', 'aria-relevant', 'aria-busy', 'aria-controls',
            'aria-owns', 'aria-flowto', 'aria-activedescendant', 'aria-level',
            'aria-posinset', 'aria-setsize', 'aria-orientation', 'aria-sort',
            'aria-readonly', 'aria-required', 'aria-invalid', 'aria-autocomplete',
            'aria-multiline', 'aria-multiselectable', 'aria-pressed', 'aria-checked',
            'aria-selected', 'aria-disabled', 'aria-valuemin', 'aria-valuemax',
            'aria-valuenow', 'aria-valuetext'
        ];
        
        const invalidAttributes = [];
        const allElements = document.querySelectorAll('*');
        
        allElements.forEach(element => {
            Array.from(element.attributes).forEach(attr => {
                if (attr.name.startsWith('aria-') && !validAriaAttributes.includes(attr.name)) {
                    invalidAttributes.push({
                        element: element.tagName.toLowerCase(),
                        attribute: attr.name,
                        value: attr.value
                    });
                }
            });
        });
        
        return invalidAttributes;
    }

    scanFormLabels() {
        this.currentTest = 'Form Labels';
        console.log(`🔍 Scanning: ${this.currentTest}`);
        
        const formControls = document.querySelectorAll('input, textarea, select');
        let unlabeledControls = 0;
        let properlyLabeled = 0;
        
        formControls.forEach(control => {
            const hasLabel = this.hasAccessibleLabel(control);
            
            if (hasLabel) {
                properlyLabeled++;
            } else {
                unlabeledControls++;
            }
        });
        
        if (formControls.length === 0) {
            this.addPass('No form controls found on this page');
        } else if (unlabeledControls === 0) {
            this.addPass(`All ${formControls.length} form controls have accessible labels`);
        } else {
            this.addError(`${unlabeledControls} form controls lack accessible labels`);
        }
        
        // Check for fieldsets in complex forms
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            const radioGroups = form.querySelectorAll('input[type="radio"]');
            const checkboxGroups = form.querySelectorAll('input[type="checkbox"]');
            
            if (radioGroups.length > 1 || checkboxGroups.length > 1) {
                const fieldsets = form.querySelectorAll('fieldset');
                if (fieldsets.length === 0) {
                    this.addWarning('Complex form should use fieldsets for grouping');
                }
            }
        });
        
        console.log(`Found ${formControls.length} form controls`);
    }

    hasAccessibleLabel(element) {
        // Check for various labeling methods
        return element.getAttribute('aria-label') ||
               element.getAttribute('aria-labelledby') ||
               element.getAttribute('placeholder') ||
               document.querySelector(`label[for="${element.id}"]`) ||
               element.closest('label');
    }

    scanImageAltText() {
        this.currentTest = 'Image Alt Text';
        console.log(`🔍 Scanning: ${this.currentTest}`);
        
        const images = document.querySelectorAll('img');
        let missingAlt = 0;
        let emptyAlt = 0;
        let goodAlt = 0;
        let decorativeImages = 0;
        
        images.forEach(img => {
            const alt = img.getAttribute('alt');
            
            if (alt === null) {
                missingAlt++;
            } else if (alt === '') {
                decorativeImages++;
            } else if (alt.trim().length === 0) {
                emptyAlt++;
            } else {
                goodAlt++;
                
                // Check for poor alt text
                const poorAltPatterns = [
                    /^image of/i,
                    /^picture of/i,
                    /^photo of/i,
                    /^graphic of/i,
                    /\.jpg$/i,
                    /\.png$/i,
                    /\.gif$/i
                ];
                
                if (poorAltPatterns.some(pattern => pattern.test(alt))) {
                    this.addWarning(`Poor alt text detected: "${alt}"`);
                }
            }
        });
        
        if (images.length === 0) {
            this.addPass('No images found on this page');
        } else {
            if (missingAlt === 0) {
                this.addPass('All images have alt attributes');
            } else {
                this.addError(`${missingAlt} images missing alt attributes`);
            }
            
            if (emptyAlt > 0) {
                this.addWarning(`${emptyAlt} images have empty alt text (should be intentionally empty for decorative images)`);
            }
        }
        
        console.log(`Found ${images.length} images (${goodAlt} with alt text, ${decorativeImages} decorative)`);
    }

    scanKeyboardAccessibility() {
        this.currentTest = 'Keyboard Accessibility';
        console.log(`🔍 Scanning: ${this.currentTest}`);
        
        // Check for focusable elements
        const focusableElements = document.querySelectorAll(`
            a[href], button, input, select, textarea, 
            [tabindex]:not([tabindex="-1"]), 
            [role="button"], [role="link"]
        `);
        
        let keyboardIssues = 0;
        
        // Check for positive tabindex values
        const positiveTabindex = document.querySelectorAll('[tabindex]:not([tabindex="0"]):not([tabindex="-1"])');
        if (positiveTabindex.length > 0) {
            this.addWarning(`${positiveTabindex.length} elements use positive tabindex (may disrupt tab order)`);
            keyboardIssues++;
        }
        
        // Check for custom interactive elements without proper roles
        const customInteractive = document.querySelectorAll('[onclick], [onkeydown], [onkeyup]');
        let missingRoles = 0;
        
        customInteractive.forEach(element => {
            if (!element.matches('button, a, input, select, textarea') && 
                !element.getAttribute('role') && 
                !element.getAttribute('tabindex')) {
                missingRoles++;
            }
        });
        
        if (missingRoles > 0) {
            this.addError(`${missingRoles} custom interactive elements lack proper roles or tabindex`);
            keyboardIssues++;
        }
        
        // Check for skip links
        const skipLinks = document.querySelectorAll('.skip-link, a[href="#main"], a[href="#content"]');
        if (skipLinks.length === 0) {
            this.addError('No skip link found for keyboard navigation');
            keyboardIssues++;
        } else {
            this.addPass('Skip link found for keyboard navigation');
        }
        
        if (keyboardIssues === 0) {
            this.addPass('No major keyboard accessibility issues detected');
        }
        
        console.log(`Found ${focusableElements.length} focusable elements`);
    }

    scanFocusManagement() {
        this.currentTest = 'Focus Management';
        console.log(`🔍 Scanning: ${this.currentTest}`);
        
        // Check for focus indicators in CSS
        let hasFocusStyles = false;
        
        try {
            Array.from(document.styleSheets).forEach(sheet => {
                try {
                    Array.from(sheet.cssRules).forEach(rule => {
                        if (rule.selectorText && 
                            (rule.selectorText.includes(':focus') || 
                             rule.selectorText.includes('focus-visible'))) {
                            hasFocusStyles = true;
                        }
                    });
                } catch (e) {
                    // Cross-origin stylesheet
                }
            });
        } catch (e) {
            console.warn('Could not analyze stylesheets for focus styles');
        }
        
        if (hasFocusStyles) {
            this.addPass('Custom focus styles detected');
        } else {
            this.addWarning('No custom focus styles detected - relying on browser defaults');
        }
        
        // Check for hidden focusable elements
        const hiddenFocusable = this.findHiddenFocusableElements();
        if (hiddenFocusable.length === 0) {
            this.addPass('No hidden focusable elements found');
        } else {
            this.addError(`${hiddenFocusable.length} hidden elements are still focusable`);
        }
    }

    findHiddenFocusableElements() {
        const focusableElements = document.querySelectorAll(`
            a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])
        `);
        
        return Array.from(focusableElements).filter(element => {
            const styles = getComputedStyle(element);
            const rect = element.getBoundingClientRect();
            
            const isHidden = styles.display === 'none' || 
                           styles.visibility === 'hidden' || 
                           styles.opacity === '0' ||
                           rect.width === 0 || 
                           rect.height === 0;
            
            const isStillFocusable = element.tabIndex !== -1 && 
                                   !element.disabled &&
                                   !element.hasAttribute('inert');
            
            return isHidden && isStillFocusable;
        });
    }

    scanSemanticHTML() {
        this.currentTest = 'Semantic HTML';
        console.log(`🔍 Scanning: ${this.currentTest}`);
        
        // Check for semantic landmarks
        const landmarks = {
            header: document.querySelectorAll('header, [role="banner"]'),
            nav: document.querySelectorAll('nav, [role="navigation"]'),
            main: document.querySelectorAll('main, [role="main"]'),
            footer: document.querySelectorAll('footer, [role="contentinfo"]'),
            aside: document.querySelectorAll('aside, [role="complementary"]'),
            section: document.querySelectorAll('section')
        };
        
        // Check for main landmark
        if (landmarks.main.length === 0) {
            this.addError('No main landmark found - use <main> or role="main"');
        } else if (landmarks.main.length > 1) {
            this.addWarning('Multiple main landmarks found - should have only one');
        } else {
            this.addPass('Single main landmark found');
        }
        
        // Check for navigation
        if (landmarks.nav.length === 0) {
            this.addWarning('No navigation landmark found');
        } else {
            this.addPass(`${landmarks.nav.length} navigation landmark(s) found`);
        }
        
        // Check for proper list usage
        const lists = document.querySelectorAll('ul, ol, dl');
        let improperLists = 0;
        
        lists.forEach(list => {
            const validChildren = list.querySelectorAll('li, dt, dd');
            const allChildren = list.children;
            
            if (validChildren.length !== allChildren.length) {
                improperLists++;
            }
        });
        
        if (improperLists === 0 && lists.length > 0) {
            this.addPass('All lists use proper structure');
        } else if (improperLists > 0) {
            this.addError(`${improperLists} lists have improper structure`);
        }
        
        console.log(`Found semantic landmarks: ${Object.values(landmarks).reduce((sum, els) => sum + els.length, 0)}`);
    }

    scanColorContrast() {
        this.currentTest = 'Color Contrast';
        console.log(`🔍 Scanning: ${this.currentTest}`);
        
        // This is a simplified check - full contrast testing is done separately
        const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, button, label');
        let contrastIssues = 0;
        
        // Check for common contrast issues
        textElements.forEach(element => {
            const styles = getComputedStyle(element);
            const color = styles.color;
            const backgroundColor = styles.backgroundColor;
            
            // Simple check for obviously problematic combinations
            if (color === backgroundColor) {
                contrastIssues++;
            }
            
            // Check for very light text on light backgrounds
            if (color.includes('rgb(255') && backgroundColor.includes('rgb(255')) {
                contrastIssues++;
            }
        });
        
        if (contrastIssues === 0) {
            this.addPass('No obvious color contrast issues detected');
        } else {
            this.addWarning(`${contrastIssues} potential color contrast issues detected`);
        }
        
        // Note about comprehensive testing
        this.addPass('Run separate color contrast test for comprehensive analysis');
    }

    scanLanguageAttributes() {
        this.currentTest = 'Language Attributes';
        console.log(`🔍 Scanning: ${this.currentTest}`);
        
        const htmlElement = document.documentElement;
        const lang = htmlElement.getAttribute('lang');
        
        if (!lang) {
            this.addError('HTML element missing lang attribute');
        } else if (lang.length < 2) {
            this.addError(`Invalid lang attribute: "${lang}"`);
        } else {
            this.addPass(`Page language set to: ${lang}`);
        }
        
        // Check for language changes within content
        const langElements = document.querySelectorAll('[lang]');
        if (langElements.length > 1) {
            this.addPass(`${langElements.length - 1} language changes properly marked`);
        }
    }

    scanLandmarks() {
        this.currentTest = 'ARIA Landmarks';
        console.log(`🔍 Scanning: ${this.currentTest}`);
        
        const landmarkRoles = [
            'banner', 'navigation', 'main', 'complementary', 
            'contentinfo', 'search', 'form', 'region'
        ];
        
        const landmarks = document.querySelectorAll(landmarkRoles.map(role => `[role="${role}"]`).join(', '));
        const semanticLandmarks = document.querySelectorAll('header, nav, main, aside, footer, section');
        
        const totalLandmarks = landmarks.length + semanticLandmarks.length;
        
        if (totalLandmarks === 0) {
            this.addWarning('No ARIA landmarks found - consider adding for better navigation');
        } else {
            this.addPass(`${totalLandmarks} landmarks found for screen reader navigation`);
        }
    }

    scanTables() {
        this.currentTest = 'Table Accessibility';
        console.log(`🔍 Scanning: ${this.currentTest}`);
        
        const tables = document.querySelectorAll('table');
        let tableIssues = 0;
        
        tables.forEach(table => {
            // Check for table headers
            const headers = table.querySelectorAll('th');
            if (headers.length === 0) {
                tableIssues++;
            }
            
            // Check for caption
            const caption = table.querySelector('caption');
            if (!caption && !table.getAttribute('aria-label') && !table.getAttribute('aria-labelledby')) {
                tableIssues++;
            }
            
            // Check for scope attributes on headers
            const headersWithoutScope = Array.from(headers).filter(th => !th.getAttribute('scope'));
            if (headersWithoutScope.length > 0 && headers.length > 0) {
                tableIssues++;
            }
        });
        
        if (tables.length === 0) {
            this.addPass('No tables found on this page');
        } else if (tableIssues === 0) {
            this.addPass(`All ${tables.length} tables properly structured`);
        } else {
            this.addError(`${tableIssues} table accessibility issues found`);
        }
    }

    scanLists() {
        this.currentTest = 'List Structure';
        console.log(`🔍 Scanning: ${this.currentTest}`);
        
        const lists = document.querySelectorAll('ul, ol, dl');
        let listIssues = 0;
        
        lists.forEach(list => {
            const listItems = list.children;
            let hasInvalidChildren = false;
            
            Array.from(listItems).forEach(child => {
                if (list.tagName === 'UL' || list.tagName === 'OL') {
                    if (child.tagName !== 'LI') {
                        hasInvalidChildren = true;
                    }
                } else if (list.tagName === 'DL') {
                    if (child.tagName !== 'DT' && child.tagName !== 'DD') {
                        hasInvalidChildren = true;
                    }
                }
            });
            
            if (hasInvalidChildren) {
                listIssues++;
            }
        });
        
        if (lists.length === 0) {
            this.addPass('No lists found on this page');
        } else if (listIssues === 0) {
            this.addPass(`All ${lists.length} lists properly structured`);
        } else {
            this.addError(`${listIssues} lists have structural issues`);
        }
    }

    addError(message) {
        const result = {
            type: 'error',
            test: this.currentTest,
            message: message,
            timestamp: new Date().toISOString()
        };
        
        this.errors.push(result);
        this.results.push(result);
        console.log(`❌ ${message}`);
    }

    addWarning(message) {
        const result = {
            type: 'warning',
            test: this.currentTest,
            message: message,
            timestamp: new Date().toISOString()
        };
        
        this.warnings.push(result);
        this.results.push(result);
        console.log(`⚠️ ${message}`);
    }

    addPass(message) {
        const result = {
            type: 'pass',
            test: this.currentTest,
            message: message,
            timestamp: new Date().toISOString()
        };
        
        this.passes.push(result);
        this.results.push(result);
        console.log(`✅ ${message}`);
    }

    calculateScore() {
        const total = this.results.length;
        const passed = this.passes.length;
        const warnings = this.warnings.length;
        
        // Weight: passes = 1, warnings = 0.5, errors = 0
        const weightedScore = (passed + warnings * 0.5) / total * 100;
        return Math.round(weightedScore * 10) / 10;
    }

    generateReport() {
        console.log('\n♿ ACCESSIBILITY SCAN REPORT');
        console.log('============================');
        
        const score = this.calculateScore();
        const total = this.results.length;
        
        console.log(`\nSummary:`);
        console.log(`✅ Passed: ${this.passes.length}/${total}`);
        console.log(`⚠️ Warnings: ${this.warnings.length}/${total}`);
        console.log(`❌ Errors: ${this.errors.length}/${total}`);
        console.log(`\n🎯 Accessibility Score: ${score}%`);
        
        if (score >= 95) {
            console.log('🏆 Excellent accessibility compliance!');
        } else if (score >= 85) {
            console.log('👍 Good accessibility with minor issues');
        } else if (score >= 70) {
            console.log('⚠️ Moderate accessibility issues - needs attention');
        } else {
            console.log('❌ Poor accessibility - requires significant work');
        }
        
        // Critical errors
        if (this.errors.length > 0) {
            console.log('\n❌ CRITICAL ERRORS (Must Fix):');
            console.log('==============================');
            this.errors.forEach(error => {
                console.log(`• ${error.test}: ${error.message}`);
            });
        }
        
        // Warnings
        if (this.warnings.length > 0) {
            console.log('\n⚠️ WARNINGS (Should Fix):');
            console.log('=========================');
            this.warnings.forEach(warning => {
                console.log(`• ${warning.test}: ${warning.message}`);
            });
        }
        
        // Recommendations
        this.generateRecommendations();
        
        return {
            score,
            total,
            passed: this.passes.length,
            warnings: this.warnings.length,
            errors: this.errors.length
        };
    }

    generateRecommendations() {
        console.log('\n💡 ACCESSIBILITY RECOMMENDATIONS');
        console.log('=================================');
        
        if (this.errors.length === 0 && this.warnings.length === 0) {
            console.log('🎉 No recommendations - excellent accessibility!');
            return;
        }
        
        const recommendations = new Set();
        
        // Analyze errors and warnings to generate specific recommendations
        this.errors.forEach(error => {
            if (error.test === 'Heading Hierarchy') {
                recommendations.add('Fix heading hierarchy - ensure proper h1-h6 structure');
            }
            if (error.test === 'ARIA Attributes') {
                recommendations.add('Add proper ARIA attributes to interactive elements');
            }
            if (error.test === 'Form Labels') {
                recommendations.add('Ensure all form controls have accessible labels');
            }
            if (error.test === 'Image Alt Text') {
                recommendations.add('Add alt text to all images');
            }
            if (error.test === 'Keyboard Accessibility') {
                recommendations.add('Improve keyboard navigation support');
            }
        });
        
        this.warnings.forEach(warning => {
            if (warning.test === 'Focus Management') {
                recommendations.add('Implement custom focus indicators');
            }
            if (warning.test === 'Semantic HTML') {
                recommendations.add('Use more semantic HTML elements and landmarks');
            }
            if (warning.test === 'Color Contrast') {
                recommendations.add('Review color contrast ratios');
            }
        });
        
        // General recommendations
        recommendations.add('Test with screen readers (NVDA, JAWS, VoiceOver)');
        recommendations.add('Test keyboard navigation thoroughly');
        recommendations.add('Validate with automated tools like axe-core');
        recommendations.add('Consider user testing with people with disabilities');
        
        Array.from(recommendations).forEach((rec, index) => {
            console.log(`${index + 1}. ${rec}`);
        });
    }
}

// Auto-run if script is loaded directly
if (typeof window !== 'undefined') {
    window.AccessibilityScanner = AccessibilityScanner;
    
    window.runAccessibilityScans = function() {
        const scanner = new AccessibilityScanner();
        return scanner.runAllScans();
    };
    
    console.log('♿ Accessibility Scanner loaded!');
    console.log('Run scans with: runAccessibilityScans()');
}

// Export for Node.js if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AccessibilityScanner;
}