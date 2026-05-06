---
title: "Operators in Java - Arithmetic, Relational, Logical, Bitwise, Ternary, Operator Precedence | Modern Age Coders"
description: "Learn all Java operators: arithmetic, relational, logical, bitwise, assignment, ternary, and instanceof. Includes operator precedence table, short-circuit evaluation, integer division pitfalls, and 58 practice questions."
slug: operators-in-java
canonical: https://learn.modernagecoders.com/resources/java/operators-in-java
category: "Java"
keywords: ["java operators", "arithmetic operators java", "ternary operator java", "operator precedence java", "logical operators java", "bitwise operators java", "java assignment operators", "short circuit evaluation java", "instanceof java", "java relational operators"]
---
# Operators in Java

**Difficulty:** Beginner  
**Reading time:** 22 min  
**Chapter:** 5  
**Practice questions:** 58

## What Are Operators in Java?

An **operator** is a symbol that tells the Java compiler to perform a specific mathematical, relational, logical, or bitwise operation on one or more **operands** (values or variables). Operators are the building blocks of every expression and computation in your programs.

In the expression `int sum = a + b;`, the `+` is the operator, `a` and `b` are operands, and `a + b` is the expression. Java provides a rich set of operators organized into the following categories: Arithmetic, Relational (Comparison), Logical, Bitwise, Assignment, Ternary (Conditional), and the `instanceof` operator.

Operators can be classified by the number of operands they take: **unary** operators work on one operand (e.g., `-x`, `!flag`, `i++`), **binary** operators work on two operands (e.g., `a + b`, `x > y`), and the **ternary** operator works on three operands (`condition ? valueIfTrue : valueIfFalse`).

## Why Are Operators Important?

### 1. Every Computation Uses Operators

From calculating a student's percentage to determining loan EMIs, from checking eligibility conditions to manipulating individual bits in network protocols -- operators are everywhere. You cannot write a meaningful Java program without them.

### 2. Operator Precedence Determines Correctness

The expression `2 + 3 * 4` gives 14 (not 20) because multiplication has higher precedence than addition. Misunderstanding precedence leads to subtle bugs that are hard to find. Knowing the precedence rules -- or when to use parentheses -- is essential for writing correct programs.

### 3. Short-Circuit Evaluation Matters for Safety

Java's logical operators (`&&` and `||`) use short-circuit evaluation. Understanding this behavior lets you write safe code like `if (str != null && str.length() > 0)`, where the second condition is only evaluated if the first is true. Without short-circuit evaluation, this would throw a NullPointerException.

### 4. Bitwise Operators Appear in Interviews

Questions about bitwise operations (swapping without a temp variable, checking if a number is a power of 2, counting set bits) are standard in placement coding rounds. These operations are also used in systems programming, cryptography, and performance-critical code.

## Detailed Explanation

### 1. Arithmetic Operators

Arithmetic operators perform mathematical calculations:

OperatorNameExampleResult`+`Addition`10 + 3``13``-`Subtraction`10 - 3``7``*`Multiplication`10 * 3``30``/`Division`10 / 3``3` (integer division!)`%`Modulus (remainder)`10 % 3``1`

#### Integer Division vs Floating-Point Division

This is one of the most important distinctions in Java. When both operands are integers (`int / int`), Java performs **integer division**, which truncates the decimal part: `10 / 3` gives `3`, not `3.333`. To get a decimal result, at least one operand must be a floating-point type: `10.0 / 3` gives `3.333...`, or use casting: `(double) 10 / 3`.

#### Increment and Decrement Operators

Java provides `++` (increment by 1) and `--` (decrement by 1) operators, each with two forms:

- `++i` (pre-increment): increments first, then uses the value
- `i++` (post-increment): uses the current value first, then increments

When used as a standalone statement (`i++;` or `++i;`), both have the same effect. The difference matters in expressions: `int a = 5; int b = a++;` gives `b = 5, a = 6` (post: use then increment). `int a = 5; int b = ++a;` gives `b = 6, a = 6` (pre: increment then use).

### 2. Relational (Comparison) Operators

Relational operators compare two values and return a `boolean` result (`true` or `false`):

OperatorMeaningExampleResult`==`Equal to`5 == 5``true``!=`Not equal to`5 != 3``true``>`Greater than`5 > 3``true``<`Less than`5 < 3``false``>=`Greater than or equal`5 >= 5``true``<=`Less than or equal`5 <= 3``false`

