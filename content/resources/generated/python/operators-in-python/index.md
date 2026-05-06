---
title: "Operators in Python - Arithmetic, Comparison, Logical, Assignment & More | Modern Age Coders"
description: "Learn all Python operators including arithmetic, comparison, logical, assignment, membership, identity, and bitwise operators. Includes operator precedence, PEMDAS, and 58 practice questions."
slug: operators-in-python
canonical: https://learn.modernagecoders.com/resources/python/operators-in-python/
category: "Python"
keywords: ["python operators", "arithmetic operators python", "comparison operators python", "logical operators python", "assignment operators python", "operator precedence python", "PEMDAS python", "bitwise operators python", "python operators for beginners"]
---
# Operators in Python

**Difficulty:** Beginner  
**Reading time:** 18 min  
**Chapter:** 5  
**Practice questions:** 58

## What Are Operators in Python?

An **operator** is a special symbol that tells Python to perform a specific operation on one or more values. Think of operators as verbs in a sentence. Just as the verb "add" tells you to combine two numbers, the `+` operator tells Python to add two values together.

You have already used operators without realizing it. When you wrote `print(2 + 3)` in earlier chapters, the `+` symbol was an **arithmetic operator**. When you stored a value with `age = 14`, the `=` symbol was an **assignment operator**.

### What Are Operands?

The values that operators work on are called **operands**. In the expression `5 + 3`, the numbers `5` and `3` are operands, and `+` is the operator. Some operators need two operands (called **binary operators**, like `+`), while others need only one (called **unary operators**, like `not` or `-` when used to negate a number).

Python provides seven categories of operators, and this chapter covers each one in detail: Arithmetic, Comparison, Logical, Assignment, Membership, Identity, and Bitwise operators.

## Why Are Operators Important?

Operators are the building blocks of every computation your program performs. Without operators, your code could store values but never do anything meaningful with them. Here is why understanding operators thoroughly matters:

### 1. Every Calculation Uses Operators

Whether you are building a calculator, computing a student's grade percentage, or calculating the area of a rectangle, you need arithmetic operators. Even simple tasks like counting how many items are in a shopping cart or splitting a bill among friends require operators.

### 2. Decision-Making Depends on Comparison and Logical Operators

When your program needs to make decisions ("Is the user old enough to sign up?", "Did the student pass the exam?"), it uses comparison operators (`>=`, `==`, `!=`) and logical operators (`and`, `or`, `not`). You will use these constantly when you learn conditional statements in the next chapters.

### 3. Operator Precedence Prevents Bugs

If you do not understand the order in which Python evaluates operators, your calculations will give wrong results. The expression `2 + 3 * 4` gives `14` (not `20`), because multiplication happens before addition. Knowing operator precedence is the difference between writing correct programs and spending hours debugging wrong answers.

### 4. Writing Shorter, Cleaner Code

Assignment operators like `+=` and `*=` let you update variables in a compact way. Membership operators like `in` let you check if something exists in a collection with a single readable expression. These make your code shorter and easier to understand.

## Detailed Explanation

### 1. Arithmetic Operators

Arithmetic operators perform mathematical calculations on numbers (integers and floats). Python provides seven arithmetic operators:

OperatorNameExampleResult`+`Addition`10 + 3``13``-`Subtraction`10 - 3``7``*`Multiplication`10 * 3``30``/`Division (float)`10 / 3``3.3333...``//`Floor Division`10 // 3``3``%`Modulus (remainder)`10 % 3``1``**`Exponentiation`10 ** 3``1000`

#### Division vs Floor Division

This is one of the most commonly confused concepts. The `/` operator **always returns a float**, even if the result is a whole number. So `10 / 2` gives `5.0`, not `5`. The `//` operator performs **floor division**, which means it divides and then rounds DOWN to the nearest integer. For positive numbers, this is the same as removing the decimal part: `10 // 3` gives `3` (not 3.33).

For negative numbers, floor division rounds towards negative infinity: `-10 // 3` gives `-4` (not -3), because -4 is the nearest integer less than -3.33. This catches many students off guard.

#### The Modulus Operator (%)

