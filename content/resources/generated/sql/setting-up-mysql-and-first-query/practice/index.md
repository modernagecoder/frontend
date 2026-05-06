---
title: "Practice: Setting Up MySQL and Your First Query"
description: "54 practice problems for Setting Up MySQL and Your First Query in SQL"
slug: setting-up-mysql-and-first-query-practice
canonical: https://learn.modernagecoders.com/resources/sql/setting-up-mysql-and-first-query/practice/
category: "SQL"
---
# Practice: Setting Up MySQL and Your First Query

**Total questions:** 54

## Topic-Specific Questions

### Q1. [Easy] Write the SQL to create a database named `library`.

*Hint:* One statement. Starts with CREATE.

**Answer:** ```
CREATE DATABASE library;
```

`CREATE DATABASE` followed by the database name and a semicolon. MySQL will create an empty database. To then use it, run `USE library;`.

### Q2. [Easy] After creating the library database, how do you switch to it so your subsequent commands apply to it?

*Hint:* One keyword.

**Answer:** ```
USE library;
```

`USE dbname;` sets the "current" database. After this, `CREATE TABLE books (...)` creates the table inside library, not anywhere else.

### Q3. [Easy] Write the SQL to create a table called `books` with three columns: `book_id` (integer), `title` (string up to 100 characters), and `price` (integer).

*Hint:* CREATE TABLE with column-name and type pairs, separated by commas.

**Answer:** ```
CREATE TABLE books (
    book_id INT,
    title VARCHAR(100),
    price INT
);
```

Column definitions go inside parentheses, separated by commas. The whole statement ends with a semicolon. `VARCHAR(100)` means a variable-length string up to 100 characters.

### Q4. [Easy] Write a single INSERT statement that adds this book: book_id=1, title='Let Us C', price=350.

*Hint:* INSERT INTO ... VALUES (...).

**Answer:** ```
INSERT INTO books VALUES (1, 'Let Us C', 350);
```

Values must match the column order defined at CREATE TABLE time: book_id, title, price. Strings go inside single quotes. Numbers do not.

### Q5. [Easy] Write the SQL to retrieve all rows and columns from the books table.

*Hint:* SELECT star FROM table.

**Answer:** ```
SELECT * FROM books;
```

The `*` wildcard means "all columns". This is fine for quick inspection of small tables but avoided in production code in favor of naming specific columns.

### Q6. [Easy] How do you list all databases on a MySQL server?

*Hint:* SHOW.

**Answer:** ```
SHOW DATABASES;
```

Lists every database, including the built-in ones: `information_schema`, `mysql`, `performance_schema`, `sys`.

### Q7. [Easy] How do you list all tables inside the currently selected database?

*Hint:* SHOW, but different object.

**Answer:** ```
SHOW TABLES;
```

Works only after `USE dbname;`. If no database is selected, it errors with "No database selected".

### Q8. [Easy] How do you inspect the columns, data types, and nullability of the students table?

*Hint:* One word, starts with D.

**Answer:** ```
DESCRIBE students;

-- Short form:
DESC students;
```

`DESCRIBE` (or `DESC`) prints a neat table with Field, Type, Null, Key, Default, and Extra columns. Very useful when exploring unfamiliar tables.

### Q9. [Easy] What is the command-line syntax to connect to MySQL as the root user with password prompt?

*Hint:* mysql -u ... -p

**Answer:** ```
mysql -u root -p
```

`-u root` specifies the user. `-p` tells the client to prompt for the password securely (without showing it on screen). You could also type `-pMySecret` but that exposes the password in your shell history.

### Q10. [Easy] What port does MySQL listen on by default?

*Hint:* Four digits starting with 3.

**Answer:** **3306**.

Default MySQL port is 3306. PostgreSQL uses 5432, SQL Server uses 1433. You can change it in the MySQL config file (`my.cnf` or `my.ini`), but 3306 is the near-universal convention.

### Q11. [Easy] What happens in the CLI if you press Enter without typing a semicolon?

*Hint:* Look at the prompt.

**Answer:** MySQL shows a continuation prompt `->` because it is waiting for the statement to end. Just type `;` and press Enter.

This confuses beginners into thinking MySQL is frozen. It is not — it is waiting. You can span a single statement across many lines as long as you close it with a semicolon.

### Q12. [Medium] Write the SQL to insert three books in a single statement: (1, 'Let Us C', 350), (2, 'DBMS Concepts', 600), (3, 'Head First Java', 500).

