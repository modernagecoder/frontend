---
title: "SQL SELECT and WHERE Clause - Filter Rows with AND, OR, IN, BETWEEN | Modern Age Coders"
description: "Master SQL SELECT queries and the WHERE clause. Learn column selection, aliasing with AS, comparison operators, AND/OR/NOT, IN, BETWEEN, operator precedence. 60 practice questions with runnable MySQL examples."
slug: select-basics-and-where
canonical: https://learn.modernagecoders.com/resources/sql/select-basics-and-where
category: "SQL"
keywords: ["sql select query", "sql where clause", "sql comparison operators", "sql AND OR NOT", "sql IN operator", "sql BETWEEN", "sql aliasing", "mysql select tutorial", "sql filter rows", "sql interview questions"]
---
# SELECT Queries and the WHERE Clause

**Difficulty:** Beginner  
**Reading time:** 22 min  
**Chapter:** 6  
**Practice questions:** 60

## What Is the SELECT Statement?

The `SELECT` statement is the single most important command in SQL. Every query you will ever write as a data analyst, backend developer, or data scientist begins with `SELECT`. It is how you **retrieve** data from one or more tables in your database.

Think of a table as a spreadsheet with rows and columns. The `SELECT` statement lets you say: "Show me these columns, from this table, for rows that match these conditions." That is it. Every complex query — even ones spanning ten tables with joins, subqueries, and window functions — is built on this foundation.

### The WHERE Clause

The `WHERE` clause is how you **filter rows**. Without it, `SELECT` returns every single row in the table. A table with 10 million rows? You get 10 million rows back. The `WHERE` clause lets you say: "Only give me rows where the salary is above 50000," or "Only rows where the department is IT and the city is Bengaluru."

In this chapter you will learn how to pick specific columns, rename them using aliases, and filter rows using comparison operators (`=`, `!=`, `<`, `>`), logical operators (`AND`, `OR`, `NOT`), and two extremely common filters: `IN` (check if a value is in a list) and `BETWEEN` (check if a value falls within a range).

## Why Are SELECT and WHERE So Important?

A senior data analyst at Flipkart might write 50 to 200 SQL queries in a single day. Out of those, 95% start with `SELECT` and include a `WHERE` clause. This is not an exaggeration — SELECT and WHERE are the bread and butter of data work.

### 1. Every Dashboard You See Uses SELECT

When you open Swiggy and see "Orders delivered today," a SELECT query runs. When you check your bank statement for transactions above Rs 5000 this month, a SELECT with WHERE runs. Every chart on every business dashboard on earth is powered by SELECT queries.

### 2. WHERE Saves Your Database

A production database at Zomato has billions of rows. Running `SELECT * FROM orders` without a WHERE clause could take hours and crash the database. A well-written WHERE clause with an indexed column can return the same useful data in milliseconds. Learning to write good WHERE clauses is learning to respect your database.

### 3. Interview Non-Negotiable

Every single SQL interview — whether for a data analyst role at Amazon, a backend developer role at a startup, or a business analyst role at a bank — will test SELECT and WHERE. Questions like "Find all employees in the IT department earning more than 60000 who joined after 2020" are standard. If you cannot answer these fluently, you cannot pass.

### 4. Foundation for Everything Else

JOINs, subqueries, window functions, CTEs — everything you will learn later builds on SELECT and WHERE. Weak foundation here means weak understanding of advanced topics.

## Detailed Explanation

### The Sample Table We Will Use Throughout

Every example in this chapter uses the same `employees` table. Create it once in MySQL and follow along:

```
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(30),
    salary INT,
    join_date DATE
);

INSERT INTO employees VALUES
(1, 'Aarav Sharma', 'IT', 75000, '2021-03-15'),
(2, 'Priya Patel', 'HR', 52000, '2020-07-22'),
(3, 'Rohan Gupta', 'IT', 92000, '2019-01-10'),
(4, 'Ananya Singh', 'Finance', 68000, '2022-11-05'),
(5, 'Vikram Reddy', 'IT', 45000, '2023-04-18'),
(6, 'Sneha Iyer', 'Marketing', 58000, '2021-09-30'),
(7, 'Karan Mehta', 'Finance', 81000, '2020-02-14'),
(8, 'Ishita Kumar', 'HR', 47000, '2023-06-25'),
(9, 'Aditya Rao', 'Marketing', 63000, '2022-03-08'),
(10, 'Diya Nair', 'IT', 110000, '2018-08-12');
```

### 1. Basic SELECT Syntax

The simplest form of SELECT is:

```
SELECT column1, column2, ... FROM table_name;
```

You list the columns you want separated by commas, then `FROM` followed by the table name. End with a semicolon. Most MySQL clients require the semicolon; it is good practice even when optional.

### 2. SELECT * vs SELECT specific columns

The star `*` means "all columns." `SELECT * FROM employees;` returns every column. This is useful during exploration but **bad practice in production code** for three reasons:

- It fetches unnecessary data, wasting network bandwidth and memory.
- If someone adds or removes a column from the table, your query's output changes unexpectedly.
- Database optimizers can sometimes use index-only scans when you list specific columns, but not with `*`.

Always list columns explicitly in production: `SELECT id, name, salary FROM employees;`

### 3. Aliasing with AS

You can rename a column in your result using `AS`:

```
SELECT name AS employee_name, salary AS monthly_pay FROM employees;
```

The column in the database is still called `name`, but your result shows it as `employee_name`. The `AS` keyword is actually optional — `SELECT name employee_name FROM employees` works too — but always write `AS` explicitly. Skipping it causes bugs where missing commas make two columns look like an alias.

### 4. Comparison Operators in WHERE

SQL supports all the comparison operators you expect:

OperatorMeaningExample`=`Equal to`WHERE department = 'IT'``!=` or `<>`Not equal to`WHERE department != 'HR'``<`Less than`WHERE salary < 50000``>`Greater than`WHERE salary > 75000``<=`Less than or equal`WHERE salary <= 60000``>=`Greater than or equal`WHERE salary >= 80000`

#### = vs == (Critical)

Unlike most programming languages, SQL uses a single `=` for equality comparison, not `==`. Writing `WHERE salary == 75000` is a syntax error in SQL. This is one of the most common mistakes from students coming from Python or JavaScript.

#### != vs <>

Both mean "not equal." `!=` is familiar to programmers. `<>` is the SQL standard. MySQL, PostgreSQL, and SQL Server all accept both. Use `!=` for readability unless your company style guide says otherwise.

#### String Comparisons Use Single Quotes

Strings in SQL are wrapped in single quotes: `'IT'`, `'Aarav Sharma'`. Double quotes work in some databases for strings but are meant for identifiers (like column names with spaces). **Always use single quotes for string literals.**

### 5. Combining Conditions: AND, OR, NOT

Real filters almost always need multiple conditions. SQL gives you three logical operators:

- `AND`: both conditions must be true
- `OR`: at least one condition must be true
- `NOT`: reverses the condition

Example: "Employees in IT earning more than 70000":

```
SELECT name, salary FROM employees
WHERE department = 'IT' AND salary > 70000;
```

### 6. Operator Precedence (Parentheses Matter!)

SQL evaluates `AND` **before** `OR`, just like multiplication before addition in math. This causes enormous bugs if you are not careful.

Consider the query: "Employees in IT or Finance who earn more than 60000":

```
-- WRONG: missing parentheses
SELECT name FROM employees
WHERE department = 'IT' OR department = 'Finance' AND salary > 60000;

-- What SQL actually evaluates (AND binds tighter):
-- department = 'IT' OR (department = 'Finance' AND salary > 60000)
-- This returns ALL IT employees (even low earners) plus high-paid Finance
```

The correct query uses parentheses:

```
SELECT name FROM employees
WHERE (department = 'IT' OR department = 'Finance') AND salary > 60000;
```

**Rule of thumb: whenever you mix AND and OR, add parentheses even if they seem redundant.** Your future self reading the query will thank you.

### 7. The IN Operator

Writing `WHERE department = 'IT' OR department = 'HR' OR department = 'Finance'` is tedious. The `IN` operator is shorthand:

```
SELECT name, department FROM employees
WHERE department IN ('IT', 'HR', 'Finance');
```

This is cleaner, faster to read, and often faster to execute. `NOT IN` does the opposite:

```
SELECT name FROM employees
WHERE department NOT IN ('IT', 'HR');
-- Returns Finance and Marketing employees
```

#### WARNING: NOT IN and NULL

Here is a trap that has broken production systems. If the list inside `NOT IN` contains `NULL`, the query returns **zero rows**, even when you expect matches. Example:

```
SELECT name FROM employees WHERE department NOT IN ('IT', NULL);
-- Returns: nothing!
```

This is because SQL treats `NULL` as "unknown." Comparing anything to NULL yields NULL (not True, not False), and the WHERE clause filters out rows where the condition is not True. When using `NOT IN` with a subquery that might return NULLs, filter them out first using `IS NOT NULL`.

### 8. The BETWEEN Operator

