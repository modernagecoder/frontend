---
title: "Practice: Headings, Paragraphs, and Text Formatting - Making Your Words Beautiful"
description: "58 practice problems for Headings, Paragraphs, and Text Formatting - Making Your Words Beautiful in HTML and CSS"
slug: headings-paragraphs-and-text-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/headings-paragraphs-and-text/practice/
category: "HTML and CSS"
---
# Practice: Headings, Paragraphs, and Text Formatting - Making Your Words Beautiful

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] What is the output of this text markup?

```
I love **chocolate** cake.

```

*Hint:* strong makes text bold.

**Answer:** A paragraph: 'I love **chocolate** cake.' with the word 'chocolate' shown in bold.

The `` tag makes the enclosed text appear bold and also marks it as important for screen readers and search engines.

### Q2. [Easy] What does this render?

```
Press *any* key to continue.

```

*Hint:* em is for emphasised text.

**Answer:** A paragraph: 'Press *any* key to continue.' with the word 'any' in italic.

`` emphasises text, displayed in italic by default. It tells screen readers to stress the word when reading aloud.

### Q3. [Easy] Write HTML for a recipe heading with a subheading. Main heading: 'Mango Lassi'. Subheading: 'The perfect summer drink'.

*Hint:* Use h1 for the main heading and h2 for the subheading.

**Answer:** ```
Mango Lassi
The perfect summer drink
```

A recipe page has a main title (h1) for the recipe name and a secondary heading (h2) for the tagline or description.

### Q4. [Easy] What is the difference between these two lines?

```
Hello
Hello
```

*Hint:* h1 is bigger than h3.

**Answer:** Both say 'Hello', but h1 is displayed as a very large heading, and h3 is a medium-sized heading.

Heading tags h1-h6 have different default font sizes — h1 is the largest, h6 is the smallest. Each level signifies a different level of importance.

### Q5. [Easy] Rohan wanted to highlight a word. Why does this not work?

```
I love mangoes.

```

*Hint:* There is a specific HTML tag for highlighting.

**Answer:** ```
I love mangoes.

```

There is no `` tag in HTML. Use `` to highlight text with a yellow background.

### Q6. [Easy] What does this produce?

```
Water is H2O.

```

*Hint:* sub is for subscript (below the line).

**Answer:** A paragraph: 'Water is H2O.' with the '2' shown smaller and below the baseline.

`` creates subscript text — smaller and positioned below the baseline. It is commonly used in chemical formulas like H2O.

### Q7. [Easy] What is the output?

```
The area of a square is x2.

```

*Hint:* sup is for superscript (above the line).

**Answer:** A paragraph: 'The area of a square is x2.' with the '2' shown smaller and above the baseline.

`` creates superscript text — smaller and positioned above the baseline. It is commonly used in math expressions like x squared (x^2).

### Q8. [Easy] Write HTML for a paragraph that says 'Press Ctrl+S to save your work' where 'Ctrl' and 'S' are styled as keyboard keys.

*Hint:* Use the  tag for keyboard input.

**Answer:** ```
Press Ctrl+S to save your work

```

The `` tag represents keyboard input. It is typically shown in a monospace font, making keyboard shortcuts stand out.

### Q9. [Easy] Why does this show 'Copyright copy 2026' instead of the copyright symbol?

```
Copyright &copy 2026

```

*Hint:* Entity codes need something at the end.

**Answer:** ```
Copyright &copy; 2026

```

HTML entity codes must end with a semicolon. `&copy` (without semicolon) is invalid — use `&copy;` to display the copyright symbol.

### Q10. [Easy] What does this render?

```
Old price: Rs 500 New price: Rs 350

```

*Hint:* del is strikethrough, ins is inserted (underlined).

**Answer:** A paragraph showing 'Old price: Rs 500 New price: Rs 350' with the old price crossed out and the new price underlined.

`` marks deleted content (shown with strikethrough) and `` marks inserted content (shown with underline). Commonly used for showing discounts or edits.

### Q11. [Easy] Write HTML for a paragraph that highlights the word 'important' using the mark tag.

*Hint:* Use important.

**Answer:** ```
This message is important.

```

The `` tag highlights text with a yellow background by default. Use it to draw attention to specific words.

### Q12. [Medium] What does this render?

```
Hello        World

```

