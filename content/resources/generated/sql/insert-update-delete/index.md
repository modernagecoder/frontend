---
title: "SQL INSERT UPDATE DELETE - WHERE clause, INSERT SELECT, ON DUPLICATE KEY UPDATE, REPLACE INTO | Modern Age Coders"
description: "Master SQL data manipulation - INSERT with and without columns, multi-row inserts, INSERT SELECT for copying data, UPDATE with WHERE (critical safety), multi-column UPDATE, DELETE with WHERE, INSERT IGNORE, ON DUPLICATE KEY UPDATE upsert, REPLACE INTO. 58 practice questions plus debugging challenges."
slug: insert-update-delete
canonical: https://learn.modernagecoders.com/resources/sql/insert-update-delete/
category: "SQL"
keywords: ["sql insert", "sql update", "sql delete", "update where clause", "delete where clause", "insert select mysql", "multi-row insert", "insert ignore", "on duplicate key update", "replace into mysql"]
---
# INSERT, UPDATE, DELETE - Manipulating Data

**Difficulty:** Beginner  
**Reading time:** 24 min  
**Chapter:** 5  
**Practice questions:** 58

## The Three Core DML Commands

So far you have built tables and seeded a few rows. Real applications constantly write new rows, update existing ones, and occasionally delete them. This chapter covers the three DML commands you will write hundreds of times a week as a backend developer:

- `INSERT INTO` — add new rows
- `UPDATE` — change existing rows
- `DELETE FROM` — remove rows

All three are DML (Data Manipulation Language) — transactional, rollback-able, and triggered by your application whenever data changes. The most important rule of this chapter: **UPDATE and DELETE without a WHERE clause touch every row in the table.** This is the single most common way juniors destroy production data. Please internalize it.

### Sample Data for This Chapter

We will use a `students` table with this initial data:

idnamecitymarksactive1Aarav SharmaMumbai8712Priya IyerBengaluru9213Rohan VermaDelhi7814Ananya ReddyHyderabad9515Vikram SinghPune650

## Why INSERT, UPDATE, DELETE Deserve Respect

### 1. Every Write in Your App Eventually Becomes DML

User signs up → an INSERT. User changes their password → an UPDATE. Admin deletes a spam account → a DELETE. The ORM (Django, Hibernate, Sequelize) you'll use at work is just a fancy wrapper that generates DML under the hood. When things go wrong, you drop into raw SQL and need to read/write these commands fluently.

### 2. A Missing WHERE Is the #1 Production Disaster

The horror stories are real:

- A developer ran `UPDATE users SET password = '...';` without WHERE — every user had the same password.
- Another ran `DELETE FROM orders;` forgetting the WHERE — the company lost 3 days of orders.
- GitLab in 2017 accidentally dropped production data with a misplaced command.

The fix is cultural: always write WHERE first, always test on a single row, always wrap destructive statements in a transaction so you can ROLLBACK.

### 3. INSERT/UPDATE Performance at Scale

Writing 10 rows: anything works. Writing 10 million rows: multi-row INSERT is 100x faster than 10 million single INSERTs. Updating 1 million rows: batching in chunks of 10,000 prevents table locks and replication lag. These patterns separate hobbyists from engineers who can handle scale.

### 4. Upserts Are Asked in Every Backend Interview

"How do you insert a new row if it doesn't exist, and update it if it does?" The MySQL answer is `INSERT ... ON DUPLICATE KEY UPDATE`. Knowing the three ways (INSERT IGNORE, ON DUPLICATE KEY UPDATE, REPLACE INTO) and when to use each is a classic interview differentiator.

## Detailed Explanation

### 1. INSERT — Four Ways to Add Rows

#### Form 1: All Columns in Order

```
INSERT INTO students VALUES (6, 'Diya Kapoor', 'Chennai', 88, 1);
```

Values must match the column order of the table definition. Fragile: if a new column is added later, this breaks.

#### Form 2: Specify Columns Explicitly (RECOMMENDED)

```
INSERT INTO students (id, name, city, marks, active)
VALUES (6, 'Diya Kapoor', 'Chennai', 88, 1);
```

Safer and self-documenting. Rearranging or adding columns later doesn't break the statement.

#### Form 3: Multi-Row INSERT

