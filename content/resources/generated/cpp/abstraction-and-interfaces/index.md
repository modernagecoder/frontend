---
title: "Abstract Classes and Interfaces in C++ - Pure Virtual Functions, Abstract Destructor | Modern Age Coders"
description: "Master abstract classes in C++ including pure virtual functions, interface pattern (all pure virtual), abstract vs concrete classes, multiple interface inheritance, abstract destructor pattern, and real-world design with Shape/Animal hierarchies. 52+ practice questions."
slug: abstraction-and-interfaces
canonical: https://learn.modernagecoders.com/resources/cpp/abstraction-and-interfaces/
category: "C++"
keywords: ["c++ abstract class", "pure virtual function c++", "c++ interface", "abstract vs concrete class c++", "multiple inheritance interfaces c++", "abstract destructor c++", "c++ abstraction interview questions", "c++ design patterns abstract class"]
---
# Abstract Classes, Pure Virtual Functions, and Interfaces

**Difficulty:** Advanced  
**Reading time:** 45 min  
**Chapter:** 17  
**Practice questions:** 52

## What Are Abstract Classes and Interfaces in C++?

An **abstract class** in C++ is a class that has at least one **pure virtual function**. A pure virtual function is declared with `= 0` and has no implementation in the base class (though it can optionally have one). You cannot create objects of an abstract class directly.

```
class Shape {
public:
    virtual double area() const = 0;   // Pure virtual: Shape is abstract
    virtual string name() const = 0;   // Another pure virtual
    virtual ~Shape() {}                // Virtual destructor (not pure)
};

// Shape s;  // Error: cannot instantiate abstract class

class Circle : public Shape {
    double radius;
public:
    Circle(double r) : radius(r) {}
    double area() const override { return 3.14159 * radius * radius; }
    string name() const override { return "Circle"; }
};

Circle c(5);  // OK: Circle implements all pure virtual functions
```

An **interface** in C++ is a class where *all* functions are pure virtual and there are no data members (other than possibly a virtual destructor). Unlike Java or C#, C++ does not have a dedicated `interface` keyword. Instead, the convention is to use abstract classes with only pure virtual functions.

```
// Interface pattern in C++
class Printable {
public:
    virtual void print() const = 0;
    virtual ~Printable() {}
};

class Serializable {
public:
    virtual string serialize() const = 0;
    virtual ~Serializable() {}
};

// A class can implement multiple interfaces
class Document : public Printable, public Serializable {
public:
    void print() const override { cout << "Printing document" << endl; }
    string serialize() const override { return "{\"type\":\"doc\"}"; }
};
```

A **concrete class** is a class that implements all pure virtual functions from its base classes and can be instantiated.

## Why Do Abstract Classes and Interfaces Matter?

Abstraction is one of the four pillars of Object-Oriented Programming. It lets you define a contract (what a class must do) without specifying how it does it. This separation of interface from implementation is fundamental to good software design.

### 1. Enforcing a Contract

When Arjun defines `Shape` with pure virtual `area()` and `draw()`, he guarantees that every concrete shape class (`Circle`, `Rectangle`, `Triangle`) will implement these methods. Forgetting to implement one is a compile-time error, not a runtime bug.

### 2. Enabling Polymorphism Without Default Behavior

Sometimes there is no meaningful default implementation. What should `Shape::area()` return? Zero? That is misleading. Making it pure virtual says: "there is no generic area; every shape must compute its own." This is clearer than returning a placeholder value.

### 3. Multiple Interface Inheritance

C++ supports multiple inheritance. When Kavya has separate interfaces like `Printable`, `Serializable`, and `Comparable`, a class can implement any combination. This is much more flexible than single inheritance and is the C++ answer to Java interfaces.

### 4. Framework and Plugin Architecture

Abstract classes define extension points. When Ravi writes a plugin system, the base interface defines what every plugin must provide. New plugins can be added without changing existing code. This is the Open-Closed Principle in practice.

### 5. Interview and Design Round Essential

Questions about abstract classes vs interfaces, when to use each, the diamond problem with multiple inheritance, and designing class hierarchies with abstraction appear in every OOP design interview at companies like Google, Amazon, Microsoft, and top Indian startups.

