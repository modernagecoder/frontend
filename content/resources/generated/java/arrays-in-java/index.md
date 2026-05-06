---
title: "Arrays in Java - Declaration, Initialization, 2D Arrays, Arrays Class | Modern Age Coders"
description: "Master Java arrays including declaration, initialization, iteration, 2D arrays, jagged arrays, and the Arrays utility class. Includes 60 practice questions with output prediction and coding challenges."
slug: arrays-in-java
canonical: https://learn.modernagecoders.com/resources/java/arrays-in-java/
category: "Java"
keywords: ["java arrays", "java array tutorial", "multidimensional array java", "java arrays class", "java 2d array", "java array methods", "java array sort", "java array copy"]
---
# Arrays in Java

**Difficulty:** Beginner  
**Reading time:** 28 min  
**Chapter:** 10  
**Practice questions:** 55

## What Are Arrays?

An **array** is a fixed-size, ordered collection of elements of the same data type stored in contiguous memory locations. Instead of declaring 100 separate variables to store 100 student marks, you declare one array that holds all 100 values under a single name, accessible by index.

Arrays are the most fundamental data structure in programming. Every language provides arrays because they offer **constant-time access** (O(1)) to any element by index, making them extremely efficient for lookup operations.

### Key Characteristics

- **Fixed size:** Once created, an array's length cannot be changed.
- **Zero-indexed:** The first element is at index 0, the last at index (length - 1).
- **Homogeneous:** All elements must be of the same type (all int, all String, etc.).
- **Reference type:** Arrays in Java are objects, stored on the heap. The variable holds a reference (memory address), not the data itself.

In Java, arrays can hold primitive types (int, double, char, boolean) or reference types (String, Object, custom classes).

## Why Are Arrays Essential?

### 1. Managing Collections of Data

Real programs almost always deal with multiple related values: marks of all students, prices of all products, coordinates of all points, characters in a string. Without arrays, you would need separate variables for each value (`mark1, mark2, mark3, ...`), which is impractical for any non-trivial dataset. Arrays let you manage these collections with a single variable name and loop through them programmatically.

### 2. Foundation for All Data Structures

Arrays are the building block for more complex data structures. ArrayList is backed by an array. HashMap uses an array of buckets. Strings are backed by a char array. Understanding arrays deeply is a prerequisite for understanding any other data structure in Java.

### 3. Algorithm Implementation

Most algorithms operate on arrays: sorting (bubble, selection, insertion, merge, quick), searching (linear, binary), matrix operations (transpose, multiply), and dynamic programming (tabulation). Arrays are the primary data structure in DSA-based placement interviews.

### 4. Multidimensional Data

2D arrays (matrices) represent tabular data, game boards, images (pixel grids), and adjacency matrices for graphs. Understanding 2D arrays and their iteration patterns is essential for solving matrix-based interview problems.

## Detailed Explanation

### 1. Declaring and Initializing Arrays

There are multiple ways to create arrays in Java:

#### Declaration with new Keyword

```
int[] marks = new int[5]; // Array of 5 ints, initialized to 0
```

This creates an array of 5 integers. All elements are initialized to their default values: 0 for int, 0.0 for double, false for boolean, null for reference types.

#### Declaration with Initialization

```
int[] marks = {85, 92, 78, 95, 88}; // Array of 5 ints with values
```

Curly braces provide the initial values. The length is determined automatically from the number of values.

#### Two-Step Declaration

```
int[] marks;
marks = new int[]{85, 92, 78, 95, 88}; // Note: new int[] required
```

When declaration and initialization are on separate lines, you must use `new int[]{...}`. You cannot use `{...}` alone.

#### Alternative Syntax

```
int marks[] = new int[5]; // C-style syntax, valid but not preferred
```

Java supports both `int[] marks` (preferred) and `int marks[]` (C-style). The first form is recommended because the type (`int[]`) is clearly an array type.

### 2. Accessing Elements

Array elements are accessed using zero-based indexing: `arrayName[index]`.

```
int[] nums = {10, 20, 30, 40, 50};
System.out.println(nums[0]); // 10 (first element)
System.out.println(nums[4]); // 50 (last element)
nums[2] = 99;               // Modify: 30 becomes 99
```

The valid index range is 0 to `array.length - 1`. Accessing an index outside this range throws `ArrayIndexOutOfBoundsException`.

### 3. Array Length

`array.length` is a property (not a method -- no parentheses) that returns the number of elements. It is final and cannot be changed.

