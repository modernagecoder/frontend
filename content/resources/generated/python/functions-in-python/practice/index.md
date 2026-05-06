---
title: "Practice: Functions in Python"
description: "65 practice problems for Functions in Python in Python"
slug: functions-in-python-practice
canonical: https://learn.modernagecoders.com/resources/python/functions-in-python/practice/
category: "Python"
---
# Practice: Functions in Python

**Total questions:** 65

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
def greet(name):
    return f"Hello, {name}!"

print(greet("Aarav"))
```

*Hint:* The function returns a formatted string with the name.

**Answer:** `Hello, Aarav!`

The function `greet` takes "Aarav" as the argument for `name`, constructs the f-string `"Hello, Aarav!"`, and returns it. `print()` displays the returned string.

### Q2. [Easy] What is the output?

```
def add(a, b):
    return a + b

result = add(10, 20)
print(result)
print(add(3, 7))
```

*Hint:* The function returns the sum of its two arguments.

**Answer:** `30`
`10`

`add(10, 20)` returns 30, stored in `result`. `add(3, 7)` returns 10. Each call is independent.

### Q3. [Easy] What is the output?

```
def say_hi():
    print("Hi!")

result = say_hi()
print(result)
```

*Hint:* What does a function return if there is no return statement?

**Answer:** `Hi!`
`None`

The function prints "Hi!" to the screen. Since there is no `return` statement, the function returns `None` implicitly. `print(result)` prints `None`.

### Q4. [Easy] What is the output?

```
def square(n):
    return n ** 2

print(square(4))
print(square(0))
print(square(-3))
```

*Hint:* ** is the exponentiation operator. (-3)**2 = 9.

**Answer:** `16`
`0`
`9`

`4**2 = 16`, `0**2 = 0`, `(-3)**2 = 9`. The function works correctly with positive, zero, and negative inputs.

### Q5. [Easy] What is the output?

```
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Priya"))
print(greet("Rohan", "Welcome"))
```

*Hint:* The second parameter has a default value. It is used when no argument is provided.

**Answer:** `Hello, Priya!`
`Welcome, Rohan!`

First call uses the default greeting "Hello". Second call overrides the default with "Welcome". Default parameters allow flexibility without requiring all arguments.

### Q6. [Medium] What is the output?

```
def min_max(numbers):
    return min(numbers), max(numbers)

result = min_max([5, 2, 8, 1, 9])
print(result)
print(type(result))

lo, hi = min_max([5, 2, 8, 1, 9])
print(lo, hi)
```

*Hint:* return a, b returns a tuple. The caller can unpack it.

**Answer:** `(1, 9)`
``
`1 9`

Returning multiple values creates a tuple: (1, 9). `type(result)` confirms it is a tuple. Tuple unpacking splits it into `lo=1` and `hi=9`.

### Q7. [Medium] What is the output?

```
def total(*args):
    return sum(args)

print(total(1, 2, 3))
print(total(10))
print(total())
```

*Hint:* *args collects all positional arguments into a tuple. sum of empty tuple is 0.

**Answer:** `6`
`10`
`0`

`total(1,2,3)`: args=(1,2,3), sum=6. `total(10)`: args=(10,), sum=10. `total()`: args=(), sum=0 (sum of empty tuple).

### Q8. [Medium] What is the output?

```
def info(**kwargs):
    for key, value in sorted(kwargs.items()):
        print(f"{key}: {value}")

info(name="Aarav", age=16, city="Delhi")
```

*Hint:* **kwargs collects keyword arguments into a dictionary. sorted() sorts by keys.

**Answer:** `age: 16`
`city: Delhi`
`name: Aarav`

The keyword arguments are collected into `kwargs = {'name': 'Aarav', 'age': 16, 'city': 'Delhi'}`. `sorted(kwargs.items())` sorts by key alphabetically: age, city, name.

### Q9. [Medium] What is the output?

```
def describe(name, age, city="Unknown"):
    print(f"{name}, {age}, {city}")

