const fs = require('fs');
const path = require('path');

/**
 * Open Graph Tags Validation Script
 * Validates Open Graph meta tags for social media sharing
 */

class OpenGraphValidator {
    constructor() {
        this.errors = [];
        this.warnings = [];
        this.validatedPages = [];
    }

    /**
     * Extract Open Graph meta tags from HTML content
     */
    extractOpenGraphTags(htmlContent) {
        const ogTags = {};
        
        // Find all Open Graph meta tags
        const ogRegex = /<meta\s+property=["']og:([^"']+)["']\s+content=["']([^"']*)["'][^>]*>/gi;
        let match;
        
        while ((match = ogRegex.exec(htmlContent)) !== null) {
            const property = match[1];
            const content = match[2];
            ogTags[property] = content;
        }

        return ogTags;
    }

    /**
     * Extract Twitter Card meta tags from HTML content
     */
    extractTwitterTags(htmlContent) {
        const twitterTags = {};
        
        // Find all Twitter Card meta tags
        const twitterRegex = /<meta\s+name=["']twitter:([^"']+)["']\s+content=["']([^"']*)["'][^>]*>/gi;
        let match;
        
        while ((match = twitterRegex.exec(htmlContent)) !== null) {
            const property = match[1];
            const content = match[2];
            twitterTags[property] = content;
        }

        return twitterTags;
    }

