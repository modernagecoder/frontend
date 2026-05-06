---
title: "Practice: GROUP BY and HAVING"
description: "60 practice problems for GROUP BY and HAVING in SQL"
slug: group-by-and-having-practice
canonical: https://learn.modernagecoders.com/resources/sql/group-by-and-having/practice
category: "SQL"
---
# Practice: GROUP BY and HAVING

**Total questions:** 60

## Topic-Specific Questions

### Q1. [Easy] Total sales per region.

*Hint:* GROUP BY region.

**Answer:** ```
SELECT region, SUM(amount) FROM sales GROUP BY region;
```

4 rows: North 184000, South 160000, East 96000, West 153000.

### Q2. [Easy] Count the number of sales per salesperson.

*Hint:* GROUP BY salesperson.

**Answer:** ```
SELECT salesperson, COUNT(*) FROM sales GROUP BY salesperson;
```

Aarav 3, Priya 3, Rohan 2, Ananya 2, Vikram 1, Sneha 1, Karan 2, Diya 1. 8 rows.

### Q3. [Easy] Average sale amount per product.

*Hint:* GROUP BY product.

**Answer:** ```
SELECT product, AVG(amount) FROM sales GROUP BY product;
```

Laptop: avg of 7 sales (55000+60000+58000+65000+54000+62000+57000)/7 = 58714.29. Phone: avg of 5 sales. Tablet: avg of 3 sales. 3 rows.

### Q4. [Easy] Number of sales per region.

*Hint:* COUNT(*) per region.

**Answer:** ```
SELECT region, COUNT(*) FROM sales GROUP BY region;
```

North 5, South 4, East 3, West 3. 4 rows. Total checks out: 5+4+3+3 = 15.

### Q5. [Easy] Find regions with total sales above 150000.

*Hint:* HAVING with SUM.

**Answer:** ```
SELECT region, SUM(amount) FROM sales
GROUP BY region
HAVING SUM(amount) > 150000;
```

North 184000, South 160000, West 153000. East (96000) excluded. 3 rows.

### Q6. [Easy] Top 3 regions by total sales.

*Hint:* GROUP BY + ORDER BY + LIMIT.

**Answer:** ```
SELECT region, SUM(amount) AS total FROM sales
GROUP BY region
ORDER BY total DESC
LIMIT 3;
```

North 184000, South 160000, West 153000. East is 4th.

### Q7. [Easy] Salespeople with more than 2 sales.

*Hint:* HAVING COUNT(*).

**Answer:** ```
SELECT salesperson, COUNT(*) FROM sales
GROUP BY salesperson
HAVING COUNT(*) > 2;
```

Aarav (3) and Priya (3). 2 rows.

### Q8. [Easy] How many groups does GROUP BY region, product produce?

*Hint:* Unique (region, product) pairs.

**Answer:** `11 rows`

Let us count. Each region has certain products: North has Laptop, Phone, Tablet (3). South has Phone, Laptop, Tablet (3). East has Tablet, Phone, Laptop (3). West has Laptop, Phone (2). Total: 3+3+3+2 = 11 unique (region, product) pairs.

### Q9. [Easy] What is the difference between WHERE and HAVING?

*Hint:* When each runs.

**Answer:** `WHERE` filters **rows** BEFORE aggregation. `HAVING` filters **groups** AFTER aggregation. WHERE cannot use aggregate functions (SUM, COUNT, etc.) because the aggregates don't exist yet. HAVING can use aggregates because grouping is already done.

Classic interview question. Mnemonic: WHERE filters rows, HAVING filters groups. Use them together when you need to both pre-filter data (e.g., only delivered orders) and filter the aggregate results (e.g., only regions with total > threshold).

### Q10. [Easy] Why must non-aggregated columns in SELECT appear in GROUP BY?

*Hint:* Ambiguity without it.

**Answer:** If a column is not aggregated and not in GROUP BY, the database does not know which value to return for each group. A group of 5 rows may have 5 different values — which one should be picked? Standard SQL requires every SELECT column to be aggregated or grouped. MySQL's default strict mode enforces this with ONLY_FULL_GROUP_BY. Older lenient mode silently returned an arbitrary value — a dangerous bug.

This rule is fundamental to GROUP BY semantics. Always make sure SELECT columns are either in GROUP BY or inside an aggregate.