describe("Priya", 15)
describe(city="Mumbai", age=16, name="Rohan")
describe("Meera", city="Pune", age=14)
```

*Hint:* Keyword arguments can be in any order. Positional must come first.

**Answer:** `Priya, 15, Unknown`
`Rohan, 16, Mumbai`
`Meera, 14, Pune`

First call: positional args, city uses default. Second call: all keyword, order does not matter. Third call: "Meera" is positional (name), then keyword args for city and age.

### Q10. [Medium] What is the output?

```
def check(n):
    if n > 0:
        return "Positive"
    elif n < 0:
        return "Negative"

print(check(5))
print(check(-3))
print(check(0))
```

*Hint:* What happens if none of the conditions are True? What does the function return?

**Answer:** `Positive`
`Negative`
`None`

For 5: returns "Positive". For -3: returns "Negative". For 0: neither condition is True, so the function reaches the end without a return statement and returns `None`.

### Q11. [Medium] What is the output?

```
def power(base, exp=2):
    return base ** exp

print(power(3))
print(power(3, 3))
print(power(exp=4, base=2))
```

*Hint:* Default exp=2. Keyword arguments can override in any order.

**Answer:** `9`
`27`
`16`

`power(3)`: 3**2=9 (default exp). `power(3,3)`: 3**3=27. `power(exp=4, base=2)`: 2**4=16 (keyword args, order does not matter).

### Q12. [Medium] What is the output?

```
def apply(func, value):
    return func(value)

def double(x):
    return x * 2

print(apply(double, 5))
print(apply(len, "hello"))
print(apply(str, 42))
```

*Hint:* Functions can be passed as arguments to other functions.

**Answer:** `10`
`5`
`42`

`apply(double, 5)` calls `double(5)` = 10. `apply(len, "hello")` calls `len("hello")` = 5. `apply(str, 42)` calls `str(42)` = "42" (printed without quotes).

### Q13. [Hard] What is the output?

```
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))
print(factorial(0))
print(factorial(1))
```

*Hint:* Trace the calls: factorial(5) = 5 * factorial(4) = 5 * 4 * factorial(3)...

**Answer:** `120`
`1`
`1`

`factorial(5)` = 5*4*3*2*1 = 120. `factorial(0)` hits the base case (n<=1), returns 1. `factorial(1)` also hits the base case, returns 1.

### Q14. [Hard] What is the output?

```
def add_item(item, items=[]):
    items.append(item)
    return items

print(add_item("a"))
print(add_item("b"))
print(add_item("c"))
```

*Hint:* The default list is created once and shared across all calls.

**Answer:** `['a']`
`['a', 'b']`
`['a', 'b', 'c']`

This is the mutable default argument trap. The default list `[]` is created once when the function is defined. Each call appends to the same list. This is why `None` should be used as the default instead.

### Q15. [Hard] What is the output?

```
x = 10

def outer():
    x = 20
    def inner():
        x = 30
        print("inner:", x)
    inner()
    print("outer:", x)

outer()
print("global:", x)
```

*Hint:* Each function has its own local x. Assignment creates a new local variable.

**Answer:** `inner: 30`
`outer: 20`
`global: 10`

Each scope has its own `x`. `inner()` prints its local x (30). `outer()` prints its local x (20). The global x (10) is unchanged. Assignment creates a local variable, it does not modify the outer scope.

### Q16. [Hard] What is the output?

```
def make_counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

counter = make_counter()
print(counter())
print(counter())
print(counter())
```

*Hint:* nonlocal allows modifying the enclosing scope's variable. The function remembers the count.

**Answer:** `1`
`2`
`3`

`make_counter()` returns the `increment` function, which remembers `count` from the enclosing scope. Each call increments count: 0->1, 1->2, 2->3. This is a closure (covered in detail in the next chapter).

### Q17. [Hard] What is the output?

```
def func(a, b, *args, **kwargs):
    print(a, b)
    print(args)
    print(kwargs)

