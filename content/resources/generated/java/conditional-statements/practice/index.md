---
title: "Practice: Conditional Statements in Java (if, else, switch)"
description: "58 practice problems for Conditional Statements in Java (if, else, switch) in Java"
slug: conditional-statements-practice
canonical: https://learn.modernagecoders.com/resources/java/conditional-statements/practice/
category: "Java"
---
# Practice: Conditional Statements in Java (if, else, switch)

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
int x = 10;
if (x > 5) {
    System.out.println("Big");
}
System.out.println("Done");
```

*Hint:* Check if 10 > 5. The last line is outside the if block.

**Answer:** `Big`
`Done`

`10 > 5` is true, so "Big" prints. "Done" is outside the if block, so it always prints.

### Q2. [Easy] What is the output?

```
int x = 3;
if (x > 5) {
    System.out.println("Big");
}
System.out.println("Done");
```

*Hint:* Is 3 > 5?

**Answer:** `Done`

`3 > 5` is false, so the if block is skipped. Only "Done" prints.

### Q3. [Easy] What is the output?

```
int num = 7;
if (num % 2 == 0) {
    System.out.println("Even");
} else {
    System.out.println("Odd");
}
```

*Hint:* What is 7 % 2?

**Answer:** `Odd`

`7 % 2` = 1 (not 0), so the condition is false. The else block runs, printing "Odd".

### Q4. [Easy] What is the output?

```
int marks = 85;
if (marks >= 90) {
    System.out.println("A");
} else if (marks >= 80) {
    System.out.println("B");
} else if (marks >= 70) {
    System.out.println("C");
} else {
    System.out.println("D");
}
```

*Hint:* Check conditions top to bottom. Which is the first true condition?

**Answer:** `B`

`85 >= 90` is false. `85 >= 80` is true. "B" prints and all remaining else-if/else are skipped.

### Q5. [Easy] What is the output?

```
int a = 5, b = 5;
if (a == b) {
    System.out.println("Equal");
} else {
    System.out.println("Not equal");
}
```

*Hint:* Does 5 equal 5?

**Answer:** `Equal`

`5 == 5` is true, so the if block executes and "Equal" prints.

### Q6. [Medium] What is the output?

```
int x = 15;
if (x > 10) {
    System.out.println("A");
}
if (x > 5) {
    System.out.println("B");
}
if (x > 0) {
    System.out.println("C");
}
```

*Hint:* These are three SEPARATE if statements, not if-else if.

**Answer:** `A`
`B`
`C`

These are three separate if statements, each checked independently. 15 > 10 is true (prints A). 15 > 5 is true (prints B). 15 > 0 is true (prints C). All three print.

### Q7. [Medium] What is the output? Compare with the previous question.

```
int x = 15;
if (x > 10) {
    System.out.println("A");
} else if (x > 5) {
    System.out.println("B");
} else if (x > 0) {
    System.out.println("C");
}
```

*Hint:* This IS an if-else if chain. Only the first true condition's block runs.

**Answer:** `A`

This is an if-else if chain. `15 > 10` is true, so "A" prints and all remaining else-if blocks are skipped. Compare with the previous question.

### Q8. [Medium] What is the output?

```
int x = 10, y = 20;
if (x > 5 && y > 15) {
    System.out.println("Both");
} else if (x > 5 || y > 15) {
    System.out.println("At least one");
} else {
    System.out.println("Neither");
}
```

*Hint:* Check if BOTH conditions are true with &&.

**Answer:** `Both`

`10 > 5` is true and `20 > 15` is true. `true && true` = true. "Both" prints.

### Q9. [Medium] What is the output?

```
String result = (85 >= 40) ? "Pass" : "Fail";
System.out.println(result);
```

*Hint:* This is a ternary operator. Check the condition.

**Answer:** `Pass`

The ternary operator checks `85 >= 40` which is true. The value before `:` is chosen: "Pass".

### Q10. [Medium] What is the output?

```
int day = 2;
switch (day) {
    case 1:
        System.out.println("Mon");
    case 2:
        System.out.println("Tue");
    case 3:
        System.out.println("Wed");
        break;
    default:
        System.out.println("Other");
}
```

*Hint:* There is no break after case 1 and case 2.

**Answer:** `Tue`
`Wed`

Matches case 2, prints "Tue". No break, so it falls through to case 3, prints "Wed". The break after case 3 stops the fall-through. "Other" does not print.

### Q11. [Hard] What is the output?

```
int x = 5;
if (x > 3) {
    if (x > 7) {
        System.out.println("A");
    } else {
        System.out.println("B");
    }
} else {
    if (x > 1) {
        System.out.println("C");
    } else {
        System.out.println("D");
    }
}
```

*Hint:* First check the outer if. Then the inner if within the matching block.

**Answer:** `B`

Outer: `5 > 3` is true, enter first block. Inner: `5 > 7` is false, so inner else runs: "B". The outer else block (C, D) is never reached.

### Q12. [Hard] What is the output?

```
String a = new String("hello");
String b = "hello";
if (a == b) {
    System.out.println("Same");
} else {
    System.out.println("Different");
}
if (a.equals(b)) {
    System.out.println("Equal");
}
```

*Hint:* == compares references. .equals() compares content.

**Answer:** `Different`
`Equal`

`new String("hello")` creates a new object outside the string pool. `==` compares references: different objects, so "Different". `.equals()` compares content: both are "hello", so "Equal".

### Q13. [Hard] What is the output?

```
int x = 2;
switch (x) {
    case 1:
        System.out.println("One");
        break;
    case 2:
        System.out.println("Two");
    case 3:
        System.out.println("Three");
    case 4:
        System.out.println("Four");
        break;
    case 5:
        System.out.println("Five");
}
```

*Hint:* Case 2 has no break. Fall-through continues until a break is hit.

**Answer:** `Two`
`Three`
`Four`

Case 2 matches: prints "Two". No break, falls through to case 3: prints "Three". Still no break, falls through to case 4: prints "Four". Break stops the fall-through. "Five" is not printed.

### Q14. [Hard] What is the output?

```
boolean a = true, b = false, c = true;

