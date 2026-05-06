---
title: "Practice: Self Joins and Multi-Table Queries"
description: "49 practice problems for Self Joins and Multi-Table Queries in SQL"
slug: self-joins-and-multi-table-practice
canonical: https://learn.modernagecoders.com/resources/sql/self-joins-and-multi-table/practice/
category: "SQL"
---
# Practice: Self Joins and Multi-Table Queries

**Total questions:** 49

## Topic-Specific Questions

### Q1. [Easy] Given the employees table with 7 rows, how many rows does this return?

```
SELECT e.name, m.name
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;
```

*Hint:* LEFT JOIN keeps every employee. CEO has NULL manager.

**Answer:** `7 rows`

Every employee appears once. The CEO (Ananya) has NULL for manager. All 6 other employees have their manager resolved.

### Q2. [Easy] How many rows does this return given the same employees table?

```
SELECT e.name, m.name
FROM employees e
JOIN employees m ON e.manager_id = m.id;
```

*Hint:* INNER JOIN drops rows with NULL manager_id.

**Answer:** `6 rows`

INNER JOIN requires a matching manager. The CEO (manager_id = NULL) has no match and is dropped. 7 - 1 = 6.

### Q3. [Easy] Which employee earns more than their manager?

*Hint:* Sample data: Divya (190k) reports to Rahul (180k).

**Answer:** `Divya Nair (190000) - Rahul Verma (180000)`

Only Divya's salary (190000) exceeds her manager Rahul's salary (180000). This shows up as the single row from the classic `e.salary > m.salary` self-join query.

### Q4. [Easy] How many direct reports does Ananya (CEO) have?

*Hint:* Count employees where manager_id = 1.

**Answer:** `2 (Rahul Verma, Sneha Kapoor)`

Only Rahul (id=2) and Sneha (id=3) have manager_id = 1. Arjun and Divya report to Rahul, not to Ananya directly.

### Q5. [Easy] How many tables are joined in this query?

```
SELECT c.name, p.name
FROM customers c
JOIN orders o       ON c.id = o.customer_id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p     ON oi.product_id = p.id;
```

*Hint:* Count the tables in FROM and JOIN.

**Answer:** `4 tables (customers, orders, order_items, products)`

FROM introduces one table. Each JOIN adds one more. 1 + 3 = 4 tables in total. This is a standard 4-table e-commerce report.

### Q6. [Easy] True or False: A self join requires at least two different aliases for the same table.

*Hint:* Otherwise columns are ambiguous.

**Answer:** `True`

Without distinct aliases, MySQL raises: 'Not unique table/alias: employees'. You need e and m (or any two different names).

### Q7. [Easy] What is the problem with this old-style join?

```
SELECT c.name, o.id
FROM customers c, orders o
WHERE c.id = o.customer_id;
```

*Hint:* Modern style vs implicit style.

**Answer:** `It works but is discouraged. Forgetting the WHERE creates a cartesian product. Modern style: FROM customers c JOIN orders o ON c.id = o.customer_id.`

Comma-join requires the filter in WHERE. Any typo or omission silently produces a cartesian product. Explicit JOIN ... ON is safer and allows OUTER JOINs.

### Q8. [Medium] What does this query return on the sample customers/orders/order_items data?

```
SELECT c.name, SUM(oi.qty * oi.price) AS total
FROM customers c
JOIN orders o       ON c.id = o.customer_id
JOIN order_items oi ON o.id = oi.order_id
GROUP BY c.id, c.name;
```

*Hint:* Sum line totals per customer.

**Answer:** `Aarav Kumar: 56000.00, Priya Sharma: 1000.00`

Aarav: 1*55000 + 2*500 = 56000. Priya: 5*200 = 1000. GROUP BY customer, SUM of line totals.

### Q9. [Medium] What does this self-join query produce?

```
SELECT e.name
FROM employees e
JOIN employees m ON e.manager_id = m.id
WHERE m.name = 'Sneha Kapoor';
```

*Hint:* Employees whose manager is Sneha.

**Answer:** `Karthik Raja, Pooja Menon`

Sneha's direct reports are the Marketing staff whose manager_id = 3 (Sneha's id). That's Karthik and Pooja.

### Q10. [Medium] What does this query count?

