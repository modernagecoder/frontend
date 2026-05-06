---
title: "Practice: Introduction to Java"
description: "57 practice problems for Introduction to Java in Java"
slug: introduction-to-java-practice
canonical: https://learn.modernagecoders.com/resources/java/introduction-to-java/practice/
category: "Java"
---
# Practice: Introduction to Java

**Total questions:** 57

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
public class Test {
    public static void main(String[] args) {
        System.out.println("Hello" + " " + "Java");
    }
}
```

*Hint:* + concatenates strings in Java.

**Answer:** Hello Java

The + operator joins strings together. "Hello" + " " + "Java" concatenates to "Hello Java". This is string concatenation in Java.

### Q2. [Easy] What is the output?

```
System.out.println(10 + 20);
System.out.println("10" + "20");
System.out.println(10 + "20");
```

*Hint:* When one operand is a String, + does concatenation.

**Answer:** 30
1020
1020

10+20=30 (both ints, so addition). "10"+"20"="1020" (both strings, concatenation). 10+"20"="1020" (int converted to string, then concatenation).

### Q3. [Easy] Will this compile?

```
public class test {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
```

*Hint:* Class name must match filename.

**Answer:** It compiles but the filename must be test.java (lowercase t).

Java class names should start with uppercase (convention), but lowercase compiles. The file must be named exactly test.java to match the class name.

### Q4. [Easy] What is the output?

```
int a = 7;
int b = 2;
System.out.println(a / b);
System.out.println(a % b);
System.out.println((double) a / b);
```

*Hint:* Integer division truncates. Cast to double for decimal.

**Answer:** 3
1
3.5

7/2=3 (integer division truncates). 7%2=1 (remainder). (double)7/2=3.5 (casting to double gives decimal result).

### Q5. [Easy] Find the bug:

```
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World")
    }
}
```

*Hint:* Every statement in Java must end with something.

**Answer:** Missing semicolon after println. Fix: System.out.println("Hello World");

Java requires a semicolon (;) at the end of every statement. Unlike Python, forgetting ; causes a compilation error.

### Q6. [Medium] What is the output?

```
String name = "Java";
System.out.println(name.length());
System.out.println(name.charAt(0));
System.out.println(name.toUpperCase());
```

*Hint:* String methods: length(), charAt(), toUpperCase().

**Answer:** 4
J
JAVA

length() returns 4 ("Java" has 4 characters). charAt(0) returns J (first character). toUpperCase() converts to "JAVA".

### Q7. [Medium] What is the output?

```
for (int i = 1; i <= 5; i++) {
    System.out.print(i + " ");
}
```

*Hint:* print() stays on the same line, println() adds a newline.

**Answer:** 1 2 3 4 5

The for loop runs from i=1 to i=5. System.out.print() prints without a newline, so all numbers appear on one line separated by spaces.

### Q8. [Medium] What is the output?

```
int[] arr = {10, 20, 30, 40, 50};
System.out.println(arr.length);
System.out.println(arr[0]);
System.out.println(arr[arr.length - 1]);
```

*Hint:* Arrays use .length (no parentheses) and 0-based indexing.

**Answer:** 5
10
50

arr.length is 5. arr[0] is the first element (10). arr[arr.length-1] = arr[4] is the last element (50). Note: .length not .length().

### Q9. [Medium] What is the output?

```
int x = 5;
System.out.println(x++);
System.out.println(x);
System.out.println(++x);
```

*Hint:* x++ returns then increments. ++x increments then returns.

**Answer:** 5
6
7

x++ (post-increment): prints 5, then x becomes 6. Next line prints 6. ++x (pre-increment): x becomes 7 first, then prints 7.

### Q10. [Medium] Will this compile? Why?

```
int x = 10;
boolean b = (x > 5) ? true : false;
System.out.println(b);
```

*Hint:* This uses the ternary operator.

**Answer:** Yes, prints: true

The ternary operator (?:) works as: condition ? valueIfTrue : valueIfFalse. Since 10>5 is true, b gets true.

### Q11. [Hard] What is the output?

```
String a = "Hello";
String b = "Hello";
String c = new String("Hello");
System.out.println(a == b);
System.out.println(a == c);
System.out.println(a.equals(c));
```

*Hint:* == checks reference, .equals() checks content.

**Answer:** true
false
true

a==b is true (both from String pool, same reference). a==c is false (c created with new, different object). a.equals(c) is true (same content).

### Q12. [Hard] What is the difference between Java's bytecode and C++'s compiled output? How does this affect portability and performance?

*Hint:* Think platform-independent vs platform-specific. One extra layer of translation.

**Answer:** Java's `javac` produces **platform-independent bytecode** that runs on any JVM. C++'s compiler (e.g., g++, MSVC) produces **platform-specific machine code** that runs only on the target OS/CPU. This gives Java superior portability (one compile, run anywhere) but C++ superior raw performance (no JVM overhead). However, Java's JIT compilation narrows the performance gap significantly.

The tradeoff is clear: Java sacrifices a small amount of performance for complete portability. C++ gives maximum performance but requires recompilation for each target platform. In practice, Java's JIT-compiled performance is within 10-20% of C++ for most applications, making the portability advantage worth the cost for enterprise applications.

### Q13. [Hard] What is the output?

```
for (int i = 1; i <= 4; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("* ");
    }
    System.out.println();
}
```

*Hint:* Nested loops create patterns.

**Answer:** * 
* * 
* * * 
* * * *

Row 1: 1 star. Row 2: 2 stars. Row 3: 3 stars. Row 4: 4 stars. The inner loop runs j from 1 to i, so each row has i stars.

### Q14. [Hard] Write a program to check if a number is even or odd using the ternary operator.

*Hint:* Use % 2 and ternary (?:).

**Answer:** int n = 7;
String result = (n % 2 == 0) ? "Even" : "Odd";
System.out.println(n + " is " + result);

n%2 gives the remainder when divided by 2. If remainder is 0, even. Otherwise, odd. Ternary makes this a one-line check.

### Q15. [Hard] What is the output?

```
int sum = 0;
for (int i = 1; i <= 100; i++) {
    sum += i;
}
System.out.println(sum);
```

*Hint:* This adds numbers from 1 to 100.

**Answer:** 5050

This is the sum of 1+2+3+...+100 = 5050. The formula is n*(n+1)/2 = 100*101/2 = 5050. The loop accumulates the sum in the variable.

### Q16. [Medium] What is the output?

```
double d = 0.1 + 0.2;
System.out.println(d);
System.out.println(d == 0.3);
```

*Hint:* Floating point arithmetic is not exact.

**Answer:** 0.30000000000000004
false

Floating point numbers cannot represent 0.1 and 0.2 exactly in binary. The sum is slightly off (0.30000000000000004). Never use == for float comparison.

### Q17. [Easy] Is Java a compiled language or an interpreted language?

*Hint:* It is actually both.

**Answer:** Java is **both compiled and interpreted**. The `javac` compiler compiles source code (.java) to bytecode (.class), and the JVM interprets this bytecode (and uses JIT compilation to convert hot bytecode to native machine code) at runtime.

This is a trick question that tests depth of understanding. Simply saying "compiled" or "interpreted" is incomplete. The correct answer acknowledges the two-phase process: compilation to bytecode and then interpretation/JIT-compilation on the JVM.

### Q18. [Easy] What is the file extension for Java source code files and compiled bytecode files?

*Hint:* One ends with .java, the other with .class.

**Answer:** Java source code files have the extension `.java` (e.g., `HelloWorld.java`). Compiled bytecode files have the extension `.class` (e.g., `HelloWorld.class`).

The Java compiler (javac) takes a .java file as input and produces a .class file as output. The .class file contains bytecode that the JVM can execute. If your source file contains multiple classes, the compiler generates a separate .class file for each class.

## Mixed Questions

### Q1. [Easy] Rohan says, 'Java and JavaScript are basically the same language.' Is he correct? Explain.

*Hint:* Despite similar names, they are very different languages.

**Answer:** Rohan is **incorrect**. Java and JavaScript are entirely different languages. Java is a statically typed, compiled, class-based language that runs on the JVM. JavaScript is a dynamically typed, interpreted, prototype-based language that runs in browsers or Node.js. They share a similar name for marketing reasons (JavaScript was named to ride Java's popularity in the 1990s), but they have different syntax, semantics, type systems, and use cases.

A famous analogy: Java is to JavaScript as car is to carpet. Java is used for Android, enterprise backend, and large-scale systems. JavaScript is used for web frontend, Node.js backend, and browser scripting. Confusing them is a common beginner mistake.

### Q2. [Easy] Ananya wants to run a Java program her friend sent her (.class file). Does she need to install the JDK, or is the JRE sufficient?

*Hint:* Think about what is needed to run vs develop.

**Answer:** The **JRE is sufficient** to run a compiled .class file. The JRE contains the JVM and standard libraries needed to execute Java programs. The JDK is only needed if Ananya wants to write and compile her own Java code.

In practice, since Java 11, Oracle no longer provides a standalone JRE download. You typically install the JDK regardless. But conceptually, the distinction matters: JRE = run, JDK = develop. This is a common interview question that tests understanding of Java's component architecture.

### Q3. [Medium] Vikram compiled his Java program on a Windows machine and got a .class file. He wants to run it on his Linux server. Does he need to recompile? Why or why not?

*Hint:* Think about Write Once, Run Anywhere.

**Answer:** **No, Vikram does not need to recompile.** Java bytecode (.class files) is platform-independent. As long as the Linux server has a JVM installed (with a compatible Java version), the same .class file compiled on Windows will run identically on Linux. This is the essence of Java's Write Once, Run Anywhere principle.

This is different from C/C++ where you would need to recompile for each target platform. The JVM on Linux translates the same bytecode into Linux-native instructions, while the JVM on Windows translates it into Windows-native instructions. The bytecode itself never changes.

### Q4. [Medium] Priya says, 'Since Java has garbage collection, memory leaks are impossible in Java.' Is she correct?

*Hint:* Garbage collection helps, but it cannot solve all memory issues.

**Answer:** Priya is **partially incorrect**. While Java's garbage collector automatically frees objects with no references, **memory leaks are still possible** in Java. They occur when objects are still referenced but no longer needed (e.g., objects stored in a growing static collection that is never cleared, unclosed resources, listener registrations that are never removed).

In Java, a memory leak happens when you unintentionally hold references to objects you no longer need. The garbage collector cannot free these objects because they are still reachable. Common causes include static collections that accumulate objects, unclosed database connections, and event listeners that are not deregistered. Understanding this nuance is important for interviews.

### Q5. [Medium] Why would a company choose Java over Python for building a large-scale banking application? Give at least three reasons.

*Hint:* Think about type safety, performance, and ecosystem.

**Answer:** (1) **Static typing** catches type errors at compile time, reducing bugs in critical financial code. (2) **Better performance** due to JIT compilation, important for handling millions of transactions. (3) **Enterprise ecosystem** with mature frameworks (Spring, Hibernate) and application servers. (4) **Strong multithreading** support for concurrent transaction processing. (5) **Long-term stability** with LTS versions and backward compatibility.

Banking software handles financial transactions where bugs can cost millions. Java's static typing, compile-time checks, and strong exception handling make it more suitable than Python for such critical applications. The vast enterprise ecosystem also means proven libraries and patterns for security, transactions, and scalability.

### Q6. [Medium] What role does the Class Loader play in the JVM? Why is bytecode verification important?

*Hint:* The class loader loads .class files. The verifier checks for malicious code.

**Answer:** The **Class Loader** dynamically loads .class files (bytecode) into JVM memory when they are first referenced. It follows a delegation model with three levels: Bootstrap, Extension, and Application class loaders. **Bytecode verification** ensures the loaded bytecode does not violate Java's security model -- it checks for illegal memory access, type safety violations, and stack overflows before execution.

The class loader and verifier are critical for Java's security model, especially in environments where code from untrusted sources is executed (like applets in the past, or plugins today). The verifier ensures that even maliciously crafted bytecode cannot crash the JVM or access unauthorized memory.

### Q7. [Hard] Explain why Java maintains backward compatibility and what impact this has on the language's evolution.

*Hint:* Think about enterprise codebases and the cost of breaking changes.

**Answer:** Java maintains backward compatibility to ensure that code written in older versions continues to work in newer versions. Enterprise applications often have millions of lines of code and upgrading is expensive. This commitment means features are rarely removed (they are deprecated instead). The impact is that Java evolves more slowly than languages like Python, and some design decisions (like checked exceptions, raw types) cannot be easily fixed even when better alternatives exist.

This is a double-edged sword. Backward compatibility protects the massive investment companies have in Java codebases. However, it also means Java carries legacy baggage. For example, the Date/Calendar API was poorly designed but could not be removed -- instead, Java 8 introduced java.time as a new alternative. Understanding this tradeoff shows maturity in a placement interview.

### Q8. [Hard] Neha argues that since C++ compiles to native machine code and Java compiles to bytecode, C++ will always be faster than Java. Is she correct? Explain with reference to JIT compilation.

*Hint:* JIT compilation can sometimes make Java competitive with or even faster than statically compiled C++.

**Answer:** Neha is **mostly correct for raw computation but not always**. While C++ compiles to native machine code and avoids JVM overhead, Java's **JIT compiler** can actually produce more optimized code in some cases. The JIT compiler has access to runtime profiling data (which methods are called most, which branches are taken) and can optimize based on actual execution patterns. C++ compilers optimize based on static analysis only. Additionally, Java's garbage collector can be more efficient than manual memory management for certain allocation patterns.

Real-world benchmarks show Java performing within 10-20% of C++ for most applications, and sometimes matching or exceeding C++ in specific scenarios. The JIT compiler can inline virtual method calls based on runtime type information, eliminate dead code branches based on actual execution patterns, and optimize memory access patterns. However, for latency-critical systems (like operating systems or game engines), C++'s predictable performance without GC pauses remains preferable.

### Q9. [Hard] What is the significance of Java 8 and why is it considered a landmark release?

*Hint:* Lambda expressions, Stream API, and functional programming features.

**Answer:** Java 8 (2014) is considered a landmark release because it introduced **lambda expressions** (concise anonymous functions), the **Stream API** (functional-style operations on collections), **Optional** (handling null values safely), **default methods** in interfaces, and the new **java.time** date/time API. These features brought functional programming paradigms to Java, fundamentally changing how Java code is written.

Before Java 8, Java was a purely imperative OOP language. Lambda expressions and streams enabled a functional style that made code more concise and expressive. For example, sorting a list went from requiring a 5-line anonymous class to a single line: `list.sort((a, b) -> a.compareTo(b))`. Java 8 is still the most widely used version in production systems, even though newer LTS versions are available.

### Q10. [Hard] What is the difference between OpenJDK and Oracle JDK? Which should a student use?

*Hint:* One is open source, the other has licensing considerations.

**Answer:** **OpenJDK** is the open-source reference implementation of Java SE, freely available for any use. **Oracle JDK** is Oracle's commercial distribution that was historically identical to OpenJDK but required a paid license for commercial use (since Java 11). Starting with Java 17, Oracle JDK is again free under the NFTC license. For students, either works; **OpenJDK** (via Adoptium/Temurin) is recommended for its simplicity and zero licensing concerns.

The licensing history is confusing but important for professional development. From Java 11-16, using Oracle JDK in production required a commercial license. This drove many companies to switch to OpenJDK distributions (Adoptium, Amazon Corretto, Azul Zulu). The functional difference between OpenJDK and Oracle JDK is negligible since they share the same codebase.

### Q11. [Easy] List five key features of Java that make it popular for enterprise development.

*Hint:* Think about safety, portability, performance, and ecosystem.

**Answer:** (1) **Platform independence** (WORA via JVM). (2) **Strong type system** (compile-time error detection). (3) **Automatic memory management** (garbage collection). (4) **Rich standard library** (collections, I/O, networking, concurrency). (5) **Mature enterprise ecosystem** (Spring, Hibernate, Maven, Gradle).

Each of these features reduces risk and development cost in large projects. Platform independence means companies can deploy on any server. Static typing reduces production bugs. Garbage collection prevents memory leaks. The standard library reduces dependency on third-party code. The enterprise ecosystem provides battle-tested solutions for common problems.

### Q12. [Medium] Aarav says that Java is slow because it runs on a virtual machine. Evaluate this claim in the context of modern JVM technology.

*Hint:* Consider JIT compilation, modern GC algorithms, and real-world performance benchmarks.

**Answer:** Aarav's claim is **outdated and largely incorrect** for modern Java. While early Java implementations were indeed slow due to pure interpretation, modern JVMs use **JIT compilation** that converts hot bytecode to optimized native code, **advanced garbage collectors** (ZGC, Shenandoah) with sub-millisecond pauses, and **escape analysis** to avoid unnecessary heap allocations. Modern Java typically performs within 10-20% of C++ and significantly outperforms Python, Ruby, and JavaScript.

The "Java is slow" perception dates from the late 1990s when JVMs were purely interpreted. Decades of engineering have produced a JVM that is one of the most optimized runtime environments in existence. Companies like Twitter and LinkedIn run massive-scale systems on Java precisely because of its performance. The GraalVM project even allows ahead-of-time compilation to native code, eliminating startup overhead entirely.

## Multiple Choice Questions

### Q1. [Easy] Who is known as the 'Father of Java'?

**B is correct.** James Gosling developed Java at Sun Microsystems. Dennis Ritchie (A) created C. Bjarne Stroustrup (C) created C++. Guido van Rossum (D) created Python.

### Q2. [Easy] What does JVM stand for?

**C is correct.** JVM stands for Java Virtual Machine. It is the runtime engine that executes Java bytecode. The other options are fabricated terms.

### Q3. [Easy] What is the extension of a compiled Java bytecode file?

**B is correct.** The Java compiler (javac) produces .class files containing bytecode. The .java extension (A) is for source code files. The other options are not real Java file extensions.

### Q4. [Easy] Which year was Java first publicly released?

**C is correct.** Java was publicly released in 1995. The Green Project started in 1991 (A), but the language was not released publicly until 1995. 1993 (B) and 2000 (D) are incorrect.

### Q5. [Easy] Which company currently owns and maintains Java?

**D is correct.** Oracle Corporation acquired Sun Microsystems in 2010 and has maintained Java since. Sun Microsystems (A) was the original creator but no longer exists as an independent company.

### Q6. [Easy] What does WORA stand for?

**B is correct.** WORA stands for Write Once, Run Anywhere, which describes Java's platform independence through bytecode and the JVM.

### Q7. [Medium] Which of the following is NOT a Java edition?

**D is correct.** Java XE does not exist. The three Java editions are SE (Standard Edition), EE (Enterprise Edition, now Jakarta EE), and ME (Micro Edition).

### Q8. [Medium] Which component of the Java ecosystem contains the javac compiler?

**C is correct.** The JDK (Java Development Kit) contains the javac compiler along with other development tools. The JVM (A) only executes bytecode. The JRE (B) includes the JVM and libraries for running programs but not development tools. JIT (D) is a compilation technique inside the JVM, not a standalone component.

### Q9. [Medium] What was Java originally named?

**B is correct.** Java was originally called Oak, named after an oak tree outside James Gosling's office. It was renamed to Java because Oak was already trademarked.

### Q10. [Medium] Which of the following is true about Java?

**C is correct.** Java source code is compiled to bytecode (.class files) by javac, and this bytecode runs on the JVM. Java is not purely interpreted (A) because it compiles to bytecode first. It does not compile directly to machine code (B). Java has excellent multithreading support (D is false).

### Q11. [Medium] Which Java version introduced lambda expressions and the Stream API?

**C is correct.** Java 8 (2014) introduced lambda expressions, the Stream API, Optional, default methods in interfaces, and the java.time API. Java 5 (A) introduced generics and enums. Java 7 (B) introduced try-with-resources and diamond operator. Java 11 (D) introduced var in lambdas and HTTP client.

### Q12. [Medium] Which of the following tools is used to compile Java source code?

**B is correct.** `javac` is the Java compiler that converts .java source files to .class bytecode files. `java` (A) is the JVM launcher that runs .class files. `javadoc` (C) generates API documentation. `jar` (D) creates archive files.

### Q13. [Hard] Which of the following statements about JIT compilation is correct?

**B is correct.** JIT (Just-In-Time) compilation identifies hot code paths during runtime and compiles them to native machine code for better performance. It does not compile everything upfront (A) -- that would be Ahead-of-Time (AOT) compilation. JIT is not a replacement for javac (C); javac compiles source to bytecode, while JIT compiles bytecode to native code. JIT works in all Java editions (D is false).

### Q14. [Hard] Which of the following is NOT a characteristic of Java?

**B is correct (this is NOT a Java characteristic).** Java deliberately does not support pointer arithmetic to prevent memory corruption and security vulnerabilities. C++ supports pointer arithmetic. Java is platform independent (A), object-oriented (C), and has automatic garbage collection (D).

### Q15. [Hard] What happens when you run `javac HelloWorld.java`?

**B is correct.** The `javac` command compiles the source file and produces a .class file containing platform-independent bytecode. It does not execute the program (A) -- that requires the `java` command. It does not produce an .exe file (C) -- Java produces bytecode, not native executables. The JVM (D) is not started by javac; it is started by the java command.

### Q16. [Hard] Which of the following is a Long-Term Support (LTS) version of Java?

**C is correct.** Java 17 (2021) is an LTS release. Java 12 (A), Java 15 (B), and Java 18 (D) are non-LTS versions that receive only 6 months of support. The current LTS versions are Java 8, 11, 17, and 21.

### Q17. [Hard] In the JDK-JRE-JVM hierarchy, which statement is correct?

**B is correct.** JDK (outermost) contains JRE (middle) which contains JVM (innermost). JDK = JRE + development tools. JRE = JVM + standard libraries. JVM = execution engine for bytecode. They form a nested hierarchy, not independent components.

### Q18. [Easy] Java is a _____ typed programming language.

**B is correct.** Java is statically typed, meaning variable types must be declared at compile time and are checked by the compiler. Python is dynamically typed (A). C is sometimes called weakly typed (C). "Loosely typed" (D) is not a standard term for Java.

### Q19. [Medium] Which of the following big data frameworks is built on the JVM?

**B is correct.** Apache Hadoop is written in Java and runs on the JVM. TensorFlow (A) is primarily C++ and Python. Django (C) and Flask (D) are Python web frameworks.

### Q20. [Hard] Which of the following is true about Java's garbage collection?

**B is correct.** The garbage collector identifies and frees objects that are no longer reachable (no active references pointing to them). It does not completely prevent memory leaks (A) because objects with unintended references will not be collected. It runs automatically during program execution (C and D are false), though you can suggest a GC run with `System.gc()` (which is only a suggestion, not a command).

## Coding Challenges

### Challenge 1. System Properties Explorer

**Difficulty:** Easy

Write a Java program that prints the following system properties: Java version, Java vendor, operating system name, operating system version, and user home directory. Use System.getProperty() for each.

**Constraints:**

- Use System.getProperty() with keys: java.version, java.vendor, os.name, os.version, user.home

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Java Version: 21.0.2
Java Vendor: Oracle Corporation
OS Name: Windows 11
OS Version: 10.0
User Home: C:\Users\Aarav
```

