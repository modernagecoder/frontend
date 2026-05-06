---
title: "SQL Window Functions - ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, Running Totals | Modern Age Coders"
description: "Master SQL window functions for data analyst interviews: ROW_NUMBER, RANK, DENSE_RANK, NTILE, LAG, LEAD, FIRST_VALUE, running totals, moving averages, PARTITION BY, frame clauses. 64+ interview-grade practice queries with MySQL solutions."
slug: window-functions
canonical: https://learn.modernagecoders.com/resources/sql/window-functions
category: "SQL"
keywords: ["sql window functions", "row_number", "rank vs dense_rank", "partition by", "lag lead sql", "running total sql", "moving average sql", "sql over clause", "top n per group", "month over month sql"]
---
# Window Functions in SQL - ROW_NUMBER, RANK, LAG, LEAD

**Difficulty:** Advanced  
**Reading time:** 55 min  
**Chapter:** 18  
**Practice questions:** 64

## What Are Window Functions?

Window functions are the single most powerful feature of modern SQL. They compute a value for each row using a *window* of other rows — without collapsing the result set the way GROUP BY does. That difference is everything.

```
-- GROUP BY: one row per department, details lost
SELECT dept, AVG(salary) FROM employees GROUP BY dept;

-- Window function: every row preserved, with dept avg alongside
SELECT name, dept, salary,
       AVG(salary) OVER (PARTITION BY dept) AS dept_avg
FROM employees;
```

Notice the `OVER (PARTITION BY dept)` clause — that's the window. It tells MySQL: "for each row, compute AVG(salary) over the window of rows sharing its dept value." You keep the row-level detail *and* get aggregate context on the same row.

Once you know window functions, you will reach for them for:

- Ranking rows (top 3 per category, Nth highest salary)
- Running totals and moving averages
- Comparing each row to the previous / next row (LAG / LEAD)
- Month-over-month growth, retention curves, percentile buckets

Every FAANG / product company data analyst interview has a window function question. Most have several.

## Why Window Functions Matter

### 1. They Replace Ugly Self-Joins

Pre-window-functions SQL had to compute "current salary minus previous salary per employee" with a self-join on sequence numbers. Now it's one line with LAG. Queries that used to be 30 lines become 4.

### 2. Interview Favorites Live Here

Nth highest salary, top 3 products per category, first and last order per customer, running totals, month-over-month growth, cumulative percentages, median — these are the classic SQL interview questions. All of them have elegant window-function solutions.

### 3. Analytics Dashboards Need Row + Aggregate Together

A sales dashboard shows each salesperson's revenue *and* what % of the team total that is. That requires aggregate context on every row. GROUP BY can't do it without a self-join. Window functions can.

### 4. They Express Sequential Logic Naturally

Questions like "how many days since the previous order per customer?" are naturally sequential. Window functions with PARTITION BY + ORDER BY let you walk down the timeline per partition.

### 5. Modern SQL Is Window-Function-Heavy

Data engineering code you will write at any job — ETL for analytics, cohort analysis, attribution windows, session sequencing — is full of window functions. If you can't write them fluently, your SQL ceiling is low.

## Detailed Explanation

### 1. Anatomy of a Window Function Call

```
function_name() OVER (
  [PARTITION BY col1, col2, ...]
  [ORDER BY col3 [ASC|DESC], ...]
  [frame_clause]
)
```

Three optional parts inside OVER():

- **PARTITION BY** — split rows into groups. The function restarts at each partition boundary. No PARTITION BY means one single partition = the whole result set.
- **ORDER BY** — order rows within each partition. Required for ranking functions and for cumulative computations.
- **Frame clause** — a sub-window within the partition. Controls running totals, moving averages, etc.

### 2. Ranking Functions: ROW_NUMBER, RANK, DENSE_RANK

All three assign a number to each row. They differ in how they handle ties.

```
-- Sample data: salaries [100, 100, 90, 80, 80]
-- ROW_NUMBER  1 2 3 4 5    (arbitrary tiebreak, unique sequence)
-- RANK        1 1 3 4 4    (ties share rank, then JUMP the skipped numbers)
-- DENSE_RANK  1 1 2 3 3    (ties share rank, NO jump)
```

