---
title: "Practice: Project: Build a Complete SaaS Landing Page"
description: "55 practice problems for Project: Build a Complete SaaS Landing Page in HTML and CSS"
slug: project-build-a-landing-page-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/project-build-a-landing-page/practice/
category: "HTML and CSS"
---
# Practice: Project: Build a Complete SaaS Landing Page

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] What layout is best for the navbar (logo, links, CTA in a row)?

*Hint:* One row, align to the sides.

**Answer:** Flexbox with `justify-content: space-between`.

Flexbox is ideal for one-dimensional layouts. `space-between` pushes the first child to the start and the last child to the end, with the middle items spaced evenly.

### Q2. [Easy] Which CSS function gives fluid font sizes without media queries?

*Hint:* Min, preferred, max.

**Answer:** `clamp(min, preferred, max)`

clamp() returns the preferred value, but clamped between the min and max. Perfect for fluid typography like `font-size: clamp(24px, 5vw, 56px)`.

### Q3. [Easy] Which grid line creates a responsive card layout with no media queries?

*Hint:* The magic line.

**Answer:** `grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))`

auto-fit fills as many columns as possible, each at least 260px wide. On phones it becomes 1 column, on desktops 3-4. The magic responsive grid.

### Q4. [Easy] How do you build an FAQ accordion without JavaScript?

*Hint:* Native HTML element.

**Answer:** Use `` and ``. The browser handles the open/close state natively.

`` is a built-in HTML element that toggles its content when the summary is clicked. Style it with CSS, including the `[open]` attribute selector.

### Q5. [Easy] What makes a sticky navbar stay at the top while scrolling?

*Hint:* CSS position value.

**Answer:** `position: sticky; top: 0`

Sticky positioning makes the element behave like relative until the scroll reaches a threshold, then it sticks like fixed. Great for navbars that stay visible while scrolling.

### Q6. [Easy] How do you make the hero headline have a gradient color?

*Hint:* Background clip to text.

**Answer:** Use `background: linear-gradient(...); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;`

The trick is to fill the element with a gradient background but clip it to the shape of the text, then make the text transparent so the gradient shows through.

### Q7. [Easy] What is the purpose of `backdrop-filter: blur(10px)` on a navbar?

*Hint:* Frosted glass.

**Answer:** It blurs whatever is behind the navbar, creating the 'frosted glass' effect common on modern websites.

Combined with a semi-transparent background (`rgba(255,255,255,0.9)`), backdrop-filter gives a beautiful frosted look where you can see blurred content through the navbar.

### Q8. [Easy] How do you make buttons lift slightly on hover?

*Hint:* Transform.

**Answer:** `.btn:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(0,0,0,0.2); }`

translateY with a negative value moves the element up. Adding a larger shadow reinforces the 'lifting' feel. A transition on transform and box-shadow makes it smooth.

### Q9. [Easy] Which property makes the 'MOST POPULAR' ribbon appear above the pricing card without extra HTML?

*Hint:* Pseudo-element.

**Answer:** `::before` with `content: 'MOST POPULAR'` and absolute positioning.

Pseudo-elements inject content via CSS. `::before` on the popular card, positioned absolutely with top: -14px, gives the ribbon effect without adding HTML.

### Q10. [Easy] Why define CSS variables at the top of the stylesheet?

*Hint:* Theming and maintainability.

**Answer:** Variables let you change brand colors, spacing, and radii in one place. Everything else updates automatically. Much better than find-and-replacing hex codes across 20 rules.

A design system is only as good as how easy it is to change. Variables are the cheapest way to get a true theming layer in CSS.

### Q11. [Medium] What does this do?

```
.hero { grid-template-columns: 1.1fr 1fr; }
```

*Hint:* Ratio of columns.

**Answer:** Two columns where the first takes 1.1 shares and the second takes 1 share. The left column is slightly wider than the right — giving the text more space than the visual.

fr units represent a fraction of available space. 1.1fr + 1fr = 2.1 total. The first column gets 1.1/2.1 ≈ 52%, the second gets 1/2.1 ≈ 48%. Great for asymmetric hero layouts.

### Q12. [Medium] Why use `transform: scale(1.05)` on the popular pricing card?

*Hint:* Visual hierarchy.

**Answer:** It makes the card visually pop up from the row so the user's eye is drawn to the recommended plan. Combined with a gradient background and bigger shadow, it is unmissable.

