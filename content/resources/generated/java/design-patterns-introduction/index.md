---
title: "Java Design Patterns - Singleton, Factory, Builder, Observer, Strategy | Modern Age Coders"
description: "Learn Java design patterns including Singleton (eager, lazy, thread-safe, enum), Factory, Builder, Observer, and Strategy patterns. Understand when to use each pattern and anti-patterns to avoid. Includes 57+ practice questions."
slug: design-patterns-introduction
canonical: https://learn.modernagecoders.com/resources/java/design-patterns-introduction/
category: "Java"
keywords: ["java design patterns", "singleton pattern java", "factory pattern java", "observer pattern java", "builder pattern java", "strategy pattern java", "design patterns interview", "GoF patterns java", "creational patterns", "behavioral patterns"]
---
# Introduction to Design Patterns

**Difficulty:** Advanced  
**Reading time:** 50 min  
**Chapter:** 25  
**Practice questions:** 57

## What Are Design Patterns?

A **design pattern** is a reusable solution to a commonly occurring problem in software design. Design patterns are not code -- they are templates or blueprints that describe how to solve a problem in a way that is proven to work across many projects.

The concept was popularized by the book *"Design Patterns: Elements of Reusable Object-Oriented Software"* (1994) by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides -- collectively known as the **Gang of Four (GoF)**. The book describes 23 patterns organized into three categories:

- **Creational Patterns**: How objects are created (Singleton, Factory, Builder, Prototype, Abstract Factory)
- **Structural Patterns**: How objects are composed (Adapter, Decorator, Proxy, Facade, Composite)
- **Behavioral Patterns**: How objects communicate (Observer, Strategy, Command, Iterator, State)

```java
// Without pattern: messy object creation
DBConnection conn = new DBConnection();
conn.setHost("localhost");
conn.setPort(3306);
conn.setDatabase("students");
conn.setUsername("admin");
conn.setPassword("secret");
conn.setPoolSize(10);

// With Builder pattern: clean, readable
DBConnection conn = DBConnection.builder()
    .host("localhost")
    .port(3306)
    .database("students")
    .username("admin")
    .password("secret")
    .poolSize(10)
    .build();
```

Patterns give developers a shared vocabulary. When Arjun says "use a Singleton for the database connection pool," every developer on the team understands exactly what that means.

## Why Are Design Patterns Important?

### 1. Proven Solutions to Common Problems

Design patterns represent decades of collective experience. Instead of reinventing solutions, you use battle-tested approaches. When Priya needs a single configuration manager shared across her application, she does not need to figure out thread-safe global access from scratch -- the Singleton pattern already solves this.

### 2. Common Vocabulary for Teams

Patterns provide a shared language among developers. Saying "use the Observer pattern" is more precise and concise than explaining the entire publish-subscribe mechanism. This improves communication during code reviews, design discussions, and documentation.

### 3. Better Software Architecture

Patterns promote loose coupling, high cohesion, and the SOLID principles. The Strategy pattern lets you swap algorithms without changing client code. The Observer pattern decouples event producers from consumers. These principles lead to code that is easier to maintain and extend.

### 4. Framework Understanding

Every major Java framework uses design patterns. Spring Framework uses Singleton (bean scope), Factory (BeanFactory), Proxy (AOP), and Observer (event system). Understanding patterns helps you understand frameworks at a deeper level.

### 5. Interview and Placement Significance

Design pattern questions are standard in interviews at companies like Amazon, Google, Microsoft, Flipkart, and Goldman Sachs. Interviewers ask candidates to implement Singleton, explain Factory vs Abstract Factory, or identify which pattern to use for a given scenario.

## Detailed Explanation

### 1. Singleton Pattern

The **Singleton** pattern ensures that a class has only one instance and provides a global point of access to it. Use it when exactly one object is needed to coordinate actions (e.g., database connection pool, configuration manager, logger).

#### Eager Initialization

```java
public class EagerSingleton {
    // Instance created at class loading time
    private static final EagerSingleton INSTANCE = new EagerSingleton();

    private EagerSingleton() {} // Private constructor prevents external instantiation

    public static EagerSingleton getInstance() {
        return INSTANCE;
    }
}
```

Pros: Simple, thread-safe (class loading is thread-safe). Cons: Instance is created even if never used (wastes memory if construction is expensive).

