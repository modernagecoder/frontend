---
title: "Practice: Arrays in Java"
description: "55 practice problems for Arrays in Java in Java"
slug: arrays-in-java-practice
canonical: https://learn.modernagecoders.com/resources/java/arrays-in-java/practice/
category: "Java"
---
# Practice: Arrays in Java

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
int[] arr = {10, 20, 30, 40, 50};
System.out.println(arr[0]);
System.out.println(arr[4]);
System.out.println(arr.length);
```

*Hint:* Arrays are 0-indexed. length is a property.

**Answer:** `10`
`50`
`5`

arr[0] is the first element (10). arr[4] is the last element (50). arr.length is 5.

### Q2. [Easy] What is the output?

```
int[] arr = new int[4];
System.out.println(arr[0]);
System.out.println(arr[3]);
```

*Hint:* Default value for int arrays is 0.

**Answer:** `0`
`0`

Arrays created with `new int[4]` have all elements initialized to 0 (the default for int).

### Q3. [Easy] What is the output?

```
String[] names = new String[3];
System.out.println(names[0]);
```

*Hint:* Default value for reference type arrays is null.

**Answer:** `null`

String is a reference type. Arrays of reference types are initialized to null.

### Q4. [Easy] What is the output?

```
int[] arr = {5, 10, 15};
arr[1] = 99;
for (int n : arr) {
    System.out.print(n + " ");
}
```

*Hint:* We modify index 1 from 10 to 99.

**Answer:** `5 99 15 `

arr starts as {5, 10, 15}. After `arr[1] = 99`, it becomes {5, 99, 15}.

### Q5. [Medium] What is the output?

```
int[] a = {1, 2, 3};
int[] b = a;
b[0] = 99;
System.out.println(a[0]);
```

*Hint:* b = a copies the reference, not the data.

**Answer:** `99`

`b = a` makes b point to the same array object as a. Modifying b[0] also changes a[0] because they share the same underlying array.

### Q6. [Medium] What is the output?

```
int[] arr = {1, 2, 3};
System.out.println(arr == arr);
int[] arr2 = {1, 2, 3};
System.out.println(arr == arr2);
```

*Hint:* == compares references, not content.

**Answer:** `true`
`false`

`arr == arr` is true (same reference). `arr == arr2` is false (different objects, even though content is the same). Use `Arrays.equals()` for content comparison.

### Q7. [Medium] What is the output?

```
import java.util.Arrays;
int[] arr = {5, 2, 8, 1, 9};
Arrays.sort(arr);
System.out.println(Arrays.toString(arr));
```

*Hint:* Arrays.sort() sorts in ascending order in-place.

**Answer:** `[1, 2, 5, 8, 9]`

`Arrays.sort()` sorts the array in ascending order. The original array is modified (in-place sorting).

### Q8. [Medium] What is the output?

```
int[][] matrix = {{1, 2}, {3, 4}, {5, 6}};
System.out.println(matrix.length);
System.out.println(matrix[0].length);
System.out.println(matrix[2][1]);
```

*Hint:* matrix.length = rows. matrix[i].length = columns in row i.

**Answer:** `3`
`2`
`6`

3 rows, 2 columns per row. matrix[2][1] is the element at row 2, column 1, which is 6.

### Q9. [Hard] What is the output?

```
import java.util.Arrays;
int[] arr = {3, 1, 4, 1, 5};
int[] copy = Arrays.copyOf(arr, 3);
arr[0] = 99;
System.out.println(Arrays.toString(copy));
```

*Hint:* copyOf creates an independent copy. Changes to arr do not affect copy.

**Answer:** `[3, 1, 4]`

`Arrays.copyOf(arr, 3)` creates a new array with the first 3 elements: {3, 1, 4}. It is an independent copy. Changing arr[0] to 99 does not affect the copy.

### Q10. [Hard] What is the output?

```
import java.util.Arrays;
int[] arr = {10, 20, 30, 40, 50};
Arrays.sort(arr);
int idx = Arrays.binarySearch(arr, 30);
System.out.println(idx);
```

*Hint:* After sorting: {10, 20, 30, 40, 50}. Find the index of 30.

**Answer:** `2`

After sorting (already sorted in this case): {10, 20, 30, 40, 50}. 30 is at index 2. `binarySearch()` returns 2.

### Q11. [Hard] What is the output?

```
int[][] jagged = new int[3][];
jagged[0] = new int[]{1};
jagged[1] = new int[]{2, 3};
jagged[2] = new int[]{4, 5, 6};
int sum = 0;
for (int[] row : jagged) {
    for (int val : row) {
        sum += val;
    }
}
System.out.println(sum);
```

*Hint:* Sum all elements across all rows of different lengths.

**Answer:** `21`

1 + 2 + 3 + 4 + 5 + 6 = 21. The for-each loop handles jagged arrays correctly because each row is iterated independently based on its own length.

### Q12. [Medium] Why is arr.length a property (no parentheses) while String's length() is a method (with parentheses)?

*Hint:* Think about the difference between a field and a method.

**Answer:** Arrays have a public final field called `length` that is set when the array is created and never changes. It is accessed as a field (no parentheses). Strings use a `length()` method because String is a class with encapsulated internal state. The distinction is a Java design decision: arrays are a special construct in the language, not a regular class.

This is a common interview question. Remember: `arr.length` (array, no parentheses), `str.length()` (String, with parentheses), `list.size()` (List, with parentheses).

### Q13. [Hard] Explain the difference between Arrays.copyOf() and assigning one array to another (arr2 = arr1).

*Hint:* Think about references vs actual data.

**Answer:** `arr2 = arr1` copies the **reference**, making both variables point to the same underlying array object. Changes through either variable affect the same data. `Arrays.copyOf(arr1, arr1.length)` creates a **new array object** with the same values but independent memory. Changes to one do not affect the other.

This is the shallow copy vs reference copy distinction. For arrays of primitives, `copyOf()` creates a fully independent copy. For arrays of objects, it copies the references (not the objects themselves), which is a shallow copy.

### Q14. [Easy] What is the output?

```
boolean[] flags = new boolean[3];
System.out.println(flags[0]);
System.out.println(flags[2]);
```

*Hint:* Default value for boolean arrays is false.

**Answer:** `false`
`false`

boolean arrays are initialized to false by default.

### Q15. [Medium] What is the output?

```
int[] arr = {10, 20, 30, 40};
int sum = 0;
for (int i = 0; i < arr.length; i += 2) {
    sum += arr[i];
}
System.out.println(sum);
```

*Hint:* i takes values 0 and 2 (step by 2). Access arr[0] and arr[2].

**Answer:** `40`

i = 0: sum += arr[0] = 10. i = 2: sum += arr[2] = 30. Total = 40. Only even-indexed elements are summed.

### Q16. [Hard] What is the output?

```
import java.util.Arrays;
int[] a = {1, 2, 3};
int[] b = a.clone();
b[0] = 99;
System.out.println(Arrays.toString(a));
System.out.println(Arrays.toString(b));
```

*Hint:* clone() creates an independent copy.

**Answer:** `[1, 2, 3]`
`[99, 2, 3]`

`clone()` creates a new array with the same values (independent copy). Modifying b[0] does not affect a.

### Q17. [Hard] What is the output?

```
import java.util.Arrays;
int[] arr = {5, 3, 8, 1, 2};
Arrays.sort(arr, 1, 4);
System.out.println(Arrays.toString(arr));
```

*Hint:* sort(arr, fromIndex, toIndex) sorts only the range [1, 4).

**Answer:** `[5, 1, 3, 8, 2]`

`Arrays.sort(arr, 1, 4)` sorts indices 1, 2, 3 (not 0 or 4). Elements at indices 1-3 were {3, 8, 1}, sorted to {1, 3, 8}. Result: {5, 1, 3, 8, 2}.

## Mixed Questions

### Q1. [Easy] Write a program that creates an array of 5 integers, reads values from the user, and prints their sum and average.

*Hint:* Use a for loop to read and sum.

**Answer:** ```
import java.util.Scanner;

