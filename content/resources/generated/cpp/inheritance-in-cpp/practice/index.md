---
title: "Practice: Inheritance in C++"
description: "58 practice problems for Inheritance in C++ in C++"
slug: inheritance-in-cpp-practice
canonical: https://learn.modernagecoders.com/resources/cpp/inheritance-in-cpp/practice
category: "C++"
---
# Practice: Inheritance in C++

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
#include 
using namespace std;
class A {
public:
    A() { cout << "A "; }
};
class B : public A {
public:
    B() { cout << "B "; }
};
int main() {
    B b;
    return 0;
}
```

*Hint:* Constructor order: base first, then derived.

**Answer:** `A B `

When `B` is constructed, the base class `A` constructor runs first, then `B`'s constructor. Output: A B.

### Q2. [Easy] What is the output?

```
#include 
using namespace std;
class Base {
public:
    int x;
    Base() : x(10) {}
};
class Derived : public Base {
public:
    int y;
    Derived() : y(20) {}
};
int main() {
    Derived d;
    cout << d.x << " " << d.y << endl;
    return 0;
}
```

*Hint:* Derived inherits x from Base. Both x and y are public.

**Answer:** `10 20`

`d.x` is inherited from `Base` (initialized to 10). `d.y` is defined in `Derived` (initialized to 20). Both are accessible because they are public.

### Q3. [Easy] What is the output?

```
#include 
using namespace std;
class A {
public:
    A() { cout << "A "; }
    ~A() { cout << "~A "; }
};
class B : public A {
public:
    B() { cout << "B "; }
    ~B() { cout << "~B "; }
};
int main() {
    B b;
    return 0;
}
```

*Hint:* Constructors: base first. Destructors: derived first (reverse order).

**Answer:** `A B ~B ~A `

Construction: A first, then B. Destruction (reverse): ~B first, then ~A.

### Q4. [Easy] What is the output?

```
#include 
using namespace std;
class Animal {
public:
    void eat() { cout << "Eating" << endl; }
};
class Dog : public Animal {
public:
    void bark() { cout << "Barking" << endl; }
};
int main() {
    Dog d;
    d.eat();
    d.bark();
    return 0;
}
```

*Hint:* Dog inherits eat() from Animal and has its own bark().

**Answer:** `Eating`
`Barking`

`Dog` inherits `eat()` from `Animal` and defines its own `bark()`. Both are accessible on a `Dog` object.

### Q5. [Easy] What is the output?

```
#include 
using namespace std;
class A {
public:
    A() { cout << "A "; }
};
class B : public A {
public:
    B() { cout << "B "; }
};
class C : public B {
public:
    C() { cout << "C "; }
};
int main() {
    C c;
    return 0;
}
```

*Hint:* Multilevel inheritance: A -> B -> C. Constructors run top to bottom.

**Answer:** `A B C `

Multilevel chain: `A` is constructed first, then `B`, then `C`.

### Q6. [Medium] What is the output?

```
#include 
using namespace std;
class A {
public:
    A() { cout << "A "; }
    ~A() { cout << "~A "; }
};
class B {
public:
    B() { cout << "B "; }
    ~B() { cout << "~B "; }
};
class C : public A, public B {
public:
    C() { cout << "C "; }
    ~C() { cout << "~C "; }
};
int main() {
    C c;
    return 0;
}
```

*Hint:* Multiple inheritance: base classes constructed in declaration order (A first, then B).

**Answer:** `A B C ~C ~B ~A `

Base classes are constructed in declaration order: A, B, then C. Destructors run in reverse: ~C, ~B, ~A.

### Q7. [Medium] What is the output?

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
    Derived d;
    d.show();
    d.Base::show();
    return 0;
}
```

*Hint:* d.show() calls Derived's version. d.Base::show() explicitly calls the base version.

**Answer:** `Derived`
`Base`

`d.show()` calls `Derived::show()` (hides the base version). `d.Base::show()` explicitly calls `Base::show()` using scope resolution.

### Q8. [Medium] What is the output?

```
#include 
using namespace std;
class A {
public:
    A(int x) { cout << "A(" << x << ") "; }
};
class B : public A {
public:
    B(int x) : A(x * 2) { cout << "B(" << x << ") "; }
};
class C : public B {
public:
    C(int x) : B(x + 1) { cout << "C(" << x << ") "; }
};
int main() {
    C c(5);
    return 0;
}
```

*Hint:* C(5) calls B(6), which calls A(12). Trace the values.

**Answer:** `A(12) B(6) C(5) `

`C(5)` calls `B(5+1=6)`. `B(6)` calls `A(6*2=12)`. Construction order: A(12), B(6), C(5).

