---
title: "SQL Self Join and Multi-Table Query Tutorial with Examples | Modern Age Coders"
description: "Learn SQL self joins and multi-table queries with real MySQL examples. Employee-manager hierarchy, 3-table joins (customers-orders-products), implicit vs explicit joins, and 58+ interview questions including 'employees earning more than their manager'."
slug: self-joins-and-multi-table
canonical: https://learn.modernagecoders.com/resources/sql/self-joins-and-multi-table/
category: "SQL"
keywords: ["sql self join", "mysql self join", "employee manager sql", "multi-table join", "3 table join sql", "natural join", "implicit join sql", "sql hierarchy query", "self join interview questions", "employee manager hierarchy sql"]
---
# Self Joins and Multi-Table Queries

**Difficulty:** Intermediate  
**Reading time:** 38 min  
**Chapter:** 12  
**Practice questions:** 49

## What Are Self Joins and Multi-Table Joins?

A **self join** is a JOIN where a table is joined with itself. This sounds strange — why join a table with itself? Because many real-world relationships live inside a single table. An employee's manager is also an employee. A reply on a forum references the parent post, which is also a post. A folder has a parent folder. To fetch both ends of the relationship in one query, we alias the same table twice.

A **multi-table join** chains three or more tables together in a single query. Real applications rarely answer a question using only two tables. A sales report needs customers, orders, and order_items. A student transcript needs students, enrollments, courses, and grades. JOIN is associative: you stack them left-to-right.

### Sample Tables Used Throughout This Chapter

```
-- Employees with a self-referencing manager_id
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    manager_id INT,
    salary DECIMAL(10,2),
    department VARCHAR(30)
);

INSERT INTO employees VALUES
(1, 'Ananya Reddy',  NULL, 250000, 'CEO'),
(2, 'Rahul Verma',      1, 180000, 'Engineering'),
(3, 'Sneha Kapoor',     1, 170000, 'Marketing'),
(4, 'Arjun Pillai',     2, 120000, 'Engineering'),
(5, 'Divya Nair',       2, 190000, 'Engineering'),  -- earns more than her manager!
(6, 'Karthik Raja',     3, 110000, 'Marketing'),
(7, 'Pooja Menon',      3,  95000, 'Marketing');

-- For 3-table join examples
CREATE TABLE customers (id INT PRIMARY KEY, name VARCHAR(50), city VARCHAR(30));
CREATE TABLE orders    (id INT PRIMARY KEY, customer_id INT, order_date DATE);
CREATE TABLE order_items (id INT PRIMARY KEY, order_id INT, product_id INT, qty INT, price DECIMAL(8,2));
CREATE TABLE products  (id INT PRIMARY KEY, name VARCHAR(50), category VARCHAR(30));

INSERT INTO customers VALUES
(1, 'Aarav Kumar', 'Bengaluru'),
(2, 'Priya Sharma', 'Mumbai');

INSERT INTO orders VALUES
(101, 1, '2026-03-10'),
(102, 2, '2026-03-11');

INSERT INTO products VALUES
(1, 'Laptop',  'Electronics'),
(2, 'Mouse',   'Electronics'),
(3, 'Notebook','Stationery');

INSERT INTO order_items VALUES
(1001, 101, 1, 1, 55000),
(1002, 101, 2, 2,   500),
(1003, 102, 3, 5,   200);
```

## Why Self Joins and Multi-Table Joins Matter

### 1. Hierarchical Data Is Everywhere

Org charts, category trees, threaded comments, file systems, geographical regions. Every real system contains hierarchies. The cleanest way to store them in a relational database is a self-referencing foreign key (manager_id points to id in the same table). Self joins are how you query this structure at one level. Recursive CTEs (covered later) handle unlimited depth.

### 2. Real Queries Always Touch Multiple Tables

A well-normalized database has many narrow tables. A 'show me top 10 products sold in Bengaluru in March' query easily touches 4 tables: customers, orders, order_items, products. You cannot avoid multi-table JOINs by writing simpler queries — you must master them.

### 3. Self Join Is a Famous Interview Topic

The 'find employees earning more than their manager' question appears in SQL interviews at least as often as 'Nth highest salary.' Recruiters use it to test whether you understand that a single table can represent a graph.

### 4. Join Order Affects Performance, Not Results

Logically, (a JOIN b) JOIN c equals a JOIN (b JOIN c). But the optimizer picks an execution order based on statistics. Understanding how joins compose lets you write clean queries and trust the optimizer, while knowing when to force a different order with hints for pathological cases.

