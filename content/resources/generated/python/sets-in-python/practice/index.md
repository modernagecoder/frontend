---
title: "Practice: Sets in Python"
description: "55 practice problems for Sets in Python in Python"
slug: sets-in-python-practice
canonical: https://learn.modernagecoders.com/resources/python/sets-in-python/practice/
category: "Python"
---
# Practice: Sets in Python

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
s = {1, 2, 3, 2, 1}
print(s)
print(len(s))
```

*Hint:* Sets automatically remove duplicate elements.

**Answer:** `{1, 2, 3}`
`3`

Sets remove duplicates automatically. The set contains only unique values: 1, 2, 3. `len(s)` returns 3, not 5.

### Q2. [Easy] What is the output?

```
s = set("banana")
print(s)
print(len(s))
```

*Hint:* Each unique character in the string becomes a set element.

**Answer:** `{'b', 'a', 'n'}`
`3`

The string "banana" has characters b, a, n, a, n, a. The set keeps only unique characters: 'b', 'a', 'n'. Length is 3. Order may vary.

### Q3. [Easy] What is the output?

```
print(type({}))
print(type(set()))
```

*Hint:* Empty curly braces create a dictionary, not a set.

**Answer:** ``
``

Empty `{}` creates a dictionary (dict). To create an empty set, use `set()`. This is a common Python gotcha.

### Q4. [Easy] What is the output?

```
s = {1, 2, 3}
s.add(4)
s.add(2)
print(s)
print(len(s))
```

*Hint:* add() adds the element if it does not exist. Adding a duplicate has no effect.

**Answer:** `{1, 2, 3, 4}`
`4`

`s.add(4)` adds 4 to the set. `s.add(2)` does nothing because 2 is already in the set. The set has 4 elements.

### Q5. [Easy] What is the output?

```
a = {1, 2, 3}
b = {3, 4, 5}
print(a & b)
print(a | b)
```

*Hint:* & is intersection (common elements). | is union (all elements).

**Answer:** `{3}`
`{1, 2, 3, 4, 5}`

`a & b` (intersection) returns elements common to both: {3}. `a | b` (union) returns all unique elements from both sets.

### Q6. [Easy] What is the output?

```
s = {10, 20, 30}
print(20 in s)
print(40 in s)
```

*Hint:* The 'in' operator checks if an element exists in the set.

**Answer:** `True`
`False`

20 is in the set, so `20 in s` returns True. 40 is not in the set, so `40 in s` returns False.

### Q7. [Medium] What is the output?

```
a = {1, 2, 3}
b = {3, 4, 5}
print(a - b)
print(b - a)
```

*Hint:* Set difference is not symmetric. a - b means elements in a but not in b.

**Answer:** `{1, 2}`
`{4, 5}`

`a - b` gives elements in a that are not in b: {1, 2}. `b - a` gives elements in b that are not in a: {4, 5}. Difference is directional.

### Q8. [Medium] What is the output?

```
a = {1, 2, 3}
b = {3, 4, 5}
print(a ^ b)
```

*Hint:* ^ is symmetric difference: elements in either set but not both.

**Answer:** `{1, 2, 4, 5}`

Symmetric difference (`^`) returns elements that are in one set or the other, but not in both. 3 is in both, so it is excluded. Result: {1, 2, 4, 5}.

### Q9. [Medium] What is the output?

```
a = {1, 2}
b = {1, 2, 3, 4}
print(a.issubset(b))
print(b.issubset(a))
print(a.issuperset(b))
```

*Hint:* issubset() checks if all elements of a are in b.

**Answer:** `True`
`False`
`False`

All elements of a (1, 2) are in b, so `a.issubset(b)` is True. b has elements (3, 4) not in a, so `b.issubset(a)` is False. a does not contain all of b, so `a.issuperset(b)` is False.

### Q10. [Medium] What is the output?

```
s = {1, 2, 3}
s.update([3, 4, 5])
print(s)
print(len(s))
```

*Hint:* update() adds all elements from the iterable. Duplicates are ignored.

**Answer:** `{1, 2, 3, 4, 5}`
`5`

`update([3, 4, 5])` adds 3, 4, and 5. Since 3 already exists, only 4 and 5 are new. The set now has 5 elements.

### Q11. [Medium] What is the output?

```
s = {1, 2, 3}
s.discard(2)
s.discard(10)
print(s)
```

*Hint:* discard() removes the element if present, does nothing otherwise.

**Answer:** `{1, 3}`

`discard(2)` removes 2 from the set. `discard(10)` does nothing because 10 is not in the set (no error raised). Result: {1, 3}.

### Q12. [Medium] What is the output?

```
result = {x**2 for x in range(1, 6)}
print(result)
print(type(result))
```

*Hint:* This is a set comprehension, not a dictionary comprehension (no colon).

**Answer:** `{1, 4, 9, 16, 25}`
``

Set comprehension uses `{expr for item in iterable}` (no colon, unlike dictionary comprehension). It creates a set of squares: {1, 4, 9, 16, 25}.

### Q13. [Hard] What is the output?

```
a = {1, 2, 3}
b = {1, 2, 3}
print(a == b)
print(a is b)
print(a < b)
print(a <= b)
```

*Hint:* == checks value equality. < checks proper subset. <= checks subset.

**Answer:** `True`
`False`
`False`
`True`

`a == b` is True because they contain the same elements. `a is b` is False because they are different objects. `a < b` is False because a is not a PROPER subset of b (they are equal). `a <= b` is True because a is a subset of b (subset includes equal sets).

### Q14. [Hard] What is the output?

```
s = {True, 1, 1.0}
print(s)
print(len(s))
```

*Hint:* In Python, True == 1 == 1.0. Sets treat equal values as duplicates.

**Answer:** `{True}`
`1`

In Python, `True == 1` and `1 == 1.0`, so they are considered the same value by the set. The set keeps only the first one encountered: True. The length is 1.

### Q15. [Hard] What is the output?

```
fs = frozenset([1, 2, 3])
print(fs)
print(type(fs))
print(fs | {4, 5})
```

*Hint:* Frozensets support set operations but not mutations.

**Answer:** `frozenset({1, 2, 3})`
``
`frozenset({1, 2, 3, 4, 5})`

A frozenset is printed with its type prefix. Set operations like union (`|`) work on frozensets and return a new frozenset. The original is not modified because frozensets are immutable.

### Q16. [Hard] What is the output?

```
names = ["Aarav", "Priya", "Aarav", "Rohan", "Priya"]
seen = set()
ordered = []
for name in names:
    if name not in seen:
        seen.add(name)
        ordered.append(name)
