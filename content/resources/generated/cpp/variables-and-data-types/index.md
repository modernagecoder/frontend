---
title: "Variables, Data Types & Type Casting in C++ - int, float, double, char, bool, auto, const | Modern Age Coders"
description: "Master C++ data types (int, float, double, char, bool, long long), sizeof(), type casting (implicit, explicit, static_cast), auto keyword, const/constexpr, narrowing conversions, and variable initialization. 57 practice questions."
slug: variables-and-data-types
canonical: https://learn.modernagecoders.com/resources/cpp/variables-and-data-types
category: "C++"
keywords: ["c++ data types", "c++ variables", "c++ type casting", "sizeof in c++", "static_cast", "auto keyword c++", "const vs constexpr", "c++ narrowing conversion", "char arithmetic c++", "c++ type overflow"]
---
# Variables, Data Types, and Type Casting

**Difficulty:** Beginner  
**Reading time:** 25 min  
**Chapter:** 3  
**Practice questions:** 57

## What Are Variables and Data Types in C++?

A **variable** is a named storage location in memory that holds a value of a specific type. A **data type** tells the compiler how much memory to allocate and how to interpret the bits stored there. C++ is a **statically typed** language, meaning every variable must have its type declared at compile time and that type cannot change during execution.

Understanding data types is foundational. When you write `int x = 42;`, you are telling the compiler: allocate 4 bytes of memory, label that location `x`, interpret the bits as a signed 32-bit integer, and store the value 42 there. Every decision you make in C++ -- from choosing `int` vs `long long` for a counter, to using `double` vs `float` for precision, to understanding why `char` arithmetic works -- traces back to data types.

### Fundamental Data Types at a Glance

TypeSize (typical)RangeUse Case`bool`1 bytetrue (1) or false (0)Flags, conditions`char`1 byte-128 to 127 or 0 to 255Characters, ASCII`short`2 bytes-32,768 to 32,767Small integers`int`4 bytes-2,147,483,648 to 2,147,483,647General integers`long`4 or 8 bytesAt least -2B to +2BPlatform-dependent`long long`8 bytes-9.2 x 10^18 to 9.2 x 10^18Large integers, CP`unsigned int`4 bytes0 to 4,294,967,295Non-negative only`float`4 bytes~7 decimal digits precisionLow-precision decimals`double`8 bytes~15 decimal digits precisionHigh-precision decimals`long double`8-16 bytes~18-19 decimal digitsExtended precision

## Why Are Data Types Critical in C++?

In Python, you can write `x = 42` and then `x = "hello"` without any issue. Python figures out the type at runtime. C++ does not work that way. The type is fixed at compile time, and this rigidity is a feature, not a limitation.

### 1. Memory Efficiency

In competitive programming, you might create arrays of 10^7 elements. Using `long long` (8 bytes) instead of `int` (4 bytes) doubles your memory usage from 40MB to 80MB. Knowing your type sizes lets you stay within memory limits. In embedded systems, choosing `short` over `int` can be the difference between fitting in RAM or not.

### 2. Avoiding Overflow Bugs

The most common bug in competitive programming is integer overflow. If a problem says the answer can be up to 10^18, using `int` (max ~2 x 10^9) will silently overflow and give wrong answers. You need `long long`. Understanding type ranges prevents hours of debugging.

### 3. Interview Relevance

Interviewers at companies like Google, Amazon, and Microsoft frequently ask about type sizes, overflow behavior, implicit conversions, and the difference between `float` and `double`. Questions like "what happens when you assign a negative value to an unsigned int?" or "what is the output of `(int)3.9`?" are standard fare.

### 4. Type Safety and Correctness

C++ type casting rules can introduce subtle bugs. Implicit conversions (int to float, char to int) happen silently. Understanding when and how conversions occur prevents bugs in production code and competitive submissions alike.

## Detailed Explanation

### Variable Declaration and Initialization

C++ provides three ways to initialize variables:

- **Copy initialization:** `int x = 10;` -- the classic C-style assignment.
- **Direct initialization:** `int x(10);` -- uses parentheses, commonly seen with class constructors.
- **Brace initialization (C++11):** `int x{10};` -- the modern, safest form. Brace initialization **prevents narrowing conversions**. If you write `int x{3.5};`, the compiler will produce an error because 3.5 cannot be stored in an int without losing data. This does NOT happen with `int x = 3.5;` (which silently truncates to 3).

### sizeof() Operator

The `sizeof` operator returns the size in bytes of a type or variable. It is evaluated at **compile time**, not runtime -- no actual computation happens when the program runs. The result type is `size_t` (an unsigned integer type). You can use it with types (`sizeof(int)`) or with variables (`sizeof(x)`).

### Type Ranges and Overflow

Every integer type has a fixed range determined by its size and whether it is signed or unsigned. When a value exceeds this range, **overflow** occurs. For unsigned types, overflow wraps around (modular arithmetic). For signed types, overflow is **undefined behavior** in C++ -- the compiler can do anything, including producing unexpected results or optimizing away your overflow checks.

Key limits (from ``):

- `INT_MAX` = 2,147,483,647 (approximately 2.1 x 10^9)
- `INT_MIN` = -2,147,483,648
- `LLONG_MAX` = 9,223,372,036,854,775,807 (approximately 9.2 x 10^18)
- `UINT_MAX` = 4,294,967,295

### Implicit vs Explicit Type Casting

**Implicit casting** (type coercion) happens automatically when the compiler converts one type to another. The general rule is that smaller/less precise types are promoted to larger/more precise types:

- `char` -> `int` -> `long` -> `long long` -> `float` -> `double`
- When you write `int a = 5; double b = a;`, the int 5 is implicitly converted to double 5.0.
- Dangerous direction: `double d = 3.99; int n = d;` -- this silently truncates to 3.

**Explicit casting** is when you intentionally force a conversion:

- **C-style cast:** `(int)3.7` or `(double)5` -- works but is not type-safe.
- **static_cast (C++ style):** `static_cast(3.7)` -- preferred in modern C++ because it is checked at compile time and makes your intent explicit. It will not let you do dangerous casts (like casting between unrelated pointer types).

### The auto Keyword (C++11)

The `auto` keyword tells the compiler to deduce the type from the initializer. `auto x = 42;` makes `x` an `int`. `auto y = 3.14;` makes `y` a `double`. The variable still has a fixed type -- it is determined at compile time, not runtime. `auto` is especially useful with complex types like iterators: `auto it = myMap.begin();` instead of `map<string, int>::iterator it = myMap.begin();`.

### const and constexpr

`const` means "this value will not change after initialization." It is a promise to the compiler. `const int MAX_SIZE = 100;` prevents accidental modification.

`constexpr` (C++11) is stronger: it means "this value is known at compile time." `constexpr int SQUARE = 5 * 5;` guarantees the computation happens during compilation, not at runtime. Use `constexpr` for values that are truly compile-time constants. Use `const` for values that should not change but might be computed at runtime.

### ASCII Values and char Arithmetic

Every `char` in C++ is stored as an integer (its ASCII value). `'A'` is 65, `'a'` is 97, `'0'` is 48. Because chars are integers, you can perform arithmetic on them:

- `'A' + 1` gives 66 (which is `'B'`)
- `'a' - 'A'` gives 32 (the difference between lowercase and uppercase)
- `char c = '5'; int digit = c - '0';` converts the character '5' to the integer 5

This is heavily used in competitive programming for character manipulation without using library functions.

## Code Examples

### All Fundamental Data Types

```cpp
#include <iostream>
#include <climits>
#include <cfloat>
using namespace std;

int main() {
    bool flag = true;
    char letter = 'A';
    short s = 32000;
    int num = 100000;
    long l = 100000L;
    long long ll = 9000000000000LL;
    unsigned int u = 4000000000U;
    float f = 3.14f;
    double d = 3.141592653589793;
    long double ld = 3.141592653589793238L;

    cout << "bool: " << flag << " (size: " << sizeof(bool) << ")" << endl;
    cout << "char: " << letter << " (size: " << sizeof(char) << ")" << endl;
    cout << "short: " << s << " (size: " << sizeof(short) << ")" << endl;
    cout << "int: " << num << " (size: " << sizeof(int) << ")" << endl;
    cout << "long: " << l << " (size: " << sizeof(long) << ")" << endl;
    cout << "long long: " << ll << " (size: " << sizeof(long long) << ")" << endl;
    cout << "unsigned int: " << u << " (size: " << sizeof(unsigned int) << ")" << endl;
    cout << "float: " << f << " (size: " << sizeof(float) << ")" << endl;
    cout << "double: " << d << " (size: " << sizeof(double) << ")" << endl;
    cout << "long double: " << ld << " (size: " << sizeof(long double) << ")" << endl;
    return 0;
}
```

