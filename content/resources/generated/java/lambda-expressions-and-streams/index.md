---
title: "Java Lambda Expressions and Streams API - Functional Interfaces, filter, map, reduce | Modern Age Coders"
description: "Learn Java lambda expressions, functional interfaces (Predicate, Function, Consumer, Supplier), method references, Streams API (filter, map, flatMap, reduce, collect), Collectors, and Optional class. Includes 60+ practice questions."
slug: lambda-expressions-and-streams
canonical: https://learn.modernagecoders.com/resources/java/lambda-expressions-and-streams/
category: "Java"
keywords: ["java lambda expressions", "java streams api", "functional interface java", "java stream filter map", "java collectors", "java method reference", "java optional", "java predicate", "java reduce", "java functional programming"]
---
# Lambda Expressions and Streams API

**Difficulty:** Advanced  
**Reading time:** 50 min  
**Chapter:** 23  
**Practice questions:** 60

## What Are Lambda Expressions and Streams?

A **lambda expression** is a concise way to represent an anonymous function (a function without a name) in Java. Introduced in Java 8, lambdas let you pass behavior as an argument to methods, store functions in variables, and write cleaner code.

```java
// Before Java 8: anonymous inner class
Runnable task = new Runnable() {
    @Override
    public void run() {
        System.out.println("Hello");
    }
};

// Java 8+: lambda expression
Runnable task = () -> System.out.println("Hello");
```

The **Streams API** is a library for processing collections (lists, sets, arrays) in a functional, declarative style. Instead of writing loops, you chain operations like `filter`, `map`, and `reduce`:

```java
List names = List.of("Arjun", "Priya", "Vikram", "Sneha", "Rohan");

// Imperative: loop and if
List result = new ArrayList<>();
for (String name : names) {
    if (name.length() > 4) {
        result.add(name.toUpperCase());
    }
}

// Declarative: stream pipeline
List result = names.stream()
    .filter(name -> name.length() > 4)
    .map(String::toUpperCase)
    .collect(Collectors.toList());
// [ARJUN, PRIYA, VIKRAM, SNEHA, ROHAN]
```

Lambdas and Streams together bring functional programming capabilities to Java, making code shorter, more readable, and easier to parallelize.

## Why Are Lambda Expressions and Streams Important?

### 1. Concise and Readable Code

Lambdas eliminate verbose anonymous inner classes. What took 5 lines now takes 1. Streams replace multi-line loops with expressive pipelines. When Sneha reads a stream pipeline, the intent is immediately clear: filter these items, transform them, collect the results.

### 2. Functional Programming in Java

Java was purely object-oriented until Java 8. Lambdas added functional programming features: functions as first-class citizens, immutability, and declarative data processing. Modern Java codebases (Spring Boot, Hibernate, Android) use lambdas and streams extensively.

### 3. Parallel Processing Made Simple

Converting a sequential stream to parallel is a one-word change: `.stream()` becomes `.parallelStream()`. The framework handles thread management. This makes it easy to leverage multi-core CPUs without writing thread management code.

### 4. Industry-Standard API Design

Java's Collections, I/O, and networking APIs now use functional interfaces (Predicate, Function, Consumer). Understanding these patterns is essential for working with any modern Java framework. Spring's WebFlux, for example, is built entirely on functional and reactive patterns.

### 5. Interview and Placement Relevance

Lambda expressions and Streams are among the most frequently asked Java 8+ topics at companies like Google, Amazon, Microsoft, Flipkart, and Goldman Sachs. Questions range from writing stream pipelines to understanding lazy evaluation and terminal operations.

## Detailed Explanation

### 1. Functional Interfaces

A **functional interface** is an interface with exactly one abstract method. Lambdas can only be assigned to functional interface types. The `@FunctionalInterface` annotation enforces this:

```java
@FunctionalInterface
interface Greeting {
    void sayHello(String name); // single abstract method
}

// Lambda assigned to functional interface
Greeting greet = (name) -> System.out.println("Hello, " + name);
greet.sayHello("Arjun"); // Hello, Arjun
```