*Hint:* HTML treats whitespace specially.

**Answer:** A paragraph: 'Hello World' (only a single space between 'Hello' and 'World').

HTML collapses all whitespace (multiple spaces, tabs, newlines) into a single space. To force multiple spaces, use ` ` entities or CSS.

### Q13. [Medium] Ananya has this code but wants 'Dr. Priya' to stay on the same line (currently it wraps). Fix it:

```
Thank you Dr. Priya for the guidance.

```

*Hint:* Use a non-breaking space.

**Answer:** ```
Thank you Dr. Priya for the guidance.

```

A non-breaking space ` ` prevents the browser from breaking the line at that point. It keeps 'Dr.' and 'Priya' together as one unit.

### Q14. [Medium] Write HTML for a blockquote containing a quote by Vikram: 'Hard work beats talent when talent does not work hard.'

*Hint:* Use  with a  inside.

**Answer:** ```

  Hard work beats talent when talent does not work hard.

  - Vikram

```

The `` tag is for quoting blocks of text. Paragraphs inside get indented by default. The author attribution goes in a second paragraph.

### Q15. [Medium] What does this render?

```
The `console.log()` function prints output.

```

*Hint:* code shows text in monospace font.

**Answer:** A paragraph where 'console.log()' is shown in a monospace (typewriter-style) font.

The `` tag is used to display inline computer code. Browsers render it in a monospace font by default, making code stand out from regular text.

### Q16. [Medium] Why does this page have 3 h1 tags and what should be done?

```
About
Hobbies
Contact
```

*Hint:* Best practice says only one h1 per page.

**Answer:** ```
About Me
Hobbies
Contact
```

Only one `` should appear per page — it represents the main topic. Sub-sections should use ``, and sub-sub-sections should use ``, and so on.

### Q17. [Medium] What does this render?

```
To show  on the page, use < and >.

```

*Hint:* Think about how entities work.

**Answer:** A paragraph: 'To show <p> on the page, use < and >.'

`<` renders as `<`, `>` renders as `>`, and `&` renders as `&`. So `<` renders as `<` (the text form).

### Q18. [Medium] Write HTML for a paragraph that combines bold, italic, and highlighted text: make 'Sale' bold, 'today' highlighted, and 'limited time' italic.

*Hint:* Combine strong, mark, and em.

**Answer:** ```
**Sale** today only - *limited time* offer!

```

You can combine multiple inline formatting tags freely. Each tag applies its styling to its own content.

### Q19. [Medium] Priya wrote this address but it shows on one line. Fix it so the city is on a new line:

```
123 Park Street Mumbai 400001

```

*Hint:* Use br for a line break inside the same paragraph.

**Answer:** ```
123 Park Street
Mumbai 400001

```

`` creates a line break inside a paragraph without starting a new paragraph. It is perfect for addresses, poems, and lyrics.

### Q20. [Medium] Write HTML for a chemistry equation: 'The formula for water is H2O and carbon dioxide is CO2' where the 2 is subscript.

*Hint:* Use .

**Answer:** ```
The formula for water is H2O and carbon dioxide is CO2

```

In chemical formulas, the numbers are written as subscript. The `` tag lowers the number and makes it smaller.

### Q21. [Medium] What does this render?

```
Copyright &copy; 2026 Modern Age Coders

```

*Hint:* &copy; is the copyright symbol,   is a non-breaking space.

**Answer:** A paragraph: 'Copyright &copy; 2026 Modern Age Coders' where 'Modern Age Coders' will never wrap in the middle.

`&copy;` renders the copyright symbol. ` ` is a non-breaking space that keeps words together even if the line would wrap.

### Q22. [Hard] Neha wanted to show HTML code on her page, but the browser is rendering it instead of displaying it as text. How does she fix this?

```
To make a bold word, use **hello**

```

*Hint:* She needs to escape the < and > characters.

**Answer:** ```
To make a bold word, use **hello**

```

To display HTML tags as text (not have the browser interpret them), replace `<` with `<` and `>` with `>`. Otherwise the browser treats them as real tags and renders them.

### Q23. [Hard] Write a complete HTML page for a blog post: title 'My First HTML Lesson', one h1, one h2, two paragraphs with a mix of strong and em formatting, a blockquote, and a horizontal rule separator.

*Hint:* Combine boilerplate with h1, h2, p, strong, em, blockquote, and hr.

