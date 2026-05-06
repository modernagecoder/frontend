---
title: "Exception Handling in Python - try, except, else, finally, raise | Modern Age Coders"
description: "Learn Python exception handling including try/except blocks, catching specific exceptions, else and finally clauses, raising exceptions, custom exception classes, and EAFP vs LBYL. Includes 58+ practice questions with output prediction and coding challenges."
slug: exception-handling
canonical: https://learn.modernagecoders.com/resources/python/exception-handling/
category: "Python"
keywords: ["python try except", "exception handling python", "python error handling", "python try except tutorial", "python raise exception", "python custom exception", "python finally", "python try except else", "python ValueError", "python exception hierarchy"]
---
# Exception Handling in Python

**Difficulty:** Advanced  
**Reading time:** 40 min  
**Chapter:** 20  
**Practice questions:** 58

## What Is Exception Handling?

An **exception** is an error that occurs during the execution of a program. Unlike a syntax error (which Python catches before running your code), an exception happens while the program is running. If not handled, exceptions crash your program and display a traceback.

```
# This causes an exception at runtime
number = int("hello")  # ValueError: invalid literal for int()
print("This never runs")
```

Exception handling is the mechanism that lets you **anticipate** errors and respond to them gracefully instead of crashing. Python uses the `try`/`except` structure:

```
try:
    number = int("hello")
except ValueError:
    print("That is not a valid number.")

print("Program continues normally.")
```

With exception handling, the program catches the error, handles it, and continues executing.

### Exceptions vs Syntax Errors

**Syntax errors** are detected before the program runs. They are mistakes in the code structure itself:

```
# SyntaxError: detected before execution
if True
    print("missing colon")
```

**Exceptions** occur during execution, when the code is syntactically correct but something goes wrong:

```
# ZeroDivisionError: detected at runtime
result = 10 / 0
```

You can handle exceptions with try/except. You cannot handle syntax errors -- you must fix the code.

## Why Is Exception Handling Important?

### 1. Preventing Crashes

Without exception handling, a single unexpected input or missing file can crash an entire application. If Aarav builds a calculator and the user divides by zero, the program should show a helpful message, not a traceback. Exception handling keeps programs running when things go wrong.

### 2. Handling Unpredictable Situations

Many errors cannot be predicted at coding time. The user enters text instead of a number. A file gets deleted between when you check for it and when you open it. A network request times out. Exception handling lets you write code that deals with these uncertain situations.

### 3. Separating Normal Code from Error Code

Without exceptions, error-checking logic pollutes your main code. Every operation would need an if-else check. With try/except, you write your main logic cleanly in the `try` block and put error handling separately in `except` blocks. This makes code easier to read and maintain.

### 4. Communicating Errors Up the Call Stack

When a function deep inside your program detects a problem, it can `raise` an exception. The exception travels up through all the calling functions until something catches it. This is far more powerful than returning error codes, because the exception cannot be accidentally ignored.

### 5. Resource Cleanup

The `finally` clause guarantees cleanup code runs regardless of whether an exception occurred. This is critical for closing files, releasing network connections, and freeing resources. Without `finally`, resource leaks are difficult to prevent.

## Detailed Explanation

### 1. The try/except Block

The basic structure places risky code in `try` and error-handling code in `except`:

```
try:
    # Code that might raise an exception
    result = 10 / 0
except ZeroDivisionError:
    # Code that runs if the exception occurs
    print("Cannot divide by zero!")
```

If no exception occurs in the `try` block, the `except` block is skipped entirely. If an exception occurs, Python immediately jumps to the matching `except` block. Any code after the error in the `try` block is not executed.

### 2. Catching Specific Exceptions

Python has many built-in exception types. Catching specific exceptions is important because it prevents you from accidentally hiding unrelated bugs:

```
# Common exception types
try:
    x = int("abc")        # ValueError
except ValueError:
    print("Invalid number format")

try:
    result = 10 / 0       # ZeroDivisionError
except ZeroDivisionError:
    print("Division by zero")

try:
    lst = [1, 2, 3]
    print(lst[10])         # IndexError
except IndexError:
    print("Index out of range")

try:
    d = {"a": 1}
    print(d["z"])          # KeyError
except KeyError:
    print("Key not found")

try:
    print(undefined_var)   # NameError
except NameError:
    print("Variable not defined")

try:
    result = "hello" + 5   # TypeError
except TypeError:
    print("Type mismatch")

try:
    with open("missing.txt") as f:  # FileNotFoundError
        pass
except FileNotFoundError:
    print("File does not exist")
```

### 3. Multiple except Blocks

A single try block can have multiple except blocks, each handling a different exception type:

```
def safe_divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        print("Error: cannot divide by zero")
        return None
    except TypeError:
        print("Error: both arguments must be numbers")
        return None

print(safe_divide(10, 2))    # 5.0
print(safe_divide(10, 0))    # Error message, then None
print(safe_divide(10, "a"))  # Error message, then None
```

Python checks `except` blocks from top to bottom and enters the first one that matches. Only one except block runs per exception.

### 4. Capturing the Exception Object (as)

Use `as` to capture the exception object, which contains the error message:

```
try:
    number = int("xyz")
except ValueError as e:
    print(f"Error type: {type(e).__name__}")
    print(f"Error message: {e}")

# Output:
# Error type: ValueError
# Error message: invalid literal for int() with base 10: 'xyz'
```

The variable `e` holds the exception instance. `str(e)` gives the error message. `type(e).__name__` gives the exception class name.

### 5. The else Clause

The `else` block runs only if **no exception** occurred in the `try` block:

```
try:
    number = int("42")
except ValueError:
    print("Invalid input")
else:
    print(f"Successfully converted: {number}")
    print(f"Doubled: {number * 2}")

# Output:
# Successfully converted: 42
# Doubled: 84
```

Why use `else` instead of putting the code at the end of `try`? Because code in `else` is **not protected** by the except blocks. If an error occurs in `else`, it is not caught. This keeps error handling precise -- you only catch exceptions from the specific code that might fail.

### 6. The finally Clause

The `finally` block **always** runs, whether an exception occurred or not, and even if a `return` statement was executed:

```
def read_file(filename):
    f = None
    try:
        f = open(filename, "r")
        return f.read()
    except FileNotFoundError:
        print(f"{filename} not found")
        return None
    finally:
        if f:
            f.close()
            print("File closed in finally block")

content = read_file("data.txt")
```

`finally` is guaranteed to execute. It runs after try (if no exception), after except (if exception was caught), and even after return statements. This makes it ideal for cleanup operations.

### 7. Complete try/except/else/finally Structure

```
try:
    # Code that might fail
    value = int(input("Enter a number: "))
except ValueError:
    # Runs if ValueError occurs
    print("That is not a valid number")
except Exception as e:
    # Runs for any other exception
    print(f"Unexpected error: {e}")
else:
    # Runs only if try succeeded (no exception)
    print(f"You entered: {value}")
finally:
    # Always runs, no matter what
    print("Input processing complete")
```

The order must be: try, except (one or more), else (optional), finally (optional). You cannot rearrange them.

### 8. Raising Exceptions

Use `raise` to throw an exception deliberately when your code detects an invalid condition:

```
def set_age(age):
    if not isinstance(age, int):
        raise TypeError("Age must be an integer")
    if age < 0 or age > 150:
        raise ValueError(f"Age must be between 0 and 150, got {age}")
    print(f"Age set to {age}")

set_age(25)      # Age set to 25

try:
    set_age(-5)  # Raises ValueError
except ValueError as e:
    print(f"Error: {e}")

try:
    set_age("twenty")  # Raises TypeError
except TypeError as e:
    print(f"Error: {e}")
```

Raising exceptions is how functions communicate that something went wrong. The caller is responsible for handling them.

### 9. Custom Exception Classes

Create your own exception types by inheriting from `Exception`:

```
class InsufficientFundsError(Exception):
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount
        super().__init__(
            f"Cannot withdraw {amount}. Balance is only {balance}."
        )

class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    
    def withdraw(self, amount):
        if amount > self.balance:
            raise InsufficientFundsError(self.balance, amount)
        self.balance -= amount
        return self.balance

account = BankAccount("Aarav", 1000)
try:
    account.withdraw(1500)
except InsufficientFundsError as e:
    print(f"Error: {e}")
    print(f"Tried: {e.amount}, Available: {e.balance}")
```

