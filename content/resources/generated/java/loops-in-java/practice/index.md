---
title: "Practice: Loops in Java (for, while, do-while)"
description: "58 practice problems for Loops in Java (for, while, do-while) in Java"
slug: loops-in-java-practice
canonical: https://learn.modernagecoders.com/resources/java/loops-in-java/practice/
category: "Java"
---
# Practice: Loops in Java (for, while, do-while)

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
for (int i = 1; i <= 5; i++) {
    System.out.print(i + " ");
}
```

*Hint:* i goes from 1 to 5 inclusive.

**Answer:** `1 2 3 4 5 `

The loop starts at i = 1, increments by 1 each time, and stops when i > 5. Prints 1 through 5.

### Q2. [Easy] What is the output?

```
for (int i = 5; i >= 1; i--) {
    System.out.print(i + " ");
}
```

*Hint:* Counting downward from 5 to 1.

**Answer:** `5 4 3 2 1 `

The loop starts at 5, decrements by 1, and stops when i < 1. Prints 5 down to 1.

### Q3. [Easy] What is the output?

```
int x = 1;
while (x <= 3) {
    System.out.println("Hello");
    x++;
}
```

*Hint:* x starts at 1 and increments to 4.

**Answer:** `Hello`
`Hello`
`Hello`

x = 1: 1 <= 3 true, print Hello, x = 2. x = 2: 2 <= 3 true, print Hello, x = 3. x = 3: 3 <= 3 true, print Hello, x = 4. x = 4: 4 <= 3 false, exit. Prints 3 times.

### Q4. [Easy] What is the output?

```
int n = 10;
do {
    System.out.println(n);
    n++;
} while (n < 5);
```

*Hint:* do-while executes the body at least once before checking the condition.

**Answer:** `10`

The body runs first: prints 10, n becomes 11. Then checks 11 < 5 which is false. The loop exits. do-while always runs at least once.

### Q5. [Easy] What is the output?

```
for (int i = 0; i < 5; i++) {
    System.out.print(i + " ");
}
```

*Hint:* Starts at 0, goes up to but not including 5.

**Answer:** `0 1 2 3 4 `

i starts at 0 and the condition is `i < 5` (not <=). So i takes values 0, 1, 2, 3, 4. Five iterations, matching typical array indexing.

### Q6. [Medium] What is the output?

```
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 2; j++) {
        System.out.print(i + "" + j + " ");
    }
}
```

*Hint:* Inner loop runs completely for each outer iteration.

**Answer:** `11 12 21 22 31 32 `

i=1: j=1 (print 11), j=2 (print 12). i=2: j=1 (print 21), j=2 (print 22). i=3: j=1 (print 31), j=2 (print 32). Total: 3 * 2 = 6 outputs.

### Q7. [Medium] What is the output?

```
int sum = 0;
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}
System.out.println(sum);
```

*Hint:* Sum of even numbers from 1 to 10.

**Answer:** `30`

Even numbers: 2 + 4 + 6 + 8 + 10 = 30.

### Q8. [Medium] What is the output?

```
for (int i = 1; i <= 4; i++) {
    if (i == 3) continue;
    System.out.print(i + " ");
}
```

*Hint:* continue skips the rest of the current iteration.

**Answer:** `1 2 4 `

When i = 3, `continue` skips the print statement and moves to the next iteration (i = 4). Values 1, 2, and 4 are printed; 3 is skipped.

### Q9. [Medium] How many times does "Hello" print?

```
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 4; j++) {
        System.out.println("Hello");
    }
}
```

*Hint:* Outer: 3 iterations. Inner: 4 iterations each.

**Answer:** `12` times

The outer loop runs 3 times (i = 0, 1, 2). For each, the inner loop runs 4 times (j = 0, 1, 2, 3). Total: 3 * 4 = 12.

### Q10. [Medium] What is the output?

```
int i = 5;
while (i > 0) {
    System.out.print(i + " ");
    i -= 2;
}
```

*Hint:* i decreases by 2 each time: 5, 3, 1, then -1.

**Answer:** `5 3 1 `

i=5: 5>0 true, print 5, i=3. i=3: 3>0 true, print 3, i=1. i=1: 1>0 true, print 1, i=-1. i=-1: -1>0 false, exit.

### Q11. [Hard] What is the output?

```
for (int i = 0; i < 5; i++) {
    if (i == 3) break;
    System.out.print(i + " ");
}
```

*Hint:* break exits the loop entirely when i equals 3.

**Answer:** `0 1 2 `

i=0: print 0. i=1: print 1. i=2: print 2. i=3: break exits the loop. i=4 is never reached.

### Q12. [Hard] What is the output?

```
int x = 1;
for (int i = 1; i <= 4; i++) {
    x *= i;
}
System.out.println(x);
```

*Hint:* This computes x = 1 * 1 * 2 * 3 * 4.

**Answer:** `24`

x starts at 1. i=1: x=1*1=1. i=2: x=1*2=2. i=3: x=2*3=6. i=4: x=6*4=24. This is 4! (factorial).

### Q13. [Hard] What is the output?

```
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (i == j) continue;
        System.out.print(i + "" + j + " ");
    }
}
```

*Hint:* continue in the inner loop skips pairs where i equals j.

**Answer:** `12 13 21 23 31 32 `

When i==j, the pair is skipped. Skipped: (1,1), (2,2), (3,3). Remaining: 12, 13, 21, 23, 31, 32.

### Q14. [Medium] What is the difference between a while loop and a do-while loop? When would you choose one over the other?

*Hint:* Think about when the condition is checked.

**Answer:** A `while` loop checks the condition **before** each iteration; if the condition is false initially, the body never executes. A `do-while` loop checks the condition **after** each iteration, so the body always executes at least once. Use do-while when the body must run at least once (menus, input validation). Use while when the body should not run if the condition is initially false.

Example: reading a file while data exists (while). Showing a menu at least once (do-while). The choice depends on whether zero iterations is a valid scenario.

### Q15. [Hard] Can you convert any for loop to a while loop and vice versa? Explain.

*Hint:* Think about the three parts of a for loop.

**Answer:** Yes, any for loop can be rewritten as a while loop and vice versa. A for loop `for (init; cond; update) { body; }` is equivalent to `init; while (cond) { body; update; }`. However, a for loop's init variable has block scope (only visible inside the loop), while the while version's variable remains in the enclosing scope. The do-while loop is the exception: its guarantee of at least one execution can be replicated with a while loop by executing the body once before the loop or using a flag.

In practice, use for when you have a clear counter, while for condition-based loops, and do-while for at-least-once scenarios. They are interchangeable but each has a natural use case.

### Q16. [Easy] What is the output?

```
for (int i = 0; i < 3; i++) {
    System.out.print("Hi ");
}
```

*Hint:* i goes 0, 1, 2. Three iterations.

**Answer:** `Hi Hi Hi `

The loop runs 3 times (i = 0, 1, 2), printing "Hi " each time.

### Q17. [Medium] What is the output?

```
for (int i = 2; i <= 10; i += 3) {
    System.out.print(i + " ");
}
```

*Hint:* i starts at 2 and increases by 3: 2, 5, 8, 11.

**Answer:** `2 5 8 `

i = 2 (print), i = 5 (print), i = 8 (print), i = 11 (11 <= 10 is false, exit). Three values printed.

### Q18. [Medium] What is the output?

```
int[] arr = {4, 7, 2, 9};
int sum = 0;
for (int n : arr) {
    sum += n;
}
System.out.println("Sum: " + sum);
```

*Hint:* Add all elements: 4 + 7 + 2 + 9.

**Answer:** `Sum: 22`

The for-each loop adds each element: 4 + 7 + 2 + 9 = 22.

### Q19. [Hard] What is the output?

```
int i = 1;
do {
    System.out.print(i + " ");
    i *= 2;
} while (i <= 16);
```

*Hint:* i doubles: 1, 2, 4, 8, 16, then 32.

**Answer:** `1 2 4 8 16 `

i = 1 (print, i=2), i = 2 (print, i=4), i = 4 (print, i=8), i = 8 (print, i=16), i = 16 (print, i=32). Check: 32 <= 16 false, exit.

### Q20. [Hard] What is the output?

```
for (int i = 100; i >= 1; i /= 3) {
    System.out.print(i + " ");
}
```

*Hint:* Integer division: 100/3=33, 33/3=11, 11/3=3, 3/3=1, 1/3=0.

**Answer:** `100 33 11 3 1 `

i = 100 (print), 33 (print), 11 (print), 3 (print), 1 (print), then i = 0, 0 >= 1 is false.

## Mixed Questions

### Q1. [Easy] Write a program that prints even numbers from 2 to 20 using a for loop.

*Hint:* Start at 2, increment by 2.

**Answer:** ```
for (int i = 2; i <= 20; i += 2) {
    System.out.print(i + " ");
}
```

Starting at 2 and incrementing by 2 ensures only even numbers. Alternative: start at 1, go to 20, and check `if (i % 2 == 0)`.

### Q2. [Easy] What is the output?

```
int sum = 0;
for (int i = 1; i <= 5; i++) {
    sum = sum + i;
}
System.out.println(sum);
```

*Hint:* Add 1 + 2 + 3 + 4 + 5.

**Answer:** `15`

sum accumulates: 0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15.

### Q3. [Medium] What is the output?

```
int i = 0;
while (i < 5) {
    i++;
    if (i == 3) continue;
    System.out.print(i + " ");
}
```

*Hint:* i is incremented before the continue check.

**Answer:** `1 2 4 5 `

i increments first: i=1 (print 1), i=2 (print 2), i=3 (continue, skip print), i=4 (print 4), i=5 (print 5). i=5 after print: 5<5 false, exit.

### Q4. [Medium] Write a program to compute the factorial of a given number N using a while loop.

*Hint:* Factorial(5) = 5 * 4 * 3 * 2 * 1 = 120.

**Answer:** ```
import java.util.Scanner;

