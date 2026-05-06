---
title: "Lists in Python - List Methods, List Comprehension, Nested Lists | Modern Age Coders"
description: "Learn Python lists including list methods, list comprehension, nested lists, slicing, mutability, and shallow copy pitfalls. Includes 65+ practice questions with output prediction and coding challenges."
slug: lists-in-python
canonical: https://learn.modernagecoders.com/resources/python/lists-in-python/
category: "Python"
keywords: ["python list", "list methods python", "list comprehension python", "python list tutorial", "python nested lists", "python list slicing", "python list copy", "python append extend", "python list operations", "python list examples"]
---
# Lists in Python

**Difficulty:** Intermediate  
**Reading time:** 30 min  
**Chapter:** 12  
**Practice questions:** 65

## What Are Lists in Python?

A **list** is an ordered, mutable collection of items. Unlike strings (which hold only characters), lists can hold items of any data type — integers, floats, strings, booleans, and even other lists. Lists are defined using square brackets `[]` with items separated by commas.

Lists are one of the four built-in collection data types in Python (along with tuples, sets, and dictionaries). They are by far the most commonly used because of their flexibility: you can add, remove, modify, and rearrange items freely.

### Creating Lists

There are several ways to create a list:

```
empty = []                        # Empty list
numbers = [1, 2, 3, 4, 5]         # List of integers
names = ["Aarav", "Priya", "Rohan"] # List of strings
mixed = [1, "hello", 3.14, True]   # Mixed types
nested = [[1, 2], [3, 4]]          # Nested list (2D)
from_range = list(range(5))        # [0, 1, 2, 3, 4]
```

The `list()` constructor can convert other iterables (strings, tuples, ranges) into lists.

## Why Are Lists Important?

Lists are the workhorse data structure of Python. Here is why mastering lists is essential:

### 1. Storing Collections of Related Data

Whenever you have multiple items that belong together — student marks, product prices, employee names — you store them in a list. Without lists, you would need a separate variable for each item, which is impractical when dealing with hundreds or thousands of values.

### 2. Dynamic Size

Unlike arrays in many other languages, Python lists grow and shrink automatically. You can append items, insert at any position, or remove items without worrying about pre-allocating memory. This makes lists ideal for situations where the amount of data is not known in advance.

### 3. Mutability Enables In-Place Modification

Lists are **mutable**, meaning you can change their contents without creating a new list. You can update a specific element, sort the list, or reverse it — all in place. This is a key difference from strings and tuples, which are immutable.

### 4. Foundation for Advanced Data Structures

Lists are the building blocks for stacks, queues, matrices (2D lists), and many other data structures. Understanding lists deeply is prerequisite for data science (pandas DataFrames are built on array/list concepts), machine learning, and algorithm design.

### 5. List Comprehension Is a Python Superpower

Python's list comprehension syntax lets you create and transform lists in a single, readable line. It is one of the features that makes Python code shorter and more elegant than equivalent code in other languages.

## Detailed Explanation

### 1. Accessing Elements

Like strings, lists use **zero-based indexing**. The first element is at index 0, the second at index 1, and so on. Negative indexing also works: -1 is the last element, -2 is the second-to-last.

```
fruits = ["apple", "banana", "cherry", "date"]
fruits[0]    # "apple"
fruits[-1]   # "date"
fruits[2]    # "cherry"
```

Accessing an index beyond the list length raises an `IndexError`.

### 2. List Slicing

Slicing works exactly like string slicing: `list[start:stop:step]`. The stop index is excluded.

```
nums = [10, 20, 30, 40, 50, 60]
nums[1:4]    # [20, 30, 40]
nums[:3]     # [10, 20, 30]
nums[3:]     # [40, 50, 60]
nums[::2]    # [10, 30, 50]
nums[::-1]   # [60, 50, 40, 30, 20, 10]
```

Unlike indexing, slicing does not raise an error for out-of-range indices. It simply returns whatever elements are available.

### 3. List Mutability

The biggest difference between lists and strings is **mutability**. You can change any element of a list by assigning to its index:

```
colors = ["red", "green", "blue"]
colors[1] = "yellow"    # Now: ["red", "yellow", "blue"]
colors[0:2] = ["pink"]  # Now: ["pink", "blue"]
```

With strings, `s[0] = 'x'` raises a TypeError. With lists, `lst[0] = 'x'` works perfectly.

