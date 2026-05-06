---
title: "C++ Exception Handling - try catch throw, Custom Exceptions, noexcept, RAII | Modern Age Coders"
description: "Master C++ exception handling including try-catch-throw, catch by reference, multiple catch blocks, catch-all, rethrowing, standard exceptions, custom exception classes, noexcept, stack unwinding, exception safety guarantees, and RAII. 54+ interview-focused practice questions."
slug: exception-handling-in-cpp
canonical: https://learn.modernagecoders.com/resources/cpp/exception-handling-in-cpp
category: "C++"
keywords: ["c++ exception handling", "try catch throw c++", "custom exception c++", "noexcept c++", "stack unwinding c++", "RAII c++", "exception safety c++", "stdexcept c++", "catch by reference c++", "rethrowing exceptions c++"]
---
# Exception Handling (try, catch, throw)

**Difficulty:** Advanced  
**Reading time:** 55 min  
**Chapter:** 19  
**Practice questions:** 52

## What Is Exception Handling in C++?

**Exception handling** is a mechanism for responding to runtime errors (called exceptions) in a structured, non-local way. Instead of checking return codes at every function call, C++ allows a function to `throw` an exception when something goes wrong, and a calling function to `catch` and handle it.

The three keywords are `try`, `throw`, and `catch`:

```
#include 
#include 
using namespace std;

double divide(double a, double b) {
    if (b == 0)
        throw runtime_error("Division by zero");
    return a / b;
}

int main() {
    try {
        cout << divide(10, 2) << endl;   // 5
        cout << divide(10, 0) << endl;   // Throws!
        cout << "This never executes" << endl;
    } catch (const runtime_error& e) {
        cout << "Error: " << e.what() << endl;
    }
    cout << "Program continues" << endl;
    return 0;
}
```

When `throw` is executed, the program immediately stops executing the current function, unwinds the call stack (destroying local objects along the way), and transfers control to the nearest matching `catch` block. If no catch block matches, `std::terminate()` is called and the program crashes.

C++ exceptions can be of any type: integers, strings, standard exception classes, or custom classes. The standard library provides a hierarchy of exception classes in `` rooted at `std::exception`.

## Why Does Exception Handling Matter?

Exception handling separates error-handling logic from normal logic, making code cleaner, safer, and more maintainable. It is essential for writing robust C++ programs.

### 1. Separating Error Handling from Normal Logic

Without exceptions, Arjun must check return values after every function call, mixing error checks with business logic. With exceptions, the happy path is clean and all error handling is consolidated in catch blocks.

### 2. Stack Unwinding and RAII

When an exception is thrown, C++ guarantees that destructors of all local objects are called as the stack unwinds. This is the foundation of **RAII** (Resource Acquisition Is Initialization), where resources (memory, files, locks) are automatically released by destructors. This is one of the most important C++ concepts and a frequent interview topic.

### 3. Interview and Placement Essential

Companies like Google, Microsoft, Amazon, and Flipkart ask about exception safety guarantees (basic, strong, no-throw), the difference between catch by value and catch by reference, stack unwinding behavior, noexcept, and the interaction between exceptions and constructors/destructors.

### 4. Writing Custom Exception Hierarchies

Real-world C++ codebases define custom exception classes that derive from `std::exception`. When Kavya writes a database library, she might define `ConnectionError`, `QueryError`, and `TimeoutError`, all inheriting from a base `DatabaseError`. Callers can catch specific errors or the base class.

### 5. noexcept and Performance

The `noexcept` specifier tells the compiler that a function will not throw. This enables optimizations (e.g., move operations in STL containers prefer noexcept move constructors) and makes contracts explicit.

## Detailed Explanation

### 1. Basic try-catch-throw

The `try` block contains code that might throw. The `catch` block handles the exception. `throw` creates the exception object.

```
try {
    // Code that might throw
    throw exception_object;
} catch (ExceptionType& e) {
    // Handle the exception
    cout << e.what() << endl;
}
```

Execution flow: when `throw` executes, control immediately transfers to the matching `catch`. Code after the `throw` statement (within the try block) is skipped.

### 2. Catching by Reference

Always catch exceptions by **const reference**, not by value:

```
// Good: catch by const reference
catch (const runtime_error& e) {
    cout << e.what() << endl;
}

// Bad: catch by value (causes slicing)
catch (runtime_error e) {  // Derived exception sliced to base!
    cout << e.what() << endl;
}
```

Catching by value creates a copy and slices derived exception objects to the base type. Catching by reference preserves polymorphism and avoids unnecessary copies.

