---
title: "Practice: String Functions in SQL"
description: "55 practice problems for String Functions in SQL in SQL"
slug: string-functions-practice
canonical: https://learn.modernagecoders.com/resources/sql/string-functions/practice/
category: "SQL"
---
# Practice: String Functions in SQL

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
SELECT CONCAT('Hello', ' ', 'World');
```

*Hint:* CONCAT joins arguments.

**Answer:** `Hello World`

CONCAT concatenates all arguments in order with no separator.

### Q2. [Easy] What is the output?

```
SELECT CONCAT_WS('-', '2026', '04', '16');
```

*Hint:* CONCAT With Separator.

**Answer:** `2026-04-16`

CONCAT_WS inserts the separator (first arg) between each of the following arguments.

### Q3. [Easy] What is the output?

```
SELECT CONCAT('Hello', NULL, 'World');
```

*Hint:* NULL in CONCAT.

**Answer:** `NULL`

CONCAT returns NULL if any argument is NULL. Use CONCAT_WS which skips NULLs, or COALESCE to provide defaults.

### Q4. [Easy] What is the output?

```
SELECT CONCAT_WS('-', '2026', NULL, '16');
```

*Hint:* CONCAT_WS and NULL.

**Answer:** `2026-16`

CONCAT_WS skips NULL arguments. Result is '2026' + '-' + '16'.

### Q5. [Easy] What is the output?

```
SELECT UPPER('Bengaluru'), LOWER('MUMBAI');
```

*Hint:* Case conversion.

**Answer:** `BENGALURU, mumbai`

UPPER uppercases all letters. LOWER lowercases them.

### Q6. [Easy] What is the output?

```
SELECT LENGTH('Hello'), CHAR_LENGTH('Hello');
```

*Hint:* ASCII: bytes == chars.

**Answer:** `5, 5`

ASCII characters are single-byte in UTF-8, so LENGTH and CHAR_LENGTH match.

### Q7. [Easy] What is the output?

```
SELECT LEFT('Bengaluru', 4), RIGHT('Bengaluru', 4);
```

*Hint:* LEFT prefix, RIGHT suffix.

**Answer:** `Beng, luru`

LEFT(str, n) returns the first n characters. RIGHT(str, n) returns the last n characters.

### Q8. [Easy] What is the output?

```
SELECT TRIM('  Aarav Kumar  '), CHAR_LENGTH(TRIM('  Aarav Kumar  '));
```

*Hint:* TRIM removes whitespace from both ends.

**Answer:** `Aarav Kumar, 11`

TRIM removes leading/trailing spaces. The trimmed string has 11 characters including the internal space.

### Q9. [Easy] What is the output?

```
SELECT REPLACE('+91-98765-43210', '-', '');
```

*Hint:* REPLACE every dash with empty.

**Answer:** `+919876543210`

REPLACE substitutes every occurrence of the second argument with the third. Here, all dashes are removed.

### Q10. [Easy] What is the output?

```
SELECT LOCATE('@', 'aarav@mail.com');
```

*Hint:* Position is 1-based.

**Answer:** `6`

'@' is the 6th character. Positions: a=1, a=2, r=3, a=4, v=5, @=6.

### Q11. [Easy] What is the output?

```
SELECT SUBSTRING('Bengaluru', 4, 3);
```

*Hint:* Start 4, length 3.

**Answer:** `gal`

From position 4, take 3 characters: g, a, l. Positions: B=1, e=2, n=3, g=4, a=5, l=6.

### Q12. [Easy] What is the output?

```
SELECT LPAD('42', 5, '0'), RPAD('abc', 6, '.');
```

*Hint:* Padding to fixed length.

**Answer:** `00042, abc...`

LPAD pads on the left to length 5: three zeros + '42'. RPAD pads on the right: 'abc' + three dots.

### Q13. [Medium] What is the output?

```
SELECT SUBSTRING('aarav@mail.com', LOCATE('@', 'aarav@mail.com') + 1);
```

*Hint:* Extract domain.

**Answer:** `mail.com`

LOCATE finds '@' at position 6. +1 gives 7. SUBSTRING from position 7 with no length returns everything from there to the end.

### Q14. [Medium] What is the output?

```
SELECT TRIM(LEADING '0' FROM '00012345');
```

*Hint:* LEADING removes from the left only.

**Answer:** `12345`

TRIM with LEADING removes the specified character only from the beginning. All leading zeros are stripped; internal zeros (if any) are preserved.

### Q15. [Medium] What is the output?

```
SELECT REVERSE('hello');
```

*Hint:* Reverse the string.

**Answer:** `olleh`

REVERSE reverses the character order. Works on multi-byte characters correctly in recent MySQL versions.

### Q16. [Medium] What is the output?

```
SELECT REPEAT('ab', 3);
```

*Hint:* Multiply the string.

**Answer:** `ababab`

REPEAT(str, n) concatenates the string n times. Useful for generating separators or padding.

### Q17. [Medium] What is the output?

```
SELECT FORMAT(1234567.89, 2);
```

*Hint:* Thousands-separated formatting.

**Answer:** `1,234,567.89`

FORMAT adds thousands separators (commas by default) and formats to the given number of decimal places. Returns a string.

### Q18. [Medium] What is the output?

```
SELECT SUBSTR('Bengaluru', -4);
```

*Hint:* Negative start = from end.

**Answer:** `luru`

Negative start counts from the end. -4 means start at the 4th character from the end. Equivalent to RIGHT('Bengaluru', 4).

### Q19. [Hard] What is the output?

```
SELECT LENGTH('नमस्ते'), CHAR_LENGTH('नमस्ते');
```

*Hint:* Hindi uses multi-byte UTF-8.

**Answer:** `18, 6`

'नमस्ते' has 6 visible characters. Each Devanagari character is 3 bytes in UTF-8, so 6 * 3 = 18 bytes. LENGTH shows bytes, CHAR_LENGTH shows characters.

### Q20. [Hard] What is the output of this clean query on `'  Aarav  Kumar  '`?

```
SELECT TRIM(REPLACE('  Aarav  Kumar  ', '  ', ' '));
```

*Hint:* REPLACE processes once, then TRIM.

**Answer:** `Aarav Kumar`

REPLACE turns '  ' into ' ' in one pass: '  Aarav  Kumar  ' becomes ' Aarav Kumar '. TRIM strips the remaining leading/trailing single space. For strings with 3+ consecutive spaces, multiple REPLACE passes may be needed.

## Mixed Questions

### Q1. [Easy] Which function joins strings safely when any argument might be NULL?

*Hint:* CONCAT vs CONCAT_WS.

**Answer:** `CONCAT_WS (skips NULL arguments). CONCAT returns NULL if any argument is NULL.`

CONCAT_WS stands for 'With Separator.' Takes separator first, then values. NULLs in the values are skipped.

### Q2. [Easy] Is MySQL's REPLACE case-sensitive?

*Hint:* Exact matching.

**Answer:** `Yes. REPLACE does case-sensitive substring replacement. For case-insensitive, use REGEXP_REPLACE with the 'i' flag in MySQL 8.0+, or normalize case first.`

This is a common bug source. 'Gmail' and 'gmail' are different to REPLACE.

### Q3. [Easy] What does `LENGTH('हi')` return in MySQL with UTF-8 encoding?

*Hint:* One multi-byte + one ASCII.

**Answer:** `4 (3 bytes for ह + 1 byte for i)`

LENGTH counts bytes. 'ह' is 3 bytes in UTF-8. 'i' is 1 byte. Total 4. CHAR_LENGTH would return 2.

### Q4. [Easy] What is the difference between SUBSTRING(str, 1, 5) and LEFT(str, 5)?

*Hint:* They are equivalent.

**Answer:** `They are equivalent. LEFT is more readable for prefixes.`

Both return the first 5 characters. LEFT is preferred when you specifically want a prefix because it's clearer at a glance.

### Q5. [Easy] Write a query to return the last 4 characters of a phone number stored in phone column.

*Hint:* RIGHT function.

**Answer:** ```
SELECT RIGHT(phone, 4) FROM customers;
```

RIGHT(str, n) returns the last n characters. Commonly used for masking credit cards, showing truncated tokens, etc.

### Q6. [Medium] Write a query to extract the email domain (part after @) from every customer.

*Hint:* SUBSTRING + LOCATE.

**Answer:** ```
SELECT email, SUBSTRING(email, LOCATE('@', email) + 1) AS domain
FROM customers;
```

LOCATE finds '@'. Add 1 to skip past it. SUBSTRING without a length argument returns everything from there to the end.

### Q7. [Medium] Normalize city names so they have proper case: first letter uppercase, rest lowercase.

*Hint:* UPPER + LOWER + SUBSTRING.

**Answer:** ```
SELECT city, CONCAT(UPPER(LEFT(city, 1)), LOWER(SUBSTRING(city, 2))) AS proper_city
FROM customers;
```

MySQL lacks INITCAP. Workaround: uppercase first letter with LEFT+UPPER, lowercase the rest with SUBSTRING+LOWER, concatenate. Only handles single-word strings; multi-word requires further work.

### Q8. [Medium] Write a query to remove all non-digit characters from a phone column using REPLACE.

*Hint:* Chain REPLACE for each separator.

**Answer:** ```
SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(phone, '-',''), ' ',''), '.',''), '+',''), '(','') AS digits
FROM customers;
```

REPLACE cleans one character at a time. Chain multiple REPLACE calls for each separator. In MySQL 8.0+ use `REGEXP_REPLACE(phone, '[^0-9]', '')` for a single-call solution.

### Q9. [Medium] When should you use CHAR_LENGTH over LENGTH?

*Hint:* Multi-byte characters.

**Answer:** `Always use CHAR_LENGTH for user-facing length operations (validation, truncation). Use LENGTH only when you care about byte storage (e.g., checking maximum byte size for a column).`

LENGTH counts bytes. For Unicode languages (Hindi, Chinese, Japanese, emoji), one character can be 2-4 bytes. CHAR_LENGTH always reports what users see.

### Q10. [Medium] Why is CONCAT_WS often preferred over CONCAT?

*Hint:* NULL safety + cleaner syntax.

**Answer:** `CONCAT_WS inserts a separator automatically and skips NULL arguments. CONCAT returns NULL if any argument is NULL and requires manually adding separators between arguments.`

CONCAT_WS is especially useful for addresses and names where some parts may be NULL (middle_name, address_line_2).

### Q11. [Hard] Write a query that masks email so only the first 2 characters and the domain show, e.g., 'aa***@mail.com'.

*Hint:* LEFT + REPEAT + SUBSTRING + LOCATE.

**Answer:** ```
SELECT
    email,
    CONCAT(
        LEFT(email, 2),
        REPEAT('*', 3),
        SUBSTRING(email, LOCATE('@', email))
    ) AS masked
