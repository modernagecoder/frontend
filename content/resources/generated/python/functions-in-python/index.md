---
title: "Functions in Python - def, return, *args, **kwargs, Recursion | Modern Age Coders"
description: "Learn Python functions including def keyword, return statement, default parameters, *args, **kwargs, docstrings, recursion, and first-class functions. Includes 65+ practice questions with output prediction and coding challenges."
slug: functions-in-python
canonical: https://learn.modernagecoders.com/resources/python/functions-in-python/
category: "Python"
keywords: ["python functions", "def keyword python", "return statement python", "python function tutorial", "python args kwargs", "python recursion", "python default parameters", "python function examples", "python docstring", "python function parameters"]
---
# Functions in Python

**Difficulty:** Intermediate  
**Reading time:** 35 min  
**Chapter:** 16  
**Practice questions:** 65

## What Are Functions in Python?

A **function** is a reusable block of code that performs a specific task. You define it once and call it as many times as you need, optionally passing data in (parameters) and getting data back (return values).

Functions are defined using the `def` keyword:

```
def greet(name):
    return f"Hello, {name}!"

message = greet("Aarav")
print(message)  # Hello, Aarav!
```

The function `greet` takes one parameter (`name`), constructs a greeting string, and returns it to the caller. The caller stores the result in `message` and prints it.

### Function Anatomy

```
def function_name(parameter1, parameter2):   # Function signature
    """Docstring: describes what the function does."""  # Optional
    # Function body (indented)
    result = parameter1 + parameter2
    return result   # Return value (optional)

# Calling the function
output = function_name(10, 20)  # Arguments passed to parameters
```

Key terminology: **Parameters** are the variable names in the function definition. **Arguments** are the actual values you pass when calling the function.

## Why Are Functions Important?

Functions are arguably the most important concept in programming. Every significant program uses them. Here is why:

### 1. DRY Principle (Don't Repeat Yourself)

Without functions, you would copy-paste the same code every time you need it. If Aarav writes a formula to calculate the area of a circle in 5 different places, and the formula needs updating, he must change all 5 places. With a function, he changes it once.

### 2. Modularity and Organization

Functions break large problems into smaller, manageable pieces. Instead of a 500-line script, you have 20 functions of 25 lines each. Each function has a clear name and purpose, making the code easier to understand and navigate.

### 3. Reusability

Once written, a function can be called from anywhere in your program, or even imported into other programs. Libraries like `math`, `random`, and `os` are collections of functions that thousands of developers reuse.

### 4. Testing and Debugging

Functions can be tested independently. If `calculate_discount()` gives the wrong result, you know exactly where the bug is. Without functions, finding a bug in 500 lines of sequential code is much harder.

### 5. Abstraction

Functions hide complexity. When Priya calls `sorted(my_list)`, she does not need to know the sorting algorithm. She just needs to know what the function does, what it accepts, and what it returns. This is abstraction: separating the *what* from the *how*.

## Detailed Explanation

### 1. The def Keyword and Basic Functions

Every function starts with `def`, followed by the function name, parentheses (with optional parameters), and a colon. The body is indented:

```
def say_hello():
    print("Hello!")

say_hello()  # Prints: Hello!
say_hello()  # Can call as many times as you want
```

A function with no parameters and no return value simply executes its body when called.

### 2. Parameters and Arguments

**Parameters** (defined in the function signature) receive values from **arguments** (passed when calling):

```
def add(a, b):       # a and b are parameters
    return a + b

result = add(3, 5)   # 3 and 5 are arguments
print(result)         # 8
```

### 3. The return Statement

`return` sends a value back to the caller and immediately exits the function. Any code after `return` is not executed.

```
def square(n):
    return n ** 2
    print("This never runs")  # Dead code

result = square(5)  # 25
```

#### Returning Multiple Values

Python functions can return multiple values as a tuple:

```
def min_max(numbers):
    return min(numbers), max(numbers)

low, high = min_max([3, 1, 7, 2, 9])
print(low, high)  # 1 9
```

#### Returning None

If a function has no `return` statement, or uses `return` without a value, it returns `None`:

```
def greet(name):
    print(f"Hello, {name}")

result = greet("Aarav")  # Prints: Hello, Aarav
print(result)            # None
```

### 4. Default Parameters

Parameters can have default values. If the caller does not provide an argument, the default is used:

```
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Aarav"))              # Hello, Aarav!
print(greet("Priya", "Welcome"))   # Welcome, Priya!
```

