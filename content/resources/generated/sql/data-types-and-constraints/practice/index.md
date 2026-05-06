---
title: "Practice: Data Types and Constraints (NOT NULL, UNIQUE, PRIMARY KEY)"
description: "56 practice problems for Data Types and Constraints (NOT NULL, UNIQUE, PRIMARY KEY) in SQL"
slug: data-types-and-constraints-practice
canonical: https://learn.modernagecoders.com/resources/sql/data-types-and-constraints/practice/
category: "SQL"
---
# Practice: Data Types and Constraints (NOT NULL, UNIQUE, PRIMARY KEY)

**Total questions:** 56

## Topic-Specific Questions

### Q1. [Easy] What data type should you use for a student's age?

*Hint:* Range is 0-150 at most.

**Answer:** `TINYINT UNSIGNED` (range 0-255, 1 byte) is ideal. `INT` works but wastes 3 bytes per row.

TINYINT UNSIGNED is perfect because ages never go negative and never exceed 255. On a million-row table, picking TINYINT over INT saves 3MB — small but it adds up across columns.

### Q2. [Easy] What data type for a 12-digit Aadhaar number, and why not BIGINT?

*Hint:* Aadhaar can start with 0, and you never do math on it.

**Answer:** `CHAR(12)`. Not BIGINT because (a) Aadhaar numbers can start with 0 which BIGINT would strip, and (b) we never perform arithmetic on an Aadhaar.

CHAR(12) is better than VARCHAR(12) because every valid Aadhaar is exactly 12 digits — the fixed-length CHAR gives slightly better performance and signals intent. Also consider adding a CHECK constraint to ensure all 12 characters are digits.

### Q3. [Easy] What data type for a user's profile bio that can be up to 2000 characters?

*Hint:* Varchar limit vs TEXT.

**Answer:** `VARCHAR(2000)` or `TEXT`. VARCHAR is preferred here since 2000 chars is well below the VARCHAR limit and VARCHAR can be indexed fully.

TEXT starts to matter only beyond 65,535 characters. At 2000 characters, VARCHAR(2000) is simpler and allows full indexing if you want to search bios later. Only use TEXT for truly long content (articles, blog posts, logs).

### Q4. [Easy] What data type for a date of birth?

*Hint:* Do you need the time of day?

**Answer:** `DATE`. Only year-month-day is needed — not hours or minutes.

Using DATETIME for DOB wastes space (3 extra bytes per row) and invites bugs where someone accidentally uses the time part. Use DATE for all date-only fields: joining_date, dob, appointment_date.

### Q5. [Easy] What data type for a product price like 1499.50?

*Hint:* Never FLOAT for money.

**Answer:** `DECIMAL(10, 2)` — up to 10 total digits with 2 after the decimal. Supports up to 99,999,999.99.

DECIMAL stores exact values, which is essential for money. FLOAT would introduce rounding errors that make account balances drift. Pick the first number (precision) large enough for your max amount, and 2 for paise/cents.

### Q6. [Easy] Name three constraints that can be applied to a column in SQL.

*Hint:* Any three of six common ones.

**Answer:** Any three of: `NOT NULL`, `UNIQUE`, `PRIMARY KEY`, `FOREIGN KEY`, `CHECK`, `DEFAULT`.

These are the six standard column-level constraints. AUTO_INCREMENT is technically a column attribute, not a constraint, but interviewers often accept it too. Each constraint protects your data against a different class of bugs.

### Q7. [Easy] What is the difference between PRIMARY KEY and UNIQUE?

*Hint:* Nullability and count per table.

**Answer:** **PRIMARY KEY**: uniquely identifies a row, cannot be NULL, only ONE per table. **UNIQUE**: values must be different, CAN be NULL (and multiple NULLs are usually allowed), MANY UNIQUE constraints allowed per table.

Think of PRIMARY KEY as the main identity card and UNIQUE as additional optional constraints. A student's primary key might be student_id, but email and aadhaar can each have their own UNIQUE constraint to prevent duplicates.

### Q8. [Easy] What does AUTO_INCREMENT do?

*Hint:* Relates to ID generation.

**Answer:** `AUTO_INCREMENT` automatically assigns the next integer value to a column on each INSERT, so you don't have to provide the id yourself.

Usually applied to the primary key: `id INT AUTO_INCREMENT PRIMARY KEY`. Start value defaults to 1 and increments by 1. If you delete row with id=5 and insert a new row, it becomes id=6 (not 5) — gaps are normal.

