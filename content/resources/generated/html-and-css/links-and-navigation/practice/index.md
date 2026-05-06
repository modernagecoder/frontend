---
title: "Practice: Links and Navigation - Connecting the Web Together"
description: "57 practice problems for Links and Navigation - Connecting the Web Together in HTML and CSS"
slug: links-and-navigation-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/links-and-navigation/practice/
category: "HTML and CSS"
---
# Practice: Links and Navigation - Connecting the Web Together

**Total questions:** 57

## Topic-Specific Questions

### Q1. [Easy] What does this HTML create?

```
[Google](https://www.google.com)
```

*Hint:* It is a link to Google.

**Answer:** A clickable link with the text 'Google' that opens google.com when clicked.

The `` tag creates a hyperlink. `href` is the destination and the text between the tags is what the user clicks on.

### Q2. [Easy] Write a link that opens Wikipedia in a new tab.

*Hint:* Use target="_blank" and include rel="noopener noreferrer".

**Answer:** ```
[Wikipedia](https://www.wikipedia.org)
```

`target="_blank"` opens the link in a new tab. `rel="noopener noreferrer"` is added for security and privacy reasons.

### Q3. [Easy] This link does nothing when clicked. Fix it:

```
Click Here
```

*Hint:* Something important is missing.

**Answer:** ```
[Click Here](https://example.com)
```

The `href` attribute is missing. Without it, the `` tag is just styled text that does nothing when clicked.

### Q4. [Easy] What kind of link is this?

```
[About](about.html)
```

*Hint:* Does it have a full URL with https?

**Answer:** An internal link to a file called 'about.html' in the same folder as the current page.

Because `about.html` does not start with `https://`, it is a relative path — an internal link pointing to a file in the same folder.

### Q5. [Easy] Write an HTML link to send an email to 'ananya@example.com'.

*Hint:* Use mailto:

**Answer:** ```
[Email Ananya](mailto:ananya@example.com)
```

The `mailto:` protocol in the href opens the user's email app with the specified address pre-filled in the To field.

### Q6. [Easy] Fix this broken email link:

```
[Email](mail:priya@example.com)
```

*Hint:* The protocol should be something slightly different.

**Answer:** ```
[Email](mailto:priya@example.com)
```

The correct email protocol is `mailto:` (with 'to' at the end), not `mail:`.

### Q7. [Easy] What does the href="#top" do?

*Hint:* # is used for anchor links.

**Answer:** It creates an anchor link that jumps to an element with id="top" on the same page.

When the href starts with `#` followed by an ID, clicking the link scrolls the browser to the element with that id attribute on the current page.

### Q8. [Easy] Write HTML for a link that makes the user download a file called 'report.pdf'.

*Hint:* Use the download attribute.

**Answer:** ```
[Download Report](report.pdf)
```

The `download` attribute makes the browser download the linked file instead of opening it. Without this attribute, the browser may try to display the PDF directly.

### Q9. [Easy] What does this render?

```
[Call Us](tel:+919876543210)
```

*Hint:* tel is for phone links.

**Answer:** A clickable link saying 'Call Us' that opens the phone dialler on mobile devices.

The `tel:` protocol creates a link that, on mobile, opens the phone app with the number pre-filled. On desktop, it may open a VoIP app like Skype or do nothing.

### Q10. [Easy] Fix this external link:

```
[Google](www.google.com)
```

*Hint:* External links need a protocol.

**Answer:** ```
[Google](https://www.google.com)
```

Without `https://`, the browser treats 'www.google.com' as a relative path inside your site. External URLs must start with the full protocol.

### Q11. [Easy] Write a link with a tooltip saying 'Click to learn more' that goes to 'about.html'.

*Hint:* Use the title attribute.

**Answer:** ```
[About](about.html)
```

The `title` attribute creates a small tooltip that appears when users hover over the link with their mouse.

### Q12. [Medium] What does href="../index.html" mean?

*Hint:* .. means 'go up one folder'.

**Answer:** Go up one folder from the current location, then find the file 'index.html'.

