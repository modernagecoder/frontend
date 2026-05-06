---
title: "Inheritance in C++ - Types, Diamond Problem, Virtual Inheritance | Modern Age Coders"
description: "Master inheritance in C++ including single, multiple, multilevel, hierarchical, and hybrid inheritance, public/protected/private inheritance access control, constructor and destructor order, method overriding, diamond problem, virtual inheritance, and virtual base classes. 60+ interview-focused practice questions."
slug: inheritance-in-cpp
canonical: https://learn.modernagecoders.com/resources/cpp/inheritance-in-cpp/
category: "C++"
keywords: ["c++ inheritance", "multiple inheritance c++", "diamond problem c++", "virtual inheritance c++", "virtual base class c++", "constructor order inheritance c++", "method overriding c++", "public private protected inheritance c++", "c++ inheritance interview questions", "hierarchical inheritance c++"]
---
# Inheritance in C++

**Difficulty:** Intermediate  
**Reading time:** 60 min  
**Chapter:** 15  
**Practice questions:** 58

## What Is Inheritance in C++?

**Inheritance** is the mechanism by which one class (the **derived class**) acquires the properties and behaviors of another class (the **base class**). It establishes an "is-a" relationship: a `Dog` is an `Animal`, a `Car` is a `Vehicle`.

The derived class inherits all non-private members of the base class and can add its own members or override base class methods.

```
class Animal {
protected:
    string name;
public:
    Animal(string n) : name(n) {}
    void eat() { cout << name << " eats" << endl; }
};

class Dog : public Animal {
public:
    Dog(string n) : Animal(n) {}
    void bark() { cout << name << " barks" << endl; }
};

Dog d("Tommy");
d.eat();   // Inherited from Animal
d.bark();  // Defined in Dog
```

C++ supports five types of inheritance: **single** (one base, one derived), **multiple** (multiple bases, one derived), **multilevel** (chain of derivations), **hierarchical** (one base, multiple derived), and **hybrid** (combination of types). C++ also provides three modes of inheritance (`public`, `protected`, `private`) that control how base class members are accessible in the derived class.

Unlike Java or Python, C++ supports **multiple inheritance**, which brings the **diamond problem** and the need for **virtual inheritance**. These are among the most asked topics in C++ interviews.

## Why Does Inheritance Matter?

Inheritance is one of the four pillars of Object-Oriented Programming. In C++, inheritance is more powerful (and more dangerous) than in Java or Python because of multiple inheritance, access mode control, and the diamond problem.

### 1. Code Reuse Without Duplication

When Arjun creates a `SavingsAccount` class that inherits from `BankAccount`, he gets all the deposit, withdraw, and balance-tracking logic for free. He only writes the interest calculation code. Without inheritance, he would copy-paste hundreds of lines into every account type.

### 2. Constructor/Destructor Order Is a Top Interview Topic

Every major tech interview asks: "In what order are constructors and destructors called in an inheritance chain?" The answer (base first, derived last for construction; reverse for destruction) is fundamental. With multiple inheritance, the order follows the declaration order, not the initializer list order.

### 3. The Diamond Problem

When Kavya creates a class that inherits from two classes that share a common base, the derived class gets two copies of the base class members. This is the **diamond problem**. C++ solves it with **virtual inheritance**, ensuring only one copy of the shared base exists. This topic appears in almost every C++ interview at product companies.

### 4. Access Mode Control

C++ is unique in offering `public`, `protected`, and `private` inheritance. This controls how base class members appear in the derived class. `public` inheritance preserves the base's access levels (is-a relationship). `private` inheritance makes all base members private (implemented-in-terms-of relationship).

### 5. Foundation for Polymorphism

Without inheritance, there is no polymorphism. Virtual functions, abstract classes, and interfaces all require an inheritance hierarchy. Understanding inheritance is the prerequisite for understanding virtual dispatch, the vtable, and dynamic_cast.

## Detailed Explanation

### 1. Single Inheritance

One base class, one derived class. The simplest and most common form.

