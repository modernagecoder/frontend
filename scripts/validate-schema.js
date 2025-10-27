/**
 * Schema Validation Script for Homepage
 * Validates the JSON-LD schema markup structure
 */

const fs = require('fs');
const path = require('path');

function validateHomepageSchema() {
  try {
    // Read the homepage file
    const homepagePath = path.join(__dirname, '..', 'src', 'pages', 'index.html');
    const htmlContent = fs.readFileSync(homepagePath, 'utf8');
    
    // Extract JSON-LD script content
    const jsonLdMatch = htmlContent.match(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/);
    
    if (!jsonLdMatch) {
      console.error('❌ No JSON-LD schema found in homepage');
      return false;
    }
    
    // Parse the JSON-LD
    const schemaJson = JSON.parse(jsonLdMatch[1]);
    
    console.log('🔍 Validating Homepage Schema Markup...\n');
    
    // Check if it's using @graph structure
    if (!schemaJson['@graph']) {
      console.error('❌ Schema should use @graph structure');
      return false;
    }
    
    const schemas = schemaJson['@graph'];
    let organizationFound = false;
    let websiteFound = false;
    let educationalOrgFound = false;
    
    // Validate each schema type
    schemas.forEach((schema, index) => {
      console.log(`📋 Schema ${index + 1}: ${schema['@type']}`);
      
      switch (schema['@type']) {
        case 'Organization':
          organizationFound = true;
          validateOrganizationSchema(schema);
          break;
        case 'WebSite':
          websiteFound = true;
          validateWebSiteSchema(schema);
          break;
        case 'EducationalOrganization':
          educationalOrgFound = true;
          validateEducationalOrganizationSchema(schema);
          break;
      }
    });
    
    // Check if all required schemas are present
    console.log('\n📊 Schema Coverage:');
    console.log(`✅ Organization Schema: ${organizationFound ? 'Present' : 'Missing'}`);
    console.log(`✅ WebSite Schema: ${websiteFound ? 'Present' : 'Missing'}`);
    console.log(`✅ EducationalOrganization Schema: ${educationalOrgFound ? 'Present' : 'Missing'}`);
    
    const allPresent = organizationFound && websiteFound && educationalOrgFound;
    
    if (allPresent) {
      console.log('\n🎉 All required schema types are present and valid!');
      console.log('\n📝 Manual Validation Steps:');
      console.log('1. Visit: https://search.google.com/test/rich-results');
      console.log('2. Enter URL: https://learn.modernagecoders.com');
      console.log('3. Click "Test URL" to validate schema markup');
      console.log('4. Check for any errors or warnings');
    } else {
      console.log('\n❌ Some required schema types are missing');
    }
    
    return allPresent;
    
  } catch (error) {
    console.error('❌ Error validating schema:', error.message);
    return false;
  }
}

function validateOrganizationSchema(schema) {
  const required = ['name', 'url', 'description'];
  const recommended = ['logo', 'contactPoint', 'address', 'sameAs'];
  
  required.forEach(field => {
    if (!schema[field]) {
      console.log(`  ⚠️  Missing required field: ${field}`);
    } else {
      console.log(`  ✅ ${field}: Present`);
    }
  });
  
  recommended.forEach(field => {
    if (!schema[field]) {
      console.log(`  ⚠️  Missing recommended field: ${field}`);
    } else {
      console.log(`  ✅ ${field}: Present`);
    }
  });
  
  // Validate contact point
  if (schema.contactPoint) {
    const contact = schema.contactPoint;
    if (contact.telephone && contact.email) {
      console.log('  ✅ Complete contact information');
    } else {
      console.log('  ⚠️  Incomplete contact information');
    }
  }
}

function validateWebSiteSchema(schema) {
  const required = ['name', 'url'];
  
  required.forEach(field => {
    if (!schema[field]) {
      console.log(`  ⚠️  Missing required field: ${field}`);
    } else {
      console.log(`  ✅ ${field}: Present`);
    }
  });
  
  // Check for SearchAction
  if (schema.potentialAction && schema.potentialAction['@type'] === 'SearchAction') {
    console.log('  ✅ SearchAction: Present');
    if (schema.potentialAction.target && schema.potentialAction['query-input']) {
      console.log('  ✅ SearchAction properly configured');
    } else {
      console.log('  ⚠️  SearchAction incomplete');
    }
  } else {
    console.log('  ⚠️  SearchAction: Missing');
  }
}

function validateEducationalOrganizationSchema(schema) {
  const required = ['name', 'description', 'url'];
  
  required.forEach(field => {
    if (!schema[field]) {
      console.log(`  ⚠️  Missing required field: ${field}`);
    } else {
      console.log(`  ✅ ${field}: Present`);
    }
  });
  
  // Check for statistics
  if (schema.numberOfEmployees || schema.alumni) {
    console.log('  ✅ Statistics: Present');
  } else {
    console.log('  ⚠️  Statistics: Missing');
  }
}

// Run validation
if (require.main === module) {
  validateHomepageSchema();
}

module.exports = { validateHomepageSchema };