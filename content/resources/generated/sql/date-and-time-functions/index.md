---
title: "SQL Date and Time Functions - NOW, DATEDIFF, DATE_ADD, DATE_FORMAT | Modern Age Coders"
description: "Master MySQL date and time functions: NOW, CURDATE, DATEDIFF, TIMESTAMPDIFF, DATE_ADD, DATE_SUB, DATE_FORMAT, EXTRACT, STR_TO_DATE, LAST_DAY, and time zone conversion. Includes 60+ interview-style practice questions with runnable queries and outputs."
slug: date-and-time-functions
canonical: https://learn.modernagecoders.com/resources/sql/date-and-time-functions
category: "SQL"
keywords: ["sql date functions", "mysql date_format", "sql datediff", "timestampdiff", "mysql now curdate", "sql date arithmetic", "str_to_date", "sql group by month", "mysql timestamp vs datetime", "sql extract year month"]
---
# Date and Time Functions in SQL

**Difficulty:** Intermediate  
**Reading time:** 42 min  
**Chapter:** 16  
**Practice questions:** 60

## What Are Date and Time Functions?

Dates in SQL are not just strings. MySQL stores them as structured values that understand the calendar — leap years, daylight saving time, the last day of February, the number of days between two dates. Date and time functions are the set of built-in functions MySQL ships to read the current moment, extract parts from a date, shift dates forward or backward, and format them for display.

Once orders, signups, payments, and attendance records land in a database, almost every business question is a date question. *"How many orders did we get last week?" "Which customers haven't logged in for 30 days?" "Give me revenue grouped by month for the last year."* Each of these needs a date function.

```
-- Today's date and the exact moment right now
SELECT CURDATE(), NOW();
-- 2026-04-16 | 2026-04-16 14:23:07

-- Orders placed in the last 7 days
SELECT * FROM orders
WHERE order_date >= CURDATE() - INTERVAL 7 DAY;
```

Every date function in MySQL falls into one of four buckets: **getting** the current time (NOW, CURDATE, CURTIME), **extracting** parts (YEAR, MONTH, DAY, HOUR), **arithmetic** (DATE_ADD, DATE_SUB, DATEDIFF, TIMESTAMPDIFF), and **formatting / parsing** (DATE_FORMAT, STR_TO_DATE).

### The Three Storage Types

Before writing a single function, know where your data lives. MySQL has three main date-related column types, and picking the wrong one will hurt you later:

```
-- DATE: just a calendar date, 3 bytes, no time, no timezone
order_date DATE               -- '2026-04-16'

-- DATETIME: date + time, 8 bytes, NO timezone awareness
logged_in_at DATETIME         -- '2026-04-16 14:23:07'

-- TIMESTAMP: date + time, 4 bytes, stored as UTC internally,
-- auto-converts to the session's time zone on read
created_at   TIMESTAMP        -- shown as IST, stored as UTC
```

## Why Date Functions Matter

### 1. Every Business Report Is a Date Query

Open any analytics dashboard — Flipkart seller panel, Zomato restaurant dashboard, a school's fee dashboard — and more than half the numbers are grouped by day, week, or month. *Sales today vs yesterday. Week-over-week growth. Active users in the last 30 days.* Without fluent date functions, you cannot even start writing these queries.

### 2. Filtering Is the #1 Use Case

"Give me everything from the last 7 days" is the most common WHERE clause in the database. You cannot write it without `CURDATE()` and `INTERVAL`. A data analyst who cannot filter by a rolling window is stuck.

### 3. Dates as Strings Are a Bug Waiting to Happen

Beginners often store dates as `VARCHAR` like `'16-04-2026'`. Sorting breaks, date arithmetic is impossible, and `'31-01-2026' > '01-02-2026'` evaluates to true (wrong). Using real DATE columns plus date functions prevents this entire class of bug.

### 4. Time Zones Bite in Production

When Modern Age Coders launches a course at 7 PM IST, the database server might be in UTC, the user's laptop in EST. If you don't understand `TIMESTAMP` versus `DATETIME`, users will see the wrong start time. This chapter covers `CONVERT_TZ()` so you don't ship that bug.