For range checks, `BETWEEN` is shorter than writing two comparisons:

```
-- These two are equivalent:
SELECT name FROM employees WHERE salary BETWEEN 50000 AND 80000;
SELECT name FROM employees WHERE salary >= 50000 AND salary <= 80000;
```

**BETWEEN is inclusive on both ends.** `BETWEEN 50000 AND 80000` includes both 50000 and 80000. This catches beginners off guard — they assume exclusive ranges.

`BETWEEN` works on numbers, dates, and even strings (alphabetically):

```
SELECT name FROM employees
WHERE join_date BETWEEN '2021-01-01' AND '2021-12-31';
-- All employees who joined in 2021
```

### 9. The Full Query Structure So Far

Putting it together, a complete query looks like:

```
SELECT id, name AS employee_name, salary
FROM employees
WHERE department IN ('IT', 'Finance')
  AND salary BETWEEN 60000 AND 100000
  AND join_date >= '2020-01-01';
```

Read it top to bottom: pick these columns, from this table, where these conditions hold. The beauty of SQL is that it reads like English.

## Code Examples

### SELECT * vs Specific Columns

```sql
-- Sample table: employees (id, name, department, salary, join_date)
-- 10 rows already inserted (see Explanation section)

-- All columns, all rows
SELECT * FROM employees;

-- Only specific columns
SELECT name, salary FROM employees;
```

The first query returns all 5 columns and all 10 rows. The second returns only 2 columns (name, salary) for all 10 rows. In production, always list columns explicitly — `SELECT *` is fine in the MySQL CLI for exploration but dangerous in application code because adding a new column silently changes the result shape.

**Output:**

```
Query 1 (SELECT *) returns:
id  name             department  salary   join_date
1   Aarav Sharma     IT          75000    2021-03-15
2   Priya Patel      HR          52000    2020-07-22
3   Rohan Gupta      IT          92000    2019-01-10
...
(10 rows)

Query 2 (SELECT name, salary) returns:
name             salary
Aarav Sharma     75000
Priya Patel      52000
Rohan Gupta      92000
...
(10 rows, 2 columns)
```

### Column Aliasing with AS

```sql
SELECT 
    name AS employee_name,
    department AS dept,
    salary AS monthly_salary_inr
FROM employees
WHERE id <= 3;
```

The `AS` keyword renames columns in the output only — the actual table structure is not modified. This is useful when you want friendlier headers in reports or when the original column names are cryptic (like `emp_sal_usd`). We limit to id <= 3 to keep the output short.

**Output:**

```
employee_name    dept   monthly_salary_inr
Aarav Sharma     IT     75000
Priya Patel      HR     52000
Rohan Gupta      IT     92000
```

### Basic WHERE with Comparison Operators

```sql
-- Employees earning strictly more than 70000
SELECT name, salary 
FROM employees
WHERE salary > 70000;
```

The WHERE clause filters rows. Only rows where salary is greater than 70000 are returned. Notice that 70000 itself is NOT included — use `>=` for inclusive. The comparison happens row by row: SQL checks each row and keeps only those where the condition evaluates to TRUE.

**Output:**

```
name             salary
Aarav Sharma     75000
Rohan Gupta      92000
Karan Mehta      81000
Diya Nair        110000
(4 rows)
```

### Combining AND with Comparison

```sql
-- IT employees earning more than 50000
SELECT name, department, salary
FROM employees
WHERE department = 'IT' AND salary > 50000;
```

This is the classic "find all employees in IT department earning more than 50000" interview question. Both conditions must be true. Out of the 4 IT employees (Aarav, Rohan, Vikram, Diya), Vikram earns 45000 and is excluded. The other three pass both checks.

**Output:**

```
name             department  salary
Aarav Sharma     IT          75000
Rohan Gupta      IT          92000
Diya Nair        IT          110000
(3 rows)
```

### Operator Precedence: Parentheses Matter

```sql
-- WRONG (no parentheses)
SELECT name, department, salary
FROM employees
WHERE department = 'IT' OR department = 'HR' AND salary > 50000;

-- CORRECT (with parentheses)
SELECT name, department, salary
FROM employees
WHERE (department = 'IT' OR department = 'HR') AND salary > 50000;
```

AND is evaluated before OR, so the first query is read as: `department = 'IT' OR (department = 'HR' AND salary > 50000)`. This returns ALL IT employees (including Vikram at 45000) plus HR employees who earn above 50000 (Priya). The second query correctly filters: IT or HR, AND salary above 50000.

**Output:**

