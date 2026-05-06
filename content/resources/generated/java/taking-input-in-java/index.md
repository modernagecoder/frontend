---
title: "Taking Input in Java with Scanner Class - Complete Tutorial | Modern Age Coders"
description: "Learn how to take user input in Java using the Scanner class. Covers nextInt, nextDouble, nextLine, the nextLine bug, try-with-resources, and BufferedReader alternative. Includes 55 practice questions."
slug: taking-input-in-java
canonical: https://learn.modernagecoders.com/resources/java/taking-input-in-java/
category: "Java"
keywords: ["java scanner class", "java user input", "nextInt nextLine java", "scanner java tutorial", "java input from keyboard", "java buffered reader input", "scanner nextLine bug java", "java console input"]
---
# Taking Input with Scanner

**Difficulty:** Beginner  
**Reading time:** 22 min  
**Chapter:** 6  
**Practice questions:** 56

## What Is User Input in Java?

In most real programs, data does not come from hardcoded values inside the source code. It comes from outside: the user types something into the console, a file is read from disk, or data arrives over the network. **User input** refers to data that a user provides to a running program, typically through the keyboard.

Java provides several ways to read user input. The most common approach for console-based programs is the `Scanner` class, which lives in the `java.util` package. Scanner can parse primitive types and strings from an input stream, most commonly `System.in` (the standard keyboard input).

### The Basic Flow

Reading input in Java involves three steps:

1. **Import** the Scanner class: `import java.util.Scanner;`
2. **Create** a Scanner object: `Scanner sc = new Scanner(System.in);`
3. **Read** data using methods like `nextInt()`, `nextDouble()`, `nextLine()`, etc.

After you are done reading input, you should close the Scanner to release resources: `sc.close();`

## Why Is Understanding Input Important?

### 1. Programs Must Interact with Users

A program that only prints hardcoded output is useless in practice. Whether you are building a calculator, a grading system, or a login module, your program needs to accept data from the user at runtime. Understanding how to read input correctly is foundational to writing any interactive Java program.

### 2. Input Handling Is a Common Source of Bugs

One of the most frequent bugs that Java beginners encounter is the `nextLine()` after `nextInt()` problem, where Scanner appears to skip input. Understanding how Scanner works internally (its token-based parsing and the leftover newline character) is essential for writing bug-free input code. This is also a common interview question.

### 3. Type Safety and Validation

Java is a statically typed language. When you read input, you need to read it as the correct type. Using `nextInt()` when the user types a string causes an `InputMismatchException`. Knowing how to handle different input types and validate them is critical for robust programs.

### 4. Placement and Interview Relevance

In coding rounds for placements, you will almost always read input from the console. Many students lose time or get wrong answers because they do not handle input correctly. Mastering Scanner (and knowing the BufferedReader alternative for performance-critical scenarios) gives you an edge.

## Detailed Explanation

### 1. Importing and Creating a Scanner

The `Scanner` class is in the `java.util` package. You must import it before using it. Then, create a Scanner object by passing `System.in` (which represents the keyboard) as the input source.

```
import java.util.Scanner;

public class InputDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Now use sc to read input
        sc.close();
    }
}
```

`System.in` is an `InputStream` that reads bytes from the keyboard. Scanner wraps it and provides convenient methods to parse those bytes into Java types like `int`, `double`, and `String`.

### 2. Reading Different Data Types

Scanner provides specific methods for each data type:

MethodReturnsReads`nextInt()`intAn integer value`nextLong()`longA long integer`nextFloat()`floatA float value`nextDouble()`doubleA double value`nextBoolean()`booleantrue or false`next()`StringA single token (word, no spaces)`nextLine()`StringAn entire line (including spaces)`nextByte()`byteA byte value`nextShort()`shortA short value

### 3. next() vs nextLine()

This distinction is critical and is a source of many bugs:

- `next()` reads a single **token**. A token is a sequence of characters separated by whitespace (spaces, tabs, newlines). If the user types "Amit Kumar", `next()` returns only "Amit". The " Kumar" part remains in the input buffer.
- `nextLine()` reads the **entire line** up to the newline character. If the user types "Amit Kumar" and presses Enter, `nextLine()` returns "Amit Kumar". It consumes the newline character but does not include it in the returned string.

### 4. The nextLine() After nextInt() Bug

This is the single most common Scanner bug in Java. When you call `nextInt()` (or `nextDouble()`, `nextFloat()`, etc.), Scanner reads the number but **does not consume the newline character** that the user pressed after typing the number. That leftover newline sits in the input buffer.

When you then call `nextLine()`, it sees that leftover newline and immediately returns an empty string, without waiting for the user to type anything. It appears as if the program "skipped" the input.

```
Scanner sc = new Scanner(System.in);
System.out.print("Enter age: ");
int age = sc.nextInt();           // User types: 21\n
System.out.print("Enter name: ");
String name = sc.nextLine();      // Reads the leftover \n, returns ""
System.out.println("Name: " + name); // Prints: Name:
```

#### The Fix: Consume the Leftover Newline

Add an extra `sc.nextLine()` call immediately after `nextInt()` to consume the leftover newline before reading the actual string input:

```
int age = sc.nextInt();
sc.nextLine();  // Consume the leftover newline
String name = sc.nextLine();  // Now this works correctly
```

Alternatively, you can read everything as strings using `nextLine()` and then parse them manually:

```
int age = Integer.parseInt(sc.nextLine());
String name = sc.nextLine();  // No leftover newline problem
```

### 5. Checking Input Before Reading: hasNext Methods

Scanner provides `hasNextInt()`, `hasNextDouble()`, `hasNextLine()`, etc. These methods return `true` if the next token can be read as the specified type, without actually consuming it. This is useful for input validation:

```
System.out.print("Enter a number: ");
if (sc.hasNextInt()) {
    int num = sc.nextInt();
    System.out.println("You entered: " + num);
} else {
    System.out.println("That is not a valid integer.");
    sc.next(); // Consume the invalid token
}
```

### 6. Closing the Scanner

When you are done reading input, you should close the Scanner by calling `sc.close()`. This releases the underlying input stream resource. However, be aware that closing a Scanner that wraps `System.in` also closes `System.in` itself, which means you cannot create another Scanner for `System.in` later in the same program.

For simple programs, not closing Scanner results in a compiler warning but usually no practical harm. For larger programs or when reading from files, always close the Scanner.

### 7. try-with-resources for Scanner

Java 7 introduced the try-with-resources statement, which automatically closes resources when the block exits. Since Scanner implements the `AutoCloseable` interface, you can use it with try-with-resources:

```
try (Scanner sc = new Scanner(System.in)) {
    System.out.print("Enter a number: ");
    int num = sc.nextInt();
    System.out.println("You entered: " + num);
} // Scanner is automatically closed here
```

This is considered best practice because it guarantees the Scanner is closed even if an exception occurs.

### 8. BufferedReader: The Performance Alternative

For competitive programming or situations where you need to read large amounts of input quickly, `BufferedReader` is faster than Scanner because it does not parse tokens. It reads raw text and you parse it yourself.

```
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class FastInput {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.print("Enter your name: ");
        String name = br.readLine();
        System.out.print("Enter your age: ");
        int age = Integer.parseInt(br.readLine().trim());
        System.out.println(name + " is " + age + " years old.");
        br.close();
    }
}
```

BufferedReader reads entire lines as strings. You must parse numbers manually using `Integer.parseInt()`, `Double.parseDouble()`, etc. For reading multiple values on one line, combine BufferedReader with `StringTokenizer` or `String.split()`.

## Code Examples

### Basic Integer and String Input

```java
import java.util.Scanner;

public class BasicInput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your age: ");
        int age = sc.nextInt();

        sc.nextLine(); // Consume leftover newline

        System.out.print("Enter your name: ");
        String name = sc.nextLine();

        System.out.println(name + " is " + age + " years old.");
        sc.close();
    }
}
```