```
SELECT name, salary,
  ROW_NUMBER() OVER (ORDER BY salary DESC) AS rn,
  RANK()       OVER (ORDER BY salary DESC) AS rnk,
  DENSE_RANK() OVER (ORDER BY salary DESC) AS drnk
FROM employees;
```

**When to use which:**

- `ROW_NUMBER` — pick exactly N rows (pagination, top-3 with tiebreak). Always returns unique 1, 2, 3, ...
- `RANK` — competition ranking. 1st, 1st, 3rd (Olympic medals: two gold, no silver).
- `DENSE_RANK` — nth-distinct ranking. "Find the 3rd highest DISTINCT salary." No gaps.

### 3. PARTITION BY — The Game Changer

```
-- Top salary per department
SELECT name, dept, salary,
       ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) AS rn
FROM employees;
-- Each dept gets its own ranking starting from 1.

-- Keep only #1 per dept
SELECT * FROM (
  SELECT name, dept, salary,
         ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) AS rn
  FROM employees
) t
WHERE rn = 1;
```

"Top N per group" is the #1 window function interview question. The pattern is always: rank within partition, then filter on the rank in an outer query.

### 4. LAG and LEAD — Previous and Next Row

```
LAG(column, offset, default)  OVER (PARTITION BY ... ORDER BY ...)
LEAD(column, offset, default) OVER (PARTITION BY ... ORDER BY ...)
```

```
-- Previous order date per customer
SELECT customer_id, order_date,
       LAG(order_date)     OVER (PARTITION BY customer_id ORDER BY order_date) AS prev_order,
       DATEDIFF(order_date,
                LAG(order_date) OVER (PARTITION BY customer_id ORDER BY order_date)
       ) AS days_since_prev
FROM orders;
```

Arguments: `LAG(col)` defaults to offset 1 and default NULL. The first row of each partition has no "previous" row, so LAG returns NULL unless you pass a default.

### 5. FIRST_VALUE, LAST_VALUE, NTH_VALUE

```
-- First and last order amount per customer
SELECT customer_id, order_date, amount,
       FIRST_VALUE(amount) OVER (PARTITION BY customer_id ORDER BY order_date) AS first_amt,
       LAST_VALUE(amount)  OVER (PARTITION BY customer_id ORDER BY order_date
                                 ROWS BETWEEN UNBOUNDED PRECEDING
                                          AND UNBOUNDED FOLLOWING) AS last_amt
FROM orders;
```

**Trap:** LAST_VALUE without an explicit frame returns the CURRENT row, not the last row of the partition. The default frame for ORDER BY is "RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW", which stops at the current row. Always explicitly override the frame for LAST_VALUE.

### 6. Running Totals with Aggregates + OVER

```
-- Running total of daily sales
SELECT sale_date, amount,
       SUM(amount) OVER (ORDER BY sale_date
                         ROWS BETWEEN UNBOUNDED PRECEDING
                                  AND CURRENT ROW) AS running_total
FROM sales;
```

Any aggregate (SUM, AVG, COUNT, MIN, MAX) becomes a window function by adding OVER(). Combined with a frame clause, it computes cumulatively.

### 7. The Frame Clause — ROWS vs RANGE

```
-- Generic frame syntax
ROWS  BETWEEN  AND 
RANGE BETWEEN  AND 

-- start/end can be:
UNBOUNDED PRECEDING         -- beginning of partition
N PRECEDING                 -- N rows before current
CURRENT ROW                 -- current row
N FOLLOWING                 -- N rows after
UNBOUNDED FOLLOWING         -- end of partition
```

**ROWS** counts physical rows: "3 rows before me." **RANGE** counts by value: "rows whose ORDER BY column is within 3 of mine." 95% of the time you want ROWS.

```
-- 7-day moving average of daily sales
SELECT sale_date, amount,
       AVG(amount) OVER (ORDER BY sale_date
                         ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS ma_7d
FROM sales;

-- Centered 3-row moving average
SELECT sale_date, amount,
       AVG(amount) OVER (ORDER BY sale_date
                         ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING) AS ma_3_centered
FROM sales;
```

### 8. NTILE for Bucketing

```
-- Divide employees into 4 salary quartiles
SELECT name, salary,
       NTILE(4) OVER (ORDER BY salary DESC) AS quartile
FROM employees;
```

