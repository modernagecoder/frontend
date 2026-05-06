---
title: "Practice: Collections Framework - List, Set, Map"
description: "45 practice problems for Collections Framework - List, Set, Map in Java"
slug: collections-framework-practice
canonical: https://learn.modernagecoders.com/resources/java/collections-framework/practice
category: "Java"
---
# Practice: Collections Framework - List, Set, Map

**Total questions:** 45

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
ArrayList list = new ArrayList<>();
list.add("A");
list.add("B");
list.add("C");
System.out.println(list);
System.out.println(list.size());
```

*Hint:* ArrayList's toString prints elements in brackets.

**Answer:** `[A, B, C]`
`3`

Elements are added in order. `toString()` prints `[A, B, C]`. `size()` returns the number of elements: 3.

### Q2. [Easy] What is the output?

```
ArrayList nums = new ArrayList<>();
nums.add(10);
nums.add(20);
nums.add(30);
System.out.println(nums.get(1));
System.out.println(nums.contains(20));
System.out.println(nums.indexOf(30));
```

*Hint:* Indices start at 0. contains checks for value existence.

**Answer:** `20`
`true`
`2`

`get(1)` returns the element at index 1 (20). `contains(20)` returns true. `indexOf(30)` returns 2 (third element, index starts at 0).

### Q3. [Easy] What is the output?

```
HashSet set = new HashSet<>();
set.add("Java");
set.add("Python");
set.add("Java");
set.add("C++");
System.out.println(set.size());
System.out.println(set.contains("Python"));
```

*Hint:* HashSet does not allow duplicates. "Java" is added twice.

**Answer:** `3`
`true`

"Java" is added twice but stored only once. The set has 3 unique elements: Java, Python, C++. `contains("Python")` returns true.

### Q4. [Easy] What is the output?

```
HashMap<String, Integer> map = new HashMap<>();
map.put("A", 1);
map.put("B", 2);
map.put("C", 3);
System.out.println(map.get("B"));
System.out.println(map.get("D"));
System.out.println(map.size());
```

*Hint:* get returns null for a non-existent key.

**Answer:** `2`
`null`
`3`

`get("B")` returns 2. `get("D")` returns null (key not found). `size()` returns 3.

### Q5. [Easy] What is the output?

```
TreeSet ts = new TreeSet<>();
ts.add(30);
ts.add(10);
ts.add(50);
ts.add(20);
ts.add(40);
System.out.println(ts);
```

*Hint:* TreeSet maintains sorted order.

**Answer:** `[10, 20, 30, 40, 50]`

TreeSet stores elements in sorted (ascending) order regardless of insertion order.

### Q6. [Medium] What is the output?

```
ArrayList list = new ArrayList<>();
list.add(10);
list.add(20);
list.add(30);
list.remove(1);
System.out.println(list);
list.remove(Integer.valueOf(10));
System.out.println(list);
```

*Hint:* remove(1) removes by index. remove(Integer.valueOf(10)) removes by value.

**Answer:** `[10, 30]`
`[30]`

`remove(1)` removes the element at index 1 (which is 20), leaving [10, 30]. `remove(Integer.valueOf(10))` removes the value 10, leaving [30].

### Q7. [Medium] What is the output?

```
HashMap<String, Integer> map = new HashMap<>();
map.put("Arjun", 85);
map.put("Kavya", 90);
map.put("Arjun", 95);
System.out.println(map.size());
System.out.println(map.get("Arjun"));
```

*Hint:* Putting with an existing key replaces the value.

**Answer:** `2`
`95`

The second `put("Arjun", 95)` replaces the previous value 85. The map has 2 entries. `get("Arjun")` returns the updated value 95.

### Q8. [Medium] What is the output?

```
LinkedList ll = new LinkedList<>();
ll.add("B");
ll.addFirst("A");
ll.addLast("C");
System.out.println(ll);
System.out.println(ll.getFirst());
System.out.println(ll.getLast());
ll.removeFirst();
System.out.println(ll);
```

*Hint:* addFirst prepends, addLast appends.

**Answer:** `[A, B, C]`
`A`
`C`
`[B, C]`

"B" is added. "A" is prepended. "C" is appended. Result: [A, B, C]. `getFirst()`=A, `getLast()`=C. After `removeFirst()`: [B, C].

### Q9. [Medium] What is the output?

```
HashMap<String, Integer> map = new HashMap<>();
map.put("X", 1);
map.put("Y", 2);
map.put("Z", 3);

