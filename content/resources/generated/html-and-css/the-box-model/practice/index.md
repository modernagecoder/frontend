---
title: "Practice: The Box Model - Margin, Border, Padding"
description: "58 practice problems for The Box Model - Margin, Border, Padding in HTML and CSS"
slug: the-box-model-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/the-box-model/practice
category: "HTML and CSS"
---
# Practice: The Box Model - Margin, Border, Padding

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] What is the actual rendered width?

```
.box {
  box-sizing: content-box;
  width: 200px;
  padding: 10px;
  border: 5px solid black;
}
```

*Hint:* Add content width + padding (both sides) + border (both sides).

**Answer:** 230px (200 + 10 + 10 + 5 + 5)

With content-box, width is the content only. Total = 200 (content) + 20 (padding) + 10 (borders) = 230px.

### Q2. [Easy] What is the actual rendered width?

```
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 10px;
  border: 5px solid black;
}
```

*Hint:* border-box means width = total.

**Answer:** 200px

With border-box, width is the total box width. Padding and border eat into the content area. Total rendered width is exactly 200px.

### Q3. [Easy] What does `padding: 10px 20px` mean?

*Hint:* Two-value shorthand.

**Answer:** Top and bottom padding are 10px, left and right are 20px.

Two values: first is vertical (top/bottom), second is horizontal (left/right). Common for buttons.

### Q4. [Easy] What does `padding: 10px 20px 30px 40px` do?

*Hint:* Four values go clockwise from top.

**Answer:** Top 10, right 20, bottom 30, left 40. Clockwise order.

Four-value shorthand is clockwise starting from the top: top, right, bottom, left (TRBL).

### Q5. [Easy] How do you center a 600px wide div horizontally on the page?

*Hint:* margin auto.

**Answer:** `div { width: 600px; margin: 0 auto; }`

margin: 0 auto (top-bottom 0, left-right auto) tells the browser to distribute leftover horizontal space equally, centering the element. Requires an explicit width.

### Q6. [Easy] What does `border-radius: 50%` do on a 100x100 square?

*Hint:* Half the size in any direction.

**Answer:** Turns it into a circle.

50% radius on a square produces a circle because the radius equals half the side length. Commonly used for avatars and profile pictures.

### Q7. [Easy] What are the border shorthand values in order?

*Hint:* Three parts.

**Answer:** width, style, color. Example: `border: 2px solid #a855f7;`

Order: width, style, color. Style is required (solid, dashed, dotted, etc.). You can add more specific properties like border-width or border-color separately.

### Q8. [Easy] What does `box-shadow: 0 4px 6px rgba(0,0,0,0.1)` create?

*Hint:* Positive y offset pushes the shadow down.

**Answer:** A subtle drop shadow 4px below the element with a 6px blur at 10% black opacity.

Zero horizontal offset, 4px vertical offset (down), 6px blur, semi-transparent black. This is a classic subtle card lift shadow.

### Q9. [Easy] What is the difference between outline and border?

*Hint:* One takes space, the other does not.

**Answer:** outline does NOT take up space (draws outside the border on top of other content). border takes up space and can shift layout.

outline is ideal for focus rings because it does not cause layout shift. border occupies space like padding does.

### Q10. [Easy] What is the universal box-sizing reset?

*Hint:* Applies border-box to everything.

**Answer:** `*, *::before, *::after { box-sizing: border-box; }`

This one-line reset makes every element use border-box, so width means total box width everywhere. A standard modern CSS practice.

### Q11. [Medium] What is the total height?

```
div { height: 100px; padding: 20px; border: 5px solid; box-sizing: content-box; }
```

*Hint:* Add padding and border to height.

**Answer:** 150px (100 + 20 + 20 + 5 + 5)

content-box: height is the content only. Total = 100 + 40 (padding) + 10 (border) = 150px.

### Q12. [Medium] What is the space between these two elements?

```
h1 { margin-bottom: 50px; }
p  { margin-top: 30px; }
```

*Hint:* Vertical margin collapse.

