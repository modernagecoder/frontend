---
title: "Practice: ORDER BY, LIMIT, and DISTINCT"
description: "56 practice problems for ORDER BY, LIMIT, and DISTINCT in SQL"
slug: sorting-and-limiting-practice
canonical: https://learn.modernagecoders.com/resources/sql/sorting-and-limiting/practice/
category: "SQL"
---
# Practice: ORDER BY, LIMIT, and DISTINCT

**Total questions:** 56

## Topic-Specific Questions

### Q1. [Easy] Sort all products by price ascending. Return name and price.

*Hint:* ORDER BY price (ASC is default).

**Answer:** ```
SELECT name, price FROM products ORDER BY price;
```

ASC is default and can be omitted. Returns all 12 products with Bread (45) first and iPhone (79999) last.

### Q2. [Easy] Get the top 5 most expensive products.

*Hint:* ORDER BY DESC + LIMIT.

**Answer:** ```
SELECT name, price FROM products
ORDER BY price DESC
LIMIT 5;
```

Top 5 by price: iPhone 15 (79999), Laptop (65000), Samsung TV (45999), Running Shoes (4999), Headphones (3499).

### Q3. [Easy] List unique categories in the products table.

*Hint:* SELECT DISTINCT.

**Answer:** ```
SELECT DISTINCT category FROM products;
```

Returns 3 rows: Electronics, Grocery, Sports. The order depends on MySQL — add ORDER BY for deterministic order.

### Q4. [Easy] Count how many unique cities the products are from.

*Hint:* COUNT(DISTINCT ...).

**Answer:** ```
SELECT COUNT(DISTINCT city) FROM products;
```

Returns 4 (Mumbai, Delhi, Bengaluru, Pune).

### Q5. [Easy] Sort all products by stock ascending, but only show the lowest 3 stock items.

*Hint:* LIMIT + ASC sort.

**Answer:** ```
SELECT name, stock FROM products
ORDER BY stock ASC
LIMIT 3;
```

Lowest stock: Laptop (10), Samsung TV (15), iPhone 15 (25).

### Q6. [Easy] Get page 2 of products (5 per page), sorted by id.

*Hint:* OFFSET = (2-1) * 5 = 5.

**Answer:** ```
SELECT * FROM products
ORDER BY id
LIMIT 5 OFFSET 5;
```

Page 2 shows rows 6-10: Bread, Headphones, Yoga Mat, Rice 5kg, Laptop.

### Q7. [Easy] How many rows?

```
SELECT DISTINCT category FROM products;
```

*Hint:* Count distinct categories.

**Answer:** `3 rows`

Three unique categories: Electronics, Grocery, Sports.

### Q8. [Easy] What is the first row?

```
SELECT name FROM products ORDER BY price DESC LIMIT 1;
```

*Hint:* Highest priced product.

**Answer:** `iPhone 15`

iPhone 15 at 79999 is the most expensive. LIMIT 1 returns just that.

### Q9. [Medium] Sort products by category ascending, then by price descending within each category.

*Hint:* Multi-column ORDER BY.

**Answer:** ```
SELECT name, category, price FROM products
ORDER BY category ASC, price DESC;
```

Electronics group first alphabetically, sorted by price DESC within. Then Grocery. Then Sports.

### Q10. [Medium] Find the 2nd cheapest product (lowest price is 1st). Return name and price.

*Hint:* ORDER BY ASC, OFFSET 1, LIMIT 1.

**Answer:** ```
SELECT name, price FROM products
ORDER BY price ASC
LIMIT 1 OFFSET 1;
```

Cheapest: Bread (45). 2nd cheapest: Soap (60). Offset 1 skips Bread, Limit 1 returns Soap.

### Q11. [Medium] Return the product with the highest inventory value (price * stock).

*Hint:* Sort by price * stock DESC, LIMIT 1.

**Answer:** ```
SELECT name, price, stock, price * stock AS inventory_value
FROM products
ORDER BY price * stock DESC
LIMIT 1;
```

iPhone: 79999 * 25 = 1,999,975. This is the highest. You can sort by the expression directly or by the alias.

### Q12. [Medium] List unique (category, city) combinations sorted by category then city.

*Hint:* DISTINCT on multiple columns.

