---
title: "Practice: Exception Handling in Python"
description: "58 practice problems for Exception Handling in Python in Python"
slug: exception-handling-practice
canonical: https://learn.modernagecoders.com/resources/python/exception-handling/practice
category: "Python"
---
# Practice: Exception Handling in Python

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
try:
    print("A")
    print("B")
except:
    print("C")
print("D")
```

*Hint:* If no exception occurs in try, the except block is skipped.

**Answer:** `A`
`B`
`D`

No exception occurs in the try block, so "A" and "B" are printed. The except block is skipped entirely. Then "D" prints after the try/except structure.

### Q2. [Easy] What is the output?

```
try:
    print("A")
    x = 1 / 0
    print("B")
except ZeroDivisionError:
    print("C")
print("D")
```

*Hint:* After an exception, the rest of the try block is skipped.

**Answer:** `A`
`C`
`D`

"A" prints, then `1/0` raises ZeroDivisionError. "B" is skipped. The except block runs, printing "C". Then "D" prints normally.

### Q3. [Easy] What is the output?

```
try:
    x = int("hello")
except ValueError:
    print("Error caught")

print("Done")
```

*Hint:* int('hello') raises a ValueError.

**Answer:** `Error caught`
`Done`

`int("hello")` raises `ValueError`. The except block catches it and prints "Error caught". Execution continues normally with "Done".

### Q4. [Easy] What is the output?

```
try:
    x = int("42")
except ValueError:
    print("Error")
else:
    print(f"Value: {x}")
```

*Hint:* The else block runs when no exception occurs.

**Answer:** `Value: 42`

`int("42")` succeeds without an exception. The except block is skipped. The else block runs because try succeeded, printing "Value: 42".

### Q5. [Easy] What is the output?

```
try:
    print("start")
except:
    print("error")
finally:
    print("done")
```

*Hint:* finally always runs, even when there is no exception.

**Answer:** `start`
`done`

No exception occurs. "start" prints from the try block. The except block is skipped. The finally block always runs, printing "done".

### Q6. [Medium] What is the output?

```
try:
    print("A")
    x = 1 / 0
except ZeroDivisionError:
    print("B")
else:
    print("C")
finally:
    print("D")
```

*Hint:* else runs only on success. finally always runs.

**Answer:** `A`
`B`
`D`

"A" prints, then ZeroDivisionError occurs. "B" prints from except. The else block does NOT run because an exception occurred. "D" prints from finally (always runs).

### Q7. [Medium] What is the output?

```
try:
    x = int("10")
    y = x / 2
except ValueError:
    print("A")
except ZeroDivisionError:
    print("B")
else:
    print("C")
finally:
    print("D")
```

*Hint:* No exception occurs. Which blocks run?

**Answer:** `C`
`D`

`int("10")` succeeds, `10/2` succeeds. No exception, so both except blocks are skipped. Else runs ("C"). Finally always runs ("D").

### Q8. [Medium] What is the output?

```
def f():
    try:
        return 1
    finally:
        print("finally")

result = f()
print(result)
```

*Hint:* finally runs even after a return statement.

**Answer:** `finally`
`1`

The try block returns 1, but before the function actually returns, the finally block runs, printing "finally". Then the return value 1 is received by the caller and printed.

### Q9. [Medium] What is the output?

```
try:
    numbers = [1, 2, 3]
    print(numbers[5])
except IndexError as e:
    print(type(e).__name__)
    print(e)
```

*Hint:* as e captures the exception object.

**Answer:** `IndexError`
`list index out of range`

Accessing index 5 of a 3-element list raises `IndexError`. The exception is captured as `e`. `type(e).__name__` gives "IndexError". `e` gives the message "list index out of range".

### Q10. [Medium] What is the output?

```
def test():
    try:
        return "try"
    except:
        return "except"
    finally:
        return "finally"

print(test())
```

*Hint:* If finally has a return, it overrides the return from try or except.

**Answer:** `finally`

The try block returns "try", but the finally block also has a return statement. The finally block's return **overrides** the try block's return. The function returns "finally". This is considered bad practice -- avoid return in finally.

### Q11. [Medium] What is the output?

```
try:
    d = {"a": 1, "b": 2}
    print(d["c"])
