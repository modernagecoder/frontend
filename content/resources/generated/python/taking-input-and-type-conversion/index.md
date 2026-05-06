---
title: "Taking Input and Type Conversion in Python - input(), int(), float(), str() | Modern Age Coders"
description: "Learn how to take user input with input(), convert between data types using int(), float(), str(), and handle type conversion errors. Includes 57 practice questions with tricky edge cases."
slug: taking-input-and-type-conversion
canonical: https://learn.modernagecoders.com/resources/python/taking-input-and-type-conversion/
category: "Python"
keywords: ["python input function", "type casting python", "int() float() str() python", "python user input", "python type conversion", "python input from user", "type casting in python for beginners"]
---
# Taking Input and Type Conversion

**Difficulty:** Beginner  
**Reading time:** 16 min  
**Chapter:** 6  
**Practice questions:** 57

## What Are Input and Type Conversion?

**Input** means receiving data from the user while the program is running. Instead of hardcoding values like `name = "Aarav"` or `age = 14`, you ask the user to type their own name and age. This makes your program interactive and useful for different people.

The `input()` function is Python's built-in way to take input from the user. When Python reaches an `input()` call, it pauses the program, waits for the user to type something and press Enter, and then returns whatever they typed as a **string**.

### What Is Type Conversion?

**Type conversion** (also called **type casting**) is the process of changing a value from one data type to another. For example, converting the string `"42"` into the integer `42`, or converting the integer `10` into the string `"10"`.

Type conversion is essential because `input()` always returns a string, even if the user types a number. If Priya types `85` when asked for her marks, Python receives `"85"` (a string), not `85` (a number). You cannot do math with strings, so you must convert the string to a number before performing calculations.

## Why Do You Need Input and Type Conversion?

### 1. Making Programs Interactive

Without input, your programs can only work with pre-written values. A calculator that only adds 5 + 3 is not very useful. But a calculator that asks the user for two numbers and then adds them can be used by anyone, anytime, with any numbers. Input transforms a static script into a dynamic, reusable tool.

### 2. The Critical Rule: input() Always Returns a String

This is the single most important fact in this chapter. No matter what the user types — a number, a decimal, even `True` — the `input()` function **always returns a string**. If the user types `25`, Python stores it as `"25"`. If you try to do `"25" + "10"`, you get `"2510"` (string concatenation), not `35` (addition). This is why type conversion is not optional — it is mandatory whenever you need to do math with user input.

### 3. Preventing Errors in Your Programs

If you try to convert a value that cannot be converted (like `int("hello")`), Python raises a `ValueError`. Understanding type conversion helps you write programs that handle invalid input gracefully instead of crashing.

### 4. Building Real Applications

Every real program takes input: login forms ask for usernames and passwords, calculators ask for numbers, games ask for player choices, and surveys ask for responses. Mastering `input()` and type conversion is the foundation for all interactive programming.

## Detailed Explanation

### 1. The input() Function

The `input()` function has a simple syntax:

```
variable = input(prompt_message)
```

The `prompt_message` is an optional string that is displayed to the user before they type. It tells the user what to enter. For example:

```
name = input("Enter your name: ")
```

When Python executes this line, it prints `Enter your name: ` on the screen and waits. The user types their name (say, "Rohan") and presses Enter. Python then stores `"Rohan"` in the variable `name`.

#### Key Facts About input()

- It **always returns a string** — this is the most important thing to remember.
- The prompt message is optional. `input()` with no argument still works; it just shows a blank cursor.
- The program **pauses** until the user presses Enter.
- The trailing newline (when the user presses Enter) is **stripped automatically** — it is not included in the returned string.
- If you add a space at the end of the prompt (`"Enter name: "`), the cursor appears right after the colon, which looks cleaner.

### 2. Why input() Returns a String

You might wonder: if the user types `25`, why does Python not automatically store it as an integer? The reason is that Python has no way to know what the user intends. Consider this: if the user types `007`, should Python store it as the integer 7 (dropping leading zeros) or as the string `"007"` (preserving the format, like a secret agent code)? If the user types `110`, is it a number or a binary string?

By always returning a string, Python gives you the raw data and lets you decide how to interpret it. This is a deliberate design choice that avoids ambiguity.

### 3. Type Conversion Functions

Python provides built-in functions to convert between types:

FunctionConverts ToExampleResult`int()`Integer`int("42")``42``float()`Float`float("3.14")``3.14``str()`String`str(42)``"42"``bool()`Boolean`bool(1)``True`

#### int() - Converting to Integer

The `int()` function converts a value to an integer. It works with:

- **Strings containing whole numbers:** `int("42")` gives `42`
- **Floats (truncates toward zero):** `int(3.9)` gives `3`, `int(-3.9)` gives `-3`
- **Booleans:** `int(True)` gives `1`, `int(False)` gives `0`

Important: `int()` **cannot** convert a string that contains a decimal point. `int("3.14")` raises a `ValueError`. You must first convert to float, then to int: `int(float("3.14"))`.

#### float() - Converting to Float

The `float()` function converts a value to a floating-point number:

- **Strings containing numbers:** `float("3.14")` gives `3.14`, `float("42")` gives `42.0`
- **Integers:** `float(42)` gives `42.0`
- **Booleans:** `float(True)` gives `1.0`

`float()` is more flexible than `int()` — it can handle strings with or without decimal points.

#### str() - Converting to String

The `str()` function converts any value to its string representation:

- `str(42)` gives `"42"`
- `str(3.14)` gives `"3.14"`
- `str(True)` gives `"True"`

This is useful when you want to concatenate a number with text: `"Your score is " + str(95)`.

### 4. The Common Pattern: int(input())

Since `input()` returns a string and you often need a number, the most common pattern is to wrap `input()` inside a conversion function:

```
age = int(input("Enter your age: "))
height = float(input("Enter your height in cm: "))
```

This is called **nesting** function calls. Python evaluates from the inside out: first `input()` gets the string from the user, then `int()` or `float()` converts it to a number.

### 5. ValueError: When Conversion Fails

If you try to convert a value that does not make sense for the target type, Python raises a `ValueError`:

- `int("hello")` — ValueError ("hello" is not a number)
- `int("3.14")` — ValueError (contains a decimal point; int cannot handle this directly)
- `int("")` — ValueError (empty string)
- `float("abc")` — ValueError ("abc" is not a number)

You will learn how to handle these errors gracefully using `try-except` in a later chapter. For now, always make sure the user enters valid data.

### 6. Chaining Conversions

Sometimes you need to convert through an intermediate type. The most common case is converting a decimal string to an integer:

```
# This fails:
# int("3.14")  -> ValueError

# This works (chain through float):
result = int(float("3.14"))  # float("3.14") = 3.14, int(3.14) = 3
```

Another example: converting a Boolean to a string representation of an integer:

```
str(int(True))  # int(True) = 1, str(1) = "1"
```

### 7. Multiple Inputs on One Line

You can take multiple inputs on one line using the `split()` method:

```
a, b = input("Enter two numbers: ").split()
a = int(a)
b = int(b)
```

Or more concisely using `map()`:

```
a, b = map(int, input("Enter two numbers: ").split())
```

When the user types `10 20`, `split()` breaks it into `["10", "20"]`, and `map(int, ...)` converts each element to an integer.

### 8. A Note on eval() (And Why to Avoid It)

Python has a function called `eval()` that evaluates a string as a Python expression:

```
result = eval("2 + 3")  # result = 5
result = eval(input("Enter expression: "))  # User types 2+3, gets 5
```

While `eval()` seems convenient, it is **extremely dangerous** and should never be used with user input. If a malicious user types something like `__import__('os').system('rm -rf /')`, `eval()` would execute it as Python code, potentially deleting files or causing other damage. **Never use `eval()` with `input()`**. Always use explicit type conversion functions like `int()` and `float()` instead.

## Code Examples

### Basic input() Usage

```python
name = input("Enter your name: ")
print("Hello,", name)
print("Type of name:", type(name))
```

The `input()` function displays the prompt, waits for the user to type, and stores the result in `name`. The `type()` function confirms that the result is always a string, regardless of what the user types.

**Output:**

```
Enter your name: Aarav
Hello, Aarav
Type of name: <class 'str'>
```

### The Problem: input() Returns a String

```python
# Without conversion - WRONG result!
num1 = input("Enter first number: ")   # User types 10
num2 = input("Enter second number: ")  # User types 20
result = num1 + num2
print("Result:", result)
print("Type:", type(result))
```

This demonstrates the most common beginner mistake. When Priya enters 10 and 20, she expects the result to be 30. But since `input()` returns strings, `"10" + "20"` performs string concatenation and gives `"1020"`. The `+` operator with strings joins them together instead of adding numerically.

**Output:**

```
Enter first number: 10
Enter second number: 20
Result: 1020
Type: <class 'str'>
```

### The Solution: int(input()) for Numeric Input

```python
# With conversion - CORRECT!
num1 = int(input("Enter first number: "))   # User types 10
num2 = int(input("Enter second number: "))  # User types 20
result = num1 + num2
print("Result:", result)
print("Type:", type(result))
```

