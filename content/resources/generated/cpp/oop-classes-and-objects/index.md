---
title: "Classes and Objects in C++ - Constructors, Destructors, this Pointer, Static Members | Modern Age Coders"
description: "Learn C++ OOP including classes, objects, constructors (default, parameterized, copy), destructors, initializer lists, this pointer, static members, const member functions, and sizeof with classes. Includes 60+ practice questions with output prediction and coding challenges."
slug: oop-classes-and-objects
canonical: https://learn.modernagecoders.com/resources/cpp/oop-classes-and-objects/
category: "C++"
keywords: ["c++ classes and objects", "c++ constructor", "c++ destructor", "c++ copy constructor", "c++ this pointer", "c++ static members", "c++ initializer list", "c++ OOP", "c++ class vs struct", "c++ constructor overloading interview questions"]
---
# OOP - Classes, Objects, and Constructors in C++

**Difficulty:** Intermediate  
**Reading time:** 40 min  
**Chapter:** 13  
**Practice questions:** 60

## What Are Classes and Objects in C++?

**Object-Oriented Programming (OOP)** is a programming paradigm built around four pillars: **Encapsulation**, **Abstraction**, **Inheritance**, and **Polymorphism**. C++ was one of the first languages to bring OOP to systems programming.

A **class** is a user-defined data type that bundles data (member variables) and functions (member functions or methods) that operate on that data. Think of a class as a blueprint -- it defines what an object will look like and what it can do.

An **object** is an instance of a class. If `Student` is a class (blueprint), then `rahul` and `priya` are objects (actual students created from that blueprint).

### Creating a Class

```
class Student {
public:
    string name;       // data member
    int rollNo;        // data member

    void display() {   // member function
        cout << name << " - " << rollNo << endl;
    }
};
```

### Creating Objects

```
Student s1;              // create an object
s1.name = "Rahul";       // access member with dot operator
s1.rollNo = 101;
s1.display();            // call member function
```

### class vs struct in C++

In C++, `class` and `struct` are almost identical. The only difference is the **default access specifier**: members of a `class` are `private` by default, while members of a `struct` are `public` by default. In practice, `struct` is typically used for simple data holders, and `class` for objects with behavior.

## Why Are Classes and Objects Important?

### 1. Organize Complex Code

Without OOP, a large program is a collection of functions and global variables. With classes, related data and behavior are bundled together. A `BankAccount` class keeps `balance`, `deposit()`, and `withdraw()` in one place instead of scattered across the codebase.

### 2. Data Protection

Access specifiers (`private`, `public`, `protected`) control who can access what. You can hide internal implementation details and expose only a clean interface. This prevents accidental corruption of data and makes code easier to maintain.

### 3. Constructors Ensure Valid State

A constructor runs automatically when an object is created, ensuring that every object starts in a valid state. Without constructors, programmers must remember to call an initialization function manually -- a common source of bugs.

### 4. Destructors Prevent Resource Leaks

A destructor runs automatically when an object is destroyed, cleaning up resources (memory, files, network connections). Combined with RAII, this makes C++ resource management both safe and automatic.

### 5. Interview and Placement Essential

Constructor and destructor call order, copy constructors, the this pointer, and static members are among the most frequently asked topics in C++ interviews. Companies like Microsoft, Amazon, and Goldman Sachs test these extensively in campus placements.

## Detailed Explanation

### 1. Access Specifiers

C++ provides three access specifiers:

**public:** Members accessible from anywhere (inside and outside the class).

**private:** Members accessible only inside the class. This is the default for `class`.

**protected:** Members accessible inside the class and in derived classes (inheritance). Covered in detail in the encapsulation chapter.

```
class Account {
private:
    double balance;      // only accessible inside the class
public:
    void deposit(double amount) {
        balance += amount;   // OK: accessing private member inside the class
    }
    double getBalance() {
        return balance;
    }
};

Account acc;
// acc.balance = 1000;  // ERROR: balance is private
acc.deposit(1000);       // OK: deposit is public
```

### 2. Constructors

A constructor is a special member function that is called automatically when an object is created. It has the same name as the class and no return type.

**Default Constructor:** Takes no arguments. If you do not write any constructor, the compiler generates one (but it does nothing for primitive types).

