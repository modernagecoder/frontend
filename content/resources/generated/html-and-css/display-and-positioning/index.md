---
title: "CSS Display and Positioning - block, inline, position: relative/absolute/fixed/sticky, z-index | Modern Age Coders"
description: "Master CSS display and positioning. Learn block, inline, inline-block, none, visibility: hidden, position: static, relative, absolute, fixed, sticky, top/right/bottom/left, z-index stacking, and overflow. 58+ practice questions."
slug: display-and-positioning
canonical: https://learn.modernagecoders.com/resources/html-and-css/display-and-positioning/
category: "HTML and CSS"
keywords: ["css display", "css position", "position absolute", "position fixed", "position sticky", "z-index css", "css overflow", "inline-block css", "visibility hidden", "sticky navbar css"]
---
# Display and Positioning

**Difficulty:** Intermediate  
**Reading time:** 42 min  
**Chapter:** 14  
**Practice questions:** 58

## What Are Display and Positioning?

Display and positioning control two fundamental questions about every element:

1. **display**: How does this element flow in the page? Like a block (new line, full width), inline (in the text flow), or not at all (removed)?
2. **position**: Where exactly is this element placed? In normal flow, offset from where it would be, or at a specific point on the screen?

Together they let you create sticky navbars, modal overlays, floating buttons, dropdowns, tooltips, fixed sidebars, and countless other UI patterns. These properties power almost every layout trick before flexbox/grid were invented, and they are still essential today for specific components.

```
/* display controls flow */
.btn { display: inline-block; }  /* flows like text but has width/height */
.hidden { display: none; }        /* gone */

/* position controls placement */
.modal { position: fixed; top: 50%; left: 50%; }  /* pinned to viewport */
.nav   { position: sticky; top: 0; }              /* sticks when scrolling */
```

## Why Do Display and Positioning Matter?

### 1. Every Layout Decision Uses Them

Do you want items in a row? Change their display. Do you want a button to float over the content? Change its position. Even with flexbox and grid for the main layout, positioning is essential for elements that sit on top of others: modals, tooltips, dropdowns, sticky headers, floating action buttons.

### 2. Position Is the Only Way to Overlap

In normal flow, elements never overlap. To make one element sit on top of another -- like a dropdown below a button, or a modal in the center of the screen -- you need `position: absolute` or `position: fixed`. Understanding this unlocks a huge category of UI.

### 3. Sticky Navbars Are Everywhere

Every modern website has a navbar that stays at the top of the screen when you scroll. The magic word is `position: sticky`. One property, and your navbar works perfectly.

### 4. display: none vs visibility: hidden Matters

Both hide elements. But one removes them from layout (display: none) and the other keeps the space (visibility: hidden). Choosing wrong creates awkward layout jumps when you toggle visibility.

## Detailed Explanation

### 1. display: block

Block elements start on a new line and take the full width available. They respect width, height, margin, and padding fully. Examples: `, , , , `.

```
h1 { display: block; }  /* default for headings */
/* Takes full width, starts on a new line */
```

### 2. display: inline

Inline elements flow with text, like words in a paragraph. They do NOT accept width or height. They only take as much space as their content. Examples: `, , , `.

```
a { display: inline; }  /* default for links */
/* Flows in text. Ignores width/height. */
```

### 3. display: inline-block

The best of both worlds: flows in a row like inline, but accepts width, height, padding, and margin like block. Great for navigation items and buttons before flexbox existed.

```
.nav-item {
  display: inline-block;
  width: 100px;
  padding: 12px 20px;
  /* Flows in a row AND has a fixed size */
}
```

### 4. display: none

Completely removes the element from the layout. Other elements act as if it does not exist.

```
.hidden { display: none; }
/* Element is invisible AND does not take space */
```

### 5. visibility: hidden

Hides the element visually but KEEPS its space in the layout. Like an invisible placeholder.

```
.invisible { visibility: hidden; }
/* Invisible but still takes up its box */
```

