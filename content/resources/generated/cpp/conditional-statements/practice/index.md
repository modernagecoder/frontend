---
title: "Practice: Conditional Statements (if, else, switch)"
description: "57 practice problems for Conditional Statements (if, else, switch) in C++"
slug: conditional-statements-practice
canonical: https://learn.modernagecoders.com/resources/cpp/conditional-statements/practice
category: "C++"
---
# Practice: Conditional Statements (if, else, switch)

**Total questions:** 57

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
int x = 10;
if (x > 5) {
    cout << "Yes";
}
```

*Hint:* Check if 10 > 5.

**Answer:** `Yes`

10 > 5 is true, so the if body executes and prints Yes.

### Q2. [Easy] What is the output?

```
int a = 3, b = 7;
if (a > b) {
    cout << a;
} else {
    cout << b;
}
```

*Hint:* Compare 3 and 7.

**Answer:** `7`

3 > 7 is false, so the else block executes and prints 7.

### Q3. [Easy] What is the output?

```
int num = 0;
if (num) {
    cout << "Truthy";
} else {
    cout << "Falsy";
}
```

*Hint:* In C++, what is the truthiness of 0?

**Answer:** `Falsy`

In C++, 0 is falsy. The condition if (0) evaluates to false, so the else block runs.

### Q4. [Easy] What is the output?

```
int x = 15;
if (x >= 10 && x <= 20) {
    cout << "In range";
} else {
    cout << "Out of range";
}
```

*Hint:* Check if 15 is between 10 and 20 inclusive.

**Answer:** `In range`

15 >= 10 is true AND 15 <= 20 is true. Both conditions are true, so && gives true.

### Q5. [Easy] What is the output?

```
int a = 5, b = 10;
int result = (a > b) ? a : b;
cout << result;
```

*Hint:* Ternary: if condition is false, the value after : is used.

**Answer:** `10`

5 > 10 is false, so the ternary returns the value after the colon, which is b = 10.

### Q6. [Easy] What is the output?

```
char ch = 'B';
switch (ch) {
    case 'A': cout << "Alpha"; break;
    case 'B': cout << "Beta"; break;
    case 'C': cout << "Gamma"; break;
    default: cout << "Unknown";
}
```

*Hint:* ch is 'B', find the matching case.

**Answer:** `Beta`

ch matches case 'B', so "Beta" prints. The break prevents fall-through to case 'C'.

### Q7. [Medium] What is the output?

```
int x = 5;
if (x = 0) {
    cout << "Zero";
} else {
    cout << "Not zero";
}
```

*Hint:* Notice the single = sign in the condition.

**Answer:** `Not zero`

x = 0 is an assignment, not a comparison. It assigns 0 to x and returns 0. Since 0 is falsy, the else block runs. After this line, x is 0.

### Q8. [Medium] What is the output?

```
int day = 3;
switch (day) {
    case 1: cout << "Mon ";
    case 2: cout << "Tue ";
    case 3: cout << "Wed ";
    case 4: cout << "Thu ";
            break;
    case 5: cout << "Fri ";
}
```

*Hint:* No break after case 3. What happens?

**Answer:** `Wed Thu `

day matches case 3, printing "Wed ". Since there is no break, execution falls through to case 4, printing "Thu ". The break in case 4 stops further fall-through.

### Q9. [Medium] What is the output?

```
int a = 10, b = 20, c = 15;
if (a > b) {
    if (a > c) cout << a;
    else cout << c;
} else {
    if (b > c) cout << b;
    else cout << c;
}
```

*Hint:* This finds the maximum of three numbers.

**Answer:** `20`

a > b (10 > 20) is false, so the else block runs. b > c (20 > 15) is true, so 20 (b) is printed.

### Q10. [Medium] What is the output?

```
int x = 5;
if (x > 10);
{
    cout << "Hello";
}
```

*Hint:* Notice the semicolon after the if condition.

**Answer:** `Hello`

The semicolon after if (x > 10); terminates the if with an empty body. The block { cout << "Hello"; } is a standalone block that always executes, regardless of the condition.

### Q11. [Medium] What is the output?

```
int marks = 75;
if (marks >= 90)
    cout << "A";
else if (marks >= 80)
    cout << "B";
else if (marks >= 70)
    cout << "C";
