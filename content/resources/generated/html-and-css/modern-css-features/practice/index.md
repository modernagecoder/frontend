---
title: "Practice: Modern CSS - Container Queries, Subgrid, clamp(), :has() Selector"
description: "56 practice problems for Modern CSS - Container Queries, Subgrid, clamp(), :has() Selector in HTML and CSS"
slug: modern-css-features-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/modern-css-features/practice/
category: "HTML and CSS"
---
# Practice: Modern CSS - Container Queries, Subgrid, clamp(), :has() Selector

**Total questions:** 56

## Topic-Specific Questions

### Q1. [Easy] What does `aspect-ratio: 16/9` do?

*Hint:* Think width to height.

**Answer:** Locks the element's width-to-height ratio at 16:9. If you set width to 320px, height becomes 180px automatically.

`aspect-ratio` keeps a fixed ratio between width and height. Set one dimension and the other is calculated. No more padding-top hacks for videos, images, or cards.

### Q2. [Easy] What does `clamp(16px, 5vw, 32px)` do?

*Hint:* Minimum, preferred, maximum.

**Answer:** Returns 5vw of the viewport width, but never less than 16px and never more than 32px. A smooth fluid value.

`clamp(min, preferred, max)` gives you the preferred value bounded by the min and max. Perfect for fluid typography that stays legible at all sizes.

### Q3. [Easy] What does `:has()` select?

*Hint:* It is a parent selector.

**Answer:** An element that contains a descendant matching the inner selector. `.card:has(img)` matches a card that contains an image.

`:has()` finally gives CSS a parent selector. It walks up from a matching descendant and matches the parent.

### Q4. [Easy] Why is `100dvh` better than `100vh` on mobile?

*Hint:* Mobile toolbars change.

**Answer:** On mobile, the address bar shows and hides as the user scrolls. `100dvh` (dynamic viewport height) updates to reflect this. `100vh` does not, causing layout jumps.

`dvh`, `svh`, and `lvh` are the new viewport units. `dvh` follows the current viewport. `svh` is the small viewport (with toolbars showing). `lvh` is the large viewport (toolbars hidden).

### Q5. [Easy] What does `text-wrap: balance` do on a heading?

*Hint:* No orphans.

**Answer:** It rewraps the heading so each line has roughly the same number of words, avoiding a lonely orphan word on the last line.

`text-wrap: balance` is a typography win. Before it, headings often looked awkward because the last line had one word. Now the browser balances the wrapping for you.

### Q6. [Easy] What is `container-type: inline-size` used for?

*Hint:* Marks an element as something.

**Answer:** It marks the element as a query container so descendants can use `@container` queries based on its width.

Without `container-type`, the browser does not track the element's size for container queries. `inline-size` is the most common value — it means 'only track the inline axis (width)'.

### Q7. [Easy] What does `:focus-visible` match?

*Hint:* Keyboard vs mouse.

**Answer:** Focused elements, but only when the browser thinks the focus came from the keyboard (not from a mouse click).

`:focus-visible` keeps focus rings invisible for mouse users but visible for keyboard users. It is the modern standard for accessible focus styling.

### Q8. [Easy] What does `margin-inline: 20px` do?

*Hint:* Logical property.

**Answer:** Sets margin-left and margin-right each to 20px (in left-to-right languages). In right-to-left languages, it sets right and left accordingly.

Logical properties use 'inline' (text direction) and 'block' (flow direction) instead of left/right/top/bottom. They work correctly in any writing direction.

### Q9. [Easy] What does `accent-color: #7c3aed` style?

*Hint:* Form controls.

**Answer:** It sets the 'accent' color used to draw checkboxes, radio buttons, range sliders, and progress bars. All native form controls become purple.

`accent-color` was introduced to give developers a one-line way to theme form controls that historically were very hard to style.

### Q10. [Easy] Why use container queries instead of media queries?

*Hint:* Components do not know about viewports.

