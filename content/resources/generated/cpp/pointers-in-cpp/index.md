---
title: "Pointers in C++ - Pointer Arithmetic, References, const Pointers, Dangling Pointers | Modern Age Coders"
description: "Master C++ pointers including declaring pointers, address-of and dereference operators, nullptr, pointer arithmetic, pointers and arrays, pointer to pointer, references vs pointers, const pointers, void pointers, and dangling pointers. Includes 60+ practice questions with output prediction and coding challenges."
slug: pointers-in-cpp
canonical: https://learn.modernagecoders.com/resources/cpp/pointers-in-cpp
category: "C++"
keywords: ["c++ pointers", "pointer arithmetic c++", "references vs pointers c++", "const pointer c++", "dangling pointer c++", "nullptr c++", "pointer to pointer c++", "void pointer c++", "c++ pointer interview questions", "c++ pointer examples"]
---
# Pointers and References in C++

**Difficulty:** Intermediate  
**Reading time:** 38 min  
**Chapter:** 11  
**Practice questions:** 60

## What Are Pointers in C++?

A **pointer** is a variable that stores the **memory address** of another variable. Instead of holding a data value directly, a pointer holds the location in memory where that value resides. Pointers are one of the most powerful and distinctive features of C++ and are fundamental to understanding how the language manages memory.

Every variable you create occupies some bytes of memory at a specific address. A pointer lets you access and manipulate that memory directly. This is what makes C++ suitable for systems programming, embedded systems, and performance-critical applications.

### Declaring Pointers

A pointer is declared by placing an asterisk (`*`) between the data type and the variable name:

```
int* p;       // p is a pointer to int
double* dp;   // dp is a pointer to double
char* cp;     // cp is a pointer to char
```

The `*` can be placed next to the type, next to the variable name, or in between. All three are valid: `int* p`, `int *p`, `int * p`. However, be careful with multiple declarations: `int* a, b;` declares `a` as a pointer and `b` as a regular int.

### The Address-of (&) and Dereference (*) Operators

The **address-of operator** (`&`) returns the memory address of a variable. The **dereference operator** (`*`) accesses the value at the address stored in a pointer.

```
int x = 42;
int* p = &x;    // p stores the address of x
cout << p;      // prints the address (e.g., 0x7ffd5e8a)
cout << *p;     // prints 42 (the value at that address)
*p = 100;       // changes x to 100 through the pointer
```

### nullptr (C++11)

A pointer that does not point to any valid memory should be set to `nullptr`. Before C++11, `NULL` or `0` was used, but `nullptr` is type-safe and preferred.

```
int* p = nullptr;  // p points to nothing
if (p == nullptr) {
    cout << "Pointer is null";
}
```

## Why Are Pointers Important?

### 1. Direct Memory Access

Pointers give you direct access to memory, which is essential for systems programming. Operating systems, device drivers, and embedded systems rely heavily on pointer-based memory manipulation. Understanding pointers means understanding how your program actually uses the hardware.

### 2. Efficient Function Arguments

Passing large objects (structs, arrays, strings) by value creates copies, which is slow. Passing a pointer (4 or 8 bytes regardless of object size) is much faster. This is why most C++ functions dealing with large data take pointers or references.

### 3. Dynamic Memory Allocation

The `new` operator returns a pointer to dynamically allocated memory on the heap. Without pointers, you cannot use dynamic memory at all. Data structures like linked lists, trees, and graphs are built entirely with pointers.

### 4. Arrays and Pointer Arithmetic

In C++, arrays and pointers are deeply connected. An array name decays to a pointer to its first element. Pointer arithmetic lets you traverse arrays without indexing, which is both powerful and efficient.

### 5. Interview and Placement Essential

Pointers are the most frequently tested C++ topic in campus placements and technical interviews at companies like Amazon, Microsoft, Google, and Flipkart. Output prediction questions involving pointer arithmetic, pointer-to-pointer, and dangling pointers appear in almost every C++ interview.

## Detailed Explanation

### 1. Pointer Arithmetic

You can perform arithmetic on pointers. When you add 1 to a pointer, it moves forward by the size of the data type it points to (not by 1 byte).

```
int arr[] = {10, 20, 30, 40, 50};
int* p = arr;        // points to arr[0]
cout << *p;          // 10
cout << *(p + 1);    // 20 (moves 4 bytes forward for int)
cout << *(p + 3);    // 40
p++;                 // now p points to arr[1]
cout << *p;          // 20
```

