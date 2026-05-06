---
title: "Operators in C++ - Arithmetic, Relational, Logical, Bitwise, Ternary & Precedence | Modern Age Coders"
description: "Master all C++ operators: arithmetic, relational, logical, bitwise, assignment, increment/decrement, ternary, sizeof, comma operator, operator precedence, and short-circuit evaluation. 57 practice questions."
slug: operators-in-cpp
canonical: https://learn.modernagecoders.com/resources/cpp/operators-in-cpp
category: "C++"
keywords: ["c++ operators", "arithmetic operators c++", "bitwise operators c++", "ternary operator c++", "operator precedence c++", "pre increment post increment", "short circuit evaluation", "logical operators c++", "modulus operator c++", "c++ operator examples"]
---
# Operators in C++

**Difficulty:** Beginner  
**Reading time:** 25 min  
**Chapter:** 4  
**Practice questions:** 57

## What Are Operators in C++?

An **operator** is a symbol that tells the compiler to perform a specific mathematical, logical, or data manipulation operation on one or more operands. Operators are the building blocks of every expression in C++. When you write `a + b`, the `+` is an operator and `a` and `b` are operands.

C++ has one of the richest operator sets among programming languages. Unlike Python (which has no bitwise shift or ternary `?:` in the same sense) or Java (which lacks unsigned right shift in the same way), C++ gives you direct control over bit-level operations, memory addresses, and more.

### Categories of C++ Operators

CategoryOperatorsExampleArithmetic`+ - * / %``a + b`, `a % b`Relational`== != < > <= >=``a == b`, `a < b`Logical`&& || !``a && b`, `!a`Bitwise`& | ^ ~ << >>``a & b`, `a << 2`Assignment`= += -= *= /= %= &= |= ^= <<= >>=``a += 5`Increment/Decrement`++ --``++a`, `a++`Ternary`?:``a > b ? a : b`sizeof`sizeof``sizeof(int)`Comma`,``(a=1, b=2, a+b)`

## Why Master Operators?

Operators appear in every single line of meaningful C++ code. Understanding them deeply -- especially edge cases like integer division, modulus with negatives, pre vs post increment in expressions, and bitwise tricks -- separates average programmers from strong ones.

### 1. Competitive Programming

Bitwise operators are essential for bitmask DP, subset enumeration, and efficient flag manipulation. Knowing that `n & (n-1)` clears the lowest set bit, or that `x ^ x = 0`, saves time in contests. Short-circuit evaluation is used for safe null checks and boundary conditions.

### 2. Interview Questions

Questions like "What is the output of `cout << (5 > 3 ? 10 : 20)`?" or "What is `-7 % 3` in C++?" or "Explain the difference between `++i` and `i++`" appear in almost every technical screening at companies like Amazon, Flipkart, and Infosys.

### 3. Writing Correct Code

Operator precedence bugs are among the most subtle in C++. `a & b == 0` does NOT check if the AND of a and b is zero -- it checks if `b == 0` first (because `==` has higher precedence than `&`). Knowing precedence prevents these traps.

## Detailed Explanation

### Arithmetic Operators

