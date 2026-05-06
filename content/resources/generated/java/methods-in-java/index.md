---
title: "Methods in Java - Method Overloading, Pass by Value, Recursion | Modern Age Coders"
description: "Learn Java methods including method syntax, return types, method overloading, pass-by-value, static vs instance methods, varargs, and recursion. Includes 62+ practice questions with output prediction and coding challenges."
slug: methods-in-java
canonical: https://learn.modernagecoders.com/resources/java/methods-in-java
category: "Java"
keywords: ["java methods", "java functions", "method overloading java", "pass by value java", "java static method", "java recursion", "java varargs", "java method syntax", "java method return type", "java method examples"]
---
# Methods in Java

**Difficulty:** Intermediate  
**Reading time:** 30 min  
**Chapter:** 12  
**Practice questions:** 62

## What Are Methods in Java?

A **method** in Java is a block of code that performs a specific task, has a name, and can be called (invoked) whenever that task needs to be performed. Methods are the Java equivalent of what other languages call "functions" — but in Java, every method must belong to a class because Java is a purely object-oriented language.

Methods allow you to break a large program into smaller, manageable, reusable pieces. Instead of writing the same logic multiple times, you write it once in a method and call it wherever needed. This is the foundation of the **DRY principle** (Don't Repeat Yourself).

### Method Syntax

A Java method has the following structure:

```
accessModifier returnType methodName(parameterList) {
    // method body
    return value; // if returnType is not void
}
```

**Access Modifier:** Controls visibility — `public`, `private`, `protected`, or default (no modifier). Determines which classes can call this method.

**Return Type:** The data type of the value the method returns. Use `void` if the method does not return any value.

**Method Name:** A meaningful name following camelCase convention — `calculateArea`, `findMax`, `printDetails`.

**Parameter List:** Zero or more parameters (inputs) the method accepts, each with a type and name. Parameters are separated by commas.

## Why Are Methods Important?

Methods are the fundamental building blocks of any Java application. Understanding them is essential for writing clean, efficient, and maintainable code.

### 1. Code Reusability

Write once, call many times. A method to calculate the area of a circle can be called from anywhere in your program with different radius values. Without methods, you would duplicate the formula everywhere it is needed, and changing it would require updates in every location.

### 2. Abstraction and Readability

Well-named methods make code self-documenting. `validateEmail(email)` is immediately understandable without reading the implementation. Complex logic hidden behind a clear method name makes the calling code easier to read, understand, and maintain.

### 3. Method Overloading — Compile-Time Polymorphism

Java allows multiple methods with the same name but different parameter lists. This is **method overloading**, a form of compile-time polymorphism. The compiler decides which version to call based on the arguments. `System.out.println()` itself is overloaded — it works with int, double, String, char, boolean, and more.

### 4. Recursion Solves Complex Problems Elegantly

Recursion — a method calling itself — is the natural solution for problems with self-similar structure: tree traversals, divide-and-conquer algorithms, backtracking, and mathematical sequences. Understanding recursion is critical for placement interviews and competitive programming.

### 5. Foundation for OOP

Every class behavior is defined through methods. Constructors, getters, setters, overridden methods, static utility methods — all are method variations. Without understanding methods, you cannot progress to classes, inheritance, or polymorphism.

## Detailed Explanation

### 1. void vs Return Methods

A `void` method performs an action but does not return a value. A non-void method must return a value of the declared type using the `return` statement.

```
// void method — performs action, returns nothing
void greet(String name) {
    System.out.println("Hello, " + name);
}

// return method — computes and returns a value
int add(int a, int b) {
    return a + b;
}
```

Once a `return` statement is executed, the method terminates immediately. Code after `return` is unreachable and causes a compilation error.

### 2. Method Overloading

Method overloading means having multiple methods with the **same name** but **different parameter lists** in the same class. The compiler determines which method to call based on the number, types, and order of arguments at compile time.

Valid overloading depends on the parameter list:

- Different number of parameters: `add(int a, int b)` and `add(int a, int b, int c)`

- Different parameter types: `add(int a, int b)` and `add(double a, double b)`

- Different parameter order: `display(String s, int n)` and `display(int n, String s)`

Overloading is NOT determined by return type alone. You cannot have two methods that differ only in return type.

### 3. Pass-by-Value in Java

Java is **strictly pass-by-value**. This is one of the most misunderstood concepts:

**For primitives:** A copy of the value is passed. Changes to the parameter inside the method do not affect the original variable.

```
void changeValue(int x) {
    x = 100; // Only changes the local copy
}

int num = 5;
changeValue(num);
System.out.println(num); // Still 5
```

**For objects:** A copy of the *reference* (memory address) is passed. The method can modify the object's state through this reference, but it cannot change which object the original variable points to.

```
void changeName(StringBuilder sb) {
    sb.append(" World"); // Modifies the original object
}

void reassign(StringBuilder sb) {
    sb = new StringBuilder("New"); // Only changes the local copy of the reference
}

StringBuilder name = new StringBuilder("Hello");
changeName(name);
System.out.println(name); // "Hello World" — object was modified
reassign(name);
System.out.println(name); // Still "Hello World" — reference was not changed
```

### 4. Static Methods vs Instance Methods

**Static methods** belong to the class, not to any specific object. They are called using the class name: `Math.sqrt(25)`. They can only access other static members directly. They cannot use `this` keyword.

**Instance methods** belong to objects. They are called on an object: `myString.length()`. They can access both static and instance members.

```
class Calculator {
    static int add(int a, int b) {   // static — called via Calculator.add()
        return a + b;
    }

    int multiply(int a, int b) {     // instance — called via obj.multiply()
        return a * b;
    }
}
```

Static methods are used for utility functions that do not depend on object state: `Math.max()`, `Arrays.sort()`, `Collections.reverse()`.

### 5. Varargs (Variable-Length Arguments)

Java allows methods to accept a variable number of arguments using the `...` syntax. Internally, varargs are treated as an array.

```
int sum(int... numbers) {
    int total = 0;
    for (int n : numbers) {
        total += n;
    }
    return total;
}

sum(1, 2);           // 3
sum(1, 2, 3, 4, 5);  // 15
sum();               // 0
```

Rules: A method can have only one varargs parameter, and it must be the last parameter. `void example(String label, int... values)` is valid. `void example(int... values, String label)` is not.

### 6. Method Chaining

When a method returns the object itself (or another object), you can call another method on the returned value. This is method chaining.

```
StringBuilder sb = new StringBuilder();
sb.append("Hello").append(" ").append("World").reverse();
// Each append() returns the same StringBuilder object
```

### 7. Recursion

A recursive method calls itself with a modified argument, working toward a **base case** that stops the recursion. Every recursive solution needs: (1) A base case — the condition where recursion stops. (2) A recursive case — the method calls itself with a smaller problem.

```
int factorial(int n) {
    if (n <= 1) return 1;           // base case
    return n * factorial(n - 1);    // recursive case
}
```

The call stack stores each method invocation. If the base case is missing or never reached, the stack overflows, throwing a `StackOverflowError`.

## Code Examples

### Basic Method — void and Return Types

```java
public class MethodBasics {
    // void method — no return value
    static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    // Method with return value
    static int add(int a, int b) {
        return a + b;
    }

    // Method with boolean return
    static boolean isEven(int n) {
        return n % 2 == 0;
    }

    public static void main(String[] args) {
        greet("Aarav");
        greet("Priya");

        int sum = add(10, 20);
        System.out.println("Sum: " + sum);

        System.out.println("Is 7 even? " + isEven(7));
        System.out.println("Is 8 even? " + isEven(8));
    }
}
```

`greet()` is a void method that prints a message without returning anything. `add()` returns an int value that can be stored in a variable. `isEven()` returns a boolean. All three are static methods so they can be called directly from `main()` without creating an object.

**Output:**

```
Hello, Aarav!
Hello, Priya!
Sum: 30
Is 7 even? false
Is 8 even? true
```

### Method Overloading

```java
public class OverloadDemo {
    // Overloaded add methods — same name, different parameters
    static int add(int a, int b) {
        System.out.print("int + int: ");
        return a + b;
    }

    static double add(double a, double b) {
        System.out.print("double + double: ");
        return a + b;
    }

    static int add(int a, int b, int c) {
        System.out.print("int + int + int: ");
        return a + b + c;
    }

    static String add(String a, String b) {
        System.out.print("String + String: ");
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println(add(5, 10));
        System.out.println(add(3.5, 2.5));
        System.out.println(add(1, 2, 3));
        System.out.println(add("Hello", " World"));
    }
}
```

Four methods named `add` coexist in the same class. The compiler selects the correct version based on argument types and count. Passing two ints calls the first version. Two doubles call the second. Three ints call the third. Two Strings call the fourth. This is compile-time polymorphism.

**Output:**

```
int + int: 15
double + double: 6.0
int + int + int: 6
String + String: Hello World
```

### Pass-by-Value — Primitives vs Objects

```java
public class PassByValue {
    static void modifyPrimitive(int x) {
        x = 100;
        System.out.println("Inside method: x = " + x);
    }

    static void modifyArray(int[] arr) {
        arr[0] = 999;
        System.out.println("Inside method: arr[0] = " + arr[0]);
    }

    static void reassignArray(int[] arr) {
        arr = new int[]{-1, -2, -3};
        System.out.println("Inside method (reassign): arr[0] = " + arr[0]);
    }

    public static void main(String[] args) {
        int num = 5;
        modifyPrimitive(num);
        System.out.println("After method: num = " + num);

        System.out.println();

        int[] myArr = {1, 2, 3};
        modifyArray(myArr);
        System.out.println("After method: myArr[0] = " + myArr[0]);

        System.out.println();

        reassignArray(myArr);
        System.out.println("After reassign: myArr[0] = " + myArr[0]);
    }
}
```

For primitives, changes inside the method do not affect the caller — `num` stays 5. For objects (including arrays), the method receives a copy of the reference. Through this reference, it can modify the object's state (setting arr[0] to 999 affects the caller). However, reassigning the local reference to a new object (inside `reassignArray`) does NOT affect the caller's reference — `myArr` still points to the original array.

**Output:**

```
Inside method: x = 100
After method: num = 5

Inside method: arr[0] = 999
After method: myArr[0] = 999

Inside method (reassign): arr[0] = -1
After reassign: myArr[0] = 999
```

### Static Methods vs Instance Methods

```java
public class StaticVsInstance {
    int instanceVar = 10;
    static int staticVar = 20;

    // Instance method — can access both static and instance members
    void instanceMethod() {
        System.out.println("Instance var: " + instanceVar);
        System.out.println("Static var: " + staticVar);
    }

    // Static method — can only access static members directly
    static void staticMethod() {
        // System.out.println(instanceVar); // ERROR: cannot access instance var
        System.out.println("Static var: " + staticVar);
    }

    public static void main(String[] args) {
        // Static method — called using class name
        StaticVsInstance.staticMethod();

        // Instance method — called on an object
        StaticVsInstance obj = new StaticVsInstance();
        obj.instanceMethod();

        // Static method can also be called on an object (not recommended)
        obj.staticMethod();
    }
}
```

Static methods belong to the class and can only access other static members directly. Instance methods belong to objects and can access everything. The `main` method is static, which is why you cannot call instance methods directly from main without creating an object. Calling a static method on an object reference works but is misleading and not recommended.

**Output:**

```
Static var: 20
Instance var: 10
Static var: 20
Static var: 20
```

### Varargs — Variable-Length Arguments

```java
public class VarargsDemo {
    // Varargs method — accepts 0 or more int arguments
    static int sum(int... numbers) {
        int total = 0;
        for (int n : numbers) {
            total += n;
        }
        return total;
    }

    // Varargs with a regular parameter (varargs must be last)
    static void printInfo(String label, int... values) {
        System.out.print(label + ": ");
        for (int v : values) {
            System.out.print(v + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        System.out.println("Sum(): " + sum());
        System.out.println("Sum(1,2): " + sum(1, 2));
        System.out.println("Sum(1,2,3,4,5): " + sum(1, 2, 3, 4, 5));

        printInfo("Marks", 85, 90, 78);
        printInfo("Empty");
    }
}
```

The `int... numbers` syntax lets the method accept any number of int arguments (including zero). Inside the method, `numbers` is treated as an `int[]`. Varargs must be the last parameter in the parameter list. You can have at most one varargs parameter per method.

**Output:**

```
Sum(): 0
Sum(1,2): 3
Sum(1,2,3,4,5): 15
Marks: 85 90 78 
Empty: 
```

### Recursion — Factorial, Fibonacci, and Power

```java
public class RecursionDemo {
    // Factorial: n! = n * (n-1)!
    static long factorial(int n) {
        if (n <= 1) return 1;               // base case
        return n * factorial(n - 1);        // recursive case
    }

    // Fibonacci: fib(n) = fib(n-1) + fib(n-2)
    static int fibonacci(int n) {
        if (n <= 0) return 0;               // base case
        if (n == 1) return 1;               // base case
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    // Power: base^exp = base * base^(exp-1)
    static double power(double base, int exp) {
        if (exp == 0) return 1;             // base case
        if (exp < 0) return 1 / power(base, -exp);
        return base * power(base, exp - 1);
    }

    public static void main(String[] args) {
        System.out.println("5! = " + factorial(5));
        System.out.println("10! = " + factorial(10));

        System.out.print("Fibonacci: ");
        for (int i = 0; i < 8; i++) {
            System.out.print(fibonacci(i) + " ");
        }
        System.out.println();

        System.out.println("2^10 = " + power(2, 10));
        System.out.println("5^-2 = " + power(5, -2));
    }
}
```

Each recursive method has a base case that stops recursion and a recursive case that breaks the problem into smaller subproblems. Factorial multiplies n by (n-1)!. Fibonacci adds the two preceding values. Power multiplies base by base^(exp-1). Negative exponents are handled by inverting the positive power. Note: the naive Fibonacci implementation has exponential time complexity. For production code, use iteration or memoization.

**Output:**

```
5! = 120
10! = 3628800
Fibonacci: 0 1 1 2 3 5 8 13 
2^10 = 1024.0
5^-2 = 0.04
```

### Method Chaining and Returning this

```java
public class MethodChaining {
    // Using StringBuilder's built-in method chaining
    public static void main(String[] args) {
        // StringBuilder methods return the same object
        String result = new StringBuilder()
            .append("Name: Kavitha")
            .append(", ")
            .append("Age: 20")
            .append(", ")
            .append("Branch: CSE")
            .toString();

        System.out.println(result);

        // String methods can also be chained
        String cleaned = "  Hello, World!  "
            .trim()
            .toLowerCase()
            .replace("world", "java");

        System.out.println(cleaned);
    }
}
```

Method chaining works when a method returns an object on which another method can be called. StringBuilder's `append()` returns the same StringBuilder, allowing multiple appends in a single statement. String methods return new String objects, so `trim()` returns a trimmed string on which `toLowerCase()` is called, and so on. Chaining makes code concise and readable.

**Output:**

```
Name: Kavitha, Age: 20, Branch: CSE
hello, java!
```

## Common Mistakes

### Missing Return Statement in Non-void Method

**Wrong:**

```
static int getMax(int a, int b) {
    if (a > b) {
        return a;
    }
    // Missing return for the else case!
}
```

error: missing return statement

**Correct:**

```
static int getMax(int a, int b) {
    if (a > b) {
        return a;
    }
    return b; // Always provide a return for all code paths
}
```

A non-void method must return a value on every possible execution path. If the `if` block has a return but there is no `else` or final return, the compiler reports an error because the method might end without returning a value.

### Thinking Java Is Pass-by-Reference for Objects

**Wrong:**

```
static void changeString(String s) {
    s = "Changed";
}

String name = "Aarav";
changeString(name);
System.out.println(name); // Expected: "Changed"
```

No compilation error, but name is still "Aarav" — the reassignment inside the method does not affect the caller.

**Correct:**

```
// Java is pass-by-value. For objects, it passes a copy of the reference.
// To modify the caller's data, use a mutable object:
static void changeName(StringBuilder sb) {
    sb.replace(0, sb.length(), "Changed");
}

StringBuilder name = new StringBuilder("Aarav");
changeName(name);
System.out.println(name); // "Changed" — the object was modified
```

Java always passes by value. For object references, the value passed is a copy of the reference. Reassigning the parameter (`s = "Changed"`) only changes the local copy, not the caller's variable. To affect the caller, you must modify the object through the reference, not reassign the reference itself.

### Overloading Based Only on Return Type

**Wrong:**

```
static int getValue() {
    return 42;
}

static double getValue() {
    return 3.14;
}
```

error: method getValue() is already defined in class

**Correct:**

```
static int getIntValue() {
    return 42;
}

static double getDoubleValue() {
    return 3.14;
}

// Or overload by changing parameters:
static int getValue(int x) { return x; }
static double getValue(double x) { return x; }
```

Method overloading requires different parameter lists. Two methods that differ only in return type cannot coexist because the compiler cannot determine which to call at the call site. The call `getValue()` would be ambiguous.

### Calling an Instance Method from a Static Context

**Wrong:**

```
public class MyClass {
    void sayHello() {
        System.out.println("Hello!");
    }

    public static void main(String[] args) {
        sayHello(); // ERROR
    }
}
```

error: non-static method sayHello() cannot be referenced from a static context

**Correct:**

```
public class MyClass {
    void sayHello() {
        System.out.println("Hello!");
    }

    public static void main(String[] args) {
        MyClass obj = new MyClass();
        obj.sayHello(); // Correct — called on an object
    }
}
```

The `main` method is static and does not have an object context. Instance methods require an object to operate on. To call an instance method from main, you must first create an object of the class. Alternatively, make the method static if it does not need instance state.

### Infinite Recursion — Missing or Unreachable Base Case

**Wrong:**

```
static int factorial(int n) {
    return n * factorial(n - 1); // No base case!
}
```

Exception in thread "main" java.lang.StackOverflowError

**Correct:**

```
static int factorial(int n) {
    if (n <= 1) return 1;           // Base case stops recursion
    return n * factorial(n - 1);    // Recursive case moves toward base case
}
```

Without a base case, the method calls itself indefinitely. Each call adds a frame to the call stack until the stack runs out of space, causing a `StackOverflowError`. Every recursive method must have a base case, and the recursive call must move toward it.

## Summary

- A method is a reusable block of code with a name, defined inside a class. It has an access modifier, return type, name, and parameter list.
- void methods perform an action without returning a value. Non-void methods must return a value of the declared type using the return statement.
- Method overloading allows multiple methods with the same name but different parameter lists (number, types, or order). The compiler resolves overloaded calls at compile time. Return type alone does not distinguish overloaded methods.
- Java is strictly pass-by-value. For primitives, the actual value is copied. For objects, a copy of the reference is passed. You can modify an object's state through the reference, but reassigning the reference does not affect the caller.
- Static methods belong to the class and are called using the class name. Instance methods belong to objects and require an object to call. Static methods cannot access instance variables directly.
- Varargs (int... args) allow a method to accept zero or more arguments. Only one varargs parameter is allowed and it must be the last parameter.
- Recursion is when a method calls itself. Every recursive method needs a base case (termination condition) and a recursive case that moves toward the base case.
- The call stack stores each method invocation. Deep recursion or missing base cases cause StackOverflowError.
- Method chaining is possible when methods return the current object or another object, allowing multiple method calls in a single statement.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/methods-in-java/*
*Practice questions: https://learn.modernagecoders.com/resources/java/methods-in-java/practice/*
