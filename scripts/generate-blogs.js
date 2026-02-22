#!/usr/bin/env node

/**
 * Blog Generator for Modern Age Coders
 * Generates blog pages from JSON data files
 */

const fs = require('fs');
const path = require('path');

// Import SEO configuration and utilities
const SEO_CONFIG = require('./seo-config.js');
const seoUtils = require('./seo-utils.js');

class BlogGenerator {
    constructor() {
        this.projectRoot = path.resolve(__dirname, '..');
        this.dataDir = path.join(this.projectRoot, 'content', 'blog', 'data');
        this.templateDir = path.join(this.projectRoot, 'content', 'blog', 'template');
        this.generatedDir = path.join(this.projectRoot, 'content', 'blog', 'generated');
        this.blogTemplatePath = path.join(this.templateDir, 'blog-template.html');
        this.listingTemplatePath = path.join(this.templateDir, 'blog-listing-template.html');
        this.imagesDir = path.join(this.projectRoot, 'content', 'blog', 'images');
        this.courseDataDir = path.join(this.projectRoot, 'content', 'courses', 'data');
        // Preloaded course metadata for internal linking
        this.allCourseMeta = [];
        // Slug-to-filepath lookup map for related posts
        this.slugToFileMap = {};
    }

    /**
     * Build a lookup map from blog slug to actual file path.
     * This is needed because JSON filenames don't always match the slug.
     */
    buildSlugToFileMap() {
        const files = this.getBlogFiles();
        for (const file of files) {
            try {
                const data = this.loadBlogData(file);
                if (data.meta && data.meta.slug) {
                    this.slugToFileMap[data.meta.slug] = path.join(this.dataDir, file);
                }
            } catch (e) {
                // Skip invalid files
            }
        }
        console.log(`🔗 Built slug-to-file map with ${Object.keys(this.slugToFileMap).length} entries`);
    }

    /**
     * Preload all course metadata for blog-to-course internal linking.
     * Called once at the start of generate().
     */
    preloadCourseMetadata() {
        try {
            const courseFiles = fs.readdirSync(this.courseDataDir).filter(f => f.endsWith('.json'));
            this.allCourseMeta = courseFiles.map(file => {
                try {
                    const data = JSON.parse(fs.readFileSync(path.join(this.courseDataDir, file), 'utf8'));
                    const meta = data.meta || {};
                    return {
                        slug: meta.slug || '',
                        title: meta.title || '',
                        description: meta.description || '',
                        category: meta.category || '',
                        keywords: (meta.keywords || []).map(k => k.toLowerCase()),
                        image_path: meta.image_path || '',
                        level: meta.level || '',
                        duration: meta.duration || ''
                    };
                } catch (e) {
                    return null;
                }
            }).filter(Boolean);
            console.log(`📚 Preloaded ${this.allCourseMeta.length} course metadata entries for internal linking`);
        } catch (e) {
            console.warn('⚠️  Could not preload course metadata:', e.message);
        }
    }

    /**
     * Main generation method
     */
    async generate() {
        try {
            console.log('🚀 Generating blog posts...');

            // Create directories if needed
            this.ensureDirectories();

            // Build slug-to-file lookup map for related posts
            this.buildSlugToFileMap();

            // Preload course metadata for internal linking
            this.preloadCourseMetadata();

            // Load templates
            console.log('📄 Loading templates...');
            const blogTemplate = fs.readFileSync(this.blogTemplatePath, 'utf8');
            const listingTemplate = fs.readFileSync(this.listingTemplatePath, 'utf8');

            // Get blog data files
            const blogFiles = this.getBlogFiles();

            if (blogFiles.length === 0) {
                console.log('⚠️  No blog files found in blog/data/');
                return;
            }

            console.log(`📝 Found ${blogFiles.length} blog post(s)`);

            // Store all blog data for listing page
            const allBlogData = [];

            // Generate each blog post
            for (const file of blogFiles) {
                try {
                    const blogData = this.loadBlogData(file);

                    // Validate blog data
                    if (!this.validateBlogData(blogData, file)) {
                        continue;
                    }

                    console.log(`  ✏️  Generating: ${blogData.meta.slug}`);

                    // Generate blog post
                    this.generateBlogPost(blogTemplate, blogData);

                    // Store for listing page
                    allBlogData.push(blogData);

                } catch (error) {
                    console.error(`  ❌ Error processing ${file}: ${error.message}`);
                    continue;
                }
            }

            // Generate listing page
            if (allBlogData.length > 0) {
                console.log('📋 Generating blog listing page...');
                this.generateListingPage(listingTemplate, allBlogData);
            }

            console.log('✅ Blog generation complete!');

        } catch (error) {
            console.error('❌ Fatal error:', error.message);
            process.exit(1);
        }
    }

