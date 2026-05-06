---
title: "Transactions and ACID in MySQL - START TRANSACTION, COMMIT, ROLLBACK, Isolation Levels, Deadlocks | Modern Age Coders"
description: "Master database transactions and ACID properties in MySQL. Learn START TRANSACTION, COMMIT, ROLLBACK, SAVEPOINT, the bank-transfer example, ACID (Atomicity, Consistency, Isolation, Durability), isolation levels (READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE), dirty reads, non-repeatable reads, phantom reads, shared and exclusive locks, deadlocks, SELECT ... FOR UPDATE, and LOCK IN SHARE MODE. 58+ interview-style practice questions."
slug: transactions-and-acid
canonical: https://learn.modernagecoders.com/resources/sql/transactions-and-acid
category: "SQL"
keywords: ["sql transactions", "mysql acid", "isolation levels mysql", "dirty read non-repeatable phantom", "deadlock mysql", "select for update", "lock in share mode", "repeatable read", "serializable", "savepoint"]
---
# Transactions and ACID Properties

**Difficulty:** Advanced  
**Reading time:** 55 min  
**Chapter:** 23  
**Practice questions:** 57

## What Is a Transaction?

A **transaction** is a group of SQL statements that the database treats as one indivisible unit. Either every statement in the group succeeds and the changes become permanent, or none of them do and the database is rolled back to the state it was in before the transaction started. There is no middle ground — no "half-transferred" money, no "partial" order with missing line items.

```
START TRANSACTION;
    UPDATE accounts SET balance = balance - 1500 WHERE id = 101;  -- debit Aarav
    UPDATE accounts SET balance = balance + 1500 WHERE id = 102;  -- credit Priya
COMMIT;
```

If the server crashes between the two UPDATEs, or if the second UPDATE fails because the account is locked, `ROLLBACK` undoes everything. Aarav's money does not disappear. This guarantee is what makes databases safe for money, inventory, appointments — anything where intermediate states would be a disaster.

Transactions are governed by four properties remembered by the acronym **ACID**: *Atomicity*, *Consistency*, *Isolation*, *Durability*. The rest of this chapter unpacks each property, shows the problems that arise when isolation is weakened, and explains how MySQL uses locks and versioning to give you a consistent view of the data even when thousands of transactions run at the same time.

## Why Transactions Matter

### 1. The Bank Transfer Problem

Aarav transfers Rs. 1500 to Priya. In the database this is two statements: debit Aarav, credit Priya. If the power fails after the debit but before the credit, Rs. 1500 has vanished. Transactions guarantee this cannot happen — both UPDATEs commit together or neither does.

### 2. Multiple Users, One Database

An e-commerce site has 10,000 users browsing at once. Two of them try to book the last seat on a flight. Without transactions and proper locking, both bookings could succeed and the airline would have to bump someone at the gate. Transactions (together with locking and isolation) ensure that "check availability + reserve" is one step, not two.

### 3. Recovering From Partial Failure

An ETL job inserts 10,000 rows from a CSV. Row 5,432 has a NULL where NOT NULL is required. Without a transaction, rows 1..5,431 are in the database and rows 5,432..10,000 are not. Restarting the job double-inserts rows. Wrap the job in a transaction and an error on row 5,432 rolls all 10,000 rows back — you fix the bad row and retry cleanly.

### 4. Cross-Table Consistency

An order has a row in `orders` and five rows in `order_items`. If the `orders` row commits and the `order_items` rows don't, the order appears empty. A transaction around the multi-table INSERT keeps the two tables consistent — either the complete order is visible or none of it is.

### 5. Concurrency Correctness at Scale

At any given moment thousands of transactions are reading and writing the same rows. ACID gives you a mental model: inside a transaction, you reason as if you are the only user. Outside the transaction, once committed, your changes are durably visible to everyone. Without this, reasoning about concurrent code becomes impossible.

## Detailed Explanation

### 1. Basic Transaction Statements

- `START TRANSACTION;` (or `BEGIN;`) begins a transaction.
- `COMMIT;` makes all changes permanent and visible to other connections.
- `ROLLBACK;` undoes every change since START TRANSACTION.
- `SAVEPOINT name;` marks a point you can roll back to without losing the whole transaction.
- `ROLLBACK TO SAVEPOINT name;` undoes changes made after the savepoint.
- `RELEASE SAVEPOINT name;` drops the savepoint.

