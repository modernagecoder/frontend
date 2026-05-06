---
title: "Practice: Inheritance in Java"
description: "62 practice problems for Inheritance in Java in Java"
slug: inheritance-in-java-practice
canonical: https://learn.modernagecoders.com/resources/java/inheritance-in-java/practice
category: "Java"
---
# Practice: Inheritance in Java

**Total questions:** 62

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
class Animal {
    void sound() { System.out.println("Some sound"); }
}
class Dog extends Animal {
    void bark() { System.out.println("Woof!"); }
}

Dog d = new Dog();
d.sound();
d.bark();
```

*Hint:* Dog inherits sound() from Animal and has its own bark() method.

**Answer:** `Some sound`
`Woof!`

Dog inherits `sound()` from Animal, so `d.sound()` prints "Some sound". `d.bark()` calls Dog's own method, printing "Woof!".

### Q2. [Easy] What is the output?

```
class A {
    int x = 10;
}
class B extends A {
    int y = 20;
}

B obj = new B();
System.out.println(obj.x + obj.y);
```

*Hint:* B inherits x from A and has its own y.

**Answer:** `30`

B inherits the field `x = 10` from A and defines `y = 20`. `obj.x + obj.y` = 10 + 20 = 30.

### Q3. [Easy] What is the output?

```
class Parent {
    void greet() { System.out.println("Hello from Parent"); }
}
class Child extends Parent {
    @Override
    void greet() { System.out.println("Hello from Child"); }
}

Child c = new Child();
c.greet();
```

*Hint:* The overridden method in Child replaces the Parent's version.

**Answer:** `Hello from Child`

Child overrides `greet()`. When called on a Child object, the overridden version runs. The Parent's version is replaced for Child objects.

### Q4. [Easy] What is the output?

```
class A {
    A() { System.out.println("A constructor"); }
}
class B extends A {
    B() { System.out.println("B constructor"); }
}

B obj = new B();
```

*Hint:* Java automatically calls super() if you do not write it. Parent constructor runs first.

**Answer:** `A constructor`
`B constructor`

When creating a B object, Java inserts `super()` at the beginning of B's constructor. A's constructor runs first (prints "A constructor"), then B's constructor runs (prints "B constructor").

### Q5. [Easy] What is the output?

```
Dog d = new Dog();
System.out.println(d instanceof Dog);
System.out.println(d instanceof Animal);
System.out.println(d instanceof Object);
```

(Assume Dog extends Animal)

*Hint:* instanceof checks the entire inheritance chain.

**Answer:** `true`
`true`
`true`

A Dog object is an instance of Dog (its own class), Animal (its superclass), and Object (the root of all classes). `instanceof` returns true for all classes in the inheritance chain.

### Q6. [Medium] What is the output?

```
class Animal {
    void eat() { System.out.println("Animal eating"); }
}
class Dog extends Animal {
    @Override
    void eat() {
        super.eat();
        System.out.println("Dog eating bones");
    }
}

Dog d = new Dog();
d.eat();
```

*Hint:* super.eat() calls the parent's version first, then the child adds its own behavior.

**Answer:** `Animal eating`
`Dog eating bones`

`super.eat()` calls Animal's version first, printing "Animal eating". Then the overriding method continues with "Dog eating bones". This pattern is called extending behavior: the subclass adds to the parent's behavior rather than replacing it entirely.

### Q7. [Medium] What is the output?

```
class A {
    String type = "A";
}
class B extends A {
    String type = "B";

    void show() {
        System.out.println(this.type);
        System.out.println(super.type);
    }
}

new B().show();
```

*Hint:* this.type refers to B's field. super.type refers to A's field.

**Answer:** `B`
`A`

B defines a field `type` that hides A's field with the same name (field hiding, not overriding). `this.type` refers to B's version ("B"). `super.type` explicitly refers to A's version ("A"). Note: field hiding is different from method overriding — fields are resolved at compile time based on the reference type.

### Q8. [Medium] What is the output?

```
class A {
    A() { System.out.println("A()"); }
    A(int x) { System.out.println("A(" + x + ")"); }
}
class B extends A {
    B() {
        super(10);
        System.out.println("B()");
    }
}

