---
title: "CSS Transforms 2D and 3D - translate, rotate, scale, perspective, flip cards | Modern Age Coders"
description: "Master CSS transforms. Learn translate, rotate, scale, skew, transform-origin, 3D transforms (rotateX, rotateY, translateZ), perspective, preserve-3d, backface-visibility, and build flip cards and 3D cubes. 60+ practice questions."
slug: transforms-2d-and-3d
canonical: https://learn.modernagecoders.com/resources/html-and-css/transforms-2d-and-3d/
category: "HTML and CSS"
keywords: ["css transforms", "translate rotate scale", "transform 3d", "perspective css", "preserve-3d", "backface-visibility", "flip card css", "css cube 3d", "transform-origin", "tilt effect"]
---
# CSS Transforms (2D and 3D)

**Difficulty:** Advanced  
**Reading time:** 45 min  
**Chapter:** 20  
**Practice questions:** 60

## What Are CSS Transforms?

CSS transforms let you **move, rotate, scale, and skew** elements without affecting the document layout. Unlike changing `width`, `height`, or `left`, transforms run on the GPU and do not trigger layout recalculations. That is what makes them so fast and smooth.

There are two flavors of transforms:

1. **2D transforms** — move, rotate, scale, and skew on a flat plane (X and Y axes)
2. **3D transforms** — add depth (Z axis), perspective, and 3D rotation

```
.card {
  transform: translate(50px, 20px) rotate(15deg) scale(1.2);
}
```

That single line moves the card 50px right and 20px down, rotates it 15 degrees, and makes it 20% larger — all in one GPU-accelerated operation.

## Why Learn Transforms?

### 1. The Fastest Way to Animate

Transforms are the gold standard for performance. When you animate width or top, the browser recalculates the layout every frame. When you animate transform, the browser just tells the GPU 'move this layer by N pixels'. It is dramatically faster.

### 2. They Are Non-Destructive

A transform visually moves, scales, or rotates an element but does NOT change its position in the document flow. Surrounding elements do not shift. This lets you animate things without breaking your layout.

### 3. 3D Effects Without WebGL

Want a flipping card, a rotating cube, a tilt-on-hover button, or a parallax effect? CSS 3D transforms can do all of these with just a few lines of code. No JavaScript, no WebGL, no libraries.

### 4. Every Modern Website Uses Them

Hover lifts, card flips, image zooms, scale-in modals, rotation icons, parallax effects — all built with transforms. Master this chapter and you unlock a huge part of modern web animation.

## Detailed Explanation

### 1. translate() - Move an Element

Shifts the element by X and Y pixels without affecting layout:

```
transform: translate(50px, 20px);   /* right 50, down 20 */
transform: translateX(100px);        /* only horizontal */
transform: translateY(-30px);        /* only vertical (negative = up) */
transform: translate(50%, 50%);      /* percentages relative to element's OWN size */
```

The percentage trick is a classic centering technique: `translate(-50%, -50%)` moves the element half its own width and height back, perfectly centering it.

### 2. rotate() - Spin an Element

```
transform: rotate(45deg);    /* clockwise 45 degrees */
transform: rotate(-90deg);   /* counter-clockwise 90 degrees */
transform: rotate(1turn);    /* one full rotation */
transform: rotate(180deg);   /* upside down */
```

### 3. scale() - Grow or Shrink

```
transform: scale(1.5);       /* 150% of original size */
transform: scale(0.5);       /* 50% of original size */
transform: scale(1.2, 0.8);  /* wider horizontally, shorter vertically */
transform: scaleX(2);        /* double width only */
transform: scaleY(0);        /* collapse vertically (invisible) */
```

### 4. skew() - Slant an Element

```
transform: skew(20deg, 10deg);   /* slant both X and Y */
transform: skewX(20deg);          /* slant horizontally */
transform: skewY(-10deg);         /* slant vertically */
```

Skew is less common but useful for italic-like effects and geometric designs.

### 5. transform-origin - The Pivot Point

By default, all transforms happen around the element's CENTER. You can change that:

```
transform-origin: top left;         /* transform from top-left corner */
transform-origin: bottom center;    /* from bottom center */
transform-origin: 0 100%;           /* from top-right */
transform-origin: 50px 50px;        /* specific pixel coordinates */
```

