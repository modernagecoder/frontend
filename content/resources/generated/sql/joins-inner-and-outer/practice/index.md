---
title: "Practice: JOINS - INNER, LEFT, RIGHT, FULL OUTER, CROSS"
description: "55 practice problems for JOINS - INNER, LEFT, RIGHT, FULL OUTER, CROSS in SQL"
slug: joins-inner-and-outer-practice
canonical: https://learn.modernagecoders.com/resources/sql/joins-inner-and-outer/practice/
category: "SQL"
---
# Practice: JOINS - INNER, LEFT, RIGHT, FULL OUTER, CROSS

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] Given the sample tables (5 customers, 5 orders), how many rows does this query return?

```
SELECT c.name, o.amount
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id;
```

*Hint:* INNER JOIN only returns rows where both sides match. Order 105 has no matching customer.

**Answer:** `4 rows`

Aarav has 2 orders, Priya has 1, Rohan has 1 — total 4. Meera and Vikram (no orders) are excluded. Order 105 (customer_id=7) has no matching customer and is excluded.

### Q2. [Easy] How many rows does this query return?

```
SELECT c.name, o.amount
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id;
```

*Hint:* LEFT JOIN keeps every customer. Unmatched customers appear once with NULLs.

**Answer:** `6 rows`

4 matched rows (Aarav x2, Priya, Rohan) + 2 unmatched (Meera, Vikram with NULL order columns) = 6. Order 105 is excluded because we are driving from customers.

### Q3. [Easy] How many rows does this return?

```
SELECT *
FROM customers c
RIGHT JOIN orders o ON c.id = o.customer_id;
```

*Hint:* RIGHT JOIN keeps every order.

**Answer:** `5 rows`

All 5 orders are kept. Orders 101-104 have matching customers. Order 105 has customer_id=7 (no match) so customer columns are NULL. Total: 5 rows.

### Q4. [Easy] What is the result count of this CROSS JOIN? customers has 5 rows, products has 2 rows.

```
SELECT * FROM customers CROSS JOIN products;
```

*Hint:* CROSS JOIN multiplies row counts.

**Answer:** `10 rows`

CROSS JOIN produces the cartesian product: 5 x 2 = 10 rows, every customer paired with every product.

### Q5. [Easy] Which customers appear in the result?

```
SELECT c.name
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
WHERE o.id IS NULL;
```

*Hint:* This is the 'customers with no orders' pattern.

**Answer:** `Meera Iyer`
`Vikram Singh`

LEFT JOIN keeps all customers. WHERE o.id IS NULL keeps only those without a matching order. Meera (id=4) and Vikram (id=5) have no orders.

### Q6. [Easy] True or False: `JOIN` and `INNER JOIN` mean the same thing in MySQL.

*Hint:* Think about default JOIN type in MySQL.

**Answer:** `True`

In MySQL, `JOIN` is shorthand for `INNER JOIN`. Writing `INNER` is optional but many teams prefer it for clarity.

### Q7. [Easy] What does this query compute?

```
SELECT c.name, COUNT(o.id) AS num_orders
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.name;
```

*Hint:* LEFT JOIN + COUNT on the right key.

**Answer:** `Number of orders for each customer, including 0 for customers without orders`

LEFT JOIN keeps every customer. COUNT(o.id) ignores NULLs, so customers with no orders get 0. Meera and Vikram would show num_orders = 0.

### Q8. [Easy] What is the output of this query given our sample data?

```
SELECT COUNT(*) 
FROM customers c
JOIN orders o ON c.id = o.customer_id;
```

*Hint:* INNER JOIN rows.

**Answer:** `4`

4 matching rows (Aarav x2, Priya, Rohan). Orders 105 and customers Meera/Vikram are excluded.

### Q9. [Easy] What is the keyword to join two tables and return only matching rows?

*Hint:* The default JOIN.

**Answer:** `INNER JOIN` (or just `JOIN`)