```
SELECT m.name, COUNT(e.id) AS reports
FROM employees m
LEFT JOIN employees e ON e.manager_id = m.id
GROUP BY m.id, m.name;
```

*Hint:* LEFT JOIN on the 'manager side'.

**Answer:** `Number of direct reports per employee (0 if none).`

Every employee appears as a potential manager. LEFT JOIN + COUNT(e.id) gives 0 for individual contributors and the direct-report count otherwise.

### Q11. [Medium] Why does this return 0 rows instead of the CEO?

```
SELECT e.name
FROM employees e
JOIN employees m ON e.manager_id = m.id
WHERE e.name = 'Ananya Reddy';
```

*Hint:* CEO has NULL manager_id.

**Answer:** `Ananya's manager_id is NULL, so the INNER JOIN finds no match and drops her row.`

To include the CEO, use LEFT JOIN (manager name will be NULL) or filter with WHERE e.manager_id IS NULL.

### Q12. [Medium] What does this query do?

```
SELECT e1.name, e2.name
FROM employees e1
JOIN employees e2
  ON e1.department = e2.department
 AND e1.id <> e2.id;
```

*Hint:* Same department, different people.

**Answer:** `Every ordered pair of co-workers in the same department. Includes both (A,B) and (B,A).`

Without the `id < id` restriction, each pair appears twice. Use `e1.id < e2.id` for unique unordered pairs.

### Q13. [Medium] How many rows does this return for the sample employees table?

```
SELECT e1.name, e2.name
FROM employees e1
JOIN employees e2
  ON e1.department = e2.department
 AND e1.id < e2.id;
```

*Hint:* 3 Engineering + 3 Marketing + 1 CEO (alone). Pairs = C(3,2) + C(3,2) + 0.

**Answer:** `6 rows`

Engineering has 3 people (Rahul, Arjun, Divya): C(3,2) = 3 pairs. Marketing has 3 (Sneha, Karthik, Pooja): 3 pairs. CEO is alone in her 'department': 0 pairs. Total: 6.

### Q14. [Hard] What does this three-level self join return?

```
SELECT e.name, gm.name AS grandmanager
FROM employees e
JOIN employees m  ON e.manager_id = m.id
JOIN employees gm ON m.manager_id = gm.id;
```

*Hint:* Employee -> manager -> grandmanager. INNER JOIN requires all three.

**Answer:** `Only employees at depth >= 2 with their grandmanager. Arjun -> Rahul -> Ananya, Divya -> Rahul -> Ananya, Karthik -> Sneha -> Ananya, Pooja -> Sneha -> Ananya.`

INNER JOINs require each level to exist. Rahul and Sneha (reports to CEO directly) have no grandmanager, so they are dropped. CEO is also excluded. Result: 4 rows.

### Q15. [Hard] What is returned by this query given our sample tables?

```
SELECT c.name, p.category, SUM(oi.qty * oi.price) AS cat_total
FROM customers c
JOIN orders o       ON c.id = o.customer_id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p     ON oi.product_id = p.id
GROUP BY c.id, c.name, p.category;
```

*Hint:* Group by customer and category.

**Answer:** `Aarav / Electronics: 56000, Priya / Stationery: 1000`

Aarav bought Laptop (55000) and Mouse (1000), both Electronics = 56000. Priya bought 5 Notebooks at 200 each = 1000, Stationery category.

## Mixed Questions

### Q1. [Easy] What is a self join?

*Hint:* A table joined with...

**Answer:** `A JOIN where a table is joined with itself using two different aliases. Used for hierarchical or same-table relationships like employee-manager.`

Self join handles cases where a row refers to another row in the same table, like a foreign key from employees.manager_id to employees.id.

### Q2. [Easy] Why should you prefer LEFT JOIN over INNER JOIN for 'list all employees with their manager'?

*Hint:* Top of hierarchy.

**Answer:** `To include employees whose manager_id is NULL (like the CEO). INNER JOIN would drop them.`

Any row whose foreign key is NULL fails INNER JOIN. LEFT JOIN preserves it with NULLs on the right side.

### Q3. [Easy] What is the problem with NATURAL JOIN?

*Hint:* Silent behavior when schema changes.

