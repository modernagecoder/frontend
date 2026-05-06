---
title: "Practice: HTML Structure and Boilerplate - The Skeleton Every Page Needs"
description: "55 practice problems for HTML Structure and Boilerplate - The Skeleton Every Page Needs in HTML and CSS"
slug: html-structure-and-boilerplate-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/html-structure-and-boilerplate/practice/
category: "HTML and CSS"
---
# Practice: HTML Structure and Boilerplate - The Skeleton Every Page Needs

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] What is the purpose of `<!DOCTYPE html>`?

*Hint:* It tells the browser something about the HTML version.

**Answer:** It tells the browser to render the page using the HTML5 standard, not an older version or quirks mode.

The DOCTYPE declaration is always the first line of an HTML page. `<!DOCTYPE html>` is the HTML5 version. Without it, browsers may use ancient 'quirks mode' which breaks modern CSS and layouts.

### Q2. [Easy] What is missing from this HTML?

```

  My Page

  Hello

```

*Hint:* Something should be on the very first line.

**Answer:** ```
<!DOCTYPE html>

...
```

The `<!DOCTYPE html>` declaration is missing from the top. Every HTML5 page must start with this line to tell the browser which version of HTML to use.

### Q3. [Easy] What does the `lang="en"` attribute do on the `` tag?

*Hint:* It sets something about the content.

**Answer:** It tells the browser and screen readers that the page content is in English.

The `lang` attribute on `` sets the primary language of the page. This helps screen readers pronounce words correctly, helps browsers offer translation, and helps search engines serve the page to the right users.

### Q4. [Easy] What is missing from this page?

```
<!DOCTYPE html>

  Welcome

```

*Hint:* The browser tab will show something weird without this.

**Answer:** The `` tag is missing from the head. Add `Your Title` inside the head section.

Every HTML page should have a `` inside ``. Without it, the browser tab shows the filename or is blank, and search engines have no proper title to display.

### Q5. [Easy] Where does the text inside the `` tag appear?

*Hint:* Not on the page itself — look higher.

**Answer:** On the browser tab at the top of the window, in bookmarks, and in search engine results.

The `` is displayed on the browser tab, not on the page itself. It also appears when you bookmark the page, share it on social media, or see it in Google search results.

### Q6. [Easy] Write the complete HTML5 boilerplate with the title 'My Practice Page' and the heading 'Hi there' in the body.

*Hint:* Include DOCTYPE, html (with lang), head (with meta charset, meta viewport, title), and body.

**Answer:** ```
<!DOCTYPE html>

  
  
  My Practice Page

  Hi there

```

The complete HTML5 boilerplate has five essential parts: DOCTYPE, the html element with lang, the head with charset meta, viewport meta, and title, and finally the body with visible content.

### Q7. [Easy] What does the viewport meta tag do?

*Hint:* It matters most on a specific kind of device.

**Answer:** It makes the page display properly on mobile phones by matching the screen width and not zooming out.

`` tells phones to show the page at the phone's actual width and not to zoom out. Without it, phones display web pages as tiny zoomed-out desktop views.

### Q8. [Easy] Why is this comment not working (it shows up as text on the page)?

```
<!- This is a note ->
```

*Hint:* Comments need a specific number of dashes.

**Answer:** ```
<!-- This is a note -->
```

HTML comments need exactly two dashes on each side: `<!--` to open and `-->` to close. One dash is wrong.

### Q9. [Easy] Which tag should contain the visible content of the page?

*Hint:* Not head — the other one.

**Answer:** ``

All visible content — headings, paragraphs, images, links, lists — goes inside the `` element. The `` is only for metadata that is not displayed on the page itself.

### Q10. [Easy] Add an HTML comment above a heading that says 'This is the main title'.

*Hint:* Use <!-- and -->

**Answer:** ```
<!-- This is the main title -->
Welcome
```

HTML comments start with `<!--` and end with `-->`. They are invisible on the page but help explain your code.

### Q11. [Easy] What character encoding should you use in the meta charset tag?

*Hint:* The universal one.

**Answer:** UTF-8

`` is the standard. UTF-8 supports every character from every language in the world, including English, Hindi, Tamil, Chinese, Arabic, and emoji.

### Q12. [Medium] What is wrong with this nesting?

