---
title: "Practice: Transactions and ACID Properties"
description: "57 practice problems for Transactions and ACID Properties in SQL"
slug: transactions-and-acid-practice
canonical: https://learn.modernagecoders.com/resources/sql/transactions-and-acid/practice
category: "SQL"
---
# Practice: Transactions and ACID Properties

**Total questions:** 57

## Topic-Specific Questions

### Q1. [Easy] What does the A in ACID stand for, and what does it guarantee?

*Hint:* Think all-or-nothing.

**Answer:** Atomicity. Every statement inside a transaction succeeds together or none of them do. A partial completion is impossible — on ROLLBACK or crash, the entire transaction is undone.

Atomicity is implemented via the undo log: changes are kept in a rollback buffer until COMMIT, which discards the undo; ROLLBACK applies it in reverse.

### Q2. [Easy] Which statement begins a transaction in MySQL?

*Hint:* Two equivalent keywords.

**Answer:** `START TRANSACTION;` (preferred) or `BEGIN;`. Both are equivalent in MySQL. They implicitly turn off autocommit for the duration of the transaction.

BEGIN is older SQL-89 syntax; START TRANSACTION is the modern standard.

### Q3. [Easy] What is the final balance?

```
-- starts: 1000
START TRANSACTION;
UPDATE accounts SET balance = balance + 200 WHERE id = 1;
UPDATE accounts SET balance = balance - 50 WHERE id = 1;
ROLLBACK;
SELECT balance FROM accounts WHERE id = 1;
```

*Hint:* ROLLBACK undoes both UPDATEs.

**Answer:** `1000`

ROLLBACK undoes every change since START TRANSACTION. The balance returns to its pre-transaction value of 1000.

### Q4. [Easy] What is MySQL's default isolation level?

*Hint:* Four words.

**Answer:** `REPEATABLE READ`. Unlike some databases (PostgreSQL defaults to READ COMMITTED), MySQL/InnoDB chose REPEATABLE READ as its default because MVCC makes it cheap and it prevents most common anomalies.

InnoDB's REPEATABLE READ also uses next-key locking, which in practice prevents phantom reads — stricter than the SQL standard requires.

### Q5. [Easy] What is a dirty read?

*Hint:* Think 'data that doesn't officially exist yet'.

**Answer:** Reading a row that has been modified by another transaction that has not yet committed. If the writer then ROLLBACKs, the reader has seen data that never officially existed. Only READ UNCOMMITTED permits dirty reads.

Almost no production system uses READ UNCOMMITTED. It exists mainly as an academic example of the weakest level.

### Q6. [Easy] What does COMMIT do?

*Hint:* Two guarantees: visibility and durability.

**Answer:** Makes all changes inside the transaction (a) visible to other transactions and (b) durably written to the redo log on disk, so they survive a crash. After COMMIT, ROLLBACK cannot undo them.

InnoDB uses a write-ahead log: the redo log is flushed to disk before COMMIT returns. Data pages may be updated lazily in the background, but the log is authoritative.

### Q7. [Medium] Final balance?

```
START TRANSACTION;
UPDATE accounts SET balance = balance + 100 WHERE id = 1;  -- 1000 -> 1100
SAVEPOINT p1;
UPDATE accounts SET balance = balance + 200 WHERE id = 1;  -- 1100 -> 1300
ROLLBACK TO SAVEPOINT p1;
COMMIT;
```

*Hint:* Roll back to the savepoint, then commit.

**Answer:** `1100`

ROLLBACK TO SAVEPOINT p1 undoes the second UPDATE but keeps the first one. COMMIT then persists the state as of the savepoint.

### Q8. [Medium] Which isolation level prevents dirty reads but still allows non-repeatable reads?

*Hint:* Read only committed data, but another transaction can commit mid-way through yours.

**Answer:** `READ COMMITTED`.

READ COMMITTED reads the latest committed snapshot on each statement. So if another transaction commits between two SELECTs in yours, the second SELECT sees different data — that is a non-repeatable read.

### Q9. [Medium] What does SELECT ... FOR UPDATE do?

*Hint:* Acquires an exclusive lock.

**Answer:** Acquires an exclusive (X) lock on the matching rows for the duration of the transaction. Other transactions that try to SELECT FOR UPDATE, LOCK IN SHARE MODE, or modify those rows block until this transaction commits or rolls back. Plain SELECTs still work (they read the MVCC snapshot).

