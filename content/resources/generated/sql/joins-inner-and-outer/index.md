---
title: "SQL JOINS Tutorial - INNER, LEFT, RIGHT, FULL OUTER, CROSS JOIN | Modern Age Coders"
description: "Master SQL JOINs with real MySQL examples. Learn INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN with sample tables, Venn diagrams, and 62+ interview questions including 'customers with no orders' and 'most valuable customer'."
slug: joins-inner-and-outer
canonical: https://learn.modernagecoders.com/resources/sql/joins-inner-and-outer
category: "SQL"
keywords: ["sql joins", "inner join", "left join", "right join", "full outer join mysql", "cross join", "sql join examples", "mysql join tutorial", "sql joins interview questions", "left outer join"]
---
# JOINS - INNER, LEFT, RIGHT, FULL OUTER, CROSS

**Difficulty:** Intermediate  
**Reading time:** 40 min  
**Chapter:** 11  
**Practice questions:** 55

## What Are SQL JOINs?

A **JOIN** combines rows from two or more tables based on a related column between them. In a normalized database, data is deliberately split across tables to avoid repetition. JOINs stitch that data back together when you query it.

Imagine an e-commerce system. If we stored every customer's name inside every order row, we would repeat the name thousands of times and updating the name would mean updating thousands of rows. Instead we keep customers in one table, orders in another, and link them with a customer_id column. JOINs bring them together.

### Sample Tables Used Throughout This Chapter

```
CREATE TABLE customers (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    city VARCHAR(50)
);

INSERT INTO customers VALUES
(1, 'Aarav Kumar',   'Bengaluru'),
(2, 'Priya Sharma',  'Mumbai'),
(3, 'Rohan Mehta',   'Delhi'),
(4, 'Meera Iyer',    'Chennai'),
(5, 'Vikram Singh',  'Pune');

CREATE TABLE orders (
    id INT PRIMARY KEY,
    customer_id INT,
    amount DECIMAL(10,2),
    order_date DATE
);

INSERT INTO orders VALUES
(101, 1, 1500.00, '2026-01-10'),
(102, 1, 2300.00, '2026-02-05'),
(103, 2,  800.00, '2026-02-18'),
(104, 3, 5400.00, '2026-03-01'),
(105, 7,  999.00, '2026-03-12');   -- customer_id 7 does not exist in customers!
```

Notice that customer 4 (Meera) and customer 5 (Vikram) have no orders, and order 105 references customer_id 7 which is not in the customers table. This setup lets us see exactly how each JOIN type behaves.

## Why JOINs Matter

### 1. Normalization Forces You to Split Data

Good database design means every piece of information is stored once. Customer addresses go in a customers table. Orders go in an orders table. Products in products. This prevents update anomalies and saves storage. But to answer a business question like "show me each order with the customer's name and city," you need JOINs to reassemble the data.

### 2. JOINs Are the Single Most Asked Interview Topic

Every SQL interview at Amazon, Flipkart, Zomato, Paytm, or any product company will include JOIN questions. "Customers with no orders," "most valuable customer," "employees earning more than their manager" — all JOIN questions. If you cannot write a LEFT JOIN WHERE NULL pattern without thinking, you are not interview-ready.

### 3. The Wrong JOIN Silently Gives the Wrong Answer

Unlike a syntax error which shouts at you, using an INNER JOIN when you needed a LEFT JOIN gives you a perfectly valid result that happens to be wrong. A report that says "you have 3 customers" when you actually have 5 (because 2 had no orders) is the kind of bug that gets shipped to production.

### 4. JOINs Power Real Reporting

Every dashboard you have ever seen — sales by region, active users by plan, top products by revenue — is built from JOINs. Data analysts live inside JOIN queries. Backend engineers write them into every API endpoint that returns more than one entity.

## Detailed Explanation

### 1. INNER JOIN - Only Matching Rows from Both Tables

INNER JOIN returns rows where the join condition is satisfied in BOTH tables. Rows on either side without a match are dropped.

```
SELECT c.name, o.amount
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id;
```

Expected output from our sample data:

```
+--------------+---------+
| name         | amount  |
+--------------+---------+
| Aarav Kumar  | 1500.00 |
| Aarav Kumar  | 2300.00 |
| Priya Sharma |  800.00 |
| Rohan Mehta  | 5400.00 |
+--------------+---------+
```

Meera and Vikram are excluded (no orders). Order 105 is excluded (no matching customer). The keyword INNER is optional in MySQL; `JOIN` alone means INNER JOIN.

### 2. LEFT JOIN (LEFT OUTER JOIN) - All Left Rows + Matching Right

