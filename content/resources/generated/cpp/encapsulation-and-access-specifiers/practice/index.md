---
title: "Practice: Encapsulation, Access Specifiers, and Friend Functions"
description: "52 practice problems for Encapsulation, Access Specifiers, and Friend Functions in C++"
slug: encapsulation-and-access-specifiers-practice
canonical: https://learn.modernagecoders.com/resources/cpp/encapsulation-and-access-specifiers/practice/
category: "C++"
---
# Practice: Encapsulation, Access Specifiers, and Friend Functions

**Total questions:** 52

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
#include 
using namespace std;
class Box {
private:
    int val;
public:
    Box(int v) : val(v) {}
    int getVal() const { return val; }
};
int main() {
    Box b(10);
    cout << b.getVal() << endl;
    return 0;
}
```

*Hint:* val is private but getVal() is a public getter that returns it.

**Answer:** `10`

The constructor initializes `val` to 10. The public `getVal()` method provides read access to the private member. It returns 10.

### Q2. [Easy] What happens when you compile this code?

```
#include 
using namespace std;
class Secret {
private:
    int x;
public:
    Secret(int v) : x(v) {}
};
int main() {
    Secret s(5);
    cout << s.x << endl;
    return 0;
}
```

*Hint:* x is a private member. Can main() access it directly?

**Answer:** Compilation error: `'x' is a private member of 'Secret'`

The member `x` is `private`, so it cannot be accessed outside the class. Only member functions and friend functions of `Secret` can access `x`.

### Q3. [Easy] What is the output?

```
#include 
using namespace std;
struct Point {
    int x, y;
};
int main() {
    Point p;
    p.x = 3;
    p.y = 4;
    cout << p.x << ", " << p.y << endl;
    return 0;
}
```

*Hint:* struct members are public by default, unlike class members.

**Answer:** `3, 4`

In a `struct`, members are `public` by default. So `p.x` and `p.y` can be accessed directly from `main()`.

### Q4. [Easy] What is the output?

```
#include 
using namespace std;
class Counter {
    int count;
public:
    Counter() : count(0) {}
    void increment() { count++; }
    int getCount() const { return count; }
};
int main() {
    Counter c;
    c.increment();
    c.increment();
    c.increment();
    cout << c.getCount() << endl;
    return 0;
}
```

*Hint:* count starts at 0 and is incremented three times. getCount() returns it.

**Answer:** `3`

`count` is private (default in class). It is initialized to 0 and incremented 3 times through the public `increment()` method. `getCount()` returns 3.

### Q5. [Easy] What is the output?

```
#include 
using namespace std;
class Pair {
private:
    int a, b;
public:
    Pair(int x, int y) : a(x), b(y) {}
    friend int sum(const Pair& p);
};
int sum(const Pair& p) {
    return p.a + p.b;
}
int main() {
    Pair p(10, 20);
    cout << sum(p) << endl;
    return 0;
}
```

*Hint:* sum() is a friend function of Pair, so it can access private members a and b.

**Answer:** `30`

The `sum()` function is declared as a `friend` of `Pair`, so it can access the private members `a` and `b` directly. It returns 10 + 20 = 30.

### Q6. [Medium] What is the output?

```
#include 
using namespace std;
class Base {
protected:
    int x;
public:
    Base(int v) : x(v) {}
};
class Derived : public Base {
public:
    Derived(int v) : Base(v) {}
    void show() { cout << x << endl; }
};
int main() {
    Derived d(42);
    d.show();
    return 0;
}
```

*Hint:* x is protected in Base. Can Derived access it?

**Answer:** `42`

`x` is `protected` in `Base`, so `Derived` can access it directly. The constructor passes 42 to `Base`, and `show()` prints 42.

### Q7. [Medium] What is the output?

```
#include 
using namespace std;
class A {
private:
    int val;
public:
    A(int v) : val(v) {}
    friend class B;
};
class B {
public:
    void show(const A& a) {
        cout << a.val << endl;
    }
    void modify(A& a, int v) {
        a.val = v;
    }
};
int main() {
    A a(100);
    B b;
    b.show(a);
    b.modify(a, 200);
    b.show(a);
    return 0;
}
```

*Hint:* B is a friend class of A, so all of B's methods can access A's private members.

**Answer:** `100`
`200`

`B` is a `friend class` of `A`, so `B::show()` and `B::modify()` can access `A::val` directly. First show prints 100, then modify changes it to 200, and the second show prints 200.

### Q8. [Medium] What is the output?

```
#include 
using namespace std;
class Tracker {
    mutable int count;
    int data;
public:
    Tracker(int d) : data(d), count(0) {}
    int getData() const {
        count++;
        return data;
    }
    int getCount() const { return count; }
};
int main() {
    const Tracker t(99);
    cout << t.getData() << endl;
    cout << t.getData() << endl;
    cout << "Count: " << t.getCount() << endl;
    return 0;
}
```

*Hint:* t is const, but count is mutable. Can getData() modify count?

**Answer:** `99`
`99`
`Count: 2`

Even though `t` is `const`, the `mutable` keyword on `count` allows it to be modified in `const` methods. `getData()` is called twice, incrementing `count` to 2 each time.

### Q9. [Medium] What happens when you compile this code?

```
#include 
using namespace std;
class A {
private:
    int x = 10;
    friend class B;
};
class B {
    int y = 20;
};
class C : public B {
public:
    void test(A& a) {
        cout << a.x << endl;
    }
};
int main() {
    A a;
    C c;
    c.test(a);
    return 0;
}
```

*Hint:* B is a friend of A. Does C inherit that friendship?

**Answer:** Compilation error: `'x' is a private member of 'A'`

Friendship is not inherited. `B` is a friend of `A`, but `C` (which derives from `B`) is not. `C` cannot access `A`'s private members.

### Q10. [Medium] What is the output?

```
#include 
using namespace std;
class Validator {
private:
    int value;
public:
    Validator(int v) : value(0) { setValue(v); }
    void setValue(int v) {
        if (v >= 0 && v <= 100) value = v;
    }
    int getValue() const { return value; }
};
int main() {
    Validator v1(50);
    cout << v1.getValue() << endl;
    v1.setValue(200);
    cout << v1.getValue() << endl;
    v1.setValue(75);
    cout << v1.getValue() << endl;
    return 0;
}
```

*Hint:* setValue only accepts values between 0 and 100 inclusive.

**Answer:** `50`
`50`
`75`

The constructor sets value to 50 (valid). `setValue(200)` is rejected because 200 > 100, so value stays 50. `setValue(75)` is valid, so value becomes 75.

### Q11. [Medium] What is the output?

```
#include 
using namespace std;
class Outer {
private:
    int x;
public:
    Outer(int v) : x(v) {}
    class Inner {
    public:
        void show(const Outer& o) {
            cout << o.x << endl;
        }
    };
};
int main() {
    Outer o(42);
    Outer::Inner in;
    in.show(o);
    return 0;
}
```

*Hint:* Inner is a nested class inside Outer. In C++11+, nested classes can access private members of the enclosing class.

**Answer:** `42`

In C++11 and later, a nested class is implicitly a friend of the enclosing class. `Inner::show()` can access `Outer::x` even though `x` is private.

### Q12. [Hard] What is the output?

```
#include 
using namespace std;
class Base {
private:
    int a;
protected:
    int b;
public:
    int c;
    Base() : a(1), b(2), c(3) {}
    friend void showBase(const Base& b);
};
class Derived : public Base {
public:
    void test() {
        // cout << a;  // Error
        cout << b << " " << c << endl;
    }
};
void showBase(const Base& obj) {
    cout << obj.a << " " << obj.b << " " << obj.c << endl;
}
int main() {
    Derived d;
    d.test();
    showBase(d);
    return 0;
}
```

*Hint:* Derived can access protected and public. The friend function can access everything in Base. Can the friend access Derived's Base part?

**Answer:** `2 3`
`1 2 3`

`Derived::test()` can access `b` (protected) and `c` (public) but not `a` (private). The friend function `showBase()` can access all three members of `Base`, even when called with a `Derived` object (which contains a `Base` subobject).

### Q13. [Hard] What is the output?

```
#include 
using namespace std;
class Matrix {
    int data[2][2];
public:
    Matrix(int a, int b, int c, int d) {
        data[0][0]=a; data[0][1]=b; data[1][0]=c; data[1][1]=d;
    }
    friend Matrix operator+(const Matrix& a, const Matrix& b);
    friend ostream& operator<<(ostream& os, const Matrix& m);
};
Matrix operator+(const Matrix& a, const Matrix& b) {
    return Matrix(
        a.data[0][0]+b.data[0][0], a.data[0][1]+b.data[0][1],
        a.data[1][0]+b.data[1][0], a.data[1][1]+b.data[1][1]
    );
}
ostream& operator<<(ostream& os, const Matrix& m) {
    os << m.data[0][0] << " " << m.data[0][1] << endl;
    os << m.data[1][0] << " " << m.data[1][1];
    return os;
}
int main() {
    Matrix a(1, 2, 3, 4), b(5, 6, 7, 8);
    Matrix c = a + b;
    cout << c << endl;
    return 0;
}
```

*Hint:* Both operator+ and operator<< are friend functions. They can access the private data array directly.

**Answer:** `6 8`
`10 12`

Both `operator+` and `operator<<` are friend functions that access the private `data` array directly. Element-wise addition: (1+5, 2+6, 3+7, 4+8) = (6, 8, 10, 12).

### Q14. [Hard] What is the output?

```
#include 
using namespace std;
class Account {
private:
    double balance;
    mutable int txnCount;
public:
    Account(double b) : balance(b), txnCount(0) {}
    double getBalance() const {
        txnCount++;
        return balance;
    }
    void deposit(double amt) {
        if (amt > 0) { balance += amt; txnCount++; }
    }
    int getTxnCount() const { return txnCount; }
};
int main() {
    Account a(1000);
    a.deposit(500);
    cout << a.getBalance() << endl;
    cout << a.getBalance() << endl;
    a.deposit(200);
    cout << a.getTxnCount() << endl;
    return 0;
}
```

*Hint:* Both deposit and getBalance increment txnCount. How many total increments?

**Answer:** `1500`
`1500`
`4`

Initial balance is 1000. `deposit(500)` makes it 1500 and increments txnCount to 1. First `getBalance()` returns 1500 and increments to 2. Second `getBalance()` returns 1500 and increments to 3. `deposit(200)` increments to 4. Final txnCount is 4.

### Q15. [Hard] What is the output?

```
#include 
using namespace std;
class Encloser {
private:
    int secret;
public:
    Encloser(int s) : secret(s) {}
    class Nested {
        int own;
    public:
        Nested(int o) : own(o) {}
        void reveal(const Encloser& e) {
            cout << "Nested own: " << own << endl;
            cout << "Encloser secret: " << e.secret << endl;
        }
    };
};
int main() {
    Encloser e(42);
    Encloser::Nested n(99);
    n.reveal(e);
    return 0;
}
```

*Hint:* In C++11+, nested classes can access private members of the enclosing class. The nested class has its own separate data.

**Answer:** `Nested own: 99`
`Encloser secret: 42`

The `Nested` class has its own member `own` (99). Since it is a nested class of `Encloser`, it can access `Encloser::secret` (42) in C++11+. The nested class needs an `Encloser` object to access its members.

### Q16. [Hard] What is the output?

```
#include 
using namespace std;
class Config {
private:
    int mode;
    mutable bool accessed;
public:
    Config(int m) : mode(m), accessed(false) {}
    int getMode() const {
        accessed = true;
        return mode;
    }
    bool wasAccessed() const { return accessed; }
};
int main() {
    const Config c(5);
    cout << c.wasAccessed() << endl;
    cout << c.getMode() << endl;
    cout << c.wasAccessed() << endl;
    return 0;
}
```

*Hint:* c is const. accessed is mutable. getMode() sets accessed to true.

**Answer:** `0`
`5`
`1`

Initially `accessed` is false (0). After calling `getMode()`, the `mutable` member `accessed` is set to true (1), even though `c` is `const`.

### Q17. [Medium] What is the output?

```
#include 
using namespace std;
class Range {
private:
    int low, high;
public:
    Range(int l, int h) : low(l), high(h) {}
    bool contains(int v) const { return v >= low && v <= high; }
    friend Range merge(const Range& a, const Range& b);
    friend ostream& operator<<(ostream& os, const Range& r);
};
Range merge(const Range& a, const Range& b) {
    return Range(min(a.low, b.low), max(a.high, b.high));
}
ostream& operator<<(ostream& os, const Range& r) {
    os << "[" << r.low << ", " << r.high << "]";
    return os;
}
int main() {
    Range a(1, 5), b(3, 8);
    Range c = merge(a, b);
    cout << c << endl;
    cout << c.contains(6) << endl;
    return 0;
}
```

*Hint:* merge is a friend that accesses private low/high directly. It creates a range from min(lows) to max(highs).

**Answer:** `[1, 8]`
`1`

`merge(a, b)` creates Range(min(1,3), max(5,8)) = Range(1, 8). The friend functions access private members directly. `contains(6)` returns true (1) because 6 is between 1 and 8.

## Mixed Questions

### Q1. [Easy] What is the difference between private and protected access specifiers in C++?

*Hint:* Think about who can access each: only the class itself, or also derived classes?

**Answer:** Private members are accessible only within the class that defines them. Protected members are accessible within the class and also in any class derived from it. Neither is accessible from outside code (e.g., main()).

Use `private` when no derived class should ever access the member. Use `protected` when derived classes need access but outside code should not. This distinction is critical for inheritance hierarchies.

### Q2. [Easy] What is the only difference between a struct and a class in C++?

*Hint:* Think about what access level members have if you do not specify one.

**Answer:** The only difference is the default access specifier. In a struct, members and inheritance are public by default. In a class, they are private by default.

Functionally, `struct` and `class` are identical in C++. You can have member functions, constructors, destructors, inheritance, and virtual functions in both. The convention is to use `struct` for simple data aggregates and `class` for objects with invariants.

### Q3. [Easy] What is the output?

```
#include 
using namespace std;
class Wrapper {
    int val;
public:
    Wrapper(int v) : val(v) {}
    int get() const { return val; }
    void set(int v) { val = v; }
};
int main() {
    Wrapper w(10);
    w.set(25);
    cout << w.get() << endl;
    return 0;
}
```

*Hint:* val is private by default in a class. set() modifies it, get() returns it.

**Answer:** `25`

The constructor sets `val` to 10. `set(25)` changes it to 25. `get()` returns 25. The private member is accessed only through public methods.

### Q4. [Easy] What is the output?

```
#include 
using namespace std;
class Circle {
private:
    double radius;
public:
    Circle(double r) : radius(r) {}
    double getArea() const { return 3.14 * radius * radius; }
    friend bool isEqual(const Circle& a, const Circle& b);
};
bool isEqual(const Circle& a, const Circle& b) {
    return a.radius == b.radius;
}
int main() {
    Circle c1(5), c2(5), c3(10);
    cout << isEqual(c1, c2) << endl;
    cout << isEqual(c1, c3) << endl;
    return 0;
}
```

*Hint:* isEqual is a friend function that compares the private radius members directly.

**Answer:** `1`
`0`

The friend function `isEqual()` compares private `radius` values directly. c1 and c2 both have radius 5 (equal, prints 1). c1 (5) and c3 (10) differ (prints 0).

### Q5. [Medium] What is the output?

```
#include 
using namespace std;
class Temperature {
private:
    double celsius;
public:
    Temperature(double c) : celsius(c) {}
    double getCelsius() const { return celsius; }
    double getFahrenheit() const { return celsius * 9.0 / 5.0 + 32; }
    void setCelsius(double c) {
        if (c >= -273.15) celsius = c;
    }
};
int main() {
    Temperature t(100);
    cout << t.getCelsius() << endl;
    cout << t.getFahrenheit() << endl;
    t.setCelsius(-300);
    cout << t.getCelsius() << endl;
    return 0;
}
```

*Hint:* setCelsius rejects values below absolute zero (-273.15). -300 is invalid.

**Answer:** `100`
`212`
`100`

Initial celsius is 100. Fahrenheit = 100 * 9/5 + 32 = 212. `setCelsius(-300)` is rejected because -300 < -273.15 (absolute zero). Celsius remains 100.

### Q6. [Medium] What happens when you compile this code?

```
#include 
using namespace std;
class A {
private:
    int x = 10;
};
class B {
public:
    void show(const A& a) {
        cout << a.x << endl;
    }
};
int main() {
    A a;
    B b;
    b.show(a);
    return 0;
}
```

*Hint:* B is NOT declared as a friend of A. Can B access A's private members?

**Answer:** Compilation error: `'x' is a private member of 'A'`

`B` is not a friend of `A`, so `B::show()` cannot access `A::x`. To fix this, either add `friend class B;` inside `A`, or provide a public getter in `A`.

### Q7. [Medium] What is the output?

```
#include 
using namespace std;
class Sensor {
private:
    double reading;
    mutable int readCount;
public:
    Sensor(double r) : reading(r), readCount(0) {}
    double getReading() const { readCount++; return reading; }
    void calibrate(double offset) { reading += offset; readCount++; }
    int getReadCount() const { return readCount; }
};
int main() {
    Sensor s(25.0);
    s.getReading();
    s.getReading();
    s.calibrate(0.5);
    s.getReading();
    cout << s.getReading() << endl;
    cout << s.getReadCount() << endl;
    return 0;
}
```

*Hint:* Count every call that increments readCount: getReading (4 calls) + calibrate (1 call).

**Answer:** `25.5`
`5`

Initial reading is 25.0. Two `getReading()` calls increment readCount to 2. `calibrate(0.5)` makes reading 25.5 and increments to 3. Two more `getReading()` calls increment to 5. The last getReading returns 25.5.

### Q8. [Medium] What is the output?

```
#include 
using namespace std;
class Data {
private:
    int arr[3];
public:
    Data(int a, int b, int c) { arr[0]=a; arr[1]=b; arr[2]=c; }
    int operator[](int i) const {
        if (i < 0 || i >= 3) return -1;
        return arr[i];
    }
    friend ostream& operator<<(ostream& os, const Data& d);
};
ostream& operator<<(ostream& os, const Data& d) {
    os << d.arr[0] << " " << d.arr[1] << " " << d.arr[2];
    return os;
}
int main() {
    Data d(10, 20, 30);
    cout << d[0] << " " << d[1] << " " << d[5] << endl;
    cout << d << endl;
    return 0;
}
```

*Hint:* operator[] returns -1 for out-of-bounds. operator<< is a friend that prints the private array.

**Answer:** `10 20 -1`
`10 20 30`

`d[0]` returns 10, `d[1]` returns 20, `d[5]` is out of bounds so returns -1. The `operator<<` friend function accesses the private array directly to print all three elements.

### Q9. [Hard] What is the output?

```
#include 
using namespace std;
class Engine {
private:
    int hp;
    friend class Car;
public:
    Engine(int h) : hp(h) {}
};
class Car {
    string model;
    Engine engine;
public:
    Car(string m, int hp) : model(m), engine(hp) {}
    void upgrade(int extraHp) {
        engine.hp += extraHp;
    }
    void show() const {
        cout << model << ": " << engine.hp << " HP" << endl;
    }
};
int main() {
    Car c("Tata Nexon", 120);
    c.show();
    c.upgrade(30);
    c.show();
    return 0;
}
```

*Hint:* Car is a friend class of Engine, so it can access Engine's private hp member.

**Answer:** `Tata Nexon: 120 HP`
`Tata Nexon: 150 HP`

`Car` is a `friend class` of `Engine`, so it can directly access `engine.hp` (private). The upgrade adds 30 to the 120 HP, making it 150 HP.

### Q10. [Hard] What is the output?

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
    void set(int v) { x = v; }
    int get() const { return x; }
};
class D2 : public Base {
public:
    D2(int v) : Base(v) {}
    void showOther(const D1& d) {
        // cout << d.x;  // Error even though x is protected!
        cout << "Cannot access sibling protected" << endl;
    }
    int get() const { return x; }
};
int main() {
    D1 d1(10);
    D2 d2(20);
    cout << d1.get() << endl;
    cout << d2.get() << endl;
    d2.showOther(d1);
    return 0;
}
```

