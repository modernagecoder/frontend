---
title: "Practice: Exception Handling (try, catch, throw)"
description: "52 practice problems for Exception Handling (try, catch, throw) in C++"
slug: exception-handling-in-cpp-practice
canonical: https://learn.modernagecoders.com/resources/cpp/exception-handling-in-cpp/practice
category: "C++"
---
# Practice: Exception Handling (try, catch, throw)

**Total questions:** 52

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
#include 
#include 
using namespace std;
int main() {
    try {
        cout << "A" << endl;
        throw runtime_error("error");
        cout << "B" << endl;
    } catch (const runtime_error& e) {
        cout << "C: " << e.what() << endl;
    }
    cout << "D" << endl;
    return 0;
}
```

*Hint:* After throw, execution skips to the catch block. Code after throw in the try block is skipped.

**Answer:** `A`
`C: error`
`D`

"A" prints before the throw. The throw transfers control to the catch block, skipping "B". The catch block prints "C: error". After the catch block, "D" prints.

### Q2. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    try {
        throw 42;
    } catch (int e) {
        cout << "Caught: " << e << endl;
    }
    return 0;
}
```

*Hint:* You can throw any type in C++, including integers.

**Answer:** `Caught: 42`

C++ allows throwing any type. `throw 42;` throws an `int`. The `catch(int e)` handler catches it and prints 42.

### Q3. [Easy] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    try {
        throw out_of_range("index 10");
    } catch (const exception& e) {
        cout << e.what() << endl;
    }
    return 0;
}
```

*Hint:* out_of_range inherits from exception. catch(const exception&) catches it.

**Answer:** `index 10`

`out_of_range` derives from `logic_error` which derives from `exception`. The `catch(const exception&)` handler catches any standard exception and calls `what()`.

### Q4. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    try {
        cout << "Before" << endl;
        throw "Error message";
    } catch (const char* msg) {
        cout << msg << endl;
    }
    cout << "After" << endl;
    return 0;
}
```

*Hint:* A string literal "Error message" is of type const char*.

**Answer:** `Before`
`Error message`
`After`

The string literal is caught by `catch(const char*)`. After the catch block, execution continues with "After".

### Q5. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    try {
        try {
            throw 100;
        } catch (int e) {
            cout << "Inner: " << e << endl;
            throw;  // Rethrow
        }
    } catch (int e) {
        cout << "Outer: " << e << endl;
    }
    return 0;
}
```

*Hint:* throw; rethrows the same exception to the outer try-catch.

**Answer:** `Inner: 100`
`Outer: 100`

The inner catch handles the exception and rethrows it. The outer catch catches the rethrown exception. Both print 100.

### Q6. [Medium] What is the output?

```
#include 
#include 
using namespace std;
void func(int x) {
    if (x < 0) throw invalid_argument("Negative");
    if (x == 0) throw runtime_error("Zero");
    cout << "OK: " << x << endl;
}
int main() {
    int vals[] = {5, 0, -1};
    for (int i = 0; i < 3; i++) {
        try {
            func(vals[i]);
        } catch (const invalid_argument& e) {
            cout << "Invalid: " << e.what() << endl;
        } catch (const runtime_error& e) {
            cout << "Runtime: " << e.what() << endl;
        }
    }
    return 0;
}
```

*Hint:* 5 is valid. 0 throws runtime_error. -1 throws invalid_argument.

**Answer:** `OK: 5`
`Runtime: Zero`
`Invalid: Negative`

First call (5) succeeds. Second call (0) throws `runtime_error`. Third call (-1) throws `invalid_argument`. Each is caught by the appropriate handler.

### Q7. [Medium] What is the output?

```
#include 
using namespace std;
class Obj {
    string name;
public:
    Obj(string n) : name(n) { cout << name << " created" << endl; }
    ~Obj() { cout << name << " destroyed" << endl; }
};
void bar() {
    Obj o2("B");
    throw 1;
}
void foo() {
    Obj o1("A");
    bar();
}
int main() {
    try {
        foo();
    } catch (int) {
        cout << "Caught" << endl;
    }
    return 0;
}
```

*Hint:* Stack unwinding: B is destroyed first, then A, as the exception propagates up.

**Answer:** `A created`
`B created`
`B destroyed`
`A destroyed`
`Caught`

Objects are destroyed in reverse construction order during stack unwinding. B is destroyed first (in bar), then A (in foo), then the catch block in main handles the exception.

### Q8. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    try {
        throw 3.14;
    } catch (int e) {
        cout << "int: " << e << endl;
    } catch (double e) {
        cout << "double: " << e << endl;
    } catch (...) {
        cout << "unknown" << endl;
    }
    return 0;
}
```

