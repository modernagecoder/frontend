---
title: "Variables and Data Types in Java - Primitive Types, Type Casting, Wrapper Classes | Modern Age Coders"
description: "Master Java's 8 primitive types (byte, short, int, long, float, double, char, boolean), reference types, type casting (widening/narrowing), var keyword, constants, wrapper classes, and autoboxing. 62 practice questions included."
slug: variables-and-data-types
canonical: https://learn.modernagecoders.com/resources/java/variables-and-data-types/
category: "Java"
keywords: ["java data types", "java variables", "primitive types java", "int double char boolean java", "type casting java", "wrapper classes java", "autoboxing unboxing", "java var keyword", "java constants final", "java reference types"]
---
# Variables and Data Types in Java

**Difficulty:** Beginner  
**Reading time:** 22 min  
**Chapter:** 4  
**Practice questions:** 62

## What Are Variables and Data Types?

A **variable** is a named container that stores a value in memory. Think of it as a labeled box: the label is the variable name, and the contents are the value. In Java, every variable has a **data type** that determines what kind of value it can hold and how much memory it occupies.

Java is a **statically typed** language, which means you must declare the type of every variable before using it. Once a variable is declared as a certain type, it can only hold values of that type (or compatible types). This is fundamentally different from Python, where a variable can hold any type of value at any time.

Java has two categories of data types: **primitive types** (8 built-in types that store simple values directly) and **reference types** (types that store references/addresses to objects in memory, including Strings, arrays, and all class instances).

## Why Are Data Types Important?

### 1. Memory Efficiency

Different data types use different amounts of memory. An `int` uses 4 bytes while a `long` uses 8 bytes. Choosing the right type prevents wasting memory. In systems that process millions of records (banking, big data), this difference matters significantly.

### 2. Type Safety Prevents Bugs

Java's static typing catches type errors at compile time, before your program runs. If you accidentally try to store a String in an int variable, the compiler immediately tells you. In dynamically typed languages like Python, such errors only surface at runtime, potentially in production.

### 3. Precision Control

Understanding the difference between `int` and `double`, or `float` and `double`, is critical for applications that require numerical precision. Financial calculations that use `float` can produce incorrect results due to floating-point precision limits.

### 4. Type Casting Is an Interview Favorite

Questions about type casting (widening vs narrowing, integer overflow, precision loss) appear frequently in placement interviews and coding assessments. Understanding how Java converts between types is essential for writing correct programs and passing technical interviews.

## Detailed Explanation

### 1. The 8 Primitive Data Types

Java has exactly 8 primitive data types. They store values directly in memory (not references to objects):

TypeSizeRangeDefaultExample`byte`1 byte-128 to 1270`byte age = 25;``short`2 bytes-32,768 to 32,7670`short year = 2026;``int`4 bytes-2.1 billion to 2.1 billion0`int salary = 500000;``long`8 bytes-9.2 quintillion to 9.2 quintillion0L`long population = 1400000000L;``float`4 bytes~6-7 decimal digits precision0.0f`float pi = 3.14f;``double`8 bytes~15-16 decimal digits precision0.0`double gpa = 8.75;``char`2 bytes0 to 65,535 (Unicode)'\u0000'`char grade = 'A';``boolean`~1 bittrue or falsefalse`boolean isPlaced = true;`

#### Integer Types: byte, short, int, long

These store whole numbers without decimal points. `int` is the default and most commonly used. Use `long` when values exceed int's range (approximately 2.1 billion). Long literals must end with `L` (e.g., `10000000000L`). Use `byte` and `short` only when memory optimization is critical (e.g., large arrays).

#### Floating-Point Types: float, double

`double` is the default for decimal numbers and has twice the precision of `float`. Float literals must end with `f` (e.g., `3.14f`). Always use `double` unless you have a specific reason to use `float` (like working with graphics APIs or saving memory in large arrays).

#### Character Type: char

`char` stores a single Unicode character using single quotes. Java uses 16-bit Unicode (UTF-16), so it can represent characters from virtually any language. `char` is also a numeric type: `'A'` has the value 65, and you can perform arithmetic on chars.

