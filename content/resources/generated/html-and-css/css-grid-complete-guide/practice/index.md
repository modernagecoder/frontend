---
title: "Practice: CSS Grid - The Complete Guide"
description: "60 practice problems for CSS Grid - The Complete Guide in HTML and CSS"
slug: css-grid-complete-guide-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/css-grid-complete-guide/practice/
category: "HTML and CSS"
---
# Practice: CSS Grid - The Complete Guide

**Total questions:** 60

## Topic-Specific Questions

### Q1. [Easy] How many equal columns does this grid create?

```
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
```

*Hint:* repeat(N, size) creates N tracks of the given size.

**Answer:** `4` equal columns

`repeat(4, 1fr)` is shorthand for `1fr 1fr 1fr 1fr` — four columns, each taking an equal share of the available space.

### Q2. [Easy] What does this create?

```
.grid {
  display: grid;
  grid-template-columns: 200px 1fr;
}
```

*Hint:* px is fixed, fr takes remaining space.

**Answer:** A 2-column layout with a fixed 200px sidebar and a flexible main column that fills the rest.

The first column is exactly 200px. The second column uses `1fr`, so it takes all the remaining space in the container. This is the classic sidebar + main content layout.

### Q3. [Easy] Which property controls space between grid cells?

*Hint:* Same concept as in Flexbox.

**Answer:** `gap` (you can also use `row-gap` and `column-gap` separately)

`gap` sets spacing in both directions. `row-gap` and `column-gap` control each direction individually.

### Q4. [Easy] What does `grid-column: span 3` do?

*Hint:* span means how many tracks to cover.

**Answer:** The item covers 3 columns starting from wherever it would naturally land.

`span 3` tells the grid to make this item occupy 3 columns. The item still flows into the next available position; span only affects how many columns it takes, not where it starts.

### Q5. [Easy] How do you make a grid item span ALL columns?

*Hint:* Line -1 is the last line.

**Answer:** `grid-column: 1 / -1;`

The value `-1` refers to the last grid line, so `1 / -1` means from the first line to the last line — spanning every column regardless of how many there are.

### Q6. [Medium] What does this create?

```
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
```

*Hint:* This is the magic responsive line.

**Answer:** A fully responsive grid where columns are at least 200px and stretch to fill available space. It shows as many columns as fit.

On a narrow screen, only 1 column fits. As the container widens, the grid automatically adds more columns. This single line replaces what used to require 3-4 media queries.

### Q7. [Medium] What is the difference between `auto-fit` and `auto-fill`?

*Hint:* Think about empty tracks when items are few.

**Answer:** `auto-fit` collapses empty tracks, letting real items stretch to fill the container. `auto-fill` keeps empty tracks, so items stay at their minimum size.

If you have a 1200px container and 3 items with `minmax(200px, 1fr)`, auto-fit makes each item ~400px wide. auto-fill leaves 3 ghost empty tracks so the 3 items stay at 200px each.

### Q8. [Medium] What does `grid-template-areas` do?

*Hint:* It assigns names to grid regions.

**Answer:** It lets you name rectangular regions of the grid and visually draw your layout as a string. Children then claim a named region with `grid-area`.

Example: `grid-template-areas: "header header" "sidebar main" "footer footer";` creates a 2-column layout where header and footer span both columns. It is the most readable way to define a layout.

### Q9. [Medium] What is `fr` in CSS Grid?

*Hint:* fr stands for 'fraction'.

**Answer:** The `fr` unit represents a fraction of the free space in a grid container. `1fr 2fr` means the second column is twice as wide as the first.

fr is only available in Grid. It distributes remaining space after fixed-size tracks are accounted for. Unlike %, it never overflows because it is based on available space, not total size.

### Q10. [Medium] What does this do?

```
.grid {
  display: grid;
  grid-template-columns: minmax(200px, 400px) 1fr;
}
```

*Hint:* minmax(min, max) clamps a column between two sizes.

**Answer:** The first column is flexible but never smaller than 200px and never larger than 400px. The second column takes the rest.

`minmax(200, 400)` creates a column that grows and shrinks within bounds. Useful for sidebars that should stay within a readable width.

### Q11. [Medium] How do you center a single item in a grid cell (both horizontally and vertically)?

*Hint:* There is a shortcut for place-items.

