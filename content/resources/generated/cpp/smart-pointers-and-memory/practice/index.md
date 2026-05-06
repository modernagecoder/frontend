---
title: "Practice: Smart Pointers and Modern Memory Management"
description: "53 practice problems for Smart Pointers and Modern Memory Management in C++"
slug: smart-pointers-and-memory-practice
canonical: https://learn.modernagecoders.com/resources/cpp/smart-pointers-and-memory/practice
category: "C++"
---
# Practice: Smart Pointers and Modern Memory Management

**Total questions:** 53

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```cpp
auto p = make_unique(42);
cout << *p;
```

*Hint:* make_unique creates a unique_ptr. Dereference with * to get the value.

**Answer:** `42`

`make_unique(42)` creates a unique_ptr pointing to an int with value 42. `*p` dereferences it.

### Q2. [Easy] What is the output?

```cpp
auto p = make_shared(99);
cout << p.use_count();
```

*Hint:* A freshly created shared_ptr has a use_count of 1.

**Answer:** `1`

When a shared_ptr is first created, only one pointer owns the object, so use_count is 1.

### Q3. [Easy] What is the output?

```cpp
auto p1 = make_shared(10);
auto p2 = p1;
auto p3 = p1;
cout << p1.use_count();
```

*Hint:* Each copy of shared_ptr increments the reference count.

**Answer:** `3`

p1, p2, and p3 all share ownership of the same int. The reference count is 3.

### Q4. [Easy] What is the output?

```cpp
unique_ptr p1 = make_unique(5);
unique_ptr p2 = move(p1);
cout << (p1 == nullptr) << " " << *p2;
```

*Hint:* After move, the source unique_ptr becomes nullptr.

**Answer:** `1 5`

After `move(p1)`, p1 is null (nullptr comparison is true = 1). p2 owns the int with value 5.

### Q5. [Easy] What is the output?

```cpp
auto p = make_unique(7);
cout << (p ? "valid" : "null");
p.reset();
cout << " " << (p ? "valid" : "null");
```

*Hint:* reset() releases the managed object and sets the pointer to nullptr.

**Answer:** `valid null`

Initially p owns an int, so it is valid. `reset()` deletes the managed object and sets p to nullptr.

### Q6. [Medium] What is the output?

```cpp
auto p1 = make_shared(50);
{
    auto p2 = p1;
    cout << p1.use_count() << " ";
}
cout << p1.use_count() << " " << *p1;
```

*Hint:* When p2 goes out of scope, use_count decreases.

**Answer:** `2 1 50`

Inside the block, p1 and p2 share (count=2). After p2 is destroyed, count drops to 1. The int still exists because p1 owns it.

### Q7. [Medium] What is the output?

```cpp
auto sp = make_shared(100);
weak_ptr wp = sp;
cout << wp.use_count() << " " << wp.expired() << " ";
sp.reset();
cout << wp.use_count() << " " << wp.expired();
```

*Hint:* weak_ptr does not affect use_count. expired() returns true when the object no longer exists.

**Answer:** `1 0 0 1`

Initially: use_count=1 (from sp, not wp), expired=0 (object exists). After sp.reset(): use_count=0, expired=1 (object deleted, no shared_ptr owns it).

### Q8. [Medium] What is the output?

```cpp
auto sp = make_shared(77);
weak_ptr wp = sp;
auto locked = wp.lock();
cout << (locked ? to_string(*locked) : "null") << " ";
cout << sp.use_count();
```

*Hint:* lock() returns a shared_ptr, incrementing use_count.

**Answer:** `77 2`

`lock()` creates a new shared_ptr from the weak_ptr, incrementing use_count to 2 (sp + locked). The value is 77.

### Q9. [Medium] What is the output?

```cpp
struct X {
    int val;
    X(int v) : val(v) { cout << "X(" << val << ") ";
    }
    ~X() { cout << "~X(" << val << ") "; }
};

{
    auto p = make_unique(1);
    auto q = make_unique(2);
}
cout << "done";
```

*Hint:* Destructors run in reverse order of construction when leaving scope.

**Answer:** `X(1) X(2) ~X(2) ~X(1) done`

Objects are constructed in order (1, 2). When the block ends, local variables are destroyed in reverse order: q (2) then p (1).