### Q11. [Medium] Total revenue per salesperson, only for sales above 30000 (filter rows first).

*Hint:* WHERE + GROUP BY.

**Answer:** ```
SELECT salesperson, SUM(amount) FROM sales
WHERE amount > 30000
GROUP BY salesperson;
```

WHERE keeps sales above 30000 first: ids 1,3,6,9,12,14,15. Then group by salesperson. Aarav (55000), Rohan (60000), Vikram (58000), Karan (65000), Ananya (54000), Diya (62000), Priya (57000). 7 rows.

### Q12. [Medium] Total sales per region, but only include regions where the number of sales is 4 or more.

*Hint:* HAVING COUNT(*) >= 4.

**Answer:** ```
SELECT region, SUM(amount) AS total, COUNT(*) AS n FROM sales
GROUP BY region
HAVING COUNT(*) >= 4;
```

North has 5 sales (pass), South has 4 (pass), East has 3 (fail), West has 3 (fail). 2 rows returned.

### Q13. [Medium] Average sale amount per region for Laptops only.

*Hint:* WHERE product = 'Laptop' first.

**Answer:** ```
SELECT region, AVG(amount) AS avg_laptop_price FROM sales
WHERE product = 'Laptop'
GROUP BY region;
```

WHERE keeps 7 Laptop rows. North avg: (55000+60000)/2 = 57500. South: (58000+57000)/2 = 57500. East: 54000. West: (65000+62000)/2 = 63500.

### Q14. [Medium] Show region and product combinations with total revenue above 100000.

*Hint:* GROUP BY 2 cols + HAVING SUM.

**Answer:** ```
SELECT region, product, SUM(amount) AS total FROM sales
GROUP BY region, product
HAVING SUM(amount) > 100000;
```

North-Laptop (115000), South-Laptop (115000), West-Laptop (127000). 3 rows.

### Q15. [Medium] How many rows does this return?

```
SELECT region FROM sales GROUP BY region HAVING COUNT(*) > 10;
```

*Hint:* Any region with > 10 sales?

**Answer:** `0 rows`

No region has more than 10 sales (North has 5 — the most). HAVING filters out all groups. Empty result.

### Q16. [Medium] What is the logical execution order of a SQL query with WHERE, GROUP BY, HAVING, SELECT, ORDER BY, LIMIT?

*Hint:* Seven phases.

**Answer:** Logical order: (1) **FROM** — identify source tables. (2) **WHERE** — filter individual rows. (3) **GROUP BY** — form groups. (4) **HAVING** — filter groups. (5) **SELECT** — compute output columns and aggregates. (6) **ORDER BY** — sort the result. (7) **LIMIT** — take first n rows.

Memorize this. Explains why WHERE cannot use aggregates (SELECT has not run yet), why HAVING can (runs after GROUP BY), and why ORDER BY can reference SELECT aliases.

### Q17. [Medium] Monthly revenue for 2026 (group by MONTH of sale_date).

*Hint:* GROUP BY MONTH(sale_date).

**Answer:** ```
SELECT MONTH(sale_date) AS month, SUM(amount) AS revenue FROM sales
WHERE YEAR(sale_date) = 2026
GROUP BY MONTH(sale_date)
ORDER BY month;
```

Jan: 140000. Feb: 118000. Mar: 136000. Apr: 199000. 4 rows.

### Q18. [Medium] Show salesperson and total revenue; include only those with total above 90000.

*Hint:* HAVING SUM.

**Answer:** ```
SELECT salesperson, SUM(amount) AS total FROM sales
GROUP BY salesperson
HAVING SUM(amount) > 90000;
```

Aarav 96000, Priya 102000, Karan 91000. Rohan 88000 fails. Ananya 72000 fails. 3 rows.

### Q19. [Medium] For each region, count unique products sold.

*Hint:* COUNT(DISTINCT product) per region.

**Answer:** ```
SELECT region, COUNT(DISTINCT product) AS unique_products FROM sales
GROUP BY region;
```

North sells Laptop, Phone, Tablet = 3. South sells Phone, Laptop, Tablet = 3. East: 3. West: 2 (Laptop, Phone).

### Q20. [Medium] What does this return?

```
SELECT COUNT(*) FROM sales GROUP BY region;
```

*Hint:* One row per region.

**Answer:** `4 rows: 5, 4, 3, 3`

