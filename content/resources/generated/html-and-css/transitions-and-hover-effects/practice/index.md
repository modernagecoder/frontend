---
title: "Practice: CSS Transitions and Hover Effects"
description: "60 practice problems for CSS Transitions and Hover Effects in HTML and CSS"
slug: transitions-and-hover-effects-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/transitions-and-hover-effects/practice/
category: "HTML and CSS"
---
# Practice: CSS Transitions and Hover Effects

**Total questions:** 60

## Topic-Specific Questions

### Q1. [Easy] What is a CSS transition?

*Hint:* It smooths a style change.

**Answer:** A smooth animation from one style value to another over a specified duration, instead of an instant change.

Transitions make UI feel polished by animating property changes over time. For example, a button color fade over 0.3 seconds instead of an instant change.

### Q2. [Easy] What are the four transition sub-properties?

*Hint:* Property, duration, timing, delay.

**Answer:** `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`

The shorthand `transition` combines all four: `transition: property duration timing-function delay;`

### Q3. [Easy] What does this do?

```
.btn {
  background: red;
  transition: background 0.5s;
}
.btn:hover {
  background: blue;
}
```

*Hint:* Smooth color change on hover.

**Answer:** The button smoothly fades from red to blue over 0.5 seconds when hovered, and fades back to red over 0.5 seconds when the mouse leaves.

Because the transition is defined on the base state, it applies in BOTH directions — hover in and hover out.

### Q4. [Easy] What is the default transition-timing-function?

*Hint:* Four letters.

**Answer:** `ease`

If you do not specify a timing function, the browser uses `ease`, which starts slow, speeds up in the middle, and slows down at the end.

### Q5. [Easy] How do you transition multiple properties?

*Hint:* Comma-separated list.

**Answer:** `transition: background 0.3s, transform 0.5s, box-shadow 0.4s;`

Separate each property (with its own duration and timing if desired) with a comma. Each animation runs independently.

### Q6. [Medium] What is wrong with this code?

```
.modal {
  display: none;
  transition: display 0.3s;
}
.modal.open {
  display: block;
}
```

*Hint:* display is not animatable.

**Answer:** `display` cannot be transitioned. It is a discrete property with no intermediate values. The element appears instantly.

Use `opacity` + `visibility` instead for fade effects. Example: `opacity: 0; visibility: hidden;` to `opacity: 1; visibility: visible;`.

### Q7. [Medium] What is wrong with this?

```
.panel { height: 0; transition: height 0.3s; }
.panel.open { height: auto; }
```

*Hint:* auto cannot be animated.

**Answer:** You cannot transition to or from `height: auto`. The browser does not know the target pixel value to animate to. The panel snaps open.

Use `max-height` with a value larger than the content (like 500px). max-height can be animated and will still display only as much content as exists.

### Q8. [Medium] Why put the `transition` property on the base state, not inside :hover?

*Hint:* Think about hovering out.

**Answer:** If the transition is only on :hover, it applies when hovering IN but not when hovering OUT — the hover-out is instant. Putting it on the base state makes it apply in both directions.

The transition rule on the base state says 'whenever this property changes, animate it'. Since both hover-in and hover-out change the property, both get the smooth animation.

### Q9. [Medium] What does `transition: all 0.3s ease` mean?

*Hint:* Animate every property.

**Answer:** Every animatable CSS property that changes will transition over 0.3 seconds using the ease timing function.

`all` is a catch-all that animates any property that changes. Convenient but sometimes creates unexpected animations on properties you did not mean to animate.

### Q10. [Medium] What is `cubic-bezier()`?

*Hint:* Custom timing curve.

**Answer:** A function that creates a custom acceleration curve for a transition. It takes four control points that define the shape of the curve.

`cubic-bezier(0.68, -0.55, 0.27, 1.55)` creates a 'back' overshoot effect. Tools like cubic-bezier.com let you visually design the curve.

### Q11. [Medium] What does this do?

