---
title: "Practice: SELECT Queries and the WHERE Clause"
description: "60 practice problems for SELECT Queries and the WHERE Clause in SQL"
slug: select-basics-and-where-practice
canonical: https://learn.modernagecoders.com/resources/sql/select-basics-and-where/practice/
category: "SQL"
---
# Practice: SELECT Queries and the WHERE Clause

**Total questions:** 60

## Topic-Specific Questions

### Q1. [Easy] Given the employees table, what does this return?

```
SELECT name FROM employees WHERE id = 3;
```

*Hint:* Look up the row with id = 3.

**Answer:** `Rohan Gupta`

The row with id = 3 in our sample table is Rohan Gupta (IT, 92000, joined 2019-01-10). Only the name column is selected.

### Q2. [Easy] How many rows does this return?

```
SELECT * FROM employees WHERE department = 'IT';
```

*Hint:* Count IT department employees in the sample table.

**Answer:** `4 rows`

IT department has Aarav (id 1), Rohan (id 3), Vikram (id 5), and Diya (id 10) — 4 employees.

### Q3. [Easy] How many rows does this return?

```
SELECT * FROM employees WHERE salary > 100000;
```

*Hint:* Who earns strictly more than 100000?

**Answer:** `1 row`

Only Diya Nair (110000) earns more than 100000. The > is strict, so nobody at exactly 100000 would be included anyway.

### Q4. [Easy] How many rows does this return?

```
SELECT name FROM employees WHERE department != 'IT';
```

*Hint:* Total minus IT employees.

**Answer:** `6 rows`

Total is 10 rows. IT has 4. So 10 - 4 = 6 non-IT employees (Priya, Ananya, Sneha, Karan, Ishita, Aditya).

### Q5. [Easy] Write a query to find all employees in the IT department earning more than 50000. Return name and salary.

*Hint:* Use WHERE with AND combining two conditions.

**Answer:** ```
SELECT name, salary FROM employees
WHERE department = 'IT' AND salary > 50000;
```

This is the canonical first real SQL interview question. Out of 4 IT employees, Vikram (45000) is excluded. Returns Aarav (75000), Rohan (92000), and Diya (110000).

### Q6. [Easy] Find all employees with salary between 60000 and 90000. Return all columns. Use BETWEEN.

*Hint:* Remember BETWEEN is inclusive on both ends.

**Answer:** ```
SELECT * FROM employees
WHERE salary BETWEEN 60000 AND 90000;
```

Returns Aarav (75000), Ananya (68000), Karan (81000), Aditya (63000) — 4 rows. BETWEEN includes both endpoints, so 60000 and 90000 would be included if anyone had exactly that salary.

### Q7. [Easy] Find employees in HR or Marketing departments. Use the IN operator.

*Hint:* IN takes a comma-separated list in parentheses.

**Answer:** ```
SELECT name, department FROM employees
WHERE department IN ('HR', 'Marketing');
```

HR has Priya and Ishita. Marketing has Sneha and Aditya. Returns 4 rows. Using IN is cleaner than `department = 'HR' OR department = 'Marketing'`.

### Q8. [Easy] What does this return?

```
SELECT name AS emp FROM employees WHERE id = 7;
```

*Hint:* Find id 7 and note the aliased column.

**Answer:** `Column header: emp
Value: Karan Mehta`

id 7 is Karan Mehta. The AS clause renames the output column to `emp`. The table is not modified — only the result header changes.

### Q9. [Medium] How many rows does this return?

```
SELECT * FROM employees
WHERE department = 'IT' OR salary > 80000;
```

*Hint:* Union of IT employees and high earners.

**Answer:** `6 rows`

IT employees: 4 (Aarav, Rohan, Vikram, Diya). Salary > 80000: Rohan (92000), Karan (81000), Diya (110000) — 3. Union (OR) removes duplicates (Rohan and Diya are in both). Result: Aarav, Rohan, Vikram, Diya, Karan — 5 rows... Wait: Aarav 75000, Rohan 92000, Vikram 45000, Diya 110000 are all IT. Add Karan (81000). Total: 5 rows. Answer: 5.

### Q10. [Medium] How many rows?

```
SELECT * FROM employees
WHERE department = 'IT' AND salary > 80000;
```

*Hint:* Intersection of IT and high earners.

**Answer:** `2 rows`

IT employees with salary > 80000: Rohan (92000) and Diya (110000). Aarav (75000) and Vikram (45000) are IT but fail the salary filter.

### Q11. [Medium] What is returned?

