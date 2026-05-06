---
title: "HTML Links and Navigation - Anchor Tag, href, target, Internal and External Links | Modern Age Coders"
description: "Master HTML links: anchor tag, internal and external URLs, target blank, anchor navigation, mailto, tel, and download attributes. 57 hands-on practice questions."
slug: links-and-navigation
canonical: https://learn.modernagecoders.com/resources/html-and-css/links-and-navigation
category: "HTML and CSS"
keywords: ["html links", "anchor tag", "href attribute", "target blank", "internal links", "external links", "mailto", "tel", "anchor navigation", "html navigation"]
---
# Links and Navigation - Connecting the Web Together

**Difficulty:** Beginner  
**Reading time:** 22 min  
**Chapter:** 4  
**Practice questions:** 57

## What Are HTML Links?

Links are what make the web a **web**. Without them, the internet would just be a bunch of disconnected pages floating alone. Links are the threads that connect every page to every other page. Click a link and you teleport to another page, another website, another continent, or even back to the same page at a different section.

Every link in HTML is made with the `` tag (the 'anchor' tag). The `href` attribute inside it tells the browser where to go when the user clicks.

```
[Go to Google](https://www.google.com)
```

This is the simplest kind of link. The text between the opening and closing tags is what the user sees and clicks on.

### Why 'Anchor'?

The tag is called 'anchor' because in the very first version of the web, links were used to 'anchor' you to a specific place in a document. Over time, they became the primary way to jump between pages. But the name stuck, so we still call it the anchor tag.

## Why Learn Links Properly?

### 1. Navigation Is the Backbone of the Web

Every website has a menu, a footer, and buttons that take you somewhere. All of these are links. Without links, a website would be one long scrolling page with no way to get around.

### 2. Linking to Other Pages Is Powerful

You can send users to any web page in the world with a single link. Share your favourite YouTube video, your project on GitHub, or your photo on Instagram — all with one `` tag.

### 3. SEO Loves Good Links

Google uses links to understand the relationship between pages. If many websites link to your page, Google treats your page as important. Internal links between your own pages also help Google crawl your site.

### 4. Email and Phone Links

You can make email addresses and phone numbers clickable. On a phone, clicking a tel link dials the number. Clicking an email link opens the user's email app with the address pre-filled. Super handy for contact pages.

### 5. Anchor Links for Long Pages

If your page is long (like a FAQ or a tutorial), you can link to specific sections. Users click a table of contents link and jump directly to that section without scrolling. This is how Wikipedia's 'Contents' box works.

### 6. Professional Habits

Knowing when to use `target="_blank"`, when to add `rel="noopener noreferrer"`, and how to structure navigation menus are basic skills every web developer needs. Get them right from day one.

## Detailed Explanation

### The Basic Anchor Tag

A link has two parts: the `` tag with an `href` attribute, and the text (or other content) between the opening and closing tags.

```
[CLICKABLE_TEXT_HERE](URL_HERE)
```

Examples:

- `Google`
- `About Us`
- `Back to top`

### Internal Links (Relative Paths)

An **internal link** goes to another page within the same website. You use a **relative path** — a path relative to the current HTML file.

PathMeaning`about.html`A file in the same folder`./about.html`Same thing (explicit 'same folder')`../index.html`Go up one folder, then find index.html`pages/contact.html`Go into 'pages' folder, find contact.html`../../home.html`Go up two folders, find home.html

### External Links (Absolute URLs)

An **external link** goes to another website. You use a complete URL starting with `https://` or `http://`.

```
[Wikipedia](https://www.wikipedia.org)
```

Always prefer `https://` over `http://` — it is the secure version.

### target="_blank" — Opening Links in a New Tab

By default, clicking a link replaces the current page. To open the link in a new browser tab (so users can come back to your page), use `target="_blank"`:

```
[Google](https://www.google.com)
```

However, when you use `target="_blank"`, there is a security and performance issue. The new tab gets access to the opener tab through the `window.opener` object, and some browsers may tie both tabs to the same process. To fix this, always add `rel="noopener noreferrer"`:

```
[Google](https://www.google.com)
```

**noopener** — prevents the new page from using `window.opener` to control the original page.
**noreferrer** — does not send the referring URL to the new page (adds extra privacy).

### Anchor Links (Same-Page Navigation)

You can link to a specific section within the same page using an ID. First, give the destination element an `id`:

```

## Chapter 3

```

Then link to it with `#` followed by the ID:

```
[Go to Chapter 3](#chapter-3)
```

When clicked, the browser scrolls down to that heading. You can also link to an ID on a different page with `page.html#chapter-3`.

### mailto: Links

A `mailto:` link opens the user's default email app with the address pre-filled:

```
[Email Priya](mailto:priya@example.com)
```

You can even pre-fill the subject and body:

```
[Email Priya](mailto:priya@example.com?subject=Hello&body=Hi%20Priya)
```

(Note: spaces in the URL need to be encoded as `%20`.)

### tel: Links

