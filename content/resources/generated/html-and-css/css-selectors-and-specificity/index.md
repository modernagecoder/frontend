---
title: "CSS Selectors and Specificity - Complete Guide with Examples | Modern Age Coders"
description: "Master CSS selectors: element, class, id, universal, attribute, descendant, child, sibling, and specificity rules. 58 practice questions with runnable examples."
slug: css-selectors-and-specificity
canonical: https://learn.modernagecoders.com/resources/html-and-css/css-selectors-and-specificity/
category: "HTML and CSS"
keywords: ["css selectors", "css specificity", "class selector", "id selector", "descendant selector", "child selector", "sibling selector", "attribute selector", "nth-child", "css cascade"]
---
# CSS Selectors and Specificity

**Difficulty:** Beginner  
**Reading time:** 25 min  
**Chapter:** 10  
**Practice questions:** 58

## What Are CSS Selectors?

A **selector** is how you tell CSS which HTML elements to style. In CSS, you write rules like `h1 { color: red; }` — the `h1` is the selector. But there are many, many more ways to target elements than just their tag name. You can target by class, by ID, by attribute, by position in a list, by whether they are children of other elements, and much more.

Selectors are the foundation of CSS. The better you know them, the more surgical and precise your styling becomes. Instead of wrapping everything in extra divs and classes, you can use smart selectors to target exactly what you want.

### What Is Specificity?

When multiple CSS rules try to style the same element, there is a conflict. Which rule wins? **Specificity** is the system CSS uses to pick the winner. Every selector has a specificity score. The higher score wins. An ID beats a class. A class beats an element. Inline styles beat almost everything.

## Why Should You Learn Selectors and Specificity?

### 1. Precise Targeting

Simple selectors like `p` style every paragraph on the page. But what if you only want to style paragraphs inside a specific section? Or the first paragraph after a heading? Or every other row in a table? With advanced selectors, you can do all of that without adding extra classes.

### 2. Clean HTML

If you rely only on classes, your HTML ends up full of them: `class="card card-large card-blue card-featured"`. Good selectors let you keep HTML clean and put the complexity in CSS where it belongs.

### 3. Understanding Specificity Saves Hours

Every CSS developer eventually hits a moment where their rule does not apply, and they have no idea why. Nine times out of ten, it is specificity. Understanding the rules lets you debug it in seconds instead of hours.

### 4. Reading Other People's CSS

Every CSS codebase uses selectors. If you want to read Bootstrap, Tailwind output, or any real-world CSS, you need to know what the selectors mean.

## Detailed Explanation

### 1. Element Selector

Targets all elements of a certain tag name. Simplest selector.

```
p { color: blue; }        /* all paragraphs */
h1 { font-size: 32px; }   /* all h1 elements */
button { cursor: pointer; } /* all buttons */
```

### 2. Class Selector

Targets elements with a specific class attribute. Start with a period `.`.

```
.highlight { background: yellow; }
.big { font-size: 24px; }
```

In HTML: `This is highlighted`. Classes can be reused on many elements.

### 3. ID Selector

Targets the one element with a specific id. Start with a hash `#`.

```
#header { background: black; }
#main { padding: 20px; }
```

IDs should be unique on a page — only one element should have the same id.

### 4. Universal Selector

The asterisk `*` targets every element on the page. Useful for resetting default browser styles.

```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### 5. Attribute Selector

Targets elements with a specific attribute. Use square brackets.

```
[type="text"] { border: 1px solid grey; }
[disabled] { opacity: 0.5; }
a[target="_blank"] { color: red; }
```

This lets you style elements based on their attributes without needing classes.

### 6. Descendant Selector (Space)

A descendant selector uses a space between two selectors. It matches elements that are inside other elements, at any depth.

```
ul li { color: blue; }  /* every li inside a ul, at any depth */
article p { font-size: 18px; }  /* every p inside an article */
```

### 7. Child Selector (>)

The child combinator `>` is like the descendant selector, but only matches direct children — not grandchildren.

```
ul > li { list-style: square; }
/* Only direct li children of ul, not nested li inside inner lists */
```

### 8. Adjacent Sibling Selector (+)

The plus sign `+` matches an element that comes immediately after another element, and both share the same parent.

```
h1 + p { font-weight: bold; }
/* The first paragraph right after every h1 becomes bold */
```

### 9. General Sibling Selector (~)

The tilde `~` matches all siblings that come after an element, not just the immediate one.

```
h1 ~ p { color: grey; }
/* Every p that comes after an h1 (sharing the same parent) becomes grey */
```

### 10. Grouping (Comma)

Separate multiple selectors with commas to apply the same rule to all of them.

```
h1, h2, h3 { font-family: Georgia; }
.button, .link, input[type="submit"] { cursor: pointer; }
```

### Specificity Rules

Specificity is calculated as a score with four parts (inline, ID, class, element). Here are the values:

- **Inline style** (`style="..."`) — specificity 1000
- **ID selector** (`#main`) — specificity 100
- **Class, attribute, pseudo-class** (`.btn`, `[type]`, `:hover`) — specificity 10
- **Element, pseudo-element** (`p`, `::before`) — specificity 1