*Hint:* 3.14 is a double. catch(int) does not match because there is no implicit conversion for exception matching.

**Answer:** `double: 3.14`

Exception matching does not perform implicit type conversions (unlike function overloading). `3.14` is a `double`, so `catch(int)` does not match. `catch(double)` matches.

### Q9. [Medium] What is the output?

```
#include 
#include 
using namespace std;
void process() {
    try {
        throw runtime_error("Error");
    } catch (const exception& e) {
        cout << "Caught: " << e.what() << endl;
    }
    cout << "After catch in process" << endl;
}
int main() {
    try {
        process();
        cout << "After process" << endl;
    } catch (const exception& e) {
        cout << "Main caught: " << e.what() << endl;
    }
    return 0;
}
```

*Hint:* The exception is caught inside process(). It does not propagate to main().

**Answer:** `Caught: Error`
`After catch in process`
`After process`

The exception is caught inside `process()`, not rethrown. `process()` continues after its catch block. `main()`'s catch block is never entered because no exception escapes `process()`.

### Q10. [Hard] What is the output?

```
#include 
#include 
using namespace std;
class Base : public exception {
public:
    const char* what() const noexcept override { return "Base"; }
};
class Derived : public Base {
public:
    const char* what() const noexcept override { return "Derived"; }
};
int main() {
    try {
        throw Derived();
    } catch (const Base& e) {
        cout << e.what() << endl;
    }
    try {
        throw Derived();
    } catch (Base e) {
        cout << e.what() << endl;
    }
    return 0;
}
```

*Hint:* First catch is by reference (polymorphic). Second catch is by value (slicing).

**Answer:** `Derived`
`Base`

Catching by reference preserves the dynamic type, so `what()` returns "Derived". Catching by value slices the exception to `Base`, so `what()` returns "Base". This is why you should always catch by reference.

### Q11. [Hard] What is the output?

```
#include 
using namespace std;
class Guard {
    string name;
public:
    Guard(string n) : name(n) { cout << "Lock " << name << endl; }
    ~Guard() { cout << "Unlock " << name << endl; }
};
void c() { Guard g("C"); throw 1; }
void b() { Guard g("B"); c(); }
void a() { Guard g("A"); b(); }
int main() {
    try { a(); }
    catch (int) { cout << "Handled" << endl; }
    return 0;
}
```

*Hint:* Three levels of function calls, each with a Guard. Exception in c() unwinds through b() and a().

**Answer:** `Lock A`
`Lock B`
`Lock C`
`Unlock C`
`Unlock B`
`Unlock A`
`Handled`

Guards are acquired as we go deeper: A, B, C. When the exception is thrown in c(), the stack unwinds, releasing guards in reverse: C, B, A. Then the catch in main handles the exception.

### Q12. [Hard] What is the output?

```
#include 
#include 
using namespace std;
class MyErr : public runtime_error {
    int code;
public:
    MyErr(int c, const string& m) : runtime_error(m), code(c) {}
    int getCode() const { return code; }
};
void test(int x) {
    if (x == 1) throw MyErr(404, "Not Found");
    if (x == 2) throw MyErr(500, "Server Error");
    if (x == 3) throw runtime_error("Generic");
}
int main() {
    for (int i = 1; i <= 3; i++) {
        try {
            test(i);
        } catch (const MyErr& e) {
            cout << e.getCode() << ": " << e.what() << endl;
        } catch (const runtime_error& e) {
            cout << "runtime: " << e.what() << endl;
        }
    }
    return 0;
}
```

*Hint:* MyErr is more specific than runtime_error. Catch order: MyErr first, runtime_error second.

**Answer:** `404: Not Found`
`500: Server Error`
`runtime: Generic`

Tests 1 and 2 throw `MyErr`, caught by the specific handler. Test 3 throws `runtime_error`, which does not match `MyErr` but matches `runtime_error`.

### Q13. [Hard] What is the output?