except KeyError as e:
    print(f"Key {e} not found")
except Exception as e:
    print(f"General: {e}")
```

*Hint:* KeyError is checked before Exception. Only the first matching except runs.

**Answer:** `Key 'c' not found`

Accessing key "c" raises `KeyError`. The first except matches (KeyError), so it runs. The Exception handler is skipped because the error was already caught. For KeyError, `e` displays the key with quotes: 'c'.

### Q12. [Hard] What is the output?

```
def process(x):
    try:
        if x < 0:
            raise ValueError("negative")
        return x * 2
    except ValueError as e:
        print(f"Caught: {e}")
        return -1
    finally:
        print("cleanup")

print(process(5))
print(process(-3))
```

*Hint:* Trace both calls. finally runs before the return value is delivered.

**Answer:** `cleanup`
`10`
`Caught: negative`
`cleanup`
`-1`

For process(5): try returns 10, finally prints "cleanup", then 10 is returned. For process(-3): raise triggers except (prints "Caught: negative"), except returns -1, finally prints "cleanup", then -1 is returned.

### Q13. [Hard] What is the output?

```
try:
    try:
        x = 1 / 0
    except ValueError:
        print("inner ValueError")
    finally:
        print("inner finally")
except ZeroDivisionError:
    print("outer ZeroDivision")
finally:
    print("outer finally")
```

*Hint:* The inner except does not match. The exception propagates to the outer try.

**Answer:** `inner finally`
`outer ZeroDivision`
`outer finally`

The inner try raises ZeroDivisionError. The inner except catches ValueError, which does not match. The inner finally runs ("inner finally"). The exception propagates to the outer try. The outer except catches ZeroDivisionError ("outer ZeroDivision"). The outer finally runs ("outer finally").

### Q14. [Hard] What is the output?

```
class MyError(Exception):
    pass

def f():
    raise MyError("custom error")

try:
    f()
except MyError as e:
    print(type(e).__name__)
    print(e)
except Exception:
    print("general")
```

*Hint:* MyError is a subclass of Exception. It is checked before Exception.

**Answer:** `MyError`
`custom error`

`f()` raises `MyError`. The first except matches MyError (since it comes before Exception). `type(e).__name__` gives "MyError". `str(e)` gives "custom error".

### Q15. [Hard] What is the output?

```
def f(n):
    try:
        if n == 0:
            raise ValueError("zero")
        if n == 1:
            raise TypeError("one")
        return n
    except ValueError:
        return "V"
    except TypeError:
        return "T"

print(f(0), f(1), f(2))
```

*Hint:* Each call is independent. Follow the flow for each value of n.

**Answer:** `V T 2`

f(0): raises ValueError, except returns "V". f(1): raises TypeError, except returns "T". f(2): no exception, try returns 2. All printed on one line separated by spaces.

### Q16. [Hard] What is the output?

```
result = []
try:
    result.append("try")
    x = int("abc")
    result.append("after int")
except ValueError:
    result.append("except")
else:
    result.append("else")
finally:
    result.append("finally")

print(result)
```

*Hint:* Track which append() calls execute.

**Answer:** `['try', 'except', 'finally']`

"try" is appended. `int("abc")` raises ValueError, so "after int" is skipped. "except" is appended. Else does not run (exception occurred). "finally" is appended. The result list shows the exact execution flow.

### Q17. [Medium] What is the difference between `except Exception` and `except:` (bare except)?

*Hint:* Think about the exception hierarchy. What does BaseException include?

**Answer:** `except Exception` catches all regular exceptions (ValueError, TypeError, etc.) but **not** KeyboardInterrupt, SystemExit, or GeneratorExit. `except:` (bare except) catches **everything**, including KeyboardInterrupt and SystemExit, which can make the program hard to stop with Ctrl+C.

KeyboardInterrupt and SystemExit inherit from BaseException, not Exception. A bare except is equivalent to `except BaseException`. This is almost never what you want, because it prevents the user from interrupting the program.

### Q18. [Hard] Why should you put specific exception handlers before general ones?

*Hint:* Python checks except blocks from top to bottom.

**Answer:** Python checks except blocks from top to bottom and enters the first one that matches. Since a parent class matches all its children, putting `except Exception` before `except ValueError` means ValueError is always caught by Exception first, and the ValueError handler never runs. Specific handlers must come first to get a chance to match.

This is because of the exception hierarchy. ValueError is a subclass of Exception, so `except Exception` matches ValueError. If Exception comes first, more specific handlers below it become dead code.

## Mixed Questions

### Q1. [Easy] What is the output?

```
x = "10"
try:
    y = int(x)
