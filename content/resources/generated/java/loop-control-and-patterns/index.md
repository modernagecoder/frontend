---
title: "Loop Control and Pattern Printing in Java - break, continue, Patterns | Modern Age Coders"
description: "Master Java loop control with break, continue, labeled statements, and learn to print star patterns, number patterns, and character patterns. Includes 58 practice questions with heavy pattern coding focus."
slug: loop-control-and-patterns
canonical: https://learn.modernagecoders.com/resources/java/loop-control-and-patterns/
category: "Java"
keywords: ["java break continue", "java pattern programs", "star pattern java", "java labeled break", "java number patterns", "java pyramid pattern", "floyd triangle java", "pascal triangle java"]
---
# Loop Control and Pattern Printing

**Difficulty:** Beginner  
**Reading time:** 30 min  
**Chapter:** 9  
**Practice questions:** 52

## What Are Loop Control Statements and Pattern Programs?

Loop control statements are keywords that alter the normal flow of a loop. While loops typically run until their condition becomes false, **control statements** let you exit a loop early (`break`), skip the current iteration (`continue`), or exit nested loops from an inner loop (**labeled break/continue**).

**Pattern programs** are coding problems that require printing structured shapes using characters, numbers, or symbols. They are one of the most frequently asked topics in college exams and placement interviews because they test your understanding of nested loops, loop variables, and the relationship between rows and columns.

Patterns appear simple on the surface, but solving them requires you to identify the mathematical relationship between the row number and what gets printed in each row. Once you understand this approach, you can solve any pattern.

## Why Master Loop Control and Patterns?

### 1. Loop Control Is Essential for Efficient Code

`break` lets you exit a loop as soon as you find what you are looking for, avoiding unnecessary iterations. In a search algorithm, once the target is found, continuing to iterate is wasteful. `continue` lets you skip invalid or unwanted cases without nesting your logic inside if-else blocks, keeping code flat and readable.

### 2. Pattern Programs Build Core Loop Logic

Pattern programs force you to understand how nested loops interact. The outer loop controls rows, the inner loop(s) control what gets printed in each row. This same nested loop logic is used in matrix operations, image processing, table generation, and grid-based algorithms.

### 3. Placement Interviews and Coding Rounds

Pattern printing is one of the most commonly asked topics in campus placement coding rounds, particularly for companies like TCS, Infosys, Wipro, Capgemini, and Cognizant. Many online assessments include 2-3 pattern questions. Labeled break is asked in interview vivas. Mastering these gives you easy marks.

### 4. Foundation for Advanced Algorithms

The ability to analyze the relationship between loop variables and output is the same skill needed for algorithm design. Whether you are implementing dynamic programming tables, generating permutations, or processing 2D arrays, the thinking process is identical to pattern analysis.

## Detailed Explanation

### 1. The break Statement

`break` immediately terminates the innermost loop (for, while, or do-while) or switch statement that contains it. Control passes to the statement immediately after the terminated loop.

```
for (int i = 1; i <= 10; i++) {
    if (i == 6) {
        break;
    }
    System.out.print(i + " ");
}
// Output: 1 2 3 4 5
```

When i reaches 6, break exits the loop. Iterations 6 through 10 are never executed. Use break for early exit when a condition is met (e.g., target found in search).

### 2. The continue Statement

`continue` skips the remaining body of the current iteration and jumps to the next iteration. In a for loop, the update expression runs before the next condition check. In a while loop, control goes directly to the condition check.

```
for (int i = 1; i <= 10; i++) {
    if (i % 3 == 0) {
        continue;
    }
    System.out.print(i + " ");
}
// Output: 1 2 4 5 7 8 10
```

When i is divisible by 3, the print is skipped, but the loop continues with the next value. Use continue to skip unwanted cases without deep nesting.

### 3. Labeled break and continue

In nested loops, a regular `break` exits only the innermost loop. To exit an outer loop from inside an inner loop, use a **label**. A label is an identifier followed by a colon, placed before the loop.

```
outer:
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= 5; j++) {
        if (i * j > 10) {
            break outer; // Exits BOTH loops
        }
        System.out.print(i * j + " ");
    }
    System.out.println();
}
```

