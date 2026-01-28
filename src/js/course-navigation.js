// Course Navigation JavaScript
// Handles tab switching and navigation for Modern Age Coders website

document.addEventListener('DOMContentLoaded', function () {
    // Only initialize course page functionality if we're on a course page
    if (document.body.classList.contains('course-detail-page')) {
        initializeCourseTabs();
        initializeCurriculumAccordion();
        handleURLParameters();
    }

    // Initialize course card navigation on all pages
    initializeCourseCardNavigation();
});

/**
 * Update glider position to match active button
 */
function updateGliderPosition(activeButton, glider) {
    if (!glider || !activeButton) return;

    const left = activeButton.offsetLeft;
    const width = activeButton.offsetWidth;

    glider.style.width = `${width}px`;
    glider.style.left = `${left}px`;
}

/**
 * Initialize course page tab switching
 */
function initializeCourseTabs() {
    const courseTabsWrapper = document.querySelector('.course-tabs-wrapper');
    if (!courseTabsWrapper) return;

    const courseTabButtons = courseTabsWrapper.querySelectorAll('.course-tab-button');
    const courseTabGlider = courseTabsWrapper.querySelector('.course-tab-glider');
    const courseTabContents = courseTabsWrapper.querySelectorAll('.course-tab-content');

    if (courseTabButtons.length === 0) return;

    // Set initial glider position
    const activeButton = courseTabsWrapper.querySelector('.course-tab-button.active');
    if (activeButton && courseTabGlider) {
        updateGliderPosition(activeButton, courseTabGlider);
    }

    // Add click handlers
    courseTabButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            switchCourseTab(this, targetId, courseTabButtons, courseTabContents, courseTabGlider);
        });
    });

    // Recalculate glider on window resize
    window.addEventListener('resize', () => {
        const currentActiveButton = courseTabsWrapper.querySelector('.course-tab-button.active');
        if (currentActiveButton && courseTabGlider) {
            updateGliderPosition(currentActiveButton, courseTabGlider);
        }
    });
}

/**
 * Switch active tab on course page
 */
function switchCourseTab(activeButton, targetId, allButtons, allContents, glider) {
    // Remove active class from all buttons
    allButtons.forEach(btn => btn.classList.remove('active'));

    // Add active class to clicked button
    activeButton.classList.add('active');

    // Hide all tab contents
    allContents.forEach(content => {
        content.classList.remove('active');
    });

    // Show target content
    const targetContent = document.querySelector(targetId);
    if (targetContent) {
        targetContent.classList.add('active');
    }

    // Update glider position
    updateGliderPosition(activeButton, glider);
}

/**
 * Initialize course card click navigation
 */
function initializeCourseCardNavigation() {
    const courseCards = document.querySelectorAll('.course-card[data-course-url]');

    courseCards.forEach(card => {
        card.style.cursor = 'pointer';

        card.addEventListener('click', function (e) {
            // Don't navigate if clicking on a button or link
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' ||
                e.target.closest('a') || e.target.closest('button')) {
                return;
            }

            const courseUrl = this.getAttribute('data-course-url');
            if (courseUrl) {
                // FORCE TRAILING SLASH FOR SEO
                const cleanUrl = courseUrl.endsWith('/') ? courseUrl : `${courseUrl}/`;
                window.location.href = `/courses/${cleanUrl}`;
            }
        });
    });
}

/**
 * Initialize curriculum accordion functionality
 * Supports nested structure: Phase → Month → Week
 */