### Q10. [Hard] What is the output?

```cpp
auto p = make_unique(10);
int* raw = p.get();
cout << *raw << " ";
p.reset();
cout << (p == nullptr);
```

*Hint:* get() returns the raw pointer without releasing ownership. After reset(), p is null.

**Answer:** `10 1`

`get()` returns the raw pointer (10). `reset()` deletes the int and makes p null. Note: using raw after reset would be dangling pointer access (undefined behavior), but we only print p==nullptr here.

### Q11. [Hard] What is the output?

```cpp
auto p = make_shared(55);
auto q = move(p);
cout << (p == nullptr) << " " << q.use_count() << " " << *q;
```

*Hint:* Moving a shared_ptr transfers ownership without changing use_count.

**Answer:** `1 1 55`

Moving a shared_ptr transfers ownership: p becomes null, q takes over. Since it is a move (not copy), use_count remains 1.

### Q12. [Hard] What is the output?

```cpp
class A {
public:
    A() { cout << "A "; }
    ~A() { cout << "~A "; }
};

vector<unique_ptr> v;
v.push_back(make_unique());
v.push_back(make_unique());
cout << "clear ";
v.clear();
```

*Hint:* Clearing a vector of unique_ptrs destroys all managed objects.

**Answer:** `A A clear ~A ~A`

Two A objects are created. When `clear()` is called, the vector destroys its unique_ptrs, which in turn destroy the A objects.

### Q13. [Easy] What is the output?

```cpp
auto p = make_shared(25);
auto q = p;
auto r = p;
r.reset();
cout << p.use_count() << " " << *p;
```

*Hint:* reset() releases one owner. Others remain.

**Answer:** `2 25`

Initially p, q, r share (count=3). After r.reset(), r releases ownership. p and q remain (count=2). Value is still 25.

### Q14. [Medium] What is the output?

```cpp
auto p = make_unique(100);
auto q = make_unique(200);
p.swap(q);
cout << *p << " " << *q;
```

*Hint:* swap exchanges the managed pointers between two unique_ptrs.

**Answer:** `200 100`

swap exchanges the internal pointers. p now manages 200, q manages 100.

### Q15. [Medium] What is the output?

```cpp
weak_ptr wp;
{
    auto sp = make_shared(42);
    wp = sp;
    cout << wp.expired() << " ";
}
cout << wp.expired();
```

*Hint:* When the last shared_ptr is destroyed, the weak_ptr expires.

**Answer:** `0 1`

Inside the block, sp exists, so wp is not expired (0). After the block, sp is destroyed and use_count drops to 0, making wp expired (1).

### Q16. [Hard] What is the output?

```cpp
struct Obj {
    int val;
    Obj(int v) : val(v) { cout << "C" << v << " "; }
    ~Obj() { cout << "D" << val << " "; }
};
auto p = make_unique(1);
p = make_unique(2);
cout << "end ";
```

*Hint:* Assigning a new unique_ptr destroys the old managed object first.

**Answer:** `C1 C2 D1 end D2`

Obj(1) constructed. When p is reassigned to Obj(2), Obj(2) is constructed first, then Obj(1) is destroyed. At scope end, Obj(2) is destroyed.

### Q17. [Easy] What is the output?

```cpp
auto p = make_shared(10);
auto q = make_shared(20);
cout << (p == q) << " ";
q = p;
cout << (p == q) << " " << *q;
```

*Hint:* Smart pointer comparison checks if they point to the same object.

**Answer:** `0 1 10`

Initially p and q point to different objects (not equal, 0). After q = p, both point to the same int(10) (equal, 1). *q = 10.

### Q18. [Hard] What is the output?

```cpp
auto p = make_unique(50);
int* raw = p.release();
cout << (p == nullptr) << " " << *raw;
delete raw;  // Must manually delete after release!
```

*Hint:* release() transfers ownership to the raw pointer and sets unique_ptr to null.

**Answer:** `1 50`

release() returns the raw pointer and sets the unique_ptr to nullptr. The caller is now responsible for deleting the raw pointer.

## Mixed Questions

### Q1. [Easy] What is the output?

```cpp
auto p = make_unique("Hello");
cout << p->size() << " " << (*p)[0];
```

*Hint:* unique_ptr uses -> to access the managed object's members.

**Answer:** `5 H`

