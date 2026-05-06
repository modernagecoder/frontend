---
title: "Practice: Java Memory Model and Garbage Collection"
description: "55 practice problems for Java Memory Model and Garbage Collection in Java"
slug: java-memory-and-garbage-collection-practice
canonical: https://learn.modernagecoders.com/resources/java/java-memory-and-garbage-collection/practice
category: "Java"
---
# Practice: Java Memory Model and Garbage Collection

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```java
int x = 10;
int y = x;
y = 20;
System.out.println(x);
System.out.println(y);
```

*Hint:* Primitives on the stack store values, not references.

**Answer:** `10`
`20`

Primitives store their values directly. `y = x` copies the value 10 into y. Changing y to 20 does not affect x. They are independent copies on the stack.

### Q2. [Easy] What is the output?

```java
int[] a = {1, 2, 3};
int[] b = a;
b[0] = 99;
System.out.println(a[0]);
```

*Hint:* Arrays are objects on the heap. 'b = a' copies the reference, not the array.

**Answer:** `99`

`b = a` copies the reference, not the array. Both `a` and `b` point to the same array object on the heap. Changing `b[0]` changes the shared object, so `a[0]` also shows 99.

### Q3. [Easy] What is the output?

```java
String s1 = "Hello";
String s2 = s1;
s2 = "World";
System.out.println(s1);
System.out.println(s2);
```

*Hint:* Strings are immutable. Reassigning s2 creates a new String object.

**Answer:** `Hello`
`World`

`s2 = s1` makes s2 point to "Hello". `s2 = "World"` makes s2 point to a new String "World". s1 still points to "Hello". Strings are immutable -- reassignment changes the reference, not the object.

### Q4. [Easy] How many objects are eligible for GC after the marked line?

```java
String a = new String("X");
String b = new String("Y");
String c = new String("Z");
a = b;
b = null;
// <-- How many objects eligible for GC here?
```

*Hint:* Count objects that have no references pointing to them.

**Answer:** `1` (the original object referenced by a, which held "X")

Originally: a -> "X", b -> "Y", c -> "Z". After `a = b`: a -> "Y", "X" has no reference (GC eligible). After `b = null`: b is null, but a still points to "Y". So "Y" is still alive. "Z" is alive through c. Only "X" is GC eligible.

### Q5. [Easy] What is the output?

```java
Runtime rt = Runtime.getRuntime();
System.out.println(rt.maxMemory() > 0);
System.out.println(rt.availableProcessors() > 0);
```

*Hint:* These are basic runtime queries that always have positive values.

**Answer:** `true`
`true`

`maxMemory()` returns the maximum heap size (always positive). `availableProcessors()` returns the number of CPU cores (always at least 1).

### Q6. [Medium] How many objects are eligible for GC after the marked line?

```java
Object a = new Object();  // obj1
Object b = new Object();  // obj2
Object c = a;              // c -> obj1
a = b;                     // a -> obj2
b = null;                  // b -> null
c = null;                  // c -> null
// <-- How many eligible?
```

*Hint:* Trace each reference step by step.

**Answer:** `1` (obj1)

After all operations: a -> obj2, b -> null, c -> null. obj1 was pointed to by a (originally) and c. After a = b, a points to obj2. After c = null, obj1 has no references. obj2 is still referenced by a. So 1 object (obj1) is GC eligible.

### Q7. [Medium] What error occurs and why?

```java
static void recurse() {
    recurse();
}

public static void main(String[] args) {
    recurse();
}
```

*Hint:* Each method call creates a new stack frame.

**Answer:** `StackOverflowError`

Each call to `recurse()` pushes a new frame onto the stack. Since there is no base case, recursion never stops. The stack eventually runs out of space, throwing `StackOverflowError`. This is a stack memory issue, not heap.

### Q8. [Medium] What is the output?

```java
import java.lang.ref.WeakReference;

String strong = new String("Data");
WeakReference weak = new WeakReference<>(strong);
System.out.println(weak.get());
strong = null;
System.gc();
System.out.println(weak.get());
```

*Hint:* After strong is null, the only reference to "Data" is weak.

**Answer:** `Data`
`null`

