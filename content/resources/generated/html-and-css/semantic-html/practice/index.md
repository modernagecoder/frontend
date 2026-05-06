---
title: "Practice: Semantic HTML - header, nav, main, section, article, footer"
description: "55 practice problems for Semantic HTML - header, nav, main, section, article, footer in HTML and CSS"
slug: semantic-html-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/semantic-html/practice/
category: "HTML and CSS"
---
# Practice: Semantic HTML - header, nav, main, section, article, footer

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] Which tag represents the main navigation menu of a page?

*Hint:* Short for 'navigation'.

**Answer:** ``

The `` tag wraps the main navigation links of a website so that search engines and screen readers can identify them.

### Q2. [Easy] Which tag should wrap the unique main content of a page?

*Hint:* There should be only one of these per page.

**Answer:** ``

`` wraps the unique primary content. Only one `` per page is allowed.

### Q3. [Easy] Convert this div soup to semantic HTML:

```
Logo

Content

Copyright

```

*Hint:* Use header, main, and footer.

**Answer:** ```
Logo
Content
Copyright
```

header for the top area, main for the content, footer for the copyright. Same structure, but now it has meaning.

### Q4. [Easy] Which tag is used for a self-contained piece of content like a blog post?

*Hint:* It should make sense on its own.

**Answer:** ``

`` is for standalone content: blog posts, news articles, product cards, forum comments. If it could be reposted elsewhere and still make sense, it is an article.

### Q5. [Easy] Create a page footer containing a copyright notice for 'Modern Age Coders' with the current year 2026.

*Hint:* Use footer and copyright entity.

**Answer:** ```

  &copy; 2026 Modern Age Coders. All rights reserved.

```

The footer tag wraps the bottom part of a page. `&copy;` is the HTML entity for the copyright symbol.

### Q6. [Easy] Which tag marks up a date in a machine-readable way?

*Hint:* It has a datetime attribute.

**Answer:** ``

`11 April 2026` lets browsers and search engines understand the exact date, even if the visible text is formatted differently.

### Q7. [Easy] Wrap this image with a figure and caption 'Figure 1: Our team photo'.

```

```

*Hint:* Use figure and figcaption.

**Answer:** ```

  
  Figure 1: Our team photo

```

`` wraps content with a caption. `` provides the caption text.

### Q8. [Easy] Which tag is for content related to but separate from the main content (like a sidebar)?

*Hint:* Think 'aside from the main'.

**Answer:** ``

`` is for content that is tangentially related — sidebars, pull quotes, related links. Removing it should not break the main content.

### Q9. [Easy] What is wrong with this HTML?

```

  Site Logo
  Content

Copyright
```

*Hint:* Where does the site-wide header belong?

**Answer:** The site header should be OUTSIDE the main tag, not inside. main is only for the unique content.

The site-wide header (logo, nav) is not part of the main content — it is navigation. Put `` as a sibling of ``, not inside it. Fixed: header → main → footer as siblings.

### Q10. [Easy] Wrap this navigation list in a proper semantic tag:

```

  [Home](/)
  [About](/about)

```

*Hint:* Use the navigation tag.

**Answer:** ```

  
    [Home](/)
    [About](/about)
  

```

Wrap the ul in `` to mark this as the main navigation. Now screen readers and search engines can identify it.

### Q11. [Easy] Which semantic tag should you use for a blog post's title, author, and publish date area?

*Hint:* It is the top of the article.

**Answer:** `` (inside the ``)

Articles can have their own `` for the title, author, and metadata. This is different from the site's main header at the top of the page.

### Q12. [Easy] Identify what is wrong:

```

  Welcome

  More Content

```

*Hint:* There is a rule about how many of this tag a page can have.

**Answer:** A page should have only ONE ``. Combine them into one main with two sections.

The HTML spec allows only one `` per page. Use `` to divide content within the main tag.

### Q13. [Medium] Create a semantic layout for a page with: site header containing nav (Home, Blog), main containing one article with title 'Hello World', and a footer with copyright.

