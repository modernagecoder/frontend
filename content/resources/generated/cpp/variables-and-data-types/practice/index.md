---
title: "Practice: Variables, Data Types, and Type Casting"
description: "57 practice problems for Variables, Data Types, and Type Casting in C++"
slug: variables-and-data-types-practice
canonical: https://learn.modernagecoders.com/resources/cpp/variables-and-data-types/practice/
category: "C++"
---
# Practice: Variables, Data Types, and Type Casting

**Total questions:** 57

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    int x = 10;
    cout << x << endl;
    return 0;
}
```

*Hint:* A simple variable declaration and print.

**Answer:** `10`

The integer variable `x` is initialized to 10 and printed. Straightforward output.

### Q2. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    double d = 3.5;
    int n = d;
    cout << n << endl;
    return 0;
}
```

*Hint:* What happens when a double is assigned to an int?

**Answer:** `3`

When a `double` is assigned to an `int`, the decimal part is **truncated** (not rounded). 3.5 becomes 3, not 4. This is an implicit narrowing conversion.

### Q3. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    char c = 'B';
    cout << (int)c << endl;
    return 0;
}
```

*Hint:* What is the ASCII value of 'B'?

**Answer:** `66`

`'B'` has ASCII value 66 (A=65, B=66, C=67, ...). Casting a `char` to `int` reveals its ASCII integer representation.

### Q4. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    bool a = true;
    bool b = false;
    cout << a << " " << b << endl;
    return 0;
}
```

*Hint:* How does cout display bool values?

**Answer:** `1 0`

By default, `cout` prints `bool` values as integers: `true` is `1`, `false` is `0`. To print "true"/"false" as words, use `cout << boolalpha`.

### Q5. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << sizeof(int) << " " << sizeof(double) << endl;
    return 0;
}
```

*Hint:* Standard sizes on a 64-bit system.

**Answer:** `4 8`

On most modern systems, `sizeof(int)` is 4 bytes and `sizeof(double)` is 8 bytes.

### Q6. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    int a = 2147483647; // INT_MAX
    a = a + 1;
    cout << a << endl;
    return 0;
}
```

*Hint:* What happens when you exceed the maximum value of a signed int?

**Answer:** `-2147483648` (on most systems, but technically undefined behavior)

Signed integer overflow is **undefined behavior** in C++. On most two's complement systems, `INT_MAX + 1` wraps to `INT_MIN` (-2,147,483,648). The compiler is free to do anything, but this is the typical result.

### Q7. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    char c = 'A' + 3;
    cout << c << endl;
    return 0;
}
```

*Hint:* 'A' is 65 in ASCII. What character is at 68?

**Answer:** `D`

`'A'` has ASCII value 65. Adding 3 gives 68, which is the ASCII code for `'D'`. Since `c` is declared as `char`, it prints the character, not the number.

### Q8. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    unsigned int u = 0;
    u = u - 1;
    cout << u << endl;
    return 0;
}
```

*Hint:* Unsigned integer subtraction wraps around.

**Answer:** `4294967295`

Unsigned integer arithmetic uses modular arithmetic. `0 - 1` wraps to `2^32 - 1 = 4,294,967,295` (UINT_MAX). Unlike signed overflow, unsigned overflow is well-defined in C++.

### Q9. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    auto x = 5;
    auto y = 5.0;
    cout << sizeof(x) << " " << sizeof(y) << endl;
    return 0;
}
```

*Hint:* auto deduces the type: 5 is int, 5.0 is double.

**Answer:** `4 8`

`auto x = 5` deduces `int` (size 4). `auto y = 5.0` deduces `double` (size 8). The literal `5.0` has a decimal point, making it a double literal.

### Q10. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    int a = 100000;
    int b = 100000;
    long long result = a * b;
    cout << result << endl;
    return 0;
}
```

*Hint:* Both a and b are int. What precision is the multiplication done in?

**Answer:** `1410065408` (not 10000000000)

Even though `result` is `long long`, the multiplication `a * b` is performed in `int` precision because both operands are `int`. The result overflows `int` before being assigned to the `long long`. Fix: cast one operand first, e.g., `(long long)a * b`.

