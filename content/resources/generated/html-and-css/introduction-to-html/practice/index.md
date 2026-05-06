---
title: "Practice: Introduction to HTML - The Language of the Web"
description: "58 practice problems for Introduction to HTML - The Language of the Web in HTML and CSS"
slug: introduction-to-html-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/introduction-to-html/practice
category: "HTML and CSS"
---
# Practice: Introduction to HTML - The Language of the Web

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] What does the following HTML render as?

```
Hello World
```

*Hint:* h1 is the biggest heading.

**Answer:** A large, bold heading that says **Hello World**.

The `` tag creates the largest heading level. Browsers display h1 text in a big, bold font by default. It is usually used for the main title of the page.

### Q2. [Easy] What does this HTML render as?

```
I love cricket.

I also love mathematics.

```

*Hint:* Each  creates a separate paragraph with space between them.

**Answer:** Two paragraphs on separate lines: 
I love cricket.
I also love mathematics.

Each `` element creates its own paragraph, and browsers automatically add vertical space between paragraphs. This is how you separate blocks of text.

### Q3. [Easy] Fix this broken tag:

```
This is a paragraph.
```

*Hint:* The closing tag needs a slash.

**Answer:** ```
This is a paragraph.

```

The closing tag of a paragraph is `` with a forward slash before the letter p. Without the slash, it is a second opening tag, and the browser does not know where the paragraph ends.

### Q4. [Easy] Write HTML for a simple profile card that shows the name 'Aarav Patel' as a big heading and the description 'I love coding' as a paragraph.

*Hint:* Use  for the name and  for the description.

**Answer:** ```
Aarav Patel
I love coding

```

The `` tag creates a big heading for the name. The `` tag creates a paragraph for the description. Both are closed properly with matching closing tags.

### Q5. [Easy] What does this render as?

```
Main Title
Sub Title
Section
```

*Hint:* h1 is biggest, h6 is smallest.

**Answer:** Three headings of decreasing size: a very large 'Main Title', a medium 'Sub Title', and a smaller 'Section'.

Heading tags go from `h1` (biggest) to `h6` (smallest). They form a visual hierarchy — h1 is the most important, h2 is less important, and so on. Browsers give each level a smaller default font size.

### Q6. [Easy] Rohan wrote this image tag but the alt text is wrong. Fix it:

```

```

*Hint:* Attribute values with spaces need quotes.

**Answer:** ```

```

When an attribute value contains a space, it must be wrapped in quotes. Without quotes, the browser thinks only the first word (`My`) is the alt value and the rest are extra broken attributes.

### Q7. [Easy] What does this HTML create?

```
[Click me](https://google.com)
```

*Hint:* is the anchor tag, used for links.

**Answer:** A clickable link with the blue underlined text 'Click me' that opens google.com when clicked.

The `` tag creates a hyperlink. The `href` attribute holds the destination URL. The text between the opening and closing tags is what the user sees and clicks on.

### Q8. [Easy] Write HTML to display an unordered list with three items: Apple, Mango, Banana.

*Hint:* Use  for the list and  for each item.

**Answer:** ```

  Apple
  Mango
  Banana

```

`` is an unordered (bulleted) list. Each item goes inside its own `` (list item) tag. Browsers automatically add bullet points before each item.

### Q9. [Easy] Ananya wrote this code but the headline will not show. What is wrong?

```
<!DOCTYPE html>

  Welcome to my page

```

*Hint:* Visible content belongs in a specific section.

**Answer:** Move the `` from inside `` into ``.

The `` section is only for metadata (title, meta tags, links to CSS files). All visible content like headings, paragraphs, images, and links must go inside ``.

### Q10. [Easy] What does this render as?

```
Line one.
Line two.

```

*Hint:* is a line break.

**Answer:** One paragraph with two lines:
Line one.
Line two.

`` is a self-closing tag that forces a line break inside a paragraph. Both lines are part of the same paragraph element but display on separate lines.

### Q11. [Easy] Write a complete HTML page (with DOCTYPE, html, head, body) that shows the heading 'My Hobbies' and a paragraph saying 'I like cricket and painting.'

