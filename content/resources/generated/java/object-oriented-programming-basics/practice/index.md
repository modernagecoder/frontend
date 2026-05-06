---
title: "Practice: OOP Basics - Classes, Objects, and Constructors"
description: "63 practice problems for OOP Basics - Classes, Objects, and Constructors in Java"
slug: object-oriented-programming-basics-practice
canonical: https://learn.modernagecoders.com/resources/java/object-oriented-programming-basics/practice
category: "Java"
---
# Practice: OOP Basics - Classes, Objects, and Constructors

**Total questions:** 63

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
class Dog {
    String name;
    void bark() {
        System.out.println(name + " says Woof!");
    }
}

Dog d = new Dog();
d.name = "Buddy";
d.bark();
```

*Hint:* The field name is set to "Buddy" before calling bark().

**Answer:** `Buddy says Woof!`

A Dog object is created with the default constructor (provided by Java since none is defined). The `name` field is set to "Buddy", and `bark()` prints the name followed by " says Woof!".

### Q2. [Easy] What is the output?

```
class Point {
    int x, y;
}

Point p = new Point();
System.out.println(p.x + ", " + p.y);
```

*Hint:* When no constructor is defined, Java uses default values for fields.

**Answer:** `0, 0`

No constructor is defined, so Java provides a default no-argument constructor that initializes int fields to 0. Both `x` and `y` are 0.

### Q3. [Easy] What is the output?

```
class Box {
    int length;
    Box(int length) {
        this.length = length;
    }
}

Box b = new Box(10);
System.out.println(b.length);
```

*Hint:* The parameterized constructor sets this.length to the passed value.

**Answer:** `10`

The constructor `Box(int length)` uses `this.length` to assign the parameter value to the field. `b.length` is 10.

### Q4. [Easy] What is the output?

```
class Counter {
    static int count = 0;
    Counter() {
        count++;
    }
}

Counter c1 = new Counter();
Counter c2 = new Counter();
Counter c3 = new Counter();
System.out.println(Counter.count);
```

*Hint:* Static variables are shared. Each constructor call increments the same count.

**Answer:** `3`

The static variable `count` is shared across all Counter objects. Each `new Counter()` increments the same counter. After three objects, count is 3.

### Q5. [Easy] What is the output?

```
class Student {
    String name;
    Student(String name) {
        this.name = name;
    }
    public String toString() {
        return "Student: " + name;
    }
}

Student s = new Student("Meera");
System.out.println(s);
```

*Hint:* println() automatically calls toString() on objects.

**Answer:** `Student: Meera`

`System.out.println(s)` calls `s.toString()` which returns "Student: Meera". Without the toString() override, it would print something like Student@1b6d3586.

### Q6. [Medium] What is the output?

```
class Test {
    int x;

    Test() {
        this(10);
        System.out.println("Default: x = " + x);
    }

    Test(int x) {
        this.x = x;
        System.out.println("Param: x = " + x);
    }
}

Test t = new Test();
```

*Hint:* this(10) chains to the parameterized constructor first, then the default constructor continues.

**Answer:** `Param: x = 10`
`Default: x = 10`

The default constructor calls `this(10)`, which invokes the parameterized constructor first. It sets x to 10 and prints "Param: x = 10". Then control returns to the default constructor, which prints "Default: x = 10".

### Q7. [Medium] What is the output?

```
class MyClass {
    static int a = 10;
    int b = 20;

    static void display() {
        System.out.println("a = " + a);
        // System.out.println("b = " + b); // Would cause error
    }
}

MyClass.display();
MyClass obj = new MyClass();
System.out.println(obj.b);
```

*Hint:* Static methods can access static variables but not instance variables.

**Answer:** `a = 10`
`20`

The static method `display()` can access the static variable `a` but not the instance variable `b`. It prints "a = 10". Then an object is created and `obj.b` is 20 (instance variable with default initialization).

### Q8. [Medium] What is the output?

```
class Demo {
    static { System.out.println("Static block"); }
    { System.out.println("Instance block"); }
    Demo() { System.out.println("Constructor"); }
}