Visual hierarchy is everything in landing pages. Making the popular plan 5% larger and brighter makes the user's eye land on it first — which is exactly where you want them to convert.

### Q13. [Medium] What does this do in the hero?

```
h1 { text-wrap: balance; }
```

*Hint:* Line wrapping.

**Answer:** The browser distributes the headline words across lines to avoid a lonely orphan word on the last line. Beautiful typography in one property.

Before text-wrap, headlines often ended with one awkward word on a line by itself. `balance` tells the browser to rebalance the wrapping for a cleaner visual.

### Q14. [Medium] How would you make the pricing section full-width but with centered content?

*Hint:* Section background, inner max-width.

**Answer:** The outer `.pricing` section has the background color and full width. Inside, a wrapper or the grid itself uses `max-width: 1100px; margin: 0 auto`.

This pattern — full-width background with constrained content — is how landing pages have alternating band colors without horizontal scrolling on narrow screens.

### Q15. [Medium] What does `scroll-behavior: smooth` on html do?

*Hint:* Nav links with # fragments.

**Answer:** When the user clicks an anchor link like `#pricing`, the browser smoothly scrolls to that section instead of jumping instantly.

A one-line upgrade to any page with in-page navigation. Add it to `html` and every anchor link animates instead of jumping.

### Q16. [Medium] How do you hide the default triangle on ``?

*Hint:* List-style and webkit marker.

**Answer:** `summary { list-style: none; } summary::-webkit-details-marker { display: none; }`

Different browsers use different mechanisms. `list-style: none` works in Firefox; the webkit marker pseudo-element handles Safari and old Chrome. Both are needed for full cross-browser support.

### Q17. [Medium] Why is the hero using grid instead of flexbox?

*Hint:* Two-dimensional alignment.

**Answer:** Grid gives precise control over both the column widths (1.1fr 1fr) and vertical alignment (align-items: center). Flexbox would also work for a simple side-by-side, but grid is cleaner for 2D layouts with mixed content sizes.

Both grid and flexbox can do a two-column hero. Grid is generally preferred when you need fixed column proportions and items of different heights because it handles alignment more predictably.

### Q18. [Medium] What CSS makes the feature icons each a different gradient?

*Hint:* nth-child.

**Answer:** Use `.feature:nth-child(1) .icon { background: gradient1; }`, `.feature:nth-child(2) .icon { background: gradient2; }`, etc.

Using `:nth-child(n)` saves you from having to add a unique class to every card. The CSS automatically assigns different gradients based on position.

### Q19. [Medium] What does `backdrop-filter: blur(10px)` NOT work without?

*Hint:* What has to be transparent?

**Answer:** It does not work unless the element has a partially transparent background. If the element is fully opaque, there is nothing to see through to blur.

backdrop-filter blurs what is BEHIND the element. If the element is opaque, the blur is invisible. Use a semi-transparent background like `rgba(255,255,255,0.9)` for the frosted glass effect.

### Q20. [Medium] Why is the avatar a `div` with initials instead of an `img`?

*Hint:* No image assets needed.

**Answer:** A CSS gradient + initials requires zero image files, zero network requests, and zero broken image placeholders. It also scales perfectly at any size.

For landing page mockups and placeholders, gradient + initials is faster to ship than real photos. In production, you would swap for real images.

### Q21. [Medium] How does the pricing section change for mobile?

*Hint:* Auto-fit.

**Answer:** Thanks to `repeat(auto-fit, minmax(270px, 1fr))`, the 3 plans wrap into 1 column on narrow screens. The popular plan also has its scale removed on mobile via a media query.

The scale transform can cause the popular card to overflow on narrow screens. A mobile media query resets `transform: none` so it aligns with the others.

### Q22. [Medium] What does this footer grid do?

```
.footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; }
```

*Hint:* Brand column is wider.

**Answer:** Four columns, where the first is twice as wide as each of the other three. Used so the brand/description column gets more room than the three link columns.

Mixing fr values lets you give one column more weight than others while still being fluid. Common footer pattern.

### Q23. [Medium] Why use :root for brand colors instead of .brand class?

*Hint:* Global scope.

**Answer:** `:root` gives the variables global scope so every element in the document can use them. A class like `.brand` would only make the variable available inside elements with that class.

Global design tokens belong on `:root`. Component-specific tokens belong on the component. Mix and match based on scope.