**Answer:** A component does not know how wide the viewport is — it knows how wide its container is. Container queries let the same component adapt correctly whether it is in a narrow sidebar or a wide hero.

Media queries are based on the viewport. Container queries are based on the container of a component. This is the last missing piece for truly reusable, responsive components.

### Q11. [Medium] What does this do?

```
.card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
}
```

*Hint:* Subgrid uses parent tracks.

**Answer:** The card becomes a grid whose rows are inherited from its parent grid. `grid-row: span 3` makes it occupy 3 parent rows, and its children snap to those parent tracks.

`subgrid` is the magic that lets nested grid items align to the parent grid. Use it to align titles and footers across a row of cards of different heights.

### Q12. [Medium] What does `color-mix(in oklab, #7c3aed 80%, white)` produce?

*Hint:* Mix 80% purple with 20% white.

**Answer:** A light tint of purple (80% brand purple + 20% white). It is a pastel version of the original color.

`color-mix()` blends two colors in a chosen color space. `oklab` gives perceptually-uniform mixing (no ugly muddy middles). Great for generating tints, shades, and hover variants from a base color.

### Q13. [Medium] What does this do?

```
body:has(.modal[open]) {
  overflow: hidden;
}
```

*Hint:* :has() plus attribute.

**Answer:** When any descendant of the body is a modal with the `open` attribute, the body's scrolling is disabled. Great for locking the background when a modal is visible.

`:has()` makes this one line. Without it, you had to toggle a class on the body from JavaScript whenever the modal opened or closed.

### Q14. [Medium] What is the difference between `svh`, `lvh`, and `dvh`?

*Hint:* Small, large, dynamic.

**Answer:** `svh`: small viewport (with toolbars showing). `lvh`: large viewport (with toolbars hidden). `dvh`: dynamic - updates live as toolbars show/hide.

All three were added to solve the mobile address bar problem. `dvh` is what you usually want: a value that tracks the current viewport.

### Q15. [Medium] What does this do?

```
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
.slide { scroll-snap-align: center; }
```

*Hint:* Snap to slides.

**Answer:** A horizontal scrolling carousel where each slide snaps to the center of the viewport as the user scrolls. No JavaScript.

`scroll-snap-type: x mandatory` tells the browser to snap to points along the x-axis. `scroll-snap-align: center` aligns each slide to the center of the scroll container.

### Q16. [Medium] What does `padding-block-start: 16px` do in a left-to-right language?

*Hint:* Block is vertical in LTR.

**Answer:** It sets `padding-top: 16px`. In LTR languages, the 'block' axis is vertical and 'start' is the top.

Logical properties map differently depending on writing direction. In LTR horizontal text: inline = left/right, block = top/bottom. In Arabic (RTL): inline is reversed. In vertical-rl (like Japanese top-to-bottom), block is horizontal.

### Q17. [Medium] Does this container query work?

```
.sidebar { /* no container-type */ }
@container (min-width: 400px) {
  .card { display: grid; }
}
```

*Hint:* container-type is required.

**Answer:** No. Without `container-type: inline-size` (or `size`) on `.sidebar`, the browser does not track its size and the `@container` rule never matches.

Container queries require an explicit container declaration. The `@container` at-rule without a named container walks up to the nearest ancestor that has a container-type set.

### Q18. [Medium] What does `font-size: clamp(1rem, 3vw + 0.5rem, 2rem)` do?

*Hint:* Complex preferred expression.

**Answer:** Font size is 3vw plus 0.5rem, but clamped between 1rem and 2rem. This is a common pattern for smooth but bounded fluid typography.

The preferred argument in `clamp()` can be any expression, including sums of different units. Adding a fixed `rem` to a viewport unit gives a gentler slope than pure `vw`.

### Q19. [Medium] What selects labels whose input is checked?

*Hint:* Parent selector.

**Answer:** `label:has(input:checked)`

