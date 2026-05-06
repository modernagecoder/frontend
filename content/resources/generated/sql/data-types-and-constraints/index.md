---
title: "SQL Data Types and Constraints - INT, VARCHAR, DATE, DECIMAL, PRIMARY KEY, FOREIGN KEY | Modern Age Coders"
description: "Complete guide to MySQL data types — numeric (INT, BIGINT, DECIMAL), string (CHAR, VARCHAR, TEXT), date/time (DATE, DATETIME, TIMESTAMP), and ENUM. Learn constraints: NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT, AUTO_INCREMENT. 56 practice questions with real-world scenarios."
slug: data-types-and-constraints
canonical: https://learn.modernagecoders.com/resources/sql/data-types-and-constraints
category: "SQL"
keywords: ["sql data types", "mysql data types", "int vs bigint", "varchar vs char", "decimal for money", "date vs datetime vs timestamp", "primary key mysql", "foreign key mysql", "auto_increment", "not null unique check default"]
---
# Data Types and Constraints (NOT NULL, UNIQUE, PRIMARY KEY)

**Difficulty:** Beginner  
**Reading time:** 24 min  
**Chapter:** 3  
**Practice questions:** 56

## What Are Data Types and Constraints?

When you create a table, every column has two things attached to it: a **data type** and optionally one or more **constraints**.

- A **data type** says what kind of values the column can hold — integers, strings, dates, etc. It controls storage size and valid operations.
- A **constraint** is a rule that limits which values are allowed — no NULLs, no duplicates, values between 0 and 100, etc. Constraints protect your data from garbage getting in.

Picking the right data type and constraints is half of good database design. A column declared as `VARCHAR(500)` when 20 characters is the true max wastes memory and lets bad data slip in. A phone number stored as `INT` loses leading zeros and breaks for international numbers. A salary column without `NOT NULL` lets someone insert a rogue row with an empty salary that crashes your reports.

### Sample Tables for This Chapter

We will refer to two tables throughout this chapter.

**students**

student_idnameemaildobcgpa1Aarav Sharmaaarav@college.edu2005-03-158.502Priya Iyerpriya@college.edu2004-11-229.203Rohan Vermarohan@college.edu2005-07-087.80

**orders**

order_idstudent_idamountorder_date500111200.502026-04-01 14:30:0050022850.002026-04-02 09:15:00

## Why Types and Constraints Matter

### 1. Data Integrity — Your Database Fights Bugs For You

Without constraints, any bad row can sneak in: a student with no name, a duplicate email, a negative salary, a date of birth in the year 3000. Once the bad data is in, downstream reports break and customer support has to clean it up. With constraints, the database rejects the bad row at INSERT time. You fix the bug once (in the schema) instead of a hundred times (in every query).

### 2. Storage Efficiency

A `TINYINT` uses 1 byte. A `BIGINT` uses 8 bytes. On a 50-million-row table, using BIGINT instead of TINYINT for a "gender" or "status" column wastes 350MB for no benefit. Multiply that across dozens of columns and multiple tables, and you pay for it in RAM, disk, and backup size.

### 3. Performance Hinges on Primary Keys and Indexes

Every row lookup, JOIN, and filter uses indexes. Indexes are built on primary keys and constraints. Choosing the right primary key determines whether your query runs in 10ms or 10 seconds on a million rows.

### 4. Interview-Favorite Topic

"What is the difference between CHAR and VARCHAR?", "When would you use DECIMAL instead of FLOAT?", "What is the difference between a PRIMARY KEY and a UNIQUE constraint?", "Can a table have multiple UNIQUE constraints but only one PRIMARY KEY?" — these are asked in almost every SQL interview at Flipkart, Amazon, Zomato, and countless startups.

## Detailed Explanation

### 1. Numeric Types

TypeBytesRange (signed)Typical Use`TINYINT`1-128 to 127Flags, small status codes`SMALLINT`2-32,768 to 32,767Counts in small range`MEDIUMINT`3-8M to 8MRarely used`INT`4-2.1B to 2.1BIDs, counts (most common)`BIGINT`8-9.2 quintillion to 9.2 quintillionHuge counts, file sizes`DECIMAL(p, s)`variableexactMoney, precision math`FLOAT`4~7-digit precisionScientific, approx`DOUBLE`8~15-digit precisionScientific, approx

#### DECIMAL vs FLOAT — Critical for Money

`DECIMAL(10, 2)` means "up to 10 total digits, 2 after the decimal point" — so values from -99,999,999.99 to 99,999,999.99 stored EXACTLY. Use for money, accounting, tax calculations.