INNER JOIN returns only rows that satisfy the ON condition on both sides. JOIN without a qualifier means INNER JOIN.

### Q10. [Medium] What does this query return given our sample data?

```
SELECT c.name, SUM(o.amount) AS total
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.name
HAVING total IS NULL;
```

*Hint:* SUM of NULL values is NULL, not 0.

**Answer:** `Meera Iyer (total NULL)`
`Vikram Singh (total NULL)`

SUM over an empty set (no matching orders) returns NULL, not 0. HAVING total IS NULL keeps exactly the customers with no orders. Equivalent to the LEFT JOIN + IS NULL pattern but using aggregates.

### Q11. [Medium] Why does this give no error but wrong results?

```
SELECT c.name, o.amount
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
WHERE o.amount > 500;
```

*Hint:* WHERE on right-table column after LEFT JOIN.

**Answer:** `The WHERE filter drops rows where amount is NULL, converting LEFT JOIN into INNER JOIN. Customers with no orders disappear.`

NULL > 500 is not true, so Meera and Vikram (with NULL amount from LEFT JOIN) are filtered out. To preserve LEFT JOIN behavior, move the amount condition into the ON clause: `ON c.id = o.customer_id AND o.amount > 500`.

### Q12. [Medium] What does this query find? (assume standard customers/orders tables)

```
SELECT DISTINCT c.name
FROM customers c
JOIN orders o ON c.id = o.customer_id
WHERE o.amount > 2000;
```

*Hint:* Distinct customers with at least one high-value order.

**Answer:** `Aarav Kumar (order 102, 2300) and Rohan Mehta (order 104, 5400)`

INNER JOIN pairs each order with its customer. The WHERE keeps only orders over 2000. DISTINCT prevents Aarav from appearing twice if he had multiple qualifying orders.

### Q13. [Medium] What does this return?

```
SELECT c.city, COUNT(DISTINCT c.id) AS customer_count,
       COUNT(o.id) AS order_count
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.city;
```

*Hint:* Group by city, count distinct customers and total orders.

**Answer:** `Each city with its customer count and total order count. Cities with no orders show order_count=0.`

GROUP BY city produces one row per city. COUNT(DISTINCT c.id) counts unique customers even if duplicated by JOIN. COUNT(o.id) naturally skips NULL order IDs.

### Q14. [Medium] Which JOIN should you use for 'show every department and its employees, including empty departments'?

*Hint:* Every department must appear, even empty ones.

**Answer:** `LEFT JOIN from departments to employees`

Driving from departments with LEFT JOIN ensures every department is listed. Empty departments get NULL employee columns. INNER JOIN would drop empty departments.

### Q15. [Medium] What is wrong with this query?

```
SELECT name, amount
FROM customers
JOIN orders ON customers.id = orders.customer_id;
```

*Hint:* Two tables have a column named 'name' or similar? What about id?

**Answer:** `No error here because only customers has 'name' and only orders has 'amount'. But the query breaks readability; always qualify columns in JOIN queries.`

The query works because 'name' and 'amount' are unique across both tables. The moment you add a shared column like 'id', it fails with 'Column is ambiguous'. Best practice: always write c.name, o.amount with table aliases.

### Q16. [Medium] How many rows does this produce given our sample tables?

```
SELECT c.id
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
UNION
SELECT c.id
FROM customers c
RIGHT JOIN orders o ON c.id = o.customer_id;
```

*Hint:* UNION removes duplicates. Think about the distinct customer IDs produced.

**Answer:** `6 rows`

LEFT JOIN side produces customer IDs 1,2,3,4,5. RIGHT JOIN side produces 1,2,3 and NULL (for order 105). UNION dedupes: {1,2,3,4,5,NULL} = 6 rows.

### Q17. [Medium] Why does `COUNT(*)` vs `COUNT(o.id)` differ on a LEFT JOIN?

*Hint:* NULL handling in COUNT.

