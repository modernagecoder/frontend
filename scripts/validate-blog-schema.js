#!/usr/bin/env node

/**
 * Blog Schema Validation Script
 * Validates that blog posts have proper schema markup
 */

const fs = require('fs');
const path = require('path');

class BlogSchemaValidator {
    constructor() {
        this.projectRoot = path.resolve(__dirname, '..');
        this.generatedDir = path.join(this.projectRoot, 'content', 'blog', 'generated');
    }

    /**
     * Validate all generated blog posts
     */
    validate() {
        console.log('🔍 Validating blog schema markup...');
        
        if (!fs.existsSync(this.generatedDir)) {
            console.error('❌ Generated blog directory not found');
            return false;
        }

        const blogDirs = fs.readdirSync(this.generatedDir)
            .filter(item => {
                const itemPath = path.join(this.generatedDir, item);
                return fs.statSync(itemPath).isDirectory();
            });

        if (blogDirs.length === 0) {
            console.log('⚠️  No blog posts found to validate');
            return true;
        }

        let allValid = true;
        let totalPosts = 0;
        let validPosts = 0;

        for (const blogDir of blogDirs) {
            const indexPath = path.join(this.generatedDir, blogDir, 'index.html');
            
            if (!fs.existsSync(indexPath)) {
                console.log(`⚠️  ${blogDir}: index.html not found`);
                continue;
            }

            totalPosts++;
            const isValid = this.validateBlogPost(blogDir, indexPath);
            if (isValid) {
                validPosts++;
            } else {
                allValid = false;
            }
        }

        console.log(`\n📊 Validation Summary:`);
        console.log(`   Total posts: ${totalPosts}`);
        console.log(`   Valid posts: ${validPosts}`);
        console.log(`   Invalid posts: ${totalPosts - validPosts}`);

        if (allValid) {
            console.log('✅ All blog posts have valid schema markup!');
        } else {
            console.log('❌ Some blog posts have schema issues');
        }

        return allValid;
    }

    /**
     * Validate individual blog post
     */
    validateBlogPost(blogSlug, htmlPath) {
        console.log(`\n🔍 Validating: ${blogSlug}`);
        
        try {
            const html = fs.readFileSync(htmlPath, 'utf8');
            const issues = [];

            // Extract JSON-LD script
            const jsonLdMatch = html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/);
            
            if (!jsonLdMatch) {
                issues.push('Missing JSON-LD script tag');
                this.reportIssues(blogSlug, issues);
                return false;
            }

            let schemas;
            try {
                schemas = JSON.parse(jsonLdMatch[1].trim());
            } catch (error) {
                issues.push('Invalid JSON-LD syntax');
                this.reportIssues(blogSlug, issues);
                return false;
            }

            if (!Array.isArray(schemas)) {
                issues.push('Schema should be an array');
                this.reportIssues(blogSlug, issues);
                return false;
            }

            // Find BlogPosting schema
            const blogPostingSchema = schemas.find(schema => schema['@type'] === 'BlogPosting');
            if (!blogPostingSchema) {
                issues.push('Missing BlogPosting schema');
            } else {
                this.validateBlogPostingSchema(blogPostingSchema, issues);
            }

            // Find BreadcrumbList schema
            const breadcrumbSchema = schemas.find(schema => schema['@type'] === 'BreadcrumbList');
            if (!breadcrumbSchema) {
                issues.push('Missing BreadcrumbList schema');
            } else {
                this.validateBreadcrumbSchema(breadcrumbSchema, issues);
            }

            if (issues.length === 0) {
                console.log(`   ✅ Valid schema markup`);
                return true;
            } else {
                this.reportIssues(blogSlug, issues);
                return false;
            }

        } catch (error) {
            console.log(`   ❌ Error reading file: ${error.message}`);
            return false;
        }
    }

    /**
     * Validate BlogPosting schema
     */
    validateBlogPostingSchema(schema, issues) {
        const requiredFields = [
            'headline',
            'description', 
            'image',
            'author',
            'publisher',
            'datePublished',
            'dateModified',
            'mainEntityOfPage',
            'articleSection',
            'keywords'
        ];

        for (const field of requiredFields) {
            if (!schema[field]) {
                issues.push(`BlogPosting missing required field: ${field}`);
            }
        }

        // Validate author structure
        if (schema.author) {
            if (schema.author['@type'] !== 'Person') {
                issues.push('Author should be of type Person');
            }
            if (!schema.author.name) {
                issues.push('Author missing name');
            }
        }

        // Validate publisher structure
        if (schema.publisher) {
            if (schema.publisher['@type'] !== 'Organization') {
                issues.push('Publisher should be of type Organization');
            }
            if (!schema.publisher.name) {
                issues.push('Publisher missing name');
            }
            if (!schema.publisher.logo) {
                issues.push('Publisher missing logo');
            }
        }

        // Validate image structure
        if (schema.image && typeof schema.image === 'object') {
            if (schema.image['@type'] !== 'ImageObject') {
                issues.push('Image should be of type ImageObject');
            }
            if (!schema.image.url) {
                issues.push('Image missing URL');
            }
        }

        // Validate mainEntityOfPage
        if (schema.mainEntityOfPage) {
            if (schema.mainEntityOfPage['@type'] !== 'WebPage') {
                issues.push('mainEntityOfPage should be of type WebPage');
            }
            if (!schema.mainEntityOfPage['@id']) {
                issues.push('mainEntityOfPage missing @id');
            }
        }
    }

    /**
     * Validate BreadcrumbList schema
     */
    validateBreadcrumbSchema(schema, issues) {
        if (!schema.itemListElement || !Array.isArray(schema.itemListElement)) {
            issues.push('BreadcrumbList missing itemListElement array');
            return;
        }

        if (schema.itemListElement.length < 2) {
            issues.push('BreadcrumbList should have at least 2 items');
        }

        schema.itemListElement.forEach((item, index) => {
            if (item['@type'] !== 'ListItem') {
                issues.push(`Breadcrumb item ${index + 1} should be of type ListItem`);
            }
            if (!item.position) {
                issues.push(`Breadcrumb item ${index + 1} missing position`);
            }
            if (!item.name) {
                issues.push(`Breadcrumb item ${index + 1} missing name`);
            }
            if (!item.item) {
                issues.push(`Breadcrumb item ${index + 1} missing item URL`);
            }
        });
    }

    /**
     * Report validation issues
     */
    reportIssues(blogSlug, issues) {
        console.log(`   ❌ ${issues.length} issue(s) found:`);
        issues.forEach(issue => {
            console.log(`      • ${issue}`);
        });
    }
}

// CLI execution
if (require.main === module) {
    const validator = new BlogSchemaValidator();
    const isValid = validator.validate();
    process.exit(isValid ? 0 : 1);
}

module.exports = BlogSchemaValidator;