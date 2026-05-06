---
title: "Practice: Variables and Data Types in Java"
description: "62 practice problems for Variables and Data Types in Java in Java"
slug: variables-and-data-types-practice
canonical: https://learn.modernagecoders.com/resources/java/variables-and-data-types/practice
category: "Java"
---
# Practice: Variables and Data Types in Java

**Total questions:** 62

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
int x = 10;
System.out.println(x);
```

*Hint:* Simple variable declaration and print.

**Answer:** `10`

An int variable `x` is declared and initialized to 10. `println` prints its value: 10.

### Q2. [Easy] What is the output?

```
double price = 99.99;
System.out.println(price);
```

*Hint:* double stores decimal numbers.

**Answer:** `99.99`

A double variable stores the decimal value 99.99 with full precision. Double is the default type for decimal literals.

### Q3. [Easy] What is the output?

```
char ch = 'Z';
System.out.println(ch);
```

*Hint:* char stores a single character in single quotes.

**Answer:** `Z`

A char variable stores a single character. Single quotes are used for char literals in Java. Double quotes are for Strings.

### Q4. [Easy] What is the output?

```
boolean isJavaFun = true;
System.out.println(isJavaFun);
```

*Hint:* boolean can only be true or false.

**Answer:** `true`

A boolean variable stores either `true` or `false`. Unlike C/C++, Java's boolean is not numeric; you cannot use 0 or 1 as boolean values.

### Q5. [Easy] What is the output?

```
int a = 10;
double b = a;
System.out.println(b);
```

*Hint:* int to double is widening (implicit) casting.

**Answer:** `10.0`

Assigning an int to a double is widening (implicit) casting. The int value 10 is automatically converted to the double value 10.0. No explicit cast is needed.

### Q6. [Medium] What is the output?

```
double x = 9.78;
int y = (int) x;
System.out.println(y);
```

*Hint:* Narrowing cast truncates, does NOT round.

**Answer:** `9`

Casting double to int **truncates** the decimal part. `(int) 9.78` removes .78 and gives 9. It does NOT round to 10. This is a commonly tested concept in interviews.

### Q7. [Medium] What is the output?

```
int a = Integer.MAX_VALUE;
System.out.println(a);
System.out.println(a + 1);
```

*Hint:* What happens when you exceed the maximum value of int?

**Answer:** `2147483647`
`-2147483648`

Integer.MAX_VALUE is 2,147,483,647. Adding 1 causes **integer overflow**: the value wraps around to Integer.MIN_VALUE (-2,147,483,648). Java does not throw an error for integer overflow; it silently wraps. This is a critical concept for interviews.

### Q8. [Medium] What is the output?

```
char ch = 'A';
System.out.println(ch + 1);
System.out.println((char)(ch + 1));
```

*Hint:* char is a numeric type. 'A' is 65 in Unicode.

**Answer:** `66`
`B`

`ch + 1` adds 1 to the Unicode value of 'A' (65), giving 66 (an int). Printing an int gives the number 66. Casting `(char)(ch + 1)` converts 66 back to a char, which is 'B'.

### Q9. [Medium] What is the output?

```
byte b = 127;
b = (byte)(b + 1);
System.out.println(b);
```

*Hint:* byte range is -128 to 127. What happens at 128?

**Answer:** `-128`

byte has a maximum value of 127. Adding 1 gives 128, which overflows to -128 when cast to byte. In binary: 128 is 10000000, which is -128 in two's complement for a signed byte.

### Q10. [Medium] What is the difference between int and Integer in Java?

*Hint:* One is a primitive, the other is a wrapper class.

**Answer:** `int` is a primitive type that stores a 32-bit integer value directly. `Integer` is a wrapper class that wraps an int in an object. `int` cannot be null, cannot be used in collections, and has no methods. `Integer` can be null, can be stored in collections (like ArrayList), and provides utility methods like `parseInt()`, `toBinaryString()`, and constants like `MAX_VALUE`.

Autoboxing/unboxing allows seamless conversion: `Integer x = 5;` (autoboxing) and `int y = x;` (unboxing). But unboxing null causes NullPointerException. Use int for performance-critical code and Integer when you need nullability or collection storage.

### Q11. [Hard] What is the output?

```
float f = 1.0f / 3;
System.out.println(f);
double d = 1.0 / 3;
System.out.println(d);
```

*Hint:* float has ~7 digits precision, double has ~15.

**Answer:** `0.33333334`
`0.3333333333333333`

Float stores about 7 significant decimal digits, so `1.0f/3` shows precision up to ~7 digits. Double stores about 15 significant decimal digits, giving a more precise result. This demonstrates why double is preferred over float for most calculations.

### Q12. [Hard] What is the output?

```
int x = 5;
int y = 2;
System.out.println(x / y);
System.out.println((double) x / y);
System.out.println(x / (double) y);
```

*Hint:* Integer division truncates. Casting one operand to double forces floating-point division.

**Answer:** `2`
`2.5`
`2.5`

`5 / 2` is integer division (both operands are int), giving 2 (truncated). `(double) 5 / 2` casts 5 to 5.0 first, then divides (double / int -> double), giving 2.5. `5 / (double) 2` casts 2 to 2.0 first, same result. Casting either operand to double forces floating-point division.

### Q13. [Hard] What is the output?

```
byte a = 50;
byte b = 60;
// byte c = a + b;  // This would cause an error!
int c = a + b;
System.out.println(c);
```

*Hint:* In Java, byte + byte is promoted to int.

**Answer:** `110`

In Java, arithmetic operations on byte, short, or char values automatically promote them to `int`. So `a + b` produces an `int`, not a `byte`. Assigning the int result to a byte variable without explicit casting causes a compiler error. You must use `int c = a + b;` or `byte c = (byte)(a + b);`.

### Q14. [Hard] Why can you write `byte b = 50;` but not `byte b = 50 + 50;`?

*Hint:* The compiler can verify 50 fits in a byte at compile time, but 50 + 50 is computed at runtime.

**Answer:** `byte b = 50;` works because the compiler can verify at compile time that 50 fits within byte's range (-128 to 127). `byte b = 50 + 50;` fails because `50 + 50` is evaluated as an `int` expression (100), and assigning an int to a byte requires explicit casting even though 100 fits in a byte. The compiler does not evaluate arithmetic expressions to check if the result fits.

Java's compiler performs constant folding for direct literal assignments but treats arithmetic expressions as their promoted type. To fix: `byte b = (byte)(50 + 50);` or `final byte x = 50; byte b = x + x;` -- actually, the latter also fails. The compiler only allows direct literal assignment without casting for byte/short.

### Q15. [Hard] What is the output?

```
Integer a = 127;
Integer b = 127;
Integer c = 128;
Integer d = 128;
System.out.println(a == b);
System.out.println(c == d);
```

*Hint:* Java caches Integer objects for values -128 to 127.

**Answer:** `true`
`false`

Java caches Integer objects for values between -128 and 127 (Integer cache). So `a` and `b` point to the same cached object (`==` returns true). For 128 (outside cache range), new objects are created, so `c` and `d` are different objects (`==` returns false). Always use `.equals()` to compare wrapper objects by value.

### Q16. [Medium] What is the difference between `var x = 10;` and `int x = 10;` in Java?

*Hint:* var is type inference, not dynamic typing.

**Answer:** Both produce the same result: a variable `x` of type `int` with value 10. With `int x = 10`, you explicitly state the type. With `var x = 10`, the compiler **infers** the type as int from the assigned value. After declaration, both are identically `int`. `var` is not dynamic typing; you cannot later assign a String to `x`.

`var` (Java 10+) is purely a compile-time convenience. The compiled bytecode is identical in both cases. `var` can only be used for local variables with an initializer. It cannot be used for class fields, method parameters, return types, or when there is no initialization.

### Q17. [Easy] What is the output?

```
final int MAX = 100;
System.out.println(MAX);
// MAX = 200; // Would this work?
```

*Hint:* final makes a variable constant.

**Answer:** `100`
The commented line `MAX = 200` would cause a compiler error: cannot assign a value to final variable MAX.

The `final` keyword makes a variable constant. Once assigned, its value cannot be changed. Attempting to reassign a final variable causes the compiler error: `cannot assign a value to final variable`. This is Java's way of creating constants.

## Mixed Questions

### Q1. [Easy] Declare variables for a student's name (String), age (int), CGPA (double), grade (char), and placement status (boolean). Initialize them with sample values and print each.

*Hint:* Use appropriate types for each value.

**Answer:** ```
public class StudentInfo {
    public static void main(String[] args) {
        String name = "Rohan";
        int age = 21;
        double cgpa = 8.45;
        char grade = 'A';
        boolean isPlaced = true;
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("CGPA: " + cgpa);
        System.out.println("Grade: " + grade);
        System.out.println("Placed: " + isPlaced);
    }
}
```

Each variable uses the most appropriate type: String for text, int for whole numbers, double for decimals, char for a single character, boolean for true/false.

### Q2. [Medium] What is the output?

```
int a = 5, b = 2;
System.out.println(a / b);
System.out.println(a % b);
System.out.println((double) a / b);
```

*Hint:* Integer division truncates. Modulus gives remainder. Casting forces float division.

**Answer:** `2`
`1`
`2.5`

`5/2` = 2 (integer division truncates). `5%2` = 1 (remainder). `(double)5/2` = 2.5 (casting one operand to double forces floating-point division).

### Q3. [Medium] Write a program that demonstrates widening casting by storing a byte value into short, int, long, float, and double variables, printing each.

*Hint:* byte -> short -> int -> long -> float -> double is the widening chain.

**Answer:** ```
public class WideningDemo {
    public static void main(String[] args) {
        byte b = 42;
        short s = b;
        int i = s;
        long l = i;
        float f = l;
        double d = f;
        System.out.println("byte: " + b);
        System.out.println("short: " + s);
        System.out.println("int: " + i);
        System.out.println("long: " + l);
        System.out.println("float: " + f);
        System.out.println("double: " + d);
    }
}
```

Each assignment is a widening conversion that happens automatically. The value 42 is preserved through all conversions. No explicit casts are needed because widening never loses data.

### Q4. [Medium] What is the output?

```
String s1 = "Hello";
String s2 = s1;
s1 = "World";
System.out.println(s1);
System.out.println(s2);
```

*Hint:* Strings are immutable. Reassigning s1 does not change s2.

**Answer:** `World`
`Hello`

`s2 = s1` makes s2 point to the same String object as s1 ("Hello"). When `s1 = "World"` is executed, s1 now points to a new String object ("World"), but s2 still points to the original "Hello". String reassignment creates a new reference, it does not modify the existing object.

### Q5. [Hard] What is the output?

```
int i = 10;
float f = i;
int j = (int) f;
System.out.println(i == j);
System.out.println(f);

