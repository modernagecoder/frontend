---
title: "Practice: Lambda Expressions and Streams API"
description: "60 practice problems for Lambda Expressions and Streams API in Java"
slug: lambda-expressions-and-streams-practice
canonical: https://learn.modernagecoders.com/resources/java/lambda-expressions-and-streams/practice/
category: "Java"
---
# Practice: Lambda Expressions and Streams API

**Total questions:** 60

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```java
Predicate isEven = n -> n % 2 == 0;
System.out.println(isEven.test(4));
System.out.println(isEven.test(7));
```

*Hint:* Predicate.test() returns a boolean.

**Answer:** `true`
`false`

The lambda `n -> n % 2 == 0` returns true if n is even. 4 % 2 == 0 is true. 7 % 2 == 0 is false.

### Q2. [Easy] What is the output?

```java
Function<String, Integer> len = s -> s.length();
System.out.println(len.apply("Hello"));
System.out.println(len.apply(""));
```

*Hint:* Function.apply() takes input and returns a result.

**Answer:** `5`
`0`

The lambda returns the string's length. "Hello" has 5 characters. An empty string has 0.

### Q3. [Easy] What is the output?

```java
List nums = List.of(1, 2, 3, 4, 5);
long count = nums.stream().filter(n -> n > 3).count();
System.out.println(count);
```

*Hint:* filter keeps elements where the predicate returns true.

**Answer:** `2`

Elements greater than 3 are 4 and 5. `count()` returns 2.

### Q4. [Easy] What is the output?

```java
List names = List.of("arjun", "priya");
names.stream()
    .map(String::toUpperCase)
    .forEach(System.out::println);
```

*Hint:* map transforms each element. toUpperCase converts to uppercase.

**Answer:** `ARJUN`
`PRIYA`

`map(String::toUpperCase)` transforms each string to uppercase. `forEach` prints each transformed element.

### Q5. [Easy] What is the output?

```java
List nums = List.of(3, 1, 4, 1, 5);
int sum = nums.stream().reduce(0, Integer::sum);
System.out.println(sum);
```

*Hint:* reduce combines all elements. 0 is the identity for addition.

**Answer:** `14`

`reduce(0, Integer::sum)` computes the sum starting from 0. 0 + 3 + 1 + 4 + 1 + 5 = 14.

### Q6. [Medium] What is the output?

```java
List names = List.of("Arjun", "Priya", "Arjun", "Vikram", "Priya");
long count = names.stream().distinct().count();
System.out.println(count);
```

*Hint:* distinct() removes duplicate elements.

**Answer:** `3`

`distinct()` removes duplicates. Unique names are Arjun, Priya, Vikram. Count is 3.

### Q7. [Medium] What is the output?

```java
List nums = List.of(5, 3, 8, 1, 9, 2);
List result = nums.stream()
    .sorted()
    .limit(3)
    .collect(Collectors.toList());
System.out.println(result);
```

*Hint:* sorted() sorts in natural order. limit(3) takes the first 3.

**Answer:** `[1, 2, 3]`

`sorted()` sorts: [1, 2, 3, 5, 8, 9]. `limit(3)` takes the first 3: [1, 2, 3].

### Q8. [Medium] What is the output?

```java
List words = List.of("Java", "is", "fun");
String result = words.stream()
    .collect(Collectors.joining(" "));
System.out.println(result);
```

*Hint:* joining() concatenates elements with the given delimiter.

**Answer:** `Java is fun`

`Collectors.joining(" ")` concatenates all strings with a space delimiter: "Java" + " " + "is" + " " + "fun".

### Q9. [Medium] What is the output?

```java
Optional opt = Optional.of("Hello");
System.out.println(opt.isPresent());
System.out.println(opt.orElse("World"));

Optional empty = Optional.empty();
System.out.println(empty.isPresent());
System.out.println(empty.orElse("World"));
```

*Hint:* orElse returns the contained value if present, otherwise the default.

**Answer:** `true`
`Hello`
`false`
`World`

`Optional.of("Hello")` contains "Hello". `isPresent()` is true, `orElse` returns "Hello" (ignores default). `Optional.empty()` has no value. `isPresent()` is false, `orElse` returns the default "World".

### Q10. [Medium] What is the output?

