---
title: "Practice: Scope, LEGB Rule, and Closures"
description: "55 practice problems for Scope, LEGB Rule, and Closures in Python"
slug: scope-and-closures-practice
canonical: https://learn.modernagecoders.com/resources/python/scope-and-closures/practice/
category: "Python"
---
# Practice: Scope, LEGB Rule, and Closures

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
x = 10

def show():
    print(x)

show()
```

*Hint:* The function can read global variables without the global keyword.

**Answer:** `10`

The function `show()` has no local variable `x`. Python searches the global scope and finds `x = 10`. Reading a global inside a function works without the `global` keyword.

### Q2. [Easy] What is the output?

```
x = 5

def func():
    x = 10
    print(x)

func()
print(x)
```

*Hint:* Assignment inside a function creates a local variable.

**Answer:** `10`
`5`

Inside `func()`, `x = 10` creates a local variable. `print(x)` inside the function prints the local 10. Outside, `print(x)` prints the global 5. The global x was never modified.

### Q3. [Easy] What is the output?

```
def func():
    y = 20
    print(y)

func()
try:
    print(y)
except NameError as e:
    print(f"Error: {e}")
```

*Hint:* Local variables do not exist outside the function.

**Answer:** `20`
`Error: name 'y' is not defined`

`y` is local to `func()`. Inside the function, it prints 20. Outside, `y` does not exist, so a `NameError` is raised.

### Q4. [Easy] What is the output?

```
x = "global"

def outer():
    x = "enclosing"
    def inner():
        print(x)
    inner()

outer()
```

*Hint:* inner() has no local x, so LEGB search finds the enclosing one.

**Answer:** `enclosing`

`inner()` has no local `x`. Python searches the enclosing scope (outer's local scope) and finds `x = "enclosing"`. The global `x = "global"` is not reached.

### Q5. [Easy] What is the output?

```
count = 0

def increment():
    global count
    count += 1

increment()
increment()
increment()
print(count)
```

*Hint:* The global keyword allows modifying the module-level variable.

**Answer:** `3`

`global count` tells Python that `count` refers to the module-level variable. Each call to `increment()` adds 1 to the global count: 0 -> 1 -> 2 -> 3.

### Q6. [Medium] What is the output?

```
x = 1

def func():
    x = 2
    print("Inside:", x)

func()
print("Outside:", x)
```

*Hint:* Assignment inside a function creates a NEW local variable, it does not modify the global.

**Answer:** `Inside: 2`
`Outside: 1`

`x = 2` inside the function creates a local variable that shadows the global `x`. The global `x` remains 1. Without the `global` keyword, assignment never touches the global variable.

### Q7. [Medium] What is the output?

```
def outer():
    x = 10
    def inner():
        nonlocal x
        x += 5
    inner()
    print(x)

outer()
```

*Hint:* nonlocal allows the inner function to modify the enclosing variable.

**Answer:** `15`

`nonlocal x` lets `inner()` modify the enclosing `x`. `x += 5` changes it from 10 to 15. `print(x)` in outer sees the modified value: 15.

### Q8. [Medium] What is the output?

```
def multiplier(factor):
    def multiply(x):
        return x * factor
    return multiply

double = multiplier(2)
triple = multiplier(3)
print(double(5))
print(triple(5))
print(double(10))
```

*Hint:* Each call to multiplier creates a new closure with its own factor.

**Answer:** `10`
`15`
`20`

`double` is a closure with factor=2. `triple` is a closure with factor=3. `double(5)`=10, `triple(5)`=15, `double(10)`=20. Each closure independently remembers its own factor.

### Q9. [Medium] What is the output?

```
x = "global"

def outer():
    x = "enclosing"
    def inner():
        x = "local"
        print("inner:", x)
    inner()
    print("outer:", x)

outer()
print("global:", x)
```

*Hint:* Each scope has its own x. Assignment creates a local variable.

**Answer:** `inner: local`
`outer: enclosing`
`global: global`

Three separate `x` variables exist: local to inner, local to outer (enclosing), and global. Each `print` accesses the `x` in its own scope. None of the assignments affect the other scopes.

### Q10. [Medium] What is the output?

```
def make_adder(n):
    def add(x):
        return x + n
    return add

