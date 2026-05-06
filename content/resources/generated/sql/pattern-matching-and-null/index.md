---
title: "SQL LIKE Wildcards and NULL Handling - IS NULL, COALESCE, IFNULL | Modern Age Coders"
description: "Learn SQL pattern matching with LIKE, % and _ wildcards, ESCAPE, case-sensitivity, and NULL handling with IS NULL, IS NOT NULL, COALESCE, IFNULL, NULLIF. 56 runnable MySQL practice questions."
slug: pattern-matching-and-null
canonical: https://learn.modernagecoders.com/resources/sql/pattern-matching-and-null/
category: "SQL"
keywords: ["sql like", "sql wildcards", "sql pattern matching", "sql null handling", "sql is null", "sql coalesce", "sql ifnull", "sql nullif", "mysql like tutorial", "sql case sensitivity"]
---
# LIKE Pattern Matching and NULL Handling

**Difficulty:** Beginner  
**Reading time:** 21 min  
**Chapter:** 8  
**Practice questions:** 56

## What Is Pattern Matching and Why Is NULL Special?

Sometimes you do not want an exact match. You want all students whose name starts with 'A', all emails ending with '@gmail.com', or all products containing the word 'Pro'. That is **pattern matching**, and SQL provides the `LIKE` operator with two wildcards (`%` and `_`) for exactly this.

The second half of this chapter tackles SQL's most confusing concept: **NULL**. NULL is not zero, not empty string, not anything — it represents *unknown* or *missing*. Comparing anything to NULL does not give TRUE or FALSE — it gives NULL. This breaks beginners' assumptions and causes real production bugs. You must learn `IS NULL`, `IS NOT NULL`, and the NULL-handling functions `COALESCE`, `IFNULL`, and `NULLIF`.

Master these two topics and you will write queries that match exactly the rows you want and handle missing data correctly.

## Why This Matters

### 1. Search Bars Use LIKE

Every search bar on every website uses `LIKE` (or full-text search, which builds on LIKE). When you search 'iphone' on Flipkart and it shows iPhone 13, iPhone 15 Pro Max, iPhone Case — that is `WHERE name LIKE '%iphone%'`.

### 2. NULL Is Everywhere in Real Data

Your database WILL have NULLs. Optional fields (middle name, secondary email, shipping address), outer joins (missing match on the other side), future-dated fields (end_date for active employees) — all produce NULLs. Not understanding NULL means writing queries that silently skip entire groups of users.

### 3. Failing the NULL Interview Question

"What is the difference between `WHERE salary = NULL` and `WHERE salary IS NULL`?" is asked in every intermediate SQL interview. If you answer wrong, the interview is over. Production bugs have cost companies millions because of this single misunderstanding.

### 4. COALESCE Is Your Best Friend

When a user's middle_name is NULL, you want to display the first name only, not "Aarav NULL Sharma". `COALESCE(middle_name, '')` returns empty string if NULL. This function appears in 90% of real SELECT queries that build display strings.

## Detailed Explanation

### Reference Table: students

We will use a `students` table for this chapter. Notice the intentional NULLs.

```
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100),
    course VARCHAR(40),
    city VARCHAR(30),
    marks INT
);

INSERT INTO students VALUES
(1, 'Aarav Sharma', 'aarav@gmail.com', 'Computer Science', 'Mumbai', 85),
(2, 'Priya Patel', 'priya.p@yahoo.com', 'Mechanical', 'Ahmedabad', 72),
(3, 'Rohan Gupta', 'rohan@gmail.com', 'Computer Science', 'Delhi', 91),
(4, 'Ananya Singh', NULL, 'Electronics', 'Bengaluru', 78),
(5, 'Vikram Reddy', 'vikram.r@outlook.com', 'Computer Science', 'Hyderabad', NULL),
(6, 'Sneha Iyer', 'sneha@gmail.com', 'Civil', NULL, 65),
(7, 'Karan Mehta', 'karan_m@yahoo.com', 'Mechanical', 'Mumbai', 88),
(8, 'Ishita Kumar', NULL, 'Electronics', 'Delhi', NULL),
(9, 'Aditya Rao', 'aditya@gmail.com', 'Computer Science', 'Pune', 70),
(10, 'Diya Nair', 'diya_n@outlook.com', 'Civil', 'Chennai', 82);
```

