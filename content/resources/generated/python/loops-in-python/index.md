---
title: "Loops in Python - for Loop, while Loop, range(), Nested Loops | Modern Age Coders"
description: "Learn Python for loops, while loops, range() function, nested loops, enumerate(), and loop-else clause. Includes 65 practice questions with output prediction and coding challenges."
slug: loops-in-python
canonical: https://learn.modernagecoders.com/resources/python/loops-in-python/
category: "Python"
keywords: ["python for loop", "while loop python", "python loops explained", "python loops tutorial for beginners", "python range function", "nested loops python", "python enumerate", "python loop else", "python for loop examples", "while loop examples python"]
---
# Loops in Python (for and while)

**Difficulty:** Beginner  
**Reading time:** 22 min  
**Chapter:** 8  
**Practice questions:** 63

## What Are Loops in Python?

A **loop** is a programming construct that repeats a block of code multiple times. Instead of writing the same instruction over and over, you write it once inside a loop and tell Python how many times to repeat it, or under what condition to keep repeating.

Consider this scenario: you want to print the numbers 1 through 100. Without loops, you would need 100 separate `print()` statements. With a loop, you need just two lines of code. Loops eliminate repetition and make programs shorter, cleaner, and easier to maintain.

### Two Types of Loops

Python provides two types of loops:

**1. for loop** - Used when you know in advance how many times you want to repeat something, or when you want to go through each item in a sequence (like a string, list, or range of numbers).

**2. while loop** - Used when you want to repeat something as long as a condition remains True. You might not know in advance how many repetitions are needed.

Both types achieve the same goal (repetition), but they are suited to different situations. Choosing the right type of loop makes your code more readable and less error-prone.

## Why Are Loops Important?

Loops are one of the most fundamental concepts in programming. Almost every real program uses loops. Here is why they matter:

### 1. Eliminating Repetitive Code

Without loops, printing numbers 1 to 1000 would require 1000 lines of code. With a `for` loop, you need just 2 lines. Loops follow the DRY principle (Do not Repeat Yourself), which is a cornerstone of good programming.

### 2. Processing Collections of Data

When you have a list of student names, marks, or items in a shopping cart, you need to process each item one by one. Loops let you iterate through every element in a collection without knowing the size in advance.

### 3. Building Algorithms

Nearly every algorithm involves loops. Searching for an element, sorting a list, calculating a factorial, generating patterns, counting occurrences - all of these require loops. Without understanding loops, you cannot solve most programming problems.

### 4. Automating Tasks

Loops are the foundation of automation. Whether you are processing 10 files or 10,000 records, the loop body stays the same. Only the number of repetitions changes. This is what makes computers powerful: they can repeat a task millions of times without getting tired or making mistakes.

### 5. Foundation for Advanced Concepts

Loops are prerequisites for understanding list comprehensions, file processing, web scraping, game loops, animations, and virtually every advanced topic in programming.

## Detailed Explanation

### 1. The for Loop with range()

The `for` loop repeats a block of code for each value in a sequence. The most common way to create a sequence of numbers is the `range()` function.

#### range() with One Argument

`range(n)` generates numbers from **0 to n-1** (n numbers total). It does NOT include n itself.

```
for i in range(5):
    print(i)
```

This prints 0, 1, 2, 3, 4 (five numbers, starting from 0). The variable `i` is called the **loop variable** (or iterator). It automatically takes the next value from the range on each iteration.

#### range() with Two Arguments

`range(start, stop)` generates numbers from **start** to **stop-1**. The start value is included, but the stop value is excluded.

```
for i in range(1, 6):
    print(i)
```

This prints 1, 2, 3, 4, 5. The number 6 is NOT included. If you want to print 1 to 10, use `range(1, 11)`.

#### range() with Three Arguments

`range(start, stop, step)` generates numbers from start to stop-1, incrementing by step each time.

```
for i in range(2, 11, 2):
    print(i)
```

This prints 2, 4, 6, 8, 10 (even numbers from 2 to 10). The step value determines how much to add after each iteration.

You can also use a negative step to count backwards:

```
for i in range(10, 0, -1):
    print(i)
```

This prints 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 (counting down). Notice that 0 is NOT included because the stop value is always excluded.

### 2. Iterating Over Strings

A `for` loop can iterate over each character of a string directly, without using `range()`:

```
name = "Aarav"
for char in name:
    print(char)
```

This prints each character on a separate line: A, a, r, a, v. The loop variable `char` takes the value of each character in order.

### 3. Iterating Over Lists

Just like strings, you can loop through each element of a list:

```
fruits = ["apple", "mango", "banana"]
for fruit in fruits:
    print(fruit)
```