*Hint:* A derived class can access protected members of its own Base subobject, but not of a sibling derived class's Base subobject.

**Answer:** `10`
`20`
`Cannot access sibling protected`

Each derived class can access the `protected` member `x` in its own inherited `Base` part. But `D2` cannot access `x` through a `D1` reference because protected access is limited to the class's own inheritance path, not sibling objects.

## Multiple Choice Questions

### Q1. [Easy] What is the default access specifier for members of a class in C++?

**Answer:** C

**C is correct.** In a `class`, the default access specifier is `private`. In a `struct`, it is `public`. This is the only difference between `class` and `struct` in C++.

### Q2. [Easy] Which access specifier allows derived classes to access a base class member but not outside code?

**Answer:** B

**B is correct.** `protected` members are accessible within the class and its derived classes, but not from outside code like `main()`.

### Q3. [Easy] What is encapsulation in C++?

**Answer:** B

**B is correct.** Encapsulation is the OOP principle of bundling data and the methods that operate on it into a class, while hiding internal state behind a controlled public interface.

### Q4. [Easy] What is the role of a getter function in encapsulation?

**Answer:** B

**B is correct.** A getter provides controlled read-only access to a private member. It should be marked `const` to indicate it does not modify the object.

### Q5. [Easy] A friend function of a class can access which members?