FROM customers;
```

LEFT grabs first 2 chars. REPEAT makes 3 stars. SUBSTRING from LOCATE('@',...) keeps '@' and everything after. Adjust star count for different masking widths.

### Q12. [Hard] Write a query to count the number of spaces in each full_name.

*Hint:* LENGTH difference after REPLACE.

**Answer:** ```
SELECT
    full_name,
    CHAR_LENGTH(full_name) - CHAR_LENGTH(REPLACE(full_name, ' ', '')) AS space_count
FROM customers;
```

Classic trick: subtract the length after removing all spaces from the original length. The difference equals the number of removed spaces. Works for counting any character.

## Multiple Choice Questions

### Q1. [Easy] What does CONCAT return if one argument is NULL?

**Answer:** C

**C is correct.** CONCAT returns NULL if any argument is NULL. Use CONCAT_WS or COALESCE to handle NULLs safely.

### Q2. [Easy] Which returns the number of characters (not bytes)?

**Answer:** B

**B is correct.** CHAR_LENGTH (aka CHARACTER_LENGTH) counts characters. LENGTH counts bytes.

### Q3. [Easy] `SELECT SUBSTRING('Bengaluru', 4, 3);` returns:

**Answer:** B

**B is correct.** Starting at position 4 ('g'), take 3 characters: 'gal'. MySQL SUBSTRING is 1-indexed.

### Q4. [Easy] Which function removes whitespace from both ends?

**Answer:** C

**C is correct.** TRIM removes from both sides by default. LTRIM is left only, RTRIM is right only. STRIP is not a MySQL function.

### Q5. [Easy] `SELECT LPAD('5', 4, '0');` returns:

**Answer:** B

**B is correct.** LPAD pads on the left to length 4 with '0', giving '0005'. Useful for ID formatting.

### Q6. [Easy] Which returns the 1-based position of a substring (or 0 if not found)?

**Answer:** C

**C is correct.** LOCATE(substr, str) returns the 1-based position. INSTR and POSITION do the same thing with different argument orders.

### Q7. [Easy] Is MySQL's REPLACE case-sensitive?

**Answer:** A

**A is correct.** REPLACE does exact case-sensitive matching. For case-insensitive, use REGEXP_REPLACE with the 'i' flag (MySQL 8.0+).

### Q8. [Medium] `SELECT CONCAT_WS('-', 'a', NULL, 'c');` returns:

**Answer:** C

**C is correct.** CONCAT_WS skips NULL arguments. The separator is placed only between actual values, yielding 'a-c'.

### Q9. [Medium] What is the output of `SELECT LENGTH('नमस्ते'), CHAR_LENGTH('नमस्ते');` in UTF-8?

**Answer:** B

**B is correct.** Each Devanagari character is 3 bytes in UTF-8. LENGTH = 6 * 3 = 18 bytes. CHAR_LENGTH = 6 characters.

### Q10. [Medium] Which query gets the email domain (part after '@')?

**Answer:** C

**C is correct.** Start one position after '@', no length = to end. A returns the username part + '@'. B returns '@domain'. D is wrong.

### Q11. [Medium] `SELECT TRIM(LEADING '0' FROM '000042');` returns:

**Answer:** A

**A is correct.** TRIM LEADING removes the specified character only from the left. All leading zeros stripped.

### Q12. [Medium] Count the occurrences of 'a' in 'banana' using only string functions.

**Answer:** B

**B is correct.** Subtract the length after removing the target character from the original length. Works for counting any character.

### Q13. [Hard] Which is the safest way to join first, middle, and last names where middle can be NULL?

**Answer:** C

**C is correct.** CONCAT_WS skips NULL middle name. A returns NULL if middle is NULL. B and D are invalid syntax for string concatenation in MySQL.

### Q14. [Hard] How do you format an integer id as a 6-digit zero-padded code?

**Answer:** B

**B is correct.** LPAD pads on the left to reach 6 characters with '0'. RPAD would pad on the right. FORMAT adds thousands separators and decimals, not zero padding.

### Q15. [Hard] Which approach correctly finds duplicate emails ignoring case?

**Answer:** B

**B is correct.** Normalize by LOWER before grouping. A would miss duplicates differing in case. C is a nonsense condition. D just returns unique cases.

## Coding Challenges

### Challenge 1. Clean Up Name Column

**Difficulty:** Easy

Given the customers table, return id and full_name trimmed of leading/trailing spaces.

**Solution:**

```sql
SELECT id, TRIM(full_name) AS clean_name
FROM customers;
```

TRIM removes whitespace from both ends. Use it for cleaning user input before comparing or displaying.

### Challenge 2. Normalize Email to Lowercase

**Difficulty:** Easy

Return id and email converted to lowercase for all customers.

**Solution:**

```sql
SELECT id, LOWER(email) AS normalized_email
FROM customers;
```

LOWER normalizes email case. This is essential before comparing or deduplicating user emails.

### Challenge 3. Extract Email Username and Domain

**Difficulty:** Medium

For each customer, return the email, the username (before '@'), and the domain (after '@').

**Solution:**

```sql
SELECT
    email,
    SUBSTRING(email, 1, LOCATE('@', email) - 1) AS username,
    SUBSTRING(email, LOCATE('@', email) + 1)   AS domain
