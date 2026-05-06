---
title: "SQL CREATE, ALTER, DROP Table - Add/Rename Columns, TRUNCATE vs DROP vs DELETE | Modern Age Coders"
description: "Master MySQL DDL - CREATE TABLE with constraints, ALTER TABLE to add/drop/modify/rename columns, DROP TABLE, TRUNCATE TABLE, CREATE TABLE AS SELECT, TEMPORARY tables, IF EXISTS / IF NOT EXISTS. Crystal-clear difference between DELETE, TRUNCATE, and DROP. 56 practice questions and coding challenges."
slug: creating-and-modifying-tables
canonical: https://learn.modernagecoders.com/resources/sql/creating-and-modifying-tables/
category: "SQL"
keywords: ["create table mysql", "alter table add column", "alter table drop column", "alter table modify", "alter table rename", "drop table vs truncate vs delete", "create table as select", "temporary table mysql", "if exists mysql", "rename table mysql"]
---
# CREATE, ALTER, DROP Tables

**Difficulty:** Beginner  
**Reading time:** 22 min  
**Chapter:** 4  
**Practice questions:** 56

## Creating and Changing Table Structure

Real-world databases evolve. A table you designed last sprint will need a new column next sprint, an index the sprint after that, and a rename six months later when the product team decides "users" should be called "members". This chapter is the toolbox for all of those schema changes.

The commands covered here are collectively called **DDL** (Data Definition Language) — they define and change structure:

- `CREATE TABLE` — make a new table
- `ALTER TABLE` — add/drop/rename columns, add constraints, rename the table
- `DROP TABLE` — permanently delete a table and all its data
- `TRUNCATE TABLE` — delete every row (keep the table)
- `CREATE TABLE AS SELECT` — copy another table's rows into a new one
- `CREATE TEMPORARY TABLE` — a table that disappears when your session ends

### The Sample Schema for This Chapter

employeesemp_id INT PKname VARCHAR(50)department VARCHAR(30)salary DECIMAL(10,2)emp_idnamedepartmentsalary101Kavya NairHR60000.00102Arjun MehtaIT85000.00103Sneha PatelFinance72000.00104Rahul JoshiIT95000.00

## Why Mastering DDL Matters

### 1. Every Project Has Migrations

A **migration** is a SQL script that evolves your schema from one version to another. Frameworks like Django, Laravel, Rails, and Flyway generate migrations automatically, but you still have to read and write ALTER TABLE statements. Knowing DDL fluently lets you review migrations before they hit production — and stops junior teammates from committing scripts that would drop a column used by reporting.

### 2. DROP vs TRUNCATE vs DELETE Is a Classic Interview Question

Asked in ~70% of SQL interviews. Many candidates know one or two of the three; knowing all three plus their trade-offs (speed, rollback behavior, AUTO_INCREMENT reset, FOREIGN KEY constraints) separates you from the crowd.

### 3. Bad ALTER Can Kill Production

An `ALTER TABLE orders DROP COLUMN amount` on a 500GB table can lock the table for 20 minutes, making your site unusable. Modern MySQL (8.0) has online DDL for many operations, but you still need to know which ALTER is safe and which needs a maintenance window. Professional teams use tools like pt-online-schema-change or gh-ost for big tables; this chapter teaches the core commands those tools wrap.

### 4. Making Scripts Re-Runnable (IF EXISTS / IF NOT EXISTS)

A script that errors on second run is a bug. Using `IF NOT EXISTS` on CREATE and `IF EXISTS` on DROP makes scripts idempotent — safe to run any number of times. This is basic hygiene every backend engineer is expected to know.

## Detailed Explanation

### 1. CREATE TABLE — Full Syntax

A CREATE TABLE statement has three parts:

1. Column definitions (name + type + per-column constraints)
2. Table-level constraints (composite PRIMARY KEY, FOREIGN KEY, multi-column UNIQUE)
3. Table options (ENGINE, CHARSET, COMMENT)

