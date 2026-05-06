---
title: "Practice: Pseudo-classes and Pseudo-elements"
description: "56 practice problems for Pseudo-classes and Pseudo-elements in HTML and CSS"
slug: pseudo-classes-and-pseudo-elements-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/pseudo-classes-and-pseudo-elements/practice/
category: "HTML and CSS"
---
# Practice: Pseudo-classes and Pseudo-elements

**Total questions:** 56

## Topic-Specific Questions

### Q1. [Easy] What does this select?

```
button:hover { background: purple; }
```

*Hint:* Think about when.

**Answer:** Buttons when the mouse is pointing at them. The background turns purple during hover and reverts when the mouse leaves.

`:hover` is a state pseudo-class. Styles inside it apply only while the user's pointer is over the element.

### Q2. [Easy] How many colons before 'before'?

```
.card___before { content: ''; }
```

*Hint:* Pseudo-elements got a double colon in CSS3.

**Answer:** Two colons: `.card::before`.

Pseudo-elements use two colons in CSS3+ (`::before`, `::after`). Pseudo-classes use one colon (`:hover`, `:focus`).

### Q3. [Easy] What does `li:first-child` select?

*Hint:* Which one in the list?

**Answer:** The first `li` inside its parent.

`:first-child` matches an element that is the first child of its parent. It is common for removing top borders or styling headers differently.

### Q4. [Easy] What does `::before` need to actually render?

*Hint:* A required property.

**Answer:** The `content` property. Even `content: ''` (empty string) works.

Without `content`, the browser does not generate the pseudo-element. For purely decorative shapes, use `content: ''` and set width, height, background, and position.

### Q5. [Easy] Which rows does this style?

```
tr:nth-child(odd) { background: #f1f5f9; }
```

*Hint:* Odd means 1, 3, 5...

**Answer:** Rows 1, 3, 5, 7... (the 1st, 3rd, 5th, etc.)

`odd` is a keyword for `2n+1`. It selects every other row starting with the first.

### Q6. [Easy] What does `input:checked` select?

*Hint:* For checkboxes and radios.

**Answer:** Checkboxes and radio buttons that are currently ticked.

`:checked` matches checkbox or radio inputs in the checked state, and also `` elements that are selected.

### Q7. [Easy] What does `a:visited` target?

*Hint:* Browser history.

**Answer:** Links the user has already visited (according to browser history).

For privacy reasons, browsers restrict what `:visited` can style — typically only color, background-color, border-color, and outline-color.

### Q8. [Easy] Which element does `p::first-letter` target?

*Hint:* Drop caps.

**Answer:** The very first character of the paragraph.

`::first-letter` is used for magazine-style drop caps. You can make it large, colored, and floated.

### Q9. [Easy] What is the difference between `:focus` and `:focus-visible`?

*Hint:* Mouse vs keyboard.

**Answer:** `:focus` matches any focused element (including clicks). `:focus-visible` only matches when the browser determines the focus is keyboard-driven, so mouse users do not see outlines.

`:focus-visible` is the modern choice for focus rings: accessible for keyboard users, invisible for mouse users. Pair it with `:hover` for full interaction feedback.

### Q10. [Easy] Why is `content: attr(data-tip)` powerful?

*Hint:* It reads from HTML.

**Answer:** It lets a pseudo-element display text from an HTML attribute. Each element can have different tooltip text set via `data-tip="..."`, and one CSS rule handles them all.

`attr()` reads the value of an HTML attribute and inserts it as content. It is the easiest way to build attribute-driven tooltips without JavaScript.

### Q11. [Medium] Which items does this select?

```
li:nth-child(3n+2) { color: red; }
```

*Hint:* Start n at 0: 3(0)+2, 3(1)+2, 3(2)+2...

**Answer:** Items 2, 5, 8, 11...

n starts at 0: 3(0)+2 = 2, 3(1)+2 = 5, 3(2)+2 = 8, 3(3)+2 = 11. So every third item starting from the second.

### Q12. [Medium] What does this do?

```
li:not(.active) { opacity: 0.5; }
```

*Hint:* Negation.

**Answer:** Makes every `li` that does NOT have the class `active` 50% transparent. The active item stays fully visible.

