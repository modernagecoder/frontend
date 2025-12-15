/**
 * Blog JSON Validation Script - Professionals Category
 * Validates blog files against the design document correctness properties
 */

const fs = require('fs');
const path = require('path');

// Professionals category blog files to validate
const blogFiles = [
  'professionals-upskill-coding-without-quitting.json',
  'data-science-ai-math-skills-professionals.json',
  'career-transition-non-tech-to-tech.json',
  'top-emerging-tech-skills-2025.json',
  'why-python-most-powerful-skill-professionals.json'
];

const blogDataDir = path.join(__dirname, '..', 'content', 'blog', 'data');

// Validation results
const results = {
  passed: [],
  failed: [],
  warnings: []
};

function validateBlog(filename) {
  const filepath = path.join(blogDataDir, filename);
  const validationResult = {
    file: filename,
    checks: {},
    errors: [],
    warnings: []
  };

  // Property 9: Valid JSON Structure - parsing SHALL not throw an error
  let blogData;
  try {
    const content = fs.readFileSync(filepath, 'utf8');
    blogData = JSON.parse(content);
    validationResult.checks.validJson = true;
  } catch (error) {
    validationResult.checks.validJson = false;
    validationResult.errors.push(`Invalid JSON or file not found: ${error.message}`);
    return validationResult;
  }

  // Property 9: Required top-level keys (meta, hero, content)
  const requiredKeys = ['meta', 'hero', 'content'];
  const hasRequiredKeys = requiredKeys.every(key => blogData.hasOwnProperty(key));
  validationResult.checks.requiredKeys = hasRequiredKeys;
  if (!hasRequiredKeys) {
    validationResult.errors.push(`Missing required keys. Found: ${Object.keys(blogData).join(', ')}`);
  }

  // Property 3: Meta description length < 160 chars
  const metaDesc = blogData.meta?.description || '';
  validationResult.checks.metaDescLength = metaDesc.length < 160;
  validationResult.metaDescLength = metaDesc.length;
  if (metaDesc.length >= 160) {
    validationResult.errors.push(`Meta description too long: ${metaDesc.length} chars (max 160)`);
  }

  // Property 5: Has TOC section
  const sections = blogData.content?.sections || [];
  const hasToc = sections.some(s => s.type === 'toc');
  validationResult.checks.hasToc = hasToc;
  if (!hasToc) {
    validationResult.errors.push('Missing TOC section');
  }

  // Property 6: Has at least 2 callouts
  const calloutCount = sections.filter(s => s.type === 'callout').length;
  validationResult.checks.hasCallouts = calloutCount >= 2;
  validationResult.calloutCount = calloutCount;
  if (calloutCount < 2) {
    validationResult.errors.push(`Insufficient callouts: ${calloutCount} (min 2)`);
  }

  // Property 7: Has FAQ accordion
  const hasAccordion = sections.some(s => s.type === 'accordion');
  validationResult.checks.hasAccordion = hasAccordion;
  if (!hasAccordion) {
    validationResult.warnings.push('Missing FAQ accordion section (recommended but not blocking)');
  }

  // Property 8: Has CTA button linking to courses
  const buttons = sections.filter(s => s.type === 'button');
  const hasCourseButton = buttons.some(b => b.url && b.url.includes('/courses'));
  validationResult.checks.hasCourseButton = hasCourseButton;
  validationResult.buttonCount = buttons.length;
  if (!hasCourseButton) {
    validationResult.errors.push('Missing CTA button linking to /courses/');
  }

  // Property 1: Content variety - at least 4 different section types
  const sectionTypes = [...new Set(sections.map(s => s.type))];
  validationResult.checks.contentVariety = sectionTypes.length >= 4;
  validationResult.sectionTypes = sectionTypes;
  if (sectionTypes.length < 4) {
    validationResult.errors.push(`Insufficient content variety: ${sectionTypes.length} types (min 4)`);
  }

  // Property 2: Heading hierarchy - H3 only after H2
  let lastH2Index = -1;
  let headingHierarchyValid = true;
  sections.forEach((section, index) => {
    if (section.type === 'heading') {
      if (section.level === 2) {
        lastH2Index = index;
      } else if (section.level === 3 && lastH2Index === -1) {
        headingHierarchyValid = false;
      }
    }
  });
  validationResult.checks.headingHierarchy = headingHierarchyValid;
  if (!headingHierarchyValid) {
    validationResult.warnings.push('H3 heading appears before any H2 heading');
  }

  // Property 4: Internal links to /courses/
  const contentText = JSON.stringify(blogData.content);
  const hasInternalLinks = contentText.includes('/courses/') || contentText.includes('"/courses"');
  validationResult.checks.hasInternalLinks = hasInternalLinks;
  if (!hasInternalLinks) {
    validationResult.errors.push('Missing internal links to /courses path');
  }

  // Property 10: Keywords in content (at least 50%)
  const keywords = blogData.meta?.keywords || [];
  const contentLower = contentText.toLowerCase();
  const keywordsFound = keywords.filter(kw => contentLower.includes(kw.toLowerCase()));
  const keywordPercentage = keywords.length > 0 ? (keywordsFound.length / keywords.length) * 100 : 0;
  validationResult.checks.keywordsInContent = keywordPercentage >= 50;
  validationResult.keywordPercentage = keywordPercentage.toFixed(1);
  validationResult.keywordsFound = keywordsFound.length;
  validationResult.totalKeywords = keywords.length;
  if (keywordPercentage < 50) {
    validationResult.warnings.push(`Only ${keywordPercentage.toFixed(1)}% of keywords found in content (min 50%)`);
  }

  // Count sections for summary
  validationResult.totalSections = sections.length;
  validationResult.h2Count = sections.filter(s => s.type === 'heading' && s.level === 2).length;
  validationResult.h3Count = sections.filter(s => s.type === 'heading' && s.level === 3).length;

  return validationResult;
}

