---
title: "Practice: Multithreading Basics"
description: "58 practice problems for Multithreading Basics in Java"
slug: multithreading-basics-practice
canonical: https://learn.modernagecoders.com/resources/java/multithreading-basics/practice/
category: "Java"
---
# Practice: Multithreading Basics

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```java
public class Main {
    public static void main(String[] args) {
        System.out.println(Thread.currentThread().getName());
    }
}
```

*Hint:* Every Java program starts with a main thread.

**Answer:** `main`

Every Java program starts execution on the `main` thread. `Thread.currentThread()` returns the currently executing thread, and `getName()` returns its name, which is "main" by default.

### Q2. [Easy] What is the output?

```java
Thread t = new Thread(() -> System.out.println("Hello"));
t.run();
System.out.println("World");
```

*Hint:* run() is called directly, not start().

**Answer:** `Hello`
`World`

Calling `run()` directly does NOT create a new thread. It executes the lambda on the main thread. So "Hello" prints first, then "World". The output is deterministic because everything runs on one thread.

### Q3. [Easy] What is the output?

```java
Thread t = new Thread(() -> System.out.println("Background"));
System.out.println("State: " + t.getState());
t.start();
System.out.println("State: " + t.getState());
```

*Hint:* Check the thread state before and after calling start().

**Answer:** `State: NEW`
`State: RUNNABLE`
`Background`
(Output order of last two lines may vary)

Before `start()`, the thread is in `NEW` state. After `start()`, it transitions to `RUNNABLE`. The "Background" output may appear before or after the second state print, depending on thread scheduling.

### Q4. [Easy] What is the output?

```java
Thread t = new Thread(() -> {
    System.out.println(Thread.currentThread().getName());
});
t.setName("Worker");
t.start();
```

*Hint:* setName() changes the thread's name before it starts.

**Answer:** `Worker`

`setName("Worker")` sets the thread's name. When the thread runs, `Thread.currentThread().getName()` returns "Worker".

### Q5. [Easy] What is the output?

```java
Thread t = new Thread(() -> {
    for (int i = 0; i < 3; i++) {
        System.out.println("A");
    }
});
t.start();
t.join();
System.out.println("B");
```

*Hint:* join() makes the main thread wait for t to finish.

**Answer:** `A`
`A`
`A`
`B`

`join()` blocks the main thread until thread `t` finishes. So all three "A" prints complete before "B" is printed. The output order is guaranteed.

### Q6. [Medium] What is the output?

```java
Thread t = new Thread(() -> {
    try {
        Thread.sleep(2000);
    } catch (InterruptedException e) {
        System.out.println("Interrupted!");
    }
    System.out.println("Done");
});
t.start();
t.interrupt();
```

*Hint:* interrupt() wakes a sleeping thread by throwing InterruptedException.

**Answer:** `Interrupted!`
`Done`

The thread starts sleeping for 2 seconds. `interrupt()` immediately wakes it by throwing `InterruptedException`. The catch block prints "Interrupted!", then execution continues to print "Done".

### Q7. [Medium] What is the output?

```java
class MyThread extends Thread {
    public void run() {
        System.out.println("run");
    }
    public void start() {
        System.out.println("start");
    }
}

MyThread t = new MyThread();
t.start();
```

*Hint:* The start() method is overridden. What does the overridden version do?

**Answer:** `start`

The `start()` method is overridden to just print "start" without calling `super.start()`. Since `super.start()` is not called, no new thread is created and `run()` is never invoked. Only "start" is printed.

### Q8. [Medium] What is the output?

```java
Thread t = new Thread(() -> System.out.println("Hello"));
t.start();
t.start(); // start() called twice
```

*Hint:* Can a thread be started more than once?

**Answer:** `Hello`
Then `IllegalThreadStateException` is thrown on the second `start()` call.