else
    cout << "D";
```

*Hint:* Check conditions top to bottom. Which is the first to be true?

**Answer:** `C`

75 >= 90 is false. 75 >= 80 is false. 75 >= 70 is true. So "C" prints and the rest is skipped.

### Q12. [Medium] What is the output?

```
int x = -5;
int abs = (x >= 0) ? x : -x;
cout << abs;
```

*Hint:* x is negative. Which branch of the ternary is taken?

**Answer:** `5`

-5 >= 0 is false, so the ternary returns -(-5) = 5.

### Q13. [Hard] What is the output?

```
int a = 1, b = 0;
if (a > 0)
    if (b > 0)
        cout << "Both positive";
else
    cout << "Not both positive";
```

*Hint:* Dangling else: which if does the else bind to?

**Answer:** `Not both positive`

The else binds to the nearest unmatched if (the inner one: if (b > 0)). Since a > 0 is true, we enter the outer if. Then b > 0 is false, so the else of the inner if runs, printing "Not both positive".

### Q14. [Hard] What is the output?

```
int x = 3;
switch (x) {
    default: cout << "D ";
    case 1: cout << "1 "; break;
    case 2: cout << "2 ";
    case 3: cout << "3 ";
}
```

*Hint:* default does not have to be at the end. And case 3 has no break.

**Answer:** `3 `

x is 3, so case 3 matches. It prints "3 ". There is no break, but case 3 is the last case, so the switch ends. The default is never reached because case 3 matches directly.

### Q15. [Hard] What is the output?

```
int x = 5;
switch (x) {
    default: cout << "D ";
    case 1: cout << "1 "; break;
    case 2: cout << "2 ";
}
```

*Hint:* No case matches x = 5. Where does execution start?

**Answer:** `D 1 `

No case matches 5, so default executes, printing "D ". There is no break after default, so it falls through to case 1, printing "1 ". The break in case 1 stops further execution.

### Q16. [Hard] What is the output?

```
int a = 5, b = 3;
cout << ((a > b) ? (a - b) : (b - a)) << endl;
cout << ((a < b) ? (a - b) : (b - a)) << endl;
```

*Hint:* Evaluate each ternary condition separately.

**Answer:** `2`
`-2`

First ternary: 5 > 3 is true, so a - b = 2. Second ternary: 5 < 3 is false, so b - a = 3 - 5 = -2.

### Q17. [Easy] In C++, what values are considered truthy and falsy when used in an if condition?

*Hint:* Think about zero versus non-zero.

**Answer:** In C++, `0` is falsy and every **non-zero** value is truthy. This includes negative numbers: `if (-1)` is true. For pointers, `nullptr` (which is 0) is falsy, and any valid pointer is truthy.

Unlike Java or Python, C++ does not have a separate boolean type for conditions. Any integral or pointer expression works in a condition. This is inherited from C and enables common patterns like if (ptr) to check for null pointers.

### Q18. [Medium] What is the dangling else problem in C++? How do you avoid it?

*Hint:* Think about which if an else binds to when there are no braces.

**Answer:** The dangling else problem occurs when an else could associate with more than one if statement. C++ resolves it by binding else to the **nearest unmatched if**, regardless of indentation. To avoid ambiguity, always use curly braces `{}` around if and else bodies, even for single statements.

The compiler ignores indentation. The rule is purely syntactic: else pairs with the closest preceding if that does not already have an else. Braces make the intended pairing explicit.

### Q19. [Hard] Why can you not use a string or a floating-point number in a switch expression in C++?

*Hint:* Think about how switch is implemented at the machine level.

**Answer:** The switch statement is typically compiled into a jump table or binary search on case values, both of which require integral (integer/char/enum) constants for efficient comparison. Floating-point numbers have precision issues (0.1 + 0.2 != 0.3), making exact comparison unreliable. Strings are objects, not integral types, and comparing them requires calling functions rather than simple integer comparison.

The C++ standard restricts switch to integral and enumeration types. For strings, use if-else if chains or a map. For floating-point values, use if-else with tolerance-based comparison.

### Q20. [Hard] What is the output?

```
int x = 2;
int y = (x > 0) - (x < 0);
cout << y;
```

*Hint:* Boolean expressions evaluate to 0 or 1 in C++.

**Answer:** `1`

(2 > 0) evaluates to 1 (true). (2 < 0) evaluates to 0 (false). So y = 1 - 0 = 1. This is the sign function trick: returns 1 for positive, -1 for negative, 0 for zero.

## Mixed Questions

### Q1. [Easy] Write a program that takes an integer and prints whether it is positive, negative, or zero.

*Hint:* Use if-else if-else with two conditions.

**Answer:** ```
#include 
using namespace std;
int main() {
    int n;
    cin >> n;
    if (n > 0) cout << "Positive" << endl;
    else if (n < 0) cout << "Negative" << endl;
    else cout << "Zero" << endl;
    return 0;
}
```

Three mutually exclusive conditions: n > 0, n < 0, and n == 0 (handled by else). Exactly one message always prints.

### Q2. [Easy] What is the output?

```
int a = 10;
if (a == 10)
    cout << "Ten ";
