---
title: "Inheritance in Java - extends, super, Method Overriding, final Keyword | Modern Age Coders"
description: "Learn Java inheritance including extends keyword, super keyword, method overriding, final keyword, Object class, instanceof operator, and covariant return types. Includes 62+ practice questions with output prediction and coding challenges."
slug: inheritance-in-java
canonical: https://learn.modernagecoders.com/resources/java/inheritance-in-java
category: "Java"
keywords: ["java inheritance", "extends keyword java", "super keyword java", "method overriding java", "java final keyword", "java Object class", "java instanceof", "java IS-A relationship", "java covariant return type", "java inheritance example"]
---
# Inheritance in Java

**Difficulty:** Intermediate  
**Reading time:** 32 min  
**Chapter:** 15  
**Practice questions:** 62

## What Is Inheritance in Java?

**Inheritance** is one of the four pillars of Object-Oriented Programming that allows a class to acquire the fields and methods of another class. The class that inherits is called the **subclass** (child class, derived class), and the class being inherited from is called the **superclass** (parent class, base class).

Inheritance establishes an **IS-A relationship**: a Dog IS-A Animal, a Car IS-A Vehicle, a SavingsAccount IS-A BankAccount. The subclass inherits all non-private members of the superclass and can add new members or override existing behavior.

### The extends Keyword

In Java, inheritance is declared using the `extends` keyword:

```
class Animal {                    // Superclass
    String name;
    void eat() {
        System.out.println(name + " is eating");
    }
}

class Dog extends Animal {        // Dog inherits from Animal
    void bark() {
        System.out.println(name + " says Woof!");
    }
}
```

The Dog class inherits the `name` field and `eat()` method from Animal, and adds its own `bark()` method.

### Types of Inheritance in Java

**Single Inheritance:** A class extends exactly one class. `Dog extends Animal`.

**Multilevel Inheritance:** A chain of inheritance. `Puppy extends Dog extends Animal`.

**Hierarchical Inheritance:** Multiple classes extend the same superclass. `Dog extends Animal` and `Cat extends Animal`.

**Multiple Inheritance with Classes:** NOT supported in Java. A class cannot extend more than one class. This avoids the diamond problem. However, a class can implement multiple interfaces, which is Java's way of achieving a form of multiple inheritance.

## Why Is Inheritance Important?

Inheritance is one of the most powerful features of OOP and is fundamental to Java's design. Here is why it matters:

### 1. Code Reuse Without Duplication

Instead of copying fields and methods from one class to another, inheritance lets a subclass reuse everything from the superclass. If Animal has 10 methods, Dog inherits all 10 without writing them again. If you fix a bug in Animal's `eat()` method, all subclasses get the fix automatically.

### 2. Establishes Type Hierarchies

Inheritance creates type hierarchies: a Dog object can be treated as an Animal anywhere an Animal is expected. This is the foundation of polymorphism. A method that accepts an Animal parameter works with Dog, Cat, or any future Animal subclass.

### 3. Method Overriding Enables Polymorphism

Subclasses can override superclass methods to provide specialized behavior. When you call `animal.makeSound()`, the actual method that runs depends on whether the object is a Dog, Cat, or Bird. This runtime dispatch is the heart of polymorphism.

### 4. Frameworks Rely on Inheritance

Java's standard library and popular frameworks use inheritance extensively. `HttpServlet` extends `GenericServlet`. Custom exceptions extend `Exception`. Android activities extend `AppCompatActivity`. Understanding inheritance is essential for using any Java framework.

### 5. Interview and Exam Essential

Inheritance questions dominate Java interviews: method overriding rules, the super keyword, the final keyword, constructor chaining with super(), the Object class, and the instanceof operator. These are tested at every level from campus placements to senior developer interviews.

## Detailed Explanation

### 1. The extends Keyword

A Java class can extend exactly one other class using `extends`. The subclass inherits all non-private members (fields, methods, nested classes) of the superclass.

```
class Vehicle {
    String brand;
    int speed;

    void accelerate() {
        speed += 10;
    }
}

class Car extends Vehicle {
    int doors;

    void honk() {
        System.out.println(brand + " honks!");
    }
}
```