**Important:** `==` compares primitive values but compares **references** (memory addresses) for objects. To compare String values, use `.equals()`, not `==`.

### 3. Logical Operators

Logical operators combine boolean expressions:

OperatorNameExampleResult`&&`Logical AND (short-circuit)`true && false``false``||`Logical OR (short-circuit)`true || false``true``!`Logical NOT`!true``false`

#### Short-Circuit Evaluation

`&&` stops evaluating if the left operand is `false` (because `false && anything` is always `false`). `||` stops if the left operand is `true` (because `true || anything` is always `true`). This is not just an optimization; it enables safe patterns like:

```
if (str != null && str.length() > 0) { ... }
```

If `str` is null, the second condition is never evaluated, preventing a NullPointerException.

#### Non-Short-Circuit: & and |

Java also has `&` and `|` for boolean expressions. These always evaluate both operands, regardless of the left operand's value. They are rarely used for boolean logic but are important to know for interviews.

### 4. Bitwise Operators

Bitwise operators work on the binary (bit-level) representation of integers:

OperatorNameExampleResult`&`Bitwise AND`5 & 3``1``|`Bitwise OR`5 | 3``7``^`Bitwise XOR`5 ^ 3``6``~`Bitwise NOT (complement)`~5``-6``<<`Left shift`5 << 1``10``>>`Signed right shift`20 >> 2``5``>>>`Unsigned right shift`-1 >>> 28``15`

Tracing through `5 & 3`: 5 is `101`, 3 is `011`. AND gives 1 only where both bits are 1: `001` = 1. Left shift by 1 (`<< 1`) doubles the number. Right shift by 1 (`>> 1`) halves it (integer division by 2). The unsigned right shift (`>>>`) fills the leftmost bits with 0 regardless of sign, unlike `>>` which preserves the sign bit.

### 5. Assignment Operators

The basic assignment operator is `=`. Java also provides compound assignment operators that combine an operation with assignment:

OperatorExampleEquivalent`=``x = 5`Assigns 5 to x`+=``x += 3``x = x + 3``-=``x -= 3``x = x - 3``*=``x *= 3``x = x * 3``/=``x /= 3``x = x / 3``%=``x %= 3``x = x % 3``&=``x &= 3``x = x & 3``|=``x |= 3``x = x | 3``^=``x ^= 3``x = x ^ 3``<<=``x <<= 2``x = x << 2``>>=``x >>= 2``x = x >> 2`

A subtle difference: compound assignment operators include an implicit cast. `byte b = 10; b += 5;` works (equivalent to `b = (byte)(b + 5)`), but `b = b + 5;` fails because `b + 5` is promoted to int.

### 6. Ternary (Conditional) Operator

The ternary operator is Java's only operator that takes three operands:

```
result = condition ? valueIfTrue : valueIfFalse;
```

Example: `String status = (marks >= 40) ? "Pass" : "Fail";`

The ternary operator is a concise alternative to a simple if-else statement. It is an expression (produces a value), while if-else is a statement. This makes it useful in variable assignments and method arguments where a statement would not fit.

### 7. The instanceof Operator

The `instanceof` operator checks whether an object is an instance of a specific class or interface:

```
String name = "Aarav";
System.out.println(name instanceof String);  // true
System.out.println(name instanceof Object);  // true (String extends Object)
```

This is commonly used before type casting to prevent ClassCastException.

### 8. Operator Precedence

When an expression contains multiple operators, Java evaluates them according to precedence (priority) rules. Higher precedence operators are evaluated first:

1. **Postfix:** `i++`, `i--`
2. **Unary:** `++i`, `--i`, `+`, `-`, `~`, `!`
3. **Multiplicative:** `*`, `/`, `%`
4. **Additive:** `+`, `-`
5. **Shift:** `<<`, `>>`, `>>>`
6. **Relational:** `<`, `>`, `<=`, `>=`, `instanceof`
7. **Equality:** `==`, `!=`
8. **Bitwise AND:** `&`
9. **Bitwise XOR:** `^`
10. **Bitwise OR:** `|`
11. **Logical AND:** `&&`
12. **Logical OR:** `||`
13. **Ternary:** `? :`
14. **Assignment:** `=`, `+=`, `-=`, etc.