```
START TRANSACTION;
    INSERT INTO orders(customer_id, total) VALUES (1, 500);
    SAVEPOINT before_items;
    INSERT INTO order_items(order_id, product_id, qty) VALUES (LAST_INSERT_ID(), 42, 2);
    -- Oh no, the product doesn't exist; roll back just the items
    ROLLBACK TO SAVEPOINT before_items;
    -- orders row still exists, order_items does not.
COMMIT;
```

### 2. Autocommit Mode

By default, MySQL runs in `autocommit = 1` mode. Every standalone statement is its own mini-transaction — it commits as soon as it finishes. To run multiple statements as one transaction you must either explicitly `START TRANSACTION` or turn autocommit off:

```
SELECT @@autocommit;      -- 1 by default
SET autocommit = 0;       -- now every statement is inside an implicit transaction
                          -- you must COMMIT or ROLLBACK to end it
SET autocommit = 1;       -- back to default
```

### 3. The Classic Bank Transfer

```
-- Before
-- accounts: (101,'Aarav',5000), (102,'Priya',2000)

START TRANSACTION;
    UPDATE accounts SET balance = balance - 1500 WHERE id = 101;
    -- if we crash here, rollback restores Aarav's 5000
    UPDATE accounts SET balance = balance + 1500 WHERE id = 102;
COMMIT;

-- After: (101,'Aarav',3500), (102,'Priya',3500)
```

Atomicity is non-negotiable here. Consistency is also at stake: the sum of all balances should be unchanged. A balance-check constraint plus the transaction enforces both.

### 4. ACID in Detail

#### Atomicity — "all or nothing"

Every statement inside the transaction either commits together or rolls back together. Implementation: the storage engine writes changes to a private *undo log*. On ROLLBACK it applies the undo log to return the tables to the previous state. On COMMIT it discards the undo log.

#### Consistency — "valid state to valid state"

A transaction moves the database from one consistent state to another. Constraints (NOT NULL, UNIQUE, FOREIGN KEY, CHECK) are verified at commit (or sooner). A transaction that would violate a constraint is rolled back. Consistency is partly the database's job and partly the developer's — the database enforces declared constraints; the developer is responsible for the higher-level invariants the constraints capture.

#### Isolation — "concurrent transactions don't interfere"

Two transactions running at the same time should produce the same result as if they had run one after the other. Pure isolation is expensive, so databases offer *isolation levels* — a knob to trade isolation for concurrency. More on this below.

#### Durability — "committed data survives crashes"

