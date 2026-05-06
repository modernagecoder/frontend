---
title: "Practice: Tuples in Python"
description: "55 practice problems for Tuples in Python in Python"
slug: tuples-in-python-practice
canonical: https://learn.modernagecoders.com/resources/python/tuples-in-python/practice/
category: "Python"
---
# Practice: Tuples in Python

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
t = (10, 20, 30)
print(t[0])
print(t[-1])
```

*Hint:* Index 0 is the first element. Index -1 is the last element.

**Answer:** `10`
`30`

`t[0]` accesses the first element (10). `t[-1]` accesses the last element (30). Tuple indexing works exactly like list indexing.

### Q2. [Easy] What is the output?

```
print(type((5)))
print(type((5,)))
```

*Hint:* A single value in parentheses is just that value. A trailing comma creates a tuple.

**Answer:** ``
``

`(5)` is just the integer 5 in parentheses — type is `int`. `(5,)` has a trailing comma, making it a single-element tuple — type is `tuple`.

### Q3. [Easy] What is the output?

```
t = (1, 2, 3, 4, 5)
print(t[1:4])
print(len(t))
```

*Hint:* Slicing a tuple returns a new tuple. len() counts elements.

**Answer:** `(2, 3, 4)`
`5`

`t[1:4]` slices from index 1 to 3 (index 4 excluded), returning the tuple (2, 3, 4). `len(t)` returns 5.

### Q4. [Easy] What is the output?

```
t = (1, 2, 3, 2, 4, 2)
print(t.count(2))
print(t.index(3))
```

*Hint:* count() counts occurrences. index() returns the position of the first match.

**Answer:** `3`
`2`

`count(2)` returns 3 because 2 appears three times. `index(3)` returns 2 because the value 3 is at index 2.

### Q5. [Easy] What is the output?

```
a = 5
b = 10
a, b = b, a
print(a, b)
```

*Hint:* This is tuple unpacking. The right side creates a tuple, then it is unpacked into the left side.

**Answer:** `10 5`

The right side creates the tuple `(b, a)` = `(10, 5)`. Then it is unpacked: `a = 10`, `b = 5`. The swap happens in one step without needing a temporary variable.

### Q6. [Easy] What is the output?

```
t = (1, 2) + (3, 4)
print(t)
print(len(t))
```

*Hint:* The + operator concatenates tuples.

**Answer:** `(1, 2, 3, 4)`
`4`

`(1, 2) + (3, 4)` concatenates the two tuples into a new tuple (1, 2, 3, 4). The length is 4.

### Q7. [Medium] What is the output?

```
t = (10, 20, 30, 40, 50)
print(t[::-1])
print(t[3:0:-1])
```

*Hint:* [::-1] reverses. [3:0:-1] starts at index 3 and goes backward, stopping before index 0.

**Answer:** `(50, 40, 30, 20, 10)`
`(40, 30, 20)`

`t[::-1]` reverses the entire tuple. `t[3:0:-1]` starts at index 3 (40), goes backwards: indices 3, 2, 1 (stopping before index 0). Result: (40, 30, 20).

### Q8. [Medium] What is the output?

```
x, y, z = (100, 200, 300)
print(y)
```

*Hint:* Tuple unpacking assigns each element to the corresponding variable.

**Answer:** `200`

Unpacking assigns 100 to x, 200 to y, and 300 to z. Printing y gives 200.

### Q9. [Medium] What is the output?

```
first, *rest = (1, 2, 3, 4, 5)
print(first)
print(rest)
print(type(rest))
```

*Hint:* The * operator collects remaining elements. What type does it collect into?

**Answer:** `1`
`[2, 3, 4, 5]`
``

`first` gets 1. `*rest` collects the remaining elements into a **list** (not a tuple!): [2, 3, 4, 5]. Extended unpacking always produces a list, even when unpacking a tuple.

### Q10. [Medium] What is the output?

```
t = ("a", "b", "c")
print("b" in t)
print("d" in t)
print("ab" in t)
```

*Hint:* The 'in' operator checks if the item is an element of the tuple.

**Answer:** `True`
`False`
`False`

`"b" in t` is True because "b" is an element. `"d" in t` is False. `"ab" in t` is False because "ab" is not an element — the elements are individual strings "a", "b", "c". (Unlike strings, where "ab" in "abc" is True, tuple membership checks for exact element matches.)

### Q11. [Medium] What is the output?

```
nested = ((1, 2), (3, 4), (5, 6))
print(nested[1])
print(nested[1][0])
print(nested[-1][-1])
```

*Hint:* First index selects the inner tuple, second index selects the element within it.

**Answer:** `(3, 4)`
`3`
`6`

`nested[1]` is the second inner tuple: (3, 4). `nested[1][0]` is the first element of that: 3. `nested[-1][-1]` is the last element of the last tuple: 6.

### Q12. [Hard] What is the output?

```
t = (1, [2, 3], 4)
t[1].append(5)
print(t)
```

*Hint:* The tuple is immutable, but the list inside it is mutable.

**Answer:** `(1, [2, 3, 5], 4)`

The tuple prevents reassigning `t[1]` to a new object. But `t[1]` is a list, and lists are mutable. Calling `t[1].append(5)` modifies the list in place. The tuple still holds the same list object, but that object's contents have changed.

### Q13. [Hard] What is the output?

```
t = (0,) * 4
print(t)
print(type(t))
print(len(t))
```

*Hint:* The * operator repeats the tuple. (0,) is a single-element tuple.

**Answer:** `(0, 0, 0, 0)`
``
`4`

`(0,) * 4` repeats the single-element tuple (0,) four times, producing (0, 0, 0, 0). It is still a tuple with 4 elements.

### Q14. [Hard] What is the output?

```
a = (1, 2, 3)
b = (1, 2, 3)
print(a == b)
print(a is b)
```

*Hint:* == checks value equality. 'is' checks identity (same object in memory).

**Answer:** `True`
`True`

`a == b` is True because both tuples have the same elements. `a is b` is also True in CPython because of tuple interning: Python may reuse the same object for identical small tuples as an optimization. However, this behavior is an implementation detail and should not be relied upon.

### Q15. [Hard] What is the output?

```
t = (3, 1, 4, 1, 5, 9)
print(sorted(t))
print(type(sorted(t)))
print(t)
```

*Hint:* sorted() works on tuples but returns a list. The original tuple is unchanged.

**Answer:** `[1, 1, 3, 4, 5, 9]`
``
`(3, 1, 4, 1, 5, 9)`

`sorted()` can accept any iterable, including tuples. It returns a **list**, not a tuple. The original tuple is unchanged because tuples are immutable. To get a sorted tuple, wrap it: `tuple(sorted(t))`.

## Mixed Questions

### Q1. [Easy] What is the output?

```
t = (10, 20, 30)
print(max(t))
print(min(t))
print(sum(t))
```

*Hint:* max(), min(), and sum() work with tuples just like with lists.

**Answer:** `30`
`10`
`60`

`max()` returns 30, `min()` returns 10, `sum()` returns 60 (10+20+30). These built-in functions work with any iterable, including tuples.

### Q2. [Easy] What is the output?

```
t = tuple("hello")
print(t)
```

*Hint:* tuple() converts an iterable to a tuple. A string is iterable character by character.

**Answer:** `('h', 'e', 'l', 'l', 'o')`

`tuple("hello")` converts the string into a tuple of individual characters, just like `list("hello")` creates a list of characters.

### Q3. [Medium] What is the output?

```
students = [("Aarav", 90), ("Priya", 95), ("Rohan", 88)]
for name, marks in students:
    print(f"{name}: {marks}")
