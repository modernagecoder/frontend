---
title: "SQL Views and Stored Procedures in MySQL - CREATE VIEW, CREATE PROCEDURE, Functions | Modern Age Coders"
description: "Master SQL views, stored procedures, and user-defined functions in MySQL. Learn CREATE VIEW, updatable vs non-updatable views, WITH CHECK OPTION, the materialized-view workaround, CREATE PROCEDURE with IN/OUT/INOUT parameters, DELIMITER, control flow (IF, WHILE, REPEAT, LOOP), cursors, and CREATE FUNCTION. 58+ practice questions with real sample tables and MySQL-runnable queries."
slug: views-and-stored-procedures
canonical: https://learn.modernagecoders.com/resources/sql/views-and-stored-procedures/
category: "SQL"
keywords: ["sql views", "mysql create view", "stored procedures mysql", "sql functions", "mysql procedure parameters", "delimiter mysql", "with check option", "updatable views", "materialized view mysql", "cursors mysql"]
---
# Views, Stored Procedures, and Functions

**Difficulty:** Advanced  
**Reading time:** 55 min  
**Chapter:** 21  
**Practice questions:** 58

## Views, Stored Procedures, and Functions: The Database's Abstractions

Once a schema grows past a dozen tables, your application starts repeating the same joins and filters in dozens of places. Three database objects let you stop repeating yourself: **views** turn a query into a reusable virtual table, **stored procedures** bundle multi-step logic into a named routine you can CALL, and **functions** behave like ordinary SQL functions (`UPPER`, `ABS`) that you wrote yourself.

```
-- A view is a saved SELECT that looks like a table
CREATE VIEW active_customers AS
SELECT id, name, email, city
FROM customers
WHERE status = 'ACTIVE' AND deleted_at IS NULL;

SELECT * FROM active_customers WHERE city = 'Pune';

-- A stored procedure is a named block of SQL you call
DELIMITER $$
CREATE PROCEDURE transfer_money(
    IN from_id INT, IN to_id INT, IN amount DECIMAL(10,2)
)
BEGIN
    START TRANSACTION;
    UPDATE accounts SET balance = balance - amount WHERE id = from_id;
    UPDATE accounts SET balance = balance + amount WHERE id = to_id;
    COMMIT;
END$$
DELIMITER ;

CALL transfer_money(101, 102, 500.00);
```

A view does not store rows; it stores a query. Every time you read from the view, MySQL re-runs the underlying SELECT. A stored procedure, on the other hand, is compiled code that lives inside the database and can contain variables, loops, IF/ELSE, transactions, and even cursors. Functions are a third flavour: they take parameters, return a single value, and can be called from inside any SELECT.

## Why These Three Objects Matter

### 1. Hiding Schema Complexity from the Application

A frontend engineer writing a dashboard for Aarav does not care that `active_customers` actually requires joining `customers`, `subscriptions`, and `user_flags` while filtering on three status columns. A view hides all that. The application writes `SELECT * FROM active_customers` and the schema behind the view is free to change.

### 2. Security via Column and Row Filtering

You can grant a read-only analyst access to a view that exposes only five columns out of a 30-column `employees` table — no salary, no Aadhaar, no manager notes. The underlying table remains inaccessible. This is how production systems keep PII away from BI tools.

### 3. Atomic, Reusable Business Logic

A money transfer is not one UPDATE; it is debit + credit + audit log + balance check, all inside a transaction. If this logic lives in the application, every service that transfers money must re-implement it (and eventually one of them will do it wrong). A stored procedure enforces the sequence in one place.

### 4. Performance and Round Trips

A procedure that runs ten queries incurs one network round trip. The same ten queries from an application server means ten TCP round trips. For bulk jobs (monthly billing, nightly reconciliation) this difference is measured in hours.

### 5. Computed Columns Across the Database

If Priya defines a function `gst_amount(price, state)`, every query in the warehouse can use it: `SELECT order_id, gst_amount(total, ship_state) FROM orders`. Tax logic lives in one place. When the rates change, one ALTER FUNCTION and every report is correct.