**Answer:** D

**D is correct.** A friend function has access to all members of the class, including private and protected members. That is the entire purpose of the friend declaration.

### Q6. [Easy] Which of the following is true about the mutable keyword?

**Answer:** B

**B is correct.** The `mutable` keyword on a data member allows it to be modified even in `const` member functions or on `const` objects.

### Q7. [Medium] Which statement about friendship in C++ is TRUE?

**Answer:** C

**C is correct.** Friendship in C++ is explicitly one-directional, not inherited by derived classes, and not transitive. Each friendship must be explicitly declared.

### Q8. [Medium] In which scenario is the mutable keyword most appropriate?

**Answer:** B

**B is correct.** The classic use of `mutable` is for caching: a `const` method computes a result and caches it in a `mutable` member so future calls are faster, without changing the logical state of the object.

### Q9. [Medium] What happens if you call a non-const member function on a const object?

**Answer:** C

**C is correct.** A `const` object can only call `const` member functions. Calling a non-const member function on a const object or through a const reference is a compilation error.

### Q10. [Medium] A nested class in C++11+ has access to which members of the enclosing class?

**Answer:** C

**C is correct.** In C++11 and later, a nested class is implicitly a friend of the enclosing class. It can access all members (including private) of the enclosing class, provided it has an instance of the enclosing class to work with.