**Answer:** ```
SELECT DISTINCT category, city FROM products
ORDER BY category, city;
```

DISTINCT applies row-wise, so this returns unique (category, city) pairs. 9 rows total based on our data.

### Q13. [Medium] Get page 3 of products, 4 items per page, ordered by name.

*Hint:* OFFSET = (3-1) * 4 = 8.

**Answer:** ```
SELECT * FROM products
ORDER BY name
LIMIT 4 OFFSET 8;
```

After sorting by name, page 3 shows positions 9-12. Depending on names that might be last 4 alphabetically (Running Shoes, Samsung TV, Soap, Yoga Mat).

### Q14. [Medium] What is returned?

```
SELECT DISTINCT category, city FROM products
WHERE category = 'Sports';
```

*Hint:* Sports is in which cities?

**Answer:** `Sports Bengaluru
Sports Mumbai
Sports Pune
(3 rows)`

Sports products: Running Shoes (Bengaluru), Cricket Bat (Mumbai), Yoga Mat (Pune), Football (Mumbai). Unique (category, city): Sports-Bengaluru, Sports-Mumbai, Sports-Pune. 3 rows.

### Q15. [Easy] What is the difference between ASC and DESC in ORDER BY?

*Hint:* Direction of sorting.

**Answer:** `ASC` means **ascending** — smallest first, largest last. This is the default. `DESC` means **descending** — largest first, smallest last. For strings, ASC is alphabetical (A to Z), DESC is reverse (Z to A). For dates, ASC is oldest first, DESC is newest first.

You can mix both in multi-column sort: `ORDER BY category ASC, price DESC`. Default is ASC, so omitting gives ascending order.

### Q16. [Medium] Why should you always use ORDER BY with LIMIT?

*Hint:* Determinism.

**Answer:** Without ORDER BY, SQL does not guarantee any particular order of rows. LIMIT just takes the first n rows of whatever order the database chose, which can change between queries. Using ORDER BY makes the result deterministic and predictable. Always pair LIMIT with ORDER BY in production code.

In MySQL, without ORDER BY, results are usually returned in insertion or index order, but this is implementation-defined and not guaranteed. A query that worked yesterday may return different rows today after a database upgrade.

### Q17. [Medium] Explain the difference between COUNT(*), COUNT(column), and COUNT(DISTINCT column).

*Hint:* What each counts.

**Answer:** `COUNT(*)` counts all rows in the result, including NULLs. `COUNT(column)` counts rows where *column* is NOT NULL — NULLs are skipped. `COUNT(DISTINCT column)` counts unique non-NULL values — duplicates and NULLs are excluded.

Example: if column has values [1, 2, 2, NULL, NULL], COUNT(*) = 5, COUNT(column) = 3, COUNT(DISTINCT column) = 2. This distinction is critical in interviews.

### Q18. [Medium] Find the 3rd highest priced product using LIMIT and OFFSET.

*Hint:* OFFSET 2, LIMIT 1 after ORDER BY DESC.

**Answer:** ```
SELECT name, price FROM products
ORDER BY price DESC
LIMIT 1 OFFSET 2;
```

1st: iPhone (79999). 2nd: Laptop (65000). 3rd: Samsung TV (45999). OFFSET 2 skips the first two, LIMIT 1 returns the next one.

### Q19. [Hard] Return 3 products with the highest stock, but only among Grocery items.

*Hint:* WHERE filter + ORDER BY + LIMIT.

**Answer:** ```
SELECT name, stock FROM products
WHERE category = 'Grocery'
ORDER BY stock DESC
LIMIT 3;
```

Grocery items by stock DESC: Soap (800), Milk 1L (500), Bread (300), Rice 5kg (200). Top 3: Soap, Milk 1L, Bread.

### Q20. [Hard] Count how many unique categories exist for products priced above 1000.

*Hint:* WHERE + COUNT(DISTINCT).

**Answer:** ```
SELECT COUNT(DISTINCT category) FROM products
WHERE price > 1000;
```

Products with price > 1000: iPhone, Samsung TV, Running Shoes, Cricket Bat, Headphones, Yoga Mat, Laptop. Categories: Electronics, Sports. Count: 2.

