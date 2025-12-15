const fs = require('fs');
const path = require('path');

const blogDataDir = path.join(__dirname, '../content/blog/data');

// Enhancement checklist criteria
const checkBlog = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const blog = JSON.parse(content);
    
    const fileName = path.basename(filePath);
    const results = {
      file: fileName,
      checks: {}
    };
    
    // Check 1: Has TOC section
    const hasTOC = blog.content?.sections?.some(s => s.type === 'toc');
    results.checks.hasTOC = hasTOC;
    
    // Check 2: Has 3+ callout boxes
    const calloutCount = blog.content?.sections?.filter(s => s.type === 'callout').length || 0;
    results.checks.hasCallouts = calloutCount >= 3;
    results.checks.calloutCount = calloutCount;
    
    // Check 3: Has FAQ accordion with 5+ questions
    const accordions = blog.content?.sections?.filter(s => s.type === 'accordion') || [];
    const faqQuestions = accordions.reduce((sum, acc) => sum + (acc.items?.length || 0), 0);
    results.checks.hasFAQ = faqQuestions >= 5;
    results.checks.faqCount = faqQuestions;
    
    // Check 4: Has 2+ CTA buttons
    const buttonCount = blog.content?.sections?.filter(s => s.type === 'button').length || 0;
    results.checks.hasButtons = buttonCount >= 2;
    results.checks.buttonCount = buttonCount;
    
    // Check 5: Has internal links to courses
    const contentText = JSON.stringify(blog.content);
    const hasInternalLinks = contentText.includes('/courses/');
    results.checks.hasInternalLinks = hasInternalLinks;
    
    // Check 6: Meta description < 160 chars
    const descLength = blog.meta?.description?.length || 0;
    results.checks.validMetaDesc = descLength > 0 && descLength <= 160;
    results.checks.descLength = descLength;
    
    // Check 7: Word count estimate (rough)
    const wordCount = blog.content?.sections
      ?.filter(s => s.type === 'paragraph' || s.type === 'heading')
      ?.map(s => s.text || '')
      ?.join(' ')
      ?.split(/\s+/)
      ?.length || 0;
    results.checks.wordCount = wordCount;
    
    // Overall pass
    results.needsEnhancement = !hasTOC || calloutCount < 3 || faqQuestions < 5 || buttonCount < 2;
    
    return results;
  } catch (error) {
    return { file: path.basename(filePath), error: error.message };
  }
};

// Main execution
const files = fs.readdirSync(blogDataDir)
  .filter(f => f.endsWith('.json'));

console.log(`\n=== Blog Enhancement Validation ===\n`);
console.log(`Total blog files: ${files.length}\n`);

const needsEnhancement = [];
const fullyEnhanced = [];

files.forEach(file => {
  const filePath = path.join(blogDataDir, file);
  const result = checkBlog(filePath);
  
  if (result.error) {
    console.log(`❌ ${file}: ERROR - ${result.error}`);
    needsEnhancement.push(file);
  } else if (result.needsEnhancement) {
    console.log(`⚠️  ${file}:`);
    console.log(`   TOC: ${result.checks.hasTOC ? '✓' : '✗'}`);
    console.log(`   Callouts: ${result.checks.calloutCount}/3 ${result.checks.hasCallouts ? '✓' : '✗'}`);
    console.log(`   FAQ: ${result.checks.faqCount}/5 ${result.checks.hasFAQ ? '✓' : '✗'}`);
    console.log(`   Buttons: ${result.checks.buttonCount}/2 ${result.checks.hasButtons ? '✓' : '✗'}`);
    console.log(`   Internal Links: ${result.checks.hasInternalLinks ? '✓' : '✗'}`);
    console.log(`   Meta Desc: ${result.checks.descLength} chars ${result.checks.validMetaDesc ? '✓' : '✗'}`);
    console.log(`   Est. Words: ${result.checks.wordCount}`);
    console.log('');
    needsEnhancement.push(file);
  } else {
    fullyEnhanced.push(file);
  }
});

console.log(`\n=== Summary ===`);
console.log(`✓ Fully enhanced: ${fullyEnhanced.length}`);
console.log(`⚠️  Needs enhancement: ${needsEnhancement.length}`);

if (needsEnhancement.length > 0) {
  console.log(`\nFiles needing enhancement:`);
  needsEnhancement.forEach(f => console.log(`  - ${f}`));
}
