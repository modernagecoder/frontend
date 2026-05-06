---
title: "Practice: Project: Build an Animated Portfolio Website"
description: "55 practice problems for Project: Build an Animated Portfolio Website in HTML and CSS"
slug: project-animated-portfolio-website-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/project-animated-portfolio-website/practice
category: "HTML and CSS"
---
# Practice: Project: Build an Animated Portfolio Website

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] What does `html { scroll-behavior: smooth }` do?

*Hint:* Anchor links.

**Answer:** Makes anchor links (like `#about`) animate the scroll to the target section instead of jumping instantly.

A one-line upgrade for any page with in-page navigation. Browsers natively animate the scroll when this is set.

### Q2. [Easy] Which CSS property creates frosted glass?

*Hint:* Blur what is behind.

**Answer:** `backdrop-filter: blur(20px)` combined with a semi-transparent background.

`backdrop-filter` blurs whatever is behind the element. Combined with a translucent background, it creates the frosted glass (glassmorphism) effect.

### Q3. [Easy] How do you make a heading have gradient text?

*Hint:* Clip the background to the text.

**Answer:** `background: linear-gradient(...); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;`

Apply a gradient as the background, clip it to the text shape, and make the text fill transparent so the gradient shows through.

### Q4. [Easy] What CSS makes the skill bar fill animate from 0 to a target width?

*Hint:* @keyframes and a variable.

**Answer:** `@keyframes fill { to { width: var(--width); } }` with `animation: fill 1.5s ease-out forwards` on the bar.

The bar starts at width 0, the animation transitions to `var(--width)` (set inline on each bar), and `forwards` makes the end state stick.

### Q5. [Easy] How many lines of JavaScript are needed for a dark mode toggle?

*Hint:* Just toggle a class.

**Answer:** Three: get the button, add a click listener, toggle a class on the body.

With CSS variables handling the theme, JavaScript only needs to toggle a class. Everything else is CSS.

### Q6. [Easy] What makes the hero CTA button pulse with a glow?

*Hint:* @keyframes on box-shadow.

**Answer:** Define a keyframes animation that varies the `box-shadow` spread and opacity, and set `animation: pulse 2s infinite` on the button.

The pulsing effect is just a box-shadow that grows and shrinks on a loop. Infinite animation keeps it going forever.

### Q7. [Easy] Why use `100dvh` for the hero on mobile?

*Hint:* Address bar.

**Answer:** On mobile the browser's address bar shows and hides as the user scrolls. `100dvh` adjusts dynamically. `100vh` does not, causing layout shifts.

dvh = dynamic viewport height. It updates live as the visible area changes. Use it instead of vh for full-screen sections.

### Q8. [Easy] What does `animation-delay` do with `backwards` fill mode?

*Hint:* Prevents flash.

**Answer:** Applies the animation's starting state immediately (even during the delay), so the element does not flash its final style before the animation begins.

Without `backwards`, an element with a delay would be visible in its default state during the delay, then jump to the animation. `backwards` shows the 'from' state right away.

### Q9. [Easy] Which CSS combination creates glassmorphism?

*Hint:* Three ingredients.

**Answer:** Semi-transparent background + `backdrop-filter: blur(...)` + thin border (usually `rgba(255,255,255,0.1)`).

All three are needed. The transparency lets the blur show through, the blur creates the frost effect, and the thin white border defines the glass edge.

### Q10. [Easy] Why use dark mode as the default for a portfolio?

*Hint:* Visual impact.

**Answer:** Dark mode makes colorful gradients, glows, and neon effects pop. It looks more premium and modern. Most hiring managers and designers prefer it in 2026 portfolios.

Light mode is fine, but dark mode is dramatic — and drama is what a portfolio wants. The neon gradient hero on a dark background is the signature look of modern developer portfolios.

### Q11. [Medium] What does this do?

```
.project:hover .thumb { transform: scale(1.15); filter: brightness(0.35); }
.project:hover .title-wrap { transform: translateY(0); }
```

*Hint:* Hover reveal.

**Answer:** On hover, the thumbnail zooms in and darkens, while the title wrapper slides up from below revealing project details. A classic hover-reveal pattern.

The thumbnail transformation creates the 'spotlight' effect. The title wrapper slides up from its default partial-hidden position to fully visible. Together they give a dramatic hover experience.

### Q12. [Medium] What does the inline `style="--width: 90%"` on a skill bar do?

*Hint:* CSS variables in inline style.

**Answer:** Sets the `--width` CSS variable for that specific element. The `@keyframes fill` animation uses `var(--width)` so each bar animates to its own target.