FROM customers;
```

LOCATE finds '@'. SUBSTRING extracts username (1 to @-1) and domain (@+1 to end).

### Challenge 4. Digits-Only Phone Numbers

**Difficulty:** Medium

Strip all separators (-, space, ., +) from phone numbers and return just the digits.

**Solution:**

```sql
SELECT
    phone AS original,
    REPLACE(REPLACE(REPLACE(REPLACE(phone, '-', ''), ' ', ''), '.', ''), '+', '') AS digits_only
FROM customers;
```

Chain REPLACE to remove each separator. In MySQL 8.0+ use `REGEXP_REPLACE(phone, '[^0-9]', '')` for a single-call solution.

### Challenge 5. Proper Case City Names

**Difficulty:** Medium

Capitalize the first letter of each city name, rest lowercase, e.g., 'bengaluru' -> 'Bengaluru'.

**Solution:**

```sql
SELECT
    city AS original,
    CONCAT(UPPER(LEFT(city, 1)), LOWER(SUBSTRING(city, 2))) AS proper_city
FROM customers;
```

MySQL lacks INITCAP. Take first char with LEFT and uppercase it; take rest with SUBSTRING from position 2 and lowercase it; concatenate.

### Challenge 6. Count Spaces in Name

**Difficulty:** Hard

Return the number of space characters in each full_name.

**Solution:**

```sql
SELECT
    full_name,
    CHAR_LENGTH(full_name) - CHAR_LENGTH(REPLACE(full_name, ' ', '')) AS space_count
