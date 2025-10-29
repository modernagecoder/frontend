# Course Template Navigation Guide

## 📚 Overview

This guide explains how the navigation bar works in generated course pages and how to modify it.

---

## 🗂️ File Structure

```
project/
├── scripts/
│   └── generate-courses.js          # Script that generates courses
├── content/courses/
│   ├── template/
│   │   ├── course-template.html     # MASTER TEMPLATE (edit this!)
│   │   └── course-template.css      # Template styles
│   ├── data/
│   │   └── *.json                   # Course data files
│   └── generated/
│       └── [course-name]/
│           └── index.html           # Generated course pages (auto-created)
```

---

## 🎯 How It Works

### Step 1: Template File (Master)
- **Location**: `content/courses/template/course-template.html`
- **Lines 44-103**: Contains the navigation bar HTML
- This is the **MASTER** template that all courses use

### Step 2: Course Data
- **Location**: `content/courses/data/*.json`
- Example: `python-ai-kids.json`
- Contains course-specific information (title, description, curriculum, etc.)

### Step 3: Generation Script
- **Location**: `scripts/generate-courses.js`
- Reads the template
- Reads course data from JSON files
- Replaces placeholders like `{{COURSE_TITLE}}` with actual data
- Creates individual course pages in `generated/` folder

### Step 4: Generated Pages
- **Location**: `content/courses/generated/[course-slug]/index.html`
- These are AUTO-GENERATED - don't edit directly!
- Regenerated every time you run the script

---

## 🔧 How to Modify the Navigation Bar

### Option 1: Change for ALL Courses (Recommended)

**Edit the master template:**

1. Open: `content/courses/template/course-template.html`
2. Find the navigation section (lines 44-103)
3. Make your changes
4. Run the generation script:
   ```bash
   node scripts/generate-courses.js
   ```
5. All course pages will be regenerated with your changes!

### Option 2: Change for ONE Specific Course

If you need course-specific navigation, you'll need to modify the generation script to accept navigation data from the JSON file.

---

## 📝 Navigation Bar Structure

Here's the current navigation structure:

```html
<header>
    <nav>
        <div class="navbar">
            <div class="nav-container">
                <!-- Back Button -->
                <a href="../../../index10.html" class="back-button">
                    <!-- SVG icon -->
                </a>
                
                <!-- Logo -->
                <a href="../../../index10.html" class="logo">
                    <div class="logo-icon"></div>
                    <span class="logo-text">Modern Age Coders</span>
                </a>
                
                <!-- Navigation Menu -->
                <ul class="nav-menu" id="navMenu">
                    <li class="nav-item">
                        <a href="../../../index10.html">Home</a>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <a href="#">Courses</a>
                        <div class="dropdown-content">
                            <a href="#">For Kids (Ages 6-12)</a>
                            <a href="#">For Teens (Ages 13-18)</a>
                            <a href="#">For College Students</a>
                            <a href="#">For Professionals</a>
                            <a href="#">Customized Training</a>
                            <a href="#">Special For Girls</a>
                        </div>
                    </li>
                    
                    <li class="nav-item">
                        <a href="#">About</a>
                    </li>
                    
                    <li class="nav-item">
                        <a href="../../../blog/">Blog</a>
                    </li>
                    
                    <li class="nav-item">
                        <a href="../../../index10.html#faq">FAQ</a>
                    </li>
                    
                    <li class="nav-item">
                        <a href="../../../index10.html#contact">Contact</a>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <a href="#">Login</a>
                        <div class="dropdown-content">
                            <a href="#">Student Login</a>
                            <a href="#">Teacher Login</a>
                        </div>
                    </li>
                    
                    <li class="nav-item">
                        <a href="#" class="cta-button">Start Learning</a>
                    </li>
                </ul>
                
                <!-- Mobile Menu Button -->
                <button class="mobile-menu-btn" id="mobileMenuBtn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </nav>
</header>
```

---

## 🎨 Common Modifications

### 1. Change Logo Text
```html
<!-- Find this line in course-template.html -->
<span class="logo-text">Modern Age Coders</span>

<!-- Change to: -->
<span class="logo-text">Your Company Name</span>
```

### 2. Add a New Menu Item
```html
<!-- Add after existing nav-items -->
<li class="nav-item">
    <a href="/new-page.html" class="nav-link">New Page</a>
</li>
```

### 3. Change Home Link
```html
<!-- Find all instances of: -->
href="../../../index10.html"

<!-- Change to your home page: -->
href="../../../index.html"
```

### 4. Modify Dropdown Items
```html
<!-- Find the dropdown-content div -->
<div class="dropdown-content">
    <a href="#" class="dropdown-item">Your New Item</a>
    <!-- Add more items here -->
</div>
```

### 5. Remove a Menu Item
Simply delete the entire `<li class="nav-item">...</li>` block

---

## 🚀 Workflow Example

Let's say you want to change "Modern Age Coders" to "My Coding School":

1. **Open the template:**
   ```
   content/courses/template/course-template.html
   ```

2. **Find and replace:**
   - Line ~55: Change `<span class="logo-text">Modern Age Coders</span>`
   - To: `<span class="logo-text">My Coding School</span>`

3. **Save the file**

4. **Regenerate all courses:**
   ```bash
   node scripts/generate-courses.js
   ```

5. **Check the result:**
   - Open any generated course: `content/courses/generated/[course-name]/index.html`
   - The navigation will now show "My Coding School"

---

## ⚠️ Important Notes

1. **Never edit generated files directly** - They get overwritten when you run the script
2. **Always edit the template** - `course-template.html` is the source of truth
3. **Test after changes** - Run the generation script and check a few courses
4. **Backup before major changes** - Keep a copy of your template
5. **CSS is separate** - Navigation styles are in `course-template.css`

---

## 🔍 Finding Navigation Styles

The navigation bar styling is in:
- **File**: `content/courses/template/course-template.css`
- **Look for**: `.navbar`, `.nav-container`, `.nav-menu`, `.nav-item`, etc.

---

## 💡 Pro Tips

1. **Use search**: Press `Ctrl+F` in your editor to find specific navigation elements
2. **Test incrementally**: Make one change at a time and regenerate
3. **Check mobile**: The navigation has mobile-specific code (`.mobile-menu-btn`)
4. **Relative paths**: Notice the `../../../` - this navigates up from the course folder

---

## 📞 Need Help?

If you want to:
- Add dynamic navigation based on course data
- Create course-specific navigation items
- Implement advanced navigation features

You'll need to modify the `generate-courses.js` script to handle these cases.