If `p` is an `int*` and `int` is 4 bytes, then `p + 1` adds 4 bytes, `p + 2` adds 8 bytes, and so on. This is why pointer arithmetic is type-aware.

You can also subtract two pointers of the same type to find the number of elements between them: `ptrdiff_t diff = p2 - p1;`

### 2. Pointers and Arrays

An array name is essentially a constant pointer to the first element. When you pass an array to a function, it decays into a pointer.

```
int arr[] = {10, 20, 30};
int* p = arr;           // arr decays to &arr[0]
cout << arr[1];         // 20
cout << *(arr + 1);     // 20 (same thing)
cout << p[1];           // 20 (pointer can use [] too)
cout << *(p + 1);       // 20
```

The expression `arr[i]` is internally equivalent to `*(arr + i)`. This is why arrays and pointers are interchangeable in most contexts.

### 3. Pointer to Pointer (int**)

A pointer to a pointer stores the address of another pointer. This is commonly used for dynamic 2D arrays and for functions that need to modify a pointer itself.

```
int x = 10;
int* p = &x;
int** pp = &p;

cout << **pp;   // 10 (dereference twice: pp -> p -> x)
**pp = 50;      // changes x to 50
```

### 4. References vs Pointers

A **reference** is an alias for an existing variable. Unlike pointers, references cannot be null, cannot be reassigned to refer to a different variable, and do not require dereferencing.

```
int x = 10;
int& ref = x;    // ref is an alias for x
ref = 20;        // x is now 20 (no * needed)
cout << x;       // 20
```

**When to use which:**

Use **references** when: you always need a valid target (no null), you want cleaner syntax, you are passing to functions for modification (pass by reference).

Use **pointers** when: the target might be null, you need to reassign to different targets, you need pointer arithmetic, you are working with dynamic memory (new/delete).

### 5. const Pointers

There are three levels of const with pointers:

**Pointer to const:** `const int* p` -- you cannot modify the value through the pointer, but you can change what the pointer points to.

```
const int* p = &x;
// *p = 20;  // ERROR: cannot modify value
p = &y;      // OK: can change what p points to
```

**const pointer:** `int* const p` -- you can modify the value, but the pointer itself cannot point to something else.

```
int* const p = &x;
*p = 20;      // OK: can modify value
// p = &y;   // ERROR: cannot change pointer
```

**const pointer to const:** `const int* const p` -- neither the value nor the pointer can change.

```
const int* const p = &x;
// *p = 20;  // ERROR
// p = &y;   // ERROR
```

### 6. Passing Pointers to Functions

Passing a pointer to a function allows the function to modify the original variable (simulating pass-by-reference):

```
void increment(int* p) {
    (*p)++;    // modifies the original variable
}

int x = 10;
increment(&x);
cout << x;     // 11
```

### 7. Returning Pointers from Functions

A function can return a pointer, but you must never return a pointer to a local variable (it becomes a dangling pointer after the function returns):

```
// WRONG: returns pointer to local variable
int* bad() {
    int x = 10;
    return &x;  // x is destroyed when function returns
}

// CORRECT: return pointer to dynamically allocated memory
int* good() {
    int* p = new int(10);
    return p;   // caller must delete this
}
```

### 8. Dangling Pointers

A **dangling pointer** points to memory that has been freed or has gone out of scope. Accessing a dangling pointer is undefined behavior.

```
int* p = new int(10);
delete p;       // memory freed
// cout << *p;  // UNDEFINED BEHAVIOR: dangling pointer
p = nullptr;    // good practice: set to nullptr after delete
```

### 9. Wild Pointers

A **wild pointer** is a pointer that has not been initialized. It contains a garbage address.

```
int* p;          // wild pointer: points to random address
// cout << *p;   // UNDEFINED BEHAVIOR
int* q = nullptr; // safe: initialized to nullptr
```

### 10. Void Pointers

A `void*` is a generic pointer that can point to any data type. You cannot dereference a void pointer directly -- you must cast it first.

```
int x = 10;
void* vp = &x;
// cout << *vp;          // ERROR: cannot dereference void*
cout << *(int*)vp;       // OK: cast to int* first, prints 10
```

Void pointers are used in C-style APIs and generic data structures. In modern C++, templates and `std::any` are preferred alternatives.

## Code Examples

### Basic Pointer Operations -- Declare, Assign, Dereference