**Answer:** 50px (the larger of the two collapses with the smaller).

Vertical margins between adjacent block elements collapse. The final gap is the larger margin (50px), not the sum (80px).

### Q13. [Medium] What does this make?

```
.avatar { width: 100px; height: 100px; border-radius: 50%; }
```

*Hint:* 50% on a square.

**Answer:** A circle with 100px diameter.

When border-radius is 50% and the element is square, it becomes a perfect circle. For non-square elements it becomes an ellipse.

### Q14. [Medium] How do you round only the top-left and top-right corners?

*Hint:* Four-value border-radius.

**Answer:** `border-radius: 12px 12px 0 0;`

Four values go clockwise from top-left: top-left, top-right, bottom-right, bottom-left. Setting the bottom corners to 0 keeps them square.

### Q15. [Medium] Why does this button shift 2px when focused?

```
button:focus { border: 2px solid blue; }
```

*Hint:* Borders occupy space.

**Answer:** Because the border adds 2px on each side, changing the button's size and causing layout shift.

border takes up space. Use outline instead for focus rings -- outline does not affect layout.

### Q16. [Medium] What does `margin: 20px auto 0` mean?

*Hint:* Three-value shorthand.

**Answer:** Top: 20px, left/right: auto (centers horizontally), bottom: 0.

Three values: top, left/right (shared), bottom. auto on left/right with a defined width centers the element.

### Q17. [Medium] What does `box-shadow: inset 0 2px 4px rgba(0,0,0,0.1)` do?

*Hint:* inset.

**Answer:** Creates a shadow INSIDE the element, giving it a sunken or pressed-in look.

The inset keyword reverses the direction: the shadow appears inside the box, making it look inset or recessed.

### Q18. [Medium] How can you prevent vertical margin collapse between two elements?

*Hint:* Break the direct adjacency.

**Answer:** Add padding, a border, or use a flex/grid container -- anything that separates the touching margins. Using gap in flex/grid also avoids collapse.

Margins only collapse when they touch directly. Any content between them (including padding or border on the parent) prevents collapse.

### Q19. [Medium] What does `margin-top: -20px` do?

*Hint:* Negative margin.

**Answer:** Pulls the element upward by 20px, potentially overlapping the element above it.

Negative margins are valid CSS. They pull the element in the opposite direction. Useful for overlapping designs and pulling elements into hero sections.

### Q20. [Medium] Which border style is solid vs dashed vs dotted?

*Hint:* Common style keywords.

**Answer:** solid (continuous line), dashed (short line segments with gaps), dotted (round dots with gaps).

Border styles include: none, solid, dashed, dotted, double, groove, ridge, inset, outset. solid is by far the most common.

### Q21. [Hard] What is the total width?

```
*, *::before, *::after { box-sizing: border-box; }
.box { width: 500px; padding: 40px; border: 10px solid; }
```

*Hint:* With the reset, border-box applies.

**Answer:** 500px exactly. The content area inside is 500 - 80 (padding) - 20 (border) = 400px.

The universal reset sets border-box. width: 500px becomes the total box width. Content shrinks to accommodate padding and border.

### Q22. [Hard] What is the effective vertical gap?

```
.parent { padding: 10px; }
.parent > .a { margin-bottom: 30px; }
.parent > .b { margin-top: 20px; }
```

*Hint:* Margins inside a padded parent.

**Answer:** 30px gap between the two children (collapse still happens -- they are siblings). The padding only affects the edges of the parent.

Padding on the parent prevents margin from escaping outside the parent. But margins between sibling children still collapse with each other.

### Q23. [Hard] What does this shadow look like?

```
box-shadow:
  0 1px 2px rgba(0,0,0,0.08),
  0 8px 24px rgba(0,0,0,0.12);
```

*Hint:* Two shadows stacked.

**Answer:** A realistic layered drop shadow: a crisp close shadow for contact, plus a softer larger shadow for ambient light diffusion.

Stacking multiple box-shadows mimics how real shadows work: close shadows where the object meets the surface, plus softer longer shadows from ambient light.

