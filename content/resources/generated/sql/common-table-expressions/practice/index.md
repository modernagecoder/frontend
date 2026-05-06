---
title: "Practice: Common Table Expressions (CTEs) and Recursive Queries"
description: "60 practice problems for Common Table Expressions (CTEs) and Recursive Queries in SQL"
slug: common-table-expressions-practice
canonical: https://learn.modernagecoders.com/resources/sql/common-table-expressions/practice
category: "SQL"
---
# Practice: Common Table Expressions (CTEs) and Recursive Queries

**Total questions:** 60

## Topic-Specific Questions

### Q1. [Easy] Which keyword introduces a CTE?

*Hint:* It's a single word that comes before the name.

**Answer:** `WITH`

CTEs are declared with `WITH cte_name AS (...) SELECT ...`.

### Q2. [Easy] What extra keyword is needed for a CTE that references itself?

*Hint:* Comes after WITH.

**Answer:** `RECURSIVE`

`WITH RECURSIVE cte AS (...)` is required for self-referencing CTEs in MySQL.

### Q3. [Easy] What does this query return?

```
WITH RECURSIVE n AS (
  SELECT 1 AS x UNION ALL
  SELECT x + 1 FROM n WHERE x < 5
)
SELECT * FROM n;
```

*Hint:* Trace iterations.

**Answer:** `1, 2, 3, 4, 5`

Anchor returns 1. Recursive member adds 1 each step, stopping when x >= 5. Final: 1, 2, 3, 4, 5.

### Q4. [Easy] What minimum MySQL version supports CTEs?

*Hint:* Major version release that brought modern SQL features.

**Answer:** `8.0`

MySQL 8.0 added CTEs, window functions, and other modern SQL features. MariaDB 10.2+ also supports them.

### Q5. [Medium] What happens if you omit the termination condition in a recursive CTE?

*Hint:* MySQL has a safety net.

**Answer:** MySQL aborts after `cte_max_recursion_depth` iterations (default 1000) with an error.

The default limit prevents infinite recursion. You can raise it with `SET @@cte_max_recursion_depth = 10000;` but first verify your termination logic on a smaller bound.

### Q6. [Medium] Is this legal?

```
WITH a AS (SELECT 1 AS x),
     b AS (SELECT x + 1 FROM a)
SELECT * FROM b;
```

*Hint:* Later CTEs can see earlier CTEs.

**Answer:** Yes — b references a, returns `2`.

Multiple CTEs separated by commas. Each later CTE can reference earlier ones. Not the other way round: a cannot reference b.

### Q7. [Medium] In a recursive CTE, the two parts are separated by which operator?

*Hint:* Union, but which kind?

**Answer:** `UNION ALL`

UNION ALL is required (not UNION), because the recursive member may produce rows already seen, and deduplication would break the recursive count.

### Q8. [Medium] Given an orders table, what does this query return?

```
WITH paid AS (
  SELECT customer_id, SUM(amount) AS t FROM orders
  WHERE status='paid' GROUP BY customer_id
)
SELECT COUNT(*) FROM paid WHERE t > 1000;
```

*Hint:* Count customers whose paid total exceeds 1000.

**Answer:** The count of customers whose paid total exceeds 1000.

The CTE produces one row per customer with their paid total. The outer query counts rows where that total > 1000.

### Q9. [Hard] What does the recursive member of a CTE reference?

*Hint:* Not the original table.

**Answer:** The CTE itself (the accumulated results so far).

Each iteration joins the recursive member's query against the rows produced by the previous iteration. This is how you traverse trees and graphs.

### Q10. [Hard] Why CAST(0 AS SIGNED) in the anchor of a recursive CTE?

*Hint:* Column type consistency.

**Answer:** To ensure the column type and size match the recursive member, preventing silent truncation or type errors.

The anchor defines the column types. If the recursive member produces wider or different types, you'll get errors or silent truncation. Explicit CAST is the safe default.

