---
title: "Practice: Responsive Design and Media Queries"
description: "60 practice problems for Responsive Design and Media Queries in HTML and CSS"
slug: responsive-design-and-media-queries-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/responsive-design-and-media-queries/practice/
category: "HTML and CSS"
---
# Practice: Responsive Design and Media Queries

**Total questions:** 60

## Topic-Specific Questions

### Q1. [Easy] What is responsive web design?

*Hint:* Think about different screen sizes.

**Answer:** Building one website that looks good and works well on all screen sizes — phones, tablets, laptops, and desktops — without needing separate sites for each.

Responsive design uses fluid layouts, flexible images, and media queries to adapt a single codebase to any viewport.

### Q2. [Easy] Which HTML tag is MANDATORY for responsive design to work on mobile?

*Hint:* Goes in the head.

**Answer:** ``

Without this meta tag, mobile browsers render your site at desktop width and scale it down, breaking all responsive styles.

### Q3. [Easy] What does this media query mean?

```
@media (min-width: 768px) {
  .sidebar { display: block; }
}
```

*Hint:* min-width means 'at least this wide'.

**Answer:** The sidebar displays as a block ONLY when the viewport is 768px wide or more.

`min-width` matches when the viewport is at least that wide. On narrower screens, the rule does not apply.

### Q4. [Easy] What is the difference between `min-width` and `max-width` in media queries?

*Hint:* One is a floor; the other is a ceiling.

**Answer:** `min-width` applies styles when the viewport is that wide OR WIDER. `max-width` applies when the viewport is that wide OR NARROWER.

Mobile-first uses min-width (smallest styles first, add desktop rules). Desktop-first uses max-width (largest first, narrow overrides).

### Q5. [Easy] What does `1rem` mean?

*Hint:* rem = root em.

**Answer:** 1 times the font-size of the root (html) element, which is 16px by default.

`rem` is relative to the html element's font-size. If html has font-size: 20px, then 1rem = 20px. This makes scaling the entire site proportional by changing one value.

### Q6. [Easy] What does `100vw` mean?

*Hint:* vw = viewport width.

**Answer:** 100 percent of the viewport width — the full width of the browser window.

`vw` stands for viewport width. `1vw` is 1 percent of the viewport width. `100vw` is the full width.

### Q7. [Medium] What does this do?

```
img {
  max-width: 100%;
  height: auto;
}
```

*Hint:* Fluid images.

**Answer:** Makes every image never exceed the width of its container, and automatically adjusts the height to keep the aspect ratio correct.

`max-width: 100%` caps the image at its parent's width. `height: auto` scales the height proportionally. This prevents images from breaking layouts on small screens.

### Q8. [Medium] What is wrong with this mobile-first CSS?

```
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(4, 1fr); }
}
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
```

*Hint:* Which rule wins on desktop?

**Answer:** The order is wrong. On a 1200px screen, BOTH rules match, but the 2-column rule comes LAST and wins. The grid shows 2 columns instead of 4.

With min-width queries, order from SMALLEST to LARGEST so that later (larger) rules override earlier (smaller) ones in the cascade.

### Q9. [Medium] What does `clamp(1rem, 3vw, 2rem)` do?

*Hint:* clamp(min, preferred, max).

**Answer:** The value is 3% of viewport width, clamped to never go below 1rem or above 2rem.

`clamp(min, preferred, max)` is perfect for fluid typography. On small screens you get 1rem minimum, on large screens 2rem maximum, and in between the text scales smoothly with the viewport.

### Q10. [Medium] What media query targets only phones held vertically?

*Hint:* Orientation + max-width.

**Answer:** `@media (max-width: 640px) and (orientation: portrait) { ... }`

Combine conditions with `and`. This matches narrow viewports in portrait orientation — typical of phones held upright.

### Q11. [Medium] Why is mobile-first preferred over desktop-first?

*Hint:* Think about complexity and performance.

**Answer:** Mobile-first forces you to start with the essential content and layout, then ENHANCE for larger screens. It usually produces simpler CSS, loads faster on mobile (where it matters most), and matches how users actually access the web today.

Desktop-first often means writing complex styles and then stripping them away for mobile, which is harder and more error-prone. Mobile-first builds up, not down.

### Q12. [Medium] What are common breakpoints in responsive design?

*Hint:* 640, 768, 1024, 1280.

