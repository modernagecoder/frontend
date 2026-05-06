---
title: "Practice: Database Design and Normalization (1NF, 2NF, 3NF, BCNF)"
description: "58 practice problems for Database Design and Normalization (1NF, 2NF, 3NF, BCNF) in SQL"
slug: database-design-and-normalization-practice
canonical: https://learn.modernagecoders.com/resources/sql/database-design-and-normalization/practice
category: "SQL"
---
# Practice: Database Design and Normalization (1NF, 2NF, 3NF, BCNF)

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] Why do we normalize databases?

*Hint:* Three keywords: redundancy, anomalies, integrity.

**Answer:** To eliminate data redundancy (each fact stored once), to avoid update/insertion/deletion anomalies, and to enable referential integrity via foreign keys. A normalized schema survives schema evolution and concurrent modification far better than a denormalized one.

Normalized tables make the same fact live in exactly one place, so updates touch one row and drifting copies become impossible.

### Q2. [Easy] What makes a table violate 1NF?

*Hint:* Think about a single cell.

**Answer:** Any column that stores multiple values in a single cell — CSV strings, JSON arrays of scalars used as lookup keys, comma-separated foreign-key lists. In a 1NF table, every cell holds a single atomic value.

The usual fix is a child table: one row per value, with an FK back to the parent.

### Q3. [Easy] What is a functional dependency?

*Hint:* X determines Y.

**Answer:** A rule X -> Y saying: for every X value, there is exactly one Y value. Example: roll_no -> student_name means every roll number identifies exactly one student. Functional dependencies are the foundation of normalization theory.

The normal forms are expressed as rules about which functional dependencies can exist in a well-designed table.

### Q4. [Easy] What is an update anomaly?

*Hint:* Think about updating redundant data.

**Answer:** A situation where the same fact is stored in many places, and updating it requires changing every copy atomically. If even one copy is missed, the database contradicts itself. Eliminated by normalization — each fact lives in one row.

Insertion and deletion anomalies are the other two. Normalization eliminates all three.

### Q5. [Easy] Is this table in 1NF?

```
CREATE TABLE t (
    id INT PRIMARY KEY,
    tags VARCHAR(200)   -- 'sports,news,cricket'
);
```

*Hint:* Multiple values in one column?

**Answer:** No. The `tags` column stores multiple values, violating 1NF.

Fix: a child table tag_rows(id_fk, tag) with a composite PK.

### Q6. [Easy] What is a composite primary key?

*Hint:* More than one column.

**Answer:** A primary key that consists of two or more columns whose combined values uniquely identify a row. Typical in junction tables for N-M relationships: `enrollments(student_id, course_id)` where each pair is unique.

All of the key columns are NOT NULL. Alternative: make a surrogate id the PK and add a UNIQUE constraint on the composite.

### Q7. [Medium] What is the difference between 2NF and 3NF?

*Hint:* Partial vs transitive.

**Answer:** 2NF forbids *partial* dependencies: when the PK is composite, no non-key column may depend on only part of it. 3NF forbids *transitive* dependencies: no non-key column may depend on another non-key column. 2NF is only ever violated with composite PKs; 3NF can be violated with any PK.

Once PKs are surrogate (single-column), 2NF is automatic and 3NF is the real lifting.

### Q8. [Medium] Given `(emp_id PK, emp_name, dept_id, dept_name)`, which normal form is violated?

*Hint:* dept_name depends on dept_id, not emp_id.

**Answer:** 3NF. dept_name is transitively dependent on emp_id (emp_id -> dept_id -> dept_name). The table is in 1NF and 2NF but not 3NF. Fix: move dept_name into a departments table keyed by dept_id.

This is the most common 3NF violation: 'category' or 'group' attributes repeated on the parent entity.

### Q9. [Medium] What is a transitive dependency?

*Hint:* A -> B -> C, but C does not directly need A.

