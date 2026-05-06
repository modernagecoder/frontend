---
title: "Practice: Decorators and Iterators"
description: "58 practice problems for Decorators and Iterators in Python"
slug: decorators-and-iterators-practice
canonical: https://learn.modernagecoders.com/resources/python/decorators-and-iterators/practice
category: "Python"
---
# Practice: Decorators and Iterators

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
it = iter([10, 20, 30])
print(next(it))
print(next(it))
```

*Hint:* iter() creates an iterator. next() gets the next value.

**Answer:** `10`
`20`

`iter([10, 20, 30])` creates a list iterator. First `next()` returns 10, second returns 20. The third value (30) has not been consumed yet.

### Q2. [Easy] What is the output?

```
it = iter("abc")
print(next(it))
print(next(it))
print(next(it))
```

*Hint:* Iterating over a string yields one character at a time.

**Answer:** `a`
`b`
`c`

Iterating over a string produces individual characters. `next()` returns 'a', then 'b', then 'c'.

### Q3. [Easy] What is the output?

```
from itertools import chain
result = list(chain([1, 2], [3, 4]))
print(result)
```

*Hint:* chain concatenates multiple iterables.

**Answer:** `[1, 2, 3, 4]`

`chain([1, 2], [3, 4])` produces elements from the first iterable, then the second: 1, 2, 3, 4.

### Q4. [Easy] What is the output?

```
def shout(func):
    def wrapper():
        return func().upper()
    return wrapper

@shout
def greet():
    return "hello"

print(greet())
```

*Hint:* The decorator wraps greet and calls .upper() on its result.

**Answer:** `HELLO`

The `@shout` decorator wraps `greet`. When `greet()` is called, the wrapper calls the original function, gets "hello", converts to uppercase, and returns "HELLO".

### Q5. [Easy] What is the output?

```
my_list = [1, 2, 3]
print(hasattr(my_list, '__iter__'))
print(hasattr(my_list, '__next__'))
```

*Hint:* Lists are iterable but not iterators.

**Answer:** `True`
`False`

A list has `__iter__` (it is iterable), but it does not have `__next__` (it is not an iterator). You must call `iter(list)` to get an iterator.

### Q6. [Medium] What is the output?

```
from itertools import combinations
result = list(combinations([1, 2, 3], 2))
print(result)
print(len(result))
```

*Hint:* combinations(n, r) gives all subsets of size r.

**Answer:** `[(1, 2), (1, 3), (2, 3)]`
`3`

`combinations([1,2,3], 2)` generates all 2-element subsets without regard to order: (1,2), (1,3), (2,3). There are 3 such combinations (C(3,2) = 3).

### Q7. [Medium] What is the output?

```
from itertools import permutations
result = list(permutations("ab", 2))
print(result)
print(len(result))
```

*Hint:* permutations considers order, so (a,b) and (b,a) are different.

**Answer:** `[('a', 'b'), ('b', 'a')]`
`2`

`permutations("ab", 2)` generates all 2-element orderings: ('a','b') and ('b','a'). Unlike combinations, order matters, so both permutations are included.

### Q8. [Medium] What is the output?

```
class Counter:
    def __init__(self, limit):
        self.limit = limit
        self.current = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current >= self.limit:
            raise StopIteration
        self.current += 1
        return self.current

print(list(Counter(4)))
```

*Hint:* The iterator yields 1, 2, 3, 4 then raises StopIteration.

**Answer:** `[1, 2, 3, 4]`

The Counter iterator starts at 0 and increments before yielding, so it produces 1, 2, 3, 4. When current reaches 4 (the limit), the next call raises StopIteration.

### Q9. [Medium] What is the output?

```
def double_result(func):
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs) * 2
    return wrapper

@double_result
def add(a, b):
    return a + b

print(add(3, 4))
print(add.__name__)
```

*Hint:* The decorator doubles the return value. No @wraps is used.

**Answer:** `14`
`wrapper`

`add(3, 4)` calls the wrapper, which calls the original add(3,4)=7, then returns 7*2=14. Without `@wraps`, `add.__name__` is 'wrapper' instead of 'add'.

### Q10. [Medium] What is the output?

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
    return name

print(greet("Aarav"))
```

*Hint:* Decorators apply bottom to top. @italic wraps first, @bold wraps second.

