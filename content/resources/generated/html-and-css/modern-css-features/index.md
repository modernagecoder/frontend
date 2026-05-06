---
title: "Modern CSS 2026 - Container Queries, Subgrid, clamp, :has, aspect-ratio | Modern Age Coders"
description: "Master the latest CSS features: @container queries, subgrid, clamp() fluid typography, aspect-ratio, :has() parent selector, color-mix(), logical properties, scroll-snap, and text-wrap: balance. 56+ practice questions."
slug: modern-css-features
canonical: https://learn.modernagecoders.com/resources/html-and-css/modern-css-features/
category: "HTML and CSS"
keywords: ["container queries css", "subgrid css", "clamp css", "aspect-ratio css", ":has css selector", "color-mix css", "logical properties css", "scroll-snap css", "text-wrap balance", "modern css 2026"]
---
# Modern CSS - Container Queries, Subgrid, clamp(), :has() Selector

**Difficulty:** Advanced  
**Reading time:** 55 min  
**Chapter:** 23  
**Practice questions:** 56

## What Is Modern CSS?

In the last 3 years, CSS has had the biggest wave of new features since Grid and Flexbox. Problems that used to require JavaScript, media queries, or clever hacks can now be solved with one CSS line. This chapter is a guided tour of the most important features that shipped in every major browser between 2022 and 2026.

You will learn:

- **Container queries** - style an element based on its container's size, not the viewport
- **Subgrid** - let nested grid items align to the parent grid's tracks
- **clamp()** - fluid values that scale between a min and max
- **aspect-ratio** - lock an element's width-to-height ratio (no more padding hacks)
- **:has()** - the parent selector (finally!)
- **Logical properties** - margin-inline, padding-block for RTL-friendly code
- **accent-color** - theme form controls with one property
- **color-mix()** - blend two colors in CSS
- **:focus-visible** - focus rings only for keyboard users
- **scroll-snap** - carousels and galleries without JavaScript
- **text-wrap: balance** - beautifully wrapped headings

These are not experimental - they work in every browser you need to support. If you are building a new site in 2026, use them.

## Why Learn Modern CSS?

### 1. Less JavaScript, Smaller Bundles

Container queries replace resize-observer code. `:has()` replaces 'add class on click' logic. `scroll-snap` replaces carousel libraries. Every feature in this chapter removes code you would otherwise have to write and maintain in JavaScript.

### 2. Truly Component-Based Responsive Design

Media queries respond to the viewport — but a card in a sidebar does not know about the viewport. It knows about its sidebar. Container queries let components respond to THEIR container, so the same card looks right whether it is in a wide hero or a narrow column. This is the missing piece for component-driven design systems.

### 3. Fluid Interfaces with Zero Breakpoints

`clamp(min, preferred, max)` gives you fluid typography and spacing that scales smoothly from mobile to desktop without any breakpoints. Aarav's whole site uses `font-size: clamp(16px, 2vw, 24px)` and looks perfect at every size.

### 4. Better Accessibility Out of the Box

`:focus-visible` gets focus rings right without JavaScript. Logical properties work correctly in right-to-left languages like Arabic and Hebrew. `aspect-ratio` prevents layout shift when images load. Modern CSS bakes accessibility into the platform.

### 5. Beautiful Typography for Free

`text-wrap: balance` automatically rebalances a heading so it does not end with a single orphan word. `text-wrap: pretty` improves long paragraphs. One property, beautiful output, no manual line breaks.

## Deep Dive into Modern CSS Features

### 1. Container Queries

Container queries let you style an element based on its *container's* size rather than the viewport. First, mark an element as a container with `container-type`, then use `@container` to write queries.

```
.sidebar {
  container-type: inline-size;
  container-name: sidebar;
}

.card {
  display: block;
}

@container sidebar (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 16px;
  }
}
```

When the `.sidebar` becomes at least 400px wide, the card inside it switches from stacked to a horizontal layout. The viewport is irrelevant — it is the container that matters.

**container-type values:**

