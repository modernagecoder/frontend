const fs = require('fs');
const path = require('path');

/**
 * Schema.org Validation Script for Task 23.4
 * Validates JSON-LD syntax and ensures no schema errors
 * Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8
 */

class SchemaOrgValidator {
    constructor() {
        this.errors = [];
        this.warnings = [];
        this.validatedPages = [];
        this.totalSchemas = 0;
        this.validSchemas = 0;
    }

    /**
     * Extract JSON-LD scripts from HTML content
     */
    extractJsonLD(htmlContent, filePath) {
        const jsonLDData = [];
        
        // Find all script tags with type="application/ld+json"
        const scriptRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
        let match;
        
        while ((match = scriptRegex.exec(htmlContent)) !== null) {
            try {
                const jsonContent = match[1].trim();
                if (jsonContent) {
                    // Validate JSON syntax first
                    const data = JSON.parse(jsonContent);
                    jsonLDData.push(data);
                }
            } catch (error) {
                this.errors.push({
                    file: filePath,
                    type: 'JSON Syntax Error',
                    message: `Invalid JSON-LD syntax: ${error.message}`,
                    severity: 'error'
                });
            }
        }

        return jsonLDData;
    }

    /**
     * Validate required Schema.org properties for Organization (Requirement 2.1)
     */
    validateOrganizationSchema(schema, filePath) {
        const issues = [];
        
        // Required properties for Organization schema
        const required = ['@type', 'name', 'url'];
        const recommended = ['logo', 'contactPoint', 'address', 'sameAs'];
        
        required.forEach(prop => {
            if (!schema[prop]) {
                issues.push({
                    file: filePath,
                    type: 'Organization Schema Error',
                    message: `Missing required property: ${prop}`,
                    severity: 'error'
                });
            }
        });

        recommended.forEach(prop => {
            if (!schema[prop]) {
                issues.push({
                    file: filePath,
                    type: 'Organization Schema Warning',
                    message: `Missing recommended property: ${prop}`,
                    severity: 'warning'
                });
            }
        });

        // Validate logo structure
        if (schema.logo) {
            if (typeof schema.logo === 'object' && schema.logo['@type'] === 'ImageObject') {
                if (!schema.logo.url) {
                    issues.push({
                        file: filePath,
                        type: 'Organization Schema Error',
                        message: 'Logo ImageObject missing url property',
                        severity: 'error'
                    });
                }
            } else if (typeof schema.logo === 'string') {
                if (!schema.logo.startsWith('http')) {
                    issues.push({
                        file: filePath,
                        type: 'Organization Schema Error',
                        message: 'Logo URL should be absolute (start with http/https)',
                        severity: 'error'
                    });
                }
            }
        }

        // Validate contactPoint structure
        if (schema.contactPoint) {
            if (!schema.contactPoint['@type'] || schema.contactPoint['@type'] !== 'ContactPoint') {
                issues.push({
                    file: filePath,
                    type: 'Organization Schema Error',
                    message: 'ContactPoint missing or invalid @type',
                    severity: 'error'
                });
            }
            if (!schema.contactPoint.contactType) {
                issues.push({
                    file: filePath,
                    type: 'Organization Schema Warning',
                    message: 'ContactPoint missing contactType',
                    severity: 'warning'
                });
            }
        }

        return issues;
    }

    /**
     * Validate WebSite schema (Requirement 2.2)
     */
    validateWebSiteSchema(schema, filePath) {
        const issues = [];
        
        const required = ['@type', 'name', 'url'];
        
        required.forEach(prop => {
            if (!schema[prop]) {
                issues.push({
                    file: filePath,
                    type: 'WebSite Schema Error',
                    message: `Missing required property: ${prop}`,
                    severity: 'error'
                });
            }
        });

        // Validate SearchAction (Requirement 2.2)
        if (schema.potentialAction) {
            const searchAction = Array.isArray(schema.potentialAction) 
                ? schema.potentialAction.find(action => action['@type'] === 'SearchAction')
                : schema.potentialAction['@type'] === 'SearchAction' ? schema.potentialAction : null;
            
            if (searchAction) {
                if (!searchAction.target) {
                    issues.push({
                        file: filePath,
                        type: 'WebSite Schema Error',
                        message: 'SearchAction missing target property',
                        severity: 'error'
                    });
                }
                if (!searchAction['query-input']) {
                    issues.push({
                        file: filePath,
                        type: 'WebSite Schema Error',
                        message: 'SearchAction missing query-input property',
                        severity: 'error'
                    });
                }
            }
        }

        return issues;
    }

