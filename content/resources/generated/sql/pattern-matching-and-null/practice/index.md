---
title: "Practice: LIKE Pattern Matching and NULL Handling"
description: "56 practice problems for LIKE Pattern Matching and NULL Handling in SQL"
slug: pattern-matching-and-null-practice
canonical: https://learn.modernagecoders.com/resources/sql/pattern-matching-and-null/practice/
category: "SQL"
---
# Practice: LIKE Pattern Matching and NULL Handling

**Total questions:** 56

## Topic-Specific Questions

### Q1. [Easy] Find all students whose name starts with 'A'.

*Hint:* LIKE 'A%'.

**Answer:** ```
SELECT name FROM students WHERE name LIKE 'A%';
```

Matches Aarav, Ananya, Aditya — 3 rows.

### Q2. [Easy] Find all students whose name ends with 'a'.

*Hint:* LIKE '%a'.

**Answer:** ```
SELECT name FROM students WHERE name LIKE '%a';
```

In our data: Aarav Sharma, Rohan Gupta, Ishita Kumar (no — ends in 'r'), Karan Mehta. Ending in 'a': Sharma, Gupta, Mehta. 3 rows: Aarav Sharma, Rohan Gupta, Karan Mehta.

### Q3. [Easy] Find all students whose email is NULL.

*Hint:* IS NULL, not = NULL.

**Answer:** ```
SELECT name FROM students WHERE email IS NULL;
```

Ananya Singh and Ishita Kumar have NULL emails. 2 rows. Using `= NULL` would return 0 rows.

### Q4. [Easy] Find students with a gmail email address.

*Hint:* LIKE '%@gmail.com'.

**Answer:** ```
SELECT name, email FROM students
WHERE email LIKE '%@gmail.com';
```

Aarav, Rohan, Sneha, Aditya — 4 rows.

### Q5. [Easy] How many rows?

```
SELECT name FROM students WHERE name LIKE '%ya%';
```

*Hint:* Names containing 'ya'.

**Answer:** `3 rows`

Contains 'ya': Priya, Aditya, Diya. 3 rows. Other names do not have 'ya'.

### Q6. [Easy] Find students with missing marks.

*Hint:* IS NULL on marks.

**Answer:** ```
SELECT name FROM students WHERE marks IS NULL;
```

Vikram Reddy and Ishita Kumar have NULL marks. 2 rows.

### Q7. [Easy] Find students from a city that starts with 'M'.

*Hint:* LIKE 'M%' on city.

**Answer:** ```
SELECT name, city FROM students WHERE city LIKE 'M%';
```

Mumbai starts with M. Aarav (Mumbai) and Karan (Mumbai). 2 rows.

### Q8. [Easy] Find students whose email is NOT NULL.

*Hint:* IS NOT NULL.

**Answer:** ```
SELECT name FROM students WHERE email IS NOT NULL;
```

8 students have emails. Only Ananya and Ishita are excluded.

### Q9. [Easy] What is the difference between % and _ in LIKE patterns?

*Hint:* Think about length.

**Answer:** `%` matches **zero or more** characters (any length). `_` matches **exactly one** character. So `'A%'` matches 'A', 'Aa', 'Aarav', 'Apple' — any length starting with A. `'A_'` matches only 2-character strings like 'Ab', 'Az', 'A1'. `'A__'` matches exactly 3 characters.

These are the only two wildcards in standard LIKE. Regex is a separate feature (REGEXP in MySQL, ~ in PostgreSQL).

### Q10. [Easy] Why does WHERE email = NULL return zero rows?

*Hint:* SQL three-valued logic.

**Answer:** Because NULL means 'unknown,' any comparison with NULL evaluates to NULL (not TRUE, not FALSE). The WHERE clause only keeps rows where the condition is TRUE. So `email = NULL` is NULL for every row, and no row passes the filter. The correct syntax is `WHERE email IS NULL`.

This is SQL's #1 NULL gotcha and a frequent interview question. It trips up every beginner.

### Q11. [Medium] Find students with names having exactly 10 characters.

*Hint:* 10 underscores in LIKE.

**Answer:** ```
SELECT name FROM students
WHERE name LIKE '__________';  -- 10 underscores
```

