---
title: "Loops in C++ - for, while, do-while with Star and Number Patterns | Modern Age Coders"
description: "Master C++ loops including for, while, do-while, range-based for, nested loops, break/continue, and pattern printing. Includes 62 practice questions with star patterns, number patterns, Floyd's triangle, Pascal's triangle, and output prediction."
slug: loops-in-cpp
canonical: https://learn.modernagecoders.com/resources/cpp/loops-in-cpp/
category: "C++"
keywords: ["c++ for loop", "c++ while loop", "c++ do while loop", "c++ pattern printing", "c++ star pattern", "c++ number pattern", "c++ nested loops", "c++ loop examples", "c++ Floyd triangle", "c++ Pascal triangle"]
---
# Loops (for, while, do-while) and Patterns

**Difficulty:** Beginner  
**Reading time:** 32 min  
**Chapter:** 7  
**Practice questions:** 62

## What Are Loops?

A **loop** is a control flow structure that repeats a block of code multiple times until a specified condition becomes false. Instead of writing the same statement 100 times, you write it once inside a loop and let the loop handle the repetition.

Consider printing numbers 1 to 1000. Without loops, you need 1000 cout statements. With a loop, you need 3 lines. Loops are one of the three fundamental building blocks of all programs, alongside sequences and conditionals.

C++ provides the following loop constructs:

1. **for loop** -- when you know the number of iterations in advance
2. **while loop** -- when you want to repeat while a condition is true (condition checked before each iteration)
3. **do-while loop** -- like while, but the body executes at least once (condition checked after each iteration)
4. **Range-based for loop (C++11)** -- for iterating over arrays and containers without managing an index

## Why Are Loops Essential?

### 1. Eliminating Repetition

Any task involving repetition requires loops. Printing a multiplication table, processing each element of an array, reading lines from a file, handling multiple requests in a server -- all are impossible without loops. They are the foundation of automation in programming.

### 2. Processing Collections of Data

Real programs work with collections: arrays, vectors, database rows, API responses. Loops let you iterate over each element, apply transformations, filter results, compute aggregates (sum, average, min, max), and search for specific values. Without loops, you cannot work with data of variable size.

### 3. Algorithm Implementation

Almost every algorithm uses loops. Searching (linear search, binary search), sorting (bubble sort, selection sort), matrix operations, string processing, mathematical computations (factorial, Fibonacci, prime checking) -- all require loops. For competitive programming and placements, loop mastery is non-negotiable.

### 4. Pattern Printing

Pattern printing problems are a staple of coding interviews and college exams. They train you to think systematically about nested loops: which row you are on, how many spaces to print, how many stars to print. Mastering patterns means mastering nested loop control flow.

## Detailed Explanation

### 1. The for Loop