4 regions, so 4 rows. Values are the row counts: North 5, South 4, East 3, West 3. (Order depends on implementation since no ORDER BY.)

### Q21. [Hard] Find regions where the average sale is above 40000 AND total sales count is at least 3.

*Hint:* HAVING with two conditions.

**Answer:** ```
SELECT region, AVG(amount) AS avg_sale, COUNT(*) AS n FROM sales
GROUP BY region
HAVING AVG(amount) > 40000 AND COUNT(*) >= 3;
```

North: avg 36800 (fail). South: avg 40000 (fail — not strictly above). East: avg 32000 (fail). West: avg 51000 (pass), count 3 (pass). Only West. Wait, recompute: South sum 160000 / 4 = 40000 — not strictly above. East: 96000/3 = 32000. West: 153000/3 = 51000 (pass). North: 184000/5 = 36800 (fail). Only West passes.

### Q22. [Hard] Find the salesperson with the highest total sales.

*Hint:* GROUP BY + ORDER BY DESC + LIMIT 1.

**Answer:** ```
SELECT salesperson, SUM(amount) AS total FROM sales
GROUP BY salesperson
ORDER BY total DESC
LIMIT 1;
```

Priya Patel 102000 is the top. Returns 1 row.

### Q23. [Hard] For products that have more than 3 sales, show the product and its average price.

*Hint:* GROUP BY product, HAVING COUNT(*) > 3.

**Answer:** ```
SELECT product, AVG(amount) AS avg_price, COUNT(*) AS n FROM sales
GROUP BY product
HAVING COUNT(*) > 3;
```

Laptop has 7 sales (pass). Phone has 5 (pass). Tablet has 3 (fail). Laptop avg: (55000+60000+58000+65000+54000+62000+57000)/7 = 58714.29. Phone avg: (25000+22000+28000+24000+26000)/5 = 25000.

### Q24. [Hard] What does this return?

```
SELECT region, SUM(amount)
FROM sales
WHERE product = 'Laptop'
GROUP BY region
HAVING SUM(amount) > 100000;
```

*Hint:* Laptop sales per region, filtered by sum.

**Answer:** `North 115000, South 115000, West 127000 — 3 rows`

WHERE keeps only Laptop rows (7 rows). GROUP BY region. Sums: North 55000+60000=115000, South 58000+57000=115000, East 54000, West 65000+62000=127000. HAVING > 100000 excludes East.

### Q25. [Hard] Can you get 'top 2 salespeople per region' using just GROUP BY? Why or why not?

*Hint:* GROUP BY collapses groups.

**Answer:** **No.** GROUP BY gives you one row per group, so you can get the top salesperson per region (by using MAX or by combining ORDER BY with LIMIT on the grouped result) but not the top N per group. LIMIT applies to the final result, not within groups. For top N per group, you need window functions — `ROW_NUMBER() OVER (PARTITION BY region ORDER BY total_sales DESC)` with a filter `WHERE rn <= 2`. This is covered in chapter 18 and is a very common interview question.

The top-N-per-group problem is the single most-asked SQL interview question for data analyst roles. Window functions are specifically designed for this.

### Q26. [Hard] Total sales per region, adding a grand total row. Use WITH ROLLUP.

*Hint:* GROUP BY region WITH ROLLUP.

**Answer:** ```
SELECT region, SUM(amount) FROM sales
GROUP BY region WITH ROLLUP;
```

5 rows: the 4 regions (NULL region is the grand total row). Grand total = 593000.

## Mixed Questions

### Q1. [Easy] Number of sales per product.

*Hint:* GROUP BY product.

**Answer:** ```
SELECT product, COUNT(*) FROM sales GROUP BY product;
```

Laptop 7, Phone 5, Tablet 3. 3 rows.

### Q2. [Easy] Average sale per region.

*Hint:* AVG + GROUP BY.

**Answer:** ```
SELECT region, AVG(amount) FROM sales GROUP BY region;
```

North 36800, South 40000, East 32000, West 51000.

### Q3. [Easy] Largest sale per region.

*Hint:* MAX + GROUP BY.

**Answer:** ```
SELECT region, MAX(amount) FROM sales GROUP BY region;
```

North 60000 (Rohan-Laptop), South 58000 (Vikram-Laptop), East 54000 (Ananya-Laptop), West 65000 (Karan-Laptop).

