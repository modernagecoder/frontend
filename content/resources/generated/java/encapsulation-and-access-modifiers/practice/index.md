---
title: "Practice: Encapsulation and Access Modifiers"
description: "55 practice problems for Encapsulation and Access Modifiers in Java"
slug: encapsulation-and-access-modifiers-practice
canonical: https://learn.modernagecoders.com/resources/java/encapsulation-and-access-modifiers/practice/
category: "Java"
---
# Practice: Encapsulation and Access Modifiers

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
class Person {
    private String name = "Aarav";
    public String getName() { return name; }
}

Person p = new Person();
System.out.println(p.getName());
```

*Hint:* The getter provides controlled access to the private field.

**Answer:** `Aarav`

The field `name` is private, so it cannot be accessed directly. The public getter `getName()` returns the value. `p.getName()` returns "Aarav".

### Q2. [Easy] Will this code compile?

```
class Box {
    private int size;
}

Box b = new Box();
b.size = 10;
```

*Hint:* Private fields cannot be accessed from outside the class.

**Answer:** No. Compilation error: `size has private access in Box`

The field `size` is private, meaning it can only be accessed within the Box class itself. The code in main is outside the Box class, so `b.size = 10` causes a compilation error.

### Q3. [Easy] What is the output?

```
class Counter {
    private int count = 0;
    public void increment() { count++; }
    public int getCount() { return count; }
}

Counter c = new Counter();
c.increment();
c.increment();
c.increment();
System.out.println(c.getCount());
```

*Hint:* Each increment() call adds 1 to count. The getter reads the value.

**Answer:** `3`

Three calls to `increment()` increase count from 0 to 3. `getCount()` returns 3. The field is private, so the only way to modify or read it is through the public methods.

### Q4. [Easy] What is the output?

```
class Student {
    private String name;
    public Student(String name) { this.name = name; }
    public String getName() { return name; }
}

Student s1 = new Student("Priya");
Student s2 = new Student("Rohan");
System.out.println(s1.getName());
System.out.println(s2.getName());
```

*Hint:* Each object has its own copy of the private field name.

**Answer:** `Priya`
`Rohan`

Each Student object has its own `name` field. s1's name is "Priya" and s2's name is "Rohan". The getter returns each object's independent value.

### Q5. [Medium] What is the output?

```
class Temperature {
    private double celsius;

    public Temperature(double celsius) {
        this.celsius = celsius;
    }

    public double getCelsius() { return celsius; }

    public double getFahrenheit() {
        return celsius * 9.0 / 5.0 + 32;
    }
}

Temperature t = new Temperature(100);
System.out.println(t.getCelsius());
System.out.println(t.getFahrenheit());
```

*Hint:* getFahrenheit() computes a derived value from the private field without storing it.

**Answer:** `100.0`
`212.0`

The internal representation is Celsius (private). `getCelsius()` returns it directly. `getFahrenheit()` computes the Fahrenheit value on the fly: 100 * 9/5 + 32 = 212. This demonstrates encapsulation: the external interface provides both units without storing both.

### Q6. [Medium] What is the output?

```
class Product {
    private double price;

    public Product(double price) {
        setPrice(price);
    }

    public double getPrice() { return price; }

    public void setPrice(double price) {
        if (price < 0) {
            this.price = 0;
        } else {
            this.price = price;
        }
    }
}

Product p = new Product(-50);
System.out.println(p.getPrice());
p.setPrice(100);
System.out.println(p.getPrice());
```

*Hint:* The setter validates input: negative prices are set to 0.

**Answer:** `0.0`
`100.0`

The constructor calls `setPrice(-50)`. Since -50 < 0, the setter sets price to 0. Then `setPrice(100)` sets it to 100 (valid). Validation in setters prevents invalid state.

### Q7. [Medium] What is the output?

```
class Config {
    private boolean debugMode;

    public boolean isDebugMode() { return debugMode; }
    public void setDebugMode(boolean debugMode) {
        this.debugMode = debugMode;
    }
}