int big = 16777217;
float bigF = big;
int bigBack = (int) bigF;
System.out.println(big == bigBack);
```

*Hint:* float has limited precision (~7 digits). Large int values may lose precision when converted to float.

**Answer:** `true`
`10.0`
`false`

For small values: 10 -> 10.0f -> 10, no precision loss, so `i == j` is true. For large values: 16777217 is beyond float's precision (~7 digits). Converting to float rounds it to 16777216.0f. Converting back gives 16777216, not 16777217. So `big == bigBack` is false. This shows that widening from int to float can lose precision for large values.

### Q6. [Hard] Explain why `byte + byte` gives an `int` in Java. What design decision does this reflect?

*Hint:* Think about integer arithmetic and overflow.

**Answer:** In Java, all integer arithmetic on types smaller than int (byte, short, char) automatically promotes operands to `int` before the operation. This is called **integer promotion**. The result is always at least an `int`. This prevents overflow during intermediate calculations: `byte a = 100; byte b = 100;` -- their sum (200) exceeds byte range but fits in int.

This design decision prioritizes correctness over convenience. Without promotion, `100 + 100` in byte arithmetic would overflow to -56, which would be a subtle bug. By promoting to int, the correct result (200) is preserved. The tradeoff is that you need explicit casts to assign the result back to a smaller type.

### Q7. [Hard] What is the output?

```
Integer x = null;
System.out.println(x);
// int y = x;  // What would happen?
System.out.println("Done");
```

*Hint:* println(null) works, but unboxing null to int throws an exception.

**Answer:** `null`
`Done`
If the commented line were uncommented, it would throw `NullPointerException` at runtime because unboxing null to int is illegal.

`println(x)` works because println handles null references by printing "null". But `int y = x` would attempt to unbox the Integer (null) to an int primitive, which throws NullPointerException. This is a common production bug when wrapper types returned from maps or databases are null.

### Q8. [Hard] Write a program that takes an ASCII value (int) and prints the corresponding character, and vice versa. Demonstrate with values 65, 97, and characters 'Z', 'z'.

*Hint:* Cast int to char and char to int.

**Answer:** ```
public class AsciiConverter {
    public static void main(String[] args) {
        System.out.println("Int -> Char:");
        System.out.println("65 -> " + (char) 65);
        System.out.println("97 -> " + (char) 97);
        System.out.println("\nChar -> Int:");
        System.out.println("'Z' -> " + (int) 'Z');
        System.out.println("'z' -> " + (int) 'z');
    }
}
```

Casting int to char converts the number to its corresponding Unicode character (65='A', 97='a'). Casting char to int gives the Unicode code point ('Z'=90, 'z'=122). This relationship between char and int is fundamental in Java and appears frequently in string manipulation problems.

### Q9. [Medium] What is the output?

```
var name = "Aarav";
var age = 20;
var gpa = 8.5;
System.out.println(name.getClass().getSimpleName());
System.out.println(((Object) age).getClass().getSimpleName());
System.out.println(((Object) gpa).getClass().getSimpleName());
```

*Hint:* var infers the type from the value. getClass() shows the runtime type.

**Answer:** `String`
`Integer`
`Double`

`var` infers the types: "Aarav" is String, 20 is int (boxed to Integer for getClass()), 8.5 is double (boxed to Double). The `getClass().getSimpleName()` method reveals the runtime type. Primitives must be boxed to Object to call getClass().

### Q10. [Medium] What are the default values for class-level fields of type int, double, boolean, char, and String?

*Hint:* Only class fields get defaults. Local variables do not.

**Answer:** Default values for class-level fields: `int` = 0, `double` = 0.0, `boolean` = false, `char` = '\u0000' (null character), `String` = null. Local variables inside methods do NOT get default values and must be initialized before use.

This distinction between class fields and local variables is important. The JVM initializes class fields when the object is created, but local variables are the programmer's responsibility. Forgetting to initialize a local variable causes a compile-time error in Java (unlike C++ where it would be undefined behavior).

### Q11. [Easy] What is the output?

```
int x = 10;
int y = 3;
System.out.println(x / y);
System.out.println(x % y);
```

*Hint:* Integer division and modulus.

**Answer:** `3`
`1`

`10 / 3` = 3 (integer division truncates the decimal). `10 % 3` = 1 (remainder: 10 = 3*3 + 1).

## Multiple Choice Questions

### Q1. [Easy] How many primitive data types does Java have?

**C is correct.** Java has exactly 8 primitive types: byte, short, int, long, float, double, char, boolean.

### Q2. [Easy] What is the default value of a boolean instance variable?

**B is correct.** The default value of a boolean instance variable is `false`. Unlike C/C++, Java's boolean is not numeric, so 0 (C) is incorrect. null (D) is for reference types.

### Q3. [Easy] Which data type is used to store a single character in Java?

**B is correct.** `char` stores a single Unicode character (e.g., `char g = 'A';`). String (A) stores multiple characters. byte (C) stores a number. Character (D) is the wrapper class for char.

### Q4. [Easy] What suffix is required for a long literal in Java?

**A is correct.** Long literals require the `L` suffix (uppercase recommended to avoid confusion with digit 1). `d/D` is for double. `f/F` is for float.

### Q5. [Easy] What is the size of an int in Java?

**B is correct.** An int is always 4 bytes (32 bits) in Java, regardless of platform. Unlike C/C++ where int size is platform-dependent, Java guarantees fixed sizes for all primitive types.

### Q6. [Medium] What is the output of: System.out.println((int) 7.9)?

**A is correct.** Narrowing cast from double to int **truncates** the decimal part. `(int) 7.9` gives 7, not 8. Casting does NOT round; it simply removes the decimal portion.

### Q7. [Medium] Which of these is a valid float literal?

**D is correct.** Both `3.14f` and `3.14F` are valid float literals. `3.14` (A) is a double literal. The f/F suffix is required to denote a float literal.

### Q8. [Medium] What is the result of: Integer.MAX_VALUE + 1?

**C is correct.** Integer overflow wraps around. MAX_VALUE (2147483647) + 1 wraps to MIN_VALUE (-2147483648). Java does not throw an error for integer overflow; it uses two's complement wraparound.

### Q9. [Medium] What is the wrapper class for the char primitive type?

**B is correct.** The wrapper class for `char` is `Character`. Note that it is not `Char` (A) -- the full word is used. String (D) is for text, not a wrapper for char.

### Q10. [Medium] Which line will cause a compiler error?
Line 1: int x = 10;
Line 2: long y = x;
Line 3: byte z = x;

**C is correct.** Line 3 attempts to assign an int to a byte without explicit casting (narrowing conversion). This requires: `byte z = (byte) x;`. Line 2 is fine because int to long is widening (automatic).

### Q11. [Medium] What is the default value of a String instance variable?

**C is correct.** String is a reference type. The default value of all reference type instance variables is `null`. An empty string "" (A) is an actual String object; null means no object at all.

### Q12. [Hard] What is the output of: System.out.println((byte) 130)?

**B is correct.** byte range is -128 to 127. Casting 130 to byte: 130 - 256 = -126. In binary, 130 is 10000010, which in a signed byte (two's complement) is -126. This overflow behavior is a common interview question.

### Q13. [Hard] Which statement about Java's var keyword is FALSE?

**B is the FALSE statement.** `var` does NOT make Java dynamically typed. It is compile-time type inference -- the compiler determines the type from the initializer, and the variable is statically typed thereafter. You cannot assign a different type later.

### Q14. [Hard] What happens when you unbox a null Integer to int?

**D is correct.** Unboxing null throws `NullPointerException` at runtime. The compiler does not catch this error. `Integer x = null; int y = x;` compiles fine but throws NPE when executed. This is a common source of production bugs.

### Q15. [Hard] Why does `Integer a = 127; Integer b = 127; System.out.println(a == b);` print true, but with 128 it prints false?

**B is correct.** Java maintains an **Integer cache** for values between -128 and 127. For these values, autoboxing returns the same cached object, so `==` (which compares references) returns true. For values outside this range, new objects are created, so `==` returns false. Use `.equals()` to compare Integer values reliably.

### Q16. [Hard] What is the output of: `char c = 65; System.out.println(c);`?

**B is correct.** The int value 65 is assigned to a char variable. Since 65 is within char's range and is the Unicode value for 'A', `c` stores 'A'. When printed as a char, it shows `A`, not 65. To print the number, cast to int: `(int) c`.

### Q17. [Easy] Which of the following is NOT a valid variable name in Java?

**C is correct.** Variable names in Java cannot start with a digit. `2ndPlace` starts with '2', which is illegal. Names can start with a letter, underscore (_), or dollar sign ($). So `_count`, `$price`, and `firstName` are all valid.

### Q18. [Medium] What is the output of: `System.out.println(5 / 2);`?

**B is correct.** Both 5 and 2 are int literals. Integer division in Java truncates the decimal part. `5 / 2` = 2 (not 2.5). To get 2.5, cast one operand: `(double) 5 / 2`.

### Q19. [Medium] What keyword makes a variable's value unchangeable in Java?

**C is correct.** The `final` keyword prevents reassignment. `const` (A) is a reserved word in Java but not used. `static` (B) means class-level, not constant. `immutable` (D) is not a Java keyword.

### Q20. [Hard] In the widening chain byte->short->int->long->float->double, which conversion can lose precision?

**B is correct.** Long has 64-bit precision for integers, but float has only ~23 bits of mantissa (~7 decimal digits). Converting a large long to float can lose precision. For example, `(float) 16777217L` gives 16777216.0f. Similarly, int to float can lose precision for large values. All other conversions in the options preserve full precision.

## Coding Challenges

### Challenge 1. Data Type Explorer

**Difficulty:** Easy

Write a program that declares one variable of each of the 8 primitive types, initializes them, and prints each with its type name. Also print the size in bytes using the wrapper class SIZE constant.

**Constraints:**

- Use Byte.SIZE, Short.SIZE, etc. (these give size in bits, divide by 8 for bytes).

**Sample input:**

```
(No input required)
```

**Sample output:**

```
byte value: 42 (size: 1 byte)
short value: 2026 (size: 2 bytes)
int value: 100000 (size: 4 bytes)
long value: 9876543210 (size: 8 bytes)
float value: 3.14 (size: 4 bytes)
double value: 2.718281828 (size: 8 bytes)
char value: A (size: 2 bytes)
boolean value: true
```

**Solution:**

```java
public class DataTypeExplorer {
    public static void main(String[] args) {
        byte b = 42;
        short s = 2026;
        int i = 100000;
        long l = 9876543210L;
        float f = 3.14f;
        double d = 2.718281828;
        char c = 'A';
        boolean bool = true;

        System.out.println("byte value: " + b + " (size: " + Byte.SIZE/8 + " byte)");
        System.out.println("short value: " + s + " (size: " + Short.SIZE/8 + " bytes)");
        System.out.println("int value: " + i + " (size: " + Integer.SIZE/8 + " bytes)");
        System.out.println("long value: " + l + " (size: " + Long.SIZE/8 + " bytes)");
        System.out.println("float value: " + f + " (size: " + Float.SIZE/8 + " bytes)");
        System.out.println("double value: " + d + " (size: " + Double.SIZE/8 + " bytes)");
        System.out.println("char value: " + c + " (size: " + Character.SIZE/8 + " bytes)");
        System.out.println("boolean value: " + bool);
    }
}
```

### Challenge 2. Temperature Converter

**Difficulty:** Easy

Write a program that converts a temperature from Celsius to Fahrenheit and Kelvin. Use double for precision. Formula: F = C * 9/5 + 32, K = C + 273.15. Test with 37.5 degrees Celsius.

**Constraints:**

- Use double for all variables. Print with 2 decimal places using printf.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Celsius: 37.50
Fahrenheit: 99.50
Kelvin: 310.65
```

