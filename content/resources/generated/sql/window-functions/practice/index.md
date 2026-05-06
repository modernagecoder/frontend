---
title: "Practice: Window Functions in SQL - ROW_NUMBER, RANK, LAG, LEAD"
description: "64 practice problems for Window Functions in SQL - ROW_NUMBER, RANK, LAG, LEAD in SQL"
slug: window-functions-practice
canonical: https://learn.modernagecoders.com/resources/sql/window-functions/practice/
category: "SQL"
---
# Practice: Window Functions in SQL - ROW_NUMBER, RANK, LAG, LEAD

**Total questions:** 64

## Topic-Specific Questions

### Q1. [Easy] For salaries [90, 85, 85, 70], what does ROW_NUMBER() OVER (ORDER BY salary DESC) return for each row?

*Hint:* ROW_NUMBER is always unique and sequential.

**Answer:** `1, 2, 3, 4`

ROW_NUMBER assigns a unique sequence even when values tie. The tie between 85 and 85 is broken arbitrarily.

### Q2. [Easy] For salaries [90, 85, 85, 70], what does RANK() OVER (ORDER BY salary DESC) return?

*Hint:* RANK skips after ties.

**Answer:** `1, 2, 2, 4`

Both 85s share rank 2. The next row (70) gets rank 4 because RANK skips the tied positions.

### Q3. [Easy] For salaries [90, 85, 85, 70], what does DENSE_RANK() OVER (ORDER BY salary DESC) return?

*Hint:* DENSE_RANK does not skip.

**Answer:** `1, 2, 2, 3`

Both 85s share rank 2. The next row gets rank 3 — no gap is left for the tie.

### Q4. [Easy] What does PARTITION BY do?

*Hint:* It divides rows into groups before the window function computes.

**Answer:** PARTITION BY splits the result set into groups. The window function restarts its computation at each group boundary — so ranking, running totals, and LAG/LEAD all reset per partition.

Without PARTITION BY, the window is the entire result set. Adding PARTITION BY customer_id turns a global running total into a per-customer running total.

### Q5. [Easy] What does LAG(amount) OVER (ORDER BY order_date) return for the FIRST row of the result set?

*Hint:* There is no row before the first one.

**Answer:** `NULL`

LAG looks back one row. The first row has no previous row, so the result is NULL (unless you pass a default as the 3rd argument).

### Q6. [Medium] Given amounts [100, 200, 300, 400, 500] ordered by date, what does SUM(amount) OVER (ORDER BY date ROWS UNBOUNDED PRECEDING) return for each row?

*Hint:* Running total from the start of the partition.

**Answer:** `100, 300, 600, 1000, 1500`

Each row's running total is its own amount plus all earlier amounts.

### Q7. [Medium] Given amounts [10, 20, 30, 40, 50], what does AVG(amount) OVER (ORDER BY date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) return for each row?

*Hint:* 3-row moving average (includes current row).

**Answer:** `10, 15, 20, 30, 40`

Row 1: avg(10) = 10. Row 2: avg(10,20) = 15. Row 3: avg(10,20,30) = 20. Row 4: avg(20,30,40) = 30. Row 5: avg(30,40,50) = 40.

### Q8. [Medium] What is the default frame for OVER(ORDER BY date) with no explicit frame clause?

*Hint:* RANGE-based and ends at the current row.

**Answer:** `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`

This default makes FIRST_VALUE work naturally but breaks LAST_VALUE. Always override the frame explicitly for LAST_VALUE and any moving window.

### Q9. [Medium] In NTILE(4) with 10 rows, how many rows does each bucket receive?

*Hint:* 10 / 4 = 2 remainder 2. Extras go to the first buckets.

**Answer:** `Buckets 1 and 2: 3 rows each. Buckets 3 and 4: 2 rows each.`

NTILE distributes rows as evenly as possible. When there's a remainder r, the first r buckets each get one extra row.

### Q10. [Medium] Can a window function appear in the WHERE clause?

*Hint:* Order of evaluation matters.

**Answer:** `No`

Window functions are evaluated AFTER WHERE. To filter on a window result, wrap the query in a subquery or CTE and filter in the outer query.

### Q11. [Medium] For values [10, 20, 30, 40], what does LEAD(x, 1, -1) OVER (ORDER BY id) return?

