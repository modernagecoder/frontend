---
title: "Practice: UNION, UNION ALL, INTERSECT, EXCEPT"
description: "49 practice problems for UNION, UNION ALL, INTERSECT, EXCEPT in SQL"
slug: set-operations-practice
canonical: https://learn.modernagecoders.com/resources/sql/set-operations/practice/
category: "SQL"
---
# Practice: UNION, UNION ALL, INTERSECT, EXCEPT

**Total questions:** 49

## Topic-Specific Questions

### Q1. [Easy] What is the key difference between UNION and UNION ALL?

*Hint:* Duplicates.

**Answer:** `UNION removes duplicate rows (costs a sort/hash). UNION ALL keeps all rows and is faster.`

Use UNION ALL unless you need deduplication. UNION must scan or hash the combined set to remove duplicates.

### Q2. [Easy] Given customers_in (4 rows) and customers_uk (3 rows, 1 duplicate with _in), how many rows does UNION return?

*Hint:* Deduplicated.

**Answer:** `6 rows`

4 + 3 = 7, minus 1 duplicate (Priya appears in both) = 6 distinct rows.

### Q3. [Easy] Same data, UNION ALL instead. How many rows?

*Hint:* No dedup.

**Answer:** `7 rows`

UNION ALL concatenates: 4 + 3 = 7. Priya is kept twice.

### Q4. [Easy] Does MySQL always support INTERSECT?

*Hint:* Version matters.

**Answer:** `Only MySQL 8.0.31 and later. Older versions (and MariaDB) require workarounds like INNER JOIN or IN.`

Check your server version. PostgreSQL and SQL Server have supported INTERSECT for decades.

### Q5. [Easy] Where can you place ORDER BY in a UNION?

*Hint:* Once, at the end.

**Answer:** `Only at the very end of the entire UNION statement. It sorts the combined result.`

Putting ORDER BY inside a branch raises error 1221 unless you wrap that branch in parentheses with a LIMIT.

### Q6. [Easy] What error do you get if column counts differ?

*Hint:* MySQL error 1222.

**Answer:** `ERROR 1222: The used SELECT statements have a different number of columns`

UNION requires matching column counts. Use NULL or a constant to pad if needed.

### Q7. [Easy] What column names does this produce?

```
SELECT a AS x, b FROM t1
UNION
SELECT c, d FROM t2;
```

*Hint:* First query wins.

**Answer:** `x, b (from the first SELECT). The second query's column names are ignored.`

Column names in a UNION come from the first query. Use aliases there to control final names.

### Q8. [Medium] Given active users (1,2,3) and purchased users (2,3,4), what does INTERSECT return?

*Hint:* Common users.

**Answer:** `2 and 3`

INTERSECT returns rows present in both sets. Users 2 and 3 are in both lists.

### Q9. [Medium] Same data — what does active EXCEPT purchased return?

*Hint:* In active, not in purchased.

**Answer:** `User 1`

User 1 is active but has not purchased. Users 2 and 3 are in both, so filtered out.

### Q10. [Medium] Write the MySQL workaround (INNER JOIN) for INTERSECT of active and purchased users by email.

*Hint:* JOIN on email + DISTINCT.

**Answer:** ```
SELECT DISTINCT a.email FROM users_active a
JOIN users_purchased p ON a.email = p.email;
```

INNER JOIN keeps only matching rows. DISTINCT handles duplicates if either side has them.

### Q11. [Medium] Write the MySQL workaround (NOT EXISTS) for 'active EXCEPT purchased'.

*Hint:* NOT EXISTS with correlation.

**Answer:** ```
SELECT a.email FROM users_active a
WHERE NOT EXISTS (
    SELECT 1 FROM users_purchased p WHERE p.email = a.email
);
```

NOT EXISTS is the NULL-safe way. Also valid: LEFT JOIN users_purchased ... WHERE p.email IS NULL.

### Q12. [Medium] Why is UNION slower than UNION ALL on large datasets?

*Hint:* Deduplication cost.

**Answer:** `UNION must sort or hash the combined result to identify duplicates. UNION ALL just streams both sets through without additional work.`

On billions of rows, the difference can be minutes vs seconds and gigabytes of RAM. Always consider whether duplicates are even possible before choosing UNION.

### Q13. [Medium] What does this produce if t1 has rows {1,2} and t2 has {2,3,4}?

```
SELECT x FROM t1 UNION SELECT x FROM t2;
```

*Hint:* Distinct union.

**Answer:** `{1, 2, 3, 4}`

