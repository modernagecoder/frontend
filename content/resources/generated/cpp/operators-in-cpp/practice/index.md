---
title: "Practice: Operators in C++"
description: "57 practice problems for Operators in C++ in C++"
slug: operators-in-cpp-practice
canonical: https://learn.modernagecoders.com/resources/cpp/operators-in-cpp/practice
category: "C++"
---
# Practice: Operators in C++

**Total questions:** 57

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << 10 + 3 << endl;
    cout << 10 - 3 << endl;
    cout << 10 * 3 << endl;
    return 0;
}
```

*Hint:* Basic arithmetic operations.

**Answer:** `13`
`7`
`30`

Simple arithmetic: 10+3=13, 10-3=7, 10*3=30. No surprises here.

### Q2. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << 17 / 5 << endl;
    cout << 17 % 5 << endl;
    return 0;
}
```

*Hint:* Integer division truncates. Modulus gives remainder.

**Answer:** `3`
`2`

`17 / 5 = 3` (truncated, not 3.4). `17 % 5 = 2` (remainder: 17 = 3*5 + 2).

### Q3. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << (10 > 5) << endl;
    cout << (10 == 5) << endl;
    cout << (10 != 5) << endl;
    return 0;
}
```

*Hint:* Relational operators return 1 (true) or 0 (false).

**Answer:** `1`
`0`
`1`

`10 > 5` is true (1). `10 == 5` is false (0). `10 != 5` is true (1).

### Q4. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    int x = 5;
    x += 3;
    cout << x << endl;
    x *= 2;
    cout << x << endl;
    return 0;
}
```

*Hint:* += adds and assigns, *= multiplies and assigns.

**Answer:** `8`
`16`

`x += 3` makes x = 5+3 = 8. Then `x *= 2` makes x = 8*2 = 16.

### Q5. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    int a = 10;
    cout << ++a << endl;
    cout << a << endl;
    return 0;
}
```

*Hint:* Pre-increment: increment first, then use the value.

**Answer:** `11`
`11`

`++a` increments a to 11, then returns 11 for printing. The second `cout` also prints 11 since a is now 11.

### Q6. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    int a = 10;
    cout << a++ << endl;
    cout << a << endl;
    return 0;
}
```

*Hint:* Post-increment: use the value first, then increment.

**Answer:** `10`
`11`

`a++` returns the current value of a (10) for printing, then increments a to 11. The second line prints 11.

### Q7. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    cout << -7 % 3 << endl;
    cout << 7 % -3 << endl;
    return 0;
}
```

*Hint:* In C++11, the result of % takes the sign of the left operand.

**Answer:** `-1`
`1`

Since C++11, the modulus result takes the sign of the dividend (left operand). `-7 % 3 = -1` (negative left). `7 % -3 = 1` (positive left).

### Q8. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    int a = 5, b = 3;
    cout << (a & b) << endl;
    cout << (a | b) << endl;
    cout << (a ^ b) << endl;
    return 0;
}
```

*Hint:* Convert to binary: 5 = 0101, 3 = 0011.

**Answer:** `1`
`7`
`6`

In binary: 5=0101, 3=0011. AND: 0001=1. OR: 0111=7. XOR: 0110=6.

### Q9. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    cout << (1 << 3) << endl;
    cout << (16 >> 2) << endl;
    return 0;
}
```

*Hint:* Left shift multiplies by 2^n. Right shift divides by 2^n.

**Answer:** `8`
`4`

`1 << 3` = 1 * 2^3 = 8. `16 >> 2` = 16 / 2^2 = 4. Shift operators are fast alternatives to multiplication and division by powers of 2.

### Q10. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    int x = 5;
    cout << (x > 3 ? "Yes" : "No") << endl;
    cout << (x > 10 ? "Yes" : "No") << endl;
    return 0;
}
```

*Hint:* Ternary operator: condition ? true_value : false_value.

**Answer:** `Yes`
`No`

First ternary: 5 > 3 is true, so "Yes". Second: 5 > 10 is false, so "No".