`p->size()` calls string::size() returning 5. `(*p)[0]` dereferences and accesses the first character 'H'.

### Q2. [Easy] What is the output?

```cpp
shared_ptr p1 = make_shared(10);
shared_ptr p2 = p1;
*p2 = 20;
cout << *p1;
```

*Hint:* p1 and p2 point to the same int.

**Answer:** `20`

p1 and p2 share the same int object. Modifying through p2 also changes what p1 sees. *p1 is now 20.

### Q3. [Medium] What is the output?

```cpp
auto p1 = make_unique(100);
auto p2 = make_unique(200);
swap(p1, p2);
cout << *p1 << " " << *p2;
```

*Hint:* swap exchanges the managed pointers.

**Answer:** `200 100`

`swap` exchanges the internal pointers of p1 and p2. p1 now points to 200, p2 to 100.

### Q4. [Medium] What is the output?

```cpp
unique_ptr<int[]> arr = make_unique<int[]>(4);
for (int i = 0; i < 4; i++) arr[i] = (i + 1) * 10;
cout << arr[0] << " " << arr[3];
```

*Hint:* unique_ptr<int[]> supports array subscript operator [].

**Answer:** `10 40`

`make_unique<int[]>(4)` creates an array of 4 ints. arr[0]=10, arr[3]=40.

### Q5. [Medium] What is the output?

```cpp
auto sp = make_shared(30);
weak_ptr wp = sp;
sp = make_shared(60);
auto locked = wp.lock();
cout << (locked ? "alive" : "dead");
```

*Hint:* After sp is reassigned, what happens to the original int(30)?

**Answer:** `dead`

When sp is reassigned to a new shared_ptr(60), the original int(30) is destroyed (use_count drops to 0). The weak_ptr's target no longer exists, so lock() returns nullptr.

### Q6. [Hard] What is the output?

```cpp
struct Node {
    int val;
    unique_ptr next;
    Node(int v) : val(v), next(nullptr) {}
};

auto head = make_unique(1);
head->next = make_unique(2);
head->next->next = make_unique(3);

auto curr = head.get();
while (curr) {
    cout << curr->val << " ";
    curr = curr->next.get();
}
```

*Hint:* get() returns a raw non-owning pointer for traversal.

**Answer:** `1 2 3`

A linked list using unique_ptr for ownership. Traversal uses raw pointers via get(). When head goes out of scope, all nodes are automatically destroyed in chain.

### Q7. [Hard] What is the output?

```cpp
class B {
public:
    B() { cout << "B "; }
    B(const B&) { cout << "Bc "; }
    B(B&&) noexcept { cout << "Bm "; }
    ~B() { cout << "~B "; }
};

B b1;
B b2 = b1;
B b3 = move(b1);
```

*Hint:* Copy constructor is called for b2, move constructor for b3.

**Answer:** `B Bc Bm ~B ~B ~B`

b1: default constructor (B). b2 = b1: copy constructor (Bc). b3 = move(b1): move constructor (Bm). All three destructors fire at end of scope.

### Q8. [Medium] What is RAII and why is it fundamental to modern C++?

*Hint:* Think about tying resource lifetime to object lifetime.

**Answer:** **RAII (Resource Acquisition Is Initialization)** means that resources (memory, files, locks, sockets) are acquired in a constructor and released in a destructor. Since C++ guarantees destructor execution when objects go out of scope (including during stack unwinding from exceptions), RAII ensures resources are always properly cleaned up without explicit cleanup code. Smart pointers are the most common example of RAII.

RAII eliminates resource leaks by design. Instead of manual cleanup (close file, delete pointer, release lock), the destructor handles it automatically. This is why modern C++ rarely needs try-catch for cleanup -- RAII handles it all.

### Q9. [Hard] When should you use unique_ptr vs shared_ptr vs weak_ptr?

*Hint:* Think about ownership semantics.

**Answer:** Use `unique_ptr` when there is a single clear owner of the resource (the most common case). Use `shared_ptr` when multiple parts of the code need to share ownership and the resource should only be deleted when all owners are done. Use `weak_ptr` to observe a shared resource without preventing its deletion, or to break circular references between shared_ptrs.

