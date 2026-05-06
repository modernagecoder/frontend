---
title: "Responsive Design and Media Queries - Mobile-First CSS, Breakpoints, Viewport | Modern Age Coders"
description: "Master responsive web design with media queries, mobile-first workflow, viewport meta tag, rem/em/vw units, common breakpoints (640, 768, 1024, 1280), fluid images, and building fully responsive layouts. 60+ practice questions."
slug: responsive-design-and-media-queries
canonical: https://learn.modernagecoders.com/resources/html-and-css/responsive-design-and-media-queries
category: "HTML and CSS"
keywords: ["responsive design tutorial", "css media queries", "mobile-first css", "viewport meta", "rem em vw units", "breakpoints css", "responsive navbar", "responsive card grid", "fluid typography", "max-width min-width"]
---
# Responsive Design and Media Queries

**Difficulty:** Intermediate  
**Reading time:** 42 min  
**Chapter:** 17  
**Practice questions:** 60

## What Is Responsive Design?

Responsive design is the practice of building websites that look good and work well on ANY screen size — a 5-inch phone, a 10-inch tablet, a 15-inch laptop, a 27-inch desktop, even a 50-inch TV. Instead of building a separate website for each device, you build ONE site that adapts.

The three pillars of responsive design are:

1. **Fluid layouts** — using % and fr units so things stretch and shrink
2. **Flexible images** — `max-width: 100%` so pictures never overflow
3. **Media queries** — changing CSS based on screen width

```
/* Media query example */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Why Learn Responsive Design?

### 1. Mobile Traffic Is the Majority

Over 60 percent of internet traffic now comes from phones. A site that does not work on mobile is a site that most people cannot use. Google even ranks mobile-unfriendly sites lower in search results. If your site is not responsive, you are invisible.

### 2. One Codebase, Every Device

Before responsive design, companies built separate mobile sites (m.example.com) and desktop sites. That meant twice the work, twice the bugs, twice the maintenance. Modern responsive design lets you write one HTML/CSS codebase that works everywhere.

### 3. Media Queries Are Superpowers

Media queries let you say 'use this CSS on small screens and this CSS on big screens'. You can change layouts, hide or show elements, resize text, and rearrange entire pages based on the viewport. It is one of the most powerful features CSS has.

### 4. Employers Expect It

Every professional web developer knows responsive design. It is a basic expectation, not an advanced skill. If you want to build websites professionally, you must master this chapter.

## Detailed Explanation

### 1. The Viewport Meta Tag (The First Thing!)

Without this one line in your HTML head, mobile browsers will render your site at desktop width and scale it down, making text tiny and unreadable:

```

```

This tells mobile browsers: 'use the actual device width and do not scale the page'. Every responsive site starts here. Forget this tag and nothing else works.

### 2. Media Query Syntax

A media query says 'if these conditions are true, apply this CSS':

```
@media (min-width: 768px) {
  /* CSS here runs only when viewport is 768px wide or more */
  body {
    font-size: 18px;
  }
}

@media (max-width: 640px) {
  /* CSS here runs only when viewport is 640px wide or less */
  .sidebar {
    display: none;
  }
}
```

You can combine conditions with `and`, `or` (comma), and `not`:

```
@media (min-width: 768px) and (max-width: 1024px) {
  /* Only tablets */
}

@media (max-width: 640px), (orientation: portrait) {
  /* Phones OR portrait orientation */
}
```

### 3. Mobile-First vs Desktop-First

**Mobile-first** (recommended): write base CSS for mobile, then use `min-width` media queries to progressively add desktop styles:

```
/* Base styles = mobile */
.grid { grid-template-columns: 1fr; }