```java
List<List> nested = List.of(
    List.of(1, 2),
    List.of(3, 4),
    List.of(5)
);

List flat = nested.stream()
    .flatMap(List::stream)
    .collect(Collectors.toList());
System.out.println(flat);
```

*Hint:* flatMap flattens each inner list into a single stream.

**Answer:** `[1, 2, 3, 4, 5]`

`flatMap(List::stream)` converts each inner list into a stream and merges them all into one: 1, 2, 3, 4, 5.

### Q11. [Hard] What is the output?

```java
List names = List.of("Arjun", "Priya", "Avi", "Sneha", "Arun");
Map<Character, List> grouped = names.stream()
    .collect(Collectors.groupingBy(n -> n.charAt(0)));
System.out.println(grouped);
```

*Hint:* groupingBy groups elements by the first character.

**Answer:** `{A=[Arjun, Avi, Arun], P=[Priya], S=[Sneha]}`

Elements are grouped by their first character. 'A' group: Arjun, Avi, Arun. 'P' group: Priya. 'S' group: Sneha.

### Q12. [Hard] What is the output?

```java
List nums = List.of(1, 2, 3, 4, 5);
Optional result = nums.stream()
    .filter(n -> n > 10)
    .findFirst();
System.out.println(result.isPresent());
System.out.println(result.orElse(-1));
```

*Hint:* No element is greater than 10.

**Answer:** `false`
`-1`

No element passes the filter (none > 10). `findFirst()` returns an empty Optional. `isPresent()` is false. `orElse(-1)` returns the default value -1.

### Q13. [Hard] What is the output?

```java
List nums = List.of(1, 2, 3, 4, 5);
boolean allEven = nums.stream().allMatch(n -> n % 2 == 0);
boolean anyEven = nums.stream().anyMatch(n -> n % 2 == 0);
boolean noneNeg = nums.stream().noneMatch(n -> n < 0);
System.out.println(allEven + " " + anyEven + " " + noneNeg);
```

*Hint:* allMatch: all must pass. anyMatch: at least one. noneMatch: none should pass.

**Answer:** `false true true`

Not all are even (1 is odd), so allMatch is false. Some are even (2, 4), so anyMatch is true. None are negative, so noneMatch is true.

### Q14. [Medium] What is the difference between `map()` and `flatMap()` in streams?

*Hint:* Think about what happens when each element maps to a collection.

**Answer:** `map()` transforms each element into exactly one element (one-to-one). `flatMap()` transforms each element into zero or more elements by flattening nested streams (one-to-many). If you map a list of students to their courses and each student has multiple courses, `map()` gives a `Stream<List>` while `flatMap()` gives a `Stream`.

Use map when each element produces one result. Use flatMap when each element produces a stream/collection that should be flattened into the main stream.

### Q15. [Hard] What does it mean that streams are 'lazy'? How does this affect performance?

*Hint:* Think about when intermediate operations actually execute.

**Answer:** Intermediate operations (filter, map, sorted) are not executed when they are called. They are only executed when a terminal operation (collect, forEach, count) is invoked. This enables **short-circuit optimization**: with `findFirst()`, the stream processes elements one by one and stops as soon as a match is found, without processing the entire collection. Laziness also allows the JVM to optimize the pipeline by fusing operations.

Without laziness, `filter().map().findFirst()` would filter all elements, then map all survivors, then pick the first. With laziness, each element goes through filter and map one at a time, stopping at the first match.

## Mixed Questions

### Q1. [Easy] What is the output?

```java
Consumer greet = name -> System.out.println("Hello, " + name);
greet.accept("Arjun");
```

*Hint:* Consumer.accept() takes an argument and returns nothing.

**Answer:** `Hello, Arjun`

The Consumer accepts a String and prints a greeting. `accept("Arjun")` triggers the lambda.

### Q2. [Easy] What is the output?

```java
Supplier greeting = () -> "Hello, World";
System.out.println(greeting.get());
```

*Hint:* Supplier.get() takes no arguments and returns a value.

**Answer:** `Hello, World`

The Supplier takes no input and produces "Hello, World". `get()` invokes the lambda and returns the result.

### Q3. [Medium] What is the output?

```java
List nums = List.of(10, 20, 30, 40, 50);
List result = nums.stream()
    .skip(2)
    .limit(2)
    .collect(Collectors.toList());
System.out.println(result);
```

*Hint:* skip(2) skips the first two. limit(2) takes the next two.

