---
title: "C++ STL Containers - vector, list, map, set, stack, queue, priority_queue | Modern Age Coders"
description: "Master C++ STL containers: vector, list, deque, set, multiset, map, multimap, unordered_set, unordered_map, stack, queue, and priority_queue. Includes time complexity comparison, custom comparators, and 62+ practice questions for competitive programming."
slug: stl-containers
canonical: https://learn.modernagecoders.com/resources/cpp/stl-containers/
category: "C++"
keywords: ["c++ stl containers", "c++ vector", "c++ map", "c++ set", "c++ stack", "c++ queue", "c++ priority_queue", "c++ unordered_map", "c++ multiset", "competitive programming c++ containers"]
---
# STL Containers - vector, list, map, set, stack, queue

**Difficulty:** Advanced  
**Reading time:** 60 min  
**Chapter:** 20

## What Are STL Containers?

The **Standard Template Library (STL)** provides a collection of generic, type-safe container classes that store and organize data. Instead of writing your own linked list, binary search tree, or hash table from scratch, you use battle-tested containers like `vector`, `set`, `map`, and `unordered_map` that are already optimized and correct.

STL containers are divided into four categories:

- **Sequence containers** -- store elements in a linear order: `vector`, `list`, `deque`
- **Associative containers** -- store elements in sorted order using a balanced BST: `set`, `multiset`, `map`, `multimap`
- **Unordered containers** -- store elements using hash tables for O(1) average access: `unordered_set`, `unordered_map`
- **Container adaptors** -- wrap other containers with a restricted interface: `stack`, `queue`, `priority_queue`

```cpp
#include 
#include 
#include 
#include 
#include 
using namespace std;

int main() {
    // Sequence: ordered by insertion
    vector v = {5, 2, 8, 2, 1};

    // Associative: sorted, unique
    set s(v.begin(), v.end());
    // s = {1, 2, 5, 8} -- sorted, duplicates removed

    // Associative: key-value, sorted by key
    map<string, int> marks;
    marks["Arjun"] = 85;
    marks["Priya"] = 92;

    // Container adaptor: LIFO
    stack st;
    st.push(10);
    st.push(20);
    cout << st.top() << endl;  // 20
    return 0;
}
```

When Rohan says "use a map for frequency counting" or Meera says "use a priority_queue for the greedy approach," every competitive programmer immediately knows the data structure and its time complexities.

## Why Are STL Containers Important?

### 1. Competitive Programming Efficiency

In competitive programming, choosing the right container is half the solution. Need O(log n) lookups with sorted order? Use `set` or `map`. Need O(1) average lookups? Use `unordered_map`. Need a max-heap? Use `priority_queue`. Knowing which container to use and its time complexity directly determines whether your solution passes within the time limit.

### 2. Correct by Construction

STL containers handle memory management, resizing, rebalancing, and rehashing automatically. A `vector` grows dynamically, a `set` stays balanced, and an `unordered_map` rehashes when the load factor is too high. Implementing these from scratch is error-prone and time-consuming.

### 3. Type Safety and Generic Programming

STL containers are templates -- `vector`, `map<string, int>`, `set>` -- providing compile-time type checking. You cannot accidentally insert a string into a `vector`.

### 4. Interoperability with STL Algorithms

All STL containers expose iterators, making them compatible with STL algorithms like `sort`, `find`, `accumulate`, and `transform`. This uniform interface is one of the most powerful features of the STL.

### 5. Interview and Placement Relevance

Companies like Google, Amazon, Microsoft, Flipkart, and Razorpay expect fluency with STL containers. Interview problems frequently require choosing the right container, understanding time complexities, and using containers like `map`, `set`, and `priority_queue` effectively.

## Detailed Explanation

The **Standard Template Library (STL)** provides a collection of generic, type-safe container classes that store and organize data. Instead of writing your own linked list, binary search tree, or hash table from scratch, you use battle-tested containers like `vector`, `set`, `map`, and `unordered_map` that are already optimized and correct.