This demonstrates every fundamental data type with its suffix (`L` for long, `LL` for long long, `U` for unsigned, `f` for float) and its size using `sizeof`. Note that `bool` prints as 1 (true) or 0 (false), not as the word "true".

**Output:**

```
bool: 1 (size: 1)
char: A (size: 1)
short: 32000 (size: 2)
int: 100000 (size: 4)
long: 100000 (size: 4)
long long: 9000000000000 (size: 8)
unsigned int: 4000000000 (size: 4)
float: 3.14 (size: 4)
double: 3.14159 (size: 8)
long double: 3.14159 (size: 16)
```

### Three Ways to Initialize Variables

```cpp
#include <iostream>
using namespace std;

int main() {
    // Copy initialization (C-style)
    int a = 10;

    // Direct initialization
    int b(20);

    // Brace initialization (C++11) -- prevents narrowing
    int c{30};

    cout << "Copy: " << a << endl;
    cout << "Direct: " << b << endl;
    cout << "Brace: " << c << endl;

    // Narrowing: this compiles with = but NOT with {}
    // int d{3.5};  // ERROR: narrowing conversion
    int d = 3.5;    // Compiles, d becomes 3 (truncated)
    cout << "Narrowed: " << d << endl;

    return 0;
}
```

C++ offers three initialization syntaxes. Brace initialization `{}` is the safest because it rejects narrowing conversions at compile time. With `=` or `()`, the compiler silently truncates `3.5` to `3`. In interviews, this is a common question: what happens with `int x{3.5}` vs `int x = 3.5`?

**Output:**

```
Copy: 10
Direct: 20
Brace: 30
Narrowed: 3
```

### Integer Overflow Demonstration

```cpp
#include <iostream>
#include <climits>
using namespace std;

int main() {
    int maxInt = INT_MAX;
    cout << "INT_MAX: " << maxInt << endl;
    cout << "INT_MAX + 1: " << maxInt + 1 << endl;  // Undefined behavior!

    unsigned int u = 0;
    cout << "Unsigned 0 - 1: " << u - 1 << endl;  // Wraps to UINT_MAX

    short s = 32767;
    s = s + 1;
    cout << "short 32767 + 1: " << s << endl;  // Wraps to -32768

    cout << "INT_MAX: " << INT_MAX << endl;
    cout << "INT_MIN: " << INT_MIN << endl;
    cout << "LLONG_MAX: " << LLONG_MAX << endl;
    cout << "UINT_MAX: " << UINT_MAX << endl;

    return 0;
}
```

Overflow is the most common bug in competitive programming. When `INT_MAX` (2,147,483,647) is incremented, signed overflow occurs -- this is technically undefined behavior, but on most systems it wraps to `INT_MIN` (-2,147,483,648). Unsigned overflow is well-defined: `0 - 1` for unsigned int wraps to `UINT_MAX` (4,294,967,295). Always use `long long` when values can exceed 2 x 10^9.

**Output:**

```
INT_MAX: 2147483647
INT_MAX + 1: -2147483648
Unsigned 0 - 1: 4294967295
short 32767 + 1: -32768
INT_MAX: 2147483647
INT_MIN: -2147483648
LLONG_MAX: 9223372036854775807
UINT_MAX: 4294967295
```

### Implicit and Explicit Type Casting

