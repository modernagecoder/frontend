---
title: "Practice: SQL Interview Masterclass - Top 30 Questions Solved"
description: "58 practice problems for SQL Interview Masterclass - Top 30 Questions Solved in SQL"
slug: sql-interview-masterclass-practice
canonical: https://learn.modernagecoders.com/resources/sql/sql-interview-masterclass/practice
category: "SQL"
---
# Practice: SQL Interview Masterclass - Top 30 Questions Solved

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] Find the 4th highest distinct salary from employees. Use DENSE_RANK.

*Hint:* DENSE_RANK handles ties.

**Answer:** ```
SELECT DISTINCT salary FROM (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
    FROM employees
) t WHERE rnk = 4;
```

The inner query ranks distinct salaries descending; the outer picks rank 4.

### Q2. [Easy] Find all products whose price is above the overall average.

*Hint:* Subquery in WHERE.

**Answer:** ```
SELECT id, name, price FROM products
WHERE price > (SELECT AVG(price) FROM products);
```

Scalar subquery computes the average once. The outer SELECT filters rows above that threshold.

### Q3. [Easy] List employees hired in March 2025.

*Hint:* BETWEEN or YEAR/MONTH extract.

**Answer:** ```
SELECT id, name, hire_date FROM employees
WHERE hire_date BETWEEN '2025-03-01' AND '2025-03-31';
```

BETWEEN is inclusive on both ends. Avoid YEAR(hire_date)=2025 AND MONTH(hire_date)=3 on large tables — it prevents index use on hire_date.

### Q4. [Easy] Find duplicate emails in the users table along with their count.

*Hint:* GROUP BY + HAVING.

**Answer:** ```
SELECT email, COUNT(*) AS cnt
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```

Textbook duplicate-finder. HAVING filters groups; WHERE filters rows.

### Q5. [Easy] Return the count of employees per department, ordered by count descending.

*Hint:* GROUP BY + ORDER BY.

**Answer:** ```
SELECT dept, COUNT(*) AS n
FROM employees
GROUP BY dept
ORDER BY n DESC;
```

The alias n can be used in ORDER BY because it is computed in SELECT before ORDER BY runs.

### Q6. [Medium] List employees whose name starts with 'A' or 'P' and whose salary is in the top 3 of their department.

*Hint:* Combine WHERE with a per-group window.

**Answer:** ```
SELECT dept, name, salary FROM (
    SELECT dept, name, salary,
           ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) AS rn
    FROM employees
    WHERE name LIKE 'A%' OR name LIKE 'P%'
) t
WHERE rn <= 3;
```

Filter first in the inner query (WHERE), then apply the per-group ranking. Order matters: WHERE prunes rows before the window function runs.

### Q7. [Medium] For each department, return the average salary and the number of employees whose salary is above that average.

*Hint:* Join a grouped summary back to the base table.

**Answer:** ```
WITH avgs AS (
    SELECT dept, AVG(salary) AS avg_sal FROM employees GROUP BY dept
)
SELECT e.dept, a.avg_sal, COUNT(*) AS above_avg_count
FROM employees e
JOIN avgs a ON a.dept = e.dept
WHERE e.salary > a.avg_sal
GROUP BY e.dept, a.avg_sal;
```

CTE computes per-dept averages. Self-join the employees back to that and count rows above the average.

### Q8. [Medium] Find the employee(s) with the longest tenure (earliest hire_date).

*Hint:* Subquery for MIN, then filter.

**Answer:** ```
SELECT id, name, hire_date
FROM employees
WHERE hire_date = (SELECT MIN(hire_date) FROM employees);
```

Scalar subquery returns the oldest hire_date; outer query returns everyone hired on that exact date (handles ties).

### Q9. [Medium] Return the top 2 highest-paid employees per department (break ties arbitrarily).

*Hint:* ROW_NUMBER with PARTITION BY dept.

**Answer:** ```
SELECT dept, name, salary FROM (
    SELECT dept, name, salary,
           ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) AS rn
    FROM employees
) t
WHERE rn <= 2
ORDER BY dept, rn;
```

ROW_NUMBER breaks ties arbitrarily — exactly 2 rows per dept. Use DENSE_RANK if ties should all be included.