This prints each fruit on a separate line. The loop automatically handles the indexing for you.

### 4. The while Loop

A `while` loop repeats a block of code as long as a condition is `True`. The condition is checked **before each iteration**. If the condition is False from the start, the loop body never executes.

```
count = 1
while count <= 5:
    print(count)
    count += 1
```

This prints 1, 2, 3, 4, 5. Here is how it works: (1) Check if `count <= 5` (1 <= 5 is True, so enter the loop). (2) Print count. (3) Increment count by 1. (4) Go back to step 1. When count becomes 6, the condition `6 <= 5` is False, and the loop stops.

#### while Loop with a Counter

A common pattern is using a counter variable with a while loop:

```
i = 0
while i < 3:
    print("Hello")
    i += 1
```

This prints "Hello" three times. The counter `i` starts at 0, and the loop runs while i is less than 3 (so i takes values 0, 1, 2).

### 5. Infinite Loops and How to Avoid Them

An **infinite loop** is a loop that never stops because its condition never becomes False. This is usually a bug.

```
# WARNING: This is an infinite loop!
count = 1
while count <= 5:
    print(count)
    # Missing: count += 1
```

Since `count` never changes, the condition `count <= 5` is always True, and the loop prints 1 forever. To avoid infinite loops: (1) Always make sure the loop variable changes inside the loop body. (2) Ensure the change moves toward making the condition False. (3) Double-check the condition and the update direction.

### 6. The else Clause on Loops

Python has a unique feature: you can attach an `else` block to a loop. The `else` block runs **only if the loop completes normally** (without being stopped by a `break` statement). This applies to both `for` and `while` loops.

```
for i in range(5):
    print(i)
else:
    print("Loop completed!")
```

This prints 0, 1, 2, 3, 4, and then "Loop completed!" because the loop finished all its iterations without a break.

### 7. Nested Loops

A **nested loop** is a loop inside another loop. For each iteration of the **outer loop**, the **inner loop** runs completely from start to finish.

```
for i in range(3):
    for j in range(4):
        print("*", end=" ")
    print()
```

This prints a grid of 3 rows and 4 columns of stars. The outer loop controls the rows (runs 3 times), and for each row, the inner loop prints 4 stars. The `end=" "` keeps the stars on the same line, and `print()` after the inner loop moves to the next line.

Understanding nested loops is essential for pattern printing, working with 2D data (like tables or grids), and many algorithmic problems.

### 8. The enumerate() Function

`enumerate()` lets you loop through a sequence while keeping track of the index (position) of each element:

```
colors = ["red", "green", "blue"]
for index, color in enumerate(colors):
    print(index, color)
```

This prints: 0 red, 1 green, 2 blue. Without `enumerate()`, you would need a separate counter variable. You can also specify a starting index: `enumerate(colors, start=1)` would give indices 1, 2, 3 instead of 0, 1, 2.

### 9. Using range() for Reverse Iteration

To loop backwards, use a negative step in `range()`:

```
for i in range(5, 0, -1):
    print(i)
```

This prints 5, 4, 3, 2, 1. The range starts at 5, stops before 0, and decrements by 1 each time. Remember: the stop value is always excluded, so 0 is not printed.

A common mistake is writing `range(5, 0)` without the step. This produces an empty range because the default step is +1, and you cannot count from 5 to 0 by adding 1.

## Code Examples

### for Loop with range() - All Three Forms

```python
# range(stop) - starts from 0
print("range(5):")
for i in range(5):
    print(i, end=" ")
print()

# range(start, stop)
print("range(3, 8):")
for i in range(3, 8):
    print(i, end=" ")
print()

# range(start, stop, step)
print("range(0, 20, 4):")
for i in range(0, 20, 4):
    print(i, end=" ")
print()

# Negative step (counting backwards)
print("range(10, 0, -2):")
for i in range(10, 0, -2):
    print(i, end=" ")
print()
```

This demonstrates all three forms of `range()`. With one argument, it starts from 0. With two arguments, you control the start. With three arguments, you also control the step. A negative step counts backwards. In every case, the stop value is excluded from the output.

**Output:**

```
range(5):
0 1 2 3 4 
range(3, 8):
3 4 5 6 7 
range(0, 20, 4):
0 4 8 12 16 
range(10, 0, -2):
10 8 6 4 2 
```

### Iterating Over Strings and Lists

```python
# Iterating over a string
name = "Priya"
print("Characters in", name, ":")
for ch in name:
    print(ch, end=" ")
print()

# Iterating over a list
subjects = ["Maths", "Science", "English", "Hindi"]
print("\nSubjects:")
for subject in subjects:
    print("-", subject)
```

