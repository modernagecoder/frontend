---
title: "MySQL Triggers and Events - BEFORE/AFTER INSERT UPDATE DELETE, NEW and OLD, Scheduled Events | Modern Age Coders"
description: "Master MySQL triggers and scheduled events. Learn BEFORE vs AFTER triggers, INSERT/UPDATE/DELETE triggers, NEW and OLD row references, audit logging, data validation, auto-timestamps, denormalized counts, SHOW TRIGGERS, DROP TRIGGER, and CREATE EVENT for scheduled tasks (cleanup, reporting, archival). 55+ practice questions with runnable MySQL code."
slug: triggers-and-events
canonical: https://learn.modernagecoders.com/resources/sql/triggers-and-events
category: "SQL"
keywords: ["mysql triggers", "before after trigger", "new old mysql trigger", "audit log trigger", "mysql events", "create event mysql", "scheduled events mysql", "event_scheduler", "sql trigger examples", "trigger vs event"]
---
# Triggers and Scheduled Events

**Difficulty:** Advanced  
**Reading time:** 50 min  
**Chapter:** 22  
**Practice questions:** 57

## Triggers and Events: Database Automation

Two features let the database take action on its own. A **trigger** is code that runs automatically in response to a table change (INSERT, UPDATE, or DELETE). A **scheduled event** is code that runs on a time schedule (once at 2 a.m. tomorrow, or every hour forever), independent of any row change.

```
-- A trigger: every salary change writes an audit row
CREATE TRIGGER log_salary_change
AFTER UPDATE ON employees
FOR EACH ROW
INSERT INTO salary_audit(emp_id, old_sal, new_sal, changed_at)
VALUES (OLD.id, OLD.salary, NEW.salary, NOW());

-- A scheduled event: clean up soft-deleted rows every night at 2 a.m.
CREATE EVENT nightly_cleanup
ON SCHEDULE EVERY 1 DAY STARTS '2026-04-17 02:00:00'
DO
    DELETE FROM customers
    WHERE deleted_at IS NOT NULL
      AND deleted_at < NOW() - INTERVAL 30 DAY;
```

Triggers fire in the middle of the transaction that changed the data, so they are synchronous and atomic with the change. Events fire on the MySQL event scheduler thread, asynchronously, and are mostly used for housekeeping.

Both are powerful and both are controversial. Put too much logic in triggers and the behaviour of your database becomes invisible to anyone reading application code. Used carefully, they are the right tool for auditing, timestamping, denormalised counts, validation, and scheduled cleanup.

## Why Triggers and Events Matter

### 1. Auditing That Cannot Be Bypassed

If your app writes to the `employees` table from six different services, auditing salary changes in application code means six code paths that all must remember to write an audit row. An AFTER UPDATE trigger writes the audit row no matter which service (or DBA at a console) changed the row. The database enforces the audit, not the programmer's discipline.

### 2. Automatic Timestamps and Denormalised Counts

A `posts` table needs `updated_at` set on every UPDATE. A `categories` table stores a `post_count` so your homepage query is O(1). Both are textbook trigger use cases — the database maintains invariants as the data changes.

### 3. Validation Beyond CHECK Constraints

CHECK constraints handle simple per-column rules. Cross-row, cross-table, or conditional logic ("reject an update that changes a locked invoice") requires a BEFORE trigger that calls SIGNAL to abort the operation.

### 4. Scheduled Housekeeping Without cron

Events run inside the database, so they survive application deploys, do not need a separate cron host, and write to the same connection pool. For database-internal chores — archiving, cache refresh, stats recomputation — an event is simpler than an external scheduler.

### 5. Periodic Aggregation for Dashboards

Rebuilding a `daily_revenue` summary every hour with an event gives your dashboards a cheap, indexed source of truth. The query planner loves indexed tables of 365 rows far more than raw tables of 30 million.

### 6. The Risks: Hidden Logic and Performance

