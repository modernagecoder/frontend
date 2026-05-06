---
title: "Encapsulation in C++ - Access Specifiers, Friend Functions, Getters/Setters | Modern Age Coders"
description: "Master encapsulation in C++ including private/protected/public access specifiers, getters and setters, friend functions, friend classes, mutable keyword, and nested classes. 54+ interview-focused practice questions with compilable code."
slug: encapsulation-and-access-specifiers
canonical: https://learn.modernagecoders.com/resources/cpp/encapsulation-and-access-specifiers
category: "C++"
keywords: ["c++ encapsulation", "access specifiers c++", "friend function c++", "friend class c++", "getters setters c++", "mutable keyword c++", "nested class c++", "private protected public c++", "data hiding c++", "c++ encapsulation interview questions"]
---
# Encapsulation, Access Specifiers, and Friend Functions

**Difficulty:** Intermediate  
**Reading time:** 50 min  
**Chapter:** 14  
**Practice questions:** 52

## What Is Encapsulation in C++?

**Encapsulation** is the bundling of data (member variables) and the methods (member functions) that operate on that data into a single unit called a class, while restricting direct access to some of the object's components. It is the mechanism that enforces **data hiding** in C++.

In practical terms, encapsulation means making member variables `private` and providing controlled access through `public` getter and setter functions. The outside world interacts with the object only through its public interface, never touching internal state directly.

```
class BankAccount {
private:
    double balance;    // Hidden from outside
    string accountId;  // Hidden from outside

public:
    BankAccount(string id, double initial) : accountId(id), balance(initial) {}

    // Getter: read-only access
    double getBalance() const { return balance; }
    string getId() const { return accountId; }

    // Setter: controlled write access with validation
    void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    bool withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;
    }
};
```

Without encapsulation, anyone could write `account.balance = -5000;` and corrupt the object's state. With encapsulation, the `withdraw()` method enforces the invariant that balance cannot go negative.

C++ provides three access specifiers to control visibility: `private` (accessible only within the class), `protected` (accessible within the class and its derived classes), and `public` (accessible from anywhere). C++ also provides `friend` functions and `friend` classes as a controlled escape hatch to grant specific external entities access to private members.

## Why Does Encapsulation Matter?

Encapsulation is one of the four pillars of Object-Oriented Programming (along with inheritance, polymorphism, and abstraction). In C++, understanding access control is essential because the language gives the programmer explicit control over what is visible and what is hidden.

### 1. Data Integrity and Invariant Enforcement

When Arjun makes the `age` field private and exposes a `setAge(int a)` method that rejects negative values, he guarantees that no part of the codebase can ever create a `Student` with a negative age. Without encapsulation, any function could write `student.age = -10;` and the program would silently accept it.

### 2. Interview and Placement Essential

Every OOP interview at companies like TCS, Infosys, Wipro, Amazon, and Microsoft includes questions on access specifiers, the difference between private and protected, when to use friend functions, and the tradeoffs of exposing internal state. The `friend` keyword is a particularly common interview topic because it breaks encapsulation in a controlled way.

### 3. Decoupling Interface from Implementation

When Kavya changes the internal representation of a `Date` class from three separate integers (day, month, year) to a single Unix timestamp, the public interface (`getDay()`, `getMonth()`, `getYear()`) remains unchanged. Client code does not need to be modified at all. This is only possible because the internal data was private.

### 4. The friend Keyword: Controlled Access

Sometimes two classes are so tightly coupled that forcing everything through getters/setters is inefficient or awkward. C++ provides `friend` as a deliberate, controlled way to grant access. Understanding when friend is appropriate (operator overloading, tightly coupled classes) versus when it violates encapsulation is critical for writing clean C++ code.

### 5. The mutable Keyword: Logical Constness

The `mutable` keyword allows modifying a member even in a `const` member function. This is used for caching, logging, and mutex locking where the external state of the object is logically unchanged even though some internal bookkeeping data is modified. This is an advanced topic frequently asked in senior-level interviews.