**Answer:** 640px (phablet), 768px (tablet), 1024px (small laptop or tablet landscape), 1280px (standard desktop), and sometimes 1536px (large desktop).

These are widely used but not mandatory. Real best practice: pick breakpoints based on where YOUR layout starts to look bad, not based on specific devices.

### Q13. [Hard] Why does `width: 100vw` sometimes cause horizontal scrolling?

*Hint:* Scrollbar width.

**Answer:** `100vw` includes the vertical scrollbar width. If the page has a scrollbar, `100vw` is wider than the actual visible area, causing a horizontal scroll.

Use `width: 100%` instead. 100% is relative to the parent's content area, which excludes the scrollbar.

### Q14. [Hard] What is the difference between `em` and `rem`?

*Hint:* Think about what each is relative to.

**Answer:** `em` is relative to the PARENT element's font-size (can compound when nested). `rem` is relative to the ROOT (html) element's font-size, so it is always predictable.

If a div has font-size: 20px and its child has font-size: 2em, the child is 40px. Nest another 2em and it becomes 80px — exponential growth. rem avoids this because it always references the html root.

### Q15. [Hard] What does `@media (prefers-color-scheme: dark)` detect?

*Hint:* Operating system setting.

**Answer:** It detects whether the user's operating system is set to dark mode. If so, the CSS inside the query applies automatically.

This is the modern way to implement dark mode. Combined with CSS variables, you can build an automatic dark theme with zero JavaScript.

## Mixed Questions

### Q1. [Easy] What is `@media print` used for?

*Hint:* Printing.

**Answer:** It applies CSS only when the page is being printed (or print-previewed).

Print stylesheets hide nav bars, footers, and buttons, convert colors to black on white, and optimize typography for paper.

### Q2. [Easy] What unit is best for font-sizes in responsive design?

*Hint:* Scales with root element.

**Answer:** `rem` (or `clamp()` for fluid typography)

rem scales with the root font-size and respects user browser zoom settings. It is the most accessible choice for text.

### Q3. [Medium] Why should you use `max-width` instead of `width` for containers?

*Hint:* Think about narrow screens.

**Answer:** `max-width` caps the container's width but lets it shrink on smaller screens. `width` forces an exact size, which causes overflow and horizontal scroll on narrow viewports.

`max-width: 1200px` with `margin: 0 auto` creates a centered container that caps at 1200px on big screens and fills the viewport on small ones.

### Q4. [Medium] What does this media query mean?

```
@media (min-width: 768px) and (max-width: 1023px)
```

*Hint:* Two conditions with 'and'.

**Answer:** Applies ONLY when the viewport is between 768px and 1023px wide (typical tablet range).

The `and` combines conditions — both must be true. This targets tablets specifically, excluding phones (under 768) and desktops (1024+).

### Q5. [Medium] What does `vmin` mean?

*Hint:* Minimum of vw and vh.

**Answer:** 1 percent of the SMALLER of the viewport's width or height.

If the viewport is 800x600, vmin uses 600 (the smaller). `1vmin = 6px`. Useful for elements that should stay visible regardless of orientation.

### Q6. [Medium] What does this do?

```
@media (max-width: 640px) {
  .desktop-only { display: none; }
}
```

*Hint:* Hiding elements.

**Answer:** Hides elements with the class 'desktop-only' on screens 640px wide or less.

A common pattern: mark elements as desktop-only or mobile-only and hide them with media queries. Useful for swapping a desktop sidebar for a mobile hamburger menu.

### Q7. [Medium] How would you make a three-column desktop layout become a single-column mobile layout?

*Hint:* Media query with grid-template-columns.

**Answer:** Start with `grid-template-columns: 1fr` as the base (mobile) style, then use `@media (min-width: 768px) { .grid { grid-template-columns: repeat(3, 1fr); } }` to expand to 3 columns on tablets and up.

Mobile-first: 1 column is the default, and wider screens progressively add more columns.

### Q8. [Medium] What does `initial-scale=1` in the viewport meta tag do?

*Hint:* Initial zoom level.

**Answer:** Sets the initial zoom level to 1 (100%) when the page first loads, so nothing is zoomed in or out.

Without `initial-scale=1`, mobile browsers might open the page at a different zoom level, which can break your responsive layout.

### Q9. [Hard] Can you use CSS variables inside media queries?

*Hint:* Yes, and they redefine based on the query.

**Answer:** Yes. You can redefine CSS variables inside a media query, and every element using `var(--name)` updates automatically at that breakpoint.

