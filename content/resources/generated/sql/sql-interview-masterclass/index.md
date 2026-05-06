---
title: "SQL Interview Masterclass - 30 Solved Questions: Nth Highest Salary, Duplicates, Running Total, LAG, Pivot | Modern Age Coders"
description: "30 classic SQL interview questions with full solutions, alternative approaches, and explanations. Covers Nth highest salary (LIMIT OFFSET, DENSE_RANK, correlated subquery), duplicates, employees earning more than manager, second highest per department, top-N per group, running totals, month-over-month growth, consecutive logins, pivots, median, LAG/LEAD, retention, reconciliation. Plus 55+ fresh practice questions. Tested queries on MySQL."
slug: sql-interview-masterclass
canonical: https://learn.modernagecoders.com/resources/sql/sql-interview-masterclass
category: "SQL"
keywords: ["sql interview questions", "sql interview masterclass", "nth highest salary", "sql duplicates", "running total sql", "month over month sql", "consecutive days sql", "median sql", "pivot sql", "sql window function interview"]
---
# SQL Interview Masterclass - Top 30 Questions Solved

**Difficulty:** Advanced  
**Reading time:** 90 min  
**Chapter:** 25  
**Practice questions:** 58

## SQL Interview Masterclass: 30 Questions Every SQL Engineer Must Solve

Every data analyst, backend engineer, and data scientist interview features a small, well-known set of SQL puzzles. This chapter collects the 30 most common ones and solves every single one of them — with sample data, a working query, an explanation of the approach, and alternative solutions where they are illuminating. The queries are written for MySQL 8+ (window functions, CTEs) with fallbacks for older versions where it matters.

If you can solve these 30 cleanly, you will pass almost any SQL round. If you cannot, you will freeze on the whiteboard. There is no substitute for working through each one — *typing* the query, running it, checking the output. Read this chapter once. Then solve it again from scratch. Then come back in a month and solve it again.

Every solution below assumes a small sample schema. All sample data uses Indian names (Aarav, Priya, Rohan, Anika, Kavya, Vikram, Arjun, Neha, Sanya, Ishan). Every query runs as-is in MySQL 8.0+.

## Why These 30?

Companies ask these questions because together they cover every essential SQL pattern: filtering with WHERE, joining multiple tables, aggregating with GROUP BY, ranking with window functions, set operations, self-joins, recursive CTEs, and conditional aggregation. If you know all 30, you know SQL.

More importantly, these patterns repeat in real work. 'Find the second highest salary' becomes 'find the second most recent order per user'. 'Running total' becomes 'cumulative revenue by region'. 'Consecutive login days' becomes 'customers with 30-day retention'. The 30 questions are the building blocks of production SQL.

The structure of this chapter is different from previous chapters. Instead of narrative explanation, the `explanation` section below presents 30 self-contained solved problems, each with: a problem statement, a sample table, a working query, and commentary. After that, 55+ practice questions (all fresh — no repeats of the 30) give you more chances to build fluency.

## The 30 Solved Interview Questions

### Q1. Find the Nth Highest Salary (Three Ways)

**Sample:** `employees(id, name, salary)` with salaries 50000, 70000, 60000, 90000, 80000.

```
-- Method 1: LIMIT + OFFSET (MySQL only, no ties)
SELECT DISTINCT salary FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 2;          -- 3rd highest = 70000

-- Method 2: DENSE_RANK (handles ties correctly)
SELECT salary FROM (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
    FROM employees
) t WHERE rnk = 3;

-- Method 3: Correlated subquery (portable, no window functions)
SELECT salary FROM employees e1
WHERE N-1 = (
    SELECT COUNT(DISTINCT e2.salary)
    FROM employees e2
    WHERE e2.salary > e1.salary
);
```

DENSE_RANK is the canonical answer: it handles ties naturally (two people on rank 1 both count as rank 1). LIMIT/OFFSET is the quickest write but does not handle ties. The correlated subquery is O(N^2) — fine for small tables, catastrophic for large ones.

### Q2. Find Duplicate Values in a Column

**Sample:** `emails(id, email)` with some repeating addresses.

```
SELECT email, COUNT(*) AS cnt
FROM emails
GROUP BY email
HAVING COUNT(*) > 1;
```