**Solution:**

```java
public class TempConverter {
    public static void main(String[] args) {
        double celsius = 37.5;
        double fahrenheit = celsius * 9.0 / 5 + 32;
        double kelvin = celsius + 273.15;
        System.out.printf("Celsius: %.2f%n", celsius);
        System.out.printf("Fahrenheit: %.2f%n", fahrenheit);
        System.out.printf("Kelvin: %.2f%n", kelvin);
    }
}
```

### Challenge 3. Casting Chain Demonstrator

**Difficulty:** Medium

Write a program that starts with a double value of 99.99 and demonstrates the effect of casting it to float, long, int, short, and byte. Print each result to show how data is lost at each step.

**Constraints:**

- Use explicit narrowing casts. Show comments explaining what happens at each step.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Original double: 99.99
As float: 99.99
As long: 99
As int: 99
As short: 99
As byte: 99
```

**Solution:**

```java
public class CastingChain {
    public static void main(String[] args) {
        double d = 99.99;
        float f = (float) d;
        long l = (long) d;
        int i = (int) d;
        short s = (short) d;
        byte b = (byte) d;
        System.out.println("Original double: " + d);
        System.out.println("As float: " + f);
        System.out.println("As long: " + l + " (decimal truncated)");
        System.out.println("As int: " + i + " (decimal truncated)");
        System.out.println("As short: " + s);
        System.out.println("As byte: " + b);
        System.out.println("\nNow with 999.99:");
        d = 999.99;
        System.out.println("double: " + d);
        System.out.println("As byte: " + (byte) d + " (overflow!)");
    }
}
```

### Challenge 4. Student Grade Calculator

**Difficulty:** Medium

Aarav has marks in 5 subjects: 85, 92, 78, 95, 88. Write a program that calculates total marks, percentage (double), average (double), and assigns a grade character: A+ (>=90), A (>=80), B+ (>=70), B (>=60), C (<60). Use type casting where needed.

**Constraints:**

- Use int for marks and total. Use double for percentage and average. Use char for grade. Use explicit casting for division.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Marks: 85 92 78 95 88
Total: 438
Percentage: 87.60%
Average: 87.60
Grade: A
```

