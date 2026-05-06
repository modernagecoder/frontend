---
title: "HTML Lists and Tables - Complete Guide with Examples | Modern Age Coders"
description: "Learn HTML lists (ul, ol, dl) and tables (table, thead, tbody, tfoot) with colspan, rowspan, and caption. Includes 55 practice questions for beginners."
slug: lists-and-tables
canonical: https://learn.modernagecoders.com/resources/html-and-css/lists-and-tables/
category: "HTML and CSS"
keywords: ["html lists", "ordered list", "unordered list", "html tables", "colspan", "rowspan", "thead tbody tfoot", "html list tutorial", "html table tutorial", "html dl dt dd"]
---
# Lists and Tables

**Difficulty:** Beginner  
**Reading time:** 22 min  
**Chapter:** 6  
**Practice questions:** 55

## What Are HTML Lists and Tables?

Websites are full of lists and tables. The menu on a restaurant page is a list. The nutrition facts on a food label are a table. The steps in a recipe are a list. The schedule of classes at a school is a table. HTML gives us special tags to mark these up the right way.

### Three Types of Lists

HTML has three kinds of lists, each for a different situation:

- **Unordered lists** (``) — when the order does not matter. Shopping list, features of a product, tags on a blog post. Displayed with bullets.
- **Ordered lists** (``) — when the order matters. Steps in a recipe, top 10 movies, instructions to assemble a chair. Displayed with numbers.
- **Description lists** (``) — for pairs of terms and their definitions. A glossary, a FAQ, a dictionary.

### What Are Tables?

A **table** is a grid of rows and columns. It is the right choice only when you have *real data* that belongs in rows and columns — student marks, cricket scores, train timings, a price comparison. Tables are NOT for laying out pages. That was done in the 1990s and it was a terrible idea. Today we use CSS (Flexbox and Grid) for layout.

## Why Should You Learn Lists and Tables?

### 1. They Give Content Meaning

When you mark a shopping list as a ``, screen readers for blind users announce "list with 5 items" before reading them. A search engine knows these are related items. Without the list tags, it is just text. **Meaning matters.**

### 2. You Get Free Styling

Browsers automatically add bullets to ``, numbers to ``, and borders to tables. You do not have to style them from scratch — they look decent even without CSS.

### 3. Tables Are Still Everywhere

Every dashboard, every report, every price comparison, every leaderboard uses tables. If you want to build dashboards or show data in the future, you need to know tables cold.

### 4. Accessibility and SEO

Properly marked up lists and tables make your page readable by screen readers and easier for Google to understand. A table with `` headers is much more useful to Google than a messy grid of ``s.

## Detailed Explanation

### Unordered Lists

An unordered list uses the `` tag. Inside it, each item is wrapped in an `` (list item) tag. Browsers show each item with a bullet point.

```

- Milk
- Bread
- Eggs

```

You can have as many `` items as you want. The order of items does not imply any ranking — the items are just related.

### Ordered Lists

An ordered list uses ``. Each item is still an ``. Browsers automatically number the items 1, 2, 3, and so on.

```

1. Wash your hands
2. Chop the onions
3. Fry them in oil

```

#### Useful Attributes on 

- **start** — starts counting from a different number. `` starts at 5.
- **type** — changes the numbering style. `type="1"` (default), `type="A"` (A, B, C), `type="a"` (a, b, c), `type="I"` (I, II, III), `type="i"` (i, ii, iii).
- **reversed** — counts backwards. Useful for a countdown like "Top 10" that starts at 10.

### Description Lists

Description lists are for term-definition pairs. You use three tags: `` for the whole list, `` for the term (definition term), and `` for the definition.

```

  HTML
  The language used to structure web pages.
  CSS
  The language used to style web pages.

```

### Nested Lists

You can put a list inside a list item. This creates a nested list — a list inside a list. Perfect for outlines, hierarchies, and nested menus. Always put the inner list *inside* an ``, not between list items.

```

- Fruits
    
      Apple
- Banana

  
  Vegetables

```

### Tables

Tables use several tags working together:

- `` — wraps the entire table.
- `` — table row. One per row.
- `` — table header cell. Used in the header row. Browsers make these bold and centered.
- `` — table data cell. Normal cells.
- `` — wraps the header row(s).
- `` — wraps the body rows.
- `` — wraps the footer row(s), like totals.
- `` — the title of the table. Place it right after ``.

### colspan and rowspan

Sometimes a cell needs to span multiple columns or rows. Use `colspan` to make a cell stretch across columns, and `rowspan` to make it stretch down rows.

```
This cell is 2 columns wide
This cell is 3 rows tall
```

### Tables Are for Data, Not Layouts