- `inline-size` - queries based on width (most common)
- `size` - queries based on both width and height
- `normal` - not a container (default)

### 2. Subgrid

Normally, nested grids have their own independent tracks. `grid-template-columns: subgrid` makes the child grid use the parent's tracks instead. This solves the classic problem of aligning items across cards.

```
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  display: grid;
  grid-template-rows: subgrid; /* inherit parent rows */
  grid-row: span 3;
}
/* Every card's title, body, and footer line up perfectly
   across the whole row, even if content lengths differ. */
```

### 3. clamp() for Fluid Values

`clamp(min, preferred, max)` returns the preferred value, but never less than min or more than max. It is perfect for fluid typography:

```
h1 {
  /* Between 28px and 56px, scaling with viewport */
  font-size: clamp(28px, 5vw, 56px);
}

.container {
  /* Padding that grows with the screen */
  padding: clamp(16px, 5%, 48px);
}
```

On a 400px-wide phone, `5vw = 20px`, so the font is 28px (clamped to min). On a 1200px-wide desktop, `5vw = 60px`, so the font is 56px (clamped to max). In between, it scales smoothly.

### 4. aspect-ratio

Locking the width-to-height ratio of an element used to require the padding-top hack. Now it is one property:

```
.video-wrapper {
  aspect-ratio: 16 / 9;
  width: 100%;
}

.avatar {
  aspect-ratio: 1;  /* square */
  width: 60px;
}
```

No more layout shift when images load. Set width or height and the other dimension follows automatically.

### 5. The :has() Parent Selector

CSS finally has a parent selector. `:has()` matches an element based on its descendants.

```
/* Style a card that contains an image */
.card:has(img) {
  padding: 0;
}

/* Turn a form red if any input is invalid */
form:has(input:invalid) {
  border-left: 4px solid red;
}

/* Highlight a label that contains a checked checkbox */
label:has(:checked) {
  background: #a855f7;
  color: white;
}

/* Dim the body when a modal is open */
body:has(.modal[open]) {
  overflow: hidden;
}
```

Hundreds of patterns that used to require JavaScript are now one CSS rule.

### 6. Logical Properties

CSS had `margin-left` and `margin-right` — but what is 'left' in Arabic, which reads right-to-left? Logical properties use 'inline' (the reading direction) and 'block' (the flow direction) instead.

```
.card {
  margin-inline: 24px;       /* left + right (or right + left in RTL) */
  margin-block: 16px;        /* top + bottom */
  padding-inline-start: 12px; /* left in LTR, right in RTL */
  border-inline-end: 2px solid purple;
}
```

Write your CSS once and it works correctly in every writing direction.

### 7. accent-color

Theme checkboxes, radios, range sliders, and progress bars with one property:

```
:root { accent-color: #7c3aed; }

/* All form controls now use your brand color */
input[type="checkbox"] { /* ... */ }
input[type="radio"]    { /* ... */ }
input[type="range"]    { /* ... */ }
progress               { /* ... */ }
```

### 8. color-mix()

Blend two colors in CSS. Perfect for hover states and theme variants:

```
.btn {
  background: #7c3aed;
}
.btn:hover {
  /* 80% of the primary + 20% black = darker variant */
  background: color-mix(in oklab, #7c3aed 80%, black);
}

/* Or mix a brand color with the surface color */
.accent-bg {
  background: color-mix(in oklab, var(--brand), white 85%);
}
```

### 9. :focus-visible

Show focus rings only for keyboard users, not mouse clicks:

```
button:focus { outline: none; }
button:focus-visible {
  outline: 2px solid #06b6d4;
  outline-offset: 2px;
}
```

### 10. scroll-snap for Carousels

Build a carousel with pure CSS scrolling that 'snaps' to each card:

```
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
  padding: 16px;
}
.slide {
  flex: 0 0 80%;
  scroll-snap-align: center;
  aspect-ratio: 16/9;
}
```

No JavaScript library needed. The browser handles momentum scrolling and snap-to-center.

### 11. text-wrap: balance and pretty

