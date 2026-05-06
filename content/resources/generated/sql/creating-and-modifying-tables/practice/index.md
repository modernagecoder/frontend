---
title: "Practice: CREATE, ALTER, DROP Tables"
description: "56 practice problems for CREATE, ALTER, DROP Tables in SQL"
slug: creating-and-modifying-tables-practice
canonical: https://learn.modernagecoders.com/resources/sql/creating-and-modifying-tables/practice
category: "SQL"
---
# Practice: CREATE, ALTER, DROP Tables

**Total questions:** 56

## Topic-Specific Questions

### Q1. [Easy] Write the ALTER statement to add a column `phone VARCHAR(15)` to the employees table.

*Hint:* ALTER TABLE ... ADD COLUMN ...

**Answer:** ```
ALTER TABLE employees ADD COLUMN phone VARCHAR(15);
```

The new column is added at the end of the table by default. Existing rows get NULL in this new column (unless you add DEFAULT or NOT NULL with a default).

### Q2. [Easy] Write the ALTER statement to drop the `phone` column from employees.

*Hint:* DROP COLUMN.

**Answer:** ```
ALTER TABLE employees DROP COLUMN phone;
```

Irreversible without a backup. The data in the column is permanently lost. Always double-check you meant this column, especially on production tables.

### Q3. [Easy] Write the ALTER statement to change the `salary` column type to DECIMAL(12, 2).

*Hint:* MODIFY COLUMN.

**Answer:** ```
ALTER TABLE employees MODIFY COLUMN salary DECIMAL(12, 2);
```

MODIFY changes the type (or constraints) without changing the column name. Existing values are converted to the new type if possible; they are rejected if the new type can't represent the old value.

### Q4. [Easy] Write the ALTER statement to rename the column `department` to `dept` in employees (MySQL 8.0+).

*Hint:* RENAME COLUMN ... TO ...

**Answer:** ```
ALTER TABLE employees RENAME COLUMN department TO dept;
```

MySQL 8.0 introduced this cleaner syntax. In MySQL 5.7, you had to use `CHANGE COLUMN old_name new_name SAMETYPE ...` and repeat the full type.

### Q5. [Easy] Write the SQL to rename the `employees` table to `staff`.

*Hint:* Two ways to do this.

**Answer:** ```
-- Way 1:
ALTER TABLE employees RENAME TO staff;

-- Way 2:
RENAME TABLE employees TO staff;
```

Both are valid MySQL syntax. `RENAME TABLE` is preferred for its clarity and because you can rename multiple tables in one atomic statement: `RENAME TABLE a TO b, c TO d;`.

### Q6. [Easy] What is the difference between DELETE, TRUNCATE, and DROP in one sentence each?

*Hint:* Rows, table, WHERE clause.

**Answer:** **DELETE** removes specific rows matching a WHERE clause (transactional). **TRUNCATE** removes ALL rows quickly and resets AUTO_INCREMENT, but keeps the table. **DROP** removes the entire table — structure and data — permanently.

DELETE = surgeon, TRUNCATE = bulldozer, DROP = dynamite. This one-liner answer is the safe interview response.

### Q7. [Easy] Which of DELETE, TRUNCATE, and DROP can be used with a WHERE clause?

*Hint:* Only one.

**Answer:** Only **DELETE** supports a WHERE clause. TRUNCATE always empties the whole table; DROP removes the whole table.

This is one of the fastest interview gotchas. If you ever need to remove rows selectively, DELETE is the only option.

### Q8. [Medium] Write SQL to create a table `employees_archive` that is a full copy (with data) of the employees table. You don't need to copy indexes.

*Hint:* CREATE TABLE AS SELECT.

**Answer:** ```
CREATE TABLE employees_archive AS
SELECT * FROM employees;
```

CTAS copies columns and data. For a 4-row table, this is instant. For a 10M-row table, it can take minutes. Remember: indexes, PKs, and AUTO_INCREMENT attributes are NOT copied.

