---
title: "Strings in Java - String Methods, StringBuilder, Immutability | Modern Age Coders"
description: "Learn Java strings including String class, immutability, String pool, == vs .equals(), StringBuilder, StringBuffer, and string formatting. Includes 65+ practice questions with output prediction and coding challenges."
slug: strings-in-java
canonical: https://learn.modernagecoders.com/resources/java/strings-in-java
category: "Java"
keywords: ["java strings", "string methods java", "StringBuilder java", "string immutability java", "java string pool", "java string comparison", "java string equals", "java string tutorial", "java StringBuilder vs StringBuffer", "java string formatting"]
---
# Strings in Java

**Difficulty:** Intermediate  
**Reading time:** 32 min  
**Chapter:** 11  
**Practice questions:** 65

## What Are Strings in Java?

A **String** in Java is an object that represents a sequence of characters. Unlike primitive data types such as `int` or `char`, strings in Java are objects of the `java.lang.String` class. This distinction is critical because it means strings have methods, can be passed as objects, and follow object-oriented rules including immutability.

Every Java program that prints output, reads user input, or processes text relies on strings. From storing a student's name to building SQL queries, from parsing JSON responses to formatting log messages, strings are the backbone of text processing in Java.

### Creating Strings

Java provides two primary ways to create strings:

**1. String Literal:** `String name = "Aarav";` — Created using double quotes. Java stores this in a special memory area called the **String Pool**. If another variable is assigned the same literal, Java reuses the existing object from the pool instead of creating a new one. This is memory-efficient.

**2. Using the `new` keyword:** `String name = new String("Aarav");` — Explicitly creates a new String object on the heap, bypassing the String Pool. Even if an identical string exists in the pool, a new object is created. This is rarely needed in practice.

Unlike Python and JavaScript, Java does not support single quotes for strings. Single quotes in Java are reserved for the `char` data type: `char ch = 'A';`.

## Why Are Strings Important in Java?

Strings are one of the most heavily tested topics in Java interviews and university exams. Here is why mastering them is non-negotiable for any serious Java developer:

### 1. Strings Are Everywhere in Java Applications

Every `System.out.println()` call involves a string. Every `Scanner.nextLine()` returns a string. Configuration files, database queries, API endpoints, file paths, error messages — all are strings. You cannot write a meaningful Java program without manipulating strings.

### 2. Immutability Is a Core Interview Concept

Java strings are immutable — once created, their content cannot be changed. This single property leads to dozens of interview questions about the String Pool, memory management, thread safety, and why `StringBuilder` exists. Understanding immutability is understanding Java's design philosophy.

### 3. The == vs .equals() Trap

One of the most common bugs in Java programs comes from using `==` instead of `.equals()` to compare strings. This distinction between reference equality and content equality is fundamental to Java and is tested in virtually every placement exam.

### 4. Performance-Critical String Operations

Concatenating strings in a loop using `+` creates a new object every iteration, leading to O(n^2) performance. Knowing when to use `StringBuilder` versus the `+` operator separates junior developers from those who understand Java internals.

### 5. Foundation for Collections, I/O, and Regex

Strings interact with almost every part of the Java ecosystem: they are keys in HashMaps, they are read from and written to files, they are matched against regular expressions, and they are serialized to JSON. Weak string skills create a bottleneck across all these areas.

## Detailed Explanation

### 1. String Immutability

In Java, strings are **immutable**. Once a String object is created, its character sequence cannot be modified. Every operation that appears to modify a string actually creates a new String object.

```
String s = "Hello";
s.toUpperCase(); // Returns "HELLO" but s is still "Hello"
s = s.toUpperCase(); // Now s points to the new "HELLO" object
```

Why is this important? Immutability provides three key benefits: (1) **Thread safety** — multiple threads can share the same String without synchronization. (2) **Security** — strings used as class names, file paths, or network addresses cannot be altered after creation. (3) **Hashcode caching** — since the content never changes, the hashcode can be computed once and reused, making strings efficient as HashMap keys.

### 2. The String Pool

Java maintains a special memory area called the **String Pool** (or String Intern Pool) within the heap. When you create a string using a literal, Java first checks if an identical string already exists in the pool. If it does, the new variable simply references the existing object. If not, a new object is created in the pool.

