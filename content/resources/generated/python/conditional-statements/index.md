---
title: "Conditional Statements in Python - if, elif, else with Examples | Modern Age Coders"
description: "Master Python conditional statements including if, elif, else, nested if, ternary operator, truthiness, and chained comparisons. Includes 60 practice questions with tricky output prediction."
slug: conditional-statements
canonical: https://learn.modernagecoders.com/resources/python/conditional-statements
category: "Python"
keywords: ["python if else", "conditional statements python", "python elif", "python if statement tutorial", "python nested if", "python ternary operator", "python truthiness", "python chained comparisons"]
---
# Conditional Statements in Python (if, elif, else)

**Difficulty:** Beginner  
**Reading time:** 20 min  
**Chapter:** 7  
**Practice questions:** 60

## What Are Conditional Statements?

A **conditional statement** lets your program make decisions. Instead of executing every line of code from top to bottom, your program can choose which code to run based on whether a condition is true or false.

Think of it like making everyday decisions. When you wake up, you check: "Is it raining?" If yes, you take an umbrella. If no, you do not. This is exactly what conditional statements do in code — they check a condition and execute different blocks of code depending on the result.

In Python, conditional statements are built using three keywords: `if`, `elif` (short for "else if"), and `else`. Every Python program that does anything useful will use conditional statements.

### The Basic Structure

The simplest conditional statement checks one condition and executes code only if that condition is `True`:

```
if condition:
    # code to execute when condition is True
```

The condition is any expression that evaluates to `True` or `False` (a Boolean expression). The code inside the `if` block is **indented** — this indentation is how Python knows which code belongs to the `if` statement.

## Why Are Conditional Statements Essential?

### 1. Every Real Program Makes Decisions

Without conditionals, your program would do the exact same thing every time it runs, regardless of the input. A login system needs to check if the password is correct. A game needs to check if the player won or lost. An ATM needs to check if the account has enough balance. All of these require conditional statements.

### 2. Controlling Program Flow

Conditionals give you control over which parts of your code execute and in what order. Instead of writing separate programs for different scenarios, you write one program that handles all scenarios by making decisions at runtime.

### 3. Input Validation

When your program takes user input, you need to check if the input is valid. Is the age a positive number? Is the score between 0 and 100? Is the email address in the correct format? Conditional statements let you validate input and show appropriate error messages.

### 4. Foundation for Complex Logic

Conditional statements are one of the three fundamental building blocks of all programs (the other two are sequence and loops). Once you master conditionals, you can build programs of any complexity. Every algorithm, from simple grade calculators to sophisticated AI systems, relies on conditional logic at its core.

## Detailed Explanation

### 1. The if Statement

The `if` statement is the simplest conditional. It checks a condition, and if the condition is `True`, it executes the indented block of code below it. If the condition is `False`, Python skips the block entirely.

```
age = 16

if age >= 18:
    print("You can vote.")

print("Program continues here.")
```

In this example, since `16 >= 18` is False, the print statement inside the if block is skipped. The program jumps to `"Program continues here."`

#### Indentation Is Mandatory

In Python, indentation is not optional or cosmetic — it is part of the language's syntax. The standard is **4 spaces** per level of indentation. All code that belongs to the `if` block must be indented by the same amount. If you mix indentation levels or forget to indent, Python raises an `IndentationError`.

```
# This causes an IndentationError:
if True:
print("Hello")  # Not indented — ERROR!
```

### 2. The if-else Statement

The `if-else` structure provides two paths: one for when the condition is True, and another for when it is False. Exactly one of the two blocks will always execute.

```
marks = 45

if marks >= 40:
    print("You passed!")
else:
    print("You failed.")
```

Since 45 >= 40 is True, the if block runs and prints "You passed!". If marks were 35, the else block would run instead. The `else` keyword does not have a condition — it catches everything that the `if` did not.

### 3. The if-elif-else Statement

When you need to check multiple conditions, use `elif` (short for "else if"). Python checks each condition from top to bottom and executes the block for the **first** condition that is True. If no condition is True, the `else` block runs.

```
marks = 75

if marks >= 90:
    grade = "A"
elif marks >= 80:
    grade = "B"
elif marks >= 70:
    grade = "C"
elif marks >= 60:
    grade = "D"
else:
    grade = "F"

print("Grade:", grade)
```

Here, Aarav scored 75. Python checks: 75 >= 90? No. 75 >= 80? No. 75 >= 70? Yes! So grade is set to "C" and all remaining elif/else blocks are **skipped**. This is important: once a match is found, no further conditions are checked.

