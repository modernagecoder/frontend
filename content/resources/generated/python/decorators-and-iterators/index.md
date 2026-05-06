---
title: "Decorators and Iterators in Python - @ syntax, __iter__, __next__, itertools | Modern Age Coders"
description: "Learn Python decorators and iterators including the iterator protocol (__iter__ and __next__), custom iterators, for loop internals, itertools module, decorator pattern, @ syntax, functools.wraps, practical decorators (timer, logger, memoize), decorators with arguments, and class-based decorators. Includes 58+ practice questions with output prediction and coding challenges."
slug: decorators-and-iterators
canonical: https://learn.modernagecoders.com/resources/python/decorators-and-iterators
category: "Python"
keywords: ["python decorators", "iterators python", "python @ symbol", "python iterator protocol", "python itertools", "python functools wraps", "python decorator tutorial", "python custom iterator", "python decorator pattern", "python __iter__ __next__"]
---
# Decorators and Iterators

**Difficulty:** Advanced  
**Reading time:** 50 min  
**Chapter:** 25  
**Practice questions:** 58

## What Are Iterators and Decorators?

An **iterator** is an object that produces a sequence of values, one at a time, when you call `next()` on it. The **iterator protocol** is a contract: any object that implements `__iter__()` and `__next__()` methods is an iterator. Lists, strings, dictionaries, files, and generators are all iterable because they follow this protocol.

```
# Lists are iterable -- you can create an iterator from them
numbers = [10, 20, 30]
it = iter(numbers)      # Create an iterator
print(next(it))         # 10
print(next(it))         # 20
print(next(it))         # 30
```

A **decorator** is a function that takes another function as input and returns a modified version of that function. Decorators let you add behavior (like logging, timing, or caching) to existing functions without changing their code. Python provides the `@` syntax to apply decorators cleanly.

```
import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        elapsed = time.time() - start
        print(f"{func.__name__} took {elapsed:.4f}s")
        return result
    return wrapper

@timer
def slow_add(a, b):
    time.sleep(0.1)
    return a + b

result = slow_add(3, 4)  # Prints: slow_add took 0.1001s
```

## Why Are Iterators and Decorators Important?

### 1. Understanding How Python Works Under the Hood

Every `for` loop in Python uses the iterator protocol. When you write `for x in something`, Python calls `iter(something)` to get an iterator, then calls `next()` on it repeatedly until `StopIteration` is raised. Understanding this reveals how for loops, generators, list comprehensions, and unpacking all work.

### 2. Creating Custom Sequences

The iterator protocol lets you create objects that can be used in for loops, list comprehensions, and any context that expects an iterable. If Aarav builds a class representing a deck of cards, implementing the iterator protocol lets him write `for card in deck` naturally.

### 3. The itertools Module

Python's `itertools` module provides memory-efficient tools for working with iterators. Functions like `count()`, `cycle()`, `chain()`, `islice()`, `product()`, `permutations()`, and `combinations()` are used extensively in competitive programming and data processing.

### 4. Clean Code Extension with Decorators