### Q9. [Medium] Write SQL to clone the `employees` schema (structure, indexes, constraints) into a new empty table called `employees_template`.

*Hint:* LIKE.

**Answer:** ```
CREATE TABLE employees_template LIKE employees;
```

`CREATE TABLE new LIKE old` is the full schema clone — indexes, PKs, and defaults all come across. The new table starts empty. If you also want the data, follow up with `INSERT INTO employees_template SELECT * FROM employees;`.

### Q10. [Medium] Write ALTER to add a named UNIQUE constraint `uq_email` on the `email` column of employees.

*Hint:* ADD CONSTRAINT.

**Answer:** ```
ALTER TABLE employees
    ADD CONSTRAINT uq_email UNIQUE (email);
```

Named constraints are easier to drop later: `ALTER TABLE employees DROP INDEX uq_email;`. If you don't name it, MySQL auto-generates a name like `employees_email_key`.

### Q11. [Medium] Write ALTER to add a foreign key named `fk_manager` on column `manager_id` referencing `employees(emp_id)`.

*Hint:* ADD CONSTRAINT ... FOREIGN KEY ... REFERENCES ...

**Answer:** ```
ALTER TABLE employees
    ADD CONSTRAINT fk_manager
    FOREIGN KEY (manager_id) REFERENCES employees(emp_id);
```

This is an example of a self-referencing foreign key — the table refers to itself. Used when an employee's manager is also an employee in the same table. Chapter 12 covers self joins.

### Q12. [Medium] Write a single ALTER statement that adds a `bonus DECIMAL(10,2) DEFAULT 0` column AND drops the `hire_date` column in one shot.

*Hint:* Comma-separate multiple actions.

**Answer:** ```
ALTER TABLE employees
    ADD COLUMN bonus DECIMAL(10,2) DEFAULT 0,
    DROP COLUMN hire_date;
```

Combining changes into one ALTER is faster than two separate statements because MySQL can rebuild the table once instead of twice (on engines that rebuild on each DDL).

### Q13. [Medium] After you TRUNCATE a table and insert a new row, what emp_id does it get if the previous max was 10?

*Hint:* TRUNCATE resets AUTO_INCREMENT.

**Answer:** **1**. TRUNCATE resets the AUTO_INCREMENT counter to its initial value (default 1).

Contrast with DELETE, which keeps the counter. After DELETE + INSERT, the new id would be 11. This is a frequent interview gotcha — know both behaviors.

### Q14. [Medium] Is DELETE transactional (rollback-able) in MySQL? What about TRUNCATE?

*Hint:* Think DDL vs DML.

**Answer:** **DELETE** is DML and fully transactional — wrap it in START TRANSACTION ... ROLLBACK to undo. **TRUNCATE** is DDL with an implicit COMMIT — it cannot be rolled back in most databases including MySQL.

If you absolutely need to remove all rows but keep the option to undo, use DELETE inside a transaction. If you want speed and don't need rollback, use TRUNCATE.

### Q15. [Hard] Write a single DDL script that: 1) creates a `school` database (if missing), 2) uses it, 3) creates a `students` table with id (auto PK), name NOT NULL, email UNIQUE NOT NULL, 4) then adds a new `dob` DATE column, 5) renames `email` to `email_id`, 6) drops the table cleanly.

*Hint:* CREATE, ALTER several times, DROP.

**Answer:** ```
CREATE DATABASE IF NOT EXISTS school;
USE school;

DROP TABLE IF EXISTS students;
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

ALTER TABLE students ADD COLUMN dob DATE;
ALTER TABLE students RENAME COLUMN email TO email_id;

DROP TABLE students;
```

This is exactly the kind of mini-migration you write daily as a backend engineer. IF NOT EXISTS / IF EXISTS make it safe to rerun. ALTER handles the add and rename. DROP at the end removes the table entirely.

### Q16. [Hard] Create a `TEMPORARY` table called `top_earners` containing only employees earning more than 80000. Then count how many there are.