Important rule: default parameters must come **after** non-default parameters. `def f(a=1, b)` is a SyntaxError.

### 5. Keyword Arguments vs Positional Arguments

**Positional arguments** are matched by position. **Keyword arguments** are matched by name:

```
def describe(name, age, city):
    print(f"{name}, age {age}, from {city}")

# Positional
describe("Aarav", 16, "Delhi")

# Keyword (order does not matter)
describe(city="Mumbai", name="Priya", age=15)

# Mixed (positional must come first)
describe("Rohan", city="Pune", age=17)
```

### 6. *args: Variable Positional Arguments

`*args` collects extra positional arguments into a tuple:

```
def total(*args):
    print(type(args))  # 
    return sum(args)

print(total(1, 2, 3))       # 6
print(total(10, 20, 30, 40)) # 100
```

The name `args` is a convention. You could use `*numbers` or `*values`. The `*` is what matters.

### 7. **kwargs: Variable Keyword Arguments

`**kwargs` collects extra keyword arguments into a dictionary:

```
def profile(**kwargs):
    print(type(kwargs))  # 
    for key, value in kwargs.items():
        print(f"{key}: {value}")

profile(name="Aarav", age=16, city="Delhi")
# name: Aarav
# age: 16
# city: Delhi
```

### 8. Combining Parameter Types

The correct order is: positional, *args, keyword, **kwargs:

```
def example(a, b, *args, key="default", **kwargs):
    print(f"a={a}, b={b}")
    print(f"args={args}")
    print(f"key={key}")
    print(f"kwargs={kwargs}")

example(1, 2, 3, 4, key="custom", x=10, y=20)
# a=1, b=2
# args=(3, 4)
# key=custom
# kwargs={'x': 10, 'y': 20}
```

### 9. Docstrings

A docstring is a triple-quoted string as the first statement of a function. It documents what the function does, its parameters, and its return value:

```
def calculate_area(radius):
    """Calculate the area of a circle.
    
    Args:
        radius: The radius of the circle (non-negative number).
    
    Returns:
        The area of the circle as a float.
    """
    import math
    return math.pi * radius ** 2

# Access the docstring
print(calculate_area.__doc__)
help(calculate_area)
```

### 10. Functions as First-Class Objects

In Python, functions are objects. You can assign them to variables, pass them as arguments, and store them in data structures:

```
# Assign function to a variable
def square(x):
    return x ** 2

operation = square
print(operation(5))  # 25

# Pass function as argument
def apply(func, value):
    return func(value)

print(apply(square, 7))  # 49
print(apply(len, "hello"))  # 5
```

### 11. Recursion

A recursive function calls itself. Every recursive function needs a **base case** (when to stop) and a **recursive case** (when to call itself again):

```
# Factorial: n! = n * (n-1)!
def factorial(n):
    if n == 0 or n == 1:  # Base case
        return 1
    return n * factorial(n - 1)  # Recursive case

print(factorial(5))  # 120 (5 * 4 * 3 * 2 * 1)
```

Recursion is elegant for problems that have a naturally recursive structure (factorial, Fibonacci, tree traversal), but can be slower and use more memory than iterative solutions for large inputs.

### 12. Nested Functions

Functions can be defined inside other functions. The inner function has access to the outer function's variables:

```
def outer(message):
    def inner():
        print(message)  # Accesses outer's variable
    inner()

outer("Hello from inside!")  # Hello from inside!
```

Nested functions are the foundation of closures, which we will explore in the next chapter.

### 13. Global vs Local Variables (Preview)

Variables defined inside a function are **local**: they exist only during the function call. Variables defined outside all functions are **global**:

```
x = 10  # Global

def example():
    y = 20  # Local
    print(x)  # Can read global
    print(y)  # Can read local

example()
print(x)  # 10 (global is accessible)
# print(y)  # NameError! y does not exist outside the function
```

The full rules of scope (LEGB rule) are covered in the next chapter on Scope and Closures.

## Code Examples

### Basic Function Definition and Calling

```python
# Function with no parameters, no return
def say_hello():
    print("Hello, World!")

say_hello()
say_hello()

# Function with parameters and return
def add(a, b):
    return a + b

result = add(10, 20)
print(f"Sum: {result}")

# Return value of a function without return
def just_print(msg):
    print(msg)

value = just_print("Testing")
print(f"Return value: {value}")
```

