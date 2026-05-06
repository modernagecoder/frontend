---
title: "Practice: CSS Selectors and Specificity"
description: "58 practice problems for CSS Selectors and Specificity in HTML and CSS"
slug: css-selectors-and-specificity-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/css-selectors-and-specificity/practice/
category: "HTML and CSS"
---
# Practice: CSS Selectors and Specificity

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] Which selector targets all paragraphs?

*Hint:* Use the tag name.

**Answer:** `p`

The element selector `p` targets all `` elements.

### Q2. [Easy] Which symbol starts a class selector?

*Hint:* Dot.

**Answer:** `.` (period)

Class selectors start with a dot: `.highlight { ... }`

### Q3. [Easy] Which symbol starts an ID selector?

*Hint:* Hash.

**Answer:** `#` (hash)

ID selectors start with a hash: `#main { ... }`

### Q4. [Easy] Write CSS to make all elements with class 'danger' red.

*Hint:* Use .danger.

**Answer:** ```
.danger {
  color: red;
}
```

Class selectors target elements with `class="danger"`.

### Q5. [Easy] Write CSS to style the element with id 'header' with a blue background.

*Hint:* Use #header.

**Answer:** ```
#header {
  background-color: blue;
}
```

ID selectors start with # and target the unique element with that id.

### Q6. [Easy] Which has higher specificity: `p` or `.note`?

*Hint:* Classes beat elements.

**Answer:** `.note` (class specificity 10 > element specificity 1).

Classes have specificity 10, elements have specificity 1. The class wins.

### Q7. [Easy] Which selector matches every element on the page?

*Hint:* An asterisk.

**Answer:** `*` (universal selector)

The universal selector `*` matches every element. Often used in CSS resets.

### Q8. [Easy] Write CSS to remove the margin and padding from every element on the page.

*Hint:* Use the universal selector.

**Answer:** ```
* {
  margin: 0;
  padding: 0;
}
```

The universal selector resets margin and padding on every element. This is a classic CSS reset.

### Q9. [Easy] What does `ul li` mean?

*Hint:* Space is the descendant selector.

**Answer:** Every `` that is inside a ``, at any depth.

A space between selectors is the descendant selector. It matches elements inside other elements, even if deeply nested.

### Q10. [Easy] What is the difference between `ul li` and `ul > li`?

*Hint:* Child vs descendant.

**Answer:** `ul li` matches all li inside ul at any depth. `ul > li` matches only DIRECT li children of ul.

The space is descendant (any depth). The > is child (direct children only). This difference matters when there are nested lists.

### Q11. [Easy] Write CSS to style all paragraphs inside articles with a grey color.

*Hint:* Use descendant selector.

**Answer:** ```
article p {
  color: grey;
}
```

`article p` targets every p inside an article tag.

### Q12. [Easy] What is the specificity of `#main`?

*Hint:* IDs are 100.

**Answer:** 100

ID selectors always have a specificity of 100.

### Q13. [Easy] Why does this CSS not style the element?

```
highlight {
  color: yellow;
}
```

*Hint:* Missing symbol.

**Answer:** Missing dot. Should be `.highlight { color: yellow; }`

Without the dot, CSS thinks you are targeting a tag called `highlight`, which does not exist.

### Q14. [Easy] Write CSS to group h1, h2, and h3 and give them all a red color.

*Hint:* Use commas.

**Answer:** ```
h1, h2, h3 {
  color: red;
}
```

Commas group selectors. The same rule applies to all three.

### Q15. [Medium] What does `h1 + p` match?

*Hint:* Adjacent sibling.

**Answer:** The first `` element that comes immediately after an ``, sharing the same parent.

The `+` combinator targets the next immediate sibling. Only the very first p after each h1 is matched.

### Q16. [Medium] What does `h1 ~ p` match?

*Hint:* General sibling.

**Answer:** Every `` that comes after an ``, sharing the same parent (not just the first one).

The `~` combinator targets all following siblings. Every p after the h1 gets styled, not just the immediately next one.

### Q17. [Medium] Write CSS to target only the `li` elements that are direct children of `nav` (not nested ones).