*Hint:* INSERT INTO ... VALUES (...), (...), (...);

**Answer:** ```
INSERT INTO books VALUES
    (1, 'Let Us C', 350),
    (2, 'DBMS Concepts', 600),
    (3, 'Head First Java', 500);
```

A multi-row insert uses one VALUES clause with each row's tuple separated by commas. Faster than three individual INSERTs because of fewer network round-trips.

### Q13. [Medium] Write the SQL to select only the `title` and `price` columns from books.

*Hint:* SELECT col1, col2 FROM table.

**Answer:** ```
SELECT title, price FROM books;
```

Listing explicit columns is better than `SELECT *` for two reasons: reduced network traffic and stable query shape if someone later adds a new column.

### Q14. [Medium] You want to insert a book with only `book_id` and `title`, leaving `price` unset. Write the SQL.

*Hint:* Name the columns you are inserting into.

**Answer:** ```
INSERT INTO books (book_id, title) VALUES (4, 'Clean Code');
```

By specifying the column list, you tell MySQL which columns you are providing. Columns not mentioned get their DEFAULT value (NULL if no default is set).

### Q15. [Medium] What are the TWO ways to write a single-line comment in MySQL?

*Hint:* One is portable, one is MySQL-specific.

**Answer:** ```
-- This is portable (works on all databases)
# This is MySQL-specific
```

Always prefer `--` because it works across MySQL, PostgreSQL, SQL Server, Oracle, and SQLite. Remember the space after `--` is required by the SQL standard.

### Q16. [Medium] Write a multi-line comment (block comment) above a CREATE TABLE statement that documents when and why it was created.

*Hint:* /* ... */

**Answer:** ```
/*
   Created: 2026-04-11
   Purpose: student records for the Modern Age Coders course.
*/
CREATE TABLE students (
    id INT,
    name VARCHAR(50)
);
```

Multi-line comments are delimited by `/*` and `*/`. Good for headers, explanatory blocks, or temporarily commenting out a big query.

### Q17. [Medium] How do you check which database you are currently inside?

*Hint:* A built-in function.

**Answer:** ```
SELECT DATABASE();
```

`DATABASE()` is a MySQL built-in that returns the current default database, or NULL if none is selected. Very helpful when moving between several databases in a session.

### Q18. [Medium] Write SQL that creates the database `school` only if it does not already exist.

*Hint:* IF NOT EXISTS.

**Answer:** ```
CREATE DATABASE IF NOT EXISTS school;
```

`IF NOT EXISTS` prevents the error *"Can't create database 'school'; database exists"*. This makes scripts re-runnable without manual cleanup between runs.

### Q19. [Hard] Write a complete script that: (1) creates the school database if missing, (2) uses it, (3) drops the students table if it exists, (4) creates students with id, name, class, marks, (5) inserts five students of your choice, (6) selects all.

*Hint:* Chain six statements, comment each one.

**Answer:** ```
-- 1. Create DB
CREATE DATABASE IF NOT EXISTS school;
-- 2. Use it
USE school;
-- 3. Clean slate
DROP TABLE IF EXISTS students;
-- 4. Schema
CREATE TABLE students (
    id INT,
    name VARCHAR(50),
    class INT,
    marks INT
);
-- 5. Seed data
INSERT INTO students VALUES
    (1, 'Aarav Sharma', 10, 87),
    (2, 'Priya Iyer', 10, 92),
    (3, 'Rohan Verma', 11, 78),
    (4, 'Ananya Reddy', 11, 95),
    (5, 'Vikram Singh', 12, 65);
-- 6. Verify
SELECT * FROM students;
```

This mirrors the real "database seed script" pattern used by most web frameworks (Django, Rails, Laravel). `IF NOT EXISTS` / `IF EXISTS` make the script safely re-runnable. The final SELECT is a sanity check that the data looks right.

### Q20. [Hard] What is the difference between MySQL Workbench and the MySQL CLI, and when would you use each?

*Hint:* GUI vs terminal tradeoffs.

**Answer:** **Workbench** is a GUI with visual query editor, result grid, schema browser, and EER diagram tool — great for exploration and learning. **CLI** is a terminal client — faster for experienced users, the only option on servers without a desktop, and essential when writing shell scripts or SSH'ing into a remote server.

