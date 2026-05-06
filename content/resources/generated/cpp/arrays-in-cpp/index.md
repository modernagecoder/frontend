---
title: "Arrays & Multidimensional Arrays in C++ - Declaration, Sorting, Searching, 2D Arrays | Modern Age Coders"
description: "Master C++ arrays: 1D and 2D array declaration, sizeof with arrays, passing arrays to functions, linear search, binary search, bubble sort, selection sort, insertion sort, reverse, max/min, and vector preview. 60 practice questions."
slug: arrays-in-cpp
canonical: https://learn.modernagecoders.com/resources/cpp/arrays-in-cpp
category: "C++"
keywords: ["c++ arrays", "2d array c++", "array sorting c++", "binary search c++", "bubble sort c++", "selection sort c++", "insertion sort c++", "passing array to function c++", "sizeof array c++", "array vs vector c++"]
---
# Arrays and Multidimensional Arrays

**Difficulty:** Intermediate  
**Reading time:** 30 min  
**Chapter:** 9  
**Practice questions:** 59

## What Are Arrays in C++?

An **array** is a contiguous block of memory that stores multiple elements of the same data type. When you declare `int arr[5];`, the compiler allocates 5 consecutive `int`-sized slots (20 bytes total on most systems) in memory. Each element is accessed by its **index**, starting from 0. So `arr[0]` is the first element and `arr[4]` is the last.

Arrays are the most fundamental data structure in computer science. Virtually every algorithm -- sorting, searching, dynamic programming, graph traversal -- operates on arrays. Understanding how arrays work in memory (contiguous allocation, pointer decay, bounds) is essential for both competitive programming and systems-level interviews.

### Array Properties

PropertyDetailDeclaration`int arr[N];` or `int arr[] = {1, 2, 3};`Index range0 to N-1 (0-indexed)Memory layoutContiguous (elements are adjacent in memory)SizeFixed at compile time (for static arrays)sizeof(arr)Total bytes = sizeof(element) * number of elementsAccess timeO(1) for any index (random access)Passed to functions asPointer (decays to pointer to first element)

## Why Are Arrays Critical?

### 1. Foundation of Data Structures

Vectors, stacks, queues, heaps, hash tables, and even strings are built on arrays internally. Understanding raw arrays means understanding how these higher-level structures work under the hood. When an interviewer asks "what is the time complexity of push_back in vector?", the answer involves understanding array reallocation.

### 2. Competitive Programming

Almost every CP problem involves arrays. Sorting, prefix sums, two-pointer technique, sliding window, binary search on sorted arrays -- these are all array-based algorithms. Global arrays of size 10^7 are common in CP (they go in the data segment, not the stack).

### 3. Interview Algorithms

