---
title: "Practice: Triggers and Scheduled Events"
description: "57 practice problems for Triggers and Scheduled Events in SQL"
slug: triggers-and-events-practice
canonical: https://learn.modernagecoders.com/resources/sql/triggers-and-events/practice
category: "SQL"
---
# Practice: Triggers and Scheduled Events

**Total questions:** 57

## Topic-Specific Questions

### Q1. [Easy] What is the difference between BEFORE and AFTER triggers?

*Hint:* Think about when the row is written.

**Answer:** BEFORE fires before the row is written to disk, allowing you to inspect and modify NEW. AFTER fires once the row has been written — NEW is read-only. Use BEFORE for validation and defaulting; AFTER for logging and cascading changes to other tables.

You cannot change NEW in an AFTER trigger because the row is already persisted. Trying to do so gives ERROR 1362.

### Q2. [Easy] Which pseudo-records are available in a BEFORE UPDATE trigger?

*Hint:* Think previous row vs new row.

**Answer:** Both `OLD` (the current row about to be changed) and `NEW` (the row after the UPDATE is applied). In a BEFORE trigger, NEW is writable, so you can alter the outgoing row.

This is what makes BEFORE UPDATE triggers useful for computing things like last_modified_at based on whether the row actually changed.

### Q3. [Easy] Given this trigger, what does `SELECT email FROM users;` return after `INSERT INTO users(email) VALUES ('  Aarav@Mail.COM ');`?

```
CREATE TRIGGER clean BEFORE INSERT ON users
FOR EACH ROW SET NEW.email = LOWER(TRIM(NEW.email));
```

*Hint:* The trigger normalises the email.

**Answer:** `aarav@mail.com`

TRIM removes surrounding spaces and LOWER converts to lowercase. The BEFORE trigger modifies NEW.email before the row is written.

### Q4. [Easy] Can a DELETE trigger access NEW?

*Hint:* Think about whether a deleted row has a new version.

**Answer:** No. DELETE triggers only have OLD. There is no NEW row because the row is being removed, not replaced. Trying to read NEW in a DELETE trigger is a syntax error.

Symmetric rule: INSERT triggers have NEW only; DELETE triggers have OLD only; UPDATE triggers have both.

### Q5. [Easy] What is a scheduled event in MySQL?

*Hint:* Compare with triggers.

**Answer:** A named, time-based task stored inside the database. It runs on the event-scheduler thread, not in response to any row change. Used for daily cleanup, archival, hourly cache refresh, and similar chores.

Events are the database equivalent of cron — they fire on a schedule, not on a data change.

### Q6. [Easy] What enables the event scheduler?

*Hint:* One setting.

**Answer:** `SET GLOBAL event_scheduler = ON;` or permanently via `event_scheduler=ON` in my.cnf.

Without the scheduler running, every event is dormant. Always check `SELECT @@event_scheduler` after creating events.

### Q7. [Medium] A trigger counts how many times it has fired:

```
CREATE TRIGGER bump
AFTER INSERT ON orders
FOR EACH ROW
UPDATE stats SET n = n + 1 WHERE id = 1;

-- stats.n starts at 0
INSERT INTO orders(total) VALUES (10),(20),(30);
SELECT n FROM stats WHERE id = 1;
```

*Hint:* How many rows does a 3-row INSERT create?

**Answer:** `3`

A multi-row INSERT fires the trigger once per row. The counter increments three times from 0 to 3.

### Q8. [Medium] Why can MySQL refuse to let a trigger update its own table?

*Hint:* Think infinite recursion.

**Answer:** Because allowing it would invite infinite recursion: the trigger fires on UPDATE, modifies a row, which fires the trigger again. MySQL's default is to block any trigger that would re-trigger itself, raising ERROR 1442.

If you need to mutate the triggering row itself, do it in a BEFORE trigger by assigning to NEW — that does not re-fire.

### Q9. [Medium] When would you prefer a column default (DEFAULT CURRENT_TIMESTAMP) over a BEFORE INSERT trigger?

*Hint:* Think simplicity.