**Answer:** ```
<!DOCTYPE html>

  
  My First HTML Lesson

  My First HTML Lesson
  What I Learned Today
  Today I learned about **headings** and **paragraphs**.

  HTML is *really* fun once you understand the basics.

  
  
    Learning is the only thing the mind never exhausts.

    - Leonardo da Vinci

  

```

A real blog post structure: main heading (h1), section heading (h2), paragraphs with semantic formatting, a visual separator (hr), and a blockquote for a related quote.

### Q24. [Hard] What does this render?

```
x2 + y2 = r2

```

*Hint:* sup creates superscript.

**Answer:** A paragraph: 'x2 + y2 = r2' (the Pythagoras-style circle equation).

`` makes text superscript. This is commonly used for math exponents like x squared, y squared, and r squared.

### Q25. [Hard] Aarav's fractions look weird. He wants '1/2' but sees '12'. Fix it:

```
Add 12 cup of milk.

```

*Hint:* He needs a visible division symbol or a slash.

**Answer:** ```
Add 1&frasl;2 cup of milk.

<!-- Or simpler: -->
Add 1/2 cup of milk.

```

There is no divider between the superscript 1 and subscript 2. Add a slash, the `&frasl;` (fraction slash) entity, or just use plain '1/2'. HTML also has entities like `&frac12;` for common fractions.

## Mixed Questions

### Q1. [Easy] What does this render?

```
*Section One*
```

*Hint:* em is italic, inside an h2 heading.

**Answer:** A medium heading 'Section One' shown in italic.

You can nest inline tags like `` inside block-level tags like ``. The heading becomes italic because of the em tag.

### Q2. [Easy] Write HTML for a paragraph with the word 'warning' highlighted and 'do not skip' in bold.

*Hint:* Use mark and strong.

**Answer:** ```
Warning: **do not skip** this step.

```

You can combine multiple inline tags within one paragraph to highlight different kinds of text in different ways.

### Q3. [Easy] Fix the entity in this code:

```
5 &lt 10

```

*Hint:* Missing a character at the end.

**Answer:** ```
5 < 10

```

Every HTML entity must end with a semicolon. `&lt` without the semicolon may not work. Always write `<` with the semicolon.

### Q4. [Easy] How many visible lines appear on the page?

```
Line 1
Line 2

Line 3

```

*Hint:* Count the line breaks and paragraphs.

**Answer:** Three lines: 'Line 1', 'Line 2' (inside the same paragraph as Line 1 but on a new line due to br), and 'Line 3' (a separate paragraph).

The br creates a line break inside the first paragraph, so Lines 1 and 2 are on separate lines within one paragraph. Line 3 is a separate paragraph with extra space above it.

### Q5. [Easy] Write a heading and a paragraph. Heading: 'Fun Facts'. Paragraph: 'Did you know? Elephants are the largest land animals.'

*Hint:* Use h2 or h1 for the heading and p for the paragraph.

**Answer:** ```
Fun Facts
Did you know? Elephants are the largest land animals.

```

A simple pattern: a heading followed by a paragraph. This is the most common content structure on the web.

### Q6. [Medium] What does this render?

```
a1 + a2 + ... + an

```

*Hint:* sub makes small text below the baseline.

**Answer:** A paragraph showing a mathematical sum: 'a1 + a2 + ... + an' with subscript numbers.

Subscript is used to show index numbers in sequences, like a_1, a_2, and so on. It is common in math and chemistry.

### Q7. [Medium] Write HTML for showing the chemical equation 'H2O + CO2 = H2CO3' with proper subscripts.

*Hint:* Each number should be wrapped in .

**Answer:** ```
H2O + CO2 = H2CO3

```

In chemistry, all numbers that show atom counts go in `` tags so they appear as subscript.

### Q8. [Medium] Rohan wants the text 'Click here' to be small but stands out. He wrote:

```
**Click here**
```

What is wrong (or right)?

*Hint:* Think about nesting order.

**Answer:** Actually, this is valid HTML. Both orders work: `...` or `...`. The text will be small and bold.

You can nest formatting tags freely — the order does not matter for the visual result. Both `strong` and `small` are inline tags and can be combined in either order.

### Q9. [Medium] What does this render visually?

```

  Never give up.

```