**Answer:** `COUNT(*) counts all rows including unmatched ones (where o.id is NULL). COUNT(o.id) ignores NULLs, giving only matched rows.`

For a customer with no orders in a LEFT JOIN, the row still appears (once) with NULLs. COUNT(*) counts it; COUNT(o.id) skips it. This is why reports use COUNT(o.id) to get 'actual order count per customer'.

### Q18. [Medium] Predict the output count for this query given 3 customers with 2, 3, and 0 orders respectively, using INNER JOIN.

*Hint:* Only matching rows.

**Answer:** `5 rows`

INNER JOIN produces one row per matching (customer, order) pair: 2 + 3 + 0 = 5 rows. The third customer (0 orders) contributes nothing.

### Q19. [Hard] What is the output of this query given our sample data?

```
SELECT c.name, o.amount
FROM customers c
LEFT JOIN orders o 
  ON c.id = o.customer_id AND o.amount > 1000
ORDER BY c.id;
```

*Hint:* The amount filter is in ON, not WHERE.

**Answer:** `Aarav 1500, Aarav 2300, Priya NULL, Rohan 5400, Meera NULL, Vikram NULL`

With the filter in ON, customers without qualifying orders still appear (just with NULL). Priya's only order (800) fails the >1000 test, so she matches nothing and appears once with NULL. If the filter were in WHERE, Priya, Meera, and Vikram would all be dropped.

### Q20. [Hard] What does this query find?

```
SELECT c.name
FROM customers c
WHERE NOT EXISTS (
    SELECT 1 FROM orders o WHERE o.customer_id = c.id
);
```

*Hint:* NOT EXISTS equivalent of LEFT JOIN + IS NULL.

**Answer:** `Meera Iyer, Vikram Singh`

NOT EXISTS finds customers who have no matching order. Same result as `LEFT JOIN ... WHERE o.id IS NULL`. Both patterns are valid; NOT EXISTS can be faster on large tables and handles NULLs better than NOT IN.

## Mixed Questions

### Q1. [Easy] Which JOIN returns rows only when both tables have matching values?

*Hint:* The default JOIN.

**Answer:** `INNER JOIN`

INNER JOIN (or plain JOIN) returns only the intersection — rows where the ON condition is true on both sides.

### Q2. [Easy] Which JOIN keeps all rows from the left table even if there is no match on the right?

*Hint:* All-left-rows join.

**Answer:** `LEFT JOIN` (or LEFT OUTER JOIN)

LEFT JOIN retains every row from the left table. Right-side columns become NULL when there is no match.

### Q3. [Easy] Does MySQL support FULL OUTER JOIN directly?

*Hint:* MySQL specifically.

**Answer:** `No. MySQL does not support FULL OUTER JOIN. Simulate with LEFT JOIN UNION RIGHT JOIN.`

PostgreSQL, SQL Server, and Oracle support FULL OUTER JOIN natively. MySQL users must write the UNION workaround.

### Q4. [Easy] What is the result size of CROSS JOIN between a table with 100 rows and a table with 50 rows?

*Hint:* Cartesian product.

**Answer:** `5000 rows`

CROSS JOIN produces every combination: 100 * 50 = 5000.

### Q5. [Easy] What does this query do?

```
SELECT c.name, o.id
FROM customers c, orders o
WHERE c.id = o.customer_id;
```

*Hint:* This is the old implicit join syntax.

**Answer:** `Same as INNER JOIN — returns matching customer/order pairs.`

Implicit join (comma in FROM + WHERE condition) is equivalent to INNER JOIN. Avoid it in new code because forgetting the WHERE gives a cartesian product. Modern style: explicit JOIN ... ON.

### Q6. [Medium] What is the output given customers(1,2,3,4,5) and orders with customer_ids (1,1,2,3,7)?

```
SELECT COUNT(*) FROM customers c
RIGHT JOIN orders o ON c.id = o.customer_id;
```

*Hint:* RIGHT JOIN keeps every order.

