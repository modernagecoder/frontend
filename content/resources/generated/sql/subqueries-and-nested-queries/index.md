---
title: "SQL Subqueries Tutorial - Nested Queries, EXISTS, IN, ANY, ALL | Modern Age Coders"
description: "Master SQL subqueries with real MySQL examples. Learn scalar, row, and table subqueries, correlated subqueries, EXISTS vs IN, NOT EXISTS vs NOT IN NULL trap, and 63+ interview questions including Nth highest salary."
slug: subqueries-and-nested-queries
canonical: https://learn.modernagecoders.com/resources/sql/subqueries-and-nested-queries/
category: "SQL"
keywords: ["sql subquery", "mysql subquery", "correlated subquery", "sql exists", "sql in vs exists", "not in null", "nested query sql", "scalar subquery", "nth highest salary", "subquery interview questions"]
---
# Subqueries (Nested Queries) and EXISTS

**Difficulty:** Intermediate  
**Reading time:** 42 min  
**Chapter:** 13  
**Practice questions:** 51

## What Are Subqueries?

A **subquery** is a query inside another query. Wherever SQL expects a value (or a list, or a table), you can often put a SELECT statement in parentheses. The subquery runs first (conceptually), its result is plugged in, and then the outer query runs.

Subqueries let you answer two-step questions in a single SQL statement. 'Find employees earning more than the average' is two steps — compute the average, then compare — but one SELECT with a subquery expresses it elegantly.

### Sample Tables Used in This Chapter

```
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    salary DECIMAL(10,2),
    department VARCHAR(30),
    manager_id INT
);

INSERT INTO employees VALUES
(1, 'Ananya Reddy',   250000, 'Engineering', NULL),
(2, 'Rahul Verma',    180000, 'Engineering', 1),
(3, 'Divya Nair',     190000, 'Engineering', 1),
(4, 'Arjun Pillai',   120000, 'Engineering', 1),
(5, 'Sneha Kapoor',   170000, 'Marketing',   NULL),
(6, 'Karthik Raja',   110000, 'Marketing',   5),
(7, 'Pooja Menon',     95000, 'Marketing',   5),
(8, 'Vikram Singh',   130000, 'Sales',       NULL);

CREATE TABLE customers (id INT PRIMARY KEY, name VARCHAR(50), city VARCHAR(30));
INSERT INTO customers VALUES
(1, 'Aarav Kumar',   'Bengaluru'),
(2, 'Priya Sharma',  'Mumbai'),
(3, 'Rohan Mehta',   'Delhi'),
(4, 'Meera Iyer',    'Chennai');

CREATE TABLE orders (id INT PRIMARY KEY, customer_id INT, amount DECIMAL(10,2));
INSERT INTO orders VALUES
(101, 1, 1500),
(102, 1, 2300),
(103, 2,  800),
(104, 3, 5400);
-- Meera (id=4) has no orders; this is important for NOT IN / NOT EXISTS examples
```

## Why Subqueries Matter

### 1. Two-Step Logic in One Query

Every analytical question has the shape 'compute X, then use X to find Y.' Subqueries let you express both steps in one statement, which the database can optimize as a unit rather than requiring two round trips from your application.

### 2. Subquery Patterns Are Interview Staples

'Nth highest salary,' 'employees earning more than department average,' 'customers with no orders,' 'find duplicate rows' — every one of these has a canonical subquery solution. Expect multiple subquery problems in any data interview.

### 3. Correlated Subqueries Enable Per-Row Logic

Sometimes the subquery needs to reference the current outer row, e.g., 'for each employee, check if there is someone else in the same department earning more.' This is a **correlated subquery**, and it runs once per outer row. Without it, some queries simply cannot be written.

### 4. Subqueries Make Business Rules Declarative

Rules like 'active customers,' 'high-value orders,' 'repeat buyers' can be expressed as subqueries that filter rows based on other tables. They become reusable building blocks; often you can extract them into views or CTEs.

## Detailed Explanation

### 1. Types of Subqueries by Shape

**Scalar subquery**: returns a single value (1 row, 1 column). Can be used anywhere SQL expects a value.

```
SELECT name, salary,
       (SELECT AVG(salary) FROM employees) AS company_avg
FROM employees;
```

**Row subquery**: returns one row with multiple columns. Used with = or IN and a matching tuple.