The five arithmetic operators are `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), and `%` (modulus/remainder).

**Integer Division:** When both operands are integers, `/` performs integer division (truncation toward zero). `7 / 2` is `3`, not `3.5`. `-7 / 2` is `-3` (truncated toward zero), not `-4`. If you want floating-point division, cast at least one operand: `(double)7 / 2` gives `3.5`.

**Modulus with Negatives:** In C++11 and later, the result of `%` takes the sign of the dividend (left operand). `-7 % 3` is `-1`. `7 % -3` is `1`. `-7 % -3` is `-1`. This is guaranteed by the standard since C++11.

### Relational Operators

These compare two values and return a `bool` (true/false, printed as 1/0): `==` (equal), `!=` (not equal), `<` (less than), `>` (greater than), `<=` (less or equal), `>=` (greater or equal). Chaining like `1 < x < 10` does NOT work as expected in C++ -- it evaluates left to right: `(1 < x)` gives 0 or 1, then `0 < 10` or `1 < 10` is always true.

### Logical Operators

`&&` (AND), `||` (OR), `!` (NOT). These work on boolean values and use **short-circuit evaluation**: in `a && b`, if `a` is false, `b` is never evaluated. In `a || b`, if `a` is true, `b` is never evaluated. This is not just an optimization -- it is a correctness tool: `ptr != NULL && ptr->val == 5` safely avoids dereferencing a null pointer.

### Bitwise Operators

These operate on individual bits:

- `&` (AND): Each bit is 1 only if both bits are 1. `5 & 3` = `0101 & 0011` = `0001` = 1.
- `|` (OR): Each bit is 1 if either bit is 1. `5 | 3` = `0101 | 0011` = `0111` = 7.
- `^` (XOR): Each bit is 1 if exactly one bit is 1. `5 ^ 3` = `0101 ^ 0011` = `0110` = 6.
- `~` (NOT/complement): Flips every bit. `~0` gives -1 (all bits set to 1 in two's complement).
- `<<` (left shift): `x << n` multiplies x by 2^n. `1 << 3` = 8.
- `>>` (right shift): `x >> n` divides x by 2^n (for non-negative values). `16 >> 2` = 4.

### Pre-increment vs Post-increment

`++x` (pre-increment): increments x, then returns the new value. `x++` (post-increment): returns the current value of x, then increments it. In a standalone statement `x++;` vs `++x;`, the effect is identical. The difference matters in expressions: `int a = ++x;` gives a the incremented value, while `int a = x++;` gives a the old value.

### Ternary Operator

Syntax: `condition ? value_if_true : value_if_false`. It is the only ternary (three-operand) operator in C++. `int max = (a > b) ? a : b;` is a compact alternative to an if-else block. Ternary can be nested but should not be -- nested ternaries are unreadable.

### Comma Operator

The comma operator evaluates both operands and returns the value of the right operand. `int x = (1, 2, 3);` assigns 3 to x. It is rarely used directly but appears in for loops: `for (int i=0, j=10; i<j; i++, j--)`.

### Operator Precedence (Highest to Lowest, simplified)

PrecedenceOperators1 (highest)`() [] -> . ::`2`++ -- (postfix) sizeof`3`++ -- (prefix) ! ~ + - (unary) * & (dereference/address)`4`* / %`5`+ -`6`<< >>`7`< <= > >=`8`== !=`9`&` (bitwise AND)10`^` (bitwise XOR)11`|` (bitwise OR)12`&&`13`||`14`?:`15`= += -= *= /= %=` etc.16 (lowest)`,`

The critical trap: bitwise operators (`& | ^`) have **lower** precedence than relational operators (`== != < >`). So `x & 1 == 0` is parsed as `x & (1 == 0)` = `x & 0` = 0. Always use parentheses: `(x & 1) == 0`.

## Code Examples

### Arithmetic Operators and Integer Division

```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 17, b = 5;

    cout << "a + b = " << a + b << endl;   // 22
    cout << "a - b = " << a - b << endl;   // 12
    cout << "a * b = " << a * b << endl;   // 85
    cout << "a / b = " << a / b << endl;   // 3 (integer division)
    cout << "a % b = " << a % b << endl;   // 2 (remainder)

    // Float division vs int division
    cout << "17 / 5 (int): " << 17 / 5 << endl;          // 3
    cout << "17.0 / 5 (double): " << 17.0 / 5 << endl;   // 3.4

    // Modulus with negatives (C++11 guaranteed)
    cout << "-7 % 3 = " << -7 % 3 << endl;    // -1
    cout << "7 % -3 = " << 7 % -3 << endl;    // 1
    cout << "-7 % -3 = " << -7 % -3 << endl;  // -1

    return 0;
}
```

Integer division truncates toward zero: `17/5=3`, not 3.4. For float division, at least one operand must be a floating-point type. The modulus result takes the sign of the dividend (left operand) since C++11. `-7 % 3 = -1` because -7 = (-2)*3 + (-1).

**Output:**

```
a + b = 22
a - b = 12
a * b = 85
a / b = 3
a % b = 2
17 / 5 (int): 3
17.0 / 5 (double): 3.4
-7 % 3 = -1
7 % -3 = 1
-7 % -3 = -1
```

### Pre-increment vs Post-increment

```cpp
#include <iostream>
using namespace std;