System.out.println(map.containsKey("Y"));
System.out.println(map.containsValue(5));
System.out.println(map.getOrDefault("W", -1));
System.out.println(map.keySet());
```

*Hint:* containsKey/containsValue check existence. getOrDefault returns default for missing keys.

**Answer:** `true`
`false`
`-1`
`[X, Y, Z]`

"Y" is a key (true). 5 is not a value (false). "W" is not a key, so getOrDefault returns -1. keySet() returns all keys.

### Q10. [Medium] What is the output?

```
ArrayList list = new ArrayList<>();
list.add(5);
list.add(3);
list.add(8);
list.add(1);

Collections.sort(list);
System.out.println(list);

System.out.println(Collections.min(list));
System.out.println(Collections.max(list));

Collections.reverse(list);
System.out.println(list);
```

*Hint:* sort() sorts ascending. reverse() reverses the current order.

**Answer:** `[1, 3, 5, 8]`
`1`
`8`
`[8, 5, 3, 1]`

`sort` arranges in ascending order. `min`=1, `max`=8. `reverse` flips the order to descending.

### Q11. [Hard] What is the output?

```
HashMap<String, Integer> map = new HashMap<>();
String[] words = {"a", "b", "a", "c", "b", "a"};
for (String w : words) {
    map.put(w, map.getOrDefault(w, 0) + 1);
}
System.out.println(map);
```

*Hint:* This is the word frequency counting pattern.

**Answer:** `{a=3, b=2, c=1}`

Each occurrence increments the count. "a" appears 3 times, "b" 2 times, "c" 1 time. `getOrDefault(w, 0)` returns 0 for new words.

### Q12. [Hard] What is the output?

```
TreeMap<String, Integer> tm = new TreeMap<>();
tm.put("Banana", 2);
tm.put("Apple", 5);
tm.put("Cherry", 1);

System.out.println(tm);
System.out.println(tm.firstKey());
System.out.println(tm.lastKey());
System.out.println(tm.headMap("Cherry"));
System.out.println(tm.tailMap("Banana"));
```

*Hint:* TreeMap is sorted by keys. headMap is exclusive, tailMap is inclusive.

**Answer:** `{Apple=5, Banana=2, Cherry=1}`
`Apple`
`Cherry`
`{Apple=5, Banana=2}`
`{Banana=2, Cherry=1}`

TreeMap sorts by key alphabetically. `firstKey()`=Apple, `lastKey()`=Cherry. `headMap("Cherry")` returns entries before "Cherry" (exclusive). `tailMap("Banana")` returns entries from "Banana" onward (inclusive).

### Q13. [Hard] What is the output?

```
HashSet<ArrayList> set = new HashSet<>();
ArrayList list1 = new ArrayList<>();
list1.add(1);
list1.add(2);

ArrayList list2 = new ArrayList<>();
list2.add(1);
list2.add(2);

set.add(list1);
set.add(list2);
System.out.println(set.size());

list1.add(3);
set.add(list1);
System.out.println(set.size());
```

*Hint:* ArrayList implements equals and hashCode based on contents. What happens when content changes?

**Answer:** `1`
`2`

list1 and list2 have the same content [1,2], so `equals()` returns true. The set has 1 element. After modifying list1 to [1,2,3], its hashCode changes. Adding it again puts it in a different bucket (the set now thinks it is a new element), resulting in size 2. This is why mutable objects in sets are dangerous.

### Q14. [Hard] What is the output?

```
HashMap<Integer, String> map = new HashMap<>();
map.put(1, "One");
map.put(2, "Two");
map.put(3, "Three");

