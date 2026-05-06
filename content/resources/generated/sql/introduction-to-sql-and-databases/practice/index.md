---
title: "Practice: Introduction to SQL and Databases"
description: "56 practice problems for Introduction to SQL and Databases in SQL"
slug: introduction-to-sql-and-databases-practice
canonical: https://learn.modernagecoders.com/resources/sql/introduction-to-sql-and-databases/practice/
category: "SQL"
---
# Practice: Introduction to SQL and Databases

**Total questions:** 56

## Topic-Specific Questions

### Q1. [Easy] In the following students table, what is a row?

```
id | name         | city      | marks
1  | Aarav Sharma | Mumbai    | 87
2  | Priya Iyer   | Bengaluru | 92
```

*Hint:* A row is a horizontal entry — one complete record.

**Answer:** A row is one complete record. For example, `(1, 'Aarav Sharma', 'Mumbai', 87)` is a single row representing one student.

In a table, each **row** (also called a record or tuple) holds the data for one entity — here, one student. Each **column** holds one type of attribute about all entities. The table above has 2 rows and 4 columns.

### Q2. [Easy] What does SQL stand for?

*Hint:* Three words. The middle one starts with Q.

**Answer:** `Structured Query Language`

SQL stands for **Structured Query Language**. It was originally called SEQUEL (Structured English Query Language) when invented at IBM in 1974, and the name was shortened to SQL due to a trademark conflict.

### Q3. [Easy] Who proposed the relational model that SQL is built on, and in what year?

*Hint:* An IBM researcher in the early 1970s.

**Answer:** **Edgar F. Codd** proposed the relational model in **1970** through his paper *"A Relational Model of Data for Large Shared Data Banks"* at IBM.

Codd's paper is the foundation of every modern relational database. He later won the Turing Award in 1981 for this work. SEQUEL/SQL was designed at IBM by Chamberlin and Boyce in 1974 to implement Codd's ideas.

### Q4. [Easy] Name any four popular relational database management systems.

*Hint:* Two are free, two are commercial.

**Answer:** Common answers: `MySQL`, `PostgreSQL`, `SQLite`, `Microsoft SQL Server`, `Oracle Database`.

MySQL and PostgreSQL are free and open source. SQLite is free and embedded inside apps (every Android phone has SQLite). SQL Server is Microsoft's enterprise database. Oracle is widely used by banks and large corporations.

### Q5. [Easy] Which DBMS would you typically use inside a small mobile app, and why?

*Hint:* It needs to be embedded, file-based, and zero-configuration.

**Answer:** `SQLite`. It is a tiny, file-based, zero-configuration database that ships embedded in the app itself — no separate server needed.

SQLite stores the entire database in a single file on the device. It powers WhatsApp's chat history, Android contacts, iOS notes, and most mobile apps. It is the most-installed database in the world (every smartphone has it).

### Q6. [Easy] Classify each command into DDL, DML, DCL, or TCL: `CREATE`, `INSERT`, `GRANT`, `COMMIT`.

*Hint:* Structure, data, permissions, transactions.

**Answer:** `CREATE` = **DDL**, `INSERT` = **DML**, `GRANT` = **DCL**, `COMMIT` = **TCL**.

Memory aid: DDL changes structure (CREATE/ALTER/DROP), DML changes data (SELECT/INSERT/UPDATE/DELETE), DCL changes permissions (GRANT/REVOKE), TCL changes transaction state (COMMIT/ROLLBACK/SAVEPOINT).

### Q7. [Medium] Is `TRUNCATE` a DDL or DML command? Justify your answer.

*Hint:* Think about how it works under the hood, not just what it does to data.

**Answer:** `TRUNCATE` is a **DDL** command. Even though it removes data, internally it drops and recreates the table — a structural operation. This is also why it is faster than DELETE and (in most databases) cannot be rolled back.

