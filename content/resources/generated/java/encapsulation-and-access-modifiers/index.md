---
title: "Java Encapsulation and Access Modifiers - private, public, protected, Getters & Setters | Modern Age Coders"
description: "Learn Java encapsulation, access modifiers (public, private, protected, default), getters and setters, JavaBeans convention, immutable classes, and Java 16+ record classes. Includes 55+ practice questions."
slug: encapsulation-and-access-modifiers
canonical: https://learn.modernagecoders.com/resources/java/encapsulation-and-access-modifiers
category: "Java"
keywords: ["java encapsulation", "java access modifiers", "private public protected java", "getters setters java", "java data hiding", "java immutable class", "java records", "java beans convention", "java package private", "java encapsulation example"]
---
# Encapsulation and Access Modifiers

**Difficulty:** Intermediate  
**Reading time:** 28 min  
**Chapter:** 14  
**Practice questions:** 55

## What Is Encapsulation?

**Encapsulation** is one of the four fundamental pillars of Object-Oriented Programming (alongside inheritance, polymorphism, and abstraction). It has two key aspects:

**1. Data Hiding:** Restricting direct access to an object's internal state (fields) from outside code. Fields are marked `private`, and the only way to read or modify them is through controlled methods.

**2. Bundling:** Grouping related data (fields) and behavior (methods) together into a single unit (class). The class becomes a self-contained module with a clear public interface.

Think of encapsulation as a capsule (hence the name): the medicine (data) is enclosed inside a protective shell (access control), and you interact with it through a defined interface (getters and setters), not by opening the capsule.

### Access Modifiers

Java provides four access levels to control visibility of classes, fields, methods, and constructors:

**`public`:** Accessible from anywhere — any class in any package.

**`protected`:** Accessible within the same package and by subclasses in other packages.

**`default` (no modifier):** Also called package-private. Accessible only within the same package.

**`private`:** Accessible only within the same class. Not visible to any other class, not even subclasses.

## Why Is Encapsulation Important?

Encapsulation is not just a theoretical concept — it directly affects the quality, security, and maintainability of your code. Here is why every professional Java developer must understand it:

### 1. Protects Data Integrity

Without encapsulation, any code anywhere in your program can set a field to an invalid value. A negative age, a null name, or a balance of -1000 would go undetected. With encapsulation, setters can validate input: `if (age < 0) throw new IllegalArgumentException()`.

### 2. Controls the Public Interface

Encapsulation lets you expose only what external code needs and hide implementation details. If you store a temperature in Celsius internally but need to provide Fahrenheit, you can do the conversion in the getter without exposing the internal representation.

### 3. Enables Safe Refactoring

When fields are private and accessed through methods, you can change the internal implementation without breaking external code. Rename a field, change its type, or add computation in a getter — the public interface stays the same.

### 4. Interview and Examination Staple

Every Java placement exam and interview includes questions about access modifiers, getters/setters, and encapsulation. Understanding the access level table (public, protected, default, private) is tested consistently across companies and universities.

### 5. Foundation for Design Patterns

Encapsulation is the basis for immutable classes (used extensively in multi-threaded programming), the Builder pattern, the JavaBeans convention (required by frameworks like Spring and Hibernate), and virtually every design pattern in Java.

## Detailed Explanation

### 1. Access Modifier Table

This table is critical for interviews and exams. Memorize it:

```
| Modifier    | Same Class | Same Package | Subclass (other pkg) | Other Package |
|-------------|------------|--------------|----------------------|---------------|
| public      |    Yes     |     Yes      |         Yes          |      Yes      |
| protected   |    Yes     |     Yes      |         Yes          |      No       |
| default     |    Yes     |     Yes      |         No           |      No       |
| private     |    Yes     |     No       |         No           |      No       |
```

**public** is the most permissive: accessible everywhere. **private** is the most restrictive: accessible only within the declaring class. **protected** adds subclass access (even across packages) to the default package-level access. **default** (no keyword) restricts access to the same package only.

### 2. Getters and Setters

The standard encapsulation pattern in Java is: make fields `private` and provide `public` getter and setter methods for controlled access.

```
class Student {
    private String name;
    private int age;

    // Getter — returns the field value
    public String getName() {
        return name;
    }

    // Setter — sets the field value with validation
    public void setName(String name) {
        if (name == null || name.isEmpty()) {
            throw new IllegalArgumentException("Name cannot be null or empty");
        }
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age < 0 || age > 150) {
            throw new IllegalArgumentException("Invalid age: " + age);
        }
        this.age = age;
    }
}
```