A thread can only be started once. The first `start()` succeeds and the thread runs. The second `start()` throws `IllegalThreadStateException` because the thread is already started (or terminated). A terminated thread cannot be restarted.

### Q9. [Medium] What is the output?

```java
synchronized void methodA() {
    System.out.println("A");
    methodB();
}

synchronized void methodB() {
    System.out.println("B");
}

// Called from one thread on the same object
```

*Hint:* Can a thread re-enter a synchronized method on the same object?

**Answer:** `A`
`B`

Java's synchronized locks are **reentrant**. A thread that already holds the lock on an object can enter another synchronized method on the same object without deadlocking. The thread already owns the monitor, so it proceeds.

### Q10. [Hard] What is the output?

```java
Thread t1 = new Thread(() -> {
    synchronized (Main.class) {
        System.out.println("T1 locked");
        try { Thread.sleep(100); } catch (InterruptedException e) {}
        System.out.println("T1 done");
    }
});

Thread t2 = new Thread(() -> {
    synchronized (Main.class) {
        System.out.println("T2 locked");
    }
});

t1.start();
Thread.sleep(20); // give t1 time to acquire lock
t2.start();
t1.join();
t2.join();
```

*Hint:* Both threads synchronize on the same lock (Main.class). T1 acquires it first.

**Answer:** `T1 locked`
`T1 done`
`T2 locked`

T1 starts first and acquires the lock on `Main.class`. T2 starts and blocks waiting for the lock. After T1 finishes and releases the lock, T2 acquires it and prints "T2 locked". The output order is guaranteed because of the synchronization.

### Q11. [Medium] What is the difference between `sleep()` and `wait()`?

*Hint:* Think about lock behavior and where each can be called.

**Answer:** `sleep()` pauses the current thread for a specified time and does NOT release any lock it holds. It can be called anywhere. `wait()` releases the lock on the object and waits until `notify()` or `notifyAll()` is called. It must be called inside a `synchronized` block. `sleep()` is a static method of Thread, while `wait()` is an instance method of Object.

Key distinction: sleep holds the lock (other threads still cannot enter synchronized blocks), wait releases the lock (allowing other threads to acquire it and potentially call notify).

### Q12. [Hard] Why should you prefer implementing Runnable over extending Thread?

*Hint:* Think about Java's inheritance model and the Executor framework.

**Answer:** Three reasons: (1) Java supports only single inheritance. If you extend Thread, you cannot extend any other class. Implementing Runnable preserves your inheritance slot. (2) Runnable separates the task (what to do) from the thread mechanism (how to run it), following better OOP design. (3) Runnable objects can be submitted to ExecutorService thread pools, enabling thread reuse and better resource management.

In practice, extending Thread is only used in simple examples. Production code uses Runnable (or Callable for tasks that return a result) with the Executor framework.

### Q13. [Hard] What is the difference between `synchronized` and `volatile`?

*Hint:* Think about atomicity vs visibility.

**Answer:** `synchronized` provides both mutual exclusion (only one thread executes the critical section) and visibility (changes are flushed to main memory). `volatile` provides only visibility (reads/writes go to main memory) but NOT mutual exclusion. Use `synchronized` for compound operations (check-then-act, read-modify-write). Use `volatile` for simple flags that are written by one thread and read by others.

Example: `count++` requires synchronized because it is read-modify-write. A boolean `running` flag that is set to false by one thread can use volatile because it is a simple write.

### Q14. [Hard] What are four conditions required for a deadlock to occur (Coffman conditions)?

*Hint:* All four must be present simultaneously for deadlock.

**Answer:** (1) **Mutual Exclusion**: At least one resource is held in a non-sharable mode. (2) **Hold and Wait**: A thread holds at least one resource and waits for another. (3) **No Preemption**: Resources cannot be forcibly taken from a thread; it must release them voluntarily. (4) **Circular Wait**: A circular chain of threads exists, each waiting for a resource held by the next. Eliminating any one condition prevents deadlock.

