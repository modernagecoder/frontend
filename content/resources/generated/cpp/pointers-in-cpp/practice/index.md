---
title: "Practice: Pointers and References in C++"
description: "60 practice problems for Pointers and References in C++ in C++"
slug: pointers-in-cpp-practice
canonical: https://learn.modernagecoders.com/resources/cpp/pointers-in-cpp/practice/
category: "C++"
---
# Practice: Pointers and References in C++

**Total questions:** 60

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
int x = 10;
int* p = &x;
cout << *p;
```

*Hint:* The dereference operator (*) accesses the value at the address stored in the pointer.

**Answer:** `10`

`p` stores the address of `x`. `*p` dereferences the pointer to get the value at that address, which is 10.

### Q2. [Easy] What is the output?

```
int a = 5;
int* p = &a;
*p = 15;
cout << a;
```

*Hint:* Modifying *p modifies the variable that p points to.

**Answer:** `15`

`*p = 15` writes 15 to the memory location that `p` points to, which is `a`. So `a` becomes 15.

### Q3. [Easy] What is the output?

```
int arr[] = {10, 20, 30};
cout << *arr;
```

*Hint:* An array name decays to a pointer to its first element.

**Answer:** `10`

`arr` decays to a pointer to the first element (`&arr[0]`). Dereferencing it with `*arr` gives the value of the first element, which is 10.

### Q4. [Easy] What is the output?

```
int x = 100;
int& ref = x;
ref = 200;
cout << x;
```

*Hint:* A reference is an alias for the original variable.

**Answer:** `200`

`ref` is an alias for `x`. Assigning `ref = 200` directly modifies `x`. No dereferencing is needed with references.

### Q5. [Easy] What is the output?

```
int* p = nullptr;
if (p == nullptr)
    cout << "null";
else
    cout << *p;
```

*Hint:* nullptr means the pointer does not point to valid memory.

**Answer:** `null`

`p` is initialized to `nullptr`. The condition `p == nullptr` is true, so "null" is printed. The else branch (which would crash) is not executed.

### Q6. [Medium] What is the output?

```
int arr[] = {10, 20, 30, 40, 50};
int* p = arr;
p += 2;
cout << *p << endl;
cout << *(p + 1) << endl;
cout << p[-1] << endl;
```

*Hint:* p += 2 advances the pointer by 2 elements. p[-1] is equivalent to *(p - 1).

**Answer:** `30`
`40`
`20`

`p += 2` moves the pointer to `arr[2]` (value 30). `*(p + 1)` accesses `arr[3]` (40). `p[-1]` is `*(p - 1)` which accesses `arr[1]` (20).

### Q7. [Medium] What is the output?

```
int x = 5;
int* p = &x;
int** pp = &p;

cout << **pp << endl;
**pp = 25;
cout << x << endl;
```

*Hint:* A pointer to pointer requires double dereferencing to reach the final value.

**Answer:** `5`
`25`

`**pp` dereferences twice: `pp -> p -> x`, giving 5. `**pp = 25` writes 25 to `x` through two levels of indirection. So `x` becomes 25.

### Q8. [Medium] What is the output?

```
void modify(int* p) {
    *p = *p + 10;
}

int x = 5;
modify(&x);
cout << x;
```

*Hint:* The function receives a pointer to x and modifies the value at that address.

**Answer:** `15`

The function receives the address of `x`. Inside the function, `*p = *p + 10` reads the value (5), adds 10, and writes 15 back. Since the function modifies the original memory, `x` is now 15.

### Q9. [Medium] What is the output?

```
int arr[] = {1, 2, 3, 4, 5};
int* p = arr + 4;
cout << *p << endl;
cout << p - arr << endl;
```

*Hint:* Pointer subtraction gives the number of elements between two addresses.

**Answer:** `5`
`4`

`arr + 4` points to `arr[4]` (value 5). `p - arr` computes the number of elements between the two pointers, which is 4 (not the byte difference).

### Q10. [Hard] What is the output?

```
int arr[] = {10, 20, 30, 40};
int* p = arr;
int* q = arr + 3;