STL containers are divided into four categories:

- **Sequence containers** -- store elements in a linear order: `vector`, `list`, `deque`
- **Associative containers** -- store elements in sorted order using a balanced BST: `set`, `multiset`, `map`, `multimap`
- **Unordered containers** -- store elements using hash tables for O(1) average access: `unordered_set`, `unordered_map`
- **Container adaptors** -- wrap other containers with a restricted interface: `stack`, `queue`, `priority_queue`

```cpp
#include 
#include 
#include 
#include 
#include 
using namespace std;

int main() {
    // Sequence: ordered by insertion
    vector v = {5, 2, 8, 2, 1};

    // Associative: sorted, unique
    set s(v.begin(), v.end());
    // s = {1, 2, 5, 8} -- sorted, duplicates removed

    // Associative: key-value, sorted by key
    map<string, int> marks;
    marks["Arjun"] = 85;
    marks["Priya"] = 92;

    // Container adaptor: LIFO
    stack st;
    st.push(10);
    st.push(20);
    cout << st.top() << endl;  // 20
    return 0;
}
```

When Rohan says "use a map for frequency counting" or Meera says "use a priority_queue for the greedy approach," every competitive programmer immediately knows the data structure and its time complexities.

### 1. Competitive Programming Efficiency

In competitive programming, choosing the right container is half the solution. Need O(log n) lookups with sorted order? Use `set` or `map`. Need O(1) average lookups? Use `unordered_map`. Need a max-heap? Use `priority_queue`. Knowing which container to use and its time complexity directly determines whether your solution passes within the time limit.

### 2. Correct by Construction

STL containers handle memory management, resizing, rebalancing, and rehashing automatically. A `vector` grows dynamically, a `set` stays balanced, and an `unordered_map` rehashes when the load factor is too high. Implementing these from scratch is error-prone and time-consuming.

### 3. Type Safety and Generic Programming

STL containers are templates -- `vector`, `map<string, int>`, `set>` -- providing compile-time type checking. You cannot accidentally insert a string into a `vector`.

### 4. Interoperability with STL Algorithms

All STL containers expose iterators, making them compatible with STL algorithms like `sort`, `find`, `accumulate`, and `transform`. This uniform interface is one of the most powerful features of the STL.

### 5. Interview and Placement Relevance

Companies like Google, Amazon, Microsoft, Flipkart, and Razorpay expect fluency with STL containers. Interview problems frequently require choosing the right container, understanding time complexities, and using containers like `map`, `set`, and `priority_queue` effectively.

## Code Examples

### Vector: Dynamic Array with Random Access

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> v;
    v.push_back(10);
    v.push_back(20);
    v.push_back(30);

    // Access by index
    cout << "v[1] = " << v[1] << endl;
    cout << "v.at(2) = " << v.at(2) << endl;

    // Size vs Capacity
    cout << "Size: " << v.size() << endl;
    cout << "Capacity: " << v.capacity() << endl;

    // Reserve to avoid reallocations
    v.reserve(100);
    cout << "After reserve(100), Capacity: " << v.capacity() << endl;

    // Resize changes size (fills with default value)
    v.resize(5, 0);
    for (int x : v) cout << x << " ";
    cout << endl;

    // pop_back removes last element
    v.pop_back();
    cout << "After pop_back, size: " << v.size() << endl;

    // clear removes all
    v.clear();
    cout << "After clear, size: " << v.size() << endl;
    return 0;
}
```

Vector is the most commonly used container in C++. `push_back` is amortized O(1), random access via `[]` or `at()` is O(1). The key difference: `[]` has no bounds checking while `at()` throws `out_of_range`. Use `reserve()` when you know the approximate size upfront to avoid repeated reallocations.

**Output:**

```
v[1] = 20
v.at(2) = 30
Size: 3
Capacity: 4
After reserve(100), Capacity: 100
10 20 30 0 0
After pop_back, size: 4
After clear, size: 0
```

### Set and Multiset: Sorted Unique and Sorted with Duplicates

```cpp
#include <iostream>
#include <set>
using namespace std;