*Hint:* CREATE TEMPORARY TABLE ... AS SELECT ...

**Answer:** ```
CREATE TEMPORARY TABLE top_earners AS
SELECT * FROM employees WHERE salary > 80000;

SELECT COUNT(*) AS total_top FROM top_earners;
```

Temporary tables are scoped to your session — no other user can see them. They drop automatically on disconnect. Useful for staging intermediate results without polluting the main schema.

### Q17. [Hard] Why might an ALTER TABLE on a 100M-row table be dangerous in production?

*Hint:* Locks and rebuilds.

**Answer:** Many ALTERs require a full table rebuild, which locks the table (or at least blocks writes) for minutes to hours. On a busy production DB, this means your app hangs or errors for the duration. Modern MySQL 8.0 supports online DDL for many cases (ADD INDEX, ADD COLUMN) but not all.

Professional teams use tools like `pt-online-schema-change` (Percona) or `gh-ost` (GitHub) to perform schema changes without locking — they build a shadow table, sync changes, and atomically swap. Critical for zero-downtime deploys.

### Q18. [Hard] Write a robust "reset" script for a `test_orders` table. It should: drop the table if it exists, create it fresh with an AUTO_INCREMENT PK, customer VARCHAR(50) required, amount DECIMAL(10,2) positive, and insert three sample rows.

*Hint:* IF EXISTS, IF NOT EXISTS, CHECK.

**Answer:** ```
DROP TABLE IF EXISTS test_orders;

CREATE TABLE test_orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer VARCHAR(50) NOT NULL,
    amount DECIMAL(10,2) NOT NULL CHECK (amount > 0),
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO test_orders (customer, amount) VALUES
    ('Aarav Sharma', 1200.50),
    ('Priya Iyer',    850.00),
    ('Rohan Verma',  2499.99);

SELECT * FROM test_orders;
```

This is the canonical "seed script" pattern. Safe to run any number of times. DROP IF EXISTS ensures a clean start. CHECK prevents negative amounts. DEFAULT CURRENT_TIMESTAMP stamps order_date automatically.

### Q19. [Hard] You want to remove the PRIMARY KEY from the employees table entirely (rare, but sometimes needed for schema redesign). How?

*Hint:* ALTER TABLE ... DROP PRIMARY KEY.

**Answer:** ```
ALTER TABLE employees DROP PRIMARY KEY;
```

This removes the PK. The column(s) that had it remain in the table. If the PK column was AUTO_INCREMENT, you must first remove AUTO_INCREMENT via MODIFY, because AUTO_INCREMENT requires a key: `ALTER TABLE employees MODIFY emp_id INT NOT NULL;` then drop the PK.

### Q20. [Hard] Your colleague runs `TRUNCATE TABLE orders` but it fails with a foreign key error. Why, and how do you fix it?

*Hint:* orders is referenced by another table.

**Answer:** TRUNCATE cannot run if another table has a FOREIGN KEY referencing orders. Fix options: (1) TRUNCATE the child tables first, (2) temporarily disable FK checks with `SET FOREIGN_KEY_CHECKS = 0;`, then TRUNCATE, then re-enable, or (3) use `DELETE FROM orders;` which respects FK cascading behavior.

In InnoDB, TRUNCATE internally drops and recreates the table, which breaks FK references. MySQL blocks it to protect you. Temporarily turning off FK checks is common in dev but risky in prod (can leave orphan rows). The safer alternative is DELETE inside a transaction.

## Mixed Questions

### Q1. [Easy] Complete the table: for each of DELETE, TRUNCATE, DROP, say which one (a) keeps the table, (b) resets AUTO_INCREMENT, (c) supports WHERE.

*Hint:* Three statements.

**Answer:** (a) Keeps the table: **DELETE** and **TRUNCATE** (DROP removes it). (b) Resets AUTO_INCREMENT: **TRUNCATE** only. (c) Supports WHERE: **DELETE** only.

