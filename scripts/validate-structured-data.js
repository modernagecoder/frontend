const fs = require('fs');
const path = require('path');

/**
 * Comprehensive Structured Data Validation Script
 * Validates JSON-LD structured data against Schema.org standards
 */

class StructuredDataValidator {
    constructor() {
        this.errors = [];
        this.warnings = [];
        this.validatedPages = [];
        this.schemaValidations = {
            'Organization': this.validateOrganization.bind(this),
            'EducationalOrganization': this.validateEducationalOrganization.bind(this),
            'WebSite': this.validateWebSite.bind(this),
            'Course': this.validateCourse.bind(this),
            'BlogPosting': this.validateBlogPosting.bind(this),
            'BreadcrumbList': this.validateBreadcrumbList.bind(this),
            'ItemList': this.validateItemList.bind(this),
            'ContactPage': this.validateContactPage.bind(this),
            'AboutPage': this.validateAboutPage.bind(this),
            'WebPage': this.validateWebPage.bind(this)
        };
    }

    /**
     * Extract JSON-LD scripts from HTML content
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
    validateOrganization(schema) {
        const errors = [];
        const warnings = [];

        // Required properties
        const required = ['@type', 'name'];
        required.forEach(prop => {
            if (!schema[prop]) {
                errors.push(`Organization missing required property: ${prop}`);
            }
        });

        // Recommended properties
        const recommended = ['url', 'logo', 'contactPoint', 'address'];
        recommended.forEach(prop => {
            if (!schema[prop]) {
                warnings.push(`Organization missing recommended property: ${prop}`);
            }
        });

        // Validate logo
        if (schema.logo) {
            if (typeof schema.logo === 'string') {
                if (!schema.logo.startsWith('http')) {
                    errors.push('Organization logo should be absolute URL');
                }
            } else if (schema.logo['@type'] === 'ImageObject') {
                if (!schema.logo.url) {
                    errors.push('Organization logo ImageObject missing url');
                }
            }
        }

        // Validate contactPoint
        if (schema.contactPoint) {
            if (!schema.contactPoint['@type'] || schema.contactPoint['@type'] !== 'ContactPoint') {
                errors.push('Organization contactPoint missing or invalid @type');
            }
            if (!schema.contactPoint.contactType) {
                warnings.push('Organization contactPoint missing contactType');
            }
        }

        // Validate address
        if (schema.address) {
            if (!schema.address['@type'] || schema.address['@type'] !== 'PostalAddress') {
                errors.push('Organization address missing or invalid @type');
            }
        }

        // Validate sameAs
        if (schema.sameAs) {
            if (!Array.isArray(schema.sameAs)) {
                warnings.push('Organization sameAs should be an array');
            } else {
                schema.sameAs.forEach((url, index) => {
                    if (!url.startsWith('http')) {
                        errors.push(`Organization sameAs[${index}] should be absolute URL`);
                    }
                });
            }
        }

        return { errors, warnings };
    }

    /**
     * Validate EducationalOrganization schema
     */
    validateEducationalOrganization(schema) {
        const orgValidation = this.validateOrganization(schema);
        const errors = [...orgValidation.errors];
        const warnings = [...orgValidation.warnings];

        // Additional properties for EducationalOrganization
        const recommended = ['alumni', 'numberOfEmployees'];
        recommended.forEach(prop => {
            if (!schema[prop]) {
                warnings.push(`EducationalOrganization missing recommended property: ${prop}`);
            }
        });

        return { errors, warnings };
    }

    /**
     * Validate WebSite schema
     */
    validateWebSite(schema) {
        const errors = [];
        const warnings = [];

        // Required properties
        const required = ['@type', 'name', 'url'];
        required.forEach(prop => {
            if (!schema[prop]) {
                errors.push(`WebSite missing required property: ${prop}`);
            }
        });

        // Validate URL
        if (schema.url && !schema.url.startsWith('http')) {
            errors.push('WebSite url should be absolute URL');
        }

        // Validate potentialAction (SearchAction)
        if (schema.potentialAction) {
            const searchAction = Array.isArray(schema.potentialAction) 
                ? schema.potentialAction.find(action => action['@type'] === 'SearchAction')
                : schema.potentialAction['@type'] === 'SearchAction' ? schema.potentialAction : null;
            
            if (searchAction) {
                if (!searchAction.target) {
                    errors.push('WebSite SearchAction missing target');
                }
                if (!searchAction['query-input']) {
                    errors.push('WebSite SearchAction missing query-input');
                }
                
                if (searchAction.target && searchAction.target.urlTemplate) {
                    if (!searchAction.target.urlTemplate.includes('{search_term_string}')) {
                        warnings.push('WebSite SearchAction urlTemplate should include {search_term_string}');
                    }
                }
            }
        } else {
            warnings.push('WebSite missing potentialAction (SearchAction recommended)');
        }

        return { errors, warnings };
    }