```
.card {
  transition: transform 0.3s;
}
.card:hover {
  transform: translateY(-8px);
}
```

*Hint:* Classic lift effect.

**Answer:** On hover, the card smoothly rises 8 pixels upward over 0.3 seconds, creating a lift effect.

`translateY(-8px)` moves the element up by 8 pixels. The transition makes the movement smooth.

### Q12. [Medium] What is the purpose of `cursor: pointer`?

*Hint:* Visual feedback.

**Answer:** It changes the mouse cursor to a hand icon when hovering, signaling to users that the element is clickable.

Always add `cursor: pointer` to custom clickable elements (divs with onclick, cards, etc.). Native buttons and links get the pointer cursor automatically.

### Q13. [Hard] Which timing function is best for elements appearing or entering the screen?

*Hint:* Fast start, slow end.

**Answer:** `ease-out`

ease-out starts fast and slows at the end, which feels natural for things coming to rest (like a card sliding into place). ease-in is better for elements leaving.

### Q14. [Hard] What does `will-change: transform` do?

*Hint:* Performance hint.

**Answer:** It tells the browser in advance that the `transform` property is going to animate, so the browser can optimize by placing the element on its own GPU layer.

Use sparingly. Overusing will-change causes the browser to create too many layers and actually hurts performance. Only apply to elements with heavy, frequent animations.

### Q15. [Hard] What does this do?

```
.btn {
  transition: background 0.3s 0.1s;
}
```

*Hint:* Third value is the delay.

**Answer:** The background animates over 0.3 seconds, but only AFTER a 0.1-second delay.

In the shorthand `transition: property duration timing-function delay`, the delay is the fourth value (or the second time value, since timing-function is optional).

## Mixed Questions

### Q1. [Easy] Which CSS property creates a smooth animation between state changes?

*Hint:* Not animation — the other one.

**Answer:** `transition`

`transition` animates changes between two states. `animation` (with @keyframes) is for multi-step animations that run automatically.

### Q2. [Easy] How do you write a transition duration of 400 milliseconds?

*Hint:* Use ms or decimal s.

**Answer:** `400ms` or `0.4s`

Both units are valid. 1s = 1000ms.

### Q3. [Medium] Why is transitioning `transform` and `opacity` considered the 'most performant'?

*Hint:* GPU-accelerated.

**Answer:** Modern browsers can animate transform and opacity on the GPU without triggering layout recalculation or repaint. Other properties (like width, height, top) cause layout or paint work on the CPU, which is slower.

Rule of thumb: prefer `transform` (for movement/scale/rotation) and `opacity` (for fading) over `top`, `left`, `width`, `height`, for smooth 60fps animations.

### Q4. [Medium] What is wrong with this hover effect?

```
.img { width: 200px; }
.img:hover {
  width: 250px;
  transition: width 0.3s;
}
```

*Hint:* Where is the transition?

**Answer:** The transition is on :hover, so it only applies when hovering IN. When the mouse leaves, the image snaps back instantly instead of shrinking smoothly.

Move the transition to the base rule: `.img { width: 200px; transition: width 0.3s; }` so it works both ways.

### Q5. [Medium] What is the difference between `:hover` and `:active`?

*Hint:* One is mouse over; the other is mouse pressed.

**Answer:** `:hover` applies when the mouse is over the element. `:active` applies when the element is being actively clicked (mouse button held down).

You can use both together for a complete interaction: hover for anticipation, active for click feedback.

### Q6. [Medium] What is `ease-in-out`?

*Hint:* Slow start AND slow end.

**Answer:** A timing function that starts slow, speeds up in the middle, and slows down at the end.

ease-in-out is great for symmetric animations (like toggling on and off) where the element starts and ends at rest in the same way.

### Q7. [Hard] Can you transition between two different `display` values?

*Hint:* No, but there is a workaround.

**Answer:** No. `display` is a discrete property. Use `opacity` and `visibility` for fade in/out effects instead.

