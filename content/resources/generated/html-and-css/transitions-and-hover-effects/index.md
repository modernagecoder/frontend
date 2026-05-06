---
title: "CSS Transitions and Hover Effects - transition-property, cubic-bezier, interactive UI | Modern Age Coders"
description: "Master CSS transitions and hover effects. Learn transition-property, duration, timing-function, cubic-bezier, delay, hover effects like scale, shadow lift, image zoom, underline slide, and non-animatable properties. 60+ practice questions."
slug: transitions-and-hover-effects
canonical: https://learn.modernagecoders.com/resources/html-and-css/transitions-and-hover-effects
category: "HTML and CSS"
keywords: ["css transitions", "hover effects css", "transition-property", "transition-duration", "cubic-bezier", "timing function", "ease-in-out", "hover animations", "button hover css", "image zoom hover"]
---
# CSS Transitions and Hover Effects

**Difficulty:** Advanced  
**Reading time:** 38 min  
**Chapter:** 18  
**Practice questions:** 60

## What Are CSS Transitions?

A CSS transition is a smooth change from one style value to another over a specified time. Instead of a button instantly changing from purple to pink when you hover over it, a transition lets it fade smoothly over 300 milliseconds. That smoothness is what makes modern websites feel polished and alive.

Transitions need THREE things:

1. **A starting state** (the default CSS)
2. **An ending state** (triggered by :hover, :focus, a class change, etc.)
3. **A transition rule** telling the browser how to animate between them

```
.button {
  background: #a855f7;
  transition: background 0.3s ease;
}
.button:hover {
  background: #ec4899;
}
```

That is it. Four lines of CSS give you a beautifully smooth color change on hover — no JavaScript required.

## Why Learn Transitions and Hover Effects?

### 1. Modern UI Is Built on Micro-Interactions

Every polished website you love uses hover effects: buttons that lift, cards that scale, images that zoom, underlines that slide in. These tiny animations (called micro-interactions) give users feedback and make interfaces feel responsive and alive.

### 2. Zero JavaScript Required

Transitions are pure CSS. The browser handles everything: smoothness, timing, performance. This means animations run at 60fps without any runtime overhead from JavaScript. Pure CSS animations are ALWAYS faster than JS animations.

### 3. They Make Changes Feel Natural

Instant changes are jarring. When a button suddenly becomes pink, our brain registers 'something glitched'. When it smoothly transitions, our brain registers 'I did that — it responded to me'. Transitions create trust between the user and the interface.

### 4. Essential for Job Portfolios

Any frontend developer job interview will test your ability to create smooth hover effects. It is considered a basic skill for modern web design.

## Detailed Explanation

### 1. The Four Transition Properties

CSS transitions have four sub-properties. Each one controls a different aspect of the animation:

```
.element {
  transition-property: background-color;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
}
```

- **transition-property**: which CSS property to animate (or `all`)
- **transition-duration**: how long the animation takes (seconds or milliseconds)
- **transition-timing-function**: the acceleration curve (ease, linear, etc.)
- **transition-delay**: wait this long before starting

### 2. The Shorthand (Most Common)

In practice, everyone uses the shorthand:

```
.element {
  transition: background-color 0.4s ease-in-out;
  /* property | duration | timing-function | (optional delay) */
}

/* Multiple properties */
.element {
  transition: background 0.3s, color 0.3s, transform 0.5s;
}

/* All animatable properties */
.element {
  transition: all 0.3s ease;
}
```

Using `all` is quick but less precise. Listing specific properties is a small performance improvement and avoids surprising animations.

### 3. Timing Functions (The Most Important Choice)

The timing function controls the acceleration curve of the animation. This is what makes animations feel organic or robotic:

```
transition-timing-function: linear;      /* constant speed */
transition-timing-function: ease;        /* slow-start, fast-middle, slow-end (default) */
transition-timing-function: ease-in;     /* slow start, fast end */
transition-timing-function: ease-out;    /* fast start, slow end (most natural for UI) */
transition-timing-function: ease-in-out; /* slow start AND end */
transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55); /* custom curve */
```

