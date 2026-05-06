---
title: "Sets in Python - Set Operations, Methods, Frozenset | Modern Age Coders"
description: "Learn Python sets including set operations (union, intersection, difference), set methods (add, remove, discard), frozenset, set comprehension, and deduplication. Includes 55+ practice questions with output prediction and coding challenges."
slug: sets-in-python
canonical: https://learn.modernagecoders.com/resources/python/sets-in-python/
category: "Python"
keywords: ["python set", "set operations python", "set methods python", "python set tutorial", "python frozenset", "python set comprehension", "python set vs list", "python set union intersection", "python set examples", "python remove duplicates set"]
---
# Sets in Python

**Difficulty:** Intermediate  
**Reading time:** 28 min  
**Chapter:** 15  
**Practice questions:** 55

## What Are Sets in Python?

A **set** is an **unordered** collection of **unique** elements. Unlike lists and tuples, sets do not allow duplicate values. If you add a duplicate, the set silently ignores it.

Sets are defined using curly braces `{}` with elements separated by commas, or using the `set()` constructor:

```
fruits = {"apple", "banana", "cherry"}
numbers = {1, 2, 3, 4, 5}
mixed = {1, "hello", 3.14, True}
```

Sets are **mutable** (you can add and remove elements), but the elements themselves must be **immutable** (hashable). You can store strings, numbers, and tuples in a set, but not lists or dictionaries.

### Creating Sets

```
# Using curly braces
colors = {"red", "green", "blue"}

# Using set() constructor
vowels = set("aeiou")        # {'a', 'e', 'i', 'o', 'u'}
from_list = set([1, 2, 2, 3]) # {1, 2, 3} - duplicates removed

# IMPORTANT: Empty set pitfall
empty_set = set()   # Correct way to create an empty set
empty_dict = {}     # This creates an empty DICTIONARY, not a set!
print(type(empty_set))   # 
print(type(empty_dict))  # 
```

The empty set pitfall is one of the most common mistakes in Python. Since `{}` was historically used for dictionaries, an empty `{}` creates a dict, not a set. Always use `set()` for an empty set.

## Why Are Sets Important?

Sets solve specific problems that lists and tuples cannot solve efficiently. Here is why they matter:

### 1. Automatic Deduplication

The simplest way to remove duplicates from a list is to convert it to a set. If Priya has a list of 10,000 student roll numbers with duplicates, `set(roll_numbers)` gives her a clean, unique collection instantly.

### 2. Fast Membership Testing

Checking if an element exists in a set is **O(1) average time**, compared to O(n) for a list. If Rohan needs to check whether each of 1,000 names appears in a list of 50,000 names, using a set instead of a list can be hundreds of times faster.

### 3. Mathematical Set Operations

Sets support union, intersection, difference, and symmetric difference. These operations are fundamental in data analysis, database queries, and algorithm design. For example, finding students who are in both the Maths club AND the Science club is a simple intersection.

### 4. Data Validation

Sets are useful for checking that all required fields are present, that two datasets have no overlap, or that one collection is a subset of another. These checks appear constantly in form validation, configuration checking, and testing.

### 5. Foundation for Advanced Concepts

Understanding sets prepares you for frozensets (immutable sets used as dictionary keys), database operations (SQL uses set theory), and algorithms involving unique elements (graph traversal, visited nodes).

## Detailed Explanation

### 1. Set Properties

Sets have three key properties:

- **Unordered:** Elements have no index. You cannot access `s[0]` or slice a set. The order you see when printing may differ from the order you added elements.
- **No duplicates:** Each element appears at most once. Adding a duplicate has no effect.
- **Mutable:** You can add and remove elements after creation. However, the elements themselves must be immutable (hashable).

```
s = {3, 1, 4, 1, 5, 9, 2, 6, 5}
print(s)       # {1, 2, 3, 4, 5, 6, 9} - duplicates removed, order may vary
print(len(s))  # 7 (not 9, duplicates are removed)
```

### 2. Adding Elements

`add(element)` adds a single element. If it already exists, nothing happens.

`update(iterable)` adds multiple elements from an iterable (list, tuple, string, another set).

```
s = {1, 2, 3}
s.add(4)            # {1, 2, 3, 4}
s.add(2)            # {1, 2, 3, 4} - no effect, 2 already exists
s.update([5, 6, 7]) # {1, 2, 3, 4, 5, 6, 7}
s.update("hi")      # Adds 'h' and 'i' individually
```

### 3. Removing Elements: remove() vs discard()

This is a crucial distinction:

`remove(element)` removes the element. Raises **KeyError** if the element does not exist.