// Run validation
console.log('='.repeat(70));
console.log('BLOG JSON VALIDATION - Professionals Category');
console.log('='.repeat(70));
console.log('');
console.log('Validating against Design Document Correctness Properties:');
console.log('  Property 1: Content Variety (4+ section types)');
console.log('  Property 2: Heading Hierarchy (H3 after H2)');
console.log('  Property 3: Meta Description Length (<160 chars)');
console.log('  Property 4: Internal Links Present (/courses/)');
console.log('  Property 5: TOC Present');
console.log('  Property 6: Callouts Present (2+)');
console.log('  Property 7: FAQ Accordion Present');
console.log('  Property 8: CTA Buttons Present');
console.log('  Property 9: Valid JSON Structure');
console.log('  Property 10: Keywords in Content (50%+)');
console.log('');

let allPassed = true;

blogFiles.forEach(file => {
  const result = validateBlog(file);
  const passed = result.errors.length === 0;
  
  if (!passed) allPassed = false;
  
  console.log(`\n📄 ${file}`);
  console.log('-'.repeat(60));
  
  // Summary stats
  console.log(`   Sections: ${result.totalSections || 'N/A'} | H2: ${result.h2Count || 0} | H3: ${result.h3Count || 0}`);
  console.log(`   Callouts: ${result.calloutCount || 0} | Buttons: ${result.buttonCount || 0}`);
  console.log(`   Meta desc: ${result.metaDescLength || 'N/A'} chars`);
  console.log(`   Keywords: ${result.keywordsFound || 0}/${result.totalKeywords || 0} (${result.keywordPercentage || 0}%)`);
  console.log(`   Section types: ${result.sectionTypes?.join(', ') || 'N/A'}`);
  
  // Checks
  console.log('\n   Correctness Property Checks:');
  Object.entries(result.checks).forEach(([check, passed]) => {
    console.log(`   ${passed ? '✅' : '❌'} ${check}`);
  });
  
  // Errors
  if (result.errors.length > 0) {
    console.log('\n   ❌ ERRORS:');
    result.errors.forEach(err => console.log(`      - ${err}`));
  }
  
  // Warnings
  if (result.warnings.length > 0) {
    console.log('\n   ⚠️  WARNINGS:');
    result.warnings.forEach(warn => console.log(`      - ${warn}`));
  }
  
  console.log(`\n   Status: ${passed ? '✅ PASSED' : '❌ FAILED'}`);
  
  if (passed) {
    results.passed.push(file);
  } else {
    results.failed.push({ file, errors: result.errors });
  }
  if (result.warnings.length > 0) {
    results.warnings.push({ file, warnings: result.warnings });
  }
});

// Final summary
console.log('\n' + '='.repeat(70));
console.log('VALIDATION SUMMARY');
console.log('='.repeat(70));
console.log(`\n✅ Passed: ${results.passed.length}/${blogFiles.length}`);
console.log(`❌ Failed: ${results.failed.length}/${blogFiles.length}`);
console.log(`⚠️  With warnings: ${results.warnings.length}/${blogFiles.length}`);

if (results.failed.length > 0) {
  console.log('\n❌ Failed files:');
  results.failed.forEach(f => {
    console.log(`   - ${f.file}`);
    f.errors.forEach(e => console.log(`     └─ ${e}`));
  });
}

if (results.warnings.length > 0) {
  console.log('\n⚠️  Files with warnings:');
  results.warnings.forEach(f => {
    console.log(`   - ${f.file}`);
    f.warnings.forEach(w => console.log(`     └─ ${w}`));
  });
}

console.log('\n' + '='.repeat(70));
console.log(allPassed ? '✅ ALL VALIDATIONS PASSED!' : '❌ SOME VALIDATIONS FAILED');
console.log('='.repeat(70));

process.exit(allPassed ? 0 : 1);