### Q21. [Hard] Why does LIMIT 10000 OFFSET 99990 become slow? How would you fix it for production?

*Hint:* Think about what MySQL has to do for OFFSET.

**Answer:** OFFSET requires MySQL to scan and discard every row up to the offset position. So OFFSET 99990 scans 99,990 rows just to throw them away. This is O(n). Fix: use **keyset pagination** — remember the last id/value from the previous page and use `WHERE id > last_seen_id ORDER BY id LIMIT n`. This is O(log n) with an index and stays fast regardless of page depth.

This is why Twitter/Instagram use infinite-scroll IDs (the 'since_id' pattern) instead of page numbers — keyset pagination scales to billions of rows.

### Q22. [Hard] What does this return (from employees table)?

```
SELECT DISTINCT salary FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 2;
```

*Hint:* 3rd highest distinct salary.

**Answer:** `81000 (Karan Mehta's salary)`

Employee salaries DESC: 110000, 92000, 81000, 75000, 68000, 63000, 58000, 52000, 47000, 45000. No duplicates. 3rd highest (offset 2 + limit 1) = 81000.

### Q23. [Hard] Return all products sorted by category ASC, but within each category sort by stock DESC and then price ASC.

*Hint:* Three sort keys.

**Answer:** ```
SELECT name, category, stock, price FROM products
ORDER BY category ASC, stock DESC, price ASC;
```

First sort: category alphabetically. Within each category, highest stock first. If stock ties, cheapest first. SQL applies sort keys in the order listed.

### Q24. [Hard] Paginate Electronics products, 2 per page. Write the query for page 2.

*Hint:* WHERE first, then ORDER BY, then LIMIT/OFFSET.

**Answer:** ```
SELECT * FROM products
WHERE category = 'Electronics'
ORDER BY id
LIMIT 2 OFFSET 2;
```

Electronics sorted by id: iPhone (1), Samsung TV (2), Headphones (7), Laptop (10). Page 2 (offset 2, limit 2) returns rows 3-4: Headphones and Laptop.

### Q25. [Hard] In MySQL, how are NULLs sorted by default in ORDER BY?

*Hint:* NULLs treated as smallest or largest?

**Answer:** MySQL treats NULL as the **smallest value**. So `ORDER BY col ASC` puts NULLs first (at the top), and `ORDER BY col DESC` puts NULLs last. This differs from PostgreSQL which does the opposite by default. For portable code, use `ORDER BY col IS NULL, col` to force NULLs to the bottom regardless of database.

This is a subtle portability issue. PostgreSQL supports `ORDER BY col NULLS FIRST/LAST` directly, which MySQL does not. The `IS NULL` trick works everywhere.

## Mixed Questions

### Q1. [Easy] Sort products by name alphabetically.

*Hint:* ORDER BY name.

**Answer:** ```
SELECT * FROM products ORDER BY name;
```

Alphabetical sort: Bread, Cricket Bat, Football, Headphones, iPhone 15, Laptop, ... (12 rows).

### Q2. [Easy] Get the cheapest product.

*Hint:* ORDER BY ASC, LIMIT 1.

**Answer:** ```
SELECT name, price FROM products
ORDER BY price ASC
LIMIT 1;
```

Bread at 45.00 is the cheapest.

### Q3. [Easy] Show how many products we have in total.

*Hint:* COUNT(*).

**Answer:** ```
SELECT COUNT(*) FROM products;
```

Returns 12 — our total number of products.

### Q4. [Easy] Find all distinct prices (in case of duplicates).

*Hint:* DISTINCT price.

**Answer:** ```
SELECT DISTINCT price FROM products ORDER BY price;
```

All 12 products have unique prices in our data, so 12 rows returned. If any were duplicated, DISTINCT would remove them.

### Q5. [Easy] How many rows?

```
SELECT * FROM products LIMIT 0;
```

*Hint:* Limit zero.

**Answer:** `0 rows`

LIMIT 0 returns no rows. Useful when you only want to inspect the column structure without data.

### Q6. [Easy] List distinct cities in alphabetical order.

*Hint:* DISTINCT + ORDER BY.

**Answer:** ```
SELECT DISTINCT city FROM products ORDER BY city;
```

Bengaluru, Delhi, Mumbai, Pune — alphabetically. 4 rows.

