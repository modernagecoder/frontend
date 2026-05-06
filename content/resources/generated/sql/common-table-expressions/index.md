---
title: "SQL CTEs and Recursive Queries - WITH Clause, Hierarchies, Sequences | Modern Age Coders"
description: "Master SQL Common Table Expressions: non-recursive and recursive CTEs, WITH clause syntax, multi-step logic, referencing CTEs multiple times, employee hierarchies, date series, and number generation. 60+ interview-grade MySQL queries."
slug: common-table-expressions
canonical: https://learn.modernagecoders.com/resources/sql/common-table-expressions
category: "SQL"
keywords: ["sql cte", "sql with clause", "recursive cte", "sql hierarchy query", "employee tree sql", "date range generator sql", "sql readable queries", "multi-step sql", "cte vs subquery", "mysql 8 cte"]
---
# Common Table Expressions (CTEs) and Recursive Queries

**Difficulty:** Advanced  
**Reading time:** 45 min  
**Chapter:** 19  
**Practice questions:** 60

## What Is a Common Table Expression?

A Common Table Expression (CTE) is a temporary, named result set you define at the start of a query using the `WITH` keyword. You can then reference it by name in the main query just like a table. CTEs are the cleaner, modern replacement for derived tables (subqueries in FROM) and for repeated subquery logic.

```
WITH high_value_orders AS (
  SELECT customer_id, SUM(amount) AS total
  FROM orders
  WHERE status = 'paid'
  GROUP BY customer_id
  HAVING SUM(amount) > 10000
)
SELECT c.name, h.total
FROM customers c
JOIN high_value_orders h ON c.id = h.customer_id
ORDER BY h.total DESC;
```

You get three concrete benefits:

- **Readability** — name each intermediate step. Complex reports read top-to-bottom like paragraphs instead of nested subquery soup.
- **Reusability** — reference the same CTE multiple times in the same query. A derived table in FROM can only be used once without duplicating it.
- **Recursion** — CTEs are the only way to express recursive logic in SQL. Employee hierarchies, bill-of-materials trees, number sequences, graph traversals — all need `WITH RECURSIVE`.

**MySQL requirement:** CTEs are supported in MySQL 8.0+ and MariaDB 10.2+. Older versions need derived tables and correlated subqueries instead.

## Why CTEs Matter

### 1. Subqueries Don't Scale With Complexity

For a 3-step calculation — aggregate, filter, rank — the subquery version has three levels of nesting, each indented further right. By step 4 you need a second monitor. CTEs flatten that: each step is one block at the top of the query.

### 2. You Can Name Your Thinking

Variables have names for a reason — so readers (including you in 6 months) know what they mean. CTEs give intermediate steps in a query proper names: `monthly_totals`, `top_customers`, `ranked_employees`. This alone pays for itself.

### 3. Referencing the Same Logic Twice

Derived tables in FROM only exist for the length of their single reference. If you need the same computation in the JOIN and in the WHERE, you write it twice. A CTE is defined once and referenced any number of times. The optimizer may still compute it twice under the hood, but your code is DRY.

### 4. Recursion — The Superpower

Without `WITH RECURSIVE` there is no clean way to walk a tree in SQL. Employee reports-to graphs, comment threads, category trees, dependency chains — all map to recursive CTEs. Writing these by hand with UNION ALL and manual depth tracking is error-prone and unbounded.

### 5. Interview Favorites

"Rewrite this nested query using CTEs." "Print the manager chain for employee X." "Generate all dates in the last 30 days." "Find the longest path in a DAG." All are recursive-CTE questions and they show up in data-engineering and full-stack interviews.

## Detailed Explanation

### 1. Non-Recursive CTE Syntax

```
WITH cte_name AS (
  -- any SELECT statement
  SELECT col1, col2
  FROM some_table
  WHERE condition
)
SELECT *
FROM cte_name
WHERE col1 > 100;
```

Rules:

- The CTE block must come immediately before the main query. It cannot stand alone; it must be followed by a statement that uses it (SELECT, INSERT, UPDATE, DELETE).
- Inside the parentheses you write a full SELECT.
- The CTE exists only for the duration of the outer statement.

### 2. Multiple CTEs in One Query

```
WITH
  monthly_totals AS (
    SELECT DATE_FORMAT(order_date, '%Y-%m') AS month, SUM(amount) AS total
    FROM orders
    GROUP BY month
  ),
  growth AS (
    SELECT month, total,
           LAG(total) OVER (ORDER BY month) AS prev_total
    FROM monthly_totals
  )
SELECT month, total, prev_total,
       ROUND((total - prev_total) / prev_total * 100, 2) AS growth_pct
FROM growth
ORDER BY month;
```

Separate multiple CTEs with commas. Later CTEs can reference earlier ones (as shown — `growth` reads from `monthly_totals`), but not the other way around.

### 3. CTE vs Derived Table vs View

FeatureCTEDerived TableViewScopeOne queryOne query levelPersistentReusable in same queryYes, any number of timesOnly where declaredYesRecursiveYesNoNoNeeds schema privilegeNoNoYes (CREATE VIEW)NamedYesAlias onlyYes

Use a CTE when logic is one-query-local and complex. Use a view when the same logic is shared across many queries (Chapter 21).

### 4. Referencing a CTE Multiple Times

```
WITH customer_stats AS (
  SELECT customer_id, SUM(amount) AS total, COUNT(*) AS orders
  FROM orders GROUP BY customer_id
)
SELECT
  (SELECT AVG(total) FROM customer_stats)          AS global_avg,
  (SELECT MAX(total) FROM customer_stats)          AS global_max,
  (SELECT COUNT(*)   FROM customer_stats WHERE orders > 5) AS active_customers;
```

Without a CTE this would be three separate subqueries, each re-running the aggregation. With a CTE the logic is named once.

### 5. Recursive CTEs — The Structure

```
WITH RECURSIVE cte_name AS (
  -- Anchor member: the starting rows
  SELECT ...
  FROM ...
  WHERE ...

  UNION ALL

  -- Recursive member: references cte_name itself
  SELECT ...
  FROM some_table
  JOIN cte_name ON ...
  WHERE termination_condition   -- CRITICAL
)
SELECT * FROM cte_name;
```

A recursive CTE has two parts separated by `UNION ALL`:

1. **Anchor** — the seed. Runs once. Returns the starting row(s).
2. **Recursive member** — runs repeatedly. Each iteration joins against the results of the previous iteration. Must have a termination condition that eventually returns zero rows, or MySQL aborts with a recursion limit error.

MySQL's default recursion limit is 1000. Raise it with `SET @@cte_max_recursion_depth = 10000;` if you truly need more.

### 6. Recursive CTE: Generate a Number Sequence

```
WITH RECURSIVE numbers AS (
  SELECT 1 AS n
  UNION ALL
  SELECT n + 1 FROM numbers WHERE n < 10
)
SELECT * FROM numbers;
-- 1,2,3,...,10
```

The anchor returns the row `n=1`. The recursive member adds 1 each iteration. The termination condition `n < 10` stops generation at 10. Without the condition, MySQL would blow through the recursion limit.

### 7. Recursive CTE: Generate a Date Range

```
WITH RECURSIVE date_series AS (
  SELECT DATE '2026-04-01' AS d
  UNION ALL
  SELECT d + INTERVAL 1 DAY
  FROM date_series
  WHERE d < '2026-04-30'
)
SELECT d FROM date_series;
-- 30 rows: 2026-04-01 through 2026-04-30
```

Extremely useful for filling in missing days in dashboards — LEFT JOIN the date series against your actual data to show zero for days with no activity.

### 8. Recursive CTE: Employee Hierarchy