### 5. Interview Favorites Are Date-Heavy

"Find customers whose orders are at least 30 days apart", "Get month-over-month growth", "List employees with more than 2 years tenure" — these questions depend entirely on DATEDIFF, TIMESTAMPDIFF, and DATE_ADD. They appear in almost every data analyst interview.

## Detailed Explanation

### 1. Getting the Current Moment

MySQL gives three functions to read "now", each with a different precision:

```
SELECT
  NOW()      AS now_datetime,     -- 2026-04-16 14:23:07
  CURDATE()  AS today,             -- 2026-04-16
  CURTIME()  AS time_only,         -- 14:23:07
  CURRENT_TIMESTAMP AS also_now;   -- same as NOW()
```

`NOW()` returns a DATETIME (date + time). `CURDATE()` returns only the DATE. `CURTIME()` returns only the TIME. All three read from the MySQL server clock, not the client. `NOW()` within a single query always returns the same value even if the query runs for minutes — use `SYSDATE()` if you actually want the clock to re-read.

### 2. DATEDIFF vs TIMESTAMPDIFF

These are the two functions people mix up most often. Both measure the distance between two dates, but they count different things.

```
-- DATEDIFF always returns an INTEGER number of DAYS
SELECT DATEDIFF('2026-04-16', '2026-04-10');  -- 6
SELECT DATEDIFF('2026-04-16', '2026-05-16');  -- -30 (can be negative)

-- TIMESTAMPDIFF takes a unit and is far more flexible
SELECT TIMESTAMPDIFF(DAY,   '2026-01-01', '2026-04-16');  -- 105
SELECT TIMESTAMPDIFF(MONTH, '2026-01-01', '2026-04-16');  -- 3
SELECT TIMESTAMPDIFF(YEAR,  '2008-04-16', '2026-04-16');  -- 18
SELECT TIMESTAMPDIFF(HOUR,  '2026-04-16 09:00', '2026-04-16 14:30');  -- 5
```

**Rule of thumb**: use DATEDIFF only for days and only when sign does not matter. Use TIMESTAMPDIFF for everything else, especially age calculation (YEAR between DOB and today) and tenure (MONTH between hire_date and today).

### 3. Adding and Subtracting Intervals

Never manually add days by doing `date + 7`. MySQL does not do what you want on DATE types. Use `DATE_ADD`, `DATE_SUB`, or the `+ INTERVAL` shortcut:

```
SELECT DATE_ADD('2026-04-16', INTERVAL 7 DAY);    -- 2026-04-23
SELECT DATE_SUB('2026-04-16', INTERVAL 1 MONTH);  -- 2026-03-16
SELECT DATE_ADD(NOW(), INTERVAL 2 HOUR);          -- 2026-04-16 16:23:07
SELECT CURDATE() + INTERVAL 30 DAY;               -- 2026-05-16
SELECT CURDATE() - INTERVAL 90 DAY;               -- 2026-01-16
```

Supported intervals: `SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, QUARTER, YEAR`. Month math respects calendar length — adding 1 month to Jan 31 gives Feb 28 (or 29 in a leap year), not Mar 3.

### 4. DATE_FORMAT — Display Dates the Way You Want

Databases store dates in ISO format (`2026-04-16`). When you need to show a date as *"16th April, 2026"* or *"Thu 16 Apr 2:23 PM"*, use `DATE_FORMAT` with these codes:

CodeMeaningExample`%Y`4-digit year2026`%y`2-digit year26`%M`Full month nameApril`%b`Short month nameApr`%m`Month number, 2-digit04`%d`Day of month, 2-digit16`%e`Day of month, no padding6`%W`Full weekday nameThursday`%a`Short weekday nameThu`%H`Hour 00-2314`%h` / `%I`Hour 01-1202`%i`Minutes 00-5923`%s`Seconds 00-5907`%p`AM / PMPM

```
SELECT DATE_FORMAT(NOW(), '%W, %d %M %Y');
-- 'Thursday, 16 April 2026'

SELECT DATE_FORMAT(NOW(), '%d-%m-%Y %h:%i %p');
-- '16-04-2026 02:23 PM'

SELECT DATE_FORMAT(NOW(), '%Y-%m');
-- '2026-04' (useful for GROUP BY month)
```