map.forEach((k, v) -> System.out.println(k + " => " + v));

map.replaceAll((k, v) -> v.toUpperCase());
System.out.println(map);
```

*Hint:* forEach iterates. replaceAll transforms all values.

**Answer:** `1 => One`
`2 => Two`
`3 => Three`
`{1=ONE, 2=TWO, 3=THREE}`

`forEach` prints each key-value pair. `replaceAll` applies the lambda to all values, converting them to uppercase.

### Q15. [Hard] What is the output?

```
ArrayList list = new ArrayList<>();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

List sub = list.subList(1, 4);
System.out.println(sub);

sub.set(0, 99);
System.out.println(list);
```

*Hint:* subList returns a VIEW, not a copy. Changes to the sublist affect the original.

**Answer:** `[2, 3, 4]`
`[1, 99, 3, 4, 5]`

`subList(1, 4)` returns elements at indices 1, 2, 3 (exclusive end): [2, 3, 4]. It is a view, not a copy. `sub.set(0, 99)` changes index 0 of the sublist (which is index 1 of the original list), so 2 becomes 99.

### Q16. [Hard] What is the output?

```
LinkedHashMap<String, Integer> lhm = new LinkedHashMap<>();
lhm.put("C", 3);
lhm.put("A", 1);
lhm.put("B", 2);
System.out.println(lhm);

TreeMap<String, Integer> tm = new TreeMap<>(lhm);
System.out.println(tm);

HashMap<String, Integer> hm = new HashMap<>(lhm);
System.out.println(hm.keySet());
```

*Hint:* LinkedHashMap preserves insertion order. TreeMap sorts by key. HashMap has no guaranteed order.

**Answer:** `{C=3, A=1, B=2}`
`{A=1, B=2, C=3}`
`[A, B, C]` (order may vary for HashMap)

LinkedHashMap preserves insertion order: C, A, B. TreeMap sorts alphabetically: A, B, C. HashMap has no guaranteed order (though it often looks sorted for small sizes, do not rely on it).

## Mixed Questions

### Q1. [Easy] What is the main difference between ArrayList and LinkedList?

*Hint:* Think about the underlying data structure.

**Answer:** ArrayList uses a dynamic array (contiguous memory), providing O(1) random access but O(n) insertions/deletions in the middle. LinkedList uses a doubly-linked list, providing O(1) insertions/deletions at ends but O(n) random access. Use ArrayList for most cases; LinkedList only when frequent insertions/deletions at the beginning are needed.

ArrayList is faster for reading (index-based access). LinkedList is faster for inserting/removing at the head. In practice, ArrayList outperforms LinkedList for most real-world use cases due to CPU cache locality.

### Q2. [Easy] How does HashSet ensure that elements are unique?

*Hint:* Think about hashCode() and equals().

**Answer:** When adding an element, HashSet calls `hashCode()` to determine the bucket, then `equals()` to check if an identical element already exists in that bucket. If `equals()` returns true, the new element is rejected. This is why overriding `equals()` requires overriding `hashCode()`.

Two objects that are equal (equals returns true) must have the same hashCode. If they do not, they may end up in different buckets, and the set will fail to detect duplicates.

### Q3. [Easy] What is the output?

```
HashSet set = new HashSet<>();
System.out.println(set.add(10));
System.out.println(set.add(20));
System.out.println(set.add(10));
System.out.println(set);
```

*Hint:* add() returns true if the element was added, false if already present.

**Answer:** `true`
`true`
`false`
`[20, 10]` (order may vary)

First add(10) returns true (new). add(20) returns true (new). Second add(10) returns false (duplicate). The set has 2 elements.

### Q4. [Medium] What is the output?

```
ArrayList list = new ArrayList<>();
list.add("Banana");
list.add("Apple");
list.add("Cherry");

Collections.sort(list);
int idx = Collections.binarySearch(list, "Cherry");
System.out.println("Found at: " + idx);