## Detailed Explanation

### 1. Creating and Using Views

A view is defined by a SELECT statement. When you query the view, MySQL substitutes the underlying SELECT at query-planning time (this is called *view merging*).

```
CREATE VIEW top_cities AS
SELECT city, COUNT(*) AS customer_count
FROM customers
GROUP BY city
HAVING COUNT(*) > 100;

-- Use it like any table
SELECT * FROM top_cities ORDER BY customer_count DESC;

-- Replace an existing view (safer than DROP + CREATE)
CREATE OR REPLACE VIEW top_cities AS
SELECT city, state, COUNT(*) AS customer_count
FROM customers
GROUP BY city, state
HAVING COUNT(*) > 100;

-- Drop
DROP VIEW IF EXISTS top_cities;
```

### 2. Updatable vs Non-Updatable Views

A view is **updatable** (supports INSERT/UPDATE/DELETE) only when MySQL can map every row back to exactly one row in one base table. These rules make a view non-updatable: aggregation (`SUM`, `GROUP BY`), `DISTINCT`, set operations (`UNION`), subqueries in the SELECT list, joins (in most cases), and window functions.

```
-- Updatable: simple filter on one table
CREATE VIEW pune_customers AS
SELECT id, name, email FROM customers WHERE city = 'Pune';

UPDATE pune_customers SET email = 'aarav@new.com' WHERE id = 5;
-- This actually updates the customers table

-- NOT updatable: has GROUP BY
CREATE VIEW city_stats AS
SELECT city, COUNT(*) AS n FROM customers GROUP BY city;

UPDATE city_stats SET n = 0 WHERE city = 'Pune';
-- ERROR 1288: The target table city_stats of the UPDATE is not updatable
```

### 3. WITH CHECK OPTION

By default, you can INSERT rows through an updatable view even if the new row would not appear in the view. `WITH CHECK OPTION` forbids this.

```
CREATE VIEW pune_customers AS
SELECT id, name, city FROM customers WHERE city = 'Pune'
WITH CHECK OPTION;

INSERT INTO pune_customers VALUES (99, 'Rohan', 'Mumbai');
-- ERROR 1369: CHECK OPTION failed 'pune_customers'

INSERT INTO pune_customers VALUES (99, 'Rohan', 'Pune');
-- OK
```

### 4. Materialized Views: The MySQL Workaround

A *materialized view* stores the query result on disk and refreshes it on schedule. PostgreSQL and Oracle support them natively. MySQL does not. The standard workaround is a real table plus an event that refreshes it.

```
-- The "materialized view" is actually a plain table
CREATE TABLE mv_daily_sales (
    sale_date DATE PRIMARY KEY,
    total_sales DECIMAL(12,2),
    order_count INT
);

-- A procedure that rebuilds it
DELIMITER $$
CREATE PROCEDURE refresh_daily_sales()
BEGIN
    TRUNCATE TABLE mv_daily_sales;
    INSERT INTO mv_daily_sales
    SELECT DATE(created_at), SUM(total), COUNT(*)
    FROM orders
    GROUP BY DATE(created_at);
END$$
DELIMITER ;

-- A scheduled event to refresh hourly
CREATE EVENT refresh_daily_sales_event
ON SCHEDULE EVERY 1 HOUR
DO CALL refresh_daily_sales();
```

You trade freshness for query speed. If reads run a thousand times per minute and the underlying data changes every few hours, this pattern pays for itself.

### 5. Stored Procedures: The Basics

A procedure is a named block of SQL that supports variables, flow control, and transactions. Because MySQL statements end with `;`, you must temporarily change the statement delimiter while defining one.

```
DELIMITER $$

CREATE PROCEDURE get_customer_count()
BEGIN
    SELECT COUNT(*) AS total FROM customers;
END$$

DELIMITER ;

CALL get_customer_count();
-- Output: total = 1247
```

### 6. Parameters: IN, OUT, INOUT

- **IN** (default): caller passes a value in; the procedure reads it.
- **OUT**: the procedure writes a value out; the caller reads it after.
- **INOUT**: both directions.

