---
title: "Competitive Programming Patterns in C++ - Two Pointers, Sliding Window, Prefix Sum, Bit Manipulation | Modern Age Coders"
description: "Master competitive programming patterns in C++: two pointers, sliding window, prefix sum, binary search on answer, bit manipulation, and greedy algorithms. All code is compilable. Includes 60+ coding and output-based questions."
slug: competitive-programming-patterns
canonical: https://learn.modernagecoders.com/resources/cpp/competitive-programming-patterns/
category: "C++"
keywords: ["competitive programming c++", "two pointers c++", "sliding window c++", "prefix sum c++", "binary search on answer", "bit manipulation c++", "greedy algorithm c++", "cp patterns", "codeforces c++", "leetcode c++"]
---
# Competitive Programming Patterns in C++

**Difficulty:** Advanced  
**Reading time:** 55 min  
**Chapter:** 24

## What Are Competitive Programming Patterns?

**Competitive programming patterns** are reusable algorithmic templates that solve broad categories of problems efficiently. Instead of inventing a solution from scratch for every problem, experienced competitive programmers recognize the pattern and apply a known technique.

The most important patterns in competitive programming are:

- **Fast I/O** -- critical for large inputs on online judges
- **Two Pointers** -- scan from both ends or use two markers
- **Sliding Window** -- maintain a window of elements that slides across the array
- **Prefix Sum** -- precompute cumulative sums for O(1) range queries
- **Binary Search on Answer** -- binary search the solution space, not the array
- **Bit Manipulation** -- use bitwise operations for O(1) tricks
- **Greedy** -- make the locally optimal choice at each step

```cpp
#include 
#include 
#include 
using namespace std;

// Fast I/O setup (use in every CP solution)
void fastIO() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
}

int main() {
    fastIO();

    // Two pointers: find pair with given sum in sorted array
    vector v = {1, 3, 5, 7, 9, 11};
    int target = 12;
    int left = 0, right = v.size() - 1;
    while (left < right) {
        int sum = v[left] + v[right];
        if (sum == target) {
            cout << v[left] << " + " << v[right] << " = " << target << endl;
            break;
        } else if (sum < target) left++;
        else right--;
    }
    return 0;
}
```

When Siddharth says "this is a sliding window problem" or Ananya says "binary search on the answer," the pattern immediately narrows the solution approach and implementation time.

## Why Are Competitive Programming Patterns Important?

### 1. Speed in Contests

In a timed contest (Codeforces, CodeChef, ICPC), recognizing the pattern is 80% of solving the problem. If you see "find a subarray with maximum sum of length k," you immediately think sliding window. If you see "minimize the maximum value," you think binary search on answer. Pattern recognition saves critical minutes.

### 2. Reducing O(n^2) to O(n) or O(n log n)

Most competitive programming patterns exist to reduce brute-force time complexity. Two pointers reduces O(n^2) pair finding to O(n). Sliding window reduces O(n*k) subarray problems to O(n). Prefix sums reduce O(n) per range query to O(1). These optimizations are the difference between TLE and AC.

### 3. Structured Problem Solving

Patterns provide a mental framework: read the problem, identify constraints, match a pattern, implement the template. This structured approach works far better than ad-hoc coding, especially under pressure.

### 4. Interview Preparation

Top tech companies (Google, Amazon, Microsoft, Flipkart, Uber) heavily test these patterns. Two pointers, sliding window, prefix sums, and bit manipulation appear in the majority of coding interviews. Mastering these patterns directly translates to interview success.

### 5. Building Blocks for Advanced Algorithms

These basic patterns are building blocks for advanced techniques. Segment trees build on prefix sums. Convex hull trick builds on binary search. Network flow uses greedy and BFS. Mastering the basics makes advanced algorithms approachable.

## Detailed Explanation

**Competitive programming patterns** are reusable algorithmic templates that solve broad categories of problems efficiently. Instead of inventing a solution from scratch for every problem, experienced competitive programmers recognize the pattern and apply a known technique.

The most important patterns in competitive programming are:

- **Fast I/O** -- critical for large inputs on online judges
- **Two Pointers** -- scan from both ends or use two markers
- **Sliding Window** -- maintain a window of elements that slides across the array
- **Prefix Sum** -- precompute cumulative sums for O(1) range queries
- **Binary Search on Answer** -- binary search the solution space, not the array
- **Bit Manipulation** -- use bitwise operations for O(1) tricks
- **Greedy** -- make the locally optimal choice at each step