Note: newer browsers support `display: none` in @keyframes with `transition-behavior: allow-discrete`, but the classic fix is opacity + visibility.

### Q8. [Hard] What is the purpose of `transform-origin`?

*Hint:* Anchor point for transforms.

**Answer:** It sets the pivot point for transforms. Default is center. You can make rotations and scales originate from any point (like top-left, bottom-right, or specific coordinates).

Example: `transform-origin: top left; transform: scale(0);` scales from the top-left corner instead of the center. Useful for sliding or expanding animations.

### Q9. [Medium] Which hover effect uses the least CPU?

*Hint:* GPU-friendly properties.

**Answer:** Effects using `transform` and `opacity`, because both are GPU-accelerated and do not trigger layout recalculation.

Animating width, height, top, left, margin, or padding causes layout work every frame. transform/opacity stays on the GPU for buttery-smooth 60fps.

### Q10. [Medium] Why are micro-interactions (small hover effects) important in modern UI?

*Hint:* User feedback.

**Answer:** They give users immediate visual feedback that the interface is responding to their actions, which builds trust and makes interfaces feel alive and polished. Instant changes feel glitchy; smooth transitions feel deliberate.

Every major design system (Material, Apple HIG, Fluent) emphasizes micro-interactions. They are a key part of what makes modern websites feel 'professional'.

### Q11. [Easy] Which pseudo-class applies when the mouse is over an element?

*Hint:* Starts with colon.

**Answer:** `:hover`

`:hover` matches while the user's pointer is positioned over the element. It does not apply on touch devices without tapping.

### Q12. [Medium] How would you delay a transition by half a second?

*Hint:* Fourth shorthand value.

**Answer:** `transition: background 0.3s ease 0.5s;`

In the shorthand, the last time value is the delay. Or use the longhand `transition-delay: 0.5s`.

### Q13. [Hard] Why should you avoid `transition: all` in production code?

*Hint:* Performance and predictability.

**Answer:** Because it animates EVERY animatable property change, including ones you did not intend. It can also be slightly less performant than listing specific properties. Being explicit is more predictable and often faster.

Use `transition: all` only in prototypes or when you truly want every property to animate. Production code should list what you actually want to animate.

### Q14. [Hard] What is the difference between :hover and :focus?

*Hint:* Mouse vs keyboard.

**Answer:** `:hover` applies when the mouse pointer is over the element. `:focus` applies when the element receives keyboard focus (e.g., tabbed to). For accessibility, always style :focus AND :hover together.

Keyboard users rely on :focus styles. Pattern: `.btn:hover, .btn:focus { ... }` ensures both mouse and keyboard users get visual feedback.

### Q15. [Medium] Should you use transitions on a mobile site even though there is no hover?

*Hint:* State changes happen on taps too.

**Answer:** Yes. Transitions run on ANY state change, not just hover. Taps, focus, class toggles via JavaScript, media query changes — all benefit from transitions. They make mobile UIs feel smooth and responsive.

Mobile does not have true hover, but tapping, expanding menus, and card transitions still use the same CSS transitions for smoothness.

### Q16. [Easy] What is `linear` timing?

*Hint:* Constant speed.

**Answer:** The animation progresses at a constant speed from start to finish — no acceleration or deceleration.

Linear feels robotic for most UI. It is useful for continuous animations like loading spinners where constant speed looks correct.

### Q17. [Easy] What does `:hover` do on a touch device?

*Hint:* Think about how touch works.

**Answer:** On touch devices, :hover typically activates on tap and stays until the user taps somewhere else. It can feel awkward, which is why touch interactions often prefer :active or JavaScript events.

For touch-friendly designs, use `@media (hover: hover)` to apply hover effects only on devices that truly support hover.

### Q18. [Medium] How would you create a 'button press' effect that happens on click?

*Hint:* Use :active.

