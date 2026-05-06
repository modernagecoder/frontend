---
title: "Python Variable Scope, LEGB Rule, and Closures | Modern Age Coders"
description: "Learn Python variable scope including local, enclosing, global, and built-in scopes (LEGB rule), global and nonlocal keywords, closures, and common scope pitfalls. Includes 55+ practice questions with output prediction and coding challenges."
slug: scope-and-closures
canonical: https://learn.modernagecoders.com/resources/python/scope-and-closures
category: "Python"
keywords: ["python variable scope", "LEGB rule python", "python closures", "global local variable python", "python nonlocal keyword", "python global keyword", "python scope tutorial", "python enclosing scope", "python UnboundLocalError", "python closure examples"]
---
# Scope, LEGB Rule, and Closures

**Difficulty:** Intermediate  
**Reading time:** 30 min  
**Chapter:** 17  
**Practice questions:** 55

## What Is Scope in Python?

**Scope** determines where a variable can be accessed. When you create a variable, it does not exist everywhere in your program. It lives in a specific region, and only code within that region (or inner regions) can see it.

Python has four levels of scope, remembered by the acronym **LEGB**:

```
L - Local:     Variables defined inside the current function
E - Enclosing: Variables in the enclosing (outer) function (for nested functions)
G - Global:    Variables defined at the module (file) level
B - Built-in:  Python's pre-defined names (print, len, range, etc.)
```

When Python encounters a variable name, it searches these scopes in order: Local first, then Enclosing, then Global, then Built-in. The first match wins.

### Simple Example

```
x = "global"          # Global scope

def outer():
    x = "enclosing"   # Enclosing scope
    
    def inner():
        x = "local"   # Local scope
        print(x)       # Finds "local" first
    
    inner()
    print(x)           # Finds "enclosing"

outer()
print(x)               # Finds "global"
```

## Why Is Understanding Scope Important?

Scope-related bugs are among the most confusing for intermediate programmers. Understanding scope prevents hours of debugging mysterious behavior.

### 1. Avoiding UnboundLocalError

The most common scope bug: you try to read a global variable inside a function, but because you also assign to it somewhere in the function, Python treats it as local for the entire function, even before the assignment. This is the dreaded `UnboundLocalError`.

### 2. Writing Correct Closures

Closures (inner functions that remember enclosing variables) power decorators, callbacks, and factory functions. Without understanding enclosing scope and the `nonlocal` keyword, you cannot write or debug closures.

### 3. Managing State Safely

Global variables seem convenient but create hidden dependencies between functions. Understanding scope helps you minimize global state and pass data through parameters and return values instead, making code more predictable and testable.

### 4. Interview Preparation

Scope and closure questions are extremely common in Python interviews. Output prediction questions involving nested functions, `global`, and `nonlocal` appear regularly. Understanding LEGB gives you a systematic way to trace any scope question.

### 5. Understanding Python Internals

Why can you use `print()` without importing anything? Because it lives in the Built-in scope. Why does `x = 5` inside a function not change the global `x`? Because assignment creates a local variable. These are not arbitrary rules; they follow the LEGB model.

## Detailed Explanation

### 1. Local Scope

Variables defined inside a function (including parameters) are local to that function. They are created when the function is called and destroyed when it returns:

```
def greet(name):       # 'name' is local
    message = "Hello"  # 'message' is local
    print(f"{message}, {name}")

greet("Aarav")
# print(message)  # NameError: 'message' is not defined
# print(name)     # NameError: 'name' is not defined
```

Each function call creates a fresh set of local variables. Two calls to the same function have independent local scopes.

### 2. Enclosing Scope

When a function is nested inside another function, the inner function can access the outer function's variables. This is the enclosing (or nonlocal) scope:

```
def outer():
    message = "Hello from outer"
    
    def inner():
        print(message)  # Accesses enclosing scope
    
    inner()

outer()  # Prints: Hello from outer
```

The inner function **reads** the enclosing variable. But if you try to **assign** to it, Python creates a new local variable in inner instead of modifying the enclosing one.

### 3. Global Scope

Variables defined at the top level of a module (outside all functions) are global. They are accessible from any function in the module:

```
count = 0  # Global

def show_count():
    print(count)  # Can READ the global variable

show_count()  # Prints: 0
```

You can **read** global variables from inside a function. But you cannot **modify** them without using the `global` keyword.

### 4. Built-in Scope

Python has a built-in scope containing functions and constants like `print`, `len`, `range`, `True`, `False`, `None`, and exception types. They are available everywhere without import:

```
print(len([1, 2, 3]))  # Both 'print' and 'len' are built-in
print(type(42))         # 'type' is also built-in
```

You can even (but should not) shadow built-in names with your own variables:

```
len = 10  # Shadows the built-in len!
# len([1, 2, 3])  # TypeError: 'int' object is not callable
```

### 5. The LEGB Rule in Action

When Python encounters a name, it searches Local, then Enclosing, then Global, then Built-in:

```
x = "global"

def outer():
    x = "enclosing"
    def inner():
        # No local x defined here
        print(x)  # Finds "enclosing" (E in LEGB)
    inner()

outer()  # Prints: enclosing
```

If the enclosing function did not define `x`, Python would look at the global scope. If the global scope did not have it, Python would check the built-in scope. If none has it, you get a `NameError`.

### 6. The global Keyword

To **modify** a global variable from inside a function, use the `global` keyword:

```
count = 0

def increment():
    global count     # Declare intent to modify global
    count += 1

increment()
increment()
print(count)  # 2
```

Without `global count`, the line `count += 1` would cause an `UnboundLocalError` because Python sees the assignment and treats `count` as local, but you are reading it before assigning.

### 7. The nonlocal Keyword

To modify an enclosing (but not global) variable from a nested function, use `nonlocal`:

```
def counter():
    count = 0
    
    def increment():
        nonlocal count   # Modify enclosing variable
        count += 1
        return count
    
    return increment

c = counter()
print(c())  # 1
print(c())  # 2
print(c())  # 3
```

`nonlocal` tells Python: "do not create a new local variable; use the one from the nearest enclosing scope."

### 8. Closures

A **closure** is a function that remembers variables from its enclosing scope, even after the enclosing function has returned:

```
def multiplier(factor):
    def multiply(x):
        return x * factor  # Remembers 'factor'
    return multiply

double = multiplier(2)
triple = multiplier(3)

print(double(5))   # 10
print(triple(5))   # 15
```

When `multiplier(2)` is called, it creates a local variable `factor = 2` and returns `multiply`. Even though `multiplier` has finished executing, `multiply` still has access to `factor = 2`. This is a closure.

#### Practical Closure: Counter

```
def make_counter(start=0):
    count = start
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

my_counter = make_counter()
print(my_counter())  # 1
print(my_counter())  # 2
```

#### Practical Closure: Logger

```
def make_logger(prefix):
    def log(message):
        print(f"[{prefix}] {message}")
    return log

error_log = make_logger("ERROR")
info_log = make_logger("INFO")

error_log("File not found")   # [ERROR] File not found
info_log("Server started")    # [INFO] Server started
```

### 9. The UnboundLocalError Pitfall

This is the most common scope-related bug:

```
x = 10

def broken():
    print(x)   # UnboundLocalError!
    x = 20     # This assignment makes x local for the ENTIRE function

# broken()  # UnboundLocalError: local variable 'x' referenced before assignment
```

Python determines scope at **compile time**, not runtime. Because `x = 20` appears anywhere in the function, Python marks `x` as local for the entire function. When `print(x)` runs before `x = 20`, the local `x` has not been assigned yet.

Fix: either use `global x`, or do not assign to `x` in the function, or use a different variable name.

### 10. Common Scope-Related Bugs

#### Shadowing built-in names

```
list = [1, 2, 3]  # Shadows the built-in list()
# list("hello")   # TypeError: 'list' object is not callable
del list           # Restore the built-in
```

#### Loop variable leaking (not a bug, a feature)

```
for i in range(5):
    pass
print(i)  # 4 - loop variable is still accessible!
```

Unlike many languages, Python's `for` loop does not create a new scope. The loop variable persists after the loop ends.

## Code Examples

### LEGB Rule Demonstration

```python
x = "global"

def outer():
    x = "enclosing"
    
    def inner():
        x = "local"
        print("inner:", x)
    
    inner()
    print("outer:", x)

outer()
print("module:", x)
```

Each scope has its own `x`. `inner()` finds its local x first. `outer()` finds its own x. The module-level code finds the global x. Assignment creates a variable in the current scope without affecting outer scopes.

**Output:**

```
inner: local
outer: enclosing
module: global
```

### LEGB Search Order (No Local, Falls Through)

```python
x = "global"

def outer():
    x = "enclosing"
    
    def inner():
        # No local x here
        print("inner sees:", x)  # Falls to enclosing
    
    inner()

outer()

# Now without enclosing either
y = "global_y"

def func():
    # No local y, no enclosing scope
    print("func sees:", y)  # Falls to global

func()

# Built-in fallthrough
def demo():
    print("len is:", len)  # Falls to built-in

demo()
```