This is a neat way to drive animation targets from HTML without JavaScript. One animation rule handles unlimited bars, each with a different final width.

### Q13. [Medium] Why use `color-mix(in oklab, var(--bg) 70%, transparent)` on the navbar?

*Hint:* Transparent navbar.

**Answer:** It creates a semi-transparent version of the background color that works in both dark and light modes without hardcoding rgba values.

`color-mix()` with a variable lets you theme transparency. In dark mode the navbar is 70% dark background + 30% transparent. In light mode it is 70% light background + 30% transparent. No manual rgba for each theme.

### Q14. [Medium] What does this do?
`form:has(input:valid):not(:has(input:invalid))`

*Hint:* All valid no invalid.

**Answer:** Matches a form that contains at least one valid input AND no invalid inputs. In other words: every input is valid.

The first `:has()` confirms there is a valid field (to catch the case of an empty form). The `:not(:has())` confirms there is no invalid field. Together: all fields are valid.

### Q15. [Medium] Why prefer animating `transform` over `top` and `left`?

*Hint:* GPU.

**Answer:** Transforms are GPU-accelerated and do not trigger layout recalculation. `top` and `left` force the browser to re-layout the page on every frame, which is slow and janky.

For smooth 60fps animations, always prefer `transform`, `opacity`, and `filter`. Everything else may work but often causes stutter, especially on mobile.

### Q16. [Medium] What does this keyframes do?

```
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```

*Hint:* Classic entry.

**Answer:** Fades the element from invisible and 30px below its final position to fully visible and in place. The classic 'slide up and fade in' effect.

The most common entry animation on the web. Combined with `animation-delay` on successive elements, it creates the staggered reveal effect.

### Q17. [Medium] What does `scroll-padding-top: 90px` on `html` do?

*Hint:* Sticky nav.

**Answer:** When an anchor link scrolls to a section, the browser leaves 90px of space at the top so the section heading is not hidden under the fixed navbar.

Without scroll-padding-top, clicking `#about` would scroll the 'About' heading right to the top of the viewport, directly under the nav — hidden. Adding padding equal to the navbar height fixes it.

### Q18. [Medium] What does the pulsing dot effect use?

```
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}
```

*Hint:* Infinite breath.

**Answer:** The dot scales up to 1.3x and fades to 50% opacity, then returns. Set `animation: pulse 2s infinite` to make it breathe forever.

The 0%/100% keyframes mean it starts and ends at the same state, so the infinite loop is seamless. Combined with a glowing box-shadow, the dot has a nice 'live' heartbeat look.

### Q19. [Medium] What is wrong if your gradient text is invisible?

*Hint:* color fallback.

**Answer:** You probably forgot `-webkit-text-fill-color: transparent` (or `color: transparent`). Without it, the default text color hides the gradient.

`background-clip: text` only clips the background to the text shape — it does not change the text color. You must also make the text itself transparent so the clipped background is visible.

### Q20. [Medium] What does this do?

```
.nav a::after {
  content: '';
  position: absolute; left: 0; bottom: -6px;
  width: 100%; height: 2px;
  background: linear-gradient(90deg, #a855f7, #06b6d4);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s;
}
.nav a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
```

*Hint:* Sliding underline.

**Answer:** Creates a gradient underline that slides in from the left on hover and retracts back to the right when the mouse leaves. A popular nav link effect.

The origin trick is the magic: origin right for the initial scale-0 (so it retracts to the right) and origin left on hover (so it grows from the left). This creates the sliding-across-and-back motion.

### Q21. [Medium] Why use `overflow-x: hidden` on body but not `overflow: hidden`?

*Hint:* Vertical scroll.

**Answer:** `overflow-x: hidden` prevents horizontal scrolling (which can happen from decorative elements near edges) without breaking vertical scrolling. `overflow: hidden` blocks both axes, making the page unscrollable.

On animated backgrounds and large decorative elements, you often get a tiny horizontal scroll. overflow-x:hidden fixes this cleanly. Never use plain overflow:hidden on body unless you want a single screen page.

### Q22. [Medium] What does the glowing border trick use?

```
.btn-primary::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, ...);
  border-radius: 14px;
  z-index: -1;
  filter: blur(12px);
  opacity: 0;
  transition: opacity 0.3s;
}
.btn-primary:hover::before { opacity: 1; }
```

*Hint:* Blurred pseudo-element behind.

**Answer:** Creates a blurred copy of the button's gradient just behind it. On hover, the copy fades in, giving the appearance of a neon glow around the button.

By placing a blurred pseudo-element slightly larger than the button (`inset: -2px`) behind it (`z-index: -1`), you get a soft glow that appears on hover. A beautiful trick for premium CTAs.

