---
title: "Practice: Date and Time Functions in SQL"
description: "60 practice problems for Date and Time Functions in SQL in SQL"
slug: date-and-time-functions-practice
canonical: https://learn.modernagecoders.com/resources/sql/date-and-time-functions/practice/
category: "SQL"
---
# Practice: Date and Time Functions in SQL

**Total questions:** 60

## Topic-Specific Questions

### Q1. [Easy] What does this query return (assume today is 2026-04-16)?

```
SELECT CURDATE();
```

*Hint:* CURDATE() returns only the date portion.

**Answer:** `2026-04-16`

CURDATE() returns the server's current date as a DATE value, without any time component.

### Q2. [Easy] What is the output?

```
SELECT DATEDIFF('2026-04-16', '2026-04-10');
```

*Hint:* DATEDIFF(a, b) = a - b in days.

**Answer:** `6`

DATEDIFF subtracts the second date from the first and returns the number of whole days. April 16 minus April 10 = 6.

### Q3. [Easy] What is the output?

```
SELECT DATEDIFF('2026-04-10', '2026-04-16');
```

*Hint:* DATEDIFF can return negative values.

**Answer:** `-6`

DATEDIFF(a, b) returns a - b. When the first date is earlier, the result is negative.

### Q4. [Easy] What is the output?

```
SELECT DATE_ADD('2026-04-16', INTERVAL 7 DAY);
```

*Hint:* Add 7 days to April 16.

**Answer:** `2026-04-23`

DATE_ADD adds the specified interval. 16 + 7 = 23, same month.

### Q5. [Easy] What is the output?

```
SELECT DATE_SUB('2026-04-16', INTERVAL 1 MONTH);
```

*Hint:* Subtract one month from April 16.

**Answer:** `2026-03-16`

DATE_SUB subtracts the interval. April 16 minus 1 month = March 16.

### Q6. [Easy] What is the output?

```
SELECT YEAR('2026-04-16'), MONTH('2026-04-16'), DAY('2026-04-16');
```

*Hint:* Each function extracts a single part.

**Answer:** `2026  4  16`