**Answer:** `Aarav`

`@italic` wraps greet first: returns `Aarav`. Then `@bold` wraps that result: returns `Aarav`. Bottom decorator is innermost.

### Q11. [Hard] What is the output?

```
from itertools import islice, count

def squares():
    n = 1
    while True:
        yield n * n
        n += 1

result = list(islice(squares(), 5))
print(result)

result2 = list(islice(count(10, 5), 4))
print(result2)
```

*Hint:* islice takes the first N values from any iterator. count(10, 5) counts 10, 15, 20, ...

**Answer:** `[1, 4, 9, 16, 25]`
`[10, 15, 20, 25]`

`squares()` yields 1, 4, 9, 16, 25, ... `islice(squares(), 5)` takes the first 5. `count(10, 5)` counts 10, 15, 20, 25, ... `islice(count(10, 5), 4)` takes the first 4.

### Q12. [Hard] What is the output?

```
from itertools import product

result = list(product([0, 1], repeat=3))
print(len(result))
print(result[0])
print(result[-1])
```

*Hint:* product with repeat=3 gives all 3-length combinations of [0,1], like binary numbers.

**Answer:** `8`
`(0, 0, 0)`
`(1, 1, 1)`

`product([0,1], repeat=3)` generates all 3-digit binary tuples. There are 2^3 = 8 total. The first is (0,0,0) and the last is (1,1,1).

### Q13. [Hard] What is the output?

```
def repeat(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            return [func(*args, **kwargs) for _ in range(n)]
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    return f"Hi, {name}"

print(greet("Aarav"))
```

*Hint:* repeat(3) is a decorator factory. The inner decorator wraps greet to call it 3 times.

**Answer:** `['Hi, Aarav', 'Hi, Aarav', 'Hi, Aarav']`

`@repeat(3)` creates a decorator that calls the function 3 times and collects results in a list. `greet("Aarav")` calls the wrapper, which calls the original greet 3 times, producing a list of 3 greeting strings.

### Q14. [Hard] What is the output?

```
class Doubler:
    def __init__(self, func):
        self.func = func
    
    def __call__(self, *args, **kwargs):
        return self.func(*args, **kwargs) * 2

@Doubler
def add(a, b):
    return a + b

print(add(3, 4))
print(type(add).__name__)
```

*Hint:* Doubler is a class-based decorator. add is now an instance of Doubler.

**Answer:** `14`
`Doubler`

`@Doubler` replaces add with `Doubler(add)`, an instance of the Doubler class. Calling `add(3, 4)` invokes `Doubler.__call__`, which calls the original add(3,4)=7 and returns 7*2=14. The type of add is now Doubler, not function.

### Q15. [Hard] What is the output?

```
it = iter([10, 20, 30])
print(next(it))        # 10
print(next(it))        # 20

for val in it:
    print(val, end=" ")
print()

for val in it:
    print(val, end=" ")
print("(empty)")
```

*Hint:* The for loop continues from where next() left off. After exhaustion, the second for loop gets nothing.

**Answer:** `10`
`20`
`30 `
`(empty)`

First two `next()` calls consume 10 and 20. The for loop picks up from there, printing 30. The iterator is now exhausted. The second for loop gets nothing because the iterator has no more values.

### Q16. [Medium] What is the difference between an iterable and an iterator?

*Hint:* Think about which methods each one must have.

**Answer:** An **iterable** is any object that has an `__iter__()` method, which returns an iterator. Lists, strings, tuples, dicts, sets, and ranges are all iterables. An **iterator** is an object that has both `__iter__()` and `__next__()` methods. Calling `iter()` on an iterable returns an iterator. Calling `next()` on an iterator returns the next value.

A list is iterable (you can loop over it) but not an iterator (you cannot call next() on it directly). You must call iter(list) to get an iterator. An iterator IS also iterable because its __iter__() returns itself.

### Q17. [Hard] Why should you always use `@functools.wraps(func)` in your decorators?

*Hint:* Think about what happens to the function's name and docstring.

**Answer:** Without `@wraps(func)`, the decorated function loses its original `__name__`, `__doc__`, `__module__`, and other metadata. Instead, these are replaced with the wrapper function's metadata. This breaks debugging (stack traces show 'wrapper' instead of the real function name), documentation (help() shows nothing useful), and introspection tools. `@wraps(func)` copies the original function's metadata to the wrapper.