```
INSERT INTO students (id, name, city, marks) VALUES
    (6, 'Diya Kapoor',  'Chennai',   88),
    (7, 'Arjun Mehta',  'Ahmedabad', 81),
    (8, 'Sneha Patel',  'Jaipur',    90);
```

One round-trip to the server, often 10-100x faster than three separate INSERTs. The `active` column isn't specified and will use its DEFAULT (or NULL).

#### Form 4: INSERT ... SELECT (Copy Data From Another Table)

```
-- Copy high-scoring students into a separate table.
INSERT INTO top_students (id, name, marks)
SELECT id, name, marks FROM students WHERE marks >= 90;
```

Powerful for data migrations, archival, and populating reporting tables. No VALUES keyword — the SELECT provides all rows.

### 2. UPDATE — Changing Existing Rows

#### Basic UPDATE

```
UPDATE students
SET marks = 90
WHERE id = 3;
```

Rohan's marks change from 78 to 90. One row affected.

#### Update Multiple Columns in One Statement

```
UPDATE students
SET marks = 95, active = 1
WHERE id = 5;
```

Both columns change for Vikram in a single statement. Comma-separated assignments.

#### Update Using an Expression

```
-- Give every active student a 5-mark bonus.
UPDATE students
SET marks = marks + 5
WHERE active = 1;
```

You can reference the current column value in the SET clause. Each row gets its own current marks + 5.

#### The CRITICAL Warning

```
-- WITHOUT WHERE: updates EVERY row in the table!
UPDATE students SET marks = 0;
```

This is catastrophic on any non-trivial table. MySQL has a **safe-update mode** (enable via `SET SQL_SAFE_UPDATES = 1;`) that rejects UPDATE/DELETE without a WHERE on a key column. Turn this on in dev environments as training wheels.

### 3. DELETE — Removing Rows

#### Basic DELETE

```
DELETE FROM students WHERE id = 5;
```

Removes Vikram. One row affected.

#### DELETE With Range

```
DELETE FROM students WHERE marks < 70;
```

Removes every student scoring under 70.

#### The Same CRITICAL Warning

```
-- WITHOUT WHERE: deletes EVERY row!
DELETE FROM students;
```

The table still exists (unlike DROP), but every row is gone. On a big table this can take minutes and fills the transaction log. If you truly want to empty a table, use `TRUNCATE TABLE students;` — faster and resets AUTO_INCREMENT.

### 4. DELETE vs TRUNCATE vs DROP Recap

- **DELETE**: transactional, supports WHERE, slow on big tables, doesn't reset AUTO_INCREMENT.
- **TRUNCATE**: fast, no WHERE, resets AUTO_INCREMENT, implicit commit (cannot rollback).
- **DROP**: removes the table itself.

Full comparison is in Chapter 4.

### 5. INSERT IGNORE — Silently Skip Duplicates

```
INSERT IGNORE INTO students (id, name, city, marks)
VALUES (1, 'Someone Else', 'Kolkata', 77);
```

If id=1 already exists (duplicate PK), MySQL ignores the insert and emits a warning instead of an error. Useful for bulk imports where you don't care about duplicates. Warning: IGNORE silences other errors too (type mismatches, CHECK violations may become warnings). Use with care.

### 6. ON DUPLICATE KEY UPDATE — The True Upsert

```
INSERT INTO students (id, name, city, marks)
VALUES (1, 'Aarav Sharma', 'Mumbai', 90)
ON DUPLICATE KEY UPDATE marks = VALUES(marks);
```

If id=1 does not exist, it inserts a new row. If id=1 exists, it updates `marks = 90`. The `VALUES(col)` function refers to the value from the VALUES clause. This is the recommended "upsert" pattern in MySQL.

MySQL 8.0.19+ replaces `VALUES()` with a row alias:

```
INSERT INTO students (id, name, city, marks)
VALUES (1, 'Aarav Sharma', 'Mumbai', 90) AS new
ON DUPLICATE KEY UPDATE marks = new.marks;
```

### 7. REPLACE INTO — Delete-Then-Insert

```
REPLACE INTO students (id, name, city, marks)
VALUES (1, 'Aarav Sharma', 'Mumbai', 95);
```

If id=1 exists, REPLACE deletes the old row and inserts the new one. If it doesn't exist, it just inserts. Simpler syntax than ON DUPLICATE KEY UPDATE, but has two big gotchas:

1. Any columns you don't specify are reset to their DEFAULT (or NULL). So REPLACE can silently wipe data you forgot to list.
2. Delete-then-insert means the AUTO_INCREMENT id jumps, triggers fire twice (DELETE and INSERT), and any FKs with ON DELETE CASCADE cascade.

Prefer ON DUPLICATE KEY UPDATE in 90% of cases.

## Code Examples

### All Four INSERT Forms

```sql
-- Setup
CREATE DATABASE IF NOT EXISTS school;
USE school;
DROP TABLE IF EXISTS students;
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    city VARCHAR(30),
    marks INT DEFAULT 0,
    active TINYINT DEFAULT 1
);

-- Form 1: all columns in order (fragile)
INSERT INTO students VALUES (1, 'Aarav Sharma', 'Mumbai', 87, 1);

-- Form 2: explicit columns (recommended)
INSERT INTO students (id, name, city, marks, active)
VALUES (2, 'Priya Iyer', 'Bengaluru', 92, 1);

-- Form 3: multi-row insert (fastest for bulk)
INSERT INTO students (id, name, city, marks) VALUES
    (3, 'Rohan Verma',  'Delhi',     78),
    (4, 'Ananya Reddy', 'Hyderabad', 95),
    (5, 'Vikram Singh', 'Pune',      65);

SELECT * FROM students;
```

Row 3-5 don't specify 'active' so they get its DEFAULT (1). Form 2 is the safest style for production code because it's self-documenting and stable even when columns are added later.

**Output:**

```
Query OK, 1 row affected (0.01 sec)
Query OK, 1 row affected (0.01 sec)
Query OK, 3 rows affected (0.01 sec)
Records: 3  Duplicates: 0  Warnings: 0

+----+---------------+-----------+-------+--------+
| id | name          | city      | marks | active |
+----+---------------+-----------+-------+--------+
|  1 | Aarav Sharma  | Mumbai    |    87 |      1 |
|  2 | Priya Iyer    | Bengaluru |    92 |      1 |
|  3 | Rohan Verma   | Delhi     |    78 |      1 |
|  4 | Ananya Reddy  | Hyderabad |    95 |      1 |
|  5 | Vikram Singh  | Pune      |    65 |      1 |
+----+---------------+-----------+-------+--------+
```

### UPDATE One Row, Multiple Columns

```sql
-- Vikram made it active and scored higher in the retest.
UPDATE students
SET marks = 88, active = 1
WHERE id = 5;

SELECT id, name, marks, active FROM students WHERE id = 5;
```

Two columns updated in a single UPDATE. The WHERE clause limits the change to exactly one row (id=5). Always run a matching SELECT first to verify which rows you're about to change.

**Output:**

```
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

+----+--------------+-------+--------+
| id | name         | marks | active |
+----+--------------+-------+--------+
|  5 | Vikram Singh |    88 |      1 |
+----+--------------+-------+--------+
```

### UPDATE With an Expression

```sql
-- Give every Mumbai student a 5-mark bonus.
UPDATE students
SET marks = marks + 5
WHERE city = 'Mumbai';

SELECT id, name, city, marks FROM students WHERE city = 'Mumbai';
```

`marks = marks + 5` references the existing value of marks in each row. Each matching row is updated with its own individual current value plus 5. If we had two Mumbai students with different marks, each would get the bonus applied to their own score.

**Output:**

```
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

+----+--------------+--------+-------+
| id | name         | city   | marks |
+----+--------------+--------+-------+
|  1 | Aarav Sharma | Mumbai |    92 |
+----+--------------+--------+-------+
```

### The WHERE-Less UPDATE Disaster — How to Prevent It

```sql
-- Enable safe update mode (workbench default). Rejects UPDATE without
-- a WHERE on a key column.
SET SQL_SAFE_UPDATES = 1;

-- Attempt: forgot WHERE — would zero out every student.
UPDATE students SET marks = 0;

-- Disable it back (do this only when you REALLY mean to touch every row).
SET SQL_SAFE_UPDATES = 0;
```

MySQL Workbench enables SQL_SAFE_UPDATES by default. It blocks any UPDATE or DELETE that doesn't include a WHERE on a key column. This saves many careers. Enable it explicitly on any dev or staging environment. When you truly want to update every row (rare), turn it off for that one statement.

