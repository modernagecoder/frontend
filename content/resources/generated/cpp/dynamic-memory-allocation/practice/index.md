---
title: "Practice: Dynamic Memory Allocation in C++"
description: "54 practice problems for Dynamic Memory Allocation in C++ in C++"
slug: dynamic-memory-allocation-practice
canonical: https://learn.modernagecoders.com/resources/cpp/dynamic-memory-allocation/practice
category: "C++"
---
# Practice: Dynamic Memory Allocation in C++

**Total questions:** 54

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
int* p = new int(42);
cout << *p;
delete p;
```

*Hint:* new int(42) allocates an int on the heap and initializes it to 42.

**Answer:** `42`

`new int(42)` allocates memory on the heap and stores 42. `*p` dereferences the pointer to print the value. `delete p` frees the memory.

### Q2. [Easy] What is the output?

```
int* arr = new int[3]();
cout << arr[0] << " " << arr[1] << " " << arr[2];
delete[] arr;
```

*Hint:* The parentheses () after new int[3] value-initialize all elements.

**Answer:** `0 0 0`

`new int[3]()` allocates 3 integers and value-initializes them to 0. Without the parentheses, the values would be uninitialized (garbage).

### Q3. [Easy] What is the output?

```
int* p = new int(10);
*p += 5;
cout << *p;
delete p;
```

*Hint:* *p += 5 adds 5 to the value stored at the heap location.

**Answer:** `15`

`new int(10)` allocates and stores 10. `*p += 5` adds 5 to the value, making it 15.

### Q4. [Easy] What is the output?

```
int x = 100;
int* p = &x;
int* q = new int(200);
cout << *p << " " << *q;
delete q;
```

*Hint:* p points to a stack variable; q points to a heap variable.

**Answer:** `100 200`

`p` points to stack variable `x` (100). `q` points to heap memory containing 200. Only `q` needs `delete` because only `q` was allocated with `new`.

### Q5. [Medium] What is the output?

```
int* arr = new int[5]{10, 20, 30, 40, 50};
int sum = 0;
for (int i = 0; i < 5; i++) {
    sum += arr[i];
}
cout << sum;
delete[] arr;
```

*Hint:* Sum all five elements.

**Answer:** `150`

The array is initialized with {10, 20, 30, 40, 50}. The sum is 10 + 20 + 30 + 40 + 50 = 150.

### Q6. [Medium] What is the output?

```
class Box {
public:
    int value;
    Box(int v) : value(v) {
        cout << "Box(" << v << ") ";
    }
    ~Box() {
        cout << "~Box(" << value << ") ";
    }
};

Box* b = new Box(42);
cout << b->value << " ";
delete b;
```

*Hint:* new calls the constructor, delete calls the destructor.

**Answer:** `Box(42) 42 ~Box(42) `

`new Box(42)` calls the constructor which prints "Box(42)". `b->value` prints 42. `delete b` calls the destructor which prints "~Box(42)".

### Q7. [Medium] What is the output?

```
int** matrix = new int*[2];
matrix[0] = new int[2]{1, 2};
matrix[1] = new int[2]{3, 4};
cout << matrix[0][0] + matrix[1][1];

delete[] matrix[0];
delete[] matrix[1];
delete[] matrix;
```

*Hint:* matrix[0][0] is the top-left, matrix[1][1] is the bottom-right.

**Answer:** `5`

`matrix[0][0]` is 1, `matrix[1][1]` is 4. Their sum is 5.

### Q8. [Medium] What is the output?

```
int* p = new int(10);
int* q = p;         // q points to same memory
*q = 20;
cout << *p << endl;
delete p;
// delete q;  // Would this be correct?
```

*Hint:* Both p and q point to the same heap memory. Only one delete is needed.

**Answer:** `20`
(Deleting q would be a double-free error since p already freed the memory)

`q = p` makes both pointers point to the same heap location. `*q = 20` modifies the shared memory. `*p` reads the same location, giving 20. After `delete p`, the memory is freed. Calling `delete q` would be a double-free, which is undefined behavior.

### Q9. [Hard] What is the output?

```
class Counter {
    static int count;
public:
    Counter() { count++; cout << "+" << count << " "; }
    ~Counter() { cout << "-" << count << " "; count--; }
};
int Counter::count = 0;

