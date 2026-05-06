---
title: "Practice: Methods in Java"
description: "62 practice problems for Methods in Java in Java"
slug: methods-in-java-practice
canonical: https://learn.modernagecoders.com/resources/java/methods-in-java/practice/
category: "Java"
---
# Practice: Methods in Java

**Total questions:** 62

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
public class Test {
    static int square(int n) {
        return n * n;
    }
    public static void main(String[] args) {
        System.out.println(square(5));
        System.out.println(square(3) + square(4));
    }
}
```

*Hint:* square(5) returns 25. square(3) returns 9, square(4) returns 16. Then add them.

**Answer:** `25`
`25`

`square(5)` returns 5*5 = 25. `square(3)` returns 9 and `square(4)` returns 16. 9 + 16 = 25.

### Q2. [Easy] What is the output?

```
static void printStars(int n) {
    for (int i = 0; i < n; i++) {
        System.out.print("*");
    }
    System.out.println();
}

printStars(3);
printStars(5);
```

*Hint:* The method prints n stars followed by a newline.

**Answer:** `***`
`*****`

`printStars(3)` prints 3 stars and a newline. `printStars(5)` prints 5 stars and a newline. The method is void — it does not return a value.

### Q3. [Easy] What is the output?

```
static int max(int a, int b) {
    if (a > b) return a;
    return b;
}

System.out.println(max(10, 20));
System.out.println(max(50, 30));
System.out.println(max(7, 7));
```

*Hint:* The method returns the larger of the two values. What if they are equal?

**Answer:** `20`
`50`
`7`

`max(10, 20)`: 10 is not > 20, so return 20. `max(50, 30)`: 50 > 30, so return 50. `max(7, 7)`: 7 is not > 7, so return b which is also 7.

### Q4. [Easy] What is the output?

```
static void swap(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
    System.out.println("Inside: a=" + a + " b=" + b);
}

int x = 10, y = 20;
swap(x, y);
System.out.println("Outside: x=" + x + " y=" + y);
```

*Hint:* Java is pass-by-value. The swap happens on copies of x and y.

**Answer:** `Inside: a=20 b=10`
`Outside: x=10 y=20`

The swap works correctly inside the method because `a` and `b` are local copies. But the original variables `x` and `y` are unchanged because Java passes primitives by value. The swap has no effect on the caller's variables.

### Q5. [Medium] What is the output?

```
static int add(int a, int b) {
    return a + b;
}
static double add(double a, double b) {
    return a + b;
}
static int add(int a, int b, int c) {
    return a + b + c;
}

System.out.println(add(2, 3));
System.out.println(add(2.5, 3.5));
System.out.println(add(1, 2, 3));
```

*Hint:* The compiler selects the overloaded method based on the argument types and count.

**Answer:** `5`
`6.0`
`6`

`add(2, 3)` calls the int version (two ints), returning 5. `add(2.5, 3.5)` calls the double version (two doubles), returning 6.0. `add(1, 2, 3)` calls the three-int version, returning 6.

### Q6. [Medium] What is the output?

```
static void modify(int[] arr) {
    arr[0] = 100;
}

int[] numbers = {1, 2, 3};
modify(numbers);
System.out.println(numbers[0]);
System.out.println(numbers[1]);
```

*Hint:* Arrays are objects. The method receives a copy of the reference, but it points to the same array.

**Answer:** `100`
`2`

The method receives a copy of the reference to the array. Through this reference, it modifies `arr[0]` to 100. Since both the method's parameter and the caller's variable point to the same array object, the change is visible to the caller. `numbers[1]` was not modified, so it remains 2.

### Q7. [Medium] What is the output?

```
static int sum(int... nums) {
    int total = 0;
    for (int n : nums) total += n;
    return total;
}

System.out.println(sum());
System.out.println(sum(5));
System.out.println(sum(1, 2, 3, 4));
```

*Hint:* Varargs can be called with 0 or more arguments. With 0 arguments, the loop body never executes.

**Answer:** `0`
`5`
`10`

`sum()` passes an empty array, so total stays 0. `sum(5)` passes a one-element array, total = 5. `sum(1, 2, 3, 4)` passes four elements, total = 1+2+3+4 = 10.

### Q8. [Medium] What is the output?

```
static int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