```
String a = "Hello";
String b = "Hello";
System.out.println(a == b); // true — same object in the pool
```

When you use `new String("Hello")`, Java creates a new object on the heap regardless of whether "Hello" exists in the pool. The pool object is still created (for the literal), but the variable points to the heap object.

```
String c = new String("Hello");
System.out.println(a == c); // false — different objects
System.out.println(a.equals(c)); // true — same content
```

The `intern()` method forces a string into the pool: `String d = c.intern();` After this, `a == d` would be `true`.

### 3. String Comparison: == vs .equals() vs .compareTo()

This is one of the most critical distinctions in Java:

**`==` (Reference Equality):** Checks whether two variables point to the exact same object in memory. It does NOT compare the content of the strings.

**`.equals()` (Content Equality):** Checks whether two strings contain the same sequence of characters. This is what you should use for string comparison in almost all cases.

**`.equalsIgnoreCase()`:** Same as `.equals()` but ignores case differences. `"Hello".equalsIgnoreCase("hello")` returns `true`.

**`.compareTo()` (Lexicographic Comparison):** Returns 0 if strings are equal, a negative value if the calling string comes before the argument, and a positive value if it comes after. Used for sorting.

```
"apple".compareTo("banana"); // negative (a comes before b)
"banana".compareTo("apple"); // positive (b comes after a)
"apple".compareTo("apple");  // 0 (equal)
```

### 4. Essential String Methods

The String class provides over 60 methods. Here are the ones you must know:

#### Length and Character Access

`length()` returns the number of characters. `charAt(int index)` returns the character at the given index (0-based). `toCharArray()` converts the string to a character array.

#### Searching

`indexOf(String str)` returns the index of the first occurrence, or -1 if not found. `lastIndexOf(String str)` returns the index of the last occurrence. `contains(CharSequence s)` returns true if the string contains the given sequence.

#### Extraction

`substring(int beginIndex)` returns a substring from the given index to the end. `substring(int beginIndex, int endIndex)` returns a substring from beginIndex (inclusive) to endIndex (exclusive).

#### Case Conversion

`toUpperCase()` and `toLowerCase()` return new strings with all characters converted to the respective case.

#### Trimming and Replacing

`trim()` removes leading and trailing whitespace. `replace(char oldChar, char newChar)` replaces all occurrences of a character. `replace(CharSequence target, CharSequence replacement)` replaces all occurrences of a substring.

#### Splitting and Joining

`split(String regex)` splits the string into an array based on a delimiter pattern. `String.join(CharSequence delimiter, CharSequence... elements)` joins multiple strings with a delimiter (Java 8+).

#### Checking Content

`startsWith(String prefix)` and `endsWith(String suffix)` check the beginning and end of a string. `isEmpty()` returns true if the string has length 0. `isBlank()` returns true if the string is empty or contains only whitespace (Java 11+).

#### Conversion

`String.valueOf(int i)` converts a primitive to a string. `toCharArray()` converts to a char array. `getBytes()` converts to a byte array.

### 5. StringBuilder — Mutable Strings

Since strings are immutable, repeated concatenation in a loop creates many temporary objects, leading to poor performance. `StringBuilder` solves this by providing a mutable character sequence.

```
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 5; i++) {
    sb.append("Item " + i + ", ");
}
String result = sb.toString();
```

Key StringBuilder methods: `append()` adds text at the end. `insert(int offset, String str)` inserts text at a position. `delete(int start, int end)` removes characters. `reverse()` reverses the sequence. `toString()` converts back to a String.

### 6. StringBuffer — Thread-Safe Mutable Strings

`StringBuffer` is identical to `StringBuilder` in functionality but all its methods are `synchronized`, making it thread-safe. The trade-off is slower performance due to synchronization overhead. Use `StringBuilder` in single-threaded contexts (which is most of the time) and `StringBuffer` only when multiple threads access the same mutable string.

### 7. String Formatting

Java provides two main ways to format strings:

**`String.format()`:** Returns a formatted string without printing it.

```
String msg = String.format("Name: %s, Age: %d, GPA: %.2f", "Priya", 20, 9.45);
```

**`System.out.printf()`:** Prints a formatted string directly to the console.

```
System.out.printf("Score: %d out of %d%n", 85, 100);
```