```
class Shape {
protected:
    string color;
public:
    Shape(string c) : color(c) {}
    void showColor() { cout << "Color: " << color << endl; }
};

class Circle : public Shape {
    double radius;
public:
    Circle(string c, double r) : Shape(c), radius(r) {}
    double area() { return 3.14159 * radius * radius; }
};
```

### 2. Multilevel Inheritance

A chain of derivations: A -> B -> C. Each class inherits from the one above it.

```
class Animal {
public:
    void breathe() { cout << "Breathing" << endl; }
};

class Mammal : public Animal {
public:
    void feedMilk() { cout << "Feeding milk" << endl; }
};

class Dog : public Mammal {
public:
    void bark() { cout << "Barking" << endl; }
};

Dog d;
d.breathe();   // From Animal
d.feedMilk();  // From Mammal
d.bark();      // From Dog
```

### 3. Hierarchical Inheritance

One base class, multiple derived classes. Each derived class independently extends the base.

```
class Vehicle {
protected:
    int speed;
public:
    Vehicle(int s) : speed(s) {}
    void showSpeed() { cout << speed << " km/h" << endl; }
};

class Car : public Vehicle {
public:
    Car(int s) : Vehicle(s) {}
    void honk() { cout << "Beep beep" << endl; }
};

class Bike : public Vehicle {
public:
    Bike(int s) : Vehicle(s) {}
    void wheelie() { cout << "Wheelie!" << endl; }
};
```

### 4. Multiple Inheritance

A class inherits from two or more base classes. C++ supports this directly, unlike Java (which uses interfaces instead).

```
class Printable {
public:
    void print() { cout << "Printing..." << endl; }
};

class Scannable {
public:
    void scan() { cout << "Scanning..." << endl; }
};

class AllInOne : public Printable, public Scannable {
public:
    void copy() {
        scan();
        print();
    }
};

AllInOne device;
device.print();   // From Printable
device.scan();    // From Scannable
device.copy();    // Own method
```

### 5. The Diamond Problem

When two base classes share a common base, the derived class gets two copies of the shared base's members. This creates ambiguity.

```
class Person {
protected:
    string name;
public:
    Person(string n) : name(n) { cout << "Person(" << n << ")" << endl; }
};

class Student : public Person {
public:
    Student(string n) : Person(n) { cout << "Student" << endl; }
};

class Employee : public Person {
public:
    Employee(string n) : Person(n) { cout << "Employee" << endl; }
};

class TA : public Student, public Employee {
public:
    // Person is constructed TWICE: once via Student, once via Employee
    TA(string n) : Student(n), Employee(n) { cout << "TA" << endl; }
    // ta.name is ambiguous: Student::name or Employee::name?
};
```

This is called the **diamond problem** because the inheritance diagram looks like a diamond shape.

### 6. Virtual Inheritance (Solution to Diamond Problem)

Virtual inheritance ensures that only one copy of the shared base class exists in the derived object.

```
class Person {
protected:
    string name;
public:
    Person(string n = "") : name(n) { cout << "Person(" << n << ")" << endl; }
};

class Student : virtual public Person {
public:
    Student(string n) : Person(n) { cout << "Student" << endl; }
};

class Employee : virtual public Person {
public:
    Employee(string n) : Person(n) { cout << "Employee" << endl; }
};

class TA : public Student, public Employee {
public:
    // With virtual inheritance, the MOST DERIVED class (TA)
    // must call the virtual base's constructor directly
    TA(string n) : Person(n), Student(n), Employee(n) {
        cout << "TA" << endl;
    }
    void show() { cout << name << endl; }  // No ambiguity: one copy
};
```

Key rules of virtual inheritance:

- The most derived class is responsible for calling the virtual base class constructor
- If the most derived class does not call it, the default constructor is used
- The virtual base is constructed first, before any non-virtual bases
- There is a small runtime overhead (extra pointer per virtual base)

### 7. Public, Protected, and Private Inheritance

The inheritance mode controls how base class members appear in the derived class:

```
// class Derived : public Base
//   public    -> public
//   protected -> protected
//   private   -> NOT accessible

// class Derived : protected Base
//   public    -> protected
//   protected -> protected
//   private   -> NOT accessible

// class Derived : private Base
//   public    -> private
//   protected -> private
//   private   -> NOT accessible
```

Public inheritance models "is-a" (a Dog IS an Animal). Private inheritance models "implemented-in-terms-of" (a Stack uses a List internally but is not a List). Protected inheritance is rarely used in practice.

### 8. Constructor and Destructor Order

Constructors are called base-to-derived. Destructors are called derived-to-base (reverse order). With multiple inheritance, the order follows the order of base class declarations in the class definition.

```
class A {
public:
    A() { cout << "A()" << endl; }
    ~A() { cout << "~A()" << endl; }
};

class B {
public:
    B() { cout << "B()" << endl; }
    ~B() { cout << "~B()" << endl; }
};

class C : public A, public B {
public:
    C() { cout << "C()" << endl; }
    ~C() { cout << "~C()" << endl; }
};

// Creating C c; prints: A() B() C()
// Destroying c prints:  ~C() ~B() ~A()
```

### 9. Method Overriding

A derived class can provide its own version of a base class method. If the method is not virtual, the version called depends on the pointer/reference type (static binding). If virtual, it depends on the actual object type (dynamic binding).

```
class Base {
public:
    void show() { cout << "Base" << endl; }
    virtual void display() { cout << "Base display" << endl; }
    virtual ~Base() {}
};

class Derived : public Base {
public:
    void show() { cout << "Derived" << endl; }         // Hides Base::show
    void display() override { cout << "Derived display" << endl; }  // Overrides
};

Base* b = new Derived();
b->show();      // "Base" (static binding, not virtual)
b->display();   // "Derived display" (dynamic binding, virtual)
delete b;
```

### 10. Calling Base Class Methods from Derived

A derived class can explicitly call a base class method using the scope resolution operator:

```
class Base {
public:
    void greet() { cout << "Hello from Base" << endl; }
};

class Derived : public Base {
public:
    void greet() {
        Base::greet();  // Explicitly call base version
        cout << "Hello from Derived" << endl;
    }
};
```

## Code Examples

### Single and Multilevel Inheritance

```cpp
#include <iostream>
#include <string>
using namespace std;

class Animal {
protected:
    string name;
public:
    Animal(string n) : name(n) { cout << "Animal(" << name << ")" << endl; }
    ~Animal() { cout << "~Animal()" << endl; }
    void breathe() { cout << name << " breathes" << endl; }
};

class Mammal : public Animal {
public:
    Mammal(string n) : Animal(n) { cout << "Mammal()" << endl; }
    ~Mammal() { cout << "~Mammal()" << endl; }
    void feedMilk() { cout << name << " feeds milk" << endl; }
};

class Dog : public Mammal {
public:
    Dog(string n) : Mammal(n) { cout << "Dog()" << endl; }
    ~Dog() { cout << "~Dog()" << endl; }
    void bark() { cout << name << " barks" << endl; }
};

int main() {
    cout << "--- Creating Dog ---" << endl;
    Dog d("Tommy");
    d.breathe();
    d.feedMilk();
    d.bark();
    cout << "--- Destroying Dog ---" << endl;
    return 0;
}
```

This shows multilevel inheritance: Dog -> Mammal -> Animal. Constructors are called base-to-derived (Animal, Mammal, Dog). Destructors are called derived-to-base (Dog, Mammal, Animal). The Dog object has access to methods from all levels.

**Output:**

```
--- Creating Dog ---
Animal(Tommy)
Mammal()
Dog()
Tommy breathes
Tommy feeds milk
Tommy barks
--- Destroying Dog ---
~Dog()
~Mammal()
~Animal()
```

### Multiple Inheritance

```cpp
#include <iostream>
using namespace std;

class Flyable {
public:
    void fly() { cout << "Flying" << endl; }
};

class Swimmable {
public:
    void swim() { cout << "Swimming" << endl; }
};

class Duck : public Flyable, public Swimmable {
public:
    void quack() { cout << "Quack!" << endl; }
};

int main() {
    Duck d;
    d.fly();
    d.swim();
    d.quack();
    return 0;
}
```