## Detailed Explanation

### 1. Pure Virtual Functions

A pure virtual function is declared with `= 0`:

```
class Animal {
public:
    virtual void sound() = 0;   // Pure virtual
    virtual void eat() = 0;     // Pure virtual
    virtual ~Animal() {}        // Virtual destructor (not pure)
};
```

Key points about pure virtual functions:

- Any class with at least one pure virtual function is abstract
- Abstract classes cannot be instantiated
- Derived classes MUST override all pure virtual functions to be concrete
- A pure virtual function CAN have a definition in the base class (the class is still abstract)
- The derived class can call the base definition using `Base::func()`

```
// Pure virtual function WITH a definition
class Base {
public:
    virtual void show() = 0;  // Still makes Base abstract
    virtual ~Base() {}
};

void Base::show() {  // Definition outside the class
    cout << "Base default implementation" << endl;
}

class Derived : public Base {
public:
    void show() override {
        Base::show();  // Can call the base definition
        cout << "Derived additional behavior" << endl;
    }
};
```

### 2. Abstract vs Concrete Classes

FeatureAbstract ClassConcrete ClassPure virtual functionsHas at least oneHas none (all implemented)InstantiationCannot create objectsCan create objectsPurposeDefine contract/interfaceProvide full implementationPointers/ReferencesCan have pointers to abstract typeCan have objects, pointers, or references

### 3. Interfaces in C++ (Convention)

C++ does not have an `interface` keyword. The convention is:

```
// Interface: ALL functions are pure virtual, no data members
class IDrawable {
public:
    virtual void draw() const = 0;
    virtual void resize(double factor) = 0;
    virtual ~IDrawable() {}
};

class IClickable {
public:
    virtual void onClick() = 0;
    virtual bool isInside(int x, int y) const = 0;
    virtual ~IClickable() {}
};
```

Naming convention: prefix with `I` (like `IDrawable`, `ISerializable`) to distinguish interfaces from abstract classes with partial implementations. This is a style choice, not a language requirement.

### 4. Implementing Multiple Interfaces

A class can inherit from multiple interface classes. This is the safe form of multiple inheritance because interfaces have no data members to cause ambiguity:

```
class Button : public IDrawable, public IClickable {
    int x, y, width, height;
public:
    Button(int x, int y, int w, int h) : x(x), y(y), width(w), height(h) {}

    void draw() const override { cout << "Drawing button at (" << x << "," << y << ")" << endl; }
    void resize(double factor) override { width *= factor; height *= factor; }
    void onClick() override { cout << "Button clicked!" << endl; }
    bool isInside(int px, int py) const override {
        return px >= x && px <= x+width && py >= y && py <= y+height;
    }
};
```

### 5. Abstract Destructor Pattern

Sometimes you want a class to be abstract but all its functions have meaningful implementations. You can make the destructor pure virtual (while still providing a definition):

```
class AbstractBase {
public:
    virtual ~AbstractBase() = 0;  // Pure virtual destructor
    void commonMethod() { cout << "Common" << endl; }
};

AbstractBase::~AbstractBase() {}  // Must provide definition!

class Concrete : public AbstractBase {
public:
    ~Concrete() override { cout << "~Concrete" << endl; }
};

// AbstractBase a;  // Error: abstract
Concrete c;         // OK
```

The pure virtual destructor MUST have a definition (outside the class) because destructors are always called in the chain. Without the definition, you get a linker error.

### 6. Partially Abstract Classes

An abstract class can have a mix of pure virtual functions, regular virtual functions, and non-virtual functions:

```
class Database {
public:
    // Pure virtual: each DB must implement
    virtual void connect(const string& url) = 0;
    virtual void query(const string& sql) = 0;
    virtual void close() = 0;

    // Regular virtual: has default but can be overridden
    virtual void logQuery(const string& sql) {
        cout << "[LOG] " << sql << endl;
    }

    // Non-virtual: same for all databases
    void printStatus() {
        cout << "Database active" << endl;
    }

    virtual ~Database() {}
};
```

### 7. When a Derived Class Does Not Implement All Pure Virtuals

If a derived class does not override all pure virtual functions, it is also abstract:

```
class Shape {
public:
    virtual double area() const = 0;
    virtual void draw() const = 0;
    virtual ~Shape() {}
};

class PartialShape : public Shape {
public:
    double area() const override { return 0; }  // Only one implemented
    // draw() is NOT implemented: PartialShape is still abstract
};

// PartialShape ps;  // Error: still abstract

class FullShape : public PartialShape {
public:
    void draw() const override { cout << "Drawing" << endl; }
};

FullShape fs;  // OK: all pure virtuals now implemented
```

### 8. Real-World Design Example: Vehicle Hierarchy

```
class IEngine {
public:
    virtual void start() = 0;
    virtual void stop() = 0;
    virtual int horsepower() const = 0;
    virtual ~IEngine() {}
};

class IElectric {
public:
    virtual int batteryLevel() const = 0;
    virtual void charge() = 0;
    virtual ~IElectric() {}
};

class PetrolEngine : public IEngine {
public:
    void start() override { cout << "Petrol engine started" << endl; }
    void stop() override { cout << "Petrol engine stopped" << endl; }
    int horsepower() const override { return 150; }
};

class ElectricCar : public IEngine, public IElectric {
    int battery;
public:
    ElectricCar() : battery(100) {}
    void start() override { cout << "Electric motor started silently" << endl; }
    void stop() override { cout << "Electric motor stopped" << endl; }
    int horsepower() const override { return 200; }
    int batteryLevel() const override { return battery; }
    void charge() override { battery = 100; cout << "Charging complete" << endl; }
};
```

## Code Examples

### Abstract Class with Pure Virtual Functions

```cpp
#include <iostream>
#include <cmath>
using namespace std;

class Shape {
public:
    virtual double area() const = 0;
    virtual double perimeter() const = 0;
    virtual string name() const = 0;
    virtual ~Shape() {}

    void describe() const {
        cout << name() << ": area=" << area() << ", perimeter=" << perimeter() << endl;
    }
};

class Circle : public Shape {
    double r;
public:
    Circle(double r) : r(r) {}
    double area() const override { return M_PI * r * r; }
    double perimeter() const override { return 2 * M_PI * r; }
    string name() const override { return "Circle"; }
};

class Rectangle : public Shape {
    double w, h;
public:
    Rectangle(double w, double h) : w(w), h(h) {}
    double area() const override { return w * h; }
    double perimeter() const override { return 2 * (w + h); }
    string name() const override { return "Rectangle"; }
};

int main() {
    Shape* shapes[] = { new Circle(5), new Rectangle(4, 6) };
    for (int i = 0; i < 2; i++) {
        shapes[i]->describe();
        delete shapes[i];
    }
    return 0;
}
```

`Shape` is abstract because it has three pure virtual functions. `Circle` and `Rectangle` are concrete because they implement all three. The non-virtual `describe()` calls the virtual functions, demonstrating that non-virtual methods in an abstract class can use virtual dispatch internally.

**Output:**

```
Circle: area=78.5398, perimeter=31.4159
Rectangle: area=24, perimeter=20
```

### Interface Pattern: Multiple Interface Inheritance

```cpp
#include <iostream>
#include <string>
using namespace std;

class IPrintable {
public:
    virtual void print() const = 0;
    virtual ~IPrintable() {}
};

class ISerializable {
public:
    virtual string serialize() const = 0;
    virtual ~ISerializable() {}
};

class IComparable {
public:
    virtual int compareTo(const IComparable& other) const = 0;
    virtual ~IComparable() {}
};

class Student : public IPrintable, public ISerializable, public IComparable {
    string name;
    int marks;
public:
    Student(string n, int m) : name(n), marks(m) {}

    void print() const override {
        cout << name << " (" << marks << ")" << endl;
    }

    string serialize() const override {
        return "{\"name\":\"" + name + "\",\"marks\":" + to_string(marks) + "}";
    }

    int compareTo(const IComparable& other) const override {
        const Student& s = dynamic_cast<const Student&>(other);
        return marks - s.marks;
    }
};

int main() {
    Student s1("Arjun", 92), s2("Kavya", 88);

    s1.print();
    s2.print();

    cout << "s1 serialized: " << s1.serialize() << endl;

    int cmp = s1.compareTo(s2);
    if (cmp > 0) cout << "Arjun scored higher" << endl;
    else if (cmp < 0) cout << "Kavya scored higher" << endl;
    else cout << "Same marks" << endl;

    return 0;
}
```

