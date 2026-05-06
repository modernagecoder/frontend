---
title: "Practice: STL Containers - vector, list, map, set, stack, queue"
description: "61 practice problems for STL Containers - vector, list, map, set, stack, queue in C++"
slug: stl-containers-practice
canonical: https://learn.modernagecoders.com/resources/cpp/stl-containers/practice/
category: "C++"
---
# Practice: STL Containers - vector, list, map, set, stack, queue

**Total questions:** 61

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```cpp
vector v = {10, 20, 30};
v.push_back(40);
cout << v.size() << " " << v[3];
```

*Hint:* push_back adds to the end. Size increases by 1.

**Answer:** `4 40`

push_back adds 40 to the end. The vector now has 4 elements: {10, 20, 30, 40}. v[3] = 40.

### Q2. [Easy] What is the output?

```cpp
set s = {5, 2, 8, 2, 1, 5};
cout << s.size();
```

*Hint:* set stores unique elements only.

**Answer:** `4`

set removes duplicates. The unique elements are {1, 2, 5, 8}, so size is 4.

### Q3. [Easy] What is the output?

```cpp
set s = {30, 10, 20};
for (int x : s) cout << x << " ";
```

*Hint:* set maintains sorted order.

**Answer:** `10 20 30`

set stores elements in sorted (ascending) order regardless of insertion order.

### Q4. [Easy] What is the output?

```cpp
stack st;
st.push(10);
st.push(20);
st.push(30);
cout << st.top();
st.pop();
cout << " " << st.top();
```

*Hint:* Stack is LIFO. top() shows the last pushed element.

**Answer:** `30 20`

After pushing 10, 20, 30: top is 30. After pop, top becomes 20.

### Q5. [Easy] What is the output?

```cpp
queue q;
q.push(10);
q.push(20);
q.push(30);
cout << q.front() << " " << q.back();
```

*Hint:* Queue is FIFO. front() is the first element pushed.

**Answer:** `10 30`

Queue is FIFO. front() returns the first pushed (10), back() returns the last pushed (30).

### Q6. [Easy] What is the output?

```cpp
map<string, int> m;
m["Kiran"] = 78;
m["Arjun"] = 85;
for (auto& [k, v] : m) cout << k << " ";
```

*Hint:* map iterates in sorted order of keys.

**Answer:** `Arjun Kiran`

map stores entries sorted by key. "Arjun" comes before "Kiran" alphabetically.

### Q7. [Medium] What is the output?

```cpp
vector v;
v.reserve(10);
v.push_back(1);
v.push_back(2);
cout << v.size() << " " << v.capacity();
```

*Hint:* reserve() sets capacity but does not change size.

**Answer:** `2 10`

reserve(10) allocates memory for 10 elements but size remains 0 until elements are added. After two push_back calls, size is 2 but capacity is 10.

### Q8. [Medium] What is the output?

```cpp
priority_queue pq;
pq.push(10);
pq.push(50);
pq.push(30);
pq.push(20);
cout << pq.top();
pq.pop();
cout << " " << pq.top();
```

*Hint:* priority_queue is a max-heap by default.

**Answer:** `50 30`

Max-heap: top is the largest element (50). After pop, the next largest (30) becomes top.

### Q9. [Medium] What is the output?

```cpp
priority_queue<int, vector, greater> pq;
pq.push(30);
pq.push(10);
pq.push(50);
cout << pq.top();
```

*Hint:* greater creates a min-heap.

**Answer:** `10`

With greater<int>, the priority_queue becomes a min-heap. The smallest element (10) is at the top.

### Q10. [Medium] What is the output?

```cpp
multiset ms = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5};
cout << ms.count(5) << " " << ms.count(7);
```

*Hint:* multiset allows duplicates. count() returns the number of occurrences.

**Answer:** `3 0`

The value 5 appears 3 times in the multiset. The value 7 does not appear, so count is 0.

### Q11. [Medium] What is the output?