It is a one-line addition that prevents real debugging problems. It also preserves `__wrapped__`, which stores a reference to the original unwrapped function, allowing you to bypass the decorator if needed.

## Mixed Questions

### Q1. [Easy] What is the output?

```
it = iter(range(3))
print(list(it))
print(list(it))
```

*Hint:* An iterator can only be consumed once.

**Answer:** `[0, 1, 2]`
`[]`

First `list(it)` consumes all values: [0, 1, 2]. The iterator is now exhausted. Second `list(it)` gets an empty list because there are no more values.

### Q2. [Easy] What is the output?

```
from itertools import cycle

c = cycle(["A", "B"])
result = [next(c) for _ in range(5)]
print(result)
```

*Hint:* cycle repeats the iterable endlessly.

**Answer:** `['A', 'B', 'A', 'B', 'A']`

`cycle(["A", "B"])` produces A, B, A, B, A, B, ... endlessly. Taking 5 values gives ['A', 'B', 'A', 'B', 'A'].

### Q3. [Medium] What is the output?

```
def prefix(pre):
    def decorator(func):
        def wrapper(*args, **kwargs):
            return f"{pre}: {func(*args, **kwargs)}"
        return wrapper
    return decorator

@prefix("ERROR")
def message(text):
    return text

@prefix("INFO")
def info(text):
    return text

print(message("file not found"))
print(info("server started"))
```

*Hint:* prefix is a decorator factory. It creates decorators that prepend a string.

**Answer:** `ERROR: file not found`
`INFO: server started`

`@prefix("ERROR")` creates a decorator that prepends "ERROR: " to the function's return value. `@prefix("INFO")` prepends "INFO: ". Each decorated function has its own prefix.

### Q4. [Medium] What is the output?

```
from itertools import islice

def naturals():
    n = 1
    while True:
        yield n
        n += 1

def evens(numbers):
    for n in numbers:
        if n % 2 == 0:
            yield n

result = list(islice(evens(naturals()), 5))
print(result)
```

*Hint:* naturals yields 1, 2, 3, ... evens filters to even numbers. islice takes first 5.

**Answer:** `[2, 4, 6, 8, 10]`

`naturals()` generates 1, 2, 3, 4, 5, ... `evens()` filters to even numbers: 2, 4, 6, 8, 10, ... `islice` takes the first 5: [2, 4, 6, 8, 10]. The generators process one value at a time through the chain.

### Q5. [Medium] What is the output?

```
class Squares:
    def __init__(self, n):
        self.n = n
    
    def __iter__(self):
        for i in range(1, self.n + 1):
            yield i ** 2

print(list(Squares(5)))
print(sum(Squares(3)))
```

*Hint:* __iter__ can be a generator function (using yield). Each call to iter() creates a fresh generator.

**Answer:** `[1, 4, 9, 16, 25]`
`14`

The `__iter__` method is a generator function that yields squares. `list(Squares(5))` produces [1, 4, 9, 16, 25]. `sum(Squares(3))` sums 1+4+9 = 14. Because __iter__ creates a fresh generator each time, Squares can be iterated multiple times.

### Q6. [Medium] What is the output?

```
d = {"a": 1, "b": 2, "c": 3}
it = iter(d)
print(next(it))
print(next(it))
print(list(it))
```

*Hint:* Iterating over a dict yields its keys.

**Answer:** `a`
`b`
`['c']`

Iterating over a dictionary yields its keys. `next()` returns 'a', then 'b'. `list(it)` consumes the remaining values: ['c'].

### Q7. [Hard] What is the output?

```
def validate_positive(func):
    def wrapper(*args):
        for arg in args:
            if arg < 0:
                raise ValueError(f"Negative value: {arg}")
        return func(*args)
    return wrapper

@validate_positive
def add(a, b):
    return a + b

print(add(3, 5))

try:
    print(add(-1, 5))
except ValueError as e:
    print(f"Error: {e}")
```

*Hint:* The decorator checks all arguments before calling the function.

**Answer:** `8`
`Error: Negative value: -1`

`add(3, 5)`: both positive, wrapper calls original, returns 8. `add(-1, 5)`: wrapper finds -1 is negative, raises ValueError before calling the original function.