**Answer:** A dependency where a non-key column A determines another non-key column B (A -> B), and the PK determines A. So the PK determines B only through A — indirectly. 3NF requires you to break this chain by moving B into a table keyed by A.

Example: emp_id -> dept_id -> dept_name. Move dept_name into departments(id, name) so it is keyed by dept_id directly.

### Q10. [Medium] When would you denormalize?

*Hint:* Trade-off.

**Answer:** When a specific read path is hot enough that the JOIN cost dominates performance, and the write cost of keeping copies in sync is acceptable. Typical cases: dashboards, feeds, full-text search indexes, reporting summaries.

The rule of thumb: normalize first, measure, then denormalize with triggers / ETL to keep the copies consistent. Document the denormalization in a comment on the column.

### Q11. [Medium] What is the difference between a primary key and a surrogate key?

*Hint:* Natural vs invented.

**Answer:** A primary key is the column(s) that uniquely identify rows. A surrogate key is an *invented* PK (usually INT AUTO_INCREMENT or UUID) that has no business meaning. A natural key is a real-world identifier used as PK (email, ISBN). Modern practice: surrogate keys as PKs; natural keys as UNIQUE constraints.

Surrogate keys are stable (never changed by business logic) and compact (4 or 8 bytes); natural keys drift (emails change) and are often bulky.

### Q12. [Medium] What is cardinality in an ER diagram?

*Hint:* 1-1, 1-N, N-M.

**Answer:** The number of rows on each side of a relationship. 1-1: each row relates to at most one row on the other side (user <-> profile). 1-N: one row relates to many on the other (customer -> orders). N-M: many on each side (students <-> courses). Cardinality dictates how you model: FK column for 1-1 and 1-N, junction table for N-M.

Correct cardinality in the ER diagram determines correct table structure. Getting it wrong forces painful migrations later.

### Q13. [Hard] What is BCNF and how does it differ from 3NF in practice?

*Hint:* Every determinant must be a superkey.

**Answer:** BCNF requires that for every non-trivial FD X -> Y, X must be a superkey. 3NF allows a non-superkey X to determine a prime attribute (part of a candidate key). BCNF is strictly stronger but in practice coincides with 3NF for almost all schemas. It matters only when the table has multiple overlapping candidate keys.

Most real designs pass BCNF once they pass 3NF. Interview questions about BCNF usually hinge on contrived examples with overlapping candidate keys.

### Q14. [Hard] Design the minimum schema for an Instagram-like 'follows' feature. Include self-reference and the check that prevents self-following.

*Hint:* Junction on users.

**Answer:** `CREATE TABLE follows(follower_id INT, followee_id INT, followed_at DATETIME, PRIMARY KEY (follower_id, followee_id), FOREIGN KEY (follower_id) REFERENCES users(id), FOREIGN KEY (followee_id) REFERENCES users(id), CHECK (follower_id <> followee_id));`

Self-referential N-M with a composite PK. The CHECK stops users from following themselves — a classic invariant worth enforcing at the schema level.

### Q15. [Hard] Why is ON DELETE CASCADE dangerous for invoices but appropriate for comments?

*Hint:* Audit requirements vs ownership.

**Answer:** Invoices are business-critical records. Deleting a customer should not automatically delete their invoices — regulatory, tax, and audit rules demand retention. Use ON DELETE RESTRICT so deletes fail until the operator handles the invoices. Comments, on the other hand, only exist to decorate their post; deleting the post cascade-deletes comments because a comment without its post is noise.

Cascade choice is a business decision, not a technical default. Get it wrong and you lose legally required records or leave orphans forever.

### Q16. [Hard] Why is storing unit_price on order_items not a 3NF violation even though products already has a price?

*Hint:* Time.

**Answer:** Because order_items.unit_price is a *snapshot of the price at the moment of sale*. Products.price can (and will) change. If you always JOIN to products, historical orders show today's price, not the price they were sold at — bad for accounting. The duplication is not redundant: it captures a fact that would otherwise be lost.

