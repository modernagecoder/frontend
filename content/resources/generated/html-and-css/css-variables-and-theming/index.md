---
title: "CSS Variables and Theming - Dark Mode with Custom Properties | Modern Age Coders"
description: "Master CSS custom properties (variables), the :root selector, var() with fallbacks, spacing scales, design tokens, and build a working dark mode toggle. 58+ practice questions with complete code examples."
slug: css-variables-and-theming
canonical: https://learn.modernagecoders.com/resources/html-and-css/css-variables-and-theming/
category: "HTML and CSS"
keywords: ["css variables", "css custom properties", "var function", ":root css", "dark mode toggle", "css theming", "design tokens css", "setProperty javascript", "spacing scale", "design system css"]
---
# CSS Variables and Theming (Dark Mode)

**Difficulty:** Advanced  
**Reading time:** 50 min  
**Chapter:** 21  
**Practice questions:** 56

## What Are CSS Variables?

CSS variables (officially called **custom properties**) let you store a value in one place and reuse it everywhere. Instead of writing `#a855f7` fifty times in your stylesheet, you write it once as `--primary-color: #a855f7` and use it as `var(--primary-color)`.

They look like regular CSS properties but with two dashes in front:

```
:root {
  --primary-color: #a855f7;
  --text-color: #f1f5f9;
  --space-md: 16px;
}

.button {
  background: var(--primary-color);
  color: var(--text-color);
  padding: var(--space-md);
}
```

If Aarav decides purple should be a slightly different shade, he changes *one line* and every button, link, and heading on the site updates instantly. That is the superpower of variables.

Unlike Sass or Less variables (which are compiled away), CSS variables are **live**. They exist in the browser, they respond to media queries, they inherit down the DOM tree, and JavaScript can read and change them at runtime. This is what makes dark mode toggles trivial to build.

## Why Use CSS Variables?

### 1. DRY - Don't Repeat Yourself

Without variables, your brand color appears in 40 places across 10 files. Change it once and you miss three instances. With variables, it lives in one place and everything stays consistent. This is the single biggest maintenance win in CSS.

### 2. Theming Is Almost Free

A dark mode toggle used to require duplicating every style rule. With variables, you define colors once, override them inside `.dark-mode`, and toggle a single class on the body. One line of JavaScript changes the entire theme. Priya built her dark mode in 5 minutes.

### 3. Design Systems and Tokens

Professional design systems (Material, Tailwind, Radix, Shopify Polaris) are built on design tokens — named values for colors, spacing, typography, shadows, and radii. CSS variables are the browser-native way to implement tokens. Every modern framework uses them.

### 4. JavaScript Integration

Variables are visible to JavaScript through `getComputedStyle` and `setProperty`. You can read the current theme color, change it based on user input, animate it, or sync it with a server preference. Sass variables cannot do any of this.

### 5. Scoped Theming

Variables are scoped to the element they are declared on and inherited by all descendants. This means you can theme one section differently from another by redefining variables on a wrapper. No class explosion. No specificity wars.

## CSS Variables In Depth

### 1. Defining Variables on :root

The most common place to define variables is on `:root`, which is equivalent to `html` but has higher specificity. Variables defined here are available everywhere.

```
:root {
  --primary: #a855f7;
  --primary-dark: #7c3aed;
  --accent: #06b6d4;
  --bg: #0f172a;
  --text: #f1f5f9;
  --radius: 12px;
}
```

### 2. Using var() with Fallbacks

Use `var(--name)` to read a variable. Provide a fallback for cases where the variable does not exist:

```
.button {
  /* If --primary is missing, use red */
  background: var(--primary, red);
  /* You can even nest fallbacks */
  color: var(--text-color, var(--text, white));
}
```

Fallbacks are a safety net for components that might be dropped into projects where your variables are not defined.

### 3. Scoping - Variables Are Inherited

Variables cascade just like other CSS. You can redefine them on a parent element to theme a section:

```
.warning-panel {
  --primary: #ef4444;  /* Red for warnings */
  --text: white;
}
/* Every button, heading, and link inside .warning-panel
   now uses the warning colors. No extra selectors needed. */
```

### 4. Spacing Scales and Design Tokens

