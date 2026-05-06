---
title: "Practice: Indexes and Query Performance in SQL"
description: "62 practice problems for Indexes and Query Performance in SQL in SQL"
slug: indexes-and-performance-practice
canonical: https://learn.modernagecoders.com/resources/sql/indexes-and-performance/practice/
category: "SQL"
---
# Practice: Indexes and Query Performance in SQL

**Total questions:** 62

## Topic-Specific Questions

### Q1. [Easy] What data structure does MySQL use for most indexes?

*Hint:* Balanced tree.

**Answer:** `B-Tree`

Almost all MySQL indexes (primary, secondary, composite, unique) are B-Trees. Full-text and spatial indexes use different structures, but B-Tree is the default.

### Q2. [Easy] In InnoDB, what is the clustered index?

*Hint:* The table itself.

**Answer:** The primary key's B-Tree — the table rows ARE the leaves. Data is physically ordered by PK.

This is why accessing rows by PK is the fastest operation. Secondary indexes store the PK at the leaf level and do a 'PK lookup' to fetch the full row.

### Q3. [Easy] What command creates an index on a column?

*Hint:* Standard DDL.

**Answer:** `CREATE INDEX idx_name ON table(column);`

Or equivalently, `ALTER TABLE table ADD INDEX idx_name (column);`.

### Q4. [Easy] Given an index on (a, b, c), which query CANNOT use it?

*Hint:* Leftmost prefix rule.

**Answer:** `WHERE b = 5 AND c = 10` — missing the leading 'a' column.

Composite indexes require the leftmost column to be in the WHERE for the index to help. `WHERE a = 1`, `WHERE a = 1 AND b = 5`, and `WHERE a = 1 AND b = 5 AND c = 10` all use the index.

### Q5. [Easy] What command shows MySQL's query plan?

*Hint:* Single keyword before the SELECT.

**Answer:** `EXPLAIN`

`EXPLAIN SELECT ...` shows the plan without running the query. `EXPLAIN ANALYZE SELECT ...` actually runs it and shows timing.

### Q6. [Medium] In EXPLAIN output, what does type=ALL indicate?

*Hint:* The scanned rows are...

**Answer:** A full table scan — no index used. On large tables this is slow.

The 'type' column ranks from best (const) to worst (ALL). See it on any big table and you probably need an index.

### Q7. [Medium] What does 'Using index' in EXPLAIN's Extra column mean?

*Hint:* Related to covering index.

**Answer:** The query is served entirely from the index (no row lookup) — a covering index was used.

This is the fastest access pattern for indexed reads. It avoids the PK lookup that secondary indexes usually require.

### Q8. [Medium] Why does `WHERE YEAR(date_col) = 2026` often not use an index on date_col?

*Hint:* Function on indexed column.

**Answer:** The function YEAR() must be evaluated for every row to check the predicate, which requires scanning every row — defeating the index.

Rewrite as a sargable range: `WHERE date_col >= '2026-01-01' AND date_col < '2027-01-01'`.

### Q9. [Medium] Given a 1M-row table, roughly how many B-Tree disk reads are needed for a PK lookup?

*Hint:* B-Trees are wide.

**Answer:** About 3-4 reads (log_100(1,000,000) ≈ 3).

B-Trees are wide (often 100+ keys per node), so trees are shallow. This is why indexed lookups are milliseconds even on huge tables.

### Q10. [Medium] Does `WHERE name LIKE 'Aar%'` use an index on name?

*Hint:* Prefix wildcard.

**Answer:** Yes — prefix wildcards are sargable.

The B-Tree is ordered alphabetically; MySQL can seek to 'Aar' and scan forward until the prefix no longer matches.

### Q11. [Medium] Does `WHERE name LIKE '%sharma'` use the index?

*Hint:* Leading wildcard.

**Answer:** No — leading wildcard prevents B-Tree use.

Without a fixed prefix to seek to, MySQL must examine every row. Use a FULLTEXT index or refactor the query.

