---
title: "Database Design and Normalization - 1NF, 2NF, 3NF, BCNF, ER Diagrams, Schema Design | Modern Age Coders"
description: "Master database design, normalization, and ER modelling. Learn why we normalize (redundancy, update anomalies), functional dependencies, 1NF (atomic values), 2NF (no partial dependency), 3NF (no transitive dependency), BCNF, 4NF/5NF, denormalization trade-offs, ER diagrams, cardinality (1-1, 1-N, N-M), designing for e-commerce and social media, primary keys vs surrogate keys vs composite keys, and foreign key cascading (ON DELETE CASCADE/SET NULL/RESTRICT). 60+ practice questions."
slug: database-design-and-normalization
canonical: https://learn.modernagecoders.com/resources/sql/database-design-and-normalization/
category: "SQL"
keywords: ["database normalization", "1NF 2NF 3NF BCNF", "functional dependency", "ER diagram", "database design", "denormalization", "primary key vs surrogate key", "composite key", "on delete cascade", "foreign key mysql"]
---
# Database Design and Normalization (1NF, 2NF, 3NF, BCNF)

**Difficulty:** Advanced  
**Reading time:** 60 min  
**Chapter:** 24  
**Practice questions:** 58

## Database Design and Normalization: Building Schemas That Do Not Rot

**Database design** is the art of deciding what tables your application needs, what columns each table has, and how they relate. **Normalization** is the set of rules that guide this design so that the same fact is stored exactly once, update anomalies cannot occur, and the schema can evolve gracefully. The rules were formalised by Edgar Codd and Ray Boyce in the 1970s as a sequence of 'normal forms' — 1NF, 2NF, 3NF, BCNF, 4NF, 5NF — each progressively stricter.

```
-- Bad: one table, lots of repetition and hidden problems
CREATE TABLE orders_bad (
    order_id INT,
    customer_name VARCHAR(50),
    customer_city VARCHAR(50),
    product_name VARCHAR(50),
    product_price DECIMAL(10,2),
    qty INT
);
-- Aarav's city is stored once per order row.
-- The product price is repeated on every line of every order.
-- Fixing Aarav's city requires updating every one of his orders.

-- Good: normalized to 3NF
CREATE TABLE customers (id INT PK, name VARCHAR(50), city VARCHAR(50));
CREATE TABLE products  (id INT PK, name VARCHAR(50), price DECIMAL(10,2));
CREATE TABLE orders    (id INT PK, customer_id INT FK, created_at DATETIME);
CREATE TABLE order_items(
    order_id INT FK, product_id INT FK, qty INT,
    PRIMARY KEY (order_id, product_id)
);
```

The second design stores Aarav's city exactly once. A product's price lives in one row. The cost is more tables and more JOINs in queries — but no redundancy, no update anomalies, and a schema that survives five years of product changes.

Normalization is not an end in itself. Once a schema is clean, you may deliberately *denormalize* parts of it for performance — copy a customer's city onto `orders` to avoid a JOIN on the hot path. Doing denormalization first produces unmaintainable rubbish. Doing normalization first and denormalizing with purpose produces a system that scales.

## Why Normalize?

### 1. Eliminate Redundancy

In the bad `orders_bad` table, Aarav's name and city are stored in every order he has ever placed. If he has 200 orders, there are 200 copies of 'Aarav' and 'Pune'. Every byte of those 200 rows is wasted storage, and every time someone reads an order, the engine has to read it again.

### 2. Avoid Update Anomalies

Update anomalies are what happen when the same fact lives in many places and some copies are updated but others are not:

- **Update anomaly**: Aarav moves from Pune to Bengaluru. You must update his city on every one of his 200 order rows. Miss one and the database now disagrees with itself.
- **Insertion anomaly**: You want to add a new product to your catalog, but the only place products live is inside orders. You cannot add a product without pretending someone ordered it.
- **Deletion anomaly**: Priya has exactly one order. When you delete that order row, you also lose the fact that Priya was ever a customer.