Deduplicated union: 1, 2 (once), 3, 4.

### Q14. [Hard] What happens with this query?

```
(SELECT name FROM a ORDER BY name LIMIT 5)
UNION ALL
(SELECT name FROM b ORDER BY name LIMIT 5);
```

*Hint:* Parentheses + LIMIT trick.

**Answer:** `Takes top 5 sorted names from a, top 5 from b, and concatenates them. Per-branch ORDER BY + LIMIT is allowed inside parentheses.`

This is the only legal way to apply ORDER BY within a UNION branch: wrap it in parens and pair it with LIMIT. Useful for 'top N from each category' merges.

### Q15. [Hard] Tag the source of each row in a UNION. Why and how?

*Hint:* Constant column.

**Answer:** ```
SELECT name, email, 'India' AS source FROM customers_in
UNION ALL
SELECT name, email, 'UK'    AS source FROM customers_uk;
```

Adding a constant column labels each row's origin so downstream queries can filter or group by source. Essential for debugging multi-source unions.

## Mixed Questions

### Q1. [Easy] Which rule does UNION NOT enforce?

*Hint:* Three rules: column count, types, and first query naming.

**Answer:** `UNION does NOT require column names to match between branches. Only column count and compatible types matter.`

Final column names come from the first query. Second query's column names are ignored.

### Q2. [Easy] What is Oracle's name for EXCEPT?

*Hint:* Arithmetic sign.

**Answer:** `MINUS`

Oracle calls the difference operator MINUS. All other major databases (MySQL 8.0.31+, PostgreSQL, SQL Server) use EXCEPT.

### Q3. [Easy] Give a real-world use case for UNION ALL.

*Hint:* Partitioned tables.

**Answer:** `Combining yearly partitioned sales tables (sales_2024, sales_2025, sales_2026) into a unified report. No duplicates by construction, so UNION ALL is faster.`

Many OLAP systems partition tables by time. UNION ALL unifies them for cross-year analysis.

### Q4. [Easy] Is the following valid?

```
SELECT id, name FROM t1 UNION SELECT id FROM t2;
```

*Hint:* Column count.

**Answer:** `No. Column counts differ (2 vs 1). MySQL returns ERROR 1222.`

Fix by adding a NULL placeholder: `SELECT id, NULL FROM t2`.

### Q5. [Easy] Which is preferred for 'active users who have not yet purchased' in MySQL 5.7?

*Hint:* NOT EXISTS or LEFT JOIN.

**Answer:** `NOT EXISTS or LEFT JOIN + IS NULL — MySQL 5.7 lacks EXCEPT.`

EXCEPT is only available in MySQL 8.0.31+. Until then, use the equivalent JOIN or NOT EXISTS patterns.

### Q6. [Medium] Write a UNION query returning all unique cities from two tables customers_in and customers_uk (assume both have a 'city' column).

*Hint:* UNION.

**Answer:** ```
SELECT city FROM customers_in
UNION
SELECT city FROM customers_uk
ORDER BY city;
```

UNION automatically deduplicates. Cities appearing in both tables are listed once.

### Q7. [Medium] Write a UNION ALL query tagging each customer with their origin country.

*Hint:* Constant column.

**Answer:** ```
SELECT name, email, 'India' AS country FROM customers_in
UNION ALL
SELECT name, email, 'UK' FROM customers_uk;
```

Constant string columns label each branch. Use UNION ALL to keep duplicates if a person is registered in both countries — that is useful information.

### Q8. [Medium] Given 3 yearly sales tables, write a query that returns total amount per year.

*Hint:* UNION ALL with constant year, then GROUP BY.

**Answer:** ```
SELECT year, SUM(amount) AS total FROM (
    SELECT amount, 2024 AS year FROM sales_2024
    UNION ALL
    SELECT amount, 2025 FROM sales_2025
    UNION ALL
    SELECT amount, 2026 FROM sales_2026
) t
GROUP BY year;
```

Combine all three tables with UNION ALL into a derived table, then aggregate by year. Add a constant year column so you can GROUP BY it.

### Q9. [Medium] When would UNION produce the same result as UNION ALL?

*Hint:* When duplicates cannot occur.

**Answer:** `When the two SELECTs cannot produce overlapping rows. For example, disjoint WHERE filters on the same table, or unrelated tables with unique IDs.`

In those cases, prefer UNION ALL for performance. UNION's deduplication is wasted work.

### Q10. [Medium] Why can't you put a separate ORDER BY inside each UNION branch?