### 4. List Methods

#### Adding Elements

`append(item)` adds a single item to the end of the list. `insert(index, item)` adds an item at a specific position. `extend(iterable)` adds all items from another iterable to the end.

#### Removing Elements

`remove(item)` removes the first occurrence of the specified item. Raises ValueError if not found. `pop(index)` removes and returns the item at the given index (default: last item). `clear()` removes all items.

#### Searching and Counting

`index(item)` returns the index of the first occurrence. Raises ValueError if not found. `count(item)` returns the number of occurrences.

#### Ordering

`sort()` sorts the list in place (ascending by default). `sort(reverse=True)` sorts descending. `reverse()` reverses the list in place.

#### Copying

`copy()` returns a shallow copy of the list.

### 5. List Comprehension

List comprehension is a concise way to create lists. The basic syntax is:

```
[expression for item in iterable]
```

With a condition (filter):

```
[expression for item in iterable if condition]
```

Examples:

```
squares = [x**2 for x in range(6)]        # [0, 1, 4, 9, 16, 25]
evens = [x for x in range(20) if x % 2 == 0]  # [0, 2, 4, ..., 18]
uppers = [s.upper() for s in ["hi", "bye"]]    # ["HI", "BYE"]
```

### 6. Nested Lists (2D Lists)

A list can contain other lists, creating a 2D structure (like a table or matrix):

```
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
matrix[0]      # [1, 2, 3] (first row)
matrix[0][1]   # 2 (first row, second column)
matrix[2][2]   # 9 (third row, third column)
```

To access an element in a nested list, use two indices: the first for the row, the second for the column.

### 7. List Copying Pitfalls

This is one of the most important topics for lists. When you write `b = a` where `a` is a list, you do NOT create a copy. Both `a` and `b` point to the **same list object**. Changing one changes the other.

```
a = [1, 2, 3]
b = a           # NOT a copy! Both point to same list
b.append(4)
print(a)        # [1, 2, 3, 4] - a is also changed!
```

To create an actual (shallow) copy, use any of these:

```
b = a.copy()    # Method 1
b = list(a)     # Method 2
b = a[:]        # Method 3
```

A **shallow copy** creates a new list, but nested objects inside are still shared. For nested lists, you may need `copy.deepcopy()` from the `copy` module.

### 8. Built-in Functions for Lists

`len(lst)` returns the number of elements. `min(lst)` and `max(lst)` return the smallest and largest elements. `sum(lst)` returns the sum (for numeric lists). `sorted(lst)` returns a new sorted list without modifying the original (unlike `.sort()` which modifies in place and returns None).

### 9. List Unpacking

You can assign list elements to individual variables in a single statement:

```
a, b, c = [10, 20, 30]
print(a)  # 10
print(b)  # 20
print(c)  # 30
```

The number of variables must match the number of elements, or use `*` for the rest:

```
first, *rest = [1, 2, 3, 4, 5]
print(first)  # 1
print(rest)   # [2, 3, 4, 5]
```

### 10. Membership and Deletion

The `in` operator checks if an item exists in a list: `3 in [1, 2, 3]` returns True. The `del` keyword removes an element by index or deletes a slice: `del lst[0]` removes the first element.

## Code Examples

### Creating and Accessing Lists

```python
# Creating lists
numbers = [10, 20, 30, 40, 50]
names = ["Aarav", "Priya", "Rohan"]
mixed = [1, "hello", 3.14, True]

# Accessing elements
print(numbers[0])      # First element
print(numbers[-1])     # Last element
print(names[1])        # Second element

# Modifying elements (lists are mutable!)
numbers[2] = 99
print(numbers)

# Length
print(len(names))
```

Lists are created with square brackets. Elements are accessed by index (0-based). Unlike strings, you can modify elements by assigning to an index. `len()` returns the number of elements in the list.

**Output:**

```
10
50
Priya
[10, 20, 99, 40, 50]
3
```

### List Methods - Adding and Removing

```python
fruits = ["apple", "banana"]

# Adding elements
fruits.append("cherry")        # Add to end
print("After append:", fruits)

fruits.insert(1, "mango")      # Insert at index 1
print("After insert:", fruits)

fruits.extend(["grape", "kiwi"])  # Add multiple items
print("After extend:", fruits)

# Removing elements
fruits.remove("banana")        # Remove by value
print("After remove:", fruits)

popped = fruits.pop()          # Remove and return last
print("Popped:", popped)
print("After pop:", fruits)

fruits.pop(0)                  # Remove at index 0
print("After pop(0):", fruits)
```

