---
title: "Practice: Loops in Python (for and while)"
description: "63 practice problems for Loops in Python (for and while) in Python"
slug: loops-in-python-practice
canonical: https://learn.modernagecoders.com/resources/python/loops-in-python/practice/
category: "Python"
---
# Practice: Loops in Python (for and while)

**Total questions:** 63

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
for i in range(4):
    print(i)
```

*Hint:* range(4) generates numbers starting from 0 up to (but not including) 4.

**Answer:** `0`
`1`
`2`
`3`

`range(4)` generates the sequence 0, 1, 2, 3. The loop prints each value on a new line. Note that 4 is NOT included because the stop value is always excluded.

### Q2. [Easy] What is the output?

```
for i in range(1, 6):
    print(i, end=" ")
```

*Hint:* range(1, 6) starts at 1 and stops before 6.

**Answer:** `1 2 3 4 5 `

`range(1, 6)` generates 1, 2, 3, 4, 5. The `end=" "` parameter makes `print()` add a space after each number instead of a newline, so all numbers appear on the same line.

### Q3. [Easy] What is the output?

```
for char in "Hi":
    print(char)
```

*Hint:* A for loop iterates over each character of a string.

**Answer:** `H`
`i`

The for loop iterates over the string `"Hi"` one character at a time. First iteration: `char = "H"`, prints H. Second iteration: `char = "i"`, prints i.

### Q4. [Easy] What is the output?

```
count = 3
while count > 0:
    print(count)
    count -= 1
```

*Hint:* The loop runs while count is greater than 0, decreasing count each time.

**Answer:** `3`
`2`
`1`

Iteration 1: count = 3, prints 3, count becomes 2. Iteration 2: count = 2, prints 2, count becomes 1. Iteration 3: count = 1, prints 1, count becomes 0. Now `0 > 0` is False, so the loop stops.

### Q5. [Easy] What is the output?

```
for i in range(2, 10, 3):
    print(i, end=" ")
```

*Hint:* range(2, 10, 3) starts at 2 and adds 3 each time, stopping before 10.

**Answer:** `2 5 8 `

`range(2, 10, 3)` generates: start at 2, then 2+3=5, then 5+3=8, then 8+3=11 which exceeds 10 so it stops. The output is 2 5 8.

### Q6. [Easy] What is the output?

```
for i in range(3):
    print("Hello")
```

*Hint:* The loop runs 3 times. The value of i is not used in the body.

**Answer:** `Hello`
`Hello`
`Hello`

`range(3)` produces 0, 1, 2 (three values). The loop body runs once for each value, printing "Hello" three times. Even though `i` is not used inside the loop, the loop still runs three times.

### Q7. [Medium] What is the output?

```
for i in range(5, 0, -1):
    print(i, end=" ")
```

*Hint:* Negative step counts backwards. The stop value (0) is excluded.

**Answer:** `5 4 3 2 1 `

`range(5, 0, -1)` starts at 5 and decrements by 1 each time, stopping before 0. So it generates 5, 4, 3, 2, 1. The value 0 is excluded.

### Q8. [Medium] What is the output?

```
total = 0
for i in range(1, 6):
    total += i
print(total)
```

*Hint:* The loop adds 1 + 2 + 3 + 4 + 5 to total.

**Answer:** `15`

The loop adds each value from 1 to 5 to `total`. After iteration 1: total = 1. After iteration 2: total = 3. After iteration 3: total = 6. After iteration 4: total = 10. After iteration 5: total = 15.

### Q9. [Medium] What is the output?

```
x = 1
while x < 20:
    x *= 2
print(x)
```

*Hint:* Trace x: 1, 2, 4, 8, 16, ... What happens when x reaches 16?

**Answer:** `32`

x starts at 1. Each iteration doubles x: 1 -> 2 -> 4 -> 8 -> 16. After x = 16, the condition `16 < 20` is True, so the loop runs again: x = 32. Now `32 < 20` is False, so the loop stops. The printed value is 32, not 16.

### Q10. [Medium] What is the output?

```
for i in range(3):
    for j in range(2):
        print(i, j)