All three disappear once you normalize — each fact lives in exactly one place.

### 3. Referential Integrity

Normalization pairs naturally with foreign keys. If `order_items.product_id` references `products.id`, the database refuses to create order items for products that do not exist. Consistency becomes the database's job, not the developer's.

### 4. Schema Evolution

Two years from now, the product team wants to add 'product category'. In the normalized schema, you add a column to `products` and you are done. In the denormalized mess, you add it to `orders_bad` and now every row (past and future) carries a copy of the category that has to be kept in sync.

### 5. Query Simplicity (Eventually)

Normalized schemas require more JOINs, but each JOIN is on a well-defined key. Queries are longer but deterministic. Denormalized schemas look simpler at first but are riddled with special cases ("which copy of the price do we trust?").

### 6. Knowing When to Break the Rules

Normalization is the starting point, not the destination. Read-heavy dashboards, search indexes, analytics tables — all of these are legitimately denormalized. The rule is: normalize, prove the performance problem, then denormalize with eyes open and documentation.

## Detailed Explanation

### 1. Functional Dependencies: The Foundation

A **functional dependency** X -> Y says: for every X value, there is exactly one Y value. `roll_no -> student_name` means every roll number identifies exactly one student. `(course_id, student_id) -> grade` means every (course, student) pair has exactly one grade.

The normal forms are rules about which functional dependencies are allowed in a well-designed table.

### 2. First Normal Form (1NF): Atomic Values

Every column holds a single, atomic value. No repeating groups, no lists stuffed into one column, no multi-valued fields.

```
-- NOT 1NF: phones is a CSV
CREATE TABLE students_bad (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    phones VARCHAR(200)  -- '9876500001,9876500002'
);

-- 1NF: each phone is its own row
CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(50));
CREATE TABLE student_phones (
    student_id INT,
    phone VARCHAR(15),
    PRIMARY KEY (student_id, phone),
    FOREIGN KEY (student_id) REFERENCES students(id)
);
```

Why: searching for students with a specific phone in the CSV requires LIKE or a stored function — neither can use an index. The 1NF version is O(log N) per lookup with a proper index.

### 3. Second Normal Form (2NF): No Partial Dependencies

A table in 1NF is in 2NF if every non-key column depends on the *whole* primary key, not just part of it. This only applies when the primary key is composite (multiple columns). Single-column primary keys are trivially in 2NF.

```
-- NOT 2NF: PK is (order_id, product_id), but product_name depends on product_id alone
CREATE TABLE order_items_bad (
    order_id INT,
    product_id INT,
    product_name VARCHAR(50),   -- partial dependency on product_id only
    product_price DECIMAL(10,2), -- partial dependency on product_id only
    qty INT,
    PRIMARY KEY (order_id, product_id)
);
-- Problems: product name/price repeated on every order line.
-- Change a product's name once -> update 10,000 rows.

-- 2NF: split products into their own table
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    price DECIMAL(10,2)
);
CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    qty INT,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
```

### 4. Third Normal Form (3NF): No Transitive Dependencies

A table in 2NF is in 3NF if every non-key column depends *directly* on the primary key — not through another non-key column. Formally: no non-key column depends on another non-key column.

```
-- NOT 3NF: department_name depends on department_id, not on employee_id
CREATE TABLE employees_bad (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    department_id INT,
    department_name VARCHAR(50)  -- transitive: emp_id -> dept_id -> dept_name
);
-- Problem: repeating the dept name on every employee row.
-- Renaming a department touches thousands of rows.

-- 3NF: dept_name lives only in departments
CREATE TABLE departments (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);
```

3NF is the pragmatic target for most OLTP schemas. If a table is in 3NF, you rarely have anomalies, and the schema is a sensible starting point for any application.

### 5. Boyce-Codd Normal Form (BCNF): Stricter Than 3NF