```
SELECT name FROM employees
WHERE department = 'IT' OR department = 'HR' AND salary > 60000;
```

*Hint:* Trace the precedence: AND binds tighter than OR.

**Answer:** `All 4 IT employees (Aarav, Rohan, Vikram, Diya) and zero HR employees (neither Priya nor Ishita earns above 60000). Total: 4 rows.`

SQL reads this as `department = 'IT' OR (department = 'HR' AND salary > 60000)`. Priya (52000) and Ishita (47000) both fail the salary filter for the HR branch, so no HR employees match. All 4 IT employees match regardless of salary. Final: 4 rows.

### Q12. [Medium] How many rows?

```
SELECT * FROM employees
WHERE (department = 'IT' OR department = 'HR') AND salary > 60000;
```

*Hint:* Parentheses force OR first.

**Answer:** `3 rows`

(IT or HR) has 6 employees: 4 IT + 2 HR. Of those, salary > 60000: Aarav (75000), Rohan (92000), Diya (110000). HR employees fail (52000 and 47000). Result: 3 rows.

### Q13. [Medium] Find employees who joined before January 1, 2021. Return name and join_date.

*Hint:* Compare join_date against a date literal in single quotes.

**Answer:** ```
SELECT name, join_date FROM employees
WHERE join_date < '2021-01-01';
```

Employees with join_date before 2021: Priya (2020-07-22), Rohan (2019-01-10), Karan (2020-02-14), Diya (2018-08-12). Returns 4 rows. Dates compare naturally with < and >.

### Q14. [Medium] Find IT employees NOT earning more than 70000. Return name and salary.

*Hint:* Use NOT or the opposite operator.

**Answer:** ```
SELECT name, salary FROM employees
WHERE department = 'IT' AND NOT (salary > 70000);

-- Equivalent:
SELECT name, salary FROM employees
WHERE department = 'IT' AND salary <= 70000;
```

IT employees with salary at or below 70000: only Vikram Reddy (45000). Aarav (75000), Rohan (92000), Diya (110000) all exceed 70000.

### Q15. [Medium] What does this return?

```
SELECT name FROM employees
WHERE department NOT IN ('IT', 'Finance', 'HR');
```

*Hint:* Which departments are left?

**Answer:** `Sneha Iyer
Aditya Rao`

Excluding IT, Finance, HR leaves only Marketing. Marketing has Sneha Iyer and Aditya Rao. 2 rows.

### Q16. [Medium] Find employees whose salary is NOT between 50000 and 80000 (i.e., outside this range). Return name and salary.

*Hint:* Use NOT BETWEEN or OR with < and >.

**Answer:** ```
SELECT name, salary FROM employees
WHERE salary NOT BETWEEN 50000 AND 80000;

-- Equivalent:
SELECT name, salary FROM employees
WHERE salary < 50000 OR salary > 80000;
```

Outside 50000-80000: Vikram (45000), Ishita (47000), Rohan (92000), Karan (81000), Diya (110000). 5 rows. Remember BETWEEN is inclusive, so NOT BETWEEN excludes endpoints too.

### Q17. [Medium] Find employees who joined in 2021, showing name with alias 'emp' and join_date with alias 'joined'.

*Hint:* Use BETWEEN on dates and AS for aliases.

**Answer:** ```
SELECT name AS emp, join_date AS joined FROM employees
WHERE join_date BETWEEN '2021-01-01' AND '2021-12-31';
```

2021 joiners: Aarav (2021-03-15) and Sneha (2021-09-30). 2 rows. The aliased columns appear in the output as 'emp' and 'joined'.

### Q18. [Easy] What is the difference between SELECT * and SELECT column1, column2?

*Hint:* Think about columns returned and production concerns.

**Answer:** `SELECT *` returns all columns of the table. `SELECT column1, column2` returns only the listed columns. The star is convenient during exploration but should be avoided in production code because (a) it fetches unnecessary data, (b) the result shape changes if the schema changes, and (c) indexes cannot be used as effectively.

In every real codebase, explicit column lists are mandatory. A production query like `SELECT * FROM orders` could silently break when a new column is added, or could slow down dashboards by fetching huge TEXT columns you never display.

### Q19. [Easy] Why does SQL use single = for equality comparison instead of ==?

*Hint:* SQL predates most modern languages.

**Answer:** SQL was designed in the 1970s before languages like C, Java, and Python adopted `==`. In SQL, there is no assignment operator inside queries (column values are set with `=` in UPDATE statements), so reusing `=` for equality comparison caused no ambiguity. Writing `==` in SQL is a syntax error.

