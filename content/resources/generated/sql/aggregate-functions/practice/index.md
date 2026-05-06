---
title: "Practice: Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)"
description: "58 practice problems for Aggregate Functions (COUNT, SUM, AVG, MIN, MAX) in SQL"
slug: aggregate-functions-practice
canonical: https://learn.modernagecoders.com/resources/sql/aggregate-functions/practice/
category: "SQL"
---
# Practice: Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] Count the total number of orders.

*Hint:* COUNT(*).

**Answer:** ```
SELECT COUNT(*) FROM orders;
```

Returns 12 — all rows.

### Q2. [Easy] What is the total revenue (sum of all amounts)?

*Hint:* SUM(amount).

**Answer:** ```
SELECT SUM(amount) AS total_revenue FROM orders;
```

Sum: 44500.00.

### Q3. [Easy] Find the smallest and largest order amounts.

*Hint:* MIN and MAX.

**Answer:** ```
SELECT MIN(amount) AS smallest, MAX(amount) AS largest FROM orders;
```

MIN: 1200.00 (Sneha). MAX: 8900.00 (Diya).

### Q4. [Easy] Calculate the average order amount.

*Hint:* AVG(amount).

**Answer:** ```
SELECT AVG(amount) AS avg_order FROM orders;
```

44500 / 12 = 3708.33 (approximately).

### Q5. [Easy] Count the number of unique cities with orders.

*Hint:* COUNT(DISTINCT city).

**Answer:** ```
SELECT COUNT(DISTINCT city) AS unique_cities FROM orders;
```

6 unique cities: Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, Pune.

### Q6. [Easy] What does COUNT(discount) return on our orders table?

*Hint:* Excludes NULLs.

**Answer:** `8`

4 rows have NULL discount (ids 2, 5, 8, 11). COUNT(discount) excludes them: 12 - 4 = 8.

### Q7. [Easy] Total revenue from Delivered orders only.

*Hint:* SUM with WHERE.

**Answer:** ```
SELECT SUM(amount) FROM orders WHERE status = 'Delivered';
```

Delivered orders: ids 1,2,4,6,7,9,10,12. Sum: 2500+1800+3200+1200+6700+3800+8900+1500 = 27600.

### Q8. [Easy] How many orders were Cancelled?

*Hint:* COUNT(*) with WHERE.

**Answer:** ```
SELECT COUNT(*) FROM orders WHERE status = 'Cancelled';
```

ids 3 and 8 — 2 orders.

### Q9. [Medium] What does this return?

```
SELECT AVG(discount) FROM orders;
```

*Hint:* NULLs excluded from both parts.

**Answer:** `356.25`

Non-NULL discounts: 100, 500, 200, 50, 600, 300, 1000, 100. Sum: 2850. Count: 8. Avg: 356.25.

### Q10. [Medium] What does this return?

```
SELECT AVG(COALESCE(discount, 0)) FROM orders;
```

*Hint:* NULLs as 0 over all 12 rows.

**Answer:** `237.50`

Sum stays 2850 (0s do not add). Count becomes 12 (all rows). 2850/12 = 237.50.

### Q11. [Medium] Find the earliest and latest order dates.

*Hint:* MIN and MAX on dates.

**Answer:** ```
SELECT MIN(order_date) AS earliest, MAX(order_date) AS latest FROM orders;
```

Earliest: 2026-01-15 (Aarav). Latest: 2026-04-08 (Meera).

### Q12. [Medium] Explain the difference between COUNT(*) and COUNT(column).

*Hint:* NULL handling.

**Answer:** `COUNT(*)` counts all rows, regardless of content. `COUNT(column)` counts only rows where *column* is NOT NULL. For a column with 10 values where 3 are NULL: COUNT(*) = 10, COUNT(column) = 7.

A frequent interview question. If you want the total number of rows, always use COUNT(*). If you want 'rows with a non-missing value in this column,' use COUNT(column).

### Q13. [Medium] Why does SUM of an all-NULL column return NULL instead of 0?