B obj = new B();
```

*Hint:* super(10) calls A's parameterized constructor, not the no-arg one.

**Answer:** `A(10)`
`B()`

`super(10)` explicitly calls `A(int x)`, which prints "A(10)". Then B's constructor continues with "B()". The no-arg `A()` is NOT called because super(10) was explicit.

### Q9. [Medium] What is the output?

```
class Animal {
    String name;
    Animal(String name) { this.name = name; }
    public String toString() { return "Animal: " + name; }
}
class Dog extends Animal {
    String breed;
    Dog(String name, String breed) {
        super(name);
        this.breed = breed;
    }
    public String toString() { return "Dog: " + name + " (" + breed + ")"; }
}

Animal a = new Dog("Buddy", "Lab");
System.out.println(a);
System.out.println(a instanceof Dog);
```

*Hint:* The variable type is Animal but the actual object is Dog. Which toString() runs?

**Answer:** `Dog: Buddy (Lab)`
`true`

The variable `a` is of type Animal, but the actual object is a Dog. `toString()` is resolved at runtime based on the actual object type, so Dog's version runs. `a instanceof Dog` checks the runtime type, which is Dog, so it returns true. This is runtime polymorphism.

### Q10. [Hard] What is the output?

```
class A {
    A() { System.out.println("A"); }
}
class B extends A {
    B() { System.out.println("B"); }
}
class C extends B {
    C() { System.out.println("C"); }
}

C obj = new C();
```

*Hint:* Multilevel inheritance: constructors execute from top to bottom.

**Answer:** `A`
`B`
`C`

Constructors execute from the top of the hierarchy down. C's constructor calls B's (via implicit super()), B's calls A's (via implicit super()), A's calls Object's (no output). Then A prints "A", B prints "B", C prints "C".

### Q11. [Hard] What is the output?

```
class Parent {
    int x = 10;
    int getX() { return x; }
}
class Child extends Parent {
    int x = 20;
    @Override
    int getX() { return x; }
}

Parent p = new Child();
System.out.println(p.x);
System.out.println(p.getX());
```

*Hint:* Fields are resolved at compile time (based on reference type). Methods are resolved at runtime (based on object type).

**Answer:** `10`
`20`

`p.x` accesses the field based on the declared type (Parent), giving 10. This is field hiding, resolved at compile time. `p.getX()` calls the method based on the actual object type (Child), giving 20. This is method overriding, resolved at runtime. Fields and methods follow different resolution rules.

### Q12. [Hard] What is the output?

```
class Base {
    void display() { System.out.println("Base: " + getValue()); }
    int getValue() { return 10; }
}
class Derived extends Base {
    @Override
    int getValue() { return 20; }
}

Base b = new Derived();
b.display();
```

*Hint:* display() is inherited from Base but calls getValue() which is overridden in Derived.

**Answer:** `Base: 20`

`display()` is defined in Base. It calls `getValue()`, which is overridden in Derived. Since the actual object is a Derived instance, the overridden `getValue()` returns 20, even though `display()` itself is in Base. Method calls within inherited methods are resolved based on the runtime type.

### Q13. [Hard] What is the output?

```
class A {
    A() { print(); }
    void print() { System.out.println("A"); }
}
class B extends A {
    int value = 10;
    @Override
    void print() { System.out.println("B: " + value); }
}

B obj = new B();
```

*Hint:* A's constructor calls print(). But the actual object is B, so B's print() runs. What is value at that point?

**Answer:** `B: 0`

When `new B()` is called: (1) A's constructor runs first. (2) A's constructor calls `print()`. (3) Since the actual object is B, B's overridden `print()` runs. (4) At this point, B's instance variable `value` has not been initialized yet (still 0). (5) So it prints "B: 0". This is why calling overridable methods from constructors is dangerous.

## Mixed Questions

### Q1. [Easy] What is the output?

```
class Vehicle {
    int speed = 0;
    void accelerate() { speed += 10; }
}
class Car extends Vehicle {
    void turbo() { speed += 50; }
}