### Q11. [Medium] What's the main advantage of a CTE over a derived table in FROM?

*Hint:* Think about what you can do with a named thing vs an anonymous one.

**Answer:** A CTE is named and can be referenced multiple times in the same query. A derived table is anonymous and can only be referenced where it is declared. CTEs also support recursion, which derived tables do not.

For single-use subqueries, CTE and derived table are equivalent. For multi-step logic or reuse, CTE is strictly better.

### Q12. [Medium] Can you reference a CTE after the statement that declares it?

*Hint:* Scope.

**Answer:** No — a CTE exists only for the duration of the statement that declares it. For cross-statement reuse, create a VIEW (persistent) or a TEMPORARY TABLE (session-scoped).

This is the fundamental difference between CTEs and views. If you need the CTE twice, either redeclare it or promote it to a view.

### Q13. [Hard] When should you use a recursive CTE vs an application-side loop?

*Hint:* Consider network roundtrips and locking.

**Answer:** Use a recursive CTE when: (1) the logic is fundamentally hierarchical/graph-like, (2) the recursion depth is bounded, (3) avoiding multiple database roundtrips matters. Use an application loop when: (1) the depth is unbounded or user-dependent, (2) you need to run complex business logic between iterations, (3) memory pressure in the database is a concern.

Recursive CTEs are almost always faster for bounded hierarchy traversals because they avoid N roundtrips. But they are harder to debug and optimize than a simple loop.

### Q14. [Easy] Use a CTE to return customers with total paid amount > 5000 from orders(customer_id, amount, status).

*Hint:* Aggregate inside a CTE, filter in the outer query.

**Answer:** ```
WITH totals AS (
  SELECT customer_id, SUM(amount) AS total
  FROM orders
  WHERE status = 'paid'
  GROUP BY customer_id
)
SELECT customer_id, total
FROM totals
WHERE total > 5000
ORDER BY total DESC;
```

Classic pattern: aggregate in CTE, filter in outer query. Could also use HAVING, but separating aggregation and filtering via CTE is often clearer.

### Q15. [Medium] Write a recursive CTE that generates integers from 1 to 20.

*Hint:* Anchor returns 1, recursive adds 1 until 20.

**Answer:** ```
WITH RECURSIVE nums AS (
  SELECT 1 AS n
  UNION ALL
  SELECT n + 1 FROM nums WHERE n < 20
)
SELECT n FROM nums;
```

Anchor: 1. Recursion: each step adds 1 if n<20. Stops when n=20 because the next iteration's WHERE fails.

### Q16. [Medium] Write a recursive CTE that returns the 30 most recent dates ending today.

*Hint:* Start at today, decrement by 1 day.

**Answer:** ```
WITH RECURSIVE dates AS (
  SELECT CURDATE() AS d
  UNION ALL
  SELECT d - INTERVAL 1 DAY
  FROM dates
  WHERE d > CURDATE() - INTERVAL 29 DAY
)
SELECT d FROM dates ORDER BY d;
```

Anchor = today. Each recursion subtracts 1 day. WHERE stops at 30 rows total (0..29 days ago).

### Q17. [Hard] Given employees(id, name, manager_id), write a CTE that returns every employee's direct and indirect manager chain as a single concatenated string.

*Hint:* Recursive CTE starting from root, concat path.

**Answer:** ```
WITH RECURSIVE org AS (
  SELECT id, name, manager_id, CAST(name AS CHAR(1000)) AS chain
  FROM employees
  WHERE manager_id IS NULL
  UNION ALL
  SELECT e.id, e.name, e.manager_id, CONCAT(o.chain, ' > ', e.name)
  FROM employees e
  JOIN org o ON e.manager_id = o.id
)
SELECT id, name, chain FROM org ORDER BY chain;
```

The `chain` column accumulates the path from root to each employee. CAST to a large CHAR prevents truncation.

### Q18. [Hard] Rewrite this nested subquery using CTEs:

```
SELECT customer_id, total
FROM (SELECT customer_id, SUM(amount) AS total
      FROM orders GROUP BY customer_id) t
WHERE total > (SELECT AVG(total) FROM
      (SELECT customer_id, SUM(amount) AS total
       FROM orders GROUP BY customer_id) t2);
```

*Hint:* Define the aggregation once as a CTE, reference it twice.

**Answer:** ```
WITH customer_totals AS (
  SELECT customer_id, SUM(amount) AS total
  FROM orders
  GROUP BY customer_id
)
SELECT customer_id, total
FROM customer_totals
WHERE total > (SELECT AVG(total) FROM customer_totals);
```

The CTE is defined once, referenced twice. The query is half the length and the aggregation logic is not duplicated.

### Q19. [Hard] Use a CTE combined with a window function to return each customer's name, order count, and rank by count.

*Hint:* First CTE: counts per customer. Then window RANK.

**Answer:** ```
WITH customer_orders AS (
  SELECT customer_id, COUNT(*) AS order_count
  FROM orders
  GROUP BY customer_id
)
SELECT customer_id, order_count,
       RANK() OVER (ORDER BY order_count DESC) AS rnk
FROM customer_orders;
```

Aggregation comes first (CTE), then ranking. Window functions can't be nested directly inside GROUP BY, so the CTE pattern is the right structure.

### Q20. [Medium] Use a recursive CTE to compute the factorial of 10.

*Hint:* Anchor: 1! = 1. Recursive: n! = n * (n-1)!.

**Answer:** ```
WITH RECURSIVE f AS (
  SELECT 1 AS n, 1 AS fact
  UNION ALL
  SELECT n + 1, (n + 1) * fact
  FROM f
  WHERE n < 10
)
SELECT n, fact FROM f;
```

Two-column state: n and fact. Each step increments n and multiplies fact by the new n. After 10 iterations, fact = 10! = 3628800.

## Mixed Questions

### Q1. [Easy] Is this legal?

```
WITH a AS (SELECT 1) SELECT * FROM a;
```

*Hint:* Is SELECT 1 a valid SELECT?

**Answer:** Yes. Returns a single row with column value 1.

A CTE can wrap any SELECT, including a trivial `SELECT 1`.

### Q2. [Easy] What does this return?

```
WITH RECURSIVE r AS (
  SELECT 0 AS n UNION ALL
  SELECT n + 2 FROM r WHERE n < 10
)
SELECT COUNT(*) FROM r;
```

*Hint:* Count the even numbers from 0 to 10.

**Answer:** `6`

Values: 0, 2, 4, 6, 8, 10 — six rows.

### Q3. [Medium] Can a CTE be referenced outside the statement that declares it?

*Hint:* Scope.

**Answer:** No. A CTE is scoped to the single statement.

Use a VIEW or TEMPORARY TABLE for cross-statement reuse.

### Q4. [Medium] Given a CTE returning 5 rows, and you reference it 3 times in the outer query, how many times does MySQL evaluate it?

*Hint:* The optimizer decides — may be once or multiple times.

**Answer:** It depends — MySQL may inline the CTE (evaluating once per reference) or materialize it (evaluate once, reuse). MySQL 8.0 generally inlines non-recursive CTEs.

Logically, the semantics are 'compute once'. Physically, MySQL decides. For deterministic performance on expensive CTEs, benchmark with EXPLAIN and consider a TEMPORARY TABLE if repeated evaluation hurts.

### Q5. [Medium] Use a CTE to find customers who placed more than 3 orders AND have total spend > 5000 from orders(customer_id, amount).

*Hint:* CTE returns per-customer count and sum; outer query filters both.

**Answer:** ```
WITH summary AS (
  SELECT customer_id, COUNT(*) AS cnt, SUM(amount) AS total
  FROM orders
  GROUP BY customer_id
)
SELECT customer_id, cnt, total
FROM summary
WHERE cnt > 3 AND total > 5000;
```

Named CTE avoids HAVING on compound conditions and makes the intent clear.

