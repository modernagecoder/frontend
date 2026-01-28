/* ========================================
   CODING ROADMAP - JAVASCRIPT
   Premium Journey Map Experience
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initScrollProgress();
    initScrollReveal();
    initSmoothScroll();
    initParallaxOrbs();
    initCursorGlow();
    initJourneyPath();
});

/* ========================================
   NAVIGATION BAR
   ======================================== */

function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    if (!navbar || !navbarToggle || !navbarMenu) return;

    // Mobile menu toggle
    navbarToggle.addEventListener('click', () => {
        navbarToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
        document.body.style.overflow = navbarMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking menu links
    const navLinks = navbarMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarToggle.classList.remove('active');
            navbarMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && navbarMenu.classList.contains('active')) {
            navbarToggle.classList.remove('active');
            navbarMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Navbar scroll behavior
    let lastScrollY = 0;
    let ticking = false;

    function updateNavbar() {
        const scrollY = window.scrollY;

        // Add scrolled class when scrolled
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScrollY = scrollY;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateNavbar();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Initial check
    updateNavbar();
}

/* ========================================
   SCROLL PROGRESS INDICATOR
   ======================================== */

function initScrollProgress() {
    const progressBar = document.getElementById('progressBar');
    if (!progressBar) return;

    let ticking = false;

    function updateProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);

        progressBar.style.width = `${scrollPercent}%`;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateProgress();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    updateProgress();
}

/* ========================================
   SCROLL REVEAL ANIMATIONS
   ======================================== */

function initScrollReveal() {
    const stages = document.querySelectorAll('.roadmap-stage');
    const completionSection = document.querySelector('.completion-section');

    // Stage Observer with staggered reveal
    const stageObserverOptions = {
        root: null,
        rootMargin: '-80px 0px -80px 0px',
        threshold: 0.1
    };

    const stageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay based on how many stages are becoming visible
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    triggerNodePulse(entry.target);
                }, index * 100);
            }
        });
    }, stageObserverOptions);

    stages.forEach(stage => {
        stageObserver.observe(stage);
    });

    // Completion Section Observer
    if (completionSection) {
        const completionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    triggerCelebration();
                }
            });
        }, {
            ...stageObserverOptions,
            threshold: 0.25
        });

        completionObserver.observe(completionSection);
    }
}

/* ========================================
   JOURNEY PATH ANIMATION
   ======================================== */