### 3. Multiple catch Blocks

You can have multiple catch blocks for different exception types. They are tried in order, and the first match handles the exception:

```
try {
    // ... code ...
} catch (const invalid_argument& e) {
    cout << "Invalid argument: " << e.what() << endl;
} catch (const out_of_range& e) {
    cout << "Out of range: " << e.what() << endl;
} catch (const exception& e) {
    cout << "Other error: " << e.what() << endl;
} catch (...) {
    cout << "Unknown error" << endl;
}
```

**Order matters:** put more specific catches first, more general catches last. If `catch(const exception&)` comes first, it will catch all standard exceptions, and the more specific catches will never execute.

### 4. Catch-All (...)

The catch-all handler `catch(...)` catches any exception of any type:

```
try {
    throw 42;           // throw an int
} catch (...) {
    cout << "Caught something" << endl;
}
```

This is useful as a last resort but should be used sparingly because you lose information about the exception type.

### 5. Rethrowing Exceptions

Inside a catch block, you can rethrow the current exception using `throw;` (with no operand):

```
void process() {
    try {
        riskyOperation();
    } catch (const exception& e) {
        cout << "Logging: " << e.what() << endl;
        throw;  // Rethrow the SAME exception (preserves derived type)
    }
}

try {
    process();
} catch (const exception& e) {
    cout << "Caught rethrown: " << e.what() << endl;
}
```

Using `throw;` preserves the original exception type. Using `throw e;` would create a copy and potentially slice the exception.

### 6. Standard Exception Hierarchy

The `` header provides a hierarchy of exception classes:

```
exception (base class)
  logic_error
    invalid_argument
    domain_error
    length_error
    out_of_range
  runtime_error
    range_error
    overflow_error
    underflow_error
```

All standard exceptions have a `what()` method that returns a C-string description. `logic_error` represents programming errors (precondition violations). `runtime_error` represents errors that can only be detected at runtime.

### 7. Custom Exception Classes

Define custom exceptions by inheriting from `std::exception` or its subclasses:

```
class DatabaseError : public runtime_error {
public:
    DatabaseError(const string& msg) : runtime_error(msg) {}
};

class ConnectionError : public DatabaseError {
    string host;
public:
    ConnectionError(const string& h)
        : DatabaseError("Connection failed to " + h), host(h) {}
    string getHost() const { return host; }
};

try {
    throw ConnectionError("db.example.com");
} catch (const ConnectionError& e) {
    cout << e.what() << " (host: " << e.getHost() << ")" << endl;
} catch (const DatabaseError& e) {
    cout << "DB error: " << e.what() << endl;
}
```

### 8. noexcept Specifier

The `noexcept` specifier declares that a function does not throw exceptions:

```
void safeFunction() noexcept {
    // Guaranteed not to throw
}

void riskyFunction() noexcept(false) {
    // May throw (default behavior)
}

// Conditional noexcept
template
void process(T& val) noexcept(noexcept(val.doWork())) {
    val.doWork();
}
```

If a `noexcept` function throws, `std::terminate()` is called immediately. STL containers use `noexcept` to decide whether to move or copy: `vector` reallocation prefers `noexcept` move constructors for exception safety.

### 9. Stack Unwinding

When an exception is thrown, the runtime unwinds the call stack, destroying all local objects (in reverse order of construction) for each stack frame between the throw and the matching catch:

```
class Resource {
    string name;
public:
    Resource(string n) : name(n) { cout << "Acquired " << name << endl; }
    ~Resource() { cout << "Released " << name << endl; }
};

void inner() {
    Resource r3("C");
    throw runtime_error("Error in inner");
}

void outer() {
    Resource r2("B");
    inner();
}

int main() {
    try {
        Resource r1("A");
        outer();
    } catch (const exception& e) {
        cout << e.what() << endl;
    }
}
// Output: Acquired A, Acquired B, Acquired C,
//         Released C, Released B, Released A,
//         Error in inner
```

### 10. Exception Safety Guarantees

C++ code can provide three levels of exception safety:

- **No-throw guarantee:** The function never throws. Marked `noexcept`. Destructors and swap should provide this.
- **Strong guarantee:** If an exception is thrown, the state is rolled back to before the function was called (commit-or-rollback). Achieved using copy-and-swap idiom.
- **Basic guarantee:** If an exception is thrown, the program is in a valid (but possibly changed) state. No resources are leaked. This is the minimum acceptable level.

### 11. RAII and Exceptions

