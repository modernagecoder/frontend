---
title: "C++ Smart Pointers - unique_ptr, shared_ptr, weak_ptr, RAII, Move Semantics | Modern Age Coders"
description: "Master C++ smart pointers and modern memory management. Learn unique_ptr, shared_ptr, weak_ptr, RAII, make_unique, make_shared, custom deleters, rule of five/zero, and move semantics. Includes 54+ practice questions."
slug: smart-pointers-and-memory
canonical: https://learn.modernagecoders.com/resources/cpp/smart-pointers-and-memory
category: "C++"
keywords: ["c++ smart pointers", "c++ unique_ptr", "c++ shared_ptr", "c++ weak_ptr", "c++ RAII", "c++ move semantics", "c++ make_unique", "c++ make_shared", "c++ rule of five", "c++ modern memory management"]
---
# Smart Pointers and Modern Memory Management

**Difficulty:** Advanced  
**Reading time:** 50 min  
**Chapter:** 23

## What Are Smart Pointers?

**Smart pointers** are class templates in the `` header that wrap raw pointers and automatically manage the lifetime of dynamically allocated objects. When a smart pointer goes out of scope, it automatically deletes the managed object -- no manual `delete` required.

C++ provides three smart pointer types:

- **unique_ptr** -- exclusive ownership, cannot be copied, only moved
- **shared_ptr** -- shared ownership via reference counting, last owner deletes
- **weak_ptr** -- non-owning reference to a shared_ptr, breaks circular references

Smart pointers implement the **RAII (Resource Acquisition Is Initialization)** principle: resources are acquired in the constructor and released in the destructor. Since destructors run automatically when objects go out of scope, resource leaks are impossible.

```cpp
#include 
#include 
using namespace std;

class Sensor {
    string name;
public:
    Sensor(string n) : name(n) { cout << name << " created" << endl; }
    ~Sensor() { cout << name << " destroyed" << endl; }
    void read() { cout << name << " reading data" << endl; }
};

int main() {
    // Raw pointer: manual delete required (error-prone)
    Sensor* raw = new Sensor("RawSensor");
    raw->read();
    delete raw;  // Easy to forget!

    // Smart pointer: automatic cleanup
    unique_ptr smart = make_unique("SmartSensor");
    smart->read();
    // No delete needed -- destroyed automatically when smart goes out of scope
    return 0;
}
```

When Aditya says "use a unique_ptr for exclusive ownership" or Kavitha says "break the cycle with a weak_ptr," these are fundamental patterns that every modern C++ developer must know.

## Why Are Smart Pointers Important?

### 1. Eliminate Memory Leaks

Raw pointers require manual `delete` for every `new`. Forgetting a single `delete` causes a memory leak. Smart pointers guarantee that memory is freed when the owning pointer goes out of scope, even if an exception is thrown.

### 2. RAII: Exception-Safe Resource Management

When an exception is thrown, local variables are destroyed (stack unwinding), but raw pointers are not deallocated. Smart pointers, being stack objects, are destroyed during unwinding, ensuring the managed resource is freed. This makes code exception-safe without try-catch blocks for cleanup.

### 3. Clear Ownership Semantics

`unique_ptr` says "I am the sole owner." `shared_ptr` says "multiple owners share this resource." `weak_ptr` says "I observe but do not own." These types communicate intent in the code itself, making it self-documenting.

### 4. Move Semantics Enable Zero-Cost Ownership Transfer

`unique_ptr` cannot be copied but can be moved. `std::move` transfers ownership without any heap allocation or reference count update -- it is as fast as copying a raw pointer. This enables efficient factory functions, container operations, and ownership passing.

### 5. Industry Standard

The C++ Core Guidelines (maintained by Bjarne Stroustrup and Herb Sutter) recommend: "Never use raw owning pointers." Google, Microsoft, Meta, and every major C++ codebase use smart pointers extensively. Interviews at these companies expect fluency with RAII and smart pointers.

## Detailed Explanation

**Smart pointers** are class templates in the `` header that wrap raw pointers and automatically manage the lifetime of dynamically allocated objects. When a smart pointer goes out of scope, it automatically deletes the managed object -- no manual `delete` required.

C++ provides three smart pointer types:

- **unique_ptr** -- exclusive ownership, cannot be copied, only moved
- **shared_ptr** -- shared ownership via reference counting, last owner deletes
- **weak_ptr** -- non-owning reference to a shared_ptr, breaks circular references

Smart pointers implement the **RAII (Resource Acquisition Is Initialization)** principle: resources are acquired in the constructor and released in the destructor. Since destructors run automatically when objects go out of scope, resource leaks are impossible.

```cpp
#include 
#include 
using namespace std;

class Sensor {
    string name;
public:
    Sensor(string n) : name(n) { cout << name << " created" << endl; }
    ~Sensor() { cout << name << " destroyed" << endl; }
    void read() { cout << name << " reading data" << endl; }
};

int main() {
    // Raw pointer: manual delete required (error-prone)
    Sensor* raw = new Sensor("RawSensor");
    raw->read();
    delete raw;  // Easy to forget!

    // Smart pointer: automatic cleanup
    unique_ptr smart = make_unique("SmartSensor");
    smart->read();
    // No delete needed -- destroyed automatically when smart goes out of scope
    return 0;
}
```

When Aditya says "use a unique_ptr for exclusive ownership" or Kavitha says "break the cycle with a weak_ptr," these are fundamental patterns that every modern C++ developer must know.

### 1. Eliminate Memory Leaks

Raw pointers require manual `delete` for every `new`. Forgetting a single `delete` causes a memory leak. Smart pointers guarantee that memory is freed when the owning pointer goes out of scope, even if an exception is thrown.

### 2. RAII: Exception-Safe Resource Management

When an exception is thrown, local variables are destroyed (stack unwinding), but raw pointers are not deallocated. Smart pointers, being stack objects, are destroyed during unwinding, ensuring the managed resource is freed. This makes code exception-safe without try-catch blocks for cleanup.

### 3. Clear Ownership Semantics

`unique_ptr` says "I am the sole owner." `shared_ptr` says "multiple owners share this resource." `weak_ptr` says "I observe but do not own." These types communicate intent in the code itself, making it self-documenting.

### 4. Move Semantics Enable Zero-Cost Ownership Transfer

`unique_ptr` cannot be copied but can be moved. `std::move` transfers ownership without any heap allocation or reference count update -- it is as fast as copying a raw pointer. This enables efficient factory functions, container operations, and ownership passing.

### 5. Industry Standard

The C++ Core Guidelines (maintained by Bjarne Stroustrup and Herb Sutter) recommend: "Never use raw owning pointers." Google, Microsoft, Meta, and every major C++ codebase use smart pointers extensively. Interviews at these companies expect fluency with RAII and smart pointers.

## Code Examples

### unique_ptr: Exclusive Ownership and Move Semantics

```cpp
#include <iostream>
#include <memory>
using namespace std;

class Engine {
    int hp;
public:
    Engine(int h) : hp(h) { cout << "Engine(" << hp << "hp) created" << endl; }
    ~Engine() { cout << "Engine(" << hp << "hp) destroyed" << endl; }
    int power() const { return hp; }
};

void printPower(unique_ptr<Engine>& e) {
    cout << "Power: " << e->power() << "hp" << endl;
}

int main() {
    // Create with make_unique (preferred over new)
    unique_ptr<Engine> e1 = make_unique<Engine>(150);
    printPower(e1);

    // unique_ptr CANNOT be copied
    // unique_ptr<Engine> e2 = e1;  // ERROR: deleted copy constructor

    // But CAN be moved -- transfers ownership
    unique_ptr<Engine> e2 = move(e1);
    cout << "e1 is " << (e1 ? "valid" : "null") << endl;
    cout << "e2 power: " << e2->power() << "hp" << endl;

    // unique_ptr with arrays
    unique_ptr<int[]> arr = make_unique<int[]>(5);
    for (int i = 0; i < 5; i++) arr[i] = i * 10;
    for (int i = 0; i < 5; i++) cout << arr[i] << " ";
    cout << endl;

    return 0;
    // e2 and arr automatically destroyed here
}
```

`unique_ptr` enforces exclusive ownership at compile time. You cannot copy it (the copy constructor is deleted), but you can transfer ownership with `std::move`. After a move, the source becomes `nullptr`. Always use `make_unique` instead of raw `new` -- it is exception-safe and avoids potential memory leaks.

**Output:**

