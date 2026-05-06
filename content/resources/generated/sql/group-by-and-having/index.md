---
title: "SQL GROUP BY and HAVING - Aggregate by Groups, Filter Groups | Modern Age Coders"
description: "Master SQL GROUP BY for grouping rows and HAVING for filtering groups. Learn clause order (WHERE vs HAVING), multi-column grouping, ROLLUP, and classic interview queries. 60 MySQL practice questions."
slug: group-by-and-having
canonical: https://learn.modernagecoders.com/resources/sql/group-by-and-having
category: "SQL"
keywords: ["sql group by", "sql having", "sql group by vs having", "group by multiple columns", "sql clause order", "sql rollup", "mysql group by", "sql aggregate interview questions", "top n per group"]
---
# GROUP BY and HAVING

**Difficulty:** Intermediate  
**Reading time:** 24 min  
**Chapter:** 10  
**Practice questions:** 60

## What Is GROUP BY?

In the last chapter you computed aggregates over the whole table or over rows filtered by WHERE. But what if you want one aggregate **per department**, or per city, or per month? That is what `GROUP BY` does.

`GROUP BY` splits the rows into groups based on the values of one or more columns, then applies aggregate functions **within each group**. The result has one row per group.

Example: `SELECT department, AVG(salary) FROM employees GROUP BY department` returns one row for each department with that department's average salary.

### What Is HAVING?

Once you have grouped rows, you often want to filter the groups themselves. "Show only departments with more than 5 employees." "Show only cities where total sales exceed 100000." That is `HAVING`.

**WHERE filters rows before grouping. HAVING filters groups after.** This is the single most important distinction in this chapter and a favorite interview question.

## Why GROUP BY Is Essential

### 1. Every Summary Report Uses GROUP BY

"Revenue per country," "Orders per month," "Active users per day," "Enrollments per course" — all GROUP BY queries. Business intelligence is 80% GROUP BY.

### 2. It's Where SQL Gets Powerful

Simple SELECT and WHERE queries are useful but limited. GROUP BY unlocks real analytics: top-selling products, busiest hours, best-performing regions. Many data analyst roles exist specifically to write complex GROUP BY queries.

### 3. HAVING Answers the "Which Group" Questions

"Which courses have more than 100 students?" "Which products have never been returned?" "Which days had zero signups?" All need HAVING because you are filtering GROUPS based on their aggregate properties.

### 4. Clause Order Misunderstandings Kill Careers

Using an alias in WHERE, putting HAVING before GROUP BY, referencing an aggregate in WHERE — these are career-limiting mistakes in interviews. This chapter nails down the exact order.

### 5. Every Interview Tests This

"Find departments where the average salary is above 70000" and variants are asked in 100% of SQL interviews. After this chapter, you will write these in your sleep.

## Detailed Explanation

### Reference Table: sales

We use a `sales` table for this chapter:

```
CREATE TABLE sales (
    id INT PRIMARY KEY,
    salesperson VARCHAR(50),
    region VARCHAR(30),
    product VARCHAR(40),
    amount DECIMAL(10,2),
    sale_date DATE
);

INSERT INTO sales VALUES
(1, 'Aarav Sharma', 'North', 'Laptop', 55000, '2026-01-10'),
(2, 'Priya Patel', 'South', 'Phone', 25000, '2026-01-15'),
(3, 'Rohan Gupta', 'North', 'Laptop', 60000, '2026-01-20'),
(4, 'Ananya Singh', 'East', 'Tablet', 18000, '2026-02-05'),
(5, 'Aarav Sharma', 'North', 'Phone', 22000, '2026-02-12'),
(6, 'Vikram Reddy', 'South', 'Laptop', 58000, '2026-02-18'),
(7, 'Priya Patel', 'South', 'Tablet', 20000, '2026-02-25'),
(8, 'Rohan Gupta', 'North', 'Phone', 28000, '2026-03-03'),
(9, 'Karan Mehta', 'West', 'Laptop', 65000, '2026-03-10'),
(10, 'Sneha Iyer', 'East', 'Phone', 24000, '2026-03-15'),
(11, 'Aarav Sharma', 'North', 'Tablet', 19000, '2026-03-22'),
(12, 'Ananya Singh', 'East', 'Laptop', 54000, '2026-04-02'),
(13, 'Karan Mehta', 'West', 'Phone', 26000, '2026-04-08'),
(14, 'Diya Nair', 'West', 'Laptop', 62000, '2026-04-15'),
(15, 'Priya Patel', 'South', 'Laptop', 57000, '2026-04-20');
```

