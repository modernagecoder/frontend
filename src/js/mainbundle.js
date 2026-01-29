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

/**
 * Keyboard Navigation Enhancement
 * Provides comprehensive keyboard navigation support for all interactive elements
 * Requirements: 12.1 - Keyboard navigation support
 */

(function() {
  'use strict';
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initKeyboardNavigation);
  } else {
    initKeyboardNavigation();
  }
  
  function initKeyboardNavigation() {
    console.log('[Keyboard Nav] Initializing keyboard navigation support...');
    
    // Initialize focus management
    initFocusManagement();
    
    // Initialize keyboard shortcuts
    initKeyboardShortcuts();
    
    // Initialize dropdown keyboard navigation
    initDropdownKeyboardNav();
    
    // Initialize mobile menu keyboard navigation
    initMobileMenuKeyboardNav();
    
    // Initialize card keyboard navigation
    initCardKeyboardNav();
    
    // Initialize form keyboard navigation
    initFormKeyboardNav();
    
    // Initialize focus trap for mobile menu
    initFocusTrap();
    
    // Initialize ARIA live regions
    initAriaLiveRegions();
    
    console.log('[Keyboard Nav] Keyboard navigation initialized successfully');
  }
  
  /**
   * Focus Management
   * Handles focus-visible polyfill and focus management
   */
  function initFocusManagement() {
    // Add focus-visible polyfill behavior
    let hadKeyboardEvent = true;
    let keyboardThrottleTimeout = 0;
    
    const keyboardKeys = [
      'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
      'Enter', ' ', 'Escape', 'Home', 'End', 'PageUp', 'PageDown'
    ];
    
    // Track keyboard usage
    document.addEventListener('keydown', function(e) {
      if (keyboardKeys.includes(e.key)) {
        hadKeyboardEvent = true;
      }
    });
    
    // Track mouse usage
    document.addEventListener('mousedown', function() {
      hadKeyboardEvent = false;
    });
    
    // Apply focus-visible class based on input method
    document.addEventListener('focusin', function(e) {
      if (hadKeyboardEvent) {
        e.target.classList.add('focus-visible');
      }
    });
    
    document.addEventListener('focusout', function(e) {
      e.target.classList.remove('focus-visible');
    });
    
    // Skip links functionality
    const skipLinks = document.querySelectorAll('.skip-link');
    skipLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          target.focus();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
  
  /**
   * Keyboard Shortcuts
   * Implements global keyboard shortcuts for navigation
   */
  function initKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
      // Alt + M: Toggle mobile menu
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        if (mobileMenuBtn && window.innerWidth < 768) {
          mobileMenuBtn.click();
          mobileMenuBtn.focus();
        }
      }
      
      // Alt + H: Go to home
      if (e.altKey && e.key === 'h') {
        e.preventDefault();
        const homeLink = document.querySelector('a[href*="index.html"], a[href="/"], a[href="./"]');
        if (homeLink) {
          homeLink.click();
        }
      }
      
      // Alt + C: Go to courses
      if (e.altKey && e.key === 'c') {
        e.preventDefault();
        const coursesLink = document.querySelector('a[href*="course.html"]');
        if (coursesLink) {
          coursesLink.click();
        }
      }
      
      // Escape: Close mobile menu or dropdowns
      if (e.key === 'Escape') {
        closeMobileMenu();
        closeAllDropdowns();
      }
    });
  }
  
  /**
   * Dropdown Keyboard Navigation
   * Handles keyboard navigation within dropdown menus
   */
  function initDropdownKeyboardNav() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
      const dropdownLink = dropdown.querySelector('.nav-link');
      const dropdownContent = dropdown.querySelector('.dropdown-content');
      const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
      
      if (!dropdownLink || !dropdownContent) return;
      
      // Handle dropdown toggle with keyboard
      dropdownLink.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleDropdown(dropdown);
          
          // Focus first item if opening
          if (dropdown.classList.contains('active') && dropdownItems.length > 0) {
            setTimeout(() => dropdownItems[0].focus(), 100);
          }
        }
        
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (!dropdown.classList.contains('active')) {
            toggleDropdown(dropdown);
          }
          if (dropdownItems.length > 0) {
            setTimeout(() => dropdownItems[0].focus(), 100);
          }
        }
      });
      
      // Handle navigation within dropdown items
      dropdownItems.forEach((item, index) => {
        item.addEventListener('keydown', function(e) {
          switch (e.key) {
            case 'ArrowDown':
              e.preventDefault();
              const nextIndex = (index + 1) % dropdownItems.length;
              dropdownItems[nextIndex].focus();
              break;
              
            case 'ArrowUp':
              e.preventDefault();
              const prevIndex = (index - 1 + dropdownItems.length) % dropdownItems.length;
              dropdownItems[prevIndex].focus();
              break;
              
            case 'Home':
              e.preventDefault();
              dropdownItems[0].focus();
              break;
              
            case 'End':
              e.preventDefault();
              dropdownItems[dropdownItems.length - 1].focus();
              break;
              
            case 'Escape':
              e.preventDefault();
              closeDropdown(dropdown);
              dropdownLink.focus();
              break;
              
            case 'Tab':
              // Allow normal tab behavior, but close dropdown
              closeDropdown(dropdown);
              break;
          }
        });
      });
    });
  }
  
  /**
   * Mobile Menu Keyboard Navigation
   * Handles keyboard navigation for mobile menu
   */
  function initMobileMenuKeyboardNav() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (!mobileMenuBtn || !navMenu) return;
    
    // Handle mobile menu button keyboard interaction
    mobileMenuBtn.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
        
        // Focus first nav item when opening
        if (navMenu.classList.contains('active')) {
          const firstNavLink = navMenu.querySelector('.nav-link');
          if (firstNavLink) {
            setTimeout(() => firstNavLink.focus(), 100);
          }
        }
      }
    });
    
    // Handle navigation within mobile menu
    const navLinks = navMenu.querySelectorAll('.nav-link, .dropdown-item');
    navLinks.forEach((link, index) => {
      link.addEventListener('keydown', function(e) {
        if (!navMenu.classList.contains('active')) return;
        
        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();
            const nextIndex = (index + 1) % navLinks.length;
            navLinks[nextIndex].focus();
            break;
            
          case 'ArrowUp':
            e.preventDefault();
            const prevIndex = (index - 1 + navLinks.length) % navLinks.length;
            navLinks[prevIndex].focus();
            break;
            
          case 'Home':
            e.preventDefault();
            navLinks[0].focus();
            break;
            
          case 'End':
            e.preventDefault();
            navLinks[navLinks.length - 1].focus();
            break;
            
          case 'Escape':
            e.preventDefault();
            closeMobileMenu();
            mobileMenuBtn.focus();
            break;
        }
      });
    });
  }
  
  /**
   * Card Keyboard Navigation
   * Makes cards keyboard accessible
   */
  function initCardKeyboardNav() {
    const cards = document.querySelectorAll('.course-card, .feature-item, .demographic-card, .girls-empowerment-card');
    
    cards.forEach(card => {
      // Make cards focusable
      if (!card.hasAttribute('tabindex')) {
        card.setAttribute('tabindex', '0');
      }
      
      // Add keyboard interaction
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          
          // Find clickable element within card
          const link = this.querySelector('a');
          const button = this.querySelector('button');
          
          if (link) {
            link.click();
          } else if (button) {
            button.click();
          } else {
            // Trigger click event on card itself
            this.click();
          }
        }
      });
      
      // Add ARIA label if not present
      if (!card.hasAttribute('aria-label') && !card.hasAttribute('aria-labelledby')) {
        const title = card.querySelector('h1, h2, h3, h4, h5, h6');
        if (title) {
          card.setAttribute('aria-labelledby', title.id || generateId('card-title'));
          if (!title.id) {
            title.id = card.getAttribute('aria-labelledby');
          }
        }
      }
    });
  }
  
  /**
   * Form Keyboard Navigation
   * Enhances form keyboard navigation
   */
  function initFormKeyboardNav() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      const formElements = form.querySelectorAll('input, textarea, select, button');
      
      formElements.forEach((element, index) => {
        element.addEventListener('keydown', function(e) {
          // Ctrl + Enter: Submit form
          if (e.ctrlKey && e.key === 'Enter' && element.type !== 'submit') {
            e.preventDefault();
            const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');
            if (submitButton) {
              submitButton.click();
            }
          }
        });
      });
    });
    
    // Enhanced focus management for form validation
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('invalid', function() {
        // Focus first invalid field
        setTimeout(() => {
          const firstInvalid = document.querySelector('input:invalid, textarea:invalid, select:invalid');
          if (firstInvalid) {
            firstInvalid.focus();
            announceToScreenReader(`Please correct the ${firstInvalid.name || 'field'} field`);
          }
        }, 100);
      });
    });
  }
  
  /**
   * Focus Trap for Mobile Menu
   * Traps focus within mobile menu when open
   */
  function initFocusTrap() {
    const navMenu = document.getElementById('navMenu');
    if (!navMenu) return;
    
    // Create focus trap elements
    const focusTrapStart = document.createElement('div');
    const focusTrapEnd = document.createElement('div');
    
    focusTrapStart.className = 'focus-trap-start';
    focusTrapEnd.className = 'focus-trap-end';
    focusTrapStart.tabIndex = 0;
    focusTrapEnd.tabIndex = 0;
    
    navMenu.insertBefore(focusTrapStart, navMenu.firstChild);
    navMenu.appendChild(focusTrapEnd);
    
    // Handle focus trapping
    focusTrapStart.addEventListener('focus', function() {
      if (navMenu.classList.contains('active')) {
        const lastFocusable = getLastFocusableElement(navMenu);
        if (lastFocusable) lastFocusable.focus();
      }
    });
    
    focusTrapEnd.addEventListener('focus', function() {
      if (navMenu.classList.contains('active')) {
        const firstFocusable = getFirstFocusableElement(navMenu);
        if (firstFocusable) firstFocusable.focus();
      }
    });
  }
  
  /**
   * ARIA Live Regions
   * Initialize screen reader announcements
   */
  function initAriaLiveRegions() {
    // Create ARIA live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.className = 'aria-live-region';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    document.body.appendChild(liveRegion);
    
    // Store reference for global use
    window.ariaLiveRegion = liveRegion;
  }
  
  /**
   * Utility Functions
   */
  
  function toggleDropdown(dropdown) {
    const isActive = dropdown.classList.contains('active');
    
    // Close all other dropdowns
    document.querySelectorAll('.dropdown.active').forEach(d => {
      if (d !== dropdown) {
        closeDropdown(d);
      }
    });
    
    // Toggle current dropdown
    dropdown.classList.toggle('active');
    
    // Update ARIA attributes
    const dropdownLink = dropdown.querySelector('.nav-link');
    if (dropdownLink) {
      dropdownLink.setAttribute('aria-expanded', !isActive);
    }
    
    // Announce to screen reader
    if (!isActive) {
      announceToScreenReader('Submenu opened');
    } else {
      announceToScreenReader('Submenu closed');
    }
  }
  
  function closeDropdown(dropdown) {
    dropdown.classList.remove('active');
    const dropdownLink = dropdown.querySelector('.nav-link');
    if (dropdownLink) {
      dropdownLink.setAttribute('aria-expanded', 'false');
    }
  }
  
  function closeAllDropdowns() {
    document.querySelectorAll('.dropdown.active').forEach(dropdown => {
      closeDropdown(dropdown);
    });
  }
  
  function closeMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      if (mobileMenuBtn) {
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
      document.body.style.overflow = '';
      announceToScreenReader('Menu closed');
    }
  }
  
  function getFirstFocusableElement(container) {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    return focusableElements[0];
  }
  
  function getLastFocusableElement(container) {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    return focusableElements[focusableElements.length - 1];
  }
  
  function generateId(prefix) {
    return prefix + '-' + Math.random().toString(36).substr(2, 9);
  }
  
  function announceToScreenReader(message) {
    if (window.ariaLiveRegion) {
      window.ariaLiveRegion.textContent = message;
      // Clear after announcement
      setTimeout(() => {
        window.ariaLiveRegion.textContent = '';
      }, 1000);
    }
  }
  
  /**
   * Update tab indices for mobile menu
   */
  function updateMobileMenuTabIndices() {
    const navMenu = document.getElementById('navMenu');
    if (!navMenu) return;
    
    const navLinks = navMenu.querySelectorAll('.nav-link, .dropdown-item');
    const isActive = navMenu.classList.contains('active');
    
    navLinks.forEach(link => {
      if (window.innerWidth < 768) {
        link.tabIndex = isActive ? 0 : -1;
      } else {
        link.tabIndex = 0;
      }
    });
  }
  
  // Update tab indices on window resize
  window.addEventListener('resize', updateMobileMenuTabIndices);
  
  // Update tab indices when mobile menu state changes
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        const target = mutation.target;
        if (target.id === 'navMenu') {
          updateMobileMenuTabIndices();
        }
      }
    });
  });
  
  const navMenu = document.getElementById('navMenu');
  if (navMenu) {
    observer.observe(navMenu, { attributes: true });
  }
  
})();


