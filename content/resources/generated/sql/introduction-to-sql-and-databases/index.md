---
title: "Introduction to SQL and Databases - DBMS, SQL vs NoSQL, DDL DML DCL TCL | Modern Age Coders"
description: "Learn what databases are, how DBMS works, the difference between SQL and NoSQL, history of SQL (Codd 1970), popular databases like MySQL/PostgreSQL/Oracle, and the four categories of SQL commands (DDL, DML, DCL, TCL). Includes 56 practice questions and MCQs."
slug: introduction-to-sql-and-databases
canonical: https://learn.modernagecoders.com/resources/sql/introduction-to-sql-and-databases/
category: "SQL"
keywords: ["introduction to sql", "what is database", "what is dbms", "sql vs nosql", "ddl dml dcl tcl", "history of sql", "edgar codd", "mysql postgresql oracle", "sql commands", "sql for beginners college"]
---
# Introduction to SQL and Databases

**Difficulty:** Beginner  
**Reading time:** 20 min  
**Chapter:** 1  
**Practice questions:** 56

## What Is a Database?

A **database** is an organized collection of data, stored so that it can be quickly searched, updated, and analyzed. The keyword is *organized*. A WhatsApp chat backup as a giant text file is just data. The same chats stored in a structured format with columns for `sender`, `receiver`, `message`, and `timestamp` — that is a database.

Every app on your phone uses a database behind the scenes. When you open Instagram and see your feed, an SQL query is fetching posts from a database. When Paytm shows your last 10 transactions, that is a database query. When BookMyShow tells you Seat A12 is already booked, again a database query.

### What Is a DBMS?

A **DBMS (Database Management System)** is the software that manages a database. You don't talk to the database file directly — you talk to the DBMS, and the DBMS handles storage, indexing, concurrency, security, and crash recovery for you. Think of it like this: if a database is the books in a library, the DBMS is the librarian.

Popular DBMS software includes **MySQL**, **PostgreSQL**, **Oracle**, **Microsoft SQL Server**, and **SQLite**. Each is a separate piece of software, and most of them speak SQL with small variations.

### What Is SQL?

**SQL** stands for **Structured Query Language**. It is the standard language used to interact with relational databases. With SQL you can create tables, insert data, search through millions of rows, update records, delete them, and join multiple tables together. SQL is pronounced either as "S-Q-L" (each letter spoken) or as "sequel" — both are acceptable in industry.

SQL was invented in the early 1970s and is still the dominant query language more than 50 years later. Very few technologies survive that long. SQL did because the relational model it is built on (tables with rows and columns, related to each other by keys) turned out to be one of the most useful ideas in computing.

## Why SQL Still Dominates After 50+ Years

Most technologies become obsolete in 5 to 10 years. JavaScript frameworks come and go every two years. Yet SQL, a language designed in 1974, is on the most-asked-skill list for almost every developer, data analyst, and data scientist job in 2026. Here is why.

### 1. Almost Every Application Uses a Relational Database

Banking apps, e-commerce sites, hospital management systems, government portals like Aadhaar and IRCTC, college ERPs, hotel booking systems, food delivery apps — they all use relational databases for the parts of their data where consistency matters. If you are building anything that stores user accounts, orders, payments, or transactions, you will use SQL.

### 2. SQL Is the Common Language of Data

Whether the database is MySQL at a startup, PostgreSQL at a fintech, Oracle at a bank, or BigQuery at Google, the core SELECT/JOIN/GROUP BY syntax is almost identical. Learn SQL once, use it everywhere — including modern cloud data warehouses (Snowflake, Redshift, BigQuery) which all expose SQL interfaces.

### 3. Data Roles Demand SQL

Data analyst, data engineer, data scientist, business intelligence developer, backend developer — every one of these roles lists SQL in the first line of the job description. Companies like Flipkart, Amazon, Razorpay, Zomato, and Swiggy ask SQL questions in their first technical round, often before any other coding question.

