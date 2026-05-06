---
title: "Practice: Flexbox - The Complete Guide"
description: "62 practice problems for Flexbox - The Complete Guide in HTML and CSS"
slug: flexbox-complete-guide-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/flexbox-complete-guide/practice/
category: "HTML and CSS"
---
# Practice: Flexbox - The Complete Guide

**Total questions:** 62

## Topic-Specific Questions

### Q1. [Easy] What does `display: flex` do?

*Hint:* Applied to a parent.

**Answer:** Makes the element a flex container. Its direct children become flex items that can be aligned and distributed.

display: flex on a parent turns it into a flex container. Only direct children become flex items -- grandchildren are not affected unless they are themselves in another flex container.

### Q2. [Easy] What axis does `justify-content` align along?

*Hint:* It is the primary flow direction.

**Answer:** The MAIN axis (horizontal in a row, vertical in a column).

justify-content always aligns along the main axis. Because the axes rotate with flex-direction, it aligns horizontally in a row and vertically in a column.

### Q3. [Easy] What axis does `align-items` align along?

*Hint:* Perpendicular to main.

**Answer:** The CROSS axis (perpendicular to main).

align-items aligns along the cross axis. In a row, cross axis is vertical. In a column, cross axis is horizontal.

### Q4. [Easy] What does this do?

```
display: flex;
justify-content: center;
align-items: center;
```

*Hint:* Centers in both directions.

**Answer:** Centers child content both horizontally and vertically inside the container.

This is the holy grail of centering. Three lines replace the decade-long struggle of centering a div.

### Q5. [Easy] What is the default flex-direction?

*Hint:* Left to right.

**Answer:** `row`

By default, flex items are laid out in a row (horizontal, left to right in LTR languages).

### Q6. [Easy] What does `justify-content: space-between` do?

*Hint:* Edges pinned, space shared.

**Answer:** First item at the start, last item at the end, with equal space distributed between items.

space-between is perfect for navbars: logo on the left, links/button on the right, with no space on the outside.

### Q7. [Easy] What does `gap: 16px` do in a flex container?

*Hint:* Modern replacement for margin.

**Answer:** Adds 16px of space between all flex items (but not at the outer edges of the container).

gap is the modern, clean way to space flex items. It avoids the need for margins with last-child hacks.

### Q8. [Easy] What does `flex-wrap: wrap` do?

*Hint:* Multiple lines.

**Answer:** Allows flex items to wrap onto new lines when they do not fit on one line.

Without flex-wrap, items try to squeeze onto a single line. With wrap, they flow to new lines when the container is too narrow.

### Q9. [Easy] What does `flex: 1` do?

*Hint:* Grow to fill.

**Answer:** Makes the item grow to fill any available space (equivalent to flex: 1 1 0).

flex: 1 is the most common flex shorthand. It tells the item to share leftover space equally with other flex: 1 items.

### Q10. [Easy] Where does `display: flex` go to align a div inside a container?

*Hint:* On the parent.

**Answer:** On the PARENT (the container), not on the child. The parent becomes the flex container; the child becomes a flex item.

Flex properties on a child make it a flex container for ITS children. To align a child, apply flex on its parent.

### Q11. [Medium] What does this navbar pattern do?

```
.nav { display: flex; justify-content: space-between; align-items: center; }
```

*Hint:* Think navbar with logo and menu.

**Answer:** Places children at opposite ends (logo left, menu right), with all items vertically centered.

The canonical navbar pattern. space-between pushes the first child left and the last child right; align-items: center vertically centers them.

### Q12. [Medium] What does `flex-direction: column` change?

*Hint:* Axes rotate.

**Answer:** Flex items stack vertically. The main axis becomes vertical and the cross axis becomes horizontal.

With column direction, justify-content aligns vertically and align-items aligns horizontally. The meanings swap.

### Q13. [Medium] What happens?

```
.grid { display: flex; }
.card { flex: 1; }
```

*Hint:* All items grow equally.

**Answer:** Each card grows to take an equal share of the available space in the row.

flex: 1 on every item means they all share leftover space equally. Four cards would each take 25% of the width.

