---
title: "Practice: Operators in Java"
description: "58 practice problems for Operators in Java in Java"
slug: operators-in-java-practice
canonical: https://learn.modernagecoders.com/resources/java/operators-in-java/practice
category: "Java"
---
# Practice: Operators in Java

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
System.out.println(15 + 3);
System.out.println(15 - 3);
System.out.println(15 * 3);
```

*Hint:* Basic arithmetic operations.

**Answer:** `18`
`12`
`45`

Addition: 15 + 3 = 18. Subtraction: 15 - 3 = 12. Multiplication: 15 * 3 = 45. These are straightforward integer arithmetic operations.

### Q2. [Easy] What is the output?

```
System.out.println(10 / 3);
System.out.println(10 % 3);
```

*Hint:* Integer division truncates. Modulus gives the remainder.

**Answer:** `3`
`1`

`10 / 3 = 3` (integer division truncates the decimal). `10 % 3 = 1` (remainder: 10 = 3*3 + 1). This is different from Python where `/` always returns a float.

### Q3. [Easy] What is the output?

```
System.out.println(10 == 10);
System.out.println(10 != 5);
System.out.println(10 > 20);
```

*Hint:* Relational operators return boolean.

**Answer:** `true`
`true`
`false`

`10 == 10` is true (equal). `10 != 5` is true (not equal). `10 > 20` is false (10 is not greater than 20).

### Q4. [Easy] What is the output?

```
System.out.println(true && false);
System.out.println(true || false);
System.out.println(!true);
```

*Hint:* AND needs both true, OR needs at least one true, NOT reverses.

**Answer:** `false`
`true`
`false`

`true && false` = false (AND: both must be true). `true || false` = true (OR: at least one true). `!true` = false (NOT: reverses the value).

### Q5. [Easy] What is the output?

```
int x = 10;
x += 5;
x *= 2;
System.out.println(x);
```

*Hint:* Trace: 10, then +5=15, then *2=30.

**Answer:** `30`

Starting with x = 10. After `x += 5`: x = 15. After `x *= 2`: x = 30. Compound assignment operators modify the variable in place.

### Q6. [Medium] What is the output?

```
int a = 5;
System.out.println(a++);
System.out.println(a);
System.out.println(++a);
```

*Hint:* Post-increment: use then increment. Pre-increment: increment then use.

**Answer:** `5`
`6`
`7`

`a++` returns 5 (current value), then a becomes 6. Next println shows a = 6. `++a` increments a to 7 first, then returns 7.

### Q7. [Medium] What is the output?

```
System.out.println(10.0 / 3);
System.out.println(10 / 3);
System.out.println((double) 10 / 3);
```

*Hint:* If either operand is double, the result is double.

**Answer:** `3.3333333333333335`
`3`
`3.3333333333333335`

`10.0 / 3`: one operand is double, result is double 3.333... `10 / 3`: both int, result is int 3. `(double) 10 / 3`: cast makes it 10.0 / 3, result is double 3.333...

### Q8. [Medium] What is the output?

```
int marks = 45;
String result = (marks >= 40) ? "Pass" : "Fail";
System.out.println(result);
```

*Hint:* Ternary: condition ? valueIfTrue : valueIfFalse.

**Answer:** `Pass`

The ternary operator checks `marks >= 40` (45 >= 40 is true), so it returns "Pass". The ternary is a concise way to assign values based on a condition.

### Q9. [Medium] What is the output?

```
int a = 12, b = 10;
System.out.println(a & b);
System.out.println(a | b);
System.out.println(a ^ b);
```

*Hint:* 12 = 1100, 10 = 1010 in binary.

**Answer:** `8`
`14`
`6`

12 = 1100, 10 = 1010. AND: 1100 & 1010 = 1000 = 8. OR: 1100 | 1010 = 1110 = 14. XOR: 1100 ^ 1010 = 0110 = 6.

### Q10. [Medium] What is the output?

```
System.out.println(8 << 1);
System.out.println(8 << 2);
System.out.println(8 >> 1);
System.out.println(8 >> 2);
```

*Hint:* Left shift doubles per shift. Right shift halves per shift.

**Answer:** `16`
`32`
`4`
`2`

`8 << 1` = 16 (8 * 2). `8 << 2` = 32 (8 * 4). `8 >> 1` = 4 (8 / 2). `8 >> 2` = 2 (8 / 4). Each left shift multiplies by 2, each right shift divides by 2.

### Q11. [Hard] What is the output?

```
System.out.println(2 + 3 * 4);
System.out.println((2 + 3) * 4);
System.out.println(2 + 3 * 4 - 6 / 2 + 10 % 3);
```

*Hint:* Precedence: *, /, % before +, -.

**Answer:** `14`
`20`
`12`

Line 1: 3*4=12, then 2+12=14. Line 2: (2+3)=5, then 5*4=20. Line 3: 3*4=12, 6/2=3, 10%3=1, then 2+12-3+1=12.

### Q12. [Hard] What is the output?

```
System.out.println(true || false && false);
System.out.println((true || false) && false);
```

*Hint:* && has higher precedence than ||.

**Answer:** `true`
`false`

Line 1: `&&` has higher precedence, so: `true || (false && false)` = `true || false` = true. Line 2: parentheses override: `(true || false) && false` = `true && false` = false.

### Q13. [Hard] What is the output?

```
int x = 5;
int y = x++ + ++x;
System.out.println("x = " + x + ", y = " + y);
```

*Hint:* First x++ uses 5 (then x=6), then ++x increments to 7 before use.

**Answer:** `x = 7, y = 12`

`x++` returns 5 (post-increment: x becomes 6). `++x` increments x to 7 (pre-increment: returns 7). So `y = 5 + 7 = 12`, and x is now 7.

### Q14. [Hard] What is the output?

```
int a = -7;
System.out.println(a % 3);
System.out.println(a / 3);
```

*Hint:* In Java, the sign of the modulus result follows the sign of the dividend (left operand).

**Answer:** `-1`
`-2`

In Java, `-7 % 3 = -1` (the result has the same sign as the dividend -7). `-7 / 3 = -2` (truncated toward zero, not toward negative infinity like Python). This is different from Python where -7 % 3 gives 2 and -7 // 3 gives -3.

### Q15. [Medium] What is the difference between && and & when used with boolean expressions?

*Hint:* One short-circuits, the other always evaluates both sides.

**Answer:** `&&` is the **short-circuit** AND: if the left operand is false, the right operand is not evaluated (because the result is always false). `&` is the **non-short-circuit** AND: both operands are always evaluated regardless. `&&` is used for normal boolean logic. `&` is used when you need the side effects of the right operand to execute.

Use `&&` by default, especially for null safety: `if (obj != null && obj.method())`. Using `&` here would evaluate `obj.method()` even when obj is null, causing NullPointerException. The `&` operator is mostly used for bitwise operations on integers.

### Q16. [Hard] What is the output?

```
byte b = 10;
b += 5;  // Works!
System.out.println(b);
// b = b + 5;  // Would this work?
```

*Hint:* Compound assignment includes an implicit cast. Regular assignment does not.

**Answer:** `15`
The commented line `b = b + 5` would NOT compile because `b + 5` is promoted to int, and assigning int to byte requires explicit casting: `b = (byte)(b + 5);`.

This is a subtle but important distinction. `b += 5` is equivalent to `b = (byte)(b + 5)` -- the compound assignment includes an implicit narrowing cast. But `b = b + 5` does NOT include this implicit cast, so it fails. This is a frequently asked interview question.

### Q17. [Easy] What does the modulus operator (%) return?

*Hint:* It gives the remainder after division.

**Answer:** The modulus operator `%` returns the **remainder** after integer division. `10 % 3` = 1 (because 10 = 3*3 + 1). Common uses: checking even/odd (`n % 2 == 0`), checking divisibility (`n % 5 == 0`), wrapping values in a range.

In Java, the sign of the result follows the sign of the dividend (left operand). So `-10 % 3` = -1, and `10 % -3` = 1. This is different from Python where the sign follows the divisor.

## Mixed Questions

### Q1. [Easy] What is the output?

```
int a = 20, b = 7;
System.out.println(a + b);
System.out.println(a - b);
System.out.println(a * b);
System.out.println(a / b);
System.out.println(a % b);
```

*Hint:* Standard arithmetic with a=20, b=7.

**Answer:** `27`
`13`
`140`
`2`
`6`

20+7=27. 20-7=13. 20*7=140. 20/7=2 (integer division truncates 2.857 to 2). 20%7=6 (remainder: 20=7*2+6).

### Q2. [Easy] Priya scored 85, 92, 78, 95, and 88 in five subjects. Write a program that calculates and prints the total, average (as double), and whether the average is above 85 (using ternary operator).

*Hint:* Cast to double for average. Use ternary for the message.

**Answer:** ```
int total = 85 + 92 + 78 + 95 + 88;
double average = (double) total / 5;
String status = (average > 85) ? "Above 85" : "Below or equal 85";
System.out.println("Total: " + total);
System.out.println("Average: " + average);
System.out.println("Status: " + status);
```

Output: Total: 438, Average: 87.6, Status: Above 85

`(double) total / 5` casts total to double before division, giving 87.6 instead of 87. The ternary operator checks the condition and assigns the appropriate string.

### Q3. [Medium] What is the output?

```
int x = 10;
System.out.println(x > 5 && x < 20);
System.out.println(x > 15 || x < 5);
System.out.println(!(x == 10));
```

*Hint:* Evaluate each comparison first, then the logical operator.

**Answer:** `true`
`false`
`false`

Line 1: 10>5 is true, 10<20 is true, true&&true = true. Line 2: 10>15 is false, 10<5 is false, false||false = false. Line 3: 10==10 is true, !true = false.

### Q4. [Medium] Aarav wants to check if a number is even or odd using the bitwise AND operator, and also using the modulus operator. Write both checks for the number 42.

*Hint:* num & 1 gives 0 for even, 1 for odd. num % 2 gives 0 for even.

**Answer:** ```
int num = 42;
// Method 1: Bitwise AND
boolean isEvenBitwise = (num & 1) == 0;
System.out.println(num + " is even (bitwise): " + isEvenBitwise);