This three-way comparison is the single most-asked DDL interview question. Keeping this table in your head is worth hundreds of thousands of career rupees.

### Q2. [Easy] Write SQL to add a column `joining_bonus DECIMAL(8,2) DEFAULT 0` to an existing `employees` table.

*Hint:* ADD COLUMN with DEFAULT.

**Answer:** ```
ALTER TABLE employees
    ADD COLUMN joining_bonus DECIMAL(8,2) DEFAULT 0;
```

Existing rows get 0 in joining_bonus (because of the DEFAULT). New rows also get 0 unless explicitly specified. If you omit DEFAULT, existing rows get NULL.

### Q3. [Medium] Find the bug:

```
CREATE TABLE users (
    id INT AUTO_INCREMENT,
    email VARCHAR(100) UNIQUE
);
```

*Hint:* AUTO_INCREMENT needs what?

**Answer:** AUTO_INCREMENT column must be a key (usually PRIMARY KEY). As written, MySQL errors: "Incorrect table definition; there can be only one auto column and it must be defined as a key".

```
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) UNIQUE
);
```

AUTO_INCREMENT is only valid when the column is a key (PK or UK). This ensures values stay unique. The fix is to add PRIMARY KEY to id.

### Q4. [Medium] Write ALTER to change the `dept` column so it can no longer be NULL. Assume all current rows already have a value.

*Hint:* MODIFY COLUMN ... NOT NULL.

**Answer:** ```
ALTER TABLE employees
    MODIFY COLUMN dept VARCHAR(30) NOT NULL;
```

Note: you must repeat the original type (VARCHAR(30)) when using MODIFY, even if only the nullability is changing. If any existing row has NULL in dept, the ALTER fails — you must first UPDATE those rows to a valid value.

### Q5. [Medium] After running these statements, how many rows are in the table?

```
-- employees has 4 rows (emp_ids 1-4)
DELETE FROM employees WHERE emp_id = 2;
INSERT INTO employees (name, email, dept, salary) VALUES
  ('Diya', 'diya@corp.in', 'HR', 50000);
TRUNCATE TABLE employees;
INSERT INTO employees (name, email, dept, salary) VALUES
  ('Meera', 'meera@corp.in', 'IT', 70000);
```

*Hint:* TRUNCATE wipes everything.

**Answer:** **1** row (just Meera). The DELETE and the first INSERT are undone by TRUNCATE. Only the final INSERT after TRUNCATE survives.

After the delete, rows = 3. After the insert, rows = 4. TRUNCATE resets to 0. Final insert makes it 1. Also note Meera's emp_id will be 1, not 5, because TRUNCATE reset AUTO_INCREMENT.

### Q6. [Medium] When would you use CREATE TEMPORARY TABLE instead of a regular CREATE TABLE?

*Hint:* Session-scoped, auto-cleanup.

**Answer:** Use TEMPORARY when (1) you need intermediate staging for a multi-step query or report and don't want the table to linger; (2) different concurrent sessions need their own private version of the same-named table (temporary tables are session-local); (3) you want the table to auto-drop when you disconnect.

Common example: breaking a complex ETL process into three stages, each writing to a temporary table. After the final insert into the permanent table, the temps vanish automatically when the job ends.

### Q7. [Hard] Fix the script so it can run multiple times without errors:

```
CREATE DATABASE shop;
USE shop;
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);
```

*Hint:* IF NOT EXISTS and IF EXISTS.

**Answer:** ```
CREATE DATABASE IF NOT EXISTS shop;
USE shop;
DROP TABLE IF EXISTS products;
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);
```

First run works. Second run fails because "Database exists" and "Table already exists". IF NOT EXISTS and DROP IF EXISTS make the script idempotent — runnable any number of times.

### Q8. [Hard] Why is TRUNCATE categorized as DDL even though conceptually it only removes data?

*Hint:* Internal implementation.

