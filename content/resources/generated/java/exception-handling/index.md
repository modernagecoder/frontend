---
title: "Exception Handling in Java - try-catch, throw, throws, Custom Exceptions | Modern Age Coders"
description: "Master Java exception handling including try-catch-finally, checked vs unchecked exceptions, throw and throws, multi-catch, try-with-resources, custom exceptions, and exception propagation. Includes 49+ practice questions for placement interviews."
slug: exception-handling
canonical: https://learn.modernagecoders.com/resources/java/exception-handling
category: "Java"
keywords: ["java exception handling", "try catch java", "checked unchecked exceptions java", "custom exception java", "java throw throws", "try with resources java", "java finally block", "java exception hierarchy", "java exception handling interview questions"]
---
# Exception Handling in Java

**Difficulty:** Intermediate  
**Reading time:** 45 min  
**Chapter:** 18  
**Practice questions:** 49

## What Is Exception Handling in Java?

An **exception** is an event that disrupts the normal flow of a program during execution. When something goes wrong (dividing by zero, accessing a null reference, reading a missing file), Java creates an exception object and "throws" it. If unhandled, the program crashes.

**Exception handling** is the mechanism to detect, catch, and recover from these exceptional situations gracefully, without crashing.

```
// Without exception handling: program crashes
int result = 10 / 0;  // ArithmeticException: / by zero

// With exception handling: program continues
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero: " + e.getMessage());
}
System.out.println("Program continues normally");
```

### The Throwable Hierarchy

All exceptions and errors in Java inherit from `Throwable`:

```
java.lang.Object
  └── java.lang.Throwable
        ├── java.lang.Error            (serious, not recoverable)
        │     ├── OutOfMemoryError
        │     ├── StackOverflowError
        │     └── VirtualMachineError
        └── java.lang.Exception        (recoverable)
              ├── IOException           (checked)
              ├── SQLException          (checked)
              ├── ClassNotFoundException (checked)
              └── RuntimeException      (unchecked)
                    ├── NullPointerException
                    ├── ArithmeticException
                    ├── ArrayIndexOutOfBoundsException
                    ├── ClassCastException
                    └── NumberFormatException
```

**Error**: Serious problems that applications should not try to handle (JVM running out of memory, stack overflow). **Exception**: Problems that applications can and should handle.

## Why Does Exception Handling Matter?

Exception handling is not optional in production Java code. Every real-world application encounters exceptional situations, and how you handle them determines the reliability and user experience of your software.

### 1. Preventing Crashes

Without exception handling, a single null pointer or file-not-found condition crashes the entire application. When Arjun writes a web server, one bad request should not bring down the whole server. Exception handling isolates failures.

### 2. Separating Error Handling from Business Logic

Without exceptions, every method would return error codes, and the caller would need to check them constantly. Exceptions separate the "happy path" (normal logic) from the "error path" (error handling), making both cleaner.

### 3. Meaningful Error Messages

Exceptions carry information: the type of error, a message, and a stack trace showing exactly where the error occurred. This is invaluable for debugging. When Kavya sees `NullPointerException at UserService.java:42`, she knows exactly where to look.

### 4. Resource Management

`try-with-resources` ensures that files, database connections, and network sockets are properly closed even when exceptions occur. Without it, resource leaks are a common source of bugs in long-running applications.

### 5. Checked Exceptions Enforce Handling

Java's checked exception mechanism forces developers to acknowledge and handle potential failures at compile time. When Ravi calls `new FileInputStream("data.txt")`, the compiler forces him to handle `FileNotFoundException`. This catches many bugs before the code even runs.

### 6. Interview Importance

Exception handling questions are standard in every Java interview. Checked vs unchecked, try-with-resources, exception propagation, and custom exceptions are all heavily tested in campus placements.

## Detailed Explanation

### 1. try-catch Block

The `try` block contains code that might throw an exception. The `catch` block handles it:

```
try {
    int[] arr = {1, 2, 3};
    System.out.println(arr[5]);  // ArrayIndexOutOfBoundsException
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Index out of range: " + e.getMessage());
}
// Output: Index out of range: Index 5 out of bounds for length 3
```

If no exception occurs, the catch block is skipped. If an exception occurs, execution jumps to the matching catch block.

### 2. Multiple catch Blocks

You can have multiple catch blocks for different exception types. They are checked top to bottom:

```
try {
    String s = null;
    System.out.println(s.length());  // NullPointerException
} catch (NullPointerException e) {
    System.out.println("Null reference: " + e.getMessage());
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Array index error: " + e.getMessage());
} catch (Exception e) {
    System.out.println("General error: " + e.getMessage());
}
```

Important: Catch more specific exceptions first. Putting `Exception` (the parent) first would catch everything, making the more specific blocks unreachable (compilation error).

### 3. Multi-catch (Java 7)

Java 7 introduced multi-catch to handle multiple unrelated exceptions in one catch block:

```
try {
    // Some code that might throw multiple exceptions
    int result = Integer.parseInt("abc");  // NumberFormatException
} catch (NumberFormatException | ArithmeticException e) {
    System.out.println("Error: " + e.getMessage());
}
```

The exception types in a multi-catch must not have a parent-child relationship (e.g., you cannot write `catch (Exception | IOException e)` because `IOException` is a subclass of `Exception`).

### 4. The finally Block

`finally` always executes, whether an exception occurred or not. It is used for cleanup code:

```
try {
    System.out.println("Try block");
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Catch block");
} finally {
    System.out.println("Finally block (always runs)");
}
// Output:
// Try block
// Catch block
// Finally block (always runs)
```

`finally` runs even if there is a `return` statement in the try or catch block. The only exceptions: `System.exit()` or JVM crash.

### 5. try-with-resources (Java 7)

Resources implementing `AutoCloseable` are automatically closed when the try block exits:

```
// Old way (verbose)
BufferedReader reader = null;
try {
    reader = new BufferedReader(new FileReader("data.txt"));
    String line = reader.readLine();
    System.out.println(line);
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
} finally {
    if (reader != null) {
        try { reader.close(); } catch (IOException e) { }
    }
}

// New way (try-with-resources)
try (BufferedReader reader = new BufferedReader(new FileReader("data.txt"))) {
    String line = reader.readLine();
    System.out.println(line);
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}
// reader is automatically closed, even if an exception occurs
```

### 6. Checked vs Unchecked Exceptions

**Checked exceptions** must be either caught or declared with `throws`. The compiler enforces this. They represent recoverable conditions that the programmer should anticipate.

- `IOException`, `FileNotFoundException`, `SQLException`, `ClassNotFoundException`

**Unchecked exceptions** (subclasses of `RuntimeException`) do not need to be caught or declared. They typically represent programming errors.

- `NullPointerException`, `ArithmeticException`, `ArrayIndexOutOfBoundsException`, `ClassCastException`, `NumberFormatException`, `IllegalArgumentException`

```
// Checked: compiler forces handling
try {
    FileInputStream fis = new FileInputStream("data.txt");  // Checked
} catch (FileNotFoundException e) {
    System.out.println("File not found");
}

// Unchecked: compiler does NOT force handling
int x = Integer.parseInt("abc");  // NumberFormatException (unchecked)
// This compiles even without try-catch
```

### 7. throw Keyword

`throw` explicitly throws an exception object:

```
void setAge(int age) {
    if (age < 0 || age > 150) {
        throw new IllegalArgumentException("Invalid age: " + age);
    }
    this.age = age;
}
```

### 8. throws Keyword

`throws` declares that a method might throw certain exceptions, pushing the handling responsibility to the caller:

```
void readFile(String path) throws IOException {
    BufferedReader reader = new BufferedReader(new FileReader(path));
    System.out.println(reader.readLine());
    reader.close();
}

// Caller must handle or declare
try {
    readFile("data.txt");
} catch (IOException e) {
    System.out.println("Could not read file: " + e.getMessage());
}
```

### 9. Custom Exceptions