Getters follow the naming convention `getFieldName()` (or `isFieldName()` for booleans). Setters follow `setFieldName(value)`. This is the JavaBeans convention, which is required by many Java frameworks.

### 3. Why Use Private Fields?

Consider a BankAccount with a public balance field:

```
class BankAccount {
    public double balance; // BAD: anyone can set this to any value
}

account.balance = -5000; // No validation, no logging, no protection
```

With encapsulation:

```
class BankAccount {
    private double balance;

    public void deposit(double amount) {
        if (amount <= 0) throw new IllegalArgumentException("Deposit must be positive");
        balance += amount;
    }

    public void withdraw(double amount) {
        if (amount > balance) throw new IllegalArgumentException("Insufficient funds");
        balance -= amount;
    }

    public double getBalance() {
        return balance;
    }
    // No setBalance() — balance can only change through deposit/withdraw
}
```

### 4. JavaBeans Naming Convention

A JavaBean is a class that follows specific conventions:

- Fields are `private`.

- A no-argument constructor exists.

- Getter and setter methods follow the naming pattern: `getX()`/`setX()` for regular types, `isX()` for booleans.

- The class implements `Serializable` (optional but common).

```
class Employee {
    private String name;
    private boolean active;

    public Employee() {} // no-arg constructor

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public boolean isActive() { return active; }  // boolean uses 'is' prefix
    public void setActive(boolean active) { this.active = active; }
}
```

### 5. Creating Immutable Classes

An immutable class is one whose objects cannot be modified after creation. Once constructed, the state never changes.

Rules for creating an immutable class:

1. Make the class `final` (prevents subclassing that could add mutable behavior).

2. Make all fields `private` and `final`.

3. Do not provide setter methods.

4. Initialize all fields in the constructor.

5. For mutable field types (arrays, lists, dates), return defensive copies from getters.

```
final class ImmutableStudent {
    private final String name;
    private final int rollNo;
    private final double marks;

    public ImmutableStudent(String name, int rollNo, double marks) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks;
    }

    public String getName() { return name; }
    public int getRollNo() { return rollNo; }
    public double getMarks() { return marks; }

    @Override
    public String toString() {
        return name + " (" + rollNo + ") - " + marks;
    }
}
```

### 6. Record Classes (Java 16+)

Java 16 introduced `record` classes as a concise way to create immutable data carriers. A record automatically generates: the constructor, getters (named after the fields, without 'get' prefix), `equals()`, `hashCode()`, and `toString()`.

```
record Student(String name, int rollNo, double marks) {}

// Equivalent to writing a full immutable class with constructor,
// getters, equals(), hashCode(), and toString()

Student s = new Student("Aarav", 101, 92.5);
System.out.println(s.name());     // "Aarav" — note: name(), not getName()
System.out.println(s.rollNo());   // 101
System.out.println(s);            // Student[name=Aarav, rollNo=101, marks=92.5]
```

Records are implicitly `final` and their fields are implicitly `private final`. You can add custom methods and validate in a compact constructor, but you cannot add instance fields.

## Code Examples

### Access Modifiers in Action

```java
// File: com/example/Person.java
package com.example;

public class Person {
    public String publicField = "public";
    protected String protectedField = "protected";
    String defaultField = "default";         // package-private
    private String privateField = "private";

    public void showAll() {
        // Same class — can access all four
        System.out.println(publicField);
        System.out.println(protectedField);
        System.out.println(defaultField);
        System.out.println(privateField);
    }
}

// File: com/example/SamePackage.java
package com.example;

public class SamePackage {
    void test() {
        Person p = new Person();
        System.out.println(p.publicField);      // OK
        System.out.println(p.protectedField);   // OK (same package)
        System.out.println(p.defaultField);     // OK (same package)
        // System.out.println(p.privateField);  // ERROR: private
    }
}

// File: com/other/DifferentPackage.java
package com.other;
import com.example.Person;

public class DifferentPackage {
    void test() {
        Person p = new Person();
        System.out.println(p.publicField);      // OK
        // System.out.println(p.protectedField); // ERROR: different package, not subclass
        // System.out.println(p.defaultField);   // ERROR: different package
        // System.out.println(p.privateField);   // ERROR: private
    }
}
```