```cpp
#include 
#include 
#include 
using namespace std;

// Fast I/O setup (use in every CP solution)
void fastIO() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
}

int main() {
    fastIO();

    // Two pointers: find pair with given sum in sorted array
    vector v = {1, 3, 5, 7, 9, 11};
    int target = 12;
    int left = 0, right = v.size() - 1;
    while (left < right) {
        int sum = v[left] + v[right];
        if (sum == target) {
            cout << v[left] << " + " << v[right] << " = " << target << endl;
            break;
        } else if (sum < target) left++;
        else right--;
    }
    return 0;
}
```

When Siddharth says "this is a sliding window problem" or Ananya says "binary search on the answer," the pattern immediately narrows the solution approach and implementation time.

### 1. Speed in Contests

In a timed contest (Codeforces, CodeChef, ICPC), recognizing the pattern is 80% of solving the problem. If you see "find a subarray with maximum sum of length k," you immediately think sliding window. If you see "minimize the maximum value," you think binary search on answer. Pattern recognition saves critical minutes.

### 2. Reducing O(n^2) to O(n) or O(n log n)

Most competitive programming patterns exist to reduce brute-force time complexity. Two pointers reduces O(n^2) pair finding to O(n). Sliding window reduces O(n*k) subarray problems to O(n). Prefix sums reduce O(n) per range query to O(1). These optimizations are the difference between TLE and AC.

### 3. Structured Problem Solving

Patterns provide a mental framework: read the problem, identify constraints, match a pattern, implement the template. This structured approach works far better than ad-hoc coding, especially under pressure.

### 4. Interview Preparation

Top tech companies (Google, Amazon, Microsoft, Flipkart, Uber) heavily test these patterns. Two pointers, sliding window, prefix sums, and bit manipulation appear in the majority of coding interviews. Mastering these patterns directly translates to interview success.

### 5. Building Blocks for Advanced Algorithms

These basic patterns are building blocks for advanced techniques. Segment trees build on prefix sums. Convex hull trick builds on binary search. Network flow uses greedy and BFS. Mastering the basics makes advanced algorithms approachable.

## Code Examples

### Two Pointers: Container With Most Water

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    vector<int> height = {1, 8, 6, 2, 5, 4, 8, 3, 7};
    int left = 0, right = height.size() - 1;
    int maxWater = 0;

    while (left < right) {
        int width = right - left;
        int h = min(height[left], height[right]);
        maxWater = max(maxWater, width * h);

        // Move the shorter side inward
        if (height[left] < height[right])
            left++;
        else
            right--;
    }

    cout << "Max water: " << maxWater << endl;
    return 0;
}
```

The two-pointer technique works on sorted arrays or problems where moving one pointer reduces the search space. Here, we start from both ends and always move the shorter side inward because keeping the shorter side cannot improve the area. This reduces O(n^2) brute force to O(n).

**Output:**

```
Max water: 49
```

### Sliding Window: Maximum Sum Subarray of Size K

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    vector<int> arr = {2, 1, 5, 1, 3, 2, 8, 4, 3};
    int k = 3;
    int n = arr.size();

    // Compute sum of first window
    int windowSum = 0;
    for (int i = 0; i < k; i++)
        windowSum += arr[i];

    int maxSum = windowSum;
    int startIdx = 0;

    // Slide the window: add right element, remove left element
    for (int i = k; i < n; i++) {
        windowSum += arr[i] - arr[i - k];
        if (windowSum > maxSum) {
            maxSum = windowSum;
            startIdx = i - k + 1;
        }
    }

    cout << "Max sum: " << maxSum << endl;
    cout << "Subarray: ";
    for (int i = startIdx; i < startIdx + k; i++)
        cout << arr[i] << " ";
    cout << endl;
    return 0;
}
```

The sliding window technique maintains a window of size k that slides one position at a time. Instead of recomputing the sum from scratch (O(k) per position), we add the new element and remove the old one (O(1) per position). Total complexity: O(n) instead of O(n*k).

**Output:**

```
Max sum: 14
Subarray: 2 8 4
```

### Sliding Window: Longest Substring Without Repeating Characters

```cpp
#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    string s = "abcabcbb";
    unordered_map<char, int> lastSeen;
    int maxLen = 0, start = 0;
    int bestStart = 0;

    for (int end = 0; end < (int)s.size(); end++) {
        if (lastSeen.count(s[end]) && lastSeen[s[end]] >= start)
            start = lastSeen[s[end]] + 1;

        lastSeen[s[end]] = end;
        if (end - start + 1 > maxLen) {
            maxLen = end - start + 1;
            bestStart = start;
        }
    }

    cout << "Longest substring: " << s.substr(bestStart, maxLen) << endl;
    cout << "Length: " << maxLen << endl;
    return 0;
}
```