When in doubt, use parentheses. They override all precedence rules and make your intent clear.

## Code Examples

### Arithmetic Operators and Integer Division

```java
public class ArithmeticOps {
    public static void main(String[] args) {
        int a = 17, b = 5;

        System.out.println("a + b = " + (a + b));
        System.out.println("a - b = " + (a - b));
        System.out.println("a * b = " + (a * b));
        System.out.println("a / b = " + (a / b));     // Integer division: 3
        System.out.println("a % b = " + (a % b));     // Remainder: 2

        // Floating-point division
        System.out.println("\n--- Float vs Int Division ---");
        System.out.println("17 / 5   = " + (17 / 5));         // 3 (int)
        System.out.println("17.0 / 5 = " + (17.0 / 5));       // 3.4 (double)
        System.out.println("17 / 5.0 = " + (17 / 5.0));       // 3.4 (double)
        System.out.println("(double)17/5 = " + ((double)17/5));// 3.4 (cast)

        // Increment and decrement
        int x = 10;
        System.out.println("\n--- Pre/Post Increment ---");
        System.out.println("x = " + x);       // 10
        System.out.println("x++ = " + x++);   // 10 (use then increment)
        System.out.println("x = " + x);       // 11
        System.out.println("++x = " + (++x)); // 12 (increment then use)
    }
}
```

Integer division (`17 / 5`) gives 3, not 3.4 -- Java truncates the decimal. To get a decimal result, make at least one operand a double: `17.0 / 5`, `17 / 5.0`, or `(double) 17 / 5`. The post-increment (`x++`) uses the current value in the expression and then increments, while pre-increment (`++x`) increments first and then uses the new value.

**Output:**

```
a + b = 22
a - b = 12
a * b = 85
a / b = 3
a % b = 2

--- Float vs Int Division ---
17 / 5   = 3
17.0 / 5 = 3.4
17 / 5.0 = 3.4
(double)17/5 = 3.4

--- Pre/Post Increment ---
x = 10
x++ = 10
x = 11
++x = 12
```

### Relational and Logical Operators

```java
public class LogicalOps {
    public static void main(String[] args) {
        int marks = 78;
        boolean hasProject = true;

        // Relational operators
        System.out.println("marks == 78: " + (marks == 78));
        System.out.println("marks != 100: " + (marks != 100));
        System.out.println("marks > 40: " + (marks > 40));
        System.out.println("marks >= 75: " + (marks >= 75));

        // Logical AND: both must be true
        boolean eligible = marks >= 60 && hasProject;
        System.out.println("\nEligible (marks>=60 AND project): " + eligible);

        // Logical OR: at least one must be true
        boolean getsCertificate = marks >= 90 || hasProject;
        System.out.println("Gets certificate (marks>=90 OR project): " + getsCertificate);

        // Logical NOT: reverses boolean
        System.out.println("NOT hasProject: " + !hasProject);

        // Short-circuit demonstration
        String name = null;
        // Safe: second condition not evaluated if name is null
        if (name != null && name.length() > 0) {
            System.out.println("Name: " + name);
        } else {
            System.out.println("\nName is null or empty (short-circuit saved us!)");
        }
    }
}
```

Relational operators return boolean values. `&&` (AND) returns true only if both conditions are true. `||` (OR) returns true if at least one is true. `!` (NOT) reverses a boolean. The short-circuit example is critically important: `name != null && name.length() > 0` safely handles null because `&&` stops evaluating when the left side is false. If we used `&` instead of `&&`, both sides would be evaluated, causing a NullPointerException.

**Output:**

```
marks == 78: true
marks != 100: true
marks > 40: true
marks >= 75: true

Eligible (marks>=60 AND project): true
Gets certificate (marks>=90 OR project): true
NOT hasProject: false

Name is null or empty (short-circuit saved us!)
```

### Bitwise Operators