The modulus operator returns the **remainder** after division. For example, `10 % 3` gives `1` because 10 divided by 3 is 3 with a remainder of 1. This operator is extremely useful for: checking if a number is even or odd (`n % 2 == 0` means even), checking divisibility (`n % 5 == 0` means divisible by 5), and wrapping values around a range.

### 2. Comparison Operators

Comparison operators compare two values and return a **Boolean result** (`True` or `False`). They are essential for making decisions in your programs.

OperatorMeaningExampleResult`==`Equal to`5 == 5``True``!=`Not equal to`5 != 3``True``>`Greater than`5 > 3``True``<`Less than`5 < 3``False``>=`Greater than or equal to`5 >= 5``True``<=`Less than or equal to`5 <= 3``False`

#### Important: == vs =

A very common mistake is confusing `=` (assignment) with `==` (comparison). The single equals sign `=` **assigns** a value to a variable: `x = 5` stores 5 in x. The double equals sign `==` **compares** two values: `x == 5` checks whether x is equal to 5 and returns True or False.

#### Chaining Comparisons

Python allows you to chain comparison operators in a way that matches mathematical notation. Instead of writing `x > 1 and x < 10`, you can write `1 < x < 10`. This reads naturally as "x is between 1 and 10" and is one of Python's elegant features.

### 3. Logical Operators

Logical operators combine multiple Boolean expressions. Python has three logical operators:

OperatorMeaningExampleResult`and`True only if BOTH are True`True and False``False``or`True if at LEAST ONE is True`True or False``True``not`Reverses the Boolean value`not True``False`

#### Truth Tables

A truth table shows every possible combination of inputs and the resulting output:

**AND truth table:** `True and True = True`, `True and False = False`, `False and True = False`, `False and False = False`. The `and` operator returns True only when BOTH sides are True.

**OR truth table:** `True or True = True`, `True or False = True`, `False or True = True`, `False or False = False`. The `or` operator returns False only when BOTH sides are False.

#### Short-Circuit Evaluation

Python uses **short-circuit evaluation** with logical operators. With `and`, if the left side is False, Python does not even check the right side (because the result will be False regardless). With `or`, if the left side is True, Python skips the right side (because the result will be True regardless). This is not just an optimization; it can affect your program if the right side has side effects like function calls.

### 4. Assignment Operators

Assignment operators store values in variables. The basic assignment operator is `=`, but Python also provides **compound assignment operators** that combine an arithmetic operation with assignment:

OperatorExampleEquivalent To`=``x = 5`Assigns 5 to x`+=``x += 3``x = x + 3``-=``x -= 3``x = x - 3``*=``x *= 3``x = x * 3``/=``x /= 3``x = x / 3``//=``x //= 3``x = x // 3``%=``x %= 3``x = x % 3``**=``x **= 3``x = x ** 3`

Compound assignment operators are just a shorthand. Writing `score += 10` is identical to writing `score = score + 10`. They make code shorter and more readable, especially when updating variables in loops.

### 5. Membership Operators

Membership operators check whether a value exists inside a sequence (like a string, list, or tuple). Python has two membership operators:

OperatorMeaningExampleResult`in`True if value is found in the sequence`"a" in "Aarav"``True``not in`True if value is NOT found in the sequence`"z" not in "Aarav"``True`

Membership operators are extremely readable. The expression `"Python" in languages` reads almost like plain English: "Is Python in the languages list?" You will use these frequently when working with strings and lists.

### 6. Identity Operators

Identity operators check whether two variables refer to the **exact same object in memory**, not just whether they have the same value. Python has two identity operators:

OperatorMeaningExample`is`True if both variables point to the same object`x is y``is not`True if they point to different objects`x is not y`

#### == vs is

This is a subtle but important distinction. The `==` operator checks if two values are **equal**. The `is` operator checks if two variables refer to the **same object** in memory. Two variables can have equal values but be different objects. For example, two different lists `[1, 2, 3]` and `[1, 2, 3]` are equal (`==` returns True) but they are separate objects in memory (`is` returns False).