By wrapping `input()` inside `int()`, the string `"10"` is converted to the integer `10`, and `"20"` becomes `20`. Now `10 + 20` performs arithmetic addition and gives `30`. This is the correct approach for taking numeric input.

**Output:**

```
Enter first number: 10
Enter second number: 20
Result: 30
Type: <class 'int'>
```

### Type Conversion Functions in Action

```python
# String to int
age_str = "14"
age = int(age_str)
print(age, type(age))

# String to float
price_str = "99.50"
price = float(price_str)
print(price, type(price))

# Int to float
count = 10
count_float = float(count)
print(count_float, type(count_float))

# Float to int (truncates toward zero)
temperature = 36.7
temp_int = int(temperature)
print(temp_int, type(temp_int))

# Negative float to int (truncates toward zero)
neg_temp = -3.8
neg_int = int(neg_temp)
print(neg_int, type(neg_int))

# Number to string
score = 95
score_str = str(score)
print(score_str, type(score_str))
```

This demonstrates all major type conversions. Notice that `int(36.7)` gives 36 (truncates toward zero, does NOT round). Similarly, `int(-3.8)` gives -3, not -4. This is different from floor division which rounds toward negative infinity. The `str()` function converts any value to its string representation.

**Output:**

```
14 <class 'int'>
99.5 <class 'float'>
10.0 <class 'float'>
36 <class 'int'>
-3 <class 'int'>
95 <class 'str'>
```

### Building a Simple Calculator

```python
print("=== Simple Calculator ===")
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

print("\nResults:")
print(num1, "+", num2, "=", num1 + num2)
print(num1, "-", num2, "=", num1 - num2)
print(num1, "*", num2, "=", num1 * num2)
print(num1, "/", num2, "=", num1 / num2)
```

We use `float(input())` instead of `int(input())` so the calculator can handle both whole numbers and decimals. If Rohan enters 15 and 4, it displays all four basic operations. Using `float()` is more flexible than `int()` for a calculator because it accepts both integer and decimal inputs.

**Output:**

```
=== Simple Calculator ===
Enter first number: 15
Enter second number: 4

Results:
15.0 + 4.0 = 19.0
15.0 - 4.0 = 11.0
15.0 * 4.0 = 60.0
15.0 / 4.0 = 3.75
```

### Chaining Conversions and Edge Cases

```python
# Chain: string -> float -> int
value = "7.89"
result = int(float(value))
print("int(float('7.89')) =", result)

# Boolean conversions
print("\nBoolean conversions:")
print("int(True) =", int(True))
print("int(False) =", int(False))
print("float(True) =", float(True))
print("str(True) =", str(True))
print("bool(1) =", bool(1))
print("bool(0) =", bool(0))
print("bool('hello') =", bool("hello"))
print("bool('') =", bool(""))
```

Chaining conversions is needed when you cannot convert directly. `int("7.89")` would crash, but `int(float("7.89"))` works by first converting to float 7.89, then truncating to int 7. Boolean conversions follow these rules: 0, 0.0, empty string, and None are False; everything else is True. `int(True)` gives 1 and `int(False)` gives 0.

**Output:**

```
int(float('7.89')) = 7

Boolean conversions:
int(True) = 1
int(False) = 0
float(True) = 1.0
str(True) = True
bool(1) = True
bool(0) = False
bool('hello') = True
bool('') = False
```

### Multiple Inputs Using split()

```python
# Taking two numbers on one line
print("Enter two numbers separated by space:")
a, b = input().split()
a = int(a)
b = int(b)
print("Sum:", a + b)
print("Product:", a * b)

# Shorter version using map()
print("\nEnter two more numbers:")
x, y = map(int, input().split())
print("Sum:", x + y)
```

The `split()` method breaks a string into a list of parts wherever there is a space. When Ananya types `10 20`, `split()` returns `["10", "20"]`, and the two values are unpacked into `a` and `b`. The `map(int, ...)` version applies `int()` to each element automatically, making the code shorter.

**Output:**

```
Enter two numbers separated by space:
10 20
Sum: 30
Product: 200

Enter two more numbers:
5 8
Sum: 13
```

### Common ValueError Situations

```python
# These will cause ValueError - shown for learning
# DO NOT run these without try-except

# Attempting to show what fails:
print("Valid conversions:")
print(int("42"))       # Works: 42
print(float("3.14"))   # Works: 3.14
print(int(3.99))       # Works: 3 (truncates)

print("\nWhat would cause ValueError:")
print("int('hello') -> ValueError: invalid literal for int()")
print("int('3.14') -> ValueError: cannot convert decimal string directly")
print("int('') -> ValueError: empty string")
print("float('abc') -> ValueError: could not convert string to float")

# The safe way to convert decimal string to int:
print("\nSafe chain conversion:")
print("int(float('3.14')) =", int(float("3.14")))
```

