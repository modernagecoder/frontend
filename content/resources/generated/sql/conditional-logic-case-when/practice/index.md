---
title: "Practice: Conditional Logic in SQL - CASE WHEN, IF, IFNULL"
description: "62 practice problems for Conditional Logic in SQL - CASE WHEN, IF, IFNULL in SQL"
slug: conditional-logic-case-when-practice
canonical: https://learn.modernagecoders.com/resources/sql/conditional-logic-case-when/practice
category: "SQL"
---
# Practice: Conditional Logic in SQL - CASE WHEN, IF, IFNULL

**Total questions:** 62

## Topic-Specific Questions

### Q1. [Easy] What does this return?

```
SELECT CASE WHEN 5 > 3 THEN 'yes' ELSE 'no' END;
```

*Hint:* 5 > 3 is TRUE.

**Answer:** `yes`

The WHEN condition is true, so THEN 'yes' is returned.

### Q2. [Easy] What is returned?

```
SELECT CASE WHEN 1 = 2 THEN 'a' END;
```

*Hint:* No match, no ELSE.

**Answer:** `NULL`

1 = 2 is false, and there is no ELSE clause. CASE returns NULL.

### Q3. [Easy] Output?

```
SELECT IFNULL(NULL, 'default');
```

*Hint:* IFNULL replaces NULL with the second argument.

**Answer:** `default`

When the first argument is NULL, IFNULL returns the second argument.

### Q4. [Easy] Output?

```
SELECT IFNULL('hello', 'default');
```

*Hint:* IFNULL returns the first argument when it is not NULL.

**Answer:** `hello`

Since 'hello' is not NULL, IFNULL returns it unchanged.

### Q5. [Easy] Output?

```
SELECT COALESCE(NULL, NULL, 'third', 'fourth');
```

*Hint:* COALESCE returns the first non-NULL argument.

**Answer:** `third`

COALESCE scans arguments left to right and returns the first one that is not NULL.

### Q6. [Easy] Output?

```
SELECT NULLIF(5, 5), NULLIF(5, 3);
```

*Hint:* NULLIF(a, b) returns NULL when a = b.

**Answer:** `NULL  5`

NULLIF(5, 5) — they are equal, returns NULL. NULLIF(5, 3) — different, returns 5.

### Q7. [Easy] Output?

```
SELECT IF(10 > 5, 'big', 'small');
```

*Hint:* Classic IF with true condition.

**Answer:** `big`

10 > 5 is TRUE, so IF returns the second argument 'big'.

### Q8. [Medium] Given marks = 62, what does this return?

```
SELECT CASE
  WHEN marks >= 90 THEN 'A'
  WHEN marks >= 75 THEN 'B'
  WHEN marks >= 60 THEN 'C'
  ELSE 'D'
END;
```

*Hint:* First match wins.

**Answer:** `C`

62 is not >= 90, not >= 75, but is >= 60, so the third WHEN matches and returns 'C'.

### Q9. [Medium] Output of this simple CASE?

```
SELECT CASE 'paid'
  WHEN 'paid'    THEN 1
  WHEN 'pending' THEN 2
  ELSE 3
END;
```

*Hint:* Simple CASE with equality matching.

**Answer:** `1`

The expression 'paid' equals the first WHEN value 'paid', so the result is 1.

### Q10. [Medium] What does this return when status IS NULL?

```
CASE status
  WHEN NULL THEN 'unknown'
  ELSE 'known'
END
```

*Hint:* Simple CASE uses = comparison.

**Answer:** `known`

Simple CASE compares with =, and NULL = NULL returns NULL (not TRUE). So the WHEN NULL branch never matches — ELSE runs. To check NULL, use searched CASE: `WHEN status IS NULL`.

### Q11. [Medium] Given these orders table rows: (101,'paid',1000), (101,'paid',500), (101,'pending',200), what does SUM(CASE WHEN status='paid' THEN amount ELSE 0 END) return?

*Hint:* Add only the 'paid' rows.

