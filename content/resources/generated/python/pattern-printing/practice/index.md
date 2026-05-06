---
title: "Practice: Pattern Printing in Python"
description: "57 practice problems for Pattern Printing in Python in Python"
slug: pattern-printing-practice
canonical: https://learn.modernagecoders.com/resources/python/pattern-printing/practice
category: "Python"
---
# Practice: Pattern Printing in Python

**Total questions:** 57

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
for i in range(1, 4):
    print("*" * i)
```

*Hint:* "*" * i repeats the star character i times.

**Answer:** `*`
`**`
`***`

When i=1: `"*" * 1` = "*". When i=2: `"*" * 2` = "**". When i=3: `"*" * 3` = "***". This creates a right triangle without spaces between stars.

### Q2. [Easy] What is the output?

```
for i in range(3):
    for j in range(3):
        print("*", end=" ")
    print()
```

*Hint:* Both loops run 3 times. The inner loop prints 3 stars per row.

**Answer:** `* * * `
`* * * `
`* * * `

The outer loop runs 3 times (3 rows). For each row, the inner loop prints 3 stars with spaces. `print()` moves to the next line. The result is a 3x3 square of stars.

### Q3. [Easy] What is the output?

```
for i in range(1, 5):
    for j in range(1, i + 1):
        print(j, end=" ")
    print()
```

*Hint:* The inner loop prints numbers from 1 to i.

**Answer:** `1 `
`1 2 `
`1 2 3 `
`1 2 3 4 `

Row i=1: j goes 1 to 1, prints 1. Row i=2: j goes 1 to 2, prints 1 2. Row i=3: j goes 1 to 3, prints 1 2 3. Row i=4: j goes 1 to 4, prints 1 2 3 4.

### Q4. [Easy] What is the output?

```
for i in range(4, 0, -1):
    print("*" * i)
```

*Hint:* The loop counts from 4 down to 1.

**Answer:** `****`
`***`
`**`
`*`

i goes 4, 3, 2, 1. `"*" * 4` gives "****", `"*" * 3` gives "***", and so on. This creates an inverted right triangle.

### Q5. [Easy] What is the output?

```
for i in range(3):
    for j in range(i + 1):
        print(chr(65 + j), end=" ")
    print()
```

*Hint:* chr(65) is 'A', chr(66) is 'B', chr(67) is 'C'.

**Answer:** `A `
`A B `
`A B C `

Row i=0: j=0, chr(65)='A'. Row i=1: j=0,1, chr(65)='A', chr(66)='B'. Row i=2: j=0,1,2, chr(65)='A', chr(66)='B', chr(67)='C'.

### Q6. [Medium] What is the output?

```
n = 4
for i in range(1, n + 1):
    print(" " * (n - i) + "*" * (2 * i - 1))
```

*Hint:* Each row has (n - i) spaces and (2*i - 1) stars. Row 1: 3 spaces, 1 star. Row 2: 2 spaces, 3 stars.

**Answer:** `   *`
`  ***`
` *****`
`*******`

Row 1: 3 spaces + 1 star. Row 2: 2 spaces + 3 stars. Row 3: 1 space + 5 stars. Row 4: 0 spaces + 7 stars. The formula 2*i-1 gives odd numbers (1, 3, 5, 7), creating a solid pyramid.

### Q7. [Medium] What is the output?

```
num = 1
for i in range(1, 5):
    for j in range(i):
        print(num, end=" ")
        num += 1
    print()
```

*Hint:* num is a continuous counter that does not reset between rows. This is Floyd's triangle.

**Answer:** `1 `
`2 3 `
`4 5 6 `
`7 8 9 10 `

num starts at 1 and increments with every print. Row 1: prints 1. Row 2: prints 2, 3. Row 3: prints 4, 5, 6. Row 4: prints 7, 8, 9, 10. The counter is continuous across rows.

### Q8. [Medium] What is the output?

```
for i in range(1, 5):
    for j in range(1, i + 1):
        print(i, end=" ")
    print()