**Answer:** `It silently joins on every same-named column. Adding a new column (like created_at) in both tables changes the join conditions unexpectedly.`

Explicit ON is always safer because it declares your intent and resists schema evolution surprises.

### Q4. [Easy] Does join order affect the final result for INNER JOINs?

*Hint:* Associative property.

**Answer:** `No. INNER JOINs are associative — (A JOIN B) JOIN C equals A JOIN (B JOIN C). Only performance may differ.`

The optimizer picks execution order. For readability, write JOINs in the order you think about the relationships.

### Q5. [Easy] Rewrite this as an explicit join: 

```
SELECT * FROM a, b WHERE a.id = b.a_id;
```

*Hint:* Use JOIN ... ON.

**Answer:** ```
SELECT * FROM a JOIN b ON a.id = b.a_id;
```

Explicit join is clearer, safer (cartesian products are harder to produce accidentally), and required for OUTER JOINs.

### Q6. [Medium] Write a query to find all employees managed by Sneha (directly or indirectly, up to 1 level deep).

*Hint:* Sneha has direct reports only.

**Answer:** ```
SELECT e.name
FROM employees e
JOIN employees m ON e.manager_id = m.id
WHERE m.name = 'Sneha Kapoor';
```

This gets direct reports (1 level deep). Karthik and Pooja. For arbitrary depth, use a recursive CTE.

### Q7. [Medium] Given customers, orders, and order_items, write a query to find total orders and total revenue per customer.

*Hint:* DISTINCT count of orders + SUM of line totals.

**Answer:** ```
SELECT c.name, COUNT(DISTINCT o.id) AS orders,
       SUM(oi.qty * oi.price) AS revenue
FROM customers c
JOIN orders o       ON c.id = o.customer_id
JOIN order_items oi ON o.id = oi.order_id
GROUP BY c.id, c.name;
```

COUNT(DISTINCT o.id) because the JOIN duplicates orders once per line item. Without DISTINCT, you'd count line items, not orders.

### Q8. [Medium] Given the sample data, what is Aarav's total revenue?

*Hint:* Order 101: 1 laptop @ 55000 + 2 mice @ 500.

**Answer:** `56000`

1 * 55000 + 2 * 500 = 55000 + 1000 = 56000.

### Q9. [Medium] Why does a multi-table JOIN sometimes count rows incorrectly?

*Hint:* Row duplication from joining one-to-many relationships.

**Answer:** `Because joining parents to children duplicates parent rows (one per child). Aggregations must use DISTINCT or GROUP BY correctly. COUNT(c.id) over a customer-orders-items join counts items, not customers.`

Always identify which level you want to count at. Use COUNT(DISTINCT c.id) for customers, COUNT(DISTINCT o.id) for orders, COUNT(oi.id) for items.

### Q10. [Medium] When does a self join become insufficient and you need a recursive CTE?

*Hint:* Think about hierarchy depth.

**Answer:** `When the depth of the hierarchy is unknown or variable. A self join handles exactly N levels by writing N-1 joins. A recursive CTE handles arbitrary depth in a single expression.`

For 'list all ancestors of X' or 'find all descendants of X', you need a recursive CTE because depth varies per row.

### Q11. [Hard] Write a query to find pairs of employees in the same department where one earns significantly more than the other (at least 50k difference).

*Hint:* Self join on department + salary difference condition.

**Answer:** ```
SELECT e1.name AS high_earner, e2.name AS low_earner,
       e1.department, e1.salary - e2.salary AS diff
FROM employees e1
JOIN employees e2
  ON e1.department = e2.department
 AND e1.salary >= e2.salary + 50000;
```

Self join on department. Compare salaries with a threshold. Condition `e1.salary >= e2.salary + 50000` picks pairs where the first earns at least 50k more.

### Q12. [Hard] Write a query that lists each product along with total units sold and which customers bought it.

*Hint:* Four-table join + GROUP_CONCAT (MySQL) or aggregation.

**Answer:** ```
SELECT p.name,
       SUM(oi.qty) AS units,
       GROUP_CONCAT(DISTINCT c.name ORDER BY c.name) AS buyers
FROM products p
LEFT JOIN order_items oi ON p.id = oi.product_id
LEFT JOIN orders o       ON oi.order_id = o.id
LEFT JOIN customers c    ON o.customer_id = c.id
GROUP BY p.id, p.name;
```

