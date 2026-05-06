---
title: "Conditional Statements in C++ - if, else, switch with Examples | Modern Age Coders"
description: "Master C++ conditional statements including if, if-else, nested if, ternary operator, and switch-case. Includes 57 practice questions with output prediction, MCQs, and coding challenges for placement preparation."
slug: conditional-statements
canonical: https://learn.modernagecoders.com/resources/cpp/conditional-statements
category: "C++"
keywords: ["c++ if else", "c++ switch case", "c++ ternary operator", "c++ conditional statements", "c++ nested if", "c++ dangling else", "c++ decision making", "c++ interview questions conditionals"]
---
# Conditional Statements (if, else, switch)

**Difficulty:** Beginner  
**Reading time:** 25 min  
**Chapter:** 6  
**Practice questions:** 57

## What Are Conditional Statements?

A **conditional statement** allows your program to make decisions. Instead of executing every line from top to bottom, the program evaluates a condition (a boolean expression) and chooses which block of code to execute based on whether the condition is true or false.

Without conditionals, every program would be a straight line of instructions with no decision-making ability. You could not check if a user's password is correct, determine if a number is even or odd, or handle edge cases in an algorithm. Conditional statements are one of the three fundamental control flow structures alongside sequences and loops.

C++ provides the following conditional constructs:

1. **if** -- execute a block only when a condition is true
2. **if-else** -- choose between two blocks based on a condition
3. **if-else if-else** -- chain multiple conditions, executing the first true branch
4. **Nested if** -- an if statement inside another if statement
5. **Ternary operator (?:)** -- a compact one-line conditional expression
6. **switch-case** -- select one of many code blocks based on the value of a variable

## Why Are Conditional Statements Essential?

### 1. Decision-Making is Fundamental

Every non-trivial program must make decisions. Is the user authenticated? Is the input valid? Is the array index within bounds? Did the function succeed or fail? All of these require conditional logic. Without conditionals, you cannot build anything beyond a simple calculator that runs the same computation every time.

### 2. Input Validation and Error Handling

Before processing user input, you must validate it. Is the number positive? Is the denominator non-zero? Is the string non-empty? Conditionals let you catch invalid input before it causes a crash or produces garbage output. In competitive programming, edge cases often determine whether your solution gets Accepted or Wrong Answer.

### 3. Algorithm Control Flow

Almost every algorithm relies on conditionals. Binary search decides whether to go left or right. Sorting algorithms compare elements and swap conditionally. Graph algorithms check if a node has been visited. Without conditionals, you cannot implement any meaningful algorithm.

### 4. Competitive Programming and Interviews

Writing clean conditional logic is a basic expectation in coding interviews. Problems frequently require handling multiple cases efficiently. Understanding short-circuit evaluation, the ternary operator for compact expressions, and switch-case for multi-way branching helps you write faster, cleaner code under time pressure.

## Detailed Explanation

### 1. The if Statement

The simplest conditional. If the condition evaluates to true (non-zero), the body executes. If false (zero), the body is skipped entirely.

```
if (condition) {
    // executes only when condition is true
}
```

```
int age = 20;
if (age >= 18) {
    cout << "You are eligible to vote." << endl;
}
```

In C++, any non-zero value is truthy. So `if (5)` is true, `if (-1)` is true, and `if (0)` is false. This is different from languages like Java where only boolean expressions are allowed in conditions.

### 2. The if-else Statement

When you need to choose between two alternatives:

```
if (condition) {
    // executes when condition is true
} else {
    // executes when condition is false
}
```

```
int num = 7;
if (num % 2 == 0) {
    cout << num << " is even" << endl;
} else {
    cout << num << " is odd" << endl;
}
```

Exactly one of the two blocks will always execute. There is no scenario where both or neither runs.

### 3. The if-else if-else Ladder

When you have more than two mutually exclusive conditions, chain them with else if:

```
if (marks >= 90) {
    cout << "Grade A" << endl;
} else if (marks >= 80) {
    cout << "Grade B" << endl;
} else if (marks >= 70) {
    cout << "Grade C" << endl;
} else if (marks >= 60) {
    cout << "Grade D" << endl;
} else {
    cout << "Grade F" << endl;
}
```

The conditions are evaluated top to bottom. The first true condition's block executes, and the rest are skipped. If none is true, the else block runs. Order matters: if you check `marks >= 60` first, a student with 95 marks would get Grade D.

### 4. Nested if Statements

An if inside another if is called nested if. Use it when a decision depends on a previous decision:

```
if (age >= 18) {
    if (hasVoterID) {
        cout << "You can vote." << endl;
    } else {
        cout << "Get a voter ID first." << endl;
    }
} else {
    cout << "You are underage." << endl;
}
```