Functions are defined with `def`. `say_hello()` has no parameters and no return value. `add(a, b)` takes two parameters and returns their sum. A function without a `return` statement implicitly returns `None`.

**Output:**

```
Hello, World!
Hello, World!
Sum: 30
Testing
Return value: None
```

### Default Parameters and Keyword Arguments

```python
def create_profile(name, age, city="Unknown", active=True):
    return {
        "name": name,
        "age": age,
        "city": city,
        "active": active
    }

# All positional
p1 = create_profile("Aarav", 16, "Delhi", True)
print(p1)

# Using defaults
p2 = create_profile("Priya", 15)
print(p2)

# Keyword arguments (order does not matter)
p3 = create_profile(age=17, name="Rohan", city="Mumbai")
print(p3)

# Mix of positional and keyword
p4 = create_profile("Meera", 14, active=False)
print(p4)
```

Default parameters (`city="Unknown"`) are used when the caller does not provide a value. Keyword arguments (`age=17`) can be passed in any order. When mixing, positional arguments must come before keyword arguments.

**Output:**

```
{'name': 'Aarav', 'age': 16, 'city': 'Delhi', 'active': True}
{'name': 'Priya', 'age': 15, 'city': 'Unknown', 'active': True}
{'name': 'Rohan', 'age': 17, 'city': 'Mumbai', 'active': True}
{'name': 'Meera', 'age': 14, 'city': 'Unknown', 'active': False}
```

### Returning Multiple Values

```python
def analyze_marks(marks):
    """Analyze a list of marks and return statistics."""
    total = sum(marks)
    average = total / len(marks)
    highest = max(marks)
    lowest = min(marks)
    return total, average, highest, lowest

marks = [85, 92, 78, 95, 88]
t, avg, hi, lo = analyze_marks(marks)
print(f"Total: {t}")
print(f"Average: {avg}")
print(f"Highest: {hi}")
print(f"Lowest: {lo}")

# The return is actually a tuple
result = analyze_marks(marks)
print(f"\nAs tuple: {result}")
print(f"Type: {type(result)}")
```

Python functions return multiple values as a tuple. The caller can unpack them into separate variables using tuple unpacking (`t, avg, hi, lo = ...`). Without unpacking, the result is a single tuple.

**Output:**

```
Total: 438
Average: 87.6
Highest: 95
Lowest: 78

As tuple: (438, 87.6, 95, 78)
Type: <class 'tuple'>
```

### *args and **kwargs

```python
# *args: variable number of positional arguments
def total(*args):
    print(f"args = {args} (type: {type(args).__name__})")
    return sum(args)

print(total(1, 2, 3))
print(total(10, 20, 30, 40, 50))

# **kwargs: variable number of keyword arguments
def display_info(**kwargs):
    print(f"kwargs = {kwargs} (type: {type(kwargs).__name__})")
    for key, value in kwargs.items():
        print(f"  {key}: {value}")

print()
display_info(name="Aarav", age=16, grade="A")

# Combining regular params, *args, and **kwargs
def flexible(required, *args, **kwargs):
    print(f"required: {required}")
    print(f"args: {args}")
    print(f"kwargs: {kwargs}")

print()
flexible("must", 1, 2, 3, x=10, y=20)
```

`*args` collects extra positional arguments into a tuple. `**kwargs` collects extra keyword arguments into a dictionary. They can be combined: regular parameters first, then *args, then **kwargs.

**Output:**

```
args = (1, 2, 3) (type: tuple)
6
args = (10, 20, 30, 40, 50) (type: tuple)
150

kwargs = {'name': 'Aarav', 'age': 16, 'grade': 'A'} (type: dict)
  name: Aarav
  age: 16
  grade: A

required: must
args: (1, 2, 3)
kwargs: {'x': 10, 'y': 20}
```

### Functions as First-Class Objects

```python
def square(x):
    return x ** 2

def cube(x):
    return x ** 3

# Assign function to a variable
op = square
print(op(5))  # 25

# Store functions in a list
operations = [square, cube, abs, len]
for func in operations:
    if func in (len,):
        print(f"{func.__name__}('hello') = {func('hello')}")
    else:
        print(f"{func.__name__}(-3) = {func(-3)}")

# Pass function as argument
def apply_twice(func, value):
    return func(func(value))

print(f"\nsquare applied twice to 3: {apply_twice(square, 3)}")
print(f"cube applied twice to 2: {apply_twice(cube, 2)}")
```

