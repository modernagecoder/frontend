---
title: "Modules and Packages in Python - import, pip, Standard Library | Modern Age Coders"
description: "Learn Python modules and packages including import statement, from...import, creating your own modules, __name__ == '__main__', standard library modules (math, random, datetime, os, sys, json), pip package management, and __init__.py. Includes 57+ practice questions with output prediction and coding challenges."
slug: modules-and-packages
canonical: https://learn.modernagecoders.com/resources/python/modules-and-packages
category: "Python"
keywords: ["python modules", "import statement python", "python packages", "python modules tutorial", "python import", "python standard library", "pip install python", "python __init__.py", "python from import", "python module tutorial"]
---
# Modules and Packages in Python

**Difficulty:** Advanced  
**Reading time:** 45 min  
**Chapter:** 23  
**Practice questions:** 57

## What Is a Module?

A **module** in Python is simply a `.py` file that contains Python code -- functions, classes, variables, or executable statements. When you write a function in a file called `helpers.py`, that file is a module named `helpers`.

```
# File: helpers.py
def greet(name):
    return f"Hello, {name}!"

pi = 3.14159
```

Any other Python file can use the code from `helpers.py` by **importing** it:

```
# File: main.py
import helpers

print(helpers.greet("Aarav"))  # Hello, Aarav!
print(helpers.pi)              # 3.14159
```

Python comes with hundreds of pre-built modules called the **standard library**. These modules handle common tasks like math operations, random numbers, file paths, dates, and JSON processing. You do not need to install them -- they come with Python.

A **package** is a folder that contains multiple related modules, organized together with a special `__init__.py` file. Packages let you group related modules into a directory hierarchy, just like folders organize files on your computer.

## Why Are Modules and Packages Important?

### 1. Code Reusability

Without modules, you would need to copy-paste the same functions into every file that needs them. Imagine Priya writes a function to validate email addresses. With modules, she writes it once in `validators.py` and imports it wherever needed. If she fixes a bug, the fix applies everywhere.

### 2. Organization

As programs grow, putting everything in one file becomes unmanageable. A 5000-line file is hard to navigate. Modules let you split code into logical units: one file for database operations, another for user interface, another for calculations. Each module has a clear purpose.

### 3. Namespace Separation

Two modules can define functions with the same name without conflict. If `graphics.py` and `audio.py` both define a `load()` function, there is no confusion because you call them as `graphics.load()` and `audio.load()`. Modules create separate namespaces.

### 4. Access to the Standard Library

Python's standard library is one of its greatest strengths. The `math` module gives you square roots and trigonometry. The `random` module gives you random numbers. The `datetime` module handles dates and times. The `os` module interacts with your operating system. Learning to use these modules is essential because they save you from writing complex code yourself.

### 5. Third-Party Ecosystem

Beyond the standard library, Python has over 400,000 third-party packages available through `pip`. Need to build a web app? Install Flask. Need data analysis? Install pandas. Need machine learning? Install scikit-learn. The module and package system makes this ecosystem possible.

## Detailed Explanation

### 1. The import Statement

The simplest way to use a module is the `import` statement:

```
import math

print(math.sqrt(16))    # 4.0
print(math.pi)          # 3.141592653589793
print(math.ceil(4.2))   # 5
print(math.floor(4.8))  # 4
```

When you write `import math`, Python finds the `math` module, executes it, and creates a module object. You access everything through `math.something`. This is the safest import form because it keeps the module's namespace separate from yours.

### 2. from...import

If you only need specific items from a module, use `from...import`:

```
from math import sqrt, pi

print(sqrt(25))   # 5.0
print(pi)          # 3.141592653589793
# No need to write math.sqrt or math.pi
```

This imports `sqrt` and `pi` directly into your namespace, so you can use them without the `math.` prefix. The rest of the math module is not accessible.

You can also import everything with `from math import *`, but this is discouraged because it pollutes your namespace and makes it unclear where names come from.

### 3. import...as (Aliasing)

Use `as` to give a module or import a shorter name:

```
import datetime as dt

now = dt.datetime.now()
print(now.strftime("%Y-%m-%d"))  # 2026-04-06

from math import factorial as fact
print(fact(5))  # 120
```

Aliasing is useful when module names are long. In the data science world, `import numpy as np` and `import pandas as pd` are standard conventions.

### 4. Creating Your Own Module

Any Python file is a module. Suppose Rohan creates a utility file:

```
# File: string_utils.py

def reverse_string(s):
    return s[::-1]

def count_vowels(s):
    return sum(1 for c in s.lower() if c in 'aeiou')

def is_palindrome(s):
    cleaned = s.lower().replace(" ", "")
    return cleaned == cleaned[::-1]
```

Now any file in the same directory can import it:

```
# File: main.py
import string_utils

print(string_utils.reverse_string("Python"))    # nohtyP
print(string_utils.count_vowels("Education"))   # 5
print(string_utils.is_palindrome("Madam"))      # True
```

### 5. The __name__ == "__main__" Guard

When Python imports a module, it executes all the code in that file. This can cause problems if the module has test code at the top level:

```
# File: calculator.py
def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

# Test code -- runs when imported too!
print("Testing:")
print(add(2, 3))       # This prints when someone imports calculator!
print(multiply(4, 5))
```

The solution is the `__name__` guard. Every Python file has a built-in variable called `__name__`. When you run the file directly, `__name__` is set to `"__main__"`. When the file is imported, `__name__` is set to the module name:

```
# File: calculator.py
def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

if __name__ == "__main__":
    # This only runs when calculator.py is executed directly
    # It does NOT run when someone imports calculator
    print("Testing:")
    print(add(2, 3))
    print(multiply(4, 5))
```

This is one of the most important Python patterns. Always use it when your module has test code or a main script.

### 6. The dir() Function

Use `dir()` to explore what a module contains:

```
import math

# See all names defined in the math module
print(dir(math))
# [..., 'ceil', 'cos', 'e', 'factorial', 'floor', 'log', 'pi', 'sin', 'sqrt', ...]

# Filter to only user-relevant names (exclude dunder names)
names = [name for name in dir(math) if not name.startswith('_')]
print(names)
```

`dir()` without arguments shows names in the current scope. `dir(module)` shows names defined in that module. This is extremely useful for exploring unfamiliar modules in the interactive interpreter.

### 7. Popular Standard Library Modules

#### math -- Mathematical Functions

```
import math

print(math.sqrt(144))        # 12.0
print(math.ceil(4.1))        # 5
print(math.floor(4.9))       # 4
print(math.pi)               # 3.141592653589793
print(math.e)                # 2.718281828459045
print(math.factorial(6))     # 720
print(math.gcd(12, 18))      # 6
print(math.pow(2, 10))       # 1024.0
print(math.log(100, 10))     # 2.0
print(math.isfinite(42))     # True
print(math.isinf(float('inf')))  # True
```

#### random -- Random Numbers

```
import random

print(random.randint(1, 10))       # Random int between 1 and 10
print(random.random())             # Random float between 0 and 1
print(random.choice(["a", "b", "c"]))  # Random element
print(random.uniform(1.0, 5.0))    # Random float in range

colors = ["red", "blue", "green", "yellow"]
random.shuffle(colors)             # Shuffles the list in place
print(colors)

print(random.sample(range(100), 5))  # 5 unique random numbers from 0-99
```

#### datetime -- Dates and Times

```
from datetime import datetime, date, timedelta

now = datetime.now()
print(now)                           # 2026-04-06 14:30:00.123456
print(now.strftime("%d/%m/%Y"))      # 06/04/2026
print(now.strftime("%I:%M %p"))      # 02:30 PM
print(now.year, now.month, now.day)  # 2026 4 6

today = date.today()
birthday = date(2010, 8, 15)
age_days = (today - birthday).days
print(f"Days since birthday: {age_days}")

tomorrow = today + timedelta(days=1)
print(f"Tomorrow: {tomorrow}")
```

#### os -- Operating System Interaction