Every row inserted into `orders` might fire a trigger that writes to `inventory`, which fires a trigger that writes to `audit_log`, which fires a trigger that... this cascade is invisible from the application. Know when to stop: complex business workflows belong in procedures the application calls explicitly, not in triggers that fire silently.

## Detailed Explanation

### 1. Trigger Timing: BEFORE vs AFTER

Every trigger fires either **BEFORE** or **AFTER** the change reaches the table. The distinction matters:

- **BEFORE**: run before the row is written. You can inspect and *modify* NEW (for INSERT/UPDATE) before it hits the table. Use for validation, normalisation, and default computation.
- **AFTER**: run after the row is written. You cannot change NEW any more. Use for logging, cache invalidation, and denormalised count maintenance.

```
-- BEFORE INSERT: normalise the email to lowercase
CREATE TRIGGER normalise_email
BEFORE INSERT ON users
FOR EACH ROW
SET NEW.email = LOWER(TRIM(NEW.email));

-- AFTER INSERT: increment a counter in another table
CREATE TRIGGER bump_user_count
AFTER INSERT ON users
FOR EACH ROW
UPDATE stats SET total_users = total_users + 1;
```

### 2. Trigger Events: INSERT, UPDATE, DELETE

MySQL triggers fire on one of three events, and you pick BEFORE or AFTER for each. So there are six combinations per table:

```
BEFORE INSERT   AFTER INSERT
BEFORE UPDATE   AFTER UPDATE
BEFORE DELETE   AFTER DELETE
```

Each row affected by the triggering statement fires the trigger once (`FOR EACH ROW`). MySQL does not support statement-level triggers.

### 3. NEW and OLD: the Row References

Inside a trigger body, two pseudo-records let you see the row that caused the trigger:

- **NEW**: the new row (available in INSERT and UPDATE triggers).
- **OLD**: the previous row (available in UPDATE and DELETE triggers).

EventOLD available?NEW available?NEW writable?BEFORE INSERTNoYesYesAFTER INSERTNoYes (read-only)NoBEFORE UPDATEYesYesYesAFTER UPDATEYesYes (read-only)NoBEFORE DELETEYesNo-AFTER DELETEYesNo-

```
-- Capture the old value before the UPDATE
CREATE TRIGGER log_price_change
BEFORE UPDATE ON products
FOR EACH ROW
BEGIN
    IF NEW.price <> OLD.price THEN
        INSERT INTO price_history(product_id, old_price, new_price, changed_at)
        VALUES (OLD.id, OLD.price, NEW.price, NOW());
    END IF;
END;
```

### 4. Classic Use Case: Audit Log for Salary Updates

```
CREATE TABLE salary_audit (
    id INT AUTO_INCREMENT PRIMARY KEY,
    emp_id INT,
    old_salary DECIMAL(10,2),
    new_salary DECIMAL(10,2),
    changed_by VARCHAR(50),
    changed_at DATETIME
);

DELIMITER $$
CREATE TRIGGER audit_salary
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
    IF NEW.salary <> OLD.salary THEN
        INSERT INTO salary_audit(emp_id, old_salary, new_salary, changed_by, changed_at)
        VALUES (OLD.id, OLD.salary, NEW.salary, CURRENT_USER(), NOW());
    END IF;
END$$
DELIMITER ;
```

Now *every* salary change — from any service, any DBA, any migration — produces an audit row. The application cannot forget to log it, because the log is a consequence of the UPDATE, not a separate action.

### 5. Validation Using SIGNAL

Inside a BEFORE trigger, raising an error aborts the whole triggering statement. Use `SIGNAL SQLSTATE '45000'` for user-defined errors.

```
DELIMITER $$
CREATE TRIGGER no_negative_salary
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
    IF NEW.salary < 0 THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Salary cannot be negative';
    END IF;
END$$
DELIMITER ;

INSERT INTO employees(name, salary) VALUES ('Aarav', -100);
-- ERROR 1644 (45000): Salary cannot be negative
```