**Answer:** TRUNCATE works by dropping and recreating the table internally — a structural operation. That is DDL behavior. Side effects: it resets AUTO_INCREMENT, implicitly commits, cannot be rolled back in most databases, and doesn't fire row-level triggers.

If TRUNCATE were pure DML, it would use the transaction log and support rollback like DELETE. Instead, it trades rollback-ability for speed by taking a DDL shortcut. Know both behaviors; interviewers love this question.

### Q9. [Hard] Write a script that: 1) creates an `audit_log` table, 2) adds a column `severity ENUM('low','medium','high') NOT NULL DEFAULT 'low'`, 3) creates a UNIQUE index on (user_id, event_time).

*Hint:* CREATE + ALTER + CREATE INDEX.

**Answer:** ```
CREATE TABLE audit_log (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    event_time DATETIME NOT NULL,
    action VARCHAR(100) NOT NULL
);

ALTER TABLE audit_log
    ADD COLUMN severity ENUM('low','medium','high') NOT NULL DEFAULT 'low';

CREATE UNIQUE INDEX uq_user_event
    ON audit_log (user_id, event_time);
```

Indexes can be added via CREATE INDEX (shown) or ALTER TABLE ADD INDEX. A UNIQUE index acts like a UNIQUE constraint. Composite indexes make queries on (user_id, event_time) much faster.

### Q10. [Hard] After `DROP TABLE employees;`, can you recover the data without a backup?

*Hint:* Depends on the storage engine and setup.

**Answer:** Usually **no**. DROP TABLE is immediate and irreversible in standard MySQL. Recovery requires a backup (mysqldump, binary backup) taken before the drop. Some enterprise tools can read the raw InnoDB tablespace, but success is never guaranteed.

Good backup practice: daily full dumps + binary logs for point-in-time recovery. On production, never run DROP without double-checking. Some companies require 4-eyes approval for DROP/TRUNCATE in prod via review tools.

### Q11. [Hard] Clone the employees table's structure AND data into a new table `employees_2026_q1`.

*Hint:* Two steps: LIKE + INSERT SELECT.

**Answer:** ```
CREATE TABLE employees_2026_q1 LIKE employees;
INSERT INTO employees_2026_q1 SELECT * FROM employees;
```

`CREATE TABLE LIKE` clones the full schema (columns, indexes, PKs, AUTO_INCREMENT). Then INSERT ... SELECT copies all rows. This is the proper way to make a true schema + data clone — unlike CTAS which skips indexes.

### Q12. [Hard] Why does MySQL usually lock a table during ALTER TABLE, and how is this handled in modern versions?

*Hint:* Online DDL.

**Answer:** Historically, ALTER forced a full table copy: MySQL created a shadow copy, applied changes, then swapped. This blocked writes (sometimes reads). MySQL 5.6+ introduced **Online DDL**: many operations (ADD INDEX, ADD COLUMN, DROP COLUMN on newer versions) now run concurrently with reads and writes. Still, certain ALTERs (changing PK, some MODIFY COLUMN cases) fall back to the blocking copy.

Check `ALGORITHM=INPLACE, LOCK=NONE` clauses in ALTER statements for explicit control over online DDL behavior in MySQL 8.0. On very large tables, tools like pt-online-schema-change or gh-ost are still used for zero-downtime migrations.

## Multiple Choice Questions

### Q1. [Easy] Which command removes the entire table including its structure?

**C is correct.** DROP TABLE permanently removes the table and its data. DELETE and TRUNCATE keep the table's structure. REMOVE TABLE is not a valid command.

### Q2. [Easy] Which ALTER command adds a new column?

**A is correct.** `ADD COLUMN` is the standard syntax. The word COLUMN is optional in MySQL but considered good practice for portability.

### Q3. [Easy] Which command empties a table quickly and resets AUTO_INCREMENT?

**B is correct.** TRUNCATE empties the table and resets AUTO_INCREMENT to 1. DELETE keeps the counter. DROP removes the table entirely.

