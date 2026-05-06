---
title: "Variables and Data Types in Python - int, float, str, bool Explained | Modern Age Coders"
description: "Learn Python variables, naming rules, and data types (int, float, str, bool). Master type(), type conversion, multiple assignment, and dynamic typing with 65+ practice questions."
slug: variables-and-data-types
canonical: https://learn.modernagecoders.com/resources/python/variables-and-data-types/
category: "Python"
keywords: ["python variables", "data types in python", "python int float string bool", "python variables explained", "python type conversion", "python variable naming rules", "python type function", "python dynamic typing", "python for beginners"]
---
# Variables and Data Types in Python

**Difficulty:** Beginner  
**Reading time:** 22 min  
**Chapter:** 4  
**Practice questions:** 65

## What Are Variables and Data Types?

A **variable** is a name that refers to a value stored in your computer's memory. Think of a variable as a **labelled box**: you put a value inside the box, give the box a name, and whenever you need that value later, you just use the box's name.

For example, if Aarav scores 95 marks in Maths, you could create a variable called `marks` and store the value 95 in it:

```
marks = 95
```

Now, whenever you write `marks` in your program, Python knows you mean 95. If his marks change to 98, you just update the variable:

```
marks = 98
```

A **data type** tells Python what kind of value is stored in a variable. Just like in real life — a school register stores names (text), roll numbers (whole numbers), heights (decimal numbers), and attendance (yes/no) — Python has different types for different kinds of data:

- **int** — integers (whole numbers like 42, -7, 0)
- **float** — floating-point numbers (decimals like 3.14, -0.5, 98.6)
- **str** — strings (text like "Hello", 'Aarav', "123")
- **bool** — booleans (only two values: True or False)

### What You Will Learn

- How to create variables and assign values
- Variable naming rules and conventions
- The four basic data types: int, float, str, bool
- The `type()` function to check data types
- Type conversion: `int()`, `float()`, `str()`, `bool()`
- Multiple assignment and variable swapping
- Dynamic typing in Python
- The `id()` function to check memory addresses

## Why Are Variables and Data Types Important?

Variables and data types are the foundation of every program ever written. Without them, you cannot store, retrieve, or manipulate any information. Here is why they matter:

### 1. Programs Need to Remember Things

Without variables, a program would forget everything immediately. Imagine a calculator that cannot remember the first number you typed while you are typing the second one. Variables let your program **store values** and use them later — for calculations, comparisons, display, and more.

### 2. Data Types Prevent Errors

Different types of data behave differently. The number 5 and the text "5" look the same but work very differently. `5 + 3` gives `8` (addition), but `"5" + "3"` gives `"53"` (text joining). Understanding data types helps you predict what your code will do and avoid unexpected results.

### 3. Every Real Program Uses Variables

Think about any app you use:

- A **game** uses variables for score, player name, health, and level
- A **calculator** uses variables to store the numbers and the result
- A **weather app** uses variables for temperature, humidity, and city name
- An **attendance system** uses variables for student names and present/absent status

Every single one of these values is stored in a variable with a specific data type.

### 4. Type Conversion Is a Daily Task

In real programs, you constantly need to convert between types. When a user types their age, it comes in as text ("14") but you need to convert it to a number (14) before doing any calculations. Mastering type conversion now will save you from countless errors later.

### 5. It Builds Your Mental Model of Programming

Understanding variables and data types gives you a mental picture of what happens inside the computer when your code runs. This mental model is essential for debugging (finding errors), optimizing (making code faster), and writing correct programs.

## Detailed Explanation

### Creating Variables

In Python, you create a variable using the **assignment operator** (`=`). The syntax is:

```
variable_name = value
```

Examples:

```
name = "Priya"       # A string variable
age = 14             # An integer variable
height = 5.4         # A float variable
is_student = True    # A boolean variable
```

**Important:** The `=` sign in programming is NOT the same as "equals" in maths. In maths, `x = 5` means "x is equal to 5". In Python, `x = 5` means "**store** the value 5 in the variable named x" or "**assign** 5 to x". The value on the right side is stored in the variable on the left side.