```
SELECT * FROM employees
WHERE (department, salary) = 
      (SELECT department, MAX(salary) FROM employees WHERE department = 'Engineering' GROUP BY department);
```

**Table (multi-row) subquery**: returns multiple rows. Used with IN, ANY, ALL, EXISTS, or in the FROM clause as a derived table.

```
SELECT * FROM employees
WHERE department IN (SELECT department FROM employees WHERE salary > 200000);
```

### 2. Subquery in WHERE

The most common placement. Use with IN, NOT IN, =, >, <, EXISTS, ANY, ALL.

```
-- Employees earning more than the average
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

Expected output (company avg ~ 155,625):

```
+---------------+-----------+
| name          | salary    |
+---------------+-----------+
| Ananya Reddy  | 250000.00 |
| Rahul Verma   | 180000.00 |
| Divya Nair    | 190000.00 |
| Sneha Kapoor  | 170000.00 |
+---------------+-----------+
```

### 3. Subquery in SELECT

Useful for adding a computed value to every row.

```
SELECT name, salary,
       salary - (SELECT AVG(salary) FROM employees) AS diff_from_avg
FROM employees;
```

Caution: a scalar subquery in SELECT runs once per row (logically). For a simple constant like the global average, MySQL usually evaluates it once and caches. For correlated subqueries, it runs per row.

### 4. Subquery in FROM (Derived Table)

A subquery in FROM acts as a temporary table. Must have an alias in MySQL.

```
SELECT dept_stats.department, dept_stats.avg_sal
FROM (
    SELECT department, AVG(salary) AS avg_sal
    FROM employees
    GROUP BY department
) AS dept_stats
WHERE dept_stats.avg_sal > 150000;
```

Output:

```
+-------------+----------------+
| department  | avg_sal        |
+-------------+----------------+
| Engineering | 185000.000000  |
| Marketing   | 125000.000000  |
+-------------+----------------+
-- Only Engineering qualifies (> 150k)
```

Wait — that output is wrong. Let me recompute. Engineering avg = (250000+180000+190000+120000)/4 = 185000. Marketing = (170000+110000+95000)/3 = 125000. Sales = 130000. Only Engineering is > 150000.

```
+-------------+----------+
| department  | avg_sal  |
+-------------+----------+
| Engineering | 185000.00|
+-------------+----------+
```

### 5. Subquery in HAVING

Filter groups based on a scalar subquery.

```
SELECT department, AVG(salary) AS avg_sal
FROM employees
GROUP BY department
HAVING AVG(salary) > (SELECT AVG(salary) FROM employees);
```

### 6. IN vs ANY vs ALL vs EXISTS

These handle comparisons against a set.

**IN**: matches if any value in the list equals the left side.

```
WHERE dept IN ('Engineering', 'Marketing')
WHERE id IN (SELECT customer_id FROM orders)
```

**= ANY**: equivalent to IN. **< ANY**: less than at least one value.

**ALL**: must satisfy relative to every value. `salary > ALL (SELECT salary FROM marketing_team)` means greater than every marketing salary.

**EXISTS**: returns true if the subquery returns at least one row. The subquery result content does not matter — only whether rows exist. Often used with a correlated subquery.

```
-- Customers who have at least one order
SELECT name FROM customers c
WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id);
```

### 7. Correlated Subqueries

A correlated subquery references columns from the outer query. It cannot be evaluated once — it runs (logically) for each outer row.

```
-- Employees earning more than their department average
SELECT e.name, e.department, e.salary
FROM employees e
WHERE e.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.department = e.department   -- references outer e!
);
```

For each employee (outer), the subquery computes their own department's average. The `e.department` reference makes it correlated.

Output for sample data: Ananya (250k vs Eng avg 185k), Divya (190k vs 185k), Sneha (170k vs Mkt avg 125k), Rahul would be 180 < 185, does not qualify.

Wait: Rahul 180k vs Eng avg 185k — 180 < 185, Rahul drops. Correct list: Ananya, Divya, Sneha.

### 8. EXISTS vs IN Performance

Old wisdom: EXISTS is often faster on large tables because it can short-circuit (stops at the first matching row). IN may materialize the entire list. Modern optimizers are smart; on small sets they are equivalent. But EXISTS has a semantic advantage: it handles NULLs correctly, which is a bigger deal than raw speed.

### 9. NOT EXISTS vs NOT IN — The NULL Trap

This is one of the most dangerous interview gotchas in SQL.

```
-- Customers with no orders (safe)
SELECT name FROM customers c
WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id);