### Q4. [Easy] Revenue per salesperson, sorted by revenue DESC.

*Hint:* GROUP BY salesperson + ORDER BY.

**Answer:** ```
SELECT salesperson, SUM(amount) AS total FROM sales
GROUP BY salesperson
ORDER BY total DESC;
```

Priya 102000, Aarav 96000, Karan 91000, Rohan 88000, Ananya 72000, Diya 62000, Vikram 58000, Sneha 24000.

### Q5. [Easy] Find the salesperson with just 1 sale.

*Hint:* HAVING COUNT(*) = 1.

**Answer:** ```
SELECT salesperson FROM sales
GROUP BY salesperson
HAVING COUNT(*) = 1;
```

Vikram, Sneha, Diya — each with 1 sale.

### Q6. [Easy] How many rows?

```
SELECT product FROM sales GROUP BY product;
```

*Hint:* Distinct products.

**Answer:** `3 rows`

Laptop, Phone, Tablet.

### Q7. [Easy] Total revenue per product.

*Hint:* GROUP BY product with SUM.

**Answer:** ```
SELECT product, SUM(amount) FROM sales GROUP BY product;
```

Laptop 411000, Phone 125000, Tablet 57000.

### Q8. [Easy] Is this valid?

```
SELECT region, MAX(amount), COUNT(*) FROM sales GROUP BY region;
```

*Hint:* Multiple aggregates allowed?

**Answer:** `Yes — valid. Returns 4 rows.`

Multiple aggregates per group are fine. Each row shows region, max amount in that region, and count of sales in that region.

### Q9. [Medium] Find products with total revenue above 100000.

*Hint:* GROUP BY product, HAVING SUM > 100000.

**Answer:** ```
SELECT product, SUM(amount) FROM sales
GROUP BY product
HAVING SUM(amount) > 100000;
```

Laptop 411000 (pass), Phone 125000 (pass), Tablet 57000 (fail). 2 rows.

### Q10. [Medium] Revenue per (salesperson, product) combination.

*Hint:* GROUP BY two columns.

**Answer:** ```
SELECT salesperson, product, SUM(amount) FROM sales
GROUP BY salesperson, product;
```

Each unique salesperson-product pair. For example, Aarav-Laptop 55000, Aarav-Phone 22000, Aarav-Tablet 19000. Multiple rows per salesperson who sold multiple products.

### Q11. [Medium] Count sales per salesperson, but only where the sale amount is above 50000 (filter rows first).

*Hint:* WHERE + GROUP BY + COUNT.

**Answer:** ```
SELECT salesperson, COUNT(*) AS big_sales FROM sales
WHERE amount > 50000
GROUP BY salesperson;
```

Sales above 50000: Aarav (1), Rohan (1), Vikram (1), Karan (1), Ananya (1), Diya (1), Priya (1). Each person who had at least one big sale appears with count. 7 rows.

### Q12. [Medium] For each region, average sale amount but only show regions where that average is between 30000 and 50000.

*Hint:* HAVING with range.

**Answer:** ```
SELECT region, AVG(amount) AS avg_sale FROM sales
GROUP BY region
HAVING AVG(amount) BETWEEN 30000 AND 50000;
```

North 36800 (pass), South 40000 (pass), East 32000 (pass), West 51000 (fail). 3 rows.

### Q13. [Medium] What is the output row count?

```
SELECT region, product, SUM(amount) FROM sales GROUP BY region, product;
```

*Hint:* Unique (region, product) pairs.

**Answer:** `11 rows`

As counted earlier: North has 3 products, South 3, East 3, West 2. Total 11.

### Q14. [Medium] Show each region with its highest single sale and the product that made it.

*Hint:* MAX alone does NOT give you the corresponding product. Use a subquery.

**Answer:** ```
SELECT region, product, amount FROM sales
WHERE (region, amount) IN (
  SELECT region, MAX(amount) FROM sales GROUP BY region
);
```

Tricky! MAX alone cannot tell you 'which row had the max.' The subquery finds (region, max_amount) pairs, and the outer query matches rows with that combination. North-Laptop 60000 (Rohan), South-Laptop 58000 (Vikram), East-Laptop 54000 (Ananya), West-Laptop 65000 (Karan).

### Q15. [Medium] List products with at least 2 unique salespeople selling them.