int main() {
    int x = 5;
    int a = ++x;  // Pre: increment first, then assign
    cout << "After ++x: x=" << x << ", a=" << a << endl;  // x=6, a=6

    int y = 5;
    int b = y++;  // Post: assign first, then increment
    cout << "After y++: y=" << y << ", b=" << b << endl;  // y=6, b=5

    // In a standalone statement, both are identical
    int m = 10;
    m++;  // m becomes 11
    ++m;  // m becomes 12
    cout << "m = " << m << endl;

    // Pre-decrement and post-decrement
    int p = 10;
    cout << "--p = " << --p << endl;  // 9
    cout << "p-- = " << p-- << endl;  // 9 (prints current, then decrements)
    cout << "p   = " << p << endl;    // 8

    return 0;
}
```

`++x` increments first, then returns the new value (6). `y++` returns the current value (5) first, then increments y to 6. This distinction matters in expressions but not in standalone statements. In for loops, `i++` and `++i` are functionally identical for primitive types.

**Output:**

```
After ++x: x=6, a=6
After y++: y=6, b=5
m = 12
--p = 9
p-- = 9
p   = 8
```

### Bitwise Operators

```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 5;  // 0101 in binary
    int b = 3;  // 0011 in binary

    cout << "a & b  = " << (a & b) << endl;   // 0001 = 1 (AND)
    cout << "a | b  = " << (a | b) << endl;   // 0111 = 7 (OR)
    cout << "a ^ b  = " << (a ^ b) << endl;   // 0110 = 6 (XOR)
    cout << "~a     = " << (~a) << endl;       // -6 (bitwise NOT)
    cout << "a << 1 = " << (a << 1) << endl;  // 1010 = 10 (left shift)
    cout << "a >> 1 = " << (a >> 1) << endl;  // 0010 = 2 (right shift)

    // Useful bitwise tricks
    int n = 12;
    cout << "\n--- Bitwise Tricks ---" << endl;
    cout << "Check if " << n << " is even: " << ((n & 1) == 0) << endl;
    cout << "Multiply " << n << " by 4: " << (n << 2) << endl;
    cout << "Divide " << n << " by 2: " << (n >> 1) << endl;

    // XOR swap
    int x = 10, y = 20;
    x ^= y;
    y ^= x;
    x ^= y;
    cout << "After XOR swap: x=" << x << ", y=" << y << endl;

    return 0;
}
```

Bitwise AND (`&`) keeps bits that are 1 in both. OR (`|`) keeps bits that are 1 in either. XOR (`^`) keeps bits that differ. Left shift (`<<`) multiplies by 2^n. Right shift (`>>`) divides by 2^n. The XOR swap trick swaps two values without a temp variable. `n & 1` checks the last bit to determine even/odd.

**Output:**

```
a & b  = 1
a | b  = 7
a ^ b  = 6
~a     = -6
a << 1 = 10
a >> 1 = 2

--- Bitwise Tricks ---
Check if 12 is even: 1
Multiply 12 by 4: 48
Divide 12 by 2: 6
After XOR swap: x=20, y=10
```

### Logical Operators and Short-Circuit Evaluation

```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 5, b = 0;

    cout << "a && b: " << (a && b) << endl;   // 0 (5 is true, 0 is false)
    cout << "a || b: " << (a || b) << endl;   // 1 (5 is true)
    cout << "!a: " << (!a) << endl;            // 0 (not true = false)
    cout << "!b: " << (!b) << endl;            // 1 (not false = true)

    // Short-circuit demonstration
    int x = 0;
    bool result = (x != 0) && (10 / x > 1);  // Safe! 10/x never executes
    cout << "Short-circuit AND: " << result << endl;

    int y = 5;
    bool result2 = (y > 0) || (10 / 0 > 1);  // Safe! 10/0 never executes
    cout << "Short-circuit OR: " << result2 << endl;

    // Truthiness: any non-zero is true
    cout << "\n(42 && -1): " << (42 && -1) << endl;    // 1 (both non-zero)
    cout << "(0 || 100): " << (0 || 100) << endl;      // 1 (100 is non-zero)

    return 0;
}
```

Short-circuit evaluation is critical for safety. In `(x != 0) && (10 / x > 1)`, if x is 0, the first condition is false and the division is never executed -- preventing a division by zero crash. The same logic applies to null pointer checks: `ptr != NULL && ptr->val`.

**Output:**

```
a && b: 0
a || b: 1
!a: 0
!b: 1
Short-circuit AND: 0
Short-circuit OR: 1

