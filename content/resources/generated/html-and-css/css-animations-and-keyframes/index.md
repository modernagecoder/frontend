---
title: "CSS Animations and Keyframes - @keyframes, animation-name, spinners, bounce, fade | Modern Age Coders"
description: "Master CSS @keyframes animations. Learn animation-name, duration, iteration-count, direction, fill-mode, play-state, and build loading spinners, pulse effects, bouncing balls, typing text, and shake animations. 60+ practice questions."
slug: css-animations-and-keyframes
canonical: https://learn.modernagecoders.com/resources/html-and-css/css-animations-and-keyframes/
category: "HTML and CSS"
keywords: ["css animations tutorial", "keyframes css", "animation-name", "animation-duration", "loading spinner css", "bounce animation", "pulse animation", "css typing effect", "infinite animation", "fill-mode forwards"]
---
# CSS Animations with Keyframes

**Difficulty:** Advanced  
**Reading time:** 45 min  
**Chapter:** 19  
**Practice questions:** 60

## What Are CSS Animations?

While transitions animate between two states (default and hover), **CSS animations** let you define multi-step animations that can run automatically, loop forever, and move through any number of key points. They are more powerful than transitions and perfect for things like loading spinners, pulse effects, and continuous motion.

Animations have two parts:

1. **@keyframes** — defines the animation's steps (what happens at 0%, 50%, 100%, etc.)
2. **animation properties** — applied to an element to actually play the animation

```
@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-30px); }
  100% { transform: translateY(0); }
}

.ball {
  animation: bounce 1s infinite;
}
```

That is it. The ball now bounces forever, no JavaScript required.

## Why Learn CSS Animations?

### 1. Modern Web Is Alive

Loading spinners, animated logos, pulsing buttons, falling snowflakes, marquee tickers, typing text, shimmer effects — every one of these is a CSS animation. If you want to build impressive, modern websites, you need keyframe animations.

### 2. They Run on the GPU

Like transitions, CSS animations are handled by the browser's rendering engine. When you animate transform or opacity, the browser uses the GPU to achieve smooth 60fps motion with virtually zero CPU cost. JavaScript animations cannot match this performance for simple visual effects.

### 3. They Run Automatically

Unlike transitions, animations do not need a trigger like :hover. You can start them immediately on page load, loop them forever, or even pause and play them from JavaScript. This makes them perfect for ambient effects and loading indicators.

### 4. More Control Than Transitions

Transitions have just two states (before and after). Animations can have as many keyframes as you want, letting you create complex motion paths, multi-color pulses, choreographed sequences, and more. If you can imagine it moving, @keyframes can probably animate it.

## Detailed Explanation

### 1. Defining Keyframes

The `@keyframes` rule defines a named sequence of style changes. You can use `from`/`to` (2 steps) or percentages (any number of steps):

```
/* Two-step animation */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Multi-step animation */
@keyframes wiggle {
  0%   { transform: rotate(0); }
  25%  { transform: rotate(5deg); }
  50%  { transform: rotate(-5deg); }
  75%  { transform: rotate(5deg); }
  100% { transform: rotate(0); }
}
```

### 2. Applying the Animation

Once the keyframes are defined, apply them to an element:

```
.box {
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-delay: 0.5s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
}
```

### 3. The Shorthand (Always Use This)

```
/* Order: name duration timing-function delay iteration-count direction fill-mode */
.box {
  animation: fadeIn 1s ease-out 0.5s 1 normal forwards;
}

/* Minimal: just name and duration */
.spinner {
  animation: spin 1s linear infinite;
}
```

### 4. animation-iteration-count

How many times to play the animation:

```
animation-iteration-count: 1;        /* play once (default) */
animation-iteration-count: 3;        /* play three times */
animation-iteration-count: infinite; /* loop forever */
animation-iteration-count: 2.5;      /* two and a half times */
```

### 5. animation-direction

Controls the direction of playback:

```
animation-direction: normal;            /* 0% to 100% (default) */
animation-direction: reverse;           /* 100% to 0% */
animation-direction: alternate;         /* 0-100, then 100-0, repeat */
animation-direction: alternate-reverse; /* 100-0, then 0-100, repeat */
```