### Q10. [Medium] For each order, show the total and the percentage it contributes to the grand total.

*Hint:* Window SUM without PARTITION.

**Answer:** ```
SELECT id, total,
       ROUND(100.0 * total / SUM(total) OVER (), 2) AS pct
FROM orders;
```

SUM(total) OVER () with an empty window frame = grand total on every row. Divide to get each order's share.

### Q11. [Medium] List customers who ordered products from more than 3 distinct categories.

*Hint:* JOIN + GROUP BY customer + COUNT DISTINCT category_id.

**Answer:** ```
SELECT o.customer_id
FROM orders o
JOIN order_items oi ON oi.order_id = o.id
JOIN products p ON p.id = oi.product_id
GROUP BY o.customer_id
HAVING COUNT(DISTINCT p.category_id) > 3;
```

COUNT(DISTINCT category_id) counts unique categories. HAVING applies the threshold. DISTINCT is essential — without it, a customer with many orders in the same category would pass.

### Q12. [Hard] For each user, find the longest gap (in days) between consecutive login_dates.

*Hint:* LEAD or LAG to get next/previous login, then DATEDIFF.

**Answer:** ```
WITH gaps AS (
    SELECT user_id, login_date,
           DATEDIFF(LEAD(login_date) OVER (PARTITION BY user_id ORDER BY login_date),
                    login_date) AS gap_days
    FROM logins
)
SELECT user_id, MAX(gap_days) AS longest_gap
FROM gaps
WHERE gap_days IS NOT NULL
GROUP BY user_id;
```

LEAD gives the next login. DATEDIFF computes the gap. MAX per user gives the longest gap. IS NOT NULL drops the last row per user (no next login).

### Q13. [Hard] Calculate the 14-day rolling sum of daily_sales.

*Hint:* ROWS BETWEEN 13 PRECEDING AND CURRENT ROW.

**Answer:** ```
SELECT sale_date, daily_total,
       SUM(daily_total) OVER (
           ORDER BY sale_date
           ROWS BETWEEN 13 PRECEDING AND CURRENT ROW
       ) AS rolling_14d
FROM daily_sales
ORDER BY sale_date;
```

A 14-day window is 13 preceding + current row. Use RANGE BETWEEN INTERVAL 13 DAY PRECEDING ... if dates have gaps and you want calendar windows.

### Q14. [Hard] Find 'active' customers: placed at least one order in each of the last 3 months.

*Hint:* Cross-join a calendar of the last 3 months with customers, then verify every month is covered.

**Answer:** ```
WITH last3 AS (
    SELECT DATE_FORMAT(DATE_SUB(CURDATE(), INTERVAL 0 MONTH), '%Y-%m') AS m UNION ALL
    SELECT DATE_FORMAT(DATE_SUB(CURDATE(), INTERVAL 1 MONTH), '%Y-%m') UNION ALL
    SELECT DATE_FORMAT(DATE_SUB(CURDATE(), INTERVAL 2 MONTH), '%Y-%m')
)
SELECT customer_id
FROM orders
WHERE DATE_FORMAT(order_date, '%Y-%m') IN (SELECT m FROM last3)
GROUP BY customer_id
HAVING COUNT(DISTINCT DATE_FORMAT(order_date, '%Y-%m')) = 3;
```

Filter orders to the last 3 months; count distinct months per customer; keep those with 3. Same pattern as Q9 in the notes, but parameterised.

### Q15. [Hard] Find products that were ordered in both 2024 AND 2025 but not in 2026.

*Hint:* INTERSECT-like pattern using GROUP BY + HAVING.

**Answer:** ```
SELECT product_id
FROM order_items oi JOIN orders o ON o.id = oi.order_id
GROUP BY product_id
HAVING SUM(CASE WHEN YEAR(o.order_date) = 2024 THEN 1 ELSE 0 END) > 0
   AND SUM(CASE WHEN YEAR(o.order_date) = 2025 THEN 1 ELSE 0 END) > 0
   AND SUM(CASE WHEN YEAR(o.order_date) = 2026 THEN 1 ELSE 0 END) = 0;
```

