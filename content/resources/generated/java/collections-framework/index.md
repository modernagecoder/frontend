---
title: "Java Collections Framework - ArrayList, HashSet, HashMap Tutorial | Modern Age Coders"
description: "Master the Java Collections Framework including ArrayList, LinkedList, HashSet, TreeSet, HashMap, TreeMap, Iterator, and Collections utility class. Includes 45+ practice questions with interview-style problems for placement preparation."
slug: collections-framework
canonical: https://learn.modernagecoders.com/resources/java/collections-framework/
category: "Java"
keywords: ["java collections", "arraylist java", "hashmap java", "java collections framework tutorial", "java hashset", "java treemap", "java linkedlist", "java iterator", "java collections interview questions", "arraylist vs linkedlist"]
---
# Collections Framework - List, Set, Map

**Difficulty:** Advanced  
**Reading time:** 50 min  
**Chapter:** 19  
**Practice questions:** 45

## What Is the Collections Framework?

The **Java Collections Framework** is a unified architecture for representing and manipulating groups of objects. It provides interfaces, implementations, and algorithms that let you store, retrieve, and process data efficiently.

Before collections, Java developers used arrays, `Vector`, and `Hashtable`, which were inconsistent in design and limited in functionality. The Collections Framework (introduced in Java 2) provides a clean, consistent API for all data structure needs.

```
// Array: fixed size, primitive types allowed
int[] arr = new int[5];

// Collections: dynamic size, objects only
ArrayList list = new ArrayList<>();
list.add(10);
list.add(20);
list.add(30);
System.out.println(list);  // [10, 20, 30]
```

### The Collection Hierarchy

```
java.lang.Iterable
  └── java.util.Collection
        ├── List (ordered, duplicates allowed)
        │     ├── ArrayList
        │     ├── LinkedList
        │     └── Vector (legacy)
        ├── Set (no duplicates)
        │     ├── HashSet (unordered)
        │     ├── LinkedHashSet (insertion order)
        │     └── TreeSet (sorted)
        └── Queue (FIFO)
              ├── LinkedList
              └── PriorityQueue

java.util.Map (NOT part of Collection interface)
  ├── HashMap (unordered)
  ├── LinkedHashMap (insertion order)
  ├── TreeMap (sorted by keys)
  └── Hashtable (legacy)
```

`Map` is separate from `Collection` because it stores key-value pairs, not single elements. But it is considered part of the Collections Framework.

## Why Does the Collections Framework Matter?

The Collections Framework is used in virtually every Java application. Understanding it is essential for writing efficient, clean code and for clearing any Java interview.

### 1. Dynamic Size

Arrays have a fixed size determined at creation. Collections grow and shrink dynamically. When Arjun does not know how many students will register, an `ArrayList` adapts automatically.

### 2. Rich Operations

Collections provide built-in methods for searching, sorting, filtering, and transforming data. Instead of writing a search algorithm from scratch, Kavya uses `list.contains()`, `Collections.sort()`, or `map.get(key)`.

### 3. Type Safety with Generics

Generic collections (`ArrayList`) prevent type errors at compile time. Without generics, a list could hold any object, and casting would be required at every retrieval, risking `ClassCastException`.

### 4. Choosing the Right Data Structure

Different problems need different data structures. Need fast lookup by key? Use `HashMap`. Need unique elements? Use `HashSet`. Need sorted data? Use `TreeSet` or `TreeMap`. Understanding when to use which is a core interview skill.

### 5. Interoperability

All collections implement common interfaces (`Collection`, `List`, `Set`). Code that accepts `List` works with `ArrayList`, `LinkedList`, or any future implementation. This is polymorphism in action.

### 6. Interview and Placement Importance

Collections questions are among the most frequently asked in Java interviews. "ArrayList vs LinkedList", "HashMap internals", "how HashSet ensures uniqueness", and "when to use TreeMap" are standard placement questions.

## Detailed Explanation

### 1. ArrayList

`ArrayList` is a dynamic array. It stores elements in a contiguous memory block, grows automatically when needed (typically by 50%), and provides fast random access by index.