:has() matches a label containing a checked input. Before :has(), you would have to use the general sibling combinator and carefully structure your HTML.

### Q20. [Medium] What is wrong with this?

```
h1 { font-size: clamp(5vw, 32px, 60px); }
```

*Hint:* Argument order.

**Answer:** The arguments are in the wrong order. It should be `clamp(min, preferred, max)`, so: `clamp(32px, 5vw, 60px)`.

The first argument is the minimum, the second is the preferred (fluid) value, and the third is the maximum. Getting the order wrong may still 'work' but at unexpected values.

### Q21. [Medium] What does this do?

```
.thumbnail { aspect-ratio: 1; width: 80px; }
```

*Hint:* Square.

**Answer:** Creates an 80x80 square. The width is 80px and `aspect-ratio: 1` makes the height match.

`aspect-ratio: 1` is shorthand for `1 / 1` — a square. Set width (or height) and the other dimension follows automatically.

### Q22. [Medium] Is this valid?

```
input[type="range"] { accent-color: #7c3aed; }
```

*Hint:* Yes.

**Answer:** Yes. `accent-color` styles the track and thumb of range sliders with the specified color.

`accent-color` works on ``, ``, ``, and ``.

### Q23. [Medium] Why is subgrid so useful for card grids?

*Hint:* Alignment across cards.

**Answer:** Without subgrid, each card has its own grid and the internal rows of different cards do not align. With subgrid, cards share the parent's row tracks, so all titles, bodies, and footers line up across the whole row.

The classic 'uneven card content' problem is solved: even if one card has a longer title or a bigger image, the 'Read More' button at the bottom of every card still lines up perfectly.

### Q24. [Medium] Name three things `:has()` replaces that used to require JavaScript.

*Hint:* Think reactive patterns.

**Answer:** 1) Toggling a class on a parent based on child state. 2) Disabling a submit button while any input is invalid. 3) Hiding body scroll when a modal is open. 4) Highlighting a card that contains an image. And many more.

Most 'reactive CSS' patterns that needed JavaScript event listeners can now be written as a single CSS selector with `:has()`. The saving in code and complexity is enormous.

### Q25. [Hard] What does this do?

```
@container card (min-width: 500px) {
  .title { font-size: 28px; }
}
```

*Hint:* Named container query.

**Answer:** When the nearest ancestor with `container-name: card` (and a container-type) is at least 500px wide, `.title` gets a 28px font size.

`@container name (query)` matches only the container with that name. This lets you have multiple levels of containers and target specific ones.

### Q26. [Hard] What is wrong?

```
body:has(form:has(input:invalid)) { background: red; }
```

*Hint:* Unnecessary nesting.

**Answer:** Nested :has() is usually unnecessary. Use `body:has(input:invalid)` instead. :has() already walks the whole subtree.

Nested :has() is valid but slower and harder to read. Unless you need to match two different relationships, flatten to a single :has().

### Q27. [Hard] What happens here?

```
:root { accent-color: magenta; }
.dark { accent-color: cyan; }
```

*Hint:* Inheritance.

**Answer:** Form controls use magenta by default but cyan inside any element with the `dark` class. `accent-color` is inherited.

`accent-color` inherits down the DOM tree, so you can theme different sections of a page differently just by setting it on a parent element.

### Q28. [Hard] Does this do what you expect?

```
.card:has(.featured) h3 {
  color: red;
}
```

*Hint:* Parent selector with a descendant combinator.

**Answer:** Yes. It selects h3 elements inside a card that contains a .featured descendant. The red color applies only to cards marked as featured.

`:has()` can be combined with descendant combinators. Here, we first pick cards that *contain* a .featured element, then style h3 descendants of those cards.

### Q29. [Hard] What does `interpolate-size: allow-keywords` do?

*Hint:* Animating to/from auto.

**Answer:** It lets CSS transition from a fixed size to `auto` (or `min-content`, `max-content`, etc.), which historically was impossible. Enables animating accordions open without JavaScript.