Real work uses both. Workbench for ad-hoc exploration and visual table design; CLI for scripting, server administration, and quick queries during a debugging session on a production box.

## Mixed Questions

### Q1. [Easy] You just connected to MySQL. What does this return?

```
SELECT DATABASE();
```

*Hint:* No USE has been run yet.

**Answer:** ```
+------------+
| DATABASE() |
+------------+
| NULL       |
+------------+
```

Right after connecting, no database is selected. `DATABASE()` returns NULL until you run `USE school;` or similar.

### Q2. [Easy] Convert this into a proper multi-row INSERT: three employees named Kavya Nair (id 101, HR, 60000), Arjun Mehta (id 102, IT, 85000), and Sneha Patel (id 103, Finance, 72000) into a table `employees(emp_id, name, department, salary)`.

*Hint:* INSERT ... VALUES (...), (...), (...);

**Answer:** ```
INSERT INTO employees VALUES
    (101, 'Kavya Nair',  'HR',      60000),
    (102, 'Arjun Mehta', 'IT',      85000),
    (103, 'Sneha Patel', 'Finance', 72000);
```

Standard multi-row INSERT form. Aligned spacing is cosmetic — but it makes the script dramatically easier to read in code review.

### Q3. [Easy] Find the error:

```
CREATE TABLE orders (
    order_id INT
    customer VARCHAR(50)
)
```

*Hint:* Commas and semicolons.

**Answer:** Missing commas between columns AND missing semicolon at the end.

```
CREATE TABLE orders (
    order_id INT,
    customer VARCHAR(50)
);
```

Two errors: (1) no comma separating `order_id INT` from `customer VARCHAR(50)`; (2) no terminating semicolon. Both produce syntax errors. A helpful rule: every column in a CREATE TABLE needs a comma after it except the last one.

### Q4. [Medium] Why does this INSERT fail, and how do you fix it?

```
INSERT INTO students VALUES (6, "Diya Kapoor", 10, 88);
```

*Hint:* Look at the quotes.

**Answer:** In MySQL with ANSI_QUOTES mode, double quotes are treated as identifiers, not strings. It may fail or behave unexpectedly. Use single quotes.

```
INSERT INTO students VALUES (6, 'Diya Kapoor', 10, 88);
```

Single quotes for strings is the SQL standard. MySQL's default mode allows double quotes, but it is fragile — if the server has ANSI_QUOTES enabled (common in enterprise) the statement breaks. Always use single quotes.

### Q5. [Medium] Given the students table with 5 rows from the chapter, what does `SELECT COUNT(*) FROM students;` return?

*Hint:* Count the rows.

**Answer:** ```
+----------+
| COUNT(*) |
+----------+
|        5 |
+----------+
```

`COUNT(*)` returns the number of rows. Since the table has Aarav, Priya, Rohan, Ananya, and Vikram — 5 students — the result is 5. We cover COUNT in depth in Chapter 9.

### Q6. [Medium] You notice your MySQL CLI shows `mysql>` as the prompt, but then suddenly it changes to `->`. What does this indicate?

*Hint:* Related to statement completion.

**Answer:** MySQL is waiting for you to finish the current statement. You probably pressed Enter before typing a `;`. Just type `;` and press Enter to complete it.

This is the #1 confusion for beginners. The server is not hung — it is simply waiting for a terminator. You can span many lines; MySQL only runs when it sees the semicolon.

### Q7. [Medium] Write a script that creates a database `ecommerce`, switches to it, and creates a `products` table with columns `product_id` (INT), `product_name` (VARCHAR 80), and `mrp` (INT). Make it re-runnable.

*Hint:* IF NOT EXISTS and IF EXISTS.

**Answer:** ```
CREATE DATABASE IF NOT EXISTS ecommerce;
USE ecommerce;
DROP TABLE IF EXISTS products;
CREATE TABLE products (
    product_id INT,
    product_name VARCHAR(80),
    mrp INT
);
```

`IF NOT EXISTS` on CREATE avoids errors if the DB exists. `DROP TABLE IF EXISTS` resets the products table every run so there are no stale rows. This is the re-runnable pattern used in real seed scripts.

### Q8. [Hard] You run:

```
USE school;
SELECT * FROM orders;
```

It errors with "Table 'school.orders' doesn't exist". What are two possible causes?

*Hint:* Either the table is missing, or it lives in another database.