We read an integer with `nextInt()`, then consume the leftover newline with an extra `sc.nextLine()`, then read a full line string. Without the extra `nextLine()`, the name would be an empty string.

**Output:**

```
Enter your age: 20
Enter your name: Amit Sharma
Amit Sharma is 20 years old.
```

### Reading Multiple Data Types

```java
import java.util.Scanner;

public class MultiTypeInput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter an integer: ");
        int i = sc.nextInt();

        System.out.print("Enter a double: ");
        double d = sc.nextDouble();

        System.out.print("Enter a boolean (true/false): ");
        boolean b = sc.nextBoolean();

        System.out.println("int: " + i);
        System.out.println("double: " + d);
        System.out.println("boolean: " + b);

        sc.close();
    }
}
```

Scanner provides dedicated methods for each primitive type. `nextInt()` reads an int, `nextDouble()` reads a double, and `nextBoolean()` reads a boolean (must be exactly "true" or "false", case-insensitive). If the user enters something that cannot be parsed as the expected type, Scanner throws an `InputMismatchException`.

**Output:**

```
Enter an integer: 42
Enter a double: 3.14
Enter a boolean (true/false): true
int: 42
double: 3.14
boolean: true
```

### next() vs nextLine() Difference

```java
import java.util.Scanner;

public class NextVsNextLine {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String word = sc.next();       // Reads only the first word
        String rest = sc.nextLine();   // Reads the rest of the line

        System.out.println("next() returned: \"" + word + "\"");
        System.out.println("nextLine() returned: \"" + rest + "\"");

        sc.close();
    }
}
```

When the user types "Neha is studying", `next()` reads only "Neha" (the first token). The remaining " is studying" (note the leading space) is left in the buffer. `nextLine()` then reads everything remaining on that line, including the leading space. This demonstrates why `next()` is unsuitable for reading full names or sentences.

**Output:**

```
Enter a sentence: Neha is studying
next() returned: "Neha"
nextLine() returned: " is studying"
```

### The nextLine() Bug Demonstrated and Fixed

```java
import java.util.Scanner;

public class NextLineBug {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // --- THE BUG ---
        System.out.println("=== Without fix ===");
        System.out.print("Enter roll number: ");
        int roll = sc.nextInt();
        // sc.nextLine() is NOT called here
        System.out.print("Enter name: ");
        String buggyName = sc.nextLine();  // Reads leftover \n
        System.out.println("Name: '" + buggyName + "'");  // Empty!

        // --- THE FIX ---
        System.out.println("\n=== With fix ===");
        System.out.print("Enter roll number: ");
        int roll2 = sc.nextInt();
        sc.nextLine(); // Consume the leftover newline
        System.out.print("Enter name: ");
        String fixedName = sc.nextLine();  // Now reads correctly
        System.out.println("Name: '" + fixedName + "'");

        sc.close();
    }
}
```

In the buggy section, after `nextInt()` reads 101, the newline character (\n) from pressing Enter remains in the buffer. The subsequent `nextLine()` immediately consumes that leftover \n and returns an empty string. In the fixed section, the extra `sc.nextLine()` after `nextInt()` eats the leftover \n, so the next `nextLine()` waits for actual user input.

**Output:**

```
=== Without fix ===
Enter roll number: 101
Enter name: Name: ''

=== With fix ===
Enter roll number: 102
Enter name: Kavitha Reddy
Name: 'Kavitha Reddy'
```

### Alternative Fix: Parse Everything with nextLine()

```java
import java.util.Scanner;

public class ParseLineApproach {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your age: ");
        int age = Integer.parseInt(sc.nextLine().trim());

        System.out.print("Enter your CGPA: ");
        double cgpa = Double.parseDouble(sc.nextLine().trim());

        System.out.print("Enter your name: ");
        String name = sc.nextLine();

        System.out.println(name + ", Age: " + age + ", CGPA: " + cgpa);
        sc.close();
    }
}
```