```cpp
#include <iostream>
using namespace std;

int main() {
    // Implicit: int to double (safe, no data loss)
    int a = 7;
    double b = a;  // 7 becomes 7.0
    cout << "int to double: " << b << endl;

    // Implicit: double to int (dangerous, truncates)
    double pi = 3.14159;
    int truncated = pi;  // 3.14159 becomes 3
    cout << "double to int: " << truncated << endl;

    // Explicit: C-style cast
    double x = 9.8;
    int y = (int)x;
    cout << "C-style cast: " << y << endl;

    // Explicit: static_cast (modern C++, preferred)
    double m = 7.65;
    int n = static_cast<int>(m);
    cout << "static_cast: " << n << endl;

    // Integer division fix
    int p = 7, q = 2;
    cout << "7 / 2 (int): " << p / q << endl;
    cout << "7 / 2 (cast): " << static_cast<double>(p) / q << endl;

    return 0;
}
```

Implicit conversion from `int` to `double` is safe (widening). Converting `double` to `int` truncates the decimal part (not rounding -- 3.9 becomes 3, not 4). `static_cast` is preferred over C-style casts because it is checked at compile time. The last example shows the classic integer division fix: cast one operand to `double` before dividing.

**Output:**

```
int to double: 7
double to int: 3
C-style cast: 9
static_cast: 7
7 / 2 (int): 3
7 / 2 (cast): 3.5
```

### auto Keyword and const/constexpr

```cpp
#include <iostream>
using namespace std;

int main() {
    auto x = 42;        // int
    auto y = 3.14;      // double
    auto z = 'A';       // char
    auto w = true;      // bool
    auto s = "Hello";   // const char* (NOT string)

    cout << "x (int): " << x << ", size: " << sizeof(x) << endl;
    cout << "y (double): " << y << ", size: " << sizeof(y) << endl;
    cout << "z (char): " << z << ", size: " << sizeof(z) << endl;
    cout << "w (bool): " << w << ", size: " << sizeof(w) << endl;

    const int MAX_MARKS = 100;
    // MAX_MARKS = 200;  // ERROR: assignment of read-only variable

    constexpr int SQUARE = 5 * 5;  // Computed at compile time
    constexpr double PI = 3.14159265358979;

    cout << "MAX_MARKS: " << MAX_MARKS << endl;
    cout << "SQUARE: " << SQUARE << endl;
    cout << "PI: " << PI << endl;

    return 0;
}
```

`auto` deduces the type from the assigned value. Note that `auto s = "Hello"` deduces to `const char*`, not `std::string`. `const` prevents modification after initialization. `constexpr` guarantees compile-time evaluation -- the value is baked into the binary. Use `constexpr` for true constants (pi, max sizes) and `const` for values that should not change but may be computed at runtime.

**Output:**

```
x (int): 42, size: 4
y (double): 3.14, size: 8
z (char): A, size: 1
w (bool): 1, size: 1
MAX_MARKS: 100
SQUARE: 25
PI: 3.14159
```

### ASCII Values and char Arithmetic

```cpp
#include <iostream>
using namespace std;

int main() {
    char ch = 'A';
    cout << "Character: " << ch << endl;
    cout << "ASCII value: " << (int)ch << endl;

    // char arithmetic
    cout << "'A' + 1 = " << (char)('A' + 1) << " (ASCII " << 'A' + 1 << ")" << endl;
    cout << "'a' - 'A' = " << 'a' - 'A' << endl;  // 32
    cout << "'Z' - 'A' = " << 'Z' - 'A' << endl;  // 25

    // Convert char digit to int
    char digit = '7';
    int value = digit - '0';  // '7' - '0' = 55 - 48 = 7
    cout << "char '" << digit << "' to int: " << value << endl;

    // Convert lowercase to uppercase
    char lower = 'm';
    char upper = lower - 32;  // or lower - ('a' - 'A')
    cout << lower << " to uppercase: " << upper << endl;

    // Print all uppercase letters
    cout << "A-Z: ";
    for (char c = 'A'; c <= 'Z'; c++) {
        cout << c;
    }
    cout << endl;

    return 0;
}
```

Every `char` is an integer internally. `'A'` is 65, `'a'` is 97, `'0'` is 48. The expression `c - '0'` converts a digit character to its numeric value -- this is used constantly in competitive programming when parsing input character by character. The difference between `'a'` and `'A'` is always 32, which enables case conversion without library functions.