```
import os

print(os.getcwd())                    # Current working directory
print(os.listdir("."))                # Files in current directory
print(os.path.exists("myfile.txt"))   # True or False
print(os.path.join("folder", "file.txt"))  # folder/file.txt (OS-appropriate)
print(os.path.splitext("photo.jpg"))  # ('photo', '.jpg')
print(os.path.basename("/home/user/file.py"))  # file.py
print(os.path.dirname("/home/user/file.py"))   # /home/user
```

#### sys -- System-Specific Parameters

```
import sys

print(sys.version)           # Python version string
print(sys.platform)          # 'win32', 'linux', 'darwin'
print(sys.argv)              # Command-line arguments list
print(sys.path)              # Module search path
print(sys.getsizeof([1,2]))  # Memory size in bytes
# sys.exit(0)                # Exit the program with status code 0
```

#### json -- JSON Encoding/Decoding

```
import json

# Python dict to JSON string
student = {"name": "Aarav", "age": 16, "scores": [85, 92, 78]}
json_str = json.dumps(student, indent=2)
print(json_str)

# JSON string to Python dict
data = json.loads('{"city": "Delhi", "population": 20000000}')
print(data["city"])       # Delhi
print(type(data))         # 

# Write JSON to a file
with open("student.json", "w") as f:
    json.dump(student, f, indent=2)

# Read JSON from a file
with open("student.json", "r") as f:
    loaded = json.load(f)
    print(loaded["name"])  # Aarav
```

### 8. Installing Third-Party Packages with pip

`pip` is Python's package installer. It downloads packages from the Python Package Index (PyPI):

```
# Install a package
# pip install requests

# Install a specific version
# pip install requests==2.28.0

# List installed packages
# pip list

# Show details about a package
# pip show requests

# Save all installed packages to a file
# pip freeze > requirements.txt

# Install all packages from requirements.txt
# pip install -r requirements.txt

# Uninstall a package
# pip uninstall requests
```

After installing, you import the package like any other module:

```
# After running: pip install requests
import requests

response = requests.get("https://api.example.com/data")
print(response.status_code)
```

### 9. Packages and __init__.py

A **package** is a directory containing an `__init__.py` file and one or more modules:

```
# Directory structure:
# mypackage/
#     __init__.py
#     math_utils.py
#     string_utils.py
#     file_utils.py
```

The `__init__.py` file can be empty or contain initialization code. It tells Python that the directory is a package, not just a regular folder:

```
# mypackage/__init__.py
from .math_utils import add, multiply
from .string_utils import reverse_string

# Now users can import directly from the package:
# from mypackage import add, reverse_string
```

Importing from packages:

```
# Import a specific module from the package
from mypackage import math_utils
print(math_utils.add(2, 3))

# Import a specific function from a module in the package
from mypackage.math_utils import multiply
print(multiply(4, 5))

# Import the package itself (uses __init__.py exports)
import mypackage
print(mypackage.add(2, 3))
```

### 10. Relative vs Absolute Imports

**Absolute imports** specify the full path from the project root:

```
# Absolute import (always works, always clear)
from mypackage.math_utils import add
from mypackage.string_utils import reverse_string
```

**Relative imports** use dots to refer to the current or parent package:

```
# Inside mypackage/file_utils.py
from .math_utils import add          # Same package (one dot)
from .string_utils import reverse_string
from ..other_package import helper    # Parent package (two dots)
```

Relative imports only work inside packages (not in standalone scripts). Absolute imports are recommended for clarity.

### 11. Common Patterns

#### Utility Module Pattern

```
# File: utils.py -- A collection of helper functions
def validate_email(email):
    return "@" in email and "." in email

def format_currency(amount):
    return f"Rs. {amount:,.2f}"

def clamp(value, min_val, max_val):
    return max(min_val, min(value, max_val))
```

#### Config Module Pattern

```
# File: config.py -- All configuration in one place
DATABASE_HOST = "localhost"
DATABASE_PORT = 5432
DATABASE_NAME = "school_db"

MAX_STUDENTS = 50
DEFAULT_GRADE = "A"

DEBUG = True
```