**Answer:** Always, when a simple default is enough. Column defaults are simpler, well-documented, and faster. Reach for a trigger only when the default depends on other columns or requires conditional logic.

Triggers have maintenance cost and hidden behaviour. Built-in features should win when they suffice.

### Q10. [Medium] What does this event do, assuming orders contains rows from 2024 and 2025, and today is 2026-04-16?

```
CREATE EVENT archive_old
ON SCHEDULE EVERY 1 MONTH
STARTS '2026-05-01'
DO
BEGIN
    INSERT INTO orders_archive SELECT * FROM orders
    WHERE created_at < NOW() - INTERVAL 1 YEAR;
    DELETE FROM orders
    WHERE created_at < NOW() - INTERVAL 1 YEAR;
END;
```

*Hint:* Rows older than 1 year move to archive.

**Answer:** Each month it copies rows older than one year from `orders` into `orders_archive` and deletes them from `orders`. On 2026-05-01 it archives anything from before 2025-05-01.

This is the standard archival pattern. Note: the two statements should ideally be in a transaction so a failure mid-way doesn't lose data.

### Q11. [Medium] What does SIGNAL SQLSTATE '45000' do?

*Hint:* Think user-defined errors.

**Answer:** Raises a user-defined SQL exception with SQLSTATE 45000 (the reserved class for unhandled user errors). Inside a BEFORE trigger this aborts the triggering INSERT/UPDATE/DELETE and the caller receives error 1644 with the MESSAGE_TEXT you set.

It is the MySQL mechanism for 'reject this operation with a business-rule error'. Applications catch the error by SQLSTATE or errno.

### Q12. [Medium] Why is `FOR EACH ROW` the only option in MySQL?

*Hint:* Compare to Oracle/PostgreSQL statement triggers.

**Answer:** MySQL does not support statement-level triggers — those fire once per statement regardless of rows affected. Every MySQL trigger fires once per affected row. If you need statement-level behaviour, you must emulate it using session variables or call logic from application code.

This matters for performance: a bulk UPDATE that touches a million rows fires the trigger a million times.

### Q13. [Hard] Two AFTER INSERT triggers exist on the same table. In what order do they fire, and how do you change that order?

*Hint:* Think about creation order and the FOLLOWS/PRECEDES clauses.

**Answer:** By default, MySQL fires them in the order they were created. To control the order explicitly, add `FOLLOWS other_trigger` or `PRECEDES other_trigger` when creating the second trigger. This writes an explicit ordering into information_schema.

Without FOLLOWS/PRECEDES, dropping and recreating one trigger can silently change the firing order. Be explicit in production.

### Q14. [Hard] How do triggers behave under row-based vs statement-based replication?

*Hint:* Row-based replicates row changes; statement-based replays the SQL.

**Answer:** Under row-based replication (the recommended setting), trigger side effects on the master are captured as row changes in the binary log and applied on the replica *without* re-running the trigger. Under statement-based replication, the replica re-executes the original statement, and its triggers fire independently — dangerous if any trigger is non-deterministic.

This is why MySQL forces you to declare DETERMINISTIC on functions and why row-based replication is the modern default.

### Q15. [Hard] Your event runs a 2-hour job every hour. What happens?

*Hint:* Think overlap.

**Answer:** By default MySQL will not queue overlapping invocations — if the previous run is still executing when the next fire time comes, the new invocation is skipped silently. You can confirm by inspecting `information_schema.EVENTS.LAST_EXECUTED`. In practice, either make the job idempotent, run it less often, or use `ON COMPLETION PRESERVE` and redesign.

The event scheduler uses a single worker per event. Long-running events can fall behind schedule. Monitor LAST_EXECUTED and alert when it lags.

### Q16. [Hard] A junior dev wants to put 'send welcome email' logic in an AFTER INSERT trigger on users. What do you tell them?

*Hint:* Think about transactionality and external side effects.

**Answer:** Don't. Triggers run inside the INSERT transaction. Email is an external side effect — if the trigger succeeds but the transaction later rolls back, you've emailed someone who was never created. The right pattern is to INSERT a row into a `notifications_outbox` table from the trigger; a separate worker reads the outbox and sends emails. The outbox insert is rolled back if the transaction fails.