`FLOAT` and `DOUBLE` store values in binary floating-point, which cannot exactly represent 0.1 or 0.2. So `0.1 + 0.2 = 0.30000000000000004` in floats. Fine for physics simulations, fatal for a bank ledger where pennies must add up exactly.

**Rule: if it's money or currency, always use DECIMAL.**

### 2. String Types

TypeStorageMaxWhen to Use`CHAR(n)`fixed n chars, padded255Fixed-length codes (country='IN', pincode, gender='M')`VARCHAR(n)`actual length + 1-2 bytes65,535Names, emails, anything variable`TEXT`up to 64KB65,535Blog posts, long notes`MEDIUMTEXT`up to 16MB~16MArticles, product descriptions`LONGTEXT`up to 4GB~4BBooks, huge logs

#### CHAR vs VARCHAR — When to Use Which

Use `CHAR(n)` for columns where the value is always exactly n characters long: country codes (2 chars), UPI codes, MD5 hashes (32 chars), pin codes (6 chars in India). CHAR is slightly faster because the row has a fixed size.

Use `VARCHAR(n)` for everything else: names, addresses, emails, product descriptions. VARCHAR only uses the space it needs.

Use `TEXT` when you need more than 65,535 characters or when you don't care about indexing the column fully.

#### Phone Numbers: VARCHAR, not INT

New students often store phone numbers as `BIGINT`. This is wrong. Phone numbers can have leading zeros ("080-xxxxxxx"), plus signs ("+91-98xxxxxxxx"), hyphens, and spaces. Storing them as numbers loses all this. Also, nobody does math on phone numbers. **Always store phone numbers as VARCHAR.**

### 3. Date and Time Types

TypeFormatRangeUse`DATE`YYYY-MM-DD1000-01-01 to 9999-12-31DOB, joining date`TIME`HH:MM:SS-838:59:59 to 838:59:59Durations, time of day`DATETIME`YYYY-MM-DD HH:MM:SS1000-01-01 to 9999-12-31Event timestamps`TIMESTAMP`YYYY-MM-DD HH:MM:SS1970-01-01 UTC to 2038-01-19 UTCRow creation, updates`YEAR`YYYY1901 to 2155Year-only columns

#### DATETIME vs TIMESTAMP — The Difference

Both look identical and store "date + time". The critical differences:

- `DATETIME` stores the exact literal you give it. No time zone logic. Range is huge (1000 to 9999).
- `TIMESTAMP` is stored internally in UTC and converted to the server's time zone on read. Range is limited: 1970 to 2038 (the Y2K38 problem).

Use `TIMESTAMP` for `created_at` / `updated_at` columns because it automatically adjusts for server time zones. Use `DATETIME` for dates that must not shift with time zones — like a scheduled meeting time.

### 4. Boolean

MySQL has no true BOOLEAN type. Internally, `BOOLEAN` is an alias for `TINYINT(1)` — stored as 0 or 1. `TRUE` is 1, `FALSE` is 0. You can write `BOOLEAN` in your CREATE TABLE for clarity, but MySQL stores it as TINYINT.

### 5. ENUM — Fixed Set of Allowed Values

```
gender ENUM('Male', 'Female', 'Other')
status ENUM('pending', 'approved', 'rejected')
```

ENUM restricts the column to one of the listed values. Stored internally as a small integer (1 byte for up to 256 values), so it is also space-efficient. Use it when the set of values is small and rarely changes.

### 6. Constraints

#### NOT NULL

The column cannot be empty. Any INSERT without a value for this column (and no DEFAULT set) fails.

```
name VARCHAR(50) NOT NULL
```

#### UNIQUE

All values in the column must be different. Two rows cannot have the same value. NULLs are allowed and multiple NULLs don't count as duplicates in most databases.

```
email VARCHAR(100) UNIQUE
```

#### PRIMARY KEY

The column that uniquely identifies each row. Combines UNIQUE + NOT NULL. Only ONE primary key per table. Creates an index automatically.

```
student_id INT PRIMARY KEY
```

#### FOREIGN KEY / REFERENCES

Ensures that a column's value exists in another table's primary key. Prevents orphan records.

```
student_id INT,
FOREIGN KEY (student_id) REFERENCES students(student_id)
```

#### CHECK

A boolean condition that every row must satisfy. Supported properly in MySQL 8.0+.

```
cgpa DECIMAL(3,2) CHECK (cgpa >= 0 AND cgpa <= 10)
```