#### Boolean Type: boolean

`boolean` stores only `true` or `false`. Unlike C/C++, Java does not treat 0 as false or non-zero as true. You cannot assign an integer to a boolean variable.

### 2. Reference Types

Reference types store a **reference** (memory address) to an object, not the object itself. The most common reference types are:

- **String:** `String name = "Aarav";` -- Strings are objects in Java, not primitives
- **Arrays:** `int[] marks = {85, 92, 78};`
- **Class instances:** `Student s = new Student();`
- **Interfaces, Enums**

The default value of any reference type is `null`, which means "no object." Attempting to call methods on a `null` reference causes a `NullPointerException`.

### 3. Variable Declaration and Initialization

#### Declaration

Declaring a variable tells the compiler its name and type:

```
int age;          // Declaration only
String name;      // Declaration only
```

#### Initialization

Assigning a value for the first time:

```
age = 20;                    // Initialization
name = "Priya";              // Initialization
```

#### Declaration + Initialization

```
int age = 20;                // Both at once
String name = "Priya";       // Both at once
```

#### Multiple Declarations

```
int x = 10, y = 20, z = 30; // Same type, multiple variables
```

### 4. Type Casting

Type casting is converting a value from one data type to another. Java has two types:

#### Widening (Implicit) Casting

Automatically done by the compiler when converting a smaller type to a larger type. No data is lost.

```
byte -> short -> int -> long -> float -> double
```

Example: `int x = 10; double y = x;` -- the int is automatically widened to double (10 becomes 10.0).

#### Narrowing (Explicit) Casting

Must be done manually by the programmer when converting a larger type to a smaller type. Data may be lost.

```
double -> float -> long -> int -> short -> byte
```

Example: `double x = 9.7; int y = (int) x;` -- the double is narrowed to int, truncating the decimal (y becomes 9, not 10).

#### Important Casting Rules

- Narrowing truncates, it does not round: `(int) 9.99` gives 9
- Integer overflow wraps around: `(byte) 130` gives -126 (130 - 256)
- char can be cast to int and vice versa: `(int) 'A'` gives 65
- boolean cannot be cast to any other type

### 5. The var Keyword (Java 10+)

Java 10 introduced `var` for local variable type inference. The compiler deduces the type from the assigned value:

```
var name = "Aarav";      // Compiler infers String
var age = 20;             // Compiler infers int
var gpa = 8.75;           // Compiler infers double
```

`var` can only be used for local variables with an initializer. It cannot be used for method parameters, return types, or class fields. The variable is still statically typed; `var` is just syntactic sugar.

### 6. Constants with final

The `final` keyword creates a constant -- a variable whose value cannot be changed after initialization:

```
final double PI = 3.14159;
final int MAX_STUDENTS = 60;
final String COLLEGE_NAME = "IIT Delhi";
```

Constants use UPPER_SNAKE_CASE by convention. Attempting to reassign a final variable causes a compilation error.

### 7. Wrapper Classes

Each primitive type has a corresponding **wrapper class** that wraps the primitive in an object:

PrimitiveWrapper ClassbyteByteshortShortintIntegerlongLongfloatFloatdoubleDoublecharCharacterbooleanBoolean

#### Why Wrapper Classes?

Java's collections (ArrayList, HashMap, etc.) can only store objects, not primitives. Wrapper classes allow you to use primitives in these collections. They also provide useful utility methods like `Integer.parseInt()`, `Double.parseDouble()`, and constants like `Integer.MAX_VALUE`.

### 8. Autoboxing and Unboxing

**Autoboxing:** Automatic conversion from primitive to wrapper object.
`Integer num = 42;` (int 42 is automatically boxed to Integer)

**Unboxing:** Automatic conversion from wrapper object to primitive.
`int x = num;` (Integer num is automatically unboxed to int)

Be cautious: unboxing a `null` wrapper object causes a `NullPointerException`.

### 9. Default Values

