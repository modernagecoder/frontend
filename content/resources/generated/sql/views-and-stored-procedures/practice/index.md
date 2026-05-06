---
title: "Practice: Views, Stored Procedures, and Functions"
description: "58 practice problems for Views, Stored Procedures, and Functions in SQL"
slug: views-and-stored-procedures-practice
canonical: https://learn.modernagecoders.com/resources/sql/views-and-stored-procedures/practice/
category: "SQL"
---
# Practice: Views, Stored Procedures, and Functions

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] Given a view `CREATE VIEW v AS SELECT id, name FROM users WHERE active = 1;` and rows (1,'Aarav',1), (2,'Priya',0), (3,'Rohan',1), what does `SELECT COUNT(*) FROM v;` return?

*Hint:* The view filters on active = 1.

**Answer:** `2`

Only Aarav and Rohan have active = 1, so the view contains two rows.

### Q2. [Easy] Does a view store data on disk?

*Hint:* Think about what CREATE VIEW actually saves.

**Answer:** No. A view stores only the SELECT statement. Every query against the view re-runs that SELECT against the underlying base tables.

This is why a view is called a *virtual* table. It has no storage cost (a few KB for the definition) but every query pays the cost of re-running the underlying SELECT.

### Q3. [Easy] Why do we write DELIMITER $$ before CREATE PROCEDURE?

*Hint:* Think about how the MySQL client parses statements.

**Answer:** The MySQL client splits input on `;`. A procedure body contains internal semicolons, so we temporarily change the delimiter to `$$` so the client sends the whole CREATE PROCEDURE as one statement.

It is a purely client-side concern — the server parses the statement as a whole. Without it, the client would send only the first inner statement and CREATE PROCEDURE would fail.

### Q4. [Easy] What does this procedure set `@r` to?

```
CREATE PROCEDURE sq(IN x INT, OUT r INT)
BEGIN SET r = x * x; END;

CALL sq(6, @r);
SELECT @r;
```

*Hint:* OUT parameters are assigned with SET.

**Answer:** `36`

The procedure multiplies x by itself and writes it to the OUT parameter. The caller reads `@r` after CALL.

### Q5. [Easy] What is the difference between a procedure and a function in MySQL?

*Hint:* Think about how you invoke each and what it returns.

**Answer:** A **procedure** is invoked with `CALL name(args)` and can return zero, one, or many result sets via OUT parameters or inner SELECTs. A **function** returns exactly one scalar value and is called from inside any expression: `SELECT my_func(col)`.

Functions are for computations (derived columns, scalar calculations). Procedures are for workflows (multi-step business logic, transactions).

### Q6. [Easy] Name three conditions that make a view non-updatable.

*Hint:* Think about what stops MySQL from mapping a view row back to a base-table row.

**Answer:** Any of: (1) aggregate functions / GROUP BY, (2) DISTINCT, (3) UNION / UNION ALL, (4) subqueries in the SELECT list, (5) most JOINs, (6) window functions. Any of these makes the view read-only.

MySQL needs to map each view row to exactly one row in one base table. Aggregation, deduplication, and set operations destroy that mapping.

### Q7. [Medium] Given employees with salaries 40000, 60000, 80000, 100000, what does this procedure set `@out` to?

```
CREATE PROCEDURE sum_above(IN threshold INT, OUT s INT)
BEGIN
    SELECT SUM(salary) INTO s FROM employees WHERE salary > threshold;
END;

CALL sum_above(60000, @out);
SELECT @out;
```

*Hint:* Sum only salaries strictly greater than 60000.

**Answer:** `180000`

80000 + 100000 = 180000. The 60000 row is excluded because the condition is strict >.

### Q8. [Medium] What does WITH CHECK OPTION protect against?

*Hint:* Think about INSERTs through a filtered view.

**Answer:** It prevents INSERTs or UPDATEs through the view that would produce rows which do not match the view's WHERE clause. Without it, an insert through `pune_customers` could write a row with city = 'Mumbai' — the row lands in the base table but never appears in the view.