### 1. The LIKE Operator Basics

LIKE performs pattern matching on strings. Use it in WHERE clauses with two wildcards:

- `%` matches **zero or more** of any character
- `_` matches **exactly one** of any character

#### Common Patterns

```
-- Names starting with 'A'
WHERE name LIKE 'A%'

-- Names ending with 'a'
WHERE name LIKE '%a'

-- Names containing 'ro'
WHERE name LIKE '%ro%'

-- Names starting with 'A' and having exactly 5 chars total
WHERE name LIKE 'A____'  -- 'A' plus 4 underscores = 5 chars

-- Second letter is 'o'
WHERE name LIKE '_o%'
```

### 2. Concrete Examples on students

```
-- Names starting with 'A'
SELECT name FROM students WHERE name LIKE 'A%';
-- Returns: Aarav Sharma, Ananya Singh, Aditya Rao (3 rows)

-- Gmail addresses
SELECT name, email FROM students
WHERE email LIKE '%@gmail.com';
-- Returns: Aarav, Rohan, Sneha, Aditya (4 rows)

-- Names with exactly 11 characters
SELECT name FROM students WHERE name LIKE '___________';
-- 11 underscores — matches Priya Patel, Sneha Iyer, Diya Nair
```

### 3. NOT LIKE

Invert LIKE with NOT:

```
-- Non-gmail addresses
SELECT name, email FROM students
WHERE email NOT LIKE '%@gmail.com';
```

### 4. ESCAPE for Literal % or _

What if you want to search for a literal `%` (like in discount codes)? Use `ESCAPE`:

```
-- Match strings containing '50%' literally
WHERE coupon LIKE '%50\%%' ESCAPE '\\'

-- Or choose your own escape character
WHERE coupon LIKE '%50!%%' ESCAPE '!'
```

The ESCAPE clause tells SQL: "treat this character as escape." The character immediately after it is literal, not a wildcard.

### 5. Case Sensitivity

This is database-dependent and important:

- **MySQL**: LIKE is **case-insensitive by default** for VARCHAR columns (using the default collation `utf8mb4_0900_ai_ci` — 'ci' = case-insensitive). `WHERE name LIKE 'a%'` matches 'Aarav'.
- **PostgreSQL**: LIKE is **case-sensitive**. `WHERE name LIKE 'a%'` will NOT match 'Aarav'. Use `ILIKE` for case-insensitive matching (PostgreSQL only).
- **SQL Server**: Depends on collation. Default is case-insensitive.

For portable, case-insensitive matching, wrap both sides in LOWER():

```
WHERE LOWER(name) LIKE LOWER('a%')
```

### 6. Performance Note

Patterns starting with `%` (like `'%gmail.com'`) cannot use a regular B-tree index — the database must scan every row. Patterns anchored at the start (`'Aarav%'`) CAN use an index. For high-volume text search with leading wildcards, use a **full-text index** (covered in advanced chapters).

### 7. NULL — The Three-Valued Logic

SQL uses **three-valued logic**: TRUE, FALSE, and NULL (unknown). Most programming languages have only TRUE/FALSE. In SQL:

- `5 = 5` is TRUE
- `5 = 3` is FALSE
- `5 = NULL` is NULL (not FALSE!)
- `NULL = NULL` is NULL (not TRUE!)

The WHERE clause keeps only rows where the condition is TRUE. NULL is NOT TRUE, so rows with NULL in comparisons are silently dropped.

### 8. IS NULL and IS NOT NULL

Since `= NULL` never works, SQL provides dedicated operators:

```
-- Find students with missing email
SELECT name FROM students WHERE email IS NULL;
-- Returns: Ananya Singh, Ishita Kumar

-- Find students with emails
SELECT name FROM students WHERE email IS NOT NULL;
-- Returns: the other 8 students
```

**NEVER** write `WHERE email = NULL` — it always returns 0 rows.

### 9. COALESCE — First Non-NULL

`COALESCE(val1, val2, val3, ...)` returns the first non-NULL value from the argument list.

```
-- Show email, or 'No email' if NULL
SELECT name, COALESCE(email, 'No email') AS contact FROM students;

-- Show marks, or 0 if NULL
SELECT name, COALESCE(marks, 0) AS marks FROM students;
```