A `tel:` link opens the phone dialler on mobile devices (on desktop it may not do much):

```
[Call Us](tel:+919876543210)
```

Always include the country code starting with a plus sign. This makes the link work from any country.

### The download Attribute

Adding the `download` attribute to a link makes the browser download the file instead of opening it:

```
[Download Resume](resume.pdf)
```

You can also rename the downloaded file:

```
[Download](resume.pdf)
```

### The title Attribute

The `title` attribute creates a tooltip that shows when users hover over the link:

```
[About](about.html)
```

Do not rely on this for important information — mobile users cannot see tooltips.

### Building a Navigation Menu

A navigation menu is just a list of links, usually inside a `` element:

```

  [Home](index.html)
  [About](about.html)
  [Contact](contact.html)

```

The `` tag is a semantic element that tells browsers and screen readers 'this is the main navigation'. CSS (which you will learn later) makes the menu look pretty.

## Code Examples

### Basic Internal and External Links

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Links</title>
</head>
<body>
  <h1>Priya's Favourite Links</h1>
  <h2>Internal Links (Same Site)</h2>
  <p><a href="about.html">About Me</a></p>
  <p><a href="projects.html">My Projects</a></p>
  <p><a href="contact.html">Contact</a></p>
  <h2>External Links (Other Websites)</h2>
  <p><a href="https://www.google.com">Google</a></p>
  <p><a href="https://www.wikipedia.org">Wikipedia</a></p>
  <p><a href="https://learn.modernagecoders.com">Modern Age Coders</a></p>
</body>
</html>
```

This shows both kinds of links. Internal links use relative paths like `about.html` — they point to other files in the same folder. External links use full URLs starting with `https://`. Both types of links use the same `` tag.

**Output:**

```
A page with two sections of links. Clicking internal links would open pages in the same folder. Clicking external links opens websites like Google and Wikipedia.
```

### Opening Links in a New Tab

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>External Resources</title>
</head>
<body>
  <h1>Helpful External Resources</h1>
  <p>These open in a new tab so you do not lose this page:</p>
  <p><a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipedia (new tab)</a></p>
  <p><a href="https://www.github.com" target="_blank" rel="noopener noreferrer">GitHub (new tab)</a></p>
  <p><a href="https://www.stackoverflow.com" target="_blank" rel="noopener noreferrer">Stack Overflow (new tab)</a></p>
</body>
</html>
```

When you add `target="_blank"`, the link opens in a new browser tab. For security and privacy, always add `rel="noopener noreferrer"` along with it. This is the standard for external links.

**Output:**

```
A page with three links that each open in a new browser tab when clicked.
```

### Anchor Links Within the Same Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Tutorial</title>
</head>
<body>
  <h1>HTML Tutorial</h1>

  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#tags">Tags</a></li>
    <li><a href="#attributes">Attributes</a></li>
    <li><a href="#conclusion">Conclusion</a></li>
  </ul>

  <h2 id="intro">Introduction</h2>
  <p>HTML stands for HyperText Markup Language. It is used to build web pages.</p>

  <h2 id="tags">Tags</h2>
  <p>Tags are the building blocks of HTML. Examples include p, h1, and img.</p>

  <h2 id="attributes">Attributes</h2>
  <p>Attributes add extra information to tags, like href on an anchor tag.</p>

  <h2 id="conclusion">Conclusion</h2>
  <p>HTML is easy to learn and the foundation of the web.</p>
  <p><a href="#">Back to Top</a></p>
</body>
</html>
```

This shows anchor navigation. Each section heading has an `id` attribute. The table of contents at the top links to those IDs using `#`. Clicking a link smoothly scrolls to that section. The 'Back to Top' link at the bottom uses just `#` to go to the top of the page.

**Output:**

```
A tutorial page with a clickable table of contents. Clicking any entry jumps to that section of the page.
```

### Email, Phone, and Download Links

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Rohan</title>
</head>
<body>
  <h1>Contact Rohan Gupta</h1>
  <p>Choose your preferred way to contact:</p>
  <ul>
    <li>Email: <a href="mailto:rohan@example.com">rohan@example.com</a></li>
    <li>Phone: <a href="tel:+919876543210">+91 98765 43210</a></li>
    <li><a href="https://via.placeholder.com/150" download="Rohan_Avatar.png">Download my avatar</a></li>
  </ul>
  <h2>Email with Subject and Body</h2>
  <p><a href="mailto:rohan@example.com?subject=Hello%20Rohan&body=Hi%20Rohan%2C%20I%20saw%20your%20website.">Email with pre-filled message</a></p>
</body>
</html>
```

Three special kinds of links: `mailto:` opens the email app, `tel:` dials the number on mobile, and `download` makes a file download instead of opening it. The mailto link can also pre-fill subject and body using query parameters. Note that spaces must be encoded as `%20`.

**Output:**

```
A contact page with clickable email and phone links, a download button, and a pre-filled email link.
```

### Navigation Menu Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ananya's Site</title>
</head>
<body>
  <nav>
    <a href="index.html">Home</a> |
    <a href="about.html">About</a> |
    <a href="projects.html">Projects</a> |
    <a href="blog.html">Blog</a> |
    <a href="contact.html">Contact</a>
  </nav>

  <h1>Welcome to Ananya's Site</h1>
  <p>Use the navigation menu above to explore different pages.</p>
</body>
</html>
```