idx = Collections.binarySearch(list, "Grape");
System.out.println("Not found: " + idx);
```

*Hint:* binarySearch requires a sorted list. It returns negative if not found.

**Answer:** `Found at: 2`
`Not found: -4`

After sorting: [Apple, Banana, Cherry]. "Cherry" is at index 2. "Grape" is not found. binarySearch returns -(insertion point) - 1. Grape would be inserted at index 3, so it returns -4.

### Q5. [Medium] When should you use HashMap vs TreeMap vs LinkedHashMap?

*Hint:* Think about ordering requirements.

**Answer:** **HashMap**: No ordering needed, fastest for put/get (O(1)). **TreeMap**: Need keys sorted in natural or custom order (O(log n) operations). **LinkedHashMap**: Need to preserve insertion order while maintaining O(1) operations. Use HashMap by default, TreeMap when you need sorted keys, LinkedHashMap when insertion order matters.

HashMap is the default choice. TreeMap is used for range queries (headMap, tailMap) or when you need sorted iteration. LinkedHashMap is used for caches (LRU cache) or when processing order matters.

### Q6. [Medium] What is the output?

```
ArrayList list = new ArrayList<>(List.of(1, 2, 3, 4, 5));
list.removeIf(n -> n % 2 == 0);
System.out.println(list);
```

*Hint:* removeIf removes all elements matching the predicate.

**Answer:** `[1, 3, 5]`

`removeIf` removes all elements where the lambda returns true. `n % 2 == 0` is true for even numbers (2 and 4), so they are removed. Remaining: [1, 3, 5].

### Q7. [Hard] What is the output?

```
HashMap<String, ArrayList> map = new HashMap<>();
map.computeIfAbsent("even", k -> new ArrayList<>()).add(2);
map.computeIfAbsent("odd", k -> new ArrayList<>()).add(1);
map.computeIfAbsent("even", k -> new ArrayList<>()).add(4);
map.computeIfAbsent("odd", k -> new ArrayList<>()).add(3);