This is a frequent stumbling block for programmers coming from other languages. Remember: SQL is a declarative query language, not an imperative one — it has different rules.

### Q20. [Medium] Explain why NOT IN with a NULL value returns zero rows. Give a way to fix it.

*Hint:* SQL's three-valued logic: TRUE, FALSE, NULL.

**Answer:** In SQL, comparisons with NULL return NULL (not TRUE, not FALSE). The WHERE clause keeps only rows where the condition is TRUE. `x NOT IN (1, 2, NULL)` is equivalent to `x != 1 AND x != 2 AND x != NULL`. The last part is always NULL, so the AND is NULL, so no row passes. Fix: filter out NULLs explicitly using `AND col IS NOT NULL`, or use `NOT EXISTS` with a subquery instead of NOT IN.

This is one of the most notorious SQL gotchas and a real interview topic. It catches senior engineers when subqueries start returning NULLs due to data changes.

### Q21. [Medium] What does this return?

```
SELECT name FROM employees
WHERE salary IN (45000, 52000, 110000);
```

*Hint:* Three exact salary matches.

**Answer:** `Vikram Reddy (45000)
Priya Patel (52000)
Diya Nair (110000)`

The IN operator matches any of the listed values exactly. Three employees have these exact salaries. Result: 3 rows.

### Q22. [Medium] Find HR employees earning less than 50000. Return name and salary.

*Hint:* AND with two conditions.

**Answer:** ```
SELECT name, salary FROM employees
WHERE department = 'HR' AND salary < 50000;
```

HR has Priya (52000) and Ishita (47000). Only Ishita's salary is below 50000. Returns 1 row.

### Q23. [Medium] Find employees in Finance or Marketing earning at least 65000. Return name, department, and salary.

*Hint:* IN combined with a salary filter.

**Answer:** ```
SELECT name, department, salary FROM employees
WHERE department IN ('Finance', 'Marketing')
  AND salary >= 65000;
```

Finance: Ananya (68000), Karan (81000). Marketing: Sneha (58000), Aditya (63000). With salary >= 65000: Ananya and Karan pass. Sneha and Aditya fail. Returns 2 rows.

### Q24. [Medium] Why is it recommended to always use parentheses when combining AND and OR?

*Hint:* Precedence and readability.

**Answer:** Because AND is evaluated before OR in SQL, the meaning of a query can change in non-obvious ways. A query like `a = 1 OR b = 2 AND c = 3` is actually `a = 1 OR (b = 2 AND c = 3)`. Parentheses make the intent explicit and prevent bugs. Reviewers can verify logic at a glance instead of tracing precedence rules in their heads.

This is a real-world code review standard. Companies like Flipkart and Amazon require explicit parentheses in SQL code review guidelines for this exact reason.

### Q25. [Medium] What does this return?

```
SELECT name FROM employees
WHERE id BETWEEN 3 AND 7;
```

*Hint:* BETWEEN on integer ids, inclusive.

**Answer:** `Rohan Gupta (3)
Ananya Singh (4)
Vikram Reddy (5)
Sneha Iyer (6)
Karan Mehta (7)`

BETWEEN 3 AND 7 includes ids 3, 4, 5, 6, 7 (inclusive on both ends). 5 rows returned. Notice that 3 and 7 themselves are included.

### Q26. [Hard] Find employees who are (in IT AND earning above 80000) OR (in Finance AND joined before 2021). Return name, department, salary, join_date.

*Hint:* Two grouped conditions joined by OR.

**Answer:** ```
SELECT name, department, salary, join_date FROM employees
WHERE (department = 'IT' AND salary > 80000)
   OR (department = 'Finance' AND join_date < '2021-01-01');
```

First group: IT and salary > 80000 → Rohan (92000), Diya (110000). Second group: Finance and joined before 2021 → Karan (2020-02-14). Ananya joined 2022 so fails. Result: Rohan, Diya, Karan — 3 rows.

### Q27. [Hard] Find all employees NOT in IT whose salary is between 50000 and 70000 inclusive. Use NOT and BETWEEN.

*Hint:* NOT with department, BETWEEN with salary.

**Answer:** ```
SELECT name, department, salary FROM employees
WHERE NOT (department = 'IT')
  AND salary BETWEEN 50000 AND 70000;

-- Equivalent cleaner version:
SELECT name, department, salary FROM employees
WHERE department != 'IT'
  AND salary BETWEEN 50000 AND 70000;
```

Non-IT with 50000-70000: Priya (HR, 52000), Ananya (Finance, 68000), Sneha (Marketing, 58000), Aditya (Marketing, 63000). Ishita at 47000 fails, Karan at 81000 fails. 4 rows.