System.out.println(factorial(1));
System.out.println(factorial(5));
System.out.println(factorial(0));
```

*Hint:* factorial(1) and factorial(0) both hit the base case. factorial(5) = 5*4*3*2*1.

**Answer:** `1`
`120`
`1`

`factorial(1)`: n<=1 is true, return 1. `factorial(5)`: 5 * 4 * 3 * 2 * 1 = 120. `factorial(0)`: n<=1 is true (0 <= 1), return 1.

### Q9. [Hard] What is the output?

```
static void display(int a, double b) {
    System.out.println("int, double");
}
static void display(double a, int b) {
    System.out.println("double, int");
}

display(5, 3.0);
display(3.0, 5);
```

*Hint:* The compiler matches arguments to parameter types in order.

**Answer:** `int, double`
`double, int`

`display(5, 3.0)`: 5 is int, 3.0 is double — matches `(int, double)`. `display(3.0, 5)`: 3.0 is double, 5 is int — matches `(double, int)`. The order of parameter types matters for overloading.

### Q10. [Hard] What is the output?

```
static int count = 0;

static void recursive(int n) {
    if (n <= 0) return;
    count++;
    recursive(n - 1);
    count++;
    System.out.println("n=" + n + " count=" + count);
}

recursive(3);
System.out.println("Final count: " + count);
```

*Hint:* count++ happens before AND after the recursive call. The print happens after the recursive call returns.

**Answer:** `n=1 count=4`
`n=2 count=5`
`n=3 count=6`
`Final count: 6`

The first `count++` runs for n=3,2,1 (count becomes 3). Then n=0 returns. Post-recursion `count++` and print runs for n=1 (count=4), then n=2 (count=5), then n=3 (count=6). The total is 6: three pre-recursion increments and three post-recursion increments.

### Q11. [Hard] What is the output?

```
static String mystery(int n) {
    if (n <= 0) return "";
    return mystery(n - 1) + n;
}

System.out.println(mystery(5));
```

*Hint:* The recursive call happens BEFORE the concatenation. The deepest call returns first.

**Answer:** `12345`

The method builds a string by first recursing to the base case, then appending n as it returns: mystery(0) returns "", mystery(1) returns "" + 1 = "1", mystery(2) returns "1" + 2 = "12", and so on up to mystery(5) returning "12345".

### Q12. [Hard] What is the output?

```
static void test(Object o) {
    System.out.println("Object");
}
static void test(String s) {
    System.out.println("String");
}
static void test(int i) {
    System.out.println("int");
}