if (a && b || c) {
    System.out.println("X");
}
if ((a && b) || c) {
    System.out.println("Y");
}
if (a && (b || c)) {
    System.out.println("Z");
}
```

*Hint:* && has higher precedence than ||.

**Answer:** `X`
`Y`
`Z`

Line 1: `&&` binds tighter than `||`: `(true && false) || true` = `false || true` = true (prints X). Line 2: Same with explicit parentheses: true (prints Y). Line 3: `true && (false || true)` = `true && true` = true (prints Z). All three print.

### Q15. [Medium] What is the difference between using separate if statements and an if-else if chain? When would you use each?

*Hint:* Think about whether conditions are independent or mutually exclusive.

**Answer:** With **separate if statements**, every condition is checked independently; multiple blocks can execute. With **if-else if**, checking stops at the first true condition; only one block executes. Use if-else if for mutually exclusive conditions (like grade ranges). Use separate ifs when conditions are independent and multiple might apply.

For `x = 15`, three separate `if (x > 10)`, `if (x > 5)`, `if (x > 0)` would execute all three blocks. But `if (x > 10) else if (x > 5) else if (x > 0)` would execute only the first.

### Q16. [Hard] Why should you use .equals() instead of == for String comparison in Java? Can == ever give the correct result for Strings?

*Hint:* Think about the string pool and the new keyword.

**Answer:** `==` compares object references (memory addresses), not content. `.equals()` compares the actual character content. `==` CAN return true for string literals due to the string pool (Java interns literals), but it fails for strings created with `new` or obtained from methods like `substring()`, `concat()`, user input, etc. Relying on `==` for strings is unreliable and is a bug.

String literals like `"hello"` are stored in a shared string pool. Two literals with the same content point to the same object, so `==` returns true. But `new String("hello")` creates a separate object. Since you cannot predict which strings are pooled, always use `.equals()`.

## Mixed Questions

### Q1. [Easy] Write a program that takes a number and prints whether it is positive, negative, or zero.

*Hint:* Use if-else if-else with comparisons to 0.

**Answer:** ```
import java.util.Scanner;