add5 = make_adder(5)
add10 = make_adder(10)

print(add5(3))
print(add10(3))
print(add5(add10(1)))
```

*Hint:* Each closure remembers its own n value.

**Answer:** `8`
`13`
`16`

`add5` remembers n=5. `add10` remembers n=10. `add5(3)`=8. `add10(3)`=13. `add5(add10(1))`=add5(11)=16.

### Q11. [Hard] What is the output?

```
x = 10

def func():
    try:
        print(x)
        x = 20
    except UnboundLocalError:
        print("UnboundLocalError caught")

func()
print(x)
```

*Hint:* The assignment x = 20 makes x local for the ENTIRE function, even the print before it.

**Answer:** `UnboundLocalError caught`
`10`

Because `x = 20` exists in the function, Python treats `x` as local for the entire function. `print(x)` tries to read the local x before it is assigned, causing UnboundLocalError. The global x (10) is unchanged.

### Q12. [Hard] What is the output?

```
def counter():
    count = 0
    def inc():
        nonlocal count
        count += 1
        return count
    def get():
        return count
    return inc, get

inc, get = counter()
print(inc())
print(inc())
print(get())
print(inc())
print(get())
```

*Hint:* Both inc and get share the same enclosing count variable.

**Answer:** `1`
`2`
`2`
`3`
`3`

`inc` and `get` both close over the same `count`. `inc()` increments and returns: 1, 2. `get()` reads without modifying: 2. `inc()` again: 3. `get()`: 3.

### Q13. [Hard] What is the output?

```
funcs = []
for i in range(4):
    def f():
        return i
    funcs.append(f)

print([fn() for fn in funcs])
```

*Hint:* All closures capture the same variable i, not its value at creation time.

**Answer:** `[3, 3, 3, 3]`

All four functions capture the same variable `i`. After the loop, `i = 3`. When called, all functions return the current value of `i`, which is 3. This is the classic loop-closure pitfall.

### Q14. [Hard] What is the output?

```
funcs = []
for i in range(4):
    def f(i=i):
        return i
    funcs.append(f)

print([fn() for fn in funcs])
```

*Hint:* Default parameter i=i captures the current value of i at each iteration.

**Answer:** `[0, 1, 2, 3]`

The default parameter `i=i` captures the current value of `i` at each loop iteration. When i=0, the default is 0. When i=1, the default is 1, etc. Each function now has its own snapshot.

### Q15. [Hard] What is the output?

```
a = 1
def func():
    a = 2
    def inner():
        global a
        a = 3
    inner()
    print("func:", a)

func()
print("global:", a)
```

*Hint:* inner() uses global, not nonlocal. It modifies the global a, not the enclosing a.

**Answer:** `func: 2`
`global: 3`

`inner()` declares `global a`, so `a = 3` modifies the global a (1 -> 3). The enclosing a in `func()` is a separate local variable and remains 2. `global` skips the enclosing scope entirely.

### Q16. [Hard] What is the output?

```
def outer():
    x = 10
    def middle():
        def inner():
            nonlocal x
            x += 1
        inner()
    middle()
    return x

print(outer())
```

*Hint:* nonlocal searches upward through enclosing scopes. inner has no x, middle has no x, outer has x.

**Answer:** `11`

`nonlocal x` in `inner()` searches enclosing scopes: middle has no x, so it continues to outer and finds `x = 10`. `x += 1` modifies outer's x to 11. `outer()` returns 11.

## Mixed Questions

### Q1. [Easy] What is the output?

```
name = "Aarav"

def greet():
    print(f"Hello, {name}")

greet()
name = "Priya"
greet()
```

*Hint:* The function reads the global variable at call time, not definition time.

**Answer:** `Hello, Aarav`
`Hello, Priya`

The function reads the global `name` each time it is called. First call: name is "Aarav". After changing name to "Priya", second call reads the updated value.

### Q2. [Easy] What is the output?

```
for i in range(5):
    pass

print(i)
```

*Hint:* Python for loops do not create a new scope. The loop variable persists.

**Answer:** `4`

Unlike many languages, Python's `for` loop does not create a new scope. The variable `i` persists after the loop and holds its last value: 4.

### Q3. [Easy] What is the output?

```
def func(a, b):
    c = a + b
    return c

