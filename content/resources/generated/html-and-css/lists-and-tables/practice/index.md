---
title: "Practice: Lists and Tables"
description: "55 practice problems for Lists and Tables in HTML and CSS"
slug: lists-and-tables-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/lists-and-tables/practice
category: "HTML and CSS"
---
# Practice: Lists and Tables

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] What does this HTML display?

```

  Red
  Green
  Blue

```

*Hint:* ul is an unordered list. What do unordered lists use for markers?

**Answer:** A bulleted list with three items: Red, Green, Blue.

The `` tag creates an unordered list, and each `` is one item. Browsers display bullet points before each item.

### Q2. [Easy] What does this HTML display?

```

  First
  Second
  Third

```

*Hint:* ol stands for ordered list.

**Answer:** A numbered list: 1. First, 2. Second, 3. Third.

`` creates an ordered list. Browsers automatically add numbers 1, 2, 3 before each ``.

### Q3. [Easy] Create an unordered list of your three favourite fruits inside a complete HTML page.

*Hint:* Use  and three  tags inside the body.

**Answer:** ```
<!DOCTYPE html>

  My Favourite Fruits
  
    Mango
    Banana
    Apple
  

```

Wrap the three items in `` and ``. Each item goes in its own ``.

### Q4. [Easy] What does this display?

```

  Apple
  Banana

```

*Hint:* The start attribute changes the first number.

**Answer:** 3. Apple
4. Banana

The `start="3"` attribute tells the browser to start counting at 3 instead of 1. So Apple is number 3 and Banana is number 4.

### Q5. [Easy] What does this display?

```

  Option one
  Option two
  Option three

```

*Hint:* The type attribute changes the numbering style.

**Answer:** A. Option one
B. Option two
C. Option three

`type="A"` uses capital letters instead of numbers. Use `a` for lowercase, `I` for Roman numerals, `i` for lowercase Roman.

### Q6. [Easy] Create a shopping list with nested items. Top level: Groceries and Electronics. Under Groceries: Milk and Bread. Under Electronics: Headphones and Charger.

*Hint:* Put a nested  inside the parent .

**Answer:** ```

  Groceries
    
      Milk
      Bread
    
  
  Electronics
    
      Headphones
      Charger
    
  

```

To nest, put a new `` inside the parent ``, after its text. The nested list displays indented with its own bullets.

### Q7. [Easy] Aarav wrote this list but it is invalid HTML. Fix it:

```

  Fruits
  
    Apple
  

```

*Hint:* Where should the nested ul go?

**Answer:** ```

  Fruits
    
      Apple
    
  

```

The nested `` must be inside the ``, not between li tags. A ul can only directly contain li elements.

### Q8. [Easy] Create a description list with two terms: 'HTML' (meaning: structure of web pages) and 'CSS' (meaning: style of web pages).

*Hint:* Use , , and .

**Answer:** ```

  HTML
  Structure of web pages
  CSS
  Style of web pages

```

Description lists are great for glossaries. `` is the term, `` is the description. They go in pairs inside ``.

### Q9. [Easy] How many rows will this table have?

```

  AB
  12
  34

```

*Hint:* Count the tr tags.

**Answer:** 3 rows.

Each `` creates one row. This table has 3 tr tags, so 3 rows: one header row (A, B) and two data rows (1, 2 and 3, 4).

### Q10. [Easy] Build a table showing 3 students with their marks. Columns: Name and Marks. Students: Aarav (92), Priya (88), Rohan (75).

*Hint:* Use , ,  for headers, and  for data.

**Answer:** ```

  
    Name
    Marks
  
  
    Aarav
    92
  
  
    Priya
    88
  
  
    Rohan
    75
  

```

The table has 4 rows: one header row with `` cells, and three data rows with `` cells. The `border="1"` attribute adds a simple border so you can see the structure (CSS is preferred, but this works).

### Q11. [Easy] What does this display?

```

  Gold
  Silver
  Bronze

```

*Hint:* The reversed attribute counts backwards.

**Answer:** 3. Gold
2. Silver
1. Bronze

The `reversed` attribute makes the numbering go from 3 down to 1 instead of 1 to 3. This is useful for countdowns.

### Q12. [Easy] Write an ordered list of the steps to make a cup of tea. At least 4 steps.

*Hint:* Use  because the order matters.

