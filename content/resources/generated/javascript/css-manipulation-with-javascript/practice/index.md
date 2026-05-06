---
title: "Practice: CSS Manipulation with JavaScript"
description: "58 practice problems for CSS Manipulation with JavaScript in JavaScript"
slug: css-manipulation-with-javascript-practice
canonical: https://learn.modernagecoders.com/resources/javascript/css-manipulation-with-javascript/practice/
category: "JavaScript"
---
# Practice: CSS Manipulation with JavaScript

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] What is logged?

```
Hello

const box = document.getElementById("box");
console.log(box.style.color);
console.log(box.style.fontSize);

```

*Hint:* element.style reads inline styles.

**Answer:** `red`
`20px`

Both color and fontSize are set as inline styles on the element. `element.style` can read them.

### Q2. [Easy] What is logged?

```
#box { background-color: blue; width: 200px; }
Hello

const box = document.getElementById("box");
console.log(box.style.backgroundColor);
console.log(box.style.width);

```

*Hint:* element.style only reads inline styles, not styles from a stylesheet.

**Answer:** `` (empty string)
`` (empty string)

The styles are in a stylesheet, not inline. `element.style` only reads inline styles and returns empty strings for stylesheet-defined properties.

### Q3. [Easy] What is logged?

```
#box { background-color: blue; width: 200px; }
Hello

const computed = getComputedStyle(document.getElementById("box"));
console.log(computed.width);
console.log(computed.backgroundColor);

```

*Hint:* getComputedStyle reads the actual computed values from all CSS sources.

**Answer:** `200px`
`rgb(0, 0, 255)`

`getComputedStyle` returns the actual computed values. Width is "200px". Blue is returned as `rgb(0, 0, 255)` because computed values use resolved formats.

### Q4. [Easy] What class does the div have after this code?

```
Hello

const box = document.getElementById("box");
box.classList.replace("card", "panel");
console.log(box.className);

```

*Hint:* replace swaps one class for another.

**Answer:** `panel`

`classList.replace("card", "panel")` removes "card" and adds "panel" in one step. The div now has class "panel".

### Q5. [Medium] What is logged?

```

  :root { --color: #a855f7; }
  #box { color: var(--color); }

Hello

const root = document.documentElement;
const value = getComputedStyle(root).getPropertyValue("--color");
console.log(value.trim());

root.style.setProperty("--color", "#06b6d4");
const newValue = getComputedStyle(root).getPropertyValue("--color");
console.log(newValue.trim());

```

*Hint:* setProperty changes the CSS variable. getPropertyValue reads it.

**Answer:** `#a855f7`
`#06b6d4`

First, the CSS variable --color is #a855f7. After `setProperty`, it changes to #06b6d4. All elements using var(--color) update automatically.

### Q6. [Medium] What happens?

```

  .box { width: 100px; height: 100px; background: #a855f7; transition: all 0.5s; }
  .box.big { width: 300px; background: #06b6d4; }

document.getElementById("box").classList.add("big");

```

*Hint:* Adding the 'big' class changes width and background. The transition animates the change.

**Answer:** The box smoothly animates from 100px wide (purple) to 300px wide (teal) over 0.5 seconds.

Adding the "big" class changes the width and background. Because the .box rule has `transition: all 0.5s`, both properties animate smoothly instead of changing instantly.

### Q7. [Medium] What is logged?

```
Hello

const box = document.getElementById("box");
console.log(box.style.cssText);
box.style.cssText = "background: blue; font-size: 20px;";
console.log(box.style.color);
console.log(box.style.backgroundColor);
console.log(box.style.fontSize);

```

*Hint:* cssText replaces ALL inline styles.

**Answer:** `color: red;`
`` (empty string)
`blue`
`20px`

Initially, cssText is "color: red;". After setting cssText, ALL inline styles are replaced. Color is gone (empty string). Only background and fontSize remain from the new cssText.

### Q8. [Medium] What is logged?

```
Hello

const box = document.getElementById("box");
box.style.width = "";
console.log(box.style.width);
console.log(box.getAttribute("style"));

```

*Hint:* Setting a style to empty string removes that inline style.

**Answer:** `` (empty string)
`` (empty string or null)