It is the standard way to implement 'read, decide, write' critical sections safely under concurrency.

### Q10. [Medium] What is a deadlock, and how does InnoDB handle it?

*Hint:* Cycle of lock waits + detection.

**Answer:** A deadlock is a cycle in the wait-for graph: T1 waits for a lock T2 holds, T2 waits for a lock T1 holds. InnoDB's deadlock detector notices the cycle and aborts one of the transactions (the one that has done less work) with ERROR 1213 / SQLSTATE 40001. The aborted transaction must retry.

MySQL's detector runs on every lock request, so deadlocks are resolved in milliseconds. Applications must handle error 1213 gracefully with a retry loop.

### Q11. [Medium] Why does InnoDB use MVCC for REPEATABLE READ rather than taking read locks?

*Hint:* Concurrency.

**Answer:** MVCC lets readers and writers run concurrently without blocking each other. SELECT sees a snapshot of the database as of transaction start, regardless of concurrent writes. Taking read locks instead would force readers to queue behind writers and vice versa, crushing throughput.

This is why MySQL's default REPEATABLE READ is fast — reads are lock-free. Writes still need locks.

### Q12. [Medium] Is SERIALIZABLE always the right choice for safety?

*Hint:* Think cost.

**Answer:** No. SERIALIZABLE effectively upgrades every SELECT to LOCK IN SHARE MODE and blocks writers until readers commit. Under high concurrency, throughput plummets. Use SERIALIZABLE only for short, critical sections where the anomalies prevented are genuine problems.

The engineering trade-off: stronger isolation reduces throughput. Pick the weakest level that still prevents anomalies your business cares about.

### Q13. [Hard] Explain why two concurrent withdrawals without FOR UPDATE can cause an overdraft even under REPEATABLE READ.

*Hint:* Think MVCC snapshots vs write locks.

**Answer:** Each transaction's SELECT reads the MVCC snapshot taken at transaction start — both see balance = 500. Each transaction's IF check decides 500 >= 300 is OK and issues an UPDATE. UPDATE takes a write lock, so the second one waits, but once it acquires it, it just executes `balance = balance - 300` on the current (already-debited) value. Final balance: -100. REPEATABLE READ prevents the read from changing, not the arithmetic from overshooting. FOR UPDATE forces the SELECT itself to lock, serialising the whole critical section.

This is the 'lost update / write skew' class of anomaly. It is not prevented by REPEATABLE READ — only by explicit row locks (FOR UPDATE) or SERIALIZABLE.

### Q14. [Hard] Why must DDL statements be treated as permanent in MySQL transactions?

*Hint:* Implicit commits.

**Answer:** Statements like CREATE TABLE, ALTER TABLE, DROP TABLE, TRUNCATE, and RENAME cause an implicit COMMIT of the current transaction. A subsequent ROLLBACK cannot undo the DDL (the table is still created/dropped/altered). This is a MySQL-specific behaviour — some databases (PostgreSQL) have transactional DDL. Plan migrations accordingly.

MySQL 8.0 introduced 'atomic DDL' for some storage engines and some statements, but you should still not rely on it for production migrations.

### Q15. [Hard] How does adding an index reduce lock contention?

*Hint:* Locks attach to what the engine scans.

**Answer:** InnoDB locks the index rows it reads to enforce isolation. Without an index on the WHERE column, a statement scans (and thus locks) far more rows than it needs — potentially the whole table. With an index, only the matching index entries are locked. Better indexes mean less locking, fewer deadlocks, and higher concurrency.

This is why advice to 'add the right indexes' is not just about query speed — it is also about concurrency safety.

### Q16. [Hard] Describe the 'transactional outbox' pattern and when to use it.

*Hint:* Reliable event emission from transactional systems.

**Answer:** Instead of calling an external system (email, message queue, webhook) from inside a DB transaction, INSERT a row into an `outbox` table as part of the transaction. A separate background worker reads committed outbox rows and dispatches them, marking them sent. If the transaction rolls back, the outbox row is rolled back too, so no message is emitted for a cancelled transaction. If the worker crashes, unprocessed rows remain and are retried.

