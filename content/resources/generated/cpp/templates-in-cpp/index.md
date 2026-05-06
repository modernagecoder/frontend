---
title: "C++ Templates - Function Templates, Class Templates, Specialization, Variadic | Modern Age Coders"
description: "Master C++ templates including function templates, class templates, template specialization (full and partial), multiple template parameters, non-type parameters, variadic templates, auto/decltype, and how STL is built on templates. 54+ interview-focused practice questions."
slug: templates-in-cpp
canonical: https://learn.modernagecoders.com/resources/cpp/templates-in-cpp
category: "C++"
keywords: ["c++ templates", "function template c++", "class template c++", "template specialization c++", "variadic templates c++", "non-type template parameter c++", "partial specialization c++", "auto decltype c++", "c++ templates interview questions", "STL templates c++"]
---
# Templates - Function and Class Templates

**Difficulty:** Advanced  
**Reading time:** 55 min  
**Chapter:** 18  
**Practice questions:** 52

## What Are Templates in C++?

**Templates** are a compile-time mechanism in C++ that allow you to write generic code that works with any data type. Instead of writing separate functions or classes for `int`, `double`, `string`, etc., you write a single template, and the compiler generates the specific versions (called **template instantiations**) as needed.

C++ supports two kinds of templates: **function templates** and **class templates**.

```
// Function template: works with any type T
template
T maxOf(T a, T b) {
    return (a > b) ? a : b;
}

// Class template: works with any type T
template
class Box {
    T value;
public:
    Box(T v) : value(v) {}
    T get() const { return value; }
};

// Usage:
int m1 = maxOf(10, 20);           // T = int
double m2 = maxOf(3.14, 2.71);    // T = double
Box b("Arjun");           // T = string
cout << b.get() << endl;          // Arjun
```

Templates are the foundation of the entire C++ Standard Template Library (STL). Containers like `vector`, `map<K,V>`, `stack`, and algorithms like `sort()`, `find()`, and `accumulate()` are all implemented as templates.

C++ templates also support **specialization** (providing custom implementations for specific types), **non-type parameters** (passing values like integers as template arguments), and **variadic templates** (accepting any number of template arguments).

## Why Do Templates Matter?

Templates are one of the most powerful features of C++. They enable generic programming, which is a paradigm complementary to object-oriented programming. Understanding templates is essential for using the STL effectively and for writing professional C++ code.

### 1. Code Reuse Without Runtime Overhead

When Arjun writes a `template T maxOf(T a, T b)`, the compiler generates optimized code for each type used. Unlike virtual functions (which have vtable overhead), templates are resolved entirely at compile time with zero runtime cost.

### 2. The STL Is Built on Templates

Every STL container (`vector`, `map`, `set`, `queue`), every algorithm (`sort`, `find`, `transform`), and every utility (`pair`, `tuple`, `optional`) is a template. You cannot use the STL without understanding templates.

### 3. Top Interview Topic for Product Companies

Companies like Google, Microsoft, Amazon, and Flipkart ask template questions in C++ interviews. Topics include template argument deduction, specialization, SFINAE (Substitution Failure Is Not An Error), and compile-time computation.

### 4. Type Safety Without Sacrifice

Before templates, C programmers used `void*` pointers for generic code, losing all type safety. Templates give you generic code that is fully type-checked at compile time. If Kavya accidentally passes a `string` where an `int` is expected, the compiler catches it immediately.

### 5. Compile-Time Computation

Templates can be used for compile-time computation (template metaprogramming). Factorial, Fibonacci, and type traits can all be computed at compile time, resulting in zero runtime cost. This is the basis of modern C++ libraries like `<type_traits>`.

## Detailed Explanation

### 1. Function Templates

A function template defines a blueprint for a function. The compiler generates a concrete function for each type used.

```
template
T add(T a, T b) {
    return a + b;
}

// Explicit instantiation:
int r1 = add(3, 4);         // 7
double r2 = add(3.5, 4.5); // 8.0

// Implicit deduction (compiler deduces T):
int r3 = add(3, 4);               // T deduced as int
double r4 = add(3.5, 4.5);        // T deduced as double
```

The compiler deduces the template argument from the function arguments. If the arguments have different types (e.g., `add(3, 4.5)`), deduction fails and you must specify explicitly: `add(3, 4.5)`.

### 2. Multiple Template Parameters

A template can have multiple type parameters:

```
template
auto multiply(T a, U b) -> decltype(a * b) {
    return a * b;
}

cout << multiply(3, 4.5) << endl;    // 13.5 (int * double = double)
cout << multiply(2.0, 3) << endl;    // 6.0
```

### 3. Class Templates

A class template defines a blueprint for a class. You must specify the template arguments explicitly when creating objects (prior to C++17 CTAD).

```
template
class Stack {
    T* data;
    int top;
    int capacity;
public:
    Stack(int cap) : capacity(cap), top(-1) { data = new T[cap]; }
    ~Stack() { delete[] data; }

    void push(T val) {
        if (top < capacity - 1) data[++top] = val;
    }

    T pop() {
        if (top >= 0) return data[top--];
        throw runtime_error("Stack empty");
    }

    bool empty() const { return top == -1; }
    int size() const { return top + 1; }
};

Stack intStack(10);
intStack.push(42);

Stack strStack(5);
strStack.push("Kavya");
```

### 4. Non-Type Template Parameters

Template parameters can be values (integers, pointers, etc.), not just types:

```
template
class FixedArray {
    T data[N];
public:
    T& operator[](int i) { return data[i]; }
    int size() const { return N; }
};

FixedArray<int, 5> arr;     // Array of 5 ints, size known at compile time
FixedArray<double, 10> arr2; // Array of 10 doubles

// N must be a compile-time constant
// FixedArray<int, n> arr3;  // Error if n is a runtime variable
```

Non-type parameters must be compile-time constants. They enable compile-time computation and zero-overhead abstractions like `std::array<T, N>`.

### 5. Template Specialization

**Full specialization** provides a completely custom implementation for a specific type:

```
// Primary template
template
class Printer {
public:
    void print(T val) { cout << "Value: " << val << endl; }
};

// Full specialization for const char*
template<>
class Printer {
public:
    void print(const char* val) { cout << "String: \"" << val << "\"" << endl; }
};

// Full specialization for bool
template<>
class Printer {
public:
    void print(bool val) { cout << "Bool: " << (val ? "true" : "false") << endl; }
};

Printer p1;         p1.print(42);       // Value: 42
Printer p2; p2.print("Ravi");   // String: "Ravi"
Printer p3;        p3.print(true);     // Bool: true
```

**Partial specialization** specializes some template parameters while leaving others generic. It is only available for class templates, not function templates:

```
// Primary template
template
class Pair {
public:
    void info() { cout << "Generic Pair" << endl; }
};

// Partial specialization: both types are the same
template
class Pair<T, T> {
public:
    void info() { cout << "Same-type Pair" << endl; }
};

// Partial specialization: second type is int
template
class Pair<T, int> {
public:
    void info() { cout << "Pair with int second" << endl; }
};

Pair<double, string> p1;  p1.info(); // Generic Pair
Pair<int, int> p2;        p2.info(); // Same-type Pair
Pair<string, int> p3;     p3.info(); // Pair with int second
```

### 6. Function Template Specialization

Function templates can be fully specialized (but not partially specialized):

```
template
void display(T val) {
    cout << "Generic: " << val << endl;
}

template<>
void display(bool val) {
    cout << "Bool: " << (val ? "true" : "false") << endl;
}

display(42);     // Generic: 42
display(true);   // Bool: true
```

### 7. Variadic Templates (C++11)

Variadic templates accept any number of template arguments using a parameter pack:

```
// Base case: no arguments
void print() {
    cout << endl;
}

// Recursive case: peel off first argument, recurse on rest
template
void print(T first, Args... rest) {
    cout << first << " ";
    print(rest...);  // Expand the pack
}

print(1, 2.5, "Arjun", 'A', true);
// Output: 1 2.5 Arjun A 1
```

The `...` is the **pack expansion** operator. `Args...` is a template parameter pack, and `rest...` is a function parameter pack.

### 8. auto and decltype

`auto` lets the compiler deduce the type of a variable. `decltype` gives you the type of an expression without evaluating it:

```
auto x = 42;          // int
auto y = 3.14;        // double
auto z = "hello";     // const char*

int a = 5;
decltype(a) b = 10;   // b is int (same type as a)

template
auto add(T a, U b) -> decltype(a + b) {
    return a + b;
}

auto result = add(3, 4.5);  // result is double (7.5)
```

### 9. Default Template Arguments

Template parameters can have default values:

```
template
class Buffer {
    T data[N];
public:
    int size() const { return N; }
};

Buffer<> b1;              // T=int, N=10
Buffer b2;        // T=double, N=10
Buffer<char, 256> b3;     // T=char, N=256
```

## Code Examples

### Function Template with Type Deduction

```cpp
#include <iostream>
using namespace std;

template<typename T>
T maxOf(T a, T b) {
    return (a > b) ? a : b;
}

template<typename T>
void swapValues(T& a, T& b) {
    T temp = a;
    a = b;
    b = temp;
}

int main() {
    cout << maxOf(10, 20) << endl;
    cout << maxOf(3.14, 2.71) << endl;
    cout << maxOf(string("Arjun"), string("Kavya")) << endl;

    int a = 5, b = 10;
    swapValues(a, b);
    cout << "After swap: " << a << ", " << b << endl;

    string s1 = "Hello", s2 = "World";
    swapValues(s1, s2);
    cout << "After swap: " << s1 << ", " << s2 << endl;
    return 0;
}
```

The compiler deduces `T` from the arguments. `maxOf(10, 20)` deduces T=int. `maxOf(string, string)` deduces T=string (uses lexicographic comparison). `swapValues` takes references and swaps in-place.

**Output:**

```
20
3.14
Kavya
After swap: 10, 5
After swap: World, Hello
```

### Class Template: Generic Stack

```cpp
#include <iostream>
#include <string>
using namespace std;

template<typename T>
class Stack {
    T* data;
    int top;
    int capacity;
public:
    Stack(int cap) : capacity(cap), top(-1) {
        data = new T[cap];
    }
    ~Stack() { delete[] data; }

    void push(T val) {
        if (top < capacity - 1) data[++top] = val;
        else cout << "Stack full" << endl;
    }

    T pop() {
        if (top >= 0) return data[top--];
        throw runtime_error("Stack empty");
    }

    T peek() const {
        if (top >= 0) return data[top];
        throw runtime_error("Stack empty");
    }

    bool empty() const { return top == -1; }
    int size() const { return top + 1; }
};

int main() {
    Stack<int> intStack(5);
    intStack.push(10);
    intStack.push(20);
    intStack.push(30);
    cout << "Top: " << intStack.peek() << endl;
    cout << "Pop: " << intStack.pop() << endl;
    cout << "Size: " << intStack.size() << endl;

    Stack<string> strStack(3);
    strStack.push("Ravi");
    strStack.push("Priya");
    cout << "Top: " << strStack.peek() << endl;
    return 0;
}
```

The `Stack` class template works with any type. `Stack` creates a stack of integers, `Stack` creates a stack of strings. The compiler generates separate class definitions for each instantiation.

**Output:**

```
Top: 30
Pop: 30
Size: 2
Top: Priya
```

### Non-Type Template Parameters

```cpp
#include <iostream>
using namespace std;

template<typename T, int N>
class FixedArray {
    T data[N];
public:
    void set(int i, T val) {
        if (i >= 0 && i < N) data[i] = val;
    }
    T get(int i) const {
        if (i >= 0 && i < N) return data[i];
        throw out_of_range("Index out of bounds");
    }
    int size() const { return N; }
};

template<int N>
int factorial() {
    return N * factorial<N - 1>();
}

template<>
int factorial<0>() {
    return 1;
}

int main() {
    FixedArray<int, 5> arr;
    for (int i = 0; i < 5; i++) arr.set(i, i * 10);
    for (int i = 0; i < arr.size(); i++) cout << arr.get(i) << " ";
    cout << endl;

    FixedArray<double, 3> darr;
    darr.set(0, 1.1); darr.set(1, 2.2); darr.set(2, 3.3);
    for (int i = 0; i < darr.size(); i++) cout << darr.get(i) << " ";
    cout << endl;

    cout << "5! = " << factorial<5>() << endl;
    cout << "10! = " << factorial<10>() << endl;
    return 0;
}
```

`FixedArray<int, 5>` creates an array of exactly 5 ints, with size known at compile time. `factorial<5>()` computes 5! at compile time using template recursion with a base case specialization for N=0.

**Output:**

```
0 10 20 30 40 
1.1 2.2 3.3 
5! = 120
10! = 3628800
```

### Template Specialization (Full and Partial)

