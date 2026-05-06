---
title: "Practice: Modules and Packages in Python"
description: "57 practice problems for Modules and Packages in Python in Python"
slug: modules-and-packages-practice
canonical: https://learn.modernagecoders.com/resources/python/modules-and-packages/practice/
category: "Python"
---
# Practice: Modules and Packages in Python

**Total questions:** 57

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
import math
print(math.sqrt(64))
```

*Hint:* math.sqrt() returns the square root as a float.

**Answer:** `8.0`

`math.sqrt(64)` returns the square root of 64, which is 8.0. Note that it returns a float, not an integer.

### Q2. [Easy] What is the output?

```
from math import pi
print(round(pi, 2))
```

*Hint:* pi is approximately 3.14159. round() rounds to the given decimal places.

**Answer:** `3.14`

`pi` is imported directly from math. `round(3.14159..., 2)` rounds to 2 decimal places, giving 3.14.

### Q3. [Easy] What is the output?

```
import math
print(math.ceil(4.1))
print(math.floor(4.9))
```

*Hint:* ceil rounds up, floor rounds down.

**Answer:** `5`
`4`

`math.ceil(4.1)` rounds up to 5. `math.floor(4.9)` rounds down to 4. Both return integers.

### Q4. [Easy] What is the output?

```
from math import factorial
print(factorial(5))
```

*Hint:* 5! = 5 * 4 * 3 * 2 * 1

**Answer:** `120`

`factorial(5)` computes 5! = 5 * 4 * 3 * 2 * 1 = 120. The function is imported directly from math, so no prefix is needed.

### Q5. [Easy] What is the output?

```
import math as m
print(m.gcd(12, 18))
```

*Hint:* gcd returns the greatest common divisor. math is aliased as m.

**Answer:** `6`

The math module is imported with the alias `m`. `m.gcd(12, 18)` returns the greatest common divisor of 12 and 18, which is 6.

### Q6. [Medium] What is the output?

```
import random
random.seed(0)
print(random.randint(1, 10))
print(random.randint(1, 10))
random.seed(0)
print(random.randint(1, 10))
```

*Hint:* Setting the same seed produces the same sequence of random numbers.

**Answer:** `7`
`1`
`7`

With seed(0), the first randint gives 7 and the second gives 1. Resetting the seed to 0 restarts the sequence, so the third call gives 7 again. Seeds make random output reproducible.

### Q7. [Medium] What is the output?

```
from datetime import date

d1 = date(2026, 1, 1)
d2 = date(2026, 4, 6)
diff = d2 - d1
print(diff.days)
print(type(diff).__name__)
```

*Hint:* Subtracting two date objects gives a timedelta.

**Answer:** `95`
`timedelta`

Subtracting two `date` objects returns a `timedelta` object. From January 1 to April 6 is 95 days. The `.days` attribute gives the number of days as an integer.

### Q8. [Medium] What is the output?

```
import json

data = {"name": "Aarav", "scores": [85, 92]}
json_str = json.dumps(data)
print(type(json_str).__name__)
print(json_str)

parsed = json.loads(json_str)
print(type(parsed).__name__)
print(parsed["name"])
```

*Hint:* dumps converts to string, loads converts back to dict.

**Answer:** `str`
`{"name": "Aarav", "scores": [85, 92]}`
`dict`
`Aarav`

`json.dumps()` converts a Python dict to a JSON string. `json.loads()` parses a JSON string back into a Python dict. The round-trip preserves the data structure.

### Q9. [Medium] What is the output?

```
import os.path

print(os.path.join("folder", "subfolder", "file.txt"))
print(os.path.splitext("report.pdf"))
print(os.path.basename("/home/user/data.csv"))
```

*Hint:* os.path functions handle file paths in a cross-platform way.

**Answer:** `folder/subfolder/file.txt`
`('report', '.pdf')`
`data.csv`

`os.path.join()` combines path components with the correct separator. `splitext()` splits a filename into name and extension. `basename()` returns just the filename from a full path. (Note: on Windows, join uses backslashes.)

### Q10. [Medium] What is the output?

```
import math

print(math.pow(2, 10))
print(2 ** 10)
print(type(math.pow(2, 10)).__name__)
print(type(2 ** 10).__name__)
```

*Hint:* math.pow always returns a float. The ** operator preserves the integer type.

**Answer:** `1024.0`
`1024`
`float`
`int`

`math.pow(2, 10)` returns 1024.0 (always a float). The `**` operator returns 1024 (an int when both operands are ints). Use `**` when you need an integer result; use `math.pow()` when you specifically need a float.

### Q11. [Medium] What is the output?

```
import json