```

*Hint:* Each element of the list is a tuple that gets unpacked in the for loop.

**Answer:** `Aarav: 90`
`Priya: 95`
`Rohan: 88`

The list contains tuples. In each iteration, the tuple is unpacked into `name` and `marks`. This is a very common pattern for iterating over structured data.

### Q4. [Medium] What is the output?

```
t = (1, 2, 3)
lst = list(t)
lst.append(4)
t2 = tuple(lst)
print(t)
print(t2)
```

*Hint:* Convert tuple to list, modify, convert back. The original tuple is unchanged.

**Answer:** `(1, 2, 3)`
`(1, 2, 3, 4)`

Converting to list, appending 4, and converting back creates a new tuple (1, 2, 3, 4). The original tuple t remains (1, 2, 3) because tuples are immutable.

### Q5. [Medium] What is the output?

```
d = {(0, 0): "origin", (1, 0): "right"}
print(d[(0, 0)])
print((1, 0) in d)
```

*Hint:* Tuples can be dictionary keys. 'in' checks if a key exists.

**Answer:** `origin`
`True`

Tuples work as dictionary keys because they are hashable. `d[(0, 0)]` retrieves the value "origin". `(1, 0) in d` checks if the key exists and returns True.

### Q6. [Medium] What is the output?

```
a, b, c = 10, 20, 30
a, b, c = c, a, b
print(a, b, c)
```

*Hint:* The right side is evaluated first (creating a tuple), then unpacked into the left side.

**Answer:** `30 10 20`

First, `a, b, c = 10, 20, 30`. Then `c, a, b` evaluates to (30, 10, 20) using the CURRENT values. This tuple is then unpacked: a=30, b=10, c=20.

### Q7. [Medium] Why can tuples be used as dictionary keys but lists cannot?

*Hint:* Think about what property dictionary keys must have.

**Answer:** Dictionary keys must be **hashable** (able to produce a fixed hash value). Tuples are hashable because they are immutable — their content never changes, so their hash value stays constant. Lists are mutable, meaning their content can change, which would invalidate their hash value. Python therefore prohibits using lists as dictionary keys.

A dictionary uses hash values to quickly locate keys. If a key's hash changed (because the key was modified), the dictionary would not be able to find it again. Immutable types (int, str, tuple) have stable hash values. Mutable types (list, dict, set) do not. Note: a tuple containing a list is also not hashable.

### Q8. [Medium] When should you use a tuple instead of a list? Give three scenarios.

*Hint:* Think about immutability, dictionary keys, and function return values.

**Answer:** **1. Fixed data:** Coordinates (x, y), RGB colors (255, 128, 0), database records — data that should not change.
**2. Dictionary keys:** When you need a composite key like (row, col) or (first_name, last_name).
**3. Function return values:** Functions that return multiple values use tuple packing (return a, b, c). The caller unpacks with x, y, z = func().

Tuples communicate intent: this data is fixed. They also enable dictionary key usage, are slightly faster than lists, and protect data from accidental modification. Lists are better when the collection needs to grow, shrink, or be sorted.

### Q9. [Hard] What is the output?

```
t1 = (1, 2, [3, 4])
try:
    hash(t1)