Config c = new Config();
System.out.println(c.isDebugMode());
c.setDebugMode(true);
System.out.println(c.isDebugMode());
```

*Hint:* Boolean getters use 'is' prefix instead of 'get'. Default value for boolean is false.

**Answer:** `false`
`true`

The default value of a boolean field is `false`. After calling `setDebugMode(true)`, it becomes `true`. The getter uses `isDebugMode()` — the JavaBeans convention for boolean fields uses 'is' instead of 'get'.

### Q8. [Hard] What is the output?

```
class SafeList {
    private int[] data;

    public SafeList(int[] data) {
        this.data = java.util.Arrays.copyOf(data, data.length);
    }

    public int[] getData() {
        return java.util.Arrays.copyOf(data, data.length);
    }

    public int getFirst() { return data[0]; }
}

int[] arr = {10, 20, 30};
SafeList list = new SafeList(arr);
arr[0] = 999;
System.out.println(list.getFirst());

int[] retrieved = list.getData();
retrieved[0] = 888;
System.out.println(list.getFirst());
```

*Hint:* Defensive copies protect the internal array from external modification.

**Answer:** `10`
`10`

The constructor creates a copy of the input array, so modifying `arr[0]` does not affect the internal data. The getter also returns a copy, so modifying `retrieved[0]` does not affect the internal data. Both attempts to break encapsulation fail. `getFirst()` always returns 10.

### Q9. [Hard] What is the output? (Java 16+)

```
record Point(int x, int y) {
    double distanceFromOrigin() {
        return Math.sqrt(x * x + y * y);
    }
}

Point p1 = new Point(3, 4);
Point p2 = new Point(3, 4);
System.out.println(p1);
System.out.println(p1.x());
System.out.println(p1.equals(p2));
System.out.printf("Distance: %.1f%n", p1.distanceFromOrigin());
```

*Hint:* Records auto-generate toString(), getters (without 'get' prefix), and equals() based on all fields.

**Answer:** `Point[x=3, y=4]`
`3`
`true`
`Distance: 5.0`

The auto-generated `toString()` produces "Point[x=3, y=4]". The getter is `x()` not `getX()`. `equals()` compares all component values, so p1.equals(p2) is true. The custom method computes sqrt(9+16) = 5.0.

## Mixed Questions

### Q1. [Easy] What is the difference between encapsulation and abstraction?

*Hint:* Think about 'how' vs 'what' — hiding implementation vs hiding complexity.

**Answer:** **Encapsulation** is about hiding the internal state of an object and controlling access through methods (data hiding). **Abstraction** is about hiding complex implementation details and exposing only the essential features (complexity hiding). Encapsulation answers 'how to protect data'. Abstraction answers 'what to show to the user'.

Example: A car's steering wheel is abstraction (you turn it without knowing the mechanics). The locked engine hood is encapsulation (you cannot directly access the engine). In Java, encapsulation uses private fields + getters/setters. Abstraction uses abstract classes and interfaces.

### Q2. [Easy] Which access modifier would you use for a field that should only be accessible within the same class?

*Hint:* This is the most restrictive access level.

**Answer:** `private`

`private` restricts access to the declaring class only. No other class — not even subclasses or classes in the same package — can access private members directly. This is the recommended default for fields.

### Q3. [Medium] What is the output?

```
class Pair {
    private int first;
    private int second;

    public Pair(int first, int second) {
        this.first = first;
        this.second = second;
    }

    public Pair swap() {
        return new Pair(second, first);
    }

    public String toString() {
        return "(" + first + ", " + second + ")";
    }
}

Pair p1 = new Pair(10, 20);
Pair p2 = p1.swap();
System.out.println(p1);
System.out.println(p2);
```

*Hint:* swap() returns a new Pair. The original is not modified.

**Answer:** `(10, 20)`
`(20, 10)`

`swap()` creates and returns a new Pair with the values reversed. The original `p1` is unchanged because the fields are private and no setter exists. This is an example of immutable-style operations that return new objects.

### Q4. [Medium] What is the difference between default (package-private) access and protected access?

*Hint:* Think about what happens when a subclass is in a different package.

**Answer:** **Default** access allows visibility within the same package only. **Protected** access allows visibility within the same package AND in subclasses of other packages. The key difference is subclass access across packages: protected grants it, default does not.

If Animal has a protected method `eat()`, a Dog class in a different package that extends Animal can call `eat()`. With default access, Dog in a different package could not call it. Protected is commonly used for methods and fields that are part of the inheritance contract.

### Q5. [Medium] What is the output?

```
class Circle {
    private double radius;

