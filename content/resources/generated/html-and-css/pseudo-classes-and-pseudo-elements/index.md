---
title: "CSS Pseudo-classes and Pseudo-elements - :hover, :nth-child, ::before, ::after | Modern Age Coders"
description: "Master CSS pseudo-classes (:hover, :focus, :nth-child, :not, :is, :has) and pseudo-elements (::before, ::after, ::selection, ::marker). Build tooltips, ribbons, custom bullets, and creative effects without extra HTML. 56+ practice questions."
slug: pseudo-classes-and-pseudo-elements
canonical: https://learn.modernagecoders.com/resources/html-and-css/pseudo-classes-and-pseudo-elements
category: "HTML and CSS"
keywords: ["css pseudo class", "css pseudo element", "hover focus", "nth-child", "before after", "::before", "::after", "css :not", "css :is", ":where"]
---
# Pseudo-classes and Pseudo-elements

**Difficulty:** Advanced  
**Reading time:** 50 min  
**Chapter:** 22  
**Practice questions:** 56

## What Are Pseudo-classes and Pseudo-elements?

Pseudo-classes and pseudo-elements are two of the most powerful features in CSS. They let you style elements based on state, position, or relationship — and even insert content that does not exist in the HTML.

### Pseudo-classes (single colon)

A **pseudo-class** selects an element based on a state or position. Examples: `:hover` (when the user points at it), `:focus` (when it is keyboard-focused), `:nth-child(2n)` (when it is the even-numbered child), `:checked` (when a checkbox is ticked).

```
button:hover { background: purple; }
input:focus { outline: 2px solid cyan; }
li:nth-child(odd) { background: #f1f5f9; }
```

### Pseudo-elements (double colon)

A **pseudo-element** targets a part of an element — or injects a 'fake' element. Examples: `::before` and `::after` inject content, `::first-letter` targets the first character, `::selection` styles selected text, `::placeholder` styles the placeholder inside inputs.

```
.card::before {
  content: 'NEW';
  background: red;
  color: white;
  padding: 4px 8px;
}
```

Why two colons for pseudo-elements? In CSS3, pseudo-elements got their own double-colon syntax (`::before`) to distinguish them from pseudo-classes. Browsers still accept the old single-colon form for backwards compatibility, but double colons are the modern standard.

## Why Learn Pseudo-classes and Pseudo-elements?

### 1. Interactivity Without JavaScript

Hover effects, focus rings, checked states, form validation styling — all handled with CSS. No JavaScript, no event listeners, no bundle size. `:hover`, `:focus`, `:valid`, and `:invalid` handle the majority of interactive UI in a browser.

### 2. Less HTML, More Creativity

Need a decorative corner on a card? A tooltip arrow? A quote mark before a blockquote? A ribbon banner? None of these need extra HTML elements. `::before` and `::after` let you inject the content purely from CSS, keeping your HTML clean and semantic.

### 3. Pattern-Based Styling

Style every other row of a table, every third item in a grid, or only the last element of a list — without adding class names. `:nth-child()` is like a tiny query language for DOM position. Anika styled her entire homework table in 3 lines of CSS.

### 4. Modern Selectors Unlock New Patterns

Newer pseudo-classes like `:is()`, `:where()`, and especially `:has()` (the parent selector) let you write cleaner CSS and style elements based on what they contain. Things that used to require JavaScript now work with a single selector.

### 5. Accessibility for Free

`:focus-visible` shows focus rings only for keyboard users, not mouse clicks. `:hover` does nothing on touch devices, so you never punish mobile users. Semantic pseudo-classes make your site work well for every input device.

## A Tour of the Most Useful Pseudo-classes and Pseudo-elements

### 1. Interaction States

```
a:link    { color: #7c3aed; }  /* unvisited */
a:visited { color: #db2777; }  /* already visited */
a:hover   { color: #ec4899; text-decoration: underline; }
a:active  { color: #f43f5e; }  /* the instant it is clicked */

button:focus         { outline: 2px solid #06b6d4; }
button:focus-visible { outline: 2px solid #06b6d4; } /* keyboard only */
button:disabled      { opacity: 0.5; cursor: not-allowed; }
```