## Detailed Explanation

### 1. Self Join Basics — Alias the Same Table Twice

You cannot join a table with itself unless each reference has a distinct alias, because otherwise column names would be ambiguous.

```
-- List each employee with their manager's name
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;
```

Here `e` is the 'employee' role of the table and `m` is the 'manager' role. LEFT JOIN is used so that the CEO (who has no manager) still appears, with NULL for manager name.

Output on the sample data:

```
+---------------+--------------+
| employee      | manager      |
+---------------+--------------+
| Ananya Reddy  | NULL         |
| Rahul Verma   | Ananya Reddy |
| Sneha Kapoor  | Ananya Reddy |
| Arjun Pillai  | Rahul Verma  |
| Divya Nair    | Rahul Verma  |
| Karthik Raja  | Sneha Kapoor |
| Pooja Menon   | Sneha Kapoor |
+---------------+--------------+
```

### 2. Employees Earning More Than Their Manager

A classic interview problem:

```
SELECT e.name AS employee, e.salary AS emp_salary,
       m.name AS manager, m.salary AS mgr_salary
FROM employees e
JOIN employees m ON e.manager_id = m.id
WHERE e.salary > m.salary;
```

Result:

```
+------------+------------+-------------+------------+
| employee   | emp_salary | manager     | mgr_salary |
+------------+------------+-------------+------------+
| Divya Nair |  190000.00 | Rahul Verma |  180000.00 |
+------------+------------+-------------+------------+
```

The logic: join each employee to the row of their manager. Compare salaries. The CEO (no manager_id) is excluded by the INNER JOIN, which is correct because the CEO has no manager to compare to.

### 3. Going Beyond Two Levels — Preview of Recursive CTEs

Self join gives one level of hierarchy. To list all ancestors (manager's manager's manager) without knowing the depth, you need a **recursive CTE** (covered in the CTE chapter):

```
WITH RECURSIVE chain AS (
    SELECT id, name, manager_id, 0 AS level FROM employees WHERE name = 'Pooja Menon'
    UNION ALL
    SELECT e.id, e.name, e.manager_id, c.level + 1
    FROM employees e JOIN chain c ON e.id = c.manager_id
)
SELECT * FROM chain;
```

A plain self join can only look up one level at a time.

### 4. Joining Three Tables

Chain JOINs left to right. Each JOIN adds a new table referring to something already in scope.

```
-- Total revenue per customer
SELECT c.name, SUM(oi.qty * oi.price) AS total
FROM customers c
JOIN orders o       ON c.id = o.customer_id
JOIN order_items oi ON o.id = oi.order_id
GROUP BY c.id, c.name;
```

Output:

```
+--------------+----------+
| name         | total    |
+--------------+----------+
| Aarav Kumar  | 56000.00 |
| Priya Sharma |  1000.00 |
+--------------+----------+
```

Aarav's total: 1*55000 + 2*500 = 56000. Priya's: 5*200 = 1000.

### 5. Joining Four Tables

```
-- Top-selling products overall
SELECT p.name AS product, SUM(oi.qty) AS units_sold, SUM(oi.qty * oi.price) AS revenue
FROM customers c
JOIN orders o       ON c.id = o.customer_id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p     ON oi.product_id = p.id
GROUP BY p.id, p.name
ORDER BY revenue DESC;
```

### 6. Does Join Order Matter?

**Results**: no. INNER JOIN is associative and commutative (ignoring LEFT/RIGHT nuances). `a JOIN b JOIN c` produces the same rows regardless of how you group them.

**Performance**: yes, it can matter. The optimizer picks an execution plan based on row counts and indexes. Usually it gets this right. For complex queries with 5+ tables, you might inspect `EXPLAIN` output and consider hints. Beginners should trust the optimizer and write the most readable order.

### 7. Implicit (Old-Style) Joins — Avoid

Before SQL-92 formalized JOIN syntax, people wrote:

```
-- OLD STYLE (avoid)
SELECT c.name, o.id
FROM customers c, orders o
WHERE c.id = o.customer_id;
```

Why avoid? Three reasons:

1. Forget the WHERE and you get a cartesian product — millions of rows on a production DB.
2. LEFT/RIGHT/FULL OUTER JOIN cannot be expressed in this syntax.
3. Join condition and filter condition get mixed in WHERE, making intent unclear.

