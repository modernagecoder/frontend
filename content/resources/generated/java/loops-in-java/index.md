---
title: "Loops in Java - for, while, do-while with Examples | Modern Age Coders"
description: "Master Java loops including for, while, do-while, enhanced for-each, nested loops, and common loop patterns. Includes 62 practice questions with output prediction and coding challenges."
slug: loops-in-java
canonical: https://learn.modernagecoders.com/resources/java/loops-in-java
category: "Java"
keywords: ["java for loop", "java while loop", "java do while loop", "java loops tutorial", "java for each loop", "java nested loops", "java loop examples", "java infinite loop"]
---
# Loops in Java (for, while, do-while)

**Difficulty:** Beginner  
**Reading time:** 28 min  
**Chapter:** 8  
**Practice questions:** 58

## What Are Loops?

A **loop** is a control flow structure that repeats a block of code multiple times. Instead of writing the same code 100 times, you write it once inside a loop and let the loop execute it repeatedly until a specified condition becomes false.

Consider printing numbers 1 to 1000. Without loops, you would need 1000 print statements. With a loop, you need 3 lines of code. Loops are one of the three fundamental building blocks of all programs (alongside sequence and conditional statements).

Java provides four types of loops:

1. **for loop** -- when you know the number of iterations in advance
2. **while loop** -- when you want to repeat while a condition is true (condition checked before each iteration)
3. **do-while loop** -- like while, but the body executes at least once (condition checked after each iteration)
4. **enhanced for-each loop** -- for iterating over arrays and collections without an index

## Why Are Loops Essential?

### 1. Eliminating Repetition

Any task that involves repetition requires loops. Printing a multiplication table, processing each element of an array, reading lines from a file, handling multiple user requests in a server -- all are impossible (or impractical) without loops. They are the foundation of automation in programming.

### 2. Processing Collections of Data

Real programs work with collections: arrays, lists, database rows, API responses. Loops let you iterate over each element, apply transformations, filter results, compute aggregates (sum, average, min, max), and search for specific values. Without loops, you cannot work with data of variable size.

### 3. Algorithm Implementation

Almost every algorithm uses loops. Searching (linear search, binary search), sorting (bubble sort, selection sort), matrix operations, string processing, mathematical computations (factorial, Fibonacci, prime checking) -- all require loops. For placement preparation, mastering loops is non-negotiable.

### 4. User Interaction

Interactive programs often use loops to keep running until the user decides to exit. A menu-driven program shows options, processes the user's choice, and repeats. Without loops, the program would end after handling one request.

## Detailed Explanation

### 1. The for Loop

The `for` loop is the most commonly used loop when you know (or can calculate) the number of iterations beforehand. It has three parts in the header: initialization, condition, and update.

```
for (initialization; condition; update) {
    // body
}
```

Execution flow:

1. **Initialization** executes once, at the very beginning.
2. **Condition** is checked before each iteration. If true, the body executes. If false, the loop ends.
3. **Update** executes after each iteration of the body.

```
for (int i = 1; i <= 5; i++) {
    System.out.println("Iteration: " + i);
}
```

This prints "Iteration: 1" through "Iteration: 5". The variable `i` is declared inside the loop and is not accessible outside it (block scope).

#### Variations of for Loop

- **Counting down:** `for (int i = 10; i >= 1; i--)`
- **Step by 2:** `for (int i = 0; i <= 20; i += 2)`
- **Multiple variables:** `for (int i = 0, j = 10; i < j; i++, j--)`
- **Empty parts:** Any of the three parts can be omitted: `for (;;)` is an infinite loop.

### 2. The while Loop

The `while` loop repeats as long as its condition is true. The condition is checked **before** each iteration, so if the condition is false from the start, the body never executes.

```
while (condition) {
    // body
}
```

Use `while` when you do not know the number of iterations in advance, such as reading input until the user types "quit" or searching for a value in a data stream.

```
int count = 1;
while (count <= 5) {
    System.out.println("Count: " + count);
    count++;
}
```

If you forget `count++`, the condition `count <= 5` is always true, causing an **infinite loop**. The program hangs and must be terminated manually.

### 3. The do-while Loop

The `do-while` loop is similar to `while`, but the condition is checked **after** the body executes. This guarantees that the body runs at least once, even if the condition is false from the start.

```
do {
    // body
} while (condition);
```

Note the semicolon after `while(condition);` -- it is required.

```
int num = 10;
do {
    System.out.println("num = " + num);
    num++;
} while (num <= 5);
```

Even though `10 <= 5` is false, the body executes once and prints "num = 10". The condition is checked after the first execution.

#### When to Use do-while

Use do-while when the body must execute at least once. Common use cases: menu-driven programs (show the menu at least once), input validation (ask for input at least once), and game loops (play at least one round).

