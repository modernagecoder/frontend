---
title: "Comprehensions and Generators in Python - List, Dict, Set, yield | Modern Age Coders"
description: "Learn Python comprehensions and generators including list comprehension syntax, dict and set comprehensions, generator expressions, yield keyword, lazy evaluation, and practical patterns for efficient Python code. Includes 60+ practice questions with output prediction and coding challenges."
slug: list-comprehensions-and-generators
canonical: https://learn.modernagecoders.com/resources/python/list-comprehensions-and-generators
category: "Python"
keywords: ["python list comprehension", "generator python", "yield keyword python", "python comprehension tutorial", "python dict comprehension", "python set comprehension", "python generator expression", "python lazy evaluation", "python yield vs return"]
---
# Comprehensions and Generators

**Difficulty:** Advanced  
**Reading time:** 50 min  
**Chapter:** 24  
**Practice questions:** 60

## What Are Comprehensions and Generators?

A **comprehension** is a concise, one-line syntax for creating lists, dictionaries, or sets from existing iterables. Instead of writing a multi-line for loop to build a new list, you express the entire transformation in a single expression.

```
# Traditional loop approach
squares = []
for x in range(5):
    squares.append(x ** 2)
print(squares)  # [0, 1, 4, 9, 16]

# List comprehension -- same result, one line
squares = [x ** 2 for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]
```

A **generator** is a special type of iterator that produces values **one at a time**, on demand, instead of creating them all at once in memory. Generators are defined either with a **generator expression** (using parentheses instead of brackets) or with a **generator function** (using the `yield` keyword).

```
# Generator expression -- lazy, produces values on demand
squares_gen = (x ** 2 for x in range(5))
print(next(squares_gen))  # 0
print(next(squares_gen))  # 1
# Remaining values are not yet computed
```

The key difference: a list comprehension builds the entire list in memory immediately. A generator produces values lazily, one at a time, which is far more memory-efficient for large data sets.

## Why Are Comprehensions and Generators Important?

### 1. Readability and Conciseness

Comprehensions express common patterns (transform, filter, combine) in a single readable line. Instead of four lines to build a filtered list (create list, loop, check condition, append), you write one line. Experienced Python developers read comprehensions fluently, and they are considered the Pythonic way to create collections.

### 2. Performance

List comprehensions are faster than equivalent for-loop-with-append patterns because they are optimized at the bytecode level. Python knows in advance that you are building a list, so it can allocate memory more efficiently.

### 3. Memory Efficiency with Generators

When Aarav needs to process a file with 10 million lines, loading all lines into a list would consume gigabytes of memory. A generator processes one line at a time, using constant memory regardless of file size. This is **lazy evaluation** -- computing values only when they are actually needed.

### 4. Composability

Generators can be chained together to create data processing pipelines. Each generator in the chain processes one element at a time and passes it to the next, like an assembly line. This pattern is powerful for handling large data streams without loading everything into memory.

### 5. Foundation for Advanced Python

Understanding comprehensions and generators is essential for advanced Python. Libraries like pandas, SQLAlchemy, and asyncio use these patterns extensively. Generator-based coroutines were the foundation for Python's async/await syntax.

## Detailed Explanation

### 1. Basic List Comprehension

The syntax is `[expression for variable in iterable]`:

```
# Square of each number
squares = [x ** 2 for x in range(6)]
print(squares)  # [0, 1, 4, 9, 16, 25]

# Length of each word
words = ["Python", "is", "fun"]
lengths = [len(w) for w in words]
print(lengths)  # [6, 2, 3]

# Convert to uppercase
names = ["aarav", "priya", "rohan"]
upper_names = [name.upper() for name in names]
print(upper_names)  # ['AARAV', 'PRIYA', 'ROHAN']

# Call a function on each element
def double(n):
    return n * 2

result = [double(x) for x in [1, 2, 3, 4]]
print(result)  # [2, 4, 6, 8]
```

### 2. Comprehension with Condition (Filtering)

Add an `if` clause to filter elements:

```
# Even numbers only
evens = [x for x in range(10) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]

# Words longer than 3 characters
words = ["hi", "hello", "hey", "good", "morning"]
long_words = [w for w in words if len(w) > 3]
print(long_words)  # ['hello', 'good', 'morning']

# Positive numbers only
numbers = [-3, -1, 0, 2, 5, -4, 8]
positives = [n for n in numbers if n > 0]
print(positives)  # [2, 5, 8]

# Strings that are digits
items = ["42", "hello", "7", "world", "100"]
numeric = [s for s in items if s.isdigit()]
print(numeric)  # ['42', '7', '100']
```