*Hint:* HAVING COUNT(DISTINCT salesperson).

**Answer:** ```
SELECT product, COUNT(DISTINCT salesperson) AS unique_sellers FROM sales
GROUP BY product
HAVING COUNT(DISTINCT salesperson) >= 2;
```

Laptop sold by Aarav, Rohan, Vikram, Karan, Ananya, Diya, Priya — 7 unique. Phone by 5 unique. Tablet by Ananya, Priya, Aarav — 3 unique. All 3 products pass. 3 rows.

### Q16. [Hard] Find regions with more than 1 product type sold AND total revenue > 150000.

*Hint:* HAVING with AND of two aggregates.

**Answer:** ```
SELECT region, COUNT(DISTINCT product) AS products, SUM(amount) AS total FROM sales
GROUP BY region
HAVING COUNT(DISTINCT product) > 1 AND SUM(amount) > 150000;
```

North 3 products 184000 (pass), South 3 products 160000 (pass), East 3 products 96000 (fail total), West 2 products 153000 (pass). 3 rows.

### Q17. [Hard] Monthly revenue for Laptops only.

*Hint:* WHERE product = 'Laptop' + GROUP BY month.

**Answer:** ```
SELECT MONTH(sale_date) AS month, SUM(amount) FROM sales
WHERE product = 'Laptop'
GROUP BY MONTH(sale_date)
ORDER BY month;
```

Laptop sales: id 1 Jan (55000), 3 Jan (60000), 6 Feb (58000), 9 Mar (65000), 12 Apr (54000), 14 Apr (62000), 15 Apr (57000). Jan 115000, Feb 58000, Mar 65000, Apr 173000. 4 rows.

### Q18. [Hard] Show top salesperson per region (tricky — might need subquery).

*Hint:* Join with subquery that finds region-max totals.

**Answer:** ```
-- One approach: correlated subquery
SELECT region, salesperson, total FROM (
  SELECT region, salesperson, SUM(amount) AS total FROM sales
  GROUP BY region, salesperson
) t
WHERE (region, total) IN (
  SELECT region, MAX(total) FROM (
    SELECT region, salesperson, SUM(amount) AS total FROM sales
    GROUP BY region, salesperson
  ) t2
  GROUP BY region
);

-- Cleaner: use window functions (chapter 18)
```

GROUP BY alone struggles with 'top per group' — need window functions for clean solution. The subquery approach works but is verbose. Illustrates why window functions are important.

### Q19. [Hard] What does GROUP BY region WITH ROLLUP add to the output?

*Hint:* Extra row.

**Answer:** `An extra row with region=NULL representing the grand total`

ROLLUP adds subtotals. For single-column GROUP BY, that is one extra row with NULL in the grouped column and the grand total sum.

### Q20. [Hard] Show each region's share of total revenue as a percentage.

*Hint:* Use a subquery for total.

**Answer:** ```
SELECT
  region,
  SUM(amount) AS region_total,
  ROUND(SUM(amount) * 100.0 / (SELECT SUM(amount) FROM sales), 2) AS pct_of_total
FROM sales
GROUP BY region;
```

Total 593000. North 184000 → 31.03%. South 160000 → 26.98%. East 96000 → 16.19%. West 153000 → 25.80%. Sum: 100.00%.

## Multiple Choice Questions

### Q1. [Easy] Which clause groups rows sharing a column value?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** GROUP BY groups rows. HAVING filters groups. WHERE filters rows.

### Q2. [Easy] Which filters groups after aggregation?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** HAVING runs after GROUP BY and can use aggregates. WHERE runs before GROUP BY and cannot.

### Q3. [Easy] Where do non-aggregated SELECT columns go?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Every non-aggregated column in SELECT must be in GROUP BY. Otherwise SQL doesn't know which value to show per group.

### Q4. [Easy] Can WHERE reference an aggregate like SUM()?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** WHERE is evaluated before GROUP BY and aggregation. Use HAVING for aggregate filters.

### Q5. [Easy] What is the correct syntactic clause order?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Syntax order: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT. Cannot rearrange.

### Q6. [Medium] What does SELECT region, SUM(amount) FROM sales GROUP BY region HAVING COUNT(*) > 3 return?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** HAVING COUNT(*) > 3 keeps regions with more than 3 sales rows. Our data: North 5, South 4 pass; East 3, West 3 fail.