### Q4. [Easy] Which command deletes only rows where department = 'HR'?

**C is correct.** Only DELETE supports a WHERE clause. TRUNCATE always wipes all rows. DROP removes the table. REMOVE FROM is not valid SQL.

### Q5. [Easy] Which modifier makes CREATE TABLE safely re-runnable?

**B is correct.** `CREATE TABLE IF NOT EXISTS t (...)` is a no-op if the table already exists. OR REPLACE works in MariaDB and some other databases but not standard MySQL.

### Q6. [Easy] Which ALTER renames a table from `employees` to `staff`?

**C is correct.** Both ALTER TABLE ... RENAME TO and RENAME TABLE are valid MySQL syntax. RENAME TABLE is atomic and can rename multiple tables in one statement.

### Q7. [Easy] Which ALTER removes a column called phone?

**B is correct.** `DROP COLUMN` is the standard syntax. REMOVE and DELETE COLUMN are not valid.

### Q8. [Medium] After `TRUNCATE TABLE employees;`, the next INSERT for a table with AUTO_INCREMENT starting at 1 gets which id?

**B is correct.** TRUNCATE resets AUTO_INCREMENT to the initial value (default 1), so the next insert gets id = 1. This differs from DELETE, which keeps the counter.

### Q9. [Medium] Which is TRUE about DROP TABLE?

**C is correct.** DROP removes the table entirely. It cannot be rolled back (auto-commit), doesn't support WHERE, and doesn't keep the structure.

### Q10. [Medium] Which statement about CREATE TABLE AS SELECT is TRUE?

**B is correct.** CTAS copies columns and data but NOT indexes, PKs, FKs, or AUTO_INCREMENT. To clone full schema use `CREATE TABLE new_t LIKE old_t;`.

### Q11. [Medium] Which command disables FOREIGN KEY enforcement for the current session in MySQL?

**A is correct.** `SET FOREIGN_KEY_CHECKS = 0;` temporarily turns off FK validation. Set it back to 1 to re-enable. Use sparingly; can create orphan rows.

### Q12. [Medium] Which ALTER makes the `name` column NOT NULL (it was previously nullable)?

**B is correct.** MODIFY COLUMN takes the full new definition of the column. You must repeat the type even if only the nullability changes. Fails if existing rows have NULL — update them first.

### Q13. [Medium] What does `CREATE TEMPORARY TABLE` do?

**B is correct.** TEMPORARY tables are session-local and auto-drop when the connection ends. Two different sessions can have TEMPORARY tables with the same name without conflict.

### Q14. [Medium] Which is NOT a valid reason to prefer TRUNCATE over DELETE?

**C is correct (it is NOT a valid reason).** TRUNCATE cannot be rolled back in most databases including MySQL — this is a reason AGAINST TRUNCATE, not for it. A, B, and D are all genuine reasons to pick TRUNCATE.

### Q15. [Hard] You run: `CREATE TABLE t2 LIKE t1;` followed by `INSERT INTO t2 SELECT * FROM t1;`. What does t2 have that CTAS would have missed?

**B is correct.** `CREATE TABLE LIKE` copies the full schema including PKs, indexes, and AUTO_INCREMENT. CTAS copies only columns and data. That's why LIKE + INSERT is the preferred clone.

### Q16. [Hard] Why might `ALTER TABLE employees DROP COLUMN salary;` fail?

**D is correct.** All three can cause failure: column doesn't exist, it's part of an index/constraint that must be dropped first, or another table's FK points to it (rare for non-PK columns but possible with composite FKs).

### Q17. [Hard] Which statement about DELETE in MySQL is TRUE?

