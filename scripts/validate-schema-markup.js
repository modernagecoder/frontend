const fs = require('fs');
const path = require('path');

/**
 * Schema Markup Validation Script
 * Validates JSON-LD structured data on all pages
 */

class SchemaValidator {
    constructor() {
        this.errors = [];
        this.warnings = [];
        this.validatedPages = [];
    }

    /**
     * Extract JSON-LD scripts from HTML content using regex
     */
    extractJsonLD(htmlContent) {
        const jsonLDData = [];
        
        // Find all script tags with type="application/ld+json"
        const scriptRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
        let match;
        
        while ((match = scriptRegex.exec(htmlContent)) !== null) {
            try {
                const jsonContent = match[1].trim();
                if (jsonContent) {
                    const data = JSON.parse(jsonContent);
                    jsonLDData.push(data);
                }
            } catch (error) {
                this.errors.push(`Invalid JSON-LD syntax: ${error.message}`);
            }
        }

        return jsonLDData;
    }

    /**
     * Validate Organization schema
     */
    validateOrganizationSchema(schema) {
        const required = ['@type', 'name', 'url'];
        const recommended = ['logo', 'contactPoint', 'sameAs'];
        
        required.forEach(field => {
            if (!schema[field]) {
                this.errors.push(`Organization schema missing required field: ${field}`);
            }
        });

        recommended.forEach(field => {
            if (!schema[field]) {
                this.warnings.push(`Organization schema missing recommended field: ${field}`);
            }
        });

        if (schema['@type'] !== 'Organization' && schema['@type'] !== 'EducationalOrganization') {
            this.errors.push(`Invalid Organization @type: ${schema['@type']}`);
        }
    }

    /**
     * Validate WebSite schema
     */
    validateWebSiteSchema(schema) {
        const required = ['@type', 'name', 'url'];
        
        required.forEach(field => {
            if (!schema[field]) {
                this.errors.push(`WebSite schema missing required field: ${field}`);
            }
        });

        if (schema['@type'] !== 'WebSite') {
            this.errors.push(`Invalid WebSite @type: ${schema['@type']}`);
        }

        // Check for SearchAction
        if (schema.potentialAction) {
            const searchAction = Array.isArray(schema.potentialAction) 
                ? schema.potentialAction.find(action => action['@type'] === 'SearchAction')
                : schema.potentialAction['@type'] === 'SearchAction' ? schema.potentialAction : null;
            
            if (searchAction) {
                if (!searchAction.target || !searchAction['query-input']) {
                    this.warnings.push('SearchAction missing target or query-input');
                }
            }
        }
    }

    /**
     * Validate Course schema
     */
    validateCourseSchema(schema) {
        const required = ['@type', 'name', 'description', 'provider'];
        const recommended = ['courseCode', 'hasCourseInstance', 'offers'];
        
        required.forEach(field => {
            if (!schema[field]) {
                this.errors.push(`Course schema missing required field: ${field}`);
            }
        });

        recommended.forEach(field => {
            if (!schema[field]) {
                this.warnings.push(`Course schema missing recommended field: ${field}`);
            }
        });

        if (schema['@type'] !== 'Course') {
            this.errors.push(`Invalid Course @type: ${schema['@type']}`);
        }

        // Validate provider
        if (schema.provider && (!schema.provider['@type'] || !schema.provider.name)) {
            this.errors.push('Course provider missing @type or name');
        }
    }

    /**
     * Validate BlogPosting schema
     */
    validateBlogPostingSchema(schema) {
        const required = ['@type', 'headline', 'author', 'datePublished', 'publisher'];
        const recommended = ['image', 'dateModified', 'articleSection'];
        
        required.forEach(field => {
            if (!schema[field]) {
                this.errors.push(`BlogPosting schema missing required field: ${field}`);
            }
        });

        recommended.forEach(field => {
            if (!schema[field]) {
                this.warnings.push(`BlogPosting schema missing recommended field: ${field}`);
            }
        });

        if (schema['@type'] !== 'BlogPosting') {
            this.errors.push(`Invalid BlogPosting @type: ${schema['@type']}`);
        }

        // Validate author
        if (schema.author && (!schema.author['@type'] || !schema.author.name)) {
            this.errors.push('BlogPosting author missing @type or name');
        }

        // Validate publisher
        if (schema.publisher && (!schema.publisher['@type'] || !schema.publisher.name)) {
            this.errors.push('BlogPosting publisher missing @type or name');
        }
    }