**Output:**

```
Query OK, 0 rows affected (0.00 sec)

ERROR 1175 (HY000): You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  To disable safe mode, toggle the option in Preferences.

Query OK, 0 rows affected (0.00 sec)
```

### DELETE — Specific and Range

```sql
-- Delete one specific student
DELETE FROM students WHERE id = 5;

-- Delete everyone with marks below 80
DELETE FROM students WHERE marks < 80;

SELECT * FROM students;
```

First DELETE removes Vikram by id. Second DELETE removes any students still below 80 (after Aarav's +5 bonus, he is at 92, so he survives). The SELECT shows who remains.

**Output:**

```
Query OK, 1 row affected (0.01 sec)
Query OK, 1 row affected (0.01 sec)

+----+---------------+-----------+-------+--------+
| id | name          | city      | marks | active |
+----+---------------+-----------+-------+--------+
|  1 | Aarav Sharma  | Mumbai    |    92 |      1 |
|  2 | Priya Iyer    | Bengaluru |    92 |      1 |
|  4 | Ananya Reddy  | Hyderabad |    95 |      1 |
+----+---------------+-----------+-------+--------+
```

### INSERT ... SELECT for Archival

```sql
-- Create an archive table that holds inactive or low-scoring students.
DROP TABLE IF EXISTS students_archive;
CREATE TABLE students_archive LIKE students;

-- Copy all inactive students into the archive.
INSERT INTO students_archive
SELECT * FROM students WHERE active = 0;

-- After archival, remove them from the live table.
DELETE FROM students WHERE active = 0;

SELECT COUNT(*) AS archived FROM students_archive;
SELECT COUNT(*) AS live     FROM students;
```

Two-step archival pattern used by virtually every production system: (1) INSERT the rows into an archive table; (2) DELETE them from the live table. Wrap both in a transaction for atomicity. This is the canonical way to implement "soft delete" or "move to archive" logic in SQL.

**Output:**

```
Query OK, 0 rows affected (0.03 sec)
Query OK, 0 rows affected (0.01 sec)
Query OK, 0 rows affected (0.00 sec)
Records: 0  Duplicates: 0  Warnings: 0
Query OK, 0 rows affected (0.00 sec)

+----------+
| archived |
+----------+
|        0 |
+----------+
+------+
| live |
+------+
|    3 |
+------+
```

### ON DUPLICATE KEY UPDATE — True Upsert

```sql
-- Counting page views per student: increment if row exists, insert if new.
DROP TABLE IF EXISTS page_views;
CREATE TABLE page_views (
    student_id INT PRIMARY KEY,
    view_count INT NOT NULL DEFAULT 0
);

-- First visit for student 1: insert
INSERT INTO page_views (student_id, view_count)
VALUES (1, 1)
ON DUPLICATE KEY UPDATE view_count = view_count + 1;

-- Second visit for student 1: update
INSERT INTO page_views (student_id, view_count)
VALUES (1, 1)
ON DUPLICATE KEY UPDATE view_count = view_count + 1;

-- First visit for student 2: insert
INSERT INTO page_views (student_id, view_count)
VALUES (2, 1)
ON DUPLICATE KEY UPDATE view_count = view_count + 1;

SELECT * FROM page_views;
```

The first INSERT creates (1, 1). The second INSERT hits the PK conflict on student_id=1, so the ON DUPLICATE KEY UPDATE clause fires — incrementing view_count to 2 instead of erroring. The third INSERT creates a fresh row for student 2. This atomic "insert or increment" is one of the most useful patterns in web backends for counters, visit logs, and upvotes.

**Output:**

```
Query OK, 0 rows affected (0.03 sec)
Query OK, 1 row affected (0.01 sec)
Query OK, 2 rows affected (0.01 sec)
Query OK, 1 row affected (0.01 sec)

+------------+------------+
| student_id | view_count |
+------------+------------+
|          1 |          2 |
|          2 |          1 |
+------------+------------+
```

## Common Mistakes

### UPDATE Without WHERE

**Wrong:**

```
-- Meant to raise Priya's marks, forgot WHERE:
UPDATE students SET marks = 95;
```

No error from MySQL — but EVERY student now has marks = 95. Your data is ruined.

**Correct:**

```
UPDATE students SET marks = 95 WHERE id = 2;
```

The missing WHERE is the single most destructive beginner mistake. Always write WHERE first, test your intent with SELECT ... WHERE first, and enable SQL_SAFE_UPDATES in dev. If you must update every row (rare), make it explicit: `UPDATE students SET marks = 95 WHERE 1=1;` — at least the 1=1 shows that you thought about it.

### DELETE Without WHERE

**Wrong:**

```
-- Meant to remove one inactive student:
DELETE FROM students;
```

No error — every row in students is deleted. The table is empty.

**Correct:**

```
DELETE FROM students WHERE id = 5;
-- OR if you truly want to empty the table, use TRUNCATE:
TRUNCATE TABLE students;
```

Same class of mistake as the UPDATE. Treat DELETE and UPDATE as radioactive. Always SELECT first with the same WHERE: `SELECT * FROM students WHERE id = 5;` to confirm which rows will vanish. Wrap destructive statements in a transaction so ROLLBACK can save you: `START TRANSACTION; DELETE ...; -- check results --- COMMIT;`

### Inserting With Wrong Column Order (Form 1)

**Wrong:**

```
-- students table order: (id, name, city, marks, active)
INSERT INTO students VALUES (6, 'Chennai', 'Diya Kapoor', 88, 1);
```

Inserted name='Chennai' and city='Diya Kapoor' — name and city got swapped.

**Correct:**

```
INSERT INTO students (id, name, city, marks, active)
VALUES (6, 'Diya Kapoor', 'Chennai', 88, 1);
```

Form 1 (no column list) relies on the order of the table definition. If someone later reorders columns or you misremember, the values go into the wrong fields — and worse, MySQL doesn't complain as long as the types are compatible. **Always use Form 2 with explicit column names** in production code.

### REPLACE INTO Wiping Columns You Forgot to Mention

**Wrong:**

```
-- students table has (id, name, city, marks, active)
-- You only want to update Aarav's marks:
REPLACE INTO students (id, marks) VALUES (1, 90);
```

Aarav's name, city, and active columns are wiped (set to NULL or DEFAULT) because REPLACE does a full DELETE-then-INSERT.

**Correct:**

```
-- Use UPDATE for targeted changes:
UPDATE students SET marks = 90 WHERE id = 1;

-- Or specify ALL columns in REPLACE:
REPLACE INTO students (id, name, city, marks, active)
VALUES (1, 'Aarav Sharma', 'Mumbai', 90, 1);
```

REPLACE is not UPDATE. It internally deletes the old row completely and inserts a new one. Columns you don't specify get their DEFAULT (or NULL). This is why UPDATE is almost always what you actually want for a targeted change. Reserve REPLACE (and prefer ON DUPLICATE KEY UPDATE over it) for bulk "re-seed" operations where you provide every column.

## Summary

- INSERT INTO table (col1, col2) VALUES (v1, v2); adds a new row. Always list columns explicitly — don't rely on column order.
- Multi-row INSERT INTO t VALUES (...), (...), (...); is far faster than multiple single INSERTs (fewer network round-trips).
- INSERT INTO t SELECT ... lets you copy rows from one table into another — used for backups, archives, and migrations.
- UPDATE table SET col = value WHERE condition; changes existing rows. Without WHERE, EVERY row is updated — a classic production disaster.
- UPDATE can change multiple columns at once: SET a = 1, b = 2. It can also reference current values: SET marks = marks + 5.
- DELETE FROM table WHERE condition; removes rows. Without WHERE, every row is deleted (but the table itself stays — use TRUNCATE for speed).
- Enable SQL_SAFE_UPDATES = 1 in dev to reject UPDATE/DELETE without a key-based WHERE clause — saves careers.
- INSERT IGNORE silently skips rows that would violate a unique constraint. Useful for bulk imports where duplicates are acceptable.
- INSERT ... ON DUPLICATE KEY UPDATE is MySQL's true upsert: insert if new, update if key conflict. Preferred over REPLACE INTO.
- REPLACE INTO does DELETE-then-INSERT. It wipes unspecified columns to DEFAULT/NULL. Use ON DUPLICATE KEY UPDATE instead in 90% of cases.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/insert-update-delete/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/insert-update-delete/practice/*
