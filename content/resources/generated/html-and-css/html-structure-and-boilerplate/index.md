---
title: "HTML Structure and Boilerplate - DOCTYPE, Head, Body, Meta Tags | Modern Age Coders"
description: "Learn the standard HTML5 boilerplate every web page needs: DOCTYPE, html, head, body, meta charset, viewport, and more. 55 practice questions for beginners."
slug: html-structure-and-boilerplate
canonical: https://learn.modernagecoders.com/resources/html-and-css/html-structure-and-boilerplate/
category: "HTML and CSS"
keywords: ["html boilerplate", "html structure", "doctype html", "html head body", "meta viewport", "meta charset", "html5 template", "html page structure", "html comments", "html nesting"]
---
# HTML Structure and Boilerplate - The Skeleton Every Page Needs

**Difficulty:** Beginner  
**Reading time:** 22 min  
**Chapter:** 2  
**Practice questions:** 55

## What Is an HTML Boilerplate?

A **boilerplate** is the standard skeleton code that every HTML page needs to start with. Think of it like the pre-printed lines on a notebook page — before you can write your story, the lines need to be there. Before you can write any HTML content, you need the boilerplate.

This boilerplate tells the browser three important things: (1) which version of HTML you are using, (2) what language the page is in, (3) how the page should look on phones. Without the boilerplate, the browser has to guess, and it often guesses wrong.

### The Standard HTML5 Boilerplate

Here is what every modern HTML page starts with:

```
<!DOCTYPE html>

  
  
  Page Title

  <!-- Your content goes here -->

```

Every professional web page uses some version of this. Memorise it. Type it out by hand a few times. Soon it will feel natural.

## Why Does Every Page Need a Boilerplate?

You might wonder — why can I not just write some `` tags and call it a day? Here are the five big reasons.

### 1. Tells the Browser What Version of HTML You Use

Over the years, there have been many versions of HTML: HTML 3, HTML 4, XHTML, HTML5. Each works slightly differently. The `<!DOCTYPE html>` declaration at the top tells the browser 'render this in modern HTML5 mode'. Without it, some browsers fall back to 'quirks mode', which is an ancient weird rendering from the 1990s that can break your layout.

### 2. Sets the Language for Accessibility and SEO

The `lang="en"` attribute on the `` tag tells screen readers to pronounce words in English, helps browsers offer translation to other languages, and helps search engines show your page to the right audience.

### 3. Handles Special Characters Correctly

Without ``, characters like 'e', 'n', 'a', or emoji may show as weird garbled symbols. UTF-8 is the universal encoding that handles every language in the world — English, Hindi, Tamil, Chinese, Arabic, everything.

### 4. Makes Your Page Look Right on Phones

The viewport meta tag is critical. Without it, your web page will look tiny and zoomed out on a phone, like you are looking at a desktop site through a keyhole. With it, the page fits the screen nicely. More than half of all web browsing happens on phones, so this is not optional.

### 5. Separates Metadata From Content

The `` is for information *about* the page (title, language, styles). The `` is for the actual visible content. This separation keeps your code organised and works better with browsers, screen readers, and search engines.

## Detailed Explanation

### 1. <!DOCTYPE html>

This is always the very first line. No spaces above it, nothing before it. It tells the browser 'this is an HTML5 document'. In older versions of HTML (like HTML 4), the DOCTYPE was a long, complicated URL. In HTML5, it is just `<!DOCTYPE html>` — short and simple.

If you skip the DOCTYPE, browsers may render your page in 'quirks mode', which emulates ancient buggy behaviour from the 1990s. Your CSS might break, your layout might look wrong. Always include it.

### 2. The  Element

The `` element wraps everything else. Inside it are two main children: `` and ``. It usually has a `lang` attribute to set the page's language:

- `lang="en"` for English
- `lang="hi"` for Hindi
- `lang="ta"` for Tamil
- `lang="fr"` for French

### 3. The  Element

The `` contains **metadata** — information about the page that is not shown on the page itself. Things that go inside head:

- `` — the text shown on the browser tab
- `` — the character encoding
- `` — mobile settings
- `` — description for search engines
- `` — link to CSS file
- `` — link to JavaScript file

Nothing in the head is displayed as visible content (except the title, which appears on the browser tab, not on the page itself).

### 4. The  Element

The title is shown:

- On the browser tab at the top of the window
- When you bookmark the page
- In Google search results as the clickable blue link
- When you share the page on social media

Write a clear, descriptive title. 'My Page' is boring. 'Priya's Art Portfolio - Paintings, Sketches, and Drawings' is better.

### 5. The meta charset Tag

`` should be one of the first things in your head. It tells the browser how to decode the bytes of your file into characters. UTF-8 is the universal standard and supports every language. Without it, special characters might show as gibberish.

### 6. The Viewport Meta Tag