```
CREATE TABLE employees (
  id        INT PRIMARY KEY,
  name      VARCHAR(50),
  manager_id INT                 -- NULL for CEO
);

INSERT INTO employees VALUES
  (1, 'Aarav Sharma (CEO)',   NULL),
  (2, 'Priya Nair',           1),
  (3, 'Rohan Mehta',          1),
  (4, 'Ananya Iyer',          2),
  (5, 'Vikram Singh',         2),
  (6, 'Meera Krishnan',       3),
  (7, 'Diya Bhatt',           4);

WITH RECURSIVE org AS (
  -- Anchor: top of the tree (CEO)
  SELECT id, name, manager_id, 0 AS level,
         CAST(name AS CHAR(500)) AS path
  FROM employees
  WHERE manager_id IS NULL

  UNION ALL

  -- Recursive: each employee reporting to someone already in 'org'
  SELECT e.id, e.name, e.manager_id, o.level + 1,
         CONCAT(o.path, ' -> ', e.name)
  FROM employees e
  JOIN org o ON e.manager_id = o.id
)
SELECT id, REPEAT('  ', level), name AS indented_name, level, path
FROM org
ORDER BY path;
```

The anchor selects the root (CEO, where manager_id IS NULL). The recursive member joins employees whose manager is in the current `org` result, and increments the level. Each recursion is one level deeper. Termination happens automatically when no employee reports to anyone in `org`.

### 9. Recursive CTE: Fibonacci

```
WITH RECURSIVE fib AS (
  SELECT 1 AS n, 0 AS a, 1 AS b
  UNION ALL
  SELECT n + 1, b, a + b
  FROM fib
  WHERE n < 15
)
SELECT n, a AS fib_number FROM fib;
```

Each row carries enough state (a, b) to compute the next. The recursive member shifts (a, b) -> (b, a+b) each iteration. n acts as a termination counter.

### 10. The Fork Bomb Warning

The #1 recursive-CTE mistake: no termination condition.

```
-- DO NOT RUN — infinite loop
WITH RECURSIVE bomb AS (
  SELECT 1 AS n
  UNION ALL
  SELECT n + 1 FROM bomb   -- no WHERE clause
)
SELECT * FROM bomb;
```

This tries to generate infinite rows. MySQL saves you with the `cte_max_recursion_depth` limit (default 1000) and aborts. But always include an explicit termination clause — and test with a small bound first.

### 11. CTEs and Window Functions Together

The most powerful combination in modern SQL. Use CTEs to stage intermediate aggregations, then apply window functions in the next layer.

```
WITH monthly AS (
  SELECT DATE_FORMAT(order_date, '%Y-%m') AS month,
         SUM(amount) AS revenue
  FROM orders
  GROUP BY month
),
with_growth AS (
  SELECT month, revenue,
         LAG(revenue) OVER (ORDER BY month) AS prev,
         SUM(revenue) OVER (ORDER BY month ROWS UNBOUNDED PRECEDING) AS running
  FROM monthly
)
SELECT month, revenue, prev,
       ROUND((revenue - prev) / prev * 100, 2) AS mom_pct,
       running AS ytd_revenue
FROM with_growth
ORDER BY month;
```

### 12. CTE vs Subquery — When to Choose Which

- Use a subquery for a tiny one-off filter: `WHERE id IN (SELECT ...)`
- Use a CTE when the logic has 2+ steps or is used twice.
- Use a CTE always when recursion is needed.
- Use a view when the same logic is shared across many distinct queries.

## Code Examples

### Simple Non-Recursive CTE

```sql
CREATE TABLE orders (
  id INT PRIMARY KEY,
  customer_id INT,
  amount DECIMAL(10,2),
  status VARCHAR(20)
);

INSERT INTO orders VALUES
  (1,101,1200,'paid'),(2,101, 800,'paid'),(3,101, 500,'pending'),
  (4,102,2500,'paid'),(5,102,1000,'failed'),
  (6,103, 700,'pending'),(7,103,1500,'paid'),(8,103,8900,'paid');

WITH paid_totals AS (
  SELECT customer_id, SUM(amount) AS total_paid
  FROM orders
  WHERE status = 'paid'
  GROUP BY customer_id
)
SELECT customer_id, total_paid
FROM paid_totals
WHERE total_paid > 2000
ORDER BY total_paid DESC;
```

