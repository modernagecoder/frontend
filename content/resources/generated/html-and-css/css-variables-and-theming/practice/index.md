---
title: "Practice: CSS Variables and Theming (Dark Mode)"
description: "56 practice problems for CSS Variables and Theming (Dark Mode) in HTML and CSS"
slug: css-variables-and-theming-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/css-variables-and-theming/practice/
category: "HTML and CSS"
---
# Practice: CSS Variables and Theming (Dark Mode)

**Total questions:** 56

## Topic-Specific Questions

### Q1. [Easy] What does this CSS do?

```
:root {
  --primary: #a855f7;
}
.btn { background: var(--primary); }
```

*Hint:* Variables declared on :root are global.

**Answer:** The button gets a purple background (`#a855f7`). The value is read from the global `--primary` variable.

Variables defined on `:root` are available to every element in the document. `var(--primary)` reads the value and applies it to background.

### Q2. [Easy] What background color does the button get?

```
.btn {
  background: var(--missing, #06b6d4);
}
```

*Hint:* The second argument to var() is a fallback.

**Answer:** Cyan (`#06b6d4`).

Because `--missing` is not defined anywhere, `var()` uses its fallback value `#06b6d4`. Fallbacks are the safety net for reusable components.

### Q3. [Easy] Why does this not work?

```
:root {
  primary: red;
}
.btn { background: var(primary); }
```

*Hint:* Custom properties need a specific prefix.

**Answer:** Custom properties must start with `--` (two dashes). Both the definition and the `var()` call need the dashes.

`primary: red` is not a known CSS property, so the browser ignores it. `var(primary)` is also invalid. The correct form is `--primary: red` and `var(--primary)`.

### Q4. [Easy] What does this give you?

```
:root {
  --s: 8px;
}
.box {
  padding: calc(var(--s) * 3);
}
```

*Hint:* calc() can multiply variables.

**Answer:** `padding: 24px` (8px x 3).

`calc()` works with variables. `8px * 3` evaluates to `24px`. This is the pattern for spacing scales.

### Q5. [Easy] Which element does `:root` select?

*Hint:* It is the topmost element.

**Answer:** The `` element (but with higher specificity than `html`).

`:root` is a pseudo-class that matches the root of the document. In HTML, that is always ``, but `:root` has higher specificity, so it is preferred for defining global variables.

### Q6. [Easy] What color is the heading?

```
:root { --brand: purple; }
.panel { --brand: orange; }
.panel h1 { color: var(--brand); }
```

*Hint:* Variables cascade and inherit.

**Answer:** `orange`.

The heading is inside `.panel`, which redefines `--brand` as orange. Since variables inherit, the heading uses the closer (orange) value, not the global purple.

### Q7. [Easy] What does this do?

```
document.documentElement.style.setProperty('--primary', '#ec4899');
```

*Hint:* It writes a variable on .

**Answer:** Sets the `--primary` variable on the root element to hot pink. Every element using `var(--primary)` updates instantly.

`document.documentElement` is ``. `style.setProperty` sets an inline style. Writing a custom property on the root element makes it visible document-wide.

### Q8. [Easy] What is the final background color?

```
:root { --bg: white; }
body.dark { --bg: #0f172a; }
body { background: var(--bg); }
/* HTML:  */
```

*Hint:* The body has the dark class.

**Answer:** `#0f172a` (dark navy).

When `body` has the `dark` class, `--bg` is redefined as `#0f172a` and that value is used by the body's background. This is the basic dark mode pattern.

### Q9. [Easy] Which variable value wins?

```
:root { --c: red; }
.card { --c: blue; }
.card .title { color: var(--c); }
```

*Hint:* Closer ancestor wins.

**Answer:** `blue`.

`.title` inherits from `.card`, which redefines `--c` as blue. The closer scope wins, just like normal CSS inheritance.

### Q10. [Easy] Why are CSS variables better than Sass variables for theming?

*Hint:* Think about when each exists.

**Answer:** CSS variables are live in the browser. They can be changed at runtime (by JavaScript or media queries) and respond to class toggles. Sass variables are compiled away before the browser sees the CSS, so they cannot change without a rebuild.

