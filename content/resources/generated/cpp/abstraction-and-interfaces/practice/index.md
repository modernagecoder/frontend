---
title: "Practice: Abstract Classes, Pure Virtual Functions, and Interfaces"
description: "52 practice problems for Abstract Classes, Pure Virtual Functions, and Interfaces in C++"
slug: abstraction-and-interfaces-practice
canonical: https://learn.modernagecoders.com/resources/cpp/abstraction-and-interfaces/practice/
category: "C++"
---
# Practice: Abstract Classes, Pure Virtual Functions, and Interfaces

**Total questions:** 52

## Topic-Specific Questions

### Q1. [Easy] What happens when you try to compile this code?

```
class Animal {
public:
    virtual void sound() = 0;
    virtual ~Animal() {}
};

int main() {
    Animal a;
    return 0;
}
```

*Hint:* Animal has a pure virtual function. Can you create an object of it?

**Answer:** Compilation error: cannot declare variable 'a' to be of abstract type 'Animal'.

`Animal` is abstract because it has a pure virtual function `sound()`. Abstract classes cannot be instantiated. You need a concrete derived class that implements `sound()`.

### Q2. [Easy] What is the output?

```
#include 
using namespace std;
class Shape {
public:
    virtual double area() const = 0;
    virtual ~Shape() {}
};
class Square : public Shape {
    double side;
public:
    Square(double s) : side(s) {}
    double area() const override { return side * side; }
};
int main() {
    Shape* s = new Square(5);
    cout << s->area() << endl;
    delete s;
    return 0;
}
```

*Hint:* Square implements area(), so it is concrete. The pointer type is Shape*.

**Answer:** `25`

`Square` implements `area()`, making it concrete. Through the `Shape*` pointer, the vtable dispatches to `Square::area()`, which returns 5 * 5 = 25.

### Q3. [Easy] Does this code compile?

```
class Printable {
public:
    virtual void print() const = 0;
    virtual ~Printable() {}
};
class Report : public Printable {
    // print() not implemented
};
int main() {
    Report r;
    return 0;
}
```

*Hint:* Report does not implement print(). Is it still abstract?

**Answer:** Compilation error: cannot declare variable 'r' to be of abstract type 'Report'.

`Report` inherits `print()` as pure virtual from `Printable` but does not implement it. So `Report` is also abstract and cannot be instantiated.

### Q4. [Easy] What is the output?

```
#include 
using namespace std;
class Vehicle {
public:
    virtual void start() = 0;
    void honk() { cout << "Beep!" << endl; }
    virtual ~Vehicle() {}
};
class Car : public Vehicle {
public:
    void start() override { cout << "Car started" << endl; }
};
int main() {
    Car c;
    c.start();
    c.honk();
    return 0;
}
```

*Hint:* honk() is a non-virtual function in the abstract class. Car inherits it.

**Answer:** `Car started`
`Beep!`

`Car` implements `start()` and inherits the non-virtual `honk()` from `Vehicle`. Abstract classes can have non-virtual functions with implementations.

### Q5. [Easy] What is the output?

```
#include 
using namespace std;
class IGreeter {
public:
    virtual void greet(const string& name) const = 0;
    virtual ~IGreeter() {}
};
class FormalGreeter : public IGreeter {
public:
    void greet(const string& name) const override {
        cout << "Good morning, " << name << endl;
    }
};
class CasualGreeter : public IGreeter {
public:
    void greet(const string& name) const override {
        cout << "Hey, " << name << "!" << endl;
    }
};
int main() {
    IGreeter* g1 = new FormalGreeter();
    IGreeter* g2 = new CasualGreeter();
    g1->greet("Arjun");
    g2->greet("Kavya");
    delete g1; delete g2;
    return 0;
}
```

*Hint:* Two concrete classes implementing the same interface, called through interface pointers.

**Answer:** `Good morning, Arjun`
`Hey, Kavya!`

Both classes implement the `IGreeter` interface. Through `IGreeter*` pointers, virtual dispatch calls the correct `greet()` for each concrete type.