**Output:**

```
Character: A
ASCII value: 65
'A' + 1 = B (ASCII 66)
'a' - 'A' = 32
'Z' - 'A' = 25
char '7' to int: 7
m to uppercase: M
A-Z: ABCDEFGHIJKLMNOPQRSTUVWXYZ
```

### Type Limits from <climits> and <cfloat>

```cpp
#include <iostream>
#include <climits>
#include <cfloat>
using namespace std;

int main() {
    cout << "=== Integer Limits ===" << endl;
    cout << "CHAR_MIN: " << CHAR_MIN << endl;
    cout << "CHAR_MAX: " << CHAR_MAX << endl;
    cout << "SHRT_MIN: " << SHRT_MIN << endl;
    cout << "SHRT_MAX: " << SHRT_MAX << endl;
    cout << "INT_MIN:  " << INT_MIN << endl;
    cout << "INT_MAX:  " << INT_MAX << endl;
    cout << "LLONG_MIN: " << LLONG_MIN << endl;
    cout << "LLONG_MAX: " << LLONG_MAX << endl;
    cout << "UINT_MAX:  " << UINT_MAX << endl;

    cout << "\n=== Floating Point Limits ===" << endl;
    cout << "FLT_MIN: " << FLT_MIN << endl;
    cout << "FLT_MAX: " << FLT_MAX << endl;
    cout << "DBL_MIN: " << DBL_MIN << endl;
    cout << "DBL_MAX: " << DBL_MAX << endl;
    cout << "FLT_DIG (decimal digits): " << FLT_DIG << endl;
    cout << "DBL_DIG (decimal digits): " << DBL_DIG << endl;

    return 0;
}
```

The headers `` and `` define macros for the minimum and maximum values of each type. `FLT_DIG` is 6 (float has ~7 significant digits) and `DBL_DIG` is 15 (double has ~15-16 significant digits). These macros are essential for competitive programming to check if your values fit in a given type.

**Output:**

```
=== Integer Limits ===
CHAR_MIN: -128
CHAR_MAX: 127
SHRT_MIN: -32768
SHRT_MAX: 32767
INT_MIN:  -2147483648
INT_MAX:  2147483647
LLONG_MIN: -9223372036854775808
LLONG_MAX: 9223372036854775807
UINT_MAX:  4294967295

=== Floating Point Limits ===
FLT_MIN: 1.17549e-38
FLT_MAX: 3.40282e+38
DBL_MIN: 2.22507e-308
DBL_MAX: 1.79769e+308
FLT_DIG (decimal digits): 6
DBL_DIG (decimal digits): 15
```

## Common Mistakes

### Integer Overflow in Multiplication

**Wrong:**

```
#include <iostream>
using namespace std;
int main() {
    int a = 100000;
    int b = 100000;
    int result = a * b;  // Overflows!
    cout << result << endl;
    return 0;
}
```

Prints 1410065408 instead of 10000000000 (silent overflow, no compiler error)

**Correct:**

```
#include <iostream>
using namespace std;
int main() {
    long long a = 100000;
    long long b = 100000;
    long long result = a * b;
    cout << result << endl;
    return 0;
}
```

100000 x 100000 = 10^10, which exceeds `INT_MAX` (~2.1 x 10^9). The multiplication happens in `int` precision and overflows before the result is stored. Even if `result` is `long long`, if both operands are `int`, the multiplication is done in `int`. At least one operand must be `long long`.

### Assigning a Negative Value to unsigned int

**Wrong:**

```
#include <iostream>
using namespace std;
int main() {
    unsigned int x = -1;
    cout << x << endl;
    return 0;
}
```

Prints 4294967295 instead of -1 (no compiler error by default)

**Correct:**

```
#include <iostream>
using namespace std;
int main() {
    int x = -1;  // Use signed int for negative values
    cout << x << endl;
    return 0;
}
```

Assigning -1 to an `unsigned int` wraps around using modular arithmetic: -1 mod 2^32 = 4,294,967,295 (`UINT_MAX`). This is well-defined in C++ but almost always a bug. Never use unsigned types for values that could be negative. A common trap: `string::find()` returns `string::npos` which is an unsigned value.