### Q24. [Medium] What is the benefit of using padding: clamp() instead of padding: 32px 64px?

*Hint:* Fluid.

**Answer:** Fixed padding is the same on a phone and a desktop, which wastes space on mobile and looks cramped on desktop. clamp() scales padding with the viewport, so it looks right at every size.

Fluid padding is as important as fluid typography. A hero with 64px padding on mobile looks awful; with 16px it is too tight on desktop. clamp() solves both in one rule.

### Q25. [Hard] Why use `align-items: center` on the pricing grid?

*Hint:* Different card heights.

**Answer:** Because the popular plan has an extra list item and is taller. `align-items: center` centers all cards vertically so the scaled popular card does not look like it is sticking to the top or bottom.

Without center alignment, grid items stretch to the tallest sibling. Centering them means the shorter cards float in the middle of the row, matching the visual weight of the popular card.

### Q26. [Hard] Why are the nav links hidden on mobile?

```
@media (max-width: 600px) { .nav .links { display: none; } }
```

*Hint:* Space.

**Answer:** On a 400px phone, the logo, 4 nav links, and a CTA button all crammed in a row would wrap or overflow. Hiding the middle links leaves just the logo and CTA, and we would normally add a hamburger menu in JavaScript.

For a CSS-only landing page, hiding the links on mobile is the simplest solution. A full mobile nav would need a hamburger toggle, which requires JavaScript or the checkbox hack.

### Q27. [Hard] How would you change the entire page's color theme?

*Hint:* One place.

**Answer:** Edit the three brand variables at the top: `--brand`, `--brand-2`, and maybe `--accent`. Every button, hero gradient, feature icon, popular pricing card, and hover state updates automatically.

This is the payoff of a well-structured stylesheet. Changing one variable affects dozens of rules. No find-and-replace, no bugs from missed instances.

### Q28. [Hard] What does this do?

```
html { scroll-padding-top: 80px; }
```

*Hint:* Sticky navbar plus anchor links.

**Answer:** When a user clicks an anchor link like `#pricing`, the browser scrolls so that the target is 80px from the top of the viewport, leaving room for the sticky navbar so the heading is not hidden under it.

Without scroll-padding-top, the sticky nav covers the first part of each section after an anchor jump. 80px (or your navbar height) ensures the heading is fully visible.

### Q29. [Hard] Why does the hero visual use a nested 2x2 grid of cards?

*Hint:* Depicting a dashboard.

**Answer:** It visually represents a 'dashboard with 4 stats' without needing an actual image. Nested grids are a common technique for building mock product visuals purely in CSS.

Landing page hero visuals do not have to be real product screenshots. A stylized 4-card dashboard mock made of CSS grids is faster to build, sharper at any resolution, and trivial to theme.

### Q30. [Hard] Why use `:hover` effects on pricing cards?

*Hint:* Perceived quality.

**Answer:** Hover interactions make the page feel alive and polished. Lifting the card slightly with `translateY(-6px)` tells the user 'this is clickable' and adds that premium product feel.

Micro-interactions separate a landing page that looks 'built in a weekend' from one that looks 'professionally designed'. Hover effects cost nothing in performance or code but raise the perceived quality significantly.

## Multiple Choice Questions

### Q1. [Easy] Which layout should you use for the navbar?

**Answer:** B

**B is correct.** Flexbox with `justify-content: space-between` is the simplest and cleanest way to build a navbar with logo on the left, links in the middle, and CTA on the right.

### Q2. [Easy] What CSS line creates a responsive feature grid with no media queries?

**Answer:** B

**B is correct.** `auto-fit` + `minmax` creates as many columns as fit, wrapping naturally from 1 to 4 columns as the screen size changes.

### Q3. [Easy] Which property makes a navbar stay at the top on scroll?

**Answer:** C

**C is correct.** `position: sticky` with `top: 0` keeps the element in place as the user scrolls past its original position.

### Q4. [Easy] How do you build a FAQ accordion without JavaScript?

**Answer:** B

**B is correct.** `` is a native HTML element that handles open/close state without any JavaScript. Style it with CSS for custom visuals.

### Q5. [Easy] What function gives fluid font sizes?

**Answer:** C

**C is correct.** `clamp()` returns the preferred value clamped between the min and max, giving smooth fluid scaling across screen sizes.

