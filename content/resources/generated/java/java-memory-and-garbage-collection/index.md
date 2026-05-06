---
title: "Java Memory Model and Garbage Collection - Stack vs Heap, GC, JVM Memory | Modern Age Coders"
description: "Learn Java memory management including JVM memory areas (stack, heap, metaspace), object creation, garbage collection (mark-and-sweep, generational GC), strong/weak/soft references, memory leaks, and JVM flags. Includes 55+ practice questions."
slug: java-memory-and-garbage-collection
canonical: https://learn.modernagecoders.com/resources/java/java-memory-and-garbage-collection/
category: "Java"
keywords: ["java memory model", "java garbage collection", "stack vs heap java", "java memory management", "java JVM memory", "java GC", "java heap", "java stack", "java memory leak", "java Xms Xmx"]
---
# Java Memory Model and Garbage Collection

**Difficulty:** Advanced  
**Reading time:** 45 min  
**Chapter:** 24  
**Practice questions:** 55

## What Is the Java Memory Model?

The **Java Memory Model** defines how the Java Virtual Machine (JVM) organizes memory for a running program. Every variable, object, method call, and class definition is stored in a specific memory area. Understanding where things live in memory is fundamental to writing efficient, bug-free Java code.

```java
public class Main {
    static int classVar = 10;     // Method Area (Metaspace)

    public static void main(String[] args) {
        int localVar = 20;         // Stack
        String name = new String("Arjun"); // 'name' on Stack, String object on Heap
        int[] arr = new int[5];    // 'arr' on Stack, array object on Heap
    }
}
```

**Garbage Collection** (GC) is Java's automatic memory management system. When objects on the heap are no longer reachable by any reference, the garbage collector reclaims their memory. Unlike C/C++, Java developers do not manually allocate and free memory -- the JVM handles it.

### Why This Matters

In languages like C, forgetting to free memory causes **memory leaks**. Freeing memory too early causes **dangling pointers** (accessing freed memory). Java eliminates both problems through garbage collection, but understanding the memory model is still critical for writing performant code and avoiding Java-specific memory issues.

## Why Is Understanding Memory and GC Important?

### 1. Writing Performant Applications

Every object you create consumes heap memory. If Arjun's application creates millions of temporary objects in a loop, GC will run frequently, causing pauses ("stop-the-world" events). Understanding object lifecycle helps you write code that minimizes GC pressure.

### 2. Debugging OutOfMemoryError

When the heap is full and GC cannot reclaim enough space, the JVM throws `OutOfMemoryError`. This crashes the application. Understanding heap sizing (-Xms, -Xmx), object references, and common memory leak patterns is essential for diagnosing and fixing these issues in production.

### 3. Understanding Variable Scope and Lifetime

Local variables live on the stack and die when the method returns. Objects live on the heap and die when no references point to them. This distinction explains why returning an object from a method works (heap survives), but a local variable does not persist (stack is cleaned up).

### 4. Interview and Placement Significance

Stack vs heap, garbage collection, and memory leaks are top interview questions at companies like Amazon, Google, Goldman Sachs, and DE Shaw. Interviewers test whether candidates understand where objects are stored, when they become eligible for GC, and how to avoid memory leaks.

### 5. System Design and Production Debugging

When Meera's production microservice starts consuming 8 GB of heap and the response times spike, she needs to understand GC logs, heap dumps, and reference types to diagnose the issue. This knowledge separates junior developers from senior ones.

## Detailed Explanation

### 1. JVM Memory Areas

The JVM divides memory into several areas, each serving a specific purpose:

#### Stack Memory

Each thread has its own stack. The stack stores:

- Local variables (primitives and object references)
- Method call frames (parameters, return address)
- Partial results

```java
public static void main(String[] args) {
    int x = 10;              // x is on main's stack frame
    String name = "Arjun";   // name (reference) is on stack, String is on heap
    calculate(x);            // new stack frame for calculate()
}

static int calculate(int n) {
    int result = n * 2;      // n and result on calculate's stack frame
    return result;            // frame destroyed after return
}
```

Stack memory is **LIFO** (Last In, First Out). When a method is called, a new frame is pushed. When it returns, the frame is popped. Stack memory is automatically managed -- no garbage collection needed. Stack size is limited (default ~512 KB per thread). Exceeding it causes `StackOverflowError` (often from infinite recursion).