Instance variables (class fields) get default values if not explicitly initialized. Local variables inside methods do **NOT** get default values and must be initialized before use.

TypeDefault Valuebyte, short, int, long0float, double0.0char'\u0000' (null character)booleanfalseReference typesnull

## Code Examples

### All 8 Primitive Types in Action

```java
public class PrimitiveTypes {
    public static void main(String[] args) {
        byte studentCount = 45;
        short yearOfAdmission = 2024;
        int annualFee = 150000;
        long aadharNumber = 123456789012L;  // Note: L suffix for long

        float cgpa = 8.75f;                 // Note: f suffix for float
        double preciseGpa = 8.756789;

        char grade = 'A';
        boolean isPlaced = true;

        System.out.println("=== Student Profile ===");
        System.out.println("Students in class (byte): " + studentCount);
        System.out.println("Year of admission (short): " + yearOfAdmission);
        System.out.println("Annual fee (int): " + annualFee);
        System.out.println("Aadhar number (long): " + aadharNumber);
        System.out.println("CGPA (float): " + cgpa);
        System.out.println("Precise GPA (double): " + preciseGpa);
        System.out.println("Grade (char): " + grade);
        System.out.println("Placed (boolean): " + isPlaced);
    }
}
```

This example demonstrates all 8 primitive types with realistic values. Notice that `long` literals require the `L` suffix and `float` literals require the `f` suffix. Without these suffixes, the compiler treats the values as `int` and `double` respectively, causing errors for values that exceed int range or when assigning to float variables.

**Output:**

```
=== Student Profile ===
Students in class (byte): 45
Year of admission (short): 2024
Annual fee (int): 150000
Aadhar number (long): 123456789012
CGPA (float): 8.75
Precise GPA (double): 8.756789
Grade (char): A
Placed (boolean): true
```

### Type Casting: Widening and Narrowing

```java
public class TypeCasting {
    public static void main(String[] args) {
        // Widening (implicit) - no data loss
        int marks = 85;
        double marksAsDouble = marks;  // int -> double automatically
        System.out.println("Widening: int " + marks + " -> double " + marksAsDouble);

        byte b = 42;
        int bAsInt = b;  // byte -> int automatically
        System.out.println("Widening: byte " + b + " -> int " + bAsInt);

        // Narrowing (explicit) - possible data loss
        double gpa = 8.97;
        int gpaAsInt = (int) gpa;  // Truncates, does NOT round!
        System.out.println("\nNarrowing: double " + gpa + " -> int " + gpaAsInt);

        int bigNumber = 300;
        byte bigAsByte = (byte) bigNumber;  // Overflow!
        System.out.println("Narrowing: int " + bigNumber + " -> byte " + bigAsByte);

        // char and int casting
        char ch = 'A';
        int charValue = ch;  // Widening: char -> int
        System.out.println("\n'A' as int: " + charValue);

        int num = 66;
        char numAsChar = (char) num;  // Narrowing: int -> char
        System.out.println("66 as char: " + numAsChar);
    }
}
```

Widening happens automatically and never loses data: int 85 becomes double 85.0. Narrowing requires an explicit cast `(type)` and can lose data: double 8.97 becomes int 8 (truncated, not rounded). Integer overflow during narrowing wraps around: int 300 as byte gives 300 - 256 = 44. The char-int relationship is also shown: 'A' is 65, and int 66 is 'B'.

**Output:**

```
Widening: int 85 -> double 85.0
Widening: byte 42 -> int 42

Narrowing: double 8.97 -> int 8
Narrowing: int 300 -> byte 44

'A' as int: 65
66 as char: B
```

### String and Reference Types