### Q6. [Easy] How do you make a hero headline have gradient text?

**Answer:** B

**B is correct.** Apply the gradient as a background, clip it to the text with `background-clip: text`, and make the text transparent so the gradient shows through.

### Q7. [Easy] What is a good max-width for the main content of a landing page?

**Answer:** B

**B is correct.** 1100-1200px is a sweet spot for readable line lengths and good visual rhythm on wide screens. Use `max-width` (not fixed width) so it shrinks gracefully.

### Q8. [Easy] Which reset is essential at the start of every stylesheet?

**Answer:** A

**A is correct.** This resets browser default margins and padding and makes box-sizing predictable across every element. Essential for every landing page.

### Q9. [Medium] How should the popular pricing card stand out visually?

**Answer:** B

**B is correct.** A combination of scale, background, shadow, and a ribbon makes the card unmissable. Multiple cues work better than any single one.

### Q10. [Medium] What is the purpose of `html { scroll-behavior: smooth }`?

**Answer:** B

**B is correct.** When a user clicks a link like `#pricing`, the browser animates the scroll to the target section instead of jumping instantly.

### Q11. [Medium] Why define CSS variables on :root?

**Answer:** B

**B is correct.** Variables on `:root` are global and cascade to every element. Changing one value updates the entire page.

### Q12. [Medium] What does `backdrop-filter: blur(10px)` need to work?

**Answer:** B

**B is correct.** `backdrop-filter` blurs what is behind the element. A fully opaque background blocks the blur; a semi-transparent background (like `rgba(255,255,255,0.9)`) lets the frosted glass effect show through.

### Q13. [Medium] Which CSS selects every feature card's icon individually with different gradients?

**Answer:** C

**C is correct.** `:nth-child(n)` targets cards by their position so you can assign different gradients without adding custom classes to each.

### Q14. [Medium] Why is max-width preferred over width for containers?

**Answer:** B

**B is correct.** `max-width` caps the element at a maximum but lets it shrink naturally on narrow screens. `width: 1200px` would force a horizontal scrollbar on a phone.

### Q15. [Medium] How do you center a section that has max-width?

**Answer:** B

**B is correct.** `margin: 0 auto` centers a block element horizontally inside its parent when it has a max-width smaller than the parent.

### Q16. [Hard] What is the problem with `.hero { width: 1200px; padding: 64px 200px; }`?

**Answer:** B

**B is correct.** Fixed width 1200px plus padding on narrow screens means the hero is wider than the viewport and creates horizontal scroll. Use `max-width` and `clamp()` for padding.

### Q17. [Hard] Why use `scroll-padding-top: 80px` on `html`?

**Answer:** B

**B is correct.** Without scroll-padding-top, clicking an anchor link hides the top of the section under the sticky navbar. Padding equal to the navbar height fixes it.

### Q18. [Hard] Why might the popular pricing card use `transform: scale(1.05)` and reset it on mobile?

**Answer:** B

**B is correct.** On narrow screens, the scaled card can touch the edges or overflow. A media query removes the scale on mobile so all cards align within the viewport.

## Coding Challenges

### Challenge 1. Change the Hero to Have a Gradient Background

**Difficulty:** Easy

Take the hero section from the landing page and change the body background to a radial gradient from dark purple at the top to near-black at the bottom. Make the hero text white so it is readable. Keep the gradient headline accent.

**Constraints:**

- Use a radial-gradient on body. Ensure all text is legible against the dark background.

**Sample input:**

```
None
```

**Sample output:**

