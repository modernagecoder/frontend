---
title: "CSS Manipulation with JavaScript - classList, getComputedStyle, Dark Mode, Animations | Modern Age Coders"
description: "Learn to manipulate CSS with JavaScript. Master element.style, classList, getComputedStyle, CSS custom properties, dark mode toggle, scroll effects, theme switcher, and CSS transitions triggered by JS. 58+ practice questions."
slug: css-manipulation-with-javascript
canonical: https://learn.modernagecoders.com/resources/javascript/css-manipulation-with-javascript
category: "JavaScript"
keywords: ["javascript css manipulation", "classList javascript", "getComputedStyle javascript", "dark mode javascript", "css variables javascript", "toggle class javascript", "scroll effect javascript", "theme switcher javascript", "css transitions javascript", "javascript animations"]
---
# CSS Manipulation with JavaScript

**Difficulty:** Intermediate  
**Reading time:** 40 min  
**Chapter:** 15  
**Practice questions:** 58

## What Is CSS Manipulation with JavaScript?

CSS Manipulation means using JavaScript to dynamically change the appearance of elements -- colors, sizes, visibility, positions, animations -- in response to user actions or application state. You have already used `element.style` and `classList` in previous chapters. This chapter goes deeper into all the techniques for controlling CSS from JavaScript.

There are three main approaches:

1. **Inline styles** (`element.style.property`) -- directly set CSS on an element
2. **CSS classes** (`element.classList`) -- toggle predefined CSS classes
3. **CSS custom properties** (`setProperty`) -- change CSS variables from JS

```
// Approach 1: Inline style
element.style.backgroundColor = "red";

// Approach 2: Toggle a class
element.classList.toggle("active");

// Approach 3: CSS variable
document.documentElement.style.setProperty("--primary-color", "#a855f7");
```

## Why Learn CSS Manipulation?

### 1. Every Modern Feature Uses It

Dark mode, animated menus, scroll-to-top buttons, progress bars, loading spinners, tooltip popups, modal animations -- all of these change CSS dynamically with JavaScript. This is the skill that turns a static page into a polished, professional web app.

### 2. Performance Matters

Changing styles the wrong way causes the browser to recalculate layouts, which makes pages sluggish. Knowing the difference between toggling classes (fast) and setting inline styles in a loop (slow) makes you a better developer.

### 3. CSS Variables + JS = Powerful Theming

CSS custom properties (variables) let you define colors, sizes, and spacings once and change them everywhere by updating a single variable from JavaScript. This is how theme switchers work -- change one variable and the entire site updates.

### 4. It Is the Foundation for Animations

CSS transitions and animations are triggered by class changes. JavaScript adds or removes a class, and CSS handles the smooth animation. This separation of concerns (JS handles logic, CSS handles visuals) is a professional best practice.

## Detailed Explanation

### 1. element.style (Inline Styles)

Sets styles directly on the element's `style` attribute. Useful for dynamic values that cannot be predefined in CSS:

```
const box = document.getElementById("box");

// Set styles (CSS uses kebab-case, JS uses camelCase)
box.style.width = "200px";
box.style.height = "200px";
box.style.backgroundColor = "#a855f7";  // background-color
box.style.borderRadius = "12px";        // border-radius
box.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)"; // box-shadow

// Read a style (only reads inline styles, not stylesheet styles)
console.log(box.style.width);           // "200px"
console.log(box.style.backgroundColor); // "#a855f7"

// Remove an inline style
box.style.backgroundColor = "";  // Removes the inline style

// Set multiple styles at once
box.style.cssText = "width:100px; height:100px; background:red;";
// Warning: cssText REPLACES all existing inline styles
```

### 2. element.classList (CSS Classes)

The preferred way to manage styles. Define styles in CSS, toggle classes in JS:

```

  .hidden { display: none; }
  .visible { display: block; }
  .highlight { background-color: yellow; font-weight: bold; }
  .fade-in { opacity: 1; transition: opacity 0.5s; }
  .fade-out { opacity: 0; transition: opacity 0.5s; }

const el = document.getElementById("element");

el.classList.add("highlight");         // Add a class
el.classList.remove("highlight");      // Remove a class
el.classList.toggle("hidden");         // Add if missing, remove if present
el.classList.contains("highlight");    // Check: returns true/false
el.classList.replace("old", "new");    // Replace one class with another

// Why classList is better than inline styles:
// 1. Styles are defined in CSS (separation of concerns)
// 2. Easier to manage (toggle one class vs set 10 properties)
// 3. CSS handles animations/transitions automatically
// 4. Easier to debug (inspect classes in DevTools)

```