### Variable Naming Rules

Python has strict rules about what you can and cannot name your variables:

#### Rules (Must Follow)

1. **Can contain**: letters (a-z, A-Z), digits (0-9), and underscores (_)
2. **Must start with**: a letter or an underscore — **NOT a digit**
3. **Cannot be**: a Python keyword (reserved word like `if`, `for`, `while`, `True`, `False`, `class`, `def`, `return`, etc.)
4. **Case-sensitive**: `Name`, `name`, and `NAME` are three different variables
5. **No spaces**: Use underscores instead (`student_name`, not `student name`)

#### Valid Variable Names

```
age = 14
student_name = "Aarav"
_private = 100
marks1 = 95
totalMarks = 500
MAX_SCORE = 100
```

#### Invalid Variable Names

```
1st_name = "Aarav"     # Cannot start with a digit
student-name = "Priya" # Hyphens are not allowed
my name = "Rohan"      # Spaces are not allowed
class = 10             # 'class' is a Python keyword
for = 5                # 'for' is a Python keyword
```

#### Naming Conventions (Best Practices)

- Use **snake_case** for variable names: `student_name`, `total_marks`, `is_valid`
- Use descriptive names: `age` is better than `a`, `total_marks` is better than `tm`
- Use **UPPER_CASE** for constants (values that should not change): `MAX_SCORE = 100`, `PI = 3.14159`
- Start boolean variables with `is_` or `has_`: `is_student`, `has_passed`

### Data Type 1: int (Integers)

An **integer** is a whole number — positive, negative, or zero — without any decimal point.

```
marks = 95
temperature = -5
roll_number = 0
population = 1400000000
```

In Python, integers can be **arbitrarily large**. Unlike many other languages that limit numbers to a certain size, Python can handle numbers as large as your computer's memory allows:

```
big_number = 99999999999999999999999999999999
print(big_number)  # Works perfectly!
```

### Data Type 2: float (Floating-Point Numbers)

A **float** is a number with a decimal point. It represents real numbers.

```
pi = 3.14159
height = 5.8
temperature = -2.5
price = 499.99
```

**Important:** Even if the decimal part is zero, it is still a float if it has a decimal point:

```
x = 5     # This is an int
y = 5.0   # This is a float (because of the decimal point)
```

Also, division in Python always produces a float:

```
result = 10 / 2   # Result is 5.0, not 5 (it is a float!)
```

### Data Type 3: str (Strings)

A **string** is a sequence of characters enclosed in quotes. Strings represent text.

```
name = "Sneha"           # Double quotes
city = 'Mumbai'          # Single quotes
greeting = "Hello!"      # Can include symbols
pin_code = "400001"      # Numbers in quotes are strings!
empty = ""               # An empty string (zero characters)
```

**Key point:** `"42"` is a string, not a number. You cannot do mathematical operations on it directly. `42` (without quotes) is a number. This distinction is extremely important.

### Data Type 4: bool (Booleans)

A **boolean** has only two possible values: `True` or `False`. Notice the capital T and F — this is required in Python.

```
is_student = True
has_passed = False
is_raining = True
```

Booleans are used for making decisions in your programs. You will use them extensively when you learn about `if` statements and loops. For now, just know that they exist and can only be `True` or `False`.

#### Booleans and Numbers

In Python, `True` is treated as `1` and `False` is treated as `0` when used in calculations:

```
print(True + True)    # Output: 2 (1 + 1)
print(True + False)   # Output: 1 (1 + 0)
print(False + False)  # Output: 0 (0 + 0)
```

### The type() Function

The `type()` function tells you the data type of any value or variable:

```
print(type(42))         # 
print(type(3.14))       # 
print(type("Hello"))    # 
print(type(True))       # 

age = 14
print(type(age))        # 
```

The output `` means the value belongs to the `int` class. You will learn about classes later, but for now, focus on the type name inside the quotes.

### Type Conversion (Type Casting)

Sometimes you need to convert a value from one type to another. Python provides built-in functions for this:

#### int() — Convert to Integer

```
int("42")      # String to int: 42
int(3.99)      # Float to int: 3 (truncates, does NOT round)
int(True)      # Bool to int: 1
int(False)     # Bool to int: 0
```

**Warning:** `int("hello")` causes an error — you can only convert strings that contain valid numbers.

#### float() — Convert to Float

```
float("3.14")   # String to float: 3.14
float(42)       # Int to float: 42.0
float("5")      # String to float: 5.0
float(True)     # Bool to float: 1.0
```

#### str() — Convert to String

```
str(42)         # Int to string: "42"
str(3.14)       # Float to string: "3.14"
str(True)       # Bool to string: "True"
```

`str()` can convert anything to a string. It never fails.

#### bool() — Convert to Boolean

This function converts values to True or False. The rule is simple:

- **"Falsy" values** (convert to False): `0`, `0.0`, `""` (empty string), `None`, `False`
- **Everything else** is "truthy" (converts to True)

```
bool(1)         # True
bool(0)         # False
bool(-5)        # True (any non-zero number)
bool("Hello")   # True (any non-empty string)
bool("")        # False (empty string)
bool(0.0)       # False
```

### Multiple Assignment

Python lets you assign values to multiple variables in a single line:

```
# Assign different values to different variables
a, b, c = 1, 2, 3
print(a)  # 1
print(b)  # 2
print(c)  # 3

# Assign the same value to multiple variables
x = y = z = 0
print(x, y, z)  # 0 0 0
```

### Variable Swapping

A classic programming task is swapping the values of two variables. In most languages, you need a temporary variable. Python makes it elegant:

```
a = 10
b = 20

# Swap in one line!
a, b = b, a

print(a)  # 20
print(b)  # 10
```

This works because Python evaluates the right side completely before assigning to the left side.

### Dynamic Typing

Python is a **dynamically typed** language. This means a variable can change its type during the program:

```
x = 42          # x is an int
print(type(x))  # 

x = "Hello"     # Now x is a string!
print(type(x))  # 

x = 3.14        # Now x is a float!
print(type(x))  # 
```

In **statically typed** languages like Java or C++, you must declare a variable's type when you create it, and it cannot change. In Python, the type is determined automatically based on the value you assign.

### The id() Function

Every object in Python has a unique identity — a number that identifies it in memory. The `id()` function returns this identity:

```
x = 42
print(id(x))  # Something like 140234567890 (a memory address)

y = 42
print(id(y))  # Same as x! (Python reuses the same object for small integers)

z = 43
print(id(z))  # Different from x and y
```

When two variables have the same `id()`, they are pointing to the exact same object in memory. Python optimizes memory by reusing objects for small integers (typically -5 to 256) and short strings.

### Variable Reassignment

You can change the value of a variable at any time by assigning a new value:

```
score = 0
print(score)  # 0

score = 10
print(score)  # 10

score = score + 5  # Take old value (10), add 5, store result (15)
print(score)  # 15
```

The line `score = score + 5` is very important. It does NOT mean "score equals score plus 5" (which is mathematically impossible). It means: "Take the current value of score (10), add 5 to it, and store the result (15) back in score."

## Code Examples

### Creating Variables of All Four Types

```python
# Integer variable
age = 14
print("Age:", age)
print("Type:", type(age))
print()

# Float variable
height = 5.6
print("Height:", height)
print("Type:", type(height))
print()

# String variable
name = "Kavya Sharma"
print("Name:", name)
print("Type:", type(name))
print()

# Boolean variable
is_student = True
print("Is student:", is_student)
print("Type:", type(is_student))
```

This example creates one variable of each type and prints both the value and the type. The `type()` function confirms what data type each variable holds. Notice the naming conventions: simple names for simple values, and `is_` prefix for the boolean.

**Output:**

```
Age: 14
Type: <class 'int'>

Height: 5.6
Type: <class 'float'>

Name: Kavya Sharma
Type: <class 'str'>

Is student: True
Type: <class 'bool'>
```

### Variable Naming: Valid and Invalid

