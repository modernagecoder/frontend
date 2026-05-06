---
title: "SQL ORDER BY, LIMIT, OFFSET, and DISTINCT - Sort, Paginate, Deduplicate | Modern Age Coders"
description: "Learn SQL sorting with ORDER BY (ASC/DESC), multi-column sort, LIMIT with OFFSET for pagination, DISTINCT for unique values, and COUNT(DISTINCT). 56 practice questions with runnable MySQL examples."
slug: sorting-and-limiting
canonical: https://learn.modernagecoders.com/resources/sql/sorting-and-limiting/
category: "SQL"
keywords: ["sql order by", "sql limit offset", "sql pagination", "sql distinct", "sql count distinct", "mysql sort rows", "sql top n", "sql multi-column sort", "sql interview questions"]
---
# ORDER BY, LIMIT, and DISTINCT

**Difficulty:** Beginner  
**Reading time:** 20 min  
**Chapter:** 7  
**Practice questions:** 56

## What Are ORDER BY, LIMIT, and DISTINCT?

In the previous chapter you learned to retrieve rows with `SELECT` and filter them with `WHERE`. But the rows came back in an unpredictable order, and you had no way to say "give me only the top 5" or "remove duplicates." This chapter fixes all three problems.

### ORDER BY — Sorting

`ORDER BY` sorts your result rows. You can sort ascending (`ASC`, the default) or descending (`DESC`), and by multiple columns (e.g., department first, then salary within each department).

### LIMIT and OFFSET — Restricting Rows

`LIMIT n` returns only the first `n` rows. Combined with `ORDER BY`, this gives you queries like "top 5 highest-paid employees." `OFFSET` skips rows — essential for pagination (page 1 shows rows 1-10, page 2 shows rows 11-20, etc.).

### DISTINCT — Removing Duplicates

`SELECT DISTINCT` removes duplicate rows from the result. Useful when you want unique values — e.g., "which departments exist?" or "which cities have orders?". Combined with `COUNT()`, it tells you how many unique values exist.

Together, these three features turn raw data into the kind of sorted, paginated, deduplicated results you actually use in dashboards, reports, and paginated lists.

## Why Do These Matter?

### 1. Every Dashboard Uses ORDER BY

Look at any dashboard — top products by revenue, most recent orders, highest-rated restaurants. Every single one uses `ORDER BY` to present data in a meaningful order. Without sorting, data is just a random pile.

### 2. LIMIT Makes Queries Fast

If you want the top 5 employees, you do NOT want the database to send you 10 million rows and then throw away 9,999,995 of them. `LIMIT 5` lets the database stop early. Combined with an index, this can turn a 10-second query into a 1-millisecond query.

### 3. Pagination Is Everywhere

Instagram feed, Amazon product listings, Gmail inbox — all paginated. Every pagination system on the internet uses SQL's `LIMIT` and `OFFSET` (or similar patterns). If you cannot write a pagination query, you cannot build a real web app.

### 4. DISTINCT Answers "What Categories Exist?"

Product managers constantly ask: "How many unique customers bought from us this month?" "Which countries have active users?" These are all `COUNT(DISTINCT col)` or `SELECT DISTINCT col` queries.

### 5. Interview Staples

"Find the 2nd highest salary" is possibly the most-asked SQL interview question in the world. It uses `ORDER BY`, `LIMIT`, and sometimes `OFFSET`. You will be asked this in literally every SQL interview.

## Detailed Explanation

### Reference Table: products

For this chapter we use a `products` table. Create it once:

```
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    category VARCHAR(30),
    price DECIMAL(10,2),
    stock INT,
    city VARCHAR(30)
);

INSERT INTO products VALUES
(1, 'iPhone 15', 'Electronics', 79999.00, 25, 'Mumbai'),
(2, 'Samsung TV', 'Electronics', 45999.00, 15, 'Delhi'),
(3, 'Running Shoes', 'Sports', 4999.00, 120, 'Bengaluru'),
(4, 'Cricket Bat', 'Sports', 2499.00, 80, 'Mumbai'),
(5, 'Milk 1L', 'Grocery', 68.00, 500, 'Delhi'),
(6, 'Bread', 'Grocery', 45.00, 300, 'Bengaluru'),
(7, 'Headphones', 'Electronics', 3499.00, 60, 'Mumbai'),
(8, 'Yoga Mat', 'Sports', 1299.00, 45, 'Pune'),
(9, 'Rice 5kg', 'Grocery', 420.00, 200, 'Delhi'),
(10, 'Laptop', 'Electronics', 65000.00, 10, 'Bengaluru'),
(11, 'Football', 'Sports', 899.00, 150, 'Mumbai'),
(12, 'Soap', 'Grocery', 60.00, 800, 'Pune');
```