*Hint:* Blockquotes are usually indented.

**Answer:** An indented paragraph saying 'Never give up.' — usually with some left padding to visually separate it from regular paragraphs.

Browsers indent blockquotes by default to visually set them apart. This makes it clear that the content is quoted from another source.

### Q10. [Medium] Write HTML to display: 'Press Ctrl+C to copy, Ctrl+V to paste' with all keyboard keys using the kbd tag.

*Hint:* Each key gets its own .

**Answer:** ```
Press Ctrl+C to copy, Ctrl+V to paste

```

Each keyboard key is wrapped in its own `` tag so each key looks distinct and monospace.

### Q11. [Medium] Ananya's text has weird spacing — she wants to force 5 spaces but they all collapse. Fix it:

```
Hello     World

```

*Hint:* Use non-breaking space entities.

**Answer:** ```
Hello     World

```

HTML collapses multiple spaces to one. Use ` ` (non-breaking space) multiple times to force specific number of spaces. For real layout though, use CSS.

### Q12. [Hard] Write a complete HTML page that displays a math formula: 'The distance formula is d = square-root of ((x2-x1) squared + (y2-y1) squared)' using proper subscript and superscript.

*Hint:* Use sub for variable indices and sup for powers.

**Answer:** ```
<!DOCTYPE html>

  
  Math

  Distance Formula
  d = &radic;((x2 - x1)2 + (y2 - y1)2)

```

The distance formula uses subscripts for coordinate indices (x1, x2, y1, y2) and superscripts for the power of 2. The `&radic;` entity is the square root symbol.

### Q13. [Hard] This page has an h1 followed by another h1. Why is this a problem and how do you fix it?

```
Welcome
Hello visitor.

About Me
I am 14 years old.

```

*Hint:* SEO best practices.

**Answer:** ```
Welcome
Hello visitor.

About Me
I am 14 years old.

```

A page should have only one h1 (the main topic). Sub-sections should use h2 and below. Multiple h1 tags confuse search engines and accessibility tools.

### Q14. [Hard] Write HTML to show a shopping discount. Use del for old price, ins for new price, mark to highlight the discount percentage, and strong for the product name. Example: 'Samsung Phone - old Rs 30000, new Rs 25000 - 17% off'.

*Hint:* Combine del, ins, mark, and strong in one paragraph.

**Answer:** ```
**Samsung Phone** - Rs 30000 Rs 25000 - 17% off

```

This combines all four tags: strong for product importance, del for the crossed-out old price, ins for the new underlined price, and mark to highlight the discount.

### Q15. [Hard] What happens when you write this code in HTML?

```
**Hello**

```

*Hint:* The entities are doing their job.

**Answer:** A paragraph showing the literal text: '<strong>Hello</strong>' — not bold, just the tag characters shown as text.

The entity codes `<` and `>` render as `<` and `>` respectively. So the browser shows the text as if it were typed, without interpreting it as an HTML tag.

## Multiple Choice Questions

### Q1. [Easy] Which tag creates the biggest heading?

**C is correct.** `` is the largest heading. Heading tags go from h1 (biggest) to h6 (smallest).

### Q2. [Easy] Which tag creates a paragraph?

**B is correct.** The `` tag creates a paragraph. Browsers automatically add vertical space between paragraphs.

### Q3. [Easy] Which tag creates a line break?

**C is correct.** `` creates a line break. It is a self-closing tag and does not need a closing tag.

### Q4. [Easy] Which tag draws a horizontal line?

**B is correct.** `` (horizontal rule) draws a horizontal line across the page, useful for separating sections.

### Q5. [Easy] Which tag is for important text (shown bold with semantic meaning)?

**C is correct.** `` is the semantic tag for important text. It is bold and also announced with emphasis by screen readers. `` just makes text bold without semantic meaning.

### Q6. [Easy] Which tag creates highlighted (yellow background) text?

**B is correct.** `` highlights text, shown with a yellow background by default.

### Q7. [Easy] Which entity displays the copyright symbol?

**C is correct.** `&copy;` renders as the copyright symbol (©). All HTML entities start with `&` and end with `;`.

### Q8. [Easy] Which tag is for subscript (text below the line)?

**A is correct.** `` creates subscript, used in chemical formulas like H2O. `` is for superscript, used in math like x^2.

### Q9. [Medium] How many  tags should a page typically have?