### 4. SQL Survived Because the Relational Model Is Sound

SQL was built on the **relational model** proposed by Edgar F. Codd at IBM in 1970. The idea — represent data as tables with rows and columns, with relationships defined by shared keys — is mathematically elegant and matches how humans naturally think about structured information. NoSQL databases tried to replace SQL in the 2010s, but most teams ended up using both: SQL for the structured core, NoSQL for specific use cases.

## Detailed Explanation

### 1. Data, Tables, Rows, and Columns

In a relational database, data is stored in **tables**. A table has **columns** (also called fields or attributes) that define what kind of information is stored, and **rows** (also called records or tuples) that hold the actual data.

Here is a sample `students` table:

idnamecitymarks1Aarav SharmaMumbai872Priya IyerBengaluru923Rohan VermaDelhi784Ananya ReddyHyderabad955Vikram SinghPune65

This table has 4 columns (`id`, `name`, `city`, `marks`) and 5 rows. Each row is one student. Each column holds one type of information about every student. This rectangular shape — same set of columns for every row — is what makes it a *relational* table.

### 2. Primary Key (Quick Intro)

Notice the `id` column. Each student has a unique `id`. This unique identifier is called a **primary key**. Primary keys are how the database (and you) tell two rows apart, even if other fields look identical. Two different students could both be named "Aarav Sharma" living in Mumbai, but their `id` values will differ. We will go deep into primary keys in Chapter 3.

### 3. SQL vs NoSQL — When to Use What

**SQL databases** (also called relational databases) store data in tables with a fixed schema. Examples: MySQL, PostgreSQL, Oracle, SQL Server, SQLite. They are best when:

- Data has a clear structure that doesn't change often (users, orders, payments, inventory).
- You need ACID guarantees — transactions that either fully complete or fully roll back. Critical for banking and any money-related system.
- You need to JOIN data from multiple tables (e.g., "give me all orders by users in Mumbai").

**NoSQL databases** are a different family. They store data as documents (MongoDB), key-value pairs (Redis), wide columns (Cassandra), or graphs (Neo4j). They are best when:

- Data is unstructured or semi-structured (JSON documents, social media posts).
- You need horizontal scaling across many servers (massive Twitter-scale workloads).
- The schema changes often or differs per record.

In practice, most companies use BOTH. A typical e-commerce stack might use PostgreSQL for orders and payments, MongoDB for product catalogs, and Redis for caching session data.

### 4. Popular Databases (and Where They Are Used)

DatabaseTypeCostCommon UseMySQLOpen sourceFreeWeb apps, WordPress, mid-size SaaSPostgreSQLOpen sourceFreeModern startups, GIS, complex queriesSQLiteOpen sourceFreeMobile apps (Android/iOS), embeddedSQL ServerMicrosoftPaid (free dev edition)Enterprise .NET shops, Windows ecosystemsOracleOraclePaid (expensive)Large banks, government, telecom

For learning, we recommend MySQL — it is free, widely used in industry, has good Windows/Mac/Linux installers, and what you learn transfers easily to PostgreSQL, SQLite, and SQL Server.

### 5. A Brief History of SQL

In **1970**, Edgar F. Codd, a researcher at IBM, published a paper titled *"A Relational Model of Data for Large Shared Data Banks"*. This paper proposed organizing data as relations (tables) instead of the navigational hierarchies common at the time.

By **1974**, IBM researchers Donald Chamberlin and Raymond Boyce designed a query language called **SEQUEL** (Structured English Query Language) to work with the relational model. The name was later shortened to **SQL** due to a trademark conflict.

In **1979**, a small company called Relational Software (later renamed Oracle) released the first commercial SQL database, beating IBM to market by two years. Oracle still exists today as one of the largest database companies in the world.

SQL was standardized by **ANSI in 1986** and by **ISO in 1987**. Major revisions: SQL-92 (joins, subqueries), SQL:1999 (recursion, triggers), SQL:2003 (window functions, XML), SQL:2016 (JSON support). Most databases support a subset plus their own extensions.