/* Tablet and up */
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(4, 1fr); }
}
```

**Desktop-first**: write base styles for desktop, then use `max-width` queries to override on smaller screens. This was common in the 2010s but is now considered backward. Mobile-first forces you to think mobile first, which usually leads to cleaner code.

### 4. Common Breakpoints

Breakpoints are the widths at which your layout changes. There is no 'one true' set, but these are widely used:

- **640px** — large phone / phablet
- **768px** — tablet (also iPad portrait)
- **1024px** — small laptop / iPad landscape
- **1280px** — standard desktop
- **1536px** — large desktop

Do not pick breakpoints based on specific devices. Pick them based on where YOUR layout breaks. If your cards start looking squished at 620px, add a breakpoint at 620px.

### 5. Relative Units - Your Best Friends

Fixed pixel sizes do not scale. Use relative units so your design adapts:

```
font-size: 16px;     /* Absolute — always 16 pixels */
font-size: 1rem;     /* Relative to root (html) font-size */
font-size: 1.2em;    /* Relative to parent font-size */
font-size: 50%;      /* Relative to parent */
width: 100vw;        /* 100% of viewport WIDTH */
height: 100vh;       /* 100% of viewport HEIGHT */
font-size: 2vmin;    /* 2% of the SMALLER viewport dimension */
font-size: 3vmax;    /* 3% of the LARGER viewport dimension */
```

**rem** is the gold standard for font sizes. It scales if the user increases browser zoom (accessibility) and stays predictable.

### 6. Fluid Images

By default, images display at their natural pixel size, which can overflow their container on small screens. The fix is one line:

```
img {
  max-width: 100%;
  height: auto;
}
```

This means: 'never be wider than your container, and scale height proportionally'. Your images will always fit, no matter the screen size.

### 7. Hiding and Showing Elements

Sometimes a desktop sidebar just does not make sense on mobile. You can hide elements at certain sizes:

```
@media (max-width: 640px) {
  .sidebar { display: none; }
  .mobile-menu { display: block; }
}

@media (min-width: 641px) {
  .mobile-menu { display: none; }
}
```

### 8. Orientation and Print

```
@media (orientation: portrait) {
  /* Phone held vertically */
}

@media (orientation: landscape) {
  /* Phone held horizontally */
}

@media print {
  /* Only when printing */
  .nav, .footer { display: none; }
  body { color: black; background: white; }
}
```

## Code Examples

### Responsive Card Grid (1/2/4 Columns)

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { font-family: Arial, sans-serif; background: #0f172a; color: white; padding: 20px; margin: 0; }
    h1 { text-align: center; color: #a855f7; }
    .grid { display: grid; gap: 16px; max-width: 1200px; margin: 0 auto; grid-template-columns: 1fr; }
    .card { padding: 24px; border-radius: 14px; color: white; font-weight: 600; }
    .c1 { background: linear-gradient(135deg, #a855f7, #ec4899); }
    .c2 { background: linear-gradient(135deg, #06b6d4, #0ea5e9); }
    .c3 { background: linear-gradient(135deg, #f59e0b, #ef4444); }
    .c4 { background: linear-gradient(135deg, #10b981, #06b6d4); }
    .c5 { background: linear-gradient(135deg, #8b5cf6, #3b82f6); }
    .c6 { background: linear-gradient(135deg, #ec4899, #f59e0b); }
    .c7 { background: linear-gradient(135deg, #f43f5e, #8b5cf6); }
    .c8 { background: linear-gradient(135deg, #14b8a6, #84cc16); }
    @media (min-width: 640px) {
      .grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (min-width: 1024px) {
      .grid { grid-template-columns: repeat(4, 1fr); }
    }
  </style>
</head>
<body>
  <h1>Responsive Card Grid</h1>
  <div class="grid">
    <div class="card c1"><h3>Aarav</h3><p>React Developer</p></div>
    <div class="card c2"><h3>Priya</h3><p>Designer</p></div>
    <div class="card c3"><h3>Rohan</h3><p>Backend Engineer</p></div>
    <div class="card c4"><h3>Ishita</h3><p>AI Researcher</p></div>
    <div class="card c5"><h3>Vivaan</h3><p>Game Developer</p></div>
    <div class="card c6"><h3>Anika</h3><p>Product Manager</p></div>
    <div class="card c7"><h3>Kabir</h3><p>DevOps Engineer</p></div>
    <div class="card c8"><h3>Meera</h3><p>Data Scientist</p></div>
  </div>
</body>
</html>
```

Mobile-first approach. Base style is 1 column. At 640px (tablet), it becomes 2 columns. At 1024px (desktop), 4 columns. Resize your browser window to see all three layouts. This is the bread-and-butter responsive pattern for team pages, product lists, and blog posts.

**Output:**

```
A grid of 8 colorful team cards. On phones: 1 column. On tablets: 2 columns. On desktops: 4 columns.
```

