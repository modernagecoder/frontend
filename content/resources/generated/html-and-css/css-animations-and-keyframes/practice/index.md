---
title: "Practice: CSS Animations with Keyframes"
description: "60 practice problems for CSS Animations with Keyframes in HTML and CSS"
slug: css-animations-and-keyframes-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/css-animations-and-keyframes/practice/
category: "HTML and CSS"
---
# Practice: CSS Animations with Keyframes

**Total questions:** 60

## Topic-Specific Questions

### Q1. [Easy] What is the difference between a CSS transition and a CSS animation?

*Hint:* Think about how many states each has.

**Answer:** A transition animates between TWO states (a starting and ending value). An animation uses `@keyframes` to define MANY states and can run automatically, loop, and play without a trigger.

Use transitions for simple state changes (hover, focus). Use animations for multi-step movement, loading effects, or anything that should run on its own.

### Q2. [Easy] Which rule defines an animation in CSS?

*Hint:* Starts with @.

**Answer:** `@keyframes`

`@keyframes animationName { ... }` defines the steps of the animation. You then reference it with `animation-name: animationName`.

### Q3. [Easy] What does this do?

```
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
.icon { animation: spin 2s linear infinite; }
```

*Hint:* Classic spinner.

**Answer:** The icon rotates continuously, making a full 360-degree turn every 2 seconds, forever.

`linear` gives a constant speed, `2s` is the duration, `infinite` makes it loop forever. This is the classic loading spinner formula.

### Q4. [Easy] How do you make an animation loop forever?

*Hint:* Iteration count.

**Answer:** `animation-iteration-count: infinite;` or in shorthand: `animation: spin 1s infinite;`

The default iteration count is 1 (plays once). `infinite` loops forever.

### Q5. [Easy] What do `from` and `to` mean in @keyframes?

*Hint:* They are shorthand for percentages.

**Answer:** `from` is equivalent to `0%` (start) and `to` is equivalent to `100%` (end). They are shorthand for two-step animations.

For multi-step animations, use percentages: `0%`, `25%`, `50%`, `75%`, `100%`, etc.

### Q6. [Medium] What does `animation-direction: alternate` do?

*Hint:* Plays forward then backward.

**Answer:** The animation plays forward (0% to 100%), then backward (100% to 0%), then forward again, alternating on every iteration.

Alternate is great for pulse effects and back-and-forth motions. You only define half the animation, and alternate plays it both ways.

### Q7. [Medium] What does `animation-fill-mode: forwards` do?

*Hint:* After the animation ends.

**Answer:** After the animation finishes, the element keeps the styles from the final keyframe instead of reverting to its original CSS.

Without forwards, an element that slides in and stops at opacity 1 would suddenly snap back to opacity 0. forwards preserves the end state.

### Q8. [Medium] What is the order of values in the animation shorthand?

*Hint:* Name first, then timing values.

**Answer:** `animation: name duration timing-function delay iteration-count direction fill-mode;`

Minimum required: name and duration. Everything else is optional. You can omit values in the middle, but order matters.

### Q9. [Medium] What does this animation do?

```
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.1); }
}
.btn { animation: pulse 1s infinite; }
```

*Hint:* Grows then shrinks.

**Answer:** The button smoothly grows to 110% of its size at the midpoint and shrinks back to 100% at the end, looping forever.

At 0% and 100%, scale is 1. At 50%, scale is 1.1. The browser smoothly interpolates between these, creating a gentle pulse.

### Q10. [Medium] How do you apply multiple animations to a single element?

*Hint:* Comma-separated list.

**Answer:** `animation: fadeIn 1s, bounce 2s infinite 1s;`

Separate each animation with a comma. Each runs independently and can have its own duration, delay, and iteration count.

### Q11. [Medium] What does `animation-play-state: paused` do?

*Hint:* Like a pause button.

**Answer:** It freezes the animation at its current frame. Change to `running` to resume from the same point.

Useful for JavaScript-driven controls: you can pause an animation on user interaction (like hovering to stop a carousel) and resume when ready.

### Q12. [Hard] Why is animating `transform` smoother than animating `left`?

*Hint:* GPU vs CPU.

**Answer:** `transform` is GPU-accelerated and does not trigger layout recalculation or repaint. `left` changes the element's position in the layout tree, causing the browser to recalculate positions every frame.

Rule: use `transform` (and `opacity`) for animations whenever possible. These stay on the GPU for buttery-smooth 60fps.

