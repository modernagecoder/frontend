---
title: "C++ STL Algorithms and Iterators - sort, find, binary_search, accumulate, transform | Modern Age Coders"
description: "Master C++ STL algorithms and iterators. Learn sort, stable_sort, binary_search, lower_bound, upper_bound, accumulate, transform, next_permutation, and lambda comparators. Includes 58+ practice questions for competitive programming."
slug: stl-algorithms-and-iterators
canonical: https://learn.modernagecoders.com/resources/cpp/stl-algorithms-and-iterators/
category: "C++"
keywords: ["c++ stl algorithms", "c++ iterators", "c++ sort", "c++ binary_search", "c++ lower_bound", "c++ accumulate", "c++ transform", "c++ next_permutation", "c++ lambda comparator", "competitive programming c++ stl"]
---
# STL Algorithms and Iterators

**Difficulty:** Advanced  
**Reading time:** 55 min  
**Chapter:** 21  
**Practice questions:** 58

## What Are STL Algorithms and Iterators?

The **Standard Template Library (STL)** provides a rich collection of generic algorithms that operate on containers through **iterators**. Instead of writing loops manually, you use algorithms like `sort`, `find`, `binary_search`, `accumulate`, and `transform` that are already optimized, tested, and correct.

An **iterator** is a generalized pointer that provides a uniform way to traverse any STL container. Iterators decouple algorithms from containers -- `std::sort` works on vectors, arrays, and deques without knowing anything about their internal structure.

```cpp
#include 
#include 
#include 
#include 
using namespace std;

int main() {
    vector v = {5, 2, 8, 1, 9, 3};

    // Without STL: manual loop to find max
    int maxVal = v[0];
    for (int i = 1; i < v.size(); i++)
        if (v[i] > maxVal) maxVal = v[i];

    // With STL: one line
    auto it = max_element(v.begin(), v.end());
    cout << "Max: " << *it << endl;  // 9

    sort(v.begin(), v.end());
    // v is now {1, 2, 3, 5, 8, 9}

    int sum = accumulate(v.begin(), v.end(), 0);
    cout << "Sum: " << sum << endl;  // 28
    return 0;
}
```

When Raghav says "use `lower_bound` on the sorted array," every competitive programmer knows exactly what that means -- a binary search for the first element not less than a given value, in O(log n) time.

## Why Are STL Algorithms and Iterators Important?

### 1. Competitive Programming Speed

In competitive programming, writing a correct binary search or sorting algorithm from scratch wastes precious time. STL algorithms like `sort`, `lower_bound`, `next_permutation`, and `accumulate` let you solve problems in minutes instead of hours. Neha can sort a million elements with one line instead of implementing quicksort from scratch.

### 2. Correctness and Optimization

STL algorithms are implemented by compiler vendors (GCC, Clang, MSVC) and are heavily optimized. `std::sort` uses introsort (a hybrid of quicksort, heapsort, and insertion sort) with O(n log n) worst-case guarantee. Writing a better sort by hand is extremely unlikely.

### 3. Abstraction Through Iterators

Iterators provide a uniform interface across all containers. The same `find` algorithm works on `vector`, `list`, `deque`, and even raw arrays. You write the algorithm once using iterators and it works everywhere.

### 4. Lambda Expressions Enable Custom Logic

C++11 lambdas let you pass custom comparators and predicates inline. Sorting a vector of pairs by second element, filtering elements that satisfy a condition, or transforming data becomes a one-liner with lambdas.

### 5. Placement and Interview Relevance

Companies like Google, Amazon, Microsoft, Flipkart, and Directi expect candidates to be fluent with STL algorithms. Interview problems frequently require sorting with custom comparators, binary search with lower_bound/upper_bound, and efficient use of accumulate and transform.

## Detailed Explanation

### 1. Iterator Types

C++ defines five categories of iterators, each with different capabilities:

Iterator TypeOperationsContainersInput IteratorRead, increment (++), single-passistream_iteratorOutput IteratorWrite, increment (++), single-passostream_iterator, back_inserterForward IteratorRead/Write, increment (++), multi-passforward_list, unordered_setBidirectional IteratorRead/Write, increment/decrement (++/--)list, set, mapRandom Access IteratorRead/Write, +, -, [], comparisonvector, deque, array

