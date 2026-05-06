---
title: "Introduction to HTML - What Is HTML and How To Build Your First Web Page | Modern Age Coders"
description: "Learn what HTML is, how browsers read HTML tags and elements, and build your first web page from scratch. Includes 58 hands-on practice questions for beginners."
slug: introduction-to-html
canonical: https://learn.modernagecoders.com/resources/html-and-css/introduction-to-html
category: "HTML and CSS"
keywords: ["what is html", "html introduction", "html for beginners", "first html page", "html tags", "html elements", "learn html from scratch", "html tutorial for teens", "hypertext markup language"]
---
# Introduction to HTML - The Language of the Web

**Difficulty:** Beginner  
**Reading time:** 20 min  
**Chapter:** 1  
**Practice questions:** 58

## What Is HTML?

**HTML** stands for **HyperText Markup Language**. It is the language that every web page in the world is built with. Open any website — Google, YouTube, Wikipedia, your school website — and behind the pretty pictures and buttons, there is HTML telling the browser what to show.

The word *HyperText* just means text with links (you can click a word and jump to another page). The word *Markup* means we mark the text with special labels called **tags** to tell the browser what each piece of content is — this is a heading, this is a paragraph, this is an image, this is a link.

### HTML Is Not a Programming Language

This surprises many beginners. HTML is a **markup language**, not a programming language. It does not do math, make decisions, or loop through things. It only *describes* the structure of a page. Think of HTML as the labels on a box: it tells you what is inside, but it does not actually move the box around.

### The Three Layers of the Web

LayerRoleAnalogy`HTML`Structure — the content and its meaningThe skeleton (bones) of a body`CSS`Style — how things lookThe skin, hair, and clothes`JavaScript`Behavior — making things move and reactThe movement and muscles

Every modern web page uses all three. HTML is where you start. Once you know HTML, CSS and JavaScript become much easier.

## Why Should You Learn HTML?

HTML is the foundation of the entire web. Here is why learning HTML first is the smartest move a young coder can make.

### 1. It Is Everywhere

Every single web page you visit — from your favourite game site to a news article — is built with HTML. If you can read HTML, you can peek inside any website and understand how it is built. Right-click any web page and choose **View Page Source** to see the HTML that powers it.

### 2. It Is Super Beginner Friendly

HTML does not need to be installed. You do not need a compiler, no strange setup. You only need two things: a text editor (even Notepad works) and a web browser (Chrome, Firefox, Edge). Save a file as `.html`, double-click it, and the browser shows your creation. That is it.

### 3. You See Your Work Instantly

Type a tag, save the file, refresh the browser — boom, you see the result. No waiting, no errors like in other languages. This fast feedback loop makes HTML perfect for learners aged 10-18 who want to build things and see them come alive.

### 4. It Is the Gateway to Everything Else

Want to build websites? Start with HTML. Want to learn React, Vue, or any modern framework? They all build HTML under the hood. Want to make your own portfolio, blog, or game site? HTML is step one.

### 5. Creative Power

With just HTML (and a little CSS later), you can build a personal profile page, a mini recipe book, a project showcase, or a fan page for your favourite cricket team. There are no limits on what you can create.

## Detailed Explanation

### A Tiny Bit of History

HTML was invented by **Tim Berners-Lee** in 1991 at CERN (a giant physics lab in Europe). He wanted scientists around the world to share documents that linked to each other. He created three things that became the World Wide Web: the first web server, the first web browser, and HTML. The very first web page ever made is still online — it is just plain text with a few links.

Over the years HTML has grown. The version we use today is **HTML5**, released in 2014. HTML5 added support for audio, video, canvas drawings, and much more. When you write HTML today, you are writing HTML5.

### Tags and Elements

HTML uses **tags** to label content. A tag looks like this: ``. Most tags come in pairs — an opening tag and a closing tag. The closing tag has a forward slash:

- `This is a paragraph.`
- `This is a heading.`

The opening tag, the closing tag, and everything in between together form an **element**. So `Hello` is one element — a paragraph element containing the word Hello.

### Self-Closing (Void) Tags

Some tags do not have content inside them, so they do not need a closing tag. These are called **void** or **self-closing** tags. Examples:

- `` — shows an image
- `` — a line break
- `` — a horizontal line
- `` — an input box

### Attributes

Tags can have **attributes** — extra information written inside the opening tag. Attributes come in `name="value"` pairs. For example:

`Go to Google`

Here `` is the anchor (link) tag and `href` is an attribute that tells the browser where to go when clicked. Attributes work like settings on a tag — they customise how it behaves.

### How the Browser Reads HTML

When you open an HTML file, the browser reads it from top to bottom and builds a tree of elements called the **DOM** (Document Object Model). The browser then paints the DOM onto the screen as the web page you see. This all happens in milliseconds.

### How to Create Your First HTML File

Follow these steps to build your first web page:

1. Open any text editor (Notepad on Windows, TextEdit on Mac, or VS Code if you have it)
2. Type the HTML code from Example 1 below
3. Save the file as `index.html` (make sure it ends with `.html`, not `.txt`)
4. Double-click the file — your default browser opens and shows your page
5. To edit, open the file in your text editor, change something, save, and refresh the browser

Congratulations — you are now a web developer. Seriously. Every professional started right here.

### HTML Is Forgiving

Unlike programming languages that crash on the smallest mistake, HTML is very forgiving. If you misspell a tag, the browser usually just ignores it. If you forget a closing tag, the browser often fixes it for you. This makes HTML perfect for learning — you will not get scary error messages when you are just starting out.

## Code Examples

### Your Very First HTML Page

```html
<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>
  <h1>Hello, I am Aarav</h1>
  <p>Welcome to my very first web page.</p>
  <p>I am learning HTML and it is amazing.</p>
</body>
</html>
```

Save this as `index.html` and double-click it. The browser will show a big heading and two paragraphs. `<!DOCTYPE html>` tells the browser this is HTML5. `` wraps everything. `` holds information about the page (like the title shown on the browser tab). `` holds the visible content. `` is a big heading and `` is a paragraph.

**Output:**

```
A page with a big heading 'Hello, I am Aarav' and two paragraphs below it.
```

### A Profile Card With Multiple Elements

```html
<!DOCTYPE html>
<html>
<head>
  <title>Priya's Profile</title>
</head>
<body>
  <h1>Priya Sharma</h1>
  <h2>Class 9 Student</h2>
  <p>I love coding, mathematics, and painting.</p>
  <h3>My Hobbies</h3>
  <p>Reading mystery books, solving puzzles, and learning HTML.</p>
  <h3>My Goal</h3>
  <p>To build a website about my favourite science experiments.</p>
</body>
</html>
```

This example uses three different heading levels (`h1`, `h2`, `h3`) to show a hierarchy. The biggest heading is `h1` (the most important), `h2` is a sub-heading, and `h3` is smaller. Paragraphs give details under each heading. Notice how elements are nested neatly inside ``.

**Output:**

```
A web page titled 'Priya's Profile' with a big name heading, a subtitle, and sections for hobbies and goals.
```

### Using Self-Closing Tags: Image and Line Break

```html
<!DOCTYPE html>
<html>
<head>
  <title>Self-Closing Tags Demo</title>
</head>
<body>
  <h1>My Favourite Animal</h1>
  <p>I love dogs because they are loyal and playful.</p>
  <img src="https://placedog.net/400/300" alt="A cute dog">
  <hr>
  <p>First line of text.<br>Second line after a line break.</p>
</body>
</html>
```

This example shows three self-closing tags. `` displays an image — the `src` attribute is the image address and `alt` is text shown if the image fails to load (also read by screen readers). `` draws a horizontal line across the page. `` creates a line break inside a paragraph. None of these tags have a closing tag because they do not wrap content.

**Output:**

```
A heading, a paragraph, an image of a dog, a horizontal line, and then a paragraph that splits into two lines.
```

### Links With Attributes

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Favourite Sites</title>
</head>
<body>
  <h1>Rohan's Favourite Websites</h1>
  <p>Here are some sites I visit every day:</p>
  <p><a href="https://www.google.com">Visit Google</a></p>
  <p><a href="https://www.wikipedia.org">Visit Wikipedia</a></p>
  <p><a href="https://learn.modernagecoders.com">Modern Age Coders</a></p>
</body>
</html>
```

The `` (anchor) tag creates a clickable link. The `href` attribute is the destination. The text between the opening and closing tags is what the user sees and clicks on. This example has three links inside paragraphs. Click any of them to go to that website.

**Output:**

```
A heading and three blue underlined links that users can click to visit the sites.
```

### Lists: Ordered and Unordered

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Lists</title>
</head>
<body>
  <h1>Ananya's Weekend Plan</h1>
  <h2>Things To Do (in order)</h2>
  <ol>
    <li>Finish homework</li>
    <li>Practice HTML</li>
    <li>Go cycling with friends</li>
    <li>Watch a movie</li>
  </ol>
  <h2>Snacks I Love (any order)</h2>
  <ul>
    <li>Samosa</li>
    <li>Mango</li>
    <li>Chocolate</li>
    <li>Popcorn</li>
  </ul>
</body>
</html>
```

HTML has two kinds of lists. `` is an ordered (numbered) list — browsers automatically number each item 1, 2, 3. `` is an unordered (bullet) list. Inside both, each item goes inside `` (list item) tags. This shows how HTML tags can be nested neatly inside each other.

**Output:**

```
A numbered list of weekend tasks and a bulleted list of favourite snacks.
```