*Hint:* LEAD looks forward. Default is -1 if no next row.

**Answer:** `20, 30, 40, -1`

Each row sees the next value. The last row has no next row, so the default -1 is returned.

### Q12. [Medium] PERCENT_RANK() OVER (ORDER BY salary) for 5 rows returns what for the first and last row?

*Hint:* Formula: (rank - 1) / (total_rows - 1).

**Answer:** `First: 0.00, Last: 1.00`

PERCENT_RANK always puts the first row at 0 and the last at 1 (assuming no ties at the boundary).

### Q13. [Hard] Given customer_id partitions [A, A, B, B, B] in that order, what does ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY date) return?

*Hint:* Row numbers restart at each partition.

**Answer:** `1, 2, 1, 2, 3`

Customer A has 2 rows numbered 1-2. Customer B has 3 rows numbered 1-3. The numbering resets at each new partition.

### Q14. [Hard] What will LAST_VALUE(x) OVER (ORDER BY date) return without an explicit frame?

*Hint:* Default frame ends at CURRENT ROW.

**Answer:** `The current row's x value (not the last partition value)`

The default frame is RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW, so the 'last value seen so far' is always the current row. Fix: specify ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING.

### Q15. [Hard] For the sequence [100, 120, 95, 130], what does 120 - LAG(120) OVER (ORDER BY id) compute? And what if 120's LAG is NULL?

*Hint:* Arithmetic with NULL.

**Answer:** `difference with previous row; returns NULL when LAG is NULL`

Subtraction with NULL yields NULL, so the first row's 'delta' column is NULL. Wrap in IFNULL if you need 0 instead.

### Q16. [Medium] When would you use RANK vs DENSE_RANK?

*Hint:* Think about how gaps in the ranking affect downstream logic.

**Answer:** Use **RANK** when you want 'position in the ordering', including the effect of ties — 'the 4th runner on the leaderboard' even though positions 1-3 tied. Use **DENSE_RANK** when you want to count DISTINCT values — 'the 3rd highest distinct salary' or to fetch 'top N distinct categories'. For top-N per group queries, DENSE_RANK typically returns more rows when ties occur at the threshold.

A quick test: if the question asks 'Nth highest' with 'distinct' implied, DENSE_RANK. If it asks 'top N rows including ties', RANK. If it asks 'exactly N rows, pick any tiebreak', ROW_NUMBER.

### Q17. [Hard] Why is ROWS BETWEEN almost always preferred over RANGE BETWEEN?

*Hint:* Think about how each counts.

**Answer:** ROWS counts physical rows (mechanical, predictable). RANGE counts by value — it includes all rows whose ORDER BY value equals the current row's value plus the offset. With RANGE, ties cause surprising inclusions; a 2-row moving average could include 5 rows if they all tie. ROWS gives exactly what you ask for. Use RANGE only when you explicitly want time-value-based windows like 'all orders in the last 7 days regardless of how many rows that is'.

A good rule: pick ROWS by default. Reach for RANGE only when time-window semantics (not row-count) are the actual requirement.

### Q18. [Medium] Given employees(name, dept, salary), return only the highest-paid employee per dept. Ties count (include all tied top earners).

*Hint:* DENSE_RANK with partition, then filter rnk = 1.

**Answer:** ```
SELECT name, dept, salary
FROM (
  SELECT name, dept, salary,
         DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS rnk
  FROM employees
) t
WHERE rnk = 1;
```

DENSE_RANK = 1 includes everyone tied at the top of each dept. If you wanted exactly one row per dept, use ROW_NUMBER.

### Q19. [Medium] Given sales(sale_date, amount), return each day's sale and the running total.

*Hint:* SUM OVER with an ordered frame.

**Answer:** ```
SELECT sale_date, amount,
  SUM(amount) OVER (
    ORDER BY sale_date
    ROWS UNBOUNDED PRECEDING
  ) AS running_total
FROM sales
ORDER BY sale_date;
```

UNBOUNDED PRECEDING means 'from the start of the partition to the current row'. Since there's no PARTITION BY, the partition is the whole table.

### Q20. [Medium] Given orders(customer_id, order_date, amount), return each order along with the previous order date for the same customer.