function initializeCurriculumAccordion() {
    // Initialize old-style module headers (backward compatibility)
    const moduleHeaders = document.querySelectorAll('.module-header');
    moduleHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const module = this.parentElement;
            const content = module.querySelector('.module-content');
            const icon = this.querySelector('.module-icon');

            const isExpanded = module.classList.contains('expanded');

            if (isExpanded) {
                module.classList.remove('expanded');
                content.style.maxHeight = '0';
                if (icon) icon.textContent = '▼';
            } else {
                module.classList.add('expanded');
                content.style.maxHeight = content.scrollHeight + 'px';
                if (icon) icon.textContent = '▲';
            }
        });
    });

    // Initialize Phase accordions
    const phaseHeaders = document.querySelectorAll('.phase-header');
    phaseHeaders.forEach(header => {
        header.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleAccordion(this.parentElement, 'phase');
        });

        // Add keyboard support
        header.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Initialize Month accordions
    const monthHeaders = document.querySelectorAll('.month-header');
    monthHeaders.forEach(header => {
        header.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleAccordion(this.parentElement, 'month');
        });

        // Add keyboard support
        header.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Initialize Week accordions
    const weekHeaders = document.querySelectorAll('.week-header');
    weekHeaders.forEach(header => {
        header.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleAccordion(this.parentElement, 'week');
        });

        // Add keyboard support
        header.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Initialize "Show More" buttons for long topic lists
    initializeShowMoreButtons();
}

/**
 * Toggle accordion section (Phase, Month, or Week)
 */
function toggleAccordion(section, type) {
    const isActive = section.classList.contains('active');

    if (isActive) {
        // Collapse
        section.classList.remove('active');
    } else {
        // Expand
        section.classList.add('active');

        // Recalculate max-height for parent sections if needed
        setTimeout(() => {
            updateParentHeights(section);
        }, 50);
    }
}

/**
 * Update parent accordion heights when child expands
 */
function updateParentHeights(element) {
    let parent = element.parentElement;

    while (parent) {
        if (parent.classList.contains('phase-content') ||
            parent.classList.contains('month-content') ||
            parent.classList.contains('week-content')) {

            const parentSection = parent.parentElement;
            if (parentSection && parentSection.classList.contains('active')) {
                // Force recalculation by temporarily removing max-height
                parent.style.maxHeight = 'none';
                const height = parent.scrollHeight;
                parent.style.maxHeight = height + 'px';
            }
        }
        parent = parent.parentElement;
    }
}

/**
 * Initialize "Show More" buttons for long topic lists
 */
function initializeShowMoreButtons() {
    const showMoreButtons = document.querySelectorAll('.show-more-btn');

    showMoreButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();

            const weekSection = this.closest('.week-section');
            const hiddenTopics = weekSection.querySelector('.topics-hidden');

            if (hiddenTopics) {
                const isHidden = hiddenTopics.style.display === 'none' || !hiddenTopics.style.display;

                if (isHidden) {
                    // Show hidden topics
                    hiddenTopics.style.display = 'grid';
                    this.innerHTML = 'Show less ▲';
                } else {
                    // Hide topics
                    hiddenTopics.style.display = 'none';
                    const hiddenCount = hiddenTopics.querySelectorAll('li').length;
                    this.innerHTML = `Show ${hiddenCount} more topics ▼`;
                }

                // Update parent heights
                setTimeout(() => {
                    updateParentHeights(weekSection);
                }, 50);
            }
        });
    });
}

/**
 * Expand all accordions (useful for debugging or printing)
 */
function expandAllAccordions() {
    document.querySelectorAll('.phase-section, .month-section, .week-section').forEach(section => {
        section.classList.add('active');
    });
}

/**
 * Collapse all accordions
 */
function collapseAllAccordions() {
    document.querySelectorAll('.phase-section, .month-section, .week-section').forEach(section => {
        section.classList.remove('active');
    });
}

/**
 * Handle URL parameters for direct tab access
 */
function handleURLParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const activeTab = urlParams.get('tab');

    if (activeTab) {
        // Try to find and activate the specified tab
        const targetButton = document.querySelector(`[data-target="#${activeTab}"]`);
        if (targetButton) {
            targetButton.click();
        }
    }
}

// Add CSS animation for course cards
const style = document.createElement('style');
style.textContent = `
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
    
    .course-tab-content {
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(style);