### Q23. [Medium] Why stagger animation-delays across multiple elements?

*Hint:* Rhythm.

**Answer:** Staggered delays create a cascade effect where elements appear one after the other, instead of all at once. This feels more polished and guides the viewer's eye across the content in sequence.

All-at-once reveals are visually overwhelming. Staggering by 150-250ms gives the eye time to follow each element and creates a professional 'choreographed' feel.

### Q24. [Medium] Why might you prefer CSS animations over JavaScript animations?

*Hint:* Performance and simplicity.

**Answer:** CSS animations run on the browser's compositor thread and are GPU-accelerated, so they rarely cause jank. They are also simpler to write, easier to style with variables, and work in frameworks without extra setup.

JavaScript animations can be more flexible but are harder to get right at 60fps. CSS is usually the right default. Only reach for JS when you need tight control based on user input or complex state.

### Q25. [Hard] Why is the hero content wrapped in a `.hero-content` div with `position: relative; z-index: 2`?

*Hint:* Stacking.

**Answer:** The hero has a `::before` pseudo-element with the animated background that covers the whole hero. Without positioning the content above it (`position: relative` + higher `z-index`), the background would render on top of the text.

Stacking context matters. The pseudo-element is positioned absolutely and fills the whole hero. To keep the actual content visible, we give it its own stacking context with `position: relative` and a higher z-index.

### Q26. [Hard] Why is `filter: brightness(0.35) saturate(1.3)` used on the project hover?

*Hint:* Drama.

**Answer:** Brightness 0.35 darkens the image so the text overlay is readable. Saturate 1.3 boosts the colors so the darkened image still looks vibrant and not muddy.

Just darkening can make an image look dull. Combining darken with saturation keeps colors rich even when brightness drops. This is how professional photo editors handle dark overlays.

### Q27. [Hard] What happens with this?

```
.hero::before { animation: floatBg 20s ease-in-out infinite alternate; }
```

*Hint:* alternate keyword.

**Answer:** The background animation runs forward to the 'to' state, then backward to the 'from' state, then forward again, alternating forever. This gives a smooth back-and-forth drift.

`alternate` direction means the animation reverses on every other iteration. Combined with `ease-in-out`, it creates a natural floating motion without a jarring reset at the end of each cycle.

### Q28. [Hard] What would happen if you removed `transition: background 0.4s, color 0.4s` from body?

*Hint:* Theme switch.

**Answer:** Clicking the dark mode toggle would instantly snap between themes instead of fading smoothly. The transition is what creates the smooth color crossfade.

Without a transition, CSS variable changes apply immediately. A 0.4s transition on the relevant properties (background, color) gives the smooth visual change that makes the toggle feel polished.

### Q29. [Hard] Why give the 'avatar' its own glow animation with keyframes instead of a simple static box-shadow?

*Hint:* Attention.

**Answer:** A pulsing glow draws attention to the avatar — the most important element of the about section. Static shadows blend in, animated ones catch the eye without being annoying.

Good animations guide attention subtly. A breathing glow on the avatar hints 'look here, this is the person' without needing any arrows or labels.

### Q30. [Hard] Why would you avoid animating many properties with `transition: all` on a complex card?

*Hint:* Layout.

**Answer:** `transition: all` animates every changed property, including layout properties like margin, width, and padding, which force the browser to recalculate layout on every frame. This causes jank, especially on lower-end devices.

Be explicit: `transition: transform 0.3s, box-shadow 0.3s, filter 0.3s`. This limits the animation to GPU-friendly properties and avoids surprise animations when you change other styles later.

## Multiple Choice Questions

### Q1. [Easy] How do you enable smooth scrolling for anchor links?

**Answer:** B

**B is correct.** `scroll-behavior: smooth` on `html` (or the scrolling container) makes anchor links animate the scroll instead of jumping.

### Q2. [Easy] Which CSS creates the frosted glass effect?

**Answer:** B

**B is correct.** Glassmorphism needs a semi-transparent background and a backdrop-filter blur to see the blurred content behind.

### Q3. [Easy] How do you make text have a gradient fill?

**Answer:** B

**B is correct.** Apply the gradient as background, clip it to the text shape, and make the text transparent so the gradient shows through.

### Q4. [Easy] Which unit is best for a full-height hero on mobile?

**Answer:** C

**C is correct.** `100dvh` adjusts as mobile browser toolbars show and hide, preventing the hero from being cut off.

### Q5. [Easy] How many lines of JavaScript are needed for a dark/light toggle?

**Answer:** B

**B is correct.** With CSS variables and a `.light` override class, JavaScript only needs to toggle the class. Three lines.