func(1, 2, 3, 4, 5, x=10, y=20)
```

*Hint:* a and b get the first two positional args. *args gets the rest. **kwargs gets keyword args.

**Answer:** `1 2`
`(3, 4, 5)`
`{'x': 10, 'y': 20}`

`a=1`, `b=2` (first two positional). `args=(3, 4, 5)` (remaining positional). `kwargs={'x': 10, 'y': 20}` (keyword arguments).

### Q18. [Hard] What is the output?

```
def fibonacci(n):
    if n <= 0:
        return 0
    if n == 1:
        return 1
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(6))
print(fibonacci(7))
```

*Hint:* F(6) = F(5) + F(4). Sequence: 0, 1, 1, 2, 3, 5, 8, 13...

**Answer:** `8`
`13`

Fibonacci sequence: F(0)=0, F(1)=1, F(2)=1, F(3)=2, F(4)=3, F(5)=5, F(6)=8, F(7)=13. Each value is the sum of the two preceding values.

## Mixed Questions

### Q1. [Easy] What is the output?

```
def multiply(a, b):
    return a * b

print(multiply(3, 4))
print(multiply("hi", 3))
```

*Hint:* The * operator works differently for numbers and strings.

**Answer:** `12`
`hihihi`

`3 * 4 = 12` (numeric multiplication). `"hi" * 3 = "hihihi"` (string repetition). The function works with both because Python's `*` operator is polymorphic.

### Q2. [Easy] What is the output?

```
def is_even(n):
    return n % 2 == 0

print(is_even(4))
print(is_even(7))
print(type(is_even(4)))
```

*Hint:* The == operator returns a boolean (True or False).

**Answer:** `True`
`False`
``

`4 % 2 == 0` is True. `7 % 2 == 0` is False. The return type is `bool`.

### Q3. [Easy] What is the output?

```
def greet():
    return "Hello!"

a = greet
b = greet()
print(a)
print(b)
```

*Hint:* greet without () is the function object. greet() calls the function.

**Answer:** ``
`Hello!`

`a = greet` assigns the function object to a (no call). `b = greet()` calls the function and assigns the return value. `print(a)` shows the function object's representation.

### Q4. [Medium] What is the output?

```
def process(numbers):
    numbers.append(4)
    return numbers

original = [1, 2, 3]
result = process(original)
print(original)
print(result)
print(original is result)
```

*Hint:* Lists are passed by reference. Modifying inside the function modifies the original.

**Answer:** `[1, 2, 3, 4]`
`[1, 2, 3, 4]`
`True`

Lists are mutable objects passed by reference. `numbers` inside the function is the same object as `original`. Appending 4 modifies the original list. Both variables point to the same list.

### Q5. [Medium] What is the output?

```
def outer():
    result = []
    for i in range(3):
        def inner():
            return i
        result.append(inner)
    return result

funcs = outer()
for f in funcs:
    print(f())
```

*Hint:* The inner function captures the variable i, not its value at the time of creation.

**Answer:** `2`
`2`
`2`

All three inner functions capture the same variable `i`. By the time they are called, the loop has finished and `i = 2`. All three functions return 2, not 0, 1, 2. This is a classic closure pitfall.

### Q6. [Medium] What is the output?

```
def mystery(n):
    if n <= 0:
        return ""
    return mystery(n - 1) + str(n)

print(mystery(5))
```

*Hint:* Trace the recursion: mystery(5) = mystery(4) + "5" = mystery(3) + "4" + "5"...

**Answer:** `12345`

Unwinding: mystery(5) = mystery(4)+"5" = mystery(3)+"4"+"5" = ... = ""+"1"+"2"+"3"+"4"+"5" = "12345". The base case returns an empty string, and each recursive call appends the current number.

### Q7. [Medium] What is the output?

```
def swap(a, b):
    a, b = b, a
    return a, b

x, y = 10, 20
result = swap(x, y)
print(result)
print(x, y)
```

*Hint:* Integers are immutable. The function receives copies of the values.

**Answer:** `(20, 10)`
`10 20`

The function swaps a and b locally and returns them as (20, 10). But x and y are integers (immutable), so the original variables are unchanged: x=10, y=20.

### Q8. [Hard] What is the output?

```
def accumulate(*args):
    total = 0
    results = []
    for n in args:
        total += n
        results.append(total)
    return results

