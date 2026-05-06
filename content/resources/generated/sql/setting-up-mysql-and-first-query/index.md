---
title: "Install MySQL and Run Your First Query - Workbench, CLI, CREATE DATABASE, SELECT | Modern Age Coders"
description: "Install MySQL on Windows, Mac, or Ubuntu, connect via MySQL Workbench or command line, create your first database, create tables, insert rows, and run your first SELECT query. Covers SHOW DATABASES, DESCRIBE, comments, and the all-important semicolon. 54 practice questions."
slug: setting-up-mysql-and-first-query
canonical: https://learn.modernagecoders.com/resources/sql/setting-up-mysql-and-first-query
category: "SQL"
keywords: ["install mysql windows", "install mysql mac homebrew", "install mysql ubuntu", "mysql workbench tutorial", "mysql command line tutorial", "create database mysql", "first sql query", "mysql for beginners", "show databases mysql", "describe mysql table"]
---
# Setting Up MySQL and Your First Query

**Difficulty:** Beginner  
**Reading time:** 22 min  
**Chapter:** 2  
**Practice questions:** 54

## Getting MySQL Running on Your Machine

In Chapter 1 we said a lot of things *about* SQL. In this chapter we actually run our first query. By the end you will have MySQL installed, a database created, a table built from scratch, five students inserted, and a working `SELECT` statement returning real results.

There are two main ways to talk to a MySQL server:

- **MySQL Workbench** — a graphical tool (GUI) with a query editor, table browser, and visual schema designer. Best for beginners and for exploring data.
- **MySQL Command Line Client (CLI)** — a plain terminal where you type queries. Faster for professionals, essential on servers where no GUI is available.

You should get comfortable with BOTH. Most college labs and company servers only have the CLI available, but the GUI makes learning much more pleasant.

### What We Will Build

A tiny `school` database with a `students` table. We will store these five students:

idnameclassmarks1Aarav Sharma10872Priya Iyer10923Rohan Verma11784Ananya Reddy11955Vikram Singh1265

You will then query it in several ways and end with a clear mental model of the flow: *install → connect → create database → create table → insert data → select*.

## Why This Chapter Is Non-Negotiable

You cannot learn SQL by reading. You have to run queries, break them, fix them, and watch the output change. Tutorials that only talk theory produce students who freeze the moment an interviewer says "open a terminal and write a query".

### 1. Real Queries Beat Memorization

When you type `SELECT * FROM students;` and five rows come back, the concept of a SELECT statement clicks in a way no diagram can match. The muscle memory of typing the semicolon, hitting Enter, and reading the output table teaches patterns you will use for the next 40 years of your career.

### 2. Every Interviewer Expects Basic CLI Fluency

Even if your dream job is as a data analyst using Tableau, interviewers routinely ask things like "connect to a MySQL server, show me the databases, describe the orders table, and count the rows". Knowing `mysql -u root -p`, `SHOW DATABASES;`, `USE dbname;`, and `DESCRIBE tablename;` is base-level fluency.

### 3. This Is Your Playground for the Next 20 Chapters

From Chapter 3 onwards, every example assumes you have a working MySQL. Installing it once is a few minutes of effort that unlocks months of practice. Do not skip it and think "I'll run queries in an online sandbox". Online sandboxes reset every few hours, block certain commands, and do not teach you the real connect-disconnect-backup workflow.

## Detailed Explanation

### 1. Installing MySQL

#### Windows

Download the **MySQL Installer for Windows** from `dev.mysql.com/downloads/installer`. Choose the full (not web) installer. During setup:

1. Choose "Developer Default" setup type (installs Server, Workbench, Shell, and sample data).
2. Set the root password when prompted. **Write it down** — losing it means reinstalling.
3. Keep the default port `3306`.
4. Start MySQL as a Windows service so it runs automatically on boot.

#### macOS (Homebrew)

```
brew install mysql
brew services start mysql
mysql_secure_installation   # set root password
```

#### Ubuntu / Debian Linux

```
sudo apt update
sudo apt install mysql-server
sudo systemctl start mysql
sudo mysql_secure_installation
```

After installation, verify with `mysql --version`. You should see something like `mysql  Ver 8.0.35`.

### 2. Connecting to MySQL

#### From the Command Line

```
mysql -u root -p
```

The `-u root` says "connect as the root user", and `-p` says "prompt me for the password". You will then see a prompt that looks like:

```
mysql>
```

That is your SQL command prompt. Every query you type from now goes after that `mysql>`.

#### From MySQL Workbench

Open Workbench → click the **Local instance 3306** connection tile → enter the root password. You land on a window with a query editor at the top and a results panel at the bottom.

### 3. Your First Commands: SHOW and USE

`SHOW DATABASES;` lists all databases on the server.

`USE dbname;` selects a database to work with. After `USE`, every `SELECT`, `INSERT`, etc. applies to that database.

`SHOW TABLES;` lists the tables inside the currently selected database.

`DESCRIBE tablename;` (or `DESC tablename;`) shows the structure of a table — its columns, data types, and constraints.

### 4. Creating Your First Database

```
CREATE DATABASE school;
USE school;
```

Line 1 creates a new database called `school`. Line 2 tells MySQL "now every command I run is inside this school database". Without `USE`, you would have to prefix every table name with `school.` (e.g., `school.students`).

### 5. Creating Your First Table

```
CREATE TABLE students (
    id INT,
    name VARCHAR(50),
    class INT,
    marks INT
);
```

This creates the `students` table with four columns:

- `id INT` — a whole number, used as a unique identifier.
- `name VARCHAR(50)` — a variable-length string up to 50 characters.
- `class INT` — a whole number (10, 11, 12).
- `marks INT` — a whole number for marks out of 100.

The parentheses group the column definitions. The commas separate them. The semicolon ends the statement. We will expand this (primary keys, NOT NULL, AUTO_INCREMENT) in Chapter 3.

### 6. Inserting Sample Data

```
INSERT INTO students VALUES (1, 'Aarav Sharma', 10, 87);
INSERT INTO students VALUES (2, 'Priya Iyer', 10, 92);
INSERT INTO students VALUES (3, 'Rohan Verma', 11, 78);
INSERT INTO students VALUES (4, 'Ananya Reddy', 11, 95);
INSERT INTO students VALUES (5, 'Vikram Singh', 12, 65);
```

Each `INSERT INTO table VALUES (...)` statement adds one row. The values inside parentheses must be in the same order as the columns were declared. Strings go in single quotes. Numbers do not.

You can also do a multi-row insert in one statement:

```
INSERT INTO students VALUES
    (1, 'Aarav Sharma', 10, 87),
    (2, 'Priya Iyer', 10, 92),
    (3, 'Rohan Verma', 11, 78),
    (4, 'Ananya Reddy', 11, 95),
    (5, 'Vikram Singh', 12, 65);
```

Multi-row inserts are faster (one round-trip to the server) and produce cleaner code.

### 7. Your First SELECT

```
SELECT * FROM students;
```

The star means "all columns". This returns every row and every column. You should see a nicely formatted table with five students.

### 8. The Almighty Semicolon

Every SQL statement ends with a semicolon `;`. In the CLI, if you forget the semicolon and press Enter, MySQL will wait for you to finish — it shows `->` as a continuation prompt:

```
mysql> SELECT * FROM students
    -> ;
```

Just type the semicolon on the next line and press Enter. In Workbench, you can select a statement and press **Ctrl+Enter** to run just that one.

### 9. Comments in SQL

Comments are notes that the database ignores but humans can read.

```
-- This is a single-line comment (two dashes and a space)
# Also a single-line comment (MySQL-specific, less portable)
/*
   This is a multi-line comment.
   Useful for headers or
   explaining a block of code.
*/
```

Use `--` for one-liners (works in every database) and `/* ... */` for blocks. Good code has comments that explain WHY, not what the code literally does.

## Code Examples

### Checking What Databases Already Exist

```sql
-- Run this right after connecting to MySQL.
-- It lists every database on the server.
SHOW DATABASES;
```

Four default databases come with every MySQL install: `information_schema` (metadata about all tables), `mysql` (user accounts and privileges), `performance_schema` (runtime stats), and `sys` (DBA helpers). You should never delete these. The database you create will appear alongside them.

**Output:**

```
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.01 sec)
```

### Creating a Database and Switching to It

```sql
-- Create a brand new database for our school example.
CREATE DATABASE school;

-- Switch context so every command below runs inside school.
USE school;

-- Confirm we are inside school.
SELECT DATABASE();
```

`CREATE DATABASE` makes an empty database. `USE school;` sets the active database so we don't have to prefix table names. `SELECT DATABASE();` is a handy function that returns the currently selected database — useful when switching between several databases during a session.