// Method 2: Modulus
boolean isEvenModulus = (num % 2) == 0;
System.out.println(num + " is even (modulus): " + isEvenModulus);
```

`num & 1` checks the last bit: 0 for even, 1 for odd. This is slightly faster than modulus for performance-critical code. `num % 2 == 0` is the standard readable approach. Both give the same result.

### Q5. [Medium] What is the output?

```
int a = 5, b = 3;
System.out.println(a > b ? "a is bigger" : "b is bigger or equal");
System.out.println(a > b ? a : b);
int max = (a > b) ? a : b;
System.out.println("Max: " + max);
```

*Hint:* Ternary operator selects a value based on the condition.

**Answer:** `a is bigger`
`5`
`Max: 5`

5 > 3 is true, so the ternary returns the first value each time. The ternary operator can return any type: String in line 1, int in line 2. It is an expression, so it can be used anywhere a value is expected.

### Q6. [Hard] What is the output?

```
String s1 = "Hello";
String s2 = "Hello";
String s3 = new String("Hello");
System.out.println(s1 == s2);
System.out.println(s1 == s3);
System.out.println(s1.equals(s3));
```

*Hint:* == compares references for objects. .equals() compares values.

**Answer:** `true`
`false`
`true`

`s1 == s2` is true because Java string interning reuses the same object for identical literals. `s1 == s3` is false because `new String()` creates a separate object. `s1.equals(s3)` is true because both contain "Hello". Always use .equals() for String comparison.

### Q7. [Hard] Write a program that swaps two integers without using a temporary variable. Use XOR bitwise operator. Start with a=25, b=40.

*Hint:* XOR swap: a^=b; b^=a; a^=b;

**Answer:** ```
int a = 25, b = 40;
System.out.println("Before: a=" + a + ", b=" + b);
a = a ^ b;  // a = 25 ^ 40
b = a ^ b;  // b = (25 ^ 40) ^ 40 = 25
a = a ^ b;  // a = (25 ^ 40) ^ 25 = 40
System.out.println("After:  a=" + a + ", b=" + b);
```

XOR has the property that x ^ x = 0 and x ^ 0 = x. After step 1: a holds a^b. Step 2: b = (a^b) ^ b = a (original a). Step 3: a = (a^b) ^ a = b (original b). This is a classic interview question for demonstrating bitwise knowledge.

### Q8. [Hard] What is the output?

```
int x = 100;
x >>= 2;
System.out.println(x);
x <<= 3;
System.out.println(x);
```

*Hint:* >>= 2 divides by 4. <<= 3 multiplies by 8.

**Answer:** `25`
`200`

`x >>= 2` is `x = x >> 2 = 100 / 4 = 25`. `x <<= 3` is `x = x << 3 = 25 * 8 = 200`. Shift operators combined with assignment provide efficient multiplication/division by powers of 2.

### Q9. [Medium] What is the output?

```
int a = 10;
int b = a++;
int c = ++a;
System.out.println("a=" + a + ", b=" + b + ", c=" + c);
```

*Hint:* Post-increment returns current value then increments. Pre-increment increments then returns.

**Answer:** `a=12, b=10, c=12`

`b = a++`: b gets 10 (current value), then a becomes 11. `c = ++a`: a becomes 12 first, then c gets 12. Final: a=12, b=10, c=12.

### Q10. [Hard] Rohan writes: `if (x > 5 & y / x > 2)` and it crashes when x is 0. Why? How should he fix it?

*Hint:* The & operator evaluates both sides. Division by zero when x is 0.

**Answer:** The `&` operator (non-short-circuit) evaluates both operands. When x is 0, `x > 5` is false, but `y / x > 2` is still evaluated, causing **ArithmeticException: / by zero**. Fix: use `&&` (short-circuit AND): `if (x > 5 && y / x > 2)`. With `&&`, if `x > 5` is false (which it is when x=0), the right side is skipped.

This is a common pitfall and interview question. Short-circuit operators (&&, ||) are not just performance optimizations -- they are safety mechanisms. Always use && and || for boolean logic unless you specifically need to evaluate both sides.

### Q11. [Easy] What is the output?

```
boolean a = true, b = false;
System.out.println(a && b);
System.out.println(a || b);
System.out.println(!a && b);
System.out.println(a || !b);
```

*Hint:* Evaluate NOT first, then AND, then OR.

**Answer:** `false`
`true`
`false`
`true`

true&&false=false. true||false=true. !true=false, false&&false=false. !false=true, true||true=true.

## Multiple Choice Questions

### Q1. [Easy] What is the result of 10 / 3 in Java?

**B is correct.** Both 10 and 3 are integers. Integer division truncates the decimal: 10 / 3 = 3 (not 3.33). To get 3.33, use `10.0 / 3` or `(double) 10 / 3`.

### Q2. [Easy] Which operator checks equality in Java?

**B is correct.** `==` checks equality for primitives and reference equality for objects. `=` (A) is assignment. `===` (C) does not exist in Java (it is JavaScript). `equals` (D) is a method, not an operator.

### Q3. [Easy] What does the % operator do?

**B is correct.** The modulus operator % returns the remainder. `10 % 3` = 1 (10 = 3*3 + 1). It does NOT calculate percentage (A), round up (C), or return the quotient (D).

### Q4. [Easy] What is the output of: System.out.println(true || false)?

**A is correct.** The OR operator returns true if at least one operand is true. `true || false` = true. Java's boolean operators return boolean values, not integers (C).

### Q5. [Easy] What does x += 5 mean?

**B is correct.** `x += 5` is shorthand for `x = x + 5`. It adds 5 to the current value of x and stores the result back in x.

### Q6. [Medium] What is the output of: int a = 5; System.out.println(a++)?

**A is correct.** Post-increment (`a++`) returns the current value (5) and then increments a to 6. So println prints 5. After this line, a is 6.

### Q7. [Medium] What is the result of: 5 & 3?

**B is correct.** 5 = 101, 3 = 011. Bitwise AND: 101 & 011 = 001 = 1. AND gives 1 only where both bits are 1.

### Q8. [Medium] What is the result of the ternary: (10 > 5) ? 100 : 200?

**A is correct.** 10 > 5 is true, so the ternary returns the first value (100). The ternary operator evaluates the condition and returns one of two values.

### Q9. [Medium] Which of the following uses short-circuit evaluation?

**B is correct.** `&&` and `||` are short-circuit operators: they skip the right operand when the result is already determined. `&` and `|` (A) always evaluate both operands when used as boolean operators. `^` and `~` (C) are bitwise. `<<` and `>>` (D) are shift operators.

### Q10. [Medium] What is the output of: System.out.println(5 ^ 3)?

**C is correct.** In Java, `^` is the bitwise XOR operator, NOT exponentiation. 5 = 101, 3 = 011. XOR: 101 ^ 011 = 110 = 6. For exponentiation, use `Math.pow(5, 3)` which gives 125 (D).

### Q11. [Medium] What is the output of: System.out.println(2 + 3 * 4)?

**B is correct.** Multiplication has higher precedence than addition. `3 * 4 = 12` first, then `2 + 12 = 14`. To get 20, use parentheses: `(2 + 3) * 4`.

### Q12. [Hard] What is the output of: System.out.println(-7 % 3)?

**B is correct.** In Java, the sign of the modulus result follows the dividend (left operand). `-7 % 3 = -1` because -7 = 3 * (-2) + (-1). This is different from Python where the result follows the divisor's sign.

### Q13. [Hard] Which statement about compound assignment is TRUE?

**B is correct.** `b += 5` is equivalent to `b = (byte)(b + 5)` (implicit narrowing cast). But `b = b + 5` performs integer promotion on `b + 5` (result is int) and cannot assign int to byte without explicit cast. This is a subtle but important distinction.

### Q14. [Hard] What does the >>> operator do in Java?

**B is correct.** `>>>` is the unsigned (logical) right shift operator. It shifts bits right and fills the leftmost positions with 0, regardless of the sign bit. `>>` (signed shift) preserves the sign bit. This distinction matters for negative numbers.

### Q15. [Hard] What is the output of: System.out.println(true || false && false)?

**A is correct.** `&&` has higher precedence than `||`. So the expression is `true || (false && false)` = `true || false` = `true`. With parentheses: `(true || false) && false` = false.

### Q16. [Hard] What is the output of: int a = 5; int b = -a++; System.out.println(b + " " + a);

**A is correct.** Post-increment has highest precedence but returns the original value. So: `a++` returns 5 (a becomes 6), then `-5` is assigned to b. Result: b = -5, a = 6.

### Q17. [Medium] Which operator should you use to compare String values in Java?

**C is correct.** `.equals()` compares String content (values). `==` (A) compares references. `===` (B) does not exist in Java. `compareTo()` (D) compares lexicographic order, not equality.

### Q18. [Easy] What is the ternary operator in Java?

**C is correct.** The ternary operator `condition ? valueIfTrue : valueIfFalse` is the only operator in Java that takes three operands. if-else (A) and switch-case (B) are statements, not operators. for-each (D) is a loop construct.

### Q19. [Medium] What is the output of: System.out.println(~5)?

**B is correct.** The bitwise NOT (~) operator flips all bits. For any integer n, `~n = -(n+1)`. So `~5 = -(5+1) = -6`. In binary: 5 is ...00000101, ~5 is ...11111010 which is -6 in two's complement.

### Q20. [Hard] What is the output of: System.out.println(1 << 10)?

**C is correct.** Left shifting 1 by 10 positions is equivalent to 1 * 2^10 = 1024. Left shift by n multiplies by 2^n. This is a fast way to compute powers of 2 and is commonly used in systems programming.

## Coding Challenges

### Challenge 1. Simple Interest Calculator

**Difficulty:** Easy

Write a program to calculate simple interest. Principal = 50000, Rate = 8.5%, Time = 3 years. Formula: SI = (P * R * T) / 100. Print principal, rate, time, and interest.

**Constraints:**

- Use double for rate and interest. Use int for principal and time.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Principal: 50000
Rate: 8.5%
Time: 3 years
Simple Interest: 12750.0
```