**Rule of thumb**: use `ease-out` for elements appearing or entering (feels natural), `ease-in` for elements leaving, and `ease-in-out` for things that start and end at the same place (toggles).

### 4. Hover Effects (:hover)

The `:hover` pseudo-class applies when the mouse is over the element. Combine with transitions for smooth hover effects:

```
.button {
  background: #a855f7;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

.button:hover {
  background: #ec4899;
  transform: scale(1.05);
}
```

Notice we transition both background and transform, but they can have different durations.

### 5. Creative Hover Effects

**Lift on hover** — classic card effect:

```
.card {
  transition: transform 0.3s, box-shadow 0.3s;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}
```

**Image zoom inside frame**:

```
.frame {
  overflow: hidden;
  border-radius: 12px;
}
.frame img {
  transition: transform 0.5s;
}
.frame:hover img {
  transform: scale(1.1);
}
```

**Underline slide-in**:

```
.link {
  position: relative;
}
.link::after {
  content: '';
  position: absolute;
  left: 0; bottom: -2px;
  width: 0; height: 2px;
  background: currentColor;
  transition: width 0.3s;
}
.link:hover::after {
  width: 100%;
}
```

### 6. cursor: pointer

Always add `cursor: pointer` to interactive elements that are not native buttons/links. It tells users 'this is clickable':

```
.clickable-card {
  cursor: pointer;
}
```

### 7. Properties You CANNOT Transition

Not all CSS properties can be animated. A few important ones that CANNOT:

- `display` (block, none, flex, etc.) — discrete values
- `height: auto` (you need a fixed height or use max-height)
- `font-family`
- `content` (inside pseudo-elements)

For show/hide animations, use `opacity` and `visibility` instead of `display`.

### 8. will-change (Performance Hint)

For complex animations, tell the browser what will animate so it can optimize:

```
.card {
  will-change: transform;
}
```

Use sparingly — overuse hurts performance. Only add will-change to elements with heavy animations.

## Code Examples

