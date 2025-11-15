# 📁 File Structure Quick Reference

## 🎯 Where to Find Everything

### **Main Website Pages** ⭐ EDIT THESE DIRECTLY
```
src/pages/
├── index.html              ← Home page
├── about.html              ← About page
├── course.html             ← Course listing page
├── pricing.html            ← Pricing page
├── contact.html            ← Contact page
├── faq.html                ← FAQ page
├── terms.html              ← Terms & Conditions
├── privacy.html            ← Privacy Policy
├── login.html              ← Login page
├── projects.html           ← Projects page
├── student-labs.html       ← Student Labs
├── student-projects-working.html
└── 404.html                ← 404 error page
```

**To edit navigation:** Open any of these files and find the `<nav>` section

---

### **Blog System** ⭐ EDIT TEMPLATES, THEN REGENERATE
```
content/blog/
│
├── template/               ← EDIT THESE
│   ├── blog-template.html          ← Template for individual blog posts
│   └── blog-listing-template.html  ← Template for blog listing page
│
├── data/                   ← EDIT THESE (blog content)
│   ├── python-for-beginners.json
│   ├── javascript-basics.json
│   └── coding-for-kids-guide.json
│
└── generated/              ← DON'T EDIT (auto-generated)
    ├── index.html                  ← Generated from blog-listing-template.html
    ├── python-for-beginners/
    │   └── index.html              ← Generated from blog-template.html
    ├── javascript-basics/
    │   └── index.html
    └── coding-for-kids-guide/
        └── index.html
```

**After editing templates:**
```bash
node scripts/generate-blogs.js
```

---

### **Course System** ⭐ EDIT TEMPLATE, THEN REGENERATE
```
content/courses/
│
├── template/               ← EDIT THIS
│   └── course-template.html        ← Template for all courses
│
├── data/                   ← EDIT THESE (course content)
│   ├── scratch-kids.json
│   ├── python-college.json
│   ├── web-dev-teens.json
│   └── ... (54 course files)
│
└── generated/              ← DON'T EDIT (auto-generated)
    ├── scratch-programming-complete-course/
    │   └── index.html              ← Generated from course-template.html
    ├── python-programming-masterclass-zero-to-advanced/
    │   └── index.html
    └── ... (54 course folders)
```

**After editing template:**
```bash
node scripts/generate-courses.js
```

---

### **Styles (CSS)** ⭐ EDIT THESE DIRECTLY
```
src/css/
├── style.css                    ← Main styles (navigation, layout, colors)
├── responsive.css               ← Mobile/tablet responsive styles
├── mobile-nav-fix.css          ← Mobile navigation fixes
├── keyboard-navigation.css      ← Keyboard accessibility
├── course-page-mobile-fix.css  ← Course page mobile fixes
└── corporate-training.css       ← Corporate training styles
```

**Changes apply immediately** (just refresh browser)

---

### **JavaScript** ⭐ EDIT THESE DIRECTLY
```
src/js/
├── navigation.js           ← Main navigation functionality
├── mobile-navigation.js    ← Mobile menu toggle
├── blog-navigation.js      ← Blog page navigation
└── course-navigation.js    ← Course page navigation
```

---

### **Images** ⭐ ADD YOUR IMAGES HERE
```
public/images/
├── logo.png                ← Your logo
├── hero-bg.jpg             ← Hero background
└── ... (other images)

content/courses/images/     ← Course images
content/blog/images/        ← Blog images
```

---

### **Configuration Files** ⚙️ ADVANCED
```
Root directory/
├── netlify.toml            ← Production URL rules
├── _redirects              ← Backup production rules
├── package.json            ← Project dependencies
└── scripts/
    ├── dev-server.js       ← Local development server
    ├── generate-blogs.js   ← Blog generation script
    └── generate-courses.js ← Course generation script
```

---

## 🎯 Common Tasks

### **Task: Edit Navigation Bar**

**Files to edit:**
1. All pages in `src/pages/` (10+ files)
2. `content/blog/template/blog-template.html`
3. `content/blog/template/blog-listing-template.html`
4. `content/courses/template/course-template.html`

**After editing blog/course templates:**
```bash
node scripts/generate-blogs.js
node scripts/generate-courses.js
```

---

### **Task: Change Colors/Styling**

**File to edit:**
- `src/css/style.css`

