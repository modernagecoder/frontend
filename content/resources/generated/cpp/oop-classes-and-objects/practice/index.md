---
title: "Practice: OOP - Classes, Objects, and Constructors in C++"
description: "60 practice problems for OOP - Classes, Objects, and Constructors in C++ in C++"
slug: oop-classes-and-objects-practice
canonical: https://learn.modernagecoders.com/resources/cpp/oop-classes-and-objects/practice
category: "C++"
---
# Practice: OOP - Classes, Objects, and Constructors in C++

**Total questions:** 60

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
class Greet {
public:
    Greet() { cout << "Hello "; }
    ~Greet() { cout << "Bye "; }
};

int main() {
    Greet g;
    cout << "World ";
}
```

*Hint:* The constructor runs when g is created. The destructor runs when main ends.

**Answer:** `Hello World Bye `

The constructor prints "Hello" when `g` is created. "World" is printed next. When main returns, `g` is destroyed and the destructor prints "Bye".

### Q2. [Easy] What is the output?

```
class Box {
public:
    int value;
    Box() : value(0) {}
    Box(int v) : value(v) {}
};

Box a;
Box b(10);
cout << a.value << " " << b.value;
```

*Hint:* Box a calls the default constructor. Box b(10) calls the parameterized constructor.

**Answer:** `0 10`

`Box a` calls the default constructor, setting value to 0. `Box b(10)` calls the parameterized constructor, setting value to 10.

### Q3. [Easy] What is the output?

```
class Counter {
public:
    static int count;
    Counter() { count++; }
};
int Counter::count = 0;

Counter a, b, c;
cout << Counter::count;
```

*Hint:* Static members are shared. Each constructor increments the same count.

**Answer:** `3`

`count` is static (shared). Each of the three constructors increments it by 1. After creating a, b, c: count = 3.

### Q4. [Easy] What is the output?

```
class Point {
public:
    int x, y;
    Point(int x, int y) {
        this->x = x;
        this->y = y;
    }
};

Point p(3, 7);
cout << p.x << " " << p.y;
```

*Hint:* this->x refers to the member; x refers to the parameter.

**Answer:** `3 7`

`this->x` is the member variable, `x` is the constructor parameter. `this->x = x` assigns the parameter value to the member.

### Q5. [Medium] What is the output?

```
class A {
public:
    A() { cout << "A "; }
    ~A() { cout << "~A "; }
};

int main() {
    A a1;
    A a2;
    A a3;
    cout << "| ";
}
```

*Hint:* Destructors run in reverse order of construction.

**Answer:** `A A A | ~A ~A ~A `

Three objects are created: a1, a2, a3 (printing "A" each time). When main ends, destructors run in reverse order: a3, a2, a1.

### Q6. [Medium] What is the output?

```
class Tag {
    string name;
public:
    Tag(string n) : name(n) { cout << "+" << name << " "; }
    Tag(const Tag& t) : name(t.name + "_c") { cout << "C:" << name << " "; }
    ~Tag() { cout << "-" << name << " "; }
};

Tag t1("X");
Tag t2 = t1;
```

(Assume this is inside main)

*Hint:* Tag t2 = t1 invokes the copy constructor. Destructors run in reverse.

**Answer:** `+X C:X_c `
(After main: `-X_c -X `)

`Tag t1("X")` calls the parameterized constructor: +X. `Tag t2 = t1` calls the copy constructor: C:X_c. When main ends, destructors run in reverse: -X_c (t2), then -X (t1).

### Q7. [Medium] What is the output?

```
class Chain {
    int val;
public:
    Chain(int v) : val(v) {}
    Chain& add(int n) {
        val += n;
        return *this;
    }
    void print() const {
        cout << val;
    }
};