```
DELIMITER $$
CREATE PROCEDURE get_balance(
    IN  acct_id INT,
    OUT bal DECIMAL(10,2)
)
BEGIN
    SELECT balance INTO bal FROM accounts WHERE id = acct_id;
END$$
DELIMITER ;

CALL get_balance(101, @b);
SELECT @b;  -- 5000.00

-- INOUT example: apply 10% interest
DELIMITER $$
CREATE PROCEDURE add_interest(INOUT bal DECIMAL(10,2), IN rate DECIMAL(5,2))
BEGIN
    SET bal = bal * (1 + rate/100);
END$$
DELIMITER ;

SET @x = 1000.00;
CALL add_interest(@x, 10);
SELECT @x;  -- 1100.00
```

### 7. DECLARE: Local Variables

```
DELIMITER $$
CREATE PROCEDURE apply_bonus(IN emp_id INT)
BEGIN
    DECLARE current_salary DECIMAL(10,2);
    DECLARE bonus DECIMAL(10,2);

    SELECT salary INTO current_salary FROM employees WHERE id = emp_id;
    SET bonus = current_salary * 0.10;

    UPDATE employees SET salary = salary + bonus WHERE id = emp_id;
END$$
DELIMITER ;
```

Local variables must be declared at the start of a BEGIN...END block, before any executable statement.

### 8. Control Flow: IF, CASE, WHILE, REPEAT, LOOP

```
-- IF / ELSEIF / ELSE
IF current_salary < 30000 THEN
    SET hike = 0.20;
ELSEIF current_salary < 60000 THEN
    SET hike = 0.15;
ELSE
    SET hike = 0.10;
END IF;

-- CASE
CASE level
    WHEN 'JUNIOR' THEN SET bonus = 5000;
    WHEN 'SENIOR' THEN SET bonus = 15000;
    ELSE SET bonus = 0;
END CASE;

-- WHILE
DECLARE i INT DEFAULT 1;
WHILE i <= 10 DO
    INSERT INTO numbers VALUES (i);
    SET i = i + 1;
END WHILE;

-- REPEAT (exit-condition loop)
SET i = 1;
REPEAT
    INSERT INTO numbers VALUES (i);
    SET i = i + 1;
UNTIL i > 10
END REPEAT;

-- LOOP with LEAVE (break)
my_loop: LOOP
    SET i = i + 1;
    IF i > 10 THEN LEAVE my_loop; END IF;
END LOOP my_loop;
```

### 9. Cursors: Row-by-Row Processing

A cursor lets you iterate over a result set one row at a time. Use them sparingly — a set-based UPDATE is usually 100x faster than a cursor loop. Cursors make sense when each row requires a distinct side effect (sending an email, calling another procedure).

```
DELIMITER $$
CREATE PROCEDURE give_raise_to_top_performers()
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE emp_id INT;
    DECLARE emp_rating INT;

    DECLARE cur CURSOR FOR
        SELECT id, rating FROM employees WHERE rating >= 4;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    OPEN cur;
    read_loop: LOOP
        FETCH cur INTO emp_id, emp_rating;
        IF done = 1 THEN LEAVE read_loop; END IF;

        IF emp_rating = 5 THEN
            UPDATE employees SET salary = salary * 1.20 WHERE id = emp_id;
        ELSE
            UPDATE employees SET salary = salary * 1.10 WHERE id = emp_id;
        END IF;
    END LOOP;
    CLOSE cur;
END$$
DELIMITER ;
```

The `CONTINUE HANDLER FOR NOT FOUND` sets the `done` flag when the cursor runs out of rows — this is the standard idiom.

### 10. User-Defined Functions

A function is like a procedure but returns exactly one value and can be called from a SELECT. Functions cannot modify data (in MySQL, they can, but it is strongly discouraged and requires `DETERMINISTIC` or `READS SQL DATA` qualifiers).