Before `interpolate-size`, animating from 0 to `height: auto` did not work — browsers could not interpolate. The new property unlocks long-awaited accordion and dropdown animations.

### Q30. [Hard] When would you use `container-type: size` instead of `inline-size`?

*Hint:* Both axes.

**Answer:** Use `size` when you need to query the container's height as well. It tracks both width and height. Use `inline-size` (more efficient) when you only need width, which is most of the time.

`size` is more expensive because the browser must track both dimensions. Use it only when your design actually depends on container height — for example, a card that changes layout based on available vertical space.

### Q31. [Hard] Why is `color-mix(in oklab, ...)` preferred over `in srgb`?

*Hint:* Color space.

**Answer:** `oklab` is a perceptually-uniform color space, so mixing produces visually smooth transitions without the muddy greens and browns you sometimes get in sRGB. Mixing red and blue in oklab gives a clean purple.

sRGB mixing can produce unexpected intermediate colors because the color space is not perceptually uniform. oklab (and oklch) were designed for uniform perception, so mixing, lightening, and darkening produce more natural results.

### Q32. [Hard] How does `text-wrap: balance` work differently from manual `` tags?

*Hint:* Responsive.

**Answer:** Manual line breaks force a break at a fixed position regardless of screen size, often breaking badly on narrow or wide screens. `text-wrap: balance` lets the browser rebalance at any size, so the heading always looks well-wrapped.

Balance is responsive — it recalculates on every resize. Manual `` is a static commitment to a specific break position. Use balance for headings, let the browser do the work.

## Multiple Choice Questions

### Q1. [Easy] What does `aspect-ratio: 16/9` do?

**Answer:** B

**B is correct.** `aspect-ratio` locks the width-to-height ratio. Set one dimension and the other is calculated automatically.

### Q2. [Easy] Which is the correct order for `clamp()`?

**Answer:** C

**C is correct.** `clamp(min, preferred, max)`. The preferred value is used, but never below the min or above the max.

### Q3. [Easy] What does `:has()` enable that CSS historically could not do?

**Answer:** B

**B is correct.** `:has()` is the parent selector. It lets you match an element based on what it contains, which CSS could not do before 2022-2023.

### Q4. [Easy] What must an element have to participate in container queries?

**Answer:** B

**B is correct.** Without `container-type`, the browser does not track the element's size for container queries.

### Q5. [Easy] Which unit should you prefer over `100vh` on mobile?

**Answer:** B

**B is correct.** `100dvh` (dynamic viewport height) adjusts as mobile browser toolbars show and hide, preventing layout jumps.

### Q6. [Easy] What does `text-wrap: balance` do?

**Answer:** B

**B is correct.** It rebalances wrapping so a heading does not end with a single orphan word. Great for hero titles.

### Q7. [Easy] Which property themes all native form controls in one line?

**Answer:** C

**C is correct.** `accent-color` sets the theme color for checkboxes, radios, range sliders, and progress bars.

### Q8. [Easy] What is `margin-inline: 20px` in a left-to-right language?

**Answer:** B

**B is correct.** In LTR languages, the inline axis is horizontal. `margin-inline` sets left and right margin. In RTL languages it still sets the start-and-end direction correctly.

### Q9. [Medium] What does `container-type: inline-size` mean?

**Answer:** A

**A is correct.** `inline-size` tracks the container's inline (width) dimension. It is more efficient than `size` and is what you want most of the time.

### Q10. [Medium] What is subgrid used for?

**Answer:** B

**B is correct.** `grid-template-columns: subgrid` (or rows) makes a child grid use the parent's tracks, aligning descendants across siblings.

### Q11. [Medium] Which `:focus-visible` statement is TRUE?

**Answer:** B

**B is correct.** `:focus-visible` is the modern focus ring pseudo-class. It shows the ring for keyboard users but hides it for mouse users who do not need it.