### 6. Auto-Timestamp Triggers

MySQL supports `DEFAULT CURRENT_TIMESTAMP` and `ON UPDATE CURRENT_TIMESTAMP` on TIMESTAMP/DATETIME columns, which covers most cases without a trigger. Use a trigger when you need conditional timestamping — for example, only stamp `last_edited_at` when specific columns change.

```
DELIMITER $$
CREATE TRIGGER stamp_on_content_change
BEFORE UPDATE ON posts
FOR EACH ROW
BEGIN
    IF NEW.body <> OLD.body OR NEW.title <> OLD.title THEN
        SET NEW.last_edited_at = NOW();
    END IF;
END$$
DELIMITER ;
```

### 7. Maintaining Denormalised Counts

```
-- categories.post_count must reflect the number of posts per category
DELIMITER $$
CREATE TRIGGER inc_post_count
AFTER INSERT ON posts
FOR EACH ROW
UPDATE categories
SET post_count = post_count + 1
WHERE id = NEW.category_id$$

CREATE TRIGGER dec_post_count
AFTER DELETE ON posts
FOR EACH ROW
UPDATE categories
SET post_count = post_count - 1
WHERE id = OLD.category_id$$

CREATE TRIGGER move_post_count
AFTER UPDATE ON posts
FOR EACH ROW
BEGIN
    IF NEW.category_id <> OLD.category_id THEN
        UPDATE categories SET post_count = post_count - 1 WHERE id = OLD.category_id;
        UPDATE categories SET post_count = post_count + 1 WHERE id = NEW.category_id;
    END IF;
END$$
DELIMITER ;
```

The three triggers keep the count correct through inserts, deletes, and re-categorisations. Yes, it is more code than computing `COUNT(*)` on demand — but it turns a homepage query from scanning millions of posts into reading a single column.

### 8. SHOW TRIGGERS and DROP TRIGGER

```
SHOW TRIGGERS FROM shop;
SHOW TRIGGERS LIKE 'employees';

SHOW CREATE TRIGGER audit_salary;

DROP TRIGGER IF EXISTS audit_salary;
```

MySQL stores triggers in `information_schema.TRIGGERS`. Always write migrations with `DROP TRIGGER IF EXISTS ... ; CREATE TRIGGER ...;` so the migration is re-runnable.

### 9. Trigger Pitfalls

- **Hidden logic**: a developer reading application code has no idea that INSERT into `orders` fires five triggers. Document triggers. Use naming conventions (`trg___`).
- **Performance**: triggers run per row, inside the transaction. A bulk INSERT of a million rows runs the trigger a million times.
- **Ordering**: when multiple triggers fire on the same event, MySQL runs them in definition order. Use `FOLLOWS` / `PRECEDES` clauses to control ordering explicitly.
- **Recursion**: a trigger that modifies its own table fires again. MySQL disallows this by default; the trigger sees only the original statement.
- **Binary log compatibility**: row-based replication replicates the row changes from triggers transparently; statement-based replication can misbehave with non-deterministic triggers.

### 10. Scheduled Events: Syntax

```
-- Enable the scheduler (off by default in some configs)
SET GLOBAL event_scheduler = ON;

-- Run once, at a specific time
CREATE EVENT drop_old_sessions
ON SCHEDULE AT '2026-06-01 03:00:00'
DO
    DELETE FROM sessions WHERE last_active < '2026-05-01';

-- Recurring
CREATE EVENT hourly_cache_refresh
ON SCHEDULE EVERY 1 HOUR
STARTS '2026-04-17 00:00:00'
DO
    CALL refresh_daily_sales();

-- With a start and end
CREATE EVENT monthly_close
ON SCHEDULE EVERY 1 MONTH
STARTS '2026-05-01 23:00:00'
ENDS '2027-05-01 23:00:00'
DO
    CALL close_month();
```

### 11. Event Management