LEFT JOIN keeps every row from the LEFT table. If the right table has no match, right columns come back as NULL.

```
SELECT c.name, o.amount
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id;
```

Output:

```
+--------------+---------+
| name         | amount  |
+--------------+---------+
| Aarav Kumar  | 1500.00 |
| Aarav Kumar  | 2300.00 |
| Priya Sharma |  800.00 |
| Rohan Mehta  | 5400.00 |
| Meera Iyer   | NULL    |
| Vikram Singh | NULL    |
+--------------+---------+
```

This is the single most important JOIN pattern in business analytics. Want "all customers with their order count, including zero"? LEFT JOIN customers to orders and COUNT the right-side key.

### 3. RIGHT JOIN (RIGHT OUTER JOIN) - All Right Rows + Matching Left

Mirror image of LEFT JOIN. Every row from the RIGHT table is kept. Most teams avoid RIGHT JOIN and rewrite it by flipping the table order and using LEFT JOIN instead, because it reads more naturally.

```
SELECT c.name, o.amount, o.id AS order_id
FROM customers c
RIGHT JOIN orders o ON c.id = o.customer_id;
```

Output includes order 105 (customer_id 7, no match):

```
+--------------+---------+----------+
| name         | amount  | order_id |
+--------------+---------+----------+
| Aarav Kumar  | 1500.00 | 101      |
| Aarav Kumar  | 2300.00 | 102      |
| Priya Sharma |  800.00 | 103      |
| Rohan Mehta  | 5400.00 | 104      |
| NULL         |  999.00 | 105      |
+--------------+---------+----------+
```

### 4. FULL OUTER JOIN - Everything From Both Sides

FULL OUTER JOIN returns every row from both tables. If a row has no match on the other side, the missing columns are NULL.

**MySQL does not support FULL OUTER JOIN directly.** PostgreSQL, SQL Server, and Oracle do. In MySQL, simulate it with UNION of a LEFT JOIN and a RIGHT JOIN:

```
SELECT c.name, o.amount
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
UNION
SELECT c.name, o.amount
FROM customers c
RIGHT JOIN orders o ON c.id = o.customer_id;
```

UNION automatically removes duplicates. Use UNION ALL and a WHERE clause only if you need a specific deduplication strategy.

### 5. CROSS JOIN - Cartesian Product

CROSS JOIN returns every combination of rows from both tables. With 5 customers and 5 orders, you get 25 rows. With 10,000 customers and 10,000 products, you get 100 million rows. Use with extreme caution.

```
SELECT c.name, p.name AS product
FROM customers c
CROSS JOIN products p;
```

Legitimate uses: generating every (customer, product) combination for a recommendation matrix, pairing every day of a calendar with every store for reporting, testing. In application code, CROSS JOIN without a filter is almost always a bug.

### 6. JOIN Syntax: ON vs USING

**ON** is the general syntax and works for any condition:

```
SELECT * FROM customers c JOIN orders o ON c.id = o.customer_id;
```

**USING** is shorthand when both tables have a column with the exact same name. The joined column appears only once in the result:

```
-- Works only if both tables have a column named 'customer_id'
SELECT * FROM orders o JOIN order_items oi USING (order_id);
```

Most production code uses ON because foreign key columns are rarely named identically on both sides (`id` vs `customer_id`). Prefer ON for clarity.

### 7. Table Aliases

Single-letter or short aliases make JOIN queries readable:

```
SELECT c.name, o.amount, o.order_date
FROM customers AS c
JOIN orders AS o ON c.id = o.customer_id;
```

The AS keyword is optional. Standard convention: first letter of table name (c, o, p), or an abbreviation (cust, ord). Once a table has an alias, you must use the alias (not the full name) in the rest of the query.

### 8. JOIN Conditions Beyond Equality

Most JOINs use equality (`a.id = b.a_id`). But ON accepts any boolean expression:

```
-- Orders above a certain threshold
SELECT c.name, o.amount
FROM customers c
JOIN orders o
  ON c.id = o.customer_id AND o.amount > 1000;

-- Range join: find events that overlap
SELECT a.title, b.title
FROM events a
JOIN events b
  ON a.start_time < b.end_time AND a.end_time > b.start_time
  AND a.id <> b.id;
```

### 9. Visualizing JOINs (Venn Diagrams)

**INNER JOIN**: intersection only.

```
    A          B
  [###] overlap [###]
       only the overlap is returned
```

**LEFT JOIN**: all of A, plus overlap with B.

```
   [AAAAA overlap ]
   left kept, right NULL where no match
```

