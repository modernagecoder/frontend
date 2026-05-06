---
title: "SQL CASE WHEN - Conditional Logic, IF, IFNULL, Pivot Tables | Modern Age Coders"
description: "Master SQL conditional logic with CASE WHEN, simple vs searched CASE, IF, IFNULL, NULLIF, and conditional aggregation. Build pivot tables, grade calculators, and business dashboards with 62+ practice queries and MySQL runnable examples."
slug: conditional-logic-case-when
canonical: https://learn.modernagecoders.com/resources/sql/conditional-logic-case-when/
category: "SQL"
keywords: ["sql case when", "sql if else", "sql conditional aggregation", "sql pivot table", "mysql ifnull", "nullif", "sql case in order by", "sql case in where", "sql searched case", "sql simple case"]
---
# Conditional Logic in SQL - CASE WHEN, IF, IFNULL

**Difficulty:** Intermediate  
**Reading time:** 40 min  
**Chapter:** 17  
**Practice questions:** 62

## What Is Conditional Logic in SQL?

SQL is a declarative language — you describe *what* you want, not *how* to get it. But real reports rarely just 'return all rows'. You need to bucket numbers into grades, label statuses as green/yellow/red, show 'N/A' instead of NULL, or add an 'if revenue > target then 1 else 0' column for KPI dashboards. That is conditional logic in SQL.

MySQL gives you three tools:

- `CASE WHEN` — the SQL-standard, portable, multi-branch conditional. Works in SELECT, WHERE, ORDER BY, GROUP BY, HAVING.
- `IF(condition, true_value, false_value)` — MySQL-specific shortcut for two branches.
- `IFNULL(value, default)` and `NULLIF(a, b)` — tiny helpers for null handling.

```
-- Give each student a grade based on marks
SELECT name, marks,
  CASE
    WHEN marks >= 90 THEN 'A'
    WHEN marks >= 75 THEN 'B'
    WHEN marks >= 60 THEN 'C'
    WHEN marks >= 40 THEN 'D'
    ELSE 'F'
  END AS grade
FROM students;
```

This is the single most common analytical pattern in business reporting. Every dashboard you will ever build has one.

## Why Conditional Logic Matters

### 1. Computed Columns Are Half of Every Report

Raw tables store facts: a student's marks, an order's amount, an employee's salary. Dashboards do not show raw facts — they show *categories*. 'High / Mid / Low value customer', 'Pass / Fail', 'On-time / Delayed'. Every one of those is a CASE expression.

### 2. Conditional Aggregation Builds Pivot Tables

Want to count paid, pending, and failed orders in a single row? Or revenue split by category across columns? SQL does not have a native PIVOT in MySQL, but `SUM(CASE WHEN status='paid' THEN amount ELSE 0 END)` solves it in two lines. This pattern is worth memorizing — it appears in 40% of SQL interviews.

### 3. Custom Sort Orders

You cannot sort by business logic alone ("show paid first, then pending, then failed"). CASE in ORDER BY lets you invent any order you want without touching the schema.

### 4. Null Handling Without IF Chains

`IFNULL` and `COALESCE` replace NULL with a default in one token. `NULLIF(a, b)` is a niche gem that prevents division-by-zero errors. Together they shorten many queries by 50%.

### 5. Business Rules Move From App to DB

When multiple teams use the same data, baking rules like 'priority = CASE WHEN amount > 100000 THEN 1 WHEN customer_tier = "gold" THEN 2 ELSE 3 END' into a VIEW (Chapter 21) keeps everyone consistent. CASE is the syntax that lets you encode those rules.

## Detailed Explanation

### 1. Searched CASE (The Most Common Form)

Each WHEN has its own boolean expression. MySQL evaluates them in order and returns the THEN value of the first match. If nothing matches, ELSE kicks in. If there is no ELSE, the result is NULL.

```
CASE
  WHEN condition_1 THEN value_1
  WHEN condition_2 THEN value_2
  ...
  ELSE default_value
END
```

```
SELECT name, salary,
  CASE
    WHEN salary >= 100000 THEN 'Senior'
    WHEN salary >= 60000  THEN 'Mid'
    WHEN salary >= 30000  THEN 'Junior'
    ELSE 'Intern'
  END AS level
FROM employees;
```

Rules for searched CASE:

- Conditions are tested top to bottom. The **first match wins** — order your WHEN clauses from most specific to most general.
- All THEN/ELSE values should return the same (or compatible) type. Mixing a string and a number works but returns a string.
- The ELSE is optional. Omitting it and having no match returns NULL. Always include ELSE unless NULL is exactly what you want.

### 2. Simple CASE

When you compare one expression against multiple equal-to values, the simple form is shorter:

```
CASE expression
  WHEN value_1 THEN result_1
  WHEN value_2 THEN result_2
  ELSE default
END
```

```
SELECT name, country,
  CASE country
    WHEN 'IN' THEN 'India'
    WHEN 'US' THEN 'United States'
    WHEN 'UK' THEN 'United Kingdom'
    ELSE 'Other'
  END AS country_full
FROM customers;
```

Simple CASE only supports equality. If you need >, <, BETWEEN, LIKE, IS NULL, use searched CASE. For NULL comparison the simple form fails silently — `CASE x WHEN NULL THEN ...` is always false.

### 3. CASE in SELECT — Computed Columns

The bread-and-butter use case. A CASE in the SELECT list creates a new column per row:

```
SELECT id, amount,
  CASE
    WHEN amount > 5000 THEN 'Large'
    WHEN amount > 1000 THEN 'Medium'
    ELSE 'Small'
  END AS size_bucket,
  CASE
    WHEN status = 'paid' AND amount > 5000 THEN 'VIP'
    WHEN status = 'paid'                   THEN 'Customer'
    WHEN status = 'pending'                THEN 'Prospect'
    ELSE 'Lost'
  END AS segment
FROM orders;
```

### 4. CASE in ORDER BY — Custom Sort Order

'Paid orders first, then pending, then failed' cannot be expressed with a single ORDER BY. A CASE assigning sort keys does the trick:

```
SELECT id, status, amount
FROM orders
ORDER BY
  CASE status
    WHEN 'paid'    THEN 1
    WHEN 'pending' THEN 2
    WHEN 'failed'  THEN 3
    ELSE 4
  END,
  amount DESC;
```

The FIELD() function does the same thing more compactly for string lists, but CASE is clearer and works for non-equality logic too.

### 5. CASE in WHERE — Usually Avoidable

You *can* use CASE in WHERE, but it is almost always a sign the query should be rewritten with AND/OR. The rare valid case is when the comparison column itself depends on another column's value:

```
-- Legitimate: filter column depends on type
SELECT * FROM rentals
WHERE CASE type
        WHEN 'daily'  THEN days_used
        WHEN 'hourly' THEN hours_used
      END > 10;
```

If you find yourself writing `WHERE CASE WHEN x THEN 1 ELSE 0 END = 1`, just write `WHERE x`.

### 6. CASE in GROUP BY — Custom Bucketing

Group by a CASE expression to bucket rows on the fly:

```
SELECT
  CASE
    WHEN age < 18 THEN 'Minor'
    WHEN age < 30 THEN '18-29'
    WHEN age < 50 THEN '30-49'
    ELSE '50+'
  END AS age_group,
  COUNT(*) AS people
FROM users
GROUP BY age_group
ORDER BY MIN(age);
```

### 7. Conditional Aggregation — The Pivot Pattern

This is the most valuable pattern in the chapter. Build column-by-column pivots by wrapping CASE inside SUM or COUNT:

```
SELECT
  customer_id,
  SUM(CASE WHEN status = 'paid'    THEN amount ELSE 0 END) AS paid_total,
  SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS pending_total,
  SUM(CASE WHEN status = 'failed'  THEN amount ELSE 0 END) AS failed_total,
  COUNT(CASE WHEN status = 'paid' THEN 1 END)              AS paid_count
FROM orders
GROUP BY customer_id;
```

Two tricks at play:

- **SUM(CASE ... ELSE 0 END)** — 0 means "don't contribute", so only matching rows add up.
- **COUNT(CASE WHEN cond THEN 1 END)** — no ELSE, so non-matching rows produce NULL, and COUNT skips NULLs. This counts only the matching rows.

### 8. The IF Function (MySQL-specific)

For two branches, IF is shorter:

```
SELECT name, salary,
       IF(salary > 50000, 'High', 'Low') AS band,
       IF(active = 1, 'Yes', 'No')        AS active_label
FROM employees;
```

