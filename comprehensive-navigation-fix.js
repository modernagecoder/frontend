// Comprehensive Navigation Fix for Modern Age Coders
// This script ensures consistent navigation behavior across all pages

(function() {
    'use strict';

    // Wait for DOM to be ready
    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    ready(function() {
        // Fix logo links to ensure they always go to home
        const logoLinks = document.querySelectorAll('.logo');
        logoLinks.forEach(logo => {
            if (logo.tagName === 'A') {
                logo.href = 'index.html';
            }
        });

        // Fix all navigation links to use correct paths
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href) {
                // Fix common path issues
                if (href === 'courses.html') {
                    link.href = 'course.html';
                }
                // Ensure relative paths for same-directory pages
                if (href.startsWith('/') && !href.includes('content/') && !href.includes('favicon/')) {
                    const filename = href.substring(1);
                    if (filename.endsWith('.html')) {
                        link.href = filename;
                    }
                }
            }
        });

        // Fix dropdown links
        const dropdownLinks = document.querySelectorAll('.dropdown-item');
        dropdownLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href === 'courses.html') {
                link.href = 'course.html';
            }
        });

        // Ensure mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.getElementById('navMenu');
        
        if (mobileMenuBtn && navMenu) {
            mobileMenuBtn.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                mobileMenuBtn.classList.toggle('active');
                
                // Ensure courses dropdown is visible on mobile
                const coursesDropdown = navMenu.querySelector('.dropdown');
                if (coursesDropdown && window.innerWidth <= 900) {
                    coursesDropdown.style.display = 'block';
                    coursesDropdown.style.visibility = 'visible';
                    coursesDropdown.style.opacity = '1';
                }
            });
        }

        // Handle dropdown functionality
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            
            if (dropdownContent) {
                // Desktop hover
                dropdown.addEventListener('mouseenter', function() {
                    if (window.innerWidth > 900) {
                        dropdownContent.style.display = 'block';
                        dropdownContent.style.opacity = '1';
                        dropdownContent.style.visibility = 'visible';
                    }
                });
                
                dropdown.addEventListener('mouseleave', function() {
                    if (window.innerWidth > 900) {
                        dropdownContent.style.display = 'none';
                        dropdownContent.style.opacity = '0';
                        dropdownContent.style.visibility = 'hidden';
                    }
                });

                // Mobile click
                const dropdownLink = dropdown.querySelector('.nav-link');
                if (dropdownLink) {
                    dropdownLink.addEventListener('click', function(e) {
                        if (window.innerWidth <= 900) {
                            e.preventDefault();
                            const isVisible = dropdownContent.style.display === 'block';
                            dropdownContent.style.display = isVisible ? 'none' : 'block';
                            dropdownContent.style.opacity = isVisible ? '0' : '1';
                            dropdownContent.style.visibility = isVisible ? 'hidden' : 'visible';
                        }
                    });
                }
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navMenu && !navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navMenu.classList.remove('active');
                if (mobileMenuBtn) {
                    mobileMenuBtn.classList.remove('active');
                }
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 900) {
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
                if (mobileMenuBtn) {
                    mobileMenuBtn.classList.remove('active');
                }
                
                // Reset dropdown styles for desktop
                const dropdownContents = document.querySelectorAll('.dropdown-content');
                dropdownContents.forEach(content => {
                    content.style.display = '';
                    content.style.opacity = '';
                    content.style.visibility = '';
                });
            }
        });

        // Ensure courses dropdown is always visible on mobile
        function ensureCoursesVisible() {
            const coursesDropdown = document.querySelector('.nav-item.dropdown');
            if (coursesDropdown && window.innerWidth <= 900) {
                coursesDropdown.style.display = 'block';
                coursesDropdown.style.visibility = 'visible';
                coursesDropdown.style.opacity = '1';
                
                const coursesLink = coursesDropdown.querySelector('.nav-link');
                if (coursesLink) {
                    coursesLink.style.display = 'flex';
                    coursesLink.style.visibility = 'visible';
                    coursesLink.style.opacity = '1';
                }
            }
        }

        // Run courses visibility fix
        ensureCoursesVisible();
        window.addEventListener('resize', ensureCoursesVisible);

        console.log('Comprehensive navigation fix applied successfully');
    });
})();