Each underscore matches one character. Names with exactly 10 chars: 'Sneha Iyer' (10), 'Aarav Sharma' (12 - no). 'Diya Nair' = 9, 'Aditya Rao' = 10, 'Rohan Gupta' = 11, 'Sneha Iyer' = 10. Approx 2 rows (Aditya Rao, Sneha Iyer).

### Q12. [Medium] Show name and email, replacing NULL emails with 'Not provided'. Use COALESCE.

*Hint:* COALESCE(col, default).

**Answer:** ```
SELECT name, COALESCE(email, 'Not provided') AS contact
FROM students;
```

All 10 rows returned. For Ananya and Ishita, the contact column shows 'Not provided'. For others, the real email.

### Q13. [Medium] Find students who do NOT have a yahoo email. Remember to handle NULLs.

*Hint:* NOT LIKE plus IS NOT NULL.

**Answer:** ```
SELECT name, email FROM students
WHERE email NOT LIKE '%@yahoo.com'
  AND email IS NOT NULL;
```

Non-yahoo emails: gmail (4), outlook (2). Total 6 rows. NULL emails (Ananya, Ishita) are excluded explicitly — otherwise their NOT LIKE evaluates to NULL and they are dropped anyway, but being explicit is clearer.

### Q14. [Medium] Find students whose name second letter is 'a' or 'i' (use LIKE with underscore).

*Hint:* Two patterns combined with OR.

**Answer:** ```
SELECT name FROM students
WHERE name LIKE '_a%' OR name LIKE '_i%';
```

Second char 'a': Karan, Sharma (first name Aarav), Vikram... Let me check: 'Aarav' 2nd = 'a'. 'Karan' 2nd = 'a'. 'Vikram' 2nd = 'i'. 'Diya' 2nd = 'i'. 'Vikram' matches 2nd letter 'i'. Aarav, Karan, Vikram, Diya — approx 4 rows.

### Q15. [Medium] Show name and marks. If marks is NULL, show 0. Use IFNULL.

*Hint:* IFNULL(marks, 0).

**Answer:** ```
SELECT name, IFNULL(marks, 0) AS marks FROM students;
```

All 10 rows. Vikram and Ishita show 0 instead of NULL. Others show their actual marks.

### Q16. [Medium] What does this return?

```
SELECT COALESCE(NULL, NULL, 'Hello', 'World');
```

*Hint:* First non-NULL.

**Answer:** `Hello`

COALESCE returns the first non-NULL argument. NULL, NULL are skipped. 'Hello' is first non-NULL.

### Q17. [Medium] What does this return?

```
SELECT NULLIF(10, 10), NULLIF(10, 5);
```

*Hint:* NULLIF returns NULL when args equal.

**Answer:** `NULL, 10`

NULLIF(10, 10): args equal, returns NULL. NULLIF(10, 5): args differ, returns the first arg (10).

### Q18. [Medium] Find students whose email contains an underscore. Remember _ is a wildcard — you need to escape it.

*Hint:* ESCAPE clause.

**Answer:** ```
SELECT name, email FROM students
WHERE email LIKE '%\_%' ESCAPE '\\';

-- Or using a different escape char:
SELECT name, email FROM students
WHERE email LIKE '%!_%' ESCAPE '!';
```

Emails with literal underscore in local-part: karan_m@yahoo.com, diya_n@outlook.com. 2 rows. Without ESCAPE, the _ would match ANY character and the query would match all emails.

### Q19. [Medium] Find students from Mumbai OR whose city is missing.

*Hint:* LIKE 'Mumbai' or IS NULL.

**Answer:** ```
SELECT name, city FROM students
WHERE city = 'Mumbai' OR city IS NULL;
```

Mumbai: Aarav, Karan. NULL city: Sneha. Total 3 rows.

### Q20. [Medium] Explain when LIKE can use an index and when it cannot.

*Hint:* Leading wildcard vs trailing wildcard.

**Answer:** LIKE can use a B-tree index when the pattern is **anchored at the start**: `LIKE 'Aarav%'`. The index can quickly find all rows starting with 'Aarav'. LIKE CANNOT use a B-tree index when the pattern starts with a wildcard: `LIKE '%gmail'`. The database must scan every row. For leading-wildcard searches at scale, use a full-text index or trigram index.

This is why search bars on large sites use full-text indexes like MySQL's FULLTEXT, Elasticsearch, or PostgreSQL's trigram (pg_trgm) extension. Simple LIKE with leading wildcard is O(n).

### Q21. [Medium] What does this return?