```
DELIMITER $$
CREATE FUNCTION gst(price DECIMAL(10,2), rate DECIMAL(5,2))
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    RETURN ROUND(price * rate / 100, 2);
END$$
DELIMITER ;

SELECT product, price, gst(price, 18) AS tax FROM products;
```

Keywords you must know:

- `DETERMINISTIC`: same inputs always produce the same output (needed for replication safety).
- `READS SQL DATA`: the function runs SELECTs.
- `MODIFIES SQL DATA`: the function runs INSERT/UPDATE/DELETE (rarely appropriate).
- `NO SQL`: pure computation, no table access.

### 11. Procedures vs Functions: The Real Differences

ProcedureFunctionReturnsZero or more result sets (via OUT params or SELECT inside)Exactly one scalar valueCalled from SELECT?NoYes: `SELECT gst(price, 18)`Invocation`CALL proc_name(args)``func_name(args)` anywhere an expression is validTransactionsCan START TRANSACTION, COMMIT, ROLLBACKCannot (in MySQL functions)Typical useBusiness workflows, batch jobsScalar computations, derived columns

### 12. DROP, ALTER, SHOW

```
-- List everything
SHOW PROCEDURE STATUS WHERE Db = 'shop';
SHOW FUNCTION STATUS WHERE Db = 'shop';
SHOW CREATE PROCEDURE transfer_money;
SHOW CREATE VIEW active_customers;

-- Drop
DROP PROCEDURE IF EXISTS transfer_money;
DROP FUNCTION  IF EXISTS gst;
DROP VIEW      IF EXISTS active_customers;

-- You cannot ALTER a procedure's body; drop and recreate.
-- ALTER PROCEDURE only changes characteristics like SQL SECURITY.
```

### 13. SQL SECURITY: DEFINER vs INVOKER

By default a procedure runs with the privileges of the user who defined it (`SQL SECURITY DEFINER`). This lets you grant CALL permission to users who do not have direct access to the underlying tables — a common security pattern. Use `SQL SECURITY INVOKER` to run with the caller's privileges instead.

```
CREATE PROCEDURE view_salary(IN emp_id INT)
SQL SECURITY INVOKER
BEGIN
    SELECT salary FROM employees WHERE id = emp_id;
END;
```

## Code Examples

### Active Customers View with Hidden Columns

```sql
-- Base table
CREATE TABLE customers (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100),
    phone VARCHAR(15),
    aadhaar VARCHAR(12),
    status VARCHAR(10),
    deleted_at DATETIME NULL
);

INSERT INTO customers VALUES
(1, 'Aarav Sharma',  'aarav@mail.com',  '9876500001', '111122223333', 'ACTIVE',  NULL),
(2, 'Priya Nair',    'priya@mail.com',  '9876500002', '222233334444', 'ACTIVE',  NULL),
(3, 'Rohan Kapoor',  'rohan@mail.com',  '9876500003', '333344445555', 'INACTIVE',NULL),
(4, 'Anika Desai',   'anika@mail.com',  '9876500004', '444455556666', 'ACTIVE',  '2026-03-01 10:00:00');

-- View exposes only non-PII columns and only live, active rows
CREATE VIEW active_customers AS
SELECT id, name, email
FROM customers
WHERE status = 'ACTIVE' AND deleted_at IS NULL;

SELECT * FROM active_customers;
```

The view hides `phone` and `aadhaar` completely. A read-only reporting user granted access to `active_customers` cannot see PII even if they know the column names. The WHERE clause also enforces the business rule of active + not-deleted in one place.

**Output:**

```
+----+--------------+-----------------+
| id | name         | email           |
+----+--------------+-----------------+
|  1 | Aarav Sharma | aarav@mail.com  |
|  2 | Priya Nair   | priya@mail.com  |
+----+--------------+-----------------+
```

### WITH CHECK OPTION Preventing Out-of-View Inserts