Custom exceptions make your code self-documenting. `InsufficientFundsError` is far more descriptive than a generic `ValueError`.

### 10. Exception Hierarchy

All exceptions in Python form a hierarchy. The base class is `BaseException`:

```
BaseException
  +-- SystemExit
  +-- KeyboardInterrupt
  +-- Exception
       +-- ValueError
       +-- TypeError
       +-- KeyError
       +-- IndexError
       +-- FileNotFoundError (subclass of OSError)
       +-- ZeroDivisionError (subclass of ArithmeticError)
       +-- NameError
       +-- AttributeError
       +-- RuntimeError
       +-- StopIteration
```

Catching a parent class catches all its children. `except Exception` catches nearly everything (except `SystemExit` and `KeyboardInterrupt`). This is why catching specific exceptions is preferred -- `except Exception` is too broad and can hide bugs.

### 11. LBYL vs EAFP

Two philosophies for handling potential errors:

**LBYL (Look Before You Leap)**: Check conditions before performing the operation:

```
# LBYL style
if key in dictionary:
    value = dictionary[key]
else:
    value = "default"
```

**EAFP (Easier to Ask Forgiveness than Permission)**: Try the operation and handle the exception if it fails:

```
# EAFP style (Pythonic)
try:
    value = dictionary[key]
except KeyError:
    value = "default"
```

Python's culture favors EAFP. It is often faster (no duplicate lookup), handles race conditions better (the file might be deleted between checking and opening), and is considered more Pythonic. However, LBYL is fine for simple checks like `if x != 0` before division.

### 12. Practical Patterns

#### Safe Input Validation Loop

```
def get_integer(prompt):
    while True:
        try:
            return int(input(prompt))
        except ValueError:
            print("Invalid input. Please enter a whole number.")

age = get_integer("Enter your age: ")
```

#### Safe File Reading

```
def safe_read(filename):
    try:
        with open(filename, "r") as f:
            return f.read()
    except FileNotFoundError:
        print(f"File '{filename}' not found.")
        return None
    except PermissionError:
        print(f"No permission to read '{filename}'.")
        return None
```

#### Safe Division

```
def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return float('inf') if a > 0 else float('-inf')
    except TypeError:
        raise TypeError(f"Cannot divide {type(a).__name__} by {type(b).__name__}")
```

## Code Examples

### Basic try/except with Multiple Exception Types

```python
# Handling different exceptions separately
def process_data(data, index, divisor):
    try:
        value = data[index]
        result = value / divisor
        number = int(result)
        return number
    except IndexError:
        print(f"Error: index {index} is out of range for list of length {len(data)}")
    except ZeroDivisionError:
        print("Error: cannot divide by zero")
    except TypeError:
        print("Error: invalid types for division")
    except ValueError:
        print("Error: cannot convert to integer")
    return None

data = [10, 20, 30]

print(process_data(data, 1, 3))     # Normal case
print(process_data(data, 10, 2))    # IndexError
print(process_data(data, 0, 0))     # ZeroDivisionError
print(process_data(data, 0, "x"))   # TypeError
```

Each `except` block handles a specific exception type with a descriptive message. Python checks blocks top to bottom and enters the first match. Only one except block executes per exception. The function returns `None` for any error case.

**Output:**

```
6
Error: index 10 is out of range for list of length 3
None
Error: cannot divide by zero
None
Error: invalid types for division
None
```

### The else and finally Clauses

```python
def divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("  except: Division by zero!")
        return None
    except TypeError as e:
        print(f"  except: {e}")
        return None
    else:
        print(f"  else: Division successful: {a}/{b} = {result}")
        return result
    finally:
        print("  finally: This always runs")

print("Test 1:")
print(f"  Result: {divide(10, 3)}")

print("\nTest 2:")
print(f"  Result: {divide(10, 0)}")

print("\nTest 3:")
print(f"  Result: {divide(10, 'a')}")
```