### 4. The Enhanced for-each Loop

The for-each loop (introduced in Java 5) provides a cleaner way to iterate over arrays and collections without managing an index variable.

```
for (type variable : arrayOrCollection) {
    // body
}
```

```
int[] nums = {10, 20, 30, 40, 50};
for (int n : nums) {
    System.out.println(n);
}
```

The variable `n` takes each element's value in order. You cannot modify the array through `n` (it is a copy, not a reference to the element). You also cannot access the index directly. For index-based operations, use a regular for loop.

### 5. Infinite Loops

An infinite loop runs forever (or until externally stopped). These are sometimes intentional (server event loops) but usually bugs (forgot to update the loop variable).

```
// Intentional infinite loops:
for (;;) { /* ... break when done ... */ }
while (true) { /* ... break when done ... */ }
```

Use `break` inside an infinite loop to exit when a condition is met.

### 6. Nested Loops

A loop inside another loop is called a **nested loop**. The inner loop runs completely for each iteration of the outer loop. If the outer loop runs N times and the inner loop runs M times, the innermost body executes N * M times.

```
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        System.out.print(i + "," + j + "  ");
    }
    System.out.println();
}
```

This produces a 3x3 grid. Nested loops are used for matrix operations, pattern printing, and generating combinations.

### 7. Common Loop Patterns

#### Sum / Accumulator Pattern

```
int sum = 0;
for (int i = 1; i <= 100; i++) {
    sum += i;
}
System.out.println("Sum: " + sum); // 5050
```

#### Counting Pattern

```
int count = 0;
for (int i = 1; i <= 100; i++) {
    if (i % 2 == 0) count++;
}
System.out.println("Even numbers: " + count); // 50
```

#### Search Pattern

```
int[] arr = {5, 12, 8, 3, 17};
int target = 8;
boolean found = false;
for (int i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
        System.out.println("Found at index " + i);
        found = true;
        break;
    }
}
if (!found) System.out.println("Not found");
```

#### Min/Max Pattern

```
int[] arr = {5, 12, 8, 3, 17};
int min = arr[0], max = arr[0];
for (int i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
}
System.out.println("Min: " + min + ", Max: " + max);
```

## Code Examples

### for Loop: Multiplication Table

```java
import java.util.Scanner;

public class MultiTable {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();

        for (int i = 1; i <= 10; i++) {
            System.out.println(num + " x " + i + " = " + (num * i));
        }

        sc.close();
    }
}
```

The for loop runs from i = 1 to i = 10. Each iteration prints one line of the multiplication table. If the user enters 7, it prints "7 x 1 = 7" through "7 x 10 = 70".

**Output:**

```
Enter a number: 7
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
```

### while Loop: Sum Until Sentinel

```java
import java.util.Scanner;

public class SumUntilZero {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int sum = 0;
        int count = 0;

        System.out.println("Enter numbers (0 to stop):");
        int num = sc.nextInt();

        while (num != 0) {
            sum += num;
            count++;
            num = sc.nextInt();
        }

        System.out.println("Sum: " + sum);
        System.out.println("Count: " + count);
        if (count > 0) {
            System.out.println("Average: " + (double) sum / count);
        }

        sc.close();
    }
}
```

This uses a **sentinel value** (0) to end input. The while loop runs as long as the entered number is not 0. We do not know in advance how many numbers the user will enter, making while the right choice over for.

**Output:**

```
Enter numbers (0 to stop):
10
20
30
0
Sum: 60
Count: 3
Average: 20.0
```

### do-while Loop: Menu-Driven Program

```java
import java.util.Scanner;

public class MenuDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int choice;

        do {
            System.out.println("\n--- Menu ---");
            System.out.println("1. Say Hello");
            System.out.println("2. Say Goodbye");
            System.out.println("3. Exit");
            System.out.print("Choice: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1: System.out.println("Hello!"); break;
                case 2: System.out.println("Goodbye!"); break;
                case 3: System.out.println("Exiting..."); break;
                default: System.out.println("Invalid choice.");
            }
        } while (choice != 3);

        sc.close();
    }
}
```

The do-while loop guarantees the menu displays at least once. The loop continues until the user enters 3 (Exit). This is the classic use case for do-while: show the menu, get input, process it, and repeat.

**Output:**

```
--- Menu ---
1. Say Hello
2. Say Goodbye
3. Exit
Choice: 1
Hello!

--- Menu ---
1. Say Hello
2. Say Goodbye
3. Exit
Choice: 3
Exiting...
```

### Enhanced for-each Loop