### Q6. [Hard] Use a recursive CTE to print the hierarchy of categories from categories(id, name, parent_id).

*Hint:* Root categories have parent_id IS NULL.

**Answer:** ```
WITH RECURSIVE cat_tree AS (
  SELECT id, name, parent_id, 0 AS depth,
         CAST(name AS CHAR(500)) AS path
  FROM categories
  WHERE parent_id IS NULL
  UNION ALL
  SELECT c.id, c.name, c.parent_id, t.depth + 1,
         CONCAT(t.path, ' / ', c.name)
  FROM categories c
  JOIN cat_tree t ON c.parent_id = t.id
)
SELECT CONCAT(REPEAT('  ', depth), name) AS tree, path
FROM cat_tree
ORDER BY path;
```

Identical pattern to the employee hierarchy. Any self-referencing 'tree' table uses this structure.

### Q7. [Hard] If a recursive CTE's anchor has column `name VARCHAR(20)` but CONCAT in the recursive step produces longer strings, what happens?

*Hint:* Anchor fixes the type.

**Answer:** Strings are silently truncated to 20 characters.

The CTE's column type is inherited from the anchor. To prevent truncation, CAST the anchor value to a wider type like CHAR(1000).

### Q8. [Hard] Use CTEs to find the top 3 customers by paid revenue, including each customer's percentage of the grand total.

*Hint:* Two CTEs: per-customer totals, plus the grand total.

**Answer:** ```
WITH totals AS (
  SELECT customer_id, SUM(amount) AS t
  FROM orders WHERE status='paid' GROUP BY customer_id
),
grand AS (
  SELECT SUM(t) AS all_total FROM totals
)
SELECT t1.customer_id, t1.t,
       ROUND(100.0 * t1.t / g.all_total, 2) AS pct_of_total
FROM totals t1 CROSS JOIN grand g
ORDER BY t1.t DESC
LIMIT 3;
```

Two CTEs keep the logic clean: per-customer totals and one row for the grand total. CROSS JOIN attaches the grand total to every row.

### Q9. [Medium] Why is UNION ALL required (not UNION) in recursive CTEs?

*Hint:* Performance and correctness.

**Answer:** UNION removes duplicates, which would require checking every new row against the entire accumulated set — very expensive. UNION ALL blindly appends, which is O(1) per row. Also, correctness: deduplication could prematurely drop rows if duplicates are meaningful (e.g., counting paths).

If you truly need deduplication in a recursive CTE, apply DISTINCT at the final SELECT, not inside the recursion.

### Q10. [Hard] When would you prefer a TEMPORARY TABLE over a CTE?

*Hint:* Think about multi-statement reuse and complex logic.

**Answer:** Use a TEMPORARY TABLE when: (1) you need the result across multiple statements in the same session, (2) the CTE is expensive and you need guaranteed materialization (avoid re-evaluation), (3) you want to add indexes to the intermediate result. Use CTEs when: (1) logic is statement-local, (2) recursion is needed, (3) readability is the goal.

TEMPORARY TABLEs cost a bit more to create but give you durability across statements and the ability to index. CTEs are lighter and more readable but scoped tightly.

## Multiple Choice Questions

### Q1. [Easy] Which keyword starts a Common Table Expression?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** A

**A is correct.** `WITH cte_name AS (...)` is the syntax in MySQL and standard SQL.

### Q2. [Easy] What extra keyword is needed when a CTE references itself?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** `WITH RECURSIVE cte AS (...)`. Without RECURSIVE, MySQL treats the self-reference as an unknown table.

### Q3. [Easy] What is the scope of a CTE?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** A CTE lives for the duration of one statement. Use a VIEW or TEMPORARY TABLE for broader scope.

### Q4. [Easy] Which operator separates anchor and recursive members?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Recursive CTEs require UNION ALL, not UNION. UNION would deduplicate and is much slower/unsafe.