Car inherits `brand`, `speed`, and `accelerate()` from Vehicle, and adds `doors` and `honk()`. Private members of Vehicle are NOT directly accessible in Car, but they still exist in memory as part of the Car object.

### 2. The super Keyword

The `super` keyword refers to the superclass and has three uses:

**super.variable:** Accesses a superclass field that is hidden by a subclass field with the same name.

```
class Animal {
    String type = "Animal";
}
class Dog extends Animal {
    String type = "Dog";
    void showTypes() {
        System.out.println(super.type); // "Animal"
        System.out.println(this.type);  // "Dog"
    }
}
```

**super.method():** Calls a superclass method that has been overridden in the subclass.

```
class Animal {
    void eat() { System.out.println("Animal eating"); }
}
class Dog extends Animal {
    @Override
    void eat() {
        super.eat(); // calls Animal's eat()
        System.out.println("Dog eating bones");
    }
}
```

**super():** Calls a superclass constructor. Must be the first statement in the subclass constructor. If not explicitly called, Java inserts `super()` (no-arg) automatically.

```
class Animal {
    String name;
    Animal(String name) {
        this.name = name;
    }
}
class Dog extends Animal {
    String breed;
    Dog(String name, String breed) {
        super(name);          // calls Animal(name)
        this.breed = breed;
    }
}
```

### 3. Method Overriding

When a subclass provides its own implementation of a method that exists in the superclass (same name, same parameters, same or covariant return type), it is called **method overriding**.

Rules of method overriding:

1. The method name and parameter list must be identical.

2. The return type must be the same or a subtype (covariant return type).

3. The access modifier cannot be more restrictive (public in parent cannot become private in child).

4. The method cannot throw broader checked exceptions.

5. `static`, `final`, and `private` methods cannot be overridden.

6. The `@Override` annotation is optional but strongly recommended — it catches typos at compile time.

```
class Shape {
    double area() {
        return 0;
    }
}
class Circle extends Shape {
    double radius;
    Circle(double radius) { this.radius = radius; }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}
```

### 4. The final Keyword

The `final` keyword prevents modification at three levels:

**final class:** Cannot be extended (no subclasses). Example: `String`, `Integer`, `Math`.

```
final class Constants {
    // Cannot be extended
}
// class MyConstants extends Constants {} // ERROR
```

**final method:** Cannot be overridden in subclasses.

```
class Animal {
    final void breathe() { System.out.println("Breathing"); }
}
class Dog extends Animal {
    // void breathe() {} // ERROR: cannot override final method
}
```