### Q24. [Hard] Why is border-box considered more intuitive than content-box?

*Hint:* Think: 'width: 300px' should mean what?

**Answer:** With border-box, width actually equals the rendered width of the box including padding and border. With content-box, adding padding or a border unexpectedly makes the box bigger, which often breaks layouts.

Beginners expect width: 300px to mean 'this element is 300px wide'. border-box delivers that behavior. content-box (the default) does not. Hence the universal reset.

### Q25. [Hard] When does margin collapse NOT happen?

*Hint:* Think about contexts that stop it.

**Answer:** Margin collapse does not happen: (1) between flex or grid children (flexbox and grid have their own spacing rules), (2) when the parent has padding or a border in between, (3) for horizontal margins, (4) for positioned elements (absolute/fixed), (5) for inline-block elements.

This is why modern layouts with flexbox and grid avoid margin collapse entirely. gap replaces margins and never collapses.

## Mixed Questions

### Q1. [Easy] Which layer is innermost?

*Hint:* Content, padding, border, margin.

**Answer:** Content.

From inside out: content, padding, border, margin. Content is the actual text or image at the center.

### Q2. [Easy] Which layer pushes OTHER elements away?

*Hint:* The outermost one.

**Answer:** Margin.

Margin is the outer whitespace. It creates the gap between neighboring elements.

### Q3. [Easy] Which layer gives an element internal breathing room?

*Hint:* Space around the content inside the border.

**Answer:** Padding.

Padding is the inner space between the content and the border. Use it to give cards and buttons breathing room.

### Q4. [Easy] Can the border layer have a background color of its own?

*Hint:* No, but the padding shows the element's background.

**Answer:** The background-color of the element fills the content AND padding areas by default, stopping at the border. The border itself has its own color.

background-color extends to the border edge. If you use background-clip: content-box, you can limit it to just the content area.

### Q5. [Easy] What does `padding: 0` do?

*Hint:* Removes padding.

**Answer:** Removes all padding from the element on all four sides.

A single 0 applies to all sides. padding: 0 zeros out any padding on the element.

### Q6. [Easy] Which value of border-radius turns a 150x150 square into a circle?

*Hint:* Half the size.

**Answer:** 75px or 50%

75px is half the side length, making it a circle. 50% is the percentage equivalent and works for any square size.

### Q7. [Medium] What is the pattern in `padding: a b c` (three values)?

*Hint:* Top, horizontal, bottom.

**Answer:** a = top, b = left and right (horizontal), c = bottom.

Three-value shorthand: top, sides (left/right shared), bottom. Rarely used.

### Q8. [Medium] What are the units of the box-shadow offsets?

*Hint:* Positive vs negative.

**Answer:** Lengths (usually px). Positive x moves right, positive y moves down. Negative moves in the opposite direction.

box-shadow: x y blur spread color. Positive values move the shadow right and down from the element.

### Q9. [Medium] Does outline-offset increase or decrease the distance from the element?

*Hint:* Positive values.

**Answer:** Positive outline-offset moves the outline further away from the element. Negative brings it closer or overlaps.

outline-offset creates a gap between the border and the outline. Great for making focus rings more visible.

### Q10. [Medium] What does margin: auto do vertically?

*Hint:* Block layout.

**Answer:** Nothing. auto for vertical margins computes to 0 in normal block layout. It only centers horizontally.

To vertically center a block element you need flexbox or grid (or absolute positioning). margin: auto only works horizontally in normal flow.

### Q11. [Medium] Which CSS property adds rounded corners?

*Hint:* Rounded.

**Answer:** `border-radius`

border-radius rounds the corners of the border (or background if no border). Works on any box, not just ones with borders.

### Q12. [Medium] What is the difference between padding and margin?

*Hint:* Inside vs outside.

**Answer:** Padding is space INSIDE the border (between content and border). Margin is space OUTSIDE the border (between the element and its neighbors). Padding inherits the element's background; margin is always transparent.

A good mnemonic: padding is the element's personal space inside, margin is the bubble around the element pushing others away.