**Output:**

```
Query OK, 1 row affected (0.02 sec)
Database changed
+------------+
| DATABASE() |
+------------+
| school     |
+------------+
1 row in set (0.00 sec)
```

### Creating the students Table

```sql
CREATE TABLE students (
    id INT,
    name VARCHAR(50),
    class INT,
    marks INT
);

-- Verify the table exists.
SHOW TABLES;

-- Inspect its structure.
DESCRIBE students;
```

`CREATE TABLE` defines the columns. `SHOW TABLES;` lists all tables in the current database. `DESCRIBE students;` (or `DESC students;`) prints the schema: column name, type, whether nulls are allowed, key info, default value, and extra flags.

**Output:**

```
Query OK, 0 rows affected (0.04 sec)

+------------------+
| Tables_in_school |
+------------------+
| students         |
+------------------+
1 row in set (0.00 sec)

+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int         | YES  |     | NULL    |       |
| name  | varchar(50) | YES  |     | NULL    |       |
| class | int         | YES  |     | NULL    |       |
| marks | int         | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
4 rows in set (0.01 sec)
```

### Inserting Five Students (Multi-Row INSERT)

```sql
-- Efficient single-statement insert of five rows.
INSERT INTO students VALUES
    (1, 'Aarav Sharma', 10, 87),
    (2, 'Priya Iyer', 10, 92),
    (3, 'Rohan Verma', 11, 78),
    (4, 'Ananya Reddy', 11, 95),
    (5, 'Vikram Singh', 12, 65);

SELECT * FROM students;
```

One `INSERT` with multiple `VALUES` rows is faster than five separate INSERTs because there is only one round-trip to the server. Notice the comma separators between rows and the semicolon at the end. Strings are wrapped in single quotes; numbers are not.

**Output:**

```
Query OK, 5 rows affected (0.01 sec)
Records: 5  Duplicates: 0  Warnings: 0

+----+----------------+-------+-------+
| id | name           | class | marks |
+----+----------------+-------+-------+
|  1 | Aarav Sharma   |    10 |    87 |
|  2 | Priya Iyer     |    10 |    92 |
|  3 | Rohan Verma    |    11 |    78 |
|  4 | Ananya Reddy   |    11 |    95 |
|  5 | Vikram Singh   |    12 |    65 |
+----+----------------+-------+-------+
5 rows in set (0.00 sec)
```

### SELECT with Specific Columns

```sql
-- Instead of SELECT *, pick only the columns you need.
SELECT name, marks FROM students;
```

In production code, `SELECT *` is considered lazy and sometimes slow. By naming only the columns you need (`name, marks`), you reduce network traffic and make your queries more robust — if someone adds a new column later, your query result shape doesn't silently change.

**Output:**

```
+----------------+-------+
| name           | marks |
+----------------+-------+
| Aarav Sharma   |    87 |
| Priya Iyer     |    92 |
| Rohan Verma    |    78 |
| Ananya Reddy   |    95 |
| Vikram Singh   |    65 |
+----------------+-------+
5 rows in set (0.00 sec)
```

### Using Comments to Document a Script

```sql
/*
   School database setup script.
   Author: Modern Age Coders
   Date:   2026-04-11
*/

-- Step 1: create the database if it doesn't exist.
CREATE DATABASE IF NOT EXISTS school;
USE school;

-- Step 2: drop any previous students table for a fresh start.
DROP TABLE IF EXISTS students;

-- Step 3: create the table.
CREATE TABLE students (
    id INT,
    name VARCHAR(50),
    class INT,
    marks INT
);

-- Step 4: insert seed data.
INSERT INTO students VALUES
    (1, 'Aarav Sharma', 10, 87),
    (2, 'Priya Iyer',   10, 92),
    (3, 'Rohan Verma',  11, 78),
    (4, 'Ananya Reddy', 11, 95),
    (5, 'Vikram Singh', 12, 65);

-- Step 5: confirm.
SELECT COUNT(*) AS total_students FROM students;
```

This is what a well-organized SQL script looks like in the real world. The multi-line comment at the top is the file header. Single-line comments explain each step. `IF NOT EXISTS` and `IF EXISTS` make the script safely re-runnable — you can execute it multiple times without errors. `SELECT COUNT(*)` at the end is a quick sanity check. This pattern is how real database migrations are written.

