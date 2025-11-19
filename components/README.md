# Components Directory

This directory contains reusable HTML components for the Modern Age Coders website.

## 📁 Files

### `nav.html`
The navigation bar component used across all pages.

**Contains:**
- Logo and branding
- Main navigation menu
- Courses dropdown menu
- Login button
- "Start Learning" CTA button
- Mobile menu button

**To Update:**
1. Edit this file
2. Save
3. All pages automatically update ✅

### `footer.html`
The footer component used across all pages.

**Contains:**
- Logo and tagline
- Social media links (Instagram, YouTube, LinkedIn, GitHub)
- Quick links (About, Courses, Student Labs, etc.)
- Programs links (Kids, Teens, College, Girls)
- Contact information
- Legal links (Privacy Policy, Terms of Service)
- Copyright notice

**To Update:**
1. Edit this file
2. Save
3. All pages automatically update ✅

## 🚀 How Components Are Used

These components are loaded dynamically by `js/components-loader.js` into pages that have:
- `<div id="nav-placeholder"></div>` for navigation
- `<div id="footer-placeholder"></div>` for footer

## ⚠️ Important Notes

### DO:
✅ Edit these files to update navigation or footer
✅ Test changes on one page before deploying
✅ Keep the same HTML structure and class names
✅ Maintain accessibility features (ARIA labels, etc.)

### DON'T:
❌ Delete these files (will break all pages)
❌ Change file names (loader expects these exact names)
❌ Remove essential classes or IDs
❌ Break the HTML structure

## 🔧 Maintenance

### Adding a New Navigation Link
1. Open `nav.html`
2. Find the `<ul class="nav-menu">` section
3. Add your new `<li>` item
4. Save and test

### Adding a New Footer Link
1. Open `footer.html`
2. Find the appropriate `<div class="footer-column">`
3. Add your new link
4. Save and test

### Updating Social Media Links
1. Open `footer.html`
2. Find `<div class="social-links">`
3. Update or add social media links
4. Save and test

## 📊 Component Structure

### Navigation Structure
```
<header>
  <nav>
    <div class="navbar">
      <div class="nav-container">
        <a class="logo">...</a>
        <ul class="nav-menu">
          <li class="nav-item">...</li>
          ...
        </ul>
        <button class="mobile-menu-btn">...</button>
      </div>
    </div>
  </nav>
</header>
```

### Footer Structure
```
<footer class="site-footer">
  <div class="footer-container">
    <div class="footer-grid">
      <div class="footer-column">...</div>
      <div class="footer-column">...</div>
      <div class="footer-column">...</div>
      <div class="footer-column">...</div>
    </div>
    <div class="footer-bottom">...</div>
  </div>
</footer>
```

## 🎨 Styling

Components use existing CSS from:
- `/css/style.css`
- `/css/responsive.css`
- `/css/mobile-nav-fix.css`
- Other CSS files loaded in page `<head>`

No additional CSS needed for components to work.

## 🧪 Testing

After making changes:
1. Open any page in browser
2. Verify component displays correctly
3. Test all links
4. Test mobile responsiveness
5. Check browser console for errors
6. Test on multiple browsers

## 📚 Documentation

For complete documentation, see:
- `COMPONENT-SYSTEM-GUIDE.md` - Full implementation guide
- `COMPONENT-QUICK-START.md` - Quick reference
- `VISUAL-COMPONENT-GUIDE.md` - Visual examples
- `IMPLEMENTATION-CHECKLIST.md` - Implementation steps

## 🆘 Support

If components aren't loading:
1. Check browser console for errors
2. Verify you're using a local server
3. Check component file paths
4. Ensure `components-loader.js` is loaded
5. Review troubleshooting guide in main documentation

---

**Remember:** These two files control the navigation and footer for your ENTIRE website. Handle with care! 🎯