print(ordered)
```

*Hint:* This pattern removes duplicates while preserving the original order.

**Answer:** `['Aarav', 'Priya', 'Rohan']`

The seen-set tracks which names have been encountered. On first occurrence, the name is added to both the set and the list. Duplicates are skipped. The list preserves insertion order: ['Aarav', 'Priya', 'Rohan'].

### Q17. [Hard] What is the output?

```
a = {1, 2, 3}
b = {2, 3, 4}
a &= b
print(a)
```

*Hint:* &= is the in-place intersection operator. It modifies a.

**Answer:** `{2, 3}`

`a &= b` is shorthand for `a = a & b`. It updates a to contain only elements present in both a and b. The common elements are 2 and 3.

## Mixed Questions

### Q1. [Easy] What is the output?

```
nums = [1, 2, 3, 2, 1]
print(list(set(nums)))
```

*Hint:* Converting a list to a set removes duplicates. Converting back gives a list.

**Answer:** `[1, 2, 3]`

`set(nums)` removes duplicates: {1, 2, 3}. `list()` converts back to a list. Note: the order may vary, but for small integer sets, Python typically shows them sorted.

### Q2. [Easy] What is the output?

```
s = {"apple", "banana", "cherry"}
print("banana" in s)
print("grape" in s)
```

*Hint:* The 'in' operator checks membership in a set.

**Answer:** `True`
`False`

"banana" is in the set, so the first check returns True. "grape" is not in the set, so the second check returns False.

### Q3. [Easy] What is the output?

```
s = set()
s.add("Aarav")
s.add("Priya")
s.add("Aarav")
print(len(s))
print(s)
```

*Hint:* Adding a duplicate to a set has no effect.

**Answer:** `2`
`{'Aarav', 'Priya'}`

"Aarav" is added twice but sets ignore duplicates. The set contains only 2 unique elements: 'Aarav' and 'Priya'.

### Q4. [Medium] What is the output?

```
a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}
only_a = a - b
only_b = b - a
both = a & b
print(f"Only A: {sorted(only_a)}")
print(f"Only B: {sorted(only_b)}")
print(f"Both: {sorted(both)}")
```

*Hint:* Difference gives exclusive elements, intersection gives shared elements.

**Answer:** `Only A: [1, 2, 3]`
`Only B: [6, 7, 8]`
`Both: [4, 5]`

`a - b` = elements only in a: {1, 2, 3}. `b - a` = elements only in b: {6, 7, 8}. `a & b` = common elements: {4, 5}. `sorted()` converts to a sorted list for display.

### Q5. [Medium] What is the output?

```
s = {3, 1, 4, 1, 5, 9}
print(sorted(s))
print(min(s), max(s), sum(s))
```

*Hint:* sorted(), min(), max(), and sum() all work on sets.

**Answer:** `[1, 3, 4, 5, 9]`
`1 9 22`

Duplicates are removed: set is {1, 3, 4, 5, 9}. `sorted()` returns a sorted list. `min()`=1, `max()`=9, `sum()`=1+3+4+5+9=22.

### Q6. [Medium] What is the output?

```
d = {"a": 1, "b": 2, "c": 3}
keys_set = set(d)
print(keys_set)
print("a" in keys_set)
```

*Hint:* Iterating over a dictionary yields its keys.

**Answer:** `{'a', 'b', 'c'}`
`True`

`set(d)` creates a set from the dictionary's keys (not values, not items). The set contains 'a', 'b', 'c'. `"a" in keys_set` is True.

### Q7. [Medium] What is the output?

```
a = {1, 2, 3}
b = a
b.add(4)
print(a)
print(a is b)
```

*Hint:* Assignment creates an alias, not a copy. Same as with lists and dicts.

**Answer:** `{1, 2, 3, 4}`
`True`

`b = a` makes b refer to the same set object. Adding 4 through b also affects a. `a is b` confirms they are the same object. Use `b = a.copy()` for an independent copy.

### Q8. [Hard] What is the output?

```
words = ["hello", "world", "hello", "python", "world"]
unique_lengths = {len(w) for w in words}
print(unique_lengths)
```

*Hint:* This is a set comprehension that computes the length of each word.

**Answer:** `{5, 6}`

The lengths are: "hello"=5, "world"=5, "hello"=5, "python"=6, "world"=5. The set of unique lengths is {5, 6}.

### Q9. [Medium] What is the difference between `remove()` and `discard()` in sets?

*Hint:* Think about what happens when the element does not exist.

**Answer:** `remove(element)` raises a **KeyError** if the element is not found. `discard(element)` does **nothing** if the element is not found (no error). Both remove the element if it exists.

Use `remove()` when you expect the element to exist and want an error if it does not (fail fast). Use `discard()` when the element may or may not exist and you want safe removal.

### Q10. [Hard] When should you use a set instead of a list?

*Hint:* Think about duplicates, membership testing, and mathematical operations.

**Answer:** Use a set when: (1) you need unique elements with automatic deduplication, (2) you need fast O(1) membership testing, (3) you need mathematical operations like union, intersection, and difference, or (4) order does not matter. Use a list when you need ordering, indexing, or duplicate values.

Sets are optimized for uniqueness and membership. Lists are optimized for ordered, indexed access. Choosing the right data structure improves both code clarity and performance.

### Q11. [Hard] What is the output?

```
s1 = frozenset([1, 2, 3])
s2 = frozenset([1, 2, 3])
d = {s1: "first", s2: "second"}
print(d)
print(len(d))
```

*Hint:* frozensets with the same elements are equal and have the same hash.

**Answer:** `{frozenset({1, 2, 3}): 'second'}`
`1`

s1 and s2 contain the same elements, so they are equal (`s1 == s2`) and have the same hash. When used as dictionary keys, the second assignment overwrites the first. The dictionary has only 1 entry.

### Q12. [Hard] What is the output?

```
text = "Aarav likes Maths and Priya likes Science"
words = text.lower().split()
unique_words = set(words)
print(len(words))
print(len(unique_words))
print(sorted(unique_words))
```

*Hint:* Convert to lowercase first so 'Aarav' and 'aarav' are the same.

**Answer:** `7`
`6`
`['aarav', 'and', 'likes', 'maths', 'priya', 'science']`

The lowercase split gives 7 words: ['aarav', 'likes', 'maths', 'and', 'priya', 'likes', 'science']. 'likes' appears twice, so the unique set has 6 elements.

## Multiple Choice Questions

### Q1. [Easy] Which of the following creates an empty set?

A. s = {}
B. s = set()
C. s = set([])
D. Both B and C

**Answer:** D

**D is correct.** Both `set()` and `set([])` create an empty set. Option A (`{}`) creates an empty dictionary, not a set.

### Q2. [Easy] What is the result of set([1, 2, 2, 3, 3, 3])?

A. [1, 2, 3]
B. {1, 2, 2, 3, 3, 3}
C. {1, 2, 3}
D. (1, 2, 3)

**Answer:** C

**C is correct.** Converting a list to a set removes all duplicates. The result is the set {1, 2, 3}. Option A is a list, not a set. Option B is incorrect because sets cannot contain duplicates.

### Q3. [Easy] Which method removes an element from a set WITHOUT raising an error if the element is missing?

A. remove()
B. delete()
C. discard()
D. pop()

**Answer:** C

**C is correct.** `discard()` silently does nothing if the element is not in the set. `remove()` (A) raises KeyError. `delete()` (B) does not exist for sets. `pop()` (D) removes an arbitrary element.

### Q4. [Easy] What does a | b do for two sets a and b?

A. Returns elements common to both sets
B. Returns elements in a but not in b
C. Returns all unique elements from both sets
D. Returns elements in either but not both

**Answer:** C

**C is correct.** `|` is the union operator. It combines all unique elements from both sets. Option A describes intersection (`&`). Option B describes difference (`-`). Option D describes symmetric difference (`^`).

### Q5. [Easy] Can a set contain a list as an element?

A. Yes, sets can contain any type
B. No, lists are mutable and therefore unhashable
C. Yes, but only if the list is empty
D. Yes, but the list is converted to a tuple

**Answer:** B

**B is correct.** Set elements must be hashable (immutable). Lists are mutable, so they cannot be hashed and cannot be added to a set. Use a tuple instead.

### Q6. [Medium] What is the time complexity of checking 'x in my_set'?

A. O(n)
B. O(log n)
C. O(1) average
D. O(n log n)

**Answer:** C

**C is correct.** Sets use hash tables, providing O(1) average-case membership testing. This is much faster than O(n) for lists. This is the primary performance advantage of sets.

### Q7. [Medium] What does a ^ b return for sets?

A. Elements in both a and b
B. Elements in a but not in b
C. Elements in either a or b but not both
D. A sorted union of a and b

**Answer:** C

**C is correct.** `^` is the symmetric difference operator. It returns elements that are in either set but not in both (the exclusive elements). Option A describes intersection. Option B describes difference.

### Q8. [Medium] What is a frozenset?

A. A set that cannot be iterated
B. An immutable set that can be used as a dictionary key
C. A set stored in memory permanently
D. A sorted set

**Answer:** B

**B is correct.** A frozenset is an immutable version of a set. Because it is immutable (and therefore hashable), it can be used as a dictionary key or as an element of another set. It supports all set operations except mutations.

### Q9. [Medium] What is the output of {x for x in range(5)}?

A. [0, 1, 2, 3, 4]
B. {0, 1, 2, 3, 4}
C. (0, 1, 2, 3, 4)
D. {0: 0, 1: 1, 2: 2, 3: 3, 4: 4}

**Answer:** B

**B is correct.** This is a set comprehension (curly braces with no colon). It creates a set: {0, 1, 2, 3, 4}. Option A would be a list comprehension. Option D would be a dictionary comprehension (requires a colon).

### Q10. [Medium] What does a.issubset(b) return?

A. True if a and b have no common elements
B. True if all elements of a are in b
C. True if a and b are equal
D. True if a has fewer elements than b

**Answer:** B

**B is correct.** `issubset()` returns True if every element of a exists in b. Option A describes `isdisjoint()`. Option C is too restrictive (equal sets are subsets, but non-equal sets can also be subsets). Option D confuses size with containment.

### Q11. [Medium] How do you add multiple elements to a set at once?

A. s.add([1, 2, 3])
B. s.extend([1, 2, 3])
C. s.update([1, 2, 3])
D. s.append([1, 2, 3])

**Answer:** C

**C is correct.** `update()` adds all elements from an iterable. `add()` (A) adds a single element (and would raise TypeError for a list). `extend()` (B) and `append()` (D) are list methods, not set methods.

### Q12. [Hard] What is the output of {True, 1, 1.0}?

A. {True, 1, 1.0}
B. {True}
C. {1}
D. {1.0}

**Answer:** B

**B is correct.** In Python, `True == 1 == 1.0` (they are considered equal for hashing). The set keeps only the first one encountered: True. This is a subtle behavior that catches many people off guard.

### Q13. [Hard] Which of the following can be an element of a set?

A. A list
B. A dictionary
C. A tuple of integers
D. A set

**Answer:** C

**C is correct.** Tuples of immutable elements are hashable and can be set elements. Lists (A), dictionaries (B), and sets (D) are all mutable and unhashable, so they cannot be set elements. Use frozenset instead of a set as an element.

### Q14. [Hard] What is the difference between a - b and a ^ b for sets?

A. They are the same operation
B. a - b removes elements of b from a; a ^ b removes elements common to both
C. a - b is faster than a ^ b
D. a ^ b only works with frozensets

**Answer:** B

**B is correct.** `a - b` (difference) returns elements in a that are not in b. `a ^ b` (symmetric difference) returns elements that are in either set but not both. For example, if a = {1,2,3} and b = {3,4,5}: a - b = {1,2}, a ^ b = {1,2,4,5}.

### Q15. [Hard] What does s.pop() do on a set?

A. Removes the last element
B. Removes the first element
C. Removes and returns an arbitrary element
D. Removes the smallest element

**Answer:** C

**C is correct.** Since sets are unordered, there is no concept of first or last. `pop()` removes and returns an arbitrary element. If the set is empty, it raises KeyError.

### Q16. [Hard] What is the result of set('aabbc') & set('bbccd')?

A. {'a', 'b', 'c', 'd'}
B. {'b', 'c'}
C. {'b', 'b', 'c'}
D. {'a', 'd'}

**Answer:** B

**B is correct.** `set('aabbc')` = {'a', 'b', 'c'}. `set('bbccd')` = {'b', 'c', 'd'}. Intersection (`&`) returns common elements: {'b', 'c'}. Sets do not have duplicates, so option C is impossible.

### Q17. [Easy] What does len({1, 2, 2, 3, 3, 3}) return?

A. 6
B. 3
C. 1
D. Error

**Answer:** B

**B is correct.** The set removes duplicates, leaving {1, 2, 3} with 3 unique elements. `len()` returns 3.

### Q18. [Hard] What happens when you try to index a set with s[0]?

A. Returns the first element
B. Returns the smallest element
C. Raises TypeError
D. Raises IndexError

**Answer:** C

**C is correct.** Sets are unordered and do not support indexing. `s[0]` raises `TypeError: 'set' object is not subscriptable`. Use `list(s)[0]` or iterate if you need to access elements.

## Coding Challenges

### Challenge 1. Remove Duplicates from a List

**Difficulty:** Easy

Aarav has a list of roll numbers: [101, 102, 103, 101, 104, 102, 105]. Write a program that removes duplicates and prints the unique roll numbers in sorted order.

**Constraints:**

- Use set() for deduplication and sorted() for ordering.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
[101, 102, 103, 104, 105]
```