*Hint:* Use the child combinator.

**Answer:** ```
nav > li {
  color: blue;
}
```

The `>` ensures only direct children are styled, not nested li elements inside sub-menus.

### Q18. [Medium] Which of these has higher specificity: `#main` or `.btn.large`?

*Hint:* ID is 100; two classes are 20.

**Answer:** `#main` (100 > 20).

One ID beats two classes. IDs are 100, each class is 10, so .btn.large is only 20.

### Q19. [Medium] Write a complete HTML page where every other list item has a grey background using nth-child.

*Hint:* Use li:nth-child(even).

**Answer:** ```
<!DOCTYPE html>

  li:nth-child(even) {
    background-color: lightgrey;
  }

  
    One
    Two
    Three
    Four
  

```

`:nth-child(even)` targets every 2nd, 4th, 6th item. The result is a zebra stripe pattern.

### Q20. [Medium] Given `.red { color: red; }` and `p { color: blue; }`, what color is `Text`?

*Hint:* Class wins over element.

**Answer:** Red. The class (10) beats the element (1).

Class specificity 10 beats element specificity 1. The paragraph will be red.

### Q21. [Medium] Write CSS using attribute selector to make all email inputs have a green border.

*Hint:* Use [type="email"].

**Answer:** ```
input[type="email"] {
  border: 2px solid green;
}
```

Attribute selectors let you style based on attribute values without needing classes.

### Q22. [Medium] Priya's CSS does not work. Why?

```
ul > li li {
  color: red;
}
```

*Hint:* Actually, it might work — analyse it.

**Answer:** The CSS is valid. It targets every li that is a descendant of a direct li child of ul. So it styles nested li elements.

This is a complex selector: direct li children of ul, then any li descendant of those. Valid but uncommon. There may be no bug if the HTML is structured to match.

### Q23. [Medium] Write CSS targeting the first li in a list using the :first-child pseudo-class.

*Hint:* Use li:first-child.

**Answer:** ```
li:first-child {
  font-weight: bold;
}
```

`:first-child` targets the first element of a specific type within its parent.

### Q24. [Medium] What is the specificity of `#main .card p`?

*Hint:* Add up: 100 + 10 + 1.

**Answer:** 111

ID (100) + class (10) + element (1) = 111.

### Q25. [Hard] Build a complete HTML page where links to PDFs show in bold red with a 'PDF' label automatically. Use an attribute selector.

*Hint:* Use a[href$=".pdf"].

**Answer:** ```
<!DOCTYPE html>

  a[href$=".pdf"] {
    color: red;
    font-weight: bold;
  }

  [Regular link](https://example.com)

  [Download PDF](document.pdf)

```

`[href$=".pdf"]` matches href values that END with '.pdf'. Great for styling download links automatically.

### Q26. [Hard] Given: `p { color: red; } p.note { color: blue; } #special { color: green; }`. What color is `Text`?

*Hint:* Compute specificity for each.

**Answer:** Green. #special has specificity 100, p.note has 11, p has 1. #special wins.

ID (100) > class+element (11) > element (1). The ID rule wins.

### Q27. [Hard] Write CSS to target every third item in a list using nth-child.

*Hint:* Use 3n.

**Answer:** ```
li:nth-child(3n) {
  color: purple;
}
```

`:nth-child(3n)` targets the 3rd, 6th, 9th items (every multiple of 3).

### Q28. [Hard] The text should be green, but it shows red. Why?

```

  .note { color: green; }

Text

```

*Hint:* Inline CSS.

**Answer:** Inline styles have specificity 1000, which beats the class's 10. Inline CSS wins.

Inline styles override class and ID selectors unless you use `!important` (not recommended).

## Mixed Questions

### Q1. [Easy] What does the universal selector * target?

*Hint:* Everything.

**Answer:** Every element on the page.

The asterisk matches all elements. Often used for CSS resets.

### Q2. [Easy] Write a class selector to make all elements with class 'big' have a 24px font size.

*Hint:* Start with a dot.

**Answer:** ```
.big {
  font-size: 24px;
}
```