    /**
     * Extract basic meta tags from HTML content
     */
    extractBasicMetaTags(htmlContent) {
        const metaTags = {};
        
        // Extract title
        const titleMatch = htmlContent.match(/<title[^>]*>([^<]*)<\/title>/i);
        if (titleMatch) {
            metaTags.title = titleMatch[1];
        }

        // Extract description
        const descMatch = htmlContent.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["'][^>]*>/i);
        if (descMatch) {
            metaTags.description = descMatch[1];
        }

        // Extract canonical URL
        const canonicalMatch = htmlContent.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["'][^>]*>/i);
        if (canonicalMatch) {
            metaTags.canonical = canonicalMatch[1];
        }

        return metaTags;
    }

    /**
     * Validate Open Graph tags for a page
     */
    validateOpenGraphTags(ogTags, basicTags, pageUrl) {
        const pageErrors = [];
        const pageWarnings = [];

        // Required OG tags
        const requiredTags = ['title', 'description', 'url', 'type'];
        
        requiredTags.forEach(tag => {
            if (!ogTags[tag]) {
                pageErrors.push(`Missing required Open Graph tag: og:${tag}`);
            }
        });

        // Recommended OG tags
        const recommendedTags = ['image', 'site_name'];
        
        recommendedTags.forEach(tag => {
            if (!ogTags[tag]) {
                pageWarnings.push(`Missing recommended Open Graph tag: og:${tag}`);
            }
        });

        // Validate og:title length (should be 60 characters or less)
        if (ogTags.title && ogTags.title.length > 60) {
            pageWarnings.push(`og:title too long (${ogTags.title.length} chars, recommended ≤60): "${ogTags.title}"`);
        }

        // Validate og:description length (should be 160 characters or less)
        if (ogTags.description && ogTags.description.length > 160) {
            pageWarnings.push(`og:description too long (${ogTags.description.length} chars, recommended ≤160): "${ogTags.description.substring(0, 100)}..."`);
        }

        // Check if og:title matches page title
        if (ogTags.title && basicTags.title && ogTags.title !== basicTags.title) {
            pageWarnings.push(`og:title differs from page title`);
        }

        // Check if og:description matches meta description
        if (ogTags.description && basicTags.description && ogTags.description !== basicTags.description) {
            pageWarnings.push(`og:description differs from meta description`);
        }

        // Validate og:url format
        if (ogTags.url && !ogTags.url.startsWith('http')) {
            pageErrors.push(`og:url should be absolute URL: ${ogTags.url}`);
        }

        // Validate og:type values
        const validTypes = ['website', 'article', 'book', 'profile', 'music.song', 'music.album', 'music.playlist', 'music.radio_station', 'video.movie', 'video.episode', 'video.tv_show', 'video.other'];
        if (ogTags.type && !validTypes.includes(ogTags.type)) {
            pageWarnings.push(`Uncommon og:type value: ${ogTags.type}`);
        }

        // Validate og:image
        if (ogTags.image) {
            if (!ogTags.image.startsWith('http')) {
                pageErrors.push(`og:image should be absolute URL: ${ogTags.image}`);
            }
            
            // Check image dimensions (recommended: 1200x630)
            if (!ogTags['image:width'] || !ogTags['image:height']) {
                pageWarnings.push(`Missing og:image:width and og:image:height for optimal display`);
            }
        }

        return {
            errors: pageErrors,
            warnings: pageWarnings
        };
    }

    /**
     * Validate Twitter Card tags for a page
     */
    validateTwitterTags(twitterTags, ogTags, pageUrl) {
        const pageErrors = [];
        const pageWarnings = [];

        // Required Twitter tags
        const requiredTags = ['card'];
        
        requiredTags.forEach(tag => {
            if (!twitterTags[tag]) {
                pageErrors.push(`Missing required Twitter Card tag: twitter:${tag}`);
            }
        });

        // Validate twitter:card values
        const validCards = ['summary', 'summary_large_image', 'app', 'player'];
        if (twitterTags.card && !validCards.includes(twitterTags.card)) {
            pageErrors.push(`Invalid twitter:card value: ${twitterTags.card}`);
        }

        // For summary_large_image, image is required
        if (twitterTags.card === 'summary_large_image' && !twitterTags.image && !ogTags.image) {
            pageErrors.push(`twitter:image required for summary_large_image card type`);
        }

        // Check if Twitter tags are provided or falling back to OG
        const twitterFallbacks = ['title', 'description', 'image'];
        twitterFallbacks.forEach(tag => {
            if (!twitterTags[tag] && ogTags[tag]) {
                pageWarnings.push(`twitter:${tag} not specified, will fallback to og:${tag}`);
            }
        });

        return {
            errors: pageErrors,
            warnings: pageWarnings
        };
    }

    /**
     * Validate a single page
     */
    validatePage(filePath) {
        try {
            const htmlContent = fs.readFileSync(filePath, 'utf8');
            const ogTags = this.extractOpenGraphTags(htmlContent);
            const twitterTags = this.extractTwitterTags(htmlContent);
            const basicTags = this.extractBasicMetaTags(htmlContent);
            
            const pageResult = {
                path: filePath,
                ogTags: ogTags,
                twitterTags: twitterTags,
                basicTags: basicTags,
                errors: [],
                warnings: [],
                hasOG: Object.keys(ogTags).length > 0,
                hasTwitter: Object.keys(twitterTags).length > 0
            };

            // Validate Open Graph tags
            const ogValidation = this.validateOpenGraphTags(ogTags, basicTags, filePath);
            pageResult.errors.push(...ogValidation.errors);
            pageResult.warnings.push(...ogValidation.warnings);

            // Validate Twitter Card tags
            const twitterValidation = this.validateTwitterTags(twitterTags, ogTags, filePath);
            pageResult.errors.push(...twitterValidation.errors);
            pageResult.warnings.push(...twitterValidation.warnings);

            // Check if no social tags at all
            if (!pageResult.hasOG && !pageResult.hasTwitter) {
                pageResult.warnings.push('No Open Graph or Twitter Card tags found');
            }

            this.validatedPages.push(pageResult);
            return pageResult;

        } catch (error) {
            const errorResult = {
                path: filePath,
                ogTags: {},
                twitterTags: {},
                basicTags: {},
                errors: [`Failed to read file: ${error.message}`],
                warnings: [],
                hasOG: false,
                hasTwitter: false
            };
            this.validatedPages.push(errorResult);
            return errorResult;
        }
    }

    /**
     * Get all HTML files to validate
     */
    getHtmlFiles() {
        const files = [];
        
        // Main pages
        const pagesDir = 'src/pages';
        if (fs.existsSync(pagesDir)) {
            const pageFiles = fs.readdirSync(pagesDir)
                .filter(file => file.endsWith('.html'))
                .filter(file => !file.includes('test') && !file.includes('check-status') && !file.includes('form-example'))
                .map(file => path.join(pagesDir, file));
            files.push(...pageFiles);
        }

        return files;
    }

    /**
     * Generate validation report
     */
    generateReport() {
        const totalPages = this.validatedPages.length;
        const pagesWithOG = this.validatedPages.filter(page => page.hasOG).length;
        const pagesWithTwitter = this.validatedPages.filter(page => page.hasTwitter).length;
        const pagesWithErrors = this.validatedPages.filter(page => page.errors.length > 0).length;
        const pagesWithWarnings = this.validatedPages.filter(page => page.warnings.length > 0).length;

        console.log('\n=== Open Graph & Twitter Card Validation Report ===\n');
        console.log(`Total pages validated: ${totalPages}`);
        console.log(`Pages with Open Graph tags: ${pagesWithOG}`);
        console.log(`Pages with Twitter Card tags: ${pagesWithTwitter}`);
        console.log(`Pages with errors: ${pagesWithErrors}`);
        console.log(`Pages with warnings: ${pagesWithWarnings}`);
        console.log(`Overall success rate: ${((totalPages - pagesWithErrors) / totalPages * 100).toFixed(1)}%\n`);

        // Group results by status
        const errorPages = this.validatedPages.filter(page => page.errors.length > 0);
        const warningPages = this.validatedPages.filter(page => page.warnings.length > 0 && page.errors.length === 0);
        const successPages = this.validatedPages.filter(page => page.errors.length === 0 && page.warnings.length === 0 && (page.hasOG || page.hasTwitter));
        const noSocialPages = this.validatedPages.filter(page => !page.hasOG && !page.hasTwitter && page.errors.length === 0);

        // Report errors
        if (errorPages.length > 0) {
            console.log('🔴 PAGES WITH ERRORS:');
            errorPages.forEach(page => {
                console.log(`\n  ${page.path}`);
                page.errors.forEach(error => {
                    console.log(`    ❌ ${error}`);
                });
                if (page.hasOG) {
                    console.log(`    OG tags: ${Object.keys(page.ogTags).map(k => `og:${k}`).join(', ')}`);
                }
                if (page.hasTwitter) {
                    console.log(`    Twitter tags: ${Object.keys(page.twitterTags).map(k => `twitter:${k}`).join(', ')}`);
                }
            });
            console.log('');
        }

        // Report warnings
        if (warningPages.length > 0) {
            console.log('🟡 PAGES WITH WARNINGS:');
            warningPages.forEach(page => {
                console.log(`\n  ${page.path}`);
                page.warnings.forEach(warning => {
                    console.log(`    ⚠️  ${warning}`);
                });
                if (page.hasOG) {
                    console.log(`    OG tags: ${Object.keys(page.ogTags).map(k => `og:${k}`).join(', ')}`);
                }
                if (page.hasTwitter) {
                    console.log(`    Twitter tags: ${Object.keys(page.twitterTags).map(k => `twitter:${k}`).join(', ')}`);
                }
            });
            console.log('');
        }

        // Report pages without social tags
        if (noSocialPages.length > 0) {
            console.log('⚪ PAGES WITHOUT SOCIAL TAGS:');
            noSocialPages.forEach(page => {
                console.log(`  ${page.path}`);
            });
            console.log('');
        }

        // Report successful pages
        if (successPages.length > 0) {
            console.log('🟢 PAGES WITH VALID SOCIAL TAGS:');
            successPages.forEach(page => {
                const tags = [];
                if (page.hasOG) tags.push(`OG (${Object.keys(page.ogTags).length} tags)`);
                if (page.hasTwitter) tags.push(`Twitter (${Object.keys(page.twitterTags).length} tags)`);
                console.log(`  ${page.path} - ${tags.join(', ')}`);
            });
            console.log('');
        }

        // Detailed tag analysis for key pages
        console.log('📋 DETAILED TAG ANALYSIS FOR KEY PAGES:\n');
        
        const keyPages = this.validatedPages.filter(page => 
            page.path.includes('index.html') || 
            page.path.includes('about.html') || 
            page.path.includes('contact.html') ||
            page.path.includes('course.html')
        );

        keyPages.forEach(page => {
            console.log(`📄 ${page.path}:`);
            
            if (page.hasOG) {
                console.log('  Open Graph Tags:');
                Object.entries(page.ogTags).forEach(([key, value]) => {
                    const truncated = value.length > 80 ? value.substring(0, 80) + '...' : value;
                    console.log(`    og:${key}: "${truncated}"`);
                });
            }
            
            if (page.hasTwitter) {
                console.log('  Twitter Card Tags:');
                Object.entries(page.twitterTags).forEach(([key, value]) => {
                    const truncated = value.length > 80 ? value.substring(0, 80) + '...' : value;
                    console.log(`    twitter:${key}: "${truncated}"`);
                });
            }
            
            console.log('');
        });

        return {
            totalPages,
            pagesWithOG,
            pagesWithTwitter,
            pagesWithErrors,
            pagesWithWarnings,
            successRate: ((totalPages - pagesWithErrors) / totalPages * 100).toFixed(1)
        };
    }

    /**
     * Run validation on all pages
     */
    validateAll() {
        console.log('🔍 Starting Open Graph & Twitter Card validation...\n');
        
        const files = this.getHtmlFiles();
        console.log(`Found ${files.length} HTML files to validate\n`);

        files.forEach(file => {
            console.log(`Validating: ${file}`);
            this.validatePage(file);
        });

        return this.generateReport();
    }
}

// Run validation if called directly
if (require.main === module) {
    const validator = new OpenGraphValidator();
    validator.validateAll();
}

module.exports = OpenGraphValidator;