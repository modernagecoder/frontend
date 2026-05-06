---
title: "Practice: Arrays and Multidimensional Arrays"
description: "59 practice problems for Arrays and Multidimensional Arrays in C++"
slug: arrays-in-cpp-practice
canonical: https://learn.modernagecoders.com/resources/cpp/arrays-in-cpp/practice/
category: "C++"
---
# Practice: Arrays and Multidimensional Arrays

**Total questions:** 59

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    cout << arr[0] << " " << arr[4] << endl;
    return 0;
}
```

*Hint:* Arrays are 0-indexed. arr[0] is first, arr[4] is last.

**Answer:** `10 50`

`arr[0]` is the first element (10), `arr[4]` is the last element (50). The array has indices 0 through 4.

### Q2. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    int arr[5] = {1, 2};
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    return 0;
}
```

*Hint:* Partial initialization fills remaining elements with 0.

**Answer:** `1 2 0 0 0`

The first two elements are initialized to 1 and 2. The remaining three are automatically initialized to 0 because partial initialization zero-fills the rest.

### Q3. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    int arr[] = {5, 10, 15, 20};
    cout << sizeof(arr) << endl;
    cout << sizeof(arr) / sizeof(arr[0]) << endl;
    return 0;
}
```

*Hint:* 4 ints * 4 bytes = 16 bytes. 16 / 4 = 4 elements.

**Answer:** `16`
`4`

The array has 4 ints, each 4 bytes, so `sizeof(arr)` is 16. Dividing by `sizeof(arr[0])` (4 bytes) gives the element count: 4.

### Q4. [Medium] What is the output?

```
#include 
using namespace std;
void func(int arr[]) {
    cout << sizeof(arr) << endl;
}
int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    cout << sizeof(arr) << endl;
    func(arr);
    return 0;
}
```

*Hint:* In the function, arr decays to a pointer.

**Answer:** `20`
`8`

In main, `sizeof(arr)` gives the total array size: 5*4=20 bytes. In the function, arr is a pointer, so `sizeof(arr)` gives the pointer size: 8 bytes (on 64-bit). This is the pointer decay trap.

### Q5. [Medium] What is the output?

```
#include 
using namespace std;
void modify(int arr[]) {
    arr[0] = 99;
}
int main() {
    int arr[] = {1, 2, 3};
    modify(arr);
    cout << arr[0] << endl;
    return 0;
}
```

*Hint:* Arrays are passed by pointer, so modifications affect the original.

**Answer:** `99`

When an array is passed to a function, a pointer to the original array is passed (not a copy). The function modifies the original `arr[0]` to 99.

### Q6. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    int mat[2][3] = {{1, 2, 3}, {4, 5, 6}};
    cout << mat[0][2] << " " << mat[1][0] << endl;
    return 0;
}
```

*Hint:* mat[row][col]. Row 0 col 2 = 3. Row 1 col 0 = 4.

**Answer:** `3 4`

`mat[0][2]` is row 0, column 2: the value 3. `mat[1][0]` is row 1, column 0: the value 4.

### Q7. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    int arr[] = {5, 3, 8, 1, 9, 2};
    int n = 6;
    int maxVal = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > maxVal) maxVal = arr[i];
    }
    cout << maxVal << endl;
    return 0;
}
```

*Hint:* Track the running maximum through the array.

**Answer:** `9`

Starting with maxVal = 5, the loop updates maxVal whenever a larger element is found. The sequence: 5, 5, 8, 8, 9, 9. The maximum is 9.

### Q8. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    int arr[] = {4, 2, 7, 1, 5};
    int n = 5;
    // One pass of bubble sort
    for (int j = 0; j < n - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            swap(arr[j], arr[j + 1]);
        }
    }
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;
    return 0;
}
```

*Hint:* One pass of bubble sort moves the largest element to the end.

**Answer:** `2 4 1 5 7`

Pass: compare 4,2 -> swap -> {2,4,7,1,5}. Compare 4,7 -> no swap. Compare 7,1 -> swap -> {2,4,1,7,5}. Compare 7,5 -> swap -> {2,4,1,5,7}. The largest element (7) bubbles to the end.

### Q9. [Easy] What is the difference between `int arr[5];` declared locally vs globally?