The most commonly used loop when you know (or can calculate) the number of iterations. It has three parts in the header: initialization, condition, and update.

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
    cout << i << " ";
}
// Output: 1 2 3 4 5
```

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

```
int count = 1;
while (count <= 5) {
    cout << count << " ";
    count++;
}
// Output: 1 2 3 4 5
```

If you forget `count++`, the condition is always true, causing an **infinite loop**.

### 3. The do-while Loop

The condition is checked **after** the body executes, guaranteeing at least one execution.

```
do {
    // body
} while (condition);
```

Note the semicolon after the while condition. It is required.

```
int num = 10;
do {
    cout << num << " ";
    num++;
} while (num <= 5);
// Output: 10
```

Even though 10 <= 5 is false, the body runs once and prints 10.

### 4. Range-based for Loop (C++11)

A cleaner way to iterate over arrays and containers:

```
int arr[] = {10, 20, 30, 40, 50};
for (auto x : arr) {
    cout << x << " ";
}
// Output: 10 20 30 40 50
```

The variable `x` takes each element's value in order. To modify elements, use a reference: `for (auto& x : arr)`. The `auto` keyword lets the compiler deduce the type.

### 5. break and continue

**break** exits the loop entirely. **continue** skips the rest of the current iteration and moves to the next.

```
for (int i = 1; i <= 10; i++) {
    if (i == 5) break;
    cout << i << " ";
}
// Output: 1 2 3 4
```

```
for (int i = 1; i <= 10; i++) {
    if (i % 3 == 0) continue;
    cout << i << " ";
}
// Output: 1 2 4 5 7 8 10
```

In nested loops, break and continue apply only to the **innermost** enclosing loop.

### 6. Nested Loops

A loop inside another loop. The inner loop completes all its iterations for each single iteration of the outer loop. If the outer loop runs N times and the inner runs M times, the innermost body executes N * M times.

```
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 4; j++) {
        cout << "* ";
    }
    cout << endl;
}
// 3 rows, 4 stars each
```

### 7. Pattern Printing: The Row-Column Approach

Every pattern can be analyzed using the **row-column approach**:

1. Identify the number of rows (outer loop variable `i`).
2. For each row, determine: how many spaces, how many stars/numbers/characters.
3. Express counts as functions of `i` and the total rows `n`.

#### Right-Aligned Triangle

```
int n = 5;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        cout << "* ";
    }
    cout << endl;
}
```

Row 1: 1 star. Row 2: 2 stars. Row i: i stars.

#### Inverted Triangle

```
for (int i = n; i >= 1; i--) {
    for (int j = 1; j <= i; j++) {
        cout << "* ";
    }
    cout << endl;
}
```

#### Pyramid (Centered Triangle)

```
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i; j++) cout << " ";   // spaces
    for (int j = 1; j <= 2 * i - 1; j++) cout << "*"; // stars
    cout << endl;
}
```

Row i has (n - i) spaces followed by (2*i - 1) stars.

#### Diamond

A diamond is an upper pyramid (rows 1 to n) followed by an inverted pyramid (rows n-1 to 1).

#### Floyd's Triangle

```
int num = 1;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        cout << num++ << " ";
    }
    cout << endl;
}
```

Prints consecutive numbers: 1 / 2 3 / 4 5 6 / ...

#### Pascal's Triangle

```
for (int i = 0; i < n; i++) {
    int val = 1;
    for (int j = 0; j <= i; j++) {
        cout << val << " ";
        val = val * (i - j) / (j + 1);
    }
    cout << endl;
}
```

Each element is computed using the combinatorial formula: C(i, j) = C(i, j-1) * (i - j + 1) / j.

### 8. Loop Optimization Tips

- **Avoid recomputing in the condition:** `for (int i = 0; i < strlen(s); i++)` calls strlen every iteration (O(n) each call, making the loop O(n^2)). Compute the length once before the loop.
- **Use prefix increment:** `++i` is generally at least as fast as `i++` (for iterators, prefix avoids creating a temporary copy).
- **Break early:** If searching for an element, break as soon as you find it instead of scanning the entire array.
- **Minimize work inside the loop:** Move invariant computations outside the loop body.

## Code Examples

### for Loop: Multiplication Table

```cpp
#include <iostream>
using namespace std;

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;

    for (int i = 1; i <= 10; i++) {
        cout << num << " x " << i << " = " << num * i << endl;
    }

    return 0;
}
```

The for loop runs from i = 1 to i = 10. Each iteration prints one line of the multiplication table. The expression num * i computes the product inline.

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

### while Loop: Sum of Digits

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter a number: ";
    cin >> n;

    int sum = 0;
    int temp = n;
    while (temp > 0) {
        sum += temp % 10;
        temp /= 10;
    }

    cout << "Sum of digits of " << n << ": " << sum << endl;
    return 0;
}
```

temp % 10 extracts the last digit. temp /= 10 removes the last digit. The while loop repeats until all digits are processed (temp becomes 0). We use a temporary variable to preserve the original number for printing.

**Output:**

```
Enter a number: 1234
Sum of digits of 1234: 10
```

### do-while Loop: Menu-Driven Program

```cpp
#include <iostream>
using namespace std;

int main() {
    int choice;

    do {
        cout << "\n--- Menu ---" << endl;
        cout << "1. Say Hello" << endl;
        cout << "2. Say Goodbye" << endl;
        cout << "3. Exit" << endl;
        cout << "Choice: ";
        cin >> choice;

        switch (choice) {
            case 1: cout << "Hello!" << endl; break;
            case 2: cout << "Goodbye!" << endl; break;
            case 3: cout << "Exiting..." << endl; break;
            default: cout << "Invalid choice." << endl;
        }
    } while (choice != 3);

    return 0;
}
```

The do-while loop guarantees the menu displays at least once. The loop continues until the user enters 3. Inside, a switch-case handles each option. This is the classic use case for do-while.

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

### Range-based for Loop with auto

```cpp
#include <iostream>
using namespace std;

int main() {
    int marks[] = {85, 92, 78, 95, 88};

    int total = 0;
    for (auto m : marks) {
        total += m;
    }

    cout << "Total: " << total << endl;
    cout << "Average: " << (double)total / 5 << endl;

    // Modify using reference
    for (auto& m : marks) {
        m += 5;  // Add 5 grace marks
    }

    cout << "After grace marks: ";
    for (auto m : marks) {
        cout << m << " ";
    }
    cout << endl;

    return 0;
}
```