**Answer:** (1) The orders table has not been created in school. (2) It exists, but in a different database (e.g., ecommerce) — you can query it with `SELECT * FROM ecommerce.orders;`.

SQL errors are usually quite literal — "`school.orders` doesn't exist" means MySQL looked for an `orders` table inside `school` and couldn't find it. Check `SHOW TABLES;` inside school, and `SHOW DATABASES;` to find where orders actually lives.

### Q9. [Hard] What does this return?

```
DESCRIBE students;
```

(students has columns id INT, name VARCHAR(50), class INT, marks INT — all nullable, no keys.)

*Hint:* A 4-row schema listing.

**Answer:** ```
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int         | YES  |     | NULL    |       |
| name  | varchar(50) | YES  |     | NULL    |       |
| class | int         | YES  |     | NULL    |       |
| marks | int         | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
```

`DESCRIBE` prints six metadata columns: Field, Type, Null (whether NULL is allowed), Key (PRI/UNI/MUL), Default, and Extra (e.g., auto_increment). Since we have no constraints yet, all columns are nullable with no keys and NULL defaults.

### Q10. [Hard] A junior in your team wrote: `SELECT * FROM school.students;`. The senior says "never use SELECT *". Rewrite it to return only the name and marks columns, and explain why the senior prefers that.

*Hint:* List columns explicitly.

**Answer:** ```
SELECT name, marks FROM school.students;
```

Reasons: (1) less data over the network when tables have many columns; (2) query result shape is stable even when new columns are added later; (3) intent is explicit to the next reader.

This is a well-known rule in code reviews at Amazon, Google, and most serious shops. `SELECT *` is fine in the CLI while exploring; it is considered lazy in production code.

### Q11. [Hard] Your script creates a database and a table, but the second time you run it, you get errors about "database already exists" and "table already exists". How do you fix the script without manually cleaning up?

*Hint:* Two keywords.

**Answer:** Add `IF NOT EXISTS` to CREATE DATABASE and CREATE TABLE, or alternatively `DROP IF EXISTS` before each CREATE.

```
CREATE DATABASE IF NOT EXISTS school;
USE school;
DROP TABLE IF EXISTS students;
CREATE TABLE students (...);
```

`IF NOT EXISTS` on CREATE silently skips creation if the object already exists (good if you want to keep old data). `DROP IF EXISTS` + `CREATE` gives you a fresh empty table every run (good for seed/test scripts). Choose based on whether you want to preserve data.

### Q12. [Hard] Rewrite this to use a single multi-row INSERT:

```
INSERT INTO students VALUES (1, 'Aarav', 10, 87);
INSERT INTO students VALUES (2, 'Priya', 10, 92);
INSERT INTO students VALUES (3, 'Rohan', 11, 78);
```

*Hint:* One INSERT with comma-separated VALUES tuples.

**Answer:** ```
INSERT INTO students VALUES
    (1, 'Aarav', 10, 87),
    (2, 'Priya', 10, 92),
    (3, 'Rohan', 11, 78);
```

Multi-row INSERT has three advantages: fewer network round-trips, atomic as a single statement (all three or none if wrapped in a transaction), and more readable for human reviewers.

## Multiple Choice Questions

### Q1. [Easy] What is the default port for MySQL?

**B is correct.** MySQL defaults to port 3306. SQL Server uses 1433, PostgreSQL uses 5432, and 8080 is a common HTTP port.

### Q2. [Easy] Which command lists all databases on a MySQL server?

**B is correct.** `SHOW DATABASES;` is the MySQL command. The other options are not valid SQL.

### Q3. [Easy] Which command sets the current active database to `school`?

**C is correct.** `USE dbname;` selects a database for the session. The others are not valid MySQL commands.

### Q4. [Easy] Which command shows the structure (columns, types) of a table?

**B is correct.** `DESCRIBE students;` (or its shortcut `DESC students;`) prints the schema. `SHOW students;` is not valid — you use `SHOW TABLES;` to list tables.

### Q5. [Easy] What character terminates an SQL statement in the MySQL CLI?

**C is correct.** Every SQL statement ends with a semicolon. A newline alone doesn't terminate — MySQL waits for the `;` before executing.

### Q6. [Easy] Which of the following is a valid single-line SQL comment?

**B is correct.** `-- ` (two dashes and a space) starts a portable SQL comment. `//` is C/Java comment syntax. `<!-- -->` is HTML. `**` is not a valid comment.