**Answer:** On the parent: `place-items: center;` (shorthand for `justify-items: center; align-items: center;`)

`place-items: center` centers every item in its cell in both directions. For a single item, you can also use `place-self: center` on the item itself.

### Q12. [Hard] What is the difference between the explicit grid and the implicit grid?

*Hint:* Explicit = what you defined. Implicit = what the browser creates automatically.

**Answer:** The **explicit grid** is what you define with grid-template-columns and grid-template-rows. The **implicit grid** is what the browser creates automatically when there are more items than defined tracks. Control implicit rows with `grid-auto-rows`.

If you define 3 columns but add 10 items, the browser creates 4 rows (3x4=12 cells). The 4th row is implicit. Use `grid-auto-rows: 200px` to set its height.

### Q13. [Hard] What does `grid-auto-flow: dense` do?

*Hint:* Dense packing tries to fill holes left by spanning items.

**Answer:** It tells the browser to back-fill empty cells with smaller items that appear later in the source order, producing a more compact layout (but items may appear out of order).

Without dense, when an item spans multiple columns and does not fit in the current row, the remaining space in that row stays empty. With dense, the browser looks ahead and slots smaller items into those gaps. Use cautiously — it can break logical reading order.

### Q14. [Hard] What does `grid-column: 2 / -2` do on a 5-column grid?

*Hint:* Negative line numbers count from the end. A 5-column grid has 6 lines.

**Answer:** It spans from line 2 to line 5 (second-to-last line), covering columns 2, 3, and 4.

A 5-column grid has 6 vertical lines. Line -1 is the last (line 6), line -2 is line 5. So `2 / -2` = line 2 to line 5 = 3 columns in the middle.

### Q15. [Hard] What happens if a grid item is set to `grid-area: main` but no area named 'main' is defined in grid-template-areas?

*Hint:* The item falls back to auto-placement.

**Answer:** The browser ignores the named area reference and the item gets auto-placed into the next available cell like any normal grid item.

Referencing a non-existent area is not an error. The item simply loses its named-area placement and behaves as if grid-area were not set.

### Q16. [Easy] Which property would you use to make every row in an auto-placed grid 150px tall?

*Hint:* Auto-created rows have their own property.

**Answer:** `grid-auto-rows: 150px;`

Since rows are being created implicitly by auto-placement, `grid-auto-rows` controls their height.

### Q17. [Medium] What does `grid-template: auto 1fr / 200px 1fr` mean?

*Hint:* The slash separates rows and columns.

**Answer:** Two rows (first sized to content, second taking remaining space) and two columns (200px sidebar plus a flexible main column).

`grid-template` shorthand uses rows before the slash and columns after it. This one line sets up a classic sidebar layout.

## Mixed Questions

### Q1. [Easy] How many rows does this grid have after adding 7 items?

```
.grid { display: grid; grid-template-columns: repeat(3, 1fr); }
```

*Hint:* 7 items / 3 columns per row.

**Answer:** 3 rows (2 full rows of 3 items and 1 row with 1 item)

Grid auto-places items left-to-right, top-to-bottom. 7 items need ceil(7/3) = 3 rows.

### Q2. [Easy] Which value makes a grid column take all remaining space?

*Hint:* Fraction unit.

**Answer:** `1fr` (or any `Nfr` value)

The `fr` unit distributes remaining space. With only one fr-based column, it takes all the leftover space.

### Q3. [Medium] When should you use Grid instead of Flexbox?

*Hint:* Think about 1D vs 2D.

**Answer:** Use Grid when you need to control both rows and columns at the same time (dashboards, galleries, full page layouts, magazine designs). Use Flexbox when items sit in a single row or column (navbars, button groups, form fields, vertical lists).

They are complementary. Professional sites use Grid for the outer page structure and Flexbox inside cards and components. Grid is 2D; Flexbox is 1D.

### Q4. [Medium] Why is `repeat(auto-fit, minmax(250px, 1fr))` called 'magic'?

*Hint:* It does what 5 media queries used to do.

**Answer:** It creates a fully responsive card grid with zero media queries. On a phone you get 1 column, on a tablet 2 or 3, on a desktop 4 or 5. Columns automatically resize and wrap based on available space.

`auto-fit` figures out how many columns fit, `minmax(250px, 1fr)` ensures each is at least 250px wide. The combination adapts to any viewport size.