### Q6. [Medium] What is the output?

```
#include 
using namespace std;
class Base {
public:
    virtual void show() = 0;
    virtual ~Base() {}
};
void Base::show() {
    cout << "Base default" << endl;
}
class Derived : public Base {
public:
    void show() override {
        Base::show();
        cout << "Derived extra" << endl;
    }
};
int main() {
    Derived d;
    d.show();
    return 0;
}
```

*Hint:* A pure virtual function can have a definition. Derived calls it with Base::show().

**Answer:** `Base default`
`Derived extra`

Even though `Base::show()` is pure virtual, it has a definition outside the class. `Derived::show()` explicitly calls `Base::show()` to use the default behavior, then adds its own.

### Q7. [Medium] What is the output?

```
#include 
using namespace std;
class AbstractBase {
public:
    virtual ~AbstractBase() = 0;
    void work() { cout << "Working" << endl; }
};
AbstractBase::~AbstractBase() { cout << "~AbstractBase" << endl; }

class Concrete : public AbstractBase {
public:
    ~Concrete() override { cout << "~Concrete" << endl; }
};
int main() {
    AbstractBase* p = new Concrete();
    p->work();
    delete p;
    return 0;
}
```

*Hint:* Pure virtual destructor makes the class abstract. It still needs a definition.

**Answer:** `Working`
`~Concrete`
`~AbstractBase`

The pure virtual destructor makes `AbstractBase` abstract. `work()` is a regular non-virtual function. On `delete p`, the destructor chain runs: `~Concrete()` first, then `~AbstractBase()`.

### Q8. [Medium] What is the output?

```
#include 
using namespace std;
class IPrint {
public:
    virtual void print() const = 0;
    virtual ~IPrint() {}
};
class ISave {
public:
    virtual void save() const = 0;
    virtual ~ISave() {}
};
class Doc : public IPrint, public ISave {
    string content;
public:
    Doc(string c) : content(c) {}
    void print() const override { cout << "Print: " << content << endl; }
    void save() const override { cout << "Save: " << content << endl; }
};
int main() {
    Doc d("Hello World");
    IPrint* p = &d;
    ISave* s = &d;
    p->print();
    s->save();
    return 0;
}
```

*Hint:* Doc implements two interfaces. Each interface pointer can access only its own methods.

**Answer:** `Print: Hello World`
`Save: Hello World`

`Doc` implements both `IPrint` and `ISave`. Through an `IPrint*` pointer, only `print()` is accessible. Through an `ISave*` pointer, only `save()` is accessible. Both resolve to `Doc`'s implementations.

### Q9. [Medium] What is the output?

```
#include 
using namespace std;
class Animal {
public:
    virtual void sound() const = 0;
    virtual void move() const = 0;
    virtual ~Animal() {}
};
class Pet : public Animal {
public:
    void move() const override { cout << "Walks at home" << endl; }
};
class Dog : public Pet {
public:
    void sound() const override { cout << "Bark" << endl; }
};
int main() {
    Dog d;
    d.sound();
    d.move();
    return 0;
}
```

*Hint:* Pet implements move() but not sound(). Dog implements sound(). Together, all pure virtuals are covered.

**Answer:** `Bark`
`Walks at home`

`Pet` implements `move()` from `Animal` but not `sound()`, so `Pet` is still abstract. `Dog` implements `sound()` and inherits `move()` from `Pet`. All pure virtuals are now implemented, so `Dog` is concrete.

### Q10. [Hard] What is the output?

```
#include 
using namespace std;
class A {
public:
    virtual void f() = 0;
    virtual ~A() {}
};
void A::f() { cout << "A::f" << endl; }

class B : public A {
public:
    void f() override { cout << "B::f" << endl; }
};
class C : public A {
public:
    void f() override {
        A::f();
        cout << "C::f" << endl;
    }
};
int main() {
    A* arr[] = { new B(), new C() };
    for (int i = 0; i < 2; i++) {
        arr[i]->f();
        cout << "---" << endl;
        delete arr[i];
    }
    return 0;
}
```