Chain c(10);
c.add(5).add(3).add(2).print();
```

*Hint:* Each add() returns *this, allowing the next call on the same object.

**Answer:** `20`

`c` starts with val = 10. `add(5)`: val = 15. `add(3)`: val = 18. `add(2)`: val = 20. Each call returns `*this`, so the chain continues on the same object.

### Q8. [Medium] What is the output?

```
class Item {
    static int created;
    static int alive;
public:
    Item() { created++; alive++; }
    ~Item() { alive--; }
    static void stats() {
        cout << "Created: " << created << ", Alive: " << alive << endl;
    }
};
int Item::created = 0;
int Item::alive = 0;

int main() {
    Item a, b;
    Item::stats();
    {
        Item c;
        Item::stats();
    }
    Item::stats();
}
```

*Hint:* c is destroyed when the inner block ends. created never decreases.

**Answer:** `Created: 2, Alive: 2`
`Created: 3, Alive: 3`
`Created: 3, Alive: 2`

After a and b: created=2, alive=2. After c: created=3, alive=3. After inner block ends (c destroyed): created=3, alive=2.

### Q9. [Hard] What is the output?

```
class A {
public:
    A() { cout << "A() "; }
    A(int x) { cout << "A(" << x << ") "; }
    A(const A& a) { cout << "A(copy) "; }
    ~A() { cout << "~A "; }
};

A func() {
    A local(5);
    return local;
}

int main() {
    A obj = func();
    cout << "| ";
}
```

*Hint:* The copy constructor may or may not be called due to copy elision (NRVO). Without elision: local is constructed, copied, destroyed. With elision: only one construction.

**Answer:** Without copy elision: `A(5) A(copy) ~A | ~A `
With copy elision (common): `A(5) | ~A `

The compiler may perform Named Return Value Optimization (NRVO), eliminating the copy. Without NRVO: local is constructed with A(5), then copied into obj, then local is destroyed. With NRVO (which most modern compilers do): local is constructed directly in obj's memory. Since C++17, this elision is mandatory in many cases.

### Q10. [Hard] What is the output?

```
class Nested {
public:
    Nested() { cout << "N "; }
    ~Nested() { cout << "~N "; }
};

class Outer {
    Nested n1;
    Nested n2;
public:
    Outer() { cout << "O "; }
    ~Outer() { cout << "~O "; }
};

Outer obj;
```

*Hint:* Member objects are constructed before the class constructor body. Destruction is in reverse.

**Answer:** `N N O `
(After main: `~O ~N ~N `)

Members n1 and n2 are constructed in declaration order before Outer's constructor body runs: N N O. Destruction is in reverse: Outer's destructor runs first (~O), then members in reverse order (~N ~N for n2 then n1).

### Q11. [Hard] What is the output?

```
class Val {
    int x;
public:
    Val(int v = 0) : x(v) { cout << "C:" << x << " "; }
    ~Val() { cout << "D:" << x << " "; }
};

Val arr[3] = {Val(10), Val(20)};
```

(Assume inside main)

*Hint:* The third element uses the default argument value. Destructors run in reverse.

**Answer:** `C:10 C:20 C:0 `
(After main: `D:0 D:20 D:10 `)

arr[0] is Val(10), arr[1] is Val(20), and arr[2] uses the default argument (Val(0)). Destructors run in reverse array order: arr[2], arr[1], arr[0].

## Mixed Questions

### Q1. [Easy] What is the difference between a class and a struct in C++?

*Hint:* Think about the default access specifier.

**Answer:** In C++, the **only** difference is the default access specifier: `class` members are `private` by default, while `struct` members are `public` by default. In every other respect (constructors, destructors, inheritance, virtual functions), they are identical.

In practice, struct is used for plain data holders (like POD types or simple groupings), and class is used when the type has behavior, invariants, or encapsulation. This is a convention, not a language requirement.

### Q2. [Easy] What is the output?

```
struct Point {
    int x, y;
};

Point p;
p.x = 5;
p.y = 10;
cout << p.x + p.y;
```

*Hint:* struct members are public by default.

**Answer:** `15`

In a struct, `x` and `y` are public by default. They can be accessed directly. 5 + 10 = 15.

### Q3. [Easy] What is the output?

```
class Num {
public:
    int val;
    Num(int v) : val(v) {}
};