### Q5. [Medium] What does this CSS produce?

```
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
```

*Hint:* The middle is twice as wide.

**Answer:** 3 columns where the middle column is twice as wide as the left and right columns.

Free space is divided into 1 + 2 + 1 = 4 parts. The left and right get 1/4 each, the middle gets 2/4 (half).

### Q6. [Hard] What happens with this grid?

```
.grid {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: 100px;
}
/* 5 items inside */
```

*Hint:* You defined only 1 row but there are 5 items.

**Answer:** The grid creates 3 rows total: the explicit 100px row plus 2 implicit rows created to hold the remaining items. Implicit rows use `grid-auto-rows` (default is auto, so they size to content).

5 items divided by 2 columns = 3 rows needed. Only the first is explicit. The other 2 are implicit and sized based on content unless `grid-auto-rows` is set.

### Q7. [Medium] Can you nest a grid inside another grid?

*Hint:* Yes — and it is very common.

**Answer:** Yes. A grid cell can itself be `display: grid` (or flex). Nested grids are independent of the parent grid, which is how real dashboards combine outer page layout with inner card layouts.

You can nest Grid inside Grid, Grid inside Flex, or Flex inside Grid freely. Each becomes its own formatting context.

### Q8. [Medium] Why is named grid-template-areas considered the most readable CSS layout?

*Hint:* Look at the string shape.

**Answer:** Because the `grid-template-areas` string visually represents the layout. You can look at the CSS and instantly see where the header, sidebar, main, and footer sit. No other CSS layout method is that self-documenting.

Example: `"header header" "sidebar main" "footer footer"` — a new developer can read that and immediately understand the layout without running it.

### Q9. [Hard] What is the difference between `justify-content` and `justify-items` in Grid?

*Hint:* One aligns the grid; the other aligns items inside cells.

**Answer:** `justify-content` aligns the WHOLE grid horizontally inside its container (when the grid is smaller than the container). `justify-items` aligns content inside each grid CELL horizontally.

justify-content has effect only if there is leftover space in the container. justify-items affects every cell's content alignment (useful when your grid items are smaller than their cells).

### Q10. [Hard] What is the result of `grid-template-columns: repeat(3, minmax(0, 1fr))`?

*Hint:* The minmax trick prevents content overflow issues.

**Answer:** Three equal columns that never overflow their container, even with very wide content inside.

By default, `1fr` has a minimum of `auto`, which can expand if content is too wide. `minmax(0, 1fr)` forces the minimum to 0, so the column respects the container width. Famous trick for preventing layout break with long words.

### Q11. [Easy] What does `display: inline-grid` do?

*Hint:* Like inline-block but for grid.

**Answer:** It makes the element a grid container that flows inline with surrounding content, rather than taking its own block-level line.

Rarely used, but available. Most grids are block-level. Use inline-grid only if you need a grid that sits alongside text or other inline elements.

### Q12. [Medium] What is logged if the grid is 400px wide?

```
.grid {
  display: grid;
  grid-template-columns: minmax(200px, 1fr) 1fr;
  width: 400px;
}
```

*Hint:* The minimum is 200px, both columns share space.

**Answer:** The first column is 200px (hits the minimum), the second column is 200px. Total 400px.

With 400px to split, 1fr + 1fr would give 200px each, which satisfies the minmax minimum. So both columns end up at 200px.

### Q13. [Easy] What does `grid-template: 'header header' 'sidebar main' / 200px 1fr` shorthand mean?

*Hint:* It combines grid-template-areas and grid-template-columns.

**Answer:** It sets `grid-template-areas` (the strings) and `grid-template-columns` (the part after the /) in one declaration. The row heights are inferred from content.

Shorthand: areas in quotes, then a `/`, then column definitions. You can also specify row heights before each area string.

### Q14. [Hard] Does gap affect Grid's total width calculation?

*Hint:* Gaps are real space between tracks.

**Answer:** Yes. If you have 3 columns of 200px each with a 16px gap, the total width is 3*200 + 2*16 = 632px. Gaps consume container space, so tracks get sized based on (container width - total gap).

When you use fr units, the browser first subtracts the gap space and then distributes the remainder. This is why `repeat(3, 1fr)` with gap works predictably.