RAII (Resource Acquisition Is Initialization) ties resource lifetime to object lifetime. When an exception causes stack unwinding, RAII objects automatically release their resources:

```
class FileHandle {
    FILE* file;
public:
    FileHandle(const char* name) {
        file = fopen(name, "r");
        if (!file) throw runtime_error("Cannot open file");
    }
    ~FileHandle() {
        if (file) fclose(file);  // Always closes, even during exception
    }
};

void process() {
    FileHandle f("data.txt");  // Opened
    // ... code that might throw ...
    // f's destructor runs even if an exception is thrown
}
```

Smart pointers (`unique_ptr`, `shared_ptr`), `lock_guard`, `fstream`, and `vector` all use RAII. This is why C++ rarely needs `finally` blocks (unlike Java).

## Code Examples

### Basic try-catch-throw

```cpp
#include <iostream>
#include <stdexcept>
using namespace std;

double divide(double a, double b) {
    if (b == 0)
        throw runtime_error("Division by zero");
    return a / b;
}

int main() {
    try {
        cout << divide(10, 2) << endl;
        cout << divide(10, 0) << endl;
        cout << "This line is skipped" << endl;
    } catch (const runtime_error& e) {
        cout << "Caught: " << e.what() << endl;
    }
    cout << "Program continues normally" << endl;
    return 0;
}
```

The first `divide(10, 2)` succeeds and prints 5. The second `divide(10, 0)` throws a `runtime_error`. Execution jumps to the catch block, skipping the third print. After the catch block, the program continues normally.

**Output:**

```
5
Caught: Division by zero
Program continues normally
```

### Multiple catch Blocks and Catch-All

```cpp
#include <iostream>
#include <stdexcept>
using namespace std;

void test(int code) {
    switch (code) {
        case 1: throw invalid_argument("Bad argument");
        case 2: throw out_of_range("Out of range");
        case 3: throw runtime_error("Runtime error");
        case 4: throw 42;
    }
}

int main() {
    for (int i = 1; i <= 4; i++) {
        try {
            test(i);
        } catch (const invalid_argument& e) {
            cout << "invalid_argument: " << e.what() << endl;
        } catch (const out_of_range& e) {
            cout << "out_of_range: " << e.what() << endl;
        } catch (const exception& e) {
            cout << "exception: " << e.what() << endl;
        } catch (...) {
            cout << "Unknown exception caught" << endl;
        }
    }
    return 0;
}
```

Each exception type is caught by the most specific matching handler. `invalid_argument` and `out_of_range` are caught by their specific handlers. `runtime_error` is caught by `const exception&` (base class). The integer 42 is caught by `catch(...)`.

**Output:**

```
invalid_argument: Bad argument
out_of_range: Out of range
exception: Runtime error
Unknown exception caught
```

### Custom Exception Class Hierarchy

```cpp
#include <iostream>
#include <stdexcept>
#include <string>
using namespace std;

class AppError : public runtime_error {
public:
    AppError(const string& msg) : runtime_error(msg) {}
};

class NetworkError : public AppError {
    int code;
public:
    NetworkError(const string& msg, int c)
        : AppError(msg), code(c) {}
    int getCode() const { return code; }
};

class AuthError : public AppError {
    string user;
public:
    AuthError(const string& u)
        : AppError("Authentication failed for " + u), user(u) {}
    string getUser() const { return user; }
};

void authenticate(const string& user, const string& pass) {
    if (user.empty()) throw NetworkError("No connection", 503);
    if (pass != "secret") throw AuthError(user);
    cout << user << " authenticated successfully" << endl;
}

int main() {
    string users[] = {"", "Arjun", "Kavya"};
    string passes[] = {"x", "wrong", "secret"};

    for (int i = 0; i < 3; i++) {
        try {
            authenticate(users[i], passes[i]);
        } catch (const NetworkError& e) {
            cout << "Network (" << e.getCode() << "): " << e.what() << endl;
        } catch (const AuthError& e) {
            cout << "Auth failed: " << e.getUser() << " - " << e.what() << endl;
        } catch (const AppError& e) {
            cout << "App error: " << e.what() << endl;
        }
    }
    return 0;
}
```

Custom exception hierarchy: `AppError` derives from `runtime_error`. `NetworkError` and `AuthError` derive from `AppError`. Each carries context-specific data (error code, username). Catch blocks are ordered most specific to least specific.

**Output:**

```
Network (503): No connection
Auth failed: Arjun - Authentication failed for Arjun
Kavya authenticated successfully
```

### Stack Unwinding and RAII