    /**
     * Validate Course schema
     */
    validateCourse(schema) {
        const errors = [];
        const warnings = [];

        // Required properties
        const required = ['@type', 'name', 'description'];
        required.forEach(prop => {
            if (!schema[prop]) {
                errors.push(`Course missing required property: ${prop}`);
            }
        });

        // Recommended properties
        const recommended = ['provider', 'courseCode', 'educationalLevel', 'timeRequired'];
        recommended.forEach(prop => {
            if (!schema[prop]) {
                warnings.push(`Course missing recommended property: ${prop}`);
            }
        });

        // Validate provider
        if (schema.provider) {
            if (!schema.provider['@type']) {
                errors.push('Course provider missing @type');
            }
            if (!schema.provider.name) {
                errors.push('Course provider missing name');
            }
        }

        // Validate offers
        if (schema.offers) {
            if (Array.isArray(schema.offers)) {
                schema.offers.forEach((offer, index) => {
                    if (!offer['@type'] || offer['@type'] !== 'Offer') {
                        errors.push(`Course offers[${index}] missing or invalid @type`);
                    }
                    if (!offer.price && !offer.priceRange) {
                        warnings.push(`Course offers[${index}] missing price information`);
                    }
                });
            } else {
                if (!schema.offers['@type'] || schema.offers['@type'] !== 'Offer') {
                    errors.push('Course offers missing or invalid @type');
                }
            }
        }

        // Validate hasCourseInstance
        if (schema.hasCourseInstance) {
            if (Array.isArray(schema.hasCourseInstance)) {
                schema.hasCourseInstance.forEach((instance, index) => {
                    if (!instance['@type'] || instance['@type'] !== 'CourseInstance') {
                        errors.push(`Course hasCourseInstance[${index}] missing or invalid @type`);
                    }
                });
            }
        }

        return { errors, warnings };
    }

    /**
     * Validate BlogPosting schema
     */
    validateBlogPosting(schema) {
        const errors = [];
        const warnings = [];

        // Required properties
        const required = ['@type', 'headline', 'author', 'datePublished'];
        required.forEach(prop => {
            if (!schema[prop]) {
                errors.push(`BlogPosting missing required property: ${prop}`);
            }
        });

        // Recommended properties
        const recommended = ['publisher', 'image', 'dateModified', 'articleSection'];
        recommended.forEach(prop => {
            if (!schema[prop]) {
                warnings.push(`BlogPosting missing recommended property: ${prop}`);
            }
        });

        // Validate author
        if (schema.author) {
            if (!schema.author['@type']) {
                errors.push('BlogPosting author missing @type');
            }
            if (!schema.author.name) {
                errors.push('BlogPosting author missing name');
            }
        }

        // Validate publisher
        if (schema.publisher) {
            if (!schema.publisher['@type']) {
                errors.push('BlogPosting publisher missing @type');
            }
            if (!schema.publisher.name) {
                errors.push('BlogPosting publisher missing name');
            }
            if (schema.publisher.logo && !schema.publisher.logo.url) {
                warnings.push('BlogPosting publisher logo missing url');
            }
        }

        // Validate dates
        if (schema.datePublished && !this.isValidDate(schema.datePublished)) {
            errors.push('BlogPosting datePublished invalid format');
        }
        if (schema.dateModified && !this.isValidDate(schema.dateModified)) {
            errors.push('BlogPosting dateModified invalid format');
        }

        // Validate image
        if (schema.image) {
            if (Array.isArray(schema.image)) {
                schema.image.forEach((img, index) => {
                    if (typeof img === 'string' && !img.startsWith('http')) {
                        errors.push(`BlogPosting image[${index}] should be absolute URL`);
                    }
                });
            } else if (typeof schema.image === 'string' && !schema.image.startsWith('http')) {
                errors.push('BlogPosting image should be absolute URL');
            }
        }

        return { errors, warnings };
    }

