---
title: "Practice: INSERT, UPDATE, DELETE - Manipulating Data"
description: "58 practice problems for INSERT, UPDATE, DELETE - Manipulating Data in SQL"
slug: insert-update-delete-practice
canonical: https://learn.modernagecoders.com/resources/sql/insert-update-delete/practice
category: "SQL"
---
# Practice: INSERT, UPDATE, DELETE - Manipulating Data

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] Write an INSERT statement to add a student (id=6, name='Diya Kapoor', city='Chennai', marks=88) to the students table, specifying columns explicitly.

*Hint:* INSERT INTO table (cols) VALUES (vals).

**Answer:** ```
INSERT INTO students (id, name, city, marks)
VALUES (6, 'Diya Kapoor', 'Chennai', 88);
```

Column list makes the statement stable against future column reorders. Strings go in single quotes; integers do not. The `active` column (if present with a DEFAULT) gets its default value.

### Q2. [Easy] Write a single multi-row INSERT that adds three new students: Diya (Chennai, 88), Arjun (Ahmedabad, 81), Sneha (Jaipur, 90). IDs 6, 7, 8.

*Hint:* VALUES (...), (...), (...);

**Answer:** ```
INSERT INTO students (id, name, city, marks) VALUES
    (6, 'Diya Kapoor', 'Chennai',   88),
    (7, 'Arjun Mehta', 'Ahmedabad', 81),
    (8, 'Sneha Patel', 'Jaipur',    90);
```

Multi-row INSERTs are one round-trip to the server and one transaction — much faster than three separate inserts and atomic (all-or-nothing).

### Q3. [Easy] Write an UPDATE to change Rohan Verma's marks (id=3) to 85.

*Hint:* UPDATE ... SET ... WHERE ...

**Answer:** ```
UPDATE students
SET marks = 85
WHERE id = 3;
```

The WHERE restricts the change to exactly one row. Running SELECT ... WHERE id = 3 first is a good habit to verify you're touching the intended row.

### Q4. [Easy] Write an UPDATE to change Vikram Singh's marks to 90 AND his city to 'Mumbai' in one statement (id=5).

*Hint:* SET col1 = ..., col2 = ...

**Answer:** ```
UPDATE students
SET marks = 90, city = 'Mumbai'
WHERE id = 5;
```

Multiple assignments are comma-separated in the SET clause. All changes happen atomically in one UPDATE statement — no risk of partial updates.

### Q5. [Easy] Write a DELETE to remove the student with id=5 from students.

*Hint:* DELETE FROM ... WHERE ...

**Answer:** ```
DELETE FROM students WHERE id = 5;
```

The WHERE is critical. Without it, every row is deleted. Always confirm with a matching SELECT first.

### Q6. [Easy] What happens if you run `UPDATE students SET marks = 0;` (no WHERE)?

*Hint:* Every row is affected.

**Answer:** Every row in the students table gets marks = 0. There is no error message from MySQL. If the table had 10 million rows, all 10 million now have marks = 0.

This is the single most common beginner disaster. MySQL treats the missing WHERE as "apply to all rows". Habit: always write WHERE first. Enable SQL_SAFE_UPDATES to force a safety net.

### Q7. [Easy] What happens if you run `DELETE FROM students;` (no WHERE)?

*Hint:* Every row deleted, table structure stays.

**Answer:** Every row is removed. The table still exists (with its columns and constraints), but it is empty. AUTO_INCREMENT is NOT reset (unlike TRUNCATE).

DELETE without WHERE is slower than TRUNCATE on large tables because it logs each row. If you truly want to empty a table fast, use TRUNCATE TABLE — and know that it also resets AUTO_INCREMENT to 1.

### Q8. [Medium] Write SQL to give every student from Mumbai a 5-mark bonus.

*Hint:* SET marks = marks + 5.

**Answer:** ```
UPDATE students
SET marks = marks + 5
WHERE city = 'Mumbai';
```