int main() {
    // set: sorted, unique elements
    set<int> s = {5, 2, 8, 2, 1, 5};
    cout << "Set: ";
    for (int x : s) cout << x << " ";
    cout << endl;  // 1 2 5 8

    s.insert(3);
    s.insert(2);  // duplicate, ignored
    cout << "After insert 3 and 2: ";
    for (int x : s) cout << x << " ";
    cout << endl;

    // find and count
    if (s.find(3) != s.end()) cout << "3 found" << endl;
    cout << "count(2) = " << s.count(2) << endl;  // 0 or 1

    // lower_bound and upper_bound
    auto lb = s.lower_bound(3);  // first >= 3
    auto ub = s.upper_bound(5);  // first > 5
    cout << "lower_bound(3) = " << *lb << endl;
    cout << "upper_bound(5) = " << *ub << endl;

    // multiset: allows duplicates
    multiset<int> ms = {5, 2, 8, 2, 1, 5};
    cout << "Multiset: ";
    for (int x : ms) cout << x << " ";
    cout << endl;  // 1 2 2 5 5 8
    cout << "count(2) = " << ms.count(2) << endl;  // 2
    return 0;
}
```

A `set` stores unique elements in sorted order using a balanced BST (usually red-black tree). All operations -- insert, find, count, erase, lower_bound, upper_bound -- are O(log n). A `multiset` allows duplicates while maintaining sorted order. Use `set` when you need sorted unique values and O(log n) lookups.

**Output:**

```
Set: 1 2 5 8
After insert 3 and 2: 1 2 3 5 8
3 found
count(2) = 1
lower_bound(3) = 3
upper_bound(5) = 8
Multiset: 1 2 2 5 5 8
count(2) = 2
```

### Map and Multimap: Key-Value Pairs Sorted by Key

```cpp
#include <iostream>
#include <map>
using namespace std;

int main() {
    // map: sorted by key, unique keys
    map<string, int> marks;
    marks["Arjun"] = 85;
    marks["Priya"] = 92;
    marks["Kiran"] = 78;
    marks.insert({"Neha", 88});

    // Iterate (sorted by key)
    for (auto& [name, score] : marks)
        cout << name << ": " << score << endl;

    // Access with [] (creates if missing!) vs at() (throws if missing)
    marks["Ravi"];  // Creates entry with value 0!
    cout << "Ravi (auto-created): " << marks["Ravi"] << endl;

    // Safe access with find
    auto it = marks.find("Priya");
    if (it != marks.end())
        cout << "Found Priya: " << it->second << endl;

    // Frequency counting pattern
    string text = "hello world";
    map<char, int> freq;
    for (char c : text) freq[c]++;
    for (auto& [ch, cnt] : freq)
        cout << ch << ":" << cnt << " ";
    cout << endl;

    // multimap: allows duplicate keys
    multimap<string, int> scores;
    scores.insert({"Arjun", 85});
    scores.insert({"Arjun", 90});
    cout << "Arjun count: " << scores.count("Arjun") << endl;
    return 0;
}
```

A `map` stores key-value pairs sorted by key using a balanced BST. All operations are O(log n). The `[]` operator is dangerous because it inserts a default-constructed value if the key does not exist. Use `find()` or `at()` for safe access. The frequency counting pattern (`freq[c]++`) is one of the most common uses of map in competitive programming.

**Output:**

```
Arjun: 85
Kiran: 78
Neha: 88
Priya: 92
Ravi (auto-created): 0
Found Priya: 92
 :1 d:1 e:1 h:1 l:3 o:2 r:1 w:1
Arjun count: 2
```

### Unordered Map and Unordered Set: O(1) Average Lookups

```cpp
#include <iostream>
#include <unordered_map>
#include <unordered_set>
using namespace std;

