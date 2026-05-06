---
title: "Semantic HTML Complete Guide - header, nav, main, article, footer | Modern Age Coders"
description: "Learn semantic HTML tags (header, nav, main, section, article, aside, footer, figure, time). Improve SEO, accessibility, and code clarity. 55 practice questions."
slug: semantic-html
canonical: https://learn.modernagecoders.com/resources/html-and-css/semantic-html/
category: "HTML and CSS"
keywords: ["semantic html", "html5 semantic tags", "header nav main", "article section aside", "html accessibility", "html seo", "figure figcaption", "div vs semantic"]
---
# Semantic HTML - header, nav, main, section, article, footer

**Difficulty:** Beginner  
**Reading time:** 22 min  
**Chapter:** 8  
**Practice questions:** 55

## What Is Semantic HTML?

**Semantic HTML** means using HTML tags that describe the *meaning* of your content, not just how it looks. When you write ``, you are telling the browser, the search engine, and the screen reader: "This is the header of my page." When you write ``, you are saying: "This is the navigation." When you write ``, you are saying: "This is a self-contained piece of content like a blog post."

Compare this to using only `` and `` everywhere. Those tags mean nothing. A page made entirely of divs is called **div soup** — a big pile of meaningless boxes. The browser has no idea what anything is. Neither does Google. Neither does a screen reader.

### Meaning Over Appearance

Here is the core idea: **HTML is about meaning, CSS is about appearance.** When you choose a tag, ask yourself: "What is this content?" — not "How should it look?" A heading is an `` because it IS a heading, not because you want big bold text. If you want big bold text somewhere that is NOT a heading, use CSS on a ``.

## Why Should You Use Semantic HTML?

### 1. SEO (Search Engine Optimization)

Google's crawler reads your HTML to understand what the page is about. When it sees ``, it knows this is important content. When it sees ``, it knows to follow those links. When it sees `` with an `` inside, it knows that is the main title. Semantic tags give Google clear signals about the structure of your page, which helps your site rank higher.

### 2. Accessibility (Screen Readers)

About 1 in 10 people worldwide have some form of disability. Many blind or low-vision users browse the web using **screen readers** — software that reads the page aloud. Screen readers use HTML tags to navigate. A user can jump straight to the `` content, skipping the header and nav. They can list all `` headings to get an overview. None of this works with div soup.

### 3. Maintainability

Six months from now, when you come back to edit your code, semantic tags are much easier to understand. `` tells you immediately what you are looking at. `` tells you nothing — you have to read the CSS and guess.

### 4. Built-in Styling and Behavior

Browsers give many semantic tags default styles. Search engines use `` to find links automatically. Browsers let users jump to `` with keyboard shortcuts. Using the right tag unlocks free features.

## Detailed Explanation

Let us go through each major semantic tag and learn when to use it.

### 

The header of a page or section. A `` usually contains a logo, the site name, and sometimes the main navigation. You can have multiple `` tags on a page — one for the whole page, and one inside each `` for the article title and author.

```

  

# Modern Age Coders

  

Learn to code in a modern way

```

### 

A group of major navigation links. Put your main menu here. Not every list of links is a nav — only the primary navigation. The footer links at the bottom of a page do NOT need to be inside a `` (unless they are the main navigation).

```

  

- [Home](/)
- [About](/about)
- [Contact](/contact)

```

### 

The main content of the page — the unique stuff this page exists to show. There should be **exactly one** `` per page. It should NOT contain the header, nav, sidebar, or footer — only the main content.

```

  ...
  ...

```

### 

A themed group of content — a section of the page. Usually has a heading. Use it when you have clearly distinct parts of a page, like "Features", "Pricing", "Testimonials". Each section should make sense as its own chunk.

```

  

## Our Features

  

...

```

### 

A self-contained piece of content that could stand alone. A blog post, a news article, a product card, a forum comment, a tweet. If you could take it out of the page and put it on another page and it would still make sense, it is an ``.

```

  

## Why Learn Coding

  

By Priya, March 2026

  

Coding is the superpower...

```

#### section vs article

A common question: what is the difference? Think of it this way: **article = standalone content** (makes sense on its own). **section = a thematic group within something** (only makes sense in context). A blog post is an article. The Features part of a landing page is a section.

### 

Content that is related to the main content but not part of it — like a sidebar, a pull quote, or a related articles list. If removing it would not hurt understanding of the main content, it is an aside.

```

  

### Related Posts

  

- [HTML Forms Guide](#)

```

### 

The footer of a page or section. Usually contains copyright info, links, contact details, and so on. Like ``, you can have multiple footers — one for the whole page and one inside each article (showing the author or publish date).

```

  

&copy; 2026 Modern Age Coders. All rights reserved.

```

###  and 

Used for images, diagrams, code blocks, or other media that have a caption. The `` wraps the media, and `` gives it a caption.

