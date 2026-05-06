---
title: "Practice: Loop Control and Pattern Printing"
description: "52 practice problems for Loop Control and Pattern Printing in Java"
slug: loop-control-and-patterns-practice
canonical: https://learn.modernagecoders.com/resources/java/loop-control-and-patterns/practice
category: "Java"
---
# Practice: Loop Control and Pattern Printing

**Total questions:** 52

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
for (int i = 1; i <= 5; i++) {
    if (i == 3) break;
    System.out.print(i + " ");
}
```

*Hint:* break exits the loop when i is 3.

**Answer:** `1 2 `

i=1: print 1. i=2: print 2. i=3: break exits the loop. 3, 4, 5 are never reached.

### Q2. [Easy] What is the output?

```
for (int i = 1; i <= 5; i++) {
    if (i == 3) continue;
    System.out.print(i + " ");
}
```

*Hint:* continue skips the current iteration.

**Answer:** `1 2 4 5 `

i=3 triggers continue, which skips the print for that iteration. All other values print normally.

### Q3. [Easy] What is the output?

```
for (int i = 10; i >= 1; i--) {
    if (i % 2 != 0) continue;
    System.out.print(i + " ");
}
```

*Hint:* Odd numbers are skipped by continue.

**Answer:** `10 8 6 4 2 `

When i is odd, continue skips the print. Only even numbers (10, 8, 6, 4, 2) are printed.

### Q4. [Easy] How many stars are printed?

```
for (int i = 1; i <= 4; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("*");
    }
    System.out.println();
}
```

*Hint:* Row 1: 1 star, Row 2: 2, Row 3: 3, Row 4: 4.

**Answer:** `10` stars total (1+2+3+4)

Row 1: 1 star. Row 2: 2. Row 3: 3. Row 4: 4. Total = 1+2+3+4 = 10.

### Q5. [Medium] What is the output?

```
outer:
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (j == 2) continue outer;
        System.out.print(i + "" + j + " ");
    }
}
```

*Hint:* continue outer skips to the next iteration of the outer loop.

**Answer:** `11 21 31 `

For each i, j starts at 1 (prints i1). When j = 2, `continue outer` skips to the next i. j = 3 is never reached. So: 11, 21, 31.

### Q6. [Medium] What is the output?

```
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) break outer;
        System.out.print(i + "" + j + " ");
    }
}
```

*Hint:* break outer exits both loops at i=1, j=1.

**Answer:** `00 01 02 10 `

i=0: prints 00, 01, 02. i=1: prints 10, then j=1 triggers break outer which exits both loops entirely.

### Q7. [Medium] What is the output?

```
int n = 4;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i; j++) {
        System.out.print(" ");
    }
    for (int j = 1; j <= i; j++) {
        System.out.print(i + " ");
    }
    System.out.println();
}
```

*Hint:* Each row prints (n-i) spaces then i copies of the row number.

**Answer:** ```
   1 
  2 2 
 3 3 3 
4 4 4 4 
```

Row 1: 3 spaces, then "1 " once. Row 2: 2 spaces, then "2 " twice. Row 3: 1 space, then "3 " three times. Row 4: 0 spaces, then "4 " four times.

### Q8. [Medium] What is the output?

```
int num = 1;
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print(num++ + " ");
    }
    System.out.println();
}
```

*Hint:* This is Floyd's triangle. num increments continuously.

**Answer:** `1 `
`2 3 `
`4 5 6 `

Floyd's triangle: num starts at 1 and increments globally. Row 1: 1. Row 2: 2, 3. Row 3: 4, 5, 6.

### Q9. [Hard] What is the output?

```
for (int i = 1; i <= 4; i++) {
    for (int j = 1; j <= 4; j++) {
        if (i + j == 5) {
            System.out.print("* ");
        } else {
            System.out.print("  ");
        }
    }
    System.out.println();
}
```

*Hint:* Print * only where i + j equals 5. Otherwise print spaces.

**Answer:** ```
      * 
    *   
  *     