```sql
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    total DECIMAL(10,2),
    region VARCHAR(20)
);

INSERT INTO orders (customer_id, total, region) VALUES
(1, 1500.00, 'WEST'),
(2,  800.00, 'WEST'),
(3, 2100.00, 'NORTH');

CREATE VIEW west_orders AS
SELECT id, customer_id, total, region
FROM orders
WHERE region = 'WEST'
WITH CHECK OPTION;

-- This would silently succeed without CHECK OPTION
-- With it, MySQL blocks the insert
INSERT INTO west_orders (customer_id, total, region)
VALUES (4, 500.00, 'EAST');
-- ERROR 1369 (HY000): CHECK OPTION failed 'shop.west_orders'

INSERT INTO west_orders (customer_id, total, region)
VALUES (4, 500.00, 'WEST');
-- OK

SELECT * FROM west_orders;
```

`WITH CHECK OPTION` tells MySQL that every INSERT/UPDATE through the view must produce a row that still passes the view's WHERE clause. Without it, you could insert an EAST row through `west_orders` — the row would land in the base table but disappear from the view, which almost always indicates a bug.

**Output:**

```
ERROR 1369 (HY000): CHECK OPTION failed 'shop.west_orders'

+----+-------------+---------+--------+
| id | customer_id | total   | region |
+----+-------------+---------+--------+
|  1 |           1 | 1500.00 | WEST   |
|  2 |           2 |  800.00 | WEST   |
|  4 |           4 |  500.00 | WEST   |
+----+-------------+---------+--------+
```

### Stored Procedure: Transfer Money Between Accounts

```sql
CREATE TABLE accounts (
    id INT PRIMARY KEY,
    holder VARCHAR(50),
    balance DECIMAL(10,2) NOT NULL CHECK (balance >= 0)
);

INSERT INTO accounts VALUES
(101, 'Aarav', 5000.00),
(102, 'Priya', 2000.00);

DELIMITER $$
CREATE PROCEDURE transfer_money(
    IN  from_id INT,
    IN  to_id   INT,
    IN  amount  DECIMAL(10,2)
)
BEGIN
    DECLARE from_balance DECIMAL(10,2);

    START TRANSACTION;

    SELECT balance INTO from_balance
    FROM accounts WHERE id = from_id FOR UPDATE;

    IF from_balance < amount THEN
        ROLLBACK;
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Insufficient funds';
    END IF;

    UPDATE accounts SET balance = balance - amount WHERE id = from_id;
    UPDATE accounts SET balance = balance + amount WHERE id = to_id;

    COMMIT;
END$$
DELIMITER ;

CALL transfer_money(101, 102, 1500.00);
SELECT * FROM accounts;
```

The procedure wraps debit + credit in a transaction. `SELECT ... FOR UPDATE` locks the source account so no concurrent transfer can cause an overdraft. If the balance is insufficient, `SIGNAL` raises a user-defined error — the exact mechanism applications catch. This is the textbook "atomic transfer" — it either fully succeeds or fully rolls back.

**Output:**

```
+-----+--------+---------+
| id  | holder | balance |
+-----+--------+---------+
| 101 | Aarav  | 3500.00 |
| 102 | Priya  | 3500.00 |
+-----+--------+---------+
```

### OUT Parameter: Fetch a Scalar Result

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    dept VARCHAR(20),
    salary DECIMAL(10,2)
);

INSERT INTO employees VALUES
(1, 'Aarav',  'ENG', 90000),
(2, 'Priya',  'ENG', 75000),
(3, 'Rohan',  'SAL', 60000),
(4, 'Anika',  'ENG', 110000);

DELIMITER $$
CREATE PROCEDURE avg_salary_by_dept(
    IN  dept_name VARCHAR(20),
    OUT avg_sal   DECIMAL(10,2)
)
BEGIN
    SELECT AVG(salary) INTO avg_sal
    FROM employees WHERE dept = dept_name;
END$$
DELIMITER ;

CALL avg_salary_by_dept('ENG', @avg);
SELECT @avg AS engineering_avg;
```

The procedure takes a department name as IN and returns the average salary through an OUT parameter. The caller uses a user variable (`@avg`) to receive the value. `SELECT INTO` is the canonical way to assign a single-row result into local or OUT variables.

**Output:**

```
+-----------------+
| engineering_avg |
+-----------------+
|     91666.67    |
+-----------------+
```

### WHILE Loop: Populate a Numbers Table

```sql
CREATE TABLE numbers (n INT PRIMARY KEY);