```
A dark hero with a glowing purple aura at the top and bright white/gradient text.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  :root { --brand: #a855f7; --brand-2: #ec4899; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Segoe UI', sans-serif;
    background: radial-gradient(ellipse at top, #2d1b4e 0%, #0f0a1e 60%, #000 100%);
    min-height: 100vh;
    color: white;
  }
  .hero { display: grid; grid-template-columns: 1.1fr 1fr; gap: 48px; align-items: center; padding: 96px 32px; max-width: 1200px; margin: 0 auto; }
  .eyebrow { display: inline-block; background: rgba(168,85,247,0.15); color: var(--brand); padding: 6px 14px; border-radius: 999px; font-size: 13px; font-weight: 700; letter-spacing: 1px; margin-bottom: 16px; border: 1px solid rgba(168,85,247,0.3); }
  h1 { font-size: clamp(36px, 5vw, 64px); line-height: 1.05; text-wrap: balance; margin-bottom: 16px; color: white; }
  .gradient { background: linear-gradient(135deg, var(--brand), var(--brand-2)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
  .sub { color: #cbd5e1; font-size: 19px; max-width: 500px; margin-bottom: 32px; line-height: 1.6; }
  .ctas { display: flex; gap: 12px; }
  .btn { padding: 14px 26px; border-radius: 12px; font-weight: 700; font-size: 15px; text-decoration: none; }
  .btn-primary { background: linear-gradient(135deg, var(--brand), var(--brand-2)); color: white; box-shadow: 0 15px 40px rgba(168,85,247,0.4); }
  .btn-outline { background: transparent; color: white; border: 2px solid rgba(255,255,255,0.3); }
  .btn-outline:hover { border-color: var(--brand); }
  .visual { aspect-ratio: 5/4; background: linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.15)); border: 1px solid rgba(255,255,255,0.1); border-radius: 22px; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 12px; padding: 24px; backdrop-filter: blur(10px); }
  .visual > div { background: rgba(255,255,255,0.08); border-radius: 10px; padding: 14px; font-size: 13px; color: #cbd5e1; display: flex; flex-direction: column; justify-content: space-between; border: 1px solid rgba(255,255,255,0.1); }
  .visual strong { font-size: 22px; color: white; display: block; margin-bottom: 4px; }
  @media (max-width: 900px) { .hero { grid-template-columns: 1fr; text-align: center; } }
</style>
</head>
<body>
  <section class="hero">
    <div>
      <span class="eyebrow">NEW IN 2026</span>
      <h1>The Dashboard <span class="gradient">Built for Teams</span> That Ship</h1>
      <p class="sub">Aarav's SkyPanel gives your team a single place to track every metric, sprint, and customer.</p>
      <div class="ctas"><a href="#" class="btn btn-primary">Start Free</a><a href="#" class="btn btn-outline">Learn More</a></div>
    </div>
    <div class="visual">
      <div><strong>1,284</strong> Active users</div>
      <div><strong>+23%</strong> Growth</div>
      <div><strong>98%</strong> Uptime</div>
      <div><strong>4.9/5</strong> Rating</div>
    </div>
  </section>
</body>
</html>
```

### Challenge 2. Add a Sticky Bottom CTA Button

**Difficulty:** Easy

Add a floating call-to-action button that sticks to the bottom-right corner of the screen on every page, always visible as the user scrolls. The button should say 'Start Free' and use the brand gradient. Use `position: fixed`.

**Constraints:**

- Use position: fixed. Add a subtle entry animation.

**Sample input:**

```
Scroll the page
```

**Sample output:**

```
A large purple-to-pink pill button stays in the bottom-right corner at all times.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  :root { --brand: #7c3aed; --brand-2: #ec4899; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: #fafaf9; padding-bottom: 120px; }
  .filler { padding: 40px; max-width: 700px; margin: 0 auto; }
  .filler h1 { color: #0f172a; margin-bottom: 20px; font-size: 36px; }
  .filler p { color: #64748b; line-height: 1.6; margin-bottom: 20px; }
  .sticky-cta {
    position: fixed;
    bottom: 28px;
    right: 28px;
    padding: 16px 28px;
    background: linear-gradient(135deg, var(--brand), var(--brand-2));
    color: white;
    border: none;
    border-radius: 999px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 20px 50px rgba(124,58,237,0.45);
    z-index: 1000;
    animation: rise 0.6s ease-out;
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .sticky-cta:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 30px 60px rgba(124,58,237,0.55); }
  .sticky-cta::before { content: '+'; font-size: 22px; font-weight: 400; }
  @keyframes rise { from { opacity: 0; transform: translateY(100px); } to { opacity: 1; transform: translateY(0); } }
</style>
</head>
<body>
  <section class="filler">
    <h1>Kavya's Blog</h1>
    <p>Scroll down and watch the Start Free button stay in the bottom-right corner no matter where you are on the page. This is one of the most effective conversion patterns on landing pages.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
    <p>Et harum quidem rerum facilis est et expedita distinctio.</p>
    <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
  </section>
  <button class="sticky-cta">Start Free</button>
</body>
</html>
```

### Challenge 3. Make the Pricing Highlighted Card Stand Out More

**Difficulty:** Medium