This is a variable-size sliding window. We expand the right end and shrink the left end when a duplicate is found within the current window. The `lastSeen` map tracks the most recent index of each character, allowing O(1) duplicate detection. Total: O(n) time, O(min(n, alphabet_size)) space.

**Output:**

```
Longest substring: abc
Length: 3
```

### Prefix Sum: Subarray Sum Equals K

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    vector<int> nums = {1, 1, 1, 2, -1, 2};
    int k = 3;

    unordered_map<int, int> prefixCount;
    prefixCount[0] = 1;  // Empty prefix has sum 0
    int sum = 0, count = 0;

    for (int num : nums) {
        sum += num;
        // If (sum - k) was a previous prefix sum,
        // then the subarray between them sums to k
        if (prefixCount.count(sum - k))
            count += prefixCount[sum - k];
        prefixCount[sum]++;
    }

    cout << "Subarrays with sum " << k << ": " << count << endl;
    return 0;
}
```

This is the prefix sum + hash map pattern. If prefix[j] - prefix[i] = k, then the subarray from i+1 to j sums to k. We store prefix sum frequencies in a hash map. For each position, we check if (current_sum - k) exists as a previous prefix sum. This solves the problem in O(n) instead of O(n^2).

**Output:**

```
Subarrays with sum 3: 4
```

### Binary Search on Answer: Minimum Maximum Pages Allocation

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;

// Can we allocate books to m students with max pages = maxPages?
bool canAllocate(vector<int>& books, int m, int maxPages) {
    int students = 1, currentPages = 0;
    for (int pages : books) {
        if (pages > maxPages) return false;  // Single book exceeds limit
        if (currentPages + pages > maxPages) {
            students++;
            currentPages = pages;
        } else {
            currentPages += pages;
        }
    }
    return students <= m;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    vector<int> books = {12, 34, 67, 90};
    int students = 2;

    int lo = *max_element(books.begin(), books.end());
    int hi = accumulate(books.begin(), books.end(), 0);
    int answer = hi;

    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        if (canAllocate(books, students, mid)) {
            answer = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    cout << "Minimum maximum pages: " << answer << endl;
    return 0;
}
```

Binary search on the answer: instead of searching for an element, we binary search the solution space. Here the answer (maximum pages any student reads) lies between max(books) and sum(books). For each candidate answer, we check feasibility with a greedy allocation. Total: O(n log(sum)) time. This pattern appears in hundreds of competitive programming problems.

**Output:**

```
Minimum maximum pages: 113
```

### Bit Manipulation: Common Tricks

```cpp
#include <iostream>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int n = 42;  // Binary: 101010

    // Check if ith bit is set (0-indexed from right)
    int i = 3;
    cout << "Bit " << i << " of " << n << ": " << ((n >> i) & 1) << endl;

    // Set the ith bit
    int setResult = n | (1 << 0);  // Set bit 0: 101010 -> 101011
    cout << "After setting bit 0: " << setResult << endl;

    // Clear the ith bit
    int clearResult = n & ~(1 << 1);  // Clear bit 1: 101010 -> 101000
    cout << "After clearing bit 1: " << clearResult << endl;

    // Toggle the ith bit
    int toggleResult = n ^ (1 << 3);  // Toggle bit 3: 101010 -> 100010
    cout << "After toggling bit 3: " << toggleResult << endl;

    // Check if power of 2
    for (int x : {1, 4, 6, 8, 16, 15}) {
        bool isPow2 = (x > 0) && ((x & (x - 1)) == 0);
        cout << x << " is " << (isPow2 ? "" : "not ") << "power of 2" << endl;
    }

    // Count set bits (popcount)
    int x = 29;  // 11101 -> 4 set bits
    cout << "Set bits in " << x << ": " << __builtin_popcount(x) << endl;

    // XOR properties: a ^ a = 0, a ^ 0 = a
    // Find the single number in array where every other appears twice
    int arr[] = {4, 1, 2, 1, 2};
    int single = 0;
    for (int val : arr) single ^= val;
    cout << "Single number: " << single << endl;

    return 0;
}
```

Bit manipulation provides O(1) operations for common tasks. Check bit: `(n >> i) & 1`. Set bit: `n | (1 << i)`. Clear bit: `n & ~(1 << i)`. Toggle bit: `n ^ (1 << i)`. Power of 2: `n & (n-1) == 0`. XOR to find the unique element: pairs cancel out since a ^ a = 0. `__builtin_popcount` counts set bits in O(1).

**Output:**