### Q12. [Medium] How do you disable a submit button while any input is invalid, with just CSS?

**Answer:** B

**B is correct.** `:has()` checks if the form contains an invalid input. If so, the rule disables and fades the button.

### Q13. [Medium] What does `color-mix(in oklab, red 50%, blue)` produce?

**Answer:** A

**A is correct.** `color-mix()` blends two colors in the specified color space. `oklab` gives perceptually-uniform mixing.

### Q14. [Medium] Which is the right way to build a carousel with pure CSS?

**Answer:** B

**B is correct.** `scroll-snap` gives you native carousel scrolling that snaps to each slide, with no JavaScript required.

### Q15. [Medium] Which viewport unit updates live as mobile toolbars show/hide?

**Answer:** D

**D is correct.** `dvh` (dynamic viewport height) updates continuously to match the current visible viewport.

### Q16. [Hard] You have `@container (min-width: 400px) { ... }` with NO container-type set on any ancestor. What happens?

**Answer:** B

**B is correct.** Without `container-type` on any ancestor, the query has no container to match and never activates.

### Q17. [Hard] Which is the best fluid font-size declaration?

**Answer:** C

**C is correct.** `clamp()` gives a fluid value bounded by a readable minimum and a reasonable maximum. Pure `vw` becomes too small on mobile and too large on desktop.

### Q18. [Hard] What does this do?
`label:has(input:checked) { background: #7c3aed; color: white; }`

**Answer:** B

**B is correct.** `:has(input:checked)` matches labels with a checked input inside. Clicking the label ticks the input, which instantly triggers the highlight style.

## Coding Challenges

### Challenge 1. Fluid Typography Hero

**Difficulty:** Easy

Build a full-screen hero section with a large heading, subtitle, and CTA button. Use `clamp()` for every font-size and padding value so the whole section scales smoothly from mobile to desktop. Use `text-wrap: balance` on the heading. Use `100dvh` for the height. Name the project after Aarav.

**Constraints:**

- No media queries. Use clamp() for fluid values. Use 100dvh. Use text-wrap: balance.

**Sample input:**

```
Resize the browser window
```

**Sample output:**

```
A hero that scales smoothly from phone to desktop without any media queries.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: #0f172a; color: white; }
  .hero {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: clamp(24px, 6vw, 80px) clamp(16px, 5vw, 48px);
    gap: clamp(16px, 2vw, 28px);
    background: radial-gradient(ellipse at top, #1e1b4b, #0f172a 60%);
  }
  .hero h1 {
    font-size: clamp(34px, 6vw, 72px);
    line-height: 1.1;
    text-wrap: balance;
    background: linear-gradient(135deg, #a855f7, #06b6d4);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    max-width: 900px;
  }
  .hero p {
    font-size: clamp(16px, 2vw, 22px);
    color: #94a3b8;
    max-width: 640px;
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
    <h1>Aarav's Frontend Universe</h1>
    <p>Every size on this page uses clamp(). No breakpoints. No media queries. Pure fluid design that looks perfect at any viewport size.</p>
    <a href="#" class="cta">Explore Projects</a>
  </section>
</body>
</html>
```

### Challenge 2. Square Avatar Grid with aspect-ratio

**Difficulty:** Easy

Build a responsive grid of 8 user avatars for Priya, Rohan, Ishita, Vivaan, Anika, Kavya, Meera, and Ishaan. Every avatar MUST be a perfect square thanks to `aspect-ratio: 1`. Use a responsive grid with `repeat(auto-fit, minmax())`. Each avatar is a gradient with the student's initial.

**Constraints:**

- Use aspect-ratio. Use auto-fit minmax. No fixed height on avatars.

**Sample input:**

```
None
```

**Sample output:**

