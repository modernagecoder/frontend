# Open Graph Images Guide

## Required Images for SEO

This document outlines the Open Graph (OG) images needed for optimal social media sharing across the Modern Age Coders website.

## Image Specifications

### General Requirements
- **Format**: JPG or PNG
- **Quality**: High resolution, optimized for web
- **Branding**: Include Modern Age Coders logo and brand colors

### Open Graph Images
- **Dimensions**: 1200 x 630 pixels
- **Aspect Ratio**: 1.91:1
- **File Size**: < 1MB (optimized)
- **Usage**: Facebook, LinkedIn, other social platforms

### Twitter Card Images
- **Dimensions**: 1200 x 600 pixels
- **Aspect Ratio**: 2:1
- **File Size**: < 1MB (optimized)
- **Usage**: Twitter sharing

## Required Images List

### Homepage
- **File**: `images/og-default.jpg`
- **Content**: Modern Age Coders logo, tagline "Learn Coding & Math for All Ages"
- **Colors**: Purple gradient (#8A2BE2) with white text

### Course Listing Page
- **File**: `images/og-courses.jpg`
- **Content**: "30+ Courses" headline, icons representing different technologies
- **Colors**: Brand colors with tech icons

### About Page
- **File**: `images/og-about.jpg`
- **Content**: "About Modern Age Coders", key stats (10,000+ students, 50+ instructors)
- **Colors**: Brand colors with team/education imagery

### Course-Specific Images
Location: `images/courses/`

1. **full-stack-web-development.jpg** - Full Stack Development course
2. **python-programming.jpg** - Python Programming course
3. **ai-ml.jpg** - AI & Machine Learning course
4. **app-development.jpg** - App Development course
5. **data-science.jpg** - Data Science course
6. **java-programming.jpg** - Java Programming course
7. **cpp-programming.jpg** - C++ Programming course
8. **game-development.jpg** - Game Development course
9. **mysql-database.jpg** - MySQL Database course
10. **react-js.jpg** - React.js course
11. **ai-tools.jpg** - AI Tools course
12. **algorithmic-trading.jpg** - Algorithmic Trading course
13. **default.jpg** - Default course image (fallback)

### Blog Post Images
Location: `images/blog/`

1. **default.jpg** - Default blog post image (fallback)
2. **python-for-beginners.jpg** - Python tutorial post
3. **javascript-basics.jpg** - JavaScript basics post
4. **coding-for-kids.jpg** - Coding for kids post

## Design Guidelines

### Typography
- **Headline Font**: Bold, sans-serif (Inter or similar)
- **Headline Size**: 72-96px
- **Body Text**: 36-48px
- **Ensure readability** at thumbnail sizes

### Layout
- **Safe Zone**: Keep important content 100px from edges
- **Logo Placement**: Top-left or bottom-right corner
- **Text Alignment**: Left-aligned or centered based on design

### Color Palette
- **Primary Purple**: #8A2BE2
- **Secondary Teal**: #4ECDC4
- **Accent Gold**: #FFD700
- **Background**: White or light gradient
- **Text**: Dark gray (#333) or white (on dark backgrounds)

### Content Elements
- Course name/title (prominent)
- Modern Age Coders branding
- Relevant icons or imagery
- Optional: Key benefit or tagline

## Image Optimization

Before uploading, optimize all images:

1. **Compress**: Use tools like TinyPNG or ImageOptim
2. **Format**: Save as JPG (photos) or PNG (graphics with transparency)
3. **Quality**: 80-85% quality for JPG
4. **File Size**: Target < 200KB per image

## Testing

After creating images, test them using:

1. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

## Alt Text Guidelines

All images should have descriptive alt text:

### Homepage
```html
<meta property="og:image" content="https://learn.modernagecoders.com/images/og-default.jpg">
<!-- Alt text in schema: "Modern Age Coders - Learn Coding and Math for All Ages" -->
```

### Course Pages
```html
<meta property="og:image" content="https://learn.modernagecoders.com/images/courses/python-programming.jpg">
<!-- Alt text: "Python Programming Masterclass - Learn Python from Zero to Advanced" -->
```

### Blog Posts
```html
<meta property="og:image" content="https://learn.modernagecoders.com/images/blog/python-for-beginners.jpg">
<!-- Alt text: "Python for Beginners Tutorial - Code examples and syntax guide" -->
```

## Fallback Strategy

If a specific image is not available:
1. Use category default (e.g., `images/courses/default.jpg`)
2. Use site-wide default (`images/og-default.jpg`)
3. Ensure fallback images are always present

## Maintenance

- **Review quarterly**: Update images to reflect new branding or content
- **Monitor performance**: Check social media engagement metrics
- **A/B test**: Try different designs to optimize click-through rates
- **Keep updated**: Refresh images when course content changes significantly