(42 && -1): 1
(0 || 100): 1
```

### Ternary Operator and Comma Operator

```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 15, b = 20;

    // Ternary operator
    int maxVal = (a > b) ? a : b;
    cout << "Max of " << a << " and " << b << ": " << maxVal << endl;

    // Ternary for absolute value
    int x = -7;
    int absX = (x >= 0) ? x : -x;
    cout << "Absolute value of " << x << ": " << absX << endl;

    // Nested ternary (readable version)
    int marks = 75;
    string grade = (marks >= 90) ? "A" :
                   (marks >= 80) ? "B" :
                   (marks >= 70) ? "C" :
                   (marks >= 60) ? "D" : "F";
    cout << "Grade for " << marks << ": " << grade << endl;

    // Comma operator
    int y = (1, 2, 3);  // y = 3 (last expression)
    cout << "Comma result: " << y << endl;

    // Comma in for loop
    for (int i = 0, j = 10; i < j; i++, j--) {
        cout << "i=" << i << " j=" << j << "  ";
    }
    cout << endl;

    return 0;
}
```

The ternary operator `?:` is a compact if-else. It returns a value, so it can be used in assignments and expressions. The comma operator evaluates all operands left to right and returns the last one. It is most commonly seen in for loops to update multiple variables.

**Output:**

```
Max of 15 and 20: 20
Absolute value of -7: 7
Grade for 75: C
Comma result: 3
i=0 j=10  i=1 j=9  i=2 j=8  i=3 j=7  i=4 j=6  
```

### Operator Precedence Traps

```cpp
#include <iostream>
using namespace std;

int main() {
    // Trap 1: Bitwise vs relational precedence
    int x = 5;
    cout << "x & 1 == 0: " << (x & 1 == 0) << endl;      // Parsed as x & (1==0) = 5 & 0 = 0
    cout << "(x & 1) == 0: " << ((x & 1) == 0) << endl;    // Correct: (5 & 1) = 1, 1==0 = false

    // Trap 2: Multiplication before addition
    cout << "2 + 3 * 4 = " << 2 + 3 * 4 << endl;  // 14, not 20

    // Trap 3: Assignment in condition
    int a = 0;
    if (a = 5) {  // Assignment, not comparison! a becomes 5, condition is true
        cout << "a = 5 was assigned (truthy)" << endl;
    }

    // Trap 4: Chained comparisons do not work as expected
    int val = 5;
    // This does NOT check if 1 < val < 10
    cout << "1 < 5 < 3: " << (1 < 5 < 3) << endl;  // (true < 3) = (1 < 3) = true!
    // Correct way:
    cout << "1 < val && val < 10: " << (1 < val && val < 10) << endl;

    return 0;
}
```

The most dangerous precedence trap is bitwise operators having lower precedence than relational operators. `x & 1 == 0` is parsed as `x & (1 == 0)`, not `(x & 1) == 0`. Always use parentheses with bitwise operators. Chained comparisons like `1 < x < 10` do not work in C++ -- they evaluate left to right, giving unexpected results.

**Output:**

```
x & 1 == 0: 0
(x & 1) == 0: 0
2 + 3 * 4 = 14
a = 5 was assigned (truthy)
1 < 5 < 3: 1
1 < val && val < 10: 1
```

### Assignment Operators and sizeof

```cpp
#include <iostream>
using namespace std;

int main() {
    int x = 10;
    cout << "x = " << x << endl;

    x += 5;   // x = x + 5
    cout << "x += 5: " << x << endl;   // 15

    x -= 3;   // x = x - 3
    cout << "x -= 3: " << x << endl;   // 12

    x *= 2;   // x = x * 2
    cout << "x *= 2: " << x << endl;   // 24

    x /= 4;   // x = x / 4
    cout << "x /= 4: " << x << endl;   // 6

    x %= 4;   // x = x % 4
    cout << "x %= 4: " << x << endl;   // 2

    x <<= 3;  // x = x << 3 (multiply by 8)
    cout << "x <<= 3: " << x << endl;  // 16

    x >>= 1;  // x = x >> 1 (divide by 2)
    cout << "x >>= 1: " << x << endl;  // 8

    // sizeof as an operator
    cout << "\nsizeof(x): " << sizeof(x) << endl;
    cout << "sizeof(int): " << sizeof(int) << endl;
    cout << "sizeof(x + 1.0): " << sizeof(x + 1.0) << endl;  // double

    return 0;
}
```

Compound assignment operators combine an operation with assignment. `x += 5` is shorthand for `x = x + 5`. Bitwise shift assignments (`<<=`, `>>=`) are useful for power-of-2 multiplications. `sizeof` is an operator (not a function) that returns the size in bytes. It is evaluated at compile time.

**Output:**

```
x = 10
x += 5: 15
x -= 3: 12
x *= 2: 24
x /= 4: 6
x %= 4: 2
x <<= 3: 16
x >>= 1: 8