```cpp
#include <iostream>
#include <stdexcept>
#include <string>
using namespace std;

class Resource {
    string name;
public:
    Resource(string n) : name(n) {
        cout << "  Acquired: " << name << endl;
    }
    ~Resource() {
        cout << "  Released: " << name << endl;
    }
};

void level3() {
    Resource r("Database Connection");
    throw runtime_error("Query failed");
}

void level2() {
    Resource r("File Handle");
    level3();
}

void level1() {
    Resource r("Mutex Lock");
    level2();
}

int main() {
    try {
        cout << "Starting..." << endl;
        level1();
    } catch (const exception& e) {
        cout << "Caught: " << e.what() << endl;
    }
    cout << "All resources released" << endl;
    return 0;
}
```

When the exception is thrown in `level3()`, the stack unwinds through `level2()` and `level1()`. Each `Resource` destructor runs automatically, releasing resources in reverse order. This is RAII: resource lifetime is tied to object lifetime.

**Output:**

```
Starting...
  Acquired: Mutex Lock
  Acquired: File Handle
  Acquired: Database Connection
  Released: Database Connection
  Released: File Handle
  Released: Mutex Lock
Caught: Query failed
All resources released
```

### Rethrowing Exceptions

```cpp
#include <iostream>
#include <stdexcept>
using namespace std;

void inner() {
    throw runtime_error("Original error");
}

void middle() {
    try {
        inner();
    } catch (const exception& e) {
        cout << "Middle caught: " << e.what() << endl;
        cout << "Logging and rethrowing..." << endl;
        throw;  // Rethrow preserves the original exception
    }
}

int main() {
    try {
        middle();
    } catch (const exception& e) {
        cout << "Main caught: " << e.what() << endl;
    }
    return 0;
}
```

`middle()` catches the exception, logs it, and rethrows using `throw;` (no operand). The original exception is preserved and caught again in `main()`. Using `throw e;` instead would create a copy, potentially slicing derived exceptions.

**Output:**

```
Middle caught: Original error
Logging and rethrowing...
Main caught: Original error
```

### noexcept and Its Effect

```cpp
#include <iostream>
#include <type_traits>
using namespace std;

void safeFunc() noexcept {
    cout << "Safe function (noexcept)" << endl;
}

void riskyFunc() {
    cout << "Risky function (may throw)" << endl;
}

class MyClass {
public:
    MyClass() noexcept { cout << "Constructed" << endl; }
    ~MyClass() noexcept { cout << "Destroyed" << endl; }
    MyClass(MyClass&&) noexcept { cout << "Move constructed" << endl; }
};

int main() {
    cout << "safeFunc noexcept: " << noexcept(safeFunc()) << endl;
    cout << "riskyFunc noexcept: " << noexcept(riskyFunc()) << endl;

    safeFunc();
    riskyFunc();

    MyClass a;
    MyClass b = move(a);

    cout << "is_nothrow_move_constructible: "
         << is_nothrow_move_constructible<MyClass>::value << endl;
    return 0;
}
```

The `noexcept` operator (used in expressions) returns true if the expression cannot throw. `noexcept` on functions guarantees no exceptions. STL uses `is_nothrow_move_constructible` to decide between move and copy during reallocation.

**Output:**

```
safeFunc noexcept: 1
riskyFunc noexcept: 0
Safe function (noexcept)
Risky function (may throw)
Constructed
Move constructed
is_nothrow_move_constructible: 1
Destroyed
Destroyed
```

## Common Mistakes

### Catching Exceptions by Value (Slicing)

**Wrong:**

```
class Base : public exception {
public:
    const char* what() const noexcept override { return "Base"; }
};
class Derived : public Base {
public:
    const char* what() const noexcept override { return "Derived"; }
};

try {
    throw Derived();
} catch (Base e) {  // Caught by VALUE: slicing!
    cout << e.what() << endl;  // Prints "Base", not "Derived"!
}
```

Prints "Base" instead of "Derived". The Derived exception is sliced to Base when caught by value.

**Correct:**

```
try {
    throw Derived();
} catch (const Base& e) {  // Caught by REFERENCE: no slicing
    cout << e.what() << endl;  // Prints "Derived" (correct)
}
```

Always catch exceptions by const reference. Catching by value creates a copy that slices off the derived part, losing polymorphism and context-specific data.

### Wrong Order of catch Blocks (Base Before Derived)

**Wrong:**

