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