*Hint:* Think about initialization and memory location.

**Answer:** A local (inside main/function) array is stored on the **stack** and contains **garbage values** (uninitialized). A global (outside all functions) array is stored in the **data segment** and is automatically **initialized to 0**. Global arrays can also be much larger without stack overflow.

In competitive programming, large arrays (10^5 or more) should be declared globally to avoid stack overflow and to get automatic zero-initialization.

### Q10. [Medium] Why is binary search O(log n) while linear search is O(n)?

*Hint:* How many elements does each eliminate per step?

**Answer:** Linear search checks elements one by one -- worst case checks all n elements. Binary search halves the search range each step by comparing with the middle element. After k steps, the range is n/2^k. When n/2^k = 1, k = log2(n). So binary search needs at most log2(n) comparisons.

For n = 1,000,000: linear search may need 1,000,000 comparisons, binary search needs at most 20 (log2(10^6) ~ 20). Binary search requires the array to be sorted.

### Q11. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    int arr[3] = {10, 20, 30};
    int* ptr = arr;
    cout << *ptr << " " << *(ptr + 1) << " " << *(ptr + 2) << endl;
    return 0;
}
```

*Hint:* An array name is a pointer to the first element. Pointer arithmetic accesses subsequent elements.

**Answer:** `10 20 30`

The array name `arr` decays to a pointer to the first element. `*ptr` = arr[0] = 10. `*(ptr + 1)` = arr[1] = 20. `*(ptr + 2)` = arr[2] = 30. Pointer arithmetic adds `sizeof(int)` bytes per increment.

### Q12. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = 5;
    int left = 0, right = n - 1;
    while (left < right) {
        swap(arr[left], arr[right]);
        left++;
        right--;
    }
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;
    return 0;
}
```

*Hint:* Two-pointer technique for reversing.

**Answer:** `5 4 3 2 1`

The two-pointer technique reverses the array: swap(arr[0], arr[4]) -> {5,2,3,4,1}. swap(arr[1], arr[3]) -> {5,4,3,2,1}. When left >= right, the loop stops. The middle element (3) stays in place.

### Q13. [Hard] What is the difference between `int arr[5]` and `vector vec(5)`?

*Hint:* Think about size flexibility, memory location, and bounds checking.

**Answer:** Array: fixed size (5), stored on stack (local) or data segment (global), no bounds checking, sizeof gives total bytes (20). Vector: dynamic size (can grow/shrink), stored on heap, `at()` provides bounds checking, `sizeof` gives struct size (24), provides `size()`, `push_back()`, and other member functions.

Use arrays for fixed-size, performance-critical code. Use vectors for dynamic sizes and when you need safety. In CP, both are common -- arrays for speed, vectors for convenience.

### Q14. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    int a[2][2] = {{1, 2}, {3, 4}};
    cout << sizeof(a) << endl;
    cout << sizeof(a[0]) << endl;
    cout << sizeof(a[0][0]) << endl;
    return 0;
}
```

*Hint:* a is 2x2 = 4 ints. a[0] is a row of 2 ints. a[0][0] is one int.

**Answer:** `16`
`8`
`4`

`sizeof(a)` = 2*2*4 = 16 bytes (entire 2D array). `sizeof(a[0])` = 2*4 = 8 bytes (one row of 2 ints). `sizeof(a[0][0])` = 4 bytes (one int).

### Q15. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    int arr[5] = {};
    for (int i = 0; i < 5; i++) cout << arr[i] << " ";
    cout << endl;
    return 0;
}
```

*Hint:* Empty braces {} zero-initialize the array in C++11.

**Answer:** `0 0 0 0 0`

In C++11 and later, `int arr[5] = {}` zero-initializes all elements. This is equivalent to `int arr[5] = {0}`.

### Q16. [Easy] Write a function that takes an integer array and its size, and returns the sum of all elements.

*Hint:* Loop through the array and accumulate the sum.

**Answer:** ```
#include 
using namespace std;
int arraySum(int arr[], int n) {
    int sum = 0;
    for (int i = 0; i < n; i++) sum += arr[i];
    return sum;
}
int main() {
    int arr[] = {3, 7, 2, 8, 5};
    cout << arraySum(arr, 5) << endl;
    return 0;
}
```