`:not(selector)` excludes elements matching the inner selector. This is a clean way to dim non-active items without adding a second class.

### Q13. [Medium] What selector groups these?

```
h1, h2, h3 { font-family: 'Syne'; }
```

*Hint:* Use a function that groups.

**Answer:** `:is(h1, h2, h3) { font-family: 'Syne'; }`

`:is()` groups selectors in one place. It is especially useful for complex combinations: `:is(header, footer) :is(h1, h2)` is shorter than writing all four combinations out.

### Q14. [Medium] What is the difference between `:is()` and `:where()`?

*Hint:* Specificity.

**Answer:** `:is()` takes the highest specificity of its arguments. `:where()` has zero specificity, which makes it easy to override.

`:where()` is perfect for base styles in component libraries: they apply but are trivial to override. `:is()` is for when you want normal specificity.

### Q15. [Medium] What does this select?

```
label:has(input:checked) { background: #7c3aed; }
```

*Hint:* :has() is the parent selector.

**Answer:** Labels that contain a checked input. The label itself turns purple when the checkbox inside it is ticked.

`:has()` finally lets CSS look inward and style a parent based on its descendants. This used to require JavaScript to add a class to the label.

### Q16. [Medium] What renders here?

```
.new::after {
  content: 'NEW';
  color: red;
}
```

*Hint:* Injected text.

**Answer:** The text 'NEW' in red appears at the end of every element with class `new`.

`::after` injects a pseudo-element at the end of the element's content. Its `content` property specifies what to show.

### Q17. [Medium] Is this valid? 

```
input:invalid { border-color: red; }
```

*Hint:* Form validation pseudo-class.

**Answer:** Yes. `:invalid` matches form inputs whose value does not satisfy their validation rules (email, required, minlength, min/max, pattern, etc.).

`:invalid` is a pseudo-class that activates when the input's current value fails validation. Pair it with `:not(:placeholder-shown)` so empty fields do not show red immediately.

### Q18. [Medium] What happens when the user selects text?

```
::selection { background: #a855f7; color: white; }
```

*Hint:* Highlighted text styling.

**Answer:** When the user highlights any text on the page, the background becomes purple and the text becomes white.

`::selection` styles text that is currently selected by the user. It is a quick way to customize the highlight color to match your brand.

### Q19. [Medium] What does this style?

```
li::marker { color: #7c3aed; font-size: 1.3em; }
```

*Hint:* List item decoration.

**Answer:** The bullet point (or number) of each list item becomes purple and slightly larger.

`::marker` targets the bullet or number of a list item. It was very limited historically; now you can color and size it directly without extra markup.

### Q20. [Medium] What does `div:empty { display: none; }` do?

*Hint:* Empty means no content at all.

**Answer:** Any `div` that has no content (no text, no children, not even whitespace) is hidden.

`:empty` matches elements with no children and no text. Useful for auto-hiding container elements that might or might not have content depending on data.

### Q21. [Medium] What does this do?

```
section:target { background: #fef3c7; }
```

*Hint:* URL fragments.

**Answer:** When the URL contains `#sectionId` matching the section's id, that section gets a yellow background.

`:target` matches the element whose id matches the URL fragment. It is perfect for highlighting the currently-linked section in a table of contents.

### Q22. [Medium] Which elements does this style?

```
input:placeholder-shown { font-style: italic; }
```

*Hint:* When the placeholder is visible.

**Answer:** Inputs that are currently showing their placeholder (i.e., empty inputs with a placeholder attribute).

`:placeholder-shown` matches inputs that are displaying their placeholder — essentially, empty inputs. Combined with `:not()`, it can tell you 'the user has typed something'.

### Q23. [Medium] Why should you pair `:hover` with `:focus-visible`?

*Hint:* Keyboard users.

**Answer:** Keyboard users cannot hover. Pairing `:hover` with `:focus-visible` ensures they see the same feedback as mouse users when they tab to an element.

Accessibility: every interactive element should show feedback for both pointer and keyboard input. `:focus-visible` is specifically for keyboard-driven focus and does not trigger on mouse clicks.

### Q24. [Medium] What is the purpose of `:where()` in a CSS library?

*Hint:* Think about overrides.