cout << *p + *q << endl;
cout << *(p + 1) + *(q - 1) << endl;
cout << q - p << endl;
```

*Hint:* p points to arr[0], q points to arr[3]. Compute each expression carefully.

**Answer:** `50`
`50`
`3`

`*p` is 10, `*q` is 40, sum is 50. `*(p+1)` is 20, `*(q-1)` is 30, sum is 50. `q - p` is the number of elements between them: 3.

### Q11. [Hard] What is the output?

```
char str[] = "Hello";
char* p = str;
while (*p != '\0') {
    cout << *p;
    p++;
}
cout << endl;
cout << p - str;
```

*Hint:* The pointer traverses the string character by character until the null terminator.

**Answer:** `Hello`
`5`

The loop prints each character of "Hello" by advancing the pointer. After the loop, `p` points to the null terminator at index 5. `p - str` gives 5 (the length of the string).

### Q12. [Hard] What is the output?

```
int x = 10, y = 20;
const int* p = &x;
cout << *p << endl;
p = &y;
cout << *p << endl;
// *p = 30;  // Would this compile?
```

*Hint:* const int* means the value is read-only through the pointer, but the pointer can be reassigned.

**Answer:** `10`
`20`
(The commented line would NOT compile: cannot modify value through pointer to const)

`const int* p` means you cannot modify the value through `p`. But you can change what `p` points to. So `p = &y` is valid, but `*p = 30` would fail.

### Q13. [Hard] What is the output?

```
int arr[] = {5, 10, 15, 20, 25};
int* p = arr;

cout << *p++ << endl;
cout << *p << endl;
cout << *++p << endl;
cout << ++*p << endl;
```

*Hint:* *p++ dereferences first then increments the pointer. *++p increments the pointer first then dereferences. ++*p increments the value.

**Answer:** `5`
`10`
`15`
`16`

`*p++`: post-increment -- dereferences p (gets 5), then advances p to arr[1]. `*p`: p is now at arr[1], so 10. `*++p`: pre-increment -- advances p to arr[2] first, then dereferences (15). `++*p`: dereferences p (arr[2] = 15), then increments the value to 16.

## Mixed Questions

### Q1. [Easy] What is the output?

```
int a = 3, b = 7;
int* p = &a;
int* q = &b;
cout << *p + *q;
```

*Hint:* Dereference both pointers and add the values.

**Answer:** `10`

`*p` gives 3 (value of a), `*q` gives 7 (value of b). Their sum is 10.

### Q2. [Easy] What is the output?

```
int x = 10;
int* p = &x;
int& ref = x;
*p = 20;
cout << ref;
```

*Hint:* Both the pointer and the reference point to the same variable x.

**Answer:** `20`

Both `p` and `ref` refer to `x`. `*p = 20` changes x to 20. Since `ref` is an alias for x, it reads the updated value 20.

### Q3. [Easy] What is the difference between a null pointer and a wild pointer?

*Hint:* One is intentionally set to nothing; the other was never set at all.

**Answer:** A **null pointer** is explicitly set to `nullptr` -- it points to nothing and can be safely checked. A **wild pointer** is an uninitialized pointer that contains a garbage address. Dereferencing either is undefined behavior, but a null pointer can be checked (`if (p != nullptr)`), while a wild pointer gives no indication that it is invalid.

Always initialize pointers. If you do not have a valid address yet, set the pointer to `nullptr`. An uninitialized pointer may contain any address, and dereferencing it can corrupt memory or crash the program unpredictably.

### Q4. [Medium] What is the output?

```
int arr[] = {2, 4, 6, 8};
int* p = arr;
int sum = 0;
for (int i = 0; i < 4; i++) {
    sum += *(p + i);
}
cout << sum;
```

*Hint:* *(p + i) accesses each element of the array through the pointer.

**Answer:** `20`

The loop adds `*(p+0)`=2, `*(p+1)`=4, `*(p+2)`=6, `*(p+3)`=8. Total: 2 + 4 + 6 + 8 = 20.

### Q5. [Medium] What is the output?

```
void changePointer(int** pp, int* newAddr) {
    *pp = newAddr;
}

int a = 10, b = 20;
int* p = &a;
cout << *p << endl;
changePointer(&p, &b);
cout << *p << endl;
```

*Hint:* The function receives a pointer to pointer and changes what the original pointer points to.

**Answer:** `10`
`20`

Initially `p` points to `a` (10). `changePointer` receives `&p` and changes `*pp` (which is `p`) to `&b`. After the call, `p` points to `b` (20).

### Q6. [Medium] When should you use a pointer instead of a reference in C++?

*Hint:* Think about null values, reassignment, and dynamic memory.

**Answer:** Use pointers when: (1) the target might be null/optional, (2) you need to reassign to different objects during the lifetime, (3) you need pointer arithmetic, (4) you are working with `new`/`delete` (dynamic memory). Use references when: (1) the target is always valid, (2) you want cleaner syntax without `*` and `&`, (3) you are passing function parameters for modification.

References are safer (cannot be null, cannot dangle as easily) and cleaner (no dereferencing syntax). Pointers are more flexible (nullable, reassignable, support arithmetic). In modern C++, prefer references for function parameters and use smart pointers instead of raw pointers for heap memory.

### Q7. [Hard] What is the output?

```
int x = 5;
int* p = &x;
int** pp = &p;
int*** ppp = &pp;