public class Factorial {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        long factorial = 1;
        int i = 1;
        while (i <= n) {
            factorial *= i;
            i++;
        }
        System.out.println(n + "! = " + factorial);
        sc.close();
    }
}
```

We use `long` for factorial because factorials grow rapidly (13! exceeds int range). The while loop multiplies 1 * 2 * 3 * ... * n.

### Q5. [Medium] What is the output?

```
for (int i = 10; i >= 1; i /= 2) {
    System.out.print(i + " ");
}
```

*Hint:* Integer division: 10/2=5, 5/2=2, 2/2=1, 1/2=0.

**Answer:** `10 5 2 1 `

i=10: print 10, i=5. i=5: print 5, i=2 (integer division). i=2: print 2, i=1. i=1: print 1, i=0. i=0: 0>=1 false, exit.

### Q6. [Hard] What is the output?

```
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("* ");
    }
    System.out.println();
}
```

*Hint:* Inner loop runs from 1 to i. So row 1 has 1 star, row 2 has 2, etc.

**Answer:** `* 
* * 
* * * 
* * * * 
* * * * * `

Row i prints i stars. Row 1: 1 star. Row 2: 2 stars. Row 3: 3 stars. Row 4: 4 stars. Row 5: 5 stars. This forms a right triangle pattern.

### Q7. [Hard] What is the output?

```
int count = 0;
for (int i = 2; i <= 20; i++) {
    boolean isPrime = true;
    for (int j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) count++;
}
System.out.println(count);
```

*Hint:* Count prime numbers from 2 to 20.

**Answer:** `8`

Primes from 2 to 20: 2, 3, 5, 7, 11, 13, 17, 19. Count = 8.

### Q8. [Hard] What is the output?

```
int[] arr = {3, 7, 2, 8, 1};
for (int i = 0; i < arr.length - 1; i++) {
    for (int j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            int temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
for (int n : arr) {
    System.out.print(n + " ");
}
```

*Hint:* This is the bubble sort algorithm.

**Answer:** `1 2 3 7 8 `

This is bubble sort. It repeatedly compares adjacent elements and swaps them if they are in the wrong order. After sorting, the array is {1, 2, 3, 7, 8}.

### Q9. [Hard] What is the output?

```
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (j == 1) break;
        System.out.print(i + "" + j + " ");
    }
}
```

*Hint:* break exits only the inner loop.

**Answer:** `00 10 20 `

For each i, the inner loop starts at j=0 (prints i0), then j=1 triggers break (exits inner loop only). So we get: i=0 prints 00, i=1 prints 10, i=2 prints 20. The outer loop continues normally.

### Q10. [Easy] Write a program that prints all numbers from 1 to 50 that are divisible by both 3 and 5.

*Hint:* Check if n % 15 == 0 (or n % 3 == 0 && n % 5 == 0).

**Answer:** ```
for (int i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        System.out.print(i + " ");
    }
}
```

Numbers divisible by both 3 and 5 are divisible by 15: 15, 30, 45.

### Q11. [Medium] What is the output?

```
int n = 5;
int result = 1;
for (int i = n; i >= 1; i--) {
    result *= i;
}
System.out.println(result);
```

*Hint:* This computes 5 * 4 * 3 * 2 * 1.

**Answer:** `120`

This computes factorial: 5 * 4 * 3 * 2 * 1 = 120.

### Q12. [Hard] What is the output?

```
int count = 0;
for (int i = 1; i <= 100; i++) {
    if (i % 7 == 0) count++;
}
System.out.println(count);
```

*Hint:* Count multiples of 7 from 1 to 100.

**Answer:** `14`

Multiples of 7 up to 100: 7, 14, 21, ..., 98. That is 100/7 = 14 (integer division).

### Q13. [Hard] What is the output?

```
String s = "Hello";
for (int i = s.length() - 1; i >= 0; i--) {
    System.out.print(s.charAt(i));
}
```

*Hint:* Iterate the string in reverse.

**Answer:** `olleH`

Starting from the last character (index 4 = 'o') to the first (index 0 = 'H'), printing each gives "olleH".

## Multiple Choice Questions

### Q1. [Easy] Which loop is best when the number of iterations is known in advance?

A. while
B. do-while
C. for
D. for-each

**Answer:** C

**C is correct.** The `for` loop is designed for counted iterations with its init-condition-update structure.

### Q2. [Easy] How many times does the loop body execute?
`for (int i = 0; i < 10; i++) { ... }`

A. 9
B. 10
C. 11
D. Infinite

**Answer:** B

**B is correct.** i takes values 0 through 9 (10 values). When i = 10, `10 < 10` is false, so the loop exits.

### Q3. [Easy] Which loop always executes its body at least once?

A. for
B. while
C. do-while
D. for-each

**Answer:** C

**C is correct.** The do-while loop checks its condition after the body executes, guaranteeing at least one execution.

### Q4. [Easy] What is the correct syntax for a for-each loop over an int array?

A. for (int i in arr)
B. for (int n : arr)
C. foreach (int n : arr)
D. for each (int n in arr)

**Answer:** B

**B is correct.** Java's for-each syntax is `for (type variable : arrayOrCollection)`. The `in` keyword (option A) is not used in Java.

### Q5. [Easy] What does the continue statement do inside a loop?

A. Exits the loop entirely
B. Skips to the next iteration
C. Pauses the loop
D. Restarts the loop from the beginning

**Answer:** B

**B is correct.** `continue` skips the remaining body of the current iteration and jumps to the next iteration (checking the condition first).

### Q6. [Medium] What is the output?
`for (int i = 1; i <= 3; i++) System.out.print(i); System.out.print(4);`

A. 1234
B. 12344
C. 1234 (then 4 on a new line)
D. Error

**Answer:** A

**A is correct.** Without curly braces, only the first statement after for is in the loop body. So print(i) runs 3 times (prints 123). Then print(4) runs once outside the loop (prints 4). Total: 1234.

### Q7. [Medium] Which creates an infinite loop?

A. for (int i = 0; i < 10; i++) {}
B. while (false) {}
C. for (;;) {}
D. do {} while (false);

**Answer:** C

**C is correct.** `for (;;)` has no condition, which defaults to true, creating an infinite loop. `while (false)` never executes. `do {} while (false)` executes once and exits.

### Q8. [Medium] What happens if you put a semicolon after for (int i = 0; i < 5; i++);?

A. Compilation error
B. The loop runs with an empty body
C. The loop does not run at all
D. Infinite loop

**Answer:** B

**B is correct.** The semicolon acts as an empty statement, becoming the loop body. The loop runs 5 times doing nothing. Any code in a block after it runs once, outside the loop.

### Q9. [Medium] Can you modify array elements using a for-each loop?

A. Yes, always
B. Yes, for object arrays only
C. No, the loop variable is a copy
D. Only with the final keyword

**Answer:** C

**C is correct** for primitive arrays. The for-each variable is a copy of the element, so assigning to it does not change the original array. For object arrays, you can modify the object's fields (since you have a reference copy), but you cannot replace the reference itself.

### Q10. [Medium] What does break do inside a nested loop?

A. Exits all loops
B. Exits only the innermost loop
C. Exits the method
D. Causes a compilation error in nested loops

**Answer:** B

**B is correct.** `break` exits only the innermost enclosing loop. The outer loop continues normally. To exit multiple loops, use labeled break.

### Q11. [Hard] What is the time complexity of this code?
`for (int i = 0; i < n; i++) { for (int j = 0; j < n; j++) { ... } }`

A. O(n)
B. O(n log n)
C. O(n^2)
D. O(2^n)

**Answer:** C

**C is correct.** The outer loop runs n times. For each outer iteration, the inner loop runs n times. Total: n * n = n^2 operations. This is quadratic time complexity.

### Q12. [Hard] How many iterations does this loop execute?
`for (int i = 1; i < 1000; i *= 2) { ... }`

A. 500
B. 10
C. 999
D. Infinite

**Answer:** B

**B is correct.** i doubles each time: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512. The next value would be 1024, which is not < 1000. So 10 iterations. This is logarithmic growth: approximately log2(1000) = ~10.

### Q13. [Hard] What is the output?
`int x = 0; for (int i = 0; i < 3; i++) for (int j = 0; j <= i; j++) x++; System.out.println(x);`

A. 3
B. 6
C. 9
D. 12

**Answer:** B

**B is correct.** i=0: j runs 0 to 0 (1 increment). i=1: j runs 0 to 1 (2 increments). i=2: j runs 0 to 2 (3 increments). Total: 1 + 2 + 3 = 6.

### Q14. [Hard] Which of the following is NOT a valid for loop in Java?

A. for (;;) {}
B. for (int i=0, j=10; i<j; i++, j--) {}
C. for (int i=0; i<5; ) { i++; }
D. for (int i=0, long j=10; i<5; i++) {}

**Answer:** D

**D is correct.** In a for loop's initialization, you can declare multiple variables of the **same type** (option B). You cannot declare variables of different types (int and long) in the same initialization. The other options are all valid.

### Q15. [Easy] What is the syntax for a do-while loop?

A. do { } while (condition)
B. do { } while (condition);
C. while (condition) do { }
D. loop { } until (condition);

**Answer:** B

**B is correct.** The do-while loop syntax requires a semicolon after the while condition: `do { body } while (condition);`.

### Q16. [Medium] How many times does the body of this loop execute?
`int i = 10; while (i < 10) { i++; }`

A. 0
B. 1
C. 10
D. Infinite

**Answer:** A

**A is correct.** The condition `10 < 10` is false from the start, so the while loop body never executes.

### Q17. [Hard] What is the output?
`for (int i = 0; i < 5; i++) { if (i % 2 == 0) continue; System.out.print(i); }`

A. 024
B. 13
C. 01234
D. 12345

**Answer:** B

**B is correct.** When i is even (0, 2, 4), continue skips the print. When i is odd (1, 3), it prints. Output: 13.

## Coding Challenges

### Challenge 1. Sum of Digits

**Difficulty:** Easy

Take an integer N from the user and calculate the sum of its digits using a while loop. Example: 1234 -> 1+2+3+4 = 10.

**Constraints:**

- Use % 10 to get the last digit and / 10 to remove it. Use while loop.

**Sample input:**

```
Enter a number: 1234
```

**Sample output:**

```
Sum of digits: 10
```

**Solution:**

```java
import java.util.Scanner;

