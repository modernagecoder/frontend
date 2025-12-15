/**
 * Final Checkpoint - Validate ALL Blog JSON Files
 * Validates all blog files against the design document correctness properties
 * Task 12: Final Checkpoint - Verify All Blogs
 */

const fs = require('fs');
const path = require('path');

const blogDataDir = path.join(__dirname, '..', 'content', 'blog', 'data');

// Get all JSON files in the blog data directory
const allBlogFiles = fs.readdirSync(blogDataDir)
  .filter(file => file.endsWith('.json'))
  .sort();

console.log(`Found ${allBlogFiles.length} blog JSON files to validate\n`);

// Validation results
const results = {
  passed: [],
  failed: [],
  warnings: [],
  totalFiles: allBlogFiles.length
};

/**
 * Validate a single blog JSON file against all correctness properties
 */
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
    validationResult.errors.push(`Property 9 FAIL - Invalid JSON: ${error.message}`);
    return validationResult;
  }

  // Property 9: Required top-level keys (meta, hero, content)
  const requiredKeys = ['meta', 'hero', 'content'];
  const hasRequiredKeys = requiredKeys.every(key => blogData.hasOwnProperty(key));
  validationResult.checks.requiredKeys = hasRequiredKeys;
  if (!hasRequiredKeys) {
    const foundKeys = Object.keys(blogData).join(', ');
    validationResult.errors.push(`Property 9 FAIL - Missing required keys. Found: ${foundKeys}`);
  }

  // Property 3: Meta description length < 160 chars
  const metaDesc = blogData.meta?.description || '';
  validationResult.checks.metaDescLength = metaDesc.length < 160;
  validationResult.metaDescLength = metaDesc.length;
  if (metaDesc.length >= 160) {
    validationResult.errors.push(`Property 3 FAIL - Meta description too long: ${metaDesc.length} chars (max 160)`);
  }

  // Property 5: Has TOC section
  const sections = blogData.content?.sections || [];
  const hasToc = sections.some(s => s.type === 'toc');
  validationResult.checks.hasToc = hasToc;
  if (!hasToc) {
    validationResult.errors.push('Property 5 FAIL - Missing TOC section');
  }

  // Property 6: Has at least 2 callouts
  const calloutCount = sections.filter(s => s.type === 'callout').length;
  validationResult.checks.hasCallouts = calloutCount >= 2;
  validationResult.calloutCount = calloutCount;
  if (calloutCount < 2) {
    validationResult.errors.push(`Property 6 FAIL - Insufficient callouts: ${calloutCount} (min 2)`);
  }

  // Property 7: Has FAQ accordion
  const hasAccordion = sections.some(s => s.type === 'accordion');
  validationResult.checks.hasAccordion = hasAccordion;
  if (!hasAccordion) {
    validationResult.errors.push('Property 7 FAIL - Missing FAQ accordion section');
  }

  // Property 8: Has CTA button linking to courses
  const buttons = sections.filter(s => s.type === 'button');
  const hasCourseButton = buttons.some(b => b.url && (b.url.includes('/courses/') || b.url.includes('/courses')));
  validationResult.checks.hasCourseButton = hasCourseButton;
  validationResult.buttonCount = buttons.length;
  if (!hasCourseButton) {
    validationResult.errors.push('Property 8 FAIL - Missing CTA button linking to /courses/');
  }

  // Property 1: Content variety - at least 4 different section types
  const sectionTypes = [...new Set(sections.map(s => s.type))];
  validationResult.checks.contentVariety = sectionTypes.length >= 4;
  validationResult.sectionTypes = sectionTypes;
  if (sectionTypes.length < 4) {
    validationResult.errors.push(`Property 1 FAIL - Insufficient content variety: ${sectionTypes.length} types (min 4)`);
  }

  // Property 2: Heading hierarchy - H3 only after H2
  let lastH2Index = -1;
  let headingHierarchyValid = true;
  let firstH3BeforeH2 = null;
  
  sections.forEach((section, index) => {
    if (section.type === 'heading') {
      if (section.level === 2) {
        lastH2Index = index;
      } else if (section.level === 3 && lastH2Index === -1 && !firstH3BeforeH2) {
        headingHierarchyValid = false;
        firstH3BeforeH2 = section.text || `H3 at index ${index}`;
      }
    }
  });
  
  validationResult.checks.headingHierarchy = headingHierarchyValid;
  if (!headingHierarchyValid) {
    validationResult.warnings.push(`Property 2 WARNING - H3 heading appears before any H2: "${firstH3BeforeH2}"`);
  }

  // Property 4: Internal links to /courses/
  const contentText = JSON.stringify(blogData.content);
  const hasInternalLinks = contentText.includes('/courses/') || contentText.includes('"/courses"');
  validationResult.checks.hasInternalLinks = hasInternalLinks;
  if (!hasInternalLinks) {
    validationResult.errors.push('Property 4 FAIL - Missing internal links to /courses path');
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
  
  if (keywordPercentage < 50 && keywords.length > 0) {
    validationResult.warnings.push(`Property 10 WARNING - Only ${keywordPercentage.toFixed(1)}% of keywords found in content (min 50%)`);
  }

  // Count sections for summary
  validationResult.totalSections = sections.length;
  validationResult.h2Count = sections.filter(s => s.type === 'heading' && s.level === 2).length;
  validationResult.h3Count = sections.filter(s => s.type === 'heading' && s.level === 3).length;
  validationResult.paragraphCount = sections.filter(s => s.type === 'paragraph').length;

  return validationResult;
}