### Q11. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    int x = 5;
    cout << (x & 1 == 0) << endl;
    cout << ((x & 1) == 0) << endl;
    return 0;
}
```

*Hint:* == has higher precedence than &.

**Answer:** `0`
`0`

First: `x & 1 == 0` is parsed as `x & (1 == 0)` = `5 & 0` = 0. Second: `(x & 1) == 0` = `(5 & 1) == 0` = `1 == 0` = 0. Both give 0 but for different reasons. 5 is odd, so (5 & 1) is 1.

### Q12. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    int a = 3;
    int b = (a++, ++a, a + 10);
    cout << a << " " << b << endl;
    return 0;
}
```

*Hint:* Comma operator evaluates all operands left to right, returns the last.

**Answer:** `5 15`

Step by step: `a++` returns 3 but a becomes 4. `++a` increments a to 5 and returns 5. `a + 10` = 15. The comma operator returns the last value, so b = 15. a is 5.

### Q13. [Easy] What is the difference between `/` and `%` operators?

*Hint:* One gives the quotient, the other gives the remainder.

**Answer:** `/` gives the quotient (result of division). `%` gives the remainder. For `17 / 5`: quotient = 3, remainder = 2. The identity is: `a == (a/b)*b + (a%b)`.

Integer division truncates toward zero. Modulus gives the remainder. Together they satisfy the mathematical relationship: dividend = quotient * divisor + remainder.

### Q14. [Medium] What is short-circuit evaluation? Why is it useful?

*Hint:* What happens to the right operand when the left operand determines the result?

**Answer:** In `a && b`, if `a` is false, `b` is not evaluated (result must be false). In `a || b`, if `a` is true, `b` is not evaluated (result must be true). This is useful for safety: `ptr != NULL && ptr->val == 5` prevents accessing a null pointer.

Short-circuit evaluation is a correctness tool, not just a performance optimization. It allows you to write safe compound conditions where the second check depends on the first being true.

### Q15. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    int a = 0;
    int b = (a++ || ++a);
    cout << a << " " << b << endl;
    return 0;
}
```

*Hint:* a++ returns 0 (falsy), so the right side of || must be evaluated.

**Answer:** `2 1`

`a++` returns 0 (a becomes 1). Since 0 is falsy, the right side of `||` is evaluated. `++a` increments a from 1 to 2 and returns 2 (truthy). The `||` result is 1 (true). So a=2, b=1.

### Q16. [Hard] Why is `x ^ x` always 0 and `x ^ 0` always x? How is this used in competitive programming?

*Hint:* Think about what XOR does to identical bits.

**Answer:** XOR of identical bits gives 0 (1^1=0, 0^0=0), so `x ^ x = 0`. XOR with 0 leaves each bit unchanged (1^0=1, 0^0=0), so `x ^ 0 = x`. In CP, this is used to find the single unique element in an array where every other element appears twice: XOR all elements and pairs cancel out.

The classic problem: given an array where every element appears twice except one, find the unique element. XOR all elements: duplicates cancel (`a ^ a = 0`) and the unique element remains (`0 ^ x = x`). O(n) time, O(1) space.

### Q17. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    cout << (1 < 5 < 3) << endl;
    return 0;
}
```

*Hint:* C++ does not support chained comparisons like Python.

**Answer:** `1`

`1 < 5` evaluates to `true` (1). Then `1 < 3` evaluates to `true` (1). This is NOT checking if 5 is between 1 and 3. Correct way: `1 < x && x < 3`.

### Q18. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    cout << (~0) << endl;
    return 0;
}
```

*Hint:* ~0 flips all bits. In two's complement, what is that?

**Answer:** `-1`

`~0` flips all bits of 0 (all zeros become all ones). In two's complement representation, all bits set to 1 is -1. This is true regardless of int size.

### Q19. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    int x = 10;
    cout << !x << endl;
    cout << !!x << endl;
    return 0;
}
```

*Hint:* ! converts non-zero to 0 and 0 to 1.

**Answer:** `0`
`1`

`!10` = 0 (NOT of any non-zero value is 0). `!!10` = `!0` = 1. Double negation `!!` converts any value to its boolean equivalent (0 or 1).

### Q20. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    int a = 6;
    cout << (a & 1) << endl;
    a = 7;
    cout << (a & 1) << endl;
    return 0;
}
```

*Hint:* & 1 checks the last bit. Even numbers have last bit 0, odd have 1.

**Answer:** `0`
`1`

6 in binary is 110 -- last bit is 0, so `6 & 1 = 0` (even). 7 in binary is 111 -- last bit is 1, so `7 & 1 = 1` (odd). This is the fastest way to check even/odd.

## Mixed Questions

### Q1. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    int a = 20, b = 3;
    cout << a / b << " " << a % b << endl;
    return 0;
}
```