The 'transactional outbox' pattern. External services must never be called from inside a DB transaction — only after commit.

### Q17. [Hard] How can you inspect the last execution time of an event?

*Hint:* Information schema.

**Answer:** `SELECT EVENT_NAME, LAST_EXECUTED, STATUS FROM information_schema.EVENTS WHERE EVENT_SCHEMA = 'shop';`. The column LAST_EXECUTED gives the last fire time (NULL if never executed).

Combined with a monitoring query that alerts when LAST_EXECUTED is older than expected, this is the minimal viable event monitoring setup inside MySQL.

## Mixed Questions

### Q1. [Easy] If `stats.n` starts at 0 and

```
CREATE TRIGGER bump AFTER INSERT ON t
FOR EACH ROW UPDATE stats SET n = n + 1;
```

and we run `INSERT INTO t VALUES (1);` then `INSERT INTO t VALUES (2),(3),(4);`, what is n?

*Hint:* One row + three rows.

**Answer:** `4`

The first INSERT fires the trigger once. The second INSERT inserts three rows, firing the trigger three times. 0 + 1 + 3 = 4.

### Q2. [Easy] List three INSERT/UPDATE/DELETE trigger events that can have a BEFORE variant.

*Hint:* All of them can.

**Answer:** BEFORE INSERT, BEFORE UPDATE, BEFORE DELETE. (Similarly for AFTER.) Six combinations total per table.

MySQL supports all six: each of INSERT, UPDATE, DELETE can have a BEFORE and an AFTER trigger.

### Q3. [Medium] What does this return?

```
CREATE TRIGGER t_trg BEFORE INSERT ON t
FOR EACH ROW SET NEW.x = NEW.x * 2;

INSERT INTO t(x) VALUES (5);
SELECT x FROM t;
```

*Hint:* The trigger doubles x.

**Answer:** `10`

The BEFORE trigger multiplies NEW.x by 2 before the row is written, so the stored value is 10.

### Q4. [Medium] Why is the transactional outbox pattern better than sending emails directly from an AFTER INSERT trigger?

*Hint:* Think about rollback.

**Answer:** Triggers run inside the transaction. If the surrounding transaction rolls back after the trigger fired, a direct email has already been sent — you cannot un-email someone. The outbox row, however, is rolled back with the rest of the transaction, keeping data and side effects in lockstep. A separate worker reads committed outbox rows and sends mail.

This pattern is the dominant production approach for reliable event emission from transactional systems.

### Q5. [Medium] What does `SHOW TRIGGERS FROM shop LIKE 'emp%'` return?

*Hint:* Filter by table name.

**Answer:** All triggers in database `shop` whose table name matches the LIKE pattern 'emp%' — e.g. triggers on `employees` and `employee_salaries`. Each row shows Trigger, Event, Table, Statement, Timing (BEFORE/AFTER), Created, and more.

LIKE filters by table name, not by trigger name. To filter by trigger name, query information_schema.TRIGGERS directly.

### Q6. [Medium] Give one reason to prefer an event over cron and one reason to prefer cron.

*Hint:* Think location and monitoring.

**Answer:** Prefer events when the task is entirely database-internal and simple (nightly DELETE of old rows) — no extra infrastructure. Prefer cron (or Airflow) when you need robust retries, alerting on failure, orchestration across multiple databases, or logs outside the MySQL error log.

Events are low-ops. External schedulers are high-ops but give you real observability.

### Q7. [Medium] After this DELETE, how many rows in history?

```
CREATE TRIGGER t AFTER DELETE ON orders
FOR EACH ROW INSERT INTO orders_history VALUES (OLD.id, OLD.total);

-- orders has 5 rows: ids 1..5
DELETE FROM orders WHERE id > 2;
```

*Hint:* Rows 3, 4, 5 are deleted.

**Answer:** `3`

DELETE removes 3 rows (ids 3, 4, 5). The trigger fires once per deleted row, copying each into orders_history.

### Q8. [Hard] How do you make an event run exactly once and then disappear?

