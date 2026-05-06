---
title: "Practice: Lists in Python"
description: "65 practice problems for Lists in Python in Python"
slug: lists-in-python-practice
canonical: https://learn.modernagecoders.com/resources/python/lists-in-python/practice
category: "Python"
---
# Practice: Lists in Python

**Total questions:** 65

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
nums = [10, 20, 30, 40]
print(nums[0])
print(nums[-1])
```

*Hint:* Index 0 is the first element. Index -1 is the last element.

**Answer:** `10`
`40`

`nums[0]` is the first element (10). `nums[-1]` is the last element (40). The list has indices 0, 1, 2, 3 (positive) and -4, -3, -2, -1 (negative).

### Q2. [Easy] What is the output?

```
fruits = ["apple", "banana", "cherry"]
fruits.append("mango")
print(fruits)
print(len(fruits))
```

*Hint:* append() adds an item to the end of the list.

**Answer:** `['apple', 'banana', 'cherry', 'mango']`
`4`

`append("mango")` adds "mango" to the end. The list now has 4 elements. `len()` returns 4.

### Q3. [Easy] What is the output?

```
nums = [1, 2, 3, 4, 5]
print(nums[1:4])
```

*Hint:* Slicing from index 1 up to (but not including) index 4.

**Answer:** `[2, 3, 4]`

`nums[1:4]` returns elements at indices 1, 2, 3. Index 4 is excluded. The result is [2, 3, 4].

### Q4. [Easy] What is the output?

```
colors = ["red", "green", "blue"]
colors[1] = "yellow"
print(colors)
```

*Hint:* Lists are mutable. You can assign a new value to any index.

**Answer:** `['red', 'yellow', 'blue']`

`colors[1] = "yellow"` replaces "green" (at index 1) with "yellow". Lists are mutable, so this assignment works without error.

### Q5. [Easy] What is the output?

```
nums = [3, 1, 4, 1, 5, 9]
print(nums.count(1))
print(nums.index(4))
```

*Hint:* count() counts occurrences. index() returns the position of the first match.

**Answer:** `2`
`2`

`count(1)` returns 2 because 1 appears twice in the list. `index(4)` returns 2 because 4 is first found at index 2.

### Q6. [Easy] What is the output?

```
nums = [5, 3, 8, 1]
nums.sort()
print(nums)
```

*Hint:* sort() arranges elements in ascending order by default.

**Answer:** `[1, 3, 5, 8]`

`.sort()` sorts the list in place in ascending order. The original list is modified to [1, 3, 5, 8].

### Q7. [Medium] What is the output?

```
a = [1, 2, 3]
b = a
b.append(4)
print(a)
print(a is b)
```

*Hint:* b = a does not create a copy. Both variables reference the same list.

**Answer:** `[1, 2, 3, 4]`
`True`

`b = a` makes b an alias for the same list object. Appending to b also changes a because they are the same object. `a is b` confirms they are the same object (True).

### Q8. [Medium] What is the output?

```
a = [1, 2, 3]
b = a.copy()
b.append(4)
print(a)
print(b)
print(a is b)
```

*Hint:* .copy() creates a new list with the same elements.

**Answer:** `[1, 2, 3]`
`[1, 2, 3, 4]`
`False`

`.copy()` creates a new, independent list. Appending to b does not affect a. `a is b` is False because they are different objects.

### Q9. [Medium] What is the output?

```
nums = [10, 20, 30, 40, 50]
print(nums[::-1])
print(nums[3:0:-1])
```

*Hint:* [::-1] reverses the list. [3:0:-1] goes backwards from index 3, stopping before index 0.

**Answer:** `[50, 40, 30, 20, 10]`
`[40, 30, 20]`

`nums[::-1]` reverses the entire list. `nums[3:0:-1]` starts at index 3 (40), goes backwards to index 1 (20), stopping before index 0. Result: [40, 30, 20].

### Q10. [Medium] What is the output?

```
result = [x**2 for x in range(1, 6)]
print(result)
```

*Hint:* List comprehension: [expression for variable in iterable].

**Answer:** `[1, 4, 9, 16, 25]`

The list comprehension squares each number from 1 to 5: 1*1=1, 2*2=4, 3*3=9, 4*4=16, 5*5=25.

### Q11. [Medium] What is the output?

```
evens = [x for x in range(10) if x % 2 == 0]
print(evens)
```

*Hint:* List comprehension with a filter condition.

**Answer:** `[0, 2, 4, 6, 8]`

The comprehension generates x for each value in range(10) where x is even. Values 0, 2, 4, 6, 8 satisfy `x % 2 == 0`.

### Q12. [Medium] What is the output?

```
a = [1, 2, 3]
b = [4, 5]
a.extend(b)
print(a)
print(b)
```

*Hint:* extend() adds each element from the iterable, not the iterable itself.

**Answer:** `[1, 2, 3, 4, 5]`
`[4, 5]`

`extend(b)` adds each element of b (4, 5) to the end of a individually. b itself remains unchanged. After extend, a has 5 elements.

### Q13. [Hard] What is the output?

```
nums = [5, 3, 1, 4]
result = nums.sort()
print(result)
print(nums)
```

*Hint:* .sort() returns None. It modifies the list in place.

**Answer:** `None`
`[1, 3, 4, 5]`

`.sort()` sorts the list in place and returns `None`. The variable `result` is None. The list `nums` is now sorted. This is a very common mistake: assigning `.sort()` to a variable.

### Q14. [Hard] What is the output?

```
a = [1, 2, 3]
a.append([4, 5])
print(a)
print(len(a))
```

*Hint:* append() adds the entire argument as a single element.

**Answer:** `[1, 2, 3, [4, 5]]`
`4`

`append([4, 5])` adds the list [4, 5] as a single element at the end. The list a now has 4 elements, where the 4th element is itself a list [4, 5]. To add elements individually, use `extend()`.

### Q15. [Hard] What is the output?

```
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(matrix[1][2])
print(matrix[0][-1])
print(matrix[-1][0])
```

*Hint:* First index selects the row, second index selects the column.

**Answer:** `6`
`3`
`7`

`matrix[1][2]`: row 1 is [4, 5, 6], element at index 2 is 6. `matrix[0][-1]`: row 0 is [1, 2, 3], last element is 3. `matrix[-1][0]`: last row is [7, 8, 9], first element is 7.

### Q16. [Hard] What is the output?

```
outer = [[1, 2], [3, 4]]
shallow = outer.copy()
shallow[0][0] = 99
print(outer)
print(shallow)
```

*Hint:* Shallow copy creates a new outer list, but inner lists are still shared.

**Answer:** `[[99, 2], [3, 4]]`
`[[99, 2], [3, 4]]`

`.copy()` creates a shallow copy. The outer list is new, but `shallow[0]` and `outer[0]` still reference the same inner list [1, 2]. Changing `shallow[0][0]` to 99 also changes `outer[0][0]`.

### Q17. [Hard] What is the output?

```
first, *rest, last = [10, 20, 30, 40, 50]
print(first)
print(rest)
print(last)
```

*Hint:* The * collects all remaining elements between first and last into a list.

**Answer:** `10`
`[20, 30, 40]`
`50`

Extended unpacking: `first` gets 10, `last` gets 50, and `*rest` collects everything in between as a list: [20, 30, 40].

### Q18. [Hard] What is the output?

```
nums = [1, 2, 3, 4, 5]
nums[1:4] = [20]
print(nums)
print(len(nums))
```

*Hint:* Slice assignment can replace a section with a different number of elements.

**Answer:** `[1, 20, 5]`
`3`

`nums[1:4]` covers elements at indices 1, 2, 3 (which are 2, 3, 4). Replacing this slice with [20] removes 3 elements and inserts 1. The list goes from 5 elements to 3 elements: [1, 20, 5].

## Mixed Questions

### Q1. [Easy] What is the output?

```
nums = [1, 2, 3]
nums.insert(0, 0)
print(nums)
```

*Hint:* insert(index, item) adds the item before the given index.

**Answer:** `[0, 1, 2, 3]`

`insert(0, 0)` inserts the value 0 at index 0 (the beginning). All existing elements shift to the right.

### Q2. [Easy] What is the output?

```
nums = [10, 20, 30, 40]
popped = nums.pop(1)
print(popped)
print(nums)
```

*Hint:* pop(index) removes and returns the element at that index.

**Answer:** `20`
`[10, 30, 40]`

`pop(1)` removes the element at index 1 (which is 20) and returns it. The list shrinks to [10, 30, 40].

### Q3. [Easy] What is the output?

```
print(3 in [1, 2, 3, 4])
print(5 in [1, 2, 3, 4])
print("a" in ["a", "b", "c"])
```

*Hint:* The 'in' operator checks if an item exists in the list.

**Answer:** `True`
`False`
`True`

The `in` operator returns True if the item is found in the list, False otherwise. 3 is in the first list, 5 is not in the second, and "a" is in the third.

### Q4. [Medium] What is the output?

```
nums = [1, 2, 3, 4, 5]
new = sorted(nums, reverse=True)
print(nums)
print(new)
```

*Hint:* sorted() returns a new list. The original is unchanged.

**Answer:** `[1, 2, 3, 4, 5]`
`[5, 4, 3, 2, 1]`

`sorted()` returns a new sorted list without modifying the original. With `reverse=True`, it sorts in descending order. The original `nums` remains [1, 2, 3, 4, 5].

### Q5. [Medium] What is the output?

```
words = ["hello", "world"]
upper = [w.upper() for w in words]
print(upper)
print(words)
```

*Hint:* List comprehension creates a new list. The original list is unchanged.

**Answer:** `['HELLO', 'WORLD']`
`['hello', 'world']`

The list comprehension creates a new list with each word converted to uppercase. The original `words` list is not modified.

### Q6. [Medium] What is the output?

```
nums = [4, 7, 2, 9, 1]
print(min(nums))
print(max(nums))
print(sum(nums))
```

*Hint:* min(), max(), and sum() are built-in functions that work with lists of numbers.

**Answer:** `1`
`9`
`23`

`min()` returns the smallest element (1). `max()` returns the largest (9). `sum()` returns the total (4+7+2+9+1 = 23).

### Q7. [Medium] What is the output?

```
a = [1, 2]
b = [3, 4]
c = a + b
print(c)
print(a)
```

*Hint:* + creates a new list by concatenating. It does not modify the originals.

**Answer:** `[1, 2, 3, 4]`
`[1, 2]`

The `+` operator concatenates two lists into a new list. Neither `a` nor `b` is modified. `c` is a new list [1, 2, 3, 4].

### Q8. [Hard] What is the output?

```
nums = [1, 2, 3, 4, 5, 6]
for num in nums:
    if num % 2 == 0:
        nums.remove(num)