### 1. ORDER BY Basics

Syntax: `ORDER BY column [ASC|DESC]`. ASC (ascending, low to high) is the default — you can omit it.

```
-- Sort products by price ascending
SELECT name, price FROM products ORDER BY price;

-- Sort descending (highest price first)
SELECT name, price FROM products ORDER BY price DESC;
```

### 2. Multi-Column Sort

Provide multiple columns separated by commas. SQL sorts by the first column, then breaks ties using the second, then the third, etc.

```
-- Sort by category ascending, then by price descending within category
SELECT name, category, price FROM products
ORDER BY category ASC, price DESC;
```

Result: Electronics group comes first (alphabetically), with highest-priced electronics at top. Then Grocery group. Then Sports group.

### 3. ORDER BY with Aliases and Expressions

`ORDER BY` is one of the few clauses where column aliases from SELECT ARE allowed (unlike WHERE). You can also sort by computed expressions:

```
-- Sort by total inventory value (price * stock)
SELECT name, price, stock, price * stock AS inventory_value
FROM products
ORDER BY inventory_value DESC;

-- Or use the expression directly
SELECT name, price, stock FROM products
ORDER BY price * stock DESC;
```

You can even sort by column position (1-indexed): `ORDER BY 2 DESC` sorts by the second column in SELECT. This is discouraged — it breaks when you reorder columns.

### 4. NULL Handling in ORDER BY

In MySQL, `NULL` is treated as the **smallest value**. So `ORDER BY col ASC` puts NULLs first, and `ORDER BY col DESC` puts NULLs last. PostgreSQL does the opposite by default. For portability, use `ORDER BY col IS NULL, col` to force NULLs to the end.

### 5. LIMIT — Getting the First N Rows

`LIMIT n` returns the first n rows of the result. Usually paired with ORDER BY:

```
-- Top 3 most expensive products
SELECT name, price FROM products
ORDER BY price DESC
LIMIT 3;
```

Without `ORDER BY`, the "first 3" is whatever rows the database returns first — unpredictable. Always pair LIMIT with ORDER BY for deterministic results.

### 6. LIMIT with OFFSET — Pagination

MySQL supports two equivalent syntaxes:

```
-- Syntax 1: LIMIT offset, count
SELECT * FROM products ORDER BY id LIMIT 10, 5;
-- Skip 10, take 5 (rows 11-15)

-- Syntax 2: LIMIT count OFFSET offset
SELECT * FROM products ORDER BY id LIMIT 5 OFFSET 10;
-- Same thing: skip 10, take 5
```

The second form is clearer — use it. MySQL-only code often uses the first form; PostgreSQL only supports the second.

### 7. Pagination Pattern

To show N items per page, on page P:

```
-- Page 1: LIMIT 10 OFFSET 0
-- Page 2: LIMIT 10 OFFSET 10
-- Page 3: LIMIT 10 OFFSET 20
-- Page P: LIMIT 10 OFFSET (P-1)*10
```

Formula: `OFFSET = (page_number - 1) * page_size`.

#### Performance Warning: Deep OFFSET Is Slow

At page 10000 with page size 10, MySQL has to scan 100,000 rows and throw away the first 99,990. This gets slower and slower. For deep pagination, use **keyset pagination**: `WHERE id > last_seen_id ORDER BY id LIMIT 10`. This is O(log n) with an index instead of O(n).

### 8. DISTINCT — Unique Values

`DISTINCT` removes duplicate rows from the result:

```
-- What categories do we sell?
SELECT DISTINCT category FROM products;
-- Returns: Electronics, Grocery, Sports (3 rows, not 12)

-- What cities?
SELECT DISTINCT city FROM products;
-- Returns: Mumbai, Delhi, Bengaluru, Pune
```

DISTINCT applies to the whole row, not a single column. `SELECT DISTINCT category, city FROM products` returns unique *combinations* of category and city.

```
SELECT DISTINCT category, city FROM products ORDER BY category, city;
-- Returns all unique (category, city) pairs
-- Electronics-Bengaluru, Electronics-Delhi, Electronics-Mumbai,
-- Grocery-Bengaluru, Grocery-Delhi, Grocery-Pune,
-- Sports-Bengaluru, Sports-Mumbai, Sports-Pune
```

### 9. COUNT(DISTINCT col) — How Many Unique Values