A table is in BCNF if, for every non-trivial dependency X -> Y, X is a *superkey* (contains a candidate key). BCNF catches a subtle class of anomalies that 3NF misses when there are multiple overlapping candidate keys.

```
-- Classic BCNF-violation example:
-- A course is taught by exactly one instructor for a given room.
-- (room, time) -> instructor.  (instructor, time) -> room.
CREATE TABLE classes (
    room VARCHAR(20),
    time TIME,
    instructor VARCHAR(50),
    PRIMARY KEY (room, time)
);
-- (room, time) is the primary key.
-- But instructor also partly determines room: (instructor, time) -> room.
-- Anomaly: to say 'Priya teaches in room 101 at 10am' we need a class entry.
-- If we delete all Priya's 10am classes, we lose the fact that she is associated with room 101 at 10am.

-- BCNF version: split into two tables
CREATE TABLE instructor_rooms (
    instructor VARCHAR(50),
    time TIME,
    room VARCHAR(20),
    PRIMARY KEY (instructor, time)
);
CREATE TABLE class_schedule (
    instructor VARCHAR(50),
    time TIME,
    PRIMARY KEY (instructor, time)
);
```

In practice, BCNF rarely differs from 3NF for most real schemas. When it does, the anomaly is usually a sign that the business rules are more complex than first thought — worth pausing to re-examine.

### 6. 4NF and 5NF: Briefly

**4NF** eliminates multi-valued dependencies. If a table records that a student is enrolled in a set of courses AND has a set of phone numbers, storing them in one table creates a combinatorial explosion. Split into two tables.

**5NF** eliminates join dependencies — situations where a table can be reconstructed from smaller joins but not from any two of them. 5NF cases are rare in practice; 3NF / BCNF is the usual end point.

### 7. Denormalization: Deliberate Rule-Breaking

Once the schema is normalized, measure performance. If a read-heavy query repeatedly JOINs five tables, you may decide to copy a column into another table:

```
-- Normalized: to show a customer's orders with their city,
-- you JOIN customers on every query.

-- Denormalized: copy city onto orders
ALTER TABLE orders ADD COLUMN customer_city VARCHAR(50);
-- Now you pay the cost at write time (and must keep it in sync)
-- to save the JOIN at read time.
```

Accept the cost: you now have two copies of city that can drift. Mitigate with triggers, with ETL jobs that reconcile, or by treating the denormalized copy as a cache (rebuild on demand). Document why you denormalized so the next engineer does not try to 'fix' it.

### 8. ER Diagrams: Entities, Relationships, Cardinality

Before you write DDL, sketch an **ER (Entity-Relationship) diagram**. Each **entity** becomes a table. **Relationships** become foreign keys (or, for many-to-many, a junction table). **Cardinality** describes how many of each:

- **1-1**: a user has one profile. Add the FK to either table (usually the optional side).
- **1-N**: a customer has many orders. FK on the many side (`orders.customer_id`).
- **N-M**: a student enrolls in many courses, a course has many students. Create a junction table: `enrollments(student_id, course_id)`.

```
-- 1-N: customer -> orders
CREATE TABLE customers (id INT PRIMARY KEY, name VARCHAR(50));
CREATE TABLE orders    (id INT PRIMARY KEY, customer_id INT,
                        FOREIGN KEY (customer_id) REFERENCES customers(id));

-- N-M: students <-> courses
CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(50));
CREATE TABLE courses  (id INT PRIMARY KEY, name VARCHAR(50));
CREATE TABLE enrollments (
    student_id INT, course_id INT,
    grade CHAR(2),
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id)  REFERENCES courses(id)
);
```

### 9. Designing an E-commerce Schema

