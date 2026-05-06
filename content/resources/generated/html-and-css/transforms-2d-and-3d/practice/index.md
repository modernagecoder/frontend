---
title: "Practice: CSS Transforms (2D and 3D)"
description: "60 practice problems for CSS Transforms (2D and 3D) in HTML and CSS"
slug: transforms-2d-and-3d-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/transforms-2d-and-3d/practice
category: "HTML and CSS"
---
# Practice: CSS Transforms (2D and 3D)

**Total questions:** 60

## Topic-Specific Questions

### Q1. [Easy] What does `transform: translate(50px, 20px)` do?

*Hint:* X first, Y second.

**Answer:** Moves the element 50 pixels to the right and 20 pixels down.

`translate(x, y)` shifts the element by the given amounts without affecting the document layout. Other elements do not shift to follow.

### Q2. [Easy] What does `transform: rotate(180deg)` do?

*Hint:* Half a full turn.

**Answer:** Rotates the element 180 degrees (upside down).

180 degrees is half a rotation. The element is flipped upside down around its center.

### Q3. [Easy] What does `transform: scale(1.5)` do?

*Hint:* A number greater than 1 means grow.

**Answer:** Makes the element 150% of its original size (50% larger in both dimensions).

`scale(1)` is original size. Less than 1 shrinks, greater than 1 grows. `scale(2)` doubles the size.

### Q4. [Easy] What does `transform-origin: top left` do?

*Hint:* Pivot point.

**Answer:** Makes all transforms pivot from the top-left corner of the element instead of the default center.

If you rotate with transform-origin: top left, the element swings from its top-left corner like a door pivoting on its hinge.

### Q5. [Easy] What is the Z axis in 3D transforms?

*Hint:* In/out of the screen.

**Answer:** The Z axis points from the screen toward the viewer. Positive Z pulls an element forward; negative Z pushes it backward.

2D transforms use X (horizontal) and Y (vertical). 3D adds Z (depth).

### Q6. [Medium] What does `transform: translate(-50%, -50%)` do?

*Hint:* Classic centering trick.

**Answer:** Moves the element 50% of its OWN width to the left and 50% of its OWN height upward. Combined with top: 50% and left: 50% on the parent, this centers an element perfectly.

Percentages in `translate()` are relative to the element's own size, not the parent. This is the famous perfect centering technique.

### Q7. [Medium] Why does this look flat?

```
.card {
  transform: rotateY(45deg);
}
```

*Hint:* Missing a parent property.

**Answer:** Missing `perspective` on the parent. Without perspective, 3D rotations look like flat scaling because there is no depth reference.

Add `perspective: 1000px` on the parent element. The smaller the value, the more dramatic the 3D effect.

### Q8. [Medium] What is the difference between these two?

```
/* A */ transform: translate(100px) rotate(45deg);
/* B */ transform: rotate(45deg) translate(100px);
```

*Hint:* Order matters.

**Answer:** A: moves 100px right then rotates 45 degrees in place. B: rotates 45 degrees first, then translates along the rotated axis (so it moves diagonally).

After a rotation, the coordinate system is rotated. Subsequent translates move along the new rotated axis, not the original.

### Q9. [Medium] What does `backface-visibility: hidden` do?

*Hint:* Hides the reverse side.

**Answer:** Hides the back (reverse) of an element when it is rotated more than 90 degrees. Essential for flip cards.

Without it, you see a mirrored version of the element when you rotate it past 90 degrees, because the browser renders both sides.

### Q10. [Medium] What is `transform-style: preserve-3d` used for?

*Hint:* Nested 3D elements.

**Answer:** It keeps child elements in 3D space instead of flattening them into the parent's 2D plane. Required for cubes, flip cards, and any nested 3D transforms.

Without preserve-3d, the browser flattens all children as a performance optimization, and 3D depth on children is lost.

### Q11. [Medium] What does `transform: skewX(20deg)` do?

*Hint:* Slant horizontally.

**Answer:** Slants (shears) the element 20 degrees along the horizontal axis, creating an italic-like effect.

