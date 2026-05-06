---
title: "Conditional Statements in Java - if, else, switch with Examples | Modern Age Coders"
description: "Master Java conditional statements including if-else, nested if, ternary operator, switch-case, enhanced switch expressions, and String comparison with .equals(). Includes 60 practice questions."
slug: conditional-statements
canonical: https://learn.modernagecoders.com/resources/java/conditional-statements
category: "Java"
keywords: ["java if else", "java switch case", "conditional statements java", "java ternary operator", "java if else if", "java switch expression", "java enhanced switch", "java string equals"]
---
# Conditional Statements in Java (if, else, switch)

**Difficulty:** Beginner  
**Reading time:** 25 min  
**Chapter:** 7  
**Practice questions:** 58

## What Are Conditional Statements?

A **conditional statement** allows your program to make decisions. Instead of executing every line sequentially from top to bottom, the program evaluates a condition (a Boolean expression) and chooses which block of code to execute based on whether the condition is `true` or `false`.

Consider a real-world scenario: an ATM checks if your account balance is sufficient before processing a withdrawal. If the balance is enough, it dispenses cash. If not, it displays an error. This is exactly what conditional statements do in code.

Java provides four primary mechanisms for conditional logic:

1. `if`, `if-else`, `if-else if-else` statements
2. Nested `if` statements
3. The ternary operator (`?:`)
4. `switch-case` statements (including enhanced switch expressions from Java 14+)

Every non-trivial Java program uses conditional statements. They are one of the three fundamental control flow structures alongside sequence (straight-line execution) and loops (repeated execution).

## Why Are Conditional Statements Essential?

### 1. Decision-Making Is the Core of Programming

Without conditionals, your program would perform the exact same actions regardless of input. A login system must check credentials. An e-commerce site must verify payment. A game must determine win/lose conditions. All of these require the program to evaluate conditions and branch accordingly.

### 2. Input Validation and Error Handling

When your program receives input from users, files, or APIs, you must validate it. Is the age a positive number? Is the email in a valid format? Is the password strong enough? Conditional statements let you check these conditions and respond appropriately, preventing bugs and crashes.

### 3. Business Logic Implementation

Most business rules translate directly into conditional statements. Tax calculation depends on income slabs. Shipping cost depends on order weight and destination. Discount eligibility depends on customer tier. Mastering conditionals is essential for translating real-world requirements into working code.

### 4. Foundation for Algorithms

Every algorithm, from simple sorting to complex graph traversal, relies on conditional logic. Binary search checks if the target is in the left or right half. QuickSort partitions based on comparisons. Understanding conditionals deeply is a prerequisite for DSA (Data Structures and Algorithms), which is the backbone of placement preparation.

## Detailed Explanation

### 1. The if Statement

The `if` statement evaluates a Boolean expression. If the expression is `true`, the block inside the curly braces executes. If `false`, the block is skipped entirely.

```
int age = 20;

if (age >= 18) {
    System.out.println("You are eligible to vote.");
}

System.out.println("Program continues.");
```

Since `20 >= 18` is true, "You are eligible to vote." prints. The last line always executes because it is outside the if block. If age were 15, the if block would be skipped but "Program continues." would still print.

#### Curly Braces Are Not Optional (Best Practice)

Java allows omitting curly braces when the if block has only one statement. However, this is widely considered bad practice because it is error-prone:

```
// Legal but dangerous:
if (age >= 18)
    System.out.println("Adult");
    System.out.println("Can vote"); // This ALWAYS executes! Not inside if.
```

The second print statement is NOT inside the if block (indentation does not matter in Java, unlike Python). Always use curly braces, even for single statements.

### 2. The if-else Statement

The `if-else` provides two branches: one for when the condition is true, and another for when it is false. Exactly one of the two blocks always executes.

```
int marks = 35;

if (marks >= 40) {
    System.out.println("You passed.");
} else {
    System.out.println("You failed.");
}
```

Since 35 >= 40 is false, the else block runs. There is no scenario where both blocks or neither block executes.

### 3. The if-else if-else Ladder

When you need to check multiple conditions, use `else if`. Java checks conditions from top to bottom and executes the block for the **first** condition that is true. If no condition is true, the `else` block (if present) runs.