*Hint:* LAG with PARTITION BY customer_id.

**Answer:** ```
SELECT customer_id, order_date, amount,
  LAG(order_date) OVER (
    PARTITION BY customer_id ORDER BY order_date
  ) AS prev_order_date
FROM orders
ORDER BY customer_id, order_date;
```

PARTITION BY customer_id keeps each customer's sequence independent. The first order of each customer has NULL as prev_order_date.

### Q21. [Hard] Given orders(order_date, amount), return month, revenue, and month-over-month growth percentage.

*Hint:* Aggregate to monthly totals first, then apply LAG.

**Answer:** ```
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
    / LAG(revenue) OVER (ORDER BY month) * 100, 2
  ) AS mom_pct
FROM monthly
ORDER BY month;
```

Classic interview answer. First aggregate to the month grain, then apply LAG on the aggregate result. Using a CTE keeps the query readable.

### Q22. [Hard] Write a query to find the 3rd highest distinct salary from employees(salary).

*Hint:* DENSE_RANK = 3.

**Answer:** ```
SELECT DISTINCT salary
FROM (
  SELECT salary,
         DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
  FROM employees
) t
WHERE rnk = 3;
```

DENSE_RANK handles ties without skipping, so rnk=3 always means the 3rd distinct value. Using RANK could cause rnk=3 to be empty if the top 2 salaries are tied.

### Q23. [Hard] Given logins(user_id, login_date), identify consecutive login streaks per user using the 'gaps and islands' trick.

*Hint:* Subtract ROW_NUMBER * 1 day from login_date; consecutive dates share the same grouping key.

**Answer:** ```
SELECT user_id,
       MIN(login_date) AS streak_start,
       MAX(login_date) AS streak_end,
       COUNT(*)        AS streak_length
FROM (
  SELECT user_id, login_date,
         DATE_SUB(login_date,
                  INTERVAL ROW_NUMBER() OVER
                    (PARTITION BY user_id ORDER BY login_date) DAY) AS grp
  FROM logins
) t
GROUP BY user_id, grp
ORDER BY user_id, streak_start;
```

Consecutive dates produce the same grp value because both date and row_number increment by 1. Group by that and you get each streak's boundaries. This is the canonical gaps-and-islands pattern.

### Q24. [Medium] Given sales(sale_date, amount), compute a 7-day trailing moving average.

*Hint:* ROWS BETWEEN 6 PRECEDING AND CURRENT ROW.

**Answer:** ```
SELECT sale_date, amount,
  ROUND(AVG(amount) OVER (
    ORDER BY sale_date
    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
  ), 2) AS ma_7d
FROM sales
ORDER BY sale_date;
```

6 preceding + current row = 7 rows total. Early rows naturally have fewer data points.

## Mixed Questions

### Q1. [Easy] What is returned by AVG(salary) OVER () — with empty OVER parentheses?

*Hint:* No partition, no order — one single window.

**Answer:** `The global average salary, repeated on every row.`

An empty OVER() treats the entire result set as one window. Useful for adding 'overall average' as context on row-level queries.

### Q2. [Easy] For 5 rows with scores [80, 90, 70, 85, 95], what does ROW_NUMBER() OVER (ORDER BY score DESC) return for the row with score 85?

*Hint:* Count ranks down from 95.

**Answer:** `3`

Order DESC: 95, 90, 85, 80, 70 -> 85 is at position 3.

### Q3. [Medium] Predict the running total of 500, 300, 200, 400 in that order using SUM OVER (ORDER BY id ROWS UNBOUNDED PRECEDING):

*Hint:* Sum each row with all earlier rows.

**Answer:** `500, 800, 1000, 1400`

Cumulative sum in row order.

### Q4. [Medium] For customer_id [1,1,2,2,2] ordered by date, what does ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY date) return?

*Hint:* Each partition restarts.

**Answer:** `1, 2, 1, 2, 3`

Customer 1 has 2 rows. Customer 2 has 3 rows. Numbering restarts at each customer boundary.

### Q5. [Medium] What is the output of SUM(CASE WHEN status='paid' THEN amount END) OVER (PARTITION BY customer_id) in a mix of paid/failed orders?

*Hint:* CASE inside a window aggregate.