### Q12. [Medium] What is cardinality in SHOW INDEX output?

*Hint:* Distinctness.

**Answer:** The estimated number of distinct values in the column. Higher cardinality = more selective index.

Cardinality close to the row count means the index is highly selective. Cardinality of 2 (for a gender column) is nearly useless by itself.

### Q13. [Hard] In a composite index on (a, b), does a query `WHERE a = 1 ORDER BY b` need a separate sort?

*Hint:* B-Trees store values in order.

**Answer:** No. The index already has rows sorted by b within a=1, so MySQL reads them in order.

Composite indexes can serve both WHERE filtering and ORDER BY, eliminating the 'Using filesort' step. This is a huge perf win for pagination.

### Q14. [Hard] What is the 'Using filesort' note in EXPLAIN?

*Hint:* It's about sorting.

**Answer:** MySQL is sorting the result set in memory (or on disk if too big), because no index provided the required order. On large result sets this is slow.

Avoid filesort by indexing on the ORDER BY columns — ideally as part of the same composite index that serves the WHERE.

### Q15. [Hard] If you have indexes on (a), (b), and (a, b), which one is likely redundant?

*Hint:* Leftmost prefix.

**Answer:** The index on (a) alone is usually redundant — (a, b) can serve any query that (a) alone can.

Drop the redundant index to save disk and speed writes. The only exception is if index size is a concern; (a) alone is smaller than (a, b), which may matter for very narrow hot queries.

### Q16. [Medium] What is a covering index?

*Hint:* All columns needed.

**Answer:** A covering index contains ALL the columns the query needs (both in SELECT and WHERE). MySQL can answer the query entirely from the index without looking up rows. EXPLAIN shows 'Using index' in the Extra column.

Build covering indexes by adding frequently-selected columns to the end of a composite index used for filtering. Avoid SELECT * if you want to benefit from covering indexes.

### Q17. [Hard] Why do indexes slow down writes?

*Hint:* Writes have to maintain consistency.

**Answer:** Every INSERT must add entries to every index. Every UPDATE that changes indexed columns must reposition index entries. Every DELETE must remove index entries. The more indexes, the more work per write. Additionally, index pages must be updated in the buffer pool and eventually on disk, which contributes to I/O.

This is why over-indexing hurts OLTP performance. Tables with 50 indexes can see writes slow by 10x or more compared to one with 5 well-chosen indexes.

### Q18. [Hard] When is it worth NOT indexing a column that appears in WHERE?

*Hint:* Think about cardinality and table size.

**Answer:** Don't index if: (1) the table is tiny (full scan is already fast), (2) the column has low cardinality AND the query distribution is balanced (e.g., status with 3 equal-frequency values), (3) the query is rare, (4) you have better indexes that already serve the predicate, (5) write performance is critical and the index isn't high-impact on read perf.

Every indexing decision is a read-write trade-off. Measure with EXPLAIN and timings, don't guess.

### Q19. [Easy] Write the SQL to create an index on the email column of a users table.

*Hint:* Standard DDL.

**Answer:** ```
CREATE INDEX idx_users_email ON users(email);
```

Speeds up any query that filters on email (login, uniqueness checks, lookups).

### Q20. [Medium] Given a common query `WHERE customer_id = ? AND order_date >= ?`, write the best composite index.

*Hint:* Equality before range.

**Answer:** ```
CREATE INDEX idx_orders_cust_date
  ON orders(customer_id, order_date);
```

customer_id first because it's an equality filter (narrows down fast). order_date second because it's a range, which must come last in the composite index.

### Q21. [Medium] Rewrite this query to be sargable (index-friendly): `SELECT * FROM orders WHERE MONTH(order_date) = 4 AND YEAR(order_date) = 2026;`

*Hint:* Convert to a range.

**Answer:** ```
SELECT * FROM orders
WHERE order_date >= '2026-04-01'
  AND order_date <  '2026-05-01';
```