FROM customers;
```

Classic trick: length minus length-without-spaces equals the number of spaces. Generalizes to counting any character.

### Challenge 7. Mask Phone Number (Last 4 Digits Only)

**Difficulty:** Hard

Mask all but the last 4 digits of a phone number with 'X'. Input format may vary.

**Solution:**

```sql
SELECT
    phone,
    CONCAT(
        REPEAT('X', CHAR_LENGTH(phone) - 4),
        RIGHT(phone, 4)
    ) AS masked
FROM customers;
```

REPEAT('X', n) creates n masking characters, where n is the length minus 4. RIGHT takes the last 4 characters. CONCAT joins them.

### Challenge 8. Extract First Name (Before First Space)

**Difficulty:** Hard

Given full_name, return just the first name (portion before first space). Handle names without spaces by returning the whole name.

**Solution:**

```sql
SELECT
    full_name,
    TRIM(
        CASE
            WHEN LOCATE(' ', TRIM(full_name)) = 0
                THEN TRIM(full_name)
            ELSE SUBSTRING(TRIM(full_name), 1, LOCATE(' ', TRIM(full_name)) - 1)
        END
    ) AS first_name
FROM customers;
```

Trim first to handle leading spaces. Use LOCATE to find first space. If no space (LOCATE returns 0), return the whole name. Otherwise take characters 1 through space-position-1.

---

*Notes: https://learn.modernagecoders.com/resources/sql/string-functions/*