public class SignCheck {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        if (num > 0) {
            System.out.println("Positive");
        } else if (num < 0) {
            System.out.println("Negative");
        } else {
            System.out.println("Zero");
        }
        sc.close();
    }
}
```

Three cases: greater than 0, less than 0, or exactly 0. The if-else if-else chain handles all three. Exactly one block executes.

### Q2. [Easy] What is the output?

```
int age = 16;
if (age >= 18) {
    System.out.println("Can vote");
}
System.out.println("Done");
```

*Hint:* 16 is not >= 18. The last line is outside the if.

**Answer:** `Done`

`16 >= 18` is false, so "Can vote" is skipped. "Done" is outside the if block and always prints.

### Q3. [Medium] What is the output?

```
int x = 5;
if (x > 2) {
    System.out.println("A");
    if (x > 4) {
        System.out.println("B");
    }
    System.out.println("C");
}
System.out.println("D");
```

*Hint:* Trace the nesting. 'C' is inside the outer if but outside the inner if.

**Answer:** `A`
`B`
`C`
`D`

`5 > 2` is true: print "A". Inner: `5 > 4` is true: print "B". "C" is inside the outer if but outside the inner if, so it prints. "D" is outside everything, always prints.

### Q4. [Medium] Kavya needs a program that takes age and nationality as input. Print 'Eligible' if age >= 18 AND nationality is 'Indian'. Otherwise, print 'Not Eligible'. Use String comparison correctly.

*Hint:* Use && to combine conditions. Use .equals() for String comparison.

**Answer:** ```
import java.util.Scanner;

public class Eligibility {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter age: ");
        int age = sc.nextInt();
        sc.nextLine();
        System.out.print("Enter nationality: ");
        String nationality = sc.nextLine();
        if (age >= 18 && nationality.equals("Indian")) {
            System.out.println("Eligible");
        } else {
            System.out.println("Not Eligible");
        }
        sc.close();
    }
}
```

We use `&&` to require both conditions. We use `.equals()` for string comparison. We also handle the nextLine() bug by consuming the leftover newline after `nextInt()`.

### Q5. [Medium] What is the output?

```
int num = 15;
if (num % 3 == 0 && num % 5 == 0) {
    System.out.println("FizzBuzz");
} else if (num % 3 == 0) {
    System.out.println("Fizz");
} else if (num % 5 == 0) {
    System.out.println("Buzz");
} else {
    System.out.println(num);
}
```

*Hint:* Is 15 divisible by both 3 and 5?

**Answer:** `FizzBuzz`

`15 % 3 == 0` is true and `15 % 5 == 0` is true. `true && true` = true. "FizzBuzz" prints. The rest are skipped.

### Q6. [Medium] What is the output?

```
char grade = 'B';
switch (grade) {
    case 'A':
        System.out.println("Excellent");
        break;
    case 'B':
        System.out.println("Good");
        break;
    case 'C':
        System.out.println("Average");
        break;
    default:
        System.out.println("Invalid");
}
```

*Hint:* switch works with char type.

**Answer:** `Good`

grade is 'B', which matches case 'B'. "Good" prints. The break prevents fall-through.

### Q7. [Hard] What is the output?

```
int x = 10;
if (x > 5) {
    x = x - 3;
    if (x > 5) {
        x = x - 3;
        if (x > 5) {
            System.out.println("Still big");
        } else {
            System.out.println("Getting small");
        }
    } else {
        System.out.println("Small");
    }
}
System.out.println("x = " + x);
```

*Hint:* Trace x: starts at 10, then 7, then 4.

**Answer:** `Getting small`
`x = 4`

x = 10. `10 > 5`: true. x = 7. `7 > 5`: true. x = 4. `4 > 5`: false. Else: "Getting small". Final x = 4.

### Q8. [Hard] What is the output?

```
String s = "";
if (s != null && !s.isEmpty()) {
    System.out.println("Has content");
} else {
    System.out.println("Empty or null");
}

String t = null;
if (t != null && t.length() > 0) {
    System.out.println("Has content");
} else {
    System.out.println("Empty or null");
}
```

*Hint:* Short-circuit evaluation: if the left side of && is false, the right side is not evaluated.

**Answer:** `Empty or null`
`Empty or null`

For s = "": `s != null` is true, `!s.isEmpty()` is false. `true && false` = false. Else runs. For t = null: `t != null` is false. Due to short-circuit evaluation, `t.length()` is NOT called (which would throw NullPointerException). Else runs.

### Q9. [Hard] What is the output?

```
int a = 10, b = 20, c = 30;