This silent disappearance is almost always a bug. WITH CHECK OPTION turns it into a clean error.

### Q9. [Medium] What does this WHILE loop write to the numbers table?

```
DECLARE i INT DEFAULT 1;
WHILE i < 4 DO
    INSERT INTO numbers VALUES (i * 10);
    SET i = i + 1;
END WHILE;
```

*Hint:* The condition is i < 4.

**Answer:** Rows: 10, 20, 30. The loop stops when i becomes 4 because the condition i < 4 is false.

i starts at 1, inserts 10, 20, 30 for i = 1, 2, 3, then i becomes 4 and the loop exits.

### Q10. [Medium] What is the purpose of `DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;` inside a cursor block?

*Hint:* Think about what happens when FETCH runs out of rows.

**Answer:** When FETCH has no more rows, MySQL raises the NOT FOUND condition (SQLSTATE '02000'). The CONTINUE HANDLER catches it and sets the `done` variable to 1, which the loop body checks to LEAVE. Without the handler, the procedure would abort with error 1329.

This is the idiomatic way to detect end-of-cursor in MySQL. CONTINUE means execution resumes at the next statement; EXIT would jump out of the block.

### Q11. [Medium] Why does MySQL reject a function declaration that has no DETERMINISTIC, NO SQL, or READS SQL DATA qualifier when binary logging is on?

*Hint:* Think about replication.

**Answer:** With statement-based binary logging, the master replicates function calls as text, and the replica re-executes them. If the function is non-deterministic (uses NOW(), RAND()), the replica will produce a different result — the slave drifts. MySQL forces you to declare the function's behaviour so it (and the DBA) can reason about replication safety.

DETERMINISTIC means same input always yields same output. NO SQL and READS SQL DATA promise not to mutate data. MODIFIES SQL DATA is a red flag — think hard before using it inside a function.

### Q12. [Hard] When would you materialise a view (fake materialisation in MySQL) instead of using a regular view?

*Hint:* Think about read frequency vs write frequency vs freshness tolerance.

**Answer:** When the underlying query is expensive (complex joins, aggregation over millions of rows), the view is queried far more often than the data changes, and users can tolerate some staleness. For example, a dashboard that shows daily totals can run off a table refreshed hourly — 60 minutes of lag is acceptable but 10 seconds of query time per page-load is not.

Regular views pay the SELECT cost on every query. Materialised views shift the cost to a scheduled refresh, so the read path becomes an indexed table lookup.

### Q13. [Hard] What does SQL SECURITY DEFINER let you do that SQL SECURITY INVOKER does not?

*Hint:* Think about privilege delegation.

**Answer:** DEFINER runs the procedure with the privileges of the user who created it, not the caller. You can grant CALL permission on the procedure to a user who has no direct SELECT or UPDATE on the underlying tables. This is how production systems let application accounts execute business logic without granting them base-table access.

It is the database equivalent of a typed API: callers get one named operation, not raw table access.

### Q14. [Hard] What is wrong with this function, and what error will MySQL produce at creation time?

```
DELIMITER $$
CREATE FUNCTION next_id() RETURNS INT
BEGIN
    RETURN (SELECT MAX(id) + 1 FROM users);
END$$
DELIMITER ;
```

*Hint:* Think about data characteristic clauses.

**Answer:** The function reads from a table but has no data-characteristic clause. MySQL rejects it with ERROR 1418 when binary logging is on. Fix: add `READS SQL DATA` or `NOT DETERMINISTIC` (or both) between `RETURNS INT` and `BEGIN`.

Also note the design is racy — concurrent calls can return the same id. In real code use AUTO_INCREMENT or a sequence table with proper locking.

### Q15. [Hard] Why is it usually faster to write a set-based UPDATE than a cursor loop that updates one row at a time?

*Hint:* Think about round trips, parsing, and the optimiser.

**Answer:** A single UPDATE is planned once, executed once, and the storage engine can batch redo-log writes. A cursor loop executes N separate statements, each with its own locking, optimiser parsing, and log flush. For 100k rows, the cursor version can be 50-100x slower, especially when combined with an index update per row.