int main() {
    // unordered_set: hash-based, O(1) average, no order
    unordered_set<int> us = {5, 2, 8, 2, 1};
    us.insert(3);
    cout << "Contains 3? " << (us.count(3) ? "Yes" : "No") << endl;

    // unordered_map: hash-based key-value, O(1) average
    unordered_map<string, int> marks;
    marks["Arjun"] = 85;
    marks["Priya"] = 92;
    marks["Kiran"] = 78;

    // Fast frequency counting (faster than map for large inputs)
    string text = "competitive programming";
    unordered_map<char, int> freq;
    for (char c : text) freq[c]++;
    cout << "Frequency of 'e': " << freq['e'] << endl;

    // Two Sum problem: classic unordered_map usage
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    unordered_map<int, int> seen;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (seen.count(complement)) {
            cout << "Pair found: [" << seen[complement] << ", " << i << "]" << endl;
            break;
        }
        seen[nums[i]] = i;
    }
    return 0;
}
```

Unordered containers use hash tables for O(1) average-case insert, find, and erase. They are faster than `set`/`map` for most cases but do not maintain sorted order. The Two Sum problem is a classic example where `unordered_map` gives an O(n) solution instead of O(n log n) with sorted containers.

**Output:**

```
Contains 3? Yes
Frequency of 'e': 2
Pair found: [0, 1]
```

### Stack, Queue, and Priority Queue: Container Adaptors

```cpp
#include <iostream>
#include <stack>
#include <queue>
using namespace std;

int main() {
    // Stack: LIFO
    stack<int> st;
    st.push(10);
    st.push(20);
    st.push(30);
    cout << "Stack top: " << st.top() << endl;
    st.pop();
    cout << "After pop, top: " << st.top() << endl;
    cout << "Stack size: " << st.size() << endl;

    // Queue: FIFO
    queue<int> q;
    q.push(10);
    q.push(20);
    q.push(30);
    cout << "Queue front: " << q.front() << ", back: " << q.back() << endl;
    q.pop();
    cout << "After pop, front: " << q.front() << endl;

    // Priority Queue: max-heap by default
    priority_queue<int> pq;
    pq.push(30);
    pq.push(10);
    pq.push(50);
    pq.push(20);
    cout << "Max-heap top: " << pq.top() << endl;
    pq.pop();
    cout << "After pop: " << pq.top() << endl;

    // Min-heap using greater<int>
    priority_queue<int, vector<int>, greater<int>> minPQ;
    minPQ.push(30);
    minPQ.push(10);
    minPQ.push(50);
    minPQ.push(20);
    cout << "Min-heap top: " << minPQ.top() << endl;
    return 0;
}
```

Container adaptors provide restricted interfaces over other containers. `stack` is LIFO (push/pop/top), `queue` is FIFO (push/pop/front/back), and `priority_queue` is a max-heap by default. For a min-heap, pass `greater` as the third template argument. All push/pop operations are O(log n) for priority_queue and O(1) for stack/queue.

**Output:**

```
Stack top: 30
After pop, top: 20
Stack size: 2
Queue front: 10, back: 30
After pop, front: 20
Max-heap top: 50
After pop: 30
Min-heap top: 10
```

### Priority Queue with Custom Comparator for Dijkstra-Style Processing

```cpp
#include <iostream>
#include <queue>
#include <vector>
using namespace std;

