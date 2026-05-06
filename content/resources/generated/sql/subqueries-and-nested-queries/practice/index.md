---
title: "Practice: Subqueries (Nested Queries) and EXISTS"
description: "51 practice problems for Subqueries (Nested Queries) and EXISTS in SQL"
slug: subqueries-and-nested-queries-practice
canonical: https://learn.modernagecoders.com/resources/sql/subqueries-and-nested-queries/practice/
category: "SQL"
---
# Practice: Subqueries (Nested Queries) and EXISTS

**Total questions:** 51

## Topic-Specific Questions

### Q1. [Easy] What is a scalar subquery?

*Hint:* Think about the shape of the result.

**Answer:** `A subquery that returns a single value (1 row, 1 column). Can be used wherever SQL expects a single value.`

Scalar subqueries are the most common type. Example: `SELECT AVG(salary) FROM employees` returns one number.

### Q2. [Easy] What error does MySQL throw if a `=` subquery returns more than one row?

*Hint:* Error 1242.

**Answer:** `ERROR 1242 (21000): Subquery returns more than 1 row`

The `=` operator expects a scalar. To compare against multiple values, use IN.

### Q3. [Easy] What does EXISTS return?

*Hint:* Based on whether the subquery has rows.

**Answer:** `TRUE if the subquery produces at least one row, FALSE otherwise. Row contents do not matter — it only checks existence.`

Convention: write `SELECT 1 FROM ...` in EXISTS subqueries because the SELECT list is ignored.

### Q4. [Easy] What does this return given sample data (4 customers, 4 orders, Meera has no orders)?

```
SELECT name FROM customers
WHERE EXISTS (
    SELECT 1 FROM orders WHERE orders.customer_id = customers.id
);
```

*Hint:* Customers with at least one order.

**Answer:** `Aarav Kumar, Priya Sharma, Rohan Mehta`

EXISTS is true for customers who have at least one matching order. Meera has none and is excluded.

### Q5. [Easy] What does this return given sample data?

```
SELECT name FROM customers
WHERE id IN (SELECT customer_id FROM orders);
```

*Hint:* Same as EXISTS for this case.

**Answer:** `Aarav Kumar, Priya Sharma, Rohan Mehta`

IN filters to customers whose id appears in the orders.customer_id set. Same result as EXISTS when no NULLs are involved.

### Q6. [Easy] Given a table with salaries 100, 200, 300, 300, 400, what is the 3rd highest salary using DISTINCT?

*Hint:* Distinct values in descending order: 400, 300, 200.

**Answer:** `200`

DISTINCT values descending: 400, 300, 200, 100. The third is 200. Without DISTINCT, the third would be 300 (duplicate).

### Q7. [Easy] Is this a correlated or non-correlated subquery?

```
SELECT name FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

*Hint:* Does the inner query reference the outer query?

**Answer:** `Non-correlated`

The subquery is self-contained and does not reference the outer employees alias. MySQL evaluates it once.

### Q8. [Easy] Is this correlated or non-correlated?

```
SELECT e.name FROM employees e
WHERE e.salary > (SELECT AVG(e2.salary) FROM employees e2 WHERE e2.department = e.department);
```

*Hint:* Look for outer reference.

**Answer:** `Correlated`

The inner query references `e.department` from the outer query, so it runs once per outer row.

### Q9. [Easy] What error does this produce?

```
SELECT * FROM (SELECT department, AVG(salary) FROM employees GROUP BY department);
```

*Hint:* Missing something.

**Answer:** `ERROR 1248 (42000): Every derived table must have its own alias`

MySQL requires every FROM subquery to have an alias. Add `AS t` or similar.

### Q10. [Medium] Given sample employees, how many rows does this return?

```
SELECT name FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

*Hint:* Company avg is around 155,625.

**Answer:** `4 rows: Ananya (250k), Divya (190k), Rahul (180k), Sneha (170k)`