``

This is the most important tag for mobile. Here is what it does:

- **width=device-width** — make the page as wide as the phone's screen
- **initial-scale=1.0** — do not zoom in or out when the page loads

Without this tag, phones assume your page is a desktop site and show it zoomed out. Users see tiny text and have to pinch to zoom. With this tag, the page fits the phone naturally.

### 7. The  Element

Everything the user sees goes inside `` — headings, paragraphs, images, videos, buttons, forms, everything. Think of it as the stage where the show happens.

### 8. Comments

HTML comments are notes for yourself or other developers. The browser ignores them:

`<!-- This is a comment. It is invisible on the page. -->`

Use comments to explain tricky parts, mark sections of your HTML, or temporarily hide code you are testing. Never write private information in comments because anyone can see them by viewing the page source.

### 9. Nesting Rules

HTML elements can be nested inside each other, but the rules are strict:

- **Proper:** `Bold text`
- **Wrong:** `Bold text`

Think of nesting like brackets in maths: `[{()}]`. Each opening bracket must be closed in the reverse order it was opened. Same with HTML tags.

### 10. Indentation Best Practices

HTML does not care about spaces or tabs — you can write everything on one line and it still works. But good developers indent their code so it is easy to read. Every time you nest an element, indent it by 2 spaces. Compare:

**Hard to read:**
`AppleMango`

**Easy to read:**

```

- Apple
- Mango

```

## Code Examples

### The Complete HTML5 Boilerplate

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Web Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my very first HTML5 page with the proper boilerplate.</p>
</body>
</html>
```

This is the standard HTML5 boilerplate. Save this as `index.html` and open it in a browser. You will see a heading and a paragraph. The DOCTYPE on line 1 tells the browser this is HTML5. The `lang="en"` sets the language to English. The two meta tags in the head set the character encoding and mobile viewport. The title appears on the browser tab. Everything visible goes in the body.

**Output:**

```
A clean page with a big heading 'Hello, World!' and a paragraph below it. The browser tab shows 'My First Web Page'.
```

### A Page With Comments and Proper Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Aarav</title>
</head>
<body>
  <!-- Main heading section -->
  <h1>About Aarav</h1>
  <p>Hi, I am Aarav. I am learning HTML.</p>

  <!-- Hobbies section -->
  <h2>My Hobbies</h2>
  <ul>
    <li>Cricket</li>
    <li>Painting</li>
    <li>Reading</li>
  </ul>

  <!-- Footer note -->
  <!-- TODO: add a contact form here later -->
</body>
</html>
```

This page uses HTML comments to label different sections. The browser does not show comments — they are only visible when you view the page source. Comments help you and other developers understand what each part of the code does. Notice the 'TODO' comment reminding yourself to add a contact form later. This is a professional habit.

**Output:**

```
A page with 'About Aarav' as the heading, an intro paragraph, a 'My Hobbies' sub-heading, and a bulleted list of three hobbies. Comments are not visible.
```

### A Page With Proper Nesting

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Recipe Page</title>
</head>
<body>
  <h1>Chocolate Cake</h1>
  <p>This is a <strong>delicious</strong> recipe that takes only <em>30 minutes</em> to prepare.</p>
  <h2>Ingredients</h2>
  <ul>
    <li>2 cups of flour</li>
    <li>1 cup of <strong>cocoa powder</strong></li>
    <li>3 eggs</li>
  </ul>
</body>
</html>
```

This example shows proper nesting. The `` and `` tags are nested inside the `` tag. The `` items are nested inside the ``. Notice how each opening tag is closed before the parent tag closes. This is the correct way to nest HTML.

**Output:**

```
A recipe page with the title, a paragraph where 'delicious' is bold and '30 minutes' is italic, and a bulleted list of ingredients where 'cocoa powder' is bold.
```

### Viewport Meta Tag Demo

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mobile Friendly Page</title>
</head>
<body>
  <h1>Mobile Friendly</h1>
  <p>Because of the viewport meta tag, this page fits your phone screen nicely. Try resizing your browser window or opening this page on your phone.</p>
  <p>Without the viewport tag, phones would show this page tiny and zoomed out.</p>
</body>
</html>
```