```cpp
map<string, int> m;
m["Priya"] = 92;
m["Arjun"] = 85;
cout << m.size() << endl;
m["Ravi"];  // Access non-existent key
cout << m.size() << " " << m["Ravi"];
```

*Hint:* The [] operator on map creates a default entry if the key does not exist.

**Answer:** `2`
`3 0`

Initially 2 entries. Accessing m["Ravi"] with [] creates a new entry with default int value 0. Size becomes 3.

### Q12. [Medium] What is the output?

```cpp
set s = {1, 3, 5, 7, 9};
auto lb = s.lower_bound(4);
auto ub = s.upper_bound(7);
cout << *lb << " " << *ub;
```

*Hint:* lower_bound returns first element >= value. upper_bound returns first element > value.

**Answer:** `5 9`

lower_bound(4) points to 5 (first element >= 4). upper_bound(7) points to 9 (first element > 7).

### Q13. [Hard] What is the output?

```cpp
map<int, string> m = {{3, "C"}, {1, "A"}, {2, "B"}};
auto it = m.begin();
cout << it->first << ":" << it->second << " ";
++it; ++it;
cout << it->first << ":" << it->second;
```

*Hint:* map iterates in sorted order of keys.

**Answer:** `1:A 3:C`

Map is sorted by key: {1:A, 2:B, 3:C}. begin() points to {1,A}. After two increments, it points to {3,C}.

### Q14. [Hard] What is the output?

```cpp
vector v;
cout << v.size() << " ";
v.resize(5, 42);
cout << v.size() << " " << v[0] << " " << v[4] << " ";
v.resize(3);
cout << v.size() << " " << v[2];
```

*Hint:* resize(n, val) changes size. If growing, new elements get val. If shrinking, excess elements are removed.

**Answer:** `0 5 42 42 3 42`

Initially empty (size 0). resize(5, 42) fills with 42. resize(3) shrinks to first 3 elements (all 42).

### Q15. [Hard] What is the output?

```cpp
deque dq = {20, 30, 40};
dq.push_front(10);
dq.push_back(50);
dq.pop_front();
dq.pop_back();
cout << dq.front() << " " << dq.back() << " " << dq[1];
```

*Hint:* push_front/push_back add to ends, pop_front/pop_back remove from ends.

**Answer:** `20 40 30`

After push_front(10) and push_back(50): {10, 20, 30, 40, 50}. After pop_front and pop_back: {20, 30, 40}. front=20, back=40, dq[1]=30.

### Q16. [Medium] What is the output?

```cpp
set s = {5, 10, 15, 20, 25};
auto it = s.find(15);
if (it != s.end()) s.erase(it);
for (int x : s) cout << x << " ";
```

*Hint:* find returns an iterator. erase(iterator) removes that element.

**Answer:** `5 10 20 25`

find(15) returns an iterator to 15. erase(it) removes it. Remaining sorted set: {5, 10, 20, 25}.

### Q17. [Hard] What is the output?

```cpp
map<int, string> m = {{1,"one"}, {2,"two"}, {3,"three"}};
for (auto it = m.begin(); it != m.end(); ) {
    if (it->first % 2 == 0)
        it = m.erase(it);
    else
        ++it;
}
for (auto& [k, v] : m) cout << k << ":" << v << " ";
```

*Hint:* erase returns iterator to next element. Only erase even keys.

**Answer:** `1:one 3:three`

Erase key 2 (even). Keys 1 and 3 remain. The it = m.erase(it) pattern safely iterates while erasing.

### Q18. [Medium] What is the output?

```cpp
vector v = {1, 2, 3};
v.insert(v.end(), {4, 5, 6});
cout << v.size() << " " << v.back();
```

*Hint:* insert with initializer_list appends multiple elements.

**Answer:** `6 6`

insert at end() appends {4, 5, 6}. Vector becomes {1,2,3,4,5,6}. Size=6, back()=6.

### Q19. [Hard] What is the output?

