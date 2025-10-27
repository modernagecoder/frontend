/**
 * Tab Accessibility Enhancement
 * Adds proper ARIA attributes to tab buttons and handles aria-current for active tabs
 */

(function() {
    'use strict';
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTabAccessibility);
    } else {
        initTabAccessibility();
    }
    
    function initTabAccessibility() {
        // Handle tab buttons in tab containers
        const tabContainers = document.querySelectorAll('.tabs-container');
        
        tabContainers.forEach(container => {
            const tabButtons = container.querySelectorAll('.tab-button');
            
            tabButtons.forEach((button, index) => {
                // Add ARIA attributes for tab buttons
                button.setAttribute('role', 'tab');
                button.setAttribute('aria-selected', button.classList.contains('active') ? 'true' : 'false');
                
                // Generate unique IDs for tab panels
                const target = button.getAttribute('data-target');
                if (target) {
                    const panelId = target.replace('#', '');
                    button.setAttribute('aria-controls', panelId);
                    
                    // Find and update the corresponding panel
                    const panel = document.querySelector(target);
                    if (panel) {
                        panel.setAttribute('role', 'tabpanel');
                        panel.setAttribute('aria-labelledby', button.id || `tab-${panelId}`);
                        if (!button.id) {
                            button.id = `tab-${panelId}`;
                        }
                    }
                }
                
                // Add aria-current for active tabs
                if (button.classList.contains('active')) {
                    button.setAttribute('aria-current', 'true');
                } else {
                    button.removeAttribute('aria-current');
                }
                
                // Add click handler to update ARIA attributes
                button.addEventListener('click', function() {
                    // Update all tabs in this container
                    tabButtons.forEach(tab => {
                        const isActive = tab === button;
                        tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
                        
                        if (isActive) {
                            tab.setAttribute('aria-current', 'true');
                        } else {
                            tab.removeAttribute('aria-current');
                        }
                    });
                });
            });
            
            // Add tablist role to container
            container.setAttribute('role', 'tablist');
        });
        
        // Handle main tabs (coding/maths tabs)
        const mainTabs = document.querySelectorAll('.main-tab');
        mainTabs.forEach(tab => {
            // These already have proper role="tab" attributes in the HTML
            // Just ensure aria-current is set for active tabs
            if (tab.getAttribute('aria-selected') === 'true') {
                tab.setAttribute('aria-current', 'true');
            }
            
            // Add click handler to update aria-current
            tab.addEventListener('click', function() {
                mainTabs.forEach(otherTab => {
                    if (otherTab === tab) {
                        otherTab.setAttribute('aria-current', 'true');
                    } else {
                        otherTab.removeAttribute('aria-current');
                    }
                });
            });
        });
        
        console.log('[Tab Accessibility] Initialized successfully');
    }
})();