The expression `marks + 5` evaluates per row using each row's own current marks. So Aarav's 87 becomes 92, and any other Mumbai students get their own current marks + 5.

### Q9. [Medium] Write SQL to delete all students whose marks are strictly less than 70.

*Hint:* DELETE FROM ... WHERE marks < 70.

**Answer:** ```
DELETE FROM students WHERE marks < 70;
```

Strict less-than (<) excludes exactly 70. Use <= if you want to include 70. Run SELECT * FROM students WHERE marks < 70; first to preview what will be deleted.

### Q10. [Medium] Write SQL to INSERT all high-scoring students (marks > 90) from `students` into a new `top_students` table. Assume top_students already exists with the same structure.

*Hint:* INSERT INTO ... SELECT ...

**Answer:** ```
INSERT INTO top_students (id, name, city, marks)
SELECT id, name, city, marks
FROM students
WHERE marks > 90;
```

INSERT ... SELECT copies rows from one table into another. No VALUES clause needed. The column count and types in the SELECT must match the INSERT target columns.

### Q11. [Medium] What is SQL_SAFE_UPDATES and how do you enable it?

*Hint:* It's a server variable.

**Answer:** SQL_SAFE_UPDATES is a MySQL session variable. When set to 1, MySQL refuses to execute UPDATE or DELETE statements that don't include a WHERE clause referencing a KEY column. Enable it with: 

```
SET SQL_SAFE_UPDATES = 1;
```

Great training wheels for devs. MySQL Workbench enables it by default. When you hit the "You are using safe update mode" error, it's a reminder to add a proper WHERE — don't just disable the mode.

### Q12. [Medium] Write an INSERT IGNORE to try to add a student with id=1 (which already exists). What happens?

*Hint:* INSERT IGNORE instead of INSERT.

**Answer:** ```
INSERT IGNORE INTO students (id, name, city, marks)
VALUES (1, 'Someone Else', 'Kolkata', 77);
```

Result: No error; a warning is emitted. The existing row for id=1 is not changed.

INSERT IGNORE silently skips rows that would violate a unique/primary key constraint. Useful for bulk imports where duplicates are acceptable. Note: IGNORE also silences certain other errors (type mismatches), so be careful.

### Q13. [Medium] Write an ON DUPLICATE KEY UPDATE that inserts a student (id=10, marks=85) if new, or updates marks to 85 if id=10 already exists.

*Hint:* INSERT ... ON DUPLICATE KEY UPDATE.

**Answer:** ```
INSERT INTO students (id, name, city, marks)
VALUES (10, 'New Student', 'Noida', 85)
ON DUPLICATE KEY UPDATE marks = VALUES(marks);
```

If id=10 doesn't exist: a new row is inserted. If id=10 exists: the ON DUPLICATE KEY UPDATE clause fires and sets marks to the value from the VALUES clause (85). This is the canonical MySQL upsert.

### Q14. [Medium] Explain the difference between INSERT IGNORE and ON DUPLICATE KEY UPDATE.

*Hint:* One skips, the other updates.

**Answer:** **INSERT IGNORE**: if the row would violate a unique key, skip the insert silently. The existing row is unchanged. **ON DUPLICATE KEY UPDATE**: if the row would violate a unique key, update specific columns of the existing row instead.

INSERT IGNORE is for "I don't care if it's already there". ON DUPLICATE KEY UPDATE is for "merge the new data into the existing row". Choose based on whether you want to preserve or refresh the existing row.

### Q15. [Medium] What is the main risk of using REPLACE INTO?

*Hint:* Columns you don't mention.

**Answer:** REPLACE internally DELETEs the existing row and INSERTs a new one. Any columns you don't specify are reset to their DEFAULT (or NULL) — so REPLACE can silently wipe data you forgot to list. It also resets AUTO_INCREMENT-generated fields, fires DELETE triggers, and can cascade FK deletes.