**Solution:**

```python
roll_numbers = [101, 102, 103, 101, 104, 102, 105]
unique = sorted(set(roll_numbers))
print(unique)
```

### Challenge 2. Find Common Elements

**Difficulty:** Easy

Priya has two lists: list1 = [1, 2, 3, 4, 5] and list2 = [4, 5, 6, 7, 8]. Write a program that finds and prints the common elements using sets.

**Constraints:**

- Use set intersection.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
{4, 5}
```

**Solution:**

```python
list1 = [1, 2, 3, 4, 5]
list2 = [4, 5, 6, 7, 8]
common = set(list1) & set(list2)
print(common)
```

### Challenge 3. Find Unique Characters

**Difficulty:** Easy

Write a program that takes the string "programming" and prints the number of unique characters and what they are, in sorted order.

**Constraints:**

- Use set() and sorted().

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Unique characters: 8
['a', 'g', 'i', 'm', 'n', 'o', 'p', 'r']
```

**Solution:**

```python
text = "programming"
unique = set(text)
print(f"Unique characters: {len(unique)}")
print(sorted(unique))
```

### Challenge 4. Students in Only One Club

**Difficulty:** Medium

Rohan manages two clubs. maths_club = {'Aarav', 'Priya', 'Meera', 'Vikram'} and science_club = {'Priya', 'Kavya', 'Meera', 'Neha'}. Find students who are in exactly one club (not both).