```

*Hint:* Notice: it prints i (the row number), not j.

**Answer:** `1 `
`2 2 `
`3 3 3 `
`4 4 4 4 `

The inner loop prints the value of `i` (not j) for each column. So row 1 prints 1 once, row 2 prints 2 twice, row 3 prints 3 three times, row 4 prints 4 four times.

### Q9. [Medium] What is the output?

```
n = 4
for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i == 1 or i == n or j == 1 or j == n:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()
```

*Hint:* Stars are printed only on the borders of a 4x4 grid.

**Answer:** `* * * * `
`*     * `
`*     * `
`* * * * `

This prints a hollow square. Stars appear when i is 1 or 4 (first/last row) or j is 1 or 4 (first/last column). All other positions get spaces.

### Q10. [Medium] What is the output?

```
for i in range(5, 0, -1):
    for j in range(5 - i):
        print(" ", end="")
    for j in range(i):
        print("* ", end="")
    print()
```

*Hint:* The first inner loop prints leading spaces. The second prints stars. Stars decrease while spaces increase.

**Answer:** `* * * * * `
` * * * * `
`  * * * `
`   * * `
`    * `

Row i=5: 0 spaces + 5 stars. Row i=4: 1 space + 4 stars. Row i=3: 2 spaces + 3 stars. Row i=2: 3 spaces + 2 stars. Row i=1: 4 spaces + 1 star. This creates an inverted pyramid.

### Q11. [Medium] What is the output?

```
for i in range(1, 5):
    for j in range(i, 5):
        print(j, end=" ")
    print()
```

*Hint:* The inner loop starts at i and goes up to 4.

**Answer:** `1 2 3 4 `
`2 3 4 `
`3 4 `
`4 `

Row i=1: j goes from 1 to 4, prints 1 2 3 4. Row i=2: j from 2 to 4, prints 2 3 4. Row i=3: j from 3 to 4, prints 3 4. Row i=4: j from 4 to 4, prints 4. Numbers decrease per row, starting from a higher value.

### Q12. [Hard] What is the output?

```
n = 4
for i in range(1, n + 1):
    for j in range(1, i + 1):
        print(i * j, end="\t")
    print()
```

*Hint:* Each cell prints i * j. This creates a multiplication table triangle.

**Answer:** `1	`
`2	4	`
`3	6	9	`
`4	8	12	16	`

Row i=1: 1*1=1. Row i=2: 2*1=2, 2*2=4. Row i=3: 3*1=3, 3*2=6, 3*3=9. Row i=4: 4*1=4, 4*2=8, 4*3=12, 4*4=16. Tab characters align the columns.

### Q13. [Hard] What is the output?

```
n = 4
for i in range(n):
    for j in range(n):
        if (i + j) % 2 == 0:
            print("1", end=" ")
        else:
            print("0", end=" ")
    print()
```

*Hint:* When i + j is even, print 1. When odd, print 0. This creates a checkerboard.

**Answer:** `1 0 1 0 `
`0 1 0 1 `
`1 0 1 0 `
`0 1 0 1 `

Row 0: (0+0)even=1, (0+1)odd=0, (0+2)even=1, (0+3)odd=0. Row 1: (1+0)odd=0, (1+1)even=1, (1+2)odd=0, (1+3)even=1. The pattern alternates, creating a checkerboard.

### Q14. [Hard] What is the output?

```
n = 5
for i in range(1, n + 1):
    for j in range(1, i + 1):
        if j % 2 == 1:
            print(1, end=" ")
        else:
            print(0, end=" ")
    print()
```

*Hint:* Odd column numbers get 1, even column numbers get 0.

**Answer:** `1 `
`1 0 `
`1 0 1 `
`1 0 1 0 `
`1 0 1 0 1 `

For each row i, the inner loop runs from j=1 to j=i. When j is odd (1, 3, 5), print 1. When j is even (2, 4), print 0. This creates a triangle of alternating 1s and 0s.

### Q15. [Hard] What is the output?

```
n = 4
for i in range(1, n + 1):
    for j in range(n, 0, -1):
        if j <= i:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()
```

*Hint:* The inner loop goes from n down to 1. Stars are printed when j <= i.

**Answer:** `      * `
`    * * `
`  * * * `
`* * * * `

Row i=1, j goes 4,3,2,1: j<=1 only when j=1, so 3 spaces then 1 star. Row i=2: j<=2 when j=2,1, so 2 spaces then 2 stars. Row i=3: 1 space, 3 stars. Row i=4: 0 spaces, 4 stars. This creates a right-aligned triangle.

### Q16. [Hard] What is the output?

```
n = 3
for i in range(1, n + 1):
    print(" " * (n - i) + "* " * i)