result = func(3, 4)
print(result)
try:
    print(c)
except NameError:
    print("c is not defined")
```

*Hint:* c is a local variable inside func. It does not exist outside.

**Answer:** `7`
`c is not defined`

`c` is local to `func`. The function returns 7 (stored in result). Trying to access `c` outside the function raises NameError because local variables are destroyed when the function returns.

### Q4. [Medium] What is the output?

```
def power_factory(exp):
    def power(base):
        return base ** exp
    return power

square = power_factory(2)
cube = power_factory(3)
print(square(4))
print(cube(4))
```

*Hint:* Each closure captures a different value of exp.

**Answer:** `16`
`64`

`square` captures exp=2. `cube` captures exp=3. `square(4)` = 4**2 = 16. `cube(4)` = 4**3 = 64.

### Q5. [Medium] What is the output?

```
x = [1, 2, 3]

def modify(lst):
    lst.append(4)

modify(x)
print(x)
```

*Hint:* Lists are mutable. The function modifies the same object, no global keyword needed.

**Answer:** `[1, 2, 3, 4]`

The list is passed by reference. `modify()` appends to the same list object. You do NOT need the `global` keyword to modify a mutable global object through its methods. You only need `global` for reassignment (`x = something_new`).

### Q6. [Medium] What is the output?

```
x = [1, 2, 3]

def replace(lst):
    lst = [4, 5, 6]
    print("Inside:", lst)

replace(x)
print("Outside:", x)
```

*Hint:* Reassigning the parameter creates a new local reference, not modifying the original.

**Answer:** `Inside: [4, 5, 6]`
`Outside: [1, 2, 3]`

`lst = [4, 5, 6]` reassigns the local variable `lst` to a new list. The original list `x` is unaffected. This is different from calling methods on lst (like append), which would modify the original.

### Q7. [Medium] What is the LEGB rule? Explain each letter.

*Hint:* It is the order Python searches for variable names.

**Answer:** LEGB stands for: **L**ocal (inside the current function), **E**nclosing (outer function for nested functions), **G**lobal (module level), **B**uilt-in (Python's predefined names like print, len). Python searches these scopes in this order when resolving a name.

When Python encounters a variable name, it checks Local first. If not found, it checks the Enclosing scope (if inside a nested function). If still not found, it checks Global (module level). Finally, it checks Built-in. If the name is not found anywhere, a NameError is raised.

### Q8. [Medium] When do you need the `global` keyword and when do you need `nonlocal`?

*Hint:* Think about which scope you are trying to modify.

**Answer:** Use `global` to modify a **module-level** variable from inside a function. Use `nonlocal` to modify an **enclosing function's** variable from inside a nested function. Neither is needed for reading variables or for modifying mutable objects through their methods.

You need these keywords only for **reassignment** (e.g., `x = new_value` or `x += 1`). You do NOT need them to read a variable or to call methods on a mutable object (e.g., `my_list.append(1)`).

### Q9. [Hard] What is the output?

```
def make_greeting(greeting):
    def greet(name):
        return f"{greeting}, {name}!"
    return greet

hello = make_greeting("Hello")
namaste = make_greeting("Namaste")

print(hello("Aarav"))
print(namaste("Priya"))
print(hello("Rohan"))
```

*Hint:* Each closure captures a different greeting value.

**Answer:** `Hello, Aarav!`
`Namaste, Priya!`
`Hello, Rohan!`

`hello` captures greeting="Hello". `namaste` captures greeting="Namaste". Each closure independently remembers its enclosing variable.

### Q10. [Hard] What is the output?

```
print = "hello"  # Shadows built-in print
try:
    print("test")
except TypeError as e:
    del print  # Remove shadow
    print(f"Error was: {e}")
    print("Built-in restored")
```

*Hint:* Assigning to 'print' shadows the built-in. del removes the shadow.

**Answer:** `Error was: 'str' object is not callable`
`Built-in restored`

`print = "hello"` shadows the built-in `print` function with a string. `print("test")` tries to call the string, causing TypeError. `del print` removes the global shadow, restoring access to the built-in.

### Q11. [Hard] What is the output?

```
def accumulator(start):
    total = start
    def add(n):
        nonlocal total
        total += n
        return total
    return add