python_data = {"active": True, "count": None, "items": ()}
json_str = json.dumps(python_data)
print(json_str)
```

*Hint:* JSON has different representations for True, None, and tuples.

**Answer:** `{"active": true, "count": null, "items": []}`

When converting to JSON: Python `True` becomes JSON `true`, Python `None` becomes JSON `null`, and Python tuples become JSON arrays (since JSON has no tuple type). These conversions happen automatically.

### Q12. [Hard] What is the output?

```
import sys

a = []
b = [1, 2, 3]
c = "hello"

print(sys.getsizeof(a) < sys.getsizeof(b))
print(sys.getsizeof("") < sys.getsizeof(c))
print(sys.getsizeof(0) == sys.getsizeof(1000))
```

*Hint:* Lists with more elements use more memory. Longer strings use more memory. Small ints have the same base size.

**Answer:** `True`
`True`
`True`

An empty list uses less memory than a list with 3 elements (True). An empty string uses less memory than "hello" (True). Small integers like 0 and 1000 use the same base object size of 28 bytes in CPython (True). `sys.getsizeof()` returns the memory in bytes.

### Q13. [Hard] What is the output?

```
import math

values = [0.1, 0.2, 0.3, 0.4]
print(sum(values))
print(math.fsum(values))
print(sum(values) == 1.0)
print(math.fsum(values) == 1.0)
```

*Hint:* Floating-point arithmetic has precision issues. math.fsum reduces these errors.

**Answer:** `0.9999999999999999`
`1.0`
`False`
`True`

Due to floating-point precision, `sum([0.1, 0.2, 0.3, 0.4])` gives 0.9999999999999999, not exactly 1.0. `math.fsum()` uses a more accurate algorithm that avoids this rounding error, giving exactly 1.0.

### Q14. [Hard] What is the output?

```
import json