```cpp
priority_queue, vector>, greater>> pq;
pq.push({3, "Kiran"});
pq.push({1, "Arjun"});
pq.push({2, "Priya"});
cout << pq.top().second;
```

*Hint:* Min-heap with pairs. Pairs compare lexicographically (first element first).

**Answer:** `Arjun`

Min-heap: smallest pair is {1, "Arjun"} (compared by first element). top().second = "Arjun".

### Q20. [Easy] What is the output?

```cpp
vector v;
cout << v.empty() << " ";
v.push_back(10);
cout << v.empty() << " " << v.front();
```

*Hint:* empty() returns true (1) if the vector has no elements.

**Answer:** `1 0 10`

Initially empty (true=1). After push_back, not empty (false=0). front() returns 10.

## Mixed Questions

### Q1. [Easy] What is the output?

```cpp
vector v = {1, 2, 3, 4, 5};
v.pop_back();
v.pop_back();
cout << v.size() << " " << v.back();
```

*Hint:* pop_back removes the last element.

**Answer:** `3 3`

Two pop_back calls remove 5 and 4. Remaining: {1, 2, 3}. Size is 3, back() is 3.

### Q2. [Easy] What is the output?

```cpp
set s = {10, 20, 30};
s.insert(20);
s.insert(40);
cout << s.size();
```

*Hint:* Inserting a duplicate into a set has no effect.

**Answer:** `4`

20 already exists, so insert(20) is ignored. insert(40) adds a new element. Size: {10, 20, 30, 40} = 4.

### Q3. [Easy] What is the output?

```cpp
stack st;
st.push('A');
st.push('B');
st.push('C');
st.pop();
cout << st.top() << " " << st.size();
```

*Hint:* Stack is LIFO. pop() removes the top element.

**Answer:** `B 2`

After pushing A, B, C: top is C. pop() removes C. Top becomes B. Size is 2.

### Q4. [Medium] What is the output?

```cpp
map<char, int> freq;
string s = "banana";
for (char c : s) freq[c]++;
cout << freq['a'] << " " << freq['n'] << " " << freq.size();
```

*Hint:* freq[c]++ increments the count for each character.

**Answer:** `3 2 3`

In "banana": 'a' appears 3 times, 'n' appears 2 times, 'b' appears 1 time. Three unique characters, so map size is 3.

### Q5. [Medium] What is the output?

```cpp
set s = {1, 2, 3, 4, 5};
s.erase(3);
cout << s.count(3) << " " << s.size();
```

*Hint:* erase removes the element. count checks if it exists.

**Answer:** `0 4`

erase(3) removes 3 from the set. count(3) returns 0 (not found). Size is now 4.

### Q6. [Medium] What is the output?

```cpp
vector v = {10, 20, 30};
v.insert(v.begin() + 1, 15);
for (int x : v) cout << x << " ";
```

*Hint:* insert(pos, val) inserts val before the given position.

**Answer:** `10 15 20 30`

insert at begin()+1 inserts 15 before index 1 (before 20). Result: {10, 15, 20, 30}.

### Q7. [Medium] What is the output?

```cpp
unordered_map<string, int> m;
m["Arjun"] = 85;
m["Priya"] = 92;
cout << (m.find("Arjun") != m.end()) << " ";
cout << (m.find("Kiran") != m.end());
```

*Hint:* find() returns end() if the key is not found.

**Answer:** `1 0`

"Arjun" exists, so find returns a valid iterator (not end), comparison is true (1). "Kiran" does not exist, so find returns end, comparison is false (0).

### Q8. [Hard] What is the output?

```cpp
priority_queue pq;
for (int x : {4, 1, 7, 3, 8, 2}) pq.push(x);
int sum = 0;
while (pq.size() > 3) {
    sum += pq.top();
    pq.pop();
}
cout << sum << " " << pq.top();
```

*Hint:* Max-heap pops the largest elements first. Stop when 3 elements remain.

**Answer:** `19 3`

