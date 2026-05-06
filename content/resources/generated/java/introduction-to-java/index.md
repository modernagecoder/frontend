---
title: "Introduction to Java - What Is Java, Why Learn Java, JVM, JDK, JRE Explained | Modern Age Coders"
description: "Learn what Java is, why it is one of the most in-demand programming languages, how JVM enables Write Once Run Anywhere, and where Java is used in the real world. Includes 57 practice questions."
slug: introduction-to-java
canonical: https://learn.modernagecoders.com/resources/java/introduction-to-java/
category: "Java"
keywords: ["what is java", "java introduction", "why learn java", "java programming language", "java jvm jdk jre", "java editions", "java vs python", "java for beginners", "java history", "write once run anywhere"]
---
# Introduction to Java

**Difficulty:** Beginner  
**Reading time:** 20 min  
**Chapter:** 1  
**Practice questions:** 57

## What Is Java?

**Java** is a general-purpose, object-oriented programming language developed by **James Gosling** and his team at **Sun Microsystems** in **1995**. It was later acquired by **Oracle Corporation** in 2010. Java was designed with one revolutionary principle: **"Write Once, Run Anywhere" (WORA)**. This means that code written in Java on one machine can run on any other machine that has a Java Virtual Machine (JVM), regardless of the underlying operating system or hardware.

Java is a **compiled and interpreted** language. Your source code (`.java` files) is first compiled into an intermediate format called **bytecode** (`.class` files) by the Java compiler (`javac`). This bytecode is then interpreted and executed by the JVM. This two-step process is what gives Java its platform independence.

### Key Characteristics of Java

Java is **statically typed**, meaning you must declare the data type of every variable before using it. It is **object-oriented**, meaning everything in Java revolves around classes and objects. It is **platform-independent** at the bytecode level, **robust** with strong memory management and exception handling, and **secure** with built-in security features like bytecode verification and a security manager.

Java also supports **multithreading** (running multiple tasks concurrently), **automatic garbage collection** (the JVM automatically frees unused memory), and has one of the largest standard libraries of any programming language.

## Why Learn Java?

If you are a college student preparing for campus placements or building a career in software engineering, Java is arguably the most important language to learn. Here is why:

### 1. Industry Demand Is Massive

Java consistently ranks among the top 3 most-used programming languages worldwide. Companies like Google, Amazon, Flipkart, Infosys, TCS, Wipro, and virtually every major bank use Java extensively. According to industry surveys, over 35 million developers worldwide use Java, and it powers more than 3 billion devices.

### 2. Placement Interviews Favor Java

The majority of campus placement coding rounds and technical interviews in India are conducted in Java or C++. Data structures and algorithms questions, which form the core of placement tests, are most commonly solved and discussed in Java. Understanding Java gives you a direct advantage in these interviews.

### 3. Android Development

Java was the primary language for Android app development for over a decade. While Kotlin has gained popularity, Java remains widely used in Android development, and understanding Java is essential for maintaining the millions of existing Android apps.

### 4. Enterprise and Backend Development

Java dominates enterprise software. Frameworks like Spring Boot, Hibernate, and Jakarta EE power the backend systems of banking, healthcare, e-commerce, and government applications. If you aim for a career in backend development, Java is the de facto standard.

### 5. Strong Foundation for Other Languages

Java's syntax and concepts (OOP, static typing, exception handling) transfer directly to languages like C#, Kotlin, Scala, and even TypeScript. Learning Java well makes picking up other languages significantly easier.

## Detailed Explanation

### 1. The History of Java

Java's story begins in 1991 when James Gosling, Mike Sheridan, and Patrick Naughton at Sun Microsystems started the **Green Project**. The original goal was to create a language for interactive television, but the technology was too advanced for the cable TV industry at the time. The language was initially called **Oak** (named after an oak tree outside Gosling's office), but was later renamed to **Java** (inspired by Java coffee from Indonesia).

Java 1.0 was publicly released in 1996 with the promise of "Write Once, Run Anywhere." The language quickly gained popularity because of its platform independence, security features, and suitability for the emerging World Wide Web. Java applets allowed interactive content in web browsers, which was revolutionary at the time.

