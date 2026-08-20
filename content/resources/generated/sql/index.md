---
title: "SQL Tutorial: Databases, Basics to Advanced"
description: "Learn SQL from scratch with our detailed chapter-by-chapter guide. Covers SELECT, JOINS, subqueries, window functions, indexes, transactions, and database design. Each topic has clear notes, real query examples, and 50+ practice questions including interview favorites."
slug: sql
canonical: https://learn.modernagecoders.com/resources/sql
---
# SQL Tutorial: Databases, Basics to Advanced

Every app you use stores its data somewhere. Your Instagram posts, YouTube watch history, bank transactions, school marks, all of it lives in databases. SQL (Structured Query Language) is how we talk to these databases. If you want to become a data analyst, backend developer, data scientist, or just work with data at any company, SQL is non-negotiable.

This guide takes you from writing your first SELECT query to mastering advanced concepts like window functions, CTEs, indexing strategies, and query optimization. We use MySQL syntax primarily, but cover portable SQL that works on PostgreSQL, SQL Server, and SQLite too.

Each chapter has 50+ practice questions including real interview queries asked at companies like Amazon, Google, Flipkart, and Zomato. Every concept is explained with actual sample tables and expected results so you can copy, paste, and run them. This is not theory. This is SQL you will use every day in your career.

## Chapters (25)