The most common use of `is` is checking for `None`: you should always write `if x is None` rather than `if x == None`. This is a Python best practice.

### 7. Bitwise Operators

Bitwise operators work on the **binary (base-2) representation** of numbers, manipulating individual bits. While you may not use these daily as a beginner, understanding them gives you deeper knowledge of how computers work.

OperatorNameExampleResult`&`Bitwise AND`5 & 3``1``|`Bitwise OR`5 | 3``7``^`Bitwise XOR`5 ^ 3``6``~`Bitwise NOT`~5``-6``<<`Left Shift`5 << 1``10``>>`Right Shift`5 >> 1``2`

Let us trace through `5 & 3`: In binary, 5 is `101` and 3 is `011`. The AND operation compares each bit position: 1 AND 0 = 0, 0 AND 1 = 0, 1 AND 1 = 1. The result is `001`, which is 1 in decimal.

Left shift (`<<`) moves all bits to the left by the specified number of positions, which is equivalent to multiplying by 2 for each shift. So `5 << 1` is 5 * 2 = 10. Right shift (`>>`) moves bits to the right, equivalent to integer division by 2.

### 8. Operator Precedence (PEMDAS)

When an expression contains multiple operators, Python follows a strict order of priority called **operator precedence**. This is similar to the PEMDAS rule you learn in mathematics (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction), but Python extends it to include all its operators.

Here is the precedence from **highest (evaluated first)** to **lowest (evaluated last)**:

1. **Parentheses** `()` — always evaluated first
2. **Exponentiation** `**`
3. **Unary operators** `+x`, `-x`, `~x`
4. **Multiplication, Division, Floor Division, Modulus** `*`, `/`, `//`, `%`
5. **Addition, Subtraction** `+`, `-`
6. **Bitwise Shifts** `<<`, `>>`
7. **Bitwise AND** `&`
8. **Bitwise XOR** `^`
9. **Bitwise OR** `|`
10. **Comparison operators** `==`, `!=`, `>`, `<`, `>=`, `<=`, `is`, `is not`, `in`, `not in`
11. **Logical NOT** `not`
12. **Logical AND** `and`
13. **Logical OR** `or`

#### Key Rules to Remember

**Rule 1:** Parentheses override everything. When in doubt, use parentheses to make your intent clear.

**Rule 2:** Exponentiation (`**`) is right-associative. This means `2 ** 3 ** 2` is evaluated as `2 ** (3 ** 2)` = `2 ** 9` = `512`, NOT as `(2 ** 3) ** 2` = `8 ** 2` = `64`.

**Rule 3:** Among operators at the same precedence level, evaluation happens left to right (left-associative), except for exponentiation which is right-associative.

**Rule 4:** `not` has higher precedence than `and`, which has higher precedence than `or`. So `True or False and not False` evaluates as `True or (False and (not False))` = `True or (False and True)` = `True or False` = `True`.

## Code Examples

### Arithmetic Operators in Action

```python
a = 15
b = 4

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)
print("Floor Division:", a // b)
print("Modulus:", a % b)
print("Exponentiation:", a ** b)
```

This demonstrates all seven arithmetic operators using `a = 15` and `b = 4`. Notice that division (`/`) returns `3.75` (a float), while floor division (`//`) returns `3` (rounded down). The modulus (`%`) returns `3` because 15 divided by 4 is 3 remainder 3. Exponentiation gives 15 to the power of 4.

**Output:**

```
Addition: 19
Subtraction: 11
Multiplication: 60
Division: 3.75
Floor Division: 3
Modulus: 3
Exponentiation: 50625
```

### Division vs Floor Division with Negative Numbers

```python
print("10 / 3 =", 10 / 3)
print("10 // 3 =", 10 // 3)
print()
print("-10 / 3 =", -10 / 3)
print("-10 // 3 =", -10 // 3)
print()
print("10 / -3 =", 10 / -3)
print("10 // -3 =", 10 // -3)
```

This example reveals a tricky behavior of floor division with negative numbers. For positive numbers, `10 // 3` gives `3` as expected. But `-10 // 3` gives `-4` (not -3), because floor division rounds towards negative infinity. Similarly, `10 // -3` gives `-4`. This is a common source of bugs and a frequent exam question.