public class SumDigits {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int sum = 0;
        int temp = n;
        while (temp > 0) {
            sum += temp % 10;
            temp /= 10;
        }
        System.out.println("Sum of digits: " + sum);
        sc.close();
    }
}
```

### Challenge 2. Reverse a Number

**Difficulty:** Easy

Take an integer and print its reverse. Example: 12345 -> 54321.

**Constraints:**

- Use a while loop with % 10 and / 10.

**Sample input:**

```
Enter a number: 12345
```

**Sample output:**

```
Reversed: 54321
```

**Solution:**

```java
import java.util.Scanner;

public class ReverseNum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int reversed = 0;
        while (n > 0) {
            reversed = reversed * 10 + n % 10;
            n /= 10;
        }
        System.out.println("Reversed: " + reversed);
        sc.close();
    }
}
```

### Challenge 3. Fibonacci Series

**Difficulty:** Medium

Print the first N Fibonacci numbers. Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, ...

**Constraints:**

- Use a for loop. Track the previous two numbers.

**Sample input:**

```
Enter N: 8
```

**Sample output:**

```
0 1 1 2 3 5 8 13
```

**Solution:**

```java
import java.util.Scanner;

public class Fibonacci {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        int a = 0, b = 1;
        for (int i = 0; i < n; i++) {
            System.out.print(a + " ");
            int next = a + b;
            a = b;
            b = next;
        }
        System.out.println();
        sc.close();
    }
}
```

### Challenge 4. Prime Number Checker

**Difficulty:** Medium

Take a number and determine if it is a prime number. Optimize: check divisors only up to the square root of N.

**Constraints:**

- Use a for loop up to Math.sqrt(n). Handle edge cases (0, 1, negative).

**Sample input:**

```
Enter a number: 29
```

**Sample output:**

```
29 is a prime number
```

**Solution:**

```java
import java.util.Scanner;