In the old days (1995-2005), people used tables to position things on a page — a header in one row, a sidebar and content in two cells of the next row, a footer in the third row. This was a disaster for accessibility, mobile phones, and maintenance. **Never use tables for layout.** Use CSS Flexbox or Grid instead. Tables are only for tabular data — rows and columns of related values.

### Styling Tables (Preview)

By default, tables look plain — cells with no borders, no padding. A few CSS lines transform them. You will learn CSS properly in Chapter 9, but here is a preview of what makes tables look good: `border` on each cell, `border-collapse: collapse` on the table, `padding` inside cells, and alternating row colors for readability.

## Code Examples

### A Simple Shopping List

```html
<!DOCTYPE html>
<html>
<head>
  <title>Shopping List</title>
</head>
<body>
  <h1>Aarav's Shopping List</h1>
  <ul>
    <li>Milk</li>
    <li>Bread</li>
    <li>Eggs</li>
    <li>Bananas</li>
    <li>Chocolate</li>
  </ul>
</body>
</html>
```

This is a classic unordered list. The `` tag creates the list, and each `` is one item. The browser automatically adds bullet points before each item. The items are not in any particular order — it does not matter whether you buy milk or bread first. Save this as `shopping.html` and open it in your browser.

**Output:**

```
A page with the heading 'Aarav's Shopping List' and a bulleted list:
- Milk
- Bread
- Eggs
- Bananas
- Chocolate
```

### Recipe Steps with an Ordered List

```html
<!DOCTYPE html>
<html>
<head>
  <title>How to Make Masala Chai</title>
</head>
<body>
  <h1>How to Make Masala Chai</h1>
  <p>Priya's five-step recipe:</p>
  <ol>
    <li>Boil one cup of water in a pan.</li>
    <li>Add half a teaspoon of crushed ginger and 2 cardamom pods.</li>
    <li>Add 1 teaspoon of tea leaves.</li>
    <li>Pour in half a cup of milk and boil for 2 minutes.</li>
    <li>Strain into a cup and add sugar to taste.</li>
  </ol>
</body>
</html>
```

This uses `` because the order matters — you cannot pour the tea before boiling the water. Each step is in a ``. The browser automatically numbers them 1 through 5. If Priya adds a sixth step later, the numbering updates automatically.

**Output:**

```
How to Make Masala Chai
Priya's five-step recipe:
1. Boil one cup of water in a pan.
2. Add half a teaspoon of crushed ginger and 2 cardamom pods.
3. Add 1 teaspoon of tea leaves.
4. Pour in half a cup of milk and boil for 2 minutes.
5. Strain into a cup and add sugar to taste.
```

### Ordered List Attributes: start, type, reversed

```html
<!DOCTYPE html>
<html>
<head>
  <title>Top Movies</title>
</head>
<body>
  <h2>Rohan's Top 5 Movies (Countdown)</h2>
  <ol reversed>
    <li>3 Idiots</li>
    <li>Dangal</li>
    <li>Lagaan</li>
    <li>Sholay</li>
    <li>Zindagi Na Milegi Dobara</li>
  </ol>

  <h2>Chapters (Starting from 5)</h2>
  <ol start="5">
    <li>Lists and Tables</li>
    <li>Forms and Inputs</li>
    <li>Semantic HTML</li>
  </ol>

  <h2>Plan Options (A, B, C)</h2>
  <ol type="A">
    <li>Basic Plan</li>
    <li>Pro Plan</li>
    <li>Premium Plan</li>
  </ol>

  <h2>Roman Numeral List</h2>
  <ol type="I">
    <li>Introduction</li>
    <li>Main Content</li>
    <li>Conclusion</li>
  </ol>
</body>
</html>
```

This demonstrates all three ordered list attributes. The `reversed` attribute counts from 5 down to 1 — perfect for a top-5 countdown. `start="5"` begins numbering at 5 instead of 1. `type="A"` uses capital letters A, B, C. `type="I"` uses Roman numerals I, II, III. Other valid types are `a`, `i`, and `1` (default).

**Output:**

```
Four lists shown: a reversed 5-4-3-2-1 countdown, a list starting at 5, a letter list (A, B, C), and a Roman numeral list (I, II, III).
```

### Description List for a Glossary

```html
<!DOCTYPE html>
<html>
<head>
  <title>Web Development Glossary</title>
</head>
<body>
  <h1>Web Development Glossary</h1>
  <dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language. Used to create the structure of web pages.</dd>

    <dt>CSS</dt>
    <dd>Cascading Style Sheets. Used to style and design web pages.</dd>

    <dt>JavaScript</dt>
    <dd>A programming language that makes web pages interactive.</dd>

    <dt>Browser</dt>
    <dd>A program like Chrome, Firefox, or Edge that displays web pages.</dd>
  </dl>
</body>
</html>
```