Output: 25

The function iterates through all elements and adds them to sum. The result is 3+7+2+8+5 = 25.

### Q17. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    int arr[] = {1, 3, 5, 7, 9};
    int low = 0, high = 4, target = 5;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == target) {
            cout << "Found at " << mid << endl;
            break;
        }
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return 0;
}
```

*Hint:* Binary search: mid = (0+4)/2 = 2. arr[2] = 5 == target.

**Answer:** `Found at 2`

First iteration: mid = 2, arr[2] = 5 == target. Found immediately at index 2. Binary search on a sorted array.

### Q18. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    int arr[] = {3, 1, 4, 1, 5};
    int n = 5;
    // Selection sort: find min and place at front
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        swap(arr[i], arr[minIdx]);
    }
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;
    return 0;
}
```

*Hint:* Selection sort finds the minimum in the unsorted portion and places it at the beginning.

**Answer:** `1 1 3 4 5`

Pass 1: min of {3,1,4,1,5} at index 1 -> swap(arr[0], arr[1]) -> {1,3,4,1,5}. Pass 2: min of {3,4,1,5} at index 3 -> swap(arr[1], arr[3]) -> {1,1,4,3,5}. Pass 3: min of {4,3,5} at index 3 -> swap(arr[2], arr[3]) -> {1,1,3,4,5}. Pass 4: min of {4,5} stays -> {1,1,3,4,5}.

### Q19. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    int arr[3];
    arr[0] = 10;
    arr[1] = 20;
    arr[2] = 30;
    cout << arr[0] + arr[1] + arr[2] << endl;
    return 0;
}
```

*Hint:* Elements are assigned individually, then summed.

**Answer:** `60`

The three elements are 10, 20, 30. Their sum is 60.

### Q20. [Hard] What is the output?

```
#include 
using namespace std;
int arr[5];  // Global
int main() {
    int brr[5];  // Local
    cout << arr[0] << endl;
    // cout << brr[0]; // Garbage!
    return 0;
}
```

*Hint:* Global arrays are zero-initialized. Local arrays are not.

**Answer:** `0`

Global array `arr` is automatically zero-initialized: `arr[0] = 0`. Local array `brr` is uninitialized and would contain garbage. This is why CP programmers prefer global arrays.

### Q21. [Medium] What is the difference between `arr[i]` and `*(arr + i)` in C++?

*Hint:* Think about pointer arithmetic and array access.

**Answer:** They are exactly equivalent. `arr[i]` is syntactic sugar for `*(arr + i)`. The array name `arr` decays to a pointer to the first element. Adding `i` advances the pointer by `i * sizeof(element)` bytes. Dereferencing with `*` gives the value.

This equivalence means `arr[i]` is the same as `i[arr]` (because addition is commutative). While `i[arr]` is valid C++, it is never used in practice.

### Q22. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int n = 5;
    int sum = 0;
    for (int i = 0; i < n; i += 2) {
        sum += arr[i];
    }
    cout << sum << endl;
    return 0;
}
```

*Hint:* The loop increments by 2, so it visits indices 0, 2, 4.

**Answer:** `90`

The loop visits arr[0]=10, arr[2]=30, arr[4]=50 (step of 2). Sum = 10 + 30 + 50 = 90.

### Q23. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    int a[2][3] = {{1,2,3},{4,5,6}};
    cout << a[0][2] + a[1][0] << endl;
    cout << sizeof(a) / sizeof(a[0][0]) << endl;
    return 0;
}
```

*Hint:* a[0][2] is 3, a[1][0] is 4. Total elements = 2*3 = 6.

**Answer:** `7`
`6`

`a[0][2]=3`, `a[1][0]=4`, sum=7. `sizeof(a)` = 2*3*4 = 24 bytes. `sizeof(a[0][0])` = 4 bytes. 24/4 = 6 elements.

## Mixed Questions

### Q1. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    int arr[4] = {10, 20, 30, 40};
    arr[1] = 99;
    cout << arr[1] << endl;
    return 0;
}
```

*Hint:* Array elements can be modified by index.

**Answer:** `99`

`arr[1]` is changed from 20 to 99. The print shows the updated value.