#### Major Java Versions

VersionYearKey FeaturesJava 1.01996Initial release, applets, AWTJava 2 (1.2)1998Collections framework, Swing GUIJava 52004Generics, enhanced for-loop, autoboxing, enums, varargsJava 82014Lambda expressions, Stream API, Optional, default methodsJava 112018LTS release, var in lambdas, HTTP clientJava 172021LTS release, sealed classes, pattern matchingJava 212023LTS release, virtual threads, record patterns

Since Java 9, Oracle follows a six-month release cycle. However, only certain versions are designated as **Long-Term Support (LTS)** releases. For production use and learning, it is recommended to use the latest LTS version (Java 21 as of this writing).

### 2. Write Once, Run Anywhere (WORA)

The WORA principle is what sets Java apart from languages like C and C++. In C/C++, your source code is compiled directly into **machine code** specific to the operating system and processor. A program compiled on Windows will not run on Linux without recompilation.

Java takes a different approach. The Java compiler (`javac`) compiles your source code into **bytecode**, which is a platform-independent intermediate representation. This bytecode runs on the **Java Virtual Machine (JVM)**, which is available for every major operating system. The JVM translates bytecode into the native machine code of whatever platform it is running on.

This means you compile your Java code once, and the resulting `.class` file can run on Windows, Linux, macOS, or any other platform that has a JVM installed.

### 3. JDK vs JRE vs JVM

Understanding the distinction between JDK, JRE, and JVM is critical. These three components form a nested hierarchy:

#### JVM (Java Virtual Machine)

The JVM is an abstract computing machine that executes Java bytecode. It is responsible for: loading bytecode, verifying it for security, interpreting or compiling it to native machine code (using JIT - Just-In-Time compilation), managing memory through garbage collection, and handling exceptions. The JVM is **platform-dependent** (each OS has its own JVM implementation), but it runs the same platform-independent bytecode.

#### JRE (Java Runtime Environment)

The JRE contains the JVM plus the standard Java class libraries (like `java.lang`, `java.util`, `java.io`) and other supporting files needed to run Java applications. If you only want to **run** Java programs (not develop them), you need the JRE. The JRE = JVM + standard libraries.

#### JDK (Java Development Kit)

The JDK contains the JRE plus development tools like the Java compiler (`javac`), debugger (`jdb`), documentation generator (`javadoc`), and archiver (`jar`). If you want to **develop** Java programs, you need the JDK. The JDK = JRE + development tools = JVM + libraries + development tools.

### 4. Java Editions

Java comes in three main editions, each targeting a different type of application:

#### Java SE (Standard Edition)

This is the core Java platform. It includes the fundamental libraries and APIs for general-purpose programming: data types, collections, I/O, networking, concurrency, and more. When people say "learn Java," they typically mean Java SE. This is what you will learn in this tutorial series.

#### Java EE (Enterprise Edition) / Jakarta EE

Built on top of Java SE, this edition provides additional APIs for building large-scale, distributed, enterprise applications. It includes technologies like Servlets, JSP, EJB, JPA, and JMS. Java EE was renamed to **Jakarta EE** when it was transferred from Oracle to the Eclipse Foundation.

#### Java ME (Micro Edition)

A stripped-down version of Java designed for resource-constrained devices like embedded systems, IoT devices, and older mobile phones. It is less commonly used today but still relevant in IoT development.

### 5. Where Java Is Used

Java is one of the most versatile languages in terms of application domains:

- **Android Development:** Millions of Android apps are built with Java using Android SDK
- **Enterprise Software:** Banking systems (core banking at SBI, HDFC), insurance platforms, government portals
- **Web Applications:** Backend services using Spring Boot, Hibernate, and Microservices architecture
- **Big Data:** Apache Hadoop, Apache Spark, Apache Kafka are all written in Java or Scala (which runs on JVM)
- **Cloud Computing:** AWS, Google Cloud, and Azure all have first-class Java support
- **Scientific Applications:** MATLAB alternatives, bioinformatics tools
- **Trading Systems:** High-frequency trading platforms at stock exchanges use Java for its performance and reliability
- **Desktop Applications:** IntelliJ IDEA, Eclipse, and NetBeans IDEs are themselves built in Java