*Hint:* header > nav, main > article, footer.

**Answer:** ```

  My Site
  
    
      [Home](/)
      [Blog](/blog)
    
  

  
    Hello World
    This is my first blog post!

  

  &copy; 2026 My Site

```

A complete semantic structure: header (with nav) at the top, main (with article) in the middle, footer at the bottom. This is the standard layout for most web pages.

### Q14. [Medium] What is the difference between section and article?

*Hint:* Think about whether the content makes sense alone.

**Answer:** article = standalone content that could be reposted elsewhere (blog post). section = a thematic part of a page that only makes sense in context (Features section).

Article is self-contained. Section is a grouping. A blog post is an article. The About Us part of a landing page is a section.

### Q15. [Medium] Identify what semantic tag each div should become in this HTML:

```
logo and menu

  blog post

  related

copyright

```

*Hint:* top=header, content=main, post=article, sidebar=aside, bottom=footer.

**Answer:** ```
logo and menu

  blog post
  related

copyright
```

Each div is replaced with its semantic equivalent: header, main, article, aside, footer. The layout is the same, but now it has meaning.

### Q16. [Medium] Why is semantic HTML good for SEO?

*Hint:* Think about what Google sees.

**Answer:** Google reads your HTML to understand page structure. Semantic tags tell Google what is a heading, what is navigation, what is the main content, and what is an article. This helps rank your page correctly.

Div soup tells Google nothing. Semantic tags give Google a clear map of your page, which improves search ranking and helps Google show better previews.

### Q17. [Medium] Build a semantic layout for a news article: the article has a header with h1 and publish time, 2 paragraphs, a figure with image and caption, and an address with the reporter's name.

*Hint:* article > header, p, p, figure, address.

**Answer:** ```

  
    Breaking News
    11 April 2026
  
  First paragraph of the story.

  More details follow.

  
    
    Photo from the scene.
  
  Reported by Priya Sharma

```

A semantic news article using article, header, time, figure, figcaption, and address together.

### Q18. [Medium] What does the datetime attribute on the time tag do?

*Hint:* It makes the date readable by computers.

**Answer:** It provides a machine-readable version of the date in ISO format (like 2026-04-11), even if the visible text is formatted differently.

Humans can read '11 April 2026', but computers prefer '2026-04-11'. The datetime attribute gives both.

### Q19. [Medium] Priya wrote this but the page feels wrong semantically. What should the divs become?

```

  Blog

  Post 1

  Post 2

```

*Hint:* header for the header, main for posts, article for each post.

**Answer:** ```

  Blog

  Post 1
  Post 2

```

Also, the title div should be an h1 (a heading). The posts div becomes main, each post div becomes an article.

### Q20. [Medium] Should every img tag be wrapped in a figure?

*Hint:* Figure is for specific types of content.

**Answer:** No. Use  only for images that are meaningful content (illustrations, diagrams, photos with captions). Decorative images like logos and icons do not need figure.

Figure adds semantic weight — it says this image is content, not decoration. Using it everywhere dilutes its meaning.

### Q21. [Hard] Build a complete semantic HTML page for a blog with: a site header (logo + nav), main area with 2 blog articles (each with own header and footer), an aside for related posts, and a site footer.

*Hint:* Combine header, nav, main, article, aside, footer.

**Answer:** ```
<!DOCTYPE html>

  Tech Blog
  
    
      [Home](/)
      [About](/about)
    
  

  
    
      Post 1
      10 April
    
    First post content.

    Tags: html
  
  
    
      Post 2
      9 April
    
    Second post content.

    Tags: css
  
  
    Popular Posts
    [Link](#)
  

  &copy; 2026 Tech Blog

```

Full semantic blog page: site header (with nav), main containing articles and aside, and site footer. Each article has its own inner header and footer.

### Q22. [Hard] How do screen readers benefit from semantic HTML?

*Hint:* Screen readers announce things and let users navigate.

**Answer:** Screen readers can announce landmarks (header, nav, main, footer) and let users jump between them. Users can list all headings, skip to main, or find the nav — none of which works with plain divs.