print(accumulate(1, 2, 3, 4, 5))
```

*Hint:* The function builds a running total (cumulative sum).

**Answer:** `[1, 3, 6, 10, 15]`

Running total: 0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15. The function returns the cumulative sum at each step.

### Q9. [Medium] What is the difference between `return` and `print()` inside a function?

*Hint:* Think about what the caller can do with the result.

**Answer:** `return` sends a value back to the caller, who can store it, pass it to another function, or use it in an expression. `print()` displays text on the screen but the function still returns `None`. The caller cannot use a printed value for further computation.

Use `return` when the caller needs the result for further processing. Use `print()` for displaying information to the user. They serve different purposes: return is for program flow, print is for human output.

### Q10. [Medium] What is the difference between *args and **kwargs?

*Hint:* One collects positional arguments, the other collects keyword arguments.

**Answer:** `*args` collects extra **positional** arguments into a **tuple**. `**kwargs` collects extra **keyword** arguments into a **dictionary**. They allow functions to accept a variable number of arguments.

Example: `f(1, 2, x=3)` with `def f(*args, **kwargs)` gives args=(1, 2) and kwargs={'x': 3}. The names 'args' and 'kwargs' are conventions; the * and ** are what matter.

### Q11. [Hard] What is the output?

```
def compose(f, g):
    def combined(x):
        return f(g(x))
    return combined

def double(x):
    return x * 2

def increment(x):
    return x + 1

fn = compose(double, increment)
print(fn(5))
print(fn(10))
```

*Hint:* compose returns a function that applies g first, then f.

**Answer:** `12`
`22`

`fn(5)` calls `double(increment(5))` = `double(6)` = 12. `fn(10)` calls `double(increment(10))` = `double(11)` = 22. This is function composition.

### Q12. [Hard] What is the output?

```
def power_factory(exp):
    def power(base):
        return base ** exp
    return power

square = power_factory(2)
cube = power_factory(3)

