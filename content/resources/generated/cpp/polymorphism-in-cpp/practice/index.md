---
title: "Practice: Polymorphism - Virtual Functions and Operator Overloading"
description: "58 practice problems for Polymorphism - Virtual Functions and Operator Overloading in C++"
slug: polymorphism-in-cpp-practice
canonical: https://learn.modernagecoders.com/resources/cpp/polymorphism-in-cpp/practice
category: "C++"
---
# Practice: Polymorphism - Virtual Functions and Operator Overloading

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
#include 
using namespace std;
class Animal {
public:
    virtual void sound() { cout << "Animal sound" << endl; }
    virtual ~Animal() {}
};
class Dog : public Animal {
public:
    void sound() override { cout << "Bark" << endl; }
};
int main() {
    Animal* a = new Dog();
    a->sound();
    delete a;
    return 0;
}
```

*Hint:* The pointer type is Animal*, but the actual object is Dog. sound() is virtual.

**Answer:** `Bark`

Because `sound()` is virtual, the call is resolved at runtime using the vtable. The actual object is `Dog`, so `Dog::sound()` is called, printing "Bark".

### Q2. [Easy] What is the output?

```
#include 
using namespace std;
class Calc {
public:
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
};
int main() {
    Calc c;
    cout << c.add(3, 4) << endl;
    cout << c.add(3.0, 4.0) << endl;
    return 0;
}
```

*Hint:* The compiler selects the matching overloaded function based on argument types.

**Answer:** `7`
`7`

`add(3, 4)` calls `add(int, int)` returning 7. `add(3.0, 4.0)` calls `add(double, double)` returning 7.0, which prints as 7 (default cout formatting for doubles without decimal places showing).

### Q3. [Easy] What is the output?

```
#include 
using namespace std;
class A {
public:
    virtual void show() { cout << "A" << endl; }
    virtual ~A() {}
};
class B : public A {
public:
    void show() override { cout << "B" << endl; }
};
class C : public B {
public:
    void show() override { cout << "C" << endl; }
};
int main() {
    A* obj = new C();
    obj->show();
    delete obj;
    return 0;
}
```

*Hint:* C extends B extends A. The actual object is C. show() is virtual.

**Answer:** `C`

The actual object is `C`, which overrides `show()`. The vtable for `C` points to `C::show()`. The pointer type (`A*`) does not matter for virtual function dispatch.

### Q4. [Easy] What is the output?

```
#include 
using namespace std;
class Base {
public:
    void greet() { cout << "Hello from Base" << endl; }
};
class Derived : public Base {
};
int main() {
    Base* b = new Derived();
    b->greet();
    delete b;
    return 0;
}
```

*Hint:* greet() is NOT virtual. Derived does not override it.

**Answer:** `Hello from Base`

`greet()` is not virtual, so the call is resolved at compile time based on the pointer type (`Base*`). Since `Derived` does not define its own `greet()`, the inherited version from `Base` runs.

### Q5. [Easy] What is the output?

```
#include 
using namespace std;
class Base {
public:
    void show() { cout << "Base" << endl; }
};
class Derived : public Base {
public:
    void show() { cout << "Derived" << endl; }
};
int main() {
    Base* b = new Derived();
    b->show();
    Derived* d = new Derived();
    d->show();
    delete b;
    delete d;
    return 0;
}
```

*Hint:* show() is NOT virtual. The call depends on the pointer type.

**Answer:** `Base`
`Derived`

Without `virtual`, static binding is used. `b` is `Base*`, so `Base::show()` runs. `d` is `Derived*`, so `Derived::show()` runs. No runtime polymorphism occurs.

### Q6. [Medium] What is the output?

```
#include 
using namespace std;
class Base {
public:
    virtual void display() { cout << "Base::display" << endl; }
    void show() { cout << "Base::show" << endl; }
    virtual ~Base() {}
};
class Derived : public Base {
public:
    void display() override { cout << "Derived::display" << endl; }
    void show() { cout << "Derived::show" << endl; }
};
int main() {
    Base* b = new Derived();
    b->display();
    b->show();
    delete b;
    return 0;
}
```

*Hint:* display() is virtual but show() is not. How does this affect the call?

**Answer:** `Derived::display`
`Base::show`

`display()` is virtual, so the vtable resolves to `Derived::display()`. `show()` is not virtual, so static binding uses the pointer type (`Base*`) and calls `Base::show()`.

### Q7. [Medium] What is the output?

```
#include 
using namespace std;
class Base {
public:
    int x = 10;
    virtual void show() { cout << x << endl; }
    virtual ~Base() {}
};
class Derived : public Base {
public:
    int x = 20;
    void show() override { cout << x << endl; }
};
int main() {
    Base* b = new Derived();
    cout << b->x << endl;
    b->show();
    delete b;
    return 0;
}
```

*Hint:* Data members are not polymorphic. Virtual functions are polymorphic.

**Answer:** `10`
`20`

`b->x` accesses `Base::x` (10) because data members are resolved at compile time by pointer type. `b->show()` calls `Derived::show()` via vtable, which prints `Derived::x` (20).

### Q8. [Medium] What is the output?

```
#include 
using namespace std;
class Shape {
public:
    virtual void draw() { cout << "Shape" << endl; }
    virtual ~Shape() {}
};
class Circle : public Shape {
public:
    void draw() override { cout << "Circle" << endl; }
};
void render(Shape s) {
    s.draw();
}
int main() {
    Circle c;
    render(c);
    return 0;
}
```

*Hint:* The function takes Shape by value, not by reference or pointer.

**Answer:** `Shape`

This is the slicing problem. `render()` takes `Shape` by value, so the `Circle` object is sliced to a `Shape` copy. The vtable pointer in the copy points to `Shape`'s vtable, so `Shape::draw()` runs.

### Q9. [Medium] What is the output?

```
#include 
using namespace std;
class Complex {
    int real, imag;
public:
    Complex(int r = 0, int i = 0) : real(r), imag(i) {}
    Complex operator+(const Complex& c) const {
        return Complex(real + c.real, imag + c.imag);
    }
    friend ostream& operator<<(ostream& os, const Complex& c) {
        os << c.real << "+" << c.imag << "i";
        return os;
    }
};
int main() {
    Complex a(3, 4), b(1, 2);
    Complex c = a + b;
    cout << c << endl;
    return 0;
}
```

*Hint:* a + b calls operator+(b) on a. The << operator is a friend function.

**Answer:** `4+6i`

`a + b` calls `a.operator+(b)`, returning `Complex(3+1, 4+2) = Complex(4, 6)`. The `<<` operator prints `4+6i`.

### Q10. [Medium] What is the output?

```
#include 
using namespace std;
class Counter {
    int val;
public:
    Counter(int v) : val(v) {}
    Counter& operator++() { ++val; return *this; }
    Counter operator++(int) { Counter t = *this; ++val; return t; }
    friend ostream& operator<<(ostream& os, const Counter& c) {
        os << c.val; return os;
    }
};
int main() {
    Counter c(5);
    cout << ++c << endl;
    cout << c++ << endl;
    cout << c << endl;
    return 0;
}
```

*Hint:* Prefix ++ increments first then returns. Postfix ++ returns old value then increments.

**Answer:** `6`
`6`
`7`

`++c` increments to 6 and returns the new value. `c++` returns the old value (6) and then increments to 7. The final print shows 7.

### Q11. [Medium] What is the output?

```
#include 
using namespace std;
class Base {
public:
    virtual void test() { cout << "Base::test" << endl; }
    virtual ~Base() {}
};
class Mid : public Base {
public:
    void test() override { cout << "Mid::test" << endl; }
};
class Leaf : public Mid {
public:
    void test() override { cout << "Leaf::test" << endl; }
};
int main() {
    Base* b1 = new Mid();
    Base* b2 = new Leaf();
    Mid* m1 = new Leaf();
    b1->test();
    b2->test();
    m1->test();
    delete b1; delete b2; delete m1;
    return 0;
}
```

*Hint:* All calls resolve to the actual object type because test() is virtual throughout.

**Answer:** `Mid::test`
`Leaf::test`
`Leaf::test`

`b1` points to `Mid`, so `Mid::test()` runs. `b2` and `m1` both point to `Leaf` objects, so `Leaf::test()` runs regardless of the pointer type.

### Q12. [Hard] What is the output?

```
#include 
using namespace std;
class Base {
public:
    Base() { cout << "Base()" << endl; }
    virtual ~Base() { cout << "~Base()" << endl; }
};
class Derived : public Base {
public:
    Derived() { cout << "Derived()" << endl; }
    ~Derived() { cout << "~Derived()" << endl; }
};
int main() {
    Base* b = new Derived();
    delete b;
    return 0;
}
```

*Hint:* The destructor is virtual. Both destructors should run in reverse order.

**Answer:** `Base()`
`Derived()`
`~Derived()`
`~Base()`

Constructors run base-first: `Base()` then `Derived()`. Because `~Base()` is virtual, `delete b` calls `~Derived()` first, then `~Base()`. Without virtual, only `~Base()` would run.

### Q13. [Hard] What is the output?

```
#include 
using namespace std;
class Base {
public:
    virtual void show() { cout << "Base" << endl; display(); }
    virtual void display() { cout << "Base::display" << endl; }
    virtual ~Base() {}
};
class Derived : public Base {
public:
    void display() override { cout << "Derived::display" << endl; }
};
int main() {
    Base* b = new Derived();
    b->show();
    delete b;
    return 0;
}
```

*Hint:* show() is inherited from Base. But display() is overridden. When show() calls display(), which version runs?

**Answer:** `Base`
`Derived::display`

`b->show()` calls the inherited `Base::show()` (not overridden by Derived). Inside `show()`, `display()` is called on `this`. Since the actual object is `Derived` and `display()` is virtual, `Derived::display()` runs.

### Q14. [Hard] What is the output?

```
#include 
using namespace std;
class Base {
public:
    Base() {
        cout << "Base ctor" << endl;
        init();
    }
    virtual void init() { cout << "Base::init" << endl; }
    virtual ~Base() {}
};
class Derived : public Base {
    int val;
public:
    Derived() : val(42) {
        cout << "Derived ctor, val=" << val << endl;
    }
    void init() override { cout << "Derived::init, val=" << val << endl; }
};
int main() {
    Derived d;
    return 0;
}
```

*Hint:* During Base constructor, the vtable points to Base's vtable, not Derived's. What does init() call?

**Answer:** `Base ctor`
`Base::init`
`Derived ctor, val=42`

During `Base`'s constructor, the vtable is still `Base`'s vtable (the `Derived` part is not yet constructed). So `init()` calls `Base::init()`, not `Derived::init()`. This is different from Java where the derived version would be called with uninitialized fields.

### Q15. [Hard] What is the output?

```
#include 
using namespace std;
class Animal {
public:
    virtual void sound() = 0;
    virtual ~Animal() {}
};
class Dog : public Animal {
public:
    void sound() override { cout << "Bark" << endl; }
};
class GoldenRetriever : public Dog {
public:
    void sound() override { cout << "Friendly Bark" << endl; }
};
int main() {
    Animal* a1 = new Dog();
    Animal* a2 = new GoldenRetriever();
    Dog* d1 = new GoldenRetriever();
    a1->sound();
    a2->sound();
    d1->sound();
    delete a1; delete a2; delete d1;
    return 0;
}
```

*Hint:* sound() is pure virtual in Animal. Both Dog and GoldenRetriever override it.

**Answer:** `Bark`
`Friendly Bark`
`Friendly Bark`

`a1` points to `Dog`, so `Dog::sound()` runs. `a2` and `d1` both point to `GoldenRetriever` objects, so `GoldenRetriever::sound()` runs in both cases.

### Q16. [Hard] What is the output?

```
#include 
using namespace std;
class Base {
public:
    virtual void func(int x) { cout << "Base::func(int) " << x << endl; }
    virtual ~Base() {}
};
class Derived : public Base {
public:
    void func(int x) override { cout << "Derived::func(int) " << x << endl; }
    void func(double x) { cout << "Derived::func(double) " << x << endl; }
};
int main() {
    Base* b = new Derived();
    b->func(10);
    b->func(10.5);
    delete b;
    return 0;
}
```

*Hint:* Base only declares func(int). func(double) in Derived is not visible through a Base pointer.

**Answer:** `Derived::func(int) 10`
`Derived::func(int) 10`

Through `Base*`, only `func(int)` is visible. `b->func(10)` calls `Derived::func(int)` via vtable. `b->func(10.5)` also calls `func(int)` because `Base` has no `func(double)`; 10.5 is converted to 10.

### Q17. [Hard] What is the output?

```
#include 
using namespace std;
class Base {
public:
    virtual void show() const { cout << "Base" << endl; }
    virtual ~Base() {}
};
class Derived : public Base {
public:
    void show() { cout << "Derived" << endl; }
};
int main() {
    Base* b = new Derived();
    b->show();
    delete b;
    return 0;
}
```

*Hint:* Base::show() is const but Derived::show() is not const. Are they the same signature?

**Answer:** `Base`

`Base::show()` is `const`, but `Derived::show()` is not `const`. These are different signatures, so `Derived::show()` does not override `Base::show()`. It hides it instead. Through `Base*`, `Base::show() const` is called. Using `override` would have caught this error at compile time.

### Q18. [Hard] What is the output?

```
#include 
using namespace std;
class Animal {
public:
    virtual ~Animal() {}
};
class Dog : public Animal {};
class Cat : public Animal {};
int main() {
    Animal* a = new Dog();
    Dog* d = dynamic_cast<Dog*>(a);
    Cat* c = dynamic_cast<Cat*>(a);
    cout << (d != nullptr) << endl;
    cout << (c != nullptr) << endl;
    delete a;
    return 0;
}
```

*Hint:* dynamic_cast returns nullptr when the cast is invalid for pointers.

**Answer:** `1`
`0`

The actual object is `Dog`. `dynamic_cast<Dog*>(a)` succeeds (d is not nullptr, so 1 is printed). `dynamic_cast<Cat*>(a)` fails because the object is not a `Cat` (c is nullptr, so 0 is printed).

## Mixed Questions

### Q1. [Easy] What is the output?

```
#include 
using namespace std;
class Printer {
public:
    void print(int x) { cout << "int: " << x << endl; }
    void print(double x) { cout << "double: " << x << endl; }
    void print(const string& x) { cout << "string: " << x << endl; }
};
int main() {
    Printer p;
    p.print(42);
    p.print(3.14);
    p.print(string("Arjun"));
    return 0;
}
```

*Hint:* Three overloaded print functions with different parameter types.

**Answer:** `int: 42`
`double: 3.14`
`string: Arjun`

The compiler selects the correct overloaded function based on argument type. `42` matches `print(int)`, `3.14` matches `print(double)`, and `string("Arjun")` matches `print(const string&)`.

### Q2. [Easy] What is the output?

```
#include 
using namespace std;
class Point {
    int x, y;
public:
    Point(int x, int y) : x(x), y(y) {}
    bool operator==(const Point& p) const {
        return x == p.x && y == p.y;
    }
};
int main() {
    Point a(3, 4), b(3, 4), c(1, 2);
    cout << (a == b) << endl;
    cout << (a == c) << endl;
    return 0;
}
```

*Hint:* The == operator compares both x and y values.

**Answer:** `1`
`0`

`a == b` returns true (1) because both have x=3, y=4. `a == c` returns false (0) because their coordinates differ.

### Q3. [Easy] What is the output?

```
#include 
using namespace std;
class Vehicle {
public:
    virtual void start() { cout << "Vehicle" << endl; }
    virtual ~Vehicle() {}
};
class Car : public Vehicle {
public:
    void start() override { cout << "Car" << endl; }
};
class Bike : public Vehicle {
public:
    void start() override { cout << "Bike" << endl; }
};
int main() {
    Vehicle* v[] = { new Car(), new Bike(), new Vehicle() };
    for (int i = 0; i < 3; i++) {
        v[i]->start();
        delete v[i];
    }
    return 0;
}
```

*Hint:* An array of base class pointers, each pointing to a different type.

**Answer:** `Car`
`Bike`
`Vehicle`

Each pointer in the array points to a different actual object. Virtual dispatch calls the correct `start()` for each. This is a classic demonstration of runtime polymorphism with arrays.

### Q4. [Easy] What is the difference between compile-time and runtime polymorphism in C++?

*Hint:* Think about when the function to call is decided: compilation or execution.

**Answer:** Compile-time polymorphism (static binding) is resolved by the compiler. It includes function overloading and operator overloading. Runtime polymorphism (dynamic binding) is resolved at execution time using virtual functions and the vtable mechanism. It requires inheritance and the virtual keyword.

Compile-time: same function name, different parameters, resolved by compiler. Runtime: same function signature in base and derived, resolved by vtable at runtime. Runtime polymorphism needs pointers or references to work correctly.

### Q5. [Medium] What is the output?

```
#include 
using namespace std;
class Base {
public:
    virtual void func() { cout << "Base" << endl; }
    virtual ~Base() {}
};
class Derived : public Base {
public:
    void func() override { cout << "Derived" << endl; }
};
int main() {
    Derived d;
    Base& ref = d;
    ref.func();
    Base b = d;  // Copy by value
    b.func();
    return 0;
}
```

*Hint:* References preserve polymorphism. Copying by value does not.

**Answer:** `Derived`
`Base`

`ref` is a reference to `d`, so `ref.func()` uses the vtable and calls `Derived::func()`. `b` is a copy constructed as `Base` (slicing), so `b.func()` calls `Base::func()`.

### Q6. [Medium] What is the output?

```
#include 
using namespace std;
class Matrix {
    int data[2][2];
public:
    Matrix(int a, int b, int c, int d) {
        data[0][0]=a; data[0][1]=b; data[1][0]=c; data[1][1]=d;
    }
    Matrix operator+(const Matrix& m) const {
        return Matrix(data[0][0]+m.data[0][0], data[0][1]+m.data[0][1],
                      data[1][0]+m.data[1][0], data[1][1]+m.data[1][1]);
    }
    friend ostream& operator<<(ostream& os, const Matrix& m) {
        os << m.data[0][0] << " " << m.data[0][1] << endl;
        os << m.data[1][0] << " " << m.data[1][1];
        return os;
    }
};
int main() {
    Matrix a(1,2,3,4), b(5,6,7,8);
    Matrix c = a + b;
    cout << c << endl;
    return 0;
}
```

*Hint:* The + operator adds corresponding elements of two 2x2 matrices.

**Answer:** `6 8`
`10 12`

Element-wise addition: (1+5, 2+6, 3+7, 4+8) = (6, 8, 10, 12). The `<<` operator formats the matrix in 2 rows.

### Q7. [Medium] What is the vtable and vptr mechanism? How does it enable runtime polymorphism?

*Hint:* Think about what the compiler generates for classes with virtual functions.

**Answer:** When a class has at least one virtual function, the compiler creates a vtable (virtual function table) for that class, which is an array of function pointers. Each object of that class contains a hidden vptr (virtual pointer) that points to its class's vtable. When a virtual function is called through a base pointer, the program follows the vptr to the vtable and calls the function pointer at the appropriate slot. This is how the correct overridden function is called at runtime.

Each derived class has its own vtable with its overridden function pointers. The vptr adds one pointer of overhead per object (typically 8 bytes on 64-bit systems). The vtable lookup adds one extra pointer dereference compared to a non-virtual call.

### Q8. [Medium] What is the output?

```
#include 
using namespace std;
class Num {
    int val;
public:
    Num(int v) : val(v) {}
    Num operator-() const { return Num(-val); }
    Num operator-(const Num& n) const { return Num(val - n.val); }
    friend ostream& operator<<(ostream& os, const Num& n) {
        os << n.val; return os;
    }
};
int main() {
    Num a(10), b(3);
    cout << -a << endl;
    cout << (a - b) << endl;
    return 0;
}
```

*Hint:* Unary minus (negation) and binary minus (subtraction) are different operators.

**Answer:** `-10`
`7`

`-a` calls the unary `operator-()`, returning `Num(-10)`. `a - b` calls the binary `operator-(const Num&)`, returning `Num(10-3) = Num(7)`.

### Q9. [Hard] What is the output?

```
#include 
using namespace std;
class A {
public:
    virtual void f() { cout << "A::f" << endl; }
    void g() { cout << "A::g" << endl; f(); }
    virtual ~A() {}
};
class B : public A {
public:
    void f() override { cout << "B::f" << endl; }
    void g() { cout << "B::g" << endl; f(); }
};
int main() {
    A* p = new B();
    p->g();
    cout << "---" << endl;
    B* q = new B();
    q->g();
    delete p; delete q;
    return 0;
}
```

*Hint:* g() is NOT virtual. Through A*, A::g() runs. But f() inside g() IS virtual.

**Answer:** `A::g`
`B::f`
`---`
`B::g`
`B::f`

`p->g()` calls `A::g()` (g is not virtual, resolved by pointer type). Inside `A::g()`, `f()` is virtual, so `B::f()` runs. `q->g()` calls `B::g()` directly (pointer type is B*). Inside `B::g()`, `f()` calls `B::f()`.

### Q10. [Hard] What is the output?

```
#include 
using namespace std;
class Base {
public:
    virtual Base* clone() {
        cout << "Base clone" << endl;
        return new Base(*this);
    }
    virtual ~Base() {}
};
class Derived : public Base {
    int x;
public:
    Derived(int x) : x(x) {}
    Derived* clone() override {
        cout << "Derived clone, x=" << x << endl;
        return new Derived(*this);
    }
};
int main() {
    Base* b = new Derived(42);
    Base* copy = b->clone();
    delete b;
    delete copy;
    return 0;
}
```

*Hint:* Derived::clone() returns Derived* instead of Base*. Is this a valid override?

**Answer:** `Derived clone, x=42`

This is a covariant return type. `Derived::clone()` returns `Derived*` (a subtype of `Base*`), which is a valid override. The vtable dispatches to `Derived::clone()` because the actual object is `Derived`.

### Q11. [Medium] Why must the << operator be overloaded as a friend function (or non-member function) rather than a member function?

*Hint:* Think about which object is the left operand of <<.

**Answer:** When you write cout << obj, the left operand is cout (an ostream object), not your class object. If << were a member function of your class, the syntax would be obj << cout (your object on the left), which is backwards. A friend function takes ostream& as the first parameter and your object as the second, matching the natural cout << obj syntax.

For binary operators, the left operand determines which class's member function is called. Since `cout` is an `ostream` object and you cannot modify the `ostream` class, you must use a non-member (typically friend) function.

### Q12. [Hard] What is the output?

```
#include 
using namespace std;
class Shape {
public:
    virtual void draw() = 0;
    virtual ~Shape() {}
};
class Circle : public Shape {
public:
    void draw() override { cout << "Circle" << endl; }
};
class Square : public Shape {
public:
    void draw() override { cout << "Square" << endl; }
};
int main() {
    Shape* shapes[] = { new Circle(), new Square(), new Circle() };
    for (int i = 0; i < 3; i++) {
        shapes[i]->draw();
    }
    for (int i = 0; i < 3; i++) delete shapes[i];
    return 0;
}
```

*Hint:* Pure virtual function. Each derived class provides its own implementation.

**Answer:** `Circle`
`Square`
`Circle`

`draw()` is pure virtual in `Shape`. Each derived class overrides it. The vtable dispatches to the correct version based on the actual object type in each array slot.

### Q13. [Hard] What is the output?

```
#include 
using namespace std;
class SafeArray {
    int arr[5];
public:
    SafeArray() { for(int i=0;i<5;i++) arr[i]=i*10; }
    int& operator[](int i) {
        if(i<0||i>=5) { cout<<"OOB"<<endl; return arr[0]; }
        return arr[i];
    }
};
int main() {
    SafeArray sa;
    cout << sa[2] << endl;
    sa[3] = 99;
    cout << sa[3] << endl;
    cout << sa[10] << endl;
    return 0;
}
```

*Hint:* The [] operator returns a reference, allowing both read and write. Index 10 is out of bounds.

**Answer:** `20`
`99`
`OOB`
`0`

`sa[2]` returns `arr[2]` which is 20. `sa[3] = 99` modifies `arr[3]` through the returned reference. `sa[10]` is out of bounds, so "OOB" is printed and `arr[0]` (which is 0) is returned.

## Multiple Choice Questions

### Q1. [Easy] Which keyword enables runtime polymorphism in C++?

**Answer:** B

**B is correct.** The `virtual` keyword tells the compiler to use dynamic dispatch (vtable lookup) instead of static binding. Without it, the function called depends on the pointer type, not the actual object type.

### Q2. [Easy] Which of the following is compile-time polymorphism?

**Answer:** B

**B is correct.** Function overloading is resolved at compile time based on argument types and count. Virtual functions, dynamic dispatch, and pure virtual functions are all related to runtime polymorphism.

### Q3. [Easy] Which operator CANNOT be overloaded in C++?

**Answer:** C

**C is correct.** The scope resolution operator `::` cannot be overloaded. Other operators that cannot be overloaded include `.`, `.*`, `?:`, `sizeof`, and `typeid`.

### Q4. [Easy] What is the purpose of a virtual destructor?

**Answer:** B

**B is correct.** Without a virtual destructor, deleting a derived object through a base pointer only calls the base destructor. A virtual destructor ensures the correct destructor chain runs, preventing resource leaks.

### Q5. [Easy] What distinguishes prefix ++ from postfix ++ in operator overloading?

**Answer:** B

**B is correct.** Prefix `operator++()` takes no parameters and returns a reference. Postfix `operator++(int)` takes a dummy `int` parameter (never used) and returns a copy of the old value.

### Q6. [Easy] What is the slicing problem in C++?

**Answer:** B

**B is correct.** When a derived object is passed by value to a function expecting a base class, only the base portion is copied. The derived class data members and vtable pointer are lost (sliced off).

### Q7. [Medium] What does dynamic_cast return when a pointer cast fails?

**Answer:** B

**B is correct.** For pointer casts, `dynamic_cast` returns `nullptr` on failure. For reference casts, it throws `std::bad_cast`. This makes pointer-based `dynamic_cast` safe to check with an if statement.

### Q8. [Medium] How much extra memory does a vtable pointer add to each object?

**Answer:** C

**C is correct.** Each object with virtual functions has one hidden vptr (virtual pointer), which is one pointer in size (4 bytes on 32-bit, 8 bytes on 64-bit systems). The vtable itself is per-class, not per-object, so its size does not affect object size.

### Q9. [Medium] Which operators MUST be overloaded as member functions?

**Answer:** C

**C is correct.** The assignment (`=`), subscript (`[]`), function call (`()`), and arrow (`->`) operators must be overloaded as non-static member functions. All other operators can be either member or non-member.

### Q10. [Medium] What does the override keyword do in C++11?

**Answer:** B

**B is correct.** `override` is a compile-time check. If the function signature does not match any virtual function in the base class, the compiler reports an error. This catches subtle bugs like const-mismatch or typos.

### Q11. [Medium] What happens when a virtual function is called inside a base class constructor?

**Answer:** B

**B is correct.** During the base class constructor, the vtable pointer still points to the base class's vtable (the derived part is not yet constructed). So the base version of the virtual function is called. This is different from Java.

### Q12. [Medium] What is RTTI in C++?

**Answer:** A

**A is correct.** RTTI (Runtime Type Information) is the mechanism that enables `dynamic_cast` and `typeid` to work at runtime. It requires at least one virtual function in the class hierarchy. Some compilers allow disabling RTTI with `-fno-rtti`.

### Q13. [Hard] What is the output?

```
class A {
public:
    virtual void f() { cout << "A"; }
    virtual ~A() {}
};
class B : public A {
public:
    void f() override { cout << "B"; }
};
void test(A a) { a.f(); }
int main() { test(B()); }
```

**Answer:** A

**A is correct.** The function `test()` takes `A` by value. When `B()` is passed, slicing occurs: only the `A` portion is copied. The sliced copy's vtable points to `A`'s vtable, so `A::f()` is called.

### Q14. [Hard] Which of the following is true about pure virtual functions?

**Answer:** C

**C is correct.** A class with at least one pure virtual function (`= 0`) is abstract and cannot be instantiated. Contrary to option B, a pure virtual function CAN have a definition in the base class (callable via `Base::func()`).

### Q15. [Hard] What does the final keyword do when applied to a virtual function?

**Answer:** B

**B is correct.** `final` on a virtual function prevents any derived class from overriding it further. On a class, `final` prevents inheritance. They serve different purposes depending on context.

### Q16. [Hard] What is the minimum requirement for dynamic_cast to work?

**Answer:** B

**B is correct.** `dynamic_cast` uses RTTI, which requires the vtable/vptr mechanism. A class must have at least one virtual function for the compiler to generate RTTI. Without it, `dynamic_cast` causes a compilation error.

### Q17. [Hard] What is a covariant return type in C++?

**Answer:** B

**B is correct.** If a base class virtual function returns `Base*`, the derived class override can return `Derived*`. This is called a covariant return type. The return type must be a pointer or reference to a class derived from the original return type.

## Coding Challenges

### Challenge 1. Shape Area Calculator with Virtual Functions

**Difficulty:** Easy

Create an abstract Shape class with a pure virtual area() method. Create Circle (radius), Rectangle (width, height), and Triangle (base, height) subclasses. Store pointers in a Shape* array and compute total area using a loop.

**Constraints:**

- Use virtual functions. Use override keyword. Include virtual destructor. Do not pass objects by value.

**Sample input:**

```
Circle radius=5, Rectangle 4x6, Triangle base=3 height=8
```

**Sample output:**

```
Circle area: 78.54
Rectangle area: 24.00
Triangle area: 12.00
Total area: 114.54
```

**Solution:**

```cpp
#include <iostream>
#include <cmath>
using namespace std;