Num a(5), b(3);
cout << a.val * b.val;
```

*Hint:* Two objects with their own val members.

**Answer:** `15`

`a.val` is 5, `b.val` is 3. Product is 15.

### Q4. [Medium] What is the output?

```
class Scope {
public:
    string name;
    Scope(string n) : name(n) { cout << "+" << name << " "; }
    ~Scope() { cout << "-" << name << " "; }
};

int main() {
    Scope a("A");
    {
        Scope b("B");
        Scope c("C");
    }
    Scope d("D");
}
```

*Hint:* B and C are destroyed at the end of the inner block. A and D are destroyed at the end of main.

**Answer:** `+A +B +C -C -B +D -D -A `

A is created first. Then B and C are created inside the block. When the block ends, C and B are destroyed (reverse order). D is created after the block. When main ends, D and A are destroyed (reverse order).

### Q5. [Medium] Why should you use initializer lists instead of assignment in constructor bodies?

*Hint:* Think about const members, reference members, and efficiency.

**Answer:** Initializer lists directly initialize members, while assignment in the body first default-constructs and then assigns. Initializer lists are: (1) **Required** for const members, reference members, and base class constructors. (2) **More efficient** for class-type members (avoids unnecessary default construction + assignment). (3) Members are initialized in declaration order regardless of the list order.

For primitive types, the performance difference is negligible. For class types like std::string, the initializer list calls the copy constructor once, while body assignment calls the default constructor then the copy assignment operator -- two operations instead of one.

### Q6. [Medium] What is the output?

```
class Demo {
    int x;
public:
    Demo(int val) : x(val) {}
    void show() const {
        cout << x << " ";
    }
};

const Demo d(42);
d.show();
// d.x = 10;  // Would this work?
```

*Hint:* d is const, so only const member functions can be called, and no members can be modified.

**Answer:** `42 `
(d.x = 10 would fail because x is private AND d is const)

`show()` is const, so calling it on a const object is fine. `d.x = 10` would fail for two reasons: x is private, and d is const.

### Q7. [Hard] What is the output?

```
class A {
public:
    int x;
    A() : x(0) {}
    A(int v) : x(v) {}
    A(const A& other) : x(other.x) {
        cout << "copy(" << x << ") ";
    }
};

void func(A obj) {
    cout << obj.x << " ";
}

A a(10);
func(a);
```

*Hint:* Passing by value triggers the copy constructor.

**Answer:** `copy(10) 10 `

The function takes `A` by value. Passing `a` to `func` invokes the copy constructor to create the parameter `obj`. The copy constructor prints "copy(10)", then the function prints obj.x which is 10.

### Q8. [Hard] What is sizeof the following class?

```
class Mystery {
    double d;    // 8 bytes
    char c;      // 1 byte
    int i;       // 4 bytes
};
cout << sizeof(Mystery);
```

*Hint:* Think about alignment. double requires 8-byte alignment.

**Answer:** `16`

`d` occupies bytes 0-7 (8 bytes). `c` occupies byte 8 (1 byte). 3 bytes of padding (bytes 9-11) to align `i` to a 4-byte boundary. `i` occupies bytes 12-15 (4 bytes). Total: 16 bytes. The struct must also be padded to a multiple of the largest member's alignment (8), so 16 is the final size.

### Q9. [Hard] What is the output?

```
class Singleton {
    static Singleton* instance;
    int value;
    Singleton(int v) : value(v) {}
public:
    static Singleton* get(int v) {
        if (!instance)
            instance = new Singleton(v);
        return instance;
    }
    int getValue() const { return value; }
};
Singleton* Singleton::instance = nullptr;