### Q14. [Medium] What does `align-self: flex-end` do on a flex item?

*Hint:* Override align-items.

**Answer:** Aligns that specific item to the end of the cross axis, overriding the container's align-items value.

align-self is applied to individual items and overrides the container's align-items just for that one item.

### Q15. [Medium] What is the difference between `justify-content: space-between` and `space-around`?

*Hint:* Edges.

**Answer:** space-between puts no space at the outer edges; space-around adds equal space around each item (so outer edges get half the space between items).

space-between: edges flush. space-around: equal space around every item, half-gaps at edges. space-evenly: equal gaps including edges.

### Q16. [Medium] What does `flex: 1 1 200px` mean?

*Hint:* grow, shrink, basis.

**Answer:** flex-grow: 1 (grow to fill), flex-shrink: 1 (can shrink), flex-basis: 200px (start at 200px).

The flex shorthand is in the order grow shrink basis. The item starts at 200px, grows if there is space, and shrinks if there is not.

### Q17. [Medium] How do you prevent an item from shrinking?

*Hint:* flex-shrink.

**Answer:** `flex-shrink: 0` or `flex: 0 0 auto`

A flex-shrink of 0 means the item never shrinks below its base size. Useful for logos and icons that should keep their size.

### Q18. [Medium] What does this sticky footer code do?

```
body { min-height: 100vh; display: flex; flex-direction: column; }
main { flex: 1; }
```

*Hint:* Main grows to push footer down.

**Answer:** Makes the footer stick to the bottom of the viewport even when main content is short. main grows to fill all leftover vertical space.

body is at least 100vh tall and stacks children in a column. main has flex: 1, so it expands to take all remaining vertical space, pushing the footer to the bottom.

### Q19. [Medium] What does `order: -1` do?

*Hint:* Lower comes first.

**Answer:** Places the item before all other items with the default order (0) regardless of source order in HTML.

order lets you visually rearrange flex items. Default is 0. Negative values come before 0, positive values come after.

### Q20. [Medium] What is the default align-items value?

*Hint:* Items fill the cross axis.

**Answer:** `stretch`

By default, flex items stretch to fill the cross axis of the container. Setting a specific height on the item or changing align-items turns this off.

### Q21. [Hard] What is the layout?

```
.container { display: flex; flex-direction: column; height: 500px; justify-content: space-between; }
/* Three child divs */
```

*Hint:* Column + space-between.

**Answer:** Three children stacked vertically: first at the top, last at the bottom, middle evenly spaced between them.

In column direction, justify-content aligns vertically. space-between pushes first to top and last to bottom, distributing the middle child in the leftover vertical space.

### Q22. [Hard] Why does this card layout fail?

```
.grid { display: flex; }
.card { width: 300px; }
/* 6 cards on a narrow container */
```

*Hint:* No wrap.

**Answer:** All 6 cards try to fit on one line, shrinking below 300px. Without flex-wrap, they squeeze instead of wrapping to a new row.

By default flex-wrap is nowrap. Add flex-wrap: wrap so items can flow to new lines when there is not enough space.

### Q23. [Hard] What happens?

```
.container { display: flex; }
.a { flex: 2; }
.b { flex: 1; }
.c { flex: 1; }
```

*Hint:* Ratios.

**Answer:** .a takes 2x the space of .b and .c. Total is 4 parts: .a gets 50%, .b gets 25%, .c gets 25% of the available space.

flex-grow values are ratios. Total ratio = 2+1+1 = 4. Each item takes its proportional share: 2/4, 1/4, 1/4.

### Q24. [Hard] When should you use flex-direction: column?

*Hint:* Vertical layouts.

**Answer:** Use column when you want items stacked vertically: sidebars, forms, card contents, footers, anything where children should flow top to bottom. Remember that in column mode, justify-content controls vertical alignment and align-items controls horizontal.

Column direction is common inside individual components (cards, forms, sidebars). Row direction is common for layouts with side-by-side items.

### Q25. [Hard] Why is gap better than margin for spacing flex items?

*Hint:* Edges and last-child.

**Answer:** gap only adds space between items, not at the outer edges, so you do not need hacks like :last-child { margin: 0 }. It is simpler, cleaner, and works consistently in both flex and grid layouts.