**alternate** is incredibly useful for pulses and back-and-forth motions — you only define half the animation, and alternate plays it forward and backward automatically.

### 6. animation-fill-mode (The Confusing One)

Controls what the element looks like BEFORE and AFTER the animation runs:

```
animation-fill-mode: none;      /* default — element returns to original styles */
animation-fill-mode: forwards;  /* element keeps the final keyframe's styles */
animation-fill-mode: backwards; /* element uses the first keyframe's styles during delay */
animation-fill-mode: both;      /* both forwards and backwards */
```

**forwards** is the most useful: it makes the element stay in the final state after the animation finishes. Without it, the element snaps back to its original styles when the animation ends.

### 7. Loading Spinner Example

```
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.spinner {
  width: 50px; height: 50px;
  border: 5px solid #e5e7eb;
  border-top-color: #a855f7;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

### 8. Multiple Animations on One Element

You can apply multiple animations simultaneously by comma-separating them:

```
.element {
  animation: fadeIn 1s, bounce 2s infinite 1s;
  /* fadeIn runs once for 1s, then bounce runs forever with 1s delay */
}
```

### 9. Performance Tips

- Animate **transform** and **opacity** whenever possible — they are GPU-accelerated
- Avoid animating width, height, top, left, margin — they trigger layout recalculation
- Use `will-change: transform` for heavy animations to hint the browser
- Set `@media (prefers-reduced-motion: reduce)` to disable animations for users who get motion sickness

## Code Examples

### Loading Spinner

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #0f172a; margin: 0; font-family: Arial, sans-serif; color: white; gap: 40px; }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    .spinner {
      width: 60px;
      height: 60px;
      border: 6px solid #1e293b;
      border-top-color: #a855f7;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    .spinner2 {
      width: 60px;
      height: 60px;
      border: 6px solid #1e293b;
      border-right-color: #06b6d4;
      border-bottom-color: #f59e0b;
      border-radius: 50%;
      animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    }
    .spinner3 {
      width: 60px;
      height: 60px;
      position: relative;
    }
    .spinner3::before, .spinner3::after {
      content: '';
      position: absolute;
      inset: 0;
      border: 6px solid transparent;
      border-top-color: #ec4899;
      border-radius: 50%;
      animation: spin 1.5s linear infinite;
    }
    .spinner3::after {
      border-top-color: #10b981;
      animation-duration: 2s;
      animation-direction: reverse;
    }
  </style>
</head>
<body>
  <div class="spinner"></div>
  <div class="spinner2"></div>
  <div class="spinner3"></div>
</body>
</html>
```

Three spinner variations. The first is the classic one-color top-border spinner. The second has three colors on different sides with a more organic cubic-bezier. The third uses two pseudo-elements spinning in opposite directions with different durations — a dual-ring effect. All powered by a single `@keyframes spin` rule.

**Output:**

```
Three rotating loading spinners with different styles — classic, tri-color, and dual-ring.
```