This is the key insight: 'copy' columns that record a moment in time are first-class data, not denormalization.

### Q17. [Hard] Can a table be in 3NF but not in BCNF? Give a sketch.

*Hint:* Non-superkey determinants.

**Answer:** Yes, when the table has multiple overlapping candidate keys. Example: `(course_id, instructor) -> room` AND `(room, time_slot) -> instructor`. There are two candidate keys. A non-superkey column determines another, but because the determined column is prime (part of another CK), 3NF's exception allows it. BCNF does not — it forbids any non-superkey determinant.

Hard to construct in the wild. BCNF is mostly an exam topic; in production, 3NF is usually enough.

## Mixed Questions

### Q1. [Easy] What normal form removes repeating groups?

*Hint:* First.

**Answer:** `1NF`

Atomic values, no repeating groups.

### Q2. [Easy] Give an example of a 1-1 relationship.

*Hint:* User and profile.

**Answer:** A user has one profile; a profile belongs to one user. Model: a FK `user_id UNIQUE` on the profiles table (the UNIQUE constraint enforces the 1-1 cardinality).

Other examples: an employee and their access card, a country and its capital city.

### Q3. [Easy] Which cascade option causes child rows to be deleted along with the parent?

*Hint:* Keyword is in the name.

**Answer:** `ON DELETE CASCADE`

Use for ownership hierarchies where a child cannot exist without its parent (comment without post).

### Q4. [Medium] Is `(student_id, course_id) PK, grade` in 2NF if student_name is added as a column?

*Hint:* student_name depends on student_id alone.

**Answer:** No. student_name depends only on part of the PK (student_id), a partial dependency. Table violates 2NF. Fix: move student_name into students(id, name).

Textbook 2NF violation. Classical composite-PK scenario.

### Q5. [Medium] Why is a junction table necessary for many-to-many relationships?

*Hint:* Neither side can hold the relationship alone.

**Answer:** Because you cannot store a many-to-many relationship as a foreign key on either side: a single column cannot hold multiple foreign keys without violating 1NF. The junction table represents the relationship itself, with a row for each pair, and can carry relationship-specific attributes (grade, role, enrolled_at).

This is why students.course_id + courses.student_id does not work: you would need a collection on each side.

### Q6. [Medium] Give a real case where ON DELETE SET NULL is the right choice.

*Hint:* Child can survive parent's absence.

**Answer:** Employee.manager_id -> Employee.id with ON DELETE SET NULL. When a manager leaves, their reports remain employed — they just lose a manager until reassigned. SET NULL preserves the rows and leaves them in a recoverable state.

Requires the FK column to be NULL-able. Works well for optional parent relationships.

### Q7. [Medium] The table has PK = order_id and columns (customer_id, customer_name, shipping_city). Which normal form is violated?

*Hint:* customer_name depends on customer_id.

**Answer:** 3NF. customer_name and shipping_city depend on customer_id, which is a non-key column. This is a transitive dependency: order_id -> customer_id -> customer_name.

Fix: move customer_name and shipping_city into customers(id, name, city) and reference it via customer_id.

### Q8. [Medium] Describe when you would use a UUID PK instead of INT AUTO_INCREMENT.

*Hint:* Distributed systems.

**Answer:** When IDs must be generated by multiple servers without coordination (distributed systems, offline-first clients, merging data from several databases) or when you want IDs that are unguessable (public URLs). Trade-offs: UUIDs are 16 bytes (vs 4 for INT), slower for index scans, and not contiguous — which hurts insert performance on clustered indexes.

A good compromise is ULID or UUIDv7, which are UUID-format but time-ordered, mitigating the insert-locality problem.

### Q9. [Hard] Normalize this to 3NF: (invoice_id, customer_id, customer_name, item_id, item_name, item_price, qty).

*Hint:* Three tables minimum.