Demo d1 = new Demo();
System.out.println("---");
Demo d2 = new Demo();
```

*Hint:* Static block runs once. Instance block and constructor run for each object.

**Answer:** `Static block`
`Instance block`
`Constructor`
`---`
`Instance block`
`Constructor`

Static block runs once when the class loads (before the first object). For d1: instance block then constructor. For d2: instance block then constructor (static block does not repeat).

### Q9. [Medium] What is the output?

```
class Person {
    String name;
    Person(String name) { this.name = name; }
}

Person p1 = new Person("Rohit");
Person p2 = p1;
p2.name = "Virat";
System.out.println(p1.name);
System.out.println(p2.name);
```

*Hint:* p2 = p1 does not create a copy. Both variables reference the same object.

**Answer:** `Virat`
`Virat`

`p2 = p1` copies the reference, not the object. Both `p1` and `p2` point to the same Person object. Changing `p2.name` to "Virat" also changes what `p1.name` sees, because they are the same object.

### Q10. [Hard] What is the output?

```
class A {
    int x;
    A() { this(5); System.out.println("A()"); }
    A(int x) { this.x = x; System.out.println("A(" + x + ")"); }
    { System.out.println("Instance block: x = " + x); }
}

A obj = new A();
```

*Hint:* Instance initializer block runs before the constructor body but after field initialization. this() chaining is resolved first.

**Answer:** `Instance block: x = 0`
`A(5)`
`A()`

When `new A()` is called: (1) Instance variables are initialized to defaults (x = 0). (2) The instance initializer block runs, printing "Instance block: x = 0". (3) The no-arg constructor starts and calls `this(5)`. (4) The parameterized constructor sets x = 5 and prints "A(5)". (5) Control returns to the no-arg constructor, which prints "A()".

### Q11. [Hard] What is the output?

```
class Student {
    String name;
    static int count = 0;

    Student(String name) {
        this.name = name;
        count++;
    }

    Student(Student other) {
        this(other.name);
    }
}

Student s1 = new Student("Aarav");
Student s2 = new Student(s1);
System.out.println(s1.name + ", " + s2.name);
System.out.println(Student.count);
System.out.println(s1 == s2);
```

*Hint:* The copy constructor calls this(other.name) which chains to the parameterized constructor. Both constructors increment count.

**Answer:** `Aarav, Aarav`
`2`
`false`

s1 is created with name "Aarav" (count = 1). s2 is created via the copy constructor which chains to `this(other.name)`, setting name to "Aarav" and incrementing count again (count = 2). Both have the same name but are different objects, so `s1 == s2` is false.

### Q12. [Hard] What is the output?

```
class Num {
    int val;
    Num(int val) { this.val = val; }
    Num add(Num other) {
        return new Num(this.val + other.val);
    }
    public String toString() { return "Num(" + val + ")"; }
}

Num a = new Num(10);
Num b = new Num(20);
Num c = a.add(b).add(new Num(5));
System.out.println(a);
System.out.println(c);
```

*Hint:* add() returns a new Num object. The original objects are not modified. Chaining works because each add() returns a new Num.

**Answer:** `Num(10)`
`Num(35)`

`a.add(b)` returns a new Num(30). `.add(new Num(5))` is called on that result, returning Num(35). The original `a` is unchanged (still Num(10)) because `add()` creates a new object.

## Mixed Questions

### Q1. [Easy] What is the output?

```
class Car {
    String model;
    int year;
}

Car c = new Car();
System.out.println(c.model);
System.out.println(c.year);
```

*Hint:* Default values: null for objects, 0 for ints.

**Answer:** `null`
`0`

When no constructor is defined, Java provides a default constructor that initializes fields to their default values. For String (an object type), the default is null. For int, the default is 0.

### Q2. [Easy] What is the output?

```
class Pair {
    int a, b;
    Pair(int a, int b) {
        this.a = a;
        this.b = b;
    }
    int sum() { return a + b; }
}

Pair p = new Pair(3, 7);
System.out.println(p.sum());
System.out.println(p.a + " " + p.b);
```

*Hint:* The constructor sets a=3, b=7. sum() returns a+b.

**Answer:** `10`
`3 7`

The constructor initializes a=3 and b=7. `sum()` returns 3+7 = 10.

### Q3. [Easy] What is the difference between a class and an object?

*Hint:* Think blueprint vs actual building.

**Answer:** A **class** is a blueprint/template that defines the structure (fields) and behavior (methods) of a type. An **object** is a specific instance of a class that occupies memory at runtime. You can create multiple objects from one class, each with its own field values.

For example, a `Student` class defines that students have a name, rollNo, and marks. An object is a specific student like "Aarav with rollNo 101". The class exists at compile time as a definition; objects exist at runtime in memory.

### Q4. [Medium] What is the output?

```
class Wrapper {
    int val;
    Wrapper(int val) { this.val = val; }
}