**Output:**

```
10 / 3 = 3.3333333333333335
10 // 3 = 3

-10 / 3 = -3.3333333333333335
-10 // 3 = -4

10 / -3 = -3.3333333333333335
10 // -3 = -4
```

### Comparison Operators and Boolean Results

```python
marks = 78

print("Is marks equal to 78?", marks == 78)
print("Is marks not equal to 100?", marks != 100)
print("Is marks greater than 50?", marks > 50)
print("Is marks less than 40?", marks < 40)
print("Is marks >= 75?", marks >= 75)
print("Is marks <= 80?", marks <= 80)

# Chaining comparisons
print("Is marks between 60 and 90?", 60 <= marks <= 90)
```

Comparison operators always return `True` or `False`. Aarav scored 78 marks, and we check various conditions. The last line demonstrates Python's chained comparison: `60 <= marks <= 90` checks if marks is between 60 and 90 (inclusive). This is equivalent to `marks >= 60 and marks <= 90` but reads more naturally.

**Output:**

```
Is marks equal to 78? True
Is marks not equal to 100? True
Is marks greater than 50? True
Is marks less than 40? False
Is marks >= 75? True
Is marks <= 80? True
Is marks between 60 and 90? True
```

### Logical Operators with Conditions

```python
age = 15
has_id = True

# AND - both must be True
can_enter = age >= 13 and has_id
print("Can enter (age >= 13 AND has ID)?", can_enter)

# OR - at least one must be True
is_weekend = False
is_holiday = True
no_school = is_weekend or is_holiday
print("No school (weekend OR holiday)?", no_school)

# NOT - reverses the value
is_raining = False
can_play_outside = not is_raining
print("Can play outside (NOT raining)?", can_play_outside)

# Combining all three
can_go_trip = (age >= 12 and has_id) or not is_raining
print("Can go on trip?", can_go_trip)
```

This shows real-world usage of logical operators. Priya is 15 and has an ID, so `and` returns True (both conditions met). It is not the weekend but it is a holiday, so `or` returns True (at least one condition met). It is not raining, so `not False` gives True. The last line combines all three: the parenthesized `and` expression is evaluated first, then `not`, then `or`.

**Output:**

```
Can enter (age >= 13 AND has ID)? True
No school (weekend OR holiday)? True
Can play outside (NOT raining)? True
Can go on trip? True
```

### Assignment Operators for Updating Variables

```python
score = 100
print("Starting score:", score)

score += 25       # score = score + 25
print("After +25:", score)

score -= 10       # score = score - 10
print("After -10:", score)

score *= 2        # score = score * 2
print("After *2:", score)

score //= 3       # score = score // 3
print("After //3:", score)

score %= 10       # score = score % 10
print("After %10:", score)

score **= 3       # score = score ** 3
print("After **3:", score)
```

Starting with `score = 100`, we apply different compound assignment operators one after another. Each operator updates the variable using the previous value. After `+= 25`, score is 125. After `-= 10`, it is 115. After `*= 2`, it is 230. After `//= 3`, it is 76 (floor division). After `%= 10`, it is 6 (remainder). After `**= 3`, it is 216 (6 cubed).

**Output:**

```
Starting score: 100
After +25: 125
After -10: 115
After *2: 230
After //3: 76
After %10: 6
After **3: 216
```

### Membership and Identity Operators

```python
# Membership operators
name = "Ananya"
print("Is 'A' in name?", "A" in name)
print("Is 'z' in name?", "z" in name)
print("Is 'z' NOT in name?", "z" not in name)

fruits = ["apple", "mango", "banana"]
print("Is 'mango' in fruits?", "mango" in fruits)
print("Is 'grape' in fruits?", "grape" in fruits)

# Identity operators
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print("\na == b?", a == b)     # Same value?
print("a is b?", a is b)     # Same object?
print("a is c?", a is c)     # Same object?

print("\nChecking None:")
x = None
print("x is None?", x is None)
```