Common format specifiers: `%s` for strings, `%d` for integers, `%f` for floating-point numbers, `%.2f` for 2 decimal places, `%n` for a platform-independent newline.

### 8. String Concatenation Performance

The `+` operator for string concatenation is convenient but has a hidden cost. In a loop, each `+` creates a new String object, copies the old content plus the new content, and discards the old object. For n iterations, this results in O(n^2) time complexity.

```
// BAD: O(n^2) — creates n intermediate String objects
String result = "";
for (int i = 0; i < 10000; i++) {
    result += i + ","; // new object every iteration
}

// GOOD: O(n) — single StringBuilder, no copying
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 10000; i++) {
    sb.append(i).append(",");
}
String result = sb.toString();
```

Note: The Java compiler optimizes simple concatenation like `"Hello" + name` using StringBuilder internally. The problem arises only in loops.

## Code Examples

### String Creation — Literal vs new

```java
public class StringCreation {
    public static void main(String[] args) {
        // String literal — stored in String Pool
        String s1 = "Hello";
        String s2 = "Hello";

        // Using new — creates a new object on the heap
        String s3 = new String("Hello");

        System.out.println(s1 == s2);       // true (same pool object)
        System.out.println(s1 == s3);       // false (different objects)
        System.out.println(s1.equals(s3));  // true (same content)

        // intern() — moves heap string to the pool
        String s4 = s3.intern();
        System.out.println(s1 == s4);       // true (same pool object)
    }
}
```

String literals are stored in the String Pool, so `s1` and `s2` point to the same object (== returns true). `new String()` always creates a separate heap object, so `s1 == s3` is false even though the content is identical. `.equals()` compares content and returns true. `intern()` returns the pool reference for a given string, so `s1 == s4` is true.

**Output:**

```
true
false
true
true
```

### String Comparison — == vs .equals() vs .compareTo()

```java
public class StringComparison {
    public static void main(String[] args) {
        String a = "Java";
        String b = "Java";
        String c = new String("Java");
        String d = "java";

        // == checks reference (same object?)
        System.out.println(a == b);              // true
        System.out.println(a == c);              // false

        // .equals() checks content (same characters?)
        System.out.println(a.equals(c));         // true
        System.out.println(a.equals(d));         // false (case matters)

        // .equalsIgnoreCase() ignores case
        System.out.println(a.equalsIgnoreCase(d)); // true

        // .compareTo() returns int for lexicographic order
        System.out.println("apple".compareTo("banana")); // negative
        System.out.println("banana".compareTo("apple")); // positive
        System.out.println("apple".compareTo("apple"));  // 0
    }
}
```

`==` checks if two references point to the same object in memory. For literals in the pool, this is true. For objects created with `new`, it is false. `.equals()` compares the actual character content and is the correct way to compare strings in almost all situations. `.compareTo()` returns 0 for equal strings, a negative number if the caller is lexicographically smaller, and a positive number if it is larger.

**Output:**

```
true
false
true
false
true
-1
1
0
```

### Essential String Methods

```java
public class StringMethods {
    public static void main(String[] args) {
        String s = "  Modern Age Coders  ";

        // Length and trimming
        System.out.println(s.length());          // 21
        System.out.println(s.trim());            // "Modern Age Coders"
        System.out.println(s.trim().length());   // 17

        String name = "Kavitha Suresh";

        // Character access
        System.out.println(name.charAt(0));      // K
        System.out.println(name.charAt(name.length() - 1)); // h

        // Case conversion
        System.out.println(name.toUpperCase());  // KAVITHA SURESH
        System.out.println(name.toLowerCase());  // kavitha suresh

        // Search methods
        System.out.println(name.indexOf("a"));       // 1
        System.out.println(name.lastIndexOf("a"));   // 9
        System.out.println(name.contains("Suresh")); // true
        System.out.println(name.indexOf("xyz"));     // -1

        // Substring
        System.out.println(name.substring(0, 7));    // Kavitha
        System.out.println(name.substring(8));       // Suresh
    }
}
```

`length()` returns character count including spaces. `trim()` removes leading and trailing whitespace. `charAt()` returns the character at a given zero-based index. `indexOf()` returns the first occurrence of a substring or -1 if not found. `lastIndexOf()` returns the last occurrence. `contains()` returns a boolean. `substring(start, end)` extracts characters from start (inclusive) to end (exclusive).