```cpp
#include 
#include 
using namespace std;

int main() {
    vector v = {10, 20, 30, 40, 50};

    // begin() and end()
    auto it = v.begin();       // points to first element
    cout << *it << endl;      // 10

    it++;                       // move forward
    cout << *it << endl;      // 20

    // Random access: jump directly
    cout << *(v.begin() + 3) << endl;  // 40

    // auto with iterators (C++11)
    for (auto it = v.begin(); it != v.end(); ++it)
        cout << *it << " ";   // 10 20 30 40 50
    cout << endl;

    // Reverse iterators
    for (auto rit = v.rbegin(); rit != v.rend(); ++rit)
        cout << *rit << " ";  // 50 40 30 20 10
    cout << endl;
    return 0;
}
```

### 2. Sorting Algorithms

The `` header provides multiple sorting functions, each with different guarantees:

```cpp
#include 
#include 
#include 
using namespace std;

int main() {
    vector v = {5, 2, 8, 1, 9, 3, 7, 4, 6};

    // sort: O(n log n), not stable, uses introsort
    sort(v.begin(), v.end());
    // v = {1, 2, 3, 4, 5, 6, 7, 8, 9}

    // sort descending with custom comparator
    sort(v.begin(), v.end(), greater());
    // v = {9, 8, 7, 6, 5, 4, 3, 2, 1}

    // stable_sort: O(n log n), preserves order of equal elements
    vector> students = {{85,"Arjun"}, {90,"Priya"}, {85,"Kiran"}};
    stable_sort(students.begin(), students.end(),
        [](const pair<int,string>& a, const pair<int,string>& b) {
            return a.first > b.first;  // sort by marks descending
        });
    // {90,Priya}, {85,Arjun}, {85,Kiran} -- Arjun before Kiran (stable)

    // partial_sort: sort only first k elements, O(n log k)
    vector w = {5, 2, 8, 1, 9, 3};
    partial_sort(w.begin(), w.begin() + 3, w.end());
    // First 3 are sorted: {1, 2, 3, ...rest unspecified}

    // nth_element: place nth element in correct position, O(n)
    vector x = {5, 2, 8, 1, 9, 3};
    nth_element(x.begin(), x.begin() + 2, x.end());
    // x[2] is the element that would be at index 2 if sorted (3)
    // elements before it are <= 3, elements after are >= 3
    return 0;
}
```

### 3. Searching Algorithms

```cpp
#include 
#include 
#include 
using namespace std;

int main() {
    vector v = {1, 3, 5, 7, 9, 11, 13};

    // find: linear search, O(n)
    auto it = find(v.begin(), v.end(), 7);
    if (it != v.end())
        cout << "Found 7 at index " << (it - v.begin()) << endl;  // 3

    // binary_search: returns bool, O(log n), requires sorted range
    bool found = binary_search(v.begin(), v.end(), 5);
    cout << "5 exists: " << found << endl;  // 1 (true)

    // lower_bound: first element >= value, O(log n)
    auto lb = lower_bound(v.begin(), v.end(), 6);
    cout << "lower_bound(6): " << *lb << endl;  // 7

    // upper_bound: first element > value, O(log n)
    auto ub = upper_bound(v.begin(), v.end(), 7);
    cout << "upper_bound(7): " << *ub << endl;  // 9

    // equal_range: pair of (lower_bound, upper_bound)
    vector w = {1, 3, 3, 3, 5, 7};
    auto [lo, hi] = equal_range(w.begin(), w.end(), 3);
    cout << "Count of 3: " << (hi - lo) << endl;  // 3
    return 0;
}
```

### 4. Modifying Algorithms

```cpp
#include 
#include 
#include 
using namespace std;

int main() {
    vector v = {1, 2, 3, 4, 5};

    // reverse
    reverse(v.begin(), v.end());  // {5, 4, 3, 2, 1}

    // rotate: rotate left by 2 positions
    vector w = {1, 2, 3, 4, 5};
    rotate(w.begin(), w.begin() + 2, w.end());  // {3, 4, 5, 1, 2}

    // unique: removes consecutive duplicates (must sort first for all dupes)
    vector x = {1, 1, 2, 2, 3, 3, 3};
    auto last = unique(x.begin(), x.end());
    x.erase(last, x.end());  // {1, 2, 3}

    // remove: moves elements to end, returns new logical end
    vector y = {1, 2, 3, 2, 4, 2};
    auto newEnd = remove(y.begin(), y.end(), 2);
    y.erase(newEnd, y.end());  // {1, 3, 4}

    // replace
    vector z = {1, 2, 3, 2, 4};
    replace(z.begin(), z.end(), 2, 99);  // {1, 99, 3, 99, 4}

    // transform: apply a function to each element
    vector src = {1, 2, 3, 4};
    vector dst(4);
    transform(src.begin(), src.end(), dst.begin(),
        [](int x) { return x * x; });
    // dst = {1, 4, 9, 16}

    // fill
    vector f(5);
    fill(f.begin(), f.end(), 42);  // {42, 42, 42, 42, 42}

    for (int val : dst) cout << val << " ";
    cout << endl;
    return 0;
}
```

