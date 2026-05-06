---
title: "Multithreading in Java - Thread, Runnable, Synchronization, Deadlock | Modern Age Coders"
description: "Learn Java multithreading including Thread class, Runnable interface, thread lifecycle, synchronization, deadlock, volatile keyword, inter-thread communication, and Executor framework. Includes 58+ practice questions with interview-focused content."
slug: multithreading-basics
canonical: https://learn.modernagecoders.com/resources/java/multithreading-basics
category: "Java"
keywords: ["java multithreading", "java thread", "synchronized java", "runnable vs thread java", "java thread lifecycle", "java deadlock", "java volatile", "java thread pool", "java concurrency", "java inter-thread communication"]
---
# Multithreading Basics

**Difficulty:** Advanced  
**Reading time:** 50 min  
**Chapter:** 22  
**Practice questions:** 58

## What Is Multithreading?

A **thread** is the smallest unit of execution within a process. A Java program starts with one thread -- the `main` thread. **Multithreading** means running multiple threads concurrently within the same program, allowing different parts of your code to execute simultaneously.

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Current thread: " + Thread.currentThread().getName());
        // Output: Current thread: main
    }
}
```

### Thread vs Process

A **process** is an independent program running in its own memory space. A **thread** is a lightweight unit of execution within a process. Key differences:

- **Memory**: Processes have separate memory spaces. Threads within the same process share the same heap memory but have their own stack.
- **Creation cost**: Creating a thread is cheaper than creating a process.
- **Communication**: Threads can communicate directly through shared memory. Processes need inter-process communication (IPC) mechanisms.
- **Isolation**: A crash in one process does not affect others. A crash in one thread can bring down the entire process.

When Arjun's web server handles 100 users simultaneously, it does not create 100 separate processes. It creates 100 threads within one process, sharing the same application code and data.

## Why Is Multithreading Important?

### 1. Better Utilization of CPU Resources

Modern CPUs have multiple cores. A single-threaded program uses only one core while the rest sit idle. Multithreading allows your program to use all available cores. If Priya's data processing application runs 4 threads on a 4-core CPU, it can process data up to 4 times faster than a single-threaded version.

### 2. Responsive User Interfaces

In a GUI application, if a heavy computation runs on the main thread, the interface freezes. By running the computation on a separate thread, the UI remains responsive. This is why Android mandates that network calls happen on background threads.

### 3. Server-Side Scalability

Web servers use threads to handle multiple client requests simultaneously. When Vikram's Spring Boot application receives 1000 requests per second, each request is handled by a separate thread from a thread pool. Without multithreading, the server would process requests one at a time.

### 4. Real-World Applications

Multithreading is everywhere: web servers (Tomcat uses thread pools), databases (concurrent query processing), games (rendering + physics + AI on separate threads), download managers (parallel file downloads), and IDEs (code compilation while you type).

### 5. Interview and Placement Significance

Multithreading is one of the most asked topics in Java interviews at companies like Amazon, Flipkart, Goldman Sachs, and Morgan Stanley. Questions on thread lifecycle, synchronization, deadlock, and the volatile keyword appear regularly.

## Detailed Explanation

### 1. Creating Threads: Extending the Thread Class

The simplest way to create a thread is to extend the `Thread` class and override its `run()` method:

```java
class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(getName() + ": count " + i);
            try {
                Thread.sleep(500); // pause for 500ms
            } catch (InterruptedException e) {
                System.out.println("Thread interrupted");
            }
        }
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        MyThread t2 = new MyThread();
        t1.setName("Thread-A");
        t2.setName("Thread-B");
        t1.start(); // creates a new thread and calls run()
        t2.start();
        System.out.println("Main thread continues...");
    }
}
```

Critical point: You must call `start()`, not `run()`. Calling `run()` directly executes the method on the current thread (no new thread is created). `start()` creates a new thread and then invokes `run()` on that new thread.

### 2. Creating Threads: Implementing Runnable

The preferred approach is to implement the `Runnable` interface:

```java
class MyTask implements Runnable {
    private String taskName;