The .big class selector targets all elements with class="big".

### Q3. [Easy] Can multiple elements share the same class?

*Hint:* Yes.

**Answer:** Yes, classes are designed to be reused on many elements.

Unlike IDs, classes are meant to be applied to multiple elements. That is their main advantage.

### Q4. [Easy] Can multiple elements share the same ID?

*Hint:* No.

**Answer:** No, IDs must be unique on a page.

IDs are meant to be unique. If you need to style multiple elements the same way, use a class.

### Q5. [Easy] Why is this class selector wrong?

```
#highlight { color: yellow; }
```

*Hint:* Wrong symbol.

**Answer:** If highlight is a class, use `.highlight` with a dot, not `#`.

# is for IDs, . is for classes. Always match the symbol to the attribute type.

### Q6. [Medium] Write CSS to style all elements with class 'card' AND also have the class 'featured'.

*Hint:* Chain the class selectors without a space.

**Answer:** ```
.card.featured {
  border: 3px solid gold;
}
```

Chaining selectors (no space) means the element must match BOTH. Specificity is 20 (two classes).

### Q7. [Medium] What is the specificity of `.btn.large`?

*Hint:* Two classes.

**Answer:** 20

Each class is 10. Two classes chained = 20.

### Q8. [Medium] Write a CSS rule to target all buttons that have the 'disabled' attribute.

*Hint:* Use [disabled].

**Answer:** ```
button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}
```

Attribute selectors target elements with specific attributes. `[disabled]` matches elements that simply have the attribute.

### Q9. [Medium] What does `a[href^="https"]` match?

*Hint:* ^ means starts with.

**Answer:** All `` tags whose href attribute starts with 'https'.

`^=` means starts with. This is useful for styling secure links differently.

### Q10. [Medium] The second-level list items are also being styled, but Aarav only wants the top-level ones. Fix:

```
.menu li { color: red; }
```

*Hint:* Change descendant to child.

**Answer:** Use `.menu > li` to target only direct children.

The descendant selector (space) matches at any depth. The child combinator (>) matches only direct children.

### Q11. [Medium] Write a complete HTML page styling the first letter of a paragraph in red with a bigger font. Use ::first-letter pseudo-element.

*Hint:* Use p::first-letter.

**Answer:** ```
<!DOCTYPE html>

  p::first-letter {
    color: red;
    font-size: 32px;
    font-weight: bold;
  }

  This paragraph has a fancy first letter.

```

Pseudo-elements like `::first-letter` style parts of an element. Useful for drop-cap effects.

### Q12. [Hard] Given: `p { color: red !important; } #id p { color: blue; }`. What wins?

*Hint:* !important trumps specificity.

**Answer:** Red wins because !important overrides specificity.

`!important` beats higher specificity. Even though #id p is more specific, the !important red wins. This is why !important is dangerous.

### Q13. [Hard] Build a complete HTML page with a styled nav menu where only the FIRST link is blue (use :first-child).

*Hint:* Use li:first-child a.

**Answer:** ```
<!DOCTYPE html>

  nav ul { list-style: none; display: flex; gap: 20px; }
  nav li:first-child a { color: blue; font-weight: bold; }

  
    
      [Home](/)
      [About](/about)
      [Contact](/contact)
    
  

```

`li:first-child a` targets the anchor inside the first li. Only the 'Home' link is blue and bold.

### Q14. [Hard] What is the specificity of `body #main .card p.bold`?

*Hint:* Count each type: 1 element + 1 ID + 2 classes + 1 element.

**Answer:** 112 (1 element + 100 ID + 10 class + 10 class + 1 element).

Element (1) + ID (100) + class (10) + class (10) + element (1) = 122. Correction: 1+100+10+10+1 = 122.

### Q15. [Hard] Aarav adds a class to override a style but it does not work. Fix:

```

  #main p { color: red; }
  .override { color: blue; }

  Text

```

*Hint:* ID has higher specificity.

**Answer:** #main p has specificity 101, .override has 10. The ID wins. To fix, use #main p.override or add more specificity.