```
# File: main.py
import config

if config.DEBUG:
    print(f"Connecting to {config.DATABASE_HOST}:{config.DATABASE_PORT}")
```

#### Module Search Path

When you write `import something`, Python searches for the module in this order:

1. The directory containing the script being run
2. Directories listed in the `PYTHONPATH` environment variable
3. The standard library directories
4. The `site-packages` directory (where pip installs packages)

You can see the full search path with `sys.path`.

## Code Examples

### Basic import, from...import, and Aliasing

```python
# 1. import -- access via module.name
import math
print(f"sqrt(49) = {math.sqrt(49)}")
print(f"pi = {math.pi:.4f}")

# 2. from...import -- access directly
from math import ceil, floor
print(f"ceil(3.2) = {ceil(3.2)}")
print(f"floor(3.8) = {floor(3.8)}")

# 3. import...as -- alias for convenience
import random as rnd
rnd.seed(42)
print(f"Random int: {rnd.randint(1, 100)}")

# 4. from...import...as
from math import factorial as fact
print(f"5! = {fact(5)}")
```

Three import styles demonstrated. `import math` requires the `math.` prefix. `from math import ceil` lets you use `ceil()` directly. `import random as rnd` creates a shorter alias. All three achieve the same goal of making module code available.

**Output:**

```
sqrt(49) = 7.0
pi = 3.1416
ceil(3.2) = 4
floor(3.8) = 3
Random int: 82
5! = 120
```

### The __name__ == '__main__' Guard

```python
# Simulating how __name__ works
# When a file is run directly, __name__ is "__main__"
# When a file is imported, __name__ is the module name

def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

print(f"__name__ is: {__name__}")

if __name__ == "__main__":
    # This block only runs when the file is executed directly
    print("Running tests...")
    print(f"add(3, 4) = {add(3, 4)}")
    print(f"multiply(5, 6) = {multiply(5, 6)}")
    print("All tests passed!")
else:
    print("Module was imported, skipping tests")
```

When this file is run directly, `__name__` equals `"__main__"`, so the test block executes. If another file imports this module, `__name__` equals the module name, so the test block is skipped. This is the standard pattern for writing modules that are also runnable scripts.

**Output:**

```
__name__ is: __main__
Running tests...
add(3, 4) = 7
multiply(5, 6) = 30
All tests passed!
```

### Exploring Modules with dir() and help()

```python
import math

# List all public names in the math module
public_names = [name for name in dir(math) if not name.startswith('_')]
print(f"math module has {len(public_names)} public names")
print(f"First 10: {public_names[:10]}")

# Check if a name exists in a module
print(f"\n'sqrt' in dir(math): {'sqrt' in dir(math)}")
print(f"'log' in dir(math): {'log' in dir(math)}")
print(f"'hello' in dir(math): {'hello' in dir(math)}")

# Using dir() without arguments shows current scope
import random
x = 10
local_names = [n for n in dir() if not n.startswith('_')]
print(f"\nCurrent scope includes: {local_names}")
```

`dir(module)` returns a list of all names defined in that module. Filtering out names starting with `_` shows only the public API. `dir()` without arguments shows names in the current scope, which includes imported modules and your own variables.

**Output:**

```
math module has 45 public names
First 10: ['acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', 'atanh', 'cbrt', 'ceil', 'comb']

'sqrt' in dir(math): True
'log' in dir(math): True
'hello' in dir(math): False

Current scope includes: ['local_names', 'math', 'public_names', 'random', 'x']
```

### Standard Library: math and random