```
SHOW EVENTS FROM shop;
SHOW CREATE EVENT hourly_cache_refresh;

-- Disable temporarily
ALTER EVENT hourly_cache_refresh DISABLE;
ALTER EVENT hourly_cache_refresh ENABLE;

-- Drop
DROP EVENT IF EXISTS hourly_cache_refresh;

-- Check if the scheduler is running
SHOW PROCESSLIST;  -- Look for 'event_scheduler' user
-- or
SELECT @@event_scheduler;
```

### 12. Use Cases for Events

- **Daily cleanup**: delete soft-deleted rows older than N days.
- **Archiving**: move rows older than one year from `orders` to `orders_archive`.
- **Summary tables**: refresh materialised-view surrogates (see Chapter 21).
- **Reports**: compute monthly closing balances, insert a row per account.
- **TTL for tokens**: delete expired password-reset tokens every minute.

### 13. Events vs External cron

AspectMySQL EventExternal cronLocationInside the databaseOn a separate hostReplicationReplicates to replicas (or SKIP on replicas if duplicate)Runs wherever cron runsMonitoringLimited — check last_executed in information_schemaFull logging, alertingFailure handlingSilent — errors go to MySQL error logEmail, Slack, PagerDutyVersion controlSchema migrationsCrontab file in git

The pragmatic rule: use events for simple database-internal chores. For anything that needs robust monitoring, alerting, or coordination across multiple databases, use a real scheduler.

## Code Examples

### Audit Log Trigger on Salary Changes

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    salary DECIMAL(10,2)
);

CREATE TABLE salary_audit (
    id INT AUTO_INCREMENT PRIMARY KEY,
    emp_id INT,
    old_salary DECIMAL(10,2),
    new_salary DECIMAL(10,2),
    changed_at DATETIME
);

INSERT INTO employees VALUES
(1, 'Aarav', 50000),
(2, 'Priya', 60000);

DELIMITER $$
CREATE TRIGGER audit_salary
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
    IF NEW.salary <> OLD.salary THEN
        INSERT INTO salary_audit(emp_id, old_salary, new_salary, changed_at)
        VALUES (OLD.id, OLD.salary, NEW.salary, NOW());
    END IF;
END$$
DELIMITER ;

UPDATE employees SET salary = 55000 WHERE id = 1;
UPDATE employees SET salary = 60000 WHERE id = 2;  -- same salary, no audit

SELECT * FROM salary_audit;
```

The AFTER UPDATE trigger fires for every row touched by an UPDATE. We compare NEW.salary to OLD.salary so the trigger only writes audit rows when the salary actually changed — a common optimisation (UPDATE statements that set a column to the same value are a real source of noise).

**Output:**

```
+----+--------+------------+------------+---------------------+
| id | emp_id | old_salary | new_salary | changed_at          |
+----+--------+------------+------------+---------------------+
|  1 |      1 |   50000.00 |   55000.00 | 2026-04-16 14:22:05 |
+----+--------+------------+------------+---------------------+
-- Only one row because Priya's salary did not actually change.
```

### BEFORE INSERT Trigger to Normalise and Validate

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) UNIQUE,
    created_at DATETIME
);

DELIMITER $$
CREATE TRIGGER before_user_insert
BEFORE INSERT ON users
FOR EACH ROW
BEGIN
    -- Normalise email
    SET NEW.email = LOWER(TRIM(NEW.email));

    -- Validate email format (very basic)
    IF NEW.email NOT LIKE '%_@_%._%' THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Invalid email format';
    END IF;

    -- Default timestamp if not provided
    IF NEW.created_at IS NULL THEN
        SET NEW.created_at = NOW();
    END IF;
END$$
DELIMITER ;

INSERT INTO users(email) VALUES ('  Aarav@Example.COM ');
INSERT INTO users(email) VALUES ('priya@mail.in');
SELECT id, email, created_at FROM users;

-- Bad email is rejected before it hits the table
INSERT INTO users(email) VALUES ('not-an-email');
```