print(square(5))
print(cube(3))
print(power_factory(4)(2))
```

*Hint:* power_factory returns a function that remembers the exponent.

**Answer:** `25`
`27`
`16`

`square = power_factory(2)` creates a function where exp=2. `square(5)` = 5**2 = 25. `cube = power_factory(3)` creates exp=3. `cube(3)` = 3**3 = 27. `power_factory(4)(2)` = 2**4 = 16.

## Multiple Choice Questions

### Q1. [Easy] What keyword is used to define a function in Python?

A. function
B. func
C. def
D. define

**Answer:** C

**C is correct.** Python uses `def` to define functions. Options A and D are not Python keywords. Option B is not a keyword either.

### Q2. [Easy] What does a function return if it has no return statement?

A. 0
B. False
C. None
D. An empty string

**Answer:** C

**C is correct.** A function without a `return` statement (or with `return` alone) returns `None` by default.

### Q3. [Easy] What is the difference between parameters and arguments?

A. They are the same thing
B. Parameters are in the definition, arguments are in the call
C. Arguments are in the definition, parameters are in the call
D. Parameters are for numbers, arguments are for strings

**Answer:** B

**B is correct.** Parameters are the variable names in the function definition (`def f(x, y)`). Arguments are the actual values passed when calling (`f(3, 5)`).

### Q4. [Easy] What happens if you call a function with fewer arguments than it has non-default parameters?

A. The missing parameters are set to None
B. The missing parameters are set to 0
C. A TypeError is raised
D. The function ignores the missing parameters

**Answer:** C

**C is correct.** Python raises `TypeError: missing required positional argument`. Every non-default parameter must receive an argument.

### Q5. [Easy] Which of these is a valid function definition?

A. def my_func{}:
B. function my_func():
C. def my_func():
D. def my func():

**Answer:** C

**C is correct.** The syntax is `def name():`. Option A uses braces instead of parentheses. Option B uses 'function' instead of 'def'. Option D has a space in the name.

### Q6. [Medium] What does *args collect into?

A. A list
B. A tuple
C. A dictionary
D. A set

**Answer:** B

**B is correct.** `*args` collects extra positional arguments into a **tuple**, not a list. This is because tuples are immutable, which matches the read-only nature of received arguments.

### Q7. [Medium] What does **kwargs collect into?

A. A tuple
B. A list
C. A dictionary
D. A set

**Answer:** C

**C is correct.** `**kwargs` collects extra keyword arguments into a **dictionary**, with argument names as keys and their values as values.

### Q8. [Medium] What is the correct order of parameter types in a function definition?

A. *args, positional, **kwargs, default
B. positional, default, *args, **kwargs
C. **kwargs, *args, positional, default
D. default, positional, *args, **kwargs

**Answer:** B

**B is correct.** The order is: regular positional parameters, default parameters, *args, then **kwargs. Violating this order causes a SyntaxError.

### Q9. [Medium] What does return a, b actually return?

A. Two separate values
B. A list [a, b]
C. A tuple (a, b)
D. A dictionary {'a': a, 'b': b}

**Answer:** C

**C is correct.** `return a, b` is syntactic sugar for `return (a, b)`. It returns a single tuple containing both values. The caller can unpack it: `x, y = func()`.

### Q10. [Medium] What is a docstring?

A. A comment that starts with #
B. A triple-quoted string as the first statement of a function
C. Any string inside a function
D. A variable that stores documentation

**Answer:** B

**B is correct.** A docstring is a triple-quoted string placed as the **first statement** of a function (or class/module). It documents the function's purpose and is accessible via `func.__doc__`.

### Q11. [Medium] Why is using a mutable default parameter (like a list) dangerous?

A. It causes a SyntaxError
B. It creates a new list every time
C. The default object is shared across all calls
D. It makes the function run slower

**Answer:** C

**C is correct.** The default list is created once when the function is defined. All calls that do not provide the argument share the same list. Changes from one call persist into subsequent calls.

### Q12. [Hard] What is a first-class function?

A. A function defined at the top of a file
B. A function that runs before all others
C. A function that can be assigned to variables, passed as arguments, and returned from functions
D. A function with no parameters

**Answer:** C

**C is correct.** In Python, functions are first-class objects. They can be assigned to variables (`f = func`), passed as arguments (`map(func, list)`), stored in data structures, and returned from other functions.

### Q13. [Hard] What is the base case in recursion?

A. The first recursive call
B. The condition that stops the recursion
C. The largest input the function can handle
D. The initial call to the function

**Answer:** B

**B is correct.** The base case is the condition under which the function does NOT call itself, thereby stopping the recursion. Without a base case, the function recurses infinitely until hitting Python's recursion limit.

### Q14. [Hard] What is the default recursion limit in Python?

A. 100
B. 500
C. 1000
D. 10000

**Answer:** C

**C is correct.** Python's default recursion limit is 1000. Exceeding it raises `RecursionError`. You can check with `sys.getrecursionlimit()` and change it with `sys.setrecursionlimit()`, though deep recursion is generally discouraged.

### Q15. [Hard] What happens when a function assigns to a variable that shares a name with a global variable?

A. The global variable is modified
B. A new local variable is created, shadowing the global
C. A NameError is raised
D. Both variables are updated

**Answer:** B

**B is correct.** Assignment inside a function creates a local variable. The global variable is unaffected. This is called **shadowing**. To modify the global, use the `global` keyword.

### Q16. [Easy] Which of these calls is valid for def f(a, b, c=10)?

A. f(1)
B. f(1, 2)
C. f(c=10)
D. f()

**Answer:** B

**B is correct.** `a` and `b` are required (no defaults). `c` has a default of 10. `f(1, 2)` provides both required arguments; c uses its default. The other options do not provide enough required arguments.

### Q17. [Hard] What is the output of the following code?

```
def f(x=[]):
    x.append(1)
    return len(x)
print(f(), f(), f())
```

A. 1 1 1
B. 1 2 3
C. 3 3 3
D. Error

**Answer:** B

**B is correct.** The default list is shared across calls. First call: [1], len=1. Second call: [1,1], len=2. Third call: [1,1,1], len=3. This is the mutable default argument pitfall.

### Q18. [Medium] Can a function be defined inside another function in Python?

A. No, this causes a SyntaxError
B. Yes, but the inner function cannot be called
C. Yes, and the inner function can access the outer function's variables
D. Yes, but only if the inner function has no parameters

**Answer:** C

**C is correct.** Python supports nested functions. The inner function has access to the outer function's variables (this is the enclosing scope in the LEGB rule). This is the foundation of closures.

### Q19. [Hard] What does the following return?

```
def f():
    return