When you rotate around a corner instead of the center, the element swings like a door. When you scale from a corner, it grows in one direction only.

### 6. Multiple Transforms - Order Matters!

You can apply multiple transforms in a single declaration, separated by spaces:

```
transform: translate(100px, 0) rotate(45deg);
/* First translate 100px right, THEN rotate 45 degrees around new position */

transform: rotate(45deg) translate(100px, 0);
/* First rotate 45 degrees, THEN translate 100px in the ROTATED coordinate system */
```

**The order matters**. Transforms apply right-to-left but visually we often think left-to-right. Experiment with swapping order to see the difference.

### 7. 3D Transforms - Adding the Z Axis

```
transform: translateZ(50px);   /* pull forward (toward viewer) */
transform: translateZ(-50px);  /* push backward (away from viewer) */
transform: rotateX(45deg);     /* tilt forward/backward */
transform: rotateY(45deg);     /* turn left/right (like a door) */
transform: rotateZ(45deg);     /* same as rotate() — around the Z axis */
```

### 8. perspective - Making 3D Look Real

Without perspective, 3D transforms look flat. `perspective` sets the distance between the viewer and the element, creating depth:

```
.scene {
  perspective: 800px;
  /* The smaller the value, the more extreme the 3D effect */
}
.scene .card {
  transform: rotateY(45deg);
}
```

Perspective goes on the PARENT of the 3D element. Without it, rotateY just looks like horizontal scaling.

### 9. transform-style: preserve-3d

For nested 3D transforms (like the faces of a cube), you need this on the parent:

```
.cube {
  transform-style: preserve-3d;
}
```

Without it, child elements collapse into the parent's flat plane.

### 10. backface-visibility - Hide the Back

When you flip an element 180 degrees, you see its mirrored back face. Often you want to hide that:

```
.card-face {
  backface-visibility: hidden;
}
```

This is essential for flip cards — otherwise you see the back of the front face when it is flipped.

## Code Examples

