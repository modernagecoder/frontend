---
title: "Your First Java Program - Hello World, main Method, System.out.println Explained | Modern Age Coders"
description: "Write your first Java program step by step. Learn the anatomy of a Java class, public static void main, System.out.println vs print vs printf, comments, naming conventions, and the compilation process. 56 practice questions included."
slug: your-first-java-program
canonical: https://learn.modernagecoders.com/resources/java/your-first-java-program/
category: "Java"
keywords: ["java hello world", "first java program", "java main method", "System.out.println", "public static void main", "java comments", "java naming conventions", "java class structure", "javac java commands", "java for beginners"]
---
# Your First Java Program

**Difficulty:** Beginner  
**Reading time:** 20 min  
**Chapter:** 3  
**Practice questions:** 56

## What Is a Java Program?

A Java program is a collection of instructions written in the Java programming language that the computer can execute. Every Java program consists of at least one **class**, and every standalone program must have a special method called `main` that serves as the **entry point** -- the place where execution begins.

Unlike scripting languages like Python where you can write a single line of code and run it, Java requires a specific structure. Your code must live inside a class, and the executable code must be inside methods. This structure may feel verbose at first, but it enforces organization and makes large programs manageable.

In this chapter, you will write your first Java program, understand every keyword in the `public static void main(String[] args)` signature, learn how to print output, add comments, follow naming conventions, and understand what happens when your code is compiled and run.

## Why Is Understanding Program Structure Important?

Every Java program you ever write will follow the same basic structure. Understanding it thoroughly now prevents confusion later and builds a solid foundation for everything that follows.

### 1. The main Method Is Where Everything Starts

When you run a Java program, the JVM looks for the `main` method with a very specific signature. If this method is missing, has the wrong signature, or is misspelled, your program will not run. Understanding why each keyword (`public`, `static`, `void`) is required helps you understand Java's design philosophy.

### 2. Output Is How Programs Communicate

`System.out.println` is the most basic way for a program to display results. You will use it in every chapter, every exercise, and every debugging session. Understanding the difference between `println`, `print`, and `printf` gives you control over how your output looks.

### 3. Comments Make Code Maintainable

Professional code always includes comments. In placement coding rounds, well-commented solutions demonstrate clarity of thought. In team environments, comments help other developers (and your future self) understand your logic.

### 4. Naming Conventions Are Non-Negotiable

Java has strict naming conventions that the entire industry follows. Using `camelCase` for variables, `PascalCase` for classes, and `UPPER_SNAKE_CASE` for constants is not optional -- it is expected in interviews, code reviews, and professional codebases.

## Detailed Explanation

### 1. Anatomy of a Java Program

Let us dissect the simplest possible Java program line by line:

```
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

#### Line 1: `public class HelloWorld {`

- `public` -- This is an **access modifier** that makes the class accessible from anywhere. Every Java source file can have at most one public class, and the file name must match this class name.
- `class` -- This keyword declares a class. In Java, all code must be inside a class. A class is a blueprint that groups related data and methods.
- `HelloWorld` -- This is the class name. It must match the file name exactly (HelloWorld.java). By convention, class names use **PascalCase** (each word capitalized).
- `{` -- The opening curly brace marks the beginning of the class body.

#### Line 2: `public static void main(String[] args) {`

This is the **main method signature**. Every keyword here is required and has a specific purpose:

- `public` -- The method must be accessible by the JVM from outside the class. If you make it `private`, the JVM cannot call it.
- `static` -- The method belongs to the class itself, not to an instance (object) of the class. The JVM calls `main` without creating an object, so it must be static.
- `void` -- The method does not return any value. The `main` method performs actions but does not return a result to the JVM.
- `main` -- This is the method name. The JVM specifically looks for a method named `main`. You cannot change this name.
- `String[] args` -- This is a parameter: an array of Strings that receives command-line arguments. Even if you do not use command-line arguments, this parameter must be present. You can also write it as `String args[]` or `String... args`.

#### Line 3: `System.out.println("Hello, World!");`

- `System` -- A built-in class in the `java.lang` package that provides access to system-level resources.
- `out` -- A static field of the System class, representing the standard output stream (typically the console/terminal).
- `println` -- A method that prints the given text followed by a newline character. "println" stands for "print line."
- `"Hello, World!"` -- A **String literal** enclosed in double quotes.
- `;` -- Every statement in Java must end with a semicolon. This is required, not optional.

#### Line 4 and 5: Closing Braces

The first `}` closes the main method. The second `}` closes the class. Every opening brace must have a matching closing brace.

### 2. Printing Output: println vs print vs printf

Java provides three primary methods for console output:

#### System.out.println()

Prints the argument followed by a **newline** character. The cursor moves to the next line after printing. This is the most commonly used output method.

#### System.out.print()

Prints the argument **without** a newline. The cursor stays on the same line. Useful when you want multiple outputs on the same line.

#### System.out.printf()

Prints **formatted** output using format specifiers, similar to C's printf. Common format specifiers:

SpecifierTypeExample`%s`String`printf("%s", name)``%d`Integer`printf("%d", age)``%f`Float/Double`printf("%.2f", gpa)``%n`Newline (platform-independent)`printf("Hello%n")``%b`Boolean`printf("%b", true)`

### 3. Comments in Java

Comments are text that the compiler ignores. They exist solely for humans reading the code.

#### Single-Line Comments

Start with `//`. Everything after `//` on that line is ignored by the compiler.

```
// This is a single-line comment
int age = 20; // This comment is after code
```

#### Multi-Line Comments

Start with `/*` and end with `*/`. Can span multiple lines.

```
/* This is a multi-line comment.
   It can span several lines.
   Useful for longer explanations. */
```

#### Javadoc Comments

Start with `/**` and end with `*/`. Used to generate API documentation with the `javadoc` tool.

```
/**
 * Calculates the area of a rectangle.
 * @param length the length of the rectangle
 * @param width the width of the rectangle
 * @return the calculated area
 */
```

### 4. Java Naming Conventions

Java has well-established naming conventions that every professional developer follows:

ElementConventionExampleClassesPascalCase`StudentRecord`, `BankAccount`MethodscamelCase`calculateTotal()`, `getName()`VariablescamelCase`studentName`, `totalMarks`ConstantsUPPER_SNAKE_CASE`MAX_SIZE`, `PI_VALUE`Packageslowercase`com.example.app`

### 5. Escape Sequences

Escape sequences allow you to include special characters in strings that cannot be typed directly:

Escape SequenceMeaningExample Output`\n`NewlineLine break`\t`TabHorizontal tab`\\`Backslash`\``\"`Double quote`"``\'`Single quote`'``\r`Carriage returnCursor to line start

### 6. The Compilation Process

When you compile and run a Java program, the following steps happen:

1. **Source Code:** You write `HelloWorld.java` containing human-readable Java code
2. **Compilation:** `javac HelloWorld.java` invokes the Java compiler, which: parses the source code, checks for syntax and type errors, and generates `HelloWorld.class` containing bytecode
3. **Loading:** `java HelloWorld` starts the JVM, which uses the Class Loader to load `HelloWorld.class` into memory
4. **Verification:** The bytecode verifier checks the code for safety and correctness
5. **Execution:** The execution engine (interpreter + JIT compiler) runs the bytecode, starting from the `main` method

### 7. Command-Line Arguments

The `String[] args` parameter in the main method receives arguments passed from the command line. When you run `java HelloWorld Aarav 20`, the args array contains `["Aarav", "20"]`. This allows your program to accept input without interactive prompts.

## Code Examples

### The Classic Hello World

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

This is the simplest complete Java program. The class name `HelloWorld` must match the file name `HelloWorld.java`. The `main` method is the entry point. `System.out.println` prints text followed by a newline. The semicolon terminates the statement. Compile with `javac HelloWorld.java`, run with `java HelloWorld`.

**Output:**

```
Hello, World!
```

### println vs print vs printf

```java
public class PrintDemo {
    public static void main(String[] args) {
        // println - prints with newline
        System.out.println("Line 1");
        System.out.println("Line 2");

        // print - no newline, stays on same line
        System.out.print("Hello ");
        System.out.print("World");
        System.out.println();  // just a newline

        // printf - formatted output
        String name = "Aarav";
        int age = 20;
        double gpa = 8.75;
        System.out.printf("Name: %s, Age: %d, GPA: %.2f%n", name, age, gpa);

        // printf with width formatting
        System.out.printf("%-10s %5d %8.2f%n", "Priya", 21, 9.10);
        System.out.printf("%-10s %5d %8.2f%n", "Rohan", 19, 7.85);
    }
}
```

`println` adds a newline after each call, so "Line 1" and "Line 2" appear on separate lines. `print` does not add a newline, so "Hello " and "World" appear on the same line. `printf` uses format specifiers: `%s` for strings, `%d` for integers, `%.2f` for doubles with 2 decimal places, `%n` for a platform-independent newline. The `%-10s` left-aligns in a 10-character field; `%5d` right-aligns in a 5-character field.

**Output:**

```
Line 1
Line 2
Hello World
Name: Aarav, Age: 20, GPA: 8.75
Priya          21     9.10
Rohan          19     7.85
```

### Comments in Practice

```java
/**
 * StudentGreeter - Demonstrates all three comment types in Java.
 * This Javadoc comment can be used to generate documentation.
 * @author Priya
 * @version 1.0
 */
public class StudentGreeter {

    // This is a single-line comment
    // The main method is the program's entry point
    public static void main(String[] args) {

        /* Multi-line comment:
           We declare a variable and use it
           to create a personalized greeting. */
        String studentName = "Vikram";
        int semester = 4;

        // Print the greeting
        System.out.println("Welcome, " + studentName + "!");
        System.out.println("Semester: " + semester);

        // TODO: Add more student details later
    }
}
```

This example shows all three comment types. **Javadoc comments** (`/** */`) at the top describe the class and can include tags like `@author` and `@version`. **Single-line comments** (`//`) explain individual lines or sections. **Multi-line comments** (`/* */`) span several lines for longer explanations. The `TODO` comment is a common convention for marking code that needs future work -- most IDEs highlight these.

**Output:**

```
Welcome, Vikram!
Semester: 4
```

### String Concatenation with + Operator

```java
public class Concatenation {
    public static void main(String[] args) {
        String firstName = "Ananya";
        String lastName = "Sharma";
        int age = 19;
        double percentage = 87.5;

        // String concatenation with +
        System.out.println("Name: " + firstName + " " + lastName);
        System.out.println("Age: " + age);
        System.out.println("Score: " + percentage + "%");

        // Tricky: numbers and strings
        System.out.println(10 + 20 + " students");      // 30 students (math first)
        System.out.println("Roll: " + 10 + 20);          // Roll: 1020 (concatenation)
        System.out.println("Sum: " + (10 + 20));          // Sum: 30 (parentheses force math)
    }
}
```

The `+` operator concatenates strings. When you write `"Age: " + age`, Java automatically converts `age` (int) to a String and concatenates. The tricky part: `10 + 20 + " students"` evaluates left to right -- first `10 + 20 = 30` (integer addition), then `30 + " students" = "30 students"` (concatenation). But `"Roll: " + 10 + 20` becomes `"Roll: 10" + 20 = "Roll: 1020"` because the first `+` triggers string concatenation, and it continues. Use parentheses to force arithmetic: `"Sum: " + (10 + 20)` gives `"Sum: 30"`.

**Output:**

```
Name: Ananya Sharma
Age: 19
Score: 87.5%
30 students
Roll: 1020
Sum: 30
```

### Escape Sequences

```java
public class EscapeDemo {
    public static void main(String[] args) {
        // Newline
        System.out.println("Line 1\nLine 2\nLine 3");

        // Tab (useful for alignment)
        System.out.println("Name\tAge\tCity");
        System.out.println("Aarav\t20\tDelhi");
        System.out.println("Neha\t19\tMumbai");

        // Quotes inside strings
        System.out.println("He said, \"Java is great!\"");

        // Backslash
        System.out.println("File path: C:\\Users\\Aarav\\code");

        // Single quote (not strictly necessary in strings, but valid)
        System.out.println("It\'s a sunny day");
    }
}
```

`\n` inserts a newline within a single string, splitting it across lines. `\t` inserts a tab character, useful for creating aligned columns. `\"` allows you to include double quotes inside a string (without it, the compiler would think the string ends). `\\` produces a single backslash (needed because backslash is the escape character itself). These escape sequences work in both `println` and `printf`.

**Output:**

```
Line 1
Line 2
Line 3
Name	Age	City
Aarav	20	Delhi
Neha	19	Mumbai
He said, "Java is great!"
File path: C:\Users\Aarav\code
It's a sunny day
```

### Command-Line Arguments

```java
public class CommandArgs {
    public static void main(String[] args) {
        System.out.println("Number of arguments: " + args.length);

        if (args.length > 0) {
            System.out.println("First argument: " + args[0]);
        }

        if (args.length > 1) {
            System.out.println("Second argument: " + args[1]);
        }

        // Print all arguments
        System.out.println("\nAll arguments:");
        for (int i = 0; i < args.length; i++) {
            System.out.println("  args[" + i + "] = " + args[i]);
        }
    }
}

// Run: java CommandArgs Aarav 20 Delhi
// Output: First argument: Aarav, Second: 20, etc.
```

The `String[] args` parameter captures command-line arguments. If you run `java CommandArgs Aarav 20 Delhi`, then `args[0]` is "Aarav", `args[1]` is "20" (as a String, not an int), and `args[2]` is "Delhi". `args.length` gives the count. Note that all arguments are Strings; if you need a number, you must parse it (e.g., `Integer.parseInt(args[1])`).

**Output:**

```
Number of arguments: 3
First argument: Aarav
Second argument: 20

All arguments:
  args[0] = Aarav
  args[1] = 20
  args[2] = Delhi
```

### Multiple Classes in Action

```java
// File: GreetingApp.java
// Only ONE class can be public, and it must match the file name

public class GreetingApp {
    public static void main(String[] args) {
        String message = MessageHelper.getGreeting("Rohan");
        System.out.println(message);
        System.out.println("Program executed successfully.");
    }
}

// This class is NOT public (default access)
// It can be in the same file as GreetingApp
class MessageHelper {
    static String getGreeting(String name) {
        return "Hello, " + name + "! Welcome to Java programming.";
    }
}
```

A single .java file can contain multiple classes, but only **one** can be `public`, and the file name must match that public class. The `MessageHelper` class is package-private (no access modifier), so it can exist in the same file. When compiled, this produces two .class files: `GreetingApp.class` and `MessageHelper.class`. In practice, each class usually gets its own file for better organization.

**Output:**

```
Hello, Rohan! Welcome to Java programming.
Program executed successfully.
```

### Naming Conventions Demo

```java
public class NamingConventions {
    // Constant: UPPER_SNAKE_CASE
    static final double PI_VALUE = 3.14159;
    static final int MAX_STUDENTS = 60;

    public static void main(String[] args) {
        // Variable: camelCase
        String studentName = "Neha";
        int rollNumber = 42;
        double semesterGpa = 8.9;
        boolean isPlaced = true;

        // Method call: camelCase
        displayStudentInfo(studentName, rollNumber, semesterGpa, isPlaced);
    }

    // Method: camelCase
    static void displayStudentInfo(String name, int roll, double gpa, boolean placed) {
        System.out.println("=== Student Info ===");
        System.out.println("Name: " + name);
        System.out.println("Roll: " + roll);
        System.out.println("GPA: " + gpa);
        System.out.println("Placed: " + placed);
        System.out.println("Max Students: " + MAX_STUDENTS);
    }
}
// Class name: PascalCase (NamingConventions)
// Package names: all lowercase (com.example.app)
```

This program demonstrates all Java naming conventions in one place. The class name `NamingConventions` uses PascalCase. Variables like `studentName` and methods like `displayStudentInfo` use camelCase. Constants like `PI_VALUE` and `MAX_STUDENTS` use UPPER_SNAKE_CASE with the `static final` keywords. Following these conventions is critical for professional Java development and coding interviews.

**Output:**

```
=== Student Info ===
Name: Neha
Roll: 42
GPA: 8.9
Placed: true
Max Students: 60
```

## Common Mistakes

### Missing Semicolon

**Wrong:**

```
public class Test {
    public static void main(String[] args) {
        System.out.println("Hello")
    }
}
```

error: ';' expected
        System.out.println("Hello")
                                  ^

**Correct:**

```
public class Test {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
```

Every statement in Java must end with a semicolon (`;`). This is different from Python which uses newlines to end statements. The compiler's error message points to the exact location where the semicolon is missing. This is the single most common syntax error for beginners.

### Wrong main Method Signature

**Wrong:**

```
public class Test {
    public void main(String[] args) {  // Missing 'static'
        System.out.println("Hello");
    }
}
```

Error: Main method is not static in class Test, please define the main method as:
   public static void main(String[] args)

**Correct:**

```
public class Test {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
```

The JVM requires the main method to be `public static void main(String[] args)` exactly. If you omit `static`, the JVM cannot call the method without creating an object. If you change `void` to another return type, or change the parameter type, the JVM will not recognize it as the entry point. The error message is clear, but this mistake is common.

### Using println with Lowercase 'l'

**Wrong:**

```
public class Test {
    public static void main(String[] args) {
        System.out.printLn("Hello");  // Wrong: capital L
    }
}
```

error: cannot find symbol
        System.out.printLn("Hello");
                  ^
  symbol:   method printLn(String)

**Correct:**

```
public class Test {
    public static void main(String[] args) {
        System.out.println("Hello");  // Correct: lowercase l, lowercase n
    }
}
```

Java is case-sensitive. The method is `println` (all lowercase), not `printLn`, `Println`, or `PrintLn`. Similarly, `System` must have a capital S, and `out` must be lowercase. The "cannot find symbol" error means Java does not recognize the name you typed.

### String Concatenation Surprise with Numbers

**Wrong:**

```
public class Test {
    public static void main(String[] args) {
        System.out.println("Score: " + 10 + 20);
        // Expected: Score: 30
        // Actual: Score: 1020
    }
}
```

No compiler error, but output is 'Score: 1020' instead of 'Score: 30'.

**Correct:**

```
public class Test {
    public static void main(String[] args) {
        System.out.println("Score: " + (10 + 20));  // Score: 30
    }
}
```

Java evaluates `+` from left to right. `"Score: " + 10` produces the string `"Score: 10"` (string concatenation). Then `"Score: 10" + 20` produces `"Score: 1020"` (still concatenation). To force arithmetic first, use parentheses: `(10 + 20)` evaluates to `30` before being concatenated.

### Forgetting Curly Braces

**Wrong:**

```
public class Test {
    public static void main(String[] args)
        System.out.println("Hello");
}
```

error: ';' expected
    public static void main(String[] args)
                                         ^

**Correct:**

```
public class Test {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
```

Method bodies must be enclosed in curly braces `{ }`. Without the opening brace after the method signature, the compiler gets confused and gives a misleading error. Always ensure every opening brace `{` has a matching closing brace `}`. IDEs auto-insert matching braces, but it is important to understand the requirement.

### Using Single Quotes for Strings

**Wrong:**

```
public class Test {
    public static void main(String[] args) {
        System.out.println('Hello World');  // Single quotes!
    }
}
```

error: unclosed character literal
        System.out.println('Hello World');
                           ^

**Correct:**

```
public class Test {
    public static void main(String[] args) {
        System.out.println("Hello World");  // Double quotes for strings
        System.out.println('H');             // Single quotes for single characters only
    }
}
```

In Java, double quotes (`""`) denote **Strings**, and single quotes (`''`) denote a single **character** (char). `'Hello World'` is invalid because single quotes can only contain one character. This is different from Python where single and double quotes are interchangeable for strings.

## Summary

- Every Java program must have at least one class. All executable code must be inside methods within a class.
- The main method signature is exactly: public static void main(String[] args). Each keyword is required: public (JVM access), static (no object needed), void (no return value), String[] args (command-line arguments).
- System.out.println() prints text followed by a newline. System.out.print() prints without a newline. System.out.printf() prints formatted output using specifiers like %s, %d, %.2f.
- Java has three comment types: single-line (//), multi-line (/* */), and Javadoc (/** */). Use comments to explain why, not what.
- The file name must exactly match the public class name (case-sensitive). HelloWorld class must be in HelloWorld.java.
- Java naming conventions: PascalCase for classes (StudentRecord), camelCase for variables and methods (studentName, getAge), UPPER_SNAKE_CASE for constants (MAX_SIZE).
- Escape sequences: \n (newline), \t (tab), \" (double quote), \\ (backslash). These work inside string literals.
- String concatenation with + converts non-String values to Strings automatically. Use parentheses around arithmetic to prevent unexpected concatenation: "Sum: " + (10 + 20) gives "Sum: 30".
- Every statement ends with a semicolon (;). Missing semicolons are the most common syntax error for beginners.
- Java is case-sensitive: System (capital S), println (lowercase), main (lowercase). Typos in these names cause 'cannot find symbol' errors.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/your-first-java-program/*
*Practice questions: https://learn.modernagecoders.com/resources/java/your-first-java-program/practice/*