## Detailed Explanation

### 1. Access Specifiers: private, protected, public

C++ has three access specifiers that control who can access class members:

```
class Example {
private:
    int secret;       // Only accessible within Example

protected:
    int inherited;    // Accessible in Example and derived classes

public:
    int visible;      // Accessible from anywhere

    Example() : secret(1), inherited(2), visible(3) {}
};

class Child : public Example {
public:
    void test() {
        // cout << secret;     // Error: private in Example
        cout << inherited;    // OK: protected, accessible in derived
        cout << visible;      // OK: public
    }
};

int main() {
    Example e;
    // cout << e.secret;     // Error: private
    // cout << e.inherited;  // Error: protected
    cout << e.visible;      // OK: public
}
```

**Default access:** In a `class`, the default is `private`. In a `struct`, the default is `public`. This is the only difference between class and struct in C++.

### 2. Getters and Setters

Getters provide read access to private data. Setters provide write access with validation. This pattern is the primary mechanism for enforcing encapsulation.

```
class Student {
private:
    string name;
    int age;
    double gpa;

public:
    Student(string n, int a, double g) : name(n), age(a), gpa(g) {}

    // Getters (const: promise not to modify object)
    string getName() const { return name; }
    int getAge() const { return age; }
    double getGpa() const { return gpa; }

    // Setters (with validation)
    void setAge(int a) {
        if (a >= 0 && a <= 150) age = a;
    }

    void setGpa(double g) {
        if (g >= 0.0 && g <= 10.0) gpa = g;
    }
};
```

The `const` after the getter function signature is important: it tells the compiler (and the reader) that calling this function does not modify the object. This allows calling getters on `const` references and pointers.

### 3. Friend Functions

A `friend` function is a non-member function that has access to the private and protected members of a class. The class grants friendship by declaring the function inside the class body with the `friend` keyword.

```
class Box {
private:
    double length, width, height;

public:
    Box(double l, double w, double h) : length(l), width(w), height(h) {}

    // Grant friendship to this function
    friend double volume(const Box& b);
    friend bool isLarger(const Box& a, const Box& b);
};

// Not a member function, but can access private members
double volume(const Box& b) {
    return b.length * b.width * b.height;
}

bool isLarger(const Box& a, const Box& b) {
    return volume(a) > volume(b);
}
```

Key points about friend functions:

- Declared inside the class, defined outside (no `Box::` scope)
- Not a member: no `this` pointer
- Can access private and protected members of the class
- Friendship is not inherited (a friend of Base is not automatically a friend of Derived)
- Friendship is not mutual (if A is a friend of B, B is not automatically a friend of A)
- Friendship is not transitive (if A is a friend of B, and B is a friend of C, A is not a friend of C)

### 4. Friend Classes

An entire class can be declared as a friend. All member functions of the friend class can then access the private members of the granting class.

```
class Engine {
private:
    int horsepower;
    double temperature;

public:
    Engine(int hp) : horsepower(hp), temperature(90.0) {}
    friend class Mechanic;  // Mechanic can access everything in Engine
};

class Mechanic {
public:
    void diagnose(const Engine& e) {
        // Can access private members of Engine
        cout << "HP: " << e.horsepower << endl;
        cout << "Temp: " << e.temperature << endl;
    }
    void tune(Engine& e, int newHp) {
        e.horsepower = newHp;  // Direct access to private member
    }
};
```