```
SELECT 5 + NULL, NULL * 10, CONCAT('Hi ', NULL);
```

*Hint:* NULL propagates.

**Answer:** `NULL, NULL, NULL`

Any arithmetic or string operation with NULL yields NULL. This is three-valued logic in action. To prevent this, wrap NULL columns in COALESCE.

### Q22. [Hard] Find students whose name has exactly 5 characters in the first word (before the space). E.g., 'Aarav' has 5 chars.

*Hint:* LIKE '_____ %' (5 underscores, space, anything).

**Answer:** ```
SELECT name FROM students
WHERE name LIKE '_____ %';
```

5 underscores, then a space, then any last name. Matches: 'Aarav Sharma' (Aarav = 5), 'Priya Patel' (5), 'Rohan Gupta' (5), 'Karan Mehta' (5), 'Diya Nair' (4 - no), 'Sneha Iyer' (5). So 5 rows (Aarav, Priya, Rohan, Karan, Sneha).

### Q23. [Hard] Show name, marks, and a status column: 'Pass' if marks >= 60, 'Fail' if marks < 60, 'Not Attempted' if marks is NULL. Use CASE with IS NULL.

*Hint:* CASE WHEN marks IS NULL... WHEN marks >= 60... ELSE...

**Answer:** ```
SELECT name, marks,
  CASE
    WHEN marks IS NULL THEN 'Not Attempted'
    WHEN marks >= 60 THEN 'Pass'
    ELSE 'Fail'
  END AS status
FROM students;
```

CASE evaluates top-to-bottom, returns the first match. NULL branch must come first — otherwise marks >= 60 on NULL gives NULL (not TRUE), and the row falls through to ELSE (Fail), which is wrong. All 10 rows, with Vikram and Ishita showing 'Not Attempted'.

### Q24. [Hard] Find average marks treating NULLs as 0 (not as missing).

*Hint:* AVG(COALESCE(marks, 0)).

**Answer:** ```
SELECT AVG(COALESCE(marks, 0)) AS avg_marks FROM students;
```

Sum of non-NULL marks = 85+72+91+78+65+88+70+82 = 631. Total rows = 10. AVG with NULLs as 0: 631/10 = 63.1. Contrast with AVG(marks) which ignores NULLs and divides by 8: 631/8 = 78.875.

### Q25. [Hard] Why might an application team prefer NULLs over sentinel values like 0 or empty string?

*Hint:* Clarity of meaning.

**Answer:** NULL explicitly means 'unknown' or 'not applicable.' A 0 in marks could mean the student scored zero OR did not take the test — ambiguous. An empty string in email could mean 'no email' OR 'user has not been prompted yet.' NULL keeps these cases distinguishable. Aggregate functions also handle NULLs sensibly by ignoring them (AVG skips missing data instead of skewing the average with zeros).

The tradeoff: NULLs require care in WHERE clauses and aggregates. Some teams use sentinel values to avoid NULL complexity, but at the cost of semantic clarity.

### Q26. [Hard] What does this return?

```
SELECT NULL = NULL, NULL != NULL;
```

*Hint:* Three-valued logic.

**Answer:** `NULL, NULL`

Any comparison with NULL — even NULL to NULL — yields NULL, not TRUE or FALSE. This is why IS NULL and IS NOT NULL exist. It is the definitional behavior of SQL's three-valued logic.

## Mixed Questions

### Q1. [Easy] Find all students in the Computer Science course.

*Hint:* WHERE course = 'Computer Science'.

**Answer:** ```
SELECT * FROM students WHERE course = 'Computer Science';
```

Aarav, Rohan, Vikram, Aditya — 4 rows.

### Q2. [Easy] Find students whose name starts with 'P' or 'S'.

*Hint:* LIKE with OR.

**Answer:** ```
SELECT name FROM students
WHERE name LIKE 'P%' OR name LIKE 'S%';
```

Priya Patel, Sneha Iyer. 2 rows.

### Q3. [Easy] Find students whose name contains 'sh' anywhere (case-insensitive in MySQL).

*Hint:* LIKE '%sh%'.

**Answer:** ```
SELECT name FROM students WHERE name LIKE '%sh%';
```

Names with 'sh': 'Aarav Sharma' (has 'Sh'), 'Ishita Kumar' (has 'sh'). 2 rows. MySQL is case-insensitive, so 'Sh' matches 'sh%'.