Setting `style.width = ""` removes the width inline style. Since it was the only inline style, the style attribute becomes empty.

### Q9. [Hard] What is logged?

```

  :root {
    --gap: 10px;
    --cols: 3;
  }

const root = document.documentElement;
console.log(getComputedStyle(root).getPropertyValue("--gap").trim());
console.log(getComputedStyle(root).getPropertyValue("--cols").trim());

root.style.setProperty("--cols", "4");
console.log(getComputedStyle(root).getPropertyValue("--cols").trim());

console.log(getComputedStyle(root).getPropertyValue("--missing").trim());

```

*Hint:* getPropertyValue returns empty string for undefined variables.

**Answer:** `10px`
`3`
`4`
`` (empty string)

--gap is "10px", --cols starts as "3" then changes to "4" via setProperty. --missing is not defined, so getPropertyValue returns an empty string.

### Q10. [Hard] What is the color of the box text?

```

  #box { color: blue; }
  .highlight { color: green !important; }

Hello

const box = document.getElementById("box");
box.style.color = "red"; // Inline style
box.classList.add("highlight"); // Has !important

```

*Hint:* !important overrides inline styles.

**Answer:** The text is **green**.

Normally inline styles override stylesheet styles. But `!important` in the stylesheet overrides even inline styles. The cascade order: normal stylesheet < inline style < !important stylesheet. Green wins.

### Q11. [Hard] What is logged?

```
.box { width: 50%; padding: 1em; font-size: 20px; }
Hello

const computed = getComputedStyle(document.getElementById("box"));
console.log(typeof computed.width);
console.log(computed.width.endsWith("px"));
console.log(computed.padding.endsWith("px"));

```

*Hint:* getComputedStyle returns resolved values in px, not the original units.

**Answer:** `string`
`true`
`true`

getComputedStyle always returns strings in resolved units. Even though width was "50%" and padding was "1em" in CSS, the computed values are in pixels (e.g., "500px", "20px"). Both end with "px".

### Q12. [Easy] What does the box look like after this code?

```
Hello

const box = document.getElementById("box");
box.style.padding = "20px";
box.style.backgroundColor = "#a855f7";
box.style.color = "white";
box.style.borderRadius = "12px";

```

*Hint:* Each line sets an inline CSS style.