int main() {
    // Custom comparator: process by shortest distance first
    // pair<distance, node>
    using P = pair<int, int>;
    priority_queue<P, vector<P>, greater<P>> pq;

    pq.push({5, 1});   // node 1, distance 5
    pq.push({2, 3});   // node 3, distance 2
    pq.push({8, 2});   // node 2, distance 8
    pq.push({1, 4});   // node 4, distance 1

    cout << "Processing order (shortest distance first):" << endl;
    while (!pq.empty()) {
        auto [dist, node] = pq.top();
        pq.pop();
        cout << "Node " << node << ", distance " << dist << endl;
    }

    // Custom struct with lambda comparator
    struct Task {
        string name;
        int priority;
    };
    auto cmp = [](const Task& a, const Task& b) {
        return a.priority < b.priority;  // higher priority first
    };
    priority_queue<Task, vector<Task>, decltype(cmp)> taskQ(cmp);
    taskQ.push({"Debug", 3});
    taskQ.push({"Deploy", 5});
    taskQ.push({"Test", 4});

    cout << "\nTask processing order:" << endl;
    while (!taskQ.empty()) {
        auto& t = taskQ.top();
        cout << t.name << " (priority " << t.priority << ")" << endl;
        taskQ.pop();
    }
    return 0;
}
```

This shows the Dijkstra-style min-heap pattern using `priority_queue` with `greater<pair<int,int>>`. Pairs are compared lexicographically, so smallest distance comes first. The second example demonstrates a custom struct with a lambda comparator passed via `decltype`. This pattern appears in graph algorithms, task scheduling, and event-driven simulations.

**Output:**

```
Processing order (shortest distance first):
Node 4, distance 1
Node 3, distance 2
Node 1, distance 5
Node 2, distance 8

Task processing order:
Deploy (priority 5)
Test (priority 4)
Debug (priority 3)
```

### List and Deque: Insert/Remove at Both Ends

```cpp
#include <iostream>
#include <list>
#include <deque>
using namespace std;

int main() {
    // list: doubly-linked list, O(1) insert/erase anywhere with iterator
    list<int> lst = {10, 20, 30};
    lst.push_front(5);
    lst.push_back(40);
    auto it = lst.begin();
    advance(it, 2);  // move to 3rd element
    lst.insert(it, 15);  // insert before 3rd element

    cout << "List: ";
    for (int x : lst) cout << x << " ";
    cout << endl;

    lst.remove(20);  // remove all occurrences of 20
    cout << "After remove(20): ";
    for (int x : lst) cout << x << " ";
    cout << endl;

    // deque: double-ended queue, O(1) push/pop at both ends + random access
    deque<int> dq = {20, 30, 40};
    dq.push_front(10);
    dq.push_back(50);
    cout << "Deque: ";
    for (int x : dq) cout << x << " ";
    cout << endl;
    cout << "dq[2] = " << dq[2] << endl;  // random access!

    dq.pop_front();
    dq.pop_back();
    cout << "After pop front and back: ";
    for (int x : dq) cout << x << " ";
    cout << endl;
    return 0;
}
```

A `list` is a doubly-linked list with O(1) insert/erase at any position (given an iterator) but no random access. A `deque` (double-ended queue) supports O(1) push/pop at both ends AND random access via `[]`. Use `list` when you need frequent insertions/deletions in the middle. Use `deque` when you need fast operations at both ends plus random access.

**Output:**

```
List: 5 10 15 30 40
After remove(20): 5 10 15 30 40
Deque: 10 20 30 40 50
dq[2] = 30
After pop front and back: 20 30 40
```

### Time Complexity Comparison of STL Containers

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "=== STL Container Time Complexity ==="   << endl;
    cout << endl;
    cout << "SEQUENCE CONTAINERS:"                    << endl;
    cout << "vector:  access O(1) | push_back O(1)* | insert O(n) | find O(n)"  << endl;
    cout << "list:    access O(n) | push_front O(1)  | insert O(1) | find O(n)"  << endl;
    cout << "deque:   access O(1) | push_front O(1)  | insert O(n) | find O(n)"  << endl;
    cout << endl;
    cout << "ASSOCIATIVE CONTAINERS (balanced BST):"  << endl;
    cout << "set:     insert O(log n) | find O(log n) | erase O(log n) | sorted" << endl;
    cout << "map:     insert O(log n) | find O(log n) | []/at O(log n) | sorted" << endl;
    cout << "multiset/multimap: same as set/map but allow duplicates"             << endl;
    cout << endl;
    cout << "UNORDERED CONTAINERS (hash table):"      << endl;
    cout << "unordered_set: insert O(1)* | find O(1)* | erase O(1)* | no order" << endl;
    cout << "unordered_map: insert O(1)* | find O(1)* | []/at O(1)* | no order" << endl;
    cout << "* = amortized / average case"            << endl;
    cout << endl;
    cout << "CONTAINER ADAPTORS:"                     << endl;
    cout << "stack:          push O(1) | pop O(1) | top O(1)"                   << endl;
    cout << "queue:          push O(1) | pop O(1) | front O(1)"                 << endl;
    cout << "priority_queue: push O(log n) | pop O(log n) | top O(1)"           << endl;
    return 0;
}
```