```
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash CHAR(60) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE addresses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    line1 VARCHAR(200),
    city VARCHAR(50),
    pincode VARCHAR(10),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
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

Note the `unit_price` copied onto `order_items`. This is deliberate denormalization: products[price] will change over time; order_items must capture the price *at the moment of sale*. The 'redundancy' is the point.

### 10. Designing an Instagram-like Social Schema

```
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
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Follows: a user follows another user (self-join on users)
CREATE TABLE follows (
    follower_id INT,
    followee_id INT,
    followed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (follower_id, followee_id),
    FOREIGN KEY (follower_id) REFERENCES users(id),
    FOREIGN KEY (followee_id) REFERENCES users(id),
    CHECK (follower_id <> followee_id)
);
```

The `follows` table is a self-referential N-M. The CHECK prevents users from following themselves. At scale this table gets billions of rows, and denormalization (cached follower counts on `users`, Redis fan-out of timelines) is unavoidable — but the normalized design remains the source of truth.

### 11. Keys: Primary, Surrogate, Composite

- **Natural primary key**: a real-world unique identifier (email, ISBN). Stable if the real world is stable; often not — people change emails.
- **Surrogate primary key**: an invented identifier (INT AUTO_INCREMENT, UUID). Stable by definition; decoupled from business meaning.
- **Composite primary key**: multiple columns together uniquely identify a row. Standard for junction tables (`enrollments(student_id, course_id)`).

Modern practice: use surrogate keys for most tables (unchanging, compact, indexable); use composite keys for junction tables; add UNIQUE constraints on the natural keys (email, username) for enforcement without tying the PK to them.

### 12. Foreign Key Cascading

When you declare a foreign key, you choose what happens if the referenced row is deleted or updated:

- **ON DELETE CASCADE**: delete child rows automatically. Use when children cannot exist without the parent (address without user, comments without post).
- **ON DELETE SET NULL**: set the FK to NULL. Use when the child can survive the parent (employee can exist without a manager — set manager_id = NULL).
- **ON DELETE RESTRICT** (default in most engines): block the delete if children exist. Safe default for business-critical data.
- **ON DELETE NO ACTION**: same as RESTRICT in MySQL, but in some DBs the check is deferred.

```
CREATE TABLE posts (
    id BIGINT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
-- Delete a user, all their posts vanish automatically.

CREATE TABLE employees (
    id INT PRIMARY KEY,
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
);
-- Delete a manager, reports have manager_id = NULL (not themselves deleted).

CREATE TABLE invoices (
    id INT PRIMARY KEY,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE RESTRICT
);
-- Cannot delete a customer who has invoices. Force the operator to deal with them first.
```

## Code Examples

### 1NF Violation and Fix

```sql
-- Bad: phones stuffed into a single CSV column
CREATE TABLE students_bad (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    phones VARCHAR(200)
);

INSERT INTO students_bad VALUES
(1, 'Aarav', '9876500001,9876500002'),
(2, 'Priya', '9876500003');

-- Finding students with a specific phone requires LIKE -- no index usage
SELECT name FROM students_bad WHERE phones LIKE '%9876500002%';

-- 1NF version: each phone on its own row
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE student_phones (
    student_id INT,
    phone VARCHAR(15),
    PRIMARY KEY (student_id, phone),
    FOREIGN KEY (student_id) REFERENCES students(id)
);

INSERT INTO students VALUES (1,'Aarav'), (2,'Priya');
INSERT INTO student_phones VALUES
(1,'9876500001'), (1,'9876500002'), (2,'9876500003');

-- Now the lookup is O(log N) with an index
SELECT s.name FROM students s
JOIN student_phones p ON p.student_id = s.id
WHERE p.phone = '9876500002';
```

CSV columns defeat indexing and force substring searches. Splitting into a child table (with an index on phone) turns a full scan into an indexed lookup, and lets you add new phones without touching other data. This is the most common 1NF fix.

**Output:**

```
+-------+
| name  |
+-------+
| Aarav |
+-------+
```

### 2NF Violation and Fix

```sql
-- Bad: primary key is (order_id, product_id),
-- but product_name and price depend on product_id alone
CREATE TABLE order_items_bad (
    order_id INT,
    product_id INT,
    product_name VARCHAR(50),
    product_price DECIMAL(10,2),
    qty INT,
    PRIMARY KEY (order_id, product_id)
);

INSERT INTO order_items_bad VALUES
(1001, 42, 'Headphones', 1999.00, 1),
(1002, 42, 'Headphones', 1999.00, 2),
(1003, 42, 'Headphones', 1999.00, 1);
-- 'Headphones' and 1999.00 are repeated on every row.

-- Update anomaly: renaming the product touches many rows
UPDATE order_items_bad
SET product_name = 'Wireless Headphones'
WHERE product_id = 42;

-- 2NF fix: split products out
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    price DECIMAL(10,2)
);

CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    qty INT,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO products VALUES (42, 'Wireless Headphones', 1999.00);
INSERT INTO order_items VALUES (1001,42,1), (1002,42,2), (1003,42,1);

-- Now renaming the product is O(1)
UPDATE products SET name = 'Bluetooth Headphones' WHERE id = 42;
```

In the bad table, product_name and product_price depend only on product_id (part of the composite PK) — a partial dependency. Splitting products into its own table removes the partial dependency and turns repeated updates into single-row updates.

**Output:**

```
-- After the 2NF fix, products table has 1 row.
-- order_items has 3 rows referencing it.
-- Product name changes update 1 row, not 3 (or 3 million).
```

### 3NF Violation and Fix

```sql
-- Bad: dept_name transitively depends on emp_id through dept_id
CREATE TABLE employees_bad (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    dept_id INT,
    dept_name VARCHAR(50)
);

INSERT INTO employees_bad VALUES
(1, 'Aarav', 10, 'Engineering'),
(2, 'Priya', 10, 'Engineering'),
(3, 'Rohan', 20, 'Sales');

-- Anomaly: renaming 'Engineering' to 'Product Engineering'
-- requires updating every employee in that dept.
UPDATE employees_bad SET dept_name = 'Product Engineering' WHERE dept_id = 10;

-- 3NF fix: separate departments
CREATE TABLE departments (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(id)
);

INSERT INTO departments VALUES (10,'Product Engineering'), (20,'Sales');
INSERT INTO employees VALUES (1,'Aarav',10), (2,'Priya',10), (3,'Rohan',20);

-- Rename is a single-row update, no matter how many employees
UPDATE departments SET name = 'Platform Engineering' WHERE id = 10;

SELECT e.emp_name, d.name AS dept
FROM employees e JOIN departments d ON d.id = e.dept_id;
```

dept_name depends on dept_id, which depends on emp_id: a transitive dependency. The fix is to make dept_name live in a table keyed by dept_id alone. Employees reference a department by FK; renaming a department is one UPDATE regardless of headcount.

**Output:**

```
+----------+-----------------------+
| emp_name | dept                  |
+----------+-----------------------+
| Aarav    | Platform Engineering  |
| Priya    | Platform Engineering  |
| Rohan    | Sales                 |
+----------+-----------------------+
```

### N-M Junction Table: Students and Courses

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE courses (
    id INT PRIMARY KEY,
    title VARCHAR(50)
);

-- Junction table with attributes of the relationship itself
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    grade CHAR(2),
    enrolled_at DATE,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id)  REFERENCES courses(id)
);

INSERT INTO students VALUES (1,'Aarav'), (2,'Priya'), (3,'Rohan');
INSERT INTO courses  VALUES (101,'DBMS'), (102,'OS');
INSERT INTO enrollments VALUES
(1, 101, 'A', '2026-01-10'),
(1, 102, 'B', '2026-01-10'),
(2, 101, 'A', '2026-01-11'),
(3, 102, 'B', '2026-01-12');

-- Which courses is Aarav in?
SELECT c.title, e.grade
FROM enrollments e
JOIN courses c ON c.id = e.course_id
JOIN students s ON s.id = e.student_id
WHERE s.name = 'Aarav';
```