NTILE(n) spreads rows as evenly as possible across n buckets. Useful for percentile analysis, AB-testing cohort splitting, and revenue deciles.

### 9. PERCENT_RANK and CUME_DIST

```
-- Both return a fraction between 0 and 1
SELECT name, salary,
       ROUND(PERCENT_RANK() OVER (ORDER BY salary), 2) AS pct_rank,
       ROUND(CUME_DIST()    OVER (ORDER BY salary), 2) AS cume_dist
FROM employees;
```

PERCENT_RANK: (RANK - 1) / (total_rows - 1). First row = 0, last row = 1. CUME_DIST: fraction of rows with value <= current. Always > 0.

### 10. Classic Interview Patterns

#### Top N Per Group

```
-- Top 3 employees per dept by salary
SELECT * FROM (
  SELECT name, dept, salary,
         DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS rnk
  FROM employees
) t
WHERE rnk <= 3;
```

#### Nth Highest Salary

```
-- 3rd highest distinct salary
SELECT DISTINCT salary
FROM (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
  FROM employees
) t
WHERE rnk = 3;
```

#### Month-Over-Month Growth

```
WITH monthly AS (
  SELECT DATE_FORMAT(order_date, '%Y-%m') AS month,
         SUM(amount) AS revenue
  FROM orders
  GROUP BY month
)
SELECT month, revenue,
       LAG(revenue) OVER (ORDER BY month) AS prev_month,
       ROUND((revenue - LAG(revenue) OVER (ORDER BY month))
             / LAG(revenue) OVER (ORDER BY month) * 100, 2) AS mom_pct
FROM monthly;
```

#### Running Total and Cumulative Share

```
SELECT sale_date, amount,
  SUM(amount) OVER (ORDER BY sale_date ROWS UNBOUNDED PRECEDING) AS running_total,
  ROUND(100.0 * SUM(amount) OVER (ORDER BY sale_date ROWS UNBOUNDED PRECEDING)
        / SUM(amount) OVER (), 2) AS pct_of_total
FROM sales;
```

#### Consecutive Rows / Gaps and Islands

```
-- Find streaks of consecutive login dates per user
SELECT user_id, login_date,
       login_date - INTERVAL ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date) DAY AS grp
FROM logins;
-- Rows with the same grp form a consecutive streak.
```

### 11. Where Window Functions Can and Can't Appear

- Allowed: SELECT list and ORDER BY of the outer query.
- Not allowed: WHERE, GROUP BY, HAVING. You cannot filter on a window result directly. Wrap in a subquery/CTE and filter on the outer query.
- MySQL supports window functions from 8.0+. MariaDB from 10.2+.

## Code Examples

### ROW_NUMBER, RANK, DENSE_RANK Side-by-Side

```sql
CREATE TABLE employees (
  id     INT PRIMARY KEY,
  name   VARCHAR(50),
  dept   VARCHAR(30),
  salary DECIMAL(10,2)
);

INSERT INTO employees VALUES
  (1, 'Aarav Sharma',    'Engineering',  95000),
  (2, 'Priya Nair',      'Engineering',  95000),  -- tie with Aarav
  (3, 'Rohan Mehta',     'Engineering',  82000),
  (4, 'Ananya Iyer',     'Engineering',  72000),
  (5, 'Vikram Singh',    'Sales',        68000),
  (6, 'Meera Krishnan',  'Sales',        68000),  -- tie with Vikram
  (7, 'Diya Bhatt',      'Sales',        55000);

SELECT name, dept, salary,
  ROW_NUMBER() OVER (ORDER BY salary DESC) AS rn,
  RANK()       OVER (ORDER BY salary DESC) AS rnk,
  DENSE_RANK() OVER (ORDER BY salary DESC) AS drnk
FROM employees;
```

Watch the tied pairs. Aarav and Priya both earn 95000. ROW_NUMBER gives them 1 and 2 (arbitrary tiebreak). RANK gives them both 1, then jumps to 3 for the next row. DENSE_RANK gives them both 1, then 2 (no jump). Vikram and Meera show the same pattern at 68000.

**Output:**