### 3. Comprehension with if-else (Transformation)

When you want to transform every element differently based on a condition, the if-else goes **before** the for:

```
# Replace negatives with 0
numbers = [3, -1, 4, -2, 5]
cleaned = [n if n >= 0 else 0 for n in numbers]
print(cleaned)  # [3, 0, 4, 0, 5]

# Label even/odd
labels = ["even" if x % 2 == 0 else "odd" for x in range(5)]
print(labels)  # ['even', 'odd', 'even', 'odd', 'even']

# Pass/fail based on score
scores = [85, 42, 91, 38, 76]
results = ["pass" if s >= 50 else "fail" for s in scores]
print(results)  # ['pass', 'fail', 'pass', 'fail', 'pass']
```

Notice the difference: `[x for x in items if condition]` filters (excludes some elements). `[a if condition else b for x in items]` transforms every element.

### 4. Nested Comprehensions

You can nest for loops inside comprehensions. The order reads left to right, same as nested for loops:

```
# Flatten a 2D list
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [num for row in matrix for num in row]
print(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Equivalent nested loop:
# for row in matrix:
#     for num in row:
#         flat.append(num)

# Create a 2D list (matrix)
matrix = [[i * 3 + j + 1 for j in range(3)] for i in range(3)]
print(matrix)  # [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

# Transpose a matrix (swap rows and columns)
original = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
transposed = [[row[i] for row in original] for i in range(3)]
print(transposed)  # [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

# All pairs from two lists
colors = ["red", "blue"]
sizes = ["S", "M", "L"]
pairs = [(c, s) for c in colors for s in sizes]
print(pairs)
# [('red', 'S'), ('red', 'M'), ('red', 'L'), ('blue', 'S'), ('blue', 'M'), ('blue', 'L')]
```

### 5. Dictionary Comprehension

Use `{key: value for ...}` to create dictionaries:

```
# Square mapping
squares = {x: x**2 for x in range(6)}
print(squares)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Word lengths
words = ["python", "java", "c"]
length_map = {w: len(w) for w in words}
print(length_map)  # {'python': 6, 'java': 4, 'c': 1}

# Swap keys and values
original = {"a": 1, "b": 2, "c": 3}
swapped = {v: k for k, v in original.items()}
print(swapped)  # {1: 'a', 2: 'b', 3: 'c'}

# Filter a dictionary
scores = {"Aarav": 85, "Priya": 42, "Rohan": 91, "Meera": 38}
passed = {name: score for name, score in scores.items() if score >= 50}
print(passed)  # {'Aarav': 85, 'Rohan': 91}
```

### 6. Set Comprehension

Use `{expression for ...}` (no colon) to create sets:

```
# Unique first letters
names = ["Aarav", "Ananya", "Priya", "Pranav", "Rohan"]
first_letters = {name[0] for name in names}
print(first_letters)  # {'A', 'P', 'R'}

# Unique remainders
remainders = {x % 3 for x in range(10)}
print(remainders)  # {0, 1, 2}

# Unique word lengths
sentence = "the quick brown fox jumps over the lazy dog"
lengths = {len(word) for word in sentence.split()}
print(sorted(lengths))  # [3, 4, 5]
```

### 7. Generator Expressions

Replace the brackets `[]` with parentheses `()` to create a generator instead of a list:

```
# List comprehension -- creates entire list in memory
squares_list = [x ** 2 for x in range(1000000)]

# Generator expression -- creates values on demand
squares_gen = (x ** 2 for x in range(1000000))

print(type(squares_list))  # 
print(type(squares_gen))   # 

# Generator is much more memory-efficient
import sys
print(sys.getsizeof(squares_list))  # ~8 MB
print(sys.getsizeof(squares_gen))   # ~200 bytes
```

Generator expressions are ideal when you only need to iterate once or when the sequence is very large.

### 8. Generator Functions (yield)

A **generator function** uses `yield` instead of `return`. Each time `yield` is encountered, the function pauses and produces a value. When `next()` is called again, the function resumes from where it paused:

```
def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1

gen = count_up_to(5)
print(next(gen))  # 1
print(next(gen))  # 2
print(next(gen))  # 3

# Iterate over remaining values
for num in gen:
    print(num, end=" ")  # 4 5
print()
```

### 9. yield vs return

