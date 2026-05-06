---
title: "CSS Flexbox Complete Guide - display: flex, justify-content, align-items, gap, flex-wrap | Modern Age Coders"
description: "Master CSS Flexbox. Learn display: flex, flex-direction, justify-content, align-items, flex-wrap, gap, flex-grow, flex-shrink, flex-basis, order, align-self. Build responsive navbars, card grids, pricing tables, and perfectly centered layouts. 62+ practice questions."
slug: flexbox-complete-guide
canonical: https://learn.modernagecoders.com/resources/html-and-css/flexbox-complete-guide
category: "HTML and CSS"
keywords: ["css flexbox", "display flex", "justify-content", "align-items", "flex-direction", "flex-wrap", "gap css", "flex-grow", "flex-basis", "responsive navbar flexbox"]
---
# Flexbox - The Complete Guide

**Difficulty:** Intermediate  
**Reading time:** 45 min  
**Chapter:** 15  
**Practice questions:** 62

## What Is Flexbox?

Flexbox (Flexible Box Layout) is a CSS layout system designed to arrange items in a single row or column. With one line -- `display: flex` -- a container's direct children become flex items that you can align, distribute, wrap, and order with a handful of intuitive properties.

Before flexbox, centering a div was a running joke. With flexbox, it is two lines. Navbars, card grids, pricing tables, form layouts, sidebar + content layouts -- all become dramatically simpler. Flexbox is arguably the single most important CSS feature of the last 15 years.

```
.container {
  display: flex;
  justify-content: center;  /* horizontal centering */
  align-items: center;      /* vertical centering */
}
/* Any children are now perfectly centered. Done. */
```

## Why Is Flexbox So Important?

### 1. It Solves Layout Problems That Used to Be Painful

Centering a div was hard. Equal-height columns were hard. Spacing items evenly was hard. Building a responsive navbar was hard. Flexbox makes all of these trivial. A few properties replace hundreds of lines of float hacks and table tricks.

### 2. Every Modern Website Uses It

Open any modern website in DevTools. You will see `display: flex` everywhere -- navbars, buttons, form groups, card layouts, section headers. Flexbox is the default layout tool for one-dimensional arrangements.

### 3. It Is Responsive by Default

Flex items automatically adjust to available space. Add `flex-wrap: wrap` and they flow onto new rows when the container gets narrow. Combined with `flex: 1`, you get responsive layouts with almost no effort.

### 4. It Makes CSS Fun Again

Once you understand flexbox, layout becomes intuitive. You stop fighting CSS and start actually designing. This is the chapter where CSS clicks for most learners.

## Detailed Explanation

### 1. Flex Container vs Flex Items

Apply `display: flex` to a PARENT element. The parent becomes a flex container. Its DIRECT children become flex items. Flexbox properties are split into two groups:

- **Container properties**: flex-direction, justify-content, align-items, flex-wrap, gap, align-content
- **Item properties**: flex-grow, flex-shrink, flex-basis, flex, order, align-self

### 2. Main Axis vs Cross Axis

This is the most important concept. Flexbox has two axes:

- **Main axis**: the direction items are laid out in (horizontal by default)
- **Cross axis**: perpendicular to the main axis (vertical by default)

When you change `flex-direction`, the axes rotate. In a row, the main axis is horizontal. In a column, the main axis is vertical. This matters because `justify-content` aligns along the MAIN axis and `align-items` aligns along the CROSS axis.

### 3. flex-direction

```
.container {
  display: flex;
  flex-direction: row;            /* default: left to right */
  flex-direction: row-reverse;    /* right to left */
  flex-direction: column;         /* top to bottom */
  flex-direction: column-reverse; /* bottom to top */
}
```

### 4. justify-content (MAIN AXIS)

Distributes items along the main axis.

```
justify-content: flex-start;    /* default: packed at start */
justify-content: flex-end;      /* packed at end */
justify-content: center;        /* centered */
justify-content: space-between; /* first at start, last at end, equal space between */
justify-content: space-around;  /* equal space around each item */
justify-content: space-evenly;  /* equal space between AND at edges */
```

Memorize space-between for navbars (logo left, links right) and center for everything else.

### 5. align-items (CROSS AXIS)

Aligns items perpendicular to the main axis.