Define a consistent spacing scale so your whole site breathes the same way:

```
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-8: 48px;
  --space-10: 64px;

  --font-sm: 14px;
  --font-md: 16px;
  --font-lg: 20px;
  --font-xl: 28px;

  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;

  --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.15);
  --shadow-lg: 0 16px 40px rgba(0,0,0,0.25);
}
```

This is how real products ship UI. Designers and developers speak the same language: `space-4`, `radius-md`, `shadow-lg`.

### 5. Dark Mode with Pure CSS

The simplest way: toggle a class on the body and redefine the variables inside it.

```
:root {
  --bg: #ffffff;
  --text: #0f172a;
  --card: #f8fafc;
  --border: #e2e8f0;
}

.dark-mode {
  --bg: #0f172a;
  --text: #f1f5f9;
  --card: #1e293b;
  --border: #334155;
}

body {
  background: var(--bg);
  color: var(--text);
  transition: background 0.3s, color 0.3s;
}
```

Every element that uses `var(--bg)`, `var(--text)`, etc., flips automatically when `.dark-mode` is added to `body`. The `transition` makes the change smooth.

### 6. Changing Variables with JavaScript

At runtime, variables can be read and written through the style API:

```
// Read a variable
const styles = getComputedStyle(document.documentElement);
const primary = styles.getPropertyValue('--primary').trim();
console.log(primary); // "#a855f7"

// Change a variable
document.documentElement.style.setProperty('--primary', '#ec4899');

// Every element that uses var(--primary) updates instantly
```

This is how Ishita builds a live theme picker where a color input updates the whole page as you drag the slider.

### 7. Respecting System Preferences

Use the `prefers-color-scheme` media query to auto-match the user's OS setting:

```
:root {
  --bg: white;
  --text: black;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0f172a;
    --text: #f1f5f9;
  }
}
```

### 8. Pure-CSS Dark Mode Toggle (Checkbox Hack)

No JavaScript needed. Use a hidden checkbox and the sibling combinator:

```

Toggle theme
...

#theme:checked ~ main {
  --bg: #0f172a;
  --text: #f1f5f9;
}
```

### 9. Variables in Calculations

Variables play beautifully with `calc()`:

```
:root {
  --space: 8px;
}
.section {
  padding: calc(var(--space) * 3);   /* 24px */
  margin-block: calc(var(--space) * 6); /* 48px */
}
```

### 10. Component-Scoped Variables

Define variables on the component itself so it can be themed from the outside with a single property:

```
.card {
  --card-bg: white;
  --card-border: #e2e8f0;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  padding: 20px;
  border-radius: 12px;
}

/* Theme override - no new selectors needed */
.card.danger {
  --card-bg: #fef2f2;
  --card-border: #fca5a5;
}
```

This pattern is how libraries like Radix UI and shadcn ship themeable components.

## Code Examples

### Themed Button Library with Variables

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      --primary: #a855f7;
      --primary-dark: #7c3aed;
      --success: #10b981;
      --danger: #ef4444;
      --warning: #f59e0b;
      --text-on-color: #ffffff;
      --radius: 12px;
      --space-md: 14px;
      --space-lg: 28px;
      --shadow: 0 4px 14px rgba(0,0,0,0.15);
    }
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #0f172a;
      padding: 48px 24px;
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: center;
    }
    .btn {
      padding: var(--space-md) var(--space-lg);
      border: none;
      border-radius: var(--radius);
      color: var(--text-on-color);
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      box-shadow: var(--shadow);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.25); }
    .btn-primary { background: var(--primary); }
    .btn-primary:hover { background: var(--primary-dark); }
    .btn-success { background: var(--success); }
    .btn-danger  { background: var(--danger); }
    .btn-warning { background: var(--warning); }
    .btn-outline { background: transparent; color: var(--primary); border: 2px solid var(--primary); }
    .btn-outline:hover { background: var(--primary); color: var(--text-on-color); }
  </style>
</head>
<body>
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-success">Save</button>
  <button class="btn btn-danger">Delete</button>
  <button class="btn btn-warning">Warn</button>
  <button class="btn btn-outline">Outline</button>