except ValueError:
    y = 0

print(y + 5)
```

*Hint:* "10" is a valid integer string.

**Answer:** `15`

`int("10")` succeeds, y = 10. The except block is skipped. `10 + 5 = 15`.

### Q2. [Easy] What is the output?

```
x = "abc"
try:
    y = int(x)
except ValueError:
    y = 0

print(y + 5)
```

*Hint:* "abc" cannot be converted to int.

**Answer:** `5`

`int("abc")` raises ValueError. The except block sets y = 0. `0 + 5 = 5`.

### Q3. [Medium] What is the output?

```
def safe_get(lst, index, default=None):
    try:
        return lst[index]
    except IndexError:
        return default

print(safe_get([10, 20, 30], 1))
print(safe_get([10, 20, 30], 5))
print(safe_get([10, 20, 30], 5, -1))
```

*Hint:* Index 5 is out of range for a 3-element list.

**Answer:** `20`
`None`
`-1`

Index 1 returns 20 (no exception). Index 5 raises IndexError, returns default (None). Index 5 with default=-1 returns -1.

### Q4. [Medium] What is the output?

```
def convert(values):
    result = []
    for v in values:
        try:
            result.append(int(v))
        except ValueError:
            result.append(None)
    return result

print(convert(["1", "abc", "3", "xyz", "5"]))
```

*Hint:* Each string is converted independently. Invalid ones become None.

**Answer:** `[1, None, 3, None, 5]`

"1" converts to 1, "abc" raises ValueError (None), "3" converts to 3, "xyz" raises ValueError (None), "5" converts to 5.

### Q5. [Medium] What is the output?

```
def divide_all(numbers, divisor):
    results = []
    for n in numbers:
        try:
            results.append(n / divisor)
        except ZeroDivisionError:
            results.append("inf")
        except TypeError:
            results.append("err")
    return results

print(divide_all([10, 20, 30], 5))
print(divide_all([10, 20, 30], 0))
```

*Hint:* Each division is in its own try/except, so one error does not stop others.

**Answer:** `[2.0, 4.0, 6.0]`
`['inf', 'inf', 'inf']`

First call: 10/5=2.0, 20/5=4.0, 30/5=6.0. Second call: each division by 0 catches ZeroDivisionError and appends "inf".

### Q6. [Medium] What is the output?

```
data = {"a": 1, "b": 2}
keys = ["a", "c", "b", "d"]

result = []
for key in keys:
    try:
        result.append(data[key])
    except KeyError:
        result.append(0)

print(result)
```

*Hint:* Keys 'c' and 'd' do not exist in the dictionary.

**Answer:** `[1, 0, 2, 0]`

"a" exists (1). "c" raises KeyError (0). "b" exists (2). "d" raises KeyError (0). Result: [1, 0, 2, 0].

### Q7. [Hard] What is the output?

```
def f(x):
    try:
        result = 100 / x
    except ZeroDivisionError:
        return "zero"
    except TypeError:
        return "type"
    else:
        if result > 50:
            raise ValueError("too big")
        return result

try:
    print(f(2))
    print(f(0))
    print(f(1))
except ValueError as e:
    print(e)
```

*Hint:* f(1) gives result=100, which is >50, so ValueError is raised.

**Answer:** `50.0`
`zero`
`too big`

f(2): 100/2=50.0, not >50, returns 50.0. f(0): ZeroDivisionError, returns "zero". f(1): 100/1=100.0, which is >50, raises ValueError. The outer try catches it.

### Q8. [Hard] What is the output?

```
class TooYoungError(Exception):
    pass