### Q6. [Easy] What CSS property animates smoothly and is GPU-accelerated?

**Answer:** C

**C is correct.** `transform`, `opacity`, and `filter` are GPU-accelerated and produce smooth 60fps animations. Layout properties like margin, width, and padding cause jank.

### Q7. [Easy] What does `animation-fill-mode: forwards` do?

**Answer:** B

**B is correct.** `forwards` fill mode keeps the final keyframe state applied after the animation completes. Without it, the element snaps back to its default style.

### Q8. [Easy] Which selector validates a form reactively with :has()?

**Answer:** A

**A is correct.** `form:has(input:invalid)` matches a form containing any invalid input, and the rule applies to buttons inside that form.

### Q9. [Medium] How do you set different target widths for animated skill bars?

**Answer:** B

**B is correct.** Set the target width as an inline CSS variable per bar, then reference `var(--width)` in the animation's keyframes. One animation, many bars.

### Q10. [Medium] Why use `animation-fill-mode: backwards` with a delay?

**Answer:** B

**B is correct.** Without it, the element shows its default style during the delay, then jumps to the animation. `backwards` shows the 'from' state right away.

### Q11. [Medium] What does `transform-origin: right` do for a sliding underline?

**Answer:** B

**B is correct.** transform-origin sets the pivot for scaleX. With origin right, scaleX(0) collapses the element to the right edge, setting up the 'slide out to the right' effect.

### Q12. [Medium] How do you keep the content of the hero above its animated background pseudo-element?

**Answer:** B

**B is correct.** Absolutely-positioned pseudo-elements would render above static content. Giving the content relative position and higher z-index creates a stacking context that keeps it on top.

### Q13. [Medium] Why use `overflow-x: hidden` on body but not `overflow: hidden`?

**Answer:** A

**A is correct.** `overflow: hidden` blocks both axes, making the page unscrollable. Use `overflow-x: hidden` to block only horizontal scroll.

### Q14. [Medium] How do you make a navbar's background semi-transparent in both dark and light mode using one rule?

**Answer:** B

**B is correct.** `color-mix()` with a variable lets you create a semi-transparent version of the theme background without hardcoding values for each mode.

### Q15. [Medium] Which CSS pattern is used for project cards that reveal details on hover?

**Answer:** B

**B is correct.** The classic reveal pattern uses transform on the thumbnail (scale + filter) and a separate info element sliding up into view. Smooth and performant.

### Q16. [Hard] Why is `transition: all` considered bad practice on interactive cards?

**Answer:** B

**B is correct.** `transition: all` animates every changed property, including layout-affecting ones like margin and width. Be explicit about which properties to animate.

### Q17. [Hard] What creates the glowing button border effect?

**Answer:** B

**B is correct.** A blurred copy of the gradient positioned slightly behind the button creates a soft halo. Animate its opacity on hover for the appearing glow.

### Q18. [Hard] Why use `animation: floatBg 20s ease-in-out infinite alternate` for the background?

**Answer:** B

**B is correct.** `alternate` reverses the animation on each loop, so the background drifts forward and back smoothly without a jarring reset. Combined with ease-in-out for natural motion.

## Coding Challenges

### Challenge 1. Add a Skill Meter with Custom Animation

**Difficulty:** Easy

Build a standalone skills section with 6 animated bars for Priya. Use a CSS variable `--width` on each bar to drive the final width, and a single `@keyframes` animation to fill them all. Each bar should have a neon glow shadow. The bars should animate on page load.

**Constraints:**

- Use one @keyframes. Use CSS variables for per-bar width. Include glow shadow.

**Sample input:**

```
None
```

**Sample output:**

