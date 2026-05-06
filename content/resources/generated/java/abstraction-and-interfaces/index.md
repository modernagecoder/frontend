---
title: "Abstract Classes and Interfaces in Java - Abstraction, Default Methods, Functional Interfaces | Modern Age Coders"
description: "Learn Java abstraction with abstract classes and interfaces. Covers abstract methods, default methods (Java 8), functional interfaces, abstract vs interface comparison, marker interfaces, and multiple inheritance. Includes 49+ practice questions for placement preparation."
slug: abstraction-and-interfaces
canonical: https://learn.modernagecoders.com/resources/java/abstraction-and-interfaces
category: "Java"
keywords: ["java abstract class", "java interface", "abstract vs interface java", "functional interface java", "java default methods", "java abstraction tutorial", "java marker interface", "java multiple inheritance", "java abstract class interview questions"]
---
# Abstraction - Abstract Classes and Interfaces

**Difficulty:** Intermediate  
**Reading time:** 45 min  
**Chapter:** 17  
**Practice questions:** 49

## What Is Abstraction in Java?

**Abstraction** is the process of hiding implementation details and exposing only the essential features. When Arjun uses `System.out.println()`, he does not know (or need to know) how Java internally writes bytes to the console. He just knows the method prints text. That is abstraction.

Java provides two mechanisms for abstraction:

1. **Abstract classes** (partial abstraction): Can have both abstract (unimplemented) and concrete (implemented) methods.
2. **Interfaces** (full abstraction, traditionally): Define a contract that implementing classes must follow.

```
// Abstract class
abstract class Shape {
    abstract double area();           // Abstract: no body
    void describe() {                 // Concrete: has body
        System.out.println("I am a shape with area: " + area());
    }
}

// Interface
interface Drawable {
    void draw();                      // Abstract by default
    default void erase() {            // Default method (Java 8)
        System.out.println("Erasing...");
    }
}
```

An abstract class says: "I have some common behavior, but subclasses must fill in the blanks." An interface says: "Any class that implements me guarantees it can do these things."

## Why Does Abstraction Matter?

Abstraction is one of the four pillars of OOP. It directly influences how software is designed, maintained, and extended.

### 1. Hiding Complexity

When Kavya calls `list.sort()`, she does not care whether it uses merge sort, quicksort, or Tim sort. The implementation is hidden behind an abstract interface. This lets her focus on what to do, not how it is done internally.

### 2. Defining Contracts

An interface is a contract. When a class implements `Comparable`, it guarantees it has a `compareTo()` method. Any code that works with `Comparable` objects can rely on this contract without knowing the specific class.

### 3. Supporting Multiple Inheritance of Type

Java does not support multiple inheritance of classes (to avoid the diamond problem), but a class can implement multiple interfaces. This gives Ravi the flexibility of multiple inheritance without the ambiguity:

```
class SmartPhone implements Camera, GPS, Phone {
    // Must implement all methods from all three interfaces
}
```

### 4. Loose Coupling

Code that depends on interfaces rather than concrete classes is loosely coupled. If Priya writes a method that accepts `List` (interface), it works with `ArrayList`, `LinkedList`, or any future implementation. Swapping the implementation requires no code changes.

### 5. Framework and Library Design

Every major Java framework uses abstraction extensively. Spring's dependency injection works through interfaces. JDBC defines interfaces (`Connection`, `Statement`, `ResultSet`) that database vendors implement. Without abstraction, frameworks would be impossible.

### 6. Interview Relevance

"When would you use an abstract class vs an interface?" is one of the most asked Java interview questions. Understanding the distinction, especially with Java 8+ changes, is critical for placements.

## Detailed Explanation

### 1. Abstract Classes

An abstract class is declared with the `abstract` keyword. It can have abstract methods (no body) and concrete methods (with body). It cannot be instantiated directly.

```
abstract class Animal {
    String name;
    
    // Constructor (yes, abstract classes can have constructors)
    Animal(String name) {
        this.name = name;
    }
    
    // Abstract method: subclasses MUST implement
    abstract void sound();
    
    // Concrete method: inherited by subclasses
    void sleep() {
        System.out.println(name + " is sleeping");
    }
}

class Dog extends Animal {
    Dog(String name) {
        super(name);
    }
    
    @Override
    void sound() {
        System.out.println(name + " says: Bark!");
    }
}

// Animal a = new Animal("Generic");  // ERROR: Cannot instantiate abstract class
Animal a = new Dog("Rex");
a.sound();  // Rex says: Bark!
a.sleep();  // Rex is sleeping
```

Key points about abstract classes:

- Declared with `abstract` keyword
- Can have constructors (called by subclass constructors via `super()`)
- Can have instance variables (fields)
- Can have both abstract and concrete methods
- Cannot be instantiated with `new`
- A subclass must implement all abstract methods, or declare itself abstract
- Can have `static` methods, `final` methods, and any access modifier

### 2. Interfaces

An interface is a fully abstract type (traditionally). It defines a contract of methods that implementing classes must provide.

```
interface Flyable {
    void fly();                        // public abstract by default
    int MAX_ALTITUDE = 10000;          // public static final by default
}

interface Swimmable {
    void swim();
}

// A class can implement multiple interfaces
class Duck implements Flyable, Swimmable {
    @Override
    public void fly() {
        System.out.println("Duck flying");
    }
    
    @Override
    public void swim() {
        System.out.println("Duck swimming");
    }
}

Flyable f = new Duck();
f.fly();  // Duck flying

Swimmable s = new Duck();
s.swim(); // Duck swimming
```

Key points about interfaces:

- All methods are `public abstract` by default (before Java 8)
- All variables are `public static final` (constants)
- A class uses `implements` (not `extends`) to implement an interface
- A class can implement multiple interfaces (multiple inheritance of type)
- An interface can extend another interface using `extends`
- Cannot have constructors
- Cannot have instance variables (only constants)

### 3. Abstract Class vs Interface

FeatureAbstract ClassInterfaceKeywordabstract classinterfaceMethodsAbstract + concreteAbstract (+ default/static since Java 8)VariablesInstance variables (any type)Only public static final constantsConstructorsYesNoMultiple inheritanceNo (single extends)Yes (multiple implements)Access modifiersAnypublic only (for methods)When to useShared state + partial implementationDefine a contract / capability

### 4. When to Use Which

**Use an abstract class when:**

- Subclasses share common state (fields) and behavior
- You want to provide a partial implementation with some methods already coded
- You need constructors to initialize shared state
- Example: `abstract class Vehicle` with fields `speed`, `fuel`, and concrete methods like `refuel()`

**Use an interface when:**

- You want to define a capability that unrelated classes can share
- You need multiple inheritance of type
- You want to enforce a contract without dictating implementation
- Example: `interface Serializable`, `interface Comparable`

### 5. Default Methods in Interfaces (Java 8)

Java 8 introduced `default` methods in interfaces. These have a body and are inherited by implementing classes:

```
interface Logger {
    void log(String message);  // Abstract
    
    default void logInfo(String message) {  // Default method
        log("INFO: " + message);
    }
    
    default void logError(String message) {
        log("ERROR: " + message);
    }
}

class ConsoleLogger implements Logger {
    @Override
    public void log(String message) {
        System.out.println(message);
    }
    // logInfo and logError are inherited
}

ConsoleLogger cl = new ConsoleLogger();
cl.logInfo("Application started");   // INFO: Application started
cl.logError("File not found");       // ERROR: File not found
```

Default methods were added to allow interface evolution: adding new methods to existing interfaces without breaking all implementing classes.

### 6. Static Methods in Interfaces (Java 8)

Interfaces can also have `static` methods. These belong to the interface itself and are not inherited:

```
interface MathUtils {
    static int square(int n) {
        return n * n;
    }
    
    static int cube(int n) {
        return n * n * n;
    }
}

// Called on the interface, not on implementing classes
System.out.println(MathUtils.square(5));  // 25
System.out.println(MathUtils.cube(3));    // 27
```

### 7. Functional Interfaces

A **functional interface** has exactly one abstract method. It can be annotated with `@FunctionalInterface` (optional but recommended). Functional interfaces are the foundation of lambda expressions.

```
@FunctionalInterface
interface Converter {
    double convert(double value);  // Single abstract method
    
    // default and static methods are allowed
    default void describe() {
        System.out.println("I am a converter");
    }
}

// Lambda expression (because Converter is a functional interface)
Converter kmToMiles = (km) -> km * 0.621371;
Converter celToFar = (c) -> c * 9.0 / 5 + 32;

System.out.println(kmToMiles.convert(100));  // 62.1371
System.out.println(celToFar.convert(37));    // 98.6
```

Common built-in functional interfaces: `Runnable` (run()), `Callable` (call()), `Comparator` (compare()), `Predicate` (test()), `Function` (apply()).

### 8. Marker Interfaces

A **marker interface** has no methods. It simply "marks" a class as having a certain property. The JVM or frameworks check for this marker using `instanceof`.

```
// Built-in marker interfaces:
// java.io.Serializable — marks a class as serializable
// java.lang.Cloneable — marks a class as cloneable

import java.io.Serializable;

class Student implements Serializable {
    String name;
    int age;
    
    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

// Now Student objects can be serialized to a file or stream
```