### Q11. [Medium] Why should getter functions be marked const?

**Answer:** B

**B is correct.** Marking a getter `const` allows it to be called on `const` objects and through `const` references/pointers. Without `const`, the getter cannot be used in any context that expects constness.

### Q12. [Hard] What is the difference between friend function and friend class?

**Answer:** B

**B is correct.** A `friend` function declaration grants access to one specific function. A `friend class` declaration grants access to all member functions of the specified class. Neither is inherited.

### Q13. [Hard] Can a derived class access protected members of a sibling derived class's base subobject?

**Answer:** B

**B is correct.** Protected access in C++ is more restrictive than many expect. A derived class can access protected members of its own base subobject, but not protected members through a reference to a different derived type, even if they share the same base.

### Q14. [Hard] Which of the following operators MUST be overloaded as a friend (non-member) function when the left operand is not your class?

**Answer:** C

**C is correct.** `operator<<` is typically used with `cout` (which is `ostream`) as the left operand. Since we cannot add member functions to `ostream`, we must overload it as a non-member (friend) function.

### Q15. [Easy] What is the default access specifier for members of a struct in C++?

**Answer:** C

**C is correct.** In a `struct`, the default access specifier is `public`. In a `class`, it is `private`.

### Q16. [Medium] Can a member function of one class be declared as a friend of another class?