```
int[] arr = {1, 2, 3, 4, 5};
System.out.println(arr.length); // 5
```

### 4. Iterating Over Arrays

#### Using for Loop

```
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}
```

#### Using for-each Loop

```
for (int val : arr) {
    System.out.println(val);
}
```

Use the for loop when you need the index (for modification, comparison with other elements, or index-based logic). Use for-each when you only need the values.

### 5. 2D Arrays (Matrices)

A 2D array is an array of arrays. Think of it as a table with rows and columns.

```
int[][] matrix = new int[3][4]; // 3 rows, 4 columns
matrix[0][0] = 1; // First row, first column
matrix[2][3] = 99; // Last row, last column
```

#### Initialization with Values

```
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
```

#### Iterating a 2D Array

```
for (int i = 0; i < matrix.length; i++) {          // rows
    for (int j = 0; j < matrix[i].length; j++) {    // columns
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}
```

`matrix.length` gives the number of rows. `matrix[i].length` gives the number of columns in row i.

### 6. Jagged Arrays

In Java, 2D arrays do not have to be rectangular. Each row can have a different number of columns. This is called a **jagged array**.

```
int[][] jagged = new int[3][];
jagged[0] = new int[]{1, 2};
jagged[1] = new int[]{3, 4, 5};
jagged[2] = new int[]{6};
```

Row 0 has 2 elements, row 1 has 3, row 2 has 1. This is possible because a 2D array in Java is an array of references to 1D arrays, and each 1D array can be independently sized.

### 7. The Arrays Utility Class

The `java.util.Arrays` class provides static utility methods for common array operations:

MethodDescription`Arrays.sort(arr)`Sorts the array in ascending order. Uses dual-pivot Quicksort for primitives, TimSort for objects.`Arrays.binarySearch(arr, key)`Searches a sorted array for a key. Returns the index if found, or a negative value if not. Array MUST be sorted first.`Arrays.fill(arr, val)`Fills the entire array with the specified value.`Arrays.copyOf(arr, newLen)`Creates a new array with the specified length, copying elements from the original. Pads with defaults if newLen is larger.`Arrays.copyOfRange(arr, from, to)`Copies a range [from, to) from the original array into a new array.`Arrays.toString(arr)`Returns a string representation: "[1, 2, 3, 4, 5]". Essential for debugging.`Arrays.equals(a, b)`Compares two arrays element by element. Returns true only if same length and all elements are equal.`Arrays.deepToString(arr2D)`String representation of 2D (or deeper) arrays: "[[1, 2], [3, 4]]".`Arrays.deepEquals(a, b)`Deep comparison of multidimensional arrays.

### 8. ArrayIndexOutOfBoundsException

Accessing an index that is negative or >= array.length throws `ArrayIndexOutOfBoundsException`. This is a runtime exception and one of the most common bugs in Java programs.

```
int[] arr = {10, 20, 30};
System.out.println(arr[3]); // BOOM! Index 3, but valid range is 0-2
```

### 9. Passing Arrays to Methods

When you pass an array to a method, you pass the **reference**, not a copy. This means the method can modify the original array's elements.

```
public static void doubleAll(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        arr[i] *= 2;
    }
}

int[] nums = {1, 2, 3};
doubleAll(nums);
// nums is now {2, 4, 6}
```

### 10. Returning Arrays from Methods

Methods can return arrays. The return type is the array type (e.g., `int[]`).

```
public static int[] createRange(int start, int end) {
    int[] arr = new int[end - start + 1];
    for (int i = 0; i < arr.length; i++) {
        arr[i] = start + i;
    }
    return arr;
}
```

## Code Examples

### Array Declaration, Access, and Iteration

```java
public class ArrayBasics {
    public static void main(String[] args) {
        // Declaration with values
        int[] marks = {85, 92, 78, 95, 88};

        // Access by index
        System.out.println("First: " + marks[0]);
        System.out.println("Last: " + marks[marks.length - 1]);

        // Modify an element
        marks[2] = 80;

        // Iterate with for loop
        System.out.print("All marks: ");
        for (int i = 0; i < marks.length; i++) {
            System.out.print(marks[i] + " ");
        }
        System.out.println();

        // Iterate with for-each
        int sum = 0;
        for (int m : marks) {
            sum += m;
        }
        System.out.println("Average: " + (double) sum / marks.length);
    }
}
```