Sass variables are a build-time find-and-replace. CSS variables are real values stored in the browser's style system and are reactive. This is what enables runtime theming, live color pickers, and media-query-based theming without extra JavaScript.

### Q11. [Medium] What color is the button?

```
.btn {
  background: var(--x, var(--y, #f59e0b));
}
```

*Hint:* Nested fallbacks are allowed.

**Answer:** Amber (`#f59e0b`) if both `--x` and `--y` are missing.

When `--x` is missing, the fallback `var(--y, #f59e0b)` is tried. If `--y` is also missing, the final fallback `#f59e0b` is used. You can nest `var()` as many times as you need.

### Q12. [Medium] What is the computed padding?

```
:root { --s: 4px; }
.box { padding: calc(var(--s) * var(--mult, 5)); }
```

*Hint:* Fallback is used for --mult.

**Answer:** `20px` (4 x 5).

`--mult` is not defined, so its fallback 5 is used. `4px * 5 = 20px`. Fallbacks can be numeric values used inside calc().

### Q13. [Medium] Does this work?

```
.box {
  --size: 20;
  width: var(--size)px;
}
```

*Hint:* CSS does not concatenate like that.

**Answer:** No. You cannot attach a unit to a `var()` by writing `px` after it. Use `calc(var(--size) * 1px)` instead.

CSS does not concatenate string tokens like that. To attach a unit, multiply the unitless value by `1px` inside `calc()`: `width: calc(var(--size) * 1px)`.

### Q14. [Medium] What is the output of this JavaScript?

```
const val = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary');
console.log(typeof val);
console.log(val.length > 0);
```

*Hint:* getPropertyValue returns a string.

**Answer:** `string`
`true` (assuming --primary is defined somewhere).

`getPropertyValue` always returns a string. If the property is defined, the returned string has length greater than 0. Remember to call `.trim()` because there is often a leading space.

### Q15. [Medium] Which variable wins?

```
:root { --color: red; }
.a { --color: green; }
.b { --color: blue; }
/* hello

 */
p { color: var(--color); }
```

*Hint:* Walk up the DOM tree.

**Answer:** `blue`.

`.b` is the closest ancestor of `p` that defines `--color`, so its value (blue) wins. Variables follow normal inheritance rules.

### Q16. [Medium] What does this media query do?

```
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0f172a;
    --text: #f1f5f9;
  }
}
```

*Hint:* It responds to system settings.

**Answer:** When the user's operating system is in dark mode, these variable values are applied automatically. Users with light mode get the default values.

`prefers-color-scheme` reflects the user's OS-level preference. Variables can be redefined inside the media query for automatic theming, without any JavaScript.

### Q17. [Medium] Does this work for dark mode?

```
body { background: white; }
body.dark { background: black; }
```

*Hint:* It works but it is not the best approach.

**Answer:** Yes, but it does not scale. You would need duplicate rules for every element that changes in dark mode. Use variables instead.

Without variables, you must write `body.dark .card`, `body.dark .nav`, `body.dark .footer` and so on. With variables, you redefine colors once inside `body.dark` and every element updates for free.

### Q18. [Medium] What is the padding on .card?

```
:root {
  --s-1: 4px;
  --s-2: 8px;
  --s-3: 12px;
  --s-4: 16px;
  --s-5: 24px;
}
.card { padding: var(--s-3) var(--s-5); }
```

*Hint:* Two-value padding means vertical horizontal.

**Answer:** 12px top and bottom, 24px left and right.

Two-value padding is `vertical horizontal`. `--s-3` is 12px and `--s-5` is 24px. This is how design systems apply consistent spacing: only ever use values from the scale.

### Q19. [Medium] What color does the .badge use?

```
.card { --accent: #7c3aed; }
.card.success { --accent: #16a34a; }
.badge { background: var(--accent); }
/* New

 */
```

*Hint:* The badge is inside a card.success.

**Answer:** Green (`#16a34a`).

`.card.success` overrides `--accent` to green. The badge, as a descendant, inherits that value. This is how you build variant components without rewriting selectors.