```
Engine(150hp) created
Power: 150hp
e1 is null
e2 power: 150hp
0 10 20 30 40
Engine(150hp) destroyed
```

### shared_ptr: Shared Ownership and Reference Counting

```cpp
#include <iostream>
#include <memory>
using namespace std;

class Connection {
    string name;
public:
    Connection(string n) : name(n) { cout << name << " opened" << endl; }
    ~Connection() { cout << name << " closed" << endl; }
    void query() { cout << name << " executing query" << endl; }
};

int main() {
    shared_ptr<Connection> c1 = make_shared<Connection>("DB-Pool");
    cout << "use_count after c1: " << c1.use_count() << endl;

    {
        shared_ptr<Connection> c2 = c1;  // Shared ownership
        cout << "use_count after c2: " << c1.use_count() << endl;

        shared_ptr<Connection> c3 = c1;  // Another share
        cout << "use_count after c3: " << c1.use_count() << endl;

        c2->query();
    }  // c2 and c3 destroyed here, but Connection survives

    cout << "use_count after scope: " << c1.use_count() << endl;
    c1->query();
    return 0;
    // c1 destroyed, use_count drops to 0, Connection is finally deleted
}
```

`shared_ptr` uses reference counting. Each copy increments the count, each destruction decrements it. The managed object is deleted only when the last shared_ptr is destroyed (count reaches 0). Use `make_shared` for a single allocation (control block + object together).

**Output:**

```
DB-Pool opened
use_count after c1: 1
use_count after c2: 2
use_count after c3: 3
DB-Pool executing query
use_count after scope: 1
DB-Pool executing query
DB-Pool closed
```

### weak_ptr: Breaking Circular References

```cpp
#include <iostream>
#include <memory>
using namespace std;

struct Student;
struct Mentor;

struct Student {
    string name;
    shared_ptr<Mentor> mentor;  // Student owns a reference to Mentor
    Student(string n) : name(n) { cout << "Student " << name << " created" << endl; }
    ~Student() { cout << "Student " << name << " destroyed" << endl; }
};

struct Mentor {
    string name;
    weak_ptr<Student> student;  // weak_ptr breaks the cycle!
    Mentor(string n) : name(n) { cout << "Mentor " << name << " created" << endl; }
    ~Mentor() { cout << "Mentor " << name << " destroyed" << endl; }
    void checkStudent() {
        if (auto sp = student.lock())  // lock() returns shared_ptr or nullptr
            cout << name << " mentors " << sp->name << endl;
        else
            cout << name << ": student no longer exists" << endl;
    }
};

int main() {
    {
        auto s = make_shared<Student>("Vikram");
        auto m = make_shared<Mentor>("Prof. Sharma");
        s->mentor = m;
        m->student = s;  // weak_ptr, does NOT increase ref count
        m->checkStudent();
        cout << "Student use_count: " << s.use_count() << endl;
        cout << "Mentor use_count: " << m.use_count() << endl;
    }
    // Both destroyed correctly -- no leak!
    cout << "Scope ended, no memory leak" << endl;
    return 0;
}
```

If both Student and Mentor held `shared_ptr` to each other, neither would ever reach use_count 0 -- a circular reference causing a memory leak. `weak_ptr` does not increment the reference count, breaking the cycle. Use `lock()` to temporarily obtain a `shared_ptr` from a `weak_ptr`, checking if the object still exists.

**Output:**

```
Student Vikram created
Mentor Prof. Sharma created
Prof. Sharma mentors Vikram
Student use_count: 1
Mentor use_count: 1
Mentor Prof. Sharma destroyed
Student Vikram destroyed
Scope ended, no memory leak
```

### Custom Deleters with Smart Pointers

```cpp
#include <iostream>
#include <memory>
#include <cstdio>
using namespace std;

int main() {
    // Custom deleter for FILE* (C-style file handle)
    auto fileDeleter = [](FILE* f) {
        if (f) {
            cout << "Closing file" << endl;
            fclose(f);
        }
    };

    {
        unique_ptr<FILE, decltype(fileDeleter)> file(
            fopen("test.txt", "w"), fileDeleter
        );
        if (file) {
            fputs("Hello from smart pointer!\n", file.get());
            cout << "Written to file" << endl;
        }
    }  // file automatically closed here

    // Custom deleter with shared_ptr (simpler syntax)
    {
        shared_ptr<int> arr(
            new int[5]{10, 20, 30, 40, 50},
            [](int* p) {
                cout << "Deleting array" << endl;
                delete[] p;
            }
        );
        cout << "arr[0] = " << arr.get()[0] << endl;
    }  // delete[] called automatically

    cout << "All resources freed" << endl;
    return 0;
}
```

