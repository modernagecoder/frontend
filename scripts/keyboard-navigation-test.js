/**
 * Keyboard Navigation Test Script
 * Tests keyboard accessibility compliance for all pages
 * Requirements: 12.1 - Keyboard navigation support
 */

class KeyboardNavigationTester {
    constructor() {
        this.results = [];
        this.currentTest = '';
        this.testPages = [
            'index.html',
            'about.html',
            'course.html',
            '404.html'
        ];
    }

    async runAllTests() {
        console.log('🎯 Starting Keyboard Navigation Tests...\n');
        
        // Test current page
        await this.testCurrentPage();
        
        // Generate report
        this.generateReport();
        
        return this.results;
    }

    async testCurrentPage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        console.log(`Testing page: ${currentPage}`);
        
        // Test 1: Skip Link
        this.testSkipLink();
        
        // Test 2: Focusable Elements
        this.testFocusableElements();
        
        // Test 3: Tab Order
        this.testTabOrder();
        
        // Test 4: Focus Indicators
        this.testFocusIndicators();
        
        // Test 5: Keyboard Activation
        this.testKeyboardActivation();
        
        // Test 6: ARIA Attributes
        this.testAriaAttributes();
        
        // Test 7: Hidden Elements
        this.testHiddenElements();
        
        // Test 8: Navigation Menu
        this.testNavigationMenu();
        
        // Test 9: Form Elements
        this.testFormElements();
        