Counter* arr = new Counter[3];
cout << "| ";
delete[] arr;
```

*Hint:* new[] calls the constructor for each element. delete[] calls the destructor for each element in reverse order.

**Answer:** `+1 +2 +3 | -3 -2 -1 `

`new Counter[3]` constructs 3 objects, incrementing count each time: +1, +2, +3. `delete[] arr` destructs in reverse order (last to first), decrementing count: -3, -2, -1.

### Q10. [Hard] What is the output?

```
#include 
using namespace std;

auto p1 = make_shared(10);
cout << "count: " << p1.use_count() << endl;
{
    auto p2 = p1;
    *p2 += 5;
    cout << "count: " << p1.use_count() << endl;
    cout << "value: " << *p1 << endl;
}
cout << "count: " << p1.use_count() << endl;
cout << "value: " << *p1 << endl;
```

*Hint:* shared_ptr uses reference counting. Copying increments the count; destruction decrements it.

**Answer:** `count: 1`
`count: 2`
`value: 15`
`count: 1`
`value: 15`

Initially p1 has count 1. Copying to p2 increases count to 2. `*p2 += 5` modifies the shared value to 15. When p2 goes out of scope, count drops to 1. The value 15 is still accessible through p1.

## Mixed Questions

### Q1. [Easy] What is the difference between stack memory and heap memory?

*Hint:* Think about lifetime, speed, size, and who manages the memory.

**Answer:** **Stack:** Automatic allocation/deallocation, very fast, limited size (1-8 MB), variables destroyed at scope end. **Heap:** Manual allocation (new) and deallocation (delete), slower, much larger (limited by system RAM), variables persist until explicitly freed.

Stack memory is managed by the compiler -- local variables are pushed when entering a scope and popped when leaving. Heap memory is managed by the programmer -- you must call new to allocate and delete to free. Forgetting delete causes memory leaks.

### Q2. [Easy] What is a memory leak? How does it happen?

*Hint:* Think about what happens when you lose the pointer to heap memory.

**Answer:** A memory leak occurs when dynamically allocated memory (via `new`) is never freed (via `delete`). It happens when: (1) a pointer to heap memory goes out of scope without delete, (2) a pointer is reassigned without freeing the old memory, (3) an exception is thrown before delete is reached.

Leaked memory cannot be reclaimed until the program exits. In long-running programs (servers, games), accumulated leaks can consume all available memory, causing crashes or extreme slowdowns.

### Q3. [Easy] What is the output?

```
int* p = new int;
*p = 7;
int* q = new int;
*q = 3;
cout << *p + *q;
delete p;
delete q;
```

*Hint:* Each new allocates a separate int. Add the dereferenced values.

**Answer:** `10`

`*p` is 7, `*q` is 3. `*p + *q` = 10. Both allocations are properly freed.

### Q4. [Medium] What is the output?

```
int* createArray(int size) {
    int* arr = new int[size];
    for (int i = 0; i < size; i++)
        arr[i] = i * 2;
    return arr;
}

int* data = createArray(4);
for (int i = 0; i < 4; i++)
    cout << data[i] << " ";
delete[] data;
```

*Hint:* The function allocates on the heap and returns the pointer. The caller frees it.

**Answer:** `0 2 4 6 `

The function allocates 4 ints and fills them with 0, 2, 4, 6. The pointer is returned to the caller, who uses and then deletes the array. This is a common pattern for factory functions.

### Q5. [Medium] What is RAII and why is it important in C++?

*Hint:* Think about tying resource lifetime to object lifetime.

**Answer:** **RAII (Resource Acquisition Is Initialization)** means acquiring resources in the constructor and releasing them in the destructor. When the object goes out of scope, the destructor runs automatically, ensuring cleanup even if an exception is thrown. This eliminates memory leaks, file handle leaks, and lock leaks.

RAII is the foundation of modern C++ resource management. Classes like `vector`, `string`, `unique_ptr`, `fstream`, and `lock_guard` all use RAII. The programmer never calls `delete` manually -- the destructor handles it.

### Q6. [Medium] What is the output?

```
class Tracker {
public:
    string name;
    Tracker(string n) : name(n) { cout << "C:" << name << " "; }
    ~Tracker() { cout << "D:" << name << " "; }
};