except TypeError as e:
    print("Error:", e)
```

*Hint:* A tuple is hashable only if ALL its elements are hashable.

**Answer:** `Error: unhashable type: 'list'`

A tuple containing a mutable (unhashable) element like a list is itself not hashable. `hash()` fails with a TypeError because the list [3, 4] inside the tuple is not hashable. This tuple cannot be used as a dictionary key.

### Q10. [Hard] What is the output?

```
t = (1, 2, 3)
print(t * 2)
print(t + (4,))
print(t)
```

*Hint:* * repeats, + concatenates. Both create new tuples. The original is unchanged.

**Answer:** `(1, 2, 3, 1, 2, 3)`
`(1, 2, 3, 4)`
`(1, 2, 3)`

`t * 2` creates a new tuple by repeating t twice. `t + (4,)` creates a new tuple by appending 4. The original tuple t is unchanged because tuples are immutable. Note `(4,)` needs the comma to be a tuple.

## Multiple Choice Questions

### Q1. [Easy] Which of the following creates a tuple?

A. [1, 2, 3]
B. (1, 2, 3)
C. {1, 2, 3}
D. {1: 2, 3: 4}

**Answer:** B

**B is correct.** Parentheses `(1, 2, 3)` create a tuple. Square brackets (A) create a list. Curly braces with values (C) create a set. Curly braces with key:value pairs (D) create a dictionary.

### Q2. [Easy] What is the type of (42)?

A. tuple
B. int
C. list
D. str

**Answer:** B

**B is correct.** `(42)` is just the integer 42 in parentheses. The parentheses are treated as grouping, not as tuple creation. To make it a single-element tuple, use `(42,)`.

### Q3. [Easy] How many methods do tuples have?

A. 0
B. 2
C. 5
D. Same as lists

**Answer:** B

**B is correct.** Tuples have exactly 2 methods: `count()` and `index()`. They lack all modifying methods (append, remove, sort, reverse, etc.) because they are immutable.

### Q4. [Easy] What does a, b = b, a do?

A. Creates two tuples
B. Swaps the values of a and b
C. Assigns b to both a and b
D. Raises an error

**Answer:** B

**B is correct.** The right side `b, a` creates a tuple of current values. Then tuple unpacking assigns them: a gets b's old value, b gets a's old value. This swaps the variables in one line.

### Q5. [Easy] Can tuples be used as dictionary keys?

A. No, only strings can be keys
B. Yes, because tuples are immutable
C. Yes, but only tuples with integers
D. No, because tuples are sequences

**Answer:** B

**B is correct.** Tuples are immutable and therefore hashable, so they can be dictionary keys. Any immutable type (int, str, tuple of immutables) can be a key. Option C is wrong: tuples with strings can also be keys.

### Q6. [Medium] What is the output of tuple('abc')?

A. ('abc',)
B. ('a', 'b', 'c')
C. 'abc'
D. Error

**Answer:** B

**B is correct.** `tuple()` converts an iterable to a tuple. A string iterates character by character, so `tuple('abc')` produces ('a', 'b', 'c'). Option A would require `('abc',)` literal syntax.

### Q7. [Medium] What does extended unpacking with * always produce?

A. A tuple
B. A list
C. A set
D. Depends on the input type

**Answer:** B

**B is correct.** Extended unpacking with `*` always produces a **list**, even when unpacking a tuple. `first, *rest = (1, 2, 3)` gives `rest = [2, 3]` (a list, not a tuple).

### Q8. [Medium] What happens when you try to sort a tuple using .sort()?

A. The tuple gets sorted
B. A new sorted tuple is returned
C. AttributeError: tuple has no sort method
D. TypeError

**Answer:** C

**C is correct.** Tuples do not have a `.sort()` method because they are immutable. Calling `t.sort()` raises `AttributeError`. Use `sorted(t)` to get a sorted list from a tuple.

### Q9. [Medium] Is (1, [2, 3]) hashable?

A. Yes, all tuples are hashable
B. No, because it contains a list
C. Yes, but only in Python 3.9+
D. It depends on the Python implementation

**Answer:** B

**B is correct.** A tuple is hashable only if ALL its elements are hashable. Since [2, 3] is a list (unhashable), the entire tuple becomes unhashable. This tuple cannot be used as a dictionary key.

### Q10. [Medium] What is the output of (1, 2, 3) == [1, 2, 3]?

A. True
B. False
C. TypeError
D. None

**Answer:** B

**B is correct.** A tuple and a list are different types, so they are never equal even if they contain the same elements. `(1, 2, 3) == [1, 2, 3]` is False.

### Q11. [Hard] What is the output of (1, 2) + 3?

A. (1, 2, 3)
B. (4, 5)
C. TypeError
D. (1, 2, (3,))

**Answer:** C

**C is correct.** You can only concatenate a tuple with another tuple. `(1, 2) + 3` tries to add a tuple and an integer, which raises `TypeError: can only concatenate tuple (not "int") to tuple`. The correct way is `(1, 2) + (3,)`.

### Q12. [Hard] What does sorted() return when given a tuple?

A. A sorted tuple
B. A sorted list
C. None
D. TypeError

**Answer:** B

**B is correct.** `sorted()` always returns a **list**, regardless of the input type. `sorted((3, 1, 2))` returns `[1, 2, 3]` (a list). To get a sorted tuple, wrap it: `tuple(sorted(t))`.

### Q13. [Hard] What is the output of (1, 2, 3) > (1, 2, 2)?

A. True
B. False
C. TypeError
D. None

**Answer:** A

**A is correct.** Tuples are compared element by element (lexicographic comparison). First elements are equal (1 == 1). Second elements are equal (2 == 2). Third elements: 3 > 2, so the first tuple is greater. Result: True.

### Q14. [Hard] What is the result of bool(()) and bool((0,))?

A. False and False
B. True and True
C. False and True
D. True and False

**Answer:** C

**C is correct.** An empty tuple `()` is falsy, so `bool(())` is False. A non-empty tuple `(0,)` is truthy even though it contains zero, so `bool((0,))` is True. Truthiness depends on whether the container is empty, not on its contents.

### Q15. [Easy] Which is the correct way to create a single-element tuple containing 5?

A. (5)
B. [5]
C. (5,)
D. tuple(5)

**Answer:** C

**C is correct.** `(5,)` creates a single-element tuple. `(5)` (A) is just the integer 5. `[5]` (B) is a list. `tuple(5)` (D) raises TypeError because integers are not iterable.

## Coding Challenges

### Challenge 1. Find Min and Max Without Built-ins

**Difficulty:** Easy

Given the tuple (45, 12, 78, 34, 56, 89, 23), write a program that finds and prints the minimum and maximum values without using min() or max().

**Constraints:**

- Use a for loop. Do not use min() or max().

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Min: 12
Max: 89
```