class Shape {
public:
    virtual double area() const = 0;
    virtual string name() const = 0;
    virtual ~Shape() {}
};

class Circle : public Shape {
    double radius;
public:
    Circle(double r) : radius(r) {}
    double area() const override { return M_PI * radius * radius; }
    string name() const override { return "Circle"; }
};

class Rectangle : public Shape {
    double w, h;
public:
    Rectangle(double w, double h) : w(w), h(h) {}
    double area() const override { return w * h; }
    string name() const override { return "Rectangle"; }
};

class Triangle : public Shape {
    double base, height;
public:
    Triangle(double b, double h) : base(b), height(h) {}
    double area() const override { return 0.5 * base * height; }
    string name() const override { return "Triangle"; }
};

int main() {
    Shape* shapes[] = { new Circle(5), new Rectangle(4, 6), new Triangle(3, 8) };
    double total = 0;
    for (int i = 0; i < 3; i++) {
        double a = shapes[i]->area();
        printf("%s area: %.2f\n", shapes[i]->name().c_str(), a);
        total += a;
    }
    printf("Total area: %.2f\n", total);
    for (int i = 0; i < 3; i++) delete shapes[i];
    return 0;
}
```

### Challenge 2. Complex Number Class with Full Operator Overloading

**Difficulty:** Medium

Create a Complex class with operator overloading for +, -, *, ==, !=, prefix ++, postfix ++, unary -, <<, and >>. Test all operators.

**Constraints:**

- Use const references for parameters. Return by value for binary operators. Use friend for << and >>.

**Sample input:**

```
a = (3, 4), b = (1, 2)
```

**Sample output:**

```
a + b = 4+6i
a - b = 2+2i
a * b = -5+10i
a == b: 0
-a = -3-4i
```

**Solution:**

```cpp
#include <iostream>
using namespace std;

