---
title: "Pattern Printing in Python - Star, Number, Alphabet Patterns Explained | Modern Age Coders"
description: "Learn how to print star patterns, number patterns, alphabet patterns, pyramids, diamonds, and hollow patterns in Python. Includes 58 practice questions with coding challenges and output prediction."
slug: pattern-printing
canonical: https://learn.modernagecoders.com/resources/python/pattern-printing/
category: "Python"
keywords: ["python pattern programs", "star pattern python", "number pattern python", "python pattern printing for beginners", "pyramid pattern python", "diamond pattern python", "Floyd triangle python", "hollow pattern python"]
---
# Pattern Printing in Python

**Difficulty:** Beginner  
**Reading time:** 20 min  
**Chapter:** 10  
**Practice questions:** 57

## What Is Pattern Printing?

**Pattern printing** is the process of using loops (usually nested loops) to display a specific arrangement of characters, numbers, or symbols on the screen. Patterns form recognizable shapes like triangles, pyramids, diamonds, and grids.

Here is a simple example of a right triangle pattern made with stars:

```
*
* *
* * *
* * * *
* * * * *
```

To create this pattern, you need to understand that it has 5 **rows**, and row number *i* contains exactly *i* stars. This observation is the key to writing the code: an outer loop controls the rows, and an inner loop controls how many stars to print in each row.

### The Rows and Columns Approach

Every pattern can be broken down into **rows** and **columns**. To analyze any pattern:

1. **Count the rows** - How many lines does the pattern have?
2. **For each row, determine the columns** - What is printed in each position? How many characters (stars, spaces, numbers)?
3. **Identify the relationship** - How does the number of characters in each row relate to the row number?

Once you find the relationship between the row number and what gets printed, writing the nested loop becomes straightforward.

## Why Is Pattern Printing Important?

Pattern printing might look like a simple exercise, but it teaches some of the most important programming skills:

### 1. Mastering Nested Loops

Patterns require nested loops (a loop inside a loop). Understanding how the inner loop runs completely for each iteration of the outer loop is fundamental to programming. Pattern printing is the best way to build this intuition.

### 2. Developing Logical Thinking

Before you can write the code for a pattern, you must analyze it: How many rows? How many spaces? How many stars per row? What is the mathematical relationship? This analytical process strengthens your problem-solving skills.

### 3. Interview and Exam Preparation

Pattern printing questions are extremely common in school exams, college entrance tests, and programming interviews. Being comfortable with patterns gives you a significant advantage.

### 4. Foundation for Complex Problems

The skills you develop in pattern printing (controlling loop boundaries, tracking multiple variables, building output character by character) apply directly to more complex problems like matrix operations, image processing, and game development.

### 5. Understanding Output Formatting

Patterns teach you how to control output precisely: printing on the same line with `end=""`, using spaces for alignment, and moving to a new line with `print()`. These are essential formatting skills.

## Detailed Explanation

### 1. The Basic Framework

Almost every pattern follows this structure:

```
for i in range(n):           # Outer loop: controls rows
    for j in range(...):      # Inner loop 1: prints spaces (if needed)
        print(" ", end="")
    for j in range(...):      # Inner loop 2: prints stars/numbers
        print("*", end="")
    print()                   # Move to next line
```

The outer loop runs once for each row. Inside it, you may have one or more inner loops: one for spaces (to create indentation) and one for the actual characters. The `print()` at the end moves the cursor to the next line.

### 2. Right Triangle (Increasing Stars)

This is the simplest and most fundamental pattern:

```
*
* *
* * *
* * * *
* * * * *
```

Analysis: Row 1 has 1 star, row 2 has 2 stars, ..., row i has i stars. The number of stars equals the row number.

```
n = 5
for i in range(1, n + 1):
    for j in range(i):
        print("*", end=" ")
    print()
```

The outer loop runs from 1 to 5. For each row i, the inner loop runs i times, printing a star each time.

### 3. Inverted Right Triangle

```
* * * * *
* * * *
* * *
* *
*
```

Analysis: Row 1 has 5 stars, row 2 has 4, ..., row i has (n - i + 1) stars. The stars decrease as the row number increases.

```
n = 5
for i in range(n, 0, -1):
    for j in range(i):
        print("*", end=" ")
    print()
```