*Hint:* Remember the standard structure: DOCTYPE, html, head (with title), body (with content).

**Answer:** ```
<!DOCTYPE html>

  Hobbies

  My Hobbies
  I like cricket and painting.

```

Every HTML page starts with `<!DOCTYPE html>`, then the `` wrapper, then `` for metadata (the title shown on the browser tab), and `` for visible content.

### Q12. [Easy] What does this render?

```

  Wake up
  Brush teeth
  Eat breakfast

```

*Hint:* is an ordered list.

**Answer:** A numbered list:
1. Wake up
2. Brush teeth
3. Eat breakfast

`` creates an ordered (numbered) list. The browser automatically adds 1, 2, 3 before each `` item. If you rearrange the items, the numbers update automatically.

### Q13. [Medium] Vikram wrote this link but it does not go anywhere when clicked. Fix it:

```
Visit Wikipedia
```

*Hint:* A link needs a destination.

**Answer:** ```
[Visit Wikipedia](https://www.wikipedia.org)
```

The `` tag needs an `href` attribute that specifies where the link goes. Without `href`, the tag is just coloured text that does nothing when clicked.

### Q14. [Medium] What does this HTML produce?

```
Recipe
Ingredients:

  Flour
  Sugar
  Milk

Mix well and bake.

```

*Hint:* Go element by element — heading, paragraph, list, horizontal rule, paragraph.

**Answer:** A heading 'Recipe', then 'Ingredients:', then a bulleted list of Flour, Sugar, Milk, then a horizontal line, then the text 'Mix well and bake.'

This combines a heading, a paragraph, a bulleted list, a horizontal rule (separator line), and another paragraph. Each element appears on the page in the order it is written in the HTML.

### Q15. [Medium] Write HTML for an image of a sunset that has the alt text 'Beautiful sunset at the beach' and uses the source 'sunset.jpg'.

*Hint:* is self-closing and needs src and alt attributes.

**Answer:** ```

```

The `` tag is self-closing (no closing tag). The `src` attribute is the image file and `alt` is a text description shown if the image fails to load and read by screen readers.

### Q16. [Medium] Neha saved a file with her HTML but double-clicking it opens Notepad instead of a browser. What is wrong?

*Hint:* Check the file extension.

**Answer:** The file was probably saved as `.txt` instead of `.html`. Rename the file so it ends with `.html` (for example `page.html`).

The file extension tells the operating system which program to open the file with. Only files ending in `.html` or `.htm` open in a browser by default. On Windows, you may need to enable 'File name extensions' in File Explorer to see the real extension.

### Q17. [Medium] What does this render?

```
Contact
Email me at [rohan@example.com](mailto:rohan@example.com)

```

*Hint:* The anchor tag is nested inside the paragraph.

**Answer:** A sub-heading 'Contact' followed by 'Email me at rohan@example.com' where the email address is a clickable link.

You can nest elements — the `` link is inside the `` paragraph. The `mailto:` prefix in the href tells the browser to open the user's email app when clicked.

### Q18. [Medium] Write HTML for a page that has the title 'My Dog' (shown on the browser tab), a heading 'Meet Buddy', and a paragraph describing the dog.

*Hint:* Use  inside  for the tab title and  inside  for the visible heading.

**Answer:** ```
<!DOCTYPE html>

  My Dog

  Meet Buddy
  Buddy is a golden retriever who loves playing fetch in the park.

```

The `` tag inside `` sets the text shown on the browser tab. This is different from ``, which shows as a visible heading on the page itself.

### Q19. [Medium] This list is broken. Fix it:

```

  Apple
  Mango
  Banana

```

*Hint:* Each item needs its own tag.

**Answer:** ```

  Apple
  Mango
  Banana

```

Items in a list must be wrapped in `` tags. Without ``, the items are just plain text and will not get bullet points or proper list formatting.

### Q20. [Medium] What does this code render?

```
Welcome
Welcome again
Welcome one more time
```

*Hint:* All three are h1 tags — what does that mean visually?

**Answer:** Three identical large headings stacked on top of each other: 'Welcome', 'Welcome again', 'Welcome one more time'.