*       
```

Stars appear at: (1,4), (2,3), (3,2), (4,1) where i+j=5. This forms a diagonal from top-right to bottom-left.

### Q10. [Hard] What is the output?

```
int n = 4;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) {
        if (i == 1 || i == n || j == 1 || j == n) {
            System.out.print("* ");
        } else {
            System.out.print("  ");
        }
    }
    System.out.println();
}
```

*Hint:* Stars print on the borders (first/last row, first/last column).

**Answer:** ```
* * * * 
*     * 
*     * 
* * * * 
```

Stars are printed on the boundary: first row (i=1), last row (i=4), first column (j=1), last column (j=4). Interior cells are spaces. This creates a hollow rectangle.

### Q11. [Medium] What is the difference between break and continue? When would you use each?

*Hint:* Think about whether you want to stop completely or skip one iteration.

**Answer:** `break` terminates the entire loop immediately. `continue` skips only the current iteration and proceeds to the next. Use break when a search is complete or an error requires stopping. Use continue when certain iterations should be skipped (e.g., skipping invalid inputs) while the loop continues processing others.

Example: searching an array for a value (use break once found). Processing user inputs but skipping empty lines (use continue for empty, process for non-empty).

### Q12. [Hard] Describe the step-by-step approach to solve any pattern printing problem.

*Hint:* Think about rows, columns, spaces, and the relationship with i and n.

**Answer:** Step 1: Count total rows (determines outer loop from 1 to n). Step 2: For each row, identify what is printed (spaces and characters). Step 3: Express the count of spaces and characters as a formula in terms of row number i and total rows n. Step 4: Write inner loop(s) for spaces and characters. Step 5: Verify by plugging in i=1 and i=n to check the first and last rows match expectations.

For example, a pyramid: n rows, row i has (n-i) spaces and (2i-1) stars. Verify: row 1 has (n-1) spaces and 1 star (correct). Row n has 0 spaces and (2n-1) stars (correct).

### Q13. [Easy] What is the output?

```
for (int i = 1; i <= 5; i++) {
    if (i == 4) break;
    if (i == 2) continue;
    System.out.print(i + " ");
}
```

*Hint:* continue skips 2, break stops at 4.

**Answer:** `1 3 `

i=1: print 1. i=2: continue (skip). i=3: print 3. i=4: break. Only 1 and 3 print.

### Q14. [Medium] What is the output?

```
int n = 3;
for (int i = n; i >= 1; i--) {
    for (int j = 1; j <= i; j++) {
        System.out.print("* ");
    }
    System.out.println();
}
```

*Hint:* Inverted right triangle: row 1 has 3 stars, row 2 has 2, row 3 has 1.

**Answer:** `* * * `
`* * `
`* `

i goes from 3 to 1. Row with i=3: 3 stars. i=2: 2 stars. i=1: 1 star.

### Q15. [Medium] What is the output?

```
for (int i = 1; i <= 4; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print(j + " ");
    }
    System.out.println();
}
```

*Hint:* Each row prints 1 through i.

**Answer:** `1 `
`1 2 `
`1 2 3 `
`1 2 3 4 `

Row 1: 1. Row 2: 1 2. Row 3: 1 2 3. Row 4: 1 2 3 4.

### Q16. [Hard] What is the output?

```
for (int i = 1; i <= 4; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print(i + " ");
    }
    System.out.println();
}
```

*Hint:* Each row prints the row number i, repeated i times.

**Answer:** `1 `
`2 2 `
`3 3 3 `
`4 4 4 4 `

Row 1: one 1. Row 2: two 2s. Row 3: three 3s. Row 4: four 4s. The inner loop prints i (not j).

### Q17. [Hard] What is the output?

```
int n = 4;
for (int i = 0; i < n; i++) {
    for (int j = 0; j <= i; j++) {
        System.out.print((char)('A' + j) + " ");
    }
    System.out.println();
}
```

*Hint:* Character pattern: (char)('A' + 0) = 'A', (char)('A' + 1) = 'B', etc.

**Answer:** `A `
`A B `
`A B C `
`A B C D `

Row 0: A. Row 1: A B. Row 2: A B C. Row 3: A B C D. Each row starts at 'A' and goes to the i-th letter.

## Mixed Questions

### Q1. [Easy] Print numbers 1 to 20, but skip multiples of 4 using continue.

*Hint:* Use continue when i % 4 == 0.

**Answer:** ```
for (int i = 1; i <= 20; i++) {
    if (i % 4 == 0) continue;
    System.out.print(i + " ");
}
```

When i is a multiple of 4 (4, 8, 12, 16, 20), continue skips the print. All other numbers print.

### Q2. [Easy] Print the following right triangle pattern for n = 5 using numbers:

```
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