**Look for:**
```css
/* Navigation colors */
.navbar { background: rgba(16, 16, 28, 0.95); }
.nav-link { color: #E2E8F0; }
.nav-link:hover { color: #a855f7; }

/* Button colors */
.cta-button { background: linear-gradient(135deg, #a855f7, #4ecdc4); }

/* Text colors */
body { color: #E2E8F0; }
h1, h2, h3 { color: #F8FAFC; }
```

---

### **Task: Add New Blog Post**

**Step 1:** Create JSON file
```bash
# Create: content/blog/data/my-new-blog.json
```

**Step 2:** Generate
```bash
node scripts/generate-blogs.js
```

**Step 3:** Access
```
http://localhost:3000/blog/my-new-blog
```

---

### **Task: Add New Course**

**Step 1:** Create JSON file
```bash
# Create: content/courses/data/my-new-course.json
```

**Step 2:** Generate
```bash
node scripts/generate-courses.js
```

**Step 3:** Access
```
http://localhost:3000/courses/my-new-course-slug
```

---

## 📋 Quick Navigation Edit Example

### **Where to find navigation in each file:**

**Main pages** (`src/pages/*.html`):
```html
<!-- Around line 50-100 -->
<nav>
    <div class="navbar">
        <div class="nav-container">
            <a href="/" class="logo">...</a>
            <ul class="nav-menu" id="navMenu">
                <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="/courses" class="nav-link">Courses</a></li>
                <!-- ADD YOUR LINKS HERE -->
            </ul>
        </div>
    </div>
</nav>
```

**Blog template** (`content/blog/template/blog-template.html`):
```html
<!-- Around line 45-85 -->
<nav>
    <div class="navbar">
        <div class="nav-container">
            <a href="/blog" class="back-button">...</a>
            <a href="/" class="logo">...</a>
            <ul class="nav-menu" id="navMenu">
                <!-- SAME NAVIGATION AS MAIN PAGES -->
            </ul>
        </div>
    </div>
</nav>
```

---

## ⚠️ Important Rules

### **✅ DO:**
- Edit files in `src/pages/`
- Edit templates in `content/blog/template/`
- Edit template in `content/courses/template/`
- Edit CSS in `src/css/`
- Regenerate after editing templates

### **❌ DON'T:**
- Edit files in `content/blog/generated/`
- Edit files in `content/courses/generated/`
- These are auto-generated and will be overwritten!

---

## 🔍 How to Find Navigation

### **Method 1: Search in File**
```
Ctrl + F (or Cmd + F)
Search for: <nav>
```

### **Method 2: Look for Line Numbers**
- Main pages: Lines 50-100
- Blog templates: Lines 45-85
- Course template: Lines 45-85

### **Method 3: Look for Class Names**
```html
<nav>
<div class="navbar">
<ul class="nav-menu">
<li class="nav-item">
<a class="nav-link">
```

---

## 🎨 Visual Structure

```
┌─────────────────────────────────────────────────────┐
│  NAVIGATION BAR (Edit in HTML files)               │
│  Logo | Home | Courses | About | Blog | Contact    │
└─────────────────────────────────────────────────────┘
         ↑
         │
    Edit in:
    • src/pages/*.html (main pages)
    • content/blog/template/*.html (blog templates)
    • content/courses/template/*.html (course template)
    
    Style in:
    • src/css/style.css
```

---

## 📞 Quick Commands

```bash
# Edit main page navigation
code src/pages/index.html

# Edit blog navigation
code content/blog/template/blog-template.html
code content/blog/template/blog-listing-template.html
node scripts/generate-blogs.js

# Edit course navigation
code content/courses/template/course-template.html
node scripts/generate-courses.js

# Edit navigation styles
code src/css/style.css

# Start dev server
node scripts/dev-server.js
```

---

## ✨ Summary

| What | Where | After Editing |
|------|-------|---------------|
| **Main pages** | `src/pages/*.html` | Refresh browser |
| **Blog pages** | `content/blog/template/*.html` | Run `node scripts/generate-blogs.js` |
| **Course pages** | `content/courses/template/*.html` | Run `node scripts/generate-courses.js` |
| **Styles** | `src/css/*.css` | Refresh browser |
| **Navigation** | All HTML files | See above |

---

**Need help finding a specific file? Just ask!** 🚀