### Q7. [Easy] What is the first product returned?

```
SELECT name FROM products ORDER BY stock DESC LIMIT 1;
```

*Hint:* Highest stock.

**Answer:** `Soap`

Soap has stock 800 — the highest. Milk has 500, Bread 300, Rice 200, Football 150, Running Shoes 120, etc.

### Q8. [Medium] Get the 3 most expensive Electronics.

*Hint:* WHERE + ORDER BY DESC + LIMIT.

**Answer:** ```
SELECT name, price FROM products
WHERE category = 'Electronics'
ORDER BY price DESC
LIMIT 3;
```

iPhone (79999), Laptop (65000), Samsung TV (45999).

### Q9. [Medium] Get 2 products from the middle of the alphabetically sorted list (positions 6-7).

*Hint:* OFFSET 5, LIMIT 2.

**Answer:** ```
SELECT name FROM products
ORDER BY name
LIMIT 2 OFFSET 5;
```

Alphabetical order positions 1-12, offset 5 skips first 5, limit 2 returns positions 6 and 7.

### Q10. [Medium] Count distinct categories for products in Mumbai.

*Hint:* WHERE + COUNT(DISTINCT).

**Answer:** ```
SELECT COUNT(DISTINCT category) FROM products
WHERE city = 'Mumbai';
```

Mumbai products: iPhone (Electronics), Cricket Bat (Sports), Headphones (Electronics), Football (Sports). Categories: Electronics, Sports. Count: 2.

### Q11. [Medium] Sort products descending by price, but return only the 4th and 5th in the list.

*Hint:* OFFSET 3, LIMIT 2.

**Answer:** ```
SELECT name, price FROM products
ORDER BY price DESC
LIMIT 2 OFFSET 3;
```

Descending: iPhone, Laptop, Samsung TV, Running Shoes, Headphones, ... Position 4-5 = Running Shoes (4999) and Headphones (3499).

### Q12. [Medium] How many rows?

```
SELECT DISTINCT category, city FROM products
WHERE city = 'Mumbai';
```

*Hint:* Unique (category, city) for Mumbai.

**Answer:** `2 rows`

Mumbai has Electronics (iPhone, Headphones) and Sports (Cricket Bat, Football). Unique pairs: (Electronics, Mumbai), (Sports, Mumbai). 2 rows.

### Q13. [Medium] Return the product with highest stock. Use ORDER BY DESC LIMIT 1.

*Hint:* Direct sort and limit.

**Answer:** ```
SELECT name, stock FROM products
ORDER BY stock DESC
LIMIT 1;
```

Soap with stock 800.

### Q14. [Medium] Paginate all products with 3 per page. Write query for page 4.

*Hint:* OFFSET = (4-1)*3 = 9.

**Answer:** ```
SELECT * FROM products
ORDER BY id
LIMIT 3 OFFSET 9;
```

Page 4 has rows 10-12: Laptop, Football, Soap. (12 rows total, 3 per page = 4 pages.)

### Q15. [Medium] Write a query for employees (from chapter 6) that returns their names in descending salary order.

*Hint:* Single-column sort.

**Answer:** ```
SELECT name, salary FROM employees
ORDER BY salary DESC;
```

Diya (110000), Rohan (92000), Karan (81000), Aarav (75000), Ananya (68000), Aditya (63000), Sneha (58000), Priya (52000), Ishita (47000), Vikram (45000).

### Q16. [Medium] Find the 2nd highest salary in the employees table.

*Hint:* Classic interview. LIMIT 1 OFFSET 1 after DESC sort.

**Answer:** ```
SELECT DISTINCT salary FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;
```

Highest is 110000 (Diya). 2nd is 92000 (Rohan). Using DISTINCT handles ties (two people with the same salary count as one rank).

### Q17. [Medium] How many rows?

```
SELECT DISTINCT category FROM products
WHERE price > 50000;
```

*Hint:* Products above 50000 are all in which category?

**Answer:** `1 row`

Products > 50000: iPhone (79999, Electronics), Laptop (65000, Electronics). Only one distinct category: Electronics.

### Q18. [Medium] Get top 5 Grocery items by stock. Return name, stock.

*Hint:* WHERE + ORDER BY + LIMIT.