A BEFORE trigger can modify NEW to normalise input and raise errors with SIGNAL to reject bad rows. Because the trigger runs before the row is written, rejected rows never touch the table, never increment the AUTO_INCREMENT counter, and never appear in any UNIQUE index.

**Output:**

```
+----+--------------------+---------------------+
| id | email              | created_at          |
+----+--------------------+---------------------+
|  1 | aarav@example.com  | 2026-04-16 14:25:11 |
|  2 | priya@mail.in      | 2026-04-16 14:25:11 |
+----+--------------------+---------------------+

ERROR 1644 (45000): Invalid email format
```

### Denormalised Counter Maintenance

```sql
CREATE TABLE categories (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    post_count INT DEFAULT 0
);

CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    category_id INT
);

INSERT INTO categories(id, name) VALUES (1, 'Tech'), (2, 'Food');

DELIMITER $$

CREATE TRIGGER posts_inc_count
AFTER INSERT ON posts
FOR EACH ROW
UPDATE categories SET post_count = post_count + 1 WHERE id = NEW.category_id$$

CREATE TRIGGER posts_dec_count
AFTER DELETE ON posts
FOR EACH ROW
UPDATE categories SET post_count = post_count - 1 WHERE id = OLD.category_id$$

CREATE TRIGGER posts_move_count
AFTER UPDATE ON posts
FOR EACH ROW
BEGIN
    IF NEW.category_id <> OLD.category_id THEN
        UPDATE categories SET post_count = post_count - 1 WHERE id = OLD.category_id;
        UPDATE categories SET post_count = post_count + 1 WHERE id = NEW.category_id;
    END IF;
END$$

DELIMITER ;

INSERT INTO posts(title, category_id) VALUES ('Aarav on CPUs', 1), ('Priya on pasta', 2), ('Rohan on GPUs', 1);
UPDATE posts SET category_id = 2 WHERE title = 'Rohan on GPUs';
DELETE FROM posts WHERE title = 'Priya on pasta';

SELECT * FROM categories;
```

Three triggers keep `categories.post_count` consistent. Inserting a Tech post increments Tech. Moving Rohan's post from Tech to Food decrements Tech and increments Food. Deleting Priya's post decrements Food. Without these, every page-load would have to `SELECT COUNT(*) FROM posts GROUP BY category_id` — expensive at scale.

**Output:**

```
+----+------+------------+
| id | name | post_count |
+----+------+------------+
|  1 | Tech |          1 |
|  2 | Food |          1 |
+----+------+------------+
-- Tech has 'Aarav on CPUs'. Food has 'Rohan on GPUs' (moved in).
```

### BEFORE UPDATE Trigger That Rejects Changes to Locked Rows

```sql
CREATE TABLE invoices (
    id INT PRIMARY KEY,
    amount DECIMAL(10,2),
    status VARCHAR(20)
);

INSERT INTO invoices VALUES
(1001, 5000, 'DRAFT'),
(1002, 7500, 'LOCKED');

DELIMITER $$
CREATE TRIGGER protect_locked_invoice
BEFORE UPDATE ON invoices
FOR EACH ROW
BEGIN
    IF OLD.status = 'LOCKED' AND NEW.amount <> OLD.amount THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Cannot change amount on a LOCKED invoice';
    END IF;
END$$
DELIMITER ;

-- Allowed
UPDATE invoices SET amount = 5500 WHERE id = 1001;

-- Blocked
UPDATE invoices SET amount = 8000 WHERE id = 1002;
```

Business rule: once an invoice is LOCKED, its amount cannot change (status changes are still permitted — e.g. LOCKED -> PAID). The BEFORE UPDATE trigger compares OLD.status and the amount field. If both conditions hit, SIGNAL aborts the UPDATE and the row stays untouched.

**Output:**

```
Query OK, 1 row affected (0.01 sec)
-- First update succeeded.

ERROR 1644 (45000): Cannot change amount on a LOCKED invoice
-- Second update aborted. invoice 1002 still has amount 7500.
```