### Q15. [Medium] What is the biggest advantage of Grid over float-based layouts (used in the 2010s)?

*Hint:* Think about control and cleanliness.

**Answer:** Grid was designed for 2D layouts from the ground up. It gives direct control over rows and columns, gaps, alignment, and responsive behavior without clearfix hacks, margin calculations, or extra wrapper divs. Layouts that took 50 lines of float CSS now take 5 lines of Grid.

Floats were originally designed to wrap text around images, not build layouts. Developers abused them for years. Grid is the proper, modern, purpose-built tool.

### Q16. [Easy] How do you set different row and column gaps?

*Hint:* Two separate properties.

**Answer:** `row-gap: 20px; column-gap: 8px;` (or shorthand `gap: 20px 8px;` where the first value is row-gap)

`gap` accepts one value (both directions) or two values (row then column).

### Q17. [Hard] Why does Grid align-self let you override just one item's alignment?

*Hint:* Items can override parent alignment settings.

**Answer:** The parent's `align-items` (and `justify-items`) sets default alignment for all children. A child can override its own alignment with `align-self` (or `justify-self`) without affecting siblings.

This gives per-item control. For example, a grid might center all items vertically but one special card uses `align-self: end` to pin itself to the bottom of its cell.

## Multiple Choice Questions

### Q1. [Easy] How do you turn on CSS Grid?

**Answer:** B

**B is correct.** `display: grid` (or `display: inline-grid`) turns an element into a grid container.

### Q2. [Easy] What does `1fr` mean?

**Answer:** B

**B is correct.** The `fr` unit represents a fraction of free space in a grid container.

### Q3. [Easy] Which property sets space between grid cells?

**Answer:** C

**C is correct.** `gap` sets spacing between grid cells. You can also use `row-gap` and `column-gap`.

### Q4. [Easy] What does `repeat(3, 1fr)` produce?

**Answer:** B

**B is correct.** `repeat(3, 1fr)` is shorthand for `1fr 1fr 1fr` — three columns sharing space equally.

### Q5. [Easy] Which unit is ONLY available in Grid (and Flexbox for flex-basis calculations)?

**Answer:** C

**C is correct.** `fr` is exclusive to CSS Grid. The other units work anywhere in CSS.

### Q6. [Medium] What does `grid-column: 1 / -1` do?

**Answer:** B

**B is correct.** Line `-1` refers to the last line, so `1 / -1` means from the first to the last line — full width regardless of column count.

### Q7. [Medium] What is the difference between auto-fit and auto-fill?

**Answer:** B

**B is correct.** auto-fit collapses empty tracks so real items stretch. auto-fill keeps empty ghost tracks so items stay at their minimum width.

### Q8. [Medium] Which property lets you name regions of the grid?

**Answer:** C

**C is correct.** `grid-template-areas` lets you draw layouts visually with named strings. Children then claim a region via `grid-area`.

### Q9. [Medium] What does `place-items: center` do?

**Answer:** B

**B is correct.** `place-items` is the shorthand for `justify-items` (horizontal) and `align-items` (vertical).

### Q10. [Medium] In `minmax(200px, 1fr)`, what is 200px?

**Answer:** B

**B is correct.** `minmax(min, max)` — first argument is the minimum, second is the maximum. The column will never shrink below 200px.

### Q11. [Hard] Why does `minmax(0, 1fr)` prevent grid overflow?

**Answer:** B

**B is correct.** By default, `1fr` has an implicit minimum of `auto`, which expands to fit content. `minmax(0, 1fr)` forces the minimum to zero so the track can shrink as needed.

### Q12. [Medium] Which statement is TRUE about Grid vs Flexbox?

**Answer:** B

**B is correct.** Flexbox handles a single row or column; Grid handles both simultaneously. Real websites use both: Grid for page structure, Flexbox inside cells.

### Q13. [Hard] What is the implicit grid?

**Answer:** B

**B is correct.** If you define 3 columns but add 10 items, the browser auto-creates additional rows to hold them. Those auto-created tracks form the implicit grid.

### Q14. [Medium] Which property controls the size of auto-created rows?

**Answer:** B

**B is correct.** `grid-auto-rows` sets the size of any row created implicitly by auto-placement. Same for `grid-auto-columns`.

### Q15. [Hard] What does `grid-auto-flow: dense` do?

**Answer:** A