**Answer:** B

**B is correct.** A specific member function of one class can be declared as a friend of another class using `friend void OtherClass::method();`. This grants friendship to only that specific method.

### Q17. [Hard] What is the relationship between encapsulation and abstraction?

**Answer:** B

**B is correct.** Encapsulation bundles data and methods while restricting access (data hiding). Abstraction hides complexity and shows only the relevant interface. Encapsulation is a mechanism that helps achieve abstraction.

### Q18. [Medium] What happens if a class has no public constructors?

**Answer:** B

**B is correct.** If all constructors are private or protected, objects cannot be created from outside the class. They can only be created through friend functions, static factory methods, or member functions.

### Q19. [Easy] Which of the following best describes a setter function?

**Answer:** B

**B is correct.** A setter provides controlled write access to a private member, typically including validation logic to ensure the new value is valid before assignment.

### Q20. [Hard] In which scenario would using a friend function be preferred over a public getter?

**Answer:** B

**B is correct.** When performance-critical code (like operator overloading or tightly coupled utility functions) needs to access multiple private members, friend functions avoid the overhead and verbosity of multiple getter calls.

## Coding Challenges

### Challenge 1. Bank Account with Full Encapsulation

**Difficulty:** Easy

Create a BankAccount class with private members: accountNumber (string), holderName (string), and balance (double). Provide a constructor, getters for all fields, deposit() and withdraw() methods with validation (no negative amounts, cannot withdraw more than balance). Print the result of several operations.