Custom deleters let you manage non-memory resources (files, sockets, database handles) with smart pointers. For `unique_ptr`, pass the deleter type as a template parameter. For `shared_ptr`, pass a lambda or function as the second constructor argument. This extends RAII to any resource, not just heap memory.

**Output:**

```
Written to file
Closing file
arr[0] = 10
Deleting array
All resources freed
```

### Move Semantics: std::move and Rvalue References

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <utility>
using namespace std;

class Buffer {
    int* data;
    int size;
public:
    Buffer(int n) : size(n), data(new int[n]) {
        cout << "Buffer(" << n << ") constructed" << endl;
    }
    ~Buffer() {
        delete[] data;
        cout << "Buffer destroyed" << endl;
    }
    // Copy constructor (expensive)
    Buffer(const Buffer& other) : size(other.size), data(new int[other.size]) {
        copy(other.data, other.data + size, data);
        cout << "Buffer copied (expensive!)" << endl;
    }
    // Move constructor (cheap -- steal the resources)
    Buffer(Buffer&& other) noexcept : data(other.data), size(other.size) {
        other.data = nullptr;
        other.size = 0;
        cout << "Buffer moved (cheap!)" << endl;
    }
    int getSize() const { return size; }
};

int main() {
    Buffer b1(1000);

    // Copy: allocates new memory and copies data
    Buffer b2 = b1;

    // Move: steals b1's internal data pointer
    Buffer b3 = move(b1);
    cout << "b1 size after move: " << b1.getSize() << endl;
    cout << "b3 size: " << b3.getSize() << endl;

    // Move is used internally by STL containers
    vector<Buffer> buffers;
    buffers.push_back(Buffer(500));  // Move, not copy
    return 0;
}
```

`std::move` casts an object to an rvalue reference (`&&`), enabling the move constructor to "steal" its resources instead of copying them. A moved-from object must be in a valid but unspecified state (typically nulled out). Move semantics are critical for performance: moving a 1GB buffer is O(1) while copying is O(n).

**Output:**

```
Buffer(1000) constructed
Buffer copied (expensive!)
Buffer moved (cheap!)
b1 size after move: 0
b3 size: 1000
Buffer(500) constructed
Buffer moved (cheap!)
Buffer destroyed
Buffer destroyed
Buffer destroyed
Buffer destroyed
```

### Rule of Five and Rule of Zero

```cpp
#include <iostream>
#include <memory>
#include <cstring>
using namespace std;

// Rule of Five: if you define any of the 5, define all 5
class RawString {
    char* data;
    int len;
public:
    // Constructor
    RawString(const char* s) {
        len = strlen(s);
        data = new char[len + 1];
        strcpy(data, s);
    }
    // 1. Destructor
    ~RawString() { delete[] data; }
    // 2. Copy constructor
    RawString(const RawString& other) : len(other.len) {
        data = new char[len + 1];
        strcpy(data, other.data);
    }
    // 3. Copy assignment
    RawString& operator=(const RawString& other) {
        if (this != &other) {
            delete[] data;
            len = other.len;
            data = new char[len + 1];
            strcpy(data, other.data);
        }
        return *this;
    }
    // 4. Move constructor
    RawString(RawString&& other) noexcept : data(other.data), len(other.len) {
        other.data = nullptr;
        other.len = 0;
    }
    // 5. Move assignment
    RawString& operator=(RawString&& other) noexcept {
        if (this != &other) {
            delete[] data;
            data = other.data;
            len = other.len;
            other.data = nullptr;
            other.len = 0;
        }
        return *this;
    }
    void print() { cout << data << endl; }
};

// Rule of Zero: use smart pointers, no manual memory management
class ModernString {
    unique_ptr<char[]> data;
    int len;
public:
    ModernString(const char* s) : len(strlen(s)), data(make_unique<char[]>(strlen(s) + 1)) {
        strcpy(data.get(), s);
    }
    // No destructor, copy, move needed! Compiler generates correct ones.
    void print() { cout << data.get() << endl; }
};