```java
public class BitwiseOps {
    public static void main(String[] args) {
        int a = 12;  // binary: 1100
        int b = 10;  // binary: 1010

        System.out.println("a = " + a + " (" + Integer.toBinaryString(a) + ")");
        System.out.println("b = " + b + " (" + Integer.toBinaryString(b) + ")");
        System.out.println();

        System.out.println("a & b  = " + (a & b) + "  (" + Integer.toBinaryString(a & b) + ")");
        System.out.println("a | b  = " + (a | b) + " (" + Integer.toBinaryString(a | b) + ")");
        System.out.println("a ^ b  = " + (a ^ b) + "  (" + Integer.toBinaryString(a ^ b) + ")");
        System.out.println("~a     = " + (~a));

        // Shift operators
        System.out.println("\n--- Shift Operators ---");
        System.out.println("a << 1 = " + (a << 1) + " (multiply by 2)");
        System.out.println("a << 2 = " + (a << 2) + " (multiply by 4)");
        System.out.println("a >> 1 = " + (a >> 1) + "  (divide by 2)");
        System.out.println("a >> 2 = " + (a >> 2) + "  (divide by 4)");

        // Practical: check if number is even/odd
        int num = 7;
        System.out.println("\n" + num + " is " + ((num & 1) == 0 ? "even" : "odd"));

        // Practical: swap without temp variable
        int x = 25, y = 40;
        System.out.println("\nBefore swap: x=" + x + ", y=" + y);
        x = x ^ y;
        y = x ^ y;
        x = x ^ y;
        System.out.println("After swap:  x=" + x + ", y=" + y);
    }
}
```

Bitwise operators work on individual bits. AND (`&`) gives 1 only where both bits are 1. OR (`|`) gives 1 where either bit is 1. XOR (`^`) gives 1 where bits differ. Left shift (`<<`) doubles per shift (multiply by 2^n). Right shift (`>>`) halves per shift (divide by 2^n). Two practical applications: checking even/odd with `num & 1` (faster than `num % 2`), and swapping two numbers without a temporary variable using XOR.

**Output:**

```
a = 12 (1100)
b = 10 (1010)

a & b  = 8  (1000)
a | b  = 14 (1110)
a ^ b  = 6  (110)
~a     = -13

--- Shift Operators ---
a << 1 = 24 (multiply by 2)
a << 2 = 48 (multiply by 4)
a >> 1 = 6  (divide by 2)
a >> 2 = 3  (divide by 4)

7 is odd

Before swap: x=25, y=40
After swap:  x=40, y=25
```

### Ternary Operator and Assignment Operators

```java
public class TernaryAndAssignment {
    public static void main(String[] args) {
        // Ternary operator
        int marks = 72;
        String result = (marks >= 40) ? "Pass" : "Fail";
        System.out.println("Marks: " + marks + " -> " + result);

        // Nested ternary (use sparingly!)
        char grade = (marks >= 90) ? 'A' :
                     (marks >= 80) ? 'B' :
                     (marks >= 70) ? 'C' :
                     (marks >= 60) ? 'D' : 'F';
        System.out.println("Grade: " + grade);

        // Find max of two numbers
        int a = 15, b = 22;
        int max = (a > b) ? a : b;
        System.out.println("Max of " + a + " and " + b + ": " + max);

        // Compound assignment operators
        System.out.println("\n--- Assignment Operators ---");
        int score = 100;
        System.out.println("Initial: " + score);
        score += 25;  System.out.println("score += 25: " + score);
        score -= 10;  System.out.println("score -= 10: " + score);
        score *= 2;   System.out.println("score *= 2:  " + score);
        score /= 3;   System.out.println("score /= 3:  " + score);
        score %= 10;  System.out.println("score %= 10: " + score);
    }
}
```

The ternary operator `condition ? valueIfTrue : valueIfFalse` is a concise way to assign values based on conditions. It can be nested for multiple conditions, but deeply nested ternaries reduce readability -- use if-else for complex logic. Compound assignment operators (`+=`, `-=`, etc.) update a variable by applying an operation to its current value. They also include an implicit cast, which is why `byte b = 10; b += 5;` works without explicit casting.

**Output:**

```
Marks: 72 -> Pass
Grade: C
Max of 15 and 22: 22

--- Assignment Operators ---
Initial: 100
score += 25: 125
score -= 10: 115
score *= 2:  230
score /= 3:  76
score %= 10: 6
```

### Operator Precedence Tricky Examples