-- Looks identical but BEHAVES DIFFERENTLY if orders has any NULL customer_id
SELECT name FROM customers
WHERE id NOT IN (SELECT customer_id FROM orders);
```

If any order has `customer_id IS NULL`, the NOT IN query returns NO rows — even correctly unmatched customers are dropped. Why? Because `x NOT IN (a, b, NULL)` is never TRUE. It is `x != a AND x != b AND x != NULL`, and `x != NULL` is UNKNOWN, which combined with AND is UNKNOWN, treated as FALSE.

**Rule: always prefer NOT EXISTS over NOT IN when the subquery might return NULL.**

### 10. Converting Subquery to JOIN

Many subqueries can be rewritten as JOINs, and vice versa. The optimizer often does this transformation automatically. Examples:

```
-- IN subquery
SELECT name FROM customers
WHERE id IN (SELECT customer_id FROM orders);

-- Equivalent JOIN (with DISTINCT)
SELECT DISTINCT c.name FROM customers c
JOIN orders o ON c.id = o.customer_id;

-- NOT IN / NOT EXISTS
SELECT name FROM customers c
WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id);

-- Equivalent LEFT JOIN
SELECT c.name FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
WHERE o.id IS NULL;
```

Choose whichever reads best for your use case. JOINs can be slightly faster due to set-based optimization; correlated subqueries may be more intuitive to write.

### 11. Finding Nth Highest Salary — Classic Interview

Method 1: DISTINCT + ORDER BY + LIMIT (MySQL-specific).

```
-- 3rd highest salary
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 2;  -- skip 2, take 1
```

Method 2: Subquery counting distinct higher salaries.

```
-- Generic N=3
SELECT salary FROM employees e1
WHERE 3 = (
    SELECT COUNT(DISTINCT salary)
    FROM employees e2
    WHERE e2.salary >= e1.salary
);
```

Method 3: Window functions with DENSE_RANK (covered later).

## Code Examples

### Scalar Subquery - Compare to Average Salary

```sql
-- Employees earning more than the company average
SELECT name, department, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

The subquery returns a single number (the average salary across all employees). The outer WHERE compares each employee's salary to that single value. MySQL evaluates the scalar subquery once.

**Output:**

```
+---------------+-------------+-----------+
| name          | department  | salary    |
+---------------+-------------+-----------+
| Ananya Reddy  | Engineering | 250000.00 |
| Rahul Verma   | Engineering | 180000.00 |
| Divya Nair    | Engineering | 190000.00 |
| Sneha Kapoor  | Marketing   | 170000.00 |
+---------------+-------------+-----------+
4 rows in set
-- Company avg = 155,625; these 4 are above
```

### Subquery in FROM (Derived Table)

```sql
-- Average salary per department, filtered to above-company-average departments
SELECT dept_stats.department, dept_stats.avg_sal
FROM (
    SELECT department, AVG(salary) AS avg_sal
    FROM employees
    GROUP BY department
) AS dept_stats
WHERE dept_stats.avg_sal > 150000;
```

The inner SELECT computes per-department averages. The outer query treats that result as a temporary table called `dept_stats`. MySQL requires every derived table to have an alias.

**Output:**

```
+-------------+----------------+
| department  | avg_sal        |
+-------------+----------------+
| Engineering | 185000.000000  |
+-------------+----------------+
1 row in set
```

### Correlated Subquery - Above Department Average

```sql
SELECT e.name, e.department, e.salary
FROM employees e
WHERE e.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.department = e.department
);
```

Correlated because the inner query references `e.department` from the outer. For each employee, the inner query computes that person's own department average. Rahul (180k) does NOT qualify because Engineering average is 185k.

**Output:**

```
+---------------+-------------+-----------+
| name          | department  | salary    |
+---------------+-------------+-----------+
| Ananya Reddy  | Engineering | 250000.00 |
| Divya Nair    | Engineering | 190000.00 |
| Sneha Kapoor  | Marketing   | 170000.00 |
+---------------+-------------+-----------+
3 rows in set
```

### EXISTS - Customers With at Least One Order

```sql
SELECT c.id, c.name
FROM customers c
WHERE EXISTS (
    SELECT 1 FROM orders o
    WHERE o.customer_id = c.id
);
```