```
#include 
using namespace std;
void func() noexcept {
    cout << "In noexcept function" << endl;
}
int main() {
    cout << noexcept(func()) << endl;
    cout << noexcept(throw 1) << endl;
    func();
    return 0;
}
```

*Hint:* noexcept(expr) returns true if expr cannot throw. func() is noexcept. throw 1 is not.

**Answer:** `1`
`0`
`In noexcept function`

`noexcept(func())` returns 1 (true) because `func` is declared `noexcept`. `noexcept(throw 1)` returns 0 (false) because throw always throws. Then `func()` executes normally.

### Q14. [Easy] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    try {
        throw invalid_argument("bad input");
    } catch (const invalid_argument& e) {
        cout << e.what() << endl;
    }
    cout << "done" << endl;
    return 0;
}
```

*Hint:* invalid_argument is caught by the matching handler. Program continues after catch.

**Answer:** `bad input`
`done`

The `invalid_argument` exception is caught. `what()` returns "bad input". After the catch block, the program continues with "done".

### Q15. [Medium] What is the output?

```
#include 
using namespace std;
class Cleanup {
    string name;
public:
    Cleanup(string n) : name(n) { cout << "+" << name << " "; }
    ~Cleanup() { cout << "-" << name << " "; }
};
void risky() {
    Cleanup c("R");
    throw 1;
}
int main() {
    Cleanup c("M");
    try {
        risky();
    } catch (int) {
        cout << "caught ";
    }
    cout << "end" << endl;
    return 0;
}
```

*Hint:* M is created in main. R is created in risky, then destroyed during unwinding. M is destroyed at end of main.

**Answer:** `+M +R -R caught end -M `

M is created. R is created in risky(). When throw executes, R is destroyed (stack unwinding). The catch handles the exception. At end of main, M is destroyed.

### Q16. [Medium] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    try {
        try {
            throw runtime_error("deep");
        } catch (const logic_error& e) {
            cout << "logic: " << e.what() << endl;
        }
    } catch (const runtime_error& e) {
        cout << "runtime: " << e.what() << endl;
    }
    return 0;
}
```

*Hint:* The inner catch expects logic_error but receives runtime_error. They are different branches of the exception hierarchy.

**Answer:** `runtime: deep`

`runtime_error` does not inherit from `logic_error`. The inner catch does not match. The exception propagates to the outer try-catch, where `catch(const runtime_error&)` matches.

### Q17. [Hard] What is the output?

```
#include 
#include 
using namespace std;
class MyEx : public runtime_error {
    int code;
public:
    MyEx(int c) : runtime_error("Error " + to_string(c)), code(c) {}
    int getCode() const { return code; }
};
void test() {
    try {
        throw MyEx(404);
    } catch (const runtime_error& e) {
        cout << e.what() << endl;
        throw;
    }
}
int main() {
    try {
        test();
    } catch (const MyEx& e) {
        cout << "Code: " << e.getCode() << endl;
    }
    return 0;
}
```

*Hint:* test catches as runtime_error&, logs, rethrows. main catches as MyEx&. throw; preserves the original type.

**Answer:** `Error 404`
`Code: 404`

`test()` catches as `runtime_error&` and prints the message. `throw;` rethrows the original `MyEx` (type preserved). `main()` catches it as `MyEx&` and accesses `getCode()`.

## Mixed Questions

### Q1. [Easy] What are the three keywords used for exception handling in C++?

*Hint:* Think about wrapping code, creating exceptions, and handling them.

**Answer:** try (wraps code that might throw), throw (creates and throws an exception), and catch (catches and handles the exception).

The `try` block contains code that might throw. `throw` creates the exception object and transfers control. `catch` handles the exception. Code after throw in the try block is skipped.

### Q2. [Easy] Why should you catch exceptions by const reference instead of by value?

*Hint:* Think about what happens to a derived exception when caught as a base class value.

**Answer:** Catching by value creates a copy and slices derived exceptions to the base type, losing polymorphism and context data. Catching by const reference preserves the original exception type and avoids unnecessary copies.

If you throw a `Derived` exception and catch it as `Base e` (by value), the Derived part is sliced off. `e.what()` returns the Base message. Catching as `const Base& e` preserves the Derived type.