`IF(cond, t, f)` is equivalent to `CASE WHEN cond THEN t ELSE f END`. It is not SQL-standard — avoid it if portability matters (PostgreSQL does not have IF as an expression).

### 9. IFNULL and COALESCE

Both replace NULL with a default. IFNULL is 2-argument; COALESCE takes any number of arguments and returns the first non-NULL:

```
SELECT name,
       IFNULL(phone, 'not provided')                     AS phone,
       COALESCE(mobile, landline, office_phone, 'none')  AS best_phone
FROM contacts;
```

COALESCE is SQL-standard; IFNULL is MySQL-only. Prefer COALESCE for portability.

### 10. NULLIF — The Anti-Divide-By-Zero Trick

`NULLIF(a, b)` returns NULL if `a = b`, else returns `a`. Classic use:

```
-- Avoid division-by-zero errors
SELECT customer_id,
       SUM(profit) / NULLIF(SUM(revenue), 0) AS margin
FROM orders
GROUP BY customer_id;
```

If `SUM(revenue)` is 0, NULLIF turns it into NULL, and division by NULL yields NULL — a safe, clean result. Without NULLIF, you'd get a divide-by-zero error or a silently ugly `NULL`.

### 11. Putting It All Together — Grade Calculator

```
CREATE TABLE students (
  name   VARCHAR(50),
  maths  INT,
  eng    INT,
  sci    INT
);
INSERT INTO students VALUES
  ('Aarav Sharma',   92, 88, 95),
  ('Priya Nair',     75, 82, 71),
  ('Rohan Mehta',    60, 55, 68),
  ('Ananya Iyer',    35, 42, 39),
  ('Vikram Singh',   NULL, 80, 85);   -- missed maths paper

SELECT name,
  (IFNULL(maths,0) + IFNULL(eng,0) + IFNULL(sci,0)) AS total,
  ROUND((IFNULL(maths,0) + IFNULL(eng,0) + IFNULL(sci,0)) / 3, 1) AS avg_marks,
  CASE
    WHEN maths IS NULL OR eng IS NULL OR sci IS NULL THEN 'Incomplete'
    WHEN (maths + eng + sci) / 3 >= 90 THEN 'A'
    WHEN (maths + eng + sci) / 3 >= 75 THEN 'B'
    WHEN (maths + eng + sci) / 3 >= 60 THEN 'C'
    WHEN (maths + eng + sci) / 3 >= 40 THEN 'D'
    ELSE 'F'
  END AS grade
FROM students;
```

Note the first WHEN — it guards against nulls before the numeric comparisons so we never compare NULL to a number.

## Code Examples

### Grade from Marks using Searched CASE

```sql
CREATE TABLE students (
  id    INT PRIMARY KEY,
  name  VARCHAR(50),
  marks INT
);

INSERT INTO students VALUES
  (1, 'Aarav Sharma',   92),
  (2, 'Priya Nair',     78),
  (3, 'Rohan Mehta',    64),
  (4, 'Ananya Iyer',    45),
  (5, 'Vikram Singh',   32),
  (6, 'Meera Krishnan', 88);

SELECT name, marks,
  CASE
    WHEN marks >= 90 THEN 'A'
    WHEN marks >= 75 THEN 'B'
    WHEN marks >= 60 THEN 'C'
    WHEN marks >= 40 THEN 'D'
    ELSE 'F'
  END AS grade
FROM students
ORDER BY marks DESC;
```

The first matching WHEN wins. Because conditions are evaluated top-to-bottom, we put the highest threshold first. ELSE handles everything below 40 ('F'). Sorting by marks DESC shows the ranking clearly.

**Output:**

```
+-----------------+-------+-------+
| name            | marks | grade |
+-----------------+-------+-------+
| Aarav Sharma    |    92 | A     |
| Meera Krishnan  |    88 | B     |
| Priya Nair      |    78 | B     |
| Rohan Mehta     |    64 | C     |
| Ananya Iyer     |    45 | D     |
| Vikram Singh    |    32 | F     |
+-----------------+-------+-------+
```

### Customer Segments by Order Value