### Q20. [Medium] What happens if you forget .trim()?

```
const c = getComputedStyle(document.documentElement).getPropertyValue('--primary');
element.style.color = c;
```

*Hint:* CSS values can have extra whitespace.

**Answer:** It usually works because browsers tolerate leading whitespace in CSS values. But string comparisons (`c === '#a855f7'`) will fail and some contexts may reject the value.

`getPropertyValue` often returns the value with a leading space (e.g., " #a855f7"). Assigning it back to CSS works, but comparing to a literal string like `'#a855f7'` will not match. Always call `.trim()`.

### Q21. [Medium] What does this print?

```
document.documentElement.style.setProperty('--x', '10px');
const v = getComputedStyle(document.documentElement).getPropertyValue('--x').trim();
console.log(v);
```

*Hint:* setProperty writes, getPropertyValue reads.

**Answer:** `10px`

setProperty writes the value as an inline style on ``. getPropertyValue reads the computed value and `.trim()` removes any leading whitespace.

### Q22. [Medium] What is the font size?

```
:root {
  --base: 16px;
  --h1: calc(var(--base) * 2);
}
h1 { font-size: var(--h1); }
```

*Hint:* Calculate with the base.

**Answer:** `32px`.

`--h1` is computed as `16px * 2 = 32px`. This is how you build a modular type scale from a single base size.

### Q23. [Medium] Why do component libraries define variables on the component itself (`.card { --card-bg: white; }`) instead of only on `:root`?

*Hint:* Think about overrides and encapsulation.

**Answer:** Component-scoped variables let consumers override just that component's theming without affecting the rest of the page. A variant like `.card.danger` can redefine `--card-bg` and change only that one card's look, without a single new style rule.

This pattern is the foundation of modern component libraries (Radix, shadcn, Material). The component advertises its theming API through its variables, and variants override those variables. No deep selectors, no specificity wars, and no need to rewrite rules for each variant.

### Q24. [Medium] What is a 'design token' and how do CSS variables fit in?

*Hint:* Tokens are named design decisions.

**Answer:** A design token is a named value representing a design decision (a color, spacing unit, font size, shadow, radius, etc.). CSS variables are the browser-native way to implement tokens: the token name becomes the variable name, and its value lives in one place.

Design tokens abstract raw values into meaningful names. Instead of `#a855f7`, you write `var(--color-primary)`. Designers and developers use the same names. Changes happen in one place. CSS variables are a perfect fit because they are standard, inherited, and live at runtime.

### Q25. [Medium] When should you use `:root` versus `html` for global variables?

*Hint:* Specificity.

**Answer:** `:root` has higher specificity than `html`, so variables defined there are less likely to be accidentally overridden. Always prefer `:root` for global CSS variables.

Both select the same element in HTML, but `:root` is a pseudo-class with class-level specificity. Using it signals intent ('global variables live here') and protects against accidental overrides.

### Q26. [Hard] What does the button look like?

```
.btn {
  --bg: linear-gradient(135deg, #7c3aed, #ec4899);
  background: var(--bg);
  padding: 14px 28px;
  border: none;
  border-radius: 999px;
  color: white;
}
```

*Hint:* Variables can hold any CSS value, including functions.

**Answer:** A rounded pill button with a purple-to-pink diagonal gradient background.

Variables are not limited to colors. They can hold any valid CSS value: gradients, shadows, transforms, lists of values, even entire shorthand declarations.

### Q27. [Hard] What happens here?

```
:root { --size: 20; }
.box { width: var(--size) * 1px; }
```

*Hint:* Can you multiply outside calc()?

**Answer:** It does not work. Width ends up invalid and falls back to auto. You must wrap the multiplication in `calc()`: `width: calc(var(--size) * 1px);`.

Arithmetic in CSS requires `calc()`. Without it, the expression is invalid and the property is ignored. Inside `calc()`, multiplying a unitless number by `1px` produces a pixel value.

### Q28. [Hard] What is logged?