Take the pricing section and make the popular card even more prominent: add an animated glow effect around it, a slightly larger scale, and a 'BEST VALUE' ribbon at the top. Use `@keyframes` for the glow animation.

**Constraints:**

- Use @keyframes for the glow. Keep the other two cards simple for contrast.

**Sample input:**

```
None
```

**Sample output:**

```
The popular pricing card stands out dramatically with a pulsing glow and prominent ribbon.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  :root { --brand: #7c3aed; --brand-2: #ec4899; --border: #e2e8f0; --text: #0f172a; --muted: #64748b; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: linear-gradient(180deg, #fafaf9, white); padding: 80px 24px; }
  .s-head { text-align: center; max-width: 600px; margin: 0 auto 64px; }
  .s-head h2 { font-size: clamp(28px, 3.5vw, 44px); color: var(--text); margin-bottom: 10px; }
  .s-head p { color: var(--muted); }
  .plans { display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 28px; max-width: 1100px; margin: 0 auto; align-items: center; }
  .plan { background: white; border: 2px solid var(--border); border-radius: 22px; padding: 48px 24px; text-align: center; transition: transform 0.3s; }
  .plan:hover { transform: translateY(-6px); }
  .plan h3 { font-size: 20px; color: var(--muted); letter-spacing: 1px; text-transform: uppercase; margin-bottom: 12px; }
  .plan .price { font-size: 52px; font-weight: 800; color: var(--text); }
  .plan .price small { font-size: 16px; color: var(--muted); font-weight: 500; }
  .plan ul { list-style: none; margin: 24px 0; text-align: left; }
  .plan li { padding: 10px 0; color: var(--muted); font-size: 14px; border-bottom: 1px solid var(--border); }
  .plan li::before { content: 'check  '; color: #10b981; font-weight: 700; }
  .plan button { width: 100%; padding: 14px; border-radius: 12px; font-weight: 700; cursor: pointer; border: 2px solid var(--border); background: white; color: var(--text); font-size: 15px; transition: all 0.2s; }
  .plan button:hover { border-color: var(--brand); color: var(--brand); }
  .plan.popular {
    background: linear-gradient(135deg, var(--brand), var(--brand-2));
    color: white;
    border: none;
    transform: scale(1.08);
    position: relative;
    animation: glow 2.5s ease-in-out infinite;
  }
  @keyframes glow {
    0%, 100% { box-shadow: 0 25px 60px rgba(124,58,237,0.4); }
    50% { box-shadow: 0 35px 80px rgba(236,72,153,0.55), 0 0 0 6px rgba(236,72,153,0.15); }
  }
  .plan.popular::before {
    content: 'BEST VALUE';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    background: #0f172a;
    color: #fef08a;
    padding: 8px 24px;
    border-radius: 999px;
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: 800;
    white-space: nowrap;
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  }
  .plan.popular h3, .plan.popular .price, .plan.popular .price small { color: white; }
  .plan.popular li { color: rgba(255,255,255,0.95); border-bottom-color: rgba(255,255,255,0.25); }
  .plan.popular li::before { color: #fef08a; }
  .plan.popular button { background: white; color: var(--brand); border: none; }
  .plan.popular button:hover { background: #fef08a; color: #0f172a; }
</style>
</head>
<body>
  <div class="s-head">
    <h2>Pick Your Plan</h2>
    <p>Start free, upgrade as you grow.</p>
  </div>
  <div class="plans">
    <div class="plan"><h3>Starter</h3><div class="price">Rs 0<small>/mo</small></div><ul><li>3 members</li><li>5 projects</li><li>Community</li></ul><button>Get Started</button></div>
    <div class="plan popular"><h3>Pro</h3><div class="price">Rs 999<small>/mo</small></div><ul><li>25 members</li><li>Unlimited projects</li><li>Priority support</li><li>AI insights</li></ul><button>Start Trial</button></div>
    <div class="plan"><h3>Team</h3><div class="price">Rs 2,499<small>/mo</small></div><ul><li>Unlimited members</li><li>Dedicated manager</li><li>SSO</li></ul><button>Contact Sales</button></div>
  </div>
</body>
</html>
```

### Challenge 4. Add a Stats/Logos Band Between Hero and Features

**Difficulty:** Medium