**RIGHT JOIN**: mirror of LEFT.

```
          [ overlap BBBBB]
   right kept, left NULL where no match
```

**FULL OUTER JOIN**: all of A, all of B.

```
   [AAAAA overlap BBBBB]
   everything from both, NULLs where no match
```

**CROSS JOIN**: every A with every B. No overlap concept.

### 10. The 'Find Missing Records' Pattern (Interview Favorite)

To find rows in the left table with NO match in the right table, use LEFT JOIN + WHERE right_key IS NULL:

```
-- Customers who have never placed an order
SELECT c.name
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
WHERE o.id IS NULL;
```

Output:

```
+--------------+
| name         |
+--------------+
| Meera Iyer   |
| Vikram Singh |
+--------------+
```

Memorize this pattern. It appears in at least 40% of real SQL interviews.

## Code Examples

### INNER JOIN - Customers with their Orders

```sql
-- Sample tables: customers and orders
-- (See 'What Are SQL JOINs?' section for full data)

SELECT c.id, c.name, c.city, o.id AS order_id, o.amount
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id
ORDER BY c.id, o.id;
```

INNER JOIN returns only rows where a customer has at least one order AND the order's customer_id matches an existing customer. Aarav (2 orders), Priya (1), Rohan (1) appear. Meera and Vikram are excluded because they have no orders. Order 105 is excluded because its customer_id (7) does not exist in customers.

**Output:**

```
+----+--------------+-----------+----------+---------+
| id | name         | city      | order_id | amount  |
+----+--------------+-----------+----------+---------+
|  1 | Aarav Kumar  | Bengaluru |      101 | 1500.00 |
|  1 | Aarav Kumar  | Bengaluru |      102 | 2300.00 |
|  2 | Priya Sharma | Mumbai    |      103 |  800.00 |
|  3 | Rohan Mehta  | Delhi     |      104 | 5400.00 |
+----+--------------+-----------+----------+---------+
4 rows in set
```

### LEFT JOIN - All Customers, Even Those with No Orders

```sql
SELECT c.id, c.name, o.id AS order_id, o.amount
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
ORDER BY c.id;
```

LEFT JOIN keeps every row from customers (the left table). Meera and Vikram appear with NULL in order columns because they have no orders. This is the standard pattern for reports that must include entities with zero activity. Note: order 105 (orphan with customer_id=7) is NOT included because we are driving from customers.

**Output:**

```
+----+--------------+----------+---------+
| id | name         | order_id | amount  |
+----+--------------+----------+---------+
|  1 | Aarav Kumar  |      101 | 1500.00 |
|  1 | Aarav Kumar  |      102 | 2300.00 |
|  2 | Priya Sharma |      103 |  800.00 |
|  3 | Rohan Mehta  |      104 | 5400.00 |
|  4 | Meera Iyer   |     NULL |    NULL |
|  5 | Vikram Singh |     NULL |    NULL |
+----+--------------+----------+---------+
6 rows in set
```

### Customers With No Orders (LEFT JOIN + IS NULL)

```sql
-- The most asked JOIN interview question
SELECT c.id, c.name, c.city
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
WHERE o.id IS NULL;
```

The LEFT JOIN gives every customer. The WHERE o.id IS NULL filter keeps only customers where the orders side produced NULL, meaning no matching order existed. Always filter on a NOT NULL column of the right table (like its primary key) because ordinary columns could be NULL for other reasons.

**Output:**

```
+----+--------------+----------+
| id | name         | city     |
+----+--------------+----------+
|  4 | Meera Iyer   | Chennai  |
|  5 | Vikram Singh | Pune     |
+----+--------------+----------+
2 rows in set
```

### RIGHT JOIN - Including Orphan Orders

```sql
SELECT o.id AS order_id, o.amount, c.name
FROM customers c
RIGHT JOIN orders o ON c.id = o.customer_id
ORDER BY o.id;
```

RIGHT JOIN keeps every row from orders. Order 105 has customer_id=7 which does not exist, so the customer name comes back as NULL. This pattern helps find orphan child rows (bad referential integrity). You could rewrite this as LEFT JOIN by swapping the table order, which is the preferred style.

**Output:**

```
+----------+---------+--------------+
| order_id | amount  | name         |
+----------+---------+--------------+
|      101 | 1500.00 | Aarav Kumar  |
|      102 | 2300.00 | Aarav Kumar  |
|      103 |  800.00 | Priya Sharma |
|      104 | 5400.00 | Rohan Mehta  |
|      105 |  999.00 | NULL         |
+----------+---------+--------------+
5 rows in set
```

