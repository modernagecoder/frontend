---
title: "SQL Indexes and Performance - B-Tree, Composite, EXPLAIN Plans, Query Optimization | Modern Age Coders"
description: "Master MySQL indexing: B-Tree structure, primary vs secondary indexes, composite indexes and leftmost prefix rule, covering indexes, EXPLAIN plan reading, sargable predicates, and anti-patterns that kill performance. 62+ interview-grade practice questions."
slug: indexes-and-performance
canonical: https://learn.modernagecoders.com/resources/sql/indexes-and-performance
category: "SQL"
keywords: ["mysql index", "b-tree index", "composite index", "leftmost prefix", "explain mysql", "query optimization", "sargable sql", "covering index", "innodb clustered index", "index anti-pattern"]
---
# Indexes and Query Performance in SQL

**Difficulty:** Advanced  
**Reading time:** 50 min  
**Chapter:** 20  
**Practice questions:** 62

## What Is an Index?

An index in a database is exactly like the index at the back of a textbook. Without the index, to find every mention of 'recursion' you'd flip through every page (a full table scan). With the index, you look up 'recursion', it tells you pages 112, 245, 391, and you jump straight there.

A database index is a separate data structure (almost always a B-Tree) that stores a sorted copy of one or more columns plus a pointer back to the row. Queries that filter, join, or sort on those columns can find matching rows in `O(log n)` time instead of `O(n)`.

```
-- Without an index, this scans every row in a 10M-row table
SELECT * FROM orders WHERE customer_id = 12345;
-- Could take 30+ seconds.

CREATE INDEX idx_orders_customer ON orders(customer_id);

-- Same query, with the index: < 10 ms
SELECT * FROM orders WHERE customer_id = 12345;
```

Indexes are the single biggest lever for query performance. They are also the single biggest source of silent performance bugs — the wrong index (or the absence of one) can slow a fast app by 1000x.

### The B-Tree in 60 Seconds

Almost every index in MySQL is a **B-Tree** — a balanced tree structure where each node holds sorted keys pointing to child nodes. Finding a value in a B-Tree of N rows takes about `log_100(N)` disk reads (because B-Trees are very wide). For a 100-million-row table, that's about 4 reads. That's how a properly indexed query returns in milliseconds even on huge tables.

## Why Indexes Matter

### 1. Orders-of-Magnitude Speedup

A full scan of a 100M-row table takes minutes. An indexed lookup takes milliseconds. We are not talking about shaving 10% — we are talking about 10,000x improvements. This is literally the difference between a usable app and a broken one.

### 2. Every Real Query Is Indexed