*Hint:* Set semantics.

**Answer:** `Because UNION treats the combined result as one set. Per-branch ordering would be meaningless — the final order is determined at the end. To order within a branch, wrap it in parentheses with LIMIT: (SELECT ... ORDER BY ... LIMIT N) UNION (SELECT ...).`

SQL enforces this because ORDER BY alone without LIMIT is not meaningful within a set operation.

### Q11. [Hard] Emulate FULL OUTER JOIN between customers_in and customers_uk on email using UNION.

*Hint:* LEFT JOIN UNION RIGHT JOIN.

**Answer:** ```
SELECT i.name AS in_name, u.name AS uk_name
FROM customers_in i
LEFT JOIN customers_uk u ON i.email = u.email
UNION
SELECT i.name, u.name
FROM customers_in i
RIGHT JOIN customers_uk u ON i.email = u.email;
```

LEFT JOIN keeps all India customers; RIGHT JOIN keeps all UK customers. UNION deduplicates the common matched rows. This is the standard MySQL workaround for FULL OUTER JOIN.

### Q12. [Hard] Find emails in BOTH customers_in and customers_uk, portable across older MySQL.

*Hint:* INTERSECT workaround.

**Answer:** ```
SELECT DISTINCT i.email FROM customers_in i
JOIN customers_uk u ON i.email = u.email;
```

INNER JOIN + DISTINCT simulates INTERSECT. Result on sample data: priya@mail.com (the only overlapping email).

## Multiple Choice Questions

### Q1. [Easy] What does UNION do?

**Answer:** B

**B is correct.** UNION deduplicates; UNION ALL keeps duplicates; INTERSECT returns common rows.

### Q2. [Easy] Which is faster on large datasets?

**Answer:** B

**B is correct.** UNION ALL avoids the sort/hash dedup step, so it is significantly faster. Use UNION only when you actually need deduplication.

### Q3. [Easy] What must be true of queries combined with UNION?

**Answer:** B

**B is correct.** UNION requires matching column count and compatible types. Column names come from the first SELECT; they do not need to match.

### Q4. [Easy] Where do final column names come from in a UNION?

**Answer:** B

**B is correct.** Column names (including aliases) come from the first SELECT. Put your desired aliases there.

### Q5. [Easy] Which statement lists rows present in the first query but NOT in the second?

**Answer:** C

**C is correct.** EXCEPT (or MINUS in Oracle) returns rows in the first result set that are not in the second.

### Q6. [Easy] Does MySQL 5.7 support INTERSECT and EXCEPT natively?

**Answer:** B

**B is correct.** MySQL added INTERSECT and EXCEPT in 8.0.31 (late 2022). MariaDB also requires recent versions. Use INNER JOIN or NOT EXISTS as workarounds.

### Q7. [Easy] Where should ORDER BY appear in a UNION?

**Answer:** C

**C is correct.** ORDER BY at the end sorts the combined rows. Per-branch ordering requires parentheses with a LIMIT.

### Q8. [Medium] The MySQL equivalent of INTERSECT (for older versions) is:

**Answer:** B

**B is correct.** INNER JOIN with DISTINCT keeps only rows present on both sides. A corresponds to EXCEPT; C also corresponds to EXCEPT.

### Q9. [Medium] Given sets A={1,2,3} and B={2,3,4}, what does A EXCEPT B return?

**Answer:** C

**C is correct.** EXCEPT returns elements in A not in B. Only 1 qualifies.

### Q10. [Medium] What is a common pitfall when emulating EXCEPT with NOT IN?

**Answer:** B

**B is correct.** The NULL trap from the subqueries chapter strikes again. Use NOT EXISTS or filter NULLs out of the subquery.

### Q11. [Medium] What is the result of this query if t1 has 5 rows and t2 has 5 rows with 2 exact duplicates?
`SELECT * FROM t1 UNION ALL SELECT * FROM t2;`

**Answer:** C

**C is correct.** UNION ALL concatenates: 5 + 5 = 10 rows. Duplicates are kept. UNION (without ALL) would return 8.

### Q12. [Hard] You want the top 3 cheapest products from each of two warehouses combined. What is the correct pattern?

**Answer:** B

**B is correct.** Wrap each branch in parentheses with ORDER BY and LIMIT. A would sort and limit the combined result, not each branch.

### Q13. [Hard] Which scenario justifies using UNION instead of UNION ALL?

**Answer:** B

**B is correct.** UNION is appropriate when duplicates are possible AND you want them removed. Otherwise, UNION ALL is faster.

