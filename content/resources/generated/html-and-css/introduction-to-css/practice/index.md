---
title: "Practice: Introduction to CSS - Styling the Web"
description: "55 practice problems for Introduction to CSS - Styling the Web in HTML and CSS"
slug: introduction-to-css-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/introduction-to-css/practice/
category: "HTML and CSS"
---
# Practice: Introduction to CSS - Styling the Web

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] What does CSS stand for?

*Hint:* It describes how styles flow.

**Answer:** Cascading Style Sheets

CSS = Cascading Style Sheets. It is the language for styling HTML pages.

### Q2. [Easy] What symbol separates a CSS property from its value?

*Hint:* Not an equal sign.

**Answer:** A colon `:`

CSS uses `property: value;` format. The colon separates the property from its value, and the semicolon ends the declaration.

### Q3. [Easy] What symbol ends a CSS property declaration?

*Hint:* Not a period.

**Answer:** A semicolon `;`

Every property must end with a semicolon. Missing one breaks subsequent rules.

### Q4. [Easy] Write a CSS rule that makes all paragraphs blue.

*Hint:* Use the p selector and the color property.

**Answer:** ```
p {
  color: blue;
}
```

The `p` selector targets all paragraph elements. The `color` property sets the text color.

### Q5. [Easy] Which is the best practice for adding CSS to a website: inline, internal, or external?

*Hint:* The one that separates concerns best.

**Answer:** External CSS (a separate .css file linked with ``).

External CSS is best because one file can style many HTML pages, keeping code clean and easy to maintain.

### Q6. [Easy] Write the HTML tag to link an external CSS file called 'main.css'.

*Hint:* Use the link tag.

**Answer:** ```

```

The `` tag goes inside ``. `rel="stylesheet"` tells the browser this is a stylesheet, and `href` is the path to the file.

### Q7. [Easy] Where do you put internal CSS in an HTML file?

*Hint:* Inside a specific tag in the head.

**Answer:** Inside a `` tag inside the `` section.

Internal CSS goes in a `` tag placed in the head of the HTML document.

### Q8. [Easy] Style this HTML so it has a blue background and white text. Use internal CSS.

```
Hello
Welcome

```

*Hint:* Use body selector for the background.

**Answer:** ```
<!DOCTYPE html>

  body {
    background-color: blue;
    color: white;
  }

  Hello
  Welcome

```

Setting `background-color` on the body affects the entire page. The `color` property sets the default text color for everything inside.

### Q9. [Easy] Which attribute is used for inline CSS?

*Hint:* It goes directly on an HTML tag.

**Answer:** `style`

Inline CSS uses the `style` attribute: ``.

### Q10. [Easy] What is wrong with this CSS?

```
h1 {
  color = red;
}
```

*Hint:* CSS uses a different symbol.

**Answer:** CSS uses a colon `:`, not an equal sign `=`. Correct: `color: red;`

The wrong symbol makes the whole rule invalid, and the browser ignores it.

### Q11. [Easy] Write an inline CSS rule to make an h1 red and centered.

*Hint:* Use the style attribute.

**Answer:** ```
My Heading
```

Multiple properties inside the style attribute are separated by semicolons. No curly braces needed for inline CSS.

### Q12. [Easy] How do you write a CSS comment?

*Hint:* Not like HTML.

**Answer:** `/* comment here */`

CSS comments use slash-star to open and star-slash to close. They can span multiple lines. HTML uses `<!-- -->` — different syntax.

### Q13. [Easy] Create a CSS rule that makes all links (a tags) have no underline.

*Hint:* Use text-decoration: none.

**Answer:** ```
a {
  text-decoration: none;
}
```

By default, browsers underline links. `text-decoration: none` removes the underline.

### Q14. [Easy] What does this CSS do?

```
body {
  font-family: Arial;
}
```

*Hint:* Applies to the entire body.

**Answer:** Sets the font of the entire page to Arial.

When you style the body, child elements inherit the font automatically. This is the easiest way to set a site-wide font.

### Q15. [Easy] Why does this CSS not work?