### Q13. [Hard] What is the difference between `animation-fill-mode: forwards` and `backwards`?

*Hint:* Forwards = after. Backwards = during delay.

**Answer:** `forwards` keeps the FINAL keyframe state after the animation ends. `backwards` applies the FIRST keyframe state during the animation's delay period (before it starts).

`both` combines the two — the first frame is visible during delay AND the last frame is kept after the animation ends.

### Q14. [Hard] What does `animation: spin 1s 2s infinite` mean?

*Hint:* Identify which time is duration and which is delay.

**Answer:** The animation is named 'spin', runs for 1 second, starts 2 seconds after the element is rendered, and loops infinitely.

The first time value is duration, the second is delay. Iteration count follows.

### Q15. [Hard] How do you stagger animations on multiple child elements?

*Hint:* :nth-child with different delays.

**Answer:** Use `:nth-child(N)` selectors with different `animation-delay` values. Example: `.card:nth-child(1) { animation-delay: 0.1s; } .card:nth-child(2) { animation-delay: 0.2s; }`

This creates a wave or cascade effect where each element starts its animation slightly after the previous one.

## Mixed Questions

### Q1. [Easy] Which value makes an animation run forever?

*Hint:* One word.

**Answer:** `infinite` (used with animation-iteration-count)

Example: `animation-iteration-count: infinite;` or in shorthand: `animation: spin 1s infinite;`

### Q2. [Easy] Can an @keyframes rule have more than two steps?

*Hint:* Think about percentages.

**Answer:** Yes. You can define any number of percentage-based steps: 0%, 10%, 25%, 50%, 100%, etc.

Example: `@keyframes dance { 0% { ... } 25% { ... } 50% { ... } 75% { ... } 100% { ... } }`

### Q3. [Medium] When should you use @keyframes instead of a transition?

*Hint:* Complexity and autonomy.

**Answer:** Use @keyframes when you need multi-step animations, looping/infinite motion, or animations that run automatically without a trigger (like loading spinners, pulses, or entrance effects on page load).

Use transitions for simple 2-state changes (hover, focus, class toggle). Use animations for anything more complex or autonomous.

### Q4. [Medium] What happens if you apply `animation: bounce 1s` but never define `@keyframes bounce`?

*Hint:* No error, but no effect.

**Answer:** Nothing happens. The browser silently ignores the animation because the keyframes are not defined. There is no error message.

A common bug is typos in the animation name. Double-check that the @keyframes name EXACTLY matches the animation-name value.

### Q5. [Medium] What does `steps(10, end)` do as a timing function?

*Hint:* Discrete steps, not smooth.

**Answer:** The animation advances in 10 discrete jumps instead of smoothly interpolating. The 'end' means the change happens at the end of each step.

Used for effects like typewriter text, sprite sheet animations, and clock tick marks where you want distinct steps rather than smooth motion.

### Q6. [Medium] What timing function is most natural for a loading spinner?

*Hint:* Constant speed.

**Answer:** `linear`

A spinner should rotate at a constant speed. Any easing would make the spinner speed up and slow down, which looks unnatural for a circular loading indicator.

### Q7. [Hard] What is the difference between `alternate` and `reverse`?

*Hint:* Alternate loops forward-backward; reverse always plays backward.

**Answer:** `reverse` plays the animation backward on every iteration (100% to 0%). `alternate` plays forward (0-100%) on odd iterations and backward (100-0%) on even iterations.

alternate is for back-and-forth motions; reverse is for animations that should always play in reverse.

### Q8. [Medium] Why is `animation-fill-mode: forwards` often essential?

*Hint:* End state.

**Answer:** Without forwards, the element snaps back to its original CSS after the animation ends, which often looks wrong for entrance animations (the element would disappear after sliding in).

Any time you animate an element to a final state and want it to STAY there, use `forwards`.

### Q9. [Hard] Can you animate CSS custom properties (variables)?

*Hint:* Yes, but they need special declaration.

**Answer:** Yes, but you must register the property with `@property` first so the browser knows its type. Otherwise the browser treats the variable as a string and cannot interpolate.

Example: `@property --hue { syntax: ''; inherits: false; initial-value: 0; }`. Then you can animate the variable smoothly.

### Q10. [Hard] What does `animation-iteration-count: 2.5` mean?

*Hint:* Fractional iterations.

**Answer:** The animation plays two and a half times — two full cycles followed by halfway through a third.

Iteration count can be a decimal. Useful for animations that should end at a specific intermediate state.