`return` terminates the function and sends back one value. `yield` pauses the function and sends back a value, but the function's state (local variables, position) is preserved for the next call:

```
# return: computes all values at once, stores in memory
def get_squares_list(n):
    result = []
    for i in range(n):
        result.append(i ** 2)
    return result  # All values created, function ends

# yield: computes one value at a time, on demand
def get_squares_gen(n):
    for i in range(n):
        yield i ** 2  # Pauses here, resumes on next call

# Both produce the same values, but:
print(list(get_squares_list(5)))  # [0, 1, 4, 9, 16]
print(list(get_squares_gen(5)))   # [0, 1, 4, 9, 16]
```

The key difference is memory: `get_squares_list(1000000)` creates a list of one million numbers in memory. `get_squares_gen(1000000)` creates them one at a time.

### 10. Lazy Evaluation and StopIteration

Generators use **lazy evaluation** -- they compute the next value only when asked. When a generator has no more values, calling `next()` raises `StopIteration`:

```
def three_items():
    yield "first"
    yield "second"
    yield "third"

gen = three_items()
print(next(gen))  # first
print(next(gen))  # second
print(next(gen))  # third

try:
    print(next(gen))  # No more values!
except StopIteration:
    print("Generator exhausted")
```

A `for` loop handles `StopIteration` automatically -- it calls `next()` repeatedly and stops when `StopIteration` is raised. This is why generators work seamlessly with for loops.

### 11. Chaining Generators

Generators can be chained together, where each generator processes values from the previous one. This creates efficient data pipelines:

```
def read_lines(data):
    for line in data:
        yield line.strip()

def filter_non_empty(lines):
    for line in lines:
        if line:
            yield line

def to_uppercase(lines):
    for line in lines:
        yield line.upper()

# Chain the generators
raw_data = ["  hello  ", "", "  world  ", "   ", "  python  "]
pipeline = to_uppercase(filter_non_empty(read_lines(raw_data)))

for line in pipeline:
    print(line)
# HELLO
# WORLD
# PYTHON
```

Each generator processes one element at a time and passes it to the next. No intermediate lists are created.

### 12. Comprehension vs map/filter

Comprehensions are generally preferred over `map()` and `filter()` in Python because they are more readable:

```
# map equivalent
numbers = [1, 2, 3, 4, 5]
map_result = list(map(lambda x: x ** 2, numbers))
comp_result = [x ** 2 for x in numbers]
print(map_result == comp_result)  # True

# filter equivalent
filter_result = list(filter(lambda x: x > 2, numbers))
comp_result = [x for x in numbers if x > 2]
print(filter_result == comp_result)  # True

# map + filter combined
mf_result = list(map(lambda x: x ** 2, filter(lambda x: x > 2, numbers)))
comp_result = [x ** 2 for x in numbers if x > 2]
print(mf_result == comp_result)  # True
# The comprehension is clearly more readable
```

## Code Examples

### List Comprehension: Basic, Filter, and Transform

```python
# Basic: transform each element
numbers = [1, 2, 3, 4, 5]
squared = [n ** 2 for n in numbers]
print(f"Squared: {squared}")

# Filter: keep only elements matching condition
evens = [n for n in range(10) if n % 2 == 0]
print(f"Evens: {evens}")

# Transform with if-else: modify every element
scores = [85, 42, 91, 38, 76, 55]
grades = ["pass" if s >= 50 else "fail" for s in scores]
print(f"Grades: {grades}")

# Combined: filter AND transform
even_squares = [n ** 2 for n in range(10) if n % 2 == 0]
print(f"Even squares: {even_squares}")

# String processing
words = ["  hello ", " WORLD", "Python  "]
cleaned = [w.strip().lower() for w in words]
print(f"Cleaned: {cleaned}")
```

List comprehensions replace the loop-append pattern with a single expression. The `if` after the for clause filters elements. The `if-else` before the for clause transforms every element. Both can be combined: filter first (if after for), then transform (expression before for).

**Output:**

```
Squared: [1, 4, 9, 16, 25]
Evens: [0, 2, 4, 6, 8]
Grades: ['pass', 'fail', 'pass', 'fail', 'pass', 'pass']
Even squares: [0, 4, 16, 36, 64]
Cleaned: ['hello', 'world', 'python']
```

### Dict and Set Comprehensions

