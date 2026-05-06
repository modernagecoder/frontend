---
title: "Dynamic Memory Allocation in C++ - new, delete, Stack vs Heap, Memory Leaks, Smart Pointers | Modern Age Coders"
description: "Learn C++ dynamic memory allocation including new and delete operators, stack vs heap memory, memory leaks, dangling pointers after delete, dynamic arrays, dynamic 2D arrays, RAII principle, and smart pointers introduction. Includes 54+ practice questions with output prediction and coding challenges."
slug: dynamic-memory-allocation
canonical: https://learn.modernagecoders.com/resources/cpp/dynamic-memory-allocation/
category: "C++"
keywords: ["c++ dynamic memory allocation", "new delete c++", "stack vs heap c++", "memory leak c++", "c++ smart pointers", "unique_ptr c++", "shared_ptr c++", "RAII c++", "dynamic array c++", "c++ memory management interview questions"]
---
# Dynamic Memory Allocation in C++

**Difficulty:** Intermediate  
**Reading time:** 34 min  
**Chapter:** 12  
**Practice questions:** 54

## What Is Dynamic Memory Allocation?

**Dynamic memory allocation** is the process of requesting memory from the operating system at runtime, as opposed to compile time. In C++, dynamic allocation is done using the `new` operator (to allocate) and the `delete` operator (to free). The allocated memory resides on the **heap**, a region of memory separate from the stack where local variables live.

When you declare a local variable like `int x = 10;`, the compiler allocates space for it on the stack at compile time. But what if you do not know how many elements you need until the user provides input? That is where dynamic allocation comes in -- you can allocate exactly the right amount of memory at runtime.

### The new Operator

The `new` operator allocates memory on the heap and returns a pointer to it:

```
int* p = new int;          // allocate a single int on the heap
*p = 42;                   // assign a value

int* q = new int(100);     // allocate and initialize to 100

int* arr = new int[10];    // allocate an array of 10 ints
```

### The delete Operator

The `delete` operator frees memory that was allocated with `new`:

```
delete p;       // free a single variable
delete[] arr;   // free an array (note the [])
```

Every `new` must have a matching `delete`. Every `new[]` must have a matching `delete[]`. Mismatching them is undefined behavior.

## Why Is Dynamic Memory Allocation Important?

### 1. Runtime-Sized Data Structures

Stack arrays require a compile-time constant size: `int arr[100];` always allocates 100 elements even if you need 5. With `new`, you can allocate exactly the number of elements needed: `int* arr = new int[n];` where `n` is determined at runtime.

### 2. Data Structures That Grow

Linked lists, trees, and graphs require creating nodes dynamically as data is inserted. Each node is allocated with `new` and connected via pointers. Without dynamic allocation, these data structures are impossible to implement.

### 3. Object Lifetime Control

Stack variables are destroyed when the function returns. Heap variables persist until explicitly deleted. This lets you create objects in one function and use them in another without copying.

### 4. Large Allocations

The stack has a limited size (typically 1-8 MB). If you need a large array (e.g., 10 million integers = 40 MB), it must go on the heap. Attempting to allocate it on the stack causes a stack overflow.

### 5. Interview and Placement Essential

Memory management questions are a staple of C++ interviews. Understanding stack vs heap, memory leaks, dangling pointers, and RAII separates a strong candidate from a weak one. Companies like Microsoft, Amazon, and Google test these concepts extensively.

## Detailed Explanation

### 1. Stack vs Heap Memory

Every C++ program has two main memory regions for storing data:

**Stack:**

- Stores local variables and function call frames
- Allocation and deallocation are automatic (managed by the compiler)
- Very fast (just a pointer increment/decrement)
- Limited size (typically 1-8 MB)
- Variables are destroyed when they go out of scope
- Cannot be resized after allocation

**Heap:**