YEAR returns 2026, MONTH returns 4 (not 04 — it's a number), DAY returns 16.

### Q7. [Easy] What is the output?

```
SELECT DATE_FORMAT('2026-04-16', '%d-%m-%Y');
```

*Hint:* %d = day, %m = month, %Y = 4-digit year.

**Answer:** `16-04-2026`

DATE_FORMAT reformats the date into the requested pattern. %d gives 2-digit day, %m gives 2-digit month, %Y gives 4-digit year.

### Q8. [Easy] What is the output?

```
SELECT DAYNAME('2026-04-16');
```

*Hint:* April 16, 2026 falls on which day?

**Answer:** `Thursday`

DAYNAME returns the full English name of the weekday. April 16, 2026 is a Thursday.

### Q9. [Easy] What is the output?

```
SELECT LAST_DAY('2026-02-10');
```

*Hint:* 2026 is not a leap year.

**Answer:** `2026-02-28`

LAST_DAY returns the last day of the month. February 2026 has 28 days because 2026 is not divisible by 4.

### Q10. [Easy] What is the output?

```
SELECT LAST_DAY('2028-02-10');
```

*Hint:* Is 2028 a leap year?

**Answer:** `2028-02-29`

2028 is divisible by 4 and not a century year, so it is a leap year. February has 29 days.

### Q11. [Medium] What is the output?

```
SELECT TIMESTAMPDIFF(MONTH, '2024-01-15', '2026-04-16');
```

*Hint:* Count whole months between the two dates.

**Answer:** `27`

From Jan 15, 2024 to Apr 16, 2026 is 2 years 3 months 1 day = 27 complete months. TIMESTAMPDIFF returns the whole-month count.

### Q12. [Medium] What is the output?

```
SELECT TIMESTAMPDIFF(YEAR, '2010-04-17', '2026-04-16');
```

*Hint:* The second date is ONE DAY before the birthday.

**Answer:** `15`

The 16th birthday would be on 2026-04-17. On 2026-04-16 we have not yet reached it, so TIMESTAMPDIFF returns 15 complete years, not 16.

### Q13. [Medium] What is the output?

```
SELECT DATE_ADD('2026-01-31', INTERVAL 1 MONTH);
```

*Hint:* January 31 + 1 month. What is February's last day?

**Answer:** `2026-02-28`

Adding 1 month to Jan 31 would give Feb 31, which does not exist. MySQL clamps to the last valid day of the target month — Feb 28 in 2026 (not a leap year).

### Q14. [Medium] What is the output?

```
SELECT QUARTER('2026-04-16'), QUARTER('2026-11-05');
```

*Hint:* Quarters are Jan-Mar=1, Apr-Jun=2, Jul-Sep=3, Oct-Dec=4.

**Answer:** `2  4`

April falls in Q2 (Apr-Jun). November falls in Q4 (Oct-Dec).

### Q15. [Medium] What is the output?

```
SELECT DAYOFWEEK('2026-04-16'), WEEKDAY('2026-04-16');
```

*Hint:* DAYOFWEEK: Sunday=1. WEEKDAY: Monday=0.

**Answer:** `5  3`

April 16, 2026 is a Thursday. In DAYOFWEEK (Sun=1), Thursday is 5. In WEEKDAY (Mon=0), Thursday is 3.

### Q16. [Medium] What is the output?

```
SELECT STR_TO_DATE('16/04/2026', '%d/%m/%Y');
```

*Hint:* Parse the string using the given format.

**Answer:** `2026-04-16`

STR_TO_DATE reads '16/04/2026' using the pattern '%d/%m/%Y' and returns a proper DATE value in ISO format.

### Q17. [Medium] What is the output?

```
SELECT STR_TO_DATE('2026-13-01', '%Y-%m-%d');
```

*Hint:* Is month 13 valid?

**Answer:** `NULL`

Month 13 is invalid, so STR_TO_DATE cannot produce a valid date and returns NULL. Always validate NULLs after parsing user input.

### Q18. [Hard] What is the output?

```
SELECT DATE_FORMAT('2026-04-16 14:23:07', '%W, %d %b %Y %h:%i %p');
```

*Hint:* %W full day, %b short month, %h 12-hour, %p AM/PM.

**Answer:** `Thursday, 16 Apr 2026 02:23 PM`

%W = Thursday (full weekday), %b = Apr (short month), %h = 02 (12-hour), %i = 23 (minutes), %p = PM. Put together: 'Thursday, 16 Apr 2026 02:23 PM'.

### Q19. [Hard] What is the output?

```
SELECT DATE_ADD(LAST_DAY('2026-02-05'), INTERVAL 1 DAY);
```

*Hint:* LAST_DAY of Feb 2026, then add 1.

**Answer:** `2026-03-01`

LAST_DAY('2026-02-05') = 2026-02-28 (2026 is not a leap year). Adding 1 day gives March 1. This is the standard trick to jump to the first day of the next month.

### Q20. [Medium] When should you use DATE vs DATETIME vs TIMESTAMP?

*Hint:* Think about time zones and what the column represents.

**Answer:** Use `DATE` when only the calendar day matters (date of birth, invoice date, holiday). Use `DATETIME` for wall-clock moments that should not shift with time zones (a scheduled event's display time). Use `TIMESTAMP` for audit fields (created_at, updated_at) where the column represents a real universal moment — MySQL stores it as UTC and auto-converts to the session's time zone on read.

The key difference: DATETIME is 'dumb', TIMESTAMP is time-zone aware. TIMESTAMP is also limited to the range 1970 to 2038 because it is stored as a 4-byte Unix epoch.

### Q21. [Hard] Why does `WHERE YEAR(order_date) = 2026` often perform worse than `WHERE order_date >= '2026-01-01' AND order_date < '2027-01-01'`?

*Hint:* What happens to the index on order_date?

**Answer:** Wrapping an indexed column in a function (YEAR, MONTH, DATE_FORMAT, etc.) disables index usage — the optimizer would have to apply the function to every row to evaluate the WHERE. The range version keeps the column 'naked' on the left side, so MySQL can use the B-Tree index to seek directly to the 2026 rows. This is the single most common performance trap with date columns.

This is called a 'sargable' predicate. Sargable = Search ARGument ABLE = can use an index. Always prefer range predicates over function-wrapped ones on indexed columns.

### Q22. [Easy] Write a query that returns today's date and yesterday's date.

*Hint:* Use CURDATE() and INTERVAL.

**Answer:** ```
SELECT CURDATE() AS today,
       CURDATE() - INTERVAL 1 DAY AS yesterday;
```

CURDATE() gives today. Subtract 1 day using INTERVAL syntax.

### Q23. [Medium] Given an `orders(id, order_date, amount)` table, write a query that returns the total revenue for each month of 2026, sorted chronologically.

*Hint:* GROUP BY DATE_FORMAT with ISO pattern.

**Answer:** ```
SELECT DATE_FORMAT(order_date, '%Y-%m') AS month,
       SUM(amount) AS revenue
FROM orders
WHERE order_date >= '2026-01-01'
  AND order_date <  '2027-01-01'
GROUP BY month
ORDER BY month;
```

The ISO format '%Y-%m' groups correctly and sorts chronologically. The range filter is sargable — it uses the index on order_date.

### Q24. [Medium] Write a query to list students whose age is between 18 and 22 given a `students(name, dob)` table.

*Hint:* TIMESTAMPDIFF with YEAR.

**Answer:** ```
SELECT name, dob,
       TIMESTAMPDIFF(YEAR, dob, CURDATE()) AS age
FROM students
WHERE TIMESTAMPDIFF(YEAR, dob, CURDATE()) BETWEEN 18 AND 22;
```

TIMESTAMPDIFF(YEAR, dob, CURDATE()) gives the exact age in completed years. BETWEEN is inclusive on both ends.

### Q25. [Hard] Given `sessions(user_id, login_at DATETIME)`, find users whose most recent login was more than 90 days ago.

*Hint:* Aggregate with MAX then HAVING with DATEDIFF.

**Answer:** ```
SELECT user_id,
       MAX(login_at) AS last_seen,
       DATEDIFF(CURDATE(), MAX(login_at)) AS days_since
FROM sessions
GROUP BY user_id
HAVING days_since > 90;
```

GROUP BY user_id, then use HAVING to filter on the aggregate. DATEDIFF gives days between CURDATE and the latest login.

### Q26. [Medium] What is the output?

```
SELECT TIMEDIFF('14:30:00', '09:15:30');
```

*Hint:* TIMEDIFF returns a TIME value.

**Answer:** `05:14:30`

14:30:00 minus 09:15:30 = 5 hours, 14 minutes, 30 seconds. TIMEDIFF returns a TIME value, not an integer.

### Q27. [Medium] What is the output?

```
SELECT WEEK('2026-01-01');
```

*Hint:* January 1 is in which week of the year?

**Answer:** `0`

With the default mode (mode 0), MySQL's WEEK() returns 0 for the partial week at the start of the year when it does not contain a full week starting Sunday. Use WEEK(date, 3) for ISO-8601 style.

### Q28. [Hard] What is the output?

```
SELECT CONVERT_TZ('2026-04-16 00:30:00', '+05:30', '+00:00');
```

*Hint:* Subtract 5:30 from the given datetime.

**Answer:** `2026-04-15 19:00:00`

Converting from IST (+05:30) to UTC (+00:00) subtracts 5 hours 30 minutes. 00:30 becomes 19:00 of the previous day.

### Q29. [Medium] What is the difference between NOW() and SYSDATE()?

*Hint:* Think about a query that runs for several seconds.

**Answer:** `NOW()` returns the time the current statement started executing — every call within one statement returns the same value. `SYSDATE()` returns the actual system clock at the moment the function is called — it can return different values within the same statement. `NOW()` is deterministic (safe for replication). `SYSDATE()` is not.

In almost all application code, use NOW(). Use SYSDATE() only for profiling/benchmarking where you want the real wall-clock time per row.

## Mixed Questions

### Q1. [Easy] What does this return (today = 2026-04-16)?

```
SELECT CURDATE() - INTERVAL 30 DAY;
```

*Hint:* Subtract 30 days from April 16.

**Answer:** `2026-03-17`

April 16 minus 30 days goes back to March 17.

### Q2. [Easy] What is the output?

```
SELECT MONTHNAME('2026-07-20');
```

*Hint:* MONTHNAME returns the full English month name.

**Answer:** `July`

Month 07 is July. MONTHNAME returns the full English name.

### Q3. [Medium] Given `employees(name, hire_date)`, what does this return?

```
SELECT name,
       TIMESTAMPDIFF(YEAR, hire_date, CURDATE()) AS tenure_yrs
FROM employees
WHERE hire_date = '2020-04-16';
```

*Hint:* Hired exactly 6 years ago today.

**Answer:** `6`

From 2020-04-16 to 2026-04-16 is exactly 6 years. TIMESTAMPDIFF returns 6.

### Q4. [Medium] What is the output?

```
SELECT DATE_FORMAT('2026-04-16', '%Y/%m/%d'),
       DATE_FORMAT('2026-04-16', '%d %M, %Y');
```

*Hint:* Two different format patterns.

**Answer:** `2026/04/16  16 April, 2026`

First pattern produces slash-separated ISO. Second produces '16 April, 2026' using full month name.

### Q5. [Medium] Write a query that returns the number of orders placed each day for the last 7 days from `orders(id, order_date)`.

*Hint:* GROUP BY order_date with a 7-day filter.

**Answer:** ```
SELECT order_date, COUNT(*) AS order_count
FROM orders
WHERE order_date >= CURDATE() - INTERVAL 7 DAY
GROUP BY order_date
ORDER BY order_date;
```

The WHERE clause keeps only the last 7 days. GROUP BY gives one row per date with the count.

### Q6. [Medium] Given `users(id, name, created_at)`, write a query that counts new signups per day-of-week (Monday-Sunday).

*Hint:* Use DAYNAME and GROUP BY.

**Answer:** ```
SELECT DAYNAME(created_at) AS day_of_week,
       COUNT(*) AS signups
FROM users
GROUP BY day_of_week
ORDER BY FIELD(day_of_week,
               'Monday','Tuesday','Wednesday','Thursday',
               'Friday','Saturday','Sunday');
```

FIELD gives a custom sort order. Without it, days would sort alphabetically.

### Q7. [Hard] What is the output?

```
SELECT DATE_FORMAT(NOW(), '%Y-Q%q');
```

*Hint:* Is %q a valid format code?

**Answer:** `2026-Q` (followed by a literal 'q' — MySQL treats unknown % codes literally)

MySQL's DATE_FORMAT does not have a %q specifier for quarter. Unknown codes are passed through as the letter. For quarter, use QUARTER(NOW()) concatenated separately.

### Q8. [Hard] What is the output?

```
SELECT TIMESTAMPDIFF(DAY, '2026-02-15 23:00:00', '2026-02-16 01:00:00');
```

*Hint:* How many whole days between these datetimes?

**Answer:** `0`

Only 2 hours separate the two values. TIMESTAMPDIFF with DAY counts whole days, so it returns 0 even though the calendar date changed.

### Q9. [Hard] Given `orders(id, customer_id, order_date, amount)`, write a query that returns the month-over-month revenue growth percentage for 2026.

*Hint:* Use a self-join on month or LAG (covered in Chapter 18). For now try the self-join pattern.

**Answer:** ```
SELECT curr.month,
       curr.revenue,
       prev.revenue AS prev_revenue,
       ROUND((curr.revenue - prev.revenue) / prev.revenue * 100, 2) AS growth_pct
FROM (
  SELECT DATE_FORMAT(order_date, '%Y-%m') AS month,
         SUM(amount) AS revenue
  FROM orders
  WHERE YEAR(order_date) = 2026
  GROUP BY month
) curr
LEFT JOIN (
  SELECT DATE_FORMAT(order_date, '%Y-%m') AS month,
         SUM(amount) AS revenue
  FROM orders
  WHERE YEAR(order_date) = 2026
  GROUP BY month
) prev
  ON curr.month = DATE_FORMAT(DATE_ADD(STR_TO_DATE(CONCAT(prev.month,'-01'),'%Y-%m-%d'), INTERVAL 1 MONTH), '%Y-%m')
ORDER BY curr.month;
```

Self-join a monthly aggregate with itself, shifted by one month. Window functions in Chapter 18 will make this a 2-line query with LAG().

### Q10. [Medium] What is the output?

```
SELECT EXTRACT(HOUR FROM '2026-04-16 14:23:07');
```

*Hint:* Extract only the hour component.

**Answer:** `14`

EXTRACT(HOUR FROM ...) returns the hour in 24-hour format.

### Q11. [Hard] Why is TIMESTAMP limited to years 1970-2038 while DATETIME supports 1000-9999?

*Hint:* Think about how TIMESTAMP is stored internally.

**Answer:** TIMESTAMP is stored as a 4-byte signed integer representing seconds since the Unix epoch (1970-01-01 UTC). A 32-bit signed integer can hold values up to 2^31 - 1 = 2,147,483,647, which translates to 2038-01-19 03:14:07 UTC — this is the famous 'Y2038 problem'. DATETIME is stored as 8 bytes of packed date/time components, giving it a much wider range but no time-zone awareness.

For historical dates (pre-1970) or dates far in the future, use DATETIME. For modern audit timestamps where TZ-awareness matters, use TIMESTAMP — but plan for the Y2038 migration to 64-bit timestamps.

## Multiple Choice Questions

### Q1. [Easy] Which function returns the current date only, without the time?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** CURDATE() returns a DATE with no time. NOW() returns DATETIME. CURTIME() returns only the time. TODAY() is not a MySQL function.

### Q2. [Easy] What does DATEDIFF('2026-04-16', '2026-04-10') return?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** DATEDIFF(a, b) returns a - b as an INTEGER number of days. No unit is appended. It can be negative if b > a.

### Q3. [Easy] Which is the correct way to add 7 days to a date?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Use the INTERVAL syntax or DATE_ADD(date, INTERVAL 7 DAY). Plain arithmetic (date + 7) sometimes appears to work but is unreliable and non-portable.

### Q4. [Easy] Which DATE_FORMAT specifier produces a 4-digit year?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Capital %Y is 4-digit, lowercase %y is 2-digit. The specifiers are single-letter.

### Q5. [Easy] Which function returns the last day of the month for a given date?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** LAST_DAY is the MySQL function. It correctly handles leap years.

### Q6. [Medium] Which TIMESTAMPDIFF unit correctly computes age in years?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** TIMESTAMPDIFF(YEAR, dob, CURDATE()) returns the exact completed years, respecting whether the birthday has passed in the current year.

### Q7. [Medium] Why is WHERE YEAR(created_at) = 2026 considered an anti-pattern?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Wrapping the indexed column in a function forces a full table scan. Rewrite as a range: `created_at >= '2026-01-01' AND created_at < '2027-01-01'`.

### Q8. [Medium] Which MySQL column type stores values as UTC internally and auto-converts on read?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** TIMESTAMP is time-zone aware: stored as UTC, converted to the session time zone on read. DATETIME is a literal wall-clock value with no TZ awareness.

### Q9. [Medium] What does STR_TO_DATE('2026-13-01', '%Y-%m-%d') return?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** Month 13 is invalid, so STR_TO_DATE returns NULL. It does not error, and it does not silently roll over to the next year.

### Q10. [Medium] Which of these returns the quarter number (1-4) for a date?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** A

**A is correct.** QUARTER(date) returns 1-4. MySQL's DATE_FORMAT has no %q specifier. EXTRACT(QUARTER FROM date) also works (full word), but not QTR.

### Q11. [Medium] DAYOFWEEK in MySQL returns what for a Monday?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** DAYOFWEEK numbers Sunday=1, Monday=2, ..., Saturday=7. For Monday=0 style (ISO), use WEEKDAY() instead.

### Q12. [Hard] What is the result of DATE_ADD('2026-01-31', INTERVAL 1 MONTH)?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** MySQL clamps to the last valid day of the target month. Feb 31 does not exist, so it becomes Feb 28 (2026 is not a leap year). No rollover, no NULL.

### Q13. [Hard] Why might CONVERT_TZ return NULL?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** D

**D is correct.** CONVERT_TZ returns NULL for NULL input, for unknown named zones (fix by running `mysql_tzinfo_to_sql`), and for invalid offsets. Named zones require the tz tables to be populated.

### Q14. [Hard] Which query correctly finds orders placed in Q2 2026 using a sargable predicate?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** It's sargable (the indexed column is not wrapped in a function) and uses a half-open range, which correctly includes the last day regardless of time component. B is close but fails for rows with times on June 30. A and D wrap the column in functions.

### Q15. [Hard] Which function combo gives you the first day of the NEXT month?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** LAST_DAY gives the last day of the current month. Adding 1 day jumps to the 1st of the next month. This is the standard trick for monthly boundaries.

### Q16. [Easy] Which function converts a Unix epoch integer to a DATETIME?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** FROM_UNIXTIME(seconds) converts epoch to DATETIME. UNIX_TIMESTAMP() goes the opposite direction.

### Q17. [Medium] What does TIMEDIFF return?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** TIMEDIFF returns a TIME value like '05:14:30'. For seconds-as-integer, use TIMESTAMPDIFF(SECOND, a, b).

### Q18. [Hard] Why does NOW() return the same value for every row within a single UPDATE statement?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** NOW() is deterministic per statement — essential for replication and for keeping audit timestamps consistent across rows in a bulk update. Use SYSDATE() if you want the real clock per call.

### Q19. [Medium] To GROUP BY month with correct chronological sorting, which format pattern should you use?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** '%Y-%m' sorts alphabetically the same as chronologically. The others sort wrong — April comes before January alphabetically, and '04-2026' comes before '04-2025' only because of the month.

### Q20. [Hard] Why does TIMESTAMP have a Y2038 problem?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** A 32-bit signed integer holds 2^31 - 1 = 2147483647 seconds, which maps to 2038-01-19 03:14:07 UTC. Many systems (including MySQL) are migrating to 64-bit timestamps to solve this.

## Coding Challenges

### Challenge 1. Orders From the Last 30 Days

**Difficulty:** Easy

Given orders(id, customer, order_date, amount), write a query that returns all orders placed in the last 30 days (inclusive of today), sorted by order_date descending.

**Constraints:**

- Use a sargable range predicate. Do not wrap order_date in a function.

**Sample input:**

```
orders rows: 6 sample rows across the last 2 months
```

**Sample output:**

```
All rows with order_date >= CURDATE() - INTERVAL 30 DAY.
```

**Solution:**

```sql
CREATE TABLE orders (
  id INT PRIMARY KEY,
  customer VARCHAR(50),
  order_date DATE,
  amount DECIMAL(10,2)
);
INSERT INTO orders VALUES
  (1, 'Aarav Sharma',  '2026-04-15', 1200),
  (2, 'Priya Nair',    '2026-04-02',  850),
  (3, 'Rohan Mehta',   '2026-03-25', 2400),
  (4, 'Meera Krishnan','2026-03-10',  450),
  (5, 'Vikram Singh',  '2026-02-28', 3100);

SELECT *
FROM orders
WHERE order_date >= CURDATE() - INTERVAL 30 DAY
ORDER BY order_date DESC;
```

### Challenge 2. Age From Date of Birth

**Difficulty:** Easy

Given students(id, name, dob), return each student's name, dob, and exact age in completed years as of today. Sort by age descending.

**Constraints:**

- Use TIMESTAMPDIFF, not DATEDIFF/365.

**Sample input:**

```
5 students with varied DOBs including one whose birthday is tomorrow.
```

**Sample output:**

```
Each row shows the student and their age in whole years.
```

**Solution:**

```sql
CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(50), dob DATE);
INSERT INTO students VALUES
  (1, 'Ishaan Gupta',  '2008-11-12'),
  (2, 'Kavya Reddy',   '2006-02-29'),
  (3, 'Arjun Pillai',  '2010-04-17'),
  (4, 'Neha Choudhary','2004-07-22'),
  (5, 'Diya Bhatt',    '2000-01-05');

SELECT name, dob,
       TIMESTAMPDIFF(YEAR, dob, CURDATE()) AS age
FROM students
ORDER BY age DESC;
```

### Challenge 3. Revenue by Month of 2026

**Difficulty:** Easy

From sales(id, sold_at DATETIME, amount), return order count and total revenue for each month of 2026, sorted chronologically.

**Constraints:**

- Use sortable format for GROUP BY. Filter sargably.

**Sample input:**

```
8 sales across Jan-April 2026.
```

**Sample output:**

```
One row per month with count and SUM(amount).
```

**Solution:**

```sql
CREATE TABLE sales (id INT PRIMARY KEY, sold_at DATETIME, amount DECIMAL(10,2));
INSERT INTO sales VALUES
  (1, '2026-01-10 10:22:00', 1200),
  (2, '2026-01-25 15:40:00',  800),
  (3, '2026-02-03 09:10:00', 2200),
  (4, '2026-02-28 18:05:00', 1500),
  (5, '2026-03-12 11:30:00', 3100),
  (6, '2026-03-29 20:00:00',  950),
  (7, '2026-04-05 13:15:00', 1800),
  (8, '2026-04-15 16:45:00', 2650);

SELECT DATE_FORMAT(sold_at, '%Y-%m') AS month,
       COUNT(*) AS orders,
       SUM(amount) AS revenue
FROM sales
WHERE sold_at >= '2026-01-01' AND sold_at < '2027-01-01'
GROUP BY month
ORDER BY month;
```

### Challenge 4. Inactive Users Report

**Difficulty:** Medium

Given sessions(user_id, last_login DATETIME), return user_id, last_login date, and days_inactive for users whose most recent login is more than 30 days ago. Sort by days_inactive DESC.

**Constraints:**

- Use GROUP BY + HAVING. Do not include active users.

**Sample input:**

```
5 users with varied last_login values.
```

**Sample output:**

```
Only users with 30+ days of inactivity, most inactive first.
```

**Solution:**

```sql
CREATE TABLE sessions (user_id INT, last_login DATETIME);
INSERT INTO sessions VALUES
  (101, '2026-04-15 09:12:00'),
  (102, '2026-03-05 14:20:00'),
  (103, '2026-04-10 11:00:00'),
  (104, '2026-01-20 08:30:00'),
  (105, '2026-03-14 22:15:00');

SELECT user_id,
       MAX(last_login)                           AS last_seen,
       DATEDIFF(CURDATE(), MAX(last_login))      AS days_inactive
FROM sessions
GROUP BY user_id
HAVING days_inactive > 30
ORDER BY days_inactive DESC;
```

### Challenge 5. Sign-Ups by Day of Week

**Difficulty:** Medium

Given users(id, name, created_at DATETIME), return each weekday (Monday to Sunday) and the number of users who signed up on that weekday. Output in Mon-Sun order.

**Constraints:**

- Use DAYNAME and custom ordering with FIELD.

**Sample input:**

```
7 users spread across different weekdays.
```

**Sample output:**

```
7 rows, one per weekday, sorted Mon->Sun.
```

**Solution:**

```sql
CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(50), created_at DATETIME);
INSERT INTO users VALUES
  (1,'Aarav Sharma',  '2026-04-13 10:00:00'),  -- Monday
  (2,'Priya Nair',    '2026-04-14 09:30:00'),  -- Tuesday
  (3,'Rohan Mehta',   '2026-04-15 18:10:00'),  -- Wednesday
  (4,'Ananya Iyer',   '2026-04-16 07:22:00'),  -- Thursday
  (5,'Vikram Singh',  '2026-04-10 23:00:00'),  -- Friday
  (6,'Meera Krishnan','2026-04-11 12:00:00'),  -- Saturday
  (7,'Diya Bhatt',    '2026-04-12 19:30:00');  -- Sunday

SELECT DAYNAME(created_at) AS day_of_week,
       COUNT(*)             AS signups
FROM users
GROUP BY day_of_week
ORDER BY FIELD(day_of_week,
               'Monday','Tuesday','Wednesday','Thursday',
               'Friday','Saturday','Sunday');
```

### Challenge 6. Monthly Retention Window

**Difficulty:** Medium

Given orders(id, customer_id, order_date), for each customer return the first and last order dates and the number of months between them (as a tenure measure).

**Constraints:**

- Use MIN, MAX, and TIMESTAMPDIFF with MONTH unit.

**Sample input:**

```
Multiple orders per customer across several months.
```

**Sample output:**

```
customer_id, first_order, last_order, tenure_months.
```

**Solution:**

```sql
CREATE TABLE orders (id INT PRIMARY KEY, customer_id INT, order_date DATE);
INSERT INTO orders VALUES
  (1, 101, '2025-01-10'),
  (2, 101, '2025-07-22'),
  (3, 101, '2026-03-05'),
  (4, 102, '2025-11-02'),
  (5, 102, '2026-02-14'),
  (6, 103, '2026-04-01');

SELECT customer_id,
       MIN(order_date)                                       AS first_order,
       MAX(order_date)                                       AS last_order,
       TIMESTAMPDIFF(MONTH, MIN(order_date), MAX(order_date)) AS tenure_months
FROM orders
GROUP BY customer_id
ORDER BY tenure_months DESC;
```

### Challenge 7. Parse Mixed Date Strings

**Difficulty:** Hard

Given raw_upload(id, raw_date VARCHAR(30)) with dates in three formats ('16-04-2026', '05/04/2026', 'April 12, 2026'), return id, raw_date, and parsed_date (a proper DATE). Rows that cannot be parsed should show NULL for parsed_date.

**Constraints:**

- Use CASE with LIKE, STR_TO_DATE for each format. Handle invalid input gracefully.

**Sample input:**

```
4+ rows mixing the three formats plus one garbage string.
```

**Sample output:**

```
All rows with parsed_date populated where possible.
```

**Solution:**

```sql
CREATE TABLE raw_upload (id INT PRIMARY KEY, raw_date VARCHAR(30));
INSERT INTO raw_upload VALUES
  (1, '16-04-2026'),
  (2, '05/04/2026'),
  (3, 'April 12, 2026'),
  (4, '2026.04.09'),
  (5, 'not a date');

SELECT id, raw_date,
       CASE
         WHEN raw_date REGEXP '^[0-9]{2}-[0-9]{2}-[0-9]{4}$'    THEN STR_TO_DATE(raw_date, '%d-%m-%Y')
         WHEN raw_date REGEXP '^[0-9]{2}/[0-9]{2}/[0-9]{4}$'    THEN STR_TO_DATE(raw_date, '%d/%m/%Y')
         WHEN raw_date REGEXP '^[A-Za-z]+ [0-9]+, [0-9]{4}$'    THEN STR_TO_DATE(raw_date, '%M %d, %Y')
         WHEN raw_date REGEXP '^[0-9]{4}\\.[0-9]{2}\\.[0-9]{2}$' THEN STR_TO_DATE(raw_date, '%Y.%m.%d')
         ELSE NULL
       END AS parsed_date
FROM raw_upload;
```

### Challenge 8. Global Webinar Display

**Difficulty:** Hard

Given webinars(id, topic, starts_utc DATETIME), show the start time for three time zones: IST (+05:30), Singapore (+08:00), and New York (-04:00). Also include a pretty IST display string like 'Thursday, 16 Apr 07:30 PM'.

**Constraints:**

- Use CONVERT_TZ and DATE_FORMAT.

**Sample input:**

```
3 webinars with UTC start times.
```

**Sample output:**

```
topic, utc, ist, sg, ny, pretty_ist.
```

**Solution:**

```sql
CREATE TABLE webinars (id INT PRIMARY KEY, topic VARCHAR(60), starts_utc DATETIME);
INSERT INTO webinars VALUES
  (1,'Python Masterclass','2026-04-20 13:30:00'),
  (2,'SQL Interview Prep','2026-04-22 14:00:00'),
  (3,'Web Dev Bootcamp',  '2026-04-25 03:00:00');

SELECT topic,
       starts_utc                                          AS utc,
       CONVERT_TZ(starts_utc,'+00:00','+05:30')            AS ist,
       CONVERT_TZ(starts_utc,'+00:00','+08:00')            AS sg,
       CONVERT_TZ(starts_utc,'+00:00','-04:00')            AS ny,
       DATE_FORMAT(CONVERT_TZ(starts_utc,'+00:00','+05:30'),
                   '%W, %d %b %h:%i %p')                   AS pretty_ist
FROM webinars
ORDER BY starts_utc;
```

---

*Notes: https://learn.modernagecoders.com/resources/sql/date-and-time-functions/*