/**
 * Enhanced Mobile Tabs System
 * Improves tab functionality for mobile devices with better UX for parents
 */

(function() {
    'use strict';
    
    console.log('[Mobile Tabs] Initializing enhanced tab system...');
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initEnhancedTabs);
    } else {
        initEnhancedTabs();
    }
    
    function initEnhancedTabs() {
        console.log('[Mobile Tabs] DOM ready, setting up tabs...');
        
        // Find all tab wrappers
        const tabWrappers = document.querySelectorAll('.tabs-wrapper');
        
        tabWrappers.forEach(wrapper => {
            setupTabWrapper(wrapper);
        });
        
        // Add smooth scrolling for mobile tab switching
        addSmoothScrolling();
        
        console.log('[Mobile Tabs] Enhanced tab system initialized');
    }
    
    function setupTabWrapper(wrapper) {
        const tabButtons = wrapper.querySelectorAll('.tab-button');
        const tabContents = wrapper.querySelectorAll('.tab-content');
        
        if (tabButtons.length === 0 || tabContents.length === 0) {
            console.warn('[Mobile Tabs] No tab buttons or contents found in wrapper');
            return;
        }
        
        console.log(`[Mobile Tabs] Setting up wrapper with ${tabButtons.length} tabs`);
        
        // Add click handlers to tab buttons
        tabButtons.forEach((button, index) => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('data-target');
                console.log(`[Mobile Tabs] Tab clicked: ${targetId}`);
                
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Show corresponding content
                const targetContent = document.querySelector(targetId);
                if (targetContent) {
                    targetContent.classList.add('active');
                    
                    // Smooth scroll to content on mobile
                    if (window.innerWidth <= 768) {
                        setTimeout(() => {
                            targetContent.scrollIntoView({
                                behavior: 'smooth',
                                block: 'nearest'
                            });
                        }, 100);
                    }
                } else {
                    console.warn(`[Mobile Tabs] Target content not found: ${targetId}`);
                }
                
                // Add haptic feedback on mobile (if supported)
                if ('vibrate' in navigator && window.innerWidth <= 768) {
                    navigator.vibrate(50);
                }
            });
            
            // Add touch feedback
            button.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            }, { passive: true });
            
            button.addEventListener('touchend', function() {
                this.style.transform = '';
            }, { passive: true });
            
            button.addEventListener('touchcancel', function() {
                this.style.transform = '';
            }, { passive: true });
        });
        
        // Keyboard navigation support
        wrapper.addEventListener('keydown', function(e) {
            const activeButton = wrapper.querySelector('.tab-button.active');
            const buttons = Array.from(wrapper.querySelectorAll('.tab-button'));
            const currentIndex = buttons.indexOf(activeButton);
            
            let newIndex = currentIndex;
            
            switch(e.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    newIndex = currentIndex > 0 ? currentIndex - 1 : buttons.length - 1;
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                    e.preventDefault();
                    newIndex = currentIndex < buttons.length - 1 ? currentIndex + 1 : 0;
                    break;
                case 'Home':
                    e.preventDefault();
                    newIndex = 0;
                    break;
                case 'End':
                    e.preventDefault();
                    newIndex = buttons.length - 1;
                    break;
            }
            
            if (newIndex !== currentIndex) {
                buttons[newIndex].click();
                buttons[newIndex].focus();
            }
        });
    }
    
    function addSmoothScrolling() {
        // Add smooth scrolling behavior for better mobile experience
        const style = document.createElement('style');
        style.textContent = `
            html {
                scroll-behavior: smooth;
            }
            
            @media (prefers-reduced-motion: reduce) {
                html {
                    scroll-behavior: auto;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Handle window resize to adjust tab behavior
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            console.log('[Mobile Tabs] Window resized, adjusting tab behavior');
            
            // Re-initialize if switching between mobile and desktop
            const isMobile = window.innerWidth <= 768;
            const tabWrappers = document.querySelectorAll('.tabs-wrapper');
            
            tabWrappers.forEach(wrapper => {
                const container = wrapper.querySelector('.tabs-container');
                if (container) {
                    // Adjust scroll position for horizontal tabs on desktop
                    if (!isMobile) {
                        container.scrollLeft = 0;
                    }
                }
            });
        }, 250);
    });
    
    // Add intersection observer for tab content visibility
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });
        
        // Observe all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            observer.observe(content);
        });
    }
    
})();



/**
 * Mobile Navigation System
 * Handles hamburger menu, dropdowns, and mobile-specific navigation behavior
 */

(function () {
  'use strict';

  console.log('[Mobile Nav] Script loaded');

  // CRITICAL FIX: Wait for components to be loaded first
  // The navigation HTML is injected dynamically by components-loader.js
  // We must wait for the 'componentsLoaded' event before initializing

  function waitForComponents() {
    console.log('[Mobile Nav] Waiting for components to load...');

    // Listen for the componentsLoaded event
    document.addEventListener('componentsLoaded', function () {
      console.log('[Mobile Nav] Components loaded event received');
      // Add a small delay to ensure DOM is fully updated
      setTimeout(initMobileNavigation, 100);
    });

    // Fallback: If event already fired or doesn't fire, try after delay
    setTimeout(function () {
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      if (mobileMenuBtn && !window.__mobileNavInitialized) {
        console.log('[Mobile Nav] Fallback initialization triggered');
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
    if (window.__mobileNavInitialized) {
      console.log('[Mobile Nav] Already initialized, skipping');
      return;
    }

    // CRITICAL: Skip if unified-mobile-nav is already handling navigation
    // This prevents conflicts between the two scripts
    if (window.__unifiedMobileNavInitialized) {
      console.log('[Mobile Nav] Unified Mobile Nav already initialized, skipping this script');
      return;
    }

    console.log('[Mobile Nav] Initializing...');

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const body = document.body;
    const dropdowns = document.querySelectorAll('.dropdown');

    if (!mobileMenuBtn || !navMenu) {
      console.error('[Mobile Nav] Required elements not found!', {
        mobileMenuBtn: !!mobileMenuBtn,
        navMenu: !!navMenu
      });
      return;
    }

    console.log('[Mobile Nav] Elements found successfully');
    window.__mobileNavInitialized = true;

    // Hamburger menu toggle
    mobileMenuBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleMobileMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (navMenu.classList.contains('active')) {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
          closeMobileMenu();
        }
      }
    });

    // Close menu when clicking on a link (except dropdowns)
    const navLinks = navMenu.querySelectorAll('.nav-link:not(.dropdown > .nav-link)');
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        if (window.innerWidth < 768) {
          closeMobileMenu();
        }
      });
    });

    // Handle dropdown toggles on mobile
    dropdowns.forEach(dropdown => {
      const dropdownLink = dropdown.querySelector('.nav-link');
      const dropdownContent = dropdown.querySelector('.dropdown-content');

      if (dropdownLink && dropdownContent) {
        dropdownLink.addEventListener('click', function (e) {
          if (window.innerWidth < 768) {
            e.preventDefault();
            e.stopPropagation();
            toggleDropdown(dropdown);
          }
        });

        // Close dropdown when clicking on dropdown item
        const dropdownItems = dropdownContent.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
          item.addEventListener('click', function () {
            if (window.innerWidth < 768) {
              closeMobileMenu();
            }
          });
        });
      }
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (window.innerWidth >= 768) {
          // Desktop view - ensure menu is reset
          navMenu.classList.remove('active');
          mobileMenuBtn.classList.remove('active');
          body.style.overflow = '';

          // Close all dropdowns
          dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
          });
        }
      }, 250);
    });

    // Prevent body scroll when menu is open
    function preventBodyScroll() {
      const scrollY = window.scrollY;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.width = '100%';
    }

    function allowBodyScroll() {
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    function toggleMobileMenu() {
      const isActive = navMenu.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');

      if (isActive) {
        preventBodyScroll();
        // Add ARIA attributes
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        navMenu.setAttribute('aria-hidden', 'false');
      } else {
        allowBodyScroll();
        // Update ARIA attributes
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        navMenu.setAttribute('aria-hidden', 'true');

        // Close all dropdowns when closing menu
        dropdowns.forEach(dropdown => {
          dropdown.classList.remove('active');
        });
      }
    }

    function closeMobileMenu() {
      navMenu.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
      allowBodyScroll();

      // Update ARIA attributes
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      navMenu.setAttribute('aria-hidden', 'true');

      // Close all dropdowns
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }

    function toggleDropdown(dropdown) {
      const isActive = dropdown.classList.contains('active');

      // Close all other dropdowns
      dropdowns.forEach(d => {
        if (d !== dropdown) {
          d.classList.remove('active');
        }
      });

      // Toggle current dropdown
      dropdown.classList.toggle('active');

      // Update ARIA attributes
      const dropdownLink = dropdown.querySelector('.nav-link');
      if (dropdownLink) {
        dropdownLink.setAttribute('aria-expanded', !isActive);
      }
    }

    // Initialize ARIA attributes
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenuBtn.setAttribute('aria-label', 'Toggle navigation menu');
    mobileMenuBtn.setAttribute('aria-controls', 'navMenu');
    navMenu.setAttribute('aria-hidden', 'true');

    // Add ARIA to dropdowns
    dropdowns.forEach(dropdown => {
      const dropdownLink = dropdown.querySelector('.nav-link');
      const dropdownContent = dropdown.querySelector('.dropdown-content');

      if (dropdownLink && dropdownContent) {
        dropdownLink.setAttribute('aria-haspopup', 'true');
        dropdownLink.setAttribute('aria-expanded', 'false');

        // Generate unique ID for dropdown content
        const dropdownId = 'dropdown-' + Math.random().toString(36).substr(2, 9);
        dropdownContent.setAttribute('id', dropdownId);
        dropdownLink.setAttribute('aria-controls', dropdownId);
      }
    });

    // Add visual feedback for touch interactions
    const touchElements = document.querySelectorAll('button, a, .btn, .cta-button, .card-button');
    touchElements.forEach(element => {
      element.addEventListener('touchstart', function () {
        this.style.opacity = '0.7';
      }, { passive: true });

      element.addEventListener('touchend', function () {
        this.style.opacity = '';
      }, { passive: true });

      element.addEventListener('touchcancel', function () {
        this.style.opacity = '';
      }, { passive: true });
    });

    console.log('[Mobile Nav] Initialized successfully');
  }
})();

// ====== TESTIMONIALS CAROUSEL FUNCTIONALITY ======

class TestimonialsCarousel {
    constructor() {
        this.track = document.querySelector('.testimonials-track');
        this.cards = document.querySelectorAll('.testimonial-card');
        this.leftArrow = document.querySelector('.carousel-arrow-left');
        this.rightArrow = document.querySelector('.carousel-arrow-right');
        this.dotsContainer = document.querySelector('.carousel-dots');
        
        this.currentIndex = 0;
        this.cardsPerView = this.getCardsPerView();
        this.totalSlides = Math.ceil(this.cards.length / this.cardsPerView);
        this.isAnimating = false;
        this.autoplayInterval = null;
        this.autoplayDelay = 5000;
        
        this.init();
    }
    
    init() {
        if (!this.track || this.cards.length === 0) return;
        
        this.createDots();
        this.updateDots();
        this.attachEventListeners();
        this.startAutoplay();
        
        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                this.handleResize();
            }, 250);
        });
        
        // Pause autoplay on hover
        const container = document.querySelector('.testimonials-carousel-container');
        if (container) {
            container.addEventListener('mouseenter', () => this.stopAutoplay());
            container.addEventListener('mouseleave', () => this.startAutoplay());
        }
        
        // Touch support
        this.addTouchSupport();
    }
    
    getCardsPerView() {
        const width = window.innerWidth;
        if (width < 768) return 1;
        return 2;
    }
    
    createDots() {
        if (!this.dotsContainer) return;
        
        this.dotsContainer.innerHTML = '';
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dotsContainer.appendChild(dot);
        }
    }
    
    updateDots() {
        const dots = this.dotsContainer?.querySelectorAll('.carousel-dot');
        if (!dots) return;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    attachEventListeners() {
        if (this.leftArrow) {
            this.leftArrow.addEventListener('click', () => this.prev());
        }
        
        if (this.rightArrow) {
            this.rightArrow.addEventListener('click', () => this.next());
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
    }
    
    addTouchSupport() {
        let touchStartX = 0;
        let touchEndX = 0;
        let touchStartY = 0;
        let touchEndY = 0;
        
        this.track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });
        
        this.track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            this.handleSwipe(touchStartX, touchEndX, touchStartY, touchEndY);
        }, { passive: true });
    }
    
    handleSwipe(startX, endX, startY, endY) {
        const diffX = startX - endX;
        const diffY = Math.abs(startY - endY);
        const threshold = 50;
        
        // Only trigger if horizontal swipe is more significant than vertical
        if (Math.abs(diffX) > threshold && Math.abs(diffX) > diffY) {
            if (diffX > 0) {
                this.next();
            } else {
                this.prev();
            }
        }
    }
    
    goToSlide(index) {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        this.currentIndex = index;
        
        const offset = -this.currentIndex * 100;
        this.track.style.transform = `translateX(${offset}%)`;
        
        this.updateDots();
        this.updateArrows();
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 500);
        
        this.resetAutoplay();
    }
    
    next() {
        if (this.isAnimating) return;
        
        const nextIndex = (this.currentIndex + 1) % this.totalSlides;
        this.goToSlide(nextIndex);
    }
    
    prev() {
        if (this.isAnimating) return;
        
        const prevIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prevIndex);
    }
    
    updateArrows() {
        // Optional: disable arrows at start/end if you don't want infinite loop
        // For now, we keep infinite loop enabled
    }
    
    handleResize() {
        const newCardsPerView = this.getCardsPerView();
        
        if (newCardsPerView !== this.cardsPerView) {
            this.cardsPerView = newCardsPerView;
            this.totalSlides = Math.ceil(this.cards.length / this.cardsPerView);
            
            // Reset to first slide if current index is out of bounds
            if (this.currentIndex >= this.totalSlides) {
                this.currentIndex = 0;
            }
            
            this.createDots();
            this.goToSlide(this.currentIndex);
        }
    }
    
    startAutoplay() {
        this.stopAutoplay();
        this.autoplayInterval = setInterval(() => {
            this.next();
        }, this.autoplayDelay);
    }
    
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
    
    resetAutoplay() {
        this.stopAutoplay();
        this.startAutoplay();
    }
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const carousel = new TestimonialsCarousel();
});

// Certificate Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.certificate-track');
    const leftArrow = document.querySelector('.certificate-arrow-left');
    const rightArrow = document.querySelector('.certificate-arrow-right');
    const images = document.querySelectorAll('.certificate-image');
    
    if (!track || !leftArrow || !rightArrow || images.length === 0) {
        return;
    }
    
    let currentIndex = 0;
    const totalImages = images.length;
    
    function updateCarousel() {
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
    }
    
    function goToNext() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }
    
    function goToPrevious() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    }
    
    // Arrow click handlers
    rightArrow.addEventListener('click', goToNext);
    leftArrow.addEventListener('click', goToPrevious);
    
    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    track.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                goToNext();
            } else {
                goToPrevious();
            }
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            goToPrevious();
        } else if (e.key === 'ArrowRight') {
            goToNext();
        }
    });
});


/**
 * Callback Modal - Global Functions
 * Must be loaded before nav component
 */

// Global functions for callback modal
window.openCallbackModal = function() {
    console.log('Opening callback modal');
    var modal = document.getElementById('callbackModalOverlay');
    var form = document.getElementById('callbackForm');
    var success = document.getElementById('callbackSuccessMsg');
    var phone = document.getElementById('callbackPhoneInput');
    
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        if (form) form.style.display = 'flex';
        if (success) success.style.display = 'none';
        if (phone) { phone.value = ''; phone.focus(); }
    } else {
        console.error('Modal not found!');
    }
};

window.closeCallbackModal = function() {
    console.log('Closing callback modal');
    var modal = document.getElementById('callbackModalOverlay');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
};

window.submitCallback = function(e) {
    e.preventDefault();
    console.log('Submitting callback');
    
    var phoneInput = document.getElementById('callbackPhoneInput');
    var phone = phoneInput ? phoneInput.value.replace(/\D/g, '') : '';
    var btn = document.getElementById('callbackSubmitBtn');
    var form = document.getElementById('callbackForm');
    var success = document.getElementById('callbackSuccessMsg');
    
    if (phone.length !== 10) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }
    
    if (btn) {
        btn.disabled = true;
        btn.textContent = 'Sending...';
    }
    
    var API_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') 
        ? 'http://localhost:5000' : 'https://backend-modernagecoders.vercel.app';
    
    fetch(API_URL + '/api/callback/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: phone })
    })
    .then(function(response) { return response.json(); })
    .then(function(data) {
        console.log('Response:', data);
        if (data.success) {
            if (form) form.style.display = 'none';
            if (success) success.style.display = 'block';
            setTimeout(window.closeCallbackModal, 3000);
        } else {
            alert(data.message || 'Something went wrong. Please try again.');
        }
    })
    .catch(function(error) {
        console.error('Error:', error);
        alert('Network error. Please try again.');
    })
    .finally(function() {
        if (btn) {
            btn.disabled = false;
            btn.textContent = 'Call Me Back';
        }
    });
};

// Event listeners
document.addEventListener('click', function(e) {
    var modal = document.getElementById('callbackModalOverlay');
    if (e.target === modal) {
        window.closeCallbackModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        window.closeCallbackModal();
    }
});

document.addEventListener('input', function(e) {
    if (e.target && e.target.id === 'callbackPhoneInput') {
        e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
    }
});

console.log('✅ Callback modal script loaded');