function initJourneyPath() {
    const timelineLine = document.querySelector('.timeline-line');
    if (!timelineLine) return;

    let ticking = false;

    function updatePath() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        // Create a progress effect on the timeline
        const gradientStop = Math.min(scrollPercent + 10, 100);

        timelineLine.style.background = `linear-gradient(
            to bottom,
            transparent 0%,
            rgba(99, 102, 241, 0.5) ${Math.max(gradientStop - 20, 5)}%,
            rgba(139, 92, 246, 0.7) ${gradientStop}%,
            rgba(192, 132, 252, 0.3) ${Math.min(gradientStop + 20, 95)}%,
            transparent 100%
        )`;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updatePath();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* ========================================
   NODE PULSE EFFECT
   ======================================== */

function triggerNodePulse(stage) {
    // Create a pulse ring effect on the node
    const pulseRing = document.createElement('div');
    pulseRing.className = 'node-pulse-ring';

    const stageRect = stage.getBoundingClientRect();
    const scrollTop = window.scrollY;

    pulseRing.style.cssText = `
        position: absolute;
        left: 50%;
        top: ${40}px;
        width: 24px;
        height: 24px;
        border: 2px solid rgba(99, 102, 241, 0.6);
        border-radius: 50%;
        transform: translateX(-50%) scale(1);
        pointer-events: none;
        z-index: 5;
        animation: node-pulse-expand 1s ease-out forwards;
    `;

    stage.appendChild(pulseRing);

    // Remove after animation
    setTimeout(() => {
        pulseRing.remove();
    }, 1000);
}

// Add pulse animation styles
const pulseStyles = document.createElement('style');
pulseStyles.textContent = `
    @keyframes node-pulse-expand {
        0% {
            transform: translateX(-50%) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateX(-50%) scale(3);
            opacity: 0;
        }
    }
`;
document.head.appendChild(pulseStyles);

/* ========================================
   CELEBRATION EFFECT
   ======================================== */

function triggerCelebration() {
    const completionSection = document.querySelector('.completion-section');
    if (!completionSection) return;

    // Create subtle particle burst
    for (let i = 0; i < 12; i++) {
        createParticle(completionSection, i);
    }
}

function createParticle(container, index) {
    const particle = document.createElement('div');
    const colors = ['#6366f1', '#8b5cf6', '#c084fc', '#f0abfc'];
    const color = colors[index % colors.length];

    const angle = (index / 12) * Math.PI * 2;
    const distance = 100 + Math.random() * 80;
    const duration = 1 + Math.random() * 0.5;

    particle.style.cssText = `
        position: absolute;
        left: 50%;
        top: 50%;
        width: 8px;
        height: 8px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        opacity: 0.8;
        transform: translate(-50%, -50%);
        animation: particle-burst ${duration}s ease-out forwards;
        --tx: ${Math.cos(angle) * distance}px;
        --ty: ${Math.sin(angle) * distance}px;
    `;

    container.querySelector('.completion-content').appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// Add particle animation styles
const particleStyles = document.createElement('style');
particleStyles.textContent = `
    @keyframes particle-burst {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        20% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.9;
        }
        100% {
            transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(0.3);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyles);

/* ========================================
   SMOOTH SCROLLING
   ======================================== */

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ========================================
   PARALLAX ORBS
   ======================================== */

function initParallaxOrbs() {
    const orbs = document.querySelectorAll('.gradient-orb');
    if (!orbs.length) return;

    let ticking = false;
    let lastScrollY = window.scrollY;

    function updateOrbs() {
        const scrollY = window.scrollY;
        const delta = scrollY - lastScrollY;

        orbs.forEach((orb, index) => {
            const speed = 0.03 + (index * 0.02);
            const currentTransform = orb.style.transform || '';

            // Extract current translation or default to 0
            const yOffset = scrollY * speed;

            if (orb.classList.contains('orb-1')) {
                orb.style.transform = `translateY(${yOffset}px)`;
            } else if (orb.classList.contains('orb-2')) {
                orb.style.transform = `translateY(${-yOffset * 0.7}px)`;
            } else {
                orb.style.transform = `translate(-50%, calc(-50% + ${yOffset * 0.5}px))`;
            }
        });

        lastScrollY = scrollY;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateOrbs();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* ========================================
   CURSOR GLOW EFFECT
   ======================================== */

function initCursorGlow() {
    const cards = document.querySelectorAll('.stage-content');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);

            // Update the glow position
            updateCardGlow(card, x, y);
        });

        card.addEventListener('mouseleave', () => {
            resetCardGlow(card);
        });
    });
}

function updateCardGlow(card, x, y) {
    const glow = card.querySelector('.cursor-glow') || createCursorGlow(card);
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
    glow.style.opacity = '1';
}

function createCursorGlow(card) {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.style.cssText = `
        position: absolute;
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 0;
    `;
    card.insertBefore(glow, card.firstChild);
    return glow;
}

function resetCardGlow(card) {
    const glow = card.querySelector('.cursor-glow');
    if (glow) {
        glow.style.opacity = '0';
    }
}

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/* ========================================
   KEYBOARD NAVIGATION
   ======================================== */

document.addEventListener('keydown', (e) => {
    const stages = document.querySelectorAll('.roadmap-stage');

    if (e.key === 'ArrowDown' && (e.altKey || e.metaKey)) {
        e.preventDefault();
        navigateToNextStage(stages, 1);
    } else if (e.key === 'ArrowUp' && (e.altKey || e.metaKey)) {
        e.preventDefault();
        navigateToNextStage(stages, -1);
    }
});

function navigateToNextStage(stages, direction) {
    const currentY = window.scrollY + window.innerHeight / 2;

    let targetStage = null;
    let minDistance = Infinity;

    stages.forEach(stage => {
        const rect = stage.getBoundingClientRect();
        const stageY = rect.top + window.scrollY + rect.height / 2;

        if (direction > 0 && stageY > currentY) {
            const distance = stageY - currentY;
            if (distance < minDistance) {
                minDistance = distance;
                targetStage = stage;
            }
        } else if (direction < 0 && stageY < currentY) {
            const distance = currentY - stageY;
            if (distance < minDistance) {
                minDistance = distance;
                targetStage = stage;
            }
        }
    });

    if (targetStage) {
        targetStage.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

/* ========================================
   INTERSECTION OBSERVER FOR ACTIVE STATE
   ======================================== */

function initActiveStateTracking() {
    const stages = document.querySelectorAll('.roadmap-stage');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                // Mark as active
                stages.forEach(s => s.classList.remove('active-stage'));
                entry.target.classList.add('active-stage');
            }
        });
    }, {
        threshold: 0.5
    });

    stages.forEach(stage => observer.observe(stage));
}
