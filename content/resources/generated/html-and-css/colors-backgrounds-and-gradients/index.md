---
title: "CSS Colors, Backgrounds, and Gradients - hex, rgb, hsl, linear-gradient, radial-gradient | Modern Age Coders"
description: "Master CSS colors and backgrounds. Learn hex, rgb, rgba, hsl, hsla, currentColor, background-image, background-size, background-position, linear-gradient, radial-gradient, conic-gradient, and multiple backgrounds. 58+ practice questions with complete runnable HTML examples."
slug: colors-backgrounds-and-gradients
canonical: https://learn.modernagecoders.com/resources/html-and-css/colors-backgrounds-and-gradients/
category: "HTML and CSS"
keywords: ["css colors", "css hex colors", "css rgb", "css hsl", "css background-image", "css linear-gradient", "css radial-gradient", "css conic-gradient", "background-size cover", "multiple backgrounds css"]
---
# Colors, Backgrounds, and Gradients

**Difficulty:** Intermediate  
**Reading time:** 40 min  
**Chapter:** 11  
**Practice questions:** 58

## What Are Colors, Backgrounds, and Gradients?

Colors and backgrounds are what give a website its personality. A page with plain black text on white looks like a document. Add a gradient, a background image, and a carefully chosen color scheme, and suddenly it feels like a polished product.

In this chapter you will learn every way to specify a color in CSS (named, hex, rgb, hsl), every way to apply a background (solid, image, gradient), and how to combine them to create hero sections, buttons, cards, and overlays that look professional.

```
/* All of these produce the same red color */
color: red;
color: #ff0000;
color: #f00;
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 1);
color: hsl(0, 100%, 50%);
color: hsla(0, 100%, 50%, 1);
```

## Why Do Colors and Backgrounds Matter?

### 1. They Define Your Brand

Instagram is gradient pink-orange-purple. Netflix is black and red. YouTube is white and red. A consistent color palette makes a site feel intentional. You will learn how to choose and apply colors using the formats professionals actually use.

### 2. HSL Is Easier to Tweak Than Hex