print(nums)
```

*Hint:* Removing elements while iterating over a list causes elements to be skipped.

**Answer:** `[1, 3, 5, 6]`

This is a common bug. After removing 2 (index 1), 4 moves to index 2 and 3 moves to index 1. The iterator advances to index 2, which is now 4 (it was 3 before the removal). 4 is removed. Then 5 is at index 2, 6 at index 3. The iterator goes to index 3 (6), but 5 was already visited. 6 is even but by this point the loop ends at the wrong time. The result is [1, 3, 5, 6] — 6 survives.

### Q9. [Hard] What is the output?

```
a = [[0]] * 3
a[0][0] = 5
print(a)
```

*Hint:* Multiplying a list containing a mutable object creates multiple references to the SAME object.

**Answer:** `[[5], [5], [5]]`

`[[0]] * 3` creates `[[0], [0], [0]]`, but all three inner lists are the SAME object. Changing `a[0][0]` to 5 changes all of them because they are all references to the same inner list. This is a very common pitfall when creating 2D lists.

### Q10. [Hard] What is the output?

```
nums = list(range(10))
result = nums[8:2:-2]
print(result)
```

*Hint:* Start at index 8, go backwards by step -2, stop before index 2.

**Answer:** `[8, 6, 4]`

`nums` is [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]. `nums[8:2:-2]` starts at index 8 (value 8), goes backwards by 2: index 8 (8), index 6 (6), index 4 (4). The next would be index 2, but stop is exclusive, so it is not included.

### Q11. [Medium] What is the difference between `append()` and `extend()`? Give an example where using the wrong one causes unexpected behavior.

*Hint:* One adds a single element, the other adds each element from an iterable.

**Answer:** `append(item)` adds `item` as a single element to the end of the list. `extend(iterable)` adds each element from the iterable individually.

Example: `a = [1, 2]; a.append([3, 4])` gives `[1, 2, [3, 4]]` (nested list). `a = [1, 2]; a.extend([3, 4])` gives `[1, 2, 3, 4]` (flat list).

If you want to merge two lists into one flat list, use `extend()`. If you intentionally want to nest a list inside another, use `append()`. Using `append()` when you meant `extend()` creates an unintended nested structure.

### Q12. [Medium] What is the difference between `.sort()` and `sorted()`?

*Hint:* One modifies in place, the other returns a new list.

**Answer:** `.sort()` sorts the list **in place** and returns **None**. `sorted()` returns a **new sorted list** and leaves the original unchanged.

Use `.sort()` when you do not need the original order. Use `sorted()` when you need to keep the original list intact. A common bug is `result = lst.sort()` which assigns None to result because `.sort()` returns None.

### Q13. [Hard] What is the output?

```
flat = [num for row in [[1,2],[3,4],[5,6]] for num in row]
print(flat)
```

*Hint:* Nested comprehension: outer loop first, inner loop second.

**Answer:** `[1, 2, 3, 4, 5, 6]`

This nested list comprehension flattens a 2D list. It is equivalent to: for row in [[1,2],[3,4],[5,6]]: for num in row: append num. The order is: 1, 2 (from [1,2]), 3, 4 (from [3,4]), 5, 6 (from [5,6]).

## Multiple Choice Questions

### Q1. [Easy] Which of the following creates an empty list?

A. list = ()
B. list = []
C. list = {}
D. list = <>

**Answer:** B

**B is correct.** Square brackets `[]` create an empty list. Parentheses `()` (A) create an empty tuple. Curly braces `{}` (C) create an empty dictionary, not a list. `<>` (D) is not valid Python syntax.

### Q2. [Easy] What does nums.append(5) do?

A. Adds 5 at the beginning
B. Adds 5 at the end
C. Adds 5 at index 5
D. Replaces the first element with 5

**Answer:** B

**B is correct.** `append()` always adds the item to the **end** of the list. To add at the beginning, use `insert(0, 5)`. To add at a specific index, use `insert(index, 5)`.

### Q3. [Easy] What is [1, 2, 3] + [4, 5]?

A. [1, 2, 3, [4, 5]]
B. [1, 2, 3, 4, 5]
C. [5, 7, 8]
D. Error

**Answer:** B

**B is correct.** The `+` operator concatenates two lists, creating a new list with all elements. It does NOT nest the second list (A) or add corresponding elements (C).

### Q4. [Easy] How do you check if 5 is in a list called nums?

A. nums.contains(5)
B. nums.has(5)
C. 5 in nums
D. nums.find(5)

**Answer:** C

**C is correct.** The `in` operator checks membership. Python lists do not have `contains()` (A), `has()` (B), or `find()` (D) methods. `find()` is a string method, not a list method.

### Q5. [Easy] What does .pop() return when called with no arguments?

A. The first element
B. The last element
C. None
D. The list itself

**Answer:** B

**B is correct.** `pop()` with no arguments removes and returns the **last** element. `pop(0)` would remove and return the first element. Unlike `.sort()`, `.pop()` does return a value.

### Q6. [Medium] What is the output of [x for x in range(5) if x % 2 == 0]?

A. [1, 3]
B. [0, 2, 4]
C. [2, 4]
D. [0, 1, 2, 3, 4]

**Answer:** B

**B is correct.** The comprehension filters values from range(5) where x is even. 0 % 2 == 0 (True), 1 % 2 == 0 (False), 2 % 2 == 0 (True), 3 (False), 4 (True). Result: [0, 2, 4]. Option C misses 0.

### Q7. [Medium] What does .sort() return?

A. The sorted list
B. A new sorted list
C. None
D. The original list

**Answer:** C

**C is correct.** `.sort()` sorts the list in place and returns `None`. This is a Python convention: methods that modify objects in place return None. Use `sorted()` if you need a return value.

### Q8. [Medium] What is the difference between remove() and pop()?

A. remove() deletes by index, pop() deletes by value
B. remove() deletes by value, pop() deletes by index
C. Both delete by value
D. Both delete by index

**Answer:** B

**B is correct.** `remove(value)` removes the first occurrence of the specified value. `pop(index)` removes and returns the element at the specified index. They work in opposite ways.

### Q9. [Medium] Which creates a proper copy of list a?

A. b = a
B. b = a.copy()
C. b = a.sort()
D. b = a.append([])

**Answer:** B

**B is correct.** `a.copy()` creates a shallow copy. Option A creates an alias (same object). Option C assigns None (sort returns None). Option D assigns None (append returns None).

### Q10. [Medium] What is the output of len([[1, 2], [3, 4], [5, 6]])?

A. 6
B. 3
C. 2
D. 9

**Answer:** B

**B is correct.** `len()` counts the number of top-level elements. The list contains 3 inner lists, so the length is 3. It does NOT count the total number of elements across all inner lists (that would be 6).

### Q11. [Hard] What is the output of [[0] * 3 for _ in range(2)]?

A. [[0, 0, 0], [0, 0, 0]]
B. [[0, 0], [0, 0], [0, 0]]
C. [0, 0, 0, 0, 0, 0]
D. [[0], [0], [0], [0], [0], [0]]

**Answer:** A

**A is correct.** The comprehension creates 2 rows, each containing [0, 0, 0]. Unlike `[[0] * 3] * 2` (which creates shared references), this comprehension creates independent inner lists. This is the safe way to create a 2D list of zeros.

### Q12. [Hard] What happens when you call .remove() on a value that does not exist in the list?

A. Returns -1
B. Returns None
C. Raises ValueError
D. Removes the last element

**Answer:** C

**C is correct.** `.remove(value)` raises a `ValueError` if the value is not found in the list. It does not return -1 like string's `find()`. Always check with `in` before calling `remove()` if you are unsure.

### Q13. [Hard] What is the output of [1, 2, 3] * 2?

A. [2, 4, 6]
B. [1, 2, 3, 1, 2, 3]
C. [[1, 2, 3], [1, 2, 3]]
D. Error

**Answer:** B

**B is correct.** The `*` operator repeats the list. `[1, 2, 3] * 2` creates a new list with the elements repeated: [1, 2, 3, 1, 2, 3]. It does NOT multiply each element (A) or create a nested list (C).

### Q14. [Hard] What is the result of list('hello')?

A. ['hello']
B. ['h', 'e', 'l', 'l', 'o']
C. ('h', 'e', 'l', 'l', 'o')
D. Error

**Answer:** B

**B is correct.** The `list()` constructor converts any iterable into a list. A string is iterable (character by character), so `list('hello')` creates a list of individual characters: ['h', 'e', 'l', 'l', 'o'].

### Q15. [Hard] What is the output of nums = [1, 2]; nums += [3]; print(type(nums))?

A. 
B. 
C. 
D. Error

**Answer:** B

**B is correct.** `+=` with lists is equivalent to `extend()`. It adds the elements from [3] to nums. The result is still a list [1, 2, 3]. The type remains `list`.

### Q16. [Hard] What is the output of [[0]] * 3 after modifying the first inner list?

A. Only the first inner list changes
B. All three inner lists change
C. An error occurs
D. None of the inner lists change

**Answer:** B

**B is correct.** `[[0]] * 3` creates three references to the SAME inner list object. Modifying any one of them modifies all of them because they are the same object. To create independent inner lists, use a list comprehension: `[[0] for _ in range(3)]`.

### Q17. [Easy] Which method reverses a list in place?

A. reversed()
B. .reverse()
C. .flip()
D. [::-1]

**Answer:** B

**B is correct.** `.reverse()` reverses the list in place and returns None. `reversed()` (A) returns an iterator, not a list, and does not modify the original. `[::-1]` (D) creates a new reversed list. `.flip()` (C) does not exist.

### Q18. [Medium] What does del nums[1:3] do to the list nums = [10, 20, 30, 40, 50]?

A. Removes elements at indices 1 and 3
B. Removes elements at indices 1 and 2
C. Removes the first 3 elements
D. Raises an error

**Answer:** B

**B is correct.** `del nums[1:3]` deletes the slice from index 1 to 2 (index 3 is excluded). Elements 20 and 30 are removed. The result is [10, 40, 50]. Slice notation always excludes the stop index.

## Coding Challenges

### Challenge 1. Find the Second Largest

**Difficulty:** Easy

Given the list [45, 12, 78, 34, 56, 89, 23], write a program that finds and prints the second largest number without using sort() or sorted().

**Constraints:**

- Use a loop. Do not sort the list.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Second largest: 78
```