### 6. The Four Categories of SQL Commands

SQL commands are grouped into four categories based on what they do. Memorizing this is interview gold.

#### DDL — Data Definition Language

Defines the *structure* of the database. Affects schema, not data values.

CommandPurpose`CREATE`Create a database, table, view, index, etc.`ALTER`Change structure (add/drop columns, rename)`DROP`Permanently delete a database or table`TRUNCATE`Delete all rows from a table (keeps structure)`RENAME`Rename a table or column

#### DML — Data Manipulation Language

Works with the *data* inside tables.

CommandPurpose`SELECT`Retrieve rows (technically called DQL by some books)`INSERT`Add new rows`UPDATE`Change existing rows`DELETE`Remove rows

#### DCL — Data Control Language

Controls who can do what — permissions and access rights.

CommandPurpose`GRANT`Give a user permission`REVOKE`Remove a permission

#### TCL — Transaction Control Language

Manages transactions — groups of statements that should succeed or fail together.

CommandPurpose`COMMIT`Save changes permanently`ROLLBACK`Undo changes since last COMMIT`SAVEPOINT`Set a marker to roll back to

Memory tip: **DDL = structure, DML = data, DCL = permissions, TCL = transactions.**

### 7. Case Sensitivity

SQL **keywords** (SELECT, FROM, WHERE) are not case-sensitive. `select`, `SELECT`, and `SeLeCt` all work. Convention is to write keywords in UPPERCASE so they stand out against table and column names.

Whether **table and column names** are case-sensitive depends on the database and the operating system. On MySQL on Linux, table names are case-sensitive (`Students` and `students` are different). On MySQL on Windows, they are not. Safe rule: pick lowercase_with_underscores naming and stick to it.

## Code Examples

### Looking at a Sample Table — students

```sql
-- This is the students table that we will use throughout this chapter.
-- The actual SQL to create and populate it comes in Chapter 2.

SELECT * FROM students;
```

This is the simplest possible SQL query. `SELECT *` means "give me every column", and `FROM students` means "from the students table". The semicolon at the end terminates the statement. We will write our first real CREATE TABLE and INSERT statements in Chapter 2 — for now, focus on understanding what the output looks like.

**Output:**

```
+----+----------------+-----------+-------+
| id | name           | city      | marks |
+----+----------------+-----------+-------+
|  1 | Aarav Sharma   | Mumbai    |    87 |
|  2 | Priya Iyer     | Bengaluru |    92 |
|  3 | Rohan Verma    | Delhi     |    78 |
|  4 | Ananya Reddy   | Hyderabad |    95 |
|  5 | Vikram Singh   | Pune      |    65 |
+----+----------------+-----------+-------+
5 rows in set (0.00 sec)
```

### DDL Example — Defining a Table Structure

```sql
-- DDL: CREATE defines the structure of a new table.
-- This says: I want a table called employees with three columns.

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(50),
    salary DECIMAL(10,2)
);

-- Notice: no data is inserted yet. This only creates an empty shell.
SELECT * FROM employees;
```

`CREATE TABLE` is a DDL command — it defines structure, not data. After this runs, the table exists but has zero rows. The `VARCHAR(50)` means a string up to 50 characters long; `DECIMAL(10,2)` means a number up to 10 digits with 2 after the decimal point (perfect for money). We cover all data types in detail in Chapter 3.

**Output:**

```
Query OK, 0 rows affected (0.04 sec)

Empty set (0.00 sec)
```

### DML Example — Adding and Reading Rows

```sql
-- DML: INSERT adds new rows into the employees table.
INSERT INTO employees VALUES (101, 'Kavya Nair', 75000.00);
INSERT INTO employees VALUES (102, 'Arjun Mehta', 92000.50);
INSERT INTO employees VALUES (103, 'Sneha Patel', 68000.00);

-- DML: SELECT reads the rows back.
SELECT * FROM employees;
```

