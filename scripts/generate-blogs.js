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
        
        // Copy CSS file
        const cssSource = path.join(this.projectRoot, 'src', 'css', 'style.css');
        const cssDest = path.join(blogDir, 'style.css');
        if (fs.existsSync(cssSource)) {
            fs.copyFileSync(cssSource, cssDest);
        }
        
        // Copy JavaScript files
        const jsSource = path.join(this.projectRoot, 'src', 'js', 'blog-navigation.js');
        const jsDest = path.join(blogDir, 'blog-navigation.js');
        if (fs.existsSync(jsSource)) {
            fs.copyFileSync(jsSource, jsDest);
        }
        
        // Copy navigation.js as well
        const navJsSource = path.join(this.projectRoot, 'src', 'js', 'navigation.js');
        const navJsDest = path.join(blogDir, 'navigation.js');
        if (fs.existsSync(navJsSource)) {
            fs.copyFileSync(navJsSource, navJsDest);
        }
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
                    html += `<p>${section.text}</p>\n`;
                    break;
                    
                case 'heading':
                    const level = section.level || 2;
                    html += `<h${level}>${section.text}</h${level}>\n`;
                    break;
                    
                case 'list':
                    const listTag = section.style === 'ordered' ? 'ol' : 'ul';
                    html += `<${listTag}>\n`;
                    section.items.forEach(item => {
                        html += `  <li>${item}</li>\n`;
                    });
                    html += `</${listTag}>\n`;
                    break;
                    
                case 'image':
                    html += `<figure class="blog-image">\n`;
                    html += `  <img src="${section.url}" alt="${section.alt}" loading="lazy">\n`;
                    if (section.caption) {
                        html += `  <figcaption>${section.caption}</figcaption>\n`;
                    }
                    html += `</figure>\n`;
                    break;
                    
                case 'code':
                    const language = section.language || 'plaintext';
                    html += `<pre><code class="language-${language}">${this.escapeHtml(section.code)}</code></pre>\n`;
                    break;
                    
                case 'quote':
                    html += `<blockquote>\n`;
                    html += `  <p>${section.text}</p>\n`;
                    if (section.author) {
                        html += `  <cite>— ${section.author}</cite>\n`;
                    }
                    html += `</blockquote>\n`;
                    break;
                    
                default:
                    console.warn(`  ⚠️  Unknown content type: ${section.type}`);
            }
        }
        
        return html;
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
            { name: 'Blog', url: '/content/blog/generated/' },
            { name: blogData.meta.title, url: `/blog/${blogData.meta.slug}` }
        ];
        const breadcrumbSchema = seoUtils.generateBreadcrumbSchema(breadcrumbs);
        
        // Combine schemas into an array
        const schemas = [blogPostingSchema, breadcrumbSchema];
        
        return JSON.stringify(schemas, null, 2);
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
                            <a href="${featuredPost.meta.slug}/" class="cta-button">Read Article</a>
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