Cursors are the right tool only when each row requires a logically distinct side effect that cannot be expressed in SQL — sending an email, calling an external API from a trigger, etc.

### Q16. [Hard] Explain the difference between a user variable (`@x`) and a local variable declared with `DECLARE`.

*Hint:* Think scope and lifetime.

**Answer:** A user variable (`@x`) is session-scoped: it lives as long as the connection, is visible across procedures, and does not need DECLARE. A local variable (`DECLARE x INT`) is block-scoped: it exists only within the BEGIN...END where it was declared, cannot collide with other procedures, and does need DECLARE.

Prefer local variables inside procedures — they prevent accidental bleeding of state between CALLs. Use `@x` to receive OUT parameters or to pass values between CALLs at the client level.

### Q17. [Hard] Can a trigger call a stored procedure? Can a function call a procedure?

*Hint:* Think about what each context is allowed to do.

**Answer:** A trigger can CALL a procedure, provided the procedure does not perform forbidden operations (COMMIT, ROLLBACK inside a trigger). A function can also CALL a procedure in MySQL, but the procedure must not produce result sets (functions cannot return tabular data to the caller).

The practical rule: keep triggers and functions narrow. If the logic is complex enough to need a procedure, you usually want the caller to invoke the procedure directly, not via a trigger.

## Mixed Questions

### Q1. [Easy] What does this return?

```
CREATE VIEW adult_users AS
SELECT name FROM users WHERE age >= 18;

-- users: Aarav(20), Priya(16), Rohan(25), Anika(17)
SELECT COUNT(*) FROM adult_users;
```

*Hint:* Count only rows where age >= 18.

**Answer:** `2`

Aarav (20) and Rohan (25) are adults. Priya and Anika are below 18.

### Q2. [Easy] Which keyword replaces an existing view in one statement?

*Hint:* Think alter-like keyword for views.

**Answer:** `CREATE OR REPLACE VIEW view_name AS ...`

CREATE OR REPLACE is safer than DROP + CREATE because other sessions never see a moment when the view does not exist.

### Q3. [Medium] What does `@out` become?

```
CREATE PROCEDURE pick(IN arr_len INT, OUT r INT)
BEGIN
    DECLARE i INT DEFAULT 1;
    DECLARE total INT DEFAULT 0;
    WHILE i <= arr_len DO
        SET total = total + i;
        SET i = i + 1;
    END WHILE;
    SET r = total;
END;

CALL pick(5, @out);
```

*Hint:* Sum of 1..5.

**Answer:** `15`

1+2+3+4+5 = 15. The WHILE loop accumulates into total, then assigns to the OUT parameter.

### Q4. [Medium] You want an analyst to see employee name and department but not salary. How do you use a view to enforce this?

*Hint:* Think column-level exposure.

**Answer:** `CREATE VIEW employee_safe AS SELECT id, name, dept FROM employees;` Then grant SELECT on `employee_safe` and REVOKE SELECT on `employees`. The analyst can query the view but cannot see salary.

This is called column projection security. It is cleaner than application-level filtering because it is enforced by the database, regardless of what tool the analyst uses.

### Q5. [Medium] What error does this produce?

```
CREATE VIEW dept_counts AS
SELECT dept, COUNT(*) AS n FROM employees GROUP BY dept;

UPDATE dept_counts SET n = 0 WHERE dept = 'HR';
```

*Hint:* Aggregated views are not updatable.

**Answer:** `ERROR 1288: The target table dept_counts of the UPDATE is not updatable`

Because the view uses GROUP BY + COUNT(), a view row corresponds to many base-table rows, so MySQL cannot determine which row to update.

### Q6. [Medium] Write a one-line CREATE statement for a deterministic function `square(x)` returning INT.

*Hint:* Do not forget DETERMINISTIC.

**Answer:** `CREATE FUNCTION square(x INT) RETURNS INT DETERMINISTIC RETURN x * x;`