**Solution:**

```java
public class SystemInfo {
    public static void main(String[] args) {
        System.out.println("Java Version: " + System.getProperty("java.version"));
        System.out.println("Java Vendor: " + System.getProperty("java.vendor"));
        System.out.println("OS Name: " + System.getProperty("os.name"));
        System.out.println("OS Version: " + System.getProperty("os.version"));
        System.out.println("User Home: " + System.getProperty("user.home"));
    }
}
```

### Challenge 2. Java Feature Printer

**Difficulty:** Easy

Write a Java program that prints exactly 5 features of Java, each on a new line, numbered 1 through 5. Use System.out.println for each line.

**Constraints:**

- Use only System.out.println statements. The class name should be JavaFeatures.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
1. Platform Independent (Write Once, Run Anywhere)
2. Object-Oriented
3. Automatic Garbage Collection
4. Strongly Typed
5. Multithreaded
```

**Solution:**

```java
public class JavaFeatures {
    public static void main(String[] args) {
        System.out.println("1. Platform Independent (Write Once, Run Anywhere)");
        System.out.println("2. Object-Oriented");
        System.out.println("3. Automatic Garbage Collection");
        System.out.println("4. Strongly Typed");
        System.out.println("5. Multithreaded");
    }
}
```

### Challenge 3. JDK-JRE-JVM Hierarchy Display

**Difficulty:** Easy

Write a Java program that visually displays the JDK-JRE-JVM hierarchy using ASCII art. Show that JDK contains JRE which contains JVM, with descriptions for each layer.

**Constraints:**

- Use multiple System.out.println statements. The visual must clearly show the nested hierarchy.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
+-----------------------------------+
|  JDK (Java Development Kit)       |
|  Tools: javac, jdb, javadoc, jar  |
|  +-----------------------------+  |
|  |  JRE (Java Runtime Env)     |  |
|  |  Libraries: java.lang, etc  |  |
|  |  +------------------------+ |  |
|  |  |  JVM (Virtual Machine) | |  |
|  |  |  Executes bytecode     | |  |
|  |  +------------------------+ |  |
|  +-----------------------------+  |
+-----------------------------------+
```