`..` in a relative path means 'parent folder'. So `../index.html` means go up one level and look for index.html there.

### Q13. [Medium] Create anchor navigation that jumps to 'Section One' on the same page. Write the link AND the target heading.

*Hint:* The target needs an id, the link uses # followed by that id.

**Answer:** ```
[Go to Section One](#section-one)
...
Section One
```

Anchor navigation needs two parts: (1) a link with `href="#id"`, and (2) a target element with `id="id"`. Clicking the link scrolls the page to the target.

### Q14. [Medium] This link opens in a new tab but has a security issue. Fix it:

```
[Example](https://example.com)
```

*Hint:* Missing a security-related attribute.

**Answer:** ```
[Example](https://example.com)
```

When you open a link in a new tab with `target="_blank"`, always add `rel="noopener noreferrer"` to prevent the new tab from accessing your page and to improve privacy.

### Q15. [Medium] Write a navigation menu inside a  element with four links: Home, About, Projects, Contact — each pointing to the respective HTML file.

*Hint:* Wrap the links in  tags.

**Answer:** ```

  [Home](index.html)
  [About](about.html)
  [Projects](projects.html)
  [Contact](contact.html)

```

The `` tag is a semantic element that tells browsers and screen readers 'this is the main navigation of the site'. It is the standard container for navigation links.

### Q16. [Medium] What happens when you click this link on a mobile phone?

```
[Call](tel:+911234567890)
```

*Hint:* tel: links on phones do something specific.

**Answer:** The phone opens its dialler app with the number +911234567890 already filled in, ready to call.

On mobile devices, `tel:` links trigger the phone dialler. Users can tap the call button to actually make the call. This is very useful for contact pages.

### Q17. [Medium] Rohan's anchor link is not jumping anywhere. Find the bug:

```
[Go to About](#About)
...
About
```

*Hint:* IDs are case-sensitive.

**Answer:** The href uses `#About` (capital A) but the id is `about` (lowercase). Change the href to `#about` to match.

HTML IDs are case-sensitive. `About` and `about` are different. The href and id must match exactly in case.

### Q18. [Medium] Write a link that downloads a file 'profile.jpg' but saves it with the name 'MyProfile.jpg'.

*Hint:* The download attribute can have a value.

**Answer:** ```
[Download Profile](profile.jpg)
```

You can give the `download` attribute a value to rename the file when saving. The original file stays named 'profile.jpg' on the server, but users download it as 'MyProfile.jpg'.

### Q19. [Medium] What is the difference between href="about.html" and href="./about.html"?

*Hint:* Think about relative paths.

**Answer:** There is no difference. Both point to 'about.html' in the current folder. The `./` prefix is optional but sometimes used to be explicit.

`./` means 'in the current folder' and is the default. Writing `./about.html` and `about.html` both point to the same file. The `./` is only needed in specific cases to disambiguate.

### Q20. [Medium] Write a mailto link that pre-fills the subject line with 'Question about HTML'.

*Hint:* Use mailto:email?subject=text (spaces become %20).

**Answer:** ```
[Email Priya](mailto:priya@example.com?subject=Question%20about%20HTML)
```

You can add query parameters to mailto links: `?subject=...` for the subject, `&body=...` for the body. Spaces must be encoded as `%20`.

### Q21. [Hard] Fix this complete page — multiple things are wrong:

```

  Home
  About
  [Contact](mail:hi@ex.com)

```

*Hint:* Missing href, missing protocol and quotes, wrong email protocol.

**Answer:** ```

  [Home](index.html)
  [About](https://www.about.com)
  [Contact](mailto:hi@ex.com)

```

Three bugs fixed: (1) Home link was missing href, (2) About link needed `https://` and quotes, (3) Contact link used `mail:` instead of `mailto:`.

### Q22. [Hard] Create anchor navigation that jumps to different sections of a single page. Include a nav with 3 links (Intro, Main, End) and 3 h2 sections with matching ids. Each section should have a paragraph.

*Hint:* Link hrefs start with # and match section ids.

**Answer:** ```

  [Intro](#intro) |
  [Main](#main) |
  [End](#end)

Introduction
Welcome to the page.

Main Content
This is the main section.

End
Thanks for reading.

```