```
**Important text**
```

*Hint:* The tags must close in the reverse order they were opened.

**Answer:** ```
**Important text**

```

When nesting, close the inner tag first, then the outer tag. The opening order was ``, so the closing order must be ``.

### Q13. [Medium] Write the HTML boilerplate for a Hindi language page titled 'Namaste Duniya'.

*Hint:* Use lang="hi" for Hindi.

**Answer:** ```
<!DOCTYPE html>

  
  
  Namaste Duniya

  Namaste Duniya

```

For a Hindi page, use `lang="hi"` on the html tag. The meta charset UTF-8 is important because it supports Devanagari characters natively.

### Q14. [Medium] Which of these should go inside the head and which inside the body: ``, ``, ``, ``?

*Hint:* Metadata vs visible content.

**Answer:** Inside head: `` and ``. Inside body: `` and ``.

The head holds metadata — information about the page that is not shown on the page. The body holds visible content. `` shows on the browser tab (technically not 'on the page'), so it belongs in head.

### Q15. [Medium] Rohan wrote this boilerplate but something is wrong. Fix it:

```
<!DOCTYPE html>

  
  Test

```

*Hint:* Check the charset value carefully.

**Answer:** ```

```

The charset value must be `UTF-8` with a hyphen, not `UTF8`. Small typos like this can cause special characters to display incorrectly.

### Q16. [Medium] Write a complete HTML page with a description meta tag that says 'A personal blog about cricket and coding by Vikram'.

*Hint:* Use

**Answer:** ```
<!DOCTYPE html>

  
  
  
  Vikram's Blog

  Welcome to my blog

```

The description meta tag is used by Google and other search engines to show a preview of your page in search results. Write a clear, interesting description in 150-160 characters.

### Q17. [Medium] Will this HTML display the word 'hidden'?

```
Visible

<!-- hidden

 -->
```

*Hint:* Anything between <!-- and --> is ignored.

**Answer:** No. Only 'Visible' will be shown. The second paragraph is inside an HTML comment.

HTML comments are completely ignored by the browser. Even though the second line contains a valid `` tag, it is wrapped in `<!-- -->`, so the browser treats it as a comment and does not render it.

### Q18. [Medium] This page does not look right on phones. What is the fix?

```
<!DOCTYPE html>

  My Page

  Hello

```

*Hint:* A meta tag is missing.

**Answer:** Add the viewport meta tag: ``

Without the viewport meta tag, phones display web pages zoomed out as if they were desktop pages. Adding this tag makes the page adapt to the phone's actual screen width.

### Q19. [Medium] What is the difference between  and ?

*Hint:* One is on the tab, the other is on the page.

**Answer:** `` shows on the browser tab (inside head). `` is a visible heading on the page itself (inside body). They serve different purposes.

The title is metadata used by browsers, search engines, and social media. The h1 is visible content on the page. A page can have different text in title vs h1, though they are often related.

### Q20. [Medium] Write a complete HTML page that has two sections, each marked with an HTML comment explaining what it contains.

*Hint:* Use <!-- --> comments above each section.

**Answer:** ```
<!DOCTYPE html>

  
  
  Two Sections

  <!-- Introduction section -->
  About Me
  I am learning HTML.

  <!-- Hobbies section -->
  My Hobbies
  I enjoy reading and cricket.

```

Comments help organise larger HTML pages. Professionals often add comments above each major section to make the code easier to navigate.

### Q21. [Hard] Why does this page show the h1 but not the second paragraph?

```

  Hello
  <!-- First

  Second

 -->

```

*Hint:* Look at the comment boundaries.

**Answer:** Both paragraphs are inside a multi-line comment. Remove the comment markers to show them, or move the closing `-->` to hide only the first paragraph.

HTML comments can span multiple lines. Everything between `<!--` and the next `-->` is ignored. In this example, both paragraphs are inside the comment, so neither is visible.

### Q22. [Hard] Write a complete HTML page with: proper boilerplate, author meta tag crediting 'Ananya Patel', description meta tag, title 'Ananya's Portfolio', and a body with an h1 and a short paragraph.

*Hint:* Combine all the meta tags you have learned so far.