gap also automatically handles wrapping: when items wrap to a new line, the gap is preserved between rows. Margins do not handle this as elegantly.

## Mixed Questions

### Q1. [Easy] Does display: flex go on the parent or child?

*Hint:* Container.

**Answer:** The parent (container).

display: flex is applied to the container. Its direct children automatically become flex items.

### Q2. [Easy] Which property wraps items onto new lines?

*Hint:* flex-...

**Answer:** `flex-wrap: wrap`

Default is nowrap. Set flex-wrap to wrap so items flow onto multiple lines when the container is narrow.

### Q3. [Easy] What centers items horizontally in a row?

*Hint:* Main axis.

**Answer:** `justify-content: center`

In a row (default flex-direction), the main axis is horizontal. justify-content: center centers along the main axis.

### Q4. [Easy] What centers items vertically in a row?

*Hint:* Cross axis.

**Answer:** `align-items: center`

In a row, the cross axis is vertical. align-items aligns along the cross axis.

### Q5. [Easy] What is the flex shorthand default?

*Hint:* Three values.

**Answer:** `flex: 0 1 auto` (no grow, can shrink, based on content).

By default, flex items do not grow to fill space, can shrink if needed, and size based on their content.

### Q6. [Easy] Which property puts gaps between flex items?

*Hint:* Not margin.

**Answer:** `gap`

gap is the modern property for spacing flex items. It supports gap: 16px (uniform) or gap: 16px 24px (row-gap | column-gap).

### Q7. [Medium] What does `flex-direction: column-reverse` do?

*Hint:* Flipped column.

**Answer:** Stacks items vertically from bottom to top (reverses the source order visually).

column-reverse stacks the items vertically but with the first item at the bottom and the last at the top.

### Q8. [Medium] What is the difference between space-between, space-around, and space-evenly?

*Hint:* Edge spacing.

**Answer:** space-between: no space at edges, equal between items. space-around: equal space around each item (half-gaps at edges). space-evenly: equal space everywhere including edges.

Use space-between for navbars. Use space-evenly when you want equal margins all around items, including the container edges.

### Q9. [Medium] How do you make a flex item NOT shrink?

*Hint:* flex-shrink.

**Answer:** `flex-shrink: 0`

flex-shrink: 0 disables shrinking. The item keeps its flex-basis size even if there is not enough space.

### Q10. [Medium] What does `order: 2` do compared to another item with order: 1?

*Hint:* Higher values come later.

**Answer:** The order: 2 item is placed after the order: 1 item (higher order = later).

Flex items are laid out in order of their order value. Lower comes first. Default order is 0.

### Q11. [Medium] What is the difference between align-items and align-content?

*Hint:* Items vs lines.

**Answer:** align-items aligns items within each line along the cross axis. align-content aligns whole lines in a wrapped multi-line flex container along the cross axis. align-content only has an effect when there is more than one line.

With flex-wrap creating multiple rows of items, align-content distributes those rows. align-items distributes items within each row.

### Q12. [Medium] How do you center a single item perfectly with flexbox?

*Hint:* One container.

**Answer:** Apply to the parent: `display: flex; justify-content: center; align-items: center;`

This centers the child both horizontally and vertically with three lines of CSS. Works regardless of the child's size.

### Q13. [Medium] What is a common flexbox navbar pattern?

*Hint:* Space between.

**Answer:** display: flex; justify-content: space-between; align-items: center. This places the first child (logo) at the left and the last child at the right, with everything vertically centered.

This is the standard navbar recipe. It works for any number of children, placing the first at the start and the last at the end.

### Q14. [Medium] How do you build a 3-column card grid that wraps on small screens?

*Hint:* flex + wrap + flex-basis.

**Answer:** `.grid { display: flex; flex-wrap: wrap; gap: 20px; } .card { flex: 1 1 280px; }`

flex: 1 1 280px means each card grows, shrinks, and has a minimum preferred width of 280px. flex-wrap: wrap lets them flow to new rows on narrow screens.

### Q15. [Medium] Why does main content with flex: 1 push the footer to the bottom?