**Answer:** `:where()` has zero specificity, so base styles inside it are trivially overridable by the user's own CSS. Libraries use it to provide defaults that do not fight with user code.

Specificity wars are a top pain point in large codebases. `:where()` lets libraries ship sensible defaults that the user can override with even the simplest selectors.

### Q25. [Hard] What does this select?

```
article p:first-of-type::first-line { font-weight: bold; }
```

*Hint:* Combine a pseudo-class and a pseudo-element.

**Answer:** The first line of text in the first `p` element inside any `article`. Just that first line is bold.

Pseudo-classes and pseudo-elements can stack. `:first-of-type` picks the first p; `::first-line` narrows to just its visual first line. Classic magazine lead-in styling.

### Q26. [Hard] What does this select?

```
form:has(input:invalid) button[type="submit"] { opacity: 0.4; pointer-events: none; }
```

*Hint:* :has() checks descendants.

**Answer:** The submit button of any form that contains an invalid input. The button becomes faded and unclickable until all inputs become valid.

This is a classic `:has()` use case: disable submit while any field is invalid, no JavaScript required. The parent selector was the missing piece of CSS for years.

### Q27. [Hard] What is odd about this?

```
.cards > div:nth-child(3n) { border: 2px solid red; }
```

*Hint:* Direct children only.

**Answer:** Only direct `div` children of `.cards` are considered. Nested divs inside other children are ignored. Every third direct child gets a red border.

The `>` combinator limits the selection to direct children. Combined with `:nth-child(3n)`, you target every third direct div, skipping descendants.

### Q28. [Hard] Does this work as an animated underline?

```
a::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: #a855f7;
  transition: width 0.3s;
}
a:hover::after { width: 100%; }
```

*Hint:* Yes, but check direction.

**Answer:** Yes. On hover, the underline grows from width 0 to 100% over 0.3s. The direction is left-to-right (default origin).

You can animate `width` on pseudo-elements. For a scaleX-based approach (smoother), use `transform: scaleX(0)` with `transform-origin`.

### Q29. [Hard] What is wrong with this?

```
.product.sale::before {
  content: 'SALE';
}
.product::before {
  content: '';
  background: #f0f0f0;
  width: 100%; height: 100%;
}
```

*Hint:* Only one ::before per element.

**Answer:** An element can only have ONE `::before`. The more specific selector wins. You cannot have two ::before pseudo-elements on the same element stacking.

Each element has exactly one `::before` and one `::after`. If multiple rules apply, they merge via normal cascade rules — the most specific wins. To have multiple decorations, use `::before` and `::after` together, or wrap with another element.

### Q30. [Hard] How would you disable a submit button while any form input is invalid, without JavaScript?

*Hint:* Use :has() and :invalid.

**Answer:** `form:has(:invalid) button[type="submit"] { opacity: 0.4; pointer-events: none; }`

`:has()` walks up to the form and checks for an invalid descendant. `:invalid` matches any input that fails its HTML5 validation rules. Pure CSS, reactive to typing.

### Q31. [Hard] Why is `:hover` a bad idea as the only interaction trigger on mobile?

*Hint:* Touch devices.

**Answer:** Touch devices do not have a persistent hover state. A finger tap is a click, not a hover. Relying only on `:hover` to reveal important content makes mobile users miss it entirely.

On touch devices, `:hover` fires briefly (or not at all) on tap. Always make important content reachable by tap/click, and treat hover effects as a bonus for pointer users.

### Q32. [Hard] What problem does `::first-letter` solve that extra HTML would also solve?

*Hint:* Semantics.

**Answer:** It styles the first character for a drop cap effect without wrapping it in a ``. Keeps the HTML clean and semantic — the visual decoration does not pollute the content.

Separation of concerns: HTML holds content, CSS holds decoration. `::first-letter` lets you achieve the drop cap in CSS alone, avoiding meaningless wrapper spans in your markup.

## Multiple Choice Questions

### Q1. [Easy] Which selector styles the first child of its parent?

**Answer:** B

**B is correct.** `:first-child` matches an element that is the first child of its parent.

### Q2. [Easy] How many colons does a pseudo-element use in modern CSS?

**Answer:** C