if (a > b) {
    System.out.println("X");
} else if (b > c) {
    System.out.println("Y");
} else if (a + b == c) {
    System.out.println("Z");
} else {
    System.out.println("W");
}
```

*Hint:* Check each condition: 10 > 20? 20 > 30? 10 + 20 == 30?

**Answer:** `Z`

`10 > 20` is false. `20 > 30` is false. `10 + 20 == 30` is true. "Z" prints.

### Q10. [Medium] Write a program that reads three numbers and prints the largest using only if-else statements (no Math.max).

*Hint:* Compare each number with the other two using &&.

**Answer:** ```
import java.util.Scanner;

public class Largest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        if (a >= b && a >= c) {
            System.out.println("Largest: " + a);
        } else if (b >= a && b >= c) {
            System.out.println("Largest: " + b);
        } else {
            System.out.println("Largest: " + c);
        }
        sc.close();
    }
}
```

We check if `a` is >= both b and c. If not, check if `b` is >= both. If neither, `c` must be the largest.

### Q11. [Hard] What is the output?

```
int x = 5;
int result = (x > 10) ? 100 : (x > 3) ? 50 : 10;
System.out.println(result);
```

*Hint:* Nested ternary evaluates from right to left.

**Answer:** `50`

Evaluated as: `(x > 10) ? 100 : ((x > 3) ? 50 : 10)`. `5 > 10` is false, go to else. `5 > 3` is true, so 50 is chosen.

### Q12. [Hard] What is the output?

```
String s1 = "Java";
String s2 = "Ja" + "va";
String s3 = "Ja";
s3 = s3 + "va";