```java
public class ForEachDemo {
    public static void main(String[] args) {
        String[] names = {"Aarav", "Neha", "Rohan", "Priya", "Karan"};

        System.out.println("Students:");
        for (String name : names) {
            System.out.println("  - " + name);
        }

        // Sum using for-each
        int[] marks = {85, 92, 78, 95, 88};
        int total = 0;
        for (int m : marks) {
            total += m;
        }
        System.out.println("Total marks: " + total);
        System.out.println("Average: " + (double) total / marks.length);
    }
}
```

The for-each loop iterates over each element without needing an index variable. For the names array, `name` takes each string in order. For the marks array, `m` takes each integer value. The for-each loop is cleaner when you do not need the index, but use a regular for loop when you need index-based access.

**Output:**

```
Students:
  - Aarav
  - Neha
  - Rohan
  - Priya
  - Karan
Total marks: 438
Average: 87.6
```

### Nested Loops: Multiplication Grid

```java
public class MultiGrid {
    public static void main(String[] args) {
        System.out.println("Multiplication Table (1-5):");
        System.out.print("\t");
        for (int i = 1; i <= 5; i++) {
            System.out.print(i + "\t");
        }
        System.out.println();
        System.out.println("-------------------------------");

        for (int i = 1; i <= 5; i++) {
            System.out.print(i + " |\t");
            for (int j = 1; j <= 5; j++) {
                System.out.print((i * j) + "\t");
            }
            System.out.println();
        }
    }
}
```

The outer loop controls the row (i = 1 to 5). For each row, the inner loop prints 5 products (i * j for j = 1 to 5). The inner loop runs 5 times for each of the 5 outer iterations, producing 25 total products in a 5x5 grid.

**Output:**

```
Multiplication Table (1-5):
	1	2	3	4	5
-------------------------------
1 |	1	2	3	4	5
2 |	2	4	6	8	10
3 |	3	6	9	12	15
4 |	4	8	12	16	20
5 |	5	10	15	20	25
```

### while Loop vs do-while Comparison

```java
public class WhileVsDoWhile {
    public static void main(String[] args) {
        int x = 10;

        // while: condition checked FIRST
        System.out.println("while loop:");
        while (x < 5) {
            System.out.println("x = " + x);
            x++;
        }
        System.out.println("(nothing printed, condition was false)\n");

        // do-while: body runs FIRST
        x = 10;
        System.out.println("do-while loop:");
        do {
            System.out.println("x = " + x);
            x++;
        } while (x < 5);
        System.out.println("(printed once, then condition was false)");
    }
}
```

With x = 10, the while loop checks `10 < 5` immediately (false), so the body never executes. The do-while loop executes the body first (prints x = 10), then checks `11 < 5` (false) and stops. This demonstrates the key difference: do-while always executes at least once.

**Output:**

```
while loop:
(nothing printed, condition was false)

do-while loop:
x = 10
(printed once, then condition was false)
```

### Loop with Array: Search and Count

```java
public class ArrayLoops {
    public static void main(String[] args) {
        int[] scores = {78, 92, 65, 88, 45, 92, 73, 88, 92};

        // Count occurrences of 92
        int count = 0;
        for (int score : scores) {
            if (score == 92) {
                count++;
            }
        }
        System.out.println("92 appears " + count + " times.");

        // Find index of first score below 50
        int lowIndex = -1;
        for (int i = 0; i < scores.length; i++) {
            if (scores[i] < 50) {
                lowIndex = i;
                break;
            }
        }
        if (lowIndex != -1) {
            System.out.println("First low score at index: " + lowIndex);
        }

        // Sum, min, max
        int sum = 0, min = scores[0], max = scores[0];
        for (int score : scores) {
            sum += score;
            if (score < min) min = score;
            if (score > max) max = score;
        }
        System.out.println("Sum: " + sum);
        System.out.println("Min: " + min + ", Max: " + max);
        System.out.printf("Average: %.1f%n", (double) sum / scores.length);
    }
}
```

This demonstrates four common loop patterns with arrays. Counting uses for-each (no index needed). Searching uses a regular for loop (needs the index) with break for early exit. Sum/min/max uses for-each with accumulators.

**Output:**

```
92 appears 3 times.
First low score at index: 4
Sum: 713
Min: 45, Max: 92
Average: 79.2
```

### for Loop with Multiple Variables

```java
public class MultiVarLoop {
    public static void main(String[] args) {
        // Two variables moving toward each other
        for (int left = 0, right = 10; left < right; left++, right--) {
            System.out.println("left=" + left + ", right=" + right);
        }

        System.out.println();

        // Reverse an array in-place
        int[] arr = {1, 2, 3, 4, 5};
        for (int i = 0, j = arr.length - 1; i < j; i++, j--) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        System.out.print("Reversed: ");
        for (int n : arr) {
            System.out.print(n + " ");
        }
        System.out.println();
    }
}
```