**Constraints:**

- Use symmetric difference.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Students in only one club: {'Aarav', 'Kavya', 'Neha', 'Vikram'}
```

**Solution:**

```python
maths_club = {'Aarav', 'Priya', 'Meera', 'Vikram'}
science_club = {'Priya', 'Kavya', 'Meera', 'Neha'}
only_one = maths_club ^ science_club
print(f"Students in only one club: {only_one}")
```

### Challenge 5. Validate Required Fields

**Difficulty:** Medium

A form requires the fields {'name', 'email', 'phone', 'age'}. A user submitted {'name', 'email', 'city'}. Write a program that finds (a) missing required fields and (b) extra fields that were not required.

**Constraints:**

- Use set difference in both directions.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Missing fields: {'age', 'phone'}
Extra fields: {'city'}
```

**Solution:**

```python
required = {'name', 'email', 'phone', 'age'}
submitted = {'name', 'email', 'city'}
missing = required - submitted
extra = submitted - required
print(f"Missing fields: {missing}")
print(f"Extra fields: {extra}")
```

### Challenge 6. Unique Words Across Sentences

**Difficulty:** Medium

Given two sentences: s1 = 'Aarav likes maths and science' and s2 = 'Priya likes science and coding'. Find the total unique words, words common to both, and words exclusive to each.