The guideline is: start with unique_ptr (cheapest, simplest). Only upgrade to shared_ptr when you genuinely need shared ownership. Use weak_ptr specifically for breaking cycles or for caches/observers that should not keep objects alive.

### Q10. [Hard] What is the difference between the Rule of Three, Rule of Five, and Rule of Zero?

*Hint:* Think about which special member functions you need to define.

**Answer:** **Rule of Three** (C++03): if you define any of destructor, copy constructor, or copy assignment, define all three. **Rule of Five** (C++11): adds move constructor and move assignment to the three. **Rule of Zero**: prefer using types that manage their own resources (smart pointers, std::string, std::vector) so you do not need to define any of the five. Modern C++ strongly favors the Rule of Zero.

If your class manages raw resources (raw new/delete, raw file handles), you need the Rule of Five. But if you use smart pointers and RAII wrappers, the compiler-generated defaults do the right thing, and you need zero special member functions.

### Q11. [Medium] What is the output?

```cpp
auto p = make_shared<vector>(vector{10, 20, 30});
cout << p->size() << " " << (*p)[1];
```

*Hint:* shared_ptr to a vector. Use -> for member access.

**Answer:** `3 20`

p points to a vector {10, 20, 30}. p->size() = 3. (*p)[1] = 20.

### Q12. [Hard] What is the output?

```cpp
auto sp = make_shared(10);
weak_ptr wp = sp;
auto sp2 = wp.lock();
cout << sp.use_count() << " ";
sp.reset();
sp2.reset();
cout << wp.expired();
```

*Hint:* lock() creates a new shared_ptr. Both sp and sp2 must be reset for the object to be deleted.

**Answer:** `2 1`

After lock(): sp and sp2 both own the int (count=2). After sp.reset(): count drops to 1 (sp2 still owns). After sp2.reset(): count drops to 0, object deleted. wp.expired() = 1.

### Q13. [Easy] What is the output?

```cpp
unique_ptr p;
cout << (p == nullptr) << " ";
p = make_unique(99);
cout << (p == nullptr) << " " << *p;
```

*Hint:* A default-constructed unique_ptr is nullptr.

**Answer:** `1 0 99`

Default-constructed unique_ptr is null (true=1). After assignment, it owns 99 (not null, 0). *p = 99.

### Q14. [Medium] What is the output?

```cpp
struct Widget {
    int id;
    Widget(int i) : id(i) {}
};
auto w = make_unique(42);
cout << w->id << " ";
w->id = 100;
cout << w->id;
```

*Hint:* unique_ptr provides -> for accessing members of the managed object.

**Answer:** `42 100`

w->id accesses the Widget's id. Initially 42, then modified to 100 through the pointer.

## Multiple Choice Questions

### Q1. [Easy] Which header provides unique_ptr, shared_ptr, and weak_ptr?

**Answer:** B

**B is correct.** All smart pointers are defined in the `` header.

### Q2. [Easy] What does RAII stand for?

**Answer:** B

**B is correct.** RAII ties resource lifetime to object lifetime. Resources are acquired in constructors and released in destructors.

### Q3. [Easy] Can you copy a unique_ptr?

**Answer:** B

**B is correct.** unique_ptr has a deleted copy constructor. It can only be moved, which transfers exclusive ownership to the destination.

### Q4. [Easy] What does use_count() return for a shared_ptr?

**Answer:** B

**B is correct.** `use_count()` returns the number of shared_ptr objects that share ownership of the managed resource.

### Q5. [Easy] What is the preferred way to create a unique_ptr?

**Answer:** B

**B is correct.** `make_unique` is exception-safe and clearly expresses intent. Never use raw `new` with smart pointers.

### Q6. [Medium] What does weak_ptr::lock() return?

**Answer:** C

**C is correct.** `lock()` returns a `shared_ptr` that shares ownership with the existing shared_ptrs. If the managed object has been deleted, it returns an empty shared_ptr.

### Q7. [Medium] What is the primary purpose of weak_ptr?

**Answer:** C

**C is correct.** `weak_ptr` does not increment the reference count, breaking cycles that would otherwise prevent shared_ptrs from ever reaching use_count 0.

### Q8. [Medium] What happens to a unique_ptr after std::move?

**Answer:** B

**B is correct.** After `std::move`, the source unique_ptr becomes `nullptr`. Ownership is transferred to the destination.