This creates a functional table of contents. Clicking any nav link scrolls the page to the matching section because the link hrefs use # plus the section id.

### Q23. [Hard] This link should download a file but keeps opening it instead. Fix it:

```
[Download Song](song.mp3)
```

*Hint:* Missing an attribute.

**Answer:** ```
[Download Song](song.mp3)
```

Without the `download` attribute, clicking a link to an MP3 file usually opens it in the browser's built-in audio player. Adding `download` forces a file download instead.

### Q24. [Hard] Write a complete HTML page for a contact page with: a heading, a paragraph, email link (mailto), phone link (tel), and a navigation bar at the top with 3 links (Home, About, Contact).

*Hint:* Combine nav, mailto, and tel links in a complete page.

**Answer:** ```
<!DOCTYPE html>

  
  Contact

  
    [Home](index.html) |
    [About](about.html) |
    [Contact](contact.html)
  
  Contact Me
  Feel free to reach out through any of these:

  Email: [aarav@example.com](mailto:aarav@example.com)

  Phone: [+91 98765 43210](tel:+919876543210)

```

A complete contact page with navigation, contact info using proper mailto and tel protocols, and a structured layout.

### Q25. [Hard] What does this mean: href="../../home.html"?

*Hint:* Count the number of ..

**Answer:** Go up two folders from the current location, then find home.html.

Each `../` means 'go up one folder'. So `../../` goes up two folders. This is useful for deeply nested pages that link back to the main site.

## Mixed Questions

### Q1. [Easy] What does this render?

```
[Home](index.html)
```

*Hint:* Relative link to the same folder.

**Answer:** A clickable link saying 'Home' that goes to 'index.html' in the same folder.

This is an internal link. The relative path `index.html` points to a file in the current folder.

### Q2. [Easy] Write a link to call +91 98765 43210 from a phone.

*Hint:* Use tel: protocol.

**Answer:** ```
[Call Us](tel:+919876543210)
```

The `tel:` protocol opens the phone dialler on mobile devices. Always include the country code.

### Q3. [Easy] Fix this:

```
Google
```

*Hint:* Two issues: missing quotes and missing protocol.

**Answer:** ```
[Google](https://www.google.com)
```

Attribute values should be in quotes, and external links need the full `https://` protocol.

### Q4. [Easy] What does target="_blank" do?

*Hint:* Something about how the link opens.

**Answer:** It opens the link in a new browser tab instead of replacing the current page.

`target="_blank"` is the standard way to tell the browser 'open this in a new tab'. Useful for external links so users do not lose your page.

### Q5. [Easy] Write a link to 'gallery.html' inside a folder called 'images'.

*Hint:* Use a relative path with a folder.

**Answer:** ```
[View Gallery](images/gallery.html)
```

To link to a file in a subfolder, use the folder name followed by a slash and the filename. No leading slash is needed.

### Q6. [Medium] What happens with href="#"?

*Hint:* Just # with nothing after.

**Answer:** Clicking the link scrolls the page to the very top. It is commonly used for 'Back to Top' buttons.

`href="#"` is a special case — it scrolls to the top of the page. Great for 'Back to Top' links, but use it sparingly.

### Q7. [Medium] Write a navigation menu with 3 links: 'Home' (to index.html), 'About' (in a pages folder, about.html), and 'Parent' (up one folder to main.html).

*Hint:* Three different path styles.

**Answer:** ```

  [Home](index.html)
  [About](pages/about.html)
  [Parent](../main.html)

```

This menu shows three relative path styles: same folder, subfolder, and parent folder.

### Q8. [Medium] Neha's link does not work. What is wrong?

```
[Go to Section](#section1)
```

*Hint:* Anchor links and target="_blank" do not mix well.

**Answer:** Remove `target="_blank"` — it opens a new blank tab instead of scrolling to the section. Or, if you really want a new tab, it is better to use a new page for that section.