### Q3. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    try {
        cout << "A" << endl;
    } catch (...) {
        cout << "B" << endl;
    }
    cout << "C" << endl;
    return 0;
}
```

*Hint:* No exception is thrown. The catch block is skipped.

**Answer:** `A`
`C`

No exception is thrown, so the try block executes normally and the catch block is skipped entirely. Execution continues with "C".

### Q4. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    try {
        throw "Ravi";
    } catch (const char* name) {
        cout << "Hello, " << name << endl;
    }
    return 0;
}
```

*Hint:* String literals are of type const char*. The catch matches this type.

**Answer:** `Hello, Ravi`

The string literal "Ravi" is of type `const char*`. The catch block receives it and prints the greeting.

### Q5. [Medium] What is the output?

```
#include 
#include 
using namespace std;
int safeDivide(int a, int b) {
    if (b == 0) throw domain_error("Division by zero");
    return a / b;
}
int main() {
    try {
        cout << safeDivide(10, 2) << endl;
        cout << safeDivide(10, 0) << endl;
    } catch (const domain_error& e) {
        cout << e.what() << endl;
    }
    try {
        cout << safeDivide(15, 3) << endl;
    } catch (const domain_error& e) {
        cout << e.what() << endl;
    }
    return 0;
}
```

*Hint:* First try: 10/2 succeeds, 10/0 throws. Second try: 15/3 succeeds.

**Answer:** `5`
`Division by zero`
`5`

First try: `10/2=5` prints. `10/0` throws, caught by the handler. Second try: `15/3=5` prints normally. Each try-catch is independent.