*Hint:* SQL standard behavior.

**Answer:** Because there are no values to sum, SQL returns NULL — the logical 'unknown.' Returning 0 would be an assumption. If you want 0, use `COALESCE(SUM(col), 0)`. This convention also applies to MIN, MAX, and AVG: all-NULL input yields NULL output.

Can surprise you when a filter returns 0 rows. Your SUM-based KPI suddenly shows NULL instead of 0, breaking charts or triggering alerts.

### Q14. [Medium] How many unique customers placed orders in March 2026?

*Hint:* COUNT(DISTINCT) with date range.

**Answer:** ```
SELECT COUNT(DISTINCT customer_name) AS march_customers
FROM orders
WHERE order_date BETWEEN '2026-03-01' AND '2026-03-31';
```

March orders (ids 6-10): Sneha, Karan, Ishita, Aditya, Diya. 5 unique customers.

### Q15. [Medium] What is the average amount of Delivered orders?

*Hint:* AVG with WHERE.

**Answer:** ```
SELECT AVG(amount) FROM orders WHERE status = 'Delivered';
```

Sum of delivered: 27600. Count: 8. Avg: 3450.00.

### Q16. [Medium] Count how many orders each status type has (preview of GROUP BY — use conditional aggregation).

*Hint:* SUM(CASE WHEN ...).

**Answer:** ```
SELECT
  SUM(CASE WHEN status = 'Delivered' THEN 1 ELSE 0 END) AS delivered,
  SUM(CASE WHEN status = 'Cancelled' THEN 1 ELSE 0 END) AS cancelled,
  SUM(CASE WHEN status = 'Pending' THEN 1 ELSE 0 END) AS pending
FROM orders;
```

Delivered: 8. Cancelled: 2. Pending: 2. Total: 12. Conditional aggregation is how you get multiple counts in one row without GROUP BY.

### Q17. [Medium] What does this return?

```
SELECT MIN(customer_name), MAX(customer_name) FROM orders;
```

*Hint:* Strings sort alphabetically.

**Answer:** `Aarav Sharma, Vikram Reddy`

Alphabetical: Aarav comes first (A), Vikram comes last (V). MIN and MAX work on string columns too.

### Q18. [Medium] Combine all Mumbai customer names into a single comma-separated string.

*Hint:* GROUP_CONCAT with WHERE.

**Answer:** ```
SELECT GROUP_CONCAT(customer_name) AS mumbai_customers
FROM orders
WHERE city = 'Mumbai';
```

Mumbai has Aarav, Ananya, Karan, Arjun. Result: 'Aarav Sharma,Ananya Singh,Karan Mehta,Arjun Desai' (order may vary).

### Q19. [Hard] Find orders with amount greater than the overall average. Return customer_name and amount.

*Hint:* Subquery for AVG.

**Answer:** ```
SELECT customer_name, amount FROM orders
WHERE amount > (SELECT AVG(amount) FROM orders);
```

Overall avg = 3708.33. Orders above: Rohan 5600, Vikram 4500, Karan 6700, Aditya 3800, Diya 8900. 5 rows. You CANNOT use WHERE amount > AVG(amount) directly — you need the subquery.

### Q20. [Hard] Why can't you use WHERE amount > AVG(amount) directly?

*Hint:* Order of operations.

**Answer:** Because WHERE runs BEFORE aggregation. When WHERE evaluates each row, AVG has not been computed yet — the aggregate needs all rows to finish first. SQL enforces a strict order: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT. Aggregates belong in SELECT or HAVING, not WHERE. To compare a row to an aggregate, use a subquery that computes the aggregate separately.

This is a foundational concept. Understanding execution order prevents many SQL mistakes and is tested in every interview.

### Q21. [Hard] What does this return?

```
SELECT COUNT(*), COUNT(discount), COUNT(DISTINCT city)
FROM orders
WHERE status = 'Delivered';
```

*Hint:* Filter first, then aggregate.

**Answer:** `8, 6, 6`

