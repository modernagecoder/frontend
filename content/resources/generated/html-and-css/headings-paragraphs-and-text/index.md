---
title: "HTML Headings, Paragraphs, and Text Formatting - Strong, Em, Mark, Sub, Sup | Modern Age Coders"
description: "Master HTML text: headings h1-h6, paragraphs, line breaks, text formatting with strong, em, mark, entity codes, and best practices. 58 hands-on practice questions."
slug: headings-paragraphs-and-text
canonical: https://learn.modernagecoders.com/resources/html-and-css/headings-paragraphs-and-text
category: "HTML and CSS"
keywords: ["html headings", "h1 h6", "html paragraphs", "html text formatting", "strong em mark", "html entities", "blockquote", "subscript superscript", "html text tags"]
---
# Headings, Paragraphs, and Text Formatting - Making Your Words Beautiful

**Difficulty:** Beginner  
**Reading time:** 22 min  
**Chapter:** 3  
**Practice questions:** 58

## What Are HTML Text Tags?

Words are the heart of every web page. Whether it is a blog post, a school assignment, a news article, or a product description — text is what people come to read. HTML gives you a toolbox full of tags to mark up text so it has the right meaning and appearance.

In this chapter, you will learn how to create **headings** (big titles), **paragraphs** (blocks of text), **line breaks** and **horizontal rules** (visual separators), and use **formatting tags** like bold, italic, highlighted, subscript, superscript, and more. You will also learn about **entity codes** — special codes for characters like &copy; and  .

### Why Different Tags?

You might ask: 'Why not just have one big text tag and add styles to it?' The answer is **meaning**. HTML tags tell the browser, screen readers, and search engines what the text *means*, not just how it looks. A `` tag means 'this is important', while a `` tag just means 'make it bold'. Using the right tag makes your page more accessible and better for SEO.

## Why Learn Text Tags Properly?

### 1. Structure Makes Content Readable

A wall of text is painful to read. Headings let users scan a page quickly to find what they need. Paragraphs break text into manageable chunks. This is why every newspaper, book, and website uses headings and paragraphs.

### 2. Headings Are Critical for SEO

Google reads your headings to understand what your page is about. If you have an `` that says 'Learn to Bake a Chocolate Cake', Google knows that is your main topic. Use the right headings and you rank higher in search results.

### 3. Accessibility

Blind users navigate the web with screen readers that announce headings. They can press a key to jump between headings to quickly understand the page structure. If you skip heading levels or use them incorrectly, screen reader users have a frustrating experience.

### 4. Semantic Meaning Over Visual Style

HTML tags carry **meaning**. `` means 'this is important' — browsers show it as bold, but screen readers also emphasise it when reading aloud. `` means 'stress this word' — shown as italic, also emphasised verbally. Using meaningful tags makes your content work for everyone.

### 5. Professional Writing

Any blog, documentation site, or online article uses these tags constantly. If you want to write for the web, you need to know them. Plus, they are easy to learn — you can master all the common ones in an hour.

## Detailed Explanation

### Headings: h1 to h6

HTML has six heading levels, from `` (most important) to `` (least important). Browsers give each level a smaller default size.

- `` — The main title. Use only ONE h1 per page. This is what the page is about.
- `` — Section titles. Use as many as needed.
- `` — Sub-section titles inside h2 sections.
- ``, ``, `` — Rarely used, only for very deep hierarchies.

**Important rule:** Only one `` per page is the best practice for SEO. Think of it like the title of a book — a book has only one title, not ten.

### Paragraphs: 

The `` tag creates a paragraph. Browsers automatically add vertical space between paragraphs. Each `` should contain one complete thought or idea. Avoid putting too much text in a single paragraph — break it up for readability.

### Line Break: 

The `` tag forces a line break without starting a new paragraph. It is self-closing (no closing tag needed). Use it sparingly — only when you really need a manual line break, like in a poem or an address.

### Horizontal Rule: 