### Q5. [Easy] Which MySQL version introduced CTEs?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** MySQL 8.0 brought CTEs and window functions together.

### Q6. [Medium] How do you declare multiple CTEs in one query?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** `WITH a AS (...), b AS (...) SELECT ...`. One WITH, comma-separated CTEs.

### Q7. [Medium] What is the default value of cte_max_recursion_depth in MySQL 8.0?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Default is 1000 iterations. Raise with `SET @@cte_max_recursion_depth = 10000;` when truly needed.

### Q8. [Medium] Can a CTE reference a later CTE in the same WITH clause?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Later CTEs can reference earlier ones (forward only). This is like forward declarations in programming languages.

### Q9. [Medium] Which is the canonical pattern for a recursive CTE?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Anchor first, UNION ALL, then recursive member with WHERE termination.

### Q10. [Medium] What is silently truncated when column types mismatch between anchor and recursive member?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** The anchor determines string lengths. If the recursive member generates longer strings, they are truncated without warning. CAST in the anchor to a generous size.

### Q11. [Medium] Which of these is NOT a valid use case for a recursive CTE?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** D

**D is correct.** Indexing is done with CREATE INDEX, unrelated to CTEs. The other three are classic recursive-CTE patterns.

### Q12. [Hard] What's the practical difference between a CTE and a derived table (subquery in FROM)?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Derived tables can only be used once where declared. CTEs can be referenced any number of times in the same statement and enable recursion.

### Q13. [Hard] How does MySQL 8.0 typically execute a non-recursive CTE?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** MySQL 8.0 often inlines non-recursive CTEs. If you need guaranteed single evaluation of an expensive CTE, use a TEMPORARY TABLE or set the optimizer hint.

### Q14. [Hard] What does WITH RECURSIVE numbers AS (SELECT 1 UNION ALL SELECT n+1 FROM numbers WHERE n < 0) SELECT * FROM numbers; return?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** The anchor produces n=1. The recursive member's WHERE (n<0) is false on the very first iteration, so recursion ends. Result: just the anchor's row.

### Q15. [Hard] What is the correct way to traverse a 5-level deep tree if cte_max_recursion_depth is set to 3?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Raise the limit: `SET @@cte_max_recursion_depth = 100;`. Verify termination logic is correct first — raising the limit on a runaway query just delays the error.

### Q16. [Easy] Which statement types can use a CTE?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** MySQL 8.0 supports CTEs in all four DML statements.

### Q17. [Medium] To make a CTE reusable across multiple separate queries, you should:

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Views are the persistent way to reuse SELECT logic across queries. CTEs are statement-scoped. Stored procedures can also work but are overkill for simple reuse.

### Q18. [Hard] Why can a WITH block NOT be used on its own (without a following SELECT/INSERT/UPDATE/DELETE)?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** A

**A is correct.** A CTE is a named subquery. Without an outer statement to use the CTE, it has no purpose. MySQL raises a syntax error.

### Q19. [Medium] In `WITH t AS (SELECT 1 AS x) SELECT x FROM t`, what is returned?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** A

**A is correct.** The CTE has one row with column x = 1. The outer SELECT returns that value.

### Q20. [Hard] If your recursive CTE might produce cycles (graph with loops), how should you protect against infinite recursion beyond just the depth limit?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Carry a 'visited' string (or set) forward and add a WHERE clause that excludes already-visited nodes. Using UNION would deduplicate but at a much higher cost per iteration.

## Coding Challenges

### Challenge 1. Filter Customers via CTE

**Difficulty:** Easy

Given orders(customer_id, amount, status), use a CTE to return all customers whose paid total exceeds 3000. Include customer_id and total_paid, sorted descending.

**Constraints:**

- Use a non-recursive CTE.

**Sample input:**

```
8 orders across 3 customers.
```

**Sample output:**

```
Customers with paid_total > 3000.
```

**Solution:**