`:focus-visible` is the modern choice: it only shows the focus ring when the user navigates with the keyboard, not when they click with a mouse. Clean and accessible.

### 2. Form States

```
input:required { border-left: 3px solid #f59e0b; }
input:valid    { border-color: #10b981; }
input:invalid  { border-color: #ef4444; }
input:disabled { background: #f1f5f9; }
input:checked  { accent-color: #a855f7; }

/* Placeholder-shown: input is empty */
input:placeholder-shown { font-style: italic; color: #94a3b8; }
```

This lets you show live validation feedback without any JavaScript. A red border appears the moment the user's input becomes invalid.

### 3. Structural / Positional

```
li:first-child { font-weight: bold; }
li:last-child  { border-bottom: none; }
li:nth-child(2) { color: red; }
li:nth-child(odd)  { background: #f8fafc; } /* 1st, 3rd, 5th... */
li:nth-child(even) { background: #ffffff; } /* 2nd, 4th, 6th... */
li:nth-child(3n)   { color: purple; }       /* every 3rd */
li:nth-child(3n+1) { color: teal; }         /* 1st, 4th, 7th... */

li:only-child { color: gray; } /* the only child of its parent */
li:empty      { display: none; } /* has no content */
```

Zebra stripes for tables take 2 lines. Highlighting every third grid item takes 1. This is what designers mean when they say 'pattern-based' styling.

### 4. Negation and Grouping: :not(), :is(), :where()

```
/* Not: exclude something */
li:not(.active) { color: gray; }
button:not(:disabled):hover { background: purple; }

/* Is: group selectors without copying */
:is(h1, h2, h3) { font-family: 'Syne', sans-serif; }
/* Equivalent to: h1, h2, h3 { ... } but composable */

/* Where: like :is() but with zero specificity */
:where(article, section) p { line-height: 1.7; }
/* zero specificity means it is easy to override */
```

### 5. The Parent Selector: :has()

For years CSS only looked downward. `:has()` finally lets you select a parent based on its children. This is the biggest new CSS feature in a decade.

```
/* Style a card that contains an image */
.card:has(img) { padding: 0; }

/* Style a form that has an invalid input */
form:has(:invalid) button { opacity: 0.5; pointer-events: none; }

/* Style a label that has a checked checkbox */
label:has(input:checked) { background: #7c3aed; color: white; }
```

### 6. Target and Empty

```
section:target { background: #fef3c7; } /* the section matching #hash in URL */
div:empty { display: none; } /* element with no content at all */
```

### 7. Pseudo-elements: ::before and ::after

These inject a 'fake' element at the start or end of an element's content. They need the `content` property to render.

```
blockquote::before { content: '"'; font-size: 64px; color: #a855f7; }
blockquote::after  { content: '"'; font-size: 64px; color: #a855f7; }

.new::after {
  content: 'NEW';
  background: red;
  color: white;
  padding: 2px 8px;
  border-radius: 999px;
  margin-left: 8px;
  font-size: 11px;
}

.tooltip::after {
  content: attr(data-tip); /* read the data-tip attribute */
  position: absolute;
  bottom: -30px; left: 0;
  background: black; color: white;
  padding: 4px 8px; border-radius: 6px;
  opacity: 0; transition: opacity 0.2s;
}
.tooltip:hover::after { opacity: 1; }
```

### 8. Text Pseudo-elements

```
p::first-letter { font-size: 3em; float: left; color: #7c3aed; }
p::first-line   { font-weight: bold; }
::selection     { background: #a855f7; color: white; }
::placeholder   { color: #94a3b8; font-style: italic; }
li::marker      { color: #7c3aed; font-size: 1.2em; }
```

`::selection` styles the highlighted text when a user selects anything. `::placeholder` styles the hint text inside form inputs. `::marker` targets the bullet or number of a list item — you can finally color bullets without extra markup.

### 9. Creative Patterns