The CTE `paid_totals` names the intermediate aggregate. The main query then filters and sorts it. Without a CTE this would be a derived table in FROM — workable but less readable. Note how you can apply additional WHERE on the CTE just like on a table.

**Output:**

```
+-------------+------------+
| customer_id | total_paid |
+-------------+------------+
|         103 |   10400.00 |
|         102 |    2500.00 |
|         101 |    2000.00 |
+-------------+------------+
```

### Multiple CTEs Chained Together

```sql
-- Uses the orders table from above

WITH
  customer_totals AS (
    SELECT customer_id,
           SUM(CASE WHEN status='paid' THEN amount ELSE 0 END) AS paid_total,
           COUNT(*) AS orders_count
    FROM orders
    GROUP BY customer_id
  ),
  ranked AS (
    SELECT customer_id, paid_total, orders_count,
           RANK() OVER (ORDER BY paid_total DESC) AS rnk
    FROM customer_totals
  )
SELECT customer_id, paid_total, orders_count, rnk
FROM ranked
WHERE rnk <= 3
ORDER BY rnk;
```

Three logical steps: aggregate, rank, filter. Each step gets its own CTE. This is far more readable than one query with three levels of nested subqueries. Later CTEs reference earlier ones.

**Output:**

```
+-------------+------------+--------------+-----+
| customer_id | paid_total | orders_count | rnk |
+-------------+------------+--------------+-----+
|         103 |   10400.00 |            3 |   1 |
|         102 |    2500.00 |            2 |   2 |
|         101 |    2000.00 |            3 |   3 |
+-------------+------------+--------------+-----+
```

### Recursive CTE - Generate Numbers 1 to 10

```sql
WITH RECURSIVE numbers AS (
  -- Anchor: starting value
  SELECT 1 AS n
  UNION ALL
  -- Recursive: increment until termination
  SELECT n + 1
  FROM numbers
  WHERE n < 10
)
SELECT n FROM numbers;
```

Anchor returns n=1. Recursive member adds 1 each iteration, continuing while n<10. When n=10, the WHERE clause becomes false on the next iteration (would produce n=11 from n=10, but n<10 is false), stopping recursion. Results: 1 through 10.

**Output:**

```
+----+
| n  |
+----+
|  1 |
|  2 |
|  3 |
|  4 |
|  5 |
|  6 |
|  7 |
|  8 |
|  9 |
| 10 |
+----+
```

### Recursive CTE - Date Range for the Last 30 Days

```sql
WITH RECURSIVE date_series AS (
  SELECT CURDATE() - INTERVAL 29 DAY AS d
  UNION ALL
  SELECT d + INTERVAL 1 DAY
  FROM date_series
  WHERE d < CURDATE()
)
SELECT d,
       DAYNAME(d)                  AS day_name,
       CASE WHEN DAYOFWEEK(d) IN (1, 7) THEN 'Weekend' ELSE 'Weekday' END AS type
FROM date_series
ORDER BY d;
```

Generates 30 consecutive dates from 29 days ago through today. Use this as the left side of a LEFT JOIN to ensure every date appears in a dashboard, even those with zero events. Filling zero-rows is one of the most valuable data-engineering patterns.

**Output:**

```
30 rows: today back to 29 days ago, each with day name and weekend/weekday label.
```

### Recursive CTE - Employee Hierarchy Tree