The junction table (enrollments) is how you model N-M relationships. Its PK is the pair (student_id, course_id); relationship-specific attributes like grade and enrolled_at live on the junction because they belong to the relationship, not to either side individually.

**Output:**

```
+-------+-------+
| title | grade |
+-------+-------+
| DBMS  | A     |
| OS    | B     |
+-------+-------+
```

### ON DELETE CASCADE in Action

```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(100)
);

CREATE TABLE posts (
    id INT PRIMARY KEY,
    user_id INT,
    title VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments (
    id INT PRIMARY KEY,
    post_id INT,
    body VARCHAR(200),
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);

INSERT INTO users VALUES (1,'aarav@x'), (2,'priya@x');
INSERT INTO posts VALUES
(101, 1, 'Hello world'),
(102, 1, 'Second post'),
(103, 2, 'Priya here');
INSERT INTO comments VALUES
(1001, 101, 'Nice!'),
(1002, 102, 'Agreed'),
(1003, 103, 'Welcome');

-- Deleting Aarav cascades through posts and comments
DELETE FROM users WHERE id = 1;

SELECT 'users' tbl, id, NULL extra FROM users
UNION ALL SELECT 'posts', id, user_id FROM posts
UNION ALL SELECT 'comments', id, post_id FROM comments;
```

ON DELETE CASCADE chains through all three tables: delete Aarav, his posts vanish, and the comments on those posts vanish. This is ideal for ownership hierarchies (a comment cannot exist without its post; a post cannot exist without its user). Only Priya's data remains.

**Output:**

```
+----------+------+-------+
| tbl      | id   | extra |
+----------+------+-------+
| users    |    2 | NULL  |
| posts    |  103 |     2 |
| comments | 1003 |   103 |
+----------+------+-------+
```

### ON DELETE SET NULL for Optional Parent

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    manager_id INT NULL,
    FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
);

INSERT INTO employees VALUES
(1, 'Aarav', NULL),   -- CEO
(2, 'Priya', 1),
(3, 'Rohan', 1),
(4, 'Anika', 2);

-- Priya leaves; her reports lose a manager but stay employed
DELETE FROM employees WHERE id = 2;

SELECT id, name, manager_id FROM employees;
```

Reports should not be deleted just because their manager left. ON DELETE SET NULL keeps the employees, clearing manager_id so they can be reassigned. Works because manager_id is NULL-able — you cannot use SET NULL on a NOT NULL column.

**Output:**

```
+----+-------+------------+
| id | name  | manager_id |
+----+-------+------------+
|  1 | Aarav | NULL       |
|  3 | Rohan | 1          |
|  4 | Anika | NULL       |
+----+-------+------------+
```

### Deliberate Denormalization for Read Speed

```sql
-- Normalized: posts has user_id, and to show username we JOIN users.
-- At scale, this JOIN is the hot path on every feed page-load.

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) UNIQUE
);