Elements in max-heap order: 8, 7, 4, 3, 2, 1. Pop until 3 remain: pop 8 (sum=8), pop 7 (sum=15), pop 4 (sum=19). Remaining: {3, 2, 1}. Top = 3.

### Q9. [Hard] What is the output?

```cpp
multimap<string, int> mm;
mm.insert({"Arjun", 85});
mm.insert({"Arjun", 90});
mm.insert({"Arjun", 78});
mm.insert({"Priya", 92});
cout << mm.count("Arjun") << " " << mm.size();
```

*Hint:* multimap allows duplicate keys.

**Answer:** `3 4`

"Arjun" appears 3 times as a key. Total entries: 3 (Arjun) + 1 (Priya) = 4.

### Q10. [Hard] What is the output?

```cpp
set s = {10, 20, 30, 40, 50};
auto it1 = s.lower_bound(25);
auto it2 = s.upper_bound(30);
auto it3 = s.lower_bound(60);
cout << *it1 << " " << *it2 << " " << (it3 == s.end());
```

*Hint:* lower_bound(25) returns first >= 25. upper_bound(30) returns first > 30. lower_bound(60) returns end() if no element >= 60.

**Answer:** `30 40 1`

lower_bound(25) -> 30 (first >= 25). upper_bound(30) -> 40 (first > 30). lower_bound(60) -> end() since 60 > all elements.

### Q11. [Hard] What is the output?

```cpp
map<int, int> m = {{1, 10}, {2, 20}, {3, 30}};
m[2] = 25;
m.erase(1);
m.insert({4, 40});
for (auto& [k, v] : m) cout << k << ":" << v << " ";
```

*Hint:* [] overwrites existing values. erase removes by key. insert adds new entries.

**Answer:** `2:25 3:30 4:40`

m[2]=25 overwrites 20 with 25. erase(1) removes key 1. insert({4,40}) adds key 4. Sorted output: 2:25, 3:30, 4:40.

### Q12. [Medium] When would you choose unordered_map over map?

*Hint:* Think about time complexity and ordering requirements.

**Answer:** `unordered_map` provides O(1) average-case for insert, find, and erase, compared to O(log n) for `map`. Choose `unordered_map` when you do not need sorted order and want faster operations. Choose `map` when you need sorted iteration, lower_bound/upper_bound, or when the key type does not have a hash function.

In competitive programming, unordered_map is preferred for frequency counting and hash-based lookups. However, map is needed when the problem requires sorted order or range queries. Also, unordered_map has O(n) worst-case due to hash collisions, which can be exploited by adversarial inputs in some judges.

### Q13. [Hard] Why does the erase-iterate pattern require special care with maps and sets? Show the correct pattern.

*Hint:* Think about iterator invalidation.

**Answer:** When you erase an element from a map/set using an iterator, that iterator is invalidated. If you increment it after erasing, the behavior is undefined. The correct pattern is: `it = m.erase(it)` which returns an iterator to the next valid element. Alternatively, use `m.erase(it++)` which copies the iterator, increments the original, then erases the copy.

This is a common bug in competitive programming and interviews. The key insight is that `erase()` on associative containers returns the next iterator in C++11 and later. Use `it = m.erase(it)` in the branch that erases, and `++it` in the else branch.

### Q14. [Medium] What is the output?

```cpp
unordered_map<string, int> m;
m["a"] = 1;
m["b"] = 2;
m["c"] = 3;
cout << m.size() << " " << m.count("b") << " " << m.count("d");
```

*Hint:* count returns 1 if key exists, 0 if not.

**Answer:** `3 1 0`

Three entries. "b" exists (count=1). "d" does not exist (count=0).

### Q15. [Hard] What is the output?

```cpp
set a = {1, 2, 3, 4, 5};
set b = {3, 4, 5, 6, 7};
vector result;
set_intersection(a.begin(), a.end(), b.begin(), b.end(), back_inserter(result));
for (int x : result) cout << x << " ";
```

*Hint:* set_intersection finds common elements between two sorted ranges.

