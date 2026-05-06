---
title: "Polymorphism in C++ - Virtual Functions, vtable, Operator Overloading | Modern Age Coders"
description: "Master polymorphism in C++ including compile-time polymorphism (function overloading, operator overloading), runtime polymorphism (virtual functions, vtable, vptr), virtual destructors, dynamic_cast, RTTI, and the slicing problem. 58+ interview-focused practice questions."
slug: polymorphism-in-cpp
canonical: https://learn.modernagecoders.com/resources/cpp/polymorphism-in-cpp
category: "C++"
keywords: ["c++ polymorphism", "virtual functions c++", "vtable vptr c++", "operator overloading c++", "virtual destructor c++", "dynamic_cast c++", "RTTI c++", "slicing problem c++", "c++ polymorphism interview questions", "runtime polymorphism c++"]
---
# Polymorphism - Virtual Functions and Operator Overloading

**Difficulty:** Advanced  
**Reading time:** 55 min  
**Chapter:** 16  
**Practice questions:** 58

## What Is Polymorphism in C++?

**Polymorphism** means "many forms." In C++, it refers to the ability of a single function name, operator, or object reference to behave differently depending on the context. A base class pointer can point to a derived class object, and the function that gets called depends on the actual object type when virtual functions are used.

C++ supports two distinct types of polymorphism:

```
// 1. Compile-time polymorphism (Function Overloading)
class Calculator {
public:
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
};

// 2. Runtime polymorphism (Virtual Functions)
class Animal {
public:
    virtual void sound() { cout << "Some sound" << endl; }
    virtual ~Animal() {}
};
class Dog : public Animal {
public:
    void sound() override { cout << "Bark" << endl; }
};

Animal* a = new Dog();
a->sound();  // Bark (runtime decision via vtable)
delete a;    // Calls Dog destructor then Animal destructor
```

In the first case, the compiler resolves which `add` to call based on argument types. In the second case, the decision happens at runtime through a mechanism called the **vtable** (virtual table). The `virtual` keyword is what enables runtime polymorphism in C++. Without it, the base class version would always be called regardless of the actual object type.

C++ also supports **operator overloading**, which is a form of compile-time polymorphism where you redefine the meaning of operators like `+`, `-`, `==`, `<<`, and `[]` for user-defined types.

## Why Does Polymorphism Matter?

Polymorphism is one of the four pillars of Object-Oriented Programming. In C++, it is more nuanced than in Java or Python because the programmer must explicitly opt into runtime polymorphism using the `virtual` keyword, and must understand the underlying vtable mechanism.

### 1. Extensibility Without Modification

When Arjun writes a function that accepts a `Shape*` pointer, it works with `Circle`, `Rectangle`, `Triangle`, or any future shape subclass. He does not modify existing code when a new shape is added. This is the Open-Closed Principle.

### 2. The vtable Mechanism Is a Top Interview Topic

Every major tech company asks about vtable and vptr in C++ interviews. Understanding how the compiler creates a virtual function table, how each object gets a hidden vptr, and how dynamic dispatch works through this table is essential for placements at companies like Google, Microsoft, Amazon, and Flipkart.

### 3. Operator Overloading Makes User-Defined Types Feel Native

When Kavya defines a `Matrix` class and overloads `+`, `*`, and `<<`, she can write `Matrix C = A + B;` instead of `Matrix C = A.add(B);`. This makes user-defined types as intuitive as built-in types.

### 4. Resource Safety Requires Virtual Destructors

If Ravi deletes a derived class object through a base class pointer without a virtual destructor, the derived destructor never runs. This causes memory leaks and resource leaks. Understanding virtual destructors is critical for writing safe C++ code.

### 5. Competitive Programming and System Design

While competitive programming favors templates over virtual functions (to avoid vtable overhead), understanding polymorphism is essential for system design rounds, low-level design problems, and building real-world applications like game engines, GUI frameworks, and plugin architectures.

## Detailed Explanation

### 1. Compile-Time Polymorphism: Function Overloading

Function overloading allows multiple functions with the same name but different parameter lists. The compiler resolves which function to call at compile time based on argument types and count.

