---
title: "Java OOP Basics - Classes, Objects, Constructors, this Keyword | Modern Age Coders"
description: "Learn Java OOP fundamentals including classes, objects, constructors, constructor overloading, this keyword, static keyword, and toString(). Includes 63+ practice questions with output prediction and coding challenges."
slug: object-oriented-programming-basics
canonical: https://learn.modernagecoders.com/resources/java/object-oriented-programming-basics
category: "Java"
keywords: ["java classes and objects", "java constructor", "java OOP basics", "this keyword java", "java static keyword", "java constructor overloading", "java new keyword", "java instance variables", "java static methods", "java toString"]
---
# OOP Basics - Classes, Objects, and Constructors

**Difficulty:** Intermediate  
**Reading time:** 34 min  
**Chapter:** 13  
**Practice questions:** 63

## What Is Object-Oriented Programming (OOP)?

**Object-Oriented Programming** is a programming paradigm that organizes code around **objects** rather than functions and procedures. An object is a self-contained entity that combines data (fields/attributes) and behavior (methods) into a single unit. In Java, everything revolves around classes and objects — Java is one of the most purely object-oriented languages in widespread use.

OOP is built on **four pillars**:

**1. Encapsulation:** Bundling data and methods together, and restricting direct access to internal data. This is achieved through access modifiers (private, public, protected).

**2. Inheritance:** A class can inherit fields and methods from another class, promoting code reuse and establishing IS-A relationships.

**3. Polymorphism:** The same method name can behave differently depending on the object type. This includes method overloading (compile-time) and method overriding (runtime).

**4. Abstraction:** Hiding complex implementation details behind simple interfaces. Users interact with what an object does, not how it does it.

This chapter focuses on the foundation: **classes, objects, and constructors**. These are the building blocks upon which all four pillars stand.

### Class vs Object

A **class** is a blueprint or template that defines the structure (fields) and behavior (methods) of a type. An **object** is a specific instance of a class, occupying memory at runtime.

Analogy: A class is like an architectural blueprint for a house. An object is an actual house built from that blueprint. You can build many houses (objects) from the same blueprint (class), each with different paint colors and furniture (field values).

## Why Are Classes, Objects, and Constructors Important?

Understanding classes and objects is not optional in Java — it is the language itself. Every line of Java code you write exists inside a class. Every data structure, every library, every framework is built with classes and objects.

### 1. Java Is Object-Oriented by Design

Unlike Python or JavaScript where OOP is one of several paradigms, Java enforces OOP. You cannot write a standalone function outside a class. Even the `main` method must be inside a class. Understanding classes is understanding Java.

### 2. Real-World Modeling

OOP maps naturally to real-world entities. A `Student` class has fields like `name`, `rollNo`, and `marks`, and methods like `calculateGrade()`. A `BankAccount` class has `balance` and methods like `deposit()` and `withdraw()`. This modeling makes code intuitive and maintainable.

### 3. Constructors Control Object Initialization

Constructors ensure that every object starts in a valid state. Without constructors, you would need to manually set each field after creating an object, risking incomplete or invalid objects. Constructor overloading provides flexible ways to initialize objects.

### 4. The this Keyword Resolves Ambiguity

When constructor parameters have the same name as instance variables, `this` distinguishes between them. Understanding `this` is essential for writing clean constructors, implementing method chaining, and avoiding common bugs.

### 5. Static Members Are Interview Staples

Understanding when to use `static` versus instance members, how static methods behave, and why `main` is static are questions asked in every Java interview and university exam.

## Detailed Explanation

### 1. Creating a Class

A class defines the structure and behavior of objects. It contains:

- **Instance variables (fields):** Data that each object holds independently.

- **Methods:** Behavior that objects can perform.

- **Constructors:** Special methods called when an object is created.

```
class Student {
    // Instance variables
    String name;
    int rollNo;
    double marks;

    // Method
    void displayInfo() {
        System.out.println(name + " (" + rollNo + ") - Marks: " + marks);
    }
}
```

### 2. Creating Objects

Objects are created using the `new` keyword, which allocates memory on the heap and calls the constructor:

```
Student s1 = new Student();
s1.name = "Aarav";
s1.rollNo = 101;
s1.marks = 92.5;
s1.displayInfo(); // Aarav (101) - Marks: 92.5
```

Each object has its own copy of instance variables. Changing `s1.name` does not affect `s2.name`.

### 3. Constructors

A constructor is a special method that is called automatically when an object is created with `new`. It has the same name as the class and no return type (not even void).

**Default Constructor:** If you do not write any constructor, Java provides a no-argument default constructor that initializes fields to their default values (0 for numbers, null for objects, false for booleans).

**Parameterized Constructor:** Accepts parameters to initialize fields with specific values at creation time.

```
class Student {
    String name;
    int rollNo;

    // Default constructor
    Student() {
        name = "Unknown";
        rollNo = 0;
    }

    // Parameterized constructor
    Student(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
}
```

**Copy Constructor:** Takes another object of the same class as a parameter and copies its values. Java does not provide this automatically (unlike C++), but you can write one.

```
Student(Student other) {
    this.name = other.name;
    this.rollNo = other.rollNo;
}
```

### 4. Constructor Overloading

Like methods, constructors can be overloaded by having different parameter lists. This gives users multiple ways to create objects:

```
Student s1 = new Student();                    // default
Student s2 = new Student("Priya", 102);        // name + rollNo
Student s3 = new Student("Rohan", 103, 88.5);  // name + rollNo + marks
```

### 5. The this Keyword

The `this` keyword refers to the current object. It has several uses:

**this.variable:** Distinguishes instance variables from parameters with the same name.

```
Student(String name, int rollNo) {
    this.name = name;     // this.name is the field; name is the parameter
    this.rollNo = rollNo;
}
```

**this():** Calls another constructor of the same class (constructor chaining). Must be the first statement.

```
Student() {
    this("Unknown", 0); // Calls the parameterized constructor
}

Student(String name, int rollNo) {
    this.name = name;
    this.rollNo = rollNo;
}
```

**this as argument:** Passes the current object to another method or constructor.

### 6. The static Keyword

The `static` keyword makes a member belong to the class rather than to any specific object.

**Static variables:** Shared among all objects of the class. There is only one copy, regardless of how many objects exist. Example: a counter tracking how many Student objects have been created.

```
class Student {
    static int count = 0; // shared by all Student objects
    String name;

    Student(String name) {
        this.name = name;
        count++; // incremented for every new object
    }
}
```

**Static methods:** Can be called without creating an object. Cannot access instance variables or use `this`. Example: `Math.sqrt()`, `Integer.parseInt()`.

**Static block:** Executed once when the class is first loaded, before any objects are created or static methods are called. Used for static initialization.

```
class Config {
    static String dbUrl;

    static {
        dbUrl = "jdbc:mysql://localhost:3306/mydb";
        System.out.println("Static block executed");
    }
}
```

### 7. Instance Initializer Block

An instance initializer block runs every time an object is created, before the constructor body. It is useful for code that should run regardless of which constructor is called.

```
class Student {
    String name;

    {
        System.out.println("Instance initializer block");
        // Runs before every constructor
    }

    Student() { name = "Unknown"; }
    Student(String name) { this.name = name; }
}
```

Execution order: (1) Static blocks (once, when class loads), (2) Instance initializer blocks (every object creation), (3) Constructor body.

### 8. The toString() Method

Every class in Java inherits from `Object`, which has a `toString()` method. By default, it returns something like `Student@1b6d3586` (class name + hash code). Override it to provide a meaningful string representation:

```
@Override
public String toString() {
    return "Student{name='" + name + "', rollNo=" + rollNo + "}";
}
```

`toString()` is called automatically when you print an object with `System.out.println()` or concatenate an object with a string.

## Code Examples

### Creating a Class and Objects

```java
class Student {
    String name;
    int rollNo;
    double marks;

    void displayInfo() {
        System.out.println(name + " (Roll: " + rollNo + ") - Marks: " + marks);
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating objects using the new keyword
        Student s1 = new Student();
        s1.name = "Aarav";
        s1.rollNo = 101;
        s1.marks = 92.5;

        Student s2 = new Student();
        s2.name = "Priya";
        s2.rollNo = 102;
        s2.marks = 88.0;

        s1.displayInfo();
        s2.displayInfo();

        // Each object has its own data
        System.out.println(s1.name + " and " + s2.name + " are different objects");
    }
}
```