    /**
     * Validate EducationalOrganization schema (Requirement 2.3)
     */
    validateEducationalOrganizationSchema(schema, filePath) {
        const issues = [];
        
        // EducationalOrganization extends Organization
        const orgIssues = this.validateOrganizationSchema(schema, filePath);
        issues.push(...orgIssues);

        // Additional properties for EducationalOrganization
        const recommended = ['alumni', 'numberOfEmployees'];
        
        recommended.forEach(prop => {
            if (!schema[prop]) {
                issues.push({
                    file: filePath,
                    type: 'EducationalOrganization Schema Warning',
                    message: `Missing recommended property: ${prop}`,
                    severity: 'warning'
                });
            }
        });

        return issues;
    }

    /**
     * Validate Course schema (Requirement 2.4)
     */
    validateCourseSchema(schema, filePath) {
        const issues = [];
        
        const required = ['@type', 'name', 'description'];
        const recommended = ['provider', 'courseCode', 'educationalLevel', 'timeRequired'];
        
        required.forEach(prop => {
            if (!schema[prop]) {
                issues.push({
                    file: filePath,
                    type: 'Course Schema Error',
                    message: `Missing required property: ${prop}`,
                    severity: 'error'
                });
            }
        });

        recommended.forEach(prop => {
            if (!schema[prop]) {
                issues.push({
                    file: filePath,
                    type: 'Course Schema Warning',
                    message: `Missing recommended property: ${prop}`,
                    severity: 'warning'
                });
            }
        });

        // Validate provider
        if (schema.provider) {
            if (!schema.provider['@type']) {
                issues.push({
                    file: filePath,
                    type: 'Course Schema Error',
                    message: 'Course provider missing @type',
                    severity: 'error'
                });
            }
            if (!schema.provider.name) {
                issues.push({
                    file: filePath,
                    type: 'Course Schema Error',
                    message: 'Course provider missing name',
                    severity: 'error'
                });
            }
        }

        return issues;
    }

    /**
     * Validate BlogPosting schema (Requirement 2.5)
     */
    validateBlogPostingSchema(schema, filePath) {
        const issues = [];
        
        const required = ['@type', 'headline', 'author', 'datePublished'];
        const recommended = ['publisher', 'image', 'dateModified', 'articleSection'];
        
        required.forEach(prop => {
            if (!schema[prop]) {
                issues.push({
                    file: filePath,
                    type: 'BlogPosting Schema Error',
                    message: `Missing required property: ${prop}`,
                    severity: 'error'
                });
            }
        });

        recommended.forEach(prop => {
            if (!schema[prop]) {
                issues.push({
                    file: filePath,
                    type: 'BlogPosting Schema Warning',
                    message: `Missing recommended property: ${prop}`,
                    severity: 'warning'
                });
            }
        });

        // Validate author structure
        if (schema.author) {
            if (!schema.author['@type']) {
                issues.push({
                    file: filePath,
                    type: 'BlogPosting Schema Error',
                    message: 'Author missing @type',
                    severity: 'error'
                });
            }
            if (!schema.author.name) {
                issues.push({
                    file: filePath,
                    type: 'BlogPosting Schema Error',
                    message: 'Author missing name',
                    severity: 'error'
                });
            }
        }

        // Validate publisher structure
        if (schema.publisher) {
            if (!schema.publisher['@type']) {
                issues.push({
                    file: filePath,
                    type: 'BlogPosting Schema Error',
                    message: 'Publisher missing @type',
                    severity: 'error'
                });
            }
            if (!schema.publisher.name) {
                issues.push({
                    file: filePath,
                    type: 'BlogPosting Schema Error',
                    message: 'Publisher missing name',
                    severity: 'error'
                });
            }
        }

        // Validate date formats
        if (schema.datePublished && !this.isValidDate(schema.datePublished)) {
            issues.push({
                file: filePath,
                type: 'BlogPosting Schema Error',
                message: 'datePublished invalid format (should be ISO 8601)',
                severity: 'error'
            });
        }

        if (schema.dateModified && !this.isValidDate(schema.dateModified)) {
            issues.push({
                file: filePath,
                type: 'BlogPosting Schema Error',
                message: 'dateModified invalid format (should be ISO 8601)',
                severity: 'error'
            });
        }

        return issues;
    }