### Button Pack - Six Hover Effects

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #0f172a; padding: 40px; display: flex; flex-wrap: wrap; gap: 20px; align-items: flex-start; }
    button { padding: 14px 32px; font-size: 16px; border: none; border-radius: 10px; cursor: pointer; color: white; font-weight: 600; }

    /* 1. Color + scale */
    .btn1 { background: #a855f7; transition: background 0.3s, transform 0.2s; }
    .btn1:hover { background: #ec4899; transform: scale(1.08); }

    /* 2. Shadow lift */
    .btn2 { background: #06b6d4; box-shadow: 0 4px 6px rgba(6, 182, 212, 0.3); transition: transform 0.3s, box-shadow 0.3s; }
    .btn2:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(6, 182, 212, 0.5); }

    /* 3. Fill slide */
    .btn3 { background: transparent; border: 2px solid #f59e0b; color: #f59e0b; position: relative; overflow: hidden; z-index: 1; transition: color 0.4s; }
    .btn3::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: #f59e0b; transition: left 0.4s; z-index: -1; }
    .btn3:hover { color: white; }
    .btn3:hover::before { left: 0; }

    /* 4. Grow border */
    .btn4 { background: #0f172a; border: 2px solid #10b981; transition: box-shadow 0.3s, letter-spacing 0.3s; }
    .btn4:hover { box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.3); letter-spacing: 2px; }

    /* 5. Gradient shift */
    .btn5 { background: linear-gradient(90deg, #a855f7, #ec4899); background-size: 200% 100%; transition: background-position 0.5s; }
    .btn5:hover { background-position: 100% 0; }

    /* 6. 3D push */
    .btn6 { background: #8b5cf6; box-shadow: 0 6px 0 #5b21b6; transition: box-shadow 0.15s, transform 0.15s; }
    .btn6:hover { box-shadow: 0 2px 0 #5b21b6; transform: translateY(4px); }
  </style>
</head>
<body>
  <button class="btn1">Aarav</button>
  <button class="btn2">Priya</button>
  <button class="btn3">Rohan</button>
  <button class="btn4">Ishita</button>
  <button class="btn5">Vivaan</button>
  <button class="btn6">Anika</button>
</body>
</html>
```

Six distinct hover effect patterns: color+scale, shadow lift, fill slide (using a pseudo-element), grow border with letter-spacing, gradient shift, and 3D push-down. Each uses different transition properties. Hover over each button to see the effect.

**Output:**

```
Six colorful buttons, each with a different hover animation style.
```

### Image Card with Zoom and Overlay

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: #0f172a; font-family: Arial, sans-serif; padding: 40px; display: flex; gap: 24px; flex-wrap: wrap; justify-content: center; margin: 0; }
    .card {
      width: 280px;
      height: 360px;
      border-radius: 18px;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      box-shadow: 0 10px 30px rgba(0,0,0,0.4);
    }
    .img {
      width: 100%;
      height: 100%;
      transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .i1 { background: linear-gradient(135deg, #a855f7, #ec4899); }
    .i2 { background: linear-gradient(135deg, #06b6d4, #0ea5e9); }
    .i3 { background: linear-gradient(135deg, #f59e0b, #ef4444); }
    .card:hover .img { transform: scale(1.15); }
    .overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.9), transparent 50%);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 24px;
      color: white;
      transition: background 0.4s;
    }
    .overlay h3 {
      transform: translateY(20px);
      transition: transform 0.4s;
      margin-bottom: 6px;
    }
    .overlay p {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.4s, transform 0.4s;
      color: #cbd5e1;
      font-size: 14px;
    }
    .card:hover .overlay h3 { transform: translateY(0); }
    .card:hover .overlay p { opacity: 1; transform: translateY(0); }
  </style>
</head>
<body>
  <div class="card">
    <div class="img i1"></div>
    <div class="overlay"><h3>Aarav's Photo</h3><p>Sunrise over the Himalayas taken last winter.</p></div>
  </div>
  <div class="card">
    <div class="img i2"></div>
    <div class="overlay"><h3>Priya's Ocean</h3><p>Waves at Marina Beach during the monsoon.</p></div>
  </div>
  <div class="card">
    <div class="img i3"></div>
    <div class="overlay"><h3>Rohan's Desert</h3><p>Sand dunes in Jaisalmer at golden hour.</p></div>
  </div>
</body>
</html>
```

Three layered effects on hover: (1) the image zooms in smoothly using `transform: scale`, (2) the title slides up from below, (3) the description fades in. The `overflow: hidden` on the card prevents the zoomed image from escaping. The cubic-bezier timing function gives the zoom a natural feel.

**Output:**

```
Three image cards. On hover, the image zooms in, the title slides up, and a description fades in.
```

### Navigation Links with Sliding Underline

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: #0f172a; color: white; font-family: Arial, sans-serif; margin: 0; padding: 40px; }
    nav { display: flex; gap: 40px; justify-content: center; padding: 24px; background: #1e293b; border-radius: 12px; }
    nav a {
      color: #f1f5f9;
      text-decoration: none;
      font-size: 18px;
      font-weight: 500;
      position: relative;
      padding: 4px 0;
    }
    nav a::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -4px;
      width: 0;
      height: 3px;
      background: linear-gradient(90deg, #a855f7, #06b6d4);
      border-radius: 2px;
      transform: translateX(-50%);
      transition: width 0.35s cubic-bezier(0.22, 1, 0.36, 1);
    }
    nav a:hover::after { width: 100%; }
    nav a:hover { color: #a855f7; }
    .content { max-width: 600px; margin: 40px auto; text-align: center; color: #cbd5e1; }
  </style>
</head>
<body>
  <nav>
    <a href="#">Home</a>
    <a href="#">Projects</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
  <div class="content">
    <p>Hover over a navigation link above to see the gradient underline slide in from the center.</p>
  </div>
</body>
</html>
```

Each link has a `::after` pseudo-element styled as a thin gradient bar. It starts with zero width and is centered. On hover, the width transitions to 100%, creating a smooth underline slide-in from the middle. Pure CSS, no JavaScript, no extra HTML.

**Output:**

```
A dark nav bar with 4 links. Hovering a link reveals a gradient underline sliding from the center outward.
```

### Pricing Card with Complete Hover Animation

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: #f8fafc; font-family: Arial, sans-serif; padding: 40px; display: flex; gap: 24px; flex-wrap: wrap; justify-content: center; }
    .plan {
      width: 260px;
      background: white;
      border-radius: 16px;
      padding: 30px 24px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.06);
      text-align: center;
      position: relative;
      border: 2px solid transparent;
      transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
                  box-shadow 0.4s,
                  border-color 0.4s;
    }
    .plan:hover {
      transform: translateY(-12px);
      box-shadow: 0 24px 50px rgba(168, 85, 247, 0.25);
      border-color: #a855f7;
    }
    .plan h2 { color: #334155; font-size: 22px; margin-bottom: 8px; }
    .plan .price { font-size: 42px; color: #a855f7; font-weight: bold; margin: 16px 0; }
    .plan .price span { font-size: 16px; color: #64748b; }
    .plan ul { list-style: none; padding: 0; text-align: left; margin: 20px 0; }
    .plan li { padding: 8px 0; color: #475569; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
    .plan button {
      width: 100%;
      padding: 12px;
      background: #a855f7;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s, letter-spacing 0.3s;
    }
    .plan button:hover { background: #7c3aed; letter-spacing: 1px; }
  </style>
</head>
<body>
  <div class="plan">
    <h2>Starter</h2>
    <div class="price">Rs 0<span>/mo</span></div>
    <ul><li>1 student</li><li>5 lessons</li><li>Community</li></ul>
    <button>Get Started</button>
  </div>
  <div class="plan">
    <h2>Pro</h2>
    <div class="price">Rs 999<span>/mo</span></div>
    <ul><li>Unlimited students</li><li>All lessons</li><li>Priority support</li></ul>
    <button>Get Started</button>
  </div>
  <div class="plan">
    <h2>Team</h2>
    <div class="price">Rs 2,499<span>/mo</span></div>
    <ul><li>25 students</li><li>Custom content</li><li>Dedicated mentor</li></ul>
    <button>Contact Us</button>
  </div>
</body>
</html>
```

Multiple transitions on one element. When you hover a pricing card, three properties animate together: it lifts up 12px, the shadow grows dramatically, and the border color changes from transparent to purple. Each property has the same duration but could be different. The button inside has its own transitions.

**Output:**

```
Three pricing cards that each lift, cast a glowing shadow, and gain a purple border on hover.
```

### Social Icon Bar with Color Rotation

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: #0f172a; font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
    .social {
      display: flex;
      gap: 16px;
    }
    .social a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      background: #1e293b;
      color: #cbd5e1;
      font-size: 22px;
      font-weight: bold;
      text-decoration: none;
      border-radius: 12px;
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .social a:hover {
      transform: translateY(-8px) rotate(-5deg);
      color: white;
    }
    .social a.fb:hover { background: #1877f2; box-shadow: 0 14px 28px rgba(24, 119, 242, 0.4); }
    .social a.ig:hover { background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045); box-shadow: 0 14px 28px rgba(253, 29, 29, 0.4); }
    .social a.yt:hover { background: #ff0000; box-shadow: 0 14px 28px rgba(255, 0, 0, 0.4); }
    .social a.tw:hover { background: #1da1f2; box-shadow: 0 14px 28px rgba(29, 161, 242, 0.4); }
    .social a.gh:hover { background: #24292e; box-shadow: 0 14px 28px rgba(36, 41, 46, 0.6); }
  </style>
</head>
<body>
  <div class="social">
    <a class="fb" href="#">F</a>
    <a class="ig" href="#">I</a>
    <a class="yt" href="#">Y</a>
    <a class="tw" href="#">T</a>
    <a class="gh" href="#">G</a>
  </div>
</body>
</html>
```

Social media icon bar with a custom cubic-bezier for a slight overshoot bounce on hover. Each icon lifts, rotates 5 degrees, and changes to its brand color. The cubic-bezier(0.34, 1.56, 0.64, 1) creates a springy, playful feel rather than a smooth ease.

**Output:**

```
Five dark icon squares in a row. Hovering each lifts it, rotates slightly, and reveals the brand color with a matching glow shadow.
```

### Show/Hide Modal Without display

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 40px; }
    .open-btn { padding: 12px 24px; background: #a855f7; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; }
    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.6);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s, visibility 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .overlay.open { opacity: 1; visibility: visible; }
    .modal {
      background: white;
      padding: 30px;
      border-radius: 14px;
      max-width: 400px;
      transform: scale(0.85);
      transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .overlay.open .modal { transform: scale(1); }
    .modal h2 { color: #a855f7; margin-bottom: 12px; }
    .modal p { color: #475569; margin-bottom: 20px; line-height: 1.5; }
    .close-btn { padding: 10px 20px; background: #e5e7eb; color: #0f172a; border: none; border-radius: 6px; cursor: pointer; }
  </style>
</head>
<body>
  <button class="open-btn" id="openBtn">Open Modal</button>
  <div class="overlay" id="overlay">
    <div class="modal">
      <h2>Hi, Meera!</h2>
      <p>This modal fades in and scales up smoothly. Notice we cannot transition display: none, so we use opacity + visibility instead.</p>
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

This is how to animate a show/hide effect correctly. Since `display: none` CANNOT be transitioned, we use `opacity` and `visibility` together. The modal also scales up with a springy cubic-bezier. JavaScript only toggles a class — all the animation is pure CSS.

**Output:**

```
A button that opens a modal with a fade-in overlay and a bouncy scale-up animation on the modal itself.
```

### Interactive Menu with Ripple Effect

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: #0f172a; color: white; font-family: Arial, sans-serif; padding: 40px; display: flex; justify-content: center; }
    .menu { background: #1e293b; border-radius: 14px; padding: 12px; min-width: 240px; }
    .menu-item {
      display: block;
      padding: 14px 20px;
      color: #cbd5e1;
      text-decoration: none;
      border-radius: 8px;
      position: relative;
      overflow: hidden;
      transition: color 0.3s, padding-left 0.3s;
    }
    .menu-item::before {
      content: '';
      position: absolute;
      left: 0; top: 0;
      width: 4px; height: 100%;
      background: linear-gradient(to bottom, #a855f7, #06b6d4);
      transform: scaleY(0);
      transform-origin: bottom;
      transition: transform 0.3s;
    }
    .menu-item:hover {
      color: white;
      padding-left: 28px;
      background: rgba(168, 85, 247, 0.1);
    }
    .menu-item:hover::before {
      transform: scaleY(1);
      transform-origin: top;
    }
  </style>
</head>
<body>
  <nav class="menu">
    <a class="menu-item" href="#">Dashboard</a>
    <a class="menu-item" href="#">My Projects</a>
    <a class="menu-item" href="#">Messages</a>
    <a class="menu-item" href="#">Notifications</a>
    <a class="menu-item" href="#">Settings</a>
  </nav>
</body>
</html>
```

Each menu item has a pseudo-element bar on the left that starts at `scaleY(0)` (invisible). On hover, it scales to 1 (full height) AND the transform-origin flips from bottom to top, making the bar appear to slide down from above. Meanwhile, the text shifts right and changes color. Three transitions combined into one elegant effect.

**Output:**

```
A dark menu where hovering an item slides a gradient bar down from the top and shifts the text right with a color change.
```

## Common Mistakes

### Trying to Transition display

**Wrong:**

```
.modal {
  display: none;
  transition: display 0.3s;
}
.modal.open {
  display: block;
}
/* The transition does nothing — element appears instantly */
```

display cannot be animated with CSS transitions. It is a discrete property with no intermediate values. The element appears and disappears instantly.

**Correct:**

```
.modal {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
}
.modal.open {
  opacity: 1;
  visibility: visible;
}
```

Use `opacity` for the fade effect and `visibility` to remove the element from accessibility and pointer events after it fades out. Never try to animate display, font-family, or other discrete properties.

### Applying Transitions to the :hover State Instead of the Base

**Wrong:**

```
.button { background: #a855f7; }
.button:hover {
  background: #ec4899;
  transition: background 0.3s;
}
/* Transition only works when hovering IN, not OUT */
```

The transition is defined on :hover. It applies when hovering in (going from default to hover), but not when hovering out (going back to default) — so the hover-in is smooth but the hover-out is instant.

**Correct:**

```
.button {
  background: #a855f7;
  transition: background 0.3s;  /* On the BASE state */
}
.button:hover {
  background: #ec4899;
}
```

Always put the `transition` property on the base (default) state, not inside :hover. That way it applies in both directions — hovering in AND hovering out.

### Transitioning height: auto

**Wrong:**

```
.panel {
  height: 0;
  transition: height 0.3s;
}
.panel.open {
  height: auto;
}
/* The transition fails — auto cannot be animated */
```

The browser cannot animate to `auto` because it does not know the target pixel value in advance. The panel just snaps open.

**Correct:**

```
.panel {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease;
}
.panel.open {
  max-height: 500px;  /* Set a value larger than the expected content */
}
```

Use `max-height` with a value larger than the actual content. Since max-height caps at the content height, setting it to 500px still shows exactly as much as needed, but CAN be animated from 0.

### Using transition: all When Not Needed

**Wrong:**

```
.card {
  transition: all 0.3s;
}
/* Every property animates — including unintended ones */
```

Using `all` can create surprising animations when other properties change (for example, adding a class also animates its margin or padding). It is also slightly less performant.

**Correct:**

```
.card {
  transition: transform 0.3s, box-shadow 0.3s;
  /* Only the properties you actually want to animate */
}
```

Be explicit about which properties transition. It is both more performant and more predictable. Use `all` only when you truly want to animate every property that might change.

## Summary

- A CSS transition needs a base state, an end state, and a `transition` rule on the BASE state that describes how to animate between them.
- The shorthand `transition: property duration timing-function delay` combines all four properties into one declaration.
- Common timing functions: `ease` (default), `linear`, `ease-in`, `ease-out`, `ease-in-out`, and custom `cubic-bezier()`. Use `ease-out` for elements entering and `ease-in-out` for toggles.
- You can transition multiple properties by listing them separated by commas: `transition: background 0.3s, transform 0.5s, box-shadow 0.4s`.
- The `:hover` pseudo-class combined with transitions creates smooth hover effects for buttons, cards, images, and links — with zero JavaScript.
- Always add `cursor: pointer` to clickable custom elements (cards, divs with onclick) so users know they can click them.
- Properties that CANNOT be transitioned: `display`, `height: auto`, `font-family`, `content`. For fade effects use `opacity` and `visibility` together.
- For expanding panels, use `max-height` (not `height: auto`) with a value larger than the expected content.
- Put the `transition` on the BASE state, not inside `:hover`, so the animation works both when entering AND leaving the hover state.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/html-and-css/transitions-and-hover-effects/*
*Practice questions: https://learn.modernagecoders.com/resources/html-and-css/transitions-and-hover-effects/practice/*