class TooOldError(Exception):
    pass

def check_age(age):
    if age < 13:
        raise TooYoungError(f"{age} is too young")
    if age > 65:
        raise TooOldError(f"{age} is too old")
    return "OK"

for age in [10, 25, 70]:
    try:
        result = check_age(age)
        print(f"{age}: {result}")
    except TooYoungError as e:
        print(f"{age}: Young - {e}")
    except TooOldError as e:
        print(f"{age}: Old - {e}")
```

*Hint:* Each age triggers a different path: too young, OK, or too old.

**Answer:** `10: Young - 10 is too young`
`25: OK`
`70: Old - 70 is too old`

Age 10: TooYoungError raised. Age 25: no exception, returns "OK". Age 70: TooOldError raised. Each custom exception carries a descriptive message.

### Q9. [Hard] What is the output?

```
def nested():
    try:
        try:
            raise ValueError("inner")
        except TypeError:
            print("caught type")
        finally:
            print("inner finally")
    except ValueError:
        print("caught value")
    finally:
        print("outer finally")

nested()
```

*Hint:* The inner except does not match ValueError. The exception propagates outward.

**Answer:** `inner finally`
`caught value`
`outer finally`

Inner try raises ValueError. Inner except catches TypeError (no match). Inner finally runs ("inner finally"). ValueError propagates to outer try. Outer except catches ValueError ("caught value"). Outer finally runs ("outer finally").

### Q10. [Hard] What is the output?

```
def risky(n):
    if n == 0:
        raise ValueError("zero")
    if n == 1:
        raise TypeError("one")
    return n * 10

results = []
for i in range(4):
    try:
        results.append(risky(i))
    except (ValueError, TypeError) as e:
        results.append(str(e))