*Hint:* 20 divided by 3 gives quotient 6 and remainder 2.

**Answer:** `6 2`

`20 / 3 = 6` (integer division truncates). `20 % 3 = 2` (remainder: 20 = 6*3 + 2).

### Q2. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << (5 > 3 && 2 < 4) << endl;
    cout << (5 > 3 && 2 > 4) << endl;
    return 0;
}
```

*Hint:* && is true only when both operands are true.

**Answer:** `1`
`0`

First: both `5 > 3` (true) and `2 < 4` (true) are true, so AND is true (1). Second: `2 > 4` is false, so AND is false (0).

### Q3. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    int x = 5;
    int a = x++;
    int b = ++x;
    cout << a << " " << b << " " << x << endl;
    return 0;
}
```

*Hint:* Track x: starts at 5, post-increment, then pre-increment.

**Answer:** `5 7 7`

`x++`: a gets 5, x becomes 6. `++x`: x becomes 7, b gets 7. Final: a=5, b=7, x=7.

### Q4. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    int a = 12, b = 5;
    int max = (a > b) ? a : b;
    int min = (a < b) ? a : b;
    cout << max << " " << min << endl;
    return 0;
}
```

*Hint:* Ternary operator selects based on condition.

**Answer:** `12 5`

`a > b` is true (12 > 5), so max = a = 12. `a < b` is false, so min = b = 5.

### Q5. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    int n = 7;
    cout << (n ^ n) << endl;
    cout << (n ^ 0) << endl;
    return 0;
}
```

*Hint:* XOR of a number with itself is 0. XOR with 0 is the number itself.

**Answer:** `0`
`7`

`n ^ n = 0` (every bit cancels: 1^1=0, 0^0=0). `n ^ 0 = n` (XOR with 0 leaves bits unchanged). These are fundamental XOR properties.

### Q6. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    int x = 10;
    int y = 20;
    x ^= y;
    y ^= x;
    x ^= y;
    cout << x << " " << y << endl;
    return 0;
}
```

*Hint:* This is the XOR swap algorithm.

**Answer:** `20 10`

XOR swap: After `x ^= y`, x holds x^y. After `y ^= x`, y holds y^(x^y) = x. After `x ^= y`, x holds (x^y)^x = y. The values are swapped without a temp variable.

### Q7. [Easy] Write a program that reads two integers and prints which one is larger using the ternary operator. If they are equal, print "Equal".

*Hint:* Use nested ternary: (a > b) ? ... : (a < b) ? ... : "Equal"

**Answer:** ```
#include 
using namespace std;
int main() {
    int a, b;
    cin >> a >> b;
    cout << ((a > b) ? "First is larger" : (a < b) ? "Second is larger" : "Equal") << endl;
    return 0;
}
```

Input: 7 3
Output: First is larger

The nested ternary first checks if a > b. If not, it checks if a < b. If neither, they are equal.

### Q8. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    int a = 5;
    cout << (a << 1) << endl;
    cout << (a << 2) << endl;
    cout << (a << 3) << endl;
    return 0;
}
```

*Hint:* Left shift by n multiplies by 2^n.

**Answer:** `10`
`20`
`40`

`5 << 1` = 5 * 2^1 = 10. `5 << 2` = 5 * 2^2 = 20. `5 << 3` = 5 * 2^3 = 40.

### Q9. [Medium] Write a program that checks if a given integer is a power of 2 using bitwise operators only (no loops or division).

*Hint:* A power of 2 has exactly one bit set. n & (n-1) clears the lowest set bit.

**Answer:** ```
#include 
using namespace std;
int main() {
    int n;
    cin >> n;
    if (n > 0 && (n & (n - 1)) == 0) {
        cout << n << " is a power of 2" << endl;
    } else {
        cout << n << " is NOT a power of 2" << endl;
    }
    return 0;
}
```

Input: 16
Output: 16 is a power of 2

A power of 2 has exactly one bit set (e.g., 16 = 10000). `n - 1` flips all bits below and including that bit (15 = 01111). `n & (n-1)` = 0 only for powers of 2. The `n > 0` check handles 0 and negatives.

