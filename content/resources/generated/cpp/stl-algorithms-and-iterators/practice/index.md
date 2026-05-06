---
title: "Practice: STL Algorithms and Iterators"
description: "58 practice problems for STL Algorithms and Iterators in C++"
slug: stl-algorithms-and-iterators-practice
canonical: https://learn.modernagecoders.com/resources/cpp/stl-algorithms-and-iterators/practice/
category: "C++"
---
# Practice: STL Algorithms and Iterators

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```cpp
vector v = {5, 3, 1, 4, 2};
sort(v.begin(), v.end());
for (int x : v) cout << x << " ";
```

*Hint:* sort arranges elements in ascending order by default.

**Answer:** `1 2 3 4 5`

`sort` with no comparator sorts in ascending order. The vector becomes {1, 2, 3, 4, 5}.

### Q2. [Easy] What is the output?

```cpp
vector v = {5, 3, 1, 4, 2};
sort(v.begin(), v.end(), greater());
cout << v[0] << " " << v[4];
```

*Hint:* greater() sorts in descending order.

**Answer:** `5 1`

`greater()` reverses the comparison, sorting in descending order: {5, 4, 3, 2, 1}. v[0] = 5, v[4] = 1.

### Q3. [Easy] What is the output?

```cpp
vector v = {10, 20, 30, 40, 50};
auto it = v.begin() + 2;
cout << *it;
```

*Hint:* begin() points to the first element. Adding 2 moves two positions forward.

**Answer:** `30`

`v.begin()` points to 10. Adding 2 moves to the element at index 2, which is 30.

### Q4. [Easy] What is the output?

```cpp
vector v = {1, 2, 3, 4, 5};
int sum = accumulate(v.begin(), v.end(), 0);
cout << sum;
```

*Hint:* accumulate adds all elements starting from the initial value 0.

**Answer:** `15`

`accumulate` computes 0 + 1 + 2 + 3 + 4 + 5 = 15. The third argument is the initial value.

### Q5. [Easy] What is the output?

```cpp
vector v = {1, 2, 3, 4, 5};
reverse(v.begin(), v.end());
cout << v[0] << " " << v[4];
```

*Hint:* reverse flips the entire range.

**Answer:** `5 1`

`reverse` reverses the vector in-place: {5, 4, 3, 2, 1}. v[0] = 5, v[4] = 1.

### Q6. [Easy] What is the output?

```cpp
vector v = {3, 1, 4, 1, 5, 9};
auto it = min_element(v.begin(), v.end());
cout << *it << " " << (it - v.begin());
```

*Hint:* min_element returns an iterator to the smallest element.

**Answer:** `1 1`

`min_element` returns an iterator to the first occurrence of the minimum value (1), which is at index 1.

### Q7. [Medium] What is the output?

```cpp
vector v = {1, 3, 3, 3, 5, 7, 9};
auto lo = lower_bound(v.begin(), v.end(), 3);
auto hi = upper_bound(v.begin(), v.end(), 3);
cout << (lo - v.begin()) << " " << (hi - v.begin()) << " " << (hi - lo);
```

*Hint:* lower_bound returns first >= 3, upper_bound returns first > 3.

**Answer:** `1 4 3`

`lower_bound(3)` points to index 1 (first 3). `upper_bound(3)` points to index 4 (the 5, first element > 3). The count of 3s is 4 - 1 = 3.

### Q8. [Medium] What is the output?

```cpp
vector v = {1, 2, 3, 4, 5};
rotate(v.begin(), v.begin() + 2, v.end());
for (int x : v) cout << x << " ";
```

*Hint:* rotate moves the element pointed to by the second argument to the first position.

**Answer:** `3 4 5 1 2`

`rotate(begin, begin+2, end)` makes the element at index 2 the new first element. This is a left rotation by 2 positions: {3, 4, 5, 1, 2}.

### Q9. [Medium] What is the output?

```cpp
vector v = {1, 2, 3, 4, 5};
int product = accumulate(v.begin(), v.end(), 1, multiplies());
cout << product;
```

*Hint:* multiplies() replaces addition with multiplication. The initial value is 1.

**Answer:** `120`

`accumulate` with `multiplies()` computes 1 * 1 * 2 * 3 * 4 * 5 = 120. The initial value 1 is the identity for multiplication.

### Q10. [Medium] What is the output?

```cpp
vector v = {1, 2, 3, 4, 5};
vector prefix(5);
partial_sum(v.begin(), v.end(), prefix.begin());
cout << prefix[2] << " " << prefix[4];
```