```
p
  color: blue;
  font-size: 20px;
```

*Hint:* Something is missing.

**Answer:** Missing curly braces `{ }`. Properties must be inside braces.

Every CSS rule requires curly braces around its declarations: `p { color: blue; font-size: 20px; }`

### Q16. [Medium] Create a complete HTML page with internal CSS that has a yellow background and red heading.

*Hint:* Use style tag in head with body and h1 selectors.

**Answer:** ```
<!DOCTYPE html>

  body { background-color: yellow; }
  h1 { color: red; }

  Hello

```

The body selector sets the page background; the h1 selector makes headings red.

### Q17. [Medium] Which of these wins when multiple rules apply to the same element: inline, internal, or external CSS (same specificity)?

*Hint:* The closest to the element wins.

**Answer:** Inline CSS wins (highest specificity).

For the same specificity level, inline beats internal and external. Inline has specificity 1000, which overrides everything else.

### Q18. [Medium] Write a CSS rule that styles h1, h2, and h3 all in dark green.

*Hint:* Use a comma to group selectors.

**Answer:** ```
h1, h2, h3 {
  color: darkgreen;
}
```

Grouping selectors with commas applies the same styles to all of them. This is cleaner than writing three separate rules.

### Q19. [Medium] In the cascade, which has higher specificity: `.red` or `p`?

*Hint:* Classes beat elements.

**Answer:** `.red` (class) has higher specificity than `p` (element).

Class specificity = 10, element specificity = 1. If both rules apply, the class wins.

### Q20. [Medium] Aarav linked his CSS but it does not apply. Why?

```
<!-- index.html -->

  

```

*Hint:* Missing an attribute.

**Answer:** Missing `rel="stylesheet"`. The browser does not know it is a stylesheet.

A link tag without `rel="stylesheet"` is not treated as a CSS file. Always include it.

### Q21. [Medium] Style a complete HTML page: background should be light blue, headings dark blue and centered, paragraphs in Arial font and grey color.

*Hint:* Body for background, h1 for headings, p for paragraphs.

**Answer:** ```
<!DOCTYPE html>

  body {
    background-color: lightblue;
    font-family: Arial;
  }
  h1 {
    color: darkblue;
    text-align: center;
  }
  p {
    color: grey;
  }

  Priya's Page
  Welcome!

```

Three separate rules for body, h1, and p styles the whole page.

### Q22. [Medium] What specificity does an inline style have?

*Hint:* It is the highest.

**Answer:** 1000 (the highest).

Inline styles have the highest normal specificity: 1000. Only `!important` can override them.

### Q23. [Hard] Write a complete HTML page that uses external CSS. Include both the HTML file content and what should go in style.css.

*Hint:* Two files: index.html links to style.css.

**Answer:** ```
<!-- index.html -->
<!DOCTYPE html>

  My Page
  

  Welcome
  Styled with external CSS!

/* style.css */
body {
  background-color: #f0f0f0;
  font-family: Arial;
}
h1 { color: purple; }
p { color: darkgreen; }
```

Two separate files: the HTML links to the CSS with ``, and the CSS file contains just the style rules (no `` tag).

### Q24. [Hard] If `p { color: red; }` is in external CSS and `p { color: blue; }` is in internal CSS below it, which color wins?

*Hint:* Internal CSS comes later.

**Answer:** Blue wins. When specificity is the same, later rules override earlier ones.

Both selectors have equal specificity (just 'p'). The cascade rule says later wins, so the internal CSS (which loads after the external link) takes effect.

### Q25. [Hard] Why does the font-size not apply?

```
p {
  color: red
  font-size: 20px;
}
```

*Hint:* Check for missing punctuation.

**Answer:** Missing semicolon after `red`. Without it, the parser breaks and ignores everything after.

CSS requires a semicolon at the end of every declaration. Missing one causes the parser to merge or drop the next line.

### Q26. [Hard] Build a page with 3 different sources of CSS rules that conflict: external rule makes p blue, internal makes p red, inline makes p green. Which color will the paragraph show?

*Hint:* Inline has the highest specificity.