**Answer:** ```

  Boil water in a pan.
  Add tea leaves.
  Add milk and sugar.
  Strain into a cup and serve.

```

Steps in a recipe must be in order, so an ordered list is correct. Unordered list would be wrong here.

### Q13. [Easy] Which tag makes text bold and centered in a table by default?

*Hint:* It is a header cell.

**Answer:** ``

The `` (table header) tag makes its content bold and centered by default. Use it for column or row headers. Use `` for normal data cells.

### Q14. [Easy] Priya's table has no rows. Find the bug:

```

  Name
  Age
  Priya
  15

```

*Hint:* Table cells must be wrapped in something.

**Answer:** ```

  
    Name
    Age
  
  
    Priya
    15
  

```

Every group of cells must be wrapped in a `` (table row). Without tr, the cells have no row structure and the table is broken.

### Q15. [Easy] Create a nested list: top level items are 'Cricket' and 'Football'. Under Cricket list two players: Virat and Rohit. Under Football list two players: Messi and Ronaldo.

*Hint:* Nest a  inside each .

**Answer:** ```

  Cricket
    
      Virat
      Rohit
    
  
  Football
    
      Messi
      Ronaldo
    
  

```

The nested list goes inside the li, after the parent item's text. Each sport has its own sub-list of players.

### Q16. [Medium] What does this display?

```

  
    Title
  
  
    A
    B
  

```

*Hint:* colspan=2 means the cell stretches across 2 columns.

**Answer:** A table with 2 rows. The first row has one cell 'Title' spanning both columns. The second row has two cells: A and B.

The `colspan="2"` attribute merges the cell across 2 columns, making it look like a single wide cell above two narrow cells.

### Q17. [Medium] Create a table with caption 'Cricket Scores', columns Match and Runs, and 3 rows of data. Include thead and tbody.

*Hint:* Use , , .

**Answer:** ```

  Cricket Scores
  
    
      Match
      Runs
    
  
  
    Match 1285
    Match 2310
    Match 3250
  

```

The `` is the table title — it goes right after ``. `` holds the header row and `` holds the data rows.

### Q18. [Medium] How many td cells should the second row have?

```

  
    Merged
    A
    B
  
  
    ???
  

```

*Hint:* The first column is already filled by the rowspan.

**Answer:** 2 td cells (the rowspan already fills the first column).

The first cell of row 2 is already occupied by the rowspan from row 1. So the second row only needs 2 td cells for the remaining 2 columns. Writing 3 td cells would shift everything and break the table.

### Q19. [Medium] Build a 3-column, 3-row timetable. Columns: Day, Period 1, Period 2. Days: Monday (Maths, Science), Tuesday (English, History), Wednesday (Hindi, Art).

*Hint:* Header row + 3 data rows = 4 tr elements.

**Answer:** ```

  
    Day
    Period 1
    Period 2
  
  
    MondayMathsScience
  
  
    TuesdayEnglishHistory
  
  
    WednesdayHindiArt
  

```

4 rows total: one header with th cells and three data rows with td cells. Each row has 3 cells for the 3 columns.

### Q20. [Medium] Which list type should you use for a list of ingredients in a recipe, where the order does not matter?

*Hint:* Order does not matter.

**Answer:** `` (unordered list).

Ingredients are a set of items with no specific order, so `` is correct. The *steps* of a recipe would use `` because order matters there.

### Q21. [Medium] Rohan wrote this rowspan table, but the cells are misaligned. Fix it:

```

  Header
  A

  Header
  B

```

*Hint:* When a cell uses rowspan, don't repeat it in the next row.

**Answer:** ```

  Header
  A

  B

```

The first column of row 2 is already filled by the rowspan. Writing another 'Header' td pushes cell B into the wrong column. Remove the duplicate.

### Q22. [Medium] Create a table with a row that spans 3 columns across the top. Title: 'Student Report'. Below it, 3 columns: Subject, Marks, Grade. Add 2 students.

*Hint:* Use colspan=3 on the title cell.

**Answer:** ```

  
    Student Report
  
  
    SubjectMarksGrade
  
  
    Maths92A
  
  
    Science85B
  

```

The first row has one cell with `colspan="3"` so it stretches across all 3 columns. The rest of the table is a normal 3-column structure.

### Q23. [Medium] Where should the caption tag be placed in a table?