```python
# Valid variable names:
student_name = "Rohit"
_score = 95
marks1 = 88
totalMarks = 500
MAX_ATTEMPTS = 3

print(student_name, _score, marks1, totalMarks, MAX_ATTEMPTS)

# Invalid variable names (commented out because they cause errors):
# 1st_name = "Aarav"     # SyntaxError: cannot start with digit
# student-name = "Priya" # SyntaxError: hyphen not allowed
# my name = "Rohan"      # SyntaxError: spaces not allowed
# class = 10             # SyntaxError: 'class' is a keyword
# for = 5                # SyntaxError: 'for' is a keyword
```

The valid names follow Python's rules: they use letters, digits, and underscores, and they do not start with a digit or use reserved keywords. The invalid names (commented out) would each cause a SyntaxError. Notice the different naming styles: snake_case for regular variables and UPPER_CASE for constants.

**Output:**

```
Rohit 95 88 500 3
```

### Type Conversion (Casting) Examples

```python
# String to int
marks_str = "95"
marks_int = int(marks_str)
print("String:", marks_str, "| Type:", type(marks_str))
print("Integer:", marks_int, "| Type:", type(marks_int))
print()

# Int to float
whole = 42
decimal = float(whole)
print("Int:", whole, "| Float:", decimal)
print()

# Float to int (truncates — does NOT round!)
pi = 3.99
truncated = int(pi)
print("Float:", pi, "| Int:", truncated, "(truncated, not rounded!)")
print()

# Number to string
age = 14
age_str = str(age)
print("Number:", age, "| String:", age_str)
print("Can concatenate:", "I am " + age_str + " years old")
print()

# Bool conversion
print("bool(1):", bool(1))       # True
print("bool(0):", bool(0))       # False
print("bool(''):", bool(""))     # False (empty string)
print("bool('Hi'):", bool("Hi")) # True (non-empty string)
```

This example shows every type of conversion. The most important points: (1) `int()` truncates floats (cuts off the decimal, does NOT round), so `int(3.99)` gives 3, not 4. (2) `str()` converts anything to text. (3) `bool()` considers 0, 0.0, and empty strings as False; everything else is True.

**Output:**

```
String: 95 | Type: <class 'str'>
Integer: 95 | Type: <class 'int'>

Int: 42 | Float: 42.0

Float: 3.99 | Int: 3 (truncated, not rounded!)

Number: 14 | String: 14
Can concatenate: I am 14 years old

bool(1): True
bool(0): False
bool(''): False
bool('Hi'): True
```

### Multiple Assignment and Swapping

```python
# Multiple assignment — assign different values in one line
a, b, c = 10, 20, 30
print("a =", a, "| b =", b, "| c =", c)

# Same value to multiple variables
x = y = z = 0
print("x =", x, "| y =", y, "| z =", z)
print()

# Variable swapping
print("Before swap:")
first = "Mango"
second = "Apple"
print("first =", first, "| second =", second)

first, second = second, first  # Swap!

print("After swap:")
print("first =", first, "| second =", second)
```

Multiple assignment lets you write compact code. `a, b, c = 10, 20, 30` assigns 10 to a, 20 to b, and 30 to c simultaneously. Swapping uses the same syntax: `first, second = second, first` evaluates the right side first (getting the current values), then assigns them to the left side in the new order.

**Output:**

```
a = 10 | b = 20 | c = 30
x = 0 | y = 0 | z = 0

Before swap:
first = Mango | second = Apple
After swap:
first = Apple | second = Mango
```

### Dynamic Typing — Variables Can Change Type

```python
# Python is dynamically typed — the same variable can hold different types
data = 42
print("Value:", data, "| Type:", type(data))

data = "Hello"
print("Value:", data, "| Type:", type(data))

data = 3.14
print("Value:", data, "| Type:", type(data))

data = True
print("Value:", data, "| Type:", type(data))

# In Java or C++, this would cause an error!
# You would have to declare: int data = 42;
# and then data = "Hello" would be illegal.
```