class Complex {
    double real, imag;
public:
    Complex(double r = 0, double i = 0) : real(r), imag(i) {}
    Complex operator+(const Complex& c) const { return Complex(real+c.real, imag+c.imag); }
    Complex operator-(const Complex& c) const { return Complex(real-c.real, imag-c.imag); }
    Complex operator*(const Complex& c) const {
        return Complex(real*c.real - imag*c.imag, real*c.imag + imag*c.real);
    }
    Complex operator-() const { return Complex(-real, -imag); }
    bool operator==(const Complex& c) const { return real==c.real && imag==c.imag; }
    bool operator!=(const Complex& c) const { return !(*this == c); }
    Complex& operator++() { ++real; return *this; }
    Complex operator++(int) { Complex t = *this; ++real; return t; }
    friend ostream& operator<<(ostream& os, const Complex& c) {
        os << c.real;
        if (c.imag >= 0) os << "+";
        os << c.imag << "i";
        return os;
    }
    friend istream& operator>>(istream& is, Complex& c) {
        is >> c.real >> c.imag;
        return is;
    }
};

int main() {
    Complex a(3, 4), b(1, 2);
    cout << "a + b = " << (a + b) << endl;
    cout << "a - b = " << (a - b) << endl;
    cout << "a * b = " << (a * b) << endl;
    cout << "a == b: " << (a == b) << endl;
    cout << "-a = " << -a << endl;
    return 0;
}
```

### Challenge 3. Payment Processor with dynamic_cast

**Difficulty:** Medium

Create a Payment base class with virtual process(double). Create CreditCard (has cardNumber), UPI (has upiId), and NetBanking subclasses. Write a processAndLog function that uses dynamic_cast to detect the payment type and log extra details.

**Constraints:**

- Use dynamic_cast for safe downcasting. Use virtual destructor. Demonstrate nullptr check.

**Sample input:**

```
Amount = 1500.0
```

**Sample output:**

```
Credit Card: Processing 1500 with card ending 4321
UPI: Processing 1500 via ravi@upi
Net Banking: Processing 1500 via bank transfer
Unknown payment type for amount 1500
```

**Solution:**

```cpp
#include <iostream>
#include <string>
using namespace std;