```sql
CREATE TABLE orders (
  id           INT PRIMARY KEY,
  customer     VARCHAR(50),
  amount       DECIMAL(10,2),
  status       VARCHAR(20)
);

INSERT INTO orders VALUES
  (1, 'Aarav Sharma',  12500, 'paid'),
  (2, 'Priya Nair',     3200, 'paid'),
  (3, 'Rohan Mehta',     850, 'pending'),
  (4, 'Ananya Iyer',    6400, 'paid'),
  (5, 'Vikram Singh',    250, 'failed'),
  (6, 'Meera Krishnan',  950, 'paid');

SELECT customer, amount, status,
  CASE
    WHEN status = 'paid' AND amount >= 10000 THEN 'VIP'
    WHEN status = 'paid' AND amount >= 5000  THEN 'Gold'
    WHEN status = 'paid'                     THEN 'Regular'
    WHEN status = 'pending'                  THEN 'Prospect'
    ELSE 'Lost'
  END AS segment
FROM orders
ORDER BY amount DESC;
```

Combines two conditions per WHEN using AND. The key idea: the most restrictive rule goes first. 'paid AND amount >= 10000' must be checked before 'paid AND amount >= 5000', otherwise the VIP case would never match.

**Output:**

```
+----------------+----------+---------+----------+
| customer       | amount   | status  | segment  |
+----------------+----------+---------+----------+
| Aarav Sharma   | 12500.00 | paid    | VIP      |
| Ananya Iyer    |  6400.00 | paid    | Gold     |
| Priya Nair     |  3200.00 | paid    | Regular  |
| Meera Krishnan |   950.00 | paid    | Regular  |
| Rohan Mehta    |   850.00 | pending | Prospect |
| Vikram Singh   |   250.00 | failed  | Lost     |
+----------------+----------+---------+----------+
```

### Conditional Aggregation - Build a Status Pivot

```sql
CREATE TABLE orders (
  id INT PRIMARY KEY,
  customer_id INT,
  amount DECIMAL(10,2),
  status VARCHAR(20)
);

INSERT INTO orders VALUES
  (1, 101, 1200, 'paid'),
  (2, 101,  800, 'paid'),
  (3, 101,  500, 'pending'),
  (4, 102, 2500, 'paid'),
  (5, 102, 1000, 'failed'),
  (6, 103,  700, 'pending'),
  (7, 103,  300, 'pending'),
  (8, 103, 1500, 'paid');

SELECT customer_id,
  COUNT(*)                                                      AS total_orders,
  SUM(CASE WHEN status = 'paid'    THEN amount ELSE 0 END)      AS paid_amt,
  SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END)      AS pending_amt,
  SUM(CASE WHEN status = 'failed'  THEN amount ELSE 0 END)      AS failed_amt,
  COUNT(CASE WHEN status = 'paid'    THEN 1 END)                AS paid_count,
  COUNT(CASE WHEN status = 'pending' THEN 1 END)                AS pending_count
FROM orders
GROUP BY customer_id
ORDER BY customer_id;
```

The canonical pivot pattern. SUM with ELSE 0 adds only matching rows. COUNT without ELSE takes advantage of the fact that COUNT ignores NULLs — non-matching rows produce NULL and are skipped. Three status columns and two count columns, all from a single scan of the table.

**Output:**

```
+-------------+--------------+----------+-------------+------------+------------+---------------+
| customer_id | total_orders | paid_amt | pending_amt | failed_amt | paid_count | pending_count |
+-------------+--------------+----------+-------------+------------+------------+---------------+
|         101 |            3 |  2000.00 |      500.00 |       0.00 |          2 |             1 |
|         102 |            2 |  2500.00 |        0.00 |    1000.00 |          1 |             0 |
|         103 |            3 |  1500.00 |     1000.00 |       0.00 |          1 |             2 |
+-------------+--------------+----------+-------------+------------+------------+---------------+
```

### CASE in ORDER BY - Custom Sort

```sql
-- Using the orders table from the previous example.
-- Business wants: pending first (highest urgency), then paid, then failed.
SELECT id, customer_id, amount, status
FROM orders
ORDER BY
  CASE status
    WHEN 'pending' THEN 1
    WHEN 'paid'    THEN 2
    WHEN 'failed'  THEN 3
    ELSE 4
  END,
  amount DESC;
```

A natural ASC/DESC cannot produce this custom order. The CASE assigns an ordering integer per status. Rows with the same status fall back to amount DESC. You can mix CASE keys with regular columns freely.

**Output:**