**Answer:** `The per-customer total of only 'paid' amounts, on every row for that customer.`

Conditional aggregation combined with a window gives you per-group filtered totals without collapsing rows.

### Q6. [Medium] Given employees(name, dept, salary), add a column showing the difference between each employee's salary and the department average.

*Hint:* AVG OVER with PARTITION BY dept.

**Answer:** ```
SELECT name, dept, salary,
  ROUND(AVG(salary) OVER (PARTITION BY dept), 2) AS dept_avg,
  ROUND(salary - AVG(salary) OVER (PARTITION BY dept), 2) AS diff_from_avg
FROM employees;
```

PARTITION BY dept gives each department its own window. Each row gets the dept average and can compare its own salary to it.

### Q7. [Medium] Given orders(customer_id, order_date, amount), show each order with the customer's cumulative spend up to that order.

*Hint:* PARTITION BY customer_id with running total frame.

**Answer:** ```
SELECT customer_id, order_date, amount,
  SUM(amount) OVER (
    PARTITION BY customer_id
    ORDER BY order_date
    ROWS UNBOUNDED PRECEDING
  ) AS cumulative_spend
FROM orders
ORDER BY customer_id, order_date;
```

Each customer gets their own running total, reset at each customer boundary.

### Q8. [Hard] Given exam(student, score), return student, score, and their percentile (0-100).

*Hint:* PERCENT_RANK returns 0..1; multiply by 100.

**Answer:** ```
SELECT student, score,
  ROUND(PERCENT_RANK() OVER (ORDER BY score) * 100, 2) AS percentile
FROM exam
ORDER BY score DESC;
```

PERCENT_RANK gives (rank-1)/(n-1). Multiply by 100 for a human-readable percentile.

### Q9. [Hard] Given logins(user_id, login_date), find the longest login streak per user.

*Hint:* Gaps-and-islands trick, then GROUP BY + MAX.

**Answer:** ```
WITH streaks AS (
  SELECT user_id, login_date,
    DATE_SUB(login_date,
             INTERVAL ROW_NUMBER() OVER
               (PARTITION BY user_id ORDER BY login_date) DAY) AS grp
  FROM logins
),
streak_lengths AS (
  SELECT user_id, grp, COUNT(*) AS streak_length
  FROM streaks
  GROUP BY user_id, grp
)
SELECT user_id, MAX(streak_length) AS longest_streak
FROM streak_lengths
GROUP BY user_id;
```

Two CTEs: first assigns the grouping key, second counts streak lengths, final step gets the max per user.

### Q10. [Medium] Why does SUM(amount) OVER () appear on every row with the grand total?

*Hint:* Empty OVER() = one window = whole result set.

**Answer:** OVER() with no PARTITION BY, ORDER BY, or frame treats the entire result set as a single window. The aggregate computes once over all rows, and the result is projected onto every row. This is the standard way to compute 'grand total' or 'overall average' alongside row-level data without a second scan of the table.

It's functionally equivalent to joining the query with a subquery `SELECT SUM(amount) FROM sales`, but more efficient and readable.

### Q11. [Hard] In MySQL, when would you prefer a window function over a correlated subquery?

*Hint:* Think about performance and readability.

**Answer:** Window functions are almost always better than correlated subqueries when both can express the same logic. Reasons: (1) Window functions scan the table once and compute all ranking/running values in a single pass. Correlated subqueries often rerun for each row, making them O(n^2). (2) Window functions are more readable — the intent is obvious. (3) The optimizer has better statistics and plan options for window functions. Use correlated subqueries only when window functions cannot express the logic (rare).

The main exception: for MySQL versions below 8.0, window functions are not available, so correlated subqueries or join-and-group hacks are the only option.

## Multiple Choice Questions

### Q1. [Easy] Which keyword introduces the window specification?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** The OVER clause defines the window. PARTITION BY and ORDER BY live inside OVER(). There is a WINDOW clause for named windows but it is rarely used.

### Q2. [Easy] Which function gives a unique sequence (no ties)?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** ROW_NUMBER always returns 1, 2, 3, ... with no ties. RANK and DENSE_RANK share numbers on ties.

### Q3. [Easy] For salaries [90, 90, 80], DENSE_RANK() DESC returns:

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** DENSE_RANK gives both 90s rank 1 (tied), then the next distinct value (80) gets rank 2 — no gap.