The half-open range avoids function calls on the indexed column. Any B-Tree index on order_date now kicks in.

### Q22. [Hard] Given a query `SELECT customer_id, SUM(amount) FROM orders WHERE status='paid' GROUP BY customer_id ORDER BY SUM(amount) DESC LIMIT 10;` — propose an index that helps.

*Hint:* Filter by status, then group by customer, summing amount.

**Answer:** ```
CREATE INDEX idx_orders_status_cust_amt
  ON orders(status, customer_id, amount);
```

status first (equality, narrows rows). customer_id second (GROUP BY column, allows index-based grouping). amount last (covered so SUM can be computed without row lookup). EXPLAIN should show 'Using index'.

### Q23. [Medium] Write the command to see all indexes on the 'orders' table.

*Hint:* SHOW command.

**Answer:** ```
SHOW INDEX FROM orders;
-- Or:
SHOW CREATE TABLE orders;
```

`SHOW INDEX` gives per-column detail. `SHOW CREATE TABLE` gives the full DDL including index definitions.

### Q24. [Hard] Write an EXPLAIN statement for this query and describe what you would look for in the output: `SELECT name FROM users WHERE email = 'aarav@x.com';`

*Hint:* Check type, key, rows, Extra.

**Answer:** ```
EXPLAIN SELECT name FROM users WHERE email = 'aarav@x.com';
```

Look for: type should be const or ref (unique or regular index hit), key should name your email index, rows should be 1 (or close), Extra should ideally say 'Using index' if the index covers 'name'.

If type=ALL, you need an index on email. If rows is high but you expect 1, the optimizer's stats may be stale — run ANALYZE TABLE.

### Q25. [Hard] You see 'type=index' in EXPLAIN. Is that good?

*Hint:* Not as good as it sounds.

**Answer:** Not really. type=index means MySQL is doing a FULL index scan — reading every index entry in order. It's better than type=ALL (full table scan) because the index is usually smaller than the table, but it's still a scan. Aim for type=ref, range, eq_ref, or const.

People often confuse type=index with 'using an index'. A true index seek is type=ref or range. type=index means 'I couldn't use the index for seeking but I'll read it in order because it's smaller than the table'.

## Mixed Questions

### Q1. [Easy] If a query is running fast on 100 rows and slow on 1M rows, the likely cause is:

*Hint:* Full-scan cost grows linearly.

**Answer:** A full table scan — missing or unused index.

At small table sizes, a full scan is fast enough that you don't notice the missing index. At million-row scale it becomes unbearably slow.

### Q2. [Easy] A unique index does what in addition to speeding up queries?

*Hint:* Constraint.

**Answer:** Enforces uniqueness — duplicate inserts fail with a 1062 error.

UNIQUE INDEX = UNIQUE CONSTRAINT + B-Tree. Two purposes for one structure.

### Q3. [Medium] Given an index on (a, b), can `WHERE a = 1 ORDER BY b DESC` use the index for sorting?

*Hint:* Indexes can be scanned backward.

**Answer:** Yes. MySQL reads the index in reverse — 'Backward index scan' — no filesort needed.

MySQL 8.0 supports explicit descending indexes and efficient backward scans. For older MySQL, adding DESC to the index column helped.

### Q4. [Medium] You run EXPLAIN and see rows=5,000,000. Is the query guaranteed to scan 5 million rows?

*Hint:* EXPLAIN shows estimates.

**Answer:** No — 'rows' is an estimate based on statistics, not an exact count.

Run `ANALYZE TABLE orders;` if estimates look badly wrong. EXPLAIN ANALYZE (MySQL 8.0.18+) runs the query and shows actuals.

### Q5. [Medium] Which is typically faster on a 10M-row table: primary-key lookup or a secondary-index lookup fetching all columns?

*Hint:* PK lookup step.

**Answer:** Primary-key lookup. Secondary-index lookup requires an extra 'PK lookup' step to fetch non-indexed columns.

