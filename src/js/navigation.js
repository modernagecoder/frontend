// Navigation Active State Handler
// This script highlights the current page in the navigation menu

(function() {
    'use strict';

    // Get current page path
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Function to set active state
    function setActiveNavLink() {
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            
            // Remove any existing active class and aria-current
            link.classList.remove('active');
            link.removeAttribute('aria-current');
            
            // Check if this link matches the current page
            if (href) {
                const linkPage = href.split('/').pop().split('?')[0].split('#')[0];
                
                // Handle different page matches
                if (currentPage === linkPage || 
                    (currentPage === '' && linkPage === 'index.html') ||
                    (currentPage === 'index.html' && linkPage === 'index.html')) {
                    link.classList.add('active');
                    link.setAttribute('aria-current', 'page');
                }
                
                // Special handling for blog
                if (currentPath.includes('/blog') && href.includes('/blog')) {
                    link.classList.add('active');
                    link.setAttribute('aria-current', 'page');
                }
                
                // Special handling for courses
                if ((currentPath.includes('course') || currentPath.includes('.html')) && 
                    href.includes('course.html') && 
                    !currentPath.includes('index.html') &&
                    !currentPath.includes('about.html') &&
                    !currentPath.includes('blog')) {
                    // Only activate if we're on a course-related page
                    const isCourseRelated = currentPage.includes('course') || 
                                          currentPage.match(/-(coding|web|python|fullstack|ai|mobile|data|game)/);
                    if (isCourseRelated) {
                        link.classList.add('active');
                        link.setAttribute('aria-current', 'page');
                    }
                }
            }
        });
    }
    
    // Mobile menu toggle - CRITICAL FIX: Wait for components to load
    function initMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.getElementById('navMenu');
        
        if (!mobileMenuBtn || !navMenu) {
            console.warn('[Navigation] Mobile menu elements not found yet');
            return false;
        }
        
        console.log('[Navigation] Mobile menu initialized');
        
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('open');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnButton = mobileMenuBtn.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnButton && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
        
        // Close mobile menu when clicking on a non-dropdown link
        const navItems = navMenu.querySelectorAll('.nav-link');
        navItems.forEach(item => {
            item.addEventListener('click', function(e) {
                // Don't close if it's a dropdown parent
                const parentDropdown = item.closest('.dropdown');
                if (parentDropdown && window.innerWidth <= 900) {
                    return; // Let dropdown handler manage this
                }
                
                // Close menu for regular links
                if (window.innerWidth <= 900) {
                    navMenu.classList.remove('active');
                    mobileMenuBtn.classList.remove('open');
                    document.body.style.overflow = '';
                }
            });
        });
        
        return true;
    }
    
    // Try to initialize mobile menu immediately
    if (!initMobileMenu()) {
        // If failed, wait for components to load
        console.log('[Navigation] Waiting for components to load...');
        document.addEventListener('componentsLoaded', function() {
            console.log('[Navigation] Components loaded, initializing mobile menu');
            setTimeout(initMobileMenu, 100);
        });
        
        // Fallback
        setTimeout(function() {
            if (document.getElementById('mobileMenuBtn')) {
                initMobileMenu();
            }
        }, 1000);
    }
    
    // Handle dropdown on mobile and desktop
    function initDropdowns() {
        const dropdowns = document.querySelectorAll('.dropdown');
        const navMenu = document.getElementById('navMenu');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');

        dropdowns.forEach(dropdown => {
            const dropdownLink = dropdown.querySelector('.nav-link');
            const dropdownContent = dropdown.querySelector('.dropdown-content');

            if (dropdownLink && dropdownContent) {
                // Initialize ARIA attributes for dropdown toggles
                dropdownLink.setAttribute('aria-haspopup', 'true');
                dropdownLink.setAttribute('aria-expanded', 'false');

                // Generate unique ID for dropdown content
                const dropdownId = 'dropdown-' + Math.random().toString(36).substr(2, 9);
                dropdownContent.setAttribute('id', dropdownId);
                dropdownLink.setAttribute('aria-controls', dropdownId);

                // Handle mobile dropdown clicks - MUST toggle dropdown, not navigate
                dropdownLink.addEventListener('click', function(e) {
                    if (window.innerWidth <= 900) {
                        e.preventDefault();
                        e.stopPropagation();

                        // Close other dropdowns
                        dropdowns.forEach(otherDropdown => {
                            if (otherDropdown !== dropdown) {
                                otherDropdown.classList.remove('active');
                                const otherLink = otherDropdown.querySelector('.nav-link');
                                if (otherLink) {
                                    otherLink.setAttribute('aria-expanded', 'false');
                                }
                            }
                        });

                        // Toggle current dropdown
                        const isActive = dropdown.classList.toggle('active');
                        dropdownLink.setAttribute('aria-expanded', isActive.toString());
                    }
                    // On desktop, allow normal navigation (hover shows dropdown)
                });

                // Desktop: keep dropdown open with slight delay for better UX
                let hideTimeout;

                dropdown.addEventListener('mouseenter', function() {
                    if (window.innerWidth > 900) {
                        clearTimeout(hideTimeout);
                        dropdown.classList.add('dropdown-open');
                        dropdownLink.setAttribute('aria-expanded', 'true');
                    }
                });

                dropdown.addEventListener('mouseleave', function() {
                    if (window.innerWidth > 900) {
                        hideTimeout = setTimeout(function() {
                            dropdown.classList.remove('dropdown-open');
                            dropdownLink.setAttribute('aria-expanded', 'false');
                        }, 150);
                    }
                });

                // Keep dropdown open when hovering over dropdown content
                dropdownContent.addEventListener('mouseenter', function() {
                    if (window.innerWidth > 900) {
                        clearTimeout(hideTimeout);
                    }
                });

                dropdownContent.addEventListener('mouseleave', function() {
                    if (window.innerWidth > 900) {
                        hideTimeout = setTimeout(function() {
                            dropdown.classList.remove('dropdown-open');
                            dropdownLink.setAttribute('aria-expanded', 'false');
                        }, 150);
                    }
                });
            }

            // Close dropdown and mobile menu when clicking on dropdown items
            const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
            dropdownItems.forEach(item => {
                item.addEventListener('click', function() {
                    if (window.innerWidth <= 900) {
                        if (navMenu) navMenu.classList.remove('active');
                        if (mobileMenuBtn) mobileMenuBtn.classList.remove('open');
                        document.body.style.overflow = '';
                    }
                });
            });
        });
    }

    initDropdowns();
    
    // Initialize active state on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setActiveNavLink);
    } else {
        setActiveNavLink();
    }
    
    // Update active state on hash change (for single-page navigation)
    window.addEventListener('hashchange', setActiveNavLink);
    
})();