*Hint:* B ignores A::f(). C calls A::f() explicitly before adding its own output.

**Answer:** `B::f`
`---`
`A::f`
`C::f`
`---`

`B::f()` provides its own implementation, ignoring the base definition. `C::f()` explicitly calls `A::f()` first, then adds its own output. Both are valid ways to override a pure virtual function that has a definition.

### Q11. [Hard] Does this code compile? If so, what is the output?

```
#include 
using namespace std;
class Shape {
public:
    virtual double area() const = 0;
    virtual ~Shape() {}
};
class Circle : public Shape {
    double r;
public:
    Circle(double r) : r(r) {}
    double area() const override { return 3.14 * r * r; }
};
void printArea(Shape s) {
    cout << s.area() << endl;
}
int main() {
    Circle c(5);
    printArea(c);
    return 0;
}
```

*Hint:* printArea takes Shape by value. Can you copy an abstract type?

**Answer:** Compilation error: cannot declare parameter 's' to be of abstract type 'Shape'.

You cannot pass an abstract class by value because that would require creating a `Shape` object, which is impossible. Change the parameter to `const Shape&` or `const Shape*` to fix this.

### Q12. [Hard] What is the output?

```
#include 
using namespace std;
class IEngine {
public:
    virtual void start() = 0;
    virtual ~IEngine() {}
};
class IElectric {
public:
    virtual int battery() const = 0;
    virtual ~IElectric() {}
};
class HybridCar : public IEngine, public IElectric {
public:
    void start() override { cout << "Hybrid started" << endl; }
    int battery() const override { return 85; }
};
int main() {
    HybridCar h;
    IEngine* e = &h;
    IElectric* el = &h;
    e->start();
    cout << "Battery: " << el->battery() << "%" << endl;
    return 0;
}
```

*Hint:* HybridCar implements two interfaces. Each pointer accesses only its interface's methods.

**Answer:** `Hybrid started`
`Battery: 85%`

`HybridCar` implements both `IEngine` and `IElectric`. The `IEngine*` pointer calls `start()`, and the `IElectric*` pointer calls `battery()`. This demonstrates safe multiple interface inheritance.

### Q13. [Hard] What is the output?

```
#include 
using namespace std;
class Base {
public:
    virtual void f() { cout << "Base::f" << endl; }
    virtual void g() = 0;
    virtual ~Base() {}
};
class Mid : public Base {
public:
    void g() override { cout << "Mid::g" << endl; }
};
class Leaf : public Mid {
public:
    void f() override { cout << "Leaf::f" << endl; }
};
int main() {
    Base* b = new Leaf();
    b->f();
    b->g();
    delete b;
    return 0;
}
```

*Hint:* f() is virtual (not pure) in Base, overridden in Leaf. g() is pure virtual in Base, implemented in Mid, inherited by Leaf.

**Answer:** `Leaf::f`
`Mid::g`

`b->f()` dispatches to `Leaf::f()` because `Leaf` overrides it. `b->g()` dispatches to `Mid::g()` because `Leaf` does not override it and inherits `Mid`'s implementation.

### Q14. [Hard] What is the output?

```
#include 
using namespace std;
class Shape {
public:
    virtual void draw() const = 0;
    virtual ~Shape() { cout << "~Shape" << endl; }
};
class Circle : public Shape {
public:
    void draw() const override { cout << "Circle" << endl; }
    ~Circle() { cout << "~Circle" << endl; }
};
class ColoredCircle : public Circle {
    string color;
public:
    ColoredCircle(string c) : color(c) {}
    void draw() const override { cout << color << " Circle" << endl; }
    ~ColoredCircle() { cout << "~ColoredCircle" << endl; }
};
int main() {
    Shape* s = new ColoredCircle("Red");
    s->draw();
    delete s;
    return 0;
}
```

*Hint:* Three-level hierarchy. Virtual destructor. All three destructors should run.

**Answer:** `Red Circle`
`~ColoredCircle`
`~Circle`
`~Shape`