Use friend classes sparingly. They are appropriate when two classes are tightly coupled (e.g., an iterator class that needs access to a container's internals), but overuse breaks encapsulation.

### 5. The mutable Keyword

The `mutable` keyword allows a member to be modified even when the object is accessed through a `const` reference or when the member function is `const`. This is used for internal bookkeeping that does not affect the logical state of the object.

```
class DataCache {
private:
    int data;
    mutable int accessCount;  // Can be modified in const methods
    mutable bool cacheValid;
    mutable int cachedResult;

public:
    DataCache(int d) : data(d), accessCount(0), cacheValid(false), cachedResult(0) {}

    int getData() const {
        accessCount++;  // OK: mutable
        return data;
    }

    int expensiveCompute() const {
        accessCount++;
        if (!cacheValid) {
            cachedResult = data * data + data;  // Cache the result
            cacheValid = true;
        }
        return cachedResult;
    }

    int getAccessCount() const { return accessCount; }
};
```

Common uses of `mutable`: caching/memoization, access counters, mutex locks in const methods, lazy initialization.

### 6. Nested Classes

A class defined inside another class is called a nested class. The nested class can access private members of the enclosing class (in C++11 and later).

```
class LinkedList {
private:
    struct Node {  // Nested class (private)
        int data;
        Node* next;
        Node(int d) : data(d), next(nullptr) {}
    };

    Node* head;

public:
    LinkedList() : head(nullptr) {}

    void push(int val) {
        Node* newNode = new Node(val);
        newNode->next = head;
        head = newNode;
    }

    void print() const {
        Node* curr = head;
        while (curr) {
            cout << curr->data << " ";
            curr = curr->next;
        }
        cout << endl;
    }

    ~LinkedList() {
        while (head) {
            Node* temp = head;
            head = head->next;
            delete temp;
        }
    }
};
```

The `Node` struct is an implementation detail. By making it private, no outside code can create or manipulate `Node` objects directly. This is encapsulation at the class design level.

### 7. struct vs class in C++

In C++, `struct` and `class` are nearly identical. The only difference is default access: `struct` members are `public` by default, while `class` members are `private` by default. The same applies to inheritance: `struct Derived : Base` is public inheritance by default, while `class Derived : Base` is private inheritance by default.

```
struct Point {
    int x, y;  // public by default
};

class Point2 {
    int x, y;  // private by default
public:
    Point2(int a, int b) : x(a), y(b) {}
    int getX() const { return x; }
};
```

## Code Examples

### Encapsulation with Getters, Setters, and Validation

```cpp
#include <iostream>
#include <string>
using namespace std;

class Employee {
private:
    string name;
    int age;
    double salary;

public:
    Employee(string n, int a, double s) : name(n), age(0), salary(0) {
        setAge(a);
        setSalary(s);
    }

    string getName() const { return name; }
    int getAge() const { return age; }
    double getSalary() const { return salary; }

    void setAge(int a) {
        if (a >= 18 && a <= 65) age = a;
        else cout << "Invalid age: " << a << endl;
    }

    void setSalary(double s) {
        if (s >= 0) salary = s;
        else cout << "Invalid salary: " << s << endl;
    }

    void display() const {
        cout << name << ", Age: " << age << ", Salary: " << salary << endl;
    }
};

int main() {
    Employee e("Arjun", 25, 50000);
    e.display();

    e.setAge(200);
    e.setSalary(-1000);
    e.display();

    e.setAge(30);
    e.setSalary(60000);
    e.display();
    return 0;
}
```

The `Employee` class keeps `name`, `age`, and `salary` private. The setters validate input before modifying state: age must be 18-65, salary must be non-negative. Invalid values are rejected. This prevents corrupt object state.

**Output:**

```
Arjun, Age: 25, Salary: 50000
Invalid age: 200
Invalid salary: -1000
Arjun, Age: 25, Salary: 50000
Arjun, Age: 30, Salary: 60000
```

### Access Specifiers: private, protected, public

```cpp
#include <iostream>
using namespace std;

class Base {
private:
    int pvt;
protected:
    int prot;
public:
    int pub;
    Base() : pvt(1), prot(2), pub(3) {}
    void showAll() const {
        cout << "private=" << pvt << " protected=" << prot << " public=" << pub << endl;
    }
};

class Derived : public Base {
public:
    void access() {
        // cout << pvt;  // Error: private member of Base
        cout << "Derived accesses protected: " << prot << endl;
        cout << "Derived accesses public: " << pub << endl;
    }
};

int main() {
    Base b;
    // cout << b.pvt;   // Error: private
    // cout << b.prot;  // Error: protected
    cout << "Main accesses public: " << b.pub << endl;
    b.showAll();

    Derived d;
    d.access();
    return 0;
}
```

`private` members are only accessible within the class itself. `protected` members are accessible in the class and its derived classes. `public` members are accessible everywhere. This is demonstrated by trying to access each from `main()` and from a derived class.

**Output:**

```
Main accesses public: 3
private=1 protected=2 public=3
Derived accesses protected: 2
Derived accesses public: 3
```

### Friend Function Accessing Private Members

```cpp
#include <iostream>
using namespace std;

class Rectangle {
private:
    double length, width;

public:
    Rectangle(double l, double w) : length(l), width(w) {}

    friend double area(const Rectangle& r);
    friend bool isBigger(const Rectangle& a, const Rectangle& b);
    friend ostream& operator<<(ostream& os, const Rectangle& r);
};

double area(const Rectangle& r) {
    return r.length * r.width;
}

bool isBigger(const Rectangle& a, const Rectangle& b) {
    return area(a) > area(b);
}

ostream& operator<<(ostream& os, const Rectangle& r) {
    os << "Rect(" << r.length << " x " << r.width << ")";
    return os;
}

int main() {
    Rectangle r1(5, 3), r2(4, 4);
    cout << r1 << " area = " << area(r1) << endl;
    cout << r2 << " area = " << area(r2) << endl;
    cout << "r1 bigger? " << (isBigger(r1, r2) ? "Yes" : "No") << endl;
    return 0;
}
```

The `area()` and `isBigger()` functions are not members of `Rectangle`, but because they are declared as `friend`, they can access `length` and `width` directly. The `operator<<` must be a friend because its left operand is `ostream`.

**Output:**

```
Rect(5 x 3) area = 15
Rect(4 x 4) area = 16
r1 bigger? No
```

### Friend Class: Full Access to Another Class

```cpp
#include <iostream>
#include <string>
using namespace std;

class Patient {
private:
    string name;
    int age;
    string diagnosis;

public:
    Patient(string n, int a, string d) : name(n), age(a), diagnosis(d) {}
    friend class Doctor;
};

class Doctor {
public:
    void examine(const Patient& p) {
        cout << "Examining " << p.name << ", age " << p.age << endl;
        cout << "Diagnosis: " << p.diagnosis << endl;
    }
    void updateDiagnosis(Patient& p, string newDiag) {
        p.diagnosis = newDiag;
        cout << "Updated diagnosis for " << p.name << ": " << p.diagnosis << endl;
    }
};

int main() {
    Patient p("Ravi", 28, "Flu");
    Doctor doc;
    doc.examine(p);
    doc.updateDiagnosis(p, "Viral Fever");
    doc.examine(p);
    return 0;
}
```

`Doctor` is declared as a `friend class` of `Patient`. This means every member function of `Doctor` can access the private members of `Patient`. The relationship is one-directional: `Patient` cannot access `Doctor`'s private members.

**Output:**

```
Examining Ravi, age 28
Diagnosis: Flu
Updated diagnosis for Ravi: Viral Fever
Examining Ravi, age 28
Diagnosis: Viral Fever
```

### The mutable Keyword for Logical Constness

```cpp
#include <iostream>
using namespace std;

class Counter {
private:
    int value;
    mutable int readCount;

public:
    Counter(int v) : value(v), readCount(0) {}

    int getValue() const {
        readCount++;  // OK because readCount is mutable
        return value;
    }

    int getReadCount() const { return readCount; }
};

int main() {
    const Counter c(42);
    cout << "Value: " << c.getValue() << endl;
    cout << "Value: " << c.getValue() << endl;
    cout << "Value: " << c.getValue() << endl;
    cout << "Read count: " << c.getReadCount() << endl;
    return 0;
}
```

Even though `c` is `const` and `getValue()` is a `const` method, the `mutable` keyword on `readCount` allows it to be incremented. The logical state of the object (its value) is unchanged, but the bookkeeping (how many times it was read) is tracked.

**Output:**

```
Value: 42
Value: 42
Value: 42
Read count: 3
```

### Nested Class as Implementation Detail

```cpp
#include <iostream>
using namespace std;

class Stack {
private:
    struct Node {
        int data;
        Node* next;
        Node(int d, Node* n) : data(d), next(n) {}
    };
    Node* top;
    int count;

public:
    Stack() : top(nullptr), count(0) {}

    void push(int val) {
        top = new Node(val, top);
        count++;
    }

    int pop() {
        if (!top) throw runtime_error("Stack empty");
        int val = top->data;
        Node* temp = top;
        top = top->next;
        delete temp;
        count--;
        return val;
    }

    int size() const { return count; }
    bool empty() const { return top == nullptr; }

    ~Stack() {
        while (top) {
            Node* temp = top;
            top = top->next;
            delete temp;
        }
    }
};

int main() {
    Stack s;
    s.push(10);
    s.push(20);
    s.push(30);
    cout << "Size: " << s.size() << endl;
    cout << "Pop: " << s.pop() << endl;
    cout << "Pop: " << s.pop() << endl;
    cout << "Size: " << s.size() << endl;
    return 0;
}
```

The `Node` struct is a private nested class inside `Stack`. No code outside `Stack` can create, access, or even know about `Node`. This is proper encapsulation of implementation details. Users interact only with `push()`, `pop()`, `size()`, and `empty()`.

**Output:**

```
Size: 3
Pop: 30
Pop: 20
Size: 1
```

### struct vs class Default Access

```cpp
#include <iostream>
using namespace std;

struct PointStruct {
    int x, y;  // public by default
    PointStruct(int a, int b) : x(a), y(b) {}
};

class PointClass {
    int x, y;  // private by default
public:
    PointClass(int a, int b) : x(a), y(b) {}
    int getX() const { return x; }
    int getY() const { return y; }
};

int main() {
    PointStruct ps(3, 4);
    cout << "Struct: " << ps.x << ", " << ps.y << endl;

    PointClass pc(5, 6);
    // cout << pc.x;  // Error: private
    cout << "Class: " << pc.getX() << ", " << pc.getY() << endl;
    return 0;
}
```

In a `struct`, members are `public` by default, so `ps.x` works directly. In a `class`, members are `private` by default, so `pc.x` would fail and getters are needed. This is the only functional difference between `struct` and `class` in C++.

**Output:**

```
Struct: 3, 4
Class: 5, 6
```

## Common Mistakes

### Making All Members Public (No Encapsulation)

**Wrong:**

```
class Student {
public:
    string name;
    int age;
    double gpa;
};

Student s;
s.age = -5;    // No validation!
s.gpa = 99.9;  // Invalid GPA accepted!
```

Any code can set invalid values because there is no access control. The object can enter an inconsistent state.

**Correct:**

```
class Student {
private:
    string name;
    int age;
    double gpa;
public:
    Student(string n, int a, double g) : name(n), age(0), gpa(0) {
        setAge(a); setGpa(g);
    }
    void setAge(int a) { if (a >= 0 && a <= 150) age = a; }
    void setGpa(double g) { if (g >= 0 && g <= 10) gpa = g; }
    int getAge() const { return age; }
    double getGpa() const { return gpa; }
};
```

Private members with validated setters ensure the object always holds valid data. Without encapsulation, there is no defense against invalid assignments.

### Forgetting const on Getter Functions

**Wrong:**

```
class Account {
    double balance;
public:
    Account(double b) : balance(b) {}
    double getBalance() { return balance; }  // Missing const!
};

void print(const Account& a) {
    cout << a.getBalance();  // Error: calling non-const on const reference
}
```

Compilation error: cannot call non-const member function on a const object or reference.

**Correct:**

```
class Account {
    double balance;
public:
    Account(double b) : balance(b) {}
    double getBalance() const { return balance; }  // const!
};

void print(const Account& a) {
    cout << a.getBalance();  // OK now
}
```

Getter functions should always be `const` because they do not modify the object. Without `const`, they cannot be called on `const` objects or through `const` references, breaking the ability to pass objects by const reference.

### Confusing protected with private in Derived Classes

**Wrong:**

```
class Base {
private:
    int secret;
public:
    Base(int s) : secret(s) {}
};

class Derived : public Base {
public:
    Derived(int s) : Base(s) {}
    void reveal() {
        cout << secret;  // Error: secret is private in Base!
    }
};
```

Compilation error: 'secret' is a private member of 'Base'. Private members are not accessible in derived classes.

**Correct:**

```
class Base {
protected:
    int secret;  // Changed to protected
public:
    Base(int s) : secret(s) {}
};

class Derived : public Base {
public:
    Derived(int s) : Base(s) {}
    void reveal() {
        cout << secret;  // OK: protected is accessible in derived
    }
};
```

Use `protected` instead of `private` when derived classes need access. Private members are invisible to all derived classes. This is one of the most common access specifier mistakes.

### Assuming Friendship Is Inherited or Mutual

**Wrong:**

```
class A {
private:
    int x = 10;
    friend class B;
};

class B {
private:
    int y = 20;
};

class C : public B {
public:
    void test(A& a) {
        cout << a.x;  // Error: C is not a friend of A!
    }
};

void test(A& a, B& b) {
    // A cannot access b.y just because B is a friend of A
    // Friendship is not mutual
}
```

Compilation error: friendship is not inherited. C inherits from B, but B's friendship with A does not transfer to C.

**Correct:**

```
class A {
private:
    int x = 10;
    friend class B;
    friend class C;  // Explicitly grant friendship to C
};

class B {
private:
    int y = 20;
    friend class A;  // Explicitly grant mutual friendship if needed
};

class C : public B {
public:
    void test(A& a) {
        cout << a.x;  // OK: C is now a friend of A
    }
};
```

Friendship in C++ is not inherited (derived classes do not get it), not mutual (A friends B does not mean B friends A), and not transitive (A friends B, B friends C does not mean A friends C). Each friendship must be explicitly declared.

### Modifying Members in a const Method Without mutable

**Wrong:**

```
class Logger {
    int callCount;  // Not mutable!
public:
    Logger() : callCount(0) {}
    void log(const string& msg) const {
        callCount++;  // Error: modifying member in const method!
        cout << msg << endl;
    }
};
```

Compilation error: cannot modify non-mutable member 'callCount' in a const member function.

**Correct:**

```
class Logger {
    mutable int callCount;  // mutable!
public:
    Logger() : callCount(0) {}
    void log(const string& msg) const {
        callCount++;  // OK: mutable allows modification in const method
        cout << msg << endl;
    }
    int getCallCount() const { return callCount; }
};
```

If a member needs to be modified in a `const` method (for bookkeeping, caching, etc.), mark it `mutable`. Without `mutable`, the compiler enforces that `const` methods cannot modify any member.

## Summary

- Encapsulation bundles data and methods into a class while restricting direct access to internal state. It enforces data hiding and integrity.
- C++ has three access specifiers: private (class only), protected (class + derived classes), and public (accessible everywhere).
- In a class, the default access is private. In a struct, the default access is public. This is the only difference between class and struct in C++.
- Getters provide read access to private members. Setters provide controlled write access with validation. Getters should always be marked const.
- A friend function is a non-member function that can access private and protected members of the class that declares it as friend.
- A friend class grants all its member functions access to the private members of the declaring class. Friendship is not inherited, not mutual, and not transitive.
- The mutable keyword allows a member variable to be modified in const member functions. Use it for caching, counters, and mutex locks.
- Nested classes (classes defined inside other classes) are used to hide implementation details like nodes in a linked list or stack.
- Always prefer private data with public methods over public data. This allows changing the internal representation without affecting client code.
- The friend keyword should be used sparingly. Legitimate uses include operator<< overloading, tightly coupled helper classes, and iterator patterns.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/encapsulation-and-access-specifiers/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/encapsulation-and-access-specifiers/practice/*