We declare an array with initial values, access elements by index (0-based), modify an element, and iterate using both for and for-each loops. The for loop gives index access; for-each gives values directly. `marks.length` returns 5.

**Output:**

```
First: 85
Last: 88
All marks: 85 92 80 95 88 
Average: 88.0
```

### Default Values and the new Keyword

```java
import java.util.Arrays;

public class DefaultValues {
    public static void main(String[] args) {
        int[] ints = new int[5];
        double[] doubles = new double[3];
        boolean[] bools = new boolean[3];
        String[] strings = new String[3];

        System.out.println("int[]:     " + Arrays.toString(ints));
        System.out.println("double[]:  " + Arrays.toString(doubles));
        System.out.println("boolean[]: " + Arrays.toString(bools));
        System.out.println("String[]:  " + Arrays.toString(strings));
    }
}
```

When arrays are created with `new`, all elements get default values: 0 for int, 0.0 for double, false for boolean, and null for reference types like String. `Arrays.toString()` provides a readable representation.

**Output:**

```
int[]:     [0, 0, 0, 0, 0]
double[]:  [0.0, 0.0, 0.0]
boolean[]: [false, false, false]
String[]:  [null, null, null]
```

### 2D Array: Matrix Operations

```java
public class Matrix2D {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        // Print matrix
        System.out.println("Matrix:");
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.printf("%3d", matrix[i][j]);
            }
            System.out.println();
        }

        // Sum of all elements
        int sum = 0;
        for (int[] row : matrix) {
            for (int val : row) {
                sum += val;
            }
        }
        System.out.println("Sum: " + sum);

        // Diagonal sum
        int diagSum = 0;
        for (int i = 0; i < matrix.length; i++) {
            diagSum += matrix[i][i];
        }
        System.out.println("Main diagonal sum: " + diagSum);
    }
}
```

A 2D array is an array of arrays. `matrix.length` gives 3 (rows). `matrix[i].length` gives 3 (columns in row i). The nested for-each iterates all elements. The diagonal is accessed where row index equals column index: matrix[0][0], matrix[1][1], matrix[2][2].

**Output:**

```
Matrix:
  1  2  3
  4  5  6
  7  8  9
Sum: 45
Main diagonal sum: 15
```

### Jagged Arrays

```java
import java.util.Arrays;

public class JaggedArray {
    public static void main(String[] args) {
        int[][] jagged = new int[3][];
        jagged[0] = new int[]{1, 2, 3, 4};
        jagged[1] = new int[]{5, 6};
        jagged[2] = new int[]{7, 8, 9};

        for (int i = 0; i < jagged.length; i++) {
            System.out.println("Row " + i + " (length " + jagged[i].length + "): " + Arrays.toString(jagged[i]));
        }
    }
}
```

Each row in a jagged array can have a different length. Row 0 has 4 elements, row 1 has 2, row 2 has 3. This works because a 2D array in Java is really an array of references to separate 1D arrays. Always use `jagged[i].length` (not a fixed number) when iterating columns.

**Output:**

```
Row 0 (length 4): [1, 2, 3, 4]
Row 1 (length 2): [5, 6]
Row 2 (length 3): [7, 8, 9]
```

### Arrays Utility Class Methods

```java
import java.util.Arrays;

public class ArraysUtility {
    public static void main(String[] args) {
        int[] arr = {42, 15, 78, 23, 56, 8, 91};

        // toString
        System.out.println("Original: " + Arrays.toString(arr));

        // sort
        Arrays.sort(arr);
        System.out.println("Sorted:   " + Arrays.toString(arr));

        // binarySearch (array MUST be sorted)
        int idx = Arrays.binarySearch(arr, 42);
        System.out.println("42 found at index: " + idx);

        // fill
        int[] filled = new int[5];
        Arrays.fill(filled, 7);
        System.out.println("Filled:   " + Arrays.toString(filled));

        // copyOf
        int[] copy = Arrays.copyOf(arr, 4);
        System.out.println("Copy(4):  " + Arrays.toString(copy));

        // copyOfRange
        int[] range = Arrays.copyOfRange(arr, 2, 5);
        System.out.println("Range[2,5): " + Arrays.toString(range));

        // equals
        int[] a = {1, 2, 3};
        int[] b = {1, 2, 3};
        int[] c = {1, 2, 4};
        System.out.println("a equals b: " + Arrays.equals(a, b));
        System.out.println("a equals c: " + Arrays.equals(a, c));
    }
}
```