Add a band between the hero and the features section that shows 4 impressive stats (e.g., '1,284 Active teams', '98% Uptime', '4.9/5 Rating', '40+ Integrations'). Use a subtle background and a 4-column grid. Include gradient numbers. Name the product after Priya's company.

**Constraints:**

- Use grid with 4 columns. Use gradient text on the numbers. Collapse to 2 columns on mobile.

**Sample input:**

```
None
```

**Sample output:**

```
A clean horizontal stats bar with 4 large gradient numbers and descriptive labels.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  :root { --brand: #7c3aed; --brand-2: #ec4899; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: #fafaf9; color: #0f172a; padding: 60px 24px; }
  h1 { text-align: center; font-size: clamp(28px, 3.5vw, 44px); margin-bottom: 12px; text-wrap: balance; }
  .sub { text-align: center; color: #64748b; margin-bottom: 48px; }
  .stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    max-width: 1100px;
    margin: 0 auto;
    padding: 48px 32px;
    background: white;
    border-radius: 24px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 10px 40px rgba(0,0,0,0.06);
    position: relative;
    overflow: hidden;
  }
  .stats::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at top, rgba(124,58,237,0.08), transparent 60%);
    pointer-events: none;
  }
  .stat { text-align: center; position: relative; }
  .stat strong {
    display: block;
    font-size: clamp(32px, 4vw, 56px);
    font-weight: 800;
    line-height: 1;
    margin-bottom: 8px;
    background: linear-gradient(135deg, var(--brand), var(--brand-2));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .stat span {
    color: #64748b;
    font-size: 14px;
    font-weight: 500;
  }
  .stat + .stat { border-left: 1px solid #e2e8f0; }
  @media (max-width: 780px) {
    .stats { grid-template-columns: repeat(2, 1fr); gap: 32px 16px; }
    .stat + .stat { border-left: none; }
  }
</style>
</head>
<body>
  <h1>Trusted by Teams Around the World</h1>
  <p class="sub">Priya's Kalpana AI is powered by real numbers.</p>
  <div class="stats">
    <div class="stat"><strong>1,284</strong><span>Active teams</span></div>
    <div class="stat"><strong>98%</strong><span>Uptime last year</span></div>
    <div class="stat"><strong>4.9/5</strong><span>Customer rating</span></div>
    <div class="stat"><strong>40+</strong><span>Integrations</span></div>
  </div>
</body>
</html>
```

### Challenge 5. Build a Contact Form Section

**Difficulty:** Hard

Add a contact section to the landing page with a split layout: left side has a heading and description, right side has a form with name, email, company, and message. Use grid. Use `:valid` and `:invalid` for feedback. Use `form:has(:invalid) button` to disable submit.

**Constraints:**

- Split layout with grid. Live validation with :valid/:invalid and :has(). No JavaScript.

**Sample input:**

```
Type in the form fields
```

**Sample output:**