`s->draw()` calls `ColoredCircle::draw()` via vtable. On `delete s`, the virtual destructor chain runs in reverse order: `~ColoredCircle`, then `~Circle`, then `~Shape`.

## Mixed Questions

### Q1. [Easy] What makes a class abstract in C++?

*Hint:* Think about pure virtual functions.

**Answer:** A class is abstract if it has at least one pure virtual function (declared with = 0). An abstract class cannot be instantiated directly. Only concrete derived classes that implement all pure virtual functions can be instantiated.

The pure virtual function declaration `virtual void func() = 0;` is what makes a class abstract. There is no `abstract` keyword in C++.

### Q2. [Easy] How do you create an interface in C++?

*Hint:* C++ does not have an interface keyword.

**Answer:** In C++, an interface is created by writing a class with only pure virtual functions and a virtual destructor, with no data members. By convention, interface names are often prefixed with 'I' (e.g., IDrawable, ISerializable).

Unlike Java and C#, C++ has no `interface` keyword. The pattern is to use an abstract class with all pure virtual functions and no data members. This allows multiple inheritance without the diamond problem's data ambiguity.

### Q3. [Easy] What is the output?

```
#include 
using namespace std;
class Calculator {
public:
    virtual int compute(int a, int b) const = 0;
    virtual ~Calculator() {}
};
class Adder : public Calculator {
public:
    int compute(int a, int b) const override { return a + b; }
};
class Multiplier : public Calculator {
public:
    int compute(int a, int b) const override { return a * b; }
};
int main() {
    Calculator* c1 = new Adder();
    Calculator* c2 = new Multiplier();
    cout << c1->compute(3, 4) << endl;
    cout << c2->compute(3, 4) << endl;
    delete c1; delete c2;
    return 0;
}
```

*Hint:* Two concrete classes implementing the same abstract interface.

**Answer:** `7`
`12`

`Adder::compute(3, 4)` returns 3 + 4 = 7. `Multiplier::compute(3, 4)` returns 3 * 4 = 12. Both are called through `Calculator*` pointers via virtual dispatch.

### Q4. [Medium] What is the output?

```
#include 
using namespace std;
class A {
public:
    virtual void f() = 0;
    void g() { cout << "A::g calls f: "; f(); }
    virtual ~A() {}
};
class B : public A {
public:
    void f() override { cout << "B::f" << endl; }
};
int main() {
    B b;
    b.g();
    return 0;
}
```

*Hint:* g() is non-virtual in A. It calls f() which is virtual. Which f() runs?

**Answer:** `A::g calls f: B::f`

`b.g()` calls the inherited `A::g()`. Inside `g()`, `f()` is called on `this`. Since the actual object is `B` and `f()` is virtual, `B::f()` runs. This is a common pattern: non-virtual methods in abstract classes calling pure virtual methods.

### Q5. [Medium] Can a pure virtual function have a definition in C++? If so, how is it called?

*Hint:* Think about providing a default implementation that derived classes can optionally use.

**Answer:** Yes, a pure virtual function can have a definition (body) provided outside the class. The class is still abstract and cannot be instantiated. Derived classes can call the base definition using Base::func(). This allows providing optional default behavior while still forcing derived classes to override.

The definition must be outside the class body (e.g., `void Base::func() { ... }`). A derived class calls it with `Base::func()`. This is useful when most derived classes want the default behavior plus something extra.

### Q6. [Medium] What is the output?

```
#include 
using namespace std;
class Shape {
public:
    virtual double area() const = 0;
    virtual ~Shape() {}
    bool isLargerThan(const Shape& other) const {
        return area() > other.area();
    }
};
class Circle : public Shape {
    double r;
public:
    Circle(double r) : r(r) {}
    double area() const override { return 3.14 * r * r; }
};
class Square : public Shape {
    double s;
public:
    Square(double s) : s(s) {}
    double area() const override { return s * s; }
};
int main() {
    Circle c(5);
    Square sq(8);
    cout << c.isLargerThan(sq) << endl;
    cout << sq.isLargerThan(c) << endl;
    return 0;
}
```

