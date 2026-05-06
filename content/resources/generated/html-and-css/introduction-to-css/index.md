---
title: "Introduction to CSS - What CSS Is and How to Use It | Modern Age Coders"
description: "Learn what CSS is, the 3 ways to add CSS (inline, internal, external), CSS syntax, and how the cascade works. Includes 55 hands-on practice questions."
slug: introduction-to-css
canonical: https://learn.modernagecoders.com/resources/html-and-css/introduction-to-css/
category: "HTML and CSS"
keywords: ["introduction to css", "what is css", "css for beginners", "inline vs internal vs external css", "css syntax", "css cascade", "css specificity", "learn css"]
---
# Introduction to CSS - Styling the Web

**Difficulty:** Beginner  
**Reading time:** 22 min  
**Chapter:** 9  
**Practice questions:** 55

## What Is CSS?

**CSS** stands for **Cascading Style Sheets**. It is the language we use to style and design web pages. While HTML gives a website its structure (the bones), CSS gives it its look and feel (the skin, clothes, and makeup).

Look at any website you love — Instagram, YouTube, Netflix, Amazon. Every color, every font, every shadow, every animation, every layout — all of that is CSS. Without CSS, every website would look like a boring white page with blue links from 1995.

### HTML vs CSS in Simple Terms

Imagine a house:

- **HTML** is the construction — the walls, the doors, the windows, the roof.
- **CSS** is the interior design — the paint color, the curtains, the furniture, the lighting.

You cannot have interior design without a house first (CSS needs HTML), but a house without design feels empty and lifeless. CSS turns plain HTML into beautiful websites.

### What Does 'Cascading' Mean?

The 'Cascading' in CSS refers to how styles flow down and combine. Multiple style rules can apply to the same element, and CSS has a system for deciding which one wins. It is like a waterfall — styles flow from general to specific, and the most specific one takes effect. You will learn the full rules in Chapter 10.

## Why Should You Learn CSS?

### 1. You Cannot Build Websites Without It

HTML alone gives you a rough page. CSS gives you a real website. Every button, every card, every layout, every color you see on the web is CSS. Without it, you cannot build anything worth looking at.

### 2. It Is the Language of Design on the Web

If you want to be a web designer, frontend developer, or build your own projects, CSS is the tool that lets you make things look exactly the way you imagine. Modern CSS is incredibly powerful — you can build animations, 3D effects, responsive layouts, and beautiful designs without a single line of JavaScript.

### 3. You See Results Instantly

Change one line of CSS, save, refresh the browser, and the change appears immediately. This instant feedback makes learning CSS fun and addictive. You can experiment with colors, sizes, fonts, and layouts and see the result in real time.

### 4. CSS Is Everywhere

Whether you are building a personal blog, a mobile app, a dashboard, or a game — CSS is used to style it. Even desktop and mobile apps increasingly use CSS (through tools like Electron and React Native). Learning CSS is a skill that pays off forever.

## Detailed Explanation

### CSS Syntax

A CSS rule has three parts: a **selector**, one or more **properties**, and their **values**. Here is the basic structure:

```
selector {
  property: value;
  property: value;
}
```

Example:

```
h1 {
  color: blue;
  font-size: 32px;
}
```

This says: "For every `` on the page, make the text color blue and the font size 32 pixels." Notice:

- The selector (`h1`) comes first.
- Curly braces `{ }` wrap the properties.
- Each property is followed by a colon `:`, then the value, then a semicolon `;`.
- Always end each line with a semicolon.

### The 3 Ways to Add CSS

There are three ways to add CSS to a web page. You should know all three, but one of them is the best practice.

#### 1. Inline CSS (Avoid when possible)

Inline CSS is written directly on an HTML tag using the `style` attribute:

```

Hello

```

Inline CSS only affects that one specific element. It is quick for small tweaks but terrible for maintenance — if you want to change the color of all paragraphs, you have to edit every single one.

#### 2. Internal CSS (OK for small pages)

Internal CSS is written inside a `` tag inside the `` of the HTML:

```

  
    p { color: red; font-size: 20px; }
  

```