### Responsive Navbar with Hamburger Menu

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; }
    nav { background: #0f172a; color: white; padding: 16px 24px; display: flex; justify-content: space-between; align-items: center; position: relative; }
    nav .logo { font-size: 22px; font-weight: bold; color: #a855f7; }
    nav ul { list-style: none; display: flex; gap: 28px; }
    nav ul li a { color: white; text-decoration: none; font-size: 15px; }
    nav ul li a:hover { color: #a855f7; }
    .hamburger { display: none; background: none; border: none; color: white; font-size: 28px; cursor: pointer; }
    @media (max-width: 640px) {
      .hamburger { display: block; }
      nav ul {
        position: absolute;
        top: 100%; left: 0; right: 0;
        flex-direction: column;
        background: #1e293b;
        padding: 20px;
        gap: 16px;
        display: none;
      }
      nav ul.open { display: flex; }
    }
    main { padding: 40px 24px; }
  </style>
</head>
<body>
  <nav>
    <div class="logo">SkyBlog</div>
    <button class="hamburger" id="ham">&#9776;</button>
    <ul id="menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">Articles</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  <main>
    <h1>Welcome</h1>
    <p>Resize the browser below 640px to see the hamburger menu appear.</p>
  </main>
  <script>
    document.getElementById('ham').addEventListener('click', function() {
      document.getElementById('menu').classList.toggle('open');
    });
  </script>
</body>
</html>
```

On desktop, the nav shows inline links. On screens 640px or less, the links hide and a hamburger button appears. Clicking the hamburger toggles the menu with a CSS class. This is the standard responsive navbar pattern you see on almost every modern website.

**Output:**

```
A dark navbar with inline menu links on desktop. On phones, links collapse into a hamburger button that expands the menu on click.
```

### Fluid Typography with clamp() and vw

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #0f172a, #1e293b);
      color: white;
      margin: 0;
      padding: 40px 20px;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    h1 {
      font-size: clamp(2rem, 8vw, 6rem);
      background: linear-gradient(90deg, #a855f7, #06b6d4, #f59e0b);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 16px;
      text-align: center;
    }
    p {
      font-size: clamp(1rem, 2vw, 1.4rem);
      max-width: 60ch;
      line-height: 1.6;
      text-align: center;
      color: #cbd5e1;
    }
    .info {
      margin-top: 30px;
      padding: 14px 20px;
      background: rgba(168, 85, 247, 0.15);
      border-left: 4px solid #a855f7;
      border-radius: 6px;
      font-size: 14px;
      max-width: 500px;
    }
  </style>
</head>
<body>
  <h1>Fluid Typography</h1>
  <p>Resize your browser window. Notice how the heading smoothly grows and shrinks as the viewport changes. No breakpoints needed.</p>
  <div class="info">
    <strong>clamp(min, preferred, max)</strong> clamps the value between a minimum and maximum. <code>clamp(2rem, 8vw, 6rem)</code> means: never smaller than 2rem, never larger than 6rem, otherwise 8% of viewport width.
  </div>
</body>
</html>
```

`clamp(min, preferred, max)` is the modern way to build fluid typography. The heading scales between 2rem and 6rem based on viewport width, with no media queries needed. This replaces the old approach of writing 5+ breakpoints for different text sizes.

**Output:**

```
A full-screen page with a gradient heading that smoothly scales with the browser window width.
```

### Print Stylesheet

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; margin: 0; padding: 20px; }
    .container { max-width: 700px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
    nav { background: #0f172a; color: white; padding: 16px; border-radius: 8px; margin-bottom: 20px; }
    nav a { color: white; margin-right: 20px; text-decoration: none; }
    footer { margin-top: 30px; padding: 20px; background: #e2e8f0; text-align: center; font-size: 14px; border-radius: 8px; }
    .print-btn { padding: 10px 20px; background: #a855f7; color: white; border: none; border-radius: 6px; cursor: pointer; }
    h1 { color: #0f172a; }
    h2 { color: #a855f7; margin-top: 20px; }

    @media print {
      body { background: white; padding: 0; }
      .container { box-shadow: none; border-radius: 0; max-width: 100%; padding: 0; }
      nav, footer, .print-btn { display: none; }
      h1 { color: black; font-size: 24pt; }
      h2 { color: black; font-size: 16pt; }
      p { font-size: 12pt; color: black; line-height: 1.4; }
    }
  </style>
</head>
<body>
  <div class="container">
    <nav><a href="#">Home</a><a href="#">Articles</a><a href="#">About</a></nav>
    <h1>How to Make Biryani - by Chef Anika</h1>
    <button class="print-btn" onclick="window.print()">Print this Recipe</button>
    <h2>Ingredients</h2>
    <p>Basmati rice, chicken, yogurt, ginger-garlic paste, saffron, biryani masala, onions, mint, and coriander.</p>
    <h2>Steps</h2>
    <p>Marinate the chicken for 30 minutes. Parboil the rice. Layer them in a heavy pot and cook on low heat for 25 minutes.</p>
    <footer>Copyright 2026 Anika's Kitchen</footer>
  </div>
</body>
</html>
```

Press Ctrl+P (or Cmd+P) and you will see the print preview. The print stylesheet hides the nav, footer, and print button, converts colors to black on white, and removes decorations. This creates a clean, paper-friendly version. Use `pt` units for print instead of px.

**Output:**

```
A recipe page with a nav, article, and footer. When printed, only the article content appears in black on white paper.
```

### Landing Page Hero with Responsive Layout

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; background: #0f172a; color: white; }
    .hero { padding: 60px 24px; max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 40px; align-items: center; }
    .hero-text { text-align: center; }
    .hero-text h1 { font-size: clamp(2rem, 6vw, 4rem); line-height: 1.1; margin-bottom: 16px; background: linear-gradient(90deg, #a855f7, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .hero-text p { font-size: clamp(1rem, 2vw, 1.2rem); color: #cbd5e1; max-width: 600px; line-height: 1.5; }
    .hero-text .btn { display: inline-block; margin-top: 24px; padding: 14px 28px; background: #a855f7; color: white; border-radius: 8px; text-decoration: none; font-weight: 600; }
    .hero-visual { width: 100%; max-width: 420px; aspect-ratio: 1; border-radius: 20px; background: linear-gradient(135deg, #7c3aed, #ec4899, #f59e0b); box-shadow: 0 30px 60px rgba(168, 85, 247, 0.35); display: flex; align-items: center; justify-content: center; font-size: clamp(2rem, 5vw, 3.5rem); font-weight: bold; }
    @media (min-width: 900px) {
      .hero { flex-direction: row; gap: 60px; }
      .hero-text { text-align: left; flex: 1; }
      .hero-text p { margin-left: 0; }
    }
  </style>
</head>
<body>
  <section class="hero">
    <div class="hero-text">
      <h1>Learn to Code. Build the Future.</h1>
      <p>Join Aarav, Priya, and 10,000 other young coders building real apps, games, and websites with guided mentorship.</p>
      <a href="#" class="btn">Start Free Trial</a>
    </div>
    <div class="hero-visual">Code</div>
  </section>
</body>
</html>
```

A classic hero layout. On phones and tablets, text sits on top of a centered visual (column layout). On screens 900px and wider, they sit side by side (row layout). Fluid typography with `clamp()` scales the heading smoothly throughout. No fixed pixel font sizes anywhere.

**Output:**

```
A landing page hero. On small screens: text above, visual below, centered. On wide screens: text on left, visual on right, side by side.
```

### Dark Mode with prefers-color-scheme

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    :root {
      --bg: #ffffff;
      --text: #0f172a;
      --card: #f8fafc;
      --border: #e5e7eb;
      --primary: #a855f7;
    }
    @media (prefers-color-scheme: dark) {
      :root {
        --bg: #0f172a;
        --text: #f1f5f9;
        --card: #1e293b;
        --border: #334155;
        --primary: #a855f7;
      }
    }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: Arial, sans-serif;
      padding: 30px 20px;
      margin: 0;
      transition: background 0.3s, color 0.3s;
    }
    .container { max-width: 600px; margin: 0 auto; }
    .card { background: var(--card); border: 1px solid var(--border); padding: 24px; border-radius: 12px; margin: 16px 0; }
    h1 { color: var(--primary); }
    .hint { font-size: 13px; opacity: 0.7; margin-top: 16px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Automatic Dark Mode</h1>
    <div class="card">
      <h3>Rohan's Notes</h3>
      <p>This page uses CSS variables and <code>@media (prefers-color-scheme: dark)</code> to automatically switch themes based on your operating system settings.</p>
    </div>
    <div class="card">
      <h3>How It Works</h3>
      <p>If your OS is set to dark mode, the dark variables override the light ones. No JavaScript needed.</p>
    </div>
    <p class="hint">Tip: Change your OS theme to dark mode and reload. The page will switch automatically.</p>
  </div>
</body>
</html>
```

`@media (prefers-color-scheme: dark)` detects the user's OS theme preference. CSS variables get redefined inside that media query. The whole page switches themes automatically — no button, no JavaScript. This is the most elegant dark mode implementation possible.

**Output:**

```
A page that displays in light mode or dark mode depending on your OS setting. No button needed.
```

## Common Mistakes

### Forgetting the Viewport Meta Tag

**Wrong:**

```
<!-- Missing viewport meta! -->
<head>
  <title>My Site</title>
</head>
```

On mobile devices, the browser renders the site at a default 980px width and scales it down, making text tiny. Media queries may not even trigger correctly.

**Correct:**

```
<head>
  <title>My Site</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
```

The viewport meta tag tells mobile browsers to use the actual device width. Without it, your entire responsive design is broken on phones. This ONE line must be in every responsive HTML file.

### Using Fixed Pixel Widths Everywhere

**Wrong:**

```
.container {
  width: 1200px;
}
/* Horizontal scroll on any screen narrower than 1200px */
```

The container is always exactly 1200px wide. On smaller screens, it overflows and creates horizontal scrolling, which is a cardinal sin in responsive design.

**Correct:**

```
.container {
  max-width: 1200px;   /* Cap, not force */
  width: 100%;          /* Fill available space up to cap */
  margin: 0 auto;       /* Center horizontally */
  padding: 0 20px;      /* Breathing room on small screens */
}
```

Use `max-width` instead of `width` for containers. This means 'up to 1200px, but shrink on smaller screens'. Combined with `margin: 0 auto` it centers the content beautifully.

### Images That Overflow

**Wrong:**

```
img {
  /* No rules — uses natural pixel size */
}
/* A 2000px wide image breaks every mobile layout */
```

Images display at their native pixel size, which overflows narrow containers and causes horizontal scroll. The page becomes unusable on phones.

**Correct:**

```
img {
  max-width: 100%;
  height: auto;
}
```

`max-width: 100%` caps the image at the width of its parent. `height: auto` keeps the aspect ratio correct. Add this to every responsive site as a default.

### Media Query Order Matters

**Wrong:**

```
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(4, 1fr); }
}
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
/* On a 1200px screen, the 2-column rule overrides the 4-column rule */
```

On desktop, the 2-column rule comes AFTER the 4-column rule and wins the cascade. You see 2 columns instead of 4.

**Correct:**

```
/* Mobile-first: smallest breakpoint first */
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(4, 1fr); }
}
```

With `min-width` media queries, write them from smallest to largest. Later rules override earlier ones, so the largest breakpoint ends up winning on large screens. Reverse the order for `max-width` queries.

## Summary

- Every responsive site MUST start with `` in the head. Without it, mobile browsers scale your desktop design down and nothing works properly.
- Media queries use the syntax `@media (condition) { ... }`. Common conditions: min-width, max-width, orientation, prefers-color-scheme, print.
- Mobile-first means writing base CSS for mobile and using `min-width` queries to progressively add larger-screen styles. This is the preferred modern approach.
- Common breakpoints: 640px (phablet), 768px (tablet), 1024px (small laptop), 1280px (desktop). But pick breakpoints based on where YOUR content breaks, not specific devices.
- Use relative units: `rem` for font sizes, `%` and `fr` for widths, `vw`/`vh` for viewport-relative sizes. Avoid fixed pixel sizes for layout dimensions.
- Fluid images: `img { max-width: 100%; height: auto; }`. One rule that makes every image fit any container.
- `clamp(min, preferred, max)` creates fluid typography that scales smoothly between limits — no breakpoints needed.
- Use `display: none` and `display: block` inside media queries to show and hide elements at different breakpoints (like swapping a desktop nav for a hamburger menu on mobile).
- `@media (prefers-color-scheme: dark)` detects the user's OS theme for automatic dark mode.
- Always order min-width media queries from smallest to largest. The later rules override earlier ones, so the desktop rules must come last.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/html-and-css/responsive-design-and-media-queries/*
*Practice questions: https://learn.modernagecoders.com/resources/html-and-css/responsive-design-and-media-queries/practice/*