### Q11. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    char c = '9';
    int digit = c - '0';
    cout << digit << endl;
    return 0;
}
```

*Hint:* '0' is 48 in ASCII, '9' is 57.

**Answer:** `9`

`'9'` is ASCII 57, `'0'` is ASCII 48. `57 - 48 = 9`. This `c - '0'` idiom is the standard way to convert a digit character to its integer value in C/C++.

### Q12. [Easy] What is the difference between `int` and `long long` in terms of size and range?

*Hint:* Think about 4 bytes vs 8 bytes.

**Answer:** `int` is 4 bytes with range approximately -2.1 x 10^9 to +2.1 x 10^9. `long long` is 8 bytes with range approximately -9.2 x 10^18 to +9.2 x 10^18. Use `long long` when values can exceed 2 x 10^9.

In competitive programming, if a problem mentions values up to 10^9, `int` is sufficient. If values can reach 10^18 or if intermediate computations (like multiplication of two ints) can overflow, use `long long`.

### Q13. [Medium] What is the difference between `const` and `constexpr`?

*Hint:* Both prevent modification, but one guarantees compile-time evaluation.

**Answer:** `const` means the value cannot be changed after initialization, but the initial value may be computed at runtime. `constexpr` means the value must be computable at compile time and is embedded directly in the binary. `constexpr` implies `const`.

Example: `const int x = someFunction();` is valid -- the value is set at runtime but cannot change. `constexpr int y = someFunction();` only compiles if `someFunction()` is also `constexpr`. Use `constexpr` for things like array sizes, mathematical constants, and lookup tables.

### Q14. [Medium] Why does brace initialization `int x{3.5};` cause a compiler error while `int x = 3.5;` does not?

*Hint:* Brace initialization was designed to be stricter.

**Answer:** Brace initialization (C++11) was specifically designed to prevent **narrowing conversions** -- conversions that lose data. Converting 3.5 (double) to int loses the .5, which is a narrowing conversion. Copy initialization (`=`) allows this silently for backward compatibility with C.

This is why brace initialization is considered the safest form. It catches bugs at compile time that would otherwise be silent truncations. In new C++ code, prefer `{}` over `=` for initialization.

### Q15. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    float f = 1.1f;
    double d = 1.1;
    if (f == d) {
        cout << "Equal" << endl;
    } else {
        cout << "Not equal" << endl;
    }
    return 0;
}
```

*Hint:* float and double represent 1.1 with different precision.

**Answer:** `Not equal`

1.1 cannot be represented exactly in binary floating point. `float` stores it with ~7 digits of precision and `double` with ~15 digits. When `f` is promoted to `double` for comparison, the two representations differ slightly. Never compare floating-point numbers with `==`.

### Q16. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    int x = -1;
    unsigned int y = 1;
    if (x < y) {
        cout << "-1 is less" << endl;
    } else {
        cout << "-1 is NOT less" << endl;
    }
    return 0;
}
```

*Hint:* When comparing signed and unsigned, the signed value is converted to unsigned.

**Answer:** `-1 is NOT less`

When a signed int is compared with an unsigned int, the signed value is implicitly converted to unsigned. `-1` becomes `4294967295` (UINT_MAX), which is greater than 1. This is a classic C++ trap and a favorite interview question.

### Q17. [Hard] What is the difference between a C-style cast `(int)x` and `static_cast(x)`?

*Hint:* Think about type safety and what the compiler checks.

**Answer:** A C-style cast `(int)x` is unchecked -- it will attempt any conversion, even dangerous ones (like casting between unrelated pointer types). `static_cast(x)` is checked at compile time and only allows conversions that make semantic sense (like numeric conversions). It refuses dangerous casts, making bugs easier to catch.

`static_cast` is preferred in modern C++ because: (1) it is searchable in code (grep for static_cast), (2) it documents intent, (3) it prevents accidental dangerous casts. C-style casts are a holdover from C and should be avoided in new code.

### Q18. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    int a = 7, b = 2;
    cout << a / b << endl;
    cout << (double)a / b << endl;
    return 0;
}
```

*Hint:* Integer division truncates. Casting one operand to double changes the division.

**Answer:** `3`
`3.5`

`7 / 2` with both as `int` gives `3` (integer division truncates). `(double)7 / 2` promotes the division to floating-point, giving `3.5`. This is a fundamental technique for getting accurate division results.