```
+----+-------------+---------+---------+
| id | customer_id | amount  | status  |
+----+-------------+---------+---------+
|  7 |         103 |  300.00 | pending |  <- pending
|  6 |         103 |  700.00 | pending |
|  3 |         101 |  500.00 | pending |
|  4 |         102 | 2500.00 | paid    |  <- paid
|  8 |         103 | 1500.00 | paid    |
|  1 |         101 | 1200.00 | paid    |
|  2 |         101 |  800.00 | paid    |
|  5 |         102 | 1000.00 | failed  |  <- failed
+----+-------------+---------+---------+
```

### IFNULL, COALESCE, and NULLIF Together

```sql
CREATE TABLE contacts (
  id        INT PRIMARY KEY,
  name      VARCHAR(50),
  mobile    VARCHAR(15),
  landline  VARCHAR(15),
  email     VARCHAR(80)
);

INSERT INTO contacts VALUES
  (1,'Aarav Sharma',  '9810012345', NULL,         'aarav@example.com'),
  (2,'Priya Nair',     NULL,        '04442245678','priya@example.com'),
  (3,'Rohan Mehta',    NULL,         NULL,         NULL),
  (4,'Ananya Iyer',   '9812345678',  NULL,        '');   -- empty email

SELECT name,
  IFNULL(mobile, 'no mobile')                            AS mobile_safe,
  COALESCE(mobile, landline, 'no phone')                 AS best_phone,
  COALESCE(NULLIF(TRIM(email), ''), 'no email')          AS clean_email
FROM contacts;
```

IFNULL handles one column. COALESCE handles a waterfall of fallbacks — returns the first non-NULL. The clean_email pattern is a gem: NULLIF turns empty strings into NULL, then COALESCE replaces with 'no email'. This is how you handle both missing and empty data in one expression.

**Output:**

```
+----------------+-------------+-------------+-------------------+
| name           | mobile_safe | best_phone  | clean_email       |
+----------------+-------------+-------------+-------------------+
| Aarav Sharma   | 9810012345  | 9810012345  | aarav@example.com |
| Priya Nair     | no mobile   | 04442245678 | priya@example.com |
| Rohan Mehta    | no mobile   | no phone    | no email          |
| Ananya Iyer    | 9812345678  | 9812345678  | no email          |
+----------------+-------------+-------------+-------------------+
```

### Age Bucket GROUP BY

```sql
CREATE TABLE users (
  id    INT PRIMARY KEY,
  name  VARCHAR(50),
  age   INT
);

INSERT INTO users VALUES
  (1,'Ishaan Gupta',   14),
  (2,'Kavya Reddy',    17),
  (3,'Arjun Pillai',   24),
  (4,'Neha Choudhary', 28),
  (5,'Diya Bhatt',     35),
  (6,'Dev Kapoor',     41),
  (7,'Riya Joshi',     52),
  (8,'Kabir Shah',     67);

SELECT
  CASE
    WHEN age < 18 THEN '1. Under 18'
    WHEN age < 30 THEN '2. 18-29'
    WHEN age < 50 THEN '3. 30-49'
    ELSE           '4. 50+'
  END AS age_group,
  COUNT(*) AS users
FROM users
GROUP BY age_group
ORDER BY age_group;
```

Numbering the labels ('1. Under 18', '2. 18-29'...) is a trick to make alphabetical ORDER BY return the buckets in the natural order. Alternative: ORDER BY MIN(age).

**Output:**

```
+--------------+-------+
| age_group    | users |
+--------------+-------+
| 1. Under 18  |     2 |
| 2. 18-29     |     2 |
| 3. 30-49     |     2 |
| 4. 50+       |     2 |
+--------------+-------+
```

### Safe Division with NULLIF

```sql
CREATE TABLE campaigns (
  id       INT PRIMARY KEY,
  name     VARCHAR(40),
  spend    DECIMAL(10,2),
  revenue  DECIMAL(10,2)
);

INSERT INTO campaigns VALUES
  (1,'Google Search', 5000, 25000),
  (2,'Meta Ads',      3200,  8000),
  (3,'LinkedIn',      1500,     0),  -- zero revenue
  (4,'YouTube',          0,  4200); -- zero spend (free traffic)

SELECT name,
  spend, revenue,
  -- Wrong: would error on campaign 4
  -- revenue / spend AS raw_roas,
  ROUND(revenue / NULLIF(spend, 0), 2)  AS roas,
  ROUND(spend   / NULLIF(revenue, 0), 2) AS cost_ratio
FROM campaigns;
```