**B is correct.** Best practice is to use only ONE `` per page, representing the main topic. Use h2 and h3 for sub-sections.

### Q10. [Medium] What does  stand for?

**B is correct.** `` stands for emphasis. It makes text italic and signals to screen readers that the word should be stressed.

### Q11. [Medium] What happens if you type multiple spaces between words in HTML?

**B is correct.** HTML collapses multiple spaces, tabs, and newlines into a single space. Use ` ` for forced spaces or CSS for layout.

### Q12. [Medium] Which entity is used for a non-breaking space?

**B is correct.** ` ` (non-breaking space) forces a space that will not be collapsed and prevents line wrapping at that point.

### Q13. [Medium] Which tag is for quoted blocks of text?

**B is correct.** `` is for quoting blocks of text from another source. Browsers indent it by default. `` is for short inline quotes.

### Q14. [Medium] What is the difference between  and ?

**B is correct.** Both look bold, but `` carries semantic meaning (this is important), while `` just adds visual bold styling. Prefer `` for accessibility.

### Q15. [Medium] Which entity represents the less-than symbol (<)?

**B is correct.** `<` renders as the less-than symbol. Since < is used in HTML tags, you need this entity to display it as text.

### Q16. [Hard] Which tag is best for showing keyboard shortcuts?

**B is correct.** `` is the semantic tag for keyboard input. It is typically shown in monospace font to mimic keys.

### Q17. [Hard] What does H2SO4 represent in HTML?

**B is correct.** Using `` tags lets you write chemical formulas correctly. H2SO4 is sulphuric acid with the numbers as subscripts.

### Q18. [Hard] Which statement is TRUE about HTML whitespace?

**B is correct.** HTML collapses runs of whitespace (spaces, tabs, newlines) into a single space when rendered. For exact whitespace, use `` or CSS.

### Q19. [Hard] Which tag should be used for short inline code?

**C is correct.** `` is for inline computer code, displayed in monospace font. `` is for preformatted blocks where whitespace matters.

### Q20. [Hard] What does the  tag display by default?

**D is correct.** `` marks deleted text and is shown with a strikethrough line by default. Its opposite is `` (inserted, shown underlined).

## Coding Challenges

### Challenge 1. Proper Heading Hierarchy

**Difficulty:** Easy

**Constraints:**

- Must have exactly one h1, multiple h2s, and proper HTML boilerplate.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My School</title>
</head>
<body>
  <h1>Modern Public School</h1>
  <h2>About</h2>
  <p>Modern Public School was founded in 1985 and is one of the top schools in Delhi.</p>
  <h2>Facilities</h2>
  <p>We have a large library, a science lab, a computer lab, and a big playground.</p>
</body>
</html>
```

Proper heading hierarchy: one h1 for the school name (the main topic), and h2 for each major section. This structure is SEO-friendly and accessible.

### Challenge 2. Formatted Paragraph

**Difficulty:** Easy

**Constraints:**

- Must use strong, em, and mark in a single paragraph with proper HTML5 boilerplate.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Safety</title>
</head>
<body>
  <h1>Safety First</h1>
  <p><mark>Warning:</mark> Always <strong>look both ways</strong> before crossing the road. Never cross <em>without checking</em> for vehicles.</p>
</body>
</html>
```

This paragraph uses mark to highlight 'Warning:', strong to emphasise the important action 'look both ways', and em to stress the word 'without checking'. Each tag has a clear semantic purpose.

### Challenge 3. Chemistry Formulas Page

**Difficulty:** Medium

**Constraints:**

- Use  for every number in the chemical formulas.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Common Chemicals</title>
</head>
<body>
  <h1>Common Chemicals</h1>
  <p>Water: H<sub>2</sub>O</p>
  <p>Carbon Dioxide: CO<sub>2</sub></p>
  <p>Sulphuric Acid: H<sub>2</sub>SO<sub>4</sub></p>
</body>
</html>
```

Each number in a chemical formula represents how many atoms of that element are in the molecule. Subscript makes it clear they are not regular numbers.

### Challenge 4. Math Equations Page

**Difficulty:** Medium

**Constraints:**

- Use  for every exponent.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Famous Equations</title>
</head>
<body>
  <h1>Famous Equations</h1>
  <p>Pythagoras theorem: a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></p>
  <p>Area of a circle: A = &pi;r<sup>2</sup></p>
  <p>Einstein's mass-energy: E = mc<sup>2</sup></p>
</body>
</html>
```