### Q8. [Hard] What is the output?

```
from itertools import product, combinations

# How many ways to pick 2 from 4 students?
students = ["Aarav", "Priya", "Rohan", "Meera"]
pairs = list(combinations(students, 2))
print(f"Pairs: {len(pairs)}")

# How many 2-character strings from 'AB'?
codes = list(product("AB", repeat=2))
print(f"Codes: {len(codes)}")
print(f"First: {''.join(codes[0])}")
print(f"Last: {''.join(codes[-1])}")
```

*Hint:* C(4,2) = 6 combinations. 2^2 = 4 products.

**Answer:** `Pairs: 6`
`Codes: 4`
`First: AA`
`Last: BB`

Combinations of 4 students taken 2 at a time: C(4,2) = 6. Product of "AB" with repeat=2 gives all 2-char strings: AA, AB, BA, BB (4 total). First is AA, last is BB.

### Q9. [Hard] What is the output?

```
from functools import wraps

def debug(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        args_str = ", ".join(repr(a) for a in args)
        print(f"  {func.__name__}({args_str})")
        result = func(*args, **kwargs)
        print(f"  -> {result}")
        return result
    return wrapper

@debug
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(f"Result: {factorial(4)}")
```

*Hint:* The decorated factorial calls itself, so debug prints for every recursive call.

**Answer:** `  factorial(4)`
`  factorial(3)`
`  factorial(2)`
`  factorial(1)`
`  -> 1`
`  -> 2`
`  -> 6`
`  -> 24`
`Result: 24`

Each recursive call goes through the decorator, printing the function call. factorial(4) calls factorial(3) calls factorial(2) calls factorial(1). The returns unwind: 1, 2, 6, 24. The decorator logs every call and every return.

### Q10. [Hard] What is the output?

```
class FibIterator:
    def __init__(self, limit):
        self.limit = limit
        self.a, self.b = 0, 1
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.a > self.limit:
            raise StopIteration
        value = self.a
        self.a, self.b = self.b, self.a + self.b
        return value

print(list(FibIterator(20)))
print(sum(FibIterator(10)))
```

*Hint:* The iterator yields Fibonacci numbers up to the limit.

**Answer:** `[0, 1, 1, 2, 3, 5, 8, 13]`
`20`

FibIterator(20) yields Fibonacci numbers <= 20: 0, 1, 1, 2, 3, 5, 8, 13. The next Fibonacci (21) exceeds 20, so it stops. FibIterator(10) yields 0, 1, 1, 2, 3, 5, 8, and sum is 20.

### Q11. [Hard] How do decorators with arguments (like `@repeat(3)`) differ from simple decorators (like `@timer`)?

*Hint:* Think about how many levels of function nesting each requires.

**Answer:** A simple decorator is a function that takes a function and returns a wrapper: `def timer(func): def wrapper(...): ... return wrapper`. A decorator with arguments needs an extra layer: `def repeat(n): def decorator(func): def wrapper(...): ... return wrapper return decorator`. The outer function (`repeat(3)`) returns the actual decorator. So `@repeat(3)` first calls `repeat(3)` which returns a decorator function, and then that decorator is applied to the function below.

Simple decorator: `@timer` means `func = timer(func)`. Parameterized decorator: `@repeat(3)` means `func = repeat(3)(func)`. The extra call requires the extra nesting level.

## Multiple Choice Questions

### Q1. [Easy] What two methods must an iterator implement?

A. __init__ and __del__
B. __iter__ and __next__
C. __get__ and __set__
D. __call__ and __return__

**Answer:** B

**B is correct.** The iterator protocol requires `__iter__()` (returns the iterator) and `__next__()` (returns the next value or raises StopIteration).

### Q2. [Easy] What does the @ symbol do before a function definition?

A. Makes the function private
B. Applies a decorator to the function
C. Creates a generator
D. Marks the function as deprecated

**Answer:** B

**B is correct.** `@decorator` above a function is syntactic sugar for `func = decorator(func)`. It applies the decorator, which wraps or modifies the function.

### Q3. [Easy] What exception is raised when an iterator has no more values?

A. IndexError
B. ValueError
C. StopIteration
D. EndOfIterator

**Answer:** C