### Q7. [Easy] You connect to MySQL and type `mysql> SELECT * FROM students` then press Enter without a semicolon. What happens?

**C is correct.** The CLI displays `->` and waits for you to finish with a semicolon. Type `;` on the next line to execute.

### Q8. [Medium] Which INSERT statement is valid for a students table with columns (id INT, name VARCHAR(50), marks INT)?

**B is correct.** Standard SQL uses single quotes for strings. `INSERT INTO table VALUES (...)` is the correct keyword order. Option A uses double quotes (works on MySQL but not portable). Options C and D have wrong syntax.

### Q9. [Medium] You run `SELECT DATABASE();` right after logging in (without any USE). What do you see?

**C is correct.** Without a USE statement, no database is active, so `DATABASE()` returns NULL. It is not an error — you still get a result, just NULL.

### Q10. [Medium] Which statement creates a table ONLY if it does not already exist?

**C is correct.** The `IF NOT EXISTS` clause goes after TABLE and before the table name. Makes scripts re-runnable. `CREATE OR REPLACE TABLE` exists in some databases (like MariaDB) but not standard MySQL.

### Q11. [Medium] A senior developer tells you "avoid SELECT *". Which is NOT a reason for this advice?

**B is correct (it is NOT a valid reason).** On small tables `SELECT *` is not noticeably slower. The real reasons are A, C, and D. On large tables the network cost matters; on small ones, readability and stability matter more.

### Q12. [Medium] In the CLI, which keyboard sequence ends the session and returns to your OS shell?

**D is correct.** `exit;`, `quit;`, and the shortcut `\q` all disconnect from the MySQL server and return you to your terminal prompt.

### Q13. [Medium] Which statement about VARCHAR(50) is TRUE?

**B is correct.** VARCHAR is variable-length: "Ram" takes 3 bytes plus 1-2 bytes of length prefix, not 50. CHAR(50) would pad to exactly 50. VARCHAR can store any UTF-8 character if the column's charset supports it.

### Q14. [Medium] A friend writes `INSERT INTO students VALUES (1, 'Aarav');` for a students table with 4 columns. What happens?

**C is correct.** Without naming columns, MySQL expects values for ALL columns in declared order. To insert just some columns, you must list them: `INSERT INTO students (id, name) VALUES (1, 'Aarav');`.

### Q15. [Hard] Given a clean school database, what does this sequence produce?

```
CREATE TABLE t (x INT);
INSERT INTO t VALUES (10);
DROP TABLE t;
CREATE TABLE t (x INT);
SELECT * FROM t;
```

**B is correct.** The DROP deletes both the structure and the data. The second CREATE makes a fresh empty table. SELECT returns Empty set.

### Q16. [Hard] Which command would you use at a shared hosting server where only a CLI is available, to import a large .sql dump file?

**A is correct.** `SOURCE /path/to/dump.sql;` (or its shortcut `\. /path/to/dump.sql`) runs every statement in the file. Alternatively, from the OS shell: `mysql -u root -p dbname < dump.sql`. There is no IMPORT or LOAD dump.sql command.

### Q17. [Hard] You type `INSERT INTO students VALUES (1, "Aarav", 10, 87);` on a MySQL server with ANSI_QUOTES SQL mode enabled. What happens?

**B is correct.** With ANSI_QUOTES on, double quotes delimit IDENTIFIERS (column/table names), not strings. MySQL would treat "Aarav" as a column name and complain that such a column doesn't exist. Always use single quotes for string literals.

### Q18. [Hard] What is the main reason to prefer a multi-row INSERT over multiple single-row INSERTs?

**B is correct.** Each individual INSERT is a separate round-trip (client → server → ack). A multi-row INSERT combines them into one request, dramatically reducing network overhead. For 1000 rows this can be 10x-100x faster.

### Q19. [Easy] Which install command works for MySQL on Ubuntu?

**C is correct.** On Ubuntu/Debian the package is `mysql-server`, installed via apt with sudo. Option A is Homebrew (Mac). Option D is Chocolatey (Windows). Option B is close but misses sudo and the correct package name.

### Q20. [Hard] You run `mysql -u root -p school < seed.sql`. What happens?

**C is correct.** The `<` shell redirection pipes seed.sql as stdin to the mysql client, and the `school` argument sets the default database. Every statement in the file is executed. To export, you would use `mysqldump`, not `mysql`.