Example: `@media (max-width: 640px) { :root { --main-padding: 12px; } }`. All elements using `var(--main-padding)` automatically use 12px on small screens.

### Q10. [Hard] What is the difference between `display: none` and `visibility: hidden`?

*Hint:* One removes from layout; the other just hides.

**Answer:** `display: none` removes the element from the layout entirely (takes no space). `visibility: hidden` keeps the element in the layout but makes it invisible.

For responsive hiding (like mobile-only elements), use `display: none` so the element truly disappears and does not take space.

### Q11. [Easy] What does `ch` unit represent?

*Hint:* Character width.

**Answer:** 1 `ch` is the width of the '0' character in the current font. Useful for setting line widths based on readable character count (like `max-width: 60ch`).

60-80 characters per line is the optimal reading width. `max-width: 65ch` on a paragraph gives beautiful, readable typography.

### Q12. [Medium] Which is more accessible for font sizes: px or rem?

*Hint:* Think about user zoom.

**Answer:** `rem` is more accessible because it respects the user's browser font-size preferences. Users with visual impairments often increase default font-size; rem scales with that, px does not.

Always prefer rem for font sizes in production. It is the accessibility best practice.

### Q13. [Medium] What is the 'mobile-first' mindset in design?

*Hint:* Essentials first.

**Answer:** Designing for the smallest screen first, focusing on essential content and interactions, then progressively enhancing for larger screens. It forces you to prioritize what matters most.

Mobile-first is both a technical approach (CSS with min-width queries) and a design philosophy (smallest constraints first).

### Q14. [Hard] What is the problem with targeting specific devices like `@media (max-width: 480px)` (iPhone width)?

*Hint:* Device sizes change over time.

**Answer:** Device sizes change every year, and there are hundreds of phone sizes. Targeting specific devices creates brittle code. Instead, pick breakpoints where YOUR layout actually needs to change.

Best practice: start with mobile, resize the browser, and add a breakpoint at the first width where your content looks bad. That is your real breakpoint.

### Q15. [Hard] What does `@media (hover: hover)` detect?

*Hint:* Can the device hover?

**Answer:** It detects whether the user's device supports hover interactions (mouse or trackpad). Touch devices typically return 'none'.

Useful for showing hover effects only on desktops. On touch devices, :hover fires on tap and stays until tap elsewhere, which is often awkward.

### Q16. [Easy] Which media query detects dark mode preference?

*Hint:* prefers- something.

**Answer:** `@media (prefers-color-scheme: dark)`

This detects the user's OS theme preference. Combined with CSS variables, it enables automatic dark mode with no JavaScript.

### Q17. [Easy] What does `@media (prefers-reduced-motion: reduce)` detect?

*Hint:* Accessibility for motion-sensitive users.

**Answer:** It detects whether the user has asked their OS to reduce motion (for accessibility reasons such as motion sickness). Use it to disable animations.

Example: `@media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }`. Respectful, accessible design.

### Q18. [Medium] What does `max-width: 65ch` do on a paragraph?

*Hint:* ch is character-width.

**Answer:** It limits the paragraph to a maximum width of about 65 characters, which is the ideal readable line length.

The `ch` unit equals the width of the '0' character. 60-80ch is the sweet spot for comfortable reading, regardless of the font size or screen width.

### Q19. [Hard] What is the 'mobile tap zoom' problem and how does the viewport meta tag fix it?

*Hint:* Tapping input fields.

**Answer:** On iOS, tapping an input with font-size under 16px zooms in automatically. Using `initial-scale=1` and setting inputs to at least 16px prevents this. Some developers use `maximum-scale=1` but that harms accessibility — avoid it.

Best practice: set input font-size to 16px or larger. Do NOT disable user zoom — users with low vision rely on pinch-to-zoom.

## Multiple Choice Questions

### Q1. [Easy] Which meta tag is required for responsive design on mobile?

**Answer:** B

**B is correct.** The viewport meta tag tells mobile browsers to use the actual device width instead of rendering at desktop size and scaling down.

### Q2. [Easy] What does `@media (min-width: 768px)` mean?

**Answer:** B

**B is correct.** `min-width` is a MINIMUM — the styles apply at that width and above.

### Q3. [Easy] What is the best unit for font-sizes in responsive design?

**Answer:** C