**Solution:**

```python
nums = (45, 12, 78, 34, 56, 89, 23)
min_val = nums[0]
max_val = nums[0]
for num in nums:
    if num < min_val:
        min_val = num
    if num > max_val:
        max_val = num
print("Min:", min_val)
print("Max:", max_val)
```

### Challenge 2. Count Element Types

**Difficulty:** Easy

Given the tuple (1, 'hello', 3.14, True, 'world', 42, 2.5, False), write a program that counts how many integers, strings, floats, and booleans it contains. Note: in Python, bool is a subclass of int, so check for bool first.

**Constraints:**

- Use isinstance(). Check for bool before int.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Booleans: 2
Integers: 2
Floats: 2
Strings: 2
```

**Solution:**

```python
data = (1, 'hello', 3.14, True, 'world', 42, 2.5, False)
bools = ints = floats = strs = 0
for item in data:
    if isinstance(item, bool):
        bools += 1
    elif isinstance(item, int):
        ints += 1
    elif isinstance(item, float):
        floats += 1
    elif isinstance(item, str):
        strs += 1
print(f"Booleans: {bools}")
print(f"Integers: {ints}")
print(f"Floats: {floats}")
print(f"Strings: {strs}")
```

### Challenge 3. Rotate a Tuple

**Difficulty:** Easy

Write a program that rotates the tuple (1, 2, 3, 4, 5) to the right by 2 positions, so the result is (4, 5, 1, 2, 3).

**Constraints:**

- Use slicing. Do not convert to a list.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
(4, 5, 1, 2, 3)
```