Semantic HTML creates an outline of the page that screen readers use for navigation. Blind users depend on this to use the web efficiently.

### Q23. [Hard] Rohan wrote this and claims it is semantic. What is still wrong?

```

  Site Title
  Menu
  Article 1

  Article 2

```

*Hint:* Two things: site header/nav in wrong place, and divs should be articles.

**Answer:** (1) The site header and nav should be OUTSIDE main, not inside. (2) The divs should be `` tags since they represent standalone content.

main should contain only the unique page content. The site header and nav go as siblings of main. And each content block should use the article tag.

### Q24. [Hard] Is it valid to put a  inside an ?

*Hint:* Yes, and it has a specific purpose.

**Answer:** Yes, absolutely. An  can have its own  containing the article's title, author, and publish date. This is separate from the page's main header.

Header is not limited to the page top — it represents the introduction of whatever contains it. A page has a page header, an article has an article header. Both are valid.

## Mixed Questions

### Q1. [Easy] Which tag wraps the main navigation of a site?

*Hint:* Short for navigation.

**Answer:** ``

`` wraps the main navigation links of a site.

### Q2. [Easy] Write a simple semantic structure: header with h1 'Hello', main with a paragraph 'Welcome', and footer with '2026'.

*Hint:* Three top-level tags.

**Answer:** ```

  Hello

  Welcome

  2026

```

A minimal semantic page: header, main, footer as siblings.

### Q3. [Easy] What is the maximum number of  tags allowed on a page?

*Hint:* There is exactly one allowed.

**Answer:** One (exactly one main per page).

HTML5 specifies that a page should have exactly one ``. Use sections to divide content within main.

### Q4. [Easy] Which tag is for a blog post, news article, or other standalone content?

*Hint:* It could be reposted elsewhere and still make sense.

**Answer:** ``

Article is for self-contained content that could stand alone on its own.

### Q5. [Easy] What semantic tag should replace the div?

```

  &copy; 2026 My Site

```

*Hint:* Copyright info belongs at the bottom.

**Answer:** ``

Copyright and site-wide closing info belong in a footer tag.

### Q6. [Medium] Create a semantic section with heading 'Our Services' containing 3 articles (service cards), each with its own h3 and paragraph.

*Hint:* section > h2, article, article, article.

**Answer:** ```

  Our Services
  
    Web Design
    Beautiful websites.

  
  
    App Development
    Mobile apps for iOS and Android.

  
  
    SEO
    Rank higher on Google.

  

```

The section groups the thematic services area. Each service card is an article because it is self-contained content.

### Q7. [Medium] True or false: an  can contain its own  and .

*Hint:* Think about blog posts having titles and tags.

**Answer:** True. An article commonly has an inner header (title, author, date) and inner footer (tags, share buttons).

Headers and footers belong to their nearest containing element. The page has one header/footer, and each article can have its own.

### Q8. [Medium] Wrap a date in a time tag: '20 March 2026' with a proper datetime attribute.

*Hint:* ISO format is YYYY-MM-DD.

**Answer:** ```
20 March 2026
```

ISO format (2026-03-20) is machine-readable while the visible text is human-friendly.

### Q9. [Medium] What is div soup?

*Hint:* It describes a common mistake.

**Answer:** Using only  tags for everything on a page instead of semantic tags. It means nothing to browsers, search engines, or screen readers.

Div soup is a slang term for messy, meaningless HTML. Semantic HTML is the cure.

### Q10. [Medium] Why is this wrong?

```

  Just some random paragraphs.

```

*Hint:* Section should usually have a heading.

**Answer:** A `` should have a heading (h1-h6) that names its theme. Without a heading, a plain div is more appropriate.

Section is for thematic groups. No theme = no section. Add a heading or use a div.

### Q11. [Medium] Create a figure with an image (placeholder) and a caption that says 'Our office building'.

*Hint:* figure > img, figcaption.

**Answer:** ```

  
  Our office building

```