**Solution:**

```java
public class JdkHierarchy {
    public static void main(String[] args) {
        System.out.println("+-----------------------------------+");
        System.out.println("|  JDK (Java Development Kit)       |");
        System.out.println("|  Tools: javac, jdb, javadoc, jar  |");
        System.out.println("|  +-----------------------------+  |");
        System.out.println("|  |  JRE (Java Runtime Env)     |  |");
        System.out.println("|  |  Libraries: java.lang, etc  |  |");
        System.out.println("|  |  +------------------------+ |  |");
        System.out.println("|  |  |  JVM (Virtual Machine) | |  |");
        System.out.println("|  |  |  Executes bytecode     | |  |");
        System.out.println("|  |  +------------------------+ |  |");
        System.out.println("|  +-----------------------------+  |");
        System.out.println("+-----------------------------------+");
    }
}
```

### Challenge 4. Java Versions Timeline

**Difficulty:** Medium

Write a Java program that prints a timeline of major Java releases with their year and key feature. Include at least 6 versions: Java 1.0, Java 2, Java 5, Java 8, Java 11, Java 17, and Java 21.

**Constraints:**

- Format each line as: YEAR | VERSION | KEY FEATURE. Use string concatenation with +.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
=== Java Version Timeline ===
1996 | Java 1.0   | Initial release, applets
1998 | Java 2     | Collections framework, Swing
2004 | Java 5     | Generics, enhanced for-loop, enums
2014 | Java 8     | Lambda expressions, Stream API
2018 | Java 11    | LTS, HTTP client, var in lambdas
2021 | Java 17    | LTS, sealed classes, pattern matching
2023 | Java 21    | LTS, virtual threads, record patterns
```

**Solution:**

```java
public class JavaTimeline {
    public static void main(String[] args) {
        System.out.println("=== Java Version Timeline ===");
        System.out.println("1996 | Java 1.0   | Initial release, applets");
        System.out.println("1998 | Java 2     | Collections framework, Swing");
        System.out.println("2004 | Java 5     | Generics, enhanced for-loop, enums");
        System.out.println("2014 | Java 8     | Lambda expressions, Stream API");
        System.out.println("2018 | Java 11    | LTS, HTTP client, var in lambdas");
        System.out.println("2021 | Java 17    | LTS, sealed classes, pattern matching");
        System.out.println("2023 | Java 21    | LTS, virtual threads, record patterns");
    }
}
```

### Challenge 5. Language Comparison Table

**Difficulty:** Medium

Write a Java program that prints a formatted comparison table of Java, Python, and C++ across 5 parameters: Typing, Speed, Memory Management, Platform Independence, and Primary Use. Use formatted output with consistent column widths.

**Constraints:**

- Use System.out.println with proper formatting. Align columns using spaces.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
====================================================
Feature          | Java     | Python   | C++
====================================================
Typing           | Static   | Dynamic  | Static
Speed            | Fast     | Slower   | Fastest
Memory Mgmt      | Auto GC  | Auto GC  | Manual
Platform Indep.  | Yes(JVM) | Yes(Int) | No
Primary Use      | Enterpr. | Data Sci | Systems
====================================================
```