**C is correct.** rem scales with the root font-size and respects user browser zoom settings, making it the most accessible choice.

### Q4. [Easy] How do you make an image fit inside its container?

**Answer:** B

**B is correct.** `max-width: 100%` caps the image at the parent's width; `height: auto` keeps the aspect ratio.

### Q5. [Easy] What does `100vh` represent?

**Answer:** B

**B is correct.** `vh` is viewport height. 100vh is the full browser window height.

### Q6. [Medium] What is the difference between mobile-first and desktop-first?

**Answer:** B

**B is correct.** Mobile-first writes base styles for mobile and progressively enhances with `min-width` queries. Desktop-first does the opposite using `max-width`.

### Q7. [Medium] What is `clamp(1rem, 4vw, 3rem)`?

**Answer:** B

**B is correct.** `clamp(min, preferred, max)` clamps the preferred value between the min and max bounds. Perfect for fluid typography.

### Q8. [Medium] Which CSS unit is relative to the PARENT element's font-size (and can compound when nested)?

**Answer:** C

**C is correct.** `em` is relative to the parent. Nested em values compound (2em inside 2em = 4x the grandparent size). rem avoids this by always referencing the root.

### Q9. [Medium] What does this do?
`@media (max-width: 640px) { .sidebar { display: none; } }`

**Answer:** B

**B is correct.** `max-width: 640px` matches viewports up to 640px. Inside, the sidebar is hidden on small screens.

### Q10. [Medium] Why use `max-width` instead of `width` for containers?

**Answer:** B

**B is correct.** `max-width: 1200px` means 'up to 1200px but shrink if needed'. `width: 1200px` forces 1200px and causes overflow on narrow screens.

### Q11. [Hard] Which media query detects dark mode preference from the OS?

**Answer:** C

**C is correct.** `prefers-color-scheme` reads the user's OS theme setting. Values are `light` or `dark`.

### Q12. [Hard] In mobile-first CSS, how should you order min-width media queries?

**Answer:** B

**B is correct.** With min-width queries, order from smallest to largest. Later rules override earlier ones, so the largest breakpoint wins on desktop.

### Q13. [Medium] Which unit is 1 percent of the viewport width?

**Answer:** B

**B is correct.** `vw` is viewport width. 1vw = 1 percent of viewport width. 1vh = 1 percent of viewport height.

### Q14. [Medium] What is the minimum viable responsive CSS for an image?

**Answer:** C

**C is correct.** `max-width: 100%` prevents overflow, and `height: auto` preserves aspect ratio. Add this to every responsive site.

### Q15. [Hard] Why does `width: 100vw` sometimes create a horizontal scroll?

**Answer:** B

**B is correct.** `100vw` is the full viewport including the scrollbar. If a scrollbar exists, 100vw is wider than the visible area. Use `100%` (relative to parent) to avoid this.

### Q16. [Easy] What is a 'breakpoint' in responsive design?

**Answer:** B

**B is correct.** A breakpoint is a viewport width where your CSS changes the layout — typically done with a media query.

### Q17. [Medium] How do you combine two conditions in a media query?

**Answer:** B

**B is correct.** Use `and` for both conditions to be true. Use a comma for 'or' (either condition).

### Q18. [Hard] Which unit is 1 percent of the SMALLER viewport dimension?

**Answer:** C

**C is correct.** `vmin` uses the smaller of viewport width and height. `vmax` uses the larger. Handy for keeping elements visible in any orientation.

### Q19. [Easy] What happens without the viewport meta tag on a mobile browser?

**Answer:** B

**B is correct.** Without the viewport meta tag, mobile browsers assume a desktop width and shrink the page. Text becomes unreadable and responsive styles break.

### Q20. [Hard] Which is BEST for building a responsive card grid WITHOUT any media queries?

**Answer:** C

**C is correct.** `repeat(auto-fit, minmax(250px, 1fr))` creates a grid that adds or removes columns based on container width — a fully responsive layout with zero media queries.

## Coding Challenges

### Challenge 1. Add the Viewport Meta Tag

**Difficulty:** Easy

Create a basic HTML page with the viewport meta tag, a heading, and a paragraph. The page should display correctly on mobile devices (without scaling down).

**Constraints:**

- Must include the viewport meta tag. Use a readable font size.

**Sample input:**

```
None
```

**Sample output:**