```sql
CREATE TABLE employees (
  id         INT PRIMARY KEY,
  name       VARCHAR(50),
  manager_id INT
);

INSERT INTO employees VALUES
  (1, 'Aarav Sharma (CEO)',   NULL),
  (2, 'Priya Nair',           1),
  (3, 'Rohan Mehta',          1),
  (4, 'Ananya Iyer',          2),
  (5, 'Vikram Singh',         2),
  (6, 'Meera Krishnan',       3),
  (7, 'Diya Bhatt',           4);

WITH RECURSIVE org AS (
  SELECT id, name, manager_id, 0 AS level,
         CAST(name AS CHAR(500)) AS path
  FROM employees
  WHERE manager_id IS NULL
  UNION ALL
  SELECT e.id, e.name, e.manager_id, o.level + 1,
         CONCAT(o.path, ' > ', e.name)
  FROM employees e
  JOIN org o ON e.manager_id = o.id
)
SELECT CONCAT(REPEAT('  ', level), name) AS org_chart,
       level,
       path
FROM org
ORDER BY path;
```

Anchor selects the CEO (manager_id IS NULL). Recursive member joins each employee whose manager is already in the CTE result. The `level` increments each hop. The `path` string concatenates names for visualization. ORDER BY path produces a depth-first tree view.

**Output:**

```
+-----------------------------------+-------+
| org_chart                         | level |
+-----------------------------------+-------+
| Aarav Sharma (CEO)                |     0 |
|   Priya Nair                      |     1 |
|     Ananya Iyer                   |     2 |
|       Diya Bhatt                  |     3 |
|     Vikram Singh                  |     2 |
|   Rohan Mehta                     |     1 |
|     Meera Krishnan                |     2 |
+-----------------------------------+-------+
```

### Recursive CTE - Fibonacci Sequence

```sql
WITH RECURSIVE fib AS (
  SELECT 1 AS n, 0 AS a, 1 AS b
  UNION ALL
  SELECT n + 1, b, a + b
  FROM fib
  WHERE n < 12
)
SELECT n, a AS fibonacci
FROM fib;
```

Each row carries two state columns `a` and `b`. The recursive step shifts (a, b) to (b, a+b), producing the Fibonacci sequence in column `a`. Terminates at n=12. A classic interview problem solved in 5 lines.

**Output:**

```
+----+-----------+
| n  | fibonacci |
+----+-----------+
|  1 |         0 |
|  2 |         1 |
|  3 |         1 |
|  4 |         2 |
|  5 |         3 |
|  6 |         5 |
|  7 |         8 |
|  8 |        13 |
|  9 |        21 |
| 10 |        34 |
| 11 |        55 |
| 12 |        89 |
+----+-----------+
```

### CTE + Window Function - Monthly Report

```sql
CREATE TABLE orders2 (id INT, order_date DATE, amount DECIMAL(10,2));
INSERT INTO orders2 VALUES
  (1,'2026-01-10',1200),(2,'2026-01-25', 800),
  (3,'2026-02-03',2200),(4,'2026-02-28',1500),
  (5,'2026-03-12',3100),(6,'2026-03-29', 950),
  (7,'2026-04-05',1800),(8,'2026-04-15',2650);

WITH monthly AS (
  SELECT DATE_FORMAT(order_date, '%Y-%m') AS month,
         SUM(amount)                      AS revenue
  FROM orders2
  GROUP BY month
)
SELECT month, revenue,
  LAG(revenue) OVER (ORDER BY month) AS prev_month,
  SUM(revenue) OVER (ORDER BY month ROWS UNBOUNDED PRECEDING) AS ytd,
  ROUND(
    (revenue - LAG(revenue) OVER (ORDER BY month))
    / LAG(revenue) OVER (ORDER BY month) * 100, 2
  ) AS mom_pct
FROM monthly
ORDER BY month;
```

Two-step query: (1) aggregate to monthly grain in a CTE, (2) apply multiple window functions. Without a CTE you'd need a derived table and repeat the aggregation three times (once per window function).

**Output:**

```
+---------+---------+------------+---------+---------+
| month   | revenue | prev_month | ytd     | mom_pct |
+---------+---------+------------+---------+---------+
| 2026-01 | 2000.00 | NULL       | 2000.00 |    NULL |
| 2026-02 | 3700.00 | 2000.00    | 5700.00 |   85.00 |
| 2026-03 | 4050.00 | 3700.00    | 9750.00 |    9.46 |
| 2026-04 | 4450.00 | 4050.00    |14200.00 |    9.88 |
+---------+---------+------------+---------+---------+
```