### Soft-Delete Event

```sql
CREATE TABLE customers (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    deleted_at DATETIME NULL
);

INSERT INTO customers VALUES
(1, 'Aarav', NULL),
(2, 'Priya', '2026-03-01 10:00:00'),   -- 46 days ago on 2026-04-16
(3, 'Rohan', '2026-04-10 09:00:00'),   -- 6 days ago
(4, 'Anika', '2026-03-15 14:30:00');   -- 32 days ago

-- Enable the scheduler
SET GLOBAL event_scheduler = ON;

CREATE EVENT cleanup_old_soft_deletes
ON SCHEDULE EVERY 1 DAY
STARTS '2026-04-17 02:00:00'
DO
    DELETE FROM customers
    WHERE deleted_at IS NOT NULL
      AND deleted_at < NOW() - INTERVAL 30 DAY;

-- Run it manually (for testing) by calling the same DELETE
DELETE FROM customers
WHERE deleted_at IS NOT NULL
  AND deleted_at < NOW() - INTERVAL 30 DAY;

SELECT * FROM customers;
```

The event physically removes customers that were soft-deleted more than 30 days ago. Priya (46 days) and Anika (32 days) are hard-deleted. Rohan (6 days) stays because he is within the retention window. The scheduler runs this every day at 2 a.m. without any application involvement.

**Output:**

```
+----+-------+------------+
| id | name  | deleted_at |
+----+-------+------------+
|  1 | Aarav | NULL       |
|  3 | Rohan | 2026-04-10 09:00:00 |
+----+-------+------------+
```

### Hourly Event Calling a Refresh Procedure

```sql
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    created_at DATETIME,
    total DECIMAL(10,2)
);

CREATE TABLE mv_daily_sales (
    d DATE PRIMARY KEY,
    revenue DECIMAL(12,2),
    n_orders INT
);

DELIMITER $$
CREATE PROCEDURE refresh_mv_daily_sales()
BEGIN
    TRUNCATE TABLE mv_daily_sales;
    INSERT INTO mv_daily_sales(d, revenue, n_orders)
    SELECT DATE(created_at), SUM(total), COUNT(*)
    FROM orders
    GROUP BY DATE(created_at);
END$$
DELIMITER ;

SET GLOBAL event_scheduler = ON;

CREATE EVENT refresh_mv_hourly
ON SCHEDULE EVERY 1 HOUR
STARTS CURRENT_TIMESTAMP
COMMENT 'Rebuild daily sales summary every hour'
DO CALL refresh_mv_daily_sales();

-- Check the schedule
SHOW EVENTS WHERE Name = 'refresh_mv_hourly';
```

The event calls a procedure rather than embedding the SQL directly. This is a clean separation: the procedure describes *what* to do, the event describes *when*. If you ever need to run the refresh on demand, you call the procedure. If the schedule changes, you ALTER EVENT without touching the SQL.

**Output:**

```
+---------+-------------------+---------+-----------+-----------+--------+...
| Db      | Name              | Definer | Time zone | Type      | Status |
+---------+-------------------+---------+-----------+-----------+--------+
| shop    | refresh_mv_hourly | root@lh | SYSTEM    | RECURRING | ENABLED|
+---------+-------------------+---------+-----------+-----------+--------+
```

### AFTER DELETE Trigger: Archive to History Table

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    salary DECIMAL(10,2)
);

CREATE TABLE employees_history (
    id INT,
    name VARCHAR(50),
    salary DECIMAL(10,2),
    deleted_at DATETIME
);

INSERT INTO employees VALUES (1, 'Aarav', 50000), (2, 'Priya', 60000);

DELIMITER $$
CREATE TRIGGER archive_on_delete
AFTER DELETE ON employees
FOR EACH ROW
INSERT INTO employees_history(id, name, salary, deleted_at)
VALUES (OLD.id, OLD.name, OLD.salary, NOW())$$
DELIMITER ;

DELETE FROM employees WHERE id = 1;