`Student` inherits from three interfaces: `IPrintable`, `ISerializable`, and `IComparable`. Each interface defines a single capability. This is the C++ equivalent of implementing multiple interfaces in Java. The class must implement all pure virtual functions from all interfaces.

**Output:**

```
Arjun (92)
Kavya (88)
s1 serialized: {"name":"Arjun","marks":92}
Arjun scored higher
```

### Pure Virtual Function WITH a Definition

```cpp
#include <iostream>
using namespace std;

class Logger {
public:
    virtual void log(const string& msg) = 0;  // Pure virtual
    virtual ~Logger() {}
};

void Logger::log(const string& msg) {
    cout << "[DEFAULT] " << msg << endl;
}

class ConsoleLogger : public Logger {
public:
    void log(const string& msg) override {
        Logger::log(msg);  // Call base definition
        cout << "[CONSOLE] " << msg << endl;
    }
};

class FileLogger : public Logger {
public:
    void log(const string& msg) override {
        cout << "[FILE] " << msg << endl;
    }
};

int main() {
    Logger* loggers[] = { new ConsoleLogger(), new FileLogger() };
    for (int i = 0; i < 2; i++) {
        loggers[i]->log("Server started");
        cout << "---" << endl;
        delete loggers[i];
    }
    return 0;
}
```

A pure virtual function CAN have a definition. `Logger::log()` is pure virtual (making Logger abstract), but it also has a body defined outside the class. `ConsoleLogger` calls `Logger::log(msg)` to use the default behavior before adding its own. `FileLogger` ignores the base definition entirely.

**Output:**

```
[DEFAULT] Server started
[CONSOLE] Server started
---
[FILE] Server started
---
```

### Abstract Destructor Pattern

```cpp
#include <iostream>
using namespace std;

class AbstractBase {
public:
    virtual ~AbstractBase() = 0;  // Pure virtual destructor
    void commonWork() { cout << "Doing common work" << endl; }
};

AbstractBase::~AbstractBase() {
    cout << "~AbstractBase" << endl;
}

class ConcreteA : public AbstractBase {
public:
    ~ConcreteA() override { cout << "~ConcreteA" << endl; }
};

class ConcreteB : public AbstractBase {
public:
    ~ConcreteB() override { cout << "~ConcreteB" << endl; }
};

int main() {
    AbstractBase* a = new ConcreteA();
    AbstractBase* b = new ConcreteB();
    a->commonWork();
    b->commonWork();
    delete a;
    cout << "---" << endl;
    delete b;
    return 0;
}
```

When you want a class to be abstract but all its methods have implementations, make the destructor pure virtual. The pure virtual destructor MUST have a definition (outside the class body) because destructors are always called in the chain. Without the definition, you get a linker error.

**Output:**

```
Doing common work
Doing common work
~ConcreteA
~AbstractBase
---
~ConcreteB
~AbstractBase
```

### Partially Abstract Derived Class

```cpp
#include <iostream>
using namespace std;

class Animal {
public:
    virtual void sound() const = 0;
    virtual void move() const = 0;
    virtual string habitat() const = 0;
    virtual ~Animal() {}
};

class DomesticAnimal : public Animal {
public:
    string habitat() const override { return "Home"; }
    // sound() and move() still pure virtual: DomesticAnimal is abstract
};

class Dog : public DomesticAnimal {
public:
    void sound() const override { cout << "Bark" << endl; }
    void move() const override { cout << "Runs on 4 legs" << endl; }
};

class Cat : public DomesticAnimal {
public:
    void sound() const override { cout << "Meow" << endl; }
    void move() const override { cout << "Walks silently" << endl; }
};

int main() {
    Animal* pets[] = { new Dog(), new Cat() };
    for (int i = 0; i < 2; i++) {
        pets[i]->sound();
        pets[i]->move();
        cout << "Habitat: " << pets[i]->habitat() << endl;
        cout << "---" << endl;
        delete pets[i];
    }
    return 0;
}
```