**Solution:**

```java
public class LanguageComparison {
    public static void main(String[] args) {
        System.out.println("====================================================");
        System.out.println("Feature          | Java     | Python   | C++");
        System.out.println("====================================================");
        System.out.println("Typing           | Static   | Dynamic  | Static");
        System.out.println("Speed            | Fast     | Slower   | Fastest");
        System.out.println("Memory Mgmt      | Auto GC  | Auto GC  | Manual");
        System.out.println("Platform Indep.  | Yes(JVM) | Yes(Int) | No");
        System.out.println("Primary Use      | Enterpr. | Data Sci | Systems");
        System.out.println("====================================================");
    }
}
```

### Challenge 6. Runtime Memory Information

**Difficulty:** Medium

Write a Java program that uses the Runtime class to display JVM memory information: total memory, free memory, used memory (calculated), and maximum memory. Convert bytes to megabytes for readable output.

**Constraints:**

- Use Runtime.getRuntime() methods: totalMemory(), freeMemory(), maxMemory(). Divide by (1024 * 1024) to convert bytes to MB.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
=== JVM Memory Information ===
Total Memory: 256 MB
Free Memory: 250 MB
Used Memory: 6 MB
Max Memory: 4096 MB
```

**Solution:**

```java
public class MemoryInfo {
    public static void main(String[] args) {
        Runtime runtime = Runtime.getRuntime();
        long totalMemory = runtime.totalMemory() / (1024 * 1024);
        long freeMemory = runtime.freeMemory() / (1024 * 1024);
        long usedMemory = totalMemory - freeMemory;
        long maxMemory = runtime.maxMemory() / (1024 * 1024);

        System.out.println("=== JVM Memory Information ===");
        System.out.println("Total Memory: " + totalMemory + " MB");
        System.out.println("Free Memory: " + freeMemory + " MB");
        System.out.println("Used Memory: " + usedMemory + " MB");
        System.out.println("Max Memory: " + maxMemory + " MB");
    }
}
```

### Challenge 7. Compilation Process Explainer

**Difficulty:** Hard

Write a Java program that explains the complete Java compilation and execution process step by step. The program should print each step with a description, and also demonstrate that the program itself went through this exact process to run. Include information about the class loader, bytecode verifier, and execution engine.

**Constraints:**

- Use System.getProperty() to show JVM information. Use the class name to demonstrate the .java to .class relationship.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
=== Java Program Lifecycle ===
Step 1: WRITE   - Developer writes .java source file
Step 2: COMPILE - javac converts .java to .class (bytecode)
Step 3: LOAD    - Class Loader loads .class into JVM memory
Step 4: VERIFY  - Bytecode Verifier checks code safety
Step 5: EXECUTE - Execution Engine runs bytecode (JIT + Interpreter)
Step 6: GC      - Garbage Collector manages memory during execution

This very program went through all 6 steps to produce this output!
Compiled from: CompilationProcess.java
Running as: CompilationProcess.class
On JVM: Java HotSpot(TM) 64-Bit Server VM
```