    public MyTask(String name) {
        this.taskName = name;
    }

    @Override
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(taskName + ": step " + i);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Thread t1 = new Thread(new MyTask("Download"));
        Thread t2 = new Thread(new MyTask("Upload"));
        t1.start();
        t2.start();
    }
}
```

Why prefer Runnable over extending Thread? (1) Java allows only single inheritance -- if you extend Thread, you cannot extend another class. (2) Runnable separates the task from the thread mechanism, following better design. (3) Runnable tasks can be submitted to thread pools (Executor framework).

### 3. Thread Lifecycle

A thread goes through five states during its lifetime:

```
NEW  ->  RUNNABLE  ->  RUNNING  ->  TERMINATED
                         |    ^  
                         v    |
                       BLOCKED/WAITING
```

- **NEW**: Thread object created but `start()` not yet called.
- **RUNNABLE**: After `start()` is called, the thread is ready to run but waiting for CPU time.
- **RUNNING**: The thread scheduler has assigned CPU time and the thread is executing.
- **BLOCKED/WAITING**: The thread is alive but not eligible to run. This happens when waiting for a lock (BLOCKED), calling `wait()` (WAITING), or calling `sleep()`/`join()` with timeout (TIMED_WAITING).
- **TERMINATED**: The `run()` method has completed (or an unhandled exception occurred). The thread cannot be restarted.

### 4. Important Thread Methods

```java
Thread t = new Thread(() -> {
    System.out.println("Running: " + Thread.currentThread().getName());
});

// Before start
t.setName("Worker-1");           // Set thread name
t.setPriority(Thread.MAX_PRIORITY); // 1 to 10 (default 5)
t.setDaemon(true);               // Daemon thread (ends when main ends)

t.start();                        // Start the thread

// Thread info
System.out.println(t.getName());  // Worker-1
System.out.println(t.isAlive());  // true if not terminated
System.out.println(t.getState()); // NEW, RUNNABLE, etc.

