---
title: "SQL Aggregate Functions - COUNT, SUM, AVG, MIN, MAX | Modern Age Coders"
description: "Master SQL aggregate functions: COUNT(*), COUNT(column), COUNT(DISTINCT), SUM, AVG, MIN, MAX, GROUP_CONCAT, and NULL handling. 58 practice questions with runnable MySQL examples."
slug: aggregate-functions
canonical: https://learn.modernagecoders.com/resources/sql/aggregate-functions
category: "SQL"
keywords: ["sql aggregate functions", "sql count", "sql sum", "sql avg", "sql min max", "count vs count distinct", "sql group concat", "mysql aggregates", "sql interview questions", "null in aggregates"]
---
# Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)

**Difficulty:** Intermediate  
**Reading time:** 22 min  
**Chapter:** 9  
**Practice questions:** 58

## What Are Aggregate Functions?

Most SQL queries return rows. But often you do not want rows — you want a **summary**. How many employees are there? What is the total sales? What is the average salary? These questions are answered with **aggregate functions**.

An aggregate function takes many rows of data and collapses them into a single result value. For example, `SELECT COUNT(*) FROM employees` takes all 10 employee rows and returns just one number: 10.

### The Five Core Aggregates

- `COUNT()` — how many rows
- `SUM()` — total of a numeric column
- `AVG()` — average of a numeric column
- `MIN()` — smallest value
- `MAX()` — largest value

Plus `GROUP_CONCAT()` (MySQL) which combines values into a single string, and a few others. You can use aggregates on all the rows of a table, on filtered rows (with WHERE), or on groups of rows (with GROUP BY — next chapter).

## Why Aggregates Are Business-Critical

### 1. Every Business Report Is An Aggregate

Revenue, user counts, average order value, conversion rates — every metric on every business dashboard is an aggregate. If you cannot write `SUM(revenue)` or `AVG(order_value)` fluently, you cannot be a data analyst.

### 2. COUNT Is the Foundation of Analytics

"How many users signed up this month?" "How many unique customers made a purchase?" "How many orders shipped yesterday?" All COUNT queries. Learning the subtle differences between `COUNT(*)`, `COUNT(column)`, and `COUNT(DISTINCT column)` is essential because they give different answers on real data with NULLs.

### 3. AVG with NULLs is an Interview Trap

Every intermediate SQL interview asks: "What is the difference between `AVG(col)` and `AVG(COALESCE(col, 0))`?" The wrong answer gets you cut from the hiring process. NULLs are silently excluded from AVG — you need to know whether that is what you want.

### 4. MIN/MAX Work on Strings and Dates Too

"When did the first order come in?" → `MIN(order_date)`. "Who is the alphabetically first customer?" → `MIN(customer_name)`. Aggregates are not just for numbers.

### 5. Precursor to GROUP BY

Everything you learn in this chapter becomes 10x more powerful when combined with GROUP BY in the next chapter. Aggregates on the whole table give one answer; aggregates within groups give you per-department, per-city, per-month summaries.

## Detailed Explanation

### Reference Table: orders

We use an `orders` table for this chapter:

```
CREATE TABLE orders (
    id INT PRIMARY KEY,
    customer_name VARCHAR(50),
    city VARCHAR(30),
    amount DECIMAL(10,2),
    discount DECIMAL(10,2),
    order_date DATE,
    status VARCHAR(20)
);

INSERT INTO orders VALUES
(1, 'Aarav Sharma', 'Mumbai', 2500.00, 100.00, '2026-01-15', 'Delivered'),
(2, 'Priya Patel', 'Delhi', 1800.00, NULL, '2026-01-20', 'Delivered'),
(3, 'Rohan Gupta', 'Bengaluru', 5600.00, 500.00, '2026-02-03', 'Cancelled'),
(4, 'Ananya Singh', 'Mumbai', 3200.00, 200.00, '2026-02-10', 'Delivered'),
(5, 'Vikram Reddy', 'Hyderabad', 4500.00, NULL, '2026-02-18', 'Pending'),
(6, 'Sneha Iyer', 'Chennai', 1200.00, 50.00, '2026-03-01', 'Delivered'),
(7, 'Karan Mehta', 'Mumbai', 6700.00, 600.00, '2026-03-05', 'Delivered'),
(8, 'Ishita Kumar', 'Delhi', 2100.00, NULL, '2026-03-12', 'Cancelled'),
(9, 'Aditya Rao', 'Pune', 3800.00, 300.00, '2026-03-20', 'Delivered'),
(10, 'Diya Nair', 'Bengaluru', 8900.00, 1000.00, '2026-03-25', 'Delivered'),
(11, 'Arjun Desai', 'Mumbai', 2700.00, NULL, '2026-04-02', 'Pending'),
(12, 'Meera Joshi', 'Delhi', 1500.00, 100.00, '2026-04-08', 'Delivered');
```

Note: 4 rows have NULL discount (ids 2, 5, 8, 11). This will matter for COUNT and AVG.

### 1. COUNT — Three Variants You MUST Know

This is the most important distinction in aggregates:

- `COUNT(*)`: counts **all rows**, including rows where every column is NULL.
- `COUNT(column)`: counts rows where *column* is **not NULL**.
- `COUNT(DISTINCT column)`: counts **unique non-NULL values** of *column*.

```
SELECT
    COUNT(*) AS total_rows,          -- 12
    COUNT(discount) AS with_discount, -- 8 (4 NULLs excluded)
    COUNT(DISTINCT city) AS unique_cities -- 6 (Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, Pune)
FROM orders;
```

Example with real numbers: suppose a column has values `[10, 20, 20, NULL, NULL]`. Then:

- COUNT(*) = 5 (all 5 rows)
- COUNT(column) = 3 (excludes 2 NULLs)
- COUNT(DISTINCT column) = 2 (values 10 and 20 are unique, NULLs excluded)

### 2. SUM — Total of a Column

`SUM()` adds up all non-NULL values:

```
SELECT SUM(amount) AS total_revenue FROM orders;
-- 2500 + 1800 + 5600 + 3200 + 4500 + 1200 + 6700 + 2100 + 3800 + 8900 + 2700 + 1500
-- = 44500.00
```

SUM of NULLs is NULL, BUT SUM skips NULLs in a column, so `SUM(discount)` = 100+500+200+50+600+300+1000+100 = 2850. If EVERY value is NULL, SUM returns NULL (not 0). Handle this with COALESCE: `COALESCE(SUM(discount), 0)`.

### 3. AVG — Average (and the NULL trap)

AVG = SUM / COUNT. But here is the critical detail: AVG uses `COUNT(column)` in the denominator, **not** `COUNT(*)`. NULLs are ignored on both top and bottom.

```
-- Discount has 4 NULLs. AVG ignores them.
SELECT AVG(discount) FROM orders;
-- Sum of non-NULLs: 2850. Count of non-NULLs: 8.
-- AVG = 2850 / 8 = 356.25
```

If you want NULLs treated as 0 (dividing by the full count):

```
SELECT AVG(COALESCE(discount, 0)) FROM orders;
-- Sum: still 2850 (0s add nothing). Count: 12.
-- AVG = 2850 / 12 = 237.50
```

**Huge difference!** 356.25 vs 237.50 depending on how you handle NULLs. Know which one your business wants.

### 4. MIN and MAX

Return the smallest and largest values. Work on numbers, dates, and strings:

```
-- Numeric
SELECT MIN(amount), MAX(amount) FROM orders;
-- 1200.00 (Sneha), 8900.00 (Diya)

-- Dates
SELECT MIN(order_date), MAX(order_date) FROM orders;
-- 2026-01-15 (earliest), 2026-04-08 (latest)

-- Strings (alphabetically)
SELECT MIN(customer_name), MAX(customer_name) FROM orders;
-- 'Aarav Sharma' (first alphabetically), 'Vikram Reddy' (last)
```