    /**
     * Validate BreadcrumbList schema
     */
    validateBreadcrumbList(schema) {
        const errors = [];
        const warnings = [];

        // Required properties
        if (!schema.itemListElement) {
            errors.push('BreadcrumbList missing itemListElement');
            return { errors, warnings };
        }

        if (!Array.isArray(schema.itemListElement)) {
            errors.push('BreadcrumbList itemListElement should be array');
            return { errors, warnings };
        }

        // Validate each breadcrumb item
        schema.itemListElement.forEach((item, index) => {
            if (!item['@type'] || item['@type'] !== 'ListItem') {
                errors.push(`BreadcrumbList item[${index}] missing or invalid @type`);
            }
            if (!item.position) {
                errors.push(`BreadcrumbList item[${index}] missing position`);
            }
            if (!item.name) {
                errors.push(`BreadcrumbList item[${index}] missing name`);
            }
            if (!item.item) {
                errors.push(`BreadcrumbList item[${index}] missing item (URL)`);
            } else if (typeof item.item === 'string' && !item.item.startsWith('http')) {
                errors.push(`BreadcrumbList item[${index}] item should be absolute URL`);
            }
        });

        return { errors, warnings };
    }

    /**
     * Validate ItemList schema
     */
    validateItemList(schema) {
        const errors = [];
        const warnings = [];

        // Required properties
        if (!schema.itemListElement) {
            errors.push('ItemList missing itemListElement');
            return { errors, warnings };
        }

        // Recommended properties
        if (!schema.numberOfItems) {
            warnings.push('ItemList missing numberOfItems');
        }

        return { errors, warnings };
    }

    /**
     * Validate ContactPage schema
     */
    validateContactPage(schema) {
        const errors = [];
        const warnings = [];

        // ContactPage is a subtype of WebPage
        if (!schema.name && !schema.headline) {
            warnings.push('ContactPage missing name or headline');
        }

        return { errors, warnings };
    }

    /**
     * Validate AboutPage schema
     */
    validateAboutPage(schema) {
        const errors = [];
        const warnings = [];

        // AboutPage is a subtype of WebPage
        if (!schema.name && !schema.headline) {
            warnings.push('AboutPage missing name or headline');
        }

        return { errors, warnings };
    }

    /**
     * Validate WebPage schema
     */
    validateWebPage(schema) {
        const errors = [];
        const warnings = [];

        // Recommended properties
        const recommended = ['name', 'description', 'url'];
        recommended.forEach(prop => {
            if (!schema[prop]) {
                warnings.push(`WebPage missing recommended property: ${prop}`);
            }
        });

        return { errors, warnings };
    }