**C is correct.** DELETE is DML and fully transactional. Wrap it in START TRANSACTION ... ROLLBACK to undo. A is false (DELETE doesn't implicitly commit). B is false (DELETE fires triggers). D is false (only TRUNCATE resets AUTO_INCREMENT).

### Q18. [Hard] Which syntax correctly adds a composite UNIQUE constraint on (first_name, last_name)?

**C is correct.** Both forms work. Option B with an explicit constraint name is preferred because you can later DROP the constraint by name: `ALTER TABLE t DROP INDEX uq_name;`.

### Q19. [Hard] Which of these single ALTER statements is valid?

**A is correct.** Multiple changes in one ALTER are comma-separated and faster than running separate ALTERs. The others are invalid syntax.

### Q20. [Hard] You need to change `emp_id` from INT to BIGINT on a 50M-row table. What should you be aware of?

**B is correct.** Changing a column type typically rebuilds the table, which can lock writes for minutes or hours on big tables. MySQL 8.0 supports online DDL for many operations, but not all type changes. Tools like pt-online-schema-change handle this without downtime.

## Coding Challenges

### Challenge 1. Safe Reset Script

**Difficulty:** Easy

Write a re-runnable script that: drops the `products` table if it exists; creates it with id (AUTO_INCREMENT PK), name NOT NULL (up to 80 chars), price DECIMAL(10,2) > 0; inserts three products; ends with a COUNT.

**Constraints:**

- Use IF EXISTS on the DROP.

**Sample input:**

```
(No input)
```

**Sample output:**

```
Creates fresh table, inserts 3 rows, COUNT = 3. Safe to re-run.
```

**Solution:**

```sql
DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(80) NOT NULL,
    price DECIMAL(10,2) NOT NULL CHECK (price > 0)
);

INSERT INTO products (name, price) VALUES
    ('Wireless Mouse',    799.00),
    ('Mechanical Keyboard', 4999.00),
    ('USB-C Charger',      1299.50);

SELECT COUNT(*) AS total FROM products;
-- Output:
-- +-------+
-- | total |
-- +-------+
-- |     3 |
-- +-------+
```

### Challenge 2. ALTER Multiple Things in One Shot

**Difficulty:** Easy

Given an employees table with columns (emp_id, name, department, salary), write ONE ALTER TABLE that does all three: add a `bonus DECIMAL(8,2) DEFAULT 0` column, rename `department` to `dept`, and modify `name` to VARCHAR(80) NOT NULL.

**Constraints:**

- One statement only.

**Sample input:**

```
(No input)
```

**Sample output:**

```
A single ALTER statement that applies all three changes.
```

**Solution:**

```sql
ALTER TABLE employees
    ADD COLUMN bonus DECIMAL(8,2) DEFAULT 0,
    RENAME COLUMN department TO dept,
    MODIFY COLUMN name VARCHAR(80) NOT NULL;

DESCRIBE employees;
-- Expected structure:
-- emp_id (PK), name VARCHAR(80) NOT NULL, dept VARCHAR(30),
-- salary DECIMAL(10,2), bonus DECIMAL(8,2) DEFAULT 0.
```

### Challenge 3. DELETE vs TRUNCATE vs DROP Demo

**Difficulty:** Medium

Build a small demo: create a products table with 5 rows; use DELETE to remove two rows; use TRUNCATE to wipe the rest; finally, DROP the table. Show the row count after each step using SELECT COUNT(*).

**Constraints:**

- Use all three commands.

**Sample input:**

```
(No input)
```

**Sample output:**

```
5 -> 3 -> 0 -> error (table dropped).
```

**Solution:**

```sql
DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    price DECIMAL(10,2)
);

INSERT INTO products VALUES
    (1, 'Pen',    10.00),
    (2, 'Notebook', 55.00),
    (3, 'Bag',    499.00),
    (4, 'Bottle', 199.00),
    (5, 'Mug',     149.00);

SELECT COUNT(*) AS step1 FROM products;   -- 5

DELETE FROM products WHERE price < 100;    -- removes Pen and Notebook
SELECT COUNT(*) AS step2 FROM products;   -- 3

TRUNCATE TABLE products;
SELECT COUNT(*) AS step3 FROM products;   -- 0

DROP TABLE products;
-- SELECT COUNT(*) FROM products;  -- would ERROR: Table doesn't exist
```

### Challenge 4. Backup Before Risky Change

**Difficulty:** Medium

Your manager asks you to drop the column `legacy_code` from `customers`, but warns "back it up first". Write SQL that: 1) creates a FULL schema+data backup of customers named `customers_backup_20260411`, 2) drops the legacy_code column from customers.