Excessive nesting (more than 2-3 levels) makes code hard to read. Refactor using logical operators (`&&`, `||`) or early returns when possible.

### 5. The Dangling Else Problem

Consider this code without braces:

```
if (a > 0)
    if (b > 0)
        cout << "both positive";
else
    cout << "a is not positive";
```

The indentation suggests the else belongs to the outer if, but C++ associates else with the **nearest unmatched if**. So the else actually belongs to `if (b > 0)`. The output "a is not positive" prints when a > 0 but b <= 0, not when a <= 0. This is the dangling else problem. Always use braces to make your intent explicit.

### 6. The Ternary Operator (?:)

A compact alternative to if-else for simple assignments or expressions:

```
variable = (condition) ? value_if_true : value_if_false;
```

```
int a = 10, b = 20;
int maxVal = (a > b) ? a : b;  // maxVal = 20
```

The ternary operator is an **expression** (it produces a value), not a statement. You can use it inside cout, function arguments, or assignments. It is heavily used in competitive programming for compact code.

#### Finding Min/Max Without Library

```
int minVal = (a < b) ? a : b;
int maxVal = (a > b) ? a : b;
// Equivalent to min(a, b) and max(a, b) from 
```

### 7. The switch-case Statement

When you need to compare a variable against multiple constant values, switch-case is cleaner than a long if-else if chain:

```
switch (expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code when no case matches
}
```

Key rules:

- The expression must evaluate to an **integer or character** type (int, char, enum). Strings and floating-point numbers are not allowed.
- Each case value must be a **compile-time constant** (literal or const/constexpr variable).
- **break** exits the switch block. Without break, execution falls through to the next case.
- **default** is optional and handles unmatched values.

#### Fall-Through Behavior

```
int day = 2;
switch (day) {
    case 1:
        cout << "Monday" << endl;
    case 2:
        cout << "Tuesday" << endl;
    case 3:
        cout << "Wednesday" << endl;
        break;
    case 4:
        cout << "Thursday" << endl;
        break;
}
// Output: Tuesday\nWednesday
```

Since case 2 has no break, execution falls through to case 3 and prints both Tuesday and Wednesday. Fall-through is sometimes intentional (grouping cases) but usually a bug.

#### Switch with char

```
char grade = 'B';
switch (grade) {
    case 'A': cout << "Excellent"; break;
    case 'B': cout << "Good"; break;
    case 'C': cout << "Average"; break;
    default: cout << "Invalid grade";
}
```

### 8. Comparing with == vs =

A classic C++ pitfall: using `=` (assignment) instead of `==` (comparison) in a condition:

```
int x = 5;
if (x = 10) {  // BUG: assigns 10 to x, then checks if 10 is non-zero (true)
    cout << "This always executes" << endl;
}
```

After this, x is 10 (not 5), and the if body always runs because 10 is truthy. Modern compilers warn about this, but it is a frequent source of bugs. Some programmers write `if (10 == x)` (Yoda condition) to catch this -- if you accidentally write `=`, the compiler will error because you cannot assign to a literal.

### 9. Conditional Expressions in Competitive Programming

In competitive programming, compact conditional expressions save time:

```
// Absolute value without abs()
int absVal = (x >= 0) ? x : -x;

// Clamp a value between lo and hi
int clamped = (x < lo) ? lo : (x > hi) ? hi : x;

// Sign function: returns -1, 0, or 1
int sign = (x > 0) - (x < 0);
```

The sign trick works because boolean expressions in C++ evaluate to 0 or 1. If x is positive, `(x > 0)` is 1 and `(x < 0)` is 0, giving 1. If x is negative, it gives 0 - 1 = -1. If x is zero, both are 0.

## Code Examples

### if-else: Check Even or Odd

```cpp
#include <iostream>
using namespace std;

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;

    if (num % 2 == 0) {
        cout << num << " is even" << endl;
    } else {
        cout << num << " is odd" << endl;
    }

    return 0;
}
```

The modulo operator (%) returns the remainder of division. If num % 2 equals 0, the number is divisible by 2 (even). Otherwise, it is odd. The if-else ensures exactly one message prints.

**Output:**

```
Enter a number: 7
7 is odd
```

### if-else if-else: Grade Calculator

```cpp
#include <iostream>
using namespace std;

int main() {
    int marks;
    cout << "Enter marks (0-100): ";
    cin >> marks;

    if (marks < 0 || marks > 100) {
        cout << "Invalid marks" << endl;
    } else if (marks >= 90) {
        cout << "Grade: A" << endl;
    } else if (marks >= 80) {
        cout << "Grade: B" << endl;
    } else if (marks >= 70) {
        cout << "Grade: C" << endl;
    } else if (marks >= 60) {
        cout << "Grade: D" << endl;
    } else {
        cout << "Grade: F" << endl;
    }

    return 0;
}
```