result = f()
```

A. 0
B. ""
C. None
D. Nothing (result is undefined)

**Answer:** C

**C is correct.** A bare `return` (without a value) returns `None`. This is the same as having no return statement at all. `result` is defined and holds the value `None`.

### Q20. [Easy] How do you access a function's docstring?

A. func.doc
B. func.__doc__
C. func.docstring
D. func.help()

**Answer:** B

**B is correct.** The docstring is stored in the `__doc__` attribute. `help(func)` also displays it, but the attribute is accessed with `func.__doc__`.

## Coding Challenges

### Challenge 1. Temperature Converter

**Difficulty:** Easy

Write two functions: celsius_to_fahrenheit(c) that converts Celsius to Fahrenheit (F = C * 9/5 + 32), and fahrenheit_to_celsius(f) that converts Fahrenheit to Celsius (C = (F - 32) * 5/9). Test with 0, 100, and 212.

**Constraints:**

- Each function should return a float, not print.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
0C = 32.0F
100C = 212.0F
212F = 100.0C
```

**Solution:**

```python
def celsius_to_fahrenheit(c):
    return c * 9/5 + 32

def fahrenheit_to_celsius(f):
    return (f - 32) * 5/9

print(f"0C = {celsius_to_fahrenheit(0)}F")
print(f"100C = {celsius_to_fahrenheit(100)}F")
print(f"212F = {fahrenheit_to_celsius(212)}C")
```

### Challenge 2. List Statistics Function

**Difficulty:** Easy

Write a function stats(numbers) that takes a list of numbers and returns a dictionary with keys 'min', 'max', 'sum', 'average', and 'count'. Test with [10, 20, 30, 40, 50].

**Constraints:**

- Return a dictionary. Do not use external libraries.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
{'min': 10, 'max': 50, 'sum': 150, 'average': 30.0, 'count': 5}
```

**Solution:**

```python
def stats(numbers):
    return {
        'min': min(numbers),
        'max': max(numbers),
        'sum': sum(numbers),
        'average': sum(numbers) / len(numbers),
        'count': len(numbers)
    }

result = stats([10, 20, 30, 40, 50])
print(result)
```

### Challenge 3. Flexible Greeting Function

**Difficulty:** Easy

Write a function greet(name, greeting='Hello', punctuation='!') that returns a formatted greeting. Test with different combinations of arguments.

**Constraints:**

- Use default parameters.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Hello, Aarav!
Welcome, Priya!
Hi, Rohan.
```

**Solution:**

```python
def greet(name, greeting='Hello', punctuation='!'):
    return f"{greeting}, {name}{punctuation}"

print(greet('Aarav'))
print(greet('Priya', 'Welcome'))
print(greet('Rohan', 'Hi', '.'))
```

### Challenge 4. Build a Calculator with *args

**Difficulty:** Medium

Write a function calculate(operation, *args) where operation is a string ('add', 'multiply', 'max', 'min') and *args are the numbers to operate on. Return the result.

**Constraints:**

- Use *args. Handle at least 4 operations.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
add: 15
multiply: 120
max: 5
min: 1
```

**Solution:**

```python
def calculate(operation, *args):
    if operation == 'add':
        return sum(args)
    elif operation == 'multiply':
        result = 1
        for n in args:
            result *= n
        return result
    elif operation == 'max':
        return max(args)
    elif operation == 'min':
        return min(args)

print(f"add: {calculate('add', 1, 2, 3, 4, 5)}")
print(f"multiply: {calculate('multiply', 1, 2, 3, 4, 5)}")
print(f"max: {calculate('max', 1, 2, 3, 4, 5)}")
print(f"min: {calculate('min', 1, 2, 3, 4, 5)}")
```

### Challenge 5. Palindrome Checker (Recursive)

**Difficulty:** Medium

Write a recursive function is_palindrome(s) that checks if a string is a palindrome. Ignore case and spaces. Test with 'racecar', 'A man a plan a canal Panama', and 'hello'.

**Constraints:**

- Must use recursion. Clean the string first (lowercase, remove spaces).

**Sample input:**

```
(No input required)
```

**Sample output:**

```
racecar: True
A man a plan a canal Panama: True
hello: False
```

**Solution:**

```python
def is_palindrome(s):
    s = s.lower().replace(' ', '')
    if len(s) <= 1:
        return True
    if s[0] != s[-1]:
        return False
    return is_palindrome(s[1:-1])