### Q4. [Easy] PARTITION BY in OVER() does what?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** A

**A is correct.** PARTITION BY is like GROUP BY for windows — each group is an independent window, and the function restarts at each boundary.

### Q5. [Medium] LAG(col, 2, 0) returns:

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** A

**A is correct.** Arguments: (column, offset, default). Offset 2 means 2 rows back. Default 0 is returned when the offset would fall before the partition start.

### Q6. [Medium] Which clauses can contain a window function?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Window functions are computed AFTER WHERE/GROUP BY/HAVING. They can only appear in SELECT and ORDER BY. To filter on a window result, wrap the query in a subquery or CTE.

### Q7. [Medium] Which frame gives a 7-row trailing moving average (current row + 6 before)?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** 6 preceding + current row = 7 rows total. Option A would give 8 rows.

### Q8. [Medium] Why does LAST_VALUE() commonly return the wrong answer without an explicit frame?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** The default frame (with ORDER BY) is RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW. Fix with ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING.

### Q9. [Medium] NTILE(4) with 9 rows distributes rows how?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** 9 / 4 = 2 remainder 1. The first 1 bucket gets an extra row. So bucket 1 has 3, buckets 2, 3, 4 each have 2.

### Q10. [Medium] To find 'top 3 per department' including ties, which is best?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** DENSE_RANK <= 3 gives the top 3 distinct salary levels per dept, including all ties. ROW_NUMBER would cut off ties arbitrarily. NTILE does bucketing, not top-N. LIMIT applies to the whole query, not per group.

### Q11. [Medium] Which version introduced window functions in MySQL?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** MySQL added window functions in 8.0. Earlier versions required user-defined variable hacks or correlated subqueries. MariaDB 10.2+ also supports them.

### Q12. [Hard] SUM(amount) OVER () without any PARTITION BY or ORDER BY returns:

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Empty OVER() treats the whole result as one window. SUM over that = grand total on every row — useful for 'percent of total' calculations.

### Q13. [Hard] Why is ROWS usually preferred over RANGE in frame clauses?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** A

**A is correct.** RANGE uses value-based frames, so ties can pull in more rows than you expect. ROWS is mechanical and predictable. Use RANGE only when you specifically want time-value windows.

### Q14. [Hard] What's the classic 'gaps and islands' trick for consecutive dates?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** A

**A is correct.** `date - row_number` is constant for consecutive rows. Grouping by that key gives you each streak. B (LAG + diff) also works but requires more steps; A is the elegant one-shot key.

### Q15. [Hard] To filter on a window function result, you must:

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Window functions are evaluated after WHERE/GROUP BY/HAVING, so you cannot filter on their results in the same level. Subquery or CTE is the fix.

### Q16. [Easy] LAG(col) OVER (ORDER BY id) for the first row returns:

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** No previous row exists, so LAG defaults to NULL unless you pass a 3rd argument as the default.

### Q17. [Medium] Which query gives each row's amount as a percentage of the grand total?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Empty OVER() gives the grand total on every row. Option A is invalid (plain SUM without GROUP BY). Option C partitions per-id, giving 100% per row.

### Q18. [Hard] What is the key difference between LAG and subquery '(SELECT col FROM t WHERE id = outer.id - 1)'?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** A

**A is correct.** LAG computes in a single window-function pass. A correlated subquery reruns for each row. On large tables, LAG can be 100x faster.

### Q19. [Medium] To include ties when finding 'top 3 employees per dept', use:

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** D

**D is correct.** RANK <= 3 gives top 3 positions including ties at any rank. DENSE_RANK <= 3 gives top 3 distinct salary levels. Both include ties; which is correct depends on wording. ROW_NUMBER arbitrarily cuts ties.

### Q20. [Hard] For a running total per customer, the correct OVER clause is:

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** PARTITION BY resets per customer. ORDER BY + ROWS UNBOUNDED PRECEDING gives the cumulative sum from the partition start.

## Coding Challenges

### Challenge 1. Rank Employees by Salary

**Difficulty:** Easy

Given employees(id, name, salary), return each employee with their rank (1 = highest). Handle ties by sharing the rank (use RANK).

**Constraints:**