### CTE Referenced Multiple Times

```sql
-- Using orders2 from above

WITH monthly AS (
  SELECT DATE_FORMAT(order_date, '%Y-%m') AS month,
         SUM(amount)                      AS revenue
  FROM orders2
  GROUP BY month
)
SELECT
  (SELECT MAX(revenue)  FROM monthly) AS best_month_revenue,
  (SELECT MIN(revenue)  FROM monthly) AS worst_month_revenue,
  (SELECT AVG(revenue)  FROM monthly) AS avg_month_revenue,
  (SELECT COUNT(*)       FROM monthly) AS months_of_data;
```

The same CTE is referenced 4 times in scalar subqueries. Without the CTE you'd repeat the monthly aggregation 4 times. The CTE is defined once and each scalar subquery selects a different summary statistic.

**Output:**

```
+--------------------+---------------------+-------------------+----------------+
| best_month_revenue | worst_month_revenue | avg_month_revenue | months_of_data |
+--------------------+---------------------+-------------------+----------------+
|            4450.00 |             2000.00 |        3550.00000 |              4 |
+--------------------+---------------------+-------------------+----------------+
```

## Common Mistakes

### Forgetting the RECURSIVE Keyword

**Wrong:**

```
WITH numbers AS (
  SELECT 1 AS n
  UNION ALL
  SELECT n + 1 FROM numbers WHERE n < 10
)
SELECT * FROM numbers;
```

ERROR 1146: Table 'numbers' doesn't exist -- because MySQL tries to resolve 'numbers' as a real table in the recursive member.

**Correct:**

```
WITH RECURSIVE numbers AS (
  SELECT 1 AS n
  UNION ALL
  SELECT n + 1 FROM numbers WHERE n < 10
)
SELECT * FROM numbers;
```

When a CTE references itself, MySQL requires the `RECURSIVE` keyword after `WITH`. Without it, the recursive reference is an undeclared table. PostgreSQL has the same requirement; SQL Server does not.

### Missing Termination Condition (Fork Bomb)

**Wrong:**

```
WITH RECURSIVE bomb AS (
  SELECT 1 AS n
  UNION ALL
  SELECT n + 1 FROM bomb   -- no WHERE clause!
)
SELECT * FROM bomb;
```

ERROR 3636: Recursive query aborted after 1001 iterations (cte_max_recursion_depth).

**Correct:**

```
WITH RECURSIVE safe AS (
  SELECT 1 AS n
  UNION ALL
  SELECT n + 1 FROM safe WHERE n < 100
)
SELECT * FROM safe;
```

Always include an explicit termination condition. MySQL saves you with the recursion limit (default 1000) — but the query errors out instead of producing a result. For large ranges, you may need to raise `cte_max_recursion_depth`, but first verify your termination is correct with a small limit.

### Mismatched Column Types Between Anchor and Recursive Member

**Wrong:**

```
WITH RECURSIVE org AS (
  SELECT id, name, 0 AS level
  FROM employees WHERE manager_id IS NULL
  UNION ALL
  SELECT e.id, e.name, o.level + 1.0    -- numeric mismatch
  FROM employees e JOIN org o ON e.manager_id = o.id
)
SELECT * FROM org;
```

In some MySQL versions: ERROR 3821 because anchor has INT level but recursive has DECIMAL. Even where it 'works', the CTE column type gets promoted unexpectedly.

**Correct:**

```
WITH RECURSIVE org AS (
  SELECT id, name, CAST(0 AS SIGNED) AS level
  FROM employees WHERE manager_id IS NULL
  UNION ALL
  SELECT e.id, e.name, o.level + 1
  FROM employees e JOIN org o ON e.manager_id = o.id
)
SELECT * FROM org;
```