**Answer:** ```
<!DOCTYPE html>

  
  
  
  
  Ananya's Portfolio

  Welcome to my portfolio
  Here you will find my art, stories, and small code projects.

```

This boilerplate includes all common meta tags: charset, viewport, description, and author. The description is what shows up in Google search results, and the author tag credits the creator.

### Q23. [Hard] What is the difference between these two pieces of code visually?

```
AB
```

vs

```

  A
  B

```

*Hint:* Think about how the browser renders whitespace in HTML source.

**Answer:** There is no visual difference. Both render as a bulleted list with two items. HTML ignores extra whitespace in the source code.

HTML collapses whitespace when rendering — multiple spaces, tabs, and newlines in the source become a single space (or nothing) on the page. Indentation is only for readability, not for layout.

### Q24. [Hard] This boilerplate has three problems. Find them all:

```

  
  Test

```

*Hint:* Missing exclamation, missing quotes, unclosed title.

**Answer:** 1. `` should be `<!DOCTYPE html>` (missing !). 2. `lang=en` should be `lang="en"` (missing quotes). 3. `Test` is missing its closing tag. Charset value should also be `"UTF-8"` with quotes and hyphen.

This is a common beginner boilerplate riddled with small mistakes. The exclamation mark is essential for DOCTYPE. Attribute values should always be in quotes. Every tag with content (like title) needs a closing tag.

### Q25. [Hard] Write a fully valid HTML boilerplate with a comment section header above every major block in the body. Include intro, hobbies, and contact sections.

*Hint:* Structure with clear comments above each h2 section.

**Answer:** ```
<!DOCTYPE html>

  
  
  About Priya

  <!-- ===== Intro ===== -->
  Priya Sharma
  Hi, I am a student and hobbyist coder.

  <!-- ===== Hobbies ===== -->
  Hobbies
  Reading, painting, and HTML.

  <!-- ===== Contact ===== -->
  Contact
  Email: priya@example.com

```

Using section-header comments like this makes longer HTML files much easier to navigate. Professional developers often use visual dividers like `===` inside comments to make sections stand out.

## Mixed Questions

### Q1. [Easy] Which tag wraps ALL other HTML tags?

*Hint:* The grandparent of every element.

**Answer:** ``

The `` element is the root of every HTML document. It wraps both `` and ``. Only the DOCTYPE declaration comes before it.

### Q2. [Easy] Write a comment that says 'Footer starts here'.

*Hint:* Use <!-- and -->.

**Answer:** ```
<!-- Footer starts here -->
```

HTML comments begin with `<!--` and end with `-->`. They are invisible on the page and useful for marking sections.

### Q3. [Easy] What is wrong here?

```
Hi
```

*Hint:* Something is missing before .

**Answer:** The `<!DOCTYPE html>` declaration and the `` section (with title and meta tags) are missing.

Technically browsers may still render this, but a proper HTML page needs a DOCTYPE and a head section with at least a title and meta tags.

### Q4. [Easy] Where does  go?

*Hint:* It is metadata.

**Answer:** Inside the `` section.

All meta tags go inside the head. They are metadata — information about the page that is not visible on the page itself.

### Q5. [Easy] Write an HTML page with a title 'Bakery' and body containing a heading 'Welcome to our Bakery'.

*Hint:* Standard boilerplate with these two text values.

**Answer:** ```
<!DOCTYPE html>

  
  
  Bakery

  Welcome to our Bakery

```

Standard boilerplate with 'Bakery' as the title (shown on browser tab) and 'Welcome to our Bakery' as the main heading inside body (shown on the page).

### Q6. [Medium] Fix this wrong nesting:

```

  Apple

  Mango

```

*Hint:* Paragraphs should not be inside a list — and list items should be direct children of the list.

**Answer:** ```

  Apple
  Mango

```

List items (``) must be direct children of `` or ``. Wrapping them in paragraphs is invalid HTML.

### Q7. [Medium] Does the order of meta tags in the head matter?

*Hint:* Think about the charset tag in particular.

**Answer:** Yes. The `` tag should be among the first things in the head (within the first 1024 bytes) so the browser knows how to read the rest of the file.

The charset tag must appear very early because the browser needs to know the character encoding before reading other tags. A good order is: charset, viewport, title, other meta tags.

### Q8. [Medium] Write an HTML boilerplate that includes a comment explaining what each meta tag does.

