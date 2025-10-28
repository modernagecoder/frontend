/**
 * Emergency Navigation Fix for Mobile
 * This ensures Courses navigation works on mobile devices
 */

(function() {
    'use strict';
    
    console.log('[Emergency Fix] Loading mobile navigation fix...');
    
    function fixMobileNavigation() {
        // Find all dropdown links (like Courses)
        const dropdownLinks = document.querySelectorAll('.dropdown .nav-link');
        
        dropdownLinks.forEach(link => {
            const href = link.getAttribute('href');
            
            // Only fix links that have real URLs (not # or javascript:)
            if (href && href !== '#' && !href.startsWith('javascript:')) {
                console.log('[Emergency Fix] Fixing navigation for:', link.textContent.trim(), 'href:', href);
                
                // Remove any existing click listeners by cloning the element
                const newLink = link.cloneNode(true);
                link.parentNode.replaceChild(newLink, link);
                
                // Add our own click handler
                newLink.addEventListener('click', function(e) {
                    const isMobile = window.innerWidth <= 900;
                    const menuOpen = document.getElementById('navMenu')?.classList.contains('active');
                    
                    if (isMobile && menuOpen) {
                        console.log('[Emergency Fix] Mobile navigation click detected, allowing navigation to:', href);
                        
                        // Close the mobile menu
                        const navMenu = document.getElementById('navMenu');
                        const mobileBtn = document.getElementById('mobileMenuBtn');
                        
                        if (navMenu && mobileBtn) {
                            navMenu.classList.remove('active');
                            mobileBtn.classList.remove('active');
                            mobileBtn.classList.remove('open');
                            document.body.classList.remove('mobile-menu-open');
                            document.body.style.overflow = '';
                        }
                        
                        // Allow navigation to proceed
                        // Don't prevent default - let the browser navigate
                        console.log('[Emergency Fix] Navigation allowed, menu closed');
                    }
                });
            }
        });
    }
    
    // Run the fix when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fixMobileNavigation);
    } else {
        fixMobileNavigation();
    }
    
    // Also run when the mobile menu opens
    document.addEventListener('click', function(e) {
        if (e.target.closest('#mobileMenuBtn')) {
            setTimeout(fixMobileNavigation, 200);
        }
    });
    
    console.log('[Emergency Fix] Mobile navigation fix loaded');
})();