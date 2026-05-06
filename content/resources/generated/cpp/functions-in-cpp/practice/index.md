---
title: "Practice: Functions, Overloading, and Recursion"
description: "60 practice problems for Functions, Overloading, and Recursion in C++"
slug: functions-in-cpp-practice
canonical: https://learn.modernagecoders.com/resources/cpp/functions-in-cpp/practice
category: "C++"
---
# Practice: Functions, Overloading, and Recursion

**Total questions:** 60

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
void greet() {
    cout << "Hello!";
}
int main() {
    greet();
    greet();
    return 0;
}
```

*Hint:* greet() is called twice.

**Answer:** `Hello!Hello!`

greet() prints "Hello!" each time it is called. Two calls produce two outputs concatenated (no newline between them).

### Q2. [Easy] What is the output?

```
int add(int a, int b) {
    return a + b;
}
int main() {
    cout << add(3, 7);
    return 0;
}
```

*Hint:* add returns the sum of its arguments.

**Answer:** `10`

add(3, 7) returns 3 + 7 = 10, which is printed by cout.

### Q3. [Easy] What is the output?

```
void modify(int x) {
    x = 99;
}
int main() {
    int a = 5;
    modify(a);
    cout << a;
    return 0;
}
```

*Hint:* Is this pass-by-value or pass-by-reference?

**Answer:** `5`

modify takes x by value (a copy). Changing x inside does not affect a. a remains 5.

### Q4. [Easy] What is the output?

```
void modify(int& x) {
    x = 99;
}
int main() {
    int a = 5;
    modify(a);
    cout << a;
    return 0;
}
```

*Hint:* Note the & in the parameter.

**Answer:** `99`

modify takes x by reference (alias to a). Changing x directly changes a. a becomes 99.

### Q5. [Easy] What is the output?

```
int square(int n) {
    return n * n;
}
int main() {
    cout << square(4) + square(3);
    return 0;
}
```

*Hint:* Compute each function call, then add.

**Answer:** `25`

square(4) = 16, square(3) = 9. 16 + 9 = 25.

### Q6. [Medium] What is the output?

```
void swap(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
}
int main() {
    int x = 10, y = 20;
    swap(x, y);
    cout << x << " " << y;
    return 0;
}
```

*Hint:* Are a and b copies or references?

**Answer:** `10 20`

swap takes a and b by value (copies). The swap happens on local copies. x and y remain 10 and 20.

### Q7. [Medium] What is the output?

```
int add(int a, int b) { return a + b; }
double add(double a, double b) { return a + b; }