From within the same class, all four access levels are visible. From a class in the same package, public, protected, and default are accessible but private is not. From a class in a different package (not a subclass), only public is accessible. Protected would be accessible from a subclass in another package.

**Output:**

```
(Conceptual — demonstrates visibility rules, not runnable as a single file)
```

### Encapsulation with Getters and Setters

```java
public class Student {
    private String name;
    private int age;
    private double marks;

    public Student(String name, int age, double marks) {
        setName(name);   // Use setter for validation
        setAge(age);
        setMarks(marks);
    }

    public String getName() { return name; }

    public void setName(String name) {
        if (name == null || name.trim().isEmpty()) {
            throw new IllegalArgumentException("Name cannot be empty");
        }
        this.name = name.trim();
    }

    public int getAge() { return age; }

    public void setAge(int age) {
        if (age < 1 || age > 120) {
            throw new IllegalArgumentException("Invalid age: " + age);
        }
        this.age = age;
    }

    public double getMarks() { return marks; }

    public void setMarks(double marks) {
        if (marks < 0 || marks > 100) {
            throw new IllegalArgumentException("Marks must be 0-100");
        }
        this.marks = marks;
    }

    @Override
    public String toString() {
        return name + " (age " + age + ") - Marks: " + marks;
    }

    public static void main(String[] args) {
        Student s = new Student("Aarav", 20, 92.5);
        System.out.println(s);

        s.setMarks(95.0);
        System.out.println("Updated: " + s);

        try {
            s.setAge(-5);
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

All fields are private. Access is controlled through getters (read) and setters (write with validation). The constructor itself uses setters to ensure validation runs during object creation. Attempting to set an invalid age throws an IllegalArgumentException with a descriptive message. This prevents the object from ever being in an invalid state.

**Output:**

```
Aarav (age 20) - Marks: 92.5
Updated: Aarav (age 20) - Marks: 95.0
Error: Invalid age: -5
```

### Read-Only and Write-Only Properties

```java
public class UserAccount {
    private String username;
    private String password;
    private int loginCount;

    public UserAccount(String username, String password) {
        this.username = username;
        this.password = password;
        this.loginCount = 0;
    }

    // Read-only: getter only, no setter
    public String getUsername() {
        return username;
    }

    // Read-only: getter only
    public int getLoginCount() {
        return loginCount;
    }

    // Write-only: setter only, no getter (password should not be readable)
    public void setPassword(String password) {
        if (password.length() < 8) {
            throw new IllegalArgumentException("Password must be at least 8 characters");
        }
        this.password = password;
    }

    // Business method that uses the private password
    public boolean authenticate(String attempt) {
        loginCount++;
        return password.equals(attempt);
    }

    public static void main(String[] args) {
        UserAccount user = new UserAccount("priya_kumar", "SecurePass123");
        System.out.println("Username: " + user.getUsername());
        System.out.println("Auth result: " + user.authenticate("WrongPass"));
        System.out.println("Auth result: " + user.authenticate("SecurePass123"));
        System.out.println("Login attempts: " + user.getLoginCount());
    }
}
```

Not every field needs both a getter and a setter. `username` is read-only (no setter) because it should not change after creation. `password` is write-only (no getter) because reading the password is a security risk. `loginCount` is read-only and is modified only internally by the `authenticate()` method. This demonstrates encapsulation in a realistic scenario.

**Output:**

```
Username: priya_kumar
Auth result: false
Auth result: true
Login attempts: 2
```

### Immutable Class

```java
import java.util.Arrays;

final class ImmutableStudent {
    private final String name;
    private final int rollNo;
    private final int[] scores; // mutable field — needs defensive copy

    public ImmutableStudent(String name, int rollNo, int[] scores) {
        this.name = name;
        this.rollNo = rollNo;
        this.scores = Arrays.copyOf(scores, scores.length); // defensive copy
    }

    public String getName() { return name; }
    public int getRollNo() { return rollNo; }

    // Return a copy, not the original array
    public int[] getScores() {
        return Arrays.copyOf(scores, scores.length); // defensive copy
    }

    public double getAverage() {
        int sum = 0;
        for (int s : scores) sum += s;
        return (double) sum / scores.length;
    }

    @Override
    public String toString() {
        return name + " (" + rollNo + ") - Avg: " + String.format("%.1f", getAverage());
    }
}