cout << ***ppp << endl;
***ppp = 99;
cout << x << endl;
```

*Hint:* Three levels of indirection. Dereference three times to reach x.

**Answer:** `5`
`99`

`***ppp` dereferences three times: `ppp -> pp -> p -> x` = 5. `***ppp = 99` writes 99 to `x` through three levels. So `x` becomes 99.

### Q8. [Hard] What is the output?

```
int a = 10, b = 20, c = 30;
int* arr[] = {&a, &b, &c};
int** p = arr;

cout << **p << endl;
p++;
cout << **p << endl;
cout << **(p + 1) << endl;
```

*Hint:* arr is an array of pointers. p is a pointer to the first element of that array.

**Answer:** `10`
`20`
`30`

`arr` is an array of `int*`. `p` points to `arr[0]`. `**p` = `*arr[0]` = `*(&a)` = 10. After `p++`, p points to `arr[1]`. `**p` = `*(&b)` = 20. `**(p+1)` = `*arr[2]` = `*(&c)` = 30.

### Q9. [Hard] What is the output?

```
void mystery(int* a, int& b) {
    *a += b;
    b += *a;
}

int x = 3, y = 4;
mystery(&x, y);
cout << x << " " << y;
```

*Hint:* Both a and &b refer to the original variables. Trace the operations step by step.

**Answer:** `7 11`

Inside mystery: `*a` is `x` and `b` is `y`. `*a += b`: x = 3 + 4 = 7. `b += *a`: y = 4 + 7 = 11. After the call: x = 7, y = 11.

## Multiple Choice Questions

### Q1. [Easy] What does the & operator do when used with a variable?

**Answer:** B

**B is correct.** The `&` operator, when used as a unary operator with a variable (e.g., `&x`), returns its memory address. In declarations like `int& ref = x`, it creates a reference (D), but the question asks about using it with an existing variable.

### Q2. [Easy] What is the correct way to declare a pointer to an integer in C++?

**Answer:** B

**B is correct.** `int *p;` (or `int* p;`) declares a pointer to an integer. `int p;` (A) declares a regular integer. `pointer int p;` (C) is not valid C++ syntax. `int &p;` (D) declares a reference, which must be initialized.

### Q3. [Easy] What value should an uninitialized pointer be set to in modern C++?

**Answer:** C

**C is correct.** `nullptr` (C++11) is the type-safe null pointer constant. `NULL` (B) and `0` (A) work but are not type-safe -- they can be confused with integers. `void` (D) is a type, not a value.

### Q4. [Easy] What is the output of sizeof(int*) on a 64-bit system?

**Answer:** B

**B is correct.** On a 64-bit system, all pointers are 8 bytes because they must be able to address the entire 64-bit address space. The size of a pointer does not depend on the type it points to -- `int*`, `double*`, and `char*` are all 8 bytes on 64-bit.

### Q5. [Easy] Which statement about references in C++ is true?

**Answer:** C

**C is correct.** A reference must be initialized at declaration and cannot be null (A is false) or reassigned to another variable (B is false). References are accessed directly without any dereference operator (D is false).

### Q6. [Medium] What does the expression arr[i] internally translate to in C++?

**Answer:** B

**B is correct.** Array subscript `arr[i]` is syntactic sugar for `*(arr + i)`. The array name decays to a pointer to the first element, pointer arithmetic computes the address of the i-th element, and the dereference operator accesses the value.

### Q7. [Medium] What is the difference between const int* p and int* const p?

**Answer:** B

**B is correct.** `const int* p`: the value pointed to is const (cannot do *p = ...). `int* const p`: the pointer itself is const (cannot do p = ...). Read right-to-left: 'p is a const pointer to int' vs 'p is a pointer to const int'.

### Q8. [Medium] What happens when you increment a pointer of type double*?

**Answer:** C

**C is correct.** Pointer arithmetic is type-aware. Incrementing a `double*` advances the address by `sizeof(double)`, which is 8 bytes. This ensures the pointer moves to the next element in a double array.

### Q9. [Medium] What is a dangling pointer?

**Answer:** B

**B is correct.** A dangling pointer points to memory that has been deallocated (via delete) or has gone out of scope (local variable of a returned function). A null pointer (A) is safe to check. An uninitialized pointer (C) is called a wild pointer. A pointer to const (D) is perfectly valid.

### Q10. [Hard] What is the output?

```
int arr[] = {1, 2, 3};
cout << 2[arr];
```

**Answer:** C

**C is correct.** `2[arr]` is valid C++. Since `arr[i]` is `*(arr + i)`, and addition is commutative, `2[arr]` is `*(2 + arr)` = `*(arr + 2)` = `arr[2]` = 3.

### Q11. [Hard] Which of the following is NOT possible with references in C++?

**Answer:** A

**A is correct.** C++ does not allow arrays of references because references are not objects -- they do not have their own address or size. You can pass by reference (B), return references (C), and use reference members in classes (D, but they must be initialized in the constructor initializer list).

### Q12. [Hard] What is the result of subtracting two pointers of the same type?

**Answer:** B

**B is correct.** Subtracting two pointers of the same type yields a `ptrdiff_t` value representing the number of elements between them, not the byte difference. For `int*` where int is 4 bytes, if p2 - p1 = 3, the byte difference is 12 but the result is 3.

### Q13. [Hard] What is wrong with this code?

```
void* vp = new int(10);
cout << *vp;
```

**Answer:** C

**C is correct.** A `void*` can hold any address (A is false), and `new int(10)` is valid (B is false). However, you cannot dereference a `void*` because the compiler does not know the size of the data. You must cast it first: `*(static_cast<int*>(vp))`.

### Q14. [Medium] What happens if you use delete instead of delete[] on an array allocated with new[]?

**Answer:** C

**C is correct.** Using `delete` on memory allocated with `new[]` is undefined behavior. The runtime may not call destructors for all elements and may corrupt internal bookkeeping. Always match `new` with `delete` and `new[]` with `delete[]`.

## Coding Challenges

### Challenge 1. Reverse Array Using Pointers

**Difficulty:** Easy

Write a function reverseArray(int* arr, int size) that reverses an array in-place using pointer arithmetic (no indexing with []). Print the array before and after reversing.

**Constraints:**

- Use only pointer arithmetic and dereferencing. Do not use array subscript operator [].

**Sample input:**

```
Array: {1, 2, 3, 4, 5}
```

**Sample output:**

```
Before: 1 2 3 4 5
After: 5 4 3 2 1
```

**Solution:**

```cpp
#include <iostream>
using namespace std;