*Hint:* It is the title of the table.

**Answer:** Right after the opening `` tag, before any ``.

The `` must be the first child of ``. Browsers display it above the table as the title.

### Q24. [Medium] Ananya is using a table to place a logo and a menu side by side. Explain why this is wrong and what she should use.

*Hint:* Tables are for data only.

**Answer:** Tables should not be used for page layout. Ananya should use semantic tags like `` with a logo div and a ``, and arrange them using CSS Flexbox or Grid.

Table layouts are bad for accessibility (screen readers get confused), bad for mobile (hard to make responsive), and bad for SEO. Modern websites use CSS layout systems.

### Q25. [Medium] Create a description list for FAQs. Question 1: 'What is HTML?' Answer: 'A markup language for web pages.' Question 2: 'Is HTML hard?' Answer: 'No, it is beginner-friendly.'

*Hint:* Use dt for questions and dd for answers.

**Answer:** ```

  What is HTML?
  A markup language for web pages.
  Is HTML hard?
  No, it is beginner-friendly.

```

Description lists work well for FAQs. Each question is a ``, each answer is a ``.

### Q26. [Hard] How many cells does this row need?

```
 <!-- 4 columns total -->
  
    Wide
    Tall
    Normal
  
  
    ???
  

```

*Hint:* The 3rd column is filled by rowspan. How many columns are left?

**Answer:** 3 td cells (columns 1, 2, and 4 need cells; column 3 is already taken by rowspan).

Row 1 has colspan=2 (cols 1-2), rowspan=2 (col 3), and one normal cell (col 4). In row 2, col 3 is already filled, so you need cells for cols 1, 2, and 4 — that is 3 td cells.

### Q27. [Hard] Build a complete HTML page with a table showing 4 students and their marks in 3 subjects (Maths, Science, English). Include caption 'Term 1 Results', thead, tbody, and a tfoot row showing the class average for each subject.

*Hint:* Use caption, thead, tbody, tfoot, and calculate averages manually.

**Answer:** ```
<!DOCTYPE html>

  Term 1 Results
  
    
      NameMathsScienceEnglish
    
  
  
    Aarav928885
    Priya959189
    Rohan788280
    Ananya858790
  
  
    Average87.587.086.0
  

```

Full table with all major parts. Caption is the title, thead holds headers, tbody holds 4 student rows, tfoot holds the averages calculated from the data.

### Q28. [Hard] What is wrong with this nested list structure?

```

  Item 1
  
    Sub 1
  
  Item 2

```

*Hint:* The ol is in the wrong place.

**Answer:** The nested `` is a direct child of ``, which is invalid. It must be inside an ``.

Only `` elements can be direct children of `` or ``. Nested lists must be placed inside a list item. The correct structure puts the inner list inside 'Item 1'.

## Mixed Questions

### Q1. [Easy] Which tag would you use for a list of 5 hobbies in no particular order?

*Hint:* The key phrase is 'no particular order'.

**Answer:** ``

Unordered lists (``) are used when the order does not matter. If there were a ranking, you would use ``.

### Q2. [Easy] Write HTML for a numbered list of 3 goals for the year.

*Hint:* Use  and three .

**Answer:** ```

  Learn HTML and CSS
  Build my first website
  Publish it online

```

Ordered list because goals are often ranked or done in a sequence.

### Q3. [Easy] What tag is used for the title of a table?

*Hint:* It goes right after the opening table tag.

**Answer:** ``

The caption tag holds the title of a table. Browsers display it above (or sometimes below) the table.

### Q4. [Easy] Create a simple table with 2 columns (Name, Age) and 2 rows of data (Aarav 13, Priya 14). Include a header row.

*Hint:* One tr for headers with th, then two tr rows with td.

**Answer:** ```

  NameAge
  Aarav13
  Priya14

```

3 total rows: the first uses th for headers, and the next two use td for data.

### Q5. [Easy] What is the difference between  and ?

*Hint:* Think about the markers they use.

**Answer:** `` is unordered (bullet points). `` is ordered (numbered).

Use `` when order does not matter and `` when it does. Both use `` for items.

### Q6. [Easy] Why is this list wrong?

```

  Apple
  Banana
  Cherry

```

*Hint:* Every item needs its own tag.

**Answer:** Each item must be wrapped in ``. Without li, the items don't form a list — they just appear as plain text.