Division by zero in MySQL (with default settings) returns NULL, but on stricter SQL modes it errors. NULLIF(x, 0) converts any zero denominator into NULL, and anything divided by NULL is NULL. This is safe in every SQL mode and in every database.

**Output:**

```
+---------------+--------+----------+------+------------+
| name          | spend  | revenue  | roas | cost_ratio |
+---------------+--------+----------+------+------------+
| Google Search |5000.00 | 25000.00 | 5.00 |       0.20 |
| Meta Ads      |3200.00 |  8000.00 | 2.50 |       0.40 |
| LinkedIn      |1500.00 |     0.00 | 0.00 |       NULL |
| YouTube       |   0.00 |  4200.00 | NULL |       0.00 |
+---------------+--------+----------+------+------------+
```

### Exam Results with Multiple CASE Checks

```sql
CREATE TABLE results (
  student  VARCHAR(50),
  maths    INT,
  english  INT,
  science  INT
);

INSERT INTO results VALUES
  ('Aarav Sharma',   92, 88, 95),
  ('Priya Nair',     75, 82, 71),
  ('Rohan Mehta',    60, 33, 68),   -- failed english
  ('Ananya Iyer',    35, 42, 39),   -- failed all
  ('Vikram Singh',   NULL, 80, 85); -- absent in maths

SELECT student, maths, english, science,
  -- Total, treating absent as 0
  (IFNULL(maths,0) + IFNULL(english,0) + IFNULL(science,0)) AS total,
  CASE
    WHEN maths IS NULL OR english IS NULL OR science IS NULL  THEN 'Incomplete'
    WHEN maths < 40 OR english < 40 OR science < 40           THEN 'Fail (any subject < 40)'
    WHEN (maths + english + science)/3 >= 90                  THEN 'Distinction'
    WHEN (maths + english + science)/3 >= 75                  THEN 'First Class'
    WHEN (maths + english + science)/3 >= 60                  THEN 'Second Class'
    ELSE                                                          'Pass'
  END AS verdict
FROM results;
```

Order matters: check nulls first (so later comparisons are safe), then check the 'fail any subject' gate, then the positive distinctions. Without the first WHEN, Vikram's NULL arithmetic would propagate NULL everywhere.

**Output:**

```
+----------------+-------+---------+---------+-------+-------------------------+
| student        | maths | english | science | total | verdict                 |
+----------------+-------+---------+---------+-------+-------------------------+
| Aarav Sharma   |    92 |      88 |      95 |   275 | Distinction             |
| Priya Nair     |    75 |      82 |      71 |   228 | First Class             |
| Rohan Mehta    |    60 |      33 |      68 |   161 | Fail (any subject < 40) |
| Ananya Iyer    |    35 |      42 |      39 |   116 | Fail (any subject < 40) |
| Vikram Singh   |  NULL |      80 |      85 |   165 | Incomplete              |
+----------------+-------+---------+---------+-------+-------------------------+
```

## Common Mistakes

### Forgetting ELSE — Getting Surprise NULLs

**Wrong:**

```
SELECT name,
  CASE
    WHEN marks >= 75 THEN 'Pass'
    WHEN marks >= 60 THEN 'Average'
  END AS band
FROM students;
-- Students with marks < 60 get NULL in 'band'.
```

No SQL error, but rows below 60 marks show NULL in the band column, which later breaks GROUP BY counts and string concatenation.

**Correct:**

```
SELECT name,
  CASE
    WHEN marks >= 75 THEN 'Pass'
    WHEN marks >= 60 THEN 'Average'
    ELSE 'Fail'
  END AS band
FROM students;
```

CASE without a matching WHEN and no ELSE returns NULL. Always provide an ELSE unless NULL is explicitly what you want. This bug is especially sneaky inside SUM(CASE ...) pivots where a missing ELSE 0 silently drops rows.

### Simple CASE with NULL — Comparison Never Matches

**Wrong:**

```
SELECT *,
  CASE status
    WHEN NULL THEN 'unknown'
    WHEN 'paid' THEN 'complete'
    ELSE 'pending'
  END AS label
FROM orders;
```

No error, but the first WHEN NULL branch NEVER matches, even for rows where status is actually NULL.