**A is correct.** `dense` tells the browser to look ahead and fill gaps left by spanning items with smaller items that appear later in the source. Use carefully — it breaks reading order.

### Q16. [Easy] How do you create a grid item that spans 2 columns from wherever it starts?

**Answer:** B

**B is correct.** `grid-column: span 2` makes the item cover 2 columns starting from its auto-placed position.

### Q17. [Medium] Which creates a fully responsive card grid with no media queries?

**Answer:** C

**C is correct.** auto-fit plus minmax creates a grid that adds or removes columns based on container width. It is the famous 'one-liner responsive grid'.

### Q18. [Medium] What is `grid-template` shorthand?

**Answer:** B

**B is correct.** `grid-template` is a shorthand combining rows, columns, and areas into one declaration.

### Q19. [Hard] Why is Grid sometimes called a 'container-out' layout system?

**Answer:** B

**B is correct.** In Grid, the parent defines the layout grid, and children are placed into it. This is the opposite of float-based layouts where each child defined its own position.

### Q20. [Easy] Can grid items overlap each other?

**Answer:** B

**B is correct.** Grid items can overlap. Use grid-column and grid-row to place items in the same cell, then use z-index to control stacking. Great for hero layouts with text over images.

## Coding Challenges

### Challenge 1. Simple 3-Column Card Grid

**Difficulty:** Easy

Build a 3-column card grid with 6 cards. Each card should have a colored background, rounded corners, and 20px padding. Use `grid-template-columns: repeat(3, 1fr)` and a 16px gap. Give each card a different background color and the name of a student (Aarav, Priya, Rohan, Ishita, Vivaan, Anika).

**Constraints:**

- Use display: grid, repeat(3, 1fr), and gap.

**Sample input:**

```
None
```

**Sample output:**

```
A 3x2 grid of colored cards displaying student names.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: Arial, sans-serif; background: #f8fafc; padding: 24px; margin: 0; }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; max-width: 900px; margin: 0 auto; }
  .card { padding: 20px; border-radius: 12px; color: white; text-align: center; font-weight: bold; }
  .c1 { background: #a855f7; }
  .c2 { background: #06b6d4; }
  .c3 { background: #f59e0b; }
  .c4 { background: #ef4444; }
  .c5 { background: #10b981; }
  .c6 { background: #ec4899; }
</style>
</head>
<body>
<div class="grid">
  <div class="card c1">Aarav</div>
  <div class="card c2">Priya</div>
  <div class="card c3">Rohan</div>
  <div class="card c4">Ishita</div>
  <div class="card c5">Vivaan</div>
  <div class="card c6">Anika</div>
</div>
</body>
</html>
```

### Challenge 2. Responsive Photo Gallery (The Magic Line)

**Difficulty:** Easy

Build a photo gallery with 8 items that is fully responsive without any media queries. Use the magic line `repeat(auto-fit, minmax(200px, 1fr))`. Each photo should be a colorful gradient with the city name inside (Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad, Pune, Jaipur).

**Constraints:**

- No media queries allowed. Use auto-fit and minmax.

**Sample input:**

```
Resize browser window
```

**Sample output:**

```
Gallery automatically flows from 1 column on narrow screens to 4+ columns on wide screens.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: Arial, sans-serif; background: #0f172a; padding: 24px; margin: 0; color: white; }
  h1 { text-align: center; color: #06b6d4; }
  .gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; max-width: 1100px; margin: 20px auto; }
  .photo { aspect-ratio: 4/3; border-radius: 12px; display: flex; align-items: flex-end; padding: 16px; font-weight: bold; }
  .p1 { background: linear-gradient(135deg, #a855f7, #ec4899); }
  .p2 { background: linear-gradient(135deg, #06b6d4, #3b82f6); }
  .p3 { background: linear-gradient(135deg, #f59e0b, #ef4444); }
  .p4 { background: linear-gradient(135deg, #10b981, #06b6d4); }
  .p5 { background: linear-gradient(135deg, #8b5cf6, #0ea5e9); }
  .p6 { background: linear-gradient(135deg, #f43f5e, #facc15); }
  .p7 { background: linear-gradient(135deg, #14b8a6, #84cc16); }
  .p8 { background: linear-gradient(135deg, #e11d48, #7c3aed); }
</style>
</head>
<body>
<h1>Cities of India</h1>
<div class="gallery">
  <div class="photo p1">Mumbai</div>
  <div class="photo p2">Delhi</div>
  <div class="photo p3">Bangalore</div>
  <div class="photo p4">Chennai</div>
  <div class="photo p5">Kolkata</div>
  <div class="photo p6">Hyderabad</div>
  <div class="photo p7">Pune</div>
  <div class="photo p8">Jaipur</div>
</div>
</body>
</html>
```