*Hint:* Flex grow.

**Answer:** When body is a flex column with min-height: 100vh, the items stack vertically. Main with flex: 1 grows to fill all leftover vertical space, pushing the footer against the bottom of the viewport.

The flex-grow value of 1 tells main to consume all available vertical space. Header and footer keep their natural sizes.

### Q16. [Hard] What happens?

```
.container { display: flex; height: 200px; }
.item { align-self: center; }
```

*Hint:* align-self without align-items.

**Answer:** The item is vertically centered in the 200px container. align-self overrides align-items even if align-items was not explicitly set.

align-self works independently on each item. The default cross-axis alignment is stretch, but align-self: center overrides it for this specific item.

### Q17. [Hard] What is the result?

```
.container { display: flex; }
.a { flex: 1; }
.b { flex: 2; }
.c { flex: 3; }
```

*Hint:* Ratio-based distribution.

**Answer:** .a gets 1/6, .b gets 2/6 (1/3), .c gets 3/6 (1/2) of the available space.

Total flex-grow = 6. Each item takes its proportional share. Useful for three-column layouts with different widths.

### Q18. [Hard] What does flex-basis do that width does not?

*Hint:* Flex basis is the starting point for flex calculations.

**Answer:** flex-basis is the starting size used by the flex algorithm before grow/shrink is applied. In a flex container, flex-basis usually wins over width for flex sizing calculations. It can also use the 'auto' keyword (use content size) or 0 (start from zero and grow).

In practice, in modern code you typically set flex-basis via the flex shorthand: flex: 1 1 200px.

### Q19. [Hard] What pattern pushes one flex item all the way to the right?

*Hint:* margin-left auto.

**Answer:** Apply `margin-left: auto` to the item you want to push right. Auto margins consume all available space, sending the item to the opposite edge.

This is a classic trick: in a row of items with, say, Logo, Link1, Link2, Button, you can set margin-left: auto on Button to push just it to the far right, keeping the others grouped on the left.

### Q20. [Hard] Why is flexbox easier than float-based layouts?

*Hint:* No clearfix, no height issues.

**Answer:** Flexbox handles alignment, spacing, ordering, and wrapping with dedicated properties. It does not need clearfix hacks. It gives equal-height columns for free. It handles centering easily. Floats were never designed for layout -- they were designed for text wrapping around images.

Floats required many hacks (clearfix, faux columns, equal-height tricks). Flexbox was designed from scratch for modern layouts.

## Multiple Choice Questions

### Q1. [Easy] How do you make an element a flex container?

**Answer:** B

**B is correct.** display: flex turns an element into a flex container. Its direct children become flex items.

### Q2. [Easy] Which property aligns items along the main axis?

**Answer:** B

**B is correct.** justify-content distributes items along the main axis.

### Q3. [Easy] Which property aligns items along the cross axis?

**Answer:** A

**A is correct.** align-items aligns along the cross axis (perpendicular to flex-direction).

### Q4. [Easy] What is the default flex-direction?

**Answer:** A

**A is correct.** Default is row: items laid out horizontally left to right.

### Q5. [Easy] What does flex: 1 do?

**Answer:** B

**B is correct.** flex: 1 (shorthand for flex: 1 1 0) makes the item grow to share available space.

### Q6. [Easy] Which value pushes the first and last items to opposite edges?

**Answer:** C

**C is correct.** space-between puts first at start, last at end, with equal space between them.

### Q7. [Easy] Which lets items wrap onto new lines?

**Answer:** A

**A is correct.** flex-wrap: wrap allows items to flow onto multiple lines.

### Q8. [Easy] Which is the modern replacement for margins between flex items?

**Answer:** B

**B is correct.** gap creates space between items without adding margin at the edges. Works in flex and grid containers.

### Q9. [Easy] How do you center a div both horizontally and vertically with flexbox?

**Answer:** B

**B is correct.** The holy grail centering pattern: three lines, perfectly centered.

### Q10. [Easy] Which property overrides align-items for a single item?

**Answer:** A

**A is correct.** align-self is applied to individual flex items to override the container's align-items for that item.

### Q11. [Medium] In flex-direction: column, what does justify-content control?