#### Lazy Initialization (Not Thread-Safe)

```java
public class LazySingleton {
    private static LazySingleton instance;

    private LazySingleton() {}

    public static LazySingleton getInstance() {
        if (instance == null) {
            instance = new LazySingleton(); // Created on first call
        }
        return instance;
    }
}
```

Pros: Instance created only when needed. Cons: NOT thread-safe. Two threads could both see `instance == null` and create two instances.

#### Thread-Safe with Double-Checked Locking

```java
public class ThreadSafeSingleton {
    private static volatile ThreadSafeSingleton instance;

    private ThreadSafeSingleton() {}

    public static ThreadSafeSingleton getInstance() {
        if (instance == null) {                    // First check (no locking)
            synchronized (ThreadSafeSingleton.class) {
                if (instance == null) {            // Second check (with lock)
                    instance = new ThreadSafeSingleton();
                }
            }
        }
        return instance;
    }
}
```

The first check avoids synchronization overhead on every call. The second check (inside synchronized block) ensures only one instance is created. The `volatile` keyword prevents instruction reordering that could expose a partially constructed object.

#### Enum Singleton (Recommended)

```java
public enum EnumSingleton {
    INSTANCE;

    private int count = 0;

    public void increment() { count++; }
    public int getCount() { return count; }
}

// Usage
EnumSingleton.INSTANCE.increment();
System.out.println(EnumSingleton.INSTANCE.getCount()); // 1
```

The enum approach is the most robust Singleton implementation. It is inherently thread-safe, prevents reflection attacks (cannot create new enum instances via reflection), and handles serialization correctly (always returns the same instance). Joshua Bloch (Effective Java) recommends this approach.

### 2. Factory Pattern

The **Factory** pattern defines an interface for creating objects but lets subclasses decide which class to instantiate. It decouples object creation from the code that uses the objects.

```java
// Product interface
interface Shape {
    void draw();
}

// Concrete products
class Circle implements Shape {
    public void draw() { System.out.println("Drawing Circle"); }
}
class Rectangle implements Shape {
    public void draw() { System.out.println("Drawing Rectangle"); }
}
class Triangle implements Shape {
    public void draw() { System.out.println("Drawing Triangle"); }
}

// Factory
class ShapeFactory {
    public static Shape createShape(String type) {
        return switch (type.toLowerCase()) {
            case "circle" -> new Circle();
            case "rectangle" -> new Rectangle();
            case "triangle" -> new Triangle();
            default -> throw new IllegalArgumentException("Unknown shape: " + type);
        };
    }
}

// Client code -- does not know concrete classes
Shape s1 = ShapeFactory.createShape("circle");
Shape s2 = ShapeFactory.createShape("rectangle");
s1.draw(); // Drawing Circle
s2.draw(); // Drawing Rectangle
```

Benefits: (1) Client code depends on the interface (Shape), not concrete classes. (2) Adding a new shape requires modifying only the factory, not client code. (3) Object creation logic is centralized.

### 3. Builder Pattern

The **Builder** pattern separates the construction of a complex object from its representation. Use it when an object has many optional parameters or when construction involves multiple steps.

```java
public class Student {
    private final String name;       // required
    private final int age;           // required
    private final String email;      // optional
    private final String phone;      // optional
    private final String address;    // optional
    private final String department; // optional

    private Student(Builder builder) {
        this.name = builder.name;
        this.age = builder.age;
        this.email = builder.email;
        this.phone = builder.phone;
        this.address = builder.address;
        this.department = builder.department;
    }

    @Override
    public String toString() {
        return "Student{name='" + name + "', age=" + age
            + ", email='" + email + "', dept='" + department + "'}";
    }

    public static class Builder {
        private final String name; // required
        private final int age;     // required
        private String email = "";
        private String phone = "";
        private String address = "";
        private String department = "";

        public Builder(String name, int age) {
            this.name = name;
            this.age = age;
        }

        public Builder email(String email) { this.email = email; return this; }
        public Builder phone(String phone) { this.phone = phone; return this; }
        public Builder address(String addr) { this.address = addr; return this; }
        public Builder department(String dept) { this.department = dept; return this; }

        public Student build() { return new Student(this); }
    }
}

// Usage: method chaining
Student s = new Student.Builder("Arjun", 20)
    .email("arjun@email.com")
    .department("CS")
    .build();
System.out.println(s);
```