```
align-items: stretch;     /* default: fill cross axis */
align-items: flex-start;  /* top (in a row) */
align-items: flex-end;    /* bottom (in a row) */
align-items: center;      /* vertically centered (in a row) */
align-items: baseline;    /* aligned to text baselines */
```

### 6. The Holy Grail: Centering

```
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  /* Anything inside is perfectly centered -- horizontally AND vertically */
}
```

This one pattern solves the historical 'center a div' problem. Remember it.

### 7. flex-wrap

By default, flex items try to fit on a single line, even if they have to shrink. flex-wrap lets them wrap onto multiple lines.

```
flex-wrap: nowrap;   /* default: all on one line */
flex-wrap: wrap;     /* wrap to new lines when needed */
flex-wrap: wrap-reverse;
```

### 8. gap

The modern replacement for margin between items. `gap` works inside flex and grid containers and is much simpler than setting margins.

```
.container {
  display: flex;
  gap: 16px;          /* space between items */
  gap: 16px 24px;     /* row-gap | column-gap */
}
```

Use gap. Stop using margins on flex items. Trust me.

### 9. align-content

Only applies when `flex-wrap` causes multiple lines. Controls how those LINES are distributed along the cross axis.

```
align-content: flex-start;
align-content: center;
align-content: space-between;
align-content: space-around;
```

### 10. Flex Item Properties

#### flex-grow

How much an item grows to fill extra space. Default is 0 (do not grow). Values are ratios: `flex-grow: 2` grows twice as fast as `flex-grow: 1`.

```
.main    { flex-grow: 1; }  /* takes any extra space */
.sidebar { flex-grow: 0; }  /* keeps its natural size */
```

#### flex-shrink

How much an item shrinks when there is not enough space. Default is 1 (can shrink). Set to 0 to prevent shrinking.

```
.logo { flex-shrink: 0; }  /* never shrinks */
```

#### flex-basis

The initial size of the item before grow/shrink is applied.

```
.item { flex-basis: 200px; }  /* starts at 200px, then grows or shrinks */
```

#### flex Shorthand

Sets grow, shrink, and basis in one line. The common values you will actually use:

```
flex: 1;        /* = flex: 1 1 0 -- grow to fill, shrink if needed, start at 0 */
flex: 0 0 auto; /* no grow, no shrink, use content size */
flex: 1 0 200px; /* grow, no shrink, start at 200px */
flex: none;     /* no grow, no shrink, use content size */
```

Most of the time you just use `flex: 1` on items that should fill available space.

#### order

Reorder items visually without changing the HTML.

```
.first { order: 1; }
.second { order: 2; }
.hero { order: -1; } /* shows first regardless of source order */
```

#### align-self

Override align-items for a single flex item.

```
.special { align-self: flex-end; }  /* aligned to bottom while others center */
```

### 11. Common Flexbox Patterns

#### Centering everything

```
display: flex;
justify-content: center;
align-items: center;
```

#### Navbar (logo left, links right)

```
display: flex;
justify-content: space-between;
align-items: center;
```

#### Equal-width card grid

```
.grid { display: flex; gap: 20px; }
.card { flex: 1; }
```

#### Sticky footer

```
body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main { flex: 1; }
```

## Code Examples