GROUP BY + HAVING is the textbook duplicate-finder. HAVING filters on aggregates; it is what WHERE would do if WHERE could see aggregates.

### Q3. Delete Duplicate Rows Keeping One

**Sample:** `users(id PK, email)` with rows (1, 'a@x'), (2, 'a@x'), (3, 'b@x').

```
-- Keep the MIN id for each email, delete the rest
DELETE u FROM users u
JOIN (
    SELECT email, MIN(id) AS keep_id
    FROM users
    GROUP BY email
) dupes ON u.email = dupes.email
WHERE u.id > dupes.keep_id;

-- Alternative using ROW_NUMBER (MySQL 8+)
WITH ranked AS (
    SELECT id, ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS rn
    FROM users
)
DELETE FROM users WHERE id IN (SELECT id FROM ranked WHERE rn > 1);
```

Always decide which copy to keep before writing the query (smallest id, most recent update, etc.). Never run the DELETE without first running the matching SELECT and inspecting the rows.

### Q4. Find Employees Earning More Than Their Manager

**Sample:** `employees(id, name, salary, manager_id)`.

```
SELECT e.name AS employee, e.salary AS emp_salary,
       m.name AS manager,  m.salary AS mgr_salary
FROM employees e
JOIN employees m ON m.id = e.manager_id
WHERE e.salary > m.salary;
```

Self-join with aliases `e` (employee) and `m` (manager). The FK `manager_id` points to `id` in the same table.

### Q5. Second Highest Salary Per Department

```
SELECT dept, salary FROM (
    SELECT dept, salary, DENSE_RANK() OVER (
        PARTITION BY dept ORDER BY salary DESC
    ) AS rnk
    FROM employees
) t WHERE rnk = 2;
```

PARTITION BY restarts the ranking for each dept — the key to every 'per-group' window problem.

### Q6. Top 3 Products Per Category

```
SELECT category, product, revenue FROM (
    SELECT category, product, revenue,
           ROW_NUMBER() OVER (
               PARTITION BY category ORDER BY revenue DESC
           ) AS rn
    FROM sales
) t WHERE rn <= 3;
```

Use ROW_NUMBER when you want exactly N rows per group (break ties arbitrarily). Use DENSE_RANK if ties should all make it in.

### Q7. Running Total of Daily Sales

```
SELECT sale_date, daily_total,
       SUM(daily_total) OVER (ORDER BY sale_date
           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
       ) AS running_total
FROM daily_sales
ORDER BY sale_date;
```

The windowed SUM with a frame from unbounded preceding to current row is the canonical cumulative-sum pattern.

### Q8. Month-over-Month Growth Percentage

```
WITH monthly AS (
    SELECT DATE_FORMAT(sale_date, '%Y-%m') AS month, SUM(amount) AS total
    FROM orders GROUP BY DATE_FORMAT(sale_date, '%Y-%m')
)
SELECT month, total,
       LAG(total) OVER (ORDER BY month) AS prev_total,
       ROUND((total - LAG(total) OVER (ORDER BY month))
             * 100.0 / LAG(total) OVER (ORDER BY month), 2) AS growth_pct
FROM monthly;
```

LAG returns the previous row's value. Dividing by it gives growth. Guard against NULL on the first month.

### Q9. Customers Who Ordered in Every Month of 2024

```
SELECT customer_id
FROM orders
WHERE YEAR(order_date) = 2024
GROUP BY customer_id
HAVING COUNT(DISTINCT MONTH(order_date)) = 12;
```

COUNT DISTINCT month = 12 means they ordered in every month. No need for a calendar table here — the constant 12 captures the requirement.

### Q10. Consecutive Login Days (Max Streak Per User)

```
WITH numbered AS (
    SELECT user_id, login_date,
           ROW_NUMBER() OVER (
               PARTITION BY user_id ORDER BY login_date
           ) AS rn
    FROM logins
),
groups AS (
    SELECT user_id, login_date,
           DATE_SUB(login_date, INTERVAL rn DAY) AS grp
    FROM numbered
)
SELECT user_id, MAX(streak_len) AS max_streak
FROM (
    SELECT user_id, grp, COUNT(*) AS streak_len
    FROM groups
    GROUP BY user_id, grp
) s
GROUP BY user_id;
```

The trick: subtract the row number (by date) from the date. Consecutive dates share the same offset, so they form a group. Count rows per group to get streak length.