Create custom exceptions by extending `Exception` (checked) or `RuntimeException` (unchecked):

```
// Checked custom exception
class InsufficientFundsException extends Exception {
    private double deficit;
    
    InsufficientFundsException(double deficit) {
        super("Insufficient funds. Deficit: " + deficit);
        this.deficit = deficit;
    }
    
    double getDeficit() { return deficit; }
}

// Usage
void withdraw(double amount) throws InsufficientFundsException {
    if (amount > balance) {
        throw new InsufficientFundsException(amount - balance);
    }
    balance -= amount;
}
```

### 10. Exception Propagation

If a method does not handle an exception, it propagates up the call stack to the calling method:

```
void methodC() {
    int result = 10 / 0;  // ArithmeticException thrown here
}

void methodB() {
    methodC();  // Exception propagates here (not caught)
}

void methodA() {
    try {
        methodB();  // Exception caught here
    } catch (ArithmeticException e) {
        System.out.println("Caught in methodA: " + e.getMessage());
    }
}
```

The exception travels from methodC -> methodB -> methodA until it finds a matching catch block. If no method catches it, the JVM terminates the program and prints the stack trace.

### 11. Common Exceptions

ExceptionWhen It OccursNullPointerExceptionCalling a method or accessing a field on a null referenceArrayIndexOutOfBoundsExceptionAccessing an array with an invalid indexArithmeticExceptionDivision by zero (integer)ClassCastExceptionInvalid type castingNumberFormatExceptionParsing a non-numeric string to a numberStackOverflowErrorInfinite recursionIOExceptionI/O operation failure (file, network)FileNotFoundExceptionSpecified file does not exist

## Code Examples

### Basic try-catch with Multiple Exceptions

```java
public class Main {
    public static void main(String[] args) {
        // Example 1: ArithmeticException
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Math error: " + e.getMessage());
        }

        // Example 2: NullPointerException
        try {
            String s = null;
            System.out.println(s.length());
        } catch (NullPointerException e) {
            System.out.println("Null error: " + e.getMessage());
        }

        // Example 3: ArrayIndexOutOfBoundsException
        try {
            int[] arr = {1, 2, 3};
            System.out.println(arr[10]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array error: " + e.getMessage());
        }

        // Example 4: NumberFormatException
        try {
            int num = Integer.parseInt("abc");
        } catch (NumberFormatException e) {
            System.out.println("Parse error: " + e.getMessage());
        }

        System.out.println("Program continues normally");
    }
}
```

Each try-catch block handles a specific exception type. The program does not crash on any exception; it prints an error message and continues. The `getMessage()` method returns the exception's detail message.

**Output:**

```
Math error: / by zero
Null error: Cannot invoke "String.length()" because "s" is null
Array error: Index 10 out of bounds for length 3
Parse error: For input string: "abc"
Program continues normally
```

### Multiple catch Blocks and finally

```java
public class Main {
    static void process(String input) {
        try {
            System.out.println("Processing: " + input);
            int num = Integer.parseInt(input);
            int result = 100 / num;
            System.out.println("Result: " + result);
        } catch (NumberFormatException e) {
            System.out.println("Not a valid number: " + input);
        } catch (ArithmeticException e) {
            System.out.println("Division by zero");
        } finally {
            System.out.println("Cleanup done for: " + input);
        }
        System.out.println();
    }

    public static void main(String[] args) {
        process("10");    // Normal
        process("abc");   // NumberFormatException
        process("0");     // ArithmeticException
    }
}
```

Multiple catch blocks handle different exception types. The `finally` block always runs, regardless of whether an exception occurred. The order matters: catch more specific exceptions first.

**Output:**

```
Processing: 10
Result: 10
Cleanup done for: 10

Processing: abc
Not a valid number: abc
Cleanup done for: abc

Processing: 0
Division by zero
Cleanup done for: 0
```

### try-with-resources (AutoCloseable)