### Q9. [Medium] What is the output?

```
#include 
using namespace std;
class Base {
protected:
    int x;
public:
    Base(int v) : x(v) {}
};
class D1 : public Base {
public:
    D1(int v) : Base(v) {}
    int get() { return x; }
};
class D2 : public Base {
public:
    D2(int v) : Base(v) {}
    int get() { return x * 2; }
};
int main() {
    D1 a(10);
    D2 b(10);
    cout << a.get() << " " << b.get() << endl;
    return 0;
}
```

*Hint:* D1 and D2 both inherit from Base but compute differently from the protected x.

**Answer:** `10 20`

Both `D1` and `D2` inherit `x = 10` from `Base`. `D1::get()` returns x (10). `D2::get()` returns x*2 (20). This is hierarchical inheritance.

### Q10. [Medium] What is the output?

```
#include 
using namespace std;
class A {
public:
    A() { cout << "A "; }
};
class B {
public:
    B() { cout << "B "; }
};
class C : public B, public A {
    A memberA;
    B memberB;
public:
    C() { cout << "C "; }
};
int main() {
    C c;
    return 0;
}
```

*Hint:* Order: base classes (declaration order B, A), then members (declaration order memberA, memberB), then C's body.

**Answer:** `B A A B C `

Base classes first in declaration order: B, A. Then member objects in declaration order: memberA (A), memberB (B). Finally C's constructor body.

### Q11. [Hard] What is the output?

```
#include 
using namespace std;
class A {
public:
    A() { cout << "A "; }
};
class B : virtual public A {
public:
    B() { cout << "B "; }
};
class C : virtual public A {
public:
    C() { cout << "C "; }
};
class D : public B, public C {
public:
    D() { cout << "D "; }
};
int main() {
    D d;
    return 0;
}
```

*Hint:* Virtual base A is constructed only once, before any non-virtual bases. Then B, C, D.

**Answer:** `A B C D `

With virtual inheritance, the virtual base `A` is constructed first (only once). Then non-virtual bases in declaration order: `B`, `C`. Finally `D`.

### Q12. [Hard] What is the output?

```
#include 
using namespace std;
class A {
public:
    int x;
    A() : x(0) {}
};
class B : public A {};
class C : public A {};
class D : public B, public C {
public:
    void set(int v) {
        B::x = v;
        C::x = v * 10;
    }
    void show() {
        cout << B::x << " " << C::x << endl;
    }
};
int main() {
    D d;
    d.set(5);
    d.show();
    return 0;
}
```

*Hint:* Without virtual inheritance, D has two separate copies of A. B::x and C::x are different variables.

**Answer:** `5 50`

Without virtual inheritance, `D` has two copies of `A`. `B::x` and `C::x` are separate variables. `set(5)` sets B::x to 5 and C::x to 50.

### Q13. [Hard] What is the output?

```
#include 
using namespace std;
class Base {
public:
    int x;
    Base(int v) : x(v) { cout << "Base(" << v << ") "; }
};
class Mid : virtual public Base {
public:
    Mid(int v) : Base(v) { cout << "Mid(" << v << ") "; }
};
class Leaf : public Mid {
public:
    Leaf(int v) : Base(v * 10), Mid(v) { cout << "Leaf(" << v << ") "; }
};
int main() {
    Leaf l(3);
    cout << endl << l.x << endl;
    return 0;
}
```

*Hint:* In virtual inheritance, the most derived class (Leaf) calls the virtual base constructor. Mid's call to Base is ignored.

**Answer:** `Base(30) Mid(3) Leaf(3) `
`30`

`Leaf(3)` calls `Base(30)` directly (most derived class responsibility). `Mid(3)`'s call to `Base(3)` is ignored. So x = 30.

### Q14. [Hard] What is the output?

```
#include 
using namespace std;
class A {
public:
    A() { cout << "A "; }
    ~A() { cout << "~A "; }
};
class B : virtual public A {
public:
    B() { cout << "B "; }
    ~B() { cout << "~B "; }
};
class C : virtual public A {
public:
    C() { cout << "C "; }
    ~C() { cout << "~C "; }
};
class D : public B, public C {
public:
    D() { cout << "D "; }
    ~D() { cout << "~D "; }
};
int main() {
    D d;
    cout << endl;
    return 0;
}
```

*Hint:* Virtual base A constructed once, first. Destruction is reverse of construction.

**Answer:** `A B C D `
`~D ~C ~B ~A `

Construction: virtual base A first, then B, C, D. Destruction reverses: ~D, ~C, ~B, ~A. The virtual base A is destroyed last, only once.

### Q15. [Hard] What is the output?