#### Key Rules for if-elif-else

- You must start with `if`.
- You can have zero or more `elif` blocks.
- The `else` block is optional, and there can be at most one.
- `else` must come last.
- Only ONE block executes — the first one whose condition is True (or else if none are True).

### 4. Nested if Statements

You can place an `if` statement inside another `if` statement. This is called **nesting**. The inner `if` is only checked when the outer `if` condition is True.

```
age = 20
has_license = True

if age >= 18:
    print("You are an adult.")
    if has_license:
        print("You can drive.")
    else:
        print("Get a driving license first.")
else:
    print("You are too young to drive.")
```

The inner `if has_license` is only reached if the outer condition `age >= 18` is True. Each level of nesting requires an additional level of indentation (4 more spaces).

**Avoid deep nesting.** If you have 3 or more levels of nesting, your code becomes hard to read. Often, you can rewrite deeply nested conditions using logical operators (`and`, `or`) to flatten the structure.

### 5. Short-Hand if (One-Liner)

If the `if` block has only one statement, you can write it on the same line as the `if`:

```
age = 20
if age >= 18: print("Adult")
```

This is valid Python, but use it sparingly. It can make code harder to read if overused.

### 6. The Ternary Operator (Conditional Expression)

Python has a compact way to write a simple if-else that assigns a value. It is called the **ternary operator** or **conditional expression**:

```
value_if_true if condition else value_if_false
```

Example:

```
age = 20
status = "Adult" if age >= 18 else "Minor"
print(status)  # Output: Adult
```

This is equivalent to:

```
if age >= 18:
    status = "Adult"
else:
    status = "Minor"
```

The ternary operator is great for simple assignments but should not be used for complex logic. Keep it readable.

### 7. Combining Conditions with and, or, not

You can combine multiple conditions using logical operators:

- `and` — both conditions must be True
- `or` — at least one condition must be True
- `not` — reverses the condition

```
age = 16
has_permission = True

if age >= 13 and age <= 17 and has_permission:
    print("You can join the teen group.")
```

You can also use chained comparisons: `13 <= age <= 17` is equivalent to `age >= 13 and age <= 17`.

### 8. Truthiness and Falsiness

In Python, every value has a Boolean equivalent. When you use a non-Boolean value in an `if` condition, Python automatically converts it to True or False. This is called **truthiness** and **falsiness**.

#### Values That Are Falsy (Treated as False)

- `False` (the Boolean)
- `0` and `0.0` (zero in any numeric type)
- `""` (empty string)
- `[]` (empty list)
- `()` (empty tuple)
- `{}` (empty dictionary)
- `None`

#### Everything Else Is Truthy (Treated as True)

- Non-zero numbers: `1`, `-5`, `3.14`
- Non-empty strings: `"hello"`, `"0"`, `" "`
- Non-empty collections: `[1, 2]`, `(0,)`, `{"a": 1}`

This allows elegant code like:

```
name = input("Enter your name: ")
if name:  # True if name is not empty
    print("Hello,", name)
else:
    print("You did not enter a name.")
```

### 9. Chaining Comparisons

Python supports chained comparisons that match mathematical notation:

```
score = 75
if 60 <= score <= 100:
    print("Valid score")
```

This is equivalent to `score >= 60 and score <= 100`. Chains can include any comparison operators: `a < b < c`, `a == b == c`, `a < b >= c`. Each pair of adjacent comparisons is combined with `and`.

An important detail: in `a < b < c`, `b` is evaluated only once. In the equivalent `a < b and b < c`, `b` is evaluated twice. This matters if `b` is an expression with side effects (like a function call).

## Code Examples

### Simple if Statement

```python
temperature = 38

if temperature > 37:
    print("You have a fever.")
    print("Please see a doctor.")

print("Program done.")
```

Since 38 > 37 is True, both indented lines execute. The last line always executes because it is outside the `if` block (not indented). If temperature were 36, the two indented lines would be skipped, but "Program done." would still print.

**Output:**

```
You have a fever.
Please see a doctor.
Program done.
```

### if-else: Pass or Fail

```python
marks = int(input("Enter your marks: "))  # Assume user enters 35

if marks >= 40:
    print("Congratulations! You passed.")
    print("Keep up the good work!")
else:
    print("You did not pass.")
    print("Study harder for next time.")

print("Total marks:", marks)
```

If Priya enters 35, the condition `35 >= 40` is False, so the else block runs. Exactly one of the two blocks always executes. The last line runs regardless because it is outside both blocks.

**Output:**