`INSERT` and `SELECT` are DML commands — they manipulate data, not structure. We add three employees and then read them back. Notice the salaries keep their decimal precision because we declared the column as `DECIMAL(10,2)`.

**Output:**

```
+--------+-------------+----------+
| emp_id | name        | salary   |
+--------+-------------+----------+
|    101 | Kavya Nair  | 75000.00 |
|    102 | Arjun Mehta | 92000.50 |
|    103 | Sneha Patel | 68000.00 |
+--------+-------------+----------+
3 rows in set (0.00 sec)
```

### TCL Example — COMMIT and ROLLBACK

```sql
-- TCL: Transactions group multiple statements together.
START TRANSACTION;

UPDATE employees SET salary = salary + 5000 WHERE emp_id = 101;
UPDATE employees SET salary = salary + 5000 WHERE emp_id = 102;

-- Oops, we changed our mind. Undo everything since START TRANSACTION.
ROLLBACK;

SELECT * FROM employees;
```

Transactions let us group several statements into one all-or-nothing unit. Here, we tried giving Kavya and Arjun a 5000 raise, then changed our mind and rolled back. Their salaries are unchanged. If we had used `COMMIT` instead of `ROLLBACK`, the changes would have been saved permanently. We will explore this deeply in Chapter 23.

**Output:**

```
Query OK, 0 rows affected (0.00 sec)
Query OK, 1 row affected (0.01 sec)
Query OK, 1 row affected (0.00 sec)
Query OK, 0 rows affected (0.01 sec)

+--------+-------------+----------+
| emp_id | name        | salary   |
+--------+-------------+----------+
|    101 | Kavya Nair  | 75000.00 |
|    102 | Arjun Mehta | 92000.50 |
|    103 | Sneha Patel | 68000.00 |
+--------+-------------+----------+
3 rows in set (0.00 sec)
```

### DCL Example — Granting Permissions

```sql
-- DCL: GRANT gives a user permission to do something.
-- This says: user 'analyst_kavya' can SELECT from the employees table.

GRANT SELECT ON company.employees TO 'analyst_kavya'@'localhost';

-- Later, take that permission away.
REVOKE SELECT ON company.employees FROM 'analyst_kavya'@'localhost';
```

DCL commands control access. `GRANT SELECT` means the user can read but not modify the table. We could also grant `INSERT`, `UPDATE`, `DELETE`, or `ALL PRIVILEGES`. In real companies, DBAs (Database Administrators) decide who gets which permissions. As a beginner you mostly use the `root` user that has all permissions.

**Output:**

```
Query OK, 0 rows affected (0.02 sec)
Query OK, 0 rows affected (0.01 sec)
```

### Comparing Categories Side by Side

```sql
-- DDL: structure
CREATE TABLE products (id INT, name VARCHAR(50), price INT);
ALTER TABLE products ADD COLUMN stock INT;
DROP TABLE products;

-- DML: data
INSERT INTO students VALUES (6, 'Diya Kapoor', 'Chennai', 88);
UPDATE students SET marks = 90 WHERE id = 6;
DELETE FROM students WHERE id = 6;
SELECT name, marks FROM students;

-- DCL: permissions
GRANT INSERT ON school.students TO 'teacher_meera'@'%';
REVOKE INSERT ON school.students FROM 'teacher_meera'@'%';

-- TCL: transactions
START TRANSACTION;
UPDATE students SET marks = marks + 5 WHERE city = 'Mumbai';
COMMIT;
```

This shows one or two commands from each of the four categories so you can see the contrast. DDL shapes the database; DML shapes the data; DCL controls who can do these things; TCL controls when changes become permanent. Memorize this grouping — it is one of the most common SQL interview questions.

**Output:**

```
(Output varies — one OK line per statement.)
```

## Common Mistakes

### Confusing Database with DBMS

**Wrong:**

```
Statement: "MySQL is a database."
```

Technically incorrect, and interviewers will catch this.