**Answer:** A white text "Hello" on a purple (#a855f7) background with 20px padding and rounded corners (12px radius).

Four inline styles are set: padding, purple background, white text, and rounded corners. These appear immediately on the element.

### Q13. [Medium] What is logged?

```

  :root { --theme: light; --bg: white; }

const root = document.documentElement;
root.style.setProperty("--theme", "dark");
root.style.setProperty("--bg", "#1a1a2e");

console.log(getComputedStyle(root).getPropertyValue("--theme").trim());
console.log(getComputedStyle(root).getPropertyValue("--bg").trim());

```

*Hint:* setProperty overrides the CSS variable values.

**Answer:** `dark`
`#1a1a2e`

setProperty changes the CSS variables on the root element. getPropertyValue reads the updated values: --theme is now "dark" and --bg is now "#1a1a2e".

### Q14. [Hard] What is logged?

```

  #box { transition: opacity 0.5s; opacity: 1; }
  #box.hidden { opacity: 0; }

Hello

const box = document.getElementById("box");
box.classList.add("hidden");
console.log(getComputedStyle(box).opacity);
setTimeout(function() {
  console.log(box.classList.contains("hidden"));
}, 600);

```

*Hint:* The class is added immediately. The visual transition takes 0.5s but the computed value updates instantly.

**Answer:** `0` (logged immediately)
`true` (logged after 600ms)

Adding the 'hidden' class immediately changes the computed opacity to 0 (the target value). The visual transition takes 0.5s to fade. After 600ms, the class is still there (true). The transition is purely visual -- the computed value reflects the end state right away.

### Q15. [Medium] What is logged?

```

const box = document.getElementById("box");
console.log(box.style.width);
console.log(box.style.height);
box.style.width = "200px";
console.log(box.style.cssText);

```

*Hint:* style.cssText shows all inline styles as a string.

**Answer:** `100px`
`50px`
`width: 200px; height: 50px; background: red;`

Initially width is 100px and height is 50px (inline styles). After changing width to 200px, cssText shows all current inline styles including the updated width.

## Mixed Questions

### Q1. [Easy] What is logged?

```
Hello

const box = document.getElementById("box");
console.log(box.classList.length);
console.log(box.classList[0]);
console.log(box.classList[1]);

```

*Hint:* classList is array-like with indexed access.

**Answer:** `2`
`card`
`active`

The div has 2 classes. classList supports indexed access like an array: index 0 is "card", index 1 is "active".

### Q2. [Medium] What is the value of --primary after this code?

```

  :root { --primary: red; }
  body { --primary: blue; }

const rootVal = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
const bodyVal = getComputedStyle(document.body).getPropertyValue("--primary").trim();
console.log("root:", rootVal);
console.log("body:", bodyVal);

```

*Hint:* CSS variables can be overridden at different levels of the DOM.

**Answer:** `root: red`
`body: blue`

The :root level has --primary as red. The body level overrides it to blue. getComputedStyle on the html element returns "red". On body (and its children), it returns "blue" because body's value overrides root's.

### Q3. [Easy] What is the difference between `element.style` and `getComputedStyle(element)`?

*Hint:* One reads inline styles, the other reads all applied styles.

**Answer:** `element.style` reads and sets only inline styles (styles set directly on the element via the style attribute or JavaScript). `getComputedStyle(element)` reads the final computed styles from all CSS sources: inline styles, stylesheets, inherited styles, and browser defaults. getComputedStyle is read-only; you cannot set styles with it.

Use element.style when you need to set inline styles or read values you previously set. Use getComputedStyle when you need to read the actual visual state of an element.

### Q4. [Medium] Why is `classList.toggle` better than inline styles for a dark mode toggle?

*Hint:* Think about code organization and maintainability.

**Answer:** classList.toggle is better because: (1) All dark mode styles are defined in CSS, keeping style logic in one place. (2) One toggle call changes all properties at once instead of setting each one individually. (3) CSS transitions work automatically on class changes. (4) It is easier to debug -- you can see the class in DevTools. (5) You can define complex selectors like .dark .card, .dark .nav in CSS. With inline styles, you would need to set every property on every element manually.

Separation of concerns: JS handles when to change (logic), CSS handles what changes (visuals). This makes code cleaner, more maintainable, and easier to collaborate on.

### Q5. [Medium] How do CSS custom properties (variables) make theme switching easy?

*Hint:* Think about what happens when you change a variable that is used in 50 places.

**Answer:** CSS variables are defined once (usually on :root) and referenced everywhere with var(--name). When JavaScript changes a variable with setProperty, every element using that variable updates automatically. For a theme switch, you change 4-5 variables (--bg, --text, --primary, etc.) and the entire site's color scheme updates instantly. Without variables, you would need to find and change every element individually.

Example: if 30 elements use var(--primary), changing --primary once with setProperty updates all 30. This is far more efficient and maintainable than changing 30 element.style.color calls.

### Q6. [Medium] What is logged?

```

  .fade { opacity: 0; transition: opacity 0.5s; }
  .fade.show { opacity: 1; }

Hello

const box = document.getElementById("box");
console.log(getComputedStyle(box).opacity);
box.classList.add("show");
console.log(getComputedStyle(box).opacity);

```

*Hint:* Adding the class changes opacity immediately in the computed style.

**Answer:** `0`
`1`

Before adding "show", opacity is 0. After adding "show", the computed opacity immediately becomes 1. Note: the visual transition takes 0.5s, but getComputedStyle returns the target value right away.

### Q7. [Hard] What is logged?

```

  :root { --size: 16px; }
  #box { font-size: var(--size); }

Hello

const root = document.documentElement;
const box = document.getElementById("box");

console.log(getComputedStyle(box).fontSize);
root.style.setProperty("--size", "24px");
console.log(getComputedStyle(box).fontSize);
root.style.setProperty("--size", "2em");
console.log(getComputedStyle(box).fontSize);

```

*Hint:* CSS variables are applied as regular CSS values. em is relative to parent font-size.

**Answer:** `16px`
`24px`
`32px`

Initially --size is 16px. After changing to 24px, computed fontSize is 24px. After changing to 2em, the box's font-size is 2x the parent's font-size. If the parent is 16px (browser default), 2em = 32px.

### Q8. [Hard] What happens?

```

  .box { width: 100px; transition: width 1s; }

const box = document.getElementById("box");
box.style.width = "100px"; // Same as current
box.style.width = "300px"; // Change

```

*Hint:* Both style changes happen in the same synchronous code block.

**Answer:** The box jumps directly to 300px without any animation.

Both assignments happen in the same synchronous block before the browser has a chance to render. The browser only sees the final state (300px). Since it never rendered the 100px state, there is no transition. To trigger a transition, you need the browser to render the initial state first (using requestAnimationFrame or setTimeout).

### Q9. [Medium] What is logged?

```

console.log(window.scrollY);
window.scrollTo(0, 500);
console.log(window.scrollY);

```

Assuming the page is long enough to scroll.

*Hint:* scrollTo changes the scroll position synchronously.

**Answer:** `0`
`500`

Initially at the top (scrollY = 0). `scrollTo(0, 500)` scrolls to 500px. scrollY is updated immediately (synchronously).

### Q10. [Hard] What is logged?

```

  .card { color: blue; }
  .card.dark { color: white; background: #1a1a2e; }

Hello

const card = document.getElementById("card");
console.log(getComputedStyle(card).color);
card.style.color = "red"; // Inline
console.log(getComputedStyle(card).color);
card.classList.add("dark"); // .card.dark says color: white
console.log(getComputedStyle(card).color);

```

*Hint:* Inline styles have higher specificity than class selectors.

**Answer:** `rgb(0, 0, 255)`
`rgb(255, 0, 0)`
`rgb(255, 0, 0)`

Initially blue (from .card). After setting inline color to red, it overrides the class (inline > class specificity). After adding .dark class which sets color: white, the inline red still wins because inline styles have higher specificity than any class selector.

### Q11. [Easy] What happens?

```

  .box { width: 100px; height: 100px; background: #a855f7; }

const box = document.getElementById("box");
box.style.background = "#06b6d4";

```

*Hint:* Inline styles override stylesheet styles.

**Answer:** The box changes from purple (#a855f7) to teal (#06b6d4). The inline style overrides the stylesheet.

Inline styles have higher specificity than class selectors. The box's background changes from the stylesheet value (#a855f7) to the inline value (#06b6d4).

### Q12. [Medium] What is logged?

```

  #box { width: 50%; }

Hello

const box = document.getElementById("box");
console.log(box.style.width);
console.log(getComputedStyle(box).width);

```

*Hint:* The inline style (300px) overrides the stylesheet (50%). element.style reads inline; getComputedStyle reads the final value.

**Answer:** `300px`
`300px`

The inline style (300px) overrides the stylesheet (50%). element.style reads the inline value: "300px". getComputedStyle reads the final computed value, which is also 300px because the inline style wins.

### Q13. [Easy] What is logged?

```
Hello

const box = document.getElementById("box");
console.log(box.classList.length);
box.classList.remove("b");
console.log(box.className);

```

*Hint:* classList.length counts the classes. remove takes out one class.

**Answer:** `3`
`a c`

Initially there are 3 classes (a, b, c). After removing 'b', className is 'a c'.

### Q14. [Hard] What is logged?

```

  :root { --gap: 10; }

const root = document.documentElement;
const gap = getComputedStyle(root).getPropertyValue("--gap").trim();
console.log(gap);
console.log(typeof gap);
console.log(gap * 2);

```

*Hint:* CSS variable values are always returned as strings.

**Answer:** `10`
`string`
`20`

CSS variable values are always strings. getPropertyValue returns "10" (a string). typeof is "string". But JavaScript coerces it to a number for multiplication: "10" * 2 = 20.

### Q15. [Medium] What is the best way to create a hover effect: CSS `:hover` or JavaScript `mouseenter/mouseleave`?

*Hint:* Think about simplicity and performance.

**Answer:** For simple hover effects (color change, scale, shadow), CSS `:hover` is better -- it is simpler, more performant, and does not require JavaScript. Use JavaScript `mouseenter/mouseleave` only when you need complex logic (like fetching data on hover, showing different content based on state, or coordinating with other elements). Rule: use CSS when possible, JS when necessary.

CSS hover effects are handled by the browser's rendering engine, which is faster than JavaScript event handlers. JavaScript adds overhead (event loop, function execution). Only use JS hover events when CSS cannot achieve the desired behavior.

### Q16. [Medium] What is logged?

```
Hello

const box = document.getElementById("box");
const result = box.classList.replace("active", "inactive");
console.log(result);
console.log(box.className);

const result2 = box.classList.replace("missing", "found");
console.log(result2);
console.log(box.className);

```

*Hint:* replace returns true if the replacement was made, false if the old class was not found.

**Answer:** `true`
`inactive`
`false`
`inactive`

First replace: 'active' exists, so it is replaced with 'inactive'. Returns true. Second replace: 'missing' does not exist, so nothing happens. Returns false. Class remains 'inactive'.

## Multiple Choice Questions

### Q1. [Easy] How do you change the background color of an element with JavaScript?

**Answer:** B

**B is correct.** `element.style.backgroundColor` is the correct property. CSS uses background-color (kebab-case), JavaScript uses backgroundColor (camelCase).

### Q2. [Easy] What does `getComputedStyle(element)` return?

**Answer:** C

**C is correct.** getComputedStyle returns the final, computed values from all sources: inline styles, stylesheets, inherited properties, and browser defaults.

### Q3. [Easy] What does `classList.toggle('dark')` return?

**Answer:** C

**C is correct.** `toggle` returns a boolean: `true` if the class was added (was missing), `false` if it was removed (was present).

### Q4. [Easy] How do you set a CSS custom property with JavaScript?

**Answer:** B

**B is correct.** `document.documentElement` is the html element where :root variables live. `style.setProperty('--color', 'red')` sets the CSS variable.

### Q5. [Medium] Why does `element.style.width` return empty string when width is set in a stylesheet?

**Answer:** B

**B is correct.** `element.style` is the inline style object. It only contains properties set directly on the element's style attribute, not properties from external or internal stylesheets.

### Q6. [Medium] What format does `getComputedStyle` return colors in?

**Answer:** C

**C is correct.** Computed values for colors are returned in `rgb(r, g, b)` format (or `rgba` if transparent). Even if you defined the color as hex, named, or HSL, the computed value is always RGB.

### Q7. [Medium] Which CSS property CANNOT be animated with transitions?

**Answer:** C

**C is correct.** `display` is a discrete property (none/block/flex etc.) that cannot be smoothly animated. Use opacity + visibility instead for show/hide animations.

### Q8. [Medium] What is `window.scrollY`?

**Answer:** B

**B is correct.** `window.scrollY` returns the number of pixels the page has been scrolled vertically from the top. At the top of the page, it is 0.

### Q9. [Hard] What does `style.cssText = 'color: red;'` do?

**Answer:** B

**B is correct.** `cssText` replaces the entire inline style attribute with the new string. Any previously set inline styles are lost.

### Q10. [Hard] In terms of CSS specificity, what is the order from lowest to highest?

**Answer:** B

**B is correct.** Specificity from lowest to highest: element selectors (p, div) < class selectors (.card) < ID selectors (#main) < inline styles. !important overrides all of these.

### Q11. [Easy] Which method replaces one CSS class with another?

**Answer:** B

**B is correct.** `classList.replace('old', 'new')` removes the old class and adds the new one in a single operation. Returns true if the replacement was made.

### Q12. [Medium] What is `document.documentElement`?

**Answer:** C

**C is correct.** `document.documentElement` returns the root element of the document, which is the `` element. This is where :root CSS variables are typically defined.

### Q13. [Hard] Why does an inline style override a stylesheet class with the same property?

**Answer:** B

**B is correct.** In CSS specificity, inline styles (style attribute) have a specificity of 1000, which is higher than any selector in a stylesheet (IDs = 100, classes = 10, elements = 1). Only `!important` can override inline styles.

### Q14. [Hard] How do you smoothly scroll to the top of the page?

**Answer:** B

**B is correct.** Passing an object with `behavior: 'smooth'` makes the scroll animated instead of instant. Option A works but jumps instantly without animation.

### Q15. [Easy] How do you remove an inline style that was set with JavaScript?

**Answer:** B

**B is correct.** Setting a style property to an empty string removes that inline style, allowing stylesheet styles to take effect again.

### Q16. [Medium] What prefix do CSS custom properties (variables) require?

**Answer:** C

**C is correct.** CSS custom properties must start with `--` (double hyphen). Example: `--primary-color: #a855f7;`. They are referenced with `var(--primary-color)`.

### Q17. [Medium] What does `getComputedStyle(element).display` return for an element with `display: flex` in a stylesheet?

**Answer:** B

**B is correct.** `getComputedStyle` returns the actual computed value from all CSS sources. If the stylesheet sets `display: flex`, it returns "flex".

### Q18. [Hard] What is `requestAnimationFrame` used for?

**Answer:** B

**B is correct.** `requestAnimationFrame(callback)` tells the browser to call your function before the next repaint (typically 60fps). This is the most efficient way to create smooth JavaScript-driven animations.

### Q19. [Easy] Which is the preferred way to change element styles: inline styles or CSS classes?

**Answer:** B

**B is correct.** CSS classes are preferred because they separate style from logic, are easier to manage, and work with CSS transitions. Use inline styles only for truly dynamic values that cannot be predefined (like positioning based on mouse coordinates).

### Q20. [Hard] What happens if you set `element.style.setProperty('--custom', 'blue')` on a specific element instead of `:root`?

**Answer:** B

**B is correct.** CSS variables follow inheritance. Setting a variable on a specific element overrides the :root value for that element and all its children, while the rest of the page keeps the :root value.

## Coding Challenges

### Challenge 1. Dark Mode Toggle

**Difficulty:** Easy

Create a page with a heading, paragraph, and a toggle button. Define a .dark class on body that changes background to #1a1a2e and text to #f1f5f9. Clicking the button toggles dark mode. The button text should change between 'Dark Mode' and 'Light Mode'.

**Constraints:**

- Use classList.toggle on body. Use CSS transitions for smooth color changes. No inline styles for the theme.

**Sample input:**

```
Click the toggle button
```

**Sample output:**

```
Page switches to dark background and light text. Button says 'Light Mode'.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head><style>
  body { font-family: Arial; padding: 20px; transition: background 0.3s, color 0.3s; }
  body.dark { background: #1a1a2e; color: #f1f5f9; }
  button { padding: 10px 20px; cursor: pointer; }
</style></head>
<body>
  <h1>My Page</h1>
  <p>Toggle the theme with the button below.</p>
  <button id="btn">Dark Mode</button>
  <script>
    const btn = document.getElementById("btn");
    btn.addEventListener("click", function() {
      const isDark = document.body.classList.toggle("dark");
      btn.textContent = isDark ? "Light Mode" : "Dark Mode";
    });
  </script>
</body>
</html>
```

### Challenge 2. Font Size Controller

**Difficulty:** Easy

Create a paragraph of text and three buttons: 'A-' (decrease), 'A' (reset), 'A+' (increase). Clicking them should change the paragraph font size by 2px. Show the current font size. Minimum 12px, maximum 36px.

**Constraints:**

- Use element.style.fontSize. Use getComputedStyle for the initial value. Clamp between 12 and 36.

**Sample input:**

```
Click A+ three times
```

**Sample output:**

```
Font grows from 16px to 22px. Display shows '22px'.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <p id="text" style="font-size: 16px;">This is sample text. Change the font size with the buttons below.</p>
  <button id="minus">A-</button>
  <button id="reset">A</button>
  <button id="plus">A+</button>
  <span id="display">16px</span>
  <script>
    const text = document.getElementById("text");
    const display = document.getElementById("display");
    let size = 16;
    function update() { text.style.fontSize = size + "px"; display.textContent = size + "px"; }
    document.getElementById("plus").addEventListener("click", function() { if (size < 36) { size += 2; update(); } });
    document.getElementById("minus").addEventListener("click", function() { if (size > 12) { size -= 2; update(); } });
    document.getElementById("reset").addEventListener("click", function() { size = 16; update(); });
  </script>
</body>
</html>
```

### Challenge 3. CSS Variable Theme Switcher

**Difficulty:** Medium

Define 4 CSS variables on :root (--bg, --text, --primary, --accent). Create 4 theme presets (Purple, Ocean, Forest, Sunset) as JavaScript objects. Create 4 buttons. Clicking each button changes all 4 variables using setProperty. All elements on the page should use var() references so they update automatically.

**Constraints:**

- Use CSS custom properties. Use setProperty to change them. All colors must use var() in CSS.

**Sample input:**

```
Click 'Ocean' button
```

**Sample output:**

```
Entire page switches to blue/teal color scheme.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head><style>
  :root { --bg: #fff; --text: #1a1a2e; --primary: #a855f7; --accent: #06b6d4; }
  body { background: var(--bg); color: var(--text); font-family: Arial; padding: 20px; transition: all 0.3s; }
  h1 { color: var(--primary); }
  .card { background: var(--primary); color: white; padding: 20px; border-radius: 12px; margin: 16px 0; }
  button { padding: 8px 16px; margin: 4px; cursor: pointer; border: 2px solid var(--primary); border-radius: 6px; background: var(--accent); color: white; }
</style></head>
<body>
  <h1>Theme Demo</h1>
  <button id="t1">Purple</button><button id="t2">Ocean</button><button id="t3">Forest</button><button id="t4">Sunset</button>
  <div class="card"><h3>Card</h3><p>This card uses the primary color.</p></div>
  <script>
    const themes = {
      t1: {"--bg":"#fff","--text":"#1a1a2e","--primary":"#a855f7","--accent":"#06b6d4"},
      t2: {"--bg":"#f0f9ff","--text":"#0c4a6e","--primary":"#0369a1","--accent":"#06b6d4"},
      t3: {"--bg":"#f0fdf4","--text":"#14532d","--primary":"#15803d","--accent":"#a3e635"},
      t4: {"--bg":"#fff7ed","--text":"#7c2d12","--primary":"#ea580c","--accent":"#facc15"}
    };
    const root = document.documentElement;
    Object.keys(themes).forEach(function(id) {
      document.getElementById(id).addEventListener("click", function() {
        Object.entries(themes[id]).forEach(function(entry) { root.style.setProperty(entry[0], entry[1]); });
      });
    });
  </script>
</body>
</html>
```

### Challenge 4. Scroll Progress Bar

**Difficulty:** Medium

Create a fixed progress bar at the top of the page that fills from left to right as the user scrolls. At the top, width is 0%. At the bottom, width is 100%. Use a gradient background for the bar. Also add a percentage display.

**Constraints:**

- Use window.scrollY, document.documentElement.scrollHeight, and window.innerHeight for calculation. Use element.style.width for the bar.

**Sample input:**

```
Scroll halfway down the page
```

**Sample output:**

```
Progress bar is 50% wide. Display shows '50%'.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head><style>
  body { font-family: Arial; padding: 20px; margin: 0; }
  .bar { position: fixed; top: 0; left: 0; height: 4px; background: linear-gradient(to right, #a855f7, #06b6d4); z-index: 100; transition: width 0.1s; }
  .pct { position: fixed; top: 8px; right: 16px; font-size: 13px; color: #666; z-index: 100; }
  .content { padding-top: 30px; }
  section { min-height: 50vh; padding: 40px 0; border-bottom: 1px solid #eee; }
</style></head>
<body>
  <div class="bar" id="bar"></div>
  <div class="pct" id="pct">0%</div>
  <div class="content">
    <section><h2>Section 1</h2><p>Scroll down to see the progress bar fill.</p></section>
    <section><h2>Section 2</h2><p>Content here.</p></section>
    <section><h2>Section 3</h2><p>More content.</p></section>
    <section><h2>Section 4</h2><p>Almost there.</p></section>
    <section><h2>Section 5</h2><p>Bottom of page.</p></section>
  </div>
  <script>
    const bar = document.getElementById("bar");
    const pct = document.getElementById("pct");
    window.addEventListener("scroll", function() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const percent = Math.round((window.scrollY / scrollable) * 100);
      bar.style.width = percent + "%";
      pct.textContent = percent + "%";
    });
  </script>
</body>
</html>
```

### Challenge 5. Animated Card Flip

**Difficulty:** Hard

Create a card with a front and back face. Clicking the card flips it with a 3D rotation animation. The front shows a question. The back shows the answer. Use CSS transform: rotateY and backface-visibility. JavaScript just toggles a class.

**Constraints:**

- Use CSS 3D transforms (perspective, rotateY, backface-visibility). JavaScript should only toggle a 'flipped' class.

**Sample input:**

```
Click the card
```

**Sample output:**

```
Card flips 180 degrees revealing the answer on the back. Click again to flip back.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head><style>
  body { font-family: Arial; padding: 40px; display: flex; justify-content: center; }
  .card-container { perspective: 800px; width: 300px; height: 200px; cursor: pointer; }
  .card { width: 100%; height: 100%; position: relative; transition: transform 0.6s; transform-style: preserve-3d; }
  .card.flipped { transform: rotateY(180deg); }
  .front, .back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; display: flex; align-items: center; justify-content: center; border-radius: 12px; padding: 20px; box-sizing: border-box; text-align: center; font-size: 18px; }
  .front { background: #a855f7; color: white; }
  .back { background: #06b6d4; color: white; transform: rotateY(180deg); }
</style></head>
<body>
  <div class="card-container" id="container">
    <div class="card" id="card">
      <div class="front"><strong>What does DOM stand for?</strong></div>
      <div class="back"><strong>Document Object Model</strong></div>
    </div>
  </div>
  <script>
    document.getElementById("container").addEventListener("click", function() {
      document.getElementById("card").classList.toggle("flipped");
    });
  </script>
</body>
</html>
```

### Challenge 6. Interactive Color Mixer

**Difficulty:** Hard

Create three range sliders for Red, Green, and Blue (0-255). As the user adjusts any slider, update: (1) a preview box showing the mixed color as background, (2) the hex code display, (3) the RGB display, (4) CSS variables --red, --green, --blue that control text labels. Show the numeric value next to each slider.

**Constraints:**

- Use input event on range sliders. Use CSS custom properties for dynamic coloring. Calculate hex from RGB values.

**Sample input:**

```
Set R:168, G:85, B:247
```

**Sample output:**

```
Preview shows purple (#a855f7). Displays: 'HEX: #a855f7' and 'RGB: rgb(168, 85, 247)'.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head><style>
  body { font-family: Arial; padding: 20px; }
  .slider-group { margin: 8px 0; display: flex; align-items: center; gap: 12px; }
  input[type=range] { width: 200px; }
  #preview { width: 200px; height: 200px; border-radius: 12px; margin: 16px 0; border: 1px solid #ddd; }
  .value { font-family: monospace; font-size: 18px; min-width: 40px; }
  .code { font-family: monospace; font-size: 16px; margin: 4px 0; }
</style></head>
<body>
  <h2>Color Mixer</h2>
  <div class="slider-group"><label style="color:red;width:50px;">Red</label><input type="range" id="r" min="0" max="255" value="168"><span class="value" id="rv">168</span></div>
  <div class="slider-group"><label style="color:green;width:50px;">Green</label><input type="range" id="g" min="0" max="255" value="85"><span class="value" id="gv">85</span></div>
  <div class="slider-group"><label style="color:blue;width:50px;">Blue</label><input type="range" id="b" min="0" max="255" value="247"><span class="value" id="bv">247</span></div>
  <div id="preview"></div>
  <div class="code" id="hex"></div>
  <div class="code" id="rgb"></div>
  <script>
    const rSlider = document.getElementById("r");
    const gSlider = document.getElementById("g");
    const bSlider = document.getElementById("b");
    function toHex(n) { return Number(n).toString(16).padStart(2, "0"); }
    function update() {
      const r = rSlider.value, g = gSlider.value, b = bSlider.value;
      document.getElementById("rv").textContent = r;
      document.getElementById("gv").textContent = g;
      document.getElementById("bv").textContent = b;
      const hex = "#" + toHex(r) + toHex(g) + toHex(b);
      document.getElementById("preview").style.backgroundColor = hex;
      document.getElementById("hex").textContent = "HEX: " + hex;
      document.getElementById("rgb").textContent = "RGB: rgb(" + r + ", " + g + ", " + b + ")";
    }
    rSlider.addEventListener("input", update);
    gSlider.addEventListener("input", update);
    bSlider.addEventListener("input", update);
    update();
  </script>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/css-manipulation-with-javascript/*