```
Six skill bars that fill smoothly from 0 to their target widths, each glowing softly.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: #0b0f1e; color: white; padding: 60px 24px; }
  h1 { text-align: center; background: linear-gradient(135deg, #a855f7, #06b6d4); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; font-size: 36px; margin-bottom: 32px; }
  .wrap { max-width: 600px; margin: 0 auto; }
  .skill {
    background: #131833;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 14px;
    padding: 18px 22px;
    margin-bottom: 14px;
    transition: transform 0.3s, border-color 0.3s;
  }
  .skill:hover { transform: translateX(8px); border-color: #a855f7; }
  .skill-header { display: flex; justify-content: space-between; margin-bottom: 10px; font-weight: 700; font-size: 15px; }
  .pct { color: #a855f7; }
  .bar { height: 10px; background: #1a2040; border-radius: 999px; overflow: hidden; }
  .fill {
    height: 100%;
    background: linear-gradient(90deg, #a855f7, #06b6d4, #ec4899);
    border-radius: 999px;
    width: 0;
    animation: fill 1.6s ease-out 0.4s forwards;
    box-shadow: 0 0 20px rgba(168,85,247,0.6), 0 0 40px rgba(168,85,247,0.3);
  }
  @keyframes fill { to { width: var(--width); } }
</style>
</head>
<body>
  <div class="wrap">
    <h1>Priya's Skills</h1>
    <div class="skill"><div class="skill-header"><span>HTML and CSS</span><span class="pct">96%</span></div><div class="bar"><div class="fill" style="--width: 96%"></div></div></div>
    <div class="skill"><div class="skill-header"><span>JavaScript</span><span class="pct">90%</span></div><div class="bar"><div class="fill" style="--width: 90%"></div></div></div>
    <div class="skill"><div class="skill-header"><span>React</span><span class="pct">82%</span></div><div class="bar"><div class="fill" style="--width: 82%"></div></div></div>
    <div class="skill"><div class="skill-header"><span>Node.js</span><span class="pct">75%</span></div><div class="bar"><div class="fill" style="--width: 75%"></div></div></div>
    <div class="skill"><div class="skill-header"><span>Python</span><span class="pct">68%</span></div><div class="bar"><div class="fill" style="--width: 68%"></div></div></div>
    <div class="skill"><div class="skill-header"><span>Figma</span><span class="pct">60%</span></div><div class="bar"><div class="fill" style="--width: 60%"></div></div></div>
  </div>
</body>
</html>
```

### Challenge 2. Change the Color Theme

**Difficulty:** Easy

Take the portfolio's CSS variables and create a second theme: cyan-and-teal instead of purple-and-pink. Change `--brand`, `--brand-2`, and `--accent` at the top of the file. Build a simple hero with this new theme featuring Rohan's name.

**Constraints:**

- Only change variable values. No other CSS changes.

**Sample input:**

```
None
```

**Sample output:**

```
A hero with the same structure but a cyan-teal color scheme instead of purple-pink.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  :root {
    --brand: #06b6d4;
    --brand-2: #14b8a6;
    --accent: #0ea5e9;
    --bg: #04131a;
    --muted: #7dd3fc;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: var(--bg); color: white; min-height: 100vh; overflow: hidden; }
  .hero { min-height: 100dvh; display: grid; place-items: center; text-align: center; padding: 24px; position: relative; }
  .hero::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at 30% 20%, rgba(6,182,212,0.3), transparent 55%),
                radial-gradient(ellipse at 70% 80%, rgba(20,184,166,0.25), transparent 55%);
    animation: float 18s ease-in-out infinite alternate;
    pointer-events: none;
  }
  @keyframes float { 100% { transform: translate(40px, -30px) scale(1.15); } }
  .content { position: relative; z-index: 2; max-width: 900px; }
  h1 {
    font-size: clamp(42px, 7vw, 88px);
    line-height: 1.02;
    text-wrap: balance;
    letter-spacing: -2px;
    margin-bottom: 20px;
    background: linear-gradient(135deg, var(--brand), var(--brand-2), var(--accent));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: fadeUp 1s ease-out;
  }
  p { font-size: 20px; color: var(--muted); max-width: 580px; margin: 0 auto 32px; animation: fadeUp 1s ease-out 0.2s backwards; }
  .btn {
    display: inline-block;
    padding: 14px 30px;
    background: linear-gradient(135deg, var(--brand), var(--brand-2));
    color: white;
    border-radius: 12px;
    font-weight: 700;
    text-decoration: none;
    box-shadow: 0 18px 40px rgba(6,182,212,0.4);
    animation: fadeUp 1s ease-out 0.4s backwards;
  }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
</style>
</head>
<body>
  <section class="hero">
    <div class="content">
      <h1>Rohan Mehta<br>Backend Developer</h1>
      <p>Database wizard, API architect, and late night debugger. Building systems that scale from Pune.</p>
      <a href="#" class="btn">See My Projects</a>
    </div>
  </section>
</body>
</html>
```

### Challenge 3. Add a Cool Hover Effect to Project Cards

**Difficulty:** Medium

Build a standalone project grid where each card rotates slightly in 3D perspective on hover (using `transform: perspective() rotateY()`) and shows a glowing border. Include 4 projects for Ishita.

**Constraints:**

- Use perspective and rotateY. Use box-shadow for the glow. Cards must be aspect-ratio 4/3.

**Sample input:**

```
Hover over any card
```

**Sample output:**