acc = accumulator(100)
print(acc(10))
print(acc(20))
print(acc(30))
```

*Hint:* The closure maintains a running total across calls.

**Answer:** `110`
`130`
`160`

The closure starts with total=100. `acc(10)`: 100+10=110. `acc(20)`: 110+20=130. `acc(30)`: 130+30=160. The `nonlocal` keyword allows modifying the enclosing total.

## Multiple Choice Questions

### Q1. [Easy] What does LEGB stand for?

A. List, Element, Global, Built-in
B. Local, Enclosing, Global, Built-in
C. Local, External, General, Basic
D. Loop, Enclosing, Global, Base

**Answer:** B

**B is correct.** LEGB stands for Local, Enclosing, Global, Built-in. This is the order Python searches for variable names.

### Q2. [Easy] Where are local variables created?

A. At the module level
B. Inside a function
C. In the Python interpreter
D. In the import statement

**Answer:** B

**B is correct.** Local variables are created inside a function. They exist only during the function call and are destroyed when the function returns.

### Q3. [Easy] What keyword is used to modify a global variable from inside a function?

A. nonlocal
B. extern
C. global
D. module

**Answer:** C

**C is correct.** The `global` keyword declares that a variable inside a function refers to the module-level global variable. `nonlocal` (A) is for enclosing scope, not global.

### Q4. [Easy] Can you read a global variable inside a function without any special keyword?

A. No, you always need the global keyword
B. Yes, reading globals works without any keyword
C. Only if the variable is a constant
D. Only in Python 3.10+

**Answer:** B

**B is correct.** You can read global variables from inside a function without the `global` keyword. You only need `global` when you want to assign to (modify) the global variable.

### Q5. [Easy] What is a closure?

A. A function that closes the program
B. A function that deletes all variables
C. An inner function that remembers variables from its enclosing scope
D. A function with no parameters

**Answer:** C

**C is correct.** A closure is a function that captures and remembers variables from the enclosing scope, even after the enclosing function has returned.

### Q6. [Medium] What error occurs if you assign to and read a variable in the same function without declaring it global?

A. NameError
B. TypeError
C. UnboundLocalError
D. SyntaxError

**Answer:** C

**C is correct.** `UnboundLocalError` occurs because Python sees the assignment, marks the variable as local for the entire function, and then encounters a read before the assignment.

### Q7. [Medium] What does the nonlocal keyword do?

A. Declares a global variable
B. Creates a new local variable
C. Allows a nested function to modify the enclosing function's variable
D. Deletes a variable from the enclosing scope

**Answer:** C

**C is correct.** `nonlocal` tells Python that a variable in a nested function refers to the enclosing (not global) scope's variable, allowing modification.

### Q8. [Medium] Which scope does Python search first when looking up a variable name?

A. Global
B. Built-in
C. Enclosing
D. Local

**Answer:** D

**D is correct.** Python follows LEGB order: Local first, then Enclosing, then Global, then Built-in. It stops at the first scope where the name is found.

### Q9. [Medium] What happens when you do list = [1, 2, 3] at module level?

A. Overwrites the built-in list function globally
B. Creates a global variable that shadows the built-in list
C. Raises a SyntaxError
D. Has no effect on the built-in

**Answer:** B

**B is correct.** A global variable named `list` shadows the built-in `list` function. The built-in still exists in the Built-in scope but is hidden. Use `del list` to remove the shadow.

### Q10. [Medium] Do you need the global keyword to append to a global list?

A. Yes, always
B. No, because append modifies the existing object, not reassigns the variable
C. Only if the list has more than 10 elements
D. Only in Python 2

**Answer:** B

**B is correct.** `global` is needed for reassignment (`my_list = new_list`). Calling methods on the existing object (`my_list.append(1)`) does not require `global` because the variable itself is not being reassigned.

### Q11. [Hard] What is the output of this code?

```
x = 10
def f():
    x = x + 1
    return x