print(results)
```

*Hint:* Multiple exceptions in one except clause using a tuple.

**Answer:** `['zero', 'one', 20, 30]`

i=0: ValueError, appends 'zero'. i=1: TypeError, appends 'one'. i=2: returns 20. i=3: returns 30. Both exception types are caught by the single except with a tuple.

### Q11. [Medium] What is the EAFP principle in Python? How does it differ from LBYL?

*Hint:* EAFP: try first, handle errors. LBYL: check first, then act.

**Answer:** EAFP (Easier to Ask Forgiveness than Permission) means trying an operation and handling the exception if it fails. LBYL (Look Before You Leap) means checking if the operation will succeed before attempting it. Python favors EAFP because it is often faster (avoids double lookups), handles race conditions better, and is considered more Pythonic.

Example: LBYL checks `if key in dict` before accessing. EAFP wraps `dict[key]` in try/except KeyError. EAFP is preferred in Python, but LBYL is fine for simple, obvious checks.

## Multiple Choice Questions

### Q1. [Easy] What keyword starts an exception handling block in Python?

A. catch
B. try
C. handle
D. error

**Answer:** B

**B is correct.** Python uses `try` to begin an exception handling block. `catch` is used in Java and JavaScript, not Python.

### Q2. [Easy] What happens if an exception occurs in a try block and no matching except handler is found?

A. The exception is silently ignored
B. The program prints 'Error' and continues
C. The exception propagates up to the calling function
D. Python automatically fixes the error

**Answer:** C

**C is correct.** If no matching except is found, the exception propagates up the call stack. If no handler is found anywhere, the program crashes with a traceback.

### Q3. [Easy] Which exception is raised by int('abc')?

A. TypeError
B. ValueError
C. SyntaxError
D. RuntimeError

**Answer:** B

**B is correct.** `int('abc')` raises `ValueError` because 'abc' is a string (correct type) but cannot be converted to an integer (invalid value). TypeError would be raised if the argument type itself was wrong.

### Q4. [Easy] When does the else clause in a try/except/else block execute?

A. Always, after try
B. Only if an exception was caught
C. Only if no exception occurred in try
D. Only if the finally block runs

**Answer:** C

**C is correct.** The `else` clause runs only when the `try` block completes without raising any exception. If any exception occurs (whether caught or not), else is skipped.

### Q5. [Easy] When does the finally clause execute?

A. Only if an exception occurred
B. Only if no exception occurred
C. Only if except ran
D. Always, regardless of exceptions

**Answer:** D

**D is correct.** `finally` always runs: after try succeeds, after except handles an error, and even after return statements. It is guaranteed to execute.

### Q6. [Medium] What does 'except ValueError as e' do?

A. Creates a new ValueError named e
B. Catches ValueError and stores the exception object in variable e
C. Catches any exception and renames it ValueError
D. Compares the exception to variable e

**Answer:** B

**B is correct.** The `as e` syntax captures the exception object in the variable `e`. You can then access the error message with `str(e)` and the exception type with `type(e)`.

### Q7. [Medium] Which of these is NOT a built-in Python exception?

A. ValueError
B. NullPointerError
C. IndexError
D. KeyError

**Answer:** B

**B is correct.** `NullPointerError` is a Java exception, not Python. Python does not have null pointers. The equivalent situation in Python would raise `AttributeError` or `TypeError`.

### Q8. [Medium] What is the correct order of clauses in a try statement?

A. try, else, except, finally
B. try, except, finally, else
C. try, except, else, finally
D. try, finally, except, else

**Answer:** C

**C is correct.** The required order is: try, then except (one or more), then else (optional), then finally (optional). Python raises a SyntaxError if this order is violated.

### Q9. [Medium] What does raise do?

A. Catches an exception
B. Creates and throws an exception
C. Prints an error message
D. Terminates the program

**Answer:** B

**B is correct.** `raise` creates and throws (raises) an exception. The exception propagates up the call stack until it is caught by an except block or crashes the program. It does not catch, print, or terminate by itself.

### Q10. [Medium] How do you create a custom exception class?

A. class MyError(Error): pass
B. class MyError(Exception): pass
C. def MyError(): raise Exception
D. exception MyError: pass

**Answer:** B

**B is correct.** Custom exceptions are classes that inherit from `Exception` (or one of its subclasses). Option A is wrong because `Error` is not a Python class. Options C and D are not valid Python syntax for defining exceptions.

### Q11. [Medium] Can you have multiple except blocks for one try block?

A. No, only one except per try
B. Yes, but only two
C. Yes, as many as needed, each catching a different exception type
D. Yes, but they all must catch the same exception type

**Answer:** C

**C is correct.** A single try block can have multiple except blocks, each handling a different exception type. Python checks them top to bottom and enters the first match.

### Q12. [Hard] What happens if a finally block contains a return statement?

A. SyntaxError
B. The finally return is ignored
C. The finally return overrides the try/except return
D. Both return values are returned as a tuple

**Answer:** C

**C is correct.** If finally contains a return, it overrides any return from try or except. This is because finally always runs last, and its return replaces the pending return value. This behavior is confusing, which is why returning from finally is strongly discouraged.

### Q13. [Hard] What exception is raised when you access a key that does not exist in a dictionary?

A. ValueError
B. IndexError
C. KeyError
D. LookupError

**Answer:** C

**C is correct.** Accessing a missing dictionary key raises `KeyError`. Option B (IndexError) is for lists/sequences. Option D (LookupError) is the parent class of both KeyError and IndexError, but the specific exception raised is KeyError.

### Q14. [Hard] What does EAFP stand for in Python philosophy?

A. Errors Are Found by Python
B. Easier to Ask Forgiveness than Permission
C. Exceptions Always Follow Patterns
D. Every Action Fails Predictably

**Answer:** B

**B is correct.** EAFP means try the operation and handle the exception if it fails, rather than checking conditions in advance. This is the preferred Python style, as opposed to LBYL (Look Before You Leap).

### Q15. [Hard] Which of these exceptions is NOT a subclass of Exception?

A. ValueError
B. TypeError
C. KeyboardInterrupt
D. FileNotFoundError

**Answer:** C

**C is correct.** `KeyboardInterrupt` inherits from `BaseException`, not `Exception`. This means `except Exception` does not catch it, which allows users to always interrupt a program with Ctrl+C.

### Q16. [Easy] Can an except block catch multiple exception types at once?

A. No, each except catches only one type
B. Yes, by listing them in a tuple: except (ValueError, TypeError)
C. Yes, by using the 'or' keyword: except ValueError or TypeError
D. Yes, by using a comma: except ValueError, TypeError

**Answer:** B

**B is correct.** You catch multiple types with a tuple: `except (ValueError, TypeError)`. Option D was valid in Python 2 but not in Python 3. Option C does not work (it evaluates the or expression).

### Q17. [Medium] What exception does 10 / 0 raise?

A. ValueError
B. MathError
C. ZeroDivisionError
D. ArithmeticError

**Answer:** C

**C is correct.** Division by zero raises `ZeroDivisionError`. Option D (ArithmeticError) is its parent class. While `except ArithmeticError` would also catch it, the specific exception raised is ZeroDivisionError.

### Q18. [Hard] What is the difference between SyntaxError and an exception?

A. There is no difference
B. SyntaxError is detected before execution; exceptions occur during execution
C. Exceptions are detected before execution; SyntaxError occurs during execution
D. SyntaxError can be caught with try/except; exceptions cannot

**Answer:** B

**B is correct.** SyntaxError is detected during parsing (before any code runs). Exceptions like ValueError, TypeError occur during execution. Technically, SyntaxError can be caught with try/except in some cases (e.g., in eval()), but in normal code, it prevents execution entirely.

### Q19. [Hard] If a try block has both else and finally, and no exception occurs, what is the execution order?

A. try, finally, else
B. try, else, finally
C. else, try, finally
D. try, finally (else is skipped)

**Answer:** B

**B is correct.** When no exception occurs: try runs first, then else (success path), then finally (always runs). The except blocks are skipped entirely.

### Q20. [Medium] What is the purpose of 'raise' without any argument inside an except block?

A. It raises a new generic Exception
B. It re-raises the currently caught exception
C. It stops the except block
D. It is a SyntaxError

**Answer:** B

**B is correct.** A bare `raise` inside an except block re-raises the current exception. This is useful when you want to log the error or do partial handling and then let it propagate further up the call stack.

## Coding Challenges

### Challenge 1. Safe Calculator

**Difficulty:** Easy

Write a function safe_calculate(a, op, b) where op is one of '+', '-', '*', '/'. Handle ZeroDivisionError for division by zero and ValueError for unknown operators. Return the result or an error message string.

**Constraints:**

- Use try/except. Return numeric result on success, string message on error.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
10 + 5 = 15
10 / 0 = Error: division by zero
10 % 3 = Error: unknown operator '%'
```