**C is correct.** Pseudo-elements use two colons (`::before`, `::after`, `::first-letter`) in CSS3+. Pseudo-classes use one colon.

### Q3. [Easy] What property is required for `::before` to render?

**Answer:** B

**B is correct.** Without a `content` property, `::before` and `::after` do not render at all. Even `content: ''` is enough.

### Q4. [Easy] Which pseudo-class matches when the mouse is over the element?

**Answer:** B

**B is correct.** `:hover` matches when the pointer is over the element and is one of the most common interaction styles.

### Q5. [Easy] Which selector picks every even list item?

**Answer:** A

**A is correct.** `:nth-child(even)` matches every even child (2nd, 4th, 6th...). `odd` and formulas like `2n+1` also work.

### Q6. [Easy] Which pseudo-class matches a checked checkbox?

**Answer:** B

**B is correct.** `:checked` matches checkboxes and radios that are currently in the checked state, as well as selected options.

### Q7. [Easy] How do you style selected text on a page?

**Answer:** C

**C is correct.** `::selection` styles text that the user has currently highlighted.

### Q8. [Easy] Which selector targets the placeholder text inside an input?

**Answer:** B

**B is correct.** `::placeholder` is a pseudo-element (double colon) that styles the placeholder text inside form inputs.

### Q9. [Medium] What does `li:nth-child(3n)` select?

**Answer:** C

**C is correct.** `3n` with n starting at 0 gives 0, 3, 6, 9... The 0th does not exist, so the pattern is 3rd, 6th, 9th, etc.

### Q10. [Medium] How do you read an HTML attribute as content inside ::after?

**Answer:** B

**B is correct.** `attr()` reads an HTML attribute value. It is the standard way to drive tooltips and badges from `data-*` attributes.

### Q11. [Medium] Which selector has zero specificity?

**Answer:** C

**C is correct.** `:where()` has zero specificity, making its styles trivially overridable. `:is()` takes the specificity of its most specific argument.

### Q12. [Medium] What does `form:has(:invalid) button` select?

**Answer:** B

**B is correct.** `:has()` is the parent selector: it matches a form that contains an invalid descendant, then the rule applies to buttons inside that form.

### Q13. [Medium] Which pseudo-class only applies when the focus came from the keyboard?

**Answer:** B

**B is correct.** `:focus-visible` is shown only when the browser determines the focus is keyboard-driven, keeping the UI clean for mouse users while remaining accessible.

### Q14. [Medium] Which selector matches the element whose id is the URL fragment?

**Answer:** C

**C is correct.** `:target` matches the element whose id corresponds to the current URL fragment (the part after `#`).

### Q15. [Medium] What does `:not(.active)` match?

**Answer:** B

**B is correct.** `:not(selector)` matches elements that do NOT match the inner selector. This is a clean way to style everything except one item.

### Q16. [Hard] Can you have two `::before` pseudo-elements on the same element?

**Answer:** B

**B is correct.** Each element has exactly one `::before` and one `::after`. Multiple rules for the same pseudo-element merge via normal cascade.

### Q17. [Hard] Which selector picks only the first paragraph inside each article?

**Answer:** D

**D is correct.** `:first-child` only matches if the `p` is literally the first child. `:first-of-type` matches the first p regardless of what other elements come before it. Choose based on your HTML.

### Q18. [Hard] What does `input:not(:placeholder-shown):invalid` match?

**Answer:** B

**B is correct.** `:not(:placeholder-shown)` means 'the placeholder is NOT showing', i.e., the input has content. Combined with `:invalid`, it only shows red errors after the user starts typing.

## Coding Challenges

### Challenge 1. Zebra-Striped Leaderboard

**Difficulty:** Easy

Build a leaderboard table with 8 students (Aarav, Priya, Rohan, Ishita, Vivaan, Anika, Kavya, Meera). Use `:nth-child(even)` for zebra stripes, `:hover` to highlight the row the mouse is on, and `:first-child` to make the top row (the winner) stand out with a gold background.

**Constraints:**

- Use only pseudo-classes. No extra classes on rows.

**Sample input:**

```
None
```

**Sample output:**