```java
public class Precedence {
    public static void main(String[] args) {
        // Multiplication before addition
        System.out.println("2 + 3 * 4 = " + (2 + 3 * 4));
        System.out.println("(2 + 3) * 4 = " + ((2 + 3) * 4));

        // Modulus same precedence as multiplication
        System.out.println("\n10 + 15 % 4 = " + (10 + 15 % 4));

        // Relational before logical
        int x = 5;
        System.out.println("\nx > 3 && x < 10: " + (x > 3 && x < 10));

        // NOT before AND before OR
        boolean result = true || false && false;
        System.out.println("true || false && false = " + result);
        // Evaluates as: true || (false && false) = true || false = true

        boolean result2 = (true || false) && false;
        System.out.println("(true || false) && false = " + result2);

        // Unary minus and increment precedence
        int a = 5;
        int b = -a++;
        System.out.println("\na = 5; b = -a++;");
        System.out.println("b = " + b + ", a = " + a);
        // Post-increment: use a (5), negate (-5), then increment a to 6

        // Complex expression
        int val = 2 + 3 * 4 - 8 / 2 + 7 % 3;
        System.out.println("\n2 + 3*4 - 8/2 + 7%3 = " + val);
        // Steps: 3*4=12, 8/2=4, 7%3=1, then 2+12-4+1=11
    }
}
```

These examples demonstrate common precedence pitfalls. `2 + 3 * 4` = 14 because `*` binds tighter than `+`. `true || false && false` = true because `&&` has higher precedence than `||` (evaluates as `true || (false && false)`). The expression `-a++` first uses a's current value, negates it to get -5 for b, then increments a to 6 (post-increment happens last). The complex expression follows precedence: multiply/divide/modulus first, then add/subtract left to right.

**Output:**

```
2 + 3 * 4 = 14
(2 + 3) * 4 = 20

10 + 15 % 4 = 13

x > 3 && x < 10: true
true || false && false = true
(true || false) && false = false

a = 5; b = -a++;
b = -5, a = 6

2 + 3*4 - 8/2 + 7%3 = 11
```

### The instanceof Operator and == vs .equals()

```java
public class InstanceofDemo {
    public static void main(String[] args) {
        // instanceof checks type
        String name = "Priya";
        System.out.println("name instanceof String: " + (name instanceof String));
        System.out.println("name instanceof Object: " + (name instanceof Object));

        Object obj = "Hello";
        if (obj instanceof String) {
            String s = (String) obj;  // Safe cast after instanceof check
            System.out.println("Casted string: " + s.toUpperCase());
        }

        // == vs .equals() for Strings
        System.out.println("\n--- == vs .equals() ---");
        String s1 = "Hello";
        String s2 = "Hello";
        String s3 = new String("Hello");

        System.out.println("s1 == s2: " + (s1 == s2));         // true (same pool object)
        System.out.println("s1 == s3: " + (s1 == s3));         // false (different objects)
        System.out.println("s1.equals(s3): " + s1.equals(s3)); // true (same value)

        // Always use .equals() for String comparison!
    }
}
```

The `instanceof` operator checks if an object is an instance of a class (or its subclass). It is commonly used before downcasting to prevent ClassCastException. For String comparison: `==` compares references (memory addresses), while `.equals()` compares values. `s1 == s2` is true because Java interns string literals (reuses the same object). But `s1 == s3` is false because `new String()` creates a new object. Always use `.equals()` for String comparison.

**Output:**

```
name instanceof String: true
name instanceof Object: true
Casted string: HELLO

--- == vs .equals() ---
s1 == s2: true
s1 == s3: false
s1.equals(s3): true
```

## Common Mistakes

### Integer Division Surprise

**Wrong:**

```
int total = 100;
int subjects = 3;
double average = total / subjects;
System.out.println("Average: " + average); // Expected 33.33
```

No error, but output is 33.0 instead of 33.33. Integer division happens before assignment to double.

**Correct:**

```
int total = 100;
int subjects = 3;
double average = (double) total / subjects;
System.out.println("Average: " + average); // 33.333...
```

In `total / subjects`, both operands are int, so Java performs integer division: `100 / 3 = 33` (truncated). This int result (33) is then widened to double (33.0) for assignment. The decimal part is already lost. To get a decimal result, cast at least one operand before division: `(double) total / subjects`.

### Using == to Compare Strings

**Wrong:**

```
String input = new String("yes");
if (input == "yes") {
    System.out.println("Confirmed");
}
```

No compiler error, but the condition is false because == compares references, not values.

**Correct:**

```
String input = new String("yes");
if (input.equals("yes")) {
    System.out.println("Confirmed");
}
// Even better (null-safe):
if ("yes".equals(input)) {
    System.out.println("Confirmed");
}
```