System.out.println(map);
```

*Hint:* computeIfAbsent creates a new value only if the key is absent. If present, it returns the existing value.

**Answer:** `{even=[2, 4], odd=[1, 3]}`

First call creates "even" -> [2]. Second creates "odd" -> [1]. Third: "even" already exists, returns existing list, adds 4 -> [2, 4]. Fourth: "odd" already exists, adds 3 -> [1, 3].

### Q8. [Hard] What happens internally when a HashMap has many hash collisions?

*Hint:* Think about what happens when multiple keys hash to the same bucket.

**Answer:** When multiple keys hash to the same bucket, HashMap stores them in a linked list (chaining). Since Java 8, if a bucket grows beyond 8 entries (TREEIFY_THRESHOLD), the linked list is converted to a balanced red-black tree, improving worst-case lookup from O(n) to O(log n). This prevents denial-of-service attacks that exploit hash collisions.

The treeification threshold is 8. When the bucket size drops below 6 (UNTREEIFY_THRESHOLD), it converts back to a linked list. This is an important optimization for HashMap's worst-case performance.

### Q9. [Hard] What is the output?

```
TreeSet set = new TreeSet<>((a, b) -> b.compareTo(a));
set.add("Arjun");
set.add("Kavya");
set.add("Ravi");
set.add("Priya");
System.out.println(set);
System.out.println(set.first());
System.out.println(set.last());
```

*Hint:* The comparator reverses the natural order (b.compareTo(a) instead of a.compareTo(b)).

**Answer:** `[Ravi, Priya, Kavya, Arjun]`
`Ravi`
`Arjun`

The comparator `(a, b) -> b.compareTo(a)` sorts in reverse alphabetical order. `first()` returns the first element in this order ("Ravi"), and `last()` returns the last ("Arjun").

### Q10. [Medium] Why should you use `List` as the reference type instead of `ArrayList`?

*Hint:* Think about programming to an interface.

**Answer:** Using the interface type (`List`) instead of the implementation type (`ArrayList`) follows the "program to an interface" principle. It allows you to swap implementations later (e.g., change to `LinkedList`) without modifying code that uses the variable. It also documents that the code only relies on List behavior, not ArrayList-specific features.

Example: `List names = new ArrayList<>()`. If you later need `LinkedList`, only the right side changes. All code using `names` still works because it depends on the `List` interface.

## Multiple Choice Questions

### Q1. [Easy] Which collection allows duplicate elements?

A. HashSet
B. TreeSet
C. ArrayList
D. LinkedHashSet

**Answer:** C

**C is correct.** `ArrayList` (a List) allows duplicates. All Set implementations (HashSet, TreeSet, LinkedHashSet) reject duplicates.

### Q2. [Easy] What does HashMap.get(key) return if the key does not exist?

A. 0
B. Empty string
C. null
D. Throws KeyNotFoundException

**Answer:** C

**C is correct.** `get()` returns `null` for a non-existent key. Use `getOrDefault(key, defaultValue)` to avoid null.

### Q3. [Easy] Which collection maintains elements in sorted order?

A. ArrayList
B. HashSet
C. TreeSet
D. LinkedList

**Answer:** C

**C is correct.** `TreeSet` uses a Red-Black tree to maintain elements in sorted order. `ArrayList` and `LinkedList` maintain insertion order. `HashSet` has no guaranteed order.

### Q4. [Easy] What is the time complexity of ArrayList.get(index)?

A. O(n)
B. O(1)
C. O(log n)
D. O(n^2)

**Answer:** B

**B is correct.** ArrayList uses a dynamic array with contiguous memory. Accessing by index is a simple offset calculation, which is O(1).

### Q5. [Easy] Can collections store primitive types like int or char?

A. Yes, directly
B. No, use wrapper classes (Integer, Character)
C. Only with special syntax
D. Only in Java 17+

**Answer:** B

**B is correct.** Collections use generics which require reference types. Use wrapper classes: `ArrayList` instead of `ArrayList`. Java autoboxes and unboxes automatically.

### Q6. [Medium] What exception is thrown when modifying a list during a for-each loop?

A. IllegalStateException
B. ConcurrentModificationException
C. UnsupportedOperationException
D. IndexOutOfBoundsException

**Answer:** B

**B is correct.** Modifying a collection during a for-each loop (which uses an Iterator internally) causes `ConcurrentModificationException`. Use `Iterator.remove()` or `removeIf()` instead.

### Q7. [Medium] Which Map implementation maintains insertion order?

A. HashMap
B. TreeMap
C. LinkedHashMap
D. Hashtable

**Answer:** C

**C is correct.** `LinkedHashMap` maintains insertion order using a doubly-linked list. `HashMap` has no order. `TreeMap` sorts by key.

### Q8. [Medium] What must you override along with equals() for correct HashSet behavior?

A. toString()
B. compareTo()
C. hashCode()
D. clone()

**Answer:** C

**C is correct.** The hashCode/equals contract states: if two objects are equal, they must have the same hashCode. Without overriding hashCode, equal objects may end up in different buckets.

### Q9. [Medium] Which is true about Map in the Collections Framework?

A. Map extends Collection
B. Map is not part of the Collection interface hierarchy
C. Map extends List
D. Map is deprecated in Java 8

**Answer:** B

**B is correct.** Map stores key-value pairs and does NOT extend the Collection interface. However, it is considered part of the Collections Framework.

### Q10. [Medium] What does Collections.unmodifiableList() return?

A. A copy of the list
B. A read-only view that throws UnsupportedOperationException on modification
C. A synchronized list
D. A sorted list

**Answer:** B

**B is correct.** `unmodifiableList()` returns a read-only view of the list. Any attempt to add, remove, or set elements throws `UnsupportedOperationException`. It is a view, not a copy.

### Q11. [Hard] What is the average time complexity of HashMap.get(key)?

A. O(n)
B. O(log n)
C. O(1)
D. O(n log n)

**Answer:** C

**C is correct.** HashMap uses hashing to directly compute the bucket location, giving O(1) average-case get/put. In the worst case (all keys collide), it degrades to O(n) (or O(log n) with treeification in Java 8+).

### Q12. [Hard] When does a HashMap bucket convert from a linked list to a tree (Java 8+)?

A. When the bucket has more than 4 entries
B. When the bucket has more than 8 entries
C. When the total map size exceeds 16
D. Never, HashMap always uses linked lists

**Answer:** B

**B is correct.** In Java 8+, when a bucket (chain) has more than 8 entries (TREEIFY_THRESHOLD), it converts from a linked list to a red-black tree for O(log n) lookup instead of O(n).

### Q13. [Hard] What is the difference between Comparable and Comparator?

A. They are the same thing
B. Comparable defines natural ordering inside the class; Comparator defines external custom ordering
C. Comparable is for sorting, Comparator is for searching
D. Comparable uses equals(), Comparator uses hashCode()

**Answer:** B

**B is correct.** `Comparable` is implemented by the class itself (`compareTo()` method, defines natural ordering). `Comparator` is a separate class/lambda that defines a custom ordering externally.

### Q14. [Hard] What does HashMap do when two different keys have the same hashCode?

A. It replaces the first entry
B. It throws an exception
C. It stores both entries in the same bucket (chaining)
D. It ignores the second entry

**Answer:** C

**C is correct.** When two keys have the same hashCode (collision), both entries are stored in the same bucket. HashMap uses chaining (linked list or tree) within the bucket and uses `equals()` to distinguish between keys.

## Coding Challenges

### Challenge 1. Remove Duplicates from ArrayList

**Difficulty:** Easy

Given an ArrayList with duplicates, create a new list with duplicates removed while maintaining order. Use LinkedHashSet.

**Constraints:**

- Preserve insertion order. Use LinkedHashSet.

**Sample input:**

```
[4, 2, 3, 2, 1, 4, 3, 5]
```

**Sample output:**

```
Original: [4, 2, 3, 2, 1, 4, 3, 5]
Unique: [4, 2, 3, 1, 5]
```

**Solution:**

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>(Arrays.asList(4, 2, 3, 2, 1, 4, 3, 5));
        System.out.println("Original: " + list);

        ArrayList<Integer> unique = new ArrayList<>(new LinkedHashSet<>(list));
        System.out.println("Unique: " + unique);
    }
}
```