Initially, both `strong` and `weak` reference the String. `weak.get()` returns "Data". After `strong = null`, only the weak reference remains. GC collects weakly-referenced objects, so `weak.get()` returns null.

### Q9. [Medium] What is the difference between `StackOverflowError` and `OutOfMemoryError`?

*Hint:* Each relates to a different memory area.

**Answer:** `StackOverflowError` occurs when the stack runs out of space, typically due to infinite or very deep recursion. Each thread has its own stack (~512 KB). `OutOfMemoryError` occurs when the heap runs out of space and GC cannot reclaim enough memory. The heap is shared across all threads and is much larger.

Stack issues are almost always caused by recursion bugs. Heap issues are caused by creating too many objects, memory leaks (holding references to unneeded objects), or setting -Xmx too low.

### Q10. [Medium] What are GC roots? Why are they important?

*Hint:* GC roots are the starting points for reachability analysis.

**Answer:** GC roots are the starting points from which the garbage collector traces object reachability. They include: (1) local variables and parameters on thread stacks, (2) static variables, (3) active thread objects, (4) JNI references. Any object reachable from a GC root (directly or through a chain of references) is considered alive. Objects not reachable from any GC root are garbage.

The GC does not check every object individually. It starts from GC roots and follows all references. Anything not found during this traversal is unreachable and eligible for collection.

### Q11. [Hard] Explain generational garbage collection. Why is it more efficient than collecting the entire heap?

*Hint:* Most objects die young (weak generational hypothesis).

**Answer:** Generational GC divides the heap into Young Generation (Eden + Survivor spaces) and Old Generation. New objects go to Eden. When Eden fills, Minor GC runs -- it is fast because the young generation is small and most objects are already dead. Surviving objects move to Survivor spaces, then eventually to Old Generation. Old Generation is collected less frequently (Major GC), which is slower. This is efficient because of the **weak generational hypothesis**: most objects die young, so collecting the young generation frequently reclaims most garbage with minimal effort.

Without generations, every GC would scan the entire heap (expensive). With generations, Minor GC scans only a small portion (young gen) and collects most garbage. Major GC is rare because long-lived objects in old gen are genuinely needed.

### Q12. [Hard] What is an 'island of isolation' in garbage collection? Give an example.

*Hint:* Think about circular references where no external reference exists.

**Answer:** An island of isolation occurs when a group of objects reference each other (circular references) but no external GC root can reach any of them. All objects in the group are eligible for GC despite having non-null references, because the reachability from GC roots is what matters, not the reference count. Example: Object A references B, B references A, but both original references (from local variables) are set to null. The A-B pair forms an isolated island that GC will collect.

This is why Java does not use reference counting for GC (like Python does). Reference counting would not detect circular references. Java's mark-and-sweep traces from GC roots, correctly identifying unreachable circular structures.

### Q13. [Hard] Name three common causes of memory leaks in Java and how to prevent each.

*Hint:* Think about static collections, unclosed resources, and inner classes.

**Answer:** (1) **Static collections** that grow without bound: objects added to a static List/Map are never collected. Fix: use bounded caches (LRU), clear collections, or use WeakHashMap. (2) **Unclosed resources**: streams, connections, and readers hold native handles. Fix: use try-with-resources. (3) **Anonymous/inner classes** holding implicit references to outer class: the inner class keeps the outer instance alive. Fix: use static inner classes or lambda expressions (which do not capture 'this' unless needed).

Memory leaks in Java are always about unintended live references preventing GC. The root cause is always code that retains references longer than necessary.

## Mixed Questions

### Q1. [Easy] What is the output?

```java
String s = new String("Hello");
String t = s;
System.out.println(s == t);
```

*Hint:* == compares references for objects.

**Answer:** `true`

`t = s` copies the reference. Both s and t point to the same String object on the heap. `==` compares references, and they are the same. So true.

### Q2. [Easy] What is the output?

```java
String s = new String("Hello");
String t = new String("Hello");
System.out.println(s == t);
System.out.println(s.equals(t));
```

*Hint:* Each 'new' creates a different object on the heap.

**Answer:** `false`
`true`

Two separate objects are created on the heap. `==` compares references (different objects, so false). `equals()` compares content ("Hello" equals "Hello", so true).