Avg = (250+180+190+120+170+110+95+130)/8 = 1,245,000/8 = 155,625. Four employees exceed this.

### Q11. [Medium] What does this return on the sample employees?

```
SELECT e.name, e.salary, e.department
FROM employees e
WHERE e.salary > (
    SELECT AVG(e2.salary) FROM employees e2
    WHERE e2.department = e.department
);
```

*Hint:* Per-department average. Engineering avg 185k, Marketing 125k, Sales 130k.

**Answer:** `Ananya (Eng 250k vs 185k), Divya (Eng 190k vs 185k), Sneha (Mkt 170k vs 125k). Note: Rahul 180k does NOT qualify (< 185k Eng avg).`

Correlated subquery compares each employee to their own department average. Rahul is slightly below Engineering's 185k average. Vikram is alone in Sales (130k vs 130k, not >).

### Q12. [Medium] Explain why this returns zero rows if any order has NULL customer_id:

```
SELECT name FROM customers
WHERE id NOT IN (SELECT customer_id FROM orders);
```

*Hint:* NULL comparisons are UNKNOWN.

**Answer:** `x NOT IN (list with NULL) expands to AND of x != each value. x != NULL is UNKNOWN, which combined with AND becomes UNKNOWN (treated as FALSE). So every row is filtered out.`

This is the single most famous SQL trap. Use NOT EXISTS to avoid it, or filter NULLs: `WHERE customer_id IS NOT NULL` inside the subquery.

### Q13. [Medium] What does this derive?

```
SELECT dept, avg_sal FROM (
    SELECT department AS dept, AVG(salary) AS avg_sal
    FROM employees GROUP BY department
) t
WHERE avg_sal > 150000;
```

*Hint:* Departments above 150k avg salary.

**Answer:** `Engineering (185k avg). Marketing 125k and Sales 130k do not qualify.`

Derived table computes per-department averages. Outer query filters those above 150k. Only Engineering qualifies.

### Q14. [Medium] What does this return?

```
SELECT name FROM employees
WHERE salary > ALL (
    SELECT salary FROM employees WHERE department = 'Marketing'
);
```

*Hint:* Greater than EVERY marketing salary. Marketing max is 170k.

**Answer:** `Ananya Reddy (250k), Divya Nair (190k), Rahul Verma (180k). Sneha at 170k is NOT strictly greater than 170k.`

> ALL means greater than every value in the set. Marketing salaries: 170, 110, 95. The filter is salary > 170. Only three employees qualify.

### Q15. [Hard] What is the 3rd highest distinct salary in the sample table?

*Hint:* Sort distinct salaries descending: 250k, 190k, 180k, 170k, ...

**Answer:** `180000 (Rahul Verma)`

Distinct descending: 250k, 190k, 180k. The third is 180000. Query: `SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 2`.

### Q16. [Hard] What does this return? 

```
SELECT name FROM employees e1
WHERE 2 = (
    SELECT COUNT(DISTINCT salary) FROM employees e2
    WHERE e2.salary >= e1.salary
);
```

*Hint:* Count of distinct salaries >= current employee's = 2 means current is 2nd highest.

**Answer:** `Divya Nair (salary 190000, the 2nd highest distinct salary)`

The correlated count says 'exactly 2 distinct salaries are >= mine,' meaning I am the 2nd highest. Ananya has count 1 (only her), Divya has count 2 (Ananya and herself), etc.

## Mixed Questions

### Q1. [Easy] Where can subqueries appear in an SQL statement?

*Hint:* Four clauses.

**Answer:** `SELECT, FROM, WHERE, HAVING. They can also appear in INSERT, UPDATE, and DELETE statements.`

Subqueries are extremely flexible. Wherever SQL expects a value (scalar), a list (IN), or a table (FROM), you can usually put a subquery.

### Q2. [Easy] What is the difference between EXISTS and IN?

*Hint:* Content vs existence.