LEFT JOIN from products so products with no sales still appear. GROUP_CONCAT aggregates buyer names into a single string per product. DISTINCT handles customers who bought the same product multiple times.

## Multiple Choice Questions

### Q1. [Easy] What is a self join?

**Answer:** B

**B is correct.** Self join uses two aliases of the same table to represent two roles of the same entity (like employee and manager).

### Q2. [Easy] Why must you alias the table in a self join?

**Answer:** B

**B is correct.** Without distinct aliases, MySQL cannot tell which instance of the table a column refers to, producing the error 'Not unique table/alias'.

### Q3. [Easy] Which JOIN type should you use to list all employees with their manager, INCLUDING the CEO?

**Answer:** B

**B is correct.** The CEO has manager_id = NULL. LEFT JOIN keeps every employee and shows NULL for the CEO's manager. INNER JOIN would drop the CEO.

### Q4. [Easy] How do JOINs compose with 3 tables?

**Answer:** B

**B is correct.** JOINs are naturally chainable. Each additional JOIN brings in one more table with its own ON condition, all in the same query.

### Q5. [Easy] Is implicit join (FROM a, b WHERE ...) equivalent to INNER JOIN?

**Answer:** A

**A is correct.** When the WHERE supplies the matching condition, the result equals INNER JOIN. But explicit JOIN ... ON is preferred for clarity and safety.

### Q6. [Easy] Why is NATURAL JOIN risky?

**Answer:** B

**B is correct.** Adding a column with a common name (like created_at) to both tables silently adds a new join condition. The query may return different results without any obvious change.

### Q7. [Medium] What does this query find?

```
SELECT e.name FROM employees e JOIN employees m ON e.manager_id = m.id WHERE e.salary > m.salary;
```

**Answer:** B

**B is correct.** `e` is the employee, `m` is the manager. The WHERE filters for employees whose salary exceeds their manager's.

### Q8. [Medium] How do you get unique unordered pairs in a self join without duplicates?

**Answer:** C

**C is correct.** `e1.id < e2.id` eliminates both self-pairs and the reverse duplicate (A,B) vs (B,A).

### Q9. [Medium] In a customers -> orders -> order_items join, what would COUNT(*) return?

**Answer:** C

**C is correct.** The finest-grain table drives the row count after JOINs. COUNT(*) counts order items. Use COUNT(DISTINCT c.id) for customers, COUNT(DISTINCT o.id) for orders.

### Q10. [Medium] Which statement about JOIN order is TRUE?

**Answer:** B

**B is correct.** INNER JOINs are associative and commutative. The optimizer may choose a different execution plan, affecting speed. For readability, write JOINs in the order you naturally think about the relationships.

### Q11. [Medium] What does this produce?

```
SELECT m.name, COUNT(e.id) AS n FROM employees m LEFT JOIN employees e ON e.manager_id = m.id GROUP BY m.id, m.name;
```

**Answer:** B

**B is correct.** LEFT JOIN + COUNT on the 'reports side' gives zero for individual contributors. Every employee is treated as a potential manager.

### Q12. [Hard] A query joins 4 tables with 100 rows each. One JOIN condition is missing. How many rows could the result have?

**Answer:** C

**C is correct.** A missing JOIN condition on one table produces a partial cartesian: 100 * 100 * 100 * 100 = 100 million rows. This is why multi-table queries must be sanity-checked during development.

### Q13. [Hard] When would you choose a recursive CTE over a self join?

**Answer:** B

**B is correct.** Self join handles a known, fixed depth with N-1 joins. Recursive CTEs handle arbitrary depth. For 'find all ancestors' or 'all descendants', use recursive CTEs.

### Q14. [Hard] What is wrong with NATURAL JOIN in production code?

**Answer:** B

**B is correct.** Adding a column with a common name (e.g., created_at, updated_at) to both tables changes what NATURAL JOIN matches on — silently. Queries that worked yesterday return different results today. Always use explicit ON.

## Coding Challenges

### Challenge 1. Employees with Their Manager Name

**Difficulty:** Easy

Write a query that lists every employee with their manager's name. Include the CEO with NULL manager.