Figure wraps the image and caption. figcaption holds the caption text.

### Q12. [Hard] What is the purpose of the  tag?

*Hint:* Not for any address - only contact info.

**Answer:** It holds contact information for the nearest article or for the whole page — email, phone, or author name.

Address is specifically for contact info of the author of the page or article. It is NOT for random postal addresses that are just part of content.

### Q13. [Hard] Write the semantic markup for a product card: an article with a figure (image), h3 (product name), p (description), p (price), and a button (Buy now).

*Hint:* article > figure, h3, p, p, button.

**Answer:** ```

  
    
  
  Running Shoes
  Comfortable shoes for daily runs.

  Price: Rs 2499

  Buy Now

```

A product card is a self-contained piece of content (you could copy-paste it anywhere), so article is the right tag.

### Q14. [Hard] Which three benefits does semantic HTML provide?

*Hint:* Think about search engines, users with disabilities, and other developers.

**Answer:** (1) Better SEO (search engines understand the structure). (2) Better accessibility (screen readers can navigate). (3) Better maintainability (easier to read and edit).

These three benefits are why semantic HTML has become the standard. Modern browsers also use it for features like reader view.

### Q15. [Hard] This layout is not properly semantic. List the changes needed:

```
Logo

Home

  Blog post content

Copyright

```

*Hint:* 5 divs to 5 semantic tags.

**Answer:** (1) First div → header. (2) Second div → nav. (3) Third div → main. (4) Inner div → article. (5) Last div → footer.

Each div has a clear semantic meaning. Replacing them gives the page meaning without changing the layout.

## Multiple Choice Questions

### Q1. [Easy] Which tag represents the navigation menu of a website?

**B is correct.** `` wraps the main navigation links of a site. `` exists but is rarely used and not for main nav.

### Q2. [Easy] How many  tags should a page have?

**B is correct.** A page should have exactly one `` containing the unique primary content.

### Q3. [Easy] Which tag is for a standalone blog post?

**B is correct.** `` is for self-contained content like blog posts, news articles, and product cards. `` is for thematic groupings within a page.

### Q4. [Easy] Which tag is for content related to but separate from the main content (like a sidebar)?

**C is correct.** `` is for tangentially related content — sidebars, pull quotes, related links.

### Q5. [Easy] What tag should wrap an image with a caption?

**B is correct.** `` wraps content (image, diagram, code) that has a caption using ``.

### Q6. [Easy] Which tag holds a machine-readable date?

**B is correct.** The `` tag with a `datetime` attribute lets browsers and search engines understand dates.

### Q7. [Easy] Which tag is used at the bottom of a page for copyright and site info?

**B is correct.** `` wraps the bottom part of a page or section. Commonly holds copyright, contact info, and footer links.

### Q8. [Easy] What is 'div soup'?

**C is correct.** Div soup is slang for HTML that uses only div tags, giving the page no semantic meaning. Semantic HTML is the fix.

### Q9. [Easy] Which tag is used for the header of a page or article?

**C is correct.** `` is the semantic header tag. `` is the meta-information section of an HTML document (not visible).

### Q10. [Easy] What is the main benefit of using semantic HTML for SEO?

**B is correct.** Search engines use semantic tags to understand what parts of your page are navigation, main content, headings, and so on. This helps them rank your page correctly.

### Q11. [Medium] Where should the site-wide header and footer be placed relative to ?

**B is correct.** The site header and footer are NOT part of the main content. They should be siblings of `` (header above, footer below).

### Q12. [Medium] Can an  contain its own  and ?

**B is correct.** Header and footer belong to their nearest containing element. An article can have its own header (title, author) and footer (tags, metadata).

### Q13. [Medium] Which is correct for a list of blog posts on a homepage?

**B is correct.** Each blog post is a standalone piece of content, so wrap each in ``. The main tag contains all the articles.

### Q14. [Medium] Which tag should you use for the contact info of a page's author?

**B is correct.** `` is specifically for the author's contact info. It is NOT for random postal addresses that are part of regular content.