**Correct:**

```
SELECT *,
  CASE
    WHEN status IS NULL   THEN 'unknown'
    WHEN status = 'paid'  THEN 'complete'
    ELSE 'pending'
  END AS label
FROM orders;
```

Simple CASE uses equality (=), and NULL = NULL is NULL (not TRUE). For NULL checks you must use searched CASE with IS NULL. This is a classic trap.

### Wrong WHEN Order — Later Conditions Never Match

**Wrong:**

```
-- Buckets are overlapping; first match wins.
SELECT name,
  CASE
    WHEN marks >= 40 THEN 'Pass'
    WHEN marks >= 75 THEN 'Distinction'   -- unreachable!
  END AS grade
FROM students;
```

No SQL error, but nobody ever gets 'Distinction' because marks >= 40 catches everyone first.

**Correct:**

```
SELECT name,
  CASE
    WHEN marks >= 75 THEN 'Distinction'
    WHEN marks >= 40 THEN 'Pass'
    ELSE 'Fail'
  END AS grade
FROM students;
```

Searched CASE stops at the first match. Always order conditions from most specific / most restrictive to most general. If two WHEN clauses overlap, the second is dead code.

### Using CASE in WHERE When a Simple Boolean Works

**Wrong:**

```
SELECT * FROM orders
WHERE CASE
        WHEN status = 'paid' THEN 1
        ELSE 0
      END = 1;
```

No error, but unnecessarily complex and often loses sargability, preventing index usage on status.

**Correct:**

```
SELECT * FROM orders
WHERE status = 'paid';
```

If you find yourself writing `WHERE CASE ... END = 1`, you probably just wanted a boolean expression. Drop the CASE and write the condition directly. CASE in WHERE is only justified when the comparison column itself changes per row.

### Missing SUM(...ELSE 0) in Pivot — Losing Rows

**Wrong:**

```
-- Intended: paid total per customer.
SELECT customer_id,
  SUM(CASE WHEN status = 'paid' THEN amount END) AS paid_total
FROM orders
GROUP BY customer_id;
-- Customers with zero paid orders show NULL, not 0.
```

No error, but downstream code that expects a number will fail or show ugly NULLs in dashboards.

**Correct:**

```
SELECT customer_id,
  SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS paid_total,
  -- Alternative: wrap with IFNULL
  IFNULL(SUM(CASE WHEN status = 'paid' THEN amount END), 0) AS paid_total_v2
FROM orders
GROUP BY customer_id;
```

Without ELSE 0 the CASE returns NULL for non-matching rows. SUM skips NULLs, which is fine — but if a customer has zero matching rows at all, SUM returns NULL (there's nothing to sum). Either add ELSE 0 or wrap the SUM in IFNULL.

## Summary

- Searched CASE (WHEN condition THEN value) is the portable, multi-branch conditional. Conditions are evaluated top-to-bottom and the first match wins.
- Simple CASE (CASE expr WHEN value THEN ...) is a shortcut for equality checks against one expression. It cannot test NULL or range conditions — use searched CASE for those.
- Always include ELSE unless NULL is the correct default. A CASE with no matching WHEN and no ELSE returns NULL, which silently breaks downstream logic.
- Put the most restrictive WHEN first. If conditions overlap, later WHEN branches become unreachable dead code.
- CASE works everywhere: SELECT (computed columns), ORDER BY (custom sort), GROUP BY (bucketing), HAVING (post-aggregation filter). Rarely needed in WHERE — use AND/OR directly.
- Conditional aggregation — SUM(CASE WHEN cond THEN amount ELSE 0 END) — is the pivot-table pattern. It is the single most important query form for business dashboards and appears in most SQL interviews.
- COUNT(CASE WHEN cond THEN 1 END) counts only matching rows because COUNT skips NULLs. No ELSE needed.
- IF(cond, t, f) is a 2-branch MySQL shortcut. It is NOT SQL-standard — avoid for portable code.
- IFNULL(x, default) replaces NULL with a default (MySQL). COALESCE(a, b, c, ...) returns the first non-NULL and is SQL-standard — prefer it for portability.
- NULLIF(a, b) returns NULL when a equals b. The classic use is NULLIF(denominator, 0) to make division safe in every SQL mode.

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/conditional-logic-case-when/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/conditional-logic-case-when/practice/*