In Python, functions are first-class objects. They can be assigned to variables, stored in lists/dicts, and passed as arguments to other functions. `func.__name__` gives the function's name as a string.

**Output:**

```
25
square(-3) = 9
cube(-3) = -27
abs(-3) = 3
len('hello') = 5

square applied twice to 3: 81
cube applied twice to 2: 512
```

### Recursion: Factorial and Fibonacci

```python
# Factorial: n! = n * (n-1) * ... * 1
def factorial(n):
    if n <= 1:          # Base case
        return 1
    return n * factorial(n - 1)  # Recursive case

print(f"5! = {factorial(5)}")
print(f"0! = {factorial(0)}")
print(f"10! = {factorial(10)}")

# Fibonacci: F(n) = F(n-1) + F(n-2)
def fibonacci(n):
    if n <= 0:
        return 0
    if n == 1:
        return 1
    return fibonacci(n - 1) + fibonacci(n - 2)

print(f"\nFirst 10 Fibonacci numbers:")
for i in range(10):
    print(fibonacci(i), end=" ")
print()

# Recursive sum of digits
def digit_sum(n):
    if n < 10:
        return n
    return n % 10 + digit_sum(n // 10)

print(f"\nDigit sum of 12345: {digit_sum(12345)}")
```

Recursive functions call themselves with a smaller input until reaching a base case. Factorial multiplies n by factorial of n-1. Fibonacci adds the two preceding values. Every recursive function must have a base case to prevent infinite recursion.

**Output:**

```
5! = 120
0! = 1
10! = 3628800

First 10 Fibonacci numbers:
0 1 1 2 3 5 8 13 21 34 

Digit sum of 12345: 15
```

### Docstrings and help()

```python
def calculate_bmi(weight_kg, height_m):
    """Calculate Body Mass Index (BMI).
    
    Args:
        weight_kg: Weight in kilograms (positive number).
        height_m: Height in meters (positive number).
    
    Returns:
        A tuple of (bmi_value, category) where category is
        one of: 'Underweight', 'Normal', 'Overweight', 'Obese'.
    """
    bmi = weight_kg / (height_m ** 2)
    if bmi < 18.5:
        category = "Underweight"
    elif bmi < 25:
        category = "Normal"
    elif bmi < 30:
        category = "Overweight"
    else:
        category = "Obese"
    return round(bmi, 1), category

# Using the function
bmi, cat = calculate_bmi(70, 1.75)
print(f"BMI: {bmi}, Category: {cat}")

# Accessing docstring
print(f"\nDocstring:\n{calculate_bmi.__doc__}")
```

Docstrings are placed as the first statement inside a function. They document the purpose, parameters, and return value. Access them with `func.__doc__` or `help(func)`. Well-documented functions are easier to use and maintain.

**Output:**

```
BMI: 22.9, Category: Normal

Docstring:
Calculate Body Mass Index (BMI).
    
    Args:
        weight_kg: Weight in kilograms (positive number).
        height_m: Height in meters (positive number).
    
    Returns:
        A tuple of (bmi_value, category) where category is
        one of: 'Underweight', 'Normal', 'Overweight', 'Obese'.
```

### Nested Functions and Local Scope

```python
def outer(x):
    def inner(y):
        return x + y  # inner can access outer's variable x
    return inner(10)

result = outer(5)
print(f"outer(5) -> inner(10) = {result}")

# Global vs Local
counter = 0  # Global

def increment():
    counter = 1  # Local! Does NOT modify global
    print(f"Inside function: counter = {counter}")

increment()
print(f"Outside function: counter = {counter}")

# Demonstrating local scope
def demo():
    local_var = "I exist only inside demo"
    print(local_var)

demo()
try:
    print(local_var)
except NameError as e:
    print(f"NameError: {e}")
```

Inner functions can access variables from the enclosing function. Local variables exist only during the function call. Assigning to a variable inside a function creates a local variable, even if a global with the same name exists. The global variable is not modified.

**Output:**

```
outer(5) -> inner(10) = 15
Inside function: counter = 1
Outside function: counter = 0
I exist only inside demo
NameError: name 'local_var' is not defined
```

## Common Mistakes

### Forgetting to Call the Function (Missing Parentheses)

**Wrong:**

```
def greet():
    return "Hello!"

result = greet  # Missing ()
print(result)   # <function greet at 0x...> - prints the function object!
```

No error, but prints the function object instead of the return value.

**Correct:**