**Answer:** `IN checks if a value equals any item in a list/subquery. EXISTS checks whether the subquery produces any row (row contents ignored). EXISTS handles NULLs better and often short-circuits on first match.`

Both can express 'has matching related records' but EXISTS is generally safer and often faster on large tables.

### Q3. [Easy] Convert this IN subquery to a JOIN: 

```
SELECT name FROM customers WHERE id IN (SELECT customer_id FROM orders);
```

*Hint:* INNER JOIN + DISTINCT.

**Answer:** ```
SELECT DISTINCT c.name
FROM customers c
JOIN orders o ON c.id = o.customer_id;
```

DISTINCT is needed because a customer with multiple orders would appear multiple times in the JOIN. IN automatically deduplicates.

### Q4. [Easy] Why is NOT EXISTS preferred over NOT IN?

*Hint:* NULL handling.

**Answer:** `NOT IN returns wrong (empty) results if the subquery contains NULL. NOT EXISTS is NULL-safe.`

In any production code with optional foreign keys, always use NOT EXISTS unless you carefully filter NULLs in the subquery.

### Q5. [Easy] What does ANY mean in SQL?

*Hint:* Compare to at least one.

**Answer:** `ANY returns TRUE if the comparison holds for AT LEAST ONE row in the subquery. = ANY is equivalent to IN.`

`salary > ANY (SELECT salary FROM interns)` is true if salary exceeds at least one intern. SOME is a synonym for ANY.

### Q6. [Medium] Write a query to find employees in the Engineering department whose salary is greater than the maximum salary in Marketing.

*Hint:* Scalar subquery with MAX.

**Answer:** ```
SELECT name, salary FROM employees
WHERE department = 'Engineering'
  AND salary > (SELECT MAX(salary) FROM employees WHERE department = 'Marketing');
```

Marketing max = 170k. Engineering employees above 170k: Ananya (250k), Divya (190k), Rahul (180k).

### Q7. [Medium] Write a query to find departments whose average salary is above the company average.

*Hint:* GROUP BY + HAVING + scalar subquery.

**Answer:** ```
SELECT department, AVG(salary) AS avg_sal
FROM employees
GROUP BY department
HAVING AVG(salary) > (SELECT AVG(salary) FROM employees);
```

Company avg ~155k. Engineering 185k qualifies. Marketing 125k, Sales 130k do not. HAVING filters aggregated groups.

### Q8. [Medium] Write a correlated subquery to find employees who are the highest paid in their own department.

*Hint:* Compare to max in same department.

**Answer:** ```
SELECT name, department, salary
FROM employees e
WHERE salary = (
    SELECT MAX(salary) FROM employees
    WHERE department = e.department
);
```

For each employee, the subquery finds the max salary in their department. Keep rows where salary equals that max. Results: Ananya (Eng), Sneha (Mkt), Vikram (Sales).

### Q9. [Medium] What is the NULL trap with NOT IN, and how do you avoid it?

*Hint:* x != NULL is UNKNOWN.

**Answer:** `If the subquery returns NULL, NOT IN is equivalent to an AND of x != each_value, including x != NULL which is UNKNOWN. AND with UNKNOWN is UNKNOWN (treated as FALSE), so no rows pass. Avoid by using NOT EXISTS, or filter NULLs out: ... WHERE col IS NOT NULL.`

This is the single most important SQL trap. Memorize the fix: NOT EXISTS is always safe.

### Q10. [Medium] Why might a correlated subquery be slower than a JOIN?

*Hint:* Per-row execution.

**Answer:** `A correlated subquery logically runs once per outer row. For N outer rows, the inner query may execute N times. A JOIN is a set operation processed once. Modern optimizers often rewrite correlated subqueries as semi-joins internally.`

In older MySQL versions, correlated subqueries could be very slow. MySQL 8.0+ optimizes many cases. Still, prefer JOINs when expressible and equally readable.

### Q11. [Hard] Write a query using a subquery in SELECT to show each employee's salary and the difference from their department's average.