```
int marks = 75;

if (marks >= 90) {
    System.out.println("Grade: A");
} else if (marks >= 80) {
    System.out.println("Grade: B");
} else if (marks >= 70) {
    System.out.println("Grade: C");
} else if (marks >= 60) {
    System.out.println("Grade: D");
} else {
    System.out.println("Grade: F");
}
```

For marks = 75: 75 >= 90? No. 75 >= 80? No. 75 >= 70? Yes. "Grade: C" prints and all remaining else-if/else blocks are skipped. Order matters: always put the most restrictive condition first.

### 4. Nested if Statements

An `if` statement inside another `if` statement is called nesting. The inner condition is only evaluated when the outer condition is true.

```
int age = 22;
boolean hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        System.out.println("You can drive.");
    } else {
        System.out.println("Get a license first.");
    }
} else {
    System.out.println("You are too young to drive.");
}
```

Avoid deep nesting (3+ levels). Flatten conditions using logical operators (`&&`, `||`) or use early returns.

### 5. The Ternary Operator (?:)

The ternary operator is a shorthand for a simple if-else that produces a value. It is the only operator in Java that takes three operands.

```
condition ? valueIfTrue : valueIfFalse
```

Example:

```
int age = 20;
String status = (age >= 18) ? "Adult" : "Minor";
System.out.println(status); // Adult
```

The ternary operator is an **expression**, not a statement. This means it produces a value and can be used in assignments, method arguments, and print statements. Use it only for simple conditions; complex ternary expressions are hard to read.

### 6. switch-case Statement

The `switch` statement compares a single variable against multiple constant values. It is cleaner than a long if-else if chain when you are comparing one variable against many possible values.

```
int day = 3;

switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    default:
        System.out.println("Other day");
}
```

#### Key Rules for switch

- The switch expression can be: `byte`, `short`, `int`, `char`, `String` (Java 7+), or an `enum`.
- Each `case` value must be a **compile-time constant** (literal or final variable).
- The `break` statement exits the switch block. Without it, execution "falls through" to the next case.
- The `default` block is optional and runs when no case matches. It is analogous to `else` in if-else.

#### Fall-Through Behavior

If you omit `break`, execution continues into the next case regardless of whether it matches. This is called **fall-through** and is usually a bug, but sometimes intentional:

```
int month = 2;
switch (month) {
    case 12:
    case 1:
    case 2:
        System.out.println("Winter");
        break;
    case 3:
    case 4:
    case 5:
        System.out.println("Spring");
        break;
}
```

Here, months 12, 1, and 2 all fall through to print "Winter". This is intentional grouping.

### 7. switch with Strings (Java 7+)

Starting from Java 7, you can use String values in switch statements:

```
String command = "start";

switch (command) {
    case "start":
        System.out.println("Starting...");
        break;
    case "stop":
        System.out.println("Stopping...");
        break;
    default:
        System.out.println("Unknown command");
}
```

Internally, Java uses the String's `hashCode()` for efficient comparison. The comparison is case-sensitive: "Start" and "start" are different cases.

### 8. Enhanced switch Expressions (Java 14+)

Java 14 introduced a modern switch syntax using arrow (`->`) notation. It eliminates the need for `break` statements and allows switch to return a value:

```
int day = 3;
String dayName = switch (day) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    case 3 -> "Wednesday";
    case 4 -> "Thursday";
    case 5 -> "Friday";
    case 6 -> "Saturday";
    case 7 -> "Sunday";
    default -> "Invalid";
};
System.out.println(dayName); // Wednesday
```

Key benefits: no fall-through bugs, returns values directly, multiple labels per case (`case 1, 7 ->`), and the compiler checks exhaustiveness.

### 9. Comparing Strings: .equals() vs ==

This is one of the most important concepts for Java interviews and exams. In Java, `==` compares **references** (memory addresses), not the actual content of strings. Use `.equals()` to compare string content.

```
String a = new String("hello");
String b = new String("hello");

System.out.println(a == b);       // false (different objects)
System.out.println(a.equals(b));  // true (same content)
```

String literals are interned by Java (stored in a string pool), so `==` may work for literals, but this is unreliable and should never be used for string comparison in production code. Always use `.equals()`.

## Code Examples

### Simple if-else Statement