**Answer:** Four tables: customers(id, name); items(id, name, price); invoices(id, customer_id, FK to customers); invoice_items(invoice_id, item_id, qty, unit_price, PK=(invoice_id,item_id), FKs to invoices and items). Note unit_price snapshot on invoice_items — captures price at sale time.

This is a canonical exam normalization. Always keep unit_price on the line item — it is not duplication, it is historical truth.

### Q10. [Hard] Why are denormalized counts (e.g. post_count on categories) risky in distributed or replicated setups?

*Hint:* Consistency under concurrency.

**Answer:** Updates to the count race against concurrent inserts/deletes on the children. Without careful locking (or atomic counters), the count drifts. In replicated systems, the count may be computed differently on master and replica if the replica's trigger logic differs or if statement-based replication mis-orders events. Either use transactions + FOR UPDATE on the parent row, or accept eventual consistency and reconcile the count via a scheduled job.

A common pattern: keep a precise count in Redis (atomic INCR/DECR) and reconcile to the DB hourly from a ground-truth query.

### Q11. [Hard] Design a minimal WhatsApp-style chat schema: users, one-to-one chats, group chats, messages.

*Hint:* Conversations table as the unifying entity.

**Answer:** users(id, phone UNIQUE); conversations(id, type ENUM('DM','GROUP')); conversation_members(conv_id, user_id, PK=(conv_id,user_id)); messages(id, conv_id, sender_id, body, sent_at). DMs and groups are both conversations, distinguished by `type` and the count of members. Messages always belong to a conversation, not to a user pair — that keeps 1-1 and group chats symmetric.

Unifying DM and group under one conversation entity is the key insight. It avoids duplicating the message table for each chat type.

### Q12. [Hard] What is the smallest number of tables needed for an e-commerce system with users, products, categories, carts, and orders?

*Hint:* Count entities and junctions.

**Answer:** Seven: users, categories, products (FK to category), carts (FK to user), cart_items (junction: PK=(cart_id,product_id), with qty), orders (FK to user), order_items (junction: PK=(order_id,product_id), with qty and unit_price).

Carts and orders are distinct entities (cart is mutable, order is immutable). Each has its own line-item junction table.

### Q13. [Hard] Explain why 'email' should usually be a UNIQUE column, not a primary key.

*Hint:* Stability.

**Answer:** Emails change. If email is the PK, every FK that references it must be updated in sync (either manually or via ON UPDATE CASCADE), and every index that contains it must be rebuilt. The overhead is large. A surrogate PK (id) stays fixed forever; email moves to a UNIQUE constraint for uniqueness enforcement without being the anchor that other rows point to.

Apply the same reasoning to username, phone, and any other mutable identifier. PKs should be invariant; natural identifiers should be UNIQUE.

### Q14. [Hard] Does 4NF matter in practice?

*Hint:* Multi-valued dependencies are rare.