HTML technically allows multiple `` tags and the browser will render them all as big headings. However, the best practice is to use only one `` per page (the main title), and use `` for sub-headings.

### Q21. [Medium] Write HTML for a simple profile card of 'Priya Sharma' that includes her name as a heading, her age as a paragraph, and a list of three hobbies: reading, painting, dancing.

*Hint:* Combine heading, paragraph, and unordered list tags.

**Answer:** ```
Priya Sharma
Age: 14

Hobbies

  Reading
  Painting
  Dancing

```

A profile card uses different tags for different kinds of information: the big name is an `h1`, the age is a `p`, and the hobbies are an `h2` sub-heading followed by a bulleted list.

### Q22. [Hard] What will the browser show for this code?

```
Hello
World
From HTML

```

*Hint:* creates line breaks inside the same paragraph.

**Answer:** One paragraph that looks like:
Hello
World
From HTML

All three words are inside a single `` element, but `` forces the text to break onto new lines without creating separate paragraphs. Use `` sparingly — for real paragraph breaks, use separate `` elements.

### Q23. [Hard] Vikram wrote this but the browser shows no image. Find all the bugs:

```

```

*Hint:* Check the attribute name and the quotes.

**Answer:** ```

```

Three bugs here: (1) `scr` is misspelled — should be `src`. (2) The filename is missing quotes. (3) The `alt` attribute is missing, which is required for accessibility and SEO. Always use `src`, quotes, and `alt`.

### Q24. [Hard] Write a complete HTML page for a mini 'About Me' website. It should have a title 'About Aarav', a main heading with the name, a paragraph about you, a sub-heading 'Favourite Subjects', an unordered list of three subjects, and a link to your school's website.

*Hint:* Use DOCTYPE, html, head (with title), and body (with all content).

**Answer:** ```
<!DOCTYPE html>

  About Aarav

  Aarav Gupta
  I am 13 years old and I love building things with HTML.

  Favourite Subjects
  
    Computer Science
    Mathematics
    Science
  
  Visit my school: [My School](https://www.myschool.in)

```

This is a real mini web page. It uses every tag from this chapter: DOCTYPE, html, head, title, body, h1, h2, p, ul, li, and a. Save it, open it in a browser, and you have your first website.

### Q25. [Hard] What is wrong with this output prediction: the developer expects 'Hello World' on one line, but it shows on two lines?

```
HelloWorld
```

*Hint:* h1 is a block-level element.

**Answer:** The `` is a block-level element, meaning it takes up the full width and creates a line break after it. So 'World' appears on the next line.

HTML elements are either block-level (like `h1`, `p`, `div`) or inline (like `a`, `span`, `img`). Block-level elements always start on a new line and push following content below. To keep text on one line, you would need to use inline elements or wrap everything in the same heading.

## Mixed Questions

### Q1. [Easy] What does this render?

```
About Me
```

*Hint:* h2 is a sub-heading.

**Answer:** A medium-sized bold heading saying 'About Me'.

`` is the second-level heading — smaller than `` but still prominent. It is used for section titles on a page.

### Q2. [Easy] Write HTML for a link that opens the Modern Age Coders website.

*Hint:* Use the  tag with href.

**Answer:** ```
[Modern Age Coders](https://learn.modernagecoders.com)
```

The `` tag needs an `href` attribute for the URL. The text between the opening and closing tags becomes the clickable link.

### Q3. [Easy] What does this render?

```
Item 1

Item 2

```

*Hint:* is a horizontal rule.

**Answer:** 'Item 1', then a horizontal line across the page, then 'Item 2'.

`` is a self-closing tag that draws a horizontal line — useful for separating sections visually.

### Q4. [Easy] Fix this:

```
Hello
```

*Hint:* Opening and closing tags must match.

**Answer:** ```
Hello
```

The opening tag is ``, so the closing tag must also be ``. Mixing `h1` and `h2` like this is invalid HTML.

### Q5. [Easy] Write HTML for three paragraphs introducing yourself, your age, and your city.

*Hint:* Use three separate  tags.

**Answer:** ```
My name is Ananya.

I am 12 years old.

I live in Mumbai.

```