*Hint:* Outer loop for rows, inner loop j from 1 to i.

**Answer:** ```
int n = 5;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print(j + " ");
    }
    System.out.println();
}
```

Row i prints numbers from 1 to i. The inner loop variable j provides the number to print.

### Q3. [Medium] Print an inverted right triangle of stars for n = 5:

```
* * * * *
* * * *
* * *
* *
*
```

*Hint:* Row i prints (n - i + 1) stars.

**Answer:** ```
int n = 5;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i + 1; j++) {
        System.out.print("* ");
    }
    System.out.println();
}
```

Row 1: 5 stars. Row 2: 4. Row 3: 3. Row 4: 2. Row 5: 1. The formula (n - i + 1) gives the star count for each row.

### Q4. [Medium] Print a number pyramid for n = 5:

```
    1
   1 2
  1 2 3
 1 2 3 4
1 2 3 4 5
```

*Hint:* Each row has (n-i) leading spaces, then numbers 1 to i.

**Answer:** ```
int n = 5;
for (int i = 1; i <= n; i++) {
    for (int s = 1; s <= n - i; s++) {
        System.out.print(" ");
    }
    for (int j = 1; j <= i; j++) {
        System.out.print(j + " ");
    }
    System.out.println();
}
```

Row i needs (n - i) spaces for alignment, then prints numbers 1 through i. The spaces shift each row to the right, creating the pyramid shape.

### Q5. [Medium] What is the output?

```
for (int i = 5; i >= 1; i--) {
    for (int j = 1; j <= i; j++) {
        System.out.print(j + " ");
    }
    System.out.println();
}
```

*Hint:* i counts down from 5 to 1. Inner loop prints 1 to i.

**Answer:** `1 2 3 4 5 `
`1 2 3 4 `
`1 2 3 `
`1 2 `
`1 `

Row 1 (i=5): prints 1 to 5. Row 2 (i=4): prints 1 to 4. And so on down to row 5 (i=1): prints 1.

### Q6. [Medium] Print a hollow rectangle of stars with width 6 and height 4.

*Hint:* Print stars on first/last row and first/last column. Spaces elsewhere.

**Answer:** ```
int rows = 4, cols = 6;
for (int i = 1; i <= rows; i++) {
    for (int j = 1; j <= cols; j++) {
        if (i == 1 || i == rows || j == 1 || j == cols) {
            System.out.print("* ");
        } else {
            System.out.print("  ");
        }
    }
    System.out.println();
}
```

Stars appear on borders: first row, last row, first column, last column. Interior positions get spaces.

### Q7. [Easy] Print the following right triangle number pattern for n = 4:

```
1
2 2
3 3 3
4 4 4 4
```

*Hint:* Row i prints the number i, repeated i times.

**Answer:** ```
int n = 4;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print(i + " ");
    }
    System.out.println();
}
```

Inner loop prints the value of i (not j) in each column.

### Q8. [Medium] Print a right-aligned number triangle for n = 4:

```
      1
    2 1
  3 2 1
4 3 2 1
```

*Hint:* Row i has (n-i) spaces then numbers from i down to 1.

**Answer:** ```
int n = 4;
for (int i = 1; i <= n; i++) {
    for (int s = 1; s <= n - i; s++) System.out.print("  ");
    for (int j = i; j >= 1; j--) System.out.print(j + " ");
    System.out.println();
}
```