### Q9. [Easy] What is the difference between CHAR(10) and VARCHAR(10)?

*Hint:* Storage and padding.

**Answer:** `CHAR(10)` always takes exactly 10 characters of storage (padded with spaces if shorter). `VARCHAR(10)` takes only the actual length plus 1-2 bytes overhead. VARCHAR is better for variable-length data; CHAR is marginally faster for strictly fixed-length data.

If you store "IN" in CHAR(10), MySQL pads it to "IN        " on disk. If you store it in VARCHAR(10), it takes 2 bytes + 1 byte of length prefix = 3 bytes. For fixed codes (country=IN, US), CHAR is cleaner. For names, emails, addresses, VARCHAR wins.

### Q10. [Medium] When would you use DATETIME vs TIMESTAMP?

*Hint:* Time zones and range.

**Answer:** **DATETIME**: stores literal wall-clock time, range 1000-9999, no time zone logic. Use for fixed events like scheduled meeting times. **TIMESTAMP**: stored as UTC, converted to server time zone on read, range 1970-2038. Use for created_at/updated_at where automatic time zone handling is helpful.

Rule of thumb: TIMESTAMP for "when did the system record this event" (auto-updates with session time zone), DATETIME for "what wall-clock moment is the event" (same value no matter where you read from).

### Q11. [Medium] What is a composite primary key? Give an example.

*Hint:* More than one column.

**Answer:** A composite primary key is made of two or more columns. The COMBINATION must be unique, though each individual column may have duplicates. Example: an enrollments(student_id, course_id) table where a student can take many courses and a course has many students, but each (student, course) pair is unique.

Composite PKs are standard for junction tables that resolve many-to-many relationships. Syntax: `PRIMARY KEY (col1, col2)` at the end of CREATE TABLE.

### Q12. [Medium] Why should you never store money as FLOAT?

*Hint:* Binary representation of decimal fractions.

**Answer:** FLOAT stores values in binary floating-point, which cannot exactly represent decimal fractions like 0.1 or 19.99. Summing 0.1 ten times gives 0.9999999 instead of 1.0. Over millions of transactions, balances silently drift. **Always use DECIMAL for money.**

A real-world horror story: a startup's billing system used FLOAT for transactions; after a year, the total reported by their DB disagreed with the total reported by their payment provider by hundreds of rupees. Fixing it required re-processing months of data.

### Q13. [Medium] Write a CREATE TABLE for `employees` with: emp_id (auto-increment primary key), name (required up to 50 chars), email (unique, required), salary (decimal for money, required, must be positive), hire_date (date, required, default today).

*Hint:* Combine all the constraints you learned.

**Answer:** ```
CREATE TABLE employees (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    salary DECIMAL(10,2) NOT NULL CHECK (salary > 0),
    hire_date DATE NOT NULL DEFAULT (CURRENT_DATE)
);
```

Combines AUTO_INCREMENT, PRIMARY KEY, NOT NULL, UNIQUE, CHECK, and DEFAULT. `CURRENT_DATE` as the default for hire_date means if you INSERT without a hire_date, MySQL fills in today's date.

### Q14. [Medium] Write a CREATE TABLE for an `orders` table that links to employees via a FOREIGN KEY.

*Hint:* FOREIGN KEY ... REFERENCES.

**Answer:** ```
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL CHECK (amount > 0),
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (emp_id) REFERENCES employees(emp_id)
);
```

The FOREIGN KEY clause ensures every emp_id in orders points to a real row in employees. Attempting to insert an order with a non-existent emp_id fails immediately. This is the foundation of relational integrity.

### Q15. [Medium] Write a CREATE TABLE for a junction table `enrollments` that captures which student is enrolled in which course, with enrollment date. Use a composite primary key.

*Hint:* PRIMARY KEY (student_id, course_id).

**Answer:** ```
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    enrolled_on DATE DEFAULT (CURRENT_DATE),
    PRIMARY KEY (student_id, course_id)
);
```

Composite PK ensures no duplicate (student, course) pairs. Without it, a student could accidentally be enrolled in the same course twice. You would typically also add two FOREIGN KEYs to students and courses.

### Q16. [Medium] Can a PRIMARY KEY column be NULL?

*Hint:* Think about what a primary key represents.