In Python, you do not need to declare a variable's type. The type is determined by the value you assign. You can even change a variable from one type to another by assigning a new value. This is called **dynamic typing**. In statically typed languages like Java, you declare a type once and cannot change it.

**Output:**

```
Value: 42 | Type: <class 'int'>
Value: Hello | Type: <class 'str'>
Value: 3.14 | Type: <class 'float'>
Value: True | Type: <class 'bool'>
```

### The id() Function and Object Identity

```python
# id() returns the memory address of an object
a = 256
b = 256
print("a =", a, "| id(a) =", id(a))
print("b =", b, "| id(b) =", id(b))
print("Same object?", id(a) == id(b))  # True! Python caches small integers
print()

# Reassigning changes the id
x = 10
print("x = 10 | id(x) =", id(x))
x = 20
print("x = 20 | id(x) =", id(x))  # Different id — new object
```

Every value in Python is an object with a unique identity (memory address). The `id()` function reveals this. Python optimizes memory by reusing objects for small integers (-5 to 256) — so `a = 256` and `b = 256` point to the same object. When you reassign a variable, it points to a new object with a different id. This demonstrates that variables in Python are **references** (labels pointing to objects), not boxes that contain values.

**Output:**

```
a = 256 | id(a) = 2035299577680
b = 256 | id(b) = 2035299577680
Same object? True

x = 10 | id(x) = 2035299569776
x = 20 | id(x) = 2035299570096
```

### Common Type Conversion Mistakes and Edge Cases

```python
# int() truncates, does NOT round
print("int(3.1) =", int(3.1))   # 3
print("int(3.9) =", int(3.9))   # 3 (not 4!)
print("int(-3.7) =", int(-3.7)) # -3 (truncates toward zero)
print()

# Division always returns float
print("10 / 2 =", 10 / 2)       # 5.0, not 5
print("type:", type(10 / 2))    # <class 'float'>
print()

# True and False are 1 and 0
print("True + True =", True + True)     # 2
print("True * 10 =", True * 10)         # 10
print("False + 100 =", False + 100)     # 100
print()

# Bool of different values
print("bool(0) =", bool(0))           # False
print("bool(0.0) =", bool(0.0))       # False
print("bool('') =", bool(""))         # False
print("bool(' ') =", bool(" "))       # True! (space is a character)
print("bool('0') =", bool("0"))       # True! (non-empty string)
print("bool('False') =", bool("False"))  # True! (non-empty string)
```

These edge cases are frequently tested. Key surprises: (1) `int(3.9)` gives 3, not 4 — it truncates, not rounds. (2) Regular division always returns a float, even for 10/2. (3) `bool(" ")` is True because a space is a character (the string is not empty). (4) `bool("0")` and `bool("False")` are both True because they are non-empty strings — bool() checks if the string is empty, not its content.

**Output:**

```
int(3.1) = 3
int(3.9) = 3
int(-3.7) = -3

10 / 2 = 5.0
type: <class 'float'>

True + True = 2
True * 10 = 10
False + 100 = 100

bool(0) = False
bool(0.0) = False
bool('') = False
bool(' ') = True
bool('0') = True
bool('False') = True
```

## Common Mistakes

### Starting a Variable Name with a Digit

**Wrong:**

```
1st_place = "Aarav"
2nd_place = "Priya"
```

SyntaxError: invalid decimal literal

**Correct:**

```
first_place = "Aarav"
second_place = "Priya"
# Or: place_1 = "Aarav"  (digit at end is fine)
```

Variable names cannot start with a digit. Python sees `1st_place` and gets confused because it starts interpreting `1` as a number but then encounters letters. Put the digit at the end (`place_1`) or spell it out (`first_place`).

### Using a Python Keyword as a Variable Name

**Wrong:**

```
class = 10
for = "loop"
```

SyntaxError: invalid syntax

**Correct:**

```
class_number = 10
loop_type = "for loop"
```

Python reserves certain words (keywords) for special purposes. Words like `class`, `for`, `if`, `while`, `True`, `False`, `def`, `return`, `import`, etc. cannot be used as variable names. You can check all keywords by running `import keyword; print(keyword.kwlist)`.

