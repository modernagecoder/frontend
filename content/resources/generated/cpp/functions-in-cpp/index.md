---
title: "Functions in C++ - Pass by Value, Reference, Overloading, Recursion | Modern Age Coders"
description: "Master C++ functions including declaration, definition, pass-by-value, pass-by-reference, pass-by-pointer, function overloading, default arguments, inline functions, and recursion. Includes 60 practice questions with recursion tracing and interview problems."
slug: functions-in-cpp
canonical: https://learn.modernagecoders.com/resources/cpp/functions-in-cpp/
category: "C++"
keywords: ["c++ functions", "c++ pass by reference", "c++ function overloading", "c++ recursion", "c++ default arguments", "c++ inline functions", "c++ function prototype", "c++ pass by pointer", "c++ tower of hanoi", "c++ factorial recursion"]
---
# Functions, Overloading, and Recursion

**Difficulty:** Beginner  
**Reading time:** 30 min  
**Chapter:** 8  
**Practice questions:** 60

## What Are Functions?

A **function** is a named block of code that performs a specific task. Instead of writing the same code multiple times, you write it once inside a function and call that function whenever you need it. Functions make code reusable, modular, and easier to debug.

Every C++ program has at least one function: `main()`. But real programs have dozens or hundreds of functions, each responsible for a well-defined task. The C++ standard library itself is a collection of thousands of functions organized into headers.

Key concepts covered in this chapter:

1. **Function declaration (prototype)** -- telling the compiler a function exists
2. **Function definition** -- the actual implementation
3. **Return types** -- what the function sends back
4. **Pass-by-value** -- passing copies of arguments
5. **Pass-by-reference (&)** -- passing aliases to original variables
6. **Pass-by-pointer (*)** -- passing memory addresses
7. **Function overloading** -- multiple functions with the same name but different parameters
8. **Default arguments** -- parameters with preset values
9. **Inline functions** -- optimization hint for small functions
10. **Recursion** -- a function calling itself

## Why Are Functions Essential?

### 1. Code Reusability

Without functions, you would copy-paste the same code every time you need it. If you need to find the maximum of two numbers in 20 places, you write the logic once in a function and call it 20 times. If the logic needs to change, you change it in one place.

### 2. Modularity and Readability

Breaking a large program into small functions makes it readable. A function name like `isPrime(n)` is self-documenting. Readers can understand what the code does without reading every line. In team environments, different people can work on different functions simultaneously.

### 3. Debugging and Testing

When a bug occurs, you can isolate it to a specific function. You can test each function independently with different inputs. This is far easier than debugging a single monolithic main() function with 500 lines.

### 4. Recursion for Complex Problems

Some problems have naturally recursive structures: tree traversals, divide-and-conquer algorithms, backtracking problems. Recursion expresses these solutions elegantly. Understanding the call stack and recursion tracing is critical for placement interviews and competitive programming.

### 5. Interview Relevance

Pass-by-value vs pass-by-reference, function overloading resolution, recursion tracing (factorial, Fibonacci, Tower of Hanoi), and understanding the call stack are all common interview topics. Interviewers expect you to trace recursive calls on paper.

## Detailed Explanation

### 1. Function Declaration (Prototype) and Definition

A function **declaration** (prototype) tells the compiler the function's name, return type, and parameter types. It appears before main() so the compiler knows the function exists before it is called.

```
// Declaration (prototype)
int add(int a, int b);

int main() {
    cout << add(3, 5);  // Call
    return 0;
}

// Definition
int add(int a, int b) {
    return a + b;
}
```

If the definition appears before main(), a separate declaration is not needed. But in multi-file projects, prototypes go in header files (.h) and definitions in source files (.cpp).

### 2. Return Types

A function can return any type: `int`, `double`, `bool`, `string`, `char`, etc. A function that returns nothing uses `void` as the return type.

```
void greet(string name) {
    cout << "Hello, " << name << endl;
    // No return statement needed (or use: return;)
}

bool isEven(int n) {
    return n % 2 == 0;
}
```

### 3. Pass-by-Value

By default, C++ passes arguments **by value**: the function receives a **copy** of the argument. Modifying the parameter inside the function does not affect the original variable.

```
void doubleIt(int x) {
    x = x * 2;  // Modifies the local copy only
}

int main() {
    int a = 5;
    doubleIt(a);
    cout << a;  // Still 5
}
```

### 4. Pass-by-Reference (&)

A **reference parameter** is an alias for the original variable. Changes inside the function affect the original.

```
void doubleIt(int& x) {  // Note the &
    x = x * 2;  // Modifies the original variable
}

int main() {
    int a = 5;
    doubleIt(a);
    cout << a;  // 10
}
```

Use pass-by-reference when you need to: (1) modify the caller's variable, (2) avoid copying large objects (use `const&` for read-only), or (3) return multiple values from a function.