    public Circle(double radius) {
        this.radius = Math.abs(radius);
    }

    public double getRadius() { return radius; }
    public double getArea() { return Math.PI * radius * radius; }
    public double getCircumference() { return 2 * Math.PI * radius; }
}

Circle c = new Circle(-5);
System.out.printf("Radius: %.1f%n", c.getRadius());
System.out.printf("Area: %.2f%n", c.getArea());
```

*Hint:* The constructor uses Math.abs() to ensure the radius is never negative.

**Answer:** `Radius: 5.0`
`Area: 78.54`

The constructor applies `Math.abs()` to the input, converting -5 to 5. This validation ensures the radius is always non-negative. `getArea()` computes PI * 25 = 78.54. Encapsulation ensures the object is always in a valid state.

### Q6. [Hard] Explain why making all fields public (instead of private with getters/setters) is considered bad practice, even if the getters and setters do no validation.

*Hint:* Think about future changes, binary compatibility, and the ability to add logic later.

**Answer:** Even without validation, getters/setters provide: (1) **Future-proofing** — you can add validation, logging, or computed values later without changing the public API. (2) **Read-only control** — you can omit setters for fields that should not change. (3) **Binary compatibility** — changing a public field to a method requires recompiling all dependent code. (4) **Framework compatibility** — many Java frameworks (Spring, Hibernate, Jackson) require JavaBeans conventions with getters/setters.

The cost of writing getters/setters is minimal. The cost of refactoring a public field to a method when you realize you need validation or logging is significant, especially in a large codebase. Encapsulation is a one-time investment that protects against future maintenance pain.

### Q7. [Hard] What is the output?

```
final class Money {
    private final int amount;
    private final String currency;

    public Money(int amount, String currency) {
        this.amount = amount;
        this.currency = currency;
    }

    public Money add(Money other) {
        if (!this.currency.equals(other.currency)) {
            throw new IllegalArgumentException("Cannot add different currencies");
        }
        return new Money(this.amount + other.amount, this.currency);
    }

    public String toString() {
        return amount + " " + currency;
    }
}