```
:root { --primary: #a855f7; }
// In JS
const root = document.documentElement;
root.style.setProperty('--primary', '#06b6d4');
const v = getComputedStyle(root).getPropertyValue('--primary').trim();
console.log(v);
```

*Hint:* setProperty overrides.

**Answer:** `#06b6d4`

`setProperty` writes an inline style on ``, which has higher specificity than the `:root` stylesheet rule. The computed value reflects the inline override.

### Q29. [Hard] Is this a valid dark mode pattern?

```
body { --bg: white; }
@media (prefers-color-scheme: dark) {
  body { --bg: #0f172a; }
}
body.force-light { --bg: white; }
body { background: var(--bg); }
```

*Hint:* Specificity decides.

**Answer:** Yes. The default is light. OS dark mode flips it to dark. The `force-light` class explicitly overrides back to light regardless of OS preference.

This is a real-world dark mode pattern: respect OS preference by default but allow the user to force a specific theme via a toggle class. Specificity of `body.force-light` beats both the plain `body` rule and the rule inside the media query (they are all equally specific, but the force-light selector is more specific because it includes a class).

### Q30. [Hard] Why does this transition not animate smoothly?

```
.box {
  --size: 100px;
  width: var(--size);
  transition: width 0.3s;
}
.box:hover { --size: 200px; }
```

*Hint:* Are CSS variables animatable?

**Answer:** By default, CSS variables are not animatable because the browser does not know their type. The transition does not run. Use `@property --size { syntax: ''; initial-value: 100px; inherits: false; }` to declare the type so it animates.

Plain CSS variables have no declared type, so the browser treats changes as instantaneous. The `@property` at-rule (registered custom properties) declares a syntax, which lets the browser interpolate values and animate them.

### Q31. [Hard] How would you build a theme switcher with three themes (light, dark, sepia)?

*Hint:* Use data attributes or classes on body.

**Answer:** Define variables for light on `:root` and add `[data-theme='dark']` and `[data-theme='sepia']` selectors that override the variables. JavaScript sets `document.documentElement.dataset.theme` and optionally saves to `localStorage`.

Data attributes are cleaner than multiple classes and scale well. The CSS looks like `[data-theme='dark'] { --bg: ...; --text: ...; }`. The JavaScript is a single line: `document.documentElement.dataset.theme = 'sepia'`. Adding a new theme is just adding another CSS block.

### Q32. [Hard] What is the difference between scoping a variable on `html`, on `body`, and on a specific component?

*Hint:* Who inherits?

**Answer:** On `html` or `:root`: available globally to everything. On `body`: available to all body content but not `head`. On a component: available only to that component and its descendants. Use the smallest scope that achieves your goal.

Global variables (on `:root`) are best for design tokens used across the whole app. Body-scoped variables are useful when you want theme classes like `body.dark`. Component-scoped variables are for theming APIs of individual components.

## Multiple Choice Questions

### Q1. [Easy] How do you declare a CSS custom property named 'primary'?

**Answer:** C

**C is correct.** CSS custom properties start with two dashes. `$` is Sass syntax and `@` is Less syntax — neither works in plain CSS.

### Q2. [Easy] How do you use a custom property in a CSS value?

**Answer:** B

**B is correct.** The `var()` function reads the value of a custom property. You must include the two leading dashes.

### Q3. [Easy] Where is the most common place to declare global CSS variables?

**Answer:** B

**B is correct.** `:root` is the document root with class-level specificity. Variables defined there are global and harder to accidentally override.

### Q4. [Easy] What is the purpose of the second argument in `var(--name, fallback)`?

**Answer:** B

**B is correct.** The fallback is used when the custom property is not defined in the current scope. It makes components resilient to being dropped into projects that do not define your variables.

### Q5. [Easy] What does `document.documentElement.style.setProperty('--bg', 'black')` do?

**Answer:** C

**C is correct.** `setProperty` writes a custom property as an inline style on the target element. Writing it on `` makes it visible document-wide.

### Q6. [Easy] Can CSS variables hold values other than colors?

**Answer:** D

**D is correct.** Variables can hold any CSS value: colors, sizes, gradients, shadows, transforms, even multi-value shorthands.