### Q10. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    int x = 2;
    int y = (x *= 3, x += 2, x);
    cout << x << " " << y << endl;
    return 0;
}
```

*Hint:* Comma operator: evaluate all, return the last.

**Answer:** `8 8`

`x *= 3`: x becomes 6. `x += 2`: x becomes 8. The comma operator returns the last value: x = 8. So y = 8.

### Q11. [Medium] How do you check if a number is even or odd using bitwise operators?

*Hint:* Even numbers have their last bit as 0.

**Answer:** Use `(n & 1)`. If the result is 0, n is even. If the result is 1, n is odd. This works because the last bit of any integer determines its parity. `n & 1` isolates the last bit.

This is faster than `n % 2 == 0` (though modern compilers optimize both to the same machine code). In competitive programming, `n & 1` is the idiomatic way to check parity.

### Q12. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << sizeof(3 + 4) << endl;
    cout << sizeof(3 + 4.0) << endl;
    return 0;
}
```

*Hint:* 3+4 is int. 3+4.0 promotes to double.

**Answer:** `4`
`8`

`3 + 4`: both int, result is int (4 bytes). `3 + 4.0`: 4.0 is double, so 3 is promoted to double, result is double (8 bytes). sizeof evaluates the type, not the value.

## Multiple Choice Questions

### Q1. [Easy] What is the result of `17 / 5` in C++ when both operands are int?

**A is correct.** Integer division truncates the decimal part. 17 / 5 = 3 with remainder 2. The .4 is discarded.

### Q2. [Easy] Which operator is used to find the remainder in C++?

**B is correct.** The `%` operator (modulus) returns the remainder of integer division. `17 % 5 = 2`.

### Q3. [Easy] What does the `&&` operator do in C++?

**B is correct.** `&&` is logical AND. `&` (single ampersand) is bitwise AND. `&` is also the address-of operator in pointer contexts.

### Q4. [Easy] What is the output of `cout << (10 > 5);`?

**B is correct.** Relational operators return a `bool`. By default, `cout` prints bool values as integers: true = 1, false = 0.

### Q5. [Easy] What does the ternary operator `?:` do?

**C is correct.** `condition ? value_if_true : value_if_false` evaluates the condition and returns one of two values. It is a compact if-else expression.

### Q6. [Medium] What is the value of `-7 % 3` in C++11?

**D is correct.** In C++11 and later, the result of `%` takes the sign of the left operand (dividend). Since -7 is negative, the result is -1. Verify: -7 = (-2)*3 + (-1).

### Q7. [Medium] What is the difference between `++x` and `x++`?

**B is correct.** Pre-increment (`++x`) increments first, then returns the new value. Post-increment (`x++`) saves the current value, increments, then returns the saved (old) value.

### Q8. [Medium] What is `5 & 3`?

**A is correct.** 5 = 0101, 3 = 0011. Bitwise AND: 0001 = 1. Each bit is 1 only if both corresponding bits are 1.

### Q9. [Medium] What is `1 << 10`?

**C is correct.** `1 << 10` = 1 * 2^10 = 1024. Left shifting 1 by n positions gives 2^n.

### Q10. [Medium] In the expression `a & b == 0`, which operator is evaluated first?

**B is correct.** `==` has higher precedence than `&`. So `a & b == 0` is parsed as `a & (b == 0)`, not `(a & b) == 0`. This is a notorious C++ precedence trap.

### Q11. [Hard] What is `~0` in C++ (assuming 32-bit int)?

**C is correct.** `~0` flips all bits: 00...00 becomes 11...11. In two's complement, all bits set to 1 represents -1. This is true regardless of int size.

### Q12. [Hard] What does `n & (n - 1)` do?

**C is correct.** `n & (n-1)` clears the lowest (rightmost) set bit of n. For example, 12 (1100) & 11 (1011) = 8 (1000). This is used to check if n is a power of 2: if `n & (n-1) == 0` and n > 0, then n is a power of 2.

### Q13. [Hard] What is the result of `int x = (2, 3, 5);`?

**C is correct.** The comma operator evaluates all operands left to right and returns the value of the last operand. So `(2, 3, 5)` evaluates 2, then 3, then returns 5.

### Q14. [Hard] What is the output of the following?
`int a = 5; cout << (a++ + ++a);`