Save this and open it on your phone (or use your browser's mobile preview with F12). The text will be readable at phone size. Now try removing the viewport meta tag and reload — the text will look tiny and you will have to pinch to zoom. This tag is what makes your page mobile-friendly.

**Output:**

```
A page that looks normal on desktop and also looks proper on phone screens.
```

### Using Description and Keywords Meta Tags

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="A beginner-friendly guide to learning HTML and CSS by Priya Sharma.">
  <meta name="author" content="Priya Sharma">
  <title>Learn HTML with Priya</title>
</head>
<body>
  <h1>Welcome to My HTML Guide</h1>
  <p>This page teaches you the basics of HTML in a simple, fun way.</p>
</body>
</html>
```

The `description` meta tag appears in Google search results below the blue link — it is your chance to tell users what the page is about. The `author` meta tag credits the creator. These are invisible on the page itself but very important for SEO (Search Engine Optimisation).

**Output:**

```
A simple page with a welcome heading and paragraph. The description appears in Google search results.
```

### Nested Elements with Proper Indentation

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Menu</title>
</head>
<body>
  <h1>Cafe Menu</h1>
  <h2>Drinks</h2>
  <ul>
    <li>
      Hot Drinks
      <ul>
        <li>Coffee</li>
        <li>Masala Chai</li>
      </ul>
    </li>
    <li>
      Cold Drinks
      <ul>
        <li>Mango Lassi</li>
        <li>Lemon Soda</li>
      </ul>
    </li>
  </ul>
</body>
</html>
```

This example shows nested lists. A `` is placed inside an `` to create a sub-list. Notice the clean indentation — every time something is nested inside something else, it is indented by two spaces. This makes the code much easier to read. The browser shows indented sub-lists automatically.

**Output:**

```
A menu with a 'Drinks' heading and a bulleted list that has 'Hot Drinks' with a sub-list (Coffee, Masala Chai) and 'Cold Drinks' with a sub-list (Mango Lassi, Lemon Soda).
```

## Common Mistakes

### Forgetting the DOCTYPE Declaration

**Wrong:**

```
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello</h1>
</body>
</html>
```

The browser may fall into 'quirks mode', causing CSS to behave strangely and layouts to break in unpredictable ways.

**Correct:**

```
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

The `<!DOCTYPE html>` must be the very first line of every HTML page — no spaces or comments before it. It tells the browser to use modern HTML5 rendering. Without it, you get unpredictable behaviour, especially when you start adding CSS.

### Wrong Meta Viewport Tag Syntax

**Wrong:**

```
<meta name="viewport" content="width=device, scale=1">
```

The page may still look zoomed out on phones because the viewport values are wrong.

**Correct:**

```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

The viewport tag has a specific syntax. The width must be `device-width` (with a hyphen), and the scale attribute is `initial-scale`, not just `scale`. Memorise this tag exactly. Copy-paste is fine — even professionals do it.

### Writing Visible Content Inside the Head

**Wrong:**

```
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
  <h1>Welcome</h1>
  <p>This is wrong.</p>
</head>
<body>
</body>
</html>
```

The browser may still show the heading and paragraph, but it is invalid HTML and causes issues with CSS, JavaScript, and screen readers.

**Correct:**

```
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Welcome</h1>
  <p>This is correct.</p>
</body>
</html>
```

The `` is only for metadata — title, meta tags, links to CSS, links to scripts. All visible content (headings, paragraphs, images, lists, etc.) must go inside ``. Mixing them causes invalid HTML and breaks many tools that read your page.

### Wrong Nesting Order

**Wrong:**

```
<p><strong>This text is bold</p></strong>
```

The browser tries to guess what you meant, which can cause layout issues and invalid HTML.

**Correct:**

```
<p><strong>This text is bold</strong></p>
```

When you nest tags, they must be closed in the reverse order you opened them. Opening `` means you must close ``. Think of it like closing a nested pair of brackets: the inner one closes first.

### Broken HTML Comment Syntax

**Wrong:**

```
<!- This is a comment ->
```

The comment is not recognized and shows as plain text on the page.

**Correct:**

```
<!-- This is a comment -->
```

HTML comments start with `<!--` (with two dashes) and end with `-->` (with two dashes). One dash is wrong. Also, comments cannot contain two dashes in a row inside them — avoid writing `--` inside a comment.

## Summary

- The HTML boilerplate is the standard skeleton every web page needs: DOCTYPE, html, head, body.
- <!DOCTYPE html> must be the very first line. It tells the browser to use modern HTML5 rendering instead of old quirks mode.
- The  attribute sets the page language, which helps screen readers, translators, and search engines.
- The  contains metadata — information about the page that is not visible on the page itself.
- The  tag sets the text shown on the browser tab and in search results. It goes inside the head.
- ensures special characters and emoji render correctly. It should be near the top of the head.
- The viewport meta tag  makes your page look right on phones.
- The  contains everything the user sees — headings, paragraphs, images, links, lists, and more.
- HTML comments use <!-- and --> and are invisible on the page. Use them to label sections and leave notes for yourself.
- Indent nested elements by 2 spaces to make your code easy to read. HTML does not require indentation, but it is a professional habit.
- Close tags in the reverse order you opened them — just like closing brackets in mathematics.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/html-and-css/html-structure-and-boilerplate/*
*Practice questions: https://learn.modernagecoders.com/resources/html-and-css/html-structure-and-boilerplate/practice/*