```sql
CREATE TABLE orders (id INT PRIMARY KEY, customer_id INT, amount DECIMAL(10,2), status VARCHAR(20));
INSERT INTO orders VALUES
  (1,101,1200,'paid'),(2,101,800,'paid'),(3,101,500,'pending'),
  (4,102,2500,'paid'),(5,102,1000,'failed'),
  (6,103,700,'pending'),(7,103,1500,'paid'),(8,103,8900,'paid');

WITH paid_totals AS (
  SELECT customer_id, SUM(amount) AS total_paid
  FROM orders WHERE status='paid'
  GROUP BY customer_id
)
SELECT customer_id, total_paid
FROM paid_totals
WHERE total_paid > 3000
ORDER BY total_paid DESC;
```

### Challenge 2. Numbers 1 to 100

**Difficulty:** Easy

Use a recursive CTE to generate the integers from 1 to 100.

**Constraints:**

- Must use WITH RECURSIVE. Include termination condition.

**Sample input:**

```
No input.
```

**Sample output:**

```
100 rows.
```

**Solution:**

```sql
WITH RECURSIVE nums AS (
  SELECT 1 AS n
  UNION ALL
  SELECT n + 1 FROM nums WHERE n < 100
)
SELECT n FROM nums;
```

### Challenge 3. Date Range for Current Month

**Difficulty:** Medium

Use a recursive CTE to generate all dates from the first day of the current month to today.

**Constraints:**

- Use DATE_FORMAT, LAST_DAY, or first-of-month tricks. Must terminate at today.

**Sample input:**

```
No input.
```

**Sample output:**

```
Row per date.
```

**Solution:**

```sql
WITH RECURSIVE dates AS (
  SELECT DATE_FORMAT(CURDATE(), '%Y-%m-01') AS d
  UNION ALL
  SELECT d + INTERVAL 1 DAY
  FROM dates
  WHERE d < CURDATE()
)
SELECT d, DAYNAME(d) AS day_name
FROM dates
ORDER BY d;
```

### Challenge 4. Employee Hierarchy

**Difficulty:** Medium

Given employees(id, name, manager_id), write a recursive CTE to return each employee with their level (CEO = 0) and a pretty indented org chart.

**Constraints:**

- CAST anchor name to CHAR(1000) to avoid truncation.

**Sample input:**

```
7 employees including CEO.
```

**Sample output:**

```
Indented tree view.
```

**Solution:**

```sql
CREATE TABLE employees (id INT PRIMARY KEY, name VARCHAR(50), manager_id INT);
INSERT INTO employees VALUES
  (1,'Aarav Sharma (CEO)',NULL),(2,'Priya Nair',1),(3,'Rohan Mehta',1),
  (4,'Ananya Iyer',2),(5,'Vikram Singh',2),(6,'Meera Krishnan',3),(7,'Diya Bhatt',4);

WITH RECURSIVE org AS (
  SELECT id, name, manager_id, 0 AS level,
         CAST(name AS CHAR(1000)) AS path
  FROM employees WHERE manager_id IS NULL
  UNION ALL
  SELECT e.id, e.name, e.manager_id, o.level + 1,
         CONCAT(o.path, ' > ', e.name)
  FROM employees e
  JOIN org o ON e.manager_id = o.id
)
SELECT CONCAT(REPEAT('  ', level), name) AS chart, level, path
FROM org
ORDER BY path;
```

### Challenge 5. Month-over-Month Growth via CTE

**Difficulty:** Medium

Given orders(order_date, amount), use a CTE plus window function to return month, revenue, prev month revenue, and MoM growth %.

**Constraints:**

- Use CTE for monthly aggregate, LAG for previous month.

**Sample input:**

```
Orders across 4+ months.
```

**Sample output:**

```
One row per month.
```

**Solution:**