---

The `` tag draws a horizontal line across the page to visually separate sections. It is also self-closing. Useful for dividing a page into themed sections.

### Text Formatting Tags

HTML has many tags to format text:

- `` — Important text (displays bold). Semantic.
- `` — Stressed/emphasised text (displays italic). Semantic.
- `` — Plain bold text (no extra meaning). Use `` instead for important content.
- `` — Plain italic text. Use `` instead for stressed content.
- `` — Highlighted text (yellow background by default).
- `` — Smaller text, often used for fine print or side notes.
- `` — Subscript (below the line), like H2O.
- `` — Superscript (above the line), like x2.
- `` — Deleted text (shown with strikethrough line).
- `` — Inserted text (shown with underline).
- `` — Computer code (shown in monospace font).
- `` — Keyboard input (like 'Press Ctrl+C').

### Blockquotes

The `` tag is for quoting a block of text from another source. Browsers usually indent blockquotes to set them apart visually. Use this for quotes longer than a line.

### HTML Entity Codes

Some characters are special in HTML because they are part of the syntax. To show them as text, you need **entity codes**:

CharacterEntity CodeUse Case<<Less-than sign>>Greater-than sign&&amp;Ampersand""Double quote&copy;&copy;Copyright symbol &nbsp;Non-breaking space&reg;&reg;Registered trademark&trade;&trade;Trademark

` ` (non-breaking space) is especially useful — it creates a space that the browser will not collapse, and it prevents the text from wrapping at that point. For example, write `Dr. Priya` to keep 'Dr.' and 'Priya' on the same line.

### How HTML Handles Whitespace

This is a critical concept. HTML **collapses whitespace**. If you write:

```

Hello       World

```

The browser shows: 'Hello World' (only one space, even though you typed many). Multiple spaces, tabs, and line breaks in your HTML source all become a single space on the page. This means you cannot use spaces to position text. For real spacing, use CSS. For forced spaces, use ` `.

## Code Examples

### All Six Heading Levels

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Heading Levels</title>
</head>
<body>
  <h1>Heading Level 1 - Biggest</h1>
  <h2>Heading Level 2</h2>
  <h3>Heading Level 3</h3>
  <h4>Heading Level 4</h4>
  <h5>Heading Level 5</h5>
  <h6>Heading Level 6 - Smallest</h6>
</body>
</html>
```

This example shows all six heading levels. Save it and open in a browser — you will see the headings get progressively smaller from h1 to h6. Use h1 for the main page title (only one per page), h2 for major sections, and h3 for subsections. h4, h5, and h6 are rarely needed.

**Output:**

```
Six headings of decreasing size, from large 'Heading Level 1' to small 'Heading Level 6'.
```

### A Recipe With Heading and Subheading

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chocolate Cake Recipe</title>
</head>
<body>
  <h1>Chocolate Cake</h1>
  <h2>Made in Just 30 Minutes</h2>
  <p>This is a <strong>simple</strong> and <em>delicious</em> chocolate cake recipe that anyone can make at home.</p>
  <h3>Ingredients</h3>
  <p>You will need flour, cocoa powder, sugar, eggs, butter, and milk. All of these are usually available at any local grocery store.</p>
  <h3>Steps</h3>
  <p>Mix all the ingredients in a bowl, pour into a baking tray, and bake for 25 minutes. Let it cool before serving.</p>
</body>
</html>
```

A recipe page uses a clear heading hierarchy: h1 for the recipe name (main topic), h2 for a subtitle, and h3 for the Ingredients and Steps sub-sections. The paragraph uses `` to emphasise 'simple' and `` to stress 'delicious'.

**Output:**

```
A recipe page with a big 'Chocolate Cake' title, a subtitle, a paragraph with bold and italic words, and sections for Ingredients and Steps.
```