### 5. Numeric Algorithms ()

```cpp
#include 
#include 
#include 
using namespace std;

int main() {
    vector v = {1, 2, 3, 4, 5};

    // accumulate: sum (or custom fold)
    int sum = accumulate(v.begin(), v.end(), 0);
    cout << "Sum: " << sum << endl;  // 15

    // accumulate with custom operation (product)
    int product = accumulate(v.begin(), v.end(), 1, multiplies());
    cout << "Product: " << product << endl;  // 120

    // partial_sum: prefix sums
    vector prefix(5);
    partial_sum(v.begin(), v.end(), prefix.begin());
    // prefix = {1, 3, 6, 10, 15}

    // inner_product: dot product
    vector a = {1, 2, 3};
    vector b = {4, 5, 6};
    int dot = inner_product(a.begin(), a.end(), b.begin(), 0);
    cout << "Dot product: " << dot << endl;  // 1*4 + 2*5 + 3*6 = 32

    // iota: fill with incrementing values
    vector seq(5);
    iota(seq.begin(), seq.end(), 10);
    // seq = {10, 11, 12, 13, 14}

    for (int val : prefix) cout << val << " ";
    cout << endl;
    return 0;
}
```

### 6. Min/Max Algorithms

```cpp
#include 
#include 
#include 
using namespace std;

int main() {
    vector v = {3, 1, 4, 1, 5, 9, 2, 6};

    auto minIt = min_element(v.begin(), v.end());
    auto maxIt = max_element(v.begin(), v.end());
    cout << "Min: " << *minIt << " at index " << (minIt - v.begin()) << endl;
    cout << "Max: " << *maxIt << " at index " << (maxIt - v.begin()) << endl;

    // minmax_element: both in one pass
    auto [lo, hi] = minmax_element(v.begin(), v.end());
    cout << "Min: " << *lo << ", Max: " << *hi << endl;
    return 0;
}
```

### 7. Permutations

```cpp
#include 
#include 
#include 
using namespace std;

int main() {
    vector v = {1, 2, 3};

    // Generate all permutations
    sort(v.begin(), v.end());  // must start sorted for all permutations
    do {
        for (int x : v) cout << x << " ";
        cout << endl;
    } while (next_permutation(v.begin(), v.end()));
    // Output:
    // 1 2 3
    // 1 3 2
    // 2 1 3
    // 2 3 1
    // 3 1 2
    // 3 2 1

    // prev_permutation: lexicographically previous
    vector w = {3, 2, 1};
    prev_permutation(w.begin(), w.end());
    // w = {3, 1, 2}
    return 0;
}
```

### 8. Lambda Expressions with Algorithms

```cpp
#include 
#include 
#include 
#include 
using namespace std;

int main() {
    // Sort vector of pairs by second element
    vector> students = {
        {"Arjun", 85}, {"Priya", 92}, {"Kiran", 78}, {"Neha", 92}
    };
    sort(students.begin(), students.end(),
        [](const pair<string,int>& a, const pair<string,int>& b) {
            return a.second > b.second;  // descending by marks
        });
    for (auto& [name, marks] : students)
        cout << name << ": " << marks << endl;

    // count_if with lambda
    vector v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int evenCount = count_if(v.begin(), v.end(),
        [](int x) { return x % 2 == 0; });
    cout << "Even count: " << evenCount << endl;  // 5

    // Capture variables in lambda
    int threshold = 5;
    int above = count_if(v.begin(), v.end(),
        [threshold](int x) { return x > threshold; });
    cout << "Above " << threshold << ": " << above << endl;  // 5

    // remove_if with lambda (erase-remove idiom)
    vector w = {1, 2, 3, 4, 5, 6};
    w.erase(
        remove_if(w.begin(), w.end(), [](int x) { return x % 2 == 0; }),
        w.end()
    );
    // w = {1, 3, 5}
    return 0;
}
```

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/stl-algorithms-and-iterators/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/stl-algorithms-and-iterators/practice/*