```
class MathUtils {
public:
    int add(int a, int b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
    double add(double a, double b) { return a + b; }
};

MathUtils m;
cout << m.add(2, 3) << endl;       // 5 (int, int)
cout << m.add(2, 3, 4) << endl;    // 9 (int, int, int)
cout << m.add(2.5, 3.5) << endl;   // 6.0 (double, double)
```

### 2. Operator Overloading

C++ allows redefining operators for user-defined types. You can overload most operators as member functions or friend functions.

```
class Complex {
    double real, imag;
public:
    Complex(double r = 0, double i = 0) : real(r), imag(i) {}

    // + operator (member function)
    Complex operator+(const Complex& other) const {
        return Complex(real + other.real, imag + other.imag);
    }

    // == operator
    bool operator==(const Complex& other) const {
        return real == other.real && imag == other.imag;
    }

    // Prefix ++
    Complex& operator++() {
        ++real;
        return *this;
    }

    // Postfix ++
    Complex operator++(int) {
        Complex temp = *this;
        ++real;
        return temp;
    }

    // << operator (must be friend, not member)
    friend ostream& operator<<(ostream& os, const Complex& c) {
        os << c.real << " + " << c.imag << "i";
        return os;
    }
};
```

Rules of operator overloading:

- Cannot overload: `::`, `.`, `.*`, `?:`, `sizeof`, `typeid`
- Cannot create new operators
- Cannot change the number of operands (binary stays binary)
- `=`, `()`, `[]`, `->` must be member functions
- `<<` and `>>` are typically overloaded as friend functions
- At least one operand must be a user-defined type

### 3. The [] and () Operators

```
class Array {
    int* data;
    int size;
public:
    Array(int n) : size(n), data(new int[n]()) {}
    ~Array() { delete[] data; }

    int& operator[](int index) {
        if (index < 0 || index >= size)
            throw out_of_range("Index out of bounds");
        return data[index];
    }
};

class Multiplier {
    int factor;
public:
    Multiplier(int f) : factor(f) {}
    int operator()(int x) const { return x * factor; }  // functor
};

Multiplier triple(3);
cout << triple(10) << endl;  // 30
```

### 4. Runtime Polymorphism: Virtual Functions

When a function is declared `virtual` in the base class, C++ uses dynamic dispatch to call the correct version based on the actual object type at runtime.

```
class Shape {
public:
    virtual double area() const { return 0; }
    virtual string name() const { return "Shape"; }
    virtual ~Shape() {}
};

class Circle : public Shape {
    double radius;
public:
    Circle(double r) : radius(r) {}
    double area() const override { return 3.14159 * radius * radius; }
    string name() const override { return "Circle"; }
};

class Rectangle : public Shape {
    double w, h;
public:
    Rectangle(double w, double h) : w(w), h(h) {}
    double area() const override { return w * h; }
    string name() const override { return "Rectangle"; }
};

Shape* s = new Circle(5);
cout << s->name() << ": " << s->area() << endl;  // Circle: 78.5398
delete s;
```

### 5. vtable and vptr Mechanism

When a class has at least one virtual function, the compiler creates a **vtable** (virtual function table) for that class. The vtable is an array of function pointers, one for each virtual function. Each object of that class contains a hidden **vptr** (virtual pointer) that points to the class's vtable.

```
// Conceptual layout:
// Shape vtable:     [&Shape::area, &Shape::name, &Shape::~Shape]
// Circle vtable:    [&Circle::area, &Circle::name, &Circle::~Circle]
// Rectangle vtable: [&Rectangle::area, &Rectangle::name, &Rectangle::~Rectangle]

// When you call s->area():
// 1. Follow s->vptr to the vtable
// 2. Look up the area() slot
// 3. Call the function pointer found there
```

This is why virtual function calls have a small overhead compared to non-virtual calls: one extra pointer dereference. Each object with virtual functions is also slightly larger (by one pointer, typically 8 bytes on 64-bit systems) due to the hidden vptr.

### 6. Virtual Destructor

If you delete a derived class object through a base class pointer, and the base class destructor is not virtual, only the base destructor runs. The derived destructor is skipped, causing resource leaks.