for i in range(n - 1, 0, -1):
    print(" " * (n - i) + "* " * i)
```

*Hint:* The first loop prints the top half of a diamond. The second loop prints the bottom half.

**Answer:** `  * `
` * * `
`* * * `
` * * `
`  * `

Top half: Row 1: 2 spaces + 1 star. Row 2: 1 space + 2 stars. Row 3: 0 spaces + 3 stars. Bottom half: Row 2: 1 space + 2 stars. Row 1: 2 spaces + 1 star. The bottom starts from n-1 to avoid repeating the middle row.

### Q17. [Medium] Explain the 'rows and columns' approach for pattern printing. How do you figure out the code for any pattern?

*Hint:* Think about analyzing the pattern row by row before writing any code.

**Answer:** The rows and columns approach involves: (1) Count the total rows in the pattern. (2) For each row, count the number of spaces and characters. (3) Express the counts as formulas based on the row number (i) and total rows (n). (4) The outer loop iterates through rows. (5) Inner loops use the formulas as range() arguments to print spaces and characters. Example: for a pyramid with n rows, row i has (n-i) spaces and i stars.

This systematic approach works for any pattern. Always start by numbering the rows and writing down what each row contains. If you can express the count of each element as a formula involving the row number, the code writes itself.

### Q18. [Hard] What is the output?

```
for i in range(1, 6):
    for j in range(1, 6):
        print(min(i, j), end=" ")
    print()
```

*Hint:* Each cell prints the minimum of its row and column number.

**Answer:** `1 1 1 1 1 `
`1 2 2 2 2 `
`1 2 3 3 3 `
`1 2 3 4 4 `
`1 2 3 4 5 `

For each position (i, j), the smaller value is printed. Row 1: min with 1 always gives 1. Row 3: min(3,1)=1, min(3,2)=2, min(3,3)=3, min(3,4)=3, min(3,5)=3. This creates a staircase-like number pattern.

## Mixed Questions

### Q1. [Easy] Write the code to print this pattern:

```
1
2 2
3 3 3
4 4 4 4
```

*Hint:* Row i should print the number i, repeated i times.

**Answer:** ```
for i in range(1, 5):
    for j in range(i):
        print(i, end=" ")
    print()
```

The outer loop controls rows (i = 1 to 4). For each row, the inner loop runs i times, always printing the value of `i` (not j). So row 3 prints 3 three times.

### Q2. [Easy] Write the code to print this pattern:

```
* * * *
* * *
* *
*
```

*Hint:* Start with 4 stars and decrease by 1 each row.

**Answer:** ```
for i in range(4, 0, -1):
    for j in range(i):
        print("*", end=" ")
    print()
```

The outer loop runs from 4 down to 1. For each value of i, the inner loop prints i stars. Row 1 gets 4 stars, row 2 gets 3, and so on.

### Q3. [Easy] What is the output?

```
for i in range(3):
    print(str(i) * 3)
```

*Hint:* str(i) converts the number to a string. Multiplying a string repeats it.

**Answer:** `000`
`111`
`222`

When i=0: `str(0) * 3` = "000". When i=1: `str(1) * 3` = "111". When i=2: `str(2) * 3` = "222". String multiplication repeats the character.

### Q4. [Medium] What is the output?

```
n = 5
for i in range(1, n + 1):
    for j in range(i, n + 1):
        print(j, end=" ")
    print()
```

*Hint:* The inner loop starts at i and goes to n. The starting point increases each row.

**Answer:** `1 2 3 4 5 `
`2 3 4 5 `
`3 4 5 `
`4 5 `
`5 `

Row i=1: j from 1 to 5, prints 1 2 3 4 5. Row i=2: j from 2 to 5, prints 2 3 4 5. Row i=3: j from 3 to 5, prints 3 4 5. The triangle shrinks from the left.

### Q5. [Medium] What is the output?

```
for i in range(4):
    for j in range(4):
        print(i + j, end=" ")
    print()