```
def greet():
    return "Hello!"

result = greet()  # Call with ()
print(result)     # Hello!
```

Without parentheses, you get a reference to the function object, not its return value. Always use `()` to call a function: `greet()`, not `greet`.

### Using print() Instead of return (Function Returns None)

**Wrong:**

```
def add(a, b):
    print(a + b)  # Prints but does not return

result = add(3, 5)  # Prints 8
print(result * 2)   # TypeError: unsupported operand type(s) for *: 'NoneType' and 'int'
```

TypeError: unsupported operand type(s) for *: 'NoneType' and 'int'

**Correct:**

```
def add(a, b):
    return a + b  # Return the value

result = add(3, 5)
print(result * 2)  # 16
```

`print()` displays a value to the screen but does not send it back to the caller. The function returns `None`. Use `return` when you need the caller to use the computed value.

### Mutable Default Parameter (Shared Between Calls)

**Wrong:**

```
def add_item(item, items=[]):
    items.append(item)
    return items

print(add_item("apple"))    # ['apple']
print(add_item("banana"))   # ['apple', 'banana'] - not ['banana']!
```

No error, but the default list is shared across calls. Expected ['banana'] on second call, got ['apple', 'banana'].

**Correct:**

```
def add_item(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items

print(add_item("apple"))    # ['apple']
print(add_item("banana"))   # ['banana']
```

Default mutable objects (lists, dicts, sets) are created once when the function is defined, not each time it is called. All calls share the same object. Use `None` as the default and create the mutable object inside the function.

### Placing Default Parameters Before Non-Default

**Wrong:**

```
def greet(greeting="Hello", name):
    return f"{greeting}, {name}!"
# SyntaxError: non-default argument follows default argument
```

SyntaxError: non-default argument follows default argument

**Correct:**

```
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Aarav"))              # Hello, Aarav!
print(greet("Priya", "Welcome"))   # Welcome, Priya!
```

Non-default parameters must come before default parameters. Python reads arguments left to right, so it would not know which positional argument to assign to which parameter if defaults came first.

### Modifying a Global Variable Without the global Keyword

**Wrong:**

```
count = 0

def increment():
    count += 1  # UnboundLocalError!

increment()
```

UnboundLocalError: local variable 'count' referenced before assignment

**Correct:**

```
count = 0

def increment():
    global count
    count += 1

increment()
print(count)  # 1
```

When you assign to a variable inside a function, Python treats it as local for the entire function. Since `count += 1` reads and writes, Python sees it as local, but it has not been defined locally yet. Use `global count` to modify the global variable.

### Recursion Without a Base Case (Infinite Recursion)

**Wrong:**

```
def countdown(n):
    print(n)
    countdown(n - 1)  # No base case!

countdown(5)  # RecursionError: maximum recursion depth exceeded
```

RecursionError: maximum recursion depth exceeded

**Correct:**

```
def countdown(n):
    if n <= 0:        # Base case
        print("Done!")
        return
    print(n)
    countdown(n - 1)

countdown(5)
```

Without a base case, the function calls itself forever until Python hits its recursion limit (usually 1000). Always define a clear stopping condition that does not make a recursive call.

## Summary

- Functions are defined with the def keyword. They encapsulate reusable logic, improving code organization and reducing repetition (DRY principle).
- Parameters are defined in the function signature. Arguments are the values passed when calling. Parameters vs arguments is a common interview question.
- The return statement sends a value back to the caller and exits the function. Without return, a function returns None implicitly.
- Python functions can return multiple values as a tuple: return a, b, c. The caller can unpack them: x, y, z = func().
- Default parameters provide fallback values: def f(x, y=10). Non-default parameters must come before default ones.
- Keyword arguments can be passed in any order: f(y=2, x=1). Positional arguments must come before keyword arguments.
- *args collects extra positional arguments into a tuple. **kwargs collects extra keyword arguments into a dictionary.
- Functions are first-class objects in Python. They can be assigned to variables, stored in data structures, and passed as arguments to other functions.
- Recursive functions call themselves with a smaller input. Every recursive function needs a base case (stopping condition) to prevent infinite recursion.
- Docstrings (triple-quoted strings) document what a function does, its parameters, and return value. Access with func.__doc__ or help(func).
- Variables inside a function are local (exist only during the call). Variables outside all functions are global. Use the global keyword to modify a global from inside a function.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/python/functions-in-python/*
*Practice questions: https://learn.modernagecoders.com/resources/python/functions-in-python/practice/*