### 5. EXTRACT and the Shortcuts

To pull a single part out of a date, EXTRACT is the portable way, and YEAR(), MONTH(), DAY() are the MySQL shortcuts:

```
SELECT EXTRACT(YEAR   FROM '2026-04-16');    -- 2026
SELECT EXTRACT(MONTH  FROM '2026-04-16');    -- 4
SELECT EXTRACT(DAY    FROM '2026-04-16');    -- 16
SELECT EXTRACT(HOUR   FROM '2026-04-16 14:23:07');  -- 14

-- Shortcuts
SELECT YEAR(NOW()), MONTH(NOW()), DAY(NOW());
SELECT HOUR(NOW()), MINUTE(NOW()), SECOND(NOW());

-- Calendar helpers
SELECT DAYOFWEEK('2026-04-16');   -- 5 (Sunday=1, Thursday=5)
SELECT DAYNAME('2026-04-16');     -- 'Thursday'
SELECT MONTHNAME('2026-04-16');   -- 'April'
SELECT WEEK('2026-04-16');        -- 15 (ISO week number)
SELECT QUARTER('2026-04-16');     -- 2
SELECT DAYOFYEAR('2026-04-16');   -- 106
```

**Warning on DAYOFWEEK**: MySQL numbers Sunday as 1, Saturday as 7. Most of the world considers Monday the start of the week. Use `WEEKDAY()` instead, which numbers Monday=0, Sunday=6.

### 6. STR_TO_DATE — Parsing Strings Into Dates

When data arrives as a string (CSV uploads, API responses), you have to convert it. STR_TO_DATE is the inverse of DATE_FORMAT — same format codes, different direction:

```
SELECT STR_TO_DATE('16-04-2026', '%d-%m-%Y');
-- 2026-04-16 (as a proper DATE value)

SELECT STR_TO_DATE('April 16, 2026', '%M %d, %Y');
-- 2026-04-16

SELECT STR_TO_DATE('16/04/2026 02:23 PM', '%d/%m/%Y %h:%i %p');
-- 2026-04-16 14:23:00
```

If the string does not match the format, MySQL returns NULL. Always validate your import with a COUNT of NULLs before bulk-loading data.

### 7. LAST_DAY, TIMEDIFF, and Utility Functions

```
SELECT LAST_DAY('2026-04-16');   -- 2026-04-30 (last day of April)
SELECT LAST_DAY('2028-02-05');   -- 2028-02-29 (leap year)

-- TIMEDIFF returns a TIME value, good for same-day intervals
SELECT TIMEDIFF('14:30:00', '09:15:00');   -- 05:15:00

-- DATE() strips time off a DATETIME
SELECT DATE('2026-04-16 14:23:07');   -- 2026-04-16

-- TIME() strips date off a DATETIME
SELECT TIME('2026-04-16 14:23:07');   -- 14:23:07

-- UNIX_TIMESTAMP and FROM_UNIXTIME for epoch conversion
SELECT UNIX_TIMESTAMP('2026-04-16 14:23:07');  -- 1776695987
SELECT FROM_UNIXTIME(1776695987);               -- 2026-04-16 14:23:07
```

### 8. Time Zones and CONVERT_TZ

This is where junior devs lose hours of their life. MySQL has three relevant time zones: the **system** time zone (server OS), the **global** time zone (MySQL setting), and the **session** time zone (current connection).

```
-- Check what your session thinks
SELECT @@global.time_zone, @@session.time_zone;

-- Change for the current session
SET time_zone = '+05:30';   -- IST
SET time_zone = 'Asia/Kolkata';  -- named (requires tz tables loaded)

-- Convert a DATETIME from one zone to another
SELECT CONVERT_TZ('2026-04-16 14:23:07', '+00:00', '+05:30');
-- 2026-04-16 19:53:07  (UTC to IST)

SELECT CONVERT_TZ(NOW(), @@session.time_zone, '+00:00');
-- NOW in UTC
```

### 9. DATE vs DATETIME vs TIMESTAMP — The Decision

