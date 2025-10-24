/**
 * Course Template Engine
 * Handles dynamic content population for course pages
 */
class CourseEngine {
    constructor() {
        this.courseData = null;
        this.courseSlug = null;
    }

    /**
     * Initialize the course engine
     */
    static init() {
        const engine = new CourseEngine();
        engine.loadCourseData();
    }

    /**
     * Extract course slug from URL or embedded data
     */
    getCourseSlug() {
        // Try to get from URL path
        const pathParts = window.location.pathname.split('/');
        const coursesIndex = pathParts.indexOf('courses');
        
        if (coursesIndex !== -1 && pathParts[coursesIndex + 1]) {
            return pathParts[coursesIndex + 1];
        }

        // Try to get from embedded data attribute
        const body = document.body;
        if (body.dataset.courseSlug) {
            return body.dataset.courseSlug;
        }

        // Default fallback
        return 'ai-machine-learning';
    }

    /**
     * Load course data from JSON file
     */
    async loadCourseData() {
        try {
            this.courseSlug = this.getCourseSlug();
            const response = await fetch(`../data/${this.courseSlug}.json`);
            
            if (!response.ok) {
                throw new Error(`Course data not found: ${this.courseSlug}`);
            }

            this.courseData = await response.json();
            this.populateTemplate();
        } catch (error) {
            console.error('Error loading course data:', error);
            this.handleError(error);
        }
    }

    /**
     * Populate template with course data
     */
    populateTemplate() {
        if (!this.courseData) return;

        // Update meta tags
        this.updateMetaTags();
        
        // Update hero section
        this.updateHeroSection();
        
        // Update enrollment section
        this.updateEnrollmentSection();
        
        // Update about section
        this.updateAboutSection();
        
        // Update curriculum section
        this.updateCurriculumSection();
        
        // Update structured data
        this.updateStructuredData();
    }

    /**
     * Update meta tags with course data
     */
    updateMetaTags() {
        const { meta } = this.courseData;
        
        // Update title
        document.title = `${meta.title} - Modern Age Coders`;
        
        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.content = meta.description;
        
        // Update meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) metaKeywords.content = meta.keywords.join(', ');
        
        // Update canonical URL
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.href = `https://www.modernagecoders.com/courses/${meta.slug}`;
        
        // Update Open Graph tags
        this.updateOpenGraphTags(meta);
        
        // Update Twitter Card tags
        this.updateTwitterCardTags(meta);
    }