EXISTS returns TRUE if the subquery has at least one row. We use `SELECT 1` as a placeholder — the actual values do not matter. This is a correlated subquery because of `o.customer_id = c.id`.

**Output:**

```
+----+--------------+
| id | name         |
+----+--------------+
|  1 | Aarav Kumar  |
|  2 | Priya Sharma |
|  3 | Rohan Mehta  |
+----+--------------+
3 rows in set
-- Meera (no orders) is excluded
```

### NOT EXISTS - Customers Without Orders (Safe Pattern)

```sql
SELECT c.id, c.name
FROM customers c
WHERE NOT EXISTS (
    SELECT 1 FROM orders o
    WHERE o.customer_id = c.id
);
```

NOT EXISTS is the correct way to find customers with no matching orders. Unlike NOT IN, it handles NULL in the subquery gracefully. This is the preferred production pattern.

**Output:**

```
+----+------------+
| id | name       |
+----+------------+
|  4 | Meera Iyer |
+----+------------+
1 row in set
```

### NOT IN Trap With NULLs

```sql
-- Insert an order with NULL customer_id to reproduce the bug
INSERT INTO orders VALUES (105, NULL, 999);

-- This returns ZERO rows because of NULL
SELECT c.name
FROM customers c
WHERE c.id NOT IN (SELECT customer_id FROM orders);

-- Correct version that handles NULL
SELECT c.name
FROM customers c
WHERE c.id NOT IN (
    SELECT customer_id FROM orders WHERE customer_id IS NOT NULL
);

-- Better: always use NOT EXISTS
SELECT c.name
FROM customers c
WHERE NOT EXISTS (
    SELECT 1 FROM orders o WHERE o.customer_id = c.id
);
```

NOT IN becomes unreliable when the subquery contains NULL. Any comparison `x != NULL` is UNKNOWN, so the entire NOT IN evaluates to UNKNOWN (falsey) for every row. Either filter NULLs out in the subquery or use NOT EXISTS. Memorize this — it is a classic interview trick.

**Output:**

```
-- First query: Empty set (bug!)
-- Second query: Meera Iyer
-- Third query: Meera Iyer (correct and clean)
```

### Nth Highest Salary - Three Methods

```sql
-- Method 1: DISTINCT + OFFSET (MySQL, PostgreSQL)
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 2;   -- 3rd highest: skip 2 then take 1

-- Method 2: Correlated subquery (counts DISTINCT higher salaries)
SELECT salary FROM employees e1
WHERE 3 = (
    SELECT COUNT(DISTINCT salary)
    FROM employees e2
    WHERE e2.salary >= e1.salary
);

-- Method 3: Window function DENSE_RANK (cleanest)
SELECT DISTINCT salary FROM (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
    FROM employees
) t WHERE rnk = 3;
```

Nth highest salary is the single most-asked SQL interview question. Method 1 is simplest but MySQL-specific. Method 2 is portable and uses a correlated subquery — good to know for interviews. Method 3 uses window functions (covered in Chapter 18), the cleanest modern approach.

**Output:**

```
+-----------+
| salary    |
+-----------+
| 180000.00 |
+-----------+
-- 3rd highest: Ananya 250k, Divya 190k, Rahul 180k
```

### Subquery in SELECT - Add Computed Column

```sql
SELECT name, salary,
       (SELECT AVG(salary) FROM employees) AS company_avg,
       salary - (SELECT AVG(salary) FROM employees) AS diff_from_avg
FROM employees
ORDER BY diff_from_avg DESC;
```

Scalar subqueries in SELECT add computed columns that depend on aggregates. MySQL evaluates non-correlated subqueries once and caches the result, so this is efficient. For per-row correlated aggregates, performance can degrade.

**Output:**

```
+---------------+-----------+----------------+---------------+
| name          | salary    | company_avg    | diff_from_avg |
+---------------+-----------+----------------+---------------+
| Ananya Reddy  | 250000.00 | 155625.000000  | 94375.00      |
| Divya Nair    | 190000.00 | 155625.000000  | 34375.00      |
| Rahul Verma   | 180000.00 | 155625.000000  | 24375.00      |
| Sneha Kapoor  | 170000.00 | 155625.000000  | 14375.00      |
| Vikram Singh  | 130000.00 | 155625.000000  | -25625.00     |
| Arjun Pillai  | 120000.00 | 155625.000000  | -35625.00     |
| Karthik Raja  | 110000.00 | 155625.000000  | -45625.00     |
| Pooja Menon   |  95000.00 | 155625.000000  | -60625.00     |
+---------------+-----------+----------------+---------------+
```