**Answer:** `1500`

1000 + 500 = 1500. The pending row contributes 0.

### Q12. [Medium] Given the same rows, what does COUNT(CASE WHEN status='paid' THEN 1 END) return?

*Hint:* COUNT ignores NULL.

**Answer:** `2`

Non-matching rows produce NULL (no ELSE), and COUNT skips NULL. Only the 2 paid rows are counted.

### Q13. [Medium] Output?

```
SELECT COALESCE(NULLIF('', ''), 'missing');
```

*Hint:* '' = '' is true.

**Answer:** `missing`

NULLIF('', '') returns NULL. COALESCE then returns 'missing' as the fallback. This is the standard way to treat empty strings as missing data.

### Q14. [Medium] Output?

```
SELECT 10 / NULLIF(0, 0);
```

*Hint:* NULLIF(0, 0) returns NULL.

**Answer:** `NULL`

NULLIF(0, 0) returns NULL. Division by NULL is NULL. This is the classic safe-division pattern.

### Q15. [Hard] Output?

```
SELECT CASE
  WHEN 1 THEN 'a'
  WHEN 1 THEN 'b'
  ELSE 'c'
END;
```

*Hint:* Two WHENs both match. Which wins?

**Answer:** `a`

CASE returns the first matching WHEN and stops. Even though the second WHEN would also match, it never gets evaluated.

### Q16. [Hard] Given amount = NULL, what does this return?

```
CASE
  WHEN amount > 1000 THEN 'big'
  WHEN amount <= 1000 THEN 'small'
  ELSE 'unknown'
END
```

*Hint:* Any comparison with NULL is NULL (not TRUE).

**Answer:** `unknown`

NULL > 1000 is NULL. NULL <= 1000 is NULL. Neither WHEN matches, so ELSE runs, returning 'unknown'. This is why you guard NULLs explicitly in the first WHEN when nulls are possible.

### Q17. [Medium] What is the difference between IFNULL and COALESCE?

*Hint:* Argument count and portability.

**Answer:** IFNULL takes exactly 2 arguments and is MySQL-specific. COALESCE takes 2 or more arguments, returns the first non-NULL, and is part of the SQL standard (works on every database). For portable code use COALESCE. IFNULL is slightly faster in MySQL but the difference is negligible.

Functionally, IFNULL(a, b) is identical to COALESCE(a, b). But COALESCE(a, b, c, d) is much more useful when you have a fallback chain.

### Q18. [Hard] Why does the conditional aggregation pattern SUM(CASE WHEN cond THEN val ELSE 0 END) work?

*Hint:* Think about what SUM adds and what 0 contributes.

**Answer:** SUM adds all non-NULL values. By writing ELSE 0, every non-matching row contributes 0 to the total — which is a no-op. Every matching row contributes its `val`. The end result is the sum of `val` only for rows where the condition is true. This lets you compute multiple filtered sums in a single pass of the table, which is the basis of SQL pivoting.

Alternative: omit ELSE (so non-matches become NULL) and SUM skips NULLs anyway. That works but has a corner case — if the GROUP has zero matching rows, SUM returns NULL instead of 0. ELSE 0 is safer.

### Q19. [Easy] Given employees(name, salary), write a query returning name, salary, and a 'band' column: 'Low' if < 40000, 'Mid' if < 80000, else 'High'.

*Hint:* Searched CASE with two WHENs and ELSE.

**Answer:** ```
SELECT name, salary,
  CASE
    WHEN salary < 40000 THEN 'Low'
    WHEN salary < 80000 THEN 'Mid'
    ELSE 'High'
  END AS band
FROM employees;
```

Ordered smallest first. ELSE catches everything 80000 and above.

### Q20. [Medium] Given orders(customer_id, status, amount), write a pivot returning per customer: total paid, total pending, and total failed.

*Hint:* Conditional aggregation with SUM + CASE.