cout << "Done";
```

*Hint:* Without braces, only the first statement after if is in the body.

**Answer:** `Ten Done`

a == 10 is true, so "Ten " prints. "Done" is not inside the if body (no braces), so it always prints.

### Q3. [Easy] What is the output?

```
int x = 7;
if (x > 5 && x < 10)
    cout << "Yes";
else
    cout << "No";
```

*Hint:* Is 7 greater than 5 AND less than 10?

**Answer:** `Yes`

7 > 5 is true AND 7 < 10 is true. Both conditions are true, so && gives true.

### Q4. [Medium] What is the output?

```
int x = 5;
if (x > 3)
    if (x > 10)
        cout << "A";
    else
        cout << "B";
else
    cout << "C";
```

*Hint:* Apply the dangling else rule carefully.

**Answer:** `B`

x > 3 is true, so we enter the outer if. x > 10 is false, so the else of the inner if runs, printing "B". The outermost else ("C") never executes because the outer if condition was true.

### Q5. [Medium] Write a program that takes a character and checks if it is a vowel or consonant (assume lowercase English letters only).

*Hint:* Use switch-case with fall-through for the 5 vowels.

**Answer:** ```
#include 
using namespace std;
int main() {
    char ch;
    cin >> ch;
    switch (ch) {
        case 'a': case 'e': case 'i': case 'o': case 'u':
            cout << ch << " is a vowel" << endl;
            break;
        default:
            cout << ch << " is a consonant" << endl;
    }
    return 0;
}
```

Fall-through groups all vowel cases together. If ch matches any vowel, the vowel message prints. The default handles all consonants.

### Q6. [Medium] What is the output?

```
int a = 5, b = 10, c = 5;
if (a == c)
    cout << "A ";
if (a == b)
    cout << "B ";
if (b != c)
    cout << "C ";
```

*Hint:* These are three separate if statements, not if-else if.

**Answer:** `A C `

These are three independent if statements. a == c (5 == 5): true, prints "A ". a == b (5 == 10): false, skipped. b != c (10 != 5): true, prints "C ".

### Q7. [Medium] What is the output?

```
int x = 10;
if (x > 5 || x < 3) {
    cout << "Yes";
} else {
    cout << "No";
}
```

*Hint:* With ||, if the first condition is true, the whole expression is true.

**Answer:** `Yes`

10 > 5 is true. Since || (OR) short-circuits, it does not even check x < 3. The result is true.

### Q8. [Hard] What is the output?

```
int a = 2, b = 3, c = 4;
int result = (a > b) ? a : (b > c) ? b : c;
cout << result;
```

*Hint:* Evaluate the outer ternary first, then the nested one.

**Answer:** `4`

a > b (2 > 3) is false. So we evaluate the inner ternary: b > c (3 > 4) is false, so c (4) is returned.

### Q9. [Hard] What is the output?

```
int x = 0;
switch (x) {
    case 0:
        cout << "Zero ";
    case 1:
        cout << "One ";
    default:
        cout << "Default ";
}
```

*Hint:* No break statements anywhere. What happens after case 0 matches?

**Answer:** `Zero One Default `

x matches case 0. Since there are no break statements, execution falls through all cases: prints "Zero ", then "One ", then "Default ".

### Q10. [Easy] Write a program that checks if a given year is a leap year.

*Hint:* Leap if divisible by 4, but not 100, unless also divisible by 400.

**Answer:** ```
#include 
using namespace std;
int main() {
    int year;
    cin >> year;
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
        cout << year << " is a leap year" << endl;
    else
        cout << year << " is not a leap year" << endl;
    return 0;
}
```

A year is a leap year if it is divisible by 4 but not by 100, OR if it is divisible by 400. The parentheses ensure correct operator precedence.

### Q11. [Hard] What is the output?

```
int a = 5;
if (a > 2)
    cout << "A ";