```
Bit 3 of 42: 1
After setting bit 0: 43
After clearing bit 1: 40
After toggling bit 3: 34
1 is power of 2
4 is power of 2
6 is not power of 2
8 is power of 2
16 is power of 2
15 is not power of 2
Set bits in 29: 4
Single number: 4
```

### Greedy: Activity Selection Problem

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    // {start, end} times
    vector<pair<int,int>> activities = {
        {1, 4}, {3, 5}, {0, 6}, {5, 7}, {3, 8},
        {5, 9}, {6, 10}, {8, 11}, {8, 12}, {2, 13}, {12, 14}
    };

    // Greedy: sort by end time, pick non-overlapping
    sort(activities.begin(), activities.end(),
        [](const pair<int,int>& a, const pair<int,int>& b) {
            return a.second < b.second;
        });

    vector<pair<int,int>> selected;
    int lastEnd = -1;
    for (auto& [start, end] : activities) {
        if (start >= lastEnd) {
            selected.push_back({start, end});
            lastEnd = end;
        }
    }

    cout << "Maximum activities: " << selected.size() << endl;
    for (auto& [s, e] : selected)
        cout << "[" << s << ", " << e << "] ";
    cout << endl;
    return 0;
}
```

The greedy algorithm makes the locally optimal choice at each step. For activity selection, the greedy strategy is: sort by end time and always pick the next compatible activity (the one that starts after the current one ends). This provably gives the maximum number of non-overlapping activities. Greedy works when the problem has the greedy choice property and optimal substructure.

**Output:**

```
Maximum activities: 4
[1, 4] [5, 7] [8, 11] [12, 14]
```

### Greedy: Fractional Knapsack

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    // {value, weight}
    vector<pair<double, double>> items = {
        {60, 10}, {100, 20}, {120, 30}
    };
    double capacity = 50;

    // Sort by value/weight ratio in descending order
    sort(items.begin(), items.end(),
        [](const pair<double,double>& a, const pair<double,double>& b) {
            return (a.first / a.second) > (b.first / b.second);
        });

    double totalValue = 0;
    double remaining = capacity;

    for (auto& [value, weight] : items) {
        if (remaining >= weight) {
            // Take the whole item
            totalValue += value;
            remaining -= weight;
            cout << "Take full item: value=" << value << ", weight=" << weight << endl;
        } else if (remaining > 0) {
            // Take a fraction
            double fraction = remaining / weight;
            totalValue += value * fraction;
            cout << "Take " << (fraction * 100) << "% of item: value=" << value
                 << ", weight=" << weight << endl;
            remaining = 0;
        }
    }

    cout << "Total value: " << totalValue << endl;
    return 0;
}
```

Fractional knapsack is solvable by greedy: sort items by value-to-weight ratio and take as much of the highest-ratio item as possible. Unlike 0/1 knapsack (which requires dynamic programming), fractional knapsack allows taking fractions of items, making the greedy approach optimal.

**Output:**

```
Take full item: value=60, weight=10
Take full item: value=100, weight=20
Take 66.6667% of item: value=120, weight=30
Total value: 240
```

## Common Mistakes

### Forgetting Fast I/O (Causes TLE on Large Inputs)

**Wrong:**

```
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;  // Slow! cin syncs with C stdio
    // Processing large input causes TLE
}
```

By default, cin/cout sync with C's scanf/printf, adding overhead. For inputs with 10^5+ elements, this can cause Time Limit Exceeded on online judges.

**Correct:**

```
#include <iostream>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;  // Now fast!
    // Process efficiently
}
```

`ios_base::sync_with_stdio(false)` disables synchronization between C and C++ I/O streams. `cin.tie(nullptr)` unties cin from cout so cout is not flushed before every cin. Add these two lines at the start of every competitive programming solution.

### Integer Overflow in Prefix Sum or Binary Search

**Wrong:**

```
vector<int> v(100000, 1000000);
int sum = 0;
for (int x : v) sum += x;  // Overflow! sum exceeds INT_MAX

int lo = 0, hi = 2000000000;
int mid = (lo + hi) / 2;  // Overflow when lo + hi > INT_MAX
```

int stores up to ~2.1 billion. Prefix sums and binary search midpoints can exceed this, causing silent overflow and wrong answers.

**Correct:**

```
vector<int> v(100000, 1000000);
long long sum = 0;
for (int x : v) sum += x;  // Use long long

long long lo = 0, hi = 2000000000;
long long mid = lo + (hi - lo) / 2;  // Overflow-safe midpoint
```

Use `long long` for prefix sums, cumulative products, and binary search bounds. Compute midpoint as `lo + (hi - lo) / 2` instead of `(lo + hi) / 2` to avoid overflow.

### Off-by-One in Sliding Window Size