public class PrimeCheck {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        if (n <= 1) {
            System.out.println(n + " is not a prime number");
        } else {
            boolean isPrime = true;
            for (int i = 2; i <= Math.sqrt(n); i++) {
                if (n % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            System.out.println(n + (isPrime ? " is a prime number" : " is not a prime number"));
        }
        sc.close();
    }
}
```

### Challenge 5. Number Guessing Game

**Difficulty:** Medium

Generate a random number between 1 and 100. Let the user guess until they get it right. Give hints (too high/too low) and count the number of attempts.

**Constraints:**

- Use do-while loop. Use Math.random() or java.util.Random.

**Sample input:**

```
Guess: 50
Too high!
Guess: 25
Too low!
Guess: 37
Correct!
```

**Sample output:**

```
You guessed it in 3 attempts!
```

**Solution:**

```java
import java.util.Scanner;
import java.util.Random;

public class GuessGame {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int target = new Random().nextInt(100) + 1;
        int guess, attempts = 0;
        do {
            System.out.print("Guess (1-100): ");
            guess = sc.nextInt();
            attempts++;
            if (guess < target) System.out.println("Too low!");
            else if (guess > target) System.out.println("Too high!");
            else System.out.println("Correct! You guessed it in " + attempts + " attempts!");
        } while (guess != target);
        sc.close();
    }
}
```

### Challenge 6. GCD Using Euclidean Algorithm

**Difficulty:** Medium

Find the GCD (Greatest Common Divisor) of two numbers using the Euclidean algorithm with a while loop.

**Constraints:**

- Use while loop: while (b != 0) { temp = b; b = a % b; a = temp; }

**Sample input:**

```
Enter two numbers: 48 18
```

**Sample output:**

```
GCD: 6
```

**Solution:**

```java
import java.util.Scanner;