This is a common interview question. Pick based on what the column represents:

- **DATE** — only the calendar day matters. Date of birth, holiday date, invoice date.
- **DATETIME** — a specific moment that should never change with time zones. Scheduled webinar at 7 PM IST *as displayed to the user*.
- **TIMESTAMP** — audit-style fields like `created_at` and `updated_at` that represent a point in universal time. Stored as UTC internally, converted to the session TZ on read. Range limit: 1970 to 2038 (TIMESTAMP is 4 bytes).

```
CREATE TABLE orders (
  id           INT PRIMARY KEY,
  order_date   DATE NOT NULL,                -- customer-facing date
  placed_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- audit
  delivery_at  DATETIME                      -- scheduled moment
);
```

### 10. Common Patterns You Will Write 100 Times

```
-- 1. Orders in the last 7 days
SELECT * FROM orders
WHERE order_date >= CURDATE() - INTERVAL 7 DAY;

-- 2. Age from date of birth
SELECT name, TIMESTAMPDIFF(YEAR, dob, CURDATE()) AS age
FROM students;

-- 3. Revenue grouped by month
SELECT DATE_FORMAT(order_date, '%Y-%m') AS month,
       SUM(amount) AS revenue
FROM orders
GROUP BY month
ORDER BY month;

-- 4. Sign-ups per weekday
SELECT DAYNAME(created_at) AS day_of_week, COUNT(*) AS signups
FROM users
GROUP BY day_of_week
ORDER BY FIELD(day_of_week,'Monday','Tuesday','Wednesday',
               'Thursday','Friday','Saturday','Sunday');

-- 5. Yesterday's orders (avoid off-by-one)
SELECT * FROM orders
WHERE order_date = CURDATE() - INTERVAL 1 DAY;

-- 6. Customers inactive for 30+ days
SELECT user_id, MAX(last_login) AS last_seen
FROM sessions
GROUP BY user_id
HAVING DATEDIFF(CURDATE(), MAX(last_login)) >= 30;
```

## Code Examples

### Getting 'Now' with NOW, CURDATE, and CURTIME

```sql
-- Sample: no table needed
SELECT
  NOW()              AS current_moment,
  CURDATE()          AS today,
  CURTIME()          AS time_only,
  UNIX_TIMESTAMP()   AS epoch_seconds,
  DAYNAME(CURDATE()) AS today_weekday;
```

`NOW()` returns a full DATETIME, `CURDATE()` only the date, `CURTIME()` only the time. `UNIX_TIMESTAMP()` gives you seconds since 1970-01-01 UTC — useful for APIs. `DAYNAME(CURDATE())` converts today's date into the weekday name.

**Output:**

```
+---------------------+------------+-----------+----------------+---------------+
| current_moment      | today      | time_only | epoch_seconds  | today_weekday |
+---------------------+------------+-----------+----------------+---------------+
| 2026-04-16 14:23:07 | 2026-04-16 | 14:23:07  |     1776695987 | Thursday      |
+---------------------+------------+-----------+----------------+---------------+
```

### Orders in the Last 7 Days with INTERVAL

```sql
CREATE TABLE orders (
  id           INT PRIMARY KEY,
  customer     VARCHAR(50),
  order_date   DATE,
  amount       DECIMAL(10,2)
);

INSERT INTO orders VALUES
  (1, 'Aarav Sharma',   '2026-04-16',  1200.00),
  (2, 'Priya Nair',     '2026-04-15',   850.50),
  (3, 'Rohan Mehta',    '2026-04-13',  2400.00),
  (4, 'Ananya Iyer',    '2026-04-10',   999.00),
  (5, 'Vikram Singh',   '2026-04-05',  3100.00),
  (6, 'Meera Krishnan', '2026-03-20',   450.00);

-- Orders from the last 7 days (today is 2026-04-16)
SELECT id, customer, order_date, amount
FROM orders
WHERE order_date >= CURDATE() - INTERVAL 7 DAY
ORDER BY order_date DESC;
```