MIN and MAX skip NULLs — if ALL values are NULL, they return NULL.

### 5. Aggregates with WHERE

Filtering before aggregating is the most common pattern:

```
-- Total revenue from Delivered orders only
SELECT SUM(amount) FROM orders WHERE status = 'Delivered';
-- Sum of ids 1,2,4,6,7,9,10,12: 2500+1800+3200+1200+6700+3800+8900+1500 = 27600

-- Count of Cancelled orders
SELECT COUNT(*) FROM orders WHERE status = 'Cancelled';
-- 2 (ids 3 and 8)
```

### 6. Multiple Aggregates in One Query

You can combine several aggregates in one SELECT:

```
SELECT
    COUNT(*) AS num_orders,
    SUM(amount) AS total,
    AVG(amount) AS avg_order,
    MIN(amount) AS smallest,
    MAX(amount) AS largest
FROM orders
WHERE status = 'Delivered';
```

This gives a complete summary of Delivered orders in one query.

### 7. Aggregates Cannot Be Used in WHERE

A common mistake:

```
-- ERROR
SELECT name FROM employees WHERE salary > AVG(salary);
```

This fails because WHERE filters rows BEFORE aggregation happens. You cannot reference an aggregate in WHERE. The solutions:

1. Use a subquery: `WHERE salary > (SELECT AVG(salary) FROM employees)`
2. Use `HAVING` after GROUP BY (next chapter)
3. Use a window function (chapter 18)

### 8. GROUP_CONCAT (MySQL-specific)

Combines values from multiple rows into a single comma-separated string:

```
SELECT GROUP_CONCAT(customer_name) FROM orders WHERE city = 'Mumbai';
-- Returns: 'Aarav Sharma,Ananya Singh,Karan Mehta,Arjun Desai'

-- With separator and order:
SELECT GROUP_CONCAT(customer_name ORDER BY amount DESC SEPARATOR ' | ')
FROM orders WHERE city = 'Mumbai';
```

PostgreSQL uses `STRING_AGG(col, ', ')`. SQL Server also uses STRING_AGG. MySQL uniquely uses GROUP_CONCAT.

### 9. Summary of NULL Handling

This table is worth memorizing:

FunctionBehavior with NULLsCOUNT(*)Counts all rowsCOUNT(col)Skips NULLsCOUNT(DISTINCT col)Skips NULLs, counts uniqueSUM(col)Skips NULLs; all-NULL → NULLAVG(col)Skips NULLs in both sum and countMIN(col), MAX(col)Skips NULLs; all-NULL → NULLGROUP_CONCAT(col)Skips NULLs

## Code Examples

### COUNT — Three Variants

```sql
-- Compare all three COUNT forms
SELECT
    COUNT(*) AS total,
    COUNT(discount) AS non_null_discounts,
    COUNT(DISTINCT city) AS unique_cities
FROM orders;
```

COUNT(*) counts all 12 rows. COUNT(discount) excludes the 4 rows where discount is NULL, giving 8. COUNT(DISTINCT city) finds unique cities: Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, Pune — 6 unique cities.

**Output:**

```
total: 12
non_null_discounts: 8
unique_cities: 6
```

### SUM and the NULL Trap

```sql
-- Total revenue
SELECT SUM(amount) AS total_revenue FROM orders;

-- Total discounts (NULLs skipped)
SELECT SUM(discount) AS total_discounts FROM orders;

-- Safer version if you want 0 when all NULL
SELECT COALESCE(SUM(discount), 0) AS total_discounts_safe FROM orders;
```

SUM(amount): 2500+1800+5600+3200+4500+1200+6700+2100+3800+8900+2700+1500 = 44500.00. SUM(discount): skips NULLs, so 100+500+200+50+600+300+1000+100 = 2850.00. If ALL discounts were NULL, SUM would return NULL — COALESCE guards against that.