It avoids the two-phase commit problem between DB and message broker. Used by Kafka-based microservices, Stripe-style payment systems, etc.

### Q17. [Hard] A long-running SELECT inside a transaction holds a snapshot for 10 minutes. What is the downside on a busy server?

*Hint:* Undo log growth.

**Answer:** InnoDB must keep old versions of every row modified during those 10 minutes, in case the long-running transaction reads them. The undo log (rollback segment) grows proportionally, filling disk and slowing every other transaction. This is the 'history list length' problem. Kill long-running read transactions with `KILL` or split them into smaller chunks.

Monitor with `SHOW ENGINE INNODB STATUS` and look for 'History list length'. Anything over a few hundred thousand is a red flag.

## Mixed Questions

### Q1. [Easy] What does this return?

```
-- balance starts at 100
START TRANSACTION;
UPDATE t SET balance = 500 WHERE id = 1;
ROLLBACK;
SELECT balance FROM t WHERE id = 1;
```

*Hint:* Rollback undoes the update.

**Answer:** `100`

ROLLBACK restores pre-transaction state.

### Q2. [Easy] Is SELECT * FROM t inside a transaction blocking under MySQL REPEATABLE READ?

*Hint:* MVCC.

**Answer:** No. Plain SELECT reads the MVCC snapshot without taking any row lock, so it does not block and is not blocked by other writers.

You only block on SELECT ... FOR UPDATE, SELECT ... LOCK IN SHARE MODE, or under SERIALIZABLE.

### Q3. [Medium] What is the final value?

```
-- x starts at 10
START TRANSACTION;
UPDATE t SET x = x + 1 WHERE id = 1;  -- 11
SAVEPOINT a;
UPDATE t SET x = x + 1 WHERE id = 1;  -- 12
SAVEPOINT b;
UPDATE t SET x = x + 1 WHERE id = 1;  -- 13
ROLLBACK TO SAVEPOINT a;
COMMIT;
SELECT x FROM t;
```

*Hint:* Roll back to savepoint 'a' removes changes after it.

**Answer:** `11`

ROLLBACK TO SAVEPOINT a undoes the changes made after SAVEPOINT a (the two +1 UPDATEs). The x = x + 1 before the savepoint persists. Final x = 11.

### Q4. [Medium] Name three ways to cause a deadlock.

*Hint:* Cycle creation.

**Answer:** (1) Two transactions update the same rows in opposite orders (T1 locks 101 then 102; T2 locks 102 then 101). (2) Transactions taking locks from left to right on different indexes that overlap. (3) A transaction locking a gap (next-key lock) that another transaction tries to insert into. All three create cycles.

The common fix for all three: access rows/indexes in a deterministic, consistent order.

### Q5. [Medium] Under REPEATABLE READ in InnoDB, can a phantom read occur on a plain SELECT?

*Hint:* InnoDB uses snapshots for reads.

**Answer:** No. MVCC snapshots make every SELECT inside the transaction see the same set of rows regardless of concurrent INSERTs that are committed after the transaction started. For plain reads, InnoDB REPEATABLE READ is effectively serializable.

The phantom anomaly can still appear with locking reads (FOR UPDATE) if you do not also take gap locks, but InnoDB's next-key locking covers that too.

### Q6. [Medium] Two sessions run:

```
-- Session 1
START TRANSACTION;
UPDATE t SET x = 100 WHERE id = 1;
-- no commit yet

-- Session 2 (READ COMMITTED)
START TRANSACTION;
SELECT x FROM t WHERE id = 1;
```

What does Session 2's SELECT return (assuming original x = 5)?

*Hint:* READ COMMITTED reads the latest COMMITTED value.

**Answer:** `5`

Session 1's UPDATE is not yet committed. Session 2 under READ COMMITTED reads the latest committed value, which is the original 5. Session 2 waits at nothing — it reads without blocking because plain SELECT does not block on write locks under MVCC.

### Q7. [Medium] What does LOCK IN SHARE MODE guarantee?

*Hint:* Shared lock semantics.

**Answer:** Takes a shared (S) lock on the read rows for the duration of the transaction. Other transactions can also take S locks, so concurrent readers coexist. But no one can take an X lock (no UPDATE, no DELETE, no FOR UPDATE) on those rows until this transaction commits. Use it for 'read now, I will need the value to stay consistent for the rest of my transaction' scenarios.