- Stores dynamically allocated memory (via `new`)
- Allocation and deallocation are manual (programmer's responsibility)
- Slower than stack (OS must find free block)
- Much larger (limited by available system memory)
- Variables persist until explicitly deleted
- Can allocate variable sizes at runtime

```
void example() {
    int x = 10;             // stack: destroyed at end of function
    int* p = new int(20);   // heap: persists until delete
    delete p;               // manual cleanup
}
```

### 2. Allocating Single Variables

```
int* p = new int;        // uninitialized
int* q = new int(0);     // initialized to 0
int* r = new int{42};    // C++11 brace initialization

cout << *q;  // 0
cout << *r;  // 42

delete p;
delete q;
delete r;
```

### 3. Allocating Arrays

```
int n;
cin >> n;
int* arr = new int[n];       // array of n ints (uninitialized)
int* arr2 = new int[n]();    // array of n ints, all initialized to 0
int* arr3 = new int[5]{1, 2, 3, 4, 5};  // C++11 initialized

// Use like a normal array
for (int i = 0; i < n; i++) {
    arr[i] = i * 10;
}

delete[] arr;    // MUST use delete[] for arrays
delete[] arr2;
delete[] arr3;
```

### 4. Memory Leaks

A **memory leak** occurs when dynamically allocated memory is not freed. The pointer to the memory is lost, so the memory can never be reclaimed until the program exits.

```
void leak() {
    int* p = new int(42);  // allocate on heap
    // function returns without delete p
    // the memory is leaked: no pointer to it exists
}

void anotherLeak() {
    int* p = new int(10);
    p = new int(20);       // LEAK: original memory (10) is lost
    delete p;              // only frees the second allocation
}
```

Memory leaks accumulate over time and can cause a program to consume all available memory, leading to crashes or system slowdowns.

### 5. Dangling Pointers After delete

After calling `delete`, the pointer still holds the old address, but that memory is no longer valid. This is a **dangling pointer**.

```
int* p = new int(42);
delete p;         // memory freed
// *p is now undefined behavior
p = nullptr;      // good practice: prevents accidental access
```

Best practice: always set a pointer to `nullptr` after deleting it.

### 6. new with Classes

You can create objects on the heap using `new`. The constructor is called when `new` allocates the object, and the destructor is called when `delete` frees it.

```
class Student {
public:
    string name;
    Student(string n) : name(n) {
        cout << name << " created" << endl;
    }
    ~Student() {
        cout << name << " destroyed" << endl;
    }
};

Student* s = new Student("Arjun");  // constructor called
cout << s->name << endl;            // access with ->
delete s;                            // destructor called
```

### 7. Dynamic 2D Arrays

A dynamic 2D array is implemented as an array of pointers, where each pointer points to a dynamically allocated row:

```
int rows = 3, cols = 4;

// Allocate
int** matrix = new int*[rows];       // array of row pointers
for (int i = 0; i < rows; i++) {
    matrix[i] = new int[cols];       // each row
}

// Use
matrix[1][2] = 42;

// Deallocate (reverse order)
for (int i = 0; i < rows; i++) {
    delete[] matrix[i];              // free each row
}
delete[] matrix;                     // free the row pointer array
```

### 8. No realloc in C++ (Use vector)

Unlike C's `realloc()`, C++ has no built-in way to resize dynamically allocated arrays. To "resize," you must allocate a new array, copy elements, and delete the old one. In practice, use `std::vector` which handles this automatically.

```
// Manual resize (avoid this in production code)
int* old = new int[5]{1, 2, 3, 4, 5};
int* resized = new int[10];
for (int i = 0; i < 5; i++) resized[i] = old[i];
delete[] old;
// resized now has capacity 10

// Better: use vector
// vector v = {1, 2, 3, 4, 5};
// v.push_back(6);  // automatic resize
```

### 9. RAII Principle

**RAII (Resource Acquisition Is Initialization)** is a C++ design principle where resources (memory, files, locks) are acquired in a constructor and released in the destructor. This ensures cleanup happens automatically when the object goes out of scope, even if an exception is thrown.

```
class IntArray {
    int* data;
    int size;
public:
    IntArray(int n) : size(n), data(new int[n]()) {}
    ~IntArray() { delete[] data; }   // automatic cleanup
    int& operator[](int i) { return data[i]; }
};

void example() {
    IntArray arr(100);   // memory allocated in constructor
    arr[0] = 42;
    // no delete needed: destructor frees memory automatically
}
```

### 10. Smart Pointers Preview

Modern C++ (C++11+) provides smart pointers that automatically manage heap memory using RAII:

**unique_ptr:** Owns the memory exclusively. Cannot be copied. When it goes out of scope, the memory is freed.

**shared_ptr:** Multiple pointers can share ownership. Memory is freed when the last shared_ptr is destroyed (reference counting).

**weak_ptr:** A non-owning reference to memory managed by shared_ptr. Does not prevent deallocation.

```
#include 

unique_ptr p1 = make_unique(42);   // auto-deleted
shared_ptr p2 = make_shared(100);  // reference counted

cout << *p1 << endl;  // 42
cout << *p2 << endl;  // 100
// no delete needed!
```

## Code Examples

### Stack vs Heap -- Lifetime Difference

```cpp
#include <iostream>
using namespace std;

int* createOnStack() {
    int x = 42;
    // return &x;  // WRONG: x is destroyed when function returns
    return nullptr;
}

int* createOnHeap() {
    int* p = new int(42);
    return p;  // OK: heap memory persists
}

int main() {
    int* stackPtr = createOnStack();
    cout << "Stack pointer: " << stackPtr << endl;  // nullptr

    int* heapPtr = createOnHeap();
    cout << "Heap value: " << *heapPtr << endl;  // 42
    delete heapPtr;

    // Stack variable
    {
        int local = 100;  // alive only in this block
        cout << "Local: " << local << endl;
    }
    // local is destroyed here

    return 0;
}
```

A stack variable (`x`) is destroyed when the function returns, so returning its address would create a dangling pointer. A heap variable (allocated with `new`) persists until explicitly deleted. The block scope variable `local` is destroyed when the closing brace is reached.

**Output:**

```
Stack pointer: 0 (nullptr)
Heap value: 42
Local: 100
```

### Dynamic Array Allocation and Deallocation

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter size: ";
    cin >> n;

    // Allocate array on heap
    int* arr = new int[n];

    // Fill with squares
    for (int i = 0; i < n; i++) {
        arr[i] = (i + 1) * (i + 1);
    }

    // Print
    cout << "Squares: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    // Zero-initialized array
    int* zeros = new int[n]();
    cout << "Zeros: ";
    for (int i = 0; i < n; i++) {
        cout << zeros[i] << " ";
    }
    cout << endl;

    delete[] arr;
    delete[] zeros;

    return 0;
}
```

`new int[n]` allocates `n` integers on the heap. The parentheses in `new int[n]()` value-initialize all elements to zero. Both must be freed with `delete[]` (not `delete`).

**Output:**

```
Enter size: 5
Squares: 1 4 9 16 25
Zeros: 0 0 0 0 0
```

### Memory Leak Demonstration

```cpp
#include <iostream>
using namespace std;