data = {"b": 2, "a": 1, "c": 3}
print(json.dumps(data))
print(json.dumps(data, sort_keys=True))
print(json.dumps(data, indent=2, sort_keys=True)[:20])
```

*Hint:* sort_keys orders dictionary keys alphabetically. indent adds pretty formatting.

**Answer:** `{"b": 2, "a": 1, "c": 3}`
`{"a": 1, "b": 2, "c": 3}`
`{
  "a": 1,
  "b":`

By default, `json.dumps` preserves insertion order. `sort_keys=True` sorts keys alphabetically. `indent=2` adds newlines and 2-space indentation for readability. The slice `[:20]` takes only the first 20 characters of the pretty-printed output.

### Q15. [Hard] What is the output?

```
from math import sqrt, pow, pi
import math

print(sqrt(16))       # from...import
print(math.sqrt(16))  # import
print(sqrt is math.sqrt)
```

*Hint:* Both import styles access the same underlying function object.

**Answer:** `4.0`
`4.0`
`True`

Both `sqrt` (from direct import) and `math.sqrt` (from module import) reference the exact same function object. `is` confirms they are the same object in memory. The import style affects how you access the function, not the function itself.

### Q16. [Medium] What is the difference between `json.dump()` and `json.dumps()`?

*Hint:* The 's' in dumps stands for 'string'.

**Answer:** `json.dump(data, file)` writes JSON directly to a file object. `json.dumps(data)` returns a JSON-formatted string. Similarly, `json.load(file)` reads from a file, while `json.loads(string)` parses a string. The 's' stands for 'string'.

Use `dump`/`load` when working with files. Use `dumps`/`loads` when working with strings in memory. Mixing them up causes TypeError because dump/load expect file objects and dumps/loads expect strings.

### Q17. [Hard] Why should you never name your Python file `random.py` or `math.py`?

*Hint:* Think about the module search order. Where does Python look first?

**Answer:** Python searches for modules starting with the current directory. If you create a file called `random.py`, Python imports YOUR file instead of the standard library `random` module. This shadows the standard library module, causing `AttributeError` when you try to use functions like `random.randint()`.

The module search order is: current directory, PYTHONPATH, standard library, site-packages. Since the current directory comes first, a file named after a standard library module will always be found first, breaking all code that tries to use the real module.

## Mixed Questions

### Q1. [Easy] What is the output?

```
import math
print(math.ceil(-3.2))
print(math.floor(-3.2))
```

*Hint:* ceil goes toward positive infinity, floor goes toward negative infinity.

**Answer:** `-3`
`-4`

`math.ceil(-3.2)` rounds toward positive infinity, giving -3. `math.floor(-3.2)` rounds toward negative infinity, giving -4. This is different from rounding toward zero.

### Q2. [Easy] What is the output?

```
import random
random.seed(42)
colors = ["red", "green", "blue"]
print(random.choice(colors))
print(random.choice(colors))
```

*Hint:* With a fixed seed, the sequence is deterministic.

**Answer:** `green`
`green`

With `seed(42)`, the random sequence is fixed. `random.choice()` picks an element based on the internal state. Both calls happen to select "green" with this particular seed and list.

### Q3. [Medium] What is the output?

```
import json

original = {"x": (1, 2, 3)}
json_str = json.dumps(original)
restored = json.loads(json_str)

print(type(original["x"]).__name__)
print(type(restored["x"]).__name__)
print(original == restored)
```

*Hint:* JSON has no tuple type. What does a tuple become after JSON round-trip?

**Answer:** `tuple`
`list`
`False`

The original value is a tuple, but JSON has no tuple type, so `json.dumps()` converts it to a JSON array. When `json.loads()` parses it back, it becomes a Python list. The dictionaries are not equal because a tuple and a list are different types.

### Q4. [Medium] What is the output?

```
from math import sqrt

def distance(x1, y1, x2, y2):
    return sqrt((x2-x1)**2 + (y2-y1)**2)

print(distance(0, 0, 3, 4))
print(distance(1, 1, 4, 5))
```

*Hint:* This is the Euclidean distance formula. sqrt(9+16) = sqrt(25) = 5.

**Answer:** `5.0`
`5.0`

Distance from (0,0) to (3,4): sqrt(9+16) = sqrt(25) = 5.0. Distance from (1,1) to (4,5): sqrt(9+16) = sqrt(25) = 5.0. Both happen to give the same result because the differences are (3,4) in both cases.

### Q5. [Medium] What is the output?

```
from datetime import timedelta

one_week = timedelta(weeks=1)
two_days = timedelta(days=2)

total = one_week + two_days
print(total.days)
print(total > one_week)
```

*Hint:* timedelta objects can be added and compared.

**Answer:** `9`
`True`

One week is 7 days plus 2 days equals 9 days. `total.days` gives 9. `total > one_week` is True because 9 days is more than 7 days. Timedelta objects support arithmetic and comparison.

### Q6. [Medium] What is the output?

```
import math

numbers = [4, 9, 16, 25, 36]
roots = [math.sqrt(n) for n in numbers]
print(roots)
print([int(r) for r in roots])
```

*Hint:* math.sqrt returns floats. int() truncates the decimal.

**Answer:** `[2.0, 3.0, 4.0, 5.0, 6.0]`
`[2, 3, 4, 5, 6]`

`math.sqrt()` returns floats: [2.0, 3.0, 4.0, 5.0, 6.0]. Converting each to `int()` gives [2, 3, 4, 5, 6]. Since all these are perfect squares, the conversion is exact.

### Q7. [Hard] What is the output?

```
import json

class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

s = Student("Priya", 15)

try:
    print(json.dumps(s))
except TypeError as e:
    print(f"Error: {type(e).__name__}")
    print(json.dumps(s.__dict__))
```

*Hint:* json.dumps cannot serialize custom objects directly. __dict__ gives the object's attributes as a dict.

**Answer:** `Error: TypeError`
`{"name": "Priya", "age": 15}`

`json.dumps()` cannot serialize custom class instances directly -- it raises `TypeError`. However, `s.__dict__` returns `{"name": "Priya", "age": 15}`, which is a plain dict that JSON can serialize.

### Q8. [Hard] What is the output?

```
import math

def classify_number(n):
    if math.isinf(n):
        return "infinite"
    if math.isnan(n):
        return "not a number"
    if n == int(n):
        return "whole"
    return "decimal"

print(classify_number(5.0))
print(classify_number(3.14))
print(classify_number(float('inf')))
print(classify_number(float('nan')))
```

*Hint:* math.isinf and math.isnan check for special float values.

**Answer:** `whole`
`decimal`
`infinite`
`not a number`

5.0 equals int(5.0)=5, so it is "whole". 3.14 does not equal 3, so "decimal". `float('inf')` is detected by `math.isinf()`. `float('nan')` is detected by `math.isnan()`. These special float values are part of the IEEE 754 standard.

### Q9. [Hard] What is the output?

```
import random

random.seed(10)
nums = list(range(1, 6))  # [1, 2, 3, 4, 5]

sampled = random.sample(nums, 3)
print(f"sample: {sampled}")
print(f"original: {nums}")

random.shuffle(nums)
print(f"shuffled: {nums}")
```

*Hint:* sample returns a new list (original unchanged). shuffle modifies the list in place.

**Answer:** `sample: [2, 1, 5]`
`original: [1, 2, 3, 4, 5]`
`shuffled: [5, 3, 4, 1, 2]`

`random.sample()` returns a new list of 3 unique elements without modifying the original. `random.shuffle()` modifies the list in place and returns None. This distinction is important: sample creates a new list, shuffle changes the existing one.

### Q10. [Hard] What is the output?

```
import math

print(math.log(1))      # Natural log of 1
print(math.log(math.e)) # Natural log of e
print(math.log(100, 10)) # Log base 10 of 100
print(math.log2(8))      # Log base 2 of 8
```

*Hint:* ln(1) = 0, ln(e) = 1, log10(100) = 2, log2(8) = 3.

**Answer:** `0.0`
`1.0`
`2.0`
`3.0`

The natural log of 1 is 0. The natural log of e is 1. Log base 10 of 100 is 2 (10^2 = 100). Log base 2 of 8 is 3 (2^3 = 8). `math.log(x)` defaults to natural log; `math.log(x, base)` uses a custom base.

### Q11. [Medium] What happens when Python executes `import mymodule` for the first time?

*Hint:* Think about module search, execution, and caching.

**Answer:** Python (1) searches for `mymodule.py` in the module search path (sys.path), (2) creates a new module object, (3) executes all the code in the file from top to bottom, (4) binds the module object to the name `mymodule` in the current namespace, and (5) caches the module in `sys.modules` so subsequent imports use the cached version without re-executing the code.

This is why top-level code (print statements, variable assignments) in a module runs during import. It also explains why the __name__ guard is needed -- the module code executes on import. The caching in sys.modules means the module code runs only once, even if imported from multiple files.

## Multiple Choice Questions

### Q1. [Easy] What is a module in Python?

A. A built-in function
B. A .py file containing Python code
C. A special data type
D. A loop structure

**Answer:** B

**B is correct.** A module is simply a `.py` file containing Python code (functions, classes, variables). Any Python file can be imported as a module.

### Q2. [Easy] Which statement imports only the sqrt function from the math module?

A. import math.sqrt
B. from math import sqrt
C. import sqrt from math
D. using math import sqrt

**Answer:** B

**B is correct.** `from math import sqrt` imports only `sqrt` into your namespace. Option A tries to import a sub-module (not valid for functions). Options C and D are not valid Python syntax.

### Q3. [Easy] What does import random as rnd do?

A. Creates a copy of the random module named rnd
B. Imports the random module and creates an alias rnd
C. Renames the random module permanently
D. Imports only the rnd function from random

**Answer:** B

**B is correct.** The `as` keyword creates an alias. `rnd` is just another name for the same module object. The module is not copied or renamed -- you simply refer to it using a shorter name.

### Q4. [Easy] What does math.ceil(3.1) return?

A. 3
B. 4
C. 3.0
D. 3.1

**Answer:** B

**B is correct.** `math.ceil()` returns the smallest integer greater than or equal to the argument. Since 3.1 is between 3 and 4, ceil returns 4.

### Q5. [Easy] Which function from the random module picks a random element from a list?

A. random.pick()
B. random.select()
C. random.choice()
D. random.get()

**Answer:** C

**C is correct.** `random.choice(sequence)` returns a randomly selected element from a non-empty sequence. The other function names do not exist in the random module.

### Q6. [Easy] What does the __name__ variable equal when a Python file is run directly?

A. The filename
B. "__main__"
C. "module"
D. None

**Answer:** B

**B is correct.** When a Python file is executed directly (not imported), `__name__` is set to `"__main__"`. When the file is imported as a module, `__name__` is set to the module name.

### Q7. [Medium] What is the purpose of __init__.py in a directory?

A. It initializes all variables to zero
B. It marks the directory as a Python package
C. It runs before every function call
D. It is required for every Python file

**Answer:** B

**B is correct.** The `__init__.py` file tells Python that the directory should be treated as a package (a collection of modules). It can be empty or contain initialization code and exports.

### Q8. [Medium] What does pip install requests do?

A. Imports the requests module
B. Downloads and installs the requests package from PyPI
C. Creates a file called requests.py
D. Enables internet access in Python

**Answer:** B

**B is correct.** `pip install` downloads a package from the Python Package Index (PyPI) and installs it on your system. After installation, you can use `import requests` in your code.

### Q9. [Medium] What does json.dumps() do?

A. Reads JSON from a file
B. Converts a JSON string to a Python dict
C. Converts a Python object to a JSON string
D. Deletes a JSON file

**Answer:** C

**C is correct.** `json.dumps()` (dump string) converts a Python object (dict, list, etc.) to a JSON-formatted string. Option B describes `json.loads()`. Option A describes `json.load()`.

### Q10. [Medium] Which command saves all installed package names and versions to a file?

A. pip list > packages.txt
B. pip save requirements.txt
C. pip freeze > requirements.txt
D. pip export requirements.txt

**Answer:** C

**C is correct.** `pip freeze` outputs installed packages in a format suitable for `requirements.txt`. The `>` redirects the output to a file. `pip list` shows packages in a human-readable table format, not the requirements format.

### Q11. [Medium] In which order does Python search for modules?

A. Standard library, current directory, site-packages
B. Current directory, PYTHONPATH, standard library, site-packages
C. site-packages, current directory, standard library
D. PYTHONPATH, standard library, current directory

**Answer:** B

**B is correct.** Python searches: (1) the directory containing the running script, (2) directories in PYTHONPATH, (3) standard library directories, (4) site-packages (where pip installs). This is why naming a file after a standard library module causes shadowing.

### Q12. [Medium] What does random.shuffle(my_list) return?

A. A new shuffled list
B. The original list, shuffled
C. None (it shuffles in place)
D. A random element from the list

**Answer:** C

**C is correct.** `random.shuffle()` modifies the list in place and returns `None`. This is unlike `random.sample()`, which returns a new list. A common mistake is writing `x = random.shuffle(my_list)`, which sets x to None.

### Q13. [Hard] What is the difference between a module and a package?

A. There is no difference
B. A module is a .py file; a package is a directory with __init__.py containing modules
C. A package is a .py file; a module is a directory
D. Modules are built-in; packages are third-party

**Answer:** B

**B is correct.** A module is a single `.py` file. A package is a directory that contains an `__init__.py` file and one or more modules. Packages can also contain sub-packages (nested directories with their own `__init__.py`).

### Q14. [Hard] What happens when you import a module that has already been imported?

A. The module is re-executed from scratch
B. Python uses the cached version from sys.modules
C. An ImportError is raised
D. The previous import is overwritten

**Answer:** B

**B is correct.** Python caches imported modules in `sys.modules`. On subsequent imports, Python returns the cached module object without re-executing the file. This is why module-level code runs only once, even if the module is imported from multiple files.

### Q15. [Hard] What is a relative import in Python?

A. Importing a module by its full path name
B. Using dot notation to import from the current or parent package
C. Importing a module that is related to the current one
D. Importing a module conditionally

**Answer:** B

**B is correct.** Relative imports use dots: `from .utils import helper` (current package) or `from ..parent import something` (parent package). They only work inside packages. Absolute imports (full path from project root) are generally recommended for clarity.

### Q16. [Hard] Why is from module import * considered bad practice?

A. It is slower than regular import
B. It only works with built-in modules
C. It pollutes the namespace and can cause name conflicts
D. It imports private functions that should not be used

**Answer:** C

**C is correct.** Wildcard imports dump all public names from a module into your namespace. This makes it unclear where names come from, and if two modules define the same name, one silently overwrites the other. This leads to subtle, hard-to-find bugs.

### Q17. [Hard] What does dir() return when called without arguments?

A. All built-in function names
B. All names in the current local scope
C. All installed module names
D. The current directory's files

**Answer:** B

**B is correct.** `dir()` without arguments returns a list of names defined in the current local scope, including imported modules, variables, functions, and classes. `dir(module)` with an argument returns names defined in that module.

### Q18. [Hard] What converts a Python None value to when using json.dumps()?

A. "None"
B. null
C. 0
D. false

**Answer:** B

**B is correct.** Python `None` becomes JSON `null`. Other conversions: Python `True`/`False` become JSON `true`/`false`. Python tuples become JSON arrays. Python dicts become JSON objects.

## Coding Challenges

### Challenge 1. Module Explorer

**Difficulty:** Easy

Write a function explore_module(module) that takes an imported module and returns a dictionary with three keys: 'name' (the module name), 'count' (number of public names), and 'functions' (list of public names that are callable). Test it with the math module.

**Constraints:**

- Use dir() to get names. Filter names starting with _ as non-public. Use callable() to check if a name refers to a function.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Module: math
Public names: 45
First 5 callable: ['acos', 'acosh', 'asin', 'asinh', 'atan']
```

**Solution:**

```python
import math

def explore_module(module):
    public_names = [n for n in dir(module) if not n.startswith('_')]
    functions = [n for n in public_names if callable(getattr(module, n))]
    return {
        'name': module.__name__,
        'count': len(public_names),
        'functions': functions
    }

result = explore_module(math)
print(f"Module: {result['name']}")
print(f"Public names: {result['count']}")
print(f"First 5 callable: {result['functions'][:5]}")
```

### Challenge 2. JSON Config Manager

**Difficulty:** Easy

Write two functions: save_config(filename, config_dict) that saves a dictionary to a JSON file with 2-space indentation, and load_config(filename, defaults) that loads a JSON file and merges it with a defaults dictionary (defaults are used for any missing keys).

**Constraints:**

- Use json.dump and json.load. Handle FileNotFoundError in load_config.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Saved config to settings.json
Loaded: {'theme': 'dark', 'font_size': 14, 'language': 'en', 'auto_save': True}
```

**Solution:**

```python
import json

def save_config(filename, config_dict):
    with open(filename, 'w') as f:
        json.dump(config_dict, f, indent=2)
    print(f"Saved config to {filename}")

def load_config(filename, defaults=None):
    if defaults is None:
        defaults = {}
    try:
        with open(filename, 'r') as f:
            config = json.load(f)
    except FileNotFoundError:
        config = {}
    merged = {**defaults, **config}
    return merged

defaults = {'theme': 'light', 'font_size': 12, 'language': 'en', 'auto_save': True}
user_config = {'theme': 'dark', 'font_size': 14}

save_config('settings.json', user_config)
result = load_config('settings.json', defaults)
print(f"Loaded: {result}")
```

### Challenge 3. Random Password Generator

**Difficulty:** Easy

Write a function generate_password(length, include_digits=True, include_symbols=True) using the random module. The password must contain at least one lowercase letter, one uppercase letter, and (if enabled) one digit and one symbol. Shuffle the final result.

**Constraints:**

- Use random.choice for character selection and random.shuffle for mixing. Ensure minimum character type requirements are met.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Password (12 chars): kA3$mN7xR!pQ
Password (8, no symbols): aB3nK8mR
Password (6, letters only): kRmNaB
```

**Solution:**

```python
import random
import string

def generate_password(length=12, include_digits=True, include_symbols=True):
    if length < 4:
        length = 4
    
    password = []
    password.append(random.choice(string.ascii_lowercase))
    password.append(random.choice(string.ascii_uppercase))
    
    pool = string.ascii_letters
    if include_digits:
        password.append(random.choice(string.digits))
        pool += string.digits
    if include_symbols:
        password.append(random.choice('!@#$%&*'))
        pool += '!@#$%&*'
    
    remaining = length - len(password)
    for _ in range(remaining):
        password.append(random.choice(pool))
    
    random.shuffle(password)
    return ''.join(password)

random.seed(42)
print(f"Password (12 chars): {generate_password(12)}")
print(f"Password (8, no symbols): {generate_password(8, include_symbols=False)}")
print(f"Password (6, letters only): {generate_password(6, include_digits=False, include_symbols=False)}")
```

### Challenge 4. Date Calculator

**Difficulty:** Medium

Write a class DateCalculator with methods: days_between(date_str1, date_str2) that returns days between two dates in 'YYYY-MM-DD' format, add_days(date_str, days) that returns a new date string, and day_of_week(date_str) that returns the weekday name. Handle invalid date formats with a ValueError.

**Constraints:**

- Use datetime.strptime for parsing and strftime for formatting. Handle ValueError for bad date strings.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Days between 2026-01-01 and 2026-04-06: 95
Add 30 days to 2026-04-06: 2026-05-06
Day of week for 2026-04-06: Monday
```

**Solution:**

```python
from datetime import datetime, timedelta

class DateCalculator:
    DATE_FORMAT = '%Y-%m-%d'
    
    def _parse(self, date_str):
        try:
            return datetime.strptime(date_str, self.DATE_FORMAT)
        except ValueError:
            raise ValueError(f"Invalid date format: {date_str}. Expected YYYY-MM-DD")
    
    def days_between(self, date_str1, date_str2):
        d1 = self._parse(date_str1)
        d2 = self._parse(date_str2)
        return abs((d2 - d1).days)
    
    def add_days(self, date_str, days):
        d = self._parse(date_str)
        new_date = d + timedelta(days=days)
        return new_date.strftime(self.DATE_FORMAT)
    
    def day_of_week(self, date_str):
        d = self._parse(date_str)
        return d.strftime('%A')

calc = DateCalculator()
print(f"Days between 2026-01-01 and 2026-04-06: {calc.days_between('2026-01-01', '2026-04-06')}")
print(f"Add 30 days to 2026-04-06: {calc.add_days('2026-04-06', 30)}")
print(f"Day of week for 2026-04-06: {calc.day_of_week('2026-04-06')}")

try:
    calc.days_between('2026-13-01', '2026-01-01')
except ValueError as e:
    print(f"Error: {e}")
```

### Challenge 5. File Organizer Simulator

**Difficulty:** Medium

Write a function organize_files(file_list) that takes a list of filenames and returns a dictionary categorizing them by extension. Use os.path.splitext to extract extensions. Categories: 'images' (.jpg, .png, .gif), 'documents' (.pdf, .docx, .txt), 'code' (.py, .js, .html), 'other' (everything else). Also return a count summary.

**Constraints:**

- Use os.path.splitext. Handle files with no extension. Case-insensitive extension matching.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
images: ['photo.jpg', 'logo.png']
documents: ['report.pdf', 'notes.txt']
code: ['main.py', 'index.html']
other: ['data.csv']
Summary: images=2, documents=2, code=2, other=1
```

**Solution:**

```python
import os.path

def organize_files(file_list):
    categories = {
        'images': {'.jpg', '.jpeg', '.png', '.gif', '.bmp'},
        'documents': {'.pdf', '.docx', '.doc', '.txt', '.xlsx'},
        'code': {'.py', '.js', '.html', '.css', '.java', '.cpp'}
    }
    
    result = {'images': [], 'documents': [], 'code': [], 'other': []}
    
    for filename in file_list:
        _, ext = os.path.splitext(filename)
        ext = ext.lower()
        
        placed = False
        for category, extensions in categories.items():
            if ext in extensions:
                result[category].append(filename)
                placed = True
                break
        
        if not placed:
            result['other'].append(filename)
    
    return result

files = ['photo.jpg', 'main.py', 'report.pdf', 'logo.png', 'notes.txt', 'index.html', 'data.csv']
organized = organize_files(files)

for category, file_list in organized.items():
    if file_list:
        print(f"{category}: {file_list}")

summary = ', '.join(f"{k}={len(v)}" for k, v in organized.items())
print(f"Summary: {summary}")
```

### Challenge 6. Statistics Module

**Difficulty:** Medium

Create a module-like structure (using a class to simulate) called Statistics with methods: mean(data), median(data), mode(data), std_dev(data), and describe(data) which returns a summary dict. Use only the math module (do not use the statistics module). Include a __name__ guard to run tests.

**Constraints:**

- Use math.sqrt for standard deviation. Handle edge cases (empty list, single element). Mode should return the most frequent value.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Mean: 5.5
Median: 5.5
Mode: 3
Std Dev: 2.87
Summary: {'count': 10, 'mean': 5.5, 'median': 5.5, 'min': 1, 'max': 10, 'std_dev': 2.87}
```

**Solution:**

```python
import math

class Statistics:
    @staticmethod
    def mean(data):
        if not data:
            return 0
        return sum(data) / len(data)
    
    @staticmethod
    def median(data):
        if not data:
            return 0
        sorted_data = sorted(data)
        n = len(sorted_data)
        mid = n // 2
        if n % 2 == 0:
            return (sorted_data[mid - 1] + sorted_data[mid]) / 2
        return sorted_data[mid]
    
    @staticmethod
    def mode(data):
        if not data:
            return None
        freq = {}
        for x in data:
            freq[x] = freq.get(x, 0) + 1
        return max(freq, key=freq.get)
    
    @staticmethod
    def std_dev(data):
        if len(data) < 2:
            return 0
        avg = sum(data) / len(data)
        variance = sum((x - avg) ** 2 for x in data) / len(data)
        return round(math.sqrt(variance), 2)
    
    @staticmethod
    def describe(data):
        stats = Statistics
        return {
            'count': len(data),
            'mean': stats.mean(data),
            'median': stats.median(data),
            'min': min(data),
            'max': max(data),
            'std_dev': stats.std_dev(data)
        }

if __name__ == "__main__":
    data = [1, 2, 3, 3, 4, 5, 6, 7, 8, 10]
    stats = Statistics
    print(f"Mean: {stats.mean(data)}")
    print(f"Median: {stats.median(data)}")
    print(f"Mode: {stats.mode(data)}")
    print(f"Std Dev: {stats.std_dev(data)}")
    print(f"Summary: {stats.describe(data)}")
```

### Challenge 7. Package Structure Validator

**Difficulty:** Hard

Write a function validate_package(structure) that takes a nested dictionary representing a directory structure and checks if it is a valid Python package. A valid package must have __init__.py in each directory that is treated as a package. Return a list of issues found (missing __init__.py, empty packages, naming conflicts with standard library).

**Constraints:**

- Use a recursive approach. Check names against a list of common standard library modules.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Issues found:
- Missing __init__.py in 'mypackage/utils/'
- Package name 'random' conflicts with standard library
- Empty package 'mypackage/empty/'
```

**Solution:**

```python
import sys

def validate_package(structure, path="", stdlib_modules=None):
    if stdlib_modules is None:
        stdlib_modules = {'os', 'sys', 'math', 'random', 'json', 'datetime',
                         'collections', 'itertools', 'functools', 'string',
                         'io', 'time', 're', 'pathlib', 'typing', 'abc'}
    
    issues = []
    
    for name, contents in structure.items():
        current_path = f"{path}{name}/" if path else f"{name}/"
        
        if isinstance(contents, dict):
            if name in stdlib_modules:
                issues.append(f"Package name '{name}' conflicts with standard library")
            
            if '__init__.py' not in contents:
                issues.append(f"Missing __init__.py in '{current_path}'")
            
            sub_items = {k: v for k, v in contents.items() if k != '__init__.py'}
            if not sub_items:
                issues.append(f"Empty package '{current_path}'")
            
            sub_dirs = {k: v for k, v in contents.items() if isinstance(v, dict)}
            for sub_name, sub_contents in sub_dirs.items():
                issues.extend(validate_package(
                    {sub_name: sub_contents}, current_path, stdlib_modules
                ))
    
    return issues

package_structure = {
    'mypackage': {
        '__init__.py': None,
        'core.py': None,
        'utils': {
            'helpers.py': None
        },
        'random': {
            '__init__.py': None,
            'generator.py': None
        },
        'empty': {
            '__init__.py': None
        }
    }
}

issues = validate_package(package_structure)
if issues:
    print("Issues found:")
    for issue in issues:
        print(f"- {issue}")
else:
    print("Package structure is valid!")
```

### Challenge 8. Module Dependency Analyzer

**Difficulty:** Hard

Write a function analyze_imports(code_string) that parses Python code (as a string) and extracts all import statements. Return a dictionary with 'standard' (standard library), 'third_party' (known third-party), and 'local' (assumed local) module names. Also detect potential circular import risks by finding mutual imports in a dict of module_name: code_string pairs.

**Constraints:**

- Parse import and from...import statements using string operations. Categorize against a known list of standard library modules.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
standard: ['math', 'os', 'json']
third_party: ['requests', 'numpy']
local: ['my_utils', 'config']
Circular risk: module_a <-> module_b
```

**Solution:**

```python
def analyze_imports(code_string):
    stdlib = {'os', 'sys', 'math', 'random', 'json', 'datetime', 'collections',
              'itertools', 'functools', 'string', 'io', 'time', 're', 'pathlib',
              'typing', 'abc', 'csv', 'hashlib', 'logging', 'unittest', 'copy',
              'pprint', 'textwrap', 'enum', 'dataclasses', 'contextlib'}
    third_party = {'requests', 'numpy', 'pandas', 'flask', 'django', 'pytest',
                   'scipy', 'matplotlib', 'sqlalchemy', 'pillow', 'beautifulsoup4'}
    
    imports = {'standard': [], 'third_party': [], 'local': []}
    
    for line in code_string.strip().split('\n'):
        line = line.strip()
        module = None
        
        if line.startswith('import '):
            parts = line.replace('import ', '').split(',')
            for part in parts:
                module = part.strip().split(' as ')[0].split('.')[0]
                if module in stdlib:
                    imports['standard'].append(module)
                elif module in third_party:
                    imports['third_party'].append(module)
                else:
                    imports['local'].append(module)
        elif line.startswith('from '):
            module = line.split(' ')[1].split('.')[0]
            if module in stdlib:
                imports['standard'].append(module)
            elif module in third_party:
                imports['third_party'].append(module)
            elif not module.startswith('.'):
                imports['local'].append(module)
    
    for key in imports:
        imports[key] = sorted(set(imports[key]))
    
    return imports

def find_circular_risks(modules_code):
    module_imports = {}
    for name, code in modules_code.items():
        result = analyze_imports(code)
        module_imports[name] = result['local']
    
    risks = []
    checked = set()
    for mod_a, deps_a in module_imports.items():
        for mod_b, deps_b in module_imports.items():
            if mod_a != mod_b and (mod_b, mod_a) not in checked:
                if mod_b in deps_a and mod_a in deps_b:
                    risks.append((mod_a, mod_b))
                    checked.add((mod_a, mod_b))
    return risks

code = """import math
import os
import json
import requests
import numpy as np
from datetime import datetime
from my_utils import helper
import config"""

result = analyze_imports(code)
for category, modules in result.items():
    print(f"{category}: {modules}")

modules = {
    'module_a': 'import module_b\nimport math',
    'module_b': 'import module_a\nimport os',
    'module_c': 'import module_a'
}

risks = find_circular_risks(modules)
for a, b in risks:
    print(f"Circular risk: {a} <-> {b}")
```

---

*Notes: https://learn.modernagecoders.com/resources/python/modules-and-packages/*