The `Duck` class inherits from both `Flyable` and `Swimmable`. It gets `fly()` from `Flyable` and `swim()` from `Swimmable`, plus its own `quack()`. This is multiple inheritance.

**Output:**

```
Flying
Swimming
Quack!
```

### Diamond Problem Without Virtual Inheritance

```cpp
#include <iostream>
#include <string>
using namespace std;

class Person {
protected:
    string name;
public:
    Person(string n) : name(n) {
        cout << "Person(" << n << ") constructed" << endl;
    }
};

class Student : public Person {
public:
    Student(string n) : Person(n) {
        cout << "Student constructed" << endl;
    }
    void study() { cout << name << " studies" << endl; }
};

class Employee : public Person {
public:
    Employee(string n) : Person(n) {
        cout << "Employee constructed" << endl;
    }
    void work() { cout << name << " works" << endl; }
};

class TA : public Student, public Employee {
public:
    TA(string n) : Student(n), Employee(n) {
        cout << "TA constructed" << endl;
    }
    void assist() {
        Student::study();
        Employee::work();
    }
};

int main() {
    TA ta("Kavya");
    // ta.name;  // Error: ambiguous (Student::name or Employee::name?)
    ta.Student::study();
    ta.Employee::work();
    ta.assist();
    return 0;
}
```

Without virtual inheritance, `Person` is constructed twice: once through `Student`, once through `Employee`. There are two separate `name` members, causing ambiguity if accessed directly. You must use `Student::name` or `Employee::name` to disambiguate.

**Output:**

```
Person(Kavya) constructed
Student constructed
Person(Kavya) constructed
Employee constructed
TA constructed
Kavya studies
Kavya works
Kavya studies
Kavya works
```

### Diamond Problem Solved with Virtual Inheritance

```cpp
#include <iostream>
#include <string>
using namespace std;

class Person {
protected:
    string name;
public:
    Person(string n = "") : name(n) {
        cout << "Person(" << n << ") constructed" << endl;
    }
};

class Student : virtual public Person {
public:
    Student(string n) : Person(n) {
        cout << "Student constructed" << endl;
    }
    void study() { cout << name << " studies" << endl; }
};

class Employee : virtual public Person {
public:
    Employee(string n) : Person(n) {
        cout << "Employee constructed" << endl;
    }
    void work() { cout << name << " works" << endl; }
};

class TA : public Student, public Employee {
public:
    TA(string n) : Person(n), Student(n), Employee(n) {
        cout << "TA constructed" << endl;
    }
    void show() { cout << "TA: " << name << endl; }
};

int main() {
    TA ta("Kavya");
    ta.study();
    ta.work();
    ta.show();
    return 0;
}
```

With `virtual public` inheritance, `Person` is constructed only once, and the most derived class (`TA`) must call `Person`'s constructor. There is now only one `name` member, so no ambiguity exists. This is the standard solution to the diamond problem.

**Output:**

```
Person(Kavya) constructed
Student constructed
Employee constructed
TA constructed
Kavya studies
Kavya works
TA: Kavya
```

### Public vs Protected vs Private Inheritance

```cpp
#include <iostream>
using namespace std;

class Base {
public:
    int pub;
protected:
    int prot;
private:
    int priv;
public:
    Base() : pub(1), prot(2), priv(3) {}
};

class PubDerived : public Base {
public:
    void test() {
        cout << "public: pub=" << pub << " prot=" << prot << endl;
        // priv not accessible
    }
};

class ProtDerived : protected Base {
public:
    void test() {
        cout << "protected: pub=" << pub << " prot=" << prot << endl;
    }
};

class PrivDerived : private Base {
public:
    void test() {
        cout << "private: pub=" << pub << " prot=" << prot << endl;
    }
};

int main() {
    PubDerived pd;
    pd.test();
    cout << "main accesses pd.pub: " << pd.pub << endl;

    ProtDerived ptd;
    ptd.test();
    // ptd.pub;  // Error: pub became protected

    PrivDerived pvd;
    pvd.test();
    // pvd.pub;  // Error: pub became private

    return 0;
}
```