**Answer:** `5`

Every order appears once (5 orders total), including order with customer_id=7 which has NULL customer info.

### Q7. [Medium] Find customers in Bengaluru who have at least one order. Write the query.

*Hint:* JOIN + WHERE on city + DISTINCT.

**Answer:** ```
SELECT DISTINCT c.name
FROM customers c
JOIN orders o ON c.id = o.customer_id
WHERE c.city = 'Bengaluru';
```

INNER JOIN ensures the customer has at least one order. WHERE filters to Bengaluru. DISTINCT removes duplicates if a customer has multiple orders.

### Q8. [Medium] Write a query to find each customer's most recent order date. Customers without orders should still appear.

*Hint:* LEFT JOIN + MAX + GROUP BY.

**Answer:** ```
SELECT c.name, MAX(o.order_date) AS last_order
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.name;
```

LEFT JOIN keeps every customer. MAX returns the latest date, or NULL if no orders exist. Customers without orders show last_order = NULL.

### Q9. [Medium] What is the difference between ON and WHERE in a LEFT JOIN?

*Hint:* Think about when filtering happens.

**Answer:** `ON filters during the join — unmatched rows from the left table are still kept (as NULL). WHERE filters after the join — it can drop those NULL rows, effectively turning LEFT JOIN into INNER JOIN.`

ON is part of the JOIN mechanism itself. WHERE is a post-join filter. When filtering the right table in a LEFT JOIN, use ON to preserve LEFT JOIN semantics. INNER JOIN treats ON and WHERE identically.

### Q10. [Medium] Why is RIGHT JOIN rarely used in production code?

*Hint:* Readability and team conventions.

**Answer:** `Any RIGHT JOIN can be rewritten as LEFT JOIN by swapping the table order. LEFT JOIN reads more naturally because the 'main' table is on the left.`

Query readers parse tables left-to-right. LEFT JOIN clearly says 'starting from this table, add matches from another.' RIGHT JOIN forces mental flipping. Coding style guides at most companies mandate LEFT JOIN over RIGHT JOIN.

### Q11. [Hard] Write a query to find the most valuable customer (highest total spend).

*Hint:* GROUP BY customer, ORDER BY total DESC, LIMIT 1.

**Answer:** ```
SELECT c.name, SUM(o.amount) AS total
FROM customers c
JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.name
ORDER BY total DESC
LIMIT 1;
```

INNER JOIN because we want customers with orders. GROUP BY customer. SUM amounts. ORDER BY DESC and LIMIT 1 gives the top spender. Result on sample data: Rohan Mehta, 5400.00.

### Q12. [Hard] Given customers (5 rows) and orders (5 rows, one with invalid customer_id=7), what is the result count of a MySQL FULL OUTER JOIN simulation?

*Hint:* LEFT JOIN UNION RIGHT JOIN; UNION deduplicates.

**Answer:** `7 distinct rows`

LEFT side: 4 matched + 2 unmatched customers = 6 rows. RIGHT side: 4 matched + 1 orphan order = 5 rows. UNION removes duplicates for the 4 common matched rows, giving 4 + 2 + 1 = 7 distinct rows.

## Multiple Choice Questions

### Q1. [Easy] Which JOIN returns only rows with matching values in both tables?

**Answer:** C

**C is correct.** INNER JOIN returns only rows where the ON condition matches on both sides. A, B, D all keep non-matching rows by design.

### Q2. [Easy] Which JOIN keeps every row from the left table even if there is no match?

**Answer:** B

**B is correct.** LEFT JOIN preserves every row from the left table. Right-side columns are NULL when no match exists.

### Q3. [Easy] What does `SELECT * FROM a CROSS JOIN b` return when a has 10 rows and b has 4 rows?

**Answer:** C

**C is correct.** CROSS JOIN produces the cartesian product: every row of a combined with every row of b = 10 * 4 = 40 rows.

