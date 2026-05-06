---
title: "SQL String Functions Tutorial - CONCAT, SUBSTRING, UPPER, TRIM, REPLACE | Modern Age Coders"
description: "Master MySQL string functions with real examples. Learn CONCAT, CONCAT_WS, SUBSTRING, LEFT, RIGHT, UPPER, LOWER, TRIM, REPLACE, LOCATE, LENGTH vs CHAR_LENGTH, LPAD, RPAD. Includes 60+ practice questions on cleaning and formatting text data."
slug: string-functions
canonical: https://learn.modernagecoders.com/resources/sql/string-functions/
category: "SQL"
keywords: ["sql string functions", "mysql string functions", "concat sql", "substring sql", "upper lower sql", "sql trim", "sql replace", "sql locate", "char_length vs length", "mysql string manipulation"]
---
# String Functions in SQL

**Difficulty:** Intermediate  
**Reading time:** 38 min  
**Chapter:** 15  
**Practice questions:** 55

## What Are SQL String Functions?

String functions transform and extract information from text (VARCHAR, TEXT, CHAR) values. Real-world data is messy: names with extra spaces, inconsistent capitalization, phone numbers with random separators, emails in mixed case. Before you can report on it, you have to clean it — and clean SQL string functions are the way.

MySQL ships dozens of string functions. This chapter covers the 20 or so that you will actually use every week as a data analyst or backend developer.

### Sample Table Used Throughout This Chapter

```
CREATE TABLE customers (
    id INT PRIMARY KEY,
    full_name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    city VARCHAR(50)
);

INSERT INTO customers VALUES
(1, '  Aarav Kumar  ',    'Aarav.Kumar@Gmail.COM', '+91-98765-43210',  'Bengaluru'),
(2, 'priya SHARMA',       'priya@MAIL.com',        '+91 9876 543 211', 'mumbai'),
(3, 'Rohan  Mehta',       'ROHAN@mail.com',        '9876543212',       'Delhi'),
(4, 'meera-iyer',         'meera@MAIL.com',        '091-9876-543213',  'chennai'),
(5, 'Vikram Singh Rajput','v.singh@MAIL.CO.IN',    '+91.9876.543.214', 'Pune');
```

This is the kind of real data you will see in actual databases: leading/trailing spaces, inconsistent casing, irregular phone formatting, mixed-case emails. Let's clean it.

## Why String Functions Matter

### 1. Every Real Database Has Dirty Text

User-entered data is always messy. Even 'clean' data from APIs has quirks. Before you can match, group, or report, you need normalization: trim spaces, lowercase emails, format phone numbers consistently. String functions let you do this at the database level, often faster than in application code.

### 2. Searching and Matching Depends on It

Equality comparisons on VARCHAR are case-sensitive in many collations. Email validation, name matching, deduplication — all need LOWER() or TRIM() or both. If you do not normalize, 'Aarav Kumar' and 'aarav kumar' are different customers to SQL, which is wrong.

### 3. Reporting Requires Formatting

Concatenate first and last names for display. Mask credit card numbers showing only the last 4 digits. Format phone numbers for printing. Truncate long descriptions. All of this is string function work.

### 4. Interview Questions Use String Functions

'Extract the domain from an email,' 'Get the first name,' 'Format names in proper case,' 'Find all customers with a specific prefix,' 'Count occurrences of a character.' These appear in real SQL interviews regularly.

## Detailed Explanation

### 1. CONCAT and CONCAT_WS - Joining Strings

```
SELECT CONCAT('Hello', ' ', 'World');           -- 'Hello World'
SELECT CONCAT('User: ', id, ', Name: ', full_name) FROM customers;

-- CONCAT_WS: CONCAT With Separator
SELECT CONCAT_WS(', ', 'Aarav', 'Bengaluru', 'India');  -- 'Aarav, Bengaluru, India'
SELECT CONCAT_WS(' - ', first_name, middle_name, last_name) FROM people;
```

**Gotcha:** `CONCAT` returns NULL if ANY argument is NULL. `CONCAT_WS` skips NULL arguments gracefully (but returns NULL only if the separator itself is NULL).

### 2. LENGTH vs CHAR_LENGTH