1. [Introduction to SQL and Databases](https://learn.modernagecoders.com/resources/sql/introduction-to-sql-and-databases) — Understand what databases are, why they matter, and how SQL lets us store, retrieve, and manage data. *(Beginner)*
   Practice: https://learn.modernagecoders.com/resources/sql/introduction-to-sql-and-databases/practice
2. [Setting Up MySQL and Your First Query](https://learn.modernagecoders.com/resources/sql/setting-up-mysql-and-first-query) — Install MySQL, use MySQL Workbench or CLI, create your first database and table, and run your first SELECT. *(Beginner)*
   Practice: https://learn.modernagecoders.com/resources/sql/setting-up-mysql-and-first-query/practice
3. [Data Types and Constraints (NOT NULL, UNIQUE, PRIMARY KEY)](https://learn.modernagecoders.com/resources/sql/data-types-and-constraints) — Learn INT, VARCHAR, TEXT, DATE, DATETIME, BOOLEAN, and constraints that keep your data clean. *(Beginner)*
   Practice: https://learn.modernagecoders.com/resources/sql/data-types-and-constraints/practice
4. [CREATE, ALTER, DROP Tables](https://learn.modernagecoders.com/resources/sql/creating-and-modifying-tables) — Create tables, add/remove columns with ALTER, drop tables, truncate, and rename, the DDL commands. *(Beginner)*
   Practice: https://learn.modernagecoders.com/resources/sql/creating-and-modifying-tables/practice
5. [INSERT, UPDATE, DELETE - Manipulating Data](https://learn.modernagecoders.com/resources/sql/insert-update-delete) — Add new rows with INSERT, change data with UPDATE, remove rows with DELETE, and the WHERE clause. *(Beginner)*
   Practice: https://learn.modernagecoders.com/resources/sql/insert-update-delete/practice
6. [SELECT Queries and the WHERE Clause](https://learn.modernagecoders.com/resources/sql/select-basics-and-where) — Retrieve data with SELECT, filter rows with WHERE, use comparison operators, AND, OR, NOT, IN, BETWEEN. *(Beginner)*
   Practice: https://learn.modernagecoders.com/resources/sql/select-basics-and-where/practice
7. [ORDER BY, LIMIT, and DISTINCT](https://learn.modernagecoders.com/resources/sql/sorting-and-limiting) — Sort results, limit rows returned, remove duplicates, and use OFFSET for pagination. *(Beginner)*
   Practice: https://learn.modernagecoders.com/resources/sql/sorting-and-limiting/practice
8. [LIKE Pattern Matching and NULL Handling](https://learn.modernagecoders.com/resources/sql/pattern-matching-and-null) — Search with LIKE, wildcards %, _, handle NULL with IS NULL, IS NOT NULL, COALESCE, IFNULL. *(Beginner)*
   Practice: https://learn.modernagecoders.com/resources/sql/pattern-matching-and-null/practice
9. [Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)](https://learn.modernagecoders.com/resources/sql/aggregate-functions) — Summarize data with COUNT, SUM, AVG, MIN, MAX. Understand when NULL is counted and when it isn't. *(Intermediate)*
   Practice: https://learn.modernagecoders.com/resources/sql/aggregate-functions/practice
10. [GROUP BY and HAVING](https://learn.modernagecoders.com/resources/sql/group-by-and-having) — Group rows for aggregation, filter groups with HAVING, and understand the order of SQL clauses. *(Intermediate)*
   Practice: https://learn.modernagecoders.com/resources/sql/group-by-and-having/practice
11. [JOINS - INNER, LEFT, RIGHT, FULL OUTER, CROSS](https://learn.modernagecoders.com/resources/sql/joins-inner-and-outer) — Combine data from multiple tables with all join types. Understand when to use each with clear Venn diagrams. *(Intermediate)*
   Practice: https://learn.modernagecoders.com/resources/sql/joins-inner-and-outer/practice
12. [Self Joins and Multi-Table Queries](https://learn.modernagecoders.com/resources/sql/self-joins-and-multi-table) — Join a table with itself for hierarchical data. Combine 3+ tables and avoid common join pitfalls. *(Intermediate)*
   Practice: https://learn.modernagecoders.com/resources/sql/self-joins-and-multi-table/practice
13. [Subqueries (Nested Queries) and EXISTS](https://learn.modernagecoders.com/resources/sql/subqueries-and-nested-queries) — Write queries inside queries. Master scalar, row, and correlated subqueries. Use EXISTS vs IN. *(Intermediate)*
   Practice: https://learn.modernagecoders.com/resources/sql/subqueries-and-nested-queries/practice
14. [UNION, UNION ALL, INTERSECT, EXCEPT](https://learn.modernagecoders.com/resources/sql/set-operations) — Combine results from multiple queries with set operations. Understand performance implications. *(Intermediate)*
   Practice: https://learn.modernagecoders.com/resources/sql/set-operations/practice
15. [String Functions in SQL](https://learn.modernagecoders.com/resources/sql/string-functions) — Manipulate text with CONCAT, SUBSTRING, UPPER, LOWER, TRIM, REPLACE, LENGTH, LOCATE, LEFT, RIGHT. *(Intermediate)*
   Practice: https://learn.modernagecoders.com/resources/sql/string-functions/practice
16. [Date and Time Functions](https://learn.modernagecoders.com/resources/sql/date-and-time-functions) — Work with dates using NOW, CURDATE, DATEDIFF, DATE_ADD, DATE_FORMAT, YEAR, MONTH, DAY, and time zones. *(Intermediate)*
   Practice: https://learn.modernagecoders.com/resources/sql/date-and-time-functions/practice
17. [Conditional Logic - CASE WHEN, IF, IFNULL](https://learn.modernagecoders.com/resources/sql/conditional-logic-case-when) — Add if-else logic to queries with CASE expressions, IF function, and conditional aggregation patterns. *(Intermediate)*
   Practice: https://learn.modernagecoders.com/resources/sql/conditional-logic-case-when/practice
18. [Window Functions - ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD](https://learn.modernagecoders.com/resources/sql/window-functions) — Master window functions with OVER(), PARTITION BY, and ORDER BY. Essential for data analyst interviews. *(Advanced)*
   Practice: https://learn.modernagecoders.com/resources/sql/window-functions/practice
19. [Common Table Expressions (CTEs) and Recursive Queries](https://learn.modernagecoders.com/resources/sql/common-table-expressions) — Write cleaner queries with WITH clause. Use recursive CTEs for hierarchies and sequences. *(Advanced)*
   Practice: https://learn.modernagecoders.com/resources/sql/common-table-expressions/practice
20. [Indexes and Query Performance](https://learn.modernagecoders.com/resources/sql/indexes-and-performance) — Understand B-Tree indexes, when to add indexes, composite indexes, EXPLAIN plans, and query optimization. *(Advanced)*
   Practice: https://learn.modernagecoders.com/resources/sql/indexes-and-performance/practice
21. [Views, Stored Procedures, and Functions](https://learn.modernagecoders.com/resources/sql/views-and-stored-procedures) — Create reusable views, write stored procedures with parameters, loops, and user-defined functions. *(Advanced)*
   Practice: https://learn.modernagecoders.com/resources/sql/views-and-stored-procedures/practice
22. [Triggers and Scheduled Events](https://learn.modernagecoders.com/resources/sql/triggers-and-events) — Automate database actions with BEFORE/AFTER INSERT/UPDATE/DELETE triggers and scheduled events. *(Advanced)*
   Practice: https://learn.modernagecoders.com/resources/sql/triggers-and-events/practice
23. [Transactions and ACID Properties](https://learn.modernagecoders.com/resources/sql/transactions-and-acid) — Use BEGIN, COMMIT, ROLLBACK, SAVEPOINT. Understand ACID, isolation levels, and deadlocks. *(Advanced)*
   Practice: https://learn.modernagecoders.com/resources/sql/transactions-and-acid/practice
24. [Database Design and Normalization (1NF, 2NF, 3NF, BCNF)](https://learn.modernagecoders.com/resources/sql/database-design-and-normalization) — Design clean schemas. Master the normal forms with real examples, ER diagrams, and denormalization trade-offs. *(Advanced)*
   Practice: https://learn.modernagecoders.com/resources/sql/database-design-and-normalization/practice
25. [SQL Interview Masterclass - Top 30 Questions Solved](https://learn.modernagecoders.com/resources/sql/sql-interview-masterclass) — Solve the most-asked SQL interview questions: Nth highest salary, duplicates, consecutive rows, running totals, pivoting. *(Advanced)*
   Practice: https://learn.modernagecoders.com/resources/sql/sql-interview-masterclass/practice

## Learn with a mentor

Want to master SQL and databases with a mentor? [Explore our MySQL Masterclass](https://learn.modernagecoders.com/courses/mysql-database-complete-masterclass-college)

---

*Free SQL resources by Modern Age Coders — live online coding and maths classes for ages 6-67. All resources: https://learn.modernagecoders.com/resources*