### 6. Java vs Python vs C++

FeatureJavaPythonC++TypingStatic (declare types)Dynamic (no type declarations needed)Static (declare types)SpeedFast (JIT compiled)Slower (interpreted)Fastest (compiled to machine code)Memory ManagementAutomatic (garbage collection)Automatic (garbage collection)Manual (new/delete)Platform IndependenceYes (via JVM)Yes (via interpreter)No (compiled per platform)Primary UseEnterprise, Android, backendData science, ML, scriptingSystems, games, competitive programmingLearning CurveModerate (verbose syntax)Easy (concise syntax)Steep (pointers, manual memory)OOPPure OOP (everything in classes)Supports OOP and proceduralSupports OOP and procedural

Java strikes a balance between Python's ease of use and C++'s performance. It is more verbose than Python (you must declare types, write class boilerplate), but this verbosity makes large codebases easier to maintain and debug. It is safer than C++ because the JVM handles memory management, eliminating entire categories of bugs like memory leaks and dangling pointers.

### 7. Java's Compilation Process

Understanding how Java code goes from source to execution is fundamental:

1. **Write:** You write source code in a `.java` file (e.g., `HelloWorld.java`)
2. **Compile:** The Java compiler (`javac`) converts your source code to bytecode, producing a `.class` file (e.g., `HelloWorld.class`)
3. **Load:** The JVM's class loader loads the bytecode into memory
4. **Verify:** The bytecode verifier checks the code for security violations
5. **Execute:** The JVM's execution engine runs the bytecode, using Just-In-Time (JIT) compilation to convert frequently executed bytecode into native machine code for better performance

The JIT compiler is a key performance optimization. Instead of interpreting bytecode line by line (which is slow), the JIT compiler identifies "hot" code paths that are executed frequently and compiles them to native machine code. This is why Java's runtime performance can approach that of C++ in many scenarios.

## Code Examples

### Your First Look at Java Code

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

This is the simplest possible Java program. Every Java program must have at least one **class** (here, `HelloWorld`). The `main` method is the entry point where execution begins. `System.out.println` prints text to the console. We will break down every part of this code in Chapter 3.

**Output:**

```
Hello, World!
```

### Checking Your Java Version

```java
// Run these commands in your terminal (not in a Java file)
// java -version
// javac -version

// You can also check from within Java:
public class CheckVersion {
    public static void main(String[] args) {
        System.out.println("Java Version: " + System.getProperty("java.version"));
        System.out.println("JVM Name: " + System.getProperty("java.vm.name"));
        System.out.println("OS: " + System.getProperty("os.name"));
    }
}
```

The `System.getProperty()` method retrieves system-level information. `java.version` tells you which version of Java is running. `java.vm.name` shows the JVM implementation name (e.g., "Java HotSpot(TM) 64-Bit Server VM"). This is useful for verifying your setup and for debugging environment-related issues.

**Output:**

```
Java Version: 21.0.2
JVM Name: Java HotSpot(TM) 64-Bit Server VM
OS: Windows 11
```

### Java Is Statically Typed

```java
public class StaticTyping {
    public static void main(String[] args) {
        int age = 20;              // integer
        double gpa = 8.75;         // decimal number
        String name = "Aarav";     // text
        boolean isPlaced = false;  // true or false

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("GPA: " + gpa);
        System.out.println("Placed: " + isPlaced);
    }
}
```

Unlike Python where you can write `age = 20` without specifying a type, Java requires you to explicitly declare the data type: `int age = 20`. This is called **static typing**. The compiler checks types at compile time, catching type errors before your program even runs. This makes Java programs more predictable and easier to debug in large codebases.

**Output:**

```
Name: Aarav
Age: 20
GPA: 8.75
Placed: false
```

### Everything in Java Lives Inside a Class

