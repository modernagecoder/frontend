---
title: "Practice: Display and Positioning"
description: "58 practice problems for Display and Positioning in HTML and CSS"
slug: display-and-positioning-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/display-and-positioning/practice/
category: "HTML and CSS"
---
# Practice: Display and Positioning

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] Which display value starts an element on a new line and takes full width?

*Hint:* Default for divs.

**Answer:** `block`

block elements start on a new line and fill the available width of their parent. divs, headings, paragraphs, sections all default to block.

### Q2. [Easy] What happens if you set width and height on `display: inline`?

*Hint:* Inline elements have limits.

**Answer:** Nothing. Inline elements ignore width and height. They only take the size of their content.

inline elements flow like text. Only block and inline-block elements respect explicit width and height.

### Q3. [Easy] What is the difference between display: none and visibility: hidden?

*Hint:* Layout space.

**Answer:** display: none removes the element from the layout entirely (other elements move up). visibility: hidden keeps the space but makes it invisible.

Use display: none when you want the element gone. Use visibility: hidden when you want it invisible but the layout should not shift.

### Q4. [Easy] What is the default position value?

*Hint:* All elements start with this.

**Answer:** `static`

All elements default to position: static. top/right/bottom/left and z-index have no effect on static elements.

### Q5. [Easy] Does `position: relative` remove the element from normal flow?

*Hint:* It still leaves a ghost where it was.

**Answer:** No. The element still takes its original space. Any top/right/bottom/left offset moves only the visual position.

relative elements flow normally but can be nudged visually with offsets. Other elements continue to treat the original position as taken.

### Q6. [Easy] What does `position: fixed` anchor the element to?

*Hint:* It ignores parents.

**Answer:** The viewport (browser window). It stays in the same screen position when scrolling.

Fixed elements are positioned relative to the browser viewport, not any parent element. Perfect for floating action buttons and overlays.

### Q7. [Easy] What anchors `position: absolute`?

*Hint:* The nearest positioned ancestor.

**Answer:** The nearest ancestor with position set to anything other than static. If no such ancestor exists, it uses the viewport.

Walking up the DOM tree, absolute elements find the first ancestor with position: relative/absolute/fixed/sticky. That becomes their positioning context.

### Q8. [Easy] Does z-index work on `position: static` elements?

*Hint:* Static is the default.

**Answer:** No. z-index only works on positioned elements (relative, absolute, fixed, sticky).

To give z-index effect, you must first set a position value other than static. Usually position: relative is enough if you don't need offsets.

### Q9. [Easy] What does `overflow: auto` do?

*Hint:* Scrollbars appear as needed.

**Answer:** Adds scrollbars only when content exceeds the box. If content fits, no scrollbars appear.

auto is the most user-friendly overflow setting. It avoids unnecessary scrollbars but allows scrolling when content is too large.

### Q10. [Easy] What display value is used for navigation links that should sit in a row and also have padding?

*Hint:* Flows like text but accepts sizing.

**Answer:** `inline-block`

inline-block elements flow in a row like inline, but accept width, height, padding, and margin. Classic for navigation items and badges.

### Q11. [Medium] What is the result?

```
.parent { position: relative; width: 300px; height: 200px; background: #eee; }
.child { position: absolute; top: 10px; right: 10px; }
```

*Hint:* Child is pinned relative to the parent.

**Answer:** The child is pinned to the top-right corner of the parent, 10px from each edge.

The parent is positioned (relative), so it becomes the positioning context for the absolute child. top and right set the distance from those edges of the parent.

### Q12. [Medium] What does this produce?