This styles all paragraphs on this one page. Good for simple, single-page experiments. But if you have multiple pages, you would have to copy the same style block to every one.

#### 3. External CSS (Best practice)

External CSS is written in a separate `.css` file and linked to the HTML with a `` tag in the head:

```
<!-- index.html -->

  

/* styles.css */
p {
  color: red;
  font-size: 20px;
}
```

**This is the right way to do it 99% of the time.** One CSS file can style hundreds of pages. Change one line, and every page updates. It keeps HTML clean and CSS reusable. Pros use external CSS.

### Your First Styling Example

Let us change the color and font of a page. Starting HTML:

```

# Welcome to My Site

This is my first styled page.

```

Now add this CSS:

```
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

h1 {
  color: #3498db;
  text-align: center;
}

p {
  color: #333;
  font-size: 18px;
}
```

The body gets a light grey background and Arial font. The h1 becomes blue and centered. Paragraphs are dark grey and 18 pixels. Three selectors, six properties, complete transformation.

### How the Cascade Works

When multiple CSS rules apply to the same element, CSS has to decide which one wins. This is the **cascade**. The rules (simplified):

1. **Specificity:** more specific selectors win. An ID beats a class, and a class beats a tag.
2. **Order:** if two rules have the same specificity, the one that comes later wins.
3. **Source:** inline CSS beats internal CSS, and internal CSS beats external CSS (for the same specificity).

You will learn all the details in Chapter 10. For now, just know that if two rules conflict, CSS has a system to pick the winner.

### CSS Comments

You can add notes to your CSS using comments. Comments start with `/*` and end with `*/`:

```
/* This is a comment */
h1 {
  color: red; /* Make the heading red */
}

/*
  Multi-line comments
  work too!
*/
```

Comments are ignored by the browser. They help you and other developers understand your code.

### Specificity Basics

Specificity is how CSS decides which rule applies when multiple rules target the same element. A simple version:

- **Element selector** (like `p`) — specificity of 1.
- **Class selector** (like `.big`) — specificity of 10.
- **ID selector** (like `#main`) — specificity of 100.
- **Inline style** — specificity of 1000.

So if you have `p { color: red; }` and `.note { color: blue; }` and both apply to the same paragraph, the class wins because 10 > 1. You will learn much more about this in Chapter 10.

## Code Examples

### Inline CSS — Style Directly on the Element

```html
<!DOCTYPE html>
<html>
<head>
  <title>Inline CSS Example</title>
</head>
<body>
  <h1 style="color: blue; text-align: center;">Hello, Aarav!</h1>
  <p style="color: green; font-size: 20px;">This paragraph is styled with inline CSS.</p>
  <p style="color: red;">This one is red.</p>
</body>
</html>
```

Each element has a `style` attribute with CSS written directly inside. Notice that each element needs its OWN style attribute — there is no sharing. This is the quickest way to test a quick change, but it gets messy fast on real pages. Save as `inline.html` and open it.

**Output:**

```
A centered blue heading 'Hello, Aarav!', a green paragraph, and a red paragraph.
```

### Internal CSS — Style Inside the Head

```html
<!DOCTYPE html>
<html>
<head>
  <title>Internal CSS Example</title>
  <style>
    body {
      background-color: #f0f8ff;
      font-family: Arial, sans-serif;
    }
    h1 {
      color: #e74c3c;
      text-align: center;
    }
    p {
      color: #2c3e50;
      font-size: 18px;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <h1>Priya's First Styled Page</h1>
  <p>Welcome! This entire page is styled using internal CSS inside the head of the document.</p>
  <p>All paragraphs share the same styles automatically — no need to repeat.</p>
</body>
</html>
```

The CSS goes inside a `` tag in the ``. Three selectors style the entire body, all h1 elements, and all p elements. Notice how much cleaner this is compared to inline CSS — one rule styles every paragraph. Save as `internal.html`.

**Output:**

```
A page with a light blue background, a red centered heading, and dark grey paragraphs in Arial font.
```

### External CSS — The Best Practice Way