```java
public class Student {
    // Fields (data)
    String name;
    int rollNumber;
    double percentage;

    // Method (behavior)
    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Roll No: " + rollNumber);
        System.out.println("Percentage: " + percentage + "%");
    }

    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "Priya";
        s1.rollNumber = 42;
        s1.percentage = 89.5;
        s1.displayInfo();
    }
}
```

Java is a **purely object-oriented language** (with the exception of primitive types). You cannot write a standalone function outside a class. This example shows a `Student` class with fields (name, rollNumber, percentage) and a method (displayInfo). In the `main` method, we create a Student object using `new`, set its fields, and call its method. This is the fundamental pattern of Java programming.

**Output:**

```
Name: Priya
Roll No: 42
Percentage: 89.5%
```

### Platform Independence Demonstration

```java
public class PlatformInfo {
    public static void main(String[] args) {
        System.out.println("This bytecode runs on any OS with a JVM!");
        System.out.println();
        System.out.println("Current Platform Details:");
        System.out.println("OS: " + System.getProperty("os.name"));
        System.out.println("Architecture: " + System.getProperty("os.arch"));
        System.out.println("Java Home: " + System.getProperty("java.home"));
        System.out.println();
        System.out.println("The .class file compiled on this machine");
        System.out.println("will also run on Linux, macOS, or any");
        System.out.println("other OS that has a JVM installed.");
    }
}
```

This program prints information about the current platform. The key point is that this same `.class` file (compiled bytecode) will run identically on Windows, Linux, or macOS. The JVM on each platform translates the bytecode to the appropriate native instructions. This is the essence of Write Once, Run Anywhere.

**Output:**

```
This bytecode runs on any OS with a JVM!

Current Platform Details:
OS: Windows 11
Architecture: amd64
Java Home: C:\Program Files\Java\jdk-21

The .class file compiled on this machine
will also run on Linux, macOS, or any
other OS that has a JVM installed.
```

### Java vs Python Syntax Comparison

```java
// Java version: Calculate sum of two numbers
public class SumExample {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        int sum = a + b;
        System.out.println("Sum: " + sum);
    }
}

// Python equivalent (for comparison, not runnable in Java):
// a = 10
// b = 20
// sum = a + b
// print("Sum:", sum)

// Key differences:
// 1. Java requires a class wrapper
// 2. Java requires the main method
// 3. Java requires type declarations (int)
// 4. Java statements end with semicolons
// 5. Java uses curly braces {} for blocks
```

This side-by-side comparison highlights the syntactic differences between Java and Python. Java requires more boilerplate (class definition, main method, type declarations, semicolons, curly braces), but this verbosity serves a purpose: it makes the code explicit and unambiguous, which is valuable in large enterprise codebases with hundreds of developers.

**Output:**

```
Sum: 30
```

## Common Mistakes

### Confusing JDK, JRE, and JVM

**Wrong:**

```
// Student installs only JRE and tries to compile:
// Terminal: javac HelloWorld.java
// Error: 'javac' is not recognized as an internal or external command
```

'javac' is not recognized as an internal or external command (Windows) or 'javac: command not found' (Linux/Mac)

**Correct:**

```
// Install the JDK (which includes JRE and JVM)
// Then compile: javac HelloWorld.java
// Then run: java HelloWorld
```

The JRE only lets you **run** Java programs. To **compile** Java source code, you need the JDK, which includes the `javac` compiler. Always install the JDK for development. The JDK includes everything in the JRE plus development tools.

### Thinking Java Is the Same as JavaScript

**Wrong:**

```
// A student assumes JavaScript knowledge applies to Java
// JavaScript: let name = "Aarav";
// Java equivalent is NOT the same syntax rules
```

Conceptual error: Java and JavaScript are completely different languages despite similar names.

**Correct:**

```
// Java:
String name = "Aarav";  // Requires type declaration, semicolon

// JavaScript:
// let name = "Aarav";  // Dynamic typing, different runtime
```

Java and JavaScript are as different as "car" and "carpet." Java is a compiled, statically typed, class-based language that runs on the JVM. JavaScript is an interpreted, dynamically typed, prototype-based language that runs in browsers or Node.js. They share some syntax similarities (C-style braces and semicolons) because both were influenced by C, but their design philosophies and use cases are completely different.