**Solution:**

```python
def safe_calculate(a, op, b):
    try:
        if op == '+':
            return a + b
        elif op == '-':
            return a - b
        elif op == '*':
            return a * b
        elif op == '/':
            return a / b
        else:
            raise ValueError(f"unknown operator '{op}'")
    except ZeroDivisionError:
        return "Error: division by zero"
    except ValueError as e:
        return f"Error: {e}"

test_cases = [(10, '+', 5), (10, '-', 3), (10, '*', 4), (10, '/', 2), (10, '/', 0), (10, '%', 3)]
for a, op, b in test_cases:
    print(f"{a} {op} {b} = {safe_calculate(a, op, b)}")
```

### Challenge 2. Robust Type Converter

**Difficulty:** Easy

Write a function convert(value, target_type) that converts a value to the target type (int, float, or str). Use try/except to catch conversion errors and return a tuple (success: bool, result).

**Constraints:**

- Use try/except. Return a 2-tuple: (True, converted_value) or (False, error_message).

**Sample input:**

```
(No input required)
```

**Sample output:**

```
(True, 42)
(False, "Cannot convert 'hello' to int")
(True, 3.14)
(True, '100')
```

**Solution:**

```python
def convert(value, target_type):
    try:
        result = target_type(value)
        return (True, result)
    except (ValueError, TypeError) as e:
        return (False, f"Cannot convert {value!r} to {target_type.__name__}")

print(convert("42", int))
print(convert("hello", int))
print(convert("3.14", float))
print(convert(100, str))
```