**Answer:** ```
<!-- Paragraph shows GREEN because inline wins -->
<!DOCTYPE html>

   /* p { color: blue; } */
  
    p { color: red; }
  

  Hello

```

Inline beats internal beats external when specificity is equal. The paragraph is green because the inline style wins.

## Mixed Questions

### Q1. [Easy] What is the file extension for CSS files?

*Hint:* Short abbreviation.

**Answer:** `.css`

CSS files are saved with the .css extension (e.g., style.css, main.css).

### Q2. [Easy] Write a CSS rule for a div that has a red background and 20px of padding.

*Hint:* Use div as the selector.

**Answer:** ```
div {
  background-color: red;
  padding: 20px;
}
```

This targets all div elements. Padding adds space inside the element.

### Q3. [Easy] Which goes inside the : the  tag or the  tag for CSS?

*Hint:* Both, actually.

**Answer:** Both. `` for internal CSS and `` for external CSS.

Both go in the head. Internal CSS is in a style tag, external CSS is referenced via a link tag.

### Q4. [Easy] What is wrong?

```
Hi

```

*Hint:* Missing quotes.

**Answer:** The style attribute value must be in quotes: `style="color: red;"`

HTML attribute values should be wrapped in double quotes. Without them, the browser may not parse the attribute correctly.

### Q5. [Easy] Write CSS to make h1 elements 40 pixels tall (font size).

*Hint:* Use font-size.

**Answer:** ```
h1 {
  font-size: 40px;
}
```

font-size sets the text size. Values can be in px, em, rem, %, and more.

### Q6. [Medium] True or false: CSS comments and HTML comments use the same syntax.

*Hint:* They are different.

**Answer:** False. CSS uses `/* */`, HTML uses `<!-- -->`.

Different languages have different comment styles. Using the wrong one will break things.

### Q7. [Medium] Create a CSS rule that uses a comment explaining what the rule does, then sets the body background to light yellow.

*Hint:* Use /* comment */ before the rule.

**Answer:** ```
/* Set the page background to light yellow */
body {
  background-color: lightyellow;
}
```

Comments help document your code. Anyone reading the CSS later will understand what the rule does.

### Q8. [Medium] What happens if you write CSS with `background: red` but forget the semicolon?

*Hint:* The next rule might not work.

**Answer:** This single rule works (the last rule in a block does not strictly need a semicolon), but if you add another line after, it will break. Always use semicolons.

Technically, CSS only needs semicolons between rules, but best practice is to always include them to avoid bugs when adding new properties later.

### Q9. [Medium] The CSS file is in a folder called 'assets/css/'. What should the href be?

*Hint:* Include the folder path.

**Answer:** ``

The href must include the full path relative to the HTML file. If the CSS is in a subfolder, include that subfolder in the path.

### Q10. [Medium] Write a complete HTML page with a gradient-like feel: dark background, bright pink heading, white paragraph text. Use internal CSS.

*Hint:* Body background dark, h1 pink, p white.

**Answer:** ```
<!DOCTYPE html>

  body {
    background-color: #1a1a2e;
    color: white;
    font-family: Arial;
    padding: 30px;
  }
  h1 {
    color: #ff4081;
    text-align: center;
  }

  Welcome!
  This is my cool styled page.

```

Hex colors like #1a1a2e and #ff4081 give you precise control. The body color (white) is inherited by paragraphs.

### Q11. [Hard] In a CSS rule `#main { color: red; }`, what is the specificity?

*Hint:* IDs have specificity 100.