```python
# Dict comprehension: word -> length
fruits = ["apple", "banana", "cherry", "date"]
fruit_lengths = {f: len(f) for f in fruits}
print(f"Lengths: {fruit_lengths}")

# Dict comprehension: invert a dictionary
original = {"a": 1, "b": 2, "c": 3}
inverted = {v: k for k, v in original.items()}
print(f"Inverted: {inverted}")

# Dict comprehension with filter
scores = {"Aarav": 85, "Priya": 42, "Rohan": 91, "Meera": 38, "Kavya": 76}
toppers = {name: score for name, score in scores.items() if score >= 75}
print(f"Toppers: {toppers}")

# Set comprehension: unique values
numbers = [1, 2, 2, 3, 3, 3, 4, 4, 5]
unique_squares = {n ** 2 for n in numbers}
print(f"Unique squares: {sorted(unique_squares)}")

# Set comprehension: unique first characters
names = ["Aarav", "Ananya", "Priya", "Pranav", "Rohan", "Riya"]
initials = {name[0] for name in names}
print(f"Initials: {sorted(initials)}")
```

Dict comprehensions use `{key: value for ...}`. Set comprehensions use `{value for ...}` (no colon). The syntax is identical to list comprehensions except for the brackets. Dict comprehensions are powerful for transforming, filtering, and inverting dictionaries. Set comprehensions automatically remove duplicates.

**Output:**

```
Lengths: {'apple': 5, 'banana': 6, 'cherry': 6, 'date': 4}
Inverted: {1: 'a', 2: 'b', 3: 'c'}
Toppers: {'Aarav': 85, 'Rohan': 91, 'Kavya': 76}
Unique squares: [1, 4, 9, 16, 25]
Initials: ['A', 'P', 'R']
```

### Nested Comprehensions: Flatten and Matrix Operations

```python
# Flatten a 2D list
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [num for row in matrix for num in row]
print(f"Flat: {flat}")

# Create a multiplication table
table = [[i * j for j in range(1, 4)] for i in range(1, 4)]
for row in table:
    print(row)

# Transpose a matrix
original = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
transposed = [[row[i] for row in original] for i in range(len(original[0]))]
print(f"\nOriginal: {original}")
print(f"Transposed: {transposed}")

# All coordinate pairs in a grid
coords = [(x, y) for x in range(3) for y in range(3)]
print(f"\nGrid coords: {coords}")
```

Nested comprehensions read left to right: `[num for row in matrix for num in row]` is equivalent to a nested for loop where the outer loop iterates rows and the inner loop iterates numbers. For creating 2D structures, use a comprehension inside a comprehension: `[[expr for j] for i]`. The outer comprehension creates rows, and the inner creates columns.

**Output:**

```
Flat: [1, 2, 3, 4, 5, 6, 7, 8, 9]
[1, 2, 3]
[2, 4, 6]
[3, 6, 9]

Original: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Transposed: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

Grid coords: [(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2)]
```

### Generator Functions with yield

```python
def fibonacci(limit):
    a, b = 0, 1
    while a <= limit:
        yield a
        a, b = b, a + b

# Using next()
fib = fibonacci(100)
print(f"First: {next(fib)}")
print(f"Second: {next(fib)}")
print(f"Third: {next(fib)}")

# Using for loop for the rest
print("Remaining:", end=" ")
for num in fib:
    print(num, end=" ")
print()

# Generator is now exhausted
print(f"List from exhausted: {list(fib)}")

# Fresh generator
print(f"\nAll Fibonacci up to 50: {list(fibonacci(50))}")

# Infinite generator (use with caution)
def count_forever(start=0):
    n = start
    while True:
        yield n
        n += 1

counter = count_forever(10)
first_five = [next(counter) for _ in range(5)]
print(f"First 5 from infinite: {first_five}")
```

A generator function contains `yield` instead of `return`. Each `yield` pauses the function and produces a value. `next()` resumes execution until the next yield. After a for loop or `list()` consumes all values, the generator is exhausted and produces nothing more. Creating a new generator (calling the function again) starts fresh.

**Output:**

```
First: 0
Second: 1
Third: 1
Remaining: 2 3 5 8 13 21 34 55 89 
List from exhausted: []

All Fibonacci up to 50: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
First 5 from infinite: [10, 11, 12, 13, 14]
```

### Generator Expression vs List Comprehension