Each row has (n-i) pairs of spaces for right-alignment, then prints numbers from i down to 1.

### Q9. [Hard] Print a sandglass pattern for n = 5:

```
* * * * *
 * * * *
  * * *
   * *
    *
   * *
  * * *
 * * * *
* * * * *
```

*Hint:* Upper half: inverted pyramid. Lower half: pyramid. Each row i has i-1 spaces then (n-i+1) or (i) stars.

**Answer:** ```
int n = 5;
for (int i = 0; i < n; i++) {
    for (int s = 0; s < i; s++) System.out.print(" ");
    for (int j = 0; j < n - i; j++) System.out.print("* ");
    System.out.println();
}
for (int i = 1; i < n; i++) {
    for (int s = 0; s < n - i - 1; s++) System.out.print(" ");
    for (int j = 0; j <= i; j++) System.out.print("* ");
    System.out.println();
}
```

Upper half: rows shrink from n stars to 1 star with increasing spaces. Lower half: rows grow from 2 stars back to n stars.

### Q10. [Hard] Print the following butterfly pattern for n = 4:

```
*      *
**    **
***  ***
********
********
***  ***
**    **
*      *
```

*Hint:* Upper half: i stars, (2n - 2i) spaces, i stars. Lower half: mirror.

**Answer:** ```
int n = 4;
// Upper half
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) System.out.print("*");
    for (int j = 1; j <= 2 * (n - i); j++) System.out.print(" ");
    for (int j = 1; j <= i; j++) System.out.print("*");
    System.out.println();
}
// Lower half
for (int i = n; i >= 1; i--) {
    for (int j = 1; j <= i; j++) System.out.print("*");
    for (int j = 1; j <= 2 * (n - i); j++) System.out.print(" ");
    for (int j = 1; j <= i; j++) System.out.print("*");
    System.out.println();
}
```

Each row has three parts: left stars (i), middle spaces (2*(n-i)), right stars (i). Upper half: i goes 1 to n. Lower half: i goes n to 1.

### Q11. [Hard] Print a number diamond for n = 4:

```
   1
  121
 12321
1234321
 12321
  121
   1
```

*Hint:* Each row prints numbers ascending then descending. Use spaces for alignment.

**Answer:** ```
int n = 4;
// Upper half
for (int i = 1; i <= n; i++) {
    for (int s = 1; s <= n - i; s++) System.out.print(" ");
    for (int j = 1; j <= i; j++) System.out.print(j);
    for (int j = i - 1; j >= 1; j--) System.out.print(j);
    System.out.println();
}
// Lower half
for (int i = n - 1; i >= 1; i--) {
    for (int s = 1; s <= n - i; s++) System.out.print(" ");
    for (int j = 1; j <= i; j++) System.out.print(j);
    for (int j = i - 1; j >= 1; j--) System.out.print(j);
    System.out.println();
}
```

Each row has: (n-i) spaces, numbers 1 to i ascending, then numbers (i-1) to 1 descending. Upper half: i from 1 to n. Lower half: i from n-1 to 1.

### Q12. [Hard] Print Pascal's triangle for n = 5 rows.

*Hint:* Each element = previous * (row - col) / (col + 1) using 0-indexed.

**Answer:** ```
int n = 5;
for (int i = 0; i < n; i++) {
    for (int s = 0; s < n - i - 1; s++) System.out.print("  ");
    int val = 1;
    for (int j = 0; j <= i; j++) {
        System.out.printf("%4d", val);
        val = val * (i - j) / (j + 1);
    }
    System.out.println();
}
```

Pascal's triangle values are binomial coefficients. Each value is computed iteratively: `val = val * (i - j) / (j + 1)`. This avoids computing factorials directly.

## Multiple Choice Questions

### Q1. [Easy] What does the break statement do inside a loop?

A. Skips the current iteration
B. Exits the innermost loop or switch
C. Exits the entire program
D. Pauses the loop

**Answer:** B

**B is correct.** `break` terminates the innermost enclosing loop or switch statement.