#### DEFAULT

Provides a value when no value is specified in INSERT.

```
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

#### AUTO_INCREMENT

Automatically assigns the next integer value to a column. Usually applied to primary key columns.

```
id INT AUTO_INCREMENT PRIMARY KEY
```

### 7. Composite Primary Key

Sometimes a single column doesn't uniquely identify a row, but a combination does. Example: a `course_enrollments` table where one student can enroll in many courses, and one course has many students. Neither `student_id` alone nor `course_id` alone is unique, but the pair is.

```
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    enrolled_on DATE,
    PRIMARY KEY (student_id, course_id)
);
```

### 8. Choosing Data Types — Real Scenarios

FieldGood ChoiceWhyStudent age`TINYINT UNSIGNED`Range 0-255 is plenty, 1 byteAadhaar number`CHAR(12)`Exactly 12 digits, keep leading zerosIndian phone`VARCHAR(15)`Allows +, spaces, country codeProfile bio`TEXT`Can be longProduct price`DECIMAL(10,2)`Exact moneyDate of birth`DATE`No time neededRow created timestamp`TIMESTAMP`Auto-converts time zonesIs active?`BOOLEAN`TINYINT(1) under the hoodUser role (admin/user/guest)`ENUM(...)`Fixed, tiny set

## Code Examples

### A Well-Designed students Table

```sql
CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(15),
    dob DATE NOT NULL,
    cgpa DECIMAL(3,2) DEFAULT 0.00 CHECK (cgpa >= 0 AND cgpa <= 10),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE students;
```

This schema uses eight common patterns: `AUTO_INCREMENT PRIMARY KEY` for a surrogate id; `NOT NULL` on mandatory fields; `UNIQUE` on email so no two students share one; phone as `VARCHAR(15)` to handle +country codes; `DECIMAL(3,2)` for exact CGPA (range 0.00 to 9.99); `CHECK` to enforce valid CGPA; `BOOLEAN DEFAULT TRUE` for active flag; `TIMESTAMP DEFAULT CURRENT_TIMESTAMP` for automatic creation time.

**Output:**

```
Query OK, 0 rows affected (0.05 sec)

+------------+---------------+------+-----+-------------------+-------------------+
| Field      | Type          | Null | Key | Default           | Extra             |
+------------+---------------+------+-----+-------------------+-------------------+
| student_id | int           | NO   | PRI | NULL              | auto_increment    |
| name       | varchar(50)   | NO   |     | NULL              |                   |
| email      | varchar(100)  | NO   | UNI | NULL              |                   |
| phone      | varchar(15)   | YES  |     | NULL              |                   |
| dob        | date          | NO   |     | NULL              |                   |
| cgpa       | decimal(3,2)  | YES  |     | 0.00              |                   |
| is_active  | tinyint(1)    | YES  |     | 1                 |                   |
| created_at | timestamp     | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
+------------+---------------+------+-----+-------------------+-------------------+
8 rows in set (0.01 sec)
```

### AUTO_INCREMENT and DEFAULT in Action

```sql
-- student_id is AUTO_INCREMENT so we omit it.
-- is_active and created_at have DEFAULTs so we can omit them too.
INSERT INTO students (name, email, phone, dob, cgpa) VALUES
    ('Aarav Sharma', 'aarav@college.edu', '+91-9876543210', '2005-03-15', 8.50),
    ('Priya Iyer',   'priya@college.edu', '+91-9123456780', '2004-11-22', 9.20),
    ('Rohan Verma',  'rohan@college.edu', NULL,              '2005-07-08', 7.80);

SELECT student_id, name, email, phone, is_active, created_at FROM students;
```

We name only the columns we want to supply values for. `student_id` auto-generates 1, 2, 3. `is_active` defaults to TRUE (1). `created_at` gets the current timestamp. Rohan's phone is explicitly NULL because phone is nullable (no NOT NULL constraint).

**Output:**

```
+------------+--------------+-------------------+------------------+-----------+---------------------+
| student_id | name         | email             | phone            | is_active | created_at          |
+------------+--------------+-------------------+------------------+-----------+---------------------+
|          1 | Aarav Sharma | aarav@college.edu | +91-9876543210   |         1 | 2026-04-11 10:15:22 |
|          2 | Priya Iyer   | priya@college.edu | +91-9123456780   |         1 | 2026-04-11 10:15:22 |
|          3 | Rohan Verma  | rohan@college.edu | NULL             |         1 | 2026-04-11 10:15:22 |
+------------+--------------+-------------------+------------------+-----------+---------------------+
3 rows in set (0.00 sec)
```

### UNIQUE and NOT NULL Rejecting Bad Data

```sql
-- Attempt 1: duplicate email — should fail.
INSERT INTO students (name, email, dob)
VALUES ('Ananya Reddy', 'aarav@college.edu', '2005-01-10');