Tracker t1("stack");
cout << "| ";
Tracker* t2 = new Tracker("heap");
cout << "| ";
delete t2;
cout << "| ";
```

(Assume this is inside main, and t1 is a local variable)

*Hint:* Stack objects are destroyed at scope end; heap objects are destroyed at delete.

**Answer:** `C:stack | C:heap | D:heap | `
(D:stack would print after main returns)

`t1` is constructed on the stack. `t2` is constructed on the heap. `delete t2` immediately destroys the heap object. `t1`'s destructor runs when main returns.

### Q7. [Hard] What is the output?

```
#include 
using namespace std;

auto p1 = make_unique(100);
cout << *p1 << endl;
auto p2 = move(p1);       // transfer ownership
cout << *p2 << endl;
if (p1 == nullptr)
    cout << "p1 is null" << endl;
```

*Hint:* unique_ptr cannot be copied but can be moved. After move, the source becomes nullptr.

**Answer:** `100`
`100`
`p1 is null`

`make_unique(100)` creates a unique_ptr owning an int with value 100. `move(p1)` transfers ownership to p2. After the move, p1 is nullptr. p2 now owns the resource.

### Q8. [Hard] What is the output?

```
int** arr = new int*[3];
for (int i = 0; i < 3; i++) {
    arr[i] = new int(i * 10);
}
for (int i = 0; i < 3; i++) {
    cout << *arr[i] << " ";
}
for (int i = 0; i < 3; i++) {
    delete arr[i];
}
delete[] arr;
```

*Hint:* arr is an array of pointers, each pointing to a single int on the heap.

**Answer:** `0 10 20 `

`arr` is an array of 3 `int*`. Each `arr[i]` points to a single int: 0, 10, 20. `*arr[i]` dereferences to get the value. Each `delete arr[i]` frees the individual int, and `delete[] arr` frees the pointer array.

### Q9. [Hard] What is the difference between unique_ptr, shared_ptr, and weak_ptr?

*Hint:* Think about ownership semantics.

**Answer:** **unique_ptr:** Sole ownership. Cannot be copied, only moved. Memory freed when it goes out of scope. Use for exclusive ownership. **shared_ptr:** Shared ownership via reference counting. Memory freed when the last shared_ptr is destroyed. Use when multiple parts of code need the same resource. **weak_ptr:** Non-owning observer of a shared_ptr. Does not affect the reference count. Used to break circular references.

unique_ptr has zero overhead and is preferred for single ownership. shared_ptr has the overhead of maintaining a reference count. weak_ptr must be converted to shared_ptr (via lock()) before accessing the resource, and the conversion may fail if the resource was already freed.

## Multiple Choice Questions

### Q1. [Easy] Which operator is used to allocate memory on the heap in C++?

**Answer:** C

**C is correct.** The `new` operator allocates memory on the heap in C++. `malloc` (A) is a C function that also works in C++ but does not call constructors. `alloc` (B) and `create` (D) are not C++ operators.

### Q2. [Easy] What must you use to free memory allocated with new int[10]?

**Answer:** B

**B is correct.** `new[]` must be paired with `delete[]`. Plain `delete` (A) is for single allocations. `free` (C) is for C's malloc. `remove` (D) is not a memory management operator.

### Q3. [Easy] Where is dynamically allocated memory stored?

**Answer:** B

**B is correct.** Memory allocated with `new` resides on the heap. Local variables go on the stack (A). The code segment (C) stores compiled instructions. Registers (D) are CPU storage, not programmer-accessible.

### Q4. [Easy] What is a memory leak?

**Answer:** B

**B is correct.** A memory leak is dynamically allocated memory that the program never frees. Accessing freed memory (A) is a dangling pointer issue. Null pointer dereference (C) is a different bug. Using stack for large data (D) risks stack overflow, not a leak.

### Q5. [Medium] What does new int[5]() do?

**Answer:** B

**B is correct.** The parentheses `()` after the array size perform value-initialization, which initializes all elements to 0 for primitive types. Without the parentheses, elements would be uninitialized (A).

### Q6. [Medium] What happens if you call delete on a stack variable?

**Answer:** C

**C is correct.** Calling `delete` on memory not allocated with `new` is undefined behavior. It can corrupt the heap allocator and crash the program. The compiler does not catch this error (D is false).

### Q7. [Medium] What is the typical size of the stack in a C++ program?

**Answer:** B

**B is correct.** The default stack size is typically 1-8 MB depending on the operating system and compiler. Exceeding this limit causes a stack overflow. The heap (not the stack) can grow to use most available system memory.

### Q8. [Medium] What does RAII stand for?

**Answer:** C

**C is correct.** RAII (Resource Acquisition Is Initialization) ties resource lifetime to object lifetime. Resources are acquired in the constructor and released in the destructor, ensuring automatic cleanup.

### Q9. [Hard] What happens if new fails to allocate memory?

**Answer:** C

**C is correct.** By default, `new` throws `std::bad_alloc` if allocation fails. If you want nullptr instead, use the nothrow version: `int* p = new(nothrow) int;`.

### Q10. [Hard] Which smart pointer allows shared ownership of a resource?

**Answer:** B

**B is correct.** `shared_ptr` uses reference counting to allow multiple pointers to share ownership. `unique_ptr` (A) is exclusive ownership. `weak_ptr` (C) is a non-owning observer. `auto_ptr` (D) is deprecated since C++11.

### Q11. [Hard] What is wrong with this code?

```
unique_ptr p1 = make_unique(10);
unique_ptr p2 = p1;
```

**Answer:** B

**B is correct.** `unique_ptr` has exclusive ownership and its copy constructor is deleted. You must use `move`: `unique_ptr p2 = move(p1);`. After the move, p1 becomes nullptr.

### Q12. [Hard] In what order should a dynamic 2D array (int**) be deallocated?

**Answer:** B

**B is correct.** Each row must be freed first (`delete[] matrix[i]`), then the outer array (`delete[] matrix`). If you free the outer array first (A), you lose the pointers to the rows and cannot free them.

### Q13. [Medium] What is double-free?

**Answer:** B

**B is correct.** Double-free is calling `delete` on the same pointer twice. It is undefined behavior that can corrupt the heap allocator. Deleting a null pointer (A) is safe and does nothing.

## Coding Challenges

### Challenge 1. Dynamic Array with User Input

**Difficulty:** Easy

Write a program that reads n from the user, dynamically allocates an array of n integers, reads n values from the user, prints them in reverse order, and properly frees the memory.

**Constraints:**

- Use new[] to allocate and delete[] to free. Do not use vector.

**Sample input:**

```
4
10 20 30 40
```

**Sample output:**

```
Reverse: 40 30 20 10
```

**Solution:**

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int* arr = new int[n];
    for (int i = 0; i < n; i++) cin >> arr[i];
    cout << "Reverse: ";
    for (int i = n - 1; i >= 0; i--) cout << arr[i] << " ";
    cout << endl;
    delete[] arr;
    return 0;
}
```