**Output:**

```
total_revenue: 44500.00
total_discounts: 2850.00
total_discounts_safe: 2850.00
```

### AVG — NULL Sensitivity

```sql
-- AVG skips NULLs
SELECT AVG(discount) AS avg_ignoring_nulls FROM orders;

-- AVG treating NULLs as 0
SELECT AVG(COALESCE(discount, 0)) AS avg_nulls_as_zero FROM orders;

-- Compare side-by-side
SELECT
    AVG(discount) AS excl_null,
    AVG(COALESCE(discount, 0)) AS incl_null,
    SUM(discount) / COUNT(*) AS same_as_incl_null
FROM orders;
```

AVG(discount) = 2850 / 8 non-NULL rows = 356.25. AVG(COALESCE(discount, 0)) = 2850 / 12 all rows = 237.50. The third query confirms: SUM(discount) / COUNT(*) = 2850/12 = 237.50, same as AVG with COALESCE. Big difference — pick the right one for your business question.

**Output:**

```
avg_ignoring_nulls: 356.25
avg_nulls_as_zero: 237.50

Compare query:
excl_null: 356.25
incl_null: 237.50
same_as_incl_null: 237.50
```

### MIN and MAX on Different Types

```sql
-- Numeric
SELECT MIN(amount) AS cheapest, MAX(amount) AS priciest FROM orders;

-- Dates
SELECT MIN(order_date) AS earliest, MAX(order_date) AS latest FROM orders;

-- Strings (alphabetical)
SELECT MIN(customer_name) AS first_alpha, MAX(customer_name) AS last_alpha FROM orders;
```

MIN/MAX work on any orderable type. Numeric gives smallest/largest. Dates give earliest/latest. Strings give alphabetically first/last. Handy for answering 'when was our first order?' or 'who came first alphabetically?'

**Output:**

```
cheapest: 1200.00 (Sneha's order)
priciest: 8900.00 (Diya's order)
earliest: 2026-01-15
latest: 2026-04-08
first_alpha: 'Aarav Sharma'
last_alpha: 'Vikram Reddy'
```

### Aggregates with WHERE

```sql
-- Summary of Delivered orders only
SELECT
    COUNT(*) AS num_delivered,
    SUM(amount) AS delivered_revenue,
    AVG(amount) AS avg_delivered,
    MIN(amount) AS smallest_delivered,
    MAX(amount) AS largest_delivered
FROM orders
WHERE status = 'Delivered';
```

WHERE filters rows first, then aggregates. Delivered orders (status='Delivered'): ids 1,2,4,6,7,9,10,12 = 8 orders. Sum: 2500+1800+3200+1200+6700+3800+8900+1500 = 27600. Avg: 27600/8 = 3450. Min: 1200. Max: 8900.

**Output:**

```
num_delivered: 8
delivered_revenue: 27600.00
avg_delivered: 3450.00
smallest_delivered: 1200.00
largest_delivered: 8900.00
```

### Counting Distinct Customers per Month (Preview of GROUP BY)

```sql
-- Unique customers in January 2026
SELECT COUNT(DISTINCT customer_name) AS unique_customers
FROM orders
WHERE order_date BETWEEN '2026-01-01' AND '2026-01-31';

-- Unique cities where orders were placed in March
SELECT COUNT(DISTINCT city) AS cities_in_march
FROM orders
WHERE order_date BETWEEN '2026-03-01' AND '2026-03-31';
```

January has orders from Aarav and Priya — 2 unique customers. March has Sneha (Chennai), Karan (Mumbai), Ishita (Delhi), Aditya (Pune), Diya (Bengaluru) — 5 unique cities. COUNT(DISTINCT) answers 'how many different values in this filtered set?' — a classic analytics query.

**Output:**

```
January: unique_customers = 2
March: cities_in_march = 5
```