### Q4. [Easy] Find students whose city is NULL.

*Hint:* IS NULL.

**Answer:** ```
SELECT name FROM students WHERE city IS NULL;
```

Only Sneha Iyer has NULL city. 1 row.

### Q5. [Easy] What does IFNULL(NULL, 'N/A') return?

*Hint:* First non-NULL.

**Answer:** `'N/A'`

IFNULL returns the 2nd argument when the 1st is NULL. Here, NULL triggers the default 'N/A'.

### Q6. [Easy] Find students with non-NULL marks.

*Hint:* IS NOT NULL.

**Answer:** ```
SELECT * FROM students WHERE marks IS NOT NULL;
```

8 students with marks. Vikram and Ishita excluded.

### Q7. [Easy] How many rows?

```
SELECT * FROM students WHERE name LIKE '%';
```

*Hint:* % matches anything.

**Answer:** `10 rows`

`%` alone matches any non-NULL string, including empty strings. All 10 students have names, so all are returned.

### Q8. [Medium] List students with exactly 11-character names. Use _.

*Hint:* 11 underscores.

**Answer:** ```
SELECT name FROM students WHERE name LIKE '___________';
```

11 chars including spaces: 'Priya Patel' (11), 'Karan Mehta' (11), 'Rohan Gupta' (11). 3 rows.

### Q9. [Medium] Show name and city, showing 'Unknown' for missing cities.

*Hint:* COALESCE(city, 'Unknown').

**Answer:** ```
SELECT name, COALESCE(city, 'Unknown') AS city FROM students;
```

All 10 rows. Sneha shows 'Unknown' for city; others show actual city.

### Q10. [Medium] Find students whose course starts with 'C'.

*Hint:* LIKE 'C%'.

**Answer:** ```
SELECT name, course FROM students WHERE course LIKE 'C%';
```

'Computer Science' starts with C, 'Civil' starts with C. Matches: Aarav, Rohan, Vikram, Sneha (Civil), Aditya, Diya (Civil). 6 rows.

### Q11. [Medium] What does this return?

```
SELECT COUNT(*), COUNT(email), COUNT(marks) FROM students;
```

*Hint:* COUNT(col) excludes NULLs.

**Answer:** `10, 8, 8`

COUNT(*) = 10 (all rows). COUNT(email) = 8 (2 NULLs). COUNT(marks) = 8 (2 NULLs).

### Q12. [Medium] Find students whose name contains 'Kumar' OR 'Nair' using LIKE.

*Hint:* Two LIKE conditions.

**Answer:** ```
SELECT name FROM students
WHERE name LIKE '%Kumar%' OR name LIKE '%Nair%';
```

Ishita Kumar, Diya Nair. 2 rows.

### Q13. [Medium] Find students in Mumbai or Delhi with gmail emails.

*Hint:* Combine IN and LIKE.

**Answer:** ```
SELECT name, email, city FROM students
WHERE city IN ('Mumbai', 'Delhi')
  AND email LIKE '%@gmail.com';
```

Mumbai gmail: Aarav. Delhi gmail: Rohan. 2 rows. Karan is Mumbai with yahoo, so excluded.

### Q14. [Medium] What does this return?

```
SELECT AVG(marks), AVG(COALESCE(marks, 0)) FROM students;
```

*Hint:* Two different averages.

**Answer:** `78.875, 63.1`

AVG(marks) ignores NULLs: sum 631 / 8 rows = 78.875. AVG(COALESCE(marks, 0)) counts NULL as 0: sum 631 / 10 rows = 63.1.

### Q15. [Medium] Show each student's name and a 'has_email' flag ('Yes' or 'No') using IFNULL.

*Hint:* CASE or combining IFNULL with comparison.

**Answer:** ```
SELECT name,
  IF(email IS NULL, 'No', 'Yes') AS has_email
FROM students;

-- Or using CASE:
SELECT name,
  CASE WHEN email IS NULL THEN 'No' ELSE 'Yes' END AS has_email
FROM students;
```

MySQL's IF(cond, a, b) returns a if cond is TRUE, else b. Ananya and Ishita show 'No'; others 'Yes'. All 10 rows.

### Q16. [Medium] Find students with exactly 4-character first names. Split by space, check the first word.

*Hint:* LIKE '____ %'.

**Answer:** ```
SELECT name FROM students WHERE name LIKE '____ %';
```