```
A leaderboard with alternating rows, a highlighted winner row, and a hover effect on each row.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: 'Segoe UI', sans-serif; background: #f8fafc; padding: 40px; }
  h1 { color: #7c3aed; text-align: center; margin-bottom: 20px; }
  table { border-collapse: collapse; width: 100%; max-width: 600px; margin: 0 auto; background: white; border-radius: 14px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
  th { background: #0f172a; color: white; padding: 16px; text-align: left; }
  td { padding: 14px 16px; color: #334155; }
  tbody tr:nth-child(even) { background: #f1f5f9; }
  tbody tr:hover { background: #ede9fe; cursor: pointer; }
  tbody tr:first-child { background: linear-gradient(90deg, #fef3c7, #fde68a); font-weight: bold; }
  tbody tr:first-child td:first-child::before { content: 'Winner! '; color: #d97706; }
</style>
</head>
<body>
  <h1>Weekly Leaderboard</h1>
  <table>
    <thead><tr><th>Rank</th><th>Student</th><th>Score</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>Kavya</td><td>99</td></tr>
      <tr><td>2</td><td>Ishita</td><td>97</td></tr>
      <tr><td>3</td><td>Aarav</td><td>94</td></tr>
      <tr><td>4</td><td>Priya</td><td>91</td></tr>
      <tr><td>5</td><td>Meera</td><td>89</td></tr>
      <tr><td>6</td><td>Rohan</td><td>88</td></tr>
      <tr><td>7</td><td>Vivaan</td><td>85</td></tr>
      <tr><td>8</td><td>Anika</td><td>82</td></tr>
    </tbody>
  </table>
</body>
</html>
```

### Challenge 2. Custom Tooltip with ::after

**Difficulty:** Easy

Create 4 buttons with different hover tooltips. The tooltip text must come from a `data-tip` attribute using `content: attr(data-tip)`. The tooltip should appear above the button on hover with a small arrow pointing down, and fade in smoothly.

**Constraints:**

- Use ::after for the tooltip body, ::before for the arrow. Use attr() for content. No JavaScript.

**Sample input:**

```
Hover over any button
```

**Sample output:**

```
A dark tooltip with the attribute text appears above the button with a fade-in animation and an arrow.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: 'Segoe UI', sans-serif; background: #0f172a; padding: 100px 40px; display: flex; gap: 30px; justify-content: center; flex-wrap: wrap; }
  .btn { position: relative; padding: 14px 24px; background: #7c3aed; color: white; border: none; border-radius: 10px; font-weight: 600; cursor: pointer; font-size: 15px; }
  .btn::after {
    content: attr(data-tip);
    position: absolute;
    left: 50%;
    bottom: calc(100% + 12px);
    transform: translateX(-50%);
    background: #0b1120;
    color: #e2e8f0;
    padding: 8px 14px;
    border-radius: 8px;
    font-size: 13px;
    white-space: nowrap;
    box-shadow: 0 8px 20px rgba(0,0,0,0.4);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s, transform 0.2s;
  }
  .btn::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: calc(100% + 6px);
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: #0b1120;
    opacity: 0;
    transition: opacity 0.2s;
  }
  .btn:hover::after, .btn:hover::before {
    opacity: 1;
    transform: translateX(-50%) translateY(-4px);
  }
</style>
</head>
<body>
  <button class="btn" data-tip="Start Aarav's quiz now">Start Quiz</button>
  <button class="btn" data-tip="Save Priya's progress">Save</button>
  <button class="btn" data-tip="Export Rohan's report">Export</button>
  <button class="btn" data-tip="Warning: Delete Ishita's project">Delete</button>
</body>
</html>
```

### Challenge 3. Form Validation Styling

**Difficulty:** Medium

Build a sign-up form with 4 inputs (name, email, age, password). Use `:valid` and `:invalid` to show green/red borders. Use `:not(:placeholder-shown)` so empty fields do not show red. Use `form:has(:invalid)` to disable the submit button while any field is invalid. No JavaScript at all.

**Constraints:**

- Zero JavaScript. Use only pseudo-classes and :has().

**Sample input:**

```
Type into fields
```

**Sample output:**