```
A simple page that looks correct on phones.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Responsive Starter</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; font-size: 1rem; line-height: 1.6; color: #0f172a; }
    h1 { color: #a855f7; }
  </style>
</head>
<body>
  <h1>Hello from Priya</h1>
  <p>This is my first responsive page. It works on every screen size.</p>
</body>
</html>
```

### Challenge 2. Responsive 1-2-4 Card Grid

**Difficulty:** Easy

Build a grid of 8 cards that shows 1 column on mobile, 2 columns on tablet (640px+), and 4 columns on desktop (1024px+). Use mobile-first media queries. Give each card a name of a student and a different gradient background.

**Constraints:**

- Use mobile-first. Use grid-template-columns and media queries. No JavaScript.

**Sample input:**

```
None
```

**Sample output:**

```
8 colored cards that rearrange from 1 column to 4 columns as screen widens.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  body { font-family: Arial, sans-serif; background: #0f172a; padding: 20px; margin: 0; color: white; }
  .grid { display: grid; grid-template-columns: 1fr; gap: 16px; max-width: 1200px; margin: 0 auto; }
  .card { padding: 24px; border-radius: 12px; font-weight: bold; }
  .c1 { background: linear-gradient(135deg, #a855f7, #ec4899); }
  .c2 { background: linear-gradient(135deg, #06b6d4, #0ea5e9); }
  .c3 { background: linear-gradient(135deg, #f59e0b, #ef4444); }
  .c4 { background: linear-gradient(135deg, #10b981, #06b6d4); }
  .c5 { background: linear-gradient(135deg, #8b5cf6, #3b82f6); }
  .c6 { background: linear-gradient(135deg, #ec4899, #f59e0b); }
  .c7 { background: linear-gradient(135deg, #f43f5e, #8b5cf6); }
  .c8 { background: linear-gradient(135deg, #14b8a6, #84cc16); }
  @media (min-width: 640px) { .grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1024px) { .grid { grid-template-columns: repeat(4, 1fr); } }
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
    <div class="card c7">Kabir</div>
    <div class="card c8">Meera</div>
  </div>
</body>
</html>
```

### Challenge 3. Responsive Navbar with Hamburger

**Difficulty:** Medium

Build a navbar that shows all links horizontally on desktop. On screens 640px or smaller, the links should hide behind a hamburger button. Clicking the button toggles the menu.

**Constraints:**

- Use a media query at 640px. Use classList.toggle in JavaScript.

**Sample input:**

```
Click hamburger on mobile
```

**Sample output:**

```
Menu appears as a vertical list below the navbar.
```

**Solution:**

```html-and-css
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
  nav ul li a { color: white; text-decoration: none; }
  .hamburger { display: none; background: none; border: none; color: white; font-size: 28px; cursor: pointer; }
  @media (max-width: 640px) {
    .hamburger { display: block; }
    nav ul { position: absolute; top: 100%; left: 0; right: 0; flex-direction: column; background: #1e293b; padding: 20px; display: none; }
    nav ul.open { display: flex; }
  }
</style>
</head>
<body>
<nav>
  <div class="logo">SkyBlog</div>
  <button class="hamburger" id="ham">&#9776;</button>
  <ul id="menu"><li><a href="#">Home</a></li><li><a href="#">Articles</a></li><li><a href="#">About</a></li><li><a href="#">Contact</a></li></ul>
</nav>
<script>
  document.getElementById('ham').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('open');
  });
</script>
</body>
</html>
```

### Challenge 4. Fluid Typography with clamp()

**Difficulty:** Medium

Create a hero section with a heading that uses `clamp()` for fluid scaling. The heading should be between 2rem minimum and 5rem maximum, with 8vw as the preferred value. Resizing the browser should smoothly scale the heading.

**Constraints:**

- Use clamp(). No media queries. Use a gradient text effect.

**Sample input:**

```
Resize browser
```

**Sample output:**

```
Heading smoothly scales between 2rem and 5rem as viewport changes.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  body { font-family: Arial, sans-serif; background: #0f172a; color: white; margin: 0; padding: 60px 20px; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; }
  h1 { font-size: clamp(2rem, 8vw, 5rem); background: linear-gradient(90deg, #a855f7, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-align: center; margin-bottom: 20px; }
  p { font-size: clamp(1rem, 2.5vw, 1.3rem); color: #cbd5e1; max-width: 60ch; text-align: center; line-height: 1.6; }
</style>
</head>
<body>
  <h1>Modern Age Coders</h1>
  <p>Resize this page. Watch the heading scale smoothly without a single media query. This is fluid typography powered by clamp().</p>
</body>
</html>
```