```python
import sys

# Memory comparison
list_comp = [x ** 2 for x in range(10000)]
gen_expr = (x ** 2 for x in range(10000))

print(f"List size: {sys.getsizeof(list_comp):,} bytes")
print(f"Generator size: {sys.getsizeof(gen_expr)} bytes")

# Both produce the same values
small_list = [x ** 2 for x in range(5)]
small_gen = (x ** 2 for x in range(5))

print(f"\nList: {small_list}")
print(f"Generator: {list(small_gen)}")

# Generator in function calls (no extra parentheses needed)
numbers = [1, 2, 3, 4, 5]
total = sum(x ** 2 for x in numbers)  # Generator passed directly to sum()
print(f"\nSum of squares: {total}")

max_len = max(len(w) for w in ["hello", "world", "python"])
print(f"Longest word length: {max_len}")

# Check if any/all
has_negative = any(x < 0 for x in [1, -2, 3])
all_positive = all(x > 0 for x in [1, 2, 3])
print(f"Has negative: {has_negative}")
print(f"All positive: {all_positive}")
```

A list comprehension uses `[]` and builds the entire list in memory. A generator expression uses `()` and produces values lazily. For large sequences, generators save significant memory. When passing a generator to a function like `sum()`, `any()`, or `all()`, you do not need extra parentheses.

**Output:**

```
List size: 87,616 bytes
Generator size: 200 bytes

List: [0, 1, 4, 9, 16]
Generator: [0, 1, 4, 9, 16]

Sum of squares: 55
Longest word length: 6
Has negative: True
All positive: True
```

### Chaining Generators for Data Pipelines

```python
# Generator pipeline: process student data
def parse_records(raw_data):
    for line in raw_data:
        name, score = line.split(":")
        yield {"name": name.strip(), "score": int(score.strip())}

def filter_passing(records):
    for record in records:
        if record["score"] >= 50:
            yield record

def add_grade(records):
    for record in records:
        score = record["score"]
        if score >= 90:
            record["grade"] = "A"
        elif score >= 75:
            record["grade"] = "B"
        elif score >= 50:
            record["grade"] = "C"
        yield record

# Raw data
data = [
    "Aarav: 85",
    "Priya: 42",
    "Rohan: 91",
    "Meera: 38",
    "Kavya: 76",
    "Arjun: 55"
]

# Chain generators into a pipeline
pipeline = add_grade(filter_passing(parse_records(data)))

for student in pipeline:
    print(f"{student['name']}: {student['score']} ({student['grade']})") 
```

Three generators are chained together: `parse_records` converts raw strings to dictionaries, `filter_passing` removes failing students, and `add_grade` adds letter grades. Each function processes one record at a time and passes it along. No intermediate lists are created -- the data flows through the pipeline one item at a time.

**Output:**

```
Aarav: 85 (B)
Rohan: 91 (A)
Kavya: 76 (B)
Arjun: 55 (C)
```

## Common Mistakes

### Putting the if-else in the Wrong Position

**Wrong:**

```
# Trying to use if-else after the for (filter position)
numbers = [1, 2, 3, 4, 5]
result = [x for x in numbers if x > 3 else 0]  # SyntaxError!
```

SyntaxError: invalid syntax

**Correct:**

```
# if-else (transform) goes BEFORE the for
result = [x if x > 3 else 0 for x in numbers]
print(result)  # [0, 0, 0, 4, 5]

# if (filter) goes AFTER the for
filtered = [x for x in numbers if x > 3]
print(filtered)  # [4, 5]
```

There are two different positions for conditions in comprehensions. Filtering (`if` after `for`) excludes elements that do not match. Transformation (`if-else` before `for`) modifies every element. You cannot combine both syntaxes by putting if-else after for.

### Trying to Reuse an Exhausted Generator

**Wrong:**

```
gen = (x ** 2 for x in range(5))
first_pass = list(gen)   # [0, 1, 4, 9, 16]
second_pass = list(gen)  # [] -- empty!
print(f"First: {first_pass}")
print(f"Second: {second_pass}")  # Surprise: empty list!
```

No error, but second_pass is an empty list because the generator was exhausted by the first list() call.

**Correct:**

```
# Solution 1: Create a new generator each time
def make_gen():
    return (x ** 2 for x in range(5))

first_pass = list(make_gen())
second_pass = list(make_gen())
print(f"First: {first_pass}")
print(f"Second: {second_pass}")

# Solution 2: Use a list if you need multiple passes
squares = [x ** 2 for x in range(5)]  # Store in a list
print(f"Sum: {sum(squares)}, Max: {max(squares)}")
```

