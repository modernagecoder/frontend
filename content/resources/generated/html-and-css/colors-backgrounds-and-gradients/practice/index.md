---
title: "Practice: Colors, Backgrounds, and Gradients"
description: "58 practice problems for Colors, Backgrounds, and Gradients in HTML and CSS"
slug: colors-backgrounds-and-gradients-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/colors-backgrounds-and-gradients/practice/
category: "HTML and CSS"
---
# Practice: Colors, Backgrounds, and Gradients

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] What color is produced by `#f00`?

*Hint:* 3-digit hex shorthand doubles each digit.

**Answer:** Pure red. `#f00` expands to `#ff0000`.

3-digit shorthand: each digit is doubled. f becomes ff, 0 becomes 00. So #f00 is #ff0000 which is pure red.

### Q2. [Easy] Which color is this?

```
color: rgb(0, 255, 0);
```

*Hint:* RGB order is red, green, blue.

**Answer:** Pure green.

Red is 0, green is max (255), blue is 0. This is pure green, equivalent to #00ff00 or the named color 'lime'.

### Q3. [Easy] What does the alpha value in `rgba(0, 0, 0, 0.5)` mean?

*Hint:* Alpha controls transparency.

**Answer:** The color is 50% opaque (semi-transparent).

Alpha ranges from 0 (fully transparent) to 1 (fully opaque). 0.5 is halfway -- 50% transparent black.

### Q4. [Easy] In `hsl(270, 90%, 65%)`, what does 270 represent?

*Hint:* HSL stands for Hue, Saturation, Lightness.

**Answer:** The hue -- a position on the color wheel (0-360). 270 is purple.

Hue goes from 0 (red) to 120 (green) to 240 (blue) back to 360 (red). 270 sits between blue (240) and red (360), giving purple.

### Q5. [Easy] What does `background-size: cover` do?

*Hint:* Think about how the image fills the container.

**Answer:** Scales the image to fully fill the container, cropping parts that do not fit.

cover preserves aspect ratio and fills the entire container. Anything that does not fit is cropped. Contrast with 'contain' which fits the entire image but may leave empty space.

### Q6. [Easy] What is the default value of `background-repeat`?

*Hint:* Without setting it, images tile by default.

**Answer:** `repeat` -- the image tiles in both directions.

By default CSS repeats backgrounds. You almost always want `no-repeat` for hero images and banners.

### Q7. [Easy] How do you create a linear gradient from purple to cyan going left to right?

*Hint:* Use the direction keyword 'to right'.

**Answer:** `background: linear-gradient(to right, #a855f7, #06b6d4);`

'to right' means the gradient starts on the left and ends on the right. Colors are listed in order from start to end.

### Q8. [Easy] What does the 45deg angle mean in `linear-gradient(45deg, red, blue)`?

*Hint:* 0deg points up, angles go clockwise.

**Answer:** The gradient goes from bottom-left to top-right at a 45-degree angle.

In CSS gradients, 0deg points up (to top), 90deg points right, 180deg points down, 270deg points left. 45deg is halfway between up and right -- top-right diagonal.

### Q9. [Easy] Does `border: 2px solid currentColor` work?

*Hint:* currentColor refers to the color property.

**Answer:** Yes. The border uses whatever value `color` is set to.

currentColor is a keyword that evaluates to the current value of the color property. It is useful for borders, SVG strokes, and outlines that should match the text color.

### Q10. [Easy] What is the difference between `contain` and `cover` for background-size?

*Hint:* One crops, one leaves space.

**Answer:** `cover` scales the image to fill the entire container, cropping anything that does not fit. `contain` scales the image so the entire image fits inside the container, which may leave empty space.

Use cover for hero sections (you want the image to fill everything). Use contain when the full image must be visible, like a logo in a header.

### Q11. [Medium] What color does `hsl(0, 0%, 50%)` produce?

*Hint:* Saturation is 0%.

**Answer:** Medium gray.