#### Built-in Functional Interfaces (java.util.function)

InterfaceMethodDescriptionPredicate<T>boolean test(T t)Takes T, returns booleanFunction<T,R>R apply(T t)Takes T, returns RConsumer<T>void accept(T t)Takes T, returns nothingSupplier<T>T get()Takes nothing, returns TBiFunction<T,U,R>R apply(T t, U u)Takes T and U, returns RUnaryOperator<T>T apply(T t)Takes T, returns T (same type)BinaryOperator<T>T apply(T t1, T t2)Takes two T, returns T

```java
import java.util.function.*;

Predicate isEven = n -> n % 2 == 0;
System.out.println(isEven.test(4));  // true
System.out.println(isEven.test(7));  // false

Function<String, Integer> length = s -> s.length();
System.out.println(length.apply("Hello")); // 5

Consumer printer = s -> System.out.println(s);
printer.accept("Hello"); // Hello

Supplier random = () -> Math.random();
System.out.println(random.get()); // 0.xxx

BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
System.out.println(add.apply(3, 4)); // 7
```

### 2. Lambda Syntax

```java
// No parameters
Runnable r = () -> System.out.println("Hello");

// One parameter (parentheses optional)
Consumer c = s -> System.out.println(s);
Consumer c2 = (s) -> System.out.println(s); // also valid

// Multiple parameters
BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;

// Multi-line body (requires braces and explicit return)
Function<Integer, String> classify = n -> {
    if (n > 0) return "positive";
    if (n < 0) return "negative";
    return "zero";
};
```

Key rules: (1) Parameter types can be inferred (omit them). (2) Single parameter does not need parentheses. (3) Single expression does not need braces or `return`. (4) Multi-statement body needs braces and explicit `return`.

### 3. Method References

Method references are a shorthand for lambdas that simply call an existing method:

```java
// Lambda                          // Method Reference
s -> System.out.println(s)     ->  System.out::println
s -> s.toUpperCase()           ->  String::toUpperCase
s -> Integer.parseInt(s)       ->  Integer::parseInt
() -> new ArrayList<>()        ->  ArrayList::new

// Four types of method references:
// 1. Static method:      ClassName::staticMethod
// 2. Instance method:    object::instanceMethod
// 3. Arbitrary object:   ClassName::instanceMethod
// 4. Constructor:        ClassName::new

List names = List.of("arjun", "priya", "vikram");
names.stream()
     .map(String::toUpperCase)       // ClassName::instanceMethod
     .forEach(System.out::println);  // object::instanceMethod
```

### 4. Streams API: Overview

A stream is a sequence of elements that supports functional-style operations. It is NOT a data structure -- it does not store data. It processes data from a source (collection, array, file).

```java
List numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

int sum = numbers.stream()       // create stream
    .filter(n -> n % 2 == 0)     // intermediate: keep even numbers
    .map(n -> n * n)             // intermediate: square each
    .reduce(0, Integer::sum);    // terminal: sum them

System.out.println(sum); // 4+16+36+64+100 = 220
```

Key characteristics: (1) Streams are lazy -- intermediate operations do not execute until a terminal operation is called. (2) Streams can only be consumed once. (3) Streams do not modify the source collection.

### 5. Intermediate Operations

Intermediate operations return a new stream and are lazy (not executed until a terminal operation is called):

```java
List names = List.of("Arjun", "Priya", "Arjun", "Vikram", "Sneha", "Priya");

// filter: keep elements matching a predicate
names.stream().filter(n -> n.startsWith("A")).forEach(System.out::println);
// Arjun, Arjun

// map: transform each element
names.stream().map(String::length).forEach(System.out::println);
// 5, 5, 5, 6, 5, 5

// distinct: remove duplicates
names.stream().distinct().forEach(System.out::println);
// Arjun, Priya, Vikram, Sneha

// sorted: natural order or with comparator
names.stream().sorted().forEach(System.out::println);
// alphabetical
names.stream().sorted(Comparator.comparingInt(String::length)).forEach(System.out::println);
// by length

// limit and skip
names.stream().limit(3).forEach(System.out::println);  // first 3
names.stream().skip(2).forEach(System.out::println);   // skip first 2

// peek: debug/inspect without modifying
names.stream()
    .peek(n -> System.out.println("Processing: " + n))
    .filter(n -> n.length() > 4)
    .forEach(System.out::println);
```