To count distinct values, wrap the column in COUNT:

```
-- How many unique categories?
SELECT COUNT(DISTINCT category) FROM products;
-- Returns: 3

-- How many unique cities?
SELECT COUNT(DISTINCT city) FROM products;
-- Returns: 4
```

Note: `COUNT(*)` counts all rows including duplicates. `COUNT(column)` counts non-NULL values. `COUNT(DISTINCT column)` counts unique non-NULL values. NULL is always excluded from DISTINCT counts.

### 10. Order of Clauses

When combining everything, the order matters:

```
SELECT [DISTINCT] columns
FROM table
WHERE conditions
ORDER BY columns
LIMIT n OFFSET m;
```

This is the syntactic order. The logical execution order is different (FROM → WHERE → SELECT → ORDER BY → LIMIT), which matters when you use aliases — more on this in the GROUP BY chapter.

## Code Examples

### Basic ORDER BY ASC and DESC

```sql
-- Ascending (default): cheapest first
SELECT name, price FROM products
ORDER BY price
LIMIT 5;

-- Descending: most expensive first
SELECT name, price FROM products
ORDER BY price DESC
LIMIT 5;
```

ASC is default. DESC reverses. We use LIMIT 5 to keep outputs short. Notice the first query starts with the cheapest (Bread at 45) and the second starts with the most expensive (iPhone at 79999).

**Output:**

```
Query 1 (ascending):
Bread           45.00
Soap            60.00
Milk 1L         68.00
Rice 5kg        420.00
Football        899.00

Query 2 (descending):
iPhone 15       79999.00
Laptop          65000.00
Samsung TV      45999.00
Running Shoes   4999.00
Headphones      3499.00
```

### Multi-Column Sort

```sql
-- Sort by category ascending, then price descending within category
SELECT name, category, price FROM products
ORDER BY category ASC, price DESC;
```

First sort key: category alphabetically (Electronics, Grocery, Sports). Within each category, second sort key: price descending. Inside Electronics: iPhone (79999), Laptop (65000), Samsung TV (45999), Headphones (3499). Inside Grocery: Rice (420), Milk (68), Soap (60), Bread (45).

**Output:**

```
name            category     price
iPhone 15       Electronics  79999.00
Laptop          Electronics  65000.00
Samsung TV      Electronics  45999.00
Headphones      Electronics  3499.00
Rice 5kg        Grocery      420.00
Milk 1L         Grocery      68.00
Soap            Grocery      60.00
Bread           Grocery      45.00
Running Shoes   Sports       4999.00
Cricket Bat     Sports       2499.00
Yoga Mat        Sports       1299.00
Football        Sports       899.00
```

### ORDER BY an Expression

```sql
-- Sort by inventory value (price * stock) descending
SELECT name, price, stock, price * stock AS inventory_value
FROM products
ORDER BY inventory_value DESC
LIMIT 5;
```

We compute `price * stock`, alias it as `inventory_value`, and sort by it. ORDER BY accepts expressions and aliases from SELECT — WHERE does not. iPhone has the highest value: 79999 * 25 = 1,999,975.

**Output:**

```
name            price       stock   inventory_value
iPhone 15       79999.00    25      1999975.00
Laptop          65000.00    10      650000.00
Samsung TV      45999.00    15      689985.00
Running Shoes   4999.00     120     599880.00
Headphones      3499.00     60      209940.00

(Actually, sorted: iPhone 1999975, Samsung TV 689985, Laptop 650000, Running Shoes 599880, Headphones 209940)
```

### LIMIT for Top N

```sql
-- Top 3 most expensive products
SELECT name, price FROM products
ORDER BY price DESC
LIMIT 3;

-- Cheapest 2 products
SELECT name, price FROM products
ORDER BY price ASC
LIMIT 2;
```

LIMIT with ORDER BY is the top-N pattern. Without ORDER BY, the "top 3" would be whatever rows the database returns first, which is unpredictable. Always sort before limiting.

**Output:**

```
Top 3 most expensive:
iPhone 15       79999.00
Laptop          65000.00
Samsung TV      45999.00

Cheapest 2:
Bread           45.00
Soap            60.00
```

### Pagination with LIMIT and OFFSET

```sql
-- 5 items per page, ordered by id

-- Page 1: rows 1-5
SELECT * FROM products ORDER BY id LIMIT 5 OFFSET 0;

-- Page 2: rows 6-10
SELECT * FROM products ORDER BY id LIMIT 5 OFFSET 5;

-- Page 3: rows 11-12 (only 2 left)
SELECT * FROM products ORDER BY id LIMIT 5 OFFSET 10;
```