Delivered orders: 8 total. Of those, discount is NULL in 1 row (id 2). Wait let me check: delivered ids are 1,2,4,6,7,9,10,12. Their discounts: 100, NULL, 200, 50, 600, 300, 1000, 100. One NULL (id 2), so COUNT(discount) = 7. Distinct cities: Mumbai (1,4,7), Delhi (2,12), Chennai (6), Pune (9), Bengaluru (10) — 5 unique. Corrected: 8, 7, 5.

### Q22. [Hard] What was the average order amount in February 2026?

*Hint:* WHERE + AVG.

**Answer:** ```
SELECT AVG(amount) FROM orders
WHERE order_date BETWEEN '2026-02-01' AND '2026-02-28';
```

February orders: Rohan (5600), Ananya (3200), Vikram (4500). Avg: 13300/3 = 4433.33.

### Q23. [Hard] For each Mumbai customer, show the names sorted by amount DESC combined into one string with ' > ' separator.

*Hint:* GROUP_CONCAT with ORDER BY and SEPARATOR.

**Answer:** ```
SELECT GROUP_CONCAT(customer_name ORDER BY amount DESC SEPARATOR ' > ') AS mumbai_by_amount
FROM orders
WHERE city = 'Mumbai';
```

Mumbai sorted by amount DESC: Karan (6700), Ananya (3200), Arjun (2700), Aarav (2500). Result: 'Karan Mehta > Ananya Singh > Arjun Desai > Aarav Sharma'.

### Q24. [Hard] Return the total revenue, total discount given, and net revenue (revenue minus discount), treating NULL discounts as 0.

*Hint:* SUM with COALESCE.

**Answer:** ```
SELECT
  SUM(amount) AS gross_revenue,
  SUM(COALESCE(discount, 0)) AS total_discount,
  SUM(amount) - SUM(COALESCE(discount, 0)) AS net_revenue
FROM orders;
```

Gross: 44500. Total discount: 2850. Net: 41650. Without COALESCE, SUM(discount) still gives 2850 (SUM skips NULLs anyway), but being explicit is clearer.

### Q25. [Hard] In what order are WHERE, SELECT, ORDER BY, and aggregate functions evaluated?

*Hint:* Logical execution order.

**Answer:** Logical order: FROM → WHERE → GROUP BY → HAVING → SELECT (including aggregates) → ORDER BY → LIMIT. Aggregates are computed during the SELECT phase after WHERE has already filtered rows. This is why WHERE cannot reference aggregates — they do not exist yet. ORDER BY runs after aggregates, so it CAN reference aliases and aggregate results.

Memorize this order. Almost every SQL quirk — where you can use an alias, why WHERE can't see aggregates, why ORDER BY can — comes from execution order.

## Mixed Questions

### Q1. [Easy] Get the total number of orders.

*Hint:* COUNT(*).

**Answer:** ```
SELECT COUNT(*) FROM orders;
```

12 rows.

### Q2. [Easy] What is the total amount across all orders?

*Hint:* SUM(amount).

**Answer:** ```
SELECT SUM(amount) FROM orders;
```

44500.00.

### Q3. [Easy] What is the largest order amount?

*Hint:* MAX.

**Answer:** ```
SELECT MAX(amount) FROM orders;
```