sizeof(x): 4
sizeof(int): 4
sizeof(x + 1.0): 8
```

## Common Mistakes

### Bitwise Operator Precedence Trap

**Wrong:**

```
#include <iostream>
using namespace std;
int main() {
    int x = 6;
    if (x & 1 == 0) {
        cout << "Even" << endl;
    } else {
        cout << "Odd" << endl;
    }
    return 0;
}
```

Prints 'Odd' even though 6 is even. The expression is parsed as x & (1 == 0) = 6 & 0 = 0 (false).

**Correct:**

```
#include <iostream>
using namespace std;
int main() {
    int x = 6;
    if ((x & 1) == 0) {
        cout << "Even" << endl;
    } else {
        cout << "Odd" << endl;
    }
    return 0;
}
```

The `==` operator has higher precedence than `&`. So `x & 1 == 0` is parsed as `x & (1 == 0)` = `x & 0` = 0. Always wrap bitwise operations in parentheses when comparing: `(x & 1) == 0`.

### Using = Instead of == in Conditions

**Wrong:**

```
#include <iostream>
using namespace std;
int main() {
    int x = 5;
    if (x = 10) {  // Assignment, not comparison!
        cout << "x is 10" << endl;
    }
    return 0;
}
```

Always prints 'x is 10' because x=10 assigns 10 and returns 10 (truthy). No compiler error.

**Correct:**

```
#include <iostream>
using namespace std;
int main() {
    int x = 5;
    if (x == 10) {  // Comparison
        cout << "x is 10" << endl;
    }
    return 0;
}
```

Single `=` is assignment, double `==` is comparison. The assignment `x = 10` sets x to 10 and returns 10, which is truthy. Compile with `-Wall` to get a warning about this. Some programmers use Yoda conditions (`10 == x`) to catch this.

### Integer Division When Expecting Float Result

**Wrong:**

```
#include <iostream>
using namespace std;
int main() {
    int total = 7;
    int count = 2;
    double average = total / count;
    cout << "Average: " << average << endl;
    return 0;
}
```

Prints 3 instead of 3.5. The division is done in int first, then converted to double.

**Correct:**

```
#include <iostream>
using namespace std;
int main() {
    int total = 7;
    int count = 2;
    double average = static_cast<double>(total) / count;
    cout << "Average: " << average << endl;
    return 0;
}
```

When both operands of `/` are `int`, integer division is performed, giving 3. The 3 is then stored as 3.0 in the double. To get 3.5, cast at least one operand to `double` before dividing.

### Confusing Pre-increment and Post-increment in Expressions

**Wrong:**

```
#include <iostream>
using namespace std;
int main() {
    int x = 5;
    int y = x++;  // Programmer expected y to be 6
    cout << "y = " << y << endl;  // Prints 5, not 6!
    return 0;
}
```

y is 5, not 6. Post-increment returns the old value.

**Correct:**

```
#include <iostream>
using namespace std;
int main() {
    int x = 5;
    int y = ++x;  // Pre-increment: increment first, then assign
    cout << "y = " << y << endl;  // Prints 6
    return 0;
}
```

`x++` returns the current value of x (5), then increments x to 6. The assignment captures the old value. `++x` increments first (x becomes 6), then returns 6. Use pre-increment when you need the updated value in the same expression.

## Summary

- Arithmetic operators: + - * / %. Integer division truncates toward zero. 7/2 is 3, -7/2 is -3. Use casting for float division.
- Modulus with negatives: result takes the sign of the dividend (left operand). -7 % 3 = -1, 7 % -3 = 1.
- Relational operators (== != < > <= >=) return bool (0 or 1). Do not chain comparisons: 1 < x < 10 does not work as expected.
- Logical operators (&&, ||, !) use short-circuit evaluation. In a && b, if a is false, b is not evaluated. This is used for safe null/boundary checks.
- Bitwise operators (& | ^ ~ << >>) operate on individual bits. & checks even/odd (n & 1), << multiplies by 2^n, >> divides by 2^n.
- Pre-increment (++x) increments then returns new value. Post-increment (x++) returns current value then increments. In standalone statements, both are equivalent.
- Ternary operator: condition ? value_if_true : value_if_false. Compact alternative to if-else for simple cases.
- The comma operator evaluates all operands left to right and returns the last one. Most common in for loops with multiple variables.
- Critical precedence trap: bitwise operators (& | ^) have lower precedence than relational (== !=). Always parenthesize: (x & 1) == 0, not x & 1 == 0.
- sizeof is an operator (not a function) evaluated at compile time. sizeof(x + 1.0) returns 8 because the expression type is double.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/operators-in-cpp/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/operators-in-cpp/practice/*
