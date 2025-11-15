# 📝 Navigation & Layout Editing Guide

## 🎯 Where Are the Files?

### **Main Website Pages** (src/pages/)
```
src/pages/
├── index.html          ← Home page
├── about.html          ← About page
├── course.html         ← Course listing page
├── pricing.html        ← Pricing page
├── contact.html        ← Contact page
├── faq.html            ← FAQ page
├── terms.html          ← Terms & Conditions
├── privacy.html        ← Privacy Policy
├── login.html          ← Login page
└── 404.html            ← 404 error page
```

### **Blog Pages** (content/blog/)
```
content/blog/
├── template/
│   ├── blog-template.html          ← Individual blog post template
│   └── blog-listing-template.html  ← Blog listing page template
├── data/
│   ├── python-for-beginners.json   ← Blog data files
│   ├── javascript-basics.json
│   └── coding-for-kids-guide.json
└── generated/
    ├── index.html                  ← Generated blog listing (don't edit directly!)
    ├── python-for-beginners/
    │   └── index.html              ← Generated blog post (don't edit directly!)
    └── ...
```

### **Course Pages** (content/courses/)
```
content/courses/
├── template/
│   └── course-template.html        ← Individual course template
├── data/
│   ├── scratch-kids.json           ← Course data files
│   ├── python-college.json
│   └── ...
└── generated/
    ├── scratch-programming-complete-course/
    │   └── index.html              ← Generated course (don't edit directly!)
    └── ...
```

---

## 🎨 How to Edit Navigation

### **1. Main Website Navigation**

**File to Edit:** Any page in `src/pages/` (e.g., `src/pages/index.html`)

**Location in File:** Look for the `<nav>` section (around line 50-100)

**Example:**
```html
<nav>
    <div class="navbar">
        <div class="nav-container">
            <a href="/" class="logo">
                <img src="/images/logo.png" alt="Modern Age Coders Logo">
                <span class="logo-text">Modern Age Coders</span>
            </a>
            <ul class="nav-menu" id="navMenu">
                <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="/courses" class="nav-link">Courses</a></li>
                <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
                <li class="nav-item"><a href="/blog" class="nav-link">Blog</a></li>
                <li class="nav-item"><a href="/pricing" class="nav-link">Pricing</a></li>
                <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>
```

**To Add a New Link:**
```html
<li class="nav-item"><a href="/new-page" class="nav-link">New Page</a></li>
```

**Important:** You need to edit the navigation in **EACH** page file in `src/pages/` because they're separate HTML files.

---

### **2. Blog Navigation**

**Files to Edit:**
- `content/blog/template/blog-template.html` (for individual blog posts)
- `content/blog/template/blog-listing-template.html` (for blog listing page)

**Location:** Look for `<nav>` section (around line 45-85)

**Example from blog template:**
```html
<nav>
    <div class="navbar">
        <div class="nav-container">
            <a href="/blog" class="back-button" title="Back to Blog">
                <svg>...</svg>
            </a>
            <a href="/" class="logo">
                <img src="/images/logo.png" alt="Modern Age Coders Logo">
                <span class="logo-text">Modern Age Coders</span>
            </a>
            <ul class="nav-menu" id="navMenu">
                <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="/courses" class="nav-link">Courses</a></li>
                <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
                <li class="nav-item"><a href="/blog" class="nav-link active">Blog</a></li>
                <li class="nav-item"><a href="/pricing" class="nav-link">Pricing</a></li>
                <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>
```

**After editing blog templates, regenerate:**
```bash
node scripts/generate-blogs.js
```

---

### **3. Course Navigation**

**File to Edit:** `content/courses/template/course-template.html`

**Location:** Look for `<nav>` section (around line 45-85)

**After editing course template, regenerate:**
```bash
node scripts/generate-courses.js
```

---

## 🎨 How to Edit Layout/Styling