4 underscores, space, anything. First names of 4 chars: 'Diya' (D-i-y-a), 'Aarav' (5 - no), 'Priya' (5 - no). Just Diya Nair. 1 row.

### Q17. [Hard] Find students whose email has an underscore in the local-part (before @). Use ESCAPE.

*Hint:* Local-part = before @.

**Answer:** ```
SELECT name, email FROM students
WHERE email LIKE '%\_%@%' ESCAPE '\\';
```

karan_m@yahoo.com and diya_n@outlook.com. 2 rows. The ESCAPE clause ensures `\_` is literal, not a wildcard.

### Q18. [Hard] Find students whose email domain is NOT gmail.com and whose marks are either NULL or above 80.

*Hint:* Three conditions: not gmail, AND (NULL OR high marks).

**Answer:** ```
SELECT name, email, marks FROM students
WHERE email NOT LIKE '%@gmail.com'
  AND email IS NOT NULL
  AND (marks IS NULL OR marks > 80);
```

Non-gmail with NULL or marks > 80: Vikram (NULL marks, outlook), Karan (88, yahoo), Diya (82, outlook). 3 rows. Priya (yahoo, 72) fails marks check.

### Q19. [Hard] Display a full contact info column: name (email, marks). Use COALESCE for NULLs.

*Hint:* CONCAT with COALESCE.

**Answer:** ```
SELECT CONCAT(
    name, ' (',
    COALESCE(email, 'No email'), ', ',
    COALESCE(CAST(marks AS CHAR), 'No marks'),
    ')'
) AS contact_info
FROM students;
```

Without COALESCE, any NULL would make the whole CONCAT NULL. We CAST marks to CHAR because CONCAT needs a string and COALESCE needs same types. Ananya shows 'No email', Vikram shows 'No marks', Ishita shows both.

### Q20. [Hard] What does this return?

```
SELECT NULLIF(CONCAT(name, ' ', email), CONCAT(name, ' '))
FROM students WHERE id = 4;
```

*Hint:* Ananya has NULL email.

**Answer:** `NULL`

Ananya's email is NULL, so CONCAT(name, ' ', NULL) = NULL. NULLIF(NULL, anything) = NULL. The result is NULL.

### Q21. [Hard] Find students whose name has 'a' as exactly the 2nd character AND whose city is known (not NULL).

*Hint:* LIKE '_a%' and IS NOT NULL.

**Answer:** ```
SELECT name, city FROM students
WHERE name LIKE '_a%'
  AND city IS NOT NULL;
```

2nd char 'a': Aarav (A-a-...), Karan (K-a-...). Both have cities. 2 rows (Aarav Mumbai, Karan Mumbai).

### Q22. [Hard] Show each student and their marks grade: 'A' if >= 85, 'B' if >= 70, 'C' if < 70, 'Absent' if NULL. Use CASE.

*Hint:* CASE with multiple WHEN, NULL check first.

**Answer:** ```
SELECT name, marks,
  CASE
    WHEN marks IS NULL THEN 'Absent'
    WHEN marks >= 85 THEN 'A'
    WHEN marks >= 70 THEN 'B'
    ELSE 'C'
  END AS grade
FROM students;
```

Always check NULL first to avoid falling through. Aarav 85=A, Priya 72=B, Rohan 91=A, Ananya 78=B, Vikram NULL=Absent, Sneha 65=C, Karan 88=A, Ishita NULL=Absent, Aditya 70=B, Diya 82=B. 10 rows.

## Multiple Choice Questions

### Q1. [Easy] What does % wildcard match in LIKE?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** % matches zero or more of any characters. `'A%'` matches 'A', 'Aa', 'Aardvark', etc.

### Q2. [Easy] What does _ wildcard match?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Underscore matches exactly one character. `'A_'` matches any 2-char string starting with A.

### Q3. [Easy] How do you check if a column is NULL?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** Only IS NULL works. Comparing with = NULL returns NULL (not TRUE), so the row is dropped by WHERE.

### Q4. [Easy] What does COALESCE(NULL, NULL, 5, NULL, 10) return?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** COALESCE returns the FIRST non-NULL argument. NULLs are skipped, first non-NULL is 5.

### Q5. [Easy] What does WHERE name LIKE 'A%' match?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** 'A%' means 'A' followed by anything — starts with A.

