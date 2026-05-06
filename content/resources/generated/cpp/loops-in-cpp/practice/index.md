---
title: "Practice: Loops (for, while, do-while) and Patterns"
description: "62 practice problems for Loops (for, while, do-while) and Patterns in C++"
slug: loops-in-cpp-practice
canonical: https://learn.modernagecoders.com/resources/cpp/loops-in-cpp/practice
category: "C++"
---
# Practice: Loops (for, while, do-while) and Patterns

**Total questions:** 62

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
for (int i = 1; i <= 5; i++) {
    cout << i << " ";
}
```

*Hint:* i goes from 1 to 5 inclusive.

**Answer:** `1 2 3 4 5 `

The loop starts at i = 1, increments by 1 each time, and stops when i > 5. Prints 1 through 5.

### Q2. [Easy] What is the output?

```
for (int i = 5; i >= 1; i--) {
    cout << i << " ";
}
```

*Hint:* Counting downward from 5 to 1.

**Answer:** `5 4 3 2 1 `

The loop starts at 5, decrements by 1, and stops when i < 1.

### Q3. [Easy] What is the output?

```
int x = 1;
while (x <= 3) {
    cout << "Hello" << endl;
    x++;
}
```

*Hint:* x starts at 1 and increments to 4.

**Answer:** `Hello`
`Hello`
`Hello`

x = 1: print. x = 2: print. x = 3: print. x = 4: condition false. Three iterations.

### Q4. [Easy] What is the output?

```
int n = 10;
do {
    cout << n << " ";
    n++;
} while (n < 5);
```

*Hint:* do-while executes the body at least once.

**Answer:** `10 `

The body runs first: prints 10, n becomes 11. Then checks 11 < 5 which is false. Loop exits. do-while always runs at least once.

### Q5. [Easy] What is the output?

```
for (int i = 0; i < 5; i++) {
    cout << i << " ";
}
```

*Hint:* Starts at 0, goes up to but not including 5.

**Answer:** `0 1 2 3 4 `

i starts at 0 and the condition is < 5 (not <=). So i takes values 0, 1, 2, 3, 4.

### Q6. [Medium] What is the output?

```
for (int i = 1; i <= 4; i++) {
    if (i == 3) continue;
    cout << i << " ";
}
```

*Hint:* continue skips the rest of the current iteration.

**Answer:** `1 2 4 `

When i = 3, continue skips the print. Values 1, 2, and 4 are printed; 3 is skipped.

### Q7. [Medium] What is the output?

```
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 2; j++) {
        cout << i << j << " ";
    }
}
```

*Hint:* Inner loop runs completely for each outer iteration.

**Answer:** `11 12 21 22 31 32 `

i=1: j=1 (11), j=2 (12). i=2: j=1 (21), j=2 (22). i=3: j=1 (31), j=2 (32). Total: 3 * 2 = 6 outputs.

### Q8. [Medium] How many times does "Hello" print?

```
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 4; j++) {
        cout << "Hello" << endl;
    }
}
```

*Hint:* Outer: 3 iterations. Inner: 4 iterations each.

**Answer:** `12` times

Outer runs 3 times (i = 0, 1, 2). For each, inner runs 4 times. Total: 3 * 4 = 12.

### Q9. [Medium] What is the output?

```
int sum = 0;
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) sum += i;
}
cout << sum;
```

*Hint:* Sum of even numbers from 1 to 10.

**Answer:** `30`

Even numbers: 2 + 4 + 6 + 8 + 10 = 30.

### Q10. [Medium] What is the output?

```
int i = 5;
while (i > 0) {
    cout << i << " ";
    i -= 2;
}
```

*Hint:* i decreases by 2 each time: 5, 3, 1, -1.

**Answer:** `5 3 1 `

i=5: print, i=3. i=3: print, i=1. i=1: print, i=-1. -1>0 false, exit.

### Q11. [Medium] What is the output?

```
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= i; j++) {
        cout << "* ";
    }
    cout << endl;
}
```

*Hint:* Row i has i stars.

**Answer:** `* `
`* * `
`* * * `

Row 1: 1 star. Row 2: 2 stars. Row 3: 3 stars. This is a right-aligned triangle pattern.

### Q12. [Hard] What is the output?

```
for (int i = 0; i < 5; i++) {
    if (i == 3) break;
    cout << i << " ";
}
```

*Hint:* break exits the loop entirely when i equals 3.

**Answer:** `0 1 2 `

i=0: print. i=1: print. i=2: print. i=3: break exits. i=4 is never reached.

### Q13. [Hard] What is the output?

```
int x = 1;
for (int i = 1; i <= 4; i++) {
    x *= i;
}
cout << x;
```

*Hint:* This computes 1 * 1 * 2 * 3 * 4.

**Answer:** `24`

x starts at 1. i=1: x=1. i=2: x=2. i=3: x=6. i=4: x=24. This is 4! (factorial).

### Q14. [Hard] What is the output?

```
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (i == j) continue;
        cout << i << j << " ";
    }
}
```

*Hint:* continue in the inner loop skips pairs where i equals j.

**Answer:** `12 13 21 23 31 32 `

Skipped pairs: (1,1), (2,2), (3,3). Remaining: 12, 13, 21, 23, 31, 32.

### Q15. [Hard] What is the output?

```
for (int i = 100; i >= 1; i /= 3) {
    cout << i << " ";
}
```

*Hint:* Integer division: 100/3=33, 33/3=11, 11/3=3, 3/3=1, 1/3=0.

**Answer:** `100 33 11 3 1 `

i=100 (print), 33 (print), 11 (print), 3 (print), 1 (print), then i=0, 0>=1 false.

### Q16. [Hard] What is the output?

```
int num = 1;
for (int i = 1; i <= 4; i++) {
    for (int j = 1; j <= i; j++) {
        cout << num++ << " ";
    }
    cout << endl;
}
```

*Hint:* This is Floyd's Triangle. num increments continuously.

**Answer:** `1 `
`2 3 `
`4 5 6 `
`7 8 9 10 `

Floyd's Triangle: row 1 has 1 number, row 2 has 2, etc. The counter num increments across all rows without resetting.

### Q17. [Easy] What is the difference between a while loop and a do-while loop?

*Hint:* Think about when the condition is checked.

**Answer:** A `while` loop checks the condition **before** each iteration; if false initially, the body never executes. A `do-while` loop checks the condition **after** each iteration, so the body always executes at least once.

Use do-while when the body must run at least once (menus, input validation). Use while when zero iterations is a valid scenario.

### Q18. [Medium] In a range-based for loop, what is the difference between `for (auto x : arr)` and `for (auto& x : arr)`?

*Hint:* Think about copies vs references.

**Answer:** `auto x` creates a **copy** of each element. Modifying x does not change the array. `auto& x` creates a **reference** to each element. Modifying x directly changes the array element.

Use auto& when you need to modify elements in-place. Use const auto& for read-only access to avoid unnecessary copies (important for large objects like strings or vectors).

### Q19. [Hard] Explain the row-column approach to analyzing pattern problems. How do you determine the formula for spaces and stars?

*Hint:* Think about what changes from row to row.

**Answer:** The row-column approach: (1) Identify the number of rows (outer loop, variable i). (2) For each row, count the number of spaces and the number of characters (stars/numbers). (3) Express these counts as functions of i and the total rows n. For a pyramid: spaces = n - i, stars = 2*i - 1. (4) Write inner loops based on these formulas.

Write out a few rows manually and observe the pattern. For row i in a pyramid of n rows: spaces go from n-1 down to 0, and stars go from 1 to 2n-1 in steps of 2. Always verify your formula for the first and last row.

### Q20. [Hard] What is the output?

```
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (j == 1) break;
        cout << i << j << " ";
    }
}
```

*Hint:* break exits only the inner loop.

**Answer:** `00 10 20 `

For each i, the inner loop: j=0 (print i0), j=1 triggers break (exits inner loop). Outer loop continues. We get: 00, 10, 20.

## Mixed Questions

### Q1. [Easy] Write a program that prints even numbers from 2 to 20 using a for loop.

*Hint:* Start at 2, increment by 2.

**Answer:** ```
for (int i = 2; i <= 20; i += 2) {
    cout << i << " ";
}
```

Starting at 2 and incrementing by 2 ensures only even numbers. Alternative: start at 1, go to 20, and use if (i % 2 == 0).

### Q2. [Easy] What is the output?

```
int sum = 0;
for (int i = 1; i <= 5; i++) {
    sum = sum + i;
}
cout << sum;
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
    cout << i << " ";
}
```

*Hint:* i is incremented before the continue check.

**Answer:** `1 2 4 5 `

i increments first: i=1 (print), i=2 (print), i=3 (continue, skip print), i=4 (print), i=5 (print). Then 5<5 false, exit.

### Q4. [Medium] Write a program to check if a number N is prime using a for loop.

*Hint:* Check divisors from 2 to sqrt(N). If any divides N, it is not prime.

**Answer:** ```
#include 
#include 
using namespace std;
int main() {
    int n;
    cin >> n;
    if (n <= 1) { cout << "Not prime" << endl; return 0; }
    bool isPrime = true;
    for (int i = 2; i <= sqrt(n); i++) {
        if (n % i == 0) { isPrime = false; break; }
    }
    cout << (isPrime ? "Prime" : "Not prime") << endl;
    return 0;
}
```

Checking up to sqrt(n) is sufficient because if n = a * b, then one of a or b must be <= sqrt(n). We break early on the first divisor found.

### Q5. [Medium] What is the output?

```
for (int i = 2; i <= 10; i += 3) {
    cout << i << " ";
}
```

*Hint:* i starts at 2 and increases by 3: 2, 5, 8, 11.

**Answer:** `2 5 8 `

i=2 (print), i=5 (print), i=8 (print), i=11 (11<=10 false, exit).

### Q6. [Medium] What is the output?

```
int i = 1;
do {
    cout << i << " ";
    i *= 2;
} while (i <= 16);
```

*Hint:* i doubles: 1, 2, 4, 8, 16, then 32.

**Answer:** `1 2 4 8 16 `

i=1 (print, i=2), i=2 (print, i=4), i=4 (print, i=8), i=8 (print, i=16), i=16 (print, i=32). Check: 32<=16 false.

### Q7. [Hard] What is the output?

```
for (int i = 1; i <= 4; i++) {
    for (int j = 1; j <= 4 - i; j++) {
        cout << "  ";
    }
    for (int j = 1; j <= i; j++) {
        cout << i << " ";
    }
    cout << endl;
}
```

*Hint:* Row i has (4-i) double-spaces followed by i copies of the number i.

**Answer:** `      1 `
`    2 2 `
`  3 3 3 `
`4 4 4 4 `

Row 1: 3 double-spaces, then "1 ". Row 2: 2 double-spaces, then "2 2 ". Row 3: 1 double-space, then "3 3 3 ". Row 4: 0 spaces, then "4 4 4 4 ".

### Q8. [Hard] What is the output?

```
int count = 0;
for (int i = 2; i <= 20; i++) {
    bool isPrime = true;
    for (int j = 2; j < i; j++) {
        if (i % j == 0) { isPrime = false; break; }
    }
    if (isPrime) count++;
}
cout << count;
```

*Hint:* Count prime numbers from 2 to 20.

**Answer:** `8`

Primes from 2 to 20: 2, 3, 5, 7, 11, 13, 17, 19. Count = 8.

### Q9. [Hard] What is the output?

```
int arr[] = {3, 7, 2, 8, 1};
int n = 5;
for (int i = 0; i < n - 1; i++) {
    for (int j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            int temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
for (int i = 0; i < n; i++) cout << arr[i] << " ";
```

*Hint:* This is the bubble sort algorithm.

**Answer:** `1 2 3 7 8 `

Bubble sort repeatedly compares adjacent elements and swaps them if they are in the wrong order. After sorting, the array is {1, 2, 3, 7, 8}.

### Q10. [Easy] Write a program that prints all numbers from 1 to 50 that are divisible by both 3 and 5.

*Hint:* n % 15 == 0 means divisible by both 3 and 5.

**Answer:** ```
for (int i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        cout << i << " ";
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
cout << result;
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
cout << count;
```

*Hint:* Count multiples of 7 from 1 to 100.

**Answer:** `14`

Multiples of 7 up to 100: 7, 14, 21, ..., 98. That is 100/7 = 14 (integer division).

### Q13. [Hard] What is the output?

```
for (int i = 1; i <= 4; i++) {
    for (int j = i; j <= 4; j++) {
        cout << j << " ";
    }
    cout << endl;
}
```

*Hint:* Row i prints numbers from i to 4.

**Answer:** `1 2 3 4 `
`2 3 4 `
`3 4 `
`4 `

Row 1: j from 1 to 4. Row 2: j from 2 to 4. Row 3: j from 3 to 4. Row 4: j = 4 only.

### Q14. [Hard] What is the output?

```
for (int i = 1; i <= 4; i++) {
    for (int j = 1; j <= i; j++) {
        cout << (i + j - 1) << " ";
    }
    cout << endl;
}
```

*Hint:* Compute (i + j - 1) for each cell.

**Answer:** `1 `
`2 3 `
`3 4 5 `
`4 5 6 7 `

Row 1: (1+1-1)=1. Row 2: (2+1-1)=2, (2+2-1)=3. Row 3: 3, 4, 5. Row 4: 4, 5, 6, 7. Each row starts at i and increments by 1.

## Multiple Choice Questions

### Q1. [Easy] Which loop is best when the number of iterations is known in advance?

**Answer:** C

**C is correct.** The for loop is designed for counted iterations with its init-condition-update structure.

### Q2. [Easy] How many times does the loop body execute?
`for (int i = 0; i < 10; i++) { ... }`

**Answer:** B

**B is correct.** i takes values 0 through 9 (10 values). When i = 10, 10 < 10 is false.

### Q3. [Easy] Which loop always executes its body at least once?

**Answer:** C

**C is correct.** do-while checks its condition after the body executes, guaranteeing at least one execution.

### Q4. [Easy] What is the correct syntax for a range-based for loop in C++?

**Answer:** B

**B is correct.** C++11 range-based for syntax is `for (type variable : container)`.

### Q5. [Easy] What does the continue statement do inside a loop?

**Answer:** B

**B is correct.** continue skips the remaining body of the current iteration and jumps to the next iteration.

### Q6. [Medium] Which creates an infinite loop in C++?

**Answer:** C

**C is correct.** for (;;) has no condition, which defaults to true, creating an infinite loop.

### Q7. [Medium] What happens if you put a semicolon after for (int i = 0; i < 5; i++); ?

**Answer:** B

**B is correct.** The semicolon acts as an empty statement, becoming the loop body. The loop runs 5 times doing nothing.

### Q8. [Medium] In a range-based for loop, how do you modify array elements in-place?

**Answer:** B

**B is correct.** auto& creates a reference, allowing modifications to affect the original array. Plain auto creates a copy.

### Q9. [Medium] What does break do inside a nested loop?

**Answer:** B

**B is correct.** break exits only the innermost enclosing loop. The outer loop continues normally.

### Q10. [Hard] What is the time complexity of this code?
`for (int i = 0; i < n; i++) { for (int j = 0; j < n; j++) { ... } }`

**Answer:** C

**C is correct.** The outer loop runs n times, and for each, the inner loop runs n times. Total: n * n = O(n^2).

### Q11. [Hard] How many iterations does this loop execute?
`for (int i = 1; i < 1000; i *= 2) { ... }`

**Answer:** B

**B is correct.** i doubles: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512. Next: 1024 >= 1000, stop. 10 iterations (log2(1000) is approximately 10).

### Q12. [Hard] What is the output?
`int x = 0; for (int i = 0; i < 3; i++) for (int j = 0; j <= i; j++) x++; cout << x;`

**Answer:** B

**B is correct.** i=0: j runs 0 to 0 (1 increment). i=1: j runs 0 to 1 (2 increments). i=2: j runs 0 to 2 (3 increments). Total: 1+2+3=6.

### Q13. [Hard] Why is calling strlen(s) in a for loop condition a performance problem?

**Answer:** B

**B is correct.** strlen() scans the entire C-string to find \0, which is O(n). Calling it in every loop iteration makes the loop O(n^2) instead of O(n). Store the length in a variable before the loop.

### Q14. [Easy] What is the output?
`for (int i = 0; i < 3; i++) cout << "Hi "; cout << "Done";`

**Answer:** A

**A is correct.** Without braces, only the first statement after for is in the loop body. So "Hi " prints 3 times, then "Done" prints once outside the loop.

## Coding Challenges

### Challenge 1. Sum of Digits

**Difficulty:** Easy

Take an integer N from the user and calculate the sum of its digits using a while loop. Example: 1234 -> 1+2+3+4 = 10.

**Constraints:**

- Use % 10 to get the last digit and / 10 to remove it.

**Sample input:**

```
Enter a number: 1234
```

**Sample output:**

```
Sum of digits: 10
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    int n;
    cout << "Enter a number: ";
    cin >> n;
    int sum = 0, temp = n;
    while (temp > 0) {
        sum += temp % 10;
        temp /= 10;
    }
    cout << "Sum of digits: " << sum << endl;
    return 0;
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

```cpp
#include <iostream>
using namespace std;
int main() {
    int n;
    cout << "Enter a number: ";
    cin >> n;
    int reversed = 0;
    while (n > 0) {
        reversed = reversed * 10 + n % 10;
        n /= 10;
    }
    cout << "Reversed: " << reversed << endl;
    return 0;
}
```

### Challenge 3. Right-Aligned Number Triangle

**Difficulty:** Medium

Print a right-aligned triangle of numbers for N rows. Row i should have numbers 1 to i, right-aligned with leading spaces.

**Constraints:**

- Use nested loops. Compute spaces as 2*(n-i).

**Sample input:**

```
n = 5
```

**Sample output:**

```
        1
      1 2
    1 2 3
  1 2 3 4
1 2 3 4 5
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    int n = 5;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) cout << "  ";
        for (int j = 1; j <= i; j++) cout << j << " ";
        cout << endl;
    }
    return 0;
}
```

### Challenge 4. Diamond Star Pattern

**Difficulty:** Medium

Print a diamond pattern of stars for N rows (upper half). The total height should be 2*N - 1.

**Constraints:**

- Upper half: spaces = n-i, stars = 2*i-1. Lower half: mirror of the upper half.

**Sample input:**

```
n = 4
```

**Sample output:**

```
   *
  ***
 *****
*******
 *****
  ***
   *
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    int n = 4;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) cout << " ";
        for (int j = 1; j <= 2 * i - 1; j++) cout << "*";
        cout << endl;
    }
    for (int i = n - 1; i >= 1; i--) {
        for (int j = 1; j <= n - i; j++) cout << " ";
        for (int j = 1; j <= 2 * i - 1; j++) cout << "*";
        cout << endl;
    }
    return 0;
}
```

### Challenge 5. Pascal's Triangle

**Difficulty:** Hard

Print the first N rows of Pascal's Triangle. Each element is the sum of the two elements above it.

**Constraints:**

- Use the combinatorial formula: C(n, r) = C(n, r-1) * (n - r + 1) / r. No factorial functions needed.

**Sample input:**

```
n = 6
```

**Sample output:**

```
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
1 5 10 10 5 1
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    int n = 6;
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

### Challenge 6. Hollow Rectangle

**Difficulty:** Medium

Print a hollow rectangle of stars with R rows and C columns. Only the border positions should have stars; interior positions should have spaces.

**Constraints:**

- A position (i, j) is on the border if i == 1 or i == R or j == 1 or j == C.

**Sample input:**

```
rows = 4, cols = 6
```

**Sample output:**

```
******
*    *
*    *
******
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    int r = 4, c = 6;
    for (int i = 1; i <= r; i++) {
        for (int j = 1; j <= c; j++) {
            if (i == 1 || i == r || j == 1 || j == c)
                cout << "*";
            else
                cout << " ";
        }
        cout << endl;
    }
    return 0;
}
```

### Challenge 7. GCD Using Euclidean Algorithm

**Difficulty:** Medium

Find the GCD of two numbers using the Euclidean algorithm with a while loop.

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

```cpp
#include <iostream>
using namespace std;
int main() {
    int a, b;
    cout << "Enter two numbers: ";
    cin >> a >> b;
    int origA = a, origB = b;
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    cout << "GCD of " << origA << " and " << origB << ": " << a << endl;
    return 0;
}
```

### Challenge 8. Armstrong Number Checker

**Difficulty:** Hard

Check if a number is an Armstrong number. An N-digit number is Armstrong if the sum of its digits, each raised to the power N, equals the number itself. Example: 153 = 1^3 + 5^3 + 3^3 = 153.

**Constraints:**

- First count digits, then compute sum of powers using a loop.

**Sample input:**

```
Enter a number: 153
```

**Sample output:**

```
153 is an Armstrong number
```

**Solution:**

```cpp
#include <iostream>
#include <cmath>
using namespace std;
int main() {
    int n;
    cout << "Enter a number: ";
    cin >> n;
    int digits = 0, temp = n;
    while (temp > 0) { digits++; temp /= 10; }
    int sum = 0;
    temp = n;
    while (temp > 0) {
        int d = temp % 10;
        sum += pow(d, digits);
        temp /= 10;
    }
    cout << n << (sum == n ? " is" : " is not") << " an Armstrong number" << endl;
    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/loops-in-cpp/*