**Answer:** ```
SELECT customer_id,
  SUM(CASE WHEN status = 'paid'    THEN amount ELSE 0 END) AS paid_total,
  SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS pending_total,
  SUM(CASE WHEN status = 'failed'  THEN amount ELSE 0 END) AS failed_total
FROM orders
GROUP BY customer_id;
```

One pass of the table builds three conditional columns. Works on any SQL database without a native PIVOT function.

### Q21. [Medium] Write a query that sorts orders by priority: 'urgent' first, then 'normal', then 'low'.

*Hint:* CASE in ORDER BY.

**Answer:** ```
SELECT *
FROM orders
ORDER BY
  CASE priority
    WHEN 'urgent' THEN 1
    WHEN 'normal' THEN 2
    WHEN 'low'    THEN 3
    ELSE 4
  END;
```

Assign integer sort keys via CASE. Alternative: `ORDER BY FIELD(priority, 'urgent', 'normal', 'low')`.

### Q22. [Medium] Given orders(id, amount, discount_pct), write a query returning the final price, treating NULL discount_pct as 0.

*Hint:* IFNULL + arithmetic.

**Answer:** ```
SELECT id, amount, discount_pct,
  amount * (1 - IFNULL(discount_pct, 0) / 100.0) AS final_price
FROM orders;
```

IFNULL guards against NULL propagation which would otherwise make final_price NULL for rows without a discount.

### Q23. [Hard] Given orders(customer_id, amount), compute the margin per customer where margin = SUM(profit)/SUM(revenue), treating customers with zero revenue as NULL margin instead of an error. Assume columns profit and revenue.

*Hint:* NULLIF for safe division.

**Answer:** ```
SELECT customer_id,
  SUM(profit)  AS total_profit,
  SUM(revenue) AS total_revenue,
  ROUND(SUM(profit) / NULLIF(SUM(revenue), 0), 4) AS margin
FROM orders
GROUP BY customer_id;
```

NULLIF converts zero revenue into NULL, making the division safely return NULL instead of raising a divide-by-zero in strict SQL mode.

### Q24. [Hard] Given users(id, age), bucket users into age groups: 'Teen' (13-17), 'Adult' (18-59), 'Senior' (60+), 'Other' (everyone else). Return counts per bucket.

*Hint:* CASE in both SELECT and GROUP BY.

**Answer:** ```
SELECT
  CASE
    WHEN age BETWEEN 13 AND 17 THEN 'Teen'
    WHEN age BETWEEN 18 AND 59 THEN 'Adult'
    WHEN age >= 60             THEN 'Senior'
    ELSE                           'Other'
  END AS age_group,
  COUNT(*) AS total
FROM users
GROUP BY age_group;
```

GROUP BY can reference the same CASE by its alias (MySQL-permissive). For maximum portability, repeat the CASE inside GROUP BY.

### Q25. [Hard] Why should you almost never write `WHERE CASE WHEN x THEN 1 ELSE 0 END = 1`?

*Hint:* Readability and indexes.

**Answer:** It is equivalent to `WHERE x`, just more verbose. It also prevents the optimizer from using an index on the underlying column because the CASE wraps the expression. The only time CASE in WHERE is justified is when the column being filtered actually changes per row (e.g., `CASE type WHEN 'daily' THEN days ELSE hours END > 10`). Otherwise, rewrite using AND/OR directly.

Boolean expressions are already usable in WHERE clauses — you don't need to translate them into 0/1 and compare.

## Mixed Questions

### Q1. [Easy] Output?

```
SELECT IF(NULL, 'yes', 'no');
```

*Hint:* NULL is neither true nor false.

**Answer:** `no`

IF treats NULL as false (non-true) and returns the false branch. This is different from strict boolean logic.

### Q2. [Easy] Output?

```
SELECT CASE WHEN 0 THEN 'a' ELSE 'b' END;
```

*Hint:* 0 is falsy in MySQL.

**Answer:** `b`

MySQL treats 0 as false. Non-zero values are true. The ELSE branch executes.

### Q3. [Medium] Given a row with marks=NULL, output of:

```
CASE
  WHEN marks IS NULL THEN 'absent'
  WHEN marks >= 40   THEN 'pass'
  ELSE 'fail'
END
```

*Hint:* First WHEN wins.

**Answer:** `absent`

The IS NULL check is the first WHEN and matches, so 'absent' is returned before any numeric comparison.

### Q4. [Medium] Given orders: (1,'paid',500), (2,'paid',200), (3,'failed',300), what does

```
SELECT SUM(IF(status='paid', amount, 0)) FROM orders;
```

return?

*Hint:* IF is a 2-branch shortcut for CASE.

**Answer:** `700`

500 + 200 = 700 from the two paid rows. The failed row contributes 0.

### Q5. [Medium] Given products(name, price, category), mark each product as 'Premium' if price > 10000, 'Standard' between 2000 and 10000, 'Budget' below 2000.

*Hint:* Searched CASE with three WHENs.

**Answer:** ```
SELECT name, price, category,
  CASE
    WHEN price > 10000 THEN 'Premium'
    WHEN price >= 2000 THEN 'Standard'
    ELSE 'Budget'
  END AS tier
FROM products;
```

Watch the boundary conditions. Price of exactly 2000 goes to Standard because of >=, and 10000 goes to Standard because the first WHEN uses >.

### Q6. [Medium] Given orders(customer_id, status, amount), return customers along with a flag 'HighValue' (sum paid > 10000) or 'LowValue'.

*Hint:* Conditional SUM inside a CASE in SELECT, after GROUP BY.

**Answer:** ```
SELECT customer_id,
  SUM(CASE WHEN status='paid' THEN amount ELSE 0 END) AS paid_total,
  CASE
    WHEN SUM(CASE WHEN status='paid' THEN amount ELSE 0 END) > 10000
      THEN 'HighValue'
    ELSE 'LowValue'
  END AS tier
FROM orders
GROUP BY customer_id;
```

You can nest CASE inside aggregates and aggregates inside CASE. Use the same CASE expression twice or wrap it in a subquery/CTE for cleaner code (Chapter 19).

### Q7. [Hard] For a row (name='Aarav', bonus=NULL, salary=50000), what does this return?

```
SELECT salary + IFNULL(bonus, 0) AS total
FROM employees;
```

*Hint:* NULL replaced by 0 before adding.

**Answer:** `50000`

IFNULL(bonus, 0) converts NULL to 0. 50000 + 0 = 50000. Without IFNULL the whole expression would be NULL.

### Q8. [Hard] Given a row (dept='sales', salary=80000), what does this return?

```
SELECT
  CASE dept
    WHEN 'sales'      THEN salary * 1.1
    WHEN 'engineering' THEN salary * 1.2
    ELSE salary
  END AS adjusted
FROM employees;
```

*Hint:* Simple CASE matches 'sales'.

**Answer:** `88000`

The dept equals 'sales', so salary * 1.1 = 80000 * 1.1 = 88000.

### Q9. [Hard] Given a feedback(rating) table where rating is 1-5, build a 'pivot' returning counts per rating value in a single row: rating_1, rating_2, rating_3, rating_4, rating_5.

*Hint:* Conditional COUNT for each value.

**Answer:** ```
SELECT
  COUNT(CASE WHEN rating = 1 THEN 1 END) AS rating_1,
  COUNT(CASE WHEN rating = 2 THEN 1 END) AS rating_2,
  COUNT(CASE WHEN rating = 3 THEN 1 END) AS rating_3,
  COUNT(CASE WHEN rating = 4 THEN 1 END) AS rating_4,
  COUNT(CASE WHEN rating = 5 THEN 1 END) AS rating_5
FROM feedback;
```

Without ELSE, non-matching rows give NULL and COUNT skips them. This is the simplest pivot possible in portable SQL.

### Q10. [Medium] Output?

```
SELECT COALESCE(NULL, '', 'third');
```

*Hint:* COALESCE returns the first non-NULL. Is empty string NULL?