### Q3. [Medium] How many objects are eligible for GC at the marked line?

```java
class Node {
    Node next;
    Node(Node next) { this.next = next; }
}

Node a = new Node(null);  // node1
Node b = new Node(a);     // node2 -> node1
Node c = new Node(b);     // node3 -> node2 -> node1
a = null;
b = null;
// <-- How many eligible here?
```

*Hint:* Trace the reference chain from c.

**Answer:** `0`

c -> node3 -> node2 -> node1. Even though a and b are null, c still holds a reference chain to all three objects. All are reachable from c (a GC root via local variable). None are GC eligible.

### Q4. [Medium] What happens when this code runs?

```java
java.util.List<int[]> list = new java.util.ArrayList<>();
while (true) {
    list.add(new int[1_000_000]);
}
```

*Hint:* The list keeps growing and objects are never removed.

**Answer:** `OutOfMemoryError: Java heap space`

Each iteration adds a ~4 MB int array to the list. The list holds references to all arrays, preventing GC from collecting any. Eventually the heap fills up and `OutOfMemoryError` is thrown.

### Q5. [Medium] What is the output?

```java
void method() {
    int x = 10;
    int y = 20;
    String s = new String("Hello");
}
// After method() returns, how many items are removed from the stack?
```

*Hint:* Each local variable occupies a slot in the method's stack frame.

**Answer:** The entire stack frame (containing x, y, and s) is popped. 3 local variables are removed from the stack. The String object on the heap becomes GC eligible.

When `method()` returns, its entire stack frame is destroyed. Primitives x and y are gone. Reference s is gone. The String object on the heap now has no references and becomes GC eligible.

### Q6. [Hard] How many objects are GC eligible at the marked line?

```java
class Node { Node next; }

Node a = new Node(); // n1
Node b = new Node(); // n2
a.next = b;
b.next = a;
a = null;
b = null;
// <-- How many eligible?
```

*Hint:* This is an island of isolation. No external reference can reach either node.

**Answer:** `2` (both n1 and n2)

n1 and n2 reference each other (circular), but after setting a and b to null, no GC root can reach either node. This is an island of isolation. Both objects are GC eligible despite having non-null references to each other.

### Q7. [Hard] What is the output?

```java
import java.lang.ref.SoftReference;

SoftReference soft = new SoftReference<>(new String("Cache"));
System.out.println(soft.get());
System.gc();
System.out.println(soft.get());
```

*Hint:* Soft references are only collected when memory is low.

**Answer:** `Cache`
`Cache` (most likely)

Soft references are retained as long as memory is sufficient. `System.gc()` typically does not collect softly-referenced objects unless the JVM is under memory pressure. In normal conditions, `soft.get()` still returns "Cache" after GC.

### Q8. [Easy] Where are static variables stored in JVM memory?

*Hint:* Think about class-level data.

**Answer:** Static variables are stored in the **Method Area** (Metaspace in Java 8+). Since Metaspace uses native memory (not heap), static variables are not subject to heap GC. They live for the entire lifetime of the class, which is typically the entire program execution.

The Method Area/Metaspace stores class metadata including static fields, method bytecode, and the constant pool. This is why static variables persist across all instances and method calls.

### Q9. [Medium] What is the difference between `-Xms` and `-Xmx` JVM flags?

*Hint:* One is initial, one is maximum.

**Answer:** `-Xms` sets the **initial** heap size (the heap starts at this size). `-Xmx` sets the **maximum** heap size (the heap cannot grow beyond this). For example, `-Xms256m -Xmx1024m` means the heap starts at 256 MB and can grow up to 1024 MB. Setting both to the same value avoids heap resize overhead in production.

If -Xms is too low, the JVM frequently resizes the heap (expensive). If -Xmx is too low, you get OutOfMemoryError. In production, both are typically set to the same value based on the application's memory profile.

### Q10. [Hard] Why is `finalize()` deprecated? What should you use instead?

*Hint:* Think about reliability and performance.