### FULL OUTER JOIN Simulation (MySQL has no native FULL OUTER)

```sql
-- Everything from both sides: all customers AND all orders
SELECT c.id AS customer_id, c.name, o.id AS order_id, o.amount
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
UNION
SELECT c.id, c.name, o.id, o.amount
FROM customers c
RIGHT JOIN orders o ON c.id = o.customer_id;
```

MySQL lacks FULL OUTER JOIN. Union a LEFT JOIN (keeps unmatched customers) with a RIGHT JOIN (keeps unmatched orders). UNION removes exact duplicates automatically. PostgreSQL and SQL Server users can write `FULL OUTER JOIN` directly.

**Output:**

```
+-------------+--------------+----------+---------+
| customer_id | name         | order_id | amount  |
+-------------+--------------+----------+---------+
|           1 | Aarav Kumar  |      101 | 1500.00 |
|           1 | Aarav Kumar  |      102 | 2300.00 |
|           2 | Priya Sharma |      103 |  800.00 |
|           3 | Rohan Mehta  |      104 | 5400.00 |
|           4 | Meera Iyer   |     NULL |    NULL |
|           5 | Vikram Singh |     NULL |    NULL |
|        NULL | NULL         |      105 |  999.00 |
+-------------+--------------+----------+---------+
7 rows in set
```

### Most Valuable Customer - Total Spend Per Customer

```sql
SELECT c.id, c.name, c.city,
       COALESCE(SUM(o.amount), 0) AS total_spent,
       COUNT(o.id) AS num_orders
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.name, c.city
ORDER BY total_spent DESC;
```

Classic business query: LEFT JOIN so every customer appears (even zero spenders), GROUP BY customer, SUM the amount. COALESCE turns the NULL sum (from customers with no orders) into 0. COUNT(o.id) correctly returns 0 for unmatched rows because COUNT ignores NULLs.

**Output:**

```
+----+--------------+-----------+-------------+------------+
| id | name         | city      | total_spent | num_orders |
+----+--------------+-----------+-------------+------------+
|  3 | Rohan Mehta  | Delhi     |     5400.00 |          1 |
|  1 | Aarav Kumar  | Bengaluru |     3800.00 |          2 |
|  2 | Priya Sharma | Mumbai    |      800.00 |          1 |
|  4 | Meera Iyer   | Chennai   |        0.00 |          0 |
|  5 | Vikram Singh | Pune      |        0.00 |          0 |
+----+--------------+-----------+-------------+------------+
5 rows in set
```

### CROSS JOIN - Generate All Customer x Product Combinations

```sql
CREATE TABLE products (id INT, name VARCHAR(30), price DECIMAL(8,2));
INSERT INTO products VALUES
(1, 'Notebook', 250.00),
(2, 'Pen',       50.00);

-- Every customer paired with every product
SELECT c.name AS customer, p.name AS product, p.price
FROM customers c
CROSS JOIN products p
ORDER BY c.id, p.id;
```

CROSS JOIN returns the cartesian product: 5 customers x 2 products = 10 rows. With larger tables this explodes quickly (1000 x 1000 = 1 million rows). Real-world use: generating a 'recommendation candidates' matrix, a calendar x store combination, or a test-data grid.

**Output:**

```
+--------------+----------+--------+
| customer     | product  | price  |
+--------------+----------+--------+
| Aarav Kumar  | Notebook | 250.00 |
| Aarav Kumar  | Pen      |  50.00 |
| Priya Sharma | Notebook | 250.00 |
| Priya Sharma | Pen      |  50.00 |
| Rohan Mehta  | Notebook | 250.00 |
| Rohan Mehta  | Pen      |  50.00 |
| Meera Iyer   | Notebook | 250.00 |
| Meera Iyer   | Pen      |  50.00 |
| Vikram Singh | Notebook | 250.00 |
| Vikram Singh | Pen      |  50.00 |
+--------------+----------+--------+
10 rows in set
```

### USING Clause Shortcut

```sql
-- Assume both tables have a column named customer_id (unusual here)
-- Recreate orders with matching column name
SELECT name, amount
FROM customers
JOIN orders ON customers.id = orders.customer_id;

-- If the join column had the same name on both sides:
-- SELECT name, amount FROM customers JOIN orders USING (customer_id);
```

USING (col) requires the column name to be identical in both tables, and the column appears only once in the result. Because most FK columns are named differently (id vs customer_id), ON is more common. Prefer ON for readability and explicit table references.

**Output:**

