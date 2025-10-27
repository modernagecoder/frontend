/**
 * Script to validate the schema markup in the courses page
 */

const fs = require('fs');
const path = require('path');

function extractSchemaFromHTML(htmlContent) {
    // Find the JSON-LD script tag
    const schemaStart = htmlContent.indexOf('<script type="application/ld+json">');
    const schemaEnd = htmlContent.indexOf('</script>', schemaStart);
    
    if (schemaStart === -1 || schemaEnd === -1) {
        throw new Error('No JSON-LD schema found in HTML');
    }
    
    // Extract the JSON content
    const jsonStart = htmlContent.indexOf('[', schemaStart);
    const jsonEnd = htmlContent.lastIndexOf(']', schemaEnd) + 1;
    
    const jsonContent = htmlContent.substring(jsonStart, jsonEnd);
    
    try {
        return JSON.parse(jsonContent);
    } catch (error) {
        throw new Error(`Invalid JSON in schema: ${error.message}`);
    }
}

function validateItemListSchema(schema) {
    const errors = [];
    const warnings = [];
    
    // Check required properties
    if (!schema['@context']) errors.push('Missing @context');
    if (!schema['@type']) errors.push('Missing @type');
    if (schema['@type'] !== 'ItemList') errors.push('Incorrect @type, expected ItemList');
    if (!schema.name) errors.push('Missing name property');
    if (!schema.description) errors.push('Missing description property');
    if (!schema.url) errors.push('Missing url property');
    if (!schema.numberOfItems) errors.push('Missing numberOfItems property');
    if (!schema.itemListElement || !Array.isArray(schema.itemListElement)) {
        errors.push('Missing or invalid itemListElement array');
    }
    
    // Validate itemListElement
    if (schema.itemListElement) {
        schema.itemListElement.forEach((item, index) => {
            if (!item['@type'] || item['@type'] !== 'ListItem') {
                errors.push(`Item ${index + 1}: Missing or incorrect @type (should be ListItem)`);
            }
            if (!item.position) {
                errors.push(`Item ${index + 1}: Missing position`);
            }
            if (!item.item) {
                errors.push(`Item ${index + 1}: Missing item property`);
            } else {
                const courseItem = item.item;
                if (!courseItem['@type'] || courseItem['@type'] !== 'Course') {
                    errors.push(`Item ${index + 1}: Course missing or incorrect @type`);
                }
                if (!courseItem.name) {
                    errors.push(`Item ${index + 1}: Course missing name`);
                }
                if (!courseItem.description) {
                    errors.push(`Item ${index + 1}: Course missing description`);
                }
                if (!courseItem.url) {
                    errors.push(`Item ${index + 1}: Course missing url`);
                }
                if (!courseItem.provider) {
                    warnings.push(`Item ${index + 1}: Course missing provider (recommended)`);
                } else if (!courseItem.provider.name) {
                    warnings.push(`Item ${index + 1}: Course provider missing name`);
                }
            }
        });
        
        // Check if numberOfItems matches actual items
        if (schema.numberOfItems !== schema.itemListElement.length) {
            warnings.push(`numberOfItems (${schema.numberOfItems}) doesn't match actual items (${schema.itemListElement.length})`);
        }
    }
    
    return { errors, warnings };
}

function validateBreadcrumbSchema(schema) {
    const errors = [];
    const warnings = [];
    
    // Check required properties
    if (!schema['@context']) errors.push('Missing @context');
    if (!schema['@type']) errors.push('Missing @type');
    if (schema['@type'] !== 'BreadcrumbList') errors.push('Incorrect @type, expected BreadcrumbList');
    if (!schema.itemListElement || !Array.isArray(schema.itemListElement)) {
        errors.push('Missing or invalid itemListElement array');
    }
    
    // Validate breadcrumb items
    if (schema.itemListElement) {
        schema.itemListElement.forEach((item, index) => {
            if (!item['@type'] || item['@type'] !== 'ListItem') {
                errors.push(`Breadcrumb ${index + 1}: Missing or incorrect @type (should be ListItem)`);
            }
            if (!item.position) {
                errors.push(`Breadcrumb ${index + 1}: Missing position`);
            }
            if (!item.name) {
                errors.push(`Breadcrumb ${index + 1}: Missing name`);
            }
            if (!item.item) {
                errors.push(`Breadcrumb ${index + 1}: Missing item URL`);
            }
        });
    }
    
    return { errors, warnings };
}

function validateCoursesSchema() {
    const coursesPagePath = path.join(__dirname, '../src/pages/course.html');
    
    try {
        console.log('🔍 Validating courses page schema...\n');
        
        // Read the courses page
        const htmlContent = fs.readFileSync(coursesPagePath, 'utf8');
        
        // Extract schema
        const schemas = extractSchemaFromHTML(htmlContent);
        
        if (!Array.isArray(schemas)) {
            throw new Error('Expected schema to be an array');
        }
        
        console.log(`📊 Found ${schemas.length} schema objects\n`);
        
        let totalErrors = 0;
        let totalWarnings = 0;
        
        schemas.forEach((schema, index) => {
            console.log(`--- Schema ${index + 1}: ${schema['@type']} ---`);
            
            let validation;
            if (schema['@type'] === 'ItemList') {
                validation = validateItemListSchema(schema);
                console.log(`✅ ItemList with ${schema.itemListElement?.length || 0} courses`);
            } else if (schema['@type'] === 'BreadcrumbList') {
                validation = validateBreadcrumbSchema(schema);
                console.log(`✅ BreadcrumbList with ${schema.itemListElement?.length || 0} breadcrumbs`);
            } else {
                console.log(`⚠️  Unknown schema type: ${schema['@type']}`);
                return;
            }
            
            if (validation.errors.length > 0) {
                console.log(`❌ Errors (${validation.errors.length}):`);
                validation.errors.forEach(error => console.log(`   - ${error}`));
            }
            
            if (validation.warnings.length > 0) {
                console.log(`⚠️  Warnings (${validation.warnings.length}):`);
                validation.warnings.forEach(warning => console.log(`   - ${warning}`));
            }
            
            if (validation.errors.length === 0 && validation.warnings.length === 0) {
                console.log('✅ No issues found');
            }
            
            totalErrors += validation.errors.length;
            totalWarnings += validation.warnings.length;
            
            console.log('');
        });
        
        // Summary
        console.log('=== VALIDATION SUMMARY ===');
        console.log(`Total Errors: ${totalErrors}`);
        console.log(`Total Warnings: ${totalWarnings}`);
        
        if (totalErrors === 0) {
            console.log('🎉 Schema validation passed! Ready for Google Rich Results Test.');
            console.log('\n📝 Next steps:');
            console.log('1. Test with Google Rich Results Test: https://search.google.com/test/rich-results');
            console.log('2. Test with Schema.org validator: https://validator.schema.org/');
            console.log('3. Test social sharing with Facebook Debugger: https://developers.facebook.com/tools/debug/');
        } else {
            console.log('❌ Schema validation failed. Please fix the errors above.');
        }
        
    } catch (error) {
        console.error('❌ Validation failed:', error.message);
    }
}

// Run validation if this script is executed directly
if (require.main === module) {
    validateCoursesSchema();
}

module.exports = { validateCoursesSchema };