### Q28. [Hard] What does this return?

```
SELECT name FROM employees
WHERE department = 'IT' AND NOT salary > 50000;
```

*Hint:* NOT applies to the comparison.

**Answer:** `Vikram Reddy`

`NOT salary > 50000` means salary is NOT greater than 50000, i.e., salary <= 50000. In IT, only Vikram (45000) has salary at or below 50000. Others are all above. Returns 1 row.

### Q29. [Hard] Using aliases, find name (as 'emp'), salary (as 'pay_inr') for employees in ('IT','HR') who joined between 2020 and 2022 inclusive, and earn more than 50000.

*Hint:* Combine IN, BETWEEN, comparison, and AS.

**Answer:** ```
SELECT name AS emp, salary AS pay_inr FROM employees
WHERE department IN ('IT', 'HR')
  AND join_date BETWEEN '2020-01-01' AND '2022-12-31'
  AND salary > 50000;
```

IT/HR and joined 2020-2022: Aarav (IT, 2021, 75000), Priya (HR, 2020, 52000), Ishita (HR, 2023 — fails). Plus Vikram (IT, 2023 — fails). Aarav (75000) and Priya (52000) both pass salary > 50000. Returns 2 rows.

### Q30. [Medium] What is the difference between != and <> in SQL? Which should you use?

*Hint:* Both mean the same thing but have different origins.

**Answer:** Both `!=` and `<>` mean "not equal to" and work identically in MySQL, PostgreSQL, and SQL Server. `<>` is the SQL standard (ANSI SQL). `!=` is more familiar to programmers. Use `!=` for readability unless your team's style guide mandates the ANSI standard. Both are correct.

Some very old databases only support `<>`, so if you are writing portable SQL for unknown systems, `<>` is the safer bet. For MySQL-only projects, either works.

## Mixed Questions

### Q1. [Easy] Write a query that returns just the names of all employees.

*Hint:* Single column, no WHERE.

**Answer:** ```
SELECT name FROM employees;
```

No WHERE clause means all 10 rows are returned. Only the name column is included.

### Q2. [Easy] Find the employee with id 5. Return all columns.

*Hint:* WHERE id = 5.

**Answer:** ```
SELECT * FROM employees WHERE id = 5;
```

id 5 is Vikram Reddy in the IT department, salary 45000, joined 2023-04-18. Exactly 1 row.

### Q3. [Easy] How many rows?

```
SELECT * FROM employees WHERE salary = 45000;
```

*Hint:* Exact match on salary.

**Answer:** `1 row`

Only Vikram Reddy earns exactly 45000.

### Q4. [Easy] Find all Marketing employees.

*Hint:* WHERE department = 'Marketing'.

**Answer:** ```
SELECT * FROM employees WHERE department = 'Marketing';
```

Marketing has Sneha Iyer (58000) and Aditya Rao (63000). 2 rows.

### Q5. [Easy] How many rows?

```
SELECT * FROM employees WHERE salary >= 50000 AND salary <= 70000;
```

*Hint:* Range 50000-70000 inclusive.

**Answer:** `5 rows`

Priya (52000), Ananya (68000), Sneha (58000), Ishita (47000 - fails), Aditya (63000). Wait: Ishita at 47000 fails. So 4 pass. Let us recount: Priya 52000 ✓, Ananya 68000 ✓, Sneha 58000 ✓, Aditya 63000 ✓. That is 4 rows. Answer: 4.

### Q6. [Easy] Return employee names with alias 'worker_name'.

*Hint:* Use AS.

**Answer:** ```
SELECT name AS worker_name FROM employees;
```

All 10 names are returned under the column header 'worker_name' instead of 'name'.

### Q7. [Easy] Find employees in IT. Use a straightforward WHERE clause.

*Hint:* Department equals IT.

**Answer:** ```
SELECT * FROM employees WHERE department = 'IT';
```

4 IT employees: Aarav, Rohan, Vikram, Diya.

### Q8. [Easy] How many rows?

```
SELECT * FROM employees WHERE salary < 50000;
```

*Hint:* Two low earners.

**Answer:** `2 rows`

Only Vikram (45000) and Ishita (47000) earn below 50000.

### Q9. [Medium] Find employees whose name is either 'Priya Patel' or 'Karan Mehta'. Use IN.

*Hint:* IN with string values.

**Answer:** ```
SELECT * FROM employees
WHERE name IN ('Priya Patel', 'Karan Mehta');
```