**Answer:** `` (empty string)

Empty string is NOT NULL. COALESCE returns the first non-NULL argument, which is the empty string ''. Many developers confuse these — use `NULLIF(x, '')` first to treat empty strings as missing.

### Q11. [Hard] Why does COUNT(CASE WHEN cond THEN 1 END) count matches, but SUM(CASE WHEN cond THEN 1 END) also works — what is the difference?

*Hint:* COUNT counts rows; SUM adds values. They happen to give the same answer for this pattern.

**Answer:** Both produce the same integer when each matching row contributes 1. COUNT ignores NULLs (non-matching rows with no ELSE become NULL and get skipped). SUM adds NULLs as nothing, same result. COUNT is stylistically preferred because its name is self-documenting ('I am counting matches'), and it works without ELSE. SUM would be required if you want to add a variable amount per match (e.g., SUM(CASE WHEN cond THEN amount ELSE 0 END)).

Rule of thumb: use COUNT(CASE WHEN cond THEN 1 END) for counts, SUM(CASE WHEN cond THEN val ELSE 0 END) for totals.

## Multiple Choice Questions

### Q1. [Easy] Which keyword marks the default branch in a CASE expression?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** ELSE is used as the default branch in SQL's CASE. DEFAULT appears in column definitions, not CASE.

### Q2. [Easy] What does a CASE expression return when no WHEN matches and there is no ELSE?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** With no matching WHEN and no ELSE, CASE evaluates to NULL.

### Q3. [Easy] Which function is MySQL-specific and not part of the SQL standard?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** IFNULL is MySQL (also SQLite)-specific. COALESCE, NULLIF, and CASE are SQL-standard.

### Q4. [Easy] NULLIF(a, b) returns NULL when:

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** NULLIF returns NULL when a equals b, otherwise it returns a.

### Q5. [Easy] Which expression is equivalent to IF(x > 5, 'big', 'small')?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** A

**A is correct.** IF(cond, t, f) is equivalent to CASE WHEN cond THEN t ELSE f END. The ternary (?:) is not SQL.

### Q6. [Medium] In a simple CASE `CASE x WHEN NULL THEN ... END`, when does the NULL branch match?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** Simple CASE compares with =, and NULL = NULL evaluates to NULL, never TRUE. The branch is unreachable. Use searched CASE: `WHEN x IS NULL`.

### Q7. [Medium] Which is the canonical SQL pivot pattern for per-category totals?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** MySQL has no PIVOT operator, so conditional aggregation with SUM + CASE is the standard pattern.

### Q8. [Medium] If the condition `salary >= 40` is placed before `salary >= 75` in a CASE, what happens to the second branch?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** The first match wins. Any salary >= 75 also satisfies salary >= 40, so the first WHEN catches them and the second branch is dead code.

### Q9. [Medium] What does COALESCE(NULL, '', 'X') return?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** COALESCE returns the first non-NULL argument. Empty string '' is non-NULL. If you want empty strings treated as missing, use `COALESCE(NULLIF(x, ''), 'default')`.

### Q10. [Medium] Which pattern prevents divide-by-zero errors in strict SQL mode?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** D

**D is correct.** Both IF and NULLIF convert zero into NULL, making division safe. NULLIF is shorter and preferred.

### Q11. [Medium] Where CAN you NOT use a CASE expression?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** CASE works in SELECT, WHERE, GROUP BY, HAVING, and ORDER BY. It cannot be used in column DEFAULT clauses — defaults must be literal values.

### Q12. [Hard] Why does `COUNT(CASE WHEN status='paid' THEN 1 END)` correctly count paid rows without ELSE?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** A

**A is correct.** Without ELSE, non-matching rows return NULL. COUNT skips NULLs, so only matching rows are counted.

### Q13. [Hard] If you SUM(CASE WHEN cond THEN amount END) with NO ELSE, and a GROUP has zero matching rows, SUM returns:

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** SUM of nothing (all NULLs) is NULL, not 0. This is a common dashboard bug. Fix: add ELSE 0 or wrap in IFNULL.