**C is correct.** When an iterator's `__next__()` method has no more values, it raises `StopIteration`. A for loop catches this automatically to end the loop.

### Q4. [Easy] What does iter([1, 2, 3]) return?

A. The list [1, 2, 3]
B. A list_iterator object
C. The number 1
D. A generator

**Answer:** B

**B is correct.** `iter()` called on a list returns a `list_iterator` object. This iterator has `__next__()` and produces values one at a time.

### Q5. [Easy] What does a decorator function return?

A. None
B. The original function unchanged
C. A new function (wrapper) that replaces the original
D. A string representing the function

**Answer:** C

**C is correct.** A decorator takes a function as input and returns a new function (the wrapper) that typically calls the original function with added behavior. The wrapper replaces the original function.

### Q6. [Medium] What does itertools.chain do?

A. Creates an infinite iterator
B. Concatenates multiple iterables into one
C. Repeats an iterable
D. Filters an iterable

**Answer:** B

**B is correct.** `chain(iter1, iter2, ...)` produces all elements from iter1, then all from iter2, etc. It concatenates iterables into a single sequence.

### Q7. [Medium] What is functools.wraps used for?

A. Creating a new function
B. Wrapping a list in a tuple
C. Preserving the original function's metadata in a decorator wrapper
D. Converting a generator to a list

**Answer:** C

**C is correct.** `@wraps(func)` copies the original function's `__name__`, `__doc__`, and other metadata to the wrapper function. Without it, the decorated function appears to be named 'wrapper'.

### Q8. [Medium] How are stacked decorators applied?

A. Top to bottom
B. Bottom to top
C. Alphabetically
D. Randomly

**Answer:** B

**B is correct.** `@A @B def f` means `f = A(B(f))`. The bottom decorator (B) wraps f first, then the top decorator (A) wraps the result. When called, A's wrapper runs first (outermost), then B's.

### Q9. [Medium] What is the difference between permutations and combinations?

A. They are the same
B. Permutations consider order; combinations do not
C. Combinations consider order; permutations do not
D. Permutations work with numbers only; combinations work with strings

**Answer:** B

**B is correct.** Permutations treat (A,B) and (B,A) as different. Combinations treat them as the same. For n items taken r at a time, there are more permutations than combinations.

### Q10. [Medium] Can a list be passed directly to next()?

A. Yes, next() works on any iterable
B. No, you must first call iter() to get an iterator
C. Yes, but only for non-empty lists
D. No, next() only works with generators

**Answer:** B

**B is correct.** `next()` requires an iterator (an object with `__next__()`). Lists do not have `__next__()`. You must call `iter(my_list)` first to get a list_iterator, then call `next()` on that.

### Q11. [Medium] What does itertools.product(['A','B'], [1,2]) produce?

A. [('A', 'B'), (1, 2)]
B. [('A', 1), ('A', 2), ('B', 1), ('B', 2)]
C. [('A', 1), ('B', 2)]
D. [('A', 'B', 1, 2)]

**Answer:** B

**B is correct.** `product` creates the Cartesian product: every element from the first iterable paired with every element from the second. Result: [('A',1), ('A',2), ('B',1), ('B',2)].

### Q12. [Hard] A class-based decorator must implement which method to be callable?

A. __init__
B. __call__
C. __next__
D. __decorator__

**Answer:** B

**B is correct.** A class-based decorator uses `__call__` to make instances callable. When the decorated function is called, Python invokes `instance.__call__(*args, **kwargs)`.

### Q13. [Hard] What is the extra nesting level needed for in decorators with arguments?

A. To handle multiple return values
B. To receive the decorator's arguments before the function
C. To support async functions
D. To prevent memory leaks

**Answer:** B

**B is correct.** `@repeat(3)` first calls `repeat(3)`, which returns the actual decorator function. That decorator then receives the function. Three levels: outer (args) -> middle (func) -> inner (wrapper).

### Q14. [Hard] What does the @property decorator do?

A. Makes a variable immutable
B. Turns a method into an attribute that is computed on access
C. Makes a method static
D. Prevents a method from being overridden

**Answer:** B

**B is correct.** `@property` allows a method to be accessed like an attribute (without parentheses). The method is called automatically when the attribute is accessed. A companion `@name.setter` decorator can define assignment behavior.

### Q15. [Hard] What is itertools.islice used for?