```

*Hint:* The inner loop runs completely for each iteration of the outer loop.

**Answer:** `0 0`
`0 1`
`1 0`
`1 1`
`2 0`
`2 1`

The outer loop runs 3 times (i = 0, 1, 2). For each value of i, the inner loop runs 2 times (j = 0, 1). Total iterations: 3 * 2 = 6. When i = 0, j goes through 0, 1. When i = 1, j goes through 0, 1 again. When i = 2, j goes through 0, 1 again.

### Q11. [Medium] What is the output?

```
for i in range(1, 5):
    print("*" * i)
```

*Hint:* The * operator on strings repeats the string. "*" * 3 gives "***".

**Answer:** `*`
`**`
`***`
`****`

When `i = 1`, `"*" * 1` = "*". When `i = 2`, `"*" * 2` = "**". When `i = 3`, `"*" * 3` = "***". When `i = 4`, `"*" * 4` = "****". This creates a right-triangle pattern of stars.

### Q12. [Medium] What is the output?

```
for i in range(10, 0):
    print(i)
```

*Hint:* What is the default step? Can you count from 10 to 0 with a positive step?

**Answer:** (No output - nothing is printed)

`range(10, 0)` uses the default step of +1. Since 10 is already greater than 0, you cannot reach 0 by adding 1, so the range is empty. The loop does not execute at all. To count backwards, you need `range(10, 0, -1)`.

### Q13. [Medium] What is the output?

```
for i in range(3):
    for j in range(3):
        if i == j:
            print(1, end=" ")
        else:
            print(0, end=" ")
    print()
```

*Hint:* This prints 1 when the row equals the column (diagonal), and 0 otherwise.

**Answer:** `1 0 0 `
`0 1 0 `
`0 0 1 `

This creates an identity matrix pattern. When i == j (diagonal positions 0,0 and 1,1 and 2,2), it prints 1. For all other positions, it prints 0. This is a 3x3 identity matrix.

### Q14. [Hard] What is the output?

```
for i in range(5):
    pass
print(i)
```

*Hint:* pass does nothing, but the loop still runs. What value does i hold after the loop?

**Answer:** `4`

The `pass` statement does nothing; it is a placeholder. The loop still iterates through 0, 1, 2, 3, 4, doing nothing each time. After the loop, `i` retains its last value, which is 4. In Python, loop variables survive after the loop ends.

### Q15. [Hard] What is the output?

```
for i in range(3):
    for j in range(i + 1):
        print(i + j, end=" ")
    print()
```

*Hint:* Trace each row: when i=0, j goes to 1. When i=1, j goes to 2. When i=2, j goes to 3.

**Answer:** `0 `
`1 2 `
`2 3 4 `

Row i=0: j in range(1) = [0]. Prints 0+0=0. Row i=1: j in range(2) = [0, 1]. Prints 1+0=1, 1+1=2. Row i=2: j in range(3) = [0, 1, 2]. Prints 2+0=2, 2+1=3, 2+2=4.

### Q16. [Hard] What is the output?

```
x = 100
while x > 1:
    x //= 3
    print(x, end=" ")
```

*Hint:* Floor divide x by 3 each time: 100 // 3 = ?, then that // 3 = ?, and so on.

**Answer:** `33 11 3 1 0 `

x = 100. Iteration 1: 100 // 3 = 33, prints 33. Iteration 2: 33 // 3 = 11, prints 11. Iteration 3: 11 // 3 = 3, prints 3. Iteration 4: 3 // 3 = 1, prints 1. Iteration 5: 1 // 3 = 0, prints 0. Now `0 > 1` is False, loop stops.

### Q17. [Hard] What is the output?

```
for i in range(4):
    for j in range(4 - i):
        print("*", end="")
    print()
```

*Hint:* When i=0, the inner loop runs 4 times. When i=1, it runs 3 times. And so on.

**Answer:** `****`
`***`
`**`
`*`

Row i=0: range(4) gives 4 stars. Row i=1: range(3) gives 3 stars. Row i=2: range(2) gives 2 stars. Row i=3: range(1) gives 1 star. This creates an inverted right triangle pattern.

### Q18. [Hard] What is the output?

```
result = 1
for i in range(1, 6):
    result *= i
print(result)
```

*Hint:* This calculates the factorial of 5 (1 * 2 * 3 * 4 * 5).

**Answer:** `120`

This computes 5! (5 factorial). result starts at 1. After i=1: 1*1=1. After i=2: 1*2=2. After i=3: 2*3=6. After i=4: 6*4=24. After i=5: 24*5=120. The factorial of 5 is 120.

### Q19. [Hard] What is the output?

```
for i in range(1, 4):
    for j in range(1, 4):
        print(i * j, end="\t")
    print()