### Q14. [Hard] Which CASE form allows checking 'IS NULL'?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Simple CASE uses = which never matches NULL. Only searched CASE can do `WHEN x IS NULL`.

### Q15. [Hard] In MySQL, which of these is TRUE about using an alias defined in the SELECT list inside GROUP BY?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** A

**A is correct.** MySQL allows `GROUP BY alias` from the SELECT list. For portability (PostgreSQL, SQL Server), repeat the full expression in GROUP BY.

### Q16. [Easy] Which of these is equivalent to IFNULL(x, 0)?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** COALESCE(x, 0) returns x if not NULL, else 0 — identical to IFNULL(x, 0). NULLIF does the opposite.

### Q17. [Medium] A CASE that returns mixed types (string and number) in different branches will:

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** MySQL picks a common type. Mixing INT and VARCHAR usually returns VARCHAR — the column's declared type is determined by type promotion rules, not by the last branch.

### Q18. [Hard] What is the correct interpretation of `CASE WHEN a=1 THEN x WHEN a=2 THEN y END` when a=3?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** No WHEN matches and there is no ELSE, so the expression is NULL.

### Q19. [Medium] Which one is the BEST replacement for `WHERE CASE WHEN status='paid' THEN 1 ELSE 0 END = 1`?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** A

**A is correct.** A direct boolean expression is cleaner, faster (sargable), and more readable.

### Q20. [Hard] If you use a CASE expression in GROUP BY that references a computed alias, which rule MUST hold for SQL-standard portability?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** SQL-92 standard does not allow SELECT aliases in GROUP BY. MySQL permits it, PostgreSQL partially, SQL Server does not. For portability, repeat the CASE.

## Coding Challenges

### Challenge 1. Grade Calculator

**Difficulty:** Easy

Given students(id, name, marks), return each student with their grade: A (>=90), B (>=75), C (>=60), D (>=40), else F. Sort by marks DESC.

**Constraints:**

- Use searched CASE with ELSE.

**Sample input:**

```
6 students with marks 32..92.
```

**Sample output:**

```
One row per student with grade.
```

**Solution:**

```sql
CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(50), marks INT);
INSERT INTO students VALUES
  (1,'Aarav Sharma',92),(2,'Priya Nair',78),(3,'Rohan Mehta',64),
  (4,'Ananya Iyer',45),(5,'Vikram Singh',32),(6,'Meera Krishnan',88);

SELECT name, marks,
  CASE
    WHEN marks >= 90 THEN 'A'
    WHEN marks >= 75 THEN 'B'
    WHEN marks >= 60 THEN 'C'
    WHEN marks >= 40 THEN 'D'
    ELSE 'F'
  END AS grade
FROM students
ORDER BY marks DESC;
```

### Challenge 2. Pay Band with IF

**Difficulty:** Easy

Given employees(name, salary), use IF to tag each row as 'High' (>= 50000) or 'Low' (< 50000).

**Constraints:**

- Use IF for two branches.

**Sample input:**

```
5 employees with varied salaries.
```

**Sample output:**

```
Each row has name, salary, and band.
```

**Solution:**

```sql
CREATE TABLE employees (id INT PRIMARY KEY, name VARCHAR(50), salary DECIMAL(10,2));
INSERT INTO employees VALUES
  (1,'Aarav Sharma',72000),(2,'Priya Nair',45000),
  (3,'Rohan Mehta',51000),(4,'Ananya Iyer',38000),
  (5,'Vikram Singh',95000);

SELECT name, salary,
  IF(salary >= 50000, 'High', 'Low') AS band
FROM employees;
```

### Challenge 3. Order Status Pivot

**Difficulty:** Medium

Given orders(id, customer_id, amount, status) where status is 'paid', 'pending', or 'failed', return per customer: paid_total, pending_total, failed_total (0 if none).

**Constraints:**