```
import java.util.ArrayList;

ArrayList names = new ArrayList<>();

// Adding elements
names.add("Arjun");          // Appends to end
names.add("Kavya");          // [Arjun, Kavya]
names.add(0, "Ravi");        // Insert at index 0: [Ravi, Arjun, Kavya]

// Accessing elements
String first = names.get(0); // Ravi
int size = names.size();     // 3

// Modifying elements
names.set(1, "Priya");       // Replace at index 1: [Ravi, Priya, Kavya]

// Removing elements
names.remove(0);             // Remove by index: [Priya, Kavya]
names.remove("Kavya");       // Remove by value: [Priya]

// Searching
boolean has = names.contains("Priya");  // true
int idx = names.indexOf("Priya");       // 0

// Checking empty
boolean empty = names.isEmpty();  // false
```

**Time complexity:** `get(i)` O(1), `add(e)` amortized O(1), `add(i, e)` O(n), `remove(i)` O(n), `contains()` O(n).

### 2. LinkedList

`LinkedList` is a doubly-linked list. Each element (node) holds a reference to the previous and next node. It implements both `List` and `Deque` interfaces.

```
import java.util.LinkedList;

LinkedList list = new LinkedList<>();
list.add("Arjun");
list.add("Kavya");

// LinkedList-specific methods
list.addFirst("First");      // [First, Arjun, Kavya]
list.addLast("Last");        // [First, Arjun, Kavya, Last]
String f = list.getFirst();  // First
String l = list.getLast();   // Last
list.removeFirst();          // [Arjun, Kavya, Last]
list.removeLast();           // [Arjun, Kavya]
```

**ArrayList vs LinkedList:**

OperationArrayListLinkedListRandom access (get)O(1)O(n)Add at endO(1) amortizedO(1)Add/remove at beginningO(n)O(1)Add/remove in middleO(n)O(1) if at nodeMemoryLess (contiguous)More (node + 2 pointers)

Use `ArrayList` for most cases (random access is common). Use `LinkedList` only when you frequently add/remove from the beginning or need a queue/deque.

### 3. HashSet

`HashSet` stores unique elements with no guaranteed order. It uses a hash table internally (backed by `HashMap`).

```
import java.util.HashSet;

HashSet set = new HashSet<>();
set.add("Arjun");
set.add("Kavya");
set.add("Ravi");
set.add("Arjun");  // Duplicate! Not added.

System.out.println(set);             // [Kavya, Ravi, Arjun] (order may vary)
System.out.println(set.size());      // 3
System.out.println(set.contains("Ravi"));  // true

set.remove("Ravi");
System.out.println(set);             // [Kavya, Arjun]
```

**How uniqueness works:** When you add an element, Java calls `hashCode()` to find the bucket, then `equals()` to check for duplicates in that bucket. If `equals()` returns true, the element is rejected.

**hashCode/equals contract:** If two objects are `equal()`, they must have the same `hashCode()`. If you override `equals()`, you must override `hashCode()`.

### 4. TreeSet

`TreeSet` stores unique elements in sorted order. It uses a Red-Black tree internally.

```
import java.util.TreeSet;

TreeSet ts = new TreeSet<>();
ts.add(30);
ts.add(10);
ts.add(50);
ts.add(20);

System.out.println(ts);         // [10, 20, 30, 50] (sorted)
System.out.println(ts.first()); // 10
System.out.println(ts.last());  // 50
```

Elements must implement `Comparable`, or you must provide a `Comparator` to the TreeSet constructor.

### 5. HashMap

`HashMap` stores key-value pairs. Keys are unique; values can be duplicated. No guaranteed order.

```
import java.util.HashMap;

HashMap<String, Integer> marks = new HashMap<>();

// Adding entries
marks.put("Arjun", 85);
marks.put("Kavya", 92);
marks.put("Ravi", 78);

// Accessing
int score = marks.get("Arjun");     // 85
boolean has = marks.containsKey("Kavya");  // true
boolean hasVal = marks.containsValue(92);  // true
int size = marks.size();             // 3

// Updating (put with existing key replaces value)
marks.put("Arjun", 90);  // Arjun's score updated to 90

// Default value
int def = marks.getOrDefault("Priya", 0);  // 0 (not found)

// Removing
marks.remove("Ravi");  // Removes Ravi

// Iterating
for (String key : marks.keySet()) {
    System.out.println(key + ": " + marks.get(key));
}

for (var entry : marks.entrySet()) {
    System.out.println(entry.getKey() + " = " + entry.getValue());
}
```