The most practical prevention strategy is eliminating Circular Wait by always acquiring locks in a consistent global order. If all threads acquire LOCK_A before LOCK_B, circular wait cannot occur.

## Mixed Questions

### Q1. [Easy] What is the output?

```java
Thread t = new Thread(() -> System.out.println("Go"));
System.out.println(t.isAlive());
t.start();
System.out.println(t.isAlive());
```

*Hint:* isAlive() returns true if the thread has been started and has not yet terminated.

**Answer:** `false`
`true`
`Go`
(The last two lines may appear in either order)

Before `start()`, `isAlive()` returns false (thread is in NEW state). After `start()`, the thread is alive. The "Go" output and the second isAlive check may interleave.

### Q2. [Easy] What is the output?

```java
Thread t = new Thread(() -> {
    System.out.println("Running");
});
t.setDaemon(true);
t.start();
System.out.println("Main done");
```

*Hint:* Daemon threads are terminated when all non-daemon threads finish.

**Answer:** `Main done`
("Running" may or may not appear)

Daemon threads are background threads. The JVM exits when all non-daemon threads (here, just the main thread) finish. Since the main thread completes almost immediately after starting the daemon thread, the daemon thread may not get a chance to print.

### Q3. [Medium] What is the output?

```java
Thread t1 = new Thread(() -> {
    for (int i = 0; i < 3; i++) System.out.print("A");
});
Thread t2 = new Thread(() -> {
    for (int i = 0; i < 3; i++) System.out.print("B");
});
t1.start();
t1.join();
t2.start();
t2.join();
System.out.println();
```

*Hint:* join() after t1.start() means t1 finishes before t2 starts.

**Answer:** `AAABBB`

`t1.join()` after `t1.start()` makes the main thread wait for t1 to finish. So all three A's print first. Then t2 starts and all three B's print. The order is guaranteed because of the join calls.

### Q4. [Medium] What is the output?

```java
class Shared {
    synchronized void method1() {
        System.out.println("method1 start");
        try { Thread.sleep(1000); } catch (InterruptedException e) {}
        System.out.println("method1 end");
    }
    void method2() {
        System.out.println("method2");
    }
}

Shared obj = new Shared();
new Thread(() -> obj.method1()).start();
Thread.sleep(100);
new Thread(() -> obj.method2()).start();
```

*Hint:* method2() is not synchronized.

**Answer:** `method1 start`
`method2`
`method1 end`

`method1()` is synchronized, so the first thread holds the lock while sleeping. But `method2()` is NOT synchronized, so the second thread can execute it freely without needing the lock. "method2" prints during method1's sleep.

### Q5. [Medium] What is the output?

```java
ExecutorService exec = Executors.newSingleThreadExecutor();
exec.submit(() -> System.out.println("Task 1"));
exec.submit(() -> System.out.println("Task 2"));
exec.submit(() -> System.out.println("Task 3"));
exec.shutdown();
```

*Hint:* A single-thread executor runs tasks sequentially.

**Answer:** `Task 1`
`Task 2`
`Task 3`

`newSingleThreadExecutor()` creates a pool with one thread. Tasks are executed sequentially in the order they were submitted. The output order is guaranteed.

### Q6. [Medium] What is the output?

```java
Thread t = new Thread(() -> {
    System.out.println("Priority: " + Thread.currentThread().getPriority());
});
t.setPriority(8);
t.start();
t.join();
```

*Hint:* setPriority() sets the thread's priority before it starts.

**Answer:** `Priority: 8`

`setPriority(8)` sets the thread's priority to 8 (range is 1-10, default is 5). Inside the thread, `getPriority()` returns 8. Note: thread priority is only a hint to the scheduler and does not guarantee execution order.

### Q7. [Hard] What is the output?