**Constraints:**

- All data members must be private. Validate all inputs. Use const on getters.

**Sample input:**

```
Account: ACC001, Priya, initial balance 5000. Deposit 2000. Withdraw 3000. Withdraw 5000.
```

**Sample output:**

```
ACC001 - Priya: 5000
Deposit 2000: Success. Balance: 7000
Withdraw 3000: Success. Balance: 4000
Withdraw 5000: Failed. Balance: 4000
```

**Solution:**

```cpp
#include <iostream>
#include <string>
using namespace std;

class BankAccount {
private:
    string accountNumber;
    string holderName;
    double balance;

public:
    BankAccount(string acc, string name, double bal)
        : accountNumber(acc), holderName(name), balance(bal >= 0 ? bal : 0) {}

    string getAccountNumber() const { return accountNumber; }
    string getHolderName() const { return holderName; }
    double getBalance() const { return balance; }

    bool deposit(double amount) {
        if (amount <= 0) return false;
        balance += amount;
        return true;
    }

    bool withdraw(double amount) {
        if (amount <= 0 || amount > balance) return false;
        balance -= amount;
        return true;
    }
};

int main() {
    BankAccount acc("ACC001", "Priya", 5000);
    cout << acc.getAccountNumber() << " - " << acc.getHolderName()
         << ": " << acc.getBalance() << endl;

    if (acc.deposit(2000))
        cout << "Deposit 2000: Success. Balance: " << acc.getBalance() << endl;

    if (acc.withdraw(3000))
        cout << "Withdraw 3000: Success. Balance: " << acc.getBalance() << endl;

    if (!acc.withdraw(5000))
        cout << "Withdraw 5000: Failed. Balance: " << acc.getBalance() << endl;

    return 0;
}
```