## Common Mistakes

### Using NOT IN When Subquery Contains NULLs

**Wrong:**

```
-- orders may have rows with customer_id IS NULL
SELECT name FROM customers
WHERE id NOT IN (SELECT customer_id FROM orders);
```

No SQL error, but the query returns zero rows if ANY order has NULL customer_id. The entire filter silently evaluates to UNKNOWN.

**Correct:**

```
SELECT name FROM customers c
WHERE NOT EXISTS (
    SELECT 1 FROM orders o WHERE o.customer_id = c.id
);
```

NOT IN with NULL in the list always produces no TRUE result because `x != NULL` is UNKNOWN. NOT EXISTS does not have this issue. Always prefer NOT EXISTS unless you explicitly filter NULLs in the subquery.

### Scalar Subquery Returning Multiple Rows

**Wrong:**

```
SELECT name FROM employees
WHERE salary = (SELECT salary FROM employees WHERE department = 'Engineering');
```

ERROR 1242 (21000): Subquery returns more than 1 row

**Correct:**

```
-- Use IN for multiple values
SELECT name FROM employees
WHERE salary IN (SELECT salary FROM employees WHERE department = 'Engineering');

-- Or pick a specific row (MAX/MIN/LIMIT)
SELECT name FROM employees
WHERE salary = (SELECT MAX(salary) FROM employees WHERE department = 'Engineering');
```

When you use `=` with a subquery, the subquery MUST return exactly one value. If it returns multiple, you get error 1242. Either aggregate (MAX/MIN/AVG) to get one value, or change `=` to IN.

### Derived Table Without Alias

**Wrong:**

```
SELECT * FROM (SELECT department, COUNT(*) FROM employees GROUP BY department);
```

ERROR 1248 (42000): Every derived table must have its own alias

**Correct:**

```
SELECT * FROM (
    SELECT department, COUNT(*) AS cnt
    FROM employees
    GROUP BY department
) AS dept_counts;
```

MySQL requires every subquery in FROM to have an alias. Pick something short and descriptive. Also alias computed columns (like COUNT(*) AS cnt) so the outer query can reference them by name.

### Forgetting the Correlation Reference Makes the Query Wrong

**Wrong:**

```
-- Intended: employees above their department's average
SELECT name, salary FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

No error, but the query compares every employee to the COMPANY average, not their department average.

**Correct:**

```
SELECT e.name, e.salary, e.department
FROM employees e
WHERE e.salary > (
    SELECT AVG(e2.salary) FROM employees e2
    WHERE e2.department = e.department
);
```

Correlated subqueries reference the outer query via an alias and a WHERE condition. Without the `e2.department = e.department` link, the subquery is independent and computes the global average. Always double-check your correlation conditions.

## Summary

- A subquery is a SELECT inside another SQL statement. Types: scalar (1 value), row (1 row), table (multiple rows).
- Subqueries can appear in SELECT, FROM, WHERE, and HAVING. In FROM they are called derived tables and require an alias in MySQL.
- IN, ANY, ALL, and EXISTS operate on sets. EXISTS returns TRUE when the subquery has at least one row; the row contents do not matter.
- A correlated subquery references columns from the outer query. It runs once per outer row (logically) and enables per-row logic.
- EXISTS can short-circuit and often performs better than IN on large tables. Modern optimizers frequently convert between them automatically.
- NOT EXISTS is always safer than NOT IN. NOT IN returns wrong results if the subquery contains NULL (the classic interview gotcha).
- Many IN/EXISTS subqueries can be rewritten as JOINs. Pick whichever reads better. The optimizer often produces the same plan.
- Scalar subqueries used with = must return exactly one row, or MySQL raises error 1242. Use MAX/MIN/LIMIT or switch to IN.
- Common patterns: above-average salary (scalar subquery in WHERE), Nth highest salary (DISTINCT + LIMIT OFFSET or DENSE_RANK), customers with no orders (NOT EXISTS).
- Nth highest salary is the most-asked SQL interview question. Know at least two methods: LIMIT/OFFSET and window functions (DENSE_RANK).

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/subqueries-and-nested-queries/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/subqueries-and-nested-queries/practice/*