`CURDATE() - INTERVAL 7 DAY` gives 2026-04-09. The WHERE clause keeps rows where `order_date` is on or after that. Because we compared directly on the indexed column (no function wrapping it), MySQL can use an index on `order_date` efficiently.

**Output:**

```
+----+---------------+------------+---------+
| id | customer      | order_date | amount  |
+----+---------------+------------+---------+
|  1 | Aarav Sharma  | 2026-04-16 | 1200.00 |
|  2 | Priya Nair    | 2026-04-15 |  850.50 |
|  3 | Rohan Mehta   | 2026-04-13 | 2400.00 |
|  4 | Ananya Iyer   | 2026-04-10 |  999.00 |
+----+---------------+------------+---------+
```

### Age from Date of Birth using TIMESTAMPDIFF

```sql
CREATE TABLE students (
  id     INT PRIMARY KEY,
  name   VARCHAR(50),
  dob    DATE
);

INSERT INTO students VALUES
  (1, 'Ishaan Gupta',   '2008-11-12'),
  (2, 'Kavya Reddy',    '2006-02-29'),   -- leap-day baby
  (3, 'Arjun Pillai',   '2010-04-17'),   -- birthday tomorrow
  (4, 'Neha Choudhary', '2010-04-15');   -- birthday yesterday

-- Exact age today (2026-04-16)
SELECT name,
       dob,
       TIMESTAMPDIFF(YEAR, dob, CURDATE()) AS age
FROM students;
```

`TIMESTAMPDIFF(YEAR, dob, CURDATE())` is the correct way to compute age. It returns whole years and correctly handles the day-of-year boundary — Arjun is still 15 because his birthday is tomorrow. Using `DATEDIFF/365` would give wrong results because of leap years.

**Output:**

```
+----------------+------------+-----+
| name           | dob        | age |
+----------------+------------+-----+
| Ishaan Gupta   | 2008-11-12 |  17 |
| Kavya Reddy    | 2006-02-29 |  20 |
| Arjun Pillai   | 2010-04-17 |  15 |
| Neha Choudhary | 2010-04-15 |  16 |
+----------------+------------+-----+
```

### Monthly Revenue with DATE_FORMAT and GROUP BY

```sql
CREATE TABLE sales (
  id         INT PRIMARY KEY,
  sold_at    DATETIME,
  amount     DECIMAL(10,2)
);

INSERT INTO sales VALUES
  (1, '2026-01-10 10:22:00',  1200),
  (2, '2026-01-25 15:40:00',   800),
  (3, '2026-02-03 09:10:00',  2200),
  (4, '2026-02-28 18:05:00',  1500),
  (5, '2026-03-12 11:30:00',  3100),
  (6, '2026-03-29 20:00:00',   950),
  (7, '2026-04-05 13:15:00',  1800),
  (8, '2026-04-15 16:45:00',  2650);

SELECT DATE_FORMAT(sold_at, '%Y-%m') AS month,
       COUNT(*)                       AS orders,
       SUM(amount)                    AS revenue
FROM sales
GROUP BY month
ORDER BY month;
```

`DATE_FORMAT(sold_at, '%Y-%m')` flattens every sale into its month bucket (like '2026-03'). GROUP BY then aggregates per month. Sorting alphabetically works here because the ISO format sorts chronologically — never use '%d/%m/%Y' for GROUP BY, it will sort wrong.

**Output:**

```
+---------+--------+---------+
| month   | orders | revenue |
+---------+--------+---------+
| 2026-01 |      2 |    2000 |
| 2026-02 |      2 |    3700 |
| 2026-03 |      2 |    4050 |
| 2026-04 |      2 |    4450 |
+---------+--------+---------+
```

### Parsing Messy Date Strings with STR_TO_DATE

```sql
CREATE TABLE raw_upload (
  id          INT PRIMARY KEY,
  raw_date    VARCHAR(30)
);

INSERT INTO raw_upload VALUES
  (1, '16-04-2026'),
  (2, '05/04/2026'),
  (3, 'April 12, 2026'),
  (4, '2026.04.09');

SELECT id,
       raw_date,
       CASE
         WHEN raw_date LIKE '%-%'      THEN STR_TO_DATE(raw_date, '%d-%m-%Y')
         WHEN raw_date LIKE '%/%'      THEN STR_TO_DATE(raw_date, '%d/%m/%Y')
         WHEN raw_date LIKE '%.%'      THEN STR_TO_DATE(raw_date, '%Y.%m.%d')
         ELSE STR_TO_DATE(raw_date, '%M %d, %Y')
       END AS parsed_date
FROM raw_upload;
```