### Q2. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    int arr[] = {5, 10, 15};
    for (int x : arr) {
        cout << x * 2 << " ";
    }
    cout << endl;
    return 0;
}
```

*Hint:* Range-based for loop iterates over all elements. x is a copy.

**Answer:** `10 20 30`

The range-based for loop iterates over each element. `x * 2` prints double each value: 10, 20, 30. The original array is unchanged (x is a copy).

### Q3. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    int arr[3][3] = {
        {1, 0, 0},
        {0, 1, 0},
        {0, 0, 1}
    };
    int trace = 0;
    for (int i = 0; i < 3; i++) {
        trace += arr[i][i];
    }
    cout << trace << endl;
    return 0;
}
```

*Hint:* The trace is the sum of diagonal elements (where row == column).

**Answer:** `3`

The diagonal elements are arr[0][0]=1, arr[1][1]=1, arr[2][2]=1. Sum = 3. This is the identity matrix, and its trace is 3.

### Q4. [Easy] Write a program that reads 5 integers into an array and prints them in reverse order.

*Hint:* Read into arr[0..4], then print from arr[4] down to arr[0].

**Answer:** ```
#include 
using namespace std;
int main() {
    int arr[5];
    for (int i = 0; i < 5; i++) cin >> arr[i];
    for (int i = 4; i >= 0; i--) cout << arr[i] << " ";
    cout << endl;
    return 0;
}
```

Input: 1 2 3 4 5
Output: 5 4 3 2 1

Read 5 elements with a forward loop. Print with a backward loop from index 4 to 0.

### Q5. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    int arr[] = {2, 4, 6, 8, 10};
    int n = 5;
    // Prefix sum
    for (int i = 1; i < n; i++) {
        arr[i] += arr[i - 1];
    }
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;
    return 0;
}
```

*Hint:* Each element becomes the sum of all elements up to and including itself.

**Answer:** `2 6 12 20 30`

Prefix sum: arr[1] = 4+2 = 6. arr[2] = 6+6 = 12. arr[3] = 8+12 = 20. arr[4] = 10+20 = 30. The prefix sum array allows O(1) range sum queries.

### Q6. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    int arr[] = {5, 2, 8, 1, 9};
    int n = 5;
    // Insertion sort
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;
    return 0;
}
```

*Hint:* Insertion sort inserts each element into its correct position in the sorted portion.

**Answer:** `1 2 5 8 9`

Insertion sort builds the sorted portion from left to right. Each new element is shifted into its correct position. Final sorted array: 1 2 5 8 9.

### Q7. [Medium] Write a function that takes a 2D array (3x3) and prints the transpose (rows become columns).

*Hint:* Transpose: transposed[j][i] = original[i][j].

**Answer:** ```
#include 
using namespace std;
int main() {
    int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};
    int trans[3][3];
    for (int i = 0; i < 3; i++)
        for (int j = 0; j < 3; j++)
            trans[j][i] = mat[i][j];
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++)
            cout << trans[i][j] << " ";
        cout << endl;
    }
    return 0;
}
```

Output:
1 4 7
2 5 8
3 6 9

The transpose swaps rows and columns. Element at (i,j) moves to (j,i). Row {1,2,3} becomes column {1,2,3}.