DELETE works row by row through the transaction log, which is why it can be rolled back. TRUNCATE bypasses the row-by-row logging by dropping the table and recreating an empty one with the same schema. Faster, but harder to undo. This is a classic interview trick question.

### Q8. [Easy] What does DBMS stand for, and how is it different from a database?

*Hint:* One is software, the other is the data.

**Answer:** **DBMS** stands for **Database Management System**. The DBMS is the software (e.g., MySQL); the database is the actual organized collection of data that the DBMS manages.

Analogy: a library building with shelves is the DBMS. The actual books inside are the database. One MySQL server can host many separate databases (school, hospital, ecommerce) just like one library building holds many sections.

### Q9. [Easy] In the students table, the `id` column uniquely identifies each student. What is this column called?

*Hint:* Two words. Comes up in literally every database.

**Answer:** `Primary Key`

A **primary key** is a column (or combination of columns) whose values uniquely identify each row in the table. Two rows can never have the same primary key value, and the value cannot be NULL. We will define primary keys formally in Chapter 3.

### Q10. [Medium] Give one real-world scenario where you would prefer SQL over NoSQL, and one where NoSQL would be better.

*Hint:* Think transactions vs flexibility.

**Answer:** **SQL preferred:** a banking app — you need ACID transactions so a money transfer is atomic. **NoSQL preferred:** storing user-generated content like Instagram posts where each post can have wildly different fields (text, photo, reel, story), or a real-time leaderboard that needs millisecond reads (Redis).

Choose SQL when consistency and structured relationships matter (banking, orders, billing). Choose NoSQL when schema flexibility, horizontal scale, or specialized data shapes (graphs, time series, key-value cache) matter more than joins and transactions.

### Q11. [Medium] What is the difference between a row and a record? Between a column and a field?

*Hint:* These are essentially synonyms.

**Answer:** There is no functional difference. **Row = record = tuple** (one entry in a table). **Column = field = attribute** (one type of information). Different textbooks and database vendors prefer different terms.

Academic textbooks usually use "tuple" and "attribute" (from relational algebra). DBA documentation usually uses "row" and "column". Application developers often say "record" and "field". They all refer to the same things. Use whichever your team uses.

### Q12. [Medium] Why did SQL become an ANSI standard, and why does that matter?

*Hint:* Think portability and interoperability.

**Answer:** SQL was standardized by ANSI in 1986 (and ISO in 1987) so that queries written for one database would be largely portable to others. This means your knowledge of SQL transfers between MySQL, PostgreSQL, SQL Server, Oracle, and even cloud warehouses like BigQuery and Snowflake.

Without standardization, each vendor would speak its own language and switching databases would require rewriting every query. Today, the ANSI core is universally supported, while each vendor adds its own extensions (e.g., MySQL's `LIMIT` vs SQL Server's `TOP`).

### Q13. [Easy] Are SQL keywords like SELECT case-sensitive in MySQL?

*Hint:* Try writing select vs SELECT — both work.

**Answer:** No. **SQL keywords are case-insensitive.** `SELECT`, `select`, and `SeLeCt` all work the same way. Convention is UPPERCASE for keywords for readability.

However, table and column names CAN be case-sensitive depending on the OS and database. On MySQL on Linux, `students` and `Students` may be different tables. Best practice: always use lowercase_with_underscores.

### Q14. [Easy] Which SQL category does `ROLLBACK` belong to?

*Hint:* It undoes changes inside a transaction.

**Answer:** **TCL** (Transaction Control Language).

`ROLLBACK` reverts all uncommitted changes since the last `COMMIT` or `SAVEPOINT`. The TCL family also includes `COMMIT` and `SAVEPOINT`.

### Q15. [Medium] Given the employees table:

```
emp_id | name        | salary
101    | Kavya Nair  | 75000
102    | Arjun Mehta | 92000
```

What category does this command belong to: `UPDATE employees SET salary = 80000 WHERE emp_id = 101;`?

*Hint:* It changes data, not structure.