`discard(element)` removes the element. Does **nothing** if the element does not exist. No error.

`pop()` removes and returns an **arbitrary** element. Raises KeyError if the set is empty.

`clear()` removes all elements.

```
s = {1, 2, 3, 4, 5}
s.remove(3)     # {1, 2, 4, 5}
s.discard(10)   # No error, even though 10 is not in the set
# s.remove(10) would raise KeyError
elem = s.pop()  # Removes and returns an arbitrary element
s.clear()       # set()
```

### 4. Set Operations

Python sets support all standard mathematical set operations. Each operation has both a method and an operator:

#### Union (elements in either set)

```
a = {1, 2, 3}
b = {3, 4, 5}
print(a | b)           # {1, 2, 3, 4, 5}
print(a.union(b))      # {1, 2, 3, 4, 5}
```

#### Intersection (elements in both sets)

```
print(a & b)               # {3}
print(a.intersection(b))   # {3}
```

#### Difference (elements in first but not second)

```
print(a - b)             # {1, 2}
print(a.difference(b))   # {1, 2}
print(b - a)             # {4, 5}  (order matters!)
```

#### Symmetric Difference (elements in either set but not both)

```
print(a ^ b)                       # {1, 2, 4, 5}
print(a.symmetric_difference(b))   # {1, 2, 4, 5}
```

### 5. Subset, Superset, and Disjoint

These methods test relationships between sets:

```
a = {1, 2, 3}
b = {1, 2, 3, 4, 5}
c = {6, 7}

print(a.issubset(b))      # True  (all of a is in b)
print(a <= b)             # True  (operator form)
print(b.issuperset(a))    # True  (b contains all of a)
print(b >= a)             # True  (operator form)
print(a.isdisjoint(c))    # True  (no common elements)
print(a.isdisjoint(b))    # False (they share 1, 2, 3)
```

### 6. Frozenset: Immutable Sets

A `frozenset` is an immutable version of a set. Once created, you cannot add or remove elements. Because frozensets are immutable (and therefore hashable), they can be used as dictionary keys or as elements of another set.

```
fs = frozenset([1, 2, 3])
print(fs)          # frozenset({1, 2, 3})
# fs.add(4)       # AttributeError! frozensets are immutable

# Use as dictionary key
cache = {frozenset({1, 2}): "result_a"}
print(cache[frozenset({1, 2})])  # "result_a"

# Use as element of another set
set_of_sets = {frozenset({1, 2}), frozenset({3, 4})}
print(set_of_sets)
```

### 7. Set Comprehension

Like list and dictionary comprehension, set comprehension creates sets in a single expression:

```
{expression for item in iterable}
{expression for item in iterable if condition}
```

Examples:

```
squares = {x**2 for x in range(1, 6)}
print(squares)  # {1, 4, 9, 16, 25}

even_squares = {x**2 for x in range(1, 11) if x % 2 == 0}
print(even_squares)  # {4, 16, 36, 64, 100}

# Deduplication with transformation
names = ["Aarav", "priya", "ROHAN", "aarav", "Priya"]
unique_lower = {name.lower() for name in names}
print(unique_lower)  # {'aarav', 'priya', 'rohan'}
```

### 8. Set vs List: Performance for Membership Testing

When you need to check whether elements exist in a collection, sets are dramatically faster than lists:

```
import time

# Creating a large collection
big_list = list(range(1_000_000))
big_set = set(big_list)

# List membership: O(n)
start = time.time()
999_999 in big_list
list_time = time.time() - start

# Set membership: O(1)
start = time.time()
999_999 in big_set
set_time = time.time() - start

# Set is hundreds or thousands of times faster
```

Rule of thumb: if you only need to check membership and do not need ordering or duplicates, use a set.

### 9. Using Sets for Deduplication

The most common practical use of sets is removing duplicates from a list:

```
numbers = [1, 5, 2, 1, 3, 5, 4, 2]
unique = list(set(numbers))  # Order may change!
print(unique)  # [1, 2, 3, 4, 5] (order not guaranteed)

# Preserving original order (Python 3.7+)
seen = set()
ordered_unique = []
for n in numbers:
    if n not in seen:
        seen.add(n)
        ordered_unique.append(n)
print(ordered_unique)  # [1, 5, 2, 3, 4] (original order preserved)
```

Note that converting to a set and back to a list does not preserve the original order. If order matters, use the seen-set pattern shown above.

## Code Examples

### Creating Sets and the Empty Set Pitfall