**Answer:** `finalize()` is deprecated (Java 9+) because: (1) No guarantee it will ever run. (2) No guarantee of timing -- it may run long after the object is GC eligible. (3) It delays GC by one cycle (the object must survive an extra GC to be finalized). (4) Performance overhead from the finalization queue. Use `AutoCloseable` with try-with-resources for deterministic cleanup. For cleanup of non-resource objects, use `java.lang.ref.Cleaner` (Java 9+).

finalize() was a design mistake. It gives a false sense of safety because developers assume it will reliably clean up resources. In practice, it often does not run until the JVM shuts down (or never). try-with-resources guarantees cleanup at a predictable point.

## Multiple Choice Questions

### Q1. [Easy] Where are objects created with 'new' stored in JVM memory?

A. Stack
B. Heap
C. Method Area
D. Program Counter

**Answer:** B

**B is correct.** All objects created with `new` are allocated on the heap. The stack stores only local variables (primitives and references to heap objects).

### Q2. [Easy] What happens when the stack runs out of space?

A. OutOfMemoryError
B. StackOverflowError
C. NullPointerException
D. The JVM resizes the stack

**Answer:** B

**B is correct.** `StackOverflowError` occurs when the call stack exceeds its limit, typically due to infinite recursion. The stack has a fixed size per thread.

### Q3. [Easy] What does garbage collection do?

A. Deletes unused source code files
B. Automatically reclaims memory from unreachable objects
C. Compresses files on disk
D. Removes unused import statements

**Answer:** B

**B is correct.** Garbage collection identifies objects on the heap that are no longer reachable from any GC root and reclaims their memory automatically.

### Q4. [Easy] What makes an object eligible for garbage collection?

A. Calling delete on the object
B. Setting the reference to 0
C. When no live references point to it
D. When the object is more than 5 minutes old

**Answer:** C

**C is correct.** An object becomes GC eligible when no live reference chain from any GC root can reach it. Java does not have a `delete` operator.

### Q5. [Easy] Where are static variables stored?

A. Stack
B. Heap
C. Method Area (Metaspace)
D. Native Method Stack

**Answer:** C

**C is correct.** Static variables are stored in the Method Area (Metaspace since Java 8). They belong to the class, not to instances.

### Q6. [Medium] What does -Xmx512m mean?

A. Set stack size to 512 MB
B. Set maximum heap size to 512 MB
C. Set metaspace to 512 MB
D. Set minimum heap size to 512 MB

**Answer:** B

**B is correct.** `-Xmx` sets the maximum heap size. `-Xms` sets the initial/minimum heap size. `-Xss` sets the stack size per thread.

### Q7. [Medium] What is the difference between Young Generation and Old Generation?

A. Young stores classes, Old stores objects
B. Young stores new objects; Old stores long-lived objects that survived multiple GC cycles
C. Young uses more memory than Old
D. There is no difference

**Answer:** B

**B is correct.** New objects go to Young Generation (Eden). Objects that survive multiple Minor GC cycles are promoted to Old Generation (Tenured). This exploits the observation that most objects die young.

### Q8. [Medium] What does System.gc() do?

A. Forces immediate garbage collection
B. Requests garbage collection (JVM may ignore it)
C. Deletes all objects on the heap
D. Crashes the JVM

**Answer:** B

**B is correct.** `System.gc()` is a request, not a command. The JVM is free to ignore it. Never rely on it for correctness in production code.

### Q9. [Medium] Which reference type is collected only when memory is low?

A. Strong
B. Weak
C. Soft
D. Phantom

**Answer:** C

**C is correct.** Soft references are kept as long as memory is sufficient. They are collected only when the JVM needs memory, making them ideal for caches.

### Q10. [Medium] Why is finalize() deprecated?

A. It runs too frequently
B. It is unreliable: no guarantee of execution timing, delays GC, performance overhead
C. It was replaced by delete()
D. It causes compilation errors

**Answer:** B

**B is correct.** finalize() may never run, has unpredictable timing, delays GC by one cycle, and adds overhead. Use try-with-resources (AutoCloseable) instead.

### Q11. [Hard] What is an 'island of isolation' in GC?

A. An object with no fields
B. A group of objects with circular references but no external references from GC roots
C. A single isolated thread
D. An object stored in static memory

**Answer:** B