`append()` adds one item to the end. `insert()` adds at a specific position, shifting others right. `extend()` adds all items from an iterable. `remove()` removes the first match by value. `pop()` removes by index and returns the removed item.

**Output:**

```
After append: ['apple', 'banana', 'cherry']
After insert: ['apple', 'mango', 'banana', 'cherry']
After extend: ['apple', 'mango', 'banana', 'cherry', 'grape', 'kiwi']
After remove: ['apple', 'mango', 'cherry', 'grape', 'kiwi']
Popped: kiwi
After pop: ['apple', 'mango', 'cherry', 'grape']
After pop(0): ['mango', 'cherry', 'grape']
```

### sort() vs sorted()

```python
# sort() modifies the original list
nums = [5, 2, 8, 1, 9, 3]
nums.sort()
print("After sort():", nums)

# sort() returns None!
result = nums.sort(reverse=True)
print("Return value of sort():", result)
print("List after reverse sort:", nums)

# sorted() returns a NEW list, original unchanged
original = [5, 2, 8, 1, 9, 3]
new_list = sorted(original)
print("Original:", original)
print("Sorted copy:", new_list)

# sorted() with reverse
print("Sorted descending:", sorted(original, reverse=True))
```

`.sort()` sorts the list in place and returns `None`. `sorted()` returns a new sorted list, leaving the original unchanged. This is a common source of bugs: writing `result = lst.sort()` assigns None to result. Use `sorted()` when you need to keep the original.

**Output:**

```
After sort(): [1, 2, 3, 5, 8, 9]
Return value of sort(): None
List after reverse sort: [9, 8, 5, 3, 2, 1]
Original: [5, 2, 8, 1, 9, 3]
Sorted copy: [1, 2, 3, 5, 8, 9]
Sorted descending: [9, 8, 5, 3, 2, 1]
```

### List Comprehension

```python
# Basic comprehension
squares = [x**2 for x in range(1, 6)]
print("Squares:", squares)

# Comprehension with condition
evens = [x for x in range(1, 21) if x % 2 == 0]
print("Evens:", evens)

# Transform strings
names = ["aarav", "priya", "rohan"]
upper_names = [name.upper() for name in names]
print("Uppercase:", upper_names)

# Comprehension with expression
lengths = [len(name) for name in names]
print("Lengths:", lengths)

# Nested comprehension (flatten 2D to 1D)
matrix = [[1, 2], [3, 4], [5, 6]]
flat = [num for row in matrix for num in row]
print("Flattened:", flat)
```

List comprehension follows the pattern `[expression for item in iterable if condition]`. The condition is optional. You can apply any expression to transform items. Nested comprehensions iterate over multiple levels: the outer loop comes first, then the inner loop.

**Output:**

```
Squares: [1, 4, 9, 16, 25]
Evens: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
Uppercase: ['AARAV', 'PRIYA', 'ROHAN']
Lengths: [5, 5, 5]
Flattened: [1, 2, 3, 4, 5, 6]
```

### List Copying Pitfalls

```python
# The WRONG way - both variables point to the same list
a = [1, 2, 3]
b = a
b.append(4)
print("a:", a)  # a is also changed!
print("b:", b)
print("Same object?", a is b)

print()

# The RIGHT way - create a copy
x = [1, 2, 3]
y = x.copy()     # or x[:] or list(x)
y.append(4)
print("x:", x)  # x is unchanged
print("y:", y)
print("Same object?", x is y)

print()

# Shallow copy pitfall with nested lists
outer = [[1, 2], [3, 4]]
shallow = outer.copy()
shallow[0][0] = 99
print("outer:", outer)    # outer is also changed!
print("shallow:", shallow)
```

`b = a` creates an alias, not a copy. Both variables reference the same list object. `.copy()`, `[:]`, and `list()` create shallow copies. A shallow copy creates a new list, but nested objects inside are still shared. Modifying a nested list in the copy also modifies the original. Use `import copy; copy.deepcopy()` for truly independent nested copies.

**Output:**