class Payment {
public:
    virtual void process(double amount) { cout << "Processing " << amount << endl; }
    virtual ~Payment() {}
};

class CreditCard : public Payment {
    string cardNum;
public:
    CreditCard(string num) : cardNum(num) {}
    void process(double amount) override {
        cout << "Credit Card: Processing " << amount << " with card ending " << cardNum.substr(cardNum.size()-4) << endl;
    }
};

class UPI : public Payment {
    string upiId;
public:
    UPI(string id) : upiId(id) {}
    void process(double amount) override {
        cout << "UPI: Processing " << amount << " via " << upiId << endl;
    }
};

class NetBanking : public Payment {
public:
    void process(double amount) override {
        cout << "Net Banking: Processing " << amount << " via bank transfer" << endl;
    }
};

void processAndLog(Payment* p, double amount) {
    if (dynamic_cast<CreditCard*>(p) || dynamic_cast<UPI*>(p) || dynamic_cast<NetBanking*>(p)) {
        p->process(amount);
    } else {
        cout << "Unknown payment type for amount " << amount << endl;
    }
}

int main() {
    Payment* payments[] = { new CreditCard("1234567890124321"), new UPI("ravi@upi"), new NetBanking(), new Payment() };
    for (int i = 0; i < 4; i++) {
        processAndLog(payments[i], 1500);
        delete payments[i];
    }
    return 0;
}
```

### Challenge 4. SafeArray with [] Operator and Functor

**Difficulty:** Medium

Create a SafeArray class that wraps a dynamic array with bounds-checked [] operator. Also create a Transform functor class with operator() that applies a transformation to each element. Use them together to double every element.

**Constraints:**

- Return reference from []. Throw out_of_range for invalid index. Functor takes int, returns int.

**Sample input:**

```
Array: {1, 2, 3, 4, 5}, Transform: double each element
```

**Sample output:**

```
Before: 1 2 3 4 5
After: 2 4 6 8 10
```

**Solution:**

```cpp
#include <iostream>
#include <stdexcept>
using namespace std;