```
#include 
using namespace std;
class Base {
public:
    void show() { cout << "Base" << endl; }
};
class Derived : private Base {
public:
    void test() {
        show();  // OK: private inheritance, but accessible inside Derived
    }
};
int main() {
    Derived d;
    d.test();
    // d.show();  // Error: show() is private in Derived's context
    return 0;
}
```

*Hint:* With private inheritance, base public members become private in derived. Accessible inside Derived but not outside.

**Answer:** `Base`

With `private` inheritance, `Base::show()` becomes private in `Derived`. It is accessible inside `Derived`'s methods but not from `main()`. `d.test()` works because `test()` is public and calls `show()` internally.

### Q16. [Hard] What is the output?

```
#include 
using namespace std;
class X {
public:
    X() { cout << "X "; }
};
class Y {
public:
    Y() { cout << "Y "; }
};
class A : virtual public X {
public:
    A() { cout << "A "; }
};
class B : virtual public X, virtual public Y {
public:
    B() { cout << "B "; }
};
class C : public A, public B {
public:
    C() { cout << "C "; }
};
int main() {
    C c;
    return 0;
}
```

*Hint:* Virtual bases are constructed first (in the order they first appear): X then Y. Then non-virtual: A, B. Then C.

**Answer:** `X Y A B C `

Virtual bases are constructed first in the order they first appear in the inheritance graph: X (from A), Y (from B). Then A, B in declaration order. Finally C.

### Q17. [Hard] What is the output?

```
#include 
using namespace std;
class Greet {
public:
    void hello() { cout << "Hello "; }
};
class D1 : public Greet {
public:
    void hello() { cout << "Hi "; }
};
class D2 : public D1 {
public:
    void test() {
        hello();
        D1::hello();
        Greet::hello();
    }
};
int main() {
    D2 d;
    d.test();
    return 0;
}
```

*Hint:* hello() without qualifier calls the nearest version (D1). Scope resolution calls specific versions.

**Answer:** `Hi Hi Hello `

`hello()` without qualifier calls `D1::hello()` (nearest in the chain). `D1::hello()` explicitly calls D1's version. `Greet::hello()` explicitly calls the original base version.

### Q18. [Medium] What happens when you compile this?

```
#include 
using namespace std;
class Base {
private:
    int secret;
public:
    Base(int s) : secret(s) {}
};
class Derived : public Base {
public:
    Derived(int s) : Base(s) {}
    void show() {
        cout << secret << endl;
    }
};
int main() {
    Derived d(10);
    d.show();
    return 0;
}
```

*Hint:* secret is private in Base. Can Derived access it directly?

**Answer:** Compilation error: `'secret' is a private member of 'Base'`

Private members of a base class are never accessible in derived classes, regardless of the inheritance mode. To allow access, change `secret` to `protected` or provide a public/protected getter.

### Q19. [Easy] What is the output?

```
#include 
using namespace std;
class Vehicle {
public:
    Vehicle() { cout << "V "; }
};
class Car : public Vehicle {
public:
    Car() { cout << "C "; }
};
class SportsCar : public Car {
public:
    SportsCar() { cout << "S "; }
};
int main() {
    SportsCar sc;
    return 0;
}
```

*Hint:* Multilevel: Vehicle -> Car -> SportsCar. Constructors run base to derived.

**Answer:** `V C S `

Constructors run from the topmost base to the most derived: Vehicle, Car, SportsCar.

### Q20. [Medium] What is the output?

```
#include 
using namespace std;
class Base {
public:
    Base(int x) { cout << "B(" << x << ") "; }
    ~Base() { cout << "~B "; }
};
class Derived : public Base {
public:
    Derived(int x) : Base(x * 2) { cout << "D(" << x << ") "; }
    ~Derived() { cout << "~D "; }
};
int main() {
    Derived d(5);
    return 0;
}
```

*Hint:* Derived(5) calls Base(10). Constructors: base first. Destructors: derived first.

**Answer:** `B(10) D(5) ~D ~B `

Derived(5) calls Base(5*2=10). Construction: B(10) then D(5). Destruction: ~D then ~B.

### Q21. [Hard] What is the output?

```
#include 
using namespace std;
class A {
public:
    int x;
    A(int v = 0) : x(v) { cout << "A(" << v << ") "; }
};
class B : virtual public A {
public:
    B(int v) : A(v) { cout << "B "; }
};
class C : virtual public A {
public:
    C(int v) : A(v) { cout << "C "; }
};
class D : public B, public C {
public:
    D(int v) : A(v * 10), B(v), C(v) { cout << "D "; }
};
int main() {
    D d(5);
    cout << d.x << endl;
    return 0;
}
```

*Hint:* Most derived class D calls A(50). B and C's calls to A are ignored. Only one A exists.

