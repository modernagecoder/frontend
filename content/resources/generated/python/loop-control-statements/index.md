---
title: "Loop Control in Python - break, continue, pass Statements Explained | Modern Age Coders"
description: "Master Python loop control statements: break, continue, and pass. Learn how they work in for and while loops, nested loop break behavior, loop-else clause, and 55 practice questions."
slug: loop-control-statements
canonical: https://learn.modernagecoders.com/resources/python/loop-control-statements
category: "Python"
keywords: ["python break continue pass", "loop control python", "nested loops python", "python break statement", "python continue statement", "python pass statement", "break in nested loops python", "python loop else break"]
---
# Loop Control - break, continue, pass

**Difficulty:** Beginner  
**Reading time:** 18 min  
**Chapter:** 9  
**Practice questions:** 55

## What Are Loop Control Statements?

Loop control statements change the normal flow of a loop. Normally, a loop runs all its iterations from start to finish. But sometimes you need to **stop a loop early**, **skip certain iterations**, or **leave a placeholder** for code you have not written yet. Python provides three loop control statements for these purposes:

**1. break** - Immediately exits the loop entirely. No more iterations are executed.

**2. continue** - Skips the rest of the current iteration and jumps to the next iteration.

**3. pass** - Does absolutely nothing. It is a placeholder that lets you have an empty code block without causing a syntax error.

These three statements give you fine-grained control over loop execution. They work with both `for` and `while` loops.

## Why Do You Need Loop Control Statements?

Without loop control statements, a loop must always run every single iteration. That is often wasteful or even incorrect. Here is why each statement matters:

### 1. break - Stop When You Have Found What You Need

Imagine searching through a list of 10,000 student names to find "Aarav". If Aarav is the 5th name, there is no point checking the remaining 9,995 names. The `break` statement lets you stop the loop immediately once you find what you are looking for, saving time and computation.

### 2. continue - Skip What You Do Not Need

Suppose you are processing a list of exam scores and want to calculate the average of only the passing scores (above 40). When you encounter a failing score, you do not want to include it. The `continue` statement lets you skip that iteration and move to the next score without adding a failing mark to your total.

### 3. pass - Plan Your Code Structure First

When you are designing a program, you might know that a loop or condition needs to be there, but you have not decided what code to put inside it yet. Python requires that code blocks (after `if`, `for`, `while`, etc.) contain at least one statement. The `pass` statement acts as a placeholder, allowing your program to run without errors while you work on the logic.

### 4. Cleaner Logic

Loop control statements often lead to simpler, more readable code compared to using complex conditions in the loop header. Instead of writing `while condition1 and condition2 and not found`, you can use a simpler condition with a `break` inside.

## Detailed Explanation

### 1. The break Statement

The `break` statement immediately terminates the loop it is in. The program continues with the first statement after the loop.

#### break in a for Loop

```
for i in range(1, 11):
    if i == 5:
        break
    print(i)
```

This prints 1, 2, 3, 4. When `i` reaches 5, the `if` condition is True, `break` executes, and the loop exits immediately. The `print(i)` for i = 5 never runs, and iterations 6 through 10 are also skipped.

#### break in a while Loop

```
count = 0
while True:
    if count >= 3:
        break
    print(count)
    count += 1
```

This uses `while True` (which would normally be an infinite loop) and relies on `break` to exit. When count reaches 3, break terminates the loop. This pattern is common when you need to check the exit condition in the middle of the loop body rather than at the top.

#### break Only Exits the Innermost Loop

When using nested loops, `break` only exits the loop it is directly inside. The outer loop continues normally:

```
for i in range(3):
    for j in range(3):
        if j == 1:
            break
        print(i, j)
```

This prints (0, 0), (1, 0), (2, 0). For each value of i, the inner loop starts with j = 0 (prints it), then j = 1 triggers break (exits inner loop only). The outer loop continues to the next value of i.

### 2. The continue Statement

The `continue` statement skips the rest of the current iteration and jumps to the next one. In a for loop, it moves to the next value. In a while loop, it goes back to check the condition.

#### continue in a for Loop

```
for i in range(1, 6):
    if i == 3:
        continue
    print(i)
```