```

*Hint:* Each cell prints the sum of its row and column index.

**Answer:** `0 1 2 3 `
`1 2 3 4 `
`2 3 4 5 `
`3 4 5 6 `

Row 0: 0+0=0, 0+1=1, 0+2=2, 0+3=3. Row 1: 1+0=1, 1+1=2, 1+2=3, 1+3=4. Row 2: 2+0=2, 2+1=3, 2+2=4, 2+3=5. Row 3: 3+0=3, 3+1=4, 3+2=5, 3+3=6.

### Q6. [Medium] Write the code to print this pattern:

```
5 4 3 2 1
5 4 3 2
5 4 3
5 4
5
```

*Hint:* Each row starts at 5 and counts down. The number of values decreases each row.

**Answer:** ```
for i in range(5, 0, -1):
    for j in range(5, 5 - i, -1):
        print(j, end=" ")
    print()
```

The outer loop controls how many numbers per row (5, 4, 3, 2, 1). Each row always starts printing from 5 and counts down for i numbers. Row 1: 5 4 3 2 1. Row 2: 5 4 3 2. And so on.

### Q7. [Medium] What is the output?

```
for i in range(5):
    for j in range(5):
        if i == j or i + j == 4:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()
```

*Hint:* i == j is the main diagonal. i + j == 4 is the anti-diagonal. Together they form an X.

**Answer:** `*       * `
`  *   *   `
`    *     `
`  *   *   `
`*       * `

The condition i == j marks the main diagonal (top-left to bottom-right). The condition i + j == 4 marks the anti-diagonal (top-right to bottom-left). Together they form an X pattern. The center cell (2,2) satisfies both conditions.

### Q8. [Hard] What is the output?

```
n = 4
for i in range(1, n + 1):
    for j in range(1, n + 1):
        print(abs(i - j), end=" ")
    print()
```

*Hint:* abs(i - j) gives the distance between the row and column number.

**Answer:** `0 1 2 3 `
`1 0 1 2 `
`2 1 0 1 `
`3 2 1 0 `

Row 1: |1-1|=0, |1-2|=1, |1-3|=2, |1-4|=3. Row 2: |2-1|=1, |2-2|=0, |2-3|=1, |2-4|=2. Row 3: |3-1|=2, |3-2|=1, |3-3|=0, |3-4|=1. Row 4: |4-1|=3, |4-2|=2, |4-3|=1, |4-4|=0. The diagonal is always 0.

### Q9. [Hard] What is the output?

```
n = 5
for i in range(1, n + 1):
    for j in range(1, n + 1):
        print(min(i, j, n + 1 - i, n + 1 - j), end=" ")
    print()
```

*Hint:* This finds the minimum distance from any border of a 5x5 grid.

**Answer:** `1 1 1 1 1 `
`1 2 2 2 1 `
`1 2 3 2 1 `
`1 2 2 2 1 `
`1 1 1 1 1 `

For each cell, min(i, j, n+1-i, n+1-j) gives the minimum distance from any edge. Border cells are always 1. The next ring is 2. The center is 3. This creates a concentric number pattern.

### Q10. [Hard] Write the code to print this hourglass (sandglass) pattern:

```
* * * * *
  * * *
    *
  * * *