        // Test 10: Interactive Cards
        this.testInteractiveCards();
    }

    testSkipLink() {
        this.currentTest = 'Skip Link';
        console.log(`\n🔍 Testing: ${this.currentTest}`);
        
        const skipLink = document.querySelector('.skip-link, a[href="#main"], a[href="#content"]');
        
        if (skipLink) {
            // Test if skip link is properly positioned
            const styles = getComputedStyle(skipLink);
            const isHidden = styles.position === 'absolute' && 
                           (styles.top.includes('-') || styles.left.includes('-'));
            
            if (isHidden) {
                this.addResult('pass', 'Skip link found and properly hidden until focused');
            } else {
                this.addResult('warning', 'Skip link found but may not be properly hidden');
            }
            
            // Test if skip link has proper target
            const href = skipLink.getAttribute('href');
            const target = document.querySelector(href);
            
            if (target) {
                this.addResult('pass', 'Skip link target exists');
            } else {
                this.addResult('fail', `Skip link target "${href}" not found`);
            }
        } else {
            this.addResult('fail', 'Skip link not found - required for keyboard navigation');
        }
    }

    testFocusableElements() {
        this.currentTest = 'Focusable Elements';
        console.log(`\n🔍 Testing: ${this.currentTest}`);
        
        const focusableSelectors = [
            'a[href]:not([tabindex="-1"])',
            'button:not([disabled]):not([tabindex="-1"])',
            'input:not([disabled]):not([tabindex="-1"])',
            'select:not([disabled]):not([tabindex="-1"])',
            'textarea:not([disabled]):not([tabindex="-1"])',
            '[tabindex]:not([tabindex="-1"])',
            '[role="button"]:not([tabindex="-1"])',
            '[role="link"]:not([tabindex="-1"])'
        ];
        
        const focusableElements = document.querySelectorAll(focusableSelectors.join(', '));
        const visibleFocusable = Array.from(focusableElements).filter(el => {
            const styles = getComputedStyle(el);
            return styles.display !== 'none' && 
                   styles.visibility !== 'hidden' && 
                   styles.opacity !== '0';
        });
        
        console.log(`Found ${visibleFocusable.length} focusable elements`);
        
        if (visibleFocusable.length > 0) {
            this.addResult('pass', `Found ${visibleFocusable.length} focusable elements`);
            
            // Test each element for proper tabindex
            let improperTabindex = 0;
            visibleFocusable.forEach(el => {
                const tabindex = el.getAttribute('tabindex');
                if (tabindex && parseInt(tabindex) > 0) {
                    improperTabindex++;
                }
            });
            
            if (improperTabindex === 0) {
                this.addResult('pass', 'No positive tabindex values found (good practice)');
            } else {
                this.addResult('warning', `${improperTabindex} elements have positive tabindex (may disrupt tab order)`);
            }
        } else {
            this.addResult('fail', 'No focusable elements found');
        }
    }

    testTabOrder() {
        this.currentTest = 'Tab Order';
        console.log(`\n🔍 Testing: ${this.currentTest}`);
        
        const focusableElements = document.querySelectorAll(`
            a[href]:not([tabindex="-1"]),
            button:not([disabled]):not([tabindex="-1"]),
            input:not([disabled]):not([tabindex="-1"]),
            select:not([disabled]):not([tabindex="-1"]),
            textarea:not([disabled]):not([tabindex="-1"]),
            [tabindex]:not([tabindex="-1"])
        `);
        
        const visibleElements = Array.from(focusableElements).filter(el => {
            const rect = el.getBoundingClientRect();
            const styles = getComputedStyle(el);
            return rect.width > 0 && rect.height > 0 && 
                   styles.display !== 'none' && 
                   styles.visibility !== 'hidden';
        });
        
        if (visibleElements.length === 0) {
            this.addResult('warning', 'No visible focusable elements to test tab order');
            return;
        }
        
        // Check if elements follow logical visual order
        let logicalOrder = true;
        let previousTop = -1;
        let previousLeft = -1;
        let orderIssues = 0;
        
        visibleElements.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            
            // Allow some tolerance for elements on the same line
            if (rect.top > previousTop + 10) {
                // New line - reset left position
                previousLeft = -1;
            } else if (rect.top < previousTop - 10) {
                // Element is above previous - potential order issue
                orderIssues++;
            }
            
            if (rect.left < previousLeft - 10 && Math.abs(rect.top - previousTop) < 10) {
                // Element is to the left of previous on same line
                orderIssues++;
            }
            
            previousTop = rect.top;
            previousLeft = rect.left;
        });
        
        if (orderIssues === 0) {
            this.addResult('pass', 'Tab order follows logical visual sequence');
        } else {
            this.addResult('warning', `${orderIssues} potential tab order issues detected`);
        }
        
        console.log(`Analyzed ${visibleElements.length} elements for tab order`);
    }

    testFocusIndicators() {
        this.currentTest = 'Focus Indicators';
        console.log(`\n🔍 Testing: ${this.currentTest}`);
        
        // Check if custom focus styles are defined
        let hasFocusStyles = false;
        let hasVisibleFocus = false;
        
        try {
            // Check stylesheets for focus-related rules
            Array.from(document.styleSheets).forEach(sheet => {
                try {
                    Array.from(sheet.cssRules).forEach(rule => {
                        if (rule.selectorText && 
                            (rule.selectorText.includes(':focus') || 
                             rule.selectorText.includes('focus-visible'))) {
                            hasFocusStyles = true;
                            
                            // Check if focus styles include visible indicators
                            const cssText = rule.cssText.toLowerCase();
                            if (cssText.includes('outline') || 
                                cssText.includes('border') || 
                                cssText.includes('box-shadow') ||
                                cssText.includes('background')) {
                                hasVisibleFocus = true;
                            }
                        }
                    });
                } catch (e) {
                    // Cross-origin stylesheet or other access issue
                }
            });
        } catch (e) {
            console.warn('Could not analyze stylesheets for focus styles');
        }
        
        if (hasVisibleFocus) {
            this.addResult('pass', 'Custom focus indicators detected in CSS');
        } else if (hasFocusStyles) {
            this.addResult('warning', 'Focus styles found but may not be sufficiently visible');
        } else {
            this.addResult('fail', 'No custom focus styles detected - relying on browser defaults');
        }
        
        // Test focus visibility on a sample element
        const testButton = document.querySelector('button, a[href]');
        if (testButton) {
            // Temporarily focus the element to test visibility
            const originalFocus = document.activeElement;
            testButton.focus();
            
            setTimeout(() => {
                const focusedStyles = getComputedStyle(testButton, ':focus-visible');
                const hasOutline = focusedStyles.outline !== 'none' && focusedStyles.outline !== '';
                const hasBoxShadow = focusedStyles.boxShadow !== 'none';
                
                if (hasOutline || hasBoxShadow) {
                    this.addResult('pass', 'Focus indicators are visible on test element');
                } else {
                    this.addResult('warning', 'Focus indicators may not be visible enough');
                }
                
                // Restore original focus
                if (originalFocus && originalFocus.focus) {
                    originalFocus.focus();
                }
            }, 100);
        }
    }

    testKeyboardActivation() {
        this.currentTest = 'Keyboard Activation';
        console.log(`\n🔍 Testing: ${this.currentTest}`);
        
        const buttons = document.querySelectorAll('button:not([disabled])');
        const links = document.querySelectorAll('a[href]');
        const customInteractive = document.querySelectorAll('[role="button"], [role="link"]');
        
        let activationIssues = 0;
        
        // Test buttons
        buttons.forEach(button => {
            if (!this.hasKeyboardHandler(button)) {
                activationIssues++;
            }
        });
        
        // Test custom interactive elements
        customInteractive.forEach(element => {
            if (!this.hasKeyboardHandler(element) && !element.getAttribute('tabindex')) {
                activationIssues++;
            }
        });
        
        const totalInteractive = buttons.length + links.length + customInteractive.length;
        
        if (activationIssues === 0) {
            this.addResult('pass', `All ${totalInteractive} interactive elements support keyboard activation`);
        } else {
            this.addResult('warning', `${activationIssues} elements may not support keyboard activation properly`);
        }
        
        console.log(`Tested ${totalInteractive} interactive elements`);
    }

    hasKeyboardHandler(element) {
        // Check for common keyboard event handlers
        return element.onclick !== null || 
               element.onkeydown !== null || 
               element.onkeyup !== null ||
               element.getAttribute('onclick') ||
               element.getAttribute('onkeydown') ||
               element.getAttribute('onkeyup') ||
               // Check if element has event listeners (limited detection)
               element.tagName.toLowerCase() === 'button' ||
               element.tagName.toLowerCase() === 'a';
    }

    testAriaAttributes() {
        this.currentTest = 'ARIA Attributes';
        console.log(`\n🔍 Testing: ${this.currentTest}`);
        
        const interactiveElements = document.querySelectorAll(`
            button, a[href], input, select, textarea, 
            [tabindex]:not([tabindex="-1"]), 
            [role="button"], [role="link"]
        `);
        
        const elementsWithAria = document.querySelectorAll(`
            [aria-label], [aria-labelledby], [aria-describedby], 
            [aria-expanded], [aria-haspopup], [aria-current], 
            [role]
        `);
        
        // Check for proper ARIA usage
        let ariaIssues = 0;
        
        // Check dropdown toggles
        const dropdownToggles = document.querySelectorAll('.dropdown .nav-link, [aria-haspopup]');
        dropdownToggles.forEach(toggle => {
            if (!toggle.getAttribute('aria-expanded')) {
                ariaIssues++;
            }
        });
        
        // Check navigation current page
        const navLinks = document.querySelectorAll('.nav-link');
        const hasCurrentPage = Array.from(navLinks).some(link => 
            link.getAttribute('aria-current') === 'page'
        );
        
        if (!hasCurrentPage) {
            ariaIssues++;
        }
        
        const ariaRatio = elementsWithAria.length / Math.max(interactiveElements.length, 1);
        
        if (ariaRatio > 0.5 && ariaIssues === 0) {
            this.addResult('pass', `Good ARIA implementation: ${elementsWithAria.length} elements with ARIA attributes`);
        } else if (ariaRatio > 0.3) {
            this.addResult('warning', `Moderate ARIA usage: ${elementsWithAria.length} elements with ARIA attributes, ${ariaIssues} issues`);
        } else {
            this.addResult('fail', `Poor ARIA implementation: only ${elementsWithAria.length} elements with ARIA attributes`);
        }
    }

    testHiddenElements() {
        this.currentTest = 'Hidden Elements';
        console.log(`\n🔍 Testing: ${this.currentTest}`);
        
        const hiddenFocusable = [];
        
        // Find elements that are hidden but still focusable
        const allFocusable = document.querySelectorAll(`
            a[href], button, input, select, textarea, 
            [tabindex]:not([tabindex="-1"])
        `);
        
        allFocusable.forEach(element => {
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
            
            if (isHidden && isStillFocusable) {
                hiddenFocusable.push(element);
            }
        });
        
        if (hiddenFocusable.length === 0) {
            this.addResult('pass', 'No hidden elements are focusable');
        } else {
            this.addResult('fail', `${hiddenFocusable.length} hidden elements are still focusable`);
            console.log('Hidden focusable elements:', hiddenFocusable);
        }
    }

    testNavigationMenu() {
        this.currentTest = 'Navigation Menu';
        console.log(`\n🔍 Testing: ${this.currentTest}`);
        
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn, #mobileMenuBtn');
        const navMenu = document.querySelector('.nav-menu, #navMenu');
        
        if (mobileMenuBtn && navMenu) {
            // Test mobile menu button accessibility
            const hasAriaLabel = mobileMenuBtn.getAttribute('aria-label') || 
                                mobileMenuBtn.getAttribute('aria-labelledby');
            
            if (hasAriaLabel) {
                this.addResult('pass', 'Mobile menu button has proper ARIA label');
            } else {
                this.addResult('fail', 'Mobile menu button missing ARIA label');
            }
            
            // Test if mobile menu items are properly hidden when closed
            if (!navMenu.classList.contains('active')) {
                const hiddenNavItems = navMenu.querySelectorAll('.nav-link');
                let properlyHidden = true;
                
                hiddenNavItems.forEach(item => {
                    if (item.tabIndex !== -1 && window.innerWidth <= 900) {
                        properlyHidden = false;
                    }
                });
                
                if (properlyHidden || window.innerWidth > 900) {
                    this.addResult('pass', 'Mobile menu items properly hidden when menu closed');
                } else {
                    this.addResult('fail', 'Mobile menu items not properly hidden from keyboard navigation');
                }
            }
        } else {
            this.addResult('warning', 'Mobile menu not found - may not be implemented');
        }
        
        // Test dropdown menus
        const dropdowns = document.querySelectorAll('.dropdown');
        let dropdownIssues = 0;
        
        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.nav-link');
            const content = dropdown.querySelector('.dropdown-content');
            
            if (toggle && content) {
                if (!toggle.getAttribute('aria-haspopup')) {
                    dropdownIssues++;
                }
                if (!toggle.getAttribute('aria-expanded')) {
                    dropdownIssues++;
                }
            }
        });
        
        if (dropdowns.length > 0) {
            if (dropdownIssues === 0) {
                this.addResult('pass', `${dropdowns.length} dropdown menus properly configured`);
            } else {
                this.addResult('warning', `${dropdownIssues} ARIA issues in dropdown menus`);
            }
        }
    }

    testFormElements() {
        this.currentTest = 'Form Elements';
        console.log(`\n🔍 Testing: ${this.currentTest}`);
        
        const formElements = document.querySelectorAll('input, textarea, select');
        
        if (formElements.length === 0) {
            this.addResult('pass', 'No form elements found on this page');
            return;
        }
        
        let formIssues = 0;
        
        formElements.forEach(element => {
            // Check for labels
            const hasLabel = element.getAttribute('aria-label') ||
                            element.getAttribute('aria-labelledby') ||
                            element.getAttribute('placeholder') ||
                            document.querySelector(`label[for="${element.id}"]`);
            
            if (!hasLabel) {
                formIssues++;
            }
            
            // Check font size for mobile (should be >= 16px to prevent zoom)
            const styles = getComputedStyle(element);
            const fontSize = parseFloat(styles.fontSize);
            
            if (fontSize < 16 && window.innerWidth <= 768) {
                formIssues++;
            }
        });
        
        if (formIssues === 0) {
            this.addResult('pass', `All ${formElements.length} form elements properly configured`);
        } else {
            this.addResult('warning', `${formIssues} issues found in form elements`);
        }
    }

    testInteractiveCards() {
        this.currentTest = 'Interactive Cards';
        console.log(`\n🔍 Testing: ${this.currentTest}`);
        
        const cards = document.querySelectorAll('.course-card, .feature-item, .demographic-card');
        
        if (cards.length === 0) {
            this.addResult('pass', 'No interactive cards found on this page');
            return;
        }
        
        let cardIssues = 0;
        
        cards.forEach(card => {
            // Check if card is keyboard accessible
            const isFocusable = card.tabIndex >= 0 || 
                              card.querySelector('a[href], button');
            
            if (!isFocusable) {
                cardIssues++;
            }
        });
        
        if (cardIssues === 0) {
            this.addResult('pass', `All ${cards.length} interactive cards are keyboard accessible`);
        } else {
            this.addResult('warning', `${cardIssues} cards may not be keyboard accessible`);
        }
    }

    addResult(status, message) {
        const result = {
            test: this.currentTest,
            status: status,
            message: message,
            timestamp: new Date().toISOString()
        };
        
        this.results.push(result);
        
        const emoji = status === 'pass' ? '✅' : status === 'warning' ? '⚠️' : '❌';
        console.log(`${emoji} ${message}`);
    }

    generateReport() {
        console.log('\n📊 KEYBOARD NAVIGATION TEST REPORT');
        console.log('=====================================');
        
        const passed = this.results.filter(r => r.status === 'pass').length;
        const warnings = this.results.filter(r => r.status === 'warning').length;
        const failed = this.results.filter(r => r.status === 'fail').length;
        const total = this.results.length;
        
        console.log(`\nSummary:`);
        console.log(`✅ Passed: ${passed}/${total}`);
        console.log(`⚠️ Warnings: ${warnings}/${total}`);
        console.log(`❌ Failed: ${failed}/${total}`);
        
        const score = ((passed + warnings * 0.5) / total * 100).toFixed(1);
        console.log(`\n🎯 Overall Score: ${score}%`);
        
        if (score >= 90) {
            console.log('🏆 Excellent keyboard accessibility!');
        } else if (score >= 75) {
            console.log('👍 Good keyboard accessibility with room for improvement');
        } else if (score >= 60) {
            console.log('⚠️ Moderate keyboard accessibility - needs attention');
        } else {
            console.log('❌ Poor keyboard accessibility - requires significant work');
        }
        
        // Detailed results
        console.log('\nDetailed Results:');
        console.log('=================');
        
        this.results.forEach(result => {
            const emoji = result.status === 'pass' ? '✅' : 
                         result.status === 'warning' ? '⚠️' : '❌';
            console.log(`${emoji} ${result.test}: ${result.message}`);
        });
        
        // Recommendations
        this.generateRecommendations();
        
        return {
            score: parseFloat(score),
            passed,
            warnings,
            failed,
            total,
            results: this.results
        };
    }

    generateRecommendations() {
        console.log('\n💡 RECOMMENDATIONS');
        console.log('==================');
        
        const failedTests = this.results.filter(r => r.status === 'fail');
        const warningTests = this.results.filter(r => r.status === 'warning');
        
        if (failedTests.length === 0 && warningTests.length === 0) {
            console.log('🎉 No recommendations - excellent keyboard accessibility!');
            return;
        }
        
        const recommendations = new Set();
        
        failedTests.forEach(result => {
            if (result.test === 'Skip Link') {
                recommendations.add('Add a skip link to the top of each page for keyboard navigation');
            }
            if (result.test === 'Focus Indicators') {
                recommendations.add('Implement custom focus indicators with sufficient contrast');
            }
            if (result.test === 'ARIA Attributes') {
                recommendations.add('Add proper ARIA attributes to interactive elements');
            }
            if (result.test === 'Hidden Elements') {
                recommendations.add('Ensure hidden elements are not focusable (use tabindex="-1")');
            }
        });
        
        warningTests.forEach(result => {
            if (result.test === 'Tab Order') {
                recommendations.add('Review tab order to ensure it follows visual layout');
            }
            if (result.test === 'Navigation Menu') {
                recommendations.add('Improve mobile menu keyboard accessibility');
            }
            if (result.test === 'Form Elements') {
                recommendations.add('Ensure all form elements have proper labels and mobile-friendly sizing');
            }
        });
        
        Array.from(recommendations).forEach((rec, index) => {
            console.log(`${index + 1}. ${rec}`);
        });
    }
}

// Auto-run tests if script is loaded directly
if (typeof window !== 'undefined') {
    window.KeyboardNavigationTester = KeyboardNavigationTester;
    
    // Add a global function to run tests
    window.runKeyboardTests = function() {
        const tester = new KeyboardNavigationTester();
        return tester.runAllTests();
    };
    
    console.log('🎯 Keyboard Navigation Tester loaded!');
    console.log('Run tests with: runKeyboardTests()');
}

// Export for Node.js if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = KeyboardNavigationTester;
}