That's why ON DUPLICATE KEY UPDATE is preferred: it updates only the columns you explicitly list, leaving everything else intact. Use REPLACE only when you really want a full row replacement.

### Q16. [Hard] Write SQL to archive all inactive students (active = 0) into `students_archive`, then DELETE them from `students`. Use a transaction for safety.

*Hint:* START TRANSACTION; INSERT SELECT; DELETE; COMMIT;

**Answer:** ```
START TRANSACTION;

INSERT INTO students_archive
SELECT * FROM students WHERE active = 0;

DELETE FROM students WHERE active = 0;

COMMIT;
```

Wrapping both statements in a transaction ensures atomicity: either both succeed or both roll back. Without the transaction, a crash between INSERT and DELETE could leave you with duplicated rows (both in live and archive) or orphaned data.

### Q17. [Hard] The client calls with an emergency: you accidentally deleted rows with id between 5 and 10. Luckily you had a backup table. Write SQL to restore those rows from `students_backup` into `students`, assuming there's no conflict.

*Hint:* INSERT ... SELECT ... WHERE id BETWEEN 5 AND 10.

**Answer:** ```
INSERT INTO students (id, name, city, marks, active)
SELECT id, name, city, marks, active
FROM students_backup
WHERE id BETWEEN 5 AND 10;
```

Restore from backup with INSERT ... SELECT, filtered to just the affected rows. This is a real scenario that happens in production when bad DELETEs hit. The lesson: always keep backups, and wrap destructive queries in transactions so ROLLBACK works.

### Q18. [Hard] A developer ran `UPDATE students SET city = 'Mumbai' WHERE id = 2 OR 3;` intending to set cities for id 2 AND 3 to Mumbai. Why did it update ALL rows and how do you fix it?

*Hint:* OR 3 is not a condition on id.

**Answer:** `id = 2 OR 3` is parsed as `(id = 2) OR (3)`. The integer 3 is truthy in SQL, so the WHERE evaluates to TRUE for every row. Fix: 

```
UPDATE students SET city = 'Mumbai' WHERE id = 2 OR id = 3;
-- Or the cleaner:
UPDATE students SET city = 'Mumbai' WHERE id IN (2, 3);
```

Classic beginner bug. You must repeat the column name for each condition, or use `IN (list)`. This is why every destructive statement should be previewed with a SELECT first.

### Q19. [Hard] Write a single UPDATE that doubles the marks of students in Mumbai and halves the marks of students in Pune.

*Hint:* CASE WHEN ... in the SET clause.

**Answer:** ```
UPDATE students
SET marks = CASE
    WHEN city = 'Mumbai' THEN marks * 2
    WHEN city = 'Pune'   THEN marks / 2
    ELSE marks
END
WHERE city IN ('Mumbai', 'Pune');
```

CASE WHEN inside SET lets one UPDATE apply different logic to different rows based on conditions. The final `WHERE city IN (...)` limits scope to just the relevant rows. Chapter 17 covers CASE WHEN in depth.

### Q20. [Hard] You have a page_views table (student_id PK, view_count INT). Every time a student visits a page, you want to increment their count, or create a new row with count=1 if they've never visited. Write the best single SQL.

*Hint:* ON DUPLICATE KEY UPDATE with increment.

**Answer:** ```
INSERT INTO page_views (student_id, view_count)
VALUES (?, 1)
ON DUPLICATE KEY UPDATE view_count = view_count + 1;
```

(Replace `?` with the actual student_id.)

This is the golden pattern for counters. A single atomic statement. No race condition (unlike SELECT then INSERT/UPDATE which can double-count under concurrent access). This is exactly how Reddit, YouTube, and most web apps count views/likes.

## Mixed Questions

### Q1. [Easy] Given students with 5 rows, what does this return?

```
UPDATE students SET marks = 100 WHERE id = 2;
SELECT marks FROM students WHERE id = 2;
```