```java
public class ReferenceTypes {
    public static void main(String[] args) {
        // String - the most used reference type
        String name = "Vikram Sharma";
        String college = "NIT Warangal";

        System.out.println("Name: " + name);
        System.out.println("Name length: " + name.length());
        System.out.println("Uppercase: " + name.toUpperCase());

        // String is immutable - methods return NEW strings
        String greeting = "hello";
        String upper = greeting.toUpperCase();
        System.out.println("\nOriginal: " + greeting);     // Still "hello"
        System.out.println("Uppercase: " + upper);          // "HELLO"

        // null reference
        String address = null;
        System.out.println("\nAddress is null: " + (address == null));
        // System.out.println(address.length()); // This would throw NullPointerException!

        // Arrays - another reference type
        int[] marks = {85, 92, 78, 95, 88};
        System.out.println("\nFirst mark: " + marks[0]);
        System.out.println("Array length: " + marks.length);
    }
}
```

Reference types store a reference (memory address) to an object. Strings are the most commonly used reference type. They have methods like `length()`, `toUpperCase()`, and `charAt()`. Strings are **immutable**: calling `toUpperCase()` returns a new String; the original is unchanged. The special value `null` means "no object"; calling any method on null causes a NullPointerException. Arrays are also reference types with a `length` property (not a method -- no parentheses).

**Output:**

```
Name: Vikram Sharma
Name length: 12
Uppercase: VIKRAM SHARMA

Original: hello
Uppercase: HELLO

Address is null: true

First mark: 85
Array length: 5
```

### Constants with final and var Keyword

```java
public class ConstantsAndVar {
    // Class-level constants
    static final double PI = 3.14159265358979;
    static final int MAX_MARKS = 100;
    static final String UNIVERSITY = "Anna University";

    public static void main(String[] args) {
        // final prevents reassignment
        final int PASSING_MARKS = 35;
        System.out.println("Passing marks: " + PASSING_MARKS);
        // PASSING_MARKS = 40; // ERROR: cannot assign a value to final variable

        // var keyword (Java 10+) - type inferred by compiler
        var studentName = "Neha";     // Compiler infers String
        var age = 19;                  // Compiler infers int
        var gpa = 8.5;                 // Compiler infers double
        var isTopRanker = true;        // Compiler infers boolean

        System.out.println("\nStudent: " + studentName);
        System.out.println("Age: " + age);
        System.out.println("GPA: " + gpa);
        System.out.println("Top ranker: " + isTopRanker);

        System.out.println("\nPI: " + PI);
        System.out.println("Max marks: " + MAX_MARKS);
        System.out.println("University: " + UNIVERSITY);
    }
}
```

The `final` keyword makes a variable constant -- its value cannot be changed after assignment. Constants use UPPER_SNAKE_CASE by convention. The `var` keyword (Java 10+) lets the compiler infer the type from the assigned value. The variable is still statically typed; `var` just saves you from writing the type explicitly. Note: `var` cannot be used for class fields, method parameters, or return types.

**Output:**

```
Passing marks: 35

Student: Neha
Age: 19
GPA: 8.5
Top ranker: true

PI: 3.14159265358979
Max marks: 100
University: Anna University
```

### Wrapper Classes and Autoboxing

```java
public class WrapperDemo {
    public static void main(String[] args) {
        // Autoboxing: primitive -> wrapper
        Integer marks = 85;           // int 85 -> Integer object
        Double percentage = 87.5;     // double -> Double
        Character grade = 'A';        // char -> Character
        Boolean passed = true;        // boolean -> Boolean

        System.out.println("Marks: " + marks);
        System.out.println("Percentage: " + percentage);
        System.out.println("Grade: " + grade);
        System.out.println("Passed: " + passed);

        // Unboxing: wrapper -> primitive
        int rawMarks = marks;         // Integer -> int
        double rawPercentage = percentage;  // Double -> double
        System.out.println("\nRaw marks (int): " + rawMarks);

        // Useful wrapper methods
        System.out.println("\n--- Utility Methods ---");
        System.out.println("Parse string to int: " + Integer.parseInt("42"));
        System.out.println("Parse string to double: " + Double.parseDouble("3.14"));
        System.out.println("Int MAX: " + Integer.MAX_VALUE);
        System.out.println("Int MIN: " + Integer.MIN_VALUE);
        System.out.println("Double MAX: " + Double.MAX_VALUE);

        // Convert int to binary/hex/octal strings
        System.out.println("\n42 in binary: " + Integer.toBinaryString(42));
        System.out.println("42 in hex: " + Integer.toHexString(42));
        System.out.println("42 in octal: " + Integer.toOctalString(42));
    }
}
```