**Time complexity:** `put`, `get`, `remove`, `containsKey` are all O(1) average case.

### 6. TreeMap

`TreeMap` stores key-value pairs sorted by keys:

```
import java.util.TreeMap;

TreeMap<String, Integer> tm = new TreeMap<>();
tm.put("Ravi", 78);
tm.put("Arjun", 85);
tm.put("Kavya", 92);

System.out.println(tm);           // {Arjun=85, Kavya=92, Ravi=78} (sorted by key)
System.out.println(tm.firstKey()); // Arjun
System.out.println(tm.lastKey());  // Ravi
```

### 7. LinkedHashMap

`LinkedHashMap` maintains insertion order (the order in which entries were added):

```
import java.util.LinkedHashMap;

LinkedHashMap<String, Integer> lhm = new LinkedHashMap<>();
lhm.put("Ravi", 78);
lhm.put("Arjun", 85);
lhm.put("Kavya", 92);

System.out.println(lhm);  // {Ravi=78, Arjun=85, Kavya=92} (insertion order)
```

### 8. Iterator and for-each

All collections are `Iterable`, supporting for-each loops and explicit iterators:

```
ArrayList list = new ArrayList<>();
list.add("A");
list.add("B");
list.add("C");

// For-each loop
for (String s : list) {
    System.out.println(s);
}

// Iterator (allows removal during iteration)
import java.util.Iterator;
Iterator it = list.iterator();
while (it.hasNext()) {
    String s = it.next();
    if (s.equals("B")) {
        it.remove();  // Safe removal during iteration
    }
}
System.out.println(list);  // [A, C]
```

Using `list.remove()` inside a for-each loop throws `ConcurrentModificationException`. Use `Iterator.remove()` instead.

### 9. Collections Utility Class

`java.util.Collections` provides static utility methods:

```
import java.util.Collections;
import java.util.ArrayList;

ArrayList list = new ArrayList<>();
list.add(30);
list.add(10);
list.add(50);
list.add(20);

Collections.sort(list);        // [10, 20, 30, 50]
Collections.reverse(list);     // [50, 30, 20, 10]
Collections.shuffle(list);     // Random order
int min = Collections.min(list);  // Minimum element
int max = Collections.max(list);  // Maximum element

// Unmodifiable list
var immutable = Collections.unmodifiableList(list);
// immutable.add(100);  // UnsupportedOperationException
```

## Code Examples

### ArrayList: Complete Operations

```java
import java.util.ArrayList;
import java.util.Collections;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> students = new ArrayList<>();

        // Add
        students.add("Arjun");
        students.add("Kavya");
        students.add("Ravi");
        students.add("Priya");
        System.out.println("Initial: " + students);

        // Insert at index
        students.add(1, "Deepak");
        System.out.println("After insert: " + students);

        // Access and modify
        System.out.println("Element at 0: " + students.get(0));
        students.set(2, "Meera");
        System.out.println("After set: " + students);

        // Search
        System.out.println("Contains Ravi? " + students.contains("Ravi"));
        System.out.println("Index of Meera: " + students.indexOf("Meera"));

        // Remove
        students.remove(0);
        students.remove("Priya");
        System.out.println("After remove: " + students);

        // Sort
        Collections.sort(students);
        System.out.println("Sorted: " + students);

        // Size and isEmpty
        System.out.println("Size: " + students.size());
        System.out.println("Empty? " + students.isEmpty());
    }
}
```

This demonstrates all major ArrayList operations: adding (append and insert), accessing by index, modifying with set, searching with contains/indexOf, removing by index and value, and sorting with Collections.sort.

**Output:**

```
Initial: [Arjun, Kavya, Ravi, Priya]
After insert: [Arjun, Deepak, Kavya, Ravi, Priya]
Element at 0: Arjun
After set: [Arjun, Deepak, Meera, Ravi, Priya]
Contains Ravi? true
Index of Meera: 2
After remove: [Deepak, Meera, Ravi]
Sorted: [Deepak, Meera, Ravi]
Size: 3
Empty? false
```

### HashSet: Uniqueness and Set Operations