</body>
</html>
```

One CSS variable per color, radius, spacing, and shadow. Every button uses the same tokens, guaranteeing visual consistency. Change `--primary` at the top and every primary button (plus the outline button) updates automatically. This is how real component libraries work.

**Output:**

```
A row of colorful modern buttons: purple Primary, green Save, red Delete, amber Warn, and a ghost Outline button. All share the same radius, spacing, and shadow because they read from the same variables.
```

### Dark Mode Toggle with CSS Variables and JavaScript

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      --bg: #ffffff;
      --text: #0f172a;
      --text-muted: #64748b;
      --card: #f8fafc;
      --border: #e2e8f0;
      --accent: #7c3aed;
      --shadow: 0 4px 12px rgba(0,0,0,0.08);
    }
    body.dark {
      --bg: #0b1120;
      --text: #f1f5f9;
      --text-muted: #94a3b8;
      --card: #1e293b;
      --border: #334155;
      --accent: #a855f7;
      --shadow: 0 10px 30px rgba(0,0,0,0.4);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Segoe UI', sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      padding: 40px 24px;
      transition: background 0.3s, color 0.3s;
    }
    .toggle {
      position: fixed; top: 20px; right: 20px;
      padding: 10px 20px; background: var(--accent); color: white;
      border: none; border-radius: 999px; cursor: pointer; font-weight: 600;
    }
    h1 { color: var(--accent); margin-bottom: 20px; font-size: 32px; }
    .card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 24px;
      box-shadow: var(--shadow);
      max-width: 500px;
      transition: background 0.3s, border-color 0.3s;
    }
    .card p { color: var(--text-muted); margin-top: 8px; }
  </style>
</head>
<body>
  <button class="toggle" id="themeBtn">Toggle Theme</button>
  <h1>Hi, I am Priya</h1>
  <div class="card">
    <h2>About Me</h2>
    <p>I love building interfaces with CSS variables. Click the button in the corner to flip between light and dark themes. Notice how nothing hardcodes a color - everything reads from var().</p>
  </div>
  <script>
    var btn = document.getElementById('themeBtn');
    btn.addEventListener('click', function() {
      document.body.classList.toggle('dark');
    });
  </script>
</body>
</html>
```

Variables live on `:root` for light mode and get overridden on `body.dark` for dark mode. The JavaScript is just one line: toggle the `dark` class. Every color across the page flips because they all read from variables. The transition property gives a silky fade when the theme switches.

**Output:**

```
A clean card on a light background with a purple toggle button. Clicking the button smoothly transitions the whole page to a deep navy background with lighter text and card surfaces. Click again to return.
```