public class ArraySum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[5];
        System.out.println("Enter 5 numbers:");
        int sum = 0;
        for (int i = 0; i < 5; i++) {
            arr[i] = sc.nextInt();
            sum += arr[i];
        }
        System.out.println("Sum: " + sum);
        System.out.println("Average: " + (double) sum / 5);
        sc.close();
    }
}
```

We read 5 integers into the array and accumulate the sum. Average is computed as (double) sum / 5 to get a decimal result.

### Q2. [Easy] What is the output?

```
int[] arr = {10, 20, 30};
for (int i = arr.length - 1; i >= 0; i--) {
    System.out.print(arr[i] + " ");
}
```

*Hint:* Iterating from the last index to 0 prints in reverse.

**Answer:** `30 20 10 `

Starting from arr.length - 1 = 2 and going to 0 prints elements in reverse order.

### Q3. [Medium] What is the output?

```
int[] arr = {5, 3, 8, 1, 9, 2};
int min = arr[0];
for (int i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
System.out.println("Min: " + min);
```

*Hint:* Track the smallest value seen so far.

**Answer:** `Min: 1`

min starts as arr[0] = 5. Iterating: 3 < 5? Yes, min = 3. 8 < 3? No. 1 < 3? Yes, min = 1. 9 < 1? No. 2 < 1? No. Final min = 1.

### Q4. [Medium] Write a method that takes an int array and returns a new array with elements in reverse order. Do not modify the original.

*Hint:* Create a new array. Copy elements from end to start.

**Answer:** ```
import java.util.Arrays;

public class ReverseArray {
    public static int[] reverse(int[] arr) {
        int[] result = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            result[i] = arr[arr.length - 1 - i];
        }
        return result;
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4, 5};
        int[] rev = reverse(nums);
        System.out.println(Arrays.toString(rev));
        System.out.println(Arrays.toString(nums)); // unchanged
    }
}
```

We create a new array and fill it by mapping index i to arr[length-1-i]. The original array remains unchanged.

### Q5. [Medium] What is the output?

```
import java.util.Arrays;
int[] arr = new int[5];
Arrays.fill(arr, 3);
arr[2] = 7;
System.out.println(Arrays.toString(arr));
```

*Hint:* fill sets all to 3, then we override index 2.

**Answer:** `[3, 3, 7, 3, 3]`

`Arrays.fill(arr, 3)` sets all 5 elements to 3: {3, 3, 3, 3, 3}. Then `arr[2] = 7` changes the middle element.

### Q6. [Hard] What is the output?

```
int[][] m = {{1, 2, 3}, {4, 5, 6}};
int[][] t = new int[3][2];
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) {
        t[j][i] = m[i][j];
    }
}
System.out.println(t[0][0] + " " + t[0][1]);
System.out.println(t[1][0] + " " + t[1][1]);
System.out.println(t[2][0] + " " + t[2][1]);
```

*Hint:* This is a matrix transpose: t[j][i] = m[i][j].

**Answer:** `1 4`
`2 5`
`3 6`

Transpose swaps rows and columns. m = [[1,2,3],[4,5,6]] becomes t = [[1,4],[2,5],[3,6]]. A 2x3 matrix becomes 3x2.

### Q7. [Hard] What is the output?

```
import java.util.Arrays;
int[] arr = {3, 1, 4, 1, 5, 9, 2, 6};
Arrays.sort(arr);
int result = Arrays.binarySearch(arr, 7);
System.out.println(result);
```

*Hint:* 7 is not in the array. binarySearch returns a negative value.

**Answer:** A negative value (specifically `-8`)

Sorted: {1, 1, 2, 3, 4, 5, 6, 9}. 7 is not present. `binarySearch()` returns -(insertion point) - 1. 7 would be inserted at index 7 (between 6 and 9), so it returns -(7)-1 = -8.

### Q8. [Hard] What is the output?

```
int[] arr = {1, 2, 3, 4, 5};
for (int n : arr) {
    n = n * 10;
}
System.out.println(arr[0] + " " + arr[4]);
```

*Hint:* for-each variable is a copy for primitive arrays.

**Answer:** `1 5`

In a for-each loop, `n` is a copy of the array element (for primitives). Assigning `n = n * 10` modifies the copy, not the original array. The array remains {1, 2, 3, 4, 5}.

### Q9. [Hard] Write a program that reads a 3x3 matrix from the user and prints the sum of each row, each column, and both diagonals.

*Hint:* Use nested loops. Column sum: iterate rows for a fixed column.

**Answer:** ```
import java.util.Scanner;