print(f"racecar: {is_palindrome('racecar')}")
print(f"A man a plan a canal Panama: {is_palindrome('A man a plan a canal Panama')}")
print(f"hello: {is_palindrome('hello')}")
```

### Challenge 6. Student Report Generator with **kwargs

**Difficulty:** Medium

Write a function generate_report(name, **subjects) that takes a student name and subject marks as keyword arguments. Print the student name, each subject with marks, the total, and the average.

**Constraints:**

- Use **kwargs to accept any number of subjects.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Report for Aarav:
  Maths: 90
  Science: 85
  English: 88
Total: 263
Average: 87.67
```

**Solution:**

```python
def generate_report(name, **subjects):
    print(f"Report for {name}:")
    for subject, marks in subjects.items():
        print(f"  {subject}: {marks}")
    total = sum(subjects.values())
    average = total / len(subjects)
    print(f"Total: {total}")
    print(f"Average: {average:.2f}")

generate_report('Aarav', Maths=90, Science=85, English=88)
```

### Challenge 7. Recursive Power Function

**Difficulty:** Medium

Write a recursive function power(base, exp) that calculates base raised to exp without using the ** operator. Handle exp = 0 (return 1). Test with power(2, 10) and power(3, 4).

**Constraints:**

- Must use recursion. Do not use ** or pow().

**Sample input:**

```
(No input required)
```

**Sample output:**

```
2^10 = 1024
3^4 = 81
5^0 = 1
```

**Solution:**

```python
def power(base, exp):
    if exp == 0:
        return 1
    return base * power(base, exp - 1)

print(f"2^10 = {power(2, 10)}")
print(f"3^4 = {power(3, 4)}")
print(f"5^0 = {power(5, 0)}")
```

### Challenge 8. Higher-Order Apply Function

**Difficulty:** Hard

Write a function apply_to_list(func, numbers) that applies a given function to each element and returns a new list. Test with square, absolute value, and string conversion functions.

**Constraints:**

- The function parameter should accept any callable. Do not use map().

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Squared: [1, 4, 9, 16, 25]
Absolute: [3, 1, 4, 1, 5]
As strings: ['-3', '1', '-4', '1', '5']
```

**Solution:**

```python
def apply_to_list(func, numbers):
    return [func(n) for n in numbers]

def square(x):
    return x ** 2

nums = [-3, 1, -4, 1, 5]
print(f"Squared: {apply_to_list(square, nums)}")
print(f"Absolute: {apply_to_list(abs, nums)}")
print(f"As strings: {apply_to_list(str, nums)}")
```

### Challenge 9. Flatten Nested List (Recursive)

**Difficulty:** Hard

Write a recursive function flatten(lst) that takes a nested list like [1, [2, 3], [4, [5, 6]], 7] and returns a flat list [1, 2, 3, 4, 5, 6, 7].

**Constraints:**

- Must use recursion. Use isinstance(item, list) to check for nested lists.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
[1, 2, 3, 4, 5, 6, 7]
```

**Solution:**

```python
def flatten(lst):
    result = []
    for item in lst:
        if isinstance(item, list):
            result.extend(flatten(item))
        else:
            result.append(item)
    return result

nested = [1, [2, 3], [4, [5, 6]], 7]
print(flatten(nested))
```

### Challenge 10. Function Composition Pipeline

**Difficulty:** Hard

Write a function pipeline(*functions) that takes multiple functions and returns a new function that applies them in sequence (left to right). Test: pipeline(double, increment, square)(3) should compute square(increment(double(3))) = square(increment(6)) = square(7) = 49.

**Constraints:**

- Use *args to accept functions. Return a new function.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
pipeline result: 49
pipeline result: 81
```

**Solution:**

```python
def pipeline(*functions):
    def apply(value):
        result = value
        for func in functions:
            result = func(result)
        return result
    return apply

def double(x):
    return x * 2

def increment(x):
    return x + 1

def square(x):
    return x ** 2

transform = pipeline(double, increment, square)
print(f"pipeline result: {transform(3)}")
print(f"pipeline result: {transform(4)}")
```

---

*Notes: https://learn.modernagecoders.com/resources/python/functions-in-python/*