```
a: [1, 2, 3, 4]
b: [1, 2, 3, 4]
Same object? True

x: [1, 2, 3]
y: [1, 2, 3, 4]
Same object? False

outer: [[99, 2], [3, 4]]
shallow: [[99, 2], [3, 4]]
```

### Nested Lists and 2D Access

```python
# Creating a 3x3 matrix
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Accessing elements
print("Row 0:", matrix[0])
print("Element [1][2]:", matrix[1][2])
print("Element [2][0]:", matrix[2][0])

# Iterating over a 2D list
print("\nAll elements:")
for row in matrix:
    for item in row:
        print(item, end=" ")
    print()

# Modifying a nested element
matrix[1][1] = 50
print("\nAfter modification:", matrix[1])
```

A nested list is a list of lists, commonly used as a 2D matrix. `matrix[i]` accesses the i-th row (itself a list). `matrix[i][j]` accesses the element at row i, column j. Use nested loops to iterate over all elements. Elements in nested lists can be modified in place.

**Output:**

```
Row 0: [1, 2, 3]
Element [1][2]: 6
Element [2][0]: 7

All elements:
1 2 3 
4 5 6 
7 8 9 

After modification: [4, 50, 6]
```

### Built-in Functions and Unpacking

```python
nums = [15, 8, 23, 4, 42, 16]

print("Length:", len(nums))
print("Sum:", sum(nums))
print("Min:", min(nums))
print("Max:", max(nums))

# List unpacking
a, b, c = [10, 20, 30]
print(f"a={a}, b={b}, c={c}")

# Extended unpacking with *
first, *middle, last = [1, 2, 3, 4, 5]
print(f"first={first}, middle={middle}, last={last}")

# Membership test
print(23 in nums)
print(99 in nums)

# del keyword
del nums[0]
print("After del nums[0]:", nums)
```

`len()`, `sum()`, `min()`, `max()` are built-in functions that work with lists. Unpacking assigns list elements to individual variables. The `*` operator collects remaining elements into a list. The `in` operator checks membership. `del` removes elements by index.

**Output:**

```
Length: 6
Sum: 108
Min: 4
Max: 42
a=10, b=20, c=30
first=1, middle=[2, 3, 4], last=5
True
False
After del nums[0]: [8, 23, 4, 42, 16]
```

### List Slicing and del

```python
nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(nums[2:7])      # Elements at indices 2-6
print(nums[::3])      # Every 3rd element
print(nums[::-1])     # Reversed
print(nums[7:2:-1])   # Backwards from index 7 to 3

# Slice assignment (replace a section)
nums[3:6] = [30, 40]
print("After slice assignment:", nums)

# del a slice
del nums[1:3]
print("After del slice:", nums)
```

List slicing follows the same `[start:stop:step]` syntax as strings. A key difference: you can **assign to a slice**, replacing a section of the list with new elements (even a different number of elements). You can also delete a slice with `del`.

**Output:**

```
[2, 3, 4, 5, 6]
[0, 3, 6, 9]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
[7, 6, 5, 4, 3]
After slice assignment: [0, 1, 2, 30, 40, 6, 7, 8, 9]
After del slice: [0, 30, 40, 6, 7, 8, 9]
```

## Common Mistakes

### Using = Instead of .copy() to Duplicate a List

**Wrong:**

```
original = [1, 2, 3]
backup = original
original.append(4)
print(backup)  # [1, 2, 3, 4] - backup is also changed!
```

No error, but backup is not an independent copy. Both variables reference the same list.

**Correct:**

```
original = [1, 2, 3]
backup = original.copy()  # or original[:] or list(original)
original.append(4)
print(backup)  # [1, 2, 3] - backup is independent
```

`backup = original` makes both variables point to the same list object in memory. Any change through one variable is visible through the other. To create an independent copy, use `.copy()`, `[:]`, or `list()`.

### Assigning sort() Return Value to a Variable

**Wrong:**

```
nums = [5, 3, 1, 4, 2]
sorted_nums = nums.sort()
print(sorted_nums)  # None!
```

sorted_nums is None because .sort() modifies the list in place and returns None.

**Correct:**

```
nums = [5, 3, 1, 4, 2]
sorted_nums = sorted(nums)  # Returns a new sorted list
print(sorted_nums)  # [1, 2, 3, 4, 5]
print(nums)         # [5, 3, 1, 4, 2] (unchanged)
```