### Q2. [Easy] What does the continue statement do?

A. Exits the loop
B. Restarts the loop from the beginning
C. Skips to the next iteration
D. Does nothing

**Answer:** C

**C is correct.** `continue` skips the remaining body of the current iteration and proceeds to the next iteration.

### Q3. [Easy] What is a labeled break used for?

A. Breaking out of a switch
B. Breaking out of an outer loop from an inner loop
C. Giving a name to a break point
D. Debugging purposes

**Answer:** B

**B is correct.** A labeled break allows you to exit an outer loop from within an inner loop. The label is placed before the outer loop.

### Q4. [Easy] In a right triangle star pattern of n rows, how many stars does row i have?

A. n
B. i
C. n - i
D. n - i + 1

**Answer:** B

**B is correct.** In a right triangle, row 1 has 1 star, row 2 has 2 stars, ..., row i has i stars.

### Q5. [Medium] In a pyramid pattern of n rows, how many leading spaces does row i have?

A. i
B. n
C. n - i
D. 2 * i

**Answer:** C

**C is correct.** In a pyramid, row 1 has (n-1) spaces, row 2 has (n-2), ..., row i has (n-i) spaces.

### Q6. [Medium] In a pyramid of n rows, how many stars does row i have?

A. i
B. 2 * i
C. 2 * i - 1
D. 2 * i + 1

**Answer:** C

**C is correct.** Row 1: 1 star, Row 2: 3, Row 3: 5. The formula is 2*i - 1 (odd numbers).

### Q7. [Medium] What is Floyd's triangle?

A. An equilateral triangle of stars
B. A triangle where consecutive natural numbers fill the rows
C. A triangle where each row repeats its row number
D. A triangle of prime numbers

**Answer:** B

**B is correct.** Floyd's triangle fills rows with consecutive natural numbers: 1 / 2 3 / 4 5 6 / ... Row i has i numbers.

### Q8. [Medium] What does return do inside a loop in a method?

A. Exits only the loop
B. Exits the entire method
C. Exits all nested loops but stays in the method
D. Causes a compilation error

**Answer:** B

**B is correct.** `return` exits the entire method, not just the loop. If the method has a return type, you must return a value.

### Q9. [Hard] How many total stars are printed in a pyramid of n rows?

A. n * n
B. n * (n + 1) / 2
C. n^2
D. 2 * n - 1

**Answer:** C

**C is correct.** Row i has (2i-1) stars. Total = sum of (2i-1) for i=1 to n = 2 * n*(n+1)/2 - n = n^2.

### Q10. [Hard] In Pascal's triangle, what is the value of the element at row 4, column 2 (0-indexed)?

A. 3
B. 4
C. 6
D. 10

**Answer:** C

**C is correct.** C(4,2) = 4! / (2! * 2!) = 24 / 4 = 6. Pascal's row 4 is: 1, 4, 6, 4, 1.

### Q11. [Hard] What is the output?
`outer: for (int i=0; i<3; i++) { for (int j=0; j<3; j++) { if (j==1) break; } System.out.print(i); }`

A. 012
B. 000
C. 0
D. Nothing prints

**Answer:** A

**A is correct.** The inner break (without label) exits only the inner loop. The outer loop continues, printing i values: 0, 1, 2.

### Q12. [Hard] What is a diamond pattern's total number of rows for n = 5 (upper half)?

A. 5
B. 9
C. 10
D. 8

**Answer:** B

**B is correct.** A diamond with n = 5 has n rows in the upper half and n-1 rows in the lower half. Total = n + (n-1) = 2n - 1 = 9.

### Q13. [Easy] What is the correct syntax for a labeled break?

A. break label;
B. break(label);
C. break -> label;
D. exit label;

**Answer:** A

**A is correct.** Labeled break syntax is `break labelName;` where the label is declared before the loop as `labelName:`.

### Q14. [Medium] In a right triangle of n rows, what is the total number of stars printed?

A. n * n
B. n * (n + 1) / 2
C. 2 * n
D. n * (n - 1) / 2

**Answer:** B