```
class Base {
public:
    Base() { cout << "Base constructed" << endl; }
    virtual ~Base() { cout << "Base destroyed" << endl; }
};

class Derived : public Base {
    int* data;
public:
    Derived() : data(new int[100]) { cout << "Derived constructed" << endl; }
    ~Derived() { delete[] data; cout << "Derived destroyed" << endl; }
};

Base* b = new Derived();
delete b;
// With virtual ~Base(): Derived destroyed, then Base destroyed (correct)
// Without virtual ~Base(): Only Base destroyed (memory leak!)
```

**Rule:** If a class has any virtual function, it should have a virtual destructor. If a class is designed to be a base class, always make its destructor virtual.

### 7. Pure Virtual Functions

A pure virtual function has no implementation in the base class and forces derived classes to provide one:

```
class Shape {
public:
    virtual double area() const = 0;  // pure virtual
    virtual ~Shape() {}
};
// Shape s;  // Error: cannot instantiate abstract class
```

### 8. dynamic_cast and RTTI

`dynamic_cast` provides safe downcasting at runtime. It checks whether the cast is valid using RTTI (Runtime Type Information). If the cast fails, it returns `nullptr` for pointers or throws `bad_cast` for references.

```
class Animal {
public:
    virtual ~Animal() {}
};
class Dog : public Animal {
public:
    void fetch() { cout << "Fetching" << endl; }
};
class Cat : public Animal {};

Animal* a = new Dog();
Dog* d = dynamic_cast<Dog*>(a);  // succeeds, d != nullptr
Cat* c = dynamic_cast<Cat*>(a);  // fails, c == nullptr

if (d) d->fetch();
if (c) cout << "This never prints" << endl;

// typeid (also RTTI)
cout << typeid(*a).name() << endl;  // implementation-defined, but identifies Dog
delete a;
```

`dynamic_cast` requires the base class to have at least one virtual function (i.e., it needs the vptr/vtable to work).

### 9. The Slicing Problem

When a derived class object is passed by value to a function expecting a base class parameter, the derived part is "sliced off." Only the base class portion is copied.

```
class Base {
public:
    virtual void show() { cout << "Base" << endl; }
};
class Derived : public Base {
    int extra;
public:
    Derived() : extra(42) {}
    void show() override { cout << "Derived: " << extra << endl; }
};

void display(Base b) {  // Passed by VALUE - slicing!
    b.show();  // Always prints "Base"
}

void displayCorrect(Base& b) {  // Passed by REFERENCE - no slicing
    b.show();  // Prints "Derived: 42" if b is Derived
}

Derived d;
display(d);         // Base (sliced!)
displayCorrect(d);  // Derived: 42 (correct)
```

**Rule:** Always pass polymorphic objects by pointer or reference, never by value.

### 10. override and final Keywords (C++11)

The `override` keyword explicitly marks a function as overriding a base class virtual function. If the signature does not match, the compiler reports an error. The `final` keyword prevents further overriding.

```
class Base {
public:
    virtual void foo(int x) {}
    virtual void bar() {}
};

class Derived : public Base {
public:
    void foo(int x) override {}   // OK: matches Base::foo
    // void foo(double x) override {}  // Error: no matching base function
    void bar() override final {}  // OK, but no further override allowed
};

class Derived2 : public Derived {
public:
    // void bar() override {}  // Error: bar is final in Derived
};
```

## Code Examples

### Compile-Time Polymorphism: Function Overloading

```cpp
#include <iostream>
using namespace std;

class Calculator {
public:
    int add(int a, int b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
    double add(double a, double b) { return a + b; }
    string add(string a, string b) { return a + b; }
};

int main() {
    Calculator calc;
    cout << calc.add(10, 20) << endl;
    cout << calc.add(10, 20, 30) << endl;
    cout << calc.add(2.5, 3.5) << endl;
    cout << calc.add(string("Hello"), string(" World")) << endl;
    return 0;
}
```

The `Calculator` class has four `add` methods with different parameter types or counts. The compiler picks the correct method based on argument types at compile time. This is compile-time polymorphism (static binding).