**Output:**

```
21
Modern Age Coders
17
K
h
KAVITHA SURESH
kavitha suresh
1
9
true
-1
Kavitha
Suresh
```

### split(), join(), replace(), and startsWith()/endsWith()

```java
public class StringOperations {
    public static void main(String[] args) {
        // split()
        String csv = "Aarav,Priya,Rohan,Meera";
        String[] names = csv.split(",");
        for (String name : names) {
            System.out.println(name);
        }

        // String.join() — Java 8+
        String joined = String.join(" | ", names);
        System.out.println(joined);

        // replace()
        String text = "Java is hard. Java is confusing.";
        System.out.println(text.replace("hard", "fun"));
        System.out.println(text.replace('a', 'o'));

        // startsWith() and endsWith()
        String file = "Report2026.pdf";
        System.out.println(file.startsWith("Report")); // true
        System.out.println(file.endsWith(".pdf"));     // true
        System.out.println(file.endsWith(".doc"));     // false
    }
}
```

`split()` takes a regex pattern and returns a String array. `String.join()` is a static method that concatenates elements with a delimiter. `replace()` has two overloads: one for single characters and one for CharSequences. `startsWith()` and `endsWith()` check prefixes and suffixes and are commonly used for file type validation.

**Output:**

```
Aarav
Priya
Rohan
Meera
Aarav | Priya | Rohan | Meera
Java is fun. Java is confusing.
Jovo is hord. Jovo is confusing.
true
true
false
```

### StringBuilder — Mutable String Operations

```java
public class StringBuilderDemo {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello");

        // append()
        sb.append(" World");
        System.out.println(sb);              // Hello World

        // insert()
        sb.insert(5, ",");
        System.out.println(sb);              // Hello, World

        // delete()
        sb.delete(5, 7);                     // Remove ", "
        System.out.println(sb);              // HelloWorld

        // reverse()
        sb.reverse();
        System.out.println(sb);              // dlroWolleH

        // replace()
        sb.reverse();                        // back to HelloWorld
        sb.replace(0, 5, "Namaste");
        System.out.println(sb);              // NamasteWorld

        // length and charAt
        System.out.println(sb.length());     // 12
        System.out.println(sb.charAt(0));    // N

        // Convert to String
        String result = sb.toString();
        System.out.println(result);          // NamasteWorld
    }
}
```

StringBuilder is mutable, so all methods modify the same object instead of creating new ones. `append()` adds to the end. `insert()` adds at a specific position. `delete(start, end)` removes characters from start (inclusive) to end (exclusive). `reverse()` reverses in place. `replace(start, end, str)` replaces a range with a new string. Always call `toString()` when you need an immutable String.

**Output:**

```
Hello World
Hello, World
HelloWorld
dlroWolleH
NamasteWorld
12
N
NamasteWorld
```

### String Formatting with String.format() and printf()

```java
public class StringFormatting {
    public static void main(String[] args) {
        String name = "Deepak";
        int age = 21;
        double gpa = 8.756;

        // String.format()
        String info = String.format("Name: %s, Age: %d, GPA: %.2f", name, age, gpa);
        System.out.println(info);

        // printf() — prints directly
        System.out.printf("%-15s %5d %8.2f%n", "Deepak", 21, 8.756);
        System.out.printf("%-15s %5d %8.2f%n", "Sneha", 20, 9.120);
        System.out.printf("%-15s %5d %8.2f%n", "Vikram", 22, 7.890);

        // Padding with zeros
        System.out.printf("Roll No: %05d%n", 42);

        // valueOf()
        int num = 100;
        String str = String.valueOf(num);
        System.out.println(str + " is a String: " + (str instanceof String));
    }
}
```

`String.format()` works like printf but returns a String instead of printing. `%s` is for strings, `%d` for integers, `%.2f` for two decimal places. `%-15s` left-aligns a string in a 15-character field. `%05d` zero-pads an integer to 5 digits. `%n` is the platform-independent newline. `String.valueOf()` converts any primitive to its String representation.

**Output:**

```
Name: Deepak, Age: 21, GPA: 8.76
Deepak               21     8.76
Sneha                20     9.12
Vikram               22     7.89
Roll No: 00042
100 is a String: true
```

### String Concatenation Performance — Why StringBuilder Matters