class SafeArray {
    int* data;
    int sz;
public:
    SafeArray(int n) : sz(n), data(new int[n]()) {}
    ~SafeArray() { delete[] data; }
    int& operator[](int i) {
        if (i < 0 || i >= sz) throw out_of_range("Index out of bounds");
        return data[i];
    }
    int size() const { return sz; }
};

class Transform {
    int factor;
public:
    Transform(int f) : factor(f) {}
    int operator()(int x) const { return x * factor; }
};

int main() {
    SafeArray arr(5);
    for (int i = 0; i < 5; i++) arr[i] = i + 1;

    cout << "Before:";
    for (int i = 0; i < 5; i++) cout << " " << arr[i];
    cout << endl;

    Transform doubler(2);
    for (int i = 0; i < 5; i++) arr[i] = doubler(arr[i]);

    cout << "After:";
    for (int i = 0; i < 5; i++) cout << " " << arr[i];
    cout << endl;
    return 0;
}
```

### Challenge 5. Employee Payroll with Virtual Functions and RTTI

**Difficulty:** Hard

Create an abstract Employee class with pure virtual salary(). Create FullTime (monthly), PartTime (hourly rate * hours), Intern (stipend), and Contractor (daily rate * days) subclasses. Process an array of Employee* pointers. Use typeid to print the type of each employee. Compute total payroll.

**Constraints:**

- Use pure virtual functions. Use typeid for RTTI. Virtual destructor required. Do not slice objects.

**Sample input:**

```
FullTime=50000, PartTime=500/hr*80hrs, Intern=15000, Contractor=3000/day*20days
```

**Sample output:**

```
Arjun [FullTime]: 50000
Kavya [PartTime]: 40000
Ravi [Intern]: 15000
Priya [Contractor]: 60000
Total payroll: 165000
```

**Solution:**

```cpp
#include <iostream>
#include <typeinfo>
#include <string>
using namespace std;