IN works with strings too. Returns exactly 2 rows — Priya (HR) and Karan (Finance).

### Q10. [Medium] Find all employees except those in IT. Return name and department.

*Hint:* Use NOT or !=.

**Answer:** ```
SELECT name, department FROM employees
WHERE department != 'IT';
```

6 non-IT employees: Priya, Ananya, Sneha, Karan, Ishita, Aditya.

### Q11. [Medium] Find employees who joined in 2022. Use BETWEEN with dates.

*Hint:* Full year range.

**Answer:** ```
SELECT name, join_date FROM employees
WHERE join_date BETWEEN '2022-01-01' AND '2022-12-31';
```

2022 joiners: Ananya (2022-11-05) and Aditya (2022-03-08). 2 rows.

### Q12. [Medium] Find employees in HR earning more than 50000 OR in Finance earning more than 70000.

*Hint:* Two grouped conditions joined by OR.

**Answer:** ```
SELECT name, department, salary FROM employees
WHERE (department = 'HR' AND salary > 50000)
   OR (department = 'Finance' AND salary > 70000);
```

HR and > 50000: Priya (52000). Finance and > 70000: Karan (81000). Ananya (68000) fails. Returns Priya and Karan. 2 rows.

### Q13. [Medium] How many rows?

```
SELECT * FROM employees
WHERE department = 'IT' OR department = 'IT';
```

*Hint:* Redundant OR.

**Answer:** `4 rows`

OR with the same condition is just the single condition. Returns all 4 IT employees. Duplicated conditions do not create duplicated rows.

### Q14. [Medium] Find employees whose salary is exactly 75000, 52000, or 92000.

*Hint:* IN with three numeric values.

**Answer:** ```
SELECT name, salary FROM employees
WHERE salary IN (75000, 52000, 92000);
```

Aarav (75000), Priya (52000), Rohan (92000). Returns 3 rows.

### Q15. [Medium] Find employees who joined on or after 2022-01-01 and work in IT.

*Hint:* AND with date and department.

**Answer:** ```
SELECT name, join_date FROM employees
WHERE join_date >= '2022-01-01'
  AND department = 'IT';
```

IT employees joined on/after 2022-01-01: only Vikram (2023-04-18). Aarav was 2021, Rohan 2019, Diya 2018. Returns 1 row.

### Q16. [Medium] What does this return?

```
SELECT name, salary * 12 AS annual_salary
FROM employees WHERE id = 1;
```

*Hint:* Expression with alias.

**Answer:** `Aarav Sharma, 900000`

id 1 is Aarav with salary 75000. Multiplying by 12 gives 900000. The aliased column 'annual_salary' appears in the output. Aliases work on expressions, not just plain columns.

### Q17. [Medium] Find employees in IT earning between 50000 and 100000 (inclusive). Return name and salary.

*Hint:* Combine department check and BETWEEN.

**Answer:** ```
SELECT name, salary FROM employees
WHERE department = 'IT'
  AND salary BETWEEN 50000 AND 100000;
```

IT in 50000-100000 range: Aarav (75000), Rohan (92000). Vikram (45000) fails low end, Diya (110000) fails high end. 2 rows.

### Q18. [Medium] How many rows?

```
SELECT * FROM employees
WHERE department != 'IT' AND department != 'HR' AND department != 'Finance';
```

*Hint:* Equivalent to NOT IN.

**Answer:** `2 rows`

Excluding IT, HR, Finance leaves only Marketing. Marketing has 2 employees: Sneha and Aditya.

### Q19. [Medium] Find employees with the name 'Aarav Sharma'. Return all columns.

*Hint:* Exact string match with single quotes.

**Answer:** ```
SELECT * FROM employees WHERE name = 'Aarav Sharma';
```

Single quotes for string literals. Case-sensitivity depends on the column's collation; by default MySQL is case-insensitive. Returns 1 row.

### Q20. [Hard] Find employees who either (a) are in Marketing or (b) joined after 2022-06-01 and earn below 60000. Return everything.

*Hint:* OR between two grouped conditions.

**Answer:** ```
SELECT * FROM employees
WHERE department = 'Marketing'
   OR (join_date > '2022-06-01' AND salary < 60000);
```

Marketing: Sneha, Aditya. Late-2022 joiners with low salary: Ananya (2022-11-05, 68000) — fails salary. Ishita (2023-06-25, 47000) — passes both. Vikram (2023-04-18, 45000) — passes both. Result: Sneha, Aditya, Ishita, Vikram. 4 rows.

### Q21. [Hard] How many rows?