### Q7. [Easy] What is the main advantage of CSS variables over Sass variables?

**Answer:** B

**B is correct.** CSS variables are live in the browser — they can be changed by JavaScript, by class toggles, by media queries. Sass variables are compiled away before the browser sees the CSS.

### Q8. [Easy] Which of these is a valid CSS variable name?

**Answer:** A

**A is correct.** Custom properties must begin with exactly two dashes. Single dash, dollar sign, or no prefix are all invalid.

### Q9. [Medium] How do variables cascade through the DOM?

**Answer:** B

**B is correct.** Variables follow normal CSS inheritance. A variable defined on a parent is available to all descendants, and closer definitions override farther ones.

### Q10. [Medium] What is the cleanest way to build a dark mode toggle?

**Answer:** B

**B is correct.** Variables eliminate the need to duplicate rules. Override the color variables inside `.dark` and toggle the class on `body`. Every element that uses `var()` flips automatically.

### Q11. [Medium] Why should you call .trim() after getPropertyValue?

**Answer:** B

**B is correct.** `getPropertyValue` returns the value with any whitespace that was in the original declaration, typically a leading space. String comparisons fail without `.trim()`.

### Q12. [Medium] What media query lets you respond to the OS dark mode setting?

**Answer:** B

**B is correct.** `prefers-color-scheme` reflects the user's OS-level preference. Values are `light`, `dark`, and `no-preference`.

### Q13. [Medium] What is a design token?

**Answer:** B

**B is correct.** Design tokens are named design decisions — like `color.primary` or `spacing.md`. CSS variables are the browser-native way to implement them.

### Q14. [Medium] Why might you define variables on a component (e.g., .card) instead of :root?

**Answer:** A

**A is correct.** Component-scoped variables expose a theming API. Variants like `.card.danger` just override the relevant variables, so you do not have to rewrite every selector for each variant.

### Q15. [Medium] How do you attach a unit to a unitless variable?

**Answer:** B

**B is correct.** Multiplying a unitless value by `1px` inside `calc()` produces a length. Direct concatenation like `var(--size)px` is not valid CSS.

### Q16. [Hard] Why might transitions on a CSS variable not animate?

**Answer:** B

**B is correct.** Plain custom properties have no type. The `@property` at-rule registers a type (like `` or ``), which enables interpolation and animation.

### Q17. [Hard] What does this declaration do?
`@property --accent { syntax: ''; initial-value: #a855f7; inherits: true; }`

**Answer:** B

**B is correct.** `@property` (registered custom properties) declares the variable's type, initial value, and inheritance. This unlocks smooth transitions and animations on custom properties.

### Q18. [Hard] Which is the cleanest way to support multiple themes (light, dark, sepia)?

**Answer:** B

**B is correct.** Data attributes scale well. You redefine variables per theme, and switching themes is just setting `document.documentElement.dataset.theme`. Adding a fourth theme is a single new CSS block.

## Coding Challenges

### Challenge 1. Themed Button Set

**Difficulty:** Easy

Create a set of 4 buttons (primary, success, danger, warning) using CSS variables. Define all colors, padding, and radius as variables on `:root`. Every button must use `var()` - no hardcoded values inside `.btn` rules. Name them after Aarav's projects.

**Constraints:**

- No hardcoded colors, padding, or radius in .btn rules. Use variables for everything.

**Sample input:**

```
None
```

**Sample output:**

```
Four colorful buttons in a row: purple, green, red, amber. All sharing consistent padding and radius.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  :root {
    --primary: #a855f7;
    --success: #10b981;
    --danger: #ef4444;
    --warning: #f59e0b;
    --radius: 12px;
    --pad-y: 12px;
    --pad-x: 24px;
    --text-on: #ffffff;
  }
  body { font-family: 'Segoe UI', sans-serif; background: #0f172a; padding: 40px; display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
  .btn { padding: var(--pad-y) var(--pad-x); border: none; border-radius: var(--radius); color: var(--text-on); font-size: 16px; font-weight: 600; cursor: pointer; }
  .btn-primary { background: var(--primary); }
  .btn-success { background: var(--success); }
  .btn-danger  { background: var(--danger); }
  .btn-warning { background: var(--warning); }
</style>
</head>
<body>
  <button class="btn btn-primary">Start Aarav's Quiz</button>
  <button class="btn btn-success">Save Progress</button>
  <button class="btn btn-danger">Delete Project</button>
  <button class="btn btn-warning">Reset Scores</button>
</body>
</html>
```