The `in` operator checks if a value exists inside a string or list. `"A" in "Ananya"` returns True because the character A appears in the string. For identity operators, `a` and `b` have the same values but are different objects in memory, so `a == b` is True but `a is b` is False. However, `c = a` makes `c` point to the same object as `a`, so `a is c` is True. The recommended way to check for `None` is using `is`, not `==`.

**Output:**

```
Is 'A' in name? True
Is 'z' in name? False
Is 'z' NOT in name? True
Is 'mango' in fruits? True
Is 'grape' in fruits? False

a == b? True
a is b? False
a is c? True

Checking None:
x is None? True
```

### Operator Precedence: Tricky Examples

```python
# Example 1: Multiplication before addition
result1 = 2 + 3 * 4
print("2 + 3 * 4 =", result1)  # 14, not 20

# Example 2: Parentheses override precedence
result2 = (2 + 3) * 4
print("(2 + 3) * 4 =", result2)  # 20

# Example 3: Exponentiation is right-associative
result3 = 2 ** 3 ** 2
print("2 ** 3 ** 2 =", result3)  # 512, not 64

# Example 4: Mixed operators
result4 = 10 + 2 * 3 ** 2 - 4 // 2
print("10 + 2 * 3 ** 2 - 4 // 2 =", result4)
# Step by step: 3**2=9, 2*9=18, 4//2=2, 10+18-2=26

# Example 5: Logical operator precedence
result5 = True or False and False
print("True or False and False =", result5)
# and is evaluated before or: True or (False and False) = True or False = True
```

Example 1 shows `*` executes before `+`. Example 2 shows parentheses forcing addition first. Example 3 is tricky: `**` is right-associative, so `2 ** 3 ** 2` means `2 ** (3 ** 2)` = `2 ** 9` = 512. Example 4 is evaluated step by step following precedence: exponentiation first, then multiplication and floor division, then addition and subtraction. Example 5 shows that `and` has higher precedence than `or`.

**Output:**

```
2 + 3 * 4 = 14
(2 + 3) * 4 = 20
2 ** 3 ** 2 = 512
10 + 2 * 3 ** 2 - 4 // 2 = 26
True or False and False = True
```

### Bitwise Operators Basics

```python
a = 5   # binary: 101
b = 3   # binary: 011

print("a & b =", a & b)     # AND:  101 & 011 = 001 = 1
print("a | b =", a | b)     # OR:   101 | 011 = 111 = 7
print("a ^ b =", a ^ b)     # XOR:  101 ^ 011 = 110 = 6
print("~a =", ~a)           # NOT:  ~5 = -6
print("a << 1 =", a << 1)   # Left shift: 101 -> 1010 = 10
print("a >> 1 =", a >> 1)   # Right shift: 101 -> 10 = 2

# Practical: Check if a number is even using bitwise AND
num = 14
if num & 1 == 0:
    print(num, "is even")
else:
    print(num, "is odd")
```

Bitwise operators work on the binary representations of numbers. For `5 & 3`: binary 101 AND 011 gives 001 (only the last bit is 1 in both). For `5 | 3`: 101 OR 011 gives 111 (a bit is 1 if either input has 1). XOR gives 1 only when bits differ. Left shift by 1 doubles the number, right shift by 1 halves it (integer division). A practical trick: `num & 1` checks the last bit, which is 0 for even numbers and 1 for odd numbers.

**Output:**

```
a & b = 1
a | b = 7
a ^ b = 6
~a = -6
a << 1 = 10
a >> 1 = 2
14 is even
```

## Common Mistakes

### Confusing = (Assignment) with == (Comparison)

**Wrong:**

```
age = 18
if age = 18:
    print("You are 18")
```

SyntaxError: invalid syntax

**Correct:**

```
age = 18
if age == 18:
    print("You are 18")
```

The single `=` is the assignment operator (it stores a value). The double `==` is the comparison operator (it checks equality). In an `if` statement, you need `==` to compare values. This is one of the most common mistakes in all of programming, not just Python.

### Expecting / to Return an Integer

**Wrong:**

```
total = 10
students = 4
each_gets = total / students
print("Each student gets", each_gets, "chocolates")
```