*Hint:* isLargerThan is non-virtual and calls the virtual area() on both this and other.

**Answer:** `1`
`0`

Circle area = 3.14 * 25 = 78.5. Square area = 64. `c.isLargerThan(sq)` compares 78.5 > 64, which is true (1). `sq.isLargerThan(c)` compares 64 > 78.5, which is false (0). The non-virtual `isLargerThan` calls virtual `area()` on both objects.

### Q7. [Medium] What is the abstract destructor pattern and when would you use it?

*Hint:* Think about a class where all methods have implementations but you still want it to be abstract.

**Answer:** The abstract destructor pattern declares the destructor as pure virtual (virtual ~Base() = 0) while providing a definition outside the class. This makes the class abstract even when all other methods have implementations. You use it when you want to prevent direct instantiation of a base class that has no pure virtual behavior methods.

The pure virtual destructor MUST have a definition because destructors are always called in the chain. Without the definition, you get a linker error. This pattern is useful for base classes in frameworks where you want to enforce inheritance.

### Q8. [Hard] What is the output?

```
#include 
using namespace std;
class ILog {
public:
    virtual void log(const string& msg) const = 0;
    virtual ~ILog() {}
};
class INotify {
public:
    virtual void notify(const string& msg) const = 0;
    virtual ~INotify() {}
};
class Service : public ILog, public INotify {
public:
    void log(const string& msg) const override {
        cout << "[LOG] " << msg << endl;
    }
    void notify(const string& msg) const override {
        cout << "[NOTIFY] " << msg << endl;
    }
};
void doLog(const ILog& logger) { logger.log("System started"); }
void doNotify(const INotify& notifier) { notifier.notify("Alert!"); }
int main() {
    Service s;
    doLog(s);
    doNotify(s);
    return 0;
}
```

*Hint:* Service implements two interfaces. Each function accepts a different interface reference.

**Answer:** `[LOG] System started`
`[NOTIFY] Alert!`

`Service` implements both `ILog` and `INotify`. `doLog()` accepts an `ILog&` reference and calls `log()`. `doNotify()` accepts an `INotify&` reference and calls `notify()`. The same `Service` object satisfies both.

### Q9. [Hard] What is the output?

```
#include 
using namespace std;
class Base {
public:
    virtual void action() = 0;
    virtual ~Base() = 0;
};
Base::~Base() { cout << "~Base" << endl; }
void Base::action() { cout << "Base::action" << endl; }

class Mid : public Base {
public:
    void action() override {
        Base::action();
        cout << "Mid::action" << endl;
    }
    ~Mid() override { cout << "~Mid" << endl; }
};
class Leaf : public Mid {
public:
    void action() override {
        Mid::action();
        cout << "Leaf::action" << endl;
    }
    ~Leaf() override { cout << "~Leaf" << endl; }
};
int main() {
    Base* p = new Leaf();
    p->action();
    delete p;
    return 0;
}
```

*Hint:* Each level calls the parent's action() before adding its own. The destructor chain runs in reverse.

**Answer:** `Base::action`
`Mid::action`
`Leaf::action`
`~Leaf`
`~Mid`
`~Base`

`Leaf::action()` calls `Mid::action()`, which calls `Base::action()`. So the output chains upward. On `delete p`, destructors run downward: `~Leaf`, `~Mid`, `~Base`.

### Q10. [Hard] Does this code compile?

```
#include 
using namespace std;
class IComparable {
public:
    virtual bool lessThan(const IComparable& other) const = 0;
    virtual ~IComparable() {}
};
class Score : public IComparable {
    int val;
public:
    Score(int v) : val(v) {}
    bool lessThan(const IComparable& other) const override {
        const Score& s = dynamic_cast(other);
        return val < s.val;
    }
};
int main() {
    Score a(85), b(92);
    cout << a.lessThan(b) << endl;
    cout << b.lessThan(a) << endl;
    return 0;
}
```