### Using = Instead of == and Getting Implicit Conversion

**Wrong:**

```
#include <iostream>
using namespace std;
int main() {
    int x = 0;
    if (x = 5) {  // Assignment, not comparison!
        cout << "This always executes" << endl;
    }
    cout << "x is now: " << x << endl;
    return 0;
}
```

x becomes 5 (assigned), and the if condition is true (5 is non-zero). No compiler error.

**Correct:**

```
#include <iostream>
using namespace std;
int main() {
    int x = 0;
    if (x == 5) {  // Comparison
        cout << "x is 5" << endl;
    }
    cout << "x is still: " << x << endl;
    return 0;
}
```

In C++, `x = 5` inside an `if` is legal -- it assigns 5 to x and then evaluates the result (5, which is truthy). This is a classic bug. Compile with `-Wall` to get a warning. Some programmers write `if (5 == x)` (Yoda conditions) to catch this, since `5 = x` would cause a compiler error.

### Floating Point Precision Loss

**Wrong:**

```
#include <iostream>
using namespace std;
int main() {
    float f = 123456789.0f;
    cout << f << endl;  // Loses precision!
    return 0;
}
```

Prints 123456792 instead of 123456789 (float has only ~7 digits of precision)

**Correct:**

```
#include <iostream>
using namespace std;
int main() {
    double d = 123456789.0;
    cout << d << endl;  // double has ~15 digits of precision
    return 0;
}
```

`float` has only about 7 significant decimal digits. The value 123456789 has 9 digits, so precision is lost. `double` has about 15 significant digits, which is sufficient. In competitive programming, always use `double` for floating-point values unless you have a specific reason to use `float`.

### Uninitialized Variable Contains Garbage

**Wrong:**

```
#include <iostream>
using namespace std;
int main() {
    int x;
    cout << x << endl;  // Garbage value!
    return 0;
}
```

Prints unpredictable garbage value (could be anything: 0, -858993460, 32767, etc.)

**Correct:**

```
#include <iostream>
using namespace std;
int main() {
    int x = 0;  // Always initialize
    cout << x << endl;
    return 0;
}
```

Unlike Java (which initializes to 0) or Python (which requires assignment), C++ does NOT initialize local variables. An uninitialized variable contains whatever was previously in that memory location. This is **undefined behavior** and a common source of hard-to-find bugs. Always initialize your variables.

## Summary

- C++ has primitive types: bool (1 byte), char (1 byte), short (2 bytes), int (4 bytes), long (4/8 bytes), long long (8 bytes), float (4 bytes), double (8 bytes). Use sizeof() to check sizes.
- Variables can be initialized three ways: copy (int x = 10), direct (int x(10)), and brace (int x{10}). Brace initialization prevents narrowing conversions and is the safest form.
- Integer overflow is the most common CP bug. INT_MAX is ~2.1 x 10^9. Use long long for values up to ~9.2 x 10^18. Signed overflow is undefined behavior; unsigned overflow wraps around.
- Implicit casting follows a promotion hierarchy: char -> int -> long -> long long -> float -> double. Narrowing (double to int) silently truncates the decimal part.
- Explicit casting: C-style (int)x works but is not type-safe. static_cast(x) is preferred in modern C++ because it is compile-time checked.
- The auto keyword (C++11) deduces the type from the initializer. The type is still fixed at compile time. auto x = 42 makes x an int, not a dynamic type.
- const prevents modification after initialization. constexpr guarantees compile-time evaluation. Use constexpr for true constants like pi or array sizes.
- Characters are stored as ASCII integers. 'A' is 65, 'a' is 97, '0' is 48. char arithmetic (c - '0', c - 'A', c + 32) is used extensively in competitive programming.
- Use  for INT_MAX, INT_MIN, LLONG_MAX and  for FLT_MAX, DBL_MAX. These are essential for checking if values fit in a type.
- float has ~7 decimal digits of precision, double has ~15. Always prefer double over float in competitive programming and general use.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/variables-and-data-types/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/variables-and-data-types/practice/*