The first range-based for uses auto m (copy) to sum elements. The second uses auto& m (reference) to modify elements in-place. Without the &, changes to m would not affect the original array. This is a C++11 feature.

**Output:**

```
Total: 438
Average: 87.6
After grace marks: 90 97 83 100 93
```

### Star Pattern: Right Triangle and Pyramid

```cpp
#include <iostream>
using namespace std;

int main() {
    int n = 5;

    // Right triangle
    cout << "Right Triangle:" << endl;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << endl;
    }

    cout << endl;

    // Pyramid
    cout << "Pyramid:" << endl;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) {
            cout << " ";
        }
        for (int j = 1; j <= 2 * i - 1; j++) {
            cout << "*";
        }
        cout << endl;
    }

    return 0;
}
```

Right triangle: row i has i stars. Pyramid: row i has (n-i) leading spaces and (2*i-1) stars. The spaces push the stars to the right, centering them. In the pyramid, row 1 has 4 spaces and 1 star; row 5 has 0 spaces and 9 stars.

**Output:**

```
Right Triangle:
* 
* * 
* * * 
* * * * 
* * * * * 

Pyramid:
    *
   ***
  *****
 *******
*********
```

### Number Pattern: Floyd's Triangle and Pascal's Triangle

```cpp
#include <iostream>
using namespace std;

int main() {
    int n = 5;

    // Floyd's Triangle
    cout << "Floyd's Triangle:" << endl;
    int num = 1;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << num++ << " ";
        }
        cout << endl;
    }

    cout << endl;

    // Pascal's Triangle
    cout << "Pascal's Triangle:" << endl;
    for (int i = 0; i < n; i++) {
        int val = 1;
        for (int j = 0; j <= i; j++) {
            cout << val << " ";
            val = val * (i - j) / (j + 1);
        }
        cout << endl;
    }

    return 0;
}
```

Floyd's Triangle uses a running counter (num) that increments across all rows. Row 1 has 1 number, row 2 has 2, etc. Pascal's Triangle computes each value using the combinatorial recurrence: C(i, j+1) = C(i, j) * (i - j) / (j + 1). This avoids computing factorials directly.

**Output:**

```
Floyd's Triangle:
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 

Pascal's Triangle:
1 
1 1 
1 2 1 
1 3 3 1 
1 4 6 4 1
```

### Diamond Pattern

```cpp
#include <iostream>
using namespace std;

int main() {
    int n = 5;

    // Upper half (rows 1 to n)
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) cout << " ";
        for (int j = 1; j <= 2 * i - 1; j++) cout << "*";
        cout << endl;
    }

    // Lower half (rows n-1 to 1)
    for (int i = n - 1; i >= 1; i--) {
        for (int j = 1; j <= n - i; j++) cout << " ";
        for (int j = 1; j <= 2 * i - 1; j++) cout << "*";
        cout << endl;
    }

    return 0;
}
```

A diamond is a pyramid (rows 1 to n) followed by an inverted pyramid (rows n-1 to 1). Both halves use the same space-star formula. The upper half grows; the lower half shrinks. Total rows: 2n - 1.

**Output:**

```
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

### Character Pattern: Alphabet Triangle

```cpp
#include <iostream>
using namespace std;