**Solution:**

```java
public class GradeCalculator {
    public static void main(String[] args) {
        int m1 = 85, m2 = 92, m3 = 78, m4 = 95, m5 = 88;
        int total = m1 + m2 + m3 + m4 + m5;
        double percentage = (double) total / 5;
        double average = percentage;
        char grade;
        if (percentage >= 90) grade = 'O';
        else if (percentage >= 80) grade = 'A';
        else if (percentage >= 70) grade = 'B';
        else if (percentage >= 60) grade = 'C';
        else grade = 'F';
        System.out.println("Marks: " + m1 + " " + m2 + " " + m3 + " " + m4 + " " + m5);
        System.out.println("Total: " + total);
        System.out.printf("Percentage: %.2f%%%n", percentage);
        System.out.printf("Average: %.2f%n", average);
        System.out.println("Grade: " + grade);
    }
}
```

### Challenge 5. ASCII Table Generator

**Difficulty:** Medium

Write a program that prints the ASCII table for characters A-Z and a-z, showing the character and its integer value. Use char-to-int casting.

**Constraints:**

- Use a for loop with char variable. Cast char to int for the numeric value.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
=== Uppercase Letters ===
A=65 B=66 C=67 ... Z=90
=== Lowercase Letters ===
a=97 b=98 c=99 ... z=122
```

**Solution:**

```java
public class AsciiTable {
    public static void main(String[] args) {
        System.out.println("=== Uppercase Letters ===");
        for (char c = 'A'; c <= 'Z'; c++) {
            System.out.print(c + "=" + (int) c + " ");
            if ((c - 'A' + 1) % 10 == 0) System.out.println();
        }
        System.out.println("\n\n=== Lowercase Letters ===");
        for (char c = 'a'; c <= 'z'; c++) {
            System.out.print(c + "=" + (int) c + " ");
            if ((c - 'a' + 1) % 10 == 0) System.out.println();
        }
        System.out.println();
    }
}
```

### Challenge 6. Integer Overflow Detector

**Difficulty:** Hard

Write a program that demonstrates integer overflow for byte, short, and int by adding 1 to their MAX_VALUE. Also show what happens when you multiply two large ints (100000 * 100000) and compare with the long result.

**Constraints:**

- Use wrapper class MAX_VALUE constants. Show both the overflowed and correct results.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
byte MAX + 1: 127 + 1 = -128
short MAX + 1: 32767 + 1 = -32768
int MAX + 1: 2147483647 + 1 = -2147483648

int multiplication: 100000 * 100000 = 1410065408 (WRONG - overflow!)
long multiplication: 100000 * 100000 = 10000000000 (correct)
```