```

*Hint:* This prints a 3x3 multiplication table. The tab character \t aligns columns.

**Answer:** `1	2	3	`
`2	4	6	`
`3	6	9	`

Row i=1: 1*1=1, 1*2=2, 1*3=3. Row i=2: 2*1=2, 2*2=4, 2*3=6. Row i=3: 3*1=3, 3*2=6, 3*3=9. Each value is separated by a tab character for alignment.

### Q20. [Medium] What is the difference between a for loop and a while loop in Python? When would you choose one over the other?

*Hint:* Think about whether you know the number of iterations in advance.

**Answer:** A `for` loop is used when you know how many times to iterate or when iterating over a sequence (string, list, range). A `while` loop is used when you want to repeat as long as a condition is True, and you may not know the number of iterations in advance. Use `for` when counting or traversing sequences. Use `while` when waiting for a condition to change (like user input or a calculation reaching a threshold).

Example: printing numbers 1 to 10 is best done with `for i in range(1, 11)`. But doubling a number until it exceeds 1000 is best done with a while loop, because you do not know in advance how many doublings are needed.

## Mixed Questions

### Q1. [Easy] What is the output?

```
word = "Code"
for ch in word:
    print(ch, end="-")
```

*Hint:* The loop iterates over each character and prints it followed by a hyphen.

**Answer:** `C-o-d-e-`

The for loop goes through each character of `"Code"`: C, o, d, e. Each character is printed followed by a hyphen (`end="-"`). Note that there is a trailing hyphen after the last character.

### Q2. [Easy] What is the output?

```
for num in [10, 20, 30]:
    print(num + 5)
```

*Hint:* The loop iterates over the list. Each element has 5 added to it.

**Answer:** `15`
`25`
`35`

The for loop takes each element from the list: 10, 20, 30. For each, it prints the element plus 5: 10+5=15, 20+5=25, 30+5=35.

### Q3. [Easy] What is the output?

```
i = 5
while i > 0:
    i -= 2
print(i)
```

*Hint:* Trace i: 5 -> 3 -> 1 -> ? What happens when i becomes negative?

**Answer:** `-1`

i starts at 5. Iteration 1: i = 5-2 = 3 (3 > 0, continue). Iteration 2: i = 3-2 = 1 (1 > 0, continue). Iteration 3: i = 1-2 = -1 (-1 > 0 is False, stop). The print is outside the loop, so it prints -1.

### Q4. [Medium] What is the output?

```
for i in range(1, 4):
    for j in range(1, 4):
        if i != j:
            print(i, j)
```

*Hint:* This prints all (i, j) pairs where i and j are different.

**Answer:** `1 2`
`1 3`
`2 1`
`2 3`
`3 1`
`3 2`

The nested loops generate all pairs (i, j) where both range from 1 to 3. The `if i != j` condition filters out pairs where i equals j (1,1), (2,2), (3,3). The remaining 6 pairs are printed.

### Q5. [Medium] What is the output?

```
nums = [4, 7, 2, 9, 1]
max_val = nums[0]
for num in nums:
    if num > max_val:
        max_val = num
print("Max:", max_val)
```

*Hint:* This finds the maximum value by comparing each element with the current maximum.

**Answer:** `Max: 9`

max_val starts as 4 (first element). Loop: 4 > 4? No. 7 > 4? Yes, max_val = 7. 2 > 7? No. 9 > 7? Yes, max_val = 9. 1 > 9? No. The maximum value is 9.

### Q6. [Medium] What is the output?

```
for i in range(3):
    print(i, end=" ")
    for j in range(3):
        print(j, end=" ")
    print()
```

*Hint:* The outer print and inner loop are at the same indentation level inside the outer loop.

**Answer:** `0 0 1 2 `
`1 0 1 2 `
`2 0 1 2 `

For each iteration of the outer loop: first `print(i, end=" ")` prints the outer index, then the inner loop prints 0, 1, 2. So each line starts with the row number followed by 0 1 2.

### Q7. [Medium] What is the output?

```
for index, val in enumerate(["a", "b", "c"], start=1):
    print(index, val)