test("Hello");
test(5);
test(null);
```

*Hint:* When multiple methods match, the most specific one is chosen. String is more specific than Object. null matches both Object and String.

**Answer:** `String`
`int`
`String`

`test("Hello")`: String is more specific than Object, so the String version is called. `test(5)`: exact match with int. `test(null)`: null can match both Object and String, but String is more specific (subclass of Object), so the String version is chosen.

## Mixed Questions

### Q1. [Easy] What is the output?

```
static boolean isPrime(int n) {
    if (n < 2) return false;
    for (int i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

System.out.println(isPrime(7));
System.out.println(isPrime(4));
System.out.println(isPrime(1));
```

*Hint:* 7 has no divisors from 2 to sqrt(7). 4 is divisible by 2. 1 is less than 2.

**Answer:** `true`
`false`
`false`

7 is prime (no divisor found from 2 to 2). 4 is not prime (divisible by 2). 1 is not prime (n < 2 returns false).

### Q2. [Easy] What is the output?

```
static String repeat(String s, int n) {
    String result = "";
    for (int i = 0; i < n; i++) {
        result += s;
    }
    return result;
}

System.out.println(repeat("Ha", 3));
System.out.println(repeat("*", 5));
```

*Hint:* The method concatenates the string s with itself n times.

**Answer:** `HaHaHa`
`*****`

`repeat("Ha", 3)` concatenates "Ha" three times: "HaHaHa". `repeat("*", 5)` concatenates "*" five times: "*****".

### Q3. [Easy] What is the output?

```
static int doubleIt(int n) {
    return n * 2;
}

System.out.println(doubleIt(doubleIt(3)));
System.out.println(doubleIt(5) + doubleIt(10));
```

*Hint:* The inner doubleIt() call is evaluated first, and its result is passed to the outer call.

**Answer:** `12`
`30`

`doubleIt(3)` returns 6, then `doubleIt(6)` returns 12. `doubleIt(5)` returns 10 and `doubleIt(10)` returns 20, giving 10 + 20 = 30.

### Q4. [Medium] What is the output?

```
static int fibonacci(int n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

for (int i = 0; i < 7; i++) {
    System.out.print(fibonacci(i) + " ");
}
```

*Hint:* Fibonacci: 0, 1, 1, 2, 3, 5, 8, ...

**Answer:** `0 1 1 2 3 5 8 `

fibonacci(0)=0, fibonacci(1)=1, fibonacci(2)=1, fibonacci(3)=2, fibonacci(4)=3, fibonacci(5)=5, fibonacci(6)=8. Each value is the sum of the two preceding values.

### Q5. [Medium] What is the output?

```
static void modifyString(String s) {
    s = s + " World";
    System.out.println("Inside: " + s);
}

String msg = "Hello";
modifyString(msg);
System.out.println("Outside: " + msg);
```

*Hint:* String is an object, but it is immutable. Reassigning the local variable does not affect the caller.

**Answer:** `Inside: Hello World`
`Outside: Hello`

The method receives a copy of the reference to the String "Hello". The concatenation `s + " World"` creates a new String and assigns it to the local variable `s`. The caller's variable `msg` still references the original "Hello" because Strings are immutable and the reference was not changed in the caller's scope.

### Q6. [Medium] What is the output?

```
static int compute(int x) {
    if (x > 0) {
        return x + compute(x - 2);
    }
    return 0;
}

System.out.println(compute(5));
System.out.println(compute(6));
```

*Hint:* Trace: compute(5) = 5 + compute(3) = 5 + 3 + compute(1) = 5 + 3 + 1 + compute(-1) = 9.

**Answer:** `9`
`12`

compute(5) = 5 + compute(3) = 5 + 3 + compute(1) = 5 + 3 + 1 + compute(-1) = 5 + 3 + 1 + 0 = 9. compute(6) = 6 + compute(4) = 6 + 4 + compute(2) = 6 + 4 + 2 + compute(0) = 6 + 4 + 2 + 0 = 12.

### Q7. [Medium] What is the difference between method overloading and method overriding?

*Hint:* One happens at compile time within a class. The other happens at runtime between classes.

**Answer:** **Overloading** occurs within the same class — multiple methods with the same name but different parameter lists. Resolved at compile time. **Overriding** occurs in a subclass — a method with the same name and same parameter list as a parent class method. Resolved at runtime (dynamic dispatch).

Overloading is compile-time polymorphism: the compiler picks the method based on argument types. Overriding is runtime polymorphism: the JVM picks the method based on the actual object type. Overloaded methods can have different return types. Overridden methods must have the same return type (or covariant).

### Q8. [Hard] What is the output?

```
static int mystery(int a, int b) {
    if (b == 0) return a;
    return mystery(b, a % b);
}

System.out.println(mystery(48, 18));
System.out.println(mystery(100, 25));
```

*Hint:* This is a well-known algorithm. Trace: mystery(48, 18) -> mystery(18, 12) -> mystery(12, 6) -> mystery(6, 0) -> 6.

**Answer:** `6`
`25`

This is the Euclidean algorithm for GCD (Greatest Common Divisor). mystery(48, 18) -> mystery(18, 12) -> mystery(12, 6) -> mystery(6, 0) -> 6. mystery(100, 25) -> mystery(25, 0) -> 25. GCD(48,18)=6 and GCD(100,25)=25.

### Q9. [Hard] Explain why Java is called 'pass-by-value' even when passing objects. What exactly is being copied?

*Hint:* Think about what a reference variable holds and what gets copied when you pass it to a method.

**Answer:** Java is pass-by-value because the **value of the variable** is always copied. For primitives, the value is the actual data (e.g., 42). For objects, the value is the **reference (memory address)**, not the object itself. The method receives a copy of this reference. Both the caller's reference and the method's reference point to the same object, so modifications through either reference affect the same object. However, reassigning the method's reference does not affect the caller's reference.

This distinction matters: pass-by-reference (as in C++) would mean the method receives the actual variable from the caller, allowing it to reassign what the caller's variable points to. In Java, since only a copy of the reference is passed, reassignment inside the method has no effect on the caller.

### Q10. [Hard] What is the output?

```
static void hanoi(int n, char from, char to, char aux) {
    if (n == 0) return;
    hanoi(n - 1, from, aux, to);
    System.out.println(from + " -> " + to);
    hanoi(n - 1, aux, to, from);
}

hanoi(3, 'A', 'C', 'B');
```

*Hint:* Tower of Hanoi with 3 disks produces 7 moves (2^n - 1).

**Answer:** `A -> C`
`A -> B`
`C -> B`
`A -> C`
`B -> A`
`B -> C`
`A -> C`

Tower of Hanoi is a classic recursion problem. For 3 disks: move 2 disks from A to B (using C), move disk 3 from A to C, move 2 disks from B to C (using A). The recursion produces 2^3 - 1 = 7 moves.

## Multiple Choice Questions

### Q1. [Easy] What is the return type of a method that does not return any value?

A. null
B. void
C. None
D. empty

**Answer:** B

**B is correct.** `void` indicates that a method does not return any value. `null` (A) is a value, not a type. `None` (C) is used in Python, not Java. `empty` (D) is not a keyword.

### Q2. [Easy] Which of the following is valid method overloading?

A. Same name, same parameters, different return type
B. Same name, different parameter types
C. Different name, same parameters
D. Same name, same parameters, different access modifier

**Answer:** B

**B is correct.** Overloading requires the same name with different parameter lists (number, types, or order). Differing only in return type (A) or access modifier (D) causes a compilation error. Different names (C) are just different methods, not overloading.

### Q3. [Easy] What happens if a non-void method does not have a return statement?

A. It returns null
B. It returns 0
C. Compilation error
D. Runtime error

**Answer:** C

**C is correct.** The Java compiler enforces that every non-void method must return a value on all possible code paths. A missing return statement results in a compilation error: 'missing return statement'.

### Q4. [Easy] In Java, the main method must be:

A. public and static
B. private and static
C. public and non-static
D. protected and static

**Answer:** A

**A is correct.** The JVM calls the main method without creating an object, so it must be static. It must be public so the JVM can access it from outside the class. The exact signature is: `public static void main(String[] args)`.

### Q5. [Medium] What is Java's parameter passing mechanism?

A. Pass-by-reference for all types
B. Pass-by-value for primitives, pass-by-reference for objects
C. Pass-by-value for all types
D. Pass-by-pointer for arrays

**Answer:** C

**C is correct.** Java is strictly pass-by-value for ALL types. For primitives, the value is copied. For objects, the value of the reference (memory address) is copied. The method cannot change what the caller's variable points to, only the state of the pointed-to object.

### Q6. [Medium] What is the output of this code?

```
static int add(int a, int b) { return a + b; }
static double add(int a, int b) { return a + b; }
```

A. The int version is called when possible
B. The double version is called when possible
C. Compilation error — duplicate method
D. Runtime error

**Answer:** C

**C is correct.** These two methods have the same name and the same parameter list (int, int). They differ only in return type, which is not sufficient for overloading. The compiler reports a duplicate method error.

### Q7. [Medium] Where must a varargs parameter appear in a method's parameter list?

A. Anywhere in the list
B. At the beginning
C. At the end
D. It must be the only parameter

**Answer:** C

**C is correct.** A varargs parameter must be the last parameter in the list. `void example(String label, int... values)` is valid. `void example(int... values, String label)` is not. This ensures the compiler can unambiguously determine which arguments belong to the varargs.

### Q8. [Medium] What happens when a recursive method has no base case?

A. It runs forever
B. It returns null
C. It throws StackOverflowError
D. Compilation error

**Answer:** C

**C is correct.** Without a base case, the method calls itself indefinitely. Each call adds a frame to the call stack. When the stack runs out of space, the JVM throws a `StackOverflowError`. It does not run forever (A) because stack space is finite.

### Q9. [Hard] What is the output?

```
static void test(int... a) { System.out.println("varargs"); }
static void test(int a) { System.out.println("single"); }

test(5);
```

A. varargs
B. single
C. Compilation error — ambiguous
D. Runtime error

**Answer:** B

**B is correct.** When a method call matches both a specific parameter and a varargs parameter, the specific parameter wins. `test(5)` matches `test(int a)` exactly, so "single" is printed. Varargs has lower priority in overload resolution.

### Q10. [Hard] Can a static method access instance variables directly?

A. Yes, always
B. Yes, if the variable is public
C. No, static methods can only access static members directly
D. No, static methods cannot access any variables

**Answer:** C

**C is correct.** Static methods do not have an implicit `this` reference because they belong to the class, not to any specific object. To access instance variables from a static method, you need an explicit object reference. Static methods can directly access static variables and call other static methods.

### Q11. [Hard] What is the time complexity of the naive recursive Fibonacci implementation?

A. O(n)
B. O(n log n)
C. O(2^n)
D. O(n^2)

**Answer:** C

**C is correct.** The naive recursive Fibonacci has exponential time complexity O(2^n) because each call branches into two sub-calls, and many subproblems are recomputed. For example, fibonacci(5) computes fibonacci(3) twice and fibonacci(2) three times. Memoization or iteration reduces this to O(n).

### Q12. [Easy] What is the correct syntax for calling a static method from another class?

A. ClassName.methodName()
B. methodName(ClassName)
C. new ClassName().methodName()
D. ClassName->methodName()

**Answer:** A

**A is correct.** Static methods are called using the class name: `Math.sqrt(25)`, `Arrays.sort(arr)`. Option C creates an object first, which is unnecessary for static methods. Option D uses arrow syntax which is not valid in Java.

## Coding Challenges

### Challenge 1. Calculate Power Without Math.pow()

**Difficulty:** Easy

Aarav needs a method that calculates base raised to the power of exponent using a loop (not Math.pow()). Write a method power(int base, int exp) that returns the result. Test with power(2, 10) and power(5, 3).

**Constraints:**

- Use a for loop. Assume exponent is non-negative.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
2^10 = 1024
5^3 = 125
```

**Solution:**

```java
public class PowerCalc {
    static long power(int base, int exp) {
        long result = 1;
        for (int i = 0; i < exp; i++) {
            result *= base;
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println("2^10 = " + power(2, 10));
        System.out.println("5^3 = " + power(5, 3));
    }
}
```

### Challenge 2. Count Digits Using Recursion

**Difficulty:** Easy

Write a recursive method countDigits(int n) that returns the number of digits in a positive integer. Test with 12345 and 7.

**Constraints:**

- Use recursion, not String conversion. Base case: single digit number.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Digits in 12345: 5
Digits in 7: 1
```

**Solution:**

```java
public class CountDigits {
    static int countDigits(int n) {
        if (n < 10) return 1;
        return 1 + countDigits(n / 10);
    }

    public static void main(String[] args) {
        System.out.println("Digits in 12345: " + countDigits(12345));
        System.out.println("Digits in 7: " + countDigits(7));
    }
}
```

### Challenge 3. Overloaded Area Calculator

**Difficulty:** Easy

Write three overloaded methods named area(): one for a circle (takes radius), one for a rectangle (takes length and width), and one for a triangle (takes base and height). Test all three.

**Constraints:**

- Use method overloading. Return double. Format output to 2 decimal places.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Circle area: 78.54
Rectangle area: 30.00
Triangle area: 24.00
```

**Solution:**

```java
public class AreaCalculator {
    static double area(double radius) {
        return Math.PI * radius * radius;
    }

    static double area(double length, double width) {
        return length * width;
    }

    static double area(double base, double height, boolean isTriangle) {
        return 0.5 * base * height;
    }

    public static void main(String[] args) {
        System.out.printf("Circle area: %.2f%n", area(5.0));
        System.out.printf("Rectangle area: %.2f%n", area(5.0, 6.0));
        System.out.printf("Triangle area: %.2f%n", area(8.0, 6.0, true));
    }
}
```

### Challenge 4. Sum of Digits Using Recursion

**Difficulty:** Medium

Priya wants a recursive method sumOfDigits(int n) that returns the sum of all digits in a number. Test with 12345 (expected: 15) and 9999 (expected: 36).

**Constraints:**

- Use recursion. Extract last digit with n % 10, remove it with n / 10.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Sum of digits of 12345: 15
Sum of digits of 9999: 36
```

**Solution:**

```java
public class SumOfDigits {
    static int sumOfDigits(int n) {
        if (n == 0) return 0;
        return n % 10 + sumOfDigits(n / 10);
    }

    public static void main(String[] args) {
        System.out.println("Sum of digits of 12345: " + sumOfDigits(12345));
        System.out.println("Sum of digits of 9999: " + sumOfDigits(9999));
    }
}
```

### Challenge 5. Palindrome Checker Using Recursion

**Difficulty:** Medium

Write a recursive method isPalindrome(String s, int left, int right) that checks if a string is a palindrome. Test with "racecar" and "hello".

**Constraints:**

- Use recursion. Compare characters from both ends moving inward.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
racecar is a palindrome: true
hello is a palindrome: false
```

**Solution:**

```java
public class PalindromeRecursive {
    static boolean isPalindrome(String s, int left, int right) {
        if (left >= right) return true;
        if (s.charAt(left) != s.charAt(right)) return false;
        return isPalindrome(s, left + 1, right - 1);
    }

    public static void main(String[] args) {
        String s1 = "racecar";
        String s2 = "hello";
        System.out.println(s1 + " is a palindrome: " + isPalindrome(s1, 0, s1.length() - 1));
        System.out.println(s2 + " is a palindrome: " + isPalindrome(s2, 0, s2.length() - 1));
    }
}
```

### Challenge 6. Binary Search Using Recursion

**Difficulty:** Medium

Rohan needs a recursive binary search method that returns the index of a target in a sorted array, or -1 if not found. Test with array {2, 5, 8, 12, 16, 23, 38, 56, 72, 91} searching for 23 and 50.

**Constraints:**

- Use recursion. The method should take the array, target, low index, and high index.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Index of 23: 5
Index of 50: -1
```

**Solution:**

```java
public class BinarySearch {
    static int binarySearch(int[] arr, int target, int low, int high) {
        if (low > high) return -1;
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) return binarySearch(arr, target, mid + 1, high);
        return binarySearch(arr, target, low, mid - 1);
    }

    public static void main(String[] args) {
        int[] arr = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
        System.out.println("Index of 23: " + binarySearch(arr, 23, 0, arr.length - 1));
        System.out.println("Index of 50: " + binarySearch(arr, 50, 0, arr.length - 1));
    }
}
```

### Challenge 7. Tower of Hanoi

**Difficulty:** Hard

Write a recursive solution for the Tower of Hanoi problem with n disks. Print each move in the format "Disk X: A -> C". Test with n=3 and rods A (source), C (destination), B (auxiliary).

**Constraints:**

- Use recursion. Print the disk number in each move.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Disk 1: A -> C
Disk 2: A -> B
Disk 1: C -> B
Disk 3: A -> C
Disk 1: B -> A
Disk 2: B -> C
Disk 1: A -> C
```

**Solution:**

```java
public class TowerOfHanoi {
    static void hanoi(int n, char from, char to, char aux) {
        if (n == 0) return;
        hanoi(n - 1, from, aux, to);
        System.out.println("Disk " + n + ": " + from + " -> " + to);
        hanoi(n - 1, aux, to, from);
    }

    public static void main(String[] args) {
        hanoi(3, 'A', 'C', 'B');
    }
}
```

### Challenge 8. Generate All Permutations

**Difficulty:** Hard

Write a recursive method that prints all permutations of a given string. Test with the string "ABC".

**Constraints:**

- Use recursion with character swapping. The method should accept the string as a char array and the current index.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
ABC
ACB
BAC
BCA
CBA
CAB
```

**Solution:**

```java
public class Permutations {
    static void permute(char[] arr, int index) {
        if (index == arr.length - 1) {
            System.out.println(new String(arr));
            return;
        }
        for (int i = index; i < arr.length; i++) {
            char temp = arr[index];
            arr[index] = arr[i];
            arr[i] = temp;

            permute(arr, index + 1);

            temp = arr[index];
            arr[index] = arr[i];
            arr[i] = temp;
        }
    }

    public static void main(String[] args) {
        permute("ABC".toCharArray(), 0);
    }
}
```

### Challenge 9. Varargs Statistics Calculator

**Difficulty:** Hard

Write three varargs methods: min(int... nums), max(int... nums), and average(int... nums). Test with the values 45, 78, 23, 91, 56.

**Constraints:**

- Use varargs. Handle edge case of zero arguments. Return double for average.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Min: 23
Max: 91
Average: 58.60
```

**Solution:**

```java
public class StatsCalc {
    static int min(int... nums) {
        int result = nums[0];
        for (int n : nums) {
            if (n < result) result = n;
        }
        return result;
    }

    static int max(int... nums) {
        int result = nums[0];
        for (int n : nums) {
            if (n > result) result = n;
        }
        return result;
    }

    static double average(int... nums) {
        int sum = 0;
        for (int n : nums) sum += n;
        return (double) sum / nums.length;
    }

    public static void main(String[] args) {
        System.out.println("Min: " + min(45, 78, 23, 91, 56));
        System.out.println("Max: " + max(45, 78, 23, 91, 56));
        System.out.printf("Average: %.2f%n", average(45, 78, 23, 91, 56));
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/methods-in-java/*