cout << Singleton::get(42)->getValue() << endl;
cout << Singleton::get(99)->getValue() << endl;
```

*Hint:* The first call creates the instance. The second call returns the existing one.

**Answer:** `42`
`42`

The first call creates a Singleton with value 42. The second call finds that `instance` is not null, so it returns the existing instance (still value 42). The argument 99 is ignored. This is the Singleton design pattern.

## Multiple Choice Questions

### Q1. [Easy] What is the default access specifier for members of a class in C++?

**Answer:** B

**B is correct.** In a `class`, members are `private` by default. In a `struct`, members are `public` by default. `internal` (D) is not a C++ access specifier.

### Q2. [Easy] What is a constructor in C++?

**Answer:** B

**B is correct.** A constructor has the same name as the class, no return type, and is called automatically when an object is created. C describes a destructor, D describes a copy operation.

### Q3. [Easy] What is the correct syntax for a destructor of class MyClass?

**Answer:** B

**B is correct.** A destructor is named `~ClassName()` with no return type and no parameters. It cannot return void (A is wrong), is not the delete operator (C), and has a specific syntax (not a regular named method like D).

### Q4. [Easy] What does the this pointer hold in a member function?

**Answer:** B

**B is correct.** `this` is a pointer to the object on which the member function is being called. It allows the function to refer to the invoking object.

### Q5. [Medium] In what order are destructors called for local objects?

**Answer:** B

**B is correct.** C++ guarantees that destructors of local objects are called in the reverse order of their construction. This is LIFO (last in, first out) behavior.

### Q6. [Medium] Which of the following REQUIRES an initializer list?

**Answer:** B

**B is correct.** A `const` member must be initialized (not assigned) at construction time, which requires an initializer list. The same applies to reference members and base class constructors. Static members (D) are defined outside the class.

### Q7. [Medium] What can a static member function access?

**Answer:** C

**C is correct.** A static member function does not have a `this` pointer, so it cannot access non-static members (which require an object). It can only access static members of the class.

### Q8. [Medium] What is the sizeof an empty class in C++?

**Answer:** B

**B is correct.** An empty class has sizeof 1 (not 0). This ensures that every object has a unique address. If it were 0, two objects of the same empty class could have the same address, violating the identity principle.

### Q9. [Hard] When is the copy constructor called?

**Answer:** B

**B is correct.** The copy constructor is called in three scenarios: (1) `T obj2 = obj1;` in a declaration, (2) passing an object by value to a function, (3) returning an object by value (unless elided). D describes the copy assignment operator (`operator=`), not the copy constructor.

### Q10. [Hard] What is the "most vexing parse" in C++?

**Answer:** B

**B is correct.** `Widget w();` looks like creating a Widget with the default constructor, but C++ parses it as a function declaration (a function named w that returns Widget). Use `Widget w;` or `Widget w{};` instead.

### Q11. [Hard] In which order are member objects constructed and destroyed?

**Answer:** B

**B is correct.** Member objects are always constructed in the order they are declared in the class (not the initializer list order), and destroyed in reverse. This is guaranteed by the C++ standard.

### Q12. [Hard] What happens if a class has a pointer member and uses the compiler-generated copy constructor?

**Answer:** C

**C is correct.** The compiler-generated copy constructor performs a memberwise (shallow) copy. For pointer members, this means both the original and the copy point to the same address. This leads to double-free bugs if the destructor frees the memory.

### Q13. [Medium] Which keyword prevents a member from being modified in a const member function?

**Answer:** D

**D is correct.** Placing `const` after the parameter list (`int getValue() const`) makes the function a const member function that cannot modify any member. `mutable` (B) is the keyword that allows a member to be modified even in a const function, but the question asks what prevents modification.

## Coding Challenges

### Challenge 1. Student Class with Constructors

**Difficulty:** Easy

Create a Student class with name (string) and marks (double). Write a default constructor (name="Unknown", marks=0), a parameterized constructor, and a display() method. Create 3 students and display them.

**Constraints:**

- Use initializer lists. Mark display() as const.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Unknown - 0
Rahul - 85.5
Priya - 92.3
```

**Solution:**