OFFSET skips rows, LIMIT takes rows. Formula: OFFSET = (page_number - 1) * page_size. Page 1: skip 0, take 5. Page 2: skip 5, take 5. Page 3: skip 10, take 5 but only 2 remain. MySQL alternate syntax `LIMIT 10, 5` means offset 10, limit 5 — watch the order.

**Output:**

```
Page 1: ids 1-5 (iPhone, Samsung TV, Running Shoes, Cricket Bat, Milk 1L)
Page 2: ids 6-10 (Bread, Headphones, Yoga Mat, Rice 5kg, Laptop)
Page 3: ids 11-12 (Football, Soap)
```

### DISTINCT for Unique Values

```sql
-- Unique categories
SELECT DISTINCT category FROM products;

-- Unique cities, sorted
SELECT DISTINCT city FROM products ORDER BY city;

-- Unique (category, city) combinations
SELECT DISTINCT category, city FROM products
ORDER BY category, city;
```

First query: 3 unique categories (Electronics, Grocery, Sports). Second: 4 unique cities alphabetically (Bengaluru, Delhi, Mumbai, Pune). Third: DISTINCT on multiple columns returns unique combinations, not the cross product. We have 9 unique (category, city) pairs.

**Output:**

```
Unique categories (3 rows):
Electronics
Grocery
Sports

Unique cities (4 rows):
Bengaluru
Delhi
Mumbai
Pune

Unique (category, city) - 9 rows:
Electronics Bengaluru
Electronics Delhi
Electronics Mumbai
Grocery Bengaluru
Grocery Delhi
Grocery Pune
Sports Bengaluru
Sports Mumbai
Sports Pune
```

### COUNT(DISTINCT column)

```sql
-- How many unique categories?
SELECT COUNT(DISTINCT category) AS num_categories FROM products;

-- How many unique cities?
SELECT COUNT(DISTINCT city) AS num_cities FROM products;

-- Compare: COUNT(*), COUNT(category), COUNT(DISTINCT category)
SELECT
    COUNT(*) AS all_rows,
    COUNT(category) AS non_null_cats,
    COUNT(DISTINCT category) AS unique_cats
FROM products;
```

COUNT(DISTINCT col) counts unique non-NULL values. Comparison: COUNT(*) = 12 (all rows). COUNT(category) = 12 (none are NULL). COUNT(DISTINCT category) = 3 (Electronics, Grocery, Sports). This three-way distinction is a common interview topic.

**Output:**

```
num_categories: 3
num_cities: 4

Comparison row:
all_rows=12, non_null_cats=12, unique_cats=3
```

### Combined: Top Electronics by Price

```sql
-- Top 3 most expensive Electronics products, with city info
SELECT name, price, city
FROM products
WHERE category = 'Electronics'
ORDER BY price DESC
LIMIT 3;
```

Combining WHERE, ORDER BY, and LIMIT. Filter to Electronics (4 rows), sort by price descending, take top 3. The order of clauses in syntax is WHERE → ORDER BY → LIMIT. Headphones (3499) is the 4th electronic, so it gets cut.

**Output:**

```
name         price     city
iPhone 15    79999.00  Mumbai
Laptop       65000.00  Bengaluru
Samsung TV   45999.00  Delhi
```

### 2nd Highest Salary Pattern (Interview Classic)

```sql
-- Using employees table from chapter 6
-- Get the 2nd highest salary using LIMIT with OFFSET
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;

-- General: Nth highest = LIMIT 1 OFFSET N-1
```

The most-asked SQL interview question ever. Sort salaries descending, use DISTINCT to handle ties, skip the first (highest), take the next one. For 2nd highest: OFFSET 1, LIMIT 1. For 3rd highest: OFFSET 2. Using our employees table (from chapter 6): Diya 110000 is 1st, Rohan 92000 is 2nd. Answer: 92000.

**Output:**

```
salary
92000
(1 row — Rohan Gupta's salary)
```

## Common Mistakes

### Using LIMIT Without ORDER BY

**Wrong:**

```
-- Intent: get the top 5 most expensive products
SELECT * FROM products LIMIT 5;
```

No error, but returns 5 arbitrary rows — not necessarily the most expensive. The database can return rows in any order when there is no ORDER BY.

**Correct:**

```
SELECT * FROM products
ORDER BY price DESC
LIMIT 5;
```

