---
title: "Polymorphism in Java - Method Overloading, Overriding, Dynamic Dispatch | Modern Age Coders"
description: "Learn polymorphism in Java including compile-time polymorphism (method overloading), runtime polymorphism (method overriding, dynamic method dispatch), upcasting, downcasting, and instanceof. Includes 50+ practice questions with output prediction and interview-style problems."
slug: polymorphism-in-java
canonical: https://learn.modernagecoders.com/resources/java/polymorphism-in-java/
category: "Java"
keywords: ["java polymorphism", "method overloading java", "runtime polymorphism java", "dynamic method dispatch", "java upcasting downcasting", "method overriding java", "compile time polymorphism java", "java instanceof", "java polymorphism interview questions"]
---
# Polymorphism in Java

**Difficulty:** Intermediate  
**Reading time:** 40 min  
**Chapter:** 16  
**Practice questions:** 50

## What Is Polymorphism in Java?

**Polymorphism** means "many forms." In Java, it refers to the ability of a single entity (method, object, or reference) to take on different forms depending on the context. A parent class reference variable can hold a child class object, and the method that gets executed depends on the actual object type, not the reference type.

Consider a simple real-world analogy: the word "open" has different meanings depending on context. You open a door, you open a book, you open a browser. The action adapts to the object. That is polymorphism.

Java supports two types of polymorphism:

```
// 1. Compile-time polymorphism (Method Overloading)
class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
}

// 2. Runtime polymorphism (Method Overriding)
class Animal {
    void sound() { System.out.println("Some sound"); }
}
class Dog extends Animal {
    void sound() { System.out.println("Bark"); }
}

Animal a = new Dog();  // Upcasting
a.sound();             // Bark (runtime decision)
```

In the first case, the compiler decides which `add` method to call based on the argument types. In the second case, the JVM decides at runtime which `sound` method to execute based on the actual object type (`Dog`), not the reference type (`Animal`).

## Why Does Polymorphism Matter?

Polymorphism is one of the four pillars of Object-Oriented Programming (along with encapsulation, inheritance, and abstraction). Understanding it is essential for writing extensible, maintainable software and for clearing any Java interview.

### 1. Extensibility Without Modification

When Arjun writes a method that accepts an `Animal` reference, it works with `Dog`, `Cat`, `Parrot`, or any future subclass. He does not need to modify existing code when a new animal type is added. This is the Open-Closed Principle: open for extension, closed for modification.

### 2. Loose Coupling

Code that depends on a parent type or interface is loosely coupled. If Kavya writes `void feed(Animal a)`, it works with any animal subclass. She does not need to know (or care about) the specific subclass. This makes code easier to test, refactor, and maintain.

### 3. Code Reusability with Method Overloading

Method overloading lets Ravi provide a single method name for related operations with different parameter types. Instead of `addInts`, `addDoubles`, `addStrings`, he writes overloaded versions of `add`. The caller uses one name; the compiler picks the right version.

### 4. Framework and API Design

Every major Java framework (Spring, Hibernate, Android) relies heavily on polymorphism. When you write `List list = new ArrayList<>()`, you are using polymorphism. The `List` interface reference can hold any list implementation.

### 5. Interview and Placement Relevance

Polymorphism questions appear in nearly every Java technical interview. Output prediction problems involving upcasting, method overriding, and dynamic dispatch are standard fare in campus placements at companies like TCS, Infosys, Wipro, and product-based firms.

## Detailed Explanation

### 1. Compile-Time Polymorphism (Method Overloading)

Method overloading occurs when multiple methods in the same class share the same name but have different parameter lists (different number of parameters, different types, or different order of types). The compiler resolves which method to call based on the arguments at compile time.