int main() {
    RawString r1("Arjun");
    RawString r2 = r1;  // Copy
    RawString r3 = move(r1);  // Move
    r2.print();
    r3.print();

    ModernString m("Priya");
    m.print();
    return 0;
}
```

The **Rule of Five**: if you define any of destructor, copy constructor, copy assignment, move constructor, or move assignment, you should define all five. The **Rule of Zero**: prefer using smart pointers so you do not need to define any of the five -- the compiler-generated defaults do the right thing. Modern C++ strongly favors the Rule of Zero.

**Output:**

```
Arjun
Arjun
Priya
```

### Choosing the Right Smart Pointer

```cpp
#include <iostream>
#include <memory>
#include <vector>
using namespace std;

class Widget {
    int id;
public:
    Widget(int i) : id(i) { cout << "Widget " << id << " created" << endl; }
    ~Widget() { cout << "Widget " << id << " destroyed" << endl; }
    int getId() const { return id; }
};

// Factory: returns unique_ptr (caller gets ownership)
unique_ptr<Widget> createWidget(int id) {
    return make_unique<Widget>(id);
}

// Observer: takes raw pointer or reference (does NOT own)
void inspect(const Widget& w) {
    cout << "Inspecting widget " << w.getId() << endl;
}

int main() {
    // unique_ptr: single owner
    auto w1 = createWidget(1);
    inspect(*w1);

    // Transfer ownership to a container
    vector<unique_ptr<Widget>> widgets;
    widgets.push_back(move(w1));
    widgets.push_back(createWidget(2));
    widgets.push_back(createWidget(3));

    cout << "Container has " << widgets.size() << " widgets" << endl;

    // shared_ptr: multiple owners
    auto s1 = make_shared<Widget>(4);
    auto s2 = s1;  // Shared ownership
    cout << "use_count: " << s1.use_count() << endl;

    // weak_ptr: observe without owning
    weak_ptr<Widget> observer = s1;
    cout << "expired? " << observer.expired() << endl;

    return 0;
}
```

Use `unique_ptr` by default (cheapest, clearest ownership). Use `shared_ptr` only when multiple owners genuinely need to share lifetime. Use `weak_ptr` to observe a shared resource without preventing deletion. Pass raw pointers or references for non-owning access to existing objects.

**Output:**

```
Widget 1 created
Inspecting widget 1
Widget 2 created
Widget 3 created
Container has 3 widgets
Widget 4 created
use_count: 2
expired? 0
Widget 4 destroyed
Widget 3 destroyed
Widget 2 destroyed
Widget 1 destroyed
```

## Common Mistakes

### Using new Instead of make_unique/make_shared

**Wrong:**

```
unique_ptr<int> p(new int(42));
shared_ptr<int> q(new int(99));
```

Using new directly is not exception-safe and can cause memory leaks if an exception is thrown between new and the smart pointer construction. It is also less efficient for shared_ptr (two allocations instead of one).

**Correct:**

```
auto p = make_unique<int>(42);
auto q = make_shared<int>(99);
```

`make_unique` and `make_shared` are exception-safe and more efficient. `make_shared` allocates the control block and the object in a single allocation. Always prefer them over raw `new`.

### Trying to Copy a unique_ptr

**Wrong:**

```
unique_ptr<int> p1 = make_unique<int>(42);
unique_ptr<int> p2 = p1;  // Compilation error!
```

unique_ptr has a deleted copy constructor because it enforces exclusive ownership. Copying would mean two pointers own the same resource, violating the unique ownership guarantee.

**Correct:**

```
unique_ptr<int> p1 = make_unique<int>(42);
unique_ptr<int> p2 = move(p1);  // Transfer ownership
cout << (p1 == nullptr) << endl;  // 1 (p1 is now null)
```

Use `std::move` to transfer ownership. After the move, the source pointer becomes `nullptr`. If you need shared ownership, use `shared_ptr` instead.

### Using a Moved-From Object

**Wrong:**

```
unique_ptr<int> p1 = make_unique<int>(42);
unique_ptr<int> p2 = move(p1);
cout << *p1 << endl;  // Undefined behavior! p1 is null!
```

After std::move, the source object is in a valid-but-unspecified state. For unique_ptr, it becomes nullptr. Dereferencing it is undefined behavior.

**Correct:**

```
unique_ptr<int> p1 = make_unique<int>(42);
unique_ptr<int> p2 = move(p1);
if (p1)
    cout << *p1 << endl;