Three conditional SUMs, one per year. HAVING asserts >0 for 2024 and 2025 and =0 for 2026. A single pass over the table.

### Q16. [Hard] For a products table with (id, name, price, category_id), return the second most expensive product per category. If only one product exists in a category, return NULL for that row.

*Hint:* DENSE_RANK with PARTITION BY category_id.

**Answer:** ```
WITH ranked AS (
    SELECT category_id, name, price,
           DENSE_RANK() OVER (PARTITION BY category_id ORDER BY price DESC) AS rnk
    FROM products
)
SELECT c.id AS category_id, r.name AS second_most_expensive
FROM (SELECT DISTINCT category_id AS id FROM products) c
LEFT JOIN ranked r ON r.category_id = c.id AND r.rnk = 2;
```

LEFT JOIN ensures categories with no second product still appear, with NULL for second_most_expensive.

### Q17. [Hard] A user is a 'churned' user if their last order was more than 180 days ago. Return one row per churned user with last_order_date.

*Hint:* MAX(order_date) per user in HAVING.

**Answer:** ```
SELECT customer_id, MAX(order_date) AS last_order_date
FROM orders
GROUP BY customer_id
HAVING MAX(order_date) < DATE_SUB(CURDATE(), INTERVAL 180 DAY);
```

Directly use the aggregate in HAVING. A cleaner alternative uses a CTE, but this one-liner is perfectly readable.

## Mixed Questions

### Q1. [Easy] Count the number of employees in each department.

*Hint:* GROUP BY dept.

**Answer:** ```
SELECT dept, COUNT(*) AS n FROM employees GROUP BY dept;
```

Simplest GROUP BY. Use COUNT(DISTINCT col) if you want unique values of a column instead of rows.

### Q2. [Easy] Return employees whose salary is within 10% of the dept average.

*Hint:* Dept average via window function.

**Answer:** ```
SELECT * FROM (
    SELECT e.*, AVG(salary) OVER (PARTITION BY dept) AS dept_avg
    FROM employees e
) t
WHERE salary BETWEEN dept_avg * 0.9 AND dept_avg * 1.1;
```

Windowed AVG gives the dept average on each row without collapsing the rows. Then filter the outer SELECT.

### Q3. [Easy] Return the earliest login per user.

*Hint:* MIN(login_date) per user.

**Answer:** ```
SELECT user_id, MIN(login_date) AS first_login
FROM logins GROUP BY user_id;
```

Simple aggregate. If you also need the row's other columns, use ROW_NUMBER() = 1 instead.

### Q4. [Medium] For each post, return the number of comments and the number of likes.

*Hint:* Left join both, count each separately with DISTINCT.

**Answer:** ```
SELECT p.id,
       COUNT(DISTINCT c.id) AS comment_count,
       COUNT(DISTINCT l.user_id) AS like_count
FROM posts p
LEFT JOIN comments c ON c.post_id = p.id
LEFT JOIN likes    l ON l.post_id = p.id
GROUP BY p.id;
```

LEFT JOIN so posts with no comments/likes still appear. DISTINCT prevents double-counting due to the join's cross-product.

### Q5. [Medium] Find products priced within the top 20% of their category.

*Hint:* NTILE partitions into buckets.

**Answer:** ```
SELECT category_id, name, price FROM (
    SELECT category_id, name, price,
           NTILE(5) OVER (PARTITION BY category_id ORDER BY price DESC) AS bucket
    FROM products
) t
WHERE bucket = 1;
```

NTILE(5) splits rows into 5 equal buckets. Bucket 1 (with ORDER BY price DESC) is the top 20%.

### Q6. [Medium] For every order, return the difference (in rupees) from the average total of the previous 5 orders (by order_date).

*Hint:* AVG with a ROWS frame.

**Answer:** ```
SELECT id, order_date, total,
       AVG(total) OVER (
           ORDER BY order_date
           ROWS BETWEEN 5 PRECEDING AND 1 PRECEDING
       ) AS avg_prev_5,
       total - AVG(total) OVER (
           ORDER BY order_date
           ROWS BETWEEN 5 PRECEDING AND 1 PRECEDING
       ) AS diff
FROM orders;
```