### Challenge 2. Friend Function: Distance Between Two Points

**Difficulty:** Medium

Create a Point class with private x and y coordinates. Use a friend function to compute the Euclidean distance between two points. Also overload operator<< as a friend to print points in (x, y) format. Demonstrate with three points.

**Constraints:**

- x and y must be private. Use friend functions for distance and operator<<. Use cmath for sqrt.

**Sample input:**

```
Point A(0, 0), B(3, 4), C(6, 8)
```

**Sample output:**

```
A = (0, 0)
B = (3, 4)
C = (6, 8)
Distance A-B: 5
Distance A-C: 10
Distance B-C: 5
```

**Solution:**

```cpp
#include <iostream>
#include <cmath>
using namespace std;

class Point {
private:
    double x, y;
public:
    Point(double x, double y) : x(x), y(y) {}
    friend double distance(const Point& a, const Point& b);
    friend ostream& operator<<(ostream& os, const Point& p);
};

double distance(const Point& a, const Point& b) {
    double dx = a.x - b.x;
    double dy = a.y - b.y;
    return sqrt(dx * dx + dy * dy);
}

ostream& operator<<(ostream& os, const Point& p) {
    os << "(" << p.x << ", " << p.y << ")";
    return os;
}

int main() {
    Point a(0, 0), b(3, 4), c(6, 8);
    cout << "A = " << a << endl;
    cout << "B = " << b << endl;
    cout << "C = " << c << endl;
    cout << "Distance A-B: " << distance(a, b) << endl;
    cout << "Distance A-C: " << distance(a, c) << endl;
    cout << "Distance B-C: " << distance(b, c) << endl;
    return 0;
}
```

### Challenge 3. Inventory System with Friend Class

**Difficulty:** Medium

Create a Product class with private name, price, and quantity. Create a StoreManager friend class that can restock (increase quantity), apply a discount (reduce price by percentage), and generate a report showing all private details. Demonstrate with two products.

**Constraints:**

- All Product members must be private. StoreManager must be a friend class. Do not use getters for manager operations.

**Sample input:**

```
Product1: Laptop, 50000, 10. Product2: Mouse, 500, 100. Restock laptop +5. Discount mouse 10%.
```

**Sample output:**

```
Laptop: Rs.50000, Qty: 10
Mouse: Rs.500, Qty: 100
Restocked Laptop: Qty: 15
Discounted Mouse: Rs.450
Report: Laptop Rs.50000 x15 | Mouse Rs.450 x100
```

**Solution:**

```cpp
#include <iostream>
#include <string>
using namespace std;

class Product {
private:
    string name;
    double price;
    int quantity;
public:
    Product(string n, double p, int q) : name(n), price(p), quantity(q) {}
    friend class StoreManager;
};

class StoreManager {
public:
    void restock(Product& p, int amount) {
        p.quantity += amount;
        cout << "Restocked " << p.name << ": Qty: " << p.quantity << endl;
    }
    void applyDiscount(Product& p, double percent) {
        p.price -= p.price * percent / 100;
        cout << "Discounted " << p.name << ": Rs." << p.price << endl;
    }
    void report(const Product& a, const Product& b) const {
        cout << "Report: " << a.name << " Rs." << a.price << " x" << a.quantity
             << " | " << b.name << " Rs." << b.price << " x" << b.quantity << endl;
    }
    void show(const Product& p) const {
        cout << p.name << ": Rs." << p.price << ", Qty: " << p.quantity << endl;
    }
};

int main() {
    Product laptop("Laptop", 50000, 10);
    Product mouse("Mouse", 500, 100);
    StoreManager mgr;
    mgr.show(laptop);
    mgr.show(mouse);
    mgr.restock(laptop, 5);
    mgr.applyDiscount(mouse, 10);
    mgr.report(laptop, mouse);
    return 0;
}
```

### Challenge 4. Cache with mutable and Nested Iterator

**Difficulty:** Hard

Create a NumberList class that stores an array of integers. It has a mutable cached sum and a mutable cacheValid flag. The getSum() const method computes and caches the sum on first call, returns cached value on subsequent calls. Add a nested Iterator class that traverses the list. Demonstrate invalidation when add() is called.

**Constraints:**

- Use mutable for cache members. getSum() must be const. Nested Iterator must access private data. Show cache invalidation.

**Sample input:**

```
List: {10, 20, 30}. getSum twice. add(40). getSum again.
```

**Sample output:**

```
Computing sum...
Sum: 60
Sum (cached): 60
Added 40
Computing sum...
Sum: 100
```

**Solution:**