This shows which conversions work and which fail. The most surprising one for beginners is that `int("3.14")` fails even though 3.14 is clearly a number. Python's `int()` requires a clean integer string. To convert a decimal string to an integer, you must chain through `float()` first: `int(float("3.14"))`.

**Output:**

```
Valid conversions:
42
3.14
3

What would cause ValueError:
int('hello') -> ValueError: invalid literal for int()
int('3.14') -> ValueError: cannot convert decimal string directly
int('') -> ValueError: empty string
float('abc') -> ValueError: could not convert string to float

Safe chain conversion:
int(float('3.14')) = 3
```

## Common Mistakes

### Doing Math with String Input (Not Converting)

**Wrong:**

```
num1 = input("Enter a number: ")  # User types 5
num2 = input("Enter a number: ")  # User types 3
print(num1 + num2)
```

No error, but output is '53' instead of 8 (string concatenation instead of addition)

**Correct:**

```
num1 = int(input("Enter a number: "))
num2 = int(input("Enter a number: "))
print(num1 + num2)
```

Since `input()` returns strings, `"5" + "3"` concatenates to `"53"`. To get the mathematical sum 8, you must convert the input to integers using `int()`. This is the number one mistake beginners make with `input()`.

### Using int() on a Decimal String

**Wrong:**

```
price = int(input("Enter price: "))  # User types 29.99
```

ValueError: invalid literal for int() with base 10: '29.99'

**Correct:**

```
price = float(input("Enter price: "))  # Use float for decimals
# Or chain: price = int(float(input("Enter price: ")))
```

The `int()` function cannot directly convert a string that contains a decimal point. `int("29.99")` raises a ValueError. Use `float()` instead, or chain `int(float(...))` if you need an integer from a decimal input.

### Trying to Multiply a String with No Conversion

**Wrong:**

```
quantity = input("How many items? ")  # User types 3
price = 50
total = quantity * price
print("Total:", total)
```

Output is '505050' (string '3' repeated 50 times) or TypeError depending on the operation

**Correct:**

```
quantity = int(input("How many items? "))
price = 50
total = quantity * price
print("Total:", total)
```

In Python, multiplying a string by an integer repeats the string. `"3" * 50` creates a string of fifty 3s: `"33333...3"`. You must convert `quantity` to an integer first so that `3 * 50` gives 150.

### Forgetting the Prompt Message

**Wrong:**

```
name = input()
# Program pauses with no indication of what to type
```

No error, but the user sees a blank cursor with no instructions.

**Correct:**

```
name = input("Enter your name: ")
# User knows what to type
```

While `input()` works without a prompt, the user has no idea what to enter. Always include a clear prompt message. Add a space at the end of the prompt (`"Enter name: "`) so the cursor does not appear right next to the colon.

### Using eval() with User Input

**Wrong:**

```
result = eval(input("Enter an expression: "))
```

Security vulnerability. A malicious user could execute harmful code.

**Correct:**

```
# Instead of eval(), use explicit conversion:
num = int(input("Enter a number: "))

# If you need to evaluate math, use specific operations:
a = float(input("Enter first number: "))
b = float(input("Enter second number: "))
print("Sum:", a + b)
```

`eval()` executes any Python code the user types. This is a serious security risk. A malicious user could type `__import__('os').system('del *')` and delete files. Always use `int()` or `float()` for numeric input. There is never a good reason to use `eval()` with user input.

## Summary

- The input() function takes user input from the keyboard. It always returns a string, regardless of what the user types.
- To take numeric input, wrap input() inside int() or float(): age = int(input('Enter age: ')) or price = float(input('Enter price: ')).
- int() converts to integer. It works with strings of whole numbers, floats (truncates toward zero), and Booleans (True=1, False=0).
- float() converts to float. It is more flexible than int() and can handle both integer and decimal strings.
- str() converts any value to its string representation. Useful for concatenating numbers with text.
- int() cannot directly convert a decimal string like '3.14'. Use int(float('3.14')) to chain the conversion.
- A ValueError occurs when conversion is impossible, such as int('hello') or int(''). Always ensure input data is valid.
- Use split() to take multiple inputs on one line: a, b = input().split(). Use map() for automatic conversion: a, b = map(int, input().split()).
- Never use eval() with user input due to severe security risks. Always use explicit type conversion functions instead.
- The most common mistake is doing math with unconverted string input. '5' + '3' gives '53' (concatenation), not 8 (addition).

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/python/taking-input-and-type-conversion/*
*Practice questions: https://learn.modernagecoders.com/resources/python/taking-input-and-type-conversion/practice/*