```html
<!-- File: index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>External CSS Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Rohan's Portfolio</h1>
  <p>This page uses an external CSS file called styles.css.</p>
  <p>Every page that links to this file will share the same styles.</p>
</body>
</html>

<!-- File: styles.css (save this in the same folder) -->
<!-- 
body {
  background-color: #1a1a2e;
  color: #f1f1f1;
  font-family: Arial, sans-serif;
  padding: 30px;
}

h1 {
  color: #ffa500;
  text-align: center;
}

p {
  font-size: 18px;
  line-height: 1.6;
}
-->
```

External CSS requires two files: `index.html` and `styles.css`. Save them in the same folder. The `` tag connects them. Now you can link the same styles.css to 100 different HTML pages. Change one line, update 100 pages. This is how real websites work. The CSS file content is shown in the comment at the bottom — you should save that as a separate file.

**Output:**

```
A dark-themed page with an orange heading and white paragraphs, with all styles loaded from an external file.
```

### CSS Syntax — Selectors, Properties, Values

```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Syntax</title>
  <style>
    /* Selector: body */
    /* Properties: background-color, color, margin */
    body {
      background-color: #fafafa;
      color: #333;
      margin: 20px;
    }

    /* Selector: h2 */
    h2 {
      color: #8e44ad;  /* Purple */
      border-bottom: 2px solid #8e44ad;
      padding-bottom: 5px;
    }

    /* Selector: p */
    p {
      font-family: Georgia, serif;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <h2>Understanding CSS Syntax</h2>
  <p>Every CSS rule has three parts: a selector (like <code>h2</code>), properties (like <code>color</code>), and values (like <code>#8e44ad</code>).</p>
  <p>Comments are wrapped in slash-star and star-slash. They are ignored by the browser.</p>
</body>
</html>
```

This example shows the basic syntax with clear comments. Each rule targets an element (body, h2, p), and each property-value pair ends with a semicolon. Comments (/* like this */) are just notes for the developer — the browser ignores them. Save as `syntax.html`.

**Output:**

```
A page with a grey body, a purple underlined h2, and Georgia-font paragraphs.
```

### Styling a Page with Blue Background and White Text

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Styled Page</title>
  <style>
    body {
      background-color: #2980b9;
      color: white;
      font-family: Arial, sans-serif;
      padding: 40px;
      text-align: center;
    }
    h1 {
      font-size: 48px;
      margin-bottom: 10px;
    }
    p {
      font-size: 20px;
      max-width: 500px;
      margin: 10px auto;
    }
  </style>
</head>
<body>
  <h1>Welcome, Ananya!</h1>
  <p>This page has a blue background and white text — styled entirely with CSS.</p>
  <p>Notice how centered and clean it looks with just a few lines of code.</p>