The `else` block runs only when no exception occurs. The `finally` block runs in every case -- after `try` succeeds, after `except` handles an error, or even after a `return` statement. Notice that `finally` runs before the function actually returns.

**Output:**

```
Test 1:
  else: Division successful: 10/3 = 3.3333333333333335
  finally: This always runs
  Result: 3.3333333333333335

Test 2:
  except: Division by zero!
  finally: This always runs
  Result: None

Test 3:
  except: unsupported operand type(s) for /: 'int' and 'str'
  finally: This always runs
  Result: None
```

### Capturing Exceptions with as

```python
# Different ways to use the exception object
errors = [
    ("int('abc')", "ValueError"),
    ("1/0", "ZeroDivisionError"),
    ("[1,2][5]", "IndexError"),
    ("{'a':1}['z']", "KeyError"),
]

for code_str, expected in errors:
    try:
        eval(code_str)
    except Exception as e:
        print(f"Code: {code_str}")
        print(f"  Type: {type(e).__name__}")
        print(f"  Message: {e}")
        print(f"  Args: {e.args}")
        print()
```

The `as e` syntax captures the exception object. `type(e).__name__` gives the exception class name. `str(e)` or just `e` in an f-string gives the error message. `e.args` is a tuple of all arguments passed to the exception constructor.

**Output:**

```
Code: int('abc')
  Type: ValueError
  Message: invalid literal for int() with base 10: 'abc'
  Args: ("invalid literal for int() with base 10: 'abc'",)

Code: 1/0
  Type: ZeroDivisionError
  Message: division by zero
  Args: ('division by zero',)

Code: [1,2][5]
  Type: IndexError
  Message: list index out of range
  Args: ('list index out of range',)

Code: {'a':1}['z']
  Type: KeyError
  Message: 'z'
  Args: ('z',)
```

### Raising Exceptions and Custom Exceptions

```python
class InvalidAgeError(Exception):
    def __init__(self, age, message="Age is not valid"):
        self.age = age
        self.message = message
        super().__init__(self.message)
    
    def __str__(self):
        return f"{self.message}: {self.age}"

def register_student(name, age):
    if not isinstance(name, str) or len(name) == 0:
        raise ValueError("Name must be a non-empty string")
    if not isinstance(age, int):
        raise TypeError(f"Age must be int, got {type(age).__name__}")
    if age < 5 or age > 25:
        raise InvalidAgeError(age, "Student age must be between 5 and 25")
    print(f"Registered: {name}, age {age}")

# Test cases
test_cases = [
    ("Aarav", 16),
    ("", 15),
    ("Priya", "sixteen"),
    ("Rohan", 3),
]

for name, age in test_cases:
    try:
        register_student(name, age)
    except (ValueError, TypeError, InvalidAgeError) as e:
        print(f"Error for ({name!r}, {age!r}): {type(e).__name__}: {e}")
```

Custom exception `InvalidAgeError` inherits from `Exception` and carries extra data (the invalid age). The `register_student` function raises different exceptions for different problems. The caller catches all three types using a tuple in the except clause.

**Output:**

```
Registered: Aarav, age 16
Error for ('', 15): ValueError: Name must be a non-empty string
Error for ('Priya', 'sixteen'): TypeError: Age must be int, got str
Error for ('Rohan', 3): InvalidAgeError: Student age must be between 5 and 25: 3
```

### EAFP vs LBYL Comparison

```python
data = {"name": "Aarav", "age": 16, "scores": [85, 92, 78]}

# LBYL (Look Before You Leap)
print("--- LBYL style ---")
if "grade" in data:
    print(f"Grade: {data['grade']}")
else:
    print("Grade not found")

if isinstance(data.get("scores"), list) and len(data["scores"]) > 0:
    avg = sum(data["scores"]) / len(data["scores"])
    print(f"Average: {avg}")
else:
    print("No valid scores")

# EAFP (Easier to Ask Forgiveness than Permission)
print("\n--- EAFP style ---")
try:
    print(f"Grade: {data['grade']}")
except KeyError:
    print("Grade not found")

try:
    avg = sum(data["scores"]) / len(data["scores"])
    print(f"Average: {avg}")
except (KeyError, TypeError, ZeroDivisionError):
    print("No valid scores")
```