Lists require `` tags for each item. Plain text inside `` or `` is invalid.

### Q7. [Medium] Build a table with 4 columns and 3 rows. The first row is a header that spans all 4 columns with the word 'Menu'. Below that, columns: Item, Price, Category, Available.

*Hint:* Use colspan=4 on the title.

**Answer:** ```

  Menu
  
    ItemPriceCategoryAvailable
  
  
    Samosa20StarterYes
  

```

The first row has one th with colspan=4 to stretch across all columns. The rest follows the usual table structure.

### Q8. [Medium] What does this display?

```

  One
  Two

```

*Hint:* Lowercase Roman numerals, starting from 2.

**Answer:** ii. One
iii. Two

`type="i"` uses lowercase Roman numerals. `start="2"` begins at 2, which in Roman is `ii`. Next is `iii`.

### Q9. [Medium] Create a 3-level nested list. Level 1: Continents (Asia). Level 2: Countries (India). Level 3: Cities (Delhi, Mumbai).

*Hint:* Nest a ul inside an li, and another ul inside that.

**Answer:** ```

  Asia
    
      India
        
          Delhi
          Mumbai
        
      
    
  

```

Each level of nesting goes inside the parent li. The deeper you go, the more indented the list appears.

### Q10. [Medium] In a table row, what is the main visual difference between  and ?

*Hint:* Think about default styling.

**Answer:** `` content is bold and centered by default. `` content is normal weight and left-aligned.

Browsers style table headers (th) as bold and centered so they stand out from data cells (td). This helps users scan the table faster.

### Q11. [Medium] Vikram wants a 3-column table. Why is this broken?

```

  A
  B
  C

```

*Hint:* Count the column widths: 1 + 2 + 1 = 4.

**Answer:** The row uses colspan=2, making B take 2 columns. Total columns = 1 + 2 + 1 = 4, but the table only has 3. This shifts things or widens the table to 4 columns.

When using colspan, make sure the total width of the row equals the number of columns in the table. For a 3-column table, options are 1+1+1, 2+1, or 3.

### Q12. [Hard] Build a complete HTML page with a styled table (borders, padding, alternating row colors) showing 4 rows of sample data: name and score. Use CSS in the head.

*Hint:* Use border-collapse, border, padding, and nth-child for stripes.

**Answer:** ```
<!DOCTYPE html>

  table { border-collapse: collapse; margin: 20px; }
  th, td { border: 1px solid #333; padding: 10px; }
  tr:nth-child(even) { background-color: #f0f0f0; }
  th { background-color: #d0e0ff; }

  NameScore
  Aarav92
  Priya95
  Rohan78
  Ananya85

```

border-collapse makes cell borders merge into single lines. tr:nth-child(even) selects every other row for the zebra-stripe effect.

### Q13. [Hard] How many TD tags need to be written across all rows for a 3-column, 3-row table where the top-left cell has rowspan=2?

*Hint:* Row 1 has 3 cells. Row 2 has 2 cells (one is filled). Row 3 has 3 cells.

**Answer:** 8 td tags total (3 + 2 + 3).

Row 1: 3 cells including the rowspan cell. Row 2: only 2 cells because the first column is already filled. Row 3: 3 normal cells. Total = 8.

### Q14. [Hard] Create a nested unordered list for a 3-level course outline: 'HTML' (main), with sub-items 'Basics' and 'Advanced'. Under 'Basics', list 'Tags' and 'Attributes'. Under 'Advanced', list 'Forms' and 'Tables'.

*Hint:* 3 levels of nesting.

**Answer:** ```

  HTML
    
      Basics
        
          Tags
          Attributes
        
      
      Advanced
        
          Forms
          Tables
        
      
    
  

```

Three levels: HTML > (Basics, Advanced) > (their sub-items). Each nested ul sits inside an li.

### Q15. [Hard] Which list type is best for displaying a glossary of web terms and their meanings?

*Hint:* It has term-description pairs.

**Answer:** `` (description list).

Description lists with `` (term) and `` (definition) are specifically designed for glossaries, dictionaries, FAQs, and any content that pairs a term with its meaning.

## Multiple Choice Questions

### Q1. [Easy] Which tag creates an unordered (bulleted) list?

**B is correct.** `` stands for unordered list and creates a bulleted list. `` is for numbered lists, `` is for description lists, and `` is not a valid HTML tag.