Always use explicit `JOIN ... ON ...`. Some style guides even fail builds that use comma-joins.

### 8. NATURAL JOIN — Risky, Avoid

NATURAL JOIN automatically joins on all columns with the same name in both tables:

```
SELECT * FROM customers NATURAL JOIN orders;
```

Why risky? If someone adds a column to one table that happens to match an unrelated column in the other (say, both tables get a `created_at`), the NATURAL JOIN silently adds an extra condition and changes the result set. You get no warning. Explicit JOIN ... ON is always safer.

### 9. Self Join with Multiple Conditions

Combine conditions for richer queries.

```
-- Pairs of employees in the same department
SELECT e1.name AS emp1, e2.name AS emp2, e1.department
FROM employees e1
JOIN employees e2
  ON e1.department = e2.department
  AND e1.id < e2.id;
-- The id < id trick avoids duplicates (A,B) and (B,A) and self-pairs (A,A)
```

### 10. Multi-Table Join Pitfalls — Cartesian Blowup

A missing JOIN condition in a multi-table query silently blows up the row count. 1000 customers x 1000 orders x 1000 items = 1 billion rows. Always verify row counts after writing multi-table queries during development. Add `SELECT COUNT(*)` as a sanity check. Use `LIMIT 10` while testing.

### 11. Filtering Early vs Late

Logically, you can put a filter in ON or WHERE (for INNER JOIN they are equivalent; for OUTER JOIN they differ). The optimizer usually pushes filters down to the earliest possible point. For readability, put JOIN conditions in ON and value filters in WHERE.

```
-- Preferred style
SELECT c.name, SUM(oi.qty * oi.price) AS total
FROM customers c
JOIN orders o       ON c.id = o.customer_id
JOIN order_items oi ON o.id = oi.order_id
WHERE c.city = 'Bengaluru'
  AND o.order_date >= '2026-03-01'
GROUP BY c.id, c.name;
```

## Code Examples

### Self Join - Employee with Manager Name

```sql
SELECT e.name AS employee, e.salary, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id
ORDER BY e.id;
```

Alias the same table twice: `e` for employee role, `m` for manager role. LEFT JOIN keeps the CEO (who has manager_id = NULL) in the result with NULL for manager name.

**Output:**

```
+---------------+-----------+--------------+
| employee      | salary    | manager      |
+---------------+-----------+--------------+
| Ananya Reddy  | 250000.00 | NULL         |
| Rahul Verma   | 180000.00 | Ananya Reddy |
| Sneha Kapoor  | 170000.00 | Ananya Reddy |
| Arjun Pillai  | 120000.00 | Rahul Verma  |
| Divya Nair    | 190000.00 | Rahul Verma  |
| Karthik Raja  | 110000.00 | Sneha Kapoor |
| Pooja Menon   |  95000.00 | Sneha Kapoor |
+---------------+-----------+--------------+
7 rows in set
```

### Employees Earning More Than Their Manager

```sql
SELECT e.name AS employee, e.salary AS emp_salary,
       m.name AS manager, m.salary AS mgr_salary
FROM employees e
JOIN employees m ON e.manager_id = m.id
WHERE e.salary > m.salary;
```

Classic interview problem. INNER JOIN connects each employee to their manager's row. WHERE compares salaries. CEO is automatically excluded because INNER JOIN drops rows where manager_id is NULL.

**Output:**

```
+------------+------------+-------------+------------+
| employee   | emp_salary | manager     | mgr_salary |
+------------+------------+-------------+------------+
| Divya Nair |  190000.00 | Rahul Verma |  180000.00 |
+------------+------------+-------------+------------+
1 row in set
```

### Count Direct Reports for Each Manager

```sql
SELECT m.id, m.name AS manager, COUNT(e.id) AS reports
FROM employees m
LEFT JOIN employees e ON e.manager_id = m.id
GROUP BY m.id, m.name
ORDER BY reports DESC;
```

Drive from employees as manager (m). LEFT JOIN to employees as their direct reports (e). COUNT(e.id) gives 0 for managers with no reports (individual contributors). This counts only direct reports; for 'all descendants' you need a recursive CTE.

**Output:**

```
+----+---------------+---------+
| id | manager       | reports |
+----+---------------+---------+
|  1 | Ananya Reddy  |       2 |
|  2 | Rahul Verma   |       2 |
|  3 | Sneha Kapoor  |       2 |
|  4 | Arjun Pillai  |       0 |
|  5 | Divya Nair    |       0 |
|  6 | Karthik Raja  |       0 |
|  7 | Pooja Menon   |       0 |
+----+---------------+---------+
7 rows in set
```