### Q19. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    int x;
    cout << sizeof(x) << endl;
    return 0;
}
```

*Hint:* sizeof works on variables too, not just types.

**Answer:** `4`

`sizeof` can take either a type name (`sizeof(int)`) or a variable (`sizeof(x)`). Both return the size in bytes. Since `x` is an `int`, the result is 4.

### Q20. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    char lower = 'g';
    char upper = lower - ('a' - 'A');
    cout << upper << endl;
    return 0;
}
```

*Hint:* 'a' - 'A' is 32, the gap between lowercase and uppercase.

**Answer:** `G`

`'a' - 'A'` is 97 - 65 = 32. `'g' - 32` is 103 - 32 = 71, which is the ASCII code for `'G'`. This is the manual way to convert lowercase to uppercase without using `toupper()`.

## Mixed Questions

### Q1. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    int a = 5, b = 10;
    double c = a + b;
    cout << c << endl;
    return 0;
}
```

*Hint:* int + int is int, then converted to double for storage.

**Answer:** `15`

`5 + 10` is computed as int (15), then implicitly converted to double (15.0). `cout` prints `15` (no decimal point when the fractional part is zero, by default).

### Q2. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    char ch = 65;
    cout << ch << endl;
    return 0;
}
```

*Hint:* 65 is the ASCII code for which character?

**Answer:** `A`

When you assign an integer to a `char`, it is interpreted as an ASCII value. 65 is the ASCII code for `'A'`. Since `ch` is a `char`, `cout` prints the character, not the number.

### Q3. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    double x = 9.99;
    int y = static_cast(x);
    cout << y << endl;
    return 0;
}
```

*Hint:* static_cast from double to int truncates.

**Answer:** `9`

`static_cast(9.99)` truncates the decimal part, yielding `9`. Note it is truncation, not rounding -- 9.99 becomes 9, not 10.

### Q4. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    bool a = 42;
    bool b = 0;
    bool c = -1;
    cout << a << " " << b << " " << c << endl;
    return 0;
}
```

*Hint:* Any non-zero value is true, zero is false.

**Answer:** `1 0 1`

When an integer is assigned to `bool`, 0 becomes `false` (0) and any non-zero value becomes `true` (1). So 42 becomes true (1), 0 stays false (0), and -1 becomes true (1).

### Q5. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    int x = 5;
    double y = 2.0;
    auto z = x + y;
    cout << z << " " << sizeof(z) << endl;
    return 0;
}
```

*Hint:* int + double promotes to double. auto deduces double.

**Answer:** `7 8`

When `int` and `double` are added, the `int` is promoted to `double`. The result is `double` (7.0), and `auto` deduces `z` as `double`. `sizeof(double)` is 8.

### Q6. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    short s = 32767;
    s = s + 1;
    cout << s << endl;
    return 0;
}
```

*Hint:* 32767 is the maximum value for a signed short (2 bytes).

**Answer:** `-32768`

`short` is 2 bytes with range -32768 to 32767. Adding 1 to 32767 overflows and wraps to -32768 on most systems. Note: the addition `s + 1` is actually done in `int` (integer promotion), but the result is stored back in `short`, which truncates to -32768.

### Q7. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    cout << sizeof(3 + 4.0) << endl;
    cout << sizeof('A' + 1) << endl;
    return 0;
}
```

*Hint:* 3 + 4.0 promotes to double. 'A' + 1 promotes char to int.

**Answer:** `8`
`4`

`3 + 4.0`: int 3 is promoted to double, so the expression type is `double` (8 bytes). `'A' + 1`: `char` is promoted to `int` for arithmetic, so the expression type is `int` (4 bytes). `sizeof` evaluates the type of the expression without computing it.

### Q8. [Easy] Write a C++ program that declares variables of types int, double, char, and bool, assigns values to them, and prints each with its sizeof.

*Hint:* Use sizeof(variable_name) for each variable.

**Answer:** ```
#include 
using namespace std;
int main() {
    int age = 20;
    double gpa = 8.75;
    char grade = 'A';
    bool passed = true;
    cout << "age = " << age << ", size = " << sizeof(age) << endl;
    cout << "gpa = " << gpa << ", size = " << sizeof(gpa) << endl;
    cout << "grade = " << grade << ", size = " << sizeof(grade) << endl;
    cout << "passed = " << passed << ", size = " << sizeof(passed) << endl;
    return 0;
}
```

This demonstrates the four most common types. `sizeof` returns: int=4, double=8, char=1, bool=1. Note that `bool` prints as 1 (true), not the word "true".

### Q9. [Medium] Write a program that takes two integer inputs and prints their division result as a floating-point number (not truncated).

*Hint:* Cast one operand to double before dividing.

**Answer:** ```
#include 
using namespace std;
int main() {
    int a, b;
    cin >> a >> b;
    double result = static_cast(a) / b;
    cout << result << endl;
    return 0;
}
```

Input: 7 2
Output: 3.5

`static_cast(a)` converts `a` to double before the division, forcing floating-point division. Without the cast, `7 / 2` would give `3` (integer division).

### Q10. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    int x = 1000000;
    int y = 1000000;
    long long z = (long long)x * y;
    cout << z << endl;
    return 0;
}
```