### Q6. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    try {
        try {
            throw 10;
        } catch (int e) {
            cout << "Inner: " << e << endl;
            throw (e + 5);  // Throw new exception
        }
    } catch (int e) {
        cout << "Outer: " << e << endl;
    }
    return 0;
}
```

*Hint:* throw (e + 5) throws a NEW exception with value 15, not a rethrow.

**Answer:** `Inner: 10`
`Outer: 15`

The inner catch receives 10. `throw (e + 5)` throws a new exception with value 15 (not a rethrow). The outer catch receives 15.

### Q7. [Medium] What is the output?

```
#include 
#include 
using namespace std;
void level2() {
    throw runtime_error("Deep error");
}
void level1() {
    level2();
}
int main() {
    try {
        level1();
    } catch (const exception& e) {
        cout << e.what() << endl;
    }
    return 0;
}
```

*Hint:* The exception thrown in level2 propagates through level1 (which has no catch) to main.

**Answer:** `Deep error`

The exception propagates up the call stack. `level2()` throws, `level1()` has no try-catch so it propagates further, and `main()`'s catch block handles it.

### Q8. [Hard] What is the output?

```
#include 
using namespace std;
class Resource {
    int id;
public:
    Resource(int i) : id(i) { cout << "R" << id << "+ "; }
    ~Resource() { cout << "R" << id << "- "; }
};
void func() {
    Resource r1(1), r2(2);
    throw 0;
    Resource r3(3);
}
int main() {
    try {
        Resource r0(0);
        func();
    } catch (int) {
        cout << "caught "; 
    }
    cout << "end" << endl;
    return 0;
}
```

*Hint:* r3 is never created (after throw). r2 and r1 are destroyed during unwinding, then r0.

**Answer:** `R0+ R1+ R2+ R2- R1- R0- caught end`

R0, R1, R2 are created. The throw skips R3. Stack unwinding destroys R2, R1 (in func), then R0 (in main's try). Then the catch handles the exception.

### Q9. [Hard] What is the output?

```
#include 
#include 
using namespace std;
class AppError : public runtime_error {
public:
    AppError(const string& msg) : runtime_error(msg) {}
};
void step3() { throw AppError("Step 3 failed"); }
void step2() {
    try { step3(); }
    catch (const AppError& e) {
        cout << "step2: " << e.what() << endl;
        throw;  // Rethrow
    }
}
void step1() {
    try { step2(); }
    catch (const runtime_error& e) {
        cout << "step1: " << e.what() << endl;
    }
}
int main() {
    step1();
    cout << "Done" << endl;
    return 0;
}
```

*Hint:* step3 throws AppError. step2 catches, logs, rethrows. step1 catches as runtime_error.

**Answer:** `step2: Step 3 failed`
`step1: Step 3 failed`
`Done`

`step2` catches the `AppError`, logs it, and rethrows. `step1` catches it as `runtime_error` (base class). The rethrown exception preserves its `AppError` type and message.

### Q10. [Hard] What is the output?

```
#include 
#include 
using namespace std;
int convert(const string& s) {
    try {
        int val = stoi(s);
        if (val < 0) throw domain_error("Negative");
        return val;
    } catch (const invalid_argument&) {
        throw runtime_error("Not a number: " + s);
    }
}
int main() {
    string inputs[] = {"42", "abc", "-5"};
    for (int i = 0; i < 3; i++) {
        try {
            cout << convert(inputs[i]) << endl;
        } catch (const domain_error& e) {
            cout << "Domain: " << e.what() << endl;
        } catch (const runtime_error& e) {
            cout << "Runtime: " << e.what() << endl;
        }
    }
    return 0;
}
```

*Hint:* "42" succeeds. "abc" makes stoi throw invalid_argument, which is caught and rethrown as runtime_error. "-5" throws domain_error.

**Answer:** `42`
`Runtime: Not a number: abc`
`Domain: Negative`

"42" converts successfully. "abc" causes `stoi` to throw `invalid_argument`, which is caught and rethrown as `runtime_error`. "-5" converts to -5 but fails the negativity check, throwing `domain_error`.

## Multiple Choice Questions

### Q1. [Easy] Which keyword is used to throw an exception in C++?

**Answer:** B

**B is correct.** C++ uses `throw` to create and throw exceptions. Python uses `raise` (A). `error` and `except` are not C++ keywords.

### Q2. [Easy] What happens if an exception is thrown but no catch block matches?

**Answer:** C

**C is correct.** If no matching catch block is found, the runtime calls `std::terminate()`, which by default calls `std::abort()`, crashing the program.

### Q3. [Easy] What does catch(...) do?

**Answer:** B

**B is correct.** The `catch(...)` handler (catch-all) catches exceptions of any type. It is used as a last resort when you want to handle any exception regardless of type.

### Q4. [Easy] Which header provides the standard exception classes like runtime_error and logic_error?

**Answer:** B

**B is correct.** `` provides `runtime_error`, `logic_error`, `invalid_argument`, `out_of_range`, etc. `` provides only the base `std::exception` class.

### Q5. [Easy] What method does std::exception provide to get the error message?

**Answer:** B

**B is correct.** `std::exception` and its subclasses provide the `what()` virtual method, which returns a `const char*` description of the error.

### Q6. [Medium] What is stack unwinding in the context of exceptions?

**Answer:** B

**B is correct.** Stack unwinding is the automatic destruction of local objects (calling their destructors) in each stack frame as the runtime searches for a matching catch block. This ensures RAII resources are properly released.

### Q7. [Medium] Why should catch blocks be ordered from most specific to most general?

**Answer:** B

**B is correct.** Catch blocks are tried in order. If `catch(const exception&)` comes before `catch(const out_of_range&)`, the base class handler catches everything and the specific handler is unreachable.

### Q8. [Medium] What is the difference between throw; and throw e; inside a catch block?

**Answer:** B

**B is correct.** `throw;` rethrows the current exception, preserving its original dynamic type. `throw e;` creates a new exception from the caught reference, potentially slicing a derived exception to the base type.

### Q9. [Medium] What does the noexcept specifier do?

**Answer:** B

**B is correct.** `noexcept` declares that a function will not throw. If a `noexcept` function throws, `std::terminate()` is called. It enables compiler optimizations and is important for STL move operations.

### Q10. [Hard] What are the three levels of exception safety guarantee?

**Answer:** B

**B is correct.** No-throw: function never throws (noexcept). Strong: if exception occurs, state rolls back completely. Basic: if exception occurs, program is in a valid state with no resource leaks.

### Q11. [Hard] Why should destructors never throw exceptions?

**Answer:** B

**B is correct.** If a destructor throws while the stack is unwinding from another exception (two active exceptions), C++ calls `std::terminate()`. Destructors should be `noexcept` and handle errors internally.

### Q12. [Hard] What is RAII and how does it relate to exceptions?

**Answer:** B

**B is correct.** RAII ensures that resources (memory, files, locks) are released by destructors. Since stack unwinding during exceptions calls destructors of all local objects, RAII guarantees no resource leaks even when exceptions occur. This is why C++ does not need `finally` blocks.

### Q13. [Easy] Can you throw any type as an exception in C++?

**Answer:** C

**C is correct.** C++ allows throwing any type: integers, strings, C-strings, custom classes, or standard exception classes. However, best practice is to throw classes derived from `std::exception`.

### Q14. [Easy] What is the base class of all standard exception classes in C++?

**Answer:** C

**C is correct.** `std::exception` (from ``) is the base class. `logic_error` and `runtime_error` derive from it, and more specific exceptions like `invalid_argument` derive from those.

### Q15. [Medium] What is the strong exception safety guarantee?

**Answer:** B

**B is correct.** The strong guarantee (commit-or-rollback) means either the operation succeeds completely, or if it fails, the state is exactly as it was before the call. The copy-and-swap idiom is commonly used to achieve this.

### Q16. [Medium] Does C++ have a finally block like Java?

**Answer:** B

**B is correct.** C++ does not have `finally`. Instead, it relies on RAII: destructors of local objects automatically run during stack unwinding. This is considered more robust than `finally` because cleanup happens deterministically without explicit blocks.

### Q17. [Hard] What happens if a noexcept function throws an exception?

**Answer:** C

**C is correct.** If a function declared `noexcept` throws an exception, the runtime calls `std::terminate()` immediately. The exception does not propagate, and stack unwinding may or may not occur (implementation-defined).

### Q18. [Medium] Why do STL containers prefer noexcept move constructors?

**Answer:** B

**B is correct.** During reallocation (e.g., vector resize), if a move constructor throws after some elements are moved, the container cannot roll back. With `noexcept` move, the container knows the operation is safe and uses move instead of copy.

### Q19. [Easy] What does the what() method of std::exception return?

**Answer:** B

**B is correct.** The `what()` virtual method returns a `const char*` string that describes the error. Custom exception classes typically override this to provide meaningful error messages.

### Q20. [Hard] What is exception-neutral code?

**Answer:** C

**C is correct.** Exception-neutral code does not handle exceptions itself but allows them to propagate. It still provides the basic guarantee (valid state, no resource leaks) through RAII and proper cleanup, even though it does not catch exceptions.

## Coding Challenges

### Challenge 1. Safe Division with Exception Handling

**Difficulty:** Easy

Write a function safeDivide(int a, int b) that throws a domain_error if b is 0. In main, call it multiple times with different inputs and handle the exception. Show that the program continues after catching the exception.

**Constraints:**

- Use domain_error from . Catch by const reference. Show continuation after catch.

**Sample input:**

```
safeDivide(10, 2), safeDivide(10, 0), safeDivide(15, 3)
```

**Sample output:**

```
10 / 2 = 5
Error: Division by zero
15 / 3 = 5
```

**Solution:**

```cpp
#include <iostream>
#include <stdexcept>
using namespace std;