```java
import java.util.HashSet;
import java.util.TreeSet;

public class Main {
    public static void main(String[] args) {
        HashSet<String> set = new HashSet<>();
        set.add("Java");
        set.add("Python");
        set.add("Java");      // Duplicate, not added
        set.add("JavaScript");
        set.add("Python");    // Duplicate, not added

        System.out.println("HashSet: " + set);
        System.out.println("Size: " + set.size());
        System.out.println("Contains Java? " + set.contains("Java"));

        // Set operations
        HashSet<String> backend = new HashSet<>();
        backend.add("Java");
        backend.add("Python");
        backend.add("Go");

        HashSet<String> frontend = new HashSet<>();
        frontend.add("JavaScript");
        frontend.add("Python");
        frontend.add("TypeScript");

        // Union
        HashSet<String> union = new HashSet<>(backend);
        union.addAll(frontend);
        System.out.println("Union: " + union);

        // Intersection
        HashSet<String> intersection = new HashSet<>(backend);
        intersection.retainAll(frontend);
        System.out.println("Intersection: " + intersection);

        // Difference
        HashSet<String> difference = new HashSet<>(backend);
        difference.removeAll(frontend);
        System.out.println("Backend - Frontend: " + difference);

        // TreeSet (sorted)
        TreeSet<String> sorted = new TreeSet<>(set);
        System.out.println("Sorted: " + sorted);
    }
}
```

HashSet rejects duplicates silently (add returns false). Set operations like union (addAll), intersection (retainAll), and difference (removeAll) work on copies to preserve originals. TreeSet sorts the elements.

**Output:**

```
HashSet: [Java, JavaScript, Python]
Size: 3
Contains Java? true
Union: [Java, TypeScript, JavaScript, Go, Python]
Intersection: [Python]
Backend - Frontend: [Java, Go]
Sorted: [Java, JavaScript, Python]
```

### HashMap: Key-Value Operations

```java
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> marks = new HashMap<>();

        // Put entries
        marks.put("Arjun", 85);
        marks.put("Kavya", 92);
        marks.put("Ravi", 78);
        marks.put("Priya", 88);
        System.out.println("Marks: " + marks);

        // Get and getOrDefault
        System.out.println("Arjun: " + marks.get("Arjun"));
        System.out.println("Unknown: " + marks.getOrDefault("Unknown", 0));

        // Update (put with existing key)
        marks.put("Arjun", 90);
        System.out.println("After update: " + marks.get("Arjun"));

        // Check existence
        System.out.println("Has Kavya? " + marks.containsKey("Kavya"));
        System.out.println("Has value 78? " + marks.containsValue(78));

        // Iterate with entrySet
        System.out.println("\nAll entries:");
        for (Map.Entry<String, Integer> entry : marks.entrySet()) {
            System.out.println("  " + entry.getKey() + " -> " + entry.getValue());
        }

        // Keys and values
        System.out.println("Keys: " + marks.keySet());
        System.out.println("Values: " + marks.values());

        // Remove
        marks.remove("Ravi");
        System.out.println("After remove: " + marks);
    }
}
```

HashMap stores key-value pairs. Keys must be unique; putting an existing key replaces the value. `getOrDefault` avoids null when a key is not found. `entrySet()` provides both key and value for iteration.

**Output:**

```
Marks: {Arjun=85, Kavya=92, Ravi=78, Priya=88}
Arjun: 85
Unknown: 0
After update: 90
Has Kavya? true
Has value 78? true

All entries:
  Arjun -> 90
  Kavya -> 92
  Ravi -> 78
  Priya -> 88
Keys: [Arjun, Kavya, Ravi, Priya]
Values: [90, 92, 78, 88]
After remove: {Arjun=90, Kavya=92, Priya=88}
```

### Word Frequency Counter with HashMap

```java
import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

public class Main {
    public static void main(String[] args) {
        String text = "java is great java is powerful and java is everywhere";
        String[] words = text.split(" ");

        // Count word frequencies
        HashMap<String, Integer> freq = new HashMap<>();
        for (String word : words) {
            freq.put(word, freq.getOrDefault(word, 0) + 1);
        }
        System.out.println("Frequencies: " + freq);

        // Find the most frequent word
        String maxWord = "";
        int maxCount = 0;
        for (Map.Entry<String, Integer> entry : freq.entrySet()) {
            if (entry.getValue() > maxCount) {
                maxCount = entry.getValue();
                maxWord = entry.getKey();
            }
        }
        System.out.println("Most frequent: \"" + maxWord + "\" (" + maxCount + " times)");

        // Sorted by word (alphabetical)
        TreeMap<String, Integer> sorted = new TreeMap<>(freq);
        System.out.println("Sorted: " + sorted);
    }
}
```