**Answer:** `[30, 40]`

`skip(2)` skips 10 and 20. `limit(2)` takes the next 2 elements: 30 and 40.

### Q4. [Medium] What is the output?

```java
List names = List.of("Arjun", "Priya", "Vikram");
Map<String, Integer> map = names.stream()
    .collect(Collectors.toMap(n -> n, String::length));
System.out.println(map);
```

*Hint:* toMap takes a key function and a value function.

**Answer:** `{Arjun=5, Priya=5, Vikram=6}`

`toMap(n -> n, String::length)` creates a map where the key is the name and the value is its length.

### Q5. [Medium] What is the output?

```java
Function<Integer, Integer> doubleIt = n -> n * 2;
Function<Integer, Integer> addThree = n -> n + 3;
Function<Integer, Integer> combined = doubleIt.andThen(addThree);
System.out.println(combined.apply(5));
```

*Hint:* andThen applies doubleIt first, then addThree to the result.

**Answer:** `13`

`andThen` chains functions: first `doubleIt(5) = 10`, then `addThree(10) = 13`.

### Q6. [Hard] What is the output?

```java
List names = List.of("Arjun", "Priya", "Sneha", "Vikram", "Kavya");
Map<Boolean, List> partitioned = names.stream()
    .collect(Collectors.partitioningBy(n -> n.length() > 5));
System.out.println("Long: " + partitioned.get(true));
System.out.println("Short: " + partitioned.get(false));
```

*Hint:* partitioningBy splits into true and false groups based on the predicate.

**Answer:** `Long: [Vikram]`
`Short: [Arjun, Priya, Sneha, Kavya]`

Only "Vikram" (6 chars) has length > 5. All others (5 chars each) go to the false group.

### Q7. [Hard] What is the output?

```java
List nums = List.of(1, 2, 3, 4, 5);
String result = nums.stream()
    .map(n -> n * n)
    .map(String::valueOf)
    .collect(Collectors.joining(", "));
System.out.println(result);
```

*Hint:* First map squares the number. Second map converts to String. joining concatenates.

**Answer:** `1, 4, 9, 16, 25`

First map: [1, 4, 9, 16, 25]. Second map converts to strings. `joining(", ")` concatenates with comma-space separator.

### Q8. [Hard] What is the output?

```java
List nums = List.of(5, 3, 8, 1, 9, 2, 7);
Optional secondLargest = nums.stream()
    .sorted(Comparator.reverseOrder())
    .skip(1)
    .findFirst();
System.out.println(secondLargest.orElse(-1));
```

*Hint:* Sort in descending order, skip the first (largest), take the next.

**Answer:** `8`

Sorted descending: [9, 8, 7, 5, 3, 2, 1]. Skip 1 (removes 9). findFirst returns 8, which is the second-largest element.

### Q9. [Easy] What is a functional interface in Java?

*Hint:* Think about how many abstract methods it has.

**Answer:** A functional interface is an interface with exactly **one abstract method** (SAM - Single Abstract Method). It can have any number of default and static methods. The `@FunctionalInterface` annotation enforces this constraint. Lambda expressions can only be assigned to functional interface types. Examples: Runnable, Predicate, Function, Consumer, Supplier.

Functional interfaces are the foundation of lambda expressions in Java. The single abstract method defines the lambda's signature.

### Q10. [Medium] What is the difference between `stream()` and `parallelStream()`?

*Hint:* Think about how elements are processed.

**Answer:** `stream()` processes elements sequentially on a single thread. `parallelStream()` splits the data into chunks and processes them concurrently using the ForkJoinPool. Parallel streams can improve performance for CPU-intensive operations on large datasets, but they add overhead and can cause issues with non-thread-safe operations or shared mutable state.

Do not blindly use parallelStream. It helps for large datasets with CPU-bound operations (like complex calculations). It can actually be slower for small datasets or I/O-bound operations due to thread management overhead.

## Multiple Choice Questions

### Q1. [Easy] What is a lambda expression in Java?

A. A new data type
B. A concise way to represent an anonymous function
C. A loop structure
D. A design pattern

**Answer:** B

**B is correct.** A lambda expression is a short way to define a function without a name. It was introduced in Java 8 and is used with functional interfaces.

### Q2. [Easy] Which functional interface takes an argument and returns a boolean?

A. Function<T,R>
B. Consumer
C. Predicate
D. Supplier

