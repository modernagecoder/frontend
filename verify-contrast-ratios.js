/**
 * Verify Website Color Contrast Ratios
 * Validates the contrast ratios claimed in CSS comments
 */

// Color contrast calculation functions
function parseColor(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

function getLuminance(rgb) {
    const rsRGB = rgb.r / 255;
    const gsRGB = rgb.g / 255;
    const bsRGB = rgb.b / 255;
    
    const r = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
    const g = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
    const b = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function calculateContrast(color1, color2) {
    const rgb1 = parseColor(color1);
    const rgb2 = parseColor(color2);
    
    const l1 = getLuminance(rgb1);
    const l2 = getLuminance(rgb2);
    
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    
    return (lighter + 0.05) / (darker + 0.05);
}

// Website color combinations to verify
const websiteColors = [
    // Primary text colors against dark background
    { name: 'Primary Text', text: '#F8FAFC', bg: '#000002', claimed: '20.05:1' },
    { name: 'Secondary Text', text: '#CBD5E1', bg: '#000002', claimed: '14.13:1' },
    { name: 'Muted Text', text: '#94A3B8', bg: '#000002', claimed: '8.18:1' },
    
    // Girls section accent colors
    { name: 'Girls Empowerment', text: '#EC4899', bg: '#000002', claimed: '5.95:1' },
    { name: 'Girls Confidence', text: '#A855F7', bg: '#000002', claimed: '5.30:1' },
    { name: 'Girls Creativity', text: '#F59E0B', bg: '#000002', claimed: '9.77:1' },
    { name: 'Girls Teamwork', text: '#10B981', bg: '#000002', claimed: '8.27:1' },
    
    // Button combinations
    { name: 'White on Purple Button', text: '#FFFFFF', bg: '#8A2BE2', claimed: null },
    { name: 'White on Dark Purple', text: '#FFFFFF', bg: '#4A00E0', claimed: null },
    { name: 'Black on Gold Button', text: '#000000', bg: '#FFD700', claimed: null },
    { name: 'White on Pink Button', text: '#FFFFFF', bg: '#EC4899', claimed: null }
];

console.log('🎨 WEBSITE COLOR CONTRAST VERIFICATION');
console.log('======================================\n');

let allPassed = true;
let results = [];

websiteColors.forEach(combo => {
    const actualRatio = calculateContrast(combo.text, combo.bg);
    const passesAA = actualRatio >= 4.5;
    const passesAAA = actualRatio >= 7.0;
    
    const status = passesAA ? '✅' : '❌';
    const level = passesAAA ? 'AAA' : passesAA ? 'AA' : 'FAIL';
    
    console.log(`${status} ${combo.name}`);
    console.log(`   Colors: ${combo.text} on ${combo.bg}`);
    console.log(`   Actual: ${actualRatio.toFixed(2)}:1`);
    
    if (combo.claimed) {
        const claimedValue = parseFloat(combo.claimed);
        const difference = Math.abs(actualRatio - claimedValue);
        const accurate = difference < 0.1;
        
        console.log(`   Claimed: ${combo.claimed} ${accurate ? '✅' : '❌'}`);
    }
    
    console.log(`   WCAG Level: ${level}\n`);
    
    if (!passesAA) {
        allPassed = false;
    }
    
    results.push({
        name: combo.name,
        text: combo.text,
        bg: combo.bg,
        ratio: actualRatio,
        passesAA,
        passesAAA,
        level
    });
});

// Summary
console.log('📊 SUMMARY');
console.log('==========');

const totalTests = results.length;
const passedAA = results.filter(r => r.passesAA).length;
const passedAAA = results.filter(r => r.passesAAA).length;
const failed = results.filter(r => !r.passesAA).length;

console.log(`Total combinations tested: ${totalTests}`);
console.log(`✅ WCAG AA compliant: ${passedAA}/${totalTests} (${(passedAA/totalTests*100).toFixed(1)}%)`);
console.log(`🏆 WCAG AAA compliant: ${passedAAA}/${totalTests} (${(passedAAA/totalTests*100).toFixed(1)}%)`);
console.log(`❌ Failed: ${failed}/${totalTests} (${(failed/totalTests*100).toFixed(1)}%)`);

if (allPassed) {
    console.log('\n🎉 All color combinations meet WCAG AA standards!');
} else {
    console.log('\n⚠️ Some color combinations need improvement.');
    
    const failedCombos = results.filter(r => !r.passesAA);
    console.log('\nFailed combinations:');
    failedCombos.forEach(combo => {
        console.log(`- ${combo.name}: ${combo.ratio.toFixed(2)}:1 (needs 4.5:1)`);
    });
}

console.log('\n💡 RECOMMENDATIONS');
console.log('==================');
console.log('1. All primary text colors exceed WCAG AA requirements');
console.log('2. Accent colors are carefully chosen for accessibility');
console.log('3. Button combinations should be tested in context');
console.log('4. Consider testing with actual background images/gradients');
console.log('5. Test with users who have visual impairments');

// Export results for further analysis
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { results, allPassed };
}