f()
```

A. 11
B. 10
C. UnboundLocalError
D. NameError

**Answer:** C

**C is correct.** `x = x + 1` contains both a read and an assignment. Python marks x as local for the entire function. The read (`x + 1`) happens before the assignment, causing UnboundLocalError.

### Q12. [Hard] When Python determines variable scope, is it at compile time or runtime?

A. Runtime (when the line executes)
B. Compile time (when the function is defined)
C. Import time
D. It depends on the variable type

**Answer:** B

**B is correct.** Python determines scope at compile time (when the function definition is compiled). If an assignment to a variable exists anywhere in the function, it is treated as local for the entire function, regardless of execution flow.

### Q13. [Hard] Why do closures in a loop often capture the same value?

A. Because loops in Python are buggy
B. Because closures capture the variable reference, not the value, and the variable changes
C. Because closures cannot be created in loops
D. Because Python optimizes loop variables

**Answer:** B

**B is correct.** Closures capture the variable, not its current value. In a loop, all closures reference the same loop variable. After the loop ends, the variable holds its final value, so all closures return that final value.

### Q14. [Hard] How do you fix the loop-closure problem (all closures returning the same value)?

A. Use global inside the closure
B. Use a default parameter to capture the current value: def f(i=i)
C. Use nonlocal inside the closure
D. Use a while loop instead

**Answer:** B

**B is correct.** A default parameter (`def f(i=i)`) is evaluated at function definition time, capturing the current value of `i`. Each iteration creates a function with a different default, solving the shared-variable problem.

### Q15. [Medium] What does func.__closure__ contain?

A. The function's source code
B. The function's parameters
C. The captured variables from the enclosing scope
D. The function's return value

**Answer:** C

**C is correct.** `__closure__` is a tuple of cell objects containing the captured variables from the enclosing scope. Access values with `func.__closure__[0].cell_contents`. If the function is not a closure, `__closure__` is None.

### Q16. [Hard] Can nonlocal refer to a global variable?

A. Yes, nonlocal works for any outer scope
B. No, nonlocal only works with enclosing function scopes, not module-level globals
C. Only in Python 3.10+
D. Only if the global variable is mutable

**Answer:** B

**B is correct.** `nonlocal` only searches enclosing function scopes. It cannot refer to global (module-level) variables. Use `global` for module-level variables. If no enclosing function has the variable, `nonlocal` raises a SyntaxError.

### Q17. [Easy] Which of the following is a built-in scope name?

A. my_variable
B. x
C. len
D. result

**Answer:** C

**C is correct.** `len` is a built-in function available in the Built-in scope. The other options are user-defined names that would be in Local or Global scope.

### Q18. [Hard] What is the output?

```
x = 5
def f():
    global x
    x = 10
    def g():
        nonlocal x  # SyntaxError?
        x = 20
    g()
f()
```

A. x becomes 20
B. x becomes 10
C. SyntaxError: no binding for nonlocal 'x' found
D. UnboundLocalError

**Answer:** C

**C is correct.** In function `f()`, `x` is declared `global`, so it is not a local variable of f. Function `g()` uses `nonlocal x`, but there is no enclosing function with a local `x`. This causes a SyntaxError.

## Coding Challenges

### Challenge 1. Counter Using Closure

**Difficulty:** Easy

Write a function make_counter() that returns an increment function. Each call to the returned function should return the next integer starting from 1.

**Constraints:**

- Use a closure with nonlocal. Do not use global variables.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
1
2
3
```

**Solution:**

```python
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

### Challenge 2. Multiplier Factory

**Difficulty:** Easy

Write a function make_multiplier(factor) that returns a function. The returned function should multiply its argument by factor. Create double (factor=2) and triple (factor=3) and test them.

**Constraints:**

- Use a closure. The returned function should take one argument.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
double(5) = 10
triple(5) = 15
double(100) = 200
```

**Solution:**

```python
def make_multiplier(factor):
    def multiply(x):
        return x * factor
    return multiply

double = make_multiplier(2)
triple = make_multiplier(3)
print(f"double(5) = {double(5)}")
print(f"triple(5) = {triple(5)}")
print(f"double(100) = {double(100)}")
```

### Challenge 3. Logger Factory

**Difficulty:** Easy