```
class Point {
public:
    int x, y;
    Point() {          // default constructor
        x = 0;
        y = 0;
    }
};
```

**Parameterized Constructor:** Takes arguments to initialize the object.

```
class Point {
public:
    int x, y;
    Point(int x, int y) {
        this->x = x;
        this->y = y;
    }
};
Point p(3, 4);  // calls parameterized constructor
```

**Copy Constructor:** Takes a reference to an object of the same class and creates a copy. If not written, the compiler generates a shallow copy constructor.

```
class Point {
public:
    int x, y;
    Point(const Point& other) {   // copy constructor
        x = other.x;
        y = other.y;
    }
};
Point p1(3, 4);
Point p2(p1);    // copy constructor called
Point p3 = p1;   // also calls copy constructor
```

**Constructor Overloading:** A class can have multiple constructors with different parameter lists.

```
class Rectangle {
public:
    int width, height;
    Rectangle() : width(0), height(0) {}
    Rectangle(int side) : width(side), height(side) {}  // square
    Rectangle(int w, int h) : width(w), height(h) {}
};
```

### 3. Initializer List

An initializer list initializes member variables directly, rather than assigning them inside the constructor body. It is placed after the constructor parameter list, prefixed with a colon.

```
class Student {
    string name;
    int rollNo;
    const int batchYear;  // const must be initialized via initializer list
public:
    Student(string n, int r, int y) : name(n), rollNo(r), batchYear(y) {}
};
```

Initializer lists are **required** for: const members, reference members, and base class constructors. They are also more efficient because they initialize directly rather than default-constructing and then assigning.

### 4. Destructors

A destructor is called automatically when an object is destroyed (goes out of scope or is deleted). It has the same name as the class with a tilde (~) prefix and no parameters.

```
class FileHandler {
    FILE* file;
public:
    FileHandler(const char* name) {
        file = fopen(name, "r");
        cout << "File opened" << endl;
    }
    ~FileHandler() {
        if (file) fclose(file);
        cout << "File closed" << endl;
    }
};
```

Destructors are called in the **reverse order** of construction. If objects A, B, C are created in that order, their destructors run in order C, B, A.

### 5. The this Pointer

`this` is a pointer to the current object. It is available in all non-static member functions. Common uses:

1. Disambiguate member variables from parameters with the same name.

2. Return the current object from a method (for chaining).

3. Pass the current object to another function.

```
class Counter {
    int count;
public:
    Counter(int count) {
        this->count = count;   // this->count is the member, count is the parameter
    }
    Counter& increment() {
        this->count++;
        return *this;          // return the current object for chaining
    }
};

Counter c(0);
c.increment().increment().increment();  // chaining: count = 3
```

### 6. Static Members

**Static variables** are shared across all objects of a class. There is only one copy, regardless of how many objects exist. They are declared with the `static` keyword inside the class and must be defined outside.

**Static functions** can only access static members. They do not have a `this` pointer because they are not tied to any object.

```
class Student {
    static int count;    // shared across all objects
public:
    string name;
    Student(string n) : name(n) { count++; }
    ~Student() { count--; }
    static int getCount() { return count; }  // static function
};
int Student::count = 0;   // definition outside class

Student s1("Rahul"), s2("Priya");
cout << Student::getCount();  // 2 (called on the class, not an object)
```

### 7. const Member Functions

A `const` member function promises not to modify any member variable. It is declared by placing `const` after the parameter list.

```
class Circle {
    double radius;
public:
    Circle(double r) : radius(r) {}
    double area() const {          // const: does not modify any member
        // radius = 10;             // ERROR: cannot modify in const function
        return 3.14159 * radius * radius;
    }
};

const Circle c(5);
cout << c.area();   // OK: area() is const
```

A `const` object can only call `const` member functions.

### 8. sizeof with Classes

The size of a class object depends on its data members (not member functions). The compiler may add **padding** bytes for alignment.

```
class A {
    char c;    // 1 byte
    int i;     // 4 bytes
    char d;    // 1 byte
};
// sizeof(A) is typically 12 (not 6) due to padding

class B {
    int i;     // 4 bytes
    char c;    // 1 byte
    char d;    // 1 byte
};
// sizeof(B) is typically 8 (better packing)
```

An empty class has `sizeof` 1 (not 0) to ensure distinct addresses for different objects.