### Assuming Java Code Runs Directly on the OS

**Wrong:**

```
// Student tries to run a .class file directly:
// Double-clicks HelloWorld.class
// Nothing happens or an error appears
```

A .class file cannot be executed directly by the operating system. It contains bytecode, not machine code.

**Correct:**

```
// Correct way to run:
// Step 1: Open terminal/command prompt
// Step 2: Navigate to the directory containing the .class file
// Step 3: Run: java HelloWorld
// (Note: no .class extension in the command)
```

Java bytecode (`.class` files) is not machine code. It cannot be understood directly by your operating system. You must use the `java` command (which starts the JVM) to execute the bytecode. Also note that you run `java HelloWorld`, not `java HelloWorld.class` -- you provide the class name, not the file name.

### Expecting Java to Be Interpreted Like Python

**Wrong:**

```
// Student tries to run Java like Python:
// Terminal: java HelloWorld.java
// (This works in Java 11+ but NOT in earlier versions)
```

In Java versions before 11, you must compile first with javac and then run with java. Direct source execution was added in Java 11.

**Correct:**

```
// Traditional (works in all versions):
// Step 1: javac HelloWorld.java   (compile)
// Step 2: java HelloWorld          (run)

// Single-file shortcut (Java 11+):
// java HelloWorld.java             (compile and run in one step)
```

Unlike Python where you run `python script.py` directly, Java traditionally requires a separate compilation step. The `javac` command compiles `.java` to `.class`, and the `java` command runs the `.class` file. Java 11 introduced single-file source-code execution (`java HelloWorld.java`) for convenience, but this is a shortcut for single-file programs only.

### Confusing Java SE, EE, and ME

**Wrong:**

```
// Student downloads Java ME to build a web application
// or Java EE thinking they need it for basic programming
```

Choosing the wrong Java edition wastes time and leads to confusion.

**Correct:**

```
// For learning Java and general programming:
// Download Java SE (Standard Edition) JDK
// From: https://www.oracle.com/java/technologies/downloads/
// Or: https://adoptium.net/ (OpenJDK)
```

For learning and most development tasks, you need **Java SE**. Java EE (now Jakarta EE) is for enterprise web applications and adds APIs on top of SE -- you do not need it until you start building enterprise software. Java ME is for embedded/IoT devices. Start with Java SE, and you will naturally progress to EE or other editions when needed.

## Summary

- Java is a general-purpose, object-oriented programming language created by James Gosling at Sun Microsystems in 1995, now owned by Oracle Corporation.
- Java follows the Write Once, Run Anywhere (WORA) principle: code is compiled to platform-independent bytecode that runs on any JVM.
- JVM (Java Virtual Machine) executes bytecode. JRE (Java Runtime Environment) = JVM + standard libraries. JDK (Java Development Kit) = JRE + development tools like javac compiler.
- Java is statically typed (you must declare variable types), purely object-oriented (everything lives in classes), and uses automatic garbage collection for memory management.
- Java has three editions: SE (Standard Edition) for general programming, EE/Jakarta EE for enterprise applications, and ME (Micro Edition) for embedded devices.
- Java is used in Android development, enterprise backend systems, banking software, big data tools (Hadoop, Kafka), cloud computing, and trading platforms.
- The compilation process: .java source code -> javac compiler -> .class bytecode -> JVM loads, verifies, and executes using JIT compilation for performance.
- Java is more verbose than Python but more maintainable in large codebases. It is safer than C++ due to automatic memory management and no pointer arithmetic.
- Major Java milestones: Java 5 (generics, enums), Java 8 (lambdas, streams), Java 11 (LTS, var in lambdas), Java 17 (LTS, sealed classes), Java 21 (LTS, virtual threads).
- For placements and interviews, Java is one of the most tested languages. Understanding Java fundamentals gives a strong foundation for DSA and system design.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/introduction-to-java/*
*Practice questions: https://learn.modernagecoders.com/resources/java/introduction-to-java/practice/*