**B is correct.** When objects reference each other in a cycle but no GC root can reach any of them, they form an island of isolation. All are GC eligible despite having non-null references.

### Q12. [Hard] Which of these is NOT a GC root?

A. Local variables on thread stacks
B. Static variables
C. Objects in the young generation
D. Active thread objects

**Answer:** C

**C is correct.** Objects in the young generation are not GC roots -- they are the objects BEING evaluated for collection. GC roots are references FROM stacks, static fields, and active threads TO objects.

### Q13. [Hard] What happens when both a try block and close() throw exceptions in try-with-resources, from a memory perspective?

A. The close exception is lost, causing a resource leak
B. Both exceptions are preserved (suppressed exception mechanism), and the resource is properly cleaned up
C. The JVM crashes
D. The try exception is lost

**Answer:** B

**B is correct.** try-with-resources guarantees that close() is called. If both throw exceptions, the close() exception is added as a suppressed exception. The resource is properly released, preventing memory/resource leaks.

### Q14. [Hard] What replaced PermGen in Java 8?

A. Heap
B. Stack
C. Metaspace
D. Native Memory Pool

**Answer:** C

**C is correct.** Java 8 replaced PermGen (Permanent Generation, part of the heap) with Metaspace, which uses native memory. This eliminated the common 'java.lang.OutOfMemoryError: PermGen space' error because Metaspace can grow dynamically.

### Q15. [Easy] Each thread in Java has its own:

A. Heap
B. Stack
C. Method Area
D. String Pool

**Answer:** B

**B is correct.** Each thread has its own stack (and PC register). The heap, method area, and string pool are shared across all threads.

## Coding Challenges

### Challenge 1. Object Counter

**Difficulty:** Easy

Create a class that tracks how many instances have been created using a static counter. Also track how many instances are still alive by decrementing the counter when an object becomes GC eligible (hint: use a static counter and demonstrate with nullification + System.gc()).

**Constraints:**

- Use static variables. Demonstrate the difference between creation count and live reference count.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Created: 3
After nullifying 2: alive references = 1
After GC: creation count still = 3 (static counter does not decrease)
```

**Solution:**

```java
public class ObjectCounter {
    private static int creationCount = 0;
    private String name;

    ObjectCounter(String name) {
        this.name = name;
        creationCount++;
        System.out.println("Created: " + name + " (total: " + creationCount + ")");
    }

    public static void main(String[] args) {
        ObjectCounter a = new ObjectCounter("A");
        ObjectCounter b = new ObjectCounter("B");
        ObjectCounter c = new ObjectCounter("C");
        System.out.println("Creation count: " + creationCount);

        a = null;
        b = null;
        System.gc();
        System.out.println("After nullifying A and B:");
        System.out.println("Creation count (static): " + creationCount);
        System.out.println("Only C is still reachable: " + c.name);
    }
}
```

### Challenge 2. GC Eligibility Analyzer

**Difficulty:** Medium

Write a program that creates several objects with various reference patterns (null, reassignment, scope exit, circular). For each case, print how many objects are GC eligible and explain why.

**Constraints:**

- Cover all four eligibility cases. Use comments to explain.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Case 1 (null): 1 object eligible
Case 2 (reassign): 1 object eligible
Case 3 (scope): 1 object eligible
Case 4 (circular): 2 objects eligible
```

**Solution:**

```java
public class GCAnalyzer {
    static class Node { Node next; String name;
        Node(String n) { name = n; }
    }

    public static void main(String[] args) {
        // Case 1: Reference set to null
        Node n1 = new Node("A");
        n1 = null; // A eligible
        System.out.println("Case 1 (null): 1 eligible");

        // Case 2: Reference reassigned
        Node n2 = new Node("B");
        n2 = new Node("C"); // B eligible, C alive
        System.out.println("Case 2 (reassign): 1 eligible (B)");

        // Case 3: Scope exit
        createAndReturn();
        System.out.println("Case 3 (scope): 1 eligible (D)");

        // Case 4: Circular with no external reference
        Node e = new Node("E");
        Node f = new Node("F");
        e.next = f;
        f.next = e;
        e = null;
        f = null; // E-F island of isolation
        System.out.println("Case 4 (circular): 2 eligible (E, F)");

        System.gc();
    }

    static void createAndReturn() {
        Node d = new Node("D");
    }
}
```