The conditions are checked top to bottom. Input validation (marks < 0 or > 100) is handled first. Then the grade boundaries are checked in descending order. If marks is 85, it fails the >= 90 check but passes >= 80, so Grade B prints. The remaining conditions are skipped.

**Output:**

```
Enter marks (0-100): 85
Grade: B
```

### Nested if: Largest of Three Numbers

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b, c;
    cout << "Enter three numbers: ";
    cin >> a >> b >> c;

    int largest;
    if (a >= b) {
        if (a >= c) {
            largest = a;
        } else {
            largest = c;
        }
    } else {
        if (b >= c) {
            largest = b;
        } else {
            largest = c;
        }
    }

    cout << "Largest: " << largest << endl;
    return 0;
}
```

First, we compare a and b. If a >= b, the largest is either a or c (compare them). If b > a, the largest is either b or c. This uses nested if-else to narrow down the answer through two comparisons. An alternative approach: use the ternary operator or the max() function.

**Output:**

```
Enter three numbers: 15 42 28
Largest: 42
```

### Ternary Operator: Absolute Value and Min/Max

```cpp
#include <iostream>
using namespace std;

int main() {
    int x = -7;
    int absX = (x >= 0) ? x : -x;
    cout << "Absolute value of " << x << ": " << absX << endl;

    int a = 25, b = 18;
    int minVal = (a < b) ? a : b;
    int maxVal = (a > b) ? a : b;
    cout << "Min: " << minVal << ", Max: " << maxVal << endl;

    // Nested ternary: classify number
    int num = 0;
    string result = (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
    cout << num << " is " << result << endl;

    return 0;
}
```

The ternary operator evaluates the condition before the ?. If true, the expression before : is returned; if false, the expression after : is returned. Nested ternary (line with num) chains two conditions but should be used sparingly as it reduces readability.

**Output:**

```
Absolute value of -7: 7
Min: 18, Max: 25
0 is zero
```

### switch-case: Day of the Week

```cpp
#include <iostream>
using namespace std;

int main() {
    int day;
    cout << "Enter day number (1-7): ";
    cin >> day;

    switch (day) {
        case 1: cout << "Monday" << endl; break;
        case 2: cout << "Tuesday" << endl; break;
        case 3: cout << "Wednesday" << endl; break;
        case 4: cout << "Thursday" << endl; break;
        case 5: cout << "Friday" << endl; break;
        case 6: cout << "Saturday" << endl; break;
        case 7: cout << "Sunday" << endl; break;
        default: cout << "Invalid day number" << endl;
    }

    return 0;
}
```

The switch expression (day) is compared against each case constant. When a match is found, the corresponding code executes. The break statement prevents fall-through to the next case. If no case matches, the default block runs.

**Output:**

```
Enter day number (1-7): 3
Wednesday
```

### switch-case: Fall-Through for Grouping

```cpp
#include <iostream>
using namespace std;

int main() {
    int month;
    cout << "Enter month number (1-12): ";
    cin >> month;

    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            cout << "31 days" << endl;
            break;
        case 4: case 6: case 9: case 11:
            cout << "30 days" << endl;
            break;
        case 2:
            cout << "28 or 29 days" << endl;
            break;
        default:
            cout << "Invalid month" << endl;
    }

    return 0;
}
```

Intentional fall-through groups multiple cases that share the same action. Cases 1, 3, 5, 7, 8, 10, 12 all fall through to the '31 days' output. This is cleaner than writing seven separate if conditions. The break after each group prevents further fall-through.

**Output:**

```
Enter month number (1-12): 4
30 days
```

### switch with char: Simple Calculator

```cpp
#include <iostream>
using namespace std;