This reference program prints the time complexity of every major STL container operation. In competitive programming, choosing the wrong container (e.g., map when unordered_map suffices) can be the difference between TLE and AC. Memorize these complexities.

**Output:**

```
=== STL Container Time Complexity ===

SEQUENCE CONTAINERS:
vector:  access O(1) | push_back O(1)* | insert O(n) | find O(n)
list:    access O(n) | push_front O(1)  | insert O(1) | find O(n)
deque:   access O(1) | push_front O(1)  | insert O(n) | find O(n)

ASSOCIATIVE CONTAINERS (balanced BST):
set:     insert O(log n) | find O(log n) | erase O(log n) | sorted
map:     insert O(log n) | find O(log n) | []/at O(log n) | sorted
multiset/multimap: same as set/map but allow duplicates

UNORDERED CONTAINERS (hash table):
unordered_set: insert O(1)* | find O(1)* | erase O(1)* | no order
unordered_map: insert O(1)* | find O(1)* | []/at O(1)* | no order
* = amortized / average case

CONTAINER ADAPTORS:
stack:          push O(1) | pop O(1) | top O(1)
queue:          push O(1) | pop O(1) | front O(1)
priority_queue: push O(log n) | pop O(log n) | top O(1)
```

## Common Mistakes

### Using map[] for Lookup Instead of find()

**Wrong:**

```
map<string, int> m;
m["Arjun"] = 85;
if (m["Priya"] > 0)
    cout << "Priya found" << endl;
// Bug: m["Priya"] was just created with value 0!
```

The [] operator on a map creates a new entry with a default-constructed value if the key does not exist. This silently inserts unwanted entries and can corrupt your data.

**Correct:**

```
map<string, int> m;
m["Arjun"] = 85;
auto it = m.find("Priya");
if (it != m.end())
    cout << "Priya found: " << it->second << endl;
else
    cout << "Priya not found" << endl;
```

Use `find()` or `count()` to check existence without inserting. The `[]` operator should only be used when you want to create or overwrite an entry.

### Modifying a set Element Directly

**Wrong:**

```
set<int> s = {10, 20, 30};
auto it = s.find(20);
*it = 25;  // Compilation error!
```

Elements in a set are const because modifying them could break the sorted order maintained by the internal BST. The set would no longer be valid.

**Correct:**

```
set<int> s = {10, 20, 30};
s.erase(20);
s.insert(25);
// s = {10, 25, 30}
```

To change a value in a set, you must erase the old value and insert the new one. This ensures the sorted invariant is maintained. The same applies to keys in a map.

### Forgetting That priority_queue Is a Max-Heap by Default

**Wrong:**

```
priority_queue<int> pq;
pq.push(10);
pq.push(30);
pq.push(20);
cout << pq.top() << endl;  // Prints 30, not 10!
// Programmer expected min-heap behavior
```

C++ priority_queue is a max-heap by default. The largest element is at the top. If you need a min-heap, you must explicitly specify greater.

**Correct:**

```
priority_queue<int, vector<int>, greater<int>> pq;  // min-heap
pq.push(10);
pq.push(30);
pq.push(20);
cout << pq.top() << endl;  // 10 (smallest first)
```