**Autoboxing** automatically wraps primitives in their wrapper objects: `Integer marks = 85` converts int 85 to an Integer object. **Unboxing** reverses this: `int rawMarks = marks` extracts the int value. Wrapper classes provide useful static methods like `parseInt()` for converting strings to numbers, and constants like `MAX_VALUE` for the type's range. The `toBinaryString()` and `toHexString()` methods are helpful for understanding number representations.

**Output:**

```
Marks: 85
Percentage: 87.5
Grade: A
Passed: true

Raw marks (int): 85

--- Utility Methods ---
Parse string to int: 42
Parse string to double: 3.14
Int MAX: 2147483647
Int MIN: -2147483648
Double MAX: 1.7976931348623157E308

42 in binary: 101010
42 in hex: 2a
42 in octal: 52
```

### Type Ranges and Overflow

```java
public class TypeRanges {
    public static void main(String[] args) {
        System.out.println("=== Primitive Type Ranges ===");
        System.out.println("byte:    " + Byte.MIN_VALUE + " to " + Byte.MAX_VALUE);
        System.out.println("short:   " + Short.MIN_VALUE + " to " + Short.MAX_VALUE);
        System.out.println("int:     " + Integer.MIN_VALUE + " to " + Integer.MAX_VALUE);
        System.out.println("long:    " + Long.MIN_VALUE + " to " + Long.MAX_VALUE);
        System.out.println("float:   " + Float.MIN_VALUE + " to " + Float.MAX_VALUE);
        System.out.println("double:  " + Double.MIN_VALUE + " to " + Double.MAX_VALUE);

        // Integer overflow demonstration
        int maxInt = Integer.MAX_VALUE;
        System.out.println("\n--- Integer Overflow ---");
        System.out.println("Max int: " + maxInt);
        System.out.println("Max int + 1: " + (maxInt + 1));  // Wraps to MIN_VALUE!

        byte maxByte = 127;
        System.out.println("\nMax byte: " + maxByte);
        byte overflowed = (byte)(maxByte + 1);
        System.out.println("Max byte + 1: " + overflowed);    // Wraps to -128!

        // Float precision loss
        System.out.println("\n--- Precision ---");
        float f = 1.23456789f;
        double d = 1.23456789;
        System.out.println("float:  " + f);   // Loses precision after ~7 digits
        System.out.println("double: " + d);   // Precise to ~15 digits
    }
}
```

Each wrapper class provides `MIN_VALUE` and `MAX_VALUE` constants showing the type's range. **Integer overflow** is a critical concept: when `Integer.MAX_VALUE` (2,147,483,647) has 1 added, it wraps around to `Integer.MIN_VALUE` (-2,147,483,648). This is because Java uses two's complement binary representation. Similarly, byte 127 + 1 wraps to -128. Float has only ~7 decimal digits of precision, while double has ~15. This precision difference matters in financial and scientific calculations.

**Output:**

```
=== Primitive Type Ranges ===
byte:    -128 to 127
short:   -32768 to 32767
int:     -2147483648 to 2147483647
long:    -9223372036854775808 to 9223372036854775807
float:   1.4E-45 to 3.4028235E38
double:  4.9E-324 to 1.7976931348623157E308

--- Integer Overflow ---
Max int: 2147483647
Max int + 1: -2147483648

Max byte: 127
Max byte + 1: -128

--- Precision ---
float:  1.2345679
double: 1.23456789
```

## Common Mistakes

### Missing L Suffix for Long Literals

**Wrong:**

```
long worldPopulation = 8000000000; // Error!
```

error: integer number too large
        long worldPopulation = 8000000000;

**Correct:**

```
long worldPopulation = 8000000000L; // Add L suffix
```

Without the `L` suffix, Java treats `8000000000` as an `int` literal. Since this value exceeds `Integer.MAX_VALUE` (about 2.1 billion), the compiler reports an error. Adding `L` tells the compiler to treat it as a `long` literal. Always use uppercase `L`; lowercase `l` is legal but looks like the digit `1`.