```
Fields turn green when valid, red when invalid. Submit button is disabled until all fields are valid.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: 'Segoe UI', sans-serif; background: #f8fafc; padding: 40px; display: flex; justify-content: center; }
  form { background: white; padding: 32px; border-radius: 16px; max-width: 420px; width: 100%; box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
  h2 { color: #0f172a; margin-bottom: 20px; }
  label { display: block; margin-bottom: 16px; font-size: 13px; color: #475569; }
  input {
    display: block;
    width: 100%;
    padding: 12px;
    margin-top: 6px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 15px;
    outline: none;
    transition: border-color 0.2s;
  }
  input:focus { border-color: #7c3aed; }
  input:placeholder-shown { font-style: italic; color: #94a3b8; }
  input:not(:placeholder-shown):valid { border-color: #10b981; }
  input:not(:placeholder-shown):invalid { border-color: #ef4444; }
  button {
    width: 100%;
    padding: 12px;
    background: #7c3aed;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 8px;
    transition: opacity 0.2s;
  }
  form:has(input:invalid) button {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  }
</style>
</head>
<body>
  <form>
    <h2>Vivaan's Sign Up</h2>
    <label>Name<input type="text" placeholder="Your full name" minlength="2" required></label>
    <label>Email<input type="email" placeholder="you@example.com" required></label>
    <label>Age<input type="number" placeholder="10 to 18" min="10" max="18" required></label>
    <label>Password<input type="password" placeholder="At least 6 characters" minlength="6" required></label>
    <button type="submit">Create Account</button>
  </form>
</body>
</html>
```

### Challenge 4. Sliding Underline Navigation

**Difficulty:** Medium

Build a horizontal nav with 5 links (Home, Projects, Blog, About, Contact). Each link should have an animated gradient underline that slides in from the left on hover and slides out to the right on mouse leave. Use `::after` with transform scaleX and transform-origin.

**Constraints:**

- No JavaScript. Use ::after for the underline. Use transform-origin for direction.

**Sample input:**

```
Hover over nav links
```

**Sample output:**

```
A gradient underline slides in from the left on hover and retracts to the right when leaving.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: #0f172a; color: white; min-height: 100vh; }
  nav { display: flex; gap: 40px; padding: 28px 48px; background: #0b1120; border-bottom: 1px solid #1e293b; }
  nav a {
    position: relative;
    color: #cbd5e1;
    text-decoration: none;
    font-size: 16px;
    padding: 8px 0;
    transition: color 0.2s;
  }
  nav a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #a855f7, #06b6d4);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.35s ease;
  }
  nav a:hover { color: white; }
  nav a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
  main { padding: 80px 48px; text-align: center; }
  main h1 { color: #a855f7; font-size: 44px; background: linear-gradient(135deg, #a855f7, #06b6d4); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
  main p { color: #94a3b8; margin-top: 12px; }
</style>
</head>
<body>
  <nav>
    <a href="#">Home</a>
    <a href="#">Projects</a>
    <a href="#">Blog</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
  <main>
    <h1>Anika's Portfolio</h1>
    <p>Hover over the nav links above to see the sliding underline effect.</p>
  </main>
</body>
</html>
```

### Challenge 5. Product Cards with Ribbons and Badges

**Difficulty:** Hard

Build a grid of 4 product cards. Each card has a title, description, and price. Use `::before` to add a diagonal 'SALE' ribbon in the top-right corner on `.sale` cards. Use `::after` to add a gradient 'NEW' pill badge on `.new` cards. One card should have both. Use Indian-themed product names.

**Constraints:**

- Use ::before for ribbon, ::after for badge. No extra HTML elements for the decorations.

**Sample input:**

```
None
```

**Sample output:**