```cpp
#include <iostream>
#include <string>
using namespace std;

// Primary template
template<typename T>
class TypeName {
public:
    static string name() { return "unknown"; }
};

// Full specializations
template<> class TypeName<int> {
public:
    static string name() { return "int"; }
};

template<> class TypeName<double> {
public:
    static string name() { return "double"; }
};

template<> class TypeName<string> {
public:
    static string name() { return "string"; }
};

// Partial specialization for pointers
template<typename T>
class TypeName<T*> {
public:
    static string name() { return "pointer to " + TypeName<T>::name(); }
};

int main() {
    cout << TypeName<int>::name() << endl;
    cout << TypeName<double>::name() << endl;
    cout << TypeName<string>::name() << endl;
    cout << TypeName<char>::name() << endl;
    cout << TypeName<int*>::name() << endl;
    cout << TypeName<double*>::name() << endl;
    return 0;
}
```

Full specializations provide custom implementations for `int`, `double`, and `string`. The partial specialization `TypeName<T*>` matches any pointer type and recursively uses the base type's name. `char` falls through to the primary template ("unknown").

**Output:**

```
int
double
string
unknown
pointer to int
pointer to double
```

### Variadic Templates

```cpp
#include <iostream>
using namespace std;

// Base case
void print() {
    cout << endl;
}

// Recursive variadic template
template<typename T, typename... Args>
void print(T first, Args... rest) {
    cout << first;
    if (sizeof...(rest) > 0) cout << ", ";
    print(rest...);
}

// Variadic sum
template<typename T>
T sum(T val) {
    return val;
}

template<typename T, typename... Args>
T sum(T first, Args... rest) {
    return first + sum(rest...);
}

int main() {
    print(1, 2.5, "Arjun", 'A', true);
    print("Hello", "World");

    cout << "Sum: " << sum(1, 2, 3, 4, 5) << endl;
    cout << "Sum: " << sum(1.5, 2.5, 3.0) << endl;
    return 0;
}
```

The `print` function accepts any number of arguments of any types. It peels off the first argument, prints it, and recurses on the rest. `sizeof...(rest)` returns the number of remaining arguments. The `sum` function adds all arguments together.

**Output:**

```
1, 2.5, Arjun, A, 1
Hello, World
Sum: 15
Sum: 7
```

### auto, decltype, and Trailing Return Types

```cpp
#include <iostream>
#include <string>
using namespace std;

template<typename T, typename U>
auto add(T a, U b) -> decltype(a + b) {
    return a + b;
}

template<typename T, typename U>
auto multiply(T a, U b) {
    return a * b;  // C++14: return type deduced
}

int main() {
    auto r1 = add(3, 4.5);      // double
    auto r2 = add(string("Hello, "), string("World"));
    auto r3 = multiply(3, 4);    // int
    auto r4 = multiply(2.5, 4);  // double

    cout << r1 << endl;
    cout << r2 << endl;
    cout << r3 << endl;
    cout << r4 << endl;

    // decltype usage
    int x = 10;
    decltype(x) y = 20;  // y is int
    decltype(x + 0.5) z = 3.14;  // z is double
    cout << y << " " << z << endl;
    return 0;
}
```

`auto` and `decltype` enable type deduction. The trailing return type `-> decltype(a + b)` tells the compiler to deduce the return type from the expression `a + b`. In C++14, the return type can be deduced automatically without a trailing return type.

**Output:**

```
7.5
Hello, World
12
10
20 3.14
```

## Common Mistakes

### Mismatched Types in Template Argument Deduction

**Wrong:**

```
template<typename T>
T maxOf(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << maxOf(3, 4.5);  // Error: T deduced as int AND double
}
```

Compilation error: deduced conflicting types for T. 3 deduces int, 4.5 deduces double.

**Correct:**

```
// Option 1: Explicit template argument
cout << maxOf<double>(3, 4.5);

// Option 2: Two template parameters
template<typename T, typename U>
auto maxOf(T a, U b) -> decltype(a > b ? a : b) {
    return (a > b) ? a : b;
}
cout << maxOf(3, 4.5);  // OK
```

When a single template parameter `T` is used for both arguments, both arguments must deduce the same type. Either specify the type explicitly or use two separate template parameters.

### Forgetting template<> in Full Specialization

**Wrong:**

```
template<typename T>
void display(T val) {
    cout << val << endl;
}

// Missing template<>
void display(bool val) {  // This is an overload, not a specialization!
    cout << (val ? "true" : "false") << endl;
}
```

This creates a function overload, not a template specialization. Both exist and overload resolution picks the non-template version for bool. This may seem to work but has different behavior with template argument deduction.