```
Cards tilt in 3D on hover with a glowing purple border.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: #0b0f1e; color: white; padding: 60px 24px; perspective: 1200px; }
  h1 { text-align: center; color: #a855f7; margin-bottom: 36px; font-size: 34px; }
  .grid { display: grid; gap: 28px; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); max-width: 1000px; margin: 0 auto; }
  .project {
    aspect-ratio: 4/3;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(255,255,255,0.08);
    transition: transform 0.5s, border-color 0.5s, box-shadow 0.5s;
    transform-style: preserve-3d;
    cursor: pointer;
  }
  .project:hover {
    transform: rotateY(-8deg) rotateX(4deg) scale(1.03);
    border-color: #a855f7;
    box-shadow:
      0 0 0 1px rgba(168,85,247,0.6),
      0 40px 80px rgba(168,85,247,0.35),
      0 0 60px rgba(168,85,247,0.25);
  }
  .thumb { position: absolute; inset: 0; transition: transform 0.6s; }
  .project:hover .thumb { transform: scale(1.1); }
  .p1 .thumb { background: linear-gradient(135deg, #7c3aed, #ec4899); }
  .p2 .thumb { background: linear-gradient(135deg, #06b6d4, #0ea5e9); }
  .p3 .thumb { background: linear-gradient(135deg, #f59e0b, #ef4444); }
  .p4 .thumb { background: linear-gradient(135deg, #10b981, #06b6d4); }
  .overlay { position: absolute; inset: auto 0 0 0; padding: 20px; background: linear-gradient(0deg, rgba(0,0,0,0.9), transparent); z-index: 2; }
  .overlay h3 { font-size: 20px; margin-bottom: 6px; }
  .overlay p { font-size: 13px; color: rgba(255,255,255,0.75); }
</style>
</head>
<body>
  <h1>Ishita's Projects</h1>
  <div class="grid">
    <div class="project p1"><div class="thumb"></div><div class="overlay"><h3>Kalpana Quiz</h3><p>Multiplayer quiz with leaderboards</p></div></div>
    <div class="project p2"><div class="thumb"></div><div class="overlay"><h3>Trishul Weather</h3><p>Weather dashboard with charts</p></div></div>
    <div class="project p3"><div class="thumb"></div><div class="overlay"><h3>ShikshaBot</h3><p>AI homework helper</p></div></div>
    <div class="project p4"><div class="thumb"></div><div class="overlay"><h3>VedaTimer</h3><p>Pomodoro with chakra theme</p></div></div>
  </div>
</body>
</html>
```

### Challenge 4. Build a Glassmorphism About Card

**Difficulty:** Medium

Create a standalone about section with a glowing avatar and a glassmorphism card containing bio text. Use `backdrop-filter: blur()` for the glass effect. Place it against an animated gradient background. Include pulsing glow on the avatar. Name it after Vivaan.

**Constraints:**

- Use backdrop-filter. Use @keyframes for the avatar glow. Use an animated gradient background.

**Sample input:**

```
None
```

**Sample output:**

```
A glowing circular avatar next to a frosted glass bio card on an animated gradient background.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Segoe UI', sans-serif;
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 60px 24px;
    background: #0b0f1e;
    color: white;
    position: relative;
    overflow: hidden;
  }
  body::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 30% 20%, rgba(168,85,247,0.35), transparent 55%),
                radial-gradient(ellipse at 70% 80%, rgba(6,182,212,0.3), transparent 55%),
                radial-gradient(ellipse at 50% 50%, rgba(236,72,153,0.2), transparent 60%);
    animation: floatBg 18s ease-in-out infinite alternate;
    pointer-events: none;
  }
  @keyframes floatBg { 100% { transform: translate(50px, -40px) scale(1.2); } }
  .about {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 40px;
    align-items: center;
    max-width: 720px;
    padding: 36px;
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(25px);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 24px;
    box-shadow: 0 30px 80px rgba(0,0,0,0.5);
    position: relative;
    z-index: 1;
  }
  .avatar {
    aspect-ratio: 1;
    border-radius: 50%;
    background: linear-gradient(135deg, #a855f7, #06b6d4, #ec4899);
    display: grid;
    place-items: center;
    color: white;
    font-size: 80px;
    font-weight: 800;
    box-shadow: 0 30px 80px rgba(168,85,247,0.4);
    animation: glow 4s ease-in-out infinite;
  }
  @keyframes glow {
    0%, 100% { box-shadow: 0 30px 80px rgba(168,85,247,0.4); }
    50% { box-shadow: 0 40px 100px rgba(6,182,212,0.5); }
  }
  h1 { font-size: 32px; margin-bottom: 12px; background: linear-gradient(135deg, #a855f7, #06b6d4); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
  p { color: #cbd5e1; line-height: 1.7; margin-bottom: 12px; }
  .tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
  .tag { padding: 5px 12px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 999px; font-size: 12px; }
  @media (max-width: 600px) {
    .about { grid-template-columns: 1fr; text-align: center; }
    .avatar { max-width: 180px; margin: 0 auto; }
    .tags { justify-content: center; }
  }
</style>
</head>
<body>
  <div class="about">
    <div class="avatar">V</div>
    <div>
      <h1>Hi, I am Vivaan</h1>
      <p>I am a 15-year-old developer from Pune who loves building beautiful interfaces and fast backends.</p>
      <p>When I am not coding, I play cricket, read sci-fi, and tinker with hardware projects.</p>
      <div class="tags">
        <span class="tag">React</span>
        <span class="tag">Next.js</span>
        <span class="tag">Python</span>
        <span class="tag">Cricket</span>
      </div>
    </div>
  </div>
</body>
</html>
```