```
+--------------+---------+
| name         | amount  |
+--------------+---------+
| Aarav Kumar  | 1500.00 |
| Aarav Kumar  | 2300.00 |
| Priya Sharma |  800.00 |
| Rohan Mehta  | 5400.00 |
+--------------+---------+
4 rows in set
```

## Common Mistakes

### Using INNER JOIN When You Need LEFT JOIN

**Wrong:**

```
-- 'Show every customer and their order count'
SELECT c.name, COUNT(o.id) AS orders
FROM customers c
JOIN orders o ON c.id = o.customer_id
GROUP BY c.name;
```

No SQL error, but the result excludes customers with zero orders. Meera and Vikram are silently missing from the report.

**Correct:**

```
SELECT c.name, COUNT(o.id) AS orders
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.name;
```

INNER JOIN drops customers without matching orders. LEFT JOIN keeps every customer and COUNT(o.id) correctly returns 0 for unmatched rows (COUNT ignores NULLs). Whenever the business requirement says 'every X, even those with no Y,' use LEFT JOIN.

### Filtering Right-Side Columns in WHERE After LEFT JOIN

**Wrong:**

```
-- Intention: customers with no orders OR orders under 1000
SELECT c.name
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
WHERE o.amount < 1000;
```

No error, but Meera and Vikram (no orders, amount is NULL) are dropped because NULL < 1000 is not true. The LEFT JOIN silently becomes an INNER JOIN.

**Correct:**

```
SELECT c.name
FROM customers c
LEFT JOIN orders o 
  ON c.id = o.customer_id AND o.amount < 1000
WHERE o.id IS NULL OR o.amount < 1000;
-- Or move the condition to the ON clause if that matches intent
```

Putting a condition on a right-table column in WHERE filters out NULL rows, effectively turning LEFT JOIN into INNER JOIN. Either move the filter into the ON clause, or add `OR right_col IS NULL` in WHERE, depending on the intent.

### Forgetting the ON Clause (Accidental CROSS JOIN)

**Wrong:**

```
-- MySQL in older modes permits this
SELECT c.name, o.amount
FROM customers c, orders o;
```

No syntax error but the result has 5 * 5 = 25 rows — a cartesian product. With real data of millions of rows, this query would never finish.

**Correct:**

```
SELECT c.name, o.amount
FROM customers c
JOIN orders o ON c.id = o.customer_id;
```

Comma-separated tables without a WHERE join condition produce a cartesian product. Always use explicit `JOIN ... ON` syntax. It is clearer, harder to break, and required by modern SQL style guides.

### Ambiguous Column Names Without Aliases

**Wrong:**

```
SELECT id, name, amount
FROM customers
JOIN orders ON customers.id = orders.customer_id;
```

ERROR 1052 (23000): Column 'id' in field list is ambiguous

**Correct:**

```
SELECT c.id AS customer_id, c.name, o.id AS order_id, o.amount
FROM customers c
JOIN orders o ON c.id = o.customer_id;
```

Both customers and orders have a column named `id`. Without qualifying (c.id or o.id), SQL does not know which one you mean. Always use aliases and qualify every column in a JOIN query. This also makes queries easier to read and refactor.

## Summary

- INNER JOIN returns only rows with a match in both tables. The keyword INNER is optional in MySQL; JOIN alone means INNER JOIN.
- LEFT JOIN keeps all rows from the left table. Unmatched right rows become NULL. Use this for 'all X, even without Y' reports.
- RIGHT JOIN keeps all rows from the right table. Most teams rewrite as LEFT JOIN by flipping the table order because it reads more naturally.
- FULL OUTER JOIN keeps all rows from both tables. MySQL does not support it natively — simulate with UNION of LEFT JOIN and RIGHT JOIN.
- CROSS JOIN returns the cartesian product: every row from A paired with every row from B. Dangerous at scale; use only with deliberate intent.
- ON accepts any boolean condition. USING (col) is shorthand when both tables have an identically named column — prefer ON for clarity.
- To find rows with no match, use LEFT JOIN + WHERE right_primary_key IS NULL. This is the most asked JOIN interview pattern.
- Putting a right-table filter in WHERE after LEFT JOIN silently turns it into INNER JOIN. Put the filter in ON or check for IS NULL explicitly.
- Always alias tables (c, o) and qualify columns in JOIN queries. Unqualified ambiguous columns cause errors and hurt readability.
- COUNT(right_key) on a LEFT JOIN correctly returns 0 for unmatched rows because COUNT ignores NULLs — perfect for 'orders per customer' reports.

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/joins-inner-and-outer/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/joins-inner-and-outer/practice/*