### Q9. [Medium] What is the advantage of make_shared over using new with shared_ptr?

**Answer:** B

**B is correct.** `make_shared` allocates the control block (reference counts) and the object in a single heap allocation, improving cache locality and performance.

### Q10. [Medium] What does p.get() return for a smart pointer?

**Answer:** B

**B is correct.** `get()` returns the raw pointer managed by the smart pointer. The smart pointer retains ownership. Use this for interoperability with APIs that require raw pointers.

### Q11. [Hard] What is an rvalue reference (&&) used for?

**Answer:** C

**C is correct.** Rvalue references (`&&`) bind to temporaries and moved-from objects, enabling move constructors and move assignment operators to steal resources instead of copying.

### Q12. [Hard] What does the Rule of Zero state?

**Answer:** C

**C is correct.** The Rule of Zero says: if your class uses smart pointers and other RAII types for all resources, the compiler-generated defaults are correct and you need zero special member functions.

### Q13. [Hard] What happens if you create two shared_ptrs from the same raw pointer?

**Answer:** B

**B is correct.** Each shared_ptr creates its own control block, both thinking they are the sole owner. When both go out of scope, they both try to delete the same pointer, causing undefined behavior (double free).

### Q14. [Hard] What does std::move actually do?

**Answer:** C

**C is correct.** `std::move` is just a cast to `T&&`. It does not move anything by itself. The actual moving happens in the move constructor or move assignment operator that gets selected because of the rvalue reference.

### Q15. [Medium] What does p.reset() do on a unique_ptr?

**Answer:** B

**B is correct.** `reset()` deletes the currently managed object and sets the smart pointer to `nullptr`. You can also pass a new raw pointer to `reset(new_ptr)` to manage a different object.

### Q16. [Hard] Why should you mark move constructors and move assignment operators as noexcept?

**Answer:** B

**B is correct.** Containers like `vector` use move during reallocation only if the move constructor is `noexcept`. If it might throw, the container falls back to copying to maintain the strong exception guarantee.

## Coding Challenges

### Challenge 1. Build a Unique Pointer Linked List

**Difficulty:** Easy

Create a singly linked list using unique_ptr where each node owns the next node. Insert 5 values and traverse the list printing each value.

**Constraints:**

- Use unique_ptr for the next pointer. No raw new/delete.

**Sample input:**

```
Values: 10, 20, 30, 40, 50
```

**Sample output:**

```
10 -> 20 -> 30 -> 40 -> 50 -> null
```

**Solution:**

```cpp
#include <iostream>
#include <memory>
using namespace std;

struct Node {
    int val;
    unique_ptr<Node> next;
    Node(int v) : val(v), next(nullptr) {}
};

int main() {
    auto head = make_unique<Node>(10);
    auto curr = head.get();
    for (int v : {20, 30, 40, 50}) {
        curr->next = make_unique<Node>(v);
        curr = curr->next.get();
    }
    curr = head.get();
    while (curr) {
        cout << curr->val << " -> ";
        curr = curr->next.get();
    }
    cout << "null" << endl;
    return 0;
}
```

### Challenge 2. Shared Resource Counter

**Difficulty:** Medium

Create a shared_ptr to an integer. Pass it to 3 different functions that each store a copy. Print use_count after each step and verify it returns to 1 after all functions complete.

**Constraints:**

- Use shared_ptr. Demonstrate reference counting.

**Sample input:**

```
Initial value: 42
```

**Sample output:**

```
Created: count=1
After share1: count=2
After share2: count=3
After share3: count=4
All released: count=1
Value: 42
```

**Solution:**

```cpp
#include <iostream>
#include <memory>
#include <vector>
using namespace std;

int main() {
    auto p = make_shared<int>(42);
    cout << "Created: count=" << p.use_count() << endl;

    vector<shared_ptr<int>> holders;
    for (int i = 1; i <= 3; i++) {
        holders.push_back(p);
        cout << "After share" << i << ": count=" << p.use_count() << endl;
    }
    holders.clear();
    cout << "All released: count=" << p.use_count() << endl;
    cout << "Value: " << *p << endl;
    return 0;
}
```

### Challenge 3. Factory Function Returning unique_ptr

**Difficulty:** Medium