**final variable:** Can be assigned only once. For primitives, the value cannot change. For objects, the reference cannot change (but the object's content can).

```
final int MAX = 100;
// MAX = 200; // ERROR: cannot assign to final variable

final StringBuilder sb = new StringBuilder("Hello");
sb.append(" World"); // OK: modifying the object's content
// sb = new StringBuilder(); // ERROR: cannot reassign the reference
```

### 5. The Object Class

Every class in Java implicitly extends `java.lang.Object`. If a class does not explicitly extend another class, it extends Object directly. Object provides several methods that every Java object inherits:

**toString():** Returns a string representation. Default: `ClassName@hexHashCode`. Override for meaningful output.

**equals(Object obj):** Default behavior checks reference equality (same as ==). Override to check content equality.

**hashCode():** Returns an integer hash code. If you override equals(), you must also override hashCode() to maintain the contract: equal objects must have equal hash codes.

**getClass():** Returns the runtime class of the object.

**clone():** Creates a copy of the object (requires implementing Cloneable).

### 6. The instanceof Operator

`instanceof` checks whether an object is an instance of a specific class or implements a specific interface. It returns `true` or `false`.

```
Dog d = new Dog();
System.out.println(d instanceof Dog);    // true
System.out.println(d instanceof Animal); // true (Dog IS-A Animal)
System.out.println(d instanceof Object); // true (everything IS-A Object)
```

This operator is useful before performing type casts to avoid `ClassCastException`.

### 7. Covariant Return Types

Java allows an overriding method to return a subtype of the return type declared in the superclass method. This is called a covariant return type.

```
class Animal {
    Animal create() {
        return new Animal();
    }
}
class Dog extends Animal {
    @Override
    Dog create() {         // Returns Dog instead of Animal — valid!
        return new Dog();
    }
}
```

This is useful because the overriding method can return a more specific type, avoiding the need for casts at the call site.

### 8. Constructor Chaining in Inheritance

When you create a subclass object, the superclass constructor runs first. If the superclass does not have a no-arg constructor, you must explicitly call `super(args)` in the subclass constructor.

The chain goes from the most specific class up to Object: Object constructor -> ... -> immediate superclass constructor -> current class constructor. This ensures every level of the hierarchy is properly initialized.

## Code Examples

### Basic Inheritance — extends and Inheriting Members

```java
class Animal {
    String name;

    Animal(String name) {
        this.name = name;
    }

    void eat() {
        System.out.println(name + " is eating");
    }

    void sleep() {
        System.out.println(name + " is sleeping");
    }
}

class Dog extends Animal {
    String breed;

    Dog(String name, String breed) {
        super(name);           // Call Animal's constructor
        this.breed = breed;
    }

    void bark() {
        System.out.println(name + " (" + breed + ") says Woof!");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog("Buddy", "Labrador");
        d.eat();     // Inherited from Animal
        d.sleep();   // Inherited from Animal
        d.bark();    // Defined in Dog
        System.out.println("Name: " + d.name);   // Inherited field
        System.out.println("Breed: " + d.breed);  // Own field
    }
}
```

Dog extends Animal, inheriting `name`, `eat()`, and `sleep()`. Dog adds its own `breed` field and `bark()` method. The `super(name)` call in Dog's constructor invokes Animal's constructor to initialize the name field.

**Output:**

```
Buddy is eating
Buddy is sleeping
Buddy (Labrador) says Woof!
Name: Buddy
Breed: Labrador
```

### Method Overriding and @Override

```java
class Shape {
    String color;

    Shape(String color) {
        this.color = color;
    }

    double area() {
        return 0;
    }

    void display() {
        System.out.printf("%s shape, area = %.2f%n", color, area());
    }
}

class Circle extends Shape {
    double radius;

    Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    double width, height;

    Rectangle(String color, double width, double height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    @Override
    double area() {
        return width * height;
    }
}

public class Main {
    public static void main(String[] args) {
        Shape s1 = new Circle("Red", 5);
        Shape s2 = new Rectangle("Blue", 4, 6);

        s1.display();
        s2.display();
    }
}
```

Both Circle and Rectangle override the `area()` method from Shape. When `display()` calls `area()`, the overridden version runs based on the actual object type — Circle's area for s1 and Rectangle's area for s2. This is runtime polymorphism. The `@Override` annotation ensures the compiler verifies the method signature matches the superclass.

**Output:**

```
Red shape, area = 78.54
Blue shape, area = 24.00
```

### The super Keyword — Variable, Method, and Constructor

```java
class Employee {
    String name;
    double baseSalary;

    Employee(String name, double baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    double calculatePay() {
        return baseSalary;
    }

    String getDetails() {
        return name + " | Base: " + baseSalary;
    }
}

class Manager extends Employee {
    double bonus;

    Manager(String name, double baseSalary, double bonus) {
        super(name, baseSalary);     // super() — calls Employee constructor
        this.bonus = bonus;
    }

    @Override
    double calculatePay() {
        return super.calculatePay() + bonus; // super.method() — calls Employee's version
    }

    @Override
    String getDetails() {
        return super.getDetails() + " | Bonus: " + bonus + " | Total: " + calculatePay();
    }
}

public class Main {
    public static void main(String[] args) {
        Manager m = new Manager("Kavitha", 80000, 15000);
        System.out.println(m.getDetails());
        System.out.println("Pay: " + m.calculatePay());
    }
}
```

`super(name, baseSalary)` calls the Employee constructor to initialize inherited fields. `super.calculatePay()` calls Employee's version to get the base salary, then adds the bonus. `super.getDetails()` reuses the parent's implementation and extends it. This pattern avoids duplicating the base logic in the subclass.

**Output:**

```
Kavitha | Base: 80000.0 | Bonus: 15000.0 | Total: 95000.0
Pay: 95000.0
```

### The final Keyword — Class, Method, and Variable

```java
class Animal {
    final void breathe() {
        System.out.println("Breathing air");
    }

    void makeSound() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {
    // void breathe() {} // ERROR: Cannot override final method

    @Override
    void makeSound() {
        System.out.println("Woof!");
    }
}

// final class — cannot be extended
final class Utility {
    static int add(int a, int b) { return a + b; }
}
// class ExtendedUtility extends Utility {} // ERROR: cannot extend final class

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.breathe();     // Uses Animal's version (cannot be overridden)
        d.makeSound();   // Uses Dog's overridden version

        // final variable
        final int MAX = 100;
        System.out.println("MAX: " + MAX);
        // MAX = 200; // ERROR: cannot assign to final variable

        // final reference — object content can change, reference cannot
        final StringBuilder sb = new StringBuilder("Hello");
        sb.append(" World");
        System.out.println(sb);
        // sb = new StringBuilder(); // ERROR: cannot reassign
    }
}
```

`final` on a method prevents overriding: Dog cannot override `breathe()`. `final` on a class prevents extension: no class can extend Utility. `final` on a variable prevents reassignment: MAX cannot be changed to 200. For object references, `final` prevents reassigning the reference but the object's content can still be modified through its methods.

**Output:**

```
Breathing air
Woof!
MAX: 100
Hello World
```

### The Object Class — toString, equals, hashCode

```java
class Student {
    String name;
    int rollNo;

    Student(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }

    @Override
    public String toString() {
        return "Student{" + name + ", " + rollNo + "}";
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Student other = (Student) obj;
        return rollNo == other.rollNo && name.equals(other.name);
    }

    @Override
    public int hashCode() {
        return 31 * name.hashCode() + rollNo;
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Aarav", 101);
        Student s2 = new Student("Aarav", 101);
        Student s3 = new Student("Priya", 102);

        System.out.println(s1);                     // toString()
        System.out.println(s1 == s2);               // false (different objects)
        System.out.println(s1.equals(s2));           // true (same content)
        System.out.println(s1.equals(s3));           // false (different content)
        System.out.println(s1.hashCode() == s2.hashCode()); // true
        System.out.println(s1.getClass().getName()); // Student
    }
}
```

`toString()` provides a meaningful string representation. `equals()` checks content equality: same name and rollNo. The implementation first checks reference equality (`this == obj`), then null/type checks, then field comparison. `hashCode()` must be consistent with equals: equal objects must have equal hash codes. `getClass()` returns the runtime class.

**Output:**

```
Student{Aarav, 101}
false
true
false
true
Student
```

### instanceof and Type Casting

```java
class Animal {
    void eat() { System.out.println("Animal eating"); }
}

class Dog extends Animal {
    void bark() { System.out.println("Woof!"); }
}

class Cat extends Animal {
    void meow() { System.out.println("Meow!"); }
}

public class Main {
    static void handleAnimal(Animal a) {
        a.eat(); // Always safe — eat() is in Animal

        if (a instanceof Dog) {
            Dog d = (Dog) a;     // Safe downcast
            d.bark();
        } else if (a instanceof Cat) {
            Cat c = (Cat) a;     // Safe downcast
            c.meow();
        }

        // Java 16+ pattern matching:
        // if (a instanceof Dog d) { d.bark(); }
    }

    public static void main(String[] args) {
        System.out.println("--- Dog ---");
        handleAnimal(new Dog());

        System.out.println("\n--- Cat ---");
        handleAnimal(new Cat());

        // instanceof checks
        Animal a = new Dog();
        System.out.println("\na instanceof Animal: " + (a instanceof Animal));
        System.out.println("a instanceof Dog: " + (a instanceof Dog));
        System.out.println("a instanceof Cat: " + (a instanceof Cat));
        System.out.println("a instanceof Object: " + (a instanceof Object));
    }
}
```

`instanceof` checks the actual runtime type of an object. A Dog reference stored in an Animal variable is still a Dog at runtime. Using `instanceof` before casting prevents `ClassCastException`. The method accepts any Animal and uses instanceof to determine the actual type before calling type-specific methods.

**Output:**

```
--- Dog ---
Animal eating
Woof!

--- Cat ---
Animal eating
Meow!

a instanceof Animal: true
a instanceof Dog: true
a instanceof Cat: false
a instanceof Object: true
```

### Multilevel Inheritance and Constructor Chaining

```java
class Animal {
    String name;

    Animal(String name) {
        this.name = name;
        System.out.println("Animal constructor: " + name);
    }
}

class Dog extends Animal {
    String breed;

    Dog(String name, String breed) {
        super(name);
        this.breed = breed;
        System.out.println("Dog constructor: " + breed);
    }
}

class Puppy extends Dog {
    int age;

    Puppy(String name, String breed, int age) {
        super(name, breed);
        this.age = age;
        System.out.println("Puppy constructor: " + age + " months");
    }

    @Override
    public String toString() {
        return name + " (" + breed + "), " + age + " months old";
    }
}

public class Main {
    public static void main(String[] args) {
        Puppy p = new Puppy("Buddy", "Golden Retriever", 6);
        System.out.println("\n" + p);

        // instanceof checks the entire chain
        System.out.println(p instanceof Puppy);  // true
        System.out.println(p instanceof Dog);    // true
        System.out.println(p instanceof Animal); // true
        System.out.println(p instanceof Object); // true
    }
}
```

Multilevel inheritance: Puppy extends Dog, which extends Animal (which implicitly extends Object). When creating a Puppy, constructors execute from the top of the hierarchy down: Animal -> Dog -> Puppy. Each constructor calls `super()` to initialize the parent first. A Puppy object is an instance of Puppy, Dog, Animal, and Object.

**Output:**

```
Animal constructor: Buddy
Dog constructor: Golden Retriever
Puppy constructor: 6 months

Buddy (Golden Retriever), 6 months old
true
true
true
true
```

### Covariant Return Types

```java
class Animal {
    String name;

    Animal(String name) { this.name = name; }

    Animal create(String name) {
        return new Animal(name);
    }

    public String toString() { return "Animal: " + name; }
}

class Dog extends Animal {
    String breed;

    Dog(String name, String breed) {
        super(name);
        this.breed = breed;
    }

    @Override
    Dog create(String name) {            // Covariant return: Dog instead of Animal
        return new Dog(name, "Unknown");
    }

    public String toString() { return "Dog: " + name + " (" + breed + ")"; }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Animal("Generic");
        Animal created1 = a.create("Simba");
        System.out.println(created1);

        Dog d = new Dog("Buddy", "Lab");
        Dog created2 = d.create("Max");   // No cast needed! Returns Dog
        System.out.println(created2);
    }
}
```

The overriding method `Dog.create()` returns `Dog` instead of `Animal`. This is valid because Dog IS-A Animal (covariant return). The benefit: when you call `create()` on a Dog reference, you get a Dog back without needing to cast. This makes the API more type-safe and convenient.

**Output:**

```
Animal: Simba
Dog: Max (Unknown)
```

## Common Mistakes

### Forgetting to Call super() When Superclass Has No No-Arg Constructor

**Wrong:**

```
class Animal {
    String name;
    Animal(String name) {
        this.name = name;
    }
}

class Dog extends Animal {
    Dog() {
        // Java inserts super() here — but Animal has no no-arg constructor!
    }
}
```

error: constructor Animal in class Animal cannot be applied to given types; required: String; found: no arguments

**Correct:**

```
class Dog extends Animal {
    Dog() {
        super("Unknown");  // Explicitly call the parameterized constructor
    }

    Dog(String name) {
        super(name);
    }
}
```

If the superclass does not have a no-argument constructor, the subclass must explicitly call one of the superclass's constructors using `super(args)`. Java automatically inserts `super()` (no-arg) if you do not write any super() call. If the superclass has no no-arg constructor, this causes a compilation error.

### Trying to Override a final Method

**Wrong:**

```
class Animal {
    final void breathe() {
        System.out.println("Breathing");
    }
}

class Dog extends Animal {
    @Override
    void breathe() {  // ERROR: cannot override final method
        System.out.println("Dog breathing");
    }
}
```

error: breathe() in Dog cannot override breathe() in Animal; overridden method is final

**Correct:**

```
class Dog extends Animal {
    // Cannot override breathe(), but can add new methods
    void pant() {
        System.out.println("Dog panting");
    }
}
```

A `final` method cannot be overridden in any subclass. The superclass author marks a method as final when the implementation must not change. If you need different behavior, add a new method instead.

### Attempting Multiple Inheritance with Classes

**Wrong:**

```
class Flyable {
    void fly() { System.out.println("Flying"); }
}

class Swimmable {
    void swim() { System.out.println("Swimming"); }
}

class Duck extends Flyable, Swimmable { } // ERROR
```

error: '{' expected (Java does not support multiple class inheritance)

**Correct:**

```
interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

class Duck implements Flyable, Swimmable {
    public void fly() { System.out.println("Duck flying"); }
    public void swim() { System.out.println("Duck swimming"); }
}
```

Java does not allow a class to extend multiple classes to avoid the diamond problem. Use interfaces instead: a class can implement multiple interfaces. This achieves a form of multiple inheritance for behavior without the ambiguity issues.

### Making the Overriding Method More Restrictive

**Wrong:**

```
class Animal {
    public void eat() {
        System.out.println("Animal eating");
    }
}

class Dog extends Animal {
    @Override
    private void eat() {  // ERROR: cannot reduce visibility
        System.out.println("Dog eating");
    }
}
```

error: eat() in Dog cannot override eat() in Animal; attempting to assign weaker access privileges; was public

**Correct:**

```
class Dog extends Animal {
    @Override
    public void eat() {  // Same or wider access
        System.out.println("Dog eating");
    }
}
```

An overriding method cannot have a more restrictive access modifier than the overridden method. If the parent method is `public`, the child method must also be `public`. If the parent is `protected`, the child can be `protected` or `public`. This rule ensures that substituting a subclass object for a superclass reference always works.

### Confusing Method Overloading with Method Overriding

**Wrong:**

```
class Animal {
    void makeSound() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {
    // This is OVERLOADING, not overriding (different parameter list)
    void makeSound(String sound) {
        System.out.println(sound);
    }
}

Animal a = new Dog();
a.makeSound();            // Calls Animal's version (not overridden!)
// a.makeSound("Woof");  // ERROR: Animal does not have makeSound(String)
```

No compilation error, but the behavior is unexpected. Animal's makeSound() is not overridden — Dog has a different method with the same name but different parameters.

**Correct:**

```
class Dog extends Animal {
    @Override   // Use @Override to catch this mistake at compile time
    void makeSound() {
        System.out.println("Woof!");
    }
}

Animal a = new Dog();
a.makeSound(); // Now calls Dog's version: "Woof!"
```

Overriding requires the exact same method name AND parameter list. If the parameter list is different, it is overloading (a new method), not overriding. The `@Override` annotation would have caught this: the compiler would report an error because `makeSound(String)` does not override any method in Animal.

## Summary

- Inheritance allows a subclass to acquire fields and methods from a superclass using the extends keyword, establishing an IS-A relationship.
- Java supports single, multilevel, and hierarchical inheritance. Multiple inheritance with classes is NOT supported — use interfaces instead.
- The super keyword has three uses: super.variable (access hidden superclass field), super.method() (call overridden superclass method), and super() (call superclass constructor — must be the first statement).
- Method overriding provides a specialized implementation in the subclass with the same name and parameters as the superclass method. Use @Override annotation to let the compiler verify correctness.
- Overriding rules: same name and parameters, same or covariant return type, access cannot be more restrictive, cannot override static/final/private methods.
- The final keyword prevents modification: final class cannot be extended, final method cannot be overridden, final variable cannot be reassigned.
- Every class in Java implicitly extends java.lang.Object. Key Object methods: toString(), equals(), hashCode(), getClass().
- Override equals() for content comparison and hashCode() for consistency. The contract: equal objects must have equal hash codes.
- instanceof checks the runtime type of an object, including the entire inheritance chain. Use it before downcasting to prevent ClassCastException.
- Constructor chaining in inheritance: when creating a subclass object, constructors execute from the top of the hierarchy (Object) down to the subclass. Each constructor calls super() to initialize the parent first.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/inheritance-in-java/*
*Practice questions: https://learn.modernagecoders.com/resources/java/inheritance-in-java/practice/*