This is why `WHERE id = ?` is the fastest query possible in InnoDB.

### Q6. [Medium] Drop the index idx_old from the table t.

*Hint:* Two equivalent syntaxes.

**Answer:** ```
DROP INDEX idx_old ON t;
-- or
ALTER TABLE t DROP INDEX idx_old;
```

Both forms work. The ALTER TABLE form is also usable to do multiple changes in one statement.

### Q7. [Hard] You have orders(id, customer_id, product_id, amount, status). Queries often filter by (customer_id, status) and (product_id, status). Propose good indexes.

*Hint:* Two composite indexes, each matching a query pattern.

**Answer:** ```
CREATE INDEX idx_orders_cust_status
  ON orders(customer_id, status);

CREATE INDEX idx_orders_prod_status
  ON orders(product_id, status);
```

One composite per query pattern. Do not add a separate index on status alone — neither pattern needs it.

### Q8. [Hard] Your EXPLAIN output shows 'Using where; Using filesort'. What does it mean and how do you improve?

*Hint:* Filesort = sorting without an index.

**Answer:** The query filters rows (using where) but the ORDER BY requires a separate sort step (filesort) because no index provided the sorted order. Improve by adding an index that covers both the WHERE columns and the ORDER BY column (equality first, then sort column).

Filesort can be OK for small result sets, but on large ones it may spill to disk. For pagination queries especially, sorted indexes are worth their weight.

### Q9. [Hard] Implicit type conversion can kill an index. Explain with an example.

*Hint:* Column type vs parameter type.

**Answer:** If phone is VARCHAR and you query `WHERE phone = 9810012345` (integer), MySQL converts all phone values to integers for comparison — a function on every row. Fix: pass the parameter as a string: `WHERE phone = '9810012345'`.

Type mismatches between column and parameter silently sabotage indexes. Always match your bind-parameter types to column types. ORM users: watch for this with prepared statements.

### Q10. [Medium] What's the difference between PRIMARY KEY and UNIQUE INDEX?

*Hint:* Nullability and count.

**Answer:** A table has at most one PRIMARY KEY; PK columns cannot be NULL; in InnoDB the PK defines the clustered index (table order). A table can have many UNIQUE INDEXes; unique index columns CAN be NULL (multiple NULLs are allowed because NULL != NULL). Both enforce uniqueness and speed up lookups.

If uniqueness is all you need and NULLs are expected, a unique index is perfect. For the main identity of the row, use PRIMARY KEY.

### Q11. [Hard] How does the optimizer choose between two candidate indexes?

*Hint:* Cost-based.

**Answer:** MySQL's optimizer is cost-based. It estimates the number of rows each plan would read (using index cardinality and histograms) and picks the plan with the lowest estimated cost. If stats are stale (table grew, data shifted), it may pick wrong. Run `ANALYZE TABLE` to refresh stats, or use `FORCE INDEX` as a last resort.

Never guess — always run EXPLAIN. If the optimizer consistently picks the wrong index, dig into stats before reaching for index hints.

## Multiple Choice Questions

### Q1. [Easy] What data structure does MySQL use for most indexes?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Default storage engine InnoDB uses B-Tree indexes for all standard indexes. MEMORY engine offers HASH indexes. FULLTEXT uses inverted indexes.

### Q2. [Easy] Which command creates an index?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** `CREATE INDEX name ON table(col)` is the SQL-standard syntax. `ALTER TABLE t ADD INDEX name (col)` is equivalent.

### Q3. [Easy] In InnoDB, the primary key defines:

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Rows ARE the leaves of the PK B-Tree. Secondary indexes reference the PK for row lookups.

### Q4. [Easy] Which EXPLAIN 'type' is the worst?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** D

**D is correct.** ALL = full table scan. The ranking best→worst is: const, eq_ref, ref, range, index, ALL.

### Q5. [Easy] Which is the correct composite index for `WHERE a = ? AND b = ? AND c > ?`?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Equality columns first (a, b), range column last (c). This order lets the index narrow fast and then range-scan on c.