```python
# Different ways to create sets
fruits = {"apple", "banana", "cherry"}
print("Fruits:", fruits)

# From a list (removes duplicates)
numbers = set([1, 2, 2, 3, 3, 3])
print("Numbers:", numbers)

# From a string (each character becomes an element)
letters = set("hello")
print("Letters:", letters)

# Empty set pitfall
empty_set = set()
empty_dict = {}
print("\nType of set():", type(empty_set))
print("Type of {}:", type(empty_dict))
print("Are they the same?", type(empty_set) == type(empty_dict))
```

Sets can be created from literals, lists, and strings. When created from a list, duplicates are automatically removed. When created from a string, each unique character becomes an element. The empty `{}` creates a dictionary, not a set. Always use `set()` for an empty set.

**Output:**

```
Fruits: {'cherry', 'apple', 'banana'}
Numbers: {1, 2, 3}
Letters: {'h', 'e', 'l', 'o'}

Type of set(): <class 'set'>
Type of {}: <class 'dict'>
Are they the same? False
```

### Adding and Removing Elements

```python
s = {1, 2, 3}
print("Original:", s)

# add() - single element
s.add(4)
print("After add(4):", s)

s.add(2)  # Already exists, no effect
print("After add(2):", s)

# update() - multiple elements
s.update([5, 6, 7])
print("After update([5,6,7]):", s)

# remove() vs discard()
s.remove(7)
print("After remove(7):", s)

s.discard(100)  # No error even though 100 is not in the set
print("After discard(100):", s)

# pop() - removes arbitrary element
elem = s.pop()
print(f"Popped: {elem}, Remaining: {s}")

# clear()
s.clear()
print("After clear():", s)
```

`add()` adds one element. `update()` adds multiple from an iterable. `remove()` raises KeyError if the element is missing; `discard()` does not. `pop()` removes and returns an arbitrary element. `clear()` empties the set.

**Output:**

```
Original: {1, 2, 3}
After add(4): {1, 2, 3, 4}
After add(2): {1, 2, 3, 4}
After update([5,6,7]): {1, 2, 3, 4, 5, 6, 7}
After remove(7): {1, 2, 3, 4, 5, 6}
After discard(100): {1, 2, 3, 4, 5, 6}
Popped: 1, Remaining: {2, 3, 4, 5, 6}
After clear(): set()
```

### Set Operations: Union, Intersection, Difference

```python
maths_club = {"Aarav", "Priya", "Rohan", "Meera"}
science_club = {"Priya", "Vikram", "Meera", "Kavya"}

# Union: students in either club
print("Union:", maths_club | science_club)

# Intersection: students in both clubs
print("Intersection:", maths_club & science_club)

# Difference: only in maths club
print("Only Maths:", maths_club - science_club)

# Difference: only in science club
print("Only Science:", science_club - maths_club)

# Symmetric difference: in one but not both
print("Exclusive:", maths_club ^ science_club)
```

Union (`|`) combines all unique elements. Intersection (`&`) keeps only common elements. Difference (`-`) keeps elements in the first set that are not in the second. Symmetric difference (`^`) keeps elements that are in one set but not both.

**Output:**

```
Union: {'Vikram', 'Aarav', 'Priya', 'Rohan', 'Kavya', 'Meera'}
Intersection: {'Priya', 'Meera'}
Only Maths: {'Aarav', 'Rohan'}
Only Science: {'Vikram', 'Kavya'}
Exclusive: {'Vikram', 'Aarav', 'Rohan', 'Kavya'}
```

### Subset, Superset, and Disjoint Checks

```python
a = {1, 2, 3}
b = {1, 2, 3, 4, 5}
c = {8, 9}

# Subset: is a contained within b?
print("a subset of b:", a.issubset(b))       # True
print("a <= b:", a <= b)                      # True
print("b subset of a:", b.issubset(a))       # False

# Superset: does b contain all of a?
print("\nb superset of a:", b.issuperset(a)) # True
print("b >= a:", b >= a)                      # True

# Disjoint: no common elements?
print("\na disjoint c:", a.isdisjoint(c))    # True
print("a disjoint b:", a.isdisjoint(b))      # False

# Proper subset (strict): a < b
print("\na proper subset of b:", a < b)      # True
print("a proper subset of a:", a < a)        # False (equal, not proper)
```

`issubset()` checks if all elements of one set exist in another. `issuperset()` is the reverse. `isdisjoint()` returns True when two sets have no common elements. The `<` operator checks for proper subset (subset but not equal).

**Output:**

```
a subset of b: True
a <= b: True
b subset of a: False

b superset of a: True
b >= a: True

a disjoint c: True
a disjoint b: False

a proper subset of b: True
a proper subset of a: False
```

### Frozenset: Immutable Sets