### **CSS Files** (src/css/)
```
src/css/
├── style.css                    ← Main styles
├── responsive.css               ← Responsive/mobile styles
├── mobile-nav-fix.css          ← Mobile navigation fixes
├── keyboard-navigation.css      ← Keyboard accessibility
├── course-page-mobile-fix.css  ← Course page mobile fixes
└── corporate-training.css       ← Corporate training styles
```

**To edit navigation styling:**
1. Open `src/css/style.css`
2. Look for `.navbar`, `.nav-menu`, `.nav-link` classes
3. Make your changes
4. Refresh browser to see changes

---

## 📋 Common Editing Tasks

### **Task 1: Add a New Navigation Link**

**Step 1:** Edit main pages
```bash
# Edit each file in src/pages/
# Add your new link to the <ul class="nav-menu">
```

**Step 2:** Edit blog templates
```bash
# Edit content/blog/template/blog-template.html
# Edit content/blog/template/blog-listing-template.html
# Add your new link
# Then regenerate: node scripts/generate-blogs.js
```

**Step 3:** Edit course template
```bash
# Edit content/courses/template/course-template.html
# Add your new link
# Then regenerate: node scripts/generate-courses.js
```

---

### **Task 2: Change Logo**

**Step 1:** Replace logo image
```bash
# Replace: public/images/logo.png
```

**Step 2:** Update logo in navigation (if needed)
```html
<a href="/" class="logo">
    <img src="/images/logo.png" alt="Your Company Name">
    <span class="logo-text">Your Company Name</span>
</a>
```

---

### **Task 3: Change Navigation Colors**

**File:** `src/css/style.css`

**Find these classes:**
```css
/* Navigation bar */
.navbar {
    background: rgba(16, 16, 28, 0.95);  /* Change background color */
    backdrop-filter: blur(20px);
}

/* Navigation links */
.nav-link {
    color: #E2E8F0;  /* Change text color */
}

.nav-link:hover {
    color: #a855f7;  /* Change hover color */
}

/* Active link */
.nav-link.active {
    color: #a855f7;  /* Change active link color */
}
```

---

### **Task 4: Add Dropdown Menu**

**Example:** Add a dropdown to "Courses"

```html
<li class="nav-item dropdown">
    <a href="/courses" class="nav-link">
        Courses
        <svg style="width: 14px; height: 14px; margin-left: 4px;">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
        </svg>
    </a>
    <div class="dropdown-content">
        <a href="/courses?tab=coding&subtab=kids" class="dropdown-item">For Kids</a>
        <a href="/courses?tab=coding&subtab=teens" class="dropdown-item">For Teens</a>
        <a href="/courses?tab=coding&subtab=college" class="dropdown-item">For College</a>
    </div>
</li>
```

**CSS for dropdown** (already in `style.css`):
```css
.dropdown-content {
    display: none;
    position: absolute;
    background: rgba(16, 16, 28, 0.98);
    min-width: 200px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown:hover .dropdown-content {
    display: block;
}
```

---

## 🔍 Quick Reference: File Locations

### **To Edit:**

| What | File Location | After Editing |
|------|--------------|---------------|
| **Home page** | `src/pages/index.html` | Refresh browser |
| **About page** | `src/pages/about.html` | Refresh browser |
| **Course listing** | `src/pages/course.html` | Refresh browser |
| **Blog listing** | `content/blog/template/blog-listing-template.html` | Run `node scripts/generate-blogs.js` |
| **Individual blog** | `content/blog/template/blog-template.html` | Run `node scripts/generate-blogs.js` |
| **Individual course** | `content/courses/template/course-template.html` | Run `node scripts/generate-courses.js` |
| **Main styles** | `src/css/style.css` | Refresh browser |
| **Mobile styles** | `src/css/responsive.css` | Refresh browser |

---

## ⚠️ Important Rules

### **DO Edit:**
- ✅ Files in `src/pages/` (main website pages)
- ✅ Files in `content/blog/template/` (blog templates)
- ✅ Files in `content/courses/template/` (course templates)
- ✅ Files in `src/css/` (stylesheets)
- ✅ Files in `content/blog/data/` (blog data)
- ✅ Files in `content/courses/data/` (course data)