static void change(Wrapper w) {
    w.val = 99;
}

Wrapper w = new Wrapper(10);
change(w);
System.out.println(w.val);
```

*Hint:* The method receives a copy of the reference. Both references point to the same object.

**Answer:** `99`

The method receives a copy of the reference to the Wrapper object. Through this reference, it modifies `val` to 99. Since both the caller's variable and the method's parameter point to the same object, the change is visible after the method returns.

### Q5. [Medium] What is the output?

```
class Rect {
    int width, height;

    Rect(int w, int h) {
        width = w;
        height = h;
    }

    int area() { return width * height; }

    public String toString() {
        return width + "x" + height + " (area=" + area() + ")";
    }
}

Rect r = new Rect(5, 3);
System.out.println(r);
System.out.println("Room: " + r);
```

*Hint:* println(r) and "Room: " + r both call toString().

**Answer:** `5x3 (area=15)`
`Room: 5x3 (area=15)`

Both `println(r)` and string concatenation `"Room: " + r` call `r.toString()`. The overridden toString() returns the dimensions and computed area.

### Q6. [Medium] Why does Java not provide a default constructor when you define a parameterized constructor?

*Hint:* Think about the intent of defining a parameterized constructor.

**Answer:** When you define a parameterized constructor, you are declaring that objects of this class **require certain data to be initialized properly**. If Java still provided a default no-arg constructor, it would allow creating objects without the required data, potentially leaving the object in an invalid state. Java respects your intent by not adding a default constructor.

For example, if a `DatabaseConnection` class requires a URL in its constructor, allowing a no-arg constructor would create a connection object with no URL — an invalid state. If you truly want both options, you can define both constructors explicitly.

### Q7. [Hard] What is the output?

```
class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }

    Node(int data, Node next) {
        this.data = data;
        this.next = next;
    }
}

Node n3 = new Node(30);
Node n2 = new Node(20, n3);
Node n1 = new Node(10, n2);

Node current = n1;
while (current != null) {
    System.out.print(current.data + " ");
    current = current.next;
}
```

*Hint:* This creates a simple linked list: n1 -> n2 -> n3. The while loop traverses it.

**Answer:** `10 20 30 `

Three Node objects form a linked list: n1(10) -> n2(20) -> n3(30) -> null. The while loop starts at n1, prints each node's data, and moves to the next node until reaching null.

### Q8. [Hard] What is the output?

```
class Config {
    static String env;
    static int port;

    static {
        env = "production";
        port = 8080;
        System.out.println("Config loaded: " + env + ":" + port);
    }

    static void showConfig() {
        System.out.println(env + " on port " + port);
    }
}