**Answer:** C

**C is correct.** `Predicate` has a `test(T t)` method that returns boolean. Function returns R, Consumer returns void, Supplier takes no argument.

### Q3. [Easy] What does stream().filter() do?

A. Removes all elements
B. Keeps elements that match the given predicate
C. Transforms each element
D. Sorts the elements

**Answer:** B

**B is correct.** `filter()` takes a Predicate and returns a stream containing only the elements for which the predicate returns true.

### Q4. [Easy] What is String::toUpperCase an example of?

A. Static method call
B. Lambda expression
C. Method reference
D. Constructor call

**Answer:** C

**C is correct.** `String::toUpperCase` is a method reference -- shorthand for `s -> s.toUpperCase()`. It references the toUpperCase instance method of the String class.

### Q5. [Easy] What type of operation is forEach() in streams?

A. Intermediate operation
B. Terminal operation
C. Source operation
D. Lazy operation

**Answer:** B

**B is correct.** `forEach()` is a terminal operation that triggers the stream pipeline and consumes the stream. After forEach, the stream cannot be reused.

### Q6. [Medium] What does Collectors.groupingBy() return?

A. List
B. Set
C. Map<K, List>
D. Optional

**Answer:** C

**C is correct.** `groupingBy()` groups stream elements by a classifier function and returns a Map where keys are the group values and values are Lists of elements in each group.

### Q7. [Medium] What does Optional.orElse(defaultValue) do?

A. Always returns the default value
B. Returns the contained value if present, otherwise returns defaultValue
C. Throws an exception if the value is present
D. Sets the contained value to defaultValue

**Answer:** B

**B is correct.** `orElse()` returns the wrapped value if present, or the provided default value if the Optional is empty.

### Q8. [Medium] Why are streams considered lazy?

A. They run on background threads
B. Intermediate operations are not executed until a terminal operation is called
C. They process elements slowly
D. They always use parallel processing

**Answer:** B

**B is correct.** Intermediate operations (filter, map, sorted) just build a pipeline. They execute only when a terminal operation (collect, forEach, count) triggers the pipeline.

### Q9. [Medium] What does flatMap do in streams?

A. Filters and maps simultaneously
B. Maps each element to a stream and flattens them into a single stream
C. Creates a flat data structure
D. Maps elements in parallel

**Answer:** B

**B is correct.** `flatMap` maps each element to a stream and then flattens all resulting streams into one. It is used when each element maps to multiple values.

### Q10. [Medium] Which is NOT an intermediate stream operation?

A. filter()
B. map()
C. collect()
D. sorted()

**Answer:** C

**C is correct.** `collect()` is a terminal operation that triggers the pipeline and gathers results. filter, map, and sorted are intermediate operations.

### Q11. [Hard] What is the difference between Predicate.and() and Predicate.or()?

A. and() combines predicates with logical AND; or() combines with logical OR
B. They are identical
C. and() is for numbers; or() is for strings
D. and() creates a new predicate; or() modifies the existing one

**Answer:** A

**A is correct.** `and()` returns a composed Predicate that is true only if both predicates are true. `or()` returns true if either predicate is true. Both return new Predicate instances.

### Q12. [Hard] What happens if you call Optional.of(null)?

A. Returns an empty Optional
B. Returns an Optional containing null
C. Throws NullPointerException
D. Returns null

**Answer:** C

**C is correct.** `Optional.of(null)` throws `NullPointerException`. Use `Optional.ofNullable(null)` if the value might be null -- it returns an empty Optional for null.

### Q13. [Hard] What does reduce(identity, accumulator) return when the stream is empty?

A. null
B. The identity value
C. An empty Optional
D. Throws NoSuchElementException

**Answer:** B

**B is correct.** When the stream is empty, `reduce(identity, accumulator)` returns the identity value. For example, `reduce(0, Integer::sum)` returns 0 for an empty stream.

### Q14. [Hard] What is the correct lambda syntax for a BiFunction that takes two integers and returns their sum?

A. BiFunction<Integer, Integer, Integer> f = a, b -> a + b
B. BiFunction<Integer, Integer, Integer> f = (a, b) -> a + b
C. BiFunction<Integer, Integer, Integer> f = (a, b) -> { return a + b }
D. BiFunction<Integer, Integer, Integer> f = (a, b) => a + b

**Answer:** B