### Q11. Pivot Table: Sales by Year across Quarters

```
SELECT YEAR(sale_date) AS year,
       SUM(CASE WHEN QUARTER(sale_date) = 1 THEN amount ELSE 0 END) AS q1,
       SUM(CASE WHEN QUARTER(sale_date) = 2 THEN amount ELSE 0 END) AS q2,
       SUM(CASE WHEN QUARTER(sale_date) = 3 THEN amount ELSE 0 END) AS q3,
       SUM(CASE WHEN QUARTER(sale_date) = 4 THEN amount ELSE 0 END) AS q4
FROM sales
GROUP BY YEAR(sale_date)
ORDER BY year;
```

MySQL has no PIVOT keyword. Conditional aggregation (`SUM(CASE WHEN ...)`) is the universal pivot pattern.

### Q12. Reverse a String Without REVERSE()

```
-- Using a recursive CTE (MySQL 8+)
WITH RECURSIVE reversed AS (
    SELECT 'SQL Rocks' AS original,
           SUBSTRING('SQL Rocks', LENGTH('SQL Rocks'), 1) AS rev,
           LENGTH('SQL Rocks') - 1 AS pos
    UNION ALL
    SELECT original,
           CONCAT(rev, SUBSTRING(original, pos, 1)),
           pos - 1
    FROM reversed
    WHERE pos > 0
)
SELECT rev FROM reversed WHERE pos = 0;
```

A classic 'can you think recursively' check. Each step appends one more character starting from the end.

### Q13. Department with Highest Average Salary

```
SELECT dept, AVG(salary) AS avg_sal
FROM employees
GROUP BY dept
ORDER BY avg_sal DESC
LIMIT 1;
```

GROUP BY + ORDER BY + LIMIT 1. If ties matter, use DENSE_RANK and filter rnk = 1.

### Q14. Employees Hired in the Last Quarter

```
SELECT id, name, hire_date
FROM employees
WHERE hire_date >= DATE_SUB(CURDATE(), INTERVAL 3 MONTH);

-- Or: strictly the previous calendar quarter
SELECT id, name, hire_date
FROM employees
WHERE QUARTER(hire_date) = QUARTER(DATE_SUB(CURDATE(), INTERVAL 3 MONTH))
  AND YEAR(hire_date)    = YEAR(DATE_SUB(CURDATE(), INTERVAL 3 MONTH));
```

Clarify 'last quarter' in the interview: rolling 3 months vs previous calendar quarter. Interviewers like candidates who ask.

### Q15. Find Gaps in Invoice Numbers

```
SELECT (t1.id + 1) AS gap_start, (MIN(t2.id) - 1) AS gap_end
FROM invoices t1
JOIN invoices t2 ON t2.id > t1.id
GROUP BY t1.id
HAVING gap_start < MIN(t2.id);

-- Alternative using LEAD
SELECT id + 1 AS missing_start, next_id - 1 AS missing_end
FROM (
    SELECT id, LEAD(id) OVER (ORDER BY id) AS next_id
    FROM invoices
) t
WHERE next_id > id + 1;
```

LEAD version is cleaner. Find adjacent rows where the next id is more than one above the current — the gap between them is missing.

### Q16. Cumulative Percentage of Sales

```
SELECT product, sales,
       SUM(sales) OVER (ORDER BY sales DESC) AS cumulative,
       ROUND(100.0 * SUM(sales) OVER (ORDER BY sales DESC) /
             SUM(sales) OVER (), 2) AS cum_pct
FROM products;
```

Two windows: one ordered (cumulative), one unordered (grand total). Perfect for Pareto / 80-20 analyses.

### Q17. Median Salary

```
-- Works without a MEDIAN function
SELECT AVG(salary) AS median
FROM (
    SELECT salary,
           ROW_NUMBER() OVER (ORDER BY salary) AS rn,
           COUNT(*) OVER () AS total
    FROM employees
) t
WHERE rn IN (FLOOR((total + 1) / 2), CEIL((total + 1) / 2));
```

For odd count: FLOOR and CEIL point to the same row (the middle). For even count: they point to the two middle rows; AVG gives the median.

### Q18. Self Join: Pairs of Employees in the Same Department

```
SELECT e1.name AS emp1, e2.name AS emp2, e1.dept
FROM employees e1
JOIN employees e2 ON e1.dept = e2.dept
WHERE e1.id < e2.id;
```