Key difference:

- `display: none` -- gone, space collapses, other elements move up
- `visibility: hidden` -- invisible but the space is still there, layout does not shift

### 6. position: static (Default)

The default for all elements. They flow normally. top/right/bottom/left have no effect.

### 7. position: relative

The element still flows normally, BUT you can offset it with top/right/bottom/left. It leaves a 'ghost' where it used to be.

```
.nudged {
  position: relative;
  top: 10px;
  left: 20px;
  /* Moved 10px down and 20px right from its normal position */
}
```

Also: making a parent `position: relative` creates a positioning context for absolute children.

### 8. position: absolute

Removes the element from normal flow. It floats on top and is positioned relative to the nearest positioned ancestor (an ancestor with position: relative, absolute, fixed, or sticky). If none exists, it uses the viewport.

```
.parent { position: relative; }
.child  {
  position: absolute;
  top: 10px;
  right: 10px;
  /* Pinned to the top-right of the parent */
}
```

Absolutely positioned elements are removed from normal flow -- other elements act like they do not exist.

### 9. position: fixed

Pinned to the VIEWPORT (browser window). It stays in the same position on the screen even when you scroll. Perfect for floating action buttons, modals, and some navbars.

```
.fab {
  position: fixed;
  bottom: 30px;
  right: 30px;
  /* Bottom-right of the screen always, even when scrolling */
}
```

### 10. position: sticky

Hybrid: behaves like relative until you scroll past a threshold, then behaves like fixed. Perfect for sticky navbars and table headers.

```
nav {
  position: sticky;
  top: 0;
  /* Scrolls with the page until it hits the top, then sticks */
}
```

Sticky requires a defined threshold (top, left, right, or bottom) and a scrollable ancestor with enough space.

### 11. top, right, bottom, left

These properties only work on positioned elements (not static). They set the distance from the respective edge.

```
.box {
  position: absolute;
  top: 0;
  left: 0;
  /* Top-left corner of the positioning parent */
}

.center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* Centered on the screen */
}
```

### 12. z-index (Stacking)

When positioned elements overlap, z-index decides who is on top. Higher z-index wins.

```
.behind { position: absolute; z-index: 1; }
.middle { position: absolute; z-index: 10; }
.front  { position: absolute; z-index: 100; }

.modal  { position: fixed; z-index: 9999; }
```

Important rules:

- z-index only works on `position`ed elements (not static)
- It creates stacking contexts -- children are layered relative to their parent's stack
- You cannot escape a parent's stacking context. A child with z-index: 9999 inside a parent with z-index: 1 can never go above a sibling of that parent with z-index: 2.

### 13. overflow

Controls what happens when content is bigger than its container.

```
.box { overflow: visible; }  /* default: content spills out */
.box { overflow: hidden; }   /* clip content outside the box */
.box { overflow: scroll; }   /* always show scrollbars */
.box { overflow: auto; }     /* scrollbars only when needed (best default) */

.box { overflow-x: auto; overflow-y: hidden; } /* different per axis */
```

## Code Examples

### display: block, inline, inline-block

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 30px; line-height: 1.6; }
    .block {
      display: block;
      background: #fef3c7;
      padding: 8px 12px;
      margin: 8px 0;
    }
    .inline {
      display: inline;
      background: #ddd6fe;
      padding: 8px 12px;
      /* width/height do nothing on inline elements */
      width: 200px;
      height: 100px;
    }
    .ib {
      display: inline-block;
      background: #bbf7d0;
      padding: 8px 12px;
      width: 150px;
      margin: 4px;
      text-align: center;
    }
  </style>