Want a slightly lighter blue? With hex you have to guess (#3b82f6 to... what?). With HSL, just change the lightness value: `hsl(217, 91%, 60%)` becomes `hsl(217, 91%, 70%)`. Designers love HSL for this reason.

### 3. Gradients Are Everywhere in Modern Design

Stripe, Linear, Vercel, Apple -- every modern landing page uses gradients. A gradient button, a gradient hero, a gradient text effect. You will learn linear, radial, and conic gradients, plus how to layer them over images for hero sections.

### 4. Backgrounds Are How You Build Heroes

The hero section of almost every website is a background image with a dark overlay and centered text. You will learn the exact CSS to build one: background-image, background-size, background-position, and a gradient overlay.

## Detailed Explanation

### 1. Named Colors

CSS has about 140 named colors: `red`, `blue`, `green`, `tomato`, `rebeccapurple`, `cornflowerblue`, `mediumseagreen`, and more. Good for prototyping, but you will rarely use them in real projects because you need exact brand colors.

```
h1 { color: rebeccapurple; }
p  { color: slategray; }
btn { background: tomato; }
```

### 2. Hex Colors

Hex is the most common format. A `#` followed by 6 hexadecimal digits (0-9, a-f). The pattern is `#RRGGBB`: two digits for red, two for green, two for blue. Each pair goes from 00 (none) to ff (max = 255).

```
#ff0000  /* pure red */
#00ff00  /* pure green */
#0000ff  /* pure blue */
#ffffff  /* white */
#000000  /* black */
#a855f7  /* purple brand color */
#f59e0b  /* amber */

/* Shorthand: if each pair has the same digit, you can write 3 digits */
#f00  /* same as #ff0000 */
#fff  /* same as #ffffff */
#09c  /* same as #0099cc */

/* 8-digit hex includes alpha (transparency) */
#ff0000ff  /* red, fully opaque */
#ff000080  /* red, 50% transparent */
```

### 3. rgb() and rgba()

RGB takes three numbers (0-255) for red, green, blue. RGBA adds a fourth number (0-1) for alpha (opacity).

```
color: rgb(255, 0, 0);          /* red */
color: rgb(168, 85, 247);       /* brand purple */

/* With alpha (transparency) */
background: rgba(0, 0, 0, 0.5); /* black at 50% opacity */
background: rgba(168, 85, 247, 0.2); /* purple tint */

/* Modern syntax (no commas, slash before alpha) */
color: rgb(255 0 0);
color: rgb(255 0 0 / 0.5);
```

### 4. hsl() and hsla() -- The Designer's Favorite

HSL stands for **Hue** (0-360 on the color wheel), **Saturation** (0% gray to 100% vivid), **Lightness** (0% black, 50% normal, 100% white).

```
color: hsl(0, 100%, 50%);    /* red -- hue 0 */
color: hsl(120, 100%, 50%);  /* green -- hue 120 */
color: hsl(240, 100%, 50%);  /* blue -- hue 240 */
color: hsl(270, 90%, 65%);   /* brand purple */

/* Tweaking is easy: same hue, different lightness */
color: hsl(270, 90%, 40%);  /* darker purple */
color: hsl(270, 90%, 75%);  /* lighter purple */

/* With alpha */
background: hsla(270, 90%, 65%, 0.3);
```

HSL makes it trivial to build light/dark variants of the same color. Change lightness and you stay in the same color family.

### 5. currentColor Keyword

`currentColor` is a special keyword that means 'whatever the current color property is'. It lets you reuse the text color for borders, SVG strokes, and more.

```
.btn {
  color: #a855f7;
  border: 2px solid currentColor; /* border is also #a855f7 */
}
.btn:hover {
  color: #06b6d4; /* border updates automatically too */
}
```

### 6. background-color

The simplest background. Takes any color value.

```
body { background-color: #f3f4f6; }
.card { background-color: hsl(270, 90%, 98%); }
```

### 7. background-image and background-size

Use `background-image: url('...')` to add an image. Then control how it fits with `background-size`.

```
.hero {
  background-image: url('hero.jpg');
  background-size: cover;     /* fills container, may crop */
  background-size: contain;   /* fits inside, may leave space */
  background-size: 200px;     /* exact size */
  background-size: 100% 50%;  /* width height */
}
```

- **cover**: scale to fill, crop what does not fit. Best for heroes.
- **contain**: scale to fit entirely, may leave empty space.
- **Exact value**: pixels or percentages.

### 8. background-position

Controls where the image is placed inside the container.

```
background-position: center center; /* default for heroes */
background-position: top right;
background-position: 50% 50%;
background-position: 20px 40px;
```

### 9. background-repeat

By default, backgrounds tile (repeat) if smaller than the container. Usually you want `no-repeat`.

```
background-repeat: no-repeat;
background-repeat: repeat-x;   /* horizontal tile */
background-repeat: repeat-y;   /* vertical tile */
background-repeat: round;      /* stretch to fit without clipping */
```

### 10. background-attachment (Parallax)

`background-attachment: fixed` makes the background stay still while the page scrolls -- a simple parallax effect.

```
.parallax {
  background-image: url('mountains.jpg');
  background-size: cover;
  background-attachment: fixed;
}
```

### 11. Shorthand background Property

You can combine all background properties in one line.

```
background: #f3f4f6 url('hero.jpg') no-repeat center center / cover;
/* color | image | repeat | position / size */
```

### 12. linear-gradient

A linear gradient transitions between two or more colors along a straight line. No image file needed.

```
background: linear-gradient(to right, #a855f7, #06b6d4);
background: linear-gradient(to bottom, red, yellow);
background: linear-gradient(45deg, #a855f7, #ec4899);
background: linear-gradient(135deg, #667eea, #764ba2);

/* Multiple color stops */
background: linear-gradient(to right, red, yellow, green, blue, purple);

/* Stops at specific positions */
background: linear-gradient(to right, #a855f7 0%, #a855f7 50%, #06b6d4 50%, #06b6d4 100%);
```

Direction keywords: `to top`, `to right`, `to bottom`, `to left`, `to top right`, etc. Or use any angle: `0deg` is to top, `90deg` is to right, `180deg` is to bottom, `45deg` is top-right diagonal.

### 13. radial-gradient

A radial gradient starts from a point and spreads outward in circles or ellipses.

```
background: radial-gradient(circle, #a855f7, #1a1a2e);
background: radial-gradient(ellipse at top, #fef3c7, #f59e0b);
background: radial-gradient(circle at 30% 70%, white, transparent 60%);
```

### 14. conic-gradient

A conic gradient rotates colors around a center point (like a pie chart or color wheel).

```
background: conic-gradient(red, yellow, green, cyan, blue, magenta, red);
background: conic-gradient(from 90deg, #a855f7, #06b6d4, #a855f7);
```

### 15. Multiple Backgrounds

You can stack multiple backgrounds by separating them with commas. The first one listed is on top.

```
background:
  linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),  /* dark overlay on top */
  url('hero.jpg') no-repeat center / cover;           /* image underneath */
```

This is the exact technique for creating a hero section with dark overlay.

## Code Examples

### Color Format Showcase

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; background: #f9fafb; }
    h1 { color: rebeccapurple; }
    .swatch {
      display: inline-block;
      width: 160px;
      padding: 20px;
      margin: 6px;
      color: white;
      font-family: monospace;
      border-radius: 10px;
      text-align: center;
      font-size: 13px;
    }
    .named   { background: tomato; }
    .hex6    { background: #a855f7; }
    .hex3    { background: #0bf; }
    .rgb     { background: rgb(6, 182, 212); }
    .rgba    { background: rgba(245, 158, 11, 0.7); color: #1a1a2e; }
    .hsl     { background: hsl(330, 90%, 60%); }
    .hsla    { background: hsla(270, 90%, 40%, 0.85); }
    .currentc {
      color: #0369a1;
      background: white;
      border: 4px solid currentColor;
    }
  </style>
</head>
<body>
  <h1>Every Way to Write a Color</h1>
  <p>By Aarav, exploring CSS color formats:</p>
  <div class="swatch named">named: tomato</div>
  <div class="swatch hex6">hex: #a855f7</div>
  <div class="swatch hex3">short hex: #0bf</div>
  <div class="swatch rgb">rgb(6,182,212)</div>
  <div class="swatch rgba">rgba(245,158,11,0.7)</div>
  <div class="swatch hsl">hsl(330,90%,60%)</div>
  <div class="swatch hsla">hsla(270,90%,40%,0.85)</div>
  <div class="swatch currentc">currentColor border</div>
</body>
</html>
```

A visual showcase of eight color formats. Notice that `currentColor` lets the border reuse whatever `color` is set -- change the text color and the border changes with it.

**Output:**

```
A grid of colored rectangles, each labeled with the color format used to create it.
```

### Hero Section with Gradient Overlay

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Arial, sans-serif; }
    .hero {
      height: 100vh;
      background:
        linear-gradient(135deg, rgba(168, 85, 247, 0.75), rgba(6, 182, 212, 0.55)),
        url('https://picsum.photos/1600/900?random=3') no-repeat center / cover;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 40px;
    }
    .hero h1 { font-size: 56px; margin-bottom: 16px; text-shadow: 0 2px 20px rgba(0,0,0,0.4); }
    .hero p { font-size: 20px; opacity: 0.95; max-width: 600px; margin-bottom: 30px; }
    .cta {
      padding: 14px 36px;
      background: white;
      color: #a855f7;
      border: none;
      border-radius: 50px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
    }
    .cta:hover { background: #f3f4f6; }
  </style>
</head>
<body>
  <section class="hero">
    <h1>Welcome, Priya</h1>
    <p>Start your coding journey today. Build beautiful websites with HTML and CSS.</p>
    <button class="cta">Get Started</button>
  </section>
</body>
</html>
```

The classic hero pattern. Two backgrounds stacked: a purple-to-cyan gradient on top (at partial opacity) and a background image underneath. The gradient provides contrast so the white text is always readable no matter the image.

**Output:**

```
A full-screen hero with a purple-cyan gradient over a background image, centered heading, tagline, and a white call-to-action button.
```

### Rainbow Gradient Button

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 40px; background: #0f172a; text-align: center; }
    h1 { color: white; }
    .rainbow-btn {
      padding: 16px 48px;
      font-size: 20px;
      font-weight: bold;
      color: white;
      border: none;
      border-radius: 50px;
      background: linear-gradient(90deg, #ff0080, #ff8c00, #ffd700, #00ff00, #00bfff, #8a2be2, #ff0080);
      background-size: 300% 100%;
      cursor: pointer;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
      transition: background-position 0.6s, transform 0.2s;
    }
    .rainbow-btn:hover {
      background-position: 100% 0;
      transform: translateY(-3px);
    }
    .rainbow-btn:active { transform: translateY(0); }
  </style>
</head>
<body>
  <h1>Rainbow Button by Kavya</h1>
  <button class="rainbow-btn">Click Me</button>
</body>
</html>
```

A linear gradient with 7 color stops makes a rainbow. `background-size: 300% 100%` makes the gradient wider than the button. On hover, `background-position` slides the gradient to reveal a different part, creating an animated rainbow shift.

**Output:**

```
A rainbow-colored pill button. On hover, the colors slide across and the button lifts up slightly.
```

### Radial Glow Card

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #0f0f1a; padding: 40px; display: flex; justify-content: center; }
    .glow-card {
      width: 320px;
      padding: 40px 30px;
      border-radius: 16px;
      background:
        radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.6), transparent 60%),
        radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.5), transparent 55%),
        #1a1a2e;
      color: white;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
      text-align: center;
    }
    .glow-card h2 { margin: 0 0 12px; font-size: 24px; }
    .glow-card p { margin: 0; opacity: 0.85; line-height: 1.6; }
    .badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 999px;
      background: rgba(168, 85, 247, 0.25);
      color: #d8b4fe;
      font-size: 12px;
      margin-bottom: 16px;
    }
  </style>
</head>
<body>
  <div class="glow-card">
    <div class="badge">NEW</div>
    <h2>Dashboard Pro</h2>
    <p>Student of the month: Ishaan Sharma. He completed 12 projects this term.</p>
  </div>
</body>
</html>
```

Two radial gradients are stacked to create glowing spots in different corners. Each fades to `transparent` so they blend with the base dark color underneath. This is a popular technique for modern SaaS cards.

**Output:**

```
A dark rounded card with a purple glow in the top-left and a cyan glow in the bottom-right, with white text in the center.
```

### Conic Gradient Pie Chart

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 40px; text-align: center; background: #f9fafb; }
    h1 { color: #1a1a2e; }
    .pie {
      width: 240px;
      height: 240px;
      border-radius: 50%;
      margin: 20px auto;
      background: conic-gradient(
        #a855f7 0% 40%,
        #06b6d4 40% 65%,
        #f59e0b 65% 85%,
        #ec4899 85% 100%
      );
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    }
    .legend { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; font-size: 14px; }
    .legend div { display: flex; align-items: center; gap: 6px; }
    .dot { width: 14px; height: 14px; border-radius: 50%; }
  </style>
</head>
<body>
  <h1>Time Spent This Week</h1>
  <div class="pie"></div>
  <div class="legend">
    <div><span class="dot" style="background:#a855f7"></span>Coding 40%</div>
    <div><span class="dot" style="background:#06b6d4"></span>Maths 25%</div>
    <div><span class="dot" style="background:#f59e0b"></span>Reading 20%</div>
    <div><span class="dot" style="background:#ec4899"></span>Play 15%</div>
  </div>
</body>
</html>
```

A conic gradient with hard color stops (e.g. `#a855f7 0% 40%`) creates pie chart slices. Each color transition is sharp because start and end percentages are different values. `border-radius: 50%` turns the square div into a circle.

**Output:**

```
A four-color pie chart showing weekly activity distribution with a legend below.
```

### Fixed Parallax Background

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Arial, sans-serif; line-height: 1.6; }
    section { padding: 80px 20px; text-align: center; }
    .panel-1 { background: #f3f4f6; }
    .parallax {
      min-height: 500px;
      background:
        linear-gradient(rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.55)),
        url('https://picsum.photos/1600/900?random=7') no-repeat center / cover;
      background-attachment: fixed;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .parallax h2 { font-size: 48px; text-shadow: 0 2px 10px rgba(0,0,0,0.5); }
    .panel-2 { background: #1a1a2e; color: white; }
  </style>
</head>
<body>
  <section class="panel-1">
    <h2>Scroll down to see parallax</h2>
    <p>Created by Riya Patel as a demo.</p>
  </section>
  <section class="parallax">
    <h2>I stay in place</h2>
  </section>
  <section class="panel-2">
    <h2>Keep scrolling</h2>
    <p>The middle section has a fixed background while you scroll past it.</p>
  </section>
</body>
</html>
```

`background-attachment: fixed` pins the background image to the viewport instead of scrolling with the element. As you scroll past the parallax section, the image stays put and the content slides over it. The dark overlay keeps text readable.

**Output:**

```
Three sections stacked vertically. Scrolling shows the middle section's background image staying still while the rest of the page scrolls normally.
```

## Common Mistakes

### Forgetting no-repeat on Background Images

**Wrong:**

```
.hero {
  background-image: url('hero.jpg');
  background-size: 300px;
}
```

The image tiles and repeats across the section, creating an ugly grid pattern.

**Correct:**

```
.hero {
  background-image: url('hero.jpg');
  background-size: 300px;
  background-repeat: no-repeat;
}
```

By default, backgrounds repeat in both directions. For nearly every real-world hero or banner you want `background-repeat: no-repeat`. Only use repeat for genuinely tileable textures.

### Wrong Order in Multiple Backgrounds

**Wrong:**

```
background:
  url('hero.jpg') no-repeat center / cover,
  linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6));
```

The image covers the gradient completely. You see the image but no overlay.

**Correct:**

```
background:
  linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
  url('hero.jpg') no-repeat center / cover;
```

In multiple backgrounds, the **first one listed is on top**. Put the overlay first, then the image. The image is the bottom layer.

### Using rgb() without Alpha for Transparency

**Wrong:**

```
.overlay {
  background: rgb(0, 0, 0);
  opacity: 0.5; /* this fades the whole element including children */
}
```

opacity fades everything inside the element (text, images, children), not just the background.

**Correct:**

```
.overlay {
  background: rgba(0, 0, 0, 0.5); /* only the background is semi-transparent */
}
```

Use `rgba` or `hsla` to make only the background translucent. The `opacity` property affects the entire element and its children -- rarely what you want for an overlay.

### Hex Shorthand Only Works with Matching Pairs

**Wrong:**

```
color: #a85; /* tried to shorten #a855f7 */
```

#a85 is not #a855f7 -- it is equivalent to #aa8855 (each digit is doubled).

**Correct:**

```
color: #a855f7; /* use full 6-digit hex */
/* 3-digit shorthand ONLY works when both digits in each pair match: #f00, #39c, #fff */
```

3-digit hex expands each digit into a pair: `#09c` means `#0099cc`. You cannot shorten a color unless every pair already has the same digit.

## Summary

- Colors can be written as named (red), hex (#ff0000 or #f00), rgb/rgba, or hsl/hsla. Use hex for brand colors and HSL when you need to tweak lightness or build variants.
- rgba() and hsla() include an alpha channel (0 to 1) for transparency. Use them for overlays and tints instead of the opacity property, which fades the entire element.
- currentColor means 'whatever the current color property is'. Use it for borders and SVGs that should match the text color automatically.
- background-color sets a solid color. background-image: url(...) loads an image. background-size controls fitting: cover (fill, may crop), contain (fit fully, may leave space), or exact values.
- background-position places the image (center center, top right, percentages, or pixel values). background-repeat: no-repeat stops images from tiling.
- background-attachment: fixed creates a simple parallax effect -- the background stays in place as the page scrolls.
- The shorthand background property combines color, image, repeat, position / size in one line: background: #fff url('x.jpg') no-repeat center / cover;
- linear-gradient(direction, color1, color2, ...) creates a straight gradient. Direction can be a keyword (to right, to bottom right) or an angle (45deg, 135deg).
- radial-gradient creates a gradient from a center point outward. conic-gradient rotates colors around a point -- perfect for pie charts and color wheels.
- Multiple backgrounds are comma-separated. The first one listed sits on top. To make a hero section, stack a gradient overlay on top of a background image.

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/html-and-css/colors-backgrounds-and-gradients/*
*Practice questions: https://learn.modernagecoders.com/resources/html-and-css/colors-backgrounds-and-gradients/practice/*