    /**
     * Validate AboutPage schema (Requirement 2.6)
     */
    validateAboutPageSchema(schema, filePath) {
        const issues = [];
        
        // AboutPage is a subtype of WebPage
        if (!schema.name && !schema.headline) {
            issues.push({
                file: filePath,
                type: 'AboutPage Schema Warning',
                message: 'Missing name or headline property',
                severity: 'warning'
            });
        }

        if (!schema.description) {
            issues.push({
                file: filePath,
                type: 'AboutPage Schema Warning',
                message: 'Missing description property',
                severity: 'warning'
            });
        }

        return issues;
    }

    /**
     * Validate BreadcrumbList schema (Requirement 2.7)
     */
    validateBreadcrumbListSchema(schema, filePath) {
        const issues = [];
        
        if (!schema.itemListElement) {
            issues.push({
                file: filePath,
                type: 'BreadcrumbList Schema Error',
                message: 'Missing itemListElement property',
                severity: 'error'
            });
            return issues;
        }

        if (!Array.isArray(schema.itemListElement)) {
            issues.push({
                file: filePath,
                type: 'BreadcrumbList Schema Error',
                message: 'itemListElement should be an array',
                severity: 'error'
            });
            return issues;
        }

        // Validate each breadcrumb item
        schema.itemListElement.forEach((item, index) => {
            if (!item['@type'] || item['@type'] !== 'ListItem') {
                issues.push({
                    file: filePath,
                    type: 'BreadcrumbList Schema Error',
                    message: `Breadcrumb item ${index + 1} missing or invalid @type`,
                    severity: 'error'
                });
            }
            if (!item.position) {
                issues.push({
                    file: filePath,
                    type: 'BreadcrumbList Schema Error',
                    message: `Breadcrumb item ${index + 1} missing position`,
                    severity: 'error'
                });
            }
            if (!item.name) {
                issues.push({
                    file: filePath,
                    type: 'BreadcrumbList Schema Error',
                    message: `Breadcrumb item ${index + 1} missing name`,
                    severity: 'error'
                });
            }
            if (!item.item) {
                issues.push({
                    file: filePath,
                    type: 'BreadcrumbList Schema Error',
                    message: `Breadcrumb item ${index + 1} missing item URL`,
                    severity: 'error'
                });
            }
        });

        return issues;
    }

    /**
     * Validate ItemList schema (Requirement 2.8)
     */
    validateItemListSchema(schema, filePath) {
        const issues = [];
        
        const required = ['@type', 'itemListElement'];
        
        required.forEach(prop => {
            if (!schema[prop]) {
                issues.push({
                    file: filePath,
                    type: 'ItemList Schema Error',
                    message: `Missing required property: ${prop}`,
                    severity: 'error'
                });
            }
        });

        if (!schema.numberOfItems) {
            issues.push({
                file: filePath,
                type: 'ItemList Schema Warning',
                message: 'Missing numberOfItems property',
                severity: 'warning'
            });
        }

        // Validate itemListElement structure
        if (schema.itemListElement && Array.isArray(schema.itemListElement)) {
            schema.itemListElement.forEach((item, index) => {
                if (!item['@type'] || item['@type'] !== 'ListItem') {
                    issues.push({
                        file: filePath,
                        type: 'ItemList Schema Error',
                        message: `List item ${index + 1} missing or invalid @type`,
                        severity: 'error'
                    });
                }
                if (!item.position) {
                    issues.push({
                        file: filePath,
                        type: 'ItemList Schema Error',
                        message: `List item ${index + 1} missing position`,
                        severity: 'error'
                    });
                }
                if (!item.item) {
                    issues.push({
                        file: filePath,
                        type: 'ItemList Schema Error',
                        message: `List item ${index + 1} missing item property`,
                        severity: 'error'
                    });
                }
            });
        }

        return issues;
    }