### Challenge 3. Safe List Operations

**Difficulty:** Easy

Write three functions: safe_get(lst, index) that returns the element at index or None if out of range, safe_pop(lst, index) that removes and returns the element or None, and safe_divide_list(lst) that returns each element divided by the next (handle division by zero).

**Constraints:**

- Use try/except in each function.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
safe_get([1,2,3], 1) = 2
safe_get([1,2,3], 5) = None
safe_pop result: 2, list: [1, 3]
safe_divide: [0.5, 0.67, inf]
```

**Solution:**

```python
def safe_get(lst, index):
    try:
        return lst[index]
    except IndexError:
        return None

def safe_pop(lst, index):
    try:
        return lst.pop(index)
    except IndexError:
        return None

def safe_divide_list(lst):
    results = []
    for i in range(len(lst) - 1):
        try:
            results.append(round(lst[i] / lst[i+1], 2))
        except ZeroDivisionError:
            results.append(float('inf'))
    return results

print(f"safe_get([1,2,3], 1) = {safe_get([1,2,3], 1)}")
print(f"safe_get([1,2,3], 5) = {safe_get([1,2,3], 5)}")
lst = [1, 2, 3]
result = safe_pop(lst, 1)
print(f"safe_pop result: {result}, list: {lst}")
print(f"safe_divide: {safe_divide_list([1, 2, 3, 0, 5])}")
```

### Challenge 4. File Reader with Error Handling

**Difficulty:** Medium

Write a function read_numbers(filename) that reads a file containing one number per line, converts each to float, and returns the list. Handle FileNotFoundError and ValueError (for invalid lines). Skip invalid lines but count them. Return a dict with 'numbers', 'invalid_count', and 'error' keys.

**Constraints:**

- Handle FileNotFoundError and ValueError. Skip invalid lines.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
{'numbers': [10.0, 20.0, 30.0], 'invalid_count': 2, 'error': None}
```

**Solution:**

```python
def read_numbers(filename):
    result = {'numbers': [], 'invalid_count': 0, 'error': None}
    try:
        with open(filename, 'r') as f:
            for line in f:
                try:
                    result['numbers'].append(float(line.strip()))
                except ValueError:
                    result['invalid_count'] += 1
    except FileNotFoundError:
        result['error'] = f"File '{filename}' not found"
    return result

# Create test file
with open('numbers.txt', 'w') as f:
    f.write('10\n20\nabc\n30\nxyz\n')

print(read_numbers('numbers.txt'))
print(read_numbers('missing.txt'))
```

### Challenge 5. Custom Exception: Password Validator

**Difficulty:** Medium

Create custom exceptions: PasswordTooShortError, PasswordNoDigitError, PasswordNoUpperError. Write validate_password(password) that raises the appropriate exception. Test with various passwords.

**Constraints:**

- Each exception class should carry specific details about the failure.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
MyP@ss1 -> Valid
abc -> PasswordTooShortError: minimum 6 characters, got 3
abcdef -> PasswordNoDigitError: must contain at least one digit
abcde1 -> PasswordNoUpperError: must contain at least one uppercase letter
```

**Solution:**

```python
class PasswordTooShortError(Exception):
    def __init__(self, length):
        super().__init__(f"minimum 6 characters, got {length}")

class PasswordNoDigitError(Exception):
    def __init__(self):
        super().__init__("must contain at least one digit")

class PasswordNoUpperError(Exception):
    def __init__(self):
        super().__init__("must contain at least one uppercase letter")

def validate_password(password):
    if len(password) < 6:
        raise PasswordTooShortError(len(password))
    if not any(c.isdigit() for c in password):
        raise PasswordNoDigitError()
    if not any(c.isupper() for c in password):
        raise PasswordNoUpperError()
    return True

test_passwords = ["MyP@ss1", "abc", "abcdef", "abcde1"]
for pwd in test_passwords:
    try:
        validate_password(pwd)
        print(f"{pwd} -> Valid")
    except (PasswordTooShortError, PasswordNoDigitError, PasswordNoUpperError) as e:
        print(f"{pwd} -> {type(e).__name__}: {e}")