Money a = new Money(100, "INR");
Money b = new Money(250, "INR");
Money c = a.add(b);
System.out.println(a);
System.out.println(b);
System.out.println(c);
```

*Hint:* Money is immutable. add() returns a new Money object.

**Answer:** `100 INR`
`250 INR`
`350 INR`

Money is an immutable class (final class, private final fields, no setters). `add()` does not modify either operand — it returns a new Money object. a is still 100 INR, b is still 250 INR, and c is a new object with 350 INR.

## Multiple Choice Questions

### Q1. [Easy] Which access modifier makes a field accessible only within the same class?

A. public
B. protected
C. default
D. private

**Answer:** D

**D is correct.** `private` is the most restrictive access modifier. Private members are visible only within the declaring class.

### Q2. [Easy] What is the naming convention for a getter of a boolean field named 'active'?

A. getActive()
B. isActive()
C. active()
D. hasActive()

**Answer:** B

**B is correct.** The JavaBeans convention for boolean getters uses the 'is' prefix instead of 'get'. `isActive()` is the standard name.

### Q3. [Easy] What happens when you declare a class member with no access modifier?

A. It becomes public
B. It becomes private
C. It becomes package-private (default access)
D. Compilation error

**Answer:** C

**C is correct.** No modifier means package-private (default) access. The member is accessible within the same package only. It is NOT public (A) or private (B).

### Q4. [Easy] Encapsulation primarily provides:

A. Code reuse through inheritance
B. Data hiding and controlled access
C. Method overriding at runtime
D. Multiple inheritance

**Answer:** B

**B is correct.** Encapsulation is about hiding internal data (making fields private) and providing controlled access through methods. A describes inheritance, C describes polymorphism, D is not supported in Java classes.

### Q5. [Medium] Which access modifier allows access from a subclass in a different package?

A. private
B. default
C. protected
D. Only public

**Answer:** C

**C is correct.** `protected` allows access within the same package AND from subclasses in different packages. `private` (A) and `default` (B) do not allow cross-package subclass access. `public` (D) also allows it, but `protected` is the specific answer.

### Q6. [Medium] Which of the following is NOT a requirement for creating an immutable class?

A. Make the class final
B. Make all fields private and final
C. Do not provide setter methods
D. Use the static keyword for all fields

**Answer:** D

**D is INCORRECT for immutable classes and is therefore the answer.** Static fields belong to the class, not to instances, and have nothing to do with immutability. The correct requirements are: final class (A), private final fields (B), no setters (C), and defensive copies for mutable field types.

### Q7. [Medium] What is the purpose of defensive copying in getters?

A. To improve performance
B. To prevent external code from modifying the internal state through returned references
C. To create backup copies of data
D. To ensure thread safety

**Answer:** B

**B is correct.** When a getter returns a reference to a mutable object (array, list, etc.), external code could modify the internal state. Defensive copying returns a new copy, protecting encapsulation.

### Q8. [Medium] In a Java record class, fields are implicitly:

A. public and static
B. private and final
C. protected and mutable
D. public and final

**Answer:** B

**B is correct.** Record components are implicitly `private final`. Records generate accessor methods (without 'get' prefix) for reading the fields. The fields cannot be modified after construction.

### Q9. [Hard] A class in package com.app has a protected method process(). Which of the following can call this method?

A. Any class in package com.app
B. A subclass in package com.other
C. A non-subclass in package com.other
D. Both A and B

**Answer:** D

**D is correct.** Protected access allows: (A) any class in the same package (com.app), and (B) subclasses in any other package (com.other). A non-subclass in a different package (C) cannot access protected members.

### Q10. [Hard] What is the output of the following code?

```
class Outer {
    private int x = 10;
    class Inner {
        void show() { System.out.println(x); }
    }
}
Outer o = new Outer();
Outer.Inner i = o.new Inner();
i.show();
```

A. Compilation error: x is private
B. 10
C. 0
D. NullPointerException

**Answer:** B

**B is correct.** Inner classes have access to all members of the outer class, including private ones. `show()` can access the private field `x` and prints 10. This is a special case of Java's access control.

### Q11. [Hard] Which statement about Java records is FALSE?

A. Records are implicitly final
B. Records can have instance fields beyond the components
C. Records auto-generate equals(), hashCode(), and toString()
D. Records can have custom methods

**Answer:** B

**B is FALSE.** Records cannot declare instance fields beyond the components declared in the header. You can add static fields and custom methods, but the only instance fields are the components defined in the record declaration.

### Q12. [Easy] What is the standard term for a method that returns the value of a private field?

A. Constructor
B. Getter (accessor)
C. Setter (mutator)
D. Destructor

**Answer:** B

**B is correct.** A getter (also called an accessor) returns the value of a private field. A setter (C) sets the value. A constructor (A) initializes an object. Java does not have destructors (D) — it uses garbage collection.

## Coding Challenges

### Challenge 1. Encapsulated Student Class

**Difficulty:** Easy

Create a Student class with private fields name (String), age (int), and marks (double). Write a constructor and getters/setters. The setter for age should only accept values between 5 and 100. The setter for marks should only accept values between 0 and 100. Test with valid and invalid values.

**Constraints:**

- Throw IllegalArgumentException with descriptive messages for invalid input.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Aarav, age 20, marks 92.5
Error: Invalid age: -5
Error: Marks must be 0-100: 150.0
```

**Solution:**

```java
public class Student {
    private String name;
    private int age;
    private double marks;

    public Student(String name, int age, double marks) {
        this.name = name;
        setAge(age);
        setMarks(marks);
    }

    public String getName() { return name; }
    public int getAge() { return age; }
    public double getMarks() { return marks; }

    public void setAge(int age) {
        if (age < 5 || age > 100) throw new IllegalArgumentException("Invalid age: " + age);
        this.age = age;
    }

    public void setMarks(double marks) {
        if (marks < 0 || marks > 100) throw new IllegalArgumentException("Marks must be 0-100: " + marks);
        this.marks = marks;
    }

    public String toString() {
        return name + ", age " + age + ", marks " + marks;
    }

    public static void main(String[] args) {
        Student s = new Student("Aarav", 20, 92.5);
        System.out.println(s);
        try { s.setAge(-5); } catch (IllegalArgumentException e) { System.out.println("Error: " + e.getMessage()); }
        try { s.setMarks(150); } catch (IllegalArgumentException e) { System.out.println("Error: " + e.getMessage()); }
    }
}
```