**Output:**

```
30
60
6
Hello World
```

### Operator Overloading: +, ==, <<, prefix/postfix ++

```cpp
#include <iostream>
using namespace std;

class Complex {
    double real, imag;
public:
    Complex(double r = 0, double i = 0) : real(r), imag(i) {}

    Complex operator+(const Complex& other) const {
        return Complex(real + other.real, imag + other.imag);
    }

    bool operator==(const Complex& other) const {
        return real == other.real && imag == other.imag;
    }

    Complex& operator++() {       // Prefix
        ++real;
        return *this;
    }

    Complex operator++(int) {     // Postfix
        Complex temp = *this;
        ++real;
        return temp;
    }

    friend ostream& operator<<(ostream& os, const Complex& c) {
        os << c.real << " + " << c.imag << "i";
        return os;
    }
};

int main() {
    Complex a(3, 4), b(1, 2);
    Complex c = a + b;
    cout << "a + b = " << c << endl;
    cout << "a == b: " << (a == b) << endl;

    cout << "Before ++: " << a << endl;
    ++a;
    cout << "After prefix ++: " << a << endl;
    Complex old = a++;
    cout << "Postfix ++ returned: " << old << endl;
    cout << "After postfix ++: " << a << endl;
    return 0;
}
```

This demonstrates overloading `+` (binary), `==` (comparison), prefix `++` (returns reference), and postfix `++` (takes dummy `int` parameter, returns copy). The `<<` operator must be a friend function because the left operand is `ostream`, not our class.

**Output:**

```
a + b = 4 + 6i
a == b: 0
Before ++: 3 + 4i
After prefix ++: 4 + 4i
Postfix ++ returned: 4 + 4i
After postfix ++: 5 + 4i
```

### Runtime Polymorphism: Virtual Functions and Dynamic Dispatch

```cpp
#include <iostream>
using namespace std;

class Animal {
public:
    virtual void sound() const { cout << "Some generic sound" << endl; }
    virtual ~Animal() {}
};

class Dog : public Animal {
public:
    void sound() const override { cout << "Bark" << endl; }
};

class Cat : public Animal {
public:
    void sound() const override { cout << "Meow" << endl; }
};

class Cow : public Animal {
public:
    void sound() const override { cout << "Moo" << endl; }
};

int main() {
    Animal* animals[] = { new Dog(), new Cat(), new Cow(), new Animal() };
    for (int i = 0; i < 4; i++) {
        animals[i]->sound();
    }
    for (int i = 0; i < 4; i++) {
        delete animals[i];
    }
    return 0;
}
```

All pointers are of type `Animal*`, but the actual objects are `Dog`, `Cat`, `Cow`, and `Animal`. Because `sound()` is virtual, the vtable mechanism ensures the correct overridden version is called at runtime. The virtual destructor ensures proper cleanup.

**Output:**

```
Bark
Meow
Moo
Some generic sound
```

### Virtual Destructor: Why It Is Needed

```cpp
#include <iostream>
using namespace std;

class Base {
public:
    Base() { cout << "Base constructed" << endl; }
    virtual ~Base() { cout << "Base destroyed" << endl; }
};

class Derived : public Base {
    int* data;
public:
    Derived() : data(new int[1000]) {
        cout << "Derived constructed (allocated 1000 ints)" << endl;
    }
    ~Derived() {
        delete[] data;
        cout << "Derived destroyed (freed memory)" << endl;
    }
};

int main() {
    cout << "--- Deleting through base pointer ---" << endl;
    Base* b = new Derived();
    delete b;  // Both destructors run because ~Base is virtual

    cout << "\n--- Deleting directly ---" << endl;
    Derived* d = new Derived();
    delete d;
    return 0;
}
```

With `virtual ~Base()`, deleting a `Derived` object through a `Base*` pointer correctly calls both destructors. Without the virtual keyword, only `~Base()` would run, leaking the dynamically allocated `data` array. This is one of the most common memory leak causes in C++.

**Output:**