```
class MathUtils {
    // Overloaded add methods
    int add(int a, int b) {
        return a + b;
    }
    
    int add(int a, int b, int c) {
        return a + b + c;
    }
    
    double add(double a, double b) {
        return a + b;
    }
}

MathUtils m = new MathUtils();
System.out.println(m.add(2, 3));        // 5 (int, int)
System.out.println(m.add(2, 3, 4));     // 9 (int, int, int)
System.out.println(m.add(2.5, 3.5));    // 6.0 (double, double)
```

Important rules for overloading:

- Methods must differ in parameter list (number, type, or order of parameters)
- Return type alone is NOT sufficient to overload. `int add(int a, int b)` and `double add(int a, int b)` will cause a compilation error.
- Access modifiers can differ between overloaded methods

### 2. Constructor Overloading

Constructors can also be overloaded, providing multiple ways to initialize an object:

```
class Student {
    String name;
    int age;
    String city;
    
    Student() {
        this("Unknown", 0, "Unknown");
    }
    
    Student(String name) {
        this(name, 0, "Unknown");
    }
    
    Student(String name, int age, String city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

Student s1 = new Student();                        // Unknown, 0, Unknown
Student s2 = new Student("Arjun");                  // Arjun, 0, Unknown
Student s3 = new Student("Kavya", 20, "Bangalore"); // Kavya, 20, Bangalore
```

### 3. Runtime Polymorphism (Method Overriding)

Method overriding occurs when a subclass provides its own implementation of a method that is already defined in the parent class. The decision about which version to call is made at runtime based on the actual object type.

```
class Shape {
    void draw() {
        System.out.println("Drawing a shape");
    }
}

class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a circle");
    }
}

class Rectangle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a rectangle");
    }
}

Shape s = new Circle();
s.draw();  // Drawing a circle (runtime decision)
```

Rules for overriding:

- The method in the child class must have the same name, same parameters, and same return type (or covariant return type)
- The access modifier in the child cannot be more restrictive than the parent
- `private`, `static`, and `final` methods cannot be overridden
- The `@Override` annotation is optional but strongly recommended as it catches errors at compile time

### 4. Dynamic Method Dispatch

Dynamic method dispatch is the mechanism by which Java resolves overridden method calls at runtime. When a parent reference points to a child object, Java looks at the actual object type (not the reference type) to determine which method to invoke.

```
class Vehicle {
    void start() {
        System.out.println("Vehicle starting");
    }
}

class Car extends Vehicle {
    @Override
    void start() {
        System.out.println("Car starting with key");
    }
}

class ElectricCar extends Car {
    @Override
    void start() {
        System.out.println("Electric car starting silently");
    }
}

Vehicle v1 = new Vehicle();
Vehicle v2 = new Car();
Vehicle v3 = new ElectricCar();

v1.start();  // Vehicle starting
v2.start();  // Car starting with key
v3.start();  // Electric car starting silently
```

All three references are of type `Vehicle`, but the method that executes depends on the actual object. This is dynamic dispatch in action.

### 5. Upcasting

Upcasting is assigning a child class object to a parent class reference. It is always safe and happens implicitly (no cast needed):

```
Animal a = new Dog();  // Upcasting (implicit)
// a can only access methods declared in Animal
// But if Dog overrides them, Dog's version runs
```

With upcasting, you can only call methods that are declared in the parent class. If the child class has additional methods not present in the parent, they are inaccessible through the parent reference.

```
class Animal {
    void eat() { System.out.println("Animal eats"); }
}

class Dog extends Animal {
    @Override
    void eat() { System.out.println("Dog eats bones"); }
    void fetch() { System.out.println("Dog fetches ball"); }
}

Animal a = new Dog();
a.eat();    // Dog eats bones (overridden method)
// a.fetch(); // Compilation error! Animal has no fetch() method
```

### 6. Downcasting

Downcasting is casting a parent reference back to a child type. It requires an explicit cast and can throw `ClassCastException` if the actual object is not of the target type:

```
Animal a = new Dog();  // Upcasting
Dog d = (Dog) a;       // Downcasting (explicit)
d.fetch();             // Now we can call Dog-specific methods

// Dangerous downcasting
Animal a2 = new Animal();
// Dog d2 = (Dog) a2;  // ClassCastException at runtime!
```

### 7. instanceof Operator

Always use `instanceof` to check before downcasting to avoid `ClassCastException`:

```
Animal a = new Dog();

if (a instanceof Dog) {
    Dog d = (Dog) a;
    d.fetch();  // Safe
}

Animal a2 = new Animal();
if (a2 instanceof Dog) {
    Dog d2 = (Dog) a2;  // This block never executes
} else {
    System.out.println("a2 is not a Dog");
}
```

The `instanceof` operator returns `true` if the object is an instance of the specified class or any of its subclasses. It returns `false` for `null`.

### 8. Polymorphism with Arrays and Collections

Polymorphism shines when working with arrays or collections of the parent type, where each element can be a different subclass:

```
Shape[] shapes = new Shape[3];
shapes[0] = new Circle();
shapes[1] = new Rectangle();
shapes[2] = new Circle();

for (Shape s : shapes) {
    s.draw();  // Calls the correct overridden method for each object
}
```

This is incredibly powerful. You can process a heterogeneous collection of objects with a single loop. Adding a new shape (e.g., `Triangle`) requires no changes to the loop.

### 9. Overloading vs Overriding Summary

FeatureOverloadingOverridingWhen resolvedCompile timeRuntimeParametersMust differMust be sameReturn typeCan differMust be same (or covariant)ScopeSame classParent-child classesstatic methodsCan be overloadedCannot be overridden (hidden)private methodsCan be overloadedCannot be overridden

## Code Examples

### Compile-Time Polymorphism: Method Overloading

```java
class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    double add(double a, double b) {
        return a + b;
    }

    String add(String a, String b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(10, 20));
        System.out.println(calc.add(10, 20, 30));
        System.out.println(calc.add(2.5, 3.5));
        System.out.println(calc.add("Hello", " World"));
    }
}
```

The `Calculator` class has four `add` methods, each with different parameter types or counts. The compiler picks the correct method based on the argument types at compile time. This is compile-time polymorphism.

**Output:**

```
30
60
6.0
Hello World
```

### Runtime Polymorphism: Method Overriding and Dynamic Dispatch

```java
class Animal {
    void sound() {
        System.out.println("Some generic sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Bark");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Meow");
    }
}

class Cow extends Animal {
    @Override
    void sound() {
        System.out.println("Moo");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a1 = new Dog();
        Animal a2 = new Cat();
        Animal a3 = new Cow();
        Animal a4 = new Animal();

        a1.sound();
        a2.sound();
        a3.sound();
        a4.sound();
    }
}
```

All references are of type `Animal`, but the actual objects are `Dog`, `Cat`, `Cow`, and `Animal`. The JVM invokes the overridden method based on the actual object type at runtime. This is dynamic method dispatch.

**Output:**

```
Bark
Meow
Moo
Some generic sound
```

### Upcasting and Downcasting

```java
class Employee {
    void work() {
        System.out.println("Employee is working");
    }
}

class Developer extends Employee {
    @Override
    void work() {
        System.out.println("Developer is writing code");
    }

    void debug() {
        System.out.println("Developer is debugging");
    }
}

public class Main {
    public static void main(String[] args) {
        // Upcasting (implicit)
        Employee emp = new Developer();
        emp.work();  // Overridden method runs
        // emp.debug();  // Compilation error

        // Downcasting (explicit)
        if (emp instanceof Developer) {
            Developer dev = (Developer) emp;
            dev.debug();  // Now accessible
            dev.work();
        }

        // Unsafe downcasting
        Employee emp2 = new Employee();
        System.out.println(emp2 instanceof Developer);  // false
        // Developer dev2 = (Developer) emp2;  // ClassCastException!
    }
}
```