</head>
<body>
  <h2>Display types</h2>
  <div class="block">I am a block. I take the full width and start on a new line.</div>
  <div class="block">Another block. Also full width, new line.</div>

  <p>In this paragraph by Aarav, the words <span class="inline">span 1</span> and <span class="inline">span 2</span> are inline. They flow with the text and ignore width/height.</p>

  <div>
    <span class="ib">IB 1</span>
    <span class="ib">IB 2</span>
    <span class="ib">IB 3</span>
    <span class="ib">IB 4</span>
    (inline-block: flows in a row, but accepts width/height/margin)
  </div>
</body>
</html>
```

Three display types compared. Blocks stack vertically taking full width. Inline elements flow with text and ignore width/height. Inline-block elements flow horizontally but accept sizing properties -- perfect for old-school button rows.

**Output:**

```
Two yellow full-width blocks, a paragraph with purple-highlighted inline text, and a row of 4 green inline-block boxes.
```

### display: none vs visibility: hidden

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 30px; }
    .item {
      display: inline-block;
      width: 100px;
      height: 60px;
      background: #a855f7;
      color: white;
      text-align: center;
      line-height: 60px;
      border-radius: 8px;
      margin: 4px;
    }
    .gone { display: none; }
    .invisible { visibility: hidden; }
    .note { color: #6b7280; font-size: 13px; margin-top: 20px; }
  </style>
</head>
<body>
  <h2>Row A - all visible</h2>
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
  <div class="item">D</div>

  <h2>Row B - B has display: none</h2>
  <div class="item">A</div>
  <div class="item gone">B</div>
  <div class="item">C</div>
  <div class="item">D</div>
  <p class="note">Notice: no gap where B was. It is completely removed from layout.</p>

  <h2>Row C - B has visibility: hidden</h2>
  <div class="item">A</div>
  <div class="item invisible">B</div>
  <div class="item">C</div>
  <div class="item">D</div>
  <p class="note">Notice: empty space where B would be. Space is reserved.</p>
  <p class="note">By Priya Kapoor</p>
</body>
</html>
```

This shows the exact visual difference between the two. In row B (display: none), B disappears and C slides next to A. In row C (visibility: hidden), B is invisible but its box is still reserved, so C stays in its original position.

**Output:**

```
Three rows of purple boxes. Row A has 4 visible. Row B has 3 with no gap. Row C has 3 with an empty gap where the second box would be.
```