### Mini Fan Page — Everything Together

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Cricket Page</title>
</head>
<body>
  <h1>My Favourite Cricketer</h1>
  <img src="https://via.placeholder.com/300x200" alt="Cricket player">
  <h2>Why I Admire Him</h2>
  <p>He is calm under pressure and never gives up, even when the team is losing.</p>
  <h2>His Top Achievements</h2>
  <ul>
    <li>Scored a century in the World Cup final</li>
    <li>Broke the record for most runs in a season</li>
    <li>Led his team to the championship</li>
  </ul>
  <hr>
  <p>Learn more on <a href="https://en.wikipedia.org">Wikipedia</a>.</p>
</body>
</html>
```

This example combines everything you learned so far: headings, paragraphs, an image, a list, a horizontal line, and a link. This is a real mini web page you can actually build in five minutes. Save it, open it, and show your family — you just made your first fan page with only HTML.

**Output:**

```
A complete fan page with a heading, image, subheadings, a bulleted list of achievements, a line, and a link at the bottom.
```

## Common Mistakes

### Forgetting the Closing Tag

**Wrong:**

```
<p>This paragraph is missing its closing tag.
<p>This is another paragraph.
```

The browser tries to guess where the first paragraph ends, which can cause strange layouts, especially inside lists or tables.

**Correct:**

```
<p>This paragraph has a proper closing tag.</p>
<p>This is another paragraph.</p>
```

Most HTML elements need both an opening tag and a closing tag. The closing tag has a forward slash: ``. Without it, the browser does not know where the element ends. While modern browsers often guess correctly for simple tags, you should always close your tags properly.

### Using Wrong Case for Attributes in Quotes

**Wrong:**

```
<img src=cat.jpg alt=My cat>
```

The alt text becomes only 'My' because the space ends the value. The browser gets confused.

**Correct:**

```
<img src="cat.jpg" alt="My cat">
```

Attribute values that contain spaces or special characters must be wrapped in quotes. Without quotes, the browser thinks the first word is the value and the rest are extra attributes. Always put quotes around attribute values — it is a simple habit that prevents many bugs.

### Writing Content Outside the Body Tag

**Wrong:**

```
<!DOCTYPE html>
<html>
<head>
  <h1>My Page</h1>
</head>
<body>
</body>
</html>
```

The heading might still show, but it is incorrect HTML and will cause problems with CSS, JavaScript, and accessibility tools later.

**Correct:**

```
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>My Page</h1>
</body>
</html>
```

All visible content — headings, paragraphs, images, links, lists — must go inside ``, not inside ``. The `` is only for metadata like the page title, character encoding, and links to CSS files. Visible content in the head section is a common beginner mistake.

### Misspelling Tag Names

**Wrong:**

```
<hedading>Welcome</hedading>
<paragarph>This is text.</paragarph>
```

The browser does not recognise `` or ``, so it treats them as plain unknown text with no styling.

**Correct:**

```
<h1>Welcome</h1>
<p>This is text.</p>
```

HTML has a fixed set of valid tag names. The most common mistakes are typos like `hedading` instead of `heading` (or actually `h1`), `paragarph` instead of `p`, and `imge` instead of `img`. Always double-check spelling. Valid heading tags are `h1`, `h2`, `h3`, `h4`, `h5`, `h6` — and the paragraph tag is just `p`.

### Saving File Without the .html Extension

**Wrong:**

```
File saved as: mypage.txt
(This contains valid HTML code)
```

When you double-click the file, it opens in a text editor instead of the browser, and HTML tags are shown as plain text.

**Correct:**

```
File saved as: mypage.html
```

The file extension tells the computer what kind of file it is. A browser only opens files ending with `.html` or `.htm`. On Windows, if File Explorer hides extensions, turn them on in View settings. On Mac, make sure TextEdit is in plain text mode before saving.

## Summary

- HTML stands for HyperText Markup Language and is the foundation of every web page on the internet.
- HTML is a markup language, not a programming language — it describes structure and content but does not make decisions or calculations.
- The web uses three layers: HTML for structure, CSS for style, and JavaScript for behavior. Together they make modern web pages.
- Tim Berners-Lee invented HTML in 1991. The version used today is HTML5, released in 2014.
- HTML uses tags to label content. Most tags come in pairs: an opening tag like  and a closing tag like 

. Together with the content inside, they form an element.
- Some tags are self-closing and have no content inside them, like , 
, , and . These do not need a closing tag.
- Attributes add extra information to tags. They look like name="value" pairs, for example href="https://google.com" on an anchor tag.
- To create a web page, write HTML in any text editor, save with a .html extension, and double-click to open in a browser.
- Every HTML file should have a <!DOCTYPE html> at the top and an  element containing a  (metadata) and a  (visible content).
- HTML is forgiving — small mistakes usually do not crash the page, which makes it perfect for beginners to experiment and learn by doing.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/html-and-css/introduction-to-html/*
*Practice questions: https://learn.modernagecoders.com/resources/html-and-css/introduction-to-html/practice/*