The `Student` class defines three fields and one method. Two objects `s1` and `s2` are created using `new`. Each has its own copy of `name`, `rollNo`, and `marks`. Changing one object's fields does not affect the other. The `displayInfo()` method accesses the current object's fields.

**Output:**

```
Aarav (Roll: 101) - Marks: 92.5
Priya (Roll: 102) - Marks: 88.0
Aarav and Priya are different objects
```

### Constructors — Default, Parameterized, and Copy

```java
class Book {
    String title;
    String author;
    double price;

    // Default constructor
    Book() {
        this.title = "Untitled";
        this.author = "Unknown";
        this.price = 0.0;
    }

    // Parameterized constructor
    Book(String title, String author, double price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    // Copy constructor
    Book(Book other) {
        this.title = other.title;
        this.author = other.author;
        this.price = other.price;
    }

    void display() {
        System.out.println(title + " by " + author + " - Rs." + price);
    }
}

public class Main {
    public static void main(String[] args) {
        Book b1 = new Book();
        Book b2 = new Book("Java Complete", "Deepak Gupta", 599.0);
        Book b3 = new Book(b2); // Copy of b2

        b1.display();
        b2.display();
        b3.display();

        // Verify copy is independent
        b3.price = 499.0;
        System.out.println("b2 price: " + b2.price);
        System.out.println("b3 price: " + b3.price);
    }
}
```

Three constructors provide different ways to create Book objects. The default constructor sets placeholder values. The parameterized constructor takes all fields. The copy constructor creates a new object with the same values as an existing one. After copying, modifying `b3.price` does not affect `b2` because primitive fields are copied by value.

**Output:**

```
Untitled by Unknown - Rs.0.0
Java Complete by Deepak Gupta - Rs.599.0
Java Complete by Deepak Gupta - Rs.599.0
b2 price: 599.0
b3 price: 499.0
```

### Constructor Overloading and this() Chaining

```java
class Employee {
    String name;
    String department;
    double salary;

    // Constructor with all parameters
    Employee(String name, String department, double salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
        System.out.println("Full constructor called");
    }

    // Constructor with name only — chains to full constructor
    Employee(String name) {
        this(name, "General", 30000.0);
        System.out.println("Name-only constructor called");
    }

    // Default constructor — chains to name-only constructor
    Employee() {
        this("New Employee");
        System.out.println("Default constructor called");
    }

    void display() {
        System.out.println(name + " | " + department + " | Rs." + salary);
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("--- Creating e1 ---");
        Employee e1 = new Employee();
        e1.display();

        System.out.println("\n--- Creating e2 ---");
        Employee e2 = new Employee("Kavitha", "Engineering", 75000.0);
        e2.display();
    }
}
```

Constructor chaining uses `this()` to call another constructor of the same class. The default constructor calls the name-only constructor, which calls the full constructor. This avoids duplicating initialization logic. `this()` must be the first statement in a constructor. The chain shows the execution order: full constructor runs first, then the chaining constructors' remaining code runs in reverse order.

**Output:**

```
--- Creating e1 ---
Full constructor called
Name-only constructor called
Default constructor called
New Employee | General | Rs.30000.0

--- Creating e2 ---
Full constructor called
Kavitha | Engineering | Rs.75000.0
```

### The this Keyword — All Uses

```java
class Counter {
    int value;

    Counter(int value) {
        this.value = value; // this.variable — distinguishes field from parameter
    }

    // Method returns this for chaining
    Counter increment() {
        this.value++;
        return this; // returns the current object
    }

    Counter add(int n) {
        this.value += n;
        return this;
    }

    void display() {
        System.out.println("Value: " + this.value);
    }
}

public class Main {
    public static void main(String[] args) {
        Counter c = new Counter(0);

        // Method chaining using this
        c.increment().increment().add(10).increment().display();

        Counter c2 = new Counter(5);
        c2.add(3).increment().display();
    }
}
```