`.sort()` sorts the list in place and returns `None`. This is a design choice in Python: methods that modify objects in place return None to avoid confusion. Use `sorted()` if you need a new sorted list while keeping the original.

### Using append() When extend() Is Needed

**Wrong:**

```
a = [1, 2, 3]
b = [4, 5, 6]
a.append(b)
print(a)  # [1, 2, 3, [4, 5, 6]] - b is added as a single nested element!
```

No error, but append adds the entire list as one element, creating a nested list.

**Correct:**

```
a = [1, 2, 3]
b = [4, 5, 6]
a.extend(b)
print(a)  # [1, 2, 3, 4, 5, 6] - elements are added individually
```

`append(item)` adds `item` as a single element to the end. If `item` is a list, the entire list becomes one nested element. `extend(iterable)` adds each element of the iterable individually. Use `extend()` or `+=` to merge two lists.

### Modifying a List While Iterating Over It

**Wrong:**

```
nums = [1, 2, 3, 4, 5, 6]
for num in nums:
    if num % 2 == 0:
        nums.remove(num)
print(nums)  # [1, 3, 5, 6] - 6 was not removed!
```

No error, but some elements are skipped because the list changes size during iteration.

**Correct:**

```
nums = [1, 2, 3, 4, 5, 6]
nums = [num for num in nums if num % 2 != 0]
print(nums)  # [1, 3, 5]
```

Removing elements while iterating causes the loop to skip elements because indices shift. When 2 is removed, 3 moves to index 1 and 4 moves to index 2. The loop advances to index 2 (now 4), skipping 3. Use list comprehension to create a filtered copy instead.

### IndexError with Empty List or Wrong Index

**Wrong:**

```
items = [10, 20, 30]
print(items[3])  # IndexError!
```

IndexError: list index out of range. Valid indices are 0, 1, 2 (or -1, -2, -3).

**Correct:**

```
items = [10, 20, 30]
if len(items) > 3:
    print(items[3])
else:
    print("Index 3 does not exist. Last index is", len(items) - 1)
```

A list with 3 elements has indices 0, 1, 2. Index 3 is out of range. Always check the list length before accessing an index, or use try/except to handle the error. Remember: the maximum valid index is `len(lst) - 1`.

### Shallow Copy Does Not Copy Nested Lists

**Wrong:**

```
matrix = [[1, 2], [3, 4]]
copy = matrix.copy()
copy[0][0] = 99
print(matrix)  # [[99, 2], [3, 4]] - original is changed!
```

No error, but modifying the nested list in the copy also modifies the original.

**Correct:**

```
import copy
matrix = [[1, 2], [3, 4]]
deep = copy.deepcopy(matrix)
deep[0][0] = 99
print(matrix)  # [[1, 2], [3, 4]] - original is safe
```

`.copy()` creates a **shallow** copy: the outer list is new, but inner lists are still shared references. To create a fully independent copy of a nested structure, use `copy.deepcopy()` from the `copy` module.

## Summary

- Lists are ordered, mutable collections created with square brackets []. They can hold items of any type, including other lists.
- Indexing uses 0-based positive indices (0, 1, 2...) and negative indices (-1, -2...). Accessing an out-of-range index raises IndexError.
- Slicing with [start:stop:step] works like strings. The stop index is excluded. You can assign to a slice to replace a section of the list.
- Lists are mutable: you can change elements by index, append, insert, remove, sort, and reverse in place. This is a key difference from strings and tuples.
- Key methods: append() adds one item, extend() adds multiple items, insert() adds at a position, remove() removes by value, pop() removes by index and returns it.
- .sort() sorts in place and returns None. sorted() returns a new sorted list. Do not assign .sort() to a variable.
- b = a creates an alias (not a copy). Use .copy(), [:], or list() for a shallow copy. Use copy.deepcopy() for nested lists.
- List comprehension [expr for item in iterable if condition] creates lists concisely. It replaces many for-loop-and-append patterns.
- Nested lists create 2D structures. Access with two indices: matrix[row][col]. Use nested loops to iterate over all elements.
- Built-in functions: len(), sum(), min(), max() work on lists. sorted() returns a new list. The 'in' operator checks membership. del removes by index.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/python/lists-in-python/*
*Practice questions: https://learn.modernagecoders.com/resources/python/lists-in-python/practice/*