### Q6. [Medium] Which query can use a B-Tree index on name?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Only prefix LIKE (no leading wildcard) is sargable. Options A, C, D all disable the index.

### Q7. [Medium] What does 'Using index' in EXPLAIN's Extra column indicate?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Covering index — no need to access the table itself. Fastest possible read.

### Q8. [Medium] Which operation in InnoDB is ALWAYS the fastest?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** PK lookup = 1 B-Tree traversal in the clustered index, fetching the full row directly. No PK lookup step needed.

### Q9. [Medium] Which query would NOT use an index on (customer_id, order_date)?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** No leading customer_id — leftmost prefix rule violated, cannot use the index.

### Q10. [Medium] Why might adding too many indexes HURT performance?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Writes must maintain all indexes; disk and RAM are wasted on duplicated data.

### Q11. [Medium] What does EXPLAIN ANALYZE do (MySQL 8.0.18+)?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Regular EXPLAIN shows estimates; EXPLAIN ANALYZE runs the query and returns actuals, exposing estimate errors.

### Q12. [Hard] Which is the best fix for `WHERE UPPER(email) = 'AARAV@X.COM'`?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Canonicalize on insert. Option A doesn't help because UPPER() on the column still kills sargability. MySQL 8 also supports functional indexes as an alternative, but canonical storage is simpler.

### Q13. [Hard] A query uses 'Using temporary; Using filesort'. What does this suggest?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** These are both red flags for performance on large result sets. Check if a composite index can serve both the GROUP BY and ORDER BY.

### Q14. [Hard] When are HASH indexes (in MEMORY engine) faster than B-Trees?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Hash indexes are O(1) for exact matches but useless for ranges and ordering. B-Trees are O(log n) exact and O(log n + k) for ranges — more versatile.

### Q15. [Hard] Why does `SELECT *` hurt covering-index performance?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** SELECT * forces MySQL to fetch all columns, which usually means a PK lookup even if the filter is served by a secondary index. List only the columns you need to benefit from covering indexes.

### Q16. [Easy] Which SHOW command lists all indexes on a table?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** `SHOW INDEX FROM t` or `SHOW INDEXES FROM t` — both work.

### Q17. [Medium] Cardinality in SHOW INDEX represents:

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** High cardinality = selective index. Low cardinality = few distinct values (often a poor index choice by itself).

### Q18. [Hard] Why might the optimizer pick a full scan over an available index?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** If the optimizer estimates the index will read more than ~20-30% of the table, a sequential scan may actually be faster because of I/O patterns. Stale statistics can also trigger this — ANALYZE TABLE refreshes them.

### Q19. [Medium] Which is the correct way to drop an index?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** A

**A is correct.** `DROP INDEX idx ON table` or `ALTER TABLE table DROP INDEX idx`.

### Q20. [Hard] Which scenario is a GOOD use case for a FULLTEXT index?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** FULLTEXT indexes are for natural-language search on text columns. They are not used for equality, ranges, or joins.

## Coding Challenges

### Challenge 1. Create and Verify a Simple Index

**Difficulty:** Easy

Given users(id, name, email), create an index on email, then run EXPLAIN on `SELECT * FROM users WHERE email = 'aarav@example.com'` to confirm it is used. Describe what changed.

**Constraints:**

- Use CREATE INDEX. Show EXPLAIN output.

**Sample input:**

```
users table with ~100k rows.
```

**Sample output:**

```
EXPLAIN shows type=ref and the new index in 'key' column.
```

**Solution:**

```sql
CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(50), email VARCHAR(100));
INSERT INTO users VALUES (1,'Aarav Sharma','aarav@example.com'),
                        (2,'Priya Nair','priya@example.com');

-- Before index
EXPLAIN SELECT * FROM users WHERE email = 'aarav@example.com';
-- type=ALL, rows=2

CREATE INDEX idx_users_email ON users(email);

-- After index
EXPLAIN SELECT * FROM users WHERE email = 'aarav@example.com';
-- type=ref, key=idx_users_email, rows=1
-- Explanation: B-Tree lookup replaces full scan; on a big table this is 1000x+ faster.
```