### Q11. [Medium] How do you stop animations for users who have motion sickness?

*Hint:* prefers-reduced-motion.

**Answer:** Use `@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }`

This respects the user's OS-level accessibility preference for reduced motion. Always include this in production websites.

### Q12. [Easy] Which property controls how fast an animation plays?

*Hint:* Time.

**Answer:** `animation-duration`

Duration sets the length of one iteration of the animation. Specified in seconds (1s) or milliseconds (1000ms).

### Q13. [Medium] What does `0%, 100% { opacity: 1; } 50% { opacity: 0; }` create?

*Hint:* Fade in/out at the middle.

**Answer:** A blinking effect — the element is visible at the start and end, and invisible in the middle. Paired with `infinite`, it creates continuous blinking.

Combining 0% and 100% into one rule is a common shortcut when the start and end states are identical.

### Q14. [Hard] Why can you not animate `background-image` with a smooth transition between two images?

*Hint:* Discrete vs interpolable.

**Answer:** background-image values are discrete — the browser cannot interpolate between two different image URLs. It swaps instantly, not smoothly.

Workaround: stack two images on top of each other with absolute positioning and animate their opacity for a cross-fade effect.

### Q15. [Medium] What is `@keyframes` short for?

*Hint:* Animation key moments.

**Answer:** Keyframes — key moments (frames) in the animation where you define specific styles. The browser interpolates between them.

The term 'keyframe' comes from traditional animation, where an animator draws the important poses and assistants fill in the frames between.

### Q16. [Easy] What is `animation-delay`?

*Hint:* Wait before starting.

**Answer:** The time to wait before the animation starts playing after the element is rendered. Default is 0s.

Useful for staggering multiple elements: give each a different delay so they animate one after another.

### Q17. [Easy] What does `animation: spin 1s linear infinite` do?

*Hint:* Classic spinner.

**Answer:** Runs the 'spin' animation for 1 second with constant speed, looping forever.

This is the standard loading spinner formula. linear ensures constant rotation speed; infinite loops forever.

### Q18. [Medium] Where should you declare @keyframes rules in your stylesheet?

*Hint:* Order does not matter much.

**Answer:** Anywhere in the stylesheet, as long as they exist BEFORE the browser tries to apply them. By convention, many developers put them near the bottom or in a dedicated section.

Unlike JavaScript, CSS order for @keyframes does not affect whether they work — they are globally scoped within the stylesheet. But grouping them together improves readability.

### Q19. [Hard] What happens if two keyframes at the same percentage conflict?

```
@keyframes test {
  50% { background: red; }
  50% { background: blue; }
  100% { background: green; }
}
```

*Hint:* Last one wins.

**Answer:** The last definition wins. At 50%, background is blue (the later rule overrides the earlier one).

Just like regular CSS rules, later declarations override earlier ones when specificity is equal.

## Multiple Choice Questions

### Q1. [Easy] Which CSS rule defines an animation?

**Answer:** B

**B is correct.** `@keyframes name { ... }` defines the steps of an animation.

### Q2. [Easy] How do you make an animation run forever?

**Answer:** B

**B is correct.** `infinite` is the keyword for endless iteration.

### Q3. [Easy] In @keyframes, what does `from` mean?

**Answer:** B

**B is correct.** `from` is shorthand for 0% and `to` is shorthand for 100%.

### Q4. [Easy] What is the correct shorthand order?

**Answer:** B

**B is correct.** The order is: name, duration, timing-function, delay, iteration-count, direction, fill-mode. Only name and duration are required.

### Q5. [Easy] Which timing function is best for a loading spinner?

**Answer:** B

**B is correct.** Spinners should rotate at a constant speed, which is what `linear` provides.

### Q6. [Medium] What does `animation-direction: alternate` do?

**Answer:** B

**B is correct.** Alternate plays 0-100% on odd iterations and 100-0% on even iterations, creating smooth back-and-forth motion.

### Q7. [Medium] What does `animation-fill-mode: forwards` do?

**Answer:** B

**B is correct.** Without forwards, the element snaps back to its original styles after the animation. With forwards, it stays in the final state.

### Q8. [Medium] Which animation property can JavaScript change to pause an animation?

**Answer:** B

**B is correct.** `animation-play-state: paused` freezes the animation. Setting it back to `running` resumes it.

### Q9. [Medium] How do you apply TWO animations to an element?

**Answer:** B

**B is correct.** Separate multiple animations with commas. Each runs independently.