void leakyFunction() {
    int* p = new int(42);
    cout << "Value: " << *p << endl;
    // Oops! Forgot delete p;
    // Memory is leaked when function returns
}

void overwriteLeak() {
    int* p = new int(10);
    cout << "First: " << *p << endl;
    p = new int(20);           // LEAK: lost pointer to first allocation
    cout << "Second: " << *p << endl;
    delete p;                  // Only frees the second allocation
}

void noLeak() {
    int* p = new int(42);
    cout << "Value: " << *p << endl;
    delete p;                  // Properly freed
    p = nullptr;               // Good practice
}

int main() {
    cout << "--- Leaky function ---" << endl;
    leakyFunction();

    cout << "\n--- Overwrite leak ---" << endl;
    overwriteLeak();

    cout << "\n--- No leak ---" << endl;
    noLeak();

    return 0;
}
```

In `leakyFunction`, the pointer goes out of scope without `delete`, leaking the memory. In `overwriteLeak`, reassigning the pointer without freeing the old memory leaks the first allocation. In `noLeak`, every `new` has a matching `delete`.

**Output:**

```
--- Leaky function ---
Value: 42

--- Overwrite leak ---
First: 10
Second: 20

--- No leak ---
Value: 42
```

### Dynamic Objects with new -- Constructor and Destructor

```cpp
#include <iostream>
#include <string>
using namespace std;

class Student {
    string name;
    int rollNo;
public:
    Student(string n, int r) : name(n), rollNo(r) {
        cout << "Constructor: " << name << " (" << rollNo << ")" << endl;
    }
    ~Student() {
        cout << "Destructor: " << name << " (" << rollNo << ")" << endl;
    }
    void display() {
        cout << name << " - Roll No: " << rollNo << endl;
    }
};

int main() {
    cout << "--- Single object ---" << endl;
    Student* s1 = new Student("Rahul", 101);
    s1->display();
    delete s1;

    cout << "\n--- Array of objects ---" << endl;
    Student* arr = new Student[3]{{"Priya", 201}, {"Arun", 202}, {"Sneha", 203}};
    for (int i = 0; i < 3; i++) {
        arr[i].display();
    }
    delete[] arr;

    return 0;
}
```

The `new` operator calls the constructor when creating objects on the heap. The `delete` operator calls the destructor before freeing memory. For arrays of objects, `delete[]` calls the destructor for each element. Use `->` (arrow operator) to access members through a pointer.

**Output:**

```
--- Single object ---
Constructor: Rahul (101)
Rahul - Roll No: 101
Destructor: Rahul (101)