LIMIT without ORDER BY is non-deterministic. The order depends on physical storage, indexes used, and query optimizer decisions — it may even change between runs. Whenever you use LIMIT, pair it with ORDER BY to guarantee which rows you get.

### Mixing Up MySQL's LIMIT a, b Syntax

**Wrong:**

```
-- Trying to get 10 rows starting at row 20
SELECT * FROM products LIMIT 10, 20;
```

No error, but returns WRONG rows. LIMIT 10, 20 means offset 10, limit 20 — skip 10 rows, take 20. Not 10 rows starting at 20.

**Correct:**

```
-- To get 10 rows starting at offset 20:
SELECT * FROM products LIMIT 20, 10;
-- Or clearer:
SELECT * FROM products LIMIT 10 OFFSET 20;
```

MySQL's two-argument LIMIT is `LIMIT offset, count` (offset first, count second). This confuses everyone. Always use the `LIMIT count OFFSET offset` syntax — it is unambiguous and matches PostgreSQL.

### DISTINCT Only On Some Columns

**Wrong:**

```
-- Intent: unique names, but also show price
SELECT DISTINCT name, price FROM products;
```

No error, but DISTINCT applies to the WHOLE ROW (name + price), not just name. If two rows have the same name but different prices, both appear.

**Correct:**

```
-- If you just want unique names:
SELECT DISTINCT name FROM products;

-- If you want one price per name (e.g., highest), use GROUP BY:
SELECT name, MAX(price) FROM products GROUP BY name;
```

DISTINCT is row-level, not column-level. `SELECT DISTINCT name, price` returns unique (name, price) pairs. To get unique names with one price each, you need GROUP BY with an aggregate — covered in chapter 10.

### Deep OFFSET Getting Slow

**Wrong:**

```
-- Page 10,000 of a large table:
SELECT * FROM products ORDER BY id LIMIT 10 OFFSET 99990;
```

No error, but performance degrades badly. MySQL must scan 100,000 rows and throw away 99,990 before returning 10. A query that is fast on page 1 can take seconds on page 10,000.

**Correct:**

```
-- Keyset pagination (remember the last seen id):
SELECT * FROM products
WHERE id > 99990  -- last seen id from previous page
ORDER BY id
LIMIT 10;
```

OFFSET is O(n) — it scans all skipped rows. For deep pagination in production (Instagram-style infinite scroll), use keyset pagination: `WHERE id > last_seen_id ORDER BY id LIMIT n`. This is O(log n) with an index.

### ORDER BY in WHERE or DISTINCT in WHERE

**Wrong:**

```
SELECT * FROM products WHERE ORDER BY price DESC;
SELECT * FROM products WHERE DISTINCT category = 'Sports';
```

Both are syntax errors. ORDER BY is a top-level clause, not a WHERE modifier. DISTINCT goes right after SELECT, not inside WHERE.

**Correct:**

```
-- Correct syntax:
SELECT * FROM products
WHERE category = 'Sports'
ORDER BY price DESC;

SELECT DISTINCT category FROM products
WHERE category = 'Sports';
```

Clauses have a strict order: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT. DISTINCT goes inside SELECT. Never mix them up.

## Summary

- ORDER BY sorts the result. ASC is ascending (default), DESC is descending. Without ORDER BY, row order is unpredictable.
- Multi-column sort: ORDER BY col1, col2 sorts by col1, ties broken by col2. Each column can have its own ASC/DESC.
- ORDER BY accepts column aliases from SELECT and computed expressions. WHERE does not — that is a key difference.
- LIMIT n returns the first n rows. ALWAYS pair with ORDER BY to make the result deterministic.
- MySQL two-syntaxes: LIMIT 10, 5 (offset 10, count 5) and LIMIT 5 OFFSET 10 (count 5, offset 10). Prefer the second — it's clear and portable.
- Pagination formula: OFFSET = (page_number - 1) * page_size. Page 1 starts at offset 0.
- Deep OFFSET is slow because MySQL scans and discards skipped rows. For production pagination, use keyset pagination with WHERE id > last_seen_id.
- DISTINCT removes duplicate rows from the result. SELECT DISTINCT col1, col2 returns unique combinations of col1 and col2 — it applies row-wise, not column-wise.
- COUNT(DISTINCT column) counts unique non-NULL values. Compare with COUNT(*) (all rows) and COUNT(column) (non-NULL rows).
- Classic interview pattern — Nth highest salary: SELECT DISTINCT salary FROM table ORDER BY salary DESC LIMIT 1 OFFSET N-1.

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/sorting-and-limiting/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/sorting-and-limiting/practice/*