**Solution:**

```python
nums = [45, 12, 78, 34, 56, 89, 23]
largest = max(nums[0], nums[1])
second = min(nums[0], nums[1])
for num in nums[2:]:
    if num > largest:
        second = largest
        largest = num
    elif num > second:
        second = num
print("Second largest:", second)
```

### Challenge 2. Remove Duplicates

**Difficulty:** Easy

Aarav has the list [1, 2, 3, 2, 4, 3, 5, 1]. Write a program that removes duplicates while preserving the original order. Print the result.

**Constraints:**

- Use a loop. Preserve order of first occurrence.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
[1, 2, 3, 4, 5]
```

**Solution:**

```python
nums = [1, 2, 3, 2, 4, 3, 5, 1]
result = []
for num in nums:
    if num not in result:
        result.append(num)
print(result)
```

### Challenge 3. Flatten a 2D List

**Difficulty:** Easy

Given the 2D list [[1, 2, 3], [4, 5], [6, 7, 8, 9]], write a program that flattens it into a single list [1, 2, 3, 4, 5, 6, 7, 8, 9].

**Constraints:**

- Use nested loops or list comprehension.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

**Solution:**

```python
matrix = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]
flat = [num for row in matrix for num in row]
print(flat)
```

### Challenge 4. Rotate a List

**Difficulty:** Medium

Write a program that rotates the list [1, 2, 3, 4, 5] to the right by 2 positions. After rotation, the last 2 elements should move to the front.

**Constraints:**

- Use slicing. Do not use any external library.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
[4, 5, 1, 2, 3]
```