A description list (``) is perfect for glossaries, FAQs, metadata, and any term-definition content. `` holds the term being defined, and `` holds the description. Browsers typically show `` indented below its ``. One term can have multiple `` tags if it has multiple definitions.

**Output:**

```
A glossary where each term (HTML, CSS, JavaScript, Browser) appears on its own line, with its definition indented below it.
```

### Nested List for a Menu Outline

```html
<!DOCTYPE html>
<html>
<head>
  <title>Restaurant Menu</title>
</head>
<body>
  <h1>Spice Palace Menu</h1>
  <ul>
    <li>Starters
      <ul>
        <li>Samosa</li>
        <li>Paneer Tikka</li>
        <li>Vegetable Pakora</li>
      </ul>
    </li>
    <li>Main Course
      <ul>
        <li>Butter Chicken</li>
        <li>Dal Makhani</li>
        <li>Paneer Butter Masala</li>
      </ul>
    </li>
    <li>Desserts
      <ul>
        <li>Gulab Jamun</li>
        <li>Rasmalai</li>
        <li>Kulfi</li>
      </ul>
    </li>
  </ul>
</body>
</html>
```

Nested lists let you create hierarchies. Notice that the inner `` is placed **inside** an outer ``, after its text. This is the correct way. Never place a `` directly between two `` tags — that is invalid HTML. You can nest as deeply as you want, but more than 3 levels usually becomes confusing.

**Output:**

```
A menu with 3 top-level items (Starters, Main Course, Desserts), each with 3 nested items shown indented below.
```

### A Student Marks Table with thead, tbody, tfoot

```html
<!DOCTYPE html>
<html>
<head>
  <title>Class Marks</title>
  <style>
    table { border-collapse: collapse; margin: 20px; }
    th, td { border: 1px solid #333; padding: 8px 12px; }
    thead { background-color: #f0c0c0; }
    tfoot { background-color: #c0f0c0; font-weight: bold; }
    caption { font-size: 18px; margin-bottom: 10px; font-weight: bold; }
  </style>
</head>
<body>
  <table>
    <caption>Class 8A - Term 1 Marks</caption>
    <thead>
      <tr>
        <th>Student</th>
        <th>Maths</th>
        <th>Science</th>
        <th>English</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Aarav Sharma</td>
        <td>92</td>
        <td>88</td>
        <td>85</td>
      </tr>
      <tr>
        <td>Priya Patel</td>
        <td>95</td>
        <td>91</td>
        <td>89</td>
      </tr>
      <tr>
        <td>Rohan Kumar</td>
        <td>78</td>
        <td>82</td>
        <td>80</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Average</td>
        <td>88.3</td>
        <td>87.0</td>
        <td>84.7</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>
```

This is a complete data table showing three students and their marks in three subjects. The `` is the table title. `` holds the header row with `` cells (bold and centered by default). `` holds the data rows. `` holds the summary row (averages). A bit of CSS gives it borders, padding, and colored header and footer. Save as `marks.html` and open it — it works.

**Output:**

```
A table with a title at the top, a pink header row (Student, Maths, Science, English), three data rows for Aarav, Priya, and Rohan, and a green footer row with the averages.
```

### Using colspan and rowspan

```html
<!DOCTYPE html>
<html>
<head>
  <title>Timetable</title>
  <style>
    table { border-collapse: collapse; margin: 20px; }
    th, td { border: 1px solid #333; padding: 10px 15px; text-align: center; }
    th { background-color: #d4e9ff; }
    .lunch { background-color: #ffe9b0; }
  </style>
</head>
<body>
  <h2>Ananya's School Timetable</h2>
  <table>
    <tr>
      <th>Time</th>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wednesday</th>
    </tr>
    <tr>
      <td>9:00</td>
      <td>Maths</td>
      <td>Science</td>
      <td>English</td>
    </tr>
    <tr>
      <td>10:00</td>
      <td colspan="3">School Assembly (all classes)</td>
    </tr>
    <tr>
      <td>11:00</td>
      <td>History</td>
      <td rowspan="2">Double Art Period</td>
      <td>Geography</td>
    </tr>
    <tr>
      <td>12:00</td>
      <td>Hindi</td>
      <td>Music</td>
    </tr>
    <tr class="lunch">
      <td>1:00</td>
      <td colspan="3">Lunch Break</td>
    </tr>
  </table>
</body>
</html>
```

This timetable demonstrates both `colspan` and `rowspan`. The 10:00 and 1:00 rows use `colspan="3"` because those events cover all three days. The Art period uses `rowspan="2"` because it lasts two hours. Notice that in the row following a `rowspan`, you do NOT write a `` for the cell that is already occupied — it is already there from the previous row.

**Output:**

```
A timetable with a spanning 'School Assembly' cell across all three day columns, a 'Double Art Period' cell spanning two rows on Tuesday, and a 'Lunch Break' cell spanning all three days with a yellow background.
```