```
Query 1 (wrong) - 5 rows:
Aarav Sharma IT 75000
Priya Patel HR 52000
Rohan Gupta IT 92000
Vikram Reddy IT 45000    <- Vikram slips in!
Diya Nair IT 110000

Query 2 (correct) - 4 rows:
Aarav Sharma IT 75000
Priya Patel HR 52000
Rohan Gupta IT 92000
Diya Nair IT 110000
```

### IN Operator for Multiple Values

```sql
-- Employees in IT, Finance, or Marketing
SELECT name, department, salary
FROM employees
WHERE department IN ('IT', 'Finance', 'Marketing');

-- Opposite: NOT in HR or Marketing
SELECT name, department
FROM employees
WHERE department NOT IN ('HR', 'Marketing');
```

The IN operator is shorthand for multiple OR conditions. Query 1 returns 8 rows (all except the 2 HR employees — Priya and Ishita). Query 2 returns 6 rows (only IT and Finance employees). NOT IN is the inverse. Just remember the NULL caveat: if any value inside IN or NOT IN is NULL, behavior can be surprising.

**Output:**

```
Query 1 - 8 rows:
Aarav Sharma IT 75000
Rohan Gupta IT 92000
Ananya Singh Finance 68000
Vikram Reddy IT 45000
Sneha Iyer Marketing 58000
Karan Mehta Finance 81000
Aditya Rao Marketing 63000
Diya Nair IT 110000

Query 2 - 6 rows:
Aarav Sharma IT
Rohan Gupta IT
Ananya Singh Finance
Vikram Reddy IT
Karan Mehta Finance
Diya Nair IT
```

### BETWEEN for Range Checks

```sql
-- Salary between 50000 and 80000 (inclusive)
SELECT name, salary
FROM employees
WHERE salary BETWEEN 50000 AND 80000;

-- Joined in 2021
SELECT name, join_date
FROM employees
WHERE join_date BETWEEN '2021-01-01' AND '2021-12-31';
```

BETWEEN is inclusive on BOTH ends. Query 1 returns employees earning 50000 to 80000 inclusive — Priya at exactly 52000 is included, and Ananya at 68000 is included. Query 2 shows BETWEEN working on dates: employees who joined between Jan 1 and Dec 31, 2021 (both endpoints included).

**Output:**

```
Query 1 - 5 rows:
Aarav Sharma 75000
Priya Patel 52000
Ananya Singh 68000
Sneha Iyer 58000
Aditya Rao 63000

Query 2 - 2 rows:
Aarav Sharma 2021-03-15
Sneha Iyer 2021-09-30
```

### Complex WHERE: Combining Everything

```sql
-- Find name and salary of employees who:
-- are in IT or Finance
-- earn between 60000 and 100000
-- joined before 2022
SELECT name AS employee, department, salary, join_date
FROM employees
WHERE department IN ('IT', 'Finance')
  AND salary BETWEEN 60000 AND 100000
  AND join_date < '2022-01-01';
```

This is a realistic interview question that combines aliasing, IN, BETWEEN, and a date comparison with AND. Let us trace: IT/Finance gives us Aarav, Rohan, Ananya, Vikram, Karan, Diya. Salary 60000-100000 removes Vikram (45000) and Diya (110000). Join date < 2022 removes Ananya (2022-11-05). Final: Aarav, Rohan, Karan.

**Output:**

```
employee         department  salary   join_date
Aarav Sharma     IT          75000    2021-03-15
Rohan Gupta      IT          92000    2019-01-10
Karan Mehta      Finance     81000    2020-02-14
(3 rows)
```

### Using NOT to Invert a Condition

```sql
-- Employees NOT earning between 50000 and 70000
SELECT name, salary
FROM employees
WHERE NOT (salary BETWEEN 50000 AND 70000);

-- Equivalent:
SELECT name, salary
FROM employees
WHERE salary < 50000 OR salary > 70000;
```

The NOT operator inverts any boolean condition. `NOT (salary BETWEEN 50000 AND 70000)` means salary is either below 50000 or above 70000. Both queries return identical results. Use whichever reads more clearly — for this particular case the OR version is arguably cleaner.

**Output:**

```
name             salary
Aarav Sharma     75000
Rohan Gupta      92000
Vikram Reddy     45000
Karan Mehta      81000
Ishita Kumar     47000
Diya Nair        110000
(6 rows)
```

## Common Mistakes

### Using == Instead of = for Equality

**Wrong:**

```
SELECT * FROM employees WHERE department == 'IT';
```

ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '== 'IT'' at line 1

**Correct:**

```
SELECT * FROM employees WHERE department = 'IT';
```