## Code Examples

### Creating a Class with Data Members and Member Functions

```cpp
#include <iostream>
#include <string>
using namespace std;

class Student {
public:
    string name;
    int rollNo;
    double marks;

    void display() {
        cout << "Name: " << name << endl;
        cout << "Roll No: " << rollNo << endl;
        cout << "Marks: " << marks << endl;
    }

    bool isPassing() {
        return marks >= 40.0;
    }
};

int main() {
    Student s1;
    s1.name = "Rahul";
    s1.rollNo = 101;
    s1.marks = 87.5;
    s1.display();
    cout << "Passing: " << (s1.isPassing() ? "Yes" : "No") << endl;

    Student s2;
    s2.name = "Deepa";
    s2.rollNo = 102;
    s2.marks = 35.0;
    s2.display();
    cout << "Passing: " << (s2.isPassing() ? "Yes" : "No") << endl;

    return 0;
}
```

The `Student` class bundles three data members and two member functions. Each object (`s1`, `s2`) has its own copy of the data members. Member functions are shared -- the same code operates on different objects' data.

**Output:**

```
Name: Rahul
Roll No: 101
Marks: 87.5
Passing: Yes
Name: Deepa
Roll No: 102
Marks: 35
Passing: No
```

### Constructors -- Default, Parameterized, and Overloading

```cpp
#include <iostream>
#include <string>
using namespace std;

class Rectangle {
    int width, height;
public:
    Rectangle() : width(0), height(0) {
        cout << "Default constructor" << endl;
    }
    Rectangle(int side) : width(side), height(side) {
        cout << "Square constructor: " << side << endl;
    }
    Rectangle(int w, int h) : width(w), height(h) {
        cout << "Rectangle constructor: " << w << "x" << h << endl;
    }
    int area() const { return width * height; }
    void display() const {
        cout << width << " x " << height << " = " << area() << endl;
    }
};

int main() {
    Rectangle r1;         // default
    Rectangle r2(5);      // square
    Rectangle r3(4, 6);   // rectangle

    r1.display();
    r2.display();
    r3.display();

    return 0;
}
```

Three constructors handle different initialization scenarios. The compiler selects the correct constructor based on the number and types of arguments. The initializer list (`: width(w), height(h)`) initializes members directly without first default-constructing them.

**Output:**

```
Default constructor
Square constructor: 5
Rectangle constructor: 4x6
0 x 0 = 0
5 x 5 = 25
4 x 6 = 24
```

### Copy Constructor and Destructor Call Order

```cpp
#include <iostream>
#include <string>
using namespace std;

class Box {
    string label;
public:
    Box(string l) : label(l) {
        cout << "Constructor: " << label << endl;
    }
    Box(const Box& other) : label(other.label + "_copy") {
        cout << "Copy constructor: " << label << endl;
    }
    ~Box() {
        cout << "Destructor: " << label << endl;
    }
    string getLabel() const { return label; }
};

int main() {
    Box b1("Alpha");
    Box b2("Beta");
    Box b3 = b1;       // copy constructor
    Box b4(b2);        // copy constructor

    cout << "\n--- Objects created ---" << endl;
    cout << b3.getLabel() << endl;
    cout << b4.getLabel() << endl;
    cout << "--- End of main ---\n" << endl;

    return 0;
}
```

The copy constructor creates a new object from an existing one. Both `Box b3 = b1` and `Box b4(b2)` invoke the copy constructor. Destructors run in reverse order of construction: b4 is destroyed first, then b3, b2, and finally b1. This LIFO order is guaranteed by the C++ standard.

**Output:**

```
Constructor: Alpha
Constructor: Beta
Copy constructor: Alpha_copy
Copy constructor: Beta_copy

--- Objects created ---
Alpha_copy
Beta_copy
--- End of main ---

Destructor: Beta_copy
Destructor: Alpha_copy
Destructor: Beta
Destructor: Alpha
```

### The this Pointer and Method Chaining

```cpp
#include <iostream>
using namespace std;

class Builder {
    string result;
public:
    Builder() : result("") {}

    Builder& add(const string& text) {
        this->result += text;
        return *this;          // return reference to current object
    }

    Builder& addLine(const string& text) {
        this->result += text + "\n";
        return *this;
    }

    void print() const {
        cout << result;
    }
};

int main() {
    Builder b;
    b.addLine("Name: Kavitha")
     .addLine("Roll: 201")
     .add("Branch: CSE");

    b.print();
    return 0;
}
```