```

*Hint:* enumerate() returns (index, value) pairs. start=1 makes the index begin at 1.

**Answer:** `1 a`
`2 b`
`3 c`

`enumerate()` pairs each element with its index. With `start=1`, the indices are 1, 2, 3 instead of the default 0, 1, 2. This is useful for displaying numbered lists.

### Q8. [Hard] What is the output?

```
n = 1
while n < 100:
    n *= 3
print(n)
```

*Hint:* Trace n: 1, 3, 9, 27, 81, ... When does n first reach or exceed 100?

**Answer:** `243`

n = 1. Iteration 1: n = 3 (3 < 100, continue). Iteration 2: n = 9 (9 < 100). Iteration 3: n = 27 (27 < 100). Iteration 4: n = 81 (81 < 100). Iteration 5: n = 243 (243 < 100 is False, stop). Prints 243.

### Q9. [Hard] What is the output?

```
for i in range(4):
    for j in range(i, 4):
        print(j, end=" ")
    print()
```

*Hint:* The inner loop starts from i (not 0) each time. When i increases, the inner loop starts later.

**Answer:** `0 1 2 3 `
`1 2 3 `
`2 3 `
`3 `

Row i=0: j goes from 0 to 3, prints 0 1 2 3. Row i=1: j goes from 1 to 3, prints 1 2 3. Row i=2: j goes from 2 to 3, prints 2 3. Row i=3: j goes from 3 to 3, prints 3. The inner range shrinks as i increases.

### Q10. [Hard] What is the output?

```
count = 0
for i in range(5):
    for j in range(5):
        if i + j == 4:
            count += 1
print(count)
```

*Hint:* Count pairs (i, j) where i + j equals 4, with both i and j in range(5).

**Answer:** `5`

The pairs where i + j = 4 are: (0,4), (1,3), (2,2), (3,1), (4,0). That is 5 pairs. The inner loop runs 25 times total (5 * 5), but only 5 of those satisfy the condition.

### Q11. [Medium] What does the else clause on a for loop do? When does it execute and when does it NOT execute?

*Hint:* Think about what happens when a loop is stopped early versus when it finishes all iterations.

**Answer:** The `else` clause on a loop runs only when the loop completes all its iterations normally. It does NOT run if the loop is terminated early by a `break` statement. If the loop body never executes (e.g., `for i in range(0)`), the else block still runs because no break was encountered.

This feature is useful for search operations. You can use break when you find what you are looking for, and the else block handles the case where the item was not found. Example: searching for a value in a list using a for loop with break on finding it, and else to print 'not found'.

### Q12. [Hard] What is the output?

```
for i in range(3):
    for j in range(3):
        print("(", i, ",", j, ")", end=" ")
    print()
```

*Hint:* This prints all (row, column) coordinates of a 3x3 grid.

**Answer:** `( 0 , 0 ) ( 0 , 1 ) ( 0 , 2 ) `
`( 1 , 0 ) ( 1 , 1 ) ( 1 , 2 ) `
`( 2 , 0 ) ( 2 , 1 ) ( 2 , 2 ) `

The nested loops create all coordinate pairs for a 3x3 grid. The outer loop controls the row (i) and the inner loop controls the column (j). Each pair is printed on the same line, and `print()` after the inner loop moves to a new line.

### Q13. [Hard] What is the output?

```
s = "Python"
for i in range(len(s) - 1, -1, -1):
    print(s[i], end="")