int main() {
    cout << add(3, 5) << " ";
    cout << add(3.5, 2.5);
    return 0;
}
```

*Hint:* The compiler selects the overloaded version based on argument types.

**Answer:** `8 6`

add(3, 5) matches int version (returns 8). add(3.5, 2.5) matches double version (returns 6.0, printed as 6).

### Q8. [Medium] What is the output?

```
void print(int a, int b = 10, int c = 20) {
    cout << a << " " << b << " " << c << endl;
}
int main() {
    print(1);
    print(1, 2);
    print(1, 2, 3);
    return 0;
}
```

*Hint:* Default arguments fill in from right to left.

**Answer:** `1 10 20`
`1 2 20`
`1 2 3`

print(1): b defaults to 10, c defaults to 20. print(1,2): c defaults to 20. print(1,2,3): no defaults used.

### Q9. [Medium] What is the output?

```
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
int main() {
    cout << factorial(5);
    return 0;
}
```

*Hint:* Trace: 5 * 4 * 3 * 2 * 1.

**Answer:** `120`

factorial(5) = 5 * factorial(4) = 5 * 4 * factorial(3) = ... = 5 * 4 * 3 * 2 * 1 = 120.

### Q10. [Medium] What is the output?

```
int fib(int n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
int main() {
    for (int i = 0; i < 7; i++)
        cout << fib(i) << " ";
    return 0;
}
```

*Hint:* Fibonacci: 0, 1, 1, 2, 3, 5, 8.

**Answer:** `0 1 1 2 3 5 8 `

fib(0)=0, fib(1)=1, fib(2)=1, fib(3)=2, fib(4)=3, fib(5)=5, fib(6)=8. Each value is the sum of the two preceding values.

### Q11. [Hard] What is the output?

```
void modify(int* p) {
    *p = *p + 10;
}
int main() {
    int a = 5;
    modify(&a);
    cout << a;
    return 0;
}
```

*Hint:* *p dereferences the pointer to access the value.

**Answer:** `15`

modify receives the address of a. *p accesses the value at that address (5), adds 10, and stores 15 back. a is now 15.

### Q12. [Hard] Trace the recursive calls. What is the output?

```
int sumDigits(int n) {
    if (n == 0) return 0;
    return (n % 10) + sumDigits(n / 10);
}
int main() {
    cout << sumDigits(1234);
    return 0;
}
```

*Hint:* 1234 % 10 = 4, 1234 / 10 = 123. Recurse on 123.

**Answer:** `10`

sumDigits(1234) = 4 + sumDigits(123) = 4 + 3 + sumDigits(12) = 4 + 3 + 2 + sumDigits(1) = 4 + 3 + 2 + 1 + sumDigits(0) = 4 + 3 + 2 + 1 + 0 = 10.

### Q13. [Hard] What is the output?

```
int power(int base, int exp) {
    if (exp == 0) return 1;
    return base * power(base, exp - 1);
}
int main() {
    cout << power(2, 8);
    return 0;
}
```

*Hint:* 2^8 = 256.

**Answer:** `256`

power(2,8) = 2 * power(2,7) = ... = 2^8 = 256. Eight recursive calls before hitting the base case.

### Q14. [Hard] What is the output?

```
void mystery(int n) {
    if (n == 0) return;
    mystery(n / 2);
    cout << n % 2;
}
int main() {
    mystery(13);
    return 0;
}
```

*Hint:* The print happens after the recursive call. Think about what n % 2 and n / 2 do.

**Answer:** `1101`

This prints the binary representation of 13. mystery(13)->mystery(6)->mystery(3)->mystery(1)->mystery(0) returns. Then prints: 1%2=1, 3%2=1, 6%2=0, 13%2=1. Result: 1101 (13 in binary).

### Q15. [Easy] What is the difference between pass-by-value and pass-by-reference in C++?

*Hint:* Think about copies vs aliases.

**Answer:** **Pass-by-value** creates a copy of the argument. Changes to the parameter do not affect the original. **Pass-by-reference** (using &) creates an alias to the original variable. Changes to the parameter directly affect the original.

Use pass-by-value for small types when you do not need to modify the original. Use pass-by-reference to modify the original or to avoid copying large objects (use const& for read-only access to large objects).

### Q16. [Medium] What is function overloading? Can two functions differ only in return type?

*Hint:* Think about how the compiler decides which function to call.

**Answer:** Function overloading allows multiple functions with the same name but different **parameter lists** (different number or types). The compiler selects the correct version based on the arguments at the call site. Two functions that differ **only in return type** cannot be overloaded because the compiler cannot determine which to call from the function call alone.

int foo() and double foo() cannot coexist because foo() at the call site is ambiguous. But int foo(int) and int foo(double) can coexist because foo(5) and foo(5.0) are distinguishable.

### Q17. [Hard] What is tail recursion? Why is it significant for optimization?

*Hint:* Think about what happens after the recursive call returns.

**Answer:** Tail recursion is when the recursive call is the **last operation** in the function -- there is no pending computation after the call returns. Example: `return factorial(n-1, acc*n)` is tail-recursive; `return n * factorial(n-1)` is not (multiplication is pending). Some compilers can optimize tail recursion into a loop (tail call optimization), eliminating stack frame overhead and preventing stack overflow.

In non-tail recursion, each call must wait for the next to finish before performing remaining computation. In tail recursion, since nothing remains after the call, the current frame can be reused. GCC/Clang with -O2 typically perform this optimization.

### Q18. [Hard] What is the output?

```
void func(int a, int b = 5) {
    cout << a + b << " ";
}
void func(int a) {
    cout << a << " ";
}
int main() {
    func(10, 20);
    func(10);
    return 0;
}
```

*Hint:* Does func(10) match the first function (using default) or the second?

**Answer:** Compilation error: ambiguous call

func(10) is ambiguous: it matches both func(int, int=5) (using default for b) and func(int). The compiler cannot decide which to call and reports an error. Avoid ambiguity between overloaded functions and default arguments.

### Q19. [Hard] Trace the recursion. What is the output?

```
void printReverse(int n) {
    if (n == 0) return;
    cout << n % 10 << " ";
    printReverse(n / 10);
}
int main() {
    printReverse(5432);
    return 0;
}
```

*Hint:* The print happens before the recursive call.

**Answer:** `2 3 4 5 `

printReverse(5432): print 2, call printReverse(543). printReverse(543): print 3, call printReverse(54). printReverse(54): print 4, call printReverse(5). printReverse(5): print 5, call printReverse(0). Base case. Output: 2 3 4 5.

### Q20. [Medium] What is the output?

```
int countDown(int n) {
    if (n <= 0) return 0;
    cout << n << " ";
    return 1 + countDown(n - 1);
}
int main() {
    int count = countDown(4);
    cout << endl << "Count: " << count;
    return 0;
}
```

*Hint:* The function prints and counts how many times it runs.

**Answer:** `4 3 2 1 `
`Count: 4`

countDown(4): prints 4, returns 1+countDown(3). countDown(3): prints 3, returns 1+countDown(2). countDown(2): prints 2, returns 1+countDown(1). countDown(1): prints 1, returns 1+countDown(0). countDown(0): returns 0. Total: 1+1+1+1+0 = 4.

## Mixed Questions

### Q1. [Easy] Write a function `bool isEven(int n)` that returns true if n is even and false otherwise. Call it from main.

*Hint:* Check n % 2 == 0.

**Answer:** ```
#include 
using namespace std;
bool isEven(int n) {
    return n % 2 == 0;
}
int main() {
    int x;
    cin >> x;
    cout << x << (isEven(x) ? " is even" : " is odd") << endl;
    return 0;
}
```

The function returns a bool. The ternary operator in main selects the message based on the return value.

### Q2. [Easy] What is the output?

```
int max(int a, int b) {
    return (a > b) ? a : b;
}
int main() {
    cout << max(15, 8) << " " << max(3, 12);
    return 0;
}
```

*Hint:* max returns the larger of two values.

**Answer:** `15 12`

max(15, 8): 15 > 8 is true, returns 15. max(3, 12): 3 > 12 is false, returns 12.

### Q3. [Medium] What is the output?

```
void increment(int& a, int& b) {
    a++;
    b++;
}
int main() {
    int x = 10, y = 20;
    increment(x, y);
    increment(x, y);
    cout << x << " " << y;
    return 0;
}
```

*Hint:* Both parameters are references. increment is called twice.

**Answer:** `12 22`

First call: x becomes 11, y becomes 21. Second call: x becomes 12, y becomes 22. References modify the originals.

### Q4. [Medium] What is the output?

```
int multiply(int a, int b = 2) {
    return a * b;
}
int main() {
    cout << multiply(5) << " " << multiply(5, 3);
    return 0;
}
```

*Hint:* b defaults to 2 when not provided.

**Answer:** `10 15`

multiply(5): b defaults to 2, returns 5*2=10. multiply(5,3): b is 3, returns 5*3=15.

### Q5. [Hard] Trace the recursion. What is the output?

```
int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}
int main() {
    cout << gcd(48, 18);
    return 0;
}
```

*Hint:* This is the Euclidean algorithm. Trace: gcd(48,18) -> gcd(18,12) -> gcd(12,6) -> gcd(6,0).

**Answer:** `6`

gcd(48,18): 18!=0, call gcd(18, 48%18=12). gcd(18,12): call gcd(12, 18%12=6). gcd(12,6): call gcd(6, 12%6=0). gcd(6,0): b==0, return 6.

### Q6. [Medium] Write a function that takes an array and its size and returns the sum of all elements. Use pass-by-pointer for the array.

*Hint:* An array decays to a pointer when passed to a function.

**Answer:** ```
#include 
using namespace std;
int arraySum(int* arr, int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum;
}
int main() {
    int arr[] = {10, 20, 30, 40, 50};
    cout << "Sum: " << arraySum(arr, 5) << endl;
    return 0;
}
```

Arrays decay to pointers when passed to functions. You must pass the size separately because sizeof(arr) inside the function gives the pointer size, not the array size.

### Q7. [Hard] What is the output?

```
int f(int n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    return f(n - 1) + f(n - 2);
}
int main() {
    cout << f(6);
    return 0;
}
```

*Hint:* This computes the nth Fibonacci number.

**Answer:** `8`

f(6) = f(5) + f(4) = (f(4)+f(3)) + (f(3)+f(2)) = ... = 8. Fibonacci sequence: 0,1,1,2,3,5,8. f(6) = 8.

### Q8. [Hard] How many times is the function f called when computing f(5)?

```
int f(int n) {
    if (n <= 1) return n;
    return f(n-1) + f(n-2);
}
```

*Hint:* Draw the recursion tree.

**Answer:** `15` times

f(5) calls f(4) and f(3). f(4) calls f(3) and f(2). f(3) calls f(2) and f(1). f(2) calls f(1) and f(0). Counting all nodes in the recursion tree: f(5), f(4), f(3), f(3), f(2), f(2), f(1), f(2), f(1), f(1), f(0), f(1), f(0), f(1), f(0) = 15 calls.

### Q9. [Hard] What is the output?

```
void fun(int n) {
    if (n > 0) {
        fun(n - 1);
        cout << n << " ";
        fun(n - 1);
    }
}
int main() {
    fun(3);
    return 0;
}
```

*Hint:* Each call makes two recursive calls. Print happens between them.

**Answer:** `1 2 1 3 1 2 1 `

fun(3): fun(2), print 3, fun(2). fun(2): fun(1), print 2, fun(1). fun(1): fun(0), print 1, fun(0). Expanding fully: 1 2 1 3 1 2 1.

### Q10. [Easy] Write overloaded functions `display` that print an int, a double, and a string, each on a new line.

*Hint:* Three functions with the same name, different parameter types.

**Answer:** ```
#include 
#include 
using namespace std;
void display(int x) { cout << "int: " << x << endl; }
void display(double x) { cout << "double: " << x << endl; }
void display(string x) { cout << "string: " << x << endl; }
int main() {
    display(42);
    display(3.14);
    display(string("Hello"));
    return 0;
}
```

Three overloaded versions of display. The compiler selects based on argument type: 42 matches int, 3.14 matches double, and string matches the string version.

### Q11. [Medium] What is the output?

```
int count = 0;
void recurse(int n) {
    count++;
    if (n <= 1) return;
    recurse(n / 2);
}
int main() {
    recurse(16);
    cout << count;
    return 0;
}
```

*Hint:* n halves each time: 16, 8, 4, 2, 1.

**Answer:** `5`

recurse(16): count=1, call recurse(8). recurse(8): count=2, call recurse(4). recurse(4): count=3, call recurse(2). recurse(2): count=4, call recurse(1). recurse(1): count=5, return. Total: 5.

### Q12. [Hard] Write a recursive function to check if a string is a palindrome. Use pass-by-reference for the string.

*Hint:* Compare first and last characters, then recurse on the substring between them.

**Answer:** ```
#include 
#include 
using namespace std;
bool isPalindrome(const string& s, int left, int right) {
    if (left >= right) return true;
    if (s[left] != s[right]) return false;
    return isPalindrome(s, left + 1, right - 1);
}
int main() {
    string s;
    cin >> s;
    cout << (isPalindrome(s, 0, s.length() - 1) ? "Palindrome" : "Not palindrome") << endl;
    return 0;
}
```

Base case: left >= right means all characters matched. Recursive case: if first and last characters match, check the inner substring. Uses const string& to avoid copying the string at each level.

### Q13. [Hard] What is the output?

```
int func(int n) {
    if (n == 0) return 1;
    return 2 * func(n - 1);
}
int main() {
    cout << func(5);
    return 0;
}
```

*Hint:* Trace: func(5) = 2*func(4) = 2*2*func(3) = ...

**Answer:** `32`

func(5) = 2*func(4) = 2*2*func(3) = 2*2*2*func(2) = 2*2*2*2*func(1) = 2*2*2*2*2*func(0) = 2^5 * 1 = 32.

## Multiple Choice Questions

### Q1. [Easy] What is a function prototype in C++?

**Answer:** B

**B is correct.** A prototype declares the function signature (return type, name, parameters) so the compiler knows it exists before it is defined.

### Q2. [Easy] What is the default parameter passing mechanism in C++?

**Answer:** C

**C is correct.** Unless you use & (reference) or * (pointer), C++ passes arguments by value (copies).

### Q3. [Easy] Which keyword is used for a function that does not return a value?

**Answer:** B

**B is correct.** void indicates the function returns nothing.

### Q4. [Easy] What is the base case in recursion?

**Answer:** B

**B is correct.** The base case is the condition where the function returns without making another recursive call, stopping the recursion.

### Q5. [Medium] Which of the following is NOT a valid overloading?

**Answer:** C

**C is correct.** int func(int) and double func(int) differ only in return type. Return type alone does not distinguish overloaded functions.

### Q6. [Medium] Where must default arguments be placed in a function's parameter list?

**Answer:** B

**B is correct.** Default arguments must be specified from right to left. You cannot have a non-default parameter after a default one.

### Q7. [Medium] What happens if a recursive function has no base case?

**Answer:** C

**C is correct.** Without a base case, the function calls itself infinitely, filling the call stack until it overflows, causing a crash.

### Q8. [Medium] What is the time complexity of the naive recursive Fibonacci function fib(n)?

**Answer:** C

**C is correct.** Each call branches into two recursive calls, creating a binary tree of calls. The total number of calls is approximately 2^n, making it exponential.

### Q9. [Hard] How many moves does Tower of Hanoi require for n disks?

**Answer:** C

**C is correct.** The recurrence T(n) = 2*T(n-1) + 1 with T(1) = 1 solves to T(n) = 2^n - 1.

### Q10. [Hard] What does the inline keyword do in C++?

**Answer:** B

**B is correct.** inline is a hint to replace the call with the body, eliminating call overhead. The compiler may ignore it for large or complex functions.

### Q11. [Hard] What is printed?
`void f(int n) { if(n>0) { f(n-1); cout << n << " "; } } int main() { f(4); }`

**Answer:** B

**B is correct.** The print happens after the recursive call returns. So the deepest call (n=1) prints first, then n=2, n=3, n=4. Output: 1 2 3 4.

### Q12. [Hard] When passing a large object to a function for read-only access, which is the best approach?

**Answer:** C

**C is correct.** `const&` avoids the overhead of copying (unlike pass-by-value) while preventing modification (unlike plain reference). It is the standard practice for read-only access to large objects.

### Q13. [Medium] What does a function return if it has a non-void return type but no return statement?

**Answer:** D

**D is correct.** In C++, reaching the end of a non-void function without a return statement is undefined behavior. The compiler may warn but does not guarantee an error. main() is the only exception (implicitly returns 0).

## Coding Challenges

### Challenge 1. Recursive Sum of Array

**Difficulty:** Easy

Write a recursive function that computes the sum of elements in an integer array.

**Constraints:**

- Use recursion with the array, starting index, and size as parameters.

**Sample input:**

```
Array: {1, 2, 3, 4, 5}
```

**Sample output:**

```
Sum: 15
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int arraySum(int arr[], int n) {
    if (n <= 0) return 0;
    return arr[n - 1] + arraySum(arr, n - 1);
}
int main() {
    int arr[] = {1, 2, 3, 4, 5};
    cout << "Sum: " << arraySum(arr, 5) << endl;
    return 0;
}
```

### Challenge 2. Reverse a String Using Recursion

**Difficulty:** Easy

Write a recursive function that reverses a string and returns the result.

**Constraints:**

- Use recursion. Base case: empty or single character string.

**Sample input:**

```
hello
```

**Sample output:**

```
olleh
```

**Solution:**

```cpp
#include <iostream>
#include <string>
using namespace std;
string reverseStr(const string& s) {
    if (s.length() <= 1) return s;
    return reverseStr(s.substr(1)) + s[0];
}
int main() {
    string s;
    cin >> s;
    cout << reverseStr(s) << endl;
    return 0;
}
```

### Challenge 3. Power Function (Efficient)

**Difficulty:** Medium

Write a recursive function that computes base^exp in O(log exp) time using the fast exponentiation method: if exp is even, power(b, e) = power(b, e/2)^2; if odd, b * power(b, e-1).

**Constraints:**

- Must be O(log n) recursive calls, not O(n).

**Sample input:**

```
2 ^ 10
```

**Sample output:**

```
1024
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
long long fastPow(int base, int exp) {
    if (exp == 0) return 1;
    if (exp % 2 == 0) {
        long long half = fastPow(base, exp / 2);
        return half * half;
    }
    return base * fastPow(base, exp - 1);
}
int main() {
    cout << fastPow(2, 10) << endl;
    cout << fastPow(3, 7) << endl;
    return 0;
}
```

### Challenge 4. Tower of Hanoi

**Difficulty:** Medium

Implement the Tower of Hanoi for n disks. Print each move and the total number of moves.

**Constraints:**

- Use recursion with from, to, and auxiliary pegs as char parameters.

**Sample input:**

```
n = 3
```

**Sample output:**

```
Move disk 1 from A to C
... (7 moves total)
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int moveCount = 0;
void hanoi(int n, char from, char to, char aux) {
    if (n == 1) {
        cout << "Move disk 1 from " << from << " to " << to << endl;
        moveCount++;
        return;
    }
    hanoi(n - 1, from, aux, to);
    cout << "Move disk " << n << " from " << from << " to " << to << endl;
    moveCount++;
    hanoi(n - 1, aux, to, from);
}
int main() {
    int n;
    cin >> n;
    hanoi(n, 'A', 'C', 'B');
    cout << "Total moves: " << moveCount << endl;
    return 0;
}
```

### Challenge 5. Function Overloading: Area Calculator

**Difficulty:** Easy

Write overloaded area() functions for circle (radius), rectangle (length, width), and triangle (base, height). Print results from main.

**Constraints:**

- Three overloaded functions with different parameter signatures.

**Sample input:**

```
Circle r=5, Rectangle 4x6, Triangle b=3 h=8
```

**Sample output:**

```
Circle: 78.5398
Rectangle: 24
Triangle: 12
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
double area(double radius) { return 3.14159 * radius * radius; }
int area(int length, int width) { return length * width; }
double area(int base, double height) { return 0.5 * base * height; }
int main() {
    cout << "Circle: " << area(5.0) << endl;
    cout << "Rectangle: " << area(4, 6) << endl;
    cout << "Triangle: " << area(3, 8.0) << endl;
    return 0;
}
```

### Challenge 6. Count Digits Recursively

**Difficulty:** Easy

Write a recursive function that counts the number of digits in a positive integer.

**Constraints:**

- Base case: n < 10 (single digit). Recursive case: 1 + countDigits(n / 10).

**Sample input:**

```
Enter number: 12345
```

**Sample output:**

```
Digits: 5
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int countDigits(int n) {
    if (n < 10) return 1;
    return 1 + countDigits(n / 10);
}
int main() {
    int n;
    cout << "Enter number: ";
    cin >> n;
    cout << "Digits: " << countDigits(n) << endl;
    return 0;
}
```

### Challenge 7. Binary Search Using Recursion

**Difficulty:** Hard

Implement binary search recursively on a sorted array. Return the index of the target or -1 if not found.

**Constraints:**

- Pass the array, left index, right index, and target as parameters. Each call halves the search space.

**Sample input:**

```
Array: {2, 5, 8, 12, 16, 23, 38, 56, 72, 91}, target = 23
```

**Sample output:**

```
Found at index: 5
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int binarySearch(int arr[], int left, int right, int target) {
    if (left > right) return -1;
    int mid = left + (right - left) / 2;
    if (arr[mid] == target) return mid;
    if (arr[mid] > target) return binarySearch(arr, left, mid - 1, target);
    return binarySearch(arr, mid + 1, right, target);
}
int main() {
    int arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
    int n = 10, target = 23;
    int idx = binarySearch(arr, 0, n - 1, target);
    if (idx != -1) cout << "Found at index: " << idx << endl;
    else cout << "Not found" << endl;
    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/functions-in-cpp/*