**Answer:** `3 4 5`

The intersection of {1,2,3,4,5} and {3,4,5,6,7} is {3,4,5}. set_intersection works because sets are sorted.

### Q16. [Easy] What is the output?

```cpp
stack st;
st.push(1);
st.push(2);
st.push(3);
cout << st.size() << " ";
while (!st.empty()) {
    cout << st.top() << " ";
    st.pop();
}
```

*Hint:* Stack is LIFO. Elements come out in reverse order.

**Answer:** `3 3 2 1`

Size is 3. Popping: 3 (top), 2, 1. LIFO order.

### Q17. [Medium] What is the output?

```cpp
queue q;
q.push("Arjun");
q.push("Priya");
q.push("Kiran");
q.pop();
cout << q.front() << " " << q.size();
```

*Hint:* Queue is FIFO. pop removes the front element.

**Answer:** `Priya 2`

FIFO: push Arjun, Priya, Kiran. pop removes Arjun (front). New front is Priya. Size is 2.

## Multiple Choice Questions

### Q1. [Easy] Which STL container stores elements in sorted order with no duplicates?

**Answer:** B

**B is correct.** `set` stores unique elements in sorted order using a balanced BST. `unordered_set` is unsorted, `vector` and `list` maintain insertion order.

### Q2. [Easy] What is the time complexity of push_back on a vector (amortized)?

**Answer:** A

**A is correct.** `push_back` is amortized O(1). Occasionally it triggers a reallocation (O(n)), but averaged over many operations, it is O(1).

### Q3. [Easy] Which container follows the Last-In-First-Out (LIFO) principle?

**Answer:** C

**C is correct.** `stack` is LIFO -- the last element pushed is the first to be popped. `queue` is FIFO.

### Q4. [Easy] What does v.at(i) do differently from v[i] for a vector?

**Answer:** B

**B is correct.** `at(i)` performs bounds checking and throws `std::out_of_range` if the index is invalid. `[]` has no bounds checking and causes undefined behavior on invalid access.

### Q5. [Easy] What is the default behavior of priority_queue in C++?

**Answer:** B

**B is correct.** `priority_queue` is a max-heap by default. The largest element is always at the top. Use `greater` to create a min-heap.

### Q6. [Medium] What is the time complexity of find() on a set?

**Answer:** B

**B is correct.** `set` uses a balanced BST internally, so find() is O(log n). For O(1) average lookup, use `unordered_set`.

### Q7. [Medium] What happens when you use map[key] and the key does not exist?

**Answer:** C

**C is correct.** The `[]` operator on a map inserts a default-constructed value (0 for int, empty string for string) if the key does not exist. This is a common source of bugs.

### Q8. [Medium] Which container provides O(1) push/pop at both ends AND random access?

**Answer:** C

**C is correct.** `deque` supports O(1) push_front/push_back, pop_front/pop_back, AND random access via []. `vector` does not have efficient push_front. `list` does not have random access.

### Q9. [Medium] What is the difference between set and multiset?

**Answer:** B

**B is correct.** Both `set` and `multiset` are sorted and use balanced BSTs. The only difference is that `multiset` allows duplicate elements.

### Q10. [Medium] How do you create a min-heap using priority_queue?

**Answer:** B

**B is correct.** The full template is `priority_queue<type, container, comparator>`. Using `greater` reverses the comparison, making the smallest element the top.

### Q11. [Hard] What is the worst-case time complexity of find() on unordered_map?

**Answer:** C

**C is correct.** `unordered_map` has O(1) average-case but O(n) worst-case due to hash collisions. If all keys hash to the same bucket, every operation degrades to linear time.

### Q12. [Hard] Why can you NOT use pair<int,int> as a key in unordered_map without a custom hash?

**Answer:** B

**B is correct.** `unordered_map` requires `std::hash` to be defined. There is no standard hash for `std::pair`. You must provide a custom hash functor or use `map` which only requires `operator<`.