void reverseArray(int* arr, int size) {
    int* left = arr;
    int* right = arr + size - 1;
    while (left < right) {
        int temp = *left;
        *left = *right;
        *right = temp;
        left++;
        right--;
    }
}

void printArray(int* arr, int size) {
    for (int* p = arr; p < arr + size; p++) {
        cout << *p << " ";
    }
    cout << endl;
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int size = 5;
    cout << "Before: ";
    printArray(arr, size);
    reverseArray(arr, size);
    cout << "After: ";
    printArray(arr, size);
    return 0;
}
```

### Challenge 2. String Length Using Pointers

**Difficulty:** Easy

Write a function int strLen(const char* str) that returns the length of a C-string using pointer arithmetic. Do not use strlen().

**Constraints:**

- Use a pointer to traverse until the null terminator. Do not use any library function.

**Sample input:**

```
"Modern Age Coders"
```

**Sample output:**

```
Length: 17
```

**Solution:**

```cpp
#include <iostream>
using namespace std;

int strLen(const char* str) {
    const char* p = str;
    while (*p != '\0') {
        p++;
    }
    return p - str;
}

int main() {
    const char* s = "Modern Age Coders";
    cout << "Length: " << strLen(s) << endl;

    const char* empty = "";
    cout << "Length of empty: " << strLen(empty) << endl;
    return 0;
}
```

### Challenge 3. Swap Two Pointers

**Difficulty:** Medium

Write a function that takes two int** parameters and swaps what the original pointers point to. After the swap, the first pointer should point to the second variable and vice versa.

**Constraints:**

- The function must modify the original pointers using pointer-to-pointer. The values of a and b must NOT change.

**Sample input:**

```
a = 10, b = 20, p1 = &a, p2 = &b
```

**Sample output:**

```
Before: *p1=10, *p2=20
After: *p1=20, *p2=10
```

**Solution:**

```cpp
#include <iostream>
using namespace std;

