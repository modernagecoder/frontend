# Component System - Quick Start

## 🎯 What You Need to Know

### Files Created
```
components/
├── nav.html              ← Navigation bar
└── footer.html           ← Footer

js/
└── components-loader.js  ← Auto-loader script
```

## 🚀 Use on Any Page (3 Steps)

### 1. Replace Navigation
**Remove this:**
```html
<header>
    <nav>
        <!-- All your navigation code -->
    </nav>
</header>
```

**Add this:**
```html
<div id="nav-placeholder"></div>
```

### 2. Replace Footer
**Remove this:**
```html
<footer class="site-footer">
    <!-- All your footer code -->
</footer>
```

**Add this:**
```html
<div id="footer-placeholder"></div>
```

### 3. Add Loader Script
**Before closing `</body>` tag, add:**
```html
<script src="/js/components-loader.js"></script>
```

## ✅ Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Page</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <!-- Navigation -->
    <div id="nav-placeholder"></div>

    <!-- Your Content -->
    <main id="main">
        <h1>Your Page Content</h1>
    </main>

    <!-- Footer -->
    <div id="footer-placeholder"></div>

    <!-- Component Loader -->
    <script src="/js/components-loader.js"></script>
</body>
</html>
```

## 🔧 Update Navigation or Footer

### To change navigation:
Edit `components/nav.html` → Save → Done! ✅

### To change footer:
Edit `components/footer.html` → Save → Done! ✅

All pages update automatically!

## 🤖 Auto-Migration Tool

Migrate existing pages automatically:

```bash
node scripts/migrate-to-components.js src/pages/your-page.html
```

This will:
- ✅ Replace navigation with placeholder
- ✅ Replace footer with placeholder
- ✅ Add component loader script
- ✅ Create backup file

## 📚 Full Documentation

See `COMPONENT-SYSTEM-GUIDE.md` for complete details.

## 🎨 Example Page

See `example-page-with-components.html` for a working demo.

---

**That's it!** Your navigation and footer are now reusable components. 🎉