**Answer:** Use the `:active` pseudo-class with a small scale-down or translateY on click. Example: `.btn:active { transform: translateY(2px) scale(0.98); }` combined with a transition for smoothness.

:active applies while the mouse button is held down. Combined with transitions, it creates tactile 'press' feedback.

### Q19. [Hard] Why might a transition not play even though the property was changed?

*Hint:* Common bug: styles changed synchronously without the browser rendering the initial state.

**Answer:** If you set the initial and final values in the same synchronous code block (e.g., applying a class immediately after creating the element), the browser may only render the final state and skip the transition.

Fix: force a reflow between the two states, or use `requestAnimationFrame`/`setTimeout` to apply the class in the next frame. This lets the browser render the initial state first.

## Multiple Choice Questions

### Q1. [Easy] What is a CSS transition?

**Answer:** B

**B is correct.** Transitions smoothly animate property changes between a base state and a new state (like on hover).

### Q2. [Easy] Which is the shorthand syntax?

**Answer:** A

**A is correct.** The shorthand order is `property duration timing-function delay`.

### Q3. [Easy] Which pseudo-class applies when hovering with a mouse?

**Answer:** B

**B is correct.** `:hover` matches while the user's pointer is positioned over the element.

### Q4. [Easy] Which of these CANNOT be transitioned?

**Answer:** C

**C is correct.** `display` is a discrete property with no intermediate values. Use opacity + visibility for show/hide animations.

### Q5. [Easy] What is the default transition-timing-function?

**Answer:** B

**B is correct.** If you do not specify a timing function, the browser uses `ease`.

### Q6. [Medium] Which timing function is best for elements entering the screen?

**Answer:** C

**C is correct.** ease-out starts fast and slows down, feeling natural for things coming to rest.

### Q7. [Medium] How do you transition multiple properties with different durations?

**Answer:** B

**B is correct.** Use a comma to separate multiple property/duration pairs.

### Q8. [Medium] Why should the transition be on the BASE state, not :hover?

**Answer:** B

**B is correct.** A transition on the base state applies to any change to that property. If it is only on :hover, the hover-out is instant.

### Q9. [Medium] Which is BEST for animating show/hide effects?

**Answer:** B

**B is correct.** `opacity` handles the fade and `visibility` removes the element from pointer events and accessibility after fading.

### Q10. [Medium] What does `cursor: pointer` do?

**Answer:** B

**B is correct.** It changes the cursor to the hand pointer, visually indicating the element is clickable.

### Q11. [Medium] What unit cannot be used for transition-duration?

**Answer:** C

**C is correct.** Duration is time, not distance. Use seconds or milliseconds.

### Q12. [Hard] Why is animating `transform` and `opacity` the most performant?

**Answer:** B

**B is correct.** Modern browsers handle transform and opacity on the GPU without triggering layout or paint, enabling smooth 60fps animations.

### Q13. [Hard] What does `transition: all 0.3s ease 0.5s` mean?

**Answer:** A

**A is correct.** In the shorthand, the first time is duration (0.3s) and the second is delay (0.5s).

### Q14. [Hard] What is `cubic-bezier(0.68, -0.55, 0.27, 1.55)`?

**Answer:** B

**B is correct.** cubic-bezier() takes four control points defining a custom curve. Values outside 0-1 (like -0.55 and 1.55) create overshoot effects.

### Q15. [Easy] Which property animates the movement, scale, or rotation of an element most efficiently?

**Answer:** B

**B is correct.** transform uses the GPU and is the most performant way to move, scale, or rotate elements.

### Q16. [Medium] How can you animate an expandable panel from 0 to its content height?

**Answer:** B

**B is correct.** max-height can be transitioned and will cap the height at the content's natural size when the transition is complete.

### Q17. [Medium] What is the purpose of `will-change`?

**Answer:** B

**B is correct.** will-change tells the browser to prepare optimizations (like placing the element on its own GPU layer). Use sparingly.