### Text Formatting Showcase

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Text Formatting</title>
</head>
<body>
  <h1>Text Formatting Tags</h1>
  <p>This is <strong>important text</strong> that stands out.</p>
  <p>This is <em>emphasised text</em> shown in italic.</p>
  <p>This is <mark>highlighted text</mark> with a yellow background.</p>
  <p>Water is <strong>H<sub>2</sub>O</strong> and x squared is <strong>x<sup>2</sup></strong>.</p>
  <p>The price was <del>Rs 500</del> <ins>Rs 350</ins> after discount.</p>
  <p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>
  <p>To make a variable, use <code>let name = "Aarav";</code> in JavaScript.</p>
  <p><small>This is fine print, like a disclaimer.</small></p>
</body>
</html>
```

This example showcases almost every text formatting tag: `strong` (bold/important), `em` (italic/emphasis), `mark` (highlight), `sub` (subscript), `sup` (superscript), `del` (strikethrough), `ins` (inserted/underline), `kbd` (keyboard key), `code` (inline code), and `small` (fine print). Each has a specific meaning and visual style.

**Output:**

```
A page showing various text formatting effects: bold, italic, highlighted yellow, subscript, superscript, strikethrough, keyboard keys, monospace code, and small fine print.
```

### Entity Codes in Action

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Entity Codes</title>
</head>
<body>
  <h1>HTML Entity Codes</h1>
  <p>The copyright symbol is &copy; and the registered symbol is &reg;.</p>
  <p>To show HTML tags as text, use &amp;lt; and &amp;gt; like this: &lt;p&gt;Hello&lt;/p&gt;</p>
  <p>The ampersand itself is written as &amp;amp; to show &amp; on the page.</p>
  <p>Dr.&nbsp;Priya&nbsp;Sharma will stay on one line thanks to non-breaking spaces.</p>
  <p>The temperature is 36&deg;C today.</p>
  <p>Mathematics: 2 &times; 3 = 6 and 6 &divide; 2 = 3</p>
</body>
</html>
```

Entity codes let you display special characters that have meaning in HTML (like < and >) or that are hard to type (like &copy;, &deg;, &times;). Every entity starts with & and ends with ;. This example shows copyright, registered, less-than, greater-than, ampersand, non-breaking space, degree, multiply, and divide.

**Output:**

```
A page showing copyright symbols, HTML tags as text, the degree symbol for temperature, and math symbols.
```

### Blockquote and Horizontal Rule

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quotes</title>
</head>
<body>
  <h1>Famous Quotes</h1>
  <p>Here is a quote from a great Indian scientist:</p>
  <blockquote>
    <p>Dream, dream, dream. Dreams transform into thoughts, and thoughts result in action.</p>
    <p>- Dr. A. P. J. Abdul Kalam</p>
  </blockquote>
  <hr>
  <p>And another timeless quote:</p>
  <blockquote>
    <p>Arise, awake, and stop not until the goal is reached.</p>
    <p>- Swami Vivekananda</p>
  </blockquote>
</body>
</html>
```

The `` tag is for quoting a block of text from another source. Browsers usually indent it and add spacing. Inside a blockquote, you can use other tags like ``. The `` between the two quotes creates a horizontal line as a visual separator.

**Output:**

```
A page with two indented quote blocks, separated by a horizontal line, each showing a famous quote and its author.
```

### Poem With Line Breaks

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Poem</title>
</head>
<body>
  <h1>Twinkle Twinkle</h1>
  <p>
    Twinkle, twinkle, little star,<br>
    How I wonder what you are.<br>
    Up above the world so high,<br>
    Like a diamond in the sky.<br>
    Twinkle, twinkle, little star,<br>
    How I wonder what you are.
  </p>
  <hr>
  <p><small>Written by Jane Taylor, 1806</small></p>
</body>
</html>
```

For a poem, each line should break where the poem line ends. Using separate `` tags for each line would add too much space. Instead, wrap the whole poem in one `` and use `` at the end of each line. The author credit uses `` for a smaller, attribution-style look.