```python
import math
import random

# math module
print("--- math module ---")
print(f"sqrt(225) = {math.sqrt(225)}")
print(f"ceil(7.1) = {math.ceil(7.1)}")
print(f"floor(7.9) = {math.floor(7.9)}")
print(f"factorial(5) = {math.factorial(5)}")
print(f"gcd(24, 36) = {math.gcd(24, 36)}")
print(f"pow(2, 8) = {math.pow(2, 8)}")
print(f"log2(256) = {math.log2(256)}")

# random module
random.seed(100)  # For reproducible output
print("\n--- random module ---")
print(f"randint(1, 6) = {random.randint(1, 6)}")
print(f"random() = {random.random():.4f}")
print(f"choice(['A','B','C']) = {random.choice(['A','B','C'])}")

numbers = [10, 20, 30, 40, 50]
random.shuffle(numbers)
print(f"Shuffled: {numbers}")

print(f"sample(range(50), 4) = {random.sample(range(50), 4)}")
```

The `math` module provides mathematical functions that work with floats. The `random` module generates pseudo-random numbers. `random.seed()` sets the starting state for reproducible results. `shuffle()` modifies the list in place, while `sample()` returns a new list of unique selections.

**Output:**

```
--- math module ---
sqrt(225) = 15.0
ceil(7.1) = 8
floor(7.9) = 7
factorial(5) = 120
gcd(24, 36) = 12
pow(2, 8) = 256.0
log2(256) = 8.0

--- random module ---
randint(1, 6) = 1
random() = 0.1456
choice(['A','B','C']) = B
Shuffled: [40, 50, 20, 30, 10]
sample(range(50), 4) = [46, 29, 15, 45]
```

### Standard Library: datetime, os, and json

```python
from datetime import datetime, date, timedelta
import os
import json

# datetime
print("--- datetime ---")
now = datetime.now()
print(f"Now: {now.strftime('%Y-%m-%d %H:%M')}")
print(f"Year: {now.year}, Month: {now.month}")

birthday = date(2010, 5, 20)
today = date.today()
age_days = (today - birthday).days
print(f"Days since 2010-05-20: {age_days}")

next_week = today + timedelta(weeks=1)
print(f"Next week: {next_week}")

# os
print("\n--- os ---")
print(f"Current directory: {os.path.basename(os.getcwd())}")
print(f"Path join: {os.path.join('data', 'scores.csv')}")
print(f"Split ext: {os.path.splitext('report.pdf')}")

# json
print("\n--- json ---")
student = {"name": "Meera", "age": 14, "subjects": ["Math", "Python"]}
json_str = json.dumps(student)
print(f"To JSON: {json_str}")

parsed = json.loads(json_str)
print(f"From JSON: {parsed['name']}, age {parsed['age']}")
print(f"Type: {type(parsed)}")
```

The `datetime` module handles dates and times. `strftime()` formats a datetime as a string. `timedelta` represents a duration. The `os` module provides operating system functions. `os.path` handles file paths in a cross-platform way. The `json` module converts between Python dictionaries and JSON strings using `dumps()` and `loads()`.

**Output:**

```
--- datetime ---
Now: 2026-04-06 14:30
Year: 2026, Month: 4
Days since 2010-05-20: 5800
Next week: 2026-04-13

--- os ---
Current directory: frontend
Path join: data/scores.csv
Split ext: ('report', '.pdf')

--- json ---
To JSON: {"name": "Meera", "age": 14, "subjects": ["Math", "Python"]}
From JSON: Meera, age 14
Type: <class 'dict'>
```

### Creating and Using Your Own Module

```python
# Simulating a custom module inline
# In real code, this would be in a separate file: math_helpers.py

# --- Content of math_helpers.py ---
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

def fibonacci(n):
    sequence = []
    a, b = 0, 1
    for _ in range(n):
        sequence.append(a)
        a, b = b, a + b
    return sequence

def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

# --- Using the module ---
# In real code: import math_helpers

print("Primes under 20:", [n for n in range(20) if is_prime(n)])
print("First 10 Fibonacci:", fibonacci(10))
print("10! =", factorial(10))
print()

# The __name__ guard
if __name__ == "__main__":
    print("Running as main script")
    print(f"is_prime(17) = {is_prime(17)}")
    print(f"fibonacci(5) = {fibonacci(5)}")
```

This demonstrates what a custom module looks like. In practice, the functions would be in a separate `.py` file. Other files would import it with `import math_helpers`. The `__name__` guard at the bottom ensures the test code only runs when the file is executed directly, not when it is imported.