    /**
     * Check if date string is valid ISO 8601 format
     */
    isValidDate(dateString) {
        const iso8601Regex = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?)?$/;
        return iso8601Regex.test(dateString);
    }

    /**
     * Validate a single schema object
     */
    validateSchema(schema) {
        const errors = [];
        const warnings = [];

        // Check @context
        if (!schema['@context']) {
            errors.push('Schema missing @context');
        } else if (schema['@context'] !== 'https://schema.org') {
            warnings.push(`Non-standard @context: ${schema['@context']}`);
        }

        // Check @type
        if (!schema['@type']) {
            errors.push('Schema missing @type');
            return { errors, warnings };
        }

        // Validate based on schema type
        const validator = this.schemaValidations[schema['@type']];
        if (validator) {
            const validation = validator(schema);
            errors.push(...validation.errors);
            warnings.push(...validation.warnings);
        } else {
            warnings.push(`Unknown or unsupported schema type: ${schema['@type']}`);
        }

        return { errors, warnings };
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
                pageResult.warnings.push('No JSON-LD structured data found');
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
                        const validation = this.validateSchema(schema);
                        pageResult.schemas.push({
                            type: schema['@type'],
                            index: `${index}.${graphIndex}`,
                            errors: validation.errors,
                            warnings: validation.warnings,
                            valid: validation.errors.length === 0
                        });
                        pageResult.errors.push(...validation.errors);
                        pageResult.warnings.push(...validation.warnings);
                    });
                } else {
                    // Handle single schema
                    const validation = this.validateSchema(schemaData);
                    pageResult.schemas.push({
                        type: schemaData['@type'],
                        index: index,
                        errors: validation.errors,
                        warnings: validation.warnings,
                        valid: validation.errors.length === 0
                    });
                    pageResult.errors.push(...validation.errors);
                    pageResult.warnings.push(...validation.warnings);
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

        // Sample of generated course pages (first 3)
        const coursesDir = 'content/courses/generated';
        if (fs.existsSync(coursesDir)) {
            const courseFiles = fs.readdirSync(coursesDir)
                .filter(item => {
                    const itemPath = path.join(coursesDir, item);
                    return fs.statSync(itemPath).isDirectory();
                })
                .slice(0, 3) // Only validate first 3 course pages
                .map(dir => path.join(coursesDir, dir, 'index.html'))
                .filter(file => fs.existsSync(file));
            files.push(...courseFiles);
        }

        // Sample of generated blog pages (first 2)
        const blogDir = 'content/blog/generated';
        if (fs.existsSync(blogDir)) {
            const blogFiles = fs.readdirSync(blogDir)
                .filter(item => {
                    const itemPath = path.join(blogDir, item);
                    return fs.statSync(itemPath).isDirectory();
                })
                .slice(0, 2) // Only validate first 2 blog pages
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
        const validPages = this.validatedPages.filter(page => page.errors.length === 0 && page.hasSchema).length;

        console.log('\n=== Structured Data Validation Report ===\n');
        console.log(`Total pages validated: ${totalPages}`);
        console.log(`Pages with structured data: ${pagesWithSchema}`);
        console.log(`Pages with errors: ${pagesWithErrors}`);
        console.log(`Pages with warnings: ${pagesWithWarnings}`);
        console.log(`Valid pages: ${validPages}`);
        console.log(`Overall success rate: ${((validPages) / totalPages * 100).toFixed(1)}%\n`);

        // Group results by status
        const errorPages = this.validatedPages.filter(page => page.errors.length > 0);
        const warningPages = this.validatedPages.filter(page => page.warnings.length > 0 && page.errors.length === 0);
        const successPages = this.validatedPages.filter(page => page.errors.length === 0 && page.hasSchema);
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
                    const schemaTypes = page.schemas.map(s => s.type).filter(t => t).join(', ');
                    console.log(`    Schema types: ${schemaTypes}`);
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
                    const schemaTypes = page.schemas.map(s => s.type).filter(t => t).join(', ');
                    console.log(`    Schema types: ${schemaTypes}`);
                }
            });
            console.log('');
        }

        // Report pages without schema
        if (noSchemaPages.length > 0) {
            console.log('⚪ PAGES WITHOUT STRUCTURED DATA:');
            noSchemaPages.forEach(page => {
                console.log(`  ${page.path}`);
            });
            console.log('');
        }

        // Report successful pages
        if (successPages.length > 0) {
            console.log('🟢 PAGES WITH VALID STRUCTURED DATA:');
            successPages.forEach(page => {
                const schemaTypes = page.schemas.map(s => s.type).filter(t => t).join(', ');
                console.log(`  ${page.path} - ${schemaTypes}`);
            });
            console.log('');
        }

        // Summary by schema type
        const schemaTypes = {};
        this.validatedPages.forEach(page => {
            page.schemas.forEach(schema => {
                if (schema.type) {
                    if (!schemaTypes[schema.type]) {
                        schemaTypes[schema.type] = { count: 0, errors: 0, warnings: 0, valid: 0 };
                    }
                    schemaTypes[schema.type].count++;
                    schemaTypes[schema.type].errors += schema.errors.length;
                    schemaTypes[schema.type].warnings += schema.warnings.length;
                    if (schema.valid) schemaTypes[schema.type].valid++;
                }
            });
        });

        if (Object.keys(schemaTypes).length > 0) {
            console.log('📊 SCHEMA TYPE SUMMARY:');
            Object.entries(schemaTypes).forEach(([type, stats]) => {
                const status = stats.errors > 0 ? '🔴' : stats.warnings > 0 ? '🟡' : '🟢';
                const validRate = ((stats.valid / stats.count) * 100).toFixed(0);
                console.log(`  ${status} ${type}: ${stats.count} instances, ${stats.valid} valid (${validRate}%), ${stats.errors} errors, ${stats.warnings} warnings`);
            });
            console.log('');
        }

        return {
            totalPages,
            pagesWithSchema,
            pagesWithErrors,
            pagesWithWarnings,
            validPages,
            successRate: ((validPages) / totalPages * 100).toFixed(1),
            schemaTypes
        };
    }

    /**
     * Run validation on all pages
     */
    validateAll() {
        console.log('🔍 Starting comprehensive structured data validation...\n');
        
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
    const validator = new StructuredDataValidator();
    validator.validateAll();
}

module.exports = StructuredDataValidator;