#### flatMap: Flattening Nested Structures

```java
List<List> nested = List.of(
    List.of(1, 2, 3),
    List.of(4, 5),
    List.of(6, 7, 8, 9)
);

List flat = nested.stream()
    .flatMap(List::stream)  // flatten each inner list into a single stream
    .collect(Collectors.toList());
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 6. Terminal Operations

Terminal operations trigger the execution of the stream pipeline and produce a result:

```java
List nums = List.of(3, 1, 4, 1, 5, 9, 2, 6);

// forEach: perform action on each element
nums.stream().forEach(System.out::println);

// collect: gather results into a collection
List evens = nums.stream().filter(n -> n % 2 == 0).collect(Collectors.toList());

// reduce: combine elements into a single value
int sum = nums.stream().reduce(0, Integer::sum); // 31
Optional max = nums.stream().reduce(Integer::max); // 9

// count: number of elements
long count = nums.stream().filter(n -> n > 3).count(); // 4

// findFirst and findAny
Optional first = nums.stream().filter(n -> n > 5).findFirst(); // 9

// anyMatch, allMatch, noneMatch
boolean hasEven = nums.stream().anyMatch(n -> n % 2 == 0);   // true
boolean allPositive = nums.stream().allMatch(n -> n > 0);     // true
boolean noneNegative = nums.stream().noneMatch(n -> n < 0);   // true
```

### 7. Collectors

The `Collectors` class provides factory methods for common collection operations:

```java
import java.util.stream.Collectors;

List names = List.of("Arjun", "Priya", "Vikram", "Sneha", "Rohan");

// toList, toSet
List list = names.stream().collect(Collectors.toList());
Set set = names.stream().collect(Collectors.toSet());

// joining
String joined = names.stream().collect(Collectors.joining(", "));
// "Arjun, Priya, Vikram, Sneha, Rohan"

// toMap
Map<String, Integer> nameLengths = names.stream()
    .collect(Collectors.toMap(n -> n, String::length));
// {Arjun=5, Priya=5, Vikram=6, Sneha=5, Rohan=5}

// groupingBy
Map<Integer, List> byLength = names.stream()
    .collect(Collectors.groupingBy(String::length));
// {5=[Arjun, Priya, Sneha, Rohan], 6=[Vikram]}

// partitioningBy (splits into true/false groups)
Map<Boolean, List> partitioned = names.stream()
    .collect(Collectors.partitioningBy(n -> n.length() > 5));
// {false=[Arjun, Priya, Sneha, Rohan], true=[Vikram]}
```

### 8. The Optional Class

`Optional` is a container that may or may not contain a value. It replaces null checks and prevents NullPointerException:

```java
import java.util.Optional;

// Creating Optional
Optional name = Optional.of("Arjun");       // non-null value
Optional empty = Optional.empty();            // empty
Optional maybe = Optional.ofNullable(null);   // may be null

// Checking and accessing
System.out.println(name.isPresent());  // true
System.out.println(empty.isPresent()); // false

// ifPresent: execute action if value exists
name.ifPresent(n -> System.out.println("Name: " + n));

// orElse: provide default value
String result = empty.orElse("Unknown");  // "Unknown"

// orElseThrow: throw exception if empty
String value = name.orElseThrow(() -> new RuntimeException("No value"));

// map and filter on Optional
Optional length = name.map(String::length); // Optional[5]
Optional filtered = name.filter(n -> n.startsWith("A")); // Optional[Arjun]
```

`Optional` is commonly returned by stream operations like `findFirst()`, `findAny()`, and `reduce()` (without identity). It forces the caller to handle the absence case explicitly.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/lambda-expressions-and-streams/*
*Practice questions: https://learn.modernagecoders.com/resources/java/lambda-expressions-and-streams/practice/*