System.out.println(s1 == s2);
System.out.println(s1 == s3);
System.out.println(s1.equals(s3));
```

*Hint:* Compile-time constant expressions are interned. Runtime concatenation creates new objects.

**Answer:** `true`
`false`
`true`

`s2 = "Ja" + "va"` is evaluated at compile time (constant folding) and interned, so `s1 == s2` is true. `s3` is concatenated at runtime, creating a new object, so `s1 == s3` is false. `.equals()` compares content, so it returns true.

### Q13. [Easy] What is the output?

```
int x = 0;
if (x != 0) {
    System.out.println("Non-zero");
} else {
    System.out.println("Zero");
}
```

*Hint:* Is 0 not equal to 0?

**Answer:** `Zero`

`0 != 0` is false, so the else block runs.

### Q14. [Medium] What is the output?

```
int a = 5, b = 10;
int max = (a > b) ? a : b;
int min = (a < b) ? a : b;
System.out.println("Range: " + min + "-" + max);
```

*Hint:* Ternary picks the larger and smaller values.

**Answer:** `Range: 5-10`

max = 10 (since 5 > 10 is false, b is chosen). min = 5 (since 5 < 10 is true, a is chosen).

### Q15. [Hard] What is the output?

```
int x = 5;
switch (x) {
    default:
        System.out.println("Default");
    case 5:
        System.out.println("Five");
        break;
    case 10:
        System.out.println("Ten");
}
```

*Hint:* default does not have to be at the end. Case 5 matches.

**Answer:** `Five`

Even though default is first, Java checks all cases before falling to default. Case 5 matches, prints "Five", and break exits. Default is only reached if no case matches.

### Q16. [Hard] What is the output?

```
int x = 3;
switch (x) {
    default:
        System.out.println("Default");
    case 5:
        System.out.println("Five");
        break;
    case 10:
        System.out.println("Ten");
}
```

*Hint:* x = 3 does not match any case. default runs, but no break follows.

**Answer:** `Default`
`Five`

No case matches x = 3, so default runs (prints "Default"). There is no break after default, so it falls through to case 5 (prints "Five"). The break after case 5 stops further fall-through.

## Multiple Choice Questions

### Q1. [Easy] Which keyword starts a conditional statement in Java?

A. when
B. check
C. if
D. condition

**Answer:** C

**C is correct.** The `if` keyword starts a conditional statement in Java.

### Q2. [Easy] What must a condition in an if statement evaluate to?

A. An int
B. A String
C. A boolean
D. Any type

**Answer:** C

**C is correct.** In Java, the condition in an `if` statement must be a boolean expression (true or false). Unlike C/C++, integers cannot be used as conditions in Java.

### Q3. [Easy] What is the else keyword used for?

A. To check another condition
B. To execute code when the if condition is false
C. To end the if block
D. To loop back to the if

**Answer:** B

**B is correct.** The `else` block executes when the preceding `if` (and all `else if`) conditions are false.

### Q4. [Easy] What is the output of: System.out.println((10 > 5) ? "Yes" : "No");

A. Yes
B. No
C. true
D. Error

**Answer:** A

**A is correct.** `10 > 5` is true, so the value before `:` is chosen: "Yes".

### Q5. [Easy] Which data types can be used in a switch statement (pre-Java 14)?

A. Only int
B. int, char, String, enum
C. Any type including double
D. Only String

**Answer:** B

**B is correct.** switch supports byte, short, int, char, String (Java 7+), and enum types. It does NOT support long, float, double, or boolean.

### Q6. [Medium] What happens if you omit break in a switch case?

A. Compilation error
B. Only the matching case executes
C. Execution falls through to subsequent cases
D. The default case executes

**Answer:** C

**C is correct.** Without break, execution continues into the next case (fall-through) regardless of whether that case's value matches. This is often a bug but can be intentional for grouping.

### Q7. [Medium] How should you compare String content in Java?

A. Using ==
B. Using .equals()
C. Using .compare()
D. Using >

**Answer:** B

**B is correct.** `.equals()` compares the actual character content of strings. `==` compares references (memory addresses) and is unreliable for strings.

### Q8. [Medium] In an if-else if-else chain, how many blocks can execute?

A. All of them
B. At most one
C. At least one
D. Exactly one (when else is present)

**Answer:** D

**D is correct** when an else block is present. With else, exactly one block executes: either the first true if/else-if, or the else. Without else, at most one block executes.

### Q9. [Medium] What is the Java ternary operator syntax?

A. value if condition else value
B. condition ? valueIfTrue : valueIfFalse
C. if condition then value1 else value2
D. condition -> value1, value2

**Answer:** B

**B is correct.** Java's ternary syntax is `condition ? valueIfTrue : valueIfFalse`. Option A is Python syntax. The others are not valid Java.

### Q10. [Medium] Can you use float or double in a switch statement?

A. Yes, since Java 7
B. Yes, since Java 14
C. No, switch does not support floating-point types
D. Only double, not float

**Answer:** C

**C is correct.** switch does not support float or double because floating-point comparison is imprecise. Only byte, short, int, char, String, and enum are allowed.

### Q11. [Hard] What does the enhanced switch (Java 14+) use instead of break?

A. stop
B. Arrow syntax (->)
C. return
D. exit

**Answer:** B

**B is correct.** Enhanced switch uses arrow syntax (`->`) which inherently prevents fall-through. No `break` is needed. For multi-statement blocks, use `yield` to return a value.

### Q12. [Hard] What is the output of: System.out.println("hello" == "hello");

A. true
B. false
C. Error
D. Depends on JVM

**Answer:** A

**A is correct.** String literals are interned (stored in a shared string pool). Both "hello" references point to the same pool object, so `==` returns true. However, this should not be relied upon in production code.

### Q13. [Hard] What is short-circuit evaluation in the context of && and ||?

A. Both operands are always evaluated
B. The right operand is skipped if the left determines the result
C. The operator returns an int instead of boolean
D. It only works inside if statements

**Answer:** B

**B is correct.** With `&&`, if the left operand is false, the right is not evaluated (result is already false). With `||`, if the left is true, the right is not evaluated (result is already true). This is important for null checks: `s != null && s.length() > 0` is safe because `s.length()` is not called when s is null.

### Q14. [Hard] Which of these is a compile-time error?

A. if (true) {}
B. if (1) {}
C. if (x == 5) {}
D. if (x != null) {}

**Answer:** B

**B is correct.** In Java, the condition must be a boolean. `if (1)` passes an int, which is a compile-time error. In C/C++, this would be valid (non-zero is truthy), but Java is strict about boolean types.

### Q15. [Hard] What keyword is used to return a value from an enhanced switch block?

A. return
B. break
C. yield
D. give

**Answer:** C

**C is correct.** In enhanced switch expressions, when a case body is a block (curly braces), the `yield` keyword returns the value. `return` would exit the enclosing method, not just the switch.

### Q16. [Easy] What is the output of: System.out.println(5 > 3);

A. true
B. false
C. 1
D. Error

**Answer:** A

**A is correct.** `5 > 3` evaluates to the boolean value `true`, which is printed.

### Q17. [Medium] What is the difference between & and && in Java?

A. They are identical
B. & always evaluates both operands; && short-circuits
C. && always evaluates both operands; & short-circuits
D. & is for bitwise only; && is for logical only

**Answer:** B

**B is correct.** `&&` is the short-circuit AND: if the left is false, the right is not evaluated. `&` always evaluates both operands (no short-circuit). Both can be used as logical operators with booleans, but `&&` is preferred for conditional checks.

### Q18. [Medium] What does the default case in switch do?

A. Executes first
B. Executes when no case matches
C. Must always be present
D. Executes after every case

**Answer:** B

**B is correct.** The `default` block executes when none of the case values match the switch expression. It is optional and analogous to the `else` in an if-else chain.

## Coding Challenges

### Challenge 1. Voting Eligibility

**Difficulty:** Easy

Write a program that takes a user's age and prints whether they are eligible to vote (age >= 18). If not, print how many years they need to wait.

**Constraints:**

- Use if-else.

**Sample input:**

```
Enter your age: 15
```

**Sample output:**

```
You cannot vote yet. Wait 3 more years.
```

**Solution:**

```java
import java.util.Scanner;