This matters for non-ASCII text:

- **LENGTH(str)**: returns the number of *bytes*.
- **CHAR_LENGTH(str)** (or CHARACTER_LENGTH): returns the number of *characters*.

```
SELECT LENGTH('hello');            -- 5 bytes
SELECT CHAR_LENGTH('hello');       -- 5 chars

SELECT LENGTH('नमस्ते');           -- 18 bytes (UTF-8)
SELECT CHAR_LENGTH('नमस्ते');       -- 6 chars
```

For anything user-facing (validating max length, counting), use CHAR_LENGTH. LENGTH is for storage calculations.

### 3. UPPER, LOWER, INITCAP

```
SELECT UPPER('hello');             -- 'HELLO'
SELECT LOWER('HELLO');             -- 'hello'
-- INITCAP capitalizes the first letter of each word
-- Available in PostgreSQL and Oracle; NOT in MySQL
-- MySQL workaround using functions and string manipulation shown later
```

Use LOWER() for case-insensitive comparisons (on case-sensitive collations):

```
-- Find all variants of an email
SELECT * FROM customers WHERE LOWER(email) = 'priya@mail.com';
```

### 4. SUBSTRING (SUBSTR) - Extract a Portion

Syntax: `SUBSTRING(str, start, length)` or `SUBSTRING(str FROM start FOR length)`. Position is 1-based in MySQL.

```
SELECT SUBSTRING('Bengaluru', 1, 4);       -- 'Beng'
SELECT SUBSTRING('Bengaluru', 4);          -- 'galuru' (from position 4 to end)
SELECT SUBSTR('Bengaluru', -4);            -- 'luru' (last 4 chars, negative = from end)
```

### 5. LEFT and RIGHT

```
SELECT LEFT('Bengaluru', 4);    -- 'Beng'
SELECT RIGHT('Bengaluru', 4);   -- 'luru'

-- Get last 4 digits of a phone number
SELECT RIGHT(phone, 4) FROM customers;
```

LEFT/RIGHT are more readable than SUBSTRING when you want a prefix or suffix.

### 6. TRIM, LTRIM, RTRIM

```
-- Remove whitespace from both ends
SELECT TRIM('  Aarav Kumar  ');         -- 'Aarav Kumar'
-- Left only
SELECT LTRIM('  Aarav');                -- 'Aarav'
-- Right only
SELECT RTRIM('Aarav  ');                -- 'Aarav'
-- Remove specific characters
SELECT TRIM(LEADING '0' FROM '00012345');  -- '12345'
SELECT TRIM(TRAILING '.' FROM 'hello...');  -- 'hello'
SELECT TRIM(BOTH '-' FROM '---abc---');     -- 'abc'
```

For cleaning messy input: `TRIM()` before comparison and before storage.

### 7. REPLACE - Substitute Substrings

```
SELECT REPLACE('+91-98765-43210', '-', '');   -- '+919876543210'
SELECT REPLACE(email, '@gmail.com', '@GMAIL.COM') FROM customers;
SELECT REPLACE('Hello World', 'World', 'SQL'); -- 'Hello SQL'
```

REPLACE is case-sensitive. To replace case-insensitively in MySQL, you need REGEXP_REPLACE (MySQL 8.0+).

### 8. LOCATE, INSTR, POSITION - Find a Substring

All three do the same thing with slightly different argument orders. Return the 1-based position of a substring, or 0 if not found.

```
SELECT LOCATE('@', 'aarav@mail.com');   -- 6
SELECT INSTR('aarav@mail.com', '@');   -- 6
SELECT POSITION('@' IN 'aarav@mail.com'); -- 6

-- LOCATE with start position
SELECT LOCATE('a', 'banana', 3);   -- finds 'a' starting from position 3
```

Combined with SUBSTRING to extract parts:

```
-- Extract the domain from an email
SELECT SUBSTRING(email, LOCATE('@', email) + 1)
FROM customers;
```

### 9. LPAD, RPAD - Padding

```
SELECT LPAD('42', 5, '0');     -- '00042'
SELECT RPAD('abc', 6, '.');    -- 'abc...'

-- Format IDs as 6-digit codes
SELECT LPAD(id, 6, '0') FROM products;
-- 1 -> '000001', 42 -> '000042'
```