**Answer:** **DML** (Data Manipulation Language).

`UPDATE` modifies existing data in rows. The structure of the employees table is unchanged — only the data inside it changes. DML commands are SELECT, INSERT, UPDATE, DELETE.

### Q16. [Medium] List two real-world scenarios where ACID transactions are critical.

*Hint:* Money and inventory.

**Answer:** 1. **Bank transfer** — debit from sender and credit to receiver must both succeed or both fail. 2. **E-commerce checkout** — reducing stock count and creating an order record must happen together.

ACID stands for Atomicity, Consistency, Isolation, Durability. SQL databases provide strong ACID guarantees. NoSQL databases often weaken these for performance, which is why money-related systems almost always use SQL (or a NoSQL DB with strict ACID mode like MongoDB transactions).

### Q17. [Medium] If TRUNCATE is faster than DELETE, why would you ever use DELETE?

*Hint:* Think filtering and rollback.

**Answer:** Use `DELETE` when (1) you only want to remove specific rows that match a WHERE condition, or (2) you want the operation to be transactional and reversible with ROLLBACK. `TRUNCATE` always wipes the entire table.

TRUNCATE is faster but a sledgehammer — it cannot be filtered, it resets AUTO_INCREMENT, and cannot easily be rolled back. DELETE is slower but precise (you can target individual rows) and fully transactional.

### Q18. [Hard] If a friend says "NoSQL is faster than SQL, so we should use NoSQL for our banking startup", how would you respond?

*Hint:* Speed alone is not the only criterion.

**Answer:** Pure speed is irrelevant if you lose money. Banking needs strict ACID guarantees so transfers are atomic and balances are always consistent — historically a SQL strength. NoSQL is faster for some workloads (key-value reads) but typically sacrifices consistency. Use PostgreSQL or MySQL for the core ledger; you can use Redis (NoSQL) on top for caching read-only data like user profiles.

This is a real architectural conversation. Most fintechs (Razorpay, PhonePe, Stripe) run their core ledger on PostgreSQL precisely because SQL's ACID guarantees prevent the kinds of bugs that lose customer money. NoSQL is added later for scale-out caches, search, and analytics.

### Q19. [Hard] Why is the relational model called "relational" — what is being related to what?

*Hint:* It is not just about relationships between tables.

**Answer:** The word *relation* in mathematics means a set of tuples with the same set of attributes — which is exactly what a table is. So a single table IS a "relation". The name "relational" refers to this mathematical structure, not (only) to relationships between tables.

Common misconception: students think "relational" means "tables related via foreign keys". The mathematical truth is that each table itself is a relation (a relation between values across columns). Relationships between tables are an additional feature built on top of that foundation.

### Q20. [Medium] What does SEQUEL stand for, and why was it renamed to SQL?

*Hint:* The full form has the word English in it.

**Answer:** **SEQUEL** = **Structured English Query Language**. It was renamed to SQL because the name SEQUEL was already trademarked by a UK aircraft company (Hawker Siddeley).

Many developers still pronounce SQL as "sequel" because of this history. Both pronunciations ("S-Q-L" and "sequel") are accepted in industry. In the U.S., "sequel" is more common; in the U.K., "S-Q-L" is more common.

## Mixed Questions

### Q1. [Easy] Match each command to its category: `SELECT`, `ALTER`, `REVOKE`, `SAVEPOINT`.

*Hint:* DDL, DML, DCL, TCL.

**Answer:** `SELECT` = **DML**, `ALTER` = **DDL**, `REVOKE` = **DCL**, `SAVEPOINT` = **TCL**.

SELECT reads data (DML, sometimes called DQL). ALTER changes structure (DDL). REVOKE removes permissions (DCL). SAVEPOINT marks a position to roll back to within a transaction (TCL).

### Q2. [Easy] Given this table, how many rows and how many columns does it have?

```
order_id | customer  | amount
5001     | Diya      | 1200
5002     | Vikram    | 850
5003     | Sneha     | 2400
```