### Challenge 2. Dynamic String Array

**Difficulty:** Easy

Dynamically allocate an array of n strings, read names from the user, and print them with their index. Free the memory properly.

**Constraints:**

- Use new string[n] and delete[]. Use getline or cin for input.

**Sample input:**

```
3
Arjun Priya Kavitha
```

**Sample output:**

```
0: Arjun
1: Priya
2: Kavitha
```

**Solution:**

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    int n;
    cin >> n;
    string* names = new string[n];
    for (int i = 0; i < n; i++) cin >> names[i];
    for (int i = 0; i < n; i++) cout << i << ": " << names[i] << endl;
    delete[] names;
    return 0;
}
```

### Challenge 3. Resizable Array (Manual)

**Difficulty:** Medium

Write a class ResizableArray that starts with capacity 4. It has push(int val) which adds an element, doubling capacity if full. It has print() which prints all elements. Use new/delete internally.

**Constraints:**

- Implement manual resizing using new/delete. Double the capacity when full.

**Sample input:**

```
(Push 1, 2, 3, 4, 5, 6)
```

**Sample output:**

```
Elements: 1 2 3 4 5 6
Capacity: 8
```

**Solution:**

```cpp
#include <iostream>
using namespace std;

class ResizableArray {
    int* data;
    int size;
    int capacity;

    void resize() {
        capacity *= 2;
        int* newData = new int[capacity];
        for (int i = 0; i < size; i++) newData[i] = data[i];
        delete[] data;
        data = newData;
    }

public:
    ResizableArray() : size(0), capacity(4) {
        data = new int[capacity];
    }
    ~ResizableArray() { delete[] data; }

    void push(int val) {
        if (size == capacity) resize();
        data[size++] = val;
    }

    void print() {
        cout << "Elements: ";
        for (int i = 0; i < size; i++) cout << data[i] << " ";
        cout << endl;
        cout << "Capacity: " << capacity << endl;
    }
};