```
try {
    throw out_of_range("Index error");
} catch (const exception& e) {  // Catches everything!
    cout << "exception: " << e.what() << endl;
} catch (const out_of_range& e) {  // Never reached!
    cout << "out_of_range: " << e.what() << endl;
}
```

The out_of_range handler is never reached because catch(const exception&) matches first. Some compilers will warn about this.

**Correct:**

```
try {
    throw out_of_range("Index error");
} catch (const out_of_range& e) {  // Specific first
    cout << "out_of_range: " << e.what() << endl;
} catch (const exception& e) {  // General last
    cout << "exception: " << e.what() << endl;
}
```

catch blocks are tried in order. Put more specific (derived) types first and more general (base) types last. Otherwise, the general handler catches everything and the specific ones are unreachable.

### Throwing in a Destructor

**Wrong:**

```
class Bad {
public:
    ~Bad() {
        throw runtime_error("Error in destructor");
        // If this destructor runs during stack unwinding
        // from another exception, std::terminate() is called!
    }
};
```

If the destructor throws during stack unwinding (while another exception is active), std::terminate() is called and the program crashes. Destructors should never throw.

**Correct:**

```
class Good {
public:
    ~Good() noexcept {
        try {
            // cleanup that might fail
        } catch (...) {
            // Swallow the exception, log it if possible
        }
    }
};
```

Destructors should be `noexcept` (they are implicitly noexcept in C++11+). If cleanup can fail, catch and handle the exception inside the destructor. Never let an exception escape a destructor.

### Using throw e Instead of throw for Rethrowing

**Wrong:**

```
class DetailedError : public runtime_error {
public:
    DetailedError(const string& msg) : runtime_error(msg) {}
    const char* what() const noexcept override { return "Detailed!"; }
};

try {
    throw DetailedError("test");
} catch (const runtime_error& e) {
    throw e;  // Creates a COPY, slices to runtime_error!
}
```

throw e creates a copy of e as runtime_error, losing the DetailedError type. The rethrown exception is now a plain runtime_error.

**Correct:**

```
try {
    throw DetailedError("test");
} catch (const runtime_error& e) {
    throw;  // Rethrows the ORIGINAL exception, preserving type
}
```

Use `throw;` (no operand) to rethrow the current exception. This preserves the original dynamic type. `throw e;` creates a new exception from the caught reference, which slices to the catch parameter type.

### Not Catching Exceptions (Program Terminates)

**Wrong:**

```
void doWork() {
    throw runtime_error("Unhandled!");
}

int main() {
    doWork();  // No try-catch: program crashes!
    return 0;
}
```

If no catch block matches a thrown exception, std::terminate() is called and the program crashes with an unhandled exception error.

**Correct:**

```
void doWork() {
    throw runtime_error("Handled now!");
}

int main() {
    try {
        doWork();
    } catch (const exception& e) {
        cout << "Caught: " << e.what() << endl;
    }
    return 0;
}
```

Every `throw` must have a matching `catch` somewhere in the call stack. If there is no matching catch block, the program calls `std::terminate()` and crashes. Always wrap risky operations in try-catch at appropriate levels.

## Summary

- Exception handling uses three keywords: try (wraps code that might throw), throw (creates an exception), and catch (handles the exception).
- When throw executes, the stack unwinds: local objects are destroyed in reverse order, and control transfers to the nearest matching catch block.
- Always catch exceptions by const reference (const exception&) to avoid slicing and unnecessary copies.
- Multiple catch blocks are tried in order. Put specific (derived) types first and general (base) types last. catch(...) is the catch-all handler.
- Use throw; (no operand) to rethrow the current exception. throw e; creates a copy and potentially slices derived exceptions.
- The standard exception hierarchy is rooted at std::exception with logic_error and runtime_error as key branches. Use  for standard exception classes.
- Custom exception classes should inherit from std::exception or its subclasses and override what() to provide descriptive error messages.
- noexcept declares that a function will not throw. If a noexcept function throws, std::terminate() is called. STL prefers noexcept move constructors.
- RAII ties resource lifetime to object lifetime. Stack unwinding during exceptions automatically calls destructors, releasing resources. This is why C++ does not need finally blocks.
- Exception safety guarantees: no-throw (never throws, marked noexcept), strong (commit-or-rollback), basic (valid state, no leaks). Destructors and swap must provide no-throw.
- Never throw in destructors. If a destructor throws during stack unwinding, std::terminate() is called.
- Exception handling separates error logic from normal logic, making code cleaner and more maintainable than return-code error handling.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/exception-handling-in-cpp/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/exception-handling-in-cpp/practice/*