```
+----------------+-------------+---------+----+-----+------+
| name           | dept        | salary  | rn | rnk | drnk |
+----------------+-------------+---------+----+-----+------+
| Aarav Sharma   | Engineering | 95000.00|  1 |   1 |    1 |
| Priya Nair     | Engineering | 95000.00|  2 |   1 |    1 |
| Rohan Mehta    | Engineering | 82000.00|  3 |   3 |    2 |
| Ananya Iyer    | Engineering | 72000.00|  4 |   4 |    3 |
| Vikram Singh   | Sales       | 68000.00|  5 |   5 |    4 |
| Meera Krishnan | Sales       | 68000.00|  6 |   5 |    4 |
| Diya Bhatt     | Sales       | 55000.00|  7 |   7 |    5 |
+----------------+-------------+---------+----+-----+------+
```

### Top 2 Employees Per Department (Classic Interview Question)

```sql
-- Using employees table from above

SELECT name, dept, salary
FROM (
  SELECT name, dept, salary,
         DENSE_RANK() OVER (
           PARTITION BY dept
           ORDER BY salary DESC
         ) AS rnk
  FROM employees
) t
WHERE rnk <= 2
ORDER BY dept, salary DESC;
```

PARTITION BY dept restarts the ranking at each department. DENSE_RANK is used so ties both qualify. Filtering happens in an OUTER query because WHERE cannot reference a window function directly. This is THE canonical top-N-per-group template.

**Output:**

```
+----------------+-------------+---------+
| name           | dept        | salary  |
+----------------+-------------+---------+
| Aarav Sharma   | Engineering | 95000.00|
| Priya Nair     | Engineering | 95000.00|
| Rohan Mehta    | Engineering | 82000.00|
| Vikram Singh   | Sales       | 68000.00|
| Meera Krishnan | Sales       | 68000.00|
| Diya Bhatt     | Sales       | 55000.00|
+----------------+-------------+---------+
```

### Running Total of Daily Sales

```sql
CREATE TABLE sales (
  sale_date DATE,
  amount    DECIMAL(10,2)
);

INSERT INTO sales VALUES
  ('2026-04-10', 1200),
  ('2026-04-11',  800),
  ('2026-04-12', 2400),
  ('2026-04-13',  950),
  ('2026-04-14', 1500),
  ('2026-04-15',  700),
  ('2026-04-16', 1100);

SELECT sale_date, amount,
  SUM(amount) OVER (
    ORDER BY sale_date
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
  ) AS running_total,
  ROUND(100.0 * amount / SUM(amount) OVER (), 2) AS pct_of_grand_total
FROM sales
ORDER BY sale_date;
```

The first SUM OVER uses a frame from partition start to the current row — that's the running total. The second SUM OVER with NO clauses means 'sum over the entire result set' — the grand total. Dividing row amount by grand total gives per-day share of total. Two windows on the same query, no self-join.

**Output:**

```
+------------+--------+---------------+--------------------+
| sale_date  | amount | running_total | pct_of_grand_total |
+------------+--------+---------------+--------------------+
| 2026-04-10 | 1200.00|       1200.00 |              14.29 |
| 2026-04-11 |  800.00|       2000.00 |               9.52 |
| 2026-04-12 | 2400.00|       4400.00 |              28.57 |
| 2026-04-13 |  950.00|       5350.00 |              11.31 |
| 2026-04-14 | 1500.00|       6850.00 |              17.86 |
| 2026-04-15 |  700.00|       7550.00 |               8.33 |
| 2026-04-16 | 1100.00|       8650.00 |              13.10 |
+------------+--------+---------------+--------------------+
```

### LAG — Days Since Customer's Previous Order

```sql
CREATE TABLE orders (
  id           INT PRIMARY KEY,
  customer_id  INT,
  order_date   DATE,
  amount       DECIMAL(10,2)
);

INSERT INTO orders VALUES
  (1, 101, '2026-01-10', 1200),
  (2, 101, '2026-02-15',  800),
  (3, 101, '2026-03-20', 1600),
  (4, 102, '2026-02-01', 2500),
  (5, 102, '2026-03-28',  900),
  (6, 103, '2026-04-10', 3100);

SELECT customer_id, order_date, amount,
  LAG(order_date) OVER (
    PARTITION BY customer_id ORDER BY order_date
  ) AS prev_order_date,
  DATEDIFF(
    order_date,
    LAG(order_date) OVER (PARTITION BY customer_id ORDER BY order_date)
  ) AS days_since_prev
FROM orders
ORDER BY customer_id, order_date;
```