### Q15. [Medium] When should you use  over ?

**B is correct.** Use `` when you have a thematic group of content, usually with a heading. Use `` for purely presentational/styling wrappers that have no semantic meaning.

### Q16. [Medium] What is the difference between article and section?

**B is correct.** Article = standalone content that could be reposted elsewhere. Section = a thematic group that only makes sense in context.

### Q17. [Medium] Which semantic tag is best for the author and publish date of a blog post?

**B is correct.** The article's own `` is the right place for its title, author, and publish date — the intro info for that article.

### Q18. [Medium] Which tag pair is used to add a caption to an image?

**B is correct.** Wrap the image in `` and add a `` inside for the caption.

### Q19. [Hard] Which is the MOST semantic structure for a news website homepage?

**B is correct.** Proper semantic structure: site header (with nav) at the top, main containing articles, and site footer at the bottom. The header and footer are siblings of main, not inside it.

### Q20. [Hard] Why is semantic HTML better than div soup for accessibility?

**B is correct.** Screen readers use semantic landmarks to help users navigate quickly. Blind users can jump directly to the main content, skipping repetitive headers and navs. Divs offer no such shortcut.

### Q21. [Hard] Which of these is the BEST use case for the  tag?

**B is correct.** `` is for content that is related to the main content but not essential — a related posts sidebar fits perfectly. Navigation is for ``.

### Q22. [Hard] An  can only exist once per page. True or false?

**B is correct.** You can have unlimited `` tags on a page. Blog homepages often have many articles — one for each post. Only `` has the one-per-page rule.

### Q23. [Hard] Which statement about semantic HTML is FALSE?

**C is false (and therefore the correct answer).** Semantic HTML makes code EASIER to maintain, not harder. Tags like `` are self-explanatory compared to ``.

### Q24. [Hard] Which attribute on  makes the date machine-readable?

**B is correct.** ``. The datetime attribute holds the ISO-formatted date that computers can parse.

### Q25. [Hard] If a page has a sidebar with related articles beside the main content, which two tags should you use?

**B is correct.** Use `` for the primary content and `` for the sidebar with related articles.

## Coding Challenges

### Challenge 1. Semantic Homepage Layout

**Difficulty:** Easy

Build a basic semantic page with a header (site title), main (one paragraph of welcome text), and a footer (copyright).

**Constraints:**

- Use header, main, footer tags. No divs.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A page with 3 semantic sections: header, main, footer.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Home</title>
</head>
<body>
  <header>
    <h1>Welcome to Modern Age Coders</h1>
  </header>
  <main>
    <p>We teach kids and teens to code. Join us on this journey of learning!</p>
  </main>
  <footer>
    <p>&copy; 2026 Modern Age Coders. All rights reserved.</p>
  </footer>
</body>
</html>
```

### Challenge 2. Site with Navigation

**Difficulty:** Easy

Create a semantic page with a header that contains an h1 and a nav with 4 links: Home, About, Blog, Contact.

**Constraints:**

- Use header, nav, ul, li, and a tags.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A header with site title and a 4-link navigation menu.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>My Blog</title>
  <style>
    nav ul { list-style: none; display: flex; gap: 20px; padding: 0; }
  </style>
</head>
<body>
  <header>
    <h1>Aarav's Blog</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</body>
</html>
```

### Challenge 3. Semantic Blog Post

**Difficulty:** Medium

Build an article for a blog post with: inner header (h1 title, author name, time with datetime), 2 paragraphs of content, and an inner footer with tags.

**Constraints:**

- Use article, header, time, footer. Real datetime attribute.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A complete blog post article with title, author, body, and tags.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Blog Post</title>
</head>
<body>
  <article>
    <header>
      <h1>Why I Love HTML</h1>
      <p>By Priya Sharma - <time datetime="2026-04-11">11 April 2026</time></p>
    </header>
    <p>HTML is the foundation of the web. Every site starts with HTML. It is simple, powerful, and fun to learn.</p>
    <p>I started learning HTML at age 10, and within a month I built my first website. You can too.</p>
    <footer>
      <p>Tags: html, beginners, web-development</p>
    </footer>
  </article>