--- Array of objects ---
Constructor: Priya (201)
Constructor: Arun (202)
Constructor: Sneha (203)
Priya - Roll No: 201
Arun - Roll No: 202
Sneha - Roll No: 203
Destructor: Sneha (203)
Destructor: Arun (202)
Destructor: Priya (201)
```

### Dynamic 2D Array -- Allocate, Use, Free

```cpp
#include <iostream>
using namespace std;

int main() {
    int rows = 3, cols = 4;

    // Allocate 2D array
    int** matrix = new int*[rows];
    for (int i = 0; i < rows; i++) {
        matrix[i] = new int[cols];
    }

    // Fill with values
    int val = 1;
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            matrix[i][j] = val++;
        }
    }

    // Print
    cout << "Matrix:" << endl;
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            cout << matrix[i][j] << "\t";
        }
        cout << endl;
    }

    // Deallocate (reverse order: rows first, then array of pointers)
    for (int i = 0; i < rows; i++) {
        delete[] matrix[i];
    }
    delete[] matrix;

    return 0;
}
```

A dynamic 2D array is an array of pointers (`int**`), where each pointer points to a dynamically allocated row. Deallocation must happen in reverse order: first free each row (`delete[] matrix[i]`), then free the array of row pointers (`delete[] matrix`).

**Output:**

```
Matrix:
1	2	3	4
5	6	7	8
9	10	11	12
```

### RAII Pattern -- Automatic Memory Management

```cpp
#include <iostream>
using namespace std;

class DynamicArray {
    int* data;
    int capacity;
public:
    DynamicArray(int n) : capacity(n), data(new int[n]()) {
        cout << "Allocated " << n << " elements" << endl;
    }

    ~DynamicArray() {
        delete[] data;
        cout << "Freed " << capacity << " elements" << endl;
    }

    int& operator[](int index) {
        return data[index];
    }

    int size() const { return capacity; }
};