LBYL checks conditions before acting. EAFP tries the operation and handles exceptions. Both achieve the same result, but EAFP is considered more Pythonic. EAFP handles edge cases naturally (like the key being deleted between check and access in multithreaded code).

**Output:**

```
--- LBYL style ---
Grade not found
Average: 85.0

--- EAFP style ---
Grade not found
Average: 85.0
```

### Practical Pattern: Input Validation Loop

```python
def get_integer_in_range(prompt, low, high):
    while True:
        try:
            value = int(input(prompt))
        except ValueError:
            print(f"  Please enter a whole number.")
            continue
        
        if low <= value <= high:
            return value
        else:
            print(f"  Number must be between {low} and {high}.")

# Simulating the function without actual input
def demo_validation():
    test_inputs = ["abc", "3.14", "200", "42"]
    index = 0
    
    while index < len(test_inputs):
        user_input = test_inputs[index]
        index += 1
        print(f"Input: {user_input}")
        try:
            value = int(user_input)
        except ValueError:
            print("  Please enter a whole number.")
            continue
        
        if 1 <= value <= 100:
            print(f"  Accepted: {value}")
            return value
        else:
            print(f"  Number must be between 1 and 100.")
    
    return None

result = demo_validation()
print(f"Final result: {result}")
```

This pattern combines a while loop with try/except to repeatedly ask for input until a valid value is provided. Invalid types are caught by `ValueError`, and range validation is done with a separate if check. This is one of the most common patterns in real-world Python.

**Output:**

```
Input: abc
  Please enter a whole number.
Input: 3.14
  Please enter a whole number.
Input: 200
  Number must be between 1 and 100.
Input: 42
  Accepted: 42
Final result: 42
```

### Exception Flow: What Runs and What Does Not

```python
def demo_flow(value):
    print(f"--- Testing with {value!r} ---")
    try:
        print("  try: start")
        result = 10 / int(value)
        print(f"  try: result = {result}")
    except ValueError:
        print("  except ValueError: not a number")
    except ZeroDivisionError:
        print("  except ZeroDivision: cannot divide by zero")
    else:
        print(f"  else: success, result = {result}")
    finally:
        print("  finally: cleanup")
    print()

demo_flow("5")     # No exception
demo_flow("abc")   # ValueError
demo_flow("0")     # ZeroDivisionError
```

This traces the exact execution flow for three scenarios. When no exception occurs: try runs fully, else runs, finally runs. When ValueError occurs: try stops at the error, except ValueError runs, finally runs. When ZeroDivisionError occurs: try stops at division, except ZeroDivision runs, finally runs. In all cases, `else` only runs on success, and `finally` always runs.

**Output:**

```
--- Testing with '5' ---
  try: start
  try: result = 2.0
  else: success, result = 2.0
  finally: cleanup

--- Testing with 'abc' ---
  try: start
  except ValueError: not a number
  finally: cleanup

--- Testing with '0' ---
  try: start
  except ZeroDivision: cannot divide by zero
  finally: cleanup
```

## Common Mistakes

### Catching All Exceptions with Bare except

**Wrong:**

```
try:
    result = int("abc")
except:  # Bare except -- catches EVERYTHING
    print("Something went wrong")
# This also catches KeyboardInterrupt, SystemExit, etc.!
```

No error shown, but this hides all exceptions including KeyboardInterrupt (Ctrl+C), making the program hard to stop.

**Correct:**

```
try:
    result = int("abc")
except ValueError:
    print("Invalid number format")
# Or at most:
except Exception as e:
    print(f"Error: {e}")
```

A bare `except:` catches every exception, including `KeyboardInterrupt` and `SystemExit`, which you almost never want to catch. Always catch specific exceptions, or at most use `except Exception` which excludes system-exit exceptions.

### Putting Too Much Code in the try Block

**Wrong:**

```
try:
    filename = input("Enter filename: ")
    with open(filename) as f:
        data = f.read()
    numbers = [int(x) for x in data.split()]
    average = sum(numbers) / len(numbers)
    print(f"Average: {average}")
except Exception:
    print("Something went wrong")  # Which part failed?
```