For a single-expression function body you can use `RETURN expr;` directly, no BEGIN...END needed. You still need the DETERMINISTIC qualifier for binary-log safety.

### Q7. [Medium] Given accounts (1, 1000), (2, 500), and this procedure, what do the balances become after CALL transfer(1, 2, 300)?

```
CREATE PROCEDURE transfer(IN f INT, IN t INT, IN amt INT)
BEGIN
    START TRANSACTION;
    UPDATE accounts SET balance = balance - amt WHERE id = f;
    UPDATE accounts SET balance = balance + amt WHERE id = t;
    COMMIT;
END;
```

*Hint:* Debit source, credit destination.

**Answer:** Account 1: 700, Account 2: 800.

1000 - 300 = 700; 500 + 300 = 800. Both UPDATEs happen inside the same transaction, so either both commit or both roll back.

### Q8. [Hard] Why might you prefer a stored procedure for batch billing over application-side logic?

*Hint:* Think about round trips, transactions, and consistency.

**Answer:** (1) One network round trip instead of N, which matters when N is millions of rows. (2) The whole job runs in one transaction (or in explicit batches) inside the database, so partial failures are cleanly rolled back. (3) The business rule lives in one place; no two services can drift out of sync. (4) DBAs can tune and schedule it without touching the app.

The trade-off is testing — stored procedures are harder to unit-test than application code. The rule of thumb: use procedures for data-heavy pipelines and keep user-facing business logic in the app.

### Q9. [Hard] What does `SELECT my_tax(1000, 18)` return given the function below?

```
CREATE FUNCTION my_tax(p DECIMAL(10,2), r DECIMAL(5,2))
RETURNS DECIMAL(10,2) DETERMINISTIC
BEGIN
    IF p > 500 THEN
        RETURN p * r / 100;
    ELSE
        RETURN 0;
    END IF;
END;
```

*Hint:* p = 1000 passes the IF check.

**Answer:** `180.00`

1000 * 18 / 100 = 180. Because p > 500, the first branch runs.

### Q10. [Hard] Explain what happens if you DROP a base table that a view depends on. What about a procedure that references it?

*Hint:* Think about when MySQL checks view/procedure bodies.

**Answer:** Both the view and the procedure keep their definitions, but calling them fails at runtime. SELECT from the view returns an error like "View references invalid table". The procedure runs until it hits a statement that uses the missing table, then errors. Neither is dropped automatically — you must recreate the base table or drop the view/procedure.

MySQL validates view and procedure bodies lazily, at call time. This is different from compiled languages where the reference would break at creation time.

### Q11. [Hard] Is it possible for a view to be both fast and always fresh? Justify.

*Hint:* Think indexes and view merging.

**Answer:** Yes, if the underlying SELECT is cheap — e.g. a single-table filter on an indexed column. MySQL inlines (merges) the view into the calling query, and the planner uses the base-table index. Speed and freshness are at odds only when the underlying SELECT is expensive; that is when materialisation becomes tempting.

Do not assume views are slow. A simple view on a well-indexed table adds zero overhead. The rule is: profile the underlying SELECT, not the view.

### Q12. [Hard] What final value does `@total` hold?

```
CREATE PROCEDURE count_by_prefix(IN p VARCHAR(5), OUT total INT)
BEGIN
    SELECT COUNT(*) INTO total
    FROM products WHERE name LIKE CONCAT(p, '%');
END;

-- products.name in: 'Apple Juice','Apple Pie','Banana Shake','Apricot'
CALL count_by_prefix('App', @total);
```

*Hint:* Count names starting with 'App'.

**Answer:** `3`

'Apple Juice', 'Apple Pie', and 'Apricot' all start with 'App'. 'Banana Shake' does not.

### Q13. [Hard] Your procedure must roll back on any error. How do you set that up without wrapping every statement in IF...THEN...ROLLBACK?

*Hint:* Use an EXIT handler.

**Answer:** Declare an EXIT handler at the top of the block:

```
DECLARE EXIT HANDLER FOR SQLEXCEPTION
BEGIN
    ROLLBACK;
    RESIGNAL;
END;
START TRANSACTION;
... statements ...
COMMIT;
```

Any SQLEXCEPTION in the body triggers the handler, which rolls back and re-raises the error.

This is the standard idiom for "transactional procedure". Use `RESIGNAL` (without arguments) to propagate the original error to the caller so the application can react.

### Q14. [Hard] Why is it a smell for a function to contain UPDATE or INSERT?

*Hint:* Functions run inside SELECTs.

**Answer:** Functions are evaluated inside SELECT statements, often once per row. An INSERT or UPDATE hidden in a function means a simple-looking `SELECT my_func(col) FROM t` is actually a bulk write — catastrophic for read replicas, caching, and reasoning. Most mature codebases forbid it.

The right pattern is to make side-effecting code a procedure (called intentionally) and keep functions pure.

### Q15. [Hard] How is a stored procedure's SQL plan cached? Is it the same as a prepared statement?

*Hint:* Think about per-connection vs global.

**Answer:** In MySQL, stored procedure execution plans are cached per connection (statement cache), not globally. Parameterisation means the optimiser produces one plan per parameter shape. Prepared statements cache similarly, per connection. MySQL does not have Oracle-style global plan sharing, so the first call after a connection establishes the plan.

The upshot: short-lived connections (e.g. serverless apps) do not benefit much from plan caching. Use a connection pool.

## Multiple Choice Questions

### Q1. [Easy] Which SQL command creates a view?

**Answer:** B

**B is correct.** The syntax is `CREATE VIEW name AS SELECT ...;`. Use `CREATE OR REPLACE VIEW` to redefine one in place.

### Q2. [Easy] What does CALL do in MySQL?

**Answer:** B

**B is correct.** Procedures are invoked with `CALL proc_name(args)`. Functions are invoked inline in any expression.

### Q3. [Easy] Which parameter direction lets a procedure return a scalar value to the caller?

**Answer:** B

**B is correct.** OUT parameters are set by the procedure and read by the caller (typically via a user variable like `@result`).

### Q4. [Easy] Why do we use DELIMITER $$ before defining a procedure?

**Answer:** B

**B is correct.** The server parses the procedure as a whole. The MySQL client uses `;` as a statement terminator by default, so we temporarily change it to send the CREATE PROCEDURE as a single statement.

### Q5. [Easy] A view is best described as:

**Answer:** B

**B is correct.** A view stores no rows. It stores a query that runs on demand.

### Q6. [Medium] Which view is NOT updatable?

**Answer:** C

**C is correct.** GROUP BY + COUNT aggregates rows, so MySQL cannot map a view row back to one base-table row. Simple projections (A, B, D) remain updatable.

### Q7. [Medium] What does WITH CHECK OPTION enforce?

**Answer:** B

**B is correct.** Without it, you could insert a row that would never appear in the view — usually a subtle bug.

### Q8. [Medium] Inside a procedure, where must DECLARE statements appear?

**Answer:** C

**C is correct.** Declare variables, conditions, handlers, and cursors (in that order) before any executable statement in the block.

### Q9. [Medium] What does DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1 do?

**Answer:** B

**B is correct.** It is the idiomatic end-of-cursor detector. The loop body then tests `done` and LEAVEs when set.

### Q10. [Medium] Which is NOT a valid MySQL loop keyword?

**Answer:** C

**C is correct.** MySQL has WHILE, REPEAT...UNTIL, and LOOP (with LEAVE). There is no FOR loop. Simulate FOR with WHILE.

### Q11. [Medium] Which is the correct way to call a function from a SELECT?

**Answer:** B

**B is correct.** Functions are invoked inline anywhere an expression is valid. CALL is for procedures only.

### Q12. [Medium] Which qualifier is needed for a function that does not read or modify data and always returns the same output for the same input?

**Answer:** C

**C is correct.** DETERMINISTIC promises same-input-same-output (replication safety). NO SQL says the function does not access any tables. Together they describe a pure computation.