**Answer:** B

**B is correct.** justify-content always aligns along the main axis. In column direction, main axis is vertical, so justify-content aligns vertically.

### Q12. [Medium] In flex-direction: column, what does align-items control?

**Answer:** A

**A is correct.** align-items aligns along the cross axis. In column direction, cross axis is horizontal.

### Q13. [Medium] What does flex: 0 0 auto mean?

**Answer:** B

**B is correct.** flex: 0 0 auto means flex-grow: 0, flex-shrink: 0, flex-basis: auto -- the item stays at its content size and never grows or shrinks.

### Q14. [Medium] What is the classic navbar flex pattern?

**Answer:** B

**B is correct.** space-between pushes logo left and menu right; align-items: center vertically centers them.

### Q15. [Medium] How do you make items stack vertically?

**Answer:** A

**A is correct.** flex-direction: column stacks items vertically, making the main axis vertical.

### Q16. [Medium] Which flex value makes an item twice as wide as others with flex: 1?

**Answer:** A

**A is correct.** flex values are ratios. flex: 2 grows twice as much as flex: 1 from the remaining space.

### Q17. [Medium] Which creates a responsive card grid that wraps on narrow screens?

**Answer:** A

**A is correct.** flex: 1 1 260px gives each card a flexible size that grows but never shrinks below 260px, and flex-wrap lets them wrap.

### Q18. [Medium] What is align-content used for?

**Answer:** B

**B is correct.** align-content only matters when flex-wrap creates multiple rows. It distributes those rows along the cross axis.

### Q19. [Medium] How do you build a sticky footer with flexbox?

**Answer:** B

**B is correct.** Flex column body, main grows to fill leftover space, pushing footer down. Works even with short content.

### Q20. [Medium] What does order: -1 do?

**Answer:** B

**B is correct.** Lower order values come first. -1 is less than the default (0), so the item appears before all others.

### Q21. [Hard] Why might flex-wrap be needed for a responsive grid?

**Answer:** B

**B is correct.** Default is nowrap. Items shrink below their flex-basis instead of wrapping. flex-wrap: wrap is required for responsive layouts.

### Q22. [Hard] Which combination grows items equally but respects a minimum size?

**Answer:** C

**C is correct.** 1 1 280px means grow, shrink, start at 280px. Items grow equally but start from a 280px minimum, ideal for card grids.

### Q23. [Hard] How do you push ONE flex item to the far right while others stay on the left?

**Answer:** B

**B is correct.** margin-left: auto consumes all available space to the left of the item, shoving it to the right edge.

### Q24. [Hard] Why is flexbox better than floats for layouts?

**Answer:** B

**B is correct.** Floats required clearfix hacks and complex math. Flexbox was designed for layout and handles everything cleanly.

### Q25. [Hard] What happens when you combine flex: 1 on 3 items but also set flex-shrink: 0 on one of them?

**Answer:** B

**B is correct.** When space is tight, the shrink-0 item stays at its base size. The other items (with shrink > 0) absorb the compression.

## Coding Challenges

### Challenge 1. Center a Div

**Difficulty:** Easy

Create a page with a heading centered perfectly in the middle of the viewport using flexbox. The background should be a gradient.

**Constraints:**