```java
public class ConcatPerformance {
    public static void main(String[] args) {
        int n = 50000;

        // BAD: String concatenation in a loop — O(n^2)
        long start1 = System.currentTimeMillis();
        String bad = "";
        for (int i = 0; i < n; i++) {
            bad += i;
        }
        long time1 = System.currentTimeMillis() - start1;
        System.out.println("String + loop: " + time1 + " ms");

        // GOOD: StringBuilder — O(n)
        long start2 = System.currentTimeMillis();
        StringBuilder good = new StringBuilder();
        for (int i = 0; i < n; i++) {
            good.append(i);
        }
        String result = good.toString();
        long time2 = System.currentTimeMillis() - start2;
        System.out.println("StringBuilder: " + time2 + " ms");

        System.out.println("Both produce same result: " + bad.equals(result));
    }
}
```

String concatenation with `+` in a loop creates a new String object on every iteration, copying all previous characters plus the new ones. For n iterations, this results in approximately n*(n+1)/2 character copies, which is O(n^2). StringBuilder maintains a resizable internal buffer and only copies characters when the buffer needs to expand, resulting in O(n) performance. For 50,000 iterations, the difference can be hundreds of milliseconds versus single-digit milliseconds.

**Output:**

```
String + loop: 890 ms
StringBuilder: 3 ms
Both produce same result: true
```

### toCharArray(), valueOf(), and Character Checking

```java
public class StringCharOps {
    public static void main(String[] args) {
        String s = "Hello World 123";

        // toCharArray()
        char[] chars = s.toCharArray();
        System.out.println("Length: " + chars.length);
        System.out.println("First char: " + chars[0]);

        // Count digits, letters, and spaces
        int digits = 0, letters = 0, spaces = 0;
        for (char c : chars) {
            if (Character.isDigit(c)) digits++;
            else if (Character.isLetter(c)) letters++;
            else if (c == ' ') spaces++;
        }
        System.out.println("Digits: " + digits);
        System.out.println("Letters: " + letters);
        System.out.println("Spaces: " + spaces);

        // valueOf() conversions
        System.out.println(String.valueOf(42));      // "42"
        System.out.println(String.valueOf(3.14));    // "3.14"
        System.out.println(String.valueOf(true));    // "true"
        System.out.println(String.valueOf('A'));     // "A"
    }
}
```

`toCharArray()` converts a String into a `char[]`, useful for character-by-character processing. The `Character` wrapper class provides static methods like `isDigit()`, `isLetter()`, `isUpperCase()`, and `isLowerCase()` for checking individual characters. `String.valueOf()` is overloaded to accept any primitive type and returns its string representation.

**Output:**

```
Length: 15
First char: H
Digits: 3
Letters: 10
Spaces: 2
42
3.14
true
A
```

## Common Mistakes

### Using == Instead of .equals() to Compare Strings

**Wrong:**

```
String a = new String("Hello");
String b = new String("Hello");
if (a == b) {
    System.out.println("Equal");
} else {
    System.out.println("Not equal"); // This runs!
}
```

No compilation error, but the comparison checks references, not content. Both objects have the same content but are different objects on the heap.

**Correct:**

```
String a = new String("Hello");
String b = new String("Hello");
if (a.equals(b)) {
    System.out.println("Equal"); // This runs correctly
}
```

`==` compares object references (memory addresses), not content. Two String objects created with `new` are always different objects even if they contain the same characters. Always use `.equals()` for string content comparison. This is one of the most common bugs in Java and is asked in virtually every interview.

### Calling a Method on a Null String

**Wrong:**

```
String name = null;
System.out.println(name.length()); // NullPointerException
```

Exception in thread "main" java.lang.NullPointerException

**Correct:**

```
String name = null;
if (name != null) {
    System.out.println(name.length());
} else {
    System.out.println("Name is not set");
}
// Or use a constant on the left: "Hello".equals(name) — safe even if name is null
```

Calling any method on a `null` reference throws a `NullPointerException`. Always check for null before calling methods. A common defensive technique is to put the known non-null string on the left: `"expected".equals(name)` instead of `name.equals("expected")`.

### Forgetting That String Methods Return New Strings

**Wrong:**

```
String name = "  aarav  ";
name.trim();
name.toUpperCase();
System.out.println(name); // Still "  aarav  "
```