LAG looks back one row within the partition. For the first order of each customer, there is no previous row, so LAG returns NULL — which makes DATEDIFF also NULL. This is the canonical pattern for 'inter-event time' analysis.

**Output:**

```
+-------------+------------+--------+-----------------+-----------------+
| customer_id | order_date | amount | prev_order_date | days_since_prev |
+-------------+------------+--------+-----------------+-----------------+
|         101 | 2026-01-10 |1200.00 | NULL            |            NULL |
|         101 | 2026-02-15 | 800.00 | 2026-01-10      |              36 |
|         101 | 2026-03-20 |1600.00 | 2026-02-15      |              33 |
|         102 | 2026-02-01 |2500.00 | NULL            |            NULL |
|         102 | 2026-03-28 | 900.00 | 2026-02-01      |              55 |
|         103 | 2026-04-10 |3100.00 | NULL            |            NULL |
+-------------+------------+--------+-----------------+-----------------+
```

### 7-Day Moving Average with Frame Clause

```sql
-- Using the sales table from the running total example

SELECT sale_date, amount,
  ROUND(AVG(amount) OVER (
    ORDER BY sale_date
    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
  ), 2) AS ma_7d,
  -- 3-day centered moving average
  ROUND(AVG(amount) OVER (
    ORDER BY sale_date
    ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING
  ), 2) AS ma_3_centered
FROM sales
ORDER BY sale_date;
```

ROWS BETWEEN 6 PRECEDING AND CURRENT ROW gives a trailing 7-day window (current row + 6 before). Rows at the start have fewer than 7 rows and MySQL averages whatever it has (not NULL). The centered variant uses 1 before and 1 after the current row.

**Output:**

```
+------------+--------+---------+---------------+
| sale_date  | amount | ma_7d   | ma_3_centered |
+------------+--------+---------+---------------+
| 2026-04-10 | 1200.00| 1200.00 |       1000.00 |
| 2026-04-11 |  800.00| 1000.00 |       1466.67 |
| 2026-04-12 | 2400.00| 1466.67 |       1383.33 |
| 2026-04-13 |  950.00| 1337.50 |       1616.67 |
| 2026-04-14 | 1500.00| 1370.00 |       1050.00 |
| 2026-04-15 |  700.00| 1258.33 |       1100.00 |
| 2026-04-16 | 1100.00| 1235.71 |        900.00 |
+------------+--------+---------+---------------+
```

### Month-Over-Month Revenue Growth

```sql
-- Reusing the orders table from the LAG example

WITH monthly AS (
  SELECT DATE_FORMAT(order_date, '%Y-%m') AS month,
         SUM(amount)                      AS revenue
  FROM orders
  GROUP BY month
)
SELECT month, revenue,
  LAG(revenue) OVER (ORDER BY month) AS prev_revenue,
  ROUND(
    (revenue - LAG(revenue) OVER (ORDER BY month))
    / LAG(revenue) OVER (ORDER BY month) * 100,
    2
  ) AS mom_growth_pct
FROM monthly
ORDER BY month;
```

Aggregate to monthly totals in a CTE (Chapter 19), then apply LAG on top. This is maybe the most-asked SQL interview question at analytics companies. The first month has no previous, so both prev_revenue and mom_growth_pct are NULL.

**Output:**

```
+---------+---------+--------------+----------------+
| month   | revenue | prev_revenue | mom_growth_pct |
+---------+---------+--------------+----------------+
| 2026-01 | 1200.00 | NULL         |           NULL |
| 2026-02 | 3300.00 | 1200.00      |         175.00 |
| 2026-03 | 2500.00 | 3300.00      |         -24.24 |
| 2026-04 | 3100.00 | 2500.00      |          24.00 |
+---------+---------+--------------+----------------+
```

### NTILE for Salary Quartiles

```sql
-- Using employees table from the first example

SELECT name, dept, salary,
  NTILE(4) OVER (ORDER BY salary DESC) AS quartile,
  ROUND(PERCENT_RANK() OVER (ORDER BY salary DESC), 2) AS pct_rank
FROM employees
ORDER BY salary DESC;
```