*Hint:* The cast to long long happens before the multiplication.

**Answer:** `1000000000000`

`(long long)x` casts `x` to `long long` before the multiplication. Now the multiplication is done in `long long` precision (since one operand is `long long`), so no overflow occurs. The result is 10^12, which fits in `long long`.

### Q11. [Medium] What is the auto keyword in C++11, and does it make C++ dynamically typed?

*Hint:* auto deduces the type at compile time, not runtime.

**Answer:** The `auto` keyword tells the compiler to deduce the variable's type from its initializer. `auto x = 42;` makes `x` an `int`. C++ is **still statically typed** -- the type is determined at compile time and cannot change. `auto` is syntactic convenience, not dynamic typing.

`auto` is especially useful with complex types like iterators (`auto it = vec.begin();`) and lambda types. You cannot write `auto x;` without an initializer -- the compiler needs something to deduce from.

### Q12. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    const int N = 10;
    cout << N << endl;
    // N = 20;  // Would this work?
    return 0;
}
```

*Hint:* const prevents modification.

**Answer:** `10`

The `const` variable `N` is initialized to 10 and printed. The commented line `N = 20;` would cause a compiler error because `const` variables cannot be reassigned.

## Multiple Choice Questions

### Q1. [Easy] What is the size of `int` on most modern 64-bit systems?

**B is correct.** On virtually all modern systems (32-bit and 64-bit), `int` is 4 bytes (32 bits). The C++ standard only guarantees at least 16 bits, but in practice it is always 32 bits.

### Q2. [Easy] Which data type should you use when values can reach 10^18?

**C is correct.** `long long` is 8 bytes with a max of ~9.2 x 10^18. `int` (max ~2.1 x 10^9) and `unsigned int` (max ~4.3 x 10^9) are too small. `long` may be 4 or 8 bytes depending on the platform.

### Q3. [Easy] What is the ASCII value of 'A' in C++?

**B is correct.** `'A'` is 65. `'a'` is 97. `'0'` is 48. `'Z'` is 90. These ASCII values are fundamental and frequently tested.

### Q4. [Easy] What does `sizeof(char)` always return in C++?

**B is correct.** The C++ standard guarantees that `sizeof(char)` is always exactly 1 byte on every platform and every compiler.

### Q5. [Easy] What value does `bool b = 42;` assign to b?

**C is correct.** Any non-zero integer converts to `true` (1) when assigned to `bool`. Only 0 converts to `false` (0).

### Q6. [Medium] What happens with `int x{3.5};` in C++11?

**C is correct.** Brace initialization prevents narrowing conversions. Converting `double 3.5` to `int` loses the 0.5, which is a narrowing conversion. The compiler rejects it with an error.

### Q7. [Medium] What is the value of `'a' - 'A'`?

**B is correct.** `'a'` is 97 and `'A'` is 65. The difference is 32. This constant gap applies to all letters: `'b' - 'B'` is also 32, `'z' - 'Z'` is also 32.

### Q8. [Medium] Which of the following is the preferred explicit cast in modern C++?

**C is correct.** `static_cast(x)` is the recommended explicit cast. It is type-safe (checked at compile time), searchable, and clearly documents intent. C-style cast `(int)x` and functional cast `int(x)` are less safe. `cast` is not valid C++.

### Q9. [Medium] What does `constexpr int N = 10;` guarantee?

**C is correct.** `constexpr` guarantees that the value is computed at compile time and embedded in the binary. It also implies `const`, so `N` cannot be modified.

### Q10. [Medium] What is the output of `cout << (int)('0');`?

**B is correct.** The character `'0'` (zero) has ASCII value 48. Casting it to `int` reveals this numeric value.

### Q11. [Hard] What is the result of `unsigned int u = -1; cout << u;`?

**C is correct.** Assigning -1 to unsigned int performs modular arithmetic: -1 mod 2^32 = 4,294,967,295 (UINT_MAX). This compiles without error but is almost always a bug.

### Q12. [Hard] In the expression `int a = 100000; int b = 100000; long long c = a * b;`, what is the value of c?

**B is correct.** The multiplication `a * b` is performed in `int` precision (both operands are int). 10^10 overflows int, producing a garbage value (1410065408). The overflow happens BEFORE assignment to `long long`. Fix: `(long long)a * b`.

### Q13. [Hard] What happens when comparing `int x = -1;` with `unsigned int y = 0;` using `x < y`?

**B is correct.** When comparing signed and unsigned, the signed value is converted to unsigned. -1 becomes 4294967295 (UINT_MAX), which is greater than 0. So the comparison returns false. This is a well-known C++ pitfall.

### Q14. [Hard] How many significant decimal digits of precision does `float` have?

**B is correct.** `float` (4 bytes, 32-bit IEEE 754) has approximately 7 significant decimal digits. `double` (8 bytes) has ~15 digits. `long double` has ~18-19 digits.

### Q15. [Hard] What does `auto x = 5.0f;` deduce the type of x as?

**C is correct.** The literal `5.0f` has the `f` suffix, making it a `float` literal. Without the suffix, `5.0` would be `double`. `auto` deduces the exact type of the initializer.

### Q16. [Easy] What is the default value of an uninitialized local `int` variable in C++?

**C is correct.** Local variables in C++ are NOT initialized. They contain whatever was previously in that memory location. Global and static variables are initialized to 0.

### Q17. [Medium] Which initialization syntax prevents narrowing conversions?

**C is correct.** Brace initialization `{}` rejects narrowing conversions at compile time. `int x{3.5}` produces a compiler error because 3.5 cannot fit in int without data loss. Copy (`=`) and direct (`()`) initialization silently truncate.

### Q18. [Hard] What is the size of `long` on a 64-bit Windows system using MSVC?

**A is correct.** On Windows (MSVC), `long` is 4 bytes even on 64-bit systems (LLP64 model). On 64-bit Linux (GCC), `long` is 8 bytes (LP64 model). This platform difference is why `long long` is preferred for portability.

### Q19. [Medium] What does `sizeof(3.14)` return?

**B is correct.** Floating-point literals without a suffix (like `3.14`) are `double` by default in C++. `sizeof(double)` is 8 bytes. To get a `float` literal, use `3.14f`.

## Coding Challenges

### Challenge 1. Temperature Converter

**Difficulty:** Easy

Write a C++ program that reads a temperature in Celsius (as a double) and converts it to Fahrenheit using the formula F = (C * 9/5) + 32. Print the result with the correct decimal value.

**Constraints:**

- Use double for all calculations. Be careful with integer division: 9/5 is 1 in int arithmetic.

**Sample input:**

```
37.0
```

**Sample output:**

```
98.6
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    double celsius;
    cin >> celsius;
    double fahrenheit = (celsius * 9.0 / 5.0) + 32.0;
    cout << fahrenheit << endl;
    return 0;
}
```

### Challenge 2. ASCII Table Printer

**Difficulty:** Easy

Write a program that prints the ASCII values of all uppercase letters (A-Z) and all digits (0-9). Format: 'A' = 65, 'B' = 66, etc.

**Constraints:**

- Use a for loop with char type. Cast to int to get the ASCII value.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
'A' = 65
'B' = 66
...
'Z' = 90
'0' = 48
...
'9' = 57
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    for (char c = 'A'; c <= 'Z'; c++) {
        cout << "'" << c << "' = " << (int)c << endl;
    }
    for (char c = '0'; c <= '9'; c++) {
        cout << "'" << c << "' = " << (int)c << endl;
    }
    return 0;
}
```