Upcasting (`Employee emp = new Developer()`) is implicit and safe. The parent reference can only call methods declared in `Employee`. Downcasting requires an explicit cast and should always be preceded by an `instanceof` check to avoid `ClassCastException`.

**Output:**

```
Developer is writing code
Developer is debugging
Developer is writing code
false
```

### Polymorphism with Arrays

```java
class Shape {
    double area() {
        return 0;
    }

    String name() {
        return "Shape";
    }
}

class Circle extends Shape {
    double radius;
    Circle(double radius) { this.radius = radius; }

    @Override
    double area() { return Math.PI * radius * radius; }

    @Override
    String name() { return "Circle"; }
}

class Rectangle extends Shape {
    double width, height;
    Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    @Override
    double area() { return width * height; }

    @Override
    String name() { return "Rectangle"; }
}

class Triangle extends Shape {
    double base, height;
    Triangle(double base, double height) {
        this.base = base;
        this.height = height;
    }

    @Override
    double area() { return 0.5 * base * height; }

    @Override
    String name() { return "Triangle"; }
}

public class Main {
    public static void main(String[] args) {
        Shape[] shapes = {
            new Circle(5),
            new Rectangle(4, 6),
            new Triangle(3, 8)
        };

        double totalArea = 0;
        for (Shape s : shapes) {
            double a = s.area();
            System.out.printf("%s area: %.2f%n", s.name(), a);
            totalArea += a;
        }
        System.out.printf("Total area: %.2f%n", totalArea);
    }
}
```

An array of `Shape` references holds `Circle`, `Rectangle`, and `Triangle` objects. The loop calls `area()` on each element, and dynamic dispatch ensures the correct overridden method runs for each shape. Adding a new shape class requires no changes to the loop.

**Output:**

```
Circle area: 78.54
Rectangle area: 24.00
Triangle area: 12.00
Total area: 114.54
```

### Constructor Overloading

```java
class BankAccount {
    String holder;
    double balance;
    String type;

    BankAccount() {
        this("Unknown", 0.0, "Savings");
    }

    BankAccount(String holder) {
        this(holder, 0.0, "Savings");
    }

    BankAccount(String holder, double balance) {
        this(holder, balance, "Savings");
    }

    BankAccount(String holder, double balance, String type) {
        this.holder = holder;
        this.balance = balance;
        this.type = type;
    }

    void display() {
        System.out.println(holder + " | " + balance + " | " + type);
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount a1 = new BankAccount();
        BankAccount a2 = new BankAccount("Arjun");
        BankAccount a3 = new BankAccount("Kavya", 5000.0);
        BankAccount a4 = new BankAccount("Ravi", 10000.0, "Current");

        a1.display();
        a2.display();
        a3.display();
        a4.display();
    }
}
```

The `BankAccount` class has four constructors with different parameter counts. Each constructor delegates to the most specific one using `this()`. This allows creating objects with varying levels of initialization. Constructor overloading is a form of compile-time polymorphism.

**Output:**

```
Unknown | 0.0 | Savings
Arjun | 0.0 | Savings
Kavya | 5000.0 | Savings
Ravi | 10000.0 | Current
```

### Overloading with Type Promotion

```java
class TypeDemo {
    void show(int a) {
        System.out.println("int: " + a);
    }

    void show(long a) {
        System.out.println("long: " + a);
    }

    void show(double a) {
        System.out.println("double: " + a);
    }

    void show(String a) {
        System.out.println("String: " + a);
    }
}

public class Main {
    public static void main(String[] args) {
        TypeDemo td = new TypeDemo();
        td.show(10);        // int
        td.show(10L);       // long
        td.show(10.5);      // double
        td.show("Hello");   // String

        byte b = 5;
        td.show(b);         // byte promoted to int

        float f = 3.14f;
        td.show(f);         // float promoted to double
    }
}
```