**Output:**

```
Primes under 20: [2, 3, 5, 7, 11, 13, 17, 19]
First 10 Fibonacci: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
10! = 3628800

Running as main script
is_prime(17) = True
fibonacci(5) = [0, 1, 1, 2, 3]
```

### sys Module and Command-Line Arguments

```python
import sys

# System information
print(f"Python version: {sys.version.split()[0]}")
print(f"Platform: {sys.platform}")
print(f"Max integer size: {sys.maxsize}")

# Memory size of objects
print(f"\nSize of int 0: {sys.getsizeof(0)} bytes")
print(f"Size of int 1000: {sys.getsizeof(1000)} bytes")
print(f"Size of empty list: {sys.getsizeof([])} bytes")
print(f"Size of [1,2,3]: {sys.getsizeof([1,2,3])} bytes")
print(f"Size of empty string: {sys.getsizeof('')} bytes")
print(f"Size of 'hello': {sys.getsizeof('hello')} bytes")

# sys.argv (command-line arguments)
print(f"\nsys.argv: {sys.argv}")
print(f"Script name: {sys.argv[0] if sys.argv else 'N/A'}")

# Module search path (first 3 entries)
print(f"\nModule search path (first 3):")
for p in sys.path[:3]:
    print(f"  {p}")
```

The `sys` module provides access to Python interpreter internals. `sys.version` shows the Python version. `sys.getsizeof()` returns memory usage in bytes. `sys.argv` is a list where the first element is the script name and subsequent elements are command-line arguments. `sys.path` shows where Python looks for modules.

**Output:**

```
Python version: 3.12.0
Platform: win32
Max integer size: 9223372036854775807

Size of int 0: 28 bytes
Size of int 1000: 28 bytes
Size of empty list: 56 bytes
Size of [1,2,3]: 88 bytes
Size of empty string: 49 bytes
Size of 'hello': 54 bytes

sys.argv: ['script.py']
Script name: script.py

Module search path (first 3):
  /home/user/project
  /usr/lib/python312.zip
  /usr/lib/python3.12
```

## Common Mistakes

### Using from module import * (Wildcard Import)

**Wrong:**

```
from math import *
from random import *

# Which module does 'log' come from?
print(log(100))   # math.log? random has no log, but what if both had one?

# Even worse: name conflicts
# If two modules define the same name, the second import overwrites the first
```

No immediate error, but this pollutes the namespace. If two modules define the same name, one silently overwrites the other, causing subtle bugs.

**Correct:**

```
import math
import random

print(math.log(100))  # Clear: this is from math
print(random.randint(1, 10))  # Clear: this is from random
```

Wildcard imports (`from module import *`) dump all names from the module into your namespace. This makes it unclear where names come from and can cause silent name conflicts. Always use `import module` or `from module import specific_name`.

### Forgetting the __name__ Guard

**Wrong:**

```
# File: helpers.py
def greet(name):
    return f"Hello, {name}!"

# Test code at module level (no guard)
print(greet("Test"))  # Prints every time the module is imported!
```

When another file does import helpers, the test print runs unexpectedly, cluttering the output.

**Correct:**

```
# File: helpers.py
def greet(name):
    return f"Hello, {name}!"

if __name__ == "__main__":
    print(greet("Test"))  # Only runs when helpers.py is executed directly
```

Python executes all code in a module when it is imported. Without the `if __name__ == "__main__"` guard, test code and debug prints run every time someone imports your module. Always wrap test/demo code in this guard.

### Circular Imports

**Wrong:**

```
# File: module_a.py
import module_b
def func_a():
    return module_b.func_b()

# File: module_b.py
import module_a       # Circular! module_a imports module_b which imports module_a
def func_b():
    return module_a.func_a()
```

ImportError or AttributeError. When module_a imports module_b, module_b tries to import module_a, which is not fully loaded yet.

**Correct:**

```
# Solution 1: Move the import inside the function
# File: module_b.py
def func_b():
    import module_a  # Import only when needed
    return module_a.func_a()

# Solution 2: Restructure to eliminate the cycle
# Move shared code to a third module that both can import
```