Without decorators, adding cross-cutting concerns (logging, timing, caching, authentication) to multiple functions requires modifying each function individually. Decorators let you write the concern once and apply it to any function with a single line (`@decorator_name`). This follows the DRY principle (Don't Repeat Yourself).

### 5. Framework and Library Patterns

Decorators are everywhere in Python frameworks. Flask uses `@app.route("/")` to register URL handlers. pytest uses `@pytest.fixture` to define test fixtures. Django uses `@login_required` for authentication. Understanding decorators is essential for working with any serious Python library.

## Detailed Explanation

### 1. The Iterator Protocol: __iter__() and __next__()

Any object that implements two methods is an iterator:

- `__iter__()` -- returns the iterator object itself
- `__next__()` -- returns the next value, or raises `StopIteration` when done

```
class CountDown:
    def __init__(self, start):
        self.current = start
    
    def __iter__(self):
        return self  # The object is its own iterator
    
    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        value = self.current
        self.current -= 1
        return value

# Use in a for loop
for num in CountDown(5):
    print(num, end=" ")  # 5 4 3 2 1
print()

# Use with next()
cd = CountDown(3)
print(next(cd))  # 3
print(next(cd))  # 2
print(next(cd))  # 1
```

### 2. How for Loops Work Under the Hood

When Python encounters `for x in something`, it does exactly this:

```
# This for loop:
for x in [10, 20, 30]:
    print(x)

# Is equivalent to:
it = iter([10, 20, 30])  # Calls list.__iter__(), returns an iterator
while True:
    try:
        x = next(it)     # Calls iterator.__next__()
        print(x)
    except StopIteration:
        break            # Loop ends when StopIteration is raised
```

Understanding this reveals why generators work with for loops (they implement the iterator protocol), and why you can use custom iterators anywhere a for loop is expected.

### 3. The iter() Built-in on Common Types

Most built-in types are **iterable** (they have an `__iter__` method that returns an iterator):

```
# Lists
it = iter([1, 2, 3])
print(next(it))  # 1

# Strings
it = iter("abc")
print(next(it))  # 'a'
print(next(it))  # 'b'

# Dictionaries (iterate over keys)
it = iter({"x": 1, "y": 2})
print(next(it))  # 'x'
print(next(it))  # 'y'

# Ranges
it = iter(range(3))
print(next(it))  # 0
print(next(it))  # 1
```

Note: a **list is iterable** but not itself an iterator. `iter(my_list)` returns a `list_iterator` object that has `__next__()`. The list itself does not have `__next__()`.

### 4. itertools Module Basics

```
from itertools import count, cycle, chain, islice, product, permutations, combinations

# count(start, step) -- infinite counter
for i in islice(count(10, 3), 5):
    print(i, end=" ")  # 10 13 16 19 22
print()

# cycle(iterable) -- repeat forever
colors = cycle(["red", "green", "blue"])
print([next(colors) for _ in range(7)])
# ['red', 'green', 'blue', 'red', 'green', 'blue', 'red']

# chain(iter1, iter2, ...) -- concatenate iterables
result = list(chain([1, 2], [3, 4], [5]))
print(result)  # [1, 2, 3, 4, 5]

# islice(iterable, stop) or islice(iterable, start, stop, step)
result = list(islice(range(100), 5, 20, 3))
print(result)  # [5, 8, 11, 14, 17]

# product -- Cartesian product
result = list(product(["A", "B"], [1, 2]))
print(result)  # [('A', 1), ('A', 2), ('B', 1), ('B', 2)]

# permutations -- all orderings
result = list(permutations([1, 2, 3], 2))
print(result)  # [(1,2), (1,3), (2,1), (2,3), (3,1), (3,2)]

# combinations -- all subsets of given size (order does not matter)
result = list(combinations([1, 2, 3, 4], 2))
print(result)  # [(1,2), (1,3), (1,4), (2,3), (2,4), (3,4)]
```

### 5. What Is a Decorator?

A decorator is a function that takes a function and returns a new function that usually extends the original function's behavior:

```
def my_decorator(func):
    def wrapper():
        print("Before the function call")
        func()
        print("After the function call")
    return wrapper

def say_hello():
    print("Hello!")

# Apply the decorator manually
say_hello = my_decorator(say_hello)
say_hello()
# Before the function call
# Hello!
# After the function call
```

The line `say_hello = my_decorator(say_hello)` replaces the original function with the wrapped version. The `@` syntax is just a cleaner way to write this.

### 6. The @ Syntax (Syntactic Sugar)

```
def my_decorator(func):
    def wrapper():
        print("Before")
        func()
        print("After")
    return wrapper

@my_decorator
def greet():
    print("Hello!")

# @my_decorator above is exactly equivalent to:
# greet = my_decorator(greet)

greet()
# Before
# Hello!
# After
```

The `@decorator` syntax is placed directly above the function definition. It is syntactic sugar -- it looks cleaner but does exactly the same thing as the manual assignment.

### 7. Decorating Functions with Arguments

To decorate functions that accept arguments, use `*args` and `**kwargs` in the wrapper:

```
def logger(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with args={args}, kwargs={kwargs}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result}")
        return result
    return wrapper

@logger
def add(a, b):
    return a + b

@logger
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

add(3, 5)
# Calling add with args=(3, 5), kwargs={}
# add returned 8

greet("Aarav", greeting="Hi")
# Calling greet with args=('Aarav',), kwargs={'greeting': 'Hi'}
# greet returned Hi, Aarav!
```

### 8. functools.wraps -- Preserving Function Metadata

When you decorate a function, the wrapper replaces the original. This means `__name__`, `__doc__`, and other metadata are lost:

```
def my_decorator(func):
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

@my_decorator
def add(a, b):
    """Add two numbers."""
    return a + b

print(add.__name__)  # 'wrapper' -- NOT 'add'!
print(add.__doc__)   # None -- NOT 'Add two numbers.'!
```

Use `functools.wraps` to preserve the original function's metadata:

```
from functools import wraps

def my_decorator(func):
    @wraps(func)  # Copies func's metadata to wrapper
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

@my_decorator
def add(a, b):
    """Add two numbers."""
    return a + b

print(add.__name__)  # 'add' -- correct!
print(add.__doc__)   # 'Add two numbers.' -- correct!
```

Always use `@wraps(func)` in your decorators. It is a best practice that prevents debugging problems.

### 9. Practical Decorators

#### Timer Decorator

```
import time
from functools import wraps

def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        elapsed = time.time() - start
        print(f"{func.__name__} took {elapsed:.4f}s")
        return result
    return wrapper
```

#### Memoize/Cache Decorator

```
from functools import wraps

def memoize(func):
    cache = {}
    @wraps(func)
    def wrapper(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]
    return wrapper

@memoize
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(30))  # 832040 -- computed instantly thanks to caching
```

#### Retry Decorator

```
import time
from functools import wraps

def retry(max_attempts=3, delay=1):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(1, max_attempts + 1):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts:
                        raise
                    print(f"Attempt {attempt} failed: {e}. Retrying...")
                    time.sleep(delay)
        return wrapper
    return decorator
```

### 10. Decorators with Arguments

When a decorator needs its own arguments, you add an extra layer of nesting:

```
from functools import wraps

def repeat(times):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            results = []
            for _ in range(times):
                results.append(func(*args, **kwargs))
            return results
        return wrapper
    return decorator

@repeat(times=3)
def say_hi(name):
    return f"Hi, {name}!"

print(say_hi("Aarav"))
# ['Hi, Aarav!', 'Hi, Aarav!', 'Hi, Aarav!']

# This is equivalent to:
# say_hi = repeat(times=3)(say_hi)
```

The pattern is three levels of functions: (1) the outer function receives decorator arguments, (2) the middle function receives the function being decorated, (3) the inner function is the wrapper that runs when the decorated function is called.

### 11. Stacking Multiple Decorators

```
from functools import wraps

def bold(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        return f"**{func(*args, **kwargs)}**"
    return wrapper

def italic(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        return f"*{func(*args, **kwargs)}*"
    return wrapper

@bold
@italic
def greet(name):
    return f"Hello, {name}"

print(greet("Aarav"))
# ***Hello, Aarav***
```

Decorators are applied bottom to top. `@italic` wraps `greet` first, then `@bold` wraps the result. It is equivalent to `greet = bold(italic(greet))`.

### 12. Class-Based Decorators

A class can be a decorator if it implements `__call__()`:

```
from functools import wraps

class CountCalls:
    def __init__(self, func):
        wraps(func)(self)
        self.func = func
        self.count = 0
    
    def __call__(self, *args, **kwargs):
        self.count += 1
        print(f"{self.func.__name__} has been called {self.count} time(s)")
        return self.func(*args, **kwargs)

@CountCalls
def say_hello(name):
    return f"Hello, {name}"

print(say_hello("Aarav"))
print(say_hello("Priya"))
print(f"Total calls: {say_hello.count}")
```

Class-based decorators are useful when the decorator needs to maintain state (like a call counter).

### 13. The property Decorator Revisited

The built-in `@property` decorator turns a method into a computed attribute:

```
class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def radius(self):
        return self._radius
    
    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value
    
    @property
    def area(self):
        import math
        return math.pi * self._radius ** 2

c = Circle(5)
print(c.radius)          # 5 -- looks like an attribute, but calls a method
print(f"{c.area:.2f}")   # 78.54
c.radius = 10            # Calls the setter
print(f"{c.area:.2f}")   # 314.16
```

`@property` is a decorator that wraps a method so it can be accessed like an attribute. The `@radius.setter` decorator defines what happens when the attribute is assigned to.

## Code Examples

### Custom Iterator: Range-Like Class

```python
class MyRange:
    def __init__(self, start, stop, step=1):
        self.start = start
        self.stop = stop
        self.step = step
    
    def __iter__(self):
        self.current = self.start
        return self
    
    def __next__(self):
        if self.current >= self.stop:
            raise StopIteration
        value = self.current
        self.current += self.step
        return value

# Use in a for loop
print("For loop:", end=" ")
for num in MyRange(1, 10, 2):
    print(num, end=" ")
print()

# Convert to list
print(f"As list: {list(MyRange(0, 5))}")

# Use with next()
it = iter(MyRange(10, 13))
print(f"next: {next(it)}, {next(it)}, {next(it)}")

# Use in comprehension
squares = [x**2 for x in MyRange(1, 6)]
print(f"Squares: {squares}")
```

This custom iterator implements `__iter__()` (which resets the current position and returns self) and `__next__()` (which returns the next value or raises StopIteration). Because it follows the iterator protocol, it works with for loops, list(), comprehensions, and next() -- anywhere Python expects an iterable.

**Output:**

```
For loop: 1 3 5 7 9 
As list: [0, 1, 2, 3, 4]
next: 10, 11, 12
Squares: [1, 4, 9, 16, 25]
```

### For Loop Under the Hood

```python
# Demonstrating what a for loop actually does
print("--- Normal for loop ---")
for x in [10, 20, 30]:
    print(x, end=" ")
print()

print("\n--- Manual iterator protocol ---")
my_list = [10, 20, 30]
iterator = iter(my_list)       # Step 1: call iter()
print(f"iter() returned: {type(iterator).__name__}")

while True:
    try:
        x = next(iterator)     # Step 2: call next() repeatedly
        print(x, end=" ")
    except StopIteration:      # Step 3: stop on StopIteration
        print("\nStopIteration caught -- loop ends")
        break

# Showing iter() on different types
print(f"\niter on string: {type(iter('abc')).__name__}")
print(f"iter on dict: {type(iter({'a':1})).__name__}")
print(f"iter on range: {type(iter(range(3))).__name__}")

# A list is iterable but NOT an iterator
my_list = [1, 2, 3]
print(f"\nList has __iter__: {hasattr(my_list, '__iter__')}")
print(f"List has __next__: {hasattr(my_list, '__next__')}")
it = iter(my_list)
print(f"Iterator has __next__: {hasattr(it, '__next__')}")
```

A for loop is syntactic sugar for the iterator protocol. Python calls `iter()` on the iterable to get an iterator, then calls `next()` on the iterator repeatedly, and stops when `StopIteration` is raised. A list is **iterable** (has `__iter__`) but not an **iterator** (does not have `__next__`). The iterator returned by `iter(list)` has both.

**Output:**

```
--- Normal for loop ---
10 20 30 

--- Manual iterator protocol ---
iter() returned: list_iterator
10 20 30 
StopIteration caught -- loop ends

iter on string: str_ascii_iterator
iter on dict: dict_keyiterator
iter on range: range_iterator

List has __iter__: True
List has __next__: False
Iterator has __next__: True
```

### itertools: Practical Examples

```python
from itertools import chain, islice, product, permutations, combinations, cycle, count

# chain -- join multiple iterables
result = list(chain([1, 2], [3, 4], [5, 6]))
print(f"chain: {result}")

# islice -- slice any iterator (works on generators too)
result = list(islice(count(100), 5))  # First 5 from count(100)
print(f"islice(count(100), 5): {result}")

# product -- Cartesian product (all combinations)
result = list(product("AB", [1, 2]))
print(f"product: {result}")

# permutations -- all orderings of given length
result = list(permutations("abc", 2))
print(f"permutations: {result}")

# combinations -- all subsets of given size
result = list(combinations([1, 2, 3, 4], 2))
print(f"combinations: {result}")

# Practical: assign 3 students to 2 teams
students = ["Aarav", "Priya", "Rohan"]
teams = list(combinations(students, 2))
print(f"\nPossible pairs: {teams}")

# Practical: generate all PIN codes (2-digit)
pins = ["".join(p) for p in product("0123456789", repeat=2)]
print(f"2-digit PINs (first 5): {pins[:5]}, total: {len(pins)}")
```

`chain` concatenates iterables. `islice` slices without creating intermediate lists. `product` creates all combinations (Cartesian product). `permutations` generates all orderings of a given length. `combinations` generates all subsets of a given size without regard to order. All return iterators for memory efficiency.

**Output:**

```
chain: [1, 2, 3, 4, 5, 6]
islice(count(100), 5): [100, 101, 102, 103, 104]
product: [('A', 1), ('A', 2), ('B', 1), ('B', 2)]
permutations: [('a', 'b'), ('a', 'c'), ('b', 'a'), ('b', 'c'), ('c', 'a'), ('c', 'b')]
combinations: [(1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)]

Possible pairs: [('Aarav', 'Priya'), ('Aarav', 'Rohan'), ('Priya', 'Rohan')]
2-digit PINs (first 5): ['00', '01', '02', '03', '04'], total: 100
```

### Building a Decorator Step by Step

```python
from functools import wraps

# Step 1: A simple decorator (no arguments)
def shout(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result.upper() if isinstance(result, str) else result
    return wrapper

@shout
def greet(name):
    """Return a greeting message."""
    return f"hello, {name}"

print(greet("Aarav"))          # HELLO, AARAV
print(f"Name: {greet.__name__}") # greet (preserved by @wraps)
print(f"Doc: {greet.__doc__}")   # Return a greeting message.

# Step 2: Show that @ is syntactic sugar
def greet2(name):
    return f"hello, {name}"

greet2 = shout(greet2)  # Same as @shout
print(greet2("Priya"))  # HELLO, PRIYA

# Step 3: Decorator that modifies behavior
def log_calls(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"  -> Calling {func.__name__}({args}, {kwargs})")
        result = func(*args, **kwargs)
        print(f"  <- {func.__name__} returned {result}")
        return result
    return wrapper

@log_calls
def add(a, b):
    return a + b

result = add(3, 7)
```

A decorator is a function that takes a function and returns a new function. `@shout` above `greet` is equivalent to `greet = shout(greet)`. The `wrapper` function receives the same arguments as the original function using `*args, **kwargs`. `@wraps(func)` copies the original function's name and docstring to the wrapper.

**Output:**

```
HELLO, AARAV
Name: greet
Doc: Return a greeting message.
HELLO, PRIYA
  -> Calling add((3, 7), {})
  <- add returned 10
```

### Practical Decorators: Timer and Memoize

```python
import time
from functools import wraps

# Timer decorator
def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed = time.perf_counter() - start
        print(f"  {func.__name__}: {elapsed:.6f}s")
        return result
    return wrapper

# Memoize decorator
def memoize(func):
    cache = {}
    @wraps(func)
    def wrapper(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]
    wrapper.cache = cache  # Expose cache for inspection
    return wrapper

# Without memoize: slow recursive fibonacci
@timer
def fib_slow(n):
    if n < 2:
        return n
    return fib_slow.__wrapped__(n-1) + fib_slow.__wrapped__(n-2)  # unwrapped for timing

# Simpler: memoized fibonacci
@memoize
def fib_fast(n):
    if n < 2:
        return n
    return fib_fast(n-1) + fib_fast(n-2)

print("Memoized fibonacci:")
start = time.perf_counter()
result = fib_fast(30)
print(f"  fib_fast(30) = {result}")
print(f"  Time: {time.perf_counter() - start:.6f}s")
print(f"  Cache size: {len(fib_fast.cache)}")
```

The `timer` decorator measures execution time. The `memoize` decorator caches results in a dictionary keyed by arguments. Recursive Fibonacci without memoization makes billions of redundant calls for large n. With memoization, each value is computed only once, making fib_fast(30) nearly instant. The cache is attached to the wrapper so it can be inspected.

**Output:**

```
Memoized fibonacci:
  fib_fast(30) = 832040
  Time: 0.000045s
  Cache size: 31
```

### Decorator with Arguments and Stacking

```python
from functools import wraps

# Decorator that takes arguments
def repeat(times):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for i in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

def tag(tag_name):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            result = func(*args, **kwargs)
            return f"<{tag_name}>{result}</{tag_name}>"
        return wrapper
    return decorator

# Using decorator with arguments
@repeat(times=3)
def say_hi(name):
    print(f"  Hi, {name}!")
    return f"Hi, {name}!"

print("repeat(3):")
say_hi("Aarav")

# Stacking decorators (applied bottom to top)
@tag("b")
@tag("i")
def greet(name):
    return f"Hello, {name}"

print(f"\nStacked: {greet('Priya')}")
# Equivalent to: greet = tag('b')(tag('i')(greet))
# Inner: <i>Hello, Priya</i>
# Outer: <b><i>Hello, Priya</i></b>
```

Decorators with arguments require three levels of nesting: the outer function takes decorator arguments, the middle function takes the function being decorated, and the inner function is the actual wrapper. When stacking multiple decorators, they are applied bottom to top: `@tag("i")` wraps greet first, then `@tag("b")` wraps that result.

**Output:**

```
repeat(3):
  Hi, Aarav!
  Hi, Aarav!
  Hi, Aarav!

Stacked: <b><i>Hello, Priya</i></b>
```

### Class-Based Decorator and @property

```python
from functools import wraps

# Class-based decorator with state
class CountCalls:
    def __init__(self, func):
        wraps(func)(self)
        self.func = func
        self.count = 0
    
    def __call__(self, *args, **kwargs):
        self.count += 1
        return self.func(*args, **kwargs)
    
    def reset(self):
        self.count = 0

@CountCalls
def add(a, b):
    return a + b

print(add(1, 2))        # 3
print(add(3, 4))        # 7
print(add(5, 6))        # 11
print(f"Calls: {add.count}")  # 3
add.reset()
print(f"After reset: {add.count}")  # 0

# @property decorator revisited
class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius
    
    @property
    def celsius(self):
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Below absolute zero!")
        self._celsius = value
    
    @property
    def fahrenheit(self):
        return self._celsius * 9/5 + 32

t = Temperature(100)
print(f"\n{t.celsius}C = {t.fahrenheit}F")
t.celsius = 0
print(f"{t.celsius}C = {t.fahrenheit}F")
```

A class-based decorator stores state in instance variables. `__call__` makes the instance callable (it runs when you call the decorated function). The `@property` decorator makes a method accessible as an attribute. `@celsius.setter` allows assignment with validation. `fahrenheit` is a computed property with no setter (read-only).

**Output:**

```
3
7
11
Calls: 3
After reset: 0

100C = 212.0F
0C = 32.0F
```

## Common Mistakes

### Forgetting to Return the Result from the Wrapper

**Wrong:**

```
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Before")
        func(*args, **kwargs)  # Missing return!
        print("After")
    return wrapper

@my_decorator
def add(a, b):
    return a + b

result = add(3, 5)
print(result)  # None!  The original function returned 8, but wrapper did not return it
```

No error raised, but result is None because the wrapper function does not return the value from func().

**Correct:**

```
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Before")
        result = func(*args, **kwargs)  # Capture the result
        print("After")
        return result                   # Return it!
    return wrapper

@my_decorator
def add(a, b):
    return a + b

result = add(3, 5)
print(result)  # 8
```

The wrapper function must capture and return the original function's return value. Without `return func(*args, **kwargs)`, the wrapper implicitly returns `None`, silently discarding the function's actual result.

### Forgetting functools.wraps

**Wrong:**

```
def my_decorator(func):
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

@my_decorator
def add(a, b):
    """Add two numbers."""
    return a + b

print(add.__name__)  # 'wrapper' -- wrong!
print(add.__doc__)   # None -- wrong!
```

No runtime error, but the function's __name__ and __doc__ are replaced with the wrapper's metadata, which breaks debugging, help(), and documentation tools.

**Correct:**

```
from functools import wraps

def my_decorator(func):
    @wraps(func)  # Preserves func's metadata
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

@my_decorator
def add(a, b):
    """Add two numbers."""
    return a + b

print(add.__name__)  # 'add' -- correct!
print(add.__doc__)   # 'Add two numbers.' -- correct!
```

Without `@wraps(func)`, the decorated function loses its original name and docstring. This makes debugging difficult because stack traces and `help()` show 'wrapper' instead of the actual function name. Always use `@wraps(func)`.

### Calling the Decorator Instead of Applying It

**Wrong:**

```
@my_decorator()  # Extra parentheses!
def greet():
    return "hello"

# This calls my_decorator() first, which returns the wrapper function.
# Then Python tries to use THAT as a decorator, which fails if
# my_decorator() returns something unexpected.
```

TypeError: my_decorator() takes no arguments (or unexpected behavior if it happens to return a callable).

**Correct:**

```
# Without arguments: no parentheses
@my_decorator
def greet():
    return "hello"

# With arguments: parentheses ARE needed
@repeat(times=3)  # This is a decorator factory
def greet():
    return "hello"
```

`@my_decorator` (no parentheses) applies my_decorator to the function. `@my_decorator()` (with parentheses) calls my_decorator first and uses the return value as the decorator. Only use parentheses when the decorator is a factory that takes arguments.

### Confusing Iterable vs Iterator

**Wrong:**

```
my_list = [1, 2, 3]
print(next(my_list))  # TypeError! List is not an iterator
```

TypeError: 'list' object is not an iterator

**Correct:**

```
my_list = [1, 2, 3]
it = iter(my_list)    # Create an iterator from the list
print(next(it))       # 1
print(next(it))       # 2
print(next(it))       # 3
```

A list is **iterable** (has `__iter__`) but not an **iterator** (does not have `__next__`). You must call `iter()` on it to get an iterator object, which does have `__next__`. The for loop does this automatically, which is why `for x in my_list` works.

### Decorator Stacking Order Confusion

**Wrong:**

```
# Expecting bottom decorator to run last
@decorator_a
@decorator_b
def my_func():
    pass

# WRONG assumption: "decorator_a runs first because it is on top"
# CORRECT: decorators apply bottom-up
# Equivalent to: my_func = decorator_a(decorator_b(my_func))
# decorator_b wraps my_func first, then decorator_a wraps that
```

No error, but the execution order may surprise you. The bottom decorator wraps first, and the top decorator wraps second.

**Correct:**

```
# Think of it as: innermost first, outermost last
@decorator_a  # Applied second (outermost wrapper)
@decorator_b  # Applied first (innermost wrapper)
def my_func():
    pass

# When my_func() is called:
# 1. decorator_a's wrapper runs first (outer)
# 2. It calls decorator_b's wrapper (inner)
# 3. Which calls the original my_func()
```

Decorators apply bottom to top: `@decorator_b` wraps the function first, then `@decorator_a` wraps the result. When the function is called, execution goes top to bottom: decorator_a's wrapper runs first, then calls decorator_b's wrapper, which calls the original function.

## Summary

- The iterator protocol requires two methods: __iter__() returns the iterator object and __next__() returns the next value or raises StopIteration. Any object implementing these can be used in for loops, list(), and comprehensions.
- A for loop is syntactic sugar for: call iter() to get an iterator, call next() repeatedly, stop when StopIteration is raised. This is why generators, lists, strings, dicts, and custom iterators all work with for loops.
- A list is iterable (has __iter__) but not an iterator (no __next__). Call iter(list) to get a list_iterator. An iterator IS iterable because __iter__ returns self.
- The itertools module provides memory-efficient iterator tools: count() for infinite counting, cycle() for repeating, chain() for concatenating, islice() for slicing, product() for Cartesian products, permutations() for ordered arrangements, combinations() for unordered subsets.
- A decorator is a function that takes a function and returns a modified function. The @ syntax (@decorator above a function) is syntactic sugar for func = decorator(func).
- Decorator wrappers must use *args and **kwargs to accept any arguments, must call the original function, and must return its result. Forgetting any of these breaks the decorated function.
- Always use @functools.wraps(func) inside your decorator's wrapper function. This preserves the original function's __name__, __doc__, and other metadata, which is essential for debugging.
- Decorators with arguments require three levels of nesting: outer function takes decorator arguments, middle function takes the function, inner function is the wrapper. Example: @repeat(times=3) needs def repeat(times) -> def decorator(func) -> def wrapper(*args).
- Stacking decorators applies them bottom to top: @A @B def f means f = A(B(f)). The bottom decorator wraps first (innermost), the top wraps last (outermost). When called, the outermost wrapper runs first.
- Class-based decorators use __call__ to make instances callable. They are useful when decorators need to maintain state. The @property built-in decorator makes methods accessible as attributes with optional setters for validation.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/python/decorators-and-iterators/*
*Practice questions: https://learn.modernagecoders.com/resources/python/decorators-and-iterators/practice/*