ROWS BETWEEN 5 PRECEDING AND 1 PRECEDING = the five rows before this one, excluding the current row. The first few rows have NULL avg (fewer than 5 predecessors).

### Q7. [Medium] List all employees whose manager is in a different department.

*Hint:* Self-join + inequality.

**Answer:** ```
SELECT e.name AS emp, e.dept AS emp_dept,
       m.name AS manager, m.dept AS mgr_dept
FROM employees e
JOIN employees m ON m.id = e.manager_id
WHERE e.dept <> m.dept;
```

Self-join again. The WHERE filters to cross-department manager relationships.

### Q8. [Medium] Return the median order total.

*Hint:* ROW_NUMBER + COUNT OVER () + FLOOR/CEIL.

**Answer:** ```
SELECT AVG(total) AS median
FROM (
    SELECT total,
           ROW_NUMBER() OVER (ORDER BY total) AS rn,
           COUNT(*)     OVER ()                AS n
    FROM orders
) t
WHERE rn IN (FLOOR((n + 1) / 2), CEIL((n + 1) / 2));
```

Same trick as Q17: AVG of the middle position(s).

### Q9. [Hard] A post is 'trending' if it received more than 100 likes in the last 24 hours. Return all trending post ids.

*Hint:* Filter likes by timestamp, group by post.

**Answer:** ```
SELECT post_id
FROM likes
WHERE liked_at >= NOW() - INTERVAL 24 HOUR
GROUP BY post_id
HAVING COUNT(*) > 100;
```

WHERE prunes likes to the window. GROUP BY + HAVING applies the threshold.

### Q10. [Hard] Count, for each customer, the number of orders they placed on weekends.

*Hint:* DAYOFWEEK: 1=Sunday, 7=Saturday.

**Answer:** ```
SELECT customer_id,
       SUM(CASE WHEN DAYOFWEEK(order_date) IN (1, 7) THEN 1 ELSE 0 END) AS weekend_orders
FROM orders
GROUP BY customer_id;
```

Conditional SUM — a common pattern when counting under a condition. Works for any predicate expressible in CASE.

### Q11. [Hard] For each user, find the time (in minutes) between their first and second login.

*Hint:* Window function to number logins, self-join or pivot.

**Answer:** ```
WITH ranked AS (
    SELECT user_id, login_ts,
           ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_ts) AS rn
    FROM logins
)
SELECT r1.user_id,
       TIMESTAMPDIFF(MINUTE, r1.login_ts, r2.login_ts) AS minutes_between
FROM ranked r1
JOIN ranked r2 ON r1.user_id = r2.user_id AND r1.rn = 1 AND r2.rn = 2;
```

Number each user's logins, self-join on rn=1 and rn=2 for the same user, compute the time diff.

### Q12. [Hard] For each employee, list the names of their direct reports, comma-separated.

*Hint:* GROUP_CONCAT with self-join.

**Answer:** ```
SELECT m.name AS manager,
       GROUP_CONCAT(e.name ORDER BY e.name SEPARATOR ', ') AS reports
FROM employees e
JOIN employees m ON m.id = e.manager_id
GROUP BY m.id, m.name;
```

Self-join; for each manager, GROUP_CONCAT the names of their reports.

### Q13. [Hard] Pivot: for each customer, show the total they spent in each of the last 3 calendar months.

*Hint:* Conditional aggregation with DATE_FORMAT.

**Answer:** ```
SELECT customer_id,
       SUM(CASE WHEN DATE_FORMAT(order_date,'%Y-%m') = DATE_FORMAT(CURDATE(),'%Y-%m')                           THEN total ELSE 0 END) AS this_month,
       SUM(CASE WHEN DATE_FORMAT(order_date,'%Y-%m') = DATE_FORMAT(DATE_SUB(CURDATE(), INTERVAL 1 MONTH),'%Y-%m') THEN total ELSE 0 END) AS last_month,
       SUM(CASE WHEN DATE_FORMAT(order_date,'%Y-%m') = DATE_FORMAT(DATE_SUB(CURDATE(), INTERVAL 2 MONTH),'%Y-%m') THEN total ELSE 0 END) AS two_months_ago
FROM orders
WHERE order_date >= DATE_SUB(CURDATE(), INTERVAL 3 MONTH)
GROUP BY customer_id;
```