**Solution:**

```python
nums = [1, 2, 3, 4, 5]
k = 2
rotated = nums[-k:] + nums[:-k]
print(rotated)
```

### Challenge 5. Matrix Transpose

**Difficulty:** Medium

Priya has a 3x3 matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]. Write a program that transposes it (rows become columns). Print the result.

**Constraints:**

- Use nested loops or list comprehension.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
[[1, 4, 7], [2, 5, 8], [3, 6, 9]]
```

**Solution:**

```python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
transpose = [[matrix[j][i] for j in range(3)] for i in range(3)]
print(transpose)
```

### Challenge 6. Group by Even and Odd

**Difficulty:** Medium

Given the list [12, 7, 3, 18, 5, 22, 9, 14], write a program that separates it into two lists: one with even numbers and one with odd numbers. Print both.

**Constraints:**

- Use list comprehension.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Even: [12, 18, 22, 14]
Odd: [7, 3, 5, 9]
```

**Solution:**

```python
nums = [12, 7, 3, 18, 5, 22, 9, 14]
evens = [x for x in nums if x % 2 == 0]
odds = [x for x in nums if x % 2 != 0]
print("Even:", evens)
print("Odd:", odds)
```

### Challenge 7. Find Common Elements

**Difficulty:** Medium

Rohan has two lists: [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7]. Write a program that finds and prints the common elements in both lists, preserving order from the first list.