### Q18. [Hard] What does `:focus` target?

**Answer:** B

**B is correct.** :focus matches elements with keyboard focus (e.g., tabbed to). Always style :focus alongside :hover for accessibility.

### Q19. [Medium] Which timing function creates a constant speed throughout the animation?

**Answer:** B

**B is correct.** linear has no acceleration curve — it is the same speed from start to finish.

### Q20. [Hard] Why should you avoid transitioning width or left/top?

**Answer:** B

**B is correct.** Properties like width, left, top, margin trigger layout work every frame. transform runs on the GPU and avoids layout, making it much smoother.

## Coding Challenges

### Challenge 1. Color-Change Button

**Difficulty:** Easy

Create a button that smoothly transitions from purple to pink on hover, with a 0.4 second duration and ease-in-out timing.

**Constraints:**

- Use transition shorthand. Put the transition on the BASE state.

**Sample input:**

```
Hover over button
```

**Sample output:**

```
Button smoothly fades from purple to pink and back.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #0f172a; margin: 0; font-family: Arial, sans-serif; }
  .btn { padding: 14px 32px; background: #a855f7; color: white; border: none; border-radius: 8px; font-size: 16px; cursor: pointer; transition: background 0.4s ease-in-out; }
  .btn:hover { background: #ec4899; }
</style>
</head>
<body>
  <button class="btn">Hover Me, Aarav</button>
</body>
</html>
```

### Challenge 2. Lift Card on Hover

**Difficulty:** Easy

Create a card that lifts up 8px and casts a bigger shadow when hovered. Use a 0.3 second transition.

**Constraints:**

- Use transform: translateY and box-shadow. Transition both.

**Sample input:**

```
Hover over card
```

**Sample output:**

```
Card moves up and shadow grows smoothly.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #f8fafc; margin: 0; font-family: Arial, sans-serif; }
  .card { width: 260px; padding: 30px; background: white; border-radius: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); transition: transform 0.3s, box-shadow 0.3s; cursor: pointer; }
  .card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
  .card h3 { color: #a855f7; margin: 0 0 8px 0; }
  .card p { color: #64748b; margin: 0; font-size: 14px; }
</style>
</head>
<body>
  <div class="card"><h3>Priya's Project</h3><p>A web app built with HTML, CSS, and a whole lot of curiosity.</p></div>
</body>
</html>
```

### Challenge 3. Image Zoom Inside Frame

**Difficulty:** Medium

Create an image inside a frame. On hover, the image should zoom in (scale to 1.15) but stay inside the frame boundaries. Use overflow: hidden.

**Constraints:**

- Use overflow: hidden on the frame. Transition transform on the image.

**Sample input:**

```
Hover over frame
```

**Sample output:**

```
Image scales up smoothly while staying clipped to the frame.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #0f172a; margin: 0; }
  .frame { width: 300px; height: 220px; border-radius: 16px; overflow: hidden; cursor: pointer; box-shadow: 0 12px 28px rgba(0,0,0,0.4); }
  .img { width: 100%; height: 100%; background: linear-gradient(135deg, #a855f7, #ec4899, #f59e0b); transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 24px; font-family: Arial, sans-serif; }
  .frame:hover .img { transform: scale(1.15); }
</style>
</head>
<body>
  <div class="frame">
    <div class="img">Rohan's Artwork</div>
  </div>
</body>
</html>
```

### Challenge 4. Sliding Underline Nav Link

**Difficulty:** Medium

Create a navigation link with a sliding underline effect. The underline should start with 0 width and slide in to 100% on hover. Use a ::after pseudo-element.

**Constraints:**

- Use ::after. Transition the width property.

**Sample input:**

```
Hover over link
```

**Sample output:**