*Hint:* One row affected.

**Answer:** `100`

Priya's marks were 92. After the UPDATE, id=2's marks are 100. SELECT returns just that one value.

### Q2. [Easy] Write SQL to insert a row where only id=10 and name='Test User' are given. Other columns should use their defaults.

*Hint:* Specify only the columns you want to provide.

**Answer:** ```
INSERT INTO students (id, name)
VALUES (10, 'Test User');
```

Columns not named get their DEFAULT (if defined) or NULL (if nullable). If a NOT NULL column has no DEFAULT, the INSERT fails with "Field 'xyz' doesn't have a default value".

### Q3. [Medium] Spot the bug:

```
UPDATE students SET marks = marks * 1.1 WHERE id > 0;
```

The intent was to give a 10% bonus to everyone.

*Hint:* id > 0 probably matches everyone anyway.

**Answer:** Not necessarily a bug — the WHERE `id > 0` likely matches every row in a typical AUTO_INCREMENT table, so the intent is achieved. But it's a code smell: if you want "every row", be explicit. Use `WHERE 1=1` (clearly universal) or disable SQL_SAFE_UPDATES and drop the WHERE entirely.

The statement works, but `id > 0` is a dodgy way to express "all rows" — what if id could be negative? Readers will pause and wonder if there's a real restriction. Better: explicitly scope or explicitly drop the condition with a comment.

### Q4. [Medium] Write SQL to delete every student whose name starts with the letter 'V'.

*Hint:* LIKE 'V%'.

**Answer:** ```
DELETE FROM students WHERE name LIKE 'V%';
```

`LIKE 'V%'` matches names starting with V. The % wildcard matches any number of characters. Chapter 8 covers LIKE patterns in depth.

### Q5. [Medium] What happens?

```
-- students has 5 rows
START TRANSACTION;
DELETE FROM students;
SELECT COUNT(*) FROM students;  -- line A
ROLLBACK;
SELECT COUNT(*) FROM students;  -- line B
```

*Hint:* DELETE is transactional.

**Answer:** Line A: `0` (all rows deleted in the transaction). Line B: `5` (ROLLBACK restores them).

DELETE is DML and fully transactional. Until COMMIT, changes are visible only inside your transaction. ROLLBACK reverts them. This is why you should wrap destructive statements in START TRANSACTION — if you realize you made a mistake, ROLLBACK saves you.

### Q6. [Medium] What happens?

```
-- students has 5 rows
START TRANSACTION;
TRUNCATE TABLE students;
ROLLBACK;
SELECT COUNT(*) FROM students;
```

*Hint:* TRUNCATE is DDL with implicit COMMIT.

**Answer:** `0`. TRUNCATE is DDL and implicitly commits. The ROLLBACK has nothing to undo.

This catches many students. Even though you started a transaction, TRUNCATE is DDL and commits immediately — there is no going back. If you need rollback-ability on a mass delete, use DELETE inside the transaction instead of TRUNCATE.

### Q7. [Medium] Write SQL to UPDATE the students table so that anyone with marks >= 90 gets active = 1, and anyone with marks < 90 gets active = 0.

*Hint:* CASE WHEN in SET.

**Answer:** ```
UPDATE students
SET active = CASE
    WHEN marks >= 90 THEN 1
    ELSE 0
END;
```

One UPDATE, two different outcomes depending on the marks. No WHERE here because you DO want to touch every row (disabling SQL_SAFE_UPDATES for this statement or adding `WHERE 1=1`). The CASE expression evaluates per row.

### Q8. [Hard] Why does this fail?

```
INSERT INTO students (id, name, city, marks)
VALUES (1, 'Aarav Sharma', 'Mumbai', 87);
```

(students already has id=1)

*Hint:* Primary key violation.