*Hint:* AT + ON COMPLETION.

**Answer:** `CREATE EVENT one_off ON SCHEDULE AT '2026-05-01 02:00:00' ON COMPLETION NOT PRESERVE DO ...;` AT fires once at the specific time. ON COMPLETION NOT PRESERVE (the default) drops the event after completion. Use ON COMPLETION PRESERVE if you want it to remain in a COMPLETED state for audit.

Useful for migrations scheduled to run during a maintenance window.

### Q9. [Hard] You have triggers log_ins (inserted date) and verify_ins (validation). Which should fire first, and how do you enforce it?

*Hint:* Validate before logging.

**Answer:** `verify_ins` must fire first — you do not want to log rows that will be rejected. Make verify_ins a BEFORE INSERT trigger (it raises SIGNAL on invalid rows) and log_ins an AFTER INSERT trigger. If both must be AFTER INSERT, use the FOLLOWS clause: `CREATE TRIGGER log_ins AFTER INSERT ON t FOR EACH ROW FOLLOWS verify_ins ...`.

BEFORE always runs before AFTER. Within the same timing, use FOLLOWS/PRECEDES for explicit ordering.

### Q10. [Hard] What happens here?

```
CREATE TRIGGER strict_balance BEFORE UPDATE ON accounts
FOR EACH ROW
BEGIN
    IF NEW.balance < 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Negative balance';
    END IF;
END;

-- accounts: (101, 500)
UPDATE accounts SET balance = balance - 600 WHERE id = 101;
```

*Hint:* NEW.balance would be -100.

**Answer:** The UPDATE is rejected with `ERROR 1644 (45000): Negative balance`. The row remains at 500.

SIGNAL in a BEFORE trigger aborts the statement. The proposed NEW row never hits the table.

### Q11. [Hard] Why is the default event behaviour NOT to queue missed runs?

*Hint:* Think about storms.

**Answer:** If the server was down for 6 hours and the event runs every minute, queuing would fire 360 invocations the moment the server came back — a stampede. MySQL's policy of "skip missed runs and continue from the next scheduled time" is safer: the job runs at the next natural tick.

If you need catch-up behaviour, store the last-processed timestamp in a table and process up to NOW() on each fire.

### Q12. [Hard] A trigger on `orders` UPDATEs `inventory`, which has its own trigger that UPDATEs `stock_alerts`. Is this cascade safe?

*Hint:* Think depth and hidden behaviour.

**Answer:** It is technically safe (no recursion on the same table) but a maintainability smell. The first developer to read the codebase will see an INSERT into orders and have no idea three tables change as a consequence. Document trigger chains explicitly, or — better — move the cascade into a stored procedure the application calls deliberately.

Triggers are powerful but invisible. The more you chain them, the harder the system is to debug.

### Q13. [Hard] ALTER EVENT rebuild_daily DISABLE; — what happens next Monday at the scheduled time?

*Hint:* Disabled events do not fire.

**Answer:** Nothing. The event remains in the database (visible in SHOW EVENTS with Status = DISABLED) but the scheduler skips it. Re-enable with `ALTER EVENT rebuild_daily ENABLE`.

DISABLE is the right knob for 'pause this for a while' during maintenance — safer than DROP + recreate.

### Q14. [Hard] Your audit trigger is slow under bulk loads. Name two optimisations.

*Hint:* Batching and narrow scope.

**Answer:** (1) Only log rows that actually changed: `IF NEW.col <> OLD.col THEN ... END IF;` — no-op UPDATEs produce no audit rows. (2) Push trigger-generated rows into a simple staging table (no indexes), and batch-move them to the main audit table from a nightly event. This trades immediate-visibility for lower write amplification.

The write-amplification problem is real: one USER UPDATE becomes one audit INSERT. Indexed audit tables can double total write cost.

### Q15. [Hard] Can you have two BEFORE INSERT triggers on the same table?

*Hint:* Yes, since MySQL 5.7.

**Answer:** Yes. Since MySQL 5.7 you can define multiple triggers with the same timing and event. Use `FOLLOWS` or `PRECEDES` to control the order in which they fire. Pre-5.7 only one trigger per timing+event was allowed.