**Solution:**

```java
public class SimpleInterest {
    public static void main(String[] args) {
        int principal = 50000;
        double rate = 8.5;
        int time = 3;
        double interest = (principal * rate * time) / 100;
        System.out.println("Principal: " + principal);
        System.out.println("Rate: " + rate + "%");
        System.out.println("Time: " + time + " years");
        System.out.println("Simple Interest: " + interest);
    }
}
```

### Challenge 2. Even/Odd Checker (Three Methods)

**Difficulty:** Easy

Write a program that checks if a number is even or odd using three different methods: modulus (%), bitwise AND (&), and ternary operator. Test with the number 42.

**Constraints:**

- Use all three methods: n%2==0, (n&1)==0, and ternary.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Number: 42
Method 1 (modulus): even
Method 2 (bitwise): even
Method 3 (ternary): even
```

**Solution:**

```java
public class EvenOddChecker {
    public static void main(String[] args) {
        int n = 42;
        System.out.println("Number: " + n);
        System.out.println("Method 1 (modulus): " + (n % 2 == 0 ? "even" : "odd"));
        System.out.println("Method 2 (bitwise): " + ((n & 1) == 0 ? "even" : "odd"));
        String result = (n % 2 == 0) ? "even" : "odd";
        System.out.println("Method 3 (ternary): " + result);
    }
}
```

### Challenge 3. Digit Extractor

**Difficulty:** Medium

Given a 4-digit number (e.g., 5821), extract and print each digit separately using only arithmetic operators (/ and %). Print thousands, hundreds, tens, and ones digits.

**Constraints:**

- Use only / and % operators. Do not convert to String.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Number: 5821
Thousands: 5
Hundreds: 8
Tens: 2
Ones: 1
```