The default `priority_queue` uses `less` internally, which creates a max-heap. For a min-heap, specify all three template parameters: `priority_queue<int, vector, greater>`.

### Iterating and Erasing from a Map/Set Simultaneously (Wrong Way)

**Wrong:**

```
map<string, int> m = {{"a", 1}, {"b", 2}, {"c", 3}};
for (auto it = m.begin(); it != m.end(); ++it) {
    if (it->second < 3)
        m.erase(it);  // Iterator invalidated!
}
```

Erasing an element from a map/set invalidates the iterator pointing to that element. Incrementing an invalidated iterator is undefined behavior.

**Correct:**

```
map<string, int> m = {{"a", 1}, {"b", 2}, {"c", 3}};
for (auto it = m.begin(); it != m.end(); ) {
    if (it->second < 3)
        it = m.erase(it);  // erase returns next valid iterator
    else
        ++it;
}
```

In C++11 and later, `erase()` on associative containers returns an iterator to the next element. Use this return value instead of manually incrementing. Notice the `++it` is in the else branch, not in the for loop header.

### Using unordered_map/unordered_set with Unhashable Types

**Wrong:**

```
unordered_set<pair<int,int>> s;
s.insert({1, 2});  // Compilation error!
```

std::pair does not have a default hash function, so it cannot be used directly in unordered containers. You need a custom hash or use an ordered set instead.

**Correct:**

```
// Option 1: Use ordered set (simpler)
set<pair<int,int>> s;
s.insert({1, 2});

// Option 2: Custom hash for unordered_set
struct PairHash {
    size_t operator()(const pair<int,int>& p) const {
        return hash<long long>()(((long long)p.first << 32) | p.second);
    }
};
unordered_set<pair<int,int>, PairHash> us;
us.insert({1, 2});
```

Unordered containers require a hash function for the key type. Built-in types (int, string) have default hashes, but `pair`, `tuple`, and custom structs do not. Either provide a custom hash functor or use the ordered variants (`set`, `map`) which only need `operator<`.

## Summary

- Sequence containers store elements in insertion order. vector provides O(1) random access and amortized O(1) push_back but O(n) insertion in the middle. list provides O(1) insertion/deletion anywhere with an iterator but no random access. deque provides O(1) push/pop at both ends plus random access.
- Associative containers (set, multiset, map, multimap) use balanced BSTs internally. All operations are O(log n). Elements are always sorted. set stores unique values, multiset allows duplicates, map stores unique key-value pairs, multimap allows duplicate keys.
- Unordered containers (unordered_set, unordered_map) use hash tables. Average-case operations are O(1), worst-case O(n). They do not maintain any order. Use them when you need fast lookups and do not care about order.
- Container adaptors wrap other containers with restricted interfaces. stack (LIFO), queue (FIFO), and priority_queue (heap). priority_queue is a max-heap by default; use greater for a min-heap.
- The map [] operator inserts a default value if the key does not exist. Use find() or count() for safe lookups. The at() method throws out_of_range if the key is missing.
- For competitive programming: use vector for arrays, unordered_map for frequency counting, set for sorted unique elements, and priority_queue for greedy algorithms. Know the time complexity of every operation.
- vector::reserve() pre-allocates memory without changing size. vector::resize() changes the size. Use reserve() when you know the approximate number of elements to avoid reallocations.
- Elements in a set/map cannot be modified in place because it would break the sorted invariant. Erase the old element and insert the new one instead.
- When erasing from a map/set while iterating, use the iterator returned by erase() to avoid iterator invalidation. The pattern is: it = container.erase(it).
- Choose the right container based on your needs: sorted order with O(log n) -> set/map, O(1) average lookup -> unordered_set/unordered_map, LIFO -> stack, FIFO -> queue, priority processing -> priority_queue.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/stl-containers/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/stl-containers/practice/*