```
Enter your marks: 35
You did not pass.
Study harder for next time.
Total marks: 35
```

### if-elif-else: Grade Calculator

```python
marks = int(input("Enter marks: "))  # Assume user enters 82

if marks >= 90:
    print("Grade: A")
elif marks >= 80:
    print("Grade: B")
elif marks >= 70:
    print("Grade: C")
elif marks >= 60:
    print("Grade: D")
elif marks >= 40:
    print("Grade: E")
else:
    print("Grade: F (Fail)")
```

Rohan enters 82. Python checks from top: 82 >= 90? No. 82 >= 80? Yes. So "Grade: B" prints and all remaining elif/else are skipped. Even though 82 >= 70 and 82 >= 60 are also True, they are never checked because the first matching condition wins.

**Output:**

```
Enter marks: 82
Grade: B
```

### Nested if Statements

```python
age = 25
citizenship = "Indian"
has_voter_id = True

if age >= 18:
    if citizenship == "Indian":
        if has_voter_id:
            print("You are eligible to vote.")
        else:
            print("Please get a voter ID card.")
    else:
        print("Only Indian citizens can vote in Indian elections.")
else:
    print("You must be at least 18 to vote.")
```

This demonstrates three levels of nesting. Each inner `if` is only checked when its outer condition is True. For age = 25, Indian citizenship, and voter ID, all three conditions are True, so the deepest block executes. Notice how each level adds 4 more spaces of indentation.

**Output:**

```
You are eligible to vote.
```

### Combining Conditions with Logical Operators

```python
# Flat version (preferred over deep nesting)
age = 25
citizenship = "Indian"
has_voter_id = True

if age >= 18 and citizenship == "Indian" and has_voter_id:
    print("You are eligible to vote.")
elif age < 18:
    print("You must be at least 18 to vote.")
elif citizenship != "Indian":
    print("Only Indian citizens can vote.")
else:
    print("Please get a voter ID card.")
```

This achieves the same logic as the nested example above but is flatter and easier to read. By combining conditions with `and`, we avoid deep nesting. The `elif` blocks handle specific failure cases with clear messages.

**Output:**

```
You are eligible to vote.
```

### Ternary Operator (Conditional Expression)

```python
age = 16

# Ternary operator
status = "Adult" if age >= 18 else "Minor"
print("Status:", status)

# Can be used directly in print
print("You are", "old enough" if age >= 18 else "too young", "to vote.")

# Nested ternary (avoid this - hard to read)
grade = "A" if age > 20 else "B" if age > 15 else "C"
print("Grade:", grade)
```

The ternary operator provides a compact way to choose between two values. For age 16: `"Adult" if 16 >= 18 else "Minor"` evaluates to "Minor" since the condition is False. Nested ternaries are technically valid but should be avoided as they are difficult to read.

**Output:**

```
Status: Minor
You are too young to vote.
Grade: B
```

### Truthiness and Falsiness in Practice

```python
# Falsy values
print("0 is", "truthy" if 0 else "falsy")
print("'' is", "truthy" if "" else "falsy")
print("None is", "truthy" if None else "falsy")
print("[] is", "truthy" if [] else "falsy")
print("{} is", "truthy" if {} else "falsy")

# Truthy values
print("1 is", "truthy" if 1 else "falsy")
print("'hello' is", "truthy" if "hello" else "falsy")
print("'0' is", "truthy" if "0" else "falsy")
print("[0] is", "truthy" if [0] else "falsy")
print("-1 is", "truthy" if -1 else "falsy")
```

This demonstrates all the falsy values (0, empty string, None, empty list, empty dict) and several truthy values. The most surprising one for beginners is `"0"` being truthy: it is a non-empty string, even though its content is the digit zero. Similarly, `[0]` is truthy because it is a non-empty list (it contains one element).

**Output:**

```
0 is falsy
'' is falsy
None is falsy
[] is falsy
{} is falsy
1 is truthy
'hello' is truthy
'0' is truthy
[0] is truthy
-1 is truthy
```

### Chained Comparisons

```python
score = 75

# Chained comparison
if 0 <= score <= 100:
    print("Valid score:", score)

# Equivalent to:
if score >= 0 and score <= 100:
    print("Also valid:", score)

# Chaining works with any comparison operators
x = 5
print("1 < 5 < 10:", 1 < x < 10)
print("1 < 5 > 3:", 1 < x > 3)
print("5 == 5 == 5:", 5 == x == 5)
print("10 > 5 > 3 > 1:", 10 > x > 3 > 1)
```