### Q4. [Easy] Which statement is TRUE about MySQL and FULL OUTER JOIN?

**Answer:** B

**B is correct.** MySQL has no native FULL OUTER JOIN. Simulate it with `LEFT JOIN ... UNION RIGHT JOIN ...`. PostgreSQL and SQL Server support it natively.

### Q5. [Easy] Which keyword is used to specify the join condition?

**Answer:** C

**C is correct.** The ON clause specifies how tables are matched. WHERE filters rows after the join; HAVING filters groups; WITH defines CTEs.

### Q6. [Easy] If INNER JOIN and JOIN are written, what is the difference in MySQL?

**Answer:** B

**B is correct.** In MySQL, JOIN and INNER JOIN are synonyms. INNER is optional. Use whichever feels clearer.

### Q7. [Easy] After a LEFT JOIN, what do unmatched right-table columns contain?

**Answer:** C

**C is correct.** Unmatched right rows in a LEFT JOIN produce NULL for every right-table column. Use COALESCE or IFNULL to replace with a default value.

### Q8. [Medium] Which query finds customers with no orders?

**Answer:** B

**B is correct.** LEFT JOIN keeps every customer. WHERE orders.id IS NULL keeps only those without a matching order. A would produce no rows (INNER JOIN drops NULLs). C is wrong direction. D is cartesian.

### Q9. [Medium] Given 10 customers and 5 orders (all with valid customer_ids), how many rows does INNER JOIN return?

**Answer:** B

**B is correct.** INNER JOIN returns one row per matching pair. If each of the 5 orders matches exactly one customer, the result is 5 rows (not 10 — unmatched customers are dropped).

### Q10. [Medium] What happens when you filter a LEFT JOIN's right table in WHERE?

**Answer:** B

**B is correct.** Any comparison with NULL is not true. So unmatched rows (with NULL in right columns) get dropped by WHERE, effectively making the LEFT JOIN act like INNER JOIN. Move filters to ON or add IS NULL checks in WHERE.

### Q11. [Medium] Which query correctly counts the number of orders per customer including customers with zero orders?

**Answer:** B

**B is correct.** LEFT JOIN keeps every customer. COUNT(o.id) returns 0 for unmatched rows (COUNT ignores NULLs). C is almost right but COUNT(*) would return 1 for customers with no orders (counting the NULL row). D uses INNER JOIN and drops zero-order customers.

### Q12. [Medium] What is the result of `USING (customer_id)` vs `ON a.customer_id = b.customer_id`?

**Answer:** A

**A is correct.** USING is shorthand when both tables have a column with the exact same name (the joined column appears only once in the result). ON accepts any boolean expression and does not require matching column names.

### Q13. [Medium] What does this query return? 

```
SELECT COUNT(*) FROM customers c LEFT JOIN orders o ON c.id = o.customer_id;
```

 Given 5 customers and 4 orders (each matching a distinct customer).

**Answer:** B

**B is correct.** 4 matched rows + 1 unmatched customer = 5 rows total. Every customer appears at least once.

### Q14. [Hard] Which pattern correctly simulates FULL OUTER JOIN in MySQL?

**Answer:** B

**B is correct.** MySQL does not support FULL OUTER JOIN natively. UNION of LEFT JOIN and RIGHT JOIN (UNION deduplicates automatically) gives the correct result. A would fail; C is cartesian; D is nonsense.

### Q15. [Hard] A table of 10,000 rows is CROSS JOINed with a table of 1,000 rows. What is the result size and is this safe?

**Answer:** C

**C is correct.** 10,000 * 1,000 = 10 million rows. This will likely hang your session and stress disk/memory. CROSS JOIN without a filter on large tables is an anti-pattern.

## Coding Challenges

### Challenge 1. List Customers With Their Orders

**Difficulty:** Easy

Given the sample customers and orders tables, write a query that lists each order along with the customer's name and city. Use INNER JOIN.

**Solution:**