```cpp
#include <iostream>
#include <string>
using namespace std;

class Student {
    string name;
    double marks;
public:
    Student() : name("Unknown"), marks(0) {}
    Student(string n, double m) : name(n), marks(m) {}
    void display() const {
        cout << name << " - " << marks << endl;
    }
};

int main() {
    Student s1;
    Student s2("Rahul", 85.5);
    Student s3("Priya", 92.3);
    s1.display();
    s2.display();
    s3.display();
    return 0;
}
```

### Challenge 2. Counter with Static Members

**Difficulty:** Easy

Create a Counter class with a static member totalCount that tracks how many Counter objects currently exist. The constructor increments it, the destructor decrements it. Add a static function getCount(). Demonstrate by creating and destroying objects in different scopes.

**Constraints:**

- Use static member variable and static function. Define static member outside the class.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Count: 2
Count: 3
Count: 2
Count: 0
```

**Solution:**

```cpp
#include <iostream>
using namespace std;

class Counter {
    static int totalCount;
public:
    Counter() { totalCount++; }
    ~Counter() { totalCount--; }
    static int getCount() { return totalCount; }
};
int Counter::totalCount = 0;

int main() {
    Counter a, b;
    cout << "Count: " << Counter::getCount() << endl;  // 2
    {
        Counter c;
        cout << "Count: " << Counter::getCount() << endl;  // 3
    }
    cout << "Count: " << Counter::getCount() << endl;  // 2
    return 0;
    // After main, a and b are destroyed
}
// Final count would be 0
```

### Challenge 3. BankAccount with Encapsulation

**Difficulty:** Medium

Create a BankAccount class with private members: accountHolder (string), balance (double). Provide a parameterized constructor, deposit(double), withdraw(double) with validation (no negative amounts, no overdraft), and display() const. Track total accounts created using a static member.

**Constraints:**

- All data members must be private. Validate inputs. Use initializer list.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Arjun: Rs.10000
Deposited Rs.5000. New balance: Rs.15000
Withdrew Rs.3000. New balance: Rs.12000
Insufficient balance!
Total accounts: 2
```

**Solution:**

```cpp
#include <iostream>
#include <string>
using namespace std;

class BankAccount {
    string holder;
    double balance;
    static int totalAccounts;
public:
    BankAccount(string h, double b) : holder(h), balance(b) {
        totalAccounts++;
    }
    void deposit(double amount) {
        if (amount <= 0) { cout << "Invalid amount!" << endl; return; }
        balance += amount;
        cout << "Deposited Rs." << amount << ". New balance: Rs." << balance << endl;
    }
    void withdraw(double amount) {
        if (amount <= 0) { cout << "Invalid amount!" << endl; return; }
        if (amount > balance) { cout << "Insufficient balance!" << endl; return; }
        balance -= amount;
        cout << "Withdrew Rs." << amount << ". New balance: Rs." << balance << endl;
    }
    void display() const {
        cout << holder << ": Rs." << balance << endl;
    }
    static int getTotalAccounts() { return totalAccounts; }
};
int BankAccount::totalAccounts = 0;

int main() {
    BankAccount acc1("Arjun", 10000);
    BankAccount acc2("Meera", 5000);
    acc1.display();
    acc1.deposit(5000);
    acc1.withdraw(3000);
    acc1.withdraw(20000);
    cout << "Total accounts: " << BankAccount::getTotalAccounts() << endl;
    return 0;
}
```

### Challenge 4. Deep Copy Constructor for Dynamic Array Class

**Difficulty:** Medium

Create an IntArray class that wraps a dynamic int array. Implement: constructor(int size), deep copy constructor, destructor, set(int index, int value), get(int index), and display(). Demonstrate that modifying the copy does not affect the original.

**Constraints:**

- Implement a deep copy constructor. The destructor must free memory. Demonstrate independence of original and copy.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Original: 10 20 30
Copy: 10 20 30
After modifying copy:
Original: 10 20 30
Copy: 10 99 30
```

**Solution:**

```cpp
#include <iostream>
using namespace std;