public class MatrixSums {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[][] m = new int[3][3];
        System.out.println("Enter 3x3 matrix:");
        for (int i = 0; i < 3; i++)
            for (int j = 0; j < 3; j++)
                m[i][j] = sc.nextInt();

        for (int i = 0; i < 3; i++) {
            int rowSum = 0;
            for (int j = 0; j < 3; j++) rowSum += m[i][j];
            System.out.println("Row " + i + " sum: " + rowSum);
        }
        for (int j = 0; j < 3; j++) {
            int colSum = 0;
            for (int i = 0; i < 3; i++) colSum += m[i][j];
            System.out.println("Col " + j + " sum: " + colSum);
        }
        int d1 = 0, d2 = 0;
        for (int i = 0; i < 3; i++) {
            d1 += m[i][i];
            d2 += m[i][2 - i];
        }
        System.out.println("Main diagonal: " + d1);
        System.out.println("Anti diagonal: " + d2);
        sc.close();
    }
}
```

Row sums: fix i, iterate j. Column sums: fix j, iterate i. Main diagonal: m[i][i]. Anti-diagonal: m[i][n-1-i].

### Q10. [Easy] What is the output?

```
int[] arr = {3, 6, 9};
System.out.println(arr[arr.length - 1]);
```

*Hint:* arr.length is 3. arr[3-1] = arr[2].

**Answer:** `9`

arr.length = 3. `arr[2]` is the last element: 9.

### Q11. [Medium] What is the output?

```
int[] arr = {1, 2, 3, 4, 5};
int[] reversed = new int[arr.length];
for (int i = 0; i < arr.length; i++) {
    reversed[i] = arr[arr.length - 1 - i];
}
System.out.print(reversed[0] + " " + reversed[4]);
```

*Hint:* reversed[0] = arr[4], reversed[4] = arr[0].

**Answer:** `5 1`

reversed[0] = arr[4] = 5. reversed[4] = arr[0] = 1.

### Q12. [Medium] Write a method that takes an int array and returns true if the array is sorted in ascending order, false otherwise.

*Hint:* Check if each element is <= the next element.

**Answer:** ```
public static boolean isSorted(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
```

We compare each adjacent pair. If any pair is out of order (arr[i] > arr[i+1]), the array is not sorted. If we complete the loop without finding such a pair, it is sorted.

### Q13. [Hard] What is the output?

```
import java.util.Arrays;
int[] arr = {1, 2, 3, 4, 5};
int[] bigger = Arrays.copyOf(arr, 8);
System.out.println(Arrays.toString(bigger));
```

*Hint:* copyOf with a larger length pads with default values.

**Answer:** `[1, 2, 3, 4, 5, 0, 0, 0]`

`Arrays.copyOf(arr, 8)` creates an array of length 8. The first 5 elements are copied from arr. The remaining 3 positions are filled with the default value for int (0).

## Multiple Choice Questions

### Q1. [Easy] What is the index of the first element in a Java array?

A. 1
B. 0
C. -1
D. Depends on the array

**Answer:** B

**B is correct.** Java arrays are zero-indexed. The first element is at index 0.

### Q2. [Easy] What is the default value of elements in a new int array?

A. null
B. -1
C. 0
D. undefined

**Answer:** C

**C is correct.** Default values: 0 for int, 0.0 for double, false for boolean, null for reference types.

### Q3. [Easy] Which property gives the number of elements in an array?

A. arr.size()
B. arr.length()
C. arr.length
D. arr.count

**Answer:** C

**C is correct.** `length` is a field (no parentheses) for arrays. `length()` is a method for Strings. `size()` is a method for Collections.

### Q4. [Easy] What exception is thrown when accessing an invalid array index?

A. IndexOutOfBoundsException
B. ArrayIndexOutOfBoundsException
C. NullPointerException
D. IllegalArgumentException

**Answer:** B

**B is correct.** `ArrayIndexOutOfBoundsException` is thrown when accessing an index < 0 or >= array.length.

### Q5. [Easy] Which method from the Arrays class sorts an array?

A. Arrays.order()
B. Arrays.arrange()
C. Arrays.sort()
D. Arrays.sorted()

**Answer:** C

**C is correct.** `Arrays.sort()` sorts the array in ascending order in-place.

### Q6. [Medium] What does Arrays.toString(arr) return for int[] arr = {1, 2, 3}?

A. [1, 2, 3]
B. {1, 2, 3}
C. 1 2 3
D. [I@6d06d69c

**Answer:** A

**A is correct.** `Arrays.toString()` returns a string in the format [element1, element2, ...]. Option D is what `System.out.println(arr)` prints without Arrays.toString().

### Q7. [Medium] What is a jagged array?

A. An array with null elements
B. A 2D array where each row can have a different number of columns
C. An array that is not sorted
D. An array with negative indices

**Answer:** B

**B is correct.** A jagged array is a 2D array where rows have varying lengths. In Java, this is possible because a 2D array is an array of references to independent 1D arrays.

### Q8. [Medium] What happens when you pass an array to a method in Java?

A. A copy of the array is passed
B. The reference (memory address) is passed
C. Only the first element is passed
D. It depends on the array size

**Answer:** B

**B is correct.** Java passes the array reference (pass by value of the reference). The method operates on the same underlying array, so modifications affect the original.

### Q9. [Medium] What does Arrays.binarySearch() require?

A. The array must be in descending order
B. The array must be sorted in ascending order
C. The array can be unsorted
D. The array must contain unique elements

**Answer:** B

**B is correct.** `binarySearch()` requires the array to be sorted in ascending order. Using it on an unsorted array produces undefined results.

### Q10. [Hard] What is the output?
`int[] a = {1}; int[] b = {1}; System.out.println(a.equals(b));`

A. true
B. false
C. Error
D. 1

**Answer:** B

**B is correct.** Arrays inherit `equals()` from Object, which compares references (same as ==). Two different array objects are not equal by reference. Use `Arrays.equals(a, b)` for content comparison.

### Q11. [Hard] What is the time complexity of Arrays.sort() for primitive arrays?

A. O(n)
B. O(n log n)
C. O(n^2)
D. O(log n)

**Answer:** B

**B is correct.** Arrays.sort() uses dual-pivot Quicksort for primitives with O(n log n) average time complexity. For object arrays, it uses TimSort (also O(n log n)).

### Q12. [Hard] What does Arrays.copyOfRange(arr, 2, 5) return for arr = {10, 20, 30, 40, 50, 60}?

A. [30, 40, 50]
B. [20, 30, 40, 50]
C. [30, 40, 50, 60]
D. [20, 30, 40]

**Answer:** A

**A is correct.** `copyOfRange(arr, 2, 5)` copies indices 2, 3, 4 (from=inclusive, to=exclusive). Elements: arr[2]=30, arr[3]=40, arr[4]=50.

### Q13. [Hard] Can arrays store elements of different types in Java?

A. Yes, all arrays accept any type
B. Yes, if declared as Object[]
C. No, arrays are always homogeneous
D. Only if using generics

**Answer:** B

**B is correct.** An `Object[]` array can store any type because all classes inherit from Object. However, the array itself is typed as Object[], and you need casting when retrieving elements. Primitive arrays (int[], double[]) are strictly homogeneous.

### Q14. [Medium] How do you create an independent copy of an array?

A. int[] copy = original;
B. int[] copy = Arrays.copyOf(original, original.length);
C. int[] copy = new int[original];
D. int[] copy = original.copy();

**Answer:** B

**B is correct.** `Arrays.copyOf()` creates a new array with copied values. Option A copies the reference (not independent). Option C is invalid syntax. Option D: arrays do not have a `copy()` method (they have `clone()`).

### Q15. [Easy] What is the valid index range for an array of length 10?

A. 1 to 10
B. 0 to 10
C. 0 to 9
D. 1 to 9

**Answer:** C

**C is correct.** Arrays are 0-indexed. An array of length 10 has valid indices 0 through 9.

### Q16. [Medium] Which method prints a 2D array in readable format?

A. Arrays.toString()
B. Arrays.deepToString()
C. Arrays.print()
D. System.out.println()

**Answer:** B

**B is correct.** `Arrays.deepToString()` handles multidimensional arrays, printing them as [[row1], [row2], ...]. `Arrays.toString()` only works for 1D arrays.

### Q17. [Hard] What is the output?
`int[] arr = {}; System.out.println(arr.length);`

A. 0
B. null
C. Error
D. -1

**Answer:** A

**A is correct.** An empty array `{}` is a valid array with length 0. It is not null; it is an array object that contains no elements.

## Coding Challenges

### Challenge 1. Find Second Largest Element

**Difficulty:** Easy

Write a program that finds the second largest element in an array without sorting.

**Constraints:**

- Track both the largest and second largest in a single pass.

**Sample input:**

```
Array: {12, 35, 1, 10, 34, 1}
```

**Sample output:**

```
Second largest: 34
```

**Solution:**

```java
public class SecondLargest {
    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34, 1};
        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for (int n : arr) {
            if (n > first) {
                second = first;
                first = n;
            } else if (n > second && n != first) {
                second = n;
            }
        }
        System.out.println("Second largest: " + second);
    }
}
```

### Challenge 2. Reverse Array In-Place

**Difficulty:** Easy

Reverse an array in-place using two pointers (without creating a new array).

**Constraints:**

- Use two pointers: one at start, one at end. Swap and move inward.

**Sample input:**

```
Array: {1, 2, 3, 4, 5}
```

**Sample output:**

```
Reversed: [5, 4, 3, 2, 1]
```

**Solution:**

```java
import java.util.Arrays;