else
    cout << "p1 is null" << endl;
```

Always check a smart pointer for null before dereferencing it, especially after a move. The `if (ptr)` syntax works because smart pointers have an explicit `operator bool()`.

### Circular References with shared_ptr (Memory Leak)

**Wrong:**

```
struct Node {
    shared_ptr<Node> next;
    ~Node() { cout << "Node destroyed" << endl; }
};

auto a = make_shared<Node>();
auto b = make_shared<Node>();
a->next = b;
b->next = a;  // Circular reference!
// Neither a nor b will ever be destroyed!
```

When two shared_ptrs point to each other, neither reference count can ever reach zero. Both objects leak permanently. This is the most common smart pointer bug.

**Correct:**

```
struct Node {
    weak_ptr<Node> next;  // Use weak_ptr to break the cycle
    ~Node() { cout << "Node destroyed" << endl; }
};

auto a = make_shared<Node>();
auto b = make_shared<Node>();
a->next = b;
b->next = a;  // weak_ptr does NOT increment reference count
// Both destroyed correctly when a and b go out of scope
```

Use `weak_ptr` for at least one direction of any cyclic relationship. `weak_ptr` does not increment the reference count, so it breaks the cycle and allows proper cleanup.

### Passing shared_ptr by Value When Not Needed

**Wrong:**

```
void process(shared_ptr<Widget> w) {  // Copies shared_ptr, increments ref count
    w->doWork();
}

auto w = make_shared<Widget>();
process(w);  // Unnecessary ref count increment/decrement
```

Passing shared_ptr by value copies it, incrementing the reference count (atomic operation, not free). If the function only needs to use the object and does not store the pointer, this is wasteful.

**Correct:**

```
void process(const Widget& w) {  // No smart pointer overhead
    w.doWork();
}

// Or if the function needs the pointer but does not share ownership:
void process(Widget* w) {
    w->doWork();
}

auto w = make_shared<Widget>();
process(*w);    // pass reference
process(w.get());  // pass raw pointer
```

Pass smart pointers by value only when the function needs to share or transfer ownership. For read-only access, pass by `const&` reference or raw pointer. The C++ Core Guidelines say: "Use a raw pointer or reference to denote a non-owning observer."

## Summary

- Smart pointers (unique_ptr, shared_ptr, weak_ptr) automatically manage memory using RAII. When the smart pointer goes out of scope, the managed object is deleted. No manual delete required.
- unique_ptr enforces exclusive ownership. It cannot be copied, only moved with std::move. After a move, the source becomes nullptr. Use make_unique to create instances. This is the default choice for dynamic allocation.
- shared_ptr uses reference counting for shared ownership. Each copy increments the count, each destruction decrements it. The object is deleted when the count reaches zero. Use make_shared for a single allocation.
- weak_ptr is a non-owning observer of a shared_ptr. It does not increment the reference count. Use lock() to obtain a temporary shared_ptr for safe access. Its primary purpose is to break circular references.
- RAII (Resource Acquisition Is Initialization) ties resource lifetime to object lifetime. Resources are acquired in constructors and released in destructors. Smart pointers are the most common RAII wrapper.
- Move semantics (std::move, rvalue references &&) enable efficient ownership transfer without copying. A move constructor steals the source's resources and leaves it in a valid-but-empty state. Moving is O(1) while copying may be O(n).
- The Rule of Five: if you define any of destructor, copy constructor, copy assignment, move constructor, or move assignment, define all five. The Rule of Zero: prefer smart pointers so you need none of these.
- Custom deleters let smart pointers manage non-memory resources (files, sockets, handles). For unique_ptr, the deleter type is a template parameter. For shared_ptr, pass a callable as the second constructor argument.
- Never use raw owning pointers in modern C++. Use unique_ptr by default, shared_ptr when multiple owners are needed, and raw pointers/references only for non-owning observers.
- Always prefer make_unique and make_shared over raw new. They are exception-safe, more efficient (single allocation for shared_ptr), and clearly express intent.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/smart-pointers-and-memory/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/smart-pointers-and-memory/practice/*