```java
public class IfElseDemo {
    public static void main(String[] args) {
        int temperature = 38;

        if (temperature > 37) {
            System.out.println("You have a fever.");
            System.out.println("Please consult a doctor.");
        } else {
            System.out.println("Your temperature is normal.");
        }

        System.out.println("Take care!");
    }
}
```

Since 38 > 37 is true, the if block executes and prints two lines. The else block is skipped. The final print statement is outside the if-else and always executes.

**Output:**

```
You have a fever.
Please consult a doctor.
Take care!
```

### if-else if-else Ladder: Grade Calculator

```java
import java.util.Scanner;

public class GradeCalc {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter marks: ");
        int marks = sc.nextInt();

        if (marks >= 90) {
            System.out.println("Grade: A");
        } else if (marks >= 80) {
            System.out.println("Grade: B");
        } else if (marks >= 70) {
            System.out.println("Grade: C");
        } else if (marks >= 60) {
            System.out.println("Grade: D");
        } else if (marks >= 40) {
            System.out.println("Grade: E");
        } else {
            System.out.println("Grade: F (Fail)");
        }

        sc.close();
    }
}
```

If Suresh enters 82, Java checks from top: 82 >= 90? No. 82 >= 80? Yes. So "Grade: B" prints and all remaining else-if/else blocks are skipped. Even though 82 >= 70, 82 >= 60, and 82 >= 40 are all true, they are never evaluated because the first matching condition wins.

**Output:**

```
Enter marks: 82
Grade: B
```

### Nested if with Logical Operators

```java
public class VoterEligibility {
    public static void main(String[] args) {
        int age = 20;
        String citizenship = "Indian";
        boolean hasVoterId = true;

        if (age >= 18) {
            if (citizenship.equals("Indian")) {
                if (hasVoterId) {
                    System.out.println("Eligible to vote.");
                } else {
                    System.out.println("Get a voter ID first.");
                }
            } else {
                System.out.println("Only Indian citizens can vote here.");
            }
        } else {
            System.out.println("Must be at least 18 to vote.");
        }

        // Flattened version (preferred):
        if (age >= 18 && citizenship.equals("Indian") && hasVoterId) {
            System.out.println("Eligible to vote (flat check).");
        }
    }
}
```

The nested version checks conditions one by one. The flattened version combines them with `&&` (logical AND). Both achieve the same result, but the flat version is easier to read. Note the use of `.equals()` for string comparison, not `==`.

**Output:**

```
Eligible to vote.
Eligible to vote (flat check).
```

### Ternary Operator in Practice

```java
public class TernaryDemo {
    public static void main(String[] args) {
        int age = 16;

        // Basic ternary
        String status = (age >= 18) ? "Adult" : "Minor";
        System.out.println("Status: " + status);

        // Ternary inside println
        System.out.println("Can vote: " + ((age >= 18) ? "Yes" : "No"));

        // Ternary for max of two numbers
        int a = 15, b = 22;
        int max = (a > b) ? a : b;
        System.out.println("Max: " + max);

        // Nested ternary (avoid in production code)
        int marks = 75;
        String grade = (marks >= 90) ? "A" : (marks >= 80) ? "B" : (marks >= 70) ? "C" : "D";
        System.out.println("Grade: " + grade);
    }
}
```

The ternary operator `condition ? valueIfTrue : valueIfFalse` produces a value. For age 16, `(16 >= 18)` is false, so "Minor" is chosen. Nested ternaries work but are hard to read; use if-else for complex conditions.

**Output:**

```
Status: Minor
Can vote: No
Max: 22
Grade: C
```

### switch-case with Fall-Through

```java
public class SwitchDemo {
    public static void main(String[] args) {
        int month = 4;

        // Standard switch
        switch (month) {
            case 1:
                System.out.println("January");
                break;
            case 2:
                System.out.println("February");
                break;
            case 3:
                System.out.println("March");
                break;
            case 4:
                System.out.println("April");
                break;
            default:
                System.out.println("Other month");
        }

        // Fall-through for grouping seasons
        System.out.println("\nSeason:");
        switch (month) {
            case 12: case 1: case 2:
                System.out.println("Winter");
                break;
            case 3: case 4: case 5:
                System.out.println("Spring");
                break;
            case 6: case 7: case 8:
                System.out.println("Summer");
                break;
            case 9: case 10: case 11:
                System.out.println("Autumn");
                break;
            default:
                System.out.println("Invalid month");
        }
    }
}
```

