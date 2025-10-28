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