**Answer:** Rarely. 4NF eliminates multi-valued dependencies — situations where a table encodes two independent multi-valued facts about one entity (e.g. a student's courses AND their phone numbers in one table). The violations usually scream at you as '1NF with two repeating groups' and you split them into two child tables without needing the 4NF theory. In 15 years of practice, 3NF plus common sense catches almost everything.

Know 4NF for interviews; design for 3NF in production.

### Q15. [Hard] Draft a brief migration plan to move from a 2NF-violating order_items (with product_name copied) to a 3NF-compliant schema with a products table.

*Hint:* Safe rollout.

**Answer:** (1) Create products(id, name, price). (2) Backfill products from DISTINCT (product_id, product_name, product_price) in order_items_bad. (3) Add product_id FK (already present, just verify). (4) Dual-write for a week: writes hit both the old and new structure. (5) Stop using product_name/product_price columns from order_items_bad in queries; read from the JOIN. (6) Drop the columns. Do it in small reversible steps, verifying each with row-count checks and query correctness.

Real migrations are the harder part of normalization. The design changes are straightforward; coordinating with live traffic is the challenge.

### Q16. [Medium] Why is a junction table's primary key usually the pair (fk_a, fk_b) and not a separate surrogate id?

*Hint:* Think uniqueness and duplicate prevention.

**Answer:** The composite PK enforces the business rule that each (fk_a, fk_b) pair can appear at most once — you cannot enroll Aarav in DBMS twice. A surrogate id would permit duplicates unless you also added a UNIQUE constraint on the pair, which makes the surrogate redundant. The one exception is when you need a stable small integer to reference the junction row from yet another table — then add a surrogate id alongside the composite UNIQUE.

Composite PKs are the right default on junction tables. Surrogate-first is the habit of ORMs, not of good DBAs.

## Multiple Choice Questions

### Q1. [Easy] What does 1NF require?

**Answer:** B

**B is correct.** 1NF forbids lists, CSVs, or multi-valued columns. Each cell must hold one value.

### Q2. [Easy] Which form eliminates partial dependencies on composite keys?

**Answer:** B

**B is correct.** 2NF is defined specifically to eliminate partial dependencies — a concern only when the PK is composite.

### Q3. [Easy] Which form eliminates transitive dependencies?

**Answer:** C

**C is correct.** 3NF forbids non-key columns from determining other non-key columns.

### Q4. [Easy] How do you model a many-to-many relationship?

**Answer:** B

**B is correct.** The junction table represents the relationship itself and can hold relationship-specific attributes.

### Q5. [Easy] What does ON DELETE CASCADE do?

**Answer:** C

**C is correct.** Child rows are deleted when their parent is deleted. Use only for ownership hierarchies.

### Q6. [Medium] Which is TRUE about surrogate keys?

**Answer:** B

**B is correct.** Surrogate keys (INT AUTO_INCREMENT, UUID) are stable and decoupled from business data — ideal for PKs.

### Q7. [Medium] Which NF is violated by (order_id, product_id) PK + product_name?

**Answer:** B

**B is correct.** product_name depends on only part of the composite PK, a partial dependency.

### Q8. [Medium] Which NF is violated by (emp_id PK, dept_id, dept_name)?

**Answer:** C

**C is correct.** dept_name depends on dept_id, a non-key column — a transitive dependency via emp_id -> dept_id -> dept_name.

### Q9. [Medium] Which is NOT a legitimate reason to denormalize?

**Answer:** C

**C is correct.** Denormalization must be driven by measured performance, not aesthetics.

### Q10. [Medium] Which cardinality does enrollments(student_id, course_id) represent?

**Answer:** C

**C is correct.** A student enrolls in many courses; a course has many students. Junction table is the N-M pattern.

### Q11. [Medium] Why store unit_price on order_items despite products.price existing?

**Answer:** B

**B is correct.** unit_price is a historical fact, not redundant — products.price may change, but the sale's price is fixed.

### Q12. [Hard] BCNF is strictly stronger than 3NF because:

**Answer:** B

**B is correct.** 3NF allows a non-superkey to determine a prime attribute; BCNF does not.

### Q13. [Hard] Best choice for an 'invoices' FK to customers, where legal retention is required?

**Answer:** C

**C is correct.** RESTRICT blocks accidental deletes; operator must clear invoices first. Loss of invoices due to CASCADE can be a legal nightmare.

### Q14. [Hard] Why do we keep normalized design as the source of truth even when denormalized copies exist?

**Answer:** B

**B is correct.** Denormalization is a cache. When it drifts, the normalized tables are the ground truth you rebuild from.

### Q15. [Hard] Which is NOT a valid reason to prefer UUID PKs over AUTO_INCREMENT?

**Answer:** C

**C is correct.** UUIDs are worse for clustered-index insert locality. All the others are valid UUID use cases.

### Q16. [Hard] In an ER diagram, what does a 'weak entity' mean?

**Answer:** A

**A is correct.** Example: order_items (weak) depends on orders (strong) — the order_id is part of the PK.

### Q17. [Hard] What is the correct first step when asked to 'design the schema for X'?

**Answer:** B

**B is correct.** Getting entities and cardinality right on paper saves weeks of painful migrations later. DDL comes after the ER.

## Coding Challenges

### Challenge 1. Normalize a Flat Orders Table to 3NF

**Difficulty:** Easy

Given `orders_flat(order_id, customer_name, customer_city, product_name, product_price, qty)`, write the CREATE TABLEs for a 3NF schema. Include FKs.

**Constraints:**

- Use AUTO_INCREMENT PKs. Use FOREIGN KEY with appropriate cascade.

**Sample input:**

```
(No input.)
```

**Sample output:**

```
Four tables: customers, products, orders, order_items (with unit_price snapshot).
```

**Solution:**

```sql
CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    city VARCHAR(50)
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10,2)
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    qty INT NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id)   REFERENCES orders(id)   ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id)
);
```

### Challenge 2. Split a CSV Column (1NF Fix)

**Difficulty:** Easy

`students(id, name, phones VARCHAR(200))` stores CSV phones. Create a `student_phones` child table and write the INSERT ... SELECT that migrates existing data.

**Constraints:**

- Use a numbers table or a recursive CTE to split the CSV.

**Sample input:**

```
students: (1,'Aarav','9876500001,9876500002'), (2,'Priya','9876500003')
```

**Sample output:**

```
student_phones: (1,'9876500001'),(1,'9876500002'),(2,'9876500003')
```

**Solution:**

```sql
CREATE TABLE student_phones (
    student_id INT,
    phone VARCHAR(15),
    PRIMARY KEY (student_id, phone),
    FOREIGN KEY (student_id) REFERENCES students(id)
);

-- Using a recursive CTE to split on commas
INSERT INTO student_phones (student_id, phone)
WITH RECURSIVE split AS (
    SELECT id AS student_id,
           TRIM(SUBSTRING_INDEX(phones, ',', 1)) AS phone,
           IF(LOCATE(',', phones) = 0, '', SUBSTRING(phones, LOCATE(',', phones) + 1)) AS rest
    FROM students
    UNION ALL
    SELECT student_id,
           TRIM(SUBSTRING_INDEX(rest, ',', 1)),
           IF(LOCATE(',', rest) = 0, '', SUBSTRING(rest, LOCATE(',', rest) + 1))
    FROM split
    WHERE rest <> ''
)
SELECT student_id, phone FROM split WHERE phone <> '';

-- Finally, drop the CSV column
ALTER TABLE students DROP COLUMN phones;
```

### Challenge 3. Design an Instagram Schema

**Difficulty:** Medium

Design DDL for users, posts, comments, likes, and follows. Include correct cardinalities, FKs with appropriate cascades, and a CHECK preventing self-follows.

**Constraints:**

- Self-reference on follows. Likes as a junction. Comments under posts.

**Sample input:**

```
(No input.)
```

**Sample output:**

```
Five tables with correct relationships.
```

**Solution:**

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) UNIQUE NOT NULL,
    bio VARCHAR(200),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    caption TEXT,
    image_url VARCHAR(200),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    post_id BIGINT NOT NULL,
    user_id INT NOT NULL,
    body VARCHAR(500),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE likes (
    post_id BIGINT,
    user_id INT,
    liked_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (post_id, user_id),
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE follows (
    follower_id INT,
    followee_id INT,
    followed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (follower_id, followee_id),
    FOREIGN KEY (follower_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (followee_id) REFERENCES users(id) ON DELETE CASCADE,
    CHECK (follower_id <> followee_id)
);
```

### Challenge 4. N-M with Relationship Attributes

**Difficulty:** Medium

Design a junction `enrollments` between students and courses that records grade and enrolment date. Prevent duplicate enrolments.

**Constraints:**

- PK = (student_id, course_id).

**Sample input:**

```
students, courses already exist.
```

**Sample output:**

```
enrollments with composite PK and FKs.
```

**Solution:**

```sql
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    grade CHAR(2),
    enrolled_at DATE,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id)  REFERENCES courses(id)  ON DELETE CASCADE
);
```

### Challenge 5. Employee Hierarchy with SET NULL

**Difficulty:** Medium

Design an employees table with self-referencing manager_id. When a manager is deleted, reports should have manager_id cleared.

**Constraints:**

- Self-referencing FK; manager_id must be NULL-able.

**Sample input:**

```
Managers and reports exist.
```

**Sample output:**

```
DDL with correct FK and cascade.
```

**Solution:**

```sql
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    manager_id INT NULL,
    FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
);
```

### Challenge 6. Protect Business-Critical Data with RESTRICT

**Difficulty:** Medium

Design invoices FK to customers with RESTRICT so accidental customer deletes fail while invoices exist.

**Constraints:**

- Use ON DELETE RESTRICT.

**Sample input:**

```
customers and invoices tables needed.
```

**Sample output:**

```
DELETE on customer with invoices fails with FK error.
```

**Solution:**

```sql
CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100) UNIQUE
);