`break outer;` exits the outer loop entirely, not just the inner one. Without the label, `break` would exit only the inner loop and the outer loop would continue.

Similarly, `continue outer;` skips the current iteration of the outer loop (not just the inner loop):

```
outer:
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= 5; j++) {
        if (j == 3) {
            continue outer; // Skip to next i
        }
        System.out.print(i + "" + j + " ");
    }
}
```

### 4. return from Loops

The `return` statement inside a loop exits the entire method, not just the loop. This is useful in methods that search for a value and return it as soon as it is found:

```
public static int findIndex(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i; // Exits the method entirely
        }
    }
    return -1; // Not found
}
```

### 5. How to Analyze and Build Patterns

Every pattern problem follows a systematic approach. Here is the step-by-step method:

1. **Identify rows:** Count the number of rows. This determines the outer loop (usually `for (int i = 1; i <= n; i++)`).
2. **For each row, identify columns:** Look at what is printed in each row. Count the number of characters/spaces per row.
3. **Find the relationship:** Express the count of spaces and characters in terms of the row number `i` and the total rows `n`.
4. **Write inner loops:** One inner loop for spaces (if needed), another for the character/number/star.
5. **Verify with first and last rows:** Plug in i=1 and i=n to verify your formula.

### 6. Common Star Patterns

#### Right Triangle (Stars)

```
*
* *
* * *
* * * *
* * * * *
```

Row i has i stars. Inner loop: `for (int j = 1; j <= i; j++)`

#### Inverted Right Triangle

```
* * * * *
* * * *
* * *
* *
*
```

Row i has (n - i + 1) stars.

#### Pyramid

```
        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
```

Row i has (n - i) leading spaces and (2*i - 1) stars.

#### Diamond

A diamond is a pyramid (upper half) plus an inverted pyramid (lower half).

### 7. Common Number Patterns

#### Floyd's Triangle

```
1
2 3
4 5 6
7 8 9 10
```

Numbers increase sequentially. Row i has i numbers.

#### Pascal's Triangle

```
         1
       1   1
     1   2   1
   1   3   3   1
 1   4   6   4   1
```

Each element is the sum of the two elements above it. Value = C(row, col) = row! / (col! * (row-col)!).

### 8. Character Patterns

```
A
A B
A B C
A B C D
```

Row i prints characters from 'A' to ('A' + i - 1). Cast int to char: `(char)('A' + j)`.

## Code Examples

### break and continue in Action

```java
public class BreakContinue {
    public static void main(String[] args) {
        // break: find first multiple of 7 in range
        System.out.print("First multiple of 7 after 50: ");
        for (int i = 51; i <= 100; i++) {
            if (i % 7 == 0) {
                System.out.println(i);
                break;
            }
        }

        // continue: print non-multiples of 3
        System.out.print("1-15 (skip multiples of 3): ");
        for (int i = 1; i <= 15; i++) {
            if (i % 3 == 0) continue;
            System.out.print(i + " ");
        }
        System.out.println();
    }
}
```

`break` exits the loop as soon as the first multiple of 7 after 50 is found (56). `continue` skips multiples of 3 but continues the loop for other values.

**Output:**

```
First multiple of 7 after 50: 56
1-15 (skip multiples of 3): 1 2 4 5 7 8 10 11 13 14
```

### Labeled break: Exit Nested Loops

```java
public class LabeledBreak {
    public static void main(String[] args) {
        // Find the first pair (i, j) where i * j > 15
        System.out.println("Products until > 15:");

        search:
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= 5; j++) {
                int product = i * j;
                if (product > 15) {
                    System.out.println("\nStopped at i=" + i + ", j=" + j + " (product=" + product + ")");
                    break search; // Exits BOTH loops
                }
                System.out.print(product + "\t");
            }
            System.out.println();
        }

        System.out.println("Done.");
    }
}
```

The label `search:` is placed before the outer for loop. When `break search;` executes, it exits both the inner and outer loops immediately. Without the label, only the inner loop would exit, and the outer loop would continue to the next i value.

**Output:**

```
Products until > 15:
1	2	3	4	5
2	4	6	8	10
3	6	9	12	15

Stopped at i=4, j=4 (product=16)
Done.
```