**Answer:** `A(50) B C D 50`

With virtual inheritance, D calls A(50). B(5) and C(5) calls to A are ignored. One copy of A with x=50.

### Q22. [Easy] What is the output?

```
#include 
using namespace std;
class Animal {
public:
    string sound() { return "..."; }
};
class Cat : public Animal {
public:
    string sound() { return "Meow"; }
};
class Kitten : public Cat {
public:
    string sound() { return "Mew"; }
};
int main() {
    Kitten k;
    cout << k.sound() << endl;
    cout << k.Cat::sound() << endl;
    cout << k.Animal::sound() << endl;
    return 0;
}
```

*Hint:* Direct call uses Kitten's version. Scope resolution calls the specific class version.

**Answer:** `Mew`
`Meow`
`...`

`k.sound()` calls Kitten::sound. `k.Cat::sound()` calls Cat::sound. `k.Animal::sound()` calls Animal::sound. Scope resolution bypasses hiding.

### Q23. [Medium] What is the output?

```
#include 
using namespace std;
class X { public: X() { cout << "X "; } ~X() { cout << "~X "; } };
class Y { public: Y() { cout << "Y "; } ~Y() { cout << "~Y "; } };
class Z : public Y, public X {
public:
    Z() { cout << "Z "; }
    ~Z() { cout << "~Z "; }
};
int main() { Z z; cout << endl; return 0; }
```

*Hint:* Declaration order is Y, X. Construction follows declaration order, not alphabetical.

**Answer:** `Y X Z `
`~Z ~X ~Y `

Construction order follows declaration: Y first, X second, then Z. Destruction reverses: ~Z, ~X, ~Y.

## Mixed Questions

### Q1. [Easy] What are the five types of inheritance in C++?

*Hint:* Think about how many base and derived classes are involved and how they connect.

**Answer:** Single (one base, one derived), Multiple (two or more bases, one derived), Multilevel (chain: A -> B -> C), Hierarchical (one base, multiple derived), and Hybrid (combination of two or more types).

C++ supports all five types. Java does not support multiple class inheritance (only interface inheritance). The diamond problem arises from hybrid inheritance combining multiple and hierarchical patterns.

### Q2. [Easy] In what order are constructors called in a multilevel inheritance chain A -> B -> C?

*Hint:* Think top to bottom.

**Answer:** A's constructor first, then B's, then C's. Destructors run in the reverse order: ~C, ~B, ~A.

Base class constructors always run before derived class constructors. This ensures the base part is fully initialized before the derived part attempts to use it. Destruction is the exact reverse.

### Q3. [Easy] What is the output?

```
#include 
using namespace std;
class Shape {
public:
    void draw() { cout << "Shape" << endl; }
};
class Circle : public Shape {
public:
    void draw() { cout << "Circle" << endl; }
};
int main() {
    Circle c;
    c.draw();
    return 0;
}
```

*Hint:* The Circle object calls its own draw(), which hides Base::draw().

**Answer:** `Circle`

`Circle::draw()` hides `Shape::draw()`. When called on a `Circle` object directly, the derived version runs.

### Q4. [Easy] What is the output?

```
#include 
using namespace std;
class Parent {
public:
    Parent() { cout << "Parent "; }
    ~Parent() { cout << "~Parent "; }
};
class Child : public Parent {
public:
    Child() { cout << "Child "; }
    ~Child() { cout << "~Child "; }
};
int main() {
    Child* c = new Child();
    delete c;
    return 0;
}
```

*Hint:* Dynamic allocation. Constructor: Parent then Child. Destructor: Child then Parent.

**Answer:** `Parent Child ~Child ~Parent `

Construction: Parent first, Child second. `delete c` calls ~Child first, ~Parent second.

### Q5. [Medium] What is the output?

```
#include 
using namespace std;
class A {
public:
    void greet() { cout << "Hello from A" << endl; }
};
class B {
public:
    void greet() { cout << "Hello from B" << endl; }
};
class C : public A, public B {
public:
    void greetBoth() {
        A::greet();
        B::greet();
    }
};
int main() {
    C c;
    c.greetBoth();
    c.A::greet();
    return 0;
}
```

*Hint:* c.greet() would be ambiguous, but A::greet() and B::greet() disambiguate.

**Answer:** `Hello from A`
`Hello from B`
`Hello from A`

Both `A` and `B` have `greet()`. Inside `greetBoth()`, scope resolution is used. `c.A::greet()` explicitly calls A's version.

### Q6. [Medium] What is the output?

