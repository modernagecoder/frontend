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
    }

    /**
     * Main generation method
     */
    async generate() {
        try {
            console.log('🚀 Generating blog posts...');

            // Create directories if needed
            this.ensureDirectories();

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
                const relatedFile = `${slug}.json`;
                const relatedPath = path.join(this.dataDir, relatedFile);

                if (fs.existsSync(relatedPath)) {
                    const relatedData = JSON.parse(fs.readFileSync(relatedPath, 'utf8'));
                    html += this.generateBlogCard(relatedData);
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
        return `
            <div class="blog-card" data-blog-url="${blogData.meta.slug}">
                <div class="blog-card-image">
                    <img src="${blogData.hero.featuredImage.url}" alt="${blogData.hero.featuredImage.alt}">
                </div>
                <div class="blog-card-content">
                    <span class="blog-card-category">${blogData.meta.category || 'Blog'}</span>
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
                            <span class="featured-badge">Featured</span>
                            <span class="blog-card-category">${featuredPost.meta.category || 'Blog'}</span>
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

        // Generate blog cards for all posts
        let cardsHtml = '';
        for (const blogData of allBlogData) {
            cardsHtml += this.generateBlogCard(blogData);
        }

        // Populate template
        let html = template;
        html = html.replace(/{{FEATURED_POST}}/g, featuredHtml);
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