**B is correct.** Row 1 has 1 star, row 2 has 2, ..., row n has n. Total = 1 + 2 + ... + n = n(n+1)/2.

### Q15. [Hard] What is the output?
`for (int i = 1; i <= 3; i++) { for (int j = 1; j <= 3; j++) { if (i + j > 4) break; System.out.print(i+""+j+" "); } }`

A. 11 12 13 21 22 23 31 32 33
B. 11 12 13 21 22 31
C. 11 12 21
D. 11 12 13 21 22 23 31

**Answer:** B

**B is correct.** i=1: j=1(11), j=2(12), j=3(13, 1+3=4 not >4 so prints). i=2: j=1(21), j=2(22), j=3(2+3=5>4, break inner). i=3: j=1(31, 3+1=4 not >4), j=2(3+2=5>4, break inner). Output: 11 12 13 21 22 31.

## Coding Challenges

### Challenge 1. Right-Aligned Star Triangle

**Difficulty:** Easy

Print a right-aligned triangle for n = 5:

```
    *
   **
  ***
 ****
*****
```

**Constraints:**

- Use spaces for alignment.

**Sample input:**

```
n = 5
```

**Sample output:**

```
    *
   **
  ***
 ****
*****
```

**Solution:**

```java
int n = 5;
for (int i = 1; i <= n; i++) {
    for (int s = 1; s <= n - i; s++) System.out.print(" ");
    for (int j = 1; j <= i; j++) System.out.print("*");
    System.out.println();
}
```

### Challenge 2. Hollow Pyramid

**Difficulty:** Medium

Print a hollow pyramid for n = 5. Only the border stars are printed; interior is spaces.

**Constraints:**

- Print star on first column, last column, and last row. Spaces elsewhere.

**Sample input:**

```
n = 5
```

**Sample output:**

```
    *
   * *
  *   *
 *     *
*********
```

**Solution:**

```java
int n = 5;
for (int i = 1; i <= n; i++) {
    for (int s = 1; s <= n - i; s++) System.out.print(" ");
    for (int j = 1; j <= 2 * i - 1; j++) {
        if (j == 1 || j == 2 * i - 1 || i == n) {
            System.out.print("*");
        } else {
            System.out.print(" ");
        }
    }
    System.out.println();
}
```

### Challenge 3. Hourglass Pattern

**Difficulty:** Medium

Print an hourglass (inverted pyramid followed by a pyramid) for n = 5.

**Constraints:**

- Combine inverted pyramid (top) and pyramid (bottom).

**Sample input:**

```
n = 5
```

**Sample output:**

```
*********
 *******
  *****
   ***
    *
   ***
  *****
 *******
*********
```

**Solution:**

```java
int n = 5;
for (int i = n; i >= 1; i--) {
    for (int s = 1; s <= n - i; s++) System.out.print(" ");
    for (int j = 1; j <= 2 * i - 1; j++) System.out.print("*");
    System.out.println();
}
for (int i = 2; i <= n; i++) {
    for (int s = 1; s <= n - i; s++) System.out.print(" ");
    for (int j = 1; j <= 2 * i - 1; j++) System.out.print("*");
    System.out.println();
}
```

### Challenge 4. Zigzag Number Pattern

**Difficulty:** Medium

Print a number pattern where odd rows go left-to-right and even rows go right-to-left:

```
1
3 2
4 5 6
10 9 8 7
```

**Constraints:**

- Track a global counter. For even rows, store numbers and print in reverse.

**Sample input:**

```
n = 4
```

**Sample output:**

```
1
3 2
4 5 6
10 9 8 7
```

**Solution:**

```java
int n = 4;
int num = 1;
for (int i = 1; i <= n; i++) {
    int[] row = new int[i];
    for (int j = 0; j < i; j++) {
        row[j] = num++;
    }
    if (i % 2 == 0) {
        for (int j = i - 1; j >= 0; j--) System.out.print(row[j] + " ");
    } else {
        for (int j = 0; j < i; j++) System.out.print(row[j] + " ");
    }
    System.out.println();
}
```