A. Slicing lists only
B. Slicing any iterator without creating intermediate lists
C. Creating infinite slices
D. Splitting an iterator into equal parts

**Answer:** B

**B is correct.** `islice(iterable, start, stop, step)` works like regular slicing but on any iterator, including generators and infinite iterators. It does not create intermediate lists, making it memory-efficient.

### Q16. [Medium] What does itertools.count(5, 2) produce?

A. [5, 7, 9, 11, ...] (infinite)
B. [5, 2]
C. [5, 7] only
D. [2, 4, 6, 8, 10]

**Answer:** A

**A is correct.** `count(5, 2)` produces an infinite sequence starting at 5, incrementing by 2: 5, 7, 9, 11, 13, ... Use `islice` to take a finite number of values.

### Q17. [Hard] If __iter__ returns a fresh iterator each time, what advantage does this provide?

A. The object can be iterated multiple times
B. The object uses less memory
C. The object is thread-safe
D. The object becomes immutable

**Answer:** A

**A is correct.** If `__iter__` returns a new iterator each time (like a list does), the object can be iterated multiple times with for loops. If `__iter__` returns self (like a generator does), the object can only be iterated once.

### Q18. [Hard] What is the output of combinations('ABCD', 2) in terms of count?

A. 4
B. 6
C. 12
D. 16

**Answer:** B

**B is correct.** C(4,2) = 4!/(2! * 2!) = 6. The six combinations are: AB, AC, AD, BC, BD, CD. Combinations do not consider order, so AB and BA count as one.

## Coding Challenges

### Challenge 1. Custom Range Iterator

**Difficulty:** Easy

Create a class EvenNumbers that implements the iterator protocol and yields even numbers from start to stop (inclusive if even). Test it with a for loop, list(), and next().

**Constraints:**

- Implement __iter__ and __next__. Raise StopIteration when done.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
For loop: 2 4 6 8 10 
As list: [0, 2, 4, 6, 8]
next: 4, 6, 8
```

**Solution:**

```python
class EvenNumbers:
    def __init__(self, start, stop):
        self.stop = stop
        self.current = start if start % 2 == 0 else start + 1
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current > self.stop:
            raise StopIteration
        value = self.current
        self.current += 2
        return value

print("For loop:", end=" ")
for n in EvenNumbers(1, 10):
    print(n, end=" ")
print()

print(f"As list: {list(EvenNumbers(0, 9))}")

it = EvenNumbers(4, 9)
print(f"next: {next(it)}, {next(it)}, {next(it)}")
```

### Challenge 2. Simple Logger Decorator

**Difficulty:** Easy

Write a decorator called logger that prints the function name, arguments, and return value every time the decorated function is called. Use functools.wraps to preserve metadata.

**Constraints:**

- Use *args and **kwargs. Use functools.wraps.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Calling add(3, 5)
add returned 8
Result: 8
add.__name__: add
```

**Solution:**

```python
from functools import wraps

def logger(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        args_str = ", ".join([repr(a) for a in args] + [f"{k}={v!r}" for k, v in kwargs.items()])
        print(f"Calling {func.__name__}({args_str})")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result}")
        return result
    return wrapper

@logger
def add(a, b):
    """Add two numbers."""
    return a + b

result = add(3, 5)
print(f"Result: {result}")
print(f"add.__name__: {add.__name__}")
print(f"add.__doc__: {add.__doc__}")
```

### Challenge 3. itertools Practice Problems

**Difficulty:** Easy

Using itertools, solve these: (1) generate all 2-letter combinations from 'ABCD', (2) create all possible 3-digit binary numbers using product, (3) take the first 8 values from an infinite counter starting at 100 with step 5, (4) chain three lists into one.

**Constraints:**

- Use combinations, product, count with islice, and chain.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
2-letter combos: 6 total
Binary 3-digit: 8 total, first: (0, 0, 0)
Counter: [100, 105, 110, 115, 120, 125, 130, 135]
Chained: [1, 2, 3, 4, 5, 6]
```

**Solution:**

```python
from itertools import combinations, product, count, islice, chain

# 1. All 2-letter combinations from ABCD
combos = list(combinations('ABCD', 2))
print(f"2-letter combos: {len(combos)} total")