*Hint:* partial_sum computes running totals: prefix[i] = v[0] + v[1] + ... + v[i].

**Answer:** `6 15`

prefix = {1, 3, 6, 10, 15}. prefix[2] = 1+2+3 = 6. prefix[4] = 1+2+3+4+5 = 15.

### Q11. [Medium] What is the output?

```cpp
vector v = {1, 2, 3, 2, 4, 2, 5};
v.erase(remove(v.begin(), v.end(), 2), v.end());
cout << v.size() << ": ";
for (int x : v) cout << x << " ";
```

*Hint:* remove moves non-2 elements forward, erase shrinks the vector.

**Answer:** `4: 1 3 4 5`

The erase-remove idiom removes all occurrences of 2. Three 2s are removed, leaving 4 elements: {1, 3, 4, 5}.

### Q12. [Medium] What is the output?

```cpp
vector v = {1, 1, 2, 2, 3, 3, 3};
auto last = unique(v.begin(), v.end());
cout << (last - v.begin());
v.erase(last, v.end());
cout << " " << v.size();
```

*Hint:* unique removes consecutive duplicates and returns an iterator to the new logical end.

**Answer:** `3 3`

`unique` removes consecutive duplicates, leaving {1, 2, 3, ...}. The new logical end is at index 3. After `erase`, the vector has 3 elements.

### Q13. [Hard] What is the output?

```cpp
vector v = {5, 2, 8, 1, 9, 3};
nth_element(v.begin(), v.begin() + 2, v.end());
cout << v[2];
```

*Hint:* nth_element places the element that would be at position 2 in a sorted array.

**Answer:** `3`

If sorted, v would be {1, 2, 3, 5, 8, 9}. `nth_element` places 3 at index 2. Elements before it are <= 3 and elements after are >= 3, but their order is unspecified.

### Q14. [Hard] What is the output?

```cpp
string s = "CBA";
prev_permutation(s.begin(), s.end());
cout << s << endl;
prev_permutation(s.begin(), s.end());
cout << s;
```

*Hint:* prev_permutation generates the lexicographically previous permutation.

**Answer:** `CAB`
`BCA`

Starting from "CBA" (last permutation), prev_permutation gives "CAB", then "BCA". The full descending order is: CBA, CAB, BCA, BAC, ACB, ABC.

## Mixed Questions

### Q1. [Easy] What is the output?

```cpp
vector v = {1, 2, 3, 4, 5};
cout << *v.begin() << " " << *(v.end() - 1);
```

*Hint:* begin() points to first element. end() points past the last, so end()-1 is the last element.

**Answer:** `1 5`

`v.begin()` points to 1. `v.end()` is past-the-end, so `v.end() - 1` points to the last element, 5.

### Q2. [Easy] What is the output?

```cpp
vector v = {10, 20, 30, 40, 50};
auto it = find(v.begin(), v.end(), 30);
cout << (it - v.begin());
```

*Hint:* find returns an iterator to the found element.

**Answer:** `2`

`find` locates 30 and returns an iterator pointing to it. Subtracting `v.begin()` gives the index: 2.

### Q3. [Easy] What is the output?

```cpp
vector v(5);
iota(v.begin(), v.end(), 3);
for (int x : v) cout << x << " ";
```

*Hint:* iota fills with incrementing values starting from the second argument.

**Answer:** `3 4 5 6 7`

`iota` fills the vector with consecutive values starting from 3: {3, 4, 5, 6, 7}.

### Q4. [Medium] What is the output?

```cpp
vector v = {1, 2, 3, 4, 5, 6};
int cnt = count_if(v.begin(), v.end(), [](int x) { return x % 2 == 0; });
cout << cnt;
```

*Hint:* count_if counts elements satisfying the predicate.

**Answer:** `3`

Even numbers in {1,2,3,4,5,6} are 2, 4, 6. `count_if` returns 3.

### Q5. [Medium] What is the output?

```cpp
vector v = {1, 2, 3, 4};
vector result(4);
transform(v.begin(), v.end(), result.begin(), [](int x) { return x * x; });
for (int x : result) cout << x << " ";
```

*Hint:* transform applies the lambda to each element.

**Answer:** `1 4 9 16`

`transform` squares each element: 1*1=1, 2*2=4, 3*3=9, 4*4=16.

### Q6. [Medium] What is the output?