**Solution:**

```python
t = (1, 2, 3, 4, 5)
k = 2
rotated = t[-k:] + t[:-k]
print(rotated)
```

### Challenge 4. Tuple to Dictionary

**Difficulty:** Medium

Priya has two tuples: keys = ('name', 'age', 'grade') and values = ('Priya', 16, 'A'). Write a program that combines them into a dictionary and prints it.

**Constraints:**

- Use zip() and dict(), or a loop.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
{'name': 'Priya', 'age': 16, 'grade': 'A'}
```

**Solution:**

```python
keys = ('name', 'age', 'grade')
values = ('Priya', 16, 'A')
result = dict(zip(keys, values))
print(result)
```

### Challenge 5. Sort a List of Tuples by Second Element

**Difficulty:** Medium

Given the list of tuples [("Aarav", 85), ("Priya", 92), ("Rohan", 78), ("Meera", 95)], write a program that sorts them by marks (second element) in descending order and prints the sorted list.

**Constraints:**

- Use sorted() with a key parameter.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
[('Meera', 95), ('Priya', 92), ('Aarav', 85), ('Rohan', 78)]
```

**Solution:**

```python
students = [("Aarav", 85), ("Priya", 92), ("Rohan", 78), ("Meera", 95)]
sorted_students = sorted(students, key=lambda x: x[1], reverse=True)
print(sorted_students)
```