*Hint:* Correlated scalar subquery per row.

**Answer:** ```
SELECT e.name, e.department, e.salary,
       e.salary - (
           SELECT AVG(e2.salary) FROM employees e2
           WHERE e2.department = e.department
       ) AS diff_from_dept_avg
FROM employees e;
```

For each employee, the correlated subquery computes their department average. Subtract to get the difference. Positive values: above-average earners.

### Q12. [Hard] Find the 2nd highest distinct salary per department.

*Hint:* Correlated subquery with COUNT DISTINCT.

**Answer:** ```
SELECT name, department, salary
FROM employees e1
WHERE 2 = (
    SELECT COUNT(DISTINCT e2.salary) FROM employees e2
    WHERE e2.department = e1.department AND e2.salary >= e1.salary
);
```

For each employee, count the distinct salaries >= theirs in the same department. Exactly 2 means they are the 2nd highest. More idiomatic: use DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC).

## Multiple Choice Questions

### Q1. [Easy] Which of the following is a scalar subquery?

**Answer:** B

**B is correct.** A scalar subquery returns a single value and can be used anywhere a value is expected (in SELECT, WHERE, HAVING).

### Q2. [Easy] What does EXISTS return?

**Answer:** B

**B is correct.** EXISTS is a boolean test — it only checks whether the subquery produced any rows; the contents are ignored.

### Q3. [Easy] Which operator is equivalent to `= ANY`?

**Answer:** C

**C is correct.** `= ANY` matches if equal to any value in the set, which is exactly what IN does.

### Q4. [Easy] What MySQL error occurs if a scalar `=` subquery returns multiple rows?

**Answer:** B

**B is correct.** MySQL strictly enforces single-row results for = comparisons against subqueries. Use IN, aggregates, or LIMIT.

### Q5. [Easy] Which is the safe way to find customers with no orders?

**Answer:** B

**B is correct.** NOT EXISTS handles NULLs gracefully. A is the well-known NULL trap; C is syntactically invalid; D fails if subquery returns multiple rows.

### Q6. [Easy] What is a correlated subquery?

**Answer:** B

**B is correct.** Correlation means the inner query depends on the outer query's current row, typically through a WHERE condition.

### Q7. [Easy] What requirement does MySQL impose on derived tables (subqueries in FROM)?

**Answer:** B

**B is correct.** MySQL requires every derived table to have an alias (e.g., `... ) AS t`). Without it: ERROR 1248.

### Q8. [Medium] What does this query compute?

```
SELECT name FROM employees WHERE salary > ALL (SELECT salary FROM employees WHERE department = 'Marketing');
```

**Answer:** B

**B is correct.** > ALL means greater than every value in the set. Equivalent to > MAX(...).

### Q9. [Medium] Why is NOT IN unsafe when the subquery may return NULL?

**Answer:** B

**B is correct.** Any comparison with NULL yields UNKNOWN. AND-ed with UNKNOWN keeps it UNKNOWN, which SQL treats as not-true. Every row is filtered out.

### Q10. [Medium] Which query finds the 2nd highest distinct salary?

**Answer:** B

**B is correct.** DISTINCT removes duplicate salaries, ORDER BY DESC puts highest first, OFFSET 1 skips the first, LIMIT 1 takes one — the 2nd highest distinct salary. A is invalid (aggregate with aggregate).

### Q11. [Medium] What does a subquery in the SELECT list typically do?

**Answer:** B

**B is correct.** A SELECT-list subquery returns one value per row and becomes an additional column. Often a correlated per-row computation or a global scalar.

### Q12. [Medium] A correlated subquery logically runs:

**Answer:** B

**B is correct.** Correlated subqueries depend on the current outer row, so they conceptually re-execute for each. Optimizers may transform them into more efficient forms.

### Q13. [Hard] Which query correctly finds employees who earn more than their department average?

**Answer:** C

