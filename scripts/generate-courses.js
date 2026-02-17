#!/usr/bin/env node

/**
 * Comprehensive Course Generator
 * Generates detailed course pages from nested JSON data with full curriculum support
 */

const fs = require('fs');
const path = require('path');

class CourseGenerator {
    constructor() {
        this.projectRoot = path.resolve(__dirname, '..');
        this.dataDir = path.join(this.projectRoot, 'content', 'courses', 'data');
        this.templateDir = path.join(this.projectRoot, 'content', 'courses', 'template');
        this.generatedDir = path.join(this.projectRoot, 'content', 'courses', 'generated');
        this.imagesDir = path.join(this.projectRoot, 'content', 'courses', 'images');
        this.templatePath = path.join(this.templateDir, 'course-template.html');
        this.blogDataDir = path.join(this.projectRoot, 'content', 'blog', 'data');
        // Preloaded metadata for internal linking
        this.allCourseMeta = [];
        this.allBlogMeta = [];
    }

    /**
     * Preload all course and blog metadata for internal linking.
     * Called once at the start of generate() so each course doesn't re-read every JSON.
     */
    preloadMetadata() {
        // Preload course metadata
        try {
            const courseFiles = fs.readdirSync(this.dataDir).filter(f => f.endsWith('.json'));
            this.allCourseMeta = courseFiles.map(file => {
                try {
                    const data = JSON.parse(fs.readFileSync(path.join(this.dataDir, file), 'utf8'));
                    const meta = data.meta || {};
                    return {
                        slug: meta.slug || '',
                        title: meta.title || '',
                        description: meta.description || '',
                        category: meta.category || '',
                        keywords: (meta.keywords || []).map(k => k.toLowerCase()),
                        image_path: meta.image_path || '',
                        level: meta.level || ''
                    };
                } catch (e) {
                    return null;
                }
            }).filter(Boolean);
            console.log(`📚 Preloaded ${this.allCourseMeta.length} course metadata entries for internal linking`);
        } catch (e) {
            console.warn('⚠️  Could not preload course metadata:', e.message);
        }

        // Preload blog metadata
        try {
            const blogFiles = fs.readdirSync(this.blogDataDir).filter(f => f.endsWith('.json'));
            this.allBlogMeta = blogFiles.map(file => {
                try {
                    const data = JSON.parse(fs.readFileSync(path.join(this.blogDataDir, file), 'utf8'));
                    const meta = data.meta || {};
                    const hero = data.hero || {};
                    return {
                        slug: meta.slug || '',
                        title: meta.title || '',
                        description: meta.description || '',
                        category: meta.category || '',
                        tags: (meta.tags || []).map(t => t.toLowerCase()),
                        keywords: (meta.keywords || []).map(k => k.toLowerCase()),
                        image_url: (hero.featuredImage && hero.featuredImage.url) || '',
                        image_alt: (hero.featuredImage && hero.featuredImage.alt) || '',
                        readTime: meta.readTime || ''
                    };
                } catch (e) {
                    return null;
                }
            }).filter(Boolean);
            console.log(`📝 Preloaded ${this.allBlogMeta.length} blog metadata entries for internal linking`);
        } catch (e) {
            console.warn('⚠️  Could not preload blog metadata:', e.message);
        }
    }

    /**
     * Generate all courses
     */
    async generate() {
        try {
            console.log('🚀 Generating comprehensive courses...');

            // Create directories if needed
            if (!fs.existsSync(this.generatedDir)) {
                fs.mkdirSync(this.generatedDir, { recursive: true });
            }

            // Preload all course & blog metadata for internal linking
            this.preloadMetadata();

            // Load template
            const template = fs.readFileSync(this.templatePath, 'utf8');

            // Get course files
            const courseFiles = fs.readdirSync(this.dataDir).filter(f => f.endsWith('.json'));

            if (courseFiles.length === 0) {
                console.log('⚠️  No course files found');
                return;
            }

            // Copy CSS files from template to generated directory
            const cssSourcePath = path.join(this.templateDir, 'course-template.css');
            const cssDestPath = path.join(this.generatedDir, 'style.css');
            if (fs.existsSync(cssSourcePath)) {
                fs.copyFileSync(cssSourcePath, cssDestPath);
                console.log('✓ Copied course template CSS file to generated directory');
            } else {
                console.log('⚠️  Course template CSS file not found at', cssSourcePath);
            }

            // Copy mobile responsive CSS file
            const mobileCssSourcePath = path.join(this.templateDir, 'mobile-responsive-fix.css');
            const mobileCssDestPath = path.join(this.generatedDir, 'mobile-responsive-fix.css');
            if (fs.existsSync(mobileCssSourcePath)) {
                fs.copyFileSync(mobileCssSourcePath, mobileCssDestPath);
                console.log('✓ Copied mobile responsive CSS file to generated directory');
            } else {
                console.log('⚠️  Mobile responsive CSS file not found at', mobileCssSourcePath);
            }

            // Generate each course
            let successCount = 0;
            for (const file of courseFiles) {
                try {
                    const courseData = JSON.parse(fs.readFileSync(path.join(this.dataDir, file), 'utf8'));
                    const slug = courseData.meta.slug;

                    console.log(`📄 Generating: ${slug}`);

                    // Create course directory
                    const courseDir = path.join(this.generatedDir, slug);
                    if (!fs.existsSync(courseDir)) {
                        fs.mkdirSync(courseDir, { recursive: true });
                    }

                    // Copy CSS files to course directory
                    const courseCssPath = path.join(courseDir, 'style.css');
                    if (fs.existsSync(cssDestPath)) {
                        fs.copyFileSync(cssDestPath, courseCssPath);
                    }

                    // Copy mobile responsive CSS file to course directory
                    const mobileCssDestPath = path.join(this.generatedDir, 'mobile-responsive-fix.css');
                    const courseMobileCssPath = path.join(courseDir, 'mobile-responsive-fix.css');
                    if (fs.existsSync(mobileCssDestPath)) {
                        fs.copyFileSync(mobileCssDestPath, courseMobileCssPath);
                    }

                    // Copy JavaScript file to course directory
                    const jsSourcePath = path.join(this.projectRoot, 'src', 'js', 'course-navigation.js');
                    const courseJsPath = path.join(courseDir, 'course-navigation.js');
                    if (fs.existsSync(jsSourcePath)) {
                        fs.copyFileSync(jsSourcePath, courseJsPath);
                        console.log(`  ✓ Copied course-navigation.js`);
                    } else {
                        console.warn(`  ⚠️  course-navigation.js not found at ${jsSourcePath}`);
                    }

                    // Copy image assets
                    this.copyImageAssets(courseData, courseDir);

                    // Generate HTML
                    const html = this.populateTemplate(template, courseData, courseDir);
                    fs.writeFileSync(path.join(courseDir, 'index.html'), html);

                    successCount++;
                    console.log(`✅ Successfully generated: ${slug}`);
                } catch (error) {
                    console.error(`❌ Error generating ${file}:`, error.message);
                }
            }

            console.log(`\n🎉 Generation complete! ${successCount}/${courseFiles.length} courses generated successfully.`);

        } catch (error) {
            console.error('❌ Fatal error:', error.message);
            throw error;
        }
    }