### Right Triangle Star Pattern

```java
public class RightTriangle {
    public static void main(String[] args) {
        int n = 5;

        // Right triangle (left-aligned)
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }

        System.out.println();

        // Inverted right triangle
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
```

For the right triangle, row i prints i stars. The inner loop runs from 1 to i. For the inverted version, row i prints i stars but i goes from n down to 1. These are the two most basic patterns and the foundation for more complex ones.

**Output:**

```
* 
* * 
* * * 
* * * * 
* * * * * 

* * * * * 
* * * * 
* * * 
* * 
* 
```

### Pyramid Star Pattern

```java
public class Pyramid {
    public static void main(String[] args) {
        int n = 5;

        for (int i = 1; i <= n; i++) {
            // Print leading spaces: (n - i) spaces
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            // Print stars: (2*i - 1) stars
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

Each row has two parts: leading spaces and stars. Row i has (n - i) spaces and (2*i - 1) stars. Row 1: 4 spaces, 1 star. Row 5: 0 spaces, 9 stars. The spaces decrease while stars increase, creating the centered pyramid shape.

**Output:**

```
    *
   ***
  *****
 *******
*********
```

### Diamond Pattern

```java
public class Diamond {
    public static void main(String[] args) {
        int n = 5;

        // Upper half (pyramid)
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) System.out.print(" ");
            for (int j = 1; j <= 2 * i - 1; j++) System.out.print("*");
            System.out.println();
        }

        // Lower half (inverted pyramid, skip the middle row)
        for (int i = n - 1; i >= 1; i--) {
            for (int j = 1; j <= n - i; j++) System.out.print(" ");
            for (int j = 1; j <= 2 * i - 1; j++) System.out.print("*");
            System.out.println();
        }
    }
}
```

A diamond is a pyramid (upper half) plus an inverted pyramid (lower half). The upper half goes from i = 1 to n. The lower half goes from i = n-1 down to 1 (skipping the middle row to avoid duplication). Total rows = 2n - 1.

**Output:**

```
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

### Floyd's Triangle

```java
public class FloydTriangle {
    public static void main(String[] args) {
        int n = 5;
        int num = 1;

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(num + "\t");
                num++;
            }
            System.out.println();
        }
    }
}
```

Floyd's triangle uses a running counter `num` that increments with every printed value. Row i has i numbers. The numbers are not reset per row; they continue from where the previous row left off. Total numbers = 1 + 2 + 3 + 4 + 5 = 15.

**Output:**

```
1	
2	3	
4	5	6	
7	8	9	10	
11	12	13	14	15	
```

### Pascal's Triangle

```java
public class PascalTriangle {
    public static void main(String[] args) {
        int n = 6;

        for (int i = 0; i < n; i++) {
            // Leading spaces for alignment
            for (int s = 0; s < n - i - 1; s++) {
                System.out.print("  ");
            }

            int val = 1;
            for (int j = 0; j <= i; j++) {
                System.out.printf("%4d", val);
                val = val * (i - j) / (j + 1);
            }
            System.out.println();
        }
    }
}
```

Pascal's triangle values are computed using the formula: next value = current * (i - j) / (j + 1), which calculates binomial coefficients C(i, j). Each row starts and ends with 1. Inner values are the sum of the two values above. This is a favorite in interviews.

**Output:**

```
             1
           1   1
         1   2   1
       1   3   3   1
     1   4   6   4   1
   1   5  10  10   5   1
```

### Character Pattern: Alphabet Triangle

```java
public class CharPattern {
    public static void main(String[] args) {
        int n = 5;

        // Pattern 1: A, AB, ABC, ...
        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print((char)('A' + j) + " ");
            }
            System.out.println();
        }

        System.out.println();

        // Pattern 2: A, BB, CCC, ...
        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print((char)('A' + i) + " ");
            }
            System.out.println();
        }
    }
}
```

Character patterns use `(char)('A' + offset)` to generate letters. In Pattern 1, each row prints A through the i-th letter (j changes per column). In Pattern 2, each row repeats the i-th letter (i determines the character, j determines repetition).

**Output:**