```
CREATE TABLE employees (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    department VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL CHECK (salary > 0),
    manager_id INT,
    hire_date DATE NOT NULL DEFAULT (CURRENT_DATE),
    FOREIGN KEY (manager_id) REFERENCES employees(emp_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

**IF NOT EXISTS** makes the statement idempotent:

```
CREATE TABLE IF NOT EXISTS employees (...);
```

If the table already exists, CREATE becomes a no-op (with a warning) instead of an error. Always use this in seed scripts.

### 2. ALTER TABLE — The Swiss Army Knife

#### Add a Column

```
ALTER TABLE employees ADD COLUMN phone VARCHAR(15);
-- Or specify where
ALTER TABLE employees ADD COLUMN phone VARCHAR(15) AFTER name;
ALTER TABLE employees ADD COLUMN phone VARCHAR(15) FIRST;
```

#### Drop a Column

```
ALTER TABLE employees DROP COLUMN phone;
```

**Warning:** the column and all its data are gone. No undo without backup.

#### Modify a Column (Type or Default, Keep Name)

```
ALTER TABLE employees MODIFY COLUMN salary DECIMAL(12, 2);
ALTER TABLE employees MODIFY COLUMN name VARCHAR(100) NOT NULL;
```

`MODIFY` is a MySQL-ism. The portable alternative is `ALTER COLUMN ... TYPE ...` in standard SQL.

#### Rename a Column (MySQL 8.0+)

```
ALTER TABLE employees RENAME COLUMN department TO dept;

-- Older MySQL (5.7) requires CHANGE with the new type repeated:
ALTER TABLE employees CHANGE COLUMN department dept VARCHAR(30) NOT NULL;
```

#### Rename the Table

```
ALTER TABLE employees RENAME TO staff;

-- Or the dedicated command:
RENAME TABLE employees TO staff;
```

#### Add a Constraint

```
ALTER TABLE employees
    ADD CONSTRAINT uq_email UNIQUE (email);

ALTER TABLE employees
    ADD CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employees(emp_id);

ALTER TABLE employees
    ADD CONSTRAINT chk_salary CHECK (salary > 0);
```

#### Drop a Constraint

```
ALTER TABLE employees DROP FOREIGN KEY fk_manager;
ALTER TABLE employees DROP INDEX uq_email;         -- UNIQUE is an index
ALTER TABLE employees DROP CHECK chk_salary;
ALTER TABLE employees DROP PRIMARY KEY;
```

#### Multiple Changes in One Statement

```
ALTER TABLE employees
    ADD COLUMN joining_bonus DECIMAL(10,2) DEFAULT 0,
    DROP COLUMN phone,
    MODIFY COLUMN name VARCHAR(80) NOT NULL;
```

Running multiple changes together is faster than running them one at a time (fewer table rebuilds).

### 3. DROP TABLE vs TRUNCATE TABLE vs DELETE FROM

This comparison is the single most-asked DDL interview question.

DROP TABLETRUNCATE TABLEDELETE FROMCategoryDDLDDLDMLWhat it removesTable + data + structureAll rows, keeps structureMatching rows (WHERE) or allWHERE clauseNoNoYesSpeedFast (metadata op)Fast (recreates table)Slow (row by row)Auto-commitYes (implicit commit)Yes (implicit commit)No (transactional)Rollback possible?NoNo (in most DBs)YesResets AUTO_INCREMENT?N/A (table gone)YesNoTriggers fire?NoNoYesFK blocks?Yes if referencedYes in InnoDBYes if ON DELETE RESTRICT

Mental model:

- **DELETE** is a surgeon — precise, transactional, slow. Use when you want to remove specific rows.
- **TRUNCATE** is a bulldozer — wipes everything fast, resets counters. Use when you want to empty a whole table quickly.
- **DROP** is dynamite — removes the entire table. Use when the table should not exist anymore.

### 4. CREATE TABLE AS SELECT (CTAS)

```
-- Copy both structure AND data
CREATE TABLE employees_backup AS SELECT * FROM employees;