### 3. getComputedStyle()

`element.style` only reads inline styles. `getComputedStyle()` reads the actual, final computed value from all sources (stylesheets, inherited styles, defaults):

```

  #box { width: 200px; background-color: blue; padding: 20px; }

Hello

const box = document.getElementById("box");

// element.style reads ONLY inline styles
console.log(box.style.width);           // "" (empty -- not inline)
console.log(box.style.backgroundColor); // "" (empty -- not inline)

// getComputedStyle reads the ACTUAL applied styles
const computed = getComputedStyle(box);
console.log(computed.width);            // "200px"
console.log(computed.backgroundColor);  // "rgb(0, 0, 255)"
console.log(computed.padding);          // "20px"
console.log(computed.fontSize);         // "16px" (browser default)

```

Note: computed values are always in resolved units (px, rgb) even if you defined them in em, %, or hex.

### 4. CSS Custom Properties (Variables) with JavaScript

CSS variables let you define reusable values. JavaScript can read and change them:

```

  :root {
    --primary: #a855f7;
    --bg: #ffffff;
    --text: #1a1a2e;
  }
  body {
    background-color: var(--bg);
    color: var(--text);
  }
  .btn {
    background-color: var(--primary);
    color: white;
  }

const root = document.documentElement; // The  element

// Read a CSS variable
const primary = getComputedStyle(root).getPropertyValue("--primary");
console.log(primary); // "#a855f7"

// Change a CSS variable (updates everywhere it is used!)
root.style.setProperty("--primary", "#06b6d4");
root.style.setProperty("--bg", "#1a1a2e");
root.style.setProperty("--text", "#f1f5f9");
// The entire page updates because all elements reference these variables

```

This is incredibly powerful. Change one variable and every element using it updates automatically. This is how professional theme switchers work.

### 5. CSS Transitions Triggered by JavaScript

Define a transition in CSS. JavaScript triggers it by adding/removing a class:

```

  .box {
    width: 100px;
    height: 100px;
    background: #a855f7;
    transition: all 0.5s ease;
  }
  .box.expanded {
    width: 300px;
    height: 200px;
    background: #06b6d4;
    border-radius: 20px;
  }

Toggle

document.getElementById("btn").addEventListener("click", function() {
  document.getElementById("box").classList.toggle("expanded");
});
// The CSS transition handles the smooth animation automatically

```

### 6. Reading Scroll Position

`window.scrollY` gives the vertical scroll position. Use it to add classes based on scroll:

```
window.addEventListener("scroll", function() {
  const nav = document.getElementById("nav");
  if (window.scrollY > 100) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
```

## Code Examples