### 1. Basic GROUP BY

Syntax: `SELECT group_columns, aggregate(col) FROM table GROUP BY group_columns`.

```
-- Total sales per region
SELECT region, SUM(amount) AS total_sales
FROM sales
GROUP BY region;
```

Rows with the same `region` are collapsed into one group. `SUM(amount)` sums the amounts within each group. Result has 4 rows — one per region.

### 2. The Rule: Non-Aggregated Columns MUST Be in GROUP BY

Standard SQL requires every column in SELECT to be either (a) inside an aggregate function, or (b) listed in GROUP BY. This is strict:

```
-- CORRECT
SELECT region, SUM(amount) FROM sales GROUP BY region;

-- BAD SQL (but MySQL may allow in lenient mode)
SELECT region, salesperson, SUM(amount) FROM sales GROUP BY region;
-- salesperson isn't aggregated and isn't in GROUP BY — what should MySQL return?
```

MySQL's default strict mode (ONLY_FULL_GROUP_BY, since 5.7) throws an error. Old lenient mode silently picked an arbitrary value — a dangerous bug. **Always follow the rule.**

### 3. GROUP BY Multiple Columns

You can group by combinations:

```
-- Sales per (region, product)
SELECT region, product, SUM(amount) AS total
FROM sales
GROUP BY region, product;
```

Groups are unique `(region, product)` pairs. North-Laptop, North-Phone, South-Laptop, etc.

### 4. HAVING — Filtering Groups

`HAVING` applies AFTER grouping. You can use aggregates in HAVING:

```
-- Regions with total sales > 100000
SELECT region, SUM(amount) AS total
FROM sales
GROUP BY region
HAVING SUM(amount) > 100000;
```

First, GROUP BY creates region groups with their sums. Then HAVING keeps only groups where the sum exceeds 100000.

### 5. WHERE vs HAVING — The Critical Distinction

**WHERE filters rows BEFORE aggregation. HAVING filters groups AFTER.**

```
-- Only Laptop sales, per region, where that region has > 100000 in laptops
SELECT region, SUM(amount) AS laptop_revenue
FROM sales
WHERE product = 'Laptop'   -- filter rows first: keep only Laptop sales
GROUP BY region
HAVING SUM(amount) > 100000;  -- filter groups: keep only big laptop regions
```

WHERE trims the input. HAVING trims the groups. Different jobs, different clauses.

### 6. Order of Clauses — Syntax vs Logic

**Syntactic order** (how you write it):

```
SELECT columns
FROM table
WHERE row_conditions
GROUP BY group_columns
HAVING group_conditions
ORDER BY columns
LIMIT n;
```

**Logical execution order** (how SQL actually runs it):

1. **FROM** — identify the table
2. **WHERE** — filter rows
3. **GROUP BY** — form groups
4. **HAVING** — filter groups
5. **SELECT** — compute selected columns and aggregates
6. **ORDER BY** — sort
7. **LIMIT** — trim to N

Two consequences:

- WHERE cannot reference aggregates or column aliases (they don't exist yet).
- ORDER BY CAN reference aggregates and aliases (SELECT ran already).

### 7. GROUP BY with ORDER BY and LIMIT

The full power:

```
-- Top 3 regions by total sales
SELECT region, SUM(amount) AS total
FROM sales
GROUP BY region
ORDER BY total DESC
LIMIT 3;
```

GROUP BY creates groups, ORDER BY sorts them by the aggregate, LIMIT keeps top 3.

### 8. Counting Per Group

```
-- Number of sales per salesperson
SELECT salesperson, COUNT(*) AS num_sales, SUM(amount) AS total
FROM sales
GROUP BY salesperson
ORDER BY num_sales DESC;
```

This answers "who made the most sales?" Aarav has 3 sales, Priya has 3, Rohan has 2, etc.

### 9. Multiple Aggregates Per Group

```
SELECT 
    region,
    COUNT(*) AS num_sales,
    SUM(amount) AS total,
    AVG(amount) AS avg_sale,
    MIN(amount) AS smallest,
    MAX(amount) AS largest
FROM sales
GROUP BY region;
```

Gives a complete per-region summary in one query.

### 10. WITH ROLLUP — Adding Subtotals

MySQL's `WITH ROLLUP` adds grand total (and subtotals for multi-column GROUP BY):

```
SELECT region, SUM(amount) AS total
FROM sales
GROUP BY region WITH ROLLUP;
```

Returns per-region sums PLUS a final row with region=NULL and total across all regions. Useful for reports.

### 11. Classic Interview Patterns

**Top N per group (requires window functions, chapter 18):** "Top 3 salespeople per region." Cannot be done cleanly with GROUP BY alone. We will tackle this with ROW_NUMBER() later.

**Filtering groups by count:**

```
-- Regions with 4 or more sales
SELECT region, COUNT(*) AS n FROM sales
GROUP BY region HAVING COUNT(*) >= 4;
```

**Filtering groups by sum:**

```
-- Salespeople with total sales above 100000
SELECT salesperson, SUM(amount) AS total FROM sales
GROUP BY salesperson HAVING SUM(amount) > 100000;
```

**Combining WHERE and HAVING:**

```
-- For Laptops only, regions with more than 2 laptop sales
SELECT region, COUNT(*) AS laptop_sales FROM sales
WHERE product = 'Laptop'
GROUP BY region
HAVING COUNT(*) > 2;
```

## Code Examples

### Basic GROUP BY — Sales Per Region

```sql
SELECT region, SUM(amount) AS total_sales
FROM sales
GROUP BY region;
```

Groups all 15 rows by region. Four regions: North, South, East, West. Within each group, sum the amount. North has 5 sales (ids 1,3,5,8,11). South has 4 (2,6,7,15). East has 3 (4,10,12). West has 3 (9,13,14). The result has 4 rows.

**Output:**

```
region  total_sales
North   184000.00  (55000+60000+22000+28000+19000)
South   160000.00  (25000+58000+20000+57000)
East    96000.00   (18000+24000+54000)
West    153000.00  (65000+26000+62000)
```

### GROUP BY Multiple Columns

```sql
SELECT region, product, COUNT(*) AS sales_count, SUM(amount) AS revenue
FROM sales
GROUP BY region, product
ORDER BY region, product;
```

Groups by unique (region, product) pairs. For each pair, count rows and sum amount. Each region has multiple products, giving many groups. This is a classic cross-tabulation query.

**Output:**

```
region  product  sales_count  revenue
East    Laptop   1            54000
East    Phone    1            24000
East    Tablet   1            18000
North   Laptop   2            115000
North   Phone    2            50000
North   Tablet   1            19000
South   Laptop   2            115000
South   Phone    1            25000
South   Tablet   1            20000
West    Laptop   2            127000
West    Phone    1            26000
```

### HAVING — Filter Groups by Aggregate

```sql
-- Regions with total sales above 150000
SELECT region, SUM(amount) AS total
FROM sales
GROUP BY region
HAVING SUM(amount) > 150000;
```

After grouping by region, filter with HAVING. Only regions where sum > 150000 survive. North (184000), South (160000), West (153000) pass. East (96000) is excluded. HAVING can use any aggregate in its condition.

**Output:**

```
region  total
North   184000.00
South   160000.00
West    153000.00
```

### WHERE vs HAVING — Both in One Query

```sql
-- For Laptop sales only, regions with total laptop revenue > 100000
SELECT region, SUM(amount) AS laptop_revenue
FROM sales
WHERE product = 'Laptop'    -- filter rows: keep only Laptop
GROUP BY region
HAVING SUM(amount) > 100000; -- filter groups
```

WHERE trims rows first (only Laptop sales — 7 rows). Then GROUP BY creates region groups. Then HAVING keeps groups with laptop revenue > 100000. North (55000+60000 = 115000), South (58000+57000 = 115000), West (65000+62000 = 127000) pass. East has only 1 laptop sale of 54000 and is excluded.

**Output:**

```
region  laptop_revenue
North   115000.00
South   115000.00
West    127000.00
```

### Top N Groups by Aggregate

```sql
-- Top 3 salespeople by total revenue
SELECT salesperson, SUM(amount) AS total_revenue, COUNT(*) AS num_sales
FROM sales
GROUP BY salesperson
ORDER BY total_revenue DESC
LIMIT 3;
```

Group by salesperson, compute sum and count, sort by total DESC, limit to 3. Aarav: 55000+22000+19000 = 96000 (3 sales). Priya: 25000+20000+57000 = 102000 (3). Rohan: 60000+28000 = 88000 (2). Karan: 65000+26000 = 91000 (2). Diya: 62000 (1). Vikram: 58000 (1). Ananya: 18000+54000 = 72000 (2). Sneha: 24000 (1). Top 3: Priya, Aarav, Karan.

**Output:**

```
salesperson     total_revenue  num_sales
Priya Patel     102000.00      3
Aarav Sharma    96000.00       3
Karan Mehta     91000.00       2
```

### Salespeople With More Than N Sales

```sql
-- Salespeople who made more than 2 sales
SELECT salesperson, COUNT(*) AS num_sales, SUM(amount) AS total
FROM sales
GROUP BY salesperson
HAVING COUNT(*) > 2;
```

Group by salesperson, count sales. HAVING keeps only those with count > 2. Aarav has 3 sales, Priya has 3 sales. Nobody else has more than 2. 2 rows returned.

**Output:**

```
salesperson     num_sales  total
Aarav Sharma    3          96000.00
Priya Patel     3          102000.00
```

### WHERE Can't Use Aggregates

```sql
-- WRONG
SELECT region, SUM(amount)
FROM sales
WHERE SUM(amount) > 100000  -- ERROR
GROUP BY region;

-- CORRECT: use HAVING
SELECT region, SUM(amount)
FROM sales
GROUP BY region
HAVING SUM(amount) > 100000;
```

WHERE runs before aggregation, so SUM(amount) doesn't exist yet. Use HAVING for aggregate filters after GROUP BY. This is the #1 GROUP BY mistake.

**Output:**

```
Wrong query: ERROR 1111 (HY000): Invalid use of group function

Correct query:
region  SUM(amount)
North   184000.00
South   160000.00
West    153000.00
```

### Monthly Revenue Report

```sql
-- Total sales per month of 2026
SELECT 
    MONTH(sale_date) AS month,
    COUNT(*) AS num_sales,
    SUM(amount) AS total_revenue
FROM sales
WHERE YEAR(sale_date) = 2026
GROUP BY MONTH(sale_date)
ORDER BY month;
```

Group by MONTH() of the date. WHERE filters to 2026 first (before grouping). Jan has ids 1,2,3 (3 sales, 55000+25000+60000=140000). Feb has 4-7 (18000+22000+58000+20000 = 118000). March has 8-11 (28000+65000+24000+19000 = 136000). April has 12-15 (54000+26000+62000+57000 = 199000).

**Output:**

```
month  num_sales  total_revenue
1      3          140000.00
2      4          118000.00
3      4          136000.00
4      4          199000.00
```

### GROUP BY With ROLLUP

```sql
-- Subtotals per region plus a grand total
SELECT region, SUM(amount) AS total
FROM sales
GROUP BY region WITH ROLLUP;
```

ROLLUP adds a row with region=NULL representing the grand total. Useful in reports. The NULL row shows the sum across all regions: 184000+160000+96000+153000 = 593000.

**Output:**

```
region  total
East    96000.00
North   184000.00
South   160000.00
West    153000.00
NULL    593000.00  (grand total)
```

## Common Mistakes

### Using WHERE to Filter Aggregates

**Wrong:**

```
SELECT region, SUM(amount)
FROM sales
WHERE SUM(amount) > 100000
GROUP BY region;
```

ERROR 1111 (HY000): Invalid use of group function

**Correct:**

```
SELECT region, SUM(amount)
FROM sales
GROUP BY region
HAVING SUM(amount) > 100000;
```

WHERE filters rows before aggregation. Aggregates like SUM don't exist during WHERE. Use HAVING (after GROUP BY) for aggregate filters. This is the most common GROUP BY mistake.

### Non-Aggregated Columns Missing From GROUP BY

**Wrong:**

```
SELECT region, salesperson, SUM(amount)
FROM sales
GROUP BY region;
```

In strict mode: ERROR 1055 (42000): Expression #2 of SELECT list is not in GROUP BY clause... In lenient mode: arbitrary salesperson value returned per region — silently wrong.

**Correct:**

```
-- If you want per-region, drop salesperson:
SELECT region, SUM(amount) FROM sales GROUP BY region;

-- If you want per-(region, salesperson), include both:
SELECT region, salesperson, SUM(amount) FROM sales GROUP BY region, salesperson;
```

Every column in SELECT must either be in GROUP BY or inside an aggregate. MySQL's default strict mode enforces this. Picking an arbitrary value is a silent bug — you get 'some salesperson' for each region with no indication which.

### Confusing Clause Order

**Wrong:**

```
-- Trying to write HAVING before GROUP BY
SELECT region, SUM(amount)
FROM sales
HAVING SUM(amount) > 100000
GROUP BY region;
```

Syntax error. HAVING must come after GROUP BY.

**Correct:**

```
SELECT region, SUM(amount)
FROM sales
GROUP BY region
HAVING SUM(amount) > 100000;
```

The syntactic order is fixed: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT. You cannot reorder. Memorize this — the logical execution order differs, but the syntax order is rigid.

### Using WHERE Alias

**Wrong:**

```
SELECT region, SUM(amount) AS total
FROM sales
WHERE total > 50000   -- alias not available in WHERE
GROUP BY region;
```

ERROR 1054 (42S22): Unknown column 'total' in 'where clause'

**Correct:**

```
-- Cannot use alias in WHERE. Options:
-- 1) Repeat the expression (but aggregates don't work in WHERE):
-- 2) Use HAVING with the alias (MySQL) or expression:
SELECT region, SUM(amount) AS total
FROM sales
GROUP BY region
HAVING total > 50000;  -- MySQL lets you use the alias here
```

Column aliases are assigned in SELECT, which runs AFTER WHERE. WHERE cannot see them. HAVING (and ORDER BY) run after SELECT in MySQL, so they can use aliases. PostgreSQL requires the full expression in HAVING.

### Expecting GROUP BY To Return Top N Per Group

**Wrong:**

```
-- Goal: top 2 salespeople per region. This does NOT do that.
SELECT region, salesperson, SUM(amount)
FROM sales
GROUP BY region, salesperson
ORDER BY region, SUM(amount) DESC
LIMIT 2;
```

No error, but returns just 2 rows total, not 2 per region.

**Correct:**

```
-- Top 2 per group requires window functions (chapter 18):
SELECT region, salesperson, total FROM (
  SELECT region, salesperson, SUM(amount) AS total,
         ROW_NUMBER() OVER (PARTITION BY region ORDER BY SUM(amount) DESC) AS rn
  FROM sales
  GROUP BY region, salesperson
) t
WHERE rn <= 2;
```

Plain GROUP BY cannot return 'top N per group.' LIMIT applies to the whole result, not per group. The correct solution uses window functions (ROW_NUMBER with PARTITION BY). This is a classic interview trap.

## Summary

- GROUP BY groups rows that share column values, then applies aggregates within each group. Result has one row per group.
- Every column in SELECT must be either aggregated or listed in GROUP BY. MySQL's strict mode (ONLY_FULL_GROUP_BY) enforces this; always code as if enforced.
- GROUP BY multiple columns creates groups for each unique combination: GROUP BY region, product groups by (region, product) pairs.
- HAVING filters groups based on aggregate conditions. WHERE filters rows BEFORE grouping; HAVING filters GROUPS after.
- Use WHERE for row-level conditions (status = 'Delivered'). Use HAVING for aggregate-level conditions (SUM(amount) > 100000).
- Syntactic order (how you write): SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT. Cannot rearrange.
- Logical execution order: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT. Aggregates and aliases are created in SELECT.
- WHERE cannot reference aggregates or SELECT aliases (they don't exist yet). HAVING and ORDER BY can (MySQL/PostgreSQL differ slightly).
- WITH ROLLUP (MySQL) adds subtotals and a grand total row where grouped columns are NULL. Useful for executive reports.
- GROUP BY alone cannot return 'top N per group.' That pattern needs window functions (ROW_NUMBER, RANK) — covered in chapter 18.

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/group-by-and-having/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/group-by-and-having/practice/*