### 5. Pass-by-Pointer (*)

Similar to pass-by-reference but using explicit pointers:

```
void doubleIt(int* ptr) {
    *ptr = (*ptr) * 2;  // Dereference to modify
}

int main() {
    int a = 5;
    doubleIt(&a);  // Pass address
    cout << a;  // 10
}
```

Pointers require explicit dereferencing (*ptr) and can be null. References are safer and preferred in modern C++ unless you need null semantics or pointer arithmetic.

### 6. Function Overloading

C++ allows multiple functions with the **same name** but **different parameter lists** (different number or types of parameters). The compiler selects the correct version based on the arguments used at the call site.

```
int add(int a, int b) { return a + b; }
double add(double a, double b) { return a + b; }
int add(int a, int b, int c) { return a + b + c; }
```

The return type alone does not distinguish overloaded functions. The parameter list must differ.

### 7. Default Arguments

You can assign default values to parameters. If the caller omits those arguments, the defaults are used.

```
void greet(string name, string greeting = "Hello") {
    cout << greeting << ", " << name << endl;
}

greet("Aarav");           // Hello, Aarav
greet("Neha", "Welcome"); // Welcome, Neha
```

Rules: default arguments must be specified from **right to left**. You cannot skip a default parameter in the middle. Defaults are typically specified in the declaration (prototype), not the definition.

### 8. Inline Functions

The `inline` keyword is a hint to the compiler to replace the function call with the function body, avoiding the overhead of a function call.

```
inline int square(int x) {
    return x * x;
}
```

Use inline for small, frequently called functions (1-3 lines). The compiler may ignore the hint for large or recursive functions. In modern C++, the compiler often inlines functions automatically based on optimization settings.

### 9. Recursion

A **recursive function** calls itself. Every recursive function needs:

1. **Base case** -- a condition that stops the recursion
2. **Recursive case** -- the function calls itself with a smaller/simpler input

#### Factorial

```
int factorial(int n) {
    if (n <= 1) return 1;        // Base case
    return n * factorial(n - 1); // Recursive case
}
```

Tracing factorial(4): factorial(4) = 4 * factorial(3) = 4 * 3 * factorial(2) = 4 * 3 * 2 * factorial(1) = 4 * 3 * 2 * 1 = 24.

#### Fibonacci

```
int fib(int n) {
    if (n <= 1) return n;          // Base: fib(0)=0, fib(1)=1
    return fib(n - 1) + fib(n - 2); // Two recursive calls
}
```

Warning: this naive implementation is O(2^n). Each call branches into two, creating exponential work. Use memoization or iteration for efficiency.

#### Tower of Hanoi

```
void hanoi(int n, char from, char to, char aux) {
    if (n == 1) {
        cout << "Move disk 1 from " << from << " to " << to << endl;
        return;
    }
    hanoi(n - 1, from, aux, to);
    cout << "Move disk " << n << " from " << from << " to " << to << endl;
    hanoi(n - 1, aux, to, from);
}
```

Moves n disks from source to destination using an auxiliary peg. Total moves: 2^n - 1.

### 10. Recursion vs Iteration

Any recursive solution can be converted to an iterative one using a stack (explicit or implicit). Recursion is more readable for naturally recursive problems (trees, backtracking) but has overhead from function call stack frames. Deep recursion can cause stack overflow. Tail recursion (where the recursive call is the last operation) can be optimized by some compilers into a loop.

### 11. The Function Call Stack

Each function call creates a **stack frame** containing local variables, parameters, and the return address. When the function returns, its frame is popped. In recursion, each recursive call adds a new frame. If recursion is too deep (no base case or very large input), the stack overflows.

## Code Examples

### Pass-by-Value vs Pass-by-Reference

```cpp
#include <iostream>
using namespace std;

void byValue(int x) {
    x = 100;
    cout << "Inside byValue: x = " << x << endl;
}

void byReference(int& x) {
    x = 100;
    cout << "Inside byReference: x = " << x << endl;
}

int main() {
    int a = 5;
    byValue(a);
    cout << "After byValue: a = " << a << endl;

    byReference(a);
    cout << "After byReference: a = " << a << endl;

    return 0;
}
```

byValue receives a copy of a. Changing x inside does not affect a. byReference receives a reference (alias) to a. Changing x directly changes a. After byValue, a is still 5. After byReference, a is 100.

**Output:**

```
Inside byValue: x = 100
After byValue: a = 5
Inside byReference: x = 100
After byReference: a = 100
```

### Swap Using Pass-by-Reference and Pass-by-Pointer

```cpp
#include <iostream>
using namespace std;

void swapRef(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

void swapPtr(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    cout << "Before: x=" << x << ", y=" << y << endl;

    swapRef(x, y);
    cout << "After swapRef: x=" << x << ", y=" << y << endl;

    swapPtr(&x, &y);
    cout << "After swapPtr: x=" << x << ", y=" << y << endl;

    return 0;
}
```