### Q13. [Medium] Why use outline instead of border for focus rings?

*Hint:* Layout shift.

**Answer:** outline does not take up space, so the element does not shift when focused. border would add pixels on each side, causing a visible jump.

Accessibility requires visible focus indicators. Outline is perfect because it highlights focus without disturbing the layout.

### Q14. [Medium] How do cards get that 'lifted' look?

*Hint:* box-shadow and border-radius.

**Answer:** Set a background-color (usually white), add box-shadow with positive y offset and a blur, and round the corners with border-radius. Example: `background: white; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.08);`

The combination of rounded corners, soft shadow, and a clean background is the recipe for every modern card UI.

### Q15. [Medium] Why does `* { box-sizing: border-box }` appear at the top of so many stylesheets?

*Hint:* Default behavior is surprising.

**Answer:** The default box-sizing (content-box) adds padding and border ON TOP of the declared width, making elements wider than expected. The reset switches all elements to border-box so width means the total rendered width, matching intuition.

This is one of the most common CSS resets. It eliminates the surprise of layouts breaking when you add padding to a fixed-width element.

### Q16. [Hard] What is the effect?

```
.card {
  box-shadow: 0 0 0 2px #a855f7, 0 4px 12px rgba(0,0,0,0.1);
}
```

*Hint:* Zero offsets with spread.

**Answer:** The first shadow creates a 2px purple ring around the card (like an extra border that does not affect size). The second adds a subtle drop shadow.

Using spread without blur creates a solid ring that looks like a border but does not take up any space. Useful for focus states or active cards.

### Q17. [Hard] What does this border-radius do?

```
border-radius: 100px / 50px;
```

*Hint:* Slash separates horizontal and vertical radii.

**Answer:** Creates elliptical corners: 100px horizontal radius and 50px vertical radius. The corners are wider than they are tall.

The slash syntax lets you set different horizontal and vertical radii for truly elliptical corners. Most designs only need the single-value form.

### Q18. [Hard] Why does gap in flex/grid avoid margin collapse?

*Hint:* It is a different mechanism.

**Answer:** gap is a property of the flex/grid container, not a margin on the children. It creates spacing between items without using margins, so the collapse rules do not apply. It also applies uniformly to all sides between items.

Modern layouts use gap everywhere because it is simpler, more predictable, and never collapses. Margin is becoming rare for spacing between flex/grid items.

### Q19. [Hard] What is the difference between box-shadow and filter: drop-shadow()?

*Hint:* One follows the box, the other follows the shape.

**Answer:** box-shadow follows the rectangular box (affected by border-radius). filter: drop-shadow() follows the element's actual visual shape, including transparent areas in images or SVGs. drop-shadow works on pngs/svgs with transparency; box-shadow would shadow the whole rectangle.

For regular cards use box-shadow. For irregularly shaped SVGs or transparent PNGs use filter: drop-shadow().

### Q20. [Hard] What happens if you set `padding: 50%` on a 200px wide element?

*Hint:* Percentages in padding refer to the parent's width (for ALL sides, including top/bottom).

**Answer:** Both vertical AND horizontal padding compute to 50% of the parent's width (not the element's own width). On a 200px wide parent, that is 100px of padding on all four sides.

Percentage padding is always calculated against the parent's width, even for top and bottom. This is a trick used to create aspect-ratio containers before the aspect-ratio property existed.

## Multiple Choice Questions

### Q1. [Easy] Which is the CORRECT order of box model layers from inside out?

**Answer:** B

**B is correct.** From innermost to outermost: content, padding, border, margin.

### Q2. [Easy] What is the default value of box-sizing?

**Answer:** B

**B is correct.** By default, width refers to content only. Modern projects override this to border-box.

### Q3. [Easy] Which centers a 600px wide block element horizontally?

**Answer:** B

**B is correct.** margin: 0 auto with a defined width centers block elements horizontally in their parent.

### Q4. [Easy] Which border-radius value makes a 200x200 square into a circle?

**Answer:** C