### Q13. [Hard] You want a procedure to roll back on any SQL error. Which handler do you declare?

**Answer:** B

**B is correct.** SQLEXCEPTION catches all errors. EXIT leaves the block. ROLLBACK undoes the transaction; RESIGNAL propagates the error to the caller.

### Q14. [Hard] Which best describes MySQL's native support for materialised views?

**Answer:** C

**C is correct.** Unlike PostgreSQL and Oracle, MySQL has no CREATE MATERIALIZED VIEW. The idiom is a real table plus a refresh procedure scheduled via an event.

### Q15. [Hard] Which statement about SQL SECURITY DEFINER vs INVOKER is correct?

**Answer:** B

**B is correct.** DEFINER (the default) delegates privileges via the procedure, which is how you let users CALL operations on tables they cannot read directly.

### Q16. [Hard] What is wrong with SELECT my_func(x) FROM t if my_func contains UPDATE?

**Answer:** B

**B is correct.** Functions run once per row inside a SELECT. An UPDATE inside the function means a seemingly read-only query silently writes N rows — a classic foot-gun.

### Q17. [Hard] When is a cursor the right choice over a set-based SQL statement?

**Answer:** B

**B is correct.** Set-based SQL is faster for homogeneous updates. Cursors pay off only when per-row logic diverges — sending row-specific emails, calling different sub-procedures, etc.

### Q18. [Hard] Why does MySQL require a data-characteristic clause on functions when binary logging is on?

**Answer:** B

**B is correct.** Without it, a non-deterministic function (NOW, RAND) would drift the replica off the master. MySQL forces DETERMINISTIC, NO SQL, READS SQL DATA, or MODIFIES SQL DATA so the DBA can reason about replication.

## Coding Challenges

### Challenge 1. Active Customers View

**Difficulty:** Easy

Given a customers table with columns (id, name, email, status, deleted_at), create a view `active_customers` that shows only rows where status = 'ACTIVE' and deleted_at IS NULL. Then write a query on the view that counts active customers grouped by status (to prove the view works).

**Constraints:**

- Use CREATE OR REPLACE VIEW. The view must exclude soft-deleted rows.

**Sample input:**

```
customers:
(1,'Aarav','a@x',  'ACTIVE',  NULL)
(2,'Priya','p@x',  'INACTIVE',NULL)
(3,'Rohan','r@x',  'ACTIVE',  '2026-03-01')
(4,'Anika','n@x',  'ACTIVE',  NULL)
```

**Sample output:**

```
| status | cnt |
| ACTIVE |  2  |
```

**Solution:**

```sql
CREATE OR REPLACE VIEW active_customers AS
SELECT id, name, email, status
FROM customers
WHERE status = 'ACTIVE' AND deleted_at IS NULL;

SELECT status, COUNT(*) AS cnt
FROM active_customers
GROUP BY status;
```

### Challenge 2. Transfer Money Procedure

**Difficulty:** Easy

Write a stored procedure `transfer(IN from_id, IN to_id, IN amt)` that moves money between two accounts inside a transaction. If the source balance is insufficient, raise an error with SIGNAL and roll back.

**Constraints:**

- Use START TRANSACTION / COMMIT / ROLLBACK. Lock the source row with FOR UPDATE. Use SIGNAL SQLSTATE '45000' for insufficient funds.

**Sample input:**

```
accounts: (101,'Aarav',5000), (102,'Priya',2000)
CALL transfer(101, 102, 1500);
```

**Sample output:**

```
accounts: (101,'Aarav',3500), (102,'Priya',3500)
```

**Solution:**

```sql
DELIMITER $$
CREATE PROCEDURE transfer(
    IN from_id INT,
    IN to_id INT,
    IN amt DECIMAL(10,2)
)
BEGIN
    DECLARE bal DECIMAL(10,2);
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN ROLLBACK; RESIGNAL; END;

    START TRANSACTION;
    SELECT balance INTO bal FROM accounts WHERE id = from_id FOR UPDATE;
    IF bal < amt THEN
        ROLLBACK;
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Insufficient funds';
    END IF;
    UPDATE accounts SET balance = balance - amt WHERE id = from_id;
    UPDATE accounts SET balance = balance + amt WHERE id = to_id;
    COMMIT;
END$$
DELIMITER ;
```