### position: absolute Inside relative

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 30px; background: #f3f4f6; }
    .card {
      position: relative;
      width: 300px;
      padding: 24px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
      margin: 16px;
    }
    .badge {
      position: absolute;
      top: -10px;
      right: -10px;
      background: #ef4444;
      color: white;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 13px;
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
    }
    .ribbon {
      position: absolute;
      top: 12px;
      left: -8px;
      background: #a855f7;
      color: white;
      padding: 4px 14px;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    h3 { margin: 8px 0 8px; }
    p  { margin: 0; color: #4b5563; font-size: 14px; line-height: 1.5; }
  </style>
</head>
<body>
  <div class="card">
    <div class="ribbon">NEW</div>
    <div class="badge">SALE</div>
    <h3>Coding Kit</h3>
    <p>Everything Kavya needs to learn HTML, CSS, and JavaScript in 12 weeks.</p>
  </div>
</body>
</html>
```

The card has `position: relative` so it becomes the positioning context. The badge uses `position: absolute` with negative offsets to hang off the top-right corner. The ribbon is similarly positioned on the left. This is the exact pattern for product cards with corner badges.

**Output:**

```
A white product card with a red circular 'SALE' badge in the top-right corner (slightly outside the card) and a purple 'NEW' ribbon on the left side.
```

### Sticky Navbar

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; }
    .nav {
      position: sticky;
      top: 0;
      z-index: 100;
      background: white;
      padding: 16px 30px;
      border-bottom: 1px solid #e5e7eb;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }
    .nav .logo { font-weight: bold; color: #a855f7; font-size: 20px; }
    .nav a { margin-left: 20px; color: #4b5563; text-decoration: none; font-size: 14px; }
    main { padding: 30px; max-width: 700px; margin: 0 auto; }
    section { min-height: 60vh; padding: 40px 0; border-bottom: 1px solid #eee; }
    h2 { color: #a855f7; margin-bottom: 16px; }
    p { line-height: 1.7; color: #4b5563; }
  </style>
</head>
<body>
  <nav class="nav">
    <div class="logo">SiteName</div>
    <div>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div>
  </nav>
  <main>
    <section><h2>Section 1</h2><p>Scroll down and watch the nav stay pinned to the top. By Ishaan.</p></section>
    <section><h2>Section 2</h2><p>The nav uses position: sticky with top: 0.</p></section>
    <section><h2>Section 3</h2><p>It scrolls normally until it reaches the top, then it sticks there.</p></section>
    <section><h2>Section 4</h2><p>z-index: 100 ensures the nav stays above other content that scrolls underneath.</p></section>
  </main>
</body>
</html>
```

`position: sticky` makes the nav behave like a normal element until the scroll position reaches `top: 0`, then it sticks to the top of the viewport. No JavaScript needed. z-index keeps it above other content.

**Output:**

```
A page with a navbar that scrolls with the content initially, then sticks to the top when you scroll past it.
```

### Modal Overlay (Fixed Positioning)

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; padding: 40px; background: #f3f4f6; min-height: 200vh; }
    .content { max-width: 600px; margin: 0 auto; }
    h1 { color: #1a1a2e; }
    p { line-height: 1.6; color: #4b5563; }
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
    .modal {
      background: white;
      padding: 32px;
      border-radius: 16px;
      max-width: 400px;
      width: 90%;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
      position: relative;
    }
    .close {
      position: absolute;
      top: 10px;
      right: 14px;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #6b7280;
    }
    .modal h3 { margin: 0 0 12px; color: #1a1a2e; }
    .btn { padding: 10px 20px; background: #a855f7; color: white; border: none; border-radius: 8px; font-size: 14px; cursor: pointer; margin-top: 16px; }
  </style>
</head>
<body>
  <div class="content">
    <h1>Page with Modal</h1>
    <p>The modal below uses position: fixed to cover the entire viewport, even when you scroll.</p>
    <p>Scroll down and notice the modal stays centered on the screen. Fixed positioning does not move with scroll.</p>
    <p>The dark background is an overlay. The white card inside is centered using flexbox on the overlay.</p>
    <p>By Riya Singh. The close button uses absolute positioning relative to the modal itself.</p>
  </div>

  <div class="overlay">
    <div class="modal">
      <button class="close">x</button>
      <h3>Welcome, Kavya!</h3>
      <p>This is a modal dialog. It sits on top of the entire page using fixed positioning.</p>
      <button class="btn">Got it</button>
    </div>
  </div>
</body>
</html>
```

The overlay uses `position: fixed` with all four edges set to 0, covering the whole viewport. Flexbox centers the modal inside it. The close button uses `position: absolute` in the top-right corner of the modal. Scrolling the page does not move the modal at all.

**Output:**

```
A page content behind a dark overlay with a white modal card centered on screen. Scrolling does not affect the modal position.
```

### z-index Stacking

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 60px; background: #f3f4f6; }
    .stack { position: relative; width: 400px; height: 250px; margin: 0 auto; }
    .box {
      position: absolute;
      width: 160px;
      height: 160px;
      border-radius: 12px;
      color: white;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }
    .a { background: #ef4444; top: 0; left: 0; z-index: 1; }
    .b { background: #06b6d4; top: 30px; left: 60px; z-index: 2; }
    .c { background: #a855f7; top: 60px; left: 120px; z-index: 3; }
    .d { background: #f59e0b; top: 90px; left: 180px; z-index: 2; }
  </style>
</head>
<body>
  <h2 style="text-align:center;">Stacking with z-index</h2>
  <div class="stack">
    <div class="box a">A (z:1)</div>
    <div class="box b">B (z:2)</div>
    <div class="box c">C (z:3)</div>
    <div class="box d">D (z:2)</div>
  </div>
  <p style="text-align:center;color:#6b7280;">Higher z-index appears on top. Meera arranged these.</p>
</body>
</html>
```

Four absolutely positioned boxes overlap. Their z-index values determine stacking order: C (3) on top, B and D tie at 2 (D wins because it comes later in source order), A at 1 on the bottom. Higher z-index always appears over lower, but only among positioned elements.

**Output:**

```
Four overlapping colored squares stacked diagonally, with the purple 'C' on top and the red 'A' at the bottom.
```

## Common Mistakes

### Setting width/height on inline Elements

**Wrong:**

```
a {
  display: inline;
  width: 200px;
  height: 50px;
}
/* Does nothing */
```

inline elements ignore width and height. The link stays its natural content size.

**Correct:**

```
a {
  display: inline-block;
  width: 200px;
  height: 50px;
}
```

If you need to set explicit dimensions, change the display to inline-block or block. Only block-level elements respect width and height.

### z-index Not Working on Static Elements

**Wrong:**

```
.front {
  /* no position set */
  z-index: 999;
}
/* z-index is ignored */
```

z-index only works on positioned elements. A static element ignores z-index.

**Correct:**

```
.front {
  position: relative;
  z-index: 999;
}
```

z-index requires position to be anything except static. Add position: relative to give z-index effect without moving the element.

### Absolute Positioning Without a Positioned Ancestor

**Wrong:**

```
<div class="parent">
  <div class="child" style="position: absolute; top: 0; left: 0;">I'm inside the parent!</div>
</div>
/* No position on parent. Child is positioned relative to the viewport, not the parent. */
```

The child jumps to the viewport's top-left, not the parent's.

**Correct:**

```
.parent { position: relative; }
.child  { position: absolute; top: 0; left: 0; }
```

Absolute elements are positioned relative to the nearest POSITIONED ancestor. If none exists, they use the viewport. Always add position: relative to the parent when you want to anchor an absolute child to it.

### position: sticky Without a Threshold or Scrollable Context

**Wrong:**

```
nav {
  position: sticky;
  /* no top/bottom set */
}
/* Sticky does nothing */
```

Without a threshold, sticky behaves like relative and never actually sticks.

**Correct:**

```
nav {
  position: sticky;
  top: 0;
}
```

Sticky requires a threshold value (top, right, bottom, or left) to know when to stick. Also the ancestor must be taller than the sticky element to actually allow scrolling.

## Summary

- display: block starts on a new line and takes full width (divs, headings, paragraphs). display: inline flows with text and ignores width/height (spans, links). display: inline-block flows horizontally but respects width/height.
- display: none removes the element from layout (other elements move up). visibility: hidden makes it invisible but preserves its space (other elements stay put).
- position: static is the default (normal flow). position: relative lets you offset with top/right/bottom/left while keeping the element in normal flow.
- position: absolute removes the element from flow and places it relative to the nearest positioned ancestor (or the viewport if none exists).
- position: fixed pins the element to the VIEWPORT -- it stays in place when you scroll. Perfect for floating buttons, modal overlays, and always-visible navbars.
- position: sticky is a hybrid: behaves like relative until you scroll past its threshold (like top: 0), then sticks like fixed. Great for sticky headers and table rows.
- top, right, bottom, and left only work on positioned elements (not static). They set offsets from the respective edges.
- z-index controls stacking order when positioned elements overlap. Higher z-index appears on top. It does not work on static elements. It creates stacking contexts that contain their children.
- A common pattern: parent has position: relative, child has position: absolute with top/left/right/bottom. The child is placed relative to the parent.
- overflow controls what happens when content exceeds its box: visible (default, spills out), hidden (clipped), scroll (always show scrollbars), auto (scrollbars when needed).

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/html-and-css/display-and-positioning/*
*Practice questions: https://learn.modernagecoders.com/resources/html-and-css/display-and-positioning/practice/*