The `<` in the WHERE prevents self-pairs and duplicate mirror pairs (A,B) and (B,A).

### Q19. Difference Between Consecutive Rows (LAG/LEAD)

```
SELECT reading_time, temperature,
       LAG(temperature) OVER (ORDER BY reading_time) AS prev_temp,
       temperature - LAG(temperature) OVER (ORDER BY reading_time) AS diff
FROM sensor_readings
ORDER BY reading_time;
```

LAG(x) OVER (ORDER BY t) gives the value of x on the previous row (by t order). Great for deltas, rate-of-change, 'from the last event'.

### Q20. Rank Products by Sales Within Region

```
SELECT region, product, sales,
       RANK() OVER (PARTITION BY region ORDER BY sales DESC) AS rnk
FROM product_sales
ORDER BY region, rnk;
```

RANK leaves gaps after ties (1, 1, 3). DENSE_RANK does not (1, 1, 2). ROW_NUMBER breaks ties arbitrarily (1, 2, 3). Pick based on what you want.

### Q21. First and Last Order Date Per Customer

```
SELECT customer_id,
       MIN(order_date) AS first_order,
       MAX(order_date) AS last_order,
       DATEDIFF(MAX(order_date), MIN(order_date)) AS days_active
FROM orders
GROUP BY customer_id;
```

Simple GROUP BY — no window functions needed. DATEDIFF computes the spread.

### Q22. Customers Who Never Placed an Order

```
-- Method 1: LEFT JOIN + IS NULL
SELECT c.id, c.name
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id
WHERE o.id IS NULL;

-- Method 2: NOT EXISTS
SELECT c.id, c.name
FROM customers c
WHERE NOT EXISTS (
    SELECT 1 FROM orders o WHERE o.customer_id = c.id
);

-- Method 3: NOT IN (watch NULLs)
SELECT id, name FROM customers
WHERE id NOT IN (SELECT customer_id FROM orders WHERE customer_id IS NOT NULL);
```

NOT EXISTS is usually fastest on MySQL. NOT IN can be wrong if the inner result contains NULL — always wrap with IS NOT NULL when using NOT IN on a nullable column.

### Q23. Most Frequent Value Per Group

```
WITH counted AS (
    SELECT category, product, COUNT(*) AS cnt
    FROM purchases
    GROUP BY category, product
),
ranked AS (
    SELECT *, RANK() OVER (
        PARTITION BY category ORDER BY cnt DESC
    ) AS rnk
    FROM counted
)
SELECT category, product, cnt FROM ranked WHERE rnk = 1;
```

Classic 'mode per group' pattern: count, rank within group, filter to rank 1.

### Q24. Reconciliation: Data in A but Not in B

```
-- Rows in source that are not in target, by matching key
SELECT s.*
FROM source s
LEFT JOIN target t ON t.key_col = s.key_col
WHERE t.key_col IS NULL;

-- Or with a set difference pattern
SELECT key_col FROM source
WHERE key_col NOT IN (SELECT key_col FROM target WHERE key_col IS NOT NULL);
```

The LEFT JOIN ... IS NULL pattern is the workhorse of reconciliation. It handles NULLs on the key correctly when wrapped properly and plays well with indexes.

### Q25. Retention: Users Active in Consecutive Months

```
WITH active_months AS (
    SELECT DISTINCT user_id, DATE_FORMAT(activity_date, '%Y-%m-01') AS month
    FROM activity
),
paired AS (
    SELECT a.user_id, a.month AS month_n, b.month AS month_n_plus_1
    FROM active_months a
    JOIN active_months b
      ON b.user_id = a.user_id
     AND b.month = DATE_ADD(a.month, INTERVAL 1 MONTH)
)
SELECT month_n AS cohort_month, COUNT(DISTINCT user_id) AS retained
FROM paired
GROUP BY month_n;
```

Self-join `active_months` to itself, offset by one month. Each matching pair is a user who was active in month N *and* month N+1 — the definition of month-over-month retention.

### Q26. Build a Calendar Table of All Dates in the Last Year

```
WITH RECURSIVE calendar AS (
    SELECT DATE_SUB(CURDATE(), INTERVAL 365 DAY) AS d
    UNION ALL
    SELECT DATE_ADD(d, INTERVAL 1 DAY) FROM calendar
    WHERE d < CURDATE()
)
SELECT d FROM calendar;
```