### Q8. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    int arr[] = {1, 3, 5, 7, 9, 11};
    int n = 6, target = 7;
    int low = 0, high = n - 1, steps = 0;
    while (low <= high) {
        steps++;
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) {
            cout << "Found at " << mid << " in " << steps << " steps" << endl;
            break;
        }
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return 0;
}
```

*Hint:* Trace binary search: mid = 2, arr[2]=5 < 7, mid = 4, arr[4]=9 > 7, mid = 3, arr[3]=7 found.

**Answer:** `Found at 3 in 3 steps`

Step 1: mid=2, arr[2]=5 < 7, low=3. Step 2: mid=4, arr[4]=9 > 7, high=3. Step 3: mid=3, arr[3]=7 == target. Found at index 3 in 3 steps.

### Q9. [Hard] Write a program that reads n integers and finds the second largest element without sorting.

*Hint:* Track both the largest and second largest in one pass.

**Answer:** ```
#include 
#include 
using namespace std;
int main() {
    int n;
    cin >> n;
    int arr[100];
    for (int i = 0; i < n; i++) cin >> arr[i];
    int first = INT_MIN, second = INT_MIN;
    for (int i = 0; i < n; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] != first) {
            second = arr[i];
        }
    }
    cout << "Second largest: " << second << endl;
    return 0;
}
```

Input: 5 12 35 1 10 34
Output: Second largest: 34

Single pass O(n): if the current element is greater than first, update both. If greater than second but not equal to first, update second. This handles duplicates correctly.

### Q10. [Medium] Why should you use `mid = low + (high - low) / 2` instead of `mid = (low + high) / 2` in binary search?

*Hint:* Think about what happens when low and high are both large.

**Answer:** `(low + high)` can overflow if both are close to `INT_MAX`. For example, if low = 2 billion and high = 2 billion, their sum exceeds `INT_MAX` and overflows. `low + (high - low) / 2` computes the difference first (which fits in int) and avoids overflow.

This is a classic interview question. The overflow is unlikely with small arrays but becomes real when binary searching on values (not indices), e.g., binary search on answer in competitive programming.

### Q11. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    int arr[5] = {0};
    arr[2] = 42;
    for (int i = 0; i < 5; i++) cout << arr[i] << " ";
    cout << endl;
    return 0;
}
```

*Hint:* {0} initializes all elements to 0. Then one element is changed.

**Answer:** `0 0 42 0 0`

All elements start as 0 (from `= {0}`). Only `arr[2]` is changed to 42.