CREATE TABLE posts (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    username_cached VARCHAR(30),   -- denormalized copy
    body VARCHAR(500),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Keep the cached column in sync with a trigger
DELIMITER $$
CREATE TRIGGER posts_set_username
BEFORE INSERT ON posts
FOR EACH ROW
BEGIN
    SELECT username INTO NEW.username_cached
    FROM users WHERE id = NEW.user_id;
END$$

CREATE TRIGGER users_update_username
AFTER UPDATE ON users
FOR EACH ROW
BEGIN
    IF NEW.username <> OLD.username THEN
        UPDATE posts SET username_cached = NEW.username WHERE user_id = NEW.id;
    END IF;
END$$
DELIMITER ;

-- Feed query no longer needs to JOIN users
SELECT id, username_cached, body FROM posts ORDER BY id DESC LIMIT 20;
```

Denormalization earns its keep only when the read pattern is hot and the write overhead is manageable. Triggers keep the cached column consistent automatically. Document why the column exists and who owns the sync — otherwise a future engineer will delete it thinking it is a mistake.

**Output:**

```
-- Feed query plan (conceptually):
-- Before: SELECT + JOIN users (two index seeks per row)
-- After:  SELECT alone (one index seek per row) -- measurably faster under load
```

## Common Mistakes

### Designing for Denormalization First

**Wrong:**

```
-- 'Make it easy to query' — one flat table
CREATE TABLE orders_everything (
    order_id INT,
    order_date DATE,
    customer_name VARCHAR(50),
    customer_email VARCHAR(100),
    customer_city VARCHAR(50),
    product_name VARCHAR(100),
    product_price DECIMAL(10,2),
    product_category VARCHAR(50),
    qty INT
);
-- Every fact is repeated. Every update touches many rows.
-- Every new column you want to add requires a painful decision.
```

No SQL error — but within weeks you see update anomalies, drifting data, and queries that cannot trust any column.

**Correct:**

```
-- Start with a normalized schema (3NF or BCNF)
-- Then, only after measurement, denormalize SPECIFIC hot paths
CREATE TABLE customers   (id, name, email, city);
CREATE TABLE products    (id, name, price, category_id);
CREATE TABLE categories  (id, name);
CREATE TABLE orders      (id, customer_id, created_at);
CREATE TABLE order_items (order_id, product_id, qty, unit_price);
-- Denormalize unit_price onto order_items ON PURPOSE to freeze the price at sale time.
```

Jumping to denormalization because 'queries are easier' produces a schema that cannot tell you what is true. Normalize first; denormalize with intent, with triggers or ETL to keep copies consistent, and with documentation explaining why.

### Using a Natural Primary Key That Changes

**Wrong:**

```
CREATE TABLE users (
    email VARCHAR(100) PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE posts (
    id INT PRIMARY KEY,
    user_email VARCHAR(100),  -- FK to users.email
    body TEXT
);

-- User changes email. Now:
UPDATE users SET email = 'new@x.com' WHERE email = 'old@x.com';
-- Every post's user_email must also be updated, or FK is violated.
-- Worse, the email is indexed everywhere, so updates are slow.
```

Logically fragile: every table that references email must be updated in lockstep, via CASCADE or manual updates, for every email change.

**Correct:**

```
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(50)
);

CREATE TABLE posts (
    id INT PRIMARY KEY,
    user_id INT,
    body TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Email change is one UPDATE on users. Posts reference the invariant id.
UPDATE users SET email = 'new@x.com' WHERE id = 42;
```

Use a surrogate key (INT AUTO_INCREMENT or UUID) as the primary key for most entities. Natural identifiers (email, username) should be UNIQUE columns, not PKs. Real-world identifiers change; surrogate keys do not.

### Forgetting the Junction Table for N-M

**Wrong:**

```
-- Trying to model students <-> courses with an array
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    course_ids VARCHAR(200)   -- '101,102,103'
);
```

Not in 1NF. Impossible to ask 'how many students are in DBMS' efficiently. Impossible to record a per-pair grade.

**Correct:**

```
CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(50));
CREATE TABLE courses  (id INT PRIMARY KEY, title VARCHAR(50));
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    grade CHAR(2),
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id)  REFERENCES courses(id)
);
```

N-M relationships require a junction table. The junction has a composite PK of both foreign keys and usually hosts relationship-specific attributes (grade, enrolled_at, role). This is a hard rule — there are no exceptions for 'small N' or 'small M'.

### Wrong Cascade Choice: CASCADE Where RESTRICT Is Safer

**Wrong:**

```
CREATE TABLE invoices (
    id INT PRIMARY KEY,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);

-- A sales rep accidentally deletes a customer.
-- Every one of that customer's invoices disappears.
-- Audit, tax records, refunds -- all gone.
```

No SQL error — but the finance team has lost months of invoices that they legally must keep.

**Correct:**

```
CREATE TABLE invoices (
    id INT PRIMARY KEY,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE RESTRICT
);

