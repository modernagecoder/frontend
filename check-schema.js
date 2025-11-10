const fs = require('fs');
const path = require('path');

// Pages to check for schema
const pagesToCheck = [
    { file: 'src/pages/index.html', name: 'Homepage', requiredTypes: ['Organization', 'WebSite', 'EducationalOrganization'] },
    { file: 'src/pages/about.html', name: 'About', requiredTypes: ['AboutPage', 'EducationalOrganization'] },
    { file: 'src/pages/contact.html', name: 'Contact', requiredTypes: ['ContactPage', 'Organization'] },
    { file: 'src/pages/course.html', name: 'Courses', requiredTypes: ['ItemList', 'Course'] },
    { file: 'src/pages/pricing.html', name: 'Pricing', requiredTypes: ['WebPage'] },
    { file: 'src/pages/faq.html', name: 'FAQ', requiredTypes: ['FAQPage', 'Question'] },
    { file: 'src/pages/privacy.html', name: 'Privacy', requiredTypes: ['WebPage'] },
    { file: 'src/pages/terms.html', name: 'Terms', requiredTypes: ['WebPage'] }
];

console.log('\n🔍 Checking Schema Markup in All Pages...\n');
console.log('='.repeat(70));

let totalPages = 0;
let pagesWithSchema = 0;
let pagesWithoutSchema = 0;
const issues = [];

pagesToCheck.forEach(page => {
    totalPages++;
    
    if (!fs.existsSync(page.file)) {
        console.log(`\n❌ ${page.name}: FILE NOT FOUND`);
        issues.push(`${page.name}: File not found`);
        pagesWithoutSchema++;
        return;
    }
    
    const content = fs.readFileSync(page.file, 'utf8');
    
    // Check for JSON-LD schema
    const hasSchema = content.includes('application/ld+json');
    const hasSchemaOrg = content.includes('schema.org');
    
    if (hasSchema && hasSchemaOrg) {
        console.log(`\n✅ ${page.name}: Schema Found`);
        pagesWithSchema++;
        
        // Extract and validate schema types
        const schemaMatches = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
        
        if (schemaMatches) {
            schemaMatches.forEach((match, index) => {
                try {
                    const jsonContent = match.replace(/<script type="application\/ld\+json">/, '').replace(/<\/script>/, '');
                    const schema = JSON.parse(jsonContent);
                    
                    // Check if it's an array or single object
                    const schemas = Array.isArray(schema) ? schema : [schema];
                    
                    schemas.forEach(s => {
                        const type = s['@type'] || 'Unknown';
                        console.log(`   📋 Schema ${index + 1}: ${type}`);
                        
                        // Check for required types
                        const foundTypes = [];
                        const checkType = (obj) => {
                            if (obj['@type']) {
                                foundTypes.push(obj['@type']);
                            }
                            // Check nested objects
                            Object.values(obj).forEach(value => {
                                if (typeof value === 'object' && value !== null) {
                                    checkType(value);
                                }
                            });
                        };
                        checkType(s);
                        
                        // Validate required types
                        const missingTypes = page.requiredTypes.filter(rt => 
                            !foundTypes.some(ft => ft.includes(rt))
                        );
                        
                        if (missingTypes.length > 0) {
                            console.log(`   ⚠️  Missing types: ${missingTypes.join(', ')}`);
                            issues.push(`${page.name}: Missing schema types - ${missingTypes.join(', ')}`);
                        }
                    });
                } catch (e) {
                    console.log(`   ❌ Invalid JSON in schema ${index + 1}`);
                    issues.push(`${page.name}: Invalid JSON in schema`);
                }
            });
        }
    } else {
        console.log(`\n❌ ${page.name}: NO SCHEMA FOUND`);
        pagesWithoutSchema++;
        issues.push(`${page.name}: No schema markup found`);
    }
});

// Summary
console.log('\n' + '='.repeat(70));
console.log('\n📊 SUMMARY\n');
console.log(`Total Pages Checked: ${totalPages}`);
console.log(`✅ Pages with Schema: ${pagesWithSchema}`);
console.log(`❌ Pages without Schema: ${pagesWithoutSchema}`);
console.log(`Coverage: ${Math.round((pagesWithSchema / totalPages) * 100)}%`);

if (issues.length > 0) {
    console.log('\n⚠️  ISSUES FOUND:\n');
    issues.forEach((issue, index) => {
        console.log(`${index + 1}. ${issue}`);
    });
} else {
    console.log('\n✨ All pages have proper schema markup!');
}

console.log('\n' + '='.repeat(70) + '\n');