A recursive CTE generates the full date range. Use it to LEFT JOIN with actual data to fill in rows for days with zero events.

### Q27. Find Odd/Even ID Rows

```
SELECT * FROM t WHERE id % 2 = 1;   -- odd
SELECT * FROM t WHERE id % 2 = 0;   -- even

-- With MOD for portability
SELECT * FROM t WHERE MOD(id, 2) = 1;
```

Trivial but common. The useful variant: every Nth row, `id % N = 0`, to sample large tables.

### Q28. Total, Rank, and Percentage in One Query

```
SELECT product, sales,
       RANK() OVER (ORDER BY sales DESC) AS rnk,
       ROUND(100.0 * sales / SUM(sales) OVER (), 2) AS pct_of_total
FROM product_sales;
```

Two window functions side by side: RANK for position, SUM OVER () for the grand total (unpartitioned window).

### Q29. Convert Rows to Comma-Separated String (GROUP_CONCAT)

```
SELECT customer_id,
       GROUP_CONCAT(product_name ORDER BY product_name SEPARATOR ', ') AS products
FROM orders
GROUP BY customer_id;
```

GROUP_CONCAT is MySQL's answer to PostgreSQL's string_agg. Supports ORDER BY and DISTINCT inside. Watch the `group_concat_max_len` limit for large groups.

### Q30. Running Average of the Last 7 Days

```
SELECT sale_date, daily_total,
       AVG(daily_total) OVER (
           ORDER BY sale_date
           ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
       ) AS moving_avg_7d
FROM daily_sales
ORDER BY sale_date;
```

Frame clause `ROWS BETWEEN 6 PRECEDING AND CURRENT ROW` defines a sliding 7-row window. Use `RANGE BETWEEN INTERVAL 6 DAY PRECEDING AND CURRENT ROW` (MySQL 8) if your dates have gaps and you want calendar-based windows.

## How to Use This Chapter

1. Read a question. Do not look at the solution.
2. Write your own query against a mental model of the sample data.
3. Run it against sample data you invent.
4. Compare with the solution. Understand every clause.
5. The next day, redo the question without notes.
6. After 30 days, redo all 30 in a single session. Target: under 90 minutes.

There is no other way. SQL fluency is muscle memory.

## Code Examples

### Sample Schema Used in This Chapter

```sql
-- The rest of the examples in this chapter use this schema
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    dept VARCHAR(20),
    salary DECIMAL(10,2),
    manager_id INT,
    hire_date DATE,
    FOREIGN KEY (manager_id) REFERENCES employees(id)
);

INSERT INTO employees VALUES
(1, 'Aarav',  'ENG',  95000, NULL,  '2021-03-15'),
(2, 'Priya',  'ENG',  70000, 1,     '2022-06-10'),
(3, 'Rohan',  'SAL',  55000, NULL,  '2020-01-20'),
(4, 'Anika',  'ENG', 110000, 1,     '2019-04-02'),
(5, 'Kavya',  'SAL',  60000, 3,     '2023-08-12'),
(6, 'Vikram', 'HR',   50000, NULL,  '2024-02-01'),
(7, 'Arjun',  'ENG',  70000, 1,     '2025-11-28'),
(8, 'Neha',   'SAL',  80000, 3,     '2025-12-15');

-- Quick check
SELECT * FROM employees ORDER BY salary DESC;
```

This is the canonical employees table used by most of the 30 questions. Names are Indian, salaries are in rupee-ish amounts, and the manager_id self-reference lets us practice self-joins (Q4).

**Output:**

```
+----+--------+------+----------+------------+------------+
| id | name   | dept | salary   | manager_id | hire_date  |
+----+--------+------+----------+------------+------------+
|  4 | Anika  | ENG  | 110000.00|          1 | 2019-04-02 |
|  1 | Aarav  | ENG  |  95000.00|       NULL | 2021-03-15 |
|  8 | Neha   | SAL  |  80000.00|          3 | 2025-12-15 |
|  2 | Priya  | ENG  |  70000.00|          1 | 2022-06-10 |
|  7 | Arjun  | ENG  |  70000.00|          1 | 2025-11-28 |
|  5 | Kavya  | SAL  |  60000.00|          3 | 2023-08-12 |
|  3 | Rohan  | SAL  |  55000.00|       NULL | 2020-01-20 |
|  6 | Vikram | HR   |  50000.00|       NULL | 2024-02-01 |
+----+--------+------+----------+------------+------------+
```