To override a selector with an ID, you need equal or higher specificity. Use `#main p.override { color: blue; }` which has specificity 111.

## Multiple Choice Questions

### Q1. [Easy] Which symbol starts a class selector?

**B is correct.** Class selectors start with a dot: `.classname`. The # is for IDs.

### Q2. [Easy] Which symbol starts an ID selector?

**B is correct.** ID selectors start with a hash: `#idname`. The . is for classes.

### Q3. [Easy] What does the universal selector * do?

**B is correct.** The asterisk matches every element. Used in CSS resets to clear default margins and padding.

### Q4. [Easy] Which has higher specificity: a class or an element selector?

**B is correct.** Classes have specificity 10, elements have specificity 1. Classes win when both apply.

### Q5. [Easy] What does `ul li` target?

**B is correct.** The space is the descendant selector, matching elements at any depth inside their ancestor.

### Q6. [Easy] What does `ul > li` target?

**B is correct.** The > combinator means 'direct child only'. Nested li elements are not matched.

### Q7. [Easy] How do you group selectors to share the same rule?

**C is correct.** Commas group selectors: `h1, h2, h3 { color: red; }`

### Q8. [Easy] Can multiple HTML elements share the same ID?

**B is correct.** IDs are meant to be unique. If you need to target multiple elements, use a class instead.

### Q9. [Easy] What is the specificity of an element selector like `p`?

**B is correct.** Element selectors have specificity 1. Classes are 10, IDs are 100, inline is 1000.

### Q10. [Easy] What is the specificity of a class selector like `.btn`?

**B is correct.** Classes, attributes, and pseudo-classes all have specificity 10.

### Q11. [Easy] What is the specificity of an ID selector like `#main`?

**C is correct.** ID selectors have specificity 100. Only inline styles and !important can normally override them.

### Q12. [Easy] Which selector targets all input elements with type='email'?

**C is correct.** Attribute selectors use square brackets: `input[type='email']`

### Q13. [Medium] What does `h1 + p` select?

**C is correct.** The + is the adjacent sibling combinator. It matches the FIRST p immediately after each h1.

### Q14. [Medium] What does `h1 ~ p` select?

**B is correct.** The ~ is the general sibling combinator. It matches every p that comes after an h1 (same parent).

### Q15. [Medium] Which has higher specificity: `.btn` or `button`?

**B is correct.** Class (10) beats element (1). `.btn` wins.

### Q16. [Medium] What is the specificity of `#main .card p`?

**B is correct.** 1 ID (100) + 1 class (10) + 1 element (1) = 111.

### Q17. [Medium] What does `li:nth-child(even)` target?

**C is correct.** `:nth-child(even)` matches even-numbered children (2nd, 4th, 6th, etc.).

### Q18. [Medium] Which of the following rules applies to `Hi`: 
`.red { color: red; }` 
`#special { color: blue; }`

**B is correct.** #special has specificity 100, .red has 10. The ID wins. Blue paragraph.

### Q19. [Medium] What does `a[href^="https"]` target?

**B is correct.** `^=` means 'starts with'. Use `$=` for 'ends with' and `*=` for 'contains'.

### Q20. [Medium] What is the specificity of an inline style?

**C is correct.** Inline styles have specificity 1000. Only !important can override them.

### Q21. [Hard] Which statement about !important is TRUE?

**C is correct.** `!important` overrides normal specificity, but overusing it leads to unmaintainable CSS. Use proper specificity instead.

### Q22. [Hard] When two CSS rules have the same specificity, which wins?

**B is correct.** With equal specificity, the later rule wins. This is why order matters in CSS files.

### Q23. [Hard] What is the specificity of `.nav > li.active a`?

**A is correct.** 1 class (10) + 1 element (1) + 1 class (10) + 1 element (1) = 22. Remember that > is not counted.

### Q24. [Hard] Which property is NOT inherited by default?

**C is correct.** Margin, padding, border, background — these are not inherited. Text-related properties (color, font, line-height) are inherited.

### Q25. [Hard] Which of the following has the HIGHEST specificity?

**D is correct.** Inline styles have specificity 1000, beating all the others. A has 111, B has 40, C has 105.