### Challenge 2. Design a Composite Index

**Difficulty:** Easy

Given orders(id, customer_id, order_date, amount, status), the app runs `WHERE customer_id = ? AND order_date >= ?` frequently. Create the best composite index.

**Constraints:**

- Equality column first, range column second.

**Sample input:**

```
No data required — DDL only.
```

**Sample output:**

```
CREATE INDEX statement.
```

**Solution:**

```sql
CREATE TABLE orders (
  id INT PRIMARY KEY,
  customer_id INT,
  order_date DATE,
  amount DECIMAL(10,2),
  status VARCHAR(20)
);

CREATE INDEX idx_orders_cust_date
  ON orders(customer_id, order_date);

-- Test:
EXPLAIN SELECT * FROM orders
 WHERE customer_id = 101 AND order_date >= '2026-01-01';
-- type=range, key=idx_orders_cust_date
```

### Challenge 3. Fix an Anti-Sargable Query

**Difficulty:** Medium

Rewrite this query to be index-friendly and explain why it helps: `SELECT * FROM orders WHERE YEAR(order_date) = 2026 AND MONTH(order_date) = 4;`

**Constraints:**

- No functions on indexed column.

**Sample input:**

```
orders table with an index on order_date.
```

**Sample output:**

```
Sargable range query that uses the index.
```

**Solution:**

```sql
-- Bad (full scan)
SELECT * FROM orders
WHERE YEAR(order_date) = 2026 AND MONTH(order_date) = 4;

-- Good (range scan on the B-Tree)
SELECT * FROM orders
WHERE order_date >= '2026-04-01'
  AND order_date <  '2026-05-01';
-- Explanation: the range predicate keeps order_date bare,
-- so the B-Tree on order_date can be traversed directly.
-- The old version forced YEAR() and MONTH() on every row.
```

### Challenge 4. Build a Covering Index

**Difficulty:** Medium

The query `SELECT customer_id, SUM(amount) FROM orders WHERE status='paid' GROUP BY customer_id;` is slow. Design a composite index that covers it fully.

**Constraints:**

- Status (equality) first, then customer_id (GROUP BY), then amount (covered).

**Sample input:**

```
orders table.
```

**Sample output:**

```
Index with status, customer_id, amount.
```

**Solution:**

```sql
CREATE INDEX idx_orders_status_cust_amt
  ON orders(status, customer_id, amount);

-- EXPLAIN should show 'Using index' in Extra
EXPLAIN
SELECT customer_id, SUM(amount)
FROM orders
WHERE status = 'paid'
GROUP BY customer_id;
-- Expected: type=ref, key=idx_orders_status_cust_amt, Extra='Using index'
-- Fully covering: no row lookup, aggregation happens on the index.
```

### Challenge 5. Diagnose via EXPLAIN

**Difficulty:** Medium

Given a slow query, explain why it's slow (EXPLAIN output shows type=ALL, rows=2,000,000, Extra='Using where; Using filesort'). Propose an index that solves both issues.

**Constraints:**

- Address both the filter and the sort.

**Sample input:**

```
SELECT * FROM logs WHERE level = 'ERROR' ORDER BY created_at DESC LIMIT 100;
```

**Sample output:**

```
Diagnosis + index.
```

**Solution:**

```sql
-- Diagnosis:
-- type=ALL -> full table scan (no index used for WHERE)
-- rows=2M -> large scan
-- 'Using filesort' -> separate sort step, not index-provided

-- Fix: composite index that both filters (level) and pre-sorts (created_at DESC)
CREATE INDEX idx_logs_level_created
  ON logs(level, created_at DESC);

-- After:
-- type=ref, rows='a few thousand', no filesort (backward index scan).
-- Query time drops from seconds to milliseconds.
```