void swapPointers(int** pp1, int** pp2) {
    int* temp = *pp1;
    *pp1 = *pp2;
    *pp2 = temp;
}

int main() {
    int a = 10, b = 20;
    int* p1 = &a;
    int* p2 = &b;

    cout << "Before: *p1=" << *p1 << ", *p2=" << *p2 << endl;
    swapPointers(&p1, &p2);
    cout << "After: *p1=" << *p1 << ", *p2=" << *p2 << endl;

    // Verify a and b are unchanged
    cout << "a=" << a << ", b=" << b << endl;
    return 0;
}
```

### Challenge 4. Find Min and Max Using Pointers

**Difficulty:** Medium

Write a function findMinMax(int* arr, int size, int* min, int* max) that finds the minimum and maximum values in an array and stores them through pointers. The function should not return anything.

**Constraints:**

- Use pointer parameters for output. Traverse the array using pointer arithmetic.

**Sample input:**

```
Array: {34, 12, 56, 7, 89, 23}
```

**Sample output:**

```
Min: 7
Max: 89
```

**Solution:**

```cpp
#include <iostream>
using namespace std;

void findMinMax(int* arr, int size, int* min, int* max) {
    *min = *arr;
    *max = *arr;
    for (int* p = arr + 1; p < arr + size; p++) {
        if (*p < *min) *min = *p;
        if (*p > *max) *max = *p;
    }
}

int main() {
    int arr[] = {34, 12, 56, 7, 89, 23};
    int min, max;
    findMinMax(arr, 6, &min, &max);
    cout << "Min: " << min << endl;
    cout << "Max: " << max << endl;
    return 0;
}
```

### Challenge 5. Dynamic Array -- Create, Fill, and Print

**Difficulty:** Hard

Write a program that asks the user for a size n, dynamically allocates an array of n integers, fills it with the first n squares (1, 4, 9, ...), prints the array using pointer arithmetic, and properly deallocates the memory.

**Constraints:**

- Use new[] to allocate, pointer arithmetic to fill and print, and delete[] to free. Do not use vector.

**Sample input:**

```
n = 5
```

**Sample output:**

```
Squares: 1 4 9 16 25
```

**Solution:**

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter size: ";
    cin >> n;

    int* arr = new int[n];

    // Fill using pointer arithmetic
    for (int* p = arr; p < arr + n; p++) {
        int idx = p - arr + 1;
        *p = idx * idx;
    }

    // Print using pointer arithmetic
    cout << "Squares: ";
    for (int* p = arr; p < arr + n; p++) {
        cout << *p << " ";
    }
    cout << endl;

    delete[] arr;
    arr = nullptr;
    return 0;
}
```

### Challenge 6. Matrix Transpose Using Dynamic 2D Array

**Difficulty:** Hard

Dynamically allocate a 3x3 matrix using an array of pointers (int**), fill it with values 1-9, transpose it, and print both the original and transposed matrices. Free all allocated memory.

**Constraints:**

- Use int** for the 2D array. Allocate rows with new int*[rows] and each row with new int[cols]. Free in reverse order.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Original:
1 2 3
4 5 6
7 8 9

Transposed:
1 4 7
2 5 8
3 6 9
```

**Solution:**

```cpp
#include <iostream>
using namespace std;

int main() {
    int rows = 3, cols = 3;

    // Allocate original matrix
    int** mat = new int*[rows];
    for (int i = 0; i < rows; i++)
        mat[i] = new int[cols];

    // Fill with 1-9
    int val = 1;
    for (int i = 0; i < rows; i++)
        for (int j = 0; j < cols; j++)
            mat[i][j] = val++;

    // Print original
    cout << "Original:" << endl;
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++)
            cout << mat[i][j] << " ";
        cout << endl;
    }

    // Allocate and compute transpose
    int** trans = new int*[cols];
    for (int i = 0; i < cols; i++)
        trans[i] = new int[rows];

    for (int i = 0; i < rows; i++)
        for (int j = 0; j < cols; j++)
            trans[j][i] = mat[i][j];

    // Print transpose
    cout << "\nTransposed:" << endl;
    for (int i = 0; i < cols; i++) {
        for (int j = 0; j < rows; j++)
            cout << trans[i][j] << " ";
        cout << endl;
    }

    // Free memory
    for (int i = 0; i < rows; i++) delete[] mat[i];
    delete[] mat;
    for (int i = 0; i < cols; i++) delete[] trans[i];
    delete[] trans;

    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/pointers-in-cpp/*