```
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

*Hint:* top/left moves the top-left corner to center. transform shifts back by half the modal size.

**Answer:** A perfectly centered modal on the viewport, regardless of its size.

top: 50% + left: 50% places the top-left corner at the center. translate(-50%, -50%) shifts the modal back by half its own dimensions, centering it precisely.

### Q13. [Medium] What does this sticky nav do?

```
nav { position: sticky; top: 0; z-index: 100; }
```

*Hint:* Sticky sticks when the threshold is reached.

**Answer:** Scrolls with the page until it reaches the top of the viewport, then sticks in place while the rest of the page scrolls beneath it.

position: sticky is a hybrid of relative and fixed. top: 0 is the threshold. z-index ensures the nav sits above other content as it scrolls underneath.

### Q14. [Medium] Which has the highest visual stack order?

```
.a { position: absolute; z-index: 1; }
.b { position: absolute; z-index: 10; }
.c { position: absolute; z-index: 5; }
```

*Hint:* Higher z-index wins.

**Answer:** `.b` (z-index 10)

Among sibling positioned elements with the same parent, higher z-index wins. b (10) > c (5) > a (1).

### Q15. [Medium] What happens to the page when you add `position: absolute` to an element that was previously in normal flow?

*Hint:* Removed from flow.

**Answer:** The element is removed from the layout. Surrounding elements shift up to fill the space it used to take.

Absolute elements are taken out of the document flow. The other elements lay out as if the absolute element never existed.

### Q16. [Medium] What does `overflow: hidden` do to content that is bigger than its container?

*Hint:* Crops.

**Answer:** Clips (crops) any content that extends beyond the box. No scrollbars appear.

overflow: hidden hard-crops overflowing content. Useful for clipping images, creating masked effects, or preventing layout-breaking overflow.

### Q17. [Medium] What does this do to a badge on a card?

```
.card { position: relative; }
.badge { position: absolute; top: -10px; right: -10px; }
```

*Hint:* Negative offsets push it outside.

**Answer:** The badge floats outside the top-right corner of the card, hanging off the edge by 10px in each direction.

Negative offsets let absolutely positioned elements extend beyond their parent's boundary. This is a common pattern for corner badges and notification dots.

### Q18. [Medium] Why doesn't this z-index work?

```
.item { z-index: 999; }
```

*Hint:* Missing property.

**Answer:** Because there is no position property set. z-index requires position to be anything except static.

Add `position: relative` (or absolute/fixed/sticky) to enable z-index on the element.

### Q19. [Medium] What is the difference between `overflow: scroll` and `overflow: auto`?

*Hint:* When do scrollbars appear?

**Answer:** scroll ALWAYS shows scrollbars, even if content fits. auto shows scrollbars only when needed.

auto is almost always the better choice because it avoids cluttering the UI with unnecessary scrollbars.

### Q20. [Medium] How do you position an element in the top-right corner of its parent?

*Hint:* Two CSS declarations.

**Answer:** Set the parent to `position: relative` and the child to `position: absolute; top: 0; right: 0;`. The child will be pinned to the parent's top-right.

This is the most common positioning pattern: a relative parent acts as the positioning context for an absolute child.

### Q21. [Hard] What is the issue?

```
.parent-1 { position: relative; z-index: 1; }
.parent-2 { position: relative; z-index: 2; }
.parent-1 .child { position: absolute; z-index: 9999; }
```

*Hint:* Stacking contexts.

**Answer:** The child (even with z-index 9999) cannot appear above parent-2. Its z-index is scoped to parent-1's stacking context, and parent-2 (z-index 2) is stacked above parent-1 (z-index 1).

Once a parent creates a stacking context, its children cannot escape. The highest z-index inside a parent is still trapped by the parent's own stack level.

### Q22. [Hard] Why does `position: sticky; top: 0;` not stick?

```
.parent { overflow: hidden; }
.sticky-child { position: sticky; top: 0; }
```

*Hint:* Sticky has a scrollable ancestor requirement.

**Answer:** Because an ancestor has `overflow: hidden`, which prevents scrolling and breaks sticky positioning. Sticky needs a scrollable ancestor.

Sticky elements need a scrollable context. overflow: hidden, auto, or scroll on an ancestor can either help or break sticky depending on whether the ancestor provides scrolling. overflow: hidden with no scrolling often breaks sticky.

### Q23. [Hard] Which value moves ONLY the visual position but keeps the element in normal flow?

*Hint:* One value does this.

**Answer:** `position: relative` with top/right/bottom/left offsets. The element's original space is preserved; only the rendered position shifts.

relative is unique: it lets you offset visually without removing the element from flow. Great for fine-tuning placement without disrupting layout.

### Q24. [Hard] When should you use position: fixed vs position: sticky?

*Hint:* Always visible vs only visible after scrolling.

**Answer:** Use fixed when an element must always be visible at the same screen position (floating action buttons, modal overlays). Use sticky when an element should scroll normally until it reaches a threshold, then stay pinned (sticky navbars, section headers, table headers).

Fixed is always detached from flow. Sticky is context-aware: it scrolls with its parent until the threshold, then sticks. Sticky feels more integrated with the page.

### Q25. [Hard] What is a stacking context and how is it created?

*Hint:* A mini z-index world.

**Answer:** A stacking context is a self-contained layer where child elements are stacked relative to each other. It is created by: the root element, any positioned element with z-index other than auto, elements with opacity less than 1, elements with transform, filter, or certain other properties. Children can never escape their parent's stacking context.

Understanding stacking contexts explains why high z-index values sometimes fail to appear on top. The element is inside a parent stacking context that is lower than the competing sibling.

## Mixed Questions

### Q1. [Easy] Does `display: block` accept width and height?

*Hint:* Yes.

**Answer:** Yes. Block elements respect both width and height (unlike inline).

Block elements are full-featured: width, height, padding, margin, and border all work as expected.

### Q2. [Easy] Which display makes an element disappear AND free up its space?

*Hint:* Not visibility.

**Answer:** `display: none`

display: none removes the element from the layout entirely. Its space collapses and other elements move in.

### Q3. [Easy] Which position keeps an element on screen while scrolling?

*Hint:* Two options.

**Answer:** `fixed` (always) and `sticky` (after reaching a threshold).

Fixed is pinned to the viewport always. Sticky scrolls normally until hitting its threshold, then pins.

### Q4. [Easy] What anchors a position: relative element?

*Hint:* Its own natural position.

**Answer:** Its own original position in normal flow. top/right/bottom/left offset it from where it would have been.

relative does not change the layout. It just lets you shift the visual rendering. The element's slot in the flow is unchanged.

### Q5. [Easy] How do you hide something but keep its space?

*Hint:* Visibility.

**Answer:** `visibility: hidden`

The element becomes invisible but still occupies its original space. Surrounding elements do not shift.

### Q6. [Easy] Which CSS property controls how content bigger than its box is handled?

*Hint:* Overflow.

**Answer:** `overflow`

overflow values: visible (default, spills out), hidden (clipped), scroll (always shows scrollbars), auto (scrollbars when needed).

### Q7. [Medium] What does this do?

```
img { display: block; margin: 0 auto; }
```

*Hint:* Block + margin auto.

**Answer:** Displays the image as a block (no inline whitespace issues) and centers it horizontally in its container.

Images are inline by default. Making them block allows margin: 0 auto centering. Common pattern for centered figure images.

### Q8. [Medium] Can you use top/bottom on a position: static element?

*Hint:* Requires positioning.

**Answer:** No. top/right/bottom/left only work on positioned elements (relative, absolute, fixed, sticky).

Static elements ignore these properties. You must set position to enable offsets.

### Q9. [Medium] What is the behavior of a position: sticky element without a threshold?

*Hint:* Without top/bottom etc.

**Answer:** It behaves identically to position: relative. It never actually sticks.

Sticky requires at least one of top/right/bottom/left to set a threshold. Without one, it degrades to relative behavior.

### Q10. [Medium] How do you make a floating action button in the bottom-right of the page?

*Hint:* Fixed with offsets.

**Answer:** `position: fixed; bottom: 30px; right: 30px;`

Fixed anchors it to the viewport. The bottom and right offsets place it 30px from the corresponding edges. It stays put during scrolling.

### Q11. [Medium] What is inline-block best for?

*Hint:* Text flow + sizing.

**Answer:** Elements that should flow in a row like inline elements but need explicit width, height, or padding. Examples: navigation items, badges, pill buttons, tags.

Before flexbox, inline-block was the main way to lay out items in a row. It still has legitimate uses for small components.

### Q12. [Medium] Why use position: relative on a parent without offsets?

*Hint:* Positioning context.

**Answer:** To create a positioning context for absolutely positioned children. The parent itself does not move, but any absolute child inside it is anchored to the parent instead of the viewport.

This is the most common use of position: relative. It's a container trick: the parent becomes a reference frame.

### Q13. [Medium] When should you use overflow: hidden vs overflow: auto?

*Hint:* Clip vs scroll.

**Answer:** Use hidden to clip overflowing content completely (no scrollbars, content is cut off). Use auto to allow users to scroll through overflowing content with scrollbars.

hidden is for containment and design. auto is for scrollable content areas like feeds or chat windows.

### Q14. [Medium] How would you build a corner badge on a product card?

*Hint:* Parent positioned relative, badge absolute with negative offsets.

**Answer:** Set the card to `position: relative`. Add a badge element with `position: absolute; top: -8px; right: -8px;`. The badge will hang off the card's top-right corner.

Negative offsets allow absolutely positioned elements to extend beyond their parent's bounds, perfect for corner decorations.

### Q15. [Medium] Why is z-index 9999 sometimes not enough to put an element on top?

*Hint:* Stacking contexts.

**Answer:** Because z-index is scoped to the parent's stacking context. If the parent has a lower z-index than another parent's stack, no child inside can escape. The child is trapped below the other stack.

Check if any ancestor has opacity, transform, filter, or position + z-index. These create stacking contexts that trap children.

### Q16. [Hard] What is the final positioned area?

```
.wrap { position: relative; width: 400px; height: 300px; }
.layer { position: absolute; top: 0; left: 0; right: 0; bottom: 0; }
```

*Hint:* All four edges set to 0.

**Answer:** The layer fills the entire .wrap element (400x300), covering it completely.

Setting top, right, bottom, and left all to 0 on an absolute element makes it stretch to fill the positioning parent. Classic overlay technique.

### Q17. [Hard] What does this produce?

```
.tooltip { position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); }
```

*Hint:* bottom: 100% means above the parent.

**Answer:** Positions the tooltip directly above its positioned parent, horizontally centered on the parent.

bottom: 100% places the element's bottom at the parent's top. left: 50% plus translateX(-50%) centers it horizontally. A tooltip-above-button pattern.

### Q18. [Hard] Why use transform: translate(-50%, -50%) for centering?

*Hint:* Offsets by 50% of the element's own size.

**Answer:** When combined with top: 50% and left: 50%, this shifts the element back by half its own width and height, centering it exactly. Percentage translations refer to the element's own size, so -50% always works regardless of the element's dimensions.

A classic centering pattern: top/left 50% puts the corner at center, transform: translate(-50%, -50%) adjusts to put the center at center.

### Q19. [Hard] What are the 4 common positioning patterns?

*Hint:* Named patterns.

**Answer:** (1) Sticky navbar (position: sticky; top: 0). (2) Modal overlay (position: fixed covering viewport + centered child). (3) Corner badge (relative parent + absolute child with negative offsets). (4) Floating action button (position: fixed; bottom+right).

Almost every layout challenge reduces to one of these patterns. Memorize them and you can handle most UI positioning tasks.

### Q20. [Hard] Why does display: none not animate with CSS transitions?

*Hint:* Discrete vs continuous values.

**Answer:** display is a non-animatable property -- it changes instantly between values with no intermediate states. To fade elements in and out, use opacity and visibility (both animatable) instead.

For fade effects, set opacity: 0 and visibility: hidden together, and transition both. The element hides and shows smoothly instead of popping.

## Multiple Choice Questions

### Q1. [Easy] Which display value is default for a div?

**Answer:** B

**B is correct.** divs are block by default. They start on a new line and take full width.

### Q2. [Easy] Which display value is default for a span?

**Answer:** A

**A is correct.** spans are inline by default. They flow with text and ignore width/height.

### Q3. [Easy] Which completely removes an element from layout?

**Answer:** C

**C is correct.** display: none removes the element from the document flow. Other elements act as if it does not exist.

### Q4. [Easy] Which keeps the element invisible but preserves its layout space?

**Answer:** B

**B is correct.** visibility: hidden and opacity: 0 both preserve space, but visibility: hidden is the official 'invisible but still there' answer.

### Q5. [Easy] Which is the default position value?

**Answer:** A

**A is correct.** All elements default to static. top/right/bottom/left have no effect on static elements.

### Q6. [Easy] Which position value pins an element to the viewport?

**Answer:** D

**D is correct.** fixed elements stay in the same screen position regardless of scrolling.

### Q7. [Easy] Which position value is a hybrid of relative and fixed?

**Answer:** B

**B is correct.** sticky behaves like relative until you scroll past its threshold, then like fixed.

### Q8. [Easy] Does z-index work on static elements?

**Answer:** B

**B is correct.** z-index requires position to be something other than static.

### Q9. [Easy] Which overflow value shows scrollbars only when needed?

**Answer:** D

**D is correct.** auto only shows scrollbars when content overflows. scroll always shows them even if content fits.

### Q10. [Easy] Which display value flows horizontally AND accepts width/height?

**Answer:** C

**C is correct.** inline-block is the best of both worlds: horizontal flow with full box model support.

### Q11. [Medium] An absolutely positioned element is positioned relative to...

**Answer:** B

**B is correct.** Absolute elements use the nearest positioned ancestor. If there is none, they fall back to the viewport.

### Q12. [Medium] What happens without a position on the parent?
`.child { position: absolute; top: 0; left: 0; }`

**Answer:** A

**A is correct.** Without a positioned ancestor, absolute elements are positioned relative to the viewport.

### Q13. [Medium] What does `overflow: hidden` do?

**Answer:** B

**B is correct.** overflow: hidden clips overflowing content. No scrollbars appear.

### Q14. [Medium] How do you perfectly center a fixed modal using top/left/transform?

**Answer:** C

**C is correct.** top/left 50% places the top-left corner at center. transform: translate(-50%, -50%) shifts the modal back by half its own size to center it exactly.

### Q15. [Medium] Which position value does NOT remove the element from flow?

**Answer:** A

**A is correct.** relative keeps the element in normal flow. absolute and fixed remove it.

### Q16. [Medium] What value does position: sticky need to work?

**Answer:** B

**B is correct.** Sticky requires a threshold value to know when to stick. Without one it behaves like relative.

### Q17. [Medium] What does `display: inline` ignore?

**Answer:** C

**C is correct.** Inline elements ignore width and height. They size to their content only.

### Q18. [Medium] Which creates a new stacking context?

**Answer:** B

**B is correct.** A positioned element with a non-auto z-index creates a new stacking context. Transform, opacity less than 1, and filters also create them.

### Q19. [Medium] Which CSS makes a navbar stick to the top when scrolling?

**Answer:** D

**D is correct.** Both work. fixed always pins to viewport. sticky scrolls normally first, then sticks. sticky is often preferred because it feels more integrated.

### Q20. [Medium] How do you position a badge in the top-right corner of a card?

**Answer:** C

**C is correct.** Set the card to position: relative. Add the badge with position: absolute; top: 0; right: 0.

### Q21. [Hard] Why might `z-index: 9999` still not put an element on top?

**Answer:** B

**B is correct.** Child z-index is scoped to the parent stacking context. A high child z-index cannot escape a parent that is stacked lower.

### Q22. [Hard] How do you make an overlay cover the entire viewport?

**Answer:** B

**B is correct.** Fixed positioning with all four edges at 0 fills the viewport. Classic modal overlay pattern.

### Q23. [Hard] Which pair prevents layout shift when hiding/showing on hover?

**Answer:** B

**B is correct.** visibility preserves the element's space. display: none removes it entirely, causing layout shifts.

### Q24. [Hard] Why does sticky fail when an ancestor has `overflow: hidden`?

**Answer:** B

**B is correct.** Sticky requires a scrollable parent context. overflow: hidden without scrolling ability can break sticky.

### Q25. [Hard] Which pattern floats a button in the bottom-right of the viewport?

**Answer:** B

**B is correct.** Fixed positioning with bottom and right offsets places the button in the bottom-right of the viewport, persistent during scrolling.

## Coding Challenges

### Challenge 1. Inline vs Block vs Inline-Block Demo

**Difficulty:** Easy

Create a page with three sections, each showing a row of 4 colored boxes using different display values: block, inline, and inline-block. Label each row clearly.

**Constraints:**

- Use div and span with class names. Make the visual difference clear.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
Three labeled rows demonstrating how each display value affects layout.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  body { font-family: Arial, sans-serif; padding: 30px; }
  h2 { color: #a855f7; margin: 20px 0 8px; }
  .box {
    background: #a855f7; color: white;
    padding: 12px 20px; margin: 4px;
    border-radius: 6px;
  }
  .block { display: block; }
  .inline { display: inline; width: 150px; height: 100px; background: #06b6d4; }
  .ib { display: inline-block; width: 100px; text-align: center; background: #f59e0b; }
</style></head>
<body>
  <h2>display: block (stacks vertically)</h2>
  <div class="box block">Block 1</div>
  <div class="box block">Block 2</div>

  <h2>display: inline (ignores width/height)</h2>
  <p>By Aarav: <span class="box inline">Inline 1</span> <span class="box inline">Inline 2</span> flow with text.</p>

  <h2>display: inline-block (row + sizing)</h2>
  <div>
    <span class="box ib">IB 1</span>
    <span class="box ib">IB 2</span>
    <span class="box ib">IB 3</span>
    <span class="box ib">IB 4</span>
  </div>
</body>
</html>
```