- Use SUM(CASE ... ELSE 0 END) to avoid NULLs.

**Sample input:**

```
8 orders across 3 customers and 3 statuses.
```

**Sample output:**

```
One row per customer, three amount columns.
```

**Solution:**

```sql
CREATE TABLE orders (id INT PRIMARY KEY, customer_id INT, amount DECIMAL(10,2), status VARCHAR(20));
INSERT INTO orders VALUES
  (1,101,1200,'paid'),(2,101, 800,'paid'),(3,101, 500,'pending'),
  (4,102,2500,'paid'),(5,102,1000,'failed'),
  (6,103, 700,'pending'),(7,103, 300,'pending'),(8,103,1500,'paid');

SELECT customer_id,
  SUM(CASE WHEN status='paid'    THEN amount ELSE 0 END) AS paid_total,
  SUM(CASE WHEN status='pending' THEN amount ELSE 0 END) AS pending_total,
  SUM(CASE WHEN status='failed'  THEN amount ELSE 0 END) AS failed_total
FROM orders
GROUP BY customer_id
ORDER BY customer_id;
```

### Challenge 4. Custom Priority Sort

**Difficulty:** Medium

Given tickets(id, subject, priority) where priority is 'urgent', 'high', 'normal', 'low', sort in exactly that business order (not alphabetical).

**Constraints:**

- Use CASE in ORDER BY.

**Sample input:**

```
6 tickets with mixed priorities.
```

**Sample output:**

```
Rows in the order: urgent, high, normal, low.
```

**Solution:**

```sql
CREATE TABLE tickets (id INT PRIMARY KEY, subject VARCHAR(60), priority VARCHAR(10));
INSERT INTO tickets VALUES
  (1,'Server down','urgent'),
  (2,'Typo on page','low'),
  (3,'Deploy pipeline','high'),
  (4,'Slow login','normal'),
  (5,'Billing bug','urgent'),
  (6,'Missing tooltip','low');

SELECT *
FROM tickets
ORDER BY
  CASE priority
    WHEN 'urgent' THEN 1
    WHEN 'high'   THEN 2
    WHEN 'normal' THEN 3
    WHEN 'low'    THEN 4
    ELSE 5
  END,
  id;
```

### Challenge 5. Safe Margin Calculation

**Difficulty:** Medium

Given campaigns(id, name, spend, revenue), return roas (revenue / spend) and margin ((revenue-spend)/revenue). Handle zeros safely — return NULL instead of dividing by zero.

**Constraints:**

- Use NULLIF for safe division.

**Sample input:**

```
4 campaigns including one with spend=0 and one with revenue=0.
```

**Sample output:**

```
Four rows, zero rows error out, NULLs where appropriate.
```

**Solution:**

```sql
CREATE TABLE campaigns (id INT PRIMARY KEY, name VARCHAR(40), spend DECIMAL(10,2), revenue DECIMAL(10,2));
INSERT INTO campaigns VALUES
  (1,'Google Search',5000,25000),
  (2,'Meta Ads',3200,8000),
  (3,'LinkedIn',1500,0),
  (4,'YouTube',0,4200);

SELECT name, spend, revenue,
  ROUND(revenue / NULLIF(spend, 0), 2)                                         AS roas,
  ROUND((revenue - spend) / NULLIF(revenue, 0), 4)                             AS margin
FROM campaigns;
```

### Challenge 6. Age-Group Census

**Difficulty:** Medium

Given users(id, name, age), return a count of users per age group: 'Under 18', '18-29', '30-49', '50+'. Sort so the buckets appear in natural order.

**Constraints:**

- CASE in both SELECT and GROUP BY. Sort using MIN(age).

**Sample input:**

```
8 users across all four buckets.
```

**Sample output:**

```
Four rows, one per bucket.
```

**Solution:**