void processData() {
    DynamicArray arr(5);
    for (int i = 0; i < arr.size(); i++) {
        arr[i] = (i + 1) * 10;
    }
    cout << "Data: ";
    for (int i = 0; i < arr.size(); i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    // No manual delete needed!
    // Destructor runs automatically when arr goes out of scope
}

int main() {
    processData();
    cout << "Function returned safely" << endl;
    return 0;
}
```

The RAII class `DynamicArray` allocates memory in its constructor and frees it in its destructor. When the function returns (or an exception is thrown), the destructor is called automatically, preventing memory leaks. This is the foundation of all modern C++ memory management.

**Output:**

```
Allocated 5 elements
Data: 10 20 30 40 50
Freed 5 elements
Function returned safely
```

### Smart Pointers Preview -- unique_ptr and shared_ptr

```cpp
#include <iostream>
#include <memory>
using namespace std;

class Resource {
    string name;
public:
    Resource(string n) : name(n) {
        cout << "Created: " << name << endl;
    }
    ~Resource() {
        cout << "Destroyed: " << name << endl;
    }
    void use() { cout << "Using: " << name << endl; }
};

int main() {
    cout << "--- unique_ptr ---" << endl;
    {
        unique_ptr<Resource> p1 = make_unique<Resource>("UniqueRes");
        p1->use();
        // unique_ptr<Resource> p2 = p1;  // ERROR: cannot copy
    } // p1 goes out of scope, Resource destroyed

    cout << "\n--- shared_ptr ---" << endl;
    {
        shared_ptr<Resource> p2 = make_shared<Resource>("SharedRes");
        cout << "Count: " << p2.use_count() << endl;
        {
            shared_ptr<Resource> p3 = p2;  // shared ownership
            cout << "Count: " << p2.use_count() << endl;
            p3->use();
        } // p3 destroyed, count decreases
        cout << "Count: " << p2.use_count() << endl;
    } // p2 destroyed, count = 0, Resource destroyed

    cout << "\nDone" << endl;
    return 0;
}
```

`unique_ptr` has exclusive ownership -- when it goes out of scope, the resource is freed. It cannot be copied, only moved. `shared_ptr` uses reference counting -- the resource is freed when the last shared_ptr pointing to it is destroyed. The `use_count()` method shows the current reference count.

**Output:**

```
--- unique_ptr ---
Created: UniqueRes
Using: UniqueRes
Destroyed: UniqueRes

--- shared_ptr ---
Created: SharedRes
Count: 1
Count: 2
Using: SharedRes
Count: 1
Destroyed: SharedRes

Done
```

## Common Mistakes

### Using delete Instead of delete[] for Arrays

**Wrong:**

```
int* arr = new int[100];
// ... use arr ...
delete arr;    // WRONG!
```

Undefined behavior. The runtime does not know how many destructors to call or how much memory to free.

**Correct:**

```
int* arr = new int[100];
// ... use arr ...
delete[] arr;  // CORRECT: matches new[]
```

Memory allocated with `new[]` must be freed with `delete[]`. Using plain `delete` on array memory is undefined behavior. For primitive types it may appear to work on some compilers, but for class types it will not call destructors for elements beyond the first.

### Overwriting a Pointer Without Freeing (Memory Leak)

**Wrong:**

```
int* p = new int(10);
p = new int(20);    // LEAK: old memory (10) is never freed
delete p;           // only frees the second allocation
```

No compilation error, but the first allocation (value 10) is leaked. It cannot be accessed or freed.

**Correct:**

```
int* p = new int(10);
delete p;           // free the first allocation
p = new int(20);    // now safe to reassign
delete p;           // free the second allocation
```

Before reassigning a pointer to new memory, always free the old memory first. Otherwise, the old memory becomes unreachable and is leaked for the lifetime of the program.

### Accessing Memory After delete (Dangling Pointer)

**Wrong:**

```
int* p = new int(42);
delete p;
cout << *p;    // UNDEFINED BEHAVIOR: dangling pointer
```

Undefined behavior. The memory at that address may have been reallocated for another purpose. The program may crash, print garbage, or appear to work.

**Correct:**

```
int* p = new int(42);
delete p;
p = nullptr;   // nullify after delete
if (p != nullptr) {
    cout << *p;
} else {
    cout << "Pointer is null";
}
```

After `delete`, the pointer becomes dangling. Always set it to `nullptr` immediately after deleting. Check for `nullptr` before dereferencing.

### Freeing Stack Memory with delete

**Wrong:**

```
int x = 42;
int* p = &x;
delete p;      // WRONG: x is on the stack, not the heap
```

Undefined behavior. Calling delete on memory that was not allocated with new corrupts the heap.

**Correct:**

```
int x = 42;
int* p = &x;
// Do NOT delete p; x is a stack variable
cout << *p;    // just use the pointer, no delete needed
```

Only use `delete` on memory that was allocated with `new`. Stack variables are automatically freed when they go out of scope. Calling `delete` on a stack address corrupts the heap allocator's internal data structures.

### Forgetting to Deallocate 2D Array Rows

**Wrong:**

```
int** matrix = new int*[3];
for (int i = 0; i < 3; i++)
    matrix[i] = new int[4];

// ... use matrix ...

delete[] matrix;  // WRONG: only frees the row pointer array, not the rows
```

Memory leak. The 3 row arrays (each of 4 ints) are never freed.

**Correct:**

```
// Free each row first
for (int i = 0; i < 3; i++)
    delete[] matrix[i];
// Then free the row pointer array
delete[] matrix;
```

A dynamic 2D array requires two levels of deallocation. First free each row (`delete[] matrix[i]`), then free the array of row pointers (`delete[] matrix`). Failing to free the rows leaks their memory.

## Summary

- Dynamic memory allocation uses the new operator to allocate memory on the heap at runtime, and delete to free it.
- Stack memory is fast, automatic, and limited in size. Heap memory is slower, manual, and much larger.
- new allocates a single variable (new int(42)) or an array (new int[n]). delete frees single allocations; delete[] frees arrays.
- A memory leak occurs when allocated memory is never freed. Common causes: forgetting delete, overwriting pointers, and exceptions before delete.
- A dangling pointer points to memory that has been freed. Always set pointers to nullptr after delete.
- Dynamic 2D arrays use int** with nested allocation. Deallocation must happen in reverse order: rows first, then the row pointer array.
- C++ has no realloc equivalent. Use std::vector for automatically resizable arrays.
- RAII (Resource Acquisition Is Initialization) ties resource lifetime to object lifetime. Allocate in the constructor, free in the destructor.
- Smart pointers (unique_ptr, shared_ptr, weak_ptr) automate memory management using RAII. Prefer them over raw new/delete in modern C++.
- Every new must have exactly one matching delete. Every new[] must have exactly one matching delete[]. Mismatching is undefined behavior.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/dynamic-memory-allocation/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/dynamic-memory-allocation/practice/*