-- The accidental delete now fails with a FK error.
-- The operator must deal with the invoices first, which is the correct behaviour.
```

Only use ON DELETE CASCADE for ownership hierarchies where a child truly cannot exist without the parent (a comment without its post). For business-critical relationships with auditing or legal implications (invoices, payments, transactions), use RESTRICT and make the operator make a conscious choice.

### Over-Normalization: Splitting Addresses Into Atoms

**Wrong:**

```
-- 'Atomic' to the extreme
CREATE TABLE addresses (
    id INT PRIMARY KEY,
    user_id INT,
    house_no VARCHAR(20),
    street_id INT,
    locality_id INT,
    city_id INT,
    state_id INT,
    pincode_id INT
);
CREATE TABLE streets   (id INT PRIMARY KEY, name VARCHAR(100));
CREATE TABLE localities(id INT PRIMARY KEY, name VARCHAR(100));
CREATE TABLE cities    (id INT PRIMARY KEY, name VARCHAR(50));
CREATE TABLE states    (id INT PRIMARY KEY, name VARCHAR(50));
CREATE TABLE pincodes  (id INT PRIMARY KEY, code VARCHAR(10));
-- Every address lookup is a 6-way JOIN.
```

No SQL error — but every query that displays an address needs six JOINs. Developers burn hours writing and tuning them. Users experience slow page loads.

**Correct:**

```
-- Pragmatic: store address as a few text fields, unless you need
-- strict hierarchies (delivery optimisation, GST by state, etc.)
CREATE TABLE addresses (
    id INT PRIMARY KEY,
    user_id INT,
    line1 VARCHAR(200),
    line2 VARCHAR(200),
    city VARCHAR(50),
    state VARCHAR(50),
    pincode VARCHAR(10)
);
```

Normalization is a tool, not a religion. If 'street' never needs to be reused across users, it is a column, not a table. Split when there is real reuse or real querying benefit; not because textbook 3NF says so for every last attribute.

## Summary

- Database design starts with ER modelling: identify entities (become tables), relationships (become FKs or junction tables), and cardinality (1-1, 1-N, N-M).
- Normalization is the process of removing redundancy and update anomalies. Each normal form (1NF, 2NF, 3NF, BCNF, 4NF, 5NF) is stricter than the previous one. 3NF is the practical target for most OLTP schemas.
- 1NF: every column has a single atomic value. No CSVs, no repeating groups, no multi-valued columns. Fix: split into a child table where each value is its own row.
- 2NF: in 1NF, AND no partial dependencies. Every non-key column depends on the whole composite PK, not part of it. Applies only when the PK is composite. Fix: split the partially-dependent columns into their own table keyed by that part.
- 3NF: in 2NF, AND no transitive dependencies. Non-key columns depend directly on the PK, not through another non-key column. Fix: move the transitively-dependent columns into their own table.
- BCNF: stricter 3NF. Every non-trivial dependency X -> Y must have X as a superkey. Catches a narrow set of anomalies that 3NF misses when there are overlapping candidate keys. Rare in practice.
- Denormalization is deliberate rule-breaking for performance. Normalize first, measure, then copy columns (or build summary tables) to speed up hot read paths. Document every denormalization.
- Cardinality: 1-1 (optional FK on one side), 1-N (FK on the many side), N-M (junction table with composite PK of both FKs). Every N-M needs a junction — no exceptions.
- Keys: use surrogate keys (INT AUTO_INCREMENT or UUID) as PKs; use UNIQUE constraints for natural identifiers (email, username). Junction tables naturally use composite PKs.
- Foreign key cascading: ON DELETE CASCADE for ownership chains (comments under posts), ON DELETE SET NULL for optional parents (manager), ON DELETE RESTRICT for business-critical references (invoices, payments).

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/sql/database-design-and-normalization/*
*Practice questions: https://learn.modernagecoders.com/resources/sql/database-design-and-normalization/practice/*