**D is correct.** Modifying a variable more than once in the same expression without an intervening sequence point is **undefined behavior** in C++. The compiler can produce any result. Never write expressions like `a++ + ++a`.

### Q15. [Hard] Which of the following correctly checks if bit position k (0-indexed from right) is set in integer n?

**B is correct.** `1 << k` creates a mask with only bit k set. `n & (1 << k)` isolates bit k. If the result is non-zero, bit k is set. Option A checks if any common bits exist between n and k. Option C sets bit k. Option D toggles bit k.

### Q16. [Easy] What is the result of `10 % 3`?

**B is correct.** `10 % 3 = 1` because 10 = 3*3 + 1. The modulus operator returns the remainder of integer division.

### Q17. [Medium] What is the value of `5 | 3`?

**C is correct.** 5 = 0101, 3 = 0011. Bitwise OR: 0111 = 7. Each bit is 1 if either corresponding bit is 1.

### Q18. [Hard] What does short-circuit evaluation mean for `false && someFunction()`?

**B is correct.** With `&&`, if the left operand is false, the entire expression must be false regardless of the right operand. So `someFunction()` is never called. This is short-circuit evaluation.

### Q19. [Medium] What is the output of `cout << (true + true + false);`?

**A is correct.** In arithmetic expressions, `true` is promoted to 1 and `false` to 0. So `1 + 1 + 0 = 2`.

## Coding Challenges

### Challenge 1. Swap Two Numbers Without Temp Variable

**Difficulty:** Easy

Write a C++ program that reads two integers and swaps them using the XOR swap technique (no temporary variable, no arithmetic swap). Print the values before and after swapping.

**Constraints:**

- Do not use a third variable. Use only XOR (^) operations.

**Sample input:**

```
10 20
```

**Sample output:**

```
Before: a=10, b=20
After: a=20, b=10
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    int a, b;
    cin >> a >> b;
    cout << "Before: a=" << a << ", b=" << b << endl;
    a ^= b;
    b ^= a;
    a ^= b;
    cout << "After: a=" << a << ", b=" << b << endl;
    return 0;
}
```

### Challenge 2. Bit Counter

**Difficulty:** Medium

Write a program that reads a non-negative integer and counts the number of 1-bits (set bits) in its binary representation using n & (n-1) technique. Also print the binary representation.

**Constraints:**

- Use the n & (n-1) trick to count bits. Print binary by checking each bit from MSB to LSB.

**Sample input:**

```
13
```

**Sample output:**

```
Binary of 13: 1101
Number of set bits: 3
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    int n;
    cin >> n;
    int original = n;
    
    // Print binary
    cout << "Binary of " << original << ": ";
    bool started = false;
    for (int i = 31; i >= 0; i--) {
        if (n & (1 << i)) {
            started = true;
            cout << 1;
        } else if (started) {
            cout << 0;
        }
    }
    if (!started) cout << 0;
    cout << endl;
    
    // Count set bits
    int count = 0;
    int temp = original;
    while (temp) {
        temp = temp & (temp - 1);
        count++;
    }
    cout << "Number of set bits: " << count << endl;
    return 0;
}
```

### Challenge 3. All Operators Calculator

**Difficulty:** Easy

Write a program that reads two integers a and b, then prints the result of all arithmetic operations (+, -, *, /, %), all relational comparisons (==, !=, <, >, <=, >=), and the bitwise AND, OR, XOR.

**Constraints:**

- Handle all operators. Print results clearly with labels.

**Sample input:**

```
15 4
```

**Sample output:**

```
15 + 4 = 19
15 - 4 = 11
15 * 4 = 60
15 / 4 = 3
15 % 4 = 3
15 == 4: 0
15 != 4: 1
15 < 4: 0
15 > 4: 1
15 <= 4: 0
15 >= 4: 1
15 & 4 = 4
15 | 4 = 15
15 ^ 4 = 11
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    int a, b;
    cin >> a >> b;
    cout << a << " + " << b << " = " << a + b << endl;
    cout << a << " - " << b << " = " << a - b << endl;
    cout << a << " * " << b << " = " << a * b << endl;
    cout << a << " / " << b << " = " << a / b << endl;
    cout << a << " % " << b << " = " << a % b << endl;
    cout << a << " == " << b << ": " << (a == b) << endl;
    cout << a << " != " << b << ": " << (a != b) << endl;
    cout << a << " < " << b << ": " << (a < b) << endl;
    cout << a << " > " << b << ": " << (a > b) << endl;
    cout << a << " <= " << b << ": " << (a <= b) << endl;
    cout << a << " >= " << b << ": " << (a >= b) << endl;
    cout << a << " & " << b << " = " << (a & b) << endl;
    cout << a << " | " << b << " = " << (a | b) << endl;
    cout << a << " ^ " << b << " = " << (a ^ b) << endl;
    return 0;
}
```