    /**
     * Extract phases from course data
     * @param {Object} courseData - Course data object
     * @returns {Array} Array of phase objects with key and data
     */
    extractPhases(courseData) {
        const phases = [];
        const phasePattern = /^phase_\d+_/;

        for (const key in courseData) {
            if (phasePattern.test(key)) {
                phases.push({
                    key: key,
                    data: courseData[key],
                    order: parseInt(key.match(/\d+/)[0])
                });
            }
        }

        // Sort by phase number
        return phases.sort((a, b) => a.order - b.order);
    }

    /**
     * Extract months from phase data
     * @param {Object} phaseData - Phase data object
     * @returns {Array} Array of month objects with key and data
     */
    extractMonths(phaseData) {
        const months = [];
        const monthPattern = /^month_/;

        for (const key in phaseData) {
            if (monthPattern.test(key)) {
                months.push({
                    key: key,
                    data: phaseData[key]
                });
            }
        }

        return months;
    }

    /**
     * Extract weeks from month data
     * @param {Object} monthData - Month data object
     * @returns {Array} Array of week objects with key and data
     */
    extractWeeks(monthData) {
        const weeks = [];
        const weekPattern = /^week_/;

        for (const key in monthData) {
            if (weekPattern.test(key)) {
                weeks.push({
                    key: key,
                    data: monthData[key]
                });
            }
        }

        return weeks;
    }

    /**
     * Generate HTML for a single week
     * @param {Object} weekData - Week data object
     * @param {string} weekKey - Week identifier key
     * @returns {string} HTML string for the week
     */
    generateWeekHTML(weekData, weekKey) {
        const title = weekData.title || 'Week Content';
        const topics = weekData.topics || [];
        const projects = weekData.projects || [];
        const practice = weekData.practice || '';
        const assessment = weekData.assessment || '';

        // Determine if we need "show more" for topics
        const showMoreTopics = topics.length > 10;
        const visibleTopics = showMoreTopics ? topics.slice(0, 10) : topics;
        const hiddenTopics = showMoreTopics ? topics.slice(10) : [];

        let html = `
        <div class="week-section" data-week="${weekKey}">
            <button class="week-header">
                <span class="week-icon">📅</span>
                <span class="week-title">${this.escapeHtml(title)}</span>
                <span class="expand-icon">▼</span>
            </button>
            <div class="week-content">`;

        // Topics section
        if (topics.length > 0) {
            html += `
                <div class="topics-section">
                    <h5 class="content-section-title">📚 Topics Covered</h5>
                    <ul class="topics-list">
                        ${visibleTopics.map(topic => `<li>${this.escapeHtml(topic)}</li>`).join('')}
                    </ul>`;

            if (showMoreTopics) {
                html += `
                    <ul class="topics-list topics-hidden" style="display: none;">
                        ${hiddenTopics.map(topic => `<li>${this.escapeHtml(topic)}</li>`).join('')}
                    </ul>
                    <button class="show-more-btn" data-target="${weekKey}-topics">
                        Show ${hiddenTopics.length} more topics ▼
                    </button>`;
            }

            html += `</div>`;
        }

        // Projects section
        if (projects.length > 0) {
            html += `
                <div class="projects-section">
                    <h5 class="content-section-title">🚀 Projects</h5>
                    <ul class="projects-list">
                        ${projects.map(project => `<li>${this.escapeHtml(project)}</li>`).join('')}
                    </ul>
                </div>`;
        }

        // Practice section
        if (practice) {
            html += `
                <div class="practice-section">
                    <h5 class="content-section-title">💪 Practice</h5>
                    <p class="practice-text">${this.escapeHtml(practice)}</p>
                </div>`;
        }

        // Assessment section (highlighted)
        if (assessment) {
            html += `
                <div class="assessment-section">
                    <h5 class="content-section-title">🎯 Assessment</h5>
                    <p class="assessment-text">${this.escapeHtml(assessment)}</p>
                </div>`;
        }

        html += `
            </div>
        </div>`;

        return html;
    }

    /**
     * Generate HTML for a single month
     * @param {Object} monthData - Month data object
     * @param {string} monthKey - Month identifier key
     * @returns {string} HTML string for the month
     */
    generateMonthHTML(monthData, monthKey) {
        const title = monthData.title || 'Month Content';
        const weeks = monthData.weeks || '';
        const weeksArray = this.extractWeeks(monthData);

        let html = `
        <div class="month-section" data-month="${monthKey}">
            <button class="month-header">
                <span class="month-icon">📆</span>
                <span class="month-info">
                    <span class="month-title">${this.escapeHtml(title)}</span>
                    ${weeks ? `<span class="month-weeks">${this.escapeHtml(weeks)}</span>` : ''}
                </span>
                <span class="expand-icon">▼</span>
            </button>
            <div class="month-content">`;

        // Generate all weeks
        if (weeksArray.length > 0) {
            weeksArray.forEach(week => {
                html += this.generateWeekHTML(week.data, week.key);
            });
        } else {
            html += '<p class="no-content">No weekly content available</p>';
        }

        html += `
            </div>
        </div>`;

        return html;
    }

    /**
     * Generate HTML for a single phase
     * @param {Object} phaseData - Phase data object
     * @param {string} phaseKey - Phase identifier key
     * @returns {string} HTML string for the phase
     */
    generatePhaseHTML(phaseData, phaseKey) {
        const title = phaseData.title || 'Phase Content';
        const description = phaseData.description || '';
        const months = this.extractMonths(phaseData);

        let html = `
        <div class="phase-section" data-phase="${phaseKey}">
            <button class="phase-header">
                <span class="phase-icon">🎓</span>
                <span class="phase-info">
                    <span class="phase-title">${this.escapeHtml(title)}</span>
                    ${description ? `<span class="phase-description">${this.escapeHtml(description)}</span>` : ''}
                </span>
                <span class="expand-icon">▼</span>
            </button>
            <div class="phase-content">`;

        // Generate all months
        if (months.length > 0) {
            months.forEach(month => {
                html += this.generateMonthHTML(month.data, month.key);
            });
        } else {
            html += '<p class="no-content">No monthly content available</p>';
        }

        html += `
            </div>
        </div>`;

        return html;
    }