Config.showConfig();
Config.showConfig();
```

*Hint:* The static block runs only once, even if static methods are called multiple times.

**Answer:** `Config loaded: production:8080`
`production on port 8080`
`production on port 8080`

The first call to `Config.showConfig()` triggers class loading, which executes the static block (once). Then showConfig() prints the config. The second call does NOT re-execute the static block — it just calls showConfig() again.

### Q9. [Hard] Explain the difference between a static variable and an instance variable in terms of memory and lifetime.

*Hint:* Think about when they are created, how many copies exist, and when they are destroyed.

**Answer:** A **static variable** exists once per class. It is created when the class is loaded (before any objects) and destroyed when the class is unloaded. All objects share the same copy. An **instance variable** exists once per object. It is created when the object is created with `new` and destroyed when the object is garbage collected. Each object has its own independent copy.

Static variables are stored in the method area (metaspace in modern JVMs). Instance variables are stored on the heap as part of each object. For example, a static `count` variable tracks total objects across the class, while an instance `name` variable is unique to each object.

## Multiple Choice Questions

### Q1. [Easy] What is the purpose of the new keyword in Java?

A. To declare a variable
B. To allocate memory for an object and call its constructor
C. To import a class
D. To define a method

**Answer:** B

**B is correct.** `new` allocates memory on the heap for a new object and invokes the appropriate constructor to initialize it. It returns a reference to the newly created object.

### Q2. [Easy] What is the default value of an instance variable of type String?

A. ""
B. 0
C. null
D. undefined

**Answer:** C

**C is correct.** The default value for any reference type (including String) is `null`. Empty string (A) is not the default — null means no object exists.

### Q3. [Easy] A constructor is different from a regular method because:

A. It has a return type of void
B. It has no return type and has the same name as the class
C. It can only be public
D. It cannot take parameters

**Answer:** B

**B is correct.** A constructor has no return type (not even void) and must have the same name as the class. Constructors can have any access modifier (A is wrong) and can take parameters (D is wrong).

### Q4. [Easy] When does Java provide a default constructor?

A. Always
B. Only when no constructors are defined in the class
C. When the class has no fields
D. When the class extends Object

**Answer:** B

**B is correct.** Java automatically provides a no-argument default constructor only when the class defines no constructors at all. Once you define any constructor, the default is no longer generated.

### Q5. [Medium] What does this keyword refer to in Java?

A. The current class
B. The current object
C. The parent class
D. The constructor

**Answer:** B

**B is correct.** `this` refers to the current object — the instance on which the method or constructor was called. It is not the class itself (A), not the parent class (C — that would be `super`), and not the constructor (D).

### Q6. [Medium] How many times does a static block execute?

A. Once per object creation
B. Once per method call
C. Once per class loading
D. It never executes automatically

**Answer:** C

**C is correct.** A static block executes exactly once when the class is first loaded by the JVM. It runs before any objects are created or static methods are called. Subsequent object creations or method calls do not trigger it again.

### Q7. [Medium] What happens if you define a method with the same name as the class but with a void return type?

A. It becomes a constructor
B. Compilation error
C. It is treated as a regular method, not a constructor
D. Runtime error

**Answer:** C

**C is correct.** A constructor must have no return type. If you add `void`, it becomes a regular method that happens to have the same name as the class. It will NOT be called when you use `new`.

### Q8. [Medium] Can a static method use the this keyword?

A. Yes, always
B. Yes, if the method is public
C. No, static methods do not have a this reference
D. No, but they can use super

**Answer:** C

**C is correct.** Static methods belong to the class, not to any specific object. Since there is no current object, there is no `this` reference. They cannot use `this` or `super`.

### Q9. [Hard] What is the execution order when an object is created?

A. Constructor -> Instance block -> Static block
B. Static block -> Constructor -> Instance block
C. Static block -> Instance block -> Constructor
D. Instance block -> Static block -> Constructor

**Answer:** C

**C is correct.** The order is: (1) Static block (runs once when the class is loaded, if not already loaded). (2) Instance initializer block (runs every time an object is created). (3) Constructor body. This is a frequently asked interview question.

### Q10. [Hard] What happens when you write: Student s = null; s.staticMethod();?

A. NullPointerException
B. It works fine because static methods don't need an object
C. Compilation error
D. Runtime error other than NPE

**Answer:** B

**B is correct.** Static methods are resolved based on the declared type, not the object. Even though `s` is null, the compiler uses the type `Student` to resolve `staticMethod()`. The null reference is never dereferenced. However, this is bad practice — call static methods using the class name.

### Q11. [Hard] What is the result of this() and super() both being in the same constructor?

A. Both execute in order
B. Compilation error — only one can be the first statement
C. this() runs first, then super()
D. super() runs first, then this()

**Answer:** B

**B is correct.** Both `this()` and `super()` must be the first statement in a constructor. Since only one statement can be first, you cannot have both in the same constructor. You choose one: `this()` to chain within the class, or `super()` to call the parent constructor.

### Q12. [Hard] What does the @Override annotation do?

A. It overrides the method at runtime
B. It tells the compiler to verify that the method actually overrides a superclass method
C. It makes the method run instead of the parent method
D. It is required for all overriding methods

**Answer:** B

**B is correct.** `@Override` is a compile-time annotation that tells the compiler to check that the method actually overrides a method from a superclass or interface. If the method name or signature does not match, the compiler reports an error. It is not required (D) but is strongly recommended.

### Q13. [Medium] What is the output of printing an object without overriding toString()?

A. The object's field values
B. null
C. The class name followed by @ and the hash code in hexadecimal
D. A compilation error

**Answer:** C

**C is correct.** The default `toString()` inherited from Object returns `getClass().getName() + '@' + Integer.toHexString(hashCode())`, which produces something like `Student@1b6d3586`. Override toString() for meaningful output.

## Coding Challenges

### Challenge 1. Student Grade Calculator

**Difficulty:** Easy

Create a Student class with fields name, rollNo, and marks (double). Write a parameterized constructor and a method getGrade() that returns 'A' for marks >= 90, 'B' for >= 80, 'C' for >= 70, 'D' for >= 60, and 'F' otherwise. Override toString(). Test with two students.

**Constraints:**

- Use this keyword in the constructor. Override toString() to include the grade.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Student{name='Aarav', rollNo=101, marks=92.5, grade=A}
Student{name='Priya', rollNo=102, marks=78.0, grade=C}
```