### **DON'T Edit:**
- ❌ Files in `content/blog/generated/` (auto-generated)
- ❌ Files in `content/courses/generated/` (auto-generated)

**Why?** Generated files are overwritten when you run the generation scripts!

---

## 🎯 Example: Complete Navigation Edit

Let's say you want to add a "Resources" page:

### **Step 1: Create the page**
```bash
# Copy an existing page as template
cp src/pages/about.html src/pages/resources.html
```

### **Step 2: Edit the new page**
```html
<!-- Edit src/pages/resources.html -->
<title>Resources - Modern Age Coders</title>
<!-- Update content -->
```

### **Step 3: Add to navigation in ALL pages**

**Edit these files:**
- `src/pages/index.html`
- `src/pages/about.html`
- `src/pages/course.html`
- `src/pages/pricing.html`
- `src/pages/contact.html`
- `src/pages/faq.html`
- `src/pages/terms.html`
- `src/pages/privacy.html`
- `src/pages/login.html`
- `src/pages/resources.html` (the new page)

**Add this line in each file's navigation:**
```html
<li class="nav-item"><a href="/resources" class="nav-link">Resources</a></li>
```

### **Step 4: Add to blog templates**

**Edit:**
- `content/blog/template/blog-template.html`
- `content/blog/template/blog-listing-template.html`

**Add the same line, then regenerate:**
```bash
node scripts/generate-blogs.js
```

### **Step 5: Add to course template**

**Edit:**
- `content/courses/template/course-template.html`

**Add the same line, then regenerate:**
```bash
node scripts/generate-courses.js
```

### **Step 6: Add to dev server (optional)**

**Edit:** `scripts/dev-server.js`

**Add:**
```javascript
if (urlPath === '/resources') {
    return 'src/pages/resources.html';
}
```

### **Step 7: Add to Netlify config**

**Edit:** `netlify.toml`

**Add:**
```toml
[[redirects]]
  from = "/resources"
  to = "/src/pages/resources.html"
  status = 200
```

### **Step 8: Test**
```bash
# Start dev server
node scripts/dev-server.js

# Visit: http://localhost:3000/resources
```

---

## 🎨 Visual Guide

```
Your Website Structure:
┌─────────────────────────────────────────┐
│           NAVIGATION BAR                │  ← Edit in each HTML file
│  Home | Courses | About | Blog | ...   │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│                                         │
│           PAGE CONTENT                  │  ← Edit in src/pages/*.html
│                                         │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│              FOOTER                     │  ← Edit in each HTML file
└─────────────────────────────────────────┘
```

---

## 📞 Quick Commands

### **Edit main pages:**
```bash
# Open in your editor
code src/pages/index.html
code src/pages/about.html
# etc.
```

### **Edit blog templates:**
```bash
code content/blog/template/blog-template.html
code content/blog/template/blog-listing-template.html

# After editing, regenerate:
node scripts/generate-blogs.js
```

### **Edit course template:**
```bash
code content/courses/template/course-template.html

# After editing, regenerate:
node scripts/generate-courses.js
```

### **Edit styles:**
```bash
code src/css/style.css
code src/css/responsive.css
```

---

## 🎓 Pro Tips

1. **Use Find & Replace** to update navigation across all files quickly
2. **Keep navigation consistent** across all pages
3. **Test on mobile** after navigation changes
4. **Use clean URLs** for all links (e.g., `/about` not `/about.html`)
5. **Regenerate blogs/courses** after template changes
6. **Clear browser cache** if changes don't appear

---

## ✨ Summary

**Main Pages:** Edit directly in `src/pages/`
**Blog Pages:** Edit templates in `content/blog/template/`, then regenerate
**Course Pages:** Edit template in `content/courses/template/`, then regenerate
**Styles:** Edit in `src/css/`
**Navigation:** Update in all HTML files (main pages + templates)

**Remember:** Always regenerate blogs and courses after editing their templates!

---

Need help with a specific edit? Let me know! 🚀