### Dark Mode Toggle with CSS Variables

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      --bg: #ffffff;
      --text: #1a1a2e;
      --card-bg: #f3f4f6;
      --border: #e5e7eb;
      --primary: #a855f7;
    }
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: var(--bg);
      color: var(--text);
      transition: background-color 0.3s, color 0.3s;
    }
    .card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      padding: 20px;
      border-radius: 12px;
      margin: 16px 0;
      transition: background-color 0.3s, border-color 0.3s;
    }
    .toggle-btn {
      padding: 10px 20px;
      background: var(--primary);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h1>My Dashboard</h1>
  <button class="toggle-btn" id="themeBtn">Switch to Dark Mode</button>
  <div class="card">
    <h3>Welcome, Aarav!</h3>
    <p>You have 5 new assignments and 2 messages.</p>
  </div>
  <div class="card">
    <h3>Upcoming Test</h3>
    <p>Mathematics - Chapter 12 - April 15, 2026</p>
  </div>

  <script>
    const root = document.documentElement;
    const btn = document.getElementById("themeBtn");
    let isDark = false;

    const themes = {
      light: {
        "--bg": "#ffffff",
        "--text": "#1a1a2e",
        "--card-bg": "#f3f4f6",
        "--border": "#e5e7eb"
      },
      dark: {
        "--bg": "#1a1a2e",
        "--text": "#f1f5f9",
        "--card-bg": "#16213e",
        "--border": "#374151"
      }
    };

    btn.addEventListener("click", function() {
      isDark = !isDark;
      const theme = isDark ? themes.dark : themes.light;

      Object.keys(theme).forEach(function(key) {
        root.style.setProperty(key, theme[key]);
      });

      btn.textContent = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
    });
  </script>
</body>
</html>
```

CSS variables are defined on `:root`. All elements reference these variables. When the button is clicked, JavaScript changes the variables using `setProperty`, and every element updates instantly. The CSS `transition` makes the color change smooth.

**Output:**

```
A dashboard page with cards. Clicking the button switches between light and dark mode with smooth transitions.
```

### Multi-Theme Switcher

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      --bg: #ffffff;
      --text: #1a1a2e;
      --primary: #a855f7;
      --accent: #06b6d4;
    }
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background: var(--bg);
      color: var(--text);
      transition: all 0.4s;
    }
    h1 { color: var(--primary); }
    .theme-grid { display: flex; gap: 12px; margin: 16px 0; }
    .theme-dot {
      width: 40px; height: 40px; border-radius: 50%; cursor: pointer;
      border: 3px solid transparent; transition: border-color 0.3s, transform 0.2s;
    }
    .theme-dot:hover { transform: scale(1.15); }
    .theme-dot.selected { border-color: var(--text); }
    .demo-card {
      padding: 20px; background: var(--primary); color: white;
      border-radius: 12px; margin-top: 16px;
    }
    .demo-btn {
      padding: 8px 16px; background: var(--accent); color: white;
      border: none; border-radius: 6px; cursor: pointer; margin-top: 10px;
    }
  </style>
</head>
<body>
  <h1>Theme Switcher</h1>
  <p>Choose a theme:</p>
  <div class="theme-grid" id="themes"></div>
  <div class="demo-card">
    <h3>Sample Card</h3>
    <p>This card uses the primary color as background.</p>
    <button class="demo-btn">Action Button</button>
  </div>

  <script>
    const themes = [
      { name: "Purple", bg: "#ffffff", text: "#1a1a2e", primary: "#a855f7", accent: "#06b6d4", dot: "#a855f7" },
      { name: "Ocean", bg: "#f0f9ff", text: "#0c4a6e", primary: "#0369a1", accent: "#06b6d4", dot: "#0369a1" },
      { name: "Forest", bg: "#f0fdf4", text: "#14532d", primary: "#15803d", accent: "#a3e635", dot: "#15803d" },
      { name: "Sunset", bg: "#fff7ed", text: "#7c2d12", primary: "#ea580c", accent: "#facc15", dot: "#ea580c" },
      { name: "Dark", bg: "#1a1a2e", text: "#f1f5f9", primary: "#a855f7", accent: "#06b6d4", dot: "#1a1a2e" },
      { name: "Rose", bg: "#fff1f2", text: "#881337", primary: "#e11d48", accent: "#fb7185", dot: "#e11d48" }
    ];

    const grid = document.getElementById("themes");
    const root = document.documentElement;
    let dots = [];

    themes.forEach(function(theme, index) {
      const dot = document.createElement("div");
      dot.className = "theme-dot" + (index === 0 ? " selected" : "");
      dot.style.backgroundColor = theme.dot;
      dot.title = theme.name;
      dot.addEventListener("click", function() {
        root.style.setProperty("--bg", theme.bg);
        root.style.setProperty("--text", theme.text);
        root.style.setProperty("--primary", theme.primary);
        root.style.setProperty("--accent", theme.accent);
        dots.forEach(function(d) { d.classList.remove("selected"); });
        dot.classList.add("selected");
      });
      grid.appendChild(dot);
      dots.push(dot);
    });
  </script>
</body>
</html>
```

Six theme presets are defined as objects. Clicking a colored dot changes all four CSS variables at once, instantly updating the entire page. The transition on body makes the switch smooth. The selected dot gets a border to show the active theme.

**Output:**

```
A page with 6 colored dots. Clicking any dot changes the entire color scheme (background, text, buttons, cards).
```

### Scroll-Based Navigation Effects

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Arial, sans-serif; }
    .nav {
      position: fixed; top: 0; left: 0; right: 0;
      padding: 20px 30px;
      display: flex; justify-content: space-between; align-items: center;
      background: transparent;
      transition: all 0.3s;
      z-index: 100;
    }
    .nav.scrolled {
      background: rgba(255,255,255,0.95);
      padding: 10px 30px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .nav .logo { font-size: 24px; font-weight: bold; color: #a855f7; }
    .progress-bar {
      position: fixed; top: 0; left: 0; height: 3px;
      background: linear-gradient(to right, #a855f7, #06b6d4);
      z-index: 200; transition: width 0.1s;
    }
    .scroll-top {
      position: fixed; bottom: 30px; right: 30px;
      width: 40px; height: 40px;
      background: #a855f7; color: white;
      border: none; border-radius: 50%;
      font-size: 20px; cursor: pointer;
      opacity: 0; transform: translateY(20px);
      transition: opacity 0.3s, transform 0.3s;
    }
    .scroll-top.visible { opacity: 1; transform: translateY(0); }
    .content { padding: 100px 30px 30px; }
    section { padding: 60px 0; min-height: 50vh; }
    h2 { color: #a855f7; margin-bottom: 16px; }
  </style>
</head>
<body>
  <div class="progress-bar" id="progress"></div>
  <nav class="nav" id="nav">
    <div class="logo">SiteName</div>
    <div>Home | About | Contact</div>
  </nav>
  <div class="content">
    <section><h2>Section 1</h2><p>Scroll down to see the navigation change, progress bar fill, and scroll-to-top button appear.</p></section>
    <section><h2>Section 2</h2><p>The navigation shrinks and gets a white background when you scroll past 100px.</p></section>
    <section><h2>Section 3</h2><p>The progress bar at the top shows how far you have scrolled through the page.</p></section>
    <section><h2>Section 4</h2><p>The scroll-to-top button appears after scrolling 300px down.</p></section>
    <section><h2>Section 5</h2><p>All of these effects use CSS classes toggled by JavaScript scroll events.</p></section>
  </div>
  <button class="scroll-top" id="scrollTop">^</button>

  <script>
    const nav = document.getElementById("nav");
    const progress = document.getElementById("progress");
    const scrollTopBtn = document.getElementById("scrollTop");

    window.addEventListener("scroll", function() {
      // Nav shrink effect
      if (window.scrollY > 100) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }

      // Progress bar
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (window.scrollY / scrollHeight) * 100;
      progress.style.width = scrollPercent + "%";

      // Scroll to top button
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    });

    scrollTopBtn.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  </script>
</body>
</html>
```

Three scroll-based effects: (1) Navigation shrinks and gets a background after 100px scroll. (2) A progress bar shows scroll percentage using `window.scrollY` and `document.documentElement.scrollHeight`. (3) A scroll-to-top button appears after 300px. All use classList for toggling and element.style for the progress width.

**Output:**

```
A page with a navbar that shrinks on scroll, a progress bar at the top, and a scroll-to-top button that fades in.
```

### Animated Navigation Menu

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; }
    .navbar { display: flex; justify-content: space-between; align-items: center; padding: 16px 24px; background: #1a1a2e; color: white; }
    .menu-btn { background: none; border: 2px solid white; color: white; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 16px; }
    .sidebar {
      position: fixed; top: 0; right: -300px; width: 300px; height: 100%;
      background: #16213e; color: white; padding: 24px;
      transition: right 0.4s ease;
      z-index: 200;
    }
    .sidebar.open { right: 0; }
    .overlay {
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.5);
      opacity: 0; visibility: hidden;
      transition: opacity 0.4s, visibility 0.4s;
      z-index: 150;
    }
    .overlay.visible { opacity: 1; visibility: visible; }
    .sidebar a { display: block; color: white; text-decoration: none; padding: 12px 0; border-bottom: 1px solid #374151; font-size: 18px; }
    .sidebar a:hover { color: #a855f7; }
    .close-btn { background: none; border: none; color: #9ca3af; font-size: 24px; cursor: pointer; position: absolute; top: 16px; right: 16px; }
    .content { padding: 24px; }
  </style>
</head>
<body>
  <nav class="navbar">
    <div style="font-size:20px;font-weight:bold;">MyApp</div>
    <button class="menu-btn" id="menuBtn">Menu</button>
  </nav>
  <div class="overlay" id="overlay"></div>
  <div class="sidebar" id="sidebar">
    <button class="close-btn" id="closeBtn">x</button>
    <h3 style="margin-top:40px;">Navigation</h3>
    <a href="#">Home</a>
    <a href="#">Courses</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
  <div class="content">
    <h2>Page Content</h2>
    <p>Click the Menu button to open the animated sidebar navigation.</p>
  </div>

  <script>
    const menuBtn = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("closeBtn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    function openMenu() {
      sidebar.classList.add("open");
      overlay.classList.add("visible");
    }

    function closeMenu() {
      sidebar.classList.remove("open");
      overlay.classList.remove("visible");
    }

    menuBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape") closeMenu();
    });
  </script>
</body>
</html>
```

The sidebar starts off-screen (right: -300px). Adding the "open" class moves it on-screen (right: 0) with a CSS transition. The overlay fades in with opacity. Closing happens by removing both classes. The Escape key also closes the menu. All animation is handled by CSS transitions -- JavaScript only toggles classes.

**Output:**

```
A page with a menu button. Clicking it slides in a sidebar from the right with a dark overlay. Click overlay or press Escape to close.
```

### getComputedStyle and Reading CSS Values

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    #box {
      width: 200px;
      height: 150px;
      background-color: #a855f7;
      color: white;
      padding: 20px;
      border-radius: 12px;
      font-size: 18px;
      margin-bottom: 16px;
    }
    #results { padding: 16px; background: #f3f4f6; border-radius: 8px; font-family: monospace; font-size: 14px; }
    button { padding: 8px 16px; margin: 4px; cursor: pointer; border: 1px solid #ddd; border-radius: 4px; }
  </style>
</head>
<body>
  <div id="box">Styled Box</div>
  <button id="readBtn">Read Computed Styles</button>
  <button id="readInlineBtn">Read Inline Styles</button>
  <button id="addInlineBtn">Add Inline Border</button>
  <div id="results"></div>

  <script>
    const box = document.getElementById("box");
    const results = document.getElementById("results");

    document.getElementById("readBtn").addEventListener("click", function() {
      const computed = getComputedStyle(box);
      results.innerHTML =
        "<strong>getComputedStyle:</strong><br>" +
        "width: " + computed.width + "<br>" +
        "height: " + computed.height + "<br>" +
        "backgroundColor: " + computed.backgroundColor + "<br>" +
        "padding: " + computed.padding + "<br>" +
        "borderRadius: " + computed.borderRadius + "<br>" +
        "fontSize: " + computed.fontSize + "<br>" +
        "display: " + computed.display + "<br>" +
        "position: " + computed.position;
    });

    document.getElementById("readInlineBtn").addEventListener("click", function() {
      results.innerHTML =
        "<strong>element.style (inline only):</strong><br>" +
        "width: '" + box.style.width + "'<br>" +
        "backgroundColor: '" + box.style.backgroundColor + "'<br>" +
        "border: '" + box.style.border + "'<br>" +
        "(Most are empty because styles come from the stylesheet, not inline)";
    });

    document.getElementById("addInlineBtn").addEventListener("click", function() {
      box.style.border = "3px solid #f59e0b";
      results.innerHTML = "Added inline border. Now element.style.border = '" + box.style.border + "'";
    });
  </script>
</body>
</html>
```

This demo shows the critical difference between `element.style` and `getComputedStyle()`. element.style only shows inline styles (most are empty because styles come from the stylesheet). getComputedStyle shows the actual computed values from all CSS sources, returned in resolved units (px, rgb).

**Output:**

```
A styled box with buttons to read computed styles (shows all values), read inline styles (mostly empty), and add an inline border.
```

### Progress Bar with JavaScript Control

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .progress-container {
      width: 100%; max-width: 400px;
      height: 24px; background: #e5e7eb;
      border-radius: 12px; overflow: hidden;
      margin: 16px 0;
    }
    .progress-fill {
      height: 100%; width: 0%;
      background: linear-gradient(to right, #a855f7, #06b6d4);
      border-radius: 12px;
      transition: width 0.3s ease;
      display: flex; align-items: center; justify-content: center;
      color: white; font-size: 12px; font-weight: bold;
      min-width: 30px;
    }
    button { padding: 8px 16px; margin: 4px; cursor: pointer; border: 1px solid #ddd; border-radius: 6px; }
    .controls { margin-top: 12px; }
  </style>
</head>
<body>
  <h2>Progress Bar</h2>
  <div class="progress-container">
    <div class="progress-fill" id="fill">0%</div>
  </div>
  <div class="controls">
    <button id="minus10">-10%</button>
    <button id="plus10">+10%</button>
    <button id="reset">Reset</button>
    <button id="auto">Auto Fill</button>
  </div>

  <script>
    const fill = document.getElementById("fill");
    let progress = 0;

    function updateBar() {
      fill.style.width = progress + "%";
      fill.textContent = progress + "%";
    }

    document.getElementById("plus10").addEventListener("click", function() {
      progress = Math.min(100, progress + 10);
      updateBar();
    });

    document.getElementById("minus10").addEventListener("click", function() {
      progress = Math.max(0, progress - 10);
      updateBar();
    });

    document.getElementById("reset").addEventListener("click", function() {
      progress = 0;
      updateBar();
    });

    document.getElementById("auto").addEventListener("click", function() {
      progress = 0;
      updateBar();
      const interval = setInterval(function() {
        progress += 5;
        updateBar();
        if (progress >= 100) clearInterval(interval);
      }, 200);
    });
  </script>
</body>
</html>
```

The progress bar's width is controlled by setting `fill.style.width`. The CSS transition makes width changes animate smoothly. The "Auto Fill" button uses `setInterval` to incrementally increase the progress. `Math.min` and `Math.max` keep the value between 0 and 100.

**Output:**

```
A gradient progress bar with +10%, -10%, Reset, and Auto Fill buttons. The bar animates smoothly when changing.
```

## Common Mistakes

### Using element.style to Read Stylesheet Styles

**Wrong:**

```
// CSS: #box { background-color: blue; }
const box = document.getElementById("box");
console.log(box.style.backgroundColor); // "" (empty!)
```

element.style only reads inline styles, not styles from stylesheets. It returns an empty string.

**Correct:**

```
const box = document.getElementById("box");
const computed = getComputedStyle(box);
console.log(computed.backgroundColor); // "rgb(0, 0, 255)"
```

`element.style` only reads inline styles (set via the style attribute or JS). Use `getComputedStyle(element)` to read the actual applied styles from all sources.

### Forgetting that CSS Variables Need the -- Prefix

**Wrong:**

```
root.style.setProperty("primary", "#a855f7"); // Missing --
// Does not set a CSS variable
```

The property is set but not recognized as a CSS custom property. CSS variables must start with --.

**Correct:**

```
root.style.setProperty("--primary", "#a855f7"); // Correct
```

CSS custom properties must always start with `--`. Without the prefix, it is just a regular (invalid) CSS property that has no effect.

### Animating Properties That Cannot Be Transitioned

**Wrong:**

```
<style>
  .box { display: none; transition: display 0.5s; }
  .box.visible { display: block; }
</style>
/* The transition does not work -- display is not animatable */
```

The element appears/disappears instantly. The display property cannot be animated with CSS transitions.

**Correct:**

```
<style>
  .box { opacity: 0; visibility: hidden; transition: opacity 0.5s, visibility 0.5s; }
  .box.visible { opacity: 1; visibility: visible; }
</style>
```

`display` is not animatable. Use `opacity` and `visibility` instead for fade effects. Alternatively, use `transform: scale(0)` to `scale(1)` for shrink/grow effects.

### Setting style.cssText Replaces All Inline Styles

**Wrong:**

```
const el = document.getElementById("box");
el.style.color = "red";
el.style.fontSize = "20px";
el.style.cssText = "background: blue;"; // Destroys color and fontSize!
```

After setting cssText, only background: blue remains. The color and fontSize are gone.

**Correct:**

```
// Option 1: Set individual properties
el.style.backgroundColor = "blue";

// Option 2: Include all properties in cssText
el.style.cssText = "color: red; font-size: 20px; background: blue;";
```

`cssText` replaces the entire inline style. It does not append. Either set individual properties or include all desired properties in the cssText string.

## Summary

- element.style.property sets inline CSS styles. Use camelCase: background-color becomes backgroundColor, font-size becomes fontSize.
- element.style only reads INLINE styles. Use getComputedStyle(element) to read the actual applied styles from all CSS sources (stylesheets, inherited, defaults).
- classList.add/remove/toggle/contains is the preferred way to manage styles. Define styles in CSS, toggle classes in JS. This keeps style logic in CSS and behavior logic in JS.
- classList.replace('old', 'new') swaps one class for another in a single operation.
- CSS custom properties (variables) are defined with -- prefix on :root. Change them with document.documentElement.style.setProperty('--name', 'value'). All elements using that variable update automatically.
- Read CSS variables with getComputedStyle(root).getPropertyValue('--name').
- CSS transitions handle smooth animations. JavaScript just toggles classes; CSS handles the animation timing, easing, and duration.
- window.scrollY gives the current vertical scroll position. Use the scroll event to add/remove classes based on scroll position (sticky navbars, scroll-to-top buttons, progress bars).
- getComputedStyle returns values in resolved units: px for sizes, rgb() for colors, even if the original CSS used em, %, hex, or named colors.
- style.cssText replaces ALL inline styles. Set individual properties when you want to preserve existing inline styles.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/javascript/css-manipulation-with-javascript/*
*Practice questions: https://learn.modernagecoders.com/resources/javascript/css-manipulation-with-javascript/practice/*