When selectors combine, add up the specificity:

- `p` = 1
- `.note` = 10
- `#main` = 100
- `#main p` = 101
- `#main .note` = 110
- `.card p.bold` = 21 (class + element + class)

### The !important Flag (and Why to Avoid It)

If you add `!important` to a CSS value, it overrides normal specificity rules:

```
p { color: red !important; }
```

But **do not use !important** unless you really have to. It makes CSS hard to maintain because now you cannot override it without another !important. Every new !important piles on the mess. Better specificity is almost always a cleaner solution.

### The Cascade and Inheritance

The cascade (which gives CSS its name) decides which rule wins. The factors, in order:

1. **Importance** (`!important` values win)
2. **Specificity** (higher wins)
3. **Source order** (later wins when specificity is equal)

**Inheritance** is when a child element takes on styles from its parent. Some properties (like `color` and `font-family`) are inherited by default. Others (like `margin` and `border`) are not. This is why setting `font-family` on `body` automatically applies to everything inside.

## Code Examples

### Element, Class, and ID Selectors

```html
<!DOCTYPE html>
<html>
<head>
  <title>Selectors Demo</title>
  <style>
    /* Element selector */
    p { color: #333; }

    /* Class selector */
    .highlight {
      background-color: yellow;
      padding: 5px;
    }

    /* ID selector */
    #main-title {
      color: #8e44ad;
      font-size: 36px;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1 id="main-title">Aarav's Page</h1>
  <p>This is a normal paragraph.</p>
  <p class="highlight">This paragraph has the highlight class.</p>
  <p>Another normal paragraph.</p>
  <p class="highlight">Another highlighted one!</p>
</body>
</html>
```

Three selectors in action. The `p` element selector colors all paragraphs dark grey. The `.highlight` class selector gives yellow backgrounds to any element with that class. The `#main-title` ID selector styles just the one element with that ID. Save as `selectors.html` and open.

**Output:**

```
A centered purple heading, two normal grey paragraphs, and two yellow-highlighted paragraphs.
```

### Descendant and Child Selectors

```html
<!DOCTYPE html>
<html>
<head>
  <title>Descendant vs Child</title>
  <style>
    /* Descendant: all li inside ul, at any depth */
    ul li {
      color: blue;
    }

    /* Child: only DIRECT li children of .direct-only ul */
    .direct-only > li {
      font-weight: bold;
      color: red;
    }
  </style>
</head>
<body>
  <h2>Descendant Selector (every li inside ul)</h2>
  <ul>
    <li>Item 1
      <ul>
        <li>Nested item 1 (also blue — deep descendant)</li>
      </ul>
    </li>
    <li>Item 2</li>
  </ul>

  <h2>Child Selector (only direct children)</h2>
  <ul class="direct-only">
    <li>Direct child (bold red)
      <ul>
        <li>Nested (NOT bold red — it is a grandchild)</li>
      </ul>
    </li>
    <li>Direct child (bold red)</li>
  </ul>
</body>
</html>
```

This shows the difference between descendant (space) and child (>) selectors. `ul li` matches every li inside a ul, even nested ones. `.direct-only > li` matches only li that are DIRECT children of the ul — not grandchildren (like li inside a nested ul). Both lists look different because of this.

**Output:**

```
First list has all items blue (including nested). Second list has only the top-level items bold red; the nested item is just blue.
```

### Adjacent and General Sibling Selectors

```html
<!DOCTYPE html>
<html>
<head>
  <title>Sibling Selectors</title>
  <style>
    /* Adjacent sibling: the FIRST p right after h1 */
    h1 + p {
      font-size: 20px;
      font-weight: bold;
      color: darkgreen;
    }

    /* General sibling: EVERY p after h1 */
    h2 ~ p {
      color: darkred;
      font-style: italic;
    }
  </style>
</head>
<body>
  <h1>Main Heading</h1>
  <p>This is the first paragraph after h1 (bold green).</p>
  <p>This one is NOT — it is the second paragraph.</p>

  <h2>Second Heading</h2>
  <p>First paragraph (italic red — it is a sibling of h2).</p>
  <p>Second paragraph (also italic red — also a sibling).</p>
  <p>Third paragraph (still red — general sibling selector).</p>
</body>
</html>
```