Column types and lengths must match between anchor and recursive member. For string columns, the anchor determines the max length — if the recursive concatenation grows the string beyond that, MySQL silently truncates. Always CAST explicitly in the anchor to set the column size.

### String Truncation in Recursive CTEs

**Wrong:**

```
WITH RECURSIVE org AS (
  SELECT id, name, name AS path    -- path sized by the anchor's name
  FROM employees WHERE manager_id IS NULL
  UNION ALL
  SELECT e.id, e.name, CONCAT(o.path, ' > ', e.name)
  FROM employees e JOIN org o ON e.manager_id = o.id
)
SELECT * FROM org;
```

No error, but paths get silently truncated to the length of the anchor's name column. Deep hierarchies lose levels.

**Correct:**

```
WITH RECURSIVE org AS (
  SELECT id, name, CAST(name AS CHAR(1000)) AS path
  FROM employees WHERE manager_id IS NULL
  UNION ALL
  SELECT e.id, e.name, CONCAT(o.path, ' > ', e.name)
  FROM employees e JOIN org o ON e.manager_id = o.id
)
SELECT * FROM org;
```

Always CAST the anchor's string columns to a comfortably large CHAR/VARCHAR. The recursive member inherits the column definition from the anchor — if the anchor declares CHAR(20), all subsequent values are truncated to 20 characters even after CONCAT.

### Using a CTE Outside Its Scope

**Wrong:**

```
WITH active_users AS (
  SELECT id FROM users WHERE last_login > CURDATE() - INTERVAL 30 DAY
)
SELECT * FROM active_users;

-- Later...
SELECT COUNT(*) FROM active_users;   -- ERROR
```

ERROR 1146: Table 'active_users' doesn't exist.

**Correct:**

```
-- Option 1: repeat the CTE in each statement
WITH active_users AS (
  SELECT id FROM users WHERE last_login > CURDATE() - INTERVAL 30 DAY
)
SELECT COUNT(*) FROM active_users;

-- Option 2: turn it into a VIEW (Chapter 21) for persistence
CREATE VIEW active_users AS
SELECT id FROM users WHERE last_login > CURDATE() - INTERVAL 30 DAY;
```

A CTE lives only for the duration of the statement that declares it. It is NOT a temporary table or view. If you want to reuse the logic across multiple statements, create a VIEW (covered in Chapter 21) or a TEMPORARY TABLE.

## Summary

- A CTE is a temporary, named result set defined with WITH cte_name AS (...) that you reference like a table in the main query. Available only for the statement that declares it.
- CTEs improve readability by naming each step, reusability by allowing multiple references, and enable recursion (the only way to express recursive logic in SQL).
- Declare multiple CTEs separated by commas: WITH a AS (...), b AS (...). Later CTEs can reference earlier ones but not the other way around.
- Recursive CTEs use WITH RECURSIVE and have two parts separated by UNION ALL: the anchor (seed rows) and the recursive member (references the CTE itself). Required for hierarchies, sequences, and graph traversals.
- Every recursive CTE MUST have a termination condition in the recursive member. Without one, MySQL aborts after cte_max_recursion_depth iterations (default 1000).
- For recursive CTEs, ensure column types and string lengths match between anchor and recursive member. CAST the anchor to set the right type and size — otherwise strings silently truncate.
- Classic recursive-CTE patterns: number sequences (1 to N), date ranges (fill missing days), employee hierarchies (manager chain), Fibonacci, dependency trees, graph traversal.
- CTEs combine beautifully with window functions: aggregate in one CTE, apply window functions in the next layer. This is the modern way to write analytics queries.
- CTE vs view: CTEs are per-query; views are persistent database objects. Use a view when the same logic is shared across many queries. Use a CTE for one-query-local complexity.
- MySQL 8.0+ is required for CTEs (MariaDB 10.2+). Earlier versions require derived tables, correlated subqueries, or stored procedures for the same logic.

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/common-table-expressions/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/common-table-expressions/practice/*