## Coding Challenges

### Challenge 1. First Complete Setup

**Difficulty:** Easy

Write a complete SQL script that: 1) creates a database called `college`, 2) uses it, 3) creates a table `courses` with columns course_id (INT), course_name (VARCHAR 60), duration_months (INT), and 4) inserts three courses of your choice.

**Constraints:**

- Use IF NOT EXISTS for safety. Use a single multi-row INSERT.

**Sample input:**

```
(No input)
```

**Sample output:**

```
Database created, table created, 3 rows inserted, SELECT * returns 3 courses.
```

**Solution:**

```sql
CREATE DATABASE IF NOT EXISTS college;
USE college;

DROP TABLE IF EXISTS courses;

CREATE TABLE courses (
    course_id INT,
    course_name VARCHAR(60),
    duration_months INT
);

INSERT INTO courses VALUES
    (1, 'Python Fundamentals',    4),
    (2, 'MySQL Masterclass',      3),
    (3, 'Full Stack Web Dev',     6);

SELECT * FROM courses;
-- Expected output:
-- +-----------+---------------------+-----------------+
-- | course_id | course_name         | duration_months |
-- +-----------+---------------------+-----------------+
-- |         1 | Python Fundamentals |               4 |
-- |         2 | MySQL Masterclass   |               3 |
-- |         3 | Full Stack Web Dev  |               6 |
-- +-----------+---------------------+-----------------+
```

### Challenge 2. Students Marksheet

**Difficulty:** Easy

Create a database `school`, a table `students(id INT, name VARCHAR(50), class INT, marks INT)`, insert five students (Aarav, Priya, Rohan, Ananya, Vikram) with realistic data, and then print only their names and marks.

**Constraints:**

- Use explicit column list in the final SELECT.

**Sample input:**

```
(No input)
```

**Sample output:**

```
Result set with 5 rows showing only name and marks.
```

**Solution:**

```sql
CREATE DATABASE IF NOT EXISTS school;
USE school;
DROP TABLE IF EXISTS students;

CREATE TABLE students (
    id INT,
    name VARCHAR(50),
    class INT,
    marks INT
);

INSERT INTO students VALUES
    (1, 'Aarav Sharma', 10, 87),
    (2, 'Priya Iyer',   10, 92),
    (3, 'Rohan Verma',  11, 78),
    (4, 'Ananya Reddy', 11, 95),
    (5, 'Vikram Singh', 12, 65);

SELECT name, marks FROM students;
-- Output:
-- +----------------+-------+
-- | name           | marks |
-- +----------------+-------+
-- | Aarav Sharma   |    87 |
-- | Priya Iyer     |    92 |
-- | Rohan Verma    |    78 |
-- | Ananya Reddy   |    95 |
-- | Vikram Singh   |    65 |
-- +----------------+-------+
```

### Challenge 3. Fix the Broken Script

**Difficulty:** Medium

Fix all the mistakes in this script so it runs cleanly:

```
create database store
USE store
create table products
    id INT
    name VARCHAR(50)
    price INT
)
insert into products values (1, "Pen", 10)
select * from products
```

**Constraints:**

- Add semicolons, add commas, fix quotes, add missing parenthesis.

**Sample input:**

```
(No input — the script above is the input)
```

**Sample output:**

```
Clean script that creates store, creates products, inserts one row, and selects it.
```

**Solution:**

```sql
CREATE DATABASE IF NOT EXISTS store;
USE store;

DROP TABLE IF EXISTS products;
CREATE TABLE products (
    id INT,
    name VARCHAR(50),
    price INT
);

INSERT INTO products VALUES (1, 'Pen', 10);

SELECT * FROM products;
-- Fixes made:
-- 1. Added semicolons at the end of each statement.
-- 2. Added commas between column definitions.
-- 3. Added the missing opening parenthesis after CREATE TABLE products.
-- 4. Replaced double quotes with single quotes around 'Pen'.
-- 5. (Good practice) Added IF NOT EXISTS / IF EXISTS for re-runnability.
-- 6. Uppercased keywords for readability.
```

### Challenge 4. Employee Directory

**Difficulty:** Medium

Create a `hr` database with an `employees` table (emp_id INT, name VARCHAR 50, department VARCHAR 30, salary INT). Insert six employees from different departments. Then write a SELECT that returns only name and salary.

**Constraints:**