*Hint:* dynamic_cast on a reference throws bad_cast on failure. Here both are Score objects.

**Answer:** `1`
`0`

Yes, it compiles and runs. `a.lessThan(b)`: 85 < 92 is true (1). `b.lessThan(a)`: 92 < 85 is false (0). The `dynamic_cast` succeeds because both objects are `Score`.

### Q11. [Hard] Why is multiple inheritance of interfaces safer than multiple inheritance of concrete classes?

*Hint:* Think about data members and the diamond problem.

**Answer:** Interfaces (classes with only pure virtual functions) have no data members and no implementation. Multiple inheritance of interfaces cannot cause data duplication, ambiguous member access, or the diamond problem's data ambiguity. With concrete classes, multiple inheritance can lead to duplicate base class subobjects, ambiguous function calls, and the need for virtual inheritance.

The diamond problem arises when two bases share a common ancestor with data. Interfaces avoid this because they have no data. Multiple interface inheritance is the recommended pattern in C++ for achieving multiple type relationships.

## Multiple Choice Questions

### Q1. [Easy] What makes a class abstract in C++?

**Answer:** B

**B is correct.** C++ does not have an `abstract` keyword. A class is abstract if it has at least one pure virtual function (declared with `= 0`).

### Q2. [Easy] How is a pure virtual function declared?

**Answer:** A

**A is correct.** A pure virtual function is declared with `= 0` at the end. `= delete` is a different feature that explicitly deletes a function.

### Q3. [Easy] Can you create an object of an abstract class?

**Answer:** B

**B is correct.** Abstract classes cannot be instantiated. You can have pointers and references to an abstract class type, but the actual object must be a concrete derived class.

### Q4. [Easy] What is an interface in C++?

**Answer:** B

**B is correct.** C++ has no `interface` keyword. By convention, an interface is a class with only pure virtual functions (and typically a virtual destructor), with no data members or implementations.

### Q5. [Easy] What happens if a derived class does not implement all pure virtual functions?

**Answer:** C

**C is correct.** If a derived class does not implement all pure virtual functions from its base, it inherits the remaining pure virtual functions and is itself abstract. It cannot be instantiated.

### Q6. [Medium] Can a pure virtual function have a definition (body)?

**Answer:** B

**B is correct.** A pure virtual function can have a definition provided outside the class body. The class is still abstract. Derived classes can call it with `Base::func()` to use the default behavior.

### Q7. [Medium] What is required when using a pure virtual destructor?

**Answer:** B

**B is correct.** A pure virtual destructor must have a definition provided outside the class because destructors are always called in the inheritance chain. Without the definition, you get a linker error.

### Q8. [Medium] Why is multiple inheritance of interfaces generally safe?

**Answer:** B

**B is correct.** The diamond problem's ambiguity comes from duplicate data members. Interfaces have no data members and no implementation, so inheriting from multiple interfaces cannot cause data duplication or ambiguous member access.

### Q9. [Medium] Which of the following can an abstract class have?

**Answer:** B

**B is correct.** An abstract class can have pure virtual functions, regular virtual functions, non-virtual functions, data members, constructors, and destructors. It just needs at least one pure virtual function to be abstract.

### Q10. [Medium] Can you have a pointer or reference to an abstract class?

**Answer:** C

**C is correct.** You can have `Shape* s` or `Shape& s` where `Shape` is abstract. The actual object must be concrete. This is the foundation of runtime polymorphism.

### Q11. [Hard] What is the output?

```
class A { public: virtual void f() = 0; virtual ~A(){} };
void A::f() { cout << "A"; }
class B : public A { public: void f() override { A::f(); cout << "B"; } };
int main() { B b; b.f(); }
```

**Answer:** B

**B is correct.** `B::f()` calls `A::f()` which prints "A", then prints "B". The result is "AB". A pure virtual function with a definition can be called explicitly.

### Q12. [Hard] Which statement about abstract classes is FALSE?

**Answer:** C

**C is correct (it is the false statement).** You cannot create arrays of abstract class objects because that would require instantiating the abstract class. You CAN have arrays of pointers (`Shape* arr[10]`) or references to abstract types.