# 2. All 3-digit binary numbers
binary = list(product([0, 1], repeat=3))
print(f"Binary 3-digit: {len(binary)} total, first: {binary[0]}")

# 3. First 8 from counter starting at 100, step 5
counter_vals = list(islice(count(100, 5), 8))
print(f"Counter: {counter_vals}")

# 4. Chain three lists
result = list(chain([1, 2], [3, 4], [5, 6]))
print(f"Chained: {result}")
```

### Challenge 4. Memoize Decorator

**Difficulty:** Medium

Write a memoize decorator that caches function results based on arguments. Add a .cache attribute to inspect cached values and a .clear_cache() method to reset it. Test with a recursive fibonacci function.

**Constraints:**

- Use a dictionary for the cache. Use functools.wraps. Attach cache and clear_cache to the wrapper.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
fib(10) = 55
fib(20) = 6765
Cache size: 21
After clear: 0
```

**Solution:**

```python
from functools import wraps

def memoize(func):
    cache = {}
    
    @wraps(func)
    def wrapper(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]
    
    wrapper.cache = cache
    wrapper.clear_cache = lambda: cache.clear()
    return wrapper

@memoize
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

print(f"fib(10) = {fib(10)}")
print(f"fib(20) = {fib(20)}")
print(f"Cache size: {len(fib.cache)}")
fib.clear_cache()
print(f"After clear: {len(fib.cache)}")
```

### Challenge 5. Deck of Cards Iterator

**Difficulty:** Medium

Create a Deck class that implements the iterator protocol to yield all 52 playing cards. Each card should be a tuple of (rank, suit). Support shuffling with a shuffle() method and iterating with for loops.

**Constraints:**

- Use itertools.product to generate all cards. Implement __iter__ and __len__.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Total cards: 52
First 3: [('2', 'Hearts'), ('3', 'Hearts'), ('4', 'Hearts')]
After shuffle (first 3): [('K', 'Diamonds'), ('7', 'Clubs'), ('3', 'Hearts')]
```

**Solution:**

```python
import random
from itertools import product

class Deck:
    RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    
    def __init__(self):
        self.cards = [(r, s) for r, s in product(self.RANKS, self.SUITS)]
    
    def __iter__(self):
        return iter(self.cards)
    
    def __len__(self):
        return len(self.cards)
    
    def shuffle(self):
        random.shuffle(self.cards)
        return self

deck = Deck()
print(f"Total cards: {len(deck)}")

first_3 = [card for _, card in zip(range(3), deck)]
print(f"First 3: {first_3}")

random.seed(42)
deck.shuffle()
first_3_shuffled = [card for _, card in zip(range(3), deck)]
print(f"After shuffle (first 3): {first_3_shuffled}")
```

### Challenge 6. Access Control Decorator

**Difficulty:** Medium

Write a decorator requires_role(role) that checks if the current user (passed as the first argument with a .role attribute) has the required role. If not, raise a PermissionError. Test with admin and viewer roles.

**Constraints:**

- The decorator should take a role argument. Use functools.wraps.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Admin panel: Welcome, Aarav
PermissionError: Priya requires 'admin' role, has 'viewer'
```

**Solution:**

```python
from functools import wraps

def requires_role(role):
    def decorator(func):
        @wraps(func)
        def wrapper(user, *args, **kwargs):
            if user.role != role:
                raise PermissionError(
                    f"{user.name} requires '{role}' role, has '{user.role}'"
                )
            return func(user, *args, **kwargs)
        return wrapper
    return decorator

class User:
    def __init__(self, name, role):
        self.name = name
        self.role = role

@requires_role('admin')
def admin_panel(user):
    return f"Welcome, {user.name}"

@requires_role('admin')
def delete_user(user, target):
    return f"{user.name} deleted {target}"

admin = User("Aarav", "admin")
viewer = User("Priya", "viewer")

print(f"Admin panel: {admin_panel(admin)}")

try:
    admin_panel(viewer)
except PermissionError as e:
    print(f"PermissionError: {e}")
```

### Challenge 7. Infinite Iterator Toolkit

**Difficulty:** Hard

Create custom iterators (without using itertools): (1) InfiniteCounter(start, step) that counts forever, (2) Cycle(iterable) that repeats endlessly, (3) TakeWhile(predicate, iterator) that yields while the predicate is True, (4) Chain(*iterables) that concatenates iterables. Implement all using the iterator protocol.