### 4. Pyramid (Centered Triangle)

```
    *
   * *
  * * *
 * * * *
* * * * *
```

Analysis: This pattern requires **leading spaces** to center the stars. Row i has (n - i) spaces followed by i stars. The spaces decrease as stars increase.

```
n = 5
for i in range(1, n + 1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(i):
        print("* ", end="")
    print()
```

Notice the space after the star (`"* "`) in the second inner loop. This spacing between stars is what makes the pyramid look symmetric.

### 5. Diamond Pattern

A diamond is a pyramid followed by an inverted pyramid:

```
    *
   * *
  * * *
 * * * *
* * * * *
 * * * *
  * * *
   * *
    *
```

You build a diamond by first printing the top half (pyramid) and then the bottom half (inverted pyramid without repeating the middle row).

```
n = 5
# Top half
for i in range(1, n + 1):
    print(" " * (n - i) + "* " * i)
# Bottom half
for i in range(n - 1, 0, -1):
    print(" " * (n - i) + "* " * i)
```

### 6. Number Patterns

#### Sequential Numbers in a Triangle

```
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

This is like the star triangle, but printing j instead of a star:

```
n = 5
for i in range(1, n + 1):
    for j in range(1, i + 1):
        print(j, end=" ")
    print()
```

#### Floyd's Triangle

```
1
2 3
4 5 6
7 8 9 10
```

In Floyd's triangle, numbers increase continuously across all rows. Use a counter variable:

```
n = 4
num = 1
for i in range(1, n + 1):
    for j in range(i):
        print(num, end=" ")
        num += 1
    print()
```

#### Multiplication Table Pattern

```
1
2  4
3  6  9
4  8  12  16
5  10  15  20  25
```

Each cell contains i * j:

```
n = 5
for i in range(1, n + 1):
    for j in range(1, i + 1):
        print(i * j, end="\t")
    print()
```

### 7. Alphabet Patterns

You can convert numbers to letters using `chr()`. The character 'A' has ASCII value 65, 'B' is 66, and so on. So `chr(65 + i)` gives the (i+1)th letter of the alphabet.

```
A
A B
A B C
A B C D
```

```
n = 4
for i in range(n):
    for j in range(i + 1):
        print(chr(65 + j), end=" ")
    print()
```

### 8. Hollow Patterns

A hollow pattern prints characters only at the **borders** (first row, last row, first column, last column) and spaces everywhere else.

```
* * * * *
*       *
*       *
*       *
* * * * *
```

The logic: print a star if it is the first row, last row, first column, or last column. Otherwise, print a space.

```
n = 5
for i in range(n):
    for j in range(n):
        if i == 0 or i == n-1 or j == 0 or j == n-1:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()
```

### 9. How to Analyze Any Pattern

When you encounter a new pattern, follow these steps:

1. **Number the rows** starting from 1 (or 0).
2. **For each row, count three things**: leading spaces, characters printed, and what those characters are.
3. **Find the formula**: Express spaces and characters as a function of the row number and total rows.
4. **Write the outer loop** for the rows.
5. **Write inner loop(s)** for spaces and characters using the formulas.

Example analysis for a pyramid with n = 4:

Row (i)SpacesStars131222313404

Formulas: Spaces = n - i = 4 - i. Stars = i. These formulas directly become the `range()` arguments in your inner loops.

## Code Examples

### Right Triangle - Stars

```python
n = 5
for i in range(1, n + 1):
    for j in range(i):
        print("*", end=" ")
    print()
```

The outer loop runs from 1 to 5 (controlling rows). For row i, the inner loop runs i times, printing a star with a trailing space each time. After the inner loop, `print()` moves to the next line. Row 1 gets 1 star, row 2 gets 2 stars, and so on.

**Output:**

```
* 
* * 
* * * 
* * * * 
* * * * * 
```

### Inverted Right Triangle - Stars

```python
n = 5
for i in range(n, 0, -1):
    for j in range(i):
        print("*", end=" ")
    print()
