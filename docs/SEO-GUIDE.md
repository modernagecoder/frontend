# SEO Implementation Guide - Modern Age Coders

## Overview
This document provides guidelines for maintaining and extending SEO across the Modern Age Coders website.

## SEO Configuration

### Location
- **Config File**: `scripts/seo-config.js`
- **Utilities**: `scripts/seo-utils.js`

### Page-Specific SEO
All page configurations are centralized in `SEO_CONFIG.pages` object:

```javascript
pages: {
  home: { title, description, keywords, schema },
  about: { title, description, keywords, schema },
  // ... more pages
}
```

## Meta Tags Requirements

### Essential Meta Tags (Every Page Must Have)
1. **Title**: 30-60 characters
2. **Description**: 120-160 characters
3. **Keywords**: 5-10 relevant keywords
4. **Canonical URL**: Absolute URL to the page
5. **Viewport**: `width=device-width, initial-scale=1.0`
6. **Author**: Modern Age Coders

### Open Graph Tags
- `og:type`: website or article
- `og:url`: Canonical URL
- `og:title`: Same as page title
- `og:description`: Same as meta description
- `og:image`: 1200x630px image
- `og:site_name`: Modern Age Coders

### Twitter Card Tags
- `twitter:card`: summary_large_image
- `twitter:url`: Canonical URL
- `twitter:title`: Same as page title
- `twitter:description`: Same as meta description
- `twitter:image`: 1200x600px image

## Schema Markup

### Available Schema Types
1. **Organization** - Homepage
2. **WebSite** - Homepage with SearchAction
3. **EducationalOrganization** - Homepage
4. **AboutPage** - About page
5. **ContactPage** - Contact page
6. **Course** - Individual course pages
7. **BlogPosting** - Individual blog posts
8. **ItemList** - Course/blog listing pages
9. **BreadcrumbList** - Navigation breadcrumbs

### Adding Schema to a New Page

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Page Name",
  "description": "Page description",
  "url": "https://learn.modernagecoders.com/page-url"
}
</script>
```

## Mobile Responsiveness

### Responsive CSS
- **File**: `src/css/responsive.css`
- **Approach**: Mobile-first design
- **Breakpoints**:
  - 360px: Small mobile
  - 480px: Large mobile
  - 768px: Tablet portrait
  - 1024px: Tablet landscape
  - 1280px: Desktop
  - 1440px: Large desktop

### Touch Targets
- Minimum size: 44x44 pixels
- Minimum spacing: 8px between targets
- Applied to: buttons, links, form inputs

### Typography
- Body text: Minimum 14px on mobile, 16px on desktop
- Input text: Minimum 16px (prevents iOS zoom)
- Line height: 1.5-1.8 for readability
- Max line length: 65 characters

## Adding a New Page

### Step 1: Add Page Configuration
Edit `scripts/seo-config.js`:

```javascript
pages: {
  newpage: {
    title: 'Page Title - Modern Age Coders',
    description: 'Page description 120-160 characters',
    keywords: ['keyword1', 'keyword2', 'keyword3'],
    ogImage: '/images/og-newpage.jpg',
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList']
  }
}
```

### Step 2: Create HTML File
Create `src/pages/newpage.html` with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{TITLE}}</title>
    <meta name="description" content="{{DESCRIPTION}}">
    <meta name="keywords" content="{{KEYWORDS}}">
    <link rel="canonical" href="{{CANONICAL_URL}}">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico">
    
    <!-- OG Tags -->
    <!-- Twitter Tags -->
    <!-- Schema Markup -->
    
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/responsive.css">
</head>
<body>
    <!-- Navigation -->
    <!-- Content -->
    <script src="/js/mobile-navigation.js"></script>
</body>
</html>
```

### Step 3: Update Sitemap
Add to `public/sitemap.xml`:

```xml
<url>
  <loc>https://learn.modernagecoders.com/newpage</loc>
  <lastmod>2025-01-27</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

### Step 4: Update Navigation
Add link to navigation in all pages if needed.

## Testing Checklist

### SEO Testing
- [ ] Title length 30-60 characters
- [ ] Description length 120-160 characters
- [ ] All meta tags present
- [ ] Schema validates on Google Rich Results Test
- [ ] OG tags preview correctly on Facebook Debugger
- [ ] Canonical URL is correct

### Mobile Testing
- [ ] No horizontal scroll on any device
- [ ] Touch targets ≥ 44x44px
- [ ] Text readable without zooming
- [ ] Forms work on mobile
- [ ] Navigation menu works
- [ ] Images scale properly

### Performance Testing
- [ ] Lighthouse mobile score > 90
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1

## Common Issues & Solutions

### Issue: Title Too Long
**Solution**: Edit in `seo-config.js`, keep under 60 characters

### Issue: Missing Schema
**Solution**: Add schema type to page config and regenerate

### Issue: Horizontal Scroll on Mobile
**Solution**: Check for fixed widths, use `max-width: 100%`

### Issue: Touch Targets Too Small
**Solution**: Apply `min-height: 44px; min-width: 44px;`

## Tools & Resources

### SEO Tools
- Google Rich Results Test: https://search.google.com/test/rich-results
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- Schema.org Validator: https://validator.schema.org/

### Performance Tools
- Google PageSpeed Insights: https://pagespeed.web.dev/
- Lighthouse (Chrome DevTools)

### Accessibility Tools
- axe DevTools (Chrome Extension)
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Automated Contrast Checker: `node scripts/contrast-checker.js`

## Color Contrast & Accessibility

### WCAG AA Compliance
All text colors meet WCAG 2.1 Level AA standards (4.5:1 minimum contrast ratio).

### Testing Contrast
Run the automated contrast checker:
```bash
node scripts/contrast-checker.js
# or
npm run test:contrast
```

### Current Color System (All PASS ✓)
- **Primary Text** (#F8FAFC): 20.05:1 contrast ratio
- **Secondary Text** (#CBD5E1): 14.13:1 contrast ratio
- **Muted Text** (#94A3B8): 8.18:1 contrast ratio

For detailed contrast information, see:
- `docs/ACCESSIBILITY-CONTRAST.md` - Full contrast report
- `docs/CONTRAST-TESTING-GUIDE.md` - Testing procedures

## Contact
For SEO questions or issues, contact the development team.

Last Updated: October 27, 2025