```sql
CREATE TABLE orders2 (id INT PRIMARY KEY, order_date DATE, amount DECIMAL(10,2));
INSERT INTO orders2 VALUES
  (1,'2026-01-10',1200),(2,'2026-01-25',800),
  (3,'2026-02-03',2200),(4,'2026-02-28',1500),
  (5,'2026-03-12',3100),(6,'2026-03-29',950),
  (7,'2026-04-05',1800),(8,'2026-04-15',2650);

WITH monthly AS (
  SELECT DATE_FORMAT(order_date, '%Y-%m') AS month, SUM(amount) AS revenue
  FROM orders2 GROUP BY month
)
SELECT month, revenue,
  LAG(revenue) OVER (ORDER BY month) AS prev,
  ROUND(
    (revenue - LAG(revenue) OVER (ORDER BY month))
    / LAG(revenue) OVER (ORDER BY month) * 100, 2
  ) AS mom_pct
FROM monthly
ORDER BY month;
```

### Challenge 6. Fibonacci Sequence to 20 Terms

**Difficulty:** Hard

Use a recursive CTE to produce the first 20 Fibonacci numbers (0, 1, 1, 2, 3, 5, 8, ...).

**Constraints:**

- Carry (n, a, b) state and shift per iteration.

**Sample input:**

```
No input.
```

**Sample output:**

```
20 rows.
```

**Solution:**

```sql
WITH RECURSIVE fib AS (
  SELECT 1 AS n, 0 AS a, 1 AS b
  UNION ALL
  SELECT n + 1, b, a + b
  FROM fib
  WHERE n < 20
)
SELECT n, a AS fibonacci FROM fib;
```

### Challenge 7. Fill Missing Days in Sales Dashboard

**Difficulty:** Hard

Given sales(sale_date, amount) possibly missing some days, use a recursive CTE to generate all days from the minimum date to today, LEFT JOIN the sales, and return 0 for missing days.

**Constraints:**

- Recursive CTE for dates, LEFT JOIN + COALESCE.

**Sample input:**

```
Sparse sales data.
```

**Sample output:**

```
Every day present, zeros where no data.
```

**Solution:**

```sql
CREATE TABLE sales (sale_date DATE PRIMARY KEY, amount DECIMAL(10,2));
INSERT INTO sales VALUES
  ('2026-04-10',1200),('2026-04-12',2400),
  ('2026-04-14',1500),('2026-04-16',1100);

WITH RECURSIVE dates AS (
  SELECT (SELECT MIN(sale_date) FROM sales) AS d
  UNION ALL
  SELECT d + INTERVAL 1 DAY
  FROM dates
  WHERE d < (SELECT MAX(sale_date) FROM sales)
)
SELECT d.d AS sale_date,
       COALESCE(s.amount, 0) AS amount
FROM dates d
LEFT JOIN sales s ON s.sale_date = d.d
ORDER BY d.d;
```

### Challenge 8. Rewrite Nested Subquery with CTEs

**Difficulty:** Hard

Given this 3-level nested subquery, rewrite it using CTEs for readability:

```
SELECT name, total
FROM (SELECT customer_id, SUM(amount) AS total FROM orders
      WHERE status='paid' GROUP BY customer_id) t
JOIN customers c ON c.id = t.customer_id
WHERE total > (SELECT AVG(total) FROM
    (SELECT customer_id, SUM(amount) AS total FROM orders
     WHERE status='paid' GROUP BY customer_id) t2);
```

**Constraints:**

- Define paid totals once as a CTE.

**Sample input:**

```
orders and customers tables.
```

**Sample output:**

```
Customers above average paid total.
```

**Solution:**

```sql
WITH paid_totals AS (
  SELECT customer_id, SUM(amount) AS total
  FROM orders WHERE status = 'paid'
  GROUP BY customer_id
),
threshold AS (
  SELECT AVG(total) AS avg_total FROM paid_totals
)
SELECT c.name, p.total
FROM paid_totals p
JOIN customers c ON c.id = p.customer_id
CROSS JOIN threshold t
WHERE p.total > t.avg_total
ORDER BY p.total DESC;
```

---

*Notes: https://learn.modernagecoders.com/resources/sql/common-table-expressions/*