### 10. REVERSE, REPEAT

```
SELECT REVERSE('hello');     -- 'olleh'
SELECT REPEAT('ab', 4);      -- 'abababab'
```

REVERSE is occasionally useful (palindrome checks, finding the last delimiter). REPEAT is common in generating test data or visual separators.

### 11. FORMAT - Numeric to Thousands-Separated String

```
SELECT FORMAT(1234567.891, 2);     -- '1,234,567.89'
SELECT FORMAT(1234567.891, 0);     -- '1,234,568'
```

Handy for report output. Note: the result is a string.

### 12. Cleaning the Sample Customer Data

```
-- Clean the messy customer data into a presentable form
SELECT
    id,
    TRIM(REPLACE(REPLACE(full_name, '  ', ' '), '-', ' ')) AS clean_name,
    LOWER(email) AS clean_email,
    REPLACE(REPLACE(REPLACE(REPLACE(phone, '-', ''), ' ', ''), '.', ''), '+', '') AS clean_phone,
    CONCAT(UPPER(LEFT(city, 1)), LOWER(SUBSTRING(city, 2))) AS proper_city
FROM customers;
```

Expected output:

```
+----+--------------------+-----------------------+------------------+-----------+
| id | clean_name         | clean_email           | clean_phone      | proper_city|
+----+--------------------+-----------------------+------------------+-----------+
|  1 | Aarav Kumar        | aarav.kumar@gmail.com | 919876543210     | Bengaluru |
|  2 | priya SHARMA       | priya@mail.com        | 919876543211     | Mumbai    |
|  3 | Rohan Mehta        | rohan@mail.com        | 9876543212       | Delhi     |
|  4 | meera iyer         | meera@mail.com        | 0919876543213    | Chennai   |
|  5 | Vikram Singh Rajput| v.singh@mail.co.in    | 919876543214     | Pune      |
+----+--------------------+-----------------------+------------------+-----------+
```

Note: we did not fix capitalization of names here. MySQL lacks INITCAP, so proper-case names require substring manipulation or user-defined functions.

### 13. Extract First Name - A Real Pattern

```
-- Everything before the first space
SELECT
    full_name,
    TRIM(SUBSTRING(TRIM(full_name), 1, LOCATE(' ', TRIM(full_name)) - 1)) AS first_name
FROM customers;

-- Handle the case where there is no space (single-word name)
SELECT
    CASE
        WHEN LOCATE(' ', TRIM(full_name)) > 0
        THEN SUBSTRING(TRIM(full_name), 1, LOCATE(' ', TRIM(full_name)) - 1)
        ELSE TRIM(full_name)
    END AS first_name
FROM customers;
```

### 14. Mask Sensitive Data

```
-- Show only last 4 digits of phone
SELECT CONCAT(REPEAT('X', CHAR_LENGTH(phone) - 4), RIGHT(phone, 4)) AS masked
FROM customers;

-- Show first 2 letters of email + xxxxx + domain
SELECT CONCAT(
    LEFT(email, 2),
    REPEAT('x', 5),
    SUBSTRING(email, LOCATE('@', email))
) AS masked_email
FROM customers;
```

## Code Examples

### CONCAT vs CONCAT_WS - Joining Values

```sql
SELECT
    id,
    CONCAT(full_name, ' <', email, '>') AS contact_card,
    CONCAT_WS(' | ', full_name, email, phone, city) AS summary
FROM customers
LIMIT 3;
```

CONCAT joins arguments with no separator. CONCAT_WS (With Separator) takes a separator as the first argument and inserts it between the rest. CONCAT_WS also skips NULL values; CONCAT returns NULL if any argument is NULL.

**Output:**

```
+----+-------------------------------------+----------------------------------------------------------------+
| id | contact_card                        | summary                                                        |
+----+-------------------------------------+----------------------------------------------------------------+
|  1 |   Aarav Kumar   <Aarav.Kumar@Gmail.COM> |   Aarav Kumar   | Aarav.Kumar@Gmail.COM | +91-98765-43210 | Bengaluru |
|  2 | priya SHARMA <priya@MAIL.com>       | priya SHARMA | priya@MAIL.com | +91 9876 543 211 | mumbai        |
|  3 | Rohan  Mehta <ROHAN@mail.com>       | Rohan  Mehta | ROHAN@mail.com | 9876543212 | Delhi                |
+----+-------------------------------------+----------------------------------------------------------------+
3 rows in set
```