### Missing f Suffix for Float Literals

**Wrong:**

```
float temperature = 36.6; // Error!
```

error: incompatible types: possible lossy conversion from double to float

**Correct:**

```
float temperature = 36.6f; // Add f suffix
// Or use double:
double temperature = 36.6;  // No suffix needed for double
```

Decimal literals without a suffix are `double` by default. Assigning a double to a float variable is a narrowing conversion that could lose precision, so the compiler blocks it. Adding `f` makes the literal a float. The better practice is to use `double` unless you have a specific reason for float.

### Using Uninitialized Local Variables

**Wrong:**

```
public static void main(String[] args) {
    int marks;
    System.out.println(marks); // Error!
}
```

error: variable marks might not have been initialized

**Correct:**

```
public static void main(String[] args) {
    int marks = 0;
    System.out.println(marks); // Works: 0
}
```

Local variables (declared inside methods) do NOT get default values in Java. You must initialize them before use. This is different from instance variables (class fields), which automatically get default values (0 for numbers, false for boolean, null for references). The compiler catches this error at compile time.

### Thinking Narrowing Cast Rounds Instead of Truncates

**Wrong:**

```
double price = 99.99;
int roundedPrice = (int) price;
System.out.println(roundedPrice); // Student expects 100
```

No compiler error, but output is 99, not 100. Casting truncates, it does not round.

**Correct:**

```
double price = 99.99;
int roundedPrice = (int) Math.round(price);
System.out.println(roundedPrice); // Correctly rounds to 100
```

Narrowing cast from double to int **truncates** the decimal part (removes everything after the decimal point). It does NOT round to the nearest integer. `(int) 99.99` gives 99, not 100. To round, use `Math.round()` which returns a long for double input, then cast to int if needed.

### NullPointerException from Unboxing Null

**Wrong:**

```
Integer marks = null;
int rawMarks = marks; // NullPointerException!
```

Exception in thread "main" java.lang.NullPointerException

**Correct:**

```
Integer marks = null;
if (marks != null) {
    int rawMarks = marks;
    System.out.println(rawMarks);
} else {
    System.out.println("Marks not available");
}
```

Unboxing a `null` wrapper object to a primitive causes a `NullPointerException` at runtime. The compiler does not catch this. Always check for null before unboxing. This is a common source of production bugs, especially when wrapper types are returned from collections or database queries.

## Summary

- Java has 8 primitive types: byte (1B), short (2B), int (4B), long (8B), float (4B), double (8B), char (2B), boolean (~1 bit). int and double are the most commonly used.
- Long literals need L suffix (100L), float literals need f suffix (3.14f). Without suffixes, integer literals are int and decimal literals are double.
- Reference types (String, arrays, objects) store memory addresses, not values directly. Their default value is null. Calling methods on null throws NullPointerException.
- Widening casting (smaller to larger type) happens automatically: byte -> short -> int -> long -> float -> double. No data is lost.
- Narrowing casting (larger to smaller type) requires explicit cast: (int) 9.99 gives 9 (truncates, does NOT round). Integer overflow wraps around.
- Local variables must be initialized before use. Instance variables (class fields) get default values: 0 for numbers, false for boolean, null for references.
- The var keyword (Java 10+) allows type inference for local variables: var name = "Aarav" infers String. The variable is still statically typed.
- The final keyword creates constants: final double PI = 3.14159. Constants cannot be reassigned and use UPPER_SNAKE_CASE.
- Wrapper classes (Integer, Double, etc.) wrap primitives as objects for use in collections. Autoboxing/unboxing converts between them automatically.
- Integer.MAX_VALUE + 1 wraps to Integer.MIN_VALUE (overflow). Float has ~7 digits precision, double has ~15. Use double for financial and precise calculations.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/variables-and-data-types/*
*Practice questions: https://learn.modernagecoders.com/resources/java/variables-and-data-types/practice/*