Benefits: (1) Readable object construction (named parameters via method chaining). (2) Immutable objects (all fields are final). (3) No telescoping constructor anti-pattern (constructors with many parameters). (4) Optional parameters have sensible defaults.

### 4. Observer Pattern

The **Observer** pattern defines a one-to-many dependency. When one object (the subject) changes state, all its dependents (observers) are notified automatically. This is the foundation of event systems.

```java
import java.util.ArrayList;
import java.util.List;

// Observer interface
interface Observer {
    void update(String event, Object data);
}

// Subject (Observable)
class EventBus {
    private final List observers = new ArrayList<>();

    public void subscribe(Observer observer) {
        observers.add(observer);
    }

    public void unsubscribe(Observer observer) {
        observers.remove(observer);
    }

    public void publish(String event, Object data) {
        for (Observer observer : observers) {
            observer.update(event, data);
        }
    }
}

// Concrete observers
class EmailNotifier implements Observer {
    public void update(String event, Object data) {
        System.out.println("Email: [" + event + "] " + data);
    }
}

class LogNotifier implements Observer {
    public void update(String event, Object data) {
        System.out.println("Log: [" + event + "] " + data);
    }
}

// Usage
EventBus bus = new EventBus();
bus.subscribe(new EmailNotifier());
bus.subscribe(new LogNotifier());
bus.publish("ORDER_PLACED", "Order #1234");
// Both observers receive the notification
```

Benefits: (1) Loose coupling -- the subject does not need to know the concrete observer types. (2) Open/Closed principle -- new observers can be added without modifying the subject. (3) Runtime flexibility -- observers can subscribe and unsubscribe dynamically.

### 5. Strategy Pattern

The **Strategy** pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. The client selects the algorithm at runtime without changing its code.

```java
// Strategy interface
interface SortStrategy {
    void sort(int[] data);
}

// Concrete strategies
class BubbleSort implements SortStrategy {
    public void sort(int[] data) {
        System.out.println("Sorting with Bubble Sort");
        for (int i = 0; i < data.length - 1; i++)
            for (int j = 0; j < data.length - i - 1; j++)
                if (data[j] > data[j+1]) {
                    int temp = data[j]; data[j] = data[j+1]; data[j+1] = temp;
                }
    }
}

class QuickSort implements SortStrategy {
    public void sort(int[] data) {
        System.out.println("Sorting with Quick Sort");
        java.util.Arrays.sort(data); // simplified
    }
}

// Context
class Sorter {
    private SortStrategy strategy;

    public void setStrategy(SortStrategy strategy) {
        this.strategy = strategy;
    }

    public void performSort(int[] data) {
        strategy.sort(data);
    }
}

// Usage: strategy selected at runtime
Sorter sorter = new Sorter();
int[] data = {5, 3, 8, 1, 9};

sorter.setStrategy(new BubbleSort());
sorter.performSort(data);  // Uses Bubble Sort

sorter.setStrategy(new QuickSort());
sorter.performSort(data);  // Uses Quick Sort
```

Benefits: (1) Algorithms are interchangeable at runtime. (2) Adding a new algorithm means adding a new class, not modifying existing code (Open/Closed Principle). (3) Eliminates complex conditional statements (if-else or switch) for selecting algorithms.

### 6. When to Use Each Pattern

PatternWhen to UseReal-World ExampleSingletonExactly one instance needed globallyDatabase connection pool, Logger, ConfigurationFactoryObject creation depends on input/conditionsShape creator, Document parser (PDF/XML/JSON)BuilderComplex object with many optional parametersHTTP request builder, SQL query builderObserverOne-to-many notification neededEvent systems, UI event handlers, pub-sub messagingStrategyMultiple algorithms, selected at runtimePayment methods, sorting algorithms, compression

### 7. Anti-Patterns to Avoid

- **God Object**: A single class that does everything. Violates Single Responsibility Principle.
- **Singleton Overuse**: Using Singleton for everything makes code tightly coupled and hard to test. Use dependency injection instead.
- **Premature Pattern Application**: Do not use patterns just because they exist. Apply them when the problem clearly matches.
- **Copy-Paste Programming**: Duplicating code instead of abstracting common behavior into a pattern.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/design-patterns-introduction/*
*Practice questions: https://learn.modernagecoders.com/resources/java/design-patterns-introduction/practice/*