### Three-Table Join - Customer, Order, Items

```sql
SELECT c.name AS customer, o.id AS order_id, oi.qty, oi.price,
       (oi.qty * oi.price) AS line_total
FROM customers c
JOIN orders o       ON c.id = o.customer_id
JOIN order_items oi ON o.id = oi.order_id
ORDER BY c.id, o.id;
```

Chain JOINs left-to-right. Each JOIN introduces one new table. The alias lets us reference that table's columns in the SELECT or later ON clauses. This is the most common shape of a business query.

**Output:**

```
+--------------+----------+-----+----------+------------+
| customer     | order_id | qty | price    | line_total |
+--------------+----------+-----+----------+------------+
| Aarav Kumar  |      101 |   1 | 55000.00 |   55000.00 |
| Aarav Kumar  |      101 |   2 |   500.00 |    1000.00 |
| Priya Sharma |      102 |   5 |   200.00 |    1000.00 |
+--------------+----------+-----+----------+------------+
3 rows in set
```

### Four-Table Join - Product Sales Report

```sql
SELECT p.name AS product, p.category,
       SUM(oi.qty) AS units_sold,
       SUM(oi.qty * oi.price) AS revenue
FROM customers c
JOIN orders o       ON c.id = o.customer_id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p     ON oi.product_id = p.id
GROUP BY p.id, p.name, p.category
ORDER BY revenue DESC;
```

Four-table join: customers -> orders -> order_items -> products. Aggregate by product, sort by revenue. This is the skeleton of every e-commerce product sales report.

**Output:**

```
+----------+-------------+------------+----------+
| product  | category    | units_sold | revenue  |
+----------+-------------+------------+----------+
| Laptop   | Electronics |          1 | 55000.00 |
| Mouse    | Electronics |          2 |  1000.00 |
| Notebook | Stationery  |          5 |  1000.00 |
+----------+-------------+------------+----------+
3 rows in set
```

### Self Join with id < id Trick - Unique Pairs

```sql
-- Every pair of employees in the same department, without duplicates
SELECT e1.name AS emp1, e2.name AS emp2, e1.department
FROM employees e1
JOIN employees e2
  ON e1.department = e2.department
 AND e1.id < e2.id
ORDER BY e1.department, e1.id;
```

The `e1.id < e2.id` condition guarantees: (a) no self-pairs like (Arjun, Arjun), (b) each pair appears only once, e.g., (Arjun, Divya) but not (Divya, Arjun). Without this, you would get n^2 rows per department.

**Output:**

```
+---------------+---------------+-------------+
| emp1          | emp2          | department  |
+---------------+---------------+-------------+
| Rahul Verma   | Arjun Pillai  | Engineering |
| Rahul Verma   | Divya Nair    | Engineering |
| Arjun Pillai  | Divya Nair    | Engineering |
| Sneha Kapoor  | Karthik Raja  | Marketing   |
| Sneha Kapoor  | Pooja Menon   | Marketing   |
| Karthik Raja  | Pooja Menon   | Marketing   |
+---------------+---------------+-------------+
6 rows in set
```

### Three-Level Self Join - Grandmanager

```sql
SELECT e.name AS employee, m.name AS manager, gm.name AS grandmanager
FROM employees e
LEFT JOIN employees m  ON e.manager_id = m.id
LEFT JOIN employees gm ON m.manager_id = gm.id;
```

Three aliases for three levels: employee (e), manager (m), grandmanager (gm). Arjun's manager is Rahul, whose manager is Ananya. For unknown depths, use a recursive CTE instead.

**Output:**

```
+---------------+--------------+--------------+
| employee      | manager      | grandmanager |
+---------------+--------------+--------------+
| Ananya Reddy  | NULL         | NULL         |
| Rahul Verma   | Ananya Reddy | NULL         |
| Sneha Kapoor  | Ananya Reddy | NULL         |
| Arjun Pillai  | Rahul Verma  | Ananya Reddy |
| Divya Nair    | Rahul Verma  | Ananya Reddy |
| Karthik Raja  | Sneha Kapoor | Ananya Reddy |
| Pooja Menon   | Sneha Kapoor | Ananya Reddy |
+---------------+--------------+--------------+
7 rows in set
```

### Multi-Table Filter - Bengaluru Customers Who Bought Electronics