```

*Hint:* len("Python") is 6. range(5, -1, -1) gives 5, 4, 3, 2, 1, 0. This accesses characters in reverse.

**Answer:** `nohtyP`

`len("Python")` is 6. `range(5, -1, -1)` generates 5, 4, 3, 2, 1, 0. These are used as indices: s[5]='n', s[4]='o', s[3]='h', s[2]='t', s[1]='y', s[0]='P'. The string is printed in reverse: "nohtyP".

## Multiple Choice Questions

### Q1. [Easy] What does range(5) generate?

A. 1, 2, 3, 4, 5
B. 0, 1, 2, 3, 4
C. 0, 1, 2, 3, 4, 5
D. 1, 2, 3, 4

**Answer:** B

**B is correct.** `range(5)` generates numbers starting from 0 up to but not including 5: 0, 1, 2, 3, 4 (five numbers). Option A starts from 1 and includes 5. Option C has 6 numbers. Option D has only 4 numbers.

### Q2. [Easy] How many times does this loop run? for i in range(1, 8):

A. 8 times
B. 7 times
C. 9 times
D. 6 times

**Answer:** B

**B is correct.** `range(1, 8)` generates 1, 2, 3, 4, 5, 6, 7 (seven numbers). The stop value 8 is excluded. A quick way to count: 8 - 1 = 7.

### Q3. [Easy] Which loop is best when you know exactly how many times you want to repeat?

A. while loop
B. for loop
C. do-while loop
D. infinite loop

**Answer:** B

**B is correct.** A `for` loop with `range()` is ideal when the number of iterations is known. A while loop (option A) is better for condition-based repetition. Python does not have a do-while loop (option C). An infinite loop (option D) is not a type; it is a bug.

### Q4. [Easy] What is the output of: for i in range(0): print(i)

A. 0
B. Nothing is printed
C. Error
D. Infinite loop

**Answer:** B

**B is correct.** `range(0)` generates an empty sequence (zero numbers). The loop body never executes, so nothing is printed. This is not an error; it is valid code.

### Q5. [Easy] What keyword is used to skip to the next iteration of a loop?

A. break
B. skip
C. continue
D. next

**Answer:** C

**C is correct.** The `continue` statement skips the rest of the current iteration and moves to the next one. `break` (option A) exits the loop entirely. `skip` (option B) and `next` (option D) are not Python keywords.

### Q6. [Medium] What does range(10, 2, -3) generate?

A. 10, 7, 4
B. 10, 7, 4, 1
C. 10, 7, 4, 2
D. 10, 8, 5, 2

**Answer:** A

**A is correct.** Starting at 10, subtracting 3 each time: 10, 7, 4. The next would be 1, but we stop before reaching 2 (actually 1 < 2 when going backwards means stop). Wait - let us re-check: 4 - 3 = 1. Since 1 < 2 (stop value) with negative step, 1 is not included. So the answer is 10, 7, 4.

### Q7. [Medium] How many total iterations does this nested loop have? for i in range(5): for j in range(3):

A. 5
B. 3
C. 8
D. 15

**Answer:** D

**D is correct.** The outer loop runs 5 times and for each outer iteration, the inner loop runs 3 times. Total iterations of the inner body: 5 * 3 = 15. Options A and B only count one of the loops. Option C adds them instead of multiplying.

### Q8. [Medium] What happens if the while loop condition is False from the start?

A. The loop runs once
B. The loop body never executes
C. Python raises an error
D. The loop runs forever

**Answer:** B

**B is correct.** A while loop checks the condition BEFORE executing the body. If the condition is False initially, the body is skipped entirely. This is different from a do-while loop (which Python does not have), where the body always runs at least once (option A).

### Q9. [Medium] What is the value of i after this loop? for i in range(10): pass

A. 10
B. 9
C. 0
D. i is undefined

**Answer:** B

**B is correct.** The loop variable `i` takes values 0 through 9. After the loop completes, `i` retains its last value, which is 9. In Python, loop variables are NOT scoped to the loop. Option D would be true in some other languages but not Python.

### Q10. [Medium] What does enumerate() return?

A. Only the index of each element
B. Only the value of each element
C. Pairs of (index, value)
D. The total count of elements

**Answer:** C

**C is correct.** `enumerate()` returns pairs of (index, value) for each element in the sequence. This allows you to access both the position and the value in a single loop. Options A and B only give one piece of information. Option D describes `len()`.

### Q11. [Medium] When does the else clause of a for loop execute?

A. When the loop encounters an error
B. When the loop is stopped by break
C. When the loop completes without break
D. On every iteration of the loop

**Answer:** C

**C is correct.** The else block runs only when the loop finishes all iterations without encountering a `break`. If break is executed (option B), the else block is skipped. It is not related to errors (option A) and does not run on every iteration (option D).

### Q12. [Hard] What is the output of: for i in range(3, 3): print(i)

A. 3
B. Nothing is printed
C. Error
D. 0 1 2

**Answer:** B

**B is correct.** `range(3, 3)` generates an empty sequence because the start and stop are the same (there are no numbers >= 3 and < 3). The loop body never executes. This is not an error (option C); it is valid Python.

### Q13. [Hard] What is the output of this code?

```
x = 10
while x > 0:
    x -= 3