### Q7. [Medium] Which query is valid?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Option A: salesperson is not aggregated or grouped — error in strict mode. Option C: WHERE cannot use aggregate. Option D: HAVING without GROUP BY (valid but misused — should be WHERE).

### Q8. [Medium] In the logical execution order, when does SELECT run?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** Order: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT.

### Q9. [Medium] You want total sales per region, showing only regions with total > 100000. Which is correct?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** HAVING filters groups after aggregation. Other options have wrong clause order or use WHERE with aggregate.

### Q10. [Medium] GROUP BY region, product creates how many groups?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** Multi-column GROUP BY uses unique combinations. In our data: 11 such combinations.

### Q11. [Medium] Can you use a column alias in HAVING in MySQL?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** MySQL permits aliases in HAVING (because SELECT runs before HAVING in MySQL's evaluation). PostgreSQL requires the full expression. Either way, the expression form works in both.

### Q12. [Medium] What does WITH ROLLUP add?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** ROLLUP adds subtotal rows. For a single GROUP BY column, you get one extra row: NULL in that column with the grand total value.

### Q13. [Medium] What is the output of SELECT COUNT(*) FROM sales GROUP BY region?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** GROUP BY returns one row per group. COUNT(*) in each group counts rows in that group. 4 regions = 4 rows.

### Q14. [Hard] Why can't plain GROUP BY solve 'top 3 salespeople per region'?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** GROUP BY gives one row per group. LIMIT trims the whole result, not per group. Top N per group requires window functions (ROW_NUMBER, RANK with PARTITION BY).

### Q15. [Hard] Can WHERE reference a SELECT alias?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Aliases are defined in SELECT, which runs after WHERE. ORDER BY and HAVING (in MySQL) can reference them because they run after SELECT.

### Q16. [Hard] What does HAVING region = 'North' do?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** HAVING can reference grouped columns, not just aggregates. It works but is semantically wrong — use WHERE for row filtering. HAVING is slower because it runs after grouping.

### Q17. [Hard] SELECT region, COUNT(*) FROM sales GROUP BY region HAVING COUNT(*)>100; what happens if no group matches?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** If HAVING filters out all groups, the result is empty. No special row is returned. This is different from a plain aggregate without GROUP BY which always returns exactly one row.

### Q18. [Hard] Is SELECT SUM(amount) FROM sales GROUP BY region WITH ROLLUP ORDER BY region valid?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** A

**A is correct.** WITH ROLLUP is valid with ORDER BY. The NULL (grand total) row will appear at the start or end depending on sort and NULL handling.

### Q19. [Hard] SELECT department, AVG(salary) FROM employees GROUP BY department HAVING AVG(salary) > 60000 ORDER BY AVG(salary) DESC; what does this return?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** A fully valid GROUP BY query. Departments with avg > 60000 survive HAVING, then ORDER BY sorts by the same aggregate. ORDER BY can reference aggregates.

### Q20. [Hard] How do you get unique count per group?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** COUNT(DISTINCT product) per region tells you how many unique products each region sells. COUNT(*) would just count rows in each group.

## Coding Challenges

### Challenge 1. Sales By Region

**Difficulty:** Easy

Return total sales, count of sales, and average sale amount per region.

**Constraints:**

- GROUP BY region.

**Sample input:**

```
sales table.
```

**Sample output:**

```
North: 184000, 5, 36800 | South: 160000, 4, 40000 | East: 96000, 3, 32000 | West: 153000, 3, 51000
```

**Solution:**

```sql
SELECT region, SUM(amount) AS total, COUNT(*) AS sales_count, AVG(amount) AS avg_sale
FROM sales
GROUP BY region;
```

### Challenge 2. Big Customers

**Difficulty:** Easy

List salespeople whose total revenue exceeds 80000.

**Constraints:**

- HAVING SUM(amount) > 80000.

**Sample input:**

```
sales table.
```

**Sample output:**

```
Aarav Sharma 96000, Priya Patel 102000, Karan Mehta 91000, Rohan Gupta 88000
```

**Solution:**

```sql
SELECT salesperson, SUM(amount) AS total FROM sales
GROUP BY salesperson
HAVING SUM(amount) > 80000
ORDER BY total DESC;
```

### Challenge 3. Product Mix Per Region