Once COMMIT returns, the changes are on disk (or in a way that can be recovered from disk). If the server loses power the next second, the committed data is still there after reboot. Implementation: the *redo log* (InnoDB's `ib_logfile`) is flushed to disk before COMMIT returns.

### 5. Isolation Levels

SQL defines four isolation levels, weakest to strongest:

LevelDirty ReadNon-Repeatable ReadPhantom ReadREAD UNCOMMITTEDPossiblePossiblePossibleREAD COMMITTEDPreventedPossiblePossibleREPEATABLE READ *(MySQL default)*PreventedPreventedPossible in SQL standard; prevented in InnoDBSERIALIZABLEPreventedPreventedPrevented

Each level prevents a different class of anomaly. To set the isolation level for the next transaction:

```
SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;
START TRANSACTION;
    -- ...
COMMIT;

-- Check the current level
SELECT @@transaction_isolation;
```

### 6. The Three Read Anomalies

#### Dirty Read

You read a row that another transaction has modified but not yet committed. If the other transaction rolls back, you read data that never officially existed.

```
-- T1 (READ UNCOMMITTED)         T2
START TRANSACTION;               START TRANSACTION;
SELECT balance FROM accounts     UPDATE accounts
  WHERE id = 101;                  SET balance = balance + 10000
                                   WHERE id = 101;
-- T1 sees the +10000, but T2 ROLLBACKs.
                                 ROLLBACK;
-- T1 acted on phantom data.
```

#### Non-Repeatable Read

You read the same row twice inside one transaction and get different values because another committed transaction updated it in between.

```
-- T1 (READ COMMITTED)            T2
START TRANSACTION;                START TRANSACTION;
SELECT balance FROM accounts      UPDATE accounts
  WHERE id = 101;  -- returns 5000  SET balance = 6000
                                    WHERE id = 101;
                                  COMMIT;
SELECT balance FROM accounts
  WHERE id = 101;  -- returns 6000 now, same query, different result!
```

#### Phantom Read

You run the same *range* query twice and the second run returns different rows because another transaction inserted or deleted matching rows in between.

```
-- T1 (REPEATABLE READ under SQL standard)
START TRANSACTION;
SELECT * FROM orders WHERE total > 10000;  -- 3 rows
                                           -- T2 inserts a new order(total=15000), commits
SELECT * FROM orders WHERE total > 10000;  -- 4 rows — a phantom appeared
```

InnoDB's REPEATABLE READ prevents phantoms via next-key locks (a mix of row and gap locks), so in practice you rarely see them on MySQL.

### 7. The MySQL Default: REPEATABLE READ

InnoDB's REPEATABLE READ uses *multi-version concurrency control* (MVCC). When a transaction starts, it snapshots the database. All its SELECTs see that snapshot, so non-repeatable reads are impossible. Other transactions' writes are invisible until this one commits and a new snapshot is taken.

InnoDB also uses next-key locks for writes, which prevents phantoms — stricter than the SQL standard requires. This is why MySQL can use REPEATABLE READ by default without sacrificing much performance.

### 8. Locks: Shared vs Exclusive

LockNotationAllowsBlocksShared (S)LOCK IN SHARE MODEOther S locksX locksExclusive (X)FOR UPDATENothingS and X locks

```
-- Take a shared lock: other readers OK, no one can UPDATE until we commit
START TRANSACTION;
SELECT balance FROM accounts WHERE id = 101 LOCK IN SHARE MODE;
-- ...
COMMIT;

-- Take an exclusive lock: nobody else can read or write this row until we commit
START TRANSACTION;
SELECT balance FROM accounts WHERE id = 101 FOR UPDATE;
UPDATE accounts SET balance = balance - 500 WHERE id = 101;
COMMIT;
```

Plain `UPDATE` and `DELETE` take exclusive locks automatically. Plain `SELECT` takes no lock (under REPEATABLE READ it reads the snapshot instead).

### 9. SELECT ... FOR UPDATE: The Idiom

The standard concurrent-update pattern:

```
START TRANSACTION;
    SELECT balance INTO @bal FROM accounts WHERE id = 101 FOR UPDATE;
    IF @bal >= 500 THEN
        UPDATE accounts SET balance = balance - 500 WHERE id = 101;
    END IF;
COMMIT;
```

Without FOR UPDATE, two concurrent withdrawals can both read balance = 500, both decide they can withdraw 500, and the account ends at -500. FOR UPDATE serialises the critical section: the second transaction blocks on the lock until the first commits, then reads the new balance of 0 and the IF check prevents the overdraft.

### 10. Deadlocks

A **deadlock** occurs when two transactions hold locks the other wants:

```
-- T1                        T2
START TRANSACTION;             START TRANSACTION;
UPDATE accounts                UPDATE accounts
   SET balance = balance - 100    SET balance = balance - 100
   WHERE id = 101;                WHERE id = 102;
-- T1 has X lock on 101         -- T2 has X lock on 102

UPDATE accounts                UPDATE accounts
   SET balance = balance + 100    SET balance = balance + 100
   WHERE id = 102;                WHERE id = 101;
-- waits for T2                 -- waits for T1  -- DEADLOCK
```

InnoDB detects deadlocks and aborts one transaction automatically (the one that did less work). The aborted transaction gets error 1213 and must retry.

### 11. Deadlock Avoidance Strategies

- **Access rows in a consistent order.** If every transaction locks account 101 before 102, there is no cycle.
- **Keep transactions short.** A long transaction holds locks longer, increasing deadlock probability.
- **Use lower isolation (READ COMMITTED)** where business rules allow — it takes fewer locks.
- **Catch error 1213 in the application and retry.** Exponential backoff helps avoid thundering herd.
- **Add indexes.** Locks attach to index rows; without an index, InnoDB locks more rows than necessary.

### 12. Autocommit Gotchas

```
-- Autocommit ON (default). Each statement is a transaction.
UPDATE accounts SET balance = balance - 1500 WHERE id = 101;
-- If the server crashes now, Aarav is out Rs. 1500.
UPDATE accounts SET balance = balance + 1500 WHERE id = 102;

-- Proper way: explicit transaction
START TRANSACTION;
UPDATE accounts SET balance = balance - 1500 WHERE id = 101;
UPDATE accounts SET balance = balance + 1500 WHERE id = 102;
COMMIT;
```

START TRANSACTION implicitly turns off autocommit for the duration of the transaction. You do not need to SET autocommit = 0 first.

### 13. When a Transaction Is Implicitly Committed

Many DDL statements (CREATE TABLE, ALTER TABLE, DROP TABLE, CREATE INDEX) cause an implicit COMMIT of the current transaction. This catches beginners off guard: wrapping DDL in a transaction does not give you rollback. Use DDL carefully in production — there is no "undo" for a DROP TABLE via ROLLBACK.

## Code Examples

### Bank Transfer with Explicit Transaction

```sql
CREATE TABLE accounts (
    id INT PRIMARY KEY,
    holder VARCHAR(50),
    balance DECIMAL(10,2) NOT NULL CHECK (balance >= 0)
);

INSERT INTO accounts VALUES
(101, 'Aarav', 5000.00),
(102, 'Priya', 2000.00);

START TRANSACTION;
    UPDATE accounts SET balance = balance - 1500 WHERE id = 101;
    UPDATE accounts SET balance = balance + 1500 WHERE id = 102;
COMMIT;

SELECT * FROM accounts;
```

The two UPDATEs run inside one transaction. A crash, an error, or a ROLLBACK between them leaves both balances unchanged. A successful COMMIT makes both changes durably visible. The CHECK constraint (balance >= 0) adds a consistency guarantee: even the transaction cannot end with a negative balance.

**Output:**

```
+-----+--------+---------+
| id  | holder | balance |
+-----+--------+---------+
| 101 | Aarav  | 3500.00 |
| 102 | Priya  | 3500.00 |
+-----+--------+---------+
```

### Rollback on Error

```sql
CREATE TABLE inventory (
    product_id INT PRIMARY KEY,
    name VARCHAR(50),
    stock INT NOT NULL CHECK (stock >= 0)
);

INSERT INTO inventory VALUES (1, 'Laptop', 5), (2, 'Mouse', 10);

START TRANSACTION;
    UPDATE inventory SET stock = stock - 3 WHERE product_id = 1;
    -- Second update violates the CHECK; error 3819
    UPDATE inventory SET stock = stock - 20 WHERE product_id = 2;
-- The second UPDATE fails. We must ROLLBACK.
ROLLBACK;

SELECT * FROM inventory;
```

Note that MySQL does not automatically roll back on a statement error — the transaction is still open. It is the application's job to detect the error and call ROLLBACK. Good client libraries do this in their exception handling. After ROLLBACK, both UPDATEs are undone; Laptop goes back to 5 and Mouse stays at 10.

**Output:**

```
+------------+--------+-------+
| product_id | name   | stock |
+------------+--------+-------+
|          1 | Laptop |     5 |
|          2 | Mouse  |    10 |
+------------+--------+-------+
-- After ROLLBACK: everything reverts.
```

### SAVEPOINT for Partial Rollback

```sql
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    total DECIMAL(10,2)
);

CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    product_id INT,
    qty INT
);

START TRANSACTION;
    INSERT INTO orders(customer_id, total) VALUES (7, 1500.00);
    SET @oid = LAST_INSERT_ID();

    SAVEPOINT before_items;

    INSERT INTO order_items(order_id, product_id, qty) VALUES (@oid, 42, 2);
    -- Suppose this was a wrong product. Roll back just the items.
    ROLLBACK TO SAVEPOINT before_items;

    -- Now insert the correct items
    INSERT INTO order_items(order_id, product_id, qty) VALUES (@oid, 99, 1);
COMMIT;

SELECT o.id AS order_id, o.total, i.product_id, i.qty
FROM orders o LEFT JOIN order_items i ON i.order_id = o.id;
```

SAVEPOINT lets you undo part of a transaction without losing the whole thing. Here the initial order row is kept, but the wrong item is rolled back and replaced with the correct one. ROLLBACK TO SAVEPOINT does not end the transaction; the outer transaction continues until COMMIT or ROLLBACK.

**Output:**

```
+----------+---------+------------+-----+
| order_id | total   | product_id | qty |
+----------+---------+------------+-----+
|        1 | 1500.00 |         99 |   1 |
+----------+---------+------------+-----+
```

### Demonstrating Dirty Read (READ UNCOMMITTED)

```sql
-- Session 1
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
START TRANSACTION;
SELECT balance FROM accounts WHERE id = 101;  -- 5000

-- Session 2 (in another connection)
-- START TRANSACTION;
-- UPDATE accounts SET balance = 9999 WHERE id = 101;
-- (don't commit yet)

-- Back in Session 1
SELECT balance FROM accounts WHERE id = 101;  -- 9999 (DIRTY READ!)
-- We see uncommitted data.

-- Session 2
-- ROLLBACK;

-- Session 1 acted on a value that never officially existed.
COMMIT;
```

READ UNCOMMITTED allows a transaction to read uncommitted changes made by other transactions. If those other transactions roll back, the reader has used phantom data. This level is almost never appropriate in production — use READ COMMITTED or REPEATABLE READ instead.

**Output:**

```
-- Session 1 output:
-- First SELECT: 5000
-- Second SELECT: 9999 (dirty read from Session 2's uncommitted transaction)
-- Session 2 then rolls back; balance reverts to 5000.
-- Session 1 was momentarily reading non-existent data.
```

### SELECT ... FOR UPDATE Prevents a Race Condition

```sql
CREATE TABLE seats (
    id INT PRIMARY KEY,
    flight VARCHAR(10),
    booked_by INT NULL
);

INSERT INTO seats VALUES (1, 'AI-101', NULL);

-- Session 1 (Aarav is trying to book)
START TRANSACTION;
SELECT booked_by FROM seats WHERE id = 1 FOR UPDATE;
-- booked_by = NULL. Aarav books:
UPDATE seats SET booked_by = 1001 WHERE id = 1;
COMMIT;

-- Session 2 (Priya, started at the same moment)
START TRANSACTION;
SELECT booked_by FROM seats WHERE id = 1 FOR UPDATE;
-- Blocks until Session 1 commits.
-- Once unblocked, sees booked_by = 1001.
-- Her application code checks NULL, fails, aborts:
ROLLBACK;

SELECT * FROM seats;
```

`FOR UPDATE` takes an exclusive lock on the row. Session 2's SELECT blocks until Session 1 commits, so Session 2 sees the post-commit state (booked_by = 1001) and decides not to overwrite. Without FOR UPDATE, both sessions would read NULL simultaneously and both would book the seat. This is the canonical pattern for 'read-check-update' critical sections.

**Output:**

```
+----+--------+-----------+
| id | flight | booked_by |
+----+--------+-----------+
|  1 | AI-101 |      1001 |
+----+--------+-----------+
-- Only Aarav booked. Priya's second attempt saw it was already booked.
```

### Deadlock and Recovery

```sql
-- Session 1
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 101;
-- Holds X lock on 101

-- Session 2
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 102;
-- Holds X lock on 102

-- Session 1 tries to lock 102
UPDATE accounts SET balance = balance + 100 WHERE id = 102;  -- waits for Session 2

-- Session 2 tries to lock 101
UPDATE accounts SET balance = balance + 100 WHERE id = 101;  -- waits for Session 1
-- DEADLOCK! InnoDB picks one to kill.
-- ERROR 1213 (40001): Deadlock found when trying to get lock;
--                      try restarting transaction

-- Recovery: the losing transaction must retry
ROLLBACK;
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 102;
UPDATE accounts SET balance = balance + 100 WHERE id = 101;
COMMIT;
```

Two transactions each hold a lock the other wants — a cycle. InnoDB detects this and kills one transaction (typically the one that has done less work) with error 1213. The application must catch 1213 and retry. The fix for recurring deadlocks is to always lock accounts in a consistent order (e.g. lowest id first).

**Output:**

```
ERROR 1213 (40001): Deadlock found when trying to get lock;
try restarting transaction
-- After rollback and retry in a consistent order, the transaction succeeds.
```

### Setting and Inspecting the Isolation Level

```sql
-- Check current level
SELECT @@transaction_isolation;
-- 'REPEATABLE-READ'

-- Change for the current session
SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- Or only for the next transaction
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
START TRANSACTION;
    -- queries run under SERIALIZABLE here
COMMIT;

-- Back to default REPEATABLE READ
SET SESSION TRANSACTION ISOLATION LEVEL REPEATABLE READ;

-- Global default (requires SUPER privilege, affects new connections)
SET GLOBAL TRANSACTION ISOLATION LEVEL READ COMMITTED;
```

Isolation level is a per-connection setting. `SET SESSION` affects every transaction in this connection. `SET TRANSACTION` (without SESSION) affects only the next transaction. `SET GLOBAL` changes the server-wide default for new connections.

**Output:**

```
+-------------------------+
| @@transaction_isolation |
+-------------------------+
| REPEATABLE-READ         |
+-------------------------+
```

## Common Mistakes

### Assuming Errors Auto-Rollback

**Wrong:**

```
START TRANSACTION;
UPDATE accounts SET balance = balance - 500 WHERE id = 101;
UPDATE accounts SET balance = balance + 500 WHERE id = 999;  -- id does not exist
-- Assumes MySQL rolled back. It did not.
COMMIT;  -- The first UPDATE is committed!
```

No SQL error, but the money has disappeared. Aarav was debited 500; no one was credited.

**Correct:**

```
-- Check rows-affected after each statement, or use a stored procedure with a handler
DELIMITER $$
CREATE PROCEDURE safe_transfer(IN f INT, IN t INT, IN amt DECIMAL(10,2))
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN ROLLBACK; RESIGNAL; END;

    START TRANSACTION;
        UPDATE accounts SET balance = balance - amt WHERE id = f;
        IF ROW_COUNT() = 0 THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Source not found';
        END IF;
        UPDATE accounts SET balance = balance + amt WHERE id = t;
        IF ROW_COUNT() = 0 THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Destination not found';
        END IF;
    COMMIT;
END$$
DELIMITER ;
```

A statement-level error (constraint violation, syntax error) does *not* auto-rollback the transaction in MySQL. Your application must notice the error and explicitly ROLLBACK. The corrected version uses an EXIT handler and ROW_COUNT() checks to catch both errors and "no rows affected" anomalies.

### Forgetting FOR UPDATE in a Read-Modify-Write

**Wrong:**

```
-- Two withdrawals run concurrently
-- Session 1
START TRANSACTION;
SELECT balance FROM accounts WHERE id = 101;  -- 500
-- decide: 500 >= 300, OK to withdraw
UPDATE accounts SET balance = balance - 300 WHERE id = 101;
COMMIT;

-- Session 2 (runs simultaneously)
START TRANSACTION;
SELECT balance FROM accounts WHERE id = 101;  -- still 500 (MVCC snapshot or timing)
UPDATE accounts SET balance = balance - 300 WHERE id = 101;
-- Final balance: -100! Overdraft.
COMMIT;
```

No error — but the business rule (no overdraft) is violated.

**Correct:**

```
-- Session 1 and Session 2 both:
START TRANSACTION;
SELECT balance FROM accounts WHERE id = 101 FOR UPDATE;
-- exclusive lock: the second session blocks here until the first commits
IF balance >= 300 THEN
    UPDATE accounts SET balance = balance - 300 WHERE id = 101;
END IF;
COMMIT;
```

Plain SELECT under MVCC reads a consistent snapshot but takes no lock. Two sessions see the same balance, both decide to withdraw, and the write amplifies into an overdraft. `FOR UPDATE` forces serialised access to that row for the duration of the transaction.

### Long-Running Transactions Starving Others

**Wrong:**

```
START TRANSACTION;
-- app fetches user data (200ms)
-- app calls external API (5s)  <-- DO NOT DO THIS
-- app finally runs UPDATEs
COMMIT;
```

No error, but every row touched by this transaction is locked for 5+ seconds, blocking every other transaction that needs those rows. Throughput collapses.

**Correct:**

```
-- Call external APIs OUTSIDE the transaction
-- app calls external API (5s)
-- START TRANSACTION only once we have the data
START TRANSACTION;
-- short, local SQL operations
COMMIT;
```

A transaction holds locks from its first modifying statement until COMMIT or ROLLBACK. Anything done inside a transaction should be cheap SQL. Never make network calls to external systems inside a transaction — you are turning every external latency spike into a database outage.

### Wrapping DDL in a Transaction Expecting Rollback

**Wrong:**

```
START TRANSACTION;
CREATE TABLE tmp (id INT);
INSERT INTO tmp VALUES (1), (2), (3);
ROLLBACK;
-- Expecting tmp to disappear. It doesn't. The INSERTs are rolled back,
-- but CREATE TABLE caused an implicit COMMIT, so the table remains
-- (and so would the INSERTs if they ran after the CREATE).
```

No error — but the DDL is not rolled back. In MySQL, DDL statements cause implicit commits.

**Correct:**

```
-- Option 1: don't expect rollback from DDL; drop manually
DROP TABLE IF EXISTS tmp;
CREATE TABLE tmp (id INT);

-- Option 2: use a schema-only dev database and blow it away on failure
-- Option 3: MySQL 8.0 atomic DDL only covers table-creation rollback for
--           some storage engines; still, don't rely on it for migration safety
```

CREATE, ALTER, DROP, RENAME, TRUNCATE all cause implicit COMMITs in MySQL. ROLLBACK after DDL undoes nothing about the DDL. Treat DDL as permanent — plan migrations with reversible steps rather than trusting rollback.

### Not Retrying on Deadlock

**Wrong:**

```
try:
    cursor.execute('START TRANSACTION')
    cursor.execute('UPDATE ...')
    cursor.execute('UPDATE ...')
    cursor.execute('COMMIT')
except Exception as e:
    logger.error(f'Failed: {e}')   # deadlock errors are logged but not retried
    raise
```

ERROR 1213 (40001): Deadlock found when trying to get lock; try restarting transaction. Under contention, you will see these fairly often in correctly-written systems.

**Correct:**

```
for attempt in range(3):
    try:
        cursor.execute('START TRANSACTION')
        cursor.execute('UPDATE ...')
        cursor.execute('UPDATE ...')
        cursor.execute('COMMIT')
        break
    except DeadlockError:
        cursor.execute('ROLLBACK')
        time.sleep(0.01 * (2 ** attempt))  # exponential backoff
else:
    raise RuntimeError('Gave up after 3 deadlock retries')
```

Deadlocks are not bugs in the application — they are a fact of concurrent database life. The correct response is to catch error 1213 (40001), ROLLBACK, back off briefly, and retry. Your ORM may handle this; if it does not, wrap write transactions in a retry loop.

## Summary

- A transaction is a group of SQL statements treated as one atomic unit: all commit together or none do. START TRANSACTION begins one, COMMIT makes changes permanent, ROLLBACK undoes them.
- ACID: Atomicity (all or nothing), Consistency (constraints preserved), Isolation (concurrent transactions don't see each other's partial work), Durability (committed data survives crashes because it is in the redo log on disk).
- MySQL runs with autocommit = 1 by default — every standalone statement is its own transaction. Call START TRANSACTION to group statements. SET autocommit = 0 makes autocommit off for the connection.
- SAVEPOINT name; marks a rollback target inside a transaction. ROLLBACK TO SAVEPOINT name; undoes everything since that savepoint without ending the transaction. Useful for long workflows that branch and unwind.
- Four isolation levels, from weakest to strongest: READ UNCOMMITTED (allows dirty reads), READ COMMITTED (prevents dirty but allows non-repeatable reads), REPEATABLE READ (MySQL default; prevents non-repeatable reads, InnoDB also prevents phantoms), SERIALIZABLE (treats reads like LOCK IN SHARE MODE, prevents all anomalies).
- Dirty read: reading uncommitted data from another transaction. Non-repeatable read: same row returns different values inside one transaction. Phantom read: same range returns different rows inside one transaction.
- InnoDB's REPEATABLE READ uses MVCC snapshots — every SELECT inside a transaction sees the database as of transaction start. Other transactions' writes are invisible until this one commits. That is why REPEATABLE READ is cheap in MySQL.
- SELECT ... FOR UPDATE takes an exclusive (X) lock on the row until COMMIT. Use it for any read-modify-write pattern to prevent lost updates. SELECT ... LOCK IN SHARE MODE takes a shared (S) lock — other readers OK, no writers.
- A deadlock is a cycle of lock waits. InnoDB detects deadlocks and aborts one transaction with error 1213 (SQLSTATE 40001). Always catch this error in application code and retry the transaction.
- Avoid deadlocks by: accessing rows in a consistent order, keeping transactions short, not making network calls inside transactions, adding indexes (locks attach to index rows, so better indexes = fewer rows locked), and using READ COMMITTED where your business rules permit.

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/transactions-and-acid/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/transactions-and-acid/practice/*