```
A responsive grid of 8 square gradient avatars, each showing the user's initial.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: #f8fafc; padding: 40px 24px; }
  h1 { text-align: center; color: #7c3aed; margin-bottom: 24px; font-size: clamp(22px, 3vw, 32px); }
  .people { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 16px; max-width: 800px; margin: 0 auto; }
  .person {
    aspect-ratio: 1;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: clamp(28px, 5vw, 48px);
    font-weight: 800;
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    transition: transform 0.2s;
  }
  .person:hover { transform: translateY(-4px) scale(1.03); }
  .p1 { background: linear-gradient(135deg, #a855f7, #ec4899); }
  .p2 { background: linear-gradient(135deg, #06b6d4, #0ea5e9); }
  .p3 { background: linear-gradient(135deg, #f59e0b, #ef4444); }
  .p4 { background: linear-gradient(135deg, #10b981, #06b6d4); }
  .p5 { background: linear-gradient(135deg, #8b5cf6, #3b82f6); }
  .p6 { background: linear-gradient(135deg, #ec4899, #f59e0b); }
  .p7 { background: linear-gradient(135deg, #14b8a6, #84cc16); }
  .p8 { background: linear-gradient(135deg, #f43f5e, #8b5cf6); }
</style>
</head>
<body>
  <h1>Class of 2026</h1>
  <div class="people">
    <div class="person p1">P</div>
    <div class="person p2">R</div>
    <div class="person p3">I</div>
    <div class="person p4">V</div>
    <div class="person p5">A</div>
    <div class="person p6">K</div>
    <div class="person p7">M</div>
    <div class="person p8">I</div>
  </div>
</body>
</html>
```

### Challenge 3. Card That Responds to Its Container

**Difficulty:** Medium

Build a card component that uses container queries. Place the same card in two containers: a narrow column and a wide column. When the container is wider than 380px, the card should switch from vertical (image above text) to horizontal (image beside text). Use `container-type: inline-size` and `@container`.

**Constraints:**

- Use container queries. No media queries. Same CSS class for both cards.

**Sample input:**

```
None
```

**Sample output:**

```
Two copies of the same card component with different layouts based on their container widths.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: #f1f5f9; padding: 32px; display: grid; gap: 24px; grid-template-columns: 1fr 2fr; max-width: 1100px; margin: 0 auto; }
  @media (max-width: 800px) { body { grid-template-columns: 1fr; } }
  .column { background: white; padding: 20px; border-radius: 14px; container-type: inline-size; box-shadow: 0 4px 14px rgba(0,0,0,0.06); }
  .column h2 { color: #7c3aed; margin-bottom: 14px; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; }
  .card {
    background: #faf5ff;
    border: 1px solid #e9d5ff;
    border-radius: 12px;
    padding: 16px;
  }
  .card .thumb {
    width: 100%;
    aspect-ratio: 16/10;
    background: linear-gradient(135deg, #a855f7, #ec4899);
    border-radius: 8px;
    margin-bottom: 12px;
  }
  .card h3 { color: #0f172a; font-size: 18px; margin-bottom: 6px; }
  .card p { color: #64748b; font-size: 14px; line-height: 1.5; }
  @container (min-width: 380px) {
    .card {
      display: grid;
      grid-template-columns: 160px 1fr;
      gap: 16px;
      align-items: center;
    }
    .card .thumb { aspect-ratio: 1; margin: 0; }
  }
</style>
</head>
<body>
  <div class="column">
    <h2>Narrow column</h2>
    <div class="card">
      <div class="thumb"></div>
      <h3>Meera's Blog Post</h3>
      <p>This column is narrow, so the same card stacks vertically with the image on top.</p>
    </div>
  </div>
  <div class="column">
    <h2>Wide column</h2>
    <div class="card">
      <div class="thumb"></div>
      <h3>Ishaan's Blog Post</h3>
      <p>Same card, same HTML, same CSS class. But the container query detects a wider parent and switches to a horizontal layout automatically.</p>
    </div>
  </div>
</body>
</html>
```

### Challenge 4. Pure CSS Carousel with scroll-snap