int safeDivide(int a, int b) {
    if (b == 0) throw domain_error("Division by zero");
    return a / b;
}

int main() {
    int pairs[][2] = {{10, 2}, {10, 0}, {15, 3}};
    for (int i = 0; i < 3; i++) {
        try {
            int result = safeDivide(pairs[i][0], pairs[i][1]);
            cout << pairs[i][0] << " / " << pairs[i][1]
                 << " = " << result << endl;
        } catch (const domain_error& e) {
            cout << "Error: " << e.what() << endl;
        }
    }
    return 0;
}
```

### Challenge 2. Custom Exception Hierarchy for Banking

**Difficulty:** Medium

Create a BankException hierarchy: BankException (base), InsufficientFunds (with amount and balance), InvalidAmount (with amount). Create a BankAccount class with deposit() and withdraw() that throw appropriate exceptions. Demonstrate catching specific and general exceptions.

**Constraints:**

- Custom exceptions inheriting from runtime_error. Include context data (amount, balance). Catch specific before general.

**Sample input:**

```
Account balance: 5000. Deposit -100. Withdraw 3000. Withdraw 5000.
```

**Sample output:**

```
Balance: 5000
InvalidAmount: Cannot deposit -100
Withdrew 3000. Balance: 2000
InsufficientFunds: Cannot withdraw 5000. Balance: 2000
```

**Solution:**

```cpp
#include <iostream>
#include <stdexcept>
#include <string>
using namespace std;