When saturation is 0%, the color is grayscale regardless of the hue. Lightness of 50% gives medium gray (#808080).

### Q12. [Medium] What is the result?

```
.box {
  background: linear-gradient(to right, #a855f7 0%, #a855f7 50%, #06b6d4 50%, #06b6d4 100%);
}
```

*Hint:* Both stops at 50% create a hard edge.

**Answer:** A hard-edge two-color split: purple on the left half, cyan on the right half, with no blend.

When two stops share the same position (both at 50%), there is no transition between them -- creating a sharp line instead of a smooth gradient.

### Q13. [Medium] What is the full expansion of `#09c`?

*Hint:* Each digit doubles.

**Answer:** `#0099cc`

3-digit hex doubles each character: 0 becomes 00, 9 becomes 99, c becomes cc. So #09c = #0099cc.

### Q14. [Medium] What does this shorthand do?

```
background: #f3f4f6 url('bg.jpg') no-repeat center / cover;
```

*Hint:* The shorthand order is color image repeat position / size.

**Answer:** Sets background color to #f3f4f6, loads bg.jpg as the image, prevents repeating, centers it, and sizes it with cover.

The / separates position and size in the shorthand. Everything before / is position (center), everything after is size (cover).

### Q15. [Medium] What is the result?

```
.hero {
  background:
    linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
    url('photo.jpg') no-repeat center / cover;
}
```

*Hint:* Multiple backgrounds stack. First is on top.

**Answer:** The photo is displayed as a centered covered background with a 60% opaque black overlay on top, darkening it for text readability.

This is the hero overlay pattern. The dark gradient sits on top of the image, making any text placed over it white-readable.

### Q16. [Medium] What shape does `radial-gradient(circle, red, blue)` create?

*Hint:* radial-gradient starts from a center point.

**Answer:** A red center fading outward to blue edges in a circular pattern.

The 'circle' shape keyword forces a circular gradient (otherwise ellipses stretch with the container). Red is at the center, blue at the far edge.

### Q17. [Medium] What does `background-attachment: fixed` do?

*Hint:* It changes how the image moves during scrolling.

**Answer:** The background image stays fixed relative to the viewport and does not scroll with the page, creating a parallax effect.

Normally backgrounds scroll with their element. Fixed pins them to the viewport so the content scrolls over a stationary background.

### Q18. [Medium] What is logged as the computed background-color?

```
.x { background: hsl(120, 100%, 50%); }
Hi

```

*Hint:* Computed values are returned in rgb format.

**Answer:** `rgb(0, 255, 0)`

Even though the source was HSL, browsers resolve it to rgb in computed styles. hsl(120, 100%, 50%) is pure green = rgb(0, 255, 0).

### Q19. [Medium] How would you write red at 30% opacity using HSLA?

*Hint:* Red is hue 0, full saturation, 50% lightness.

**Answer:** `hsla(0, 100%, 50%, 0.3)`

Hue 0 = red. Saturation 100% = fully saturated. Lightness 50% = normal brightness. Alpha 0.3 = 30% opaque.

### Q20. [Medium] What is the difference between `opacity: 0.5` and `background: rgba(0,0,0,0.5)`?

*Hint:* Think about what gets faded.

**Answer:** `opacity: 0.5` fades the entire element including all text and children. `rgba` only makes the background semi-transparent while keeping text fully opaque.

Always use rgba/hsla for overlays where you want readable text on top. Use opacity only when you want the whole element to fade.

### Q21. [Hard] What is the effect?

```
.stripes {
  background: repeating-linear-gradient(45deg, #a855f7 0 20px, #06b6d4 20px 40px);
}
```

*Hint:* repeating-linear-gradient loops the pattern.

**Answer:** Diagonal purple and cyan stripes at 45 degrees, each 20px wide, repeating across the box.

repeating-linear-gradient repeats the given color stops across the element, creating stripe patterns. Each stop's range (0 to 20px, 20px to 40px) defines the stripe width.

### Q22. [Hard] What happens?

```
.box {
  color: #06b6d4;
  border: 3px solid currentColor;
}
.box:hover { color: #f59e0b; }
```

*Hint:* currentColor follows the color property.

**Answer:** Initially the text and border are cyan. On hover, both change to amber because currentColor follows the color property.

Because border uses currentColor, changing color on hover also updates the border. This avoids writing two rules for color and border-color.

### Q23. [Hard] What does this create?

```
background: conic-gradient(from 45deg, red, yellow, green, cyan, blue, magenta, red);
```

*Hint:* conic-gradient rotates colors around the center. 'from' sets the start angle.

**Answer:** A rainbow color wheel starting at 45 degrees (top-right) and rotating around the center.

conic-gradient is perfect for color wheels and pie charts. The 'from' keyword rotates where the gradient starts. Ending with the same color (red) as it started creates a smooth full rotation.

### Q24. [Hard] What is the difference between `background-size: contain` and `background-size: 100% 100%`?

*Hint:* One preserves aspect ratio, one does not.

**Answer:** `contain` preserves the image's aspect ratio while fitting inside the container (may leave empty space). `100% 100%` stretches the image to exactly fill the container, possibly distorting it.

Use contain when you need the full image visible. Use 100% 100% only if distortion does not matter. Use cover when you want to fill without distortion but can accept cropping.

### Q25. [Hard] Why do designers often prefer HSL over hex for building color palettes?

*Hint:* Think about making a lighter or darker shade of the same color.

**Answer:** HSL lets you tweak a color easily: change lightness for variants (darker/lighter), change saturation for muted versions, keep the same hue for family consistency. With hex, you have to guess new values or use a color picker. HSL is more intuitive for building design systems.

Example: primary hsl(270, 90%, 65%), hover hsl(270, 90%, 55%) (darker), disabled hsl(270, 30%, 65%) (desaturated). All three share the same hue family and are trivially derived.

## Mixed Questions

### Q1. [Easy] What color is `#000000`?

*Hint:* All channels are 0.

**Answer:** Pure black.

All RGB channels are 0, which means no light of any color. That is black.

### Q2. [Easy] What color is `#ffffff`?

*Hint:* All channels are max.

**Answer:** Pure white.

All RGB channels are ff (255), which means full intensity of red, green, and blue combined = white.

### Q3. [Easy] Which format lets you set transparency: rgb or rgba?

*Hint:* The extra letter stands for alpha.

**Answer:** rgba. The 'a' is alpha (opacity).

rgba(red, green, blue, alpha) adds a fourth value for opacity from 0 (transparent) to 1 (opaque).

### Q4. [Easy] What does `background-position: top right` do?

*Hint:* Two values: vertical then horizontal? Or horizontal then vertical?

**Answer:** Places the background image at the top-right corner of the container.

background-position accepts vertical and horizontal keywords in either order for named values: 'top right' and 'right top' mean the same thing.

### Q5. [Easy] What is the shorthand for `background-image: url(pic.jpg); background-repeat: no-repeat;`?

*Hint:* Use the background shorthand.

**Answer:** `background: url(pic.jpg) no-repeat;`

The background shorthand accepts image and repeat values (and more) in a single declaration.

### Q6. [Medium] What gradient direction does `180deg` point?

*Hint:* 0deg is to top.

**Answer:** Downward (to bottom).

In CSS gradients: 0deg = to top, 90deg = to right, 180deg = to bottom, 270deg = to left. 180deg rotates half a circle from up to down.

### Q7. [Medium] How do you make a gradient overlay over an image in one background declaration?

*Hint:* Multiple backgrounds are comma-separated. Overlay goes first.

**Answer:** `background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('img.jpg') center/cover no-repeat;`

The gradient is listed first so it sits on top. The image is second and acts as the bottom layer. Use rgba in the gradient for the darkening effect.

### Q8. [Medium] What does `background-size: 200px 100px` do?

*Hint:* Two values = width and height.

**Answer:** Sets the background image to exactly 200px wide and 100px tall.

When two values are given, the first is width and the second is height. This ignores aspect ratio and may distort the image.

### Q9. [Medium] What is the computed color for `hsl(210, 100%, 50%)`?

*Hint:* Hue 210 is between green (120) and blue (240).

**Answer:** A bright blue with a slight cyan tint -- roughly rgb(0, 128, 255).

Hue 210 is closer to blue (240) than to cyan (180), giving a bright azure blue. At full saturation and 50% lightness, you get the pure version of that hue.

### Q10. [Medium] What does this rule do?

```
.hero { background-position: 50% 80%; }
```

*Hint:* Percentages in background-position are relative to the container minus image.

**Answer:** Centers the image horizontally and positions it 80% from the top (low down).

50% horizontally = center. 80% vertically means the point 80% down the image aligns with 80% down the container. This is useful for keeping faces visible in portrait photos.

### Q11. [Medium] What does this gradient look like?

```
background: linear-gradient(to bottom right, #a855f7, #ec4899, #f59e0b);
```

*Hint:* Three colors and a diagonal direction.

**Answer:** A diagonal gradient from top-left to bottom-right with purple at the top-left, pink in the middle, and amber at the bottom-right.

With three colors, they are spaced evenly (0%, 50%, 100%) by default. 'to bottom right' goes from the top-left corner to the bottom-right corner.

### Q12. [Medium] When would you choose `background-size: contain` over `cover`?

*Hint:* Think about which images must be shown in full.

**Answer:** Use contain when the whole image must always be visible (logos, product photos, illustrations). Use cover when the image is decorative and can be cropped (hero backgrounds, banner photos).

Cover fills the container by cropping the image edges. Contain fits the entire image with no cropping but may leave empty strips of container showing.

### Q13. [Medium] Why is HSL easier to tweak than hex?

*Hint:* Imagine making 'slightly lighter blue'.

**Answer:** In HSL, you just change the lightness value (e.g. 50% to 60%) to get a lighter version. In hex, you have to guess a new combination of digits, which is not intuitive.

HSL maps to human perception (hue/saturation/lightness) while hex is just arbitrary RGB values in hex notation. Designers adjust lightness constantly.

### Q14. [Medium] Why would you use `currentColor` for a button border?

*Hint:* What happens on hover when text color changes?

**Answer:** The border automatically matches the text color, even when you change color on hover. One property (color) controls both text and border, reducing duplicate code.

Without currentColor you would need to set both color and border-color on hover. With currentColor, the border follows color automatically.

### Q15. [Hard] What does this shorthand set?

```
background: #0f172a url('stars.png') repeat fixed top left;
```

*Hint:* Parse each piece: color, image, repeat, attachment, position.

**Answer:** Dark navy background color, stars.png image that tiles in both directions, stays fixed as the page scrolls, positioned starting at the top-left.

The shorthand accepts color, image, repeat, attachment, and position all at once. Perfect for a starfield background that does not move when scrolling.

### Q16. [Hard] What is the difference between these two gradients?

```
a: linear-gradient(to right, red, blue);
b: linear-gradient(90deg, red, blue);
```

*Hint:* to right = ?deg.

**Answer:** They are identical. 'to right' and '90deg' both mean the gradient runs from left to right.

In CSS gradients: to top = 0deg, to right = 90deg, to bottom = 180deg, to left = 270deg. Both syntaxes are valid.

### Q17. [Hard] What does `radial-gradient(circle at 20% 30%, white, black)` do?

*Hint:* at sets the center point.

**Answer:** Creates a circular radial gradient centered at 20% from the left and 30% from the top, with white at the center fading to black at the edges.

The 'at' keyword positions the gradient center. By default, radial gradients are centered, but 'at' lets you place the origin anywhere.

### Q18. [Hard] What color is `hsl(0, 50%, 90%)`?

*Hint:* High lightness means pale.

**Answer:** A very pale pink (desaturated light red).

Hue 0 is red. 50% saturation makes it muted. 90% lightness makes it very light. Together: a soft, pale pink like a rose petal.

### Q19. [Hard] Why put the overlay gradient FIRST in a multiple background declaration?

*Hint:* Layer order.

**Answer:** In CSS multiple backgrounds, the first one listed is painted on top of the others. To darken an image with an overlay, the overlay must be above the image in the stack, so it comes first in the declaration.

This is counter-intuitive because normally 'first' means 'bottom'. In backgrounds, first means 'top layer'. Put your overlays first and the base image last.

### Q20. [Hard] How would you create a glassmorphism effect using background colors?

*Hint:* Use rgba + backdrop-filter blur.

**Answer:** Use a semi-transparent white or dark background like `background: rgba(255,255,255,0.1);` combined with `backdrop-filter: blur(10px);` and a subtle border like `border: 1px solid rgba(255,255,255,0.2);`.

Glassmorphism relies on semi-transparent backgrounds and backdrop blur to create a frosted glass look. The content behind shows through but is blurred.

## Multiple Choice Questions

### Q1. [Easy] Which is the correct hex shorthand for red?

**Answer:** B

**B is correct.** #f00 is the 3-digit shorthand for #ff0000 (pure red). Each digit is doubled.

### Q2. [Easy] What is the alpha value in rgba()?

**Answer:** A

**A is correct.** Alpha controls opacity: 0 is fully transparent, 1 is fully opaque.

### Q3. [Easy] What does HSL stand for?

**Answer:** C

**C is correct.** HSL = Hue (color wheel position 0-360), Saturation (0-100%), Lightness (0-100%).

### Q4. [Easy] Which background-size value fills the container, cropping if needed?

**Answer:** C

**C is correct.** cover fills the container and preserves aspect ratio, cropping whatever does not fit.

### Q5. [Easy] What is the default background-repeat value?

**Answer:** B

**B is correct.** By default CSS tiles backgrounds in both directions. Use no-repeat to stop this.

### Q6. [Easy] Which creates a linear gradient from left to right?

**Answer:** B

**B is correct.** 'to right' means starting from the left, ending on the right. Same as 90deg.

### Q7. [Easy] How do you stop a background image from tiling?

**Answer:** C

**C is correct.** background-repeat: no-repeat disables tiling. 'none' is not a valid value.

### Q8. [Easy] Which function creates a circular gradient from the center outward?

**Answer:** B

**B is correct.** radial-gradient creates a gradient that starts from a point and spreads outward.

### Q9. [Easy] Which color format supports transparency?

**Answer:** C

**C is correct.** rgba and hsla have a 4th alpha value. Modern browsers also accept 8-digit hex and rgb() with a slash for alpha.

### Q10. [Easy] What does `currentColor` refer to?

**Answer:** B

**B is correct.** currentColor always refers to whatever the element's color property is currently set to.

### Q11. [Medium] In multiple backgrounds separated by commas, which layer is on top?

**Answer:** B

**B is correct.** In CSS multiple backgrounds, the first one in the comma-separated list is painted on top.

### Q12. [Medium] Which angle equals `to right`?

**Answer:** C

**C is correct.** 0deg = to top, 90deg = to right, 180deg = to bottom, 270deg = to left.

### Q13. [Medium] Why use rgba instead of opacity for a dark overlay?

**Answer:** B

**B is correct.** opacity affects everything inside the element. rgba only makes the background translucent while keeping children fully visible.

### Q14. [Medium] Which creates a parallax scroll effect?

**Answer:** B

**B is correct.** background-attachment: fixed keeps the background stationary while the page scrolls.

### Q15. [Medium] In the hex #a855f7, what does the 'f7' represent?

**Answer:** C

**C is correct.** Hex order is #RRGGBB. The last two digits (f7) are the blue channel.

### Q16. [Medium] What does hsl(0, 0%, 100%) produce?

**Answer:** C

**C is correct.** Any hue with 0% saturation and 100% lightness is pure white.

### Q17. [Medium] Which gradient is best suited for a pie chart?

**Answer:** C

**C is correct.** conic-gradient rotates colors around a center, which matches pie chart slices exactly.

### Q18. [Medium] What does this background-size value do: `background-size: 200px 100px;`?

**Answer:** B

**B is correct.** Two explicit values set width and height exactly, which may stretch or squash the image.

### Q19. [Medium] How would you create horizontal stripes with a repeating gradient?

**Answer:** B

**B is correct.** 'to bottom' stacks the stripes vertically, creating horizontal bands. Each color stop defines one stripe width.

### Q20. [Medium] What is the shorthand for background: color image no-repeat center / cover?

**Answer:** A

**A is correct.** The correct shorthand order is color, image, repeat, position / size. The / separates position from size.

### Q21. [Hard] You want to darken a hero image with a 50% black overlay. Which is correct?

**Answer:** C

**C is correct.** A solid black gradient at 0.5 alpha acts as an overlay on top of the image. rgba colors cannot be layered directly on images in background shorthand.

### Q22. [Hard] What does `hsl(270, 90%, 65%)` look like compared to `hsl(270, 90%, 40%)`?

**Answer:** B

**B is correct.** Both have the same hue (270 = purple) and saturation (90%). Only lightness differs: 65% is lighter, 40% is darker.

### Q23. [Hard] Which is NOT a valid way to specify a color in CSS?

**Answer:** D

**D is correct.** color() is not a standard CSS color function. The others are all valid. Modern rgb/hsl allow space-separated syntax too.

### Q24. [Hard] Why might `background-size: contain` leave empty strips?

**Answer:** B

**B is correct.** contain always shows the whole image with aspect ratio preserved. When container and image have different proportions, you see empty strips on two sides.

### Q25. [Hard] What is the advantage of using currentColor for borders?

**Answer:** B

**B is correct.** currentColor links border-color to the color property. Change color on hover and the border changes with it, eliminating duplicate rules.

## Coding Challenges

### Challenge 1. Rainbow Text

**Difficulty:** Easy

Create a heading that says 'Hello, Aarav!' with a rainbow gradient applied to the text (not the background). Use background-clip: text and a linear gradient.

**Constraints:**

- Use background-image with a linear-gradient, background-clip: text, and color: transparent to make the gradient appear through the text.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
The heading text shows in a red-orange-yellow-green-blue-purple gradient.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  body { font-family: Arial, sans-serif; background: #0f172a; padding: 60px; text-align: center; }
  h1 {
    font-size: 80px;
    background: linear-gradient(90deg, #ff0080, #ff8c00, #ffd700, #00ff00, #00bfff, #8a2be2);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
</style></head>
<body>
  <h1>Hello, Aarav!</h1>
</body>
</html>
```

### Challenge 2. Color Palette Card

**Difficulty:** Easy

Create a card that displays 5 color swatches. Each swatch should show the color and its hex code underneath. Use #a855f7, #06b6d4, #f59e0b, #ec4899, #10b981.

**Constraints:**

- Use flex layout and inline-block. No JavaScript.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
A horizontal row of 5 colored squares with hex codes underneath.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  body { font-family: Arial, sans-serif; padding: 40px; background: #f9fafb; }
  .palette { display: flex; gap: 12px; }
  .swatch { text-align: center; font-family: monospace; font-size: 12px; }
  .swatch div {
    width: 90px;
    height: 90px;
    border-radius: 10px;
    margin-bottom: 6px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }
</style></head>
<body>
  <h2>Priya's Palette</h2>
  <div class="palette">
    <div class="swatch"><div style="background:#a855f7"></div>#a855f7</div>
    <div class="swatch"><div style="background:#06b6d4"></div>#06b6d4</div>
    <div class="swatch"><div style="background:#f59e0b"></div>#f59e0b</div>
    <div class="swatch"><div style="background:#ec4899"></div>#ec4899</div>
    <div class="swatch"><div style="background:#10b981"></div>#10b981</div>
  </div>
</body>
</html>
```

### Challenge 3. Hero Section with Overlay

**Difficulty:** Medium

Build a full-viewport hero section with a background image (use any public image URL), a dark gradient overlay (from 0.7 to 0.3 top to bottom), centered white heading that says 'Welcome, Kavya', a subtitle, and a button.

**Constraints:**

- Use multiple backgrounds in one declaration. No JavaScript. Use flexbox for centering.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
Full-screen hero with a darkened background image and centered text.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: Arial, sans-serif; }
  .hero {
    height: 100vh;
    background:
      linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.3)),
      url('https://picsum.photos/1600/900?random=1') no-repeat center / cover;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 30px;
  }
  .hero h1 { font-size: 64px; margin-bottom: 16px; }
  .hero p { font-size: 20px; margin-bottom: 30px; max-width: 500px; }
  .cta { padding: 14px 36px; background: #a855f7; color: white; border: none; border-radius: 50px; font-size: 16px; cursor: pointer; }
</style></head>
<body>
  <section class="hero">
    <h1>Welcome, Kavya</h1>
    <p>Discover amazing courses designed just for you.</p>
    <button class="cta">Get Started</button>
  </section>
</body>
</html>
```

### Challenge 4. Gradient Button Collection

**Difficulty:** Medium

Create four gradient buttons side by side. Each uses a different gradient: purple-to-pink, cyan-to-blue, orange-to-red, green-to-teal. All buttons should have white text, rounded corners, and a shadow.

**Constraints:**

- Use linear-gradient. Use flex for layout. No JavaScript.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
Four horizontally arranged rounded buttons, each with a different gradient.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  body { font-family: Arial, sans-serif; background: #0f172a; padding: 60px; }
  .group { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
  button {
    padding: 14px 32px;
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
  .btn-1 { background: linear-gradient(90deg, #a855f7, #ec4899); }
  .btn-2 { background: linear-gradient(90deg, #06b6d4, #3b82f6); }
  .btn-3 { background: linear-gradient(90deg, #f97316, #ef4444); }
  .btn-4 { background: linear-gradient(90deg, #10b981, #14b8a6); }
</style></head>
<body>
  <div class="group">
    <button class="btn-1">Purple Pink</button>
    <button class="btn-2">Ocean</button>
    <button class="btn-3">Sunset</button>
    <button class="btn-4">Forest</button>
  </div>
</body>
</html>
```

### Challenge 5. Radial Spotlight Card

**Difficulty:** Hard

Create a dark profile card for 'Ishaan Sharma'. The card should have a radial-gradient spotlight glowing from the top-left corner in purple, fading to the dark base color. Include a circular avatar placeholder, name, and title.

**Constraints:**

- Use radial-gradient with 'at' keyword. Use border-radius: 50% for the avatar. No JavaScript.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
A dark card with a glowing purple spotlight effect in the top-left corner, showing the profile.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  body { font-family: Arial, sans-serif; background: #020617; padding: 60px; display: flex; justify-content: center; }
  .card {
    width: 340px;
    padding: 40px 30px;
    border-radius: 16px;
    background:
      radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.45), transparent 60%),
      #0f172a;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(135deg, #a855f7, #06b6d4);
    margin: 0 auto 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-weight: bold;
    color: white;
  }
  h3 { margin: 0 0 6px; font-size: 22px; }
  p { margin: 0; color: #94a3b8; font-size: 14px; }
</style></head>
<body>
  <div class="card">
    <div class="avatar">IS</div>
    <h3>Ishaan Sharma</h3>
    <p>Student of the Month</p>
  </div>
</body>
</html>
```

### Challenge 6. Conic Pie Chart

**Difficulty:** Hard

Use conic-gradient to build a pie chart of weekly study time: Coding 40%, Maths 30%, Reading 20%, Play 10%. Show a legend with matching colors.

**Constraints:**

- Use conic-gradient with hard stops (same percentage for end of one color and start of next). Circle uses border-radius: 50%.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
A circular pie chart with 4 slices and a labeled legend.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head><style>
  body { font-family: Arial, sans-serif; padding: 40px; text-align: center; background: #f9fafb; }
  .pie {
    width: 260px;
    height: 260px;
    border-radius: 50%;
    margin: 20px auto;
    background: conic-gradient(
      #a855f7 0 40%,
      #06b6d4 40% 70%,
      #f59e0b 70% 90%,
      #ec4899 90% 100%
    );
    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
  }
  .legend { display: flex; justify-content: center; flex-wrap: wrap; gap: 16px; font-size: 14px; }
  .item { display: flex; align-items: center; gap: 6px; }
  .dot { width: 16px; height: 16px; border-radius: 50%; }
</style></head>
<body>
  <h2>Riya's Study Week</h2>
  <div class="pie"></div>
  <div class="legend">
    <div class="item"><span class="dot" style="background:#a855f7"></span>Coding 40%</div>
    <div class="item"><span class="dot" style="background:#06b6d4"></span>Maths 30%</div>
    <div class="item"><span class="dot" style="background:#f59e0b"></span>Reading 20%</div>
    <div class="item"><span class="dot" style="background:#ec4899"></span>Play 10%</div>
  </div>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/colors-backgrounds-and-gradients/*