```cpp
vector a = {1, 2, 3};
vector b = {4, 5, 6};
int dot = inner_product(a.begin(), a.end(), b.begin(), 0);
cout << dot;
```

*Hint:* inner_product computes sum of element-wise products.

**Answer:** `32`

Dot product: 1*4 + 2*5 + 3*6 = 4 + 10 + 18 = 32.

### Q7. [Medium] What is the output?

```cpp
vector v = {1, 2, 3, 4, 5};
vector w(5);
fill(w.begin(), w.end(), 7);
cout << accumulate(w.begin(), w.end(), 0);
```

*Hint:* fill sets all elements to 7. accumulate sums them.

**Answer:** `35`

`fill` sets all 5 elements to 7. `accumulate` sums: 7*5 = 35.

### Q8. [Hard] What is the output?

```cpp
vector> v = {{"Arjun",85}, {"Priya",92}, {"Kiran",78}};
sort(v.begin(), v.end(), [](const pair<string,int>& a, const pair<string,int>& b) {
    return a.second > b.second;
});
cout << v[0].first << " " << v[2].first;
```

*Hint:* Sorting by second element in descending order.

**Answer:** `Priya Kiran`

After sorting by marks descending: {Priya,92}, {Arjun,85}, {Kiran,78}. v[0].first = "Priya", v[2].first = "Kiran".

### Q9. [Hard] What is the output?

```cpp
vector v = {1, 2, 3};
sort(v.begin(), v.end());
int count = 0;
do { count++; } while (next_permutation(v.begin(), v.end()));
cout << count;
```

*Hint:* Starting from sorted, how many permutations does next_permutation generate?

**Answer:** `6`

For 3 elements, there are 3! = 6 permutations. Starting from {1,2,3} (sorted), the do-while loop counts all 6 permutations before next_permutation returns false.

### Q10. [Hard] What is the output?

```cpp
vector v = {3, 1, 4, 1, 5, 9, 2, 6};
auto [lo, hi] = minmax_element(v.begin(), v.end());
cout << *lo << " " << *hi << " " << (hi - lo);
```

*Hint:* minmax_element returns iterators to the min and max elements.

**Answer:** `1 9 4`

Min is 1 at index 1, max is 9 at index 5. *lo=1, *hi=9, (hi-lo) = 5-1 = 4.

### Q11. [Hard] What is the output?

```cpp
vector v = {1, 2, 3, 4, 5};
replace_if(v.begin(), v.end(), [](int x) { return x > 3; }, 0);
for (int x : v) cout << x << " ";
```

*Hint:* replace_if replaces elements matching the predicate with the given value.

**Answer:** `1 2 3 0 0`

`replace_if` replaces elements where x > 3 with 0. Elements 4 and 5 are replaced: {1, 2, 3, 0, 0}.

### Q12. [Medium] What is the difference between stable_sort and sort? When would you use stable_sort?

*Hint:* Think about what happens to elements with equal keys.

**Answer:** `sort` is O(n log n) but does not preserve the relative order of equal elements. `stable_sort` is also O(n log n) but guarantees that equal elements maintain their original order. Use `stable_sort` when sorting students by marks and wanting students with the same marks to remain in their original order (e.g., alphabetical order from a previous sort).

Stability matters when you sort by one key after already sorting by another. For example, if you sort by name first, then stable_sort by marks, students with equal marks remain in alphabetical order. Regular `sort` may rearrange them arbitrarily.

### Q13. [Hard] Why is lower_bound more useful than binary_search in competitive programming?

*Hint:* Think about what each returns.

**Answer:** `binary_search` returns only a `bool` (true/false). `lower_bound` returns an **iterator** to the first element >= the target value. This gives you the position, which lets you: (1) find the actual index, (2) count occurrences using upper_bound - lower_bound, (3) find the nearest value if the exact value does not exist. In competitive programming, you almost always need the position, not just existence.

If you need to find the insertion point, count occurrences, or find the closest element, `lower_bound` is the tool. `binary_search` is rarely used in competitive programming for this reason.

## Multiple Choice Questions

### Q1. [Easy] Which header provides sort, find, and binary_search?

**Answer:** B

**B is correct.** The `` header provides sort, find, binary_search, reverse, rotate, and most STL algorithms.

### Q2. [Easy] What does accumulate (from ) do?

**Answer:** C

**C is correct.** `accumulate` folds a range using an operation (addition by default). You can pass a custom binary operation like `multiplies()`.

### Q3. [Easy] What does v.end() point to?