class Employee {
protected:
    string name;
public:
    Employee(string n) : name(n) {}
    virtual double salary() const = 0;
    string getName() const { return name; }
    virtual ~Employee() {}
};

class FullTime : public Employee {
    double monthly;
public:
    FullTime(string n, double m) : Employee(n), monthly(m) {}
    double salary() const override { return monthly; }
};

class PartTime : public Employee {
    double rate; int hours;
public:
    PartTime(string n, double r, int h) : Employee(n), rate(r), hours(h) {}
    double salary() const override { return rate * hours; }
};

class Intern : public Employee {
    double stipend;
public:
    Intern(string n, double s) : Employee(n), stipend(s) {}
    double salary() const override { return stipend; }
};

class Contractor : public Employee {
    double dailyRate; int days;
public:
    Contractor(string n, double r, int d) : Employee(n), dailyRate(r), days(d) {}
    double salary() const override { return dailyRate * days; }
};

int main() {
    Employee* team[] = {
        new FullTime("Arjun", 50000),
        new PartTime("Kavya", 500, 80),
        new Intern("Ravi", 15000),
        new Contractor("Priya", 3000, 20)
    };
    double total = 0;
    for (int i = 0; i < 4; i++) {
        double s = team[i]->salary();
        cout << team[i]->getName() << " [" << typeid(*team[i]).name() << "]: " << s << endl;
        total += s;
    }
    cout << "Total payroll: " << total << endl;
    for (int i = 0; i < 4; i++) delete team[i];
    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/polymorphism-in-cpp/*