Instead of mixing `nextInt()` with `nextLine()`, read everything as a line and parse manually using `Integer.parseInt()` and `Double.parseDouble()`. The `trim()` call removes any leading/trailing whitespace. This approach completely avoids the leftover newline bug and is a common practice in competitive programming.

**Output:**

```
Enter your age: 21
Enter your CGPA: 8.75
Enter your name: Rohan Mehta
Rohan Mehta, Age: 21, CGPA: 8.75
```

### Input Validation with hasNextInt()

```java
import java.util.Scanner;

public class InputValidation {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a number: ");

        if (sc.hasNextInt()) {
            int num = sc.nextInt();
            System.out.println("You entered: " + num);
            System.out.println("Doubled: " + (num * 2));
        } else {
            System.out.println("Invalid input. Expected an integer.");
        }

        sc.close();
    }
}
```

`hasNextInt()` checks whether the next token in the input can be interpreted as an int, without consuming it. If the user types "abc", `hasNextInt()` returns false and we print an error message. If the user types "42", it returns true and we safely read the integer. This prevents `InputMismatchException` at runtime.

**Output:**

```
Enter a number: 25
You entered: 25
Doubled: 50
```

### try-with-resources for Automatic Closing

```java
import java.util.Scanner;

public class TryWithResources {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.print("Enter first number: ");
            int a = sc.nextInt();

            System.out.print("Enter second number: ");
            int b = sc.nextInt();

            System.out.println("Sum: " + (a + b));
        } // Scanner is automatically closed here

        System.out.println("Scanner has been closed automatically.");
    }
}
```

The try-with-resources statement (introduced in Java 7) declares the Scanner inside the try parentheses. When the try block exits (normally or due to an exception), `sc.close()` is called automatically. This is cleaner than manually calling `close()` and ensures resources are freed even if an exception occurs.

**Output:**

```
Enter first number: 10
Enter second number: 20
Sum: 30
Scanner has been closed automatically.
```

### BufferedReader for Faster Input

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class BufferedReaderDemo {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(
            new InputStreamReader(System.in)
        );

        System.out.print("Enter your name: ");
        String name = br.readLine();

        System.out.print("Enter two numbers (space-separated): ");
        String[] parts = br.readLine().split(" ");
        int a = Integer.parseInt(parts[0]);
        int b = Integer.parseInt(parts[1]);

        System.out.println("Hello " + name + "!");
        System.out.println(a + " + " + b + " = " + (a + b));

        br.close();
    }
}
```

BufferedReader reads input as raw strings, which makes it significantly faster than Scanner for large inputs. You must parse numbers manually using `Integer.parseInt()` or `Double.parseDouble()`. To read multiple values on one line, read the line and split it. The `throws IOException` is required because `readLine()` can throw a checked exception. BufferedReader is the go-to choice for competitive programming in Java.

**Output:**

```
Enter your name: Priya
Enter two numbers (space-separated): 15 25
Hello Priya!
15 + 25 = 40
```

## Common Mistakes

### Forgetting to Consume Newline After nextInt()

**Wrong:**

```
Scanner sc = new Scanner(System.in);
int age = sc.nextInt();
String name = sc.nextLine();  // Reads empty string!
System.out.println("Name: " + name);
```

No compilation error, but name is an empty string because nextLine() consumed the leftover \n from nextInt().

**Correct:**

```
Scanner sc = new Scanner(System.in);
int age = sc.nextInt();
sc.nextLine();  // Consume leftover newline
String name = sc.nextLine();
System.out.println("Name: " + name);
```

After `nextInt()`, `nextDouble()`, `nextFloat()`, or `next()`, the newline character (\n) from pressing Enter remains in the input buffer. The subsequent `nextLine()` reads that leftover \n and returns an empty string. Always add `sc.nextLine()` after a nextInt/nextDouble call if you plan to use `nextLine()` next.

### Using next() When You Need Full Line Input

**Wrong:**

```
Scanner sc = new Scanner(System.in);
System.out.print("Enter city: ");
String city = sc.next();  // User types: New Delhi
System.out.println("City: " + city);  // Prints: City: New
```

Only the first word is captured. 'Delhi' remains in the buffer.

**Correct:**

```
Scanner sc = new Scanner(System.in);
System.out.print("Enter city: ");
String city = sc.nextLine();  // Reads entire line
System.out.println("City: " + city);  // Prints: City: New Delhi
```

`next()` reads only one token (a word delimited by whitespace). For multi-word input like names, addresses, or sentences, always use `nextLine()`. This mistake is extremely common when reading full names (e.g., "Amit Kumar") because only "Amit" gets stored.

### Not Importing Scanner

**Wrong:**

```
public class Demo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);  // ERROR
    }
}
```

error: cannot find symbol
  symbol:   class Scanner

**Correct:**

```
import java.util.Scanner;  // Add this import