This is a simple horizontal navigation menu using the `` semantic element. The pipe characters (|) are used as simple separators between links. In a real project, CSS would make this look much prettier, but this is a functional navigation menu using only HTML.

**Output:**

```
A page with a top navigation menu showing 'Home | About | Projects | Blog | Contact', each as a clickable link.
```

### Link With Title Tooltip and Relative Paths

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Paths Example</title>
</head>
<body>
  <h1>Different Relative Paths</h1>
  <h2>Links with Tooltips</h2>
  <p><a href="about.html" title="Learn more about Vikram">About Me</a></p>
  <p><a href="projects.html" title="See my coding projects">Projects</a></p>

  <h2>Links to Other Folders</h2>
  <p><a href="pages/gallery.html">Gallery (in pages folder)</a></p>
  <p><a href="../parent-page.html">Parent Page (go up one folder)</a></p>
  <p><a href="./same-folder.html">Same Folder (explicit)</a></p>
</body>
</html>
```

The `title` attribute creates a tooltip that appears when users hover over the link. Different path prefixes point to different locations: `./` is the current folder, `../` goes up one folder, and just a filename means the same folder. Hover over the first two links and you will see a small yellow tooltip.

**Output:**

```
A page with tooltips when hovering over links, and several examples of relative paths.
```

## Common Mistakes

### Forgetting the href Attribute

**Wrong:**

```
<a>Click Me</a>
```

The link is not clickable — it just appears as plain text (or blue underlined text that does nothing).

**Correct:**

```
<a href="https://www.google.com">Click Me</a>
```

Every `` tag needs an `href` attribute to be a functioning link. Without it, the tag may display as styled text, but clicking does nothing.

### Using target="_blank" Without rel="noopener noreferrer"

**Wrong:**

```
<a href="https://example.com" target="_blank">Example</a>
```

Security and privacy vulnerability — the new tab can access window.opener and the referring URL is shared.

**Correct:**

```
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Example</a>
```

Always add `rel="noopener noreferrer"` when using `target="_blank"`. `noopener` prevents the new page from accessing the original via `window.opener`. `noreferrer` prevents sending the referring URL.

### Forgetting https:// for External Links

**Wrong:**

```
<a href="www.google.com">Google</a>
```

The browser treats 'www.google.com' as a relative path inside your site, not as an external URL. Clicking goes to yoursite.com/www.google.com.

**Correct:**

```
<a href="https://www.google.com">Google</a>
```

External links must start with `https://` (or `http://`). Without it, the browser thinks you mean a file on your own site. Always include the full protocol for external URLs.

### Anchor Link With ID That Does Not Exist

**Wrong:**

```
<a href="#contact-section">Go to Contact</a>
<!-- But there is no element with id="contact-section" -->
```

Clicking the link does nothing — there is no target to scroll to.

**Correct:**

```
<a href="#contact-section">Go to Contact</a>
<h2 id="contact-section">Contact</h2>
```

When using anchor links with `#`, you must have an element with a matching `id` attribute somewhere on the page. The ID in the href (after #) must match the id attribute exactly — case-sensitive.

### Wrong mailto Syntax

**Wrong:**

```
<a href="mail:priya@example.com">Email</a>
```

The browser does not recognise 'mail:' as an email link, so clicking does nothing meaningful.

**Correct:**

```
<a href="mailto:priya@example.com">Email</a>
```

The correct protocol for email links is `mailto:` (with 'to' at the end), not `mail:`. Similarly, phone links use `tel:`, not `phone:`.

## Summary

- The  (anchor) tag creates a link. The href attribute specifies where the link goes.
- Internal links use relative paths like 'about.html' or '../pages/home.html' to point to other files in the same website.
- External links use full URLs starting with 'https://' like 'https://www.google.com'.
- target="_blank" opens the link in a new browser tab, keeping your original page open.
- Always add rel="noopener noreferrer" when using target="_blank" for security and privacy.
- Anchor links use #id to jump to a specific section on the same page. The target element must have a matching id attribute.
- mailto: links open the user's email app with the address pre-filled. You can also pre-fill subject and body.
- tel: links open the phone dialler on mobile devices. Include the country code starting with +.
- The download attribute makes the browser download the file instead of opening it. You can also rename the file.
- The title attribute creates a tooltip when users hover over the link — not visible on mobile, so do not rely on it for critical info.
- Navigation menus are usually wrapped in the  semantic element to tell browsers and screen readers 'this is navigation'.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/html-and-css/links-and-navigation/*
*Practice questions: https://learn.modernagecoders.com/resources/html-and-css/links-and-navigation/practice/*