```

  
  Figure 1: Our solar system with 8 planets.

```

### 

Marks up a date or time in a machine-readable way. The `datetime` attribute holds the ISO format, and the visible text can be anything.

```
Published on 11 April 2026.
```

### 

Contact information for the nearest `` or the whole page. Not for any address — only contact info. Browsers usually italicize it.

```

  Written by [Rohan](mailto:rohan@example.com).

  Visit us at: 123 Code Street, Bangalore.

```

### Semantic vs Div Soup

Here is the same page written two ways. First the bad way (div soup):

```

  Modern Age Coders

  ...

  ...

...

```

Now the semantic way:

```

  

# Modern Age Coders

  ...

  ...

...
```

Same layout, same CSS, but the second one is meaningful. Google reads it. Screen readers read it. You read it. Everyone wins.

## Code Examples

### Full Semantic Page Layout

```html
<!DOCTYPE html>
<html>
<head>
  <title>Modern Age Coders Blog</title>
  <style>
    body { font-family: Arial; margin: 0; }
    header, footer { background: #222; color: white; padding: 20px; }
    nav ul { display: flex; gap: 20px; list-style: none; padding: 0; }
    nav a { color: white; text-decoration: none; }
    main { padding: 30px; max-width: 800px; margin: auto; }
    article { background: #f8f8f8; padding: 20px; margin-bottom: 15px; border-radius: 8px; }
    aside { background: #fff3b0; padding: 15px; border-radius: 8px; }
  </style>
</head>
<body>
  <header>
    <h1>Modern Age Coders</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h2>Why Every Kid Should Learn HTML</h2>
        <p>By Priya Sharma - <time datetime="2026-04-11">11 April 2026</time></p>
      </header>
      <p>HTML is the skeleton of the web. Every website, every blog, every app you use starts with HTML. Learning it early gives kids a massive head start.</p>
      <footer>
        <p>Tags: HTML, kids, learning</p>
      </footer>
    </article>

    <aside>
      <h3>Related Posts</h3>
      <ul>
        <li><a href="#">Getting Started with CSS</a></li>
        <li><a href="#">HTML Forms for Beginners</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026 Modern Age Coders. All rights reserved.</p>
  </footer>
</body>
</html>
```

A complete semantic page with every major tag: `` at the top with the logo and nav, `` holding the content, `` for the blog post (with its own inner header and footer), `` for related posts, and the page ``. Save as `blog.html` and open it.

**Output:**

```
A styled blog page with a dark header, navigation, a main content area containing an article with author info, a sidebar with related posts, and a footer.
```

### Semantic News Article Layout

```html
<!DOCTYPE html>
<html>
<head>
  <title>Tech News</title>
  <style>
    body { font-family: Georgia, serif; max-width: 700px; margin: 30px auto; padding: 20px; }
    header h1 { margin-bottom: 5px; }
    time { color: #666; }
    figure { margin: 20px 0; }
    figure img { width: 100%; border-radius: 8px; }
    figcaption { text-align: center; font-style: italic; color: #555; }
    address { font-style: normal; border-top: 1px solid #ddd; padding-top: 15px; margin-top: 20px; }
  </style>
</head>
<body>
  <article>
    <header>
      <h1>India Launches New Technology Mission</h1>
      <p>Published on <time datetime="2026-04-11T09:30">11 April 2026 at 9:30 AM</time></p>
    </header>

    <p>India has announced a new mission to boost technology education across schools. The mission will train over 100,000 teachers in coding and robotics by 2028.</p>

    <figure>
      <img src="https://via.placeholder.com/600x300" alt="Students learning coding in a classroom">
      <figcaption>Students at Delhi Public School learning Python during the launch event.</figcaption>
    </figure>

    <h2>What the Mission Covers</h2>
    <p>The program focuses on three areas: teacher training, free curriculum, and partnerships with tech companies. Over 500 schools have already signed up.</p>

    <address>
      Reported by Ananya Kumar<br>
      Email: <a href="mailto:ananya@news.com">ananya@news.com</a>
    </address>
  </article>
</body>
</html>
```

A semantic news article. The article contains an inner header with the title and publish time. The `` tag has a machine-readable datetime. A `` wraps the image with a caption. The `` at the end holds the reporter's contact info. Open in your browser to see it.

**Output:**

```
A styled news article with title, publish time, a featured image with caption, body text, and reporter contact info at the bottom.
```

### Sections vs Articles on a Landing Page