### Perfect Centering (The Holy Grail)

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { margin: 0; font-family: Arial, sans-serif; }
    .hero {
      height: 100vh;
      background: linear-gradient(135deg, #a855f7, #06b6d4);
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      text-align: center;
      padding: 20px;
      box-sizing: border-box;
    }
    h1 { font-size: 56px; margin: 0 0 12px; }
    p { font-size: 20px; opacity: 0.9; }
  </style>
</head>
<body>
  <div class="hero">
    <div>
      <h1>Hi, I'm Aarav</h1>
      <p>Perfectly centered horizontally and vertically with flexbox.</p>
    </div>
  </div>
</body>
</html>
```

Three lines of flexbox replace the decade-long struggle of centering an element. `display: flex` makes the container a flex container. `justify-content: center` centers along the main axis (horizontal). `align-items: center` centers along the cross axis (vertical).

**Output:**

```
A full-screen gradient hero with a heading and tagline perfectly centered both horizontally and vertically.
```

### Responsive Navbar

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; background: #f9fafb; }
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 30px;
      background: white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .logo { font-weight: bold; color: #a855f7; font-size: 22px; }
    .links {
      display: flex;
      gap: 24px;
      list-style: none;
    }
    .links a {
      color: #4b5563;
      text-decoration: none;
      font-weight: 500;
    }
    .links a:hover { color: #a855f7; }
    .cta {
      padding: 10px 20px;
      background: #a855f7;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
    }
    main { padding: 40px; }
  </style>
</head>
<body>
  <nav class="nav">
    <div class="logo">Priya.dev</div>
    <ul class="links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">About</a></li>
    </ul>
    <button class="cta">Sign Up</button>
  </nav>
  <main>
    <h1>Welcome, friend!</h1>
    <p>This page has a flexbox navbar: logo left, links center, button right.</p>
  </main>
</body>
</html>
```

The nav uses `justify-content: space-between` to push the logo left, button right, with the links in between. The links themselves are a nested flex container with `gap: 24px` for even horizontal spacing. This is the standard navbar pattern.

**Output:**

```
A modern navbar with a purple logo on the left, navigation links in the middle, and a purple sign-up button on the right.
```

### Equal-Width Card Grid

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; padding: 40px; background: #f3f4f6; margin: 0; }
    h1 { text-align: center; color: #1a1a2e; margin-bottom: 30px; }
    .grid {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      max-width: 1200px;
      margin: 0 auto;
    }
    .card {
      flex: 1 1 240px;
      background: white;
      padding: 24px;
      border-radius: 14px;
      box-shadow: 0 6px 20px rgba(0,0,0,0.06);
    }
    .card h3 { margin: 0 0 8px; color: #a855f7; }
    .card p  { margin: 0; color: #4b5563; line-height: 1.5; font-size: 14px; }
    .icon {
      width: 48px; height: 48px;
      border-radius: 12px;
      background: linear-gradient(135deg, #a855f7, #06b6d4);
      margin-bottom: 12px;
    }
  </style>
</head>
<body>
  <h1>Why Learn with Us</h1>
  <div class="grid">
    <div class="card"><div class="icon"></div><h3>Live Mentors</h3><p>Real teachers, weekly classes, and doubt sessions.</p></div>
    <div class="card"><div class="icon"></div><h3>Projects</h3><p>Build real apps you can show off on your portfolio.</p></div>
    <div class="card"><div class="icon"></div><h3>Flexible</h3><p>Learn at your own pace with recorded backup classes.</p></div>
    <div class="card"><div class="icon"></div><h3>Community</h3><p>Meet other kids who love coding. By Kavya.</p></div>
  </div>
</body>
</html>
```

`flex: 1 1 240px` means each card grows (1), shrinks (1), and has a base width of 240px. With `flex-wrap: wrap`, cards reflow onto new rows when the container gets narrower. Resize the window to see the responsive behavior.

**Output:**

```
A responsive grid of 4 feature cards that flex to equal widths on wide screens and wrap to multiple rows on narrow screens.
```

### Pricing Cards Layout

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; padding: 40px 20px; background: #f3f4f6; margin: 0; }
    h1 { text-align: center; color: #1a1a2e; margin-bottom: 30px; }
    .prices {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
      max-width: 1000px;
      margin: 0 auto;
    }
    .plan {
      flex: 1 1 260px;
      max-width: 300px;
      background: white;
      padding: 32px 24px;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.08);
      text-align: center;
      display: flex;
      flex-direction: column;
    }
    .plan h3 { margin: 0 0 8px; color: #6b7280; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; }
    .price { font-size: 44px; font-weight: 800; color: #1a1a2e; margin: 8px 0; }
    .price small { font-size: 16px; color: #6b7280; font-weight: normal; }
    .features { list-style: none; padding: 0; text-align: left; margin: 20px 0; flex: 1; }
    .features li { padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #4b5563; font-size: 14px; }
    .btn { padding: 14px; background: #1a1a2e; color: white; border: none; border-radius: 10px; font-weight: 600; cursor: pointer; font-size: 14px; margin-top: auto; }
    .popular { border: 3px solid #a855f7; position: relative; transform: scale(1.05); }
    .popular .btn { background: #a855f7; }
    .tag { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: #a855f7; color: white; padding: 4px 16px; border-radius: 999px; font-size: 11px; font-weight: bold; letter-spacing: 0.1em; }
  </style>
</head>
<body>
  <h1>Pick Your Plan</h1>
  <div class="prices">
    <div class="plan">
      <h3>Starter</h3>
      <div class="price">Rs 499 <small>/mo</small></div>
      <ul class="features">
        <li>5 courses</li>
        <li>Community access</li>
        <li>Monthly check-in</li>
      </ul>
      <button class="btn">Get Started</button>
    </div>
    <div class="plan popular">
      <span class="tag">POPULAR</span>
      <h3>Pro</h3>
      <div class="price">Rs 1,299 <small>/mo</small></div>
      <ul class="features">
        <li>All 30 courses</li>
        <li>Weekly live classes</li>
        <li>Project reviews</li>
        <li>1-on-1 mentor</li>
      </ul>
      <button class="btn">Start Pro</button>
    </div>
    <div class="plan">
      <h3>School</h3>
      <div class="price">Rs 4,999 <small>/mo</small></div>
      <ul class="features">
        <li>Up to 30 students</li>
        <li>Teacher dashboard</li>
        <li>Bulk certificates</li>
      </ul>
      <button class="btn">Contact Us</button>
    </div>
  </div>
</body>
</html>
```

The outer container uses `display: flex` with gap and wrap. Each plan is also a flex container with `flex-direction: column` so the button can be pushed to the bottom using `margin-top: auto`. This ensures buttons line up even if feature lists have different lengths.

**Output:**

```
Three pricing cards side by side. The middle one is highlighted and slightly larger. All buttons align to the bottom regardless of feature list length.
```

### Sticky Footer Layout

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { height: 100%; font-family: Arial, sans-serif; }
    body {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: #f3f4f6;
    }
    header {
      padding: 20px 30px;
      background: white;
      border-bottom: 1px solid #e5e7eb;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    header .logo { font-weight: bold; color: #a855f7; }
    main {
      flex: 1;
      padding: 40px 30px;
      max-width: 800px;
      margin: 0 auto;
      width: 100%;
    }
    main h1 { color: #1a1a2e; margin-bottom: 12px; }
    main p { color: #4b5563; line-height: 1.6; }
    footer {
      padding: 20px 30px;
      background: #1a1a2e;
      color: #94a3b8;
      text-align: center;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <header>
    <div class="logo">Ishaan.dev</div>
    <div>v1.0</div>
  </header>
  <main>
    <h1>Short Page</h1>
    <p>Even with very little content, the footer stays at the bottom of the viewport because of flexbox.</p>
    <p>This works by making body a flex column that is at least 100vh tall. The main element grows (flex: 1) to fill all leftover space, pushing the footer down.</p>
  </main>
  <footer>
    Made with flexbox by Ishaan - 2026
  </footer>
</body>
</html>
```

The body is a flex column with `min-height: 100vh`. The main element has `flex: 1`, meaning it grows to fill any leftover vertical space. The footer is pushed to the bottom even when the page has minimal content. This replaces the old sticky footer hacks.

**Output:**

```
A page with a header, short main content, and a footer that is always pinned to the bottom of the viewport even with little content.
```

### Order and align-self

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 30px; background: #f3f4f6; }
    .row {
      display: flex;
      gap: 12px;
      padding: 20px;
      background: white;
      border-radius: 12px;
      margin-bottom: 20px;
      min-height: 120px;
      align-items: center;
    }
    .item {
      width: 80px;
      height: 60px;
      background: #a855f7;
      color: white;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
    .first { order: -1; background: #06b6d4; }
    .last  { order: 10; background: #f59e0b; }
    .tall  { height: 100px; }
    .top    { align-self: flex-start; }
    .bottom { align-self: flex-end; }
    h3 { color: #4b5563; margin: 0 0 8px; font-size: 14px; }
  </style>
</head>
<body>
  <h3>order: rearrange visually without changing HTML. Cyan is first, amber is last.</h3>
  <div class="row">
    <div class="item">A</div>
    <div class="item first">B</div>
    <div class="item">C</div>
    <div class="item last">D</div>
    <div class="item">E</div>
  </div>

  <h3>align-self: override align-items on individual items</h3>
  <div class="row" style="align-items: center;">
    <div class="item top">Top</div>
    <div class="item">Mid</div>
    <div class="item tall">Tall</div>
    <div class="item bottom">Bot</div>
    <div class="item">Mid</div>
  </div>
</body>
</html>
```

`order` lets you visually reorder flex items without touching the HTML. Items with lower order come first (default is 0). `align-self` overrides `align-items` for individual flex items -- the Top item goes to the top of the container while others stay centered.

**Output:**

```
Two rows of colored boxes. The first shows reordering (cyan first, amber last), the second shows individual items aligned to the top, center, and bottom.
```

## Common Mistakes

### Applying Flex Properties to the Wrong Element

**Wrong:**

```
.item {
  display: flex;
  justify-content: center;
}
/* This makes .item a flex container for ITS children. */
/* It does not affect how .item itself is aligned. */
```

display: flex on an item does not move the item itself. It only affects the item's children.

**Correct:**

```
.container {
  display: flex;
  justify-content: center; /* aligns .item within the container */
}
.item {
  /* whatever */
}
```

display: flex is always applied to the parent. The parent's children are the flex items that get aligned. Put display: flex on the thing containing what you want to align.

### Confusing justify-content and align-items

**Wrong:**

```
.row {
  display: flex;
  align-items: center;      /* vertically centers, NOT horizontally */
  justify-content: center;  /* horizontally centers, NOT vertically */
}
/* Swapping these causes confusion in flex-direction: column */
```

In a row, justify-content is horizontal and align-items is vertical. In a column, they SWAP -- justify-content becomes vertical and align-items becomes horizontal. This trips up beginners.

**Correct:**

```
/* Always think: justify-content = MAIN axis, align-items = CROSS axis */
/* The axes rotate with flex-direction. */
```

Never memorize 'justify = horizontal'. Memorize 'justify = main axis'. Then remember: row main axis is horizontal, column main axis is vertical.

### Using Margins Instead of gap

**Wrong:**

```
.item {
  margin-right: 20px; /* extra margin on the last item too */
}
.item:last-child { margin-right: 0; } /* ugly fix */
```

Margins on flex items create uneven spacing at the edges and require last-child hacks.

**Correct:**

```
.container {
  display: flex;
  gap: 20px; /* clean, simple, works everywhere */
}
```

gap is supported in all modern browsers. It only adds space BETWEEN items (not at the edges) and requires no hacks. Always use gap for spacing flex items.

### Forgetting flex-wrap on Responsive Layouts

**Wrong:**

```
.grid { display: flex; }
.card { flex: 1 1 240px; }
/* On narrow screens, cards shrink to tiny widths instead of wrapping */
```

Without flex-wrap, items try to squeeze onto a single line, shrinking past their flex-basis.

**Correct:**

```
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.card { flex: 1 1 240px; }
```

Add flex-wrap: wrap whenever you want items to flow onto new lines on smaller screens. It is essential for responsive card grids.

## Summary

- display: flex makes an element a flex container. Its direct children become flex items that can be aligned, distributed, wrapped, and ordered with a few properties.
- Flexbox has a MAIN axis (direction of flow, horizontal by default) and a CROSS axis (perpendicular). flex-direction changes which axis is which.
- justify-content aligns items along the MAIN axis. Values: flex-start, flex-end, center, space-between (for navbars), space-around, space-evenly.
- align-items aligns items along the CROSS axis. Values: stretch (default), flex-start, flex-end, center (for vertical centering), baseline.
- The holy grail of centering: display: flex; justify-content: center; align-items: center. Centers any child both horizontally and vertically.
- flex-wrap: wrap lets items flow onto multiple lines when they do not fit. Essential for responsive card grids.
- gap is the modern way to space flex items. Works inside the container, adds space only between items (not at edges), and is far simpler than using margins.
- flex-grow, flex-shrink, and flex-basis control how items size. The flex shorthand combines them. flex: 1 is the most common value -- it means grow to fill available space.
- order lets you visually rearrange items without changing the HTML. Useful for responsive layouts where the visual order differs from the source order.
- Common patterns to memorize: centering (justify + align center), navbar (space-between), card grid (flex: 1 + flex-wrap), sticky footer (flex column + flex: 1 on main).

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/html-and-css/flexbox-complete-guide/*
*Practice questions: https://learn.modernagecoders.com/resources/html-and-css/flexbox-complete-guide/practice/*