`this.value` refers to the instance variable, distinguishing it from the constructor parameter `value`. Methods that return `this` enable method chaining: `c.increment().increment().add(10)` calls three methods in sequence on the same object. Each method modifies the object and returns it for the next call.

**Output:**

```
Value: 13
Value: 9
```

### Static Variables, Static Methods, and Static Block

```java
class Student {
    String name;
    static int count = 0; // shared among all objects

    static {
        System.out.println("Static block: Student class loaded");
    }

    Student(String name) {
        this.name = name;
        count++;
    }

    void display() {
        System.out.println(name + " (Total students: " + count + ")");
    }

    // Static method — does not need an object
    static int getCount() {
        // Cannot use 'this' or access 'name' here
        return count;
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("Before creating objects: " + Student.getCount());

        Student s1 = new Student("Aarav");
        Student s2 = new Student("Priya");
        Student s3 = new Student("Rohan");

        s1.display();
        s2.display();
        System.out.println("Total: " + Student.getCount());
    }
}
```

The static variable `count` is shared across all Student objects — there is only one copy regardless of how many objects exist. The static block runs once when the class is first loaded. The static method `getCount()` can be called using the class name without any object. It cannot access `this` or instance variables like `name`.

**Output:**

```
Static block: Student class loaded
Before creating objects: 0
Aarav (Total students: 3)
Priya (Total students: 3)
Total: 3
```

### Instance Initializer Block and Execution Order

```java
class Demo {
    String name;

    // Static block — runs once when class loads
    static {
        System.out.println("1. Static block");
    }

    // Instance initializer block — runs for every object
    {
        System.out.println("2. Instance initializer block");
    }

    // Constructor
    Demo(String name) {
        this.name = name;
        System.out.println("3. Constructor: " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("--- Creating first object ---");
        Demo d1 = new Demo("First");

        System.out.println("\n--- Creating second object ---");
        Demo d2 = new Demo("Second");
    }
}
```

The execution order is: (1) Static block runs once when the class is first loaded. (2) Instance initializer block runs every time an object is created, before the constructor body. (3) Constructor body runs. For the second object, the static block does not run again because the class is already loaded.

**Output:**

```
--- Creating first object ---
1. Static block
2. Instance initializer block
3. Constructor: First

--- Creating second object ---
2. Instance initializer block
3. Constructor: Second
```

### Overriding toString()

```java
class Student {
    String name;
    int rollNo;
    double marks;

    Student(String name, int rollNo, double marks) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks;
    }

    @Override
    public String toString() {
        return "Student{name='" + name + "', rollNo=" + rollNo
               + ", marks=" + marks + "}";
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Meera", 201, 95.5);
        Student s2 = new Student("Vikram", 202, 87.0);

        // toString() is called automatically by println()
        System.out.println(s1);
        System.out.println(s2);

        // toString() is also called during string concatenation
        String info = "Top student: " + s1;
        System.out.println(info);
    }
}
```

By default, `toString()` returns something like `Student@1b6d3586`. Overriding it provides a meaningful representation. `System.out.println(s1)` automatically calls `s1.toString()`. String concatenation with `+` also calls `toString()` implicitly. The `@Override` annotation tells the compiler to verify that you are actually overriding a method from the superclass.

**Output:**

```
Student{name='Meera', rollNo=201, marks=95.5}
Student{name='Vikram', rollNo=202, marks=87.0}
Top student: Student{name='Meera', rollNo=201, marks=95.5}
```

## Common Mistakes

### Adding a Return Type to a Constructor

**Wrong:**

```
class Student {
    String name;

    void Student(String name) { // This is NOT a constructor!
        this.name = name;
    }
}
```

No compilation error, but Student(String name) is treated as a regular method named "Student", not a constructor. The default no-arg constructor is used instead, leaving name as null.

**Correct:**

```
class Student {
    String name;

    Student(String name) { // No return type — this IS a constructor
        this.name = name;
    }
}
```

Constructors must NOT have a return type — not even `void`. If you add `void` before the class name, Java treats it as a regular method that happens to have the same name as the class. The actual constructor (the compiler-generated default) initializes `name` to null.

