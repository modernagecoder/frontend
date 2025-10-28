/**
 * Comprehensive Mobile Navigation Fix
 * This script ensures mobile navigation works across all devices and scenarios
 */

(function() {
    'use strict';
    
    // Configuration
    const CONFIG = {
        mobileBreakpoint: 900,
        buttonId: 'mobileMenuBtn',
        menuId: 'navMenu',
        activeClass: 'active',
        openClass: 'open',
        bodyLockClass: 'mobile-menu-open',
        debug: true // Set to false in production
    };
    
    // Debug logging
    function log(message, data = null) {
        if (CONFIG.debug) {
            console.log(`[Mobile Nav Fix] ${message}`, data || '');
        }
    }
    
    // Error logging
    function error(message, data = null) {
        console.error(`[Mobile Nav Fix] ERROR: ${message}`, data || '');
    }
    
    // State management
    let isInitialized = false;
    let mobileMenuBtn = null;
    let navMenu = null;
    let isMenuOpen = false;
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        log('Initializing mobile navigation...');
        
        // Find elements
        mobileMenuBtn = document.getElementById(CONFIG.buttonId);
        navMenu = document.getElementById(CONFIG.menuId);
        
        // Validate elements
        if (!mobileMenuBtn) {
            error(`Mobile menu button not found! Looking for element with ID "${CONFIG.buttonId}"`);
            return;
        }
        
        if (!navMenu) {
            error(`Navigation menu not found! Looking for element with ID "${CONFIG.menuId}"`);
            return;
        }
        
        log('Elements found successfully', {
            button: mobileMenuBtn,
            menu: navMenu,
            buttonVisible: isElementVisible(mobileMenuBtn),
            menuVisible: isElementVisible(navMenu)
        });
        
        // Setup ARIA attributes
        setupAccessibility();
        
        // Setup event listeners
        setupEventListeners();
        
        // Setup responsive behavior
        setupResponsiveBehavior();
        
        // Setup dropdown handling
        setupDropdownHandling();
        
        // Initial state check
        checkInitialState();
        
        isInitialized = true;
        log('Mobile navigation initialized successfully');
    }
    
    function isElementVisible(element) {
        const style = window.getComputedStyle(element);
        return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
    }
    
    function setupAccessibility() {
        log('Setting up accessibility attributes...');
        
        // Button attributes
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.setAttribute('aria-controls', CONFIG.menuId);
        mobileMenuBtn.setAttribute('aria-label', 'Toggle navigation menu');
        
        // Menu attributes
        navMenu.setAttribute('aria-hidden', 'true');
        navMenu.setAttribute('role', 'navigation');
        
        log('Accessibility attributes set');
    }
    
    function setupEventListeners() {
        log('Setting up event listeners...');
        
        // Mobile menu button click
        mobileMenuBtn.addEventListener('click', handleMenuToggle);
        mobileMenuBtn.addEventListener('touchstart', handleTouchStart, { passive: true });
        
        // Close menu when clicking outside
        document.addEventListener('click', handleOutsideClick);
        document.addEventListener('touchstart', handleOutsideTouch, { passive: true });
        
        // Handle escape key
        document.addEventListener('keydown', handleKeydown);
        
        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(handleResize, 250);
        });
        
        log('Event listeners set up');
    }
    
    function handleMenuToggle(e) {
        e.preventDefault();
        e.stopPropagation();
        
        log('Menu toggle triggered', {
            currentState: isMenuOpen ? 'open' : 'closed',
            isMobile: isMobileView()
        });
        
        if (!isMobileView()) {
            log('Not in mobile view, ignoring toggle');
            return;
        }
        
        toggleMenu();
    }
    
    function handleTouchStart(e) {
        // Add visual feedback for touch
        mobileMenuBtn.style.opacity = '0.7';
        setTimeout(() => {
            mobileMenuBtn.style.opacity = '';
        }, 150);
    }
    
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        log(`Toggling menu to: ${isMenuOpen ? 'open' : 'closed'}`);
        
        if (isMenuOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    }
    
    function openMenu() {
        log('Opening menu...');
        
        // Add classes
        navMenu.classList.add(CONFIG.activeClass);
        mobileMenuBtn.classList.add(CONFIG.activeClass);
        mobileMenuBtn.classList.add(CONFIG.openClass);
        document.body.classList.add(CONFIG.bodyLockClass);
        
        // Update ARIA
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        navMenu.setAttribute('aria-hidden', 'false');
        
        // Lock body scroll
        document.body.style.overflow = 'hidden';
        
        // Focus management
        setTimeout(() => {
            const firstLink = navMenu.querySelector('.nav-link');
            if (firstLink) {
                firstLink.focus();
            }
        }, 100);
        
        isMenuOpen = true;
        log('Menu opened');
    }
    
    function closeMenu() {
        log('Closing menu...');
        
        // Remove classes
        navMenu.classList.remove(CONFIG.activeClass);
        mobileMenuBtn.classList.remove(CONFIG.activeClass);
        mobileMenuBtn.classList.remove(CONFIG.openClass);
        document.body.classList.remove(CONFIG.bodyLockClass);
        
        // Update ARIA
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        navMenu.setAttribute('aria-hidden', 'true');
        
        // Unlock body scroll
        document.body.style.overflow = '';
        
        // Close all dropdowns
        closeAllDropdowns();
        
        // Return focus to button
        mobileMenuBtn.focus();
        
        isMenuOpen = false;
        log('Menu closed');
    }
    
    function handleOutsideClick(e) {
        if (!isMenuOpen || !isMobileView()) return;
        
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            log('Clicked outside menu, closing...');
            closeMenu();
        }
    }
    
    function handleOutsideTouch(e) {
        handleOutsideClick(e);
    }
    
    function handleKeydown(e) {
        if (!isMenuOpen || !isMobileView()) return;
        
        if (e.key === 'Escape') {
            log('Escape key pressed, closing menu');
            closeMenu();
        }
    }
    
    function handleResize() {
        log('Window resized', {
            width: window.innerWidth,
            isMobile: isMobileView(),
            menuOpen: isMenuOpen
        });
        
        if (!isMobileView() && isMenuOpen) {
            log('Switched to desktop view, closing mobile menu');
            closeMenu();
        }
        
        // Reset menu state for desktop
        if (!isMobileView()) {
            navMenu.classList.remove(CONFIG.activeClass);
            mobileMenuBtn.classList.remove(CONFIG.activeClass);
            mobileMenuBtn.classList.remove(CONFIG.openClass);
            document.body.classList.remove(CONFIG.bodyLockClass);
            document.body.style.overflow = '';
            closeAllDropdowns();
            isMenuOpen = false;
        }
    }
    
    function setupResponsiveBehavior() {
        log('Setting up responsive behavior...');
        
        // Initial check
        handleResize();
    }
    
    function setupDropdownHandling() {
        log('Setting up dropdown handling...');
        
        const dropdowns = document.querySelectorAll('.dropdown');
        
        dropdowns.forEach(dropdown => {
            const dropdownLink = dropdown.querySelector('.nav-link');
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            
            if (dropdownLink && dropdownContent) {
                dropdownLink.addEventListener('click', function(e) {
                    if (isMobileView() && isMenuOpen) {
                        const href = this.getAttribute('href');
                        
                        // SIMPLE FIX: If it has a real href, allow navigation
                        if (href && href !== '#' && !href.startsWith('javascript:')) {
                            log('Dropdown link with real href clicked on mobile - allowing navigation', {
                                href: href
                            });
                            
                            // Allow the navigation to happen - don't prevent default
                            // Just close the menu
                            setTimeout(() => closeMenu(), 100);
                            return; // Exit early - allow navigation
                        }
                        
                        // Only prevent navigation if no real href
                        e.preventDefault();
                        e.stopPropagation();
                        
                        log('Dropdown link clicked on mobile - showing dropdown', {
                            href: href
                        });
                        
                        // Close other dropdowns
                        dropdowns.forEach(otherDropdown => {
                            if (otherDropdown !== dropdown) {
                                otherDropdown.classList.remove(CONFIG.activeClass);
                            }
                        });
                        
                        // Toggle current dropdown
                        dropdown.classList.toggle(CONFIG.activeClass);
                        log('Dropdown toggled', {
                            isActive: dropdown.classList.contains(CONFIG.activeClass)
                        });
                    }
                });
                
                // Handle dropdown item clicks
                const dropdownItems = dropdownContent.querySelectorAll('.dropdown-item');
                dropdownItems.forEach(item => {
                    item.addEventListener('click', function() {
                        if (isMobileView() && isMenuOpen) {
                            log('Dropdown item clicked, closing menu');
                            setTimeout(() => closeMenu(), 100);
                        }
                    });
                });
            }
        });
        
        // Handle regular nav link clicks
        const navLinks = navMenu.querySelectorAll('.nav-link:not(.dropdown .nav-link)');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                const href = this.getAttribute('href');
                if (href && href !== '#' && isMobileView() && isMenuOpen) {
                    log('Navigation link clicked, closing menu');
                    setTimeout(() => closeMenu(), 100);
                }
            });
        });
    }
    
    function closeAllDropdowns() {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove(CONFIG.activeClass);
        });
    }
    
    function isMobileView() {
        return window.innerWidth <= CONFIG.mobileBreakpoint;
    }
    
    function checkInitialState() {
        log('Checking initial state...', {
            windowWidth: window.innerWidth,
            isMobile: isMobileView(),
            buttonVisible: isElementVisible(mobileMenuBtn),
            menuVisible: isElementVisible(navMenu)
        });
        
        // Ensure correct initial state
        if (isMobileView()) {
            if (isMenuOpen) {
                closeMenu();
            }
        }
    }
    
    // Public API for debugging
    window.MobileNavDebug = {
        getState: () => ({
            isInitialized,
            isMenuOpen,
            isMobileView: isMobileView(),
            elements: { mobileMenuBtn, navMenu }
        }),
        toggleMenu,
        openMenu,
        closeMenu,
        reinitialize: init
    };
    
    log('Mobile navigation script loaded');
})();