**Answer:** id is the PRIMARY KEY and already has value 1. Inserting another row with id=1 raises `ERROR 1062 (23000): Duplicate entry '1' for key 'students.PRIMARY'`. Fix: use a different id, or use INSERT IGNORE, or ON DUPLICATE KEY UPDATE.

This is the most common INSERT error. The fix depends on intent: if you want to skip silently, use INSERT IGNORE. If you want to merge, use ON DUPLICATE KEY UPDATE. If you truly want a new row, pick a different id (or use AUTO_INCREMENT).

### Q9. [Hard] You're building a likes counter for a post. Table: post_likes (post_id INT PK, likes INT NOT NULL DEFAULT 0). Write the SQL that runs when a user clicks Like — increment the count, or create a row with likes=1 if the post has no likes yet.

*Hint:* ON DUPLICATE KEY UPDATE.

**Answer:** ```
INSERT INTO post_likes (post_id, likes)
VALUES (?, 1)
ON DUPLICATE KEY UPDATE likes = likes + 1;
```

This is the atomic counter pattern — crucial for high-concurrency apps. Without ON DUPLICATE KEY UPDATE, you'd have to SELECT first then INSERT or UPDATE — two round-trips AND a race condition where two users clicking at once could both see likes=5 and both increment to 6 (losing a click).

### Q10. [Hard] You need to remove 500M rows from a 1B-row table without locking it for hours. What approach would you take?

*Hint:* Chunk the DELETE.

**Answer:** Chunk the DELETE: run `DELETE FROM t WHERE ... LIMIT 10000;` in a loop until no more rows match. Between chunks, sleep a few milliseconds to let replication catch up and avoid long locks. Many teams use a stored procedure or a cron job for this.

A single mass DELETE on a billion rows locks the table for hours, bloats the transaction log, and stalls replication. Chunking spreads the impact over time. In extreme cases, use `pt-archiver` (Percona Toolkit) which handles chunking, retries, and replication-awareness automatically.

### Q11. [Hard] Write SQL to copy the entire students table into students_copy, then modify students_copy so that every marks value is increased by 10, in a single script.

*Hint:* CREATE TABLE LIKE + INSERT SELECT + UPDATE.

**Answer:** ```
-- 1. Clone schema
DROP TABLE IF EXISTS students_copy;
CREATE TABLE students_copy LIKE students;

-- 2. Copy data
INSERT INTO students_copy SELECT * FROM students;

-- 3. Bump marks by 10
UPDATE students_copy SET marks = marks + 10;

SELECT * FROM students_copy;
```

LIKE copies the full schema including PKs and indexes. INSERT ... SELECT copies all rows. The final UPDATE modifies every row in the copy (no WHERE needed). Wrap all three in a transaction if atomicity matters.

### Q12. [Hard] Before running a DELETE on a big table, what's the best way to preview which rows will be affected?

*Hint:* SELECT with the same WHERE.

**Answer:** Run a `SELECT * FROM t WHERE ...` with the EXACT same WHERE clause you plan to use in DELETE. Review the result. Then replace SELECT with DELETE. Optionally wrap in START TRANSACTION so ROLLBACK remains an option.

This single habit prevents 95% of destructive accidents. Senior engineers do this reflexively. Never trust a WHERE clause you haven't previewed, especially on production.

## Multiple Choice Questions

### Q1. [Easy] Which SQL command adds a new row to a table?

**A is correct.** INSERT INTO table VALUES (...) adds new rows. The other options are not valid SQL.

### Q2. [Easy] Which command modifies existing rows?

**C is correct.** UPDATE is the DML command to change existing rows. MODIFY is part of ALTER TABLE (for changing column definitions, not data).

### Q3. [Easy] What is the risk of running `UPDATE students SET marks = 0;` without WHERE?

**C is correct.** Without WHERE, UPDATE applies to every row. On a production table this is catastrophic. Always preview with SELECT first.

### Q4. [Easy] Which is the correct multi-row INSERT?

**B is correct.** Multiple value tuples separated by commas in one VALUES clause. One semicolon at the end.