```
--- Deleting through base pointer ---
Base constructed
Derived constructed (allocated 1000 ints)
Derived destroyed (freed memory)
Base destroyed

--- Deleting directly ---
Base constructed
Derived constructed (allocated 1000 ints)
Derived destroyed (freed memory)
Base destroyed
```

### dynamic_cast for Safe Downcasting and RTTI

```cpp
#include <iostream>
#include <typeinfo>
using namespace std;

class Vehicle {
public:
    virtual void start() { cout << "Vehicle starts" << endl; }
    virtual ~Vehicle() {}
};

class Car : public Vehicle {
public:
    void start() override { cout << "Car starts with key" << endl; }
    void openTrunk() { cout << "Trunk opened" << endl; }
};

class Bike : public Vehicle {
public:
    void start() override { cout << "Bike kick-started" << endl; }
    void doWheelie() { cout << "Wheelie!" << endl; }
};

void process(Vehicle* v) {
    v->start();
    cout << "Type: " << typeid(*v).name() << endl;

    if (Car* c = dynamic_cast<Car*>(v)) {
        c->openTrunk();
    } else if (Bike* b = dynamic_cast<Bike*>(v)) {
        b->doWheelie();
    }
}

int main() {
    Vehicle* v1 = new Car();
    Vehicle* v2 = new Bike();
    Vehicle* v3 = new Vehicle();

    process(v1);
    cout << "---" << endl;
    process(v2);
    cout << "---" << endl;
    process(v3);

    delete v1;
    delete v2;
    delete v3;
    return 0;
}
```

`dynamic_cast` safely downcasts at runtime. If the actual object does not match the target type, it returns `nullptr` for pointers. `typeid(*v).name()` returns an implementation-defined name of the actual type. Both `dynamic_cast` and `typeid` are part of RTTI and require at least one virtual function in the base class.

**Output:**

```
Car starts with key
Type: 3Car
Trunk opened
---
Bike kick-started
Type: 4Bike
Wheelie!
---
Vehicle starts
Type: 7Vehicle
```

### The Slicing Problem

```cpp
#include <iostream>
using namespace std;

class Base {
public:
    virtual void show() const { cout << "Base::show" << endl; }
    virtual ~Base() {}
};

class Derived : public Base {
    int value;
public:
    Derived(int v) : value(v) {}
    void show() const override { cout << "Derived::show, value=" << value << endl; }
};

void byValue(Base b) {
    b.show();  // Always Base::show (sliced!)
}

void byReference(const Base& b) {
    b.show();  // Correct polymorphic call
}

void byPointer(const Base* b) {
    b->show();  // Correct polymorphic call
}

int main() {
    Derived d(42);

    cout << "Pass by value (slicing):" << endl;
    byValue(d);

    cout << "Pass by reference (correct):" << endl;
    byReference(d);

    cout << "Pass by pointer (correct):" << endl;
    byPointer(&d);

    return 0;
}
```

When `Derived` is passed by value to a function expecting `Base`, the derived part (including `value`) is sliced off. The copy constructor copies only the `Base` portion. Passing by reference or pointer preserves the full object and enables polymorphism. This is a very common C++ interview question.

**Output:**

```
Pass by value (slicing):
Base::show
Pass by reference (correct):
Derived::show, value=42
Pass by pointer (correct):
Derived::show, value=42
```

### Overloading [] and () Operators

```cpp
#include <iostream>
#include <stdexcept>
using namespace std;

class SafeArray {
    int* data;
    int size;
public:
    SafeArray(int n) : size(n), data(new int[n]()) {}
    ~SafeArray() { delete[] data; }

    int& operator[](int index) {
        if (index < 0 || index >= size)
            throw out_of_range("Index out of bounds");
        return data[index];
    }

    int getSize() const { return size; }
};

class Multiplier {
    int factor;
public:
    Multiplier(int f) : factor(f) {}
    int operator()(int x) const { return x * factor; }
};

int main() {
    SafeArray arr(5);
    for (int i = 0; i < 5; i++) arr[i] = i * 10;
    for (int i = 0; i < 5; i++) cout << arr[i] << " ";
    cout << endl;

    try {
        arr[10] = 99;  // Throws out_of_range
    } catch (const out_of_range& e) {
        cout << "Error: " << e.what() << endl;
    }

    Multiplier triple(3);
    Multiplier square(0);  // Not really square, just demonstrating ()
    cout << "triple(7) = " << triple(7) << endl;
    cout << "triple(12) = " << triple(12) << endl;
    return 0;
}
```