int main() {
    ResizableArray arr;
    for (int i = 1; i <= 6; i++) arr.push(i);
    arr.print();
    return 0;
}
```

### Challenge 4. Dynamic Matrix Addition

**Difficulty:** Medium

Write a program that dynamically allocates two m x n matrices, fills them with user input, computes their sum in a third dynamic matrix, prints the result, and frees all memory.

**Constraints:**

- Use int** for all matrices. Free all memory in reverse order.

**Sample input:**

```
2 2
1 2
3 4
5 6
7 8
```

**Sample output:**

```
Sum:
6 8
10 12
```

**Solution:**

```cpp
#include <iostream>
using namespace std;

int** allocMatrix(int r, int c) {
    int** m = new int*[r];
    for (int i = 0; i < r; i++) m[i] = new int[c];
    return m;
}

void freeMatrix(int** m, int r) {
    for (int i = 0; i < r; i++) delete[] m[i];
    delete[] m;
}

int main() {
    int r, c;
    cin >> r >> c;
    int** a = allocMatrix(r, c);
    int** b = allocMatrix(r, c);
    int** sum = allocMatrix(r, c);

    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> a[i][j];
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> b[i][j];
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) sum[i][j] = a[i][j] + b[i][j];

    cout << "Sum:" << endl;
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) cout << sum[i][j] << " ";
        cout << endl;
    }

    freeMatrix(a, r);
    freeMatrix(b, r);
    freeMatrix(sum, r);
    return 0;
}
```

### Challenge 5. Student Database with Dynamic Objects

**Difficulty:** Hard

Create a Student class with name and marks. Dynamically allocate an array of n Student objects on the heap, fill with user data, find the topper, and print all students. Free memory properly.

**Constraints:**

- Use new Student[n] and delete[]. Implement a display() method in the class.

**Sample input:**

```
3
Rahul 85
Priya 92
Arun 78
```

**Sample output:**

```
All Students:
1. Rahul - 85
2. Priya - 92
3. Arun - 78
Topper: Priya (92)
```

**Solution:**

```cpp
#include <iostream>
#include <string>
using namespace std;

class Student {
public:
    string name;
    int marks;
    Student() : name(""), marks(0) {}
    Student(string n, int m) : name(n), marks(m) {}
    void display(int idx) {
        cout << idx << ". " << name << " - " << marks << endl;
    }
};

int main() {
    int n;
    cin >> n;
    Student* students = new Student[n];
    for (int i = 0; i < n; i++) {
        string name; int marks;
        cin >> name >> marks;
        students[i] = Student(name, marks);
    }

    cout << "All Students:" << endl;
    for (int i = 0; i < n; i++) students[i].display(i + 1);

    int topIdx = 0;
    for (int i = 1; i < n; i++)
        if (students[i].marks > students[topIdx].marks) topIdx = i;
    cout << "Topper: " << students[topIdx].name << " (" << students[topIdx].marks << ")" << endl;

    delete[] students;
    return 0;
}
```

### Challenge 6. RAII Wrapper for Dynamic Array

**Difficulty:** Hard

Implement a SafeArray class that wraps a dynamic int array with RAII. The class should support: constructor(int size), destructor, operator[] for access, size() method, and fill(int value). Demonstrate that memory is freed automatically without explicit delete.

**Constraints:**

- The destructor must free the memory. No manual delete should be needed outside the class.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Array created with size 5
Filled: 42 42 42 42 42
Modified: 42 42 99 42 42
Array destroyed (5 elements freed)
```

**Solution:**

```cpp
#include <iostream>
using namespace std;

class SafeArray {
    int* data;
    int len;
public:
    SafeArray(int n) : len(n), data(new int[n]()) {
        cout << "Array created with size " << n << endl;
    }
    ~SafeArray() {
        delete[] data;
        cout << "Array destroyed (" << len << " elements freed)" << endl;
    }
    int& operator[](int i) { return data[i]; }
    int size() const { return len; }
    void fill(int val) {
        for (int i = 0; i < len; i++) data[i] = val;
    }
    void print() {
        for (int i = 0; i < len; i++) cout << data[i] << " ";
        cout << endl;
    }
};

int main() {
    SafeArray arr(5);
    arr.fill(42);
    cout << "Filled: ";
    arr.print();
    arr[2] = 99;
    cout << "Modified: ";
    arr.print();
    // No delete needed! Destructor handles cleanup
    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/dynamic-memory-allocation/*