Generators are **single-use**. Once all values have been consumed (by `list()`, a for loop, or `next()`), the generator is exhausted and produces no more values. If you need to iterate multiple times, either create a new generator or use a list.

### Using Comprehension When a Loop is Clearer

**Wrong:**

```
# Overly complex comprehension -- hard to read
result = [x if x > 0 else (-x if x < -10 else 0) for x in data if isinstance(x, (int, float)) and not isinstance(x, bool)]
```

No error, but this comprehension is too complex to understand at a glance.

**Correct:**

```
# Use a regular loop when logic is complex
result = []
for x in data:
    if not isinstance(x, (int, float)) or isinstance(x, bool):
        continue
    if x > 0:
        result.append(x)
    elif x < -10:
        result.append(-x)
    else:
        result.append(0)
```

Comprehensions are for simple transformations and filters. If the logic requires multiple conditions, nested if-else, or is hard to read on one line, use a regular for loop. Readability matters more than brevity.

### Confusing Generator Expression with Tuple Comprehension

**Wrong:**

```
# This does NOT create a tuple!
result = (x ** 2 for x in range(5))
print(type(result))  # <class 'generator'>, NOT tuple!
print(result)        # <generator object ...>, NOT (0, 1, 4, 9, 16)
```

No error, but the result is a generator object, not a tuple.

**Correct:**

```
# To create a tuple, use tuple() with a generator expression
result = tuple(x ** 2 for x in range(5))
print(type(result))  # <class 'tuple'>
print(result)        # (0, 1, 4, 9, 16)

# There is no "tuple comprehension" syntax in Python
```

Python has no tuple comprehension. Parentheses with a for expression create a **generator expression**, not a tuple. To create a tuple from a comprehension-like expression, wrap the generator expression with `tuple()`.

### Modifying an Outside Variable Inside a Comprehension

**Wrong:**

```
total = 0
results = [total := total + x for x in range(5)]  # Works but confusing
print(results)  # [0, 1, 3, 6, 10]
# Using walrus operator for side effects in comprehensions is bad practice
```

No error, but using the walrus operator (:=) for accumulation in a comprehension is confusing and harder to debug than a simple loop.

**Correct:**

```
# Use a regular loop for accumulation
total = 0
running_totals = []
for x in range(5):
    total += x
    running_totals.append(total)
print(running_totals)  # [0, 1, 3, 6, 10]

# Or use itertools.accumulate
from itertools import accumulate
print(list(accumulate(range(5))))  # [0, 1, 3, 6, 10]
```

Comprehensions should be pure transformations without side effects. Modifying external variables inside a comprehension makes code hard to understand and debug. If you need running totals or other stateful operations, use a regular loop or `itertools.accumulate`.

## Summary

- List comprehension syntax is [expression for variable in iterable]. It creates a new list by applying the expression to each element. This is the Pythonic replacement for the loop-append pattern.
- Add a filter condition after the for: [x for x in items if condition]. Only elements where the condition is True are included. This replaces filter() for most use cases.
- For if-else transformation (modifying every element), put the conditional BEFORE the for: [a if condition else b for x in items]. This is different from filtering -- every element is included but may be transformed differently.
- Nested comprehensions read left to right: [expr for outer in iterable1 for inner in iterable2]. This is equivalent to nested for loops. Use comprehension-in-comprehension [[expr for j] for i] to create 2D structures.
- Dict comprehension uses {key: value for ...} and set comprehension uses {value for ...}. Both support filtering with if clauses. Dict comprehensions are powerful for transforming and filtering dictionaries.
- Generator expressions use parentheses instead of brackets: (expr for x in iterable). They produce values lazily (one at a time) and use constant memory regardless of size. Ideal for large data or single-pass iteration.
- Generator functions use yield instead of return. Each yield pauses the function and produces a value. The function resumes from the pause point when next() is called again. When the function ends, StopIteration is raised.
- Generators are single-use: once exhausted, they produce no more values. To iterate multiple times, create a new generator or convert to a list. A for loop handles StopIteration automatically.
- Generators can be chained into pipelines where each generator processes one element at a time from the previous generator. This creates memory-efficient data processing workflows with no intermediate lists.
- Prefer comprehensions over map/filter for readability. Prefer regular for loops over comprehensions when the logic is complex. Use generator expressions instead of list comprehensions when you only need to iterate once or when dealing with large data.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/python/list-comprehensions-and-generators/*
*Practice questions: https://learn.modernagecoders.com/resources/python/list-comprehensions-and-generators/practice/*