Write a function make_logger(prefix) that returns a log function. The log function should print messages with the given prefix. Create 'ERROR' and 'INFO' loggers.

**Constraints:**

- Use a closure to remember the prefix.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
[ERROR] File not found
[INFO] Server started
[ERROR] Connection refused
```

**Solution:**

```python
def make_logger(prefix):
    def log(message):
        print(f"[{prefix}] {message}")
    return log

error = make_logger("ERROR")
info = make_logger("INFO")
error("File not found")
info("Server started")
error("Connection refused")
```

### Challenge 4. Running Average Calculator

**Difficulty:** Medium

Write a function make_averager() that returns a function. Each call to the returned function with a number should return the running average of all numbers provided so far.

**Constraints:**

- Use a closure to maintain state. Track sum and count using nonlocal.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
10.0
15.0
20.0
17.5
```

**Solution:**

```python
def make_averager():
    total = 0
    count = 0
    def add(value):
        nonlocal total, count
        total += value
        count += 1
        return total / count
    return add

avg = make_averager()
print(avg(10))
print(avg(20))
print(avg(30))
print(avg(10))
```

### Challenge 5. Fix the Loop-Closure Bug

**Difficulty:** Medium

The following code creates functions that should return 0, 1, 2, 3, 4 but all return 4. Fix it using the default parameter technique.

```
funcs = []
for i in range(5):
    def f():
        return i
    funcs.append(f)
print([fn() for fn in funcs])  # [4, 4, 4, 4, 4]
```

**Constraints:**

- Fix using default parameter: def f(i=i).

**Sample input:**

```
(No input required)
```

**Sample output:**

```
[0, 1, 2, 3, 4]
```

**Solution:**

```python
funcs = []
for i in range(5):
    def f(i=i):
        return i
    funcs.append(f)
print([fn() for fn in funcs])
```

### Challenge 6. Scope Tracer

**Difficulty:** Medium

Write a program that demonstrates all four LEGB scopes. Define a global variable, a function with an enclosing variable, a nested function with a local variable, and use a built-in (like len). Print which scope each variable comes from.

**Constraints:**

- Must demonstrate all four scopes: L, E, G, and B.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Built-in: len = <built-in function len>
Global: x = global
Enclosing: x = enclosing
Local: x = local
```

**Solution:**

```python
x = "global"

def outer():
    x = "enclosing"
    def inner():
        x = "local"
        print(f"Local: x = {x}")
        print(f"Built-in: len = {len}")
    print(f"Enclosing: x = {x}")
    inner()

print(f"Global: x = {x}")
outer()
```

### Challenge 7. Rate Limiter Closure

**Difficulty:** Hard

Write a function make_rate_limiter(max_calls) that returns a function. The returned function should track how many times it has been called. If called more than max_calls times, it should return 'Rate limit exceeded' instead of executing.

**Constraints:**

- Use a closure with nonlocal to track the call count.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Call 1: OK
Call 2: OK
Call 3: OK
Call 4: Rate limit exceeded
Call 5: Rate limit exceeded
```

**Solution:**

```python
def make_rate_limiter(max_calls):
    calls = 0
    def check():
        nonlocal calls
        calls += 1
        if calls > max_calls:
            return "Rate limit exceeded"
        return "OK"
    return check

limiter = make_rate_limiter(3)
for i in range(1, 6):
    print(f"Call {i}: {limiter()}")
```

### Challenge 8. Memoization Using Closure

**Difficulty:** Hard

Write a function memoize(func) that returns a new function which caches results. If the same argument is passed again, return the cached result instead of recomputing. Test with a factorial function.

**Constraints:**

- Use a closure with a dictionary as cache. Print 'Computing...' only on first call for each argument.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Computing factorial(5)...
120
120
Computing factorial(3)...
6
```

**Solution:**

```python
def memoize(func):
    cache = {}
    def wrapper(n):
        if n not in cache:
            print(f"Computing {func.__name__}({n})...")
            cache[n] = func(n)
        return cache[n]
    return wrapper

def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

factorial = memoize(factorial)
print(factorial(5))
print(factorial(5))
print(factorial(3))
```

---

*Notes: https://learn.modernagecoders.com/resources/python/scope-and-closures/*