*Hint:* Add a comment above each meta tag.

**Answer:** ```
<!DOCTYPE html>

  <!-- Character encoding for all languages -->
  
  <!-- Make the page mobile friendly -->
  
  Documented Page

```

Adding comments like this is useful when you are learning — it helps you remember what each tag does. You can remove them later for cleaner production code.

### Q9. [Medium] What is wrong with this HTML?

```
<!DOCTYPE html>

  
  Test

  Hi

```

*Hint:* One closing tag is missing.

**Answer:** The closing `` tag is missing. Add it before ``.

Every tag that has content needs an opening and a closing tag. The head section should end with `` before the body begins.

### Q10. [Medium] Is this HTML valid?

```
<!DOCTYPE HTML>
```

*Hint:* HTML is not case-sensitive for tags.

**Answer:** Yes. HTML is not case-sensitive, so `<!DOCTYPE HTML>` is valid, but `<!DOCTYPE html>` (lowercase) is the standard convention.

HTML tag names and attributes are case-insensitive. Both `<!DOCTYPE html>` and `<!DOCTYPE HTML>` work. However, lowercase is the modern convention and what most developers use.

### Q11. [Medium] Write a complete HTML page where the title and h1 are different: title should be 'Priya's Blog | Home' and h1 should be 'Welcome to my blog'.

*Hint:* Title goes in head, h1 goes in body.

**Answer:** ```
<!DOCTYPE html>

  
  
  Priya's Blog | Home

  Welcome to my blog

```

The title in the head is what shows on the browser tab and in search results. The h1 in the body is what users see on the page itself. They can have completely different text, though they should be related.

### Q12. [Hard] Why is this HTML broken?

```
<!DOCTYPE html>

  
  Hi

```

*Hint:* What kind of content belongs inside ?

**Answer:** The `` tag only accepts plain text, not other HTML tags. Remove the `` from inside the title. Correct version: `Hi`.

The title element is unusual — it only contains text, not other tags. Browsers do not render HTML tags inside title. Always use plain text in title.

### Q13. [Hard] Build a complete HTML page with all the following: DOCTYPE, html with lang, head containing charset, viewport, description, author, title, and body containing a section-header comment and an h1 with 'Complete Page'.

*Hint:* Include every meta tag and a comment in the body.

**Answer:** ```
<!DOCTYPE html>

  
  
  
  
  Complete Page

  <!-- Main content -->
  Complete Page

```

This is a full, production-ready HTML boilerplate with all the common meta tags. Every professional web page starts with something very close to this.

### Q14. [Hard] Why does this comment not work?

```
<!-- This is -- a bad -- comment -->
```

*Hint:* Something special about double dashes inside comments.

**Answer:** HTML comments cannot contain `--` (two dashes) inside them. Use single dashes or other symbols instead: `<!-- This is - a better - comment -->`

The HTML spec says comments cannot contain `--` (two consecutive dashes) anywhere except at the start and end. This can cause validation errors and strange parsing issues.

### Q15. [Hard] What does a browser do if it finds this broken HTML?

```
<!DOCTYPE html>

  Hello

```

*Hint:* The h1 is not closed.

**Answer:** The browser is very forgiving. It will likely close the `` automatically at the `` and still show 'Hello' as a heading. But this is invalid HTML and may cause issues in complex pages.

Modern browsers try hard to fix broken HTML automatically. However, you should always close your tags properly. Browsers may fix simple mistakes, but complex nesting errors can still cause layouts to break.

## Multiple Choice Questions

### Q1. [Easy] What should be the very first line of every HTML5 page?

**C is correct.** `<!DOCTYPE html>` must be the very first line. It tells the browser this is an HTML5 document.

### Q2. [Easy] Which tag contains the visible content of the page?

**B is correct.** The `` element contains everything the user sees — headings, paragraphs, images, and more.

### Q3. [Easy] Where does the  tag go?

**B is correct.** The `` tag goes inside ``. It sets the text shown on the browser tab.

### Q4. [Easy] Which character encoding should you use?

**C is correct.** UTF-8 is the universal encoding that supports every language and symbol, including Hindi, Tamil, emoji, and more.

### Q5. [Easy] Which is the correct syntax for an HTML comment?