### Challenge 6. Find Common Elements in Two Tuples

**Difficulty:** Medium

Given t1 = (1, 2, 3, 4, 5) and t2 = (3, 4, 5, 6, 7), write a program that finds and prints the common elements as a tuple, preserving order from t1.

**Constraints:**

- Use a loop or tuple comprehension (generator expression with tuple()).

**Sample input:**

```
(No input required)
```

**Sample output:**

```
(3, 4, 5)
```

**Solution:**

```python
t1 = (1, 2, 3, 4, 5)
t2 = (3, 4, 5, 6, 7)
common = tuple(x for x in t1 if x in t2)
print(common)
```

### Challenge 7. Named Tuple Student Records

**Difficulty:** Hard

Create a named tuple called Student with fields 'name', 'age', and 'marks'. Create three students: Aarav (16, 90), Priya (15, 95), Rohan (16, 88). Print the student with the highest marks.

**Constraints:**

- Use collections.namedtuple. Use max() with a key.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Top student: Priya with 95 marks
```

**Solution:**

```python
from collections import namedtuple

Student = namedtuple('Student', ['name', 'age', 'marks'])
students = [
    Student('Aarav', 16, 90),
    Student('Priya', 15, 95),
    Student('Rohan', 16, 88)
]
top = max(students, key=lambda s: s.marks)
print(f"Top student: {top.name} with {top.marks} marks")
```

### Challenge 8. Flatten Nested Tuples

**Difficulty:** Hard

Write a program that flattens the nested tuple ((1, 2), (3, 4, 5), (6,), (7, 8, 9, 10)) into a single flat tuple.

**Constraints:**

- Use a loop or generator expression. Do not use external libraries.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
```

**Solution:**

```python
nested = ((1, 2), (3, 4, 5), (6,), (7, 8, 9, 10))
flat = tuple(item for inner in nested for item in inner)
print(flat)
```

### Challenge 9. Coordinate Distance Calculator

**Difficulty:** Hard

Given two coordinate tuples p1 = (3, 4) and p2 = (7, 1), write a program that calculates and prints the Euclidean distance between them. Use the formula: sqrt((x2-x1)^2 + (y2-y1)^2). Round to 2 decimal places.

**Constraints:**

- Use tuple unpacking. Import math for sqrt.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Distance: 5.0
```

**Solution:**

```python
import math
p1 = (3, 4)
p2 = (7, 1)
x1, y1 = p1
x2, y2 = p2
distance = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
print(f"Distance: {distance:.1f}")
```

---

*Notes: https://learn.modernagecoders.com/resources/python/tuples-in-python/*