```cpp
#include <iostream>
using namespace std;

int main() {
    int x = 42;
    int* p = &x;       // p stores address of x

    cout << "Value of x: " << x << endl;
    cout << "Address of x: " << &x << endl;
    cout << "Value of p (address): " << p << endl;
    cout << "Value at *p: " << *p << endl;

    *p = 100;          // modify x through pointer
    cout << "After *p = 100, x = " << x << endl;

    int y = 200;
    p = &y;            // reassign pointer to y
    cout << "After p = &y, *p = " << *p << endl;

    return 0;
}
```

`p` stores the address of `x`. `*p` dereferences the pointer to get the value 42. Assigning `*p = 100` modifies `x` through the pointer. Reassigning `p = &y` makes the pointer point to a different variable.

**Output:**

```
Value of x: 42
Address of x: 0x7ffd... (varies)
Value of p (address): 0x7ffd... (same as above)
Value at *p: 42
After *p = 100, x = 100
After p = &y, *p = 200
```

### Pointer Arithmetic with Arrays

```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int* p = arr;       // p points to arr[0]

    cout << "Using pointer arithmetic:" << endl;
    for (int i = 0; i < 5; i++) {
        cout << "*(p + " << i << ") = " << *(p + i) << endl;
    }

    cout << "\nUsing pointer increment:" << endl;
    int* q = arr;
    for (int i = 0; i < 5; i++) {
        cout << "*q = " << *q << endl;
        q++;            // moves to next element
    }

    // Pointer difference
    int* start = &arr[0];
    int* end = &arr[4];
    cout << "\nElements between start and end: " << (end - start) << endl;

    return 0;
}
```

The array name `arr` decays to a pointer to the first element. `*(p + i)` accesses the i-th element. `q++` advances the pointer by `sizeof(int)` bytes (typically 4). Pointer subtraction gives the number of elements between two addresses, not the byte difference.

**Output:**

```
Using pointer arithmetic:
*(p + 0) = 10
*(p + 1) = 20
*(p + 2) = 30
*(p + 3) = 40
*(p + 4) = 50

Using pointer increment:
*q = 10
*q = 20
*q = 30
*q = 40
*q = 50

Elements between start and end: 4
```

### Pointer to Pointer (int**)

```cpp
#include <iostream>
using namespace std;

int main() {
    int x = 10;
    int* p = &x;
    int** pp = &p;

    cout << "x = " << x << endl;
    cout << "*p = " << *p << endl;
    cout << "**pp = " << **pp << endl;

    cout << "\nAddress of x: " << &x << endl;
    cout << "p (holds address of x): " << p << endl;
    cout << "Address of p: " << &p << endl;
    cout << "pp (holds address of p): " << pp << endl;

    **pp = 50;   // modifies x through two levels of indirection
    cout << "\nAfter **pp = 50:" << endl;
    cout << "x = " << x << endl;
    cout << "*p = " << *p << endl;
    cout << "**pp = " << **pp << endl;

    return 0;
}
```

`pp` is a pointer to a pointer. It stores the address of `p`, which in turn stores the address of `x`. `**pp` dereferences twice: first to get `p`, then to get `x`. Modifying `**pp` changes the value of `x`.

**Output:**

```
x = 10
*p = 10
**pp = 10

Address of x: 0x7ffd... (varies)
p (holds address of x): 0x7ffd...
Address of p: 0x7ffd...
pp (holds address of p): 0x7ffd...

After **pp = 50:
x = 50
*p = 50
**pp = 50
```

### References vs Pointers

```cpp
#include <iostream>
using namespace std;

void swapPointers(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void swapReferences(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 10, y = 20;

    // Using pointers
    cout << "Before pointer swap: x=" << x << ", y=" << y << endl;
    swapPointers(&x, &y);
    cout << "After pointer swap: x=" << x << ", y=" << y << endl;

    // Reset
    x = 10; y = 20;

    // Using references
    cout << "\nBefore reference swap: x=" << x << ", y=" << y << endl;
    swapReferences(x, y);
    cout << "After reference swap: x=" << x << ", y=" << y << endl;

    // Reference is an alias
    int val = 100;
    int& ref = val;
    ref = 200;
    cout << "\nval after ref = 200: " << val << endl;

    return 0;
}
```

Both functions swap two integers, but the pointer version requires `&` at the call site and `*` inside the function, while the reference version has cleaner syntax. A reference (`ref`) is an alias for `val` -- modifying `ref` directly modifies `val` without dereferencing.