DELIMITER $$
CREATE PROCEDURE fill_numbers(IN up_to INT)
BEGIN
    DECLARE i INT DEFAULT 1;
    WHILE i <= up_to DO
        INSERT INTO numbers VALUES (i);
        SET i = i + 1;
    END WHILE;
END$$
DELIMITER ;

CALL fill_numbers(5);
SELECT * FROM numbers ORDER BY n;
```

A classic WHILE loop. The variable `i` is declared at the start of the block. Numbers tables are invaluable for generating calendar rows, filling gaps, and simulating row-generating functions that MySQL lacks. In production you would usually wrap the inserts in a single multi-row INSERT for speed; this illustrates the loop mechanics.

**Output:**

```
+---+
| n |
+---+
| 1 |
| 2 |
| 3 |
| 4 |
| 5 |
+---+
```

### User-Defined Function: GST Computation

```sql
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    price DECIMAL(10,2),
    gst_rate DECIMAL(5,2)
);

INSERT INTO products VALUES
(1, 'Notebook',    120.00,  5.00),
(2, 'Headphones', 1999.00, 18.00),
(3, 'T-shirt',     499.00, 12.00);

DELIMITER $$
CREATE FUNCTION gst(price DECIMAL(10,2), rate DECIMAL(5,2))
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    RETURN ROUND(price * rate / 100, 2);
END$$
DELIMITER ;

SELECT name, price, gst_rate,
       gst(price, gst_rate) AS tax,
       price + gst(price, gst_rate) AS total
FROM products;
```

Because `gst` is a function, it can appear anywhere an expression can — SELECT list, WHERE, ORDER BY, HAVING. `DETERMINISTIC` tells MySQL that the function is a pure computation, which is required for binary-log-based replication and lets the optimiser cache calls.

**Output:**

```
+------------+---------+----------+--------+---------+
| name       | price   | gst_rate | tax    | total   |
+------------+---------+----------+--------+---------+
| Notebook   |  120.00 |  5.00    |   6.00 |  126.00 |
| Headphones | 1999.00 | 18.00    | 359.82 | 2358.82 |
| T-shirt    |  499.00 | 12.00    |  59.88 |  558.88 |
+------------+---------+----------+--------+---------+
```

### Cursor Loop: Row-by-Row Side Effects

```sql
CREATE TABLE employees_bonus (
    id INT PRIMARY KEY,
    emp_id INT,
    bonus DECIMAL(10,2)
);

DELIMITER $$
CREATE PROCEDURE compute_yearly_bonus()
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE cur_id INT;
    DECLARE cur_salary DECIMAL(10,2);
    DECLARE cur_dept VARCHAR(20);
    DECLARE bonus_amt DECIMAL(10,2);

    DECLARE emp_cur CURSOR FOR
        SELECT id, salary, dept FROM employees;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    OPEN emp_cur;
    emp_loop: LOOP
        FETCH emp_cur INTO cur_id, cur_salary, cur_dept;
        IF done = 1 THEN LEAVE emp_loop; END IF;

        IF cur_dept = 'ENG' THEN
            SET bonus_amt = cur_salary * 0.15;
        ELSE
            SET bonus_amt = cur_salary * 0.10;
        END IF;

        INSERT INTO employees_bonus (emp_id, bonus)
        VALUES (cur_id, bonus_amt);
    END LOOP;
    CLOSE emp_cur;
END$$
DELIMITER ;