A classic interview problem. `getOrDefault(word, 0) + 1` increments the count (or starts at 1). Iterating `entrySet()` finds the maximum. `TreeMap` sorts by key for alphabetical output.

**Output:**

```
Frequencies: {java=3, is=3, great=1, powerful=1, and=1, everywhere=1}
Most frequent: "java" (3 times)
Sorted: {and=1, everywhere=1, great=1, is=3, java=3, powerful=1}
```

### Iterator: Safe Removal During Iteration

```java
import java.util.ArrayList;
import java.util.Iterator;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();
        for (int i = 1; i <= 10; i++) {
            numbers.add(i);
        }
        System.out.println("Original: " + numbers);

        // Remove even numbers using Iterator
        Iterator<Integer> it = numbers.iterator();
        while (it.hasNext()) {
            int num = it.next();
            if (num % 2 == 0) {
                it.remove();  // Safe removal
            }
        }
        System.out.println("Odd only: " + numbers);

        // What NOT to do:
        ArrayList<Integer> list2 = new ArrayList<>();
        list2.add(1);
        list2.add(2);
        list2.add(3);
        try {
            for (int n : list2) {
                if (n == 2) {
                    list2.remove(Integer.valueOf(2));  // ConcurrentModificationException!
                }
            }
        } catch (java.util.ConcurrentModificationException e) {
            System.out.println("ConcurrentModificationException caught!");
        }
    }
}
```

Use `Iterator.remove()` to safely remove elements during iteration. Using `list.remove()` inside a for-each loop causes `ConcurrentModificationException` because the underlying structure changes during iteration.

**Output:**

```
Original: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Odd only: [1, 3, 5, 7, 9]
ConcurrentModificationException caught!
```

### Collections Utility Class

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(40);
        numbers.add(10);
        numbers.add(50);
        numbers.add(20);
        numbers.add(30);

        System.out.println("Original: " + numbers);

        Collections.sort(numbers);
        System.out.println("Sorted: " + numbers);

        Collections.reverse(numbers);
        System.out.println("Reversed: " + numbers);

        System.out.println("Min: " + Collections.min(numbers));
        System.out.println("Max: " + Collections.max(numbers));
        System.out.println("Frequency of 30: " + Collections.frequency(numbers, 30));

        Collections.shuffle(numbers);
        System.out.println("Shuffled: " + numbers);

        // Unmodifiable list
        List<Integer> readOnly = Collections.unmodifiableList(numbers);
        System.out.println("Read-only: " + readOnly);
        try {
            readOnly.add(100);
        } catch (UnsupportedOperationException e) {
            System.out.println("Cannot modify unmodifiable list!");
        }
    }
}
```

The `Collections` utility class provides static methods for sorting, reversing, shuffling, finding min/max, counting frequency, and creating unmodifiable views. `unmodifiableList` prevents any modifications.

**Output:**

```
Original: [40, 10, 50, 20, 30]
Sorted: [10, 20, 30, 40, 50]
Reversed: [50, 40, 30, 20, 10]
Min: 10
Max: 50
Frequency of 30: 1
Shuffled: [varies]
Read-only: [varies]
Cannot modify unmodifiable list!
```

## Common Mistakes

### Removing Elements During for-each Loop

**Wrong:**

```
ArrayList<String> list = new ArrayList<>();
list.add("A");
list.add("B");
list.add("C");

for (String s : list) {
    if (s.equals("B")) {
        list.remove(s);  // ConcurrentModificationException!
    }
}
```

java.util.ConcurrentModificationException

**Correct:**

```
ArrayList<String> list = new ArrayList<>();
list.add("A");
list.add("B");
list.add("C");