```sql
SELECT c.name, c.city, o.id AS order_id, o.amount, o.order_date
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id
ORDER BY c.name, o.order_date;
```

INNER JOIN matches each order to its customer. Alias tables for readability. Order by name and date for a clean report.

### Challenge 2. Find Customers With No Orders

**Difficulty:** Easy

Write a query that lists all customers who have never placed an order.

**Solution:**

```sql
SELECT c.id, c.name, c.city
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
WHERE o.id IS NULL;
```

LEFT JOIN keeps every customer. WHERE on the right-table primary key (o.id) being NULL finds unmatched rows — i.e., customers without orders.

### Challenge 3. Total Revenue Per City

**Difficulty:** Medium

Calculate the total revenue from each city. Cities with no orders should still appear with 0.

**Solution:**

```sql
SELECT c.city, COALESCE(SUM(o.amount), 0) AS total_revenue
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.city
ORDER BY total_revenue DESC;
```

LEFT JOIN so every city appears. GROUP BY city. SUM with COALESCE converts NULL (from customers with no orders) into 0.

### Challenge 4. Most Valuable Customer

**Difficulty:** Medium

Find the customer who has spent the most in total.

**Solution:**

```sql
SELECT c.name, SUM(o.amount) AS total_spent
FROM customers c
JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.name
ORDER BY total_spent DESC
LIMIT 1;
```

INNER JOIN because a customer with no orders cannot be the top spender. Group by customer, sum amounts, sort descending, take the first.

### Challenge 5. Customers Who Placed Orders Over 2000

**Difficulty:** Medium

Find the distinct names of customers who have placed at least one order of amount greater than 2000.

**Solution:**

```sql
SELECT DISTINCT c.name
FROM customers c
JOIN orders o ON c.id = o.customer_id
WHERE o.amount > 2000;
```

INNER JOIN pairs customers with orders. WHERE filters to high-value orders. DISTINCT prevents a customer with multiple qualifying orders from appearing multiple times.

### Challenge 6. Orphan Orders Detection

**Difficulty:** Hard

Find all orders whose customer_id does NOT exist in the customers table. Return order_id, customer_id, and amount.

**Solution:**

```sql
SELECT o.id AS order_id, o.customer_id, o.amount
FROM orders o
LEFT JOIN customers c ON c.id = o.customer_id
WHERE c.id IS NULL;
```

Drive from orders with LEFT JOIN to customers. If customers.id is NULL after the join, the order is an orphan (bad referential integrity). This query helps find data quality issues.

### Challenge 7. Simulate FULL OUTER JOIN

**Difficulty:** Hard

Return every customer and every order, matching where possible. Include unmatched customers (NULL order info) and orphan orders (NULL customer info).

**Solution:**

```sql
SELECT c.id AS cust_id, c.name, o.id AS order_id, o.amount
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
UNION
SELECT c.id, c.name, o.id, o.amount
FROM customers c
RIGHT JOIN orders o ON c.id = o.customer_id;
```

UNION of LEFT JOIN (keeps unmatched customers) and RIGHT JOIN (keeps unmatched orders). UNION removes the duplicate matched rows automatically.

### Challenge 8. Common Customers Across Two Periods

**Difficulty:** Hard

Using the orders table, find customers who placed orders in BOTH January 2026 and February 2026.

**Solution:**

```sql
SELECT DISTINCT c.name
FROM customers c
JOIN orders o1 ON c.id = o1.customer_id
     AND o1.order_date BETWEEN '2026-01-01' AND '2026-01-31'
JOIN orders o2 ON c.id = o2.customer_id
     AND o2.order_date BETWEEN '2026-02-01' AND '2026-02-28';
```

Double JOIN: one join for January orders, another for February. A customer appearing in both means the join succeeds on both sides. On sample data only Aarav qualifies (orders 101 Jan, 102 Feb).

---

*Notes: https://learn.modernagecoders.com/resources/sql/joins-inner-and-outer/*