class BankException : public runtime_error {
public:
    BankException(const string& msg) : runtime_error(msg) {}
};

class InsufficientFunds : public BankException {
    double amount, balance;
public:
    InsufficientFunds(double a, double b)
        : BankException("Cannot withdraw " + to_string((int)a)
          + ". Balance: " + to_string((int)b)),
          amount(a), balance(b) {}
};

class InvalidAmount : public BankException {
    double amount;
public:
    InvalidAmount(const string& op, double a)
        : BankException("Cannot " + op + " " + to_string((int)a)),
          amount(a) {}
};

class BankAccount {
    double balance;
public:
    BankAccount(double b) : balance(b) {}
    double getBalance() const { return balance; }
    void deposit(double amt) {
        if (amt <= 0) throw InvalidAmount("deposit", amt);
        balance += amt;
    }
    void withdraw(double amt) {
        if (amt <= 0) throw InvalidAmount("withdraw", amt);
        if (amt > balance) throw InsufficientFunds(amt, balance);
        balance -= amt;
    }
};

int main() {
    BankAccount acc(5000);
    cout << "Balance: " << acc.getBalance() << endl;

    try { acc.deposit(-100); }
    catch (const InvalidAmount& e) { cout << "InvalidAmount: " << e.what() << endl; }

    try {
        acc.withdraw(3000);
        cout << "Withdrew 3000. Balance: " << acc.getBalance() << endl;
    } catch (const BankException& e) { cout << e.what() << endl; }

    try { acc.withdraw(5000); }
    catch (const InsufficientFunds& e) { cout << "InsufficientFunds: " << e.what() << endl; }

    return 0;
}
```

### Challenge 3. RAII Resource Manager with Stack Unwinding

**Difficulty:** Medium

Create a ResourceManager RAII class that acquires a named resource in the constructor and releases it in the destructor. Create a chain of three functions, each creating a ResourceManager. The deepest function throws an exception. Demonstrate that all resources are released during stack unwinding.

**Constraints:**

- RAII pattern. Show destruction order during unwinding. All resources must be released.

**Sample input:**

```
Resources: Database, FileSystem, Network. Exception at Network level.
```

**Sample output:**

```
Acquired: Database
Acquired: FileSystem
Acquired: Network
Released: Network
Released: FileSystem
Released: Database
Handled: Network failure
```

**Solution:**

```cpp
#include <iostream>
#include <stdexcept>
#include <string>
using namespace std;

class ResourceManager {
    string name;
public:
    ResourceManager(const string& n) : name(n) {
        cout << "Acquired: " << name << endl;
    }
    ~ResourceManager() {
        cout << "Released: " << name << endl;
    }
};

void networkLayer() {
    ResourceManager r("Network");
    throw runtime_error("Network failure");
}

void fileLayer() {
    ResourceManager r("FileSystem");
    networkLayer();
}

void dbLayer() {
    ResourceManager r("Database");
    fileLayer();
}

int main() {
    try {
        dbLayer();
    } catch (const exception& e) {
        cout << "Handled: " << e.what() << endl;
    }
    return 0;
}
```

### Challenge 4. Type-Safe Configuration Parser with Exceptions

**Difficulty:** Hard

Create a Config class that stores key-value pairs (string -> string). Provide get(key) that throws KeyNotFound if the key does not exist, and getInt(key) that throws ParseError if the value cannot be converted to int. Both custom exceptions should inherit from ConfigError (which inherits from runtime_error). Demonstrate with valid and invalid lookups.

**Constraints:**

- Custom exception hierarchy. Include key name in error messages. Use stoi for conversion.

**Sample input:**

```
Config: {"port": "8080", "host": "localhost", "debug": "yes"}. Get port as int, host, missing key, debug as int.
```

**Sample output:**

```
port = 8080
host = localhost
KeyNotFound: Key 'timeout' not found
ParseError: Cannot parse 'yes' as int for key 'debug'
```

**Solution:**

```cpp
#include <iostream>
#include <stdexcept>
#include <string>
#include <map>
using namespace std;

class ConfigError : public runtime_error {
public:
    ConfigError(const string& msg) : runtime_error(msg) {}
};