```
Four product cards with different combinations of SALE ribbon and NEW badge.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: 'Segoe UI', sans-serif; background: #f8fafc; padding: 40px; display: grid; gap: 24px; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); max-width: 1000px; margin: 0 auto; }
  .product {
    position: relative;
    background: white;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    overflow: hidden;
    transition: transform 0.2s;
  }
  .product:hover { transform: translateY(-4px); }
  .product h3 { color: #0f172a; font-size: 20px; margin-bottom: 8px; }
  .product p { color: #64748b; font-size: 14px; line-height: 1.6; }
  .product .price { display: block; margin-top: 16px; font-size: 24px; font-weight: 700; color: #7c3aed; }
  .product.sale::before {
    content: 'SALE';
    position: absolute;
    top: 22px; right: -44px;
    background: #ef4444;
    color: white;
    padding: 6px 50px;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 2px;
    transform: rotate(45deg);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
  .product.new::after {
    content: 'NEW';
    position: absolute;
    top: 16px; left: 16px;
    background: linear-gradient(135deg, #a855f7, #ec4899);
    color: white;
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1px;
    box-shadow: 0 2px 8px rgba(168, 85, 247, 0.4);
  }
</style>
</head>
<body>
  <div class="product sale">
    <h3>Aarav's HTML Workbook</h3>
    <p>50 hands-on projects to master HTML from scratch.</p>
    <span class="price">Rs 499</span>
  </div>
  <div class="product new">
    <h3>Priya's CSS Masterclass</h3>
    <p>Grid, Flexbox, variables, and animations in one guide.</p>
    <span class="price">Rs 399</span>
  </div>
  <div class="product sale new">
    <h3>Ishita's JS Bundle</h3>
    <p>JavaScript basics to advanced topics with 25 projects.</p>
    <span class="price">Rs 899</span>
  </div>
  <div class="product">
    <h3>Rohan's Portfolio Template</h3>
    <p>A modern portfolio theme you can customize easily.</p>
    <span class="price">Rs 299</span>
  </div>
</body>
</html>
```

### Challenge 6. Pure CSS Accordion with :has() and :target

**Difficulty:** Hard

Build a FAQ accordion with 4 questions using only HTML and CSS. Use `` and `` elements. Style the open state with `[open]` or `::marker`. Use `::before` to add a plus/minus indicator that changes when the section is expanded. No JavaScript.

**Constraints:**

- Use only HTML and CSS. Use details/summary. Use pseudo-elements for the indicator.

**Sample input:**

```
Click a question to expand it
```

**Sample output:**

```
A clean FAQ with plus icons that turn into minus icons when expanded, and smooth hover states.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: 'Segoe UI', sans-serif; background: #f8fafc; padding: 40px; max-width: 680px; margin: 0 auto; }
  h1 { color: #7c3aed; text-align: center; margin-bottom: 24px; }
  details {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    margin-bottom: 12px;
    overflow: hidden;
    transition: box-shadow 0.2s;
  }
  details:hover { box-shadow: 0 4px 14px rgba(0,0,0,0.08); }
  details[open] { box-shadow: 0 10px 30px rgba(124, 58, 237, 0.15); border-color: #c4b5fd; }
  summary {
    padding: 18px 48px 18px 20px;
    cursor: pointer;
    color: #0f172a;
    font-weight: 600;
    font-size: 16px;
    position: relative;
    list-style: none;
  }
  summary::-webkit-details-marker { display: none; }
  summary::after {
    content: '+';
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #7c3aed;
    font-size: 24px;
    font-weight: 300;
    transition: transform 0.3s, content 0.3s;
  }
  details[open] summary::after {
    content: '-';
    transform: translateY(-50%) rotate(180deg);
  }
  details p {
    padding: 0 20px 18px;
    color: #64748b;
    line-height: 1.6;
    font-size: 15px;
    margin: 0;
  }
</style>
</head>
<body>
  <h1>Meera's FAQ</h1>
  <details>
    <summary>Do I need JavaScript for this accordion?</summary>
    <p>No! The &lt;details&gt; and &lt;summary&gt; HTML elements handle open/close state natively. The plus/minus icon is pure CSS via ::after.</p>
  </details>
  <details>
    <summary>How does the plus icon become a minus?</summary>
    <p>The ::after pseudo-element reads a different content value when the details element has the [open] attribute: 'details[open] summary::after { content: "-"; }'.</p>
  </details>
  <details>
    <summary>Is this accessible?</summary>
    <p>Yes. The &lt;details&gt; element is keyboard accessible out of the box, it announces its state to screen readers, and it works without any custom ARIA attributes.</p>
  </details>
  <details>
    <summary>Can I animate the expand?</summary>
    <p>Yes, modern browsers support interpolate-size: allow-keywords to animate height from auto. Or use max-height with a transition for a classic effect.</p>
  </details>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/pseudo-classes-and-pseudo-elements/*