</body>
</html>
```

### Challenge 4. News Article with Figure

**Difficulty:** Medium

Build a semantic news article with: header (h1, time), two paragraphs, a figure with an image (use placeholder URL) and a figcaption, and an address tag for the reporter.

**Constraints:**

- Use article, header, time, figure, figcaption, address.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A complete news article layout with figure and reporter contact.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>News</title>
  <style>
    body { font-family: Georgia; max-width: 700px; margin: auto; padding: 20px; }
    figure img { max-width: 100%; }
    figcaption { font-style: italic; color: #666; }
  </style>
</head>
<body>
  <article>
    <header>
      <h1>India Tops International Coding Olympiad</h1>
      <p><time datetime="2026-04-10">10 April 2026</time></p>
    </header>
    <p>Team India won the International Coding Olympiad in Tokyo yesterday, securing 3 gold medals.</p>
    <p>The team of 4 students from Mumbai, Delhi, and Bangalore beat 50 other countries in a 3-day competition.</p>
    <figure>
      <img src="https://via.placeholder.com/600x300" alt="Team India winning the olympiad">
      <figcaption>Team India celebrating their win in Tokyo.</figcaption>
    </figure>
    <address>
      Reported by Rohan Kumar - <a href="mailto:rohan@news.com">rohan@news.com</a>
    </address>
  </article>
</body>
</html>
```

### Challenge 5. Landing Page with Sections

**Difficulty:** Medium

Build a landing page with a header (with nav), main containing 3 sections (About, Features, Contact), and a footer. Each section should have an h2.

**Constraints:**