### Classic Flip Card

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: #0f172a; display: flex; justify-content: center; align-items: center; min-height: 100vh; font-family: Arial, sans-serif; margin: 0; }
    .scene {
      perspective: 1000px;
      width: 280px;
      height: 360px;
    }
    .card {
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      transition: transform 0.8s cubic-bezier(0.65, 0, 0.35, 1);
      cursor: pointer;
    }
    .scene:hover .card {
      transform: rotateY(180deg);
    }
    .face {
      position: absolute;
      inset: 0;
      backface-visibility: hidden;
      border-radius: 18px;
      padding: 30px;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    }
    .front {
      background: linear-gradient(135deg, #a855f7, #ec4899);
    }
    .back {
      background: linear-gradient(135deg, #06b6d4, #0ea5e9);
      transform: rotateY(180deg);
    }
    h2 { margin: 0 0 10px 0; font-size: 28px; }
    p { text-align: center; line-height: 1.6; }
  </style>
</head>
<body>
  <div class="scene">
    <div class="card">
      <div class="face front">
        <h2>Aarav Sharma</h2>
        <p>Full Stack Developer</p>
        <p style="font-size: 14px; opacity: 0.8;">Hover to flip</p>
      </div>
      <div class="face back">
        <h2>About Me</h2>
        <p>I love building apps with React, Node.js, and creative CSS.</p>
      </div>
    </div>
  </div>
</body>
</html>
```

The flip card needs four things: (1) `perspective` on the parent for 3D depth, (2) `preserve-3d` on the card so children stay in 3D space, (3) `backface-visibility: hidden` on each face to hide the back when flipped, (4) `rotateY(180deg)` on the back face so it starts facing away. Hovering rotates the whole card 180 degrees.

**Output:**

```
A gradient card that flips over 3D on hover, revealing the back with different content.
```

### 3D Rotating Cube

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: #0f172a; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; font-family: Arial, sans-serif; perspective: 1200px; }
    .cube {
      position: relative;
      width: 180px;
      height: 180px;
      transform-style: preserve-3d;
      animation: rotate 10s linear infinite;
    }
    @keyframes rotate {
      from { transform: rotateX(-30deg) rotateY(0); }
      to   { transform: rotateX(-30deg) rotateY(360deg); }
    }
    .face {
      position: absolute;
      width: 180px;
      height: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 26px;
      border: 2px solid rgba(255,255,255,0.3);
    }
    .front  { background: rgba(168, 85, 247, 0.8); transform: translateZ(90px); }
    .back   { background: rgba(236, 72, 153, 0.8); transform: rotateY(180deg) translateZ(90px); }
    .right  { background: rgba(6, 182, 212, 0.8);  transform: rotateY(90deg)  translateZ(90px); }
    .left   { background: rgba(14, 165, 233, 0.8); transform: rotateY(-90deg) translateZ(90px); }
    .top    { background: rgba(245, 158, 11, 0.8); transform: rotateX(90deg)  translateZ(90px); }
    .bottom { background: rgba(239, 68, 68, 0.8);  transform: rotateX(-90deg) translateZ(90px); }
  </style>
</head>
<body>
  <div class="cube">
    <div class="face front">Aarav</div>
    <div class="face back">Priya</div>
    <div class="face right">Rohan</div>
    <div class="face left">Ishita</div>
    <div class="face top">Vivaan</div>
    <div class="face bottom">Anika</div>
  </div>
</body>
</html>
```

A real 3D cube built from 6 faces. Each face is positioned 90px away from the center using `translateZ(90px)` after a rotation. The 'front' face translates forward; the 'back' face rotates 180 and then translates; the sides rotate 90 degrees first, then translate. The parent uses `preserve-3d` and rotates continuously, creating a rotating cube.

**Output:**

```
A real 3D cube with 6 differently colored faces, rotating continuously in space.
```

### Tilt on Hover Card

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: #0f172a; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; font-family: Arial, sans-serif; perspective: 1000px; }
    .card {
      width: 280px;
      padding: 30px;
      background: linear-gradient(135deg, #a855f7, #ec4899);
      color: white;
      border-radius: 20px;
      box-shadow: 0 20px 50px rgba(168, 85, 247, 0.3);
      transform-style: preserve-3d;
      transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s;
      cursor: pointer;
    }
    .card:hover {
      transform: rotateX(10deg) rotateY(-12deg) translateZ(20px);
      box-shadow: 0 30px 70px rgba(168, 85, 247, 0.5);
    }
    .card h2 {
      margin: 0 0 10px 0;
      transform: translateZ(40px);
    }
    .card p {
      line-height: 1.6;
      transform: translateZ(20px);
    }
  </style>
</head>
<body>
  <div class="card">
    <h2>Meera's Story</h2>
    <p>Hover over this card to see the 3D tilt effect. The heading sits slightly above the background for added depth.</p>
  </div>
</body>
</html>
```

3D tilt effect. On hover, the card rotates on both X and Y axes and moves forward on Z. Because of `preserve-3d`, the heading and paragraph sit at different Z depths (`translateZ`), giving them a layered 3D feel that shifts with the tilt.

**Output:**

```
A gradient card that tilts in 3D on hover, with the heading floating above the background at a different depth.
```

### Rotating Logo

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: #0f172a; display: flex; justify-content: center; align-items: center; min-height: 100vh; font-family: Arial, sans-serif; margin: 0; color: white; }
    .logo {
      width: 140px;
      height: 140px;
      background: conic-gradient(from 0deg, #a855f7, #06b6d4, #f59e0b, #a855f7);
      border-radius: 50%;
      position: relative;
      animation: rotate 6s linear infinite;
      box-shadow: 0 0 60px rgba(168, 85, 247, 0.4);
    }
    .logo::before {
      content: '';
      position: absolute;
      inset: 10px;
      background: #0f172a;
      border-radius: 50%;
    }
    .logo::after {
      content: 'SK';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 44px;
      font-weight: 900;
      background: linear-gradient(135deg, #a855f7, #06b6d4);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div class="logo"></div>
</body>
</html>
```

A rotating logo with a conic gradient outer ring. The rotation applies to the parent, but the `::before` dark inner circle rotates with it (you cannot tell because it is solid), and the `::after` text also rotates. For the text to stay upright, you could apply a counter-rotation to ::after. Here the rotation looks like a spinning ring around static text.

**Output:**

```
A circular logo with a spinning colorful ring around the 'SK' initials.
```

### Scale-In Modal Entrance

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 40px; margin: 0; }
    .trigger { padding: 14px 28px; background: #a855f7; color: white; border: none; border-radius: 10px; font-size: 16px; cursor: pointer; }
    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s, visibility 0.3s;
    }
    .overlay.open { opacity: 1; visibility: visible; }
    .modal {
      background: white;
      padding: 40px;
      border-radius: 20px;
      max-width: 420px;
      transform: scale(0.3) rotate(-15deg);
      opacity: 0;
      transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s;
    }
    .overlay.open .modal {
      transform: scale(1) rotate(0);
      opacity: 1;
    }
    .modal h2 { color: #a855f7; margin-top: 0; }
    .modal p { color: #475569; line-height: 1.6; }
    .close { padding: 10px 22px; background: #e5e7eb; color: #0f172a; border: none; border-radius: 8px; cursor: pointer; margin-top: 10px; }
  </style>
</head>
<body>
  <h1>Transform-Powered Modal</h1>
  <button class="trigger" id="openBtn">Open Modal</button>
  <div class="overlay" id="overlay">
    <div class="modal">
      <h2>Hi Kavya!</h2>
      <p>This modal enters with a combined scale and rotate transform using a springy cubic-bezier curve.</p>
      <button class="close" id="closeBtn">Got It</button>
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

Modal entrance combining scale and rotate. The modal starts at 30% size and rotated -15 degrees. The springy cubic-bezier makes it bounce into place with a playful overshoot. Scale and rotate applied together feel much more dynamic than scale alone.

**Output:**

```
A modal that springs in with a combined scale and rotate effect, bouncing slightly on arrival.
```

### Parallax Scroll Layers

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; color: white; }
    .scene {
      height: 100vh;
      perspective: 10px;
      overflow-x: hidden;
      overflow-y: scroll;
    }
    .layer {
      position: relative;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 60px;
      font-weight: 900;
      text-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    .bg {
      position: absolute;
      inset: 0;
      z-index: -1;
    }
    .back {
      transform: translateZ(-30px) scale(4);
    }
    .middle {
      transform: translateZ(-15px) scale(2.5);
    }
    .front {
      transform: translateZ(0);
    }
    .l1 .bg { background: linear-gradient(135deg, #0f172a, #a855f7); }
    .l2 .bg { background: linear-gradient(135deg, #581c87, #ec4899); }
    .l3 .bg { background: linear-gradient(135deg, #0c4a6e, #06b6d4); }
    .normal { transform: none; }
  </style>
</head>
<body>
  <div class="scene">
    <section class="layer l1"><div class="bg back"></div>Aarav</section>
    <section class="layer l2"><div class="bg middle"></div>Priya</section>
    <section class="layer l3"><div class="bg normal"></div>Rohan</section>
  </div>
</body>
</html>
```

CSS-only parallax using 3D perspective. The scene element has perspective and scroll. Background layers are placed at different `translateZ` values, then scaled up so they still fill the screen despite being further away. As you scroll, the far layers appear to move slower, creating the parallax illusion. Pure CSS, no JavaScript scroll listeners.

**Output:**

```
Three scrollable sections where background gradients at different depths create a parallax effect as you scroll.
```

### Pulse Ring Effect

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: #0f172a; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; font-family: Arial, sans-serif; }
    .live-badge {
      position: relative;
      width: 140px;
      height: 140px;
      background: linear-gradient(135deg, #ec4899, #f43f5e);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 22px;
      font-weight: bold;
      box-shadow: 0 0 30px rgba(244, 63, 94, 0.5);
      z-index: 10;
    }
    .live-badge::before, .live-badge::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 3px solid #ec4899;
      animation: pulse-ring 2s ease-out infinite;
      z-index: -1;
    }
    .live-badge::after {
      animation-delay: 1s;
    }
    @keyframes pulse-ring {
      0%   { transform: scale(1); opacity: 1; }
      100% { transform: scale(2.2); opacity: 0; }
    }
  </style>
</head>
<body>
  <div class="live-badge">LIVE</div>
</body>
</html>
```

A pulsing live indicator. Two pseudo-element rings continuously scale from 1 to 2.2 while fading from opacity 1 to 0. The second ring has a 1 second delay, so they alternate, creating a continuous ripple effect. The scale transform is GPU-accelerated and runs smoothly.

**Output:**

```
A pink 'LIVE' badge with two rings continuously rippling outward.
```

## Common Mistakes

### Forgetting perspective on the Parent

**Wrong:**

```
.card {
  transform: rotateY(45deg);
}
/* Looks flat — no 3D depth */
```

Without perspective, 3D rotations look like 2D scaling. rotateY(45deg) just visually compresses the element horizontally because the viewer has no depth reference.

**Correct:**

```
.parent {
  perspective: 1000px;
}
.parent .card {
  transform: rotateY(45deg);
}
```

Perspective MUST be on a parent element (or use `transform: perspective(1000px) rotateY(...)` inline). It tells the browser how far the viewer is from the 3D scene, enabling depth illusion.

### Order of Multiple Transforms

**Wrong:**

```
transform: rotate(45deg) translate(100px);
/* Translation happens in the ROTATED coordinate system — so the element moves diagonally, not right */
```

Transforms apply in order. After rotating, the coordinate system is rotated too. A subsequent translate moves along the rotated axis, not the original one.

**Correct:**

```
/* To move right AND rotate: */
transform: translate(100px) rotate(45deg);
/* OR if you want rotation first: */
transform: rotate(45deg);
transform-origin: 100px center;
```

Think of transforms right-to-left in their effect. Translating first then rotating moves the element and then spins it in place. Rotating first then translating moves the element along a rotated axis.

### Forgetting backface-visibility on Flip Cards

**Wrong:**

```
.front, .back {
  position: absolute;
  /* Missing backface-visibility: hidden */
}
.back { transform: rotateY(180deg); }
.card.flipped { transform: rotateY(180deg); }
```

When the card rotates, you can see the back of the front face overlapping the back face — a mirrored, backwards version of the front content.

**Correct:**

```
.front, .back {
  position: absolute;
  backface-visibility: hidden;
}
```

`backface-visibility: hidden` tells the browser to not render the reverse side of each face. Essential for flip cards and any 3D element where you only want one side visible at a time.

### Missing transform-style: preserve-3d

**Wrong:**

```
.card {
  perspective: 1000px;
}
.card .front { transform: translateZ(50px); }
.card .back  { transform: translateZ(-50px); }
/* All children collapse to the same plane */
```

Without `preserve-3d`, the children of a 3D transformed element are flattened into the parent's plane. 3D depth on nested elements is lost.

**Correct:**

```
.card {
  perspective: 1000px;
  transform-style: preserve-3d;
}
```

Any element that contains 3D-transformed children needs `transform-style: preserve-3d`. Without it, the browser optimizes by flattening everything into a 2D plane.

## Summary

- CSS transforms (`translate`, `rotate`, `scale`, `skew`) let you visually move, spin, size, and slant elements WITHOUT affecting layout. Surrounding elements do not shift.
- Transforms are GPU-accelerated and the fastest way to animate. Always prefer transform over width, height, top, left for animations.
- `transform: translate(-50%, -50%)` is a classic centering trick: the percentages are relative to the element's own size, so this moves it back by half its width and height.
- Multiple transforms are applied in order, separated by spaces. Order matters: `rotate() translate()` produces different results from `translate() rotate()`.
- `transform-origin` sets the pivot point for transforms. Default is center. Change it to corners or specific coordinates for door-swing or corner-scale effects.
- 3D transforms use the Z axis: `translateZ`, `rotateX`, `rotateY`, `rotateZ`. They need `perspective` on the parent to appear 3D instead of flat.
- `perspective` sets the distance from the viewer to the 3D scene. Smaller values produce more extreme 3D effects. Place on the parent of the 3D element.
- `transform-style: preserve-3d` is required on parents that contain 3D-transformed children, so children stay in 3D space instead of being flattened.
- `backface-visibility: hidden` hides the reverse side of a rotated element. Essential for flip cards to avoid seeing mirrored content through the element.
- Flip cards need: perspective on the scene, preserve-3d on the card, backface-visibility hidden on both faces, and the back face initially rotated 180 degrees.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/html-and-css/transforms-2d-and-3d/*
*Practice questions: https://learn.modernagecoders.com/resources/html-and-css/transforms-2d-and-3d/practice/*