Skew tilts the element's sides. skewX shears horizontally, skewY vertically. Used for geometric designs and stylized effects.

### Q12. [Hard] Why is transforming an element faster than changing its top/left?

*Hint:* Think about the browser rendering pipeline.

**Answer:** Changing top/left triggers LAYOUT recalculation every frame (the browser has to recompute positions of surrounding elements). Transform runs on the GPU and only requires a COMPOSITE step — much faster.

Modern browsers have a rendering pipeline: layout, paint, composite. Transform skips layout and paint, going straight to composite on the GPU. This is why transforms feel smooth even on complex pages.

### Q13. [Hard] What does `perspective: 500px` vs `perspective: 2000px` look like differently?

*Hint:* Closer = more dramatic.

**Answer:** 500px creates a strong, exaggerated 3D effect (like looking through a fish-eye lens). 2000px creates a subtle, natural 3D effect. Smaller values bring the viewer closer.

Perspective distance is how far the viewer is from the scene. Closer means steeper perspective; farther means flatter, more natural 3D.

### Q14. [Hard] What is the difference between `rotate()` and `rotateZ()`?

*Hint:* Both rotate around the Z axis.

**Answer:** They are IDENTICAL. `rotate()` is shorthand for `rotateZ()` — rotation around the Z axis (which appears as flat 2D rotation from the viewer's perspective).

In 3D space, 2D rotation is actually rotation around the Z axis (the axis pointing toward the viewer). rotate() and rotateZ() do the same thing.

### Q15. [Hard] Why can you animate transform but not background-image between two images?

*Hint:* Interpolation requires numeric values.

**Answer:** Transform values are numeric (pixels, degrees, scale factors) and can be smoothly interpolated. Background-image URLs are discrete strings — the browser cannot blend two image files together.

For image cross-fades, stack two images with absolute positioning and animate their opacity instead of trying to transition the image URL.

## Mixed Questions

### Q1. [Easy] What does `transform: scale(0)` do?

*Hint:* Zero scale.

**Answer:** Collapses the element to zero size, making it invisible.

Useful for entrance animations: start at scale(0) and animate to scale(1) for a grow-in effect.

### Q2. [Easy] Which unit is used for rotations?

*Hint:* Angle measurement.

**Answer:** `deg` (degrees), `turn`, `rad` (radians), or `grad`.

Most common is deg. `1turn` equals 360deg. Example: `rotate(1turn)` is one full rotation.

### Q3. [Medium] Why do CSS transforms not affect surrounding elements?

*Hint:* Transform is visual-only.

**Answer:** Transforms are visual-only operations. They do not change the element's original box in the document flow. Surrounding elements lay out as if the transform did not happen.

This is a feature — you can move and rotate elements freely without breaking the layout. Contrast with changing margin or position, which DO shift other elements.

### Q4. [Medium] What does this do?

```
.box {
  transform: translateY(-6px) scale(1.05);
  transition: transform 0.3s;
}
```

*Hint:* Two transforms at once.

**Answer:** The box moves up 6 pixels AND grows to 105% of its size simultaneously. With the transition, both changes animate smoothly.

Multiple transforms in one declaration are applied together. The transition animates all of them as one operation.

### Q5. [Medium] What is `transform: translate3d(0, 0, 0)` and why is it used?

*Hint:* Performance hint.

**Answer:** It applies a zero translation in 3D space, which forces the browser to create a GPU compositing layer for the element. Developers used to use this as a hack to force hardware acceleration.

Modern approach: use `will-change: transform` instead. But translate3d(0,0,0) still works and is seen in legacy code.

### Q6. [Medium] Why is a 3D flip card built with two faces, not one?

*Hint:* One face cannot show different content on both sides.

**Answer:** Each face is a separate element (one for the front, one for the back). The back face is pre-rotated 180 degrees so it starts facing away. When the parent card rotates 180 degrees, the back now faces the viewer and the front faces away (hidden by backface-visibility).

CSS cannot show different content on the front and back of a single element. You need two elements stacked with opposite starting rotations.

### Q7. [Hard] What does `transform: matrix(1, 0, 0, 1, 100, 50)` do?

*Hint:* 2D matrix transformation.

**Answer:** It is equivalent to `translate(100px, 50px)`. The matrix() function represents any combination of translate, rotate, scale, and skew in matrix form.

matrix() takes 6 values for 2D and 16 for matrix3d. It is rarely written by hand; usually generated by tools or libraries for complex combined transforms.

### Q8. [Medium] What does `transform: none` do?

*Hint:* Reset.

**Answer:** Removes all transforms, resetting the element to its untransformed state.

Useful for reverting transforms, often in `:not(:hover)` or in media queries to disable transforms on certain screens.

### Q9. [Hard] Can you transform an inline element like ``?

*Hint:* Think about display types.

**Answer:** Yes, but only after changing its display. Inline elements can be transformed only if their display is inline-block, block, flex, grid, etc. Pure inline display is not transformable.

Transforms require a formatting context. Inline elements flow with text and do not form independent boxes, so they cannot be independently transformed until their display changes.

### Q10. [Medium] Which is faster: `margin-left: 50px` or `transform: translateX(50px)`?

*Hint:* GPU vs layout.

**Answer:** `transform: translateX(50px)` is significantly faster. It runs on the GPU without triggering layout. margin-left causes a layout recalculation.

For any animation where you are moving elements, prefer transform over margin, padding, top, left, right, or bottom.

### Q11. [Easy] What does `transform: scaleY(-1)` do?

*Hint:* Negative scale.

**Answer:** Flips the element vertically (mirror image upside down), without resizing.

Negative scale values mirror the element. scaleX(-1) mirrors horizontally, scaleY(-1) mirrors vertically. Same size, flipped.

### Q12. [Medium] What happens to an element with `transform: scale(2)` in terms of layout?

*Hint:* Transform does not change layout.

**Answer:** The element appears twice as large visually, but its layout box stays the same. Neighboring elements do not shift to make room. The scaled element may overflow onto or under surrounding content.

Transforms are visual-only. The element's real size in the flow is unchanged. For layout-aware resizing, you would need to change width/height.

### Q13. [Hard] What does `transform: perspective(500px) rotateY(30deg)` do (inline perspective)?

*Hint:* Single-element 3D.

**Answer:** It applies perspective AND the 3D rotation on the same element. Useful for single-element 3D effects when you do not want to put perspective on the parent.

Note: inline perspective applies only to THAT element. For multiple elements sharing a common 3D scene, put perspective on the parent so they share the same vanishing point.

### Q14. [Medium] Why is translate percentage useful for centering?

*Hint:* Percentage is relative to the element.

**Answer:** Because `translate(-50%, -50%)` moves the element by 50% of its own dimensions. Combined with `top: 50%; left: 50%`, which positions its top-left at the parent's center, the translate shifts it back so its center aligns with the parent's center.

This works for any size element and is the most reliable pure-CSS centering method pre-Flexbox. Still useful for absolute positioning.

### Q15. [Easy] Can you animate CSS transforms?

*Hint:* Yes — that is their main purpose.

**Answer:** Yes. Transforms are fully animatable with both transitions and @keyframes, and they are the most performant things you can animate in CSS.

Animating transform is the foundation of smooth web animation. Pair it with opacity for elegant entrance and exit effects.

### Q16. [Medium] What is wrong with this flip card code?

```
.card {
  perspective: 1000px;
}
.face {
  backface-visibility: hidden;
}
.back { transform: rotateY(180deg); }
.card.flipped { transform: rotateY(180deg); }
```

*Hint:* Missing property for nested 3D.

**Answer:** Missing `transform-style: preserve-3d` on the card. Without it, the faces collapse into the parent's 2D plane and the flip does not look 3D.

Flip cards need THREE things together: perspective on the scene, preserve-3d on the card, and backface-visibility hidden on the faces.

### Q17. [Hard] What does `transform: rotateY(360deg)` on a looping animation look like visually?

*Hint:* Full Y-axis spin.

**Answer:** The element appears to spin around like a door handle or a vertical axis, showing its back at 180 degrees and returning to the front at 360 degrees.

rotateY rotates around the vertical axis. A full 360 rotation returns the element to its original position.

### Q18. [Hard] Can you combine 2D and 3D transforms in one declaration?

*Hint:* Yes — and it is common.

**Answer:** Yes. Example: `transform: rotateY(45deg) scale(1.1) translateZ(30px)`. Mixing 2D and 3D functions is allowed and commonly used for interactive effects.

When you mix them, the browser treats the whole thing as 3D (needs perspective on the parent or as the first transform function).

### Q19. [Easy] What does `transform: rotate(1turn)` do?

*Hint:* One full turn.

**Answer:** Rotates the element one full turn (360 degrees). The element ends up in the same visual position as it started.

`1turn` equals 360 degrees. Useful in animations where you want to express full rotations clearly.

## Multiple Choice Questions

### Q1. [Easy] Which transform function moves an element?

**Answer:** B

**B is correct.** `translate(x, y)` moves an element by the given amounts.

### Q2. [Easy] Which transform rotates an element?

**Answer:** B

**B is correct.** `rotate(deg)` rotates the element around its transform-origin (default center).

### Q3. [Easy] What does `transform: scale(0.5)` do?

**Answer:** B

**B is correct.** `scale(0.5)` scales the element to 50% of its original dimensions.

### Q4. [Easy] What does `transform-origin` control?

**Answer:** B

**B is correct.** transform-origin sets the pivot point (default is center) for all transforms.

### Q5. [Easy] How do you combine multiple transforms?

**Answer:** B

**B is correct.** Example: `transform: translate(100px) rotate(45deg) scale(1.2)`. Spaces separate multiple transform functions.

### Q6. [Medium] Which property is required on the PARENT for 3D depth to appear correctly?

**Answer:** C

**C is correct.** `perspective` defines the distance between the viewer and the 3D scene, creating depth.

### Q7. [Medium] Which property keeps nested 3D children in 3D space?

**Answer:** A

**A is correct.** Without `preserve-3d`, children are flattened into the parent's 2D plane.

### Q8. [Medium] What does `backface-visibility: hidden` do?

**Answer:** B

**B is correct.** When an element rotates past 90 degrees, its back is visible. backface-visibility: hidden prevents that.

### Q9. [Medium] Why is `transform` animated instead of `top` or `left` for performance?

**Answer:** B

**B is correct.** transform is GPU-accelerated. top/left trigger layout work on the CPU every frame, causing jank.

### Q10. [Medium] What does `translate(-50%, -50%)` do when combined with top:50% and left:50%?

**Answer:** B

**B is correct.** top/left:50% puts the element's top-left at the parent's center; translate(-50%, -50%) shifts it back by half its own size, centering it.

### Q11. [Medium] Does `transform` affect surrounding elements?

**Answer:** B

**B is correct.** Transforms do not change the document flow. The original box is preserved; other elements do not shift.

### Q12. [Hard] Which is different: `rotate(45deg)` or `rotateZ(45deg)`?

**Answer:** B

**B is correct.** 2D rotation is actually rotation around the Z axis. rotate() and rotateZ() produce identical results.

### Q13. [Hard] What does `transform: rotate(45deg) translate(100px)` do differently from `transform: translate(100px) rotate(45deg)`?

**Answer:** B

**B is correct.** After a rotation, the coordinate system is rotated. Subsequent translates move along the rotated axis.

### Q14. [Hard] Which value of perspective creates the most dramatic 3D effect?

**Answer:** D

**D is correct.** Smaller perspective values bring the viewer closer, producing steeper, more exaggerated 3D angles.

### Q15. [Easy] Which property animates most efficiently?

**Answer:** C

**C is correct.** transform runs on the GPU. All the others trigger layout work on the CPU.

### Q16. [Medium] What does `transform: scaleX(-1)` do?

**Answer:** B

**B is correct.** Negative scale values mirror the element. scaleX(-1) flips it horizontally.

### Q17. [Hard] What are the three essential properties for a 3D flip card?

**Answer:** A

**A is correct.** All three are required: perspective for depth, preserve-3d so faces stay in 3D space, backface-visibility so the back of each face is hidden when rotated.

### Q18. [Medium] What does `transform: skewX(15deg)` do?

**Answer:** B

**B is correct.** skewX slants the element along the X axis, creating an italic-like effect.

### Q19. [Easy] How do you reset all transforms on an element?

**Answer:** B

**B is correct.** `transform: none` removes all transforms and returns the element to its untransformed state.

### Q20. [Medium] What is translateZ(50px)?

**Answer:** B

**B is correct.** Positive Z moves toward the viewer; negative pushes back. Requires perspective to appear 3D.

## Coding Challenges

### Challenge 1. Hover Scale and Rotate

**Difficulty:** Easy

Create a card that scales to 1.1 and rotates 5 degrees on hover. Use transition for smoothness.

**Constraints:**

- Combine scale and rotate in one transform. Use transition on the base state.

**Sample input:**

```
Hover over card
```

**Sample output:**

```
Card grows and tilts slightly.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #0f172a; margin: 0; font-family: Arial, sans-serif; }
  .card { width: 220px; padding: 30px; background: linear-gradient(135deg, #a855f7, #ec4899); color: white; border-radius: 16px; text-align: center; cursor: pointer; transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1); font-weight: bold; }
  .card:hover { transform: scale(1.1) rotate(5deg); }
</style>
</head>
<body>
  <div class="card">Aarav's Project</div>
</body>
</html>
```

### Challenge 2. Perfect Center with translate

**Difficulty:** Easy

Center a box perfectly inside a larger parent using absolute positioning with top:50%, left:50%, and `translate(-50%, -50%)`.

**Constraints:**

- Use position: absolute + top/left: 50% + transform: translate(-50%, -50%).

**Sample input:**

```
None
```

**Sample output:**

```
A box perfectly centered in its parent.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { margin: 0; font-family: Arial, sans-serif; }
  .parent { position: relative; width: 100vw; height: 100vh; background: #0f172a; }
  .box { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 200px; padding: 30px; background: linear-gradient(135deg, #06b6d4, #0ea5e9); color: white; border-radius: 14px; text-align: center; font-weight: bold; }
</style>
</head>
<body>
  <div class="parent">
    <div class="box">Priya is centered</div>
  </div>
</body>
</html>
```

### Challenge 3. Flipping Card (Front and Back)

**Difficulty:** Medium

Build a 3D flip card. The front shows a question, the back shows the answer. On hover, the card rotates 180 degrees on the Y axis to reveal the back.

**Constraints:**

- Use perspective on the scene, preserve-3d on the card, backface-visibility hidden on faces.

**Sample input:**

```
Hover over card
```

**Sample output:**

```
Card flips revealing the back.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #0f172a; margin: 0; font-family: Arial, sans-serif; }
  .scene { perspective: 1000px; width: 280px; height: 340px; }
  .card { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; transition: transform 0.8s cubic-bezier(0.65, 0, 0.35, 1); cursor: pointer; }
  .scene:hover .card { transform: rotateY(180deg); }
  .face { position: absolute; inset: 0; backface-visibility: hidden; border-radius: 18px; padding: 30px; color: white; display: flex; align-items: center; justify-content: center; text-align: center; font-size: 20px; font-weight: bold; box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
  .front { background: linear-gradient(135deg, #a855f7, #ec4899); }
  .back { background: linear-gradient(135deg, #06b6d4, #0ea5e9); transform: rotateY(180deg); }
</style>
</head>
<body>
  <div class="scene">
    <div class="card">
      <div class="face front">What does DOM stand for?</div>
      <div class="face back">Document Object Model</div>
    </div>
  </div>
</body>
</html>
```

### Challenge 4. Lift and Shadow on Hover

**Difficulty:** Medium

Create a pricing card that lifts up 10px and casts a larger shadow on hover. Use transform: translateY for the lift, and transition both transform and box-shadow.

**Constraints:**

- Use transform (not margin). Transition both transform and box-shadow.

**Sample input:**

```
Hover over card
```

**Sample output:**

```
Card smoothly lifts with a bigger shadow.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #f8fafc; margin: 0; font-family: Arial, sans-serif; }
  .plan { width: 240px; background: white; padding: 30px; border-radius: 16px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.08); cursor: pointer; transition: transform 0.3s, box-shadow 0.3s; }
  .plan:hover { transform: translateY(-10px); box-shadow: 0 24px 50px rgba(168, 85, 247, 0.25); }
  .plan h2 { color: #a855f7; margin: 0 0 8px; }
  .plan .price { font-size: 36px; color: #0f172a; font-weight: bold; }
</style>
</head>
<body>
  <div class="plan"><h2>Pro Plan</h2><div class="price">Rs 999</div></div>
</body>
</html>
```

### Challenge 5. 3D Rotating Cube

**Difficulty:** Hard

Build a real 3D cube with 6 colored faces that rotates continuously. Use 6 div.face elements, position each with translateZ and appropriate rotateX/rotateY, and animate the parent's rotation.

**Constraints:**

- Use perspective on body, transform-style: preserve-3d on cube, translateZ for each face, and @keyframes for rotation.

**Sample input:**

```
None
```

**Sample output:**

```
A rotating 3D cube with 6 colored faces.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #0f172a; perspective: 1200px; margin: 0; font-family: Arial, sans-serif; }
  .cube { position: relative; width: 180px; height: 180px; transform-style: preserve-3d; animation: rotate 10s linear infinite; }
  @keyframes rotate { from { transform: rotateX(-25deg) rotateY(0); } to { transform: rotateX(-25deg) rotateY(360deg); } }
  .face { position: absolute; width: 180px; height: 180px; display: flex; align-items: center; justify-content: center; color: white; font-size: 22px; font-weight: bold; border: 2px solid rgba(255,255,255,0.2); }
  .front  { background: rgba(168, 85, 247, 0.85); transform: translateZ(90px); }
  .back   { background: rgba(236, 72, 153, 0.85); transform: rotateY(180deg) translateZ(90px); }
  .right  { background: rgba(6, 182, 212, 0.85);  transform: rotateY(90deg)  translateZ(90px); }
  .left   { background: rgba(14, 165, 233, 0.85); transform: rotateY(-90deg) translateZ(90px); }
  .top    { background: rgba(245, 158, 11, 0.85); transform: rotateX(90deg)  translateZ(90px); }
  .bottom { background: rgba(239, 68, 68, 0.85);  transform: rotateX(-90deg) translateZ(90px); }
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

### Challenge 6. Tilt Card with Layered Depth

**Difficulty:** Hard

Create a card that tilts in 3D on hover with both X and Y rotation. Inside the card, the heading and paragraph should sit at different `translateZ` depths for a layered 3D feel.

**Constraints:**

- Use perspective on body, transform-style: preserve-3d on card, translateZ on inner elements.

**Sample input:**

```
Hover over card
```

**Sample output:**

```
Card tilts, and inner text appears to float above the background.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #0f172a; perspective: 1000px; margin: 0; font-family: Arial, sans-serif; }
  .card { width: 300px; padding: 30px; background: linear-gradient(135deg, #a855f7, #ec4899); color: white; border-radius: 20px; transform-style: preserve-3d; transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s; cursor: pointer; box-shadow: 0 20px 50px rgba(168, 85, 247, 0.3); }
  .card:hover { transform: rotateX(10deg) rotateY(-12deg) translateZ(20px); box-shadow: 0 30px 70px rgba(168, 85, 247, 0.5); }
  .card h2 { transform: translateZ(40px); margin: 0 0 10px; }
  .card p { transform: translateZ(20px); line-height: 1.6; }
</style>
</head>
<body>
  <div class="card">
    <h2>Meera's Card</h2>
    <p>This card tilts in 3D on hover. The heading floats above the paragraph for added depth.</p>
  </div>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/transforms-2d-and-3d/*