### Challenge 2. Spacing Scale Card

**Difficulty:** Easy

Build a profile card for Priya using a consistent spacing scale. Define `--s-1` through `--s-6` variables (4, 8, 12, 16, 24, 32 px). Every margin and padding inside the card must use one of these variables. Include a name, bio paragraph, and a button.

**Constraints:**

- All margin and padding values must be `var(--s-X)`. No raw px values for spacing.

**Sample input:**

```
None
```

**Sample output:**

```
A neatly spaced profile card where every gap and padding comes from the same scale.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  :root {
    --s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px; --s-5: 24px; --s-6: 32px;
    --brand: #7c3aed;
    --text: #0f172a;
    --muted: #64748b;
  }
  body { font-family: 'Segoe UI', sans-serif; background: #f8fafc; padding: var(--s-6); }
  .card { max-width: 420px; margin: 0 auto; background: white; border-radius: 16px; padding: var(--s-6); box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
  .card h2 { color: var(--text); margin-bottom: var(--s-2); font-size: 24px; }
  .card .role { color: var(--brand); font-size: 13px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: var(--s-4); }
  .card p { color: var(--muted); line-height: 1.6; margin-bottom: var(--s-5); }
  .card button { padding: var(--s-3) var(--s-5); background: var(--brand); color: white; border: none; border-radius: 10px; font-weight: 600; cursor: pointer; }
</style>
</head>
<body>
  <div class="card">
    <h2>Priya Desai</h2>
    <div class="role">Frontend Student</div>
    <p>I am learning CSS variables to build design systems. Every piece of spacing on this card comes from the same scale, so everything feels in rhythm.</p>
    <button>Follow</button>
  </div>
</body>
</html>
```

### Challenge 3. Dark Mode Toggle with JavaScript

**Difficulty:** Medium

Build a complete page with a dark mode toggle button. Define light colors on `:root` and dark colors on `body.dark`. One line of JavaScript toggles the `dark` class. Include a header, a card, and some text so you can see the theme change. Name the page after Rohan.

**Constraints:**

- Use CSS variables for all colors. JavaScript should be 1-2 lines max.

**Sample input:**

```
Click the toggle button
```

**Sample output:**

```
The whole page smoothly transitions between light and dark themes.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  :root {
    --bg: #ffffff;
    --text: #0f172a;
    --muted: #64748b;
    --card: #f1f5f9;
    --border: #e2e8f0;
    --brand: #7c3aed;
  }
  body.dark {
    --bg: #0b1120;
    --text: #f1f5f9;
    --muted: #94a3b8;
    --card: #1e293b;
    --border: #334155;
    --brand: #a855f7;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; padding: 40px 24px; transition: background 0.3s, color 0.3s; }
  .toggle { position: fixed; top: 20px; right: 20px; padding: 10px 20px; background: var(--brand); color: white; border: none; border-radius: 999px; cursor: pointer; font-weight: 600; }
  h1 { color: var(--brand); font-size: 32px; margin-bottom: 16px; }
  .card { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 24px; max-width: 500px; transition: background 0.3s, border-color 0.3s; }
  .card p { color: var(--muted); margin-top: 8px; line-height: 1.6; }
</style>
</head>
<body>
  <button class="toggle" id="t">Toggle</button>
  <h1>Rohan's Dashboard</h1>
  <div class="card">
    <h2>Welcome back</h2>
    <p>This dark mode toggle is powered entirely by CSS variables. Redefine the colors on body.dark, toggle the class, and the whole page changes smoothly.</p>
  </div>
  <script>
    document.getElementById('t').addEventListener('click', function() {
      document.body.classList.toggle('dark');
    });
  </script>
</body>
</html>
```