### Q2. [Easy] Which tag is used for each item inside a  or ?

**B is correct.** `` (list item) is used for items in both ordered and unordered lists. `` is for terms in description lists, not for ul/ol.

### Q3. [Easy] Which tag creates a table row?

**C is correct.** `` stands for table row. `` is a data cell, `` is a header cell, and `` is not a valid HTML tag.

### Q4. [Easy] Which tag creates a table header cell (bold and centered by default)?

**C is correct.** `` creates a table header cell. Browsers automatically render its content in bold and center-aligned. `` is the head of the HTML document (not a table cell).

### Q5. [Easy] Which attribute makes a table cell span multiple columns?

**A is correct.** The `colspan` attribute makes a cell span multiple columns. For example, `` makes the cell stretch across 3 columns.

### Q6. [Easy] What does the tag  stand for?

**C is correct.** `` stands for description list. It is used with `` (description term) and `` (description description) for term-definition pairs.

### Q7. [Easy] In an ordered list, what does type="A" do?

**B is correct.** `type="A"` changes the numbering style to capital letters A, B, C. It does not sort items alphabetically. Other values include `a`, `I`, `i`, and `1` (default).

### Q8. [Easy] Which tag wraps the title of a table?

**C is correct.** `` wraps the title of a table and must be the first child of ``. `` is for the browser tab title, not for tables.

### Q9. [Easy] What will this list show: ABC

**B is correct.** The `reversed` attribute counts backwards but does not reverse the items themselves. A is numbered 3, B is 2, and C is 1.

### Q10. [Easy] Which tag groups the header rows of a table?

**C is correct.** `` wraps the header rows of a table. It goes between `` and ``.

### Q11. [Easy] For a list of ingredients in a recipe, which list is most appropriate?

**B is correct.** Ingredients have no specific order, so an unordered list (``) is correct. The steps of the recipe would use ``.

### Q12. [Easy] Which tag is used for the definition (description) in a description list?

**C is correct.** `` is for the description (definition). `` is the term being described. Both go inside ``.

### Q13. [Medium] What does this ordered list display? AB

**B is correct.** `start="10"` makes the list begin at 10. The next item continues counting: 11.

### Q14. [Medium] Which tag groups the body rows of a table?

**C is correct.** `` wraps the data rows of a table, separating them from the header (``) and footer (``).

### Q15. [Medium] For summary rows (like totals at the bottom), which tag should you use?

**A is correct.** `` is specifically for footer rows in a table, commonly used for totals and summary data. `` is a semantic tag for page footers, not tables.

### Q16. [Medium] Which of the following is INVALID inside a ?

**C is correct.** A `` can only contain `` elements as direct children. Plain text or other tags directly inside ul are invalid.

### Q17. [Medium] In a 3-column table, which row is correctly using rowspan?

**B is correct.** When a cell has rowspan=2, the next row's first column is already taken. So the next row needs only 2 td cells (for columns 2 and 3). Option A has 3 td in row 2, which would be wrong.

### Q18. [Medium] What is wrong with using tables for page layout?

**C is correct.** Table-based layouts are bad for screen readers (which read cell-by-cell), hard to make responsive for mobile, and confusing for search engines. Use CSS Flexbox or Grid for layout. Tables are still valid for actual data.

### Q19. [Medium] Which list type would you use for a 'Top 10 Movies' ranking?

**B is correct.** A ranking has an order (1st, 2nd, 3rd...), so `` is correct. You could also use `reversed` to count from 10 down to 1 for a countdown effect.

### Q20. [Medium] What does  do?

**B is correct.** `colspan="2"` merges the cell across 2 columns, making it look like one wide cell. This is useful for headers that cover multiple columns.

### Q21. [Hard] In a 4-column table, a row has A and B. How many columns are filled?

**B is correct.** colspan=2 fills 2 columns (1-2), and the second td fills 1 more (column 3). Total filled = 3 columns. Column 4 is left empty, so the row is incomplete and the table may render oddly.

### Q22. [Hard] Which is the correct way to nest an ordered list inside an unordered list?

**B is correct.** Nested lists always go inside a list item (``), never directly inside another `` or ``. A ul/ol may only have li as direct children.

### Q23. [Hard] What will FirstSecond display?