**C is correct.** Correlated subquery per department. A is invalid (aggregate in WHERE). B compares to the global average. D misuses HAVING.

### Q14. [Hard] Why might EXISTS be faster than IN on very large tables?

**Answer:** B

**B is correct.** EXISTS only needs one matching row to return TRUE, allowing early termination. Modern optimizers often produce similar plans for both.

### Q15. [Hard] What is the canonical query for the Nth highest salary?

**Answer:** B

**B is correct.** DISTINCT + sorted descending + OFFSET N-1 + LIMIT 1 returns the Nth distinct salary. Alternative: DENSE_RANK window function.

## Coding Challenges

### Challenge 1. Employees Above Company Average

**Difficulty:** Easy

Write a query to find all employees whose salary is greater than the overall average salary.

**Solution:**

```sql
SELECT name, department, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees)
ORDER BY salary DESC;
```

Simple scalar subquery returning the company average. The outer query filters rows above that value.

### Challenge 2. Customers With at Least One Order

**Difficulty:** Easy

Use EXISTS to find customers who have placed at least one order.

**Solution:**

```sql
SELECT c.id, c.name
FROM customers c
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.customer_id = c.id
);
```

EXISTS short-circuits on first match. Correlated via customer_id = c.id.

### Challenge 3. 3rd Highest Salary

**Difficulty:** Medium

Find the 3rd highest distinct salary in the employees table.

**Solution:**

```sql
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 2;
```

OFFSET 2 skips the top two distinct salaries. LIMIT 1 takes the next. Result: 180000 (Rahul).

### Challenge 4. Employees Above Department Average

**Difficulty:** Medium

Using a correlated subquery, find employees whose salary is greater than the average salary of their own department.

**Solution:**

```sql
SELECT e.name, e.department, e.salary
FROM employees e
WHERE e.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.department = e.department
);
```

The inner query references e.department, making it correlated. For each row, compute that row's own department average.

### Challenge 5. Departments Above Company Average

**Difficulty:** Medium

Find departments whose average salary exceeds the company average.

**Solution:**

```sql
SELECT department, AVG(salary) AS avg_sal
FROM employees
GROUP BY department
HAVING AVG(salary) > (SELECT AVG(salary) FROM employees);
```

GROUP BY creates per-department aggregates. HAVING filters those groups by comparing to the global average.

### Challenge 6. Customers With No Orders (NOT EXISTS)

**Difficulty:** Hard

Find customers who have never placed an order. Use NOT EXISTS to avoid the NULL trap.

**Solution:**

```sql
SELECT c.id, c.name
FROM customers c
WHERE NOT EXISTS (
    SELECT 1 FROM orders o WHERE o.customer_id = c.id
);
```

NOT EXISTS handles NULL gracefully. NOT IN with NULL in subquery returns empty. Always prefer NOT EXISTS here.

### Challenge 7. Nth Highest via Correlated Subquery

**Difficulty:** Hard

Write a parametric query that returns the Nth highest distinct salary using a correlated subquery (no LIMIT).

**Solution:**

```sql
SELECT DISTINCT salary FROM employees e1
WHERE 3 = (
    SELECT COUNT(DISTINCT salary) FROM employees e2
    WHERE e2.salary >= e1.salary
);
```

For each distinct salary, count how many distinct salaries are >= it. If the count equals N, this salary is the Nth highest. Works on databases without OFFSET support.

### Challenge 8. Highest Paid in Each Department

**Difficulty:** Hard

List the highest-paid employee(s) in every department. Handle ties (multiple employees at the same max salary).

**Solution:**

```sql
SELECT name, department, salary
FROM employees e
WHERE salary = (
    SELECT MAX(salary) FROM employees e2
    WHERE e2.department = e.department
)
ORDER BY department;
```

For each row, compare to the max salary of its department. Rows equal to the max are kept. Ties produce multiple rows per department.

---

*Notes: https://learn.modernagecoders.com/resources/sql/subqueries-and-nested-queries/*