```
/* Ribbon on a card */
.card::before {
  content: 'SALE';
  position: absolute; top: 12px; right: -28px;
  background: #ef4444; color: white;
  padding: 4px 36px; font-size: 12px;
  transform: rotate(45deg);
}

/* Animated underline on hover */
.nav a { position: relative; }
.nav a::after {
  content: '';
  position: absolute;
  left: 0; bottom: -4px;
  width: 100%; height: 2px;
  background: #a855f7;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s;
}
.nav a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
```

No extra HTML, no JavaScript — just a sliding underline that knows which direction to grow from.

## Code Examples

### Zebra Stripe Table with :nth-child

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', sans-serif; background: #f8fafc; padding: 40px; }
    h1 { color: #7c3aed; margin-bottom: 16px; }
    table { border-collapse: collapse; width: 100%; max-width: 700px; background: white; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-radius: 12px; overflow: hidden; }
    th { background: #7c3aed; color: white; padding: 14px; text-align: left; }
    td { padding: 12px 14px; color: #334155; }
    tr:nth-child(even) { background: #f1f5f9; }
    tr:hover { background: #ede9fe; }
    tr:last-child td { font-weight: bold; color: #7c3aed; }
  </style>
</head>
<body>
  <h1>Student Scores</h1>
  <table>
    <thead><tr><th>Student</th><th>Chapter</th><th>Score</th></tr></thead>
    <tbody>
      <tr><td>Aarav</td><td>Variables</td><td>94</td></tr>
      <tr><td>Priya</td><td>Variables</td><td>91</td></tr>
      <tr><td>Rohan</td><td>Variables</td><td>88</td></tr>
      <tr><td>Ishita</td><td>Variables</td><td>97</td></tr>
      <tr><td>Vivaan</td><td>Variables</td><td>85</td></tr>
      <tr><td>Anika</td><td>Variables</td><td>99</td></tr>
      <tr><td>Class Average</td><td>---</td><td>92.3</td></tr>
    </tbody>
  </table>
</body>
</html>
```

`tr:nth-child(even)` gives every even-numbered row a light background for zebra striping. `tr:hover` highlights the row the user is pointing at. `tr:last-child td` styles the summary row. All three effects come from pseudo-classes with zero extra HTML.

**Output:**

```
A clean table with purple header, zebra-striped rows, a subtle hover highlight, and a bold purple summary row at the bottom.
```

### Tooltip Using ::after and attr()

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', sans-serif; background: #0f172a; color: #f1f5f9; padding: 80px 40px; display: flex; gap: 40px; justify-content: center; }
    .tip {
      position: relative;
      padding: 12px 24px;
      background: #7c3aed;
      color: white;
      border-radius: 10px;
      cursor: pointer;
      font-weight: 600;
    }
    .tip::after {
      content: attr(data-tip);
      position: absolute;
      left: 50%;
      bottom: calc(100% + 10px);
      transform: translateX(-50%);
      background: #0b1120;
      color: #e2e8f0;
      padding: 8px 14px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 400;
      white-space: nowrap;
      box-shadow: 0 6px 16px rgba(0,0,0,0.4);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s, transform 0.2s;
    }
    .tip::before {
      content: '';
      position: absolute;
      left: 50%;
      bottom: calc(100% + 4px);
      transform: translateX(-50%);
      border: 6px solid transparent;
      border-top-color: #0b1120;
      opacity: 0;
      transition: opacity 0.2s;
    }
    .tip:hover::after,
    .tip:hover::before {
      opacity: 1;
      transform: translateX(-50%) translateY(-4px);
    }
  </style>
</head>
<body>
  <button class="tip" data-tip="Meera's latest project">Hover me</button>
  <button class="tip" data-tip="Click to save changes">Save</button>
  <button class="tip" data-tip="Warning: this deletes everything">Delete</button>
</body>
</html>
```

Each button has a `data-tip` attribute. The CSS injects that attribute's text via `::after` using `content: attr(data-tip)`. The `::before` draws a tiny triangle pointer. Both are hidden with opacity: 0 and revealed on hover. No JavaScript, one CSS rule per button.

**Output:**

```
Three purple buttons. Hovering any button reveals a dark tooltip above it with a small downward-pointing arrow, showing the text from the data-tip attribute.
```

### Custom Blockquote with ::before and ::after

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Georgia', serif; background: #fafaf9; padding: 60px 40px; color: #0f172a; max-width: 720px; margin: 0 auto; }
    blockquote {
      position: relative;
      background: white;
      padding: 48px 48px 48px 64px;
      border-left: 5px solid #7c3aed;
      border-radius: 0 12px 12px 0;
      font-size: 22px;
      line-height: 1.5;
      color: #334155;
      box-shadow: 0 10px 30px rgba(0,0,0,0.08);
      margin: 40px 0;
    }
    blockquote::before {
      content: open-quote;
      position: absolute;
      top: -20px;
      left: 12px;
      font-size: 120px;
      line-height: 1;
      color: #a855f7;
      font-family: 'Georgia', serif;
    }
    blockquote::after {
      content: '';
      position: absolute;
      right: 20px; bottom: 20px;
      width: 40px; height: 3px;
      background: linear-gradient(90deg, #a855f7, #ec4899);
      border-radius: 2px;
    }
    blockquote cite {
      display: block;
      margin-top: 16px;
      font-size: 14px;
      color: #7c3aed;
      font-style: normal;
      font-weight: 700;
    }
  </style>
</head>
<body>
  <blockquote>
    Learning to code changed how I think about problems. CSS variables and pseudo-elements made me fall in love with design.
    <cite>- Ishita, age 15</cite>
  </blockquote>
  <blockquote>
    You do not need a JavaScript library for nice quotation marks. ::before and ::after handle it beautifully.
    <cite>- Meera, age 13</cite>
  </blockquote>
</body>
</html>
```

`::before` uses `content: open-quote` to render a large purple quote mark floating above the top-left. `::after` draws a small decorative gradient bar in the bottom-right. No extra HTML, and the quotes scale with the text automatically.

**Output:**

```
Two elegant blockquotes. Each has a large decorative purple opening quote mark in the top-left, a purple left border, a subtle gradient accent in the bottom-right, and a styled citation.
```

### Sliding Underline on Nav Links

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', sans-serif; background: #0f172a; color: white; min-height: 100vh; }
    nav { display: flex; gap: 32px; padding: 24px 40px; background: #0b1120; border-bottom: 1px solid #1e293b; }
    nav a {
      position: relative;
      color: #cbd5e1;
      text-decoration: none;
      font-size: 16px;
      padding: 6px 0;
      transition: color 0.2s;
    }
    nav a::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, #a855f7, #06b6d4);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }
    nav a:hover {
      color: white;
    }
    nav a:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
    main { padding: 80px 40px; text-align: center; }
    h1 { color: #a855f7; font-size: 40px; }
  </style>
</head>
<body>
  <nav>
    <a href="#">Home</a>
    <a href="#">Projects</a>
    <a href="#">Blog</a>
    <a href="#">Contact</a>
  </nav>
  <main>
    <h1>Vivaan's Portfolio</h1>
  </main>
</body>
</html>
```

Each nav link has a 2px gradient bar injected via `::after`. It starts at `scaleX(0)` (invisible) with `transform-origin: right`. On hover it scales to 1 with `transform-origin: left`, creating a slide-in effect. When the mouse leaves, it retracts back to the right. Pure CSS, no JavaScript.

**Output:**

```
A navigation bar with 4 links. Hovering any link reveals a gradient bar that slides in from the left. Moving away slides it back out to the right.
```

### Form Validation Styling with :valid and :invalid

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', sans-serif; background: #f8fafc; padding: 40px; display: flex; justify-content: center; }
    .form { background: white; padding: 32px; border-radius: 16px; max-width: 400px; width: 100%; box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
    h2 { color: #0f172a; margin-bottom: 24px; }
    label { display: block; margin-bottom: 16px; font-size: 13px; color: #475569; }
    input {
      display: block;
      width: 100%;
      padding: 12px;
      margin-top: 6px;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      font-size: 15px;
      outline: none;
      transition: border-color 0.2s;
    }
    input:focus { border-color: #7c3aed; }
    input:placeholder-shown { font-style: italic; }
    input:not(:placeholder-shown):valid { border-color: #10b981; }
    input:not(:placeholder-shown):invalid { border-color: #ef4444; }
    input:required + .req::before { content: ' *'; color: #ef4444; }
    button {
      width: 100%;
      padding: 12px;
      background: #7c3aed;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      margin-top: 8px;
    }
    button:disabled { opacity: 0.4; cursor: not-allowed; }
    form:has(input:invalid) button { opacity: 0.4; cursor: not-allowed; }
  </style>
</head>
<body>
  <form class="form">
    <h2>Sign Up</h2>
    <label>Name<input type="text" placeholder="Your name" minlength="2" required></label>
    <label>Email<input type="email" placeholder="you@example.com" required></label>
    <label>Age<input type="number" placeholder="10-18" min="10" max="18" required></label>
    <button type="submit">Create Account</button>
  </form>
</body>
</html>
```

Inputs get a green border when valid and a red border when invalid — but only once the user has started typing (`:not(:placeholder-shown)`). The `form:has(input:invalid) button` rule disables the submit button whenever any input is invalid. All validation styling is pure CSS — no JavaScript.

**Output:**

```
A clean signup form. As you type, fields turn green when valid and red when invalid. The submit button is disabled until every field is valid.
```

### Ribbon and Badge Effects with ::before

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', sans-serif; background: #f8fafc; padding: 40px; display: grid; gap: 24px; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); max-width: 1000px; margin: 0 auto; }
    .product {
      position: relative;
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 6px 20px rgba(0,0,0,0.08);
      overflow: hidden;
    }
    .product h3 { color: #0f172a; font-size: 20px; margin-bottom: 8px; }
    .product p { color: #64748b; font-size: 14px; line-height: 1.6; }
    .product .price { display: block; margin-top: 16px; font-size: 24px; font-weight: 700; color: #7c3aed; }

    /* Ribbon on the top-right corner */
    .product.sale::before {
      content: 'SALE';
      position: absolute;
      top: 18px; right: -40px;
      background: #ef4444;
      color: white;
      padding: 6px 46px;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 1px;
      transform: rotate(45deg);
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    }

    /* NEW badge */
    .product.new::after {
      content: 'NEW';
      position: absolute;
      top: 16px; left: 16px;
      background: linear-gradient(135deg, #a855f7, #ec4899);
      color: white;
      padding: 4px 10px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1px;
    }
  </style>
</head>
<body>
  <div class="product sale">
    <h3>Ishita's HTML Book</h3>
    <p>Learn HTML and CSS from scratch with 50 projects.</p>
    <span class="price">Rs 499</span>
  </div>
  <div class="product new">
    <h3>Aarav's CSS Guide</h3>
    <p>Master CSS variables, Grid, and animations.</p>
    <span class="price">Rs 399</span>
  </div>
  <div class="product sale new">
    <h3>Kavya's JS Bundle</h3>
    <p>JavaScript basics to advanced in one bundle.</p>
    <span class="price">Rs 899</span>
  </div>
</body>
</html>
```

`.product.sale::before` injects a rotated red ribbon in the corner. `.product.new::after` injects a pill-shaped gradient badge in the top-left. The third card uses both classes and shows both decorations at once. No extra markup — just pseudo-elements.

**Output:**

```
Three product cards. The first has a diagonal red SALE ribbon in the top-right corner. The second has a purple-pink NEW badge in the top-left. The third has both decorations at the same time.
```

## Common Mistakes

### Forgetting the content Property on ::before and ::after

**Wrong:**

```
.card::before {
  background: red;
  width: 20px;
  height: 20px;
  /* No content property - nothing renders! */
}
```

The pseudo-element does not appear at all. Without `content`, `::before` and `::after` are not generated by the browser.

**Correct:**

```
.card::before {
  content: '';  /* Even an empty string works */
  background: red;
  width: 20px;
  height: 20px;
  display: block;
}
```

The `content` property is *required* for `::before` and `::after`. An empty string `content: ''` is fine when you only want a decorative shape. Without content, the browser simply does not render the pseudo-element.

### Misreading :nth-child() Formulas

**Wrong:**

```
/* Wanted every 3rd row, starting from the first */
tr:nth-child(3n) {
  background: #f1f5f9;
}
/* This selects the 3rd, 6th, 9th... - NOT the 1st, 4th, 7th! */
```

The pattern starts at row 3 instead of row 1. `3n` means 3, 6, 9, 12 (n starting at 1 internally, or 0 giving 0 which does not exist).

**Correct:**

```
tr:nth-child(3n+1) {
  background: #f1f5f9;
  /* Now selects 1st, 4th, 7th... */
}
```

The formula is `an+b` where n goes 0, 1, 2, 3... and the result must be a positive integer. `3n+1` gives 1, 4, 7, 10. `3n` gives 3, 6, 9. Sketch a few values to check your formula.

### Single Colon vs Double Colon Confusion

**Wrong:**

```
.card:before {
  content: 'NEW';
}
/* This works but is the old syntax */
```

It still works in most browsers for backwards compatibility, but it mixes up the meaning of pseudo-classes (single colon) and pseudo-elements (double colon).

**Correct:**

```
.card::before {
  content: 'NEW';
}
/* Modern CSS3 syntax - use this */
```

Pseudo-classes use one colon (`:hover`, `:first-child`). Pseudo-elements use two colons (`::before`, `::after`, `::first-letter`). The double colon was introduced in CSS3 to distinguish them. Always use two colons for pseudo-elements in new code.

### Using :hover on Interactive States Alone (No Keyboard Support)

**Wrong:**

```
button:hover {
  background: purple;
  outline: 2px solid cyan;
}
/* Keyboard users see no feedback! */
```

Users who navigate with the keyboard (Tab key) get no visual feedback because only `:hover` is styled, not `:focus`.

**Correct:**

```
button:hover,
button:focus-visible {
  background: purple;
  outline: 2px solid cyan;
}
```

Always pair `:hover` with `:focus-visible` (or `:focus`) so keyboard users see the same affordance as mouse users. `:focus-visible` is preferred because it only shows the ring for keyboard focus, not for mouse clicks.

## Summary

- Pseudo-classes (single colon, like `:hover`, `:focus`, `:nth-child`) select elements based on state or position. Pseudo-elements (double colon, like `::before`, `::after`, `::first-letter`) target parts of an element or inject new content.
- `:hover`, `:focus`, `:focus-visible`, `:active`, `:disabled`, and `:checked` handle the majority of interactive UI states without JavaScript. Always pair `:hover` with `:focus-visible` for accessibility.
- Form validation styling is free: `:valid`, `:invalid`, `:required`, and `:placeholder-shown` let you show live feedback as the user types. Combine `:not(:placeholder-shown)` with `:invalid` to only show red after the user has started typing.
- `:nth-child(an+b)` is a tiny query language: `odd`, `even`, `2n`, `3n+1`, etc. Use it for zebra stripes, grid patterns, and highlighting specific items without extra classes.
- `:not()` excludes, `:is()` groups selectors without rewriting them, and `:where()` is like `:is()` but with zero specificity (useful for base styles that are easy to override).
- `:has()` is the parent selector — finally. Style an element based on what it contains: `form:has(:invalid) button`, `.card:has(img)`, `label:has(input:checked)`. This used to require JavaScript.
- `::before` and `::after` require a `content` property to render. Even `content: ''` is enough for a pure decoration. They can read attributes with `content: attr(data-tip)` — perfect for tooltips.
- `::first-letter` and `::first-line` style the first character or line of a paragraph (drop caps, magazine styling). `::selection` styles highlighted text. `::placeholder` styles form placeholders. `::marker` styles list bullets or numbers.
- Creative patterns are mostly pseudo-elements: ribbons, badges, tooltips, sliding underlines, quote marks, custom bullets, decorative lines. All without adding a single extra HTML element.

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/html-and-css/pseudo-classes-and-pseudo-elements/*
*Practice questions: https://learn.modernagecoders.com/resources/html-and-css/pseudo-classes-and-pseudo-elements/practice/*