`DomesticAnimal` only implements `habitat()`, leaving `sound()` and `move()` pure virtual. So `DomesticAnimal` is still abstract. `Dog` and `Cat` implement the remaining pure virtual functions, making them concrete. This shows a multi-level abstraction hierarchy.

**Output:**

```
Bark
Runs on 4 legs
Habitat: Home
---
Meow
Walks silently
Habitat: Home
---
```

### Real-World Design: Plugin System with Interfaces

```cpp
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class IPlugin {
public:
    virtual string name() const = 0;
    virtual void initialize() = 0;
    virtual void execute() = 0;
    virtual void shutdown() = 0;
    virtual ~IPlugin() {}
};

class LoggingPlugin : public IPlugin {
public:
    string name() const override { return "LoggingPlugin"; }
    void initialize() override { cout << "Logger initialized" << endl; }
    void execute() override { cout << "Logging events..." << endl; }
    void shutdown() override { cout << "Logger shut down" << endl; }
};

class AuthPlugin : public IPlugin {
public:
    string name() const override { return "AuthPlugin"; }
    void initialize() override { cout << "Auth module loaded" << endl; }
    void execute() override { cout << "Authenticating user..." << endl; }
    void shutdown() override { cout << "Auth module unloaded" << endl; }
};

class PluginManager {
    vector<IPlugin*> plugins;
public:
    void addPlugin(IPlugin* p) { plugins.push_back(p); }

    void runAll() {
        for (auto* p : plugins) {
            cout << "[" << p->name() << "]" << endl;
            p->initialize();
            p->execute();
            p->shutdown();
            cout << endl;
        }
    }

    ~PluginManager() {
        for (auto* p : plugins) delete p;
    }
};

int main() {
    PluginManager mgr;
    mgr.addPlugin(new LoggingPlugin());
    mgr.addPlugin(new AuthPlugin());
    mgr.runAll();
    return 0;
}
```

`IPlugin` is a pure interface defining what every plugin must provide. `PluginManager` works with `IPlugin*` pointers and knows nothing about specific plugin types. New plugins can be added without modifying the manager. This is the Open-Closed Principle enabled by abstraction.

**Output:**

```
[LoggingPlugin]
Logger initialized
Logging events...
Logger shut down

[AuthPlugin]
Auth module loaded
Authenticating user...
Auth module unloaded
```

## Common Mistakes

### Trying to Instantiate an Abstract Class

**Wrong:**

```
class Shape {
public:
    virtual double area() const = 0;
    virtual ~Shape() {}
};

Shape s;  // Compilation error!
```

Compilation error: cannot declare variable 's' to be of abstract type 'Shape'. Shape has a pure virtual function area().

**Correct:**

```
class Shape {
public:
    virtual double area() const = 0;
    virtual ~Shape() {}
};

class Circle : public Shape {
    double r;
public:
    Circle(double r) : r(r) {}
    double area() const override { return 3.14159 * r * r; }
};

Shape* s = new Circle(5);  // OK: pointer to abstract type, concrete object
cout << s->area() << endl;
delete s;
```

Abstract classes cannot be instantiated. You can have pointers and references to an abstract type, but the actual object must be of a concrete derived class that implements all pure virtual functions.

### Forgetting to Implement All Pure Virtual Functions

**Wrong:**

```
class Animal {
public:
    virtual void sound() = 0;
    virtual void move() = 0;
    virtual ~Animal() {}
};

class Dog : public Animal {
public:
    void sound() override { cout << "Bark" << endl; }
    // move() not implemented!
};

Dog d;  // Compilation error!
```

Compilation error: cannot declare variable 'd' to be of abstract type 'Dog'. Dog does not implement move().

**Correct:**

```
class Dog : public Animal {
public:
    void sound() override { cout << "Bark" << endl; }
    void move() override { cout << "Runs" << endl; }  // Now complete
};

Dog d;  // OK
```

A derived class must implement ALL pure virtual functions from its base class to be concrete. If even one is missing, the derived class is also abstract and cannot be instantiated.