    /**
     * Ensure all required directories exist
     */
    ensureDirectories() {
        const dirs = [
            this.generatedDir,
            path.join(this.imagesDir, 'featured'),
            path.join(this.imagesDir, 'content')
        ];

        dirs.forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        });
    }

    /**
     * Get all blog JSON files
     */
    getBlogFiles() {
        if (!fs.existsSync(this.dataDir)) {
            return [];
        }
        return fs.readdirSync(this.dataDir).filter(f => f.endsWith('.json'));
    }

    /**
     * Load blog data from JSON file
     */
    loadBlogData(filename) {
        const filePath = path.join(this.dataDir, filename);
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    }

    /**
     * Validate blog data has required fields
     */
    validateBlogData(blogData, filename) {
        const required = ['meta', 'hero', 'content'];
        const metaRequired = ['slug', 'title', 'description', 'author', 'date'];

        // Check top-level fields
        for (const field of required) {
            if (!blogData[field]) {
                console.error(`  ❌ ${filename}: Missing required field '${field}'`);
                return false;
            }
        }

        // Check meta fields
        for (const field of metaRequired) {
            if (!blogData.meta[field]) {
                console.error(`  ❌ ${filename}: Missing required meta field '${field}'`);
                return false;
            }
        }

        // Validate date format (YYYY-MM-DD)
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(blogData.meta.date)) {
            console.error(`  ❌ ${filename}: Invalid date format. Use YYYY-MM-DD`);
            return false;
        }

        return true;
    }

    /**
     * Generate individual blog post
     */
    generateBlogPost(template, blogData) {
        const slug = blogData.meta.slug;

        // Create blog post directory
        const blogDir = path.join(this.generatedDir, slug);
        if (!fs.existsSync(blogDir)) {
            fs.mkdirSync(blogDir, { recursive: true });
        }

        // Populate template
        const html = this.populateTemplate(template, blogData);

        // Write HTML file
        fs.writeFileSync(path.join(blogDir, 'index.html'), html);

        // Copy CSS files
        const cssFiles = ['style.css', 'responsive.css', 'blog-styles.css', 'share-button.css'];
        cssFiles.forEach(cssFile => {
            const cssSource = path.join(this.projectRoot, 'src', 'css', cssFile);
            const cssDest = path.join(blogDir, cssFile);
            if (fs.existsSync(cssSource)) {
                fs.copyFileSync(cssSource, cssDest);
            }
        });

        // Copy JavaScript files
        const jsFiles = ['blog-navigation.js', 'blog-interactive.js', 'navigation.js', 'mobile-navigation.js', 'share-button.js'];
        jsFiles.forEach(jsFile => {
            const jsSource = path.join(this.projectRoot, 'src', 'js', jsFile);
            const jsDest = path.join(blogDir, jsFile);
            if (fs.existsSync(jsSource)) {
                fs.copyFileSync(jsSource, jsDest);
            }
        });
    }

    /**
     * Generate HTML content from content sections
     */
    generateContent(sections) {
        if (!sections || !Array.isArray(sections)) {
            return '';
        }

        let html = '';

        for (const section of sections) {
            switch (section.type) {
                case 'paragraph':
                    const pClass = section.className || '';
                    html += `<p class="${pClass}">${section.text}</p>\n`;
                    break;

                case 'heading':
                    const level = section.level || 2;
                    const hId = section.id ? ` id="${section.id}"` : '';
                    const hClass = section.className || '';
                    html += `<h${level}${hId} class="${hClass}">${section.text}</h${level}>\n`;
                    break;

                case 'list':
                    const listTag = section.style === 'ordered' ? 'ol' : 'ul';
                    const listClass = section.className || '';
                    html += `<${listTag} class="${listClass}">\n`;
                    section.items.forEach(item => {
                        html += `  <li>${item}</li>\n`;
                    });
                    html += `</${listTag}>\n`;
                    break;

                case 'image':
                    html += `<figure class="blog-image ${section.className || ''}">\n`;
                    html += `  <img src="${section.url}" alt="${section.alt}" loading="lazy">\n`;
                    if (section.caption) {
                        html += `  <figcaption>${section.caption}</figcaption>\n`;
                    }
                    html += `</figure>\n`;
                    break;

                case 'code':
                    const language = section.language || 'plaintext';
                    const codeTitle = section.title ? `<div class="code-title">${section.title}</div>\n` : '';
                    html += `<div class="code-block">\n${codeTitle}`;
                    html += `<pre><code class="language-${language}">${this.escapeHtml(section.code)}</code></pre>\n`;
                    html += `</div>\n`;
                    break;

                case 'quote':
                    html += `<blockquote class="${section.className || ''}">\n`;
                    html += `  <p>${section.text}</p>\n`;
                    if (section.author) {
                        html += `  <cite>— ${section.author}</cite>\n`;
                    }
                    html += `</blockquote>\n`;
                    break;

                case 'callout':
                    const calloutType = section.calloutType || 'info';
                    const calloutIcon = this.getCalloutIcon(calloutType);
                    html += `<div class="callout callout-${calloutType}">\n`;
                    html += `  <div class="callout-icon">${calloutIcon}</div>\n`;
                    html += `  <div class="callout-content">\n`;
                    if (section.title) {
                        html += `    <h4 class="callout-title">${section.title}</h4>\n`;
                    }
                    html += `    <p>${section.text}</p>\n`;
                    html += `  </div>\n`;
                    html += `</div>\n`;
                    break;

                case 'video':
                    html += `<div class="blog-video">\n`;
                    if (section.platform === 'youtube') {
                        html += `  <iframe src="https://www.youtube.com/embed/${section.videoId}" frameborder="0" allowfullscreen></iframe>\n`;
                    } else if (section.platform === 'vimeo') {
                        html += `  <iframe src="https://player.vimeo.com/video/${section.videoId}" frameborder="0" allowfullscreen></iframe>\n`;
                    } else {
                        html += `  <video controls src="${section.url}"></video>\n`;
                    }
                    if (section.caption) {
                        html += `  <p class="video-caption">${section.caption}</p>\n`;
                    }
                    html += `</div>\n`;
                    break;

                case 'table':
                    html += `<div class="table-wrapper">\n`;
                    html += `<table class="blog-table">\n`;
                    if (section.headers) {
                        html += `  <thead>\n    <tr>\n`;
                        section.headers.forEach(header => {
                            html += `      <th>${header}</th>\n`;
                        });
                        html += `    </tr>\n  </thead>\n`;
                    }
                    html += `  <tbody>\n`;
                    section.rows.forEach(row => {
                        html += `    <tr>\n`;
                        row.forEach(cell => {
                            html += `      <td>${cell}</td>\n`;
                        });
                        html += `    </tr>\n`;
                    });
                    html += `  </tbody>\n`;
                    html += `</table>\n`;
                    html += `</div>\n`;
                    break;

                case 'accordion':
                    html += `<div class="accordion">\n`;
                    section.items.forEach((item, index) => {
                        html += `  <div class="accordion-item">\n`;
                        html += `    <button class="accordion-header" data-accordion="${index}">\n`;
                        html += `      ${item.title}\n`;
                        html += `      <span class="accordion-icon">+</span>\n`;
                        html += `    </button>\n`;
                        html += `    <div class="accordion-content">\n`;
                        html += `      <p>${item.content}</p>\n`;
                        html += `    </div>\n`;
                        html += `  </div>\n`;
                    });
                    html += `</div>\n`;
                    break;

                case 'button':
                    const btnClass = section.style || 'primary';
                    const btnTarget = section.newTab ? ' target="_blank" rel="noopener noreferrer"' : '';
                    html += `<div class="blog-button-wrapper">\n`;
                    html += `  <a href="${section.url}" class="blog-button blog-button-${btnClass}"${btnTarget}>${section.text}</a>\n`;
                    html += `</div>\n`;
                    break;

                case 'divider':
                    const dividerStyle = section.style || 'default';
                    html += `<hr class="blog-divider blog-divider-${dividerStyle}">\n`;
                    break;

                case 'gallery':
                    html += `<div class="blog-gallery">\n`;
                    section.images.forEach(img => {
                        html += `  <figure class="gallery-item">\n`;
                        html += `    <img src="${img.url}" alt="${img.alt}" loading="lazy">\n`;
                        if (img.caption) {
                            html += `    <figcaption>${img.caption}</figcaption>\n`;
                        }
                        html += `  </figure>\n`;
                    });
                    html += `</div>\n`;
                    break;

                case 'embed':
                    html += `<div class="blog-embed">\n`;
                    html += section.html;
                    html += `</div>\n`;
                    break;

                case 'toc':
                    html += this.generateTableOfContents(sections);
                    break;

                case 'columns':
                    const colCount = section.columns.length;
                    html += `<div class="blog-columns blog-columns-${colCount}">\n`;
                    section.columns.forEach(col => {
                        html += `  <div class="blog-column">\n`;
                        html += this.generateContent(col.content);
                        html += `  </div>\n`;
                    });
                    html += `</div>\n`;
                    break;

                default:
                    console.warn(`  ⚠️  Unknown content type: ${section.type}`);
            }
        }

        return html;
    }

    /**
     * Get callout icon based on type
     */
    getCalloutIcon(type) {
        const icons = {
            'info': 'ℹ️',
            'warning': '⚠️',
            'success': '✅',
            'error': '❌',
            'tip': '💡',
            'note': '📝'
        };
        return icons[type] || icons['info'];
    }

    /**
     * Generate table of contents from headings
     */
    generateTableOfContents(sections) {
        let html = '<div class="table-of-contents">\n';
        html += '  <h3>Table of Contents</h3>\n';
        html += '  <ul class="toc-list">\n';

        sections.forEach(section => {
            if (section.type === 'heading' && section.level === 2) {
                const id = section.id || this.slugify(section.text);
                html += `    <li><a href="#${id}">${section.text}</a></li>\n`;
            }
        });

        html += '  </ul>\n';
        html += '</div>\n';
        return html;
    }

    /**
     * Create URL-friendly slug from text
     */
    slugify(text) {
        return text
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
    }

    /**
     * Escape HTML special characters
     */
    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    /**
     * Format date for display
     */
    formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    /**
     * Generate structured data (JSON-LD) for blog post
     */
    generateStructuredData(blogData) {
        // Generate BlogPosting schema using SEO utilities
        const blogPostingSchema = seoUtils.generateBlogPostingSchema(blogData);

        // Generate breadcrumb schema for blog post
        const breadcrumbs = [
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: blogData.meta.title, url: `/blog/${blogData.meta.slug}` }
        ];
        const breadcrumbSchema = seoUtils.generateBreadcrumbSchema(breadcrumbs);

        // Combine schemas into an array
        const schemas = [blogPostingSchema, breadcrumbSchema];

        // Extract FAQ items from accordion sections and add FAQPage schema
        const faqItems = this.extractFAQItems(blogData.content?.sections || []);
        if (faqItems.length > 0) {
            const faqSchema = seoUtils.generateFAQSchema(faqItems);
            schemas.push(faqSchema);
        }

        return JSON.stringify(schemas, null, 2);
    }

    /**
     * Extract FAQ items from accordion sections in content
     */
    extractFAQItems(sections) {
        const faqItems = [];

        for (const section of sections) {
            if (section.type === 'accordion' && section.items) {
                for (const item of section.items) {
                    if (item.title && item.content) {
                        faqItems.push({
                            question: item.title,
                            answer: item.content
                        });
                    }
                }
            }
        }

        return faqItems;
    }

    /**
     * Populate template with blog data
     */
    populateTemplate(template, blogData) {
        let html = template;

        // Meta replacements
        html = html.replace(/{{BLOG_TITLE}}/g, blogData.meta.title);
        html = html.replace(/{{BLOG_DESCRIPTION}}/g, blogData.meta.description);
        html = html.replace(/{{BLOG_KEYWORDS}}/g, (blogData.meta.keywords || []).join(', '));
        html = html.replace(/{{BLOG_SLUG}}/g, blogData.meta.slug);
        html = html.replace(/{{BLOG_CATEGORY}}/g, blogData.meta.category || 'Blog');
        html = html.replace(/{{BLOG_TAGS}}/g, (blogData.meta.tags || []).join(', '));
        html = html.replace(/{{BLOG_READ_TIME}}/g, blogData.meta.readTime || '5 min read');

        // Author replacements
        html = html.replace(/{{BLOG_AUTHOR_NAME}}/g, blogData.meta.author.name);
        html = html.replace(/{{BLOG_AUTHOR_BIO}}/g, blogData.meta.author.bio || '');
        html = html.replace(/{{BLOG_AUTHOR_AVATAR}}/g, blogData.meta.author.avatar || '/images/default-avatar.png');

        // Date replacements
        html = html.replace(/{{BLOG_DATE}}/g, this.formatDate(blogData.meta.date));
        html = html.replace(/{{BLOG_DATE_ISO}}/g, blogData.meta.date);
        html = html.replace(/{{BLOG_DATE_MODIFIED_ISO}}/g, blogData.meta.dateModified || blogData.meta.date);

        // Hero section replacements
        html = html.replace(/{{HERO_TITLE}}/g, blogData.hero.title || blogData.meta.title);
        html = html.replace(/{{HERO_SUBTITLE}}/g, blogData.hero.subtitle || blogData.meta.description);
        html = html.replace(/{{HERO_IMAGE_URL}}/g, blogData.hero.featuredImage.url);
        html = html.replace(/{{HERO_IMAGE_ALT}}/g, blogData.hero.featuredImage.alt);

        // Content replacement
        const contentHtml = this.generateContent(blogData.content.sections);
        html = html.replace(/{{BLOG_CONTENT}}/g, contentHtml);

        // Related posts replacement
        const relatedPostsHtml = this.generateRelatedPosts(blogData.relatedPosts || []);
        html = html.replace(/{{RELATED_POSTS}}/g, relatedPostsHtml);

        // Structured data replacement
        const structuredData = this.generateStructuredData(blogData);
        html = html.replace(/{{STRUCTURED_DATA}}/g, structuredData);

        // Related Courses section (auto-matched for internal linking)
        const relatedCoursesHtml = this.generateRelatedCoursesHTML(blogData);
        html = html.replace(/{{RELATED_COURSES}}/g, relatedCoursesHtml);

        return html;
    }

    /**
     * Generate related posts HTML
     */
    generateRelatedPosts(relatedSlugs) {
        if (!relatedSlugs || relatedSlugs.length === 0) {
            return '<p class="no-related">No related posts yet.</p>';
        }

        let html = '';

        for (const slug of relatedSlugs) {
            try {
                const relatedPath = this.slugToFileMap[slug];

                if (relatedPath && fs.existsSync(relatedPath)) {
                    const relatedData = JSON.parse(fs.readFileSync(relatedPath, 'utf8'));
                    html += this.generateBlogCard(relatedData);
                } else {
                    console.warn(`  ⚠️  No file found for related post slug: ${slug}`);
                }
            } catch (error) {
                console.warn(`  ⚠️  Could not load related post: ${slug}`);
            }
        }

        return html || '<p class="no-related">No related posts available.</p>';
    }

    /**
     * Generate a blog card HTML
     */
    generateBlogCard(blogData) {
        const category = blogData.meta.category || 'Blog';
        const tags = (blogData.meta.tags || []).join(',');
        return `
        <div class="blog-card" data-blog-url="${blogData.meta.slug}" data-category="${category}" data-tags="${tags}">
            <div class="blog-card-image">
                <img src="${blogData.hero.featuredImage.url}" alt="${blogData.hero.featuredImage.alt}">
            </div>
            <div class="blog-card-content">
                <span class="blog-card-category">${category}</span>
                <h3 class="blog-card-title">${blogData.meta.title}</h3>
                <p class="blog-card-excerpt">${blogData.meta.description}</p>
                <div class="blog-card-footer">
                    <span class="blog-card-date">${this.formatDate(blogData.meta.date)}</span>
                    <span class="blog-card-read-time">${blogData.meta.readTime || '5 min read'}</span>
                </div>
            </div>
        </div>
    `;
    }

    /**
     * Find related courses for a blog by keyword/tag overlap.
     * @param {Object} blogData - Current blog data
     * @param {number} count - Number of related courses to return
     * @returns {Array} Array of related course metadata objects
     */
    findRelatedCourses(blogData, count = 2) {
        const meta = blogData.meta || {};
        const blogCategory = (meta.category || '').toLowerCase();
        const blogKeywords = (meta.keywords || []).map(k => k.toLowerCase());
        const blogTags = (meta.tags || []).map(t => t.toLowerCase());
        const blogTitle = (meta.title || '').toLowerCase();

        const scored = this.allCourseMeta.map(c => {
            let score = 0;
            // Keyword overlap with course keywords
            const kwOverlap = c.keywords.filter(k => blogKeywords.includes(k)).length;
            score += kwOverlap * 2;
            // Blog tag overlap with course keywords
            const tagOverlap = blogTags.filter(t => c.keywords.some(k => k.includes(t) || t.includes(k))).length;
            score += tagOverlap * 3;
            // Category proximity
            if (blogCategory && c.category.toLowerCase().includes(blogCategory)) score += 5;
            if (blogCategory && blogCategory.includes(c.category.toLowerCase())) score += 3;
            // Title word overlap
            const titleWords = blogTitle.split(/\s+/).filter(w => w.length > 3);
            const courseTitle = (c.title || '').toLowerCase();
            titleWords.forEach(w => { if (courseTitle.includes(w)) score += 1; });
            return { ...c, score };
        }).sort((a, b) => b.score - a.score);

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
     * Generate Related Courses section HTML for blog pages.
     * Auto-selects 2 related courses by keyword/tag matching.
     * @param {Object} blogData - Blog data object
     * @returns {string} HTML string for related courses section
     */
    generateRelatedCoursesHTML(blogData) {
        const relatedCourses = this.findRelatedCourses(blogData, 2);

        if (relatedCourses.length === 0) {
            return '';
        }

        const coursesHTML = relatedCourses.map(course => {
            const imageSrc = course.image_path
                ? `/content/courses/generated/${course.slug}/images/${path.basename(course.image_path)}`
                : `https://placehold.co/600x340/1a1a2e/4ecdc4?text=${encodeURIComponent(course.title.substring(0, 30))}`;
            const shortDesc = course.description
                ? course.description.substring(0, 110) + (course.description.length > 110 ? '...' : '')
                : 'Explore this comprehensive learning program';

            return `
            <a href="/courses/${course.slug}" class="il-card il-card--course">
                <div class="il-card__image-wrap">
                    <img src="${imageSrc}" alt="${this.escapeHtml(course.title)}" class="il-card__image" loading="lazy">
                    <span class="il-card__category">${this.escapeHtml(course.category || 'Course')}</span>
                    ${course.level ? `<span class="il-card__level">${this.escapeHtml(course.level)}</span>` : ''}
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
                    <span class="il-badge">Level Up Your Skills</span>
                    <h2 class="il-title">Related Courses You May Like</h2>
                    <p class="il-subtitle">Take your knowledge further with these hands-on programs</p>
                </div>
                <div class="il-grid">
                    ${coursesHTML}
                </div>
            </div>
            <style>
                /* ── Blog Internal Linking: Related Courses ── */
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
                .il-card__level {
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
                .il-card:hover .il-card__link { gap: 0.7rem; }
                @media (max-width: 768px) {
                    .il-section { padding: 3rem 1rem; }
                    .il-title { font-size: 1.5rem; }
                    .il-grid { grid-template-columns: 1fr; }
                    .il-card__image-wrap { height: 180px; }
                }
            </style>
        </section>
        `;
    }

    /**
 * Generate blog listing page
 */
    generateListingPage(template, allBlogData) {
        // Sort blog posts by date (newest first)
        allBlogData.sort((a, b) => {
            return new Date(b.meta.date) - new Date(a.meta.date);
        });

        // Find featured post if any
        const featuredPost = allBlogData.find(blog => blog.meta.featured === true);
        let featuredHtml = '';

        if (featuredPost) {
            featuredHtml = `
            <section class="featured-post-section section">
                <div class="featured-post">
                    <div class="featured-post-image">
                        <img src="${featuredPost.hero.featuredImage.url}" alt="${featuredPost.hero.featuredImage.alt}">
                    </div>
                    <div class="featured-post-content">
                        <div class="featured-post-tags" style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap; margin-bottom: 0.5rem;">
                        <span class="blog-featured-badge">Featured</span>
                        <span class="blog-card-category" style="margin-bottom: 0;">${featuredPost.meta.category || 'Blog'}</span>
                    </div>
                        <h2>${featuredPost.meta.title}</h2>
                        <p>${featuredPost.meta.description}</p>
                        <div class="featured-post-meta">
                            <span class="blog-card-date">${this.formatDate(featuredPost.meta.date)}</span>
                            <span class="blog-card-read-time">${featuredPost.meta.readTime || '5 min read'}</span>
                        </div>
                        <a href="/blog/${featuredPost.meta.slug}" class="cta-button">Read Article</a>
                    </div>
                </div>
            </section>
        `;
        }

        // Build category counts for sidebar
        const categoryCounts = {};
        for (const blog of allBlogData) {
            const cat = blog.meta.category || 'Uncategorized';
            categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
        }
        // Sort categories by count descending
        const sortedCategories = Object.entries(categoryCounts)
            .sort((a, b) => b[1] - a[1]);

        // Generate category pills HTML
        let categoryPillsHtml = '<button class="blog-category-pill active" data-filter="all">All</button>\n';
        for (const [cat] of sortedCategories) {
            categoryPillsHtml += `                        <button class="blog-category-pill" data-filter="${cat}">${cat}</button>\n`;
        }

        // Generate search & filter toolbar HTML
        const searchFilterHtml = `
        <section class="blog-search-filter-section section">
            <div class="blog-search-filter">
                <div class="blog-search-box">
                    <svg class="blog-search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <input type="text" id="blog-search-input" class="blog-search-input" placeholder="Search articles..." autocomplete="off">
                    <div id="blog-search-dropdown" class="blog-search-dropdown"></div>
                </div>
                <div class="blog-category-pills">
                    ${categoryPillsHtml}
                </div>
            </div>
        </section>
    `;



        // Generate blog cards for all posts
        let cardsHtml = '';
        for (const blogData of allBlogData) {
            cardsHtml += this.generateBlogCard(blogData);
        }

        // Populate template
        let html = template;
        html = html.replace(/{{FEATURED_POST}}/g, featuredHtml);
        html = html.replace(/{{SEARCH_AND_FILTERS}}/g, searchFilterHtml);
        html = html.replace(/{{BLOG_CARDS}}/g, cardsHtml);

        // Write listing page
        const listingPath = path.join(this.generatedDir, 'index.html');
        fs.writeFileSync(listingPath, html);

        console.log('  ✅ Blog listing page generated');
    }
}

// CLI execution
if (require.main === module) {
    const generator = new BlogGenerator();
    generator.generate().catch(error => {
        console.error('Fatal error:', error);
        process.exit(1);
    });
}

module.exports = BlogGenerator;