**Output:**

```
Before pointer swap: x=10, y=20
After pointer swap: x=20, y=10

Before reference swap: x=10, y=20
After reference swap: x=20, y=10

val after ref = 200: 200
```

### const Pointers -- Three Levels of const

```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 20;

    // 1. Pointer to const: cannot change value, can change pointer
    const int* p1 = &a;
    // *p1 = 30;     // ERROR: cannot modify value
    p1 = &b;         // OK: can change what p1 points to
    cout << "p1 points to: " << *p1 << endl;

    // 2. const pointer: can change value, cannot change pointer
    int* const p2 = &a;
    *p2 = 30;         // OK: can modify value
    // p2 = &b;       // ERROR: cannot change pointer
    cout << "a after *p2 = 30: " << a << endl;

    // 3. const pointer to const: cannot change either
    const int* const p3 = &a;
    // *p3 = 40;      // ERROR
    // p3 = &b;       // ERROR
    cout << "p3 points to: " << *p3 << endl;

    return 0;
}
```

`const int* p1` -- the `const` is on the left of `*`, so the value is const (read-only through the pointer). `int* const p2` -- the `const` is on the right of `*`, so the pointer itself is const. `const int* const p3` -- both are const. Read it right-to-left: p3 is a const pointer to a const int.

**Output:**

```
p1 points to: 20
a after *p2 = 30: 30
p3 points to: 30
```

### Passing and Returning Pointers -- Functions

```cpp
#include <iostream>
using namespace std;

void doubleValue(int* p) {
    *p *= 2;   // modifies original through pointer
}

void fillArray(int* arr, int size, int value) {
    for (int i = 0; i < size; i++) {
        *(arr + i) = value + i;
    }
}

int* createArray(int size) {
    int* arr = new int[size];  // dynamic allocation
    for (int i = 0; i < size; i++) {
        arr[i] = (i + 1) * 10;
    }
    return arr;  // caller must delete[]
}

int main() {
    // Pass pointer to modify variable
    int x = 25;
    doubleValue(&x);
    cout << "After doubleValue: x = " << x << endl;

    // Pass array (decays to pointer)
    int arr[5];
    fillArray(arr, 5, 100);
    cout << "Filled array: ";
    for (int i = 0; i < 5; i++) cout << arr[i] << " ";
    cout << endl;

    // Return pointer from function
    int* dynArr = createArray(4);
    cout << "Dynamic array: ";
    for (int i = 0; i < 4; i++) cout << dynArr[i] << " ";
    cout << endl;
    delete[] dynArr;  // free memory

    return 0;
}
```

`doubleValue` takes a pointer and modifies the original variable. `fillArray` receives an array as a pointer and fills it using pointer arithmetic. `createArray` allocates memory with `new` and returns the pointer -- the caller is responsible for calling `delete[]` to avoid a memory leak.

**Output:**

```
After doubleValue: x = 50
Filled array: 100 101 102 103 104
Dynamic array: 10 20 30 40
```

### Dangling Pointers, Wild Pointers, and Void Pointers

```cpp
#include <iostream>
using namespace std;

int main() {
    // --- Dangling pointer ---
    int* p = new int(42);
    cout << "Before delete: *p = " << *p << endl;
    delete p;
    // cout << *p;  // UNDEFINED BEHAVIOR: dangling pointer
    p = nullptr;    // Good practice: nullify after delete
    cout << "After delete: p is " << (p == nullptr ? "null" : "not null") << endl;

    // --- Wild pointer (uninitialized) ---
    // int* wild;     // wild pointer -- DO NOT dereference
    int* safe = nullptr;  // always initialize
    cout << "safe is " << (safe == nullptr ? "null" : "not null") << endl;

    // --- Void pointer ---
    int num = 100;
    double pi = 3.14;
    void* vp;

    vp = &num;
    cout << "\nvoid* pointing to int: " << *(static_cast<int*>(vp)) << endl;

    vp = &pi;
    cout << "void* pointing to double: " << *(static_cast<double*>(vp)) << endl;

    return 0;
}
```

After `delete p`, the pointer becomes dangling -- it holds an address that is no longer valid. Setting it to `nullptr` after delete prevents accidental access. An uninitialized pointer (wild pointer) holds a garbage address. A `void*` can point to any type but must be cast to the correct type before dereferencing.

**Output:**

