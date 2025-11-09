/**
 * Student Projects Display and Filtering
 */

(function() {
    'use strict';

    let currentFilter = 'all';
    let projects = [];

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        console.log('[Student Projects] Initializing...');
        
        // Load projects data
        if (typeof studentProjects !== 'undefined') {
            projects = studentProjects;
            console.log('[Student Projects] Loaded', projects.length, 'projects');
        } else {
            console.error('[Student Projects] No projects data found!');
            showError();
            return;
        }

        // Setup event listeners
        setupFilterButtons();
        
        // Display projects
        displayProjects(projects);
        
        // Update stats
        updateStats();
        
        console.log('[Student Projects] Initialization complete');
    }

    function setupFilterButtons() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filter = this.getAttribute('data-filter');
                currentFilter = filter;
                
                // Filter and display projects
                filterProjects(filter);
            });
        });
    }

    function filterProjects(filter) {
        console.log('[Student Projects] Filtering by:', filter);
        
        let filteredProjects = projects;
        
        if (filter !== 'all') {
            filteredProjects = projects.filter(project => project.category === filter);
        }
        
        displayProjects(filteredProjects);
    }

    function displayProjects(projectsToDisplay) {
        const grid = document.getElementById('projectsGrid');
        
        if (!grid) {
            console.error('[Student Projects] Grid element not found!');
            return;
        }

        // Clear grid
        grid.innerHTML = '';

        // Check if there are projects to display
        if (projectsToDisplay.length === 0) {
            showEmptyState(grid);
            return;
        }

        // Create project cards
        projectsToDisplay.forEach(project => {
            const card = createProjectCard(project);
            grid.appendChild(card);
        });

        // Animate cards
        animateCards();
    }

    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-category', project.category);

        // Determine badge text
        const badgeText = {
            'web': 'Web Dev',
            'ai': 'AI & ML',
            'game': 'Game',
            'mobile': 'Mobile'
        }[project.category] || 'Project';

        card.innerHTML = `
            <div class="project-thumbnail">
                ${project.image ? 
                    `<img src="${project.image}" alt="${project.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                     <div class="placeholder-icon" style="display:none;">🚀</div>` :
                    `<div class="placeholder-icon">🚀</div>`
                }
                <div class="project-badge ${project.category}">${badgeText}</div>
            </div>
            <div class="project-content">
                <h3 class="project-title">
                    ${project.title}
                </h3>
                <div class="project-student">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    ${project.student}
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-footer">
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">
                        View Project
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>
        `;

        // Add click handler to card (except when clicking the link)
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.project-link')) {
                window.open(project.link, '_blank');
            }
        });

        return card;
    }

    function showEmptyState(grid) {
        grid.innerHTML = `
            <div class="empty-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <h3>No projects found</h3>
                <p>Try selecting a different category</p>
            </div>
        `;
    }

    function showError() {
        const grid = document.getElementById('projectsGrid');
        if (grid) {
            grid.innerHTML = `
                <div class="empty-state">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                    <h3>Error Loading Projects</h3>
                    <p>Please refresh the page to try again</p>
                </div>
            `;
        }
    }

    function updateStats() {
        // Total projects
        const totalProjectsEl = document.getElementById('totalProjects');
        if (totalProjectsEl) {
            animateNumber(totalProjectsEl, projects.length);
        }

        // Total students (unique)
        const uniqueStudents = [...new Set(projects.map(p => p.student))];
        const totalStudentsEl = document.getElementById('totalStudents');
        if (totalStudentsEl) {
            animateNumber(totalStudentsEl, uniqueStudents.length);
        }

        // Total categories (unique)
        const uniqueCategories = [...new Set(projects.map(p => p.category))];
        const totalCategoriesEl = document.getElementById('totalCategories');
        if (totalCategoriesEl) {
            animateNumber(totalCategoriesEl, uniqueCategories.length);
        }

        // Total technologies (unique tags)
        const allTags = projects.flatMap(p => p.tags);
        const uniqueTags = [...new Set(allTags)];
        const totalTechnologiesEl = document.getElementById('totalTechnologies');
        if (totalTechnologiesEl) {
            animateNumber(totalTechnologiesEl, uniqueTags.length);
        }
    }

    function animateNumber(element, target) {
        let current = 0;
        const increment = target / 50;
        const duration = 1000;
        const stepTime = duration / 50;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, stepTime);
    }

    function animateCards() {
        const cards = document.querySelectorAll('.project-card');
        
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Public API for debugging
    window.StudentProjects = {
        getProjects: () => projects,
        getCurrentFilter: () => currentFilter,
        filterBy: (category) => filterProjects(category),
        refresh: () => displayProjects(projects)
    };

    console.log('[Student Projects] Script loaded');
})();