NTILE(4) splits the 7 employees into 4 approximately-equal buckets. With 7 rows / 4 buckets, 3 buckets get 2 rows and 1 gets 1 (NTILE fills earlier buckets first). Quartile 1 is top earners. PERCENT_RANK gives a normalized rank in [0, 1].

**Output:**

```
+----------------+-------------+---------+----------+----------+
| name           | dept        | salary  | quartile | pct_rank |
+----------------+-------------+---------+----------+----------+
| Aarav Sharma   | Engineering | 95000.00|        1 |     0.00 |
| Priya Nair     | Engineering | 95000.00|        1 |     0.00 |
| Rohan Mehta    | Engineering | 82000.00|        2 |     0.33 |
| Ananya Iyer    | Engineering | 72000.00|        2 |     0.50 |
| Vikram Singh   | Sales       | 68000.00|        3 |     0.67 |
| Meera Krishnan | Sales       | 68000.00|        3 |     0.67 |
| Diya Bhatt     | Sales       | 55000.00|        4 |     1.00 |
+----------------+-------------+---------+----------+----------+
```

### FIRST_VALUE and LAST_VALUE with Correct Frame

```sql
-- orders table from LAG example

SELECT customer_id, order_date, amount,
  FIRST_VALUE(amount) OVER (
    PARTITION BY customer_id ORDER BY order_date
  ) AS first_order_amount,
  LAST_VALUE(amount) OVER (
    PARTITION BY customer_id ORDER BY order_date
    ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
  ) AS last_order_amount
FROM orders
ORDER BY customer_id, order_date;
```

FIRST_VALUE works correctly with the default frame because the default frame starts at UNBOUNDED PRECEDING. But LAST_VALUE needs the explicit frame extending to UNBOUNDED FOLLOWING — without it, LAST_VALUE would return the current row's value, not the partition's last value. This is the most common window-function bug.

**Output:**

```
+-------------+------------+--------+--------------------+-------------------+
| customer_id | order_date | amount | first_order_amount | last_order_amount |
+-------------+------------+--------+--------------------+-------------------+
|         101 | 2026-01-10 |1200.00 |            1200.00 |           1600.00 |
|         101 | 2026-02-15 | 800.00 |            1200.00 |           1600.00 |
|         101 | 2026-03-20 |1600.00 |            1200.00 |           1600.00 |
|         102 | 2026-02-01 |2500.00 |            2500.00 |            900.00 |
|         102 | 2026-03-28 | 900.00 |            2500.00 |            900.00 |
|         103 | 2026-04-10 |3100.00 |            3100.00 |           3100.00 |
+-------------+------------+--------+--------------------+-------------------+
```

## Common Mistakes

### LAST_VALUE Without an Explicit Frame

**Wrong:**

```
-- Expected: each row shows last order amount for that customer.
SELECT customer_id, order_date, amount,
  LAST_VALUE(amount) OVER (
    PARTITION BY customer_id ORDER BY order_date
  ) AS last_amt
FROM orders;
```

No SQL error, but last_amt equals the current row's amount in every row. The default frame ends at CURRENT ROW, so 'last value in the window so far' is the current row.

**Correct:**

```
SELECT customer_id, order_date, amount,
  LAST_VALUE(amount) OVER (
    PARTITION BY customer_id ORDER BY order_date
    ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
  ) AS last_amt
FROM orders;
```

When you use ORDER BY in OVER() without an explicit frame, MySQL applies the default: `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`. FIRST_VALUE is fine because it still sees the partition start. LAST_VALUE is broken because the frame ends at the current row. Always specify UNBOUNDED FOLLOWING for LAST_VALUE.

### Using a Window Function in WHERE

**Wrong:**

```
-- Intent: keep only top 3 per dept
SELECT name, dept, salary
FROM employees
WHERE RANK() OVER (PARTITION BY dept ORDER BY salary DESC) <= 3;
```

SQL Error: window functions cannot appear in WHERE.

**Correct:**

```
SELECT name, dept, salary
FROM (
  SELECT name, dept, salary,
         RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS rnk
  FROM employees
) t
WHERE rnk <= 3;
```