class IntArray {
    int* data;
    int size;
public:
    IntArray(int n) : size(n), data(new int[n]()) {}
    IntArray(const IntArray& other) : size(other.size), data(new int[other.size]) {
        for (int i = 0; i < size; i++) data[i] = other.data[i];
    }
    ~IntArray() { delete[] data; }
    void set(int i, int val) { data[i] = val; }
    int get(int i) const { return data[i]; }
    void display() const {
        for (int i = 0; i < size; i++) cout << data[i] << " ";
        cout << endl;
    }
};

int main() {
    IntArray original(3);
    original.set(0, 10);
    original.set(1, 20);
    original.set(2, 30);
    cout << "Original: ";
    original.display();

    IntArray copy = original;  // deep copy
    cout << "Copy: ";
    copy.display();

    copy.set(1, 99);
    cout << "After modifying copy:" << endl;
    cout << "Original: ";
    original.display();
    cout << "Copy: ";
    copy.display();
    return 0;
}
```

### Challenge 5. Method Chaining -- QueryBuilder

**Difficulty:** Hard

Create a QueryBuilder class that builds a SQL-like query string using method chaining. Methods: select(string columns), from(string table), where(string condition), orderBy(string column), build() which returns the final query string. Each method returns *this.

**Constraints:**

- Use the this pointer and return *this from each method. Use const for build().

**Sample input:**

```
(No input required)
```

**Sample output:**

```
SELECT name, marks FROM students WHERE marks > 80 ORDER BY marks
```

**Solution:**

```cpp
#include <iostream>
#include <string>
using namespace std;

class QueryBuilder {
    string query;
public:
    QueryBuilder& select(const string& cols) {
        query = "SELECT " + cols;
        return *this;
    }
    QueryBuilder& from(const string& table) {
        query += " FROM " + table;
        return *this;
    }
    QueryBuilder& where(const string& condition) {
        query += " WHERE " + condition;
        return *this;
    }
    QueryBuilder& orderBy(const string& col) {
        query += " ORDER BY " + col;
        return *this;
    }
    string build() const { return query; }
};

int main() {
    QueryBuilder qb;
    string query = qb.select("name, marks")
                     .from("students")
                     .where("marks > 80")
                     .orderBy("marks")
                     .build();
    cout << query << endl;
    return 0;
}
```

### Challenge 6. Matrix Class with Operator Overloading Preview

**Difficulty:** Hard

Create a Matrix class for 2x2 matrices. Implement: constructor(4 values), copy constructor, display(), add(const Matrix&) that returns a new Matrix with the sum, and a static identity() that returns the 2x2 identity matrix. Demonstrate all operations.

**Constraints:**

- Use initializer list. Pass by const reference. Use const member functions where appropriate.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Matrix A:
1 2
3 4
Matrix B:
5 6
7 8
A + B:
6 8
10 12
Identity:
1 0
0 1
```

**Solution:**

```cpp
#include <iostream>
using namespace std;

class Matrix {
    int data[2][2];
public:
    Matrix(int a, int b, int c, int d) {
        data[0][0] = a; data[0][1] = b;
        data[1][0] = c; data[1][1] = d;
    }
    Matrix(const Matrix& other) {
        for (int i = 0; i < 2; i++)
            for (int j = 0; j < 2; j++)
                data[i][j] = other.data[i][j];
    }
    Matrix add(const Matrix& other) const {
        return Matrix(
            data[0][0] + other.data[0][0],
            data[0][1] + other.data[0][1],
            data[1][0] + other.data[1][0],
            data[1][1] + other.data[1][1]
        );
    }
    static Matrix identity() {
        return Matrix(1, 0, 0, 1);
    }
    void display() const {
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++)
                cout << data[i][j] << " ";
            cout << endl;
        }
    }
};

int main() {
    Matrix a(1, 2, 3, 4);
    Matrix b(5, 6, 7, 8);
    cout << "Matrix A:" << endl;
    a.display();
    cout << "Matrix B:" << endl;
    b.display();
    Matrix c = a.add(b);
    cout << "A + B:" << endl;
    c.display();
    cout << "Identity:" << endl;
    Matrix::identity().display();
    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/oop-classes-and-objects/*