Multiple triggers are useful when different concerns (normalisation, validation, auditing) come from different modules and you want to keep them separate.

## Multiple Choice Questions

### Q1. [Easy] What is the correct syntax prefix to begin a trigger definition?

**Answer:** B

**B is correct.** The full syntax is `CREATE TRIGGER name { BEFORE | AFTER } { INSERT | UPDATE | DELETE } ON table FOR EACH ROW body`.

### Q2. [Easy] Which references are available in a BEFORE UPDATE trigger?

**Answer:** C

**C is correct.** UPDATE triggers see both: OLD is the pre-update row, NEW is the post-update row (writable only in BEFORE).

### Q3. [Easy] Which reference exists in a DELETE trigger?

**Answer:** B

**B is correct.** DELETE has only OLD; there is no new version of a deleted row.

### Q4. [Easy] What is event_scheduler?

**Answer:** A

**A is correct.** It is the background thread that wakes up and executes events at their scheduled times. Must be ON (SET GLOBAL event_scheduler = ON).

### Q5. [Easy] Which command lists triggers in the current database?

**Answer:** B

**B is correct.** `SHOW TRIGGERS` returns name, event, table, timing, and body for each trigger. Optional LIKE filters by table name.

### Q6. [Medium] You want a trigger that rejects negative salaries. Which timing and event?

**Answer:** B

**B is correct.** You must block both INSERTs and UPDATEs that would violate the rule. BEFORE lets SIGNAL abort the statement cleanly. MySQL has no INSTEAD OF triggers.

### Q7. [Medium] How many times does a trigger fire for `UPDATE employees SET salary = salary * 1.1` on a 1000-row table?

**Answer:** C

**C is correct.** MySQL triggers are row-level. 1000 rows updated = 1000 trigger invocations.

### Q8. [Medium] What does SIGNAL SQLSTATE '45000' do in a BEFORE trigger?

**Answer:** C

**C is correct.** SQLSTATE 45000 is the reserved class for user-defined unhandled exceptions. The UPDATE/INSERT/DELETE is aborted and the caller receives error 1644.

### Q9. [Medium] Which statement about AFTER triggers is TRUE?

**Answer:** B

**B is correct.** After the row is written, NEW is immutable. Constraints are checked before AFTER triggers fire.

### Q10. [Medium] Which command drops a trigger safely?

**Answer:** B

**B is correct.** IF EXISTS makes migrations idempotent — no error if the trigger was already dropped.

### Q11. [Medium] Which schedule clause makes an event fire every day at 2 a.m. starting next Monday?

**Answer:** B

**B is correct.** `EVERY 1 DAY` is the interval; `STARTS` sets the first fire time.

### Q12. [Medium] Which clause lets an event remain after it finishes a one-off run?

**Answer:** A

**A is correct.** The default is NOT PRESERVE — the event is dropped once done. PRESERVE keeps it with Status = DISABLED for audit.

### Q13. [Hard] You have two AFTER INSERT triggers on the same table. What determines their firing order?

**Answer:** B

**B is correct.** MySQL 5.7+ uses definition order by default; FOLLOWS/PRECEDES override it for explicit control.

### Q14. [Hard] Which pattern keeps emails from being sent for rolled-back transactions?

**Answer:** B

**B is correct.** The outbox row is part of the transaction; rollback un-queues it. A separate worker emails only committed rows.

### Q15. [Hard] What happens when the event scheduler's run overlaps a previous run?

**Answer:** B

**B is correct.** MySQL does not run overlapping instances of the same event. Long-running events can fall behind — monitor LAST_EXECUTED.

### Q16. [Hard] Which is TRUE about triggers under row-based replication?

**Answer:** B

**B is correct.** Row-based replication ships the result of the trigger, not the statement. This makes non-deterministic triggers safe on replicas.

### Q17. [Hard] What is the biggest risk of putting heavy business logic in triggers?

**Answer:** B