    /**
     * Generate complete curriculum HTML from course data
     * @param {Object} courseData - Complete course data
     * @returns {string} HTML string for entire curriculum
     */
    generateCurriculumHTML(courseData) {
        const phases = this.extractPhases(courseData);

        if (phases.length === 0) {
            // Check for month_ structure (direct months without phases)
            const months = this.extractMonths(courseData);
            if (months.length > 0) {
                // Generate months directly without phase wrapper
                return months.map(month => this.generateMonthHTML(month.data, month.key)).join('');
            }

            // Fallback to old curriculum format if no phases found
            if (courseData.curriculum && Array.isArray(courseData.curriculum)) {
                return courseData.curriculum.map(module => `
                    <div class="curriculum-module">
                        <button class="module-header">
                            <span class="module-number">${module.week || ''}</span>
                            <span class="module-title">${this.escapeHtml(module.title || '')}</span>
                            <span class="module-icon">▼</span>
                        </button>
                        <div class="module-content">
                            <ul class="lesson-list">
                                ${(module.lessons || []).map(lesson => `<li>${this.escapeHtml(lesson)}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `).join('');
            }
            return '<p class="no-content">No curriculum content available</p>';
        }

        // Generate HTML for all phases
        return phases.map(phase => this.generatePhaseHTML(phase.data, phase.key)).join('');
    }

    /**
     * Copy image assets to course directory
     * @param {Object} courseData - Course data object
     * @param {string} courseDir - Course directory path
     */
    copyImageAssets(courseData, courseDir) {
        // Create images directory in course folder
        const courseImagesDir = path.join(courseDir, 'images');
        if (!fs.existsSync(courseImagesDir)) {
            fs.mkdirSync(courseImagesDir, { recursive: true });
        }

        // Copy hero image if specified
        if (courseData.meta && courseData.meta.image_path) {
            const imagePath = path.join(this.imagesDir, courseData.meta.image_path);
            if (fs.existsSync(imagePath)) {
                const imageName = path.basename(courseData.meta.image_path);
                const destPath = path.join(courseImagesDir, imageName);
                try {
                    fs.copyFileSync(imagePath, destPath);
                    console.log(`  ✓ Copied image: ${imageName}`);
                } catch (error) {
                    console.warn(`  ⚠️  Failed to copy image ${imageName}:`, error.message);
                }
            } else {
                console.warn(`  ⚠️  Image not found: ${courseData.meta.image_path}`);
            }
        }
    }

    /**
     * Generate enhanced structured data for SEO
     * @param {Object} courseData - Course data object
     * @returns {Object} Structured data object
     */
    generateStructuredData(courseData) {
        const meta = courseData.meta || {};
        const overview = courseData.program_overview || {};
        const schemas = [];

        // Course Schema with all required fields
        const courseSchema = {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": meta.title || "Course",
            "description": meta.description || "",
            "provider": {
                "@type": "Organization",
                "name": "Modern Age Coders",
                "url": "https://learn.modernagecoders.com",
                "sameAs": "https://www.modernagecoders.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://learn.modernagecoders.com/images/logo.png"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+919123366161",
                    "contactType": "Customer Service",
                    "email": "contact@modernagecoders.com"
                }
            },
            "url": `https://learn.modernagecoders.com/courses/${meta.slug || ''}/`,
            "courseCode": meta.slug || "",
            "timeRequired": meta.duration || "Self-paced",
            "educationalLevel": meta.level || "All Levels",
            "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "online",
                "courseWorkload": meta.commitment || "Flexible",
                "instructor": {
                    "@type": "Organization",
                    "name": "Modern Age Coders Expert Instructors"
                }
            }
        };

        // Add image if available
        if (meta.image_path) {
            courseSchema.image = {
                "@type": "ImageObject",
                "url": `https://learn.modernagecoders.com/courses/${meta.slug}/images/${path.basename(meta.image_path)}`,
                "caption": meta.title || "Course"
            };
        }

        // Add comprehensive pricing offers
        if (meta.price) {
            const offers = [];

            if (meta.price.group) {
                offers.push({
                    "@type": "Offer",
                    "name": "Group Classes",
                    "description": "Interactive group learning with 2 classes per week",
                    "price": meta.price.group.replace(/[^\d]/g, '') || "Contact for pricing",
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock",
                    "validFrom": new Date().toISOString().split('T')[0],
                    "category": "Group Classes"
                });
            }

            if (meta.price.personal) {
                offers.push({
                    "@type": "Offer",
                    "name": "Personal Mentorship",
                    "description": "One-on-one personalized mentorship with 2 classes per week",
                    "price": meta.price.personal.replace(/[^\d]/g, '') || "Contact for pricing",
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock",
                    "validFrom": new Date().toISOString().split('T')[0],
                    "category": "Personal Mentorship"
                });
            }

            if (meta.price.lifetime) {
                offers.push({
                    "@type": "Offer",
                    "name": "Lifetime Access",
                    "description": "Lifetime access to course materials and updates",
                    "price": meta.price.lifetime.replace(/[^\d]/g, '') || "Contact for pricing",
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock",
                    "validFrom": new Date().toISOString().split('T')[0],
                    "category": "Lifetime Access"
                });
            }

            if (offers.length > 0) {
                courseSchema.offers = offers;
            }
        }

        // Add keywords
        if (meta.keywords && meta.keywords.length > 0) {
            courseSchema.keywords = meta.keywords.join(', ');
        }

        // Add course category
        if (meta.category) {
            courseSchema.coursePrerequisites = meta.category;
        }

        // Add aggregated rating if available
        courseSchema.aggregateRating = {
            "@type": "AggregateRating",
            "ratingValue": 4.8,
            "reviewCount": 500,
            "bestRating": "5",
            "worstRating": "1"
        };

        schemas.push(courseSchema);

        // BreadcrumbList Schema
        const breadcrumbSchema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://learn.modernagecoders.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Courses",
                    "item": "https://learn.modernagecoders.com/courses"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": meta.title || "Course",
                    "item": `https://learn.modernagecoders.com/courses/${meta.slug || ''}/`
                }
            ]
        };

        schemas.push(breadcrumbSchema);

        // FAQPage Schema - Generate if FAQs exist in course data
        if (courseData.faqs && Array.isArray(courseData.faqs) && courseData.faqs.length > 0) {
            const faqSchema = {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": courseData.faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            };
            schemas.push(faqSchema);
        }

        // Article Schema
        const articleSchema = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": meta.title || "Course",
            "description": meta.description || "",
            "image": meta.image_path ? `https://learn.modernagecoders.com/content/courses/generated/${meta.slug}/images/${path.basename(meta.image_path)}` : `https://placehold.co/1200x630/8A2BE2/FFFFFF?text=${encodeURIComponent(meta.title || 'Course')}`,
            "author": {
                "@type": "Organization",
                "name": "Modern Age Coders",
                "url": "https://learn.modernagecoders.com"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Modern Age Coders",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://learn.modernagecoders.com/images/logo.png"
                }
            },
            "datePublished": new Date().toISOString(),
            "dateModified": new Date().toISOString()
        };
        schemas.push(articleSchema);

        return schemas;
    }

    /**
     * Escape HTML special characters
     * @param {string} text - Text to escape
     * @returns {string} Escaped text
     */
    escapeHtml(text) {
        if (!text) return '';
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.toString().replace(/[&<>"']/g, m => map[m]);
    }

    /**
     * Replace template placeholders with course data
     */
    populateTemplate(template, courseData, courseDir) {
        let html = template;

        const meta = courseData.meta || {};
        const overview = courseData.program_overview || {};

        // Basic meta replacements
        html = html.replace(/{{COURSE_TITLE}}/g, this.escapeHtml(meta.title || ''));
        html = html.replace(/{{COURSE_DESCRIPTION}}/g, this.escapeHtml(meta.description || ''));
        html = html.replace(/{{COURSE_KEYWORDS}}/g, (meta.keywords || []).join(', '));
        html = html.replace(/{{COURSE_SLUG}}/g, meta.slug || '');
        html = html.replace(/{{COURSE_TITLE_ENCODED}}/g, encodeURIComponent(meta.title || ''));

        // Hero section
        html = html.replace(/{{HERO_CATEGORY}}/g, this.escapeHtml(meta.category || 'Programming'));
        html = html.replace(/{{HERO_TITLE}}/g, this.escapeHtml(overview.title || meta.title || ''));
        html = html.replace(/{{HERO_SUBTITLE}}/g, this.escapeHtml(overview.tagline || meta.description || ''));

        // Pricing
        html = html.replace(/{{PRICE_GROUP}}/g, this.escapeHtml(meta.price?.group || ''));
        html = html.replace(/{{PRICE_PERSONAL}}/g, this.escapeHtml(meta.price?.personal || ''));
        html = html.replace(/{{PRICE_LIFETIME}}/g, this.escapeHtml(meta.price?.lifetime || ''));

        // New meta fields
        html = html.replace(/{{DURATION}}/g, this.escapeHtml(meta.duration || ''));
        html = html.replace(/{{LEVEL}}/g, this.escapeHtml(meta.level || ''));
        html = html.replace(/{{COMMITMENT}}/g, this.escapeHtml(meta.commitment || ''));
        html = html.replace(/{{CERTIFICATION}}/g, this.escapeHtml(meta.certification || ''));

        // Hero image or SVG
        if (meta.image_path) {
            const imageName = path.basename(meta.image_path);
            html = html.replace(/{{HERO_IMAGE}}/g, `<img src="/content/courses/generated/${meta.slug}/images/${imageName}" alt="${this.escapeHtml(meta.title)}" loading="lazy" class="hero-course-image">`);
        } else {
            html = html.replace(/{{HERO_IMAGE}}/g, `
                <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" class="hero-course-svg">
                    <circle cx="200" cy="150" r="80" fill="#8A2BE2" opacity="0.3"/>
                    <circle cx="200" cy="150" r="60" stroke="#8A2BE2" stroke-width="3" fill="none"/>
                    <circle cx="200" cy="150" r="20" fill="#4ecdc4"/>
                </svg>
            `);
        }

        // Program overview section
        const overviewDescription = (overview.description || meta.description || '').split('\n\n').map(p => `<p>${this.escapeHtml(p)}</p>`).join('');
        html = html.replace(/{{PROGRAM_OVERVIEW}}/g, overviewDescription);

        // What makes this different
        const differentiators = (overview.what_makes_this_different || []).map(item =>
            `<li><span class="check-icon">✓</span> ${this.escapeHtml(item)}</li>`
        ).join('');
        html = html.replace(/{{DIFFERENTIATORS}}/g, differentiators);

        // Learning path
        let learningPathHTML = '';
        if (overview.learning_path) {
            learningPathHTML = Object.entries(overview.learning_path).map(([key, value]) =>
                `<div class="learning-path-item">
                    <div class="path-number">${key.replace('phase_', 'Phase ')}</div>
                    <div class="path-content">${this.escapeHtml(value)}</div>
                </div>`
            ).join('');
        }
        html = html.replace(/{{LEARNING_PATH}}/g, learningPathHTML);

        // Career outcomes
        const careerOutcomes = (overview.career_outcomes || []).map((outcome, index) =>
            `<div class="career-outcome">
                <div class="outcome-step">${index + 1}</div>
                <div class="outcome-text">${this.escapeHtml(outcome)}</div>
            </div>`
        ).join('');
        html = html.replace(/{{CAREER_OUTCOMES}}/g, careerOutcomes);

        // Generate comprehensive curriculum
        const curriculumHTML = this.generateCurriculumHTML(courseData);
        html = html.replace(/{{CURRICULUM_MODULES}}/g, curriculumHTML);

        // Projects & Portfolio Tab
        const resources = courseData.additional_learning_resources || {};
        const totalProjects = resources.total_projects_built || '50+ projects';
        html = html.replace(/{{TOTAL_PROJECTS}}/g, this.escapeHtml(totalProjects));

        const projectsOverview = this.generateProjectsOverview(resources);
        html = html.replace(/{{PROJECTS_OVERVIEW}}/g, projectsOverview);

        const weeklyStructure = this.generateWeeklyStructure(resources.weekly_structure || {});
        html = html.replace(/{{WEEKLY_STRUCTURE}}/g, weeklyStructure);

        const certificationDetails = this.generateCertificationDetails(resources.certification || {});
        html = html.replace(/{{CERTIFICATION_DETAILS}}/g, certificationDetails);

        // Technologies Tab
        const skillsMastered = this.generateSkillsMastered(resources.skills_mastered || []);
        html = html.replace(/{{SKILLS_MASTERED}}/g, skillsMastered);

        const supportProvided = this.generateSupportProvided(resources.support_provided || {});
        html = html.replace(/{{SUPPORT_PROVIDED}}/g, supportProvided);

        // Career & Outcomes Tab
        const prerequisites = this.generatePrerequisites(courseData.prerequisites || {});
        html = html.replace(/{{PREREQUISITES}}/g, prerequisites);

        const whoIsThisFor = this.generateWhoIsThisFor(courseData.who_is_this_for || {});
        html = html.replace(/{{WHO_IS_THIS_FOR}}/g, whoIsThisFor);

        const careerPaths = this.generateCareerPaths(courseData.career_paths_after_completion || []);
        html = html.replace(/{{CAREER_PATHS}}/g, careerPaths);

        const salaryExpectations = this.generateSalaryExpectations(courseData.salary_expectations || {});
        html = html.replace(/{{SALARY_EXPECTATIONS}}/g, salaryExpectations);

        const courseGuarantees = this.generateCourseGuarantees(courseData.course_guarantees || {});
        html = html.replace(/{{COURSE_GUARANTEES}}/g, courseGuarantees);

        // Structured data
        const structuredData = this.generateStructuredData(courseData);
        html = html.replace(/{{STRUCTURED_DATA}}/g, JSON.stringify(structuredData, null, 2));

        // Image meta tags
        if (meta.image_path) {
            const imageName = path.basename(meta.image_path);
            const imageUrl = `https://learn.modernagecoders.com/content/courses/generated/${meta.slug}/images/${imageName}`;
            html = html.replace(/{{OG_IMAGE}}/g, imageUrl);
            html = html.replace(/{{TWITTER_IMAGE}}/g, imageUrl);
        } else {
            html = html.replace(/{{OG_IMAGE}}/g, `https://placehold.co/1200x630/8A2BE2/FFFFFF?text=${encodeURIComponent(meta.title || 'Course')}`);
            html = html.replace(/{{TWITTER_IMAGE}}/g, `https://placehold.co/1200x600/8A2BE2/FFFFFF?text=${encodeURIComponent(meta.title || 'Course')}`);
        }

        // Generate visible FAQ section (only if FAQs exist)
        const faqSectionHTML = this.generateFAQSectionHTML(courseData);
        html = html.replace(/{{FAQ_SECTION}}/g, faqSectionHTML);

        // Generate Related Courses section (auto-matched with image cards)
        const relatedCoursesHTML = this.generateRelatedCoursesHTML(courseData);
        html = html.replace(/{{RELATED_COURSES}}/g, relatedCoursesHTML);

        // Generate Related Blogs section (auto-matched with image cards)
        const relatedBlogsHTML = this.generateRelatedBlogsHTML(courseData);
        html = html.replace(/{{RELATED_BLOGS}}/g, relatedBlogsHTML);

        // Generate Why This Course section (only if why_this_course exists)
        const whyThisCourseHTML = this.generateWhyThisCourseHTML(courseData);
        html = html.replace(/{{WHY_THIS_COURSE}}/g, whyThisCourseHTML);

        // Generate Success Metrics section (only if success_metrics exists)
        const successMetricsHTML = this.generateSuccessMetricsHTML(courseData);
        html = html.replace(/{{SUCCESS_METRICS}}/g, successMetricsHTML);

        return html;
    }

    /**
     * Generate visible FAQ section HTML
     * Only generates content if FAQs exist, otherwise returns empty string
     * @param {Object} courseData - Course data object
     * @returns {string} HTML string for FAQ section or empty string
     */
    generateFAQSectionHTML(courseData) {
        const faqs = courseData.faqs || [];

        // Return empty string if no FAQs - this ensures courses without FAQs are not affected
        if (!Array.isArray(faqs) || faqs.length === 0) {
            return '';
        }

        const meta = courseData.meta || {};
        const courseTitle = meta.title || 'This Course';

        const faqItemsHTML = faqs.map((faq, index) => `
            <div class="faq-item" data-faq-index="${index}">
                <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${index}">
                    <span class="faq-question-text">${this.escapeHtml(faq.question)}</span>
                    <span class="faq-toggle-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </span>
                </button>
                <div class="faq-answer" id="faq-answer-${index}" aria-hidden="true">
                    <p>${this.escapeHtml(faq.answer)}</p>
                </div>
            </div>
        `).join('');

        return `
        <section class="faq-section" id="course-faqs">
            <div class="faq-container">
                <div class="faq-header">
                    <span class="faq-badge">Frequently Asked Questions</span>
                    <h2 class="faq-title">Common Questions About ${this.escapeHtml(courseTitle)}</h2>
                    <p class="faq-subtitle">Get answers to the most common questions about this comprehensive program</p>
                </div>
                
                <div class="faq-list">
                    ${faqItemsHTML}
                </div>
                
                <div class="faq-cta">
                    <p>Still have questions? We're here to help!</p>
                    <a href="/contact" class="faq-contact-btn">Contact Us</a>
                </div>
            </div>
            
            <style>
                .faq-section {
                    padding: 4rem 2rem;
                    background: linear-gradient(180deg, rgba(16, 16, 28, 0.95) 0%, rgba(10, 10, 20, 0.98) 100%);
                    position: relative;
                    overflow: hidden;
                }
                
                .faq-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.5), transparent);
                }
                
                .faq-container {
                    max-width: 900px;
                    margin: 0 auto;
                }
                
                .faq-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }
                
                .faq-badge {
                    display: inline-block;
                    padding: 0.5rem 1.25rem;
                    background: rgba(168, 85, 247, 0.15);
                    border: 1px solid rgba(168, 85, 247, 0.3);
                    border-radius: 2rem;
                    color: #a855f7;
                    font-size: 0.875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 1rem;
                }
                
                .faq-title {
                    font-size: 2.25rem;
                    font-weight: 700;
                    color: #F8FAFC;
                    margin-bottom: 1rem;
                    background: linear-gradient(135deg, #ffffff, #d1d8ff);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .faq-subtitle {
                    color: #94A3B8;
                    font-size: 1.1rem;
                    max-width: 600px;
                    margin: 0 auto;
                }
                
                .faq-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .faq-item {
                    background: rgba(16, 16, 28, 0.8);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 1rem;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }
                
                .faq-item:hover {
                    border-color: rgba(168, 85, 247, 0.3);
                    box-shadow: 0 4px 20px rgba(168, 85, 247, 0.1);
                }
                
                .faq-item.active {
                    border-color: rgba(168, 85, 247, 0.5);
                    background: rgba(24, 24, 40, 0.9);
                }
                
                .faq-question {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.25rem 1.5rem;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    text-align: left;
                    gap: 1rem;
                }
                
                .faq-question-text {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #F8FAFC;
                    line-height: 1.4;
                }
                
                .faq-toggle-icon {
                    flex-shrink: 0;
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(168, 85, 247, 0.15);
                    border-radius: 50%;
                    color: #a855f7;
                    transition: all 0.3s ease;
                }
                
                .faq-item.active .faq-toggle-icon {
                    transform: rotate(180deg);
                    background: rgba(168, 85, 247, 0.3);
                }
                
                .faq-answer {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease, padding 0.3s ease;
                }
                
                .faq-item.active .faq-answer {
                    max-height: 500px;
                }
                
                .faq-answer p {
                    padding: 0 1.5rem 1.5rem 1.5rem;
                    color: #CBD5E1;
                    font-size: 1rem;
                    line-height: 1.7;
                    margin: 0;
                }
                
                .faq-cta {
                    text-align: center;
                    margin-top: 3rem;
                    padding: 2rem;
                    background: rgba(168, 85, 247, 0.08);
                    border: 1px solid rgba(168, 85, 247, 0.2);
                    border-radius: 1rem;
                }
                
                .faq-cta p {
                    color: #CBD5E1;
                    margin-bottom: 1rem;
                    font-size: 1.1rem;
                }
                
                .faq-contact-btn {
                    display: inline-block;
                    padding: 0.875rem 2rem;
                    background: linear-gradient(135deg, #a855f7, #7c3aed);
                    color: white;
                    font-weight: 600;
                    border-radius: 0.75rem;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                
                .faq-contact-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(168, 85, 247, 0.4);
                }
                
                @media (max-width: 768px) {
                    .faq-section {
                        padding: 3rem 1rem;
                    }
                    
                    .faq-title {
                        font-size: 1.75rem;
                    }
                    
                    .faq-question {
                        padding: 1rem;
                    }
                    
                    .faq-question-text {
                        font-size: 1rem;
                    }
                    
                    .faq-answer p {
                        padding: 0 1rem 1rem 1rem;
                        font-size: 0.95rem;
                    }
                }
            </style>
            
            <script>
                // FAQ Accordion functionality
                document.querySelectorAll('.faq-question').forEach(button => {
                    button.addEventListener('click', () => {
                        const faqItem = button.closest('.faq-item');
                        const isActive = faqItem.classList.contains('active');
                        
                        // Close all other FAQs
                        document.querySelectorAll('.faq-item').forEach(item => {
                            item.classList.remove('active');
                            item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                            item.querySelector('.faq-answer').setAttribute('aria-hidden', 'true');
                        });
                        
                        // Toggle current FAQ
                        if (!isActive) {
                            faqItem.classList.add('active');
                            button.setAttribute('aria-expanded', 'true');
                            faqItem.querySelector('.faq-answer').setAttribute('aria-hidden', 'false');
                        }
                    });
                });
            </script>
        </section>
        `;
    }

    /**
     * Generate projects overview HTML
     */
    generateProjectsOverview(resources) {
        const projects = resources.projects_throughout_course || [];
        if (projects.length === 0) return '<p>No project information available</p>';

        return `
            <div class="phase-projects-list">
                ${projects.map(project => `
                    <div class="phase-project-item">
                        <div class="project-icon">🚀</div>
                        <div class="project-text">${this.escapeHtml(project)}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    /**
     * Generate weekly structure HTML
     */
    generateWeeklyStructure(structure) {
        if (Object.keys(structure).length === 0) return '<p>No weekly structure information available</p>';

        return `
            <div class="weekly-items">
                ${Object.entries(structure).map(([key, value]) => `
                    <div class="weekly-item">
                        <div class="weekly-label">${this.escapeHtml(key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()))}</div>
                        <div class="weekly-value">${this.escapeHtml(value)}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    /**
     * Generate certification details HTML
     */
    generateCertificationDetails(certification) {
        if (Object.keys(certification).length === 0) return '<p>No certification information available</p>';

        return `
            <div class="certification-items">
                ${Object.entries(certification).map(([key, value]) => `
                    <div class="certification-item">
                        <div class="cert-icon">🏆</div>
                        <div class="cert-content">
                            <div class="cert-label">${this.escapeHtml(key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()))}</div>
                            <div class="cert-value">${this.escapeHtml(value)}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    /**
     * Generate skills mastered HTML
     */
    generateSkillsMastered(skills) {
        if (skills.length === 0) return '<p>No skills information available</p>';

        return `
            <div class="skills-categories">
                ${skills.map(skill => {
            const parts = skill.split(':');
            const category = parts[0].trim();
            const items = parts.length > 1 ? parts[1].trim() : '';

            return `
                        <div class="skill-category">
                            <div class="skill-category-title">${this.escapeHtml(category)}</div>
                            <div class="skill-category-items">${this.escapeHtml(items)}</div>
                        </div>
                    `;
        }).join('')}
            </div>
        `;
    }

    /**
     * Generate support provided HTML
     */
    generateSupportProvided(support) {
        if (Object.keys(support).length === 0) return '<p>No support information available</p>';

        return `
            <div class="support-items">
                ${Object.entries(support).map(([key, value]) => `
                    <div class="support-item">
                        <div class="support-icon">✓</div>
                        <div class="support-content">
                            <div class="support-label">${this.escapeHtml(key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()))}</div>
                            <div class="support-value">${this.escapeHtml(value)}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    /**
     * Generate prerequisites HTML
     */
    generatePrerequisites(prerequisites) {
        if (Object.keys(prerequisites).length === 0) return '<p>No prerequisites</p>';

        return `
            <div class="prerequisites-items">
                ${Object.entries(prerequisites).map(([key, value]) => `
                    <div class="prerequisite-item">
                        <div class="prereq-label">${this.escapeHtml(key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()))}</div>
                        <div class="prereq-value">${this.escapeHtml(value)}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    /**
     * Generate who is this for HTML
     */
    generateWhoIsThisFor(audience) {
        if (Object.keys(audience).length === 0) return '<p>Open to everyone</p>';

        return `
            <div class="audience-items">
                ${Object.entries(audience).map(([key, value]) => `
                    <div class="audience-item">
                        <div class="audience-icon">👤</div>
                        <div class="audience-content">
                            <div class="audience-label">${this.escapeHtml(key.replace(/\b\w/g, l => l.toUpperCase()))}</div>
                            <div class="audience-value">${this.escapeHtml(value)}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    /**
     * Generate career paths HTML
     */
    generateCareerPaths(paths) {
        if (paths.length === 0) return '<p>Various career opportunities available</p>';

        return `
            <div class="career-paths-grid">
                ${paths.map(path => `
                    <div class="career-path-item">
                        <div class="career-icon">💼</div>
                        <div class="career-text">${this.escapeHtml(path)}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    /**
     * Generate salary expectations HTML
     */
    generateSalaryExpectations(salary) {
        if (Object.keys(salary).length === 0) return '<p>Competitive industry salaries</p>';

        return `
            <div class="salary-items">
                ${Object.entries(salary).map(([key, value]) => `
                    <div class="salary-item">
                        <div class="salary-period">${this.escapeHtml(key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()))}</div>
                        <div class="salary-amount">${this.escapeHtml(value)}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    /**
     * Generate course guarantees HTML
     */
    generateCourseGuarantees(guarantees) {
        if (Object.keys(guarantees).length === 0) return '<p>Quality assured</p>';

        return `
            <div class="guarantees-items">
                ${Object.entries(guarantees).map(([key, value]) => `
                    <div class="guarantee-item">
                        <div class="guarantee-icon">✓</div>
                        <div class="guarantee-content">
                            <div class="guarantee-label">${this.escapeHtml(key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()))}</div>
                            <div class="guarantee-value">${this.escapeHtml(value)}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    /**
     * Find related courses by category/keyword overlap, excluding the current course.
     * @param {Object} courseData - Current course data
     * @param {number} count - Number of related courses to return
     * @returns {Array} Array of related course metadata objects
     */
    findRelatedCourses(courseData, count = 2) {
        const meta = courseData.meta || {};
        const currentSlug = meta.slug || '';
        const currentCategory = (meta.category || '').toLowerCase();
        const currentKeywords = (meta.keywords || []).map(k => k.toLowerCase());

        // Score each course by relevance
        const scored = this.allCourseMeta
            .filter(c => c.slug !== currentSlug)
            .map(c => {
                let score = 0;
                // Same category = strong signal
                if (currentCategory && c.category.toLowerCase() === currentCategory) score += 10;
                // Keyword overlap
                const overlap = c.keywords.filter(k => currentKeywords.includes(k)).length;
                score += overlap * 2;
                return { ...c, score };
            })
            .sort((a, b) => b.score - a.score);

        // Take top N with score > 0, or random picks if no matches
        const matches = scored.filter(c => c.score > 0).slice(0, count);
        if (matches.length < count) {
            const remaining = scored.filter(c => !matches.find(m => m.slug === c.slug));
            while (matches.length < count && remaining.length > 0) {
                const idx = Math.floor(Math.random() * remaining.length);
                matches.push(remaining.splice(idx, 1)[0]);
            }
        }
        return matches;
    }

    /**
     * Find related blogs by keyword/tag overlap with the current course.
     * @param {Object} courseData - Current course data
     * @param {number} count - Number of related blogs to return
     * @returns {Array} Array of related blog metadata objects
     */
    findRelatedBlogs(courseData, count = 2) {
        const meta = courseData.meta || {};
        const currentCategory = (meta.category || '').toLowerCase();
        const currentKeywords = (meta.keywords || []).map(k => k.toLowerCase());
        const currentTitle = (meta.title || '').toLowerCase();

        const scored = this.allBlogMeta.map(b => {
            let score = 0;
            // Tag overlap with course keywords
            const tagOverlap = b.tags.filter(t => currentKeywords.some(k => k.includes(t) || t.includes(k))).length;
            score += tagOverlap * 3;
            // Keyword overlap
            const kwOverlap = b.keywords.filter(k => currentKeywords.includes(k)).length;
            score += kwOverlap * 2;
            // Category proximity
            if (currentCategory && b.category.toLowerCase() === currentCategory) score += 5;
            // Title word overlap
            const titleWords = currentTitle.split(/\s+/).filter(w => w.length > 3);
            const blogTitle = (b.title || '').toLowerCase();
            titleWords.forEach(w => { if (blogTitle.includes(w)) score += 1; });
            return { ...b, score };
        }).sort((a, b) => b.score - a.score);

        const matches = scored.filter(b => b.score > 0).slice(0, count);
        if (matches.length < count) {
            const remaining = scored.filter(b => !matches.find(m => m.slug === b.slug));
            while (matches.length < count && remaining.length > 0) {
                const idx = Math.floor(Math.random() * remaining.length);
                matches.push(remaining.splice(idx, 1)[0]);
            }
        }
        return matches;
    }

    /**
     * Generate Related Courses section HTML with image cards for internal linking.
     * Auto-selects 2 related courses by category/keyword matching.
     * @param {Object} courseData - Course data object
     * @returns {string} HTML string for related courses section
     */
    generateRelatedCoursesHTML(courseData) {
        const relatedCourses = this.findRelatedCourses(courseData, 2);

        if (relatedCourses.length === 0) {
            return '';
        }

        const meta = courseData.meta || {};

        const coursesHTML = relatedCourses.map(course => {
            const imageSrc = course.image_path
                ? `/content/courses/generated/${course.slug}/images/${path.basename(course.image_path)}`
                : `https://placehold.co/600x340/1a1a2e/4ecdc4?text=${encodeURIComponent(course.title.substring(0, 30))}`;
            const shortDesc = course.description
                ? course.description.substring(0, 100) + (course.description.length > 100 ? '...' : '')
                : 'Explore this comprehensive learning program';

            return `
            <a href="/courses/${course.slug}" class="il-card il-card--course">
                <div class="il-card__image-wrap">
                    <img src="${imageSrc}" alt="${this.escapeHtml(course.title)}" class="il-card__image" loading="lazy">
                    <span class="il-card__category">${this.escapeHtml(course.category || 'Course')}</span>
                </div>
                <div class="il-card__body">
                    <h4 class="il-card__title">${this.escapeHtml(course.title)}</h4>
                    <p class="il-card__desc">${this.escapeHtml(shortDesc)}</p>
                    <span class="il-card__link">Explore Course <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
                </div>
            </a>`;
        }).join('');

        return `
        <section class="il-section il-section--courses" id="related-courses">
            <div class="il-container">
                <div class="il-header">
                    <span class="il-badge">Explore More</span>
                    <h2 class="il-title">Related Courses You May Like</h2>
                    <p class="il-subtitle">Continue your learning journey with these recommended programs</p>
                </div>
                <div class="il-grid">
                    ${coursesHTML}
                </div>
            </div>
            ${this._internalLinkingCSS()}
        </section>
        `;
    }

    /**
     * Generate Related Blogs section HTML with image cards for internal linking.
     * Auto-selects 2 related blogs by keyword/tag matching.
     * @param {Object} courseData - Course data object
     * @returns {string} HTML string for related blogs section
     */
    generateRelatedBlogsHTML(courseData) {
        const relatedBlogs = this.findRelatedBlogs(courseData, 2);

        if (relatedBlogs.length === 0) {
            return '';
        }

        const blogsHTML = relatedBlogs.map(blog => {
            const imageSrc = blog.image_url
                || `https://placehold.co/600x340/1a1a2e/a855f7?text=${encodeURIComponent(blog.title.substring(0, 30))}`;
            const shortDesc = blog.description
                ? blog.description.substring(0, 100) + (blog.description.length > 100 ? '...' : '')
                : 'Read this insightful article';

            return `
            <a href="/blog/${blog.slug}" class="il-card il-card--blog">
                <div class="il-card__image-wrap">
                    <img src="${imageSrc}" alt="${this.escapeHtml(blog.image_alt || blog.title)}" class="il-card__image" loading="lazy">
                    <span class="il-card__category">${this.escapeHtml(blog.category || 'Article')}</span>
                    ${blog.readTime ? `<span class="il-card__read-time">${this.escapeHtml(blog.readTime)}</span>` : ''}
                </div>
                <div class="il-card__body">
                    <h4 class="il-card__title">${this.escapeHtml(blog.title)}</h4>
                    <p class="il-card__desc">${this.escapeHtml(shortDesc)}</p>
                    <span class="il-card__link il-card__link--blog">Read Article <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
                </div>
            </a>`;
        }).join('');

        return `
        <section class="il-section il-section--blogs" id="related-articles">
            <div class="il-container">
                <div class="il-header">
                    <span class="il-badge il-badge--blog">Recommended Reading</span>
                    <h2 class="il-title">Related Articles & Guides</h2>
                    <p class="il-subtitle">Deepen your knowledge with these hand-picked articles</p>
                </div>
                <div class="il-grid">
                    ${blogsHTML}
                </div>
            </div>
        </section>
        `;
    }

    /**
     * Shared CSS for the internal linking sections (courses + blogs).
     * Injected once by the first section that renders.
     * @returns {string} <style> block
     */
    _internalLinkingCSS() {
        return `
        <style>
            /* ── Internal Linking Sections ── */
            .il-section {
                margin-top: 3rem;
                padding: 4rem 2rem;
                position: relative;
                overflow: hidden;
            }
            .il-section::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 1px;
                background: linear-gradient(90deg, transparent, rgba(78, 205, 196, 0.4), rgba(168, 85, 247, 0.4), transparent);
            }
            .il-container {
                max-width: 1000px;
                margin: 0 auto;
            }
            .il-header {
                text-align: center;
                margin-bottom: 2.5rem;
            }
            .il-badge {
                display: inline-block;
                padding: 0.45rem 1.15rem;
                background: linear-gradient(135deg, rgba(78, 205, 196, 0.18), rgba(168, 85, 247, 0.12));
                border: 1px solid rgba(78, 205, 196, 0.25);
                border-radius: 2rem;
                font-size: 0.82rem;
                color: #4ecdc4;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                margin-bottom: 1rem;
            }
            .il-badge--blog {
                background: linear-gradient(135deg, rgba(168, 85, 247, 0.18), rgba(236, 72, 153, 0.12));
                border-color: rgba(168, 85, 247, 0.25);
                color: #a855f7;
            }
            .il-title {
                font-size: 2rem;
                font-weight: 800;
                color: #F8FAFC;
                margin-bottom: 0.5rem;
                background: linear-gradient(135deg, #ffffff, #c7d2fe);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            .il-subtitle {
                color: #94A3B8;
                font-size: 1.05rem;
            }
            .il-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 1.5rem;
            }

            /* ── Card ── */
            .il-card {
                background: rgba(16, 16, 32, 0.7);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 18px;
                overflow: hidden;
                text-decoration: none;
                display: flex;
                flex-direction: column;
                transition: transform 0.35s cubic-bezier(.22,1,.36,1),
                            box-shadow 0.35s cubic-bezier(.22,1,.36,1),
                            border-color 0.35s ease;
            }
            .il-card:hover {
                transform: translateY(-6px);
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4),
                            0 0 30px rgba(78, 205, 196, 0.08);
                border-color: rgba(78, 205, 196, 0.35);
            }
            .il-card--blog:hover {
                border-color: rgba(168, 85, 247, 0.35);
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4),
                            0 0 30px rgba(168, 85, 247, 0.08);
            }

            /* Image */
            .il-card__image-wrap {
                position: relative;
                width: 100%;
                height: 200px;
                overflow: hidden;
            }
            .il-card__image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.5s ease;
            }
            .il-card:hover .il-card__image {
                transform: scale(1.06);
            }
            .il-card__category {
                position: absolute;
                top: 12px;
                left: 12px;
                padding: 0.3rem 0.75rem;
                background: rgba(10, 10, 20, 0.75);
                backdrop-filter: blur(6px);
                -webkit-backdrop-filter: blur(6px);
                border: 1px solid rgba(255,255,255,0.1);
                border-radius: 8px;
                font-size: 0.72rem;
                font-weight: 600;
                color: #4ecdc4;
                text-transform: uppercase;
                letter-spacing: 0.04em;
            }
            .il-card--blog .il-card__category { color: #a855f7; }
            .il-card__read-time {
                position: absolute;
                top: 12px;
                right: 12px;
                padding: 0.3rem 0.75rem;
                background: rgba(10, 10, 20, 0.75);
                backdrop-filter: blur(6px);
                -webkit-backdrop-filter: blur(6px);
                border: 1px solid rgba(255,255,255,0.1);
                border-radius: 8px;
                font-size: 0.72rem;
                font-weight: 600;
                color: #CBD5E1;
            }

            /* Body */
            .il-card__body {
                padding: 1.25rem 1.35rem 1.5rem;
                display: flex;
                flex-direction: column;
                flex: 1;
            }
            .il-card__title {
                font-size: 1.05rem;
                font-weight: 700;
                color: #F1F5F9;
                line-height: 1.35;
                margin-bottom: 0.5rem;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            .il-card__desc {
                color: #94A3B8;
                font-size: 0.88rem;
                line-height: 1.55;
                margin-bottom: 1rem;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                flex: 1;
            }
            .il-card__link {
                display: inline-flex;
                align-items: center;
                gap: 0.4rem;
                color: #4ecdc4;
                font-weight: 600;
                font-size: 0.85rem;
                transition: gap 0.25s ease;
            }
            .il-card__link--blog { color: #a855f7; }
            .il-card:hover .il-card__link { gap: 0.7rem; }

            /* ── Responsive ── */
            @media (max-width: 768px) {
                .il-section { padding: 3rem 1rem; }
                .il-title { font-size: 1.5rem; }
                .il-grid { grid-template-columns: 1fr; }
                .il-card__image-wrap { height: 180px; }
            }
        </style>`;
    }

    /**
     * Generate Why This Course section for unique content
     * @param {Object} courseData - Course data object
     * @returns {string} HTML string for why this course section
     */
    generateWhyThisCourseHTML(courseData) {
        const whyContent = courseData.why_this_course || {};

        if (Object.keys(whyContent).length === 0) {
            return '';
        }

        const meta = courseData.meta || {};
        const title = whyContent.title || `Why Choose ${meta.title || 'This Course'}?`;
        const paragraphs = whyContent.paragraphs || [];
        const highlights = whyContent.highlights || [];

        const paragraphsHTML = paragraphs.map(p => `<p>${this.escapeHtml(p)}</p>`).join('');
        const highlightsHTML = highlights.map(h => `
            <div class="why-highlight">
                <span class="why-highlight-icon">✓</span>
                <span class="why-highlight-text">${this.escapeHtml(h)}</span>
            </div>
        `).join('');

        return `
        <section class="why-this-course-section" id="why-this-course">
            <div class="why-course-container">
                <div class="why-course-header">
                    <span class="why-course-badge">Why Choose Us</span>
                    <h2 class="why-course-title">${this.escapeHtml(title)}</h2>
                </div>
                <div class="why-course-content">
                    <div class="why-course-text">
                        ${paragraphsHTML}
                    </div>
                    ${highlightsHTML.length > 0 ? `<div class="why-course-highlights">${highlightsHTML}</div>` : ''}
                </div>
            </div>
            <style>
                .why-this-course-section {
                    margin-top: 3rem;
                    padding: 3rem 2rem;
                    background: linear-gradient(145deg, rgba(10, 25, 47, 0.95), rgba(17, 34, 64, 0.9));
                    border-radius: 24px;
                    border: 1px solid rgba(168, 85, 247, 0.2);
                }
                .why-course-header { text-align: center; margin-bottom: 2rem; }
                .why-course-badge {
                    display: inline-block;
                    padding: 0.5rem 1rem;
                    background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.15));
                    border-radius: 20px;
                    font-size: 0.875rem;
                    color: #a855f7;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }
                .why-course-title {
                    font-size: 2rem;
                    font-weight: 800;
                    color: #f1f5f9;
                }
                .why-course-text p {
                    color: rgba(203, 213, 225, 0.9);
                    font-size: 1.05rem;
                    line-height: 1.8;
                    margin-bottom: 1.25rem;
                }
                .why-course-highlights {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1rem;
                    margin-top: 2rem;
                }
                .why-highlight {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    padding: 1rem;
                    background: rgba(255, 255, 255, 0.03);
                    border-radius: 12px;
                }
                .why-highlight-icon {
                    color: #4ecdc4;
                    font-weight: bold;
                    font-size: 1.25rem;
                }
                .why-highlight-text {
                    color: #e2e8f0;
                    font-size: 0.95rem;
                }
            </style>
        </section>
        `;
    }

    /**
     * Generate Success Metrics section for social proof
     * @param {Object} courseData - Course data object
     * @returns {string} HTML string for success metrics section
     */
    generateSuccessMetricsHTML(courseData) {
        const metrics = courseData.success_metrics || {};

        if (Object.keys(metrics).length === 0) {
            return '';
        }

        const metricsHTML = Object.entries(metrics).map(([key, value]) => `
            <div class="success-metric-card">
                <div class="success-metric-value">${this.escapeHtml(value)}</div>
                <div class="success-metric-label">${this.escapeHtml(key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()))}</div>
            </div>
        `).join('');

        return `
        <section class="success-metrics-section" id="success-metrics">
            <div class="success-metrics-container">
                <div class="success-metrics-header">
                    <span class="success-badge">Proven Results</span>
                    <h2 class="success-title">Our Impact in Numbers</h2>
                </div>
                <div class="success-metrics-grid">
                    ${metricsHTML}
                </div>
            </div>
            <style>
                .success-metrics-section {
                    margin-top: 3rem;
                    padding: 3rem 2rem;
                    background: linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(168, 85, 247, 0.1));
                    border-radius: 24px;
                    border: 1px solid rgba(78, 205, 196, 0.25);
                }
                .success-metrics-header { text-align: center; margin-bottom: 2.5rem; }
                .success-badge {
                    display: inline-block;
                    padding: 0.5rem 1rem;
                    background: linear-gradient(135deg, #4ecdc4, #22d3ee);
                    border-radius: 20px;
                    font-size: 0.875rem;
                    color: #0a1929;
                    font-weight: 700;
                    margin-bottom: 1rem;
                }
                .success-title {
                    font-size: 2rem;
                    font-weight: 800;
                    color: #f1f5f9;
                }
                .success-metrics-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                    gap: 1.5rem;
                }
                .success-metric-card {
                    text-align: center;
                    padding: 2rem 1.5rem;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 16px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .success-metric-value {
                    font-size: 2.5rem;
                    font-weight: 800;
                    background: linear-gradient(135deg, #4ecdc4, #a855f7);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    margin-bottom: 0.5rem;
                }
                .success-metric-label {
                    color: rgba(148, 163, 184, 0.9);
                    font-size: 0.9rem;
                    text-transform: capitalize;
                }
            </style>
        </section>
        `;
    }
}

// CLI execution
if (require.main === module) {
    const generator = new CourseGenerator();
    generator.generate().catch(error => {
        console.error('Fatal error:', error);
        process.exit(1);
    });
}

module.exports = CourseGenerator;