- Use RANK window function.

**Sample input:**

```
7 employees with two ties.
```

**Sample output:**

```
Each row has name, salary, rnk.
```

**Solution:**

```sql
CREATE TABLE employees (id INT PRIMARY KEY, name VARCHAR(50), salary DECIMAL(10,2));
INSERT INTO employees VALUES
  (1,'Aarav Sharma',95000),(2,'Priya Nair',95000),
  (3,'Rohan Mehta',82000),(4,'Ananya Iyer',72000),
  (5,'Vikram Singh',68000),(6,'Meera Krishnan',68000),
  (7,'Diya Bhatt',55000);

SELECT name, salary,
  RANK() OVER (ORDER BY salary DESC) AS rnk
FROM employees
ORDER BY rnk, name;
```

### Challenge 2. Top 3 Per Department

**Difficulty:** Medium

Given employees(name, dept, salary), return the top 3 highest-paid employees per dept. Include ties (use DENSE_RANK).

**Constraints:**

- Use DENSE_RANK with PARTITION BY and filter in outer query.

**Sample input:**

```
Employees across multiple departments with ties.
```

**Sample output:**

```
Up to 3+ rows per dept (more if ties).
```

**Solution:**

```sql
CREATE TABLE employees (id INT PRIMARY KEY, name VARCHAR(50), dept VARCHAR(30), salary DECIMAL(10,2));
INSERT INTO employees VALUES
  (1,'Aarav Sharma','Engineering',95000),
  (2,'Priya Nair','Engineering',95000),
  (3,'Rohan Mehta','Engineering',82000),
  (4,'Ananya Iyer','Engineering',72000),
  (5,'Vikram Singh','Sales',68000),
  (6,'Meera Krishnan','Sales',68000),
  (7,'Diya Bhatt','Sales',55000),
  (8,'Ishaan Gupta','Sales',50000);

SELECT name, dept, salary
FROM (
  SELECT name, dept, salary,
         DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS rnk
  FROM employees
) t
WHERE rnk <= 3
ORDER BY dept, rnk, name;
```

### Challenge 3. Running Total of Sales

**Difficulty:** Easy

Given sales(sale_date, amount), return each day's amount and the running total up to that day.

**Constraints:**

- Use SUM OVER with UNBOUNDED PRECEDING frame.

**Sample input:**

```
7 days of sales.
```

**Sample output:**

```
Each row has sale_date, amount, running_total.
```

**Solution:**

```sql
CREATE TABLE sales (sale_date DATE PRIMARY KEY, amount DECIMAL(10,2));
INSERT INTO sales VALUES
  ('2026-04-10',1200),('2026-04-11',800),
  ('2026-04-12',2400),('2026-04-13',950),
  ('2026-04-14',1500),('2026-04-15',700),
  ('2026-04-16',1100);

SELECT sale_date, amount,
  SUM(amount) OVER (
    ORDER BY sale_date
    ROWS UNBOUNDED PRECEDING
  ) AS running_total
FROM sales;
```

### Challenge 4. Days Since Previous Order Per Customer

**Difficulty:** Medium

Given orders(id, customer_id, order_date), for each order return the previous order date for the same customer and days since the previous order.

**Constraints:**

- Use LAG with PARTITION BY customer_id.

**Sample input:**

```
Orders across 3 customers, some with multiple orders.
```

**Sample output:**

```
Each row has customer_id, order_date, prev_date, days_since.
```

**Solution:**

```sql
CREATE TABLE orders (id INT PRIMARY KEY, customer_id INT, order_date DATE, amount DECIMAL(10,2));
INSERT INTO orders VALUES
  (1,101,'2026-01-10',1200),(2,101,'2026-02-15',800),
  (3,101,'2026-03-20',1600),(4,102,'2026-02-01',2500),
  (5,102,'2026-03-28',900),(6,103,'2026-04-10',3100);

SELECT customer_id, order_date, amount,
  LAG(order_date) OVER (PARTITION BY customer_id ORDER BY order_date) AS prev_date,
  DATEDIFF(
    order_date,
    LAG(order_date) OVER (PARTITION BY customer_id ORDER BY order_date)
  ) AS days_since
FROM orders
ORDER BY customer_id, order_date;
```

### Challenge 5. Month-Over-Month Growth