`Arrays.sort()` sorts in-place (ascending). `Arrays.binarySearch()` requires a sorted array and returns the index. `Arrays.fill()` sets all elements to a value. `Arrays.copyOf()` creates a new array with specified length. `Arrays.copyOfRange()` copies a sub-array. `Arrays.equals()` compares element by element.

**Output:**

```
Original: [42, 15, 78, 23, 56, 8, 91]
Sorted:   [8, 15, 23, 42, 56, 78, 91]
42 found at index: 3
Filled:   [7, 7, 7, 7, 7]
Copy(4):  [8, 15, 23, 42]
Range[2,5): [23, 42, 56]
a equals b: true
a equals c: false
```

### Passing and Returning Arrays

```java
import java.util.Arrays;

public class ArrayMethods {
    // Method that modifies the array (pass by reference)
    public static void doubleAll(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            arr[i] *= 2;
        }
    }

    // Method that returns a new array
    public static int[] getEvenNumbers(int[] arr) {
        int count = 0;
        for (int n : arr) {
            if (n % 2 == 0) count++;
        }
        int[] evens = new int[count];
        int idx = 0;
        for (int n : arr) {
            if (n % 2 == 0) {
                evens[idx++] = n;
            }
        }
        return evens;
    }

    public static void main(String[] args) {
        int[] nums = {3, 8, 15, 22, 7, 10};

        // Passing array to method (modifies original)
        doubleAll(nums);
        System.out.println("After doubling: " + Arrays.toString(nums));

        // Getting array from method
        int[] original = {3, 8, 15, 22, 7, 10};
        int[] evens = getEvenNumbers(original);
        System.out.println("Even numbers: " + Arrays.toString(evens));
    }
}
```

`doubleAll()` receives a reference to the array, so modifications affect the original. `getEvenNumbers()` creates and returns a new array containing only even numbers. Two passes: first counts evens (to size the result array), then fills it.

**Output:**

```
After doubling: [6, 16, 30, 44, 14, 20]
Even numbers: [8, 22, 10]
```

### ArrayIndexOutOfBoundsException

```java
public class BoundsError {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30};

        System.out.println("Length: " + arr.length);
        System.out.println("Valid indices: 0 to " + (arr.length - 1));

        // Safe access
        for (int i = 0; i < arr.length; i++) {
            System.out.println("arr[" + i + "] = " + arr[i]);
        }

        // Dangerous: this would throw an exception
        try {
            System.out.println(arr[3]); // Index 3 is out of bounds
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: " + e.getMessage());
        }

        try {
            System.out.println(arr[-1]); // Negative index
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

An array of length 3 has valid indices 0, 1, 2. Accessing index 3 or -1 throws `ArrayIndexOutOfBoundsException`. Always use `i < arr.length` in loop conditions. The try-catch here is for demonstration; in real code, prevent the error with proper bounds checking.

**Output:**

```
Length: 3
Valid indices: 0 to 2
arr[0] = 10
arr[1] = 20
arr[2] = 30
Error: Index 3 out of bounds for length 3
Error: Index -1 out of bounds for length 3
```

### Matrix Transpose

```java
import java.util.Arrays;

public class Transpose {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6}
        };

        int rows = matrix.length;
        int cols = matrix[0].length;

        // Transpose: swap rows and columns
        int[][] transposed = new int[cols][rows];
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                transposed[j][i] = matrix[i][j];
            }
        }

        System.out.println("Original (" + rows + "x" + cols + "):");
        for (int[] row : matrix) System.out.println(Arrays.toString(row));

        System.out.println("Transposed (" + cols + "x" + rows + "):");
        for (int[] row : transposed) System.out.println(Arrays.toString(row));
    }
}
```

The transpose of a matrix swaps rows and columns: element [i][j] becomes [j][i]. A 2x3 matrix becomes a 3x2 matrix. This is a fundamental matrix operation used in linear algebra, image processing, and many algorithms.

**Output:**

```
Original (2x3):
[1, 2, 3]
[4, 5, 6]
Transposed (3x2):
[1, 4]
[2, 5]
[3, 6]
```

## Common Mistakes

### ArrayIndexOutOfBoundsException (Off-by-One)

**Wrong:**

```
int[] arr = {10, 20, 30, 40, 50};
for (int i = 0; i <= arr.length; i++) { // Bug: <= instead of <
    System.out.println(arr[i]);
}
```

ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 5

**Correct:**

```
int[] arr = {10, 20, 30, 40, 50};
for (int i = 0; i < arr.length; i++) { // < not <=
    System.out.println(arr[i]);
}
```

An array of length 5 has indices 0 through 4. `i <= arr.length` allows i = 5, which is out of bounds. Always use `i < arr.length` (strictly less than). This is the most common array bug.

### Comparing Arrays with == Instead of Arrays.equals()

**Wrong:**

```
int[] a = {1, 2, 3};
int[] b = {1, 2, 3};
System.out.println(a == b); // false!
```

Prints false because == compares references, not content.

**Correct:**

```
import java.util.Arrays;