CALL compute_yearly_bonus();
SELECT * FROM employees_bonus;
```

The cursor iterates over every employee. For each row, the procedure decides the bonus percentage based on department and inserts a record. The `CONTINUE HANDLER FOR NOT FOUND` is the standard way to detect end-of-cursor: when `FETCH` runs out of rows, it raises a NOT FOUND condition and the handler flips `done` to 1, which the IF inside the loop uses to LEAVE.

**Output:**

```
+----+--------+----------+
| id | emp_id | bonus    |
+----+--------+----------+
|  1 |      1 | 13500.00 |
|  2 |      2 | 11250.00 |
|  3 |      3 |  6000.00 |
|  4 |      4 | 16500.00 |
+----+--------+----------+
```

## Common Mistakes

### Forgetting DELIMITER $$ for Multi-Statement Bodies

**Wrong:**

```
CREATE PROCEDURE greet()
BEGIN
    SELECT 'Hello';
    SELECT 'World';
END;
-- MySQL client thinks the first ; ends the whole CREATE statement.
-- Result: syntax error, or a half-built procedure.
```

ERROR 1064 (42000): You have an error in your SQL syntax; check the manual ... near 'END' at line 4

**Correct:**

```
DELIMITER $$

CREATE PROCEDURE greet()
BEGIN
    SELECT 'Hello';
    SELECT 'World';
END$$

DELIMITER ;

CALL greet();
```

The MySQL client ends every statement on a semicolon. A procedure body has internal semicolons, so you must change the delimiter to something like `$$` for the duration of the CREATE statement and change it back afterwards. This is purely a client concern — the server does not care — but forgetting it is the single most common mistake.

### Trying to UPDATE a Non-Updatable View

**Wrong:**

```
CREATE VIEW dept_totals AS
SELECT dept, SUM(salary) AS total
FROM employees
GROUP BY dept;

UPDATE dept_totals SET total = 0 WHERE dept = 'ENG';
-- ERROR 1288 (HY000): The target table dept_totals of the UPDATE is not updatable
```

ERROR 1288: The target table is not updatable

**Correct:**

```
-- If you want to update the underlying salaries, target the base table
UPDATE employees SET salary = 0 WHERE dept = 'ENG';

-- A view with aggregation is read-only by definition. Any view that
-- uses GROUP BY, DISTINCT, UNION, a subquery in SELECT, or most JOINs
-- becomes non-updatable.
```

MySQL cannot map an aggregated row back to a specific row in a base table, so it refuses the UPDATE rather than guess. The lesson: views are for simplifying reads. If you also need to write, keep the view definition simple (single table, no aggregation, no DISTINCT).

### Declaring Variables After Executable Statements

**Wrong:**

```
DELIMITER $$
CREATE PROCEDURE bad_order()
BEGIN
    SET @x = 5;                        -- user variable, fine
    SELECT COUNT(*) FROM employees;    -- executable statement
    DECLARE i INT DEFAULT 0;           -- too late!
END$$
DELIMITER ;
-- ERROR 1064: syntax error near 'DECLARE i INT DEFAULT 0'
```

ERROR 1064 (42000): You have an error in your SQL syntax

**Correct:**

```
DELIMITER $$
CREATE PROCEDURE good_order()
BEGIN
    DECLARE i INT DEFAULT 0;           -- all DECLAREs first
    SELECT COUNT(*) INTO i FROM employees;
    SET @x = i;
END$$
DELIMITER ;
```

MySQL requires every `DECLARE` to appear at the top of its BEGIN...END block, before any executable statement. Nest a new BEGIN...END if you need to declare a variable later. Also note: user variables like `@x` do not need DECLARE — they are session-scoped. Only local variables (no `@`) require DECLARE.

### Cursor Without a NOT FOUND Handler (Infinite Loop or Error)

**Wrong:**

```
DELIMITER $$
CREATE PROCEDURE broken_cursor()
BEGIN
    DECLARE cur CURSOR FOR SELECT id FROM employees;
    DECLARE emp_id INT;
    OPEN cur;
    my_loop: LOOP
        FETCH cur INTO emp_id;   -- raises NOT FOUND when empty
        -- No handler! The procedure errors out at the end.
    END LOOP my_loop;
    CLOSE cur;