`h1 + p` only matches the FIRST p immediately after an h1. `h2 ~ p` matches EVERY p that comes after an h2 and shares the same parent. These are powerful for styling specific patterns without needing extra classes.

**Output:**

```
First paragraph after h1 is bold green. Next paragraph is normal. After h2, all three paragraphs are italic red.
```

### Attribute Selectors

```html
<!DOCTYPE html>
<html>
<head>
  <title>Attribute Selectors</title>
  <style>
    /* Match exact attribute value */
    input[type="text"] {
      border: 2px solid blue;
      padding: 5px;
    }
    input[type="email"] {
      border: 2px solid green;
      padding: 5px;
    }
    input[type="password"] {
      border: 2px solid red;
      padding: 5px;
    }

    /* Match just the presence of an attribute */
    [required] {
      background-color: #fffacd;
    }

    /* Attribute starts with */
    a[href^="https"] {
      color: green;
    }
    /* Attribute ends with */
    a[href$=".pdf"] {
      color: red;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <form>
    <input type="text" placeholder="Name" required><br><br>
    <input type="email" placeholder="Email" required><br><br>
    <input type="password" placeholder="Password" required><br><br>
  </form>

  <p><a href="https://google.com">Secure link (green)</a></p>
  <p><a href="document.pdf">Download PDF (red bold)</a></p>
</body>
</html>
```

Attribute selectors use square brackets. `[type="text"]` matches elements with that exact attribute value. `[required]` matches elements that simply have the attribute. `[href^="https"]` matches elements whose href STARTS with 'https'. `[href$=".pdf"]` matches elements whose href ENDS with '.pdf'. Incredibly useful for styling based on attributes.

**Output:**

```
Three input fields with different border colors for text (blue), email (green), and password (red), all with yellow backgrounds because of [required]. Two links: Google in green, the PDF in bold red.
```

### Grouping Selectors with Commas

```html
<!DOCTYPE html>
<html>
<head>
  <title>Grouping</title>
  <style>
    /* Apply the same styles to many selectors */
    h1, h2, h3, h4, h5, h6 {
      font-family: Georgia, serif;
      color: #2c3e50;
      margin-bottom: 10px;
    }

    /* Mix different selector types */
    .btn, #submit, input[type="submit"] {
      background-color: #3498db;
      color: white;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <h1>Biggest</h1>
  <h2>Big</h2>
  <h3>Medium</h3>

  <button class="btn">Class button</button>
  <button id="submit">ID button</button>
  <input type="submit" value="Submit input">
</body>
</html>
```

Commas group selectors so they all share the same rules. This is cleaner than writing the same rule six times for h1 through h6. You can even mix different selector types in one group: a class, an ID, and an attribute selector all get the same button styles.

**Output:**

```
Three differently-sized headings all in dark blue Georgia font. Three buttons (from class, id, and input) all styled identically in blue.
```

### Specificity in Action

```html
<!DOCTYPE html>
<html>
<head>
  <title>Specificity Demo</title>
  <style>
    /* Specificity: 1 (just element) */
    p {
      color: black;
      background: white;
    }

    /* Specificity: 10 (class) - beats element */
    .blue-text {
      color: blue;
    }

    /* Specificity: 11 (class + element) */
    p.green-text {
      color: green;
    }

    /* Specificity: 100 (ID) - beats all classes */
    #special {
      color: purple;
      background: yellow;
    }

    /* Specificity: 110 (ID + class) */
    #special.extra {
      color: red;
    }
  </style>
</head>
<body>
  <p>Plain paragraph (black)</p>
  <p class="blue-text">Has .blue-text class (blue)</p>
  <p class="green-text">Has .green-text class (green)</p>
  <p id="special" class="blue-text">Has ID #special AND class .blue-text — ID wins (purple, yellow bg)</p>
  <p id="special" class="extra">ID + extra class — red wins</p>
</body>
</html>
```

This demonstrates specificity in action. Even though the second-to-last paragraph has the class `.blue-text`, the ID selector `#special` wins because ID specificity (100) is higher than class specificity (10). The last paragraph has an even more specific selector that wins out.

**Output:**

```
Five paragraphs showing how higher specificity wins: plain black, blue (class), green (class+element), purple with yellow bg (ID beats class), red (ID+class beats everything).
```

### Targeting Every Other li with nth-child