### Q13. [Hard] What does vector::reserve(100) do?

**Answer:** B

**B is correct.** `reserve()` only allocates memory (sets capacity) without changing the size or adding elements. Use `resize()` to actually change the size.

### Q14. [Hard] What internal data structure does std::set use?

**Answer:** C

**C is correct.** All major implementations (GCC libstdc++, Clang libc++, MSVC) use a red-black tree for `set`, `map`, `multiset`, and `multimap`. This guarantees O(log n) operations.

### Q15. [Medium] Which container adaptor should you use for BFS (Breadth-First Search)?

**Answer:** B

**B is correct.** BFS requires FIFO processing: explore nodes in the order they are discovered. `queue` provides exactly this behavior. `stack` would give DFS. `priority_queue` is used for Dijkstra's algorithm.

### Q16. [Easy] What does v.clear() do on a vector?

**Answer:** B

**B is correct.** `clear()` removes all elements and sets size to 0, but the allocated memory (capacity) is typically not freed. To free memory, use the swap trick: `vector().swap(v)`.

### Q17. [Hard] What is the time complexity of push and pop on a priority_queue?

**Answer:** C

**C is correct.** `priority_queue` uses a binary heap. Both push (sift-up) and pop (sift-down) require O(log n) time. `top()` is O(1).

### Q18. [Medium] Which container should you use for frequency counting when you need sorted output?

**Answer:** B

**B is correct.** `map` stores key-value pairs sorted by key. When you iterate over a frequency map, keys appear in sorted order. `unordered_map` gives faster counting but unsorted iteration.

## Coding Challenges

### Challenge 1. Frequency Count and Print in Sorted Order

**Difficulty:** Easy

Given a string, count the frequency of each character and print the characters in sorted order along with their counts.

**Constraints:**

- Use a map<char, int> for automatic sorted order.

**Sample input:**

```
"programming"
```

**Sample output:**

```
a:1 g:2 i:1 m:2 n:1 o:1 p:1 r:2
```

**Solution:**

```cpp
#include <iostream>
#include <map>
using namespace std;

int main() {
    string s = "programming";
    map<char, int> freq;
    for (char c : s) freq[c]++;
    for (auto& [ch, cnt] : freq)
        cout << ch << ":" << cnt << " ";
    cout << endl;
    return 0;
}
```

### Challenge 2. Check If Parentheses Are Balanced Using Stack

**Difficulty:** Easy

Given a string containing parentheses '(', ')', '{', '}', '[', ']', determine if the input string is valid. An input string is valid if open brackets are closed by the same type and in the correct order.

**Constraints:**

- Use a stack. Time complexity O(n).

**Sample input:**

```
"{[()]}"
```

**Sample output:**

```
Valid
```

**Solution:**

```cpp
#include <iostream>
#include <stack>
using namespace std;

int main() {
    string s = "{[()]}";
    stack<char> st;
    bool valid = true;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[')
            st.push(c);
        else {
            if (st.empty()) { valid = false; break; }
            char top = st.top(); st.pop();
            if ((c == ')' && top != '(') ||
                (c == '}' && top != '{') ||
                (c == ']' && top != '['))
                { valid = false; break; }
        }
    }
    if (!st.empty()) valid = false;
    cout << (valid ? "Valid" : "Invalid") << endl;
    return 0;
}
```

### Challenge 3. Two Sum Using Unordered Map

**Difficulty:** Medium

Given a vector of integers and a target, find two indices such that the numbers at those indices add up to the target. Assume exactly one solution exists.

**Constraints:**

- Use unordered_map for O(n) time complexity.

**Sample input:**

```
nums = {2, 7, 11, 15}, target = 9
```

**Sample output:**

```
Indices: 0 1
```