```

By starting the outer loop at n and counting down to 1, the first row gets 5 stars, the second gets 4, and so on. The inner loop simply runs i times for each row. This is the mirror image of the right triangle.

**Output:**

```
* * * * * 
* * * * 
* * * 
* * 
* 
```

### Centered Pyramid

```python
n = 5
for i in range(1, n + 1):
    # Print spaces
    for j in range(n - i):
        print(" ", end="")
    # Print stars
    for j in range(i):
        print("* ", end="")
    print()
```

This pattern has two inner loops per row. The first prints (n - i) spaces to create indentation. The second prints i stars with spaces between them. As i increases, spaces decrease and stars increase, creating a centered pyramid effect.

**Output:**

```
    * 
   * * 
  * * * 
 * * * * 
* * * * * 
```

### Number Triangle (1 to i per row)

```python
n = 5
for i in range(1, n + 1):
    for j in range(1, i + 1):
        print(j, end=" ")
    print()
```

Instead of printing stars, we print the value of j. The inner loop runs from 1 to i, so each row shows consecutive numbers starting from 1. Row 3 prints: 1 2 3. Row 5 prints: 1 2 3 4 5.

**Output:**

```
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
```

### Floyd's Triangle

```python
n = 5
num = 1
for i in range(1, n + 1):
    for j in range(i):
        print(num, end=" ")
        num += 1
    print()
```

Floyd's triangle uses a single counter variable `num` that starts at 1 and increments with every print, regardless of which row we are on. The counter does not reset between rows. Row 1: 1. Row 2: 2 3. Row 3: 4 5 6. And so on.

**Output:**

```
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
```

### Alphabet Triangle

```python
n = 5
for i in range(n):
    for j in range(i + 1):
        print(chr(65 + j), end=" ")
    print()
```

`chr(65)` is 'A', `chr(66)` is 'B', and so on. By printing `chr(65 + j)`, we get letters starting from A. Each row starts from A and goes up to the row's letter: row 1 prints A, row 2 prints A B, row 3 prints A B C.

**Output:**

```
A 
A B 
A B C 
A B C D 
A B C D E 
```

### Hollow Square

```python
n = 5
for i in range(n):
    for j in range(n):
        if i == 0 or i == n - 1 or j == 0 or j == n - 1:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()
```

A hollow square prints stars only on the borders: first row (i == 0), last row (i == n-1), first column (j == 0), and last column (j == n-1). All interior positions get a space. The `or` operator checks if we are on any border.

**Output:**

```
* * * * * 
*       * 
*       * 
*       * 
* * * * * 
```

### Diamond Pattern

```python
n = 5
# Top half (including middle row)
for i in range(1, n + 1):
    print(" " * (n - i) + "* " * i)

# Bottom half
for i in range(n - 1, 0, -1):
    print(" " * (n - i) + "* " * i)
```

The diamond is split into two halves. The top half is a pyramid (rows 1 to n). The bottom half is an inverted pyramid (rows n-1 down to 1), which avoids repeating the middle row. String multiplication (`" " * count`) is used as a shortcut for the space loop.

**Output:**

```
    * 
   * * 
  * * * 
 * * * * 
* * * * * 
 * * * * 
  * * * 
   * * 
    * 
```

## Common Mistakes

### Forgetting print() After Inner Loop

**Wrong:**

```
n = 3
for i in range(1, n + 1):
    for j in range(i):
        print("*", end=" ")
```

All stars print on one line: * * * * * * instead of forming a triangle.

**Correct:**

```
n = 3
for i in range(1, n + 1):
    for j in range(i):
        print("*", end=" ")
    print()  # Move to the next line after each row
```

Without `print()` after the inner loop, there is no newline between rows. All stars appear on the same line. The `print()` call with no arguments prints nothing but moves the cursor to the next line, which is essential for creating rows.

### Off-by-One Error in Range

**Wrong:**

```
# Trying to print 5 rows but getting only 4
n = 5
for i in range(1, n):  # Should be range(1, n + 1)
    print("*" * i)
```

Only 4 rows are printed instead of 5.

**Correct:**

```
n = 5
for i in range(1, n + 1):  # Include n
    print("*" * i)
```

`range(1, n)` generates 1 to n-1 (4 values when n=5). To get rows 1 through n, use `range(1, n + 1)`. This off-by-one error is the most common pattern printing mistake.

### Wrong Number of Spaces in Pyramid

**Wrong:**

```
n = 5
for i in range(1, n + 1):
    for j in range(n - i):
        print(" ", end=" ")  # Printing space with extra space
    for j in range(i):
        print("*", end=" ")
    print()