**Solution:**

```java
public class CompilationProcess {
    public static void main(String[] args) {
        System.out.println("=== Java Program Lifecycle ===");
        System.out.println("Step 1: WRITE   - Developer writes .java source file");
        System.out.println("Step 2: COMPILE - javac converts .java to .class (bytecode)");
        System.out.println("Step 3: LOAD    - Class Loader loads .class into JVM memory");
        System.out.println("Step 4: VERIFY  - Bytecode Verifier checks code safety");
        System.out.println("Step 5: EXECUTE - Execution Engine runs bytecode (JIT + Interpreter)");
        System.out.println("Step 6: GC      - Garbage Collector manages memory during execution");
        System.out.println();
        System.out.println("This very program went through all 6 steps to produce this output!");
        System.out.println("Compiled from: CompilationProcess.java");
        System.out.println("Running as: CompilationProcess.class");
        System.out.println("On JVM: " + System.getProperty("java.vm.name"));
    }
}
```

### Challenge 8. Available Processors and Multithreading Demo

**Difficulty:** Hard

Write a Java program that detects the number of available processors using Runtime, prints the current thread name using Thread.currentThread().getName(), and explains why this information is relevant to Java's multithreading capability. Also print the available memory before and after creating 10000 String objects to show garbage collection at work.