### Q13. [Hard] When should you use an abstract class instead of an interface?

**Answer:** B

**B is correct.** Use an abstract class when derived classes share common data or implementation. Use an interface when you only want to define a contract with no shared state or implementation.

## Coding Challenges

### Challenge 1. Shape Hierarchy with Abstract Base

**Difficulty:** Easy

Create an abstract Shape class with pure virtual area() and perimeter(). Implement Circle, Rectangle, and Triangle. Store pointers in a Shape* array. Print each shape's name, area, and perimeter.

**Constraints:**

- Use pure virtual functions. Use override. Include virtual destructor.

**Sample input:**

```
Circle r=5, Rectangle 4x6, Triangle 3-4-5
```

**Sample output:**

```
Circle: area=78.54, perimeter=31.42
Rectangle: area=24.00, perimeter=20.00
Triangle: area=6.00, perimeter=12.00
```

**Solution:**

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

class Triangle : public Shape {
    double a, b, c;
public:
    Triangle(double a, double b, double c) : a(a), b(b), c(c) {}
    double area() const override {
        double s = (a + b + c) / 2;
        return sqrt(s * (s-a) * (s-b) * (s-c));
    }
    double perimeter() const override { return a + b + c; }
    string name() const override { return "Triangle"; }
};

int main() {
    Shape* shapes[] = { new Circle(5), new Rectangle(4, 6), new Triangle(3, 4, 5) };
    for (int i = 0; i < 3; i++) {
        printf("%s: area=%.2f, perimeter=%.2f\n",
               shapes[i]->name().c_str(), shapes[i]->area(), shapes[i]->perimeter());
        delete shapes[i];
    }
    return 0;
}
```

### Challenge 2. Multiple Interface Implementation

**Difficulty:** Medium

Create interfaces IReadable (with read()), IWritable (with write(string)), and IClosable (with close()). Create a File class that implements all three. Create a process() function that takes an IReadable& and reads, and a save() function that takes an IWritable& and writes.

**Constraints:**

- Each interface should have only pure virtual functions and virtual destructor. Use references.

**Sample input:**

```
File operations
```

**Sample output:**

```
Reading from data.txt
Writing 'Hello World' to data.txt
Closing data.txt
```

**Solution:**

```cpp
#include <iostream>
#include <string>
using namespace std;

class IReadable {
public:
    virtual string read() const = 0;
    virtual ~IReadable() {}
};

class IWritable {
public:
    virtual void write(const string& data) = 0;
    virtual ~IWritable() {}
};

class IClosable {
public:
    virtual void close() = 0;
    virtual ~IClosable() {}
};

class File : public IReadable, public IWritable, public IClosable {
    string filename;
public:
    File(string name) : filename(name) {}
    string read() const override {
        cout << "Reading from " << filename << endl;
        return "file contents";
    }
    void write(const string& data) override {
        cout << "Writing '" << data << "' to " << filename << endl;
    }
    void close() override {
        cout << "Closing " << filename << endl;
    }
};

void process(const IReadable& r) { r.read(); }
void save(IWritable& w, const string& data) { w.write(data); }

int main() {
    File f("data.txt");
    process(f);
    save(f, "Hello World");
    f.close();
    return 0;
}
```

### Challenge 3. Database Abstraction Layer

**Difficulty:** Hard

Create an abstract Database class with pure virtual connect(), query(string), and disconnect(). Add a non-virtual executeWithLog(string) that logs and calls query(). Implement MySQL and PostgreSQL classes. Process an array of Database* pointers.

**Constraints:**

- Use abstract class with mixed pure virtual and non-virtual. Demonstrate that non-virtual methods call virtual methods polymorphically.

**Sample input:**

```
Two databases, each executing a query
```

**Sample output:**

```
[LOG] SELECT * FROM users
MySQL: Executing 'SELECT * FROM users'
[LOG] SELECT * FROM users
PostgreSQL: Executing 'SELECT * FROM users'
```

**Solution:**

```cpp
#include <iostream>
#include <string>
using namespace std;

