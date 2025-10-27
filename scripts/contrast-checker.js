/**
 * Color Contrast Checker Utility
 * Validates WCAG 2.1 AA compliance (4.5:1 for normal text, 3:1 for large text)
 */

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Calculate relative luminance
 */
function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors
 */
function getContrastRatio(color1, color2) {
  const lum1 = getLuminance(color1.r, color1.g, color1.b);
  const lum2 = getLuminance(color2.r, color2.g, color2.b);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check if contrast ratio meets WCAG AA standards
 */
function meetsWCAG_AA(ratio, isLargeText = false) {
  const threshold = isLargeText ? 3.0 : 4.5;
  return ratio >= threshold;
}

/**
 * Main contrast validation
 */
function validateContrast() {
  const background = hexToRgb('#000002');
  
  const colors = {
    'text-primary': hexToRgb('#F8FAFC'),
    'text-secondary': hexToRgb('#CBD5E1'),
    'text-muted': hexToRgb('#94A3B8'),
    'girls-empowerment': hexToRgb('#EC4899'),
    'girls-confidence': hexToRgb('#A855F7'),
    'girls-creativity': hexToRgb('#F59E0B'),
    'girls-teamwork': hexToRgb('#10B981'),
  };
  
  console.log('='.repeat(70));
  console.log('COLOR CONTRAST VALIDATION REPORT');
  console.log('Background: #000002 (Black)');
  console.log('WCAG AA Standard: 4.5:1 for normal text, 3:1 for large text');
  console.log('='.repeat(70));
  console.log('');
  
  let allPass = true;
  
  for (const [name, color] of Object.entries(colors)) {
    const ratio = getContrastRatio(background, color);
    const passesNormal = meetsWCAG_AA(ratio, false);
    const passesLarge = meetsWCAG_AA(ratio, true);
    
    const status = passesNormal ? '✓ PASS' : '✗ FAIL';
    const statusColor = passesNormal ? '\x1b[32m' : '\x1b[31m';
    const resetColor = '\x1b[0m';
    
    console.log(`${statusColor}${status}${resetColor} ${name}`);
    console.log(`  Contrast Ratio: ${ratio.toFixed(2)}:1`);
    console.log(`  Normal Text (≥4.5:1): ${passesNormal ? '✓' : '✗'}`);
    console.log(`  Large Text (≥3:1): ${passesLarge ? '✓' : '✗'}`);
    console.log('');
    
    if (!passesNormal) {
      allPass = false;
    }
  }
  
  console.log('='.repeat(70));
  if (allPass) {
    console.log('\x1b[32m✓ ALL COLORS PASS WCAG AA STANDARDS\x1b[0m');
  } else {
    console.log('\x1b[31m✗ SOME COLORS FAIL WCAG AA STANDARDS\x1b[0m');
    console.log('Consider adjusting colors that fail to meet the 4.5:1 ratio.');
  }
  console.log('='.repeat(70));
  
  return allPass;
}

// Run validation if executed directly
if (require.main === module) {
  validateContrast();
}

module.exports = { validateContrast, getContrastRatio, hexToRgb, getLuminance };