### Challenge 6. Drop Redundant Indexes

**Difficulty:** Hard

Given a table with indexes idx_a (a), idx_b (b), idx_ab (a, b), which index is redundant? Write the DROP statement.

**Constraints:**

- Justify the decision.

**Sample input:**

```
No data required.
```

**Sample output:**

```
One DROP INDEX statement with explanation.
```

**Solution:**

```sql
-- idx_a is redundant: any query on 'a' alone can use idx_ab (leftmost prefix).
-- idx_b stays: needed for queries on b alone.
-- idx_ab stays: needed for queries on (a, b).

DROP INDEX idx_a ON t;

-- Verification:
-- EXPLAIN SELECT * FROM t WHERE a = 5;
-- Should still show type=ref, key=idx_ab
-- Saves disk + speeds up writes to 't'.
```

### Challenge 7. FULLTEXT vs B-Tree

**Difficulty:** Hard

Given posts(id, title, body), explain why `WHERE body LIKE '%django%'` is slow and rewrite using a FULLTEXT index.

**Constraints:**

- Use FULLTEXT correctly.

**Sample input:**

```
posts table with 100k rows.
```

**Sample output:**

```
FULLTEXT index + MATCH AGAINST query.
```

**Solution:**

```sql
-- Leading wildcard LIKE kills any B-Tree index on body.
-- Full scan examines every row.

-- Fix: FULLTEXT index with natural-language search
CREATE FULLTEXT INDEX idx_posts_body ON posts(body);

-- Query becomes:
SELECT id, title
FROM posts
WHERE MATCH(body) AGAINST('django' IN NATURAL LANGUAGE MODE)
LIMIT 20;

-- EXPLAIN shows type=fulltext.
-- Supports phrase search, relevance ranking, stopword handling.
-- Caveats: min token length (default 4 chars, configurable),
-- InnoDB stopword list, requires rebuilding index after bulk load.
```

### Challenge 8. End-to-End Query Tuning

**Difficulty:** Hard

You get a complaint: 'The orders dashboard is slow'. The query: `SELECT customer_id, SUM(amount) AS t FROM orders WHERE status='paid' AND order_date >= '2026-01-01' GROUP BY customer_id ORDER BY t DESC LIMIT 10;`. Walk through EXPLAIN, propose the index, and verify.

**Constraints:**

- Explain every step.

**Sample input:**

```
orders(id, customer_id, order_date, amount, status) with 50M rows.
```

**Sample output:**

```
Full diagnosis, index, and verified EXPLAIN.
```

**Solution:**

```sql
-- Step 1: Baseline EXPLAIN
-- type=ALL, rows=50M, Extra='Using where; Using temporary; Using filesort'
-- Dashboard takes 15+ seconds.

-- Step 2: Analyze the query
-- Filter: status + order_date (two columns, mixed equality/range)
-- Group: customer_id
-- Sort: SUM(amount) DESC (can't be served by an index -- aggregate result)
-- Project: customer_id, amount

-- Step 3: Design an index
-- Put equality first (status), then range (order_date). Include customer_id
-- and amount for covering, so aggregation doesn't need row lookups.

CREATE INDEX idx_orders_status_date_cust_amt
  ON orders(status, order_date, customer_id, amount);

-- Step 4: Re-run EXPLAIN
-- type=range, key=idx_orders_status_date_cust_amt
-- rows=~500k (filtered down from 50M)
-- Extra='Using where; Using index; Using temporary; Using filesort'
-- The 'Using temporary' and 'Using filesort' remain because the ORDER BY
-- is on the AGGREGATE SUM(amount), not the raw columns -- that's unavoidable.
-- But the 100x reduction in scanned rows takes the query from 15s to ~200ms.

-- Step 5: Verify with EXPLAIN ANALYZE to confirm actual timing.
```

---

*Notes: https://learn.modernagecoders.com/resources/sql/indexes-and-performance/*