```html
<!DOCTYPE html>
<html>
<head>
  <title>Landing Page</title>
  <style>
    body { font-family: Arial; margin: 0; }
    section { padding: 40px 20px; }
    section:nth-child(even) { background: #f5f5f5; }
    .features { display: flex; gap: 20px; flex-wrap: wrap; }
    article { flex: 1; min-width: 200px; background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
  </style>
</head>
<body>
  <main>
    <section>
      <h2>About Us</h2>
      <p>Modern Age Coders teaches kids and teens to code.</p>
    </section>

    <section>
      <h2>Our Features</h2>
      <div class="features">
        <article>
          <h3>Live Classes</h3>
          <p>Small group lessons with real teachers.</p>
        </article>
        <article>
          <h3>Fun Projects</h3>
          <p>Build games, websites, and apps.</p>
        </article>
        <article>
          <h3>Certificates</h3>
          <p>Earn a certificate after each course.</p>
        </article>
      </div>
    </section>

    <section>
      <h2>Pricing</h2>
      <p>Plans start at Rs 999 per month.</p>
    </section>
  </main>
</body>
</html>
```

This demonstrates the section vs article difference. The page has 3 ``s — About, Features, Pricing. These are thematic parts of the page. Inside the Features section, each feature is an `` because each one could stand alone as a mini-card. Sections group related things; articles are standalone pieces.

**Output:**

```
A landing page with 3 alternating-background sections. The Features section contains 3 card-style articles side by side.
```