**Solution:**

```java
public class DigitExtractor {
    public static void main(String[] args) {
        int num = 5821;
        int thousands = num / 1000;
        int hundreds = (num / 100) % 10;
        int tens = (num / 10) % 10;
        int ones = num % 10;
        System.out.println("Number: " + num);
        System.out.println("Thousands: " + thousands);
        System.out.println("Hundreds: " + hundreds);
        System.out.println("Tens: " + tens);
        System.out.println("Ones: " + ones);
    }
}
```

### Challenge 4. Leap Year Checker

**Difficulty:** Medium

Vikram needs to check if a year is a leap year. Rules: divisible by 4 AND (not divisible by 100 OR divisible by 400). Check years 2024, 2100, and 2000 using logical operators.

**Constraints:**

- Use % for divisibility and &&, || for combining conditions.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
2024 is a leap year: true
2100 is a leap year: false
2000 is a leap year: true
```

**Solution:**

```java
public class LeapYear {
    public static void main(String[] args) {
        int y1 = 2024, y2 = 2100, y3 = 2000;
        boolean leap1 = (y1 % 4 == 0) && (y1 % 100 != 0 || y1 % 400 == 0);
        boolean leap2 = (y2 % 4 == 0) && (y2 % 100 != 0 || y2 % 400 == 0);
        boolean leap3 = (y3 % 4 == 0) && (y3 % 100 != 0 || y3 % 400 == 0);
        System.out.println(y1 + " is a leap year: " + leap1);
        System.out.println(y2 + " is a leap year: " + leap2);
        System.out.println(y3 + " is a leap year: " + leap3);
    }
}
```

### Challenge 5. Power of 2 Checker (Bitwise)

**Difficulty:** Hard

Write a program that checks if numbers are powers of 2 using the bitwise trick: n > 0 && (n & (n-1)) == 0. Test with numbers 1, 2, 4, 6, 8, 16, 15, 32, 100, 1024.

**Constraints:**

- Use the bitwise expression n & (n-1). A power of 2 has exactly one bit set.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
1 is power of 2: true
2 is power of 2: true
4 is power of 2: true
6 is power of 2: false
...
1024 is power of 2: true
```

