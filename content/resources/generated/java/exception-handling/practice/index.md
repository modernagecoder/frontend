---
title: "Practice: Exception Handling in Java"
description: "49 practice problems for Exception Handling in Java in Java"
slug: exception-handling-practice
canonical: https://learn.modernagecoders.com/resources/java/exception-handling/practice
category: "Java"
---
# Practice: Exception Handling in Java

**Total questions:** 49

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
public class Main {
    public static void main(String[] args) {
        try {
            System.out.println("Before");
            int result = 10 / 0;
            System.out.println("After");
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }
        System.out.println("End");
    }
}
```

*Hint:* The line after the exception is not executed. Control jumps to the catch block.

**Answer:** `Before`
`Error: / by zero`
`End`

"Before" prints. Then `10 / 0` throws `ArithmeticException`. "After" is skipped. The catch block prints the error message. "End" prints because execution continues after the try-catch.

### Q2. [Easy] What is the output?

```
public class Main {
    public static void main(String[] args) {
        try {
            System.out.println("Try");
        } catch (Exception e) {
            System.out.println("Catch");
        } finally {
            System.out.println("Finally");
        }
    }
}
```

*Hint:* No exception is thrown. Does the finally block still execute?

**Answer:** `Try`
`Finally`

No exception occurs, so the catch block is skipped. The finally block ALWAYS executes, regardless of whether an exception occurred.

### Q3. [Easy] What is the output?

```
public class Main {
    public static void main(String[] args) {
        try {
            String s = null;
            System.out.println(s.length());
        } catch (NullPointerException e) {
            System.out.println("Caught NPE");
        }
    }
}
```

*Hint:* Calling a method on null throws NullPointerException.

**Answer:** `Caught NPE`

Calling `length()` on a null reference throws `NullPointerException`. The catch block handles it and prints "Caught NPE".

### Q4. [Easy] What is the output?

```
public class Main {
    public static void main(String[] args) {
        try {
            int num = Integer.parseInt("123");
            System.out.println("Parsed: " + num);
        } catch (NumberFormatException e) {
            System.out.println("Not a number");
        }
    }
}
```

*Hint:* "123" is a valid integer string. Does an exception occur?

**Answer:** `Parsed: 123`

"123" is a valid integer. No exception occurs, so the catch block is skipped. The parsed value 123 is printed.

### Q5. [Easy] What is the output?

```
public class Main {
    public static void main(String[] args) {
        try {
            int[] arr = new int[3];
            arr[0] = 10;
            arr[1] = 20;
            arr[2] = 30;
            System.out.println(arr[1]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Out of bounds");
        }
    }
}
```

*Hint:* All array indices (0, 1, 2) are valid for an array of size 3.

**Answer:** `20`

Array size is 3 with valid indices 0-2. All operations are within bounds. No exception occurs, so the catch block is skipped.

### Q6. [Medium] What is the output?

```
public class Main {
    public static void main(String[] args) {
        try {
            System.out.println("A");
            int x = 10 / 0;
            System.out.println("B");
        } catch (ArithmeticException e) {
            System.out.println("C");
        } finally {
            System.out.println("D");
        }
        System.out.println("E");
    }
}
```

*Hint:* Trace the flow: try -> exception -> catch -> finally -> after.

**Answer:** `A`
`C`
`D`
`E`

"A" prints. Exception occurs, skipping "B". Catch prints "C". Finally always prints "D". Execution continues after try-catch-finally with "E".

### Q7. [Medium] What is the output?

```
public class Main {
    static int divide(int a, int b) {
        return a / b;
    }
    public static void main(String[] args) {
        try {
            System.out.println(divide(10, 2));
            System.out.println(divide(10, 0));
            System.out.println(divide(20, 4));
        } catch (ArithmeticException e) {
            System.out.println("Division error");
        }
        System.out.println("Done");
    }
}
```

*Hint:* The second call throws. Does the third call execute?

**Answer:** `5`
`Division error`
`Done`

`divide(10, 2)` returns 5 (printed). `divide(10, 0)` throws `ArithmeticException`. Control jumps to catch, skipping `divide(20, 4)`. "Done" prints after the try-catch.

### Q8. [Medium] What is the output?

```
public class Main {
    public static void main(String[] args) {
        for (String s : new String[]{"10", "abc", "20"}) {
            try {
                int n = Integer.parseInt(s);
                System.out.println("Parsed: " + n);
            } catch (NumberFormatException e) {
                System.out.println("Invalid: " + s);
            }
        }
    }
}
```

*Hint:* The try-catch is inside the loop. Each iteration is independent.

**Answer:** `Parsed: 10`
`Invalid: abc`
`Parsed: 20`

Each iteration has its own try-catch. "10" parses successfully. "abc" throws `NumberFormatException`, caught and handled. "20" parses successfully. The loop continues after each catch.

### Q9. [Medium] What is the output?

```
public class Main {
    static int getValue() {
        try {
            System.out.println("try");
            return 1;
        } catch (Exception e) {
            System.out.println("catch");
            return 2;
        } finally {
            System.out.println("finally");
        }
    }
    public static void main(String[] args) {
        System.out.println("Value: " + getValue());
    }
}
```

*Hint:* finally executes even when there is a return in try.

**Answer:** `try`
`finally`
`Value: 1`

"try" prints. The return value 1 is prepared. Before returning, "finally" executes. No exception occurred, so catch is skipped. The method returns 1.

### Q10. [Medium] What is the output?

```
class CustomException extends Exception {
    CustomException(String msg) { super(msg); }
}
public class Main {
    static void check(int x) throws CustomException {
        if (x < 0) throw new CustomException("Negative: " + x);
        System.out.println("Value: " + x);
    }
    public static void main(String[] args) {
        try {
            check(5);
            check(-3);
            check(10);
        } catch (CustomException e) {
            System.out.println("Caught: " + e.getMessage());
        }
    }
}
```

*Hint:* check(5) works. check(-3) throws. Does check(10) run?

**Answer:** `Value: 5`
`Caught: Negative: -3`

`check(5)` prints "Value: 5". `check(-3)` throws `CustomException`. Control jumps to catch, skipping `check(10)`.

### Q11. [Hard] What is the output?

```
public class Main {
    static void methodC() {
        System.out.println("C start");
        throw new RuntimeException("Error in C");
    }
    static void methodB() {
        System.out.println("B start");
        methodC();
        System.out.println("B end");
    }
    static void methodA() {
        System.out.println("A start");
        try {
            methodB();
        } catch (RuntimeException e) {
            System.out.println("Caught: " + e.getMessage());
        }
        System.out.println("A end");
    }
    public static void main(String[] args) {
        methodA();
    }
}
```

*Hint:* The exception propagates from C through B to A where it is caught.

**Answer:** `A start`
`B start`
`C start`
`Caught: Error in C`
`A end`

"A start" prints. methodB is called ("B start"). methodC is called ("C start") and throws. "B end" is skipped (exception propagates). methodA catches it. "A end" prints.

### Q12. [Hard] What is the output?

```
public class Main {
    public static void main(String[] args) {
        try {
            try {
                throw new RuntimeException("inner");
            } catch (RuntimeException e) {
                System.out.println("Inner catch: " + e.getMessage());
                throw new RuntimeException("rethrown");
            } finally {
                System.out.println("Inner finally");
            }
        } catch (RuntimeException e) {
            System.out.println("Outer catch: " + e.getMessage());
        } finally {
            System.out.println("Outer finally");
        }
    }
}
```

*Hint:* The inner catch rethrows a new exception. Inner finally runs first, then outer catch.

**Answer:** `Inner catch: inner`
`Inner finally`
`Outer catch: rethrown`
`Outer finally`

Inner try throws "inner". Inner catch handles it and rethrows "rethrown". Inner finally runs before the rethrown exception propagates. Outer catch catches "rethrown". Outer finally always runs.

### Q13. [Hard] What is the output?

```
class Resource implements AutoCloseable {
    String name;
    Resource(String name) {
        this.name = name;
        System.out.println(name + " opened");
    }
    public void close() {
        System.out.println(name + " closed");
    }
}
public class Main {
    public static void main(String[] args) {
        try (Resource r1 = new Resource("A");
             Resource r2 = new Resource("B")) {
            System.out.println("Using resources");
            throw new RuntimeException("Failure");
        } catch (RuntimeException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

*Hint:* Resources are closed in reverse order before the catch block runs.

**Answer:** `A opened`
`B opened`
`Using resources`
`B closed`
`A closed`
`Error: Failure`

Resources are created in order (A, B). "Using resources" prints. Exception is thrown. Resources are closed in reverse order (B first, then A). Then the catch block handles the exception.

### Q14. [Hard] What is the output?

```
public class Main {
    static String test() {
        String result = "initial";
        try {
            result = "try";
            return result;
        } finally {
            result = "finally";
        }
    }
    public static void main(String[] args) {
        System.out.println(test());
    }
}
```

*Hint:* The return value is evaluated before finally runs. Does changing result in finally affect the returned value?

**Answer:** `try`

The return value "try" is computed and saved before the finally block runs. The finally block changes the local variable `result` to "finally", but the return value was already determined. The method returns "try". Note: this is different from returning a mutable object, where changes in finally would be visible.

### Q15. [Hard] What is the output?

```
public class Main {
    public static void main(String[] args) {
        try {
            System.out.println("try");
            System.exit(0);
        } finally {
            System.out.println("finally");
        }
    }
}
```

*Hint:* System.exit() terminates the JVM. What happens to finally?

**Answer:** `try`

`System.exit(0)` terminates the JVM immediately. The finally block does NOT execute. This is one of the rare cases where finally is skipped.

### Q16. [Hard] What is the output?

```
public class Main {
    public static void main(String[] args) {
        try {
            throw new RuntimeException("first");
        } catch (RuntimeException e) {
            System.out.println(e.getMessage());
            throw new RuntimeException("second");
        } finally {
            System.out.println("finally");
            throw new RuntimeException("third");
        }
    }
}
```

*Hint:* An exception in finally replaces the exception from catch.

**Answer:** `first`
`finally`
Then the program terminates with `RuntimeException: third`

"first" exception is caught, its message prints. "second" exception is thrown from catch. Before it propagates, finally runs, printing "finally" and throwing "third". The "third" exception replaces "second" (the "second" is lost). This is why throwing from finally is discouraged.

## Mixed Questions

### Q1. [Easy] What is the difference between checked and unchecked exceptions?

*Hint:* Think about what the compiler requires.

**Answer:** Checked exceptions (subclasses of Exception, excluding RuntimeException) must be caught or declared with `throws`. The compiler enforces this. Unchecked exceptions (subclasses of RuntimeException) do not require handling. Checked exceptions represent recoverable conditions (file not found); unchecked exceptions represent programming errors (null pointer).

Examples: IOException (checked, must handle), NullPointerException (unchecked, compiler does not force handling). Use checked exceptions for conditions the caller can reasonably recover from.

### Q2. [Easy] What is the difference between `throw` and `throws`?

*Hint:* One is used inside the method body, the other in the method signature.

**Answer:** `throw` is used inside a method to explicitly throw an exception object: `throw new Exception("error")`. `throws` is used in the method signature to declare that the method might throw certain checked exceptions: `void read() throws IOException`.

`throw` actually creates and throws the exception. `throws` is a contract telling callers that they must handle or propagate the listed exceptions.

### Q3. [Easy] What is the output?

```
public class Main {
    public static void main(String[] args) {
        try {
            System.out.println(1);
            System.out.println(2);
            System.out.println(3);
        } catch (Exception e) {
            System.out.println("Error");
        }
        System.out.println(4);
    }
}
```

*Hint:* No exception is thrown. What happens?

**Answer:** `1`
`2`
`3`
`4`

No exception occurs. The try block runs completely. The catch block is skipped. Execution continues with printing 4.

### Q4. [Medium] What is the output?

```
public class Main {
    public static void main(String[] args) {
        int x = 0;
        try {
            x = 1;
            int[] arr = null;
            x = arr.length;
            x = 2;
        } catch (NullPointerException e) {
            x = 3;
        } finally {
            x = 4;
        }
        System.out.println(x);
    }
}
```

*Hint:* Trace the value of x through try, catch, and finally.

**Answer:** `4`

x starts at 0. In try: x becomes 1. Then `arr.length` throws NPE (x stays 1, never becomes 2). In catch: x becomes 3. In finally: x becomes 4. Finally always runs last.

### Q5. [Medium] What is exception propagation?

*Hint:* Think about what happens when a method does not catch an exception.

**Answer:** Exception propagation is the process where an unhandled exception moves up the call stack from the method where it was thrown, through each calling method, until it finds a matching catch block. If no method catches it, the JVM prints the stack trace and terminates the program.

If methodA calls methodB which calls methodC, and methodC throws an uncaught exception, it propagates to methodB. If methodB does not catch it either, it propagates to methodA. This continues until caught or the program ends.

### Q6. [Medium] What is the output?

```
public class Main {
    public static void main(String[] args) {
        try {
            String s = "Hello";
            char c = s.charAt(10);
        } catch (StringIndexOutOfBoundsException e) {
            System.out.println("String error");
        } catch (Exception e) {
            System.out.println("General error");
        }
    }
}
```

*Hint:* "Hello" has indices 0-4. Index 10 is out of bounds.

**Answer:** `String error`

`charAt(10)` throws `StringIndexOutOfBoundsException`. The first catch block matches (it is a `StringIndexOutOfBoundsException`). The second catch block (`Exception`) is skipped since the first already caught it.

### Q7. [Medium] What is the output?

```
public class Main {
    static void risky() throws Exception {
        throw new Exception("Problem!");
    }
    
    static void caller() {
        try {
            risky();
        } catch (Exception e) {
            System.out.println("Handled: " + e.getMessage());
        }
    }
    
    public static void main(String[] args) {
        caller();
        System.out.println("Done");
    }
}
```

*Hint:* risky() declares throws Exception. caller() catches it.

**Answer:** `Handled: Problem!`
`Done`

`risky()` throws a checked Exception. `caller()` catches it and prints the message. Since the exception is handled, execution continues normally, printing "Done".

### Q8. [Hard] What is the output?

```
public class Main {
    static int count = 0;
    
    static void recursive() {
        count++;
        recursive();
    }
    
    public static void main(String[] args) {
        try {
            recursive();
        } catch (StackOverflowError e) {
            System.out.println("Stack overflow after " + count + " calls");
        }
    }
}
```

*Hint:* Infinite recursion causes StackOverflowError. Can it be caught?

**Answer:** `Stack overflow after [some large number] calls`

The recursive method calls itself infinitely, eventually causing `StackOverflowError`. Although it is an `Error` (not `Exception`), it can still be caught with catch. The exact count depends on the JVM's stack size.

### Q9. [Hard] When should you create a checked custom exception vs an unchecked custom exception?

*Hint:* Think about whether the caller can reasonably recover from the error.

**Answer:** Use a checked exception (extend `Exception`) when the caller can and should recover from the condition: insufficient funds, file not found, invalid input from an external source. Use an unchecked exception (extend `RuntimeException`) when the error represents a programming bug that should be fixed in the code: null argument, invalid state, assertion failure.

Checked exceptions force the caller to think about error handling at compile time. Unchecked exceptions indicate bugs that should be prevented by fixing the code, not by adding catch blocks everywhere.

### Q10. [Hard] What is the output?

```
public class Main {
    static void method() {
        try {
            throw new RuntimeException("A");
        } catch (RuntimeException e) {
            System.out.println(e.getMessage());
            throw new RuntimeException("B");
        } finally {
            System.out.println("finally");
        }
    }
    public static void main(String[] args) {
        try {
            method();
        } catch (RuntimeException e) {
            System.out.println(e.getMessage());
        }
    }
}
```

*Hint:* Exception B is thrown from catch. Finally runs before it propagates.

**Answer:** `A`
`finally`
`B`

In method(): "A" exception is caught, "A" prints. "B" is thrown. Finally prints "finally" before "B" propagates. In main(): "B" is caught and its message prints.

### Q11. [Medium] What is try-with-resources and what interface must a resource implement?

*Hint:* Think about automatic resource cleanup.

**Answer:** Try-with-resources (Java 7) is a try statement that declares one or more resources in its header. Resources are automatically closed when the try block exits, even if an exception occurs. Resources must implement the `AutoCloseable` interface (which has a single `close()` method).

Syntax: `try (Resource r = new Resource()) { ... }`. Common AutoCloseable resources: InputStream, OutputStream, Reader, Writer, Connection, Statement. Resources are closed in reverse order of creation.

### Q12. [Hard] What is the output?

```
public class Main {
    public static void main(String[] args) {
        System.out.println(test());
    }
    static int test() {
        int x = 0;
        try {
            x = 1;
            return x;
        } finally {
            x = 2;
            return x;
        }
    }
}
```

*Hint:* The return in finally overrides the return in try.

**Answer:** `2`

The try block sets x to 1 and prepares to return 1. But the finally block sets x to 2 and returns 2, overriding the try's return. The method returns 2. This is why you should never return from finally.

## Multiple Choice Questions

### Q1. [Easy] Which block always executes regardless of whether an exception occurs?

A. try
B. catch
C. finally
D. throw

**Answer:** C

**C is correct.** The `finally` block always executes, whether an exception occurred or not, whether it was caught or not. The only exceptions are `System.exit()` and JVM crashes.

### Q2. [Easy] Which of these is a checked exception?

A. NullPointerException
B. IOException
C. ArithmeticException
D. ArrayIndexOutOfBoundsException

**Answer:** B

**B is correct.** `IOException` is a checked exception (extends Exception, not RuntimeException). The other three are unchecked (subclasses of RuntimeException).

### Q3. [Easy] What is the parent class of all exceptions and errors in Java?

A. Exception
B. Error
C. Throwable
D. Object

**Answer:** C

**C is correct.** `Throwable` is the root of the exception hierarchy. Both `Exception` and `Error` extend `Throwable`. While `Object` is the ultimate parent, `Throwable` is the root of throwable types.

### Q4. [Easy] What does the `throw` keyword do?

A. Declares that a method might throw an exception
B. Explicitly throws an exception object
C. Catches an exception
D. Defines a custom exception class

**Answer:** B

**B is correct.** `throw` explicitly creates and throws an exception object: `throw new Exception("error")`. `throws` (with 's') is used in the method signature for declaration.

### Q5. [Easy] NullPointerException is a:

A. Checked exception
B. Unchecked exception (RuntimeException)
C. Error
D. Compile-time error

**Answer:** B

**B is correct.** `NullPointerException` extends `RuntimeException`, making it an unchecked exception. The compiler does not force you to catch it.

### Q6. [Medium] What interface must a resource implement to be used in try-with-resources?

A. Closeable
B. AutoCloseable
C. Serializable
D. Disposable

**Answer:** B

**B is correct.** Resources in try-with-resources must implement `AutoCloseable` (which has a `close()` method). `Closeable` extends `AutoCloseable`, so Closeable resources also work.

### Q7. [Medium] What happens if a checked exception is neither caught nor declared with throws?

A. Runtime error
B. The exception is ignored
C. Compilation error
D. Warning only

**Answer:** C

**C is correct.** Checked exceptions must be either caught (try-catch) or declared (throws in signature). Failing to do either results in a compilation error.

### Q8. [Medium] In multi-catch, which separator is used between exception types?

A. &&
B. ||
C. |
D. ,

**Answer:** C

**C is correct.** Multi-catch uses the pipe operator `|`: `catch (IOException | SQLException e)`. The exception types must not have a parent-child relationship.

### Q9. [Medium] To create a custom checked exception, you should extend:

A. RuntimeException
B. Exception
C. Throwable
D. Error

**Answer:** B

**B is correct.** Extending `Exception` creates a checked exception. Extending `RuntimeException` creates an unchecked exception. Extending `Error` is for JVM-level issues.

### Q10. [Medium] What is exception propagation?

A. Catching all exceptions in one place
B. An unhandled exception traveling up the call stack
C. Converting checked exceptions to unchecked
D. Throwing multiple exceptions at once

**Answer:** B

**B is correct.** When a method does not catch an exception, it propagates to the calling method. This continues up the call stack until it is caught or the program terminates.

### Q11. [Hard] What happens to the return value if finally has a return statement?

A. The try/catch return value is used
B. Both return values are returned
C. The finally return value overrides the try/catch return
D. Compilation error

**Answer:** C

**C is correct.** A return in the finally block overrides any return from try or catch. This is confusing behavior, which is why returning from finally is strongly discouraged.

### Q12. [Hard] Can you have a try block without a catch block?

A. No, catch is required
B. Yes, if there is a finally block
C. Yes, always
D. Only with try-with-resources

**Answer:** B

**B is correct.** A try block must be followed by either a catch block, a finally block, or both. `try { } finally { }` is valid. Also, try-with-resources can omit both catch and finally.

### Q13. [Hard] What exception does `Integer.parseInt("abc")` throw?

A. ArithmeticException
B. NumberFormatException
C. ClassCastException
D. IllegalArgumentException

**Answer:** B

**B is correct.** `parseInt` throws `NumberFormatException` when the string cannot be parsed as an integer. `NumberFormatException` is a subclass of `IllegalArgumentException`.

### Q14. [Hard] In try-with-resources with multiple resources, what order are they closed?

A. In the order they were declared
B. In reverse order of declaration
C. Random order
D. All at once

**Answer:** B

**B is correct.** Resources in try-with-resources are closed in reverse order of their declaration. This matches the stack-like nature of resource acquisition (last acquired, first released).

### Q15. [Hard] Which of the following is TRUE about Error in Java?

A. Errors must be caught like checked exceptions
B. Errors represent recoverable conditions
C. Errors indicate serious problems not meant to be caught by applications
D. Errors extend RuntimeException

**Answer:** C

**C is correct.** `Error` represents serious JVM-level problems (OutOfMemoryError, StackOverflowError) that applications should not attempt to catch. They extend `Throwable`, not `RuntimeException`.

### Q16. [Medium] What is the purpose of the `getMessage()` method in exceptions?

A. It prints the stack trace
B. It returns the detail message string of the exception
C. It returns the exception class name
D. It re-throws the exception

**Answer:** B

**B is correct.** `getMessage()` returns the detail message string passed to the exception's constructor. For `new Exception("file not found")`, `getMessage()` returns "file not found".

## Coding Challenges

### Challenge 1. Safe Division Calculator

**Difficulty:** Easy

Write a method safeDivide(int a, int b) that returns the result of a/b. If b is 0, catch the ArithmeticException and return -1. Test with (10,2), (10,0), (20,4).

**Constraints:**

- Use try-catch. Return -1 on error.

**Sample input:**

```
(10,2), (10,0), (20,4)
```

**Sample output:**

```
10 / 2 = 5
10 / 0 = -1 (division by zero)
20 / 4 = 5
```

**Solution:**

```java
public class Main {
    static int safeDivide(int a, int b) {
        try {
            return a / b;
        } catch (ArithmeticException e) {
            return -1;
        }
    }
    public static void main(String[] args) {
        int[][] tests = {{10,2}, {10,0}, {20,4}};
        for (int[] t : tests) {
            int result = safeDivide(t[0], t[1]);
            if (result == -1) {
                System.out.println(t[0] + " / " + t[1] + " = -1 (division by zero)");
            } else {
                System.out.println(t[0] + " / " + t[1] + " = " + result);
            }
        }
    }
}
```

### Challenge 2. Input Validator with Custom Exceptions

**Difficulty:** Medium

Create two custom exceptions: InvalidAgeException and InvalidNameException. Write a method registerStudent(String name, int age) that throws InvalidNameException if name is null/empty, and InvalidAgeException if age is not between 5 and 25. Test with valid and invalid inputs.

**Constraints:**

- Custom exceptions must extend Exception (checked). Include meaningful messages.

**Sample input:**

```
('Arjun', 20), ('', 20), ('Kavya', -5), (null, 30)
```

**Sample output:**

```
Registered: Arjun, age 20
Error: Name cannot be empty
Error: Invalid age: -5. Must be between 5 and 25
Error: Name cannot be null
```

**Solution:**

```java
class InvalidAgeException extends Exception {
    InvalidAgeException(int age) {
        super("Invalid age: " + age + ". Must be between 5 and 25");
    }
}

class InvalidNameException extends Exception {
    InvalidNameException(String reason) {
        super(reason);
    }
}

public class Main {
    static void registerStudent(String name, int age) throws InvalidNameException, InvalidAgeException {
        if (name == null) throw new InvalidNameException("Name cannot be null");
        if (name.isEmpty()) throw new InvalidNameException("Name cannot be empty");
        if (age < 5 || age > 25) throw new InvalidAgeException(age);
        System.out.println("Registered: " + name + ", age " + age);
    }

    public static void main(String[] args) {
        Object[][] tests = {{"Arjun", 20}, {"", 20}, {"Kavya", -5}, {null, 30}};
        for (Object[] t : tests) {
            try {
                registerStudent((String) t[0], (int) t[1]);
            } catch (InvalidNameException | InvalidAgeException e) {
                System.out.println("Error: " + e.getMessage());
            }
        }
    }
}
```

### Challenge 3. Resource Manager with AutoCloseable

**Difficulty:** Medium

Create a class ConnectionPool implementing AutoCloseable. It has a constructor that prints 'Pool opened with N connections', a method getConnection(int id) that throws RuntimeException if id > pool size, and close() that prints 'Pool closed'. Demonstrate try-with-resources with normal use and with an exception.

**Constraints:**

- Implement AutoCloseable. Use try-with-resources.

**Sample input:**

```
Pool size=3, get connections 1, 2, 5
```

**Sample output:**

```
Pool opened with 3 connections
Connection 1 acquired
Connection 2 acquired
Pool closed
Error: Connection 5 exceeds pool size 3
```

**Solution:**

```java
class ConnectionPool implements AutoCloseable {
    int size;
    ConnectionPool(int size) {
        this.size = size;
        System.out.println("Pool opened with " + size + " connections");
    }
    void getConnection(int id) {
        if (id > size) throw new RuntimeException("Connection " + id + " exceeds pool size " + size);
        System.out.println("Connection " + id + " acquired");
    }
    @Override
    public void close() {
        System.out.println("Pool closed");
    }
}

public class Main {
    public static void main(String[] args) {
        try (ConnectionPool pool = new ConnectionPool(3)) {
            pool.getConnection(1);
            pool.getConnection(2);
            pool.getConnection(5);
        } catch (RuntimeException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

### Challenge 4. Exception Chain Logger

**Difficulty:** Hard

Write three methods: parseData() throws NumberFormatException, processData() calls parseData and wraps the exception in a custom DataProcessingException (with the original as cause), and main() catches DataProcessingException and prints both the message and the root cause.

**Constraints:**

- Use exception chaining (pass cause to constructor). Access with getCause().

**Sample input:**

```
Input: "abc"
```

**Sample output:**

```
Processing error: Failed to process data
Root cause: NumberFormatException: For input string: "abc"
```

**Solution:**

```java
class DataProcessingException extends Exception {
    DataProcessingException(String msg, Throwable cause) {
        super(msg, cause);
    }
}

public class Main {
    static int parseData(String input) {
        return Integer.parseInt(input);
    }

    static int processData(String input) throws DataProcessingException {
        try {
            return parseData(input);
        } catch (NumberFormatException e) {
            throw new DataProcessingException("Failed to process data", e);
        }
    }

    public static void main(String[] args) {
        try {
            processData("abc");
        } catch (DataProcessingException e) {
            System.out.println("Processing error: " + e.getMessage());
            System.out.println("Root cause: " + e.getCause().getClass().getSimpleName() + ": " + e.getCause().getMessage());
        }
    }
}
```

### Challenge 5. Bank Transaction System

**Difficulty:** Hard

Create a BankAccount class with methods deposit(double) and withdraw(double). Withdraw throws InsufficientFundsException (custom checked) if amount > balance. Write a transfer(BankAccount from, BankAccount to, double amount) method. If withdraw fails, the transfer should be atomic (no partial changes). Test with successful and failed transfers.

**Constraints:**

- Ensure atomicity: if withdraw fails, no changes should persist.

**Sample input:**

```
Account A: 5000, Account B: 3000, Transfer 2000 then 5000
```

**Sample output:**

```
Transfer of 2000.0: Success
A: 3000.0, B: 5000.0
Transfer of 5000.0: Failed - Insufficient funds. Deficit: 2000.0
A: 3000.0, B: 5000.0
```

**Solution:**

```java
class InsufficientFundsException extends Exception {
    double deficit;
    InsufficientFundsException(double deficit) {
        super("Insufficient funds. Deficit: " + deficit);
        this.deficit = deficit;
    }
}

class BankAccount {
    String name;
    double balance;
    BankAccount(String name, double balance) {
        this.name = name;
        this.balance = balance;
    }
    void deposit(double amount) { balance += amount; }
    void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) throw new InsufficientFundsException(amount - balance);
        balance -= amount;
    }
}

public class Main {
    static void transfer(BankAccount from, BankAccount to, double amount) {
        try {
            from.withdraw(amount);
            to.deposit(amount);
            System.out.println("Transfer of " + amount + ": Success");
        } catch (InsufficientFundsException e) {
            System.out.println("Transfer of " + amount + ": Failed - " + e.getMessage());
        }
        System.out.println(from.name + ": " + from.balance + ", " + to.name + ": " + to.balance);
    }

    public static void main(String[] args) {
        BankAccount a = new BankAccount("A", 5000);
        BankAccount b = new BankAccount("B", 3000);
        transfer(a, b, 2000);
        transfer(a, b, 5000);
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/exception-handling/*