No error, but output is: Each student gets 2.5 chocolates (a float, not an integer)

**Correct:**

```
total = 10
students = 4
each_gets = total // students
print("Each student gets", each_gets, "chocolates")
```

In Python 3, the `/` operator ALWAYS returns a float, even when dividing two integers that divide evenly: `10 / 2` gives `5.0`, not `5`. If you want an integer result, use floor division `//`. This is a change from Python 2 where `/` with integers gave an integer result.

### Misunderstanding Floor Division with Negative Numbers

**Wrong:**

```
result = -7 // 2
print(result)  # Expecting -3
```

No error, but output is -4 (not -3 as many students expect)

**Correct:**

```
# Floor division rounds TOWARD negative infinity
result = -7 // 2   # -3.5 rounded down = -4
print(result)       # Output: -4

# If you want to truncate toward zero, use int()
result = int(-7 / 2)  # int(-3.5) = -3
print(result)          # Output: -3
```

Floor division always rounds DOWN (toward negative infinity). For `-7 // 2`, the true result is -3.5, and rounding down gives -4 (not -3). Many students expect it to truncate toward zero like some other languages. If you want truncation toward zero, use `int(-7 / 2)` instead.

### Wrong Operator Precedence Assumption

**Wrong:**

```
# Rohan wants to calculate average of 3 numbers
average = 80 + 75 + 90 / 3
print("Average:", average)  # Expecting 81.67
```

No error, but output is 185.0 (wrong answer). Only 90 is divided by 3, then added to 80 + 75.

**Correct:**

```
average = (80 + 75 + 90) / 3
print("Average:", average)  # Correct: 81.666...
```

Without parentheses, Python follows operator precedence: division (`/`) is evaluated before addition (`+`). So `80 + 75 + 90 / 3` becomes `80 + 75 + 30.0` = `185.0`. To get the correct average, use parentheses to force the addition first: `(80 + 75 + 90) / 3`.

### Using 'is' Instead of '==' for Value Comparison

**Wrong:**

```
a = 1000
b = 1000
print(a is b)  # Might print False!
```

No error, but may give unexpected results. 'is' checks identity (same object), not equality.

**Correct:**

```
a = 1000
b = 1000
print(a == b)  # Always True for equal values
```

The `is` operator checks if two variables point to the **same object in memory**, not if they have the same value. For small integers (-5 to 256), Python reuses the same object, so `is` may return True. But for larger numbers, Python may create separate objects. Always use `==` when comparing values, and reserve `is` for checking `None`.

## Summary

- Operators are special symbols that perform operations on values (operands). Python has seven categories of operators.
- Arithmetic operators: + (add), - (subtract), * (multiply), / (float division), // (floor division), % (modulus/remainder), ** (exponentiation).
- The / operator always returns a float in Python 3. Use // for integer division. Floor division rounds toward negative infinity, which matters with negative numbers.
- Comparison operators (==, !=, >, <, >=, <=) compare values and return True or False. Python supports chained comparisons like 1 < x < 10.
- Logical operators: 'and' returns True only if both sides are True, 'or' returns True if at least one side is True, 'not' reverses the Boolean value. Python uses short-circuit evaluation.
- Compound assignment operators (+=, -=, *=, /=, //=, %=, **=) combine an operation with assignment. x += 5 is the same as x = x + 5.
- Membership operators 'in' and 'not in' check if a value exists in a sequence. Identity operators 'is' and 'is not' check if two variables point to the same object in memory.
- Bitwise operators (&, |, ^, ~, <<, >>) work on binary representations of numbers. Left shift doubles and right shift halves.
- Operator precedence (PEMDAS extended): Parentheses > Exponentiation > Unary > Multiplication/Division > Addition/Subtraction > Comparisons > not > and > or.
- Exponentiation (**) is right-associative: 2 ** 3 ** 2 equals 2 ** 9 = 512, not 8 ** 2 = 64. When in doubt, always use parentheses.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/python/operators-in-python/*
*Practice questions: https://learn.modernagecoders.com/resources/python/operators-in-python/practice/*