The `[]` operator provides array-like access with bounds checking. The `()` operator creates a functor (function object), which is heavily used in STL algorithms. Both must be member functions. Returning `int&` from `[]` allows both reading and writing.

**Output:**

```
0 10 20 30 40 
Error: Index out of bounds
triple(7) = 21
triple(12) = 36
```

## Common Mistakes

### Forgetting the virtual Keyword (No Polymorphism)

**Wrong:**

```
class Base {
public:
    void show() { cout << "Base" << endl; }  // NOT virtual
};
class Derived : public Base {
public:
    void show() { cout << "Derived" << endl; }
};

Base* b = new Derived();
b->show();  // Prints "Base" (wrong!)
delete b;
```

Prints "Base" instead of "Derived". Without virtual, the call is resolved at compile time based on the pointer type (Base*), not the actual object type.

**Correct:**

```
class Base {
public:
    virtual void show() { cout << "Base" << endl; }  // virtual!
    virtual ~Base() {}
};
class Derived : public Base {
public:
    void show() override { cout << "Derived" << endl; }
};

Base* b = new Derived();
b->show();  // Prints "Derived" (correct)
delete b;
```

Without the `virtual` keyword, C++ uses static binding. The function called depends on the pointer/reference type, not the object type. Add `virtual` to enable dynamic dispatch via the vtable.

### Missing Virtual Destructor (Memory Leak)

**Wrong:**

```
class Base {
public:
    ~Base() { cout << "~Base" << endl; }  // NOT virtual
};
class Derived : public Base {
    int* arr;
public:
    Derived() : arr(new int[100]) {}
    ~Derived() { delete[] arr; cout << "~Derived" << endl; }
};

Base* b = new Derived();
delete b;  // Only ~Base runs. ~Derived is skipped. Memory leak!
```

Only "~Base" prints. The Derived destructor never runs, so the int[100] array is leaked. This is undefined behavior.

**Correct:**

```
class Base {
public:
    virtual ~Base() { cout << "~Base" << endl; }
};
class Derived : public Base {
    int* arr;
public:
    Derived() : arr(new int[100]) {}
    ~Derived() { delete[] arr; cout << "~Derived" << endl; }
};

Base* b = new Derived();
delete b;  // ~Derived then ~Base. No leak.
```

If any class has virtual functions or is intended as a base class, its destructor must be virtual. Otherwise, deleting a derived object through a base pointer causes undefined behavior and likely memory/resource leaks.

### Object Slicing When Passing by Value

**Wrong:**

```
class Shape {
public:
    virtual void draw() { cout << "Shape" << endl; }
};
class Circle : public Shape {
public:
    void draw() override { cout << "Circle" << endl; }
};

void render(Shape s) {  // Pass by value: slicing!
    s.draw();
}

Circle c;
render(c);  // Prints "Shape" (wrong!)
```

Prints "Shape" instead of "Circle". The Circle object is sliced to a Shape when copied by value.

**Correct:**

```
void render(const Shape& s) {  // Pass by reference
    s.draw();
}

Circle c;
render(c);  // Prints "Circle" (correct)
```

Passing a derived object by value to a base class parameter copies only the base portion. The derived data and vtable pointer are lost. Always use references or pointers for polymorphic parameters.

### Confusing Prefix and Postfix ++ Operator Overloading

**Wrong:**

```
class Counter {
    int val;
public:
    Counter(int v) : val(v) {}
    Counter operator++() {     // Intended as prefix
        Counter temp = *this;  // Wrong: this is postfix logic
        val++;
        return temp;
    }
};
```

The prefix ++ should return the incremented object by reference, not a copy of the old value. This code behaves like postfix ++.

**Correct:**