### Challenge 3. Page Layout with grid-template-areas

**Difficulty:** Medium

Build a full page layout with header, sidebar, main content, and footer using `grid-template-areas`. The header should span the top, the sidebar should be on the left, main should be on the right, and footer should span the bottom. Use real content written by Meera about her blog.

**Constraints:**

- Use grid-template-areas. Header and footer must span full width. Sidebar is 220px fixed.

**Sample input:**

```
None
```

**Sample output:**

```
A page layout with clearly defined regions matching the area names.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Arial, sans-serif; }
  .page {
    display: grid;
    grid-template-columns: 220px 1fr;
    grid-template-rows: 70px 1fr 50px;
    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
    min-height: 100vh;
  }
  header  { grid-area: header;  background: #0f172a; color: white; padding: 20px; }
  aside   { grid-area: sidebar; background: #1e293b; color: #cbd5e1; padding: 20px; }
  main    { grid-area: main;    background: #f8fafc; padding: 24px; }
  footer  { grid-area: footer;  background: #e2e8f0; padding: 14px 20px; font-size: 13px; }
  aside a { display: block; color: #cbd5e1; padding: 8px 0; text-decoration: none; }
  aside a:hover { color: #a855f7; }
</style>
</head>
<body>
<div class="page">
  <header><h1>Meera's Blog</h1></header>
  <aside>
    <a href="#">Home</a>
    <a href="#">Articles</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </aside>
  <main>
    <h2>Welcome</h2>
    <p>Hi, I am Meera. I write about learning to code, cooking, and cricket. Explore the articles on the left to get started.</p>
  </main>
  <footer>Built with CSS Grid. No framework.</footer>
</div>
</body>
</html>
```

### Challenge 4. Bento Grid Portfolio

**Difficulty:** Medium

Create a trendy bento-box style portfolio with 6 cards of varying sizes. Use `grid-column: span N` and `grid-row: span N` to give cards different sizes. The intro card should be the largest (2x2), with smaller feature cards around it. Name it after Ishaan.

**Constraints:**

- Use span for varying card sizes. Set grid-auto-rows. Use gradient backgrounds.

**Sample input:**

```
None
```

**Sample output:**

```
An asymmetric bento-style portfolio with cards of different sizes.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: Arial, sans-serif; background: #fafafa; padding: 24px; margin: 0; }
  .bento { display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 140px; gap: 14px; max-width: 1100px; margin: 0 auto; }
  .bento > div { border-radius: 16px; padding: 20px; color: white; font-weight: bold; display: flex; align-items: flex-end; }
  .intro { grid-column: span 2; grid-row: span 2; background: linear-gradient(135deg, #7c3aed, #db2777); font-size: 22px; }
  .pic   { grid-column: span 2; background: linear-gradient(135deg, #06b6d4, #0ea5e9); }
  .stats { background: linear-gradient(135deg, #f59e0b, #ef4444); }
  .skill { background: linear-gradient(135deg, #10b981, #06b6d4); }
  .blog  { grid-column: span 3; background: linear-gradient(135deg, #1e293b, #475569); }
  .contact { background: linear-gradient(135deg, #ec4899, #f43f5e); }
</style>
</head>
<body>
<div class="bento">
  <div class="intro">Hi, I am Ishaan. Designer and coder.</div>
  <div class="pic">Gallery</div>
  <div class="stats">42 Projects</div>
  <div class="skill">React Pro</div>
  <div class="blog">Latest: How I built a game in a weekend</div>
  <div class="contact">Contact</div>
</div>
</body>
</html>
```

### Challenge 5. Admin Dashboard with Nested Grids

**Difficulty:** Hard

Build an admin dashboard using grid-template-areas for the page structure (sidebar, header, main, footer). Inside main, use a nested grid with `repeat(auto-fit, minmax(200px, 1fr))` for a responsive stats row. Include at least 4 stat cards with different colors.