### Clean Messy Names with TRIM and REPLACE

```sql
SELECT
    id,
    full_name AS original,
    -- Collapse multiple spaces, trim, replace dashes
    TRIM(REPLACE(REPLACE(full_name, '  ', ' '), '-', ' ')) AS cleaned,
    CHAR_LENGTH(TRIM(full_name)) AS clean_length
FROM customers;
```

`REPLACE(..., '  ', ' ')` collapses double spaces (note: does not handle 3+ spaces in one pass). `REPLACE(..., '-', ' ')` turns dashes into spaces. `TRIM` removes leading/trailing whitespace. CHAR_LENGTH shows the character count after cleaning.

**Output:**

```
+----+----------------------+--------------------+--------------+
| id | original             | cleaned            | clean_length |
+----+----------------------+--------------------+--------------+
|  1 |   Aarav Kumar        | Aarav Kumar        |           11 |
|  2 | priya SHARMA         | priya SHARMA       |           12 |
|  3 | Rohan  Mehta         | Rohan Mehta        |           11 |
|  4 | meera-iyer           | meera iyer         |           10 |
|  5 | Vikram Singh Rajput  | Vikram Singh Rajput|           19 |
+----+----------------------+--------------------+--------------+
5 rows in set
```

### Extract Email Domain Using LOCATE and SUBSTRING

```sql
SELECT
    email,
    SUBSTRING(email, 1, LOCATE('@', email) - 1) AS username,
    SUBSTRING(email, LOCATE('@', email) + 1)   AS domain
FROM customers;
```

LOCATE('@', email) returns the position of '@' (1-based). SUBSTRING with start and length extracts the username before '@'. Starting from LOCATE('@', email) + 1 without a length gives everything after '@' — the domain. LOWER(domain) would normalize it.

**Output:**

```
+----------------------+--------------+------------+
| email                | username     | domain     |
+----------------------+--------------+------------+
| Aarav.Kumar@Gmail.COM| Aarav.Kumar  | Gmail.COM  |
| priya@MAIL.com       | priya        | MAIL.com   |
| ROHAN@mail.com       | ROHAN        | mail.com   |
| meera@MAIL.com       | meera        | MAIL.com   |
| v.singh@MAIL.CO.IN   | v.singh      | MAIL.CO.IN |
+----------------------+--------------+------------+
5 rows in set
```

### Extract First Name Before First Space

```sql
SELECT
    full_name,
    TRIM(SUBSTRING(
        TRIM(full_name),
        1,
        CASE
            WHEN LOCATE(' ', TRIM(full_name)) = 0 THEN CHAR_LENGTH(TRIM(full_name))
            ELSE LOCATE(' ', TRIM(full_name)) - 1
        END
    )) AS first_name
FROM customers;
```

Trim first to remove leading spaces. Use LOCATE to find the first space. If there is no space (single-word name), take the whole string. The CASE handles both cases safely. SUBSTRING extracts chars 1 through space-position-1.

**Output:**

```
+----------------------+------------+
| full_name            | first_name |
+----------------------+------------+
|   Aarav Kumar        | Aarav      |
| priya SHARMA         | priya      |
| Rohan  Mehta         | Rohan      |
| meera-iyer           | meera-iyer |
| Vikram Singh Rajput  | Vikram     |
+----------------------+------------+
5 rows in set
-- 'meera-iyer' has no space, so entire string returned
```

### Format Phone Numbers - Remove All Separators

```sql
SELECT
    phone AS original,
    REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(phone, '-', ''), ' ', ''), '.', ''), '(', ''), ')', '') AS digits_only,
    RIGHT(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(phone, '-', ''), ' ', ''), '.', ''), '+', ''), '0', ''), 10) AS normalized_10_digit
FROM customers;
```