**Difficulty:** Hard

Given orders(order_date, amount), return month, revenue, prev_month_revenue, and percentage growth.

**Constraints:**

- Use CTE for monthly aggregation, then LAG on the aggregate.

**Sample input:**

```
Orders across 4+ months.
```

**Sample output:**

```
One row per month with MoM% column.
```

**Solution:**

```sql
CREATE TABLE orders (id INT PRIMARY KEY, customer_id INT, order_date DATE, amount DECIMAL(10,2));
INSERT INTO orders VALUES
  (1,101,'2026-01-10',1200),(2,101,'2026-02-15',800),
  (3,101,'2026-03-20',1600),(4,102,'2026-02-01',2500),
  (5,102,'2026-03-28',900),(6,103,'2026-04-10',3100);

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
    / LAG(revenue) OVER (ORDER BY month) * 100, 2
  ) AS mom_pct
FROM monthly
ORDER BY month;
```

### Challenge 6. 7-Day Moving Average

**Difficulty:** Medium

Given sales(sale_date, amount), return each day's sale along with its 7-day trailing moving average.

**Constraints:**

- ROWS BETWEEN 6 PRECEDING AND CURRENT ROW.

**Sample input:**

```
14 daily sales.
```

**Sample output:**

```
Each row has sale_date, amount, ma_7d.
```

**Solution:**

```sql
CREATE TABLE sales (sale_date DATE PRIMARY KEY, amount DECIMAL(10,2));
INSERT INTO sales VALUES
  ('2026-04-03',1200),('2026-04-04', 800),('2026-04-05',2400),
  ('2026-04-06', 950),('2026-04-07',1500),('2026-04-08', 700),
  ('2026-04-09',1100),('2026-04-10',1900),('2026-04-11', 650),
  ('2026-04-12',2200),('2026-04-13',1000),('2026-04-14',1800),
  ('2026-04-15',1400),('2026-04-16', 900);

SELECT sale_date, amount,
  ROUND(AVG(amount) OVER (
    ORDER BY sale_date
    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
  ), 2) AS ma_7d
FROM sales
ORDER BY sale_date;
```

### Challenge 7. Nth Highest Distinct Salary

**Difficulty:** Hard

Write a query that returns the 3rd highest distinct salary from employees. If there are fewer than 3 distinct salaries, return NULL.

**Constraints:**

- Use DENSE_RANK for correctness under ties.

**Sample input:**

```
Employees with some salary ties.
```

**Sample output:**

```
Exactly 1 value (or NULL).
```

**Solution:**

```sql
-- Using the employees table from cc-2

SELECT MAX(salary) AS third_highest
FROM (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
  FROM employees
) t
WHERE rnk = 3;
-- Returns NULL automatically if rnk=3 doesn't exist (MAX of empty set).
```

### Challenge 8. Consecutive Login Streaks

**Difficulty:** Hard

Given logins(user_id, login_date), identify each streak of consecutive daily logins per user. Return user_id, streak_start, streak_end, and streak_length.

**Constraints:**

- Use gaps-and-islands: subtract ROW_NUMBER days from login_date to get a streak key.

**Sample input:**

```
Users with some consecutive and some gapped login days.
```

**Sample output:**

```
One row per streak per user.
```

**Solution:**

```sql
CREATE TABLE logins (user_id INT, login_date DATE);
INSERT INTO logins VALUES
  (1,'2026-04-10'),(1,'2026-04-11'),(1,'2026-04-12'),
  (1,'2026-04-15'),(1,'2026-04-16'),
  (2,'2026-04-10'),(2,'2026-04-12'),(2,'2026-04-13'),(2,'2026-04-14');

WITH marked AS (
  SELECT user_id, login_date,
    DATE_SUB(login_date,
             INTERVAL ROW_NUMBER() OVER
               (PARTITION BY user_id ORDER BY login_date) DAY) AS grp
  FROM logins
)
SELECT user_id,
       MIN(login_date) AS streak_start,
       MAX(login_date) AS streak_end,
       COUNT(*)        AS streak_length
FROM marked
GROUP BY user_id, grp
ORDER BY user_id, streak_start;
```

---

*Notes: https://learn.modernagecoders.com/resources/sql/window-functions/*