public class VotingAge {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your age: ");
        int age = sc.nextInt();
        if (age >= 18) {
            System.out.println("You can vote!");
        } else {
            System.out.println("You cannot vote yet. Wait " + (18 - age) + " more years.");
        }
        sc.close();
    }
}
```

### Challenge 2. Ticket Price Calculator

**Difficulty:** Easy

A cinema charges: Children (under 12): Rs 100, Teens (12-17): Rs 200, Adults (18-59): Rs 300, Seniors (60+): Rs 150. Take age as input and print the ticket price.

**Constraints:**

- Use if-else if-else chain.

**Sample input:**

```
Enter age: 14
```

**Sample output:**

```
Ticket price: Rs 200
```

**Solution:**

```java
import java.util.Scanner;

public class TicketPrice {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter age: ");
        int age = sc.nextInt();
        int price;
        if (age < 12) { price = 100; }
        else if (age <= 17) { price = 200; }
        else if (age <= 59) { price = 300; }
        else { price = 150; }
        System.out.println("Ticket price: Rs " + price);
        sc.close();
    }
}
```

### Challenge 3. Day of the Week (switch)

**Difficulty:** Medium

Read a number (1-7) from the user and print the corresponding day of the week using a switch statement. Also print whether it is a weekday or weekend. Handle invalid input.

**Constraints:**

- Use switch-case. Use fall-through for weekend grouping.

**Sample input:**

```
Enter day number (1-7): 6
```

**Sample output:**

```
Saturday
Weekend
```

**Solution:**

```java
import java.util.Scanner;

public class DayOfWeek {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter day number (1-7): ");
        int day = sc.nextInt();
        String dayName;
        switch (day) {
            case 1: dayName = "Monday"; break;
            case 2: dayName = "Tuesday"; break;
            case 3: dayName = "Wednesday"; break;
            case 4: dayName = "Thursday"; break;
            case 5: dayName = "Friday"; break;
            case 6: dayName = "Saturday"; break;
            case 7: dayName = "Sunday"; break;
            default: dayName = "Invalid"; break;
        }
        System.out.println(dayName);
        switch (day) {
            case 1: case 2: case 3: case 4: case 5:
                System.out.println("Weekday"); break;
            case 6: case 7:
                System.out.println("Weekend"); break;
            default:
                System.out.println("Invalid day number");
        }
        sc.close();
    }
}
```

### Challenge 4. Leap Year Checker

**Difficulty:** Medium

Take a year and determine if it is a leap year. Rules: divisible by 4 AND not by 100, OR divisible by 400. Test with 2024, 1900, 2000.

**Constraints:**

- Use logical operators (&&, ||, !).

**Sample input:**

```
Enter year: 1900
```

**Sample output:**

```
1900 is NOT a leap year
```

**Solution:**

```java
import java.util.Scanner;