Chained comparisons like `0 <= score <= 100` are a Pythonic way to check ranges. Each adjacent pair is compared: `0 <= score and score <= 100`. You can chain any comparison operators, even different ones: `1 < x > 3` means `1 < x and x > 3`.

**Output:**

```
Valid score: 75
Also valid: 75
1 < 5 < 10: True
1 < 5 > 3: True
5 == 5 == 5: True
10 > 5 > 3 > 1: True
```

## Common Mistakes

### Forgetting the Colon After if/elif/else

**Wrong:**

```
age = 18
if age >= 18
    print("Adult")
```

SyntaxError: expected ':'

**Correct:**

```
age = 18
if age >= 18:
    print("Adult")
```

Every `if`, `elif`, and `else` line MUST end with a colon (`:`). The colon tells Python that an indented block follows. This is one of the most common syntax errors for beginners.

### Wrong or Missing Indentation

**Wrong:**

```
score = 85
if score >= 40:
print("Pass")
    print("Well done")
```

IndentationError: expected an indented block after 'if' statement

**Correct:**

```
score = 85
if score >= 40:
    print("Pass")
    print("Well done")
```

The code inside an `if` block MUST be indented (standard is 4 spaces). The first print is not indented, causing the error. All lines in the same block must have the same indentation level.

### Using = Instead of == in Conditions

**Wrong:**

```
x = 10
if x = 10:
    print("x is 10")
```

SyntaxError: invalid syntax

**Correct:**

```
x = 10
if x == 10:
    print("x is 10")
```

A single `=` is the assignment operator (stores a value). A double `==` is the comparison operator (checks equality). In an `if` condition, you need `==` to compare values. Using `=` in an `if` condition is a SyntaxError in Python.

### Wrong Order of elif/else Causing Unreachable Code

**Wrong:**

```
marks = 95
if marks >= 40:
    print("Grade: E")
elif marks >= 60:
    print("Grade: D")
elif marks >= 90:
    print("Grade: A")
```

No error, but output is 'Grade: E' instead of 'Grade: A'. The conditions are in the wrong order.

**Correct:**

```
marks = 95
if marks >= 90:
    print("Grade: A")
elif marks >= 60:
    print("Grade: D")
elif marks >= 40:
    print("Grade: E")
```

Python checks conditions from top to bottom and stops at the first True condition. Since 95 >= 40 is True, it prints "Grade: E" and skips everything else. The condition 95 >= 90 is never reached. Always put the most specific (strictest) conditions first.

### Confusing Truthiness: '0' Is Truthy

**Wrong:**

```
user_input = input("Enter 0 to exit: ")  # User types 0
if not user_input:  # Expecting this to be True
    print("Exiting...")
else:
    print("Continuing...")
```

No error, but prints 'Continuing...' instead of 'Exiting...'. The string '0' is truthy.

**Correct:**

```
user_input = input("Enter 0 to exit: ")
if user_input == "0":  # Compare with the string '0'
    print("Exiting...")
else:
    print("Continuing...")
```

When the user types 0, `input()` returns the string `"0"`, not the integer 0. The string `"0"` is **truthy** because it is a non-empty string. So `not "0"` is False, and the else block runs. To check for the character 0, compare with the string `"0"`.

## Summary

- The if statement checks a condition and executes the indented block only if the condition is True.
- The if-else statement provides two paths: one for True and one for False. Exactly one block always executes.
- The if-elif-else chain checks multiple conditions from top to bottom. Only the first matching condition's block executes. Always put the strictest conditions first.
- Indentation is mandatory in Python. Use 4 spaces per level. All lines in the same block must have the same indentation. Incorrect indentation causes IndentationError.
- Nested if statements place one if inside another. Avoid more than 2-3 levels of nesting; use logical operators (and, or) to flatten conditions instead.
- The ternary operator (x if condition else y) is a compact one-line alternative to simple if-else assignments.
- Combine conditions using logical operators: 'and' (both True), 'or' (at least one True), 'not' (reverses). Use parentheses for clarity.
- Falsy values in Python: False, 0, 0.0, '' (empty string), [] (empty list), () (empty tuple), {} (empty dict), None. Everything else is truthy.
- The string '0' is truthy (non-empty string), while the integer 0 is falsy. This is a common source of confusion.
- Chained comparisons like 1 < x < 10 are a Pythonic way to check ranges. They are equivalent to 1 < x and x < 10.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/python/conditional-statements/*
*Practice questions: https://learn.modernagecoders.com/resources/python/conditional-statements/practice/*