**Answer:** 100 (because #main is an ID selector).

ID selectors have the highest specificity among normal selectors (100). They override classes (10) and elements (1).

### Q12. [Hard] Write a complete HTML page linked to an external CSS file. Include both file contents. Style should make body dark, h1 yellow, and paragraphs light grey.

*Hint:* Remember the link tag in HTML.

**Answer:** ```
<!-- index.html -->
<!DOCTYPE html>

  Home
  

  Welcome
  External CSS rocks!

/* style.css */
body {
  background-color: #1a1a2e;
  font-family: Arial;
}
h1 {
  color: yellow;
  text-align: center;
}
p {
  color: lightgrey;
}
```

The HTML file links to style.css. The CSS file holds the rules. Both files should be in the same folder.

### Q13. [Hard] Given `.highlight { color: red; }` and `p { color: blue; }`, what color is `Text`?

*Hint:* Class has higher specificity than element.

**Answer:** Red (because .highlight has specificity 10, p has specificity 1).

The class selector wins because 10 > 1. The paragraph will be red.

### Q14. [Hard] The page has this code. The paragraph is still black. Why?

```

  p { color red; }

Hello

```

*Hint:* There's a missing character.

**Answer:** Missing colon between `color` and `red`. Should be `color: red;`

Without the colon, the CSS is invalid. The browser ignores the rule and falls back to default styling (black text).

### Q15. [Hard] Build a page with three paragraphs. Use external CSS concept (shown in internal) to style the first paragraph red using inline style, second blue using internal CSS with a class, and third green by default element selector.

*Hint:* Use all 3 methods in one page.

**Answer:** ```
<!DOCTYPE html>

  p { color: green; }
  .blue { color: blue; }

  First (red inline)

  Second (blue class)

  Third (green default)

```

Three different methods styling three paragraphs. Inline beats class beats element when all three apply.

## Multiple Choice Questions

### Q1. [Easy] What does CSS stand for?

**B is correct.** CSS stands for Cascading Style Sheets. The 'cascading' refers to how styles flow and combine.

### Q2. [Easy] Which symbol separates a CSS property from its value?

**B is correct.** CSS uses a colon `:`. Example: `color: red;`

### Q3. [Easy] Which is the BEST practice for adding CSS?

**C is correct.** External CSS is the best practice. One file styles many pages, keeping code clean and reusable.

### Q4. [Easy] Which tag links an external CSS file to HTML?

**C is correct.** `` links an external CSS file. `` is for internal CSS.

### Q5. [Easy] Where should internal CSS be placed?

**B is correct.** Internal CSS goes in a `` tag within the ``.

### Q6. [Easy] Which attribute is used for inline CSS?

**B is correct.** The `style` attribute on HTML elements holds inline CSS: ``

### Q7. [Easy] How do you write a comment in CSS?

**C is correct.** CSS comments use `/* */`. HTML uses `<!-- -->`. They are different languages with different comment styles.

### Q8. [Easy] Which CSS rule makes paragraph text red?

**A is correct.** The CSS syntax is `selector { property: value; }`. p is the element selector, color is the property, red is the value.

### Q9. [Easy] What wraps CSS declarations in a rule?

**C is correct.** Curly braces `{ }` wrap the property declarations inside a CSS rule.

### Q10. [Easy] Which property changes the text color?

**B is correct.** The `color` property sets the text color. There is no property called text-color or font-color.

### Q11. [Easy] Which character ends a CSS declaration?

**C is correct.** Every CSS declaration ends with a semicolon `;`. Forgetting it can break the next rule.

### Q12. [Easy] Which CSS property sets the background color?

**B is correct.** `background-color` is the standard CSS property for background color.

### Q13. [Medium] When multiple CSS sources have the same specificity, which wins?

**C is correct.** Inline CSS has the highest specificity (1000) and always wins over internal and external CSS when the specificity is otherwise the same.

### Q14. [Medium] Which selector has the highest specificity (among these)?

**C is correct.** ID selectors (#main) have specificity 100, classes (.note) have 10, and element selectors (p, div) have 1.

### Q15. [Medium] How do you apply the same rule to multiple selectors?

**B is correct.** Separate multiple selectors with commas to apply the same rules to all of them: `h1, h2, h3 { color: red; }`

### Q16. [Medium] What will happen to this code?

**B is correct.** The inline style (specificity 1000) beats the class selector (specificity 10). The paragraph will be red.

### Q17. [Medium] Which rel value is used when linking a CSS file?

**B is correct.** ``. Without `rel="stylesheet"`, the browser does not treat the file as CSS.

### Q18. [Medium] Why is external CSS better than inline CSS?

**B is correct.** External CSS lets one file style multiple HTML pages. Change one rule, every page updates. Inline CSS has to be repeated everywhere.

### Q19. [Medium] Which of these is valid CSS syntax?

**C is correct.** CSS uses curly braces, colons, and semicolons: `selector { property: value; }`

### Q20. [Medium] What does this selector target? `h1, h2`

**B is correct.** A comma groups selectors. The rule applies to ALL h1 and h2 elements on the page.

### Q21. [Hard] In the cascade, if two rules have the same specificity, which one wins?

**B is correct.** When specificity is the same, the later rule wins. This is why order matters in CSS.

### Q22. [Hard] Why does the CSS not work when the link tag is missing 'rel="stylesheet"'?

**A is correct.** Without `rel="stylesheet"`, the browser does not know the linked file is a stylesheet, so it does not apply it (even if it downloads it).

### Q23. [Hard] Which of these has specificity of 100?

**C is correct.** An ID selector (#header) has specificity 100. Element selectors are 1, classes are 10, IDs are 100, inline is 1000.

### Q24. [Hard] What is the correct file structure for external CSS?

**B is correct.** External CSS requires at least two files: the HTML and the CSS. The HTML links to the CSS using ``.

### Q25. [Hard] Which of these CSS rules is INVALID?

**C is correct.** Missing semicolon after `100px`. The next property `height` will not be applied because the parser gets confused.

## Coding Challenges

### Challenge 1. Your First Styled Page

**Difficulty:** Easy

Create a complete HTML page with internal CSS that has a pastel pink background, Arial font, and a centered blue heading 'Hello, Priya!'.

**Constraints:**

- Use internal CSS in a  tag in the head. Use body and h1 selectors.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A pink page with a centered blue heading.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>My First Styled Page</title>
  <style>
    body {
      background-color: #ffe4e1;
      font-family: Arial, sans-serif;
    }
    h1 {
      color: blue;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Hello, Priya!</h1>
</body>
</html>
```

### Challenge 2. Inline CSS Practice

**Difficulty:** Easy

Create an HTML page with 3 paragraphs styled inline: the first red, the second green, the third blue. All should have a font size of 18px.

**Constraints:**

- Use only inline CSS (style attribute).

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Three paragraphs in red, green, and blue.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<body>
  <p style="color: red; font-size: 18px;">This is red.</p>
  <p style="color: green; font-size: 18px;">This is green.</p>
  <p style="color: blue; font-size: 18px;">This is blue.</p>
</body>
</html>
```

### Challenge 3. Dark Theme Page

**Difficulty:** Medium

Build a page with internal CSS that has a dark grey background (#1a1a2e), white text, and a bright pink heading (#ff4081). Include at least 2 paragraphs and an h1.

**Constraints:**

- Use internal CSS. Hex colors. Must style body, h1, and p.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A dark page with white text and a pink heading.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Dark Theme</title>
  <style>
    body {
      background-color: #1a1a2e;
      color: white;
      font-family: Arial;
      padding: 30px;
    }
    h1 {
      color: #ff4081;
      text-align: center;
      font-size: 40px;
    }
    p {
      font-size: 18px;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <h1>Welcome to the Dark Side</h1>
  <p>This is my first dark-themed page. It looks cool and is easy on the eyes.</p>
  <p>CSS makes styling fun and powerful.</p>
</body>
</html>
```

### Challenge 4. External CSS Setup

**Difficulty:** Medium

Create two files: an HTML file and a style.css file. The HTML has a heading and a paragraph. The CSS styles the body with a light green background and Arial font, the heading in dark green, and the paragraph in black.

**Constraints:**

- Two separate files. HTML must link style.css with rel="stylesheet".

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A green-themed page loaded from an external CSS file.
```

**Solution:**

```html-and-css
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>External CSS Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Rohan's Green Page</h1>
  <p>This page is styled using an external CSS file.</p>
</body>
</html>

/* style.css */
body {
  background-color: #e8f5e9;
  font-family: Arial, sans-serif;
  padding: 20px;
}
h1 {
  color: #1b5e20;
  text-align: center;
}
p {
  color: black;
  font-size: 18px;
}
```

### Challenge 5. Grouped Selectors

**Difficulty:** Medium

Build an HTML page with h1, h2, and h3 headings. Use a single CSS rule (grouped selector) to make all three headings purple and centered. Also style body to have a light grey background.

**Constraints:**

- Use `h1, h2, h3` as a grouped selector. One rule for all three.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A page with three purple, centered headings on a grey background.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Grouped Selectors</title>
  <style>
    body {
      background-color: #f0f0f0;
      font-family: Arial;
      padding: 20px;
    }
    h1, h2, h3 {
      color: purple;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Big Heading</h1>
  <h2>Medium Heading</h2>
  <h3>Small Heading</h3>
</body>
</html>
```

### Challenge 6. Profile Card Page

**Difficulty:** Hard

Build a simple profile card: a centered div with a colored background, a heading with the name 'Ananya Kumar', a paragraph with the title 'Web Developer', and another paragraph with an email. Use internal CSS.

**Constraints:**

- Use padding, max-width, margin auto for centering. Colorful but simple.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A centered card with profile info.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Profile Card</title>
  <style>
    body {
      background-color: #e3f2fd;
      font-family: Arial, sans-serif;
      padding: 40px;
    }
    .card {
      background-color: white;
      max-width: 300px;
      margin: 0 auto;
      padding: 25px;
      border-radius: 10px;
      text-align: center;
    }
    h1 {
      color: #1976d2;
      margin-bottom: 5px;
    }
    p {
      color: #555;
      margin: 5px 0;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Ananya Kumar</h1>
    <p>Web Developer</p>
    <p>ananya@example.com</p>
  </div>
</body>
</html>
```

### Challenge 7. 3 Methods in One Page

**Difficulty:** Hard

Create an HTML page that uses ALL three CSS methods: external CSS setting body background, internal CSS setting h1 color to red, and inline CSS setting one paragraph to green. Show the order of wins.

**Constraints:**

- Demonstrate all three methods. Include comments explaining what each does.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A page using all three CSS methods at once.
```

**Solution:**

```html-and-css
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Three CSS Methods</title>
  <!-- External CSS -->
  <link rel="stylesheet" href="style.css">
  <!-- Internal CSS -->
  <style>
    h1 { color: red; }
  </style>
</head>
<body>
  <h1>Three CSS Methods</h1>
  <p>Normal paragraph (external styles).</p>
  <p style="color: green; font-weight: bold;">Inline green paragraph wins over external.</p>
</body>
</html>

/* style.css */
body {
  background-color: #fff9c4;
  font-family: Arial;
}
p {
  color: blue;
}
```

### Challenge 8. Complete Styled Home Page

**Difficulty:** Hard

Build a complete HTML page for 'Vikram's Blog' using external CSS concept (show both files). It should have: a header area with a centered title, 3 paragraphs of introduction text, and styled with a warm color palette (cream background, brown text, dark red headings).

**Constraints:**

- Two files: index.html and style.css. Use at least 4 CSS rules.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A warm-toned blog home page styled externally.
```

**Solution:**

```html-and-css
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Vikram's Blog</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Vikram's Blog</h1>
    <p>Thoughts on code, life, and learning.</p>
  </header>
  <main>
    <p>Welcome to my blog! I write about web development, programming tips, and my learning journey.</p>
    <p>I am a 16-year-old student from Chennai who loves building websites.</p>
    <p>Check back often for new posts about HTML, CSS, and JavaScript.</p>
  </main>
</body>
</html>

/* style.css */
body {
  background-color: #fff8e7;
  color: #5d4037;
  font-family: Georgia, serif;
  padding: 30px;
  max-width: 700px;
  margin: 0 auto;
}
header {
  text-align: center;
  border-bottom: 2px solid #5d4037;
  padding-bottom: 15px;
  margin-bottom: 20px;
}
h1 {
  color: #8b0000;
  font-size: 42px;
  margin-bottom: 5px;
}
p {
  font-size: 18px;
  line-height: 1.7;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/introduction-to-css/*