    /**
     * Validate BreadcrumbList schema
     */
    validateBreadcrumbListSchema(schema) {
        const required = ['@type', 'itemListElement'];
        
        required.forEach(field => {
            if (!schema[field]) {
                this.errors.push(`BreadcrumbList schema missing required field: ${field}`);
            }
        });

        if (schema['@type'] !== 'BreadcrumbList') {
            this.errors.push(`Invalid BreadcrumbList @type: ${schema['@type']}`);
        }

        // Validate itemListElement
        if (schema.itemListElement && Array.isArray(schema.itemListElement)) {
            schema.itemListElement.forEach((item, index) => {
                if (!item['@type'] || item['@type'] !== 'ListItem') {
                    this.errors.push(`BreadcrumbList item ${index} missing or invalid @type`);
                }
                if (!item.position || !item.name || !item.item) {
                    this.errors.push(`BreadcrumbList item ${index} missing required fields`);
                }
            });
        }
    }

    /**
     * Validate ItemList schema
     */
    validateItemListSchema(schema) {
        const required = ['@type', 'itemListElement'];
        
        required.forEach(field => {
            if (!schema[field]) {
                this.errors.push(`ItemList schema missing required field: ${field}`);
            }
        });

        if (schema['@type'] !== 'ItemList') {
            this.errors.push(`Invalid ItemList @type: ${schema['@type']}`);
        }
    }

    /**
     * Validate ContactPage schema
     */
    validateContactPageSchema(schema) {
        const required = ['@type'];
        
        required.forEach(field => {
            if (!schema[field]) {
                this.errors.push(`ContactPage schema missing required field: ${field}`);
            }
        });

        if (schema['@type'] !== 'ContactPage') {
            this.errors.push(`Invalid ContactPage @type: ${schema['@type']}`);
        }
    }

    /**
     * Validate AboutPage schema
     */
    validateAboutPageSchema(schema) {
        const required = ['@type'];
        
        required.forEach(field => {
            if (!schema[field]) {
                this.errors.push(`AboutPage schema missing required field: ${field}`);
            }
        });

        if (schema['@type'] !== 'AboutPage') {
            this.errors.push(`Invalid AboutPage @type: ${schema['@type']}`);
        }
    }

    /**
     * Validate WebPage schema
     */
    validateWebPageSchema(schema) {
        const required = ['@type'];
        
        required.forEach(field => {
            if (!schema[field]) {
                this.errors.push(`WebPage schema missing required field: ${field}`);
            }
        });

        if (schema['@type'] !== 'WebPage') {
            this.errors.push(`Invalid WebPage @type: ${schema['@type']}`);
        }
    }