### Q6. [Easy] What does 5 + NULL return?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** Any arithmetic with NULL yields NULL. NULL propagates through expressions.

### Q7. [Medium] In MySQL (default collation), does LIKE 'a%' match 'Aarav'?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** A

**A is correct.** MySQL's default collation utf8mb4_0900_ai_ci is case-insensitive. PostgreSQL's LIKE is case-sensitive and requires ILIKE for case-insensitive.

### Q8. [Medium] What does NULLIF(5, 5) return?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** NULLIF(a, b) returns NULL if a = b, else returns a. Here 5 = 5, so NULL.

### Q9. [Medium] How many rows does SELECT * FROM students WHERE email = NULL return?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** `= NULL` always evaluates to NULL (not TRUE), so no rows are returned. This is SQL's famous NULL gotcha — always use IS NULL.

### Q10. [Medium] Which matches a pattern containing a literal %?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** The ESCAPE clause designates \\ as the escape character, so \% is a literal %. Option A is ambiguous without ESCAPE. Option C has %% which just means 'any two sequences of any length.'

### Q11. [Medium] What does COUNT(email) return if the email column has 10 values, 3 of which are NULL?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** COUNT(column) counts non-NULL values. 10 - 3 NULLs = 7. COUNT(*) would return 10.

### Q12. [Medium] Which is the MySQL-specific function for 2-argument NULL substitution?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** IFNULL(x, default) is MySQL's 2-arg function. COALESCE is standard SQL and supports any number of arguments. ISNULL exists in SQL Server but not as a 2-arg substitution in MySQL.

### Q13. [Medium] Which query finds names with second letter 'r'?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** One underscore (any first char), then 'r', then anything. Matches 'Priya' (P-r...), not 'Rohan' (starts with R so position 2 is 'o').

### Q14. [Medium] What does AVG(marks) return when 3 of 10 marks are NULL?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** AVG skips NULLs — both in sum and in count. If you want NULLs treated as 0, use `AVG(COALESCE(marks, 0))` to include them in the denominator.

### Q15. [Hard] In PostgreSQL, which is equivalent to MySQL's case-insensitive LIKE 'a%'?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** PostgreSQL's LIKE is case-sensitive. ILIKE is the case-insensitive version (PostgreSQL-specific). MySQL uses collation to determine case sensitivity.

### Q16. [Hard] What does CONCAT('Hello ', NULL, ' World') return in MySQL?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** In MySQL's CONCAT, any NULL argument makes the whole result NULL. Use CONCAT_WS (skips NULLs) or wrap in COALESCE.

### Q17. [Hard] Why is WHERE id NOT IN (SELECT student_id FROM banned) dangerous?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** NULL in the subquery result turns NOT IN into NULL comparisons, which WHERE drops. Use NOT EXISTS or filter NULLs in the subquery.

### Q18. [Hard] What does NULL = NULL evaluate to in SQL?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** Any comparison involving NULL yields NULL — even NULL = NULL. This is three-valued logic. Use IS NULL / IS NOT NULL for NULL tests.

### Q19. [Hard] Why might a pattern like LIKE '%abc' be slow on a million-row table?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** B-tree indexes work left-to-right. A leading wildcard means MySQL does not know where to start, so it scans every row. Trailing wildcards (LIKE 'abc%') CAN use indexes. For leading-wildcard search at scale, use full-text indexes.

### Q20. [Hard] What is the safest way to compute salary / bonus when bonus might be 0?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** NULLIF(bonus, 0) returns NULL when bonus = 0. Dividing by NULL gives NULL (no error). In MySQL, divide-by-zero returns NULL already, but NULLIF makes intent explicit and is portable. Option B would still divide by 0 if bonus is 0.

## Coding Challenges

### Challenge 1. Gmail Finder

**Difficulty:** Easy

List all students with a Gmail address, showing name and email.

**Constraints:**

- Use LIKE.

**Sample input:**

```
students table.
```

**Sample output:**

```
Aarav Sharma aarav@gmail.com
Rohan Gupta rohan@gmail.com
Sneha Iyer sneha@gmail.com
Aditya Rao aditya@gmail.com
```

**Solution:**

```sql
SELECT name, email FROM students WHERE email LIKE '%@gmail.com';
```

### Challenge 2. Missing Data Report

**Difficulty:** Easy

List students with missing email OR missing marks. Show name and why they are missing data.

**Constraints:**