When an exact match is not found, Java promotes smaller types to larger compatible types. A `byte` is promoted to `int`, and a `float` is promoted to `double`. This automatic type promotion determines which overloaded method is selected at compile time.

**Output:**

```
int: 10
long: 10
double: 10.5
String: Hello
int: 5
double: 3.140000104904175
```

### instanceof and Safe Downcasting Pattern

```java
class Vehicle {
    void start() { System.out.println("Vehicle starts"); }
}

class Car extends Vehicle {
    @Override
    void start() { System.out.println("Car starts with ignition"); }
    void openTrunk() { System.out.println("Trunk opened"); }
}

class Bike extends Vehicle {
    @Override
    void start() { System.out.println("Bike kick-started"); }
    void doWheelie() { System.out.println("Wheelie!"); }
}

public class Main {
    static void process(Vehicle v) {
        v.start();  // Polymorphic call

        if (v instanceof Car) {
            Car c = (Car) v;
            c.openTrunk();
        } else if (v instanceof Bike) {
            Bike b = (Bike) v;
            b.doWheelie();
        }
    }

    public static void main(String[] args) {
        process(new Car());
        System.out.println("---");
        process(new Bike());
        System.out.println("---");
        process(new Vehicle());
    }
}
```

The `process` method accepts any `Vehicle`. It calls the polymorphic `start()` method first, then uses `instanceof` to safely downcast and call subclass-specific methods. For a plain `Vehicle`, neither `instanceof` check passes, so only `start()` runs.

**Output:**

```
Car starts with ignition
Trunk opened
---
Bike kick-started
Wheelie!
---
Vehicle starts
```

## Common Mistakes

### Confusing Overloading with Overriding

**Wrong:**

```
class Parent {
    void display(int a) {
        System.out.println("Parent: " + a);
    }
}

class Child extends Parent {
    // This is overloading, NOT overriding!
    void display(String a) {
        System.out.println("Child: " + a);
    }
}

Parent p = new Child();
p.display("Hello");  // Compilation error!
```

Compilation error: incompatible types. Parent has no display(String) method.

**Correct:**

```
class Parent {
    void display(int a) {
        System.out.println("Parent: " + a);
    }
}

class Child extends Parent {
    @Override
    void display(int a) {  // Same parameter type = overriding
        System.out.println("Child: " + a);
    }
}

Parent p = new Child();
p.display(10);  // Child: 10
```

For overriding, the method signature (name + parameter types) must be identical. Changing the parameter type from `int` to `String` creates a new overloaded method in the child class, not an override. The parent reference only sees the parent's method.

### Trying to Override Static Methods

**Wrong:**

```
class Parent {
    static void greet() {
        System.out.println("Hello from Parent");
    }
}

class Child extends Parent {
    @Override  // Compilation error!
    static void greet() {
        System.out.println("Hello from Child");
    }
}
```

Compilation error: static methods cannot be overridden. The @Override annotation triggers the error.

**Correct:**

```
class Parent {
    static void greet() {
        System.out.println("Hello from Parent");
    }
}

class Child extends Parent {
    // Method hiding (not overriding). No @Override.
    static void greet() {
        System.out.println("Hello from Child");
    }
}

// Static methods are resolved by reference type, not object type
Parent p = new Child();
p.greet();  // Hello from Parent (method hiding, not polymorphism)
```

Static methods belong to the class, not to instances. They cannot be overridden, only hidden. The method called depends on the reference type, not the object type. This is NOT polymorphism.

### Downcasting Without instanceof Check

**Wrong:**

```
class Animal { }
class Dog extends Animal {
    void bark() { System.out.println("Woof!"); }
}
class Cat extends Animal { }

Animal a = new Cat();
Dog d = (Dog) a;  // ClassCastException at runtime!
d.bark();
```

java.lang.ClassCastException: Cat cannot be cast to Dog

**Correct:**

```
Animal a = new Cat();

if (a instanceof Dog) {
    Dog d = (Dog) a;
    d.bark();
} else {
    System.out.println("Not a Dog, cannot downcast");
}
```

