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
            
            // Remove any existing active class
            link.classList.remove('active');
            
            // Check if this link matches the current page
            if (href) {
                const linkPage = href.split('/').pop().split('?')[0].split('#')[0];
                
                // Handle different page matches
                if (currentPage === linkPage || 
                    (currentPage === '' && linkPage === 'index.html') ||
                    (currentPage === 'index.html' && linkPage === 'index.html')) {
                    link.classList.add('active');
                }
                
                // Special handling for blog
                if (currentPath.includes('/blog') && href.includes('/blog')) {
                    link.classList.add('active');
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
                    }
                }
            }
        });
    }
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('open');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnButton = mobileMenuBtn.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnButton && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('open');
            }
        });
        
        // Close mobile menu when clicking on a link
        const navItems = navMenu.querySelectorAll('.nav-link');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    mobileMenuBtn.classList.remove('open');
                }
            });
        });
    }
    
    // Handle dropdown on mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('.nav-link');
        
        if (dropdownLink && window.innerWidth <= 768) {
            dropdownLink.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
        }
    });
    
    // Initialize active state on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setActiveNavLink);
    } else {
        setActiveNavLink();
    }
    
    // Update active state on hash change (for single-page navigation)
    window.addEventListener('hashchange', setActiveNavLink);
    
})();