```
#include 
using namespace std;
class Base {
public:
    void show() { cout << "Base" << endl; }
};
class Mid : public Base {
public:
    void show() {
        Base::show();
        cout << "Mid" << endl;
    }
};
class Leaf : public Mid {
public:
    void show() {
        Mid::show();
        cout << "Leaf" << endl;
    }
};
int main() {
    Leaf l;
    l.show();
    return 0;
}
```

*Hint:* Leaf::show calls Mid::show, which calls Base::show. The chain unfolds.

**Answer:** `Base`
`Mid`
`Leaf`

`Leaf::show()` calls `Mid::show()`, which calls `Base::show()`. The calls chain: Base prints "Base", Mid prints "Mid", Leaf prints "Leaf".

### Q7. [Medium] What is the output?

```
#include 
using namespace std;
class Base {
protected:
    int val;
public:
    Base(int v) : val(v) {}
};
class Derived : protected Base {
public:
    Derived(int v) : Base(v) {}
    int get() { return val; }
};
class GrandChild : public Derived {
public:
    GrandChild(int v) : Derived(v) {}
    int getDouble() { return val * 2; }
};
int main() {
    GrandChild g(5);
    cout << g.get() << " " << g.getDouble() << endl;
    return 0;
}
```

*Hint:* protected inheritance makes Base's protected val stay protected in Derived. GrandChild can still access it.

**Answer:** `5 10`

With `protected` inheritance, `val` (protected in Base) remains protected in `Derived`. `GrandChild` inherits publicly from `Derived`, so it can access `val`.

### Q8. [Hard] What is the output?

```
#include 
using namespace std;
class V {
public:
    int x;
    V(int v = 0) : x(v) { cout << "V(" << v << ") "; }
};
class A : virtual public V {
public:
    A(int v) : V(v) { cout << "A "; }
};
class B : virtual public V {
public:
    B(int v) : V(v) { cout << "B "; }
};
class C : public A, public B {
public:
    C(int v) : V(v * 100), A(v), B(v) { cout << "C "; }
};
int main() {
    C c(3);
    cout << endl << c.x << endl;
    return 0;
}
```

*Hint:* The most derived class C calls V(300). A and B's calls to V are ignored.

**Answer:** `V(300) A B C `
`300`

With virtual inheritance, `C` (the most derived class) calls `V(300)`. `A` and `B`'s calls to `V` are ignored. There is only one `x`, and it equals 300.

### Q9. [Hard] What is the output?

```
#include 
using namespace std;
class A {
public:
    int x;
    A(int v = 0) : x(v) {}
};
class B : virtual public A {
public:
    B(int v) : A(v) {}
};
class C : virtual public A {
public:
    C(int v) : A(v) {}
};
class D : public B, public C {
public:
    D(int v) : A(v), B(v + 1), C(v + 2) {}
};
int main() {
    D d(10);
    cout << d.x << " " << d.B::x << " " << d.C::x << endl;
    return 0;
}
```

*Hint:* With virtual inheritance, there is only one A. B::x and C::x both refer to the same x.

**Answer:** `10 10 10`

Virtual inheritance means one shared `A`. `D` calls `A(10)`. `d.x`, `d.B::x`, and `d.C::x` all refer to the same `x = 10`.

### Q10. [Hard] What is the output?

```
#include 
using namespace std;
class Base {
public:
    Base() { cout << "Base "; }
    ~Base() { cout << "~Base "; }
};
class Member {
public:
    Member() { cout << "Member "; }
    ~Member() { cout << "~Member "; }
};
class Derived : public Base {
    Member m1;
    Member m2;
public:
    Derived() { cout << "Derived "; }
    ~Derived() { cout << "~Derived "; }
};
int main() {
    Derived d;
    cout << endl;
    return 0;
}
```

*Hint:* Order: base, members (in declaration order), then derived. Destruction is reverse.

**Answer:** `Base Member Member Derived `
`~Derived ~Member ~Member ~Base `

Construction: Base first, then members m1 and m2, then Derived body. Destruction reverses: ~Derived, ~m2 (~Member), ~m1 (~Member), ~Base.

## Multiple Choice Questions

### Q1. [Easy] What is the syntax for public inheritance in C++?

**Answer:** B

**B is correct.** C++ uses the colon syntax: `class Derived : public Base`. Java uses `extends` (A) and `implements` (C). The arrow syntax (D) is not valid.

### Q2. [Easy] In single inheritance, how many base classes does a derived class have?

**Answer:** B

**B is correct.** Single inheritance involves exactly one base class and one derived class. Multiple inheritance involves two or more base classes.

### Q3. [Easy] What is the order of constructor calls in inheritance?

**Answer:** B

**B is correct.** The base class constructor always runs before the derived class constructor. This ensures the base part is fully initialized before the derived part uses it.