Superscript tags raise text above the baseline, perfect for math exponents. The `&pi;` entity displays the Greek letter pi.

### Challenge 5. Famous Quote Page

**Difficulty:** Medium

**Constraints:**

- Use h1, p, blockquote, and hr tags.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inspirational Quote</title>
</head>
<body>
  <h1>Quote of the Day</h1>
  <p>Here is an inspiring quote from a great Indian leader:</p>
  <blockquote>
    <p>You must be the change you wish to see in the world.</p>
    <p>- Mahatma Gandhi</p>
  </blockquote>
  <hr>
  <p>Let this inspire you to do something meaningful today.</p>
</body>
</html>
```

The blockquote separates the quoted text from your own writing. The hr creates a visual break between the quote and the closing paragraph.

### Challenge 6. Shopping Discount Display

**Difficulty:** Hard

**Constraints:**

- Use strong, del, ins, and mark for each product. Include full boilerplate.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sale</title>
</head>
<body>
  <h1>Diwali Sale</h1>
  <p><strong>Samsung Phone</strong> - <del>Rs 30000</del> <ins>Rs 24000</ins> - <mark>20% off</mark></p>
  <p><strong>Laptop Bag</strong> - <del>Rs 2000</del> <ins>Rs 1400</ins> - <mark>30% off</mark></p>
  <p><strong>Wireless Headphones</strong> - <del>Rs 5000</del> <ins>Rs 3500</ins> - <mark>30% off</mark></p>
</body>
</html>
```

This structured display uses multiple formatting tags to convey pricing information clearly. Each tag has a purpose: strong for importance, del for crossed-out old prices, ins for new prices, and mark for the discount highlight.

### Challenge 7. Keyboard Shortcut Guide

**Difficulty:** Hard

**Constraints:**

- Every key must be in its own  tag. Include full boilerplate.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Keyboard Shortcut Guide</title>
</head>
<body>
  <h1>Keyboard Shortcut Guide</h1>
  <p>Save time by using these common keyboard shortcuts on Windows.</p>
  <p><kbd>Ctrl</kbd>+<kbd>C</kbd> - Copy selected text or files.</p>
  <p><kbd>Ctrl</kbd>+<kbd>V</kbd> - Paste copied content.</p>
  <p><kbd>Ctrl</kbd>+<kbd>Z</kbd> - Undo your last action.</p>
  <p><kbd>Ctrl</kbd>+<kbd>S</kbd> - Save the current file.</p>
  <p><kbd>Alt</kbd>+<kbd>Tab</kbd> - Switch between open applications.</p>
</body>
</html>
```

Each key is wrapped in its own `` tag so it renders distinctly in monospace font, making keyboard shortcuts look professional and easy to read.

### Challenge 8. Complete Blog Post With Formatting

**Difficulty:** Hard

**Constraints:**

- Must use h1, h2, p, small, strong, em, blockquote, kbd, code, hr, and at least one entity code.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Week Learning HTML</title>
</head>
<body>
  <h1>My Week Learning HTML</h1>
  <p><small>By Ananya Singh, posted on April 11, 2026</small></p>

  <p>This week, I learned the <strong>basics</strong> of HTML. It was <em>incredibly fun</em> and much easier than I thought.</p>

  <h2>What Inspired Me</h2>
  <blockquote>
    <p>The only way to learn to code is to write code every day.</p>
    <p>- Unknown</p>
  </blockquote>

  <h2>My Favourite Shortcut</h2>
  <p>I use <kbd>Ctrl</kbd>+<kbd>S</kbd> all the time to save my HTML files before refreshing the browser.</p>

  <h2>My First Code</h2>
  <p>The first code I learned was: <code>&lt;h1&gt;Hello World&lt;/h1&gt;</code>. So simple yet so powerful.</p>

  <hr>
  <p><small>Copyright &copy; 2026 Ananya Singh. All rights reserved.</small></p>
</body>
</html>
```

This is a comprehensive blog post using every major text formatting tag from this chapter. It is also a realistic structure you could actually publish. Notice how each tag serves a specific semantic purpose — not just visual style.

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/headings-paragraphs-and-text/*