```
Before delete: *p = 42
After delete: p is null
safe is null

void* pointing to int: 100
void* pointing to double: 3.14
```

## Common Mistakes

### Dereferencing a Null Pointer

**Wrong:**

```
int* p = nullptr;
cout << *p;   // CRASH: segmentation fault
```

Segmentation fault (runtime crash). Accessing memory at address 0 is undefined behavior.

**Correct:**

```
int* p = nullptr;
if (p != nullptr) {
    cout << *p;
} else {
    cout << "Pointer is null";
}
```

Always check if a pointer is `nullptr` before dereferencing. Dereferencing a null pointer causes undefined behavior, typically a segmentation fault that crashes the program.

### Confusing int* a, b (Only a is a Pointer)

**Wrong:**

```
int* a, b;    // a is int*, b is just int
b = &a;       // ERROR: b is not a pointer
```

error: cannot convert 'int**' to 'int' in assignment

**Correct:**

```
int *a, *b;   // both a and b are pointers
// OR declare separately:
int* a;
int* b;
```

In `int* a, b;`, the `*` binds to `a`, not to the type. Only `a` is a pointer; `b` is a regular int. To declare multiple pointers, place `*` before each variable name, or declare them on separate lines.

### Returning Pointer to Local Variable (Dangling Pointer)

**Wrong:**

```
int* getNumber() {
    int x = 42;
    return &x;   // x is destroyed when function returns
}

int* p = getNumber();
cout << *p;   // UNDEFINED BEHAVIOR
```

warning: address of local variable 'x' returned. Accessing *p is undefined behavior.

**Correct:**

```
int* getNumber() {
    int* p = new int(42);  // allocate on heap
    return p;              // valid: heap memory persists
}

int* p = getNumber();
cout << *p;   // 42
delete p;     // remember to free
```

Local variables are allocated on the stack and destroyed when the function returns. Returning their address creates a dangling pointer. Use `new` to allocate on the heap, or return by value instead.

### Forgetting to Delete Dynamically Allocated Memory

**Wrong:**

```
void process() {
    int* arr = new int[1000];
    // ... use arr ...
    return;   // memory leak: arr is never freed
}
```

No compilation error, but memory is leaked every time process() is called. The program's memory usage grows indefinitely.

**Correct:**

```
void process() {
    int* arr = new int[1000];
    // ... use arr ...
    delete[] arr;   // free the memory
    return;
}
```

Every `new` must have a matching `delete`, and every `new[]` must have a matching `delete[]`. Forgetting to delete causes a memory leak. In modern C++, prefer smart pointers (`unique_ptr`, `shared_ptr`) to avoid manual memory management.

### Using delete Instead of delete[] for Arrays

**Wrong:**

```
int* arr = new int[10];
delete arr;    // WRONG: should be delete[]
```

Undefined behavior. Only the first element's destructor is called. For primitive types it may appear to work, but for class types it corrupts memory.

**Correct:**

```
int* arr = new int[10];
delete[] arr;  // CORRECT: frees the entire array
```

Memory allocated with `new[]` must be freed with `delete[]`. Using plain `delete` on an array is undefined behavior because the runtime does not know how many elements to destroy.

## Summary

- A pointer is a variable that stores the memory address of another variable. Declare with int* p; and assign with p = &x;
- The address-of operator (&) gets a variable's address. The dereference operator (*) accesses the value at the stored address.
- nullptr (C++11) is the type-safe null pointer constant. Always initialize pointers to nullptr if they do not point to valid memory.
- Pointer arithmetic is type-aware: p + 1 moves forward by sizeof(*p) bytes. For int* on a 4-byte system, p + 1 advances 4 bytes.
- Array names decay to pointers. arr[i] is equivalent to *(arr + i). Pointers can use array indexing syntax: p[i].
- A pointer to pointer (int** pp) stores the address of another pointer. Dereference twice (**pp) to reach the final value.
- References (int& ref = x) are aliases that cannot be null or reassigned. Prefer references for function parameters; use pointers when null is possible or reassignment is needed.
- const int* p means the value is read-only. int* const p means the pointer cannot be reassigned. const int* const p means both are fixed.
- Dangling pointers point to freed or out-of-scope memory. Wild pointers are uninitialized. Both cause undefined behavior when dereferenced.
- Void pointers (void*) can point to any type but must be cast before dereferencing. Modern C++ prefers templates over void pointers.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/pointers-in-cpp/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/pointers-in-cpp/practice/*