*Hint:* Rows = records, columns = field types.

**Answer:** 3 rows and 3 columns.

The header row is not counted as a data row — it just labels the columns. So we have 3 data rows (order 5001, 5002, 5003) and 3 columns (order_id, customer, amount).

### Q3. [Medium] Your team needs a database for a small WordPress blog. Which DBMS would you pick and why?

*Hint:* WordPress has a default supported database.

**Answer:** **MySQL** (or its drop-in fork MariaDB). It is the officially supported database for WordPress, free, well-documented, easy to host on shared hosting, and the WordPress installer expects it by default.

PostgreSQL is technically more powerful but WordPress's plugins and themes assume MySQL. Sticking with the recommended stack avoids unnecessary friction.

### Q4. [Medium] True or False: A NoSQL database cannot have rows and columns.

*Hint:* Cassandra is a wide-column NoSQL database.

**Answer:** **False.** Some NoSQL databases (Cassandra, HBase) do use a row-and-column model, just with a more flexible schema. NoSQL only means "not exclusively SQL" — it is a broad category that includes documents (MongoDB), key-value (Redis), wide columns (Cassandra), and graphs (Neo4j).

The term NoSQL is misleading. It really means "non-relational" or "not only SQL". Cassandra has tables, rows, and columns but adds flexibility per row. Calling all NoSQL databases "document databases" is a common student mistake.

### Q5. [Medium] Looking at the four SQL categories, which one would you rarely write as an application developer (vs as a DBA)?

*Hint:* Think about who controls user accounts.

**Answer:** **DCL** (GRANT/REVOKE). Application developers write SELECT/INSERT/UPDATE/DELETE constantly, occasionally write CREATE/ALTER, and use COMMIT/ROLLBACK in code. But GRANT/REVOKE is mostly handled by DBAs or DevOps during initial database setup.

In modern DevOps, permissions are often managed declaratively through tools like Terraform or Liquibase rather than written by hand. As an app developer you focus on DML (your daily bread and butter), occasionally DDL when adding migrations, and TCL when dealing with multi-step transactions.

### Q6. [Medium] Why is SQL still relevant for data scientists in 2026 even though they mostly use Python and pandas?

*Hint:* Where does the data come from before it reaches Python?

**Answer:** Almost all enterprise data lives in SQL databases or SQL-compatible warehouses (Snowflake, BigQuery, Redshift). Data scientists use SQL to extract, filter, and aggregate the data *before* bringing a smaller subset into Python for modeling. SQL aggregation on the database is far faster than pulling millions of rows into pandas.

Typical workflow: write a SQL query that joins, filters, and aggregates 100M rows down to 50K, then load that into a pandas DataFrame and apply scikit-learn. Trying to do step one in pandas would be slow or impossible because of memory limits.

### Q7. [Hard] Imagine your manager says "let's use Excel as our customer database — we have only 50,000 customers". Give three reasons against this.

*Hint:* Concurrency, integrity, scale.

**Answer:** 1. **Concurrency:** only one person can edit at a time without conflicts. 2. **Data integrity:** nothing prevents typos like "Mumbi" vs "Mumbai" or duplicate customer entries — no constraints. 3. **Scale and performance:** Excel slows dramatically beyond ~100K rows; SQL handles tens of millions easily. Plus, Excel has no transactions — if your laptop crashes mid-edit, you may lose data.

Excel is fine for small, single-user, throwaway analysis. The moment you have multiple users, growing data, or a need for queries like "give me all customers in Mumbai who ordered more than 5000 in the last month", you need a real database.

### Q8. [Hard] True or False: Every SELECT statement is a DML command, but not every DML command is a SELECT.

*Hint:* DML = Data Manipulation Language.

**Answer:** **True.** SELECT, INSERT, UPDATE, and DELETE are all DML. Some textbooks separate SELECT into a fifth category called DQL (Data Query Language), but in most college syllabi and interviews SELECT is grouped under DML.