    /**
     * Update Open Graph meta tags
     */
    updateOpenGraphTags(meta) {
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.content = `https://www.modernagecoders.com/courses/${meta.slug}`;
        
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.content = `${meta.title} - Modern Age Coders`;
        
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.content = meta.description;
        
        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) {
            const encodedTitle = encodeURIComponent(meta.title);
            ogImage.content = `https://placehold.co/1200x630/8A2BE2/FFFFFF?text=${encodedTitle}`;
        }
    }

    /**
     * Update Twitter Card meta tags
     */
    updateTwitterCardTags(meta) {
        const twitterUrl = document.querySelector('meta[property="twitter:url"]');
        if (twitterUrl) twitterUrl.content = `https://www.modernagecoders.com/courses/${meta.slug}`;
        
        const twitterTitle = document.querySelector('meta[property="twitter:title"]');
        if (twitterTitle) twitterTitle.content = `${meta.title} - Modern Age Coders`;
        
        const twitterDesc = document.querySelector('meta[property="twitter:description"]');
        if (twitterDesc) twitterDesc.content = meta.description;
        
        const twitterImage = document.querySelector('meta[property="twitter:image"]');
        if (twitterImage) {
            const encodedTitle = encodeURIComponent(meta.title);
            twitterImage.content = `https://placehold.co/1200x600/8A2BE2/FFFFFF?text=${encodedTitle}`;
        }
    }

    /**
     * Update hero section content
     */
    updateHeroSection() {
        const { hero } = this.courseData;
        
        const categoryEl = document.querySelector('[data-template="hero.category"]');
        if (categoryEl) categoryEl.textContent = hero.category;
        
        const titleEl = document.querySelector('[data-template="hero.title"]');
        if (titleEl) titleEl.textContent = hero.title;
        
        const subtitleEl = document.querySelector('[data-template="hero.subtitle"]');
        if (subtitleEl) subtitleEl.textContent = hero.subtitle;
        
        // Update hero icon
        this.updateHeroIcon(hero.icon);
    }

    /**
     * Update hero icon SVG
     */
    updateHeroIcon(iconType) {
        const iconContainer = document.querySelector('#course-icon');
        if (!iconContainer) return;

        const icons = {
            'ai-icon': this.getAIIcon(),
            'python-icon': this.getPythonIcon(),
            'javascript-icon': this.getJavaScriptIcon(),
            'web-icon': this.getWebIcon(),
            'default': this.getDefaultIcon()
        };

        const iconSVG = icons[iconType] || icons['default'];
        iconContainer.innerHTML = iconSVG;
    }

    /**
     * Update enrollment section
     */
    updateEnrollmentSection() {
        const { meta, hero } = this.courseData;
        
        const enrollmentTitle = document.querySelector('[data-template="enrollment.title"]');
        if (enrollmentTitle) {
            enrollmentTitle.textContent = `Ready to Become a ${hero.title} Expert?`;
        }
        
        const groupPrice = document.querySelector('[data-template="meta.price.group"]');
        if (groupPrice) groupPrice.textContent = meta.price.group;
        
        const personalPrice = document.querySelector('[data-template="meta.price.personal"]');
        if (personalPrice) personalPrice.textContent = meta.price.personal;
    }

    /**
     * Update about section content
     */
    updateAboutSection() {
        const { about } = this.courseData;
        
        // Update overview
        const overviewEl = document.querySelector('[data-template="about.overview"]');
        if (overviewEl) {
            overviewEl.innerHTML = about.overview.split('\\n').map(p => `<p>${p}</p>`).join('');
        }
        
        // Update skills list
        const skillsEl = document.querySelector('[data-template="about.skills"]');
        if (skillsEl) {
            skillsEl.innerHTML = about.skills.map(skill => `<li>${skill}</li>`).join('');
        }
        
        // Update tools grid
        const toolsEl = document.querySelector('[data-template="about.tools"]');
        if (toolsEl) {
            toolsEl.innerHTML = about.tools.map(tool => `<div class="tool-item">${tool}</div>`).join('');
        }
    }

    /**
     * Update curriculum section
     */
    updateCurriculumSection() {
        const { curriculum } = this.courseData;
        
        const curriculumEl = document.querySelector('[data-template="curriculum"]');
        if (!curriculumEl) return;
        
        const modulesHTML = curriculum.map(module => `
            <div class="curriculum-module">
                <button class="module-header">
                    <span class="module-number">${module.week}</span>
                    <span class="module-title">${module.title}</span>
                    <span class="module-icon">▼</span>
                </button>
                <div class="module-content">
                    <ul class="lesson-list">
                        ${module.lessons.map(lesson => `<li>${lesson}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
        
        curriculumEl.innerHTML = modulesHTML;
        
        // Re-initialize accordion functionality
        this.initializeAccordion();
    }

    /**
     * Update structured data (JSON-LD)
     */
    updateStructuredData() {
        const { meta } = this.courseData;
        
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": meta.title,
            "description": meta.description,
            "provider": {
                "@type": "Organization",
                "name": "Modern Age Coders",
                "sameAs": "https://www.modernagecoders.com"
            },
            "courseCode": meta.slug.toUpperCase(),
            "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "online",
                "courseWorkload": meta.duration || "PT14W"
            },
            "offers": {
                "@type": "Offer",
                "price": meta.price.group.replace(/[^0-9]/g, ''),
                "priceCurrency": "INR"
            }
        };
        
        const scriptEl = document.querySelector('script[data-template="structured_data"]');
        if (scriptEl) {
            scriptEl.textContent = JSON.stringify(structuredData, null, 2);
        }
    }

    /**
     * Initialize accordion functionality for curriculum
     */
    initializeAccordion() {
        const moduleHeaders = document.querySelectorAll('.module-header');
        
        moduleHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const module = this.parentElement;
                const content = module.querySelector('.module-content');
                const icon = this.querySelector('.module-icon');
                
                // Toggle active state
                module.classList.toggle('active');
                
                // Toggle content visibility
                if (module.classList.contains('active')) {
                    content.style.display = 'block';
                    icon.textContent = '▲';
                } else {
                    content.style.display = 'none';
                    icon.textContent = '▼';
                }
            });
        });
    }

    /**
     * Handle errors gracefully
     */
    handleError(error) {
        console.error('Course Engine Error:', error);
        
        // Show user-friendly error message
        const main = document.querySelector('main');
        if (main) {
            main.innerHTML = `
                <div style="text-align: center; padding: 50px; color: #666;">
                    <h2>Course Not Found</h2>
                    <p>The requested course could not be loaded. Please check the URL or try again later.</p>
                    <a href="../../index10.html" style="color: #8A2BE2; text-decoration: none;">← Back to Home</a>
                </div>
            `;
        }
    }

    // Icon definitions
    getAIIcon() {
        return `
            <defs>
                <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#a855f7;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#4ecdc4;stop-opacity:1" />
                </linearGradient>
            </defs>
            <circle cx="200" cy="150" r="80" fill="url(#aiGrad)" opacity="0.3"/>
            <circle cx="200" cy="150" r="60" stroke="#a855f7" stroke-width="3" fill="none"/>
            <circle cx="200" cy="150" r="10" fill="#4ecdc4"/>
            <circle cx="150" cy="100" r="15" fill="#a855f7" opacity="0.7"/>
            <circle cx="250" cy="100" r="15" fill="#a855f7" opacity="0.7"/>
            <circle cx="150" cy="200" r="15" fill="#4ecdc4" opacity="0.7"/>
            <circle cx="250" cy="200" r="15" fill="#4ecdc4" opacity="0.7"/>
            <line x1="200" y1="150" x2="150" y2="100" stroke="#a855f7" stroke-width="2"/>
            <line x1="200" y1="150" x2="250" y2="100" stroke="#a855f7" stroke-width="2"/>
            <line x1="200" y1="150" x2="150" y2="200" stroke="#4ecdc4" stroke-width="2"/>
            <line x1="200" y1="150" x2="250" y2="200" stroke="#4ecdc4" stroke-width="2"/>
        `;
    }

    getPythonIcon() {
        return `
            <defs>
                <linearGradient id="pythonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#3776ab;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#ffd43b;stop-opacity:1" />
                </linearGradient>
            </defs>
            <ellipse cx="200" cy="120" rx="60" ry="40" fill="#3776ab" opacity="0.8"/>
            <ellipse cx="200" cy="180" rx="60" ry="40" fill="#ffd43b" opacity="0.8"/>
            <circle cx="185" cy="110" r="8" fill="#ffd43b"/>
            <circle cx="215" cy="190" r="8" fill="#3776ab"/>
            <path d="M 160 150 Q 200 130 240 150" stroke="#3776ab" stroke-width="3" fill="none"/>
        `;
    }

    getJavaScriptIcon() {
        return `
            <defs>
                <linearGradient id="jsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f7df1e;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#323330;stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect x="120" y="80" width="160" height="140" rx="20" fill="#f7df1e"/>
            <text x="200" y="170" text-anchor="middle" font-family="Arial, sans-serif" font-size="60" font-weight="bold" fill="#323330">JS</text>
        `;
    }

    getWebIcon() {
        return `
            <defs>
                <linearGradient id="webGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#e34f26;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#1572b6;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#f7df1e;stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect x="100" y="60" width="200" height="180" rx="10" fill="url(#webGrad)" opacity="0.3"/>
            <rect x="120" y="80" width="160" height="20" fill="#e34f26"/>
            <rect x="120" y="110" width="160" height="40" fill="#1572b6"/>
            <rect x="120" y="160" width="160" height="60" fill="#f7df1e"/>
        `;
    }

    getDefaultIcon() {
        return `
            <defs>
                <linearGradient id="defaultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#8A2BE2;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#4ecdc4;stop-opacity:1" />
                </linearGradient>
            </defs>
            <circle cx="200" cy="150" r="80" fill="url(#defaultGrad)" opacity="0.3"/>
            <circle cx="200" cy="150" r="60" stroke="#8A2BE2" stroke-width="3" fill="none"/>
            <circle cx="200" cy="150" r="20" fill="#4ecdc4"/>
        `;
    }
}

// Make CourseEngine available globally
window.CourseEngine = CourseEngine;