```
A 
A B 
A B C 
A B C D 
A B C D E 

A 
B B 
C C C 
D D D D 
E E E E E 
```

## Common Mistakes

### break Only Exits the Innermost Loop

**Wrong:**

```
// Intention: exit both loops when found
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) {
            break; // Only exits inner loop!
        }
        System.out.print(i + "" + j + " ");
    }
}
// Outer loop continues after inner break
```

The outer loop continues. break exits only the inner loop.

**Correct:**

```
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) {
            break outer; // Exits BOTH loops
        }
        System.out.print(i + "" + j + " ");
    }
}
```

Without a label, `break` only exits the innermost enclosing loop. To break out of an outer loop from within an inner loop, use a labeled break. Place the label (e.g., `outer:`) before the outer loop and use `break outer;`.

### Infinite Loop with continue (Missing Update Before continue)

**Wrong:**

```
int i = 0;
while (i < 10) {
    if (i == 5) {
        continue; // i is never incremented past 5!
    }
    System.out.println(i);
    i++;
}
```

Infinite loop. When i = 5, continue skips i++, so i stays at 5 forever.

**Correct:**

```
int i = 0;
while (i < 10) {
    i++;
    if (i == 5) {
        continue; // Now i was already incremented
    }
    System.out.println(i);
}
```

In a while loop, if the update (`i++`) comes after the continue, the continue skips it, causing an infinite loop. Move the increment before the continue, or use a for loop where the update happens automatically.

### Off-by-One in Pattern Rows or Columns

**Wrong:**

```
// Intended: 5-row right triangle
int n = 5;
for (int i = 0; i < n; i++) {
    for (int j = 0; j < i; j++) { // Bug: prints 0 stars in row 0
        System.out.print("* ");
    }
    System.out.println();
}
```

Row 0 prints nothing (0 stars). Only 4 rows have stars instead of 5.

**Correct:**

```
int n = 5;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("* ");
    }
    System.out.println();
}
```

When using 0-based indexing (i starting at 0), the inner condition `j < i` gives 0 iterations for i = 0. Either start i at 1 (1-indexed) or use `j <= i` (0-indexed). Always verify with the first and last row values.

### Forgetting Spaces in Centered Patterns

**Wrong:**

```
// Intended: pyramid
int n = 5;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= 2 * i - 1; j++) {
        System.out.print("*");
    }
    System.out.println();
}
```

Produces a left-aligned pattern, not a centered pyramid. Leading spaces are missing.

**Correct:**

```
int n = 5;
for (int i = 1; i <= n; i++) {
    for (int s = 1; s <= n - i; s++) {
        System.out.print(" ");
    }
    for (int j = 1; j <= 2 * i - 1; j++) {
        System.out.print("*");
    }
    System.out.println();
}
```

Centered patterns like pyramids and diamonds require leading spaces. Row i in a pyramid needs (n - i) leading spaces before the stars. Without the space loop, the pattern is left-aligned.

## Summary

- break immediately exits the innermost loop or switch. Use it for early termination when a condition is met (e.g., search found).
- continue skips the rest of the current iteration and jumps to the next iteration. Use it to skip unwanted cases without deep nesting.
- In a while loop, ensure the update statement runs before continue, or you risk an infinite loop.
- Labeled break (break label;) exits an outer loop from within an inner loop. Place the label (name:) before the outer loop.
- Labeled continue (continue label;) skips to the next iteration of the outer loop, not the inner loop.
- return inside a loop exits the entire method, not just the loop.
- Pattern analysis approach: (1) count rows for outer loop, (2) for each row identify spaces and characters, (3) express counts in terms of row number i and total rows n, (4) write inner loops.
- Right triangle: row i has i stars. Inverted: row i has (n-i+1) stars.
- Pyramid: row i has (n-i) leading spaces and (2i-1) stars. Diamond = pyramid + inverted pyramid.
- Floyd's triangle uses a running counter. Pascal's triangle uses binomial coefficients: C(n,k) = n! / (k! * (n-k)!).
- Character patterns use (char)('A' + offset) to generate letters.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/loop-control-and-patterns/*
*Practice questions: https://learn.modernagecoders.com/resources/java/loop-control-and-patterns/practice/*