**Answer:** ```
SELECT name, stock FROM products
WHERE category = 'Grocery'
ORDER BY stock DESC
LIMIT 5;
```

Grocery has 4 items: Soap (800), Milk (500), Bread (300), Rice (200). All 4 returned (LIMIT 5 but only 4 exist).

### Q19. [Hard] Return a list showing unique (city, category) pairs sorted by city ascending, then category descending.

*Hint:* DISTINCT + multi-column ORDER BY.

**Answer:** ```
SELECT DISTINCT city, category FROM products
ORDER BY city ASC, category DESC;
```

Lists unique pairs. Bengaluru (Sports, Grocery, Electronics), Delhi (Grocery, Electronics), Mumbai (Sports, Electronics), Pune (Sports, Grocery). Note DESC puts Sports before Grocery before Electronics within each city.

### Q20. [Hard] Find the 3 cheapest products in each category using LIMIT (hint: you cannot do it with a single LIMIT — but write a query for just Grocery).

*Hint:* For a single category, use WHERE + ORDER BY + LIMIT.

**Answer:** ```
-- For Grocery only:
SELECT name, price FROM products
WHERE category = 'Grocery'
ORDER BY price ASC
LIMIT 3;
```

3 cheapest Grocery: Bread (45), Soap (60), Milk 1L (68). To do it across all categories, you need window functions (ROW_NUMBER with PARTITION BY) — covered in chapter 18.

### Q21. [Hard] What does this return?

```
SELECT COUNT(*), COUNT(DISTINCT category), COUNT(DISTINCT city)
FROM products;
```

*Hint:* Three counts: rows, unique categories, unique cities.

**Answer:** `12, 3, 4`

COUNT(*) = 12 total products. COUNT(DISTINCT category) = 3 (Electronics, Grocery, Sports). COUNT(DISTINCT city) = 4 (Mumbai, Delhi, Bengaluru, Pune).

### Q22. [Hard] Return the top 3 cities by the number of products they have. (Hint: you'll need GROUP BY — preview of chapter 10.)

*Hint:* GROUP BY city, COUNT(*), ORDER BY count DESC.

**Answer:** ```
SELECT city, COUNT(*) AS num_products FROM products
GROUP BY city
ORDER BY num_products DESC
LIMIT 3;
```

This previews GROUP BY (chapter 10). Mumbai has 4 (iPhone, Cricket Bat, Headphones, Football), Delhi 3, Bengaluru 3, Pune 2. Top 3: Mumbai, Delhi, Bengaluru (or Bengaluru, Delhi — tie).

### Q23. [Hard] Return the 5th to 8th most expensive products (like items on page 2 with 4 per page).

*Hint:* LIMIT 4 OFFSET 4.

**Answer:** ```
SELECT name, price FROM products
ORDER BY price DESC
LIMIT 4 OFFSET 4;
```

Descending order. Positions 1-4: iPhone, Laptop, Samsung TV, Running Shoes. Positions 5-8 (page 2): Headphones, Cricket Bat, Yoga Mat, Football.

### Q24. [Hard] What is the 2nd row?

```
SELECT name FROM products
ORDER BY category, price DESC;
```

*Hint:* Categories alphabetically, then price DESC.

**Answer:** `Laptop (2nd row)`

Categories alphabetically: Electronics first. Within Electronics sorted by price DESC: iPhone (79999), Laptop (65000), Samsung TV (45999), Headphones (3499). 2nd row = Laptop.

## Multiple Choice Questions

### Q1. [Easy] What is the default sort order of ORDER BY?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** ASC (ascending) is the default. `ORDER BY price` and `ORDER BY price ASC` are identical.

### Q2. [Easy] Which clause limits the number of returned rows?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** LIMIT is MySQL's syntax. SQL Server uses TOP, Oracle uses ROWNUM. The SQL standard is actually `FETCH FIRST n ROWS ONLY`.

### Q3. [Easy] What does DISTINCT do?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** DISTINCT removes duplicates from the result set. Applies to the whole row of selected columns.

### Q4. [Easy] Which query returns the 5 most expensive products?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** ORDER BY price DESC sorts most expensive first, then LIMIT 5 takes top 5. Option A has wrong clause order. Option B gives cheapest, not most expensive. Option D is SQL Server syntax, not MySQL.