public class ReverseInPlace {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int left = 0, right = arr.length - 1;
        while (left < right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
        System.out.println("Reversed: " + Arrays.toString(arr));
    }
}
```

### Challenge 3. Count Frequency of Each Element

**Difficulty:** Medium

Given an array of integers, count and print the frequency of each distinct element.

**Constraints:**

- Use a boolean visited array to avoid counting duplicates twice.

**Sample input:**

```
Array: {3, 5, 3, 2, 5, 5, 1, 2}
```

**Sample output:**

```
3 appears 2 times
5 appears 3 times
2 appears 2 times
1 appears 1 times
```

**Solution:**

```java
public class Frequency {
    public static void main(String[] args) {
        int[] arr = {3, 5, 3, 2, 5, 5, 1, 2};
        boolean[] visited = new boolean[arr.length];
        for (int i = 0; i < arr.length; i++) {
            if (visited[i]) continue;
            int count = 1;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    count++;
                    visited[j] = true;
                }
            }
            System.out.println(arr[i] + " appears " + count + " times");
        }
    }
}
```

### Challenge 4. Merge Two Sorted Arrays

**Difficulty:** Medium

Given two sorted arrays, merge them into a single sorted array without using Arrays.sort().

**Constraints:**

- Use two pointers, one for each array. Compare and pick the smaller element.

**Sample input:**

```
a = {1, 3, 5, 7}, b = {2, 4, 6, 8}
```

**Sample output:**

```
Merged: [1, 2, 3, 4, 5, 6, 7, 8]
```

**Solution:**

```java
import java.util.Arrays;