### Q10. [Medium] Which property can you animate most efficiently?

**Answer:** C

**C is correct.** `transform` (and `opacity`) run on the GPU without triggering layout, making them the most performant.

### Q11. [Medium] What does this define?
`@keyframes fade { from { opacity: 0; } to { opacity: 1; } }`

**Answer:** B

**B is correct.** The opacity goes from 0 (invisible) to 1 (fully visible), creating a fade-in effect.

### Q12. [Hard] Why is `animation: spin 1s forwards` NOT useful?

**Answer:** B

**B is correct.** `forwards` preserves the final keyframe state after the animation ends. For a looping animation, there is no 'end', so forwards has no effect.

### Q13. [Medium] What creates a typewriter effect?

**Answer:** B

**B is correct.** `steps(N, end)` advances in discrete jumps, making characters appear one at a time instead of smoothly growing.

### Q14. [Hard] What happens if you apply an animation whose @keyframes name has a typo?

**Answer:** B

**B is correct.** Typos in animation names silently fail. Always double-check the @keyframes name matches the animation-name value exactly.

### Q15. [Medium] Which creates a stagger effect where multiple elements animate one after another?

**Answer:** B

**B is correct.** Apply the same animation to multiple elements with different `animation-delay` values (often using :nth-child) to create a cascade or wave.

### Q16. [Hard] What does `prefers-reduced-motion: reduce` detect?

**Answer:** B

**B is correct.** It detects if the user has asked their OS to reduce motion for accessibility. Use it to disable or simplify animations.

### Q17. [Easy] Can @keyframes contain more than two steps?

**Answer:** B

**B is correct.** You can define as many percentage steps as you want: 0%, 10%, 25%, 50%, 75%, 100%, or any custom percentages.

### Q18. [Medium] What is the minimum valid shorthand for applying an animation?

**Answer:** B

**B is correct.** At minimum you need the name and duration. Everything else has defaults.

### Q19. [Hard] Which property's value CANNOT be smoothly animated between different values?

**Answer:** C

**C is correct.** display is discrete with no intermediate values. It cannot be smoothly animated in classic CSS animations.

### Q20. [Medium] Why might `animation-delay: 2s` be useful?

**Answer:** B

**B is correct.** Delay postpones the start of the animation, which is how you stagger multiple animations into a sequence.

## Coding Challenges

### Challenge 1. Rotating Loading Spinner

**Difficulty:** Easy

Create a circular loading spinner that rotates continuously. Use a border with one side colored to show the spin direction. Duration 1 second, linear, infinite.

**Constraints:**

- Use @keyframes and transform: rotate. Must loop infinitely.

**Sample input:**

```
Open the page
```

**Sample output:**

```
A spinning circle.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #0f172a; margin: 0; }
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  .spinner { width: 60px; height: 60px; border: 6px solid #1e293b; border-top-color: #a855f7; border-radius: 50%; animation: spin 1s linear infinite; }
</style>
</head>
<body>
  <div class="spinner"></div>
</body>
</html>
```

### Challenge 2. Pulsing Button

**Difficulty:** Easy

Create a button that gently pulses (scales from 1 to 1.08 and back) continuously to draw attention. Use `alternate` to avoid defining both forward and backward steps.

**Constraints:**

- Use @keyframes with only half the animation. Use animation-direction: alternate.

**Sample input:**

```
None
```

**Sample output:**

```
A button that grows and shrinks slowly in a loop.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #0f172a; margin: 0; font-family: Arial, sans-serif; }
  @keyframes pulse { from { transform: scale(1); } to { transform: scale(1.08); } }
  .btn { padding: 16px 36px; font-size: 18px; background: #a855f7; color: white; border: none; border-radius: 10px; cursor: pointer; animation: pulse 1s ease-in-out infinite alternate; }
</style>
</head>
<body>
  <button class="btn">Click Me, Aarav!</button>
</body>
</html>
```

### Challenge 3. Fade-In on Page Load

**Difficulty:** Medium

Make a heading and paragraph fade in and slide up when the page loads. The heading should animate first, followed by the paragraph 0.3 seconds later. Both should stay visible after the animation ends.

**Constraints:**

- Use @keyframes with opacity and translateY. Use animation-delay. Use fill-mode: forwards.

**Sample input:**

```
Load the page
```

**Sample output:**