### Bouncing Ball

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: linear-gradient(to bottom, #0f172a, #1e293b); min-height: 100vh; margin: 0; display: flex; justify-content: center; align-items: flex-end; padding-bottom: 100px; }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-240px); }
    }
    @keyframes squash {
      0%, 100% { transform: scaleX(1) scaleY(1); }
      40% { transform: scaleX(1.2) scaleY(0.7); }
      60% { transform: scaleX(1.2) scaleY(0.7); }
    }
    .ball-wrap {
      animation: bounce 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    }
    .ball {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: radial-gradient(circle at 30% 30%, #fef3c7, #f59e0b, #b45309);
      box-shadow: 0 10px 20px rgba(245, 158, 11, 0.5);
      animation: squash 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    }
    .shadow {
      width: 80px;
      height: 14px;
      background: radial-gradient(ellipse, rgba(0,0,0,0.5), transparent 70%);
      border-radius: 50%;
      margin-top: 10px;
      animation: shadow-pulse 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    }
    @keyframes shadow-pulse {
      0%, 100% { transform: scale(1); opacity: 0.7; }
      50% { transform: scale(0.5); opacity: 0.3; }
    }
  </style>
</head>
<body>
  <div>
    <div class="ball-wrap"><div class="ball"></div></div>
    <div class="shadow"></div>
  </div>
</body>
</html>
```

A realistic bouncing ball with three synchronized animations: (1) the wrapper bounces up and down, (2) the ball itself squashes at the bottom of the bounce (like a real ball compressing), (3) the shadow pulses smaller and lighter as the ball rises. All three use the same duration and timing function to stay in sync.

**Output:**

```
A golden ball bouncing up and down with a subtle squash at impact and a shadow that pulses with the bounce.
```

### Typing Text Effect

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: #0f172a; color: white; font-family: 'Courier New', monospace; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
    .terminal {
      background: #000;
      border: 1px solid #334155;
      border-radius: 10px;
      padding: 30px 40px;
      font-size: 20px;
      box-shadow: 0 20px 60px rgba(168, 85, 247, 0.3);
    }
    .typing {
      overflow: hidden;
      white-space: nowrap;
      border-right: 3px solid #a855f7;
      width: 0;
      animation: typing 3s steps(30, end) forwards,
                 blink 0.8s step-end infinite;
      color: #10b981;
    }
    @keyframes typing {
      from { width: 0; }
      to   { width: 29ch; }
    }
    @keyframes blink {
      from, to { border-color: transparent; }
      50%      { border-color: #a855f7; }
    }
  </style>
</head>
<body>
  <div class="terminal">
    <div class="typing">&gt; Hello, I am Aarav the coder</div>
  </div>
</body>
</html>
```

Classic terminal typing effect built with two animations. The `typing` animation grows the width from 0 to 29ch (character-width units), with `steps(30, end)` creating a stepped effect that looks like characters appearing one at a time. The `blink` animation toggles the cursor border on and off. Both run simultaneously.

**Output:**

```
A terminal window showing text typing out character by character with a blinking cursor.
```

### Pulse and Shake Attention Effects

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: #0f172a; display: flex; gap: 30px; justify-content: center; align-items: center; min-height: 100vh; font-family: Arial, sans-serif; }
    .box {
      width: 140px;
      height: 140px;
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 18px;
    }
    .pulse {
      background: #a855f7;
      animation: pulse 2s ease-in-out infinite;
    }
    .shake {
      background: #ec4899;
      animation: shake 0.6s ease-in-out infinite;
    }
    .glow {
      background: #06b6d4;
      animation: glow 1.8s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.7); }
      50%      { transform: scale(1.08); box-shadow: 0 0 0 30px rgba(168, 85, 247, 0); }
    }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-8px); }
      40%, 80% { transform: translateX(8px); }
    }
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 20px 2px rgba(6, 182, 212, 0.5); }
      50%      { box-shadow: 0 0 40px 10px rgba(6, 182, 212, 1); }
    }
  </style>
</head>
<body>
  <div class="box pulse">PULSE</div>
  <div class="box shake">SHAKE</div>
  <div class="box glow">GLOW</div>
</body>
</html>
```

Three attention-grabbing effects. Pulse combines scale with an expanding shadow ring. Shake uses multiple translateX values at different percentages to create rapid side-to-side motion. Glow animates box-shadow size and intensity. All three are infinite loops that demand attention.

**Output:**

```
Three boxes. One pulses with an expanding ring, one shakes side to side, and one has a glowing shadow that brightens and dims.
```

### Rainbow Text (Color Cycle)

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: #000; display: flex; justify-content: center; align-items: center; min-height: 100vh; font-family: 'Arial Black', sans-serif; margin: 0; }
    h1 {
      font-size: clamp(2.5rem, 10vw, 8rem);
      background: linear-gradient(90deg, #ef4444, #f59e0b, #eab308, #22c55e, #06b6d4, #3b82f6, #8b5cf6, #ec4899, #ef4444);
      background-size: 200% 100%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: rainbow 5s linear infinite;
      text-align: center;
      margin: 0;
      letter-spacing: -2px;
    }
    @keyframes rainbow {
      from { background-position: 0% 0; }
      to   { background-position: 200% 0; }
    }
  </style>
</head>
<body>
  <h1>SkyCoders</h1>
</body>
</html>
```