### Aggregate Cannot Be In WHERE

```sql
-- WRONG: this fails
SELECT customer_name, amount
FROM orders
WHERE amount > AVG(amount);

-- CORRECT: use a subquery
SELECT customer_name, amount
FROM orders
WHERE amount > (SELECT AVG(amount) FROM orders);
```

WHERE runs before aggregates, so referencing AVG(amount) in WHERE is a conceptual error — the AVG has not been computed yet. The fix: wrap AVG in a subquery so it is computed first. The overall AVG is 44500/12 = 3708.33. Orders above this: ids 3 (5600), 5 (4500), 7 (6700), 9 (3800), 10 (8900). 5 rows.

**Output:**

```
Wrong query: ERROR 1111 (HY000): Invalid use of group function

Correct query:
Rohan Gupta 5600.00
Vikram Reddy 4500.00
Karan Mehta 6700.00
Aditya Rao 3800.00
Diya Nair 8900.00
(5 rows)
```

### GROUP_CONCAT — Combining Values

```sql
-- All customer names in Mumbai as one string
SELECT GROUP_CONCAT(customer_name) AS mumbai_customers
FROM orders
WHERE city = 'Mumbai';

-- With custom separator and ordering
SELECT GROUP_CONCAT(customer_name ORDER BY amount DESC SEPARATOR ' | ') AS top_to_bottom
FROM orders
WHERE city = 'Mumbai';
```

Mumbai has 4 orders: Aarav (2500), Ananya (3200), Karan (6700), Arjun (2700). First query concatenates names (in arbitrary order) separated by commas. Second query orders by amount DESC and uses ' | ' as separator.

**Output:**

```
mumbai_customers: 'Aarav Sharma,Ananya Singh,Karan Mehta,Arjun Desai'

top_to_bottom: 'Karan Mehta | Ananya Singh | Arjun Desai | Aarav Sharma'
```

### Full Summary Report

```sql
-- Complete order summary with aggregates
SELECT
    COUNT(*) AS total_orders,
    COUNT(DISTINCT customer_name) AS unique_customers,
    COUNT(DISTINCT city) AS unique_cities,
    SUM(amount) AS total_revenue,
    AVG(amount) AS avg_order_value,
    MIN(amount) AS smallest_order,
    MAX(amount) AS largest_order,
    SUM(CASE WHEN status = 'Delivered' THEN 1 ELSE 0 END) AS delivered_count,
    SUM(CASE WHEN status = 'Cancelled' THEN 1 ELSE 0 END) AS cancelled_count
FROM orders;
```

This is a real-world business summary. The CASE inside SUM is a common pattern called conditional aggregation — it counts rows matching a condition. Total 12 orders, 12 unique customers, 6 unique cities, 44500 revenue, avg 3708.33, min 1200, max 8900, 8 delivered, 2 cancelled (and 2 pending).

**Output:**

```
total_orders: 12
unique_customers: 12
unique_cities: 6
total_revenue: 44500.00
avg_order_value: 3708.33
smallest_order: 1200.00
largest_order: 8900.00
delivered_count: 8
cancelled_count: 2
```

## Common Mistakes

### Using Aggregate in WHERE Clause

**Wrong:**

```
SELECT customer_name
FROM orders
WHERE amount > AVG(amount);
```

ERROR 1111 (HY000): Invalid use of group function

**Correct:**

```
SELECT customer_name
FROM orders
WHERE amount > (SELECT AVG(amount) FROM orders);
```

WHERE filters rows before aggregation. To reference an aggregate in a row-level comparison, wrap it in a subquery. For per-group comparisons, use HAVING after GROUP BY (next chapter).

### Assuming AVG Includes NULLs as 0

**Wrong:**

```
-- Intent: average including all rows, NULLs as 0
SELECT AVG(discount) FROM orders;
```