Chain REPLACE calls to strip every non-digit separator. The normalized version removes '+' and leading zeros, then takes the last 10 digits. For production, MySQL 8.0+ has REGEXP_REPLACE which is cleaner: `REGEXP_REPLACE(phone, '[^0-9]', '')`.

**Output:**

```
+------------------+---------------+---------------------+
| original         | digits_only   | normalized_10_digit |
+------------------+---------------+---------------------+
| +91-98765-43210  | +919876543210 | 9876543210          |
| +91 9876 543 211 | +919876543211 | 9876543211          |
| 9876543212       | 9876543212    | 9876543212          |
| 091-9876-543213  | 0919876543213 | 9876543213          |
| +91.9876.543.214 | +919876543214 | 9876543214          |
+------------------+---------------+---------------------+
5 rows in set
```

### LENGTH vs CHAR_LENGTH - Unicode Matters

```sql
SELECT
    'Hello' AS str,
    LENGTH('Hello')      AS byte_length,
    CHAR_LENGTH('Hello') AS char_length
UNION ALL
SELECT
    'नमस्ते',
    LENGTH('नमस्ते'),
    CHAR_LENGTH('नमस्ते')
UNION ALL
SELECT
    '  Aarav  ',
    LENGTH('  Aarav  '),
    CHAR_LENGTH('  Aarav  ');
```

For ASCII text, LENGTH and CHAR_LENGTH are equal. For UTF-8 text containing multi-byte characters (Hindi, Chinese, emoji), LENGTH counts bytes (often 3-4 per character) while CHAR_LENGTH counts characters. Always use CHAR_LENGTH for user-facing length limits.

**Output:**

```
+----------+-------------+-------------+
| str      | byte_length | char_length |
+----------+-------------+-------------+
| Hello    |           5 |           5 |
| नमस्ते   |          18 |           6 |
|   Aarav  |           9 |           9 |
+----------+-------------+-------------+
3 rows in set
```

### LPAD for ID Formatting

```sql
CREATE TABLE products (id INT, name VARCHAR(30));
INSERT INTO products VALUES (1,'Pen'),(42,'Notebook'),(375,'Laptop'),(9999,'Desk');

SELECT
    id,
    LPAD(id, 6, '0')               AS product_code,
    CONCAT('PRD-', LPAD(id, 6, '0')) AS sku
FROM products;
```

LPAD(value, target_length, pad_char) pads on the left. Useful for fixed-width product codes, invoice numbers, order IDs. CONCAT adds a prefix like 'PRD-' for a branded SKU format.

**Output:**

```
+------+--------------+-------------+
| id   | product_code | sku         |
+------+--------------+-------------+
|    1 | 000001       | PRD-000001  |
|   42 | 000042       | PRD-000042  |
|  375 | 000375       | PRD-000375  |
| 9999 | 009999       | PRD-009999  |
+------+--------------+-------------+
4 rows in set
```

### Case-Insensitive Email Deduplication

```sql
-- Find emails where the lowercase form appears more than once
SELECT
    LOWER(email) AS normalized_email,
    COUNT(*)     AS occurrences,
    GROUP_CONCAT(email) AS original_forms
FROM customers
GROUP BY LOWER(email)
HAVING COUNT(*) > 1;
```

Real-world duplicates often differ only in case: Aarav@GMAIL.com vs aarav@gmail.com. Normalize with LOWER(), then GROUP BY and HAVING COUNT > 1 to find duplicates. GROUP_CONCAT shows the original variants.

**Output:**

```
+------------------+-------------+----------------+
| normalized_email | occurrences | original_forms |
+------------------+-------------+----------------+
-- On sample data: no duplicates after normalization.
-- If you had aarav@gmail.com inserted twice with different cases, it would show up here.
+------------------+-------------+----------------+
0 rows in set
```

## Common Mistakes

### Using LENGTH When You Mean CHAR_LENGTH

**Wrong:**

```
-- Validate that a username is 5-15 characters
SELECT * FROM users WHERE LENGTH(username) BETWEEN 5 AND 15;
```

No error, but the check is wrong for non-ASCII names. A 5-character Hindi username might be 15 bytes (stored as UTF-8), so it incorrectly appears within the range when it should be caught as too short — or vice versa.