### Q5. [Easy] What does LIMIT 10 OFFSET 20 return?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** OFFSET 20 skips the first 20 rows. LIMIT 10 takes the next 10. So rows 21-30.

### Q6. [Easy] For pagination with 10 items per page, what is the OFFSET for page 4?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** Formula: OFFSET = (page - 1) * page_size = (4 - 1) * 10 = 30. Page 4 shows rows 31-40.

### Q7. [Easy] Which query counts unique values in a column?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** COUNT(DISTINCT col) counts unique non-NULL values. COUNT(col) counts non-NULL rows (with duplicates). The others are not valid SQL syntax.

### Q8. [Medium] What is the correct order of clauses?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** The syntactic order is: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT. Putting them in any other order is a syntax error.

### Q9. [Medium] What does SELECT DISTINCT category, city return?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** DISTINCT applies to the entire row of selected columns. So this returns unique (category, city) pairs.

### Q10. [Medium] Why should LIMIT always be paired with ORDER BY?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Without ORDER BY, the database can return rows in any order (depends on storage, indexes, optimizer). LIMIT just grabs the first n of whatever that order is — unpredictable and risky.

### Q11. [Medium] Which is equivalent to LIMIT 10 OFFSET 5 in MySQL?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** MySQL's two-argument form is `LIMIT offset, count`. So `LIMIT 5, 10` means offset 5, limit 10 — same as `LIMIT 10 OFFSET 5`. This confuses everyone — prefer the OFFSET keyword.

### Q12. [Medium] To get the 3rd highest distinct salary, which works?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** DESC sort puts highest first. OFFSET 2 skips positions 1 and 2 (highest and 2nd highest). LIMIT 1 returns the 3rd highest. Remember to add DISTINCT if you want to skip ties.

### Q13. [Medium] In MySQL, ORDER BY col ASC places NULLs where?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** MySQL treats NULL as the smallest value, so ASC puts NULLs at the top. DESC puts them at the bottom. PostgreSQL does the opposite. For portable code, use `ORDER BY col IS NULL, col`.

### Q14. [Medium] You want all Grocery products sorted from cheapest to most expensive. Correct query?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** WHERE before ORDER BY (correct clause order), ASC is default. Option A sorts descending (reverse direction). Options B and D have invalid clause order.

### Q15. [Medium] What does COUNT(DISTINCT salary) return for a column with values [100, 200, 200, 300, NULL]?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** COUNT(DISTINCT) excludes NULL and counts unique values. Unique non-NULL values: 100, 200, 300 — that's 3.

### Q16. [Hard] For a products table sorted by price DESC with LIMIT 5 OFFSET 3, which rows are returned?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** OFFSET 3 skips positions 1-3. LIMIT 5 takes positions 4-8 (5 rows: positions 4, 5, 6, 7, 8).

### Q17. [Hard] Why is deep OFFSET (like OFFSET 100000) slow?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** OFFSET makes MySQL read and throw away rows until it reaches the offset position. For OFFSET 100000, that's 100,000 discarded rows. Fix: keyset pagination with `WHERE id > last_seen_id`.

### Q18. [Hard] What does SELECT DISTINCT * FROM products do?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** DISTINCT * removes rows where ALL columns are identical. With a primary key like id, no two rows are identical, so DISTINCT * returns everything. It's valid syntax but rarely useful.

### Q19. [Hard] In a multi-column ORDER BY col1 ASC, col2 DESC, how are ties in col1 broken?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Each column has its own direction. When col1 ties, col2 DESC orders the tied rows with highest col2 first.

### Q20. [Hard] Which query would let you find the employee with the 5th highest salary, handling ties correctly?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** DISTINCT handles ties — if two people have the same salary, they count as one rank. Without DISTINCT, the result depends on which duplicate is returned. Option A would fail for a table with duplicate salaries in the top 5.

## Coding Challenges

### Challenge 1. Top 3 Highest Priced Products

**Difficulty:** Easy

Return the 3 most expensive products, showing name and price.

**Constraints:**

- Use ORDER BY + LIMIT.

**Sample input:**

```
products table.
```

**Sample output:**