```
Heading fades in from below, then paragraph fades in.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { display: flex; justify-content: center; align-items: center; flex-direction: column; height: 100vh; background: #0f172a; color: white; font-family: Arial, sans-serif; margin: 0; }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  h1, p { opacity: 0; animation: slideUp 0.8s ease-out forwards; text-align: center; }
  h1 { color: #a855f7; font-size: 42px; }
  p { color: #cbd5e1; max-width: 400px; animation-delay: 0.3s; }
</style>
</head>
<body>
  <h1>Welcome Ishita</h1>
  <p>This heading and paragraph fade in from below when the page loads.</p>
</body>
</html>
```

### Challenge 4. Bouncing Ball

**Difficulty:** Medium

Create a ball that bounces up and down continuously. The ball should rise 200px, pause briefly at the top, and fall back. Use `cubic-bezier` for a natural gravity-like feel.

**Constraints:**

- Use @keyframes with 0%, 50%, 100% steps. Use transform: translateY. Use cubic-bezier.

**Sample input:**

```
None
```

**Sample output:**

```
A ball bouncing forever.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { display: flex; justify-content: center; align-items: flex-end; height: 100vh; background: linear-gradient(to bottom, #0f172a, #1e293b); margin: 0; padding-bottom: 80px; }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-200px); }
  }
  .ball { width: 70px; height: 70px; border-radius: 50%; background: radial-gradient(circle at 30% 30%, #fef3c7, #f59e0b, #b45309); box-shadow: 0 6px 14px rgba(245, 158, 11, 0.5); animation: bounce 1.3s cubic-bezier(0.5, 0, 0.5, 1) infinite; }
</style>
</head>
<body>
  <div class="ball"></div>
</body>
</html>
```

### Challenge 5. Typing Text Effect

**Difficulty:** Hard

Create a typewriter effect where text appears character by character. Include a blinking cursor. Use `steps()` timing and `ch` units for width.

**Constraints:**

- Use two @keyframes: one for typing (width), one for blink (border). Use steps() timing.

**Sample input:**

```
None
```

**Sample output:**

```
Text types out with a blinking cursor.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #000; margin: 0; font-family: 'Courier New', monospace; color: #10b981; font-size: 24px; }
  .typing { overflow: hidden; white-space: nowrap; border-right: 3px solid #a855f7; width: 0; animation: typing 2.5s steps(22, end) forwards, blink 0.7s step-end infinite; }
  @keyframes typing { from { width: 0; } to { width: 22ch; } }
  @keyframes blink {
    from, to { border-color: transparent; }
    50%      { border-color: #a855f7; }
  }
</style>
</head>
<body>
  <div class="typing">Hi, I am Priya the dev</div>
</body>
</html>
```

### Challenge 6. Staggered Card Grid Entrance

**Difficulty:** Hard

Create a grid of 5 cards that slide up and fade in one after another when the page loads. Each card should start 0.15s after the previous. Use @keyframes, animation-delay, and :nth-child.

**Constraints:**

- Single @keyframes for all cards. Use :nth-child with different animation-delay values. Use fill-mode: forwards.

**Sample input:**

```
Load the page
```

**Sample output:**

```
Cards appear in a wave, each one after the previous.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { background: #0f172a; font-family: Arial, sans-serif; padding: 40px 20px; margin: 0; }
  h1 { color: #a855f7; text-align: center; margin-bottom: 24px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; max-width: 900px; margin: 0 auto; }
  .card { padding: 26px; border-radius: 14px; color: white; font-weight: bold; opacity: 0; transform: translateY(40px); animation: slideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
  .card:nth-child(1) { background: linear-gradient(135deg, #a855f7, #ec4899); animation-delay: 0.1s; }
  .card:nth-child(2) { background: linear-gradient(135deg, #06b6d4, #0ea5e9); animation-delay: 0.25s; }
  .card:nth-child(3) { background: linear-gradient(135deg, #f59e0b, #ef4444); animation-delay: 0.4s; }
  .card:nth-child(4) { background: linear-gradient(135deg, #10b981, #06b6d4); animation-delay: 0.55s; }
  .card:nth-child(5) { background: linear-gradient(135deg, #8b5cf6, #3b82f6); animation-delay: 0.7s; }
  @keyframes slideUp { to { opacity: 1; transform: translateY(0); } }
</style>
</head>
<body>
  <h1>Our Team</h1>
  <div class="grid">
    <div class="card">Aarav</div>
    <div class="card">Priya</div>
    <div class="card">Rohan</div>
    <div class="card">Ishita</div>
    <div class="card">Vivaan</div>
  </div>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/css-animations-and-keyframes/*