### Challenge 2. Bank Account with Encapsulation

**Difficulty:** Easy

Create a BankAccount class with private fields accountHolder and balance. Provide deposit() and withdraw() methods (no public setBalance). withdraw() should prevent negative balance. Print balance after each operation.

**Constraints:**

- Do not provide a setBalance() method. Control balance only through deposit() and withdraw().

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Priya: Rs.10000.00
Deposited Rs.5000.00 | Balance: Rs.15000.00
Withdrew Rs.3000.00 | Balance: Rs.12000.00
Error: Insufficient funds
```

**Solution:**

```java
public class BankAccount {
    private String accountHolder;
    private double balance;

    public BankAccount(String accountHolder, double initialBalance) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }

    public String getAccountHolder() { return accountHolder; }
    public double getBalance() { return balance; }

    public void deposit(double amount) {
        if (amount <= 0) throw new IllegalArgumentException("Amount must be positive");
        balance += amount;
        System.out.printf("Deposited Rs.%.2f | Balance: Rs.%.2f%n", amount, balance);
    }

    public void withdraw(double amount) {
        if (amount <= 0) throw new IllegalArgumentException("Amount must be positive");
        if (amount > balance) {
            System.out.println("Error: Insufficient funds");
            return;
        }
        balance -= amount;
        System.out.printf("Withdrew Rs.%.2f | Balance: Rs.%.2f%n", amount, balance);
    }

    public String toString() {
        return String.format("%s: Rs.%.2f", accountHolder, balance);
    }

    public static void main(String[] args) {
        BankAccount acc = new BankAccount("Priya", 10000);
        System.out.println(acc);
        acc.deposit(5000);
        acc.withdraw(3000);
        acc.withdraw(20000);
    }
}
```

### Challenge 3. Immutable Date Class

**Difficulty:** Medium

Create an immutable DateInfo class with day, month, and year fields. Validate that day is 1-31, month is 1-12, and year is positive. Provide a method isLeapYear() and override toString() to format as DD/MM/YYYY. Demonstrate that the object cannot be modified after creation.

**Constraints:**

- Make the class and all fields final. No setters.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
15/08/2026
Leap year: false
29/02/2024
Leap year: true
```

**Solution:**

```java
final class DateInfo {
    private final int day;
    private final int month;
    private final int year;

    public DateInfo(int day, int month, int year) {
        if (month < 1 || month > 12) throw new IllegalArgumentException("Invalid month");
        if (day < 1 || day > 31) throw new IllegalArgumentException("Invalid day");
        if (year < 1) throw new IllegalArgumentException("Invalid year");
        this.day = day;
        this.month = month;
        this.year = year;
    }

    public int getDay() { return day; }
    public int getMonth() { return month; }
    public int getYear() { return year; }

    public boolean isLeapYear() {
        return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    }

    @Override
    public String toString() {
        return String.format("%02d/%02d/%04d", day, month, year);
    }

    public static void main(String[] args) {
        DateInfo d1 = new DateInfo(15, 8, 2026);
        System.out.println(d1);
        System.out.println("Leap year: " + d1.isLeapYear());

        DateInfo d2 = new DateInfo(29, 2, 2024);
        System.out.println(d2);
        System.out.println("Leap year: " + d2.isLeapYear());
    }
}
```

### Challenge 4. Access Modifier Demonstration

**Difficulty:** Medium

Create a class Vehicle with one field for each access level (public, protected, default, private). Write a method in the same class, a class in the same package, and a subclass to demonstrate which fields are accessible where. Print which accesses work and which would fail.

**Constraints:**