public class Main {
    public static void main(String[] args) {
        int[] marks = {85, 90, 78, 92};
        ImmutableStudent s = new ImmutableStudent("Meera", 201, marks);
        System.out.println(s);

        // Try to modify through the original array
        marks[0] = 0;
        System.out.println("After modifying original array: " + s);

        // Try to modify through the getter
        int[] retrieved = s.getScores();
        retrieved[0] = 0;
        System.out.println("After modifying retrieved array: " + s);
    }
}
```

The class is `final` (cannot be subclassed). All fields are `private final`. No setters exist. The critical part: `scores` is an array (mutable). The constructor copies the input array, and the getter returns a copy. This ensures external code cannot modify the internal state. Both modification attempts fail because the object holds its own independent copy.

**Output:**

```
Meera (201) - Avg: 86.3
After modifying original array: Meera (201) - Avg: 86.3
After modifying retrieved array: Meera (201) - Avg: 86.3
```

### Java Record Classes (Java 16+)

```java
// A record automatically generates constructor, getters, equals(), hashCode(), toString()
record Student(String name, int rollNo, double marks) {

    // Compact constructor for validation
    Student {
        if (name == null || name.isEmpty()) {
            throw new IllegalArgumentException("Name cannot be empty");
        }
        if (marks < 0 || marks > 100) {
            throw new IllegalArgumentException("Marks must be 0-100");
        }
    }

    // Custom method
    char grade() {
        if (marks >= 90) return 'A';
        if (marks >= 80) return 'B';
        if (marks >= 70) return 'C';
        if (marks >= 60) return 'D';
        return 'F';
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Aarav", 101, 92.5);
        Student s2 = new Student("Aarav", 101, 92.5);

        // Auto-generated getters (no 'get' prefix)
        System.out.println(s1.name());
        System.out.println(s1.rollNo());

        // Auto-generated toString()
        System.out.println(s1);

        // Auto-generated equals() — compares all fields
        System.out.println("s1.equals(s2): " + s1.equals(s2));

        // Custom method
        System.out.println("Grade: " + s1.grade());
    }
}
```

Records provide a concise syntax for immutable data classes. The compiler generates the constructor, field accessors (not using 'get' prefix), `equals()`, `hashCode()`, and `toString()`. The compact constructor (without parameter list) lets you add validation. Records are implicitly final and their fields are implicitly private final. You can add custom methods but not instance fields.

**Output:**

```
Aarav
101
Student[name=Aarav, rollNo=101, marks=92.5]
s1.equals(s2): true
Grade: A
```

### Protected Access with Inheritance Across Packages

```java
// File: com/example/Animal.java
package com.example;

public class Animal {
    public String name;
    protected String sound;       // accessible in subclasses
    String habitat;               // default: same package only
    private int lifespan;         // only this class

    public Animal(String name, String sound, String habitat, int lifespan) {
        this.name = name;
        this.sound = sound;
        this.habitat = habitat;
        this.lifespan = lifespan;
    }

    protected void makeSound() {
        System.out.println(name + " says " + sound);
    }
}

// File: com/pets/Dog.java
package com.pets;
import com.example.Animal;

public class Dog extends Animal {
    public Dog(String name) {
        super(name, "Woof", "Home", 13);
    }

    public void greet() {
        System.out.println("Name (public): " + name);      // OK
        System.out.println("Sound (protected): " + sound);  // OK: subclass
        // System.out.println(habitat);    // ERROR: default, different package
        // System.out.println(lifespan);   // ERROR: private
        makeSound();                       // OK: protected method
    }
}
```

This example demonstrates protected access across packages. `Dog` is in a different package from `Animal`. It can access `name` (public) and `sound` (protected — Dog is a subclass). It cannot access `habitat` (default — different package) or `lifespan` (private). Protected provides a middle ground: hidden from unrelated classes but available to the inheritance hierarchy.

**Output:**

```
(Conceptual — demonstrates cross-package access rules)
```

## Common Mistakes

### Directly Accessing Private Fields from Outside the Class

**Wrong:**

```
class Student {
    private String name;
    private int age;
}

Student s = new Student();
s.name = "Aarav";   // Compilation error!
s.age = 20;         // Compilation error!
```

error: name has private access in Student

**Correct:**

```
class Student {
    private String name;
    private int age;