```
A polished contact section with a form that reacts to validation state.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  :root { --brand: #7c3aed; --brand-2: #ec4899; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: #fafaf9; padding: 80px 24px; }
  .contact {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 56px;
    max-width: 1100px;
    margin: 0 auto;
    align-items: center;
  }
  .contact-text h2 { font-size: clamp(28px, 3.5vw, 42px); color: #0f172a; margin-bottom: 16px; text-wrap: balance; line-height: 1.15; }
  .contact-text .gradient { background: linear-gradient(135deg, var(--brand), var(--brand-2)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
  .contact-text p { color: #64748b; font-size: 16px; line-height: 1.7; margin-bottom: 20px; }
  .contact-text .info { display: flex; gap: 16px; color: #7c3aed; font-weight: 600; font-size: 14px; }
  form {
    background: white;
    padding: 36px;
    border-radius: 20px;
    border: 2px solid #e2e8f0;
    box-shadow: 0 20px 50px rgba(0,0,0,0.06);
    transition: border-color 0.3s;
  }
  form:has(input:valid, textarea:valid):not(:has(input:invalid, textarea:invalid)) { border-color: #86efac; }
  form:has(input:invalid, textarea:invalid) { border-color: #fecaca; }
  .row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  label { display: block; margin-bottom: 14px; font-size: 13px; color: #475569; font-weight: 600; }
  input, textarea {
    display: block; width: 100%; padding: 12px 14px;
    margin-top: 6px;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    font-size: 15px;
    font-family: inherit;
    outline: none;
    transition: border-color 0.2s;
  }
  textarea { resize: vertical; min-height: 100px; }
  input:focus, textarea:focus { border-color: var(--brand); }
  input:not(:placeholder-shown):valid, textarea:not(:placeholder-shown):valid { border-color: #10b981; }
  input:not(:placeholder-shown):invalid, textarea:not(:placeholder-shown):invalid { border-color: #ef4444; }
  button {
    width: 100%; padding: 14px;
    background: linear-gradient(135deg, var(--brand), var(--brand-2));
    color: white;
    border: none; border-radius: 12px;
    font-size: 16px; font-weight: 700;
    cursor: pointer;
    margin-top: 8px;
    box-shadow: 0 12px 30px rgba(124,58,237,0.35);
    transition: all 0.2s;
  }
  button:hover { transform: translateY(-2px); box-shadow: 0 18px 40px rgba(124,58,237,0.45); }
  form:has(input:invalid, textarea:invalid) button {
    opacity: 0.35;
    pointer-events: none;
  }
  @media (max-width: 800px) {
    .contact { grid-template-columns: 1fr; }
    .row { grid-template-columns: 1fr; }
  }
</style>
</head>
<body>
  <section class="contact">
    <div class="contact-text">
      <h2>Let Us <span class="gradient">Build Something</span> Together</h2>
      <p>Ishita, Aarav, and Kavya are ready to answer your questions about SkyPanel. Usually we reply within a few hours.</p>
      <p>Enterprise teams, schools, and student groups — we are especially excited to hear from you.</p>
      <div class="info">
        <span>hello@skypanel.example</span>
      </div>
    </div>
    <form>
      <div class="row">
        <label>Name<input type="text" placeholder="Aarav" minlength="2" required></label>
        <label>Email<input type="email" placeholder="aarav@example.com" required></label>
      </div>
      <label>Company<input type="text" placeholder="Your company" minlength="2" required></label>
      <label>Message<textarea placeholder="How can we help you?" minlength="10" required></textarea></label>
      <button type="submit">Send Message</button>
    </form>
  </section>
</body>
</html>
```

### Challenge 6. Build a Logo Cloud Band

**Difficulty:** Hard

Add a 'Trusted by' section between the hero and features that shows 6 fake company logos in a horizontal row. Each logo is a gradient pill with the company name (Kalpana AI, Trishul Labs, Bhasha Tools, NayaCraft, ShikshaBot, VedaCloud). Grayscale them by default and colorize on hover with a filter transition.

**Constraints:**

- Use filter: grayscale() and transition. Use flex-wrap so it works on mobile.

**Sample input:**

```
Hover over a logo
```

**Sample output:**

```
A row of grayscale 'company logos' that become colorful on hover.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: #fafaf9; padding: 80px 24px; }
  .wrap { max-width: 1100px; margin: 0 auto; text-align: center; }
  h2 { font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 24px; font-weight: 700; }
  .logos { display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; align-items: center; }
  .logo {
    padding: 14px 28px;
    border-radius: 999px;
    font-weight: 800;
    font-size: 16px;
    color: white;
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    filter: grayscale(1);
    opacity: 0.55;
    transition: filter 0.3s, opacity 0.3s, transform 0.3s;
    cursor: pointer;
    user-select: none;
  }
  .logo:hover {
    filter: grayscale(0);
    opacity: 1;
    transform: translateY(-4px);
  }
  .l1 { background: linear-gradient(135deg, #7c3aed, #ec4899); }
  .l2 { background: linear-gradient(135deg, #06b6d4, #0ea5e9); }
  .l3 { background: linear-gradient(135deg, #f59e0b, #ef4444); }
  .l4 { background: linear-gradient(135deg, #10b981, #06b6d4); }
  .l5 { background: linear-gradient(135deg, #8b5cf6, #3b82f6); }
  .l6 { background: linear-gradient(135deg, #ec4899, #f43f5e); }
</style>
</head>
<body>
  <div class="wrap">
    <h2>Trusted by 1,200+ teams worldwide</h2>
    <div class="logos">
      <div class="logo l1">Kalpana AI</div>
      <div class="logo l2">Trishul Labs</div>
      <div class="logo l3">Bhasha Tools</div>
      <div class="logo l4">NayaCraft</div>
      <div class="logo l5">ShikshaBot</div>
      <div class="logo l6">VedaCloud</div>
    </div>
  </div>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/project-build-a-landing-page/*