- Document which fields are accessible in each context with comments.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Same class: public=OK, protected=OK, default=OK, private=OK
Same package: public=OK, protected=OK, default=OK, private=NO
Subclass: public=OK, protected=OK, default=depends on package, private=NO
```

**Solution:**

```java
class Vehicle {
    public String publicField = "public";
    protected String protectedField = "protected";
    String defaultField = "default";
    private String privateField = "private";

    void sameClassAccess() {
        System.out.println("Same class: " + publicField + ", " + protectedField + ", " + defaultField + ", " + privateField);
    }
}

class SamePackageClass {
    void access() {
        Vehicle v = new Vehicle();
        System.out.println("Same package: " + v.publicField + ", " + v.protectedField + ", " + v.defaultField);
        // v.privateField — NOT accessible
        System.out.println("private: NOT accessible from same package");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle v = new Vehicle();
        v.sameClassAccess();
        new SamePackageClass().access();
    }
}
```

### Challenge 5. Builder Pattern with Encapsulation

**Difficulty:** Hard

Create an immutable Employee class (private final fields: name, department, salary, isRemote). Create an EmployeeBuilder class with setters that return this for chaining and a build() method that validates and returns an Employee. Salary must be positive. Name cannot be empty.

**Constraints:**

- Employee is immutable. All validation happens in the Builder's build() method.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Employee{name='Deepak', department='Engineering', salary=75000.0, remote=true}
```

**Solution:**

```java
final class Employee {
    private final String name;
    private final String department;
    private final double salary;
    private final boolean isRemote;

    Employee(String name, String department, double salary, boolean isRemote) {
        this.name = name;
        this.department = department;
        this.salary = salary;
        this.isRemote = isRemote;
    }

    public String getName() { return name; }
    public String getDepartment() { return department; }
    public double getSalary() { return salary; }
    public boolean isRemote() { return isRemote; }

    public String toString() {
        return "Employee{name='" + name + "', department='" + department + "', salary=" + salary + ", remote=" + isRemote + "}";
    }
}

class EmployeeBuilder {
    private String name;
    private String department = "General";
    private double salary;
    private boolean isRemote = false;

    public EmployeeBuilder setName(String name) { this.name = name; return this; }
    public EmployeeBuilder setDepartment(String dept) { this.department = dept; return this; }
    public EmployeeBuilder setSalary(double salary) { this.salary = salary; return this; }
    public EmployeeBuilder setRemote(boolean remote) { this.isRemote = remote; return this; }

    public Employee build() {
        if (name == null || name.isEmpty()) throw new IllegalArgumentException("Name required");
        if (salary <= 0) throw new IllegalArgumentException("Salary must be positive");
        return new Employee(name, department, salary, isRemote);
    }

    public static void main(String[] args) {
        Employee e = new EmployeeBuilder()
            .setName("Deepak")
            .setDepartment("Engineering")
            .setSalary(75000)
            .setRemote(true)
            .build();
        System.out.println(e);
    }
}
```

### Challenge 6. Record-Based Inventory System

**Difficulty:** Hard

Using Java 16+ records, create a Product record with fields name, price, and quantity. Add a compact constructor that validates price > 0 and quantity >= 0. Add custom methods totalValue() and isInStock(). Create and display several products.

**Constraints:**

- Use record syntax. Validate in compact constructor.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Product[name=Laptop, price=50000.0, quantity=10]
Total value: 500000.0
In stock: true
Product[name=Keyboard, price=1500.0, quantity=0]
In stock: false
```

**Solution:**

```java
record Product(String name, double price, int quantity) {
    Product {
        if (price <= 0) throw new IllegalArgumentException("Price must be positive");
        if (quantity < 0) throw new IllegalArgumentException("Quantity cannot be negative");
    }

    double totalValue() {
        return price * quantity;
    }

    boolean isInStock() {
        return quantity > 0;
    }
}

public class Main {
    public static void main(String[] args) {
        Product p1 = new Product("Laptop", 50000.0, 10);
        System.out.println(p1);
        System.out.println("Total value: " + p1.totalValue());
        System.out.println("In stock: " + p1.isInStock());

        Product p2 = new Product("Keyboard", 1500.0, 0);
        System.out.println(p2);
        System.out.println("In stock: " + p2.isInStock());
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/encapsulation-and-access-modifiers/*