A `Cat` object cannot be cast to `Dog`. The compiler allows the cast (since both are `Animal` subtypes), but the JVM throws `ClassCastException` at runtime. Always use `instanceof` before downcasting.

### Expecting Overriding to Work with Different Return Types

**Wrong:**

```
class Parent {
    int getValue() { return 10; }
}

class Child extends Parent {
    @Override
    String getValue() { return "Ten"; }  // Compilation error!
}
```

Compilation error: return type String is not compatible with int.

**Correct:**

```
class Parent {
    Number getValue() { return 10; }
}

class Child extends Parent {
    @Override
    Integer getValue() { return 20; }  // Covariant return (Integer extends Number)
}
```

Overriding requires the same return type, or a covariant return type (a subtype of the original return type). `String` is not related to `int` at all. `Integer` is a subclass of `Number`, so covariant return works.

### Accessing Child-Only Methods Through Parent Reference

**Wrong:**

```
class Animal {
    void eat() { System.out.println("Eating"); }
}

class Dog extends Animal {
    void fetch() { System.out.println("Fetching"); }
}

Animal a = new Dog();
a.eat();    // Works
a.fetch();  // Compilation error!
```

Compilation error: cannot find symbol method fetch() in Animal.

**Correct:**

```
Animal a = new Dog();
a.eat();  // Works (declared in Animal)

// Must downcast to access Dog-specific methods
if (a instanceof Dog) {
    Dog d = (Dog) a;
    d.fetch();  // Works
}
```

A parent reference can only access methods declared in the parent class. Even though the actual object is a `Dog`, the compiler only sees the `Animal` type. To call `fetch()`, you must downcast to `Dog`.

### Overloading Based Only on Return Type

**Wrong:**

```
class Demo {
    int compute(int a) { return a * 2; }
    double compute(int a) { return a * 2.0; }  // Compilation error!
}
```

Compilation error: method compute(int) is already defined in class Demo.

**Correct:**

```
class Demo {
    int computeInt(int a) { return a * 2; }
    double computeDouble(int a) { return a * 2.0; }

    // Or overload by changing parameter types
    int compute(int a) { return a * 2; }
    double compute(double a) { return a * 2.0; }
}
```

Methods cannot be overloaded by return type alone. The compiler determines which method to call based on the argument list, not the return type. If the parameter lists are identical, Java cannot distinguish between them.

## Summary

- Polymorphism means 'many forms.' In Java, it allows one entity (method or reference) to behave differently based on context. It is a core OOP pillar.
- Compile-time polymorphism (static binding) is achieved through method overloading. The compiler selects the correct method based on argument types and count.
- Runtime polymorphism (dynamic binding) is achieved through method overriding. The JVM selects the correct method based on the actual object type at runtime.
- Method overloading requires methods to differ in parameter list (number, type, or order). Return type alone is NOT sufficient for overloading.
- Method overriding requires the child method to have the same name, same parameters, and same (or covariant) return type as the parent method.
- Upcasting (Parent ref = new Child()) is implicit and safe. The reference can only call methods declared in the parent class, but overridden versions in the child execute.
- Downcasting (Child ref = (Child) parentRef) is explicit and risky. Always use instanceof before downcasting to prevent ClassCastException.
- Dynamic method dispatch is the mechanism where the JVM determines at runtime which overridden method to call based on the actual object type, not the reference type.
- Static methods cannot be overridden, only hidden. The method called depends on the reference type, not the object type. This is NOT polymorphism.
- Private and final methods cannot be overridden. The @Override annotation helps catch overriding errors at compile time.
- Polymorphism enables extensible design: a method accepting a parent type works with all current and future child types without modification (Open-Closed Principle).

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/polymorphism-in-java/*
*Practice questions: https://learn.modernagecoders.com/resources/java/polymorphism-in-java/practice/*