**Difficulty:** Medium

For each region, count the number of unique products sold and the total revenue.

**Constraints:**

- COUNT(DISTINCT product) and SUM.

**Sample input:**

```
sales table.
```

**Sample output:**

```
North 3 products 184000 | South 3 products 160000 | East 3 products 96000 | West 2 products 153000
```

**Solution:**

```sql
SELECT region, COUNT(DISTINCT product) AS unique_products, SUM(amount) AS total
FROM sales
GROUP BY region
ORDER BY total DESC;
```

### Challenge 4. Laptop Hotspots

**Difficulty:** Medium

Find regions where total Laptop revenue exceeds 100000. Show region and Laptop revenue.

**Constraints:**

- WHERE + GROUP BY + HAVING.

**Sample input:**

```
sales table.
```

**Sample output:**

```
North 115000, South 115000, West 127000
```

**Solution:**

```sql
SELECT region, SUM(amount) AS laptop_revenue
FROM sales
WHERE product = 'Laptop'
GROUP BY region
HAVING SUM(amount) > 100000
ORDER BY laptop_revenue DESC;
```

### Challenge 5. Monthly Performance

**Difficulty:** Medium

Show monthly total revenue and number of sales for 2026, ordered by month.

**Constraints:**

- GROUP BY MONTH(sale_date).

**Sample input:**

```
sales table.
```

**Sample output:**

```
Jan: 3, 140000 | Feb: 4, 118000 | Mar: 4, 136000 | Apr: 4, 199000
```

**Solution:**

```sql
SELECT MONTH(sale_date) AS month, COUNT(*) AS num_sales, SUM(amount) AS revenue
FROM sales
WHERE YEAR(sale_date) = 2026
GROUP BY MONTH(sale_date)
ORDER BY month;
```

### Challenge 6. Multi-Salesperson Products

**Difficulty:** Medium

List products sold by at least 3 different salespeople.

**Constraints:**

- HAVING COUNT(DISTINCT salesperson) >= 3.

**Sample input:**

```
sales table.
```

**Sample output:**

```
Laptop (7 sellers), Phone (5 sellers), Tablet (3 sellers)
```

**Solution:**

```sql
SELECT product, COUNT(DISTINCT salesperson) AS num_sellers
FROM sales
GROUP BY product
HAVING COUNT(DISTINCT salesperson) >= 3;
```

### Challenge 7. Regional Share

**Difficulty:** Hard

Show each region, its total revenue, and its percentage share of grand total revenue (rounded to 2 decimals).

**Constraints:**

- Use subquery for total.

**Sample input:**

```
sales table. Grand total = 593000.
```

**Sample output:**

```
North 184000 31.03% | South 160000 26.98% | East 96000 16.19% | West 153000 25.80%
```

**Solution:**

```sql
SELECT
  region,
  SUM(amount) AS regional_total,
  ROUND(SUM(amount) * 100.0 / (SELECT SUM(amount) FROM sales), 2) AS pct_share
FROM sales
GROUP BY region
ORDER BY regional_total DESC;
```

### Challenge 8. Most Popular Product Per Region

**Difficulty:** Hard

Find the best-selling product (by revenue) for each region. Return region, product, total revenue.

**Constraints:**

- Cannot use simple GROUP BY alone — need subquery or window functions.

**Sample input:**

```
sales table.
```

**Sample output:**

```
North Laptop 115000, South Laptop 115000, East Laptop 54000, West Laptop 127000
```

**Solution:**

```sql
-- Subquery approach (GROUP BY + subquery for max)
SELECT region, product, total FROM (
  SELECT region, product, SUM(amount) AS total
  FROM sales
  GROUP BY region, product
) t
WHERE (region, total) IN (
  SELECT region, MAX(total) FROM (
    SELECT region, product, SUM(amount) AS total
    FROM sales
    GROUP BY region, product
  ) t2
  GROUP BY region
);

-- Window function approach (cleaner; chapter 18)
SELECT region, product, total FROM (
  SELECT region, product,
         SUM(amount) AS total,
         ROW_NUMBER() OVER (PARTITION BY region ORDER BY SUM(amount) DESC) AS rn
  FROM sales
  GROUP BY region, product
) t
WHERE rn = 1;
```

---

*Notes: https://learn.modernagecoders.com/resources/sql/group-by-and-having/*