```
SELECT * FROM employees
WHERE salary > 60000 AND salary < 80000
   OR department = 'HR';
```

*Hint:* AND binds tighter than OR.

**Answer:** `5 rows`

Read as: (salary > 60000 AND salary < 80000) OR department = 'HR'. Range 60000-80000 exclusive: Aarav (75000), Ananya (68000), Aditya (63000). HR: Priya (52000), Ishita (47000). No overlap. Total: 5 rows.

### Q22. [Hard] Find employees whose id is NOT between 3 and 7 (exclusive). Use NOT BETWEEN and return name.

*Hint:* NOT BETWEEN is inclusive of endpoints too.

**Answer:** ```
SELECT name FROM employees WHERE id NOT BETWEEN 3 AND 7;
```

NOT BETWEEN 3 AND 7 excludes ids 3, 4, 5, 6, 7. Remaining: 1, 2, 8, 9, 10 — Aarav, Priya, Ishita, Aditya, Diya. 5 rows.

### Q23. [Hard] Find all employees whose salary multiplied by 12 exceeds 1000000 (i.e., annual > 10 lakh). Use an expression in WHERE.

*Hint:* You can compute expressions in WHERE.

**Answer:** ```
SELECT name, salary FROM employees
WHERE salary * 12 > 1000000;
```

Salary * 12 > 1000000 means salary > 83333.33. Employees exceeding: Rohan (92000), Diya (110000). Karan at 81000*12 = 972000, fails. Returns 2 rows.

### Q24. [Hard] What does this return?

```
SELECT name FROM employees
WHERE NOT (department = 'IT' OR salary > 80000);
```

*Hint:* De Morgan's law: NOT (A OR B) = NOT A AND NOT B.

**Answer:** `Priya Patel
Ananya Singh
Sneha Iyer
Ishita Kumar
Aditya Rao`

NOT (IT OR salary > 80000) = (department != 'IT') AND (salary <= 80000). Non-IT: Priya, Ananya, Sneha, Karan, Ishita, Aditya. Salary <= 80000: removes Karan (81000). Result: Priya, Ananya, Sneha, Ishita, Aditya. 5 rows.

### Q25. [Hard] Find all employees except those in the HR department who earn less than 50000. (Keep HR folks who earn >= 50000, keep all non-HR.)

*Hint:* Exclude specific subgroup. Use NOT with parentheses.

**Answer:** ```
SELECT * FROM employees
WHERE NOT (department = 'HR' AND salary < 50000);
```

We want to remove only HR earners below 50000. HR has Priya (52000) and Ishita (47000). Ishita is excluded. Everyone else — including Priya (HR, 52000) — stays. 10 - 1 = 9 rows.

## Multiple Choice Questions

### Q1. [Easy] Which keyword is used to retrieve data from a table in SQL?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** `SELECT` is the SQL keyword for retrieving data. FETCH exists in some SQL dialects but only inside cursors, not for top-level queries. GET and RETRIEVE are not SQL keywords.

### Q2. [Easy] What does SELECT * FROM employees do?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** The asterisk `*` means all columns. Without a WHERE clause, all rows are returned. So `SELECT * FROM employees` returns the entire table.

### Q3. [Easy] Which operator is used for equality comparison in SQL?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** SQL uses a single `=` for equality. Writing `==` causes a syntax error. This differs from Python, Java, JavaScript, and many other languages.

### Q4. [Easy] Which keyword renames a column in the output?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** `SELECT name AS employee_name` renames the output column. RENAME is used for renaming tables/columns permanently (with ALTER TABLE), not for query-time aliasing.

### Q5. [Easy] How do you write a string literal in SQL?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** Single quotes are the SQL standard for string literals. Double quotes are for identifiers in ANSI SQL. Backticks are for identifiers in MySQL. Strings without quotes are column references or keywords.

### Q6. [Easy] Which operator checks if a value equals any in a list?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** `column IN (v1, v2, v3)` is shorthand for multiple ORs. LIKE does pattern matching. IS is used with NULL (IS NULL, IS NOT NULL). HAS is not SQL.

### Q7. [Easy] Is BETWEEN inclusive or exclusive?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** `BETWEEN x AND y` is equivalent to `>= x AND <= y`. Both endpoints are included. This is a classic interview question and catches many beginners.

### Q8. [Easy] Which is NOT a valid comparison operator in SQL?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct (the invalid one).** SQL does not have `==`. Both `!=` and `<>` mean 'not equal.' `>=` is 'greater than or equal.' Using `==` produces a syntax error.