Three CASE-when branches, one per month. WHERE prunes to the last 3 months so the aggregation is cheap.

### Q14. [Hard] Return the percentage of orders that have at least one item costing more than Rs. 1000.

*Hint:* CASE with aggregation over a subquery/EXISTS.

**Answer:** ```
SELECT 100.0 * SUM(
    CASE WHEN EXISTS (
        SELECT 1 FROM order_items oi
        WHERE oi.order_id = o.id AND oi.unit_price > 1000
    ) THEN 1 ELSE 0 END
) / COUNT(*) AS pct
FROM orders o;
```

Correlated EXISTS inside the CASE tests each order for a qualifying item. The outer aggregate computes the percentage.

### Q15. [Hard] For each employee, show their salary, the average salary of the whole company, and the difference.

*Hint:* Window function with empty frame.

**Answer:** ```
SELECT name, salary,
       AVG(salary) OVER () AS company_avg,
       salary - AVG(salary) OVER () AS diff
FROM employees;
```

AVG(salary) OVER () is the company average on every row — no collapsing. Perfect for 'me vs average' comparisons.

### Q16. [Hard] Identify employees whose salary is higher than the average salary of every other department.

*Hint:* ALL subquery.

**Answer:** ```
SELECT name, dept, salary FROM employees e
WHERE salary > ALL (
    SELECT AVG(salary) FROM employees e2
    WHERE e2.dept <> e.dept
    GROUP BY e2.dept
);
```

> ALL means 'greater than every value in the subquery'. The correlated subquery lists the avg of every OTHER department; the outer row qualifies only if it tops all of them.

## Multiple Choice Questions

### Q1. [Easy] Which function handles ties naturally when finding the Nth highest salary?

**Answer:** B

**B is correct.** DENSE_RANK assigns the same rank to tied salaries and does not skip — ideal for 'Nth distinct'.

### Q2. [Easy] Which clause filters groups in a GROUP BY query?

**Answer:** B

**B is correct.** HAVING filters after aggregation. WHERE filters rows before aggregation.

### Q3. [Easy] What does LAG(x) OVER (ORDER BY t) return on the first row?

**Answer:** C

**C is correct.** There is no previous row for row 1, so LAG returns NULL. Use LAG(x, 1, 0) to default to 0.

### Q4. [Easy] Which is the correct way to find customers who never placed an order?

**Answer:** D

**D is correct.** NOT IN with NULL in the subquery silently returns zero rows. Prefer NOT EXISTS or LEFT JOIN ... IS NULL.

### Q5. [Easy] What does SUM(total) OVER () compute?

**Answer:** B

**B is correct.** An empty window is the whole result set — SUM over the whole set, placed on every row.

### Q6. [Medium] Which window function breaks ties arbitrarily (no two rows share a rank)?

**Answer:** C

**C is correct.** ROW_NUMBER assigns distinct sequential numbers; ties are broken by the query optimiser.

### Q7. [Medium] Which function pivots rows into columns in MySQL?

**Answer:** B

**B is correct.** MySQL has no PIVOT keyword. SUM(CASE WHEN condition THEN value ELSE 0 END) is the universal pivot.

### Q8. [Medium] How do you find the median of a column without a MEDIAN function?

**Answer:** B

**B is correct.** Number the sorted rows, pick position FLOOR((n+1)/2) and CEIL((n+1)/2), AVG the result.

### Q9. [Medium] Which is TRUE about ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW?

**Answer:** B

**B is correct.** This is the canonical cumulative / running total frame.

### Q10. [Medium] A correlated subquery is one that:

**Answer:** B

**B is correct.** Correlation = row-by-row dependency. Powerful but potentially slow — measure before using on large tables.

### Q11. [Medium] Which is TRUE about GROUP_CONCAT?

**Answer:** B

**B is correct.** MySQL's answer to string_agg. Watch `group_concat_max_len` for large groups.

### Q12. [Medium] To find employees earning more than their manager, you use:

**Answer:** B

**B is correct.** Self-join with aliases is the classic pattern.

### Q13. [Hard] Why is the 'date minus row_number' trick used for consecutive-day problems?

**Answer:** B

**B is correct.** The difference is constant for consecutive runs; GROUP BY that constant gives you each run.

### Q14. [Hard] Which is the correct way to get top 3 per group (ties broken arbitrarily)?

**Answer:** C

**C is correct.** ROW_NUMBER always yields exactly 3 rows per group. RANK / DENSE_RANK can give more than 3 if there are ties.

### Q15. [Hard] Why should you use NOT EXISTS over NOT IN when the subquery column can contain NULL?

**Answer:** B

**B is correct.** NOT IN ... NULL yields UNKNOWN for every comparison, excluding all outer rows.

### Q16. [Hard] Which is NOT a valid way to compute a 7-day moving average?

**Answer:** D

**D is correct.** The others compute a moving average; D is a nonsense construct.

### Q17. [Hard] When is a cumulative-percentage query useful?

**Answer:** B

**B is correct.** Cumulative percentages are the fastest way to spot which N items drive most of the total.

## Coding Challenges

### Challenge 1. Top Customer Per City

**Difficulty:** Easy

Given `customers(id, name, city)` and `orders(customer_id, total)`, return the highest-spending customer in each city along with their total spend.

**Constraints:**

- Use window function partitioned by city.

**Sample input:**

```
customers: (1,'Aarav','Pune'),(2,'Priya','Pune'),(3,'Rohan','Mumbai')
orders: (1,5000),(1,2000),(2,4000),(3,9000)
```

**Sample output:**

```
Pune: Aarav 7000; Mumbai: Rohan 9000
```

**Solution:**

```sql
WITH totals AS (
    SELECT c.city, c.name, SUM(o.total) AS spend
    FROM customers c JOIN orders o ON o.customer_id = c.id
    GROUP BY c.id, c.city, c.name
),
ranked AS (
    SELECT city, name, spend,
           ROW_NUMBER() OVER (PARTITION BY city ORDER BY spend DESC) AS rn
    FROM totals
)
SELECT city, name, spend FROM ranked WHERE rn = 1;
```

### Challenge 2. Department Salary Band

**Difficulty:** Easy

For each department, return min, avg, and max salary.

**Constraints:**

- Single GROUP BY.

**Sample input:**

```
employees with dept and salary.
```

**Sample output:**

```
ENG  50000 75000 110000 etc.
```

**Solution:**

```sql
SELECT dept,
       MIN(salary) AS min_sal,
       ROUND(AVG(salary), 2) AS avg_sal,
       MAX(salary) AS max_sal
FROM employees
GROUP BY dept;
```

### Challenge 3. Email Domain Popularity

**Difficulty:** Easy

Given `users(id, email)`, return the top 3 email domains by user count.

**Constraints:**

- Use SUBSTRING_INDEX on '@'.

**Sample input:**

```
emails like 'aarav@gmail.com', 'priya@yahoo.com', 'rohan@gmail.com'...
```

**Sample output:**

```
gmail.com 2, yahoo.com 1
```

**Solution:**

```sql
SELECT SUBSTRING_INDEX(email, '@', -1) AS domain, COUNT(*) AS n
FROM users
GROUP BY domain
ORDER BY n DESC
LIMIT 3;
```

### Challenge 4. Active Users Last 30 Days

**Difficulty:** Medium

Return distinct users who logged in in the last 30 days, along with their login count.

**Constraints:**

- Use DATE_SUB.

**Sample input:**

```
logins table with user_id and login_date.
```

**Sample output:**

```
user_id, login_count
```

**Solution:**

```sql
SELECT user_id, COUNT(*) AS login_count
FROM logins
WHERE login_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
GROUP BY user_id
ORDER BY login_count DESC;
```

### Challenge 5. Manager With Most Direct Reports

**Difficulty:** Medium

Find the manager who directly manages the largest number of employees.

**Constraints:**

- Self-join; GROUP BY manager; ORDER BY COUNT DESC; LIMIT 1.

**Sample input:**