The first switch matches case 4 and prints "April". The `break` exits the switch. In the season switch, multiple cases share the same block using fall-through: cases 3, 4, 5 all reach the "Spring" print. Without `break`, execution would continue into the next case's code.

**Output:**

```
April

Season:
Spring
```

### switch with Strings (Java 7+)

```java
import java.util.Scanner;

public class StringSwitch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter day name: ");
        String day = sc.nextLine().toLowerCase();

        switch (day) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                System.out.println(day + " is a weekday.");
                break;
            case "saturday":
            case "sunday":
                System.out.println(day + " is a weekend.");
                break;
            default:
                System.out.println("Invalid day name.");
        }

        sc.close();
    }
}
```

Since Java 7, switch supports String expressions. We convert the input to lowercase with `toLowerCase()` so the comparison is case-insensitive. Multiple cases fall through to share the "weekday" or "weekend" print. The comparison uses the string's `hashCode()` internally for efficiency.

**Output:**

```
Enter day name: Thursday
thursday is a weekday.
```

### Enhanced switch Expression (Java 14+)

```java
public class EnhancedSwitch {
    public static void main(String[] args) {
        int dayNum = 3;

        // Arrow syntax - no break needed, no fall-through
        String dayName = switch (dayNum) {
            case 1 -> "Monday";
            case 2 -> "Tuesday";
            case 3 -> "Wednesday";
            case 4 -> "Thursday";
            case 5 -> "Friday";
            case 6, 7 -> "Weekend";  // Multiple labels
            default -> "Invalid";
        };

        System.out.println("Day: " + dayName);

        // Switch expression with blocks
        String type = switch (dayNum) {
            case 1, 2, 3, 4, 5 -> {
                System.out.println("Processing weekday...");
                yield "Weekday";  // yield returns value from block
            }
            case 6, 7 -> {
                System.out.println("Processing weekend...");
                yield "Weekend";
            }
            default -> "Unknown";
        };

        System.out.println("Type: " + type);
    }
}
```

The enhanced switch (Java 14+) uses arrow syntax (`->`) which eliminates fall-through and break. The switch can return a value directly. Multiple labels can be grouped with commas (`case 6, 7`). When a case body needs multiple statements, use a block and the `yield` keyword to return the value.

**Output:**

```
Day: Wednesday
Processing weekday...
Type: Weekday
```

### String Comparison: .equals() vs ==

```java
public class StringComparison {
    public static void main(String[] args) {
        String a = "hello";
        String b = "hello";
        String c = new String("hello");

        // == compares references (memory addresses)
        System.out.println("a == b: " + (a == b));       // true (string pool)
        System.out.println("a == c: " + (a == c));       // false (different objects)

        // .equals() compares content
        System.out.println("a.equals(b): " + a.equals(b)); // true
        System.out.println("a.equals(c): " + a.equals(c)); // true

        // In conditionals, ALWAYS use .equals()
        String userInput = new String("admin");
        if (userInput.equals("admin")) {
            System.out.println("Access granted.");
        }

        // Safer: put the literal first to avoid NullPointerException
        String name = null;
        if ("admin".equals(name)) { // No NullPointerException!
            System.out.println("Admin");
        } else {
            System.out.println("Not admin");
        }
    }
}
```

String literals `a` and `b` point to the same object in the string pool, so `==` returns true. But `c` created with `new` is a separate object, so `a == c` is false even though the content is identical. Always use `.equals()` for string comparison. Putting the literal first ("admin".equals(name)) prevents NullPointerException when name is null.

**Output:**

```
a == b: true
a == c: false
a.equals(b): true
a.equals(c): true
Access granted.
Not admin
```

## Common Mistakes

### Using == Instead of .equals() for Strings

**Wrong:**

```
String name = new String("Ravi");
if (name == "Ravi") {
    System.out.println("Match");
} else {
    System.out.println("No match");
}
```

No compilation error, but prints 'No match' because == compares references, not content.

**Correct:**

```
String name = new String("Ravi");
if (name.equals("Ravi")) {
    System.out.println("Match");
}
```

The `==` operator checks if two references point to the same object in memory. Since `new String("Ravi")` creates a new object, it is a different reference from the string literal "Ravi" in the string pool. Always use `.equals()` to compare string content. This is one of the most commonly tested topics in Java placement interviews.