### Q9. [Medium] Which query finds IT employees earning more than 50000?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** IT is a string (single quotes), equality uses a single =, and AND requires both conditions true. Option A misses quotes around IT (parsed as a column name). Option C uses invalid ==. Option D uses OR which would return a totally different set.

### Q10. [Medium] In SQL, which has higher precedence: AND or OR?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** AND has higher precedence than OR, just like multiplication vs addition. `a OR b AND c` is `a OR (b AND c)`. Always use parentheses when mixing them to avoid confusion.

### Q11. [Medium] What does WHERE salary NOT IN (50000, 70000, NULL) return?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** When NOT IN has NULL, SQL's three-valued logic makes the comparison to NULL yield NULL. WHERE requires TRUE, so no rows pass. This is a famous gotcha and interview question.

### Q12. [Medium] Which is equivalent to: WHERE salary BETWEEN 50000 AND 80000?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** BETWEEN is inclusive, so it matches `>= x AND <= y`. Option A would be exclusive. Option C only matches the two exact values, not the range.

### Q13. [Medium] Which clause filters rows before they are returned?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** WHERE filters rows. SELECT picks columns. FROM identifies the table. AS creates aliases. Without WHERE, all rows are returned.

### Q14. [Medium] What does this return? SELECT * FROM employees WHERE department = 'IT' OR department = 'HR' AND salary > 60000;

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** A

**A is correct.** AND binds tighter than OR, so the query is: IT employees (any salary) OR (HR AND salary > 60000). All IT employees qualify. HR employees must also earn > 60000. To restrict both departments to high salary, you need parentheses.

### Q15. [Medium] What is the output of SELECT name AS n FROM employees WHERE id = 1?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** AS renames the output column only. The underlying table column is still 'name'. The value retrieved (Aarav Sharma) is unchanged. AS works fine alongside WHERE.

### Q16. [Medium] Which is the BEST replacement for: WHERE dept = 'IT' OR dept = 'HR' OR dept = 'Finance'?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** A

**A is correct.** IN is exactly designed for this. Option B treats strings alphabetically and returns unexpected results. Option C is a tuple mismatch error. Option D doesn't do anything close.

### Q17. [Hard] What does SELECT * FROM employees WHERE salary > 60000 AND (department = 'IT' OR department = 'Finance') return for our 10-row sample?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** IT or Finance: Aarav (75000), Rohan (92000), Ananya (68000), Vikram (45000), Karan (81000), Diya (110000). Of those, salary > 60000 removes only Vikram. 5 rows: Aarav, Rohan, Ananya, Karan, Diya.

### Q18. [Hard] Which statement is TRUE about the SQL = operator?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** SQL's = means assignment in UPDATE statements (`SET salary = 60000`) and equality in WHERE (`WHERE salary = 60000`). Context distinguishes the two. String case-sensitivity depends on column collation — MySQL is case-insensitive by default.

### Q19. [Hard] What does NOT (A AND B) equal according to De Morgan's law?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** B

**B is correct.** De Morgan's law: `NOT (A AND B) = NOT A OR NOT B`. And `NOT (A OR B) = NOT A AND NOT B`. Useful for rewriting complex negations in WHERE clauses.

### Q20. [Hard] Why is SELECT * considered bad practice in production code?

A. [object Object]
B. [object Object]
C. [object Object]
D. [object Object]

**Answer:** C

**C is correct.** If someone adds a column, your code silently starts fetching extra data. Also, the database optimizer cannot use covering indexes with `*`. In production, always list columns explicitly.

## Coding Challenges

### Challenge 1. Top IT Earners

**Difficulty:** Easy

Return all IT employees earning more than 70000. Include name, salary, and join_date.

**Constraints:**

- Use WHERE with AND. Do not use subqueries.

**Sample input:**

```
Uses the employees table defined in the chapter.
```

**Sample output:**

```
name, salary, join_date:
Aarav Sharma 75000 2021-03-15
Rohan Gupta 92000 2019-01-10
Diya Nair 110000 2018-08-12
```

**Solution:**

```sql
SELECT name, salary, join_date
FROM employees
WHERE department = 'IT' AND salary > 70000;
```

### Challenge 2. Mid-Band Salaries

**Difficulty:** Easy

Find employees with salary between 55000 and 85000 (inclusive). Show name and salary, alias salary as 'pay'.

**Constraints:**

- Use BETWEEN.

**Sample input:**

```
employees table.
```

**Sample output:**

```
Aarav Sharma 75000
Ananya Singh 68000
Sneha Iyer 58000
Karan Mehta 81000
Aditya Rao 63000
```

**Solution:**