**B is correct.** Multiple parameters must be in parentheses: `(a, b) -> a + b`. Option A is missing parentheses. Option C is missing a semicolon after return. Option D uses => which is JavaScript syntax, not Java.

### Q15. [Easy] Can a stream be reused after a terminal operation?

A. Yes, streams are reusable
B. No, a stream can only be consumed once
C. Yes, if you call reset()
D. Only if it is a parallel stream

**Answer:** B

**B is correct.** After a terminal operation, the stream is closed and cannot be reused. Attempting to use it again throws `IllegalStateException`. Create a new stream from the source to reprocess.

## Coding Challenges

### Challenge 1. Custom Filter and Transform

**Difficulty:** Easy

Given a list of integers, use streams to filter out odd numbers, double each remaining number, and collect into a list. Print the result.

**Constraints:**

- Use stream(), filter(), map(), and collect().

**Sample input:**

```
List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
```

**Sample output:**

```
[4, 8, 12, 16, 20]
```

**Solution:**

```java
import java.util.List;
import java.util.stream.Collectors;

public class FilterAndTransform {
    public static void main(String[] args) {
        List<Integer> nums = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        List<Integer> result = nums.stream()
            .filter(n -> n % 2 == 0)
            .map(n -> n * 2)
            .collect(Collectors.toList());
        System.out.println(result);
    }
}
```

### Challenge 2. Student Grade Report

**Difficulty:** Medium

Given a list of Student records (name, marks), use streams to: (1) Find students who scored above 80 (sorted by marks descending). (2) Calculate the class average. (3) Group students into PASS (>=40) and FAIL (<40).

**Constraints:**

- Use stream operations: filter, sorted, mapToInt, average, partitioningBy.

**Sample input:**

```
Students: Arjun(85), Priya(92), Vikram(35), Sneha(78), Rohan(42)
```

**Sample output:**

```
Above 80: [Priya(92), Arjun(85)]
Average: 66.4
PASS: [Arjun, Priya, Sneha, Rohan]
FAIL: [Vikram]
```

**Solution:**

```java
import java.util.*;
import java.util.stream.Collectors;

public class GradeReport {
    record Student(String name, int marks) {}

    public static void main(String[] args) {
        List<Student> students = List.of(
            new Student("Arjun", 85),
            new Student("Priya", 92),
            new Student("Vikram", 35),
            new Student("Sneha", 78),
            new Student("Rohan", 42)
        );

        List<String> above80 = students.stream()
            .filter(s -> s.marks() > 80)
            .sorted(Comparator.comparingInt(Student::marks).reversed())
            .map(s -> s.name() + "(" + s.marks() + ")")
            .collect(Collectors.toList());
        System.out.println("Above 80: " + above80);

        double avg = students.stream()
            .mapToInt(Student::marks)
            .average().orElse(0);
        System.out.printf("Average: %.1f%n", avg);

        Map<Boolean, List<String>> passFailMap = students.stream()
            .collect(Collectors.partitioningBy(
                s -> s.marks() >= 40,
                Collectors.mapping(Student::name, Collectors.toList())
            ));
        System.out.println("PASS: " + passFailMap.get(true));
        System.out.println("FAIL: " + passFailMap.get(false));
    }
}
```

### Challenge 3. Word Frequency Counter

**Difficulty:** Medium

Given a list of sentences, use streams to split each into words, count the frequency of each word (case-insensitive), and display the top 5 most frequent words.

**Constraints:**

- Use flatMap to split sentences into words. Use Collectors.groupingBy and Collectors.counting().

**Sample input:**

```
"Java is great", "Java is powerful", "Java and Python are great"
```

**Sample output:**

```
java: 3
is: 2
great: 2
python: 1
and: 1
```

**Solution:**

```java
import java.util.*;
import java.util.stream.Collectors;

public class WordFrequency {
    public static void main(String[] args) {
        List<String> sentences = List.of(
            "Java is great",
            "Java is powerful",
            "Java and Python are great"
        );

        Map<String, Long> frequency = sentences.stream()
            .flatMap(s -> Arrays.stream(s.toLowerCase().split("\\s+")))
            .collect(Collectors.groupingBy(w -> w, Collectors.counting()));

        frequency.entrySet().stream()
            .sorted(Map.Entry.<String, Long>comparingByValue().reversed())
            .limit(5)
            .forEach(e -> System.out.println(e.getKey() + ": " + e.getValue()));
    }
}
```