class KeyNotFound : public ConfigError {
public:
    KeyNotFound(const string& key)
        : ConfigError("Key '" + key + "' not found") {}
};

class ParseError : public ConfigError {
public:
    ParseError(const string& key, const string& val)
        : ConfigError("Cannot parse '" + val + "' as int for key '" + key + "'") {}
};

class Config {
    map<string, string> data;
public:
    void set(const string& key, const string& val) { data[key] = val; }

    string get(const string& key) const {
        auto it = data.find(key);
        if (it == data.end()) throw KeyNotFound(key);
        return it->second;
    }

    int getInt(const string& key) const {
        string val = get(key);
        try {
            return stoi(val);
        } catch (const invalid_argument&) {
            throw ParseError(key, val);
        }
    }
};

int main() {
    Config cfg;
    cfg.set("port", "8080");
    cfg.set("host", "localhost");
    cfg.set("debug", "yes");

    try { cout << "port = " << cfg.getInt("port") << endl; }
    catch (const ConfigError& e) { cout << e.what() << endl; }

    try { cout << "host = " << cfg.get("host") << endl; }
    catch (const ConfigError& e) { cout << e.what() << endl; }

    try { cout << cfg.get("timeout") << endl; }
    catch (const KeyNotFound& e) { cout << "KeyNotFound: " << e.what() << endl; }

    try { cout << cfg.getInt("debug") << endl; }
    catch (const ParseError& e) { cout << "ParseError: " << e.what() << endl; }

    return 0;
}
```

### Challenge 5. Transaction System with Strong Exception Safety

**Difficulty:** Hard

Create a simple Ledger class that maintains a list of transactions (amounts). Implement transfer(from_ledger, to_ledger, amount) that provides the strong exception safety guarantee: if the deposit to the destination fails (e.g., exceeds a max balance), the withdrawal from the source is rolled back. Demonstrate a successful and a failed transfer.

**Constraints:**

- Strong exception safety: failed transfer must leave both ledgers unchanged. Use RAII or rollback pattern.

**Sample input:**

```
Ledger A: balance 1000, max 5000. Ledger B: balance 4500, max 5000. Transfer 300 from A to B (fails: B would exceed max). Transfer 300 from A to C (balance 0, max 5000, succeeds).
```

**Sample output:**

```
A=1000, B=4500, C=0
Transfer 300 A->B failed: Exceeds max balance
A=1000, B=4500, C=0
Transfer 300 A->C succeeded
A=700, B=4500, C=300
```

**Solution:**

```cpp
#include <iostream>
#include <stdexcept>
using namespace std;

class Ledger {
    string name;
    double balance;
    double maxBalance;
public:
    Ledger(string n, double b, double mx) : name(n), balance(b), maxBalance(mx) {}
    string getName() const { return name; }
    double getBalance() const { return balance; }

    void withdraw(double amt) {
        if (amt > balance) throw runtime_error("Insufficient balance");
        balance -= amt;
    }

    void deposit(double amt) {
        if (balance + amt > maxBalance)
            throw runtime_error("Exceeds max balance");
        balance += amt;
    }
};

void transfer(Ledger& from, Ledger& to, double amount) {
    from.withdraw(amount);  // Step 1
    try {
        to.deposit(amount);  // Step 2
    } catch (...) {
        from.deposit(amount);  // Rollback step 1
        throw;  // Rethrow
    }
}

void showAll(Ledger& a, Ledger& b, Ledger& c) {
    cout << a.getName() << "=" << a.getBalance()
         << ", " << b.getName() << "=" << b.getBalance()
         << ", " << c.getName() << "=" << c.getBalance() << endl;
}

int main() {
    Ledger a("A", 1000, 5000);
    Ledger b("B", 4500, 5000);
    Ledger c("C", 0, 5000);
    showAll(a, b, c);

    try {
        transfer(a, b, 300);
        cout << "Transfer 300 A->B succeeded" << endl;
    } catch (const exception& e) {
        cout << "Transfer 300 A->B failed: " << e.what() << endl;
    }
    showAll(a, b, c);

    try {
        transfer(a, c, 300);
        cout << "Transfer 300 A->C succeeded" << endl;
    } catch (const exception& e) {
        cout << "Transfer 300 A->C failed: " << e.what() << endl;
    }
    showAll(a, b, c);
    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/exception-handling-in-cpp/*