### Challenge 5. Automatic Dark Mode with prefers-color-scheme

**Difficulty:** Hard

Build a page that automatically switches between light and dark mode based on the user's OS setting. Use CSS variables for colors. Include a card with some text. Changing the OS theme should automatically update the page.

**Constraints:**

- Use CSS variables. Use @media (prefers-color-scheme: dark). No JavaScript.

**Sample input:**

```
Change OS theme to dark
```

**Sample output:**

```
Page immediately switches to dark colors without any button click.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  :root { --bg: #ffffff; --text: #0f172a; --card: #f8fafc; --border: #e5e7eb; --primary: #a855f7; }
  @media (prefers-color-scheme: dark) {
    :root { --bg: #0f172a; --text: #f1f5f9; --card: #1e293b; --border: #334155; --primary: #a855f7; }
  }
  body { background: var(--bg); color: var(--text); font-family: Arial, sans-serif; padding: 30px 20px; margin: 0; transition: background 0.3s, color 0.3s; }
  .container { max-width: 600px; margin: 0 auto; }
  .card { background: var(--card); border: 1px solid var(--border); padding: 24px; border-radius: 12px; }
  h1 { color: var(--primary); }
</style>
</head>
<body>
  <div class="container">
    <h1>Hi, I am Kavya</h1>
    <div class="card">
      <h3>About this page</h3>
      <p>This page automatically matches your operating system theme. Try switching between light and dark mode in your OS settings.</p>
    </div>
  </div>
</body>
</html>
```

### Challenge 6. Full Responsive Landing Page

**Difficulty:** Hard

Build a landing page with a header, hero section (two columns on desktop, stacked on mobile), three feature cards (1 column mobile, 3 columns desktop), and a footer. Use mobile-first CSS and at least two media queries.

**Constraints:**

- Mobile-first. Viewport meta tag required. Images should use max-width: 100%.

**Sample input:**

```
View on mobile and desktop
```

**Sample output:**

```
Stacked layout on mobile; side-by-side and 3-column grid on desktop.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Arial, sans-serif; background: #0f172a; color: #f1f5f9; }
  header { padding: 20px; background: #1e293b; text-align: center; }
  header h1 { color: #a855f7; }
  .hero { padding: 40px 20px; display: flex; flex-direction: column; gap: 30px; max-width: 1100px; margin: 0 auto; align-items: center; }
  .hero-text h2 { font-size: clamp(1.8rem, 5vw, 3rem); margin-bottom: 16px; }
  .hero-text p { color: #cbd5e1; margin-bottom: 20px; line-height: 1.6; }
  .hero-visual { width: 100%; max-width: 400px; aspect-ratio: 1; border-radius: 20px; background: linear-gradient(135deg, #7c3aed, #ec4899); }
  .btn { display: inline-block; padding: 12px 24px; background: #a855f7; color: white; border-radius: 8px; text-decoration: none; }
  .features { padding: 40px 20px; max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 20px; }
  .feature { background: #1e293b; padding: 24px; border-radius: 12px; }
  .feature h3 { color: #06b6d4; margin-bottom: 8px; }
  footer { padding: 20px; background: #1e293b; text-align: center; color: #94a3b8; }
  @media (min-width: 768px) {
    .hero { flex-direction: row; padding: 60px 30px; }
    .hero-text { flex: 1; }
  }
  @media (min-width: 1024px) {
    .features { grid-template-columns: repeat(3, 1fr); }
  }
</style>
</head>
<body>
  <header><h1>SkyLearn</h1></header>
  <section class="hero">
    <div class="hero-text">
      <h2>Coding for the Next Generation</h2>
      <p>Join Aarav, Priya, and 10,000 other young coders learning to build real projects.</p>
      <a href="#" class="btn">Start Free Trial</a>
    </div>
    <div class="hero-visual"></div>
  </section>
  <section class="features">
    <div class="feature"><h3>Live Classes</h3><p>Real instructors, real code, real time.</p></div>
    <div class="feature"><h3>Projects</h3><p>Build games, apps, and websites.</p></div>
    <div class="feature"><h3>Community</h3><p>Collaborate with peers across India.</p></div>
  </section>
  <footer>&copy; 2026 SkyLearn</footer>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/responsive-design-and-media-queries/*