### Challenge 5. Build a Dark/Light Mode Portfolio Page

**Difficulty:** Hard

Build a mini portfolio page (hero + skills + footer) with a working dark/light mode toggle. Use CSS variables for every color. The toggle button should update its label ('Light Mode' / 'Dark Mode') based on the current state. Three lines of JavaScript only. Name it after Anika.

**Constraints:**

- Use CSS variables. Max 3 lines of JavaScript. Include hero, skills, and footer.

**Sample input:**

```
Click the toggle button
```

**Sample output:**

```
The whole page smoothly transitions between dark and light themes.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  :root {
    --bg: #0b0f1e;
    --surface: #131833;
    --text: #f1f5f9;
    --muted: #94a3b8;
    --brand: #a855f7;
    --brand-2: #06b6d4;
    --border: rgba(255,255,255,0.08);
  }
  body.light {
    --bg: #fafafa;
    --surface: #ffffff;
    --text: #0f172a;
    --muted: #64748b;
    --brand: #7c3aed;
    --brand-2: #0891b2;
    --border: #e2e8f0;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; transition: background 0.4s, color 0.4s; }
  .theme-btn { position: fixed; top: 20px; right: 20px; z-index: 10; padding: 10px 20px; background: var(--brand); color: white; border: none; border-radius: 999px; cursor: pointer; font-weight: 700; font-size: 13px; box-shadow: 0 10px 30px rgba(168,85,247,0.4); }
  .hero { min-height: 70vh; display: grid; place-items: center; text-align: center; padding: 60px 24px; }
  h1 { font-size: clamp(36px, 6vw, 72px); line-height: 1.05; background: linear-gradient(135deg, var(--brand), var(--brand-2)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 16px; }
  .sub { color: var(--muted); font-size: 19px; max-width: 520px; margin: 0 auto; }
  .skills { padding: 40px 24px 60px; max-width: 600px; margin: 0 auto; }
  .skills h2 { text-align: center; color: var(--brand); margin-bottom: 24px; font-size: 26px; }
  .skill { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 18px 22px; margin-bottom: 14px; transition: background 0.4s, border-color 0.4s; }
  .skill-header { display: flex; justify-content: space-between; margin-bottom: 8px; font-weight: 700; }
  .pct { color: var(--brand); }
  .bar { height: 8px; background: var(--border); border-radius: 999px; overflow: hidden; }
  .fill { height: 100%; background: linear-gradient(90deg, var(--brand), var(--brand-2)); border-radius: 999px; width: 0; animation: fill 1.5s ease-out 0.3s forwards; }
  @keyframes fill { to { width: var(--w); } }
  footer { text-align: center; padding: 32px; border-top: 1px solid var(--border); color: var(--muted); font-size: 13px; transition: border-color 0.4s; }
</style>
</head>
<body>
  <button class="theme-btn" id="btn">Light Mode</button>
  <section class="hero">
    <div>
      <h1>Anika Joshi</h1>
      <p class="sub">Frontend developer building joyful interfaces from Pune. Dark mode by default, because it looks better.</p>
    </div>
  </section>
  <section class="skills">
    <h2>My Skills</h2>
    <div class="skill"><div class="skill-header"><span>HTML and CSS</span><span class="pct">94%</span></div><div class="bar"><div class="fill" style="--w: 94%"></div></div></div>
    <div class="skill"><div class="skill-header"><span>JavaScript</span><span class="pct">87%</span></div><div class="bar"><div class="fill" style="--w: 87%"></div></div></div>
    <div class="skill"><div class="skill-header"><span>React</span><span class="pct">80%</span></div><div class="bar"><div class="fill" style="--w: 80%"></div></div></div>
  </section>
  <footer>Built by Anika. 2026.</footer>
  <script>
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => { document.body.classList.toggle('light'); btn.textContent = document.body.classList.contains('light') ? 'Dark Mode' : 'Light Mode'; });
  </script>
</body>
</html>
```