    public void setName(String name) { this.name = name; }
    public void setAge(int age) { this.age = age; }
    public String getName() { return name; }
    public int getAge() { return age; }
}

Student s = new Student();
s.setName("Aarav");
s.setAge(20);
```

Private fields cannot be accessed outside the class. This is the entire point of encapsulation. Provide public getters and setters to control how external code interacts with the object's state.

### Confusing default (Package-Private) with public

**Wrong:**

```
// File: com/util/Helper.java
package com.util;

class Helper {  // default access — NOT public
    void doWork() {
        System.out.println("Working");
    }
}

// File: com/app/Main.java
package com.app;
import com.util.Helper; // ERROR: Helper is not public
```

error: Helper is not public in com.util; cannot be accessed from outside package

**Correct:**

```
// File: com/util/Helper.java
package com.util;

public class Helper {  // Now accessible from other packages
    public void doWork() {
        System.out.println("Working");
    }
}
```

If you omit the access modifier on a class declaration, it gets default (package-private) access, meaning it is only visible within its own package. To use a class from another package, both the class and its methods must be `public`.

### Creating Setters Without Validation

**Wrong:**

```
class BankAccount {
    private double balance;

    public void setBalance(double balance) {
        this.balance = balance; // No validation — allows negative balance!
    }
}
```

No compilation error, but this defeats the purpose of encapsulation. External code can set balance to -1000000.

**Correct:**

```
class BankAccount {
    private double balance;

    // No public setBalance() — control through business methods
    public void deposit(double amount) {
        if (amount <= 0) throw new IllegalArgumentException("Amount must be positive");
        this.balance += amount;
    }

    public void withdraw(double amount) {
        if (amount <= 0) throw new IllegalArgumentException("Amount must be positive");
        if (amount > balance) throw new IllegalArgumentException("Insufficient funds");
        this.balance -= amount;
    }

    public double getBalance() { return balance; }
}
```

Simply making a field private and adding a setter without validation provides no real protection. The setter becomes a meaningless middleman. Add validation in setters, or replace setters with domain-specific methods (like `deposit()` and `withdraw()`) that enforce business rules.

### Returning a Mutable Object Reference from a Getter

**Wrong:**

```
class Student {
    private int[] scores;

    public Student(int[] scores) {
        this.scores = scores; // stores the same array reference
    }

    public int[] getScores() {
        return scores; // returns the internal array — external code can modify it!
    }
}
```

No error, but encapsulation is broken. External code can modify the internal array through the returned reference.

**Correct:**

```
import java.util.Arrays;

class Student {
    private int[] scores;

    public Student(int[] scores) {
        this.scores = Arrays.copyOf(scores, scores.length); // defensive copy in
    }

    public int[] getScores() {
        return Arrays.copyOf(scores, scores.length); // defensive copy out
    }
}
```

When a getter returns a reference to a mutable object (array, list, date), external code can modify the object's internal state through that reference. Use **defensive copies**: copy the input in the constructor and copy the output in the getter. This ensures the internal state is completely isolated.

## Summary

- Encapsulation means bundling data (fields) and behavior (methods) together and controlling access to the data through access modifiers.
- Java has four access levels: public (everywhere), protected (same package + subclasses), default/package-private (same package only), and private (same class only).
- The standard encapsulation pattern: make fields private, provide public getters (for reading) and setters (for writing with validation).
- Getters follow the naming convention getFieldName() (or isFieldName() for booleans). Setters follow setFieldName(). This is the JavaBeans convention required by many frameworks.
- Not every field needs a setter. Read-only fields have only getters. Write-only fields (like passwords) may have only setters. Fields like balance may have domain-specific methods instead of setters.
- Validation in setters and constructors prevents objects from being in invalid states. Throw IllegalArgumentException for invalid input.
- Immutable classes have: final class, private final fields, no setters, constructor initialization only, and defensive copies for mutable field types.
- Record classes (Java 16+) provide a concise way to create immutable data carriers with auto-generated constructor, getters, equals(), hashCode(), and toString().
- Protected access allows subclasses in other packages to access the member — useful for inheritance hierarchies while still restricting general access.
- Defensive copies in constructors and getters protect encapsulation when dealing with mutable objects like arrays, lists, or dates.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/encapsulation-and-access-modifiers/*
*Practice questions: https://learn.modernagecoders.com/resources/java/encapsulation-and-access-modifiers/practice/*