**Constraints:**

- Use the 2-step schema clone method (LIKE + INSERT SELECT).

**Sample input:**

```
(No input)
```

**Sample output:**

```
backup exists with same rows; original customers has legacy_code removed.
```

**Solution:**

```sql
-- 1) Full backup (schema + data)
DROP TABLE IF EXISTS customers_backup_20260411;
CREATE TABLE customers_backup_20260411 LIKE customers;
INSERT INTO customers_backup_20260411 SELECT * FROM customers;

-- 2) Proceed with risky change on the live table
ALTER TABLE customers DROP COLUMN legacy_code;

-- Verify
SELECT COUNT(*) AS backup_rows FROM customers_backup_20260411;
DESCRIBE customers;
-- If anything goes wrong, we can restore from customers_backup_20260411.
```

### Challenge 5. Constraint Rescue

**Difficulty:** Hard

An existing `orders` table has no constraints. Add a PRIMARY KEY on order_id, a FOREIGN KEY emp_id referencing employees(emp_id), a CHECK that amount > 0, and a UNIQUE index on (emp_id, order_date). Assume the table exists with order_id, emp_id, amount, order_date columns.

**Constraints:**

- Use named constraints for easier rollback.

**Sample input:**

```
(No input)
```

**Sample output:**

```
Four constraints added. DESCRIBE shows PRI/UNI/MUL keys.
```

**Solution:**

```sql
ALTER TABLE orders
    ADD CONSTRAINT pk_orders PRIMARY KEY (order_id),
    ADD CONSTRAINT fk_emp FOREIGN KEY (emp_id) REFERENCES employees(emp_id),
    ADD CONSTRAINT chk_amount CHECK (amount > 0),
    ADD CONSTRAINT uq_emp_date UNIQUE (emp_id, order_date);

DESCRIBE orders;
-- Expected keys: order_id (PRI), emp_id (MUL), (emp_id, order_date) UNIQUE composite

-- If something fails (e.g., existing rows violate the CHECK),
-- you can drop a specific constraint by name:
-- ALTER TABLE orders DROP CHECK chk_amount;
-- ALTER TABLE orders DROP FOREIGN KEY fk_emp;
```

### Challenge 6. Zero-Downtime Rename Simulation

**Difficulty:** Hard

Simulate a zero-downtime rename of the employees table to staff, using a view as a backward-compatibility shim. Write: 1) a script that renames employees to staff, 2) creates a VIEW called employees that SELECTs from staff (so old code still works), 3) shows that SELECT * FROM employees still returns data.

**Constraints:**

- Use RENAME TABLE and CREATE VIEW.

**Sample input:**

```
(No input)
```

**Sample output:**

```
The table is now named staff, but queries against employees still work through the view.
```

**Solution:**

```sql
-- Step 1: rename the physical table
RENAME TABLE employees TO staff;

-- Step 2: create a view with the old name for backward compatibility
CREATE OR REPLACE VIEW employees AS
SELECT * FROM staff;

-- Step 3: verify both names still work
SELECT COUNT(*) AS via_new_name   FROM staff;
SELECT COUNT(*) AS via_old_name   FROM employees;

-- Both counts should match.
--
-- This is the pattern big companies use during rename migrations:
-- rename the table, keep a view with the old name so existing app code keeps working,
-- then gradually update call sites over several releases, and finally drop the view.
--
-- Once all call sites are updated:
-- DROP VIEW employees;
```

---

*Notes: https://learn.modernagecoders.com/resources/sql/creating-and-modifying-tables/*