**B is correct.** A reader of the application sees INSERT but has no idea the database also fires five triggers and updates four other tables. Name triggers clearly, document them, and push complex flows into named procedures the application calls explicitly.

## Coding Challenges

### Challenge 1. Audit Every Salary Update

**Difficulty:** Easy

Create an AFTER UPDATE trigger on `employees` that writes a row to `salary_audit(emp_id, old_salary, new_salary, changed_at)` only when salary actually changes.

**Constraints:**

- Use IF NEW.salary <> OLD.salary. Use NOW() for changed_at.

**Sample input:**

```
employees: (1,'Aarav',50000)
UPDATE employees SET salary=55000 WHERE id=1;
UPDATE employees SET name='Aarav S' WHERE id=1;
```

**Sample output:**

```
salary_audit has ONE row (from the first update). The second UPDATE did not change salary, so the trigger did not log it.
```

**Solution:**

```sql
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
```

### Challenge 2. Normalise Email on Insert

**Difficulty:** Easy

Create a BEFORE INSERT trigger on `users` that lowercases and trims the email before storing it.

**Constraints:**

- Use SET NEW.email = LOWER(TRIM(NEW.email)).

**Sample input:**

```
INSERT INTO users(email) VALUES ('  Priya@Mail.COM ');
```

**Sample output:**

```
users row has email = 'priya@mail.com'.
```

**Solution:**

```sql
DELIMITER $$
CREATE TRIGGER normalise_email
BEFORE INSERT ON users
FOR EACH ROW
SET NEW.email = LOWER(TRIM(NEW.email))$$
DELIMITER ;
```

### Challenge 3. Reject Negative Prices

**Difficulty:** Easy

Create a BEFORE INSERT and BEFORE UPDATE trigger on `products` that rejects any row with price < 0 using SIGNAL.

**Constraints:**

- Use two separate triggers (INSERT and UPDATE) with the same check, or use SIGNAL SQLSTATE '45000'.

**Sample input:**

```
INSERT INTO products(name, price) VALUES ('Pen', -5);
```

**Sample output:**

```
ERROR 1644 (45000): Price cannot be negative
```

**Solution:**

```sql
DELIMITER $$
CREATE TRIGGER no_neg_price_ins
BEFORE INSERT ON products
FOR EACH ROW
BEGIN
    IF NEW.price < 0 THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Price cannot be negative';
    END IF;
END$$

CREATE TRIGGER no_neg_price_upd
BEFORE UPDATE ON products
FOR EACH ROW
BEGIN
    IF NEW.price < 0 THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Price cannot be negative';
    END IF;
END$$
DELIMITER ;
```

### Challenge 4. Denormalised Post Count

**Difficulty:** Medium

Write three triggers on `posts` that keep `categories.post_count` accurate: AFTER INSERT (increment), AFTER DELETE (decrement), AFTER UPDATE (handle category moves).

**Constraints:**

- All three triggers. On UPDATE, only act when category_id actually changed.

**Sample input:**

```
categories: (1,'Tech',0), (2,'Food',0)
INSERT INTO posts(title, category_id) VALUES ('x',1),('y',1),('z',2);
UPDATE posts SET category_id=2 WHERE title='y';
DELETE FROM posts WHERE title='z';
```

**Sample output:**

```
categories: (1,'Tech',1), (2,'Food',1)
```

**Solution:**

```sql
DELIMITER $$
CREATE TRIGGER posts_inc AFTER INSERT ON posts
FOR EACH ROW
UPDATE categories SET post_count = post_count + 1 WHERE id = NEW.category_id$$

CREATE TRIGGER posts_dec AFTER DELETE ON posts
FOR EACH ROW
UPDATE categories SET post_count = post_count - 1 WHERE id = OLD.category_id$$

CREATE TRIGGER posts_move AFTER UPDATE ON posts
FOR EACH ROW
BEGIN
    IF NEW.category_id <> OLD.category_id THEN
        UPDATE categories SET post_count = post_count - 1 WHERE id = OLD.category_id;
        UPDATE categories SET post_count = post_count + 1 WHERE id = NEW.category_id;
    END IF;
END$$
DELIMITER ;
```