Each method returns `*this` (a reference to the current object), enabling method chaining. `this` is a pointer to the object on which the method is called. `*this` dereferences it to get the object itself. This pattern is used in builder APIs, stream operators, and fluent interfaces.

**Output:**

```
Name: Kavitha
Roll: 201
Branch: CSE
```

### Static Members -- Shared Across All Objects

```cpp
#include <iostream>
#include <string>
using namespace std;

class Employee {
    static int nextId;
    int id;
    string name;
public:
    Employee(string n) : name(n), id(nextId++) {
        cout << "Created: " << name << " (ID: " << id << ")" << endl;
    }
    ~Employee() {
        cout << "Destroyed: " << name << " (ID: " << id << ")" << endl;
    }
    static int getNextId() { return nextId; }
    void display() const {
        cout << "  " << id << ": " << name << endl;
    }
};
int Employee::nextId = 1;  // static member definition

int main() {
    Employee e1("Arun");
    Employee e2("Sneha");
    Employee e3("Vikram");

    cout << "\nAll employees:" << endl;
    e1.display();
    e2.display();
    e3.display();

    cout << "\nNext ID will be: " << Employee::getNextId() << endl;

    return 0;
}
```

`nextId` is a static member shared by all Employee objects. Each constructor increments it, so every employee gets a unique ID. The static function `getNextId()` is called on the class itself (`Employee::getNextId()`), not on an object. Static members must be defined outside the class.

**Output:**

```
Created: Arun (ID: 1)
Created: Sneha (ID: 2)
Created: Vikram (ID: 3)

All employees:
  1: Arun
  2: Sneha
  3: Vikram

Next ID will be: 4

Destroyed: Vikram (ID: 3)
Destroyed: Sneha (ID: 2)
Destroyed: Arun (ID: 1)
```

### const Member Functions and sizeof with Padding

```cpp
#include <iostream>
using namespace std;

class Circle {
    double radius;
public:
    Circle(double r) : radius(r) {}
    double area() const {
        return 3.14159 * radius * radius;
    }
    double circumference() const {
        return 2 * 3.14159 * radius;
    }
    // Non-const function can modify members
    void scale(double factor) {
        radius *= factor;
    }
};

class PaddingDemo {
    char a;    // 1 byte
    int b;     // 4 bytes
    char c;    // 1 byte
};

class NoPaddingDemo {
    int b;     // 4 bytes
    char a;    // 1 byte
    char c;    // 1 byte
};

class Empty {};

int main() {
    const Circle c1(5.0);
    cout << "Area: " << c1.area() << endl;
    cout << "Circumference: " << c1.circumference() << endl;
    // c1.scale(2.0);  // ERROR: c1 is const, scale() is not const

    Circle c2(3.0);
    c2.scale(2.0);     // OK: c2 is not const
    cout << "Scaled area: " << c2.area() << endl;

    cout << "\nsizeof(PaddingDemo): " << sizeof(PaddingDemo) << endl;
    cout << "sizeof(NoPaddingDemo): " << sizeof(NoPaddingDemo) << endl;
    cout << "sizeof(Empty): " << sizeof(Empty) << endl;

    return 0;
}
```

A `const` object (`c1`) can only call `const` member functions. `area()` and `circumference()` are const, so they work. `scale()` is non-const, so calling it on c1 would be a compile error. For sizeof, the compiler adds padding bytes for alignment: PaddingDemo has 3 bytes of padding (total 12), while NoPaddingDemo packs better (total 8). An empty class has size 1.

**Output:**

```
Area: 78.5397
Circumference: 31.4159
Scaled area: 113.097

sizeof(PaddingDemo): 12
sizeof(NoPaddingDemo): 8
sizeof(Empty): 1
```

## Common Mistakes

### Forgetting to Define Static Members Outside the Class

**Wrong:**

```
class Counter {
    static int count;  // declaration only
public:
    Counter() { count++; }
};

// Missing: int Counter::count = 0;

Counter c;  // LINKER ERROR
```

undefined reference to 'Counter::count'

**Correct:**

