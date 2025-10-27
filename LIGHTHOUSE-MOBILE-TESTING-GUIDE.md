# Lighthouse Mobile Performance Testing Guide

## Overview
This guide provides instructions for running Lighthouse mobile performance tests on the key pages of the Modern Age Coders website to verify Core Web Vitals compliance.

## Target Metrics (Requirements 10.1, 10.2, 10.3)
- **Performance Score**: > 90
- **Largest Contentful Paint (LCP)**: < 2.5 seconds
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1

## Test Pages
1. **Homepage**: http://localhost:8080/
2. **About Page**: http://localhost:8080/about
3. **Courses Listing**: http://localhost:8080/courses
4. **Course Detail**: http://localhost:8080/courses/python-programming-masterclass-zero-to-advanced

## Method 1: Chrome DevTools (Recommended)

### Prerequisites
1. Ensure development server is running: `npm run dev`
2. Open Google Chrome
3. Navigate to the page you want to test

### Steps
1. **Open DevTools**: Press F12 or right-click → Inspect
2. **Open Lighthouse Tab**: Click on "Lighthouse" tab in DevTools
3. **Configure Settings**:
   - ✅ Performance
   - ✅ Mobile device
   - ✅ Simulated throttling
4. **Run Analysis**: Click "Analyze page load"
5. **Review Results**: Check the metrics against targets

### What to Check
- **Performance Score**: Should be > 90
- **Core Web Vitals**:
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms  
  - CLS (Cumulative Layout Shift): < 0.1

## Method 2: Online Lighthouse Tools

### PageSpeed Insights
1. Go to https://pagespeed.web.dev/
2. Enter the page URL (must be publicly accessible)
3. Click "Analyze"
4. Review mobile performance results

### Web.dev Measure
1. Go to https://web.dev/measure/
2. Enter the page URL
3. Review the performance audit

## Method 3: Command Line (If Available)

If you can install Lighthouse globally:

```bash
# Install Lighthouse globally
npm install -g lighthouse

# Test homepage
lighthouse http://localhost:8080/ --form-factor=mobile --output=html --output-path=./lighthouse-reports/homepage.html

# Test about page
lighthouse http://localhost:8080/about --form-factor=mobile --output=html --output-path=./lighthouse-reports/about.html

# Test courses page
lighthouse http://localhost:8080/courses --form-factor=mobile --output=html --output-path=./lighthouse-reports/courses.html

# Test course detail page
lighthouse http://localhost:8080/courses/python-programming-masterclass-zero-to-advanced --form-factor=mobile --output=html --output-path=./lighthouse-reports/course-detail.html
```

## Basic Performance Test (Alternative)

If Lighthouse is not available, run our basic performance test:

```bash
node scripts/simple-performance-test.js
```

This will check:
- Response times
- Content sizes
- Basic SEO elements
- Page structure

## Expected Results

### Homepage
- **Performance**: > 90
- **LCP**: < 2.5s (hero image should load quickly)
- **FID**: < 100ms (minimal JavaScript blocking)
- **CLS**: < 0.1 (stable layout)

### About Page
- **Performance**: > 90
- **LCP**: < 2.5s (text content loads fast)
- **FID**: < 100ms
- **CLS**: < 0.1

### Courses Listing
- **Performance**: > 90
- **LCP**: < 2.5s (course grid loads efficiently)
- **FID**: < 100ms
- **CLS**: < 0.1 (stable grid layout)

### Course Detail Page
- **Performance**: > 90
- **LCP**: < 2.5s (course content loads quickly)
- **FID**: < 100ms
- **CLS**: < 0.1

## Common Performance Issues to Look For

### LCP Issues
- Large hero images not optimized
- Render-blocking CSS/JS
- Slow server response times
- Missing resource hints

### FID Issues
- Heavy JavaScript execution
- Long tasks blocking main thread
- Unoptimized event handlers

### CLS Issues
- Images without dimensions
- Fonts causing layout shifts
- Dynamic content insertion
- Missing CSS for above-fold content

## Optimization Recommendations

### If Performance < 90
1. **Optimize Images**: Compress and use appropriate formats
2. **Minimize CSS/JS**: Remove unused code
3. **Enable Compression**: Use gzip/brotli
4. **Optimize Fonts**: Use font-display: swap
5. **Reduce HTTP Requests**: Combine resources

### If LCP > 2.5s
1. **Optimize Critical Resources**: Inline critical CSS
2. **Preload Important Resources**: Use `<link rel="preload">`
3. **Optimize Images**: Use WebP format, proper sizing
4. **Improve Server Response**: Optimize backend performance

### If FID > 100ms
1. **Reduce JavaScript**: Split code, lazy load non-critical JS
2. **Optimize Third-party Scripts**: Defer or async load
3. **Use Web Workers**: Move heavy computations off main thread

### If CLS > 0.1
1. **Set Image Dimensions**: Always specify width/height
2. **Reserve Space**: Use CSS to reserve space for dynamic content
3. **Optimize Fonts**: Use font-display: swap, preload fonts
4. **Avoid Layout Shifts**: Don't insert content above existing content

## Reporting Results

Document your findings in this format:

```
## Lighthouse Mobile Performance Test Results

### Homepage (/)
- Performance Score: XX/100
- LCP: XXXXms
- FID: XXms
- CLS: X.XXX
- Status: ✅ Pass / ❌ Fail

### About Page (/about)
- Performance Score: XX/100
- LCP: XXXXms
- FID: XXms
- CLS: X.XXX
- Status: ✅ Pass / ❌ Fail

### Courses Listing (/courses)
- Performance Score: XX/100
- LCP: XXXXms
- FID: XXms
- CLS: X.XXX
- Status: ✅ Pass / ❌ Fail

### Course Detail (/courses/python-programming-masterclass-zero-to-advanced)
- Performance Score: XX/100
- LCP: XXXXms
- FID: XXms
- CLS: X.XXX
- Status: ✅ Pass / ❌ Fail

## Summary
- Pages Meeting Targets: X/4
- Overall Status: ✅ Pass / ❌ Needs Improvement
```

## Next Steps

If any pages fail to meet the performance targets:
1. Identify specific issues from Lighthouse recommendations
2. Implement optimizations
3. Re-test to verify improvements
4. Document changes made

## Troubleshooting

### Development Server Not Running
```bash
npm run dev
```

### Pages Not Loading
- Check that all generated content exists
- Verify URL paths match the dev server configuration
- Check for JavaScript errors in browser console

### Lighthouse Errors
- Ensure page is fully loaded before running test
- Check for network connectivity
- Try testing with different Chrome flags if needed