**Difficulty:** Medium

Build a horizontal carousel with 6 project cards (name them after Aarav, Priya, Rohan, Ishita, Vivaan, and Anika). Use `scroll-snap-type: x mandatory` on the container and `scroll-snap-align: center` on each slide. Each slide should be a gradient with the project name. No JavaScript.

**Constraints:**

- Use scroll-snap. No JavaScript. Use aspect-ratio on slides.

**Sample input:**

```
Drag or scroll horizontally
```

**Sample output:**

```
A smooth scrolling carousel that snaps each card to the center.
```

**Solution:**

```html-and-css
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
    scroll-padding-inline: 24px;
    padding: 16px 24px 32px;
  }
  .slide {
    flex: 0 0 85%;
    max-width: 520px;
    aspect-ratio: 16/10;
    scroll-snap-align: center;
    border-radius: 20px;
    padding: 28px;
    display: flex;
    align-items: flex-end;
    font-size: clamp(20px, 3vw, 32px);
    font-weight: 800;
    box-shadow: 0 20px 50px rgba(0,0,0,0.4);
  }
  .s1 { background: linear-gradient(135deg, #7c3aed, #ec4899); }
  .s2 { background: linear-gradient(135deg, #06b6d4, #0ea5e9); }
  .s3 { background: linear-gradient(135deg, #f59e0b, #ef4444); }
  .s4 { background: linear-gradient(135deg, #10b981, #06b6d4); }
  .s5 { background: linear-gradient(135deg, #8b5cf6, #3b82f6); }
  .s6 { background: linear-gradient(135deg, #ec4899, #f59e0b); }
  @media (min-width: 700px) { .slide { flex: 0 0 60%; } }
</style>
</head>
<body>
  <h1>Student Showcase</h1>
  <div class="carousel">
    <div class="slide s1">Aarav's Quiz App</div>
    <div class="slide s2">Priya's Weather</div>
    <div class="slide s3">Rohan's Calculator</div>
    <div class="slide s4">Ishita's Blog</div>
    <div class="slide s5">Vivaan's Portfolio</div>
    <div class="slide s6">Anika's Timer</div>
  </div>
</body>
</html>
```

### Challenge 5. Subgrid Card Row with Aligned Content

**Difficulty:** Hard

Build a row of 3 blog cards where the title, body, and 'Read More' link align perfectly across all cards, even though the content lengths differ. Use `grid-template-rows: subgrid` on each card. The parent grid must define the row structure.

**Constraints:**

- Use subgrid. Do not use fixed heights on the cards.

**Sample input:**

```
None
```

**Sample output:**

```
Three cards where each title starts at the same y-position and each 'Read More' sits at the same y-position, regardless of body length.
```

**Solution:**

```html-and-css
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
    grid-template-rows: auto auto 1fr auto;
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
  .card .img { aspect-ratio: 16/9; border-radius: 10px; margin-bottom: 12px; }
  .card h3 { color: #0f172a; font-size: 18px; text-wrap: balance; }
  .card p { color: #64748b; font-size: 14px; line-height: 1.6; }
  .card a { color: #7c3aed; text-decoration: none; font-weight: 600; font-size: 14px; margin-top: 12px; }
  .c1 .img { background: linear-gradient(135deg, #a855f7, #ec4899); }
  .c2 .img { background: linear-gradient(135deg, #06b6d4, #0ea5e9); }
  .c3 .img { background: linear-gradient(135deg, #f59e0b, #ef4444); }
  @media (max-width: 800px) { .grid { grid-template-columns: 1fr; } }
</style>
</head>
<body>
  <h1>Kavya's Blog</h1>
  <div class="grid">
    <div class="card c1">
      <div class="img"></div>
      <h3>Why I Switched to Subgrid</h3>
      <p>Short post.</p>
      <a href="#">Read more</a>
    </div>
    <div class="card c2">
      <div class="img"></div>
      <h3>Container Queries Change Everything for Component-Driven Design</h3>
      <p>A detailed walkthrough of how container queries replaced dozens of media queries in my side project, with before and after screenshots and code samples.</p>
      <a href="#">Read more</a>
    </div>
    <div class="card c3">
      <div class="img"></div>
      <h3>CSS has() In Production</h3>
      <p>Real examples from my work.</p>
      <a href="#">Read more</a>
    </div>
  </div>
</body>
</html>
```