**Constraints:**

- Outer grid uses areas. Inner stats grid uses auto-fit minmax. No media queries.

**Sample input:**

```
None
```

**Sample output:**

```
Dashboard with sidebar, header, a responsive stats grid inside main, and a footer.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Arial, sans-serif; }
  .app { display: grid; grid-template-columns: 240px 1fr; grid-template-rows: 64px 1fr 44px; grid-template-areas: "sidebar header" "sidebar main" "sidebar footer"; min-height: 100vh; }
  header { grid-area: header; background: white; border-bottom: 1px solid #e5e7eb; padding: 20px; }
  aside { grid-area: sidebar; background: #0f172a; color: #cbd5e1; padding: 24px; }
  aside h2 { color: #a855f7; margin-bottom: 20px; }
  main { grid-area: main; background: #f8fafc; padding: 24px; }
  footer { grid-area: footer; background: #e2e8f0; padding: 12px 24px; font-size: 13px; color: #475569; }
  .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-top: 16px; }
  .stat { border-radius: 12px; padding: 20px; color: white; }
  .s1 { background: linear-gradient(135deg, #a855f7, #ec4899); }
  .s2 { background: linear-gradient(135deg, #06b6d4, #0ea5e9); }
  .s3 { background: linear-gradient(135deg, #f59e0b, #ef4444); }
  .s4 { background: linear-gradient(135deg, #10b981, #06b6d4); }
  .stat h3 { font-size: 30px; }
</style>
</head>
<body>
<div class="app">
  <header><strong>Welcome, Kavya</strong></header>
  <aside>
    <h2>SkyAdmin</h2>
    <p>Dashboard</p><p>Students</p><p>Courses</p><p>Reports</p>
  </aside>
  <main>
    <h1>Overview</h1>
    <div class="stats">
      <div class="stat s1"><h3>1,284</h3><p>Active Students</p></div>
      <div class="stat s2"><h3>42</h3><p>Live Courses</p></div>
      <div class="stat s3"><h3>98%</h3><p>Completion</p></div>
      <div class="stat s4"><h3>4.9</h3><p>Avg Rating</p></div>
    </div>
  </main>
  <footer>Dashboard built with nested CSS Grid.</footer>
</div>
</body>
</html>
```

### Challenge 6. Calendar Month View

**Difficulty:** Hard

Build a calendar month view with a 7-column grid (Mon-Sun) and 6 rows for weeks. Use grid for the day-of-week headers and the date cells. Highlight today with a colored background. Pre-fill with dates 1-30 for April.

**Constraints:**

- Use grid-template-columns: repeat(7, 1fr). Use JavaScript to generate the cells.

**Sample input:**

```
None
```

**Sample output:**

```
A calendar showing April with 7 columns for days of week and a grid of dates.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: Arial, sans-serif; background: #0f172a; color: white; padding: 24px; margin: 0; }
  h1 { text-align: center; color: #06b6d4; }
  .calendar { max-width: 560px; margin: 0 auto; background: #1e293b; padding: 16px; border-radius: 14px; }
  .days, .dates { display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; }
  .days div { text-align: center; padding: 8px; font-weight: bold; color: #a855f7; font-size: 13px; }
  .dates div { aspect-ratio: 1; display: flex; align-items: center; justify-content: center; background: #0f172a; border-radius: 6px; font-size: 14px; }
  .today { background: linear-gradient(135deg, #a855f7, #ec4899) !important; font-weight: bold; }
  .empty { background: transparent !important; }
</style>
</head>
<body>
<h1>April 2026</h1>
<div class="calendar">
  <div class="days"><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div></div>
  <div class="dates" id="dates"></div>
</div>
<script>
  const dates = document.getElementById('dates');
  // April 2026: 1st falls on a Wednesday, 30 days
  const startOffset = 2; // Mon=0, Tue=1, Wed=2
  for (let i = 0; i < startOffset; i++) {
    const e = document.createElement('div'); e.className = 'empty'; dates.appendChild(e);
  }
  for (let d = 1; d <= 30; d++) {
    const c = document.createElement('div');
    c.textContent = d;
    if (d === 11) c.classList.add('today');
    dates.appendChild(c);
  }
</script>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/css-grid-complete-guide/*