#### Heap Memory

The heap is shared across all threads. It stores:

- All objects (created with `new`)
- Arrays (arrays are objects in Java)
- Instance variables of objects
- String pool (interned strings)

```java
// All of these create objects on the heap
Student s = new Student("Arjun", 85);
int[] arr = new int[100];
ArrayList list = new ArrayList<>();
String str = new String("Hello");
```

Heap memory is managed by the garbage collector. Objects live on the heap until no references point to them. Heap size is configurable with -Xms (initial) and -Xmx (maximum) JVM flags.

#### Method Area (Metaspace)

Stores class-level data:

- Class metadata (class name, methods, fields)
- Static variables
- Constant pool (compile-time constants)
- Method bytecode

Since Java 8, the Method Area is implemented as **Metaspace**, which uses native memory (not heap memory). In earlier versions, it was called **PermGen** (Permanent Generation) and was part of the heap.

#### Program Counter Register

Each thread has its own PC register that stores the address of the current instruction being executed. It is small and managed entirely by the JVM.

#### Native Method Stack

Stores data for native (non-Java) method calls, such as calls to C libraries via JNI (Java Native Interface).

### 2. Stack vs Heap: The Key Distinction

FeatureStackHeapWhat is storedPrimitives, object references, method framesObjects, arrays, instance variablesLifetimeUntil the method returnsUntil no references exist (GC eligible)Access speedVery fast (LIFO, thread-local)Slower (shared, GC pauses)SizeSmall (~512 KB per thread)Large (configurable, can be GBs)Thread safetyThread-safe (each thread has its own)Shared across threads (needs synchronization)Memory managementAutomatic (frame pop on method return)Garbage collectionError on overflowStackOverflowErrorOutOfMemoryError

### 3. Object Creation in Memory

When you write `Student s = new Student("Arjun", 85);`, here is exactly what happens:

```java
Student s = new Student("Arjun", 85);

// Step 1: JVM checks if Student class is loaded. If not, loads it into Metaspace.
// Step 2: Allocates memory on the HEAP for the new Student object.
// Step 3: Initializes instance variables (name, marks) with values.
// Step 4: Calls the constructor.
// Step 5: Returns the memory address (reference) of the object.
// Step 6: Stores the reference 's' on the STACK (local variable).
```

The reference variable `s` is on the stack. The actual Student object (with its fields) is on the heap. If `s` goes out of scope (method returns), the reference is removed from the stack, and if no other references point to the object, it becomes eligible for garbage collection.

### 4. Garbage Collection: How It Works

Garbage collection is the process of identifying and removing objects that are no longer reachable by any live reference. The JVM does this automatically.

#### When Does an Object Become Eligible for GC?

```java
// Case 1: Reference set to null
Student s = new Student("Arjun", 85);
s = null;  // Object now has no reference -> GC eligible

// Case 2: Reference reassigned
Student s = new Student("Arjun", 85);
s = new Student("Priya", 92); // First object has no reference -> GC eligible

// Case 3: Object created inside a method (local scope)
void createStudent() {
    Student s = new Student("Vikram", 78);
} // s goes out of scope, object has no reference -> GC eligible

// Case 4: Island of isolation (circular references with no external reference)
class Node {
    Node next;
}
Node a = new Node();
Node b = new Node();
a.next = b;
b.next = a;
a = null;
b = null;
// Both nodes reference each other but neither is reachable
// from any live thread -> both are GC eligible
```

#### Mark and Sweep Algorithm

The basic GC algorithm works in two phases:

1. **Mark Phase**: Starting from GC roots (local variables on stacks, static variables, active threads), the GC traverses all reachable object references and marks them as "alive".
2. **Sweep Phase**: All unmarked objects are considered garbage and their memory is reclaimed.

**GC Roots** include: local variables and parameters on thread stacks, static variables, active threads, and JNI references.

#### Generational Garbage Collection

Most objects die young (temporary variables, intermediate results). The JVM exploits this observation by dividing the heap into generations:

```
Heap Memory:
+---------------------------+-------------------+
|      Young Generation     |  Old Generation   |
+--------+--------+---------+                   |
|  Eden  |  S0    |  S1     |   (Tenured)       |
+--------+--------+---------+-------------------+
```