**Correct:**

```
SELECT * FROM users WHERE CHAR_LENGTH(username) BETWEEN 5 AND 15;
```

CHAR_LENGTH counts characters (what users see). LENGTH counts bytes (what storage uses). For user-facing validation, always use CHAR_LENGTH.

### CONCAT With NULL Returns NULL

**Wrong:**

```
-- middle_name is NULL for most people
SELECT CONCAT(first_name, ' ', middle_name, ' ', last_name) FROM people;
-- Returns NULL whenever middle_name IS NULL — full name is lost
```

No error, but the result is NULL for every person with a NULL middle name.

**Correct:**

```
-- Use CONCAT_WS (skips NULLs automatically)
SELECT CONCAT_WS(' ', first_name, middle_name, last_name) FROM people;

-- Or use COALESCE to replace NULL with empty string
SELECT CONCAT(first_name, ' ', COALESCE(middle_name, ''), ' ', last_name) FROM people;
```

CONCAT returns NULL if ANY argument is NULL. CONCAT_WS safely skips NULL arguments (unless the separator itself is NULL). COALESCE is another way to provide a default.

### SUBSTRING With Off-by-One Error

**Wrong:**

```
-- Intent: get the first 5 characters
SELECT SUBSTRING('Bengaluru', 0, 5);  -- returns '' in MySQL!
```

No error but returns an empty string or unexpected content. MySQL treats position 0 as special.

**Correct:**

```
SELECT SUBSTRING('Bengaluru', 1, 5);  -- 'Benga'
-- Or use LEFT for prefixes
SELECT LEFT('Bengaluru', 5);
```

MySQL's SUBSTRING is 1-indexed. Position 1 is the first character. Position 0 is undefined or treated as 'before the start'. Use LEFT(str, n) when you want a prefix — it is more readable.

### Forgetting REPLACE Is Case-Sensitive

**Wrong:**

```
-- Intent: mask 'Gmail' regardless of case
SELECT REPLACE(email, 'gmail', 'GMAIL') FROM customers;
-- 'Aarav.Kumar@Gmail.COM' unchanged!
```

No error, but case mismatches are not replaced.

**Correct:**

```
-- MySQL 8.0+: REGEXP_REPLACE with case-insensitive flag
SELECT REGEXP_REPLACE(email, 'gmail', 'GMAIL', 1, 0, 'i') FROM customers;

-- Older MySQL: uppercase first, then replace, or use LOWER to compare
SELECT REPLACE(LOWER(email), 'gmail', 'GMAIL') FROM customers;
```

REPLACE does exact (case-sensitive) substring matching. For case-insensitive replacement, either normalize the case first or use REGEXP_REPLACE with the 'i' flag in MySQL 8.0+.

## Summary

- CONCAT joins strings with no separator. CONCAT_WS takes a separator and safely skips NULL arguments. CONCAT returns NULL if any argument is NULL.
- LENGTH returns bytes; CHAR_LENGTH returns characters. For user-facing validation and Unicode text, use CHAR_LENGTH.
- UPPER and LOWER change case. MySQL has no INITCAP — proper case requires manual substring manipulation or a UDF.
- SUBSTRING(str, start, length) is 1-indexed. LEFT(str, n) and RIGHT(str, n) are more readable for prefixes and suffixes.
- TRIM removes whitespace; LTRIM and RTRIM remove from one side. TRIM with LEADING/TRAILING/BOTH and a specific character cleans other padding.
- REPLACE is case-sensitive. For case-insensitive replacement in MySQL 8.0+, use REGEXP_REPLACE with the 'i' flag.
- LOCATE, INSTR, POSITION all find a substring and return 1-based position (0 if not found). Combine with SUBSTRING to extract parts like email domains.
- LPAD and RPAD add padding to make strings a fixed length. Common use: formatting IDs like '000042' or SKUs like 'PRD-000042'.
- REVERSE and REPEAT are niche. FORMAT(n, d) formats a number with thousands separators and d decimals — returns a string.
- For cleaning data: TRIM then REPLACE to remove bad characters, LOWER for normalized comparison, CONCAT_WS for NULL-safe joining.

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/string-functions/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/string-functions/practice/*