With `public` inheritance, base public remains public, base protected remains protected. With `protected` inheritance, both become protected. With `private` inheritance, both become private. In all cases, base private members are never accessible in derived classes.

**Output:**

```
public: pub=1 prot=2
main accesses pd.pub: 1
protected: pub=1 prot=2
private: pub=1 prot=2
```

### Constructor/Destructor Order with Multiple Inheritance

```cpp
#include <iostream>
using namespace std;

class A {
public:
    A() { cout << "A() "; }
    ~A() { cout << "~A() "; }
};

class B {
public:
    B() { cout << "B() "; }
    ~B() { cout << "~B() "; }
};

class C {
public:
    C() { cout << "C() "; }
    ~C() { cout << "~C() "; }
};

class D : public B, public A {
    C c;
public:
    D() { cout << "D() "; }
    ~D() { cout << "~D() "; }
};

int main() {
    cout << "Create: ";
    D d;
    cout << endl << "Destroy: ";
    return 0;
}
```

Construction order: base classes in declaration order (B, A), then member objects (C), then derived constructor (D). Destruction is the exact reverse: ~D, ~C, ~A, ~B. The order in the initializer list does not matter; the declaration order in the class definition determines construction order.

**Output:**

```
Create: B() A() C() D() 
Destroy: ~D() ~C() ~A() ~B() 
```

### Method Overriding and Base Class Method Call

```cpp
#include <iostream>
using namespace std;

class Printer {
public:
    virtual void print() {
        cout << "Generic print" << endl;
    }
    virtual ~Printer() {}
};

class ColorPrinter : public Printer {
public:
    void print() override {
        Printer::print();  // Call base version first
        cout << "With color!" << endl;
    }
};

class PhotoPrinter : public ColorPrinter {
public:
    void print() override {
        ColorPrinter::print();  // Call parent version
        cout << "High resolution!" << endl;
    }
};

int main() {
    Printer* p = new PhotoPrinter();
    p->print();
    delete p;
    return 0;
}
```

Each derived class overrides `print()` but also calls the base version using scope resolution (`Base::method()`). This creates a chain: PhotoPrinter calls ColorPrinter::print(), which calls Printer::print(). This pattern is common for extending rather than replacing base behavior.

**Output:**

```
Generic print
With color!
High resolution!
```

## Common Mistakes

### Forgetting to Call Base Class Constructor

**Wrong:**

```
class Base {
    int x;
public:
    Base(int v) : x(v) {}
};

class Derived : public Base {
public:
    Derived() {}  // Error: no default constructor for Base!
};
```

Compilation error: no matching constructor for Base. Base requires an int argument but Derived's constructor does not provide one.

**Correct:**

```
class Base {
    int x;
public:
    Base(int v) : x(v) {}
};

class Derived : public Base {
public:
    Derived() : Base(0) {}   // Explicitly call Base(int)
    Derived(int v) : Base(v) {}
};
```

If the base class does not have a default constructor, the derived class must explicitly call a base constructor in its initializer list. The compiler cannot automatically construct the base without the required argument.

### Ambiguous Member Access in Diamond Inheritance

**Wrong:**

```
class A {
public:
    int x = 10;
};
class B : public A {};
class C : public A {};
class D : public B, public C {
public:
    void show() {
        cout << x;  // Error: ambiguous!
    }
};
```

Compilation error: reference to 'x' is ambiguous. D has two copies of A::x (one via B, one via C).

**Correct:**

```
// Option 1: Disambiguate with scope
class D : public B, public C {
public:
    void show() {
        cout << B::x;  // Explicitly choose B's copy
    }
};

// Option 2: Use virtual inheritance
class B : virtual public A {};
class C : virtual public A {};
class D : public B, public C {
public:
    void show() {
        cout << x;  // OK: only one copy of A
    }
};
```