8900.00 (Diya's order).

### Q4. [Easy] Average amount?

*Hint:* AVG.

**Answer:** ```
SELECT AVG(amount) FROM orders;
```

3708.33 (approximately).

### Q5. [Easy] What is COUNT(DISTINCT status)?

*Hint:* Unique statuses.

**Answer:** `3`

Delivered, Cancelled, Pending — 3 unique statuses.

### Q6. [Easy] Count Mumbai orders.

*Hint:* COUNT + WHERE.

**Answer:** ```
SELECT COUNT(*) FROM orders WHERE city = 'Mumbai';
```

4 Mumbai orders (Aarav, Ananya, Karan, Arjun).

### Q7. [Easy] What does SUM(NULL) return?

*Hint:* NULL-only sum.

**Answer:** `NULL`

Summing only NULLs (or no rows at all) gives NULL, not 0.

### Q8. [Easy] Total discount given across all orders (treating NULL as 0).

*Hint:* SUM of COALESCE.

**Answer:** ```
SELECT SUM(COALESCE(discount, 0)) FROM orders;
```

2850.00. SUM(discount) alone also gives 2850 since SUM skips NULLs, but COALESCE makes intent explicit.

### Q9. [Medium] Count orders from each city using conditional aggregation (show Mumbai_count, Delhi_count).

*Hint:* SUM(CASE WHEN city = 'Mumbai' ...).

**Answer:** ```
SELECT
  SUM(CASE WHEN city = 'Mumbai' THEN 1 ELSE 0 END) AS mumbai_count,
  SUM(CASE WHEN city = 'Delhi' THEN 1 ELSE 0 END) AS delhi_count
FROM orders;
```

Mumbai: 4 (Aarav, Ananya, Karan, Arjun). Delhi: 3 (Priya, Ishita, Meera).

### Q10. [Medium] Find the largest amount in Bengaluru.

*Hint:* MAX + WHERE.

**Answer:** ```
SELECT MAX(amount) FROM orders WHERE city = 'Bengaluru';
```

Bengaluru has Rohan (5600) and Diya (8900). Max: 8900.

### Q11. [Medium] Average amount of Pending orders.

*Hint:* AVG + WHERE.

**Answer:** ```
SELECT AVG(amount) FROM orders WHERE status = 'Pending';
```

Pending: Vikram (4500), Arjun (2700). Avg: 7200/2 = 3600.

### Q12. [Medium] What does this return?

```
SELECT COUNT(discount), SUM(discount), AVG(discount) FROM orders WHERE discount IS NULL;
```

*Hint:* All rows filtered out have NULL discount, so the aggregates work on... nothing?

**Answer:** `0, NULL, NULL`

WHERE discount IS NULL returns 4 rows. Then COUNT(discount) in those 4 rows = 0 (all NULL). SUM and AVG of all-NULL = NULL.

### Q13. [Medium] Get the total revenue from Bengaluru and Mumbai combined.

*Hint:* SUM + IN.

**Answer:** ```
SELECT SUM(amount) FROM orders
WHERE city IN ('Bengaluru', 'Mumbai');
```

Bengaluru: 5600+8900 = 14500. Mumbai: 2500+3200+6700+2700 = 15100. Total: 29600.

### Q14. [Medium] Find the range of order amounts (MAX - MIN).

*Hint:* MAX and MIN in same query.

**Answer:** ```
SELECT MAX(amount) - MIN(amount) AS amount_range FROM orders;
```

8900 - 1200 = 7700.

### Q15. [Medium] Count how many orders have a discount given.

*Hint:* COUNT(discount) excludes NULLs.

**Answer:** ```
SELECT COUNT(discount) FROM orders;
```

8 orders have a non-NULL discount.

### Q16. [Medium] What does AVG(amount) return in a WHERE that filters 0 rows?

```
SELECT AVG(amount) FROM orders WHERE city = 'Kolkata';
```

*Hint:* No Kolkata orders.

**Answer:** `NULL`

No rows match, so AVG of nothing = NULL. Same for SUM, MIN, MAX. COUNT(*) would return 0, not NULL.

### Q17. [Hard] What is the total amount of orders placed by customers whose name starts with 'A'?

*Hint:* SUM + LIKE.

**Answer:** ```
SELECT SUM(amount) FROM orders
WHERE customer_name LIKE 'A%';
```

A-customers: Aarav (2500), Ananya (3200), Aditya (3800), Arjun (2700). Sum: 12200.

### Q18. [Hard] Find how many orders were above the overall average amount.

*Hint:* COUNT with subquery.

**Answer:** ```
SELECT COUNT(*) FROM orders
WHERE amount > (SELECT AVG(amount) FROM orders);
```

Avg = 3708.33. Above: Rohan, Vikram, Karan, Aditya, Diya. 5 orders.

### Q19. [Hard] For Delivered orders, show the total revenue, total discount (NULL as 0), and net revenue.

*Hint:* Combine SUM with WHERE and COALESCE.

**Answer:** ```
SELECT
  SUM(amount) AS gross,
  SUM(COALESCE(discount, 0)) AS total_discount,
  SUM(amount) - SUM(COALESCE(discount, 0)) AS net
FROM orders
WHERE status = 'Delivered';
```

Delivered gross: 27600. Delivered discounts: 100+200+50+600+300+1000+100 = 2350 (id 2 has NULL, treated as 0). Net: 27600 - 2350 = 25250.

### Q20. [Hard] Find the customer name with the largest order amount. (Hint: use a subquery to find MAX, then match.)

*Hint:* Subquery in WHERE.

**Answer:** ```
SELECT customer_name, amount FROM orders
WHERE amount = (SELECT MAX(amount) FROM orders);
```

MAX = 8900. The row with amount = 8900 is Diya Nair. Single row returned.

### Q21. [Hard] What does this return?

```
SELECT COUNT(*) - COUNT(discount) FROM orders;
```

*Hint:* Total rows minus non-NULL discount rows.

**Answer:** `4`

Cute trick: COUNT(*) - COUNT(column) = number of NULLs in that column. 12 - 8 = 4 NULL discounts.

### Q22. [Hard] Create a string with all Delhi customer names separated by ' & ', ordered by order_date ASC.

*Hint:* GROUP_CONCAT with ORDER BY and SEPARATOR.

**Answer:** ```
SELECT GROUP_CONCAT(customer_name ORDER BY order_date ASC SEPARATOR ' & ') AS delhi_customers
FROM orders
WHERE city = 'Delhi';
```

Delhi orders by date: Priya (2026-01-20), Ishita (2026-03-12), Meera (2026-04-08). Result: 'Priya Patel & Ishita Kumar & Meera Joshi'.

## Multiple Choice Questions

### Q1. [Easy] Which function counts the total number of rows in a table?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** COUNT(*) counts all rows, including those with NULLs.

### Q2. [Easy] What does SUM(salary) return if all salary values are NULL?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** SUM of all NULLs (or no rows) returns NULL. Wrap with COALESCE(SUM(col), 0) if you want 0.

### Q3. [Easy] Which function gives the largest value in a column?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** A

**A is correct.** MAX(column) returns the largest value. Works on numbers, dates, and strings (alphabetically).

### Q4. [Easy] For a column with values [10, 20, NULL, 30], what does AVG return?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** AVG skips NULLs in both numerator and denominator. Sum: 60. Count of non-NULL: 3. AVG: 60/3 = 20.

### Q5. [Easy] Can aggregate functions be used in the WHERE clause?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** WHERE filters rows before aggregation, so aggregates don't exist yet when WHERE runs. Use HAVING (after GROUP BY) or a subquery instead.

### Q6. [Easy] Which counts unique values in a column?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** COUNT(DISTINCT col) returns the count of unique non-NULL values.

### Q7. [Easy] MIN works on which types?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** MIN/MAX work on any orderable type. For strings, alphabetical order; for dates, chronological; for numbers, numeric.

### Q8. [Medium] What is the difference between COUNT(*) and COUNT(1)?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** Both count all rows. Modern optimizers treat them the same. Old myth says COUNT(1) is faster — it is not. Use COUNT(*) — it's idiomatic SQL.

### Q9. [Medium] For [10, 20, NULL], what does AVG(COALESCE(col, 0)) return?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** COALESCE turns NULL into 0. Values: [10, 20, 0]. Sum: 30. Count: 3. AVG: 30/3 = 10.

### Q10. [Medium] What does MIN(customer_name) return?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** For strings, MIN returns the alphabetically first value. In our data, 'Aarav Sharma' is first.

### Q11. [Medium] Which query finds the largest order amount?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** MAX is the SQL standard. GREATEST exists but takes multiple arguments (for comparing across columns), not an aggregate.

### Q12. [Medium] What does SUM(CASE WHEN status='Delivered' THEN 1 ELSE 0 END) compute?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Each matching row contributes 1, others contribute 0. SUM gives the count. This is 'conditional aggregation' and is common in pre-GROUP BY SQL.

### Q13. [Medium] Why can't this query work? SELECT name FROM employees WHERE salary = MAX(salary);

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** WHERE executes before aggregates. Fix: WHERE salary = (SELECT MAX(salary) FROM employees).

### Q14. [Medium] GROUP_CONCAT is available in which database?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** A

**A is correct.** GROUP_CONCAT is MySQL-specific. PostgreSQL and SQL Server use STRING_AGG(col, separator). Oracle uses LISTAGG.

### Q15. [Hard] For column with [100, 200, NULL, 200, 300], what are COUNT(*), COUNT(col), COUNT(DISTINCT col)?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** COUNT(*) = 5 all rows. COUNT(col) = 4 non-NULL. COUNT(DISTINCT col) = 3 unique non-NULL (100, 200, 300 — 200 is duplicate).

### Q16. [Hard] A table has 1000 rows; half have NULL in the 'email' column. What does AVG(LENGTH(email)) compute?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** LENGTH(NULL) = NULL. AVG ignores NULLs. So it averages the lengths of the 500 non-NULL emails.

### Q17. [Hard] What does SUM(NULL) + 5 return?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** SUM of no rows or all NULLs = NULL. NULL + 5 = NULL (arithmetic propagates NULL). Use COALESCE to guard.

### Q18. [Hard] In SQL's logical execution order, when do aggregates get computed?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Order: FROM → WHERE → GROUP BY → HAVING → SELECT (aggregates here) → ORDER BY → LIMIT. That is why HAVING can see aggregates but WHERE cannot.

### Q19. [Hard] COUNT(*) - COUNT(col) gives what?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** COUNT(*) counts all rows, COUNT(col) counts non-NULL rows, so their difference is the NULL count. Useful trick.

### Q20. [Hard] What does this return? SELECT AVG(amount) FROM orders WHERE city = 'NoSuchCity';

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Aggregates always return exactly one row (without GROUP BY). With no matching rows, AVG returns NULL. COUNT(*) would be 0 — different behavior.

## Coding Challenges

### Challenge 1. Business KPI Summary

**Difficulty:** Easy

Return one row showing: total orders, total revenue, average order value, smallest order, largest order.

**Constraints:**

- Single query.

**Sample input:**

```
orders table.
```

**Sample output:**

```
12, 44500.00, 3708.33, 1200.00, 8900.00
```

**Solution:**

```sql
SELECT
  COUNT(*) AS total_orders,
  SUM(amount) AS total_revenue,
  AVG(amount) AS avg_order_value,
  MIN(amount) AS smallest_order,
  MAX(amount) AS largest_order
FROM orders;
```

### Challenge 2. Delivered Orders Summary

**Difficulty:** Easy

Return total count, total revenue, and average amount but only for orders where status = 'Delivered'.

**Constraints:**

- WHERE + aggregates.

**Sample input:**

```
orders table.
```

**Sample output:**

```
8, 27600.00, 3450.00
```

**Solution:**

```sql
SELECT
  COUNT(*) AS delivered_count,
  SUM(amount) AS delivered_revenue,
  AVG(amount) AS avg_delivered
FROM orders
WHERE status = 'Delivered';
```

### Challenge 3. NULL-Safe Averages

**Difficulty:** Medium

For the discount column (which has 4 NULLs), compute two averages: (a) AVG ignoring NULLs, (b) AVG treating NULLs as 0. Show both.

**Constraints:**

- Use COALESCE for the second.

**Sample input:**

```
orders table.
```

**Sample output:**

```
excluding_nulls: 356.25, treating_null_as_zero: 237.50
```

**Solution:**

```sql
SELECT
  AVG(discount) AS excluding_nulls,
  AVG(COALESCE(discount, 0)) AS treating_null_as_zero
FROM orders;
```

### Challenge 4. Order Status Counts

**Difficulty:** Medium

Count how many orders are in each status using conditional aggregation — return columns 'delivered', 'cancelled', 'pending' in a single row.

**Constraints:**

- SUM(CASE WHEN ...). Do not use GROUP BY.

**Sample input:**

```
orders table.
```

**Sample output:**

```
8, 2, 2
```

**Solution:**

```sql
SELECT
  SUM(CASE WHEN status = 'Delivered' THEN 1 ELSE 0 END) AS delivered,
  SUM(CASE WHEN status = 'Cancelled' THEN 1 ELSE 0 END) AS cancelled,
  SUM(CASE WHEN status = 'Pending' THEN 1 ELSE 0 END) AS pending
FROM orders;
```

### Challenge 5. Find Customers Above Average Spend

**Difficulty:** Medium

List all customers who placed an order larger than the overall average amount.

**Constraints:**

- Use a subquery.

**Sample input:**

```
orders table. Overall average = 3708.33.
```

**Sample output:**

```
Rohan Gupta, Vikram Reddy, Karan Mehta, Aditya Rao, Diya Nair (5 rows)
```

**Solution:**

```sql
SELECT customer_name, amount FROM orders
WHERE amount > (SELECT AVG(amount) FROM orders)
ORDER BY amount DESC;
```

### Challenge 6. Monthly Revenue

**Difficulty:** Medium

Compute the total revenue for each month (January, February, March, April 2026) using conditional aggregation.

**Constraints:**

- SUM(CASE WHEN MONTH(order_date) = 1...).

**Sample input:**

```
orders table.
```

**Sample output:**

```
jan: 4300 (2500+1800), feb: 13300 (5600+3200+4500), mar: 22700 (1200+6700+2100+3800+8900), apr: 4200 (2700+1500)
```

**Solution:**

```sql
SELECT
  SUM(CASE WHEN MONTH(order_date) = 1 THEN amount ELSE 0 END) AS jan,
  SUM(CASE WHEN MONTH(order_date) = 2 THEN amount ELSE 0 END) AS feb,
  SUM(CASE WHEN MONTH(order_date) = 3 THEN amount ELSE 0 END) AS mar,
  SUM(CASE WHEN MONTH(order_date) = 4 THEN amount ELSE 0 END) AS apr
FROM orders;
```

### Challenge 7. Concatenate Top Mumbai Customers

**Difficulty:** Hard

Return a single string with Mumbai customer names sorted by order amount DESC, joined with ' -> '.

**Constraints:**

- GROUP_CONCAT with ORDER BY and SEPARATOR.

**Sample input:**

```
orders table.
```

**Sample output:**

```
'Karan Mehta -> Ananya Singh -> Arjun Desai -> Aarav Sharma'
```

**Solution:**

```sql
SELECT GROUP_CONCAT(customer_name ORDER BY amount DESC SEPARATOR ' -> ') AS mumbai_ranking
FROM orders
WHERE city = 'Mumbai';
```

### Challenge 8. Revenue Summary With Net Amount

**Difficulty:** Hard

Return a single row showing: gross revenue (SUM amount), total discount (NULLs as 0), net revenue (gross minus discount), average net per order, number of orders with discount given.

**Constraints:**

- Combine SUM, AVG, COUNT, COALESCE.

**Sample input:**

```
orders table.
```

**Sample output:**

```
gross 44500, total_discount 2850, net 41650, avg_net 3470.83, discount_given_count 8
```

**Solution:**

```sql
SELECT
  SUM(amount) AS gross,
  SUM(COALESCE(discount, 0)) AS total_discount,
  SUM(amount) - SUM(COALESCE(discount, 0)) AS net,
  (SUM(amount) - SUM(COALESCE(discount, 0))) / COUNT(*) AS avg_net,
  COUNT(discount) AS discount_given_count
FROM orders;
```

---

*Notes: https://learn.modernagecoders.com/resources/sql/aggregate-functions/*