### Challenge 3. Overflow Detector

**Difficulty:** Medium

Write a program that reads two integers a and b. Determine whether a * b would overflow an int. If it overflows, compute the result using long long and print it. If it fits in int, print it as int. Use INT_MAX from .

**Constraints:**

- Do not actually overflow. Check if (long long)a * b > INT_MAX or < INT_MIN before computing in int.

**Sample input:**

```
100000 100000
```

**Sample output:**

```
Overflow! Result (long long): 10000000000
```

**Solution:**

```cpp
#include <iostream>
#include <climits>
using namespace std;
int main() {
    int a, b;
    cin >> a >> b;
    long long product = (long long)a * b;
    if (product > INT_MAX || product < INT_MIN) {
        cout << "Overflow! Result (long long): " << product << endl;
    } else {
        cout << "Fits in int: " << (int)product << endl;
    }
    return 0;
}
```

### Challenge 4. Character Case Converter

**Difficulty:** Medium

Write a program that reads a single character. If it is an uppercase letter, convert it to lowercase. If it is a lowercase letter, convert it to uppercase. If it is neither, print it unchanged. Use ASCII arithmetic only (no toupper/tolower).

**Constraints:**

- Use 'A'-'Z' range check and 'a'-'z' range check. The gap between uppercase and lowercase is 32.