- Use a single multi-row INSERT.

**Sample input:**

```
(No input)
```

**Sample output:**

```
A result set with 6 rows of name and salary.
```

**Solution:**

```sql
CREATE DATABASE IF NOT EXISTS hr;
USE hr;
DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
    emp_id INT,
    name VARCHAR(50),
    department VARCHAR(30),
    salary INT
);

INSERT INTO employees VALUES
    (101, 'Kavya Nair',    'HR',        60000),
    (102, 'Arjun Mehta',   'IT',        85000),
    (103, 'Sneha Patel',   'Finance',   72000),
    (104, 'Rahul Joshi',   'IT',        95000),
    (105, 'Meera Gupta',   'Marketing', 65000),
    (106, 'Ishaan Rao',    'Sales',     58000);

SELECT name, salary FROM employees;
-- Output:
-- +--------------+--------+
-- | name         | salary |
-- +--------------+--------+
-- | Kavya Nair   |  60000 |
-- | Arjun Mehta  |  85000 |
-- | Sneha Patel  |  72000 |
-- | Rahul Joshi  |  95000 |
-- | Meera Gupta  |  65000 |
-- | Ishaan Rao   |  58000 |
-- +--------------+--------+
```

### Challenge 5. Inspect an Unfamiliar Database

**Difficulty:** Medium

A senior hands you SSH access to a MySQL server and says "there's a database called ecommerce with some tables. Tell me what's in it." Write the sequence of SQL commands you would run to discover: which databases exist, what tables are in ecommerce, what columns each table has, and how many rows are in one specific table called orders.

**Constraints:**

- Use exploration commands, not guessing.

**Sample input:**

```
(No input)
```

**Sample output:**

```
A sequence of discovery commands with expected outputs.
```

**Solution:**

```sql
-- Step 1: Which databases exist?
SHOW DATABASES;

-- Step 2: Switch to the one we care about.
USE ecommerce;

-- Step 3: What tables are inside?
SHOW TABLES;

-- Step 4: For each table, see the structure.
DESCRIBE orders;
DESCRIBE customers;
DESCRIBE products;

-- Step 5: Count rows in a specific table.
SELECT COUNT(*) AS total_orders FROM orders;

-- Step 6: Peek at the first few rows.
SELECT * FROM orders LIMIT 5;

-- This sequence — SHOW DATABASES, USE, SHOW TABLES, DESCRIBE,
-- COUNT(*), LIMIT 5 — is the universal "orient yourself in a new DB" workflow.
```

### Challenge 6. Re-runnable Seed Script

**Difficulty:** Hard

Design a script for a `bookstore` database that can be run repeatedly without ever throwing an "already exists" error. It should reset a `books` table every run and insert 5 books of your choice (different titles, authors, prices). End with a verification SELECT.

**Constraints:**

- Use IF NOT EXISTS / IF EXISTS properly. Annotate each step with comments.

**Sample input:**

```
(No input)
```

**Sample output:**

```
Script runs cleanly on first execution AND on re-executions. Final SELECT returns 5 rows.
```

**Solution:**

```sql
/*
   Bookstore seed script.
   Purpose: reset the books table with a clean 5-row dataset.
   Safe to run multiple times — uses IF NOT EXISTS / IF EXISTS.
*/

-- 1. Create the database if missing.
CREATE DATABASE IF NOT EXISTS bookstore;

-- 2. Switch to it.
USE bookstore;

-- 3. Reset the books table for a clean slate.
DROP TABLE IF EXISTS books;

-- 4. Define the schema.
CREATE TABLE books (
    book_id INT,
    title VARCHAR(100),
    author VARCHAR(60),
    price INT
);

-- 5. Seed data.
INSERT INTO books VALUES
    (1, 'Let Us C',                   'Yashwant Kanetkar', 350),
    (2, 'DBMS Concepts',               'Henry F. Korth',    600),
    (3, 'Head First Java',             'Kathy Sierra',      500),
    (4, 'Clean Code',                  'Robert C. Martin',  450),
    (5, 'Python Crash Course',         'Eric Matthes',      550);

-- 6. Verify.
SELECT COUNT(*) AS total_books FROM books;
SELECT * FROM books;

-- Expected:
-- total_books = 5
-- 5 rows returned from SELECT *.
```

---

*Notes: https://learn.modernagecoders.com/resources/sql/setting-up-mysql-and-first-query/*