Each piece of information is a separate paragraph, so each gets its own `` element. Browsers automatically add spacing between paragraphs.

### Q6. [Medium] What does this render?

```
Shop
Fruits
AppleMango
```

*Hint:* HTML ignores whitespace — the list still renders with bullets.

**Answer:** A big heading 'Shop', a smaller heading 'Fruits', then a bulleted list with Apple and Mango.

HTML collapses multiple spaces and ignores line breaks in your source code, so putting the list on a single line does not change the output. It is still a valid bulleted list.

### Q7. [Medium] Write HTML that shows an image named 'logo.png' with alt text 'Company Logo', followed by a heading 'Welcome', followed by a link to 'about.html' with the text 'Learn more'.

*Hint:* Combine img, h1, and a tags.

**Answer:** ```

Welcome
[Learn more](about.html)
```

Three elements in order: a self-closing image, a heading, and a link. The link uses a relative path `about.html`, which means a file in the same folder.

### Q8. [Medium] Rohan's page looks wrong. Find the problem:

```
<!DOCTYPE html>

  Hi

```

*Hint:* Something is missing at the end.

**Answer:** The closing `` tag is missing. Add it after ``.

Every opening tag needs a matching closing tag. The `` element wraps the entire document and must be closed with `` at the very end.

### Q9. [Medium] What does this render?

```

  Morning
  Afternoon
  Evening
  Night

```

*Hint:* is an ordered list.

**Answer:** A numbered list:
1. Morning
2. Afternoon
3. Evening
4. Night

`` generates automatic numbering for each ``. If you swap items, the numbers update automatically.

### Q10. [Medium] Write HTML for a news article layout: a title, the author's name in a smaller heading, a paragraph of content, and a horizontal line at the bottom.

*Hint:* Use h1 for title, h3 or h4 for author, p for content, and hr for the line.

**Answer:** ```
Local School Wins Robotics Contest
By Priya Sharma
Students from Delhi Public School won first prize at the national robotics contest held last week.

```

A typical news article layout: `h1` for the headline (biggest), `h3` for the byline (smaller), `p` for the article body, and `hr` to separate it from the next article.

### Q11. [Medium] Why does this list not have bullets?

```
One
Two
Three
```

*Hint:* List items must be inside a list container.

**Answer:** ```

  One
  Two
  Three

```

`` tags must be wrapped inside either a `` (unordered) or `` (ordered) list. Without the wrapper, the browser does not know how to format them as a list.

### Q12. [Hard] What does this render?

```

  Fruits
    
      Apple
      Mango
    
  
  Vegetables

```

*Hint:* Lists can be nested inside other lists.

**Answer:** A bulleted list where 'Fruits' has an indented sub-list with Apple and Mango, and then 'Vegetables' as the second main item.

HTML lists can be nested. A `` inside another `` creates a sub-list that the browser indents. This is how you build multi-level menus and outlines.

### Q13. [Hard] Write a complete HTML page for a restaurant menu: title 'Tasty Bites', heading 'Our Menu', a sub-heading 'Starters' with an unordered list of three starters, a sub-heading 'Main Course' with an ordered list of three main courses, and a horizontal line at the bottom.

*Hint:* Combine everything you know: DOCTYPE, html, head, body, h1, h2, ul, ol, li, hr.

**Answer:** ```
<!DOCTYPE html>

  Tasty Bites

  Our Menu
  Starters
  
    Paneer Tikka
    Veg Spring Rolls
    Tomato Soup
  
  Main Course
  
    Butter Chicken
    Dal Makhani
    Biryani
  
  

```

A real-world menu structure: the page title is in the tab, the main heading is h1, each section has its own h2, starters are a bulleted list, main courses are a numbered list, and there is a horizontal rule at the bottom.

### Q14. [Hard] What are the two problems with this link?

```
Click
```

*Hint:* Look at the href value and the closing tag.

**Answer:** ```
[Click](https://google.com)
```

Two bugs: (1) The href value should be in quotes and usually starts with `https://` for external links. (2) The closing tag `` is missing the forward slash — it should be ``.