</body>
</html>
```

A complete styled page. The `body` selector applies the background and text color to everything. `h1` gets a big font. `p` gets a readable size with auto margins for centering. This is the kind of thing you can build in 5 minutes with CSS.

**Output:**

```
A fully blue page with a big white centered heading and two white centered paragraphs.
```

### Multiple Selectors Working Together

```html
<!DOCTYPE html>
<html>
<head>
  <title>Multiple Selectors</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #fff5e6;
      padding: 30px;
    }

    /* Multiple selectors can share styles */
    h1, h2, h3 {
      color: #d2691e;
      text-align: center;
    }

    p {
      color: #555;
      line-height: 1.7;
    }

    /* You can style links too */
    a {
      color: #ff4500;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <h1>Vikram's Cookbook</h1>
  <h2>Masala Chai Recipe</h2>
  <p>This is the best chai you will ever make.</p>
  <h3>Ingredients</h3>
  <p>Water, milk, sugar, tea leaves, ginger, cardamom.</p>
  <p>For more, <a href="#">click here</a>.</p>
</body>
</html>
```

You can apply the same styles to multiple selectors by separating them with commas. `h1, h2, h3` means "all h1, h2, and h3 elements get these styles". This is much cleaner than writing the same styles three times. You can also target tags like `a` for links, `button`, `li`, and so on.

**Output:**

```
A warm-colored page with orange-brown centered headings, dark grey body text, and an orange link.
```

### Combining Inline, Internal, and External CSS

```html
<!DOCTYPE html>
<html>
<head>
  <title>Combining CSS Methods</title>
  <!-- Imagine an external CSS file is also linked here -->
  <style>
    /* Internal CSS */
    body { background-color: #eee; font-family: Arial; }
    p { color: green; font-size: 18px; }
  </style>
</head>
<body>
  <h1>Cascade Demo</h1>
  <p>This paragraph is green (from internal CSS).</p>
  <p style="color: red;">This paragraph is RED because inline CSS wins over internal CSS.</p>
  <p>This one is green again (back to internal CSS rule).</p>
</body>
</html>
```

This example demonstrates the cascade. The internal CSS says all paragraphs should be green. But the middle paragraph has an inline `style="color: red;"` that overrides the green because inline CSS has higher specificity. This is the cascade in action — rules from different sources combine, and the most specific one wins.

**Output:**

```
Three paragraphs: two green and the middle one red. The red one overrode the green from the internal CSS.
```

## Common Mistakes

### Forgetting the Semicolon at the End of a Property

**Wrong:**

```
p {
  color: blue
  font-size: 18px;
}
```

Only the semicolon-less property may still work, but the line after it breaks. Here, font-size gets ignored.

**Correct:**

```
p {
  color: blue;
  font-size: 18px;
}
```

Every CSS property must end with a semicolon. Missing one breaks the parser. Some browsers are forgiving and apply the first value but ignore everything after. Always add a semicolon — it is one tiny character that saves you hours of debugging.

### Using = Instead of : in CSS

**Wrong:**

```
h1 {
  color = red;
}
```

The entire rule is ignored. CSS uses colons, not equal signs.

**Correct:**

```
h1 {
  color: red;
}
```

CSS uses a colon `:` between the property and value, not an equal sign. If you use `=`, the browser does not understand the rule and ignores it completely.

### Forgetting to Link the External CSS File

**Wrong:**

```
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello</h1>
</body>
</html>
```

The CSS file exists but is not linked. None of the styles apply.

**Correct:**

```
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Hello</h1>
</body>
</html>
```

Having a CSS file in your folder is not enough. You must link it with `` inside the head. Without this tag, the browser never loads your CSS.

### Wrong Path to the CSS File

**Wrong:**

```
<!-- File is in css/styles.css -->
<link rel="stylesheet" href="styles.css">
```

404 — file not found. The path is wrong.

**Correct:**

```
<link rel="stylesheet" href="css/styles.css">
```

The `href` must be the correct path to the CSS file relative to the HTML file. If your CSS is in a subfolder called `css`, the path must include that folder. Check the browser's Network tab to see if the CSS loaded.

### Missing Curly Braces

**Wrong:**

```
h1
  color: blue;
  font-size: 24px;
```

The CSS has no rule — none of it applies.

**Correct:**

```
h1 {
  color: blue;
  font-size: 24px;
}
```

Every CSS rule must wrap its properties in curly braces `{ }`. Without them, there is no rule — just random text. The browser ignores it completely.

## Summary

- CSS stands for Cascading Style Sheets. It is the language used to style HTML pages with colors, fonts, spacing, and layouts.
- HTML gives websites their structure. CSS gives them their appearance. Both are needed to build a real website.
- There are 3 ways to add CSS: inline (on the tag with style=""), internal (inside a  tag in the head), and external (a separate .css file linked with ).
- External CSS is the best practice. One CSS file can style hundreds of pages. Change one line, update every page.
- CSS syntax: selector { property: value; property: value; }. The selector picks the element, properties describe what to change, and values set how it looks.
- Always end each property with a semicolon. Missing semicolons break the rules that follow them.
- CSS comments use /* and */. They are ignored by the browser but help you and other developers understand the code.
- The cascade is the system CSS uses to pick which rule wins when multiple rules apply. Rules depend on specificity, order, and source.
- Specificity basics: inline (1000) > ID (100) > class (10) > element (1). A more specific selector overrides a less specific one.
- You can apply the same styles to multiple selectors by separating them with commas: h1, h2, h3 { color: red; }.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/html-and-css/introduction-to-css/*
*Practice questions: https://learn.modernagecoders.com/resources/html-and-css/introduction-to-css/practice/*