-- Attempt 2: NULL name — should fail.
INSERT INTO students (name, email, dob)
VALUES (NULL, 'ananya@college.edu', '2005-01-10');

-- Attempt 3: valid row — should succeed.
INSERT INTO students (name, email, dob)
VALUES ('Ananya Reddy', 'ananya@college.edu', '2005-01-10');
```

Attempt 1 violates the UNIQUE constraint on email. Attempt 2 violates NOT NULL on name. Attempt 3 obeys both rules and succeeds. This is exactly why constraints exist — the database catches bad data at write time so your reads are always clean.

**Output:**

```
ERROR 1062 (23000): Duplicate entry 'aarav@college.edu' for key 'students.email'

ERROR 1048 (23000): Column 'name' cannot be null

Query OK, 1 row affected (0.01 sec)
```

### FOREIGN KEY Preventing Orphan Orders

```sql
-- orders table references students.
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL CHECK (amount > 0),
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);

-- Valid order (student_id=1 exists).
INSERT INTO orders (student_id, amount) VALUES (1, 1200.50);

-- Invalid order — student_id=999 does not exist.
INSERT INTO orders (student_id, amount) VALUES (999, 500.00);
```

The FOREIGN KEY clause says "every student_id in orders must match an existing student_id in students". Attempt to insert student_id=999 fails because there is no student with id 999. This prevents **orphan records** — orders referencing students who don't exist. The CHECK constraint further ensures amount is positive.

**Output:**

```
Query OK, 0 rows affected (0.04 sec)

Query OK, 1 row affected (0.01 sec)