When a name is not found locally, Python searches the enclosing scope, then global, then built-in. `inner()` has no local x, so it finds the enclosing one. `func()` has no local y and no enclosing scope, so it finds the global one. `demo()` finds `len` in the built-in scope.

**Output:**

```
inner sees: enclosing
func sees: global_y
len is: <built-in function len>
```

### The global Keyword

```python
score = 0

def add_points(points):
    global score
    score += points
    print(f"Score after adding {points}: {score}")

add_points(10)
add_points(25)
add_points(15)
print(f"Final score: {score}")
```

Without `global score`, the line `score += points` would cause UnboundLocalError. The `global` keyword tells Python that `score` refers to the module-level variable, allowing both reading and writing.

**Output:**

```
Score after adding 10: 10
Score after adding 25: 35
Score after adding 15: 50
Final score: 50
```

### The nonlocal Keyword

```python
def make_counter(start=0):
    count = start
    
    def increment():
        nonlocal count
        count += 1
        return count
    
    def decrement():
        nonlocal count
        count -= 1
        return count
    
    def get():
        return count
    
    return increment, decrement, get

inc, dec, get = make_counter(10)
print(inc())   # 11
print(inc())   # 12
print(dec())   # 11
print(get())   # 11
```

`nonlocal count` allows the nested functions to modify the enclosing `count` variable. All three functions share the same `count`. Without `nonlocal`, `count += 1` would create a local variable and cause UnboundLocalError.

**Output:**

```
11
12
11
11
```

### Closures: Functions That Remember

```python
def multiplier(factor):
    def multiply(x):
        return x * factor
    return multiply

double = multiplier(2)
triple = multiplier(3)
half = multiplier(0.5)

print(f"double(5) = {double(5)}")
print(f"triple(5) = {triple(5)}")
print(f"half(10) = {half(10)}")

# Each closure has its own factor
print(f"\ndouble.__closure__[0].cell_contents = {double.__closure__[0].cell_contents}")
print(f"triple.__closure__[0].cell_contents = {triple.__closure__[0].cell_contents}")
```

Each call to `multiplier()` creates a new closure with its own `factor`. `double` remembers factor=2, `triple` remembers factor=3. The closure's captured variables are stored in `__closure__`.

**Output:**

```
double(5) = 10
triple(5) = 15
half(10) = 5.0

double.__closure__[0].cell_contents = 2
triple.__closure__[0].cell_contents = 3
```

### UnboundLocalError Pitfall

```python
x = 10

# This function works fine (only reads global)
def read_global():
    print("Reading global x:", x)

read_global()

# This function breaks (reads AND assigns)
def broken():
    try:
        print("Trying to read x:", x)  # UnboundLocalError here
        x = 20  # This makes x local for the entire function
    except UnboundLocalError as e:
        print(f"UnboundLocalError: {e}")

broken()

# Fix 1: use global keyword
def fixed_global():
    global x
    print("Reading global x:", x)
    x = 20

fixed_global()
print("Global x is now:", x)
```

Python determines scope at compile time. If any assignment to `x` exists in the function, `x` is local for the entire function. Reading it before the assignment causes UnboundLocalError. Fix with `global` or restructure the code.

**Output:**

```
Reading global x: 10
UnboundLocalError: local variable 'x' referenced before assignment
Reading global x: 10
Global x is now: 20
```

### Closure Pitfall: Loop Variable Capture

```python
# Pitfall: all closures capture the same variable
def make_functions_wrong():
    funcs = []
    for i in range(5):
        def f():
            return i  # Captures the variable i, not its value
        funcs.append(f)
    return funcs

print("Wrong way:")
for f in make_functions_wrong():
    print(f(), end=" ")

# Fix: use default parameter to capture the value
def make_functions_right():
    funcs = []
    for i in range(5):
        def f(i=i):  # Default parameter captures current value
            return i
        funcs.append(f)
    return funcs

print("\nRight way:")
for f in make_functions_right():
    print(f(), end=" ")
print()
```

In the wrong version, all functions capture the variable `i`, which is 4 after the loop ends. In the fix, `def f(i=i)` captures the current value of `i` at each iteration via a default parameter.

**Output:**

```
Wrong way:
4 4 4 4 4 
Right way:
0 1 2 3 4 
```

### Shadowing Built-in Names