This prints 1, 2, 4, 5. When `i` is 3, `continue` skips the `print(i)` and moves to i = 4. All other values are printed normally.

#### continue in a while Loop

```
i = 0
while i < 5:
    i += 1
    if i == 3:
        continue
    print(i)
```

This prints 1, 2, 4, 5. When i is 3, continue skips the print and goes back to check the while condition. Important: in a while loop, make sure the counter update happens **before** the continue statement. If it comes after, continue will skip the update, potentially causing an infinite loop.

### 3. The pass Statement

`pass` is Python's way of saying "do nothing." It is a null operation. When Python encounters `pass`, it does nothing and moves to the next statement.

#### pass as a Placeholder

```
for i in range(10):
    pass  # TODO: add processing logic later
```

This loop runs 10 times, doing nothing each time. Without `pass`, an empty loop body would cause an `IndentationError` or `SyntaxError`. The `pass` statement keeps the code syntactically valid while you plan the logic.

#### pass in Conditional Blocks

```
for num in range(1, 11):
    if num % 2 == 0:
        pass  # Will handle even numbers later
    else:
        print(num, "is odd")
```

Here, `pass` acts as a placeholder for the even-number handling code. The odd numbers are still processed normally.

### 4. break with the else Clause

This is one of Python's most unique features. When a `for` or `while` loop has an `else` clause, the else block runs **only if the loop completes without encountering a break**.

```
for i in range(2, 10):
    if i == 5:
        print("Found 5!")
        break
else:
    print("5 was not found")
```

Since 5 is in the range, break executes, and the else block is skipped. If you change the condition to `i == 15` (not in range), the loop completes normally and the else block runs.

Think of loop-else as "no-break": the else runs when there was no break.

### 5. Using break for Searching

A common pattern is using a for loop with break to search for an item:

```
names = ["Aarav", "Priya", "Rohan", "Ananya"]
search = "Rohan"

for name in names:
    if name == search:
        print(search, "found!")
        break
else:
    print(search, "not found.")
```

If the name is in the list, break stops the search and prints "found". If the loop finishes without finding the name, the else block prints "not found". This is cleaner than using a Boolean flag variable.

### 6. Using continue for Filtering

A common use of continue is to skip unwanted values:

```
scores = [85, 42, 0, 93, 38, 76, 0, 88]
count = 0
total = 0

for score in scores:
    if score == 0:  # Skip absent students
        continue
    total += score
    count += 1

print("Average (excluding zeros):", total / count)
```

When a score is 0 (absent student), continue skips the addition and counting. Only non-zero scores are included in the average.

## Code Examples

### break - Stopping a Loop Early

```python
# Find the first number divisible by 7 in range 1 to 50
for num in range(1, 51):
    if num % 7 == 0:
        print("First number divisible by 7:", num)
        break
```

The loop checks each number from 1 to 50. When it finds 7 (the first number divisible by 7), it prints it and breaks. Numbers 8 through 50 are never checked. Without break, the loop would find and print 7, 14, 21, 28, 35, 42, 49 (all of them).

**Output:**

```
First number divisible by 7: 7
```

### continue - Skipping Specific Values

```python
# Print only odd numbers from 1 to 10
for i in range(1, 11):
    if i % 2 == 0:
        continue
    print(i, end=" ")
print()
```

When `i` is even, `continue` skips the print and moves to the next iteration. Only odd numbers reach the print statement. This achieves the same result as `if i % 2 != 0: print(i)`, but demonstrates the continue pattern.

**Output:**

```
1 3 5 7 9 
```

### pass - Placeholder for Future Code

```python
# Planning a grading system - logic not implemented yet
marks = [85, 42, 93, 67, 38]

for mark in marks:
    if mark >= 90:
        pass  # TODO: Grade A
    elif mark >= 60:
        pass  # TODO: Grade B
    else:
        pass  # TODO: Grade C or fail

print("Program runs without errors even with empty blocks")
```

`pass` allows you to define the structure of your conditions without implementing the logic yet. Without pass, Python would raise a `SyntaxError` because each if/elif/else block requires at least one statement. This is useful during the planning phase of writing a program.

**Output:**

```
Program runs without errors even with empty blocks
```

### break in Nested Loops - Only Inner Loop Exits