-- Copy only matching rows
CREATE TABLE high_earners AS
SELECT * FROM employees WHERE salary > 80000;
```

CTAS is handy for quick backups or subset copies. **Caveat:** indexes, constraints, and AUTO_INCREMENT are NOT copied by default — only columns and data. To duplicate the full schema including indexes, use `CREATE TABLE new_tbl LIKE old_tbl;` followed by an INSERT.

### 5. TEMPORARY TABLE

```
CREATE TEMPORARY TABLE session_stats (
    user_id INT,
    clicks INT
);
```

A temporary table is visible only to the session that created it and is automatically dropped when the session disconnects. Perfect for intermediate results in long multi-step calculations or reports.

### 6. Defensive DDL: IF EXISTS / IF NOT EXISTS

```
DROP TABLE IF EXISTS employees;
CREATE TABLE IF NOT EXISTS employees (...);
DROP DATABASE IF EXISTS test_db;
CREATE DATABASE IF NOT EXISTS test_db;
```

Use these in every seed script. They turn "Table already exists" errors into harmless no-ops. This is standard practice in production migration systems.

## Code Examples

### A Complete CREATE TABLE with Constraints and Options

```sql
CREATE TABLE IF NOT EXISTS employees (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    department VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL CHECK (salary > 0),
    hire_date DATE NOT NULL DEFAULT (CURRENT_DATE)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO employees (name, email, department, salary) VALUES
    ('Kavya Nair',  'kavya@corp.in',  'HR',      60000.00),
    ('Arjun Mehta', 'arjun@corp.in',  'IT',      85000.00),
    ('Sneha Patel', 'sneha@corp.in',  'Finance', 72000.00),
    ('Rahul Joshi', 'rahul@corp.in',  'IT',      95000.00);

SELECT * FROM employees;
```

A realistic CREATE TABLE combining AUTO_INCREMENT PK, NOT NULL, UNIQUE, CHECK, DEFAULT (CURRENT_DATE), the InnoDB engine, and utf8mb4 charset (for full emoji/Unicode support). `IF NOT EXISTS` makes it safe to re-run.

**Output:**

```
Query OK, 0 rows affected (0.04 sec)
Query OK, 4 rows affected (0.01 sec)
Records: 4  Duplicates: 0  Warnings: 0

+--------+-------------+----------------+------------+----------+------------+
| emp_id | name        | email          | department | salary   | hire_date  |
+--------+-------------+----------------+------------+----------+------------+
|      1 | Kavya Nair  | kavya@corp.in  | HR         | 60000.00 | 2026-04-11 |
|      2 | Arjun Mehta | arjun@corp.in  | IT         | 85000.00 | 2026-04-11 |
|      3 | Sneha Patel | sneha@corp.in  | Finance    | 72000.00 | 2026-04-11 |
|      4 | Rahul Joshi | rahul@corp.in  | IT         | 95000.00 | 2026-04-11 |
+--------+-------------+----------------+------------+----------+------------+
```

### ALTER TABLE — Adding, Dropping, Modifying, Renaming Columns

```sql
-- Add a phone column after name
ALTER TABLE employees ADD COLUMN phone VARCHAR(15) AFTER name;

-- Later, widen the name column and make it required
ALTER TABLE employees MODIFY COLUMN name VARCHAR(80) NOT NULL;

-- Rename 'department' to 'dept' (MySQL 8.0+)
ALTER TABLE employees RENAME COLUMN department TO dept;

-- Drop the phone column we added earlier
ALTER TABLE employees DROP COLUMN phone;

DESCRIBE employees;
```

Four common alterations. ADD COLUMN ... AFTER places the new column at a specific position. MODIFY changes the type or constraints of an existing column. RENAME COLUMN (MySQL 8.0+) changes the name without touching the type. DROP COLUMN permanently removes a column — irreversible without a backup.

**Output:**

```
Query OK, 4 rows affected (0.07 sec)
Records: 4  Duplicates: 0  Warnings: 0
Query OK, 0 rows affected (0.05 sec)
Records: 0  Duplicates: 0  Warnings: 0
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0
Query OK, 0 rows affected (0.04 sec)
Records: 0  Duplicates: 0  Warnings: 0

+-----------+---------------+------+-----+---------+----------------+
| Field     | Type          | Null | Key | Default | Extra          |
+-----------+---------------+------+-----+---------+----------------+
| emp_id    | int           | NO   | PRI | NULL    | auto_increment |
| name      | varchar(80)   | NO   |     | NULL    |                |
| email     | varchar(100)  | NO   | UNI | NULL    |                |
| dept      | varchar(30)   | NO   |     | NULL    |                |
| salary    | decimal(10,2) | NO   |     | NULL    |                |
| hire_date | date          | NO   |     | NULL    |                |
+-----------+---------------+------+-----+---------+----------------+
```

### DELETE vs TRUNCATE vs DROP — Side-by-Side Demo

```sql
-- Setup: fresh employees with 4 rows (see earlier INSERT)
SELECT COUNT(*) FROM employees;  -- 4

-- DELETE: remove specific rows with WHERE
DELETE FROM employees WHERE dept = 'IT';
SELECT COUNT(*) FROM employees;  -- 2 (Arjun and Rahul gone)

-- TRUNCATE: wipe everything, reset AUTO_INCREMENT
TRUNCATE TABLE employees;
SELECT COUNT(*) FROM employees;  -- 0

-- Reinsert one row to see AUTO_INCREMENT reset
INSERT INTO employees (name, email, dept, salary)
VALUES ('Test', 'test@corp.in', 'HR', 50000);
SELECT emp_id FROM employees;  -- 1 (reset to 1, not 5)

-- DROP: remove the table entirely
DROP TABLE employees;
SELECT * FROM employees;  -- ERROR: Table doesn't exist
```

Three demolition tools ordered from precise to nuclear. DELETE removes matching rows and is transactional. TRUNCATE wipes everything and resets AUTO_INCREMENT to 1. DROP removes the table itself so any subsequent query errors with "table doesn't exist". Interviewers love this exact example.

**Output:**

```
+----------+
| COUNT(*) |
+----------+
|        4 |
+----------+

Query OK, 2 rows affected (0.01 sec)
+----------+
| COUNT(*) |
+----------+
|        2 |
+----------+

Query OK, 0 rows affected (0.03 sec)
+----------+
| COUNT(*) |
+----------+
|        0 |
+----------+

Query OK, 1 row affected (0.01 sec)
+--------+
| emp_id |
+--------+
|      1 |
+--------+

Query OK, 0 rows affected (0.02 sec)
ERROR 1146 (42S02): Table 'hr.employees' doesn't exist
```

### CREATE TABLE AS SELECT (Backup)

```sql
-- Assume employees has been re-created with the original 4 rows.
DROP TABLE IF EXISTS employees_backup;

-- Quick full backup
CREATE TABLE employees_backup AS
SELECT * FROM employees;

-- Partial backup — just IT employees
DROP TABLE IF EXISTS employees_it;
CREATE TABLE employees_it AS
SELECT emp_id, name, salary
FROM employees
WHERE dept = 'IT';

SELECT * FROM employees_it;
```

CTAS (Create Table As Select) is a quick way to make a backup or a filtered subset. The new table inherits the column names and types from the SELECT's result, but NOT the indexes, primary keys, or AUTO_INCREMENT attributes — those must be added separately if needed.

**Output:**

```
Query OK, 4 rows affected (0.03 sec)
Records: 4  Duplicates: 0  Warnings: 0

Query OK, 2 rows affected (0.02 sec)
Records: 2  Duplicates: 0  Warnings: 0

+--------+-------------+----------+
| emp_id | name        | salary   |
+--------+-------------+----------+
|      2 | Arjun Mehta | 85000.00 |
|      4 | Rahul Joshi | 95000.00 |
+--------+-------------+----------+
```

### Adding and Dropping Constraints via ALTER

```sql
-- Start with a bare table (no constraints yet).
CREATE TABLE IF NOT EXISTS departments (
    dept_id INT,
    dept_name VARCHAR(50),
    budget DECIMAL(12,2)
);

-- Add a PRIMARY KEY
ALTER TABLE departments
    ADD CONSTRAINT pk_dept PRIMARY KEY (dept_id);

-- Add a UNIQUE
ALTER TABLE departments
    ADD CONSTRAINT uq_dept_name UNIQUE (dept_name);

-- Add a CHECK
ALTER TABLE departments
    ADD CONSTRAINT chk_budget CHECK (budget > 0);

DESCRIBE departments;

-- Later, drop the CHECK we added
ALTER TABLE departments DROP CHECK chk_budget;
```

You can add constraints to an existing table at any time via ALTER. Naming constraints (`pk_dept`, `uq_dept_name`, `chk_budget`) is a good habit — it makes them referenceable for DROP later. Unnamed constraints get auto-generated names like `departments_chk_1`.

**Output:**

```
Query OK, 0 rows affected (0.04 sec)
Query OK, 0 rows affected (0.05 sec)
Records: 0  Duplicates: 0  Warnings: 0
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

+-----------+---------------+------+-----+---------+-------+
| Field     | Type          | Null | Key | Default | Extra |
+-----------+---------------+------+-----+---------+-------+
| dept_id   | int           | NO   | PRI | NULL    |       |
| dept_name | varchar(50)   | YES  | UNI | NULL    |       |
| budget    | decimal(12,2) | YES  |     | NULL    |       |
+-----------+---------------+------+-----+---------+-------+

Query OK, 0 rows affected (0.01 sec)
```

### TEMPORARY TABLE — Session-Scoped Scratchpad

```sql
-- Create a temp table visible only to this session
CREATE TEMPORARY TABLE top_performers AS
SELECT emp_id, name, salary
FROM employees
WHERE salary > 80000;

-- Use it like any other table
SELECT * FROM top_performers;

SELECT COUNT(*) AS n FROM top_performers;

-- It disappears automatically when we DISCONNECT — no DROP needed.
-- If you log out and log back in: Table 'top_performers' doesn't exist.
```

Temporary tables are invaluable for breaking a complex report into smaller stages without polluting the main schema. They are invisible to other sessions and auto-drop on disconnect. You can also `DROP TEMPORARY TABLE` explicitly if you want to free the memory earlier.

**Output:**

```
Query OK, 2 rows affected (0.01 sec)
Records: 2  Duplicates: 0  Warnings: 0

+--------+-------------+----------+
| emp_id | name        | salary   |
+--------+-------------+----------+
|      2 | Arjun Mehta | 85000.00 |
|      4 | Rahul Joshi | 95000.00 |
+--------+-------------+----------+

+---+
| n |
+---+
| 2 |
+---+
```

## Common Mistakes

### Using DROP When You Meant TRUNCATE or DELETE

**Wrong:**

```
-- Goal: wipe all rows for a fresh load
DROP TABLE employees;
```

Table is GONE. Next SELECT errors with 'Table doesn't exist'. All downstream views and FKs break.

**Correct:**

```
-- If you want to keep the schema and wipe rows:
TRUNCATE TABLE employees;

-- If you want to wipe specific rows:
DELETE FROM employees WHERE dept = 'IT';
```

DROP removes the entire table — structure, indexes, constraints, everything. Truly destructive. TRUNCATE keeps the table and just empties it. DELETE with WHERE is precise. Confusing DROP with TRUNCATE is a classic late-night production incident. Always double-check which one you're typing.

### Forgetting the COLUMN Keyword in ALTER

**Wrong:**

```
-- MySQL is forgiving and often accepts this, but it's ambiguous:
ALTER TABLE employees ADD phone VARCHAR(15);
```

Works on MySQL, but may fail on other databases. Less explicit.

**Correct:**

```
ALTER TABLE employees ADD COLUMN phone VARCHAR(15);
ALTER TABLE employees DROP COLUMN phone;
ALTER TABLE employees MODIFY COLUMN name VARCHAR(80);
```

Standard SQL requires the word `COLUMN`. MySQL allows omitting it but it's a bad habit — your queries won't port to PostgreSQL, and reviewers may flag it. Be explicit: `ADD COLUMN`, `DROP COLUMN`, `MODIFY COLUMN`, `RENAME COLUMN`.

### Expecting CREATE TABLE AS SELECT to Copy Constraints

**Wrong:**

```
CREATE TABLE backup AS SELECT * FROM employees;
-- Assuming backup has the same PRIMARY KEY and AUTO_INCREMENT as employees
```

backup has NO primary key, no AUTO_INCREMENT, no indexes, no FKs — just columns and data.

**Correct:**

```
-- If you need structure too:
CREATE TABLE backup LIKE employees;   -- copies schema (constraints, indexes)
INSERT INTO backup SELECT * FROM employees;  -- then copy data
```

`CREATE TABLE AS SELECT` is quick but lossy — only columns and data come across. Use `CREATE TABLE new_name LIKE old_name` to clone the schema with all constraints and indexes, then `INSERT ... SELECT` to copy rows.

### Dropping a Table Referenced by a FOREIGN KEY

**Wrong:**

```
DROP TABLE employees;
-- But orders has FK to employees.
```

ERROR 3730 (HY000): Cannot drop table 'employees' referenced by a foreign key constraint 'fk_emp' on table 'orders'.

**Correct:**

```
-- Option 1: drop dependent tables first
DROP TABLE orders;
DROP TABLE employees;

-- Option 2: remove the FK first
ALTER TABLE orders DROP FOREIGN KEY fk_emp;
DROP TABLE employees;

-- Option 3 (nuclear): temporarily disable FK checks
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE employees;
SET FOREIGN_KEY_CHECKS = 1;
```

Foreign keys protect you from deleting parent data that children depend on. If the error appears, either drop the children first or remove the FK constraint. The `SET FOREIGN_KEY_CHECKS = 0` trick is common in dev but dangerous in production — it can leave orphan rows once you re-enable checks.

## Summary

- CREATE TABLE defines a new table with columns, data types, constraints, engine, and charset. Use IF NOT EXISTS for idempotent scripts.
- ALTER TABLE modifies structure: ADD COLUMN, DROP COLUMN, MODIFY COLUMN (change type/constraints), RENAME COLUMN, RENAME TABLE.
- Add multiple changes in one ALTER TABLE for speed: ALTER TABLE t ADD COLUMN a INT, DROP COLUMN b, MODIFY COLUMN c VARCHAR(80);
- Add constraints later with ALTER TABLE ADD CONSTRAINT name .... Drop them with DROP FOREIGN KEY / DROP INDEX / DROP CHECK / DROP PRIMARY KEY.
- DROP TABLE removes the table entirely. TRUNCATE TABLE removes all rows but keeps the table. DELETE FROM removes matching rows (uses WHERE).
- DROP and TRUNCATE are DDL (auto-commit, hard to roll back). DELETE is DML (transactional, can ROLLBACK).
- TRUNCATE resets AUTO_INCREMENT to 1; DELETE does not.
- CREATE TABLE AS SELECT copies columns and data but not indexes, PKs, or AUTO_INCREMENT. Use CREATE TABLE LIKE for a full schema clone.
- CREATE TEMPORARY TABLE makes a session-scoped table that auto-drops on disconnect. Perfect for intermediate staging in reports.
- Use IF EXISTS on DROP and IF NOT EXISTS on CREATE to make scripts safely re-runnable without manual cleanup.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/creating-and-modifying-tables/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/creating-and-modifying-tables/practice/*