With annotations available since Java 5, marker interfaces are less common for new APIs, but the existing ones (`Serializable`, `Cloneable`) remain important.

### 9. Interface Extending Interface

An interface can extend one or more interfaces:

```
interface Readable {
    void read();
}

interface Writable {
    void write();
}

interface ReadWritable extends Readable, Writable {
    void seek(int position);
}

// A class implementing ReadWritable must implement read(), write(), and seek()
class File implements ReadWritable {
    @Override
    public void read() { System.out.println("Reading file"); }
    @Override
    public void write() { System.out.println("Writing file"); }
    @Override
    public void seek(int pos) { System.out.println("Seeking to " + pos); }
}
```

## Code Examples

### Abstract Class with Constructors and Mixed Methods

```java
abstract class Vehicle {
    String brand;
    int year;

    Vehicle(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }

    abstract void start();
    abstract double fuelEfficiency();

    void displayInfo() {
        System.out.println(brand + " (" + year + ")");
        System.out.println("Fuel efficiency: " + fuelEfficiency() + " km/l");
    }
}

class Car extends Vehicle {
    Car(String brand, int year) {
        super(brand, year);
    }

    @Override
    void start() { System.out.println(brand + " car engine started"); }

    @Override
    double fuelEfficiency() { return 15.5; }
}

class Bike extends Vehicle {
    Bike(String brand, int year) {
        super(brand, year);
    }

    @Override
    void start() { System.out.println(brand + " bike kick-started"); }

    @Override
    double fuelEfficiency() { return 45.0; }
}

public class Main {
    public static void main(String[] args) {
        Vehicle v1 = new Car("Toyota", 2024);
        Vehicle v2 = new Bike("Honda", 2023);

        v1.start();
        v1.displayInfo();
        System.out.println();
        v2.start();
        v2.displayInfo();
    }
}
```

The abstract class `Vehicle` has a constructor, two abstract methods, and one concrete method. `Car` and `Bike` extend it, implementing the abstract methods. The concrete method `displayInfo()` calls the abstract `fuelEfficiency()`, which is resolved by dynamic dispatch.

**Output:**

```
Toyota car engine started
Toyota (2024)
Fuel efficiency: 15.5 km/l

Honda bike kick-started
Honda (2023)
Fuel efficiency: 45.0 km/l
```

### Interface Implementation and Multiple Interfaces

```java
interface Printable {
    void print();
}

interface Scannable {
    void scan();
}

interface Faxable {
    void fax();
}

class AllInOnePrinter implements Printable, Scannable, Faxable {
    @Override
    public void print() { System.out.println("Printing document..."); }

    @Override
    public void scan() { System.out.println("Scanning document..."); }

    @Override
    public void fax() { System.out.println("Faxing document..."); }
}

class SimplePrinter implements Printable {
    @Override
    public void print() { System.out.println("Simple printing..."); }
}

public class Main {
    public static void main(String[] args) {
        AllInOnePrinter aio = new AllInOnePrinter();
        aio.print();
        aio.scan();
        aio.fax();

        System.out.println();

        // Polymorphism with interfaces
        Printable p = new AllInOnePrinter();
        p.print();
        // p.scan();  // Compilation error: Printable has no scan()

        System.out.println();

        Printable[] printers = { new AllInOnePrinter(), new SimplePrinter() };
        for (Printable pr : printers) {
            pr.print();
        }
    }
}
```

`AllInOnePrinter` implements three interfaces, demonstrating multiple inheritance of type. A `Printable` reference can only call `print()`, even if the actual object supports more. Arrays of interface types enable polymorphic processing.

**Output:**

```
Printing document...
Scanning document...
Faxing document...

Printing document...

Printing document...
Simple printing...
```

### Default and Static Methods in Interfaces (Java 8)

```java
interface Greeting {
    void greet(String name);  // Abstract

    default void greetAll(String... names) {
        for (String name : names) {
            greet(name);
        }
    }

    static String formatName(String name) {
        return name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();
    }
}

class FormalGreeting implements Greeting {
    @Override
    public void greet(String name) {
        System.out.println("Good morning, Mr./Ms. " + name);
    }
}

class CasualGreeting implements Greeting {
    @Override
    public void greet(String name) {
        System.out.println("Hey, " + name + "!");
    }
}

public class Main {
    public static void main(String[] args) {
        FormalGreeting fg = new FormalGreeting();
        fg.greet("Arjun");
        fg.greetAll("Kavya", "Ravi", "Priya");

        System.out.println();

        CasualGreeting cg = new CasualGreeting();
        cg.greetAll("Arjun", "Kavya");

        System.out.println();
        System.out.println(Greeting.formatName("aRJUN"));
    }
}
```