### Q15. [Hard] Write HTML for a blog post with a heading, an image at the top (with alt text), two paragraphs of content, a sub-heading 'Conclusion', one more paragraph, and a link at the bottom that says 'Read more articles'.

*Hint:* Combine h1, img, p, h2, and a.

**Answer:** ```
My First Trip to the Hills

Last weekend, my family and I went to the hills for a short trip.

The weather was perfect and the views were amazing.

Conclusion
It was one of the best trips I have ever had.

[Read more articles](articles.html)
```

A typical blog post structure with a title, hero image, body paragraphs, a conclusion section, and a navigation link at the bottom. Each element has a clear purpose.

## Multiple Choice Questions

### Q1. [Easy] What does HTML stand for?

**B is correct.** HTML stands for HyperText Markup Language. 'HyperText' refers to text with clickable links, and 'Markup Language' means we add tags to mark the meaning of content.

### Q2. [Easy] Who invented HTML?

**B is correct.** Tim Berners-Lee invented HTML in 1991 while working at CERN. He also created the first web browser and web server, which together started the World Wide Web.

### Q3. [Easy] Which tag creates the largest heading?

**C is correct.** `` is the largest heading. Heading tags go from `` (biggest) to `` (smallest). `` is not a valid HTML tag.

### Q4. [Easy] Which tag is used for a paragraph?

**C is correct.** The `` tag creates a paragraph. ``, ``, and `` are not valid HTML tags.

### Q5. [Easy] What file extension do HTML files use?

**C is correct.** HTML files must end with `.html` (or sometimes `.htm`). This tells the computer to open the file with a web browser, not a text editor.

### Q6. [Easy] Which tag creates a line break?

**B is correct.** `` creates a line break. It is a self-closing tag with no content inside. The other options are not valid HTML tags.

### Q7. [Easy] What is HTML?

**B is correct.** HTML is a markup language — it describes the structure of content using tags. It is not a programming language because it cannot make decisions, do math, or loop. CSS and JavaScript add style and logic.

### Q8. [Easy] Which tag creates a clickable link?

**C is correct.** The `` tag (anchor tag) creates a hyperlink. The `href` attribute inside it specifies the destination. `` is a different tag used in the head for linking to CSS files.

### Q9. [Medium] Which tag does NOT need a closing tag?

**B is correct.** `` is a self-closing (void) tag — it has no content between opening and closing. Other self-closing tags include ``, ``, and ``.

### Q10. [Medium] Where should the visible content of the page go?

**B is correct.** All visible content — headings, paragraphs, images, links, lists — goes inside ``. The `` is for metadata like the title and character encoding.

### Q11. [Medium] Which attribute specifies the destination URL of a link?

**C is correct.** The `href` attribute on an `` tag holds the URL the link goes to. `src` is used for images and scripts, not links.

### Q12. [Medium] What is an HTML element?

**C is correct.** An element consists of the opening tag, the content inside, and the closing tag. For example, `Hello` is one element. Self-closing tags like `` are also elements, just without inner content.

### Q13. [Medium] What is the correct way to add an image?

**C is correct.** The correct tag is `` with `src` for the source and `alt` for the alternative text. `` is not a valid tag, and `href` is for links, not images.

### Q14. [Medium] What does the DOCTYPE declaration do?

**B is correct.** `<!DOCTYPE html>` at the very top tells the browser to render the page using the HTML5 standard. Without it, browsers may fall back to an older rendering mode.

### Q15. [Medium] Which tag creates a numbered list?

**C is correct.** `` creates an ordered (numbered) list. `` creates an unordered (bulleted) list. Both contain `` items.

### Q16. [Medium] Which of these is an attribute?

**B is correct.** An attribute is a name-value pair written inside an opening tag, like `href="page.html"`. `` is a tag, 'Hello World' is content, and `` is a closing tag.

### Q17. [Hard] What version of HTML is currently standard?

**C is correct.** HTML5, released in 2014, is the current standard. HTML5 added native support for audio, video, canvas drawings, and many other features. HTML 6 does not exist yet.

### Q18. [Hard] Which of these statements is TRUE about HTML?