**Solution:**

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int main() {
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    unordered_map<int, int> seen;
    for (int i = 0; i < (int)nums.size(); i++) {
        int complement = target - nums[i];
        if (seen.count(complement)) {
            cout << "Indices: " << seen[complement] << " " << i << endl;
            break;
        }
        seen[nums[i]] = i;
    }
    return 0;
}
```

### Challenge 4. Merge K Sorted Arrays Using Priority Queue

**Difficulty:** Hard

Given K sorted arrays, merge them into one sorted array. Use a min-heap (priority_queue with greater<>) to always extract the smallest current element.

**Constraints:**

- Use priority_queue<tuple<int,int,int>, vector<...>, greater<...>> storing {value, array_index, element_index}. Time: O(N log K).

**Sample input:**

```
arrays = {{1, 4, 7}, {2, 5, 8}, {3, 6, 9}}
```

**Sample output:**

```
1 2 3 4 5 6 7 8 9
```

**Solution:**

```cpp
#include <iostream>
#include <vector>
#include <queue>
#include <tuple>
using namespace std;

int main() {
    vector<vector<int>> arrays = {{1, 4, 7}, {2, 5, 8}, {3, 6, 9}};
    using T = tuple<int, int, int>;  // {value, array_idx, elem_idx}
    priority_queue<T, vector<T>, greater<T>> pq;

    for (int i = 0; i < (int)arrays.size(); i++)
        pq.push({arrays[i][0], i, 0});

    while (!pq.empty()) {
        auto [val, ai, ei] = pq.top();
        pq.pop();
        cout << val << " ";
        if (ei + 1 < (int)arrays[ai].size())
            pq.push({arrays[ai][ei + 1], ai, ei + 1});
    }
    cout << endl;
    return 0;
}
```

### Challenge 5. Find First Non-Repeating Character Using Map and Queue

**Difficulty:** Medium

Given a stream of characters, find the first non-repeating character at each step. If all characters repeat, print -1.

**Constraints:**

- Use a queue to track order and an unordered_map for frequency. Process character by character.

**Sample input:**

```
"aabcbcd"
```

**Sample output:**

```
a -1 b b b b d
```

**Solution:**

```cpp
#include <iostream>
#include <queue>
#include <unordered_map>
using namespace std;

int main() {
    string stream = "aabcbcd";
    queue<char> q;
    unordered_map<char, int> freq;
    for (char c : stream) {
        freq[c]++;
        q.push(c);
        while (!q.empty() && freq[q.front()] > 1)
            q.pop();
        if (q.empty())
            cout << "-1 ";
        else
            cout << q.front() << " ";
    }
    cout << endl;
    return 0;
}
```

### Challenge 6. Find K Closest Points to Origin Using Max-Heap

**Difficulty:** Hard

Given n points in 2D space, find the K closest points to the origin (0, 0). Use a max-heap of size K to maintain the K closest points seen so far.

**Constraints:**

- Use priority_queue with custom comparator. Time: O(n log K).

**Sample input:**

```
points = {{3,3}, {5,-1}, {-2,4}, {1,1}, {-3,-2}}, K = 3
```

**Sample output:**

```
Closest 3 points: (1,1) (-3,-2) (-2,4)
```

**Solution:**

```cpp
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int main() {
    vector<pair<int,int>> points = {{3,3}, {5,-1}, {-2,4}, {1,1}, {-3,-2}};
    int K = 3;

    // Max-heap: pop the farthest among the K closest
    auto dist = [](const pair<int,int>& p) {
        return p.first * p.first + p.second * p.second;
    };
    auto cmp = [&](const pair<int,int>& a, const pair<int,int>& b) {
        return dist(a) < dist(b);  // max-heap by distance
    };
    priority_queue<pair<int,int>, vector<pair<int,int>>, decltype(cmp)> pq(cmp);

    for (auto& p : points) {
        pq.push(p);
        if ((int)pq.size() > K) pq.pop();
    }

    cout << "Closest " << K << " points: ";
    while (!pq.empty()) {
        auto [x, y] = pq.top(); pq.pop();
        cout << "(" << x << "," << y << ") ";
    }
    cout << endl;
    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/stl-containers/*