```sql
CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(50), age INT);
INSERT INTO users VALUES
  (1,'Ishaan Gupta',14),(2,'Kavya Reddy',17),(3,'Arjun Pillai',24),
  (4,'Neha Choudhary',28),(5,'Diya Bhatt',35),(6,'Dev Kapoor',41),
  (7,'Riya Joshi',52),(8,'Kabir Shah',67);

SELECT
  CASE
    WHEN age < 18 THEN 'Under 18'
    WHEN age < 30 THEN '18-29'
    WHEN age < 50 THEN '30-49'
    ELSE            '50+'
  END AS age_group,
  COUNT(*) AS users
FROM users
GROUP BY age_group
ORDER BY MIN(age);
```

### Challenge 7. Rating Pivot

**Difficulty:** Hard

Given feedback(id, product_id, rating) where rating is 1-5, return per product: count of each star rating as columns (stars_1 through stars_5) plus total_ratings and average_rating (rounded to 2 decimals).

**Constraints:**

- Use COUNT(CASE WHEN rating=N THEN 1 END) for each column.

**Sample input:**

```
10 feedback rows across 3 products, varied ratings.
```

**Sample output:**

```
One row per product with 7 columns.
```

**Solution:**

```sql
CREATE TABLE feedback (id INT PRIMARY KEY, product_id INT, rating INT);
INSERT INTO feedback VALUES
  (1,1,5),(2,1,4),(3,1,5),(4,1,3),
  (5,2,2),(6,2,1),(7,2,3),
  (8,3,5),(9,3,5),(10,3,4);

SELECT product_id,
  COUNT(CASE WHEN rating=1 THEN 1 END) AS stars_1,
  COUNT(CASE WHEN rating=2 THEN 1 END) AS stars_2,
  COUNT(CASE WHEN rating=3 THEN 1 END) AS stars_3,
  COUNT(CASE WHEN rating=4 THEN 1 END) AS stars_4,
  COUNT(CASE WHEN rating=5 THEN 1 END) AS stars_5,
  COUNT(*)                              AS total_ratings,
  ROUND(AVG(rating), 2)                 AS avg_rating
FROM feedback
GROUP BY product_id
ORDER BY product_id;
```

### Challenge 8. Exam Verdict With Nulls

**Difficulty:** Hard

Given results(student, maths, english, science) where any subject can be NULL (absent), return student, total (treating NULL as 0), avg_marks, and verdict: 'Incomplete' if any NULL, 'Fail' if any subject < 40, 'Distinction' if avg >= 90, 'First Class' >= 75, 'Second Class' >= 60, else 'Pass'.

**Constraints:**

- Guard NULLs in the FIRST WHEN. Use IFNULL for total.

**Sample input:**

```
5 students, one with NULL in maths, one below 40 in english.
```

**Sample output:**

```
5 rows with verdict column.
```

**Solution:**

```sql
CREATE TABLE results (student VARCHAR(50), maths INT, english INT, science INT);
INSERT INTO results VALUES
  ('Aarav Sharma',92,88,95),
  ('Priya Nair',75,82,71),
  ('Rohan Mehta',60,33,68),
  ('Ananya Iyer',35,42,39),
  ('Vikram Singh',NULL,80,85);

SELECT student, maths, english, science,
  (IFNULL(maths,0)+IFNULL(english,0)+IFNULL(science,0)) AS total,
  ROUND((IFNULL(maths,0)+IFNULL(english,0)+IFNULL(science,0))/3.0, 1) AS avg_marks,
  CASE
    WHEN maths IS NULL OR english IS NULL OR science IS NULL  THEN 'Incomplete'
    WHEN maths < 40 OR english < 40 OR science < 40           THEN 'Fail'
    WHEN (maths+english+science)/3.0 >= 90                     THEN 'Distinction'
    WHEN (maths+english+science)/3.0 >= 75                     THEN 'First Class'
    WHEN (maths+english+science)/3.0 >= 60                     THEN 'Second Class'
    ELSE                                                           'Pass'
  END AS verdict
FROM results;
```

---

*Notes: https://learn.modernagecoders.com/resources/sql/conditional-logic-case-when/*