Every production SQL query at Flipkart, Zomato, or any serious company is written with indexes in mind. The WHERE columns, JOIN columns, and ORDER BY columns on big tables need indexes. Understanding which index kicks in (and which don't) is a daily engineering concern.

### 3. Indexes Are Not Free

Every INSERT, UPDATE, and DELETE on an indexed table has to update the index too. Over-indexing (creating indexes on every column just in case) makes writes slower and wastes disk. The right number of indexes is a careful trade-off.

### 4. EXPLAIN Is a Superpower

MySQL's `EXPLAIN` command shows exactly how the optimizer plans to run a query — which index it will use, how many rows it estimates, and whether it will fall back to a full scan. A developer who can read EXPLAIN plans can diagnose and fix slow queries in minutes. One who can't will copy-paste solutions from Stack Overflow and hope.

### 5. Interview Questions Are Heavy on EXPLAIN

"Why is this query slow? Give me an index that would help." is asked in almost every backend and data-engineer interview. The answer is always in the EXPLAIN plan plus an understanding of the leftmost-prefix rule.

## Detailed Explanation

### 1. Creating and Dropping Indexes

```
-- Simple index on one column
CREATE INDEX idx_users_email ON users(email);

-- Composite index on multiple columns
CREATE INDEX idx_orders_cust_date ON orders(customer_id, order_date);

-- Unique index — enforces uniqueness AND speeds up lookups
CREATE UNIQUE INDEX idx_users_email ON users(email);

-- Full-text index for text search
CREATE FULLTEXT INDEX idx_posts_body ON posts(body);

-- Drop an index
DROP INDEX idx_users_email ON users;
ALTER TABLE users DROP INDEX idx_users_email;    -- same thing
```

Naming convention: `idx__`. Use the same convention in every project — future you will thank you.

### 2. Clustered vs Non-Clustered (Secondary) Indexes

InnoDB (MySQL's default storage engine) always organizes the table itself as a B-Tree on the primary key. This is the **clustered index** — the data rows ARE the leaves of the PK's B-Tree. No separate storage.

All other indexes are **secondary indexes**: separate B-Trees whose leaves contain the indexed column(s) plus the primary key value. To fetch additional columns, InnoDB uses the PK to look up the row in the clustered index — an extra step called **PK lookup**.

```
-- Consider:
CREATE TABLE orders (
  id INT PRIMARY KEY,              -- clustered index (the table itself)
  customer_id INT,
  order_date DATE,
  amount DECIMAL(10,2),
  INDEX idx_customer (customer_id) -- secondary index
);

-- Lookup by PK: 1 B-Tree traversal
SELECT * FROM orders WHERE id = 12345;

-- Lookup by customer_id:
-- 1. traverse idx_customer B-Tree to find PKs
-- 2. PK lookup each one in clustered index for full row
SELECT * FROM orders WHERE customer_id = 99;
```

### 3. Composite Indexes and the Leftmost Prefix Rule

A composite index on `(a, b, c)` stores entries sorted first by a, then by b within each a, then by c within each (a, b). This single index can serve queries filtering on:

- `WHERE a = ?` — uses the index.
- `WHERE a = ? AND b = ?` — uses the index.
- `WHERE a = ? AND b = ? AND c = ?` — fully uses the index.

But NOT:

- `WHERE b = ?` — cannot use. Missing the leftmost column 'a'.
- `WHERE a = ? AND c = ?` — uses only the 'a' part of the index; 'c' is accessed by row-level filtering after.

```
-- Composite index for a common query pattern
CREATE INDEX idx_orders_cust_date
  ON orders(customer_id, order_date);

-- Fully uses the index
SELECT * FROM orders
 WHERE customer_id = 99 AND order_date >= '2026-01-01';

-- Uses customer_id part only (order_date is range-filtered after)
SELECT * FROM orders
 WHERE customer_id = 99 AND amount > 500;

-- Does NOT use the index at all
SELECT * FROM orders WHERE order_date >= '2026-01-01';
```

**Takeaway:** order columns in a composite index from most-equality-filtered to least. Range-filter column goes last.

### 4. Covering Indexes

A covering index is one that contains ALL the columns the query needs, so MySQL doesn't need to go back to the table at all. The query plan will show `Using index` — the fastest possible access.

```
-- Index covers only customer_id
CREATE INDEX idx_cust ON orders(customer_id);

-- Needs to go back to the table to get amount
SELECT amount FROM orders WHERE customer_id = 99;
-- EXPLAIN: 'Using where' -- not 'Using index'

-- Covering index includes amount
CREATE INDEX idx_cust_amount ON orders(customer_id, amount);

SELECT amount FROM orders WHERE customer_id = 99;
-- EXPLAIN: 'Using index' -- blazing fast
```

### 5. EXPLAIN — Reading the Query Plan

Put `EXPLAIN` before any SELECT and MySQL shows its execution plan without running the query:

```
EXPLAIN SELECT * FROM orders WHERE customer_id = 99;
```

Key columns to understand:

ColumnMeaning`type`Access method — see table below`possible_keys`Indexes the optimizer considered`key`Index actually chosen (NULL = none)`rows`Estimated rows to examine`Extra`'Using index' = covering, 'Using filesort' = sort in memory/disk

**The `type` column — best to worst:**

typeMeaningPerformance`const`At most 1 row (PK or unique index lookup)Best`eq_ref`PK/unique lookup per row (typical JOIN)Excellent`ref`Non-unique index lookupGood`range`Index range scan (BETWEEN, <, >)OK`index`Full index scanSlow`ALL`Full table scan — no index usedWorst

Rule: if `type = ALL` on a big table, you have an indexing problem.

### 6. Sargable Predicates — The Number-One Rule

A sargable (Search ARGument ABLE) predicate is one the optimizer can use an index for. The fastest way to destroy sargability is to wrap the indexed column in a function:

```
-- NOT sargable: function on indexed column
SELECT * FROM orders WHERE YEAR(order_date) = 2026;     -- full scan
SELECT * FROM users WHERE UPPER(email) = 'AARAV@X.COM'; -- full scan
SELECT * FROM orders WHERE amount + 100 > 5000;         -- full scan

-- Sargable equivalents
SELECT * FROM orders
 WHERE order_date >= '2026-01-01' AND order_date < '2027-01-01';
SELECT * FROM users WHERE email = 'aarav@x.com';  -- store lowercase
SELECT * FROM orders WHERE amount > 4900;
```

LIKE is sargable only when the wildcard is NOT at the start:

```
SELECT * FROM users WHERE name LIKE 'Aar%';   -- sargable (prefix)
SELECT * FROM users WHERE name LIKE '%aar%';  -- NOT sargable
```

### 7. When NOT to Index

Indexes speed reads but slow writes. Every INSERT/UPDATE/DELETE on the table has to update every index. Guidelines:

- Don't index tiny tables (< 1000 rows). Full scan is already fast.
- Don't index low-cardinality columns alone (boolean flags, gender) — the B-Tree is barely more selective than a scan. Combine with another column in a composite index if useful.
- Don't over-index. Each index costs disk space and write speed. Review unused indexes periodically.
- Don't index columns you rarely filter/join/sort on.

### 8. Cardinality

Cardinality = number of distinct values in a column. High cardinality (emails, user IDs) makes great index candidates. Low cardinality (status = 'paid'/'pending'/'failed') is often not worth indexing on its own, unless the distribution is very skewed (e.g., 99% 'paid' and 1% 'failed' — an index on status is actually good for finding the failed rows).

```
SHOW INDEX FROM orders;
-- Look at Cardinality column -- higher is more selective.
```

### 9. Common Anti-Patterns That Kill Performance

#### Function on Indexed Column

```
-- BAD
SELECT * FROM orders WHERE DATE(order_date) = '2026-04-16';
-- GOOD
SELECT * FROM orders WHERE order_date >= '2026-04-16' AND order_date < '2026-04-17';
```

#### Implicit Type Conversion

```
-- phone stored as VARCHAR, query compares to integer
-- BAD: function applied silently to convert
SELECT * FROM users WHERE phone = 9810012345;
-- GOOD: match types
SELECT * FROM users WHERE phone = '9810012345';
```

#### Leading Wildcard LIKE

```
-- BAD
SELECT * FROM users WHERE name LIKE '%sharma%';
-- GOOD: full-text index
CREATE FULLTEXT INDEX idx_users_name ON users(name);
SELECT * FROM users WHERE MATCH(name) AGAINST('sharma');
```

#### OR on Different Columns

```
-- Often can't use indexes efficiently
SELECT * FROM orders WHERE customer_id = 99 OR status = 'pending';
-- Better: UNION ALL two indexed queries
SELECT * FROM orders WHERE customer_id = 99
UNION
SELECT * FROM orders WHERE status = 'pending';
```

#### Select * When You Only Need a Few Columns

`SELECT *` prevents covering indexes from kicking in and forces PK lookups. List only the columns you actually need.

### 10. Query Optimization Checklist

1. Run EXPLAIN. Look at `type` and `rows`.
2. If `type = ALL`, add an index on the filter/join column.
3. If the query has multiple WHERE conditions, consider a composite index. Order equality columns before range columns.
4. If you're returning only a few columns, try a covering index (put those columns in the composite).
5. Remove functions from indexed columns — rewrite as ranges.
6. Replace leading-wildcard LIKE with FULLTEXT or refactor the query.
7. Check type mismatches — implicit conversion kills indexes.
8. For big GROUP BY or ORDER BY queries, ensure the sort column is indexed (or included in a composite index).
9. Run ANALYZE TABLE if statistics are stale.
10. Measure before and after. Without timing, you're guessing.

## Code Examples

### Creating and Using a Simple Index

```sql
CREATE TABLE users (
  id       INT PRIMARY KEY,
  name     VARCHAR(50),
  email    VARCHAR(100),
  created_at DATETIME
);

-- Insert 100k rows (simulated)
INSERT INTO users VALUES
  (1, 'Aarav Sharma',  'aarav@example.com',  '2026-01-05 10:00'),
  (2, 'Priya Nair',    'priya@example.com',  '2026-01-12 14:30'),
  (3, 'Rohan Mehta',   'rohan@example.com',  '2026-02-02 08:15');
-- ... (imagine 100k more rows)

-- Without index: full scan
EXPLAIN SELECT * FROM users WHERE email = 'priya@example.com';

-- Create an index on email
CREATE INDEX idx_users_email ON users(email);

-- Now the same query uses the index
EXPLAIN SELECT * FROM users WHERE email = 'priya@example.com';
```

The first EXPLAIN shows type=ALL (full table scan). After adding the index, type=ref and rows=1. On a 100k-row table, the query goes from ~100 ms to < 1 ms.

**Output:**

```
Before index:
+----+-------+------+------+---------------+------+---------+------+--------+-------------+
| id | ...   | type | keys | key           | ...  | rows   | Extra       |
+----+-------+------+------+---------------+------+---------+------+--------+-------------+
|  1 | users | ALL  | NULL | NULL          | NULL | 100000 | Using where |

After index:
|  1 | users | ref  | idx_users_email | idx_users_email | const |      1 | Using where |
```

### Composite Index and Leftmost Prefix

```sql
CREATE TABLE orders (
  id          INT PRIMARY KEY,
  customer_id INT,
  order_date  DATE,
  amount      DECIMAL(10,2),
  status      VARCHAR(20)
);

INSERT INTO orders VALUES
  (1, 101, '2026-01-10', 1200, 'paid'),
  (2, 101, '2026-02-15',  800, 'paid'),
  (3, 102, '2026-01-20', 2500, 'paid'),
  (4, 103, '2026-04-10', 3100, 'pending');
-- ... (imagine many more)

-- Composite index: customer_id first, order_date second
CREATE INDEX idx_orders_cust_date ON orders(customer_id, order_date);

-- Query 1: uses both columns of index
EXPLAIN SELECT * FROM orders
 WHERE customer_id = 101 AND order_date >= '2026-01-01';

-- Query 2: uses only the leftmost (customer_id)
EXPLAIN SELECT * FROM orders WHERE customer_id = 101;

-- Query 3: CANNOT use the index (no leftmost)
EXPLAIN SELECT * FROM orders WHERE order_date >= '2026-01-01';
```

Query 1 and 2 use the composite index (possible_keys shows idx_orders_cust_date). Query 3 cannot — order_date is the SECOND column in the index, and without the leading customer_id, MySQL can't use the B-Tree. This is the leftmost prefix rule in action.

**Output:**

```
Query 1: type=range, key=idx_orders_cust_date, rows=2
Query 2: type=ref,   key=idx_orders_cust_date, rows=2
Query 3: type=ALL,   key=NULL,                 rows=4   <- FULL SCAN
```

### Covering Index

```sql
-- Using the orders table from above.

DROP INDEX idx_orders_cust_date ON orders;
CREATE INDEX idx_orders_covering
  ON orders(customer_id, order_date, amount);

-- This query only needs columns that ARE in the index
EXPLAIN SELECT customer_id, order_date, amount
FROM orders WHERE customer_id = 101;

-- Extra shows 'Using index' -- no PK lookup needed!

-- But this query needs 'status' which is NOT in the index
EXPLAIN SELECT customer_id, status
FROM orders WHERE customer_id = 101;
-- Extra does NOT show 'Using index' -- PK lookup required.
```

A covering index includes every column the query references. The 'Using index' note in EXPLAIN tells you the query was served entirely from the index — no row lookup, maximum speed. Add columns to a composite index strategically when a single query pattern is hot.

**Output:**

```
Query 1 (covered):
  type=ref, key=idx_orders_covering, rows=2, Extra='Using index'  <- best

Query 2 (not covered):
  type=ref, key=idx_orders_covering, rows=2, Extra='Using where'
```

### Function on Indexed Column Kills the Index

```sql
-- Using orders table.
CREATE INDEX idx_order_date ON orders(order_date);

-- BAD: function wrapping kills sargability
EXPLAIN SELECT * FROM orders WHERE YEAR(order_date) = 2026;
-- type=ALL, key=NULL  <- full scan!

-- GOOD: equivalent range predicate uses the index
EXPLAIN SELECT * FROM orders
 WHERE order_date >= '2026-01-01' AND order_date < '2027-01-01';
-- type=range, key=idx_order_date  <- indexed!
```

YEAR(order_date) forces MySQL to call YEAR() on every single row to compare, defeating the index entirely. Rewriting as a range predicate lets MySQL walk the B-Tree directly. This is the single most common production performance bug.

**Output:**

```
-- With YEAR()
type=ALL, key=NULL, rows=4

-- With range predicate
type=range, key=idx_order_date, rows=3
```

### Unique Index for Constraint + Speed

```sql
CREATE TABLE accounts (
  id INT PRIMARY KEY,
  username VARCHAR(50)
);
INSERT INTO accounts VALUES (1, 'aarav'), (2, 'priya');

-- Enforce uniqueness AND speed lookups
CREATE UNIQUE INDEX uq_accounts_username ON accounts(username);

-- Duplicate insert fails with constraint error
-- INSERT INTO accounts VALUES (3, 'aarav');
-- ERROR 1062: Duplicate entry 'aarav'

-- Unique indexes make lookups even faster: type=const
EXPLAIN SELECT * FROM accounts WHERE username = 'aarav';
```

A UNIQUE INDEX serves two purposes: enforcing the uniqueness constraint and speeding up lookups. The planner knows at most one row can match, so type=const (the fastest access path).

**Output:**

```
Query type=const, key=uq_accounts_username, rows=1
```

### Index on JOIN Column

```sql
CREATE TABLE customers (
  id INT PRIMARY KEY,
  name VARCHAR(50)
);

INSERT INTO customers VALUES
  (101, 'Aarav Sharma'), (102, 'Priya Nair'), (103, 'Rohan Mehta');

-- Without an index on orders.customer_id, the JOIN is slow
-- because for each customer, MySQL scans all of orders.
EXPLAIN
SELECT c.name, o.order_date, o.amount
FROM customers c
JOIN orders o ON o.customer_id = c.id
WHERE c.id = 101;

-- Create an index on the JOIN column in orders
CREATE INDEX idx_orders_customer ON orders(customer_id);

-- Now the plan shows 'ref' lookup per customer instead of full scan
EXPLAIN
SELECT c.name, o.order_date, o.amount
FROM customers c
JOIN orders o ON o.customer_id = c.id
WHERE c.id = 101;
```

JOIN columns need indexes on the 'many' side. Without it, for each customer, MySQL scans ALL of orders (N*M behavior). With an index, each customer triggers a B-Tree lookup in orders — back to log N behavior.

**Output:**

```
Before index: JOIN access to orders = ALL (full scan per customer)
After index: JOIN access to orders = ref, key=idx_orders_customer
```

### Reading SHOW INDEX Output

```sql
SHOW INDEX FROM orders;
```

Lists all indexes on the orders table. Key columns to look at:`Non_unique`: 0 = unique index, 1 = regular.`Key_name`: PRIMARY for PK, else your idx_* name.`Seq_in_index`: position in composite index (1 = leftmost).`Column_name`: the column indexed.`Cardinality`: estimated distinct values — higher is more selective.

**Output:**

```
+--------+------------+----------------------+--------------+-------------+-------------+
| Table  | Non_unique | Key_name             | Seq_in_index | Column_name | Cardinality |
+--------+------------+----------------------+--------------+-------------+-------------+
| orders |          0 | PRIMARY              |            1 | id          |           4 |
| orders |          1 | idx_orders_covering  |            1 | customer_id |           3 |
| orders |          1 | idx_orders_covering  |            2 | order_date  |           4 |
| orders |          1 | idx_orders_covering  |            3 | amount      |           4 |
+--------+------------+----------------------+--------------+-------------+-------------+
```

### Diagnosing and Fixing a Slow Query

```sql
-- The slow query
EXPLAIN
SELECT customer_id, SUM(amount) AS total
FROM orders
WHERE status = 'paid' AND order_date >= '2026-01-01'
GROUP BY customer_id
ORDER BY total DESC
LIMIT 10;

-- Diagnosis:
-- type=ALL (no index used)
-- Extra: 'Using where; Using temporary; Using filesort'
-- All three are red flags: full scan, temp table, extra sort.

-- Fix: index on (status, order_date) to serve the WHERE
CREATE INDEX idx_orders_status_date ON orders(status, order_date);

-- Re-run EXPLAIN
EXPLAIN
SELECT customer_id, SUM(amount) AS total
FROM orders
WHERE status = 'paid' AND order_date >= '2026-01-01'
GROUP BY customer_id
ORDER BY total DESC
LIMIT 10;
-- type=range, key=idx_orders_status_date -- much better
-- Still has 'Using temporary; Using filesort' because of GROUP BY
-- different from the index. That's acceptable for a top-10 query.
```

The thinking process: read EXPLAIN output, identify the red flag (type=ALL), check the WHERE clause, create a composite index covering the filter columns with equality column first. Even with the fix, GROUP BY + ORDER BY often need a temp table — that's normal for aggregation queries.

**Output:**

```
Before: type=ALL, rows=1,000,000, Extra='Using where; Using temporary; Using filesort'
After:  type=range, key=idx_orders_status_date, rows=20,000, Extra='Using where; Using temporary; Using filesort'
(Row estimate dropped 50x, query time from 15s to 0.3s.)
```

## Common Mistakes

### Over-Indexing Every Column

**Wrong:**

```
-- Someone scared of slow queries indexes everything
CREATE INDEX idx_a ON t(a);
CREATE INDEX idx_b ON t(b);
CREATE INDEX idx_c ON t(c);
CREATE INDEX idx_d ON t(d);
CREATE INDEX idx_e ON t(e);
CREATE INDEX idx_ab ON t(a, b);
CREATE INDEX idx_ac ON t(a, c);
CREATE INDEX idx_bc ON t(b, c);
-- ... and so on
```

No SQL error, but every INSERT/UPDATE/DELETE on t now has to update all these indexes. Writes slow dramatically, disk usage bloats, and the optimizer has many redundant indexes to choose from.

**Correct:**

```
-- Create indexes based on ACTUAL query patterns
-- 1. Find the top 10 slow queries in production
-- 2. Add one composite index per query pattern
CREATE INDEX idx_t_cust_date ON t(customer_id, created_at);
CREATE INDEX idx_t_status ON t(status) -- only if skew warrants it
-- Review and drop unused indexes periodically:
-- SELECT * FROM sys.schema_unused_indexes;
```

Each additional index costs disk, RAM (index pages cached in buffer pool), and write time. Five right indexes beat fifty random ones every time. Indexes should be designed from real query patterns, not guessed.

### Wrong Column Order in Composite Index

**Wrong:**

```
-- Common pattern: WHERE customer_id = ? AND order_date >= ?
CREATE INDEX idx_bad ON orders(order_date, customer_id);  -- wrong order!
-- A query WHERE customer_id = 101 AND order_date >= '2026-01-01' cannot
-- use this efficiently — order_date is the leading column.
```

No SQL error, but queries with equality on customer_id cannot benefit from the leading 'order_date' column, leading to range scans over much more data than necessary.

**Correct:**

```
-- Equality columns FIRST, range LAST
CREATE INDEX idx_good ON orders(customer_id, order_date);
```

Leftmost-prefix rule: order the columns of a composite index so that equality-filtered columns come before range-filtered ones. Index the tightest selector first.

### Using Functions or Arithmetic on Indexed Columns

**Wrong:**

```
-- Kills the index
SELECT * FROM orders WHERE YEAR(order_date) = 2026;
SELECT * FROM users WHERE UPPER(email) = 'AARAV@X.COM';
SELECT * FROM products WHERE price * 1.18 > 118;  -- GST-inclusive price filter
```

No SQL error, but each of these goes from O(log n) to O(n). A function on an indexed column disables the index.

**Correct:**

```
-- Rewrite as sargable predicates
SELECT * FROM orders WHERE order_date >= '2026-01-01' AND order_date < '2027-01-01';
SELECT * FROM users WHERE email = 'aarav@x.com';  -- store normalized
SELECT * FROM products WHERE price > 100;         -- pre-compute on client side
```

The single most common production performance bug. Every time you wrap an indexed column in a function or expression, you force a full scan. Always rewrite to keep the column bare on one side.

### Indexing Low-Cardinality Columns Alone

**Wrong:**

```
-- gender has only 'M' or 'F' -- cardinality = 2
CREATE INDEX idx_users_gender ON users(gender);
-- Queries like WHERE gender = 'M' barely benefit.
```

No error, but the index is nearly useless. A scan of half the table is barely faster than a scan of the whole table — often slower after counting the index B-Tree traversals.

**Correct:**

```
-- Low-cardinality column only helps as part of a composite
CREATE INDEX idx_users_gender_created
  ON users(gender, created_at);
-- Now queries on gender + date range benefit.
```

Cardinality matters. B-Tree indexes excel when they can eliminate 90%+ of rows quickly. Booleans and 3-value enums only help when combined with other columns in a composite.

### Ignoring EXPLAIN After Schema Changes

**Wrong:**

```
-- Developer adds a column, writes new queries, deploys. No EXPLAIN.
SELECT * FROM orders WHERE status = 'paid' AND amount > 5000;
-- Works fine on the dev's 100-row test database.
-- Production has 50M rows — query times out.
```

Production outage because the query does a full scan on 50M rows without an index.

**Correct:**

```
-- Always EXPLAIN new queries against production-like data
EXPLAIN SELECT * FROM orders WHERE status = 'paid' AND amount > 5000;
-- If type=ALL, add an index before deploying.
CREATE INDEX idx_orders_status_amount ON orders(status, amount);
```

EXPLAIN is cheap — running it on every new query takes 2 seconds. A production outage costs hours. Make EXPLAIN a habit for every non-trivial query you write.

## Summary

- An index is a separate B-Tree structure that stores sorted column values with pointers back to rows. It turns O(n) table scans into O(log n) lookups.
- InnoDB organizes the whole table as a clustered B-Tree on the primary key. Secondary indexes store values + PK, so fetching extra columns requires a PK lookup.
- Composite indexes on (a, b, c) follow the leftmost prefix rule: usable for queries filtering on a, (a, b), or (a, b, c) — but NOT b alone or (b, c).
- Put equality-filtered columns before range-filtered columns in composite indexes. Equality first, range last.
- A covering index contains all columns the query needs. EXPLAIN shows 'Using index' — the fastest possible access since no row lookup is required.
- Run EXPLAIN on every new query. type=ALL means full table scan and is usually a red flag on big tables. Aim for type=ref, range, or better.
- Sargable predicates keep indexes alive. Wrapping an indexed column in a function (YEAR, UPPER, arithmetic) kills sargability and forces a full scan. Rewrite as ranges.
- Leading-wildcard LIKE ('%foo') cannot use a B-Tree index. Use FULLTEXT indexes or prefix patterns ('foo%') instead.
- Don't over-index. Every index costs write speed and disk. Create indexes based on real query patterns, review unused ones with sys.schema_unused_indexes.
- Cardinality matters. Indexes work best on columns with many distinct values. Low-cardinality columns only help as part of a composite with a more selective column.

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/indexes-and-performance/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/indexes-and-performance/practice/*