class Database {
public:
    virtual void connect() = 0;
    virtual string query(const string& sql) = 0;
    virtual void disconnect() = 0;
    virtual ~Database() {}

    void executeWithLog(const string& sql) {
        cout << "[LOG] " << sql << endl;
        query(sql);
    }
};

class MySQL : public Database {
public:
    void connect() override { cout << "MySQL connected" << endl; }
    string query(const string& sql) override {
        cout << "MySQL: Executing '" << sql << "'" << endl;
        return "mysql result";
    }
    void disconnect() override { cout << "MySQL disconnected" << endl; }
};

class PostgreSQL : public Database {
public:
    void connect() override { cout << "PostgreSQL connected" << endl; }
    string query(const string& sql) override {
        cout << "PostgreSQL: Executing '" << sql << "'" << endl;
        return "pg result";
    }
    void disconnect() override { cout << "PostgreSQL disconnected" << endl; }
};

int main() {
    Database* dbs[] = { new MySQL(), new PostgreSQL() };
    for (int i = 0; i < 2; i++) {
        dbs[i]->connect();
        dbs[i]->executeWithLog("SELECT * FROM users");
        dbs[i]->disconnect();
        cout << "---" << endl;
        delete dbs[i];
    }
    return 0;
}
```

### Challenge 4. Plugin System with Interface

**Difficulty:** Hard

Create an IPlugin interface with name(), version(), initialize(), execute(string), and shutdown(). Create LogPlugin and CachePlugin implementations. Create a PluginManager that stores IPlugin* pointers and has loadAll(), runAll(string command), and unloadAll() methods.

**Constraints:**

- Interface must have only pure virtual functions. Manager must work with IPlugin* only.

**Sample input:**

```
Run all plugins with command 'process-data'
```

**Sample output:**

```
Loading LogPlugin v1.0...
Loading CachePlugin v2.1...
LogPlugin: Logging 'process-data'
CachePlugin: Caching 'process-data'
Unloading CachePlugin...
Unloading LogPlugin...
```

**Solution:**

```cpp
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class IPlugin {
public:
    virtual string name() const = 0;
    virtual string version() const = 0;
    virtual void initialize() = 0;
    virtual void execute(const string& cmd) = 0;
    virtual void shutdown() = 0;
    virtual ~IPlugin() {}
};

class LogPlugin : public IPlugin {
public:
    string name() const override { return "LogPlugin"; }
    string version() const override { return "1.0"; }
    void initialize() override { cout << "Loading " << name() << " v" << version() << "..." << endl; }
    void execute(const string& cmd) override { cout << name() << ": Logging '" << cmd << "'" << endl; }
    void shutdown() override { cout << "Unloading " << name() << "..." << endl; }
};

class CachePlugin : public IPlugin {
public:
    string name() const override { return "CachePlugin"; }
    string version() const override { return "2.1"; }
    void initialize() override { cout << "Loading " << name() << " v" << version() << "..." << endl; }
    void execute(const string& cmd) override { cout << name() << ": Caching '" << cmd << "'" << endl; }
    void shutdown() override { cout << "Unloading " << name() << "..." << endl; }
};

class PluginManager {
    vector<IPlugin*> plugins;
public:
    void addPlugin(IPlugin* p) { plugins.push_back(p); }
    void loadAll() { for (auto* p : plugins) p->initialize(); }
    void runAll(const string& cmd) { for (auto* p : plugins) p->execute(cmd); }
    void unloadAll() {
        for (int i = plugins.size()-1; i >= 0; i--) plugins[i]->shutdown();
    }
    ~PluginManager() { for (auto* p : plugins) delete p; }
};

int main() {
    PluginManager mgr;
    mgr.addPlugin(new LogPlugin());
    mgr.addPlugin(new CachePlugin());
    mgr.loadAll();
    mgr.runAll("process-data");
    mgr.unloadAll();
    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/abstraction-and-interfaces/*