## Common Mistakes

### Placing a Nested List Between li Tags

**Wrong:**

```
<ul>
  <li>Fruits</li>
  <ul>
    <li>Apple</li>
    <li>Banana</li>
  </ul>
  <li>Vegetables</li>
</ul>
```

Invalid HTML. The nested ul is directly inside ul, not inside li.

**Correct:**

```
<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Vegetables</li>
</ul>
```

A `` can only contain `` elements as its direct children. To nest a list, you must put the inner `` inside one of the `` tags, after its text. Browsers may still render the bad version, but it is invalid HTML and causes problems with accessibility and validators.

### Using Tables for Page Layout

**Wrong:**

```
<table>
  <tr>
    <td>Logo</td>
    <td>Menu</td>
  </tr>
  <tr>
    <td>Sidebar</td>
    <td>Main content goes here...</td>
  </tr>
</table>
```

No error, but this is wrong for many reasons: bad for accessibility, bad for mobile, hard to maintain, bad for SEO.

**Correct:**

```
<header>
  <div class="logo">Logo</div>
  <nav>Menu</nav>
</header>
<main>
  <aside>Sidebar</aside>
  <article>Main content goes here...</article>
</main>
<!-- Then use CSS Flexbox or Grid to arrange them -->
```

Tables are for *data*, not for arranging things on a page. Using tables for layout was common in the 1990s but is now considered harmful. Screen readers read tables cell-by-cell, which makes no sense for a layout. It is nearly impossible to make table-based layouts responsive for mobile phones. Use semantic tags and CSS (Flexbox, Grid) for layout.

### Forgetting the tr Tag Around Cells

**Wrong:**

```
<table>
  <th>Name</th>
  <th>Age</th>
  <td>Vikram</td>
  <td>14</td>
</table>
```

Browsers try to auto-fix this, but the structure is broken. Cells appear in unexpected places.

**Correct:**

```
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Vikram</td>
    <td>14</td>
  </tr>
</table>
```

Every row of cells in a table must be wrapped in a `` (table row) tag. Cells (`` or ``) cannot be direct children of ``. Forgetting `` is a very common beginner mistake that produces a broken table.

### Writing a td in a Row Already Covered by rowspan

**Wrong:**

```
<tr>
  <td rowspan="2">Merged</td>
  <td>A</td>
</tr>
<tr>
  <td>Merged</td>  <!-- WRONG: this position is already taken -->
  <td>B</td>
</tr>
```

The table shifts and the cells appear in the wrong columns.

**Correct:**

```
<tr>
  <td rowspan="2">Merged</td>
  <td>A</td>
</tr>
<tr>
  <td>B</td>  <!-- Only ONE td because the first column is filled by rowspan -->
</tr>
```

When a cell uses `rowspan`, the cells below it in that column are already "filled." So in the next row, you should NOT include a `` for that column. If a table has 3 columns and one cell uses `rowspan="2"`, the next row will only have 2 `` tags, not 3.

### Using ul Instead of ol for Instructions

**Wrong:**

```
<h2>How to Install the App</h2>
<ul>
  <li>Download the file</li>
  <li>Open the installer</li>
  <li>Click Next</li>
  <li>Click Finish</li>
</ul>
```

No error, but wrong semantically. The order matters for instructions.

**Correct:**

```
<h2>How to Install the App</h2>
<ol>
  <li>Download the file</li>
  <li>Open the installer</li>
  <li>Click Next</li>
  <li>Click Finish</li>
</ol>
```

Use `` whenever the order is important — instructions, steps, recipes, rankings. Use `` only when the items are truly interchangeable. For installation steps, step 3 must come after step 2, so it is an ordered list.

## Summary

- HTML has three types of lists:  for unordered,  for ordered, and  for description lists.
- Every list item inside  and  must be wrapped in an  tag. Description lists use  for terms and  for definitions.
- supports useful attributes: start to begin at a different number, type to change the style (1, A, a, I, i), and reversed to count backwards.
- You can nest lists by placing a  or  inside an  tag, not between two  tags.
- Tables use  as the wrapper,  for each row,  for header cells, and  for data cells.
- Use  for the header row(s),  for the data rows, and  for summary or totals. Add a  right after  for the title.
- colspan makes a cell span multiple columns, rowspan makes it span multiple rows. Remember to skip the covered cells in following rows.
- Tables are for tabular data only. Never use tables for page layout — use CSS Flexbox or Grid instead. Tables for layout are bad for accessibility, mobile, and SEO.
- By default, browsers add bullets to , numbers to , and no borders to tables. A small amount of CSS makes them look great.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/html-and-css/lists-and-tables/*
*Practice questions: https://learn.modernagecoders.com/resources/html-and-css/lists-and-tables/practice/*