Less common than FOR UPDATE in production code because REPEATABLE READ's snapshot usually gives you what you need without any locking.

### Q8. [Hard] A payment service sees 20 deadlocks per minute. What are the first three things to check?

*Hint:* Ordering, indexes, transaction length.

**Answer:** (1) Are transactions locking rows in a consistent order? Sort by id before updating multiple rows. (2) Are the WHERE clauses indexed? A missing index locks far more rows than necessary, amplifying contention. (3) How long are the transactions? External API calls, large scans, or slow queries inside transactions expand the lock window; shorten them.

Beyond 20 deadlocks per minute you should also enable `innodb_print_all_deadlocks` to log each deadlock's SQL and inspect the patterns in the error log.

### Q9. [Hard] What happens?

```
-- Session 1 (autocommit OFF)
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
-- forgets to COMMIT and moves on

-- Session 2
SELECT balance FROM accounts WHERE id = 1;  -- under REPEATABLE READ
```

*Hint:* Think about what Session 2 sees and whether Session 2 blocks.

**Answer:** Session 2's plain SELECT returns the old, pre-deduction balance and does not block. Session 1's uncommitted UPDATE is invisible under MVCC. But Session 1's lock is still held indefinitely, so any *write* to row id = 1 by another session will block until Session 1 commits, rolls back, or is killed.

Forgotten transactions are a classic cause of 'the database hangs' — they hold locks forever. Connection pools, idle timeouts, and `innodb_rollback_on_timeout` help but are not a substitute for careful app code.

### Q10. [Hard] Why should you never call an external API inside a transaction?

*Hint:* Locks and latency.

**Answer:** Locks are held from the first write statement until COMMIT/ROLLBACK. An external call can take seconds and has unpredictable latency. Every row your transaction has touched is locked for the duration. Under load, a 3-second API call turns into a 3-second outage for anyone else touching those rows. Perform external calls before START TRANSACTION (to get inputs) or after COMMIT (to emit events via the outbox pattern).

'Chatty' transactions that mix local DB work with remote calls are among the top-3 causes of production database outages at scale.

### Q11. [Hard] Final balances after:

```
-- accounts: 101:1000, 102:1000
SET autocommit = 0;

UPDATE accounts SET balance = balance - 300 WHERE id = 101;
-- connection drops here without COMMIT or ROLLBACK
```

*Hint:* What happens to uncommitted work when the connection closes?

**Answer:** 101:1000, 102:1000. When the client disconnects without COMMIT, MySQL rolls back any uncommitted work automatically. Aarav's balance is restored.

This is a durability/atomicity interaction: uncommitted changes never become durable, and they disappear at disconnection.

### Q12. [Hard] Explain write skew and whether REPEATABLE READ prevents it.

*Hint:* Two transactions each read a consistent snapshot and write different rows.

**Answer:** Write skew: two transactions each read a consistent view of the data, then each writes to a different row. Individually, each write is valid — but the combined effect breaks an invariant. Example: two on-call engineers. Rule: at least one must be on call. Each transaction checks 'I am the only one off-call, but there is still one other' and then both go off-call simultaneously. REPEATABLE READ does not prevent this because neither transaction modified a row the other read. Only SERIALIZABLE or explicit FOR UPDATE on the invariant rows prevents it.

Write skew is the classic reason SERIALIZABLE sometimes matters. It is rare but real — identify it by invariants that span multiple rows and involve a read-then-write pattern.

### Q13. [Hard] What is innodb_lock_wait_timeout and when does it matter?

*Hint:* Default 50 seconds.

**Answer:** The number of seconds a transaction will wait for a row lock before giving up with error 1205 (Lock wait timeout exceeded). Default is 50 seconds. For OLTP workloads, 50 seconds is far too long — it amounts to an outage from the user's perspective. Setting it to 3-5 seconds surfaces contention problems quickly and keeps p99 latency in check.

Note this is different from the deadlock detector (which triggers immediately on a cycle). Lock wait timeout triggers on long one-way waits, where no cycle exists but a lock is held for a very long time.

### Q14. [Hard] Would setting isolation level to READ COMMITTED fix a deadlock caused by next-key locks on a range UPDATE?