The `default` method `greetAll` is inherited by both implementations and calls the abstract `greet` method polymorphically. The `static` method `formatName` is called on the interface itself, not on instances.

**Output:**

```
Good morning, Mr./Ms. Arjun
Good morning, Mr./Ms. Kavya
Good morning, Mr./Ms. Ravi
Good morning, Mr./Ms. Priya

Hey, Arjun!
Hey, Kavya!

Arjun
```

### Functional Interface with Lambda Expression

```java
@FunctionalInterface
interface MathOperation {
    double execute(double a, double b);
}

public class Main {
    static void compute(double a, double b, MathOperation op, String label) {
        System.out.println(label + ": " + op.execute(a, b));
    }

    public static void main(String[] args) {
        MathOperation add = (a, b) -> a + b;
        MathOperation subtract = (a, b) -> a - b;
        MathOperation multiply = (a, b) -> a * b;
        MathOperation divide = (a, b) -> b != 0 ? a / b : 0;

        compute(10, 5, add, "Add");
        compute(10, 5, subtract, "Subtract");
        compute(10, 5, multiply, "Multiply");
        compute(10, 5, divide, "Divide");
    }
}
```

A `@FunctionalInterface` with one abstract method can be implemented using lambda expressions. Each lambda provides a different implementation of `execute()`. The `compute` method uses polymorphism to call the appropriate operation.

**Output:**

```
Add: 15.0
Subtract: 5.0
Multiply: 50.0
Divide: 2.0
```

### Abstract Class vs Interface: Combined Example

```java
abstract class Employee {
    String name;
    double baseSalary;

    Employee(String name, double baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    abstract double calculateSalary();

    void display() {
        System.out.println(name + " earns " + calculateSalary());
    }
}

interface Taxable {
    double calculateTax();

    default void showTax() {
        System.out.println("Tax: " + calculateTax());
    }
}

interface Bonusable {
    double getBonus();
}

class Manager extends Employee implements Taxable, Bonusable {
    Manager(String name, double baseSalary) {
        super(name, baseSalary);
    }

    @Override
    double calculateSalary() { return baseSalary + getBonus(); }

    @Override
    public double calculateTax() { return calculateSalary() * 0.3; }

    @Override
    public double getBonus() { return baseSalary * 0.2; }
}

public class Main {
    public static void main(String[] args) {
        Manager m = new Manager("Arjun", 80000);
        m.display();
        m.showTax();
        System.out.println("Bonus: " + m.getBonus());
    }
}
```

This example combines abstract classes and interfaces. `Employee` is an abstract class providing shared state and a template. `Taxable` and `Bonusable` are interfaces adding capabilities. `Manager` extends one and implements two, demonstrating both mechanisms working together.

**Output:**

```
Arjun earns 96000.0
Tax: 28800.0
Bonus: 16000.0
```

### Interface Extending Interface and Marker Interface

```java
import java.io.Serializable;

interface Identifiable {
    String getId();
}

interface Displayable {
    void display();
}

interface Entity extends Identifiable, Displayable {
    String getType();
}

class Student implements Entity, Serializable {
    private String id;
    private String name;

    Student(String id, String name) {
        this.id = id;
        this.name = name;
    }

    @Override
    public String getId() { return id; }

    @Override
    public String getType() { return "Student"; }

    @Override
    public void display() {
        System.out.println(getType() + " [" + getId() + "]: " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student("S101", "Kavya");
        s.display();

        System.out.println("Is Identifiable? " + (s instanceof Identifiable));
        System.out.println("Is Serializable? " + (s instanceof Serializable));
        System.out.println("Is Entity? " + (s instanceof Entity));

        // Using interface reference
        Entity e = s;
        e.display();
    }
}
```

The `Entity` interface extends both `Identifiable` and `Displayable`. `Student` implements `Entity` (inheriting all three abstract methods) and the marker interface `Serializable`. The `instanceof` operator confirms all interface relationships.

**Output:**

```
Student [S101]: Kavya
Is Identifiable? true
Is Serializable? true
Is Entity? true
Student [S101]: Kavya
```

## Common Mistakes

### Trying to Instantiate an Abstract Class

**Wrong:**

```
abstract class Animal {
    abstract void sound();
}

Animal a = new Animal();  // Compilation error!
```

Compilation error: Animal is abstract; cannot be instantiated.

**Correct:**