### Q4. [Easy] Which inheritance type is NOT supported in Java but IS supported in C++?

**Answer:** C

**C is correct.** Java does not support multiple class inheritance (a class extending two classes). C++ supports it. Java uses interfaces instead.

### Q5. [Easy] With public inheritance, how do base class public members appear in the derived class?

**Answer:** C

**C is correct.** Public inheritance preserves access levels: base public stays public, base protected stays protected. This models the "is-a" relationship.

### Q6. [Medium] What is the diamond problem in C++?

**Answer:** B

**B is correct.** The diamond problem occurs when class D inherits from B and C, and both B and C inherit from A. Without virtual inheritance, D gets two copies of A's members.

### Q7. [Medium] How does virtual inheritance solve the diamond problem?

**Answer:** B

**B is correct.** Virtual inheritance ensures that a shared base class is included only once in the inheritance hierarchy, regardless of how many paths lead to it.

### Q8. [Medium] In virtual inheritance, who is responsible for calling the virtual base class constructor?

**Answer:** B

**B is correct.** With virtual inheritance, the most derived class in the hierarchy must call the virtual base class constructor. Intermediate classes' calls to the virtual base constructor are ignored.

### Q9. [Medium] With private inheritance, how do base class public members appear in the derived class?

**Answer:** C

**C is correct.** Private inheritance makes all inherited members private in the derived class. They are accessible within the derived class but not from outside or from further derived classes.

### Q10. [Medium] What determines the order of base class construction in multiple inheritance?

**Answer:** C

**C is correct.** Base classes are constructed in the order they appear in the class definition (`class D : public B, public A` constructs B first, then A), regardless of the initializer list order.

### Q11. [Hard] In a virtual inheritance hierarchy, when are virtual bases constructed relative to non-virtual bases?

**Answer:** B

**B is correct.** Virtual base classes are always constructed first, before any non-virtual base classes, regardless of where they appear in the inheritance declarations.

### Q12. [Hard] What is the difference between method hiding and method overriding?

**Answer:** C

**C is correct.** When a derived class defines a method with the same name as a non-virtual base method, it hides the base version (resolved at compile time). When the base method is virtual and the derived method has the same signature, it overrides it (resolved at runtime via vtable).

### Q13. [Hard] If class D : private Base, can a class E : public D access Base's originally public members?

**Answer:** B

**B is correct.** Private inheritance makes all Base members private in D. When E inherits from D, those members are not accessible to E (private members are not inherited further).

### Q14. [Hard] What happens if the most derived class does NOT explicitly call the virtual base constructor?

**Answer:** B

**B is correct.** If the most derived class does not explicitly call the virtual base constructor, the compiler uses the default constructor (if available). If no default constructor exists, it is a compilation error.

### Q15. [Easy] Can a derived class access the private members of its base class?

**Answer:** C

**C is correct.** Private members of a base class are never directly accessible in derived classes, regardless of the inheritance mode (public, protected, or private).

### Q16. [Medium] Which type of inheritance models the 'implemented-in-terms-of' relationship?

**Answer:** C

**C is correct.** Private inheritance means the derived class uses the base class's implementation but does not expose it. This models 'implemented-in-terms-of' rather than 'is-a'.

### Q17. [Medium] What is hierarchical inheritance?

**Answer:** B

**B is correct.** Hierarchical inheritance has one base class and multiple derived classes that independently extend it. Example: Shape is the base; Circle, Rectangle, Triangle are derived.

### Q18. [Hard] In multiple inheritance, if both base classes have a method with the same name, what happens when the derived class calls it?

**Answer:** C

**C is correct.** If both base classes have a method with the same name and the derived class does not override it, calling the method is ambiguous and causes a compilation error. Use scope resolution (Base1::method()) to disambiguate.

### Q19. [Easy] What is the destructor order in single inheritance (Base -> Derived)?

**Answer:** B

**B is correct.** Destructors run in the reverse of construction order. For single inheritance, the derived destructor runs first, then the base destructor.

### Q20. [Hard] What happens when you try to convert a Derived* to Base* with private inheritance?

**Answer:** C

**C is correct.** With private inheritance, the base class is a private implementation detail. The derived-to-base conversion is only accessible inside the derived class's own member functions and friends, not from outside code.

## Coding Challenges

### Challenge 1. University Hierarchy with Multilevel Inheritance

**Difficulty:** Easy

Create a Person class (name, age), a Student class that extends Person (rollNumber, semester), and a GraduateStudent that extends Student (thesisTopic, advisor). Show constructor/destructor order and demonstrate accessing inherited members.

**Constraints:**

- Use protected for name and age. Call base constructors explicitly. Show destruction order.

**Sample input:**