**Constraints:**

- Use Runtime.getRuntime().availableProcessors() and Thread.currentThread().getName(). Create objects in a loop and call System.gc().

**Sample input:**

```
(No input required)
```

**Sample output:**

```
=== Java Multithreading & Memory Demo ===
Available Processors: 8
Current Thread: main
Java supports running up to 8 threads truly in parallel on this machine.

--- Memory Demo ---
Free memory before: 254 MB
Creating 10000 objects...
Free memory after: 252 MB
Requesting garbage collection...
Free memory after GC: 254 MB
```

**Solution:**

```java
public class MultithreadingDemo {
    public static void main(String[] args) {
        Runtime runtime = Runtime.getRuntime();
        int processors = runtime.availableProcessors();
        String threadName = Thread.currentThread().getName();

        System.out.println("=== Java Multithreading & Memory Demo ===");
        System.out.println("Available Processors: " + processors);
        System.out.println("Current Thread: " + threadName);
        System.out.println("Java supports running up to " + processors + " threads truly in parallel on this machine.");
        System.out.println();

        System.out.println("--- Memory Demo ---");
        long freeBefore = runtime.freeMemory() / (1024 * 1024);
        System.out.println("Free memory before: " + freeBefore + " MB");

        System.out.println("Creating 10000 objects...");
        String[] temp = new String[10000];
        for (int i = 0; i < 10000; i++) {
            temp[i] = "Object number " + i;
        }
        long freeAfter = runtime.freeMemory() / (1024 * 1024);
        System.out.println("Free memory after: " + freeAfter + " MB");

        temp = null;
        System.gc();
        System.out.println("Requesting garbage collection...");
        long freeAfterGC = runtime.freeMemory() / (1024 * 1024);
        System.out.println("Free memory after GC: " + freeAfterGC + " MB");
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/introduction-to-java/*