## Coding Challenges

### Challenge 1. Class and ID Styling

**Difficulty:** Easy

Build a page with 3 paragraphs. One uses id 'intro' (blue), one uses class 'warning' (red), and one has no class or id (default black).

**Constraints:**

- Use both class and ID selectors. Internal CSS.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Three paragraphs in blue, red, and black.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Class and ID</title>
  <style>
    #intro { color: blue; font-size: 20px; }
    .warning { color: red; font-weight: bold; }
  </style>
</head>
<body>
  <p id="intro">Welcome to the page!</p>
  <p class="warning">Warning: Please save your work.</p>
  <p>This is a normal paragraph.</p>
</body>
</html>
```

### Challenge 2. Descendant Selector

**Difficulty:** Easy

Build a page with an article containing 3 paragraphs, and a separate div with 2 paragraphs. Use descendant selector to make only the paragraphs inside the article red.

**Constraints:**

- Use `article p` as the selector.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Only article paragraphs are red. Div paragraphs stay default.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Descendant Selector</title>
  <style>
    article p { color: red; }
  </style>
</head>
<body>
  <article>
    <p>Red paragraph 1</p>
    <p>Red paragraph 2</p>
    <p>Red paragraph 3</p>
  </article>
  <div>
    <p>Normal paragraph</p>
    <p>Another normal paragraph</p>
  </div>
</body>
</html>
```

### Challenge 3. Zebra Stripe Table

**Difficulty:** Medium

Build a table of 5 student rows (Aarav, Priya, Rohan, Ananya, Vikram) with a zebra stripe pattern using nth-child. Every other row should have a grey background.

**Constraints:**