SELECT 'employees' AS tbl, id, name FROM employees
UNION ALL
SELECT 'history',        id, name FROM employees_history;
```

The AFTER DELETE trigger copies the old row into a history table the moment it is deleted from the live table. This is the "soft delete without bloat" pattern — the live table stays lean, but you retain a full audit trail in a separate archive table that can be moved to cheaper storage.

**Output:**

```
+-----------+----+-------+
| tbl       | id | name  |
+-----------+----+-------+
| employees |  2 | Priya |
| history   |  1 | Aarav |
+-----------+----+-------+
```

## Common Mistakes

### Using AFTER Trigger When You Need to Modify NEW

**Wrong:**

```
CREATE TRIGGER normalise_email
AFTER INSERT ON users
FOR EACH ROW
SET NEW.email = LOWER(NEW.email);
-- ERROR 1362: Updating of NEW row is not allowed in after trigger
```

ERROR 1362 (HY000): Updating of NEW row is not allowed in after trigger

**Correct:**

```
CREATE TRIGGER normalise_email
BEFORE INSERT ON users
FOR EACH ROW
SET NEW.email = LOWER(NEW.email);
```

AFTER triggers see the row after it has been written. You can read NEW but not modify it — the row is already on disk. To normalise or default values, use BEFORE. This is the most common confusion for people new to triggers.

### Referring to OLD in an INSERT Trigger

**Wrong:**

```
CREATE TRIGGER log_insert
AFTER INSERT ON orders
FOR EACH ROW
INSERT INTO log VALUES (OLD.id, 'created');
-- ERROR 1363: There is no OLD row in on INSERT trigger
```

ERROR 1363 (HY000): There is no OLD row in on INSERT trigger

**Correct:**

```
CREATE TRIGGER log_insert
AFTER INSERT ON orders
FOR EACH ROW
INSERT INTO log VALUES (NEW.id, 'created');
```

INSERT triggers have NEW only. DELETE triggers have OLD only. UPDATE triggers have both. Memorise the table: N for new = INSERT, O for old = DELETE, both = UPDATE.

### Forgetting to Enable event_scheduler

**Wrong:**

```
CREATE EVENT nightly_cleanup
ON SCHEDULE EVERY 1 DAY
DO DELETE FROM sessions WHERE last_active < NOW() - INTERVAL 30 DAY;
-- Event is created, but never runs.
-- SHOW PROCESSLIST has no 'event_scheduler' user.
```

No error — the event is created but silently never executes.

**Correct:**

```
-- Check the scheduler status
SELECT @@event_scheduler;      -- 'OFF' or 'ON' or 'DISABLED'

-- Turn it on (session or permanent)
SET GLOBAL event_scheduler = ON;

-- Make it persistent across restarts: in my.cnf
-- [mysqld]
-- event_scheduler=ON
```

`event_scheduler` is OFF by default on some MySQL distributions. Without the scheduler thread running, events exist but never fire. Always check `SHOW VARIABLES LIKE 'event_scheduler'` during setup and add the setting to my.cnf for persistence.

### Infinite Trigger Recursion Attempt

**Wrong:**

```
CREATE TRIGGER copy_comment
AFTER INSERT ON comments
FOR EACH ROW
INSERT INTO comments(post_id, body) VALUES (NEW.post_id, CONCAT('copy: ', NEW.body));
-- Inserting into comments fires the trigger again, which inserts again, ...
-- MySQL prevents recursive trigger invocation on the same table by default.
```

In some cases, ERROR 1442 (HY000): Can't update table '...' in stored function/trigger because it is already used by statement which invoked this stored function/trigger.

**Correct:**

```
-- Either:
-- (a) Insert into a DIFFERENT table
CREATE TRIGGER log_comment
AFTER INSERT ON comments
FOR EACH ROW
INSERT INTO comment_audit(comment_id, body, logged_at)
VALUES (NEW.id, NEW.body, NOW());