public class Demo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    }
}
```

Scanner is in the `java.util` package. Unlike `System.out` (which is in `java.lang` and auto-imported), Scanner must be explicitly imported. Forgetting the import causes a "cannot find symbol" compilation error.

### InputMismatchException from Wrong Type

**Wrong:**

```
Scanner sc = new Scanner(System.in);
System.out.print("Enter a number: ");
int num = sc.nextInt();  // User types: hello
```

Exception in thread "main" java.util.InputMismatchException

**Correct:**

```
Scanner sc = new Scanner(System.in);
System.out.print("Enter a number: ");
if (sc.hasNextInt()) {
    int num = sc.nextInt();
    System.out.println("Number: " + num);
} else {
    System.out.println("Invalid input. Please enter an integer.");
    sc.next();  // Consume the invalid token
}
```

If the user types text when `nextInt()` is called, Java throws an `InputMismatchException` because the input cannot be parsed as an integer. Use `hasNextInt()` to validate before reading, or wrap the call in a try-catch block to handle the error gracefully.

### Creating Multiple Scanners for System.in

**Wrong:**

```
Scanner sc1 = new Scanner(System.in);
int x = sc1.nextInt();
sc1.close();  // Closes System.in!

Scanner sc2 = new Scanner(System.in);  // System.in is already closed
int y = sc2.nextInt();  // ERROR at runtime
```

java.util.NoSuchElementException: No line found (because System.in was closed)

**Correct:**

```
Scanner sc = new Scanner(System.in);  // One Scanner for the whole program
int x = sc.nextInt();
int y = sc.nextInt();
sc.close();  // Close once at the end
```

Closing a Scanner that wraps `System.in` also closes the underlying `System.in` stream. Once closed, `System.in` cannot be reopened. Creating a second Scanner for `System.in` will fail. The solution is to use a single Scanner object throughout the program and close it only at the very end.

## Summary

- The Scanner class (java.util.Scanner) is the standard way to read user input from the console in Java. It must be imported explicitly.
- Create a Scanner with: Scanner sc = new Scanner(System.in); where System.in represents keyboard input.
- Use nextInt(), nextDouble(), nextLong(), nextFloat(), nextBoolean() to read specific primitive types.
- next() reads a single token (word, no spaces). nextLine() reads an entire line (including spaces up to the newline).
- The most common Scanner bug: after nextInt() or nextDouble(), the leftover newline (\n) causes the subsequent nextLine() to return an empty string. Fix it by adding an extra sc.nextLine() call to consume the leftover newline.
- An alternative fix: read all input with nextLine() and parse manually using Integer.parseInt() or Double.parseDouble().
- Use hasNextInt(), hasNextDouble(), etc. to validate input before reading. This prevents InputMismatchException.
- Close the Scanner with sc.close() when done. But be aware: closing a Scanner on System.in also closes System.in permanently.
- try-with-resources (Java 7+) automatically closes the Scanner when the block exits: try (Scanner sc = new Scanner(System.in)) { ... }
- BufferedReader is faster than Scanner for reading large inputs. It reads entire lines as strings, and you parse numbers manually. It is preferred in competitive programming.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/taking-input-in-java/*
*Practice questions: https://learn.modernagecoders.com/resources/java/taking-input-in-java/practice/*