```
Name: Priya, Age: 23, Roll: 101, Semester: 6, Thesis: ML in Healthcare, Advisor: Dr. Mehta
```

**Sample output:**

```
Person(Priya) Student(101) GraduateStudent()
Priya, 23, Roll: 101, Sem: 6
Thesis: ML in Healthcare, Advisor: Dr. Mehta
~GraduateStudent ~Student ~Person
```

**Solution:**

```cpp
#include <iostream>
#include <string>
using namespace std;

class Person {
protected:
    string name;
    int age;
public:
    Person(string n, int a) : name(n), age(a) {
        cout << "Person(" << name << ") ";
    }
    ~Person() { cout << "~Person "; }
};

class Student : public Person {
protected:
    int rollNumber;
    int semester;
public:
    Student(string n, int a, int r, int s)
        : Person(n, a), rollNumber(r), semester(s) {
        cout << "Student(" << rollNumber << ") ";
    }
    ~Student() { cout << "~Student "; }
    void showStudent() {
        cout << name << ", " << age << ", Roll: " << rollNumber
             << ", Sem: " << semester << endl;
    }
};

class GraduateStudent : public Student {
    string thesis;
    string advisor;
public:
    GraduateStudent(string n, int a, int r, int s, string t, string adv)
        : Student(n, a, r, s), thesis(t), advisor(adv) {
        cout << "GraduateStudent()" << endl;
    }
    ~GraduateStudent() { cout << "~GraduateStudent "; }
    void showAll() {
        showStudent();
        cout << "Thesis: " << thesis << ", Advisor: " << advisor << endl;
    }
};

int main() {
    GraduateStudent g("Priya", 23, 101, 6, "ML in Healthcare", "Dr. Mehta");
    g.showAll();
    return 0;
}
```

### Challenge 2. Multiple Inheritance: Printable + Loggable

**Difficulty:** Medium

Create a Printable class with a print() method and a Loggable class with a log() method. Create a Document class that inherits from both and has a title and content. Document's print() should call the base print logic and add its own. Demonstrate multiple inheritance.

**Constraints:**

- Use multiple inheritance. Call base class methods with scope resolution.

**Sample input:**

```
Title: Report, Content: Quarterly earnings up 15%
```

**Sample output:**

```
[Printable] Sending to printer...
Document: Report
Quarterly earnings up 15%
[Loggable] Logged at timestamp
Document Report logged
```

**Solution:**

```cpp
#include <iostream>
#include <string>
using namespace std;

class Printable {
public:
    void print() { cout << "[Printable] Sending to printer..." << endl; }
};

class Loggable {
public:
    void log() { cout << "[Loggable] Logged at timestamp" << endl; }
};

class Document : public Printable, public Loggable {
    string title;
    string content;
public:
    Document(string t, string c) : title(t), content(c) {}
    void print() {
        Printable::print();
        cout << "Document: " << title << endl;
        cout << content << endl;
    }
    void log() {
        Loggable::log();
        cout << "Document " << title << " logged" << endl;
    }
};

int main() {
    Document doc("Report", "Quarterly earnings up 15%");
    doc.print();
    doc.log();
    return 0;
}
```

### Challenge 3. Diamond Problem with Virtual Inheritance

**Difficulty:** Hard

Create a Device base class (serialNumber, powerOn/powerOff). Create Printer (printDoc) and Scanner (scanDoc) that virtually inherit from Device. Create AllInOne that inherits from both Printer and Scanner. Demonstrate that Device is constructed only once and the serial number is shared.

**Constraints:**

- Use virtual inheritance. Most derived class must call Device constructor. Show that serial number is not duplicated.

**Sample input:**

```
Serial: DEV-2026-001
```

**Sample output:**

```
Device(DEV-2026-001) constructed
Printer constructed
Scanner constructed
AllInOne constructed
Serial: DEV-2026-001
Powering on DEV-2026-001
Printing document...
Scanning document...
Powering off DEV-2026-001
```

**Solution:**

```cpp
#include <iostream>
#include <string>
using namespace std;

class Device {
protected:
    string serialNumber;
    bool isOn;
public:
    Device(string sn = "") : serialNumber(sn), isOn(false) {
        cout << "Device(" << sn << ") constructed" << endl;
    }
    void powerOn() {
        isOn = true;
        cout << "Powering on " << serialNumber << endl;
    }
    void powerOff() {
        isOn = false;
        cout << "Powering off " << serialNumber << endl;
    }
    string getSerial() const { return serialNumber; }
};

class Printer : virtual public Device {
public:
    Printer(string sn) : Device(sn) {
        cout << "Printer constructed" << endl;
    }
    void printDoc() {
        cout << "Printing document..." << endl;
    }
};

class Scanner : virtual public Device {
public:
    Scanner(string sn) : Device(sn) {
        cout << "Scanner constructed" << endl;
    }
    void scanDoc() {
        cout << "Scanning document..." << endl;
    }
};

class AllInOne : public Printer, public Scanner {
public:
    AllInOne(string sn) : Device(sn), Printer(sn), Scanner(sn) {
        cout << "AllInOne constructed" << endl;
    }
};

int main() {
    AllInOne aio("DEV-2026-001");
    cout << "Serial: " << aio.getSerial() << endl;
    aio.powerOn();
    aio.printDoc();
    aio.scanDoc();
    aio.powerOff();
    return 0;
}
```