### Challenge 3. GST Function

**Difficulty:** Easy

Create a deterministic function `gst(price, rate)` that returns the tax amount rounded to 2 decimals. Use it in a SELECT that shows the product name, price, tax, and total.

**Constraints:**

- Use RETURNS DECIMAL(10,2). Declare DETERMINISTIC.

**Sample input:**

```
products: ('Notebook',120,5), ('Headphones',1999,18)
```

**Sample output:**

```
| name       | price   | tax    | total   |
| Notebook   |  120.00 |  6.00  |  126.00 |
| Headphones | 1999.00 | 359.82 | 2358.82 |
```

**Solution:**

```sql
DELIMITER $$
CREATE FUNCTION gst(price DECIMAL(10,2), rate DECIMAL(5,2))
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    RETURN ROUND(price * rate / 100, 2);
END$$
DELIMITER ;

SELECT name, price,
       gst(price, gst_rate) AS tax,
       price + gst(price, gst_rate) AS total
FROM products;
```

### Challenge 4. Fill Calendar Table with a Loop

**Difficulty:** Medium

Write a procedure `fill_calendar(IN start_date DATE, IN num_days INT)` that inserts `num_days` consecutive dates into a table `calendar(d DATE PRIMARY KEY)` starting from `start_date`. Use DATE_ADD.

**Constraints:**

- Use a WHILE loop. Use DATE_ADD for date arithmetic.

**Sample input:**

```
CALL fill_calendar('2026-01-01', 5);
```

**Sample output:**

```
calendar: 2026-01-01, 2026-01-02, 2026-01-03, 2026-01-04, 2026-01-05
```

**Solution:**

```sql
DELIMITER $$
CREATE PROCEDURE fill_calendar(IN start_date DATE, IN num_days INT)
BEGIN
    DECLARE i INT DEFAULT 0;
    WHILE i < num_days DO
        INSERT IGNORE INTO calendar(d)
        VALUES (DATE_ADD(start_date, INTERVAL i DAY));
        SET i = i + 1;
    END WHILE;
END$$
DELIMITER ;
```

### Challenge 5. Materialised View Workaround

**Difficulty:** Medium

The query `SELECT DATE(created_at) AS d, SUM(total) AS rev FROM orders GROUP BY DATE(created_at)` is expensive. Create a table `mv_daily_sales(d, rev)` and a procedure `refresh_daily_sales()` that TRUNCATEs and repopulates it. Then schedule an event to run it every hour.

**Constraints:**

- Use TRUNCATE inside the procedure. Use CREATE EVENT with ON SCHEDULE EVERY 1 HOUR.

**Sample input:**

```
orders has 1M rows across many days.
```

**Sample output:**

```
After CALL refresh_daily_sales(); SELECT * FROM mv_daily_sales; returns one row per day with the total revenue.
```

**Solution:**

```sql
CREATE TABLE mv_daily_sales (
    d DATE PRIMARY KEY,
    rev DECIMAL(12,2)
);

DELIMITER $$
CREATE PROCEDURE refresh_daily_sales()
BEGIN
    TRUNCATE TABLE mv_daily_sales;
    INSERT INTO mv_daily_sales(d, rev)
    SELECT DATE(created_at), SUM(total)
    FROM orders
    GROUP BY DATE(created_at);
END$$
DELIMITER ;

SET GLOBAL event_scheduler = ON;
CREATE EVENT refresh_daily_sales_event
ON SCHEDULE EVERY 1 HOUR
DO CALL refresh_daily_sales();
```

### Challenge 6. Conditional Bonus Procedure

**Difficulty:** Medium