-- (b) Modify NEW in a BEFORE trigger, no recursion
CREATE TRIGGER tag_comment
BEFORE INSERT ON comments
FOR EACH ROW
SET NEW.body = CONCAT('verified: ', NEW.body);
```

A trigger cannot modify the same table that caused it to fire — MySQL blocks this to prevent infinite loops. If you need to enrich the row being inserted, do it in a BEFORE trigger by modifying NEW. Side effects on related tables are fine.

### Trigger That Assumes Statement-Level Fire

**Wrong:**

```
-- Expecting this to run once per INSERT statement
CREATE TRIGGER notify_ops
AFTER INSERT ON alerts
FOR EACH ROW
INSERT INTO ops_queue(msg) VALUES ('new alerts arrived');

-- INSERT INTO alerts VALUES (...), (...), (...);
-- ops_queue gets THREE rows, not one.
```

No error — but ops_queue fills up faster than expected.

**Correct:**

```
-- Accept per-row behaviour and deduplicate downstream,
-- or do the notification in the application after the statement.

-- If you really want one message per statement, track the last statement
-- via a session variable and skip duplicate rows:
CREATE TRIGGER notify_ops_once
AFTER INSERT ON alerts
FOR EACH ROW
BEGIN
    IF @last_notified_stmt IS NULL
       OR @last_notified_stmt <> CONNECTION_ID() THEN
        SET @last_notified_stmt = CONNECTION_ID();
        INSERT INTO ops_queue(msg) VALUES ('new alerts arrived');
    END IF;
END;
```

MySQL only supports row-level triggers (FOR EACH ROW). Oracle-style statement-level triggers do not exist. Always design triggers expecting one invocation per affected row. Bulk inserts and UPDATEs can unexpectedly amplify trigger side effects.

## Summary

- A trigger is automatic SQL that runs in response to an INSERT, UPDATE, or DELETE on a specific table. It can fire BEFORE or AFTER the change. Triggers are row-level in MySQL — they fire once per affected row.
- Use BEFORE triggers to validate input and modify NEW (normalise, default, reject via SIGNAL). Use AFTER triggers to log, maintain counters, or cascade non-critical updates to other tables.
- NEW refers to the incoming row (available in INSERT and UPDATE). OLD refers to the previous row (available in UPDATE and DELETE). AFTER triggers see NEW as read-only; BEFORE triggers can assign to NEW.
- SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = '...' in a BEFORE trigger aborts the triggering statement and returns the error to the caller. This is how you enforce cross-row business rules that CHECK constraints cannot express.
- Canonical trigger use cases: audit logs (AFTER UPDATE/DELETE), validation (BEFORE INSERT/UPDATE), conditional timestamps (BEFORE UPDATE), denormalised counts (AFTER INSERT/DELETE/UPDATE), and archive-on-delete (AFTER DELETE).
- Trigger pitfalls: hidden logic (document thoroughly), per-row performance (triggers run N times for N-row statements), ordering (MySQL runs them in definition order; use FOLLOWS / PRECEDES to control), and inability to recurse on the same table.
- A scheduled event is code that runs on a time schedule. Use CREATE EVENT ... ON SCHEDULE AT  for one-off tasks or ON SCHEDULE EVERY  for recurring tasks. The body is one or more SQL statements, usually CALL to a procedure.
- event_scheduler must be ON for events to fire. Set SET GLOBAL event_scheduler = ON and add event_scheduler=ON to my.cnf to survive restarts. Without the scheduler, events exist but never execute.
- Classic event use cases: daily cleanup of soft-deleted rows, nightly archival to a history table, hourly refresh of materialised-view tables, monthly report generation, and expiry of tokens / sessions.
- Events vs cron: use events for simple database-internal chores. For anything needing robust monitoring, retries, or coordination across systems, use a real external scheduler (cron, Airflow, k8s CronJob) because MySQL's event monitoring is limited to the error log.

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/triggers-and-events/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/triggers-and-events/practice/*