### Challenge 4. Access Control Demonstration

**Difficulty:** Medium

Create a Base class with one public, one protected, and one private member. Create three derived classes: PublicChild (public inheritance), ProtectedChild (protected inheritance), and PrivateChild (private inheritance). In each, demonstrate which members are accessible inside the derived class and from main(). Create a GrandChild of PrivateChild to show that private inheritance stops further access.

**Constraints:**

- Show access results clearly. Use comments to indicate compilation errors.

**Sample input:**

```
Base members: pub=1, prot=2, priv=3
```

**Sample output:**

```
PublicChild: pub=1 prot=2 (priv not accessible)
main: pd.pub=1 (prot, priv not accessible)
ProtectedChild: pub=1 prot=2 (priv not accessible)
main: cannot access any through ProtectedChild
PrivateChild: pub=1 prot=2 (priv not accessible)
GrandChild: cannot access any Base members
```

**Solution:**

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

class PublicChild : public Base {
public:
    void show() {
        cout << "PublicChild: pub=" << pub << " prot=" << prot
             << " (priv not accessible)" << endl;
    }
};

class ProtectedChild : protected Base {
public:
    void show() {
        cout << "ProtectedChild: pub=" << pub << " prot=" << prot
             << " (priv not accessible)" << endl;
    }
};

class PrivateChild : private Base {
public:
    void show() {
        cout << "PrivateChild: pub=" << pub << " prot=" << prot
             << " (priv not accessible)" << endl;
    }
};

class GrandChild : public PrivateChild {
public:
    void show() {
        // Cannot access pub or prot: they became private in PrivateChild
        cout << "GrandChild: cannot access any Base members" << endl;
    }
};

int main() {
    PublicChild pc;
    pc.show();
    cout << "main: pd.pub=" << pc.pub << " (prot, priv not accessible)" << endl;

    ProtectedChild ptc;
    ptc.show();
    cout << "main: cannot access any through ProtectedChild" << endl;

    PrivateChild pvc;
    pvc.show();

    GrandChild gc;
    gc.show();
    return 0;
}
```

### Challenge 5. Constructor Order Tracer with Virtual and Non-Virtual Bases

**Difficulty:** Hard

Create a class hierarchy with virtual and non-virtual bases to demonstrate the exact construction and destruction order. Classes: V1 (virtual base), V2 (virtual base), N1 (non-virtual), N2 (non-virtual). Class Mid1 : virtual V1, N1. Class Mid2 : virtual V2, N2. Class Final : Mid1, Mid2. Print construction and destruction order.

**Constraints:**

- Show that virtual bases are constructed first (before any non-virtual bases). Destruction is exact reverse.

**Sample input:**

```
Creating Final object
```

**Sample output:**

```
V1() V2() N1() Mid1() N2() Mid2() Final()
~Final() ~Mid2() ~N2() ~Mid1() ~N1() ~V2() ~V1()
```

**Solution:**

```cpp
#include <iostream>
using namespace std;

class V1 {
public:
    V1() { cout << "V1() "; }
    ~V1() { cout << "~V1() "; }
};

class V2 {
public:
    V2() { cout << "V2() "; }
    ~V2() { cout << "~V2() "; }
};

class N1 {
public:
    N1() { cout << "N1() "; }
    ~N1() { cout << "~N1() "; }
};

class N2 {
public:
    N2() { cout << "N2() "; }
    ~N2() { cout << "~N2() "; }
};

class Mid1 : virtual public V1, public N1 {
public:
    Mid1() { cout << "Mid1() "; }
    ~Mid1() { cout << "~Mid1() "; }
};

class Mid2 : virtual public V2, public N2 {
public:
    Mid2() { cout << "Mid2() "; }
    ~Mid2() { cout << "~Mid2() "; }
};

class Final : public Mid1, public Mid2 {
public:
    Final() { cout << "Final()" << endl; }
    ~Final() { cout << "~Final() "; }
};

int main() {
    Final f;
    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/inheritance-in-cpp/*