```java
class Counter {
    private int count = 0;
    public synchronized void add(int n) {
        for (int i = 0; i < n; i++) count++;
    }
    public int getCount() { return count; }
}

Counter c = new Counter();
Thread t1 = new Thread(() -> c.add(5000));
Thread t2 = new Thread(() -> c.add(5000));
t1.start();
t2.start();
t1.join();
t2.join();
System.out.println(c.getCount());
```

*Hint:* add() is synchronized. Is there a race condition?

**Answer:** `10000`

The `add()` method is synchronized, so only one thread can execute it at a time. Each thread adds 5000, and there is no race condition. The result is always 10000.

### Q8. [Hard] What is the output?

```java
Object lock = new Object();
Thread t1 = new Thread(() -> {
    synchronized (lock) {
        try {
            System.out.println("T1 waiting");
            lock.wait();
            System.out.println("T1 resumed");
        } catch (InterruptedException e) {}
    }
});

Thread t2 = new Thread(() -> {
    try { Thread.sleep(500); } catch (InterruptedException e) {}
    synchronized (lock) {
        System.out.println("T2 notifying");
        lock.notify();
    }
});

t1.start();
t2.start();
t1.join();
t2.join();
```

*Hint:* T1 calls wait(), T2 calls notify() after 500ms.

**Answer:** `T1 waiting`
`T2 notifying`
`T1 resumed`

T1 acquires the lock and calls `wait()`, which releases the lock and suspends T1. T2 sleeps 500ms, then acquires the lock and calls `notify()`, waking T1. After T2 exits the synchronized block, T1 reacquires the lock and prints "T1 resumed".

### Q9. [Easy] What is the difference between a thread and a process?

*Hint:* Think about memory sharing and weight.

**Answer:** A **process** is an independent program with its own memory space. A **thread** is a lightweight unit of execution within a process. Threads within the same process share heap memory but have separate stacks. Creating a thread is cheaper than creating a process. Threads communicate through shared memory; processes need IPC mechanisms.

A Java program runs as one process. Calling `new Thread().start()` creates a new thread within that process, sharing the same heap. Using `Runtime.exec()` would create a new process with its own memory.

### Q10. [Hard] What is a thread pool, and why is it better than creating threads manually?

*Hint:* Think about the cost of creating and destroying threads.

**Answer:** A **thread pool** maintains a fixed number of reusable threads. Tasks are submitted to a queue, and available threads pick them up. Benefits: (1) Avoids the overhead of creating/destroying threads for each task. (2) Controls the maximum number of concurrent threads, preventing resource exhaustion. (3) Provides task queuing when all threads are busy. (4) Simplifies thread management code. Java's `ExecutorService` (e.g., `Executors.newFixedThreadPool()`) provides this.

If a web server creates a new thread per request and gets 10,000 requests, it creates 10,000 threads, consuming massive memory. A thread pool with 200 threads handles the same load by queuing excess requests.

## Multiple Choice Questions

### Q1. [Easy] Which method must you call to start a new thread in Java?

A. run()
B. start()
C. execute()
D. begin()

**Answer:** B

**B is correct.** `start()` creates a new thread and calls `run()` on it. Calling `run()` directly executes the method on the current thread.

### Q2. [Easy] What interface should you implement to define a thread's task?

A. Runnable
B. Callable
C. Executable
D. Threadable

**Answer:** A

**A is correct.** `Runnable` is the standard interface for defining a thread's task. `Callable` is also valid (it can return a value), but Runnable is the basic one.

### Q3. [Easy] What is the default name of the thread that runs the main() method?

A. Thread-0
B. main
C. primary
D. default

**Answer:** B

**B is correct.** The main thread is named "main". Threads created with `new Thread()` are named "Thread-0", "Thread-1", etc. by default.

### Q4. [Easy] What does Thread.sleep(1000) do?

A. Creates a thread that runs for 1 second
B. Pauses the current thread for 1000 milliseconds
C. Terminates the current thread after 1 second
D. Waits for another thread for 1 second