**Wrong:**

```
// Sliding window of size k, but window has k+1 elements
for (int i = k; i < n; i++) {
    windowSum += arr[i] - arr[i - k - 1];  // Wrong index!
}
```

When sliding a window of size k, the element leaving the window is at index i-k, not i-k-1. Off-by-one errors are the most common bug in sliding window problems.

**Correct:**

```
// Correct: element leaving is at index i-k
for (int i = k; i < n; i++) {
    windowSum += arr[i] - arr[i - k];  // Correct!
}
```

When the window right end is at index i, the window contains elements from i-k+1 to i (inclusive). The element leaving is at index i-k. Always verify window boundaries with a small example.

### Binary Search on Answer with Wrong Bounds

**Wrong:**

```
int lo = 0, hi = n;
while (lo < hi) {
    int mid = lo + (hi - lo) / 2;
    if (canDo(mid))
        hi = mid;  // But never check lo == hi
    else
        lo = mid;  // Infinite loop when lo + 1 == hi!
}
```

When lo = mid (not mid + 1), the search can get stuck in an infinite loop because lo never advances past mid when lo + 1 == hi.

**Correct:**

```
// Pattern 1: lo <= hi (inclusive bounds)
int lo = minVal, hi = maxVal;
while (lo <= hi) {
    int mid = lo + (hi - lo) / 2;
    if (canDo(mid)) {
        answer = mid;
        hi = mid - 1;
    } else {
        lo = mid + 1;
    }
}
// answer is the result
```

Use consistent binary search templates. The `lo <= hi` template with `lo = mid + 1` and `hi = mid - 1` is the safest and avoids infinite loops. Always move both pointers past mid.

### Using Bit Shift on Signed Negative Numbers

**Wrong:**

```
int x = -1;
int result = x >> 1;
// Implementation-defined behavior!
```

Right-shifting a negative signed integer is implementation-defined in C++. The result depends on the compiler (arithmetic vs logical shift). This can cause wrong answers on different judges.

**Correct:**

```
unsigned int x = 0xFFFFFFFF;  // Use unsigned for bit manipulation
unsigned int result = x >> 1;
// Or use unsigned explicitly:
int n = -5;
unsigned int bits = (unsigned int)n;
cout << __builtin_popcount(bits) << endl;
```

For bit manipulation, prefer unsigned integers. Right-shifting unsigned values always fills with zeros (logical shift). If you must use signed integers, be aware that the behavior of right-shift on negatives varies by compiler.

## Summary

- Fast I/O is mandatory in competitive programming. Add ios_base::sync_with_stdio(false) and cin.tie(nullptr) at the start of every solution. This alone can prevent TLE on problems with large inputs.
- Two pointers technique uses two indices that move toward each other (or in the same direction) to solve problems in O(n). Classic applications: pair sum in sorted array, container with most water, removing duplicates, and merging sorted arrays.
- Sliding window maintains a fixed or variable-size window that slides across the array. Fixed window: max sum subarray of size k. Variable window: longest substring without repeating characters. Both reduce O(n*k) or O(n^2) to O(n).
- Prefix sum precomputes cumulative sums so that range sum queries are O(1): sum(l, r) = prefix[r] - prefix[l-1]. The prefix sum + hash map pattern solves subarray sum equals k in O(n).
- Binary search on the answer binary searches the solution space instead of the array. The pattern is: define a range [lo, hi] for the answer, check feasibility with a greedy/simulation function, and narrow the range. Complexity: O(n log(answer_range)).
- Bit manipulation provides O(1) operations: check bit ((n >> i) & 1), set bit (n | (1 << i)), clear bit (n & ~(1 << i)), toggle bit (n ^ (1 << i)), power of 2 check (n & (n-1) == 0), count set bits (__builtin_popcount).
- XOR has three key properties: a ^ a = 0, a ^ 0 = a, and XOR is commutative/associative. This allows finding the single non-duplicate element in O(n) time O(1) space by XORing all elements.
- Greedy algorithms make the locally optimal choice at each step. Activity selection: sort by end time, pick non-overlapping. Fractional knapsack: sort by value/weight ratio. Greedy works only when the problem has the greedy choice property.
- Always use long long for prefix sums and binary search bounds to avoid integer overflow. Compute midpoint as lo + (hi - lo) / 2 instead of (lo + hi) / 2.
- Time complexity analysis is essential: O(n) solutions handle n up to 10^7, O(n log n) handles up to 10^6, O(n^2) handles up to 10^4, and O(2^n) handles up to about 20. Always check constraints before choosing an approach.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/competitive-programming-patterns/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/competitive-programming-patterns/practice/*