// Run validation
console.log('='.repeat(80));
console.log('FINAL CHECKPOINT - VALIDATE ALL BLOG JSON FILES');
console.log('Task 12: Verify All Blogs Against Design Document Correctness Properties');
console.log('='.repeat(80));
console.log('');
console.log('Validating against 10 Correctness Properties:');
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
console.log('='.repeat(80));

let allPassed = true;
let fileCount = 0;

allBlogFiles.forEach(file => {
  fileCount++;
  const result = validateBlog(file);
  const passed = result.errors.length === 0;
  
  if (!passed) allPassed = false;
  
  console.log(`\n[${fileCount}/${allBlogFiles.length}] 📄 ${file}`);
  console.log('-'.repeat(70));
  
  // Summary stats
  console.log(`   Structure: ${result.totalSections || 0} sections | ${result.h2Count || 0} H2 | ${result.h3Count || 0} H3 | ${result.paragraphCount || 0} paragraphs`);
  console.log(`   Elements: ${result.calloutCount || 0} callouts | ${result.buttonCount || 0} buttons`);
  console.log(`   Meta: ${result.metaDescLength || 0} char description`);
  console.log(`   Keywords: ${result.keywordsFound || 0}/${result.totalKeywords || 0} found (${result.keywordPercentage || 0}%)`);
  console.log(`   Types: ${result.sectionTypes?.join(', ') || 'N/A'}`);
  
  // Checks
  console.log('\n   Property Checks:');
  const checkEntries = Object.entries(result.checks);
  checkEntries.forEach(([check, passed]) => {
    console.log(`   ${passed ? '✅' : '❌'} ${check}`);
  });
  
  // Errors
  if (result.errors.length > 0) {
    console.log('\n   ❌ ERRORS:');
    result.errors.forEach(err => console.log(`      • ${err}`));
  }
  
  // Warnings
  if (result.warnings.length > 0) {
    console.log('\n   ⚠️  WARNINGS:');
    result.warnings.forEach(warn => console.log(`      • ${warn}`));
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
console.log('\n' + '='.repeat(80));
console.log('FINAL VALIDATION SUMMARY');
console.log('='.repeat(80));
console.log(`\n📊 Results:`);
console.log(`   ✅ Passed: ${results.passed.length}/${results.totalFiles} (${((results.passed.length/results.totalFiles)*100).toFixed(1)}%)`);
console.log(`   ❌ Failed: ${results.failed.length}/${results.totalFiles} (${((results.failed.length/results.totalFiles)*100).toFixed(1)}%)`);
console.log(`   ⚠️  With warnings: ${results.warnings.length}/${results.totalFiles}`);

if (results.failed.length > 0) {
  console.log('\n❌ FAILED FILES:');
  console.log('-'.repeat(80));
  results.failed.forEach((f, idx) => {
    console.log(`\n${idx + 1}. ${f.file}`);
    f.errors.forEach(e => console.log(`   └─ ${e}`));
  });
}

if (results.warnings.length > 0) {
  console.log('\n⚠️  FILES WITH WARNINGS:');
  console.log('-'.repeat(80));
  results.warnings.forEach((f, idx) => {
    console.log(`\n${idx + 1}. ${f.file}`);
    f.warnings.forEach(w => console.log(`   └─ ${w}`));
  });
}

if (results.passed.length > 0) {
  console.log('\n✅ PASSED FILES:');
  console.log('-'.repeat(80));
  results.passed.forEach((file, idx) => {
    console.log(`${idx + 1}. ${file}`);
  });
}

console.log('\n' + '='.repeat(80));
if (allPassed) {
  console.log('✅ SUCCESS! ALL BLOG FILES PASSED VALIDATION!');
  console.log('All blogs meet the design document correctness properties.');
} else {
  console.log('❌ VALIDATION FAILED');
  console.log(`${results.failed.length} file(s) need attention before completion.`);
}
console.log('='.repeat(80));
console.log('');

process.exit(allPassed ? 0 : 1);