**Constraints:**

- Use set operations: union, intersection, and difference.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
All unique words: {'Aarav', 'Priya', 'and', 'coding', 'likes', 'maths', 'science'}
Common words: {'and', 'likes', 'science'}
Only in s1: {'Aarav', 'maths'}
Only in s2: {'Priya', 'coding'}
```

**Solution:**

```python
s1 = 'Aarav likes maths and science'
s2 = 'Priya likes science and coding'
words1 = set(s1.split())
words2 = set(s2.split())
print(f"All unique words: {words1 | words2}")
print(f"Common words: {words1 & words2}")
print(f"Only in s1: {words1 - words2}")
print(f"Only in s2: {words2 - words1}")
```

### Challenge 7. Order-Preserving Deduplication

**Difficulty:** Medium

Given the list [5, 3, 1, 3, 2, 5, 4, 1, 2], remove duplicates while preserving the original order of first appearance. Print the result.

**Constraints:**

- Use a set to track seen elements and a list to maintain order.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
[5, 3, 1, 2, 4]
```

**Solution:**

```python
nums = [5, 3, 1, 3, 2, 5, 4, 1, 2]
seen = set()
ordered = []
for n in nums:
    if n not in seen:
        seen.add(n)
        ordered.append(n)
print(ordered)
```