- Use header, nav, main, section, footer.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A landing page with clearly divided thematic sections.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Landing Page</title>
  <style>
    body { font-family: Arial; margin: 0; }
    header, footer { background: #333; color: white; padding: 20px; }
    section { padding: 30px 20px; }
    section:nth-child(even) { background: #f5f5f5; }
    nav ul { list-style: none; display: flex; gap: 20px; padding: 0; }
    nav a { color: white; }
  </style>
</head>
<body>
  <header>
    <h1>SuperSite</h1>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section id="about">
      <h2>About Us</h2>
      <p>We build awesome stuff.</p>
    </section>
    <section id="features">
      <h2>Features</h2>
      <p>Fast, beautiful, and easy to use.</p>
    </section>
    <section id="contact">
      <h2>Contact</h2>
      <p>Email us at hello@supersite.com</p>
    </section>
  </main>
  <footer>
    <p>&copy; 2026 SuperSite</p>
  </footer>
</body>
</html>
```

### Challenge 6. Blog Home with Articles and Sidebar

**Difficulty:** Hard

Build a blog homepage with a header (nav), main containing 3 articles and an aside (sidebar with popular posts and author bio), and a footer. Style it so the aside sits beside the articles.

**Constraints:**

- Use all major semantic tags. Use flex or grid for layout.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A blog homepage with a main content area and a sidebar.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Blog</title>
  <style>
    body { font-family: Arial; margin: 0; }
    header, footer { background: #2c3e50; color: white; padding: 20px; }
    nav ul { list-style: none; padding: 0; display: flex; gap: 20px; }
    nav a { color: white; text-decoration: none; }
    main { display: flex; gap: 20px; padding: 20px; max-width: 1000px; margin: auto; }
    .articles { flex: 2; }
    aside { flex: 1; background: #f0f0f0; padding: 15px; height: fit-content; }
    article { background: white; border: 1px solid #ddd; padding: 15px; margin-bottom: 15px; border-radius: 8px; }
  </style>
</head>
<body>
  <header>
    <h1>My Blog</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <div class="articles">
      <article>
        <header>
          <h2>Post 1</h2>
          <time datetime="2026-04-10">10 April</time>
        </header>
        <p>First post.</p>
      </article>
      <article>
        <header>
          <h2>Post 2</h2>
          <time datetime="2026-04-08">8 April</time>
        </header>
        <p>Second post.</p>
      </article>
      <article>
        <header>
          <h2>Post 3</h2>
          <time datetime="2026-04-05">5 April</time>
        </header>
        <p>Third post.</p>
      </article>
    </div>
    <aside>
      <h3>Popular Posts</h3>
      <ul>
        <li><a href="#">HTML Guide</a></li>
        <li><a href="#">CSS Tips</a></li>
      </ul>
      <h3>About Author</h3>
      <p>Ananya is a teen developer from Pune.</p>
    </aside>
  </main>
  <footer>
    <p>&copy; 2026 My Blog</p>
  </footer>
</body>
</html>
```

### Challenge 7. Product Catalog Page

**Difficulty:** Hard

Build a product catalog: header with nav, main with a section 'Our Products' containing 4 articles (product cards). Each article has a figure (image), h3 (product name), p (description), p (price), and a button. Also add a footer.

**Constraints:**

- Use section for grouping, article for each card, figure for images.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A product catalog with 4 semantically correct product cards.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Products</title>
  <style>
    body { font-family: Arial; margin: 0; }
    header, footer { background: #1a1a2e; color: white; padding: 15px 20px; }
    .products { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; padding: 20px; }
    article { background: white; border: 1px solid #ddd; padding: 15px; border-radius: 8px; }
    figure { margin: 0; }
    figure img { width: 100%; border-radius: 5px; }
    button { background: #22c55e; color: white; border: none; padding: 8px 15px; cursor: pointer; border-radius: 4px; }
  </style>
</head>
<body>
  <header>
    <h1>Shop</h1>
    <nav>
      <a href="/" style="color:white">Home</a>
    </nav>
  </header>
  <main>
    <section>
      <h2 style="padding: 20px;">Our Products</h2>
      <div class="products">
        <article>
          <figure><img src="https://via.placeholder.com/200" alt="Product 1"></figure>
          <h3>Running Shoes</h3>
          <p>Comfortable for daily runs.</p>
          <p><strong>Rs 2499</strong></p>
          <button>Add to Cart</button>
        </article>
        <article>
          <figure><img src="https://via.placeholder.com/200" alt="Product 2"></figure>
          <h3>Backpack</h3>
          <p>Spacious and durable.</p>
          <p><strong>Rs 1299</strong></p>
          <button>Add to Cart</button>
        </article>
        <article>
          <figure><img src="https://via.placeholder.com/200" alt="Product 3"></figure>
          <h3>Headphones</h3>
          <p>Noise cancelling.</p>
          <p><strong>Rs 3999</strong></p>
          <button>Add to Cart</button>
        </article>
        <article>
          <figure><img src="https://via.placeholder.com/200" alt="Product 4"></figure>
          <h3>Water Bottle</h3>
          <p>Keeps water cold for 24 hours.</p>
          <p><strong>Rs 699</strong></p>
          <button>Add to Cart</button>
        </article>
      </div>
    </section>
  </main>
  <footer>
    <p>&copy; 2026 Shop</p>
  </footer>
</body>
</html>
```

### Challenge 8. Convert Div Soup to Semantic HTML

**Difficulty:** Hard

Take this div-based HTML and rewrite it as fully semantic HTML:
`Logo...links...Post 1Post 2AdsCopyright`

**Constraints:**

- Preserve the layout but use only semantic tags (no divs).

**Sample input:**

```
The div-based HTML above
```

**Sample output:**

```
Fully semantic version with header, nav, main, article, aside, footer.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<body>
  <header>
    <h1>Site Logo</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <article>
      <h2>Post 1</h2>
      <p>First post content.</p>
    </article>
    <article>
      <h2>Post 2</h2>
      <p>Second post content.</p>
    </article>
    <aside>
      <h3>Ads</h3>
      <p>Advertisement area.</p>
    </aside>
  </main>
  <footer>
    <p>&copy; 2026 My Site</p>
  </footer>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/semantic-html/*