### Q12. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = 5;
    // Left rotate by 2
    int temp1 = arr[0], temp2 = arr[1];
    for (int i = 0; i < n - 2; i++) {
        arr[i] = arr[i + 2];
    }
    arr[n - 2] = temp1;
    arr[n - 1] = temp2;
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;
    return 0;
}
```

*Hint:* Left rotation by 2 moves first 2 elements to the end.

**Answer:** `3 4 5 1 2`

Left rotation by 2: elements {3,4,5} shift left, and {1,2} go to the end. Result: {3,4,5,1,2}.

## Multiple Choice Questions

### Q1. [Easy] What is the index of the last element in `int arr[10]`?

**B is correct.** Arrays are 0-indexed. An array of size 10 has indices 0 through 9. Accessing arr[10] is out of bounds.

### Q2. [Easy] What does `int arr[5] = {1, 2};` initialize the remaining elements to?

**C is correct.** Partial initialization fills remaining elements with 0. So arr = {1, 2, 0, 0, 0}.

### Q3. [Easy] What is the time complexity of accessing `arr[i]`?

**C is correct.** Array access is O(1) because the address is calculated directly: base_address + i * sizeof(element). No iteration is needed.

### Q4. [Medium] What happens when an array is passed to a function in C++?

**B is correct.** Arrays decay to pointers when passed to functions. The function receives a pointer to arr[0], not a copy. Changes made inside the function affect the original array.

### Q5. [Medium] What is the time complexity of binary search?

**C is correct.** Binary search halves the search range each step, giving O(log n) time complexity. It requires the array to be sorted.

### Q6. [Medium] What is the time complexity of bubble sort in the worst case?

**C is correct.** Bubble sort has two nested loops, each up to n iterations. Worst case (reverse sorted array) requires O(n^2) comparisons and swaps.

### Q7. [Medium] How are elements of a 2D array `int a[3][4]` stored in memory?

**B is correct.** C++ stores 2D arrays in row-major order: all elements of row 0 first, then row 1, then row 2. This affects cache performance when iterating.

### Q8. [Hard] What is `sizeof(arr)` inside a function where arr is passed as `int arr[]` on a 64-bit system?

**C is correct.** Inside the function, arr is a pointer (not an array). On a 64-bit system, sizeof(pointer) = 8 bytes, regardless of the original array size.

### Q9. [Hard] Which sorting algorithm has the best performance on a nearly sorted array?

**C is correct.** Insertion sort has O(n) best-case performance on a nearly sorted array because the inner while loop rarely executes. Bubble sort (with optimization) is also O(n) best case, but insertion sort is generally faster in practice.

### Q10. [Hard] Why should large arrays in competitive programming be declared globally?

**B is correct.** Local arrays go on the stack (limited to ~1-8 MB). Global arrays go in the data segment (much larger). Global arrays are also automatically zero-initialized, avoiding garbage values.

### Q11. [Easy] What is the correct way to get the number of elements in an array `int arr[10]`?

**C is correct.** C++ arrays do not have member functions like length() or size(). sizeof(arr) gives total bytes, divided by sizeof(one element) gives the count.

### Q12. [Hard] When passing a 2D array to a function, which dimension can be omitted?

**B is correct.** The column dimension must be specified for the compiler to calculate memory offsets. `void f(int arr[][4], int rows)` is valid. `void f(int arr[][], int rows, int cols)` is NOT valid.

### Q13. [Easy] What does `int arr[5] = {};` do in C++11?

**B is correct.** In C++11, empty brace initialization `= {}` zero-initializes all elements. The array has 5 elements, all set to 0.

### Q14. [Medium] What is the best-case time complexity of insertion sort?

**C is correct.** When the array is already sorted, insertion sort's inner while loop never executes. Each element is compared once with its predecessor and stays in place. Total: O(n) comparisons.

### Q15. [Hard] What is the maximum size of a local array (on the stack) in most systems?

**C is correct.** The default stack size is typically 1-8 MB. For int arrays (4 bytes each), ~250,000 elements fit in 1 MB. For larger arrays, use global declaration or dynamic allocation.

### Q16. [Medium] In binary search, what does `low + (high - low) / 2` avoid compared to `(low + high) / 2`?

**B is correct.** If low and high are both close to INT_MAX, `low + high` overflows. `low + (high - low) / 2` computes the difference first, which is always non-negative and fits in an int.

### Q17. [Easy] What is the time complexity of linear search?

**C is correct.** Linear search checks each element one by one. In the worst case, it checks all n elements before finding the target (or confirming absence).

### Q18. [Hard] Which sorting algorithm is stable (preserves relative order of equal elements)?

**B is correct.** Insertion sort is stable because it only moves elements past those that are strictly greater. Selection sort is NOT stable because the swap operation can change the relative order of equal elements.

## Coding Challenges

### Challenge 1. Array Rotation

**Difficulty:** Easy

Write a program that left rotates an array by k positions. Read n (array size), k (rotation count), and n integers. Print the rotated array.

**Constraints:**

- 1 <= n <= 1000, 0 <= k <= n. Use O(n) extra space.

**Sample input:**

```
5 2
1 2 3 4 5
```

**Sample output:**

```
3 4 5 1 2
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    int n, k;
    cin >> n >> k;
    int arr[1000], temp[1000];
    for (int i = 0; i < n; i++) cin >> arr[i];
    for (int i = 0; i < n; i++) temp[i] = arr[(i + k) % n];
    for (int i = 0; i < n; i++) cout << temp[i] << " ";
    cout << endl;
    return 0;
}
```

### Challenge 2. Merge Two Sorted Arrays

**Difficulty:** Medium

Given two sorted arrays of sizes n and m, merge them into a single sorted array without using any sorting function. Print the merged array.

**Constraints:**

- Use the two-pointer merge technique. O(n+m) time.

**Sample input:**

```
3 4
1 3 5
2 4 6 8
```

**Sample output:**

```
1 2 3 4 5 6 8
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    int n, m;
    cin >> n >> m;
    int a[1000], b[1000], c[2000];
    for (int i = 0; i < n; i++) cin >> a[i];
    for (int i = 0; i < m; i++) cin >> b[i];
    int i = 0, j = 0, k = 0;
    while (i < n && j < m) {
        if (a[i] <= b[j]) c[k++] = a[i++];
        else c[k++] = b[j++];
    }
    while (i < n) c[k++] = a[i++];
    while (j < m) c[k++] = b[j++];
    for (int i = 0; i < k; i++) cout << c[i] << " ";
    cout << endl;
    return 0;
}
```

### Challenge 3. Matrix Diagonal Sum

**Difficulty:** Medium

Read a square matrix of size n x n. Print the sum of the primary diagonal (top-left to bottom-right) and the secondary diagonal (top-right to bottom-left). If n is odd, subtract the center element once (it is counted in both diagonals).

**Constraints:**

- 1 <= n <= 100. Handle odd n to avoid double-counting the center element.

**Sample input:**

```
3
1 2 3
4 5 6
7 8 9
```

**Sample output:**

```
Primary diagonal sum: 15
Secondary diagonal sum: 15
Total (without double-counting center): 25
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    int n;
    cin >> n;
    int mat[100][100];
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            cin >> mat[i][j];
    int primary = 0, secondary = 0;
    for (int i = 0; i < n; i++) {
        primary += mat[i][i];
        secondary += mat[i][n - 1 - i];
    }
    int total = primary + secondary;
    if (n % 2 == 1) total -= mat[n/2][n/2];
    cout << "Primary diagonal sum: " << primary << endl;
    cout << "Secondary diagonal sum: " << secondary << endl;
    cout << "Total (without double-counting center): " << total << endl;
    return 0;
}
```

### Challenge 4. Find Duplicate in Array

**Difficulty:** Medium

Given an array of n integers where each element is between 1 and n-1, find the duplicate element. There is exactly one duplicate. Do NOT use extra space (no hash map or extra array).

**Constraints:**

- O(n) time, O(1) space. Use the tortoise and hare (Floyd's cycle detection) approach.

**Sample input:**

```
5
1 3 4 2 2
```

**Sample output:**

```
Duplicate: 2
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    int n;
    cin >> n;
    int arr[100001];
    for (int i = 0; i < n; i++) cin >> arr[i];
    // Floyd's cycle detection
    int slow = arr[0], fast = arr[0];
    do {
        slow = arr[slow];
        fast = arr[arr[fast]];
    } while (slow != fast);
    slow = arr[0];
    while (slow != fast) {
        slow = arr[slow];
        fast = arr[fast];
    }
    cout << "Duplicate: " << slow << endl;
    return 0;
}
```

### Challenge 5. Spiral Matrix Print

**Difficulty:** Hard

Read a matrix of size m x n and print its elements in spiral order (clockwise: right, down, left, up, repeat).

**Constraints:**

- Handle rectangular matrices (not necessarily square). Use four boundary variables.

**Sample input:**

```
3 4
1 2 3 4
5 6 7 8
9 10 11 12
```

**Sample output:**

```
1 2 3 4 8 12 11 10 9 5 6 7
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    int m, n;
    cin >> m >> n;
    int mat[100][100];
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            cin >> mat[i][j];
    int top = 0, bottom = m - 1, left = 0, right = n - 1;
    while (top <= bottom && left <= right) {
        for (int j = left; j <= right; j++) cout << mat[top][j] << " ";
        top++;
        for (int i = top; i <= bottom; i++) cout << mat[i][right] << " ";
        right--;
        if (top <= bottom) {
            for (int j = right; j >= left; j--) cout << mat[bottom][j] << " ";
            bottom--;
        }
        if (left <= right) {
            for (int i = bottom; i >= top; i--) cout << mat[i][left] << " ";
            left++;
        }
    }
    cout << endl;
    return 0;
}
```

### Challenge 6. Kadane's Algorithm - Maximum Subarray Sum

**Difficulty:** Hard

Given an array of n integers (may include negatives), find the contiguous subarray with the maximum sum. Print the maximum sum and the subarray boundaries.

**Constraints:**

- Use Kadane's algorithm. O(n) time, O(1) space.

**Sample input:**

```
8
-2 1 -3 4 -1 2 1 -5
```

**Sample output:**

```
Maximum subarray sum: 6
Subarray: index 3 to 6
```

**Solution:**

```cpp
#include <iostream>
#include <climits>
using namespace std;
int main() {
    int n;
    cin >> n;
    int arr[100000];
    for (int i = 0; i < n; i++) cin >> arr[i];
    int maxSum = INT_MIN, currentSum = 0;
    int start = 0, end = 0, tempStart = 0;
    for (int i = 0; i < n; i++) {
        currentSum += arr[i];
        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
        if (currentSum < 0) {
            currentSum = 0;
            tempStart = i + 1;
        }
    }
    cout << "Maximum subarray sum: " << maxSum << endl;
    cout << "Subarray: index " << start << " to " << end << endl;
    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/arrays-in-cpp/*