Circular imports happen when module A imports module B and module B imports module A. Python cannot finish loading either module. Fix this by moving imports inside functions (lazy import) or by restructuring your code to break the cycle.

### Naming a File the Same as a Standard Library Module

**Wrong:**

```
# If you create a file called random.py in your project:
# File: random.py
def my_function():
    pass

# File: main.py
import random
print(random.randint(1, 10))  # AttributeError: module 'random' has no attribute 'randint'
```

AttributeError. Python imports YOUR random.py instead of the standard library random module because it searches the current directory first.

**Correct:**

```
# Rename your file to something else
# File: my_random.py (not random.py)
def my_function():
    pass

# File: main.py
import random  # Now correctly imports the standard library
print(random.randint(1, 10))
```

Never name your Python files the same as standard library modules (e.g., `random.py`, `math.py`, `os.py`, `json.py`). Python searches the current directory first, so your file shadows the standard library module.

### Confusing json.dumps/loads with json.dump/load

**Wrong:**

```
import json

data = {"name": "Aarav"}

# Trying to write a dict to a file with dumps
with open("data.json", "w") as f:
    json.dumps(data, f)  # Wrong! dumps returns a string, does not write to file

# Trying to parse a file with loads
with open("data.json", "r") as f:
    result = json.loads(f)  # Wrong! loads expects a string, not a file object
```

TypeError in both cases. dumps() returns a string (does not take a file). loads() expects a string (not a file object).

**Correct:**

```
import json

data = {"name": "Aarav"}

# dump (no 's') writes to a file
with open("data.json", "w") as f:
    json.dump(data, f, indent=2)

# load (no 's') reads from a file
with open("data.json", "r") as f:
    result = json.load(f)

# dumps/loads work with STRINGS
json_string = json.dumps(data)       # dict -> string
parsed = json.loads(json_string)     # string -> dict
```

The `s` in `dumps`/`loads` stands for "string". `json.dump()`/`json.load()` work with files. `json.dumps()`/`json.loads()` work with strings. This is one of the most common mix-ups when working with JSON in Python.

## Summary

- A module is any .py file containing Python code. You import modules to reuse functions, classes, and variables defined in other files. This avoids code duplication and keeps projects organized.
- The import statement has three forms: 'import math' (access via math.sqrt), 'from math import sqrt' (access directly), and 'import math as m' (alias). Use 'import module' for clarity; use 'from module import name' when you need only specific items.
- The __name__ == '__main__' guard prevents test code from running when a module is imported. When a file is run directly, __name__ is '__main__'. When imported, __name__ is the module name. Always use this guard for test/demo code.
- The dir() function lists all names in a module. dir(math) shows everything in the math module. Filtering out names starting with _ shows the public API. This is useful for exploring unfamiliar modules.
- Python's standard library includes math (sqrt, ceil, floor, pi, factorial), random (randint, choice, shuffle, sample), datetime (now, strftime, timedelta), os (getcwd, listdir, path.join), sys (argv, version, path), and json (dumps, loads, dump, load).
- Third-party packages are installed with pip: 'pip install package_name'. Use 'pip list' to see installed packages, 'pip freeze > requirements.txt' to save dependencies, and 'pip install -r requirements.txt' to install from a requirements file.
- A package is a directory containing __init__.py and module files. The __init__.py file marks the directory as a package and can export selected names. Packages let you organize related modules into a hierarchy.
- Absolute imports (from mypackage.utils import helper) specify the full path and are always clear. Relative imports (from .utils import helper) use dots to reference the current package. Absolute imports are recommended for readability.
- Never name your files the same as standard library modules (random.py, math.py, os.py). Python searches the current directory first, so your file would shadow the standard library module.
- Common module patterns include utility modules (collections of helper functions), config modules (centralized settings), and the __name__ guard for modules that double as scripts.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/python/modules-and-packages/*
*Practice questions: https://learn.modernagecoders.com/resources/python/modules-and-packages/practice/*