```
h1, h2, h3 {
  text-wrap: balance;
  /* Distributes words evenly across lines */
}

p {
  text-wrap: pretty;
  /* Avoids orphans in long text */
}
```

Headings stop ending with a single word on the last line. Paragraphs stop leaving one word alone. Beautiful typography in two lines.

### 12. dvh, svh, lvh (Dynamic Viewport Units)

On mobile, the address bar appears and disappears, changing the viewport. `100vh` breaks because it assumes the toolbar is hidden. Use the new units:

```
.hero {
  min-height: 100dvh; /* dynamic - adjusts as toolbars show/hide */
  /* svh = small (with toolbars), lvh = large (without) */
}
```

## Code Examples

### Container Query: Card That Adapts to Its Container

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', sans-serif; background: #f1f5f9; padding: 24px; display: grid; gap: 24px; grid-template-columns: 1fr 2fr; }
    .column {
      background: white;
      padding: 20px;
      border-radius: 14px;
      container-type: inline-size;
      box-shadow: 0 4px 14px rgba(0,0,0,0.06);
    }
    .column h2 { color: #7c3aed; margin-bottom: 12px; font-size: 18px; }

    .card {
      background: #faf5ff;
      border: 1px solid #e9d5ff;
      border-radius: 12px;
      padding: 16px;
      margin-top: 12px;
    }
    .card img {
      width: 100%;
      aspect-ratio: 16/9;
      object-fit: cover;
      background: linear-gradient(135deg, #a855f7, #ec4899);
      border-radius: 8px;
    }
    .card h3 { color: #0f172a; margin: 12px 0 6px; font-size: 17px; }
    .card p { color: #64748b; font-size: 14px; line-height: 1.5; }

    /* When the container is wide enough, use a horizontal layout */
    @container (min-width: 380px) {
      .card {
        display: grid;
        grid-template-columns: 140px 1fr;
        gap: 16px;
        align-items: center;
      }
      .card img {
        aspect-ratio: 1;
        margin: 0;
      }
    }
  </style>
</head>
<body>
  <div class="column">
    <h2>Narrow column</h2>
    <div class="card">
      <img alt="">
      <h3>Aarav's Blog Post</h3>
      <p>This column is narrow, so the card stacks vertically.</p>
    </div>
  </div>

  <div class="column">
    <h2>Wide column</h2>
    <div class="card">
      <img alt="">
      <h3>Priya's Blog Post</h3>
      <p>Same card, same HTML, same CSS. But because this column is wider, the container query kicks in and the card becomes horizontal.</p>
    </div>
  </div>
</body>
</html>
```

Each `.column` is marked as a container with `container-type: inline-size`. The `.card` inside has a default vertical layout, but when its container is at least 380px wide, a container query switches it to a horizontal layout. The SAME card, the SAME CSS — but it adapts to its container, not the viewport.

**Output:**

```
Two cards side by side. The narrow left card stacks the image above the text. The wider right card places the image beside the text, even though both use the exact same markup and CSS classes.
```

### Fluid Typography with clamp()

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', sans-serif; background: #0f172a; color: #f1f5f9; min-height: 100vh; }
    .hero {
      padding: clamp(32px, 8vw, 96px) clamp(16px, 6vw, 64px);
      text-align: center;
    }
    .hero h1 {
      font-size: clamp(32px, 6vw, 72px);
      line-height: 1.1;
      margin-bottom: clamp(12px, 2vw, 24px);
      background: linear-gradient(135deg, #a855f7, #06b6d4);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      text-wrap: balance;
      max-width: 900px;
      margin-left: auto;
      margin-right: auto;
    }
    .hero p {
      font-size: clamp(16px, 2vw, 22px);
      color: #94a3b8;
      max-width: 720px;
      margin: 0 auto clamp(20px, 3vw, 40px);
      line-height: 1.6;
      text-wrap: pretty;
    }
    .cta {
      display: inline-block;
      padding: clamp(12px, 1.5vw, 18px) clamp(24px, 3vw, 40px);
      background: linear-gradient(135deg, #7c3aed, #db2777);
      color: white;
      font-size: clamp(14px, 1.4vw, 18px);
      font-weight: 700;
      border-radius: 999px;
      text-decoration: none;
      box-shadow: 0 15px 40px rgba(124, 58, 237, 0.35);
    }
  </style>
</head>
<body>
  <section class="hero">
    <h1>Fluid Typography Without a Single Media Query</h1>
    <p>Every font size and padding value on this page uses clamp(). Resize the browser window and watch everything scale smoothly - no breakpoints, no jumps. Ishita built her whole portfolio this way.</p>
    <a href="#" class="cta">See How It Works</a>
  </section>
</body>
</html>
```

Every size on the page — padding, font size, margin — uses `clamp(min, preferred, max)`. On a phone, values stay at the minimum. On a desktop, they reach the maximum. In between, they scale linearly with the viewport. Zero media queries. `text-wrap: balance` on the heading distributes the words evenly.

**Output:**

```
A beautiful hero with a large gradient heading, subtitle, and call-to-action button. Resizing the browser smoothly scales everything from phone to desktop sizes without any sudden jumps.
```

### :has() to Disable Submit on Invalid Form

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', sans-serif; background: #f8fafc; padding: 40px; display: flex; justify-content: center; }
    form {
      background: white;
      padding: 32px;
      border-radius: 16px;
      max-width: 420px;
      width: 100%;
      box-shadow: 0 10px 30px rgba(0,0,0,0.08);
      border: 3px solid transparent;
      transition: border-color 0.3s;
    }
    /* Parent selector: turn form red when any input is invalid */
    form:has(input:invalid) {
      border-color: #fecaca;
    }
    /* All inputs valid? turn green */
    form:has(input:valid):not(:has(input:invalid)) {
      border-color: #86efac;
    }
    form h2 { color: #0f172a; margin-bottom: 20px; }
    label { display: block; margin-bottom: 16px; font-size: 13px; color: #475569; }
    input {
      display: block; width: 100%; padding: 12px;
      margin-top: 6px; border: 2px solid #e2e8f0;
      border-radius: 8px; font-size: 15px; outline: none;
      transition: border-color 0.2s;
    }
    input:focus { border-color: #7c3aed; }
    input:not(:placeholder-shown):valid { border-color: #10b981; }
    input:not(:placeholder-shown):invalid { border-color: #ef4444; }
    button {
      width: 100%; padding: 12px;
      background: #7c3aed; color: white;
      border: none; border-radius: 8px;
      font-size: 16px; font-weight: 600;
      cursor: pointer; transition: opacity 0.2s;
    }
    /* Disable the button while any input is invalid */
    form:has(input:invalid) button {
      opacity: 0.35;
      pointer-events: none;
    }
    .status { margin-top: 12px; text-align: center; font-size: 14px; color: #64748b; }
    form:has(input:invalid) .status::before { content: 'Some fields need attention'; color: #ef4444; }
    form:has(input:valid):not(:has(input:invalid)) .status::before { content: 'All fields look great!'; color: #10b981; }
  </style>
</head>
<body>
  <form>
    <h2>Rohan's Sign Up</h2>
    <label>Name<input type="text" placeholder="Your name" minlength="2" required></label>
    <label>Email<input type="email" placeholder="you@example.com" required></label>
    <label>Age<input type="number" placeholder="10 to 18" min="10" max="18" required></label>
    <button type="submit">Create Account</button>
    <p class="status"></p>
  </form>
</body>
</html>
```

`:has()` walks up from any invalid input to the form and styles the form (red border, disabled button, warning message). When every input is valid, `form:has(input:valid):not(:has(input:invalid))` matches and the form turns green. Pure CSS reactive form state — something that used to need JavaScript.

**Output:**

```
A signup form that turns pink/red while any field is invalid and green once all fields are valid. The submit button is disabled while invalid, and a status message updates automatically.
```

### CSS-Only Carousel with scroll-snap

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', sans-serif; background: #0f172a; color: white; padding: 40px 0; }
    h1 { text-align: center; color: #a855f7; margin-bottom: 24px; font-size: clamp(24px, 3vw, 40px); }
    .carousel {
      display: flex;
      gap: 16px;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scroll-padding: 24px;
      padding: 16px 24px 32px;
      scrollbar-width: thin;
      scrollbar-color: #a855f7 #1e293b;
    }
    .slide {
      flex: 0 0 85%;
      max-width: 500px;
      aspect-ratio: 16/10;
      scroll-snap-align: center;
      border-radius: 18px;
      padding: 28px;
      color: white;
      font-weight: 700;
      font-size: 22px;
      display: flex;
      align-items: flex-end;
      box-shadow: 0 20px 50px rgba(0,0,0,0.4);
    }
    .slide:nth-child(1) { background: linear-gradient(135deg, #7c3aed, #ec4899); }
    .slide:nth-child(2) { background: linear-gradient(135deg, #06b6d4, #0ea5e9); }
    .slide:nth-child(3) { background: linear-gradient(135deg, #f59e0b, #ef4444); }
    .slide:nth-child(4) { background: linear-gradient(135deg, #10b981, #06b6d4); }
    .slide:nth-child(5) { background: linear-gradient(135deg, #8b5cf6, #3b82f6); }
    @media (min-width: 700px) {
      .slide { flex: 0 0 60%; }
    }
  </style>
</head>
<body>
  <h1>Vivaan's Projects</h1>
  <div class="carousel">
    <div class="slide">Quiz App</div>
    <div class="slide">Weather Dashboard</div>
    <div class="slide">To-Do List</div>
    <div class="slide">Blog Engine</div>
    <div class="slide">Calculator</div>
  </div>
</body>
</html>
```

A horizontal scrolling carousel made with `scroll-snap-type: x mandatory` on the container and `scroll-snap-align: center` on each slide. The browser handles smooth scrolling and snaps each slide to the center when the user stops dragging. No JavaScript, no libraries, no swipe gestures to write.

**Output:**

```
A horizontal carousel of 5 colorful gradient slides. Scrolling with the mouse wheel, touch, or trackpad smoothly snaps each slide to the center of the viewport.
```

### aspect-ratio and color-mix() Color Palette

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      --brand: #7c3aed;
      --surface: #ffffff;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', sans-serif; background: #f8fafc; padding: clamp(24px, 5vw, 64px); }
    h1 { color: var(--brand); margin-bottom: 24px; text-align: center; font-size: clamp(24px, 3vw, 36px); text-wrap: balance; }
    .palette {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 16px;
      max-width: 900px;
      margin: 0 auto;
    }
    .swatch {
      aspect-ratio: 1;
      border-radius: 16px;
      padding: 16px;
      color: white;
      font-weight: 700;
      font-size: 13px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    }
    .swatch span { font-size: 11px; font-weight: 400; opacity: 0.9; }

    .s1 { background: var(--brand); }
    .s2 { background: color-mix(in oklab, var(--brand) 80%, white); }
    .s3 { background: color-mix(in oklab, var(--brand) 60%, white); }
    .s4 { background: color-mix(in oklab, var(--brand) 40%, white); color: #4c1d95; }
    .s5 { background: color-mix(in oklab, var(--brand) 20%, white); color: #4c1d95; }
    .s6 { background: color-mix(in oklab, var(--brand) 80%, black); }
    .s7 { background: color-mix(in oklab, var(--brand) 60%, black); }
    .s8 { background: color-mix(in oklab, var(--brand), #06b6d4); }
  </style>
</head>
<body>
  <h1>Kavya's Generated Color Palette</h1>
  <div class="palette">
    <div class="swatch s1">Brand<span>100%</span></div>
    <div class="swatch s2">Tint 80<span>+ white 20</span></div>
    <div class="swatch s3">Tint 60<span>+ white 40</span></div>
    <div class="swatch s4">Tint 40<span>+ white 60</span></div>
    <div class="swatch s5">Tint 20<span>+ white 80</span></div>
    <div class="swatch s6">Shade 80<span>+ black 20</span></div>
    <div class="swatch s7">Shade 60<span>+ black 40</span></div>
    <div class="swatch s8">Mix<span>+ cyan</span></div>
  </div>
</body>
</html>
```

`color-mix(in oklab, color1 X%, color2)` blends two colors. By mixing the brand color with white and black in different ratios, we generate a full tint-and-shade palette without a design tool. Every swatch is a perfect square thanks to `aspect-ratio: 1`.

**Output:**

```
A grid of perfectly square color swatches generated entirely from a single brand color. Light tints in the top rows, darker shades below, and a blended accent color at the end.
```

### Subgrid for Aligned Card Layout

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', sans-serif; background: #f1f5f9; padding: 40px 24px; }
    h1 { text-align: center; color: #7c3aed; margin-bottom: 24px; font-size: 32px; }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto auto auto auto;
      gap: 20px;
      max-width: 1000px;
      margin: 0 auto;
    }
    .card {
      display: grid;
      grid-row: span 4;
      grid-template-rows: subgrid;
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.08);
      transition: transform 0.2s;
    }
    .card:hover { transform: translateY(-4px); }
    .card .img {
      aspect-ratio: 16/9;
      border-radius: 10px;
      margin-bottom: 12px;
    }
    .card h3 { color: #0f172a; font-size: 18px; margin-bottom: 8px; }
    .card p { color: #64748b; font-size: 14px; line-height: 1.5; }
    .card .meta { color: #7c3aed; font-size: 12px; font-weight: 600; margin-top: 12px; }
    .c1 .img { background: linear-gradient(135deg, #a855f7, #ec4899); }
    .c2 .img { background: linear-gradient(135deg, #06b6d4, #0ea5e9); }
    .c3 .img { background: linear-gradient(135deg, #f59e0b, #ef4444); }
    @media (max-width: 800px) {
      .grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <h1>Anika's Blog Grid</h1>
  <div class="grid">
    <div class="card c1">
      <div class="img"></div>
      <h3>Learning CSS Grid</h3>
      <p>My short take on why Grid changed everything for frontend work.</p>
      <div class="meta">3 min read</div>
    </div>
    <div class="card c2">
      <h3>Subgrid Finally Arrived</h3>
      <p>A deep dive on subgrid and why it fixes the last missing piece. This post has a longer description because I got excited while writing it.</p>
      <div class="meta">8 min read</div>
      <div class="img"></div>
    </div>
    <div class="card c3">
      <div class="img"></div>
      <h3>Container Queries in Practice</h3>
      <p>Rebuilding my card component without a single media query.</p>
      <div class="meta">5 min read</div>
    </div>
  </div>
</body>
</html>
```

The outer grid defines four rows shared by all cards. Each card uses `grid-template-rows: subgrid` so its children (image, title, paragraph, meta) snap to the parent grid's rows. The result: titles align across cards even when image positions or text lengths differ. This is the classic 'card alignment' problem finally solved in pure CSS.

**Output:**

```
Three blog cards with images, titles, descriptions, and meta info. All titles sit at the same vertical position, all meta lines line up at the bottom - even though the middle card has different content order and length.
```

## Common Mistakes

### Forgetting container-type Before Using @container

**Wrong:**

```
.sidebar { /* no container-type */ }

@container (min-width: 400px) {
  .card { display: grid; }
}
```

The container query does nothing because no element has been marked as a container. The browser ignores the @container rule.

**Correct:**

```
.sidebar {
  container-type: inline-size;
  /* Now it is a container, and queries work */
}

@container (min-width: 400px) {
  .card { display: grid; }
}
```

Container queries require you to declare which element is the container using `container-type`. Without it, there is nothing for the query to match against.

### Using vh on Mobile Causing Layout Jumps

**Wrong:**

```
.hero {
  min-height: 100vh;
  /* On mobile, this is the viewport WITHOUT the toolbar
     which causes content to be cut off or jump when the
     toolbar appears/disappears */
}
```

On mobile, the address bar shows and hides as the user scrolls. `100vh` does not account for this, causing layout shifts and cut-off content.

**Correct:**

```
.hero {
  min-height: 100dvh;
  /* dvh = dynamic viewport height, updates as toolbars show/hide */
  /* Fallback for old browsers: */
  min-height: 100vh;
  min-height: 100dvh;
}
```

Use `100dvh` (dynamic viewport height) instead of `100vh` for full-screen sections. It adjusts correctly as mobile browser toolbars show and hide. Keep `100vh` as a fallback for old browsers.

### Expecting clamp() Arguments in Any Order

**Wrong:**

```
h1 {
  font-size: clamp(5vw, 32px, 60px);
  /* Arguments in wrong order!
     The first is min, second is preferred, third is max */
}
```

The argument order is wrong. `clamp(min, preferred, max)` — first is the lower bound, second is the fluid value, third is the upper bound.

**Correct:**

```
h1 {
  font-size: clamp(32px, 5vw, 60px);
  /* Min 32px, prefers 5vw, max 60px */
}
```

Memorize: `clamp(min, preferred, max)`. The preferred value is the one that scales with the viewport (like `5vw`), and it is clamped between the min and max. Getting the order wrong often 'works' but at unexpected sizes.

### Using :has() Inside :has() Unnecessarily

**Wrong:**

```
body:has(form:has(input:invalid)) {
  background: #fef2f2;
}
/* Nested :has() is usually overkill */
```

Nested :has() is slower and harder to read. In most cases a single :has() is enough.

**Correct:**

```
body:has(input:invalid) {
  background: #fef2f2;
}
/* :has() already walks the whole descendant tree */
```

`:has(input:invalid)` already looks at all descendants. You rarely need to nest it. Nested :has() can be slower and is harder to read. Use the simplest form that matches your intent.

## Summary

- Container queries (`container-type: inline-size` + `@container`) let you style a component based on its CONTAINER's size, not the viewport. This is the piece missing for true component-driven responsive design.
- Subgrid (`grid-template-rows: subgrid` or `grid-template-columns: subgrid`) makes a nested grid's children align to the PARENT grid's tracks. Use it to align titles, images, and footers perfectly across a row of cards.
- `clamp(min, preferred, max)` is the fluid value superpower. Use it for typography, padding, margins, and gap values to get smooth scaling between phone and desktop sizes without a single media query.
- `aspect-ratio: 16/9` locks an element's width-to-height ratio. No more padding-top hacks. No more layout shift when images load. Just set one dimension and the other follows.
- `:has()` is the long-awaited CSS parent selector. It lets you style an element based on what it contains: `.card:has(img)`, `form:has(:invalid)`, `label:has(:checked)`. Replaces huge amounts of JavaScript class-toggling.
- Logical properties (`margin-inline`, `padding-block`, `border-inline-start`) use 'reading direction' instead of 'left/right', so your CSS works correctly in right-to-left languages too.
- `accent-color` themes checkboxes, radios, range sliders, and progress bars in one property. `color-mix(in oklab, color 80%, white)` blends colors to generate tints, shades, and hover variants from a single brand color.
- `:focus-visible` shows focus rings only when the user is navigating with the keyboard, keeping the UI clean for mouse users without breaking accessibility.
- `scroll-snap-type` and `scroll-snap-align` build native carousels and galleries with zero JavaScript. The browser handles smooth scrolling and snap-to-center.
- `text-wrap: balance` balances the lines of a heading so it does not end with an orphan word. `text-wrap: pretty` does the same for paragraphs. Beautiful typography in one property.
- `100dvh` (dynamic viewport height) replaces `100vh` on mobile, accounting for the address bar showing and hiding. Prevents layout jumps on scroll.

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/html-and-css/modern-css-features/*
*Practice questions: https://learn.modernagecoders.com/resources/html-and-css/modern-css-features/practice/*