No error, but returns 356.25 (average of 8 non-NULL values) not 237.50 (what you'd get treating NULLs as 0).

**Correct:**

```
-- Treat NULLs as 0 explicitly:
SELECT AVG(COALESCE(discount, 0)) FROM orders;
-- Returns 237.50 (sum 2850 / all 12 rows)
```

AVG ignores NULLs in both numerator and denominator. If your business logic wants NULLs to count as 0, use COALESCE. Decide deliberately — the two numbers can differ by 50% or more.

### SUM of All-NULL Column Returns NULL, Not 0

**Wrong:**

```
-- A column where every row is NULL:
SELECT SUM(notes_count) FROM empty_table;
-- Returns NULL, which might break downstream code expecting a number
```

No error, but NULL result can cause application crashes or wrong display.

**Correct:**

```
SELECT COALESCE(SUM(notes_count), 0) FROM empty_table;
-- Returns 0
```

When every value summed is NULL (or the table has 0 rows), SUM returns NULL. If your app expects a number, always wrap in COALESCE(..., 0). Same applies to MIN, MAX, AVG on all-NULL columns.

### COUNT(column) vs COUNT(*) Confusion

**Wrong:**

```
-- Intent: count total orders
SELECT COUNT(discount) FROM orders;
-- Returns 8 (not 12), because COUNT(column) excludes NULLs
```

No error, but returns wrong number for 'total orders'.

**Correct:**

```
-- For total row count, always use COUNT(*):
SELECT COUNT(*) FROM orders;
-- Returns 12
```

COUNT(*) counts all rows. COUNT(column) counts non-NULL values of that column. These differ when the column has NULLs. For 'total rows,' always use COUNT(*).

### Mixing Aggregates and Non-Aggregates Without GROUP BY

**Wrong:**

```
SELECT customer_name, SUM(amount) FROM orders;
```

In strict mode: ERROR 1140 (42000): In aggregated query without GROUP BY, expression #1 of SELECT list contains nonaggregated column... In lenient MySQL mode: returns ONE row with arbitrary customer_name and the total SUM — meaningless.

**Correct:**

```
-- If you want totals per customer:
SELECT customer_name, SUM(amount) FROM orders GROUP BY customer_name;

-- If you just want the grand total:
SELECT SUM(amount) FROM orders;
```

Mixing aggregate and non-aggregate columns requires GROUP BY (next chapter). Without it, standard SQL raises an error. MySQL's lenient mode returns a meaningless row. Enable strict ONLY_FULL_GROUP_BY mode in production.

## Summary

- Aggregate functions collapse many rows into a single summary value: COUNT, SUM, AVG, MIN, MAX, GROUP_CONCAT.
- COUNT(*) counts all rows. COUNT(column) counts non-NULL values. COUNT(DISTINCT column) counts unique non-NULL values. These three give different answers on real data.
- SUM ignores NULLs. If every value is NULL, SUM returns NULL (not 0). Wrap in COALESCE for guaranteed numeric output.
- AVG = SUM / COUNT(column) — NULLs excluded from both numerator and denominator. Use AVG(COALESCE(col, 0)) to treat NULLs as 0 and divide by total rows.
- MIN and MAX work on numbers, dates, and strings. For strings they return alphabetically first/last. NULLs are skipped.
- Aggregates cannot be used in WHERE (WHERE runs before aggregation). Use a subquery or HAVING instead.
- WHERE filters rows BEFORE aggregation. SELECT COUNT(*) FROM orders WHERE status='Delivered' counts only delivered orders.
- GROUP_CONCAT (MySQL) combines multiple string values into one — often with ORDER BY and custom SEPARATOR. PostgreSQL uses STRING_AGG.
- You can combine multiple aggregates in one SELECT to get a complete summary in a single query: total, avg, min, max together.
- Conditional aggregation pattern: SUM(CASE WHEN condition THEN 1 ELSE 0 END) counts rows matching the condition inside a single SELECT.

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/aggregate-functions/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/aggregate-functions/practice/*