CREATE TABLE invoices (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    amount DECIMAL(12,2),
    issued_at DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE RESTRICT
);

-- Any accidental DELETE FROM customers WHERE id = X
-- will fail if invoices reference that customer.
```

### Challenge 7. E-commerce Schema with Carts and Orders

**Difficulty:** Hard

Design a minimum e-commerce schema: users, products, categories, carts, cart_items, orders, order_items. Include unit_price snapshot on order_items and proper cascades.

**Constraints:**

- Use surrogate PKs. Use composite PKs on junction tables. Snapshot unit_price on order_items.

**Sample input:**

```
(No input.)
```

**Sample output:**

```
Seven tables with correct relationships.
```

**Solution:**

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash CHAR(60) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category_id INT,
    price DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE carts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE cart_items (
    cart_id INT,
    product_id INT,
    qty INT NOT NULL,
    PRIMARY KEY (cart_id, product_id),
    FOREIGN KEY (cart_id)    REFERENCES carts(id)    ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'PENDING',
    placed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    qty INT NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id)   REFERENCES orders(id)   ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id)
);
```

### Challenge 8. Migration: Normalize an Existing Table

**Difficulty:** Hard

Given `employees_bad(emp_id, emp_name, dept_id, dept_name)`, write the SQL to migrate to a 3NF schema with a `departments` table, without losing data. Include the backfill and the final DROP COLUMN.

**Constraints:**

- Backfill departments from DISTINCT. Verify no orphans. Drop the redundant column last.

**Sample input:**

```
employees_bad has 100 rows with repeating dept_name.
```

**Sample output:**

```
Two tables: departments and employees (with FK). employees_bad's dept_name dropped.
```

**Solution:**

```sql
-- Step 1: create the new table
CREATE TABLE departments (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

-- Step 2: backfill from existing rows
INSERT INTO departments (id, name)
SELECT DISTINCT dept_id, dept_name
FROM employees_bad
WHERE dept_id IS NOT NULL;

-- Step 3: rename the old table (backup) and create the new clean one
RENAME TABLE employees_bad TO employees_old;

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(id)
);

-- Step 4: copy the clean data
INSERT INTO employees (emp_id, emp_name, dept_id)
SELECT emp_id, emp_name, dept_id FROM employees_old;

-- Step 5: verify counts match
SELECT COUNT(*) FROM employees_old;
SELECT COUNT(*) FROM employees;

-- Step 6: once verified in production, drop the old table
DROP TABLE employees_old;
```

---

*Notes: https://learn.modernagecoders.com/resources/sql/database-design-and-normalization/*