### Challenge 4. Live Color Picker

**Difficulty:** Medium

Build a page with a color input and a radius slider. As the user picks a color and drags the slider, the main preview element updates in real time. Use `document.documentElement.style.setProperty` to write CSS variables. Name the preview 'Ishita's Button'.

**Constraints:**

- Use setProperty. The preview element should only read from var() for color and radius.

**Sample input:**

```
User picks a color and drags the radius slider
```

**Sample output:**

```
The preview button instantly updates with the new color and border radius.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  :root {
    --primary: #a855f7;
    --radius: 14px;
  }
  body { font-family: 'Segoe UI', sans-serif; background: #0f172a; color: white; text-align: center; padding: 40px; }
  h1 { color: var(--primary); margin-bottom: 20px; }
  .controls { display: flex; gap: 20px; justify-content: center; margin-bottom: 32px; flex-wrap: wrap; }
  .controls label { display: flex; flex-direction: column; gap: 6px; font-size: 13px; color: #cbd5e1; }
  .preview { display: inline-block; padding: 24px 48px; background: var(--primary); color: white; font-weight: 700; font-size: 22px; border-radius: var(--radius); box-shadow: 0 10px 30px rgba(0,0,0,0.4); transition: background 0.2s, border-radius 0.2s; }
</style>
</head>
<body>
  <h1>Live Theme Picker</h1>
  <div class="controls">
    <label>Color<input type="color" id="c" value="#a855f7"></label>
    <label>Radius<input type="range" id="r" min="0" max="40" value="14"></label>
  </div>
  <div class="preview">Ishita's Button</div>
  <script>
    var root = document.documentElement;
    document.getElementById('c').addEventListener('input', function(e) {
      root.style.setProperty('--primary', e.target.value);
    });
    document.getElementById('r').addEventListener('input', function(e) {
      root.style.setProperty('--radius', e.target.value + 'px');
    });
  </script>
</body>
</html>
```

### Challenge 5. Card Variants with Scoped Variables

**Difficulty:** Hard

Build a card component that defines its own theming variables (`--card-bg`, `--card-accent`, `--card-title`, `--card-text`). Then create three variants (.success, .danger, .info) by overriding only the variables - without writing new rules for h3, p, or the tag. Show cards for Vivaan, Anika, and Kavya.

**Constraints:**

- Variant classes may ONLY set variables. No new rules for h3, p, or .tag inside variants.

**Sample input:**

```
None
```

**Sample output:**

```
Three identical card structures with completely different color themes.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: 'Segoe UI', sans-serif; background: #f8fafc; padding: 40px 24px; display: grid; gap: 20px; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); max-width: 1000px; margin: 0 auto; }
  .card {
    --card-bg: #ffffff;
    --card-border: #e2e8f0;
    --card-accent: #7c3aed;
    --card-title: #0f172a;
    --card-text: #475569;
    background: var(--card-bg);
    border: 2px solid var(--card-border);
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.06);
  }
  .card h3 { color: var(--card-title); font-size: 20px; margin-bottom: 8px; }
  .card p { color: var(--card-text); font-size: 14px; line-height: 1.6; }
  .card .tag { display: inline-block; margin-top: 12px; padding: 4px 12px; background: var(--card-accent); color: white; border-radius: 999px; font-size: 12px; font-weight: 600; }
  .card.success { --card-bg: #f0fdf4; --card-border: #86efac; --card-accent: #16a34a; }
  .card.danger  { --card-bg: #fef2f2; --card-border: #fca5a5; --card-accent: #dc2626; }
  .card.info    { --card-bg: #f0f9ff; --card-border: #7dd3fc; --card-accent: #0284c7; }
</style>
</head>
<body>
  <div class="card success"><h3>Vivaan</h3><p>Finished chapter 21 on CSS variables. Way to go!</p><span class="tag">Completed</span></div>
  <div class="card danger"><h3>Anika</h3><p>Missed the weekly challenge. Try it this week.</p><span class="tag">Alert</span></div>
  <div class="card info"><h3>Kavya</h3><p>Just published a new blog about design systems.</p><span class="tag">News</span></div>
</body>
</html>
```