END$$
DELIMITER ;
```

ERROR 1329 (02000): No data - zero rows fetched, selected, or processed

**Correct:**

```
DELIMITER $$
CREATE PROCEDURE working_cursor()
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE emp_id INT;
    DECLARE cur CURSOR FOR SELECT id FROM employees;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    OPEN cur;
    my_loop: LOOP
        FETCH cur INTO emp_id;
        IF done = 1 THEN LEAVE my_loop; END IF;
        -- do something with emp_id
    END LOOP my_loop;
    CLOSE cur;
END$$
DELIMITER ;
```

When a cursor is exhausted, `FETCH` raises the NOT FOUND condition. Without a handler the procedure throws error 1329 and aborts. The CONTINUE HANDLER lets you flip a sentinel variable and LEAVE the loop cleanly. This is boilerplate you copy verbatim into every cursor procedure.

### Forgetting DETERMINISTIC on a Pure Function (Replication Error)

**Wrong:**

```
DELIMITER $$
CREATE FUNCTION gst(price DECIMAL(10,2), rate DECIMAL(5,2))
RETURNS DECIMAL(10,2)
BEGIN
    RETURN ROUND(price * rate / 100, 2);
END$$
DELIMITER ;
-- ERROR 1418 (HY000): This function has none of DETERMINISTIC, NO SQL,
-- or READS SQL DATA in its declaration and binary logging is enabled
```

ERROR 1418: This function has none of DETERMINISTIC, NO SQL, or READS SQL DATA

**Correct:**

```
DELIMITER $$
CREATE FUNCTION gst(price DECIMAL(10,2), rate DECIMAL(5,2))
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    RETURN ROUND(price * rate / 100, 2);
END$$
DELIMITER ;
```

When binary logging is on (which it is on nearly every production server because of replication and point-in-time recovery), MySQL refuses to create a function unless you declare its data characteristic: `DETERMINISTIC`, `NO SQL`, `READS SQL DATA`, or `MODIFIES SQL DATA`. Claiming DETERMINISTIC when the function actually uses `NOW()` or `RAND()` corrupts replicas, so be honest about it.

## Summary

- A view is a named SELECT that behaves like a virtual table. It stores no rows — every query re-runs the underlying SELECT through view merging. Views hide complexity, expose only safe columns, and give BI tools a stable interface while the schema evolves.
- Views are updatable (INSERT/UPDATE/DELETE pass through to the base table) only when MySQL can map each view row to one base-table row. Aggregation, DISTINCT, UNION, subqueries in SELECT, joins, and window functions all make a view read-only.
- WITH CHECK OPTION forces every INSERT/UPDATE through the view to produce a row that still matches the view's WHERE clause. Without it, you can insert rows that immediately disappear from the view — almost always a bug.
- MySQL has no native materialized views. The standard workaround is a real table plus a stored procedure that rebuilds it, scheduled via an event (hourly, nightly). Trade freshness for read speed.
- Stored procedures are named blocks of SQL with parameters (IN, OUT, INOUT), local variables (DECLARE), and control flow (IF, CASE, WHILE, REPEAT, LOOP). Call them with CALL proc_name(args). Define with DELIMITER $$ ... END$$ to survive internal semicolons.
- IN passes values in, OUT returns a value to the caller (use @var to receive), INOUT does both. Use SELECT ... INTO to assign scalar query results into procedure variables.
- Cursors iterate a result set row by row. Always pair a cursor with a CONTINUE HANDLER FOR NOT FOUND that sets a done flag, and LEAVE the loop when done = 1. Prefer set-based SQL whenever possible — cursors are 10-100x slower.
- Functions return exactly one value and are callable from any SELECT, WHERE, or ORDER BY. Procedures can return multiple result sets via OUT or inline SELECTs but must be invoked with CALL.
- Binary logging (on by default in production) requires every function to declare DETERMINISTIC, NO SQL, READS SQL DATA, or MODIFIES SQL DATA. Label accurately — lying about determinism breaks replication.
- SQL SECURITY DEFINER (the default) runs procedures with the defining user's privileges, which is how you grant CALL access to users who cannot read the underlying tables directly. Use INVOKER when you want caller-based checks.

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/views-and-stored-procedures/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/views-and-stored-procedures/practice/*