* * * * *
```

*Hint:* Top half: inverted pyramid. Bottom half: pyramid. Both need leading spaces.

**Answer:** ```
n = 5
for i in range(n, 0, -2):
    spaces = (n - i) // 2
    print("  " * spaces + "* " * ((i + 1) // 2))
for i in range(3, n + 1, 2):
    spaces = (n - i) // 2
    print("  " * spaces + "* " * ((i + 1) // 2))
```

The hourglass is an inverted pyramid (5, 3, 1 stars) followed by a pyramid (3, 5 stars). Each step reduces/increases by 2 stars and adds/removes 1 leading space. The top starts at the widest and narrows to 1, then the bottom widens back out.

### Q11. [Hard] What is the output?

```
for i in range(1, 6):
    for j in range(1, 6):
        if j <= i:
            print(j, end=" ")
        else:
            print(" ", end=" ")
    for j in range(1, 6):
        if j < i:
            print(i - j, end=" ")
        else:
            print(" ", end=" ")
    print()
```

*Hint:* The first inner loop prints ascending numbers. The second prints a descending mirror.

**Answer:** `1                   `
`1 2         1       `
`1 2 3       2 1     `
`1 2 3 4     3 2 1   `
`1 2 3 4 5   4 3 2 1 `

Each row has two halves. The left half prints ascending numbers 1 to i, then spaces. The right half prints descending numbers (i-1) down to 1, then spaces. Together they form a triangle with a mirror image.

## Multiple Choice Questions

### Q1. [Easy] How many loops are typically needed to print a right triangle pattern?

A. 1 loop
B. 2 loops (one nested inside the other)
C. 3 loops
D. No loops needed

**Answer:** B

**B is correct.** A right triangle needs 2 loops: an outer loop for rows and an inner loop for printing stars in each row. A single loop (option A) cannot control both rows and columns. Some complex patterns may need 3+ loops (option C), but right triangles need exactly 2.

### Q2. [Easy] What does print() with no arguments do in pattern printing?

A. Prints the word 'None'
B. Causes an error
C. Moves to the next line
D. Prints a space

**Answer:** C

**C is correct.** `print()` with no arguments prints nothing but adds a newline character, moving the cursor to the next line. This is essential in pattern printing to separate rows.

### Q3. [Easy] In a right triangle with n rows, how many stars does row i have (counting from 1)?

A. n stars
B. i stars
C. n - i stars
D. i - 1 stars

**Answer:** B

**B is correct.** In a right triangle, row 1 has 1 star, row 2 has 2, row 3 has 3, and so on. Row i has exactly i stars. Option C (n - i) would give an inverted triangle. Option A (n) would give a rectangle.

### Q4. [Easy] What does end="" do in print("*", end="")?

A. Ends the program
B. Prevents the newline, keeping output on the same line
C. Adds an empty string at the end
D. Causes an error

**Answer:** B

**B is correct.** By default, `print()` adds a newline after output. `end=""` replaces the newline with nothing, so the next print continues on the same line. This is essential for printing multiple characters on one row.

### Q5. [Medium] In a pyramid pattern with n rows, how many leading spaces does row i have?

A. i spaces
B. n spaces
C. n - i spaces
D. i - 1 spaces

**Answer:** C

**C is correct.** In a pyramid, the first row has (n-1) spaces, the second has (n-2), and the last has 0. The formula is (n - i) spaces for row i. This positions the stars to create a centered triangle.

### Q6. [Medium] What is chr(65) in Python?

A. 65
B. "65"
C. "A"
D. "a"

**Answer:** C

**C is correct.** `chr(65)` returns the character with ASCII value 65, which is 'A'. The uppercase letters A-Z have ASCII values 65-90. Lowercase 'a' (option D) has ASCII value 97. `chr()` always returns a string character.

### Q7. [Medium] In Floyd's triangle, what makes it different from a regular number triangle?

A. Numbers reset to 1 each row
B. Numbers are consecutive across all rows
C. Numbers go from right to left
D. Only even numbers are printed

**Answer:** B

**B is correct.** Floyd's triangle uses a single counter that increases continuously: 1 / 2 3 / 4 5 6 / 7 8 9 10. In a regular number triangle, each row starts from 1: 1 / 1 2 / 1 2 3 (option A). The key is that the counter variable is declared outside the outer loop.

### Q8. [Medium] How many total stars are printed in a right triangle with 5 rows?

A. 5
B. 10
C. 15
D. 25

**Answer:** C

**C is correct.** Row 1: 1 star. Row 2: 2. Row 3: 3. Row 4: 4. Row 5: 5. Total = 1+2+3+4+5 = 15. The formula is n*(n+1)/2 = 5*6/2 = 15. Option D (25) would be a 5x5 square.

### Q9. [Medium] In a hollow square of size n, how many stars are printed in total?

A. n * n
B. 4 * n
C. 4 * n - 4
D. 2 * n + 2 * (n - 2)

**Answer:** C

**C is correct (which equals option D).** The top and bottom rows have n stars each (2n). The middle (n-2) rows have 2 stars each (only borders). Total: 2n + 2(n-2) = 2n + 2n - 4 = 4n - 4. For n=5: 4*5-4 = 16 stars.

### Q10. [Hard] What does this code print?

```
print("*" * 0)
```

A. *
B. 0
C. An empty line (just a newline)
D. Error

**Answer:** C

**C is correct.** `"*" * 0` produces an empty string `""`. Printing an empty string just outputs a newline (blank line). It does not cause an error. This is important for edge cases in patterns.

### Q11. [Hard] In the expression " " * (n - i), if n = 5 and i = 5, what is printed?

A. 5 spaces
B. Nothing (empty string)
C. Error: cannot multiply by zero
D. One space

**Answer:** B

**B is correct.** `" " * (5 - 5)` = `" " * 0` = `""` (empty string). Multiplying a string by 0 gives an empty string, not an error. This is how the last row of a pyramid has no leading spaces.

### Q12. [Hard] How many inner loops are needed for a centered pyramid pattern?

A. 1 (for stars only)
B. 2 (one for spaces, one for stars)
C. 3 (for spaces, stars, and newline)
D. It depends on the programming language

**Answer:** B

**B is correct.** A centered pyramid needs one inner loop to print leading spaces and another to print stars. The newline is handled by `print()`, not a loop (option C). While you can use string multiplication instead of loops, the standard approach uses 2 inner loops.

### Q13. [Hard] In a diamond with n rows in the top half, how many total rows does the complete diamond have?

A. n rows
B. 2n rows
C. 2n - 1 rows
D. 2n + 1 rows

**Answer:** C

**C is correct.** The top half has n rows and the bottom half has n-1 rows (the middle row is not repeated). Total: n + (n-1) = 2n-1. For n=5: 2*5-1 = 9 rows. Option B (2n = 10) would duplicate the middle row.

### Q14. [Hard] What formula gives the number of stars in row i of a solid pyramid (where stars are 1, 3, 5, 7...)?

A. i
B. i * 2
C. 2 * i - 1
D. i + 1

**Answer:** C

**C is correct.** Row 1: 2*1-1 = 1. Row 2: 2*2-1 = 3. Row 3: 2*3-1 = 5. Row 4: 2*4-1 = 7. The formula 2i-1 generates the odd number sequence, which is needed for a solid (no-gap) pyramid.

### Q15. [Easy] What is the purpose of using "\t" in pattern printing?

A. Prints the letter 't'
B. Adds a tab space for column alignment
C. Terminates the line
D. Adds a newline

**Answer:** B

**B is correct.** `\t` is the tab character, which adds a fixed-width space. It is used in number patterns (like multiplication tables) to align columns neatly, especially when numbers have different digit counts.

### Q16. [Medium] What pattern does this code print?

```
for i in range(1, 6):
    print(i, end=" ")
```

A. A triangle
B. A single row: 1 2 3 4 5
C. A column of numbers
D. A square

**Answer:** B

**B is correct.** There is no nested loop, just a single for loop with `end=" "`. This prints all numbers on one line: 1 2 3 4 5. A triangle (option A) would need nested loops. A column (option C) would need the default newline.

### Q17. [Hard] What is the total number of iterations (inner loop body executions) for a right triangle with n = 100?

A. 100
B. 5,050
C. 10,000
D. 10,100

**Answer:** B

**B is correct.** The inner loop runs 1 + 2 + 3 + ... + 100 = n(n+1)/2 = 100*101/2 = 5050 times. This is the formula for the sum of the first n natural numbers.

### Q18. [Medium] To print a right-aligned triangle (stars on the right), what must you add before the stars?

A. Numbers
B. Tab characters
C. Leading spaces
D. Nothing extra is needed

**Answer:** C

**C is correct.** A right-aligned triangle requires leading spaces to push the stars to the right. For a triangle with n rows, row i needs (n - i) spaces before the stars. Without spaces, the triangle is always left-aligned.

## Coding Challenges

### Challenge 1. Right Triangle with Numbers

**Difficulty:** Easy

Write a program to print the following pattern for n = 5 rows:

```
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

**Constraints:**

- Use nested for loops. n = 5.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

**Solution:**

```python
n = 5
for i in range(1, n + 1):
    for j in range(1, i + 1):
        print(j, end=" ")
    print()
```

### Challenge 2. Inverted Star Triangle

**Difficulty:** Easy

Write a program to print an inverted right triangle of stars with 6 rows.

**Constraints:**

- Use nested for loops.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
* * * * * *
* * * * *
* * * *
* * *
* *
*
```

**Solution:**

```python
n = 6
for i in range(n, 0, -1):
    for j in range(i):
        print("*", end=" ")
    print()
```

### Challenge 3. Pyramid Pattern

**Difficulty:** Medium

Ananya wants to print a centered pyramid of stars with 5 rows. Write the program.

**Constraints:**

- Use spaces for centering. The pyramid should look symmetric.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
    *
   * *
  * * *
 * * * *
* * * * *
```

**Solution:**

```python
n = 5
for i in range(1, n + 1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(i):
        print("* ", end="")
    print()
```

### Challenge 4. Floyd's Triangle

**Difficulty:** Medium

Write a program to print Floyd's triangle with 5 rows. Numbers should be consecutive across all rows (1 / 2 3 / 4 5 6 / ...).

**Constraints:**

- Use a counter variable that does not reset between rows.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
```

**Solution:**

```python
n = 5
num = 1
for i in range(1, n + 1):
    for j in range(i):
        print(num, end=" ")
        num += 1
    print()
```

### Challenge 5. Diamond Pattern

**Difficulty:** Medium

Rohan wants to print a diamond pattern with the widest row having 5 stars. Write the complete diamond (top + bottom).

**Constraints:**

- The diamond should have 9 rows total (5 top + 4 bottom). Use spaces for centering.

**Sample input:**

```
(No input required)
```

**Sample output:**

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

**Solution:**

```python
n = 5
for i in range(1, n + 1):
    print(" " * (n - i) + "* " * i)
for i in range(n - 1, 0, -1):
    print(" " * (n - i) + "* " * i)
```

### Challenge 6. Multiplication Table Grid

**Difficulty:** Medium

Vikram wants to print a 5x5 multiplication table where each cell shows the product of its row and column number. Use tab spacing.

**Constraints:**

- Use nested for loops and \t for tab spacing.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
1	2	3	4	5
2	4	6	8	10
3	6	9	12	15
4	8	12	16	20
5	10	15	20	25
```

**Solution:**

```python
n = 5
for i in range(1, n + 1):
    for j in range(1, n + 1):
        print(i * j, end="\t")
    print()
```

### Challenge 7. Alphabet Pyramid

**Difficulty:** Hard

Write a program to print this centered alphabet pyramid with 5 rows:

```
    A
   A B
  A B C
 A B C D
A B C D E
```

**Constraints:**

- Use chr(65 + j) for letters. Add leading spaces for centering.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
    A
   A B
  A B C
 A B C D
A B C D E
```

**Solution:**

```python
n = 5
for i in range(n):
    for j in range(n - i - 1):
        print(" ", end="")
    for j in range(i + 1):
        print(chr(65 + j), end=" ")
    print()
```

### Challenge 8. Hollow Right Triangle

**Difficulty:** Hard

Priya wants to print a hollow right triangle with 5 rows. Stars appear only on the borders (first column, last column, and last row).

```
*
* *
*   *
*     *
* * * * *
```

**Constraints:**

- Print stars only at borders. Use spaces for interior.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
*
* *
*   *
*     *
* * * * *
```

**Solution:**

```python
n = 5
for i in range(1, n + 1):
    for j in range(1, i + 1):
        if j == 1 or j == i or i == n:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()
```

### Challenge 9. Butterfly Pattern

**Difficulty:** Hard

Write a program to print a butterfly pattern with n = 4:

```
*      *
* *  * *
* * ** * *
* * * ** * * *
* * * ** * * *
* * ** * *
* *  * *
*      *
```

**Constraints:**

- The butterfly has a top half and a mirrored bottom half. Use nested loops for stars and spaces.

**Sample input:**

```
(No input required)
```

**Sample output:**

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

**Solution:**

```python
n = 4
# Top half
for i in range(1, n + 1):
    print("*" * i + " " * (2 * (n - i)) + "*" * i)
# Bottom half
for i in range(n, 0, -1):
    print("*" * i + " " * (2 * (n - i)) + "*" * i)
```

### Challenge 10. Pascal's Triangle First 5 Rows

**Difficulty:** Hard

Write a program to print the first 5 rows of Pascal's triangle. Each number is the sum of the two numbers above it. Row 1: 1. Row 2: 1 1. Row 3: 1 2 1. Row 4: 1 3 3 1. Row 5: 1 4 6 4 1.

**Constraints:**

- Calculate each value using the formula or build from the previous row.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
```

**Solution:**

```python
n = 5
for i in range(n):
    # Leading spaces
    print(" " * (n - i - 1), end="")
    val = 1
    for j in range(i + 1):
        print(val, end=" ")
        val = val * (i - j) // (j + 1)
    print()
```

---

*Notes: https://learn.modernagecoders.com/resources/python/pattern-printing/*