Without virtual inheritance, the diamond creates two copies of the base class. Access to shared members is ambiguous. Either disambiguate with scope resolution or use virtual inheritance to maintain a single copy.

### Not Calling Virtual Base Constructor from Most Derived Class

**Wrong:**

```
class Base {
public:
    Base(int x) { cout << "Base(" << x << ")" << endl; }
};
class Mid : virtual public Base {
public:
    Mid(int x) : Base(x) { cout << "Mid" << endl; }
};
class Leaf : public Mid {
public:
    Leaf(int x) : Mid(x) {}  // Base default constructor called!
};
```

With virtual inheritance, the most derived class (Leaf) must call the virtual base constructor directly. If it does not, the default constructor of Base is called (if one exists), which may not be intended.

**Correct:**

```
class Leaf : public Mid {
public:
    Leaf(int x) : Base(x), Mid(x) {}  // Leaf calls Base directly
};
```

In virtual inheritance, intermediate classes' calls to the virtual base constructor are ignored. Only the most derived class's call takes effect. If Leaf does not call `Base(x)`, the default `Base()` is used.

### Confusing Method Hiding with Overriding

**Wrong:**

```
class Base {
public:
    void show() { cout << "Base" << endl; }
};
class Derived : public Base {
public:
    void show() { cout << "Derived" << endl; }
};

Base* b = new Derived();
b->show();  // Prints "Base" (not overridden!)
```

Prints "Base" instead of "Derived". Without the virtual keyword, show() in Derived hides Base::show() but does not override it. The call is resolved at compile time.

**Correct:**

```
class Base {
public:
    virtual void show() { cout << "Base" << endl; }
    virtual ~Base() {}
};
class Derived : public Base {
public:
    void show() override { cout << "Derived" << endl; }
};

Base* b = new Derived();
b->show();  // Prints "Derived" (properly overridden)
delete b;
```

Hiding occurs when a derived class defines a function with the same name as a base class non-virtual function. The base version is hidden but not overridden. For polymorphism, the base function must be `virtual`.

### Wrong Constructor Order Assumption

**Wrong:**

```
class A {};
class B {};

// Declaration order: B first, then A
class C : public B, public A {
public:
    // Initializer list order does not determine construction order!
    C() : A(), B() {}  // A() listed first, but B is constructed first
};
```

Some compilers will warn: 'A' will be initialized after 'B'. The construction order is determined by the declaration order in the class definition (B, A), not the initializer list order.

**Correct:**

```
class C : public B, public A {
public:
    C() : B(), A() {}  // Match initializer list to declaration order
};
```

Base class constructors are called in the order they appear in the class definition, not the order in the initializer list. Always match your initializer list order to the declaration order to avoid confusion and compiler warnings.

## Summary

- Inheritance allows a derived class to acquire members of a base class. The syntax is class Derived : access-mode Base.
- C++ supports five types of inheritance: single, multiple, multilevel, hierarchical, and hybrid. Java does not support multiple class inheritance; C++ does.
- Public inheritance preserves base access levels (is-a). Protected inheritance makes public members protected. Private inheritance makes all inherited members private (implemented-in-terms-of).
- Constructors are called base-to-derived. Destructors are called derived-to-base. With multiple inheritance, the order follows the declaration order in the class definition.
- The diamond problem occurs when a class inherits from two classes that share a common base. Without virtual inheritance, the derived class gets two copies of the base.
- Virtual inheritance (class Derived : virtual public Base) ensures only one copy of the shared base exists. The most derived class must call the virtual base constructor.
- A derived class can override a base class method. Without the virtual keyword, this is hiding (static binding). With virtual, it is true overriding (dynamic binding).
- Use Base::method() to explicitly call a base class method from a derived class.
- Private members of a base class are never accessible in derived classes, regardless of the inheritance mode. Protected members are accessible in derived classes.
- In virtual inheritance, the virtual base class is constructed first, before any non-virtual bases. The most derived class is responsible for its initialization.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/inheritance-in-cpp/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/inheritance-in-cpp/practice/*