- Use `tr:nth-child(even)` for striping.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A table with alternating white and grey rows.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Zebra Table</title>
  <style>
    table { border-collapse: collapse; margin: 20px; font-family: Arial; }
    th, td { padding: 10px 15px; border: 1px solid #ccc; }
    thead { background-color: #2c3e50; color: white; }
    tr:nth-child(even) { background-color: #f5f5f5; }
  </style>
</head>
<body>
  <table>
    <thead>
      <tr><th>Name</th><th>Class</th><th>Marks</th></tr>
    </thead>
    <tbody>
      <tr><td>Aarav</td><td>8A</td><td>92</td></tr>
      <tr><td>Priya</td><td>8A</td><td>95</td></tr>
      <tr><td>Rohan</td><td>8B</td><td>78</td></tr>
      <tr><td>Ananya</td><td>8A</td><td>88</td></tr>
      <tr><td>Vikram</td><td>8B</td><td>85</td></tr>
    </tbody>
  </table>
</body>
</html>
```

### Challenge 4. Navigation with First-child

**Difficulty:** Medium

Build a horizontal navigation menu with 5 links. Use :first-child to style the first link with a highlight color, and :last-child to style the last link with a different color.

**Constraints:**

- Use :first-child and :last-child pseudo-classes.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
5 nav links where the first is one color and the last is another color.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Nav</title>
  <style>
    nav ul { list-style: none; display: flex; gap: 20px; padding: 20px; background: #333; }
    nav a { color: white; text-decoration: none; padding: 8px 12px; }
    nav li:first-child a { background: #ff4081; border-radius: 5px; }
    nav li:last-child a { background: #22c55e; border-radius: 5px; }
  </style>
</head>
<body>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/work">Work</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</body>
</html>
```

### Challenge 5. Attribute Selector for Inputs

**Difficulty:** Medium

Build a form with text, email, password, and number inputs. Use attribute selectors to style each type with a different border color (blue, green, red, purple).

**Constraints:**

- Use `input[type='...']` for each.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Four inputs with differently-colored borders based on type.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Attribute Selectors</title>
  <style>
    body { font-family: Arial; padding: 30px; }
    label { display: block; margin-top: 10px; }
    input { padding: 8px; font-size: 16px; }
    input[type="text"] { border: 2px solid blue; }
    input[type="email"] { border: 2px solid green; }
    input[type="password"] { border: 2px solid red; }
    input[type="number"] { border: 2px solid purple; }
  </style>
</head>
<body>
  <form>
    <label>Name: <input type="text"></label>
    <label>Email: <input type="email"></label>
    <label>Password: <input type="password"></label>
    <label>Age: <input type="number"></label>
  </form>
</body>
</html>
```

### Challenge 6. Specificity Demo

**Difficulty:** Medium

Build a page that demonstrates specificity: create one paragraph that has an ID, a class, and an inline style. Each rule specifies a different color. Show which one wins.

**Constraints:**

- Include 4 different color rules at different specificities. Comment each rule with its specificity score.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A paragraph where the inline style wins over the ID and class.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Specificity Demo</title>
  <style>
    /* Specificity 1 */
    p { color: black; }
    /* Specificity 10 */
    .note { color: green; }
    /* Specificity 100 */
    #special { color: purple; }
    /* Specificity 111 */
    p#special.note { color: orange; }
  </style>
</head>
<body>
  <p>Plain (black, specificity 1)</p>
  <p class="note">Class only (green, specificity 10)</p>
  <p id="special">ID only (purple, specificity 100)</p>
  <p id="special" class="note" style="color: red;">All + inline (red wins, specificity 1000)</p>
</body>
</html>
```

### Challenge 7. Advanced Selector Combo

**Difficulty:** Hard

Build a blog post page. Style: (1) only the first paragraph after h1 with a larger font, (2) every link that ends with .pdf in red bold, (3) every third li in a list with a grey background.

**Constraints:**

- Use adjacent sibling (+), attribute selector ($=), and nth-child.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A page showing all three selector techniques in action.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Blog Post</title>
  <style>
    body { font-family: Arial; max-width: 700px; margin: auto; padding: 30px; }
    h1 + p {
      font-size: 22px;
      font-weight: bold;
      color: #2c3e50;
    }
    a[href$=".pdf"] {
      color: red;
      font-weight: bold;
    }
    li:nth-child(3n) {
      background-color: #f0f0f0;
      padding: 5px;
    }
  </style>
</head>
<body>
  <h1>Learning CSS Selectors</h1>
  <p>This is the first paragraph (bold and bigger).</p>
  <p>This is a normal paragraph.</p>
  <p>Another normal paragraph.</p>
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three (grey)</li>
    <li>Four</li>
    <li>Five</li>
    <li>Six (grey)</li>
  </ul>
  <p>Download: <a href="guide.pdf">CSS Guide PDF</a></p>
  <p>Visit: <a href="https://example.com">Example Site</a></p>
</body>
</html>
```

### Challenge 8. Complete Card Grid with Variants

**Difficulty:** Hard

Build a page with 6 card divs. Each card has a class 'card'. Two cards also have class 'featured'. One card has class 'premium'. Style all cards, then use chained selectors (.card.featured and .card.premium) to apply extra styles to the special ones.

**Constraints:**

- Use chained class selectors without space to apply to elements with multiple classes.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A grid of 6 cards where 2 featured cards and 1 premium card look different from the rest.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Card Grid</title>
  <style>
    body { font-family: Arial; background: #eee; padding: 20px; }
    .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; max-width: 800px; margin: auto; }
    .card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      border: 2px solid #ddd;
    }
    .card.featured {
      border-color: #ff4081;
      background: #fff0f5;
    }
    .card.premium {
      border-color: gold;
      background: #fffacd;
      box-shadow: 0 0 20px gold;
    }
    h3 { margin: 0 0 10px; }
  </style>
</head>
<body>
  <div class="grid">
    <div class="card"><h3>Card 1</h3><p>Normal card</p></div>
    <div class="card featured"><h3>Card 2</h3><p>Featured card (pink)</p></div>
    <div class="card"><h3>Card 3</h3><p>Normal card</p></div>
    <div class="card premium"><h3>Card 4</h3><p>Premium card (gold glow)</p></div>
    <div class="card featured"><h3>Card 5</h3><p>Another featured</p></div>
    <div class="card"><h3>Card 6</h3><p>Normal card</p></div>
  </div>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/css-selectors-and-specificity/*