public class GCD {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter two numbers: ");
        int a = sc.nextInt(), b = sc.nextInt();
        int origA = a, origB = b;
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        System.out.println("GCD of " + origA + " and " + origB + ": " + a);
        sc.close();
    }
}
```

### Challenge 7. Armstrong Number Checker

**Difficulty:** Hard

Check if a number is an Armstrong number. An N-digit number is Armstrong if the sum of its digits each raised to the power N equals the number itself. Example: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153.

**Constraints:**

- First count digits, then compute sum of powers.

**Sample input:**

```
Enter a number: 153
```

**Sample output:**

```
153 is an Armstrong number
```

**Solution:**

```java
import java.util.Scanner;

public class Armstrong {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int digits = String.valueOf(n).length();
        int sum = 0, temp = n;
        while (temp > 0) {
            int d = temp % 10;
            sum += Math.pow(d, digits);
            temp /= 10;
        }
        System.out.println(n + (sum == n ? " is" : " is not") + " an Armstrong number");
        sc.close();
    }
}
```

### Challenge 8. Print All Prime Numbers in a Range

**Difficulty:** Hard

Take two numbers L and R from the user and print all prime numbers in the range [L, R] inclusive. Also print the count of primes found.

**Constraints:**

- Use nested loops: outer for range, inner for prime checking. Optimize with sqrt.

**Sample input:**

```
Enter range: 10 30
```

**Sample output:**

```
Primes: 11 13 17 19 23 29
Count: 6
```

**Solution:**

```java
import java.util.Scanner;

public class PrimesInRange {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter range: ");
        int l = sc.nextInt(), r = sc.nextInt();
        int count = 0;
        System.out.print("Primes: ");
        for (int num = l; num <= r; num++) {
            if (num <= 1) continue;
            boolean isPrime = true;
            for (int i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) { isPrime = false; break; }
            }
            if (isPrime) {
                System.out.print(num + " ");
                count++;
            }
        }
        System.out.println("\nCount: " + count);
        sc.close();
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/loops-in-java/*