A `for` loop can iterate over any sequence. When used with a string, the loop variable gets one character at a time. When used with a list, it gets one element at a time. No index arithmetic is needed.

**Output:**

```
Characters in Priya :
P r i y a 

Subjects:
- Maths
- Science
- English
- Hindi
```

### while Loop - Basic Counter

```python
# Counting from 1 to 5
count = 1
while count <= 5:
    print("Count:", count)
    count += 1

print("Loop ended. count is now:", count)
```

The while loop checks `count <= 5` before each iteration. When count is 1, 2, 3, 4, or 5, the condition is True and the body executes. After the body runs with count = 5, count becomes 6, the condition `6 <= 5` is False, and the loop stops. Notice that count is 6 after the loop, not 5.

**Output:**

```
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
Loop ended. count is now: 6
```

### while Loop - Sum Until Condition

```python
# Add numbers until sum exceeds 50
total = 0
num = 1

while total <= 50:
    total += num
    num += 1

print("Sum:", total)
print("Last number added:", num - 1)
print("Numbers added:", num - 1)
```

This while loop keeps adding consecutive numbers (1 + 2 + 3 + ...) until the total exceeds 50. We do not know in advance how many numbers will be needed, which is why a while loop is appropriate here. The loop adds 1, 2, 3, ... 10, at which point total = 55 which exceeds 50.

**Output:**

```
Sum: 55
Last number added: 10
Numbers added: 10
```

### Nested Loops - Multiplication Table Grid

```python
# Print a 5x5 multiplication table
print("Multiplication Table (1-5):")
for i in range(1, 6):
    for j in range(1, 6):
        print(i * j, end="\t")
    print()
```

The outer loop iterates over rows (i = 1 to 5) and the inner loop iterates over columns (j = 1 to 5). For each cell, we print `i * j`. The `\t` (tab character) aligns the columns. After each row (inner loop completes), `print()` moves to the next line. The inner loop runs 5 times for EACH iteration of the outer loop, giving 25 total multiplications.

**Output:**

```
Multiplication Table (1-5):
1	2	3	4	5	
2	4	6	8	10	
3	6	9	12	15	
4	8	12	16	20	
5	10	15	20	25	
```

### Loop with else Clause

```python
# else runs when loop completes without break
print("Searching for 7 in range(1, 6):")
for i in range(1, 6):
    if i == 7:
        print("Found 7!")
        break
else:
    print("7 was not found in the range.")

print()

print("Searching for 3 in range(1, 6):")
for i in range(1, 6):
    if i == 3:
        print("Found 3!")
        break
else:
    print("3 was not found in the range.")
```

The `else` block on a loop runs only if the loop completes all its iterations without encountering a `break`. In the first example, 7 is not in range(1, 6), so break never executes, and the else block runs. In the second example, 3 is found, break executes, and the else block is skipped. This is useful for search operations.

**Output:**

```
Searching for 7 in range(1, 6):
7 was not found in the range.

Searching for 3 in range(1, 6):
Found 3!
```

### enumerate() for Index Tracking

```python
students = ["Aarav", "Priya", "Rohan", "Ananya", "Vikram"]

# Without enumerate
print("Without enumerate:")
for i in range(len(students)):
    print(i + 1, students[i])

print()

# With enumerate (cleaner)
print("With enumerate:")
for index, name in enumerate(students, start=1):
    print(index, name)
```

Both approaches print the same output, but `enumerate()` is cleaner. It returns pairs of (index, value) automatically. The `start=1` parameter makes the index begin at 1 instead of 0, which is useful for numbering items in a human-readable way.

**Output:**

```
Without enumerate:
1 Aarav
2 Priya
3 Rohan
4 Ananya
5 Vikram

With enumerate:
1 Aarav
2 Priya
3 Rohan
4 Ananya
5 Vikram
```

### Nested Loop - Star Rectangle Pattern

```python
rows = 4
cols = 6

for i in range(rows):
    for j in range(cols):
        print("*", end=" ")
    print()

print()

# Right triangle pattern
for i in range(1, 6):
    for j in range(i):
        print("*", end=" ")
    print()
```

The first nested loop prints a 4x6 rectangle of stars. The outer loop runs 4 times (rows), and for each row, the inner loop prints 6 stars. The second nested loop prints a right triangle: in row i, the inner loop runs i times, so row 1 has 1 star, row 2 has 2 stars, and so on up to 5 stars.

**Output:**

```
* * * * * * 
* * * * * * 
* * * * * * 
* * * * * * 

* 
* * 
* * * 
* * * * 
* * * * * 
```

## Common Mistakes