    /**
     * Validate ContactPage schema
     */
    validateContactPageSchema(schema, filePath) {
        const issues = [];
        
        if (!schema.name && !schema.headline) {
            issues.push({
                file: filePath,
                type: 'ContactPage Schema Warning',
                message: 'Missing name or headline property',
                severity: 'warning'
            });
        }

        return issues;
    }

    /**
     * Validate WebPage schema
     */
    validateWebPageSchema(schema, filePath) {
        const issues = [];
        
        const recommended = ['name', 'description', 'url'];
        
        recommended.forEach(prop => {
            if (!schema[prop]) {
                issues.push({
                    file: filePath,
                    type: 'WebPage Schema Warning',
                    message: `Missing recommended property: ${prop}`,
                    severity: 'warning'
                });
            }
        });

        return issues;
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
    validateSchema(schema, filePath) {
        const issues = [];
        this.totalSchemas++;

        // Check @context (required for Schema.org)
        if (!schema['@context']) {
            issues.push({
                file: filePath,
                type: 'Schema Error',
                message: 'Missing @context property',
                severity: 'error'
            });
        } else if (schema['@context'] !== 'https://schema.org') {
            issues.push({
                file: filePath,
                type: 'Schema Warning',
                message: `Non-standard @context: ${schema['@context']} (should be https://schema.org)`,
                severity: 'warning'
            });
        }

        // Check @type (required)
        if (!schema['@type']) {
            issues.push({
                file: filePath,
                type: 'Schema Error',
                message: 'Missing @type property',
                severity: 'error'
            });
            return issues;
        }

        // Validate based on schema type
        switch (schema['@type']) {
            case 'Organization':
                issues.push(...this.validateOrganizationSchema(schema, filePath));
                break;
            case 'EducationalOrganization':
                issues.push(...this.validateEducationalOrganizationSchema(schema, filePath));
                break;
            case 'WebSite':
                issues.push(...this.validateWebSiteSchema(schema, filePath));
                break;
            case 'Course':
                issues.push(...this.validateCourseSchema(schema, filePath));
                break;
            case 'BlogPosting':
                issues.push(...this.validateBlogPostingSchema(schema, filePath));
                break;
            case 'AboutPage':
                issues.push(...this.validateAboutPageSchema(schema, filePath));
                break;
            case 'BreadcrumbList':
                issues.push(...this.validateBreadcrumbListSchema(schema, filePath));
                break;
            case 'ItemList':
                issues.push(...this.validateItemListSchema(schema, filePath));
                break;
            case 'ContactPage':
                issues.push(...this.validateContactPageSchema(schema, filePath));
                break;
            case 'WebPage':
                issues.push(...this.validateWebPageSchema(schema, filePath));
                break;
            default:
                issues.push({
                    file: filePath,
                    type: 'Schema Warning',
                    message: `Unknown or unsupported schema type: ${schema['@type']}`,
                    severity: 'warning'
                });
        }

        // Count valid schemas (no errors)
        const hasErrors = issues.some(issue => issue.severity === 'error');
        if (!hasErrors) {
            this.validSchemas++;
        }

        return issues;
    }

    /**
     * Validate a single page
     */
    validatePage(filePath) {
        try {
            const htmlContent = fs.readFileSync(filePath, 'utf8');
            const jsonLDData = this.extractJsonLD(htmlContent, filePath);
            
            const pageResult = {
                path: filePath,
                schemas: [],
                errors: [],
                warnings: [],
                hasSchema: jsonLDData.length > 0,
                schemaCount: 0
            };

            if (jsonLDData.length === 0) {
                pageResult.warnings.push({
                    file: filePath,
                    type: 'Schema Warning',
                    message: 'No JSON-LD structured data found',
                    severity: 'warning'
                });
            }

            jsonLDData.forEach((schemaData, index) => {
                // Handle array of schemas (common format)
                if (Array.isArray(schemaData)) {
                    schemaData.forEach((schema, arrayIndex) => {
                        const issues = this.validateSchema(schema, filePath);
                        pageResult.schemas.push({
                            type: schema['@type'],
                            index: `${index}.${arrayIndex}`,
                            issues: issues
                        });
                        pageResult.schemaCount++;
                        
                        issues.forEach(issue => {
                            if (issue.severity === 'error') {
                                pageResult.errors.push(issue);
                                this.errors.push(issue);
                            } else {
                                pageResult.warnings.push(issue);
                                this.warnings.push(issue);
                            }
                        });
                    });
                }
                // Handle @graph structure
                else if (schemaData['@graph'] && Array.isArray(schemaData['@graph'])) {
                    const rootContext = schemaData['@context'];
                    schemaData['@graph'].forEach((schema, graphIndex) => {
                        // Inherit @context from root if not present
                        if (!schema['@context'] && rootContext) {
                            schema['@context'] = rootContext;
                        }
                        const issues = this.validateSchema(schema, filePath);
                        pageResult.schemas.push({
                            type: schema['@type'],
                            index: `${index}.${graphIndex}`,
                            issues: issues
                        });
                        pageResult.schemaCount++;
                        
                        issues.forEach(issue => {
                            if (issue.severity === 'error') {
                                pageResult.errors.push(issue);
                                this.errors.push(issue);
                            } else {
                                pageResult.warnings.push(issue);
                                this.warnings.push(issue);
                            }
                        });
                    });
                } else {
                    // Handle single schema
                    const issues = this.validateSchema(schemaData, filePath);
                    pageResult.schemas.push({
                        type: schemaData['@type'],
                        index: index,
                        issues: issues
                    });
                    pageResult.schemaCount++;
                    
                    issues.forEach(issue => {
                        if (issue.severity === 'error') {
                            pageResult.errors.push(issue);
                            this.errors.push(issue);
                        } else {
                            pageResult.warnings.push(issue);
                            this.warnings.push(issue);
                        }
                    });
                }
            });

            this.validatedPages.push(pageResult);
            return pageResult;

        } catch (error) {
            const errorResult = {
                path: filePath,
                schemas: [],
                errors: [{
                    file: filePath,
                    type: 'File Error',
                    message: `Failed to read file: ${error.message}`,
                    severity: 'error'
                }],
                warnings: [],
                hasSchema: false,
                schemaCount: 0
            };
            this.validatedPages.push(errorResult);
            this.errors.push(errorResult.errors[0]);
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

        // Sample of generated course pages (first 3 for validation)
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

        // Sample of generated blog pages (first 2 for validation)
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
     * Generate comprehensive validation report
     */
    generateReport() {
        const totalPages = this.validatedPages.length;
        const pagesWithSchema = this.validatedPages.filter(page => page.hasSchema).length;
        const pagesWithErrors = this.validatedPages.filter(page => page.errors.length > 0).length;
        const pagesWithWarnings = this.validatedPages.filter(page => page.warnings.length > 0).length;
        const validPages = this.validatedPages.filter(page => page.errors.length === 0 && page.hasSchema).length;

        console.log('\n' + '='.repeat(60));
        console.log('🔍 SCHEMA.ORG VALIDATION REPORT - TASK 23.4');
        console.log('='.repeat(60));
        console.log(`📊 SUMMARY:`);
        console.log(`   Total pages validated: ${totalPages}`);
        console.log(`   Pages with structured data: ${pagesWithSchema}`);
        console.log(`   Total schema objects: ${this.totalSchemas}`);
        console.log(`   Valid schema objects: ${this.validSchemas}`);
        console.log(`   Pages with errors: ${pagesWithErrors}`);
        console.log(`   Pages with warnings: ${pagesWithWarnings}`);
        console.log(`   Fully valid pages: ${validPages}`);
        console.log(`   Schema validation rate: ${((this.validSchemas / this.totalSchemas) * 100).toFixed(1)}%`);
        console.log(`   Page success rate: ${((validPages / totalPages) * 100).toFixed(1)}%\n`);

        // Group results by status
        const errorPages = this.validatedPages.filter(page => page.errors.length > 0);
        const warningPages = this.validatedPages.filter(page => page.warnings.length > 0 && page.errors.length === 0);
        const successPages = this.validatedPages.filter(page => page.errors.length === 0 && page.hasSchema);
        const noSchemaPages = this.validatedPages.filter(page => !page.hasSchema);

        // Report critical errors
        if (errorPages.length > 0) {
            console.log('🔴 CRITICAL ERRORS (Must Fix):');
            console.log('-'.repeat(40));
            errorPages.forEach(page => {
                console.log(`\n📄 ${page.path}`);
                console.log(`   Schema objects: ${page.schemaCount}`);
                page.errors.forEach(error => {
                    console.log(`   ❌ ${error.type}: ${error.message}`);
                });
            });
            console.log('');
        }

        // Report warnings
        if (warningPages.length > 0) {
            console.log('🟡 WARNINGS (Recommended Fixes):');
            console.log('-'.repeat(40));
            warningPages.forEach(page => {
                console.log(`\n📄 ${page.path}`);
                console.log(`   Schema objects: ${page.schemaCount}`);
                page.warnings.forEach(warning => {
                    console.log(`   ⚠️  ${warning.type}: ${warning.message}`);
                });
            });
            console.log('');
        }

        // Report pages without schema
        if (noSchemaPages.length > 0) {
            console.log('⚪ PAGES WITHOUT STRUCTURED DATA:');
            console.log('-'.repeat(40));
            noSchemaPages.forEach(page => {
                console.log(`   📄 ${page.path}`);
            });
            console.log('');
        }

        // Report successful pages
        if (successPages.length > 0) {
            console.log('🟢 VALID PAGES (Schema.org Compliant):');
            console.log('-'.repeat(40));
            successPages.forEach(page => {
                const schemaTypes = page.schemas.map(s => s.type).filter(t => t).join(', ');
                console.log(`   ✅ ${page.path}`);
                console.log(`      Schema types: ${schemaTypes} (${page.schemaCount} objects)`);
            });
            console.log('');
        }

        // Summary by schema type
        const schemaTypes = {};
        this.validatedPages.forEach(page => {
            page.schemas.forEach(schema => {
                if (schema.type) {
                    if (!schemaTypes[schema.type]) {
                        schemaTypes[schema.type] = { 
                            count: 0, 
                            errors: 0, 
                            warnings: 0, 
                            valid: 0,
                            pages: new Set()
                        };
                    }
                    schemaTypes[schema.type].count++;
                    schemaTypes[schema.type].pages.add(page.path);
                    
                    const errorCount = schema.issues.filter(i => i.severity === 'error').length;
                    const warningCount = schema.issues.filter(i => i.severity === 'warning').length;
                    
                    schemaTypes[schema.type].errors += errorCount;
                    schemaTypes[schema.type].warnings += warningCount;
                    
                    if (errorCount === 0) {
                        schemaTypes[schema.type].valid++;
                    }
                }
            });
        });

        if (Object.keys(schemaTypes).length > 0) {
            console.log('📊 SCHEMA TYPE ANALYSIS:');
            console.log('-'.repeat(40));
            Object.entries(schemaTypes).forEach(([type, stats]) => {
                const status = stats.errors > 0 ? '🔴' : stats.warnings > 0 ? '🟡' : '🟢';
                const validRate = ((stats.valid / stats.count) * 100).toFixed(0);
                console.log(`   ${status} ${type}:`);
                console.log(`      Instances: ${stats.count} (${stats.valid} valid - ${validRate}%)`);
                console.log(`      Issues: ${stats.errors} errors, ${stats.warnings} warnings`);
                console.log(`      Found in: ${stats.pages.size} pages`);
            });
            console.log('');
        }

        // Requirements coverage check
        console.log('📋 REQUIREMENTS COVERAGE CHECK:');
        console.log('-'.repeat(40));
        const requirements = {
            '2.1': { name: 'Organization Schema', types: ['Organization'], found: false },
            '2.2': { name: 'WebSite Schema', types: ['WebSite'], found: false },
            '2.3': { name: 'EducationalOrganization Schema', types: ['EducationalOrganization'], found: false },
            '2.4': { name: 'Course Schema', types: ['Course'], found: false },
            '2.5': { name: 'BlogPosting Schema', types: ['BlogPosting'], found: false },
            '2.6': { name: 'AboutPage Schema', types: ['AboutPage'], found: false },
            '2.7': { name: 'BreadcrumbList Schema', types: ['BreadcrumbList'], found: false },
            '2.8': { name: 'ItemList Schema', types: ['ItemList'], found: false }
        };

        Object.keys(schemaTypes).forEach(type => {
            Object.keys(requirements).forEach(reqId => {
                if (requirements[reqId].types.includes(type)) {
                    requirements[reqId].found = true;
                }
            });
        });

        Object.entries(requirements).forEach(([reqId, req]) => {
            const status = req.found ? '✅' : '❌';
            console.log(`   ${status} Requirement ${reqId}: ${req.name}`);
        });

        console.log('\n' + '='.repeat(60));
        
        // Final validation status
        if (this.errors.length === 0) {
            console.log('🎉 VALIDATION PASSED!');
            console.log('✅ All JSON-LD syntax is valid');
            console.log('✅ No schema errors found');
            console.log('✅ Ready for Schema.org validator testing');
            console.log('\n📝 NEXT STEPS:');
            console.log('1. Test with Schema.org validator: https://validator.schema.org/');
            console.log('2. Test with Google Rich Results Test: https://search.google.com/test/rich-results');
            console.log('3. Test social sharing with Facebook Debugger');
        } else {
            console.log('❌ VALIDATION FAILED!');
            console.log(`Found ${this.errors.length} critical errors that must be fixed.`);
            console.log('Please address all errors before proceeding to external validation.');
        }
        
        console.log('='.repeat(60));

        return {
            totalPages,
            pagesWithSchema,
            pagesWithErrors,
            pagesWithWarnings,
            validPages,
            totalSchemas: this.totalSchemas,
            validSchemas: this.validSchemas,
            schemaValidationRate: ((this.validSchemas / this.totalSchemas) * 100).toFixed(1),
            pageSuccessRate: ((validPages / totalPages) * 100).toFixed(1),
            schemaTypes,
            requirements,
            passed: this.errors.length === 0
        };
    }

    /**
     * Run comprehensive validation
     */
    validateAll() {
        console.log('🔍 Starting Schema.org validation for Task 23.4...');
        console.log('📋 Validating requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8\n');
        
        const files = this.getHtmlFiles();
        console.log(`📁 Found ${files.length} HTML files to validate\n`);

        files.forEach((file, index) => {
            console.log(`[${index + 1}/${files.length}] Validating: ${file}`);
            this.validatePage(file);
        });

        return this.generateReport();
    }
}

// Run validation if called directly
if (require.main === module) {
    const validator = new SchemaOrgValidator();
    const result = validator.validateAll();
    
    // Exit with error code if validation failed
    process.exit(result.passed ? 0 : 1);
}

module.exports = SchemaOrgValidator;