print(x)
```

A. 1
B. 0
C. -2
D. 3

**Answer:** C

**C is correct.** x starts at 10: 10->7->4->1. After x=1, the condition `1 > 0` is True, so x becomes 1-3 = -2. Now `-2 > 0` is False, loop stops. x = -2. Option A (1) would be correct if the check happened after the subtraction.

### Q14. [Hard] How many times does the inner print execute?

```
for i in range(4):
    for j in range(i):
        print(i, j)
```

A. 16
B. 10
C. 6
D. 4

**Answer:** C

**C is correct.** When i=0: range(0) gives 0 iterations. When i=1: range(1) gives 1 iteration. When i=2: range(2) gives 2 iterations. When i=3: range(3) gives 3 iterations. Total: 0 + 1 + 2 + 3 = 6.

### Q15. [Hard] What is the output?

```
for i in range(3):
    print(i)
else:
    print("Done")
```

A. 0 1 2
B. 0 1 2 Done
C. Done
D. Error - else cannot be used with for

**Answer:** B

**B is correct.** The loop prints 0, 1, 2 (each on a new line). Since the loop completes without a break, the else block executes and prints "Done". Option D is wrong because Python does support else with for loops.

### Q16. [Hard] Which creates the sequence 20, 15, 10, 5?

A. range(20, 0, -5)
B. range(20, 4, -5)
C. range(20, 5, -5)
D. range(5, 20, 5)

**Answer:** B

**B is correct.** `range(20, 4, -5)` starts at 20, subtracts 5 each time, and stops before 4: 20, 15, 10, 5. The next would be 0, but 0 < 4 (in terms of going below stop), so it stops. Option A would include 5 and then stop. Option C would include 5 only if stop is less than 5. Option D counts upward.

### Q17. [Hard] What causes an infinite while loop?

A. Using a very large range
B. The condition never becoming False
C. Using nested loops
D. Forgetting the colon after while

**Answer:** B

**B is correct.** A while loop becomes infinite when its condition never becomes False, usually because the loop variable is not updated or updated incorrectly. A large range (option A) makes a long loop, not infinite. Nested loops (option C) are normal. Missing colon (option D) causes a SyntaxError, not an infinite loop.

### Q18. [Easy] What does end="" do in print()?

A. Ends the program
B. Prints nothing after the value (no newline)
C. Prints an empty string
D. Causes an error

**Answer:** B

**B is correct.** By default, `print()` adds a newline after the output. `end=""` replaces that newline with nothing, so the next print continues on the same line. This is commonly used in loops to print values side by side.

### Q19. [Medium] What is the output of: print(list(range(1, 10, 2)))?

A. [1, 3, 5, 7, 9]
B. [1, 3, 5, 7]
C. [2, 4, 6, 8]
D. [1, 2, 3, 4, 5, 6, 7, 8, 9]

**Answer:** A

**A is correct.** `range(1, 10, 2)` starts at 1 and adds 2 each time, stopping before 10: 1, 3, 5, 7, 9. Converting to a list gives [1, 3, 5, 7, 9]. These are odd numbers from 1 to 9.

### Q20. [Hard] What happens when you use range() with a step of 0?

A. It returns an empty range
B. It generates an infinite sequence
C. ValueError: range() arg 3 must not be zero
D. It uses step 1 as default

**Answer:** C

**C is correct.** A step of 0 would create an infinite sequence (never progressing), so Python raises a `ValueError` to prevent this. The error message is: "range() arg 3 must not be zero". This is a safety feature.

## Coding Challenges

### Challenge 1. Sum of Even Numbers

**Difficulty:** Easy

Write a program that uses a for loop to calculate and print the sum of all even numbers from 2 to 20 (inclusive).

**Constraints:**

- Use a for loop with range(). Do not hardcode the answer.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Sum of even numbers from 2 to 20: 110
```

**Solution:**

```python
total = 0
for i in range(2, 21, 2):
    total += i
print("Sum of even numbers from 2 to 20:", total)
```

### Challenge 2. Reverse a String Using a Loop

**Difficulty:** Easy

Aarav has the string "Python". Write a program using a for loop to print the string in reverse order (character by character on the same line).

**Constraints:**

- Use a for loop. Do not use slicing ([::-1]).

**Sample input:**