public class LeapYear {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter year: ");
        int year = sc.nextInt();
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            System.out.println(year + " is a leap year");
        } else {
            System.out.println(year + " is NOT a leap year");
        }
        sc.close();
    }
}
```

### Challenge 5. Simple Calculator (switch)

**Difficulty:** Medium

Build a calculator that takes two numbers and an operation (+, -, *, /) as a char. Use switch to perform the operation. Handle division by zero.

**Constraints:**

- Use switch-case on char type.

**Sample input:**

```
Enter two numbers: 20 0
Enter operation: /
```

**Sample output:**

```
Error: Division by zero!
```

**Solution:**

```java
import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter two numbers: ");
        double a = sc.nextDouble();
        double b = sc.nextDouble();
        sc.nextLine();
        System.out.print("Enter operation (+, -, *, /): ");
        char op = sc.nextLine().charAt(0);
        switch (op) {
            case '+': System.out.println("Result: " + (a + b)); break;
            case '-': System.out.println("Result: " + (a - b)); break;
            case '*': System.out.println("Result: " + (a * b)); break;
            case '/':
                if (b == 0) { System.out.println("Error: Division by zero!"); }
                else { System.out.println("Result: " + (a / b)); }
                break;
            default: System.out.println("Invalid operation!");
        }
        sc.close();
    }
}
```

### Challenge 6. Triangle Type Identifier

**Difficulty:** Medium

Take three sides and determine: (1) if they form a valid triangle, (2) if valid, whether it is equilateral, isosceles, or scalene.

**Constraints:**

- Validate with triangle inequality theorem. Use nested if for type.

**Sample input:**

```
Enter three sides: 5 5 8
```

**Sample output:**

```
Valid triangle
Type: Isosceles
```

**Solution:**

```java
import java.util.Scanner;

public class TriangleType {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter three sides: ");
        int a = sc.nextInt(), b = sc.nextInt(), c = sc.nextInt();
        if (a + b > c && b + c > a && a + c > b) {
            System.out.println("Valid triangle");
            if (a == b && b == c) {
                System.out.println("Type: Equilateral");
            } else if (a == b || b == c || a == c) {
                System.out.println("Type: Isosceles");
            } else {
                System.out.println("Type: Scalene");
            }
        } else {
            System.out.println("Not a valid triangle");
        }
        sc.close();
    }
}
```

### Challenge 7. BMI Calculator with Health Category

**Difficulty:** Hard

Take weight (kg) and height (m). Calculate BMI = weight / (height^2). Classify: Underweight (<18.5), Normal (18.5-24.9), Overweight (25-29.9), Obese (30+). Print BMI rounded to 1 decimal.

**Constraints:**

- Validate positive inputs. Use printf for formatting.

**Sample input:**

```
Enter weight (kg): 70
Enter height (m): 1.75
```

**Sample output:**

```
BMI: 22.9
Category: Normal weight
```

**Solution:**

```java
import java.util.Scanner;

public class BMICalc {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter weight (kg): ");
        double weight = sc.nextDouble();
        System.out.print("Enter height (m): ");
        double height = sc.nextDouble();
        if (weight <= 0 || height <= 0) {
            System.out.println("Invalid input.");
        } else {
            double bmi = weight / (height * height);
            System.out.printf("BMI: %.1f%n", bmi);
            if (bmi < 18.5) {
                System.out.println("Category: Underweight");
            } else if (bmi < 25) {
                System.out.println("Category: Normal weight");
            } else if (bmi < 30) {
                System.out.println("Category: Overweight");
            } else {
                System.out.println("Category: Obese");
            }
        }
        sc.close();
    }
}
```

### Challenge 8. Electricity Bill Calculator

**Difficulty:** Hard

Calculate electricity bill with tiered pricing: first 100 units at Rs 5/unit, next 100 (101-200) at Rs 7/unit, next 100 (201-300) at Rs 10/unit, above 300 at Rs 15/unit. Add Rs 100 fixed charge.

**Constraints:**

- Use if-else if for slab calculation.

**Sample input:**

```
Enter units consumed: 250
```

**Sample output:**

```
Units: 250
Total bill: Rs 1600
```

**Solution:**

```java
import java.util.Scanner;

public class ElecBill {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter units consumed: ");
        int units = sc.nextInt();
        int bill;
        if (units <= 100) {
            bill = units * 5;
        } else if (units <= 200) {
            bill = 100 * 5 + (units - 100) * 7;
        } else if (units <= 300) {
            bill = 100 * 5 + 100 * 7 + (units - 200) * 10;
        } else {
            bill = 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 15;
        }
        int total = bill + 100;
        System.out.println("Units: " + units);
        System.out.println("Total bill: Rs " + total);
        sc.close();
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/conditional-statements/*
