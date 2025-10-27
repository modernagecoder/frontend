# Viewport Meta Tag Validation

This document explains how to validate that all HTML pages have proper viewport meta tags.

## Overview

All HTML pages must include a viewport meta tag with the correct content to ensure proper mobile responsiveness:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Validation Script

The `scripts/viewport-validator.js` script automatically checks all HTML pages in the project for proper viewport meta tags.

### Usage

Run the validation script directly:

```bash
node scripts/viewport-validator.js
```

Or use the npm script:

```bash
npm run validate:viewport
```

### What it checks

The script validates:

1. **Presence**: Every HTML page has a viewport meta tag
2. **Content**: The content attribute matches exactly: `width=device-width, initial-scale=1.0`
3. **Coverage**: All pages in these directories:
   - `src/pages/` - Main website pages
   - `content/blog/generated/` - Generated blog pages
   - `content/courses/generated/` - Generated course pages
   - `content/blog/template/` - Blog templates
   - `content/courses/template/` - Course templates

### Excluded files

The following files are excluded from validation as they are test/example files:
- `test-touch-targets.html`
- `form-example.html`
- `test-backend.html`
- `check-status.html`

### Output

The script provides:
- ✅ Success indicator for each valid page
- ❌ Error details for any invalid pages
- 📊 Summary with total counts
- 🎉 Success message when all pages are valid

### Example output

```
🔍 Validating viewport meta tags across all HTML pages...

📄 Found 43 HTML files to validate

✅ src\pages\404.html
✅ src\pages\about.html
✅ src\pages\contact.html
...

📊 Validation Summary:
   Total files: 43
   Valid: 43
   Invalid: 0

🎉 All HTML pages have proper viewport meta tags!
```

## Requirements Compliance

This validation ensures compliance with **Requirement 4.1**:

> WHEN a user views the Website on any mobile device, THE Website SHALL include a proper viewport meta tag with width=device-width and initial-scale=1.0

## Current Status

✅ **All 43 HTML pages** in the project have proper viewport meta tags as of the last validation.

## Integration

The viewport validation is integrated into the project's npm scripts and can be run as part of automated testing or CI/CD pipelines.