### Challenge 6. Full Design System Sample Page

**Difficulty:** Hard

Build a sample page that uses a complete design token system: colors, spacing scale (s-1 through s-6), type scale (t-sm through t-2xl), radius (sm/md/lg), and shadow (sm/md/lg). The page should include a navbar, a hero with a CTA, and a feature card grid. Every single value on the page must come from a variable. Name the project 'Ishaan's Studio'.

**Constraints:**

- Zero hardcoded values for color, spacing, font-size, radius, or shadow. Everything is a variable.

**Sample input:**

```
None
```

**Sample output:**

```
A polished landing page where changing a few variables at the top restyles the entire page.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
<style>
  :root {
    --s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px; --s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
    --t-sm: 13px; --t-md: 16px; --t-lg: 20px; --t-xl: 28px; --t-2xl: 44px;
    --r-sm: 8px; --r-md: 14px; --r-lg: 22px;
    --sh-sm: 0 1px 3px rgba(0,0,0,0.08); --sh-md: 0 6px 18px rgba(0,0,0,0.1); --sh-lg: 0 20px 50px rgba(0,0,0,0.18);
    --bg: #fafaf9; --card: #ffffff; --text: #0f172a; --muted: #64748b; --brand: #7c3aed; --brand-2: #ec4899; --border: #e2e8f0;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: var(--bg); color: var(--text); }
  .nav { display: flex; justify-content: space-between; align-items: center; padding: var(--s-4) var(--s-6); background: var(--card); border-bottom: 1px solid var(--border); box-shadow: var(--sh-sm); }
  .nav .brand { font-weight: 800; color: var(--brand); font-size: var(--t-lg); }
  .nav a { margin-left: var(--s-5); text-decoration: none; color: var(--muted); font-size: var(--t-md); }
  .nav a:hover { color: var(--brand); }
  .hero { text-align: center; padding: var(--s-8) var(--s-5); }
  .hero h1 { font-size: var(--t-2xl); background: linear-gradient(135deg, var(--brand), var(--brand-2)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: var(--s-4); line-height: 1.1; }
  .hero p { font-size: var(--t-lg); color: var(--muted); max-width: 640px; margin: 0 auto var(--s-6); line-height: 1.5; }
  .cta { display: inline-block; padding: var(--s-3) var(--s-6); background: var(--brand); color: white; border-radius: var(--r-md); font-weight: 700; font-size: var(--t-md); text-decoration: none; box-shadow: var(--sh-md); }
  .features { display: grid; gap: var(--s-5); grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); max-width: 1100px; margin: 0 auto; padding: 0 var(--s-5) var(--s-8); }
  .feature { background: var(--card); border: 1px solid var(--border); border-radius: var(--r-lg); padding: var(--s-6); box-shadow: var(--sh-sm); }
  .feature h3 { color: var(--brand); font-size: var(--t-lg); margin-bottom: var(--s-2); }
  .feature p { color: var(--muted); font-size: var(--t-sm); line-height: 1.6; }
</style>
</head>
<body>
  <nav class="nav">
    <div class="brand">Ishaan's Studio</div>
    <div>
      <a href="#">Work</a>
      <a href="#">Blog</a>
      <a href="#">Contact</a>
    </div>
  </nav>
  <section class="hero">
    <h1>Design Systems for Ages 10 to 99</h1>
    <p>Every pixel on this page comes from a CSS variable. Change six tokens at the top and the entire landing page gets a new personality.</p>
    <a href="#" class="cta">Explore the System</a>
  </section>
  <div class="features">
    <div class="feature"><h3>Token Driven</h3><p>Spacing, type, radius, shadow, and color all live in one place.</p></div>
    <div class="feature"><h3>Zero Rewrites</h3><p>Retheming is a one-line change, not a weekend refactor.</p></div>
    <div class="feature"><h3>Dark Mode Ready</h3><p>Add a dark class and redefine variables. Done in minutes.</p></div>
  </div>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/css-variables-and-theming/*