```
class Counter {
    static int count;
public:
    Counter() { count++; }
};
int Counter::count = 0;  // definition outside the class

Counter c;  // OK
```

A static member declared inside a class is only a declaration. You must define it outside the class (typically in the .cpp file) with `int Counter::count = 0;`. Without this, the linker cannot find the actual storage for the variable.

### Using Parentheses for Default Construction (Most Vexing Parse)

**Wrong:**

```
class Widget {
public:
    Widget() { cout << "Created" << endl; }
};

Widget w();  // This is NOT an object declaration!
```

No error, but w is treated as a function declaration (returns Widget, takes no arguments). The constructor is never called.

**Correct:**

```
Widget w;      // C++ default construction (no parentheses)
Widget w2{};   // C++11 brace initialization
// Both create a Widget object and call the default constructor
```

This is the "most vexing parse" in C++. `Widget w();` is parsed as a function declaration, not an object creation. Use `Widget w;` or `Widget w{};` for default construction.

### Not Using Initializer List for const Members

**Wrong:**

```
class Config {
    const int maxSize;
public:
    Config(int size) {
        maxSize = size;  // ERROR: cannot assign to const member
    }
};
```

error: assignment of read-only member 'Config::maxSize'

**Correct:**

```
class Config {
    const int maxSize;
public:
    Config(int size) : maxSize(size) {}  // initializer list
};
```

A `const` member cannot be assigned -- it must be initialized. The initializer list (`: maxSize(size)`) initializes the member directly during construction. The same applies to reference members.

### Calling Non-const Method on a const Object

**Wrong:**

```
class Counter {
    int count;
public:
    Counter() : count(0) {}
    void increment() { count++; }
    int getCount() { return count; }  // not const!
};

const Counter c;
cout << c.getCount();  // ERROR
```

error: passing 'const Counter' as 'this' argument discards qualifiers

**Correct:**

```
class Counter {
    int count;
public:
    Counter() : count(0) {}
    void increment() { count++; }
    int getCount() const { return count; }  // now const
};

const Counter c;
cout << c.getCount();  // OK
```

A `const` object can only call `const` member functions. If `getCount()` does not modify any member, mark it `const`. As a rule, all member functions that do not modify the object should be const.

### Shallow Copy with Pointers (Missing Deep Copy Constructor)

**Wrong:**

```
class Array {
    int* data;
    int size;
public:
    Array(int n) : size(n), data(new int[n]()) {}
    ~Array() { delete[] data; }
};

Array a(5);
Array b = a;  // shallow copy: b.data = a.data (same address!)
// When b is destroyed, it frees data.
// When a is destroyed, it tries to free the same data: DOUBLE FREE!
```

Double-free or heap corruption at runtime. Both objects' destructors free the same memory.

**Correct:**

```
class Array {
    int* data;
    int size;
public:
    Array(int n) : size(n), data(new int[n]()) {}
    Array(const Array& other) : size(other.size), data(new int[other.size]) {
        for (int i = 0; i < size; i++) data[i] = other.data[i];  // deep copy
    }
    ~Array() { delete[] data; }
};
```

The compiler-generated copy constructor does a shallow copy (copies the pointer value). Both objects then point to the same heap memory. When either is destroyed, the other has a dangling pointer. Write a deep copy constructor that allocates new memory and copies the contents.

## Summary

- A class bundles data members and member functions into a single unit. An object is an instance of a class.
- In C++, class members are private by default; struct members are public by default. This is the only difference between class and struct.
- Constructors are called automatically when an object is created. Types: default (no args), parameterized (with args), copy (from another object).
- Constructor overloading allows multiple constructors with different parameter lists. The compiler selects the right one based on the arguments.
- Initializer lists (: member(value)) initialize members directly. Required for const members, reference members, and base class constructors.
- Destructors (~ClassName) are called automatically when objects go out of scope or are deleted. They run in reverse order of construction.
- The this pointer is an implicit pointer to the current object in non-static member functions. Use it to disambiguate names and enable method chaining.
- Static members are shared across all objects. Static functions can only access static members and have no this pointer.
- const member functions promise not to modify any member. A const object can only call const member functions.
- sizeof a class depends on data members and padding. Member functions do not contribute to size. An empty class has sizeof 1.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/oop-classes-and-objects/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/oop-classes-and-objects/practice/*