The for loop supports declaring multiple variables in the initialization (comma-separated, same type) and multiple update expressions. The first loop uses two pointers moving inward. The second applies this pattern to reverse an array in-place, a classic interview problem.

**Output:**

```
left=0, right=10
left=1, right=9
left=2, right=8
left=3, right=7
left=4, right=6

Reversed: 5 4 3 2 1
```

## Common Mistakes

### Off-by-One Error in Loop Bounds

**Wrong:**

```
// Intended: print 1 to 5
for (int i = 1; i < 5; i++) {
    System.out.println(i);
}
// Only prints 1, 2, 3, 4 (misses 5)
```

Prints 1 through 4 instead of 1 through 5. The condition should be <= 5, not < 5.

**Correct:**

```
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}
```

Off-by-one errors are the most common loop bug. When iterating from 1 to N (inclusive), use `i <= N`. When iterating over an array of length N (indices 0 to N-1), use `i < N` or `i < arr.length`. Always verify the first and last values.

### Infinite Loop Due to Missing Update

**Wrong:**

```
int i = 1;
while (i <= 5) {
    System.out.println(i);
    // Forgot i++;
}
```

Infinite loop. The program prints 1 forever because i never changes.

**Correct:**

```
int i = 1;
while (i <= 5) {
    System.out.println(i);
    i++;
}
```

In a while loop, you must update the loop variable inside the body. Forgetting to increment (or decrement) causes the condition to remain true forever. In a for loop, the update is in the header, making this mistake less likely.

### Using == Instead of .equals() in Loop Condition for Strings

**Wrong:**

```
Scanner sc = new Scanner(System.in);
String input = "";
while (input != "quit") {  // Bug: == compares references
    input = sc.nextLine();
    System.out.println("You typed: " + input);
}
```

The loop never exits because == compares references, not content. Even when the user types 'quit', the condition remains true.

**Correct:**

```
Scanner sc = new Scanner(System.in);
String input = "";
while (!input.equals("quit")) {
    input = sc.nextLine();
    System.out.println("You typed: " + input);
}
```

In Java, `!=` and `==` compare object references for Strings, not their content. User input from Scanner creates new String objects each time, so `input != "quit"` is always true even when the content is identical. Always use `.equals()` for string comparison.

### Semicolon After for Loop Header

**Wrong:**

```
for (int i = 0; i < 5; i++); {  // Stray semicolon!
    System.out.println(i);
}
```

Compilation error: i cannot be resolved to a variable. The semicolon ends the for loop with an empty body.

**Correct:**

```
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
```

A semicolon after the for header (`for (...) ;`) creates an empty loop body. The loop runs 5 times doing nothing. Then the block `{...}` executes once, but `i` is out of scope. This is a subtle bug that the compiler may not catch in all cases.

### Modifying Array Elements with for-each Does Not Work

**Wrong:**

```
int[] arr = {1, 2, 3, 4, 5};
for (int n : arr) {
    n = n * 2;  // Does NOT modify the array!
}
// arr is still {1, 2, 3, 4, 5}
```

Array elements are unchanged because the for-each variable is a copy of the element, not a reference to it.

**Correct:**

```
int[] arr = {1, 2, 3, 4, 5};
for (int i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;  // Modifies the array
}
// arr is now {2, 4, 6, 8, 10}
```

In a for-each loop, the variable (`n`) is a **copy** of the array element. Assigning a new value to `n` does not modify the original array. Use a regular indexed for loop when you need to modify array elements.

## Summary

- The for loop has three parts: initialization (runs once), condition (checked before each iteration), and update (runs after each iteration). Use it when the number of iterations is known.
- The while loop checks its condition before each iteration. If the condition is false initially, the body never executes. Use it when the number of iterations is unknown.
- The do-while loop checks its condition after each iteration, guaranteeing at least one execution. Use it for menus, input validation, and game loops.
- The enhanced for-each loop (for (type var : array)) iterates over arrays and collections without an index. Use it for read-only iteration; it cannot modify elements.
- Nested loops: the inner loop runs completely for each outer iteration. If outer runs N times and inner M times, the body executes N * M times.
- Common loop patterns: accumulator (sum), counter (count), search (find + break), and min/max tracking.
- Off-by-one errors are the most common loop bug. For 1 to N inclusive, use i <= N. For array indices 0 to N-1, use i < N.
- Infinite loops occur when the loop variable is not updated or the condition never becomes false. Use break to exit intentional infinite loops.
- A semicolon after for(...); creates an empty loop body, which is almost always a bug.
- In for-each loops, the loop variable is a copy. Modifying it does not affect the original array. Use indexed for loops to modify array elements.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/loops-in-java/*
*Practice questions: https://learn.modernagecoders.com/resources/java/loops-in-java/practice/*