### Q14. [Hard] Which pattern correctly emulates EXCEPT in MySQL 5.7?

**Answer:** B

**B is correct.** MySQL 5.7 does not support EXCEPT (A fails). C is not valid syntax. D is cartesian. NOT EXISTS is the portable, NULL-safe pattern.

## Coding Challenges

### Challenge 1. Distinct Customers Across Two Regions

**Difficulty:** Easy

Combine customers_in and customers_uk into a single deduplicated list of (name, email).

**Solution:**

```sql
SELECT name, email FROM customers_in
UNION
SELECT name, email FROM customers_uk
ORDER BY name;
```

UNION deduplicates. Priya appears once even though she exists in both tables with matching name and email.

### Challenge 2. Tagged Combined List

**Difficulty:** Easy

Combine both customer tables with a 'country' tag. Keep duplicates (dual accounts are interesting data).

**Solution:**

```sql
SELECT name, email, 'India' AS country FROM customers_in
UNION ALL
SELECT name, email, 'UK' AS country FROM customers_uk
ORDER BY name;
```

UNION ALL keeps Priya twice (once per country). The constant 'country' column labels each row's source.

### Challenge 3. Common Emails (INTERSECT Workaround)

**Difficulty:** Medium

Find emails that exist in BOTH customers_in and customers_uk. Use a workaround that works in all MySQL versions.

**Solution:**

```sql
SELECT DISTINCT i.email
FROM customers_in i
JOIN customers_uk u ON i.email = u.email;
```

INNER JOIN keeps matches on both sides. DISTINCT handles any duplicates within a table.

### Challenge 4. Active Users Who Have Not Purchased (EXCEPT Workaround)

**Difficulty:** Medium

From users_active, return users who are NOT in users_purchased. Use NOT EXISTS.

**Solution:**

```sql
SELECT a.user_id, a.email
FROM users_active a
WHERE NOT EXISTS (
    SELECT 1 FROM users_purchased p WHERE p.email = a.email
);
```

NOT EXISTS avoids the NOT IN NULL trap. Returns user 1 (a@x.com).

### Challenge 5. Yearly Sales Consolidation

**Difficulty:** Medium

Combine sales_2024, sales_2025, sales_2026 into one result with a year tag, sorted by year then id.

**Solution:**

```sql
SELECT id, amount, 2024 AS year FROM sales_2024
UNION ALL
SELECT id, amount, 2025 FROM sales_2025
UNION ALL
SELECT id, amount, 2026 FROM sales_2026
ORDER BY year, id;
```

UNION ALL because the partitioned tables cannot share rows. Constant year column preserves source info.

### Challenge 6. Totals Per Year From Combined Sales

**Difficulty:** Hard

Using UNION ALL and GROUP BY, return total sales per year across the three yearly tables.

**Solution:**

```sql
SELECT year, SUM(amount) AS total
FROM (
    SELECT amount, 2024 AS year FROM sales_2024
    UNION ALL
    SELECT amount, 2025 FROM sales_2025
    UNION ALL
    SELECT amount, 2026 FROM sales_2026
) t
GROUP BY year
ORDER BY year;
```

Derived table unifies the three sources. Outer query aggregates by year.

### Challenge 7. Emulate FULL OUTER JOIN Between Two Customer Tables

**Difficulty:** Hard

Return every customer from India and UK, matched by email where possible, NULL on the side where there is no match.

**Solution:**

```sql
SELECT i.email AS in_email, i.name AS in_name, u.email AS uk_email, u.name AS uk_name
FROM customers_in i
LEFT JOIN customers_uk u ON i.email = u.email
UNION
SELECT i.email, i.name, u.email, u.name
FROM customers_in i
RIGHT JOIN customers_uk u ON i.email = u.email;
```

LEFT JOIN captures all India rows; RIGHT JOIN captures all UK rows. UNION deduplicates the intersection.

### Challenge 8. Top 2 From Each Country

**Difficulty:** Hard

Return the first 2 customers (by id) from each country as a combined list, tagged by country.

**Solution:**

```sql
(SELECT id, name, 'India' AS country FROM customers_in ORDER BY id LIMIT 2)
UNION ALL
(SELECT id, name, 'UK' FROM customers_uk ORDER BY id LIMIT 2);
```

Parentheses allow each branch to have its own ORDER BY and LIMIT. UNION ALL keeps both branches' top 2.

---

*Notes: https://learn.modernagecoders.com/resources/sql/set-operations/*