No error, but the original string is unchanged because the return values were not saved.

**Correct:**

```
String name = "  aarav  ";
name = name.trim().toUpperCase();
System.out.println(name); // AARAV
```

Since strings are immutable, methods like `trim()` and `toUpperCase()` do not modify the original string. They return a new String object. You must assign the result back to a variable. Method chaining works: `name.trim().toUpperCase()` first trims, then converts the trimmed result to uppercase.

### String Concatenation with + in a Loop

**Wrong:**

```
String result = "";
for (int i = 0; i < 10000; i++) {
    result += i + ",";
}
// Extremely slow — O(n^2) time, creates 10000 temporary objects
```

No compilation error, but severe performance degradation. Each += creates a new String object and copies all previous characters.

**Correct:**

```
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 10000; i++) {
    sb.append(i).append(",");
}
String result = sb.toString();
// Fast — O(n) time, single mutable object
```

The `+` operator in a loop causes Java to create a new String object on every iteration, copying the entire accumulated string plus the new part. For n iterations, the total character copies are approximately n^2/2. Use `StringBuilder` in loops to maintain a single mutable buffer that grows efficiently.

### Using length Instead of length() for Strings

**Wrong:**

```
String name = "Sneha";
System.out.println(name.length); // Compilation error
```

error: cannot find symbol — symbol: variable length

**Correct:**

```
String name = "Sneha";
System.out.println(name.length()); // 5

// Note: arrays use .length (no parentheses)
int[] arr = {1, 2, 3};
System.out.println(arr.length); // 3
```

In Java, strings use `length()` (a method), while arrays use `length` (a field). This inconsistency is a frequent source of errors. Strings are objects, so they have a method. Arrays are special objects with a public `length` field. Collections use `size()`. Three different ways to get "length" in Java.

### IndexOutOfBoundsException with charAt() or substring()

**Wrong:**

```
String s = "Hello";
System.out.println(s.charAt(5)); // StringIndexOutOfBoundsException
```

Exception in thread "main" java.lang.StringIndexOutOfBoundsException: String index out of range: 5

**Correct:**

```
String s = "Hello";
// Valid indices are 0 to s.length()-1
System.out.println(s.charAt(s.length() - 1)); // 'o'

// Always check bounds before accessing
int index = 5;
if (index >= 0 && index < s.length()) {
    System.out.println(s.charAt(index));
} else {
    System.out.println("Index out of range");
}
```

String indices in Java are 0-based. For a string of length 5, valid indices are 0 through 4. Accessing index 5 (or any index >= length or < 0) throws a `StringIndexOutOfBoundsException`. Unlike Python, Java does not support negative indexing. Always validate indices before using `charAt()` or `substring()`.

## Summary

- Strings in Java are immutable objects of the java.lang.String class. Once created, their content cannot be changed. Every modification creates a new String object.
- String literals are stored in the String Pool for memory efficiency. The new keyword bypasses the pool and always creates a separate heap object.
- Use .equals() to compare string content, not ==. The == operator checks reference equality (same object), while .equals() checks content equality (same characters). This is the single most important rule for Java strings.
- Key String methods: length(), charAt(), substring(), indexOf(), lastIndexOf(), contains(), startsWith(), endsWith(), toUpperCase(), toLowerCase(), trim(), replace(), split(), and String.join().
- StringBuilder provides a mutable character sequence for efficient string building. Use it in loops instead of the + operator to avoid O(n^2) performance degradation.
- StringBuffer is the thread-safe version of StringBuilder. Use StringBuilder in single-threaded code (most cases) and StringBuffer only when thread safety is required.
- String.format() and System.out.printf() provide C-style formatting with %s (string), %d (integer), %f (float), and %.Nf (N decimal places).
- compareTo() enables lexicographic comparison: returns 0 for equal strings, negative if the caller is smaller, positive if larger. Used for sorting.
- toCharArray() converts a String to a char array for character-by-character processing. The Character class provides isDigit(), isLetter(), isUpperCase(), and other checking methods.
- The intern() method returns the String Pool reference for any string, enabling == comparison. Useful for performance optimization when comparing the same set of strings repeatedly.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/strings-in-java/*
*Practice questions: https://learn.modernagecoders.com/resources/java/strings-in-java/practice/*