**C is correct.** HTML comments use `<!-- -->`. The other syntaxes are from JavaScript, CSS, and Python.

### Q6. [Easy] Which tag wraps the head and body of an HTML page?

**C is correct.** The `` element is the root of every HTML page. It wraps both the head and the body.

### Q7. [Easy] What is metadata?

**B is correct.** Metadata means 'data about data'. In HTML, metadata (like title, charset, description) describes the page but is not displayed as visible content.

### Q8. [Medium] What does the viewport meta tag do?

**B is correct.** The viewport meta tag tells mobile browsers to display the page at the device's actual width, not zoomed out.

### Q9. [Medium] What does the lang attribute on  do?

**B is correct.** `lang="en"` tells browsers and screen readers the page is in English. It helps accessibility and search engines.

### Q10. [Medium] What is wrong with ?

**B is correct.** The correct value is `UTF-8` with a hyphen. While some browsers may accept `UTF8`, the standard is UTF-8.

### Q11. [Medium] Which of these is valid nesting?

**B is correct.** Tags must close in the reverse order they were opened. Opening `` means closing ``.

### Q12. [Medium] Why should you indent nested HTML?

**C is correct.** Indentation is purely for readability. HTML ignores whitespace, so indentation has no effect on how the page looks — but it makes your code much easier to understand.

### Q13. [Medium] Which meta tag helps search engines show a preview?

**C is correct.** `` provides the text shown in Google search results below the blue link.

### Q14. [Medium] Where should comments be used in HTML?

**B is correct.** Comments are for developers, not users. Never store private information in comments — anyone can view the page source.

### Q15. [Hard] Without the DOCTYPE, what happens?

**B is correct.** Without DOCTYPE, browsers use 'quirks mode' which emulates ancient buggy HTML rendering. This can break CSS layouts in unpredictable ways.

### Q16. [Hard] What is the correct order inside the head?

**B is correct.** The charset should come first so the browser knows how to decode the rest. Then viewport, then title. This order is considered best practice.

### Q17. [Hard] Can you put an  tag inside a  tag?

**C is correct.** The title element only accepts plain text. Other HTML tags inside it are either ignored or show as literal text in the browser tab.

### Q18. [Hard] What does a multi-line HTML comment look like?

**B is correct.** HTML comments can span multiple lines. Just put `<!--` at the start and `-->` at the end, and include any content between them.

### Q19. [Hard] Is HTML case-sensitive for tag names?

**C is correct.** HTML tags are case-insensitive — `` and `` both work. However, lowercase is the standard modern practice.

### Q20. [Hard] What happens if you put content directly inside  but outside both head and body?

**B is correct.** Browsers are forgiving. They usually move stray content into the body automatically. But this is invalid HTML and you should never rely on it.

## Coding Challenges

### Challenge 1. Write the Perfect Boilerplate

**Difficulty:** Easy

**Constraints:**

- Must include DOCTYPE, lang attribute, meta charset, meta viewport, title, and a single h1.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Clean Page</title>
</head>
<body>
  <h1>Clean and proper</h1>
</body>
</html>
```

This is the minimum valid HTML5 boilerplate. Memorise this structure — you will use it on every single HTML file you ever write.

### Challenge 2. Commented Sections

**Difficulty:** Easy

**Constraints:**

- Include DOCTYPE, proper head, and three h2 sections with comments.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Commented Page</title>
</head>
<body>
  <!-- Introduction -->
  <h2>Introduction</h2>
  <p>Hi, I am Ananya and I love coding.</p>

  <!-- Hobbies -->
  <h2>Hobbies</h2>
  <p>Reading, painting, and learning HTML.</p>

  <!-- Contact -->
  <h2>Contact</h2>
  <p>Email: ananya@example.com</p>
</body>
</html>
```

Comments like this help you navigate longer HTML files. They are invisible to users but make your code much easier to read and maintain.

### Challenge 3. Multilingual Ready Boilerplate

**Difficulty:** Medium

**Constraints:**

- Must use lang="hi" on html tag and UTF-8 charset to support Devanagari.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Namaste Duniya</title>
</head>
<body>
  <h1>Namaste Duniya</h1>
  <p>HTML mein Hindi aasan hai.</p>