### Using aside for a Sidebar

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blog with Sidebar</title>
  <style>
    body { font-family: Arial; max-width: 900px; margin: 20px auto; }
    .layout { display: flex; gap: 20px; }
    main { flex: 2; }
    aside { flex: 1; background: #f0f0f0; padding: 15px; border-radius: 8px; height: fit-content; }
  </style>
</head>
<body>
  <div class="layout">
    <main>
      <article>
        <h1>Learning to Code as a Kid</h1>
        <p>When I was 10, I started learning to code using HTML. It was the best decision of my life. I built my first website within a week, and I was hooked.</p>
        <p>Today, six years later, I am building my own apps and websites. Here is what I wish someone had told me when I started...</p>
      </article>
    </main>

    <aside>
      <h3>About the Author</h3>
      <p>Aarav is a 16-year-old web developer from Mumbai. He loves building games and teaching his friends to code.</p>

      <h3>Popular Posts</h3>
      <ul>
        <li><a href="#">My First Website</a></li>
        <li><a href="#">Learning CSS</a></li>
        <li><a href="#">JavaScript Tips</a></li>
      </ul>
    </aside>
  </div>
</body>
</html>
```

The `` sits beside the main content. It holds an author bio and popular post links — related but not essential. If you removed the aside, the article would still make perfect sense. That is the test: if removing it breaks nothing, it is an aside.

**Output:**

```
A two-column layout with a blog article on the left (wider) and a grey sidebar on the right with author info and popular posts.
```

### Multiple Articles in Main with Inner Headers and Footers

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blog Home</title>
  <style>
    body { font-family: Arial; max-width: 700px; margin: auto; padding: 20px; }
    article { border: 1px solid #ddd; padding: 20px; margin-bottom: 20px; border-radius: 8px; }
    article header { border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 15px; }
    article footer { border-top: 1px solid #eee; padding-top: 10px; margin-top: 15px; font-size: 14px; color: #666; }
    time { color: #999; }
  </style>
</head>
<body>
  <h1>Modern Age Coders Blog</h1>
  <main>
    <article>
      <header>
        <h2>Why HTML Matters</h2>
        <p>By Aarav - <time datetime="2026-04-10">10 April 2026</time></p>
      </header>
      <p>HTML is the foundation of every website. Without it, there is no web.</p>
      <footer>Tags: html, basics, beginners</footer>
    </article>

    <article>
      <header>
        <h2>Getting Started with CSS</h2>
        <p>By Priya - <time datetime="2026-04-08">8 April 2026</time></p>
      </header>
      <p>Once you know HTML, CSS lets you make it beautiful. Colors, fonts, layouts — all with CSS.</p>
      <footer>Tags: css, design, beginners</footer>
    </article>

    <article>
      <header>
        <h2>Your First JavaScript Program</h2>
        <p>By Rohan - <time datetime="2026-04-05">5 April 2026</time></p>
      </header>
      <p>Ready to add interactivity? JavaScript is the way. Start with a simple alert() and grow from there.</p>
      <footer>Tags: javascript, interactive, beginners</footer>
    </article>
  </main>
</body>
</html>
```

This shows that every `` can have its own `` and ``. The article header holds the title, author, and date. The article footer holds tags. The page itself also has a main h1. Each article is self-contained — you could copy one and paste it on another page and it would still make sense.

**Output:**

```
Three card-style blog posts stacked vertically, each with a title, author, date, body, and tags section.
```

### figure and figcaption for Diagrams

```html
<!DOCTYPE html>
<html>
<head>
  <title>Science Article</title>
  <style>
    body { font-family: Arial; max-width: 700px; margin: 20px auto; }
    figure { text-align: center; margin: 20px 0; }
    figure img { max-width: 100%; border-radius: 8px; }
    figcaption { font-style: italic; color: #666; margin-top: 8px; }
  </style>
</head>
<body>
  <article>
    <h1>The Water Cycle</h1>
    <p>The water cycle describes how water moves around the Earth through evaporation, condensation, and precipitation.</p>

    <figure>
      <img src="https://via.placeholder.com/600x400" alt="A diagram showing the water cycle">
      <figcaption>Figure 1: The water cycle from ocean to cloud to rain.</figcaption>
    </figure>

    <p>This continuous cycle is what keeps fresh water available on our planet.</p>

    <figure>
      <pre><code>console.log('Hello, water!');</code></pre>
      <figcaption>Figure 2: A simple JavaScript example (unrelated, just showing figure can hold code).</figcaption>
    </figure>
  </article>
</body>
</html>
```

`` is for media content (images, code, diagrams) that have a caption. The `` must be the first or last child of the figure. Notice that figures work for code blocks too — not just images.

**Output:**

```
A science article with two figures: one image with a caption, and one code block with a caption.
```

## Common Mistakes

### Using div for Everything (Div Soup)

**Wrong:**

```
<div class="header">
  <div class="logo">My Site</div>
  <div class="nav">
    <div class="link">Home</div>
    <div class="link">About</div>
  </div>
</div>
<div class="content">
  <div class="post">...</div>
</div>
```

No HTML error, but bad for SEO, accessibility, and maintenance.

**Correct:**

```
<header>
  <h1>My Site</h1>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>...</article>
</main>
```

Using only divs tells the browser nothing about the meaning of your content. Semantic tags help search engines, screen readers, and future developers understand the page. The layout is exactly the same with CSS, but the meaning is completely different.

### Multiple main Tags on One Page

**Wrong:**

```
<main>
  <h1>Welcome</h1>
</main>
<main>
  <h1>Another Section</h1>
</main>
```

HTML spec says there should be only one  per page.

**Correct:**

```
<main>
  <section>
    <h1>Welcome</h1>
  </section>
  <section>
    <h2>Another Section</h2>
  </section>
</main>
```

There should be exactly ONE `` per page — it represents the unique main content. For grouping internal content, use ``.

### Putting Header and Footer Inside main

**Wrong:**

```
<main>
  <header>Site Header</header>
  <article>Content</article>
  <footer>Site Footer</footer>
</main>
```

No error, but structurally wrong. The site header and footer should be outside main.

**Correct:**

```
<header>Site Header</header>
<main>
  <article>Content</article>
</main>
<footer>Site Footer</footer>
```

The page's main header and footer are NOT part of the main content — they are navigation and site-wide elements. Only put the unique page content inside ``. The header and footer sit as siblings of main, not inside it. (An `` can have its own inner header and footer — that is fine.)

### Using section Without a Heading

**Wrong:**

```
<section>
  <p>Some text here</p>
  <p>More text</p>
</section>
```

Not invalid HTML, but  should almost always have a heading.

**Correct:**

```
<section>
  <h2>About Us</h2>
  <p>Some text here</p>
  <p>More text</p>
</section>
```

A `` represents a thematic group — it should have a heading that names the theme. If there is no meaningful heading, you probably want a `` instead.

### Using figure for Every Image

**Wrong:**

```
<figure>
  <img src="logo.png" alt="Logo">
</figure>
```

Not wrong per se, but figure is meant for content with a caption. A logo does not need figure.

**Correct:**

```
<img src="logo.png" alt="Logo">
```

`` is for content that is referenced from the main flow — like an illustration in an article, a diagram, or a code example. Small decorative images like logos and icons do not need figure. Use figure when the image is meaningful content, not decoration.

## Summary

- Semantic HTML uses tags that describe the MEANING of content, not just how it looks. HTML is for meaning, CSS is for appearance.
- is the top of a page or section. Usually holds the logo and navigation. You can have multiple headers (one per page, one per article).
- wraps the main navigation links of a site. Not every link group is a nav — only the primary navigation.
- holds the unique main content of the page. There should be exactly ONE main per page, and it should NOT contain site header, nav, or footer.
- is a thematic group of content, usually with a heading. Use it to divide a page into clear parts like About, Features, Pricing.
- is standalone content that makes sense on its own — a blog post, news article, product card, or comment.
- is related but non-essential content, like a sidebar or pull quote. Removing it should not hurt the main content.
- is the footer of a page or section. Contains copyright, links, contact info. You can have multiple footers (page, article).
- with  is for images, diagrams, or code that have captions.  marks up dates.  holds contact info.
- Semantic HTML improves SEO (Google reads the structure), accessibility (screen readers navigate by tag), and maintainability (easier to read and edit).

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/html-and-css/semantic-html/*
*Practice questions: https://learn.modernagecoders.com/resources/html-and-css/semantic-html/practice/*