**Solution:**

```java
public class OverflowDetector {
    public static void main(String[] args) {
        byte maxByte = Byte.MAX_VALUE;
        short maxShort = Short.MAX_VALUE;
        int maxInt = Integer.MAX_VALUE;
        System.out.println("byte MAX + 1: " + maxByte + " + 1 = " + (byte)(maxByte + 1));
        System.out.println("short MAX + 1: " + maxShort + " + 1 = " + (short)(maxShort + 1));
        System.out.println("int MAX + 1: " + maxInt + " + 1 = " + (maxInt + 1));
        System.out.println();
        int intResult = 100000 * 100000;
        long longResult = 100000L * 100000;
        System.out.println("int multiplication: 100000 * 100000 = " + intResult + " (WRONG - overflow!)");
        System.out.println("long multiplication: 100000 * 100000 = " + longResult + " (correct)");
    }
}
```

### Challenge 7. Wrapper Class Utility Showcase

**Difficulty:** Hard

Write a program that demonstrates at least 8 useful methods/constants from wrapper classes: Integer.parseInt, Double.parseDouble, Integer.MAX_VALUE, Integer.MIN_VALUE, Integer.toBinaryString, Integer.toHexString, Character.isLetter, Character.isDigit, Character.toUpperCase.

**Constraints:**