### Challenge 5. Star Diamond

**Difficulty:** Medium

Print a full diamond for n = 5 (upper half rows).

**Constraints:**

- Combine pyramid (upper) and inverted pyramid (lower, skip middle).

**Sample input:**

```
n = 5
```

**Sample output:**

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

**Solution:**

```java
int n = 5;
for (int i = 1; i <= n; i++) {
    for (int s = 1; s <= n - i; s++) System.out.print(" ");
    for (int j = 1; j <= 2 * i - 1; j++) System.out.print("*");
    System.out.println();
}
for (int i = n - 1; i >= 1; i--) {
    for (int s = 1; s <= n - i; s++) System.out.print(" ");
    for (int j = 1; j <= 2 * i - 1; j++) System.out.print("*");
    System.out.println();
}
```

### Challenge 6. Alphabet Diamond

**Difficulty:** Hard

Print a character diamond for n = 5:

```
    A
   ABA
  ABCBA
 ABCDCBA
ABCDEDCBA
 ABCDCBA
  ABCBA
   ABA
    A
```

**Constraints:**

- Each row: spaces, characters A to A+i-1, then back to A.

**Sample input:**

```
n = 5
```

**Sample output:**

```
    A
   ABA
  ABCBA
 ABCDCBA
ABCDEDCBA
 ABCDCBA
  ABCBA
   ABA
    A
```

**Solution:**

```java
int n = 5;
for (int i = 1; i <= n; i++) {
    for (int s = 1; s <= n - i; s++) System.out.print(" ");
    for (int j = 0; j < i; j++) System.out.print((char)('A' + j));
    for (int j = i - 2; j >= 0; j--) System.out.print((char)('A' + j));
    System.out.println();
}
for (int i = n - 1; i >= 1; i--) {
    for (int s = 1; s <= n - i; s++) System.out.print(" ");
    for (int j = 0; j < i; j++) System.out.print((char)('A' + j));
    for (int j = i - 2; j >= 0; j--) System.out.print((char)('A' + j));
    System.out.println();
}
```

### Challenge 7. Spiral Number Pattern

**Difficulty:** Hard

Print an n x n matrix filled with numbers 1 to n*n in spiral order. n = 4:

```
 1  2  3  4
12 13 14  5
11 16 15  6
10  9  8  7
```

**Constraints:**

- Use a 2D array and fill in spiral order: right, down, left, up.

**Sample input:**

```
n = 4
```

**Sample output:**

```
 1  2  3  4
12 13 14  5
11 16 15  6
10  9  8  7
```

**Solution:**

```java
int n = 4;
int[][] matrix = new int[n][n];
int num = 1, top = 0, bottom = n-1, left = 0, right = n-1;
while (num <= n * n) {
    for (int i = left; i <= right; i++) matrix[top][i] = num++;
    top++;
    for (int i = top; i <= bottom; i++) matrix[i][right] = num++;
    right--;
    for (int i = right; i >= left; i--) matrix[bottom][i] = num++;
    bottom--;
    for (int i = bottom; i >= top; i--) matrix[i][left] = num++;
    left++;
}
for (int[] row : matrix) {
    for (int val : row) System.out.printf("%3d", val);
    System.out.println();
}
```

### Challenge 8. Pascal's Triangle (Print N Rows)

**Difficulty:** Hard

Print the first N rows of Pascal's triangle with proper alignment.

**Constraints:**

- Use the binomial coefficient formula iteratively.

**Sample input:**

```
n = 6
```

**Sample output:**

```
          1
        1   1
      1   2   1
    1   3   3   1
  1   4   6   4   1
1   5  10  10   5   1
```

**Solution:**

```java
int n = 6;
for (int i = 0; i < n; i++) {
    for (int s = 0; s < n - i - 1; s++) System.out.print("  ");
    int val = 1;
    for (int j = 0; j <= i; j++) {
        System.out.printf("%4d", val);
        val = val * (i - j) / (j + 1);
    }
    System.out.println();
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/loop-control-and-patterns/*