int[] a = {1, 2, 3};
int[] b = {1, 2, 3};
System.out.println(Arrays.equals(a, b)); // true
```

Arrays are objects. `==` checks if both variables point to the same object in memory (same reference). Even if two arrays have identical elements, `==` returns false if they are different objects. Use `Arrays.equals()` for content comparison and `Arrays.deepEquals()` for 2D arrays.

### Printing an Array Directly Shows Hash Code

**Wrong:**

```
int[] arr = {1, 2, 3};
System.out.println(arr); // Prints something like [I@6d06d69c
```

Prints the hash code reference, not the array contents.

**Correct:**

```
import java.util.Arrays;

int[] arr = {1, 2, 3};
System.out.println(Arrays.toString(arr)); // Prints [1, 2, 3]
```

Arrays in Java do not override `toString()`. Printing an array directly shows the type code and hash (e.g., `[I@6d06d69c` means int array at that memory address). Always use `Arrays.toString()` for readable output.

### Using binarySearch on an Unsorted Array

**Wrong:**

```
int[] arr = {42, 15, 78, 23, 56};
int idx = Arrays.binarySearch(arr, 23); // Undefined behavior!
```

binarySearch may return a wrong index or a negative value because the array is not sorted.

**Correct:**

```
int[] arr = {42, 15, 78, 23, 56};
Arrays.sort(arr); // Sort first!
int idx = Arrays.binarySearch(arr, 23); // Now works correctly
```

`Arrays.binarySearch()` requires the array to be sorted in ascending order. Using it on an unsorted array produces undefined (incorrect) results. Always call `Arrays.sort()` before `binarySearch()`.

### Shallow Copy: Assigning Array References

**Wrong:**

```
int[] original = {1, 2, 3};
int[] copy = original; // Not a copy! Both point to the same array
copy[0] = 99;
System.out.println(original[0]); // 99 (original is modified!)
```

Modifying 'copy' also modifies 'original' because they reference the same array.

**Correct:**

```
int[] original = {1, 2, 3};
int[] copy = Arrays.copyOf(original, original.length);
copy[0] = 99;
System.out.println(original[0]); // 1 (original is unchanged)
```

Assigning one array variable to another copies the **reference**, not the data. Both variables point to the same underlying array. To create an independent copy, use `Arrays.copyOf()`, `clone()`, or `System.arraycopy()`.

## Summary

- Arrays are fixed-size, zero-indexed, homogeneous collections stored in contiguous memory. They provide O(1) access by index.
- Declare with values: int[] arr = {1, 2, 3}; or with new: int[] arr = new int[5]; (defaults: 0, 0.0, false, null).
- Access elements with arr[index]. Valid indices: 0 to arr.length - 1. Going out of bounds throws ArrayIndexOutOfBoundsException.
- arr.length is a property (no parentheses) that returns the array size. It is final and cannot be changed.
- Use for loops for index-based iteration (modification, index logic). Use for-each for read-only value iteration.
- 2D arrays: int[][] matrix = new int[rows][cols]. Access with matrix[row][col]. matrix.length = rows, matrix[i].length = columns.
- Jagged arrays: rows can have different lengths. Declare: int[][] j = new int[3][]; then assign each row independently.
- Arrays utility class (java.util.Arrays): sort(), binarySearch() (array must be sorted), fill(), copyOf(), copyOfRange(), toString(), equals(), deepToString(), deepEquals().
- Arrays are reference types. Assigning arr2 = arr1 copies the reference, not the data. Use Arrays.copyOf() for a true copy.
- Passing arrays to methods passes the reference. The method can modify the original array's elements.
- Never use == to compare arrays (compares references). Use Arrays.equals() for 1D and Arrays.deepEquals() for 2D arrays.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/arrays-in-java/*
*Practice questions: https://learn.modernagecoders.com/resources/java/arrays-in-java/practice/*