`STR_TO_DATE` takes a string and a format pattern (same codes as DATE_FORMAT) and returns a proper DATE. Use CASE to pick the right format per row. If the format does not match, STR_TO_DATE returns NULL — always check for NULLs after bulk conversion.

**Output:**

```
+----+-----------------+-------------+
| id | raw_date        | parsed_date |
+----+-----------------+-------------+
|  1 | 16-04-2026      | 2026-04-16  |
|  2 | 05/04/2026      | 2026-04-05  |
|  3 | April 12, 2026  | 2026-04-12  |
|  4 | 2026.04.09      | 2026-04-09  |
+----+-----------------+-------------+
```

### Customers Inactive for 30+ Days

```sql
CREATE TABLE sessions (
  user_id      INT,
  last_login   DATETIME
);

INSERT INTO sessions VALUES
  (101, '2026-04-15 09:12:00'),
  (102, '2026-03-05 14:20:00'),   -- 42 days ago
  (103, '2026-04-10 11:00:00'),
  (104, '2026-01-20 08:30:00'),   -- 86 days ago
  (105, '2026-03-14 22:15:00');   -- 33 days ago

SELECT user_id,
       MAX(last_login)                          AS last_seen,
       DATEDIFF(CURDATE(), MAX(last_login))     AS days_inactive
FROM sessions
GROUP BY user_id
HAVING days_inactive >= 30
ORDER BY days_inactive DESC;
```

`DATEDIFF(a, b)` gives `a - b` in whole days. We compute it against `CURDATE()` for each user's most recent login, then filter with HAVING (not WHERE, because we're filtering on an aggregate).

**Output:**

```
+---------+---------------------+---------------+
| user_id | last_seen           | days_inactive |
+---------+---------------------+---------------+
|     104 | 2026-01-20 08:30:00 |            86 |
|     102 | 2026-03-05 14:20:00 |            42 |
|     105 | 2026-03-14 22:15:00 |            33 |
+---------+---------------------+---------------+
```

### Time Zone Conversion for Global Users

```sql
CREATE TABLE webinars (
  id          INT PRIMARY KEY,
  topic       VARCHAR(60),
  starts_utc  DATETIME   -- stored in UTC
);

INSERT INTO webinars VALUES
  (1, 'Python Masterclass', '2026-04-20 13:30:00'),
  (2, 'SQL Interview Prep', '2026-04-22 14:00:00'),
  (3, 'Web Dev Bootcamp',   '2026-04-25 03:00:00');

-- Show times to users in India (IST, +05:30) and New York (-04:00, DST)
SELECT topic,
       starts_utc                                          AS utc,
       CONVERT_TZ(starts_utc, '+00:00', '+05:30')          AS ist,
       CONVERT_TZ(starts_utc, '+00:00', '-04:00')          AS new_york,
       DATE_FORMAT(CONVERT_TZ(starts_utc,'+00:00','+05:30'),
                   '%W, %d %b %h:%i %p')                   AS display_ist
FROM webinars;
```

Store all timestamps in UTC, convert at display time. `CONVERT_TZ(value, from_tz, to_tz)` shifts the datetime to the target offset. Wrap the result in DATE_FORMAT to produce a user-friendly string. This is the standard architecture for any global application.

**Output:**

```
+--------------------+---------------------+---------------------+---------------------+---------------------------+
| topic              | utc                 | ist                 | new_york            | display_ist               |
+--------------------+---------------------+---------------------+---------------------+---------------------------+
| Python Masterclass | 2026-04-20 13:30:00 | 2026-04-20 19:00:00 | 2026-04-20 09:30:00 | Monday, 20 Apr 07:00 PM   |
| SQL Interview Prep | 2026-04-22 14:00:00 | 2026-04-22 19:30:00 | 2026-04-22 10:00:00 | Wednesday, 22 Apr 07:30 PM|
| Web Dev Bootcamp   | 2026-04-25 03:00:00 | 2026-04-25 08:30:00 | 2026-04-24 23:00:00 | Saturday, 25 Apr 08:30 AM |
+--------------------+---------------------+---------------------+---------------------+---------------------------+
```