**C is correct.** HTML is very forgiving — if you misspell a tag or forget a closing tag, the browser usually tries to fix it. This makes HTML great for learning. HTML needs no compiler (A), is not strictly case-sensitive for tags (B), and cannot do math (D).

### Q19. [Hard] What is the DOM?

**C is correct.** DOM stands for Document Object Model. It is the tree-like structure the browser builds in memory from your HTML. JavaScript can read and change the DOM to make pages interactive.

### Q20. [Hard] In which year was HTML invented?

**B is correct.** HTML was invented by Tim Berners-Lee in 1991 at CERN. 2014 (D) is when HTML5 was officially standardised, but HTML itself is much older.

## Coding Challenges

### Challenge 1. My First Profile Card

**Difficulty:** Easy

**Constraints:**

- Must be a complete HTML document with DOCTYPE, html, head, and body. Use h1, p, ul, and li tags.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>My Profile</title>
</head>
<body>
  <h1>Aarav</h1>
  <p>I am learning HTML</p>
  <ul>
    <li>Cricket</li>
    <li>Painting</li>
    <li>Reading</li>
  </ul>
</body>
</html>
```

Every HTML page needs DOCTYPE, html, head (with title), and body. Inside body, we use `h1` for the name, `p` for the introduction, and a `ul` with `li` items for the list of hobbies.

### Challenge 2. Simple Recipe Page

**Difficulty:** Easy

**Constraints:**

- Use h1, h2, ul, ol, and li tags.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Chocolate Milkshake</title>
</head>
<body>
  <h1>Chocolate Milkshake</h1>
  <h2>Ingredients</h2>
  <ul>
    <li>2 glasses of milk</li>
    <li>3 spoons of chocolate powder</li>
    <li>1 scoop of vanilla ice cream</li>
  </ul>
  <h2>Steps</h2>
  <ol>
    <li>Pour the milk into a blender</li>
    <li>Add the chocolate powder and ice cream</li>
    <li>Blend for 30 seconds and serve cold</li>
  </ol>
</body>
</html>
```

A recipe has two different kinds of information: ingredients (order does not matter, so use `ul`) and steps (order matters, so use `ol`). Each section gets its own `h2` sub-heading.

### Challenge 3. My Favourite Books Page

**Difficulty:** Medium

**Constraints:**

- Use h1 for the main heading, h2 for each book title, and p for author and description.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>My Books</title>
</head>
<body>
  <h1>My Favourite Books</h1>
  <h2>Harry Potter</h2>
  <p>Author: J.K. Rowling</p>
  <p>A young wizard discovers his magical powers and goes to a wizard school.</p>
  <h2>The Jungle Book</h2>
  <p>Author: Rudyard Kipling</p>
  <p>A boy raised by wolves has amazing adventures in an Indian jungle.</p>
  <h2>Panchatantra</h2>
  <p>Author: Vishnu Sharma</p>
  <p>A collection of wise animal stories that teach life lessons.</p>
</body>
</html>
```

This demonstrates a repeating pattern — one main heading with three sub-sections. Each sub-section has the same structure (h2 + two paragraphs), which is how real web pages are organised.

### Challenge 4. Navigation With Links

**Difficulty:** Medium

**Constraints:**

- Use h1 for the heading and  with href for links. Each link should be wrapped in its own .

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>My Links</title>
</head>
<body>
  <h1>Welcome</h1>
  <p><a href="https://www.google.com">Visit Google</a></p>
  <p><a href="https://www.wikipedia.org">Visit Wikipedia</a></p>
  <p><a href="https://learn.modernagecoders.com">Modern Age Coders</a></p>
</body>
</html>
```

Each link is wrapped in its own paragraph so they appear on separate lines. The `href` attribute holds the URL, and the text between the opening and closing `` tags is what the user clicks.

### Challenge 5. Image Gallery Layout

**Difficulty:** Medium

**Constraints:**