```python
for i in range(1, 4):
    print("Outer loop i =", i)
    for j in range(1, 4):
        if j == 2:
            break
        print("  Inner loop j =", j)
    print("  Inner loop ended")
print("Outer loop ended")
```

When j equals 2, break exits only the inner loop. The outer loop continues with the next value of i. For each value of i (1, 2, 3), the inner loop prints j = 1 then breaks at j = 2. The "Inner loop ended" message appears after each break, proving the outer loop keeps running.

**Output:**

```
Outer loop i = 1
  Inner loop j = 1
  Inner loop ended
Outer loop i = 2
  Inner loop j = 1
  Inner loop ended
Outer loop i = 3
  Inner loop j = 1
  Inner loop ended
Outer loop ended
```

### Loop-else Pattern for Searching

```python
# Search for a prime number
def check_prime(n):
    if n < 2:
        print(n, "is not prime")
        return
    for i in range(2, n):
        if n % i == 0:
            print(n, "is not prime (divisible by", str(i) + ")")
            break
    else:
        print(n, "is prime")

check_prime(17)
check_prime(24)
check_prime(2)
```

For 17: the loop checks divisors 2 through 16, finds none, so else runs ("17 is prime"). For 24: the loop finds 24 % 2 == 0, prints the message, and breaks. Since break executed, else is skipped. For 2: range(2, 2) is empty, so the loop body never runs, but else still runs because no break was encountered.

**Output:**

```
17 is prime
24 is not prime (divisible by 2)
2 is prime
```

### continue for Filtering Data

```python
# Calculate average marks, skipping absent students (score = -1)
marks = [78, 92, -1, 85, -1, 67, 91, -1, 73]
total = 0
count = 0

for mark in marks:
    if mark == -1:
        continue
    total += mark
    count += 1

print("Students present:", count)
print("Average marks:", total / count)
```

Absent students are marked with -1. The `continue` statement skips these entries, so they are not counted in the total or the count. Only valid scores (78, 92, 85, 67, 91, 73) are used. The average is 486 / 6 = 81.0.

**Output:**

```
Students present: 6
Average marks: 81.0
```

### Combining break and continue

```python
# Process numbers: skip negatives, stop at 0
numbers = [5, 3, -2, 8, -1, 0, 7, 4]

print("Processing:")
for num in numbers:
    if num == 0:
        print("Encountered 0 - stopping!")
        break
    if num < 0:
        print("Skipping negative:", num)
        continue
    print("Processing:", num)

print("Done")
```

This demonstrates using both break and continue in the same loop. Negative numbers are skipped with continue. When 0 is encountered, the loop stops with break. Positive numbers are processed normally. The order of checks matters: we check for 0 first (break), then for negatives (continue), then process.

**Output:**

```
Processing:
Processing: 5
Processing: 3
Skipping negative: -2
Processing: 8
Skipping negative: -1
Encountered 0 - stopping!
Done
```

### continue Pitfall in while Loops

```python
# WRONG: continue skips the counter update, causing infinite loop
# i = 0
# while i < 5:
#     if i == 3:
#         continue  # i never becomes 4!
#     print(i)
#     i += 1

# CORRECT: update counter BEFORE continue
i = 0
while i < 5:
    i += 1
    if i == 3:
        continue
    print(i)
```

In the wrong version, when i is 3, continue skips `i += 1`, so i stays at 3 forever. In the correct version, `i += 1` is placed before the continue check. When i becomes 3, continue skips the print but i has already been incremented. Note: the correct version prints 1, 2, 4, 5 (not 0, 1, 2, 4).

**Output:**

```
1
2
4
5
```

## Common Mistakes

### Infinite Loop from continue in while Loop

**Wrong:**

```
i = 0
while i < 5:
    if i == 3:
        continue  # Skips i += 1, so i stays 3 forever!
    print(i)
    i += 1
```

Infinite loop! When i reaches 3, continue skips i += 1, and i remains 3 forever.

**Correct:**

```
i = 0
while i < 5:
    if i == 3:
        i += 1
        continue
    print(i)
    i += 1
```

In a while loop, `continue` goes back to the condition check. If the counter update (`i += 1`) comes after continue, it gets skipped. Always update the counter before calling continue in a while loop, or restructure your code to avoid this trap.