ERROR 1452 (23000): Cannot add or update a child row: a foreign key constraint fails (`school`.`orders`, CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`))
```

### Composite Primary Key — Enrollments

```sql
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    enrolled_on DATE DEFAULT (CURRENT_DATE),
    grade CHAR(2),
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);

INSERT INTO enrollments (student_id, course_id, grade) VALUES
    (1, 101, 'A'),
    (1, 102, 'B'),
    (2, 101, 'A'),
    (2, 102, 'A');

-- Attempt to insert duplicate (1, 101) — fails.
INSERT INTO enrollments (student_id, course_id, grade) VALUES (1, 101, 'C');
```

A **composite primary key** is made of two or more columns. Here `(student_id, course_id)` together uniquely identify a row. Student 1 can enroll in multiple courses (101 and 102), and course 101 can have multiple students (1 and 2), but each (student, course) pair can appear at most once. The last INSERT fails because (1, 101) already exists.

**Output:**

```
Query OK, 0 rows affected (0.03 sec)

Query OK, 4 rows affected (0.01 sec)
Records: 4  Duplicates: 0  Warnings: 0

ERROR 1062 (23000): Duplicate entry '1-101' for key 'enrollments.PRIMARY'
```

### DECIMAL vs FLOAT — Why Money Needs DECIMAL

```sql
CREATE TABLE payments_decimal (amount DECIMAL(10,2));
CREATE TABLE payments_float (amount FLOAT);

-- Insert 0.1 three times into each.
INSERT INTO payments_decimal VALUES (0.10), (0.10), (0.10);
INSERT INTO payments_float VALUES (0.10), (0.10), (0.10);

-- Sum them.
SELECT SUM(amount) AS total_decimal FROM payments_decimal;
SELECT SUM(amount) AS total_float FROM payments_float;
```

With DECIMAL the sum is exactly 0.30 — what any accountant expects. With FLOAT the sum is 0.30000000447... due to binary floating-point rounding errors. On a real ledger with millions of transactions, these tiny errors add up and cause balance mismatches. **Always use DECIMAL for money.**

**Output:**

```
+---------------+
| total_decimal |
+---------------+
|          0.30 |
+---------------+
1 row in set (0.00 sec)

+----------------------+
| total_float          |
+----------------------+
| 0.30000001192092896  |
+----------------------+
1 row in set (0.00 sec)
```

## Common Mistakes

### Storing Phone Numbers as INT

**Wrong:**

```
CREATE TABLE users (
    id INT,
    phone INT   -- WRONG
);
INSERT INTO users VALUES (1, 09876543210);
```

Leading zero is lost. '09876543210' becomes 9876543210. International numbers with '+' or '-' cannot be stored at all.

**Correct:**

```
CREATE TABLE users (
    id INT PRIMARY KEY,
    phone VARCHAR(15)
);
INSERT INTO users VALUES (1, '+91-9876543210');
```

Phone numbers are not numbers in the arithmetic sense — you never add two phone numbers. They can have leading zeros, country codes, plus signs, spaces, hyphens. Store them as VARCHAR(15) or VARCHAR(20). The same rule applies to Aadhaar numbers, PIN codes with leading zeros, and credit card numbers.

### Using FLOAT for Money

**Wrong:**

```
CREATE TABLE orders (
    order_id INT,
    amount FLOAT  -- WRONG
);
INSERT INTO orders VALUES (1, 19.99), (2, 10.01);
SELECT SUM(amount) FROM orders;  -- returns 30.000000190734863
```

Floating-point cannot exactly represent 19.99, so sums drift over many rows.

**Correct:**

```
CREATE TABLE orders (
    order_id INT,
    amount DECIMAL(10,2)
);
INSERT INTO orders VALUES (1, 19.99), (2, 10.01);
SELECT SUM(amount) FROM orders;  -- returns 30.00
```

DECIMAL stores the exact digits you give it. FLOAT and DOUBLE store an approximation in binary, which loses precision on values like 0.1, 0.2, 0.3. For anything touching money (prices, taxes, invoices, salaries), always use DECIMAL with enough precision.

### Forgetting NOT NULL on Required Fields

**Wrong:**

```
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100)
);
INSERT INTO students (id) VALUES (1);  -- succeeds but creates a student with no name or email
```

Bad data silently gets in. Reports later show students with NULL names.

**Correct:**

```
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);
INSERT INTO students (id) VALUES (1);  -- now fails at INSERT time
```

If a field is conceptually required, declare it NOT NULL. This catches bugs at insert time (a controlled failure) rather than at report time weeks later (a confused stakeholder). Combine NOT NULL with UNIQUE for fields like email, username, or pan_number that must always exist AND be unique.

### Thinking Two UNIQUE Constraints Are Equivalent to a Composite PRIMARY KEY

**Wrong:**

```
CREATE TABLE enrollments (
    student_id INT UNIQUE,
    course_id INT UNIQUE,
    enrolled_on DATE
);
```

UNIQUE on student_id alone means each student can appear only once — breaks the use case (a student takes many courses).

**Correct:**

```
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    enrolled_on DATE,
    PRIMARY KEY (student_id, course_id)
);
```

A UNIQUE on a single column means that column is unique by itself. UNIQUE on student_id AND UNIQUE on course_id means each student can appear only once AND each course can appear only once — not what we want. A **composite primary key on (student_id, course_id)** means the *pair* is unique, which is exactly the real-world rule.

## Summary

- Data types control what kind of values a column can hold. Constraints add business rules on top of the types.
- Numeric types: TINYINT (1 byte), INT (4 bytes, most common), BIGINT (8 bytes). Use DECIMAL(p, s) for money, never FLOAT or DOUBLE.
- String types: CHAR(n) for fixed-length (codes, hashes); VARCHAR(n) for variable-length (names, emails); TEXT for long free-form text.
- Phone numbers, Aadhaar, and PINs should be VARCHAR (not INT) because leading zeros, plus signs, and punctuation matter.
- Date/time types: DATE (YYYY-MM-DD), DATETIME (up to year 9999), TIMESTAMP (stored as UTC, Y2K38 limit in 2038).
- Use TIMESTAMP for created_at/updated_at (auto time-zone). Use DATETIME for fixed wall-clock times that must never shift.
- MySQL BOOLEAN is internally TINYINT(1): TRUE=1, FALSE=0. ENUM restricts a column to a fixed set of allowed values.
- Constraints: NOT NULL (required), UNIQUE (no duplicates), PRIMARY KEY (= NOT NULL + UNIQUE, one per table), FOREIGN KEY (references another table), CHECK (boolean rule), DEFAULT (fallback value), AUTO_INCREMENT (auto-assigned ids).
- A composite primary key is made of multiple columns; the combination must be unique. Used for junction tables like enrollments.
- Good schema = right types + right constraints. Both together turn your database into a fortress that rejects bad data at the source, saving you from painful data cleanups later.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/data-types-and-constraints/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/data-types-and-constraints/practice/*