The heading has a wide horizontal rainbow gradient clipped to its text using `-webkit-background-clip: text`. The animation slides the background position across, creating a continuous rainbow cycle through the letters. No color properties are animated — only the background position shifts.

**Output:**

```
Giant text showing a continuous rainbow color cycle flowing through the letters.
```

### Slide-In Cards on Page Load

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: #0f172a; color: white; font-family: Arial, sans-serif; padding: 60px 20px; margin: 0; }
    .title { text-align: center; color: #a855f7; margin-bottom: 30px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; max-width: 900px; margin: 0 auto; }
    .card {
      padding: 24px;
      border-radius: 14px;
      font-weight: bold;
      opacity: 0;
      transform: translateY(40px);
      animation: slideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
    .card:nth-child(1) { background: linear-gradient(135deg, #a855f7, #ec4899); animation-delay: 0.1s; }
    .card:nth-child(2) { background: linear-gradient(135deg, #06b6d4, #0ea5e9); animation-delay: 0.25s; }
    .card:nth-child(3) { background: linear-gradient(135deg, #f59e0b, #ef4444); animation-delay: 0.4s; }
    .card:nth-child(4) { background: linear-gradient(135deg, #10b981, #06b6d4); animation-delay: 0.55s; }
    .card:nth-child(5) { background: linear-gradient(135deg, #8b5cf6, #3b82f6); animation-delay: 0.7s; }
    .card:nth-child(6) { background: linear-gradient(135deg, #ec4899, #f59e0b); animation-delay: 0.85s; }
    @keyframes slideUp {
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body>
  <h1 class="title">Meet Our Team</h1>
  <div class="grid">
    <div class="card">Aarav</div>
    <div class="card">Priya</div>
    <div class="card">Rohan</div>
    <div class="card">Ishita</div>
    <div class="card">Vivaan</div>
    <div class="card">Anika</div>
  </div>
</body>
</html>
```

Staggered entrance animation. Each card starts invisible and 40px below its final position, then slides up and fades in with `animation-fill-mode: forwards` (so they STAY visible after). Each card has a different `animation-delay` using `:nth-child` selectors, creating a beautiful stagger effect on page load.

**Output:**

```
Six gradient cards that slide up into place one after another when the page loads, creating a wave effect.
```

### Progress Bar with Indeterminate Loading

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: #0f172a; display: flex; justify-content: center; align-items: center; min-height: 100vh; font-family: Arial, sans-serif; color: white; margin: 0; flex-direction: column; gap: 30px; }
    .label { color: #cbd5e1; font-size: 14px; }
    .bar-wrap {
      width: 400px;
      max-width: 90vw;
      height: 8px;
      background: #1e293b;
      border-radius: 4px;
      overflow: hidden;
      position: relative;
    }
    .bar {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 30%;
      background: linear-gradient(90deg, #a855f7, #06b6d4);
      border-radius: 4px;
      animation: slide 1.6s ease-in-out infinite;
    }
    @keyframes slide {
      0%   { left: -30%; }
      100% { left: 100%; }
    }
    .dots {
      display: flex;
      gap: 10px;
      margin-top: 20px;
    }
    .dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #a855f7;
      animation: dot 1.2s ease-in-out infinite;
    }
    .dot:nth-child(2) { animation-delay: 0.15s; background: #06b6d4; }
    .dot:nth-child(3) { animation-delay: 0.3s; background: #f59e0b; }
    @keyframes dot {
      0%, 100% { transform: translateY(0); opacity: 0.5; }
      50%      { transform: translateY(-12px); opacity: 1; }
    }
  </style>
</head>
<body>
  <div>
    <div class="label">Loading your dashboard, Meera...</div>
    <div class="bar-wrap"><div class="bar"></div></div>
    <div class="dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
  </div>
</body>
</html>
```

Two loading indicators. The progress bar slides a colored segment from left to right continuously — the 'indeterminate' loading pattern. Below it, three colored dots bounce in sequence using `animation-delay` to create a wave. Both use infinite loops and are pure CSS.

**Output:**

```
A loading screen with a horizontal gradient bar sliding across and three bouncing dots below.
```

## Common Mistakes

### Forgetting animation-fill-mode: forwards

**Wrong:**

```
@keyframes slideIn {
  from { transform: translateX(-100%); }
  to   { transform: translateX(0); }
}
.card {
  animation: slideIn 1s;
}
/* After animation, card snaps back to its original style — translateX(-100%) if set, or default */
```

When the animation ends, the element reverts to its default CSS, not the final keyframe. If the default was translateX(-100%), the card disappears again.

**Correct:**

```
.card {
  animation: slideIn 1s forwards;
  /* or: animation-fill-mode: forwards; */
}
```

`forwards` tells the element to keep the final keyframe's styles after the animation ends. This is usually what you want for entrance animations.

### Animating Properties That Trigger Layout

**Wrong:**

```
@keyframes moveRight {
  from { left: 0; }
  to   { left: 200px; }
}
.box {
  position: absolute;
  animation: moveRight 1s infinite;
}
/* Jerky on lower-end devices */
```

Animating `left` triggers a layout recalculation every frame, which is slow. On complex pages or weaker devices, the animation can stutter.

**Correct:**

```
@keyframes moveRight {
  from { transform: translateX(0); }
  to   { transform: translateX(200px); }
}
```

Use `transform: translateX()` instead of `left`. Transform runs on the GPU and does not trigger layout or paint work — much smoother.

### Not Defining the Keyframes Before Using Them

**Wrong:**

```
.spinner {
  animation: spin 1s infinite;
}
/* No @keyframes spin defined anywhere */
```

The animation does nothing because the @keyframes rule is missing. The browser will not warn you — it just silently ignores the animation.

**Correct:**

```
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.spinner {
  animation: spin 1s linear infinite;
}
```

Always define the @keyframes rule in your CSS. A typo in the animation name also silently fails, so double-check spelling.

### Using Animation for Simple State Changes

**Wrong:**

```
@keyframes buttonHover {
  from { background: red; }
  to   { background: blue; }
}
.btn:hover {
  animation: buttonHover 0.3s forwards;
}
/* Overkill! */
```

Using @keyframes animation for a simple hover color change is overkill and less flexible. It also fights with hovering out.

**Correct:**

```
.btn {
  background: red;
  transition: background 0.3s;
}
.btn:hover {
  background: blue;
}
```

Use `transition` for simple state changes (hover, focus, class toggle) and reserve `@keyframes animation` for multi-step or looping animations.

## Summary

- `@keyframes animationName { ... }` defines the animation steps using `from/to` or percentages (0%, 25%, 50%, 100%).
- Apply an animation to an element with `animation: name duration timing delay iteration-count direction fill-mode;` (shorthand).
- `animation-iteration-count: infinite` makes the animation loop forever. Useful for spinners, pulses, and ambient effects.
- `animation-direction: alternate` plays the animation forward, then backward, then forward again — perfect for back-and-forth motions like pulses.
- `animation-fill-mode: forwards` keeps the element in its final keyframe state after the animation ends. Without it, the element snaps back to its original styles.
- `animation-delay` lets you stagger multiple elements by applying different delays (often with `:nth-child`) for a wave or cascade effect.
- You can apply multiple animations to one element by comma-separating them: `animation: fadeIn 1s, bounce 2s infinite 1s;`
- For best performance, animate `transform` and `opacity`. These are GPU-accelerated and run at 60fps. Avoid animating width, height, top, left, margin.
- `animation-play-state: paused | running` lets JavaScript pause and resume an animation.
- Respect accessibility: use `@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }` to disable animations for users with motion sensitivity.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/html-and-css/css-animations-and-keyframes/*
*Practice questions: https://learn.modernagecoders.com/resources/html-and-css/css-animations-and-keyframes/practice/*