Iterator<String> it = list.iterator();
while (it.hasNext()) {
    if (it.next().equals("B")) {
        it.remove();  // Safe!
    }
}
// Or use removeIf: list.removeIf(s -> s.equals("B"));
```

Modifying a collection during a for-each loop causes `ConcurrentModificationException`. Use `Iterator.remove()` or `list.removeIf()` (Java 8) for safe removal during iteration.

### Using ArrayList<int> Instead of ArrayList<Integer>

**Wrong:**

```
ArrayList<int> numbers = new ArrayList<>();  // Compilation error!
```

Compilation error: type argument cannot be a primitive type.

**Correct:**

```
ArrayList<Integer> numbers = new ArrayList<>();
numbers.add(10);       // Autoboxing: int -> Integer
int first = numbers.get(0);  // Auto-unboxing: Integer -> int
```

Generics do not work with primitive types. Use wrapper classes: `Integer` for `int`, `Double` for `double`, `Character` for `char`, etc. Java autoboxes and unboxes automatically.

### Not Overriding hashCode When Overriding equals

**Wrong:**

```
class Student {
    String name;
    Student(String name) { this.name = name; }

    @Override
    public boolean equals(Object o) {
        if (o instanceof Student) {
            return this.name.equals(((Student) o).name);
        }
        return false;
    }
    // hashCode NOT overridden!
}

HashSet<Student> set = new HashSet<>();
set.add(new Student("Arjun"));
set.add(new Student("Arjun"));  // Both added! Duplicate not detected.
System.out.println(set.size());  // 2 (expected 1)
```

No compilation or runtime error, but the set contains duplicates because hashCode is not consistent with equals.

**Correct:**

```
class Student {
    String name;
    Student(String name) { this.name = name; }

    @Override
    public boolean equals(Object o) {
        if (o instanceof Student) {
            return this.name.equals(((Student) o).name);
        }
        return false;
    }

    @Override
    public int hashCode() {
        return name.hashCode();
    }
}

HashSet<Student> set = new HashSet<>();
set.add(new Student("Arjun"));
set.add(new Student("Arjun"));  // Duplicate detected!
System.out.println(set.size());  // 1
```

HashSet uses `hashCode()` to find the bucket and `equals()` to check for duplicates. If you override `equals()` without overriding `hashCode()`, equal objects may land in different buckets, and the set fails to detect duplicates.

### Confusing HashMap.remove(key) with ArrayList.remove(index/object)

**Wrong:**

```
ArrayList<Integer> list = new ArrayList<>();
list.add(10);
list.add(20);
list.add(30);

list.remove(1);      // Removes element at index 1 (20), not the value 1!
System.out.println(list);  // [10, 30]

// To remove the value 1:
// list.remove(Integer.valueOf(1));
```

No error, but the wrong element is removed. remove(1) removes by index, not by value.

**Correct:**

```
ArrayList<Integer> list = new ArrayList<>();
list.add(10);
list.add(20);
list.add(30);

list.remove(Integer.valueOf(20));  // Removes the value 20
System.out.println(list);  // [10, 30]

list.remove(0);  // Removes element at index 0
System.out.println(list);  // [30]
```

For `ArrayList`, `remove(1)` calls `remove(int index)` (removes at index 1), not `remove(Object)`. To remove by value, use `remove(Integer.valueOf(20))`.

## Summary

- The Collections Framework provides interfaces (List, Set, Queue, Map) and implementations (ArrayList, HashSet, HashMap, etc.) for storing and manipulating groups of objects.
- ArrayList is a dynamic array with O(1) random access. Use it for most list needs. It is the most commonly used collection in Java.
- LinkedList is a doubly-linked list with O(1) add/remove at ends. Use it only when you frequently insert/remove from the beginning or need a deque.
- HashSet stores unique elements with no order. Uniqueness is determined by hashCode() and equals(). If you override equals(), you MUST override hashCode().
- TreeSet stores unique elements in sorted order (natural ordering or custom Comparator). Elements must implement Comparable or a Comparator must be provided.
- HashMap stores key-value pairs with O(1) average put/get. Keys must be unique. getOrDefault() avoids null returns for missing keys.
- TreeMap stores key-value pairs sorted by keys. LinkedHashMap maintains insertion order.
- Use Iterator.remove() for safe removal during iteration. for-each with list.remove() causes ConcurrentModificationException.
- Generics prevent type errors at compile time. Collections cannot hold primitives; use wrapper classes (Integer, Double, etc.) with autoboxing.
- Collections utility class provides sort(), reverse(), shuffle(), min(), max(), frequency(), and unmodifiableList().
- Choose the right collection: List for ordered data with duplicates, Set for unique elements, Map for key-value associations. Prefer interfaces as reference types (List over ArrayList).

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/collections-framework/*
*Practice questions: https://learn.modernagecoders.com/resources/java/collections-framework/practice/*