if (a > 3)
    cout << "B ";
if (a > 4)
    cout << "C ";
if (a > 5)
    cout << "D ";
```

*Hint:* Each if is independent. Check all four conditions.

**Answer:** `A B C `

5 > 2: true (A). 5 > 3: true (B). 5 > 4: true (C). 5 > 5: false (D skipped). Three separate ifs, not an else-if chain.

### Q12. [Medium] Write a program that takes three integers and prints them in ascending order using only if-else statements (no arrays or sorting algorithms).

*Hint:* Compare pairs and rearrange using swaps or nested conditions.

**Answer:** ```
#include 
using namespace std;
int main() {
    int a, b, c;
    cin >> a >> b >> c;
    if (a > b) { int t = a; a = b; b = t; }
    if (b > c) { int t = b; b = c; c = t; }
    if (a > b) { int t = a; a = b; b = t; }
    cout << a << " " << b << " " << c << endl;
    return 0;
}
```

This uses three comparisons (a simplified bubble sort for 3 elements). After the first two comparisons, c holds the largest. The third comparison ensures a <= b. This always produces sorted order.

### Q13. [Hard] What is the output?

```
int x = 1;
if (x)
    if (x - 1)
        cout << "A";
    else
        cout << "B";
else
    cout << "C";
```

*Hint:* x is 1 (truthy). x-1 is 0 (falsy). Apply the dangling else rule.

**Answer:** `B`

x (1) is truthy, so we enter the outer if. x-1 (0) is falsy, so the inner else runs, printing "B". The outermost else ("C") does not execute because the outer condition was true.

## Multiple Choice Questions

### Q1. [Easy] What is the output of if (0) cout << "Yes"; else cout << "No";?

**Answer:** B

**B is correct.** In C++, 0 is falsy. The condition is false, so the else block executes and prints No.

### Q2. [Easy] Which of the following is the correct ternary operator syntax in C++?

**Answer:** A

**A is correct.** The ternary syntax is `condition ? value_if_true : value_if_false`.

### Q3. [Easy] What happens when no case matches in a switch and there is no default?

**Answer:** C

**C is correct.** If no case matches and there is no default, the entire switch body is skipped. No error occurs.

### Q4. [Easy] Which data types can be used in a switch expression in C++?

**Answer:** C

**C is correct.** switch requires an integral or enumeration type: int, char, short, long, bool, or enum. float, double, and string are not allowed.

### Q5. [Easy] In C++, what is the value of the expression (5 > 3)?

**Answer:** D

**D is correct.** In C++, a boolean true has the integer value 1. The expression (5 > 3) evaluates to true, which is 1 when used in an integer context.

### Q6. [Medium] What is the output?
`int x = 5; if (x = 10) cout << x; else cout << 0;`

**Answer:** B

**B is correct.** x = 10 is an assignment, not comparison. It assigns 10 to x and returns 10, which is truthy. So the if body runs and prints x, which is now 10.

### Q7. [Medium] In the dangling else problem, the else binds to:

**Answer:** C

**C is correct.** C++ ignores indentation. The else always associates with the nearest preceding if that does not already have an else.

### Q8. [Medium] What does the break statement do inside a switch-case?

**Answer:** C

**C is correct.** break exits the switch block entirely, preventing fall-through to subsequent cases.

### Q9. [Medium] What is the output?
`int x = 3; switch(x) { case 1: case 2: case 3: cout << "Low"; break; case 4: case 5: cout << "High"; break; }`

**Answer:** A

**A is correct.** x is 3, which matches case 3. Cases 1, 2, 3 are grouped via fall-through. The break after cout << "Low" prevents further execution.

### Q10. [Medium] Which of the following is an infinite loop caused by a conditional bug?

**Answer:** B

**B is correct.** x = 1 is an assignment (not comparison). It assigns 1 to x every iteration and returns 1 (truthy), so the loop never ends. The x++ has no effect because x is reset to 1 at the start of each check.

### Q11. [Hard] What is the output?
`int a = 0, b = 0; if (a++ && ++b) cout << a << b; else cout << a << b;`

**Answer:** B

**B is correct.** a++ returns 0 (post-increment: uses old value), which is falsy. Due to short-circuit evaluation, ++b is never executed. After the expression, a is 1 (incremented) and b is 0 (never touched). The else branch prints 10.

### Q12. [Hard] What is the output?
`int x = 10; int y = (x > 5) ? (x < 15) ? 1 : 2 : 3; cout << y;`

**Answer:** A

**A is correct.** Outer ternary: x > 5 (true), so evaluate inner ternary: x < 15 (true), returns 1. y = 1.

### Q13. [Hard] What is the value of z?
`int x = 5, y = 10; int z = (x > 0) + (y > 0) + (x + y > 0);`

**Answer:** C

**C is correct.** Each boolean expression evaluates to 1 (true): (5>0)=1, (10>0)=1, (15>0)=1. Sum: 1+1+1=3. This exploits boolean-to-integer conversion in C++.

### Q14. [Hard] Can the default case appear before other cases in a switch block?

**Answer:** B

**B is correct.** The default case can appear anywhere in the switch block. If no case matches, execution jumps to default regardless of its position. Fall-through rules still apply from default to subsequent cases.

## Coding Challenges

### Challenge 1. Triangle Type Checker

**Difficulty:** Easy

Take three side lengths from the user and determine if they form a valid triangle. If valid, print whether it is equilateral, isosceles, or scalene.

**Constraints:**

- Triangle inequality: sum of any two sides must be greater than the third side.

**Sample input:**

```
Enter three sides: 5 5 5
```

**Sample output:**

```
Equilateral triangle
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    int a, b, c;
    cout << "Enter three sides: ";
    cin >> a >> b >> c;
    if (a + b > c && b + c > a && a + c > b) {
        if (a == b && b == c)
            cout << "Equilateral triangle" << endl;
        else if (a == b || b == c || a == c)
            cout << "Isosceles triangle" << endl;
        else
            cout << "Scalene triangle" << endl;
    } else {
        cout << "Not a valid triangle" << endl;
    }
    return 0;
}
```

### Challenge 2. Simple Calculator with switch

**Difficulty:** Easy

Build a calculator that takes two numbers and an operator (+, -, *, /) and prints the result. Handle division by zero.

**Constraints:**

- Use switch-case on the operator character. Print an error for division by zero and unknown operators.

**Sample input:**

```
12 * 5
```

**Sample output:**

```
12 * 5 = 60
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    double a, b;
    char op;
    cin >> a >> op >> b;
    switch (op) {
        case '+': cout << a << " + " << b << " = " << a + b << endl; break;
        case '-': cout << a << " - " << b << " = " << a - b << endl; break;
        case '*': cout << a << " * " << b << " = " << a * b << endl; break;
        case '/': 
            if (b != 0) cout << a << " / " << b << " = " << a / b << endl;
            else cout << "Error: division by zero" << endl;
            break;
        default: cout << "Unknown operator" << endl;
    }
    return 0;
}
```

### Challenge 3. Quadratic Equation Solver

**Difficulty:** Medium

Take coefficients a, b, c of a quadratic equation ax^2 + bx + c = 0. Compute the discriminant and print the nature and values of roots.

**Constraints:**

- Handle three cases: discriminant > 0 (two real roots), == 0 (one repeated root), < 0 (complex roots). Use sqrt() from .

**Sample input:**

```
Enter a b c: 1 -5 6
```

**Sample output:**

```
Two distinct real roots: 3 and 2
```

**Solution:**

```cpp
#include <iostream>
#include <cmath>
using namespace std;
int main() {
    double a, b, c;
    cout << "Enter a b c: ";
    cin >> a >> b >> c;
    double disc = b * b - 4 * a * c;
    if (disc > 0) {
        double r1 = (-b + sqrt(disc)) / (2 * a);
        double r2 = (-b - sqrt(disc)) / (2 * a);
        cout << "Two distinct real roots: " << r1 << " and " << r2 << endl;
    } else if (disc == 0) {
        double r = -b / (2 * a);
        cout << "One repeated root: " << r << endl;
    } else {
        double real = -b / (2 * a);
        double imag = sqrt(-disc) / (2 * a);
        cout << "Complex roots: " << real << " + " << imag << "i and " << real << " - " << imag << "i" << endl;
    }
    return 0;
}
```

### Challenge 4. Income Tax Calculator

**Difficulty:** Medium

Calculate income tax using Indian tax slabs: 0-250000: nil, 250001-500000: 5%, 500001-1000000: 20%, above 1000000: 30%. Tax is computed on each slab separately (not flat rate on total income).

**Constraints:**

- Use if-else if chain. Compute tax incrementally for each slab.

**Sample input:**

```
Enter annual income: 750000
```

**Sample output:**

```
Tax: 37500
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    double income;
    cout << "Enter annual income: ";
    cin >> income;
    double tax = 0;
    if (income > 1000000) {
        tax += (income - 1000000) * 0.30;
        income = 1000000;
    }
    if (income > 500000) {
        tax += (income - 500000) * 0.20;
        income = 500000;
    }
    if (income > 250000) {
        tax += (income - 250000) * 0.05;
    }
    cout << "Tax: " << tax << endl;
    return 0;
}
```

### Challenge 5. Min/Max of Four Numbers Without Library

**Difficulty:** Medium

Take four integers and find the minimum and maximum using only ternary operators. Do not use any library functions or arrays.

**Constraints:**

- Use chained ternary operators. No min/max functions, no arrays, no loops.

**Sample input:**

```
Enter four numbers: 12 5 23 8
```

**Sample output:**

```
Min: 5
Max: 23
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    int a, b, c, d;
    cout << "Enter four numbers: ";
    cin >> a >> b >> c >> d;
    int minAB = (a < b) ? a : b;
    int minCD = (c < d) ? c : d;
    int minVal = (minAB < minCD) ? minAB : minCD;
    int maxAB = (a > b) ? a : b;
    int maxCD = (c > d) ? c : d;
    int maxVal = (maxAB > maxCD) ? maxAB : maxCD;
    cout << "Min: " << minVal << endl;
    cout << "Max: " << maxVal << endl;
    return 0;
}
```

### Challenge 6. Day Name with switch and Weekday/Weekend

**Difficulty:** Easy

Take a day number (1-7) and print the day name. Also print whether it is a weekday or weekend.

**Constraints:**

- Use switch for the day name. Use a second condition (or grouped switch) for weekday/weekend.

**Sample input:**

```
Enter day (1-7): 6
```

**Sample output:**

```
Saturday (Weekend)
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    int day;
    cout << "Enter day (1-7): ";
    cin >> day;
    string name;
    bool weekend = false;
    switch (day) {
        case 1: name = "Monday"; break;
        case 2: name = "Tuesday"; break;
        case 3: name = "Wednesday"; break;
        case 4: name = "Thursday"; break;
        case 5: name = "Friday"; break;
        case 6: name = "Saturday"; weekend = true; break;
        case 7: name = "Sunday"; weekend = true; break;
        default: cout << "Invalid day" << endl; return 1;
    }
    cout << name << (weekend ? " (Weekend)" : " (Weekday)") << endl;
    return 0;
}
```

### Challenge 7. Character Classifier

**Difficulty:** Hard

Take a character and classify it as: uppercase letter, lowercase letter, digit, whitespace, or special character. Print the ASCII value as well.

**Constraints:**

- Use if-else if with character ranges ('A'-'Z', 'a'-'z', '0'-'9'). Do not use library functions like isupper().

**Sample input:**

```
Enter a character: @
```

**Sample output:**

```
@ is a special character (ASCII: 64)
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    char ch;
    cout << "Enter a character: ";
    cin >> ch;
    cout << ch << " is ";
    if (ch >= 'A' && ch <= 'Z')
        cout << "an uppercase letter";
    else if (ch >= 'a' && ch <= 'z')
        cout << "a lowercase letter";
    else if (ch >= '0' && ch <= '9')
        cout << "a digit";
    else if (ch == ' ' || ch == '\t' || ch == '\n')
        cout << "a whitespace character";
    else
        cout << "a special character";
    cout << " (ASCII: " << (int)ch << ")" << endl;
    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/conditional-statements/*