### Missing break in switch Causing Fall-Through

**Wrong:**

```
int x = 1;
switch (x) {
    case 1:
        System.out.println("One");
    case 2:
        System.out.println("Two");
    case 3:
        System.out.println("Three");
}
```

No compilation error, but prints 'One', 'Two', AND 'Three' due to fall-through.

**Correct:**

```
int x = 1;
switch (x) {
    case 1:
        System.out.println("One");
        break;
    case 2:
        System.out.println("Two");
        break;
    case 3:
        System.out.println("Three");
        break;
}
```

Without `break`, execution falls through to the next case regardless of whether it matches. After matching case 1, the code continues executing case 2 and case 3 code. This is a very common bug. In the enhanced switch (Java 14+), arrow syntax eliminates this problem entirely.

### Using = Instead of == in Conditions

**Wrong:**

```
int x = 10;
if (x = 5) {
    System.out.println("Five");
}
```

error: incompatible types: int cannot be converted to boolean

**Correct:**

```
int x = 10;
if (x == 5) {
    System.out.println("Five");
}
```

A single `=` is the assignment operator. `x = 5` assigns 5 to x and returns an int, which cannot be used as a boolean condition. Use `==` for comparison. Java catches this at compile time for int types (unlike C/C++), but for boolean variables, `if (flag = true)` compiles and silently overwrites the variable.

### Wrong Order in if-else if Causing Wrong Results

**Wrong:**

```
int marks = 95;
if (marks >= 40) {
    System.out.println("Grade: E");
} else if (marks >= 70) {
    System.out.println("Grade: C");
} else if (marks >= 90) {
    System.out.println("Grade: A");
}
```

No compilation error, but prints 'Grade: E' instead of 'Grade: A'. Conditions are in the wrong order.

**Correct:**

```
int marks = 95;
if (marks >= 90) {
    System.out.println("Grade: A");
} else if (marks >= 70) {
    System.out.println("Grade: C");
} else if (marks >= 40) {
    System.out.println("Grade: E");
}
```

Java checks conditions top to bottom and stops at the first true one. Since 95 >= 40 is true, "Grade: E" prints immediately and the other conditions are never checked. Always put the most restrictive (highest threshold) condition first in an if-else if chain.

### Omitting Curly Braces Leading to Logic Errors

**Wrong:**

```
int score = 30;
if (score >= 40)
    System.out.println("Passed");
    System.out.println("Congratulations!");  // Always executes!
```

No compilation error, but 'Congratulations!' prints even when score is 30 because it is not inside the if block.

**Correct:**

```
int score = 30;
if (score >= 40) {
    System.out.println("Passed");
    System.out.println("Congratulations!");
}
```

Without curly braces, only the first statement after `if` belongs to the if block. The second print is outside the if and always executes. Indentation is cosmetic in Java and does not affect control flow. Always use curly braces to avoid this error.

## Summary

- The if statement checks a boolean condition. If true, the block executes. If false, it is skipped. Always use curly braces, even for single statements.
- The if-else statement provides two branches: one for true, one for false. Exactly one block always executes.
- The if-else if-else ladder checks multiple conditions from top to bottom. Only the first true condition's block executes. Put the most restrictive condition first.
- Nested if places one if inside another. Avoid more than 2-3 levels; flatten conditions using && and || operators.
- The ternary operator (condition ? a : b) is a compact if-else that produces a value. Use it for simple assignments only.
- switch-case compares one variable against multiple constant values. Always include break to prevent fall-through. Use default for unmatched cases.
- Since Java 7, switch supports String values. Comparison is case-sensitive. Internally uses hashCode() for efficiency.
- Java 14+ enhanced switch uses arrow syntax (->), eliminates fall-through, allows switch to return values, and supports yield for multi-statement cases.
- Always compare Strings with .equals(), never with ==. The == operator compares references (memory addresses), not content. Placing the literal first ("text".equals(variable)) prevents NullPointerException.
- In if conditions, == is comparison and = is assignment. For int types, accidental assignment in if causes a compilation error. For boolean, it silently compiles (if (flag = true)), which is a subtle bug.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/conditional-statements/*
*Practice questions: https://learn.modernagecoders.com/resources/java/conditional-statements/practice/*