**Output:**

```
A page titled 'Twinkle Twinkle' with the whole poem rendered as a single paragraph where each line is on its own line (thanks to br tags), followed by a horizontal rule and small author attribution.
```

## Common Mistakes

### Using Multiple h1 Tags on One Page

**Wrong:**

```
<h1>Welcome</h1>
<h1>About Us</h1>
<h1>Contact</h1>
```

The page has no clear main topic for SEO, and screen readers get confused about the page structure.

**Correct:**

```
<h1>Welcome to My Site</h1>
<h2>About Us</h2>
<h2>Contact</h2>
```

Every page should have only one `` — the main page title. Use `` for major sections. This helps search engines and screen readers understand that the h1 is the top-level topic.

### Using <br> for Paragraph Spacing

**Wrong:**

```
Welcome to my page.<br><br><br>Here is some information.<br><br><br>And more text.
```

Invalid HTML structure. Browsers show extra spacing, but the text is not inside any proper element.

**Correct:**

```
<p>Welcome to my page.</p>
<p>Here is some information.</p>
<p>And more text.</p>
```

Do not use multiple `` tags to create spacing between paragraphs. Use proper `` tags — browsers automatically add spacing between paragraphs. `` is only for forced line breaks inside a single paragraph (like in a poem or address).

### Forgetting to Close Entity Codes

**Wrong:**

```
<p>Copyright &copy 2026</p>
```

The copyright symbol may not render — the browser may show 'Copyright &copy 2026' as text.

**Correct:**

```
<p>Copyright &copy; 2026</p>
```

Every HTML entity must end with a semicolon `;`. `&copy;` is correct, `&copy` without the semicolon may or may not work depending on the browser. Always include the semicolon.

### Expecting Multiple Spaces to Show

**Wrong:**

```
<p>Hello       World</p>
```

The browser shows 'Hello World' (only one space), not the extra spaces you typed.

**Correct:**

```
<p>Hello&nbsp;&nbsp;&nbsp;&nbsp;World</p>
<!-- Or better: use CSS for spacing -->
```

HTML collapses multiple spaces, tabs, and newlines into a single space. If you need several forced spaces, use ` ` multiple times. For real layout spacing, use CSS (which you will learn later).

### Using <b> and <i> Instead of <strong> and <em>

**Wrong:**

```
<p><b>Warning:</b> read this <i>carefully</i>.</p>
```

The text looks the same, but screen readers do not emphasise the important word. Less accessible.

**Correct:**

```
<p><strong>Warning:</strong> read this <em>carefully</em>.</p>
```

`` and `` only change the look. `` and `` carry semantic meaning — 'this is important' and 'stress this word'. Screen readers emphasise these when reading aloud. Always prefer `` and ``.

## Summary

- HTML has six heading levels from  (biggest, most important) to  (smallest, least important).
- Use only ONE  per page — it represents the main topic of the page and is critical for SEO.
- creates a paragraph. Browsers automatically add vertical space between paragraphs.
- is a self-closing tag that forces a line break. Use it only when you need a manual break, like in a poem or address.
- draws a horizontal line across the page to visually separate sections.
- means 'important' and  means 'stressed' — these are semantic tags that screen readers understand. Prefer them over  and .
- highlights text with a yellow background.  shows fine print.  shows strikethrough.  shows underlined inserted text.
- creates subscript (like H2O) and  creates superscript (like x squared).  shows computer code in monospace font.
- is for quoting a block of text from another source — browsers indent it by default.
- HTML entity codes let you display special characters: &copy; for copyright,   for non-breaking space, < for less than, > for greater than, & for ampersand.
- HTML collapses whitespace — multiple spaces, tabs, and newlines become a single space. Use   for forced spaces or CSS for layout spacing.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/html-and-css/headings-paragraphs-and-text/*
*Practice questions: https://learn.modernagecoders.com/resources/html-and-css/headings-paragraphs-and-text/practice/*