**Sample input:**

```
g
```

**Sample output:**

```
G
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    char c;
    cin >> c;
    if (c >= 'A' && c <= 'Z') {
        cout << (char)(c + 32) << endl;
    } else if (c >= 'a' && c <= 'z') {
        cout << (char)(c - 32) << endl;
    } else {
        cout << c << endl;
    }
    return 0;
}
```

### Challenge 5. Digit Extractor

**Difficulty:** Medium

Write a program that reads a 5-digit integer and prints each digit on a separate line. Use modulus (%) and division (/) operators, not string conversion.

**Constraints:**

- Extract digits using repeated division by 10. Print from most significant to least significant.

**Sample input:**

```
47329
```

**Sample output:**

```
4
7
3
2
9
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    int n;
    cin >> n;
    cout << n / 10000 << endl;
    cout << (n / 1000) % 10 << endl;
    cout << (n / 100) % 10 << endl;
    cout << (n / 10) % 10 << endl;
    cout << n % 10 << endl;
    return 0;
}
```

### Challenge 6. Type Size Comparator

**Difficulty:** Hard

Write a program that demonstrates all three initialization styles (copy, direct, brace) for each fundamental type (int, double, char, bool). For each, print the variable value and its sizeof. Then show that brace initialization catches narrowing: attempt int x{3.14} in a comment and explain why it fails.

**Constraints:**

- Use all three initialization styles. Include a comment showing the narrowing error.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Copy: int a = 10, size = 4
Direct: int b(20), size = 4
Brace: int c{30}, size = 4
...
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    // Copy initialization
    int a = 10;
    double d1 = 3.14;
    char c1 = 'A';
    bool b1 = true;

    // Direct initialization
    int a2(20);
    double d2(6.28);
    char c2('B');
    bool b2(false);

    // Brace initialization
    int a3{30};
    double d3{9.42};
    char c3{'C'};
    bool b3{true};

    cout << "Copy:   int=" << a << "(" << sizeof(a) << ") double=" << d1 << "(" << sizeof(d1) << ") char=" << c1 << "(" << sizeof(c1) << ") bool=" << b1 << "(" << sizeof(b1) << ")" << endl;
    cout << "Direct: int=" << a2 << "(" << sizeof(a2) << ") double=" << d2 << "(" << sizeof(d2) << ") char=" << c2 << "(" << sizeof(c2) << ") bool=" << b2 << "(" << sizeof(b2) << ")" << endl;
    cout << "Brace:  int=" << a3 << "(" << sizeof(a3) << ") double=" << d3 << "(" << sizeof(d3) << ") char=" << c3 << "(" << sizeof(c3) << ") bool=" << b3 << "(" << sizeof(b3) << ")" << endl;

    // int x{3.14};  // ERROR: narrowing conversion from double to int
    int x = 3.14;  // This compiles but truncates to 3
    cout << "Narrowed: " << x << endl;

    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/variables-and-data-types/*