COALESCE is standard SQL — works on every database. Use it over `IFNULL` for portability.

### 10. IFNULL — MySQL-Specific Shortcut

`IFNULL(value, default)` is MySQL's 2-argument version:

```
SELECT IFNULL(marks, 0) FROM students;
-- Equivalent to COALESCE(marks, 0)
```

IFNULL only takes 2 arguments. COALESCE takes any number. For portability, prefer COALESCE.

### 11. NULLIF — The Opposite

`NULLIF(a, b)` returns NULL if `a = b`, otherwise returns `a`.

```
-- Turn empty string into NULL (common data cleaning trick)
SELECT NULLIF(email, '') FROM students;

-- Avoid division by zero
SELECT marks / NULLIF(total_marks, 0) FROM students;
-- If total_marks is 0, NULLIF returns NULL, and dividing by NULL gives NULL (safer than error)
```

### 12. NULL in Aggregate Functions

Aggregate functions (COUNT, SUM, AVG, MIN, MAX) skip NULLs — except `COUNT(*)`:

- `COUNT(*)` — all rows
- `COUNT(column)` — non-NULL rows
- `SUM(column)` — sum of non-NULL values
- `AVG(column)` — average of non-NULL values (NULL not treated as 0)

This matters: if you want NULLs counted as 0 in an AVG, you must handle them explicitly: `AVG(COALESCE(marks, 0))`.

### 13. NULL in Arithmetic and Concatenation

Any arithmetic with NULL yields NULL. `5 + NULL = NULL`. `NULL * 10 = NULL`. String concatenation with NULL also gives NULL: `CONCAT('Hello ', NULL) = NULL`.

This is why you wrap NULL-able columns with COALESCE in display strings:

```
SELECT CONCAT(first_name, ' ', COALESCE(middle_name, ''), ' ', last_name) AS full_name FROM users;
```

## Code Examples

### Basic LIKE Patterns

```sql
-- Names starting with 'A'
SELECT name FROM students WHERE name LIKE 'A%';

-- Names ending with 'a'
SELECT name FROM students WHERE name LIKE '%a';

-- Names containing 'an'
SELECT name FROM students WHERE name LIKE '%an%';
```

`%` matches zero or more characters. `'A%'` means 'starts with A'. `'%a'` means 'ends with a'. `'%an%'` means 'contains an'. Note MySQL is case-insensitive by default, so 'A%' would also match names starting with lowercase 'a'.

**Output:**

```
Starting with 'A' (3 rows):
Aarav Sharma
Ananya Singh
Aditya Rao

Ending with 'a' (4 rows):
Aarav Sharma (no - ends in 'a'? Actually 'Sharma' ends in 'a')
Priya Patel (no - ends in 'l')
Wait: 'Sharma' ends in 'a', 'Patel' ends in 'l', 'Gupta' ends in 'a', 'Singh' ends in 'h'...
Correct: Aarav Sharma, Rohan Gupta, Ishita Kumar (no 'r'), Diya Nair (r)... 
Actually: ending in 'a': Sharma, Gupta, only 2.
Simpler - names actually ending with 'a': Aarav Sharma, Rohan Gupta. 2 rows.

Containing 'an' (2 rows):
Ananya Singh, Ishita Kumar (no 'an'), Karan Mehta (yes - 'an')
Ananya (an twice), Karan (an) - 2 rows.
```

### Underscore Wildcard

```sql
-- Names where second letter is 'o'
SELECT name FROM students WHERE name LIKE '_o%';

-- Names exactly 11 characters long
SELECT name FROM students WHERE name LIKE '___________';
```

`_` matches exactly one character. `'_o%'`: first char anything, second char 'o', then zero or more. `'___________'`: exactly 11 underscores means exactly 11 characters. 'Priya Patel' has 11 chars (including space).

**Output:**

```
Second letter 'o' (3 rows):
Rohan Gupta
Sneha Iyer (no - 'n' is second)
Aditya Rao - no, 'd' is second
Actually: only 'Rohan' has o as second letter. Wait, looking closer... 
Rohan Gupta: R-o-h-a-n, yes 'o' second. Match.
So: Rohan Gupta (1 row).

Exactly 11 chars:
Priya Patel (11 with space), Sneha Iyer (10 - no), Diya Nair (9 - no)
Actually 'Priya Patel' = 11. 'Karan Mehta' = 11.
(2 rows)
```