swapRef uses references: cleaner syntax, no dereferencing needed. swapPtr uses pointers: requires passing addresses (&x, &y) and dereferencing (*a, *b). Both achieve the same result. After swapRef, x=20, y=10. After swapPtr, they swap back to x=10, y=20.

**Output:**

```
Before: x=10, y=20
After swapRef: x=20, y=10
After swapPtr: x=10, y=20
```

### Function Overloading

```cpp
#include <iostream>
using namespace std;

int area(int side) {
    return side * side;  // Square
}

int area(int length, int width) {
    return length * width;  // Rectangle
}

double area(double radius) {
    return 3.14159 * radius * radius;  // Circle
}

int main() {
    cout << "Square (5): " << area(5) << endl;
    cout << "Rectangle (4, 6): " << area(4, 6) << endl;
    cout << "Circle (3.0): " << area(3.0) << endl;

    return 0;
}
```

Three functions named 'area' with different parameter lists. The compiler selects the correct one based on arguments: area(5) matches int, area(4,6) matches (int,int), area(3.0) matches double. This is compile-time polymorphism.

**Output:**

```
Square (5): 25
Rectangle (4, 6): 24
Circle (3.0): 28.2743
```

### Default Arguments

```cpp
#include <iostream>
using namespace std;

void printLine(char ch = '-', int length = 40) {
    for (int i = 0; i < length; i++) {
        cout << ch;
    }
    cout << endl;
}

int main() {
    printLine();            // Uses both defaults: '-', 40
    printLine('*');         // Uses default length: 40
    printLine('=', 20);    // No defaults used

    return 0;
}
```

printLine has two default parameters. When called with no arguments, both defaults are used. With one argument, only the second default is used. With both arguments, no defaults are used. Defaults must be from right to left.

**Output:**

```
----------------------------------------
****************************************
====================
```

### Recursion: Factorial with Tracing

```cpp
#include <iostream>
using namespace std;

int factorial(int n) {
    cout << "factorial(" << n << ") called" << endl;
    if (n <= 1) {
        cout << "factorial(" << n << ") returns 1" << endl;
        return 1;
    }
    int result = n * factorial(n - 1);
    cout << "factorial(" << n << ") returns " << result << endl;
    return result;
}

int main() {
    cout << "Result: " << factorial(5) << endl;
    return 0;
}
```

Each recursive call prints when it is called and when it returns. The calls go deeper until n=1 (base case), then unwind: factorial(1)=1, factorial(2)=2, factorial(3)=6, factorial(4)=24, factorial(5)=120.

**Output:**

```
factorial(5) called
factorial(4) called
factorial(3) called
factorial(2) called
factorial(1) called
factorial(1) returns 1
factorial(2) returns 2
factorial(3) returns 6
factorial(4) returns 24
factorial(5) returns 120
Result: 120
```

### Recursion: Tower of Hanoi

```cpp
#include <iostream>
using namespace std;

void hanoi(int n, char from, char to, char aux) {
    if (n == 1) {
        cout << "Move disk 1 from " << from << " to " << to << endl;
        return;
    }
    hanoi(n - 1, from, aux, to);
    cout << "Move disk " << n << " from " << from << " to " << to << endl;
    hanoi(n - 1, aux, to, from);
}

int main() {
    int n = 3;
    cout << "Tower of Hanoi with " << n << " disks:" << endl;
    hanoi(n, 'A', 'C', 'B');
    cout << "Total moves: " << (1 << n) - 1 << endl;
    return 0;
}
```

For n disks: move n-1 disks from source to auxiliary, move disk n from source to destination, move n-1 disks from auxiliary to destination. For 3 disks, 7 moves are needed (2^3 - 1 = 7). This is a classic recursion problem.

**Output:**

```
Tower of Hanoi with 3 disks:
Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C
Total moves: 7
```

### Recursion: Power Function and Sum of Digits

```cpp
#include <iostream>
using namespace std;

int power(int base, int exp) {
    if (exp == 0) return 1;
    return base * power(base, exp - 1);
}

int sumOfDigits(int n) {
    if (n == 0) return 0;
    return (n % 10) + sumOfDigits(n / 10);
}

int main() {
    cout << "2^10 = " << power(2, 10) << endl;
    cout << "3^5 = " << power(3, 5) << endl;
    cout << "Sum of digits of 12345: " << sumOfDigits(12345) << endl;
    cout << "Sum of digits of 9999: " << sumOfDigits(9999) << endl;
    return 0;
}
```

power(base, exp): base case is exp == 0 (returns 1). Otherwise, base * power(base, exp-1). sumOfDigits(n): base case is n == 0 (returns 0). Otherwise, last digit (n%10) + sumOfDigits(remaining digits n/10). Both demonstrate reducing the problem size by one step.