**Answer:** B

**B is correct.** `end()` returns a past-the-end iterator. It does not point to any element and must not be dereferenced.

### Q4. [Easy] Which algorithm finds the first occurrence of a value in an unsorted range?

**Answer:** C

**C is correct.** `find` performs a linear search and works on unsorted ranges. `binary_search` and `lower_bound` require sorted ranges.

### Q5. [Easy] What type of iterator does std::vector provide?

**Answer:** D

**D is correct.** `std::vector` provides random-access iterators, which support +, -, [], and comparison operators in O(1).

### Q6. [Medium] What is the time complexity of std::sort?

**Answer:** C

**C is correct.** `std::sort` uses introsort (hybrid of quicksort, heapsort, and insertion sort), which guarantees O(n log n) worst-case.

### Q7. [Medium] What does lower_bound return when the target value is not in the sorted range?

**Answer:** B

**B is correct.** `lower_bound` returns an iterator to the first element >= the target. If the target is not present, this is the first element greater than it (the insertion point).

### Q8. [Medium] What does std::remove actually do?

**Answer:** B

**B is correct.** `remove` does not change the container's size. It rearranges elements so that non-removed ones are at the front and returns an iterator to the new logical end. Use the erase-remove idiom to actually shrink the container.

### Q9. [Medium] Which algorithm would you use to compute prefix sums?

**Answer:** B

**B is correct.** `partial_sum` computes running totals: result[i] = v[0] + v[1] + ... + v[i]. `accumulate` computes only the final total.

### Q10. [Medium] Why can't you use std::sort on a std::list?

**Answer:** B

**B is correct.** `std::sort` requires random-access iterators for O(1) index arithmetic. `std::list` provides only bidirectional iterators. Use the member function `lst.sort()` instead.

### Q11. [Hard] What is the time complexity of nth_element?

**Answer:** B

**B is correct.** `nth_element` uses introselect (a hybrid of quickselect and median-of-medians) and runs in O(n) on average. It places the nth element in its correct sorted position without fully sorting the range.

### Q12. [Hard] What does next_permutation return when the sequence is in descending order (last permutation)?

**Answer:** B

**B is correct.** When the sequence is the last permutation (fully descending), `next_permutation` wraps around to the first permutation (ascending) and returns false.

### Q13. [Hard] What is the difference between partial_sort(begin, begin+k, end) and sorting the entire range?

**Answer:** B

**B is correct.** `partial_sort` has O(n log k) complexity. It places the k smallest elements in sorted order at the beginning. The remaining elements are in unspecified order. This is faster than full sort when k is much smaller than n.

### Q14. [Hard] What does equal_range return?

**Answer:** C

**C is correct.** `equal_range` returns a `pair<iterator, iterator>` where first = lower_bound and second = upper_bound. The distance between them is the count of the value.

### Q15. [Medium] What does iota(v.begin(), v.end(), 5) fill the vector with?

**Answer:** B

**B is correct.** `iota` fills the range with sequentially increasing values starting from the third argument. Each element is one more than the previous.

### Q16. [Easy] What does reverse(v.begin(), v.end()) do?

**Answer:** B

**B is correct.** `reverse` reverses the elements in-place. It does not sort and does not return a copy.

## Coding Challenges

### Challenge 1. Sort Students by Marks, Break Ties by Name

**Difficulty:** Easy

Given a vector of pairs where each pair is {name, marks}, sort the students by marks in descending order. If two students have the same marks, sort them alphabetically by name.

**Constraints:**

- Use sort with a custom lambda comparator. Do not write your own sorting algorithm.

**Sample input:**

```
{"Arjun", 85}, {"Priya", 92}, {"Kiran", 85}, {"Neha", 92}, {"Ravi", 78}
```

**Sample output:**

```
Neha 92
Priya 92
Arjun 85
Kiran 85
Ravi 78
```