*Hint:* READ COMMITTED uses only row locks, no gap locks.

**Answer:** Often yes. Under READ COMMITTED, InnoDB takes only row locks (not next-key / gap locks), so range UPDATEs lock fewer slots and deadlocks caused by concurrent inserts into the gap disappear. The trade-off: you give up phantom-read prevention, which can matter for some reports. Measure before flipping the switch.

Many high-throughput shops run on READ COMMITTED for this reason. Design your reports to tolerate the weaker isolation.

### Q15. [Hard] Two ways to recover from a stuck long-running transaction.

*Hint:* Kill or wait.

**Answer:** (1) `SHOW PROCESSLIST` to find the offending thread, then `KILL ;` to terminate it and roll it back. (2) Ride out the storm and alert on lock wait timeouts; the transaction eventually commits, rolls back, or the client disconnects. Option 1 is usually the right call in production.

Also worth knowing: `SELECT * FROM information_schema.INNODB_TRX ORDER BY trx_started` shows the oldest running transactions — a goldmine for diagnosing lock contention.

## Multiple Choice Questions

### Q1. [Easy] What does ROLLBACK do?

**Answer:** B

**B is correct.** ROLLBACK returns the database to the state it was in when the transaction started.

### Q2. [Easy] Which letter in ACID stands for 'committed data survives crashes'?

**Answer:** D

**D is correct.** D = Durability. Backed by the write-ahead redo log being flushed to disk at COMMIT time.

### Q3. [Easy] Which is MySQL's default isolation level?

**Answer:** C

**C is correct.** MySQL/InnoDB defaults to REPEATABLE READ, unlike PostgreSQL which defaults to READ COMMITTED.

### Q4. [Easy] Which statement takes an exclusive lock on the matched rows?

**Answer:** C

**C is correct.** FOR UPDATE takes an X lock, blocking any other write or locking read until the transaction ends.

### Q5. [Easy] What is autocommit = 1?

**Answer:** A

**A is correct.** autocommit = 1 is MySQL's default. Each standalone statement is its own mini-transaction. START TRANSACTION suspends autocommit until COMMIT or ROLLBACK.

### Q6. [Medium] Which anomaly can still occur under READ COMMITTED?

**Answer:** B

**B is correct.** READ COMMITTED blocks dirty reads but still allows non-repeatable reads (a committed UPDATE from another transaction is visible on your next SELECT).

### Q7. [Medium] What does SAVEPOINT enable?

**Answer:** B

**B is correct.** ROLLBACK TO SAVEPOINT name undoes changes since that savepoint without ending the transaction.

### Q8. [Medium] What happens when InnoDB detects a deadlock?

**Answer:** B

**B is correct.** The deadlock detector kills the transaction that has done less work. The winner finishes, the loser must retry.

### Q9. [Medium] Which is NOT a way to reduce deadlocks?

**Answer:** D

**D is correct.** Removing primary keys hurts both performance and correctness. The other three are standard deadlock mitigations.

### Q10. [Medium] Under MySQL/InnoDB REPEATABLE READ, can phantom reads occur on plain SELECTs?

**Answer:** B

**B is correct.** Plain SELECTs read the transaction-start snapshot, so a concurrent committed INSERT does not appear.

### Q11. [Medium] What does DDL do to an open transaction in MySQL?

**Answer:** B

**B is correct.** CREATE, ALTER, DROP, TRUNCATE, and RENAME all cause implicit COMMIT. ROLLBACK after DDL cannot undo the DDL.

### Q12. [Medium] Which lock does a plain UPDATE take on the rows it modifies?

**Answer:** B

**B is correct.** UPDATE and DELETE always take X locks on the affected index rows.

### Q13. [Hard] Under REPEATABLE READ, two concurrent withdrawals without FOR UPDATE can both see balance = 500 and both succeed. Why?

**Answer:** B

**B is correct.** The classic 'lost update' pattern. FOR UPDATE is required to serialise the critical section.

### Q14. [Hard] Error 1213 (40001) means:

**Answer:** B

**B is correct.** Applications must catch 1213 and retry. Exponential backoff reduces thundering-herd retry storms.

### Q15. [Hard] Which isolation level is effectively achieved for plain reads by InnoDB REPEATABLE READ + MVCC?

**Answer:** C