### Confusing = (Assignment) with == (Comparison)

**Wrong:**

```
# Trying to check if x equals 5:
x = 5
if x = 5:    # Wrong! Single = is assignment
    print("x is 5")
```

SyntaxError: invalid syntax

**Correct:**

```
x = 5
if x == 5:    # Correct! Double == is comparison
    print("x is 5")
```

In Python, a single `=` means **assignment** (store a value). A double `==` means **comparison** (check if two values are equal). This is one of the most common mistakes for beginners coming from maths, where `=` means equality.

### Concatenating String and Number Without Conversion

**Wrong:**

```
age = 14
print("I am " + age + " years old")
```

TypeError: can only concatenate str (not "int") to str

**Correct:**

```
age = 14
# Option 1: Convert to string
print("I am " + str(age) + " years old")

# Option 2: Use comma separation (easier)
print("I am", age, "years old")
```

You cannot use `+` to join a string and a number directly. Python does not automatically convert the number to a string. You must explicitly convert using `str()`, or better yet, use comma separation in `print()` which handles the conversion automatically.

### Assuming int() Rounds Instead of Truncates

**Wrong:**

```
# Student expects 4 because 3.7 rounds up
result = int(3.7)
print(result)  # Prints 3, NOT 4!
```

No error, but wrong assumption. Output is 3, not 4.

**Correct:**

```
# int() truncates (removes decimal part)
print(int(3.7))    # 3 (truncated)
print(int(3.2))    # 3 (truncated)

# Use round() if you want rounding:
print(round(3.7))  # 4 (rounded)
print(round(3.2))  # 3 (rounded)
```

The `int()` function does not round — it **truncates**, meaning it simply removes the decimal part. `int(3.9)` gives 3, not 4. For negative numbers, it truncates toward zero: `int(-3.7)` gives -3, not -4. If you need rounding, use the `round()` function instead.

### Assuming bool('False') Is False

**Wrong:**

```
# Student expects this to be False
result = bool("False")
print(result)  # Prints True!
```

No error, but the output is True instead of False.

**Correct:**

```
# bool() checks if the string is EMPTY, not its content
print(bool("False"))  # True — non-empty string
print(bool(""))       # False — empty string
print(bool("0"))      # True — non-empty string
print(bool(0))        # False — zero integer
```

The `bool()` function converts to True or False based on simple rules: for strings, **empty string = False, any non-empty string = True**. It does NOT read the content of the string. So `bool("False")` is True because "False" is a non-empty string (it has 5 characters). Similarly, `bool("0")` is True because "0" is not empty.

## Summary

- A variable is a named reference to a value stored in memory. Create one with: variable_name = value.
- The = operator in Python means 'assign' (store a value), not 'equals' like in mathematics.
- Variable naming rules: must start with a letter or underscore, can contain letters/digits/underscores, cannot be a Python keyword, and are case-sensitive.
- Python has four basic data types: int (whole numbers), float (decimal numbers), str (text in quotes), and bool (True or False).
- The type() function reveals what data type a value or variable is: type(42) returns .
- Type conversion functions: int() converts to integer (truncates decimals), float() converts to decimal, str() converts to text, bool() converts to True/False.
- int() truncates floats toward zero, it does NOT round. int(3.9) gives 3, not 4. Use round() for rounding.
- bool() falsy values: 0, 0.0, empty string "", None, and False. Everything else is truthy, including "0" and "False" (non-empty strings).
- Multiple assignment: a, b, c = 1, 2, 3. Variable swapping: a, b = b, a.
- Python is dynamically typed: variables can change type during execution. x = 42 followed by x = 'Hello' is perfectly valid.
- The id() function returns the memory address of an object. Python caches small integers (-5 to 256), so variables with the same small integer value share the same id.
- Division (/) always returns a float in Python, even for 10 / 2 (result is 5.0, not 5).

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/python/variables-and-data-types/*
*Practice questions: https://learn.modernagecoders.com/resources/python/variables-and-data-types/practice/*