**C is correct.** `type="i"` is lowercase Roman numerals. Capital I would give `I. First, II. Second`.

### Q24. [Hard] If a table has 3 rows and 3 columns, and the top-left cell uses rowspan="3", how many total  tags are needed?

**B is correct.** Row 1: 3 td (including the rowspan cell). Row 2: 2 td (first column is filled). Row 3: 2 td. Total = 3 + 2 + 2 = 7.

### Q25. [Hard] Which statement about  is FALSE?

**D is correct (this statement is false).** A single `` can have multiple `` tags if it has multiple definitions or descriptions. All the other statements are true.

## Coding Challenges

### Challenge 1. Favorite Books List

**Difficulty:** Easy

Create a complete HTML page with a heading 'My Favorite Books' and an unordered list of at least 5 books you like.

**Constraints:**

- Must use  and . Full HTML boilerplate (DOCTYPE, html, head, body).

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A page with the heading and a bulleted list of 5 books.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>My Favorite Books</title>
</head>
<body>
  <h1>My Favorite Books</h1>
  <ul>
    <li>Wings of Fire - A. P. J. Abdul Kalam</li>
    <li>The Alchemist - Paulo Coelho</li>
    <li>Harry Potter - J. K. Rowling</li>
    <li>Panchatantra - Vishnu Sharma</li>
    <li>Malgudi Days - R. K. Narayan</li>
  </ul>
</body>
</html>
```

### Challenge 2. Recipe with Ordered Steps

**Difficulty:** Easy

Create an HTML page for Priya's favourite recipe. Include the recipe name as an h1, an unordered list of ingredients, and an ordered list of steps.

**Constraints:**

- Use both  and . Include at least 4 ingredients and 4 steps.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A page with the recipe name, a bulleted ingredient list, and a numbered step list.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Masala Chai Recipe</title>
</head>
<body>
  <h1>Priya's Masala Chai</h1>
  <h2>Ingredients</h2>
  <ul>
    <li>1 cup water</li>
    <li>1/2 cup milk</li>
    <li>1 teaspoon tea leaves</li>
    <li>Sugar to taste</li>
    <li>Crushed ginger and cardamom</li>
  </ul>
  <h2>Steps</h2>
  <ol>
    <li>Boil water in a pan.</li>
    <li>Add ginger, cardamom, and tea leaves.</li>
    <li>Pour in milk and boil for 2 minutes.</li>
    <li>Strain into a cup and add sugar.</li>
  </ol>
</body>
</html>
```

### Challenge 3. Class Marks Table

**Difficulty:** Medium

Build a table showing 4 students (Aarav, Priya, Rohan, Ananya) and their marks in 3 subjects (Maths, Science, English). Include a caption, a header row with th cells, and all data in a tbody.

**Constraints:**

- Use caption, thead, tbody, and border="1". At least 4 students.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A table with a title, headers, and 4 rows of student marks.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Class 8A Marks</title>
</head>
<body>
  <table border="1">
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
      <tr><td>Aarav</td><td>92</td><td>88</td><td>85</td></tr>
      <tr><td>Priya</td><td>95</td><td>91</td><td>89</td></tr>
      <tr><td>Rohan</td><td>78</td><td>82</td><td>80</td></tr>
      <tr><td>Ananya</td><td>85</td><td>87</td><td>90</td></tr>
    </tbody>
  </table>
</body>
</html>
```

### Challenge 4. Nested Menu for a Restaurant

**Difficulty:** Medium

Create a nested list for a restaurant menu with 3 categories: Starters, Main Course, and Desserts. Each category should have at least 3 items nested inside.

**Constraints:**

- Use nested  tags. The nested ul must be inside the parent li.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
An outer list of 3 categories, each with an indented sub-list of items.
```

**Solution:**

```html-and-css
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

### Challenge 5. Timetable with colspan

**Difficulty:** Medium

Create a school timetable with columns for Time and 3 days (Mon, Tue, Wed). Include a Lunch Break row that uses colspan=3 to span across all three days.

**Constraints:**

- Must use colspan. At least 4 rows including the lunch row.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A timetable with a Lunch Break row that stretches across all 3 day columns.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Timetable</title>
</head>
<body>
  <table border="1">
    <caption>Ananya's Timetable</caption>
    <tr>
      <th>Time</th><th>Mon</th><th>Tue</th><th>Wed</th>
    </tr>
    <tr>
      <td>9:00</td><td>Maths</td><td>Science</td><td>English</td>
    </tr>
    <tr>
      <td>10:00</td><td>Hindi</td><td>Art</td><td>History</td>
    </tr>
    <tr>
      <td>11:00</td><td colspan="3">Lunch Break</td>
    </tr>
    <tr>
      <td>12:00</td><td>Music</td><td>Sports</td><td>Computer</td>
    </tr>
  </table>
</body>
</html>
```