### LAST_DAY, Quarter, and Week Utilities

```sql
SELECT
  '2026-04-16'                                  AS d,
  LAST_DAY('2026-04-16')                        AS end_of_month,
  DAYOFYEAR('2026-04-16')                       AS day_of_year,
  QUARTER('2026-04-16')                         AS quarter,
  WEEKOFYEAR('2026-04-16')                      AS iso_week,
  DAYOFWEEK('2026-04-16')                       AS mysql_dow,     -- 1=Sun
  WEEKDAY('2026-04-16')                         AS iso_dow,       -- 0=Mon
  DATE_ADD(LAST_DAY('2026-04-16'), INTERVAL 1 DAY) AS first_of_next_month;
```

`LAST_DAY` is handy for month-end reports. Adding 1 day to LAST_DAY gives the first day of the next month — use that trick for monthly cron windows. Note the two day-of-week functions: `DAYOFWEEK` starts at Sunday, `WEEKDAY` starts at Monday. Prefer WEEKDAY for ISO-style reporting.

**Output:**

```
+------------+--------------+-------------+---------+----------+-----------+---------+---------------------+
| d          | end_of_month | day_of_year | quarter | iso_week | mysql_dow | iso_dow | first_of_next_month |
+------------+--------------+-------------+---------+----------+-----------+---------+---------------------+
| 2026-04-16 | 2026-04-30   |         106 |       2 |       16 |         5 |       3 | 2026-05-01          |
+------------+--------------+-------------+---------+----------+-----------+---------+---------------------+
```

## Common Mistakes

### Wrapping an Indexed Date Column in a Function

**Wrong:**

```
-- Kills any index on order_date
SELECT * FROM orders
WHERE YEAR(order_date) = 2026
  AND MONTH(order_date) = 4;
```

No syntax error, but the query does a FULL TABLE SCAN even if order_date is indexed. Any function wrapping the column disables index usage.

**Correct:**

```
-- Use a range predicate instead
SELECT * FROM orders
WHERE order_date >= '2026-04-01'
  AND order_date <  '2026-05-01';
```

Functions applied to indexed columns prevent the optimizer from using the index, because it would have to apply the function to every row first. Always keep the column bare on one side of the comparison and compute the range on the other side.

### Confusing DATEDIFF Argument Order

**Wrong:**

```
-- Intends to check 'was order more than 7 days ago?'
SELECT * FROM orders
WHERE DATEDIFF(order_date, CURDATE()) > 7;
```

No syntax error, but this is backwards. DATEDIFF('2026-04-10', '2026-04-16') returns -6, never >7. The WHERE clause will return zero rows.

**Correct:**

```
-- DATEDIFF(later, earlier) or just use INTERVAL
SELECT * FROM orders
WHERE DATEDIFF(CURDATE(), order_date) > 7;
-- Or the cleaner version:
SELECT * FROM orders
WHERE order_date < CURDATE() - INTERVAL 7 DAY;
```

`DATEDIFF(a, b)` returns `a - b`. If you want a positive number of days, put the later date first. For readability and performance, prefer the `column <= CURDATE() - INTERVAL n DAY` pattern.

### Using DATE_FORMAT in GROUP BY with a Localized Pattern

**Wrong:**

```
-- Months sorted alphabetically, not chronologically
SELECT DATE_FORMAT(sold_at, '%M %Y') AS month, SUM(amount)
FROM sales
GROUP BY month
ORDER BY month;
```

No error, but output is sorted 'April 2026, February 2026, January 2026...' because it sorts strings alphabetically.

**Correct:**

```
-- Group by sortable ISO format, then format for display
SELECT DATE_FORMAT(sold_at, '%Y-%m') AS month_key,
       DATE_FORMAT(MIN(sold_at), '%M %Y') AS month_label,
       SUM(amount) AS revenue
FROM sales
GROUP BY month_key
ORDER BY month_key;
```