**C is correct.** Plain reads under REPEATABLE READ see a consistent snapshot for the transaction, like SERIALIZABLE, but without the locking cost.

### Q16. [Hard] Which is TRUE about innodb_lock_wait_timeout?

**Answer:** B

**B is correct.** Default 50 seconds; most OLTP shops reduce it to 3-5 seconds so contention surfaces quickly.

### Q17. [Hard] Why call external APIs outside transactions?

**Answer:** B

**B is correct.** Call external services before START TRANSACTION or after COMMIT (using an outbox if you need reliability).

## Coding Challenges

### Challenge 1. Atomic Transfer

**Difficulty:** Easy

Write a transaction that moves Rs. 1500 from account 101 to account 102. Ensure both UPDATEs succeed or neither does.

**Constraints:**

- Use START TRANSACTION and COMMIT.

**Sample input:**

```
accounts: (101,'Aarav',5000), (102,'Priya',2000)
```

**Sample output:**

```
(101,3500), (102,3500)
```

**Solution:**

```sql
START TRANSACTION;
    UPDATE accounts SET balance = balance - 1500 WHERE id = 101;
    UPDATE accounts SET balance = balance + 1500 WHERE id = 102;
COMMIT;
```

### Challenge 2. Rollback on Insufficient Funds

**Difficulty:** Easy

Transfer Rs. X from account A to account B only if A has enough balance. Use FOR UPDATE and ROLLBACK if balance is insufficient.

**Constraints:**

- Use FOR UPDATE. Check balance. Use IF / ROLLBACK.

**Sample input:**

```
accounts: (101,500), (102,1000). Transfer 700 from 101 to 102.
```

**Sample output:**

```
Transaction rolled back. Balances unchanged.
```

**Solution:**

```sql
START TRANSACTION;
    SELECT balance INTO @bal FROM accounts WHERE id = 101 FOR UPDATE;
    IF @bal < 700 THEN
        ROLLBACK;
    ELSE
        UPDATE accounts SET balance = balance - 700 WHERE id = 101;
        UPDATE accounts SET balance = balance + 700 WHERE id = 102;
        COMMIT;
    END IF;
```

### Challenge 3. Savepoint Retry

**Difficulty:** Easy

Insert an order, then insert items. If any item insert fails, roll back to the savepoint after the order insert and try a different item. Finally COMMIT.

**Constraints:**

- Use SAVEPOINT / ROLLBACK TO SAVEPOINT.

**Sample input:**

```
Order total 1500, first try item_id=42 (fails), then item_id=99 (works).
```

**Sample output:**

```
orders has 1 row. order_items has 1 row with product_id=99.
```

**Solution:**

```sql
START TRANSACTION;
    INSERT INTO orders(customer_id, total) VALUES (7, 1500);
    SET @oid = LAST_INSERT_ID();
    SAVEPOINT after_order;
    -- pretend the next insert fails; handle in app, then:
    ROLLBACK TO SAVEPOINT after_order;
    INSERT INTO order_items(order_id, product_id, qty) VALUES (@oid, 99, 1);
COMMIT;
```

### Challenge 4. Prevent Double-Booking of a Seat

**Difficulty:** Medium

Two users try to book the same seat concurrently. Write the SQL (for one session) that correctly books the seat only if it is currently NULL.

**Constraints:**

- Use SELECT ... FOR UPDATE. Check NULL. UPDATE only if NULL.

**Sample input:**

```
seats: (1, 'AI-101', NULL). User 1001 tries to book.
```

**Sample output:**

```
(1, 'AI-101', 1001) after the transaction; a concurrent session sees the seat already booked and does not overwrite.
```

**Solution:**

```sql
START TRANSACTION;
    SELECT booked_by INTO @who FROM seats WHERE id = 1 FOR UPDATE;
    IF @who IS NULL THEN
        UPDATE seats SET booked_by = 1001 WHERE id = 1;
    END IF;
COMMIT;
```

### Challenge 5. Simulate a Dirty Read

**Difficulty:** Medium

Using two MySQL sessions, demonstrate that READ UNCOMMITTED allows a dirty read. Provide the exact SQL for both sessions as comments.

**Constraints:**

- Set SESSION ISOLATION LEVEL READ UNCOMMITTED in Session 1.