```python
# Dangerous: shadowing built-in names
print("Before shadowing:")
print(type(list))      # <class 'type'>
print(list("hello"))   # ['h', 'e', 'l', 'l', 'o']

# Shadow the built-in 'list'
list = [1, 2, 3]
print("\nAfter shadowing:")
print(type(list))      # <class 'list'> (now refers to our variable)

try:
    result = list("hello")  # TypeError!
except TypeError as e:
    print(f"TypeError: {e}")

# Fix: delete the shadow
del list
print("\nAfter del list:")
print(list("hello"))   # Works again!
```

Assigning to a built-in name like `list` creates a global variable that shadows the built-in. The built-in `list()` function becomes inaccessible. Use `del` to remove the shadow. Avoid using built-in names as variable names.

## Common Mistakes

### UnboundLocalError: Reading Before Assignment in Same Scope

**Wrong:**

```
x = 10

def broken():
    print(x)   # UnboundLocalError!
    x = 20

broken()
```

UnboundLocalError: local variable 'x' referenced before assignment

**Correct:**

```
x = 10

def fixed():
    global x
    print(x)   # 10
    x = 20

fixed()
print(x)   # 20
```

Python scans the entire function at compile time. Finding `x = 20`, it marks x as local throughout the function. The `print(x)` line then reads a local x that has not been assigned yet. Use `global x` to tell Python you mean the global variable.

### Forgetting nonlocal When Modifying Enclosing Variable

**Wrong:**

```
def outer():
    count = 0
    def inner():
        count += 1  # UnboundLocalError!
    inner()
    return count

print(outer())
```

UnboundLocalError: local variable 'count' referenced before assignment

**Correct:**

```
def outer():
    count = 0
    def inner():
        nonlocal count
        count += 1
    inner()
    return count

print(outer())  # 1
```

Without `nonlocal`, `count += 1` in the inner function creates a local variable (because of the assignment), causing UnboundLocalError. `nonlocal count` tells Python to use the enclosing scope's `count`.

### Shadowing Built-in Names (list, dict, str, type, etc.)

**Wrong:**

```
list = [1, 2, 3]
result = list("hello")  # TypeError!
```

TypeError: 'list' object is not callable

**Correct:**

```
my_list = [1, 2, 3]
result = list("hello")
print(result)  # ['h', 'e', 'l', 'l', 'o']
```

Using a built-in name as a variable name shadows the built-in. `list` now refers to your list [1,2,3] instead of the `list()` constructor. Use descriptive names like `my_list`, `numbers`, or `items` instead.

### Assuming global Keyword is Needed to Read a Global Variable

**Wrong:**

```
name = "Aarav"

def greet():
    global name  # Unnecessary! You only need global for writing
    print(f"Hello, {name}")

greet()
```

No error, but using global when you only read is misleading and risky.

**Correct:**

```
name = "Aarav"

def greet():
    print(f"Hello, {name}")  # Can read global without 'global' keyword

greet()
```

You can **read** global variables from inside a function without the `global` keyword. You only need `global` when you want to **modify** (assign to) the global variable. Unnecessary `global` declarations signal that the function might modify state, which is misleading.

## Summary

- Scope determines where a variable is accessible. Python uses the LEGB rule: Local, Enclosing, Global, Built-in.
- Local scope: variables defined inside a function (including parameters). Created on function call, destroyed on return.
- Enclosing scope: variables in the outer function when functions are nested. The inner function can read them but needs nonlocal to modify them.
- Global scope: variables defined at the module level (outside all functions). Any function can read them but needs the global keyword to modify them.
- Built-in scope: Python's pre-defined names (print, len, range, True, None, etc.). Available everywhere without import.
- The global keyword declares that a variable inside a function refers to the module-level global variable, allowing modification.
- The nonlocal keyword declares that a variable inside a nested function refers to the enclosing function's variable, allowing modification.
- A closure is an inner function that remembers variables from its enclosing scope, even after the enclosing function has returned.
- Closures power factory functions (multiplier, logger), counters, and decorators. The captured variables are stored in func.__closure__.
- UnboundLocalError occurs when Python sees an assignment to a variable anywhere in a function, making it local for the entire function, but you read it before the assignment.
- Avoid shadowing built-in names (list, dict, str, type, print). Use descriptive variable names instead.
- Loop variables in Python persist after the loop ends. All closures created in a loop capture the same variable, not snapshots of its values.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/python/scope-and-closures/*
*Practice questions: https://learn.modernagecoders.com/resources/python/scope-and-closures/practice/*