```java
class DatabaseConnection implements AutoCloseable {
    String name;

    DatabaseConnection(String name) {
        this.name = name;
        System.out.println(name + ": Connection opened");
    }

    void query(String sql) {
        System.out.println(name + ": Executing " + sql);
    }

    @Override
    public void close() {
        System.out.println(name + ": Connection closed");
    }
}

public class Main {
    public static void main(String[] args) {
        // Single resource
        try (DatabaseConnection db = new DatabaseConnection("MySQL")) {
            db.query("SELECT * FROM users");
        }

        System.out.println();

        // Multiple resources
        try (
            DatabaseConnection db1 = new DatabaseConnection("Postgres");
            DatabaseConnection db2 = new DatabaseConnection("Redis")
        ) {
            db1.query("SELECT * FROM orders");
            db2.query("GET session:123");
        }

        System.out.println();

        // Resource closed even on exception
        try (DatabaseConnection db = new DatabaseConnection("MongoDB")) {
            db.query("db.users.find()");
            throw new RuntimeException("Simulated error");
        } catch (RuntimeException e) {
            System.out.println("Caught: " + e.getMessage());
        }
    }
}
```

Objects implementing `AutoCloseable` are automatically closed when the try block finishes. Resources are closed in reverse order of creation. Closing happens even when exceptions occur, eliminating resource leaks.

**Output:**

```
MySQL: Connection opened
MySQL: Executing SELECT * FROM users
MySQL: Connection closed

Postgres: Connection opened
Redis: Connection opened
Postgres: Executing SELECT * FROM orders
Redis: Executing GET session:123
Redis: Connection closed
Postgres: Connection closed

MongoDB: Connection opened
MongoDB: Executing db.users.find()
MongoDB: Connection closed
Caught: Simulated error
```

### throw and throws Keywords

```java
class Validator {
    static void validateAge(int age) {
        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative: " + age);
        }
        if (age > 150) {
            throw new IllegalArgumentException("Age unrealistic: " + age);
        }
        System.out.println("Valid age: " + age);
    }

    static void validateEmail(String email) throws Exception {
        if (email == null || email.isEmpty()) {
            throw new Exception("Email cannot be empty");
        }
        if (!email.contains("@")) {
            throw new Exception("Invalid email format: " + email);
        }
        System.out.println("Valid email: " + email);
    }
}

public class Main {
    public static void main(String[] args) {
        // throw with unchecked exception (no try-catch required by compiler)
        try {
            Validator.validateAge(25);
            Validator.validateAge(-5);
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }

        System.out.println();

        // throws with checked exception (must handle or declare)
        try {
            Validator.validateEmail("arjun@mail.com");
            Validator.validateEmail("invalid-email");
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

`throw` creates and throws an exception object. `throws` in the method signature declares that the method might throw a checked exception, forcing the caller to handle it. Unchecked exceptions (`IllegalArgumentException`) do not require `throws`.

**Output:**

```
Valid age: 25
Error: Age cannot be negative: -5

Valid email: arjun@mail.com
Error: Invalid email format: invalid-email
```

### Custom Exceptions

```java
class InsufficientBalanceException extends Exception {
    private double deficit;

    InsufficientBalanceException(double deficit) {
        super("Insufficient balance. Need " + deficit + " more.");
        this.deficit = deficit;
    }

    double getDeficit() { return deficit; }
}

class BankAccount {
    String holder;
    double balance;

    BankAccount(String holder, double balance) {
        this.holder = holder;
        this.balance = balance;
    }

    void withdraw(double amount) throws InsufficientBalanceException {
        if (amount > balance) {
            throw new InsufficientBalanceException(amount - balance);
        }
        balance -= amount;
        System.out.println(holder + " withdrew " + amount + ". Balance: " + balance);
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("Arjun", 5000);

        try {
            account.withdraw(2000);
            account.withdraw(4000);  // This will fail
        } catch (InsufficientBalanceException e) {
            System.out.println("Transaction failed: " + e.getMessage());
            System.out.println("Deficit: " + e.getDeficit());
        }
    }
}
```

`InsufficientBalanceException` extends `Exception` (checked). It carries extra data (`deficit`). The `withdraw` method throws it when the balance is insufficient. The caller must handle it with try-catch or declare `throws`.

**Output:**

```
Arjun withdrew 2000.0. Balance: 3000.0
Transaction failed: Insufficient balance. Need 1000.0 more.
Deficit: 1000.0
```

### Exception Propagation

```java
public class Main {
    static void methodC() {
        System.out.println("Entering methodC");
        int result = 10 / 0;  // Exception thrown here
        System.out.println("Exiting methodC");  // Never reached
    }