**Solution:**

```sql
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id
ORDER BY e.id;
```

LEFT JOIN preserves the CEO. Use aliases e (employee) and m (manager).

### Challenge 2. Employees Earning More Than Their Manager

**Difficulty:** Easy

Find all employees whose salary exceeds their manager's salary.

**Solution:**

```sql
SELECT e.name AS employee, e.salary, m.name AS manager, m.salary AS mgr_salary
FROM employees e
JOIN employees m ON e.manager_id = m.id
WHERE e.salary > m.salary;
```

INNER JOIN automatically excludes the CEO (NULL manager_id). Compare salaries.

### Challenge 3. Count Direct Reports Per Manager

**Difficulty:** Medium

For each employee, show the number of direct reports (0 for individual contributors).

**Solution:**

```sql
SELECT m.name AS manager, COUNT(e.id) AS reports
FROM employees m
LEFT JOIN employees e ON e.manager_id = m.id
GROUP BY m.id, m.name
ORDER BY reports DESC;
```

Every person is a potential manager. LEFT JOIN to reports. COUNT(e.id) is 0 for those with no reports.

### Challenge 4. Total Revenue Per Customer (3-Table Join)

**Difficulty:** Medium

Calculate total revenue per customer using customers, orders, and order_items.

**Solution:**

```sql
SELECT c.name, SUM(oi.qty * oi.price) AS revenue
FROM customers c
JOIN orders o       ON c.id = o.customer_id
JOIN order_items oi ON o.id = oi.order_id
GROUP BY c.id, c.name
ORDER BY revenue DESC;
```

Chain three tables. Aggregate by customer. Multiply qty by price for line total, sum over all customer lines.

### Challenge 5. Pairs of Employees in Same Department

**Difficulty:** Medium

List all unique pairs of employees who work in the same department. No self-pairs, no duplicates.

**Solution:**

```sql
SELECT e1.name AS emp1, e2.name AS emp2, e1.department
FROM employees e1
JOIN employees e2
  ON e1.department = e2.department
 AND e1.id < e2.id
ORDER BY e1.department, e1.id;
```

The id < id condition ensures uniqueness and no self-pairing. C(3,2) + C(3,2) = 6 pairs for our sample data.

### Challenge 6. Top-Selling Product Category

**Difficulty:** Hard

Using all 4 tables (customers, orders, order_items, products), find the product category with the highest total revenue.

**Solution:**

```sql
SELECT p.category, SUM(oi.qty * oi.price) AS revenue
FROM customers c
JOIN orders o       ON c.id = o.customer_id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p     ON oi.product_id = p.id
GROUP BY p.category
ORDER BY revenue DESC
LIMIT 1;
```

Join all four tables. Aggregate by product category. Sort descending by revenue and take the top one.

### Challenge 7. Employee, Manager, Grandmanager Chain

**Difficulty:** Hard

For each employee, show their manager and their manager's manager (grandmanager). Include all employees, even those at the top.

**Solution:**

```sql
SELECT e.name AS employee,
       m.name AS manager,
       gm.name AS grandmanager
FROM employees e
LEFT JOIN employees m  ON e.manager_id = m.id
LEFT JOIN employees gm ON m.manager_id = gm.id
ORDER BY e.id;
```

LEFT JOINs preserve employees at every level. CEO: both NULL. Rahul/Sneha: grandmanager NULL. Arjun/Divya/Karthik/Pooja: both filled.

### Challenge 8. Customers Who Have Never Ordered Electronics

**Difficulty:** Hard

Find customers who have placed orders but never bought anything in the 'Electronics' category.

**Solution:**

```sql
SELECT DISTINCT c.name
FROM customers c
JOIN orders o ON c.id = o.customer_id
WHERE NOT EXISTS (
    SELECT 1
    FROM order_items oi
    JOIN products p ON oi.product_id = p.id
    WHERE oi.order_id = o.id AND p.category = 'Electronics'
);
```

Outer query: customers who have placed at least one order. NOT EXISTS checks that no order_item in any of their orders is Electronics. An equivalent LEFT JOIN approach is also valid.

---

*Notes: https://learn.modernagecoders.com/resources/sql/self-joins-and-multi-table/*