The classic interview problems are array problems: find the maximum subarray (Kadane's), two sum, merge two sorted arrays, rotate an array, find duplicates, and sort without extra space. Interviewers expect you to think in terms of array indices, bounds, and in-place operations.

### 4. Memory Understanding

Arrays teach you about contiguous memory, cache locality (why iterating sequentially is fast), stack vs heap allocation, and pointer arithmetic. This understanding transfers to C, systems programming, and embedded development.

## Detailed Explanation

### 1D Array Declaration and Initialization

There are several ways to declare and initialize arrays:

- `int arr[5];` -- uninitialized (contains garbage values for local arrays).
- `int arr[5] = {1, 2, 3, 4, 5};` -- fully initialized.
- `int arr[5] = {1, 2};` -- partially initialized: first two are 1 and 2, rest are 0.
- `int arr[5] = {0};` -- all elements initialized to 0.
- `int arr[] = {1, 2, 3};` -- compiler deduces size as 3.
- `int arr[5] = {};` -- all elements initialized to 0 (C++11).

Global arrays and static arrays are automatically initialized to 0. Local (stack) arrays are NOT initialized and contain garbage.

### sizeof with Arrays

`sizeof(arr)` returns the total bytes occupied by the array. To get the number of elements: `sizeof(arr) / sizeof(arr[0])`. This works ONLY when `arr` is the actual array, not a pointer. When an array is passed to a function, it decays to a pointer, and `sizeof` gives the pointer size (8 bytes on 64-bit), not the array size.

### Passing Arrays to Functions

When you pass an array to a function, it **decays to a pointer** to the first element. The function receives a pointer, not a copy of the array. This means:

- The function can modify the original array (no copy is made).
- `sizeof` inside the function gives the pointer size, not the array size.
- You must pass the size as a separate parameter.

Function signature options: `void f(int arr[], int n)`, `void f(int* arr, int n)`, or `void f(int (&arr)[5])` (reference to array of fixed size).

### 2D Arrays

A 2D array is an array of arrays. `int mat[3][4];` creates a 3-row, 4-column matrix. In memory, it is stored **row-major**: all elements of row 0 are stored first, then row 1, then row 2. Access: `mat[i][j]` gives the element at row i, column j.

When passing a 2D array to a function, you must specify the column count: `void f(int arr[][4], int rows)`. The number of columns is needed for the compiler to calculate memory offsets.

### Common Array Algorithms

**Linear Search:** O(n) -- scan each element until found. Works on unsorted arrays.

**Binary Search:** O(log n) -- repeatedly halve the search range. Requires a sorted array.

**Bubble Sort:** O(n^2) -- repeatedly swap adjacent elements if out of order. Simple but slow.

**Selection Sort:** O(n^2) -- find the minimum in the unsorted portion and place it at the beginning.

**Insertion Sort:** O(n^2) -- insert each element into its correct position in the sorted portion. Best for nearly sorted data.

**Reverse:** O(n) -- swap elements from both ends moving toward the center.

**Max/Min:** O(n) -- single pass with a running maximum or minimum.

### Array vs Vector (Preview)

FeatureArrayvectorSizeFixed at compile timeDynamic (grows/shrinks)Bounds checkingNone (undefined behavior)`at()` throws exceptionsizeofTotal array bytesAlways 24 bytes (internal struct)Passing to functionDecays to pointerPassed by value (copy) or referenceMemoryStack (local) or data segment (global)Heap (dynamic)Use caseFixed-size, performance-criticalGeneral purpose, flexible

## Code Examples

### Array Declaration, Initialization, and sizeof

```cpp
#include <iostream>
using namespace std;

int main() {
    // Different initialization styles
    int a[5] = {10, 20, 30, 40, 50};
    int b[5] = {1, 2};       // b = {1, 2, 0, 0, 0}
    int c[5] = {0};           // c = {0, 0, 0, 0, 0}
    int d[] = {7, 8, 9};      // Compiler deduces size = 3

    // Print array a
    cout << "Array a: ";
    for (int i = 0; i < 5; i++) {
        cout << a[i] << " ";
    }
    cout << endl;

    // Print array b (partially initialized)
    cout << "Array b: ";
    for (int i = 0; i < 5; i++) {
        cout << b[i] << " ";
    }
    cout << endl;

    // sizeof trick for array length
    int n = sizeof(d) / sizeof(d[0]);
    cout << "sizeof(d) = " << sizeof(d) << " bytes" << endl;
    cout << "Number of elements in d: " << n << endl;

    // Range-based for loop (C++11)
    cout << "Array d: ";
    for (int x : d) {
        cout << x << " ";
    }
    cout << endl;

    return 0;
}
```

Partial initialization fills remaining elements with 0. `sizeof(d) / sizeof(d[0])` gives the number of elements (12 bytes / 4 bytes = 3). Range-based for loops provide a cleaner iteration syntax. Note: `int c[5] = {0}` initializes ALL elements to 0, not just the first.

**Output:**

```
Array a: 10 20 30 40 50
Array b: 1 2 0 0 0
sizeof(d) = 12 bytes
Number of elements in d: 3
Array d: 7 8 9
```

### Passing Arrays to Functions (Pointer Decay)

```cpp
#include <iostream>
using namespace std;

// Array decays to pointer -- sizeof gives pointer size, not array size
void printArray(int arr[], int n) {
    cout << "Inside function, sizeof(arr) = " << sizeof(arr) << endl;  // 8 (pointer)
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

// Modifying array in function affects original
void doubleElements(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        arr[i] *= 2;
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);

    cout << "In main, sizeof(arr) = " << sizeof(arr) << endl;  // 20 (5 * 4)
    printArray(arr, n);

    doubleElements(arr, n);
    cout << "After doubling: ";
    printArray(arr, n);

    return 0;
}
```

When passed to a function, an array decays to a pointer to its first element. `sizeof(arr)` in main gives 20 (5 ints * 4 bytes), but inside the function it gives 8 (pointer size on 64-bit). Since the function receives a pointer to the original array, modifications persist -- no copy is made.

**Output:**

```
In main, sizeof(arr) = 20
Inside function, sizeof(arr) = 8
1 2 3 4 5
Inside function, sizeof(arr) = 8
2 4 6 8 10
After doubling: Inside function, sizeof(arr) = 8
2 4 6 8 10
```

### 2D Array Declaration and Traversal

```cpp
#include <iostream>
using namespace std;

void printMatrix(int mat[][4], int rows) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < 4; j++) {
            cout << mat[i][j] << "\t";
        }
        cout << endl;
    }
}

int main() {
    // 2D array: 3 rows, 4 columns
    int mat[3][4] = {
        {1,  2,  3,  4},
        {5,  6,  7,  8},
        {9, 10, 11, 12}
    };

    cout << "Matrix:" << endl;
    printMatrix(mat, 3);

    // Accessing specific element
    cout << "mat[1][2] = " << mat[1][2] << endl;  // Row 1, Col 2 = 7

    // Row sum
    for (int i = 0; i < 3; i++) {
        int rowSum = 0;
        for (int j = 0; j < 4; j++) {
            rowSum += mat[i][j];
        }
        cout << "Row " << i << " sum: " << rowSum << endl;
    }

    // sizeof 2D array
    cout << "sizeof(mat) = " << sizeof(mat) << " bytes" << endl;  // 48 = 3*4*4

    return 0;
}
```

A 2D array `int mat[3][4]` has 3 rows and 4 columns (12 elements, 48 bytes). In memory, it is stored row-major. When passing to a function, the column dimension (4) must be specified: `int mat[][4]`. The row dimension can be omitted but must be passed as a parameter.

**Output:**

```
Matrix:
1	2	3	4
5	6	7	8
9	10	11	12
mat[1][2] = 7
Row 0 sum: 10
Row 1 sum: 26
Row 2 sum: 42
sizeof(mat) = 48 bytes
```

### Linear Search and Binary Search

```cpp
#include <iostream>
using namespace std;

int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}

int binarySearch(int arr[], int n, int target) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;  // Avoids overflow
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

int main() {
    int arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target = 23;

    // Linear search
    int idx1 = linearSearch(arr, n, target);
    cout << "Linear search: " << target << " found at index " << idx1 << endl;

    // Binary search (array must be sorted)
    int idx2 = binarySearch(arr, n, target);
    cout << "Binary search: " << target << " found at index " << idx2 << endl;

    // Search for element not present
    int idx3 = binarySearch(arr, n, 100);
    cout << "Binary search for 100: " << idx3 << " (not found)" << endl;

    return 0;
}
```

Linear search scans every element -- O(n). Binary search halves the range each step -- O(log n) but requires sorted input. The formula `mid = low + (high - low) / 2` prevents integer overflow that can happen with `(low + high) / 2` when low and high are large.

**Output:**

```
Linear search: 23 found at index 5
Binary search: 23 found at index 5
Binary search for 100: -1 (not found)
```

### Bubble Sort, Selection Sort, and Insertion Sort

```cpp
#include <iostream>
using namespace std;

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        bool swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        if (!swapped) break;  // Optimization: already sorted
    }
}

void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        swap(arr[i], arr[minIdx]);
    }
}

void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

void printArr(int arr[], int n) {
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;
}

int main() {
    int a[] = {64, 25, 12, 22, 11};
    int n = 5;

    int b[5], c[5];
    for (int i = 0; i < n; i++) b[i] = c[i] = a[i];

    bubbleSort(a, n);
    cout << "Bubble sort:    "; printArr(a, n);

    selectionSort(b, n);
    cout << "Selection sort: "; printArr(b, n);

    insertionSort(c, n);
    cout << "Insertion sort: "; printArr(c, n);

    return 0;
}
```

All three sorts are O(n^2). **Bubble sort** repeatedly swaps adjacent out-of-order pairs. The `swapped` optimization exits early if no swaps occurred. **Selection sort** finds the minimum and places it at the front. **Insertion sort** inserts each element into its correct position -- it is the best of the three for nearly sorted data (O(n) best case).

**Output:**

```
Bubble sort:    11 12 22 25 64
Selection sort: 11 12 22 25 64
Insertion sort: 11 12 22 25 64
```

### Reverse Array and Find Max/Min

```cpp
#include <iostream>
#include <climits>
using namespace std;

void reverseArray(int arr[], int n) {
    int left = 0, right = n - 1;
    while (left < right) {
        swap(arr[left], arr[right]);
        left++;
        right--;
    }
}

int findMax(int arr[], int n) {
    int maxVal = INT_MIN;
    for (int i = 0; i < n; i++) {
        if (arr[i] > maxVal) maxVal = arr[i];
    }
    return maxVal;
}

int findMin(int arr[], int n) {
    int minVal = INT_MAX;
    for (int i = 0; i < n; i++) {
        if (arr[i] < minVal) minVal = arr[i];
    }
    return minVal;
}

int main() {
    int arr[] = {3, 7, 1, 9, 4, 6, 2, 8, 5};
    int n = sizeof(arr) / sizeof(arr[0]);

    cout << "Original: ";
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;

    cout << "Max: " << findMax(arr, n) << endl;
    cout << "Min: " << findMin(arr, n) << endl;

    reverseArray(arr, n);
    cout << "Reversed: ";
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;

    return 0;
}
```

Reverse uses the two-pointer technique: swap elements at both ends and move inward. O(n/2) = O(n). Max/min use a single pass with `INT_MIN`/`INT_MAX` as initial values from ``. Initializing max to `INT_MIN` ensures any array element is larger.

**Output:**

```
Original: 3 7 1 9 4 6 2 8 5
Max: 9
Min: 1
Reversed: 5 8 2 6 4 9 1 7 3
```

### Array vs Vector Preview

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    // Static array: fixed size
    int arr[5] = {1, 2, 3, 4, 5};

    // Vector: dynamic size
    vector<int> vec = {1, 2, 3, 4, 5};
    vec.push_back(6);   // Can grow!
    vec.push_back(7);

    cout << "Array (fixed 5): ";
    for (int i = 0; i < 5; i++) cout << arr[i] << " ";
    cout << endl;

    cout << "Vector (grew to " << vec.size() << "): ";
    for (int x : vec) cout << x << " ";
    cout << endl;

    // sizeof comparison
    cout << "sizeof(arr): " << sizeof(arr) << " bytes" << endl;   // 20
    cout << "sizeof(vec): " << sizeof(vec) << " bytes" << endl;   // 24 (internal struct)

    // Bounds checking
    // arr[10] -- no error, undefined behavior!
    // vec.at(10) -- throws out_of_range exception

    return 0;
}
```

Vectors are dynamic arrays from the STL. They can grow with `push_back()`, provide `size()`, and offer bounds-checked access with `at()`. `sizeof(vec)` is always 24 bytes (the internal struct has a pointer, size, and capacity) regardless of how many elements it holds. The actual data is on the heap.

**Output:**

```
Array (fixed 5): 1 2 3 4 5
Vector (grew to 7): 1 2 3 4 5 6 7
sizeof(arr): 20 bytes
sizeof(vec): 24 bytes
```

## Common Mistakes

### Array Out-of-Bounds Access (No Error, Undefined Behavior)

**Wrong:**

```
#include <iostream>
using namespace std;
int main() {
    int arr[3] = {10, 20, 30};
    cout << arr[5] << endl;  // No error, but garbage!
    arr[5] = 99;             // Writes to random memory!
    return 0;
}
```

No compiler error or runtime error. Prints garbage value. Writing to arr[5] corrupts memory silently.

**Correct:**

```
#include <iostream>
using namespace std;
int main() {
    int arr[3] = {10, 20, 30};
    int n = 3;
    // Always check bounds
    int idx = 5;
    if (idx >= 0 && idx < n) {
        cout << arr[idx] << endl;
    } else {
        cout << "Index out of bounds!" << endl;
    }
    return 0;
}
```

C++ does NOT check array bounds. Accessing `arr[5]` when the array has 3 elements is **undefined behavior** -- it reads/writes memory that does not belong to the array. This can corrupt other variables, cause crashes, or produce wrong results silently. Always validate indices.

### Using sizeof on Array Parameter (Pointer Decay)

**Wrong:**

```
#include <iostream>
using namespace std;
void printSize(int arr[]) {
    int n = sizeof(arr) / sizeof(arr[0]);  // WRONG: sizeof(pointer)/4 = 2
    cout << "Size: " << n << endl;
}
int main() {
    int arr[] = {1, 2, 3, 4, 5};
    printSize(arr);
    return 0;
}
```

Prints 2 (on 64-bit: sizeof(pointer)=8, 8/4=2) instead of 5. sizeof gives pointer size, not array size.

**Correct:**

```
#include <iostream>
using namespace std;
void printSize(int arr[], int n) {
    cout << "Size: " << n << endl;
}
int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    printSize(arr, n);
    return 0;
}
```

When an array is passed to a function, it decays to a pointer. `sizeof(arr)` inside the function gives the pointer size (8 bytes on 64-bit), not the array size. Always pass the array size as a separate parameter.

### Forgetting to Initialize Local Arrays

**Wrong:**

```
#include <iostream>
using namespace std;
int main() {
    int arr[5];
    int sum = 0;
    for (int i = 0; i < 5; i++) {
        sum += arr[i];  // arr[i] is garbage!
    }
    cout << "Sum: " << sum << endl;
    return 0;
}
```

Sum is unpredictable garbage. Local arrays are not initialized to 0.

**Correct:**

```
#include <iostream>
using namespace std;
int main() {
    int arr[5] = {0};  // Initialize all to 0
    int sum = 0;
    for (int i = 0; i < 5; i++) {
        sum += arr[i];
    }
    cout << "Sum: " << sum << endl;  // 0
    return 0;
}
```

Local (stack) arrays are NOT initialized in C++. They contain whatever was previously in that memory. Use `= {0}` to zero-initialize. Global arrays ARE automatically initialized to 0. In competitive programming, global arrays are preferred for this reason (and to avoid stack overflow for large arrays).

### Stack Overflow with Large Local Arrays

**Wrong:**

```
#include <iostream>
using namespace std;
int main() {
    int arr[10000000];  // 40 MB on stack -- CRASH!
    arr[0] = 1;
    cout << arr[0] << endl;
    return 0;
}
```

Segmentation fault or stack overflow. Default stack size is ~1-8 MB.

**Correct:**

```
#include <iostream>
using namespace std;