**Solution:**

```java
public class PowerOfTwo {
    public static void main(String[] args) {
        int[] nums = {1, 2, 4, 6, 8, 16, 15, 32, 100, 1024};
        for (int n : nums) {
            boolean isPowerOf2 = n > 0 && (n & (n - 1)) == 0;
            System.out.println(n + " is power of 2: " + isPowerOf2);
        }
    }
}
```

### Challenge 6. Bitwise Set Bit Counter

**Difficulty:** Hard

Write a program that counts the number of set bits (1s) in the binary representation of a number using bitwise AND and right shift. Test with 42 (binary: 101010, should have 3 set bits) and 255 (binary: 11111111, should have 8 set bits).

**Constraints:**

- Use a loop with & and >> operators. Also use Integer.toBinaryString() for display.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
42 in binary: 101010
Set bits in 42: 3
255 in binary: 11111111
Set bits in 255: 8
```

**Solution:**

```java
public class SetBitCounter {
    public static void main(String[] args) {
        int[] nums = {42, 255};
        for (int num : nums) {
            int count = 0;
            int temp = num;
            while (temp > 0) {
                count += temp & 1;
                temp >>= 1;
            }
            System.out.println(num + " in binary: " + Integer.toBinaryString(num));
            System.out.println("Set bits in " + num + ": " + count);
        }
    }
}
```

### Challenge 7. Precedence Puzzle Solver

**Difficulty:** Hard

Without running the code, predict the output of 5 complex expressions. Then write a program that prints each expression and its result with step-by-step comments. Expressions: (a) 10 + 2 * 3 - 4 / 2, (b) 15 % 4 + 2 * 3, (c) true || false && !true, (d) 5 << 1 + 2, (e) 10 > 5 ? 2 + 3 : 4 * 5.

**Constraints:**

- Include step-by-step evaluation in comments.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
a) 10 + 2*3 - 4/2 = 14
b) 15%4 + 2*3 = 9
c) true || false && !true = true
d) 5 << (1+2) = 40
e) 10>5 ? 2+3 : 4*5 = 5
```