**Output:**

```
2^10 = 1024
3^5 = 243
Sum of digits of 12345: 15
Sum of digits of 9999: 36
```

## Common Mistakes

### Expecting Pass-by-Value to Modify the Original

**Wrong:**

```
void increment(int x) {
    x++;
}
int main() {
    int a = 5;
    increment(a);
    cout << a; // Expected 6, got 5
}
```

a is still 5 because increment received a copy of a, not a itself.

**Correct:**

```
void increment(int& x) {
    x++;
}
int main() {
    int a = 5;
    increment(a);
    cout << a; // Now 6
}
```

To modify the caller's variable, use pass-by-reference (int& x) or pass-by-pointer (int* x). Pass-by-value creates an independent copy.

### Missing Base Case in Recursion

**Wrong:**

```
int factorial(int n) {
    return n * factorial(n - 1);  // No base case!
}
```

Infinite recursion leading to stack overflow. The function calls itself endlessly: factorial(5) -> factorial(4) -> ... -> factorial(0) -> factorial(-1) -> ...

**Correct:**

```
int factorial(int n) {
    if (n <= 1) return 1;  // Base case
    return n * factorial(n - 1);
}
```

Every recursive function must have a base case that stops the recursion. Without it, the function calls itself infinitely until the stack overflows and the program crashes.

### Default Arguments in Wrong Order

**Wrong:**

```
// Compilation error: default argument missing for parameter 'b'
void func(int a = 10, int b, int c = 30) {
    cout << a << b << c;
}
```

Default arguments must be specified from right to left. Having a default for 'a' but not 'b' while 'c' has a default is invalid.

**Correct:**

```
void func(int a, int b = 20, int c = 30) {
    cout << a << b << c;
}
```

Default values must be contiguous from the rightmost parameter. You cannot skip a parameter in the middle. This ensures unambiguous argument matching at the call site.

### Overloading by Return Type Only

**Wrong:**

```
int getValue() { return 42; }
double getValue() { return 3.14; }  // Error!
```

Compilation error: functions that differ only in return type cannot be overloaded. The compiler cannot determine which to call from getValue() alone.

**Correct:**

```
int getInt() { return 42; }
double getDouble() { return 3.14; }
```

Function overloading requires different **parameter lists** (number or types of parameters). The return type is not part of the overload resolution. Use different names or add distinguishing parameters.

### Forgetting to Dereference Pointer Parameters

**Wrong:**

```
void setToZero(int* ptr) {
    ptr = 0;  // Bug: changes the local pointer, not the pointed-to value
}
int main() {
    int x = 42;
    setToZero(&x);
    cout << x;  // Still 42
}
```

ptr = 0 changes the local copy of the pointer to null. It does not modify the value x points to.

**Correct:**

```
void setToZero(int* ptr) {
    *ptr = 0;  // Dereference: modifies the value at the address
}
int main() {
    int x = 42;
    setToZero(&x);
    cout << x;  // 0
}
```

To modify the value through a pointer, you must dereference it with `*ptr`. Without the asterisk, you are only changing what the local pointer variable points to, which has no effect outside the function.

## Summary

- A function declaration (prototype) tells the compiler the function's name, return type, and parameter types. The definition provides the actual implementation.
- Pass-by-value creates a copy of the argument. Changes to the parameter do not affect the original variable. This is the default in C++.
- Pass-by-reference (int& x) creates an alias to the original variable. Changes affect the original. Use it to modify caller's variables or avoid copying large objects.
- Pass-by-pointer (int* ptr) passes the address. Requires dereferencing (*ptr) to access the value. Can be null, unlike references. Preferred in C; references preferred in C++.
- Function overloading allows multiple functions with the same name but different parameter lists. The compiler selects the correct version at compile time. Return type alone does not count.
- Default arguments must be specified from right to left. They are typically declared in the prototype, not the definition.
- Inline functions are a compiler hint to replace the call with the body. Use for small, frequently called functions. The compiler may ignore the hint.
- Recursion requires a base case (stopping condition) and a recursive case (calling itself with a smaller problem). Without a base case, the function recurses infinitely.
- Classic recursive problems: factorial (n * factorial(n-1)), Fibonacci (fib(n-1) + fib(n-2)), Tower of Hanoi (2^n - 1 moves), power, sum of digits.
- Tail recursion is when the recursive call is the last operation. Some compilers can optimize it into a loop (tail call optimization).
- Each function call creates a stack frame with local variables and return address. Deep recursion can cause stack overflow.
- Recursion vs iteration: recursion is more elegant for tree/backtracking problems; iteration is more efficient for simple loops. Any recursion can be converted to iteration using an explicit stack.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/functions-in-cpp/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/functions-in-cpp/practice/*
