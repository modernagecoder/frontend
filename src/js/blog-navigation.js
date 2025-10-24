// Blog Navigation JavaScript
// Handles navigation and interactions for Modern Age Coders blog pages

document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize reading progress indicator (if on blog detail page)
    if (document.body.classList.contains('blog-detail-page')) {
        initializeReadingProgress();
    }
    
    // Initialize blog card navigation
    initializeBlogCardNavigation();
});

/**
 * Initialize mobile menu toggle
 */
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('open');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-container')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('open');
            }
        });
    }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/**
 * Initialize reading progress indicator
 */
function initializeReadingProgress() {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.innerHTML = '<div class="reading-progress-bar"></div>';
    document.body.appendChild(progressBar);
    
    const progressBarFill = progressBar.querySelector('.reading-progress-bar');
    
    // Update progress on scroll
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;
        
        progressBarFill.style.width = Math.min(progress, 100) + '%';
    });
}

/**
 * Initialize blog card click navigation
 */
function initializeBlogCardNavigation() {
    const blogCards = document.querySelectorAll('.blog-card[data-blog-url]');
    
    blogCards.forEach(card => {
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', function(e) {
            // Don't navigate if clicking on a button or link
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || 
                e.target.closest('a') || e.target.closest('button')) {
                return;
            }
            
            const blogUrl = this.getAttribute('data-blog-url');
            if (blogUrl) {
                // Check if we're on the listing page or a blog post page
                if (window.location.pathname.includes('/blog/generated/')) {
                    // We're on a blog post page, navigate to sibling
                    window.location.href = `../${blogUrl}/`;
                } else {
                    // We're on the listing page
                    window.location.href = `generated/${blogUrl}/`;
                }
            }
        });
    });
}

// Add CSS for reading progress bar
const style = document.createElement('style');
style.textContent = `
    .reading-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: rgba(255, 255, 255, 0.1);
        z-index: 10000;
    }
    
    .reading-progress-bar {
        height: 100%;
        background: linear-gradient(90deg, #8A2BE2, #4ecdc4);
        width: 0%;
        transition: width 0.1s ease;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