```
employees(id, name, manager_id).
```

**Sample output:**

```
Aarav manages 3 reports.
```

**Solution:**

```sql
SELECT m.id AS manager_id, m.name AS manager_name, COUNT(*) AS n_reports
FROM employees e
JOIN employees m ON m.id = e.manager_id
GROUP BY m.id, m.name
ORDER BY n_reports DESC
LIMIT 1;
```

### Challenge 6. New vs Returning Customers Per Month

**Difficulty:** Medium

For each month in 2025, count how many orders came from first-time customers vs returning customers. A customer is 'new' in the month of their very first order.

**Constraints:**

- Compute each customer's first-order month, then classify.

**Sample input:**

```
orders(customer_id, order_date).
```

**Sample output:**

```
month | new_orders | returning_orders
```

**Solution:**

```sql
WITH first_orders AS (
    SELECT customer_id, DATE_FORMAT(MIN(order_date), '%Y-%m') AS first_month
    FROM orders
    GROUP BY customer_id
)
SELECT DATE_FORMAT(o.order_date, '%Y-%m') AS month,
       SUM(CASE WHEN DATE_FORMAT(o.order_date,'%Y-%m') = f.first_month THEN 1 ELSE 0 END) AS new_orders,
       SUM(CASE WHEN DATE_FORMAT(o.order_date,'%Y-%m') > f.first_month THEN 1 ELSE 0 END) AS returning_orders
FROM orders o
JOIN first_orders f ON f.customer_id = o.customer_id
WHERE YEAR(o.order_date) = 2025
GROUP BY DATE_FORMAT(o.order_date, '%Y-%m')
ORDER BY month;
```

### Challenge 7. Products Whose Revenue Grew Month-over-Month

**Difficulty:** Hard

For each product, return the months where its revenue grew vs the previous month (strictly). Output product, month, growth_pct.

**Constraints:**

- Use LAG with PARTITION BY product.

**Sample input:**

```
order_items + orders joined on order_id, grouped by product and month.
```

**Sample output:**

```
product | month | growth_pct
```

**Solution:**

```sql
WITH monthly AS (
    SELECT oi.product_id,
           DATE_FORMAT(o.order_date, '%Y-%m') AS month,
           SUM(oi.qty * oi.unit_price) AS rev
    FROM order_items oi JOIN orders o ON o.id = oi.order_id
    GROUP BY oi.product_id, DATE_FORMAT(o.order_date, '%Y-%m')
),
lagged AS (
    SELECT product_id, month, rev,
           LAG(rev) OVER (PARTITION BY product_id ORDER BY month) AS prev_rev
    FROM monthly
)
SELECT product_id, month,
       ROUND((rev - prev_rev) * 100.0 / prev_rev, 2) AS growth_pct
FROM lagged
WHERE prev_rev IS NOT NULL AND rev > prev_rev
ORDER BY product_id, month;
```

### Challenge 8. Session Detection: 30-Minute Gap Rule

**Difficulty:** Hard

Given `events(user_id, event_ts)`, assign each event a session number such that a gap of more than 30 minutes between consecutive events starts a new session.

**Constraints:**

- Use LAG + cumulative SUM of a 'new-session' flag.

**Sample input:**

```
events for a user at 10:00, 10:05, 11:00, 11:10, 12:00
```

**Sample output:**

```
10:00 -> session 1; 10:05 -> session 1; 11:00 -> session 2; 11:10 -> session 2; 12:00 -> session 3.
```

**Solution:**

```sql
WITH flagged AS (
    SELECT user_id, event_ts,
           CASE WHEN TIMESTAMPDIFF(MINUTE,
                        LAG(event_ts) OVER (PARTITION BY user_id ORDER BY event_ts),
                        event_ts) > 30
                THEN 1 ELSE 0 END AS new_session
    FROM events
)
SELECT user_id, event_ts,
       1 + SUM(new_session) OVER (
           PARTITION BY user_id ORDER BY event_ts
           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
       ) AS session_id
FROM flagged
ORDER BY user_id, event_ts;
```

---

*Notes: https://learn.modernagecoders.com/resources/sql/sql-interview-masterclass/*