Window functions are computed AFTER WHERE. To filter on a window result, compute it in a subquery or CTE and apply WHERE in the outer query. This pattern is so common it's worth memorizing.

### Forgetting PARTITION BY — Global Ranking When Per-Group Was Meant

**Wrong:**

```
-- Intent: rank employees within each dept.
SELECT name, dept, salary,
  RANK() OVER (ORDER BY salary DESC) AS rnk
FROM employees;
-- This ranks across ALL employees, ignoring dept.
```

No error, but results are wrong. Every employee is compared to every other employee across all departments.

**Correct:**

```
SELECT name, dept, salary,
  RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS rnk
FROM employees;
```

Without PARTITION BY, the window is the entire result set. Add PARTITION BY whenever you want per-group computation. This is the most common window function logic error in interview answers.

### Confusing RANK and DENSE_RANK for 'Nth Highest'

**Wrong:**

```
-- Intent: 3rd highest DISTINCT salary.
SELECT salary FROM (
  SELECT salary, RANK() OVER (ORDER BY salary DESC) AS rnk
  FROM employees
) t WHERE rnk = 3;
-- If top 2 salaries tie, RANK goes 1,1,3,... and this 'works'.
-- But if 3 salaries tie at top, RANK goes 1,1,1,4 — rnk=3 returns nothing.
```

No SQL error, but the query returns wrong or empty results depending on how ties break.

**Correct:**

```
-- Use DENSE_RANK for Nth DISTINCT value
SELECT DISTINCT salary FROM (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
  FROM employees
) t WHERE rnk = 3;
```

RANK skips numbers after ties, so rnk=3 might not exist. DENSE_RANK does not skip — rnk=3 always means 'the 3rd distinct value'. For 'Nth highest distinct salary', DENSE_RANK is correct. For 'top N rows including ties', RANK is correct.

### Mixing PARTITION BY Columns Incorrectly

**Wrong:**

```
-- Intent: running total of amount per customer.
SELECT customer_id, order_date, amount,
  SUM(amount) OVER (ORDER BY order_date) AS running_total
FROM orders;
-- Every customer's rows are mixed together.
```

No error, but running_total adds across ALL customers interleaved by date.

**Correct:**

```
SELECT customer_id, order_date, amount,
  SUM(amount) OVER (
    PARTITION BY customer_id
    ORDER BY order_date
    ROWS UNBOUNDED PRECEDING
  ) AS running_total
FROM orders;
```

Without PARTITION BY customer_id, the running total accumulates across all customers. Adding PARTITION BY gives each customer their own running total, reset at each customer boundary.

## Summary

- Window functions compute a value using a window of rows without collapsing the result set. Each row keeps its detail and gets aggregate context alongside.
- The OVER() clause has three optional parts: PARTITION BY (split rows into groups), ORDER BY (order within partition), and a frame clause (sub-window for running calculations).
- ROW_NUMBER gives unique 1..N. RANK gives ties same number then skips. DENSE_RANK gives ties same number and does NOT skip. Use DENSE_RANK for 'Nth distinct value'.
- PARTITION BY restarts the computation at each group boundary. Without it, the window is the entire result set.
- LAG(col, offset, default) returns the previous row's value within the partition. LEAD does the same for the next row. Both are essential for time-series and sequential analysis.
- Running totals use SUM/AVG with OVER(ORDER BY ... ROWS UNBOUNDED PRECEDING). Moving averages use ROWS BETWEEN N PRECEDING AND CURRENT ROW.
- ROWS counts physical rows; RANGE counts by value. Prefer ROWS unless you specifically need value-based windows.
- LAST_VALUE needs an explicit frame (ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) — the default frame ends at CURRENT ROW, which makes LAST_VALUE return the current row's value.
- Window functions cannot appear in WHERE, GROUP BY, or HAVING. To filter on a window result, compute it in a subquery/CTE and filter in the outer query.
- Classic interview patterns: top N per group (ROW_NUMBER or DENSE_RANK with PARTITION BY), Nth highest salary (DENSE_RANK), month-over-month growth (LAG on monthly aggregate), running totals, moving averages, gaps and islands analysis.

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/window-functions/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/window-functions/practice/*