### Forgetting this When Parameter Names Shadow Fields

**Wrong:**

```
class Student {
    String name;
    int rollNo;

    Student(String name, int rollNo) {
        name = name;       // Assigns parameter to itself — field is still null!
        rollNo = rollNo;   // Same problem
    }
}
```

No compilation error, but the fields remain at their default values (null, 0) because the parameters shadow the fields.

**Correct:**

```
class Student {
    String name;
    int rollNo;

    Student(String name, int rollNo) {
        this.name = name;     // this.name is the field
        this.rollNo = rollNo; // this.rollNo is the field
    }
}
```

When a parameter has the same name as a field, the parameter shadows the field within that method. `name = name` assigns the parameter to itself. Use `this.name` to explicitly refer to the instance variable. This is one of the most common constructor bugs.

### Expecting a Default Constructor After Defining a Parameterized One

**Wrong:**

```
class Student {
    String name;

    Student(String name) {
        this.name = name;
    }
}

// In main:
Student s = new Student(); // Compilation error!
```

error: constructor Student in class Student cannot be applied to given types; required: String; found: no arguments

**Correct:**

```
class Student {
    String name;

    Student() { // Explicitly define the default constructor
        this.name = "Unknown";
    }

    Student(String name) {
        this.name = name;
    }
}

// Now both work:
Student s1 = new Student();
Student s2 = new Student("Aarav");
```

Java provides a default no-argument constructor only if you do not define any constructor. Once you define any constructor (even a parameterized one), the default constructor is no longer generated. If you still need it, you must define it explicitly.

### Accessing Instance Variables from a Static Method

**Wrong:**

```
class Student {
    String name;

    static void printName() {
        System.out.println(name); // ERROR
    }
}
```

error: non-static variable name cannot be referenced from a static context

**Correct:**

```
class Student {
    String name;

    static void printName(Student s) {
        System.out.println(s.name); // Access through an object reference
    }

    void printMyName() { // Or use an instance method
        System.out.println(name);
    }
}
```

Static methods belong to the class, not to any object. They do not have a `this` reference, so they cannot access instance variables directly. To access instance data from a static method, you need an explicit object reference passed as a parameter.

### Using this() Not as the First Statement in a Constructor

**Wrong:**

```
class Student {
    String name;
    int rollNo;

    Student() {
        System.out.println("Creating student");
        this("Unknown", 0); // ERROR: must be first statement
    }

    Student(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
}
```

error: call to this must be first statement in constructor

**Correct:**

```
class Student {
    String name;
    int rollNo;

    Student() {
        this("Unknown", 0); // Must be FIRST statement
        System.out.println("Creating student");
    }

    Student(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
}
```

When using `this()` to chain constructors, it must be the very first statement in the constructor body. No other code can appear before it. This ensures the chained constructor runs before any other initialization logic in the current constructor.

## Summary

- A class is a blueprint that defines fields (data) and methods (behavior). An object is a specific instance of a class created using the new keyword.
- Constructors are special methods (no return type, same name as the class) that initialize objects when they are created. If you define no constructors, Java provides a default no-argument constructor.
- Once you define any constructor, the default constructor is no longer generated. Define it explicitly if you need it.
- Constructor overloading allows multiple constructors with different parameter lists, providing flexible ways to create objects.
- The this keyword refers to the current object. Use this.variable to distinguish fields from parameters, this() to chain constructors (must be the first statement), and return this for method chaining.
- Static variables are shared among all objects of a class (one copy per class). Static methods belong to the class and can be called without an object. Static methods cannot access instance variables or use this.
- Execution order: static blocks (once, when class loads) -> instance initializer blocks (every object creation) -> constructor body.
- Override toString() to provide a meaningful string representation of your objects. It is called automatically by println() and string concatenation.
- A copy constructor takes another object of the same class and duplicates its values. Java does not provide one automatically — you must write it yourself.
- Every class in Java implicitly extends the Object class, inheriting methods like toString(), equals(), and hashCode().

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/object-oriented-programming-basics/*
*Practice questions: https://learn.modernagecoders.com/resources/java/object-oriented-programming-basics/practice/*