**Answer:** B

**B is correct.** `Thread.sleep(1000)` pauses the currently executing thread for 1000 milliseconds (1 second). It does not release any locks held.

### Q5. [Easy] Can a terminated thread be restarted?

A. Yes, by calling start() again
B. Yes, by calling run() again
C. No, a terminated thread cannot be restarted
D. Yes, by calling restart()

**Answer:** C

**C is correct.** A terminated thread cannot be restarted. Calling `start()` on a terminated thread throws `IllegalThreadStateException`. You must create a new Thread object.

### Q6. [Medium] What does the synchronized keyword do?

A. Makes the method run faster
B. Ensures only one thread can execute the method/block at a time on the same object
C. Prevents the method from throwing exceptions
D. Makes the method run on a separate thread

**Answer:** B

**B is correct.** `synchronized` acquires a lock on the object, ensuring mutual exclusion. Only one thread can execute synchronized methods/blocks on the same object at a time.

### Q7. [Medium] What exception does Thread.sleep() throw?

A. IOException
B. InterruptedException
C. IllegalStateException
D. TimeoutException

**Answer:** B

**B is correct.** `Thread.sleep()` throws `InterruptedException` if another thread interrupts the sleeping thread. It is a checked exception that must be handled.

### Q8. [Medium] What is a daemon thread?

A. A thread with the highest priority
B. A background thread that is terminated when all non-daemon threads finish
C. A thread that cannot be interrupted
D. A thread that runs only once

**Answer:** B

**B is correct.** Daemon threads are background threads (e.g., garbage collector). The JVM exits when only daemon threads remain. Set with `thread.setDaemon(true)` before `start()`.

### Q9. [Medium] What is the purpose of the join() method?

A. To combine two threads into one
B. To make the calling thread wait until the target thread finishes
C. To synchronize two threads
D. To start two threads simultaneously

**Answer:** B

**B is correct.** `t.join()` makes the calling thread (usually main) block until thread `t` terminates. It is used when you need the result of a thread before proceeding.

### Q10. [Medium] What does volatile ensure?

A. Atomicity of operations
B. Mutual exclusion
C. Visibility of changes across threads
D. Thread-safe compound operations

**Answer:** C

**C is correct.** `volatile` ensures that reads and writes go to main memory, not a thread-local cache. It guarantees visibility but NOT atomicity or mutual exclusion.

### Q11. [Hard] What happens if you call wait() outside a synchronized block?

A. The thread waits normally
B. A compile error occurs
C. IllegalMonitorStateException is thrown at runtime
D. The thread terminates

**Answer:** C

**C is correct.** `wait()` must be called while holding the object's monitor (inside a synchronized block). Calling it without the lock throws `IllegalMonitorStateException` at runtime (not a compile error).

### Q12. [Hard] What is the difference between notify() and notifyAll()?

A. notify() wakes all threads; notifyAll() wakes one
B. notify() wakes one waiting thread; notifyAll() wakes all waiting threads
C. They are identical
D. notify() is for threads; notifyAll() is for processes

**Answer:** B

**B is correct.** `notify()` wakes up one arbitrary thread waiting on the object's monitor. `notifyAll()` wakes up all waiting threads, and they compete for the lock. Use `notifyAll()` when multiple threads might be waiting for different conditions.

### Q13. [Hard] Which is NOT a way to prevent deadlock?

A. Always acquire locks in the same order
B. Use tryLock() with timeouts
C. Increase thread priority
D. Minimize lock scope

**Answer:** C

**C is correct.** Increasing thread priority does not prevent deadlock. Deadlock is about the order and duration of lock acquisition, not thread priority. Options A, B, and D are all valid deadlock prevention strategies.

### Q14. [Hard] What does Executors.newFixedThreadPool(5) create?

A. 5 threads that each run once
B. A pool of 5 reusable threads that process tasks from a queue
C. 5 daemon threads
D. A thread that runs 5 tasks sequentially