Write a procedure `give_bonus(IN emp_id INT, OUT new_sal DECIMAL(10,2))` that looks up the employee's rating and applies: rating 5 -> +20%, rating 4 -> +10%, rating 3 -> +5%, otherwise no change. It should UPDATE the salary and return the new salary via OUT.

**Constraints:**

- Use IF/ELSEIF/ELSE or CASE. Write the new salary to the OUT param.

**Sample input:**

```
employees: (1,'Aarav',50000,5)
CALL give_bonus(1, @s);
```

**Sample output:**

```
@s = 60000.00
```

**Solution:**

```sql
DELIMITER $$
CREATE PROCEDURE give_bonus(IN emp_id INT, OUT new_sal DECIMAL(10,2))
BEGIN
    DECLARE r INT;
    DECLARE mult DECIMAL(5,2);
    SELECT rating INTO r FROM employees WHERE id = emp_id;
    CASE r
        WHEN 5 THEN SET mult = 1.20;
        WHEN 4 THEN SET mult = 1.10;
        WHEN 3 THEN SET mult = 1.05;
        ELSE SET mult = 1.00;
    END CASE;
    UPDATE employees SET salary = salary * mult WHERE id = emp_id;
    SELECT salary INTO new_sal FROM employees WHERE id = emp_id;
END$$
DELIMITER ;
```

### Challenge 7. Cursor Audit Trail

**Difficulty:** Hard

Write a procedure `audit_zero_balance()` that iterates over `accounts` with a cursor. For every account whose balance is 0, insert a row into `audit_log(account_id, message, logged_at)` with message 'Account has zero balance' and the current timestamp.

**Constraints:**

- Use a cursor. Use a CONTINUE HANDLER FOR NOT FOUND. Process only balance = 0 rows.

**Sample input:**

```
accounts: (101,'Aarav',0), (102,'Priya',500), (103,'Rohan',0)
```

**Sample output:**

```
audit_log: (101,'Account has zero balance',NOW()), (103,'Account has zero balance',NOW())
```

**Solution:**

```sql
DELIMITER $$
CREATE PROCEDURE audit_zero_balance()
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE a_id INT;
    DECLARE a_bal DECIMAL(10,2);
    DECLARE cur CURSOR FOR SELECT id, balance FROM accounts;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    OPEN cur;
    read_loop: LOOP
        FETCH cur INTO a_id, a_bal;
        IF done = 1 THEN LEAVE read_loop; END IF;
        IF a_bal = 0 THEN
            INSERT INTO audit_log(account_id, message, logged_at)
            VALUES (a_id, 'Account has zero balance', NOW());
        END IF;
    END LOOP;
    CLOSE cur;
END$$
DELIMITER ;
```

### Challenge 8. Secure Wrapper Procedure

**Difficulty:** Hard

A reporting user has no SELECT on `employees` but must get total salary by department. Create a SQL SECURITY DEFINER procedure `dept_total(IN dept VARCHAR(20), OUT total DECIMAL(12,2))` that returns the sum. Then illustrate how GRANT EXECUTE would let the user CALL it without direct table access.

**Constraints:**

- Use SQL SECURITY DEFINER. Explain the GRANT statement as a comment.

**Sample input:**

```
employees: (1,'Aarav','ENG',50000), (2,'Priya','ENG',70000)
CALL dept_total('ENG', @t);
```

**Sample output:**

```
@t = 120000.00
```

**Solution:**

```sql
DELIMITER $$
CREATE DEFINER = 'admin'@'localhost'
PROCEDURE dept_total(IN dept_name VARCHAR(20), OUT total DECIMAL(12,2))
SQL SECURITY DEFINER
BEGIN
    SELECT SUM(salary) INTO total
    FROM employees WHERE dept = dept_name;
END$$
DELIMITER ;

-- Grant execute to the reporting user.
-- The user has NO direct SELECT on employees:
-- GRANT EXECUTE ON PROCEDURE shop.dept_total TO 'reporter'@'%';
-- Now the reporter can only call the procedure, not read the table directly.
```

---

*Notes: https://learn.modernagecoders.com/resources/sql/views-and-stored-procedures/*