### Off-by-One Error with range()

**Wrong:**

```
# Meera wants to print 1 to 10
for i in range(10):
    print(i)
```

No error, but prints 0 to 9 instead of 1 to 10.

**Correct:**

```
# Use range(1, 11) to get 1 to 10
for i in range(1, 11):
    print(i)
```

`range(10)` generates 0 through 9, not 1 through 10. The start defaults to 0, and the stop value (10) is excluded. To get 1 to 10, use `range(1, 11)`. This off-by-one error is one of the most common mistakes with loops.

### Forgetting to Update the Counter in a while Loop

**Wrong:**

```
count = 1
while count <= 5:
    print(count)
    # Forgot count += 1
```

Infinite loop! Prints 1 forever because count never changes.

**Correct:**

```
count = 1
while count <= 5:
    print(count)
    count += 1
```

In a while loop, you must ensure the condition eventually becomes False. If you forget to update the loop variable (here, `count += 1`), the condition `count <= 5` is always True, causing an infinite loop. Always check that your while loop has a proper update statement.

### Incorrect Indentation in Loop Body

**Wrong:**

```
for i in range(3):
    print("Inside loop")
print(i)  # This is OUTSIDE the loop
```

No error, but print(i) runs only once after the loop, not inside it.

**Correct:**

```
for i in range(3):
    print("Inside loop")
    print(i)  # Now inside the loop
```

Python uses indentation to determine what is inside a loop. If a line is not indented under the `for` or `while` statement, it is not part of the loop body. In the wrong code, `print(i)` runs only once after the loop ends, printing just 2 (the last value of i).

### Using range() Without Negative Step for Countdown

**Wrong:**

```
# Vikram wants to count from 5 down to 1
for i in range(5, 0):
    print(i)
```

No error, but nothing is printed! The loop does not execute.

**Correct:**

```
for i in range(5, 0, -1):
    print(i)
```

`range(5, 0)` with no step uses the default step of +1. Since you cannot count from 5 to 0 by adding 1, the range is empty and the loop never runs. You must explicitly provide a negative step: `range(5, 0, -1)`.

### Modifying a Counter Incorrectly in while Loop

**Wrong:**

```
# Counting down from 5
count = 5
while count >= 1:
    print(count)
    count += 1  # Wrong! Should be -= 1
```

Infinite loop! count increases instead of decreasing.

**Correct:**

```
count = 5
while count >= 1:
    print(count)
    count -= 1
```

The condition is `count >= 1` and count starts at 5, so the counter should decrease. Using `count += 1` makes count go to 6, 7, 8... making the condition always True. The fix is `count -= 1` so count goes 5, 4, 3, 2, 1, then 0 which fails the condition.

### Misunderstanding Loop Variable Scope

**Wrong:**

```
for i in range(5):
    pass

# Many students think i is undefined here
print(i)  # This actually prints 4
```

No error. Unlike some other languages, the loop variable i still exists after the loop ends.

**Correct:**

```
for i in range(5):
    pass

# i retains its last value (4)
print("Last value of i:", i)
```

In Python, the loop variable is NOT destroyed after the loop ends. It retains the last value it was assigned. After `for i in range(5)`, i holds the value 4. This is different from languages like Java or C++ where the loop variable is scoped to the loop.

## Summary

- A loop repeats a block of code multiple times. Python has two types: for loops (for known iterations or sequences) and while loops (for condition-based repetition).
- range(stop) generates numbers from 0 to stop-1. range(start, stop) generates from start to stop-1. range(start, stop, step) adds a custom step. The stop value is ALWAYS excluded.
- A for loop can iterate directly over strings (character by character) and lists (element by element) without needing range() or index variables.
- A while loop checks its condition before each iteration. If the condition is False from the start, the body never executes. Always ensure the condition will eventually become False to avoid infinite loops.
- Infinite loops occur when the while condition never becomes False, usually because the loop variable is not updated or is updated in the wrong direction.
- Python supports an else clause on loops. The else block runs only when the loop completes normally without a break statement.
- Nested loops place one loop inside another. The inner loop runs completely for each iteration of the outer loop. A 3x4 nested loop executes the inner body 12 times total.
- enumerate() provides both the index and value when looping through a sequence. Use enumerate(seq, start=1) to begin counting from 1.
- To count backwards with range(), you must provide a negative step: range(10, 0, -1). Without the negative step, range(10, 0) produces an empty sequence.
- The loop variable in Python retains its last value after the loop ends. It is not destroyed like in some other programming languages.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/python/loops-in-python/*
*Practice questions: https://learn.modernagecoders.com/resources/python/loops-in-python/practice/*