**Answer:** B

**B is correct.** A fixed thread pool maintains 5 threads that pick up tasks from a shared queue. If more than 5 tasks are submitted, excess tasks wait in the queue until a thread becomes available. Threads are reused, not destroyed after each task.

### Q15. [Easy] What is the range of thread priorities in Java?

A. 0 to 5
B. 1 to 10
C. 0 to 100
D. 1 to 5

**Answer:** B

**B is correct.** Thread priorities range from 1 (MIN_PRIORITY) to 10 (MAX_PRIORITY), with 5 (NORM_PRIORITY) as the default. Priority is a hint to the scheduler and does not guarantee execution order.

### Q16. [Medium] Why should you use while (not if) before wait()?

A. while is faster than if
B. To guard against spurious wakeups and re-check the condition
C. wait() only works inside while loops
D. To prevent deadlock

**Answer:** B

**B is correct.** Spurious wakeups can cause a thread to wake up even without `notify()`. Using `while` re-checks the condition after every wakeup, ensuring the thread only proceeds when the condition is truly met.

## Coding Challenges

### Challenge 1. Thread-Safe Counter

**Difficulty:** Easy

Create a thread-safe Counter class with increment(), decrement(), and getCount() methods. Test it with two threads incrementing 10000 times each and verify the final count is 20000.

**Constraints:**

- Use synchronized methods. Use join() to wait for threads before checking the count.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Expected: 20000
Actual: 20000
```

**Solution:**

```java
class Counter {
    private int count = 0;
    public synchronized void increment() { count++; }
    public synchronized void decrement() { count--; }
    public synchronized int getCount() { return count; }
}