```python
# Creating a frozenset
fs = frozenset([1, 2, 3, 2, 1])
print("Frozenset:", fs)
print("Type:", type(fs))

# Frozenset supports set operations
fs2 = frozenset([3, 4, 5])
print("Union:", fs | fs2)
print("Intersection:", fs & fs2)

# Frozenset as dictionary key (sets cannot be keys)
cache = {}
cache[frozenset({"a", "b"})] = "result_1"
cache[frozenset({"c", "d"})] = "result_2"
print("\nCache:", cache)
print("Lookup:", cache[frozenset({"a", "b"})])

# Frozenset as element of another set
set_of_sets = {frozenset({1, 2}), frozenset({3, 4})}
print("\nSet of frozensets:", set_of_sets)
```

Frozensets are immutable sets. They support all read operations and set operations (union, intersection, etc.) but not `add()`, `remove()`, or `discard()`. Because they are hashable, they can be used as dictionary keys or as elements of other sets.

**Output:**

```
Frozenset: frozenset({1, 2, 3})
Type: <class 'frozenset'>
Union: frozenset({1, 2, 3, 4, 5})
Intersection: frozenset({3})

Cache: {frozenset({'a', 'b'}): 'result_1', frozenset({'c', 'd'}): 'result_2'}
Lookup: result_1

Set of frozensets: {frozenset({3, 4}), frozenset({1, 2})}
```

### Set Comprehension and Deduplication

```python
# Set comprehension
squares = {x**2 for x in range(1, 8)}
print("Squares:", squares)

# With condition
even_squares = {x**2 for x in range(1, 11) if x % 2 == 0}
print("Even squares:", even_squares)

# Deduplication: simple
names = ["Aarav", "Priya", "Rohan", "Aarav", "Priya", "Meera"]
unique = list(set(names))
print("\nUnique (unordered):", unique)

# Deduplication: preserving order
seen = set()
ordered = []
for name in names:
    if name not in seen:
        seen.add(name)
        ordered.append(name)
print("Unique (ordered):", ordered)

# Case-insensitive deduplication
mixed = ["Aarav", "aarav", "AARAV", "Priya", "priya"]
unique_lower = {name.lower() for name in mixed}
print("\nCase-insensitive unique:", unique_lower)
```

Set comprehension works like list comprehension but creates a set. For deduplication, `list(set(data))` is the quickest approach but loses order. The seen-set pattern preserves original order. Case-insensitive deduplication uses `.lower()` inside a set comprehension.

**Output:**

```
Squares: {1, 4, 9, 16, 25, 36, 49}
Even squares: {4, 16, 36, 64, 100}

Unique (unordered): ['Priya', 'Aarav', 'Rohan', 'Meera']
Unique (ordered): ['Aarav', 'Priya', 'Rohan', 'Meera']

Case-insensitive unique: {'aarav', 'priya'}
```

### Set vs List Performance

```python
# Demonstrating why sets are faster for lookups
import time

# Build a large collection
size = 500000
big_list = list(range(size))
big_set = set(big_list)

# Search for an element near the end
target = size - 1

# List membership
start = time.time()
result_list = target in big_list
list_time = time.time() - start

# Set membership
start = time.time()
result_set = target in big_set
set_time = time.time() - start

print(f"List lookup: {list_time:.6f} seconds")
print(f"Set lookup:  {set_time:.6f} seconds")
print(f"Set is approximately {list_time / max(set_time, 0.000001):.0f}x faster")
print(f"Both found the element: {result_list == result_set}")
```

List membership testing is O(n) because Python must scan each element sequentially. Set membership is O(1) average because sets use hash tables. For large collections, this difference is enormous. Use sets when you need frequent membership checks.

**Output:**

```
List lookup: 0.012543 seconds
Set lookup:  0.000001 seconds
Set is approximately 12543x faster
Both found the element: True
```

## Common Mistakes

### Using {} for an Empty Set (Creates a Dict Instead)

**Wrong:**

```
empty = {}
print(type(empty))  # <class 'dict'> - Not a set!
empty.add(1)  # AttributeError: 'dict' object has no attribute 'add'
```

AttributeError: 'dict' object has no attribute 'add'

**Correct:**

```
empty = set()
print(type(empty))  # <class 'set'>
empty.add(1)
print(empty)  # {1}
```

Empty curly braces `{}` create a dictionary, not a set. This is because dictionaries existed in Python before sets, and `{}` was already taken. Use `set()` to create an empty set.

### Using remove() on a Missing Element (Use discard() Instead)

**Wrong:**

```
s = {1, 2, 3}
s.remove(10)  # KeyError: 10
```