SQL uses a single `=` for both assignment and equality comparison. Writing `==` is a syntax error. This is the most common mistake for students coming from Python, JavaScript, Java, or C++. Unlike those languages, SQL does not distinguish `=` from `==`.

### Missing Parentheses When Mixing AND and OR

**Wrong:**

```
-- Goal: IT or HR employees earning over 50000
SELECT name FROM employees
WHERE department = 'IT' OR department = 'HR' AND salary > 50000;
```

No syntax error, but returns WRONG results. Returns all IT employees (even low earners like Vikram at 45000) plus HR employees above 50000. AND binds tighter than OR.

**Correct:**

```
SELECT name FROM employees
WHERE (department = 'IT' OR department = 'HR') AND salary > 50000;
```

SQL evaluates `AND` before `OR`, so the wrong query is interpreted as `department = 'IT' OR (department = 'HR' AND salary > 50000)`. Always use parentheses when mixing AND and OR — even when they seem redundant. This is a bug that passes code review unless you trace through a real row.

### Using Double Quotes for String Literals

**Wrong:**

```
-- In strict mode, this fails:
SELECT * FROM employees WHERE name = "Aarav Sharma";
```

In MySQL with ANSI_QUOTES mode enabled, this fails because double quotes mean column names, not strings. In strict databases like PostgreSQL with default settings, this always fails: ERROR: column "Aarav Sharma" does not exist

**Correct:**

```
SELECT * FROM employees WHERE name = 'Aarav Sharma';
```

The SQL standard uses single quotes for string literals and double quotes for identifiers (like column names containing spaces). MySQL is lenient and often accepts double quotes for strings, but this is non-portable. Always use single quotes for strings to keep your code working across databases.

### NOT IN with NULL Returns Empty

**Wrong:**

```
-- If some departments are NULL in a subquery:
SELECT name FROM employees
WHERE department NOT IN ('IT', 'HR', NULL);
```

No error, but returns ZERO rows — even for employees in Finance or Marketing!

**Correct:**

```
SELECT name FROM employees
WHERE department NOT IN ('IT', 'HR')
  AND department IS NOT NULL;
```

When NULL is in the NOT IN list, SQL evaluates `department != NULL` which is NULL (not TRUE and not FALSE), and WHERE rejects non-TRUE results. This is a production-grade bug that happens most often with subqueries. Always filter out NULLs first or use `NOT EXISTS` instead.

### Thinking BETWEEN is Exclusive on One End

**Wrong:**

```
-- Rohan wants salaries strictly between 50000 and 80000
SELECT name FROM employees WHERE salary BETWEEN 50000 AND 80000;
```

No error, but includes 50000 and 80000 (Rohan expected those excluded). Priya at exactly 52000 is returned — which is fine — but if someone were at exactly 50000 or 80000, they would be included too.

**Correct:**

```
-- For strict (exclusive) range, use > and <
SELECT name FROM employees WHERE salary > 50000 AND salary < 80000;
```

`BETWEEN x AND y` is equivalent to `>= x AND <= y` — inclusive on BOTH ends. Many students assume one end is exclusive. When you want strict inequality, write the comparisons out explicitly. This matters most with date ranges and page-boundary values.

## Summary

- SELECT retrieves data. The syntax is SELECT column_list FROM table_name WHERE conditions. Every SQL query starts here.
- Use SELECT * for quick exploration only. In production code, always list columns explicitly — it is safer, faster, and self-documenting.
- Rename columns with AS: SELECT name AS employee_name. Always include AS explicitly for readability, even though it is technically optional.
- SQL uses single = for equality comparison (not ==). For inequality, both != and <> work. String literals use single quotes.
- Combine conditions with AND (both true), OR (at least one true), NOT (invert). AND is evaluated before OR — use parentheses when mixing them.
- IN (value1, value2, ...) is shorthand for multiple OR conditions. NOT IN is the inverse. Beware: NOT IN with any NULL in the list returns zero rows.
- BETWEEN x AND y is inclusive on BOTH ends — equivalent to >= x AND <= y. Works on numbers, dates, and strings. Use > and < for strict ranges.
- Date literals use single quotes in YYYY-MM-DD format: '2021-03-15'. Comparing dates uses the same operators as numbers.
- A complete query reads top-down: which columns, which table, which rows (WHERE). You will write thousands of these in your career.
- Golden rule: when mixing AND and OR, always use parentheses. Missing parentheses produce queries that parse fine but return wrong data — the worst kind of bug.

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/select-basics-and-where/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/select-basics-and-where/practice/*
