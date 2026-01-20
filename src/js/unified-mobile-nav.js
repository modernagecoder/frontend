/**
 * Unified Mobile Navigation System
 * Single source of truth for mobile navigation across all pages
 * Version: 2.0
 */

(function() {
    'use strict';
    
    // Configuration
    const CONFIG = {
        mobileBreakpoint: 900,
        buttonId: 'mobileMenuBtn',
        menuId: 'navMenu',
        debug: true // Set to true for debugging
    };
    
    // State
    let isMenuOpen = false;
    let mobileMenuBtn = null;
    let navMenu = null;
    let isInitialized = false;
    
    // Debug logging
    function log(...args) {
        if (CONFIG.debug) {
            console.log('[Unified Mobile Nav]', ...args);
        }
    }
    
    // CRITICAL FIX: Wait for components to be loaded first
    function waitForComponents() {
        log('Waiting for components to load...');
        
        // Listen for the componentsLoaded event
        document.addEventListener('componentsLoaded', function() {
            log('Components loaded event received');
            setTimeout(init, 100);
        });
        
        // Fallback: Try after delay if event doesn't fire
        setTimeout(function() {
            const btn = document.getElementById(CONFIG.buttonId);
            if (btn && !window.__unifiedMobileNavInitialized) {
                log('Fallback initialization triggered');
                init();
            }
        }, 1000);
    }
    
    // Start waiting for components
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForComponents);
    } else {
        waitForComponents();
    }
    
    function init() {
        // Prevent double initialization - check global flag
        if (window.__unifiedMobileNavInitialized) {
            log('Already initialized globally, skipping');
            return;
        }
        
        // Prevent double initialization - check local flag
        if (isInitialized) {
            log('Already initialized locally, skipping');
            return;
        }
        
        log('Initializing...');
        
        // Find elements
        mobileMenuBtn = document.getElementById(CONFIG.buttonId);
        navMenu = document.getElementById(CONFIG.menuId);
        
        // Validate elements
        if (!mobileMenuBtn || !navMenu) {
            console.error('[Unified Mobile Nav] Required elements not found:', {
                button: !!mobileMenuBtn,
                menu: !!navMenu,
                buttonId: CONFIG.buttonId,
                menuId: CONFIG.menuId
            });
            return;
        }
        
        log('Elements found', {
            button: mobileMenuBtn,
            menu: navMenu
        });
        
        // CRITICAL FIX: Sync isMenuOpen state with actual DOM state on init
        // This ensures the first click works correctly
        isMenuOpen = navMenu.classList.contains('active');
        log('Initial menu state:', isMenuOpen ? 'open' : 'closed');
        
        // Also ensure body scroll state is synced
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('mobile-menu-open');
        } else {
            document.body.style.overflow = '';
            document.body.classList.remove('mobile-menu-open');
        }
        
        // Setup
        setupAccessibility();
        setupEventListeners();
        setupDropdowns();
        
        isInitialized = true;
        window.__unifiedMobileNavInitialized = true;
        log('Initialization complete');
    }
    
    function setupAccessibility() {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.setAttribute('aria-controls', CONFIG.menuId);
        mobileMenuBtn.setAttribute('aria-label', 'Toggle navigation menu');
        navMenu.setAttribute('aria-hidden', 'true');
    }
    
    function setupEventListeners() {
        // Hamburger button click
        mobileMenuBtn.addEventListener('click', handleButtonClick);
        
        // Click outside to close
        document.addEventListener('click', handleOutsideClick);
        
        // Escape key to close
        document.addEventListener('keydown', handleEscapeKey);
        
        // Window resize
        window.addEventListener('resize', debounce(handleResize, 250));
        
        // Navigation link clicks
        const navLinks = navMenu.querySelectorAll('.nav-link:not(.dropdown > .nav-link)');
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavLinkClick);
        });
    }
    
    function handleButtonClick(e) {
        e.preventDefault();
        e.stopPropagation();
        
        log('Button clicked, current state:', isMenuOpen ? 'open' : 'closed');
        
        // Only work on mobile
        if (!isMobile()) {
            log('Not mobile, ignoring');
            return;
        }
        
        toggleMenu();
    }
    
    function toggleMenu() {
        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }
    
    function openMenu() {
        log('Opening menu');
        
        isMenuOpen = true;
        
        // Add classes
        navMenu.classList.add('active');
        mobileMenuBtn.classList.add('active');
        document.body.classList.add('mobile-menu-open');
        
        // Update ARIA
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        navMenu.setAttribute('aria-hidden', 'false');
        
        // Lock scroll
        document.body.style.overflow = 'hidden';
        
        log('Menu opened');
    }
    
    function closeMenu() {
        log('Closing menu');
        
        isMenuOpen = false;
        
        // Remove classes
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        document.body.classList.remove('mobile-menu-open');
        
        // Update ARIA
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        navMenu.setAttribute('aria-hidden', 'true');
        
        // Unlock scroll
        document.body.style.overflow = '';
        
        // Close all dropdowns
        closeAllDropdowns();
        
        log('Menu closed');
    }
    
    function handleOutsideClick(e) {
        if (!isMenuOpen || !isMobile()) return;
        
        // Check if click is outside both menu and button
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            log('Clicked outside, closing');
            closeMenu();
        }
    }
    
    function handleEscapeKey(e) {
        if (e.key === 'Escape' && isMenuOpen && isMobile()) {
            log('Escape pressed, closing');
            closeMenu();
        }
    }
    
    function handleResize() {
        if (!isMobile() && isMenuOpen) {
            log('Resized to desktop, closing menu');
            closeMenu();
        }
    }
    
    function handleNavLinkClick(e) {
        const href = this.getAttribute('href');
        
        // If it's a real link and we're on mobile with menu open, close the menu
        if (href && href !== '#' && isMobile() && isMenuOpen) {
            log('Nav link clicked, closing menu');
            setTimeout(() => closeMenu(), 100);
        }
    }
    
    function setupDropdowns() {
        const dropdowns = document.querySelectorAll('.dropdown');
        
        dropdowns.forEach(dropdown => {
            const dropdownLink = dropdown.querySelector('.nav-link');
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            
            if (!dropdownLink || !dropdownContent) return;
            
            // Dropdown parent link click
            dropdownLink.addEventListener('click', function(e) {
                if (!isMobile()) return;
                
                const href = this.getAttribute('href');
                
                // If it has a real href, allow navigation
                if (href && href !== '#' && !href.startsWith('javascript:')) {
                    log('Dropdown link with href clicked, allowing navigation');
                    setTimeout(() => closeMenu(), 100);
                    return;
                }
                
                // Otherwise, toggle dropdown
                e.preventDefault();
                e.stopPropagation();
                
                // Close other dropdowns
                dropdowns.forEach(other => {
                    if (other !== dropdown) {
                        other.classList.remove('active');
                    }
                });
                
                // Toggle this dropdown
                dropdown.classList.toggle('active');
                log('Dropdown toggled');
            });
            
            // Dropdown item clicks
            const dropdownItems = dropdownContent.querySelectorAll('.dropdown-item');
            dropdownItems.forEach(item => {
                item.addEventListener('click', function() {
                    if (isMobile() && isMenuOpen) {
                        log('Dropdown item clicked, closing menu');
                        setTimeout(() => closeMenu(), 100);
                    }
                });
            });
        });
    }
    
    function closeAllDropdowns() {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
    
    function isMobile() {
        return window.innerWidth <= CONFIG.mobileBreakpoint;
    }
    
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Public API for debugging
    window.UnifiedMobileNav = {
        getState: () => ({
            isInitialized,
            isMenuOpen,
            isMobile: isMobile()
        }),
        openMenu,
        closeMenu,
        toggleMenu,
        reinit: init
    };
    
    log('Script loaded');
})();