### Challenge 4. Employee Analytics Dashboard

**Difficulty:** Hard

Given a list of Employee records (name, department, salary), use streams to: (1) Find the highest-paid employee per department. (2) Calculate total salary expense per department. (3) Find employees earning above the company average. (4) Create a comma-separated string of all employee names sorted alphabetically.

**Constraints:**

- Use groupingBy with downstream collectors, Collectors.maxBy, Collectors.summingInt, and Collectors.joining.

**Sample input:**

```
Multiple employees across Engineering, Marketing, and HR departments
```

**Sample output:**

```
Highest paid per dept: {Engineering=Sneha(95000), ...}
Total per dept: {Engineering=272000, ...}
Above average: [Arjun, Priya, Sneha]
All names: Arjun, Kavya, Priya, Rohan, Sneha, Vikram
```

**Solution:**

```java
import java.util.*;
import java.util.stream.Collectors;

public class EmployeeAnalytics {
    record Employee(String name, String dept, int salary) {}

    public static void main(String[] args) {
        List<Employee> employees = List.of(
            new Employee("Arjun", "Engineering", 85000),
            new Employee("Priya", "Engineering", 92000),
            new Employee("Vikram", "Marketing", 78000),
            new Employee("Sneha", "Engineering", 95000),
            new Employee("Rohan", "Marketing", 72000),
            new Employee("Kavya", "HR", 68000)
        );

        // Highest paid per department
        Map<String, Optional<Employee>> topPerDept = employees.stream()
            .collect(Collectors.groupingBy(
                Employee::dept,
                Collectors.maxBy(Comparator.comparingInt(Employee::salary))
            ));
        topPerDept.forEach((dept, emp) ->
            emp.ifPresent(e -> System.out.println(dept + ": " + e.name() + "(" + e.salary() + ")")));

        // Total salary per dept
        Map<String, Integer> totalPerDept = employees.stream()
            .collect(Collectors.groupingBy(Employee::dept, Collectors.summingInt(Employee::salary)));
        System.out.println("Total per dept: " + totalPerDept);

        // Above company average
        double avg = employees.stream().mapToInt(Employee::salary).average().orElse(0);
        List<String> aboveAvg = employees.stream()
            .filter(e -> e.salary() > avg)
            .map(Employee::name)
            .collect(Collectors.toList());
        System.out.printf("Company avg: %.0f, Above: %s%n", avg, aboveAvg);

        // Sorted names
        String allNames = employees.stream()
            .map(Employee::name)
            .sorted()
            .collect(Collectors.joining(", "));
        System.out.println("All names: " + allNames);
    }
}
```

### Challenge 5. Custom Optional Chain

**Difficulty:** Hard

Create a chain of Optional operations: given a user ID, find the user, get their address, get the city, and convert to uppercase. If any step returns null/empty, return 'UNKNOWN'. Demonstrate with found and not-found cases.

**Constraints:**

- Use Optional.ofNullable, map, flatMap, and orElse. Do not use any null checks (if statements).

**Sample input:**

```
User ID: 1 (exists), User ID: 99 (does not exist)
```

**Sample output:**

```
User 1 city: DELHI
User 99 city: UNKNOWN
```

**Solution:**

```java
import java.util.*;

public class OptionalChain {
    record Address(String city, String state) {}
    record User(int id, String name, Address address) {}

    static Map<Integer, User> database = Map.of(
        1, new User(1, "Arjun", new Address("Delhi", "Delhi")),
        2, new User(2, "Priya", new Address("Mumbai", "Maharashtra")),
        3, new User(3, "Vikram", null) // no address
    );

    static Optional<User> findUser(int id) {
        return Optional.ofNullable(database.get(id));
    }

    static String getCityUpperCase(int userId) {
        return findUser(userId)
            .map(User::address)
            .map(Address::city)
            .map(String::toUpperCase)
            .orElse("UNKNOWN");
    }

    public static void main(String[] args) {
        System.out.println("User 1 city: " + getCityUpperCase(1));
        System.out.println("User 2 city: " + getCityUpperCase(2));
        System.out.println("User 3 city: " + getCityUpperCase(3));
        System.out.println("User 99 city: " + getCityUpperCase(99));
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/lambda-expressions-and-streams/*