</body>
</html>
```

Setting `lang="hi"` tells browsers and screen readers the page is in Hindi. UTF-8 charset supports Devanagari and other Indian scripts.

### Challenge 4. SEO Ready Page

**Difficulty:** Medium

**Constraints:**

- Include all SEO meta tags: charset, viewport, description, author, title.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Art portfolio of Priya Sharma featuring paintings, sketches, and digital art.">
  <meta name="author" content="Priya Sharma">
  <title>Priya's Art Portfolio</title>
</head>
<body>
  <h1>Welcome to my art portfolio</h1>
  <p>Explore my collection of paintings and sketches.</p>
</body>
</html>
```

The description meta tag appears in search engine results below the blue link. The author meta tag credits the creator. Both help SEO (Search Engine Optimisation).

### Challenge 5. Fix the Broken Boilerplate

**Difficulty:** Medium

**Constraints:**

- Fix DOCTYPE, lang, charset, title closing, and content placement. Also add viewport meta.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Test</title>
</head>
<body>
  <h1>Hello</h1>
</body>
</html>
```

Fixes: (1) DOCTYPE needs the exclamation mark, (2) lang attribute needs quotes, (3) charset should be UTF-8 with hyphen and in quotes, (4) title was missing its closing tag, (5) h1 was inside head — moved to body. Also added the missing viewport meta tag and closing .

### Challenge 6. Nested Structure Page

**Difficulty:** Hard

**Constraints:**

- Proper nesting and indentation required. Include full boilerplate.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Menu</title>
</head>
<body>
  <h1>Our Menu</h1>
  <ul>
    <li>
      Snacks
      <ul>
        <li>Samosa</li>
        <li>Vada Pav</li>
      </ul>
    </li>
    <li>
      Drinks
      <ul>
        <li>Masala Chai</li>
        <li>Mango Lassi</li>
      </ul>
    </li>
  </ul>
</body>
</html>
```

Nested lists use a `` inside an ``. The browser automatically indents the sub-list. Notice how each nesting level is indented by 2 spaces — this makes the code much easier to read.

### Challenge 7. Complete Blog Post Template

**Difficulty:** Hard

**Constraints:**

- Include DOCTYPE, head with charset, viewport, description, author, title, and body with commented header, content, footer sections.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="My first blog post about learning HTML from scratch.">
  <meta name="author" content="Rohan Gupta">
  <title>My First Blog Post</title>
</head>
<body>
  <!-- ===== HEADER ===== -->
  <h1>My First Blog Post</h1>
  <p>By Rohan Gupta</p>
  <hr>

  <!-- ===== CONTENT ===== -->
  <p>Learning HTML has been one of the best decisions I have made this year.</p>
  <p>The boilerplate looked intimidating at first, but now I can type it out without thinking.</p>

  <hr>
  <!-- ===== FOOTER ===== -->
  <p>Thanks for reading. See you in the next post.</p>
</body>
</html>
```

This is a real blog post template you could actually use. It has proper SEO meta tags, a clear structure with header/content/footer comments, and uses hr tags to visually separate sections.

### Challenge 8. Full SEO and Mobile Ready Home Page

**Difficulty:** Hard

**Constraints:**

- Must be SEO ready (description, proper title), mobile ready (viewport meta), and well-organized with section comments.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Home page of Vikram Singh, a young coder learning HTML, CSS, and JavaScript.">
  <meta name="author" content="Vikram Singh">
  <title>Vikram Singh - Home</title>
</head>
<body>
  <!-- ========== HEADER ========== -->
  <h1>Welcome to my site</h1>
  <p>Hi, I am Vikram, a 15-year-old from Pune who loves building websites.</p>

  <!-- ========== MAIN CONTENT ========== -->
  <p>This site is where I share my coding journey, projects, and thoughts about technology.</p>
  <p>Feel free to explore and reach out if you want to collaborate on something fun.</p>

  <!-- ========== FOOTER ========== -->
  <hr>
  <p>Made with love and plain HTML by Vikram Singh.</p>
</body>
</html>
```

This is a production-quality home page. It has every best practice: proper DOCTYPE, language attribute, charset, viewport, description for SEO, author credit, clear title, organised body with section comments, and a footer. This is exactly how professional web pages are structured.

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/html-structure-and-boilerplate/*