```
(No input required)
```

**Sample output:**

```
nohtyP
```

**Solution:**

```python
text = "Python"
for i in range(len(text) - 1, -1, -1):
    print(text[i], end="")
print()
```

### Challenge 3. Multiplication Table

**Difficulty:** Easy

Write a program that prints the multiplication table of 7 (from 7 x 1 to 7 x 10).

**Constraints:**

- Use a for loop with range().

**Sample input:**

```
(No input required)
```

**Sample output:**

```
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
```

**Solution:**

```python
num = 7
for i in range(1, 11):
    print(num, "x", i, "=", num * i)
```

### Challenge 4. Count Vowels in a String

**Difficulty:** Medium

Priya has the string "Modern Age Coders". Write a program that counts and prints the number of vowels (a, e, i, o, u - both uppercase and lowercase) in the string.

**Constraints:**

- Use a for loop to iterate through each character.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Vowels in 'Modern Age Coders': 6
```

**Solution:**

```python
text = "Modern Age Coders"
count = 0
for ch in text:
    if ch.lower() in "aeiou":
        count += 1
print("Vowels in '" + text + "':", count)
```

### Challenge 5. Fibonacci Sequence

**Difficulty:** Medium

Write a program that prints the first 10 numbers of the Fibonacci sequence. The sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

**Constraints:**

- Use a while or for loop.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
0 1 1 2 3 5 8 13 21 34
```

**Solution:**

```python
a = 0
b = 1
for i in range(10):
    print(a, end=" ")
    a, b = b, a + b
print()
```

### Challenge 6. Number Guessing Simulation

**Difficulty:** Medium

Rohan is building a number guessing game. The secret number is 7. Simulate guesses using a while loop: start with guess = 1 and increase by 2 each time until the guess equals the secret number. Print each guess and whether it is too low, too high, or correct.

**Constraints:**

- Use a while loop. Do not use a for loop.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Guess: 1 - Too low!
Guess: 3 - Too low!
Guess: 5 - Too low!
Guess: 7 - Correct!
```

**Solution:**

```python
secret = 7
guess = 1
while guess <= secret:
    if guess < secret:
        print("Guess:", guess, "- Too low!")
    else:
        print("Guess:", guess, "- Correct!")
    guess += 2
```

### Challenge 7. Prime Number Checker

**Difficulty:** Hard

Write a program that checks whether the number 29 is prime. A prime number is only divisible by 1 and itself. Use a for loop to test divisibility and print the result.

**Constraints:**

- Use a for loop with a break statement. Use the loop-else pattern.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
29 is a prime number
```

**Solution:**

```python
num = 29
if num < 2:
    print(num, "is not a prime number")
else:
    for i in range(2, num):
        if num % i == 0:
            print(num, "is not a prime number")
            break
    else:
        print(num, "is a prime number")
```

### Challenge 8. Nested Loop Grid with Coordinates

**Difficulty:** Hard

Write a program that prints a 4x4 grid where each cell shows its row and column number in the format (row,col), with rows and columns numbered from 1.

**Constraints:**

- Use nested for loops.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
(1,1) (1,2) (1,3) (1,4) 
(2,1) (2,2) (2,3) (2,4) 
(3,1) (3,2) (3,3) (3,4) 
(4,1) (4,2) (4,3) (4,4) 
```

**Solution:**

```python
for i in range(1, 5):
    for j in range(1, 5):
        print("(" + str(i) + "," + str(j) + ")", end=" ")
    print()
```

### Challenge 9. Digit Sum Calculator

**Difficulty:** Hard

Write a program using a while loop to calculate the sum of digits of the number 98764. Extract digits one by one using % and // operators.

**Constraints:**

- Use a while loop with % and // operators. Do not convert to a string.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Sum of digits of 98764: 34
```

**Solution:**

```python
num = 98764
original = num
total = 0
while num > 0:
    digit = num % 10
    total += digit
    num //= 10
print("Sum of digits of", original, ":", total)
```

### Challenge 10. Diamond Top Half

**Difficulty:** Hard

Write a program using nested loops to print the top half of a diamond with 5 rows. Each row should have leading spaces followed by stars.

**Constraints:**

- Use nested for loops. Print spaces before stars.

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

---

*Notes: https://learn.modernagecoders.com/resources/python/loops-in-python/*