### Challenge 6. Glossary Description List

**Difficulty:** Medium

Create a description list for at least 5 web development terms (HTML, CSS, JavaScript, Browser, URL) with their meanings.

**Constraints:**

- Use , , and . Full HTML page.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A glossary with 5 terms and their definitions.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Web Glossary</title>
</head>
<body>
  <h1>Web Development Glossary</h1>
  <dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language - the language used to structure web pages.</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets - used to style and lay out web pages.</dd>
    <dt>JavaScript</dt>
    <dd>A programming language that adds interactivity to web pages.</dd>
    <dt>Browser</dt>
    <dd>A program like Chrome or Firefox that displays web pages.</dd>
    <dt>URL</dt>
    <dd>Uniform Resource Locator - the address of a web page on the internet.</dd>
  </dl>
</body>
</html>
```

### Challenge 7. Styled Comparison Table

**Difficulty:** Hard

Build a beautiful styled table comparing 3 phones. Columns: Phone, Price, Battery, Camera, Rating. Use CSS in the head for borders, padding, header background, and alternating row colors.

**Constraints:**

- Use internal CSS. Include border-collapse, padding, and nth-child striping.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A well-designed table with 3 phone rows, alternating row colors, and a colored header.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Phone Comparison</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    table { border-collapse: collapse; width: 100%; max-width: 700px; }
    caption { font-size: 22px; font-weight: bold; margin-bottom: 10px; }
    th, td { border: 1px solid #999; padding: 10px 15px; text-align: left; }
    thead { background-color: #2c3e50; color: white; }
    tr:nth-child(even) { background-color: #f5f5f5; }
    tr:hover { background-color: #e0f0ff; }
  </style>
</head>
<body>
  <table>
    <caption>Best Phones 2026</caption>
    <thead>
      <tr>
        <th>Phone</th><th>Price</th><th>Battery</th><th>Camera</th><th>Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Pixel 10</td><td>60000</td><td>4500 mAh</td><td>50 MP</td><td>4.6</td></tr>
      <tr><td>Galaxy S26</td><td>75000</td><td>5000 mAh</td><td>108 MP</td><td>4.7</td></tr>
      <tr><td>OnePlus 13</td><td>55000</td><td>5200 mAh</td><td>64 MP</td><td>4.5</td></tr>
    </tbody>
  </table>
</body>
</html>
```

### Challenge 8. Complex Timetable with rowspan and colspan

**Difficulty:** Hard

Build a weekly class timetable that uses BOTH rowspan and colspan. Include at least one double-period class (rowspan=2) and at least one assembly row that spans all days (colspan).

**Constraints:**

- Must use both rowspan and colspan. At least 4 time slots.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A timetable with merged cells for double periods and a full-width assembly row.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>School Timetable</title>
  <style>
    table { border-collapse: collapse; margin: 20px; }
    th, td { border: 1px solid #333; padding: 10px 15px; text-align: center; }
    th { background-color: #4a90e2; color: white; }
    .merged { background-color: #fff3b0; }
    .assembly { background-color: #c0f0c0; font-weight: bold; }
  </style>
</head>
<body>
  <table>
    <caption>Rohan's Weekly Schedule</caption>
    <tr>
      <th>Time</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th>
    </tr>
    <tr class="assembly">
      <td>9:00</td>
      <td colspan="3">Morning Assembly (all days)</td>
    </tr>
    <tr>
      <td>10:00</td>
      <td>Maths</td>
      <td rowspan="2" class="merged">Double Art Period</td>
      <td>English</td>
    </tr>
    <tr>
      <td>11:00</td>
      <td>Science</td>
      <td>History</td>
    </tr>
    <tr>
      <td>12:00</td>
      <td>Hindi</td>
      <td>Sports</td>
      <td>Music</td>
    </tr>
  </table>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/lists-and-tables/*