Anchor links (those starting with #) are meant to scroll the current page. Combining with `target="_blank"` opens a new tab to the same page, which is confusing for users.

### Q9. [Medium] What does this download link do?

```
[Download](cv.pdf)
```

*Hint:* The download attribute can rename the file.

**Answer:** Clicking downloads the file 'cv.pdf' from the server but saves it with the filename 'Priya_CV.pdf' on the user's computer.

The value of the `download` attribute is the filename to use when saving. The original file on the server keeps its name.

### Q10. [Medium] Create a mailto link with both subject and body. Email: rohan@example.com, subject: 'Hi', body: 'Hello Rohan'.

*Hint:* Use ?subject=... &body=... and encode spaces as %20.

**Answer:** ```
[Email Rohan](mailto:rohan@example.com?subject=Hi&body=Hello%20Rohan)
```

Use `?` for the first parameter and `&` for the rest. Spaces in the body must be encoded as `%20`. Note the `&` is the encoded form of the ampersand in HTML.

### Q11. [Medium] Vikram's anchor link scrolls to the wrong section. Find the bug:

```
[FAQ](# faq)
...
FAQ
```

*Hint:* Extra whitespace in the href.

**Answer:** ```
[FAQ](#faq)
```

There should be no space between `#` and the id. `# faq` has a space which makes it not match the id `faq`.

### Q12. [Hard] What is the difference between href="page.html" and href="/page.html"?

*Hint:* The leading slash matters.

**Answer:** `page.html` is relative to the current folder. `/page.html` is absolute from the site root — it always goes to yoursite.com/page.html regardless of where the current page is.

A leading slash makes a path absolute from the website root. Without it, the path is relative to the current file's folder. This is an important distinction when your site has multiple folders.

### Q13. [Hard] Write a complete HTML page with: header nav (3 links), h1 'FAQ', three h2 sections with ids, a table of contents linking to each section, and each section has a 'Back to Top' link.

*Hint:* Anchor links everywhere.

**Answer:** ```
<!DOCTYPE html>

  
  FAQ

  
    [Home](index.html) |
    [About](about.html) |
    [FAQ](faq.html)
  
  Frequently Asked Questions
  Jump to:

  
    [Question 1](#q1)
    [Question 2](#q2)
    [Question 3](#q3)
  

  Question 1: What is HTML?
  HTML stands for HyperText Markup Language.

  [Back to Top](#top)

  Question 2: Who invented HTML?
  Tim Berners-Lee in 1991.

  [Back to Top](#top)

  Question 3: Is HTML a programming language?
  No, it is a markup language.

  [Back to Top](#top)

```

This is a full FAQ page with anchor navigation. Notice how `id="top"` on the body allows 'Back to Top' links to scroll the whole page up. Each question has an id for the TOC links.

### Q14. [Hard] This external link opens in the same tab but should open in a new tab with security. Fix it:

```
[GitHub](https://github.com)
```

*Hint:* Two attributes needed.

**Answer:** ```
[GitHub](https://github.com)
```

Add `target="_blank"` to open in a new tab, and `rel="noopener noreferrer"` for security and privacy. This is the standard pattern for external links.

### Q15. [Hard] What happens when you click this link on desktop vs mobile?

```
[Call](tel:+911234567890)
```

*Hint:* Different devices handle tel: differently.

**Answer:** On mobile, it opens the phone dialler with the number ready to call. On desktop, it may open Skype or another VoIP app, or show a 'choose an app' prompt, or do nothing.

The behaviour of `tel:` links depends on what apps are installed. Mobile devices reliably open the phone app. Desktops may or may not have an appropriate handler set up.

## Multiple Choice Questions

### Q1. [Easy] Which tag creates a hyperlink?

**B is correct.** The `` (anchor) tag creates hyperlinks. The `` tag is for linking CSS files in the head.

### Q2. [Easy] Which attribute specifies where a link goes?

**C is correct.** The `href` (hypertext reference) attribute holds the destination URL.

### Q3. [Easy] What does target="_blank" do?

**B is correct.** `target="_blank"` opens the link in a new browser tab.

### Q4. [Easy] What is the correct protocol for email links?

**C is correct.** `mailto:` is the correct protocol. It opens the user's email app with the address pre-filled.

### Q5. [Easy] What is the correct protocol for phone links?

**B is correct.** `tel:` is the standard protocol for phone links. Include the country code with a plus sign.

### Q6. [Easy] Which character starts an anchor link (same-page jump)?

**C is correct.** The `#` symbol is used in href values to link to an element on the same page by its id.

### Q7. [Easy] Which attribute forces a file to download when clicked?

**B is correct.** The `download` attribute tells the browser to download the file rather than open it.

### Q8. [Medium] Which attribute shows a tooltip when hovering?

**C is correct.** The `title` attribute creates a tooltip that appears when hovering over an element with a mouse.

### Q9. [Medium] What does ../ mean in a relative path?

**B is correct.** `../` means 'parent folder' (go up one level). Use `../../` to go up two levels.

### Q10. [Medium] Why add rel="noopener noreferrer" to links with target="_blank"?

**B is correct.** `noopener` prevents the new tab from accessing your page via window.opener, and `noreferrer` does not send the referring URL, improving both security and privacy.

### Q11. [Medium] What is wrong with href="www.google.com"?

**A is correct.** Without `https://` or `http://`, the browser treats this as a relative path and looks for a folder named 'www.google.com' on your site.

### Q12. [Medium] To link to an element with id="contact", the href should be:

**C is correct.** Anchor links use `#` followed by the element's id to jump to it on the same page.

### Q13. [Medium] Which HTML element wraps navigation links?

**B is correct.** The `` element is the semantic container for main navigation links.

### Q14. [Medium] What does href="./about.html" mean?

**B is correct.** `./` means 'current folder' (explicit). It is the same as just writing `about.html`.

### Q15. [Hard] What does href="#" do?

**C is correct.** `href="#"` is a special case that scrolls the page to the top. It is often used for 'Back to Top' links.

### Q16. [Hard] In a mailto link, how do you add a subject?

**B is correct.** Use `?` for the first parameter and `&` for additional parameters, like: `mailto:x@y.com?subject=Hi&body=Hello`.

### Q17. [Hard] Which of these is an ABSOLUTE path (from site root)?

**C is correct.** A leading slash makes the path absolute from the website root. `/page.html` always points to yoursite.com/page.html regardless of the current folder.

### Q18. [Hard] What does href="../../index.html" mean?

**C is correct.** Each `../` moves up one folder. Two of them moves up two folders, then finds index.html there.

### Q19. [Hard] What is wrong with [Link](#About) when the target is About?

**B is correct.** HTML IDs are case-sensitive. `#About` will not find an element with `id="about"`.

### Q20. [Hard] Which is the BEST practice for an external link?

**C is correct.** The best practice for external links is to use full https URL, open in a new tab, and add `rel="noopener noreferrer"` for security and privacy.

## Coding Challenges

### Challenge 1. Basic Navigation Page

**Difficulty:** Easy

**Constraints:**

- Must use the  element and relative paths for all links.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home</title>
</head>
<body>
  <nav>
    <a href="index.html">Home</a> |
    <a href="about.html">About</a> |
    <a href="projects.html">Projects</a> |
    <a href="contact.html">Contact</a>
  </nav>
  <h1>Welcome to my site</h1>
  <p>Use the navigation above to explore different pages.</p>
</body>
</html>
```

The  element semantically marks the navigation area. The pipe characters separate the links visually. This is the foundation of every website's navigation.

### Challenge 2. External Links Page

**Difficulty:** Easy

**Constraints:**

- All external links must have target="_blank" and rel="noopener noreferrer".

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Favourite Sites</title>
</head>
<body>
  <h1>My Favourite Sites</h1>
  <ul>
    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google</a></li>
    <li><a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipedia</a></li>
    <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
    <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
    <li><a href="https://learn.modernagecoders.com" target="_blank" rel="noopener noreferrer">Modern Age Coders</a></li>
  </ul>
</body>
</html>
```

Each external link opens in a new tab so users can come back to your page. The `rel="noopener noreferrer"` attributes are security best practices.

### Challenge 3. Contact Page With Email and Phone

**Difficulty:** Medium

**Constraints:**

- Must include mailto, tel, and download attributes.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Priya Sharma</title>
</head>
<body>
  <h1>Contact Priya Sharma</h1>
  <p>Feel free to reach out using any of the options below:</p>
  <p>Email: <a href="mailto:priya@example.com">priya@example.com</a></p>
  <p>Phone: <a href="tel:+919876543210">+91 98765 43210</a></p>
  <p><a href="resume.pdf" download="Priya_Resume.pdf">Download Resume</a></p>
</body>
</html>
```

This contact page uses three special link types: mailto for email, tel for phone, and download to force a file download. All are essential for any real contact page.

### Challenge 4. Table of Contents With Anchor Links

**Difficulty:** Medium

**Constraints:**

- Use anchor links (href="#id") and matching id attributes on headings.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Beginner Guide</title>
</head>
<body id="top">
  <h1>HTML Beginner Guide</h1>
  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#tags">Tags</a></li>
    <li><a href="#attributes">Attributes</a></li>
    <li><a href="#conclusion">Conclusion</a></li>
  </ul>

  <h2 id="intro">Introduction</h2>
  <p>HTML stands for HyperText Markup Language and is the foundation of the web.</p>
  <p><a href="#top">Back to Top</a></p>

  <h2 id="tags">Tags</h2>
  <p>Tags like p, h1, and img are the building blocks of HTML pages.</p>
  <p><a href="#top">Back to Top</a></p>

  <h2 id="attributes">Attributes</h2>
  <p>Attributes like href and src give extra information to tags.</p>
  <p><a href="#top">Back to Top</a></p>

  <h2 id="conclusion">Conclusion</h2>
  <p>HTML is easy to learn and essential for building websites.</p>
  <p><a href="#top">Back to Top</a></p>
</body>
</html>
```

The body has `id="top"` so the 'Back to Top' links can scroll up. Each section heading has an id that matches the corresponding TOC link. This is a classic pattern for long single-page guides.

### Challenge 5. Multi-Folder Navigation

**Difficulty:** Medium

**Constraints:**

- Must include examples of same folder, sub folder, parent folder, and up two folders.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Path Examples</title>
</head>
<body>
  <h1>Relative Path Examples</h1>
  <h2>Same Folder</h2>
  <p><a href="about.html">About (same folder)</a></p>
  <h2>Sub Folder</h2>
  <p><a href="pages/gallery.html">Gallery (pages subfolder)</a></p>
  <h2>Parent Folder</h2>
  <p><a href="../main.html">Main (parent folder)</a></p>
  <h2>Up Two Folders</h2>
  <p><a href="../../root.html">Root (up two folders)</a></p>
</body>
</html>
```

This page shows the four most common relative path patterns: same folder, into a subfolder, up one folder, and up two folders. Understanding these is essential for organizing multi-page websites.

### Challenge 6. Complete FAQ Page

**Difficulty:** Hard

**Constraints:**

- Include nav, anchor links, matching ids, and back-to-top functionality.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FAQ</title>
</head>
<body id="top">
  <nav>
    <a href="index.html">Home</a> |
    <a href="faq.html">FAQ</a> |
    <a href="contact.html">Contact</a>
  </nav>
  <h1>Frequently Asked Questions</h1>
  <p>Click any question to jump to the answer:</p>
  <ul>
    <li><a href="#q1">What is HTML?</a></li>
    <li><a href="#q2">Who invented HTML?</a></li>
    <li><a href="#q3">Is HTML hard to learn?</a></li>
    <li><a href="#q4">Do I need to install anything?</a></li>
    <li><a href="#q5">Where can I practice?</a></li>
  </ul>

  <h2 id="q1">What is HTML?</h2>
  <p>HTML stands for HyperText Markup Language. It is the language used to create web pages.</p>
  <p><a href="#top">Back to Top</a></p>

  <h2 id="q2">Who invented HTML?</h2>
  <p>Tim Berners-Lee invented HTML in 1991 at CERN.</p>
  <p><a href="#top">Back to Top</a></p>

  <h2 id="q3">Is HTML hard to learn?</h2>
  <p>No, HTML is one of the easiest languages to learn. You can build your first web page in minutes.</p>
  <p><a href="#top">Back to Top</a></p>

  <h2 id="q4">Do I need to install anything?</h2>
  <p>No, you just need a text editor and a web browser. Both are already on your computer.</p>
  <p><a href="#top">Back to Top</a></p>

  <h2 id="q5">Where can I practice?</h2>
  <p>Modern Age Coders has many free resources and practice exercises for beginners.</p>
  <p><a href="#top">Back to Top</a></p>
</body>
</html>
```

A complete FAQ page with navigation, table of contents, and back-to-top links for every answer. This is exactly how professional FAQ pages are structured.

### Challenge 7. Social Media Links

**Difficulty:** Hard

**Constraints:**

- All external links must have target blank with security. Include mailto and tel too.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vikram Kumar</title>
</head>
<body>
  <nav>
    <a href="index.html">Home</a> |
    <a href="blog.html">Blog</a> |
    <a href="contact.html">Contact</a>
  </nav>

  <h1>Hi, I am Vikram Kumar</h1>
  <p>A 15-year-old coder from Pune who loves HTML, CSS, and JavaScript.</p>

  <h2>Find me online</h2>
  <ul>
    <li><a href="https://github.com/vikram" target="_blank" rel="noopener noreferrer">GitHub</a></li>
    <li><a href="https://twitter.com/vikram" target="_blank" rel="noopener noreferrer">Twitter</a></li>
    <li><a href="https://linkedin.com/in/vikram" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
    <li><a href="https://instagram.com/vikram" target="_blank" rel="noopener noreferrer">Instagram</a></li>
    <li><a href="https://youtube.com/@vikram" target="_blank" rel="noopener noreferrer">YouTube</a></li>
  </ul>

  <h2>Direct Contact</h2>
  <p>Email: <a href="mailto:vikram@example.com">vikram@example.com</a></p>
  <p>Phone: <a href="tel:+919876543210">+91 98765 43210</a></p>
</body>
</html>
```

A complete landing page for a personal brand. Internal navigation uses relative paths, external social media links use full URLs with target blank and security, and direct contact uses mailto and tel protocols.

### Challenge 8. Portfolio With Full Navigation

**Difficulty:** Hard

**Constraints:**

- Must use nav, relative paths, download attribute, mailto, tel, target blank + rel.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Neha Patel - Portfolio</title>
</head>
<body>
  <nav>
    <a href="index.html">Home</a> |
    <a href="about.html">About</a> |
    <a href="projects.html">Projects</a> |
    <a href="blog.html">Blog</a> |
    <a href="contact.html">Contact</a>
  </nav>

  <h1>Neha Patel - Student Developer</h1>
  <p>Welcome to my portfolio. I am a 16-year-old from Mumbai passionate about web development and design.</p>

  <h2>My Projects</h2>
  <ul>
    <li><a href="projects/project1.html">Personal Blog</a></li>
    <li><a href="projects/project2.html">Recipe Collection</a></li>
    <li><a href="projects/project3.html">Photo Gallery</a></li>
  </ul>

  <p><a href="neha-cv.pdf" download="Neha_Patel_CV.pdf">Download My CV</a></p>

  <hr>

  <h2>Contact</h2>
  <p>Email: <a href="mailto:neha@example.com">neha@example.com</a></p>
  <p>Phone: <a href="tel:+919876543210">+91 98765 43210</a></p>

  <h3>Follow Me</h3>
  <p>
    <a href="https://github.com/neha" target="_blank" rel="noopener noreferrer">GitHub</a> |
    <a href="https://linkedin.com/in/neha" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
    <a href="https://twitter.com/neha" target="_blank" rel="noopener noreferrer">Twitter</a>
  </p>
</body>
</html>
```

A complete portfolio page demonstrating every link concept from this chapter: nav, internal links, relative paths with folders, download attribute with custom filename, mailto, tel, and external links with security.

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/links-and-navigation/*