ISO format `%Y-%m` sorts chronologically as a string. Group by that, and format for display separately using `MIN(sold_at)` or a second DATE_FORMAT call.

### Storing Dates as VARCHAR

**Wrong:**

```
CREATE TABLE bad_orders (
  id   INT PRIMARY KEY,
  date VARCHAR(20)   -- '16-04-2026' as a string
);

-- Sorting breaks completely
SELECT * FROM bad_orders ORDER BY date;
-- '01-02-2026' comes before '16-04-2026' alphabetically,
-- but also before '05-01-2026', which is wrong chronologically.
```

No SQL error, but every date operation gives wrong results — sorts, ranges, DATEDIFF, DATE_ADD all fail because there is no date semantics.

**Correct:**

```
CREATE TABLE orders (
  id         INT PRIMARY KEY,
  order_date DATE   -- proper type
);
-- Sorting, ranges, and all date functions now work correctly.
```

Always store dates in DATE, DATETIME, or TIMESTAMP columns. Use VARCHAR only for display-only fields that you never query or sort. If data arrives as a string, parse it with STR_TO_DATE on INSERT.

### Mixing DATETIME Across Time Zones Without TIMESTAMP

**Wrong:**

```
-- Table has DATETIME, server moved from IST to UTC
CREATE TABLE logs (event_at DATETIME);
INSERT INTO logs VALUES (NOW());
-- Months later, server is moved to UTC.
-- Old values look 5h30 off, but they are just stored as raw strings.
```

No error, but data is silently wrong after any server time zone change. DATETIME is 'just a clock reading' — MySQL does not know which time zone it was recorded in.

**Correct:**

```
-- Use TIMESTAMP for audit timestamps
CREATE TABLE logs (
  event_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- TIMESTAMP is stored as UTC internally and always
-- re-interpreted in the session's current time zone.
```

For timestamps that represent 'a real moment in time' (created_at, updated_at, login_at), use TIMESTAMP so the server converts to/from UTC automatically. Reserve DATETIME for 'wall clock' values like scheduled event times where the display value is what matters.

## Summary

- Use NOW() for current datetime, CURDATE() for today's date, CURTIME() for current time. NOW() stays constant within a single statement; SYSDATE() re-reads the clock.
- DATEDIFF returns the difference in whole days only. TIMESTAMPDIFF(unit, a, b) is flexible — use it for age (YEAR), tenure (MONTH), and hour-level gaps.
- Never add days with plain arithmetic. Use DATE_ADD(date, INTERVAL 7 DAY) or the shorthand date + INTERVAL 7 DAY. Supported units: SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, QUARTER, YEAR.
- DATE_FORMAT(date, pattern) converts a date to a display string using format codes (%Y, %m, %d, %H, %i, %M, %W, etc.). For GROUP BY, always use sortable patterns like '%Y-%m'.
- STR_TO_DATE is the inverse: it parses a string into a DATE using the same format codes. Returns NULL on mismatch, so always check after bulk imports.
- EXTRACT(unit FROM date) is the portable way to get a date part. YEAR(), MONTH(), DAY(), HOUR() are the MySQL shortcuts. DAYOFWEEK starts at Sunday=1; WEEKDAY starts at Monday=0.
- LAST_DAY(date) returns the last day of the month. DATE_ADD(LAST_DAY(d), INTERVAL 1 DAY) gives the first day of the next month — handy for monthly windows.
- Wrapping an indexed date column in a function (YEAR(col)) prevents index usage. Rewrite as a range: col >= '2026-01-01' AND col < '2027-01-01'.
- Store dates in DATE/DATETIME/TIMESTAMP, never VARCHAR. VARCHAR breaks sorting, arithmetic, and indexing.
- DATE is just a calendar day (DOB, invoice date). DATETIME is a wall-clock moment with no time zone awareness. TIMESTAMP is UTC internally with session-TZ conversion on read — use it for created_at, updated_at, and any audit field.

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/date-and-time-functions/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/date-and-time-functions/practice/*