**Correct:**

```
template<typename T>
void display(T val) {
    cout << val << endl;
}

template<>  // Required for specialization!
void display<bool>(bool val) {
    cout << (val ? "true" : "false") << endl;
}
```

Template full specialization requires the `template<>` prefix. Without it, you create an overload rather than a specialization. Overloads and specializations have different rules for resolution.

### Using Runtime Variables as Non-Type Template Parameters

**Wrong:**

```
template<int N>
void printN() {
    cout << N << endl;
}

int main() {
    int n;
    cin >> n;
    printN<n>();  // Error: n is not a compile-time constant!
}
```

Compilation error: non-type template argument is not a constant expression. Template parameters must be known at compile time.

**Correct:**

```
template<int N>
void printN() {
    cout << N << endl;
}

int main() {
    constexpr int n = 10;  // Compile-time constant
    printN<n>();  // OK
    printN<42>(); // OK
}
```

Non-type template parameters must be compile-time constants (`constexpr`, `const` initialized with literals, or literal values). Runtime values cannot be template arguments because templates are resolved at compile time.

### Defining Template Member Functions in .cpp Files

**Wrong:**

```
// stack.h
template<typename T>
class Stack {
    T* data;
public:
    Stack(int n);
    void push(T val);
};

// stack.cpp
#include "stack.h"
template<typename T>
Stack<T>::Stack(int n) { data = new T[n]; }

template<typename T>
void Stack<T>::push(T val) { /* ... */ }

// main.cpp
#include "stack.h"
Stack<int> s(10);  // Linker error: undefined reference
```

Linker error. The compiler needs to see the full template definition when instantiating. If the definition is in a .cpp file, main.cpp cannot see it.

**Correct:**

```
// stack.h (put everything in the header)
template<typename T>
class Stack {
    T* data;
public:
    Stack(int n) { data = new T[n]; }
    void push(T val) { /* ... */ }
};

// main.cpp
#include "stack.h"
Stack<int> s(10);  // OK: compiler sees full definition
```

Template definitions must be visible to the compiler at the point of instantiation. In practice, this means template code goes in header files, not .cpp files. This is a fundamental difference from non-template code.

### Partial Specialization of Function Templates

**Wrong:**

```
// Trying to partially specialize a function template
template<typename T, typename U>
void process(T a, U b) {
    cout << "Generic" << endl;
}

// Partial specialization: U is int
template<typename T>
void process<T, int>(T a, int b) {  // Error!
    cout << "U is int" << endl;
}
```

Compilation error: function templates cannot be partially specialized. Only class templates support partial specialization.

**Correct:**

```
// Use overloading instead of partial specialization
template<typename T, typename U>
void process(T a, U b) {
    cout << "Generic" << endl;
}

// Overload with second parameter as int
template<typename T>
void process(T a, int b) {
    cout << "U is int" << endl;
}

process(3.14, "hello");  // Generic
process(3.14, 42);       // U is int
```

C++ does not allow partial specialization of function templates. Use function overloading instead. Overload resolution will pick the more specific version when the second argument is `int`.

## Summary

- Templates are a compile-time mechanism for generic programming. The compiler generates type-specific code (instantiations) from templates with zero runtime overhead.
- Function templates use template before the function. The compiler can deduce T from arguments (implicit deduction) or you can specify it explicitly (explicit instantiation).
- Class templates use template before the class. Prior to C++17, you must specify template arguments explicitly when creating objects: Stack s(10).
- Non-type template parameters (template) accept compile-time constant values. They enable fixed-size arrays, compile-time factorial, and zero-overhead abstractions.
- Full specialization (template<>) provides a custom implementation for a specific type. Both function and class templates support full specialization.
- Partial specialization specializes some template parameters while leaving others generic. Only class templates support partial specialization; function templates use overloading instead.
- Variadic templates (template<typename... Args>) accept any number of arguments. They use recursive peeling (process first, recurse on rest) with a base case for zero arguments.
- auto deduces variable types from initializers. decltype gives the type of an expression. Trailing return types (-> decltype(a+b)) combine with templates for generic return types.
- Template definitions must be in header files because the compiler needs the full definition at the point of instantiation. Separating into .h and .cpp causes linker errors.
- The entire C++ STL (vector, map, sort, find, etc.) is built on templates. Understanding templates is prerequisite for effective STL usage.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/templates-in-cpp/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/templates-in-cpp/practice/*
