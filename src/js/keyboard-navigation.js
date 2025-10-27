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