```
class Counter {
    int val;
public:
    Counter(int v) : val(v) {}

    Counter& operator++() {      // Prefix: increment, return *this
        ++val;
        return *this;
    }

    Counter operator++(int) {    // Postfix: save old, increment, return old
        Counter temp = *this;
        ++val;
        return temp;
    }
};
```

Prefix `++` takes no parameters and returns `*this` by reference. Postfix `++` takes a dummy `int` parameter and returns a copy of the old value. Getting these mixed up is a common interview mistake.

### Using dynamic_cast Without Virtual Functions

**Wrong:**

```
class Base {
public:
    void show() { cout << "Base" << endl; }
    // No virtual functions!
};
class Derived : public Base {};

Base* b = new Derived();
Derived* d = dynamic_cast<Derived*>(b);  // Compilation error!
```

Compilation error: 'Base' is not polymorphic. dynamic_cast requires the source type to have at least one virtual function.

**Correct:**

```
class Base {
public:
    virtual void show() { cout << "Base" << endl; }
    virtual ~Base() {}
};
class Derived : public Base {};

Base* b = new Derived();
Derived* d = dynamic_cast<Derived*>(b);  // OK: Base is polymorphic
if (d) cout << "Cast succeeded" << endl;
delete b;
```

`dynamic_cast` relies on RTTI, which requires a vtable. A class must have at least one virtual function for `dynamic_cast` to work. Without it, use `static_cast` (but without runtime safety).

### Overloading << as a Member Function

**Wrong:**

```
class Point {
    int x, y;
public:
    Point(int x, int y) : x(x), y(y) {}
    ostream& operator<<(ostream& os) {  // Member function
        os << "(" << x << ", " << y << ")";
        return os;
    }
};

Point p(3, 4);
cout << p;  // Error! This calls cout.operator<<(p), not p.operator<<(cout)
```

Compilation error. When << is a member function of Point, the left operand must be Point: p << cout works but cout << p does not.

**Correct:**

```
class Point {
    int x, y;
public:
    Point(int x, int y) : x(x), y(y) {}
    friend ostream& operator<<(ostream& os, const Point& p) {
        os << "(" << p.x << ", " << p.y << ")";
        return os;
    }
};

Point p(3, 4);
cout << p;  // Works: calls operator<<(cout, p)
```

The `<<` and `>>` operators must be non-member (usually friend) functions because the left operand is `ostream`/`istream`, not your class. As a member function, the left operand would have to be your class object.

## Summary

- C++ supports two types of polymorphism: compile-time (function overloading, operator overloading) and runtime (virtual functions).
- Function overloading allows multiple functions with the same name but different parameter lists. The compiler resolves which to call at compile time.
- Operator overloading lets you redefine operators (+, -, ==, <<, >>, [], (), ++, etc.) for user-defined types. You cannot overload ::, ., .*, ?:, sizeof, or typeid.
- The << and >> operators must be overloaded as friend (non-member) functions. =, (), [], and -> must be member functions.
- Prefix ++ returns *this by reference (no parameter). Postfix ++ takes a dummy int parameter and returns a copy of the old value.
- Runtime polymorphism requires the virtual keyword. Without it, function calls are resolved at compile time based on the pointer/reference type.
- The vtable is a per-class array of function pointers for virtual functions. Each object with virtual functions has a hidden vptr pointing to its class's vtable. This adds one pointer of overhead per object.
- A virtual destructor is mandatory when deleting derived objects through base pointers. Without it, the derived destructor is skipped, causing memory leaks and undefined behavior.
- dynamic_cast provides safe downcasting at runtime. It returns nullptr for failed pointer casts and throws bad_cast for failed reference casts. It requires RTTI (at least one virtual function).
- The slicing problem occurs when a derived object is passed by value to a base parameter. The derived part is sliced off. Always use references or pointers for polymorphic parameters.
- The override keyword (C++11) ensures a function actually overrides a base class virtual function. The final keyword prevents further overriding.
- typeid (from ) returns type information at runtime. It works with polymorphic types (those with virtual functions) to identify the actual object type.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/polymorphism-in-cpp/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/polymorphism-in-cpp/practice/*