    /**
     * Validate a single schema object
     */
    validateSchema(schema, pageUrl) {
        const pageErrors = [];
        const pageWarnings = [];
        
        // Store current counts
        const initialErrors = this.errors.length;
        const initialWarnings = this.warnings.length;

        if (!schema['@context']) {
            this.errors.push('Schema missing @context');
        } else if (schema['@context'] !== 'https://schema.org') {
            this.warnings.push(`Non-standard @context: ${schema['@context']}`);
        }

        if (!schema['@type']) {
            this.errors.push('Schema missing @type');
            return {
                errors: ['Schema missing @type'],
                warnings: []
            };
        }

        // Validate based on schema type
        switch (schema['@type']) {
            case 'Organization':
            case 'EducationalOrganization':
                this.validateOrganizationSchema(schema);
                break;
            case 'WebSite':
                this.validateWebSiteSchema(schema);
                break;
            case 'Course':
                this.validateCourseSchema(schema);
                break;
            case 'BlogPosting':
                this.validateBlogPostingSchema(schema);
                break;
            case 'BreadcrumbList':
                this.validateBreadcrumbListSchema(schema);
                break;
            case 'ItemList':
                this.validateItemListSchema(schema);
                break;
            case 'ContactPage':
                this.validateContactPageSchema(schema);
                break;
            case 'AboutPage':
                this.validateAboutPageSchema(schema);
                break;
            case 'WebPage':
                this.validateWebPageSchema(schema);
                break;
            default:
                this.warnings.push(`Unknown schema type: ${schema['@type']}`);
        }

        // Calculate errors/warnings for this page
        const newErrors = this.errors.slice(initialErrors);
        const newWarnings = this.warnings.slice(initialWarnings);

        return {
            errors: newErrors,
            warnings: newWarnings
        };
    }