```html
<!DOCTYPE html>
<html>
<head>
  <title>nth-child</title>
  <style>
    ul {
      list-style: none;
      padding: 0;
      max-width: 300px;
    }
    li {
      padding: 10px;
      background-color: #f0f0f0;
    }
    /* Target every EVEN li (2nd, 4th, 6th...) */
    li:nth-child(even) {
      background-color: #d4e9ff;
    }
    /* Target the FIRST li */
    li:first-child {
      font-weight: bold;
      color: darkblue;
    }
    /* Target the LAST li */
    li:last-child {
      color: red;
      font-style: italic;
    }
  </style>
</head>
<body>
  <h2>Student Attendance (Class 8A)</h2>
  <ul>
    <li>Aarav Sharma</li>
    <li>Priya Patel</li>
    <li>Rohan Kumar</li>
    <li>Ananya Singh</li>
    <li>Vikram Gupta</li>
    <li>Meera Reddy</li>
  </ul>
</body>
</html>
```

Pseudo-class selectors like `:nth-child(even)` let you target elements based on their position. `:nth-child(even)` picks every 2nd, 4th, 6th... element. `:first-child` picks the first, `:last-child` picks the last. You can also use `:nth-child(3)` for a specific position, or `:nth-child(3n)` for every third.

**Output:**

```
A list of students where alternating rows have different background colors (zebra stripes). The first student is bold dark blue; the last is italic red.
```

## Common Mistakes

### Forgetting the Dot for Class Selectors

**Wrong:**

```
highlight {
  background-color: yellow;
}
```

This targets HTML tags called , which do not exist. No styles apply.

**Correct:**

```
.highlight {
  background-color: yellow;
}
```

Class selectors must start with a period (`.`). Without it, CSS thinks you are targeting an element tag with that name. Always write `.classname` for classes.

### Forgetting the Hash for ID Selectors

**Wrong:**

```
main-title {
  color: red;
}
```

This tries to target an element tag  which doesn't exist.

**Correct:**

```
#main-title {
  color: red;
}
```

ID selectors must start with a hash (`#`). Without it, you are targeting a non-existent element.

### Using the Same ID Twice

**Wrong:**

```
<div id="card">First</div>
<div id="card">Second</div>
```

No HTML error, but this is invalid. IDs should be unique per page.

**Correct:**

```
<div class="card">First</div>
<div class="card">Second</div>
```

IDs should be unique on a page. If you need to style multiple elements the same way, use a *class* instead. Classes can be reused as many times as you want; IDs cannot.

### Overusing !important

**Wrong:**

```
p { color: red !important; }
.note { color: blue !important; }
```

No error, but now both rules are 'important' and it gets confusing. If you want to override, you need more !important, leading to a mess.

**Correct:**

```
/* Use proper specificity instead */
p { color: red; }
p.note { color: blue; }  /* more specific wins naturally */
```

`!important` should be a last resort. Overusing it makes CSS impossible to maintain. Instead, use more specific selectors (like adding a class or an ID to the selector) to override earlier rules naturally.

### Using Descendant When You Meant Child

**Wrong:**

```
.menu li {
  /* Affects ALL li inside .menu, including nested li from sub-menus */
  font-weight: bold;
}
```

Unintentionally styles li inside nested sub-menus too.

**Correct:**

```
.menu > li {
  /* Only direct children of .menu, not nested */
  font-weight: bold;
}
```

A space (descendant) matches elements at any depth. `>` (child) matches only direct children. For dropdown menus and nested lists, the difference is huge — descendant will accidentally style nested items too.

## Summary

- CSS selectors let you target HTML elements by tag, class, id, attribute, position, and relationship to other elements.
- Element selectors (p, h1, div) target all elements of that tag. They have specificity 1.
- Class selectors (.highlight, .button) target elements with that class attribute. Classes can be reused. Specificity 10.
- ID selectors (#main, #header) target one unique element. IDs must be unique per page. Specificity 100.
- The universal selector * matches every element. Useful for CSS resets.
- Attribute selectors ([type="text"], [required], [href^="https"]) let you style based on attributes without extra classes.
- Descendant selector (space): ul li means every li inside a ul, at any depth. Child selector (>): ul > li means only direct children.
- Adjacent sibling (+): h1 + p means the first p right after an h1. General sibling (~): h2 ~ p means every p after an h2.
- Group selectors with commas: h1, h2, h3 applies the same rule to all three.
- Specificity: inline (1000) > ID (100) > class/attr/pseudo-class (10) > element/pseudo-element (1). Higher wins.
- The !important flag overrides normal specificity. Avoid using it — it makes CSS hard to maintain.
- The cascade resolves conflicts using: importance, then specificity, then source order (later wins when equal). Inheritance passes some properties (color, font) from parent to child.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/html-and-css/css-selectors-and-specificity/*
*Practice questions: https://learn.modernagecoders.com/resources/html-and-css/css-selectors-and-specificity/practice/*