```

### Challenge 6. Retry Decorator Pattern

**Difficulty:** Medium

Write a function retry(func, max_attempts, *args) that calls func(*args) up to max_attempts times. If func raises an exception, catch it and try again. Return the result on success, or raise the last exception after all attempts fail.

**Constraints:**

- Track attempt numbers. Re-raise the last exception if all attempts fail.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Attempt 1: failed
Attempt 2: failed
Attempt 3: success! Result: 42

Attempt 1: failed
Attempt 2: failed
Attempt 3: failed
All 3 attempts failed: simulated failure
```

**Solution:**

```python
def retry(func, max_attempts, *args):
    last_error = None
    for attempt in range(1, max_attempts + 1):
        try:
            result = func(*args)
            print(f"Attempt {attempt}: success! Result: {result}")
            return result
        except Exception as e:
            last_error = e
            print(f"Attempt {attempt}: failed")
    raise last_error

import random
random.seed(42)

def unreliable():
    if random.random() < 0.7:
        raise ValueError("simulated failure")
    return 42

try:
    retry(unreliable, 3)
except ValueError:
    pass

print()

def always_fail():
    raise ValueError("simulated failure")

try:
    retry(always_fail, 3)
except ValueError as e:
    print(f"All 3 attempts failed: {e}")
```

### Challenge 7. Safe Dictionary Accessor

**Difficulty:** Hard

Write a function deep_get(data, path, default=None) that safely accesses nested dictionary keys using a dot-separated path string. For example, deep_get(data, 'user.address.city') should access data['user']['address']['city']. Handle KeyError, TypeError, and IndexError gracefully.

**Constraints:**

- Use try/except to handle missing keys and type errors at any level.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
user.name -> Aarav
user.address.city -> Delhi
user.phone -> None
user.address.zip.code -> None
```

**Solution:**

```python
def deep_get(data, path, default=None):
    keys = path.split('.')
    current = data
    try:
        for key in keys:
            if isinstance(current, list):
                current = current[int(key)]
            else:
                current = current[key]
        return current
    except (KeyError, TypeError, IndexError, ValueError):
        return default

data = {
    'user': {
        'name': 'Aarav',
        'age': 16,
        'address': {
            'city': 'Delhi',
            'state': 'Delhi'
        },
        'scores': [85, 92, 78]
    }
}

print(f"user.name -> {deep_get(data, 'user.name')}")
print(f"user.address.city -> {deep_get(data, 'user.address.city')}")
print(f"user.phone -> {deep_get(data, 'user.phone')}")
print(f"user.address.zip.code -> {deep_get(data, 'user.address.zip.code')}")
print(f"user.scores.0 -> {deep_get(data, 'user.scores.0')}")
```

### Challenge 8. Exception Statistics Collector

**Difficulty:** Hard

Write a function test_expressions(expressions) that takes a list of string expressions, evaluates each with eval(), and returns a dictionary mapping exception type names to their counts, plus a 'success' count. Include the expressions that failed under each exception type.

**Constraints:**

- Use eval() to evaluate expressions. Catch Exception as the base and use type(e).__name__ to categorize.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
{'success': 3, 'ZeroDivisionError': {'count': 1, 'expressions': ['1/0']}, 'NameError': {'count': 1, 'expressions': ['x+1']}}
```

**Solution:**

```python
def test_expressions(expressions):
    stats = {'success': 0}
    
    for expr in expressions:
        try:
            eval(expr)
            stats['success'] += 1
        except Exception as e:
            error_type = type(e).__name__
            if error_type not in stats:
                stats[error_type] = {'count': 0, 'expressions': []}
            stats[error_type]['count'] += 1
            stats[error_type]['expressions'].append(expr)
    
    return stats

expressions = [
    '2 + 3',
    '10 / 0',
    'int("abc")',
    '[1,2][5]',
    'x + 1',
    '3 * 4',
    '{"a":1}["b"]',
    '5 ** 2',
]

result = test_expressions(expressions)
for key, value in result.items():
    print(f"{key}: {value}")
```

---

*Notes: https://learn.modernagecoders.com/resources/python/exception-handling/*