### Missing Definition for Pure Virtual Destructor

**Wrong:**

```
class Base {
public:
    virtual ~Base() = 0;  // Pure virtual destructor
};
// No definition provided!

class Derived : public Base {
public:
    ~Derived() override {}
};

Derived d;  // Linker error!
```

Linker error: undefined reference to 'Base::~Base()'. The destructor is called in the chain but has no definition.

**Correct:**

```
class Base {
public:
    virtual ~Base() = 0;
};

Base::~Base() {}  // Definition required!

class Derived : public Base {
public:
    ~Derived() override {}
};

Derived d;  // OK
```

A pure virtual destructor MUST have a definition (outside the class). Destructors are always called in the inheritance chain, so even a pure virtual destructor needs a body. Without it, the linker cannot resolve the call.

### Confusing Abstract Class with Interface

**Wrong:**

```
// This is NOT a proper interface: it has data members and implementation
class ILogger {
    string logFile;  // Data member in an "interface"!
public:
    virtual void log(const string& msg) {
        cout << msg << endl;  // Implementation in an "interface"!
    }
    virtual ~ILogger() {}
};
```

No compilation error, but this violates the interface convention. It has data members and a non-pure virtual function, making it an abstract class with partial implementation, not an interface.

**Correct:**

```
// Proper interface: only pure virtual functions and virtual destructor
class ILogger {
public:
    virtual void log(const string& msg) = 0;  // Pure virtual
    virtual void setLevel(int level) = 0;      // Pure virtual
    virtual ~ILogger() {}
};

// Abstract class with partial implementation (NOT an interface)
class AbstractLogger : public ILogger {
protected:
    int level;
public:
    AbstractLogger(int lvl) : level(lvl) {}
    void setLevel(int lvl) override { level = lvl; }
    // log() still pure virtual
};
```

An interface in C++ should have only pure virtual functions and a virtual destructor (no data members, no implementation). If you need data or partial implementation, use an abstract class that inherits from the interface.

### Slicing with Abstract Class References

**Wrong:**

```
class Shape {
public:
    virtual double area() const = 0;
    virtual ~Shape() {}
};

class Circle : public Shape {
    double r;
public:
    Circle(double r) : r(r) {}
    double area() const override { return 3.14159 * r * r; }
};

void printArea(Shape s) {  // Cannot compile!
    cout << s.area() << endl;
}
```

Compilation error: cannot declare parameter 's' to be of abstract type 'Shape'. You cannot pass an abstract class by value.

**Correct:**

```
void printArea(const Shape& s) {  // Pass by reference
    cout << s.area() << endl;
}

Circle c(5);
printArea(c);  // Works: no slicing, polymorphism preserved
```

You cannot pass an abstract class by value because that would require creating a copy of an abstract type, which is impossible. Always use references or pointers with abstract classes. This is actually a benefit: the compiler forces you to avoid slicing.

## Summary

- An abstract class has at least one pure virtual function (declared with = 0). It cannot be instantiated directly.
- A pure virtual function forces derived classes to provide an implementation. If a derived class does not implement all pure virtuals, it is also abstract.
- A pure virtual function CAN have a definition in the base class. Derived classes can call it via Base::func(). The class is still abstract.
- A concrete class implements all pure virtual functions from its base classes and can be instantiated.
- An interface in C++ is a class with only pure virtual functions and a virtual destructor. C++ does not have an interface keyword.
- Multiple interface inheritance is the safe form of multiple inheritance. Since interfaces have no data members, there is no diamond problem ambiguity.
- The abstract destructor pattern (virtual ~Base() = 0 with external definition) makes a class abstract when all its methods have implementations.
- A pure virtual destructor MUST have a definition outside the class. Destructors are always called in the chain, so the linker needs the body.
- Abstract classes can have non-virtual functions, data members, and regular virtual functions alongside pure virtual functions (partially abstract).
- You cannot pass an abstract class by value. Always use pointers or references. This naturally prevents the slicing problem.
- Interfaces enable the Open-Closed Principle: code depends on abstractions, not concrete types. New implementations can be added without changing existing code.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/abstraction-and-interfaces/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/abstraction-and-interfaces/practice/*