- Demonstrate each method clearly with labeled output.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Parsing: "42" -> 42, "3.14" -> 3.14
Ranges: int [-2147483648, 2147483647]
Conversions: 255 -> binary: 11111111, hex: ff
Char checks: 'A' isLetter: true, '5' isDigit: true
Char conversion: 'a' toUpperCase: 'A'
```

**Solution:**

```java
public class WrapperUtility {
    public static void main(String[] args) {
        System.out.println("=== Parsing ===");
        int parsed = Integer.parseInt("42");
        double parsedD = Double.parseDouble("3.14");
        System.out.println("\"42\" -> " + parsed);
        System.out.println("\"3.14\" -> " + parsedD);
        System.out.println("\n=== Ranges ===");
        System.out.println("int: [" + Integer.MIN_VALUE + ", " + Integer.MAX_VALUE + "]");
        System.out.println("long: [" + Long.MIN_VALUE + ", " + Long.MAX_VALUE + "]");
        System.out.println("\n=== Number Conversions ===");
        System.out.println("255 binary: " + Integer.toBinaryString(255));
        System.out.println("255 hex: " + Integer.toHexString(255));
        System.out.println("255 octal: " + Integer.toOctalString(255));
        System.out.println("\n=== Character Utilities ===");
        System.out.println("'A' isLetter: " + Character.isLetter('A'));
        System.out.println("'5' isDigit: " + Character.isDigit('5'));
        System.out.println("'a' toUpperCase: " + Character.toUpperCase('a'));
        System.out.println("'Z' toLowerCase: " + Character.toLowerCase('Z'));
        System.out.println("' ' isWhitespace: " + Character.isWhitespace(' '));
    }
}
```

### Challenge 8. Precision Comparison

**Difficulty:** Hard

Write a program that demonstrates the precision difference between float and double by computing 1.0/3.0 and 2.0/3.0 in both types. Also show that 0.1 + 0.2 does not equal 0.3 in floating-point arithmetic. Explain why in comments.

**Constraints:**

- Show both float and double results. Demonstrate the 0.1 + 0.2 problem. Include comments explaining why.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
float 1/3: 0.33333334
double 1/3: 0.3333333333333333
float 2/3: 0.6666667
double 2/3: 0.6666666666666666

0.1 + 0.2 = 0.30000000000000004
0.1 + 0.2 == 0.3? false
```

**Solution:**

```java
public class PrecisionDemo {
    public static void main(String[] args) {
        // float has ~7 decimal digits precision
        float f1 = 1.0f / 3;
        float f2 = 2.0f / 3;
        // double has ~15 decimal digits precision
        double d1 = 1.0 / 3;
        double d2 = 2.0 / 3;
        System.out.println("float 1/3: " + f1);
        System.out.println("double 1/3: " + d1);
        System.out.println("float 2/3: " + f2);
        System.out.println("double 2/3: " + d2);
        // The 0.1 + 0.2 problem
        // 0.1 and 0.2 cannot be represented exactly in binary
        // floating-point, leading to tiny rounding errors
        System.out.println("\n0.1 + 0.2 = " + (0.1 + 0.2));
        System.out.println("0.1 + 0.2 == 0.3? " + (0.1 + 0.2 == 0.3));
        System.out.println("\nFor financial calculations, use BigDecimal.");
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/variables-and-data-types/*