public class ThreadSafeCounter {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 10000; i++) counter.increment();
        });
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 10000; i++) counter.increment();
        });
        t1.start();
        t2.start();
        t1.join();
        t2.join();
        System.out.println("Expected: 20000");
        System.out.println("Actual: " + counter.getCount());
    }
}
```

### Challenge 2. Parallel Array Sum

**Difficulty:** Medium

Split an array into two halves and compute the sum of each half in a separate thread. Then combine the results on the main thread. Compare with single-threaded sum.

**Constraints:**

- Use Runnable. Store each thread's result in a shared array or use a wrapper class.

**Sample input:**

```
Array: {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```

**Sample output:**

```
Thread-1 sum: 15
Thread-2 sum: 40
Total: 55
```

**Solution:**

```java
public class ParallelSum {
    public static void main(String[] args) throws InterruptedException {
        int[] data = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int[] results = new int[2];
        int mid = data.length / 2;

        Thread t1 = new Thread(() -> {
            int sum = 0;
            for (int i = 0; i < mid; i++) sum += data[i];
            results[0] = sum;
            System.out.println("Thread-1 sum: " + sum);
        });

        Thread t2 = new Thread(() -> {
            int sum = 0;
            for (int i = mid; i < data.length; i++) sum += data[i];
            results[1] = sum;
            System.out.println("Thread-2 sum: " + sum);
        });

        t1.start();
        t2.start();
        t1.join();
        t2.join();
        System.out.println("Total: " + (results[0] + results[1]));
    }
}
```

### Challenge 3. Producer-Consumer with Buffer

**Difficulty:** Medium

Implement a bounded buffer (capacity 5) with produce() and consume() methods using wait/notify. The producer should produce 10 items, and the consumer should consume all 10.

**Constraints:**

- Use synchronized, wait(), and notify(). Use a LinkedList as the buffer.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Produced: 1
Produced: 2
...
Consumed: 1
Consumed: 2
...
```

**Solution:**

```java
import java.util.LinkedList;

class BoundedBuffer {
    private LinkedList<Integer> buffer = new LinkedList<>();
    private int capacity;

    public BoundedBuffer(int capacity) { this.capacity = capacity; }

    public synchronized void produce(int item) throws InterruptedException {
        while (buffer.size() == capacity) {
            wait();
        }
        buffer.add(item);
        System.out.println("Produced: " + item);
        notifyAll();
    }

    public synchronized int consume() throws InterruptedException {
        while (buffer.isEmpty()) {
            wait();
        }
        int item = buffer.removeFirst();
        System.out.println("Consumed: " + item);
        notifyAll();
        return item;
    }
}

public class ProducerConsumerBuffer {
    public static void main(String[] args) {
        BoundedBuffer buffer = new BoundedBuffer(5);

        Thread producer = new Thread(() -> {
            try {
                for (int i = 1; i <= 10; i++) {
                    buffer.produce(i);
                    Thread.sleep(100);
                }
            } catch (InterruptedException e) { e.printStackTrace(); }
        });

        Thread consumer = new Thread(() -> {
            try {
                for (int i = 0; i < 10; i++) {
                    buffer.consume();
                    Thread.sleep(200);
                }
            } catch (InterruptedException e) { e.printStackTrace(); }
        });

        producer.start();
        consumer.start();
    }
}
```

### Challenge 4. Thread Pool Task Processor

**Difficulty:** Medium

Use ExecutorService with a fixed thread pool of 3 threads to process 8 tasks. Each task should print its ID and the thread executing it, then simulate work with Thread.sleep(). Print when all tasks are complete.

**Constraints:**

- Use Executors.newFixedThreadPool(). Use shutdown() and awaitTermination().

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Task 1 on pool-1-thread-1
Task 2 on pool-1-thread-2
... (all 8 tasks)
All tasks completed.
```

**Solution:**

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class TaskProcessor {
    public static void main(String[] args) throws InterruptedException {
        ExecutorService pool = Executors.newFixedThreadPool(3);

        for (int i = 1; i <= 8; i++) {
            int taskId = i;
            pool.submit(() -> {
                System.out.println("Task " + taskId + " on " + Thread.currentThread().getName());
                try { Thread.sleep(500); } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
        }

        pool.shutdown();
        pool.awaitTermination(30, TimeUnit.SECONDS);
        System.out.println("All tasks completed.");
    }
}
```

### Challenge 5. Deadlock Detector and Fix

**Difficulty:** Hard

First, write code that creates a deadlock between two threads. Then fix it by using a consistent lock ordering strategy. Print messages to show the execution flow in both versions.

**Constraints:**

- Demonstrate the deadlock scenario. Fix by acquiring locks in the same order in both threads.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
=== DEADLOCK VERSION ===
T1: locked A
T2: locked B
(hangs)

=== FIXED VERSION ===
T1: locked A
T1: locked B
T1: done
T2: locked A
T2: locked B
T2: done
```

**Solution:**

```java
public class DeadlockFix {
    private static final Object LOCK_A = new Object();
    private static final Object LOCK_B = new Object();

    public static void main(String[] args) throws InterruptedException {
        System.out.println("=== FIXED VERSION (consistent lock order) ===");
        // Both threads acquire LOCK_A first, then LOCK_B
        Thread t1 = new Thread(() -> {
            synchronized (LOCK_A) {
                System.out.println("T1: locked A");
                try { Thread.sleep(50); } catch (InterruptedException e) {}
                synchronized (LOCK_B) {
                    System.out.println("T1: locked B");
                }
            }
            System.out.println("T1: done");
        });

        Thread t2 = new Thread(() -> {
            synchronized (LOCK_A) { // Same order: A then B
                System.out.println("T2: locked A");
                try { Thread.sleep(50); } catch (InterruptedException e) {}
                synchronized (LOCK_B) {
                    System.out.println("T2: locked B");
                }
            }
            System.out.println("T2: done");
        });

        t1.start();
        t2.start();
        t1.join();
        t2.join();
        System.out.println("No deadlock!");
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/multithreading-basics/*