**Constraints:**

- Implement __iter__ and __next__ for each class. Do not use itertools.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Counter: [5, 8, 11, 14, 17]
Cycle: ['a', 'b', 'c', 'a', 'b']
TakeWhile: [1, 3, 5]
Chain: [1, 2, 3, 4, 5, 6]
```

**Solution:**

```python
class InfiniteCounter:
    def __init__(self, start=0, step=1):
        self.current = start
        self.step = step
    
    def __iter__(self):
        return self
    
    def __next__(self):
        value = self.current
        self.current += self.step
        return value

class Cycle:
    def __init__(self, iterable):
        self.items = list(iterable)
        self.index = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if not self.items:
            raise StopIteration
        value = self.items[self.index]
        self.index = (self.index + 1) % len(self.items)
        return value

class TakeWhile:
    def __init__(self, predicate, iterator):
        self.predicate = predicate
        self.iterator = iter(iterator)
        self.done = False
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.done:
            raise StopIteration
        value = next(self.iterator)
        if not self.predicate(value):
            self.done = True
            raise StopIteration
        return value

class Chain:
    def __init__(self, *iterables):
        self.iterables = iter(iterables)
        self.current = iter([])
    
    def __iter__(self):
        return self
    
    def __next__(self):
        while True:
            try:
                return next(self.current)
            except StopIteration:
                self.current = iter(next(self.iterables))

# Test
counter = InfiniteCounter(5, 3)
print(f"Counter: {[next(counter) for _ in range(5)]}")

cycler = Cycle(['a', 'b', 'c'])
print(f"Cycle: {[next(cycler) for _ in range(5)]}")

tw = TakeWhile(lambda x: x < 7, [1, 3, 5, 7, 9, 2])
print(f"TakeWhile: {list(tw)}")

ch = Chain([1, 2], [3, 4], [5, 6])
print(f"Chain: {list(ch)}")
```

### Challenge 8. Decorator Collection: Timer, Retry, and Type Check

**Difficulty:** Hard

Write three advanced decorators: (1) timer that measures and prints execution time, (2) retry(max_attempts, exceptions) that retries on specified exceptions, (3) type_check(**expected_types) that validates argument types before calling the function. All should use functools.wraps.

**Constraints:**

- All decorators must use functools.wraps. retry should re-raise on final failure. type_check should inspect function parameter names.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
slow_func took 0.1001s
Attempt 1 failed. Retrying...
Attempt 2 succeeded.
add(3, 5) = 8
TypeError: Expected b to be <class 'int'>, got <class 'str'>
```

**Solution:**

```python
import time
from functools import wraps
import inspect

def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed = time.perf_counter() - start
        print(f"{func.__name__} took {elapsed:.4f}s")
        return result
    return wrapper

def retry(max_attempts=3, exceptions=(Exception,)):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(1, max_attempts + 1):
                try:
                    result = func(*args, **kwargs)
                    print(f"Attempt {attempt} succeeded.")
                    return result
                except exceptions as e:
                    print(f"Attempt {attempt} failed. Retrying...")
                    if attempt == max_attempts:
                        raise
        return wrapper
    return decorator

def type_check(**expected_types):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            sig = inspect.signature(func)
            params = list(sig.parameters.keys())
            for i, arg in enumerate(args):
                if i < len(params) and params[i] in expected_types:
                    if not isinstance(arg, expected_types[params[i]]):
                        raise TypeError(
                            f"Expected {params[i]} to be {expected_types[params[i]]}, "
                            f"got {type(arg)}"
                        )
            return func(*args, **kwargs)
        return wrapper
    return decorator

@timer
def slow_func():
    time.sleep(0.1)
    return "done"

slow_func()

call_count = 0
@retry(max_attempts=3, exceptions=(ValueError,))
def flaky():
    global call_count
    call_count += 1
    if call_count < 2:
        raise ValueError("random failure")
    return "success"

flaky()

@type_check(a=int, b=int)
def add(a, b):
    return a + b

print(f"add(3, 5) = {add(3, 5)}")
try:
    add(3, "5")
except TypeError as e:
    print(f"TypeError: {e}")
```

---

*Notes: https://learn.modernagecoders.com/resources/python/decorators-and-iterators/*