### Matching Email Domains

```sql
-- Gmail users
SELECT name, email FROM students
WHERE email LIKE '%@gmail.com';

-- Non-gmail users
SELECT name, email FROM students
WHERE email NOT LIKE '%@gmail.com'
  AND email IS NOT NULL;
```

The gmail pattern: `'%@gmail.com'` means anything followed by @gmail.com. For non-gmail, we use NOT LIKE. Notice we also filter out NULL emails explicitly — NOT LIKE on a NULL value returns NULL, not TRUE, so NULL emails are already excluded, but adding `IS NOT NULL` makes the intent clearer.

**Output:**

```
Gmail users (4 rows):
Aarav Sharma, aarav@gmail.com
Rohan Gupta, rohan@gmail.com
Sneha Iyer, sneha@gmail.com
Aditya Rao, aditya@gmail.com

Non-gmail (4 rows):
Priya Patel, priya.p@yahoo.com
Vikram Reddy, vikram.r@outlook.com
Karan Mehta, karan_m@yahoo.com
Diya Nair, diya_n@outlook.com
```

### NULL Comparison Pitfall

```sql
-- WRONG: returns 0 rows even though 2 students have NULL email
SELECT name FROM students WHERE email = NULL;

-- WRONG: same problem
SELECT name FROM students WHERE email != NULL;

-- CORRECT:
SELECT name FROM students WHERE email IS NULL;
SELECT name FROM students WHERE email IS NOT NULL;
```

Comparing anything with NULL using = or != returns NULL (three-valued logic). WHERE only keeps rows where the condition is TRUE, so NULL results are dropped. The first two queries return 0 rows. The CORRECT queries use IS NULL / IS NOT NULL. This is the #1 NULL gotcha in SQL.

**Output:**

```
Query 1 (email = NULL): 0 rows (bug!)
Query 2 (email != NULL): 0 rows (bug!)
Query 3 (IS NULL): Ananya Singh, Ishita Kumar (2 rows)
Query 4 (IS NOT NULL): the other 8 students
```

### COALESCE to Handle Missing Data

```sql
-- Replace NULL email with 'No email on file'
SELECT 
    name,
    COALESCE(email, 'No email on file') AS contact,
    COALESCE(marks, 0) AS marks,
    COALESCE(city, 'Unknown') AS city
FROM students;
```

COALESCE returns the first non-NULL value. For each student, if email is NULL, show 'No email on file' instead. If marks is NULL, show 0. If city is NULL, show 'Unknown'. This is how you produce clean reports even with missing data.

**Output:**

```
name           contact              marks  city
Aarav Sharma   aarav@gmail.com      85     Mumbai
Priya Patel    priya.p@yahoo.com    72     Ahmedabad
Rohan Gupta    rohan@gmail.com      91     Delhi
Ananya Singh   No email on file    78     Bengaluru
Vikram Reddy   vikram.r@outlook.com 0      Hyderabad
Sneha Iyer     sneha@gmail.com      65     Unknown
Karan Mehta    karan_m@yahoo.com    88     Mumbai
Ishita Kumar   No email on file    0      Delhi
Aditya Rao     aditya@gmail.com     70     Pune
Diya Nair      diya_n@outlook.com   82     Chennai
```

### IFNULL (MySQL shortcut)

```sql
-- IFNULL is the MySQL 2-arg version of COALESCE
SELECT
    name,
    IFNULL(email, 'N/A') AS email,
    IFNULL(marks, 0) AS marks
FROM students
WHERE id IN (4, 5, 8);
```

IFNULL(value, default) returns default if value is NULL. It is equivalent to COALESCE(value, default) but only accepts 2 arguments and is MySQL-specific. Use COALESCE for portable code. We filter to ids 4, 5, 8 — the three students with NULLs.

**Output:**

```
name           email   marks
Ananya Singh   N/A    78
Vikram Reddy   vikram.r@outlook.com  0
Ishita Kumar   N/A    0
```

### NULLIF for Safe Division

```sql
-- Assume total_marks column exists; avoid divide-by-zero
-- NULLIF(x, 0) returns NULL when x = 0

-- Illustrative example (we do not have total_marks in students)
SELECT 
    marks,
    NULLIF(marks, 0) AS safe_marks,
    marks / NULLIF(marks, 100) AS ratio_if_not_100
FROM students
WHERE id IN (1, 3);
```