- **Young Generation**: New objects are allocated in **Eden** space. When Eden fills up, a **Minor GC** runs. Surviving objects move to Survivor spaces (S0/S1). Objects that survive multiple Minor GCs are promoted to Old Generation.
- **Old Generation (Tenured)**: Long-lived objects. Collected less frequently by **Major GC** (or Full GC), which is more expensive.

Minor GC is fast (young generation is small). Major GC is slow (old generation is large). Tuning GC involves balancing these generations.

### 5. Reference Types

Java provides four types of references, each with different GC behavior:

```java
import java.lang.ref.*;

// Strong reference (default) - object NOT collected while reference exists
Student s = new Student("Arjun", 85);

// Weak reference - collected at next GC cycle
WeakReference weak = new WeakReference<>(new Student("Priya", 90));
// After GC: weak.get() may return null

// Soft reference - collected only when memory is low
SoftReference soft = new SoftReference<>(new Student("Vikram", 80));
// Kept as long as memory is available, collected before OutOfMemoryError

// Phantom reference - enqueued in ReferenceQueue after finalization
ReferenceQueue queue = new ReferenceQueue<>();
PhantomReference phantom = new PhantomReference<>(new Student("Sneha", 88), queue);
// phantom.get() always returns null; used for cleanup tracking
```

Reference TypeGC BehaviorUse CaseStrongNever collected while reachableNormal object referencesSoftCollected when memory is lowCaches (memory-sensitive)WeakCollected at next GCWeakHashMap, canonicalizing mapsPhantomEnqueued after finalizationResource cleanup, leak detection

### 6. System.gc() and finalize()

```java
// System.gc() -- requests GC (not guaranteed)
System.gc(); // Hint to JVM to run GC. JVM may ignore it.

// finalize() -- deprecated since Java 9
@Override
protected void finalize() throws Throwable {
    // Cleanup code -- DO NOT rely on this
    super.finalize();
}
```

`System.gc()` is a **request**, not a command. The JVM may choose to ignore it. Never rely on it in production code. `finalize()` was intended for cleanup before GC, but it is deprecated because: (1) it delays GC (object survives one extra cycle), (2) no guarantee when or if it runs, (3) performance overhead. Use try-with-resources instead.

### 7. Memory Leaks in Java

Even with garbage collection, Java programs can leak memory. A memory leak occurs when objects are no longer needed but still have live references, preventing GC from collecting them:

```java
// Leak 1: Static collections that grow forever
class Cache {
    private static final List<byte[]> data = new ArrayList<>();
    
    static void addData(byte[] bytes) {
        data.add(bytes); // Never removed -> grows until OOM
    }
}

// Leak 2: Unclosed resources
void readFile() {
    BufferedReader br = new BufferedReader(new FileReader("data.txt"));
    // If exception occurs before close(), resource leaks
    br.close();
}

// Leak 3: Inner class holding reference to outer class
class Outer {
    byte[] largeData = new byte[10_000_000]; // 10 MB
    
    Runnable getTask() {
        return new Runnable() { // anonymous inner class holds reference to Outer.this
            public void run() {
                System.out.println("Task");
            }
        };
        // Even if Outer is no longer needed, Runnable keeps it alive
    }
}

// Leak 4: Listeners/callbacks not deregistered
button.addActionListener(event -> processClick());
// If button lives longer than the listener owner, owner cannot be GC'd
```

### 8. JVM Memory Flags

```java
// Common JVM memory flags (passed when starting the JVM)
java -Xms256m -Xmx1024m -XX:MetaspaceSize=128m MyApp

// -Xms: Initial heap size (256 MB)
// -Xmx: Maximum heap size (1024 MB)
// -XX:MetaspaceSize: Initial metaspace size
// -XX:MaxMetaspaceSize: Maximum metaspace size
// -Xss: Stack size per thread (e.g., -Xss512k)
// -XX:+PrintGCDetails: Print GC details (for debugging)
// -XX:+UseG1GC: Use G1 garbage collector
```

Setting -Xms and -Xmx to the same value avoids heap resizing overhead. In production, heap size depends on the application's memory profile -- typically 2-4 GB for microservices, more for data-intensive applications.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/java-memory-and-garbage-collection/*
*Practice questions: https://learn.modernagecoders.com/resources/java/java-memory-and-garbage-collection/practice/*