**C is correct.** 50% border-radius on a square makes a perfect circle. 100% also produces the same visual result for squares.

### Q5. [Easy] What does padding do?

**Answer:** B

**B is correct.** Padding is the inner whitespace between the content and the border.

### Q6. [Easy] Which shorthand sets `padding: 10px 20px 30px 40px` in TRBL order?

**Answer:** A

**A is correct.** Four-value shorthand is clockwise: Top, Right, Bottom, Left (TRBL).

### Q7. [Easy] Which property creates a drop shadow on an element?

**Answer:** C

**C is correct.** box-shadow adds a shadow to the element's box. text-shadow is for text only.

### Q8. [Easy] What does outline NOT do that border does?

**Answer:** B

**B is correct.** Outline does not take space and doesn't support per-side values or (fully) border-radius effects.

### Q9. [Easy] Which creates an inset shadow (inside the box)?

**Answer:** B

**B is correct.** The 'inset' keyword in box-shadow reverses the direction so the shadow appears inside the element.

### Q10. [Easy] Which is valid border shorthand syntax?

**Answer:** D

**D is correct.** The border shorthand accepts width, style, and color in any order. 2px solid red is the most common convention.

### Q11. [Medium] What is the rendered width of `.box { box-sizing: content-box; width: 400px; padding: 30px; border: 2px solid; }`?

**Answer:** D

**D is correct.** content-box: 400 + 30 + 30 + 2 + 2 = 464px.

### Q12. [Medium] What is the rendered width of `.box { box-sizing: border-box; width: 400px; padding: 30px; border: 2px solid; }`?

**Answer:** A

**A is correct.** border-box: width IS the total = 400px. Padding and border eat into the content area.

### Q13. [Medium] What happens with `h1 { margin-bottom: 40px; } p { margin-top: 20px; }`?

**Answer:** B

**B is correct.** Vertical margins collapse into the larger value: 40px.

### Q14. [Medium] Which prevents margin collapse between two adjacent block elements?

**Answer:** B

**B is correct.** Any separator between the touching margins prevents collapse. Flex and grid children never collapse.

### Q15. [Medium] Which shadow produces a subtle, realistic card lift?

**Answer:** B

**B is correct.** Small y-offset, soft blur, low-opacity black gives a realistic lift. Large offsets and high contrast look cartoonish.

### Q16. [Medium] What does `margin: 10px 20px 30px` (3 values) mean?

**Answer:** C

**C is correct.** Three values: top, horizontal (left/right shared), bottom.

### Q17. [Medium] What is the benefit of a box-sizing universal reset?

**Answer:** B

**B is correct.** border-box means width and height are the total, so adding padding does not blow out your layout.

### Q18. [Medium] Which property is best for focus rings on buttons?

**Answer:** B

**B is correct.** outline does not take up space, so focus does not shift the button. Always preserve visible focus for accessibility.

### Q19. [Medium] How can negative margins be useful?

**Answer:** B

**B is correct.** Negative margins can pull an element upward onto the previous one or leftward into a sibling. Useful for overlap effects.

### Q20. [Medium] Which border style is best for subtle dividers?

**Answer:** C

**C is correct.** A thin solid line in a light color like #e5e7eb is the modern convention for subtle dividers.

### Q21. [Hard] What does box-shadow's spread value do?

**Answer:** B

**B is correct.** Positive spread makes the shadow larger than the element; negative shrinks it. Useful for creating ring outlines.

### Q22. [Hard] Which pair produces a realistic layered shadow?

**Answer:** B

**B is correct.** Two shadows -- one crisp and close, one soft and larger -- mimic how real shadows look with both close contact and ambient light.

### Q23. [Hard] What happens if you set padding-top: 100% on a child?

**Answer:** B

**B is correct.** Percentage padding ALWAYS refers to the parent's width, including top and bottom. This is the classic aspect-ratio trick.

### Q24. [Hard] Why use gap instead of margin in a flex container?

**Answer:** B

**B is correct.** gap applies evenly between items, keeps items neatly spaced without manual margin trickery, and never collapses.