The `==` operator compares object references (memory addresses), not values. `new String("yes")` creates a new object different from the string literal `"yes"`, so `==` returns false. Always use `.equals()` for String comparison. Writing `"yes".equals(input)` is even better because it is null-safe -- if input is null, it returns false instead of throwing NullPointerException.

### Confusing = with ==

**Wrong:**

```
int x = 5;
if (x = 10) {  // Assignment, not comparison!
    System.out.println("x is 10");
}
```

error: incompatible types: int cannot be converted to boolean

**Correct:**

```
int x = 5;
if (x == 10) {  // Comparison
    System.out.println("x is 10");
}
```

A single `=` is the assignment operator; `==` is the comparison operator. `x = 10` assigns 10 to x and returns the int value 10. Since Java's if statement requires a boolean (not an int like C/C++), this causes a type error. Java's strict typing actually protects you from this common C/C++ bug.

### Short-Circuit vs Non-Short-Circuit Operators

**Wrong:**

```
String name = null;
// Using & instead of && (non-short-circuit)
if (name != null & name.length() > 0) {
    System.out.println(name);
}
```

NullPointerException: because & evaluates both sides even when name is null.

**Correct:**

```
String name = null;
// Using && (short-circuit) - safe!
if (name != null && name.length() > 0) {
    System.out.println(name);
}
```

The `&` operator (when used with booleans) evaluates BOTH operands regardless of the left result. Since name is null, `name.length()` throws NullPointerException. The `&&` operator short-circuits: if `name != null` is false, it does not evaluate `name.length()`. Always use `&&` and `||` for boolean logic unless you specifically need both sides evaluated.

### Pre/Post Increment Confusion in Expressions

**Wrong:**

```
int a = 5;
int b = a++ + a++;
System.out.println("b = " + b); // Student expects 12
```

No error, but output is 11, not 12. Understanding evaluation order is tricky.

**Correct:**

```
// Avoid using ++ in complex expressions.
// Instead, be explicit:
int a = 5;
int temp1 = a; a++; // temp1 = 5, a = 6
int temp2 = a; a++; // temp2 = 6, a = 7
int b = temp1 + temp2;
System.out.println("b = " + b); // 11
```

In `a++ + a++`: first `a++` returns 5 (then a becomes 6). Second `a++` returns 6 (then a becomes 7). So `b = 5 + 6 = 11`. Using multiple increments in a single expression makes code hard to read and predict. Best practice: use `++` only as standalone statements (`a++;`) and avoid embedding them in complex expressions.

## Summary

- Java has 7 categories of operators: Arithmetic (+, -, *, /, %), Relational (==, !=, >, <, >=, <=), Logical (&&, ||, !), Bitwise (&, |, ^, ~, <<, >>, >>>), Assignment (=, +=, -=, etc.), Ternary (?:), and instanceof.
- Integer division truncates: 10 / 3 gives 3, not 3.33. Cast one operand to double for decimal results: (double) 10 / 3 gives 3.33.
- Pre-increment (++i) increments before using the value. Post-increment (i++) uses the current value then increments. Avoid using both in complex expressions.
- Logical AND (&&) and OR (||) use short-circuit evaluation: the right operand is skipped if the result is already determined. This enables safe null checks.
- Use == for primitive comparison. Use .equals() for object/String comparison. == compares references (memory addresses) for objects, not values.
- Bitwise operators work on binary representations. Left shift (<<) doubles per shift. Right shift (>>) halves. AND (&) masks bits. XOR (^) toggles bits.
- The ternary operator (condition ? valueIfTrue : valueIfFalse) is a concise alternative to simple if-else. It produces a value, making it usable in assignments.
- Compound assignment operators (+=, -=, etc.) include an implicit cast. byte b = 10; b += 5; works, but b = b + 5; requires explicit cast because b + 5 is promoted to int.
- Operator precedence from highest to lowest: unary > multiplicative > additive > shift > relational > equality > bitwise > logical > ternary > assignment. Use parentheses when in doubt.
- The unsigned right shift (>>>) fills leftmost bits with 0 regardless of sign. The signed right shift (>>) preserves the sign bit. This distinction matters for negative numbers.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/operators-in-java/*
*Practice questions: https://learn.modernagecoders.com/resources/java/operators-in-java/practice/*
