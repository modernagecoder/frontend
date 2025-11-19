/**
 * Fixed Mobile Navigation System
 * Consolidated mobile navigation with hamburger menu
 */

(function() {
    'use strict';
    
    console.log('[Mobile Nav Fixed] Script loaded');
    
    // CRITICAL FIX: Wait for components to be loaded first
    function waitForComponents() {
        console.log('[Mobile Nav Fixed] Waiting for components to load...');
        
        // Listen for the componentsLoaded event
        document.addEventListener('componentsLoaded', function() {
            console.log('[Mobile Nav Fixed] Components loaded event received');
            setTimeout(initMobileNavigation, 100);
        });
        
        // Fallback: Try after delay if event doesn't fire
        setTimeout(function() {
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            if (mobileMenuBtn && !window.__mobileNavFixedInitialized) {
                console.log('[Mobile Nav Fixed] Fallback initialization triggered');
                initMobileNavigation();
            }
        }, 1000);
    }
    
    // Start waiting for components
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForComponents);
    } else {
        waitForComponents();
    }
    
    function initMobileNavigation() {
        // Prevent double initialization
        if (window.__mobileNavFixedInitialized) {
            console.log('[Mobile Nav Fixed] Already initialized, skipping');
            return;
        }
        
        console.log('[Mobile Nav Fixed] DOM ready, initializing...');
        
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.getElementById('navMenu');
        
        if (!mobileMenuBtn) {
            console.error('[Mobile Nav Fixed] Mobile menu button not found! Looking for element with ID "mobileMenuBtn"');
            return;
        }
        
        if (!navMenu) {
            console.error('[Mobile Nav Fixed] Navigation menu not found! Looking for element with ID "navMenu"');
            return;
        }
        
        console.log('[Mobile Nav Fixed] Elements found:', {
            button: mobileMenuBtn,
            menu: navMenu
        });
        
        window.__mobileNavFixedInitialized = true;
        
        // Initialize ARIA attributes
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.setAttribute('aria-controls', 'navMenu');
        navMenu.setAttribute('aria-hidden', 'true');
        
        // Mobile menu toggle function
        function toggleMobileMenu() {
            const isActive = navMenu.classList.contains('active');
            console.log('[Mobile Nav] Toggling menu. Current state:', isActive ? 'open' : 'closed');
            
            if (isActive) {
                // Close menu
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.classList.remove('mobile-menu-open');
                document.body.style.overflow = '';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                navMenu.setAttribute('aria-hidden', 'true');
                console.log('[Mobile Nav] Menu closed');
            } else {
                // Open menu
                navMenu.classList.add('active');
                mobileMenuBtn.classList.add('active');
                document.body.classList.add('mobile-menu-open');
                document.body.style.overflow = 'hidden';
                mobileMenuBtn.setAttribute('aria-expanded', 'true');
                navMenu.setAttribute('aria-hidden', 'false');
                console.log('[Mobile Nav] Menu opened');
            }
        }
        
        // Add click event to mobile menu button
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('[Mobile Nav] Button clicked');
            toggleMobileMenu();
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navMenu.classList.contains('active')) {
                if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                    console.log('[Mobile Nav] Clicked outside, closing menu');
                    toggleMobileMenu();
                }
            }
        });
        
        // Close menu when clicking on navigation links (except dropdowns)
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Don't close if it's a dropdown parent
                const isDropdownParent = this.parentElement.classList.contains('dropdown');
                const hasHref = this.getAttribute('href') && this.getAttribute('href') !== '#';
                
                if (hasHref && !isDropdownParent && window.innerWidth <= 900) {
                    console.log('[Mobile Nav] Navigation link clicked, closing menu');
                    setTimeout(() => toggleMobileMenu(), 100);
                }
            });
        });
        
        // Handle dropdown toggles on mobile
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            const dropdownLink = dropdown.querySelector('.nav-link');
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            
            if (dropdownLink && dropdownContent) {
                dropdownLink.addEventListener('click', function(e) {
                    if (window.innerWidth <= 900) {
                        // Only prevent default if it doesn't have a real href
                        if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                            e.preventDefault();
                        }
                        
                        e.stopPropagation();
                        
                        // Close other dropdowns
                        dropdowns.forEach(otherDropdown => {
                            if (otherDropdown !== dropdown) {
                                otherDropdown.classList.remove('active');
                            }
                        });
                        
                        // Toggle current dropdown
                        dropdown.classList.toggle('active');
                        console.log('[Mobile Nav] Dropdown toggled');
                    }
                });
                
                // Close dropdown when clicking on dropdown items
                const dropdownItems = dropdownContent.querySelectorAll('.dropdown-item');
                dropdownItems.forEach(item => {
                    item.addEventListener('click', function() {
                        if (window.innerWidth <= 900) {
                            console.log('[Mobile Nav] Dropdown item clicked, closing menu');
                            setTimeout(() => toggleMobileMenu(), 100);
                        }
                    });
                });
            }
        });
        
        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (window.innerWidth > 900) {
                    // Desktop view - ensure menu is reset
                    navMenu.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                    document.body.classList.remove('mobile-menu-open');
                    document.body.style.overflow = '';
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                    navMenu.setAttribute('aria-hidden', 'true');
                    
                    // Close all dropdowns
                    dropdowns.forEach(dropdown => {
                        dropdown.classList.remove('active');
                    });
                    
                    console.log('[Mobile Nav] Switched to desktop view, menu reset');
                }
            }, 250);
        });
        
        // Add visual feedback for touch interactions
        const touchElements = [mobileMenuBtn, ...navLinks];
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.opacity = '0.7';
            }, { passive: true });
            
            element.addEventListener('touchend', function() {
                this.style.opacity = '';
            }, { passive: true });
            
            element.addEventListener('touchcancel', function() {
                this.style.opacity = '';
            }, { passive: true });
        });
        
        console.log('[Mobile Nav] Initialization complete');
    }
})();