### Challenge 5. Archive-on-Delete Trigger

**Difficulty:** Medium

Write an AFTER DELETE trigger on `customers` that copies every deleted row into `customers_archive` with a `deleted_at` timestamp.

**Constraints:**

- Use OLD.* in the INSERT. Store NOW() for deleted_at.

**Sample input:**

```
customers: (1,'Aarav','a@x'), (2,'Priya','p@x')
DELETE FROM customers WHERE id=1;
```

**Sample output:**

```
customers_archive: (1,'Aarav','a@x', NOW())
```

**Solution:**

```sql
DELIMITER $$
CREATE TRIGGER archive_customer
AFTER DELETE ON customers
FOR EACH ROW
INSERT INTO customers_archive(id, name, email, deleted_at)
VALUES (OLD.id, OLD.name, OLD.email, NOW())$$
DELIMITER ;
```

### Challenge 6. Daily Soft-Delete Cleanup Event

**Difficulty:** Medium

Create an event that runs every day at 03:00 and deletes rows from `customers` where `deleted_at IS NOT NULL` and `deleted_at < NOW() - INTERVAL 30 DAY`.

**Constraints:**

- Use ON SCHEDULE EVERY 1 DAY STARTS '...'. Remember SET GLOBAL event_scheduler = ON.

**Sample input:**

```
(No input — event runs on schedule.)
```

**Sample output:**

```
After many days, customers soft-deleted more than 30 days ago are physically removed.
```

**Solution:**

```sql
SET GLOBAL event_scheduler = ON;

CREATE EVENT cleanup_soft_deleted
ON SCHEDULE EVERY 1 DAY
STARTS '2026-04-17 03:00:00'
COMMENT 'Remove soft-deleted customers older than 30 days'
DO
    DELETE FROM customers
    WHERE deleted_at IS NOT NULL
      AND deleted_at < NOW() - INTERVAL 30 DAY;
```

### Challenge 7. Monthly Archival Event

**Difficulty:** Hard

Create an event that runs on the 1st of every month at 01:00 to move rows from `orders` older than 12 months into `orders_archive`, then delete them from `orders`. Wrap both statements in a transaction so either both succeed or both roll back.

**Constraints:**

- Use EVERY 1 MONTH. Use START TRANSACTION / COMMIT inside a procedure called by the event.

**Sample input:**

```
orders has entries from 2024-01-01 to now.
```

**Sample output:**

```
Each month, 12-month-old rows move to orders_archive.
```

**Solution:**

```sql
DELIMITER $$
CREATE PROCEDURE archive_old_orders()
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION BEGIN ROLLBACK; RESIGNAL; END;

    START TRANSACTION;
    INSERT INTO orders_archive
    SELECT * FROM orders
    WHERE created_at < NOW() - INTERVAL 12 MONTH;

    DELETE FROM orders
    WHERE created_at < NOW() - INTERVAL 12 MONTH;
    COMMIT;
END$$
DELIMITER ;

SET GLOBAL event_scheduler = ON;

CREATE EVENT monthly_archive
ON SCHEDULE EVERY 1 MONTH
STARTS '2026-05-01 01:00:00'
DO CALL archive_old_orders();
```

### Challenge 8. Guard a Locked Invoice

**Difficulty:** Hard

Write a BEFORE UPDATE trigger on `invoices` that forbids any change to `amount` once `status = 'LOCKED'`. Allow status transitions (LOCKED -> PAID) but reject amount edits with a clear error.

**Constraints:**

- Compare OLD.status and OLD.amount vs NEW.amount.

**Sample input:**

```
invoices: (1001, 5000, 'LOCKED')
UPDATE invoices SET amount=6000 WHERE id=1001;     -- should fail
UPDATE invoices SET status='PAID' WHERE id=1001;   -- should pass
```

**Sample output:**

```
First UPDATE: ERROR 1644 (45000): Cannot change amount on a LOCKED invoice.
Second UPDATE: Query OK, 1 row affected.
```

**Solution:**

```sql
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
```

---

*Notes: https://learn.modernagecoders.com/resources/sql/triggers-and-events/*