    static void methodB() {
        System.out.println("Entering methodB");
        methodC();  // Exception propagates through here
        System.out.println("Exiting methodB");  // Never reached
    }

    static void methodA() {
        System.out.println("Entering methodA");
        try {
            methodB();  // Exception caught here
        } catch (ArithmeticException e) {
            System.out.println("Caught in methodA: " + e.getMessage());
        }
        System.out.println("Exiting methodA");
    }

    public static void main(String[] args) {
        methodA();
        System.out.println("Program completed");
    }
}
```

The exception thrown in `methodC` propagates through `methodB` (which does not catch it) to `methodA` (which does). Code after the exception in `methodC` and `methodB` is never reached. `methodA` catches it and continues.

**Output:**

```
Entering methodA
Entering methodB
Entering methodC
Caught in methodA: / by zero
Exiting methodA
Program completed
```

### Multi-catch and Checked vs Unchecked

```java
import java.io.IOException;

public class Main {
    // Method with checked exception
    static void riskyIO() throws IOException {
        throw new IOException("Disk read failure");
    }

    public static void main(String[] args) {
        // Multi-catch (Java 7+)
        String[] inputs = {"10", "abc", "0"};
        for (String input : inputs) {
            try {
                int num = Integer.parseInt(input);
                int result = 100 / num;
                System.out.println(input + " -> " + result);
            } catch (NumberFormatException | ArithmeticException e) {
                System.out.println(input + " -> Error: " + e.getClass().getSimpleName() + ": " + e.getMessage());
            }
        }

        System.out.println();

        // Checked exception must be caught or declared
        try {
            riskyIO();
        } catch (IOException e) {
            System.out.println("IO Error: " + e.getMessage());
        }
    }
}
```

Multi-catch uses `|` to handle multiple exception types in one block. The checked `IOException` must be caught (or the method must declare `throws IOException`). `getClass().getSimpleName()` shows the exception class name.

**Output:**

```
10 -> 10
abc -> Error: NumberFormatException: For input string: "abc"
0 -> Error: ArithmeticException: / by zero

IO Error: Disk read failure
```

## Common Mistakes

### Catching Exception Before Specific Exceptions

**Wrong:**

```
try {
    int[] arr = new int[3];
    arr[5] = 10;
} catch (Exception e) {
    System.out.println("General error");
} catch (ArrayIndexOutOfBoundsException e) {  // Unreachable!
    System.out.println("Array error");
}
```

Compilation error: exception ArrayIndexOutOfBoundsException has already been caught.

**Correct:**

```
try {
    int[] arr = new int[3];
    arr[5] = 10;
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Array error");
} catch (Exception e) {
    System.out.println("General error");
}
```

Catch blocks are checked top to bottom. Since `Exception` is the parent of `ArrayIndexOutOfBoundsException`, it catches everything, making the specific block unreachable. Always put specific exceptions before general ones.

### Ignoring the Exception (Empty catch Block)

**Wrong:**

```
try {
    int result = Integer.parseInt("abc");
} catch (NumberFormatException e) {
    // Empty catch block - exception is silently swallowed
}
System.out.println("Everything is fine");  // Is it though?
```

No compilation error, but the exception is silently ignored. This hides bugs and makes debugging extremely difficult.

**Correct:**

```
try {
    int result = Integer.parseInt("abc");
} catch (NumberFormatException e) {
    System.out.println("Invalid number format: " + e.getMessage());
    // Or: log the error, rethrow, provide a default value, etc.
}
```

Swallowing exceptions silently is one of the worst practices in Java. At minimum, log the exception or print a message. Empty catch blocks hide failures and make debugging a nightmare.

### Confusing throw and throws

**Wrong:**

```
// Incorrect: using throw in method signature
void readFile(String path) throw IOException {
    // ...
}