```sql
SELECT name, salary AS pay
FROM employees
WHERE salary BETWEEN 55000 AND 85000;
```

### Challenge 3. Multi-Department Filter

**Difficulty:** Medium

Find all employees in IT, Finance, or Marketing who earn more than 60000 and joined after 2020-01-01. Return name, department, salary, join_date.

**Constraints:**

- Combine IN, comparison, and date filter. Correct output should be 3 rows: Aarav, Ananya, Aditya.

**Sample input:**

```
employees table.
```

**Sample output:**

```
Aarav Sharma IT 75000 2021-03-15
Ananya Singh Finance 68000 2022-11-05
Sneha Iyer Marketing 58000 ... (actually Sneha fails, 58000 < 60000)
Aditya Rao Marketing 63000 2022-03-08
```

**Solution:**

```sql
SELECT name, department, salary, join_date
FROM employees
WHERE department IN ('IT', 'Finance', 'Marketing')
  AND salary > 60000
  AND join_date > '2020-01-01';
```

### Challenge 4. Exclude Low HR Earners

**Difficulty:** Medium

Return every employee except HR staff earning below 50000. Keep all non-HR employees and HR employees earning 50000 or more.

**Constraints:**

- Use NOT with parentheses. The condition should exclude (department = 'HR' AND salary < 50000).

**Sample input:**

```
employees table.
```

**Sample output:**

```
9 rows — everyone except Ishita Kumar (HR, 47000).
```

**Solution:**

```sql
SELECT *
FROM employees
WHERE NOT (department = 'HR' AND salary < 50000);
```

### Challenge 5. Annual Salary Report

**Difficulty:** Medium

For each employee, return name and their annual salary (salary * 12) with alias 'annual_pay', but only for employees whose annual pay exceeds 800000.

**Constraints:**

- Use an expression in SELECT and WHERE.

**Sample input:**

```
employees table.
```

**Sample output:**

```
Rohan Gupta 1104000
Karan Mehta 972000
Diya Nair 1320000
Aarav Sharma 900000
```

**Solution:**

```sql
SELECT name, salary * 12 AS annual_pay
FROM employees
WHERE salary * 12 > 800000;
```

### Challenge 6. Complex Recruitment Filter

**Difficulty:** Hard

The recruitment team wants to review: (a) all Marketing employees regardless of salary, OR (b) any employee who joined in the last 3 years (after 2023-04-16) AND earns less than 50000. Return name, department, salary, join_date.

**Constraints:**

- Use OR with two grouped conditions.

**Sample input:**

```
employees table. Today's date treated as 2026-04-16.
```

**Sample output:**

```
Sneha Iyer Marketing 58000 2021-09-30
Aditya Rao Marketing 63000 2022-03-08
Ishita Kumar HR 47000 2023-06-25
```

**Solution:**

```sql
SELECT name, department, salary, join_date
FROM employees
WHERE department = 'Marketing'
   OR (join_date > '2023-04-16' AND salary < 50000);
```

### Challenge 7. Find Specific Employees by Name

**Difficulty:** Hard

The manager wants details of three specific employees: Aarav Sharma, Ananya Singh, and Diya Nair. Return all their columns in a single query.

**Constraints:**

- Use IN on the name column.

**Sample input:**

```
employees table.
```

**Sample output:**

```
3 rows — Aarav (id 1), Ananya (id 4), Diya (id 10).
```

**Solution:**

```sql
SELECT *
FROM employees
WHERE name IN ('Aarav Sharma', 'Ananya Singh', 'Diya Nair');
```

### Challenge 8. Salary Bonus Eligibility

**Difficulty:** Hard

An employee is eligible for a bonus if they (earn at least 70000 AND joined before 2022-01-01) OR (are in Marketing AND earn less than 65000). Return name, department, and a computed column 'bonus_eligible' showing the word 'YES' using alias.

**Constraints:**

- Use a string literal in SELECT with AS. Include parentheses in the WHERE clause.

**Sample input:**

```
employees table.
```

**Sample output:**

```
Aarav Sharma IT YES
Rohan Gupta IT YES
Karan Mehta Finance YES
Sneha Iyer Marketing YES
Aditya Rao Marketing YES
Diya Nair IT YES
```

**Solution:**

```sql
SELECT name, department, 'YES' AS bonus_eligible
FROM employees
WHERE (salary >= 70000 AND join_date < '2022-01-01')
   OR (department = 'Marketing' AND salary < 65000);
```

---

*Notes: https://learn.modernagecoders.com/resources/sql/select-basics-and-where/*