**Output:**

```
Query OK, 1 row affected, 1 warning (0.00 sec)
Database changed
Query OK, 0 rows affected, 1 warning (0.00 sec)
Query OK, 0 rows affected (0.03 sec)
Query OK, 5 rows affected (0.01 sec)
Records: 5  Duplicates: 0  Warnings: 0
+----------------+
| total_students |
+----------------+
|              5 |
+----------------+
1 row in set (0.00 sec)
```

## Common Mistakes

### Forgetting the Semicolon in the CLI

**Wrong:**

```
mysql> SELECT * FROM students
(press Enter — nothing happens, you see -> instead)
```

MySQL shows the continuation prompt -> because it is waiting for the statement to finish.

**Correct:**

```
mysql> SELECT * FROM students;
-- or on the next line:
mysql> SELECT * FROM students
    -> ;
```

The CLI considers a statement complete only when it sees a semicolon. Beginners often think the server is frozen when they see `->`. It is simply waiting. Type a `;` on the next line and press Enter. In Workbench this is less of an issue because you can highlight-and-run.

### Running Queries Without USE dbname

**Wrong:**

```
-- Right after logging in:
SELECT * FROM students;
```

ERROR 1046 (3D000): No database selected

**Correct:**

```
USE school;
SELECT * FROM students;

-- OR, fully qualify the table name:
SELECT * FROM school.students;
```

MySQL needs to know which database the table belongs to. Either run `USE school;` once to set the context, or prefix the table with the database name every time (`school.students`). The `USE` approach is more ergonomic during interactive work.

### Using Double Quotes Instead of Single Quotes for Strings

**Wrong:**

```
INSERT INTO students VALUES (6, "Diya Kapoor", 10, 88);
```

This may work in MySQL but fails on PostgreSQL, SQLite, and standard SQL.

**Correct:**

```
INSERT INTO students VALUES (6, 'Diya Kapoor', 10, 88);
```

In standard SQL, **single quotes are for string literals** and double quotes are for identifiers (table/column names with special characters). MySQL is lenient and allows both, but portable code always uses single quotes for strings. Save yourself future pain by starting with the correct habit.

### Mismatched Column Count in INSERT

**Wrong:**

```
-- students table has 4 columns, but we pass only 3:
INSERT INTO students VALUES (6, 'Diya Kapoor', 88);
```

ERROR 1136 (21S01): Column count doesn't match value count at row 1

**Correct:**

```
-- Option 1: provide all 4 values
INSERT INTO students VALUES (6, 'Diya Kapoor', 10, 88);

-- Option 2: specify which columns you are inserting into
INSERT INTO students (id, name, marks) VALUES (6, 'Diya Kapoor', 88);
```

When you use `INSERT INTO students VALUES (...)` without listing columns, MySQL expects values in the exact order and count of the columns defined. If you want to skip a column, explicitly list the columns you are inserting into. The skipped column becomes NULL (or takes its DEFAULT).

## Summary

- Install MySQL via the MySQL Installer on Windows, Homebrew on Mac (brew install mysql), or apt on Ubuntu (sudo apt install mysql-server).
- Connect to the server using the CLI with mysql -u root -p or by clicking the local instance tile in MySQL Workbench.
- SHOW DATABASES; lists all databases. USE dbname; switches to one. SHOW TABLES; lists tables. DESCRIBE tablename; shows a table's schema.
- CREATE DATABASE school; creates a new database. CREATE TABLE table (col TYPE, ...); creates a table with the given columns.
- INSERT INTO table VALUES (v1, v2, v3); adds one row. Multi-row inserts are faster: INSERT INTO table VALUES (...), (...), (...);
- SELECT * FROM table; retrieves all rows and columns. SELECT col1, col2 FROM table; picks specific columns and is considered better practice.
- Every SQL statement ends with a semicolon. In the CLI, a missing semicolon leaves you stuck at the -> continuation prompt.
- Comments: -- for one-line (portable), # for one-line (MySQL-specific), /* ... */ for multi-line blocks.
- Use single quotes for string literals: 'Aarav Sharma'. Double quotes are for identifiers in standard SQL.
- IF EXISTS and IF NOT EXISTS (on DROP and CREATE) make scripts safely re-runnable without throwing errors on the second run.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/setting-up-mysql-and-first-query/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/setting-up-mysql-and-first-query/practice/*