int arr[10000000];  // Global: goes in data segment, not stack

int main() {
    arr[0] = 1;
    cout << arr[0] << endl;
    return 0;
}
```

The default stack size is typically 1-8 MB. A 10 million int array needs 40 MB -- far exceeding the stack. Declare large arrays as **global** (outside main) or use `static`. Global arrays go in the data segment (which can be much larger) and are auto-initialized to 0.

## Summary

- An array is a contiguous block of same-type elements accessed by index (0-based). int arr[5] allocates 5 ints = 20 bytes.
- Initialization: int arr[5] = {1, 2} fills remaining with 0. int arr[5] = {0} zeros all. int arr[] = {1,2,3} deduces size 3.
- sizeof(arr) / sizeof(arr[0]) gives element count, but ONLY in the scope where arr is declared. In functions, arrays decay to pointers.
- Passing arrays to functions passes a pointer -- the function can modify the original. Always pass size as a separate parameter.
- 2D arrays: int mat[3][4] is 3 rows, 4 columns, stored row-major. When passing to functions, column dimension must be specified.
- Linear search is O(n) for unsorted arrays. Binary search is O(log n) for sorted arrays. Use mid = low + (high-low)/2 to avoid overflow.
- Bubble sort, selection sort, insertion sort are all O(n^2). Insertion sort is best for nearly sorted data. Use STL sort() for O(n log n).
- Reverse an array using two pointers from both ends. Find max/min with a single pass using INT_MIN/INT_MAX initial values.
- Local arrays are uninitialized (garbage). Global arrays are zero-initialized. Large arrays (>10^5) should be global to avoid stack overflow.
- vector is the dynamic alternative to arrays: it can grow, provides size(), and offers bounds-checked at() access.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/arrays-in-cpp/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/arrays-in-cpp/practice/*