```cpp
#include <iostream>
using namespace std;

class NumberList {
private:
    int* data;
    int size;
    int capacity;
    mutable int cachedSum;
    mutable bool cacheValid;

public:
    NumberList(int cap) : capacity(cap), size(0), cachedSum(0), cacheValid(false) {
        data = new int[capacity];
    }

    void add(int val) {
        if (size < capacity) {
            data[size++] = val;
            cacheValid = false;
            cout << "Added " << val << endl;
        }
    }

    int getSum() const {
        if (!cacheValid) {
            cout << "Computing sum..." << endl;
            cachedSum = 0;
            for (int i = 0; i < size; i++) cachedSum += data[i];
            cacheValid = true;
        } else {
            cout << "Sum (cached): ";
            return cachedSum;
        }
        return cachedSum;
    }

    class Iterator {
        const NumberList& list;
        int index;
    public:
        Iterator(const NumberList& l) : list(l), index(0) {}
        bool hasNext() const { return index < list.size; }
        int next() { return list.data[index++]; }
    };

    Iterator iterator() const { return Iterator(*this); }

    ~NumberList() { delete[] data; }
};

int main() {
    NumberList list(10);
    list.add(10); list.add(20); list.add(30);
    cout << "Sum: " << list.getSum() << endl;
    cout << list.getSum() << endl;
    list.add(40);
    cout << "Sum: " << list.getSum() << endl;
    return 0;
}
```

### Challenge 5. Student Record System with Complete Encapsulation

**Difficulty:** Hard

Create a Student class with private name, rollNumber, marks array (5 subjects), and mutable accessLog count. Provide getters, a setMarks method that validates (0-100), a getPercentage() const method, and a getGrade() const method. Create a Teacher friend class that can modify marks and access all private data. Create a nested Comparator class with a static method to compare two students by percentage.

**Constraints:**

- All data private. mutable accessLog. Friend class Teacher. Nested Comparator. Validate marks 0-100.

**Sample input:**

```
Student Kavya, roll 101, marks {85, 90, 78, 92, 88}. Student Ravi, roll 102, marks {70, 65, 80, 72, 68}.
```

**Sample output:**

```
Kavya (101): 86.6% - Grade A
Ravi (102): 71% - Grade B
Higher: Kavya
Teacher updated Ravi marks[1] to 95
Ravi (102): 77% - Grade B
```

**Solution:**

```cpp
#include <iostream>
#include <string>
using namespace std;

class Student {
private:
    string name;
    int rollNumber;
    int marks[5];
    mutable int accessLog;

public:
    Student(string n, int roll, int m[5]) : name(n), rollNumber(roll), accessLog(0) {
        for (int i = 0; i < 5; i++) marks[i] = (m[i] >= 0 && m[i] <= 100) ? m[i] : 0;
    }

    string getName() const { accessLog++; return name; }
    int getRoll() const { accessLog++; return rollNumber; }

    double getPercentage() const {
        accessLog++;
        int total = 0;
        for (int i = 0; i < 5; i++) total += marks[i];
        return total / 5.0;
    }

    string getGrade() const {
        double pct = getPercentage();
        if (pct >= 80) return "A";
        if (pct >= 60) return "B";
        if (pct >= 40) return "C";
        return "F";
    }

    friend class Teacher;

    class Comparator {
    public:
        static const Student& higher(const Student& a, const Student& b) {
            return (a.getPercentage() >= b.getPercentage()) ? a : b;
        }
    };
};

class Teacher {
public:
    void setMark(Student& s, int index, int mark) {
        if (index >= 0 && index < 5 && mark >= 0 && mark <= 100) {
            s.marks[index] = mark;
            cout << "Teacher updated " << s.name << " marks[" << index << "] to " << mark << endl;
        }
    }
};

int main() {
    int m1[] = {85, 90, 78, 92, 88};
    int m2[] = {70, 65, 80, 72, 68};
    Student kavya("Kavya", 101, m1);
    Student ravi("Ravi", 102, m2);

    cout << kavya.getName() << " (" << kavya.getRoll() << "): "
         << kavya.getPercentage() << "% - Grade " << kavya.getGrade() << endl;
    cout << ravi.getName() << " (" << ravi.getRoll() << "): "
         << ravi.getPercentage() << "% - Grade " << ravi.getGrade() << endl;

    const Student& top = Student::Comparator::higher(kavya, ravi);
    cout << "Higher: " << top.getName() << endl;

    Teacher t;
    t.setMark(ravi, 1, 95);
    cout << ravi.getName() << " (" << ravi.getRoll() << "): "
         << ravi.getPercentage() << "% - Grade " << ravi.getGrade() << endl;
    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/encapsulation-and-access-specifiers/*