**Answer:** No. A PRIMARY KEY is implicitly NOT NULL. It must uniquely identify each row, and NULL means "unknown", which cannot uniquely identify anything.

Even if you don't write NOT NULL, MySQL adds it for you when you declare PRIMARY KEY. If you try to INSERT a row with NULL in the PK, you get an error: "Column 'id' cannot be null".

### Q17. [Medium] Can a UNIQUE column be NULL?

*Hint:* Yes, usually, and multiple NULLs are allowed.

**Answer:** Yes. In MySQL, a UNIQUE column allows NULL values and treats multiple NULLs as NOT duplicates of each other — so multiple rows can have NULL in a UNIQUE column.

This is a subtle interview question. Example: a users table with `referral_code VARCHAR(20) UNIQUE`. Many users may have NULL referral_code (they weren't referred by anyone). That's fine; only non-null values must be distinct. PostgreSQL and Oracle behave similarly, but SQL Server historically treats a single NULL as unique (allowing at most one NULL).

### Q18. [Hard] Your team wants to add a CHECK constraint to ensure an age column is between 18 and 100. Write the constraint.

*Hint:* CHECK (condition).

**Answer:** ```
age INT NOT NULL CHECK (age BETWEEN 18 AND 100)
```

Or equivalently: `CHECK (age >= 18 AND age <= 100)`.

CHECK constraints enforce arbitrary boolean conditions on each row. MySQL 8.0+ enforces them properly (older MySQL silently ignored them). BETWEEN is inclusive, so 18 and 100 themselves are allowed.

### Q19. [Hard] Why might you use ENUM('Male', 'Female', 'Other') instead of VARCHAR(10) for a gender column?

*Hint:* Space and validation.

**Answer:** Two reasons: (1) ENUM is stored internally as a 1-byte integer regardless of string length — far more efficient; (2) ENUM restricts values to the listed options, so no one can insert 'male ' (trailing space), 'MALE', or 'foo' — the database validates for you.

Downside of ENUM: adding a new option requires ALTER TABLE (not free on huge tables). For columns with stable, well-known options (gender, order_status, priority_level), ENUM is concise and self-documenting. For columns that might evolve often, VARCHAR with a lookup table is more flexible.

### Q20. [Hard] Your DBA proposes using DOUBLE for storing student CGPAs. Is that acceptable or would you push back?

*Hint:* Precision matters for grades.

**Answer:** Push back. CGPA is shown to students to 2 decimal places and can cause disputes if rounding drifts (9.24 vs 9.25 affects scholarships). Use `DECIMAL(3, 2)` for exact 0.00-9.99 representation.

DOUBLE is fine for science-lab data where small floating-point errors don't matter. For anything students, HR, or auditors might dispute (grades, marks, salaries, money), use DECIMAL. Your future self doing end-of-year reconciliation will thank you.

## Mixed Questions

### Q1. [Easy] Match each data type with its best use case: INT, VARCHAR(50), DATE, DECIMAL(10,2), BOOLEAN.

*Hint:* One per column.

**Answer:** INT → row IDs, counts. VARCHAR(50) → names, emails. DATE → date of birth, joining date. DECIMAL(10,2) → money, product price. BOOLEAN → yes/no flags like is_active.

This mental mapping is one of the most useful tools for designing schemas quickly. Knowing the right type for each conceptual shape of data takes you 80% of the way to a good schema.

### Q2. [Easy] Spot the bad choice and fix it:

```
CREATE TABLE users (
    id INT,
    phone INT,
    bio VARCHAR(5000),
    balance FLOAT
);
```

*Hint:* Phone, bio, balance all wrong.

**Answer:** ```
CREATE TABLE users (
    id INT PRIMARY KEY,
    phone VARCHAR(15),       -- was INT, lost leading zeros
    bio TEXT,                 -- was VARCHAR(5000), too big for VARCHAR
    balance DECIMAL(12,2)     -- was FLOAT, loses precision on money
);
```

Three classic mistakes in one: phone as INT (loses leading zeros), bio as VARCHAR(5000) (works but TEXT is more appropriate for long free text), and balance as FLOAT (rounding errors on money). Also added PRIMARY KEY on id for good measure.

### Q3. [Medium] Can a table have zero constraints? Is that a good design?

*Hint:* MySQL allows it, but...

**Answer:** Yes, MySQL allows it. But it is a poor design. Without constraints, bad data silently flows in and you end up cleaning the mess later in queries.

Every production table should have at least a PRIMARY KEY. Most need NOT NULL on required fields and UNIQUE on identity-like fields (email, username). FOREIGN KEYs are important for maintaining referential integrity in related tables.

### Q4. [Medium] Create a `products` table: id auto-increment PK, name required up to 80 chars, sku unique required 20 chars, price decimal for money must be positive, category an ENUM of 'Electronics', 'Books', 'Clothing', and is_active boolean defaulting TRUE.

*Hint:* Combine everything.

**Answer:** ```
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(80) NOT NULL,
    sku VARCHAR(20) NOT NULL UNIQUE,
    price DECIMAL(10,2) NOT NULL CHECK (price > 0),
    category ENUM('Electronics', 'Books', 'Clothing') NOT NULL,
    is_active BOOLEAN DEFAULT TRUE
);
```

This is a complete, realistic product catalog schema. Every column is typed correctly and constrained to prevent bad data. This is what a senior reviewer would expect from a junior engineer.

### Q5. [Medium] What happens if you try to insert a CGPA of 11.5 into a column declared as DECIMAL(3,2) CHECK (cgpa <= 10)?

*Hint:* Two things could fail.

**Answer:** Two possible issues. First, DECIMAL(3,2) means 3 total digits with 2 after the decimal — max allowed is 9.99, so 11.5 exceeds the type's max. Second, even if the type allowed it, the CHECK (cgpa <= 10) would reject it. In MySQL you'll get an "Out of range" error first.

DECIMAL(p, s) means p = total digits, s = digits after decimal. So DECIMAL(3,2) allows at most 9.99. For CGPA on a 10-point scale, use DECIMAL(4,2) to safely hold 10.00, plus a CHECK to enforce the business rule.

### Q6. [Medium] Why do FOREIGN KEY constraints sometimes prevent deletes you think should work?

*Hint:* Orphan child rows.

**Answer:** If another table references a row via FOREIGN KEY, deleting the parent leaves orphan children. MySQL blocks the delete by default. You must either delete the children first or configure ON DELETE CASCADE / SET NULL on the FK.

Example: students has FK to departments. If you try to delete a department that has students, MySQL errors: "Cannot delete or update a parent row: a foreign key constraint fails". Fix: delete/reassign the students first, or declare the FK with `ON DELETE CASCADE` (auto-delete children) or `ON DELETE SET NULL` (orphan children but keep them).

### Q7. [Hard] A colleague declares a column as `VARCHAR(50)` but always inserts values exactly 50 characters long. Is VARCHAR fine here or should they switch to CHAR?

*Hint:* Fixed length implies fixed storage.

**Answer:** Switch to `CHAR(50)`. Since every value is exactly 50 characters, CHAR is slightly faster (fixed-width rows) and saves the 1-2 byte length prefix that VARCHAR adds to every value.

Micro-optimization? Yes, but it matters on tables with 100M rows. CHAR also subtly documents intent: "this value is always exactly 50 chars". Common example: MD5 hashes (always 32 chars) → CHAR(32).

### Q8. [Hard] You need to store the exact moment (to the microsecond) a user clicked a button. Which type: DATETIME(6), TIMESTAMP(6), or BIGINT storing epoch microseconds?

*Hint:* Time zone and range matter.

**Answer:** Depends. **TIMESTAMP(6)** gives microsecond precision and automatic UTC handling — best if you are before 2038. **DATETIME(6)** gives microseconds but no time zone logic — best if you might store events beyond 2038 or want the literal wall-clock time. **BIGINT** is the most portable and survives the 2038 bug but requires application-level conversion to a readable date.

Most modern web apps use TIMESTAMP(6) for click events and analytics (current times, auto TZ conversion). Systems that must work past 2038 use BIGINT for safety. Remember: both TIMESTAMP and DATETIME support fractional seconds only if you specify the precision, e.g., `DATETIME(6)`.

### Q9. [Hard] Your friend says: "Since UNIQUE constraints prevent duplicates, we can just slap UNIQUE on many columns and skip the PRIMARY KEY." Counter this.

*Hint:* Primary keys do more than uniqueness.

**Answer:** Three reasons to still have a PRIMARY KEY: (1) PK implies NOT NULL (UNIQUE alone allows NULL). (2) PK creates the main clustered index in InnoDB — hugely impacts storage layout and query speed. (3) Foreign keys from other tables need a primary key (or unique key) to reference.

A table without a PRIMARY KEY is technically legal in MySQL but strongly discouraged. InnoDB will invent a hidden 6-byte row ID internally anyway. Being explicit about the PK makes the schema readable and makes joins/indexes work predictably.

### Q10. [Hard] Fix the design error:

```
CREATE TABLE bookings (
    user_id INT UNIQUE,
    room_id INT UNIQUE,
    booking_date DATE
);
```

The business rule is: a user can book many rooms; a room can be booked by many users; but no (user, room, date) triple should repeat.

*Hint:* Neither column alone is unique.

**Answer:** ```
CREATE TABLE bookings (
    user_id INT,
    room_id INT,
    booking_date DATE,
    PRIMARY KEY (user_id, room_id, booking_date)
);
```

The bad version's UNIQUE constraints mean a user can book only one room ever, and a room is booked by only one user ever — wrong. The fix is a composite primary key on the three columns together, ensuring the TRIPLE is unique but each column individually can repeat.

### Q11. [Hard] A table has `created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP` and `updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`. Explain what happens on INSERT and on UPDATE.

*Hint:* ON UPDATE changes the behavior.

**Answer:** On INSERT: both columns get the current timestamp. On UPDATE of any other column in the row: `updated_at` is automatically refreshed to the current timestamp, but `created_at` stays unchanged.

This is the standard "auditing columns" pattern used in virtually every production schema. created_at tells you when a row was born; updated_at tells you when it was last modified. Without the `ON UPDATE CURRENT_TIMESTAMP` clause, updated_at would stay at its insert value forever.

### Q12. [Hard] Design a `course_enrollments` table for a college. Rules: a student takes many courses; a course has many students; each enrollment has a date and optional final grade (A, B, C, D, F); you should not be able to re-enroll the same student in the same course (unless they're repeating, in which case a separate attempt_no distinguishes them).

*Hint:* Composite PK with attempt_no.

**Answer:** ```
CREATE TABLE course_enrollments (
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    attempt_no TINYINT NOT NULL DEFAULT 1,
    enrolled_on DATE NOT NULL DEFAULT (CURRENT_DATE),
    grade CHAR(1) CHECK (grade IN ('A','B','C','D','F')),
    PRIMARY KEY (student_id, course_id, attempt_no),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);
```

The composite PK on (student_id, course_id, attempt_no) lets a student retake the same course with a new attempt_no. FKs to students and courses prevent orphan records. CHECK on grade restricts it to valid letter grades (and NULL, meaning not yet graded).

## Multiple Choice Questions

### Q1. [Easy] Which data type is best for storing exact monetary amounts?

**C is correct.** DECIMAL stores values exactly, which is essential for money. FLOAT and DOUBLE introduce binary floating-point rounding errors. INT can't store paise/cents as a decimal.

### Q2. [Easy] Which data type should a 10-digit Indian mobile number be stored as?

**D is correct.** Phone numbers may have leading zeros, country codes, hyphens, or spaces. VARCHAR preserves all of that. Numeric types would strip leading zeros and block international formats.

### Q3. [Easy] How many primary keys can a table have?

**A is correct.** A table can have only ONE primary key (though it can be composed of multiple columns — a composite key). You can have many UNIQUE constraints, but only one PRIMARY KEY.

### Q4. [Easy] Which keyword enforces that a column cannot have duplicate values?

**B is correct.** UNIQUE prevents duplicate values. NOT NULL prevents empty values. CHECK enforces a general condition. DEFAULT provides a fallback.

### Q5. [Easy] Which data type stores only date (no time) in MySQL?

**C is correct.** DATE stores YYYY-MM-DD only. DATETIME and TIMESTAMP include time. TIME stores only HH:MM:SS.

### Q6. [Easy] What does AUTO_INCREMENT do?

**B is correct.** AUTO_INCREMENT generates a new (usually sequential) integer for each INSERT. You can omit the column in INSERT and MySQL fills it in.

### Q7. [Easy] Which type is appropriate for an Aadhaar number (12 digits, fixed length)?

**C is correct.** Aadhaar is exactly 12 digits, never changes length, and can have leading zeros. CHAR(12) is slightly better than VARCHAR(12) for fixed-length strings. Numeric types lose leading zeros.

### Q8. [Medium] Which combination of constraints does PRIMARY KEY imply?

**C is correct.** A PRIMARY KEY is implicitly both UNIQUE (no duplicate values) and NOT NULL (must have a value). That's why it can uniquely identify every row.

### Q9. [Medium] What is the difference between DATETIME and TIMESTAMP in MySQL?

**A is correct.** TIMESTAMP is stored in UTC and auto-converted to session time zone on read, but its range is limited due to the Y2K38 problem. DATETIME is stored as the literal wall-clock time with a 1000-9999 range, no TZ logic.

### Q10. [Medium] Which is a correct CREATE TABLE statement?

**A is correct.** You can have multiple UNIQUE columns plus a composite PRIMARY KEY. B has duplicate keywords. C has syntax error (no parentheses around column name). D has two PRIMARY KEYs which isn't allowed.

### Q11. [Medium] Which of the following is NOT a valid MySQL numeric type?

**C is correct.** LARGEINT is not a MySQL type. The valid integer types are TINYINT (1 byte), SMALLINT (2), MEDIUMINT (3), INT (4), and BIGINT (8).

### Q12. [Medium] In MySQL, BOOLEAN is internally stored as which type?

**B is correct.** MySQL's BOOLEAN is a synonym for TINYINT(1), with TRUE = 1 and FALSE = 0. You can write either BOOLEAN or TINYINT(1); they are equivalent.

### Q13. [Medium] DECIMAL(7, 2) can store values up to:

**B is correct.** DECIMAL(7,2) means 7 total digits with 2 after the decimal, leaving 5 before: max is 99999.99. For larger money amounts, use DECIMAL(10,2) or DECIMAL(15,2).

### Q14. [Medium] Which is TRUE about FOREIGN KEY constraints?

**B is correct.** Foreign keys ensure referential integrity: every child value must correspond to an existing parent row. They typically reference a PRIMARY KEY or UNIQUE column in the parent table.

### Q15. [Hard] Your table has a UNIQUE constraint on email. How many rows can have email = NULL in MySQL?

**C is correct.** In MySQL, UNIQUE treats multiple NULLs as not duplicates of each other, so any number of rows can have email = NULL. This differs from SQL Server's classic behavior (at most one NULL) but matches PostgreSQL and the SQL standard.

### Q16. [Hard] An INSERT gives "ERROR 1452: Cannot add or update a child row: a foreign key constraint fails". What is the cause?

**C is correct.** Error 1452 means the foreign key refers to a non-existent parent row. Example: inserting an order with student_id=999 when no student 999 exists. Fix: either create the parent first, or fix the FK value.

### Q17. [Hard] Which statement about CHECK constraints in MySQL is TRUE?

**B is correct.** Historically MySQL parsed CHECK constraints for syntax compatibility but ignored them at runtime. Starting with MySQL 8.0.16 (April 2019), CHECK is properly enforced. Older MySQL installs silently accept invalid rows.

### Q18. [Hard] You create: `id INT AUTO_INCREMENT PRIMARY KEY` and insert 10 rows (IDs 1-10), then DELETE all rows. You then insert one row. What id does it get?

**C is correct.** DELETE does not reset AUTO_INCREMENT. The counter continues from where it left off, so the new row gets id=11. If you had used TRUNCATE instead of DELETE, the counter would reset to 1.

### Q19. [Hard] You need to store a very long article (say, 200KB of text). Best type?

**C is correct.** TEXT holds up to ~64KB — 200KB won't fit. MEDIUMTEXT holds up to 16MB. LONGTEXT is overkill for 200KB but would also work. VARCHAR is capped at 65,535 bytes across the whole row, so 200KB is impossible in VARCHAR.

### Q20. [Hard] Which design prevents re-enrolling the same student in the same course twice?

**B is correct.** A composite PRIMARY KEY on (student_id, course_id) enforces uniqueness of the PAIR, which is exactly the rule. Option A would wrongly force each student to appear only once across all enrollments and each course to appear only once — far too restrictive.

## Coding Challenges

### Challenge 1. Design a Realistic students Table

**Difficulty:** Easy

Design a students table with: id (auto-increment PK), name (required, up to 60 chars), email (required, unique, up to 100 chars), phone (optional, up to 15 chars), dob (date, required), cgpa (decimal with 2 decimal places, 0 to 10, default 0), is_active (boolean defaulting TRUE), created_at (timestamp auto-set on insert).

**Constraints:**

- Use all six common constraints where appropriate.

**Sample input:**

```
(No input)
```

**Sample output:**

```
A clean CREATE TABLE with the correct types and constraints.
```

**Solution:**

```sql
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(15),
    dob DATE NOT NULL,
    cgpa DECIMAL(4,2) DEFAULT 0.00 CHECK (cgpa >= 0 AND cgpa <= 10),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Quick sanity check
DESCRIBE students;
```

### Challenge 2. Pick the Right Type

**Difficulty:** Easy

For each real-world field, suggest the best MySQL data type and briefly justify: (a) User's age, (b) Aadhaar number, (c) Email, (d) Blog post body, (e) Product price in INR, (f) Order timestamp, (g) Employee joining date.

**Constraints:**

- Write as SQL comments.

**Sample input:**

```
(No input)
```

**Sample output:**

```
Annotated list with type + 1-line reason.
```

**Solution:**

```sql
-- (a) age           -> TINYINT UNSIGNED   (range 0-255, 1 byte)
-- (b) aadhaar       -> CHAR(12)            (fixed 12 digits, leading zeros)
-- (c) email         -> VARCHAR(100)        (variable, index-friendly)
-- (d) blog body     -> MEDIUMTEXT          (can exceed 64KB)
-- (e) price INR     -> DECIMAL(10,2)       (exact money, no float errors)
-- (f) order time    -> TIMESTAMP           (auto time-zone, for audit)
-- (g) joining_date  -> DATE                (year-month-day only)
```

### Challenge 3. Employees With Constraints

**Difficulty:** Medium

Create an employees table: emp_id auto-increment PK; name required up to 50 chars; email required and unique up to 100 chars; salary DECIMAL(10,2) required and strictly positive; department ENUM of 'HR','IT','Finance','Sales','Marketing' required; hire_date DATE defaulting to current date. Then insert three valid employees and attempt one invalid insert (negative salary) to show the CHECK working.

**Constraints:**

- Use CHECK and ENUM and DEFAULT.

**Sample input:**

```
(No input)
```

**Sample output:**

```
Three valid rows. Fourth insert raises a CHECK error.
```

**Solution:**

```sql
CREATE DATABASE IF NOT EXISTS hr;
USE hr;
DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    salary DECIMAL(10,2) NOT NULL CHECK (salary > 0),
    department ENUM('HR','IT','Finance','Sales','Marketing') NOT NULL,
    hire_date DATE NOT NULL DEFAULT (CURRENT_DATE)
);

-- 3 valid inserts
INSERT INTO employees (name, email, salary, department) VALUES
    ('Kavya Nair',    'kavya@corp.com',  60000.00, 'HR'),
    ('Arjun Mehta',   'arjun@corp.com',  85000.00, 'IT'),
    ('Sneha Patel',   'sneha@corp.com',  72000.50, 'Finance');

-- 1 invalid insert (negative salary)
INSERT INTO employees (name, email, salary, department)
VALUES ('Rahul Joshi', 'rahul@corp.com', -50000.00, 'Sales');
-- Expected error:
-- ERROR 3819 (HY000): Check constraint 'employees_chk_1' is violated.
```

### Challenge 4. Orders with Foreign Key

**Difficulty:** Medium

Assuming employees from the previous challenge, create an orders table that links each order to an employee. Columns: order_id auto PK; emp_id INT required, FK to employees; amount decimal money positive; order_date datetime default CURRENT_TIMESTAMP. Insert 2 valid orders, then attempt an invalid one referencing a non-existent emp_id to show FK protection.

**Constraints:**

- Use FOREIGN KEY REFERENCES.

**Sample input:**

```
(No input)
```

**Sample output:**

```
Two valid rows. Third insert raises FK error.
```

**Solution:**

```sql
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL CHECK (amount > 0),
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (emp_id) REFERENCES employees(emp_id)
);

-- Valid
INSERT INTO orders (emp_id, amount) VALUES (1, 1500.00);
INSERT INTO orders (emp_id, amount) VALUES (2, 2499.99);

-- Invalid: emp_id 999 does not exist
INSERT INTO orders (emp_id, amount) VALUES (999, 500.00);
-- Expected:
-- ERROR 1452 (23000): Cannot add or update a child row: a foreign key constraint fails

SELECT * FROM orders;
```

### Challenge 5. DECIMAL vs FLOAT Demo

**Difficulty:** Hard

Create two tables payments_decimal and payments_float that each have one column amount of type DECIMAL(10,2) and FLOAT respectively. Insert 1000 rows of 0.01 into each (you can use a stored procedure or a large VALUES list of 10 rows and run it multiple times). Sum the amounts. Observe the difference and write a final comment explaining why DECIMAL is mandatory for money.

**Constraints:**

- Demonstrate with at least 100 rows to make the error visible.

**Sample input:**

```
(No input)
```

**Sample output:**

```
total_decimal = 10.00 exact. total_float = 9.99999... or 10.000000.. imprecise.
```

**Solution:**

```sql
DROP TABLE IF EXISTS payments_decimal;
DROP TABLE IF EXISTS payments_float;

CREATE TABLE payments_decimal (amount DECIMAL(10,2));
CREATE TABLE payments_float   (amount FLOAT);

-- Insert 10 rows of 0.01 at a time, 10 times => 100 rows
INSERT INTO payments_decimal VALUES
 (0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01);
INSERT INTO payments_decimal SELECT * FROM payments_decimal;
INSERT INTO payments_decimal SELECT * FROM payments_decimal;  -- now 40 rows
INSERT INTO payments_decimal SELECT * FROM payments_decimal;  -- now 80 rows
INSERT INTO payments_decimal VALUES
 (0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01),
 (0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01);
-- now 100 rows

INSERT INTO payments_float VALUES
 (0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01);
INSERT INTO payments_float SELECT * FROM payments_float;
INSERT INTO payments_float SELECT * FROM payments_float;
INSERT INTO payments_float SELECT * FROM payments_float;
INSERT INTO payments_float VALUES
 (0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01),
 (0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01),(0.01);

SELECT SUM(amount) AS total_decimal FROM payments_decimal;
-- +---------------+
-- | total_decimal |
-- +---------------+
-- |          1.00 |   (100 * 0.01 = exact 1.00)

SELECT SUM(amount) AS total_float FROM payments_float;
-- +----------------------+
-- | total_float          |
-- +----------------------+
-- | 0.9999999776482582   |   (binary float drift!)

-- CONCLUSION:
-- Over just 100 tiny transactions the FLOAT sum is already off by ~0.0001.
-- On 10 million real transactions, this becomes a visible mismatch.
-- Always use DECIMAL for money.
```

### Challenge 6. Course Enrollment System

**Difficulty:** Hard

Design three tables — students, courses, enrollments — for a realistic college. Include correct PRIMARY KEYs, composite PK on enrollments(student_id, course_id), FOREIGN KEYs, CHECK on marks (0-100), DEFAULT for enrollment_date, and appropriate types. Insert 3 students, 3 courses, and 5 enrollments.

**Constraints:**

- Use every constraint type you've learned.

**Sample input:**

```
(No input)
```

**Sample output:**

```
Three tables created, populated, and a SELECT joining them at the end.
```

**Solution:**

```sql
-- Reset
DROP TABLE IF EXISTS enrollments;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS courses;

-- students
CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    dob DATE NOT NULL
);

-- courses
CREATE TABLE courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(80) NOT NULL UNIQUE,
    credits TINYINT NOT NULL CHECK (credits BETWEEN 1 AND 6)
);

-- enrollments (junction)
CREATE TABLE enrollments (
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    enrolled_on DATE NOT NULL DEFAULT (CURRENT_DATE),
    marks TINYINT CHECK (marks BETWEEN 0 AND 100),
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id)  REFERENCES courses(course_id)
);

INSERT INTO students (name, email, dob) VALUES
    ('Aarav Sharma', 'aarav@college.edu', '2005-03-15'),
    ('Priya Iyer',   'priya@college.edu', '2004-11-22'),
    ('Rohan Verma',  'rohan@college.edu', '2005-07-08');

INSERT INTO courses (course_name, credits) VALUES
    ('Database Systems', 4),
    ('Data Structures',  4),
    ('Operating Systems', 3);

INSERT INTO enrollments (student_id, course_id, marks) VALUES
    (1, 1, 87),
    (1, 2, 92),
    (2, 1, 78),
    (2, 3, 85),
    (3, 2, 91);

-- Verify with a simple JOIN (covered in Chapter 11)
SELECT s.name, c.course_name, e.marks
FROM enrollments e
JOIN students s ON s.student_id = e.student_id
JOIN courses  c ON c.course_id  = e.course_id;

-- Expected: 5 rows with student name, course name, and marks.
```

---

*Notes: https://learn.modernagecoders.com/resources/sql/data-types-and-constraints/*