- Use IS NULL with OR. (Simpler version: just missing email OR marks, 4 rows.)

**Sample input:**

```
students table.
```

**Sample output:**

```
Ananya Singh, Vikram Reddy, Sneha Iyer (city missing), Ishita Kumar
```

**Solution:**

```sql
SELECT name,
  CASE
    WHEN email IS NULL AND marks IS NULL THEN 'Missing email and marks'
    WHEN email IS NULL THEN 'Missing email'
    WHEN marks IS NULL THEN 'Missing marks'
  END AS issue
FROM students
WHERE email IS NULL OR marks IS NULL;
```

### Challenge 3. Name Length Filter

**Difficulty:** Medium

Find students whose name (first + last with space) is exactly 11 characters long.

**Constraints:**

- Use LIKE with underscores.

**Sample input:**

```
students table.
```

**Sample output:**

```
Priya Patel, Rohan Gupta, Karan Mehta
```

**Solution:**

```sql
SELECT name FROM students WHERE name LIKE '___________';  -- 11 underscores
```

### Challenge 4. Clean Display

**Difficulty:** Medium

Return name, email (show 'N/A' if NULL), marks (show 0 if NULL), and city (show 'Unknown' if NULL).

**Constraints:**

- Use COALESCE.

**Sample input:**

```
students table.
```

**Sample output:**

```
All 10 students with NULL values replaced.
```

**Solution:**

```sql
SELECT
  name,
  COALESCE(email, 'N/A') AS email,
  COALESCE(marks, 0) AS marks,
  COALESCE(city, 'Unknown') AS city
FROM students;
```

### Challenge 5. Complex Name Pattern

**Difficulty:** Medium

Find students whose name starts with 'A' or 'R' AND has at least 12 characters.

**Constraints:**

- Combine LIKE and length check.

**Sample input:**

```
students table.
```

**Sample output:**

```
Aarav Sharma (12 chars), Ananya Singh (12), Rohan Gupta (11 - no), Aditya Rao (10 - no)... Actually checking: 'Aarav Sharma' = 12, 'Ananya Singh' = 12. Those pass.
```

**Solution:**

```sql
SELECT name FROM students
WHERE (name LIKE 'A%' OR name LIKE 'R%')
  AND LENGTH(name) >= 12;
```

### Challenge 6. Grade Report With Nulls

**Difficulty:** Medium

Show each student's name and grade: A (>=85), B (>=70), C (<70), Absent (NULL marks).

**Constraints:**

- Use CASE with IS NULL first.

**Sample input:**

```
students table.
```

**Sample output:**

```
All 10 students with computed grade.
```

**Solution:**

```sql
SELECT name, marks,
  CASE
    WHEN marks IS NULL THEN 'Absent'
    WHEN marks >= 85 THEN 'A'
    WHEN marks >= 70 THEN 'B'
    ELSE 'C'
  END AS grade
FROM students;
```

### Challenge 7. Safe Division

**Difficulty:** Hard

Given a students_test table with attempted_questions and correct_questions, compute accuracy = correct / attempted, safely handling cases where attempted = 0. Write the SELECT.

**Constraints:**

- Use NULLIF to avoid divide-by-zero.

**Sample input:**

```
Hypothetical table; use NULLIF pattern.
```

**Sample output:**

```
accuracy column is NULL when attempted = 0, otherwise ratio.
```

**Solution:**

```sql
SELECT
  student_id,
  correct_questions,
  attempted_questions,
  correct_questions / NULLIF(attempted_questions, 0) AS accuracy
FROM students_test;
```

### Challenge 8. Pattern + NULL Combo

**Difficulty:** Hard

Find students who (a) have a gmail email, (b) have non-NULL marks, (c) scored above 70, AND (d) are from a city starting with 'M' or 'D'.

**Constraints:**

- Combine LIKE, IS NOT NULL, comparison.

**Sample input:**

```
students table.
```

**Sample output:**

```
Aarav Sharma (Mumbai, gmail, 85), Rohan Gupta (Delhi, gmail, 91)
```

**Solution:**

```sql
SELECT name, email, marks, city
FROM students
WHERE email LIKE '%@gmail.com'
  AND marks IS NOT NULL
  AND marks > 70
  AND (city LIKE 'M%' OR city LIKE 'D%');
```

---

*Notes: https://learn.modernagecoders.com/resources/sql/pattern-matching-and-null/*