Create a factory function that returns different shapes (Circle, Rectangle) as unique_ptr. Use polymorphism to call area() on each shape.

**Constraints:**

- Use unique_ptr for ownership. Virtual functions for polymorphism.

**Sample input:**

```
Circle(5.0), Rectangle(4.0, 6.0)
```

**Sample output:**

```
Circle area: 78.5398
Rectangle area: 24
```

**Solution:**

```cpp
#include <iostream>
#include <memory>
#include <cmath>
using namespace std;

class Shape {
public:
    virtual double area() const = 0;
    virtual ~Shape() = default;
};

class Circle : public Shape {
    double r;
public:
    Circle(double radius) : r(radius) {}
    double area() const override { return M_PI * r * r; }
};

class Rectangle : public Shape {
    double w, h;
public:
    Rectangle(double width, double height) : w(width), h(height) {}
    double area() const override { return w * h; }
};

unique_ptr<Shape> createShape(const string& type, double a, double b = 0) {
    if (type == "circle") return make_unique<Circle>(a);
    if (type == "rectangle") return make_unique<Rectangle>(a, b);
    return nullptr;
}

int main() {
    auto c = createShape("circle", 5.0);
    auto r = createShape("rectangle", 4.0, 6.0);
    cout << "Circle area: " << c->area() << endl;
    cout << "Rectangle area: " << r->area() << endl;
    return 0;
}
```

### Challenge 4. Break a Circular Reference with weak_ptr

**Difficulty:** Hard

Create a Person class where each person can have a best friend. First demonstrate the memory leak with shared_ptr (circular reference), then fix it using weak_ptr.

**Constraints:**

- Use weak_ptr for the bestFriend pointer. Demonstrate lock() for safe access.

**Sample input:**

```
Arjun's best friend is Priya, Priya's best friend is Arjun
```

**Sample output:**

```
Arjun created
Priya created
Arjun's friend: Priya
Priya destroyed
Arjun destroyed
```

**Solution:**

```cpp
#include <iostream>
#include <memory>
using namespace std;

class Person {
public:
    string name;
    weak_ptr<Person> bestFriend;  // weak_ptr breaks the cycle
    Person(string n) : name(n) { cout << name << " created" << endl; }
    ~Person() { cout << name << " destroyed" << endl; }
    void showFriend() {
        if (auto f = bestFriend.lock())
            cout << name << "'s friend: " << f->name << endl;
        else
            cout << name << " has no friend" << endl;
    }
};

int main() {
    auto arjun = make_shared<Person>("Arjun");
    auto priya = make_shared<Person>("Priya");
    arjun->bestFriend = priya;
    priya->bestFriend = arjun;
    arjun->showFriend();
    return 0;
}
```

### Challenge 5. Implement a Simple Resource Pool with shared_ptr

**Difficulty:** Hard

Create a simple connection pool that hands out shared_ptr objects. Track how many connections are active using use_count. When all shared_ptrs to a connection are released, the connection returns to the pool.

**Constraints:**

- Use shared_ptr and weak_ptr. No raw pointers.

**Sample input:**

```
Get 2 connections, release 1, check active count
```

**Sample output:**

```
Connection 1 created
Connection 2 created
Active connections: 2
Releasing connection 2
Active connections: 1
```

**Solution:**

```cpp
#include <iostream>
#include <memory>
#include <vector>
using namespace std;

class Connection {
    int id;
public:
    Connection(int i) : id(i) { cout << "Connection " << id << " created" << endl; }
    ~Connection() { cout << "Connection " << id << " destroyed" << endl; }
    int getId() const { return id; }
};

class Pool {
    vector<weak_ptr<Connection>> connections;
    int nextId = 1;
public:
    shared_ptr<Connection> getConnection() {
        auto conn = make_shared<Connection>(nextId++);
        connections.push_back(conn);
        return conn;
    }
    int activeCount() {
        int count = 0;
        for (auto& wp : connections)
            if (!wp.expired()) count++;
        return count;
    }
};

int main() {
    Pool pool;
    auto c1 = pool.getConnection();
    {
        auto c2 = pool.getConnection();
        cout << "Active connections: " << pool.activeCount() << endl;
        cout << "Releasing connection 2" << endl;
    }
    cout << "Active connections: " << pool.activeCount() << endl;
    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/smart-pointers-and-memory/*