    /**
     * Validate a single page
     */
    validatePage(filePath) {
        try {
            const htmlContent = fs.readFileSync(filePath, 'utf8');
            const jsonLDData = this.extractJsonLD(htmlContent);
            
            const pageResult = {
                path: filePath,
                schemas: [],
                errors: [],
                warnings: [],
                hasSchema: jsonLDData.length > 0
            };

            if (jsonLDData.length === 0) {
                pageResult.warnings.push('No JSON-LD schema found');
            }

            jsonLDData.forEach((schemaData, index) => {
                // Handle @graph structure
                if (schemaData['@graph'] && Array.isArray(schemaData['@graph'])) {
                    const rootContext = schemaData['@context'];
                    schemaData['@graph'].forEach((schema, graphIndex) => {
                        // Inherit @context from root if not present
                        if (!schema['@context'] && rootContext) {
                            schema['@context'] = rootContext;
                        }
                        const validation = this.validateSchema(schema, filePath);
                        if (validation) {
                            pageResult.schemas.push({
                                type: schema['@type'],
                                index: `${index}.${graphIndex}`,
                                errors: validation.errors || [],
                                warnings: validation.warnings || []
                            });
                            pageResult.errors.push(...(validation.errors || []));
                            pageResult.warnings.push(...(validation.warnings || []));
                        }
                    });
                } else {
                    // Handle single schema
                    const validation = this.validateSchema(schemaData, filePath);
                    if (validation) {
                        pageResult.schemas.push({
                            type: schemaData['@type'],
                            index: index,
                            errors: validation.errors || [],
                            warnings: validation.warnings || []
                        });
                        pageResult.errors.push(...(validation.errors || []));
                        pageResult.warnings.push(...(validation.warnings || []));
                    }
                }
            });

            this.validatedPages.push(pageResult);
            return pageResult;

        } catch (error) {
            const errorResult = {
                path: filePath,
                schemas: [],
                errors: [`Failed to read file: ${error.message}`],
                warnings: [],
                hasSchema: false
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
                .map(file => path.join(pagesDir, file));
            files.push(...pageFiles);
        }

        // Generated course pages
        const coursesDir = 'content/courses/generated';
        if (fs.existsSync(coursesDir)) {
            const courseFiles = fs.readdirSync(coursesDir)
                .filter(item => {
                    const itemPath = path.join(coursesDir, item);
                    return fs.statSync(itemPath).isDirectory();
                })
                .map(dir => path.join(coursesDir, dir, 'index.html'))
                .filter(file => fs.existsSync(file));
            files.push(...courseFiles);
        }

        // Generated blog pages
        const blogDir = 'content/blog/generated';
        if (fs.existsSync(blogDir)) {
            const blogFiles = fs.readdirSync(blogDir)
                .filter(item => {
                    const itemPath = path.join(blogDir, item);
                    return fs.statSync(itemPath).isDirectory();
                })
                .map(dir => path.join(blogDir, dir, 'index.html'))
                .filter(file => fs.existsSync(file));
            files.push(...blogFiles);
        }

        return files;
    }

    /**
     * Generate validation report
     */
    generateReport() {
        const totalPages = this.validatedPages.length;
        const pagesWithSchema = this.validatedPages.filter(page => page.hasSchema).length;
        const pagesWithErrors = this.validatedPages.filter(page => page.errors.length > 0).length;
        const pagesWithWarnings = this.validatedPages.filter(page => page.warnings.length > 0).length;

        console.log('\n=== Schema Markup Validation Report ===\n');
        console.log(`Total pages validated: ${totalPages}`);
        console.log(`Pages with schema markup: ${pagesWithSchema}`);
        console.log(`Pages with errors: ${pagesWithErrors}`);
        console.log(`Pages with warnings: ${pagesWithWarnings}`);
        console.log(`Overall success rate: ${((totalPages - pagesWithErrors) / totalPages * 100).toFixed(1)}%\n`);

        // Group results by status
        const errorPages = this.validatedPages.filter(page => page.errors.length > 0);
        const warningPages = this.validatedPages.filter(page => page.warnings.length > 0 && page.errors.length === 0);
        const successPages = this.validatedPages.filter(page => page.errors.length === 0 && page.warnings.length === 0 && page.hasSchema);
        const noSchemaPages = this.validatedPages.filter(page => !page.hasSchema);

        // Report errors
        if (errorPages.length > 0) {
            console.log('🔴 PAGES WITH ERRORS:');
            errorPages.forEach(page => {
                console.log(`\n  ${page.path}`);
                page.errors.forEach(error => {
                    console.log(`    ❌ ${error}`);
                });
                if (page.schemas.length > 0) {
                    console.log(`    Schema types found: ${page.schemas.map(s => s.type).join(', ')}`);
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
                if (page.schemas.length > 0) {
                    console.log(`    Schema types found: ${page.schemas.map(s => s.type).join(', ')}`);
                }
            });
            console.log('');
        }

        // Report pages without schema
        if (noSchemaPages.length > 0) {
            console.log('⚪ PAGES WITHOUT SCHEMA:');
            noSchemaPages.forEach(page => {
                console.log(`  ${page.path}`);
            });
            console.log('');
        }

        // Report successful pages
        if (successPages.length > 0) {
            console.log('🟢 PAGES WITH VALID SCHEMA:');
            successPages.forEach(page => {
                console.log(`  ${page.path} - ${page.schemas.map(s => s.type).join(', ')}`);
            });
            console.log('');
        }

        // Summary by schema type
        const schemaTypes = {};
        this.validatedPages.forEach(page => {
            page.schemas.forEach(schema => {
                if (!schemaTypes[schema.type]) {
                    schemaTypes[schema.type] = { count: 0, errors: 0, warnings: 0 };
                }
                schemaTypes[schema.type].count++;
                schemaTypes[schema.type].errors += schema.errors.length;
                schemaTypes[schema.type].warnings += schema.warnings.length;
            });
        });

        if (Object.keys(schemaTypes).length > 0) {
            console.log('📊 SCHEMA TYPE SUMMARY:');
            Object.entries(schemaTypes).forEach(([type, stats]) => {
                const status = stats.errors > 0 ? '🔴' : stats.warnings > 0 ? '🟡' : '🟢';
                console.log(`  ${status} ${type}: ${stats.count} instances, ${stats.errors} errors, ${stats.warnings} warnings`);
            });
            console.log('');
        }

        return {
            totalPages,
            pagesWithSchema,
            pagesWithErrors,
            pagesWithWarnings,
            successRate: ((totalPages - pagesWithErrors) / totalPages * 100).toFixed(1),
            schemaTypes
        };
    }

    /**
     * Run validation on all pages
     */
    validateAll() {
        console.log('🔍 Starting schema markup validation...\n');
        
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
    const validator = new SchemaValidator();
    validator.validateAll();
}

module.exports = SchemaValidator;