**Solution:**

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

    char getGrade() {
        if (marks >= 90) return 'A';
        if (marks >= 80) return 'B';
        if (marks >= 70) return 'C';
        if (marks >= 60) return 'D';
        return 'F';
    }

    public String toString() {
        return "Student{name='" + name + "', rollNo=" + rollNo
               + ", marks=" + marks + ", grade=" + getGrade() + "}";
    }

    public static void main(String[] args) {
        Student s1 = new Student("Aarav", 101, 92.5);
        Student s2 = new Student("Priya", 102, 78.0);
        System.out.println(s1);
        System.out.println(s2);
    }
}
```

### Challenge 2. Bank Account with Deposit and Withdraw

**Difficulty:** Easy

Create a BankAccount class with fields accountHolder (String) and balance (double). Write a constructor, deposit(double amount) and withdraw(double amount) methods. Withdraw should check for sufficient balance. Override toString(). Test with deposits and withdrawals.

**Constraints:**

- Validate that deposit and withdrawal amounts are positive. Print a message for insufficient balance.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Kavitha: Rs.5000.00
After deposit: Rs.7000.00
After withdrawal: Rs.4500.00
Insufficient balance for Rs.5000.00
```

**Solution:**

```java
class BankAccount {
    String accountHolder;
    double balance;

    BankAccount(String accountHolder, double balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.printf("After deposit: Rs.%.2f%n", balance);
        }
    }

    void withdraw(double amount) {
        if (amount > balance) {
            System.out.printf("Insufficient balance for Rs.%.2f%n", amount);
        } else if (amount > 0) {
            balance -= amount;
            System.out.printf("After withdrawal: Rs.%.2f%n", balance);
        }
    }

    public String toString() {
        return String.format("%s: Rs.%.2f", accountHolder, balance);
    }

    public static void main(String[] args) {
        BankAccount acc = new BankAccount("Kavitha", 5000.0);
        System.out.println(acc);
        acc.deposit(2000);
        acc.withdraw(2500);
        acc.withdraw(5000);
    }
}
```

### Challenge 3. Object Counter with Static Variable

**Difficulty:** Easy

Create a Product class with a static variable totalProducts that tracks how many Product objects have been created. Each product has a name and price. Print the total after creating several products.

**Constraints:**

- Use a static variable incremented in the constructor.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Product: Laptop - Rs.50000.0 (Total: 1)
Product: Phone - Rs.20000.0 (Total: 2)
Product: Tablet - Rs.15000.0 (Total: 3)
Total products created: 3
```

**Solution:**

```java
class Product {
    String name;
    double price;
    static int totalProducts = 0;

    Product(String name, double price) {
        this.name = name;
        this.price = price;
        totalProducts++;
    }

    public String toString() {
        return "Product: " + name + " - Rs." + price + " (Total: " + totalProducts + ")";
    }

    public static void main(String[] args) {
        System.out.println(new Product("Laptop", 50000.0));
        System.out.println(new Product("Phone", 20000.0));
        System.out.println(new Product("Tablet", 15000.0));
        System.out.println("Total products created: " + Product.totalProducts);
    }
}
```

### Challenge 4. Complex Number with Method Chaining

**Difficulty:** Medium

Create a Complex class representing a complex number (real and imaginary parts). Write add(Complex other) and multiply(Complex other) methods that return new Complex objects. Override toString() to display in 'a + bi' format. Test chaining: a.add(b).multiply(c).

**Constraints:**

- Methods should return new Complex objects, not modify the originals.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
a = 2.0 + 3.0i
b = 1.0 + 4.0i
c = 5.0 + 0.0i
a + b = 3.0 + 7.0i
(a + b) * c = 15.0 + 35.0i
```

**Solution:**

```java
class Complex {
    double real, imag;

    Complex(double real, double imag) {
        this.real = real;
        this.imag = imag;
    }

    Complex add(Complex other) {
        return new Complex(this.real + other.real, this.imag + other.imag);
    }

    Complex multiply(Complex other) {
        double r = this.real * other.real - this.imag * other.imag;
        double i = this.real * other.imag + this.imag * other.real;
        return new Complex(r, i);
    }

    public String toString() {
        return real + " + " + imag + "i";
    }

    public static void main(String[] args) {
        Complex a = new Complex(2, 3);
        Complex b = new Complex(1, 4);
        Complex c = new Complex(5, 0);
        System.out.println("a = " + a);
        System.out.println("b = " + b);
        System.out.println("c = " + c);
        System.out.println("a + b = " + a.add(b));
        System.out.println("(a + b) * c = " + a.add(b).multiply(c));
    }
}
```

### Challenge 5. Linked List using Objects

**Difficulty:** Medium

Create a Node class with fields data (int) and next (Node). Write a static method printList(Node head) that prints all elements separated by ' -> '. Create a linked list with nodes 10 -> 20 -> 30 -> 40 and print it.

**Constraints:**

- Use constructor chaining. Handle the null terminator in the print method.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
10 -> 20 -> 30 -> 40 -> null
```

**Solution:**

```java
class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }

    Node(int data, Node next) {
        this.data = data;
        this.next = next;
    }

    static void printList(Node head) {
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }

    public static void main(String[] args) {
        Node head = new Node(10, new Node(20, new Node(30, new Node(40))));
        printList(head);
    }
}
```

### Challenge 6. Builder Pattern for Student

**Difficulty:** Hard

Create a StudentBuilder class that uses method chaining to build Student objects. It should have methods setName(), setRollNo(), setMarks(), and build() that returns a Student object. Test with chaining syntax.

**Constraints:**

- Each setter returns this for chaining. The build() method returns a new Student object.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Student{name='Deepak', rollNo=201, marks=91.5}
```

**Solution:**

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

    public String toString() {
        return "Student{name='" + name + "', rollNo=" + rollNo + ", marks=" + marks + "}";
    }
}

class StudentBuilder {
    String name;
    int rollNo;
    double marks;

    StudentBuilder setName(String name) {
        this.name = name;
        return this;
    }

    StudentBuilder setRollNo(int rollNo) {
        this.rollNo = rollNo;
        return this;
    }

    StudentBuilder setMarks(double marks) {
        this.marks = marks;
        return this;
    }

    Student build() {
        return new Student(name, rollNo, marks);
    }

    public static void main(String[] args) {
        Student s = new StudentBuilder()
            .setName("Deepak")
            .setRollNo(201)
            .setMarks(91.5)
            .build();
        System.out.println(s);
    }
}
```

### Challenge 7. Immutable Class

**Difficulty:** Hard

Create an immutable Point class with final fields x and y. It should have no setters. Write methods translate(int dx, int dy) and distanceTo(Point other) that return new Point objects or computed values. Demonstrate that the original point does not change.

**Constraints:**

- Use final fields. No setters. Methods return new objects instead of modifying fields.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Original: (3, 4)
Translated: (5, 7)
Original unchanged: (3, 4)
Distance to origin: 5.00
```

**Solution:**

```java
class Point {
    final int x;
    final int y;

    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    Point translate(int dx, int dy) {
        return new Point(this.x + dx, this.y + dy);
    }

    double distanceTo(Point other) {
        int dx = this.x - other.x;
        int dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    public String toString() {
        return "(" + x + ", " + y + ")";
    }

    public static void main(String[] args) {
        Point p = new Point(3, 4);
        System.out.println("Original: " + p);

        Point moved = p.translate(2, 3);
        System.out.println("Translated: " + moved);
        System.out.println("Original unchanged: " + p);

        Point origin = new Point(0, 0);
        System.out.printf("Distance to origin: %.2f%n", p.distanceTo(origin));
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/object-oriented-programming-basics/*