int main() {
    double a, b;
    char op;
    cout << "Enter expression (e.g., 10 + 5): ";
    cin >> a >> op >> b;

    switch (op) {
        case '+':
            cout << a << " + " << b << " = " << a + b << endl;
            break;
        case '-':
            cout << a << " - " << b << " = " << a - b << endl;
            break;
        case '*':
            cout << a << " * " << b << " = " << a * b << endl;
            break;
        case '/':
            if (b != 0)
                cout << a << " / " << b << " = " << a / b << endl;
            else
                cout << "Error: division by zero" << endl;
            break;
        default:
            cout << "Unknown operator: " << op << endl;
    }

    return 0;
}
```

The switch uses a char variable (op) to determine which operation to perform. Inside the '/' case, a nested if checks for division by zero before performing the division. This demonstrates combining switch-case with if-else for edge case handling.

**Output:**

```
Enter expression (e.g., 10 + 5): 10 + 5
10 + 5 = 15
```

## Common Mistakes

### Using = Instead of == in Conditions

**Wrong:**

```
int x = 5;
if (x = 10) {
    cout << "x is 10" << endl;
}
```

This assigns 10 to x instead of comparing. Since 10 is non-zero (truthy), the if body always executes. After this line, x is 10, not 5.

**Correct:**

```
int x = 5;
if (x == 10) {
    cout << "x is 10" << endl;
}
```

`=` is assignment, `==` is comparison. This is one of the most common C++ bugs. Modern compilers issue a warning (-Wparentheses), but many beginners ignore warnings. Use compiler flags `-Wall -Werror` to catch this.

### Missing break in switch-case

**Wrong:**

```
int choice = 1;
switch (choice) {
    case 1:
        cout << "One" << endl;
    case 2:
        cout << "Two" << endl;
    case 3:
        cout << "Three" << endl;
}
// Output: One\nTwo\nThree
```

Without break, execution falls through to subsequent cases. All three messages print when only "One" was intended.

**Correct:**

```
int choice = 1;
switch (choice) {
    case 1:
        cout << "One" << endl;
        break;
    case 2:
        cout << "Two" << endl;
        break;
    case 3:
        cout << "Three" << endl;
        break;
}
```

Each case needs an explicit `break;` to prevent fall-through. Fall-through is intentional only when you want multiple cases to share the same code (like grouping months by days).

### Dangling Else: else Binds to Wrong if

**Wrong:**

```
int a = 5, b = -3;
if (a > 0)
    if (b > 0)
        cout << "both positive" << endl;
else
    cout << "a is not positive" << endl;
// Prints: "a is not positive" (wrong!)
```

The else binds to the inner if (b > 0), not the outer if (a > 0). So when a > 0 and b <= 0, it prints the wrong message.

**Correct:**

```
int a = 5, b = -3;
if (a > 0) {
    if (b > 0) {
        cout << "both positive" << endl;
    }
} else {
    cout << "a is not positive" << endl;
}
```

In C++, else associates with the **nearest unmatched if**. Always use braces to make the structure explicit. This is the dangling else problem, a classic interview topic.

### Semicolon After if Condition

**Wrong:**

```
int x = 5;
if (x > 10);  // Stray semicolon!
{
    cout << "x is greater than 10" << endl;
}
// Prints: "x is greater than 10" (wrong!)
```

The semicolon acts as an empty statement, becoming the if body. The block below runs unconditionally because it is not connected to the if.

**Correct:**

```
int x = 5;
if (x > 10) {
    cout << "x is greater than 10" << endl;
}
```

A semicolon after `if (condition);` creates an empty if body. The compiler does not error because an empty statement is valid syntax. The block below is treated as a standalone block, not part of the if.

### Using float/double in switch

**Wrong:**

```
double val = 1.5;
switch (val) {  // Compilation error!
    case 1.0: cout << "One"; break;
    case 1.5: cout << "One and half"; break;
}
```

Compilation error: switch requires an integral type. Floating-point values (float, double) are not allowed in switch expressions.

**Correct:**

```
double val = 1.5;
if (val == 1.0) {
    cout << "One" << endl;
} else if (val == 1.5) {
    cout << "One and half" << endl;
}
```

switch only works with integral types (int, char, enum, bool). For floating-point comparisons, use if-else if chains. Note: comparing floats with == is also risky due to precision issues.

## Summary

- The if statement executes a block only when its condition is true (non-zero in C++). Any non-zero value is truthy, and 0 is falsy.
- if-else provides two-way branching: exactly one of the two blocks always executes.
- if-else if-else chains multiple conditions evaluated top to bottom. The first true branch executes, and the rest are skipped. Order matters.
- Nested if places an if inside another if. Use it when a decision depends on a prior decision, but avoid deep nesting (refactor with && or early returns).
- The dangling else problem: else binds to the nearest unmatched if, not based on indentation. Always use braces to avoid ambiguity.
- The ternary operator (condition ? true_val : false_val) is an expression that returns a value. Use it for compact assignments and in competitive programming for inline min/max/abs.
- switch-case compares an integral/char expression against constant values. Each case needs break to prevent fall-through. default handles unmatched values.
- Fall-through in switch (omitting break) causes subsequent cases to execute. It is intentional for grouping cases but a bug when forgotten.
- Using = (assignment) instead of == (comparison) in conditions is a common C++ bug. The assignment returns the assigned value, which is truthy if non-zero.
- In competitive programming, use ternary expressions for min/max without the library, and exploit boolean-to-int conversion (true = 1, false = 0) for compact conditional logic.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/conditional-statements/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/conditional-statements/practice/*