- Use display: flex, justify-content: center, and align-items: center. Height must be 100vh.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
A heading 'Hello, Aarav' centered both horizontally and vertically on a gradient background.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  body { margin: 0; height: 100vh; font-family: Arial, sans-serif; background: linear-gradient(135deg, #a855f7, #06b6d4); display: flex; justify-content: center; align-items: center; color: white; }
  h1 { font-size: 56px; text-align: center; }
</style></head>
<body>
  <h1>Hello, Aarav</h1>
</body>
</html>
```

### Challenge 2. Responsive Navbar

**Difficulty:** Easy

Build a flexbox navbar with a logo on the left, 3 navigation links in the middle with gap spacing, and a call-to-action button on the right. All items should be vertically centered.

**Constraints:**

- Use display: flex with justify-content: space-between and align-items: center. Links use a nested flex with gap.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
A horizontal navbar with logo, links, and button distributed left/center/right.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Arial, sans-serif; background: #f9fafb; }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 30px;
    background: white;
    border-bottom: 1px solid #e5e7eb;
  }
  .logo { font-weight: bold; font-size: 22px; color: #a855f7; }
  .links { display: flex; gap: 24px; list-style: none; }
  .links a { color: #4b5563; text-decoration: none; font-weight: 500; }
  .cta { padding: 10px 20px; background: #a855f7; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; }
</style></head>
<body>
  <nav class="nav">
    <div class="logo">Priya.dev</div>
    <ul class="links"><li><a href="#">Home</a></li><li><a href="#">Blog</a></li><li><a href="#">About</a></li></ul>
    <button class="cta">Sign Up</button>
  </nav>
</body>
</html>
```

### Challenge 3. Responsive Card Grid

**Difficulty:** Medium

Create a grid of 6 cards using flexbox. Cards should be 260px minimum width, grow to fill available space, and wrap onto new rows on narrow screens.

**Constraints:**

- Use display: flex with flex-wrap: wrap and gap. Each card uses flex: 1 1 260px.

**Sample input:**

```
Open the HTML file and resize the window
```

**Sample output:**

```
6 cards that flex to equal sizes and wrap responsively.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  * { box-sizing: border-box; }
  body { font-family: Arial, sans-serif; padding: 30px; background: #f3f4f6; margin: 0; }
  h1 { text-align: center; color: #1a1a2e; margin-bottom: 24px; }
  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .card {
    flex: 1 1 260px;
    background: white;
    padding: 24px;
    border-radius: 14px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  }
  .card h3 { margin: 0 0 8px; color: #a855f7; }
  .card p { margin: 0; color: #4b5563; font-size: 14px; line-height: 1.5; }
  .dot { width: 40px; height: 40px; border-radius: 12px; background: linear-gradient(135deg, #a855f7, #06b6d4); margin-bottom: 12px; }
</style></head>
<body>
  <h1>Features by Kavya</h1>
  <div class="grid">
    <div class="card"><div class="dot"></div><h3>Fast</h3><p>Loads instantly on any device.</p></div>
    <div class="card"><div class="dot"></div><h3>Secure</h3><p>Encrypted end-to-end.</p></div>
    <div class="card"><div class="dot"></div><h3>Friendly</h3><p>Easy for kids to use.</p></div>
    <div class="card"><div class="dot"></div><h3>Proven</h3><p>500+ happy students.</p></div>
    <div class="card"><div class="dot"></div><h3>Fun</h3><p>Projects you will love.</p></div>
    <div class="card"><div class="dot"></div><h3>Smart</h3><p>Learn by doing.</p></div>
  </div>
</body>
</html>
```

### Challenge 4. Pricing Cards

**Difficulty:** Medium

Build a pricing table with 3 plan cards side by side using flexbox. Each card has a title, price, feature list, and button. The middle card is highlighted. The buttons must line up at the bottom even if feature lists have different lengths.

**Constraints:**

- Each card uses display: flex with flex-direction: column. Features have flex: 1 to push the button down.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
Three pricing cards with aligned buttons regardless of feature list length.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  * { box-sizing: border-box; }
  body { font-family: Arial, sans-serif; padding: 40px 20px; background: #f3f4f6; margin: 0; }
  h1 { text-align: center; color: #1a1a2e; margin-bottom: 30px; }
  .prices { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; max-width: 900px; margin: 0 auto; }
  .plan { flex: 1 1 240px; max-width: 280px; background: white; padding: 28px 24px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); display: flex; flex-direction: column; text-align: center; }
  .plan h3 { margin: 0 0 8px; color: #6b7280; text-transform: uppercase; font-size: 13px; letter-spacing: 0.1em; }
  .price { font-size: 40px; font-weight: 800; color: #1a1a2e; margin: 4px 0 20px; }
  .features { list-style: none; padding: 0; text-align: left; flex: 1; margin: 0 0 20px; }
  .features li { padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #4b5563; font-size: 14px; }
  .btn { padding: 12px; background: #1a1a2e; color: white; border: none; border-radius: 10px; cursor: pointer; font-weight: 600; font-size: 14px; }
  .popular { border: 3px solid #a855f7; }
  .popular .btn { background: #a855f7; }
</style></head>
<body>
  <h1>Pick Your Plan by Meera</h1>
  <div class="prices">
    <div class="plan"><h3>Starter</h3><div class="price">Rs 499</div><ul class="features"><li>5 courses</li><li>Community</li></ul><button class="btn">Get</button></div>
    <div class="plan popular"><h3>Pro</h3><div class="price">Rs 1299</div><ul class="features"><li>All courses</li><li>Live classes</li><li>Project reviews</li><li>1-on-1 mentor</li></ul><button class="btn">Start Pro</button></div>
    <div class="plan"><h3>School</h3><div class="price">Rs 4999</div><ul class="features"><li>30 students</li><li>Dashboard</li><li>Certificates</li></ul><button class="btn">Contact</button></div>
  </div>
</body>
</html>
```

### Challenge 5. Sticky Footer

**Difficulty:** Hard

Build a page with a header, short main content, and a footer. The footer must always be at the bottom of the viewport even when content is short. Use flexbox (no position: fixed).

**Constraints:**

- body must be a flex column with min-height 100vh. main must have flex: 1.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
A header, short content, and a footer pinned at the bottom of the viewport.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; font-family: Arial, sans-serif; }
  body { min-height: 100vh; display: flex; flex-direction: column; background: #f3f4f6; }
  header { padding: 20px 30px; background: white; border-bottom: 1px solid #e5e7eb; display: flex; justify-content: space-between; align-items: center; }
  header .logo { font-weight: bold; color: #a855f7; }
  main { flex: 1; padding: 40px 30px; max-width: 800px; margin: 0 auto; width: 100%; }
  main h1 { color: #1a1a2e; margin-bottom: 12px; }
  main p { color: #4b5563; line-height: 1.6; }
  footer { padding: 20px 30px; background: #1a1a2e; color: #94a3b8; text-align: center; font-size: 14px; }
</style></head>
<body>
  <header><div class="logo">Ishaan.dev</div><div>v1.0</div></header>
  <main><h1>Short Page</h1><p>Even with minimal content, the footer stays at the bottom.</p></main>
  <footer>Made by Ishaan - 2026</footer>
</body>
</html>
```

### Challenge 6. Profile Stats Row

**Difficulty:** Hard

Build a profile page header with an avatar on the left, name and bio in the middle that grows to fill, and a stats row on the right with 3 numbers (Posts, Followers, Following). Use flexbox throughout.

**Constraints:**

- Use nested flex containers. Avatar has flex-shrink: 0. Middle uses flex: 1. Stats use flex with gap.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
A horizontal layout: avatar, growing middle section with name and bio, and a right-side stats block.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  * { box-sizing: border-box; }
  body { font-family: Arial, sans-serif; padding: 40px 20px; background: #f3f4f6; margin: 0; }
  .profile {
    display: flex;
    align-items: center;
    gap: 24px;
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 28px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }
  .avatar {
    flex-shrink: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(135deg, #a855f7, #06b6d4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 36px;
    font-weight: bold;
  }
  .info { flex: 1; }
  .info h2 { margin: 0 0 4px; color: #1a1a2e; }
  .info p  { margin: 0; color: #4b5563; font-size: 14px; line-height: 1.5; }
  .stats {
    display: flex;
    gap: 24px;
    flex-shrink: 0;
  }
  .stat { text-align: center; }
  .stat .num { font-size: 22px; font-weight: 800; color: #a855f7; }
  .stat .label { font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; }
</style></head>
<body>
  <div class="profile">
    <div class="avatar">RP</div>
    <div class="info">
      <h2>Riya Patel</h2>
      <p>Full stack developer. Loves building things. From Mumbai.</p>
    </div>
    <div class="stats">
      <div class="stat"><div class="num">128</div><div class="label">Posts</div></div>
      <div class="stat"><div class="num">2.5k</div><div class="label">Followers</div></div>
      <div class="stat"><div class="num">300</div><div class="label">Following</div></div>
    </div>
  </div>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/flexbox-complete-guide/*