**Solution:**

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<pair<string, int>> students = {
        {"Arjun", 85}, {"Priya", 92}, {"Kiran", 85}, {"Neha", 92}, {"Ravi", 78}
    };
    sort(students.begin(), students.end(),
        [](const pair<string,int>& a, const pair<string,int>& b) {
            if (a.second != b.second) return a.second > b.second;
            return a.first < b.first;
        });
    for (auto& [name, marks] : students)
        cout << name << " " << marks << endl;
    return 0;
}
```

### Challenge 2. Count Elements in Range Using Binary Search

**Difficulty:** Medium

Given a sorted vector and two values L and R, count the number of elements in the range [L, R] (inclusive) using lower_bound and upper_bound. Do not use a loop to count.

**Constraints:**

- Use lower_bound and upper_bound. O(log n) time complexity.

**Sample input:**

```
v = {1, 3, 3, 5, 7, 7, 7, 9, 11}, L = 3, R = 7
```

**Sample output:**

```
Count in [3, 7]: 6
```

**Solution:**

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {1, 3, 3, 5, 7, 7, 7, 9, 11};
    int L = 3, R = 7;
    auto lo = lower_bound(v.begin(), v.end(), L);
    auto hi = upper_bound(v.begin(), v.end(), R);
    cout << "Count in [" << L << ", " << R << "]: " << (hi - lo) << endl;
    return 0;
}
```

### Challenge 3. Remove Duplicates From Unsorted Vector

**Difficulty:** Medium

Given an unsorted vector, remove all duplicate elements and keep only unique values in sorted order. Use sort and the erase-remove idiom with unique.

**Constraints:**

- Use sort + unique + erase. Do not use a set or map.

**Sample input:**

```
{5, 3, 1, 3, 5, 2, 1, 4, 2}
```

**Sample output:**

```
1 2 3 4 5
```

**Solution:**

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {5, 3, 1, 3, 5, 2, 1, 4, 2};
    sort(v.begin(), v.end());
    v.erase(unique(v.begin(), v.end()), v.end());
    for (int x : v) cout << x << " ";
    cout << endl;
    return 0;
}
```

### Challenge 4. Find Kth Largest Element Without Full Sort

**Difficulty:** Hard

Given a vector of n integers, find the kth largest element using nth_element in O(n) average time. Do not fully sort the array.

**Constraints:**

- Use nth_element. O(n) average time complexity.

**Sample input:**

```
v = {3, 2, 1, 5, 6, 4}, k = 2
```

**Sample output:**

```
2nd largest element: 5
```

**Solution:**

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {3, 2, 1, 5, 6, 4};
    int k = 2;
    nth_element(v.begin(), v.begin() + k - 1, v.end(), greater<int>());
    cout << k << "nd largest element: " << v[k - 1] << endl;
    return 0;
}
```

### Challenge 5. Generate All Permutations and Count Those Divisible by K

**Difficulty:** Hard

Given a vector of single-digit numbers, generate all permutations, form the number from each permutation, and count how many are divisible by a given value K.

**Constraints:**

- Use sort + next_permutation. Assume digits fit in an int.

**Sample input:**

```
digits = {1, 2, 3}, K = 3
```

**Sample output:**

```
123 divisible by 3
132 divisible by 3
213 divisible by 3
231 divisible by 3
312 divisible by 3
321 divisible by 3
Count: 6
```

**Solution:**

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> digits = {1, 2, 3};
    int K = 3;
    sort(digits.begin(), digits.end());
    int count = 0;
    do {
        int num = 0;
        for (int d : digits) num = num * 10 + d;
        if (num % K == 0) {
            cout << num << " divisible by " << K << endl;
            count++;
        }
    } while (next_permutation(digits.begin(), digits.end()));
    cout << "Count: " << count << endl;
    return 0;
}
```

### Challenge 6. Range Sum Queries Using partial_sum

**Difficulty:** Medium

Given an array and multiple queries of the form (L, R), answer each query with the sum of elements from index L to R (inclusive) in O(1) per query using prefix sums built with partial_sum.

**Constraints:**

- Use partial_sum to build prefix array. Each query must be O(1).

**Sample input:**

```
v = {2, 4, 6, 8, 10}, queries = {(1,3), (0,4), (2,2)}
```

**Sample output:**

```
Sum [1, 3] = 18
Sum [0, 4] = 30
Sum [2, 2] = 6
```

**Solution:**

```cpp
#include <iostream>
#include <vector>
#include <numeric>
using namespace std;

int main() {
    vector<int> v = {2, 4, 6, 8, 10};
    vector<int> prefix(v.size());
    partial_sum(v.begin(), v.end(), prefix.begin());

    auto rangeSum = [&](int l, int r) {
        return prefix[r] - (l > 0 ? prefix[l - 1] : 0);
    };

    vector<pair<int,int>> queries = {{1,3}, {0,4}, {2,2}};
    for (auto [l, r] : queries)
        cout << "Sum [" << l << ", " << r << "] = " << rangeSum(l, r) << endl;
    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/stl-algorithms-and-iterators/*