### Challenge 3. Memory Monitor

**Difficulty:** Medium

Write a program that monitors heap memory usage before and after allocating a large number of objects, then after GC. Display used/free/total memory in MB at each step.

**Constraints:**

- Use Runtime.getRuntime() methods. Create an array of objects and then null it before GC.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Step 1: Used=1MB, Free=14MB, Total=15MB
Step 2 (after alloc): Used=25MB, Free=15MB, Total=40MB
Step 3 (after GC): Used=1MB, Free=14MB, Total=15MB
```

**Solution:**

```java
public class MemoryMonitor {
    static void printMem(String label) {
        Runtime rt = Runtime.getRuntime();
        long total = rt.totalMemory() / (1024 * 1024);
        long free = rt.freeMemory() / (1024 * 1024);
        long used = total - free;
        System.out.printf("%s: Used=%dMB, Free=%dMB, Total=%dMB%n", label, used, free, total);
    }

    public static void main(String[] args) {
        printMem("Initial");

        Object[] data = new Object[500_000];
        for (int i = 0; i < data.length; i++) {
            data[i] = new byte[50];
        }
        printMem("After allocation");

        data = null;
        System.gc();
        printMem("After GC");
    }
}
```

### Challenge 4. Weak Reference Cache

**Difficulty:** Hard

Implement a simple cache using WeakReferences. The cache should store values that can be garbage collected when memory is needed. Demonstrate that cached values disappear after GC when no strong references exist.

**Constraints:**

- Use java.lang.ref.WeakReference. Demonstrate the difference between having and not having a strong reference.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Cache hit: value1
After GC (strong ref exists): value1
After GC (strong ref removed): null
```

**Solution:**

```java
import java.lang.ref.WeakReference;
import java.util.HashMap;
import java.util.Map;

public class WeakCache<K, V> {
    private final Map<K, WeakReference<V>> cache = new HashMap<>();

    public void put(K key, V value) {
        cache.put(key, new WeakReference<>(value));
    }

    public V get(K key) {
        WeakReference<V> ref = cache.get(key);
        return (ref != null) ? ref.get() : null;
    }

    public static void main(String[] args) {
        WeakCache<String, String> cache = new WeakCache<>();
        String value = new String("ImportantData");
        cache.put("key1", value);

        System.out.println("Before GC: " + cache.get("key1"));
        System.gc();
        System.out.println("After GC (strong ref alive): " + cache.get("key1"));

        value = null; // remove strong reference
        System.gc();
        System.out.println("After GC (no strong ref): " + cache.get("key1"));
    }
}
```

### Challenge 5. Memory Leak Detector

**Difficulty:** Hard

Create a program that demonstrates a memory leak using a static collection, monitors memory growth over iterations, and then fixes the leak. Show memory usage before and after the fix.

**Constraints:**

- Use a static List to create the leak. Use Runtime to monitor memory. Fix by clearing or using bounded collection.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Iteration 100: used=5MB
Iteration 200: used=10MB (GROWING - LEAK)
After fix: used=1MB (STABLE)
```

**Solution:**

```java
import java.util.ArrayList;
import java.util.List;

public class LeakDetector {
    private static final List<byte[]> leakyCache = new ArrayList<>();

    static long usedMB() {
        Runtime rt = Runtime.getRuntime();
        return (rt.totalMemory() - rt.freeMemory()) / (1024 * 1024);
    }

    public static void main(String[] args) {
        System.out.println("=== Demonstrating Memory Leak ===");
        for (int i = 1; i <= 500; i++) {
            leakyCache.add(new byte[10_000]); // ~10KB per entry
            if (i % 100 == 0) {
                System.gc();
                System.out.println("Iteration " + i + ": used=" + usedMB() + "MB, cache=" + leakyCache.size());
            }
        }

        System.out.println("\n=== Fixing the Leak ===");
        leakyCache.clear();
        System.gc();
        System.out.println("After clear: used=" + usedMB() + "MB, cache=" + leakyCache.size());
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/java-memory-and-garbage-collection/*