```sql
SELECT DISTINCT c.name
FROM customers c
JOIN orders o       ON c.id = o.customer_id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p     ON oi.product_id = p.id
WHERE c.city = 'Bengaluru'
  AND p.category = 'Electronics';
```

Filter across the 4-table chain. WHERE applies after the JOINs, but the optimizer typically pushes the filters down to the relevant tables. DISTINCT prevents a customer from appearing twice if they bought multiple electronics.

**Output:**

```
+-------------+
| name        |
+-------------+
| Aarav Kumar |
+-------------+
1 row in set
```

## Common Mistakes

### Self Join Without Distinct Aliases

**Wrong:**

```
SELECT name, name AS manager
FROM employees
JOIN employees ON employees.manager_id = employees.id;
```

ERROR 1066 (42000): Not unique table/alias: 'employees'

**Correct:**

```
SELECT e.name, m.name AS manager
FROM employees e
JOIN employees m ON e.manager_id = m.id;
```

When joining a table with itself, each reference must have a distinct alias. Otherwise, MySQL cannot tell which instance of the table a column belongs to. Pick short, meaningful aliases like `e` and `m`.

### Using INNER JOIN for Self Join When You Need LEFT JOIN

**Wrong:**

```
-- 'List all employees with their manager'
SELECT e.name, m.name AS manager
FROM employees e
JOIN employees m ON e.manager_id = m.id;
```

No error but the CEO (manager_id IS NULL) is silently dropped from the result.

**Correct:**

```
SELECT e.name, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;
```

INNER JOIN excludes rows where the join column is NULL. The CEO has no manager, so their row is dropped. Use LEFT JOIN to keep every employee, with NULL manager for top-level roles.

### Forgetting a JOIN Condition in Multi-Table Query (Cartesian Blowup)

**Wrong:**

```
SELECT c.name, p.name
FROM customers c
JOIN orders o       ON c.id = o.customer_id
JOIN order_items oi
JOIN products p     ON oi.product_id = p.id;
```

MySQL may complain about syntax near the second JOIN. In lenient modes, this produces a cartesian product because order_items is joined without a condition.

**Correct:**

```
SELECT c.name, p.name
FROM customers c
JOIN orders o       ON c.id = o.customer_id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p     ON oi.product_id = p.id;
```

Every JOIN needs its own ON clause. Missing one either causes a syntax error or (in older MySQL modes) produces a massive cartesian product. Always double-check that the number of ON clauses equals the number of JOINs.

### Using NATURAL JOIN on Tables with Accidental Matching Columns

**Wrong:**

```
SELECT * FROM customers NATURAL JOIN orders;
-- If both tables have a 'created_at' column, they become part of the join!
```

No error but the result is wrong. NATURAL JOIN requires created_at to match, filtering out rows that should have matched.

**Correct:**

```
SELECT * FROM customers c
JOIN orders o ON c.id = o.customer_id;
```

NATURAL JOIN joins on every column with the same name. When schemas evolve and a new column accidentally shares a name across tables, the join silently changes meaning. Always use explicit ON for safety.

## Summary

- A self join is a JOIN where a table is joined with itself, using two distinct aliases. Used for hierarchical or intra-table relationships like employee-manager.
- Use LEFT JOIN for self joins when the 'parent' might be NULL (e.g., the CEO has no manager). INNER JOIN would silently drop those rows.
- 'Employees earning more than their manager' is the classic self-join interview question: JOIN employees e with employees m ON e.manager_id = m.id WHERE e.salary > m.salary.
- A single self join walks one level of hierarchy. For arbitrary depth, use recursive CTEs.
- Multi-table joins chain tables left-to-right. Each JOIN needs its own ON clause. The result is associative: order does not change rows, only performance.
- Implicit joins (FROM a, b WHERE a.id = b.id) are deprecated style. Explicit JOIN ... ON is safer, clearer, and supports OUTER joins.
- NATURAL JOIN is dangerous because it silently joins on every same-named column. New columns accidentally break queries. Always use explicit ON.
- The `e1.id < e2.id` trick in a self join produces unique unordered pairs, avoiding both duplicates and self-pairs.
- Four-table joins (customers -> orders -> order_items -> products) are the skeleton of most business reports. Aggregate at the top of the chain.
- Always sanity-check multi-table queries with `SELECT COUNT(*)` during development — a missing ON clause quickly produces millions of spurious rows.

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/self-joins-and-multi-table/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/self-joins-and-multi-table/practice/*