**Solution:**

```java
public class PrecedencePuzzle {
    public static void main(String[] args) {
        // a) 2*3=6, 4/2=2, 10+6-2=14
        System.out.println("a) 10 + 2*3 - 4/2 = " + (10 + 2 * 3 - 4 / 2));
        // b) 15%4=3, 2*3=6, 3+6=9
        System.out.println("b) 15%4 + 2*3 = " + (15 % 4 + 2 * 3));
        // c) !true=false, false&&false=false, true||false=true
        System.out.println("c) true || false && !true = " + (true || false && !true));
        // d) + has higher precedence than <<! So 1+2=3, then 5<<3=40
        System.out.println("d) 5 << 1+2 = " + (5 << 1 + 2));
        // e) 10>5 is true, so 2+3=5
        System.out.println("e) 10>5 ? 2+3 : 4*5 = " + (10 > 5 ? 2 + 3 : 4 * 5));
    }
}
```

### Challenge 8. Grade Assigner with Nested Ternary

**Difficulty:** Hard

Neha needs a program that assigns letter grades based on percentage using nested ternary operators. Rules: >=90: A+, >=80: A, >=70: B+, >=60: B, >=50: C, >=40: D, <40: F. Test with marks: 95, 82, 71, 63, 55, 42, 35.

**Constraints:**

- Use nested ternary operators. Format output clearly.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
95% -> A+
82% -> A
71% -> B+
63% -> B
55% -> C
42% -> D
35% -> F
```

**Solution:**

```java
public class GradeAssigner {
    public static void main(String[] args) {
        int[] marks = {95, 82, 71, 63, 55, 42, 35};
        for (int m : marks) {
            String grade = (m >= 90) ? "A+" :
                           (m >= 80) ? "A" :
                           (m >= 70) ? "B+" :
                           (m >= 60) ? "B" :
                           (m >= 50) ? "C" :
                           (m >= 40) ? "D" : "F";
            System.out.println(m + "% -> " + grade);
        }
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/operators-in-java/*