int main() {
    int n = 5;
    for (int i = 1; i <= n; i++) {
        char ch = 'A';
        for (int j = 1; j <= i; j++) {
            cout << ch++ << " ";
        }
        cout << endl;
    }

    return 0;
}
```

Each row starts at 'A' and prints i characters. ch++ increments the character after printing (A becomes B, B becomes C, etc.). Row 1: A. Row 2: A B. Row 3: A B C. Characters are just integers in C++, so incrementing a char moves to the next letter.

**Output:**

```
A 
A B 
A B C 
A B C D 
A B C D E
```

## Common Mistakes

### Off-by-One Error in Loop Bounds

**Wrong:**

```
// Intended: print 1 to 5
for (int i = 1; i < 5; i++) {
    cout << i << " ";
}
// Output: 1 2 3 4 (misses 5)
```

Prints 1 through 4 instead of 1 through 5. The condition should be <= 5, not < 5.

**Correct:**

```
for (int i = 1; i <= 5; i++) {
    cout << i << " ";
}
```

Off-by-one errors are the most common loop bug. For 1 to N inclusive, use `i <= N`. For array indices 0 to N-1, use `i < N`. Always verify the first and last values of your loop variable.

### Infinite Loop Due to Missing Update

**Wrong:**

```
int i = 1;
while (i <= 5) {
    cout << i << endl;
    // Forgot i++;
}
```

Infinite loop. The program prints 1 forever because i never changes.

**Correct:**

```
int i = 1;
while (i <= 5) {
    cout << i << endl;
    i++;
}
```

In a while loop, you must update the loop variable inside the body. Forgetting to increment (or decrement) causes the condition to remain true forever. In a for loop, the update is in the header, making this mistake less likely.

### Semicolon After for Loop Header

**Wrong:**

```
for (int i = 0; i < 5; i++); {
    cout << i << " ";
}
// Compilation error: i is not declared in this scope
```

The semicolon terminates the for loop with an empty body. The block runs once, and i is out of scope.

**Correct:**

```
for (int i = 0; i < 5; i++) {
    cout << i << " ";
}
```

A semicolon after `for (...) ;` creates an empty loop body. The loop runs 5 times doing nothing. Then the block `{...}` executes once, but `i` is out of scope. This is a subtle bug.

### Modifying Range-based for Variable Without Reference

**Wrong:**

```
int arr[] = {1, 2, 3, 4, 5};
for (auto x : arr) {
    x = x * 2;  // Does NOT modify the array!
}
// arr is still {1, 2, 3, 4, 5}
```

Array elements are unchanged because x is a copy, not a reference to the element.

**Correct:**

```
int arr[] = {1, 2, 3, 4, 5};
for (auto& x : arr) {
    x = x * 2;  // Modifies the array
}
// arr is now {2, 4, 6, 8, 10}
```

In a range-based for, `auto x` creates a copy of each element. To modify elements in-place, use `auto& x` (reference). This is a common C++ pitfall.

### Using Wrong Variable in Nested Loop

**Wrong:**

```
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; i++) {  // Bug: i++ instead of j++
        cout << "* ";
    }
    cout << endl;
}
```

Infinite loop or unexpected behavior. The inner loop increments i (the outer variable) instead of j.

**Correct:**

```
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        cout << "* ";
    }
    cout << endl;
}
```

In nested loops, ensure each loop increments its own variable. Accidentally using the outer loop variable in the inner loop's update is a common copy-paste error that causes infinite loops.

### Calling strlen() in Loop Condition

**Wrong:**

```
char s[] = "hello";
for (int i = 0; i < strlen(s); i++) {
    cout << s[i];
}
// Works but is O(n^2) because strlen is O(n) and called every iteration
```

strlen() is called on every iteration, scanning the entire string each time. For a string of length n, this makes the loop O(n^2) instead of O(n).

**Correct:**

```
char s[] = "hello";
int len = strlen(s);
for (int i = 0; i < len; i++) {
    cout << s[i];
}
```

Compute the length once before the loop and store it in a variable. This is especially important in competitive programming where O(n^2) can cause TLE on large inputs.

## Summary

- The for loop has three parts: initialization (runs once), condition (checked before each iteration), and update (runs after each iteration). Use it when the number of iterations is known.
- The while loop checks its condition before each iteration. If the condition is false initially, the body never executes. Use it when the number of iterations is unknown.
- The do-while loop checks its condition after each iteration, guaranteeing at least one execution. Use it for menus, input validation, and game loops. Remember the semicolon after while(condition);.
- The range-based for loop (for(auto x : arr)) iterates over arrays and containers without an index. Use auto& to modify elements in-place; plain auto creates copies.
- break exits the innermost loop entirely. continue skips the rest of the current iteration and moves to the next. Both affect only the nearest enclosing loop.
- Nested loops: the inner loop completes all iterations for each outer iteration. Total iterations = outer * inner.
- Pattern analysis uses the row-column approach: outer loop controls rows, inner loops control spaces and characters. Express character counts as functions of the row number and total rows.
- Star patterns include right triangle (i stars in row i), inverted triangle (n-i+1 stars), pyramid (n-i spaces + 2i-1 stars), and diamond (pyramid + inverted pyramid).
- Number patterns include Floyd's triangle (consecutive numbers) and Pascal's triangle (combinatorial values C(n,r)).
- Avoid off-by-one errors by verifying the first and last values of loop variables. Use < for 0-based arrays, <= for 1-based counting.
- Avoid calling O(n) functions like strlen() in loop conditions. Compute once and store in a variable.
- Use prefix increment (++i) over postfix (i++) for non-primitive iterators to avoid creating temporary copies.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/loops-in-cpp/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/loops-in-cpp/practice/*