### Live Theme Picker with setProperty

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      --primary: #a855f7;
      --radius: 14px;
    }
    body { font-family: 'Segoe UI', sans-serif; background: #0f172a; color: white; padding: 40px; text-align: center; }
    h1 { color: var(--primary); margin-bottom: 24px; font-size: 36px; }
    .controls { display: flex; gap: 20px; justify-content: center; margin-bottom: 32px; flex-wrap: wrap; }
    .controls label { display: flex; flex-direction: column; gap: 6px; font-size: 13px; color: #cbd5e1; }
    input[type="color"], input[type="range"] { cursor: pointer; }
    .preview {
      display: inline-block;
      padding: 24px 48px;
      background: var(--primary);
      color: white;
      font-weight: 700;
      font-size: 20px;
      border-radius: var(--radius);
      box-shadow: 0 10px 30px rgba(0,0,0,0.4);
      transition: background 0.2s, border-radius 0.2s;
    }
  </style>
</head>
<body>
  <h1>Live Theme Picker</h1>
  <div class="controls">
    <label>Primary color<input type="color" id="colorPick" value="#a855f7"></label>
    <label>Radius<input type="range" id="radiusPick" min="0" max="40" value="14"></label>
  </div>
  <div class="preview">Rohan's Button</div>
  <script>
    var root = document.documentElement;
    document.getElementById('colorPick').addEventListener('input', function(e) {
      root.style.setProperty('--primary', e.target.value);
    });
    document.getElementById('radiusPick').addEventListener('input', function(e) {
      root.style.setProperty('--radius', e.target.value + 'px');
    });
  </script>
</body>
</html>
```

Two inputs control live CSS variables. A color picker updates `--primary` and a range slider updates `--radius`. The preview element uses both variables, so it updates instantly as the user drags. `document.documentElement.style.setProperty` writes the variable to the root (<html>) so the whole page sees it.

**Output:**

```
A heading and a purple rounded button. Picking a new color instantly repaints the button and heading. Dragging the radius slider morphs the button from square to pill shape in real time.
```

### Design System Spacing and Typography Scale

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      /* Spacing scale */
      --s-1: 4px;
      --s-2: 8px;
      --s-3: 12px;
      --s-4: 16px;
      --s-5: 24px;
      --s-6: 32px;
      --s-7: 48px;
      --s-8: 64px;

      /* Type scale */
      --t-xs: 12px;
      --t-sm: 14px;
      --t-md: 16px;
      --t-lg: 20px;
      --t-xl: 28px;
      --t-2xl: 40px;

      /* Colors */
      --bg: #fafaf9;
      --card: #ffffff;
      --text: #0f172a;
      --muted: #64748b;
      --brand: #7c3aed;
      --border: #e2e8f0;
      --radius: 14px;
      --shadow: 0 4px 14px rgba(0,0,0,0.08);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', sans-serif; background: var(--bg); padding: var(--s-7); color: var(--text); }
    .hero {
      max-width: 720px;
      margin: 0 auto;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: var(--s-7);
      box-shadow: var(--shadow);
    }
    .eyebrow { font-size: var(--t-sm); color: var(--brand); text-transform: uppercase; letter-spacing: 2px; margin-bottom: var(--s-3); }
    .hero h1 { font-size: var(--t-2xl); margin-bottom: var(--s-4); line-height: 1.15; }
    .hero p { font-size: var(--t-md); color: var(--muted); margin-bottom: var(--s-5); line-height: 1.6; }
    .hero .cta {
      display: inline-block;
      padding: var(--s-3) var(--s-5);
      background: var(--brand);
      color: white;
      text-decoration: none;
      border-radius: var(--radius);
      font-size: var(--t-md);
      font-weight: 600;
    }
    .list { margin-top: var(--s-6); display: grid; gap: var(--s-3); }
    .list div { padding: var(--s-3) var(--s-4); background: var(--bg); border-radius: var(--s-2); font-size: var(--t-sm); color: var(--muted); }
  </style>
</head>
<body>
  <section class="hero">
    <div class="eyebrow">Design System</div>
    <h1>Build with Tokens, Not Magic Numbers</h1>
    <p>Every margin, padding, font size, radius, and color on this page comes from a CSS variable. Ishita designed them once. Aarav reuses them everywhere. The whole app breathes with the same rhythm.</p>
    <a href="#" class="cta">Read the Guide</a>
    <div class="list">
      <div>Spacing scale: s-1 through s-8</div>
      <div>Type scale: t-xs through t-2xl</div>
      <div>Radius, shadow, and color tokens</div>
      <div>All defined in one place on :root</div>
    </div>
  </section>
</body>
</html>
```

Not a single hardcoded number. Every size references a variable from the spacing or type scale. This is the foundation of a design system: rhythm, consistency, and maintainability. If the team decides to tighten spacing, they change the scale in one place and the whole product updates.

**Output:**

```
A clean hero card with an eyebrow label, large heading, paragraph, CTA button, and a list of tokens. Everything is perfectly spaced because it all uses the same 8px-based scale.
```

### Pure CSS Dark Mode Toggle (No JavaScript)

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      --bg: #ffffff;
      --text: #0f172a;
      --card: #f1f5f9;
      --accent: #7c3aed;
    }
    /* When the checkbox is checked, redefine variables on body via sibling */
    #themeSwitch:checked ~ .app {
      --bg: #0b1120;
      --text: #f1f5f9;
      --card: #1e293b;
      --accent: #a855f7;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', sans-serif; }
    #themeSwitch { position: absolute; opacity: 0; pointer-events: none; }
    .app {
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      padding: 40px 24px;
      transition: background 0.3s, color 0.3s;
    }
    .switch-label {
      display: inline-block;
      padding: 10px 20px;
      background: var(--accent);
      color: white;
      border-radius: 999px;
      cursor: pointer;
      font-weight: 600;
      user-select: none;
    }
    .switch-label::before { content: 'Dark mode on'; }
    #themeSwitch:checked ~ .app .switch-label::before { content: 'Light mode on'; }
    h1 { color: var(--accent); margin: 24px 0 12px; font-size: 32px; }
    .card { background: var(--card); padding: 20px; border-radius: 14px; max-width: 500px; transition: background 0.3s; }
  </style>
</head>
<body>
  <input type="checkbox" id="themeSwitch">
  <div class="app">
    <label for="themeSwitch" class="switch-label"></label>
    <h1>Anika's Theme Switcher</h1>
    <div class="card">
      <p>This toggle uses zero JavaScript. The hidden checkbox controls a CSS class, and CSS variables do the rest. The button label even changes with <code>::before { content }</code>.</p>
    </div>
  </div>
</body>
</html>
```

The checkbox hack: a hidden `` is the state. The `` acts as the visible button. The selector `#themeSwitch:checked ~ .app` reassigns the variables when the checkbox is checked. No JavaScript, zero runtime cost.

**Output:**

```
A rounded purple button that says 'Dark mode on'. Clicking it flips the whole page to dark mode and the button text changes to 'Light mode on'. Everything happens with pure CSS.
```

### Component-Scoped Variables for Card Variants

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', sans-serif; background: #f8fafc; padding: 40px 24px; display: grid; gap: 20px; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); max-width: 1000px; margin: 0 auto; }
    /* Base card - defines its own theming variables */
    .card {
      --card-bg: #ffffff;
      --card-border: #e2e8f0;
      --card-accent: #7c3aed;
      --card-title: #0f172a;
      --card-text: #475569;

      background: var(--card-bg);
      border: 2px solid var(--card-border);
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 14px rgba(0,0,0,0.06);
    }
    .card h3 { color: var(--card-title); margin-bottom: 8px; font-size: 20px; }
    .card p { color: var(--card-text); font-size: 14px; line-height: 1.6; }
    .card .tag { display: inline-block; margin-top: 12px; padding: 4px 12px; background: var(--card-accent); color: white; border-radius: 999px; font-size: 12px; font-weight: 600; }

    /* Variants - just override variables, no rewriting */
    .card.success {
      --card-bg: #f0fdf4;
      --card-border: #86efac;
      --card-accent: #16a34a;
    }
    .card.danger {
      --card-bg: #fef2f2;
      --card-border: #fca5a5;
      --card-accent: #dc2626;
    }
    .card.warning {
      --card-bg: #fffbeb;
      --card-border: #fde047;
      --card-accent: #d97706;
    }
    .card.info {
      --card-bg: #f0f9ff;
      --card-border: #7dd3fc;
      --card-accent: #0284c7;
    }
  </style>
</head>
<body>
  <div class="card"><h3>Default</h3><p>This is the base card with default theming variables.</p><span class="tag">Neutral</span></div>
  <div class="card success"><h3>Success</h3><p>Vivaan finished his JavaScript chapter! No new code, just new variables.</p><span class="tag">Completed</span></div>
  <div class="card danger"><h3>Danger</h3><p>Watch out - this card overrides only the variables that change color.</p><span class="tag">Alert</span></div>
  <div class="card warning"><h3>Warning</h3><p>One CSS class, four lines of variables, and you get a whole new look.</p><span class="tag">Review</span></div>
  <div class="card info"><h3>Info</h3><p>This is how production libraries (Radix, shadcn, Bootstrap) theme components.</p><span class="tag">Tip</span></div>
</body>
</html>
```

The `.card` component defines its own variables (`--card-bg`, `--card-accent`, etc.) and uses them throughout. Variants like `.success` and `.danger` simply override those variables. No new selectors for h3, p, or tag - they automatically pick up the new values because they use var(). This is the cleanest way to build variant-heavy component libraries.

**Output:**

```
Five colorful cards in a responsive grid: a neutral gray, a green success, a red danger, an amber warning, and a blue info card. All share identical structure but look completely different because each overrides just a handful of CSS variables.
```

## Common Mistakes

### Forgetting the Two Dashes in the Variable Name

**Wrong:**

```
:root {
  primary-color: #a855f7;  /* Not a variable! */
}

.btn {
  background: var(primary-color);  /* Error */
}
```

Without the leading `--`, the browser treats `primary-color` as an unknown property and ignores the declaration. `var()` also requires the dashes.

**Correct:**

```
:root {
  --primary-color: #a855f7;
}

.btn {
  background: var(--primary-color);
}
```

CSS custom properties always start with two dashes. Both the definition and the `var()` reference must include them. This is how the browser distinguishes a custom property from a regular property.

### Defining Variables Outside :root Without Scoping Intent

**Wrong:**

```
.header {
  --brand: #a855f7;
}

.footer .brand-text {
  color: var(--brand);  /* Undefined here! */
}
```

Variables are scoped to the element they are declared on and its descendants. `.footer` is not inside `.header`, so it cannot see `--brand`. The color falls back to inherited or initial value.

**Correct:**

```
:root {
  --brand: #a855f7;  /* Global - available everywhere */
}

.header { /* ... */ }
.footer .brand-text {
  color: var(--brand);  /* Works */
}
```

Put global variables on `:root` so they are available to the whole document. Only scope variables to a component when you deliberately want that component to be the only one that sees them.

### Not Using a Fallback When the Variable Might Be Missing

**Wrong:**

```
.widget {
  /* This widget is dropped into any project */
  color: var(--widget-text);
  /* If --widget-text is not defined, color is inherited - surprise! */
}
```

When a variable is not defined, `var()` falls back to the property's inherited or initial value, which may look broken on a project that does not define your variable.

**Correct:**

```
.widget {
  color: var(--widget-text, #0f172a);
  background: var(--widget-bg, #ffffff);
  /* Now it works even if no variables are defined */
}
```

Always provide a fallback for variables in reusable components or libraries. The syntax is `var(--name, fallback)`. This makes your component resilient to being dropped into any project.

### Forgetting .trim() When Reading a Variable in JavaScript

**Wrong:**

```
const color = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary');
console.log(color === '#a855f7'); // false!
console.log(color); // " #a855f7" - leading space
```

`getPropertyValue` often returns the value with a leading space. Direct string comparisons fail, and the string cannot be used as-is in some contexts.

**Correct:**

```
const color = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary')
  .trim();
console.log(color === '#a855f7'); // true
```

The value returned by `getPropertyValue` preserves any whitespace from the CSS declaration. Always call `.trim()` before comparing or using the value.

## Summary

- CSS custom properties (variables) are defined with two leading dashes like `--primary: #a855f7` and read with `var(--primary)`. They are native to the browser, live at runtime, and inherit down the DOM tree.
- Define global variables on `:root` so they are available everywhere. Scope variables to a component or section only when you deliberately want local theming.
- Use fallbacks for safety: `var(--primary, red)`. Fallbacks keep reusable components working when dropped into projects that do not define your variables.
- Build a spacing and type scale with variables (`--s-1` through `--s-8`, `--t-sm` through `--t-2xl`) to give your whole site a consistent visual rhythm. This is the foundation of every design system.
- Dark mode becomes almost free: define color variables on `:root`, override them inside a `.dark-mode` class, and toggle the class on `body`. Every element that uses `var()` flips automatically.
- For a pure-CSS dark mode, use the checkbox hack: a hidden checkbox plus `:checked ~ .app` selector to override variables. No JavaScript at all.
- Read and write variables from JavaScript with `getComputedStyle(el).getPropertyValue('--name').trim()` and `el.style.setProperty('--name', value)`. This enables live theme pickers, color inputs, and user preferences.
- Use the `prefers-color-scheme` media query to auto-match the user's OS dark mode preference. Users love apps that respect their system settings.
- Component-scoped variables let you ship themeable components: define `--card-bg`, `--card-accent` inside `.card`, then override them in `.card.success` or `.card.danger` for variants without rewriting any selectors.

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/html-and-css/css-variables-and-theming/*
*Practice questions: https://learn.modernagecoders.com/resources/html-and-css/css-variables-and-theming/practice/*