### Expecting break to Exit All Nested Loops

**Wrong:**

```
# Trying to break out of both loops
for i in range(5):
    for j in range(5):
        if i + j == 6:
            print("Found!", i, j)
            break  # Only exits inner loop!
    # Outer loop continues here
```

break only exits the inner loop. The outer loop keeps running.

**Correct:**

```
# Use a flag variable to break out of both loops
found = False
for i in range(5):
    for j in range(5):
        if i + j == 6:
            print("Found!", i, j)
            found = True
            break
    if found:
        break
```

`break` only exits the innermost loop it is inside. To exit multiple nested loops, use a flag variable (like `found`). Set the flag to True before breaking the inner loop, then check the flag after the inner loop to break the outer loop too.

### Misunderstanding Loop-else as 'if-else'

**Wrong:**

```
# Student thinks else runs when loop condition is False
for i in range(3):
    print(i)
else:
    print("This runs because the loop is 'done'")
# Actually correct, but the student's reasoning is wrong
```

No error, but the student misunderstands WHY else runs. It is not about the condition being False.

**Correct:**

```
# else runs because no 'break' was encountered
for i in range(3):
    print(i)
else:
    print("No break was encountered - loop completed normally")
```

The loop-else clause is NOT the same as an if-else. The else block runs specifically because no `break` statement was executed during the loop. If there is no break in the loop at all, else will always run (making it somewhat pointless). The else is only meaningful when the loop contains a break.

### Using pass When break or continue Is Needed

**Wrong:**

```
# Trying to skip even numbers
for i in range(10):
    if i % 2 == 0:
        pass  # This does NOT skip! It does nothing.
    print(i)
```

No error, but all numbers 0-9 are printed. pass does not skip the print statement.

**Correct:**

```
for i in range(10):
    if i % 2 == 0:
        continue  # This skips the rest of the iteration
    print(i)
```

`pass` does literally nothing. Execution continues to the next line after pass, which is `print(i)`. If you want to skip the rest of the iteration, use `continue`. If you want to stop the loop entirely, use `break`. `pass` is only useful as a placeholder for future code.

### Placing Code After break

**Wrong:**

```
for i in range(5):
    if i == 3:
        break
        print("This line never runs")  # Dead code!
    print(i)
```

No error, but the print after break is unreachable code. It never executes.

**Correct:**

```
for i in range(5):
    if i == 3:
        print("Stopping at 3")
        break
    print(i)
```

Any code placed after a `break` (at the same indentation level within the same block) will never execute because break immediately exits the loop. If you need to do something before breaking, put that code before the break statement.

### Using break Outside a Loop

**Wrong:**

```
x = 5
if x == 5:
    break  # SyntaxError!
```

SyntaxError: 'break' outside loop

**Correct:**

```
x = 5
for i in range(10):
    if i == x:
        break
    print(i)
```

`break` and `continue` can only be used inside a loop (`for` or `while`). Using them in an `if` statement that is NOT inside a loop causes a SyntaxError. The if/break combination only works when the if is inside a loop.

## Summary

- break immediately exits the current loop. No further iterations are executed. The program continues with the first statement after the loop.
- continue skips the rest of the current iteration and moves to the next iteration. In a for loop, it takes the next value. In a while loop, it re-checks the condition.
- pass does nothing. It is a placeholder used to keep code syntactically valid when a code block is required but no action is needed yet.
- In nested loops, break only exits the innermost loop. The outer loop continues normally. To break out of multiple loops, use a flag variable.
- The loop-else clause runs only when the loop completes without encountering a break. Think of it as 'no-break'. If break executes, else is skipped.
- A common use of break is searching: loop through items, break when found, use else to handle 'not found'.
- A common use of continue is filtering: skip unwanted items (like zeros or negative values) and process only the desired ones.
- In while loops, place the counter update BEFORE the continue statement. Otherwise, continue will skip the update, causing an infinite loop.
- break and continue can only be used inside loops. Using them outside a loop causes a SyntaxError.
- pass is different from break and continue. break stops the loop, continue skips to the next iteration, but pass simply does nothing and execution continues to the next line.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/python/loop-control-statements/*
*Practice questions: https://learn.modernagecoders.com/resources/python/loop-control-statements/practice/*