### Challenge 6. Reactive Form with :has() and color-mix()

**Difficulty:** Hard

Build a signup form that changes color state using `:has()`. When any input is invalid, the form border is red and the submit button is disabled. When all are valid, the border turns green. Use `color-mix()` to generate hover and disabled color variants from a single brand color. No JavaScript.

**Constraints:**

- Use :has() for the parent reaction. Use color-mix() for variants. No JavaScript.

**Sample input:**

```
Type into form fields
```

**Sample output:**

```
The form reacts to validation state in real time: red border + disabled button when invalid, green border + enabled button when all valid.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  :root {
    --brand: #7c3aed;
    --bg: #f8fafc;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: var(--bg); padding: clamp(24px, 5vw, 60px); display: flex; justify-content: center; }
  form {
    background: white;
    padding: clamp(24px, 4vw, 36px);
    border-radius: 18px;
    max-width: 440px;
    width: 100%;
    box-shadow: 0 14px 40px rgba(0,0,0,0.08);
    border: 3px solid transparent;
    transition: border-color 0.3s, background 0.3s;
  }
  form:has(input:invalid) {
    border-color: color-mix(in oklab, #ef4444 40%, white);
    background: color-mix(in oklab, #fef2f2 70%, white);
  }
  form:has(input:valid):not(:has(input:invalid)) {
    border-color: color-mix(in oklab, #10b981 40%, white);
    background: color-mix(in oklab, #f0fdf4 70%, white);
  }
  h2 { color: #0f172a; margin-bottom: 16px; font-size: clamp(20px, 3vw, 26px); text-wrap: balance; }
  label { display: block; margin-bottom: 14px; font-size: 13px; color: #475569; }
  input {
    display: block; width: 100%; padding: 12px;
    margin-top: 6px; border: 2px solid #e2e8f0;
    border-radius: 10px; font-size: 15px; outline: none;
    transition: border-color 0.2s;
  }
  input:focus { border-color: var(--brand); }
  input:not(:placeholder-shown):valid { border-color: #10b981; }
  input:not(:placeholder-shown):invalid { border-color: #ef4444; }
  button {
    width: 100%; padding: 14px;
    background: var(--brand); color: white;
    border: none; border-radius: 10px;
    font-size: 16px; font-weight: 700;
    cursor: pointer;
    transition: background 0.2s, opacity 0.2s;
  }
  button:hover { background: color-mix(in oklab, var(--brand) 85%, black); }
  form:has(input:invalid) button {
    background: color-mix(in oklab, var(--brand) 30%, white);
    pointer-events: none;
  }
  .status { margin-top: 12px; text-align: center; font-size: 14px; font-weight: 600; min-height: 20px; }
  form:has(input:invalid) .status::before { content: 'Fix the highlighted fields'; color: #ef4444; }
  form:has(input:valid):not(:has(input:invalid)) .status::before { content: 'All good - ready to submit!'; color: #10b981; }
</style>
</head>
<body>
  <form>
    <h2>Ishaan's Signup Form</h2>
    <label>Name<input type="text" placeholder="Your name" minlength="2" required></label>
    <label>Email<input type="email" placeholder="you@example.com" required></label>
    <label>Age<input type="number" placeholder="10 to 18" min="10" max="18" required></label>
    <label>Password<input type="password" placeholder="At least 6 chars" minlength="6" required></label>
    <button type="submit">Create Account</button>
    <p class="status"></p>
  </form>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/modern-css-features/*