public class MergeSorted {
    public static void main(String[] args) {
        int[] a = {1, 3, 5, 7}, b = {2, 4, 6, 8};
        int[] merged = new int[a.length + b.length];
        int i = 0, j = 0, k = 0;
        while (i < a.length && j < b.length) {
            if (a[i] <= b[j]) merged[k++] = a[i++];
            else merged[k++] = b[j++];
        }
        while (i < a.length) merged[k++] = a[i++];
        while (j < b.length) merged[k++] = b[j++];
        System.out.println("Merged: " + Arrays.toString(merged));
    }
}
```

### Challenge 5. Rotate Array by K Positions

**Difficulty:** Medium

Rotate an array to the left by K positions. Example: {1,2,3,4,5} rotated left by 2 becomes {3,4,5,1,2}.

**Constraints:**

- Use the reversal algorithm: reverse first K, reverse rest, reverse all.

**Sample input:**

```
Array: {1, 2, 3, 4, 5}, K = 2
```

**Sample output:**

```
Rotated: [3, 4, 5, 1, 2]
```

**Solution:**

```java
import java.util.Arrays;

public class RotateArray {
    static void reverse(int[] arr, int start, int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int k = 2;
        k = k % arr.length;
        reverse(arr, 0, k - 1);
        reverse(arr, k, arr.length - 1);
        reverse(arr, 0, arr.length - 1);
        System.out.println("Rotated: " + Arrays.toString(arr));
    }
}
```

### Challenge 6. Matrix Addition

**Difficulty:** Medium

Read two 2x3 matrices from the user and print their sum matrix.

**Constraints:**

- Add corresponding elements: C[i][j] = A[i][j] + B[i][j].

**Sample input:**

```
Matrix A: {{1,2,3},{4,5,6}}, Matrix B: {{7,8,9},{10,11,12}}
```

**Sample output:**

```
Sum: {{8,10,12},{14,16,18}}
```

**Solution:**

```java
import java.util.Arrays;