### Challenge 4. Find Unique Element (XOR)

**Difficulty:** Medium

Write a program that reads n integers where every element appears exactly twice except one element which appears once. Find the unique element using XOR. Input: first line is n, second line has n space-separated integers.

**Constraints:**

- O(n) time, O(1) space. Use the property that a ^ a = 0 and a ^ 0 = a.

**Sample input:**

```
5
2 3 5 3 2
```

**Sample output:**

```
Unique element: 5
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    int n;
    cin >> n;
    int result = 0;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        result ^= x;
    }
    cout << "Unique element: " << result << endl;
    return 0;
}
```

### Challenge 5. Precedence Demonstrator

**Difficulty:** Hard

Write a program that demonstrates 5 operator precedence traps. For each, show the expression, the result with default precedence, and the result with explicit parentheses. Include: bitwise vs relational, multiplication vs addition, logical vs bitwise, shift vs addition, and assignment in condition.

**Constraints:**

- Use specific examples with actual values. Explain each trap in output.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Trap 1: x & 1 == 0  => 0 (parsed as x & (1==0))
Trap 1: (x & 1) == 0 => 1 (correct)
...
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    int x = 6;
    cout << "Trap 1: x=6, x & 1 == 0  => " << (x & 1 == 0) << " (parsed as x & (1==0))" << endl;
    cout << "Trap 1: x=6, (x & 1) == 0 => " << ((x & 1) == 0) << " (correct: 6 is even)" << endl;
    
    cout << "Trap 2: 2 + 3 * 4 = " << 2 + 3 * 4 << " (not 20)" << endl;
    cout << "Trap 2: (2 + 3) * 4 = " << (2 + 3) * 4 << " (correct if you want 20)" << endl;
    
    cout << "Trap 3: 1 << 2 + 1 = " << (1 << 2 + 1) << " (parsed as 1 << (2+1) = 8)" << endl;
    cout << "Trap 3: (1 << 2) + 1 = " << ((1 << 2) + 1) << " (correct: 5)" << endl;
    
    cout << "Trap 4: 1 < 5 < 3 = " << (1 < 5 < 3) << " (parsed as (1<5) < 3 = 1 < 3 = true)" << endl;
    int val = 5;
    cout << "Trap 4: 1 < val && val < 3 = " << (1 < val && val < 3) << " (correct: false)" << endl;
    
    cout << "Trap 5: 3 | 4 == 4 = " << (3 | 4 == 4) << " (parsed as 3 | (4==4) = 3 | 1 = 3)" << endl;
    cout << "Trap 5: (3 | 4) == 4 = " << ((3 | 4) == 4) << " (correct: 7 == 4 = false)" << endl;
    
    return 0;
}
```

### Challenge 6. Power of 2 Checker with Bit Position

**Difficulty:** Medium

Write a program that reads an integer n. If n is a power of 2, print which power it is (e.g., 16 is 2^4). If not, print the nearest lower and higher powers of 2. Use bitwise operators only.

**Constraints:**

- Use n & (n-1) to check power of 2. Use bit shifting to find the power.

**Sample input:**

```
16
```

**Sample output:**

```
16 is 2^4
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    int n;
    cin >> n;
    if (n > 0 && (n & (n - 1)) == 0) {
        int power = 0;
        int temp = n;
        while (temp > 1) {
            temp >>= 1;
            power++;
        }
        cout << n << " is 2^" << power << endl;
    } else {
        int lower = 1, upper = 1;
        int lp = 0, up = 0;
        while (lower * 2 < n) {
            lower <<= 1;
            lp++;
        }
        upper = lower << 1;
        up = lp + 1;
        cout << n << " is NOT a power of 2" << endl;
        cout << "Lower: 2^" << lp << " = " << lower << endl;
        cout << "Upper: 2^" << up << " = " << upper << endl;
    }
    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/operators-in-cpp/*
