/**
 * Mobile Navigation System
 * Handles hamburger menu, dropdowns, and mobile-specific navigation behavior
 */

(function() {
  'use strict';
  
  let initialized = false;
  
  // Wait for components to be loaded first
  document.addEventListener('componentsLoaded', function() {
    console.log('[Mobile Nav] 🎯 Components loaded event received!');
    setTimeout(function() {
      if (!initialized) {
        initMobileNavigation();
      }
    }, 200); // Give DOM time to settle
  });
  
  function initMobileNavigation() {
    console.log('[Mobile Nav] 🔍 Looking for navigation elements...');
    
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const body = document.body;
    
    console.log('[Mobile Nav] mobileMenuBtn:', mobileMenuBtn);
    console.log('[Mobile Nav] navMenu:', navMenu);
    
    if (!mobileMenuBtn || !navMenu) {
      console.error('[Mobile Nav] ❌ Required elements not found!');
      console.log('[Mobile Nav] Available IDs:', Array.from(document.querySelectorAll('[id]')).map(el => el.id));
      return;
    }
    
    initialized = true;
    console.log('[Mobile Nav] ✅ Elements found, setting up handlers...');
    
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Hamburger menu toggle
    mobileMenuBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      console.log('[Mobile Nav] Hamburger clicked');
      toggleMobileMenu();
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (navMenu.classList.contains('active')) {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
          console.log('[Mobile Nav] Clicked outside, closing menu');
          closeMobileMenu();
        }
      }
    });
    
    // Close menu when clicking on a link (except dropdowns)
    const navLinks = navMenu.querySelectorAll('.nav-link:not(.dropdown > .nav-link)');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 900) {
          console.log('[Mobile Nav] Nav link clicked, closing menu');
          closeMobileMenu();
        }
      });
    });
    
    // Handle dropdown toggles on mobile
    dropdowns.forEach(dropdown => {
      const dropdownLink = dropdown.querySelector('.nav-link');
      const dropdownContent = dropdown.querySelector('.dropdown-content');
      
      if (dropdownLink && dropdownContent) {
        dropdownLink.addEventListener('click', function(e) {
          if (window.innerWidth <= 900) {
            e.preventDefault();
            e.stopPropagation();
            console.log('[Mobile Nav] Dropdown toggled');
            toggleDropdown(dropdown);
          }
        });
        
        // Close dropdown when clicking on dropdown item
        const dropdownItems = dropdownContent.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
          item.addEventListener('click', function() {
            if (window.innerWidth <= 900) {
              console.log('[Mobile Nav] Dropdown item clicked, closing menu');
              closeMobileMenu();
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
          body.classList.remove('mobile-menu-open');
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
      body.classList.add('mobile-menu-open');
      const scrollY = window.scrollY;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.width = '100%';
    }
    
    function allowBodyScroll() {
      body.classList.remove('mobile-menu-open');
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    
    function toggleMobileMenu() {
      const isActive = navMenu.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
      
      console.log('[Mobile Nav] Menu toggled, active:', isActive);
      
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
      
      console.log('[Mobile Nav] Menu closed');
      
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
    
    console.log('[Mobile Nav] Initialized successfully');
  }
})();