**Sample input:**

```
accounts: (101, 5000). Session 2 UPDATEs without committing; Session 1 SELECTs.
```

**Sample output:**

```
Session 1 sees the uncommitted value; Session 2 rolls back; Session 1 acted on phantom data.
```

**Solution:**

```sql
-- Session 1
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
START TRANSACTION;
SELECT balance FROM accounts WHERE id = 101;  -- 5000
-- <wait>
SELECT balance FROM accounts WHERE id = 101;  -- 9999 (dirty)
COMMIT;

-- Session 2
START TRANSACTION;
UPDATE accounts SET balance = 9999 WHERE id = 101;
-- do NOT commit
ROLLBACK;
-- Session 1's second SELECT had seen 9999, a value that never officially existed.
```

### Challenge 6. Isolation Level Proof

**Difficulty:** Medium

Show two sessions where Session 1 under REPEATABLE READ does NOT see Session 2's committed UPDATE. Provide the SQL.

**Constraints:**

- Session 1 must START TRANSACTION under REPEATABLE READ before Session 2 updates.

**Sample input:**

```
accounts: (101, 5000).
```

**Sample output:**

```
Session 1's second SELECT still returns 5000 even though Session 2 committed an UPDATE to 6000.
```

**Solution:**

```sql
-- Session 1
SET SESSION TRANSACTION ISOLATION LEVEL REPEATABLE READ;
START TRANSACTION;
SELECT balance FROM accounts WHERE id = 101;  -- 5000 (snapshot taken)
-- <wait for Session 2 to commit>
SELECT balance FROM accounts WHERE id = 101;  -- still 5000
COMMIT;

-- Session 2
START TRANSACTION;
UPDATE accounts SET balance = 6000 WHERE id = 101;
COMMIT;
-- Session 2's new value is invisible to Session 1 until Session 1 commits and starts a fresh transaction.
```

### Challenge 7. Retry on Deadlock

**Difficulty:** Hard

Write pseudocode (or Python) that runs a transaction with up to 3 retries on error 1213. Use exponential backoff: 10ms, 20ms, 40ms.

**Constraints:**

- Must ROLLBACK on deadlock. Must sleep between retries.

**Sample input:**

```
Under contention, occasionally the transaction errors with 1213.
```

**Sample output:**

```
Transaction succeeds on a later attempt; on 3 failures, a RuntimeError is raised.
```

**Solution:**

```sql
import time
from pymysql.err import OperationalError  # or the equivalent in your driver

def run_with_retry(conn, body_fn, max_attempts=3):
    for attempt in range(max_attempts):
        try:
            conn.begin()
            body_fn(conn)
            conn.commit()
            return
        except OperationalError as e:
            if e.args and e.args[0] == 1213:
                conn.rollback()
                time.sleep(0.01 * (2 ** attempt))
                continue
            raise
    raise RuntimeError('Gave up after %d deadlock retries' % max_attempts)
```

### Challenge 8. Consistent Lock Ordering

**Difficulty:** Hard

Rewrite this two-account transfer so that both transactions always lock the rows in the same order (lowest id first), preventing deadlocks.

**Constraints:**

- Use LEAST / GREATEST or an IF. Still debit/credit correctly.

**Sample input:**

```
-- Current naive version
START TRANSACTION;
UPDATE accounts SET balance = balance - amt WHERE id = from_id;
UPDATE accounts SET balance = balance + amt WHERE id = to_id;
COMMIT;
```

**Sample output:**

```
Both transactions always lock the smaller id first, preventing a deadlock cycle.
```

**Solution:**

```sql
-- Always SELECT ... FOR UPDATE both rows in (smaller id, larger id) order,
-- then apply the debit/credit based on which id is the source.
START TRANSACTION;
    SELECT id INTO @lo FROM accounts WHERE id = LEAST(:from_id, :to_id) FOR UPDATE;
    SELECT id INTO @hi FROM accounts WHERE id = GREATEST(:from_id, :to_id) FOR UPDATE;

    UPDATE accounts SET balance = balance - :amt WHERE id = :from_id;
    UPDATE accounts SET balance = balance + :amt WHERE id = :to_id;
COMMIT;
```

---

*Notes: https://learn.modernagecoders.com/resources/sql/transactions-and-acid/*