```
iPhone 15 79999.00
Laptop 65000.00
Samsung TV 45999.00
```

**Solution:**

```sql
SELECT name, price FROM products
ORDER BY price DESC
LIMIT 3;
```

### Challenge 2. Unique Cities

**Difficulty:** Easy

List all distinct cities where products are stored, sorted alphabetically.

**Constraints:**

- Use DISTINCT + ORDER BY.

**Sample input:**

```
products table.
```

**Sample output:**

```
Bengaluru
Delhi
Mumbai
Pune
```

**Solution:**

```sql
SELECT DISTINCT city FROM products ORDER BY city;
```

### Challenge 3. Pagination Page 2

**Difficulty:** Medium

Get products 6 through 10 when sorted by id. This is page 2 with 5 items per page.

**Constraints:**

- OFFSET = (page-1)*size.

**Sample input:**

```
products table.
```

**Sample output:**

```
Bread, Headphones, Yoga Mat, Rice 5kg, Laptop (ids 6-10)
```

**Solution:**

```sql
SELECT * FROM products
ORDER BY id
LIMIT 5 OFFSET 5;
```

### Challenge 4. 2nd Highest Salary

**Difficulty:** Medium

Given the employees table from chapter 6, find the 2nd highest distinct salary.

**Constraints:**

- Use DISTINCT, ORDER BY DESC, LIMIT 1 OFFSET 1.

**Sample input:**

```
employees table.
```

**Sample output:**

```
92000
```

**Solution:**

```sql
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;
```

### Challenge 5. Most Expensive Per Alphabetical Order

**Difficulty:** Medium

Sort products alphabetically by name. For each, show position in the sorted list (using row number via variables or window functions). Simpler version: just return name and price sorted by name.

**Constraints:**

- ORDER BY name.

**Sample input:**

```
products table.
```

**Sample output:**

```
All 12 products in alphabetical order.
```

**Solution:**

```sql
SELECT name, price FROM products ORDER BY name;
```

### Challenge 6. Count Distinct Per Filter

**Difficulty:** Medium

Count the number of distinct categories for products priced below 5000.

**Constraints:**

- WHERE + COUNT(DISTINCT).

**Sample input:**

```
products table.
```

**Sample output:**

```
3
```

**Solution:**

```sql
SELECT COUNT(DISTINCT category) FROM products
WHERE price < 5000;
```

### Challenge 7. Top 2 From Each City Category (Tricky)

**Difficulty:** Hard

Return the single most expensive product in Mumbai, then the single most expensive product in Delhi. Combine using UNION (preview of chapter 14) or write separate queries.

**Constraints:**

- Two queries or UNION.

**Sample input:**

```
products table.
```

**Sample output:**

```
Mumbai: iPhone 15 (79999)
Delhi: Samsung TV (45999)
```

**Solution:**

```sql
-- Two separate queries:
SELECT name, price FROM products WHERE city = 'Mumbai' ORDER BY price DESC LIMIT 1;
SELECT name, price FROM products WHERE city = 'Delhi' ORDER BY price DESC LIMIT 1;

-- Or using UNION (covered later):
(SELECT name, price, city FROM products WHERE city = 'Mumbai' ORDER BY price DESC LIMIT 1)
UNION
(SELECT name, price, city FROM products WHERE city = 'Delhi' ORDER BY price DESC LIMIT 1);
```

### Challenge 8. Nth Highest — Parameterized Pattern

**Difficulty:** Hard

Write the query pattern to find the Nth highest distinct price from products. Test with N=4 (4th highest).

**Constraints:**

- LIMIT 1 OFFSET N-1 with DISTINCT.

**Sample input:**

```
products table.
```

**Sample output:**

```
For N=4, the 4th highest distinct price. Prices DESC: 79999, 65000, 45999, 4999, 3499, ... So 4th = 4999 (Running Shoes).
```

**Solution:**

```sql
-- Template: replace N with the desired rank
SELECT DISTINCT price FROM products
ORDER BY price DESC
LIMIT 1 OFFSET 3;  -- for N=4, offset = N-1 = 3

-- Returns: 4999 (Running Shoes)
```

---

*Notes: https://learn.modernagecoders.com/resources/sql/sorting-and-limiting/*