### Challenge 6. Build a Full Animated Portfolio Hero Section

**Difficulty:** Hard

Build a complete hero section with: animated gradient background (@keyframes), pulsing status dot, gradient headline, staggered fade-up animations for headline/subtitle/CTA, and a glowing primary button with a pseudo-element halo. Call it Ishaan's portfolio. It should feel like a premium developer portfolio.

**Constraints:**

- Use staggered animation-delay. Include pulse keyframes for the dot. Use a ::before pseudo-element for the button glow.

**Sample input:**

```
Load the page
```

**Sample output:**

```
A stunning hero with slowly drifting background gradients, a pulsing 'Available' badge, gradient heading, and a glowing CTA button that fade in with a staggered effect.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Segoe UI', sans-serif;
    background: #0b0f1e;
    color: #f1f5f9;
    min-height: 100vh;
    overflow: hidden;
  }
  .hero {
    min-height: 100dvh;
    display: grid;
    place-items: center;
    text-align: center;
    padding: 24px;
    position: relative;
  }
  .hero::before {
    content: '';
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse at 30% 20%, rgba(168,85,247,0.3), transparent 55%),
      radial-gradient(ellipse at 70% 80%, rgba(6,182,212,0.25), transparent 55%),
      radial-gradient(ellipse at 50% 50%, rgba(236,72,153,0.18), transparent 60%);
    animation: floatBg 20s ease-in-out infinite alternate;
    pointer-events: none;
  }
  @keyframes floatBg {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(50px, -40px) scale(1.18); }
  }
  .content { position: relative; z-index: 2; max-width: 900px; }
  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 20px;
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 999px;
    font-size: 13px;
    color: #cbd5e1;
    margin-bottom: 28px;
    animation: fadeUp 0.9s ease-out;
  }
  .dot {
    width: 8px;
    height: 8px;
    background: #10b981;
    border-radius: 50%;
    box-shadow: 0 0 12px #10b981;
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.4); }
  }
  h1 {
    font-size: clamp(42px, 7.5vw, 92px);
    line-height: 1.02;
    text-wrap: balance;
    letter-spacing: -2.5px;
    margin-bottom: 24px;
    background: linear-gradient(135deg, #a855f7 0%, #06b6d4 50%, #ec4899 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: fadeUp 1s ease-out 0.15s backwards;
  }
  .sub {
    font-size: clamp(17px, 2vw, 22px);
    color: #94a3b8;
    max-width: 620px;
    margin: 0 auto 40px;
    line-height: 1.6;
    text-wrap: pretty;
    animation: fadeUp 1s ease-out 0.3s backwards;
  }
  .ctas { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; animation: fadeUp 1s ease-out 0.45s backwards; }
  .btn { padding: 16px 32px; border-radius: 12px; font-weight: 700; font-size: 15px; text-decoration: none; transition: transform 0.2s; position: relative; display: inline-flex; align-items: center; gap: 8px; }
  .btn-primary {
    background: linear-gradient(135deg, #a855f7, #ec4899);
    color: white;
    box-shadow: 0 20px 45px rgba(168,85,247,0.4);
  }
  .btn-primary::before {
    content: '';
    position: absolute; inset: -3px;
    background: linear-gradient(135deg, #a855f7, #06b6d4, #ec4899);
    border-radius: 15px;
    z-index: -1;
    filter: blur(16px);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .btn-primary:hover { transform: translateY(-3px); }
  .btn-primary:hover::before { opacity: 0.9; }
  .btn-outline {
    background: rgba(255,255,255,0.04);
    color: white;
    border: 1px solid rgba(255,255,255,0.15);
    backdrop-filter: blur(10px);
  }
  .btn-outline:hover { background: rgba(255,255,255,0.1); border-color: #a855f7; }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
</head>
<body>
  <section class="hero">
    <div class="content">
      <div class="eyebrow"><span class="dot"></span>Available for internships</div>
      <h1>Ishaan Rao<br>Building the Modern Web</h1>
      <p class="sub">I am a 17-year-old developer from Bangalore who ships fast, beautiful products. Currently learning AI and looking for my first real role.</p>
      <div class="ctas">
        <a href="#" class="btn btn-primary">View My Work</a>
        <a href="#" class="btn btn-outline">Download Resume</a>
      </div>
    </div>
  </section>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/project-animated-portfolio-website/*