```
abstract class Animal {
    abstract void sound();
}

class Dog extends Animal {
    @Override
    void sound() { System.out.println("Bark"); }
}

Animal a = new Dog();  // Correct: instantiate a concrete subclass
a.sound();
```

Abstract classes cannot be instantiated directly because they may have unimplemented methods. You must create a concrete subclass that implements all abstract methods, then instantiate the subclass.

### Forgetting to Make Interface Methods Public

**Wrong:**

```
interface Printable {
    void print();
}

class Report implements Printable {
    @Override
    void print() {  // Missing public!
        System.out.println("Printing report");
    }
}
```

Compilation error: attempting to assign weaker access privileges; was public.

**Correct:**

```
interface Printable {
    void print();
}

class Report implements Printable {
    @Override
    public void print() {  // Must be public
        System.out.println("Printing report");
    }
}
```

All interface methods are implicitly `public`. When implementing, the method must also be `public`. Omitting the modifier makes it package-private (default), which is more restrictive than `public`, causing a compilation error.

### Not Implementing All Abstract Methods

**Wrong:**

```
abstract class Shape {
    abstract double area();
    abstract double perimeter();
}

class Circle extends Shape {
    double radius;
    Circle(double r) { this.radius = r; }

    @Override
    double area() { return Math.PI * radius * radius; }
    // Forgot to implement perimeter()!
}
```

Compilation error: Circle is not abstract and does not override abstract method perimeter() in Shape.

**Correct:**

```
class Circle extends Shape {
    double radius;
    Circle(double r) { this.radius = r; }

    @Override
    double area() { return Math.PI * radius * radius; }

    @Override
    double perimeter() { return 2 * Math.PI * radius; }
}
```

A concrete (non-abstract) subclass must implement ALL abstract methods from its parent. If you cannot implement all of them, declare the subclass as `abstract` as well.

### Adding Instance Variables to an Interface

**Wrong:**

```
interface User {
    String name;  // Compilation error in practice!
    int age = 0;  // This compiles but is public static final

    void login();
}
```

Variables in interfaces are implicitly public static final. 'String name;' without initialization causes a compilation error because final variables must be initialized.

**Correct:**

```
interface User {
    int MAX_AGE = 150;  // public static final (constant)
    String DEFAULT_ROLE = "Guest";

    void login();
}

// For instance variables, use an abstract class
abstract class UserBase {
    String name;
    int age;

    abstract void login();
}
```

Interfaces cannot have instance variables. All variables in interfaces are implicitly `public static final` (constants) and must be initialized. For instance state, use an abstract class.

### Using @FunctionalInterface on an Interface with Multiple Abstract Methods

**Wrong:**

```
@FunctionalInterface
interface Calculator {
    int add(int a, int b);
    int subtract(int a, int b);  // Second abstract method!
}
```

Compilation error: Calculator is not a functional interface. Multiple non-overriding abstract methods found.

**Correct:**

```
@FunctionalInterface
interface Calculator {
    int compute(int a, int b);  // Single abstract method

    default int addDefault(int a, int b) { return a + b; }  // Default is fine
    static int multiply(int a, int b) { return a * b; }     // Static is fine
}
```

A functional interface must have exactly ONE abstract method. Default methods and static methods do not count as abstract, so they are allowed. The `@FunctionalInterface` annotation enforces this rule at compile time.

## Summary

- Abstraction hides implementation details and exposes only essential features. Java achieves it through abstract classes and interfaces.
- An abstract class (abstract keyword) can have abstract methods (no body), concrete methods (with body), constructors, and instance variables. It cannot be instantiated directly.
- An interface defines a contract of methods. All methods are public abstract by default. All variables are public static final constants.
- A class extends one abstract class but can implement multiple interfaces. This gives Java multiple inheritance of type without the diamond problem.
- Use abstract classes when subclasses share common state and partial behavior. Use interfaces when defining a capability or contract for unrelated classes.
- Default methods (Java 8) allow interfaces to have methods with a body. This enables adding new methods to existing interfaces without breaking implementations.
- Static methods in interfaces (Java 8) are called on the interface itself, not on instances. They are not inherited by implementing classes.
- A functional interface has exactly one abstract method and can be used with lambda expressions. The @FunctionalInterface annotation enforces this at compile time.
- Common functional interfaces include Runnable, Callable, Comparator, Predicate, and Function.
- Marker interfaces (Serializable, Cloneable) have no methods. They tag a class with a capability that the JVM or frameworks check with instanceof.
- An interface can extend multiple interfaces. A class implementing such an interface must implement all inherited abstract methods.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/abstraction-and-interfaces/*
*Practice questions: https://learn.modernagecoders.com/resources/java/abstraction-and-interfaces/practice/*