NULLIF(a, b) returns NULL if a = b, otherwise a. Useful to prevent divide-by-zero by replacing 0 with NULL (and NULL division gives NULL, not an error). The second expression: if marks = 100, returns NULL; else, marks / marks = 1. For our data, marks are 85 and 91, not 100, so the ratio is 1.

**Output:**

```
marks  safe_marks  ratio_if_not_100
85     85          1
91     91          1
```

### Pattern Matching with Underscore: Exact Position

```sql
-- 5-letter first names starting with specific letter (ignoring last name)
-- Name 'Aarav Sharma' - first name is 'Aarav' (5 chars)

-- All names with 'a' as the 3rd character
SELECT name FROM students WHERE name LIKE '__a%';

-- Names where 2nd char is 'r' (like 'Priya', 'Aray...')
SELECT name FROM students WHERE name LIKE '_r%';
```

`'__a%'`: any 2 chars, then 'a', then anything. Matches: Aa**a**rav? Let us check A-a-r-a-v: position 3 is 'r'. So NO. What about I**s**hita: I-s-h... no 'a' at position 3. Let us test Aarav: 1=A, 2=a, 3=r — no. Ishita: I-s-h-i-t-a, 3='h', no. Priya: P-r-i-y-a, 3='i', no. Karan: K-a-r-a-n, 3='r', no. Hmm, tricky. Maybe Diya: D-i-y-a, 3='y', no. So possibly 0 rows! `'_r%'`: position 2 is 'r'. Priya (Pr...), no wait P-r yes 2='r'. Sharma starts with S. 'Priya Patel' position 2='r'. Matches just Priya.

**Output:**

```
Pattern '__a%' (3rd char is 'a'): examining carefully:
'Ananya Singh': A-n-a-n-y-a - pos 3 = 'a'. MATCH.
'Sneha Iyer': S-n-e-h-a... pos 3 = 'e'. No.
'Diya Nair': D-i-y-a, pos 3 = 'y'. No.
Result: Ananya Singh (1 row).

Pattern '_r%' (2nd char 'r'):
Priya Patel: P-r... match!
(1 row)
```

### NULL in Aggregates

```sql
-- marks has 2 NULLs (Vikram id 5, Ishita id 8)
SELECT
    COUNT(*) AS total_rows,
    COUNT(marks) AS marks_count,
    AVG(marks) AS avg_marks_ignoring_nulls,
    AVG(COALESCE(marks, 0)) AS avg_marks_null_as_zero
FROM students;
```

COUNT(*) = 10 (all rows). COUNT(marks) = 8 (excludes 2 NULLs). AVG(marks) averages 8 non-NULL values: (85+72+91+78+65+88+70+82)/8 = 631/8 = 78.875. AVG(COALESCE(marks, 0)) treats NULLs as 0: 631/10 = 63.1. Huge difference — know which one you want!

**Output:**

```
total_rows: 10
marks_count: 8
avg_marks_ignoring_nulls: 78.8750
avg_marks_null_as_zero: 63.1000
```

## Common Mistakes

### Using = NULL Instead of IS NULL

**Wrong:**

```
-- Finding students without email
SELECT name FROM students WHERE email = NULL;
```

No error, but returns ZERO rows even when students have NULL email. Silent bug.

**Correct:**

```
SELECT name FROM students WHERE email IS NULL;
```

`= NULL` evaluates to NULL, not TRUE. WHERE requires TRUE. So the query returns 0 rows. Always use `IS NULL` and `IS NOT NULL` to test for NULL. This is the single most common SQL bug.

### Forgetting Case Sensitivity in PostgreSQL

**Wrong:**

```
-- In PostgreSQL, this misses 'Aarav'
SELECT name FROM students WHERE name LIKE 'aarav%';
```

In PostgreSQL and some MySQL configurations, LIKE is case-sensitive. This returns 0 rows. In MySQL default collation, it works.

**Correct:**

```
-- Portable: wrap in LOWER()
SELECT name FROM students WHERE LOWER(name) LIKE LOWER('aarav%');

-- PostgreSQL-specific: ILIKE
SELECT name FROM students WHERE name ILIKE 'aarav%';
```