// Incorrect: using throws inside method body
void validate(int age) {
    if (age < 0) {
        throws new IllegalArgumentException("Negative age");
    }
}
```

Compilation error in both cases. Wrong keyword used.

**Correct:**

```
// throws: in method signature (declares potential exceptions)
void readFile(String path) throws IOException {
    // ...
}

// throw: inside method body (creates and throws an exception)
void validate(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("Negative age");
    }
}
```

`throw` (no 's') is used inside a method to throw an exception object. `throws` (with 's') is used in the method signature to declare which exceptions the method might throw. They serve different purposes.

### Not Handling Checked Exceptions

**Wrong:**

```
import java.io.FileInputStream;

public class Main {
    public static void main(String[] args) {
        FileInputStream fis = new FileInputStream("data.txt");
        // Compilation error: unhandled exception FileNotFoundException
    }
}
```

Compilation error: unreported exception FileNotFoundException; must be caught or declared to be thrown.

**Correct:**

```
import java.io.FileInputStream;
import java.io.FileNotFoundException;

public class Main {
    public static void main(String[] args) {
        try {
            FileInputStream fis = new FileInputStream("data.txt");
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        }
    }
}
```

Checked exceptions MUST be handled (try-catch) or declared (throws). The compiler enforces this. `FileNotFoundException` is a checked exception because file absence is a predictable condition the programmer should anticipate.

### Relying on finally for Return Values

**Wrong:**

```
static int getValue() {
    try {
        return 1;
    } finally {
        return 2;  // This overrides the try's return!
    }
}
// getValue() returns 2, not 1. Very confusing!
```

No compilation error, but the finally block's return overrides the try block's return. This is counterintuitive and bug-prone.

**Correct:**

```
static int getValue() {
    int result;
    try {
        result = 1;
    } finally {
        // Cleanup code here, but do NOT return from finally
        System.out.println("Cleanup done");
    }
    return result;
}
```

Never use `return` inside a `finally` block. It overrides any return value from the try or catch block, making the behavior confusing and hard to debug. Use finally only for cleanup (closing resources, releasing locks).

## Summary

- An exception is an event that disrupts normal program flow. Exception handling uses try-catch to detect and recover from errors gracefully.
- The Throwable hierarchy: Throwable is the root. Error (serious, non-recoverable) and Exception (recoverable) are the two branches. RuntimeException is the unchecked exception branch.
- Checked exceptions (IOException, SQLException) must be caught or declared with throws. The compiler enforces this. They represent anticipated, recoverable conditions.
- Unchecked exceptions (NullPointerException, ArithmeticException) extend RuntimeException. The compiler does not force handling. They typically represent programming errors.
- Multiple catch blocks handle different exception types. More specific exceptions must come before more general ones. Multi-catch (Java 7) uses | to combine types.
- The finally block always executes (whether or not an exception occurred). Use it for cleanup. Do not put return statements in finally.
- try-with-resources (Java 7) automatically closes AutoCloseable resources when the try block exits, even if an exception occurs. Prefer this over manual finally cleanup.
- throw creates and throws an exception object. throws (in method signature) declares that a method might throw checked exceptions, forcing the caller to handle them.
- Custom exceptions extend Exception (checked) or RuntimeException (unchecked). Add extra fields and methods for domain-specific error information.
- Exception propagation: if a method does not catch an exception, it travels up the call stack until a matching catch block is found or the JVM terminates.
- Common exceptions: NullPointerException (null reference), ArrayIndexOutOfBoundsException (bad index), ClassCastException (invalid cast), NumberFormatException (bad parse), IOException (I/O failure).

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/exception-handling/*
*Practice questions: https://learn.modernagecoders.com/resources/java/exception-handling/practice/*