### Q25. [Hard] Which border-radius value creates a pill-shaped button?

**Answer:** C

**C is correct.** A very large border-radius value caps at the element's half-height, producing fully rounded pill ends.

## Coding Challenges

### Challenge 1. Profile Card

**Difficulty:** Easy

Build a profile card for 'Aarav Sharma' with a white background, 24px padding, 16px border-radius, a subtle box-shadow, and a heading plus short bio. The card should be 300px wide and centered on the page.

**Constraints:**

- Use the box-sizing universal reset. Use margin: 0 auto to center. No flexbox.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
A centered white card with rounded corners, a drop shadow, and text inside.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  *, *::before, *::after { box-sizing: border-box; }
  body { font-family: Arial, sans-serif; background: #f3f4f6; padding: 40px 0; margin: 0; }
  .card {
    width: 300px;
    background: white;
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    margin: 0 auto;
  }
  h2 { margin: 0 0 8px; color: #1a1a2e; }
  p { margin: 0; color: #4b5563; line-height: 1.6; }
</style></head>
<body>
  <div class="card">
    <h2>Aarav Sharma</h2>
    <p>Hi! I am 15 and I love building web apps and playing cricket after school.</p>
  </div>
</body>
</html>
```

### Challenge 2. Circle Avatar

**Difficulty:** Easy

Create a 120x120 div with initials 'PS' centered inside. Make it a perfect circle using border-radius, give it a purple-to-cyan gradient background, and center the white bold initials.

**Constraints:**

- Use border-radius: 50%. Use flex for centering the initials.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
A round gradient avatar with centered initials.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  body { font-family: Arial, sans-serif; background: #f9fafb; padding: 60px; text-align: center; }
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(135deg, #a855f7, #06b6d4);
    color: white;
    font-size: 44px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    box-shadow: 0 10px 25px rgba(168, 85, 247, 0.3);
  }
</style></head>
<body>
  <div class="avatar">PS</div>
  <p>Priya Sharma</p>
</body>
</html>
```

### Challenge 3. Centered Container

**Difficulty:** Medium

Build a page with a centered 800px max-width container holding a heading and two paragraphs. Add 40px horizontal padding inside the container. Use a light gray page background and white container background.

**Constraints:**

- Use max-width + margin: 0 auto. Box-sizing reset at top. No flexbox.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
A centered white container on a gray page with comfortable internal padding.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  *, *::before, *::after { box-sizing: border-box; }
  body { font-family: Arial, sans-serif; background: #e5e7eb; margin: 0; padding: 40px 0; }
  .container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 30px 40px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  }
  h1 { margin: 0 0 16px; color: #a855f7; }
  p { line-height: 1.6; color: #4b5563; }
</style></head>
<body>
  <div class="container">
    <h1>My First Centered Container</h1>
    <p>This container is 800px maximum width with margin 0 auto, so it stays centered regardless of viewport size. By Ishaan Reddy.</p>
    <p>The box-sizing reset makes width and padding behave predictably together. Resize the window to see the container stay centered.</p>
  </div>
</body>
</html>
```

### Challenge 4. Pill-Shaped Button with Focus Ring

**Difficulty:** Medium

Create a pill-shaped purple button with white text, 14px vertical padding, 32px horizontal padding. When focused, show a visible outline 3px offset from the button so it does not shift. Add a subtle shadow.

**Constraints:**

- Use large border-radius. Use outline with outline-offset for focus. Do not remove the outline without replacing it.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
A rounded purple button. Tab to it to see a focus ring without the button moving.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  *, *::before, *::after { box-sizing: border-box; }
  body { font-family: Arial, sans-serif; padding: 60px; background: #f3f4f6; text-align: center; }
  .btn {
    padding: 14px 32px;
    background: #a855f7;
    color: white;
    border: none;
    border-radius: 9999px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(168, 85, 247, 0.3);
  }
  .btn:focus {
    outline: 3px solid #06b6d4;
    outline-offset: 3px;
  }
</style></head>
<body>
  <button class="btn">Get Started</button>
  <p>Press Tab to focus the button by Kavya Patel.</p>
</body>
</html>
```

### Challenge 5. Card Grid with Shadows

**Difficulty:** Hard

Build a grid of 4 cards side by side. Each card has padding, rounded corners, a layered box-shadow (two stacked shadows for realism), and a heading plus description. Use flex for the grid layout.

**Constraints:**

- Use flex with gap. Use 2 stacked box-shadows. Box-sizing reset.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
A row of 4 elegant cards with realistic layered shadows.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  *, *::before, *::after { box-sizing: border-box; }
  body { font-family: Arial, sans-serif; background: #f3f4f6; padding: 40px; margin: 0; }
  .grid { display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; }
  .card {
    width: 220px;
    padding: 24px;
    background: white;
    border-radius: 14px;
    box-shadow:
      0 1px 3px rgba(0, 0, 0, 0.08),
      0 10px 30px rgba(0, 0, 0, 0.06);
  }
  .icon {
    width: 48px; height: 48px; border-radius: 12px;
    background: linear-gradient(135deg, #a855f7, #06b6d4);
    margin-bottom: 12px;
  }
  h3 { margin: 0 0 8px; color: #1a1a2e; font-size: 18px; }
  p  { margin: 0; color: #6b7280; line-height: 1.5; font-size: 14px; }
</style></head>
<body>
  <div class="grid">
    <div class="card"><div class="icon"></div><h3>Fast</h3><p>Load pages in under one second for every student.</p></div>
    <div class="card"><div class="icon"></div><h3>Secure</h3><p>Your data is encrypted at rest and in transit.</p></div>
    <div class="card"><div class="icon"></div><h3>Friendly</h3><p>Designed for learners age 10-18 by real teachers.</p></div>
    <div class="card"><div class="icon"></div><h3>Proven</h3><p>Over 500 students graduated with real projects.</p></div>
  </div>
</body>
</html>
```

### Challenge 6. Stylized Product Card

**Difficulty:** Hard

Build a product card for 'Coding Kit' with: rounded top corners only (top image placeholder), 24px padding in the body, a title, a paragraph, a price row with the current and old prices, and a full-width rounded button. Add a layered shadow.

**Constraints:**

- Use individual border-radius properties. Use overflow: hidden or border-radius on container. Layered shadow.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
A card with an image area that has rounded top corners only, details below, and a button.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  *, *::before, *::after { box-sizing: border-box; }
  body { font-family: Arial, sans-serif; background: #f3f4f6; padding: 40px; margin: 0; display: flex; justify-content: center; }
  .card {
    width: 300px;
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow:
      0 1px 3px rgba(0, 0, 0, 0.08),
      0 20px 40px rgba(0, 0, 0, 0.1);
  }
  .image {
    height: 180px;
    background: linear-gradient(135deg, #a855f7, #06b6d4);
    color: white;
    display: flex; align-items: center; justify-content: center;
    font-size: 22px; font-weight: bold;
  }
  .body { padding: 24px; }
  h3 { margin: 0 0 8px; color: #1a1a2e; }
  .desc { color: #4b5563; font-size: 14px; line-height: 1.5; margin: 0 0 16px; }
  .prices { display: flex; align-items: baseline; gap: 10px; margin-bottom: 16px; }
  .now { font-size: 26px; font-weight: bold; color: #a855f7; }
  .was { font-size: 16px; color: #9ca3af; text-decoration: line-through; }
  .btn {
    display: block;
    width: 100%;
    padding: 12px;
    background: #1a1a2e;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }
</style></head>
<body>
  <div class="card">
    <div class="image">Coding Kit</div>
    <div class="body">
      <h3>Beginner Coding Kit</h3>
      <p class="desc">Everything Meera needs to start coding: 12 lessons, exercises, and a cheat sheet PDF.</p>
      <div class="prices">
        <span class="now">Rs 1,499</span>
        <span class="was">Rs 2,499</span>
      </div>
      <button class="btn">Add to Cart</button>
    </div>
  </div>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/the-box-model/*