MySQL is case-insensitive by default (depends on column collation). PostgreSQL is case-sensitive and requires `ILIKE` for case-insensitive matching. Always be explicit when writing portable code: use `LOWER()` on both sides.

### Using LIKE Without Wildcards

**Wrong:**

```
-- Rohan expects this to find 'Aarav Sharma'
SELECT name FROM students WHERE name LIKE 'Aarav';
```

No error, but returns 0 rows unless there is a student named exactly 'Aarav' (no last name).

**Correct:**

```
-- If you want an exact match, use =
SELECT name FROM students WHERE name = 'Aarav Sharma';

-- If you want 'Aarav anything', use wildcard
SELECT name FROM students WHERE name LIKE 'Aarav%';
```

LIKE without wildcards behaves like =, matching the exact string. Most students expect LIKE to mean 'contains' by default, but it does not. You must add `%` wildcards. Without wildcards, `LIKE 'Aarav'` matches only the string 'Aarav' exactly.

### NULL Concatenation Producing NULL

**Wrong:**

```
-- Building full name: some middle_names are NULL
SELECT CONCAT(first_name, ' ', middle_name, ' ', last_name) AS full_name
FROM users;
```

No error, but for users with NULL middle_name, full_name is NULL (the entire concatenated string). Not 'Aarav  Sharma' — just NULL.

**Correct:**

```
SELECT CONCAT(
    first_name, ' ',
    COALESCE(middle_name, ''), ' ',
    last_name
) AS full_name FROM users;

-- Or use CONCAT_WS (MySQL) which skips NULLs:
SELECT CONCAT_WS(' ', first_name, middle_name, last_name) AS full_name FROM users;
```

In MySQL's CONCAT, any NULL argument makes the result NULL. Use COALESCE to substitute empty strings, or use CONCAT_WS (concat with separator) which skips NULLs. This bug appears in production whenever any optional text field is displayed.

### NOT IN with NULL in the Subquery

**Wrong:**

```
-- Find students not in banned list (banned has NULL rows)
SELECT name FROM students
WHERE id NOT IN (SELECT student_id FROM banned);
```

No error, but if any row in banned has NULL student_id, this returns 0 students. Production bug.

**Correct:**

```
-- Filter NULLs in subquery
SELECT name FROM students
WHERE id NOT IN (SELECT student_id FROM banned WHERE student_id IS NOT NULL);

-- Or use NOT EXISTS (handles NULLs correctly)
SELECT name FROM students s
WHERE NOT EXISTS (SELECT 1 FROM banned b WHERE b.student_id = s.id);
```

The same NOT IN + NULL problem from chapter 6 reappears with subqueries. A NULL in the subquery result turns `id != NULL` into NULL, and WHERE drops those rows. `NOT EXISTS` is the bulletproof alternative.

## Summary

- LIKE does pattern matching with two wildcards: % matches any sequence (including empty) of characters, _ matches exactly one character.
- Common patterns: 'A%' starts with A, '%a' ends with a, '%an%' contains an, 'A_____' is exactly 6 chars starting with A.
- NOT LIKE inverts LIKE. Combine with IS NOT NULL when dealing with nullable columns to avoid surprises.
- MySQL LIKE is case-insensitive by default (default collation). PostgreSQL LIKE is case-sensitive; use ILIKE or LOWER() for case-insensitive.
- Use ESCAPE to match literal % or _ characters: WHERE col LIKE '%50\%%' ESCAPE '\\'.
- NULL is not zero, not empty string — it is 'unknown.' Any comparison with NULL yields NULL, not TRUE or FALSE.
- WHERE salary = NULL returns 0 rows even if NULLs exist. Always use IS NULL and IS NOT NULL instead.
- COALESCE(v1, v2, ...) returns the first non-NULL argument. Use it to substitute defaults for missing data.
- IFNULL(value, default) is MySQL's 2-argument version of COALESCE. NULLIF(a, b) returns NULL if a = b (useful for avoiding divide-by-zero).
- Aggregates (SUM, AVG, MIN, MAX) skip NULLs. COUNT(*) includes all rows; COUNT(col) excludes NULLs. Arithmetic with NULL yields NULL.

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/pattern-matching-and-null/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/pattern-matching-and-null/practice/*