**Constraints:**

- Use a loop or list comprehension. Do not use sets.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
[3, 4, 5]
```

**Solution:**

```python
a = [1, 2, 3, 4, 5]
b = [3, 4, 5, 6, 7]
common = [x for x in a if x in b]
print(common)
```

### Challenge 8. Frequency Count Without Dictionary

**Difficulty:** Hard

Given the list [3, 1, 2, 3, 4, 2, 3, 1, 5], write a program that prints each unique element and its frequency. Do not use dictionaries.

**Constraints:**

- Use a loop and count(). Track already-counted elements.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
3 appears 3 times
1 appears 2 times
2 appears 2 times
4 appears 1 times
5 appears 1 times
```

**Solution:**

```python
nums = [3, 1, 2, 3, 4, 2, 3, 1, 5]
counted = []
for num in nums:
    if num not in counted:
        print(f"{num} appears {nums.count(num)} times")
        counted.append(num)
```

### Challenge 9. Create a Safe 2D Matrix

**Difficulty:** Hard

Write a program that creates a 3x4 matrix (3 rows, 4 columns) initialized with zeros. Then set the element at row 1, column 2 to 99. Print the matrix row by row. Make sure modifying one row does NOT affect others.

**Constraints:**

- Use list comprehension (not [[0]*4]*3). Verify independence of rows.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
[0, 0, 0, 0]
[0, 0, 99, 0]
[0, 0, 0, 0]
```

**Solution:**

```python
matrix = [[0 for _ in range(4)] for _ in range(3)]
matrix[1][2] = 99
for row in matrix:
    print(row)
```

### Challenge 10. Merge Two Sorted Lists

**Difficulty:** Hard

Given two sorted lists [1, 3, 5, 7] and [2, 4, 6, 8], write a program that merges them into a single sorted list without using sort() or sorted().

**Constraints:**

- Use two pointers (indices) to merge efficiently.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
[1, 2, 3, 4, 5, 6, 7, 8]
```

**Solution:**

```python
a = [1, 3, 5, 7]
b = [2, 4, 6, 8]
result = []
i = 0
j = 0
while i < len(a) and j < len(b):
    if a[i] <= b[j]:
        result.append(a[i])
        i += 1
    else:
        result.append(b[j])
        j += 1
result.extend(a[i:])
result.extend(b[j:])
print(result)
```

---

*Notes: https://learn.modernagecoders.com/resources/python/lists-in-python/*