public class MatrixAdd {
    public static void main(String[] args) {
        int[][] a = {{1,2,3},{4,5,6}};
        int[][] b = {{7,8,9},{10,11,12}};
        int[][] sum = new int[2][3];
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 3; j++) {
                sum[i][j] = a[i][j] + b[i][j];
            }
        }
        System.out.println("Sum:");
        for (int[] row : sum) System.out.println(Arrays.toString(row));
    }
}
```

### Challenge 7. Find Duplicate Elements

**Difficulty:** Hard

Given an array, find and print all duplicate elements (elements that appear more than once).

**Constraints:**

- Use nested loops or sorting. Print each duplicate only once.

**Sample input:**

```
Array: {4, 2, 7, 2, 4, 9, 7, 1}
```

**Sample output:**

```
Duplicates: 2, 7, 4
```

**Solution:**

```java
import java.util.Arrays;

public class FindDuplicates {
    public static void main(String[] args) {
        int[] arr = {4, 2, 7, 2, 4, 9, 7, 1};
        int[] sorted = Arrays.copyOf(arr, arr.length);
        Arrays.sort(sorted);
        System.out.print("Duplicates: ");
        for (int i = 1; i < sorted.length; i++) {
            if (sorted[i] == sorted[i - 1]) {
                if (i == 1 || sorted[i] != sorted[i - 2]) {
                    System.out.print(sorted[i] + " ");
                }
            }
        }
        System.out.println();
    }
}
```

### Challenge 8. Spiral Matrix Traversal

**Difficulty:** Hard

Given an m x n matrix, print its elements in spiral order (right, down, left, up, repeat).

**Constraints:**

- Use four boundary variables: top, bottom, left, right. Shrink after each direction.

**Sample input:**

```
Matrix: {{1,2,3},{4,5,6},{7,8,9}}
```

**Sample output:**

```
1 2 3 6 9 8 7 4 5
```

**Solution:**

```java
public class SpiralTraversal {
    public static void main(String[] args) {
        int[][] matrix = {{1,2,3},{4,5,6},{7,8,9}};
        int top = 0, bottom = matrix.length - 1;
        int left = 0, right = matrix[0].length - 1;
        while (top <= bottom && left <= right) {
            for (int i = left; i <= right; i++) System.out.print(matrix[top][i] + " ");
            top++;
            for (int i = top; i <= bottom; i++) System.out.print(matrix[i][right] + " ");
            right--;
            if (top <= bottom) {
                for (int i = right; i >= left; i--) System.out.print(matrix[bottom][i] + " ");
                bottom--;
            }
            if (left <= right) {
                for (int i = bottom; i >= top; i--) System.out.print(matrix[i][left] + " ");
                left++;
            }
        }
        System.out.println();
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/arrays-in-java/*