Whether SELECT is DML or DQL is a textbook-by-textbook debate. The pragmatic rule: if the question asks for four categories, put SELECT in DML. If the question asks for five, separate it as DQL.

### Q9. [Hard] If both MySQL and PostgreSQL are free and open source, why might a startup choose PostgreSQL over MySQL?

*Hint:* Think advanced features and SQL standards compliance.

**Answer:** PostgreSQL is more SQL-standard compliant, supports richer data types (JSON, arrays, full-text search built in), has more powerful window functions, better support for advanced indexing (GIN, GIST, BRIN), and stronger ACID guarantees by default. Many modern startups (Stripe, Instagram in early days, Heroku) chose PostgreSQL for these reasons.

MySQL is simpler, has wider hosting support, and is faster for read-heavy web workloads. PostgreSQL has deeper features for analytics, complex queries, and modern data types. Both are excellent — the choice often comes down to team familiarity.

### Q10. [Medium] What are the three things a DBMS does that you would otherwise have to handle yourself?

*Hint:* Storage, multi-user, recovery.

**Answer:** 1. **Persistent storage** — efficiently organizing data on disk so it survives restarts. 2. **Concurrency control** — letting many users read/write simultaneously without corruption. 3. **Crash recovery** — restoring the database to a consistent state after a power failure or crash. Bonus: indexing, query optimization, security, and backups.

If you stored data in a plain text file, you would have to write all this logic yourself. The DBMS gives you decades of engineering for free. That is why we pay (or use free DBMSes) instead of writing data layers from scratch.

### Q11. [Hard] If a database table has 1 million rows, can you think of why a SELECT * FROM table; might be a bad idea?

*Hint:* Network, memory, and human readability.

**Answer:** Three reasons: (1) it transfers all 1M rows over the network, which is slow; (2) it loads them into the client (Workbench, app) which may run out of memory; (3) you almost never *need* all the data — better to filter with WHERE and pick only the columns you need.

`SELECT *` is fine for a 5-row test table but is considered bad practice in production code. Always specify the exact columns and use WHERE/LIMIT to reduce data movement. Junior developers losing performance reviews over this is a recurring story.

### Q12. [Hard] Why does TRUNCATE reset the AUTO_INCREMENT counter but DELETE does not?

*Hint:* Recall how TRUNCATE works internally.

**Answer:** Because TRUNCATE drops the table and recreates it as an empty new table — and a new table starts AUTO_INCREMENT from 1. DELETE just removes rows without touching the table metadata, so the next inserted row continues from the previous AUTO_INCREMENT value.