KeyError: 10

**Correct:**

```
s = {1, 2, 3}
s.discard(10)  # No error, even though 10 is not in the set
print(s)  # {1, 2, 3}
```

`remove()` raises a `KeyError` if the element is not found. Use `discard()` when you are not sure whether the element exists. `discard()` silently does nothing if the element is missing.

### Trying to Add a List to a Set (Lists Are Unhashable)

**Wrong:**

```
s = {1, 2, 3}
s.add([4, 5])  # TypeError: unhashable type: 'list'
```

TypeError: unhashable type: 'list'

**Correct:**

```
s = {1, 2, 3}
s.add((4, 5))  # Tuples are hashable
print(s)  # {1, 2, 3, (4, 5)}
```

Set elements must be hashable (immutable). Lists are mutable and therefore unhashable. Convert the list to a tuple before adding it to a set.

### Assuming Sets Maintain Insertion Order

**Wrong:**

```
s = {5, 3, 1, 4, 2}
print(s)  # May print {1, 2, 3, 4, 5} - NOT guaranteed to be {5, 3, 1, 4, 2}
first = s[0]  # TypeError: 'set' object is not subscriptable
```

TypeError: 'set' object is not subscriptable

**Correct:**

```
s = {5, 3, 1, 4, 2}
for elem in s:  # Iterate (order not guaranteed)
    print(elem, end=" ")
print()

# If you need ordering, use a list or sorted()
ordered = sorted(s)
print(ordered)  # [1, 2, 3, 4, 5]
```

Sets are unordered. You cannot access elements by index. The printed order may appear sorted for small integer sets, but this is an implementation detail, not a guarantee. Use `sorted()` or convert to a list if you need order.

### Confusing Difference Direction: a - b vs b - a

**Wrong:**

```
a = {1, 2, 3}
b = {3, 4, 5}
# Expecting elements not in common
result = a - b
print(result)  # {1, 2} - NOT {1, 2, 4, 5}!
```

No error, but the result is not what was expected. a - b gives elements in a but not in b, not all non-shared elements.

**Correct:**

```
a = {1, 2, 3}
b = {3, 4, 5}
# Elements in a but not in b
print("a - b:", a - b)  # {1, 2}
# Elements in b but not in a
print("b - a:", b - a)  # {4, 5}
# Elements in either but not both (symmetric difference)
print("a ^ b:", a ^ b)  # {1, 2, 4, 5}
```

Set difference (`-`) is not symmetric: `a - b` gives elements in a that are not in b. If you want elements that are in one set but not both, use symmetric difference (`^`).

### Using set() on a Dictionary (Gets Keys, Not Key-Value Pairs)

**Wrong:**

```
d = {"name": "Aarav", "age": 16}
s = set(d)
print(s)  # {'name', 'age'} - Not the key-value pairs!
```

No error, but only keys are captured, not values.

**Correct:**

```
d = {"name": "Aarav", "age": 16}
keys = set(d)            # {'name', 'age'}
values = set(d.values()) # {'Aarav', 16}
items = set(d.items())   # {('name', 'Aarav'), ('age', 16)}
print("Keys:", keys)
print("Values:", values)
print("Items:", items)
```

Iterating over a dictionary yields its keys. So `set(d)` creates a set of keys. To get values, use `set(d.values())`. To get key-value pairs, use `set(d.items())`.

## Summary

- Sets are unordered collections of unique elements. Duplicates are automatically removed. Defined with curly braces {elements} or set(iterable).
- To create an empty set, use set(), not {}. Empty curly braces {} create a dictionary.
- Sets are mutable (add, remove elements), but elements must be immutable (hashable). You cannot store lists or dictionaries in a set.
- add() inserts one element. update() inserts multiple from an iterable. Both ignore duplicates.
- remove() raises KeyError for missing elements. discard() does nothing for missing elements. Prefer discard() when uncertain.
- Set operations: union (|), intersection (&), difference (-), symmetric_difference (^). Each has both an operator and a method form.
- issubset(), issuperset(), and isdisjoint() test set relationships. Operators <=, >=, and < also work.
- frozenset is an immutable set. It can be used as a dictionary key or as an element of another set.
- Set comprehension {expr for item in iterable if condition} creates sets concisely, similar to list comprehension.
- Set membership testing (in operator) is O(1) average time, compared to O(n) for lists. Use sets for fast lookups.
- Deduplication: list(set(data)) removes duplicates but loses order. Use a seen-set pattern to preserve original order.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/python/sets-in-python/*
*Practice questions: https://learn.modernagecoders.com/resources/python/sets-in-python/practice/*
