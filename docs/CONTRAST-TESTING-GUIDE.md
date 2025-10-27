# Color Contrast Testing Guide

## Quick Start

### Automated Testing
Run the automated contrast checker:
```bash
node scripts/contrast-checker.js
```

This will validate all text colors against the background and report any issues.

## Manual Testing Tools

### 1. WebAIM Contrast Checker (Recommended)
**URL**: https://webaim.org/resources/contrastchecker/

**How to use**:
1. Enter foreground color (text color)
2. Enter background color: `#000002`
3. Check that ratio is ≥ 4.5:1 for normal text
4. Check that ratio is ≥ 3:1 for large text (18pt+ or 14pt+ bold)

### 2. Chrome DevTools
**Steps**:
1. Open Chrome DevTools (F12)
2. Go to Elements tab
3. Select an element with text
4. In the Styles panel, click on the color swatch
5. Chrome will show contrast ratio and WCAG compliance

### 3. Firefox Accessibility Inspector
**Steps**:
1. Open Firefox DevTools (F12)
2. Go to Accessibility tab
3. Enable "Check for issues" → "Contrast"
4. Firefox will highlight any contrast issues

### 4. Colour Contrast Analyser (CCA)
**Download**: https://www.tpgi.com/color-contrast-checker/

**Features**:
- Desktop application for Windows/Mac
- Eyedropper tool to pick colors from screen
- Real-time contrast ratio calculation
- WCAG compliance indicators

## Current Color System

### Text Colors (All PASS ✓)

| Color | Hex | Contrast | Usage |
|-------|-----|----------|-------|
| Primary Text | `#F8FAFC` | 20.05:1 | Headings, important text |
| Secondary Text | `#CBD5E1` | 14.13:1 | Body text, paragraphs |
| Muted Text | `#94A3B8` | 8.18:1 | Captions, metadata |

### Accent Colors (All PASS ✓)

| Color | Hex | Contrast | Usage |
|-------|-----|----------|-------|
| Pink (Empowerment) | `#EC4899` | 5.95:1 | Accent text |
| Purple (Confidence) | `#A855F7` | 5.30:1 | Accent text |
| Orange (Creativity) | `#F59E0B` | 9.77:1 | Accent text |
| Green (Teamwork) | `#10B981` | 8.27:1 | Accent text |

## Testing Checklist

When adding new colors or modifying existing ones:

- [ ] Test against black background (`#000002`)
- [ ] Verify contrast ratio ≥ 4.5:1 for normal text
- [ ] Verify contrast ratio ≥ 3:1 for large text (18pt+)
- [ ] Run automated contrast checker script
- [ ] Test with Chrome DevTools color picker
- [ ] Verify in Firefox Accessibility Inspector
- [ ] Update documentation if adding new colors
- [ ] Add CSS comments with contrast ratios

## Common Issues and Solutions

### Issue: Text appears too light
**Solution**: Use `--text-primary` (#F8FAFC) which has 20:1 contrast

### Issue: Accent color fails contrast test
**Solution**: Ensure hex values match approved colors:
- Pink: `#EC4899` (not lighter shades)
- Purple: `#A855F7` (not lighter shades)
- Orange: `#F59E0B`
- Green: `#10B981`

### Issue: Gradient text is hard to read
**Solution**: Ensure gradient endpoints both meet 4.5:1 contrast ratio

## WCAG 2.1 Level AA Requirements

### Normal Text
- Font size < 18pt (or < 14pt bold)
- Minimum contrast: **4.5:1**

### Large Text
- Font size ≥ 18pt (or ≥ 14pt bold)
- Minimum contrast: **3:1**

### Incidental Text
Text that is part of inactive UI components, pure decoration, or not visible to users is exempt from contrast requirements.

## Browser Testing

Test contrast in multiple browsers:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browsers (Chrome Mobile, Safari iOS)

## Accessibility Testing with Screen Readers

While contrast is visual, test with screen readers to ensure complete accessibility:
- **Windows**: NVDA (free) or JAWS
- **Mac**: VoiceOver (built-in)
- **Mobile**: TalkBack (Android), VoiceOver (iOS)

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN: Color Contrast](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
- [A11y Project: Color Contrast](https://www.a11yproject.com/posts/what-is-color-contrast/)

## Maintenance

- Run contrast checker before each release
- Review contrast when updating brand colors
- Test new components with automated tools
- Keep this documentation updated with any color changes

## Contact

For questions about color contrast or accessibility:
- Review: `docs/ACCESSIBILITY-CONTRAST.md`
- Run: `node scripts/contrast-checker.js`
- Refer to WCAG 2.1 guidelines