Car c = new Car();
c.accelerate();
c.turbo();
System.out.println(c.speed);
```

*Hint:* Car inherits speed and accelerate(). Both methods modify the same speed field.

**Answer:** `60`

Car inherits `speed` (initially 0) and `accelerate()` from Vehicle. `accelerate()` adds 10 (speed = 10). `turbo()` adds 50 (speed = 60).

### Q2. [Easy] What is the output?

```
final int x = 10;
// x = 20; // Would this compile?
System.out.println(x);
```

*Hint:* final variables cannot be reassigned after initialization.

**Answer:** `10` (The commented line would cause a compilation error if uncommented)

`final int x = 10` means x can never be assigned a new value. The assignment `x = 20` would cause the error: "error: cannot assign a value to final variable x". x remains 10.

### Q3. [Easy] What is the difference between method overloading and method overriding?

*Hint:* One is within a class, the other is between parent and child classes.

**Answer:** **Overloading:** Same method name, different parameter list, within the same class (or inherited). Resolved at compile time. **Overriding:** Same method name and parameter list, in a subclass. Replaces the parent's behavior. Resolved at runtime.

Overloading provides multiple versions of a method for different argument types (compile-time polymorphism). Overriding provides a specialized implementation in a subclass (runtime polymorphism). Overloading changes the parameter list; overriding keeps it identical.

### Q4. [Medium] What is the output?

```
class A {
    static void hello() { System.out.println("A"); }
}
class B extends A {
    static void hello() { System.out.println("B"); }
}

A obj = new B();
obj.hello();
```

*Hint:* Static methods are resolved based on the reference type (compile time), not the object type.

**Answer:** `A`

Static methods are not overridden — they are hidden. `obj` is declared as type `A`, so `obj.hello()` calls `A.hello()` regardless of the actual object type. Static methods are resolved at compile time based on the declared type.

### Q5. [Medium] What is the output?

```
class Shape {
    double area() { return 0; }
    public String toString() { return "Area: " + area(); }
}
class Circle extends Shape {
    double r;
    Circle(double r) { this.r = r; }
    @Override
    double area() { return Math.PI * r * r; }
}
class Square extends Shape {
    double side;
    Square(double side) { this.side = side; }
    @Override
    double area() { return side * side; }
}

Shape[] shapes = { new Circle(5), new Square(4) };
for (Shape s : shapes) {
    System.out.printf("%.2f%n", s.area());
}
```

*Hint:* Each subclass overrides area(). The correct version is called at runtime.

**Answer:** `78.54`
`16.00`

The array holds Shape references but the actual objects are Circle and Square. `s.area()` calls the overridden version based on the runtime type: Circle computes PI * 25 = 78.54, Square computes 16.

### Q6. [Medium] Why does Java not support multiple inheritance with classes?

*Hint:* Think about the diamond problem.

**Answer:** Java does not support multiple class inheritance to avoid the **diamond problem**: if a class inherits from two classes that have a method with the same signature, it would be ambiguous which version to call. Java uses interfaces to achieve a form of multiple inheritance without this ambiguity, because interfaces (before Java 8) had no method implementations, and default methods have explicit conflict resolution rules.

Example: If class C extends both A and B, and both A and B have a method `doWork()`, which version does C inherit? This ambiguity is the diamond problem. Java avoids it entirely by restricting class inheritance to single inheritance.

### Q7. [Hard] What is the output?

```
class A {
    int x = 5;
    A() { this.x = 10; }
}
class B extends A {
    int x = 20;
    B() { this.x = 30; }
}

B obj = new B();
System.out.println(((A) obj).x);
System.out.println(obj.x);
```

*Hint:* Fields are resolved at compile time based on the reference type. A has its own x, B has its own x.

**Answer:** `10`
`30`

B's `x` hides A's `x` (field hiding). Both fields exist in the object. `((A) obj).x` accesses A's field (initialized to 5, then set to 10 in A's constructor). `obj.x` accesses B's field (initialized to 20, then set to 30 in B's constructor). Field access is resolved by the declared type, not the runtime type.

### Q8. [Hard] What is the output?

```
class Animal {
    void eat() { System.out.println("Animal eat"); }
}
class Dog extends Animal {
    @Override
    void eat() { System.out.println("Dog eat"); }
    void bark() { System.out.println("Woof"); }
}

Animal a = new Dog();
a.eat();
// a.bark(); // Would this compile?
```

*Hint:* The reference type determines what methods can be called. The runtime type determines which overridden version runs.

**Answer:** `Dog eat`
(The commented line would NOT compile: `bark()` is not in Animal)

`a.eat()` compiles because `eat()` is in Animal. At runtime, Dog's version runs (polymorphism). `a.bark()` would NOT compile because the reference type is Animal, and Animal does not have a `bark()` method. The compiler checks available methods based on the declared type.

### Q9. [Hard] What is the contract between equals() and hashCode()? Why must both be overridden together?

*Hint:* Think about how HashMaps use both methods to store and retrieve objects.

**Answer:** The contract states: **if two objects are equal according to equals(), they must have the same hashCode()**. If you override equals() without hashCode(), objects that are "equal" may be placed in different hash buckets in a HashMap, making them unfindable. If you override hashCode() without equals(), objects with the same hash code may not be considered equal, leading to duplicates.

HashMap first uses hashCode() to find the bucket, then uses equals() to find the exact match within that bucket. If equals() says two Students are the same (same name and rollNo) but their hashCodes differ, they end up in different buckets and the map cannot find the duplicate. This breaks HashMap, HashSet, and any hash-based collection.

## Multiple Choice Questions

### Q1. [Easy] Which keyword is used to inherit a class in Java?

A. implements
B. inherits
C. extends
D. super

**Answer:** C

**C is correct.** The `extends` keyword is used for class inheritance. `implements` (A) is for interfaces. `inherits` (B) is not a Java keyword. `super` (D) refers to the parent class but does not declare inheritance.

### Q2. [Easy] What type of inheritance is NOT supported in Java with classes?

A. Single inheritance
B. Multilevel inheritance
C. Multiple inheritance
D. Hierarchical inheritance

**Answer:** C

**C is correct.** Java does not support multiple inheritance with classes — a class can extend only one class. Single (A), multilevel (B), and hierarchical (D) are all supported.

### Q3. [Easy] What does the @Override annotation do?

A. It is required to override a method
B. It tells the compiler to verify the method actually overrides a superclass method
C. It prevents the method from being overridden further
D. It makes the method public

**Answer:** B

**B is correct.** `@Override` is optional but causes the compiler to verify that the method signature matches a superclass method. If it does not match (typo in name or wrong parameters), the compiler reports an error. It is not required (A), does not prevent further overriding (C — that is `final`), and does not change access (D).

### Q4. [Easy] If class B extends class A, which constructor runs first when creating a B object?

A. B's constructor
B. A's constructor
C. Object's constructor
D. They run simultaneously

**Answer:** B

**B is correct (more precisely, C runs before B, and B runs before the current class).** The chain is Object -> A -> B. Among the listed options, A's constructor runs before B's. The superclass is always initialized before the subclass.

### Q5. [Medium] Which of the following can be overridden?

A. A static method
B. A final method
C. A private method
D. A public instance method

**Answer:** D

**D is correct.** Only non-static, non-final, non-private instance methods can be overridden. Static methods (A) are hidden, not overridden. Final methods (B) cannot be overridden by definition. Private methods (C) are not visible to subclasses.

### Q6. [Medium] What happens if you do not call super() in a subclass constructor?

A. Compilation error
B. Java automatically inserts super() (no-arg) as the first statement
C. The superclass is not initialized
D. The subclass constructor does not run

**Answer:** B

**B is correct.** If you do not explicitly call `super()` or `this()`, Java inserts `super()` (no-arg) as the first statement. This only causes an error if the superclass does not have a no-arg constructor.

### Q7. [Medium] What is a covariant return type?

A. Returning void instead of a type
B. An overriding method returns a subtype of the original return type
C. Returning a different type altogether
D. Returning an array instead of a single object

**Answer:** B

**B is correct.** Covariant return types allow an overriding method to return a more specific type. If the parent returns `Animal`, the child can return `Dog` (since Dog IS-A Animal). This avoids casting at the call site.

### Q8. [Medium] What does instanceof return when the object is null?

A. true
B. false
C. NullPointerException
D. Compilation error

**Answer:** B

**B is correct.** `null instanceof AnyType` always returns `false`. No exception is thrown. This makes instanceof safe to use without null checks.

### Q9. [Hard] Can a final class have final methods?

A. Yes, but it is redundant since the class cannot be extended anyway
B. No, only one final is allowed per class
C. Yes, and it adds additional protection
D. No, final classes cannot have methods

**Answer:** A

**A is correct.** A final class cannot be extended, so no subclass exists to override any of its methods. Making methods final in a final class is syntactically valid but redundant — there is no subclass to prevent overriding in.

### Q10. [Hard] What is the output?

```
class A {
    void show() { System.out.println("A"); }
}
class B extends A {
    void show() { System.out.println("B"); }
}
class C extends B {
    void show() { System.out.println("C"); }
}

A obj = new C();
obj.show();
```

A. A
B. B
C. C
D. Compilation error

**Answer:** C

**C is correct.** The actual object is C, and C overrides `show()`. Method resolution at runtime uses the actual type (C), so C's version runs. The reference type (A) only determines what methods can be called, not which version runs.

### Q11. [Hard] Which of the following is true about calling super() and this() in a constructor?

A. Both can be called in the same constructor
B. Only one can be the first statement — they are mutually exclusive
C. super() can be called anywhere in the constructor
D. this() is not allowed in constructors

**Answer:** B

**B is correct.** Both `super()` and `this()` must be the first statement in a constructor. Since only one statement can be first, you cannot have both in the same constructor. You choose super() to call a parent constructor or this() to chain to another constructor in the same class.

### Q12. [Hard] What is the relationship between fields and inheritance in Java?

A. Fields are overridden just like methods
B. Fields are hidden (not overridden) — the subclass field exists alongside the parent field
C. Fields cannot be declared in subclasses if they exist in the superclass
D. Fields are always inherited as public

**Answer:** B

**B is correct.** When a subclass declares a field with the same name as a superclass field, it hides the parent's field (both coexist). This is different from method overriding. The parent's field is accessed via `super.fieldName` or through a parent-type reference. Fields are resolved at compile time by declared type.

### Q13. [Medium] Which Object method should you always override together with equals()?

A. toString()
B. hashCode()
C. clone()
D. finalize()

**Answer:** B

**B is correct.** The equals-hashCode contract requires that equal objects have equal hash codes. If you override equals() without hashCode(), hash-based collections (HashMap, HashSet) will malfunction. toString() (A) should also be overridden but is not part of the equals contract.

## Coding Challenges

### Challenge 1. Shape Hierarchy with Area Calculation

**Difficulty:** Easy

Create a Shape class with a method area() that returns 0. Create Circle (with radius) and Rectangle (with width and height) subclasses that override area(). Create objects and print their areas.

**Constraints:**

- Use inheritance and method overriding. Format output to 2 decimal places.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Circle area: 78.54
Rectangle area: 24.00
```

**Solution:**

```java
class Shape {
    double area() { return 0; }
}

class Circle extends Shape {
    double radius;
    Circle(double radius) { this.radius = radius; }
    @Override
    double area() { return Math.PI * radius * radius; }
}

class Rectangle extends Shape {
    double width, height;
    Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }
    @Override
    double area() { return width * height; }
}

public class Main {
    public static void main(String[] args) {
        Shape c = new Circle(5);
        Shape r = new Rectangle(4, 6);
        System.out.printf("Circle area: %.2f%n", c.area());
        System.out.printf("Rectangle area: %.2f%n", r.area());
    }
}
```

### Challenge 2. Animal Sound Polymorphism

**Difficulty:** Easy

Create an Animal class with a makeSound() method. Create Dog, Cat, and Cow subclasses that override makeSound(). Store them in an Animal array and call makeSound() on each using a loop.

**Constraints:**

- Use an Animal array and a for-each loop to demonstrate polymorphism.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Dog says: Woof!
Cat says: Meow!
Cow says: Moo!
```

**Solution:**

```java
class Animal {
    String name;
    Animal(String name) { this.name = name; }
    void makeSound() { System.out.println(name + " says: ..."); }
}

class Dog extends Animal {
    Dog() { super("Dog"); }
    @Override
    void makeSound() { System.out.println(name + " says: Woof!"); }
}

class Cat extends Animal {
    Cat() { super("Cat"); }
    @Override
    void makeSound() { System.out.println(name + " says: Meow!"); }
}

class Cow extends Animal {
    Cow() { super("Cow"); }
    @Override
    void makeSound() { System.out.println(name + " says: Moo!"); }
}

public class Main {
    public static void main(String[] args) {
        Animal[] animals = { new Dog(), new Cat(), new Cow() };
        for (Animal a : animals) {
            a.makeSound();
        }
    }
}
```

### Challenge 3. Employee Payroll System

**Difficulty:** Medium

Create an Employee class with name and baseSalary. Create Manager (with bonus) and Developer (with overtimeHours at Rs.500/hr) subclasses. Override a calculatePay() method. Print payroll for all employees.

**Constraints:**

- Use super.calculatePay() to avoid duplicating base salary logic.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Kavitha (Manager): Rs.95000.0
Rohan (Developer): Rs.70000.0
Deepak (Developer): Rs.62500.0
```

**Solution:**

```java
class Employee {
    String name;
    double baseSalary;
    Employee(String name, double baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    double calculatePay() { return baseSalary; }
}

class Manager extends Employee {
    double bonus;
    Manager(String name, double baseSalary, double bonus) {
        super(name, baseSalary);
        this.bonus = bonus;
    }
    @Override
    double calculatePay() { return super.calculatePay() + bonus; }
}

class Developer extends Employee {
    int overtimeHours;
    Developer(String name, double baseSalary, int overtimeHours) {
        super(name, baseSalary);
        this.overtimeHours = overtimeHours;
    }
    @Override
    double calculatePay() { return super.calculatePay() + overtimeHours * 500; }
}

public class Main {
    public static void main(String[] args) {
        Employee[] team = {
            new Manager("Kavitha", 80000, 15000),
            new Developer("Rohan", 60000, 20),
            new Developer("Deepak", 55000, 15)
        };
        for (Employee e : team) {
            System.out.println(e.name + " (" + e.getClass().getSimpleName() + "): Rs." + e.calculatePay());
        }
    }
}
```

### Challenge 4. Bank Account Hierarchy

**Difficulty:** Medium

Create a BankAccount class with accountHolder and balance. Create SavingsAccount (with interest rate) and CurrentAccount (with overdraft limit). SavingsAccount has addInterest(). CurrentAccount allows withdrawal beyond balance up to the overdraft limit. Demonstrate both.

**Constraints:**

- Use inheritance with super constructors. Override withdraw() in CurrentAccount.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Savings - Priya: Rs.10000.0
After interest: Rs.10500.0
Current - Aarav: Rs.5000.0
Withdrew Rs.7000.0 (using overdraft)
Balance: Rs.-2000.0
```

**Solution:**

```java
class BankAccount {
    String holder;
    double balance;
    BankAccount(String holder, double balance) {
        this.holder = holder;
        this.balance = balance;
    }
    void withdraw(double amount) {
        if (amount > balance) {
            System.out.println("Insufficient funds");
        } else {
            balance -= amount;
            System.out.println("Withdrew Rs." + amount);
        }
    }
    public String toString() {
        return holder + ": Rs." + balance;
    }
}

class SavingsAccount extends BankAccount {
    double interestRate;
    SavingsAccount(String holder, double balance, double rate) {
        super(holder, balance);
        this.interestRate = rate;
    }
    void addInterest() {
        balance += balance * interestRate;
        System.out.println("After interest: Rs." + balance);
    }
}

class CurrentAccount extends BankAccount {
    double overdraftLimit;
    CurrentAccount(String holder, double balance, double limit) {
        super(holder, balance);
        this.overdraftLimit = limit;
    }
    @Override
    void withdraw(double amount) {
        if (amount > balance + overdraftLimit) {
            System.out.println("Exceeds overdraft limit");
        } else {
            balance -= amount;
            System.out.println("Withdrew Rs." + amount + (balance < 0 ? " (using overdraft)" : ""));
        }
    }
}

public class Main {
    public static void main(String[] args) {
        SavingsAccount sa = new SavingsAccount("Priya", 10000, 0.05);
        System.out.println("Savings - " + sa);
        sa.addInterest();

        CurrentAccount ca = new CurrentAccount("Aarav", 5000, 10000);
        System.out.println("Current - " + ca);
        ca.withdraw(7000);
        System.out.println("Balance: Rs." + ca.balance);
    }
}
```

### Challenge 5. Vehicle Hierarchy with toString and equals

**Difficulty:** Hard

Create a Vehicle class with brand and year. Override toString() and equals() (and hashCode()). Create Car (with numDoors) and Motorcycle (with hasSidecar) subclasses that extend toString() and equals(). Demonstrate equality checks.

**Constraints:**

- Override equals() and hashCode() in both parent and child classes. Use @Override annotation.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Car{brand='Toyota', year=2024, doors=4}
Car{brand='Toyota', year=2024, doors=4}
Are they equal? true
Motorcycle{brand='Honda', year=2023, sidecar=false}
Car equals Motorcycle? false
```

**Solution:**

```java
class Vehicle {
    String brand;
    int year;
    Vehicle(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Vehicle v = (Vehicle) obj;
        return year == v.year && brand.equals(v.brand);
    }
    @Override
    public int hashCode() { return 31 * brand.hashCode() + year; }
    @Override
    public String toString() { return "Vehicle{" + brand + ", " + year + "}"; }
}

class Car extends Vehicle {
    int numDoors;
    Car(String brand, int year, int numDoors) {
        super(brand, year);
        this.numDoors = numDoors;
    }
    @Override
    public boolean equals(Object obj) {
        if (!super.equals(obj)) return false;
        Car c = (Car) obj;
        return numDoors == c.numDoors;
    }
    @Override
    public int hashCode() { return 31 * super.hashCode() + numDoors; }
    @Override
    public String toString() {
        return "Car{brand='" + brand + "', year=" + year + ", doors=" + numDoors + "}";
    }
}

class Motorcycle extends Vehicle {
    boolean hasSidecar;
    Motorcycle(String brand, int year, boolean hasSidecar) {
        super(brand, year);
        this.hasSidecar = hasSidecar;
    }
    @Override
    public String toString() {
        return "Motorcycle{brand='" + brand + "', year=" + year + ", sidecar=" + hasSidecar + "}";
    }
}

public class Main {
    public static void main(String[] args) {
        Car c1 = new Car("Toyota", 2024, 4);
        Car c2 = new Car("Toyota", 2024, 4);
        System.out.println(c1);
        System.out.println(c2);
        System.out.println("Are they equal? " + c1.equals(c2));

        Motorcycle m = new Motorcycle("Honda", 2023, false);
        System.out.println(m);
        System.out.println("Car equals Motorcycle? " + c1.equals(m));
    }
}
```

### Challenge 6. Custom Exception Hierarchy

**Difficulty:** Hard

Create a custom exception hierarchy: AppException extends Exception, ValidationException extends AppException, and NotFoundException extends AppException. Each should have a constructor that takes a message. Write a method that throws different exceptions based on input and catch them appropriately.

**Constraints:**

- Use inheritance for the exception hierarchy. Demonstrate catching specific and general exceptions.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
ValidationException: Age must be positive: -5
NotFoundException: Student not found: ID 999
AppException: General application error
```

**Solution:**

```java
class AppException extends Exception {
    AppException(String msg) { super(msg); }
}

class ValidationException extends AppException {
    ValidationException(String msg) { super(msg); }
}

class NotFoundException extends AppException {
    NotFoundException(String msg) { super(msg); }
}

public class Main {
    static void process(int code) throws AppException {
        if (code == 1) throw new ValidationException("Age must be positive: -5");
        if (code == 2) throw new NotFoundException("Student not found: ID 999");
        if (code == 3) throw new AppException("General application error");
    }

    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            try {
                process(i);
            } catch (ValidationException e) {
                System.out.println("ValidationException: " + e.getMessage());
            } catch (NotFoundException e) {
                System.out.println("NotFoundException: " + e.getMessage());
            } catch (AppException e) {
                System.out.println("AppException: " + e.getMessage());
            }
        }
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/inheritance-in-java/*