### Challenge 2. Corner Badge on Card

**Difficulty:** Easy

Create a product card with a 'SALE' badge hanging off the top-right corner. The card should be 300px wide with a white background, and the badge should be a red circle that extends slightly beyond the card edge.

**Constraints:**

- Use position: relative on the card, position: absolute on the badge with negative offsets.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
A card with a red 'SALE' circle badge in the top-right corner.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  body { font-family: Arial, sans-serif; padding: 60px; background: #f3f4f6; }
  .card {
    position: relative;
    width: 300px;
    background: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    margin: 0 auto;
  }
  .badge {
    position: absolute;
    top: -12px;
    right: -12px;
    background: #ef4444;
    color: white;
    width: 50px; height: 50px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-weight: bold; font-size: 12px;
    box-shadow: 0 6px 15px rgba(239, 68, 68, 0.4);
  }
  h3 { margin: 0 0 8px; }
  p { margin: 0; color: #4b5563; line-height: 1.5; font-size: 14px; }
</style></head>
<body>
  <div class="card">
    <div class="badge">SALE</div>
    <h3>Coding Kit</h3>
    <p>For Priya: 12 weeks of lessons, projects, and a cheat sheet.</p>
  </div>
</body>
</html>
```

### Challenge 3. Sticky Navbar

**Difficulty:** Medium

Build a page with a sticky navbar that stays at the top when scrolling. The navbar should have a logo on the left and 3 links on the right. Below, add enough content to enable scrolling.

**Constraints:**

- Use position: sticky; top: 0. Add z-index so the nav stays above the content.

**Sample input:**

```
Scroll the page
```

**Sample output:**

```
The nav scrolls with the page initially, then sticks to the top.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Arial, sans-serif; }
  .nav {
    position: sticky;
    top: 0;
    z-index: 100;
    background: white;
    border-bottom: 1px solid #e5e7eb;
    padding: 16px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo { font-weight: bold; color: #a855f7; font-size: 20px; }
  .links a { margin-left: 24px; color: #4b5563; text-decoration: none; }
  main { max-width: 700px; margin: 0 auto; padding: 40px 20px; }
  section { min-height: 70vh; padding: 40px 0; border-bottom: 1px solid #eee; }
  h2 { color: #a855f7; margin-bottom: 12px; }
  p { line-height: 1.7; color: #4b5563; }
</style></head>
<body>
  <nav class="nav">
    <div class="logo">Kavya.dev</div>
    <div class="links"><a href="#">Home</a><a href="#">Blog</a><a href="#">Contact</a></div>
  </nav>
  <main>
    <section><h2>Section 1</h2><p>Scroll down. The nav stays at the top because position: sticky.</p></section>
    <section><h2>Section 2</h2><p>It keeps sticking as you scroll further through the page.</p></section>
    <section><h2>Section 3</h2><p>z-index keeps it above the section content.</p></section>
  </main>
</body>
</html>
```

### Challenge 4. Floating Action Button

**Difficulty:** Medium

Build a page with a long content area and a circular floating action button (FAB) fixed in the bottom-right of the viewport. The button should always be visible while scrolling.

**Constraints:**

- Use position: fixed. Make the button circular with border-radius: 50%.

**Sample input:**

```
Scroll the page
```

**Sample output:**

```
A purple circle button stays pinned to the bottom-right of the screen.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Arial, sans-serif; }
  .content { max-width: 700px; margin: 0 auto; padding: 40px 20px; min-height: 200vh; }
  h1 { color: #1a1a2e; margin-bottom: 16px; }
  p { line-height: 1.7; color: #4b5563; margin-bottom: 16px; }
  .fab {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #a855f7;
    color: white;
    border: none;
    font-size: 28px;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(168, 85, 247, 0.4);
  }
</style></head>
<body>
  <div class="content">
    <h1>Long Article</h1>
    <p>The purple + button at the bottom-right stays fixed as you scroll. Try it, Ishaan!</p>
    <p>Fixed positioning anchors the button to the viewport instead of the document.</p>
    <p>It does not move when you scroll, unlike relative or absolute positioning.</p>
    <p>Common use: floating action buttons, chat widgets, cookie banners.</p>
    <p>Scroll down to see more content and observe the FAB staying in place.</p>
    <p>Fixed elements ignore their parents and anchor directly to the viewport edges.</p>
    <p>Keep scrolling to see the effect clearly.</p>
    <p>More content here for scrolling demonstration.</p>
  </div>
  <button class="fab">+</button>
</body>
</html>
```

### Challenge 5. Modal Overlay

**Difficulty:** Hard

Build a modal dialog that sits on top of the entire page. Use a dark semi-transparent overlay covering the viewport and a white modal card centered on screen. Include a close button in the modal's top-right corner.

**Constraints:**

- Overlay uses position: fixed with all edges at 0. Modal is centered with flex. Close button uses position: absolute.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
A modal with a dark overlay and centered white card with a close button.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Arial, sans-serif; padding: 40px; background: #f3f4f6; }
  h1 { margin-bottom: 12px; color: #1a1a2e; }
  p { color: #4b5563; line-height: 1.6; }
  .overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
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
    position: relative;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
  }
  .close {
    position: absolute;
    top: 8px;
    right: 14px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #9ca3af;
  }
  .modal h3 { margin: 0 0 12px; color: #1a1a2e; }
  .btn { margin-top: 16px; padding: 10px 20px; background: #a855f7; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; }
</style></head>
<body>
  <h1>Home Page by Meera</h1>
  <p>Behind the overlay, regular content. The modal is always centered on screen.</p>
  <div class="overlay">
    <div class="modal">
      <button class="close">x</button>
      <h3>Welcome!</h3>
      <p>This modal uses fixed positioning for the overlay and absolute positioning for the close button.</p>
      <button class="btn">Got it</button>
    </div>
  </div>
</body>
</html>
```

### Challenge 6. Image with Overlay Text

**Difficulty:** Hard

Create an image (use a background color as a placeholder) with a title and tag overlayed at the bottom using absolute positioning. The image should be 400x280 with rounded corners. The text overlay has a dark semi-transparent background.

**Constraints:**

- Use position: relative on the image wrapper and position: absolute on the text overlay.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
An image card with title text overlayed at the bottom inside a semi-transparent gradient.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  body { font-family: Arial, sans-serif; padding: 40px; background: #f3f4f6; display: flex; justify-content: center; }
  .card {
    position: relative;
    width: 400px;
    height: 280px;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    background: linear-gradient(135deg, #a855f7, #06b6d4);
  }
  .overlay {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
    color: white;
  }
  .tag {
    display: inline-block;
    background: rgba(255, 255, 255, 0.2);
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 8px;
  }
  h3 { margin: 0 0 4px; font-size: 22px; }
  p  { margin: 0; font-size: 13px; opacity: 0.9; }
</style></head>
<body>
  <div class="card">
    <div class="overlay">
      <span class="tag">Tutorial</span>
      <h3>CSS Positioning</h3>
      <p>By Riya Patel - 8 min read</p>
    </div>
  </div>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/display-and-positioning/*