```
A colored underline slides in from left to right.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #0f172a; margin: 0; font-family: Arial, sans-serif; }
  .link { color: white; text-decoration: none; font-size: 24px; position: relative; padding: 6px 0; }
  .link::after { content: ''; position: absolute; left: 0; bottom: 0; width: 0; height: 3px; background: linear-gradient(90deg, #a855f7, #06b6d4); transition: width 0.4s ease; }
  .link:hover::after { width: 100%; }
</style>
</head>
<body>
  <a href="#" class="link">Ishita's Portfolio</a>
</body>
</html>
```

### Challenge 5. Show/Hide Modal Correctly

**Difficulty:** Hard

Build a modal that opens and closes smoothly. It should NOT use display: none. Use opacity + visibility. Include a button to open and a close button inside the modal.

**Constraints:**

- No display transitions. Use opacity + visibility. Add a scale transform for entry.

**Sample input:**

```
Click open, then close
```

**Sample output:**

```
Modal fades in and scales up smoothly, then fades out.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: Arial, sans-serif; padding: 40px; background: #f8fafc; }
  .open-btn { padding: 12px 24px; background: #a855f7; color: white; border: none; border-radius: 8px; cursor: pointer; }
  .overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; opacity: 0; visibility: hidden; transition: opacity 0.3s, visibility 0.3s; }
  .overlay.open { opacity: 1; visibility: visible; }
  .modal { background: white; padding: 30px; border-radius: 14px; max-width: 400px; transform: scale(0.85); transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1); }
  .overlay.open .modal { transform: scale(1); }
  .modal h2 { color: #a855f7; margin-top: 0; }
  .close-btn { padding: 10px 20px; background: #e5e7eb; border: none; border-radius: 6px; cursor: pointer; }
</style>
</head>
<body>
  <button class="open-btn" id="openBtn">Open Modal</button>
  <div class="overlay" id="overlay">
    <div class="modal">
      <h2>Hi Vivaan</h2>
      <p>This modal fades and scales smoothly.</p>
      <button class="close-btn" id="closeBtn">Close</button>
    </div>
  </div>
  <script>
    const overlay = document.getElementById('overlay');
    document.getElementById('openBtn').addEventListener('click', () => overlay.classList.add('open'));
    document.getElementById('closeBtn').addEventListener('click', () => overlay.classList.remove('open'));
  </script>
</body>
</html>
```

### Challenge 6. Interactive Social Icon Bar

**Difficulty:** Hard

Create a row of 4 social icons. On hover, each icon should lift up, rotate slightly, change to its brand color, and cast a glowing shadow. Use a cubic-bezier with overshoot for bounce.

**Constraints:**

- Use cubic-bezier for the timing. Transition transform, background, color, and box-shadow.

**Sample input:**

```
Hover each icon
```

**Sample output:**

```
Icons lift and bounce with a colored shadow matching their brand.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #0f172a; margin: 0; font-family: Arial, sans-serif; }
  .bar { display: flex; gap: 16px; }
  .icon { width: 60px; height: 60px; background: #1e293b; color: #cbd5e1; font-size: 22px; font-weight: bold; display: flex; align-items: center; justify-content: center; text-decoration: none; border-radius: 12px; transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
  .icon:hover { transform: translateY(-8px) rotate(-5deg); color: white; }
  .fb:hover { background: #1877f2; box-shadow: 0 14px 28px rgba(24, 119, 242, 0.4); }
  .ig:hover { background: linear-gradient(135deg, #833ab4, #fd1d1d); box-shadow: 0 14px 28px rgba(253, 29, 29, 0.4); }
  .yt:hover { background: #ff0000; box-shadow: 0 14px 28px rgba(255, 0, 0, 0.4); }
  .gh:hover { background: #24292e; box-shadow: 0 14px 28px rgba(36, 41, 46, 0.6); }
</style>
</head>
<body>
  <div class="bar">
    <a class="icon fb" href="#">F</a>
    <a class="icon ig" href="#">I</a>
    <a class="icon yt" href="#">Y</a>
    <a class="icon gh" href="#">G</a>
  </div>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/transitions-and-hover-effects/*