### Challenge 8. Pangram Checker

**Difficulty:** Hard

Write a program that checks if a given string is a pangram (contains every letter of the alphabet at least once). Test with 'The quick brown fox jumps over the lazy dog'.

**Constraints:**

- Use set operations. Compare the set of letters against the full alphabet set.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Is pangram: True
Missing letters: set()
```

**Solution:**

```python
import string
text = 'The quick brown fox jumps over the lazy dog'
alphabet = set(string.ascii_lowercase)
text_letters = set(text.lower()) & alphabet
is_pangram = text_letters == alphabet
missing = alphabet - text_letters
print(f"Is pangram: {is_pangram}")
print(f"Missing letters: {missing}")
```

### Challenge 9. Find Pairs with Given Sum

**Difficulty:** Hard

Given a list [2, 7, 11, 15, 1, 8, 3] and a target sum of 10, find all pairs of numbers that add up to the target. Each number can be used only once per pair.

**Constraints:**

- Use a set for O(n) lookup. Track seen numbers.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Pairs that sum to 10: [(2, 8), (7, 3)]
```

**Solution:**

```python
numbers = [2, 7, 11, 15, 1, 8, 3]
target = 10
seen = set()
pairs = []
for num in numbers:
    complement = target - num
    if complement in seen:
        pairs.append((complement, num))
    seen.add(num)
print(f"Pairs that sum to {target}: {pairs}")
```

### Challenge 10. Longest Consecutive Sequence

**Difficulty:** Hard

Given the list [100, 4, 200, 1, 3, 2, 5], find the length of the longest consecutive sequence. The sequence does not need to be in order in the original list.

**Constraints:**

- Convert to a set for O(1) lookups. Only start counting from sequence beginnings (numbers with no predecessor in the set).

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Longest consecutive sequence length: 5
Sequence: [1, 2, 3, 4, 5]
```

**Solution:**

```python
nums = [100, 4, 200, 1, 3, 2, 5]
num_set = set(nums)
longest = 0
best_start = 0
for num in num_set:
    if num - 1 not in num_set:  # Start of a sequence
        current = num
        length = 1
        while current + 1 in num_set:
            current += 1
            length += 1
        if length > longest:
            longest = length
            best_start = num
sequence = list(range(best_start, best_start + longest))
print(f"Longest consecutive sequence length: {longest}")
print(f"Sequence: {sequence}")
```

---

*Notes: https://learn.modernagecoders.com/resources/python/sets-in-python/*