### Challenge 2. Student Grade Book with HashMap

**Difficulty:** Medium

Create a grade book using HashMap<String, ArrayList> where keys are student names and values are lists of marks. Add marks for 3 students. Calculate and print each student's average marks sorted by name.

**Constraints:**

- Sort output by student name. Calculate average to 2 decimal places.

**Sample input:**

```
Arjun: [85, 90, 78], Kavya: [92, 88, 95], Ravi: [70, 75, 80]
```

**Sample output:**

```
Arjun: [85, 90, 78] avg=84.33
Kavya: [92, 88, 95] avg=91.67
Ravi: [70, 75, 80] avg=75.00
```

**Solution:**

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        HashMap<String, ArrayList<Integer>> grades = new HashMap<>();
        grades.put("Arjun", new ArrayList<>(Arrays.asList(85, 90, 78)));
        grades.put("Kavya", new ArrayList<>(Arrays.asList(92, 88, 95)));
        grades.put("Ravi", new ArrayList<>(Arrays.asList(70, 75, 80)));

        TreeMap<String, ArrayList<Integer>> sorted = new TreeMap<>(grades);
        for (Map.Entry<String, ArrayList<Integer>> e : sorted.entrySet()) {
            double avg = e.getValue().stream().mapToInt(Integer::intValue).average().orElse(0);
            System.out.printf("%s: %s avg=%.2f%n", e.getKey(), e.getValue(), avg);
        }
    }
}
```

### Challenge 3. Find First Non-Repeating Character

**Difficulty:** Medium

Given a string, find the first character that does not repeat. Use LinkedHashMap to maintain insertion order while counting frequencies.

**Constraints:**

- Use LinkedHashMap for O(n) solution. Handle case where all characters repeat.

**Sample input:**

```
"aabbcdeff"
```

**Sample output:**

```
First non-repeating: c
```

**Solution:**

```java
import java.util.*;