- Use h1, h2, img (with src and alt), and p tags.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>My Gallery</title>
</head>
<body>
  <h1>My Gallery</h1>
  <h2>Sunset at the Beach</h2>
  <img src="https://via.placeholder.com/400x250" alt="Orange sunset over the ocean">
  <p>This photo was taken during our family trip to Goa last summer.</p>
  <h2>Snowy Mountains</h2>
  <img src="https://via.placeholder.com/400x250" alt="Mountains covered in snow">
  <p>We visited the Himalayas in December and saw real snow for the first time.</p>
  <h2>City Skyline</h2>
  <img src="https://via.placeholder.com/400x250" alt="City buildings at night">
  <p>The beautiful night lights of Mumbai from the top of a tall building.</p>
</body>
</html>
```

This is how real image galleries are structured — a main heading, and repeating sections that each contain a title, image, and description. The alt text is important for accessibility.

### Challenge 6. Mini Blog Post

**Difficulty:** Hard

**Constraints:**

- Use h1, h2, p, ol, li, hr, and a tags. Everything should be inside body.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>My First Blog Post</title>
</head>
<body>
  <h1>My First Week Learning HTML</h1>
  <p>By Priya Sharma</p>
  <p>Last Monday I started learning HTML at Modern Age Coders. I was nervous at first because I had never written any code before.</p>
  <p>By the end of the week, I was building my own web pages and sharing them with my family. It was the best week of my life so far.</p>
  <h2>What I Learned</h2>
  <ol>
    <li>How to create a complete HTML page from scratch</li>
    <li>The difference between block and inline elements</li>
    <li>How to use images, lists, and links</li>
  </ol>
  <hr>
  <a href="index.html">Back to Home</a>
</body>
</html>
```

This is a real blog post structure that you could actually publish. It uses almost every tag from this chapter: headings for hierarchy, paragraphs for content, an ordered list for enumerated points, a horizontal rule for visual separation, and a link for navigation.

### Challenge 7. School Event Invitation

**Difficulty:** Hard

**Constraints:**

- Use DOCTYPE, html, head, body, h1, h2, p, ol, ul, li, and a.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Annual Science Fair</title>
</head>
<body>
  <h1>Annual Science Fair 2026</h1>
  <p>Date: 15 August 2026</p>
  <p>Venue: School Auditorium, Main Building</p>
  <h2>Schedule</h2>
  <ol>
    <li>9:00 AM - Opening Ceremony</li>
    <li>10:00 AM - Student Project Exhibitions</li>
    <li>2:00 PM - Prize Distribution</li>
  </ol>
  <h2>Special Guests</h2>
  <ul>
    <li>Dr. Ananya Rao - Senior Scientist</li>
    <li>Mr. Rohan Mehta - Robotics Engineer</li>
    <li>Ms. Kavya Iyer - Science Teacher of the Year</li>
  </ul>
  <a href="register.html">Register Here</a>
</body>
</html>
```

This is a practical event invitation you could actually use. Notice how each tag has a specific purpose: headings group information, paragraphs show single facts, ordered lists show steps in order, and unordered lists show items where order does not matter.

### Challenge 8. Complete Portfolio Home Page

**Difficulty:** Hard

**Constraints:**

- Must include DOCTYPE, html, head (with title), body, h1, h2, p, img, ol, li, a (with mailto:), hr.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>My Portfolio</title>
</head>
<body>
  <h1>Neha Verma</h1>
  <p>Hi, I am Neha. I am a 14-year-old student from Bangalore who loves building things with HTML and CSS.</p>
  <img src="https://via.placeholder.com/200x200" alt="Photo of Neha">
  <h2>Projects</h2>
  <ol>
    <li>Personal Blog Website</li>
    <li>Recipe Collection Page</li>
    <li>Favourite Books Gallery</li>
  </ol>
  <h2>Contact</h2>
  <p>You can email me at <a href="mailto:neha@example.com">neha@example.com</a></p>
  <p>I would love to hear from you if you have any ideas or feedback.</p>
  <hr>
  <p>Made with HTML by Neha Verma</p>
</body>
</html>
```

This is a real portfolio page using every concept from the chapter. The `mailto:` prefix in the href makes the link open the user's email app. The footer paragraph at the bottom is separated by a horizontal rule for visual clarity.

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/introduction-to-html/*