### Q5. [Easy] Which deletes only rows with marks below 50?

**B is correct.** DELETE FROM table WHERE condition; is standard syntax. The others have wrong syntax or use non-existent keywords.

### Q6. [Easy] INSERT IGNORE does what when a PRIMARY KEY conflict would occur?

**C is correct.** INSERT IGNORE skips conflicting rows silently. A warning is emitted but no error. Other integrity violations (NOT NULL, foreign key) may also become warnings, which is why IGNORE should be used carefully.

### Q7. [Easy] Given students with 5 rows, after `DELETE FROM students WHERE city = 'Mumbai';` (1 Mumbai row), how many rows remain?

**B is correct.** One row (Aarav from Mumbai) is deleted. 5 - 1 = 4 rows remain.

### Q8. [Medium] Which statement about ON DUPLICATE KEY UPDATE is TRUE?

**B is correct.** ON DUPLICATE KEY UPDATE atomically inserts a new row or updates specified columns of the existing row. It does NOT delete the existing row (that's REPLACE). It is not the same as REPLACE.

### Q9. [Medium] Which UPDATE syntax changes two columns at once?

**B is correct.** Comma-separated assignments in SET. Option A works but is two statements. Option C is PostgreSQL-specific. Option D is invalid.

### Q10. [Medium] After `DELETE FROM students;` on a 10-row table, what does SELECT COUNT(*) return?

**B is correct.** All 10 rows are deleted. The table still exists (unlike DROP), so COUNT(*) returns 0 — an empty set.

### Q11. [Medium] Which is the recommended way to insert new rows into a table, copying data from another table?

**B is correct.** INSERT INTO new_t SELECT ... FROM old_t; is the standard way. COPY and DUPLICATE are not MySQL commands (COPY exists in PostgreSQL for bulk load from files).

### Q12. [Medium] What does MySQL return when you run `UPDATE students SET marks = 100 WHERE id = 999;` but no row has id=999?

**B is correct.** UPDATE silently affects 0 rows when the WHERE matches nothing. No error. If you expected to update a row, check the output — "0 rows affected" means nothing happened.

### Q13. [Medium] Which is TRUE about REPLACE INTO?

**B is correct.** REPLACE does DELETE-then-INSERT internally on key conflict. Columns you don't specify are reset to DEFAULT/NULL. Prefer ON DUPLICATE KEY UPDATE for safer, more targeted updates.

### Q14. [Medium] Which is an atomic "insert or increment counter" query?

**B is correct.** Atomic single-statement upsert/increment. Option A has a race condition (two users can both see no row and both INSERT). Option C fails if the row doesn't exist. Option D sets count to 1 every time — not an increment.

### Q15. [Hard] Why should you prefer explicit column lists in INSERT statements?

**A is correct.** Explicit column lists are stable against schema changes. If someone adds a new column in the middle, `INSERT INTO t VALUES (...)` (Form 1) breaks. `INSERT INTO t (col1, col2) VALUES (...)` (Form 2) continues to work.

### Q16. [Hard] Inside a transaction, you run DELETE FROM students; then ROLLBACK; then SELECT COUNT(*). What do you see?

**B is correct.** DELETE is transactional. ROLLBACK undoes it. The original rows are visible again. This is why wrapping destructive statements in a transaction is a safety net.

### Q17. [Hard] If a table has 1M rows and you need to delete 500K based on some condition, what is the safest production approach?

**B is correct.** Chunked DELETE avoids long table locks and huge transaction logs. Option A can lock the table for minutes. Options C and D remove too much (all rows or the whole table). Percona's pt-archiver tool automates chunked deletion.

### Q18. [Hard] Which of the following DOES NOT modify data?

**D is correct.** SELECT is a read-only query that does not modify data. INSERT, UPDATE, and DELETE all modify rows.

### Q19. [Hard] You need to bulk-insert 1 million rows. Which is fastest in MySQL?

**B is correct.** Multi-row INSERT dramatically reduces network round-trips and per-statement parsing overhead. 1000 rows per INSERT is a sweet spot; beyond that, packet size limits and memory kick in. Even faster: `LOAD DATA INFILE` for loading from a file.

### Q20. [Hard] Which is the most PROFESSIONAL way to handle a destructive UPDATE in production?

**B is correct.** Preview + transaction + verify is the professional pattern. On critical systems, add backup, code review, and off-peak scheduling. This single habit prevents almost all UPDATE/DELETE disasters.

## Coding Challenges

### Challenge 1. Seed and Preview

**Difficulty:** Easy

Create a students table with id (PK), name, city, marks. Multi-insert 5 students (Aarav Mumbai 87, Priya Bengaluru 92, Rohan Delhi 78, Ananya Hyderabad 95, Vikram Pune 65). Preview them with SELECT.

**Constraints:**

- Use a single multi-row INSERT.

**Sample input:**

```
(No input)
```

**Sample output:**

```
Table with 5 rows returned by SELECT *.
```

**Solution:**

```sql
DROP TABLE IF EXISTS students;

CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    city VARCHAR(30),
    marks INT
);

INSERT INTO students (id, name, city, marks) VALUES
    (1, 'Aarav Sharma', 'Mumbai',    87),
    (2, 'Priya Iyer',   'Bengaluru', 92),
    (3, 'Rohan Verma',  'Delhi',     78),
    (4, 'Ananya Reddy', 'Hyderabad', 95),
    (5, 'Vikram Singh', 'Pune',      65);

SELECT * FROM students;
```

### Challenge 2. Precision UPDATE

**Difficulty:** Easy

From the students table, update Vikram Singh's marks to 80 AND his city to 'Mumbai' in a single statement.

**Constraints:**

- Use a single UPDATE. Include WHERE.

**Sample input:**

```
(No input)
```

**Sample output:**

```
id=5 has marks=80 and city='Mumbai'.
```

**Solution:**

```sql
UPDATE students
SET marks = 80, city = 'Mumbai'
WHERE id = 5;

-- Verify
SELECT * FROM students WHERE id = 5;
-- Expected:
-- | 5 | Vikram Singh | Mumbai | 80 |
```

### Challenge 3. Group Bonus

**Difficulty:** Medium

Give every student in Mumbai or Bengaluru a 5-mark bonus. Then list everyone's id, name, city, and updated marks.

**Constraints:**

- Use a single UPDATE with IN (...).

**Sample input:**

```
(No input)
```

**Sample output:**

```
Mumbai and Bengaluru students have marks +5; others unchanged.
```

**Solution:**

```sql
UPDATE students
SET marks = marks + 5
WHERE city IN ('Mumbai', 'Bengaluru');

SELECT id, name, city, marks FROM students ORDER BY id;
-- Aarav: 92 (was 87), Priya: 97 (was 92), others unchanged.
```

### Challenge 4. Upsert Counter

**Difficulty:** Medium

Build a click_counts table (page VARCHAR(100) PK, clicks INT). Write 5 INSERT ... ON DUPLICATE KEY UPDATE statements simulating clicks on '/home' (3 times) and '/about' (2 times). End with a SELECT showing the final counts.

**Constraints:**

- Use ON DUPLICATE KEY UPDATE.

**Sample input:**

```
(No input)
```

**Sample output:**

```
'/home' clicks = 3, '/about' clicks = 2.
```

**Solution:**

```sql
DROP TABLE IF EXISTS click_counts;

CREATE TABLE click_counts (
    page VARCHAR(100) PRIMARY KEY,
    clicks INT NOT NULL DEFAULT 0
);

-- 3 clicks on /home
INSERT INTO click_counts (page, clicks) VALUES ('/home', 1)
  ON DUPLICATE KEY UPDATE clicks = clicks + 1;
INSERT INTO click_counts (page, clicks) VALUES ('/home', 1)
  ON DUPLICATE KEY UPDATE clicks = clicks + 1;
INSERT INTO click_counts (page, clicks) VALUES ('/home', 1)
  ON DUPLICATE KEY UPDATE clicks = clicks + 1;

-- 2 clicks on /about
INSERT INTO click_counts (page, clicks) VALUES ('/about', 1)
  ON DUPLICATE KEY UPDATE clicks = clicks + 1;
INSERT INTO click_counts (page, clicks) VALUES ('/about', 1)
  ON DUPLICATE KEY UPDATE clicks = clicks + 1;

SELECT * FROM click_counts;
-- Expected:
-- +--------+--------+
-- | page   | clicks |
-- +--------+--------+
-- | /home  |      3 |
-- | /about |      2 |
-- +--------+--------+
```

### Challenge 5. Archival Pattern

**Difficulty:** Hard

Create an employees table with id, name, salary, active. Seed 5 employees (2 inactive). Archive all inactive employees into an employees_archive table, then DELETE them from employees. Use a transaction so both steps succeed together or not at all.

**Constraints:**

- Wrap the INSERT-DELETE in a transaction.

**Sample input:**

```
(No input)
```

**Sample output:**

```
3 rows remain in employees; 2 rows in employees_archive.
```

**Solution:**

```sql
-- Setup
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS employees_archive;

CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    active TINYINT DEFAULT 1
);

CREATE TABLE employees_archive LIKE employees;

INSERT INTO employees VALUES
    (101, 'Kavya Nair',    60000, 1),
    (102, 'Arjun Mehta',   85000, 1),
    (103, 'Sneha Patel',   72000, 0),   -- inactive
    (104, 'Rahul Joshi',   95000, 1),
    (105, 'Meera Gupta',   65000, 0);   -- inactive

-- Atomic archive
START TRANSACTION;

INSERT INTO employees_archive
SELECT * FROM employees WHERE active = 0;

DELETE FROM employees WHERE active = 0;

COMMIT;

-- Verify
SELECT COUNT(*) AS live FROM employees;           -- 3
SELECT COUNT(*) AS archived FROM employees_archive; -- 2
SELECT * FROM employees_archive;
```

### Challenge 6. Professional Destructive Update

**Difficulty:** Hard

A client asks: "Move all students from 'Delhi' to 'New Delhi' and increase their marks by 10." Show the FULL professional workflow: preview, transaction, apply, verify, commit or rollback. Use appropriate SELECTs before and after.

**Constraints:**

- Use START TRANSACTION / COMMIT. Include comments explaining each step.

**Sample input:**

```
(No input)
```

**Sample output:**

```
Preview shows affected rows. UPDATE runs. Post-check verifies. COMMIT finalizes.
```

**Solution:**

```sql
-- STEP 1: Preview — what rows will be affected?
SELECT id, name, city, marks
FROM students
WHERE city = 'Delhi';
-- (confirm the list looks right before proceeding)

-- STEP 2: Begin transaction so we can ROLLBACK if something looks wrong.
START TRANSACTION;

-- STEP 3: Apply the change
UPDATE students
SET city = 'New Delhi',
    marks = marks + 10
WHERE city = 'Delhi';

-- STEP 4: Post-check — do the updated rows look right?
SELECT id, name, city, marks
FROM students
WHERE city = 'New Delhi';
-- If the rows look correct, proceed. If not, ROLLBACK.

-- STEP 5: Commit or rollback based on verification
COMMIT;
-- OR:
-- ROLLBACK;

-- This workflow — preview, transaction, apply, verify, commit — is how
-- senior engineers handle production updates. Never skip the preview.
-- Never skip the verify. If ANYTHING looks wrong, ROLLBACK.
```

---

*Notes: https://learn.modernagecoders.com/resources/sql/insert-update-delete/*