public class Main {
    static Character firstNonRepeating(String s) {
        LinkedHashMap<Character, Integer> freq = new LinkedHashMap<>();
        for (char c : s.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        for (Map.Entry<Character, Integer> e : freq.entrySet()) {
            if (e.getValue() == 1) return e.getKey();
        }
        return null;
    }

    public static void main(String[] args) {
        String s = "aabbcdeff";
        Character result = firstNonRepeating(s);
        System.out.println("First non-repeating: " + (result != null ? result : "none"));
    }
}
```

### Challenge 4. Group Students by Grade

**Difficulty:** Hard

Given a list of (name, marks) pairs, group students by grade: A (90+), B (80-89), C (70-79), D (below 70). Use HashMap<String, ArrayList> where keys are grades and values are student name lists. Print groups sorted by grade.

**Constraints:**

- Use computeIfAbsent for clean grouping. Sort output by grade.

**Sample input:**

```
Arjun:85, Kavya:92, Ravi:70, Priya:65, Deepak:88, Meera:95
```

**Sample output:**

```
A: [Kavya, Meera]
B: [Arjun, Deepak]
C: [Ravi]
D: [Priya]
```

**Solution:**

```java
import java.util.*;

public class Main {
    static String getGrade(int marks) {
        if (marks >= 90) return "A";
        if (marks >= 80) return "B";
        if (marks >= 70) return "C";
        return "D";
    }

    public static void main(String[] args) {
        Map<String, Integer> students = Map.of(
            "Arjun", 85, "Kavya", 92, "Ravi", 70,
            "Priya", 65, "Deepak", 88, "Meera", 95
        );

        TreeMap<String, ArrayList<String>> groups = new TreeMap<>();
        for (Map.Entry<String, Integer> e : students.entrySet()) {
            String grade = getGrade(e.getValue());
            groups.computeIfAbsent(grade, k -> new ArrayList<>()).add(e.getKey());
        }

        for (Map.Entry<String, ArrayList<String>> e : groups.entrySet()) {
            Collections.sort(e.getValue());
            System.out.println(e.getKey() + ": " + e.getValue());
        }
    }
}
```

### Challenge 5. LRU Cache Simulation

**Difficulty:** Hard

Implement a simple LRU (Least Recently Used) cache using LinkedHashMap with access-order. The cache should hold at most 3 entries. When a new entry is added and the cache is full, the least recently accessed entry is removed. Test with a sequence of get/put operations.

**Constraints:**

- Use LinkedHashMap with accessOrder=true and override removeEldestEntry.

**Sample input:**

```
put(1,'A'), put(2,'B'), put(3,'C'), get(1), put(4,'D')
```

**Sample output:**

```
After puts: {1=A, 2=B, 3=C}
After get(1): accessed A
After put(4,D): {3=C, 1=A, 4=D} (2=B evicted)
```

**Solution:**

```java
import java.util.*;

class LRUCache<K, V> extends LinkedHashMap<K, V> {
    private int capacity;

    LRUCache(int capacity) {
        super(capacity, 0.75f, true);  // accessOrder=true
        this.capacity = capacity;
    }

    @Override
    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
        return size() > capacity;
    }
}

public class Main {
    public static void main(String[] args) {
        LRUCache<Integer, String> cache = new LRUCache<>(3);
        cache.put(1, "A");
        cache.put(2, "B");
        cache.put(3, "C");
        System.out.println("After puts: " + cache);

        String val = cache.get(1);
        System.out.println("After get(1): accessed " + val);

        cache.put(4, "D");  // Evicts least recently used (2=B)
        System.out.println("After put(4,D): " + cache + " (2=B evicted)");
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/collections-framework/*