### Nth Highest Salary: DENSE_RANK Solution

```sql
-- 3rd highest distinct salary using DENSE_RANK
SELECT salary FROM (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
    FROM employees
) t
WHERE rnk = 3
LIMIT 1;
```

DENSE_RANK gives the same rank to ties (two people tied for #2 both get rank 2, next is rank 3). If Priya and Arjun are tied at 70000 they share rank 4; the 3rd highest distinct salary is still 80000 (Neha).

**Output:**

```
+----------+
| salary   |
+----------+
| 80000.00 |
+----------+
```

### Running Total of Daily Sales

```sql
CREATE TABLE daily_sales (
    sale_date DATE PRIMARY KEY,
    daily_total DECIMAL(10,2)
);

INSERT INTO daily_sales VALUES
('2026-04-01',  5000),
('2026-04-02',  8000),
('2026-04-03',  6500),
('2026-04-04',  9200),
('2026-04-05',  7100);

SELECT sale_date, daily_total,
       SUM(daily_total) OVER (ORDER BY sale_date
           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
       ) AS running_total
FROM daily_sales
ORDER BY sale_date;
```

The window SUM(...) OVER (ORDER BY sale_date ...) accumulates day-by-day. The ROWS BETWEEN clause makes it explicit that the frame starts at the very first row and extends to the current row.

**Output:**

```
+------------+-------------+---------------+
| sale_date  | daily_total | running_total |
+------------+-------------+---------------+
| 2026-04-01 |     5000.00 |       5000.00 |
| 2026-04-02 |     8000.00 |      13000.00 |
| 2026-04-03 |     6500.00 |      19500.00 |
| 2026-04-04 |     9200.00 |      28700.00 |
| 2026-04-05 |     7100.00 |      35800.00 |
+------------+-------------+---------------+
```

### Month-over-Month Growth

```sql
CREATE TABLE orders (order_date DATE, amount DECIMAL(10,2));
INSERT INTO orders VALUES
('2026-01-05', 10000), ('2026-01-20', 12000),
('2026-02-10', 18000), ('2026-02-22',  6000),
('2026-03-03', 25000), ('2026-03-28', 10000),
('2026-04-11', 18000);

WITH monthly AS (
    SELECT DATE_FORMAT(order_date, '%Y-%m') AS month,
           SUM(amount) AS total
    FROM orders
    GROUP BY DATE_FORMAT(order_date, '%Y-%m')
)
SELECT month, total,
       LAG(total) OVER (ORDER BY month) AS prev_total,
       ROUND((total - LAG(total) OVER (ORDER BY month)) * 100.0
             / LAG(total) OVER (ORDER BY month), 2) AS growth_pct
FROM monthly
ORDER BY month;
```

The CTE aggregates per month, then the outer query uses LAG to look back one row. First row has NULL prev_total, so growth_pct is NULL there — good behaviour that shouts 'no baseline'.

**Output:**

```
+---------+----------+------------+------------+
| month   | total    | prev_total | growth_pct |
+---------+----------+------------+------------+
| 2026-01 | 22000.00 | NULL       | NULL       |
| 2026-02 | 24000.00 |   22000.00 |      9.09  |
| 2026-03 | 35000.00 |   24000.00 |     45.83  |
| 2026-04 | 18000.00 |   35000.00 |    -48.57  |
+---------+----------+------------+------------+
```

### Consecutive Login Days (Max Streak)

```sql
CREATE TABLE logins (
    user_id INT,
    login_date DATE,
    PRIMARY KEY (user_id, login_date)
);

INSERT INTO logins VALUES
(1, '2026-04-01'),(1,'2026-04-02'),(1,'2026-04-03'),(1,'2026-04-06'),(1,'2026-04-07'),
(2, '2026-04-01'),(2,'2026-04-02'),
(3, '2026-04-01'),(3,'2026-04-03'),(3,'2026-04-04'),(3,'2026-04-05'),(3,'2026-04-06');

WITH numbered AS (
    SELECT user_id, login_date,
           ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date) AS rn
    FROM logins
),
groups AS (
    SELECT user_id, login_date,
           DATE_SUB(login_date, INTERVAL rn DAY) AS grp
    FROM numbered
)
SELECT user_id, MAX(streak) AS max_streak
FROM (
    SELECT user_id, grp, COUNT(*) AS streak
    FROM groups
    GROUP BY user_id, grp
) s
GROUP BY user_id
ORDER BY user_id;
```

Classic trick: for a user logged in on dates D1 < D2 < D3, if they are consecutive, D_i - i is constant. So GROUP BY that value gives you islands of consecutive days. The max count per user is the max streak.

**Output:**

```
+---------+------------+
| user_id | max_streak |
+---------+------------+
|       1 |          3 |
|       2 |          2 |
|       3 |          4 |
+---------+------------+
```

### Pivot: Quarterly Sales by Year

```sql
CREATE TABLE sales (sale_date DATE, amount DECIMAL(10,2));
INSERT INTO sales VALUES
('2024-02-10', 5000),('2024-05-20', 7000),('2024-08-12', 9000),('2024-11-05', 12000),
('2025-02-14', 6000),('2025-06-30', 8500),('2025-09-22', 9500),('2025-12-18', 11000),
('2026-01-15', 7500),('2026-03-03', 8200);

SELECT YEAR(sale_date) AS year,
       SUM(CASE WHEN QUARTER(sale_date)=1 THEN amount ELSE 0 END) AS q1,
       SUM(CASE WHEN QUARTER(sale_date)=2 THEN amount ELSE 0 END) AS q2,
       SUM(CASE WHEN QUARTER(sale_date)=3 THEN amount ELSE 0 END) AS q3,
       SUM(CASE WHEN QUARTER(sale_date)=4 THEN amount ELSE 0 END) AS q4
FROM sales
GROUP BY YEAR(sale_date)
ORDER BY year;
```

Conditional aggregation. Each CASE expression evaluates to the amount only if the row is in that quarter, zero otherwise; SUM then totals per year. This is MySQL's universal PIVOT — works for any shape of cross-tab.

**Output:**

```
+------+----------+----------+----------+----------+
| year | q1       | q2       | q3       | q4       |
+------+----------+----------+----------+----------+
| 2024 |  5000.00 |  7000.00 |  9000.00 | 12000.00 |
| 2025 |  6000.00 |  8500.00 |  9500.00 | 11000.00 |
| 2026 | 15700.00 |     0.00 |     0.00 |     0.00 |
+------+----------+----------+----------+----------+
```

### Median Salary (No Built-in Function)

```sql
-- Using the employees sample from earlier in this chapter
SELECT AVG(salary) AS median
FROM (
    SELECT salary,
           ROW_NUMBER() OVER (ORDER BY salary) AS rn,
           COUNT(*)     OVER ()                AS total
    FROM employees
) t
WHERE rn IN (FLOOR((total + 1) / 2), CEIL((total + 1) / 2));
```

With 8 salaries, the median is the average of the 4th and 5th values when sorted ascending — positions FLOOR(9/2)=4 and CEIL(9/2)=5. With an odd count, FLOOR and CEIL give the same index, so AVG returns that single value. The formula works for both cases.

**Output:**

```
+----------+
| median   |
+----------+
| 70000.00 |
+----------+
```

## Common Mistakes

### Using LIMIT/OFFSET for Nth Highest When Ties Matter

**Wrong:**

```
-- Two employees tied at 70000: Priya and Arjun
SELECT salary FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 2;
-- Returns whichever one the sort happens to place 3rd. Interviewer docks you points.
```

No error, but the result depends on tie-break order, which is non-deterministic.

**Correct:**

```
-- DENSE_RANK is tie-aware
SELECT DISTINCT salary FROM (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
    FROM employees
) t WHERE rnk = 3;
```

LIMIT/OFFSET counts rows; DENSE_RANK counts distinct values. If the interviewer says 'third highest salary' they usually mean the third distinct value — use DENSE_RANK.

### NOT IN With a NULL in the Subquery

**Wrong:**

```
SELECT * FROM customers
WHERE id NOT IN (SELECT customer_id FROM orders);
-- If orders has a row with customer_id = NULL, this returns ZERO rows.
```

No SQL error. Silently returns an empty result.

**Correct:**

```
SELECT * FROM customers
WHERE id NOT IN (SELECT customer_id FROM orders WHERE customer_id IS NOT NULL);

-- Or use NOT EXISTS, which is not affected by NULLs
SELECT * FROM customers c
WHERE NOT EXISTS (
    SELECT 1 FROM orders o WHERE o.customer_id = c.id
);
```

NOT IN treats NULL as 'unknown', so every comparison against it is unknown, and the outer row is excluded. Always filter NULLs out of the subquery or use NOT EXISTS.

### Forgetting PARTITION BY for Per-Group Ranking

**Wrong:**

```
-- Looking for second highest salary per dept
SELECT dept, salary FROM (
    SELECT dept, salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
    FROM employees
) t
WHERE rnk = 2;
-- Bug: ranking is global. rnk=2 gives the single second-highest salary across ALL departments.
```

No error — just the wrong answer.

**Correct:**

```
SELECT dept, salary FROM (
    SELECT dept, salary, DENSE_RANK() OVER (
        PARTITION BY dept ORDER BY salary DESC
    ) AS rnk
    FROM employees
) t
WHERE rnk = 2;
```

PARTITION BY restarts the ranking for each group. Without it, the window is the whole table. 'Per department' always means PARTITION BY dept.

### Aggregating Inside a WHERE Clause

**Wrong:**

```
SELECT dept FROM employees
WHERE COUNT(*) > 5;
-- ERROR 1111 (HY000): Invalid use of group function
```

ERROR 1111 (HY000): Invalid use of group function

**Correct:**

```
SELECT dept FROM employees
GROUP BY dept
HAVING COUNT(*) > 5;
```

Aggregates belong in HAVING, not WHERE. Mental model: WHERE filters rows before grouping; HAVING filters after grouping. 'More than 5 rows in the group' is a post-grouping condition.

### Missing DISTINCT in COUNT for Unique Values

**Wrong:**

```
-- Find customers who ordered in every month of 2024
SELECT customer_id
FROM orders
WHERE YEAR(order_date) = 2024
GROUP BY customer_id
HAVING COUNT(MONTH(order_date)) = 12;
-- Bug: a customer with 12 orders in January alone passes the test.
```

No error — wrong answer.

**Correct:**

```
SELECT customer_id
FROM orders
WHERE YEAR(order_date) = 2024
GROUP BY customer_id
HAVING COUNT(DISTINCT MONTH(order_date)) = 12;
```

COUNT counts rows; COUNT(DISTINCT x) counts unique values of x. 'Every month' means 12 distinct months, not 12 orders.

## Summary

- DENSE_RANK is the safe default for 'Nth highest' — it handles ties correctly. Use LIMIT/OFFSET only when you explicitly do not care about ties.
- GROUP BY + HAVING COUNT(*) > 1 finds duplicates. To delete duplicates keeping one, JOIN to a subquery that picks the surviving id (MIN or via ROW_NUMBER) and delete the rest.
- Self-joins handle 'employees vs manager', 'user vs follower', 'pair of items in same group'. Alias the same table twice and JOIN on the relationship column.
- PARTITION BY is what turns global window functions into per-group window functions. 'Top N per group', 'second highest per dept', 'rank within region' all use PARTITION BY.
- Running totals, moving averages, and month-over-month growth are all window functions with appropriate frame clauses. ROWS BETWEEN ... tells MySQL how wide the window is.
- Consecutive-days problems reduce to the 'group by date minus row number' trick: consecutive dates share the same offset, so you can COUNT per island.
- MySQL has no PIVOT keyword. Conditional aggregation with SUM(CASE WHEN x THEN y ELSE 0 END) is the universal replacement. Works for any cross-tab shape.
- Median without a median function: ROW_NUMBER the sorted values, pick the middle (odd count) or two middle (even count) rows, AVG the result. The formula FLOOR((n+1)/2) and CEIL((n+1)/2) handles both.
- NOT IN misbehaves in the presence of NULLs in the subquery. Prefer NOT EXISTS for 'missing in the other table' questions — it is both correct and usually faster.
- Practise each of these 30 questions until you can produce the query without looking. Interviewers can distinguish rehearsed solutions from scrambled ones in the first 30 seconds.

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/sql-interview-masterclass/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/sql-interview-masterclass/practice/*