Practical implication: if you have inserted 50 rows and then DELETE all of them, the next insert will get id = 51. If you TRUNCATE instead, the next insert will get id = 1. This matters when the IDs are exposed to users (you don't want gaps or sudden resets).

## Multiple Choice Questions

### Q1. [Easy] What does SQL stand for?

**B is correct.** SQL stands for Structured Query Language. It evolved from SEQUEL (Structured English Query Language), invented at IBM in 1974.

### Q2. [Easy] Who is credited with proposing the relational database model?

**B is correct.** Edgar F. Codd, an IBM researcher, proposed the relational model in his 1970 paper. He won the Turing Award in 1981 for this work.

### Q3. [Easy] Which of the following is a DDL command?

**C is correct.** CREATE defines structure (table, view, index), so it is DDL. SELECT and INSERT are DML. GRANT is DCL.

### Q4. [Easy] Which of the following is NOT a relational database?

**C is correct.** MongoDB is a NoSQL document database. The other three (MySQL, PostgreSQL, Oracle) are relational/SQL databases.

### Q5. [Easy] Which command is used to permanently save a transaction?

**B is correct.** COMMIT permanently saves all changes made in the current transaction. ROLLBACK does the opposite — undoes changes since the last COMMIT.

### Q6. [Easy] Which database typically powers mobile apps as an embedded database?

**C is correct.** SQLite is a single-file embedded database that ships inside the app. It powers Android contacts, iOS notes, WhatsApp chat history, and most mobile applications.

### Q7. [Easy] Which row in this table represents Priya?

```
id | name         | city
1  | Aarav        | Mumbai
2  | Priya        | Bengaluru
3  | Rohan        | Delhi
```

**B is correct.** Priya appears in the second data row, with id = 2 and city = Bengaluru.

### Q8. [Medium] Which command is used to remove all rows from a table without removing the table itself, in the fastest way?

**C is correct.** TRUNCATE TABLE removes all rows and is faster than DELETE because it drops and recreates the table internally. DROP TABLE removes the table itself. There is no REMOVE TABLE in SQL.

### Q9. [Medium] TRUNCATE is classified as which category of SQL command?

**B is correct.** Despite removing data, TRUNCATE is DDL because it works by dropping and recreating the table internally — a structural change. This is a popular interview trick question.

### Q10. [Medium] Which of the following commands is used to remove a permission from a user?

**B is correct.** REVOKE is the DCL command that removes a previously granted permission. GRANT does the opposite.

### Q11. [Medium] Which year was Codd's paper on the relational model published?

**B is correct.** Codd's paper "A Relational Model of Data for Large Shared Data Banks" was published in 1970. The first commercial SQL database (Oracle) shipped in 1979, and ANSI standardized SQL in 1986.

### Q12. [Medium] What does ACID stand for in database transactions?

**A is correct.** ACID = Atomicity (all or nothing), Consistency (valid state to valid state), Isolation (concurrent transactions don't see each other's intermediate state), Durability (committed data survives crashes).

### Q13. [Medium] Which of the following is the BEST description of a primary key?

**B is correct.** A primary key is a column (or combination of columns) whose values uniquely identify each row. It cannot be NULL and cannot have duplicates. Option D describes a foreign key.

### Q14. [Medium] Which is FALSE about SQL?

**D is FALSE and therefore the correct answer.** SQL works with virtually every relational database — MySQL, PostgreSQL, SQL Server, Oracle, SQLite, and even cloud warehouses like BigQuery and Snowflake.

### Q15. [Hard] You execute these statements:

```
START TRANSACTION;
INSERT INTO orders VALUES (1, 'Aarav', 500);
INSERT INTO orders VALUES (2, 'Priya', 800);
ROLLBACK;
```

How many rows will be in orders after this?

**A is correct.** ROLLBACK undoes all changes since START TRANSACTION. Both INSERTs are reverted, leaving 0 rows added. (If the table was empty before, it stays empty.)

### Q16. [Hard] Which of the following would be the WORST choice of database for a banking ledger that requires strict consistency?

**C is correct.** Redis is an in-memory key-value store designed for caching and ephemeral data, not for ACID transactions. PostgreSQL, MySQL (InnoDB), and Oracle are all strong choices for a banking ledger.

### Q17. [Hard] Which SQL category does the SAVEPOINT command belong to?

**D is correct.** SAVEPOINT belongs to TCL (Transaction Control Language). It marks a point inside a transaction that you can roll back to without rolling back the entire transaction.

### Q18. [Hard] Which statement about DELETE vs TRUNCATE is TRUE?

**B is correct.** TRUNCATE drops and recreates the table, which resets AUTO_INCREMENT to 1. DELETE only removes rows; the AUTO_INCREMENT counter keeps its current value. Option A is wrong (TRUNCATE has no WHERE), C is reversed, D is reversed.

### Q19. [Hard] A startup needs a free database with strong support for JSON, arrays, and advanced indexing. Best choice?

**C is correct.** PostgreSQL has best-in-class support for JSON/JSONB, native arrays, GIN/GIST indexing, and is free. MySQL has JSON support but PostgreSQL is generally considered stronger for these features. Oracle is paid. SQLite is too lightweight for serious production use.

### Q20. [Hard] Match the correct pairs: 1) DDL — CREATE, 2) DML — UPDATE, 3) DCL — REVOKE, 4) TCL — ROLLBACK. Which option correctly describes them all?

**D is correct.** CREATE = DDL (structure), UPDATE = DML (data), REVOKE = DCL (permissions), ROLLBACK = TCL (transactions). All four pairs are correctly matched.

## Coding Challenges

### Challenge 1. Identify the Category

**Difficulty:** Easy

For each of these commands, write a one-line comment above stating its category (DDL, DML, DCL, or TCL): CREATE, SELECT, GRANT, COMMIT, DROP, UPDATE, REVOKE, ROLLBACK, ALTER, DELETE.

**Constraints:**

- Use single-line SQL comments (-- ).

**Sample input:**

```
(No input — write annotated SQL)
```

**Sample output:**

```
Each command labeled with its category in a comment.
```

**Solution:**

```sql
-- DDL
CREATE TABLE t (id INT);
-- DML
SELECT * FROM t;
-- DCL
GRANT SELECT ON t TO 'user'@'localhost';
-- TCL
COMMIT;
-- DDL
DROP TABLE t;
-- DML
UPDATE t SET id = 1;
-- DCL
REVOKE SELECT ON t FROM 'user'@'localhost';
-- TCL
ROLLBACK;
-- DDL
ALTER TABLE t ADD COLUMN name VARCHAR(50);
-- DML
DELETE FROM t;
```

### Challenge 2. Describe a Sample Table

**Difficulty:** Easy

Imagine a table called employees with these columns: emp_id, name, department, salary, joining_date. List how many columns it has, suggest which column should be the primary key, and explain why.

**Constraints:**

- Write your answer as inline comments inside an SQL block.

**Sample input:**

```
(No input)
```

**Sample output:**

```
5 columns. Primary key: emp_id. Reason: ...
```

**Solution:**

```sql
-- The employees table has 5 columns:
-- emp_id, name, department, salary, joining_date.
--
-- Suggested primary key: emp_id
-- Reason: emp_id is unique for each employee, never NULL,
-- and never changes. Names can repeat (two Aaravs),
-- joining_date can repeat (many people joined on Jan 1),
-- so they are not safe primary keys.

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(30),
    salary DECIMAL(10,2),
    joining_date DATE
);
```

### Challenge 3. Predict the Output of a Mini Transaction

**Difficulty:** Medium

Given an empty employees table, predict the final number of rows after this sequence: START TRANSACTION; INSERT 3 rows; SAVEPOINT sp1; INSERT 2 more rows; ROLLBACK TO sp1; COMMIT;

**Constraints:**

- Explain step by step.

**Sample input:**

```
(No input)
```

**Sample output:**

```
Final row count: 3
```

**Solution:**

```sql
-- Step 1: START TRANSACTION (table is empty)
-- Step 2: INSERT 3 rows -> 3 rows in transaction buffer
-- Step 3: SAVEPOINT sp1 -> marker at 3 rows
-- Step 4: INSERT 2 rows -> 5 rows in buffer
-- Step 5: ROLLBACK TO sp1 -> back to 3 rows (the 2 are undone)
-- Step 6: COMMIT -> the 3 rows are saved permanently.
--
-- Final row count: 3

START TRANSACTION;
INSERT INTO employees VALUES (1, 'Aarav', 'IT', 60000, '2024-01-15');
INSERT INTO employees VALUES (2, 'Priya', 'HR', 55000, '2024-02-10');
INSERT INTO employees VALUES (3, 'Rohan', 'Sales', 48000, '2024-03-01');
SAVEPOINT sp1;
INSERT INTO employees VALUES (4, 'Ananya', 'IT', 72000, '2024-04-12');
INSERT INTO employees VALUES (5, 'Vikram', 'Marketing', 51000, '2024-05-20');
ROLLBACK TO sp1;
COMMIT;

SELECT COUNT(*) FROM employees;
-- Output: 3
```

### Challenge 4. Pick the Right Database

**Difficulty:** Medium

For each scenario, recommend a database (MySQL, PostgreSQL, SQLite, Redis, or MongoDB) and justify in one sentence: (a) Android Notes app, (b) Bank ledger, (c) Real-time chat session cache, (d) JSON-heavy product catalog with nested attributes, (e) WordPress blog.

**Constraints:**

- Write each as an SQL comment.

**Sample input:**

```
(No input)
```

**Sample output:**

```
Each scenario gets one recommended DB plus a short reason.
```

**Solution:**

```sql
-- (a) Android Notes app -> SQLite
--     Embedded, single file per device, zero configuration.
--
-- (b) Bank ledger -> PostgreSQL (or Oracle / MySQL InnoDB)
--     Strong ACID guarantees needed for money transfers.
--
-- (c) Real-time chat session cache -> Redis
--     In-memory key-value, microsecond reads, perfect for ephemeral sessions.
--
-- (d) JSON-heavy product catalog -> MongoDB (or PostgreSQL with JSONB)
--     Flexible schema for nested product attributes that vary per category.
--
-- (e) WordPress blog -> MySQL
--     Officially supported, free, every shared host runs it.
```

### Challenge 5. Build a Mental Model: Library System

**Difficulty:** Hard

Design the names of three tables and 3-4 columns each for a college library system. Identify the primary key in each. Explain in 1-2 lines how the tables relate.

**Constraints:**

- Use SQL comments to explain. Do not write actual queries — just the design.

**Sample input:**

```
(No input)
```

**Sample output:**

```
Three tables defined with columns and primary keys, plus relationship description.
```

**Solution:**

```sql
-- Three tables for a college library system:
--
-- 1) books
--    book_id (PK)  | title          | author        | total_copies
--    101           | Let Us C       | Yashwant K.   | 5
--    102           | DBMS Concepts  | Korth         | 3
--
-- 2) students
--    student_id (PK) | name          | course | year
--    2401            | Aarav Sharma  | BTech  | 2
--    2402            | Priya Iyer    | BTech  | 3
--
-- 3) borrowings
--    borrow_id (PK) | student_id (FK) | book_id (FK) | borrow_date | return_date
--    1              | 2401            | 101          | 2026-04-01  | NULL
--    2              | 2402            | 102          | 2026-04-05  | 2026-04-15
--
-- Relationship: borrowings is a junction table linking students and books.
-- A student can borrow many books over time, and a book can be borrowed
-- by many students -> many-to-many, resolved through borrowings.
```

### Challenge 6. Spot the Wrong Statements

**Difficulty:** Hard

Identify which of these statements about SQL/databases are FALSE and correct each one: (1) SQL keywords are case-sensitive. (2) MongoDB uses SQL. (3) TRUNCATE is DDL. (4) Oracle was the first commercial SQL database. (5) Primary key values can be NULL.

**Constraints:**

- Write the answer as SQL comments.

**Sample input:**

```
(No input)
```

**Sample output:**

```
List of corrected statements with explanations.
```

**Solution:**

```sql
-- (1) FALSE. SQL keywords are NOT case-sensitive.
--     SELECT, select, and SeLeCt all work the same.
--
-- (2) FALSE. MongoDB is a NoSQL document database.
--     It uses its own query language (BSON-based), not SQL.
--
-- (3) TRUE. TRUNCATE is DDL because it drops and recreates the table
--     internally — a structural change.
--
-- (4) TRUE. Oracle (1979) was the first commercial SQL database,
--     beating IBM's own System R to market.
--
-- (5) FALSE. Primary key values can NEVER be NULL.
--     They must be unique and non-null for every row.
--
-- Final score: statements 3 and 4 are TRUE, the rest are FALSE.
```

---

*Notes: https://learn.modernagecoders.com/resources/sql/introduction-to-sql-and-databases/*