```

The pyramid looks stretched or misaligned because each space character has an extra trailing space.

**Correct:**

```
n = 5
for i in range(1, n + 1):
    for j in range(n - i):
        print(" ", end="")  # No extra space after the space
    for j in range(i):
        print("* ", end="")
    print()
```

In pyramid patterns, the space characters before the stars should use `end=""` (no extra space). Only the stars need spacing between them. Using `end=" "` for spaces doubles the indentation and distorts the pattern.

### Resetting Counter Inside Loop in Floyd's Triangle

**Wrong:**

```
n = 4
for i in range(1, n + 1):
    num = 1  # Wrong! Resets every row
    for j in range(i):
        print(num, end=" ")
        num += 1
    print()
```

Output is 1 / 1 2 / 1 2 3 / 1 2 3 4 instead of Floyd's triangle.

**Correct:**

```
n = 4
num = 1  # Initialize OUTSIDE the outer loop
for i in range(1, n + 1):
    for j in range(i):
        print(num, end=" ")
        num += 1
    print()
```

In Floyd's triangle, the counter must be continuous across rows (1, 2, 3, 4, 5, 6...). If you initialize `num = 1` inside the outer loop, it resets to 1 at the start of every row, producing a number triangle instead of Floyd's triangle.

### Using Wrong Loop Variable in Nested Loop

**Wrong:**

```
n = 4
for i in range(1, n + 1):
    for j in range(i):
        print(i, end=" ")  # Should be j + 1, not i
    print()
```

Output repeats the row number: 1 / 2 2 / 3 3 3 / 4 4 4 4 instead of 1 / 1 2 / 1 2 3 / 1 2 3 4.

**Correct:**

```
n = 4
for i in range(1, n + 1):
    for j in range(1, i + 1):
        print(j, end=" ")
    print()
```

Using `i` (the outer loop variable) instead of `j` (the inner loop variable) prints the row number repeatedly. For sequential numbers in each row (1, 2, 3...), you need to print the inner loop variable `j`.

### Diamond Bottom Half Starting at Wrong Row

**Wrong:**

```
n = 5
# Top half
for i in range(1, n + 1):
    print(" " * (n - i) + "* " * i)
# Bottom half - wrong! starts at n, duplicating the middle row
for i in range(n, 0, -1):
    print(" " * (n - i) + "* " * i)
```

The middle row (5 stars) is printed twice, making the diamond look wrong.

**Correct:**

```
n = 5
for i in range(1, n + 1):
    print(" " * (n - i) + "* " * i)
for i in range(n - 1, 0, -1):  # Start at n-1 to avoid duplicating the middle
    print(" " * (n - i) + "* " * i)
```

The bottom half of a diamond should start at n-1 (not n) to avoid printing the middle row twice. The top half already includes the widest row. The bottom half begins one row narrower.

## Summary

- Pattern printing uses nested loops: the outer loop controls rows and inner loops control what is printed in each row (spaces and characters).
- To analyze any pattern, number the rows and for each row count: leading spaces, characters printed, and their values. Express these as formulas based on the row number.
- Right triangle: row i has i stars. Inner loop runs range(i). No spaces needed.
- Inverted right triangle: row i has (n - i + 1) stars. Start the outer loop from n and count down, or adjust the inner loop range.
- Pyramid (centered): row i has (n - i) spaces followed by i stars. Two inner loops are needed: one for spaces, one for stars.
- Diamond: combine a pyramid (top half) with an inverted pyramid (bottom half). Start the bottom half at n-1 to avoid duplicating the middle row.
- Number patterns use the same loop structure as star patterns but print numbers (j, i*j, or a continuous counter) instead of stars.
- Alphabet patterns use chr(65 + j) to convert numbers to letters (A=65, B=66, etc.).
- Hollow patterns print characters only at the borders (first/last row, first/last column) and spaces in the interior.
- Common mistakes: forgetting print() after the inner loop, off-by-one errors in range(), using the wrong loop variable, and wrong spacing between characters.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/python/pattern-printing/*
*Practice questions: https://learn.modernagecoders.com/resources/python/pattern-printing/practice/*