// Static methods (affect current thread)
Thread.sleep(1000);               // Pause current thread for 1 second
Thread.currentThread();           // Get reference to current thread
Thread.yield();                   // Hint to scheduler to give other threads a turn
```

### 5. join() -- Waiting for a Thread to Finish

```java
Thread t = new Thread(() -> {
    try {
        Thread.sleep(2000);
        System.out.println("Thread finished");
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
});

t.start();
System.out.println("Main waiting...");
t.join(); // Main thread blocks here until t finishes
System.out.println("Main continues after thread finished");
```

`join()` makes the calling thread wait until the target thread terminates. This is essential when you need the result of a thread before proceeding. Without `join()`, the main thread would continue immediately without waiting.

### 6. Synchronization

When multiple threads access shared data, race conditions can occur. **Synchronization** ensures that only one thread accesses a critical section at a time:

```java
class BankAccount {
    private int balance = 1000;

    // Synchronized method -- only one thread can execute this at a time
    public synchronized void withdraw(int amount) {
        if (balance >= amount) {
            System.out.println(Thread.currentThread().getName() 
                + " withdrawing " + amount);
            balance -= amount;
            System.out.println("Remaining balance: " + balance);
        } else {
            System.out.println(Thread.currentThread().getName() 
                + ": insufficient funds");
        }
    }

    public synchronized int getBalance() {
        return balance;
    }
}
```

Without `synchronized`, two threads could both check `balance >= amount` simultaneously, both see sufficient funds, and both withdraw -- resulting in a negative balance. The `synchronized` keyword acquires a lock on the object, allowing only one thread to execute any synchronized method on that object at a time.

#### Synchronized Blocks

Instead of synchronizing the entire method, you can synchronize only the critical section:

```java
public void withdraw(int amount) {
    // Non-critical code can run concurrently
    System.out.println("Processing request...");

    synchronized (this) {
        // Only this block is locked
        if (balance >= amount) {
            balance -= amount;
        }
    }
}
```

Synchronized blocks are preferred when only a small part of the method needs protection. They reduce the time a thread holds a lock, improving concurrency.

### 7. The volatile Keyword

`volatile` ensures that reads and writes to a variable go directly to main memory, not a thread-local cache:

```java
class StopFlag {
    private volatile boolean running = true;

    public void stop() {
        running = false; // Immediately visible to all threads
    }

    public void run() {
        while (running) {
            // Do work
        }
        System.out.println("Stopped.");
    }
}
```

Without `volatile`, a thread might cache the value of `running` and never see the update from another thread, causing an infinite loop. `volatile` guarantees visibility but does NOT guarantee atomicity -- it is not a replacement for `synchronized` when you need compound operations (check-then-act).

### 8. Deadlock

A **deadlock** occurs when two or more threads are blocked forever, each waiting for a lock that the other holds:

```java
Object lockA = new Object();
Object lockB = new Object();

// Thread 1: locks A, then tries to lock B
Thread t1 = new Thread(() -> {
    synchronized (lockA) {
        System.out.println("T1: holding lockA");
        try { Thread.sleep(100); } catch (InterruptedException e) {}
        synchronized (lockB) {
            System.out.println("T1: holding lockA and lockB");
        }
    }
});

// Thread 2: locks B, then tries to lock A
Thread t2 = new Thread(() -> {
    synchronized (lockB) {
        System.out.println("T2: holding lockB");
        try { Thread.sleep(100); } catch (InterruptedException e) {}
        synchronized (lockA) {
            System.out.println("T2: holding lockB and lockA");
        }
    }
});

t1.start();
t2.start();
// DEADLOCK: T1 holds A, waits for B. T2 holds B, waits for A.
```

How to avoid deadlocks: (1) Always acquire locks in the same order. (2) Use timeouts with `tryLock()` from `java.util.concurrent.locks`. (3) Minimize the scope and duration of locks. (4) Avoid nested locks when possible.

### 9. Inter-Thread Communication: wait(), notify(), notifyAll()

Threads can communicate using `wait()`, `notify()`, and `notifyAll()`. These methods must be called from within a `synchronized` block:

```java
class SharedBuffer {
    private int data;
    private boolean hasData = false;

    public synchronized void produce(int value) throws InterruptedException {
        while (hasData) {
            wait(); // Release lock and wait until consumed
        }
        data = value;
        hasData = true;
        System.out.println("Produced: " + value);
        notify(); // Wake up waiting consumer
    }

    public synchronized int consume() throws InterruptedException {
        while (!hasData) {
            wait(); // Release lock and wait until produced
        }
        hasData = false;
        System.out.println("Consumed: " + data);
        notify(); // Wake up waiting producer
        return data;
    }
}
```

`wait()` releases the lock and puts the thread to sleep until another thread calls `notify()` on the same object. `notify()` wakes up one waiting thread. `notifyAll()` wakes up all waiting threads. Always use `while` (not `if`) before `wait()` to guard against spurious wakeups.

### 10. Executor Framework

Creating threads manually is inefficient for large-scale applications. The `Executor` framework provides thread pools:

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ExecutorDemo {
    public static void main(String[] args) {
        // Create a pool of 3 threads
        ExecutorService executor = Executors.newFixedThreadPool(3);

        // Submit 5 tasks to the pool
        for (int i = 1; i <= 5; i++) {
            int taskId = i;
            executor.submit(() -> {
                System.out.println("Task " + taskId 
                    + " running on " + Thread.currentThread().getName());
                try { Thread.sleep(1000); } catch (InterruptedException e) {}
            });
        }

        executor.shutdown(); // No new tasks, finish existing ones
        System.out.println("All tasks submitted.");
    }
}
```

A thread pool reuses a fixed number of threads to execute multiple tasks. When a thread finishes one task, it picks up the next from the queue. This avoids the overhead of creating and destroying threads repeatedly. `shutdown()` initiates an orderly shutdown -- no new tasks are accepted, but existing tasks complete.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/multithreading-basics/*
*Practice questions: https://learn.modernagecoders.com/resources/java/multithreading-basics/practice/*