**Correct:**

```
Statement: "MySQL is a Database Management System (DBMS). The database is the actual collection of data managed by MySQL."
```

MySQL, PostgreSQL, Oracle — these are **DBMS software**. The *database* is the actual data file (or set of files) that the DBMS manages. You can run one MySQL server that hosts 50 separate databases. In casual conversation people use the words interchangeably, but in interviews and exams the distinction matters.

### Thinking SQL and MySQL Are the Same Thing

**Wrong:**

```
Statement: "I know SQL because I learned MySQL."
```

Misleading. MySQL is one database; SQL is the language.

**Correct:**

```
Statement: "I know SQL, and I have practiced it on MySQL. The same SELECT/JOIN/GROUP BY queries also work on PostgreSQL, SQL Server, and SQLite with minor syntax differences."
```

**SQL** is the standardized query language. **MySQL** is one specific DBMS that speaks SQL (with some MySQL-only extras). Other databases (PostgreSQL, Oracle, SQL Server) also speak SQL. The core 80% of SQL is portable across all of them. Don't tie your skill to one product.

### Categorizing TRUNCATE as DML

**Wrong:**

```
Statement: "TRUNCATE is a DML command because it removes data."
```

Wrong category. TRUNCATE is DDL.

**Correct:**

```
Statement: "TRUNCATE is a DDL command. It drops and recreates the table internally, which is faster than DELETE but cannot be rolled back in most databases."
```

Even though TRUNCATE removes data, it works by dropping and recreating the table structure under the hood. That is a structural operation, so it is classified as DDL. DELETE, on the other hand, removes rows one at a time and is DML. This is a frequent interview trick question.

### Believing NoSQL Has Replaced SQL

**Wrong:**

```
Statement: "SQL is old. Modern apps use NoSQL like MongoDB."
```

Outdated industry assumption from around 2014.

**Correct:**

```
Statement: "SQL and NoSQL solve different problems. Most modern stacks use both — SQL for transactional, structured data; NoSQL for flexible documents, caching, or massive scale-out. SQL is still on virtually every backend job description."
```

Around 2012-2014 many companies tried to switch fully to NoSQL and many regretted it (data inconsistency, painful joins done in application code, no transactions). Today the consensus is "polyglot persistence" — pick the right tool for each piece of data. Companies like Amazon, Uber, and Airbnb run massive PostgreSQL and MySQL clusters in production.

## Summary

- A database is an organized collection of data. A DBMS is the software (like MySQL or PostgreSQL) that manages a database.
- SQL stands for Structured Query Language. It is the standard language for talking to relational databases and has dominated for over 50 years.
- Data in a relational database is stored in tables made of rows (records) and columns (fields). Each row should have a unique primary key.
- Popular databases: MySQL (free, web), PostgreSQL (free, modern), SQLite (mobile/embedded), SQL Server (Microsoft enterprise), Oracle (banks/large enterprise).
- SQL was born from Edgar F. Codd's 1970 relational model paper at IBM, formalized as SEQUEL in 1974, and standardized by ANSI in 1986.
- SQL vs NoSQL: SQL for structured data with transactions and joins; NoSQL for flexible documents, key-value caches, or massive horizontal scale.
- The four SQL categories: DDL (CREATE, ALTER, DROP, TRUNCATE) for structure; DML (SELECT, INSERT, UPDATE, DELETE) for data; DCL (GRANT, REVOKE) for permissions; TCL (COMMIT, ROLLBACK, SAVEPOINT) for transactions.
- TRUNCATE is DDL (not DML) because it drops and recreates the table internally, which is faster than DELETE but harder to undo.
- SQL keywords are case-insensitive (SELECT = select), but it is convention to write them in UPPERCASE for readability.
- Every backend, data analyst, and data science job description in 2026 lists SQL as a core skill — it is the most return-on-investment language a college student can learn.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/introduction-to-sql-and-databases/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/introduction-to-sql-and-databases/practice/*