No specific error, but when something fails, you cannot tell whether the file was missing, the data was not numeric, or the list was empty.

**Correct:**

```
filename = input("Enter filename: ")
try:
    with open(filename) as f:
        data = f.read()
except FileNotFoundError:
    print(f"File '{filename}' not found")
else:
    try:
        numbers = [int(x) for x in data.split()]
        average = sum(numbers) / len(numbers)
    except ValueError:
        print("File contains non-numeric data")
    except ZeroDivisionError:
        print("File is empty")
    else:
        print(f"Average: {average}")
```

Keep try blocks small and specific. Each try block should protect only the code that might raise the specific exception you are catching. Large try blocks with broad except clauses hide bugs.

### Catching an Exception and Doing Nothing

**Wrong:**

```
try:
    result = int("abc")
except ValueError:
    pass  # Silently ignore the error

print(result)  # NameError: result was never assigned!
```

NameError: name 'result' is not defined

**Correct:**

```
try:
    result = int("abc")
except ValueError:
    print("Invalid input, using default value")
    result = 0

print(result)  # 0
```

Using `pass` in an except block silently swallows the error, which makes debugging very difficult. If the try block was supposed to assign a variable, that variable remains undefined. Always handle the error meaningfully or at least log it.

### Wrong Order of except Blocks (Parent Before Child)

**Wrong:**

```
try:
    with open("missing.txt") as f:
        pass
except Exception:
    print("General error")
except FileNotFoundError:  # This never runs!
    print("File not found")
```

SyntaxWarning in Python 3.12+ (or the specific handler simply never executes because the parent class catches it first).

**Correct:**

```
try:
    with open("missing.txt") as f:
        pass
except FileNotFoundError:
    print("File not found")
except Exception:
    print("General error")
```

Since `FileNotFoundError` is a subclass of `Exception`, `except Exception` catches it first, and the more specific handler never runs. Always put specific (child) exceptions before general (parent) ones.

### Confusing else with finally

**Wrong:**

```
# Thinking else always runs
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Division error")
else:
    print("This will run")  # NO! else does NOT run if except ran
```

No error, but the else block does not run because an exception was caught. The programmer expected it to run.

**Correct:**

```
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Division error")
else:
    print("This runs only on success")
finally:
    print("This ALWAYS runs")
```

`else` runs only if **no exception** occurred (success path). `finally` runs **always**, regardless of whether an exception occurred. They serve different purposes: else is for success-only logic, finally is for guaranteed cleanup.

## Summary

- Exceptions are runtime errors (different from syntax errors). Without handling, they crash the program. The try/except structure lets you catch and respond to exceptions gracefully.
- Catch specific exceptions (ValueError, TypeError, IndexError, KeyError, ZeroDivisionError, FileNotFoundError, NameError) rather than using bare except or except Exception. Specific handling prevents hiding unrelated bugs.
- Multiple except blocks handle different exception types from the same try block. Python checks them top to bottom and enters the first match. Put specific exceptions before general ones.
- Use 'as' to capture the exception object: except ValueError as e. The object contains the error message (str(e)) and arguments (e.args).
- The else clause runs only when no exception occurred in try. It keeps success-only code separate from protected code. Errors in else are not caught by the preceding except blocks.
- The finally clause always runs: after try succeeds, after except handles an error, or even after a return statement. Use it for cleanup (closing files, releasing resources).
- Use raise to throw exceptions when your code detects invalid conditions. raise ValueError('message') communicates errors to callers.
- Custom exceptions inherit from Exception: class MyError(Exception). They make error handling more descriptive and can carry additional data.
- Python favors EAFP (Easier to Ask Forgiveness than Permission) over LBYL (Look Before You Leap). Try the operation and handle the exception, rather than checking conditions first.
- The exception hierarchy means catching a parent class also catches its children. except Exception catches almost everything. Use specific types for precise error handling.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/python/exception-handling/*
*Practice questions: https://learn.modernagecoders.com/resources/python/exception-handling/practice/*
