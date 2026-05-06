---
title: "Practice: Dictionaries in Python"
description: "62 practice problems for Dictionaries in Python in Python"
slug: dictionaries-in-python-practice
canonical: https://learn.modernagecoders.com/resources/python/dictionaries-in-python/practice
category: "Python"
---
# Practice: Dictionaries in Python

**Total questions:** 62

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
d = {"name": "Aarav", "age": 16}
print(d["name"])
print(d["age"])
```

*Hint:* Square brackets access the value associated with a key.

**Answer:** `Aarav`
`16`

`d["name"]` returns the value associated with the key "name", which is "Aarav". `d["age"]` returns 16.

### Q2. [Easy] What is the output?

```
d = {"a": 1, "b": 2}
d["c"] = 3
print(d)
print(len(d))
```

*Hint:* Assigning to a new key adds it to the dictionary.

**Answer:** `{'a': 1, 'b': 2, 'c': 3}`
`3`

`d["c"] = 3` adds a new key-value pair. The dictionary now has 3 entries. `len(d)` returns 3.

### Q3. [Easy] What is the output?

```
d = {"x": 10, "y": 20}
print(d.get("x"))
print(d.get("z"))
print(d.get("z", 0))
```

*Hint:* .get() returns None for missing keys unless a default is specified.

**Answer:** `10`
`None`
`0`

`d.get("x")` returns 10 (key exists). `d.get("z")` returns None (key missing, no default). `d.get("z", 0)` returns 0 (key missing, default provided).

### Q4. [Easy] What is the output?

```
d = {"a": 1, "b": 2, "c": 3}
print("a" in d)
print(1 in d)
print("d" in d)
```

*Hint:* The 'in' operator checks keys, not values.

**Answer:** `True`
`False`
`False`

`"a" in d` is True because "a" is a key. `1 in d` is False because 1 is a value, not a key. `"d" in d` is False because there is no key "d".

### Q5. [Easy] What is the output?

```
d = {"a": 1, "b": 2, "c": 3}
print(list(d.keys()))
print(list(d.values()))
```

*Hint:* keys() returns all keys. values() returns all values.

**Answer:** `['a', 'b', 'c']`
`[1, 2, 3]`

`d.keys()` returns a view of keys. `d.values()` returns a view of values. Wrapping with `list()` converts them to lists for display.

### Q6. [Easy] What is the output?

```
d = {"a": 1, "b": 2}
d["a"] = 10
print(d)
```

*Hint:* Assigning to an existing key updates its value.

**Answer:** `{'a': 10, 'b': 2}`

`d["a"] = 10` updates the value of the existing key "a" from 1 to 10. The key is not duplicated.

### Q7. [Medium] What is the output?

```
d = {"a": 1, "b": 2, "c": 3}
val = d.pop("b")
print(val)
print(d)
```

*Hint:* pop() removes the key and returns its value.

**Answer:** `2`
`{'a': 1, 'c': 3}`

`d.pop("b")` removes the key "b" and returns its value (2). The dictionary now has only "a" and "c".

### Q8. [Medium] What is the output?

```
d = {"a": 1, "b": 2}
for key, value in d.items():
    print(f"{key} -> {value}")
```

*Hint:* items() returns key-value pairs as tuples, which can be unpacked.

**Answer:** `a -> 1`
`b -> 2`

`d.items()` returns pairs: ('a', 1) and ('b', 2). The for loop unpacks each pair into `key` and `value`.

### Q9. [Medium] What is the output?

```
squares = {x: x**2 for x in range(1, 5)}
print(squares)
```

*Hint:* Dictionary comprehension: {key_expr: value_expr for item in iterable}.

**Answer:** `{1: 1, 2: 4, 3: 9, 4: 16}`

The comprehension creates key-value pairs where the key is x and the value is x squared, for x = 1, 2, 3, 4.

### Q10. [Medium] What is the output?

```
d1 = {"a": 1, "b": 2}
d2 = {"b": 3, "c": 4}
merged = {**d1, **d2}
print(merged)
```

*Hint:* ** unpacking merges dictionaries. When keys overlap, the last one wins.

**Answer:** `{'a': 1, 'b': 3, 'c': 4}`

The `**` operator unpacks both dictionaries. Key "b" exists in both, so d2's value (3) overwrites d1's value (2). The result has all unique keys with d2 taking priority for overlaps.

### Q11. [Medium] What is the output?

```
d = {}
d.setdefault("count", 0)
d["count"] += 1
d.setdefault("count", 0)
d["count"] += 1
print(d)
```

*Hint:* setdefault() only sets the value if the key does not already exist.

**Answer:** `{'count': 2}`

First `setdefault("count", 0)` creates the key with value 0. Then `+= 1` makes it 1. Second `setdefault` does nothing (key already exists). Then `+= 1` makes it 2.

### Q12. [Medium] What is the output?

```
school = {
    "Aarav": {"marks": 90},
    "Priya": {"marks": 95}
}
print(school["Priya"]["marks"])
```

*Hint:* Chain keys to access nested dictionary values.

**Answer:** `95`

`school["Priya"]` returns the inner dictionary `{"marks": 95}`. Then `["marks"]` accesses the value 95.

### Q13. [Hard] What is the output?

```
text = "abba"
count = {}
for ch in text:
    count[ch] = count.get(ch, 0) + 1
print(count)
```

*Hint:* .get(ch, 0) returns 0 if the key does not exist, then adds 1.

**Answer:** `{'a': 2, 'b': 2}`

Iteration: 'a' not in count, get returns 0, set to 1. 'b' not in count, set to 1. 'b' in count, get returns 1, set to 2. 'a' in count, get returns 1, set to 2. Result: {'a': 2, 'b': 2}.

### Q14. [Hard] What is the output?

```
d = {"a": 1, "b": 2, "a": 3}
print(d)
print(len(d))
```

*Hint:* Dictionary keys must be unique. What happens with duplicate keys in a literal?

**Answer:** `{'a': 3, 'b': 2}`
`2`

When a dictionary literal has duplicate keys, the last value for that key wins. The first "a": 1 is overwritten by "a": 3. The dictionary has only 2 keys.

### Q15. [Hard] What is the output?

```
d = dict.fromkeys(["a", "b", "c"], [])
d["a"].append(1)
print(d)
```

*Hint:* fromkeys() with a mutable default shares the same object for all keys.

**Answer:** `{'a': [1], 'b': [1], 'c': [1]}`

`fromkeys()` assigns the SAME list object to all keys. When `d["a"].append(1)` modifies that list, the change is visible through all keys because they all reference the same list.

### Q16. [Hard] What is the output?

```
d = {"a": 1, "b": 2, "c": 3}
filtered = {k: v for k, v in d.items() if v > 1}
print(filtered)
```

*Hint:* Dictionary comprehension with a filter condition.

**Answer:** `{'b': 2, 'c': 3}`

The comprehension includes only key-value pairs where the value is greater than 1. 'a': 1 is excluded. 'b': 2 and 'c': 3 pass the filter.

### Q17. [Hard] What is the output?

```
d = {"x": 10, "y": 20, "z": 30}
result = max(d, key=d.get)
print(result)
print(d[result])
```

*Hint:* max(dict, key=dict.get) finds the key with the highest value.

**Answer:** `z`
`30`

`max(d, key=d.get)` iterates over the keys and uses `d.get` to determine the "size" of each key. The key with the highest value is "z" (30).

## Mixed Questions

### Q1. [Easy] What is the output?

```
d = {"name": "Rohan"}
d["name"] = "Vikram"
print(d)
```

*Hint:* Assigning to an existing key updates its value.

**Answer:** `{'name': 'Vikram'}`

The key "name" already exists, so `d["name"] = "Vikram"` updates its value from "Rohan" to "Vikram".

### Q2. [Easy] What is the output?

```
d = {"a": 1, "b": 2}
d.clear()
print(d)
print(type(d))
```

*Hint:* clear() removes all key-value pairs but the dictionary object remains.

**Answer:** `{}`
``

`clear()` removes all entries, leaving an empty dictionary. The variable still refers to a dict object.

### Q3. [Easy] What is the output?

```
d = {1: "one", 2: "two", 3: "three"}
print(d[2])
print(list(d.keys()))
```

*Hint:* Dictionary keys can be integers, not just strings.

**Answer:** `two`
`[1, 2, 3]`

Integer keys work fine. `d[2]` returns "two". `list(d.keys())` returns all keys as a list: [1, 2, 3].

### Q4. [Medium] What is the output?

```
d = {"a": 1, "b": 2}
d.update({"b": 20, "c": 30})
print(d)
```

*Hint:* update() adds new keys and overwrites existing ones.

**Answer:** `{'a': 1, 'b': 20, 'c': 30}`

`update()` merges the given dictionary into d. Key "b" exists, so its value is updated from 2 to 20. Key "c" is new, so it is added.

### Q5. [Medium] What is the output?

```
d = {"a": 1, "b": 2, "c": 3}
result = d.pop("b", "not found")
result2 = d.pop("z", "not found")
print(result)
print(result2)
print(d)
```

*Hint:* pop(key, default) removes and returns the value, or returns default if key is missing.

**Answer:** `2`
`not found`
`{'a': 1, 'c': 3}`

`pop("b", "not found")` removes key "b" and returns 2. `pop("z", "not found")` does not find "z", so returns the default "not found" without error.

### Q6. [Medium] What is the output?

```
original = {"a": 1, "b": 2}
inverted = {v: k for k, v in original.items()}
print(inverted)
```

*Hint:* Dictionary comprehension can swap keys and values.

**Answer:** `{1: 'a', 2: 'b'}`

The comprehension iterates over items, creating new entries with the value as key and key as value. This inverts the dictionary.

### Q7. [Medium] What is the output?

```
d1 = {"a": 1}
d2 = d1
d2["b"] = 2
print(d1)
print(d1 is d2)
```

*Hint:* d2 = d1 creates an alias, not a copy. Same as with lists.

**Answer:** `{'a': 1, 'b': 2}`
`True`

Like lists, `d2 = d1` makes both variables reference the same dictionary. Adding "b" through d2 also affects d1. `d1 is d2` confirms they are the same object.

### Q8. [Hard] What is the output?

```
data = [{"name": "Aarav", "marks": 90},
        {"name": "Priya", "marks": 95},
        {"name": "Rohan", "marks": 78}]
top = max(data, key=lambda x: x["marks"])
print(top["name"])
```

*Hint:* max() with a key function can find the dict with the highest value for a specific key.

**Answer:** `Priya`

`max(data, key=lambda x: x["marks"])` finds the dictionary with the highest "marks" value. Priya has 95, which is the highest. The result is her entire dictionary, and `["name"]` extracts her name.

### Q9. [Medium] What is the difference between `dict[key]` and `dict.get(key)` when the key does not exist?

*Hint:* One raises an error, the other returns a default value.

**Answer:** `dict[key]` raises a **KeyError** when the key does not exist. `dict.get(key)` returns **None** (or a custom default if specified: `dict.get(key, default)`) without raising an error.

Use `[]` when the key should always exist and its absence indicates a bug. Use `.get()` when the key might be missing and you want a safe fallback. `.get()` is especially useful for optional configuration values and user input.

### Q10. [Medium] Why does `in` check keys and not values in a dictionary? How do you check if a value exists?

*Hint:* Think about the purpose of dictionaries and what operation is most common.

**Answer:** Dictionaries are optimized for key-based access. Checking if a key exists is O(1) (constant time) because of hashing. Checking values would require O(n) linear search. Since key lookup is the primary use case, `in` defaults to checking keys. To check values, use `value in dict.values()`.

The design choice reflects performance: key lookup is fast (hash-based), value lookup is slow (must scan all values). By defaulting to keys, `in` provides the fast path. You can still check values explicitly with `.values()`.

### Q11. [Hard] What is the output?

```
d = {}
for ch in "hello world":
    if ch != " ":
        d[ch] = d.get(ch, 0) + 1
print(d)
print(d["l"])
```

*Hint:* This counts character frequency, skipping spaces.

**Answer:** `{'h': 1, 'e': 1, 'l': 3, 'o': 2, 'w': 1, 'r': 1, 'd': 1}`
`3`

The loop counts each non-space character. 'l' appears in "hello" (2 times) and "world" (1 time) for a total of 3. `d["l"]` returns 3.

### Q12. [Hard] What is the output?

```
d = {"a": [1, 2], "b": [3, 4]}
copy = d.copy()
copy["a"].append(99)
print(d)
print(copy)
```

*Hint:* dict.copy() is a shallow copy. Nested mutable objects are still shared.

**Answer:** `{'a': [1, 2, 99], 'b': [3, 4]}`
`{'a': [1, 2, 99], 'b': [3, 4]}`

`.copy()` creates a shallow copy of the dictionary. The outer dict is new, but the inner lists are the same objects. Appending 99 to `copy["a"]` also affects `d["a"]` because they reference the same list.

## Multiple Choice Questions

### Q1. [Easy] Which of the following creates an empty dictionary?

A. d = []
B. d = ()
C. d = {}
D. d = set()

**Answer:** C

**C is correct.** Curly braces `{}` create an empty dictionary. `[]` (A) creates an empty list. `()` (B) creates an empty tuple. `set()` (D) creates an empty set (note: `{}` is a dict, not a set).

### Q2. [Easy] What does dict.get('key') return if 'key' does not exist?

A. 0
B. False
C. None
D. KeyError

**Answer:** C

**C is correct.** `.get(key)` returns `None` when the key is not found (no error). To return a custom default, use `.get(key, default)`. Option D describes the behavior of `dict[key]`, not `.get()`.

### Q3. [Easy] What does the 'in' operator check for dictionaries?

A. Values
B. Keys
C. Both keys and values
D. Key-value pairs

**Answer:** B

**B is correct.** The `in` operator checks **keys** by default. `"name" in d` checks if "name" is a key. To check values, use `value in d.values()`.

### Q4. [Easy] Which types can be used as dictionary keys?

A. Only strings
B. Any immutable type (str, int, tuple)
C. Any type including lists
D. Only strings and integers

**Answer:** B

**B is correct.** Dictionary keys must be hashable (immutable). Strings, integers, floats, and tuples of immutables all work. Lists (C) and dictionaries cannot be keys because they are mutable.

### Q5. [Easy] What does d.pop('key') do?

A. Returns the value without removing
B. Removes the key and returns the value
C. Removes the key and returns None
D. Removes the last item

**Answer:** B

**B is correct.** `pop(key)` removes the key-value pair and returns the value. It raises KeyError if the key does not exist (unless a default is provided). Option D describes `popitem()`.

### Q6. [Medium] What is the output of {x: x**2 for x in range(3)}?

A. {0, 1, 4}
B. {0: 0, 1: 1, 2: 4}
C. [(0, 0), (1, 1), (2, 4)]
D. {1: 1, 2: 4}

**Answer:** B

**B is correct.** Dictionary comprehension creates key-value pairs. For x = 0, 1, 2: the key is x and the value is x**2. Result: {0: 0, 1: 1, 2: 4}. Option A would be a set comprehension (`{x**2 for x in range(3)}`).

### Q7. [Medium] What happens when you add a key that already exists in a dictionary?

A. A KeyError is raised
B. The new value replaces the old one
C. Both values are kept
D. The operation is ignored

**Answer:** B

**B is correct.** Dictionary keys are unique. Assigning to an existing key overwrites the previous value. No error is raised, and the old value is lost.

### Q8. [Medium] What does d.items() return?

A. A list of keys
B. A list of values
C. A view of key-value tuples
D. A dictionary

**Answer:** C

**C is correct.** `.items()` returns a **view object** containing (key, value) tuples. It is not a regular list, but it can be iterated over and converted with `list()`.

### Q9. [Medium] What does setdefault('key', value) do if 'key' already exists?

A. Updates the key with the new value
B. Returns the existing value without changing it
C. Raises a KeyError
D. Deletes the existing key

**Answer:** B

**B is correct.** `setdefault()` only sets the value if the key does NOT exist. If the key already exists, it simply returns the current value without modifying anything.

### Q10. [Medium] How do you safely copy a dictionary?

A. b = a
B. b = a.copy()
C. b = a.values()
D. b = dict(a.items())

**Answer:** B

**B is correct.** `.copy()` creates a shallow copy. Option A creates an alias (not a copy). Option C gives only values (not a dict). Option D also works but is less common and readable. Note: for nested dicts, use `copy.deepcopy()`.

### Q11. [Hard] Since which Python version are dictionaries guaranteed to maintain insertion order?

A. Python 2.7
B. Python 3.5
C. Python 3.7
D. Python 3.9

**Answer:** C

**C is correct.** In Python 3.6, CPython (the standard implementation) made dicts ordered as an implementation detail. In Python 3.7, it became part of the language specification. Before that, dictionaries were unordered.

### Q12. [Hard] What is the output of {**{'a': 1}, **{'a': 2}}?

A. {'a': 1}
B. {'a': 2}
C. {'a': [1, 2]}
D. Error: duplicate key

**Answer:** B

**B is correct.** When merging with `**` unpacking, the last value for a duplicate key wins. The second dict has `'a': 2`, which overwrites the first dict's `'a': 1`.

### Q13. [Hard] What does dict.copy() create?

A. A deep copy
B. A shallow copy
C. An alias (same object)
D. A frozen dictionary

**Answer:** B

**B is correct.** `.copy()` creates a **shallow copy**: a new dict object, but nested mutable values (like lists) are still shared references. For a fully independent copy of nested structures, use `copy.deepcopy()`.

### Q14. [Hard] What does popitem() do in Python 3.7+?

A. Removes a random key-value pair
B. Removes the first inserted pair
C. Removes the last inserted pair
D. Removes all pairs

**Answer:** C

**C is correct.** In Python 3.7+, `popitem()` removes and returns the **last inserted** key-value pair (LIFO order). In older Python versions, it removed an arbitrary pair. Option D describes `clear()`.

### Q15. [Medium] Which method merges one dictionary into another in place?

A. merge()
B. update()
C. extend()
D. join()

**Answer:** B

**B is correct.** `update()` merges the given dictionary into the current one, modifying it in place. `merge()` (A) does not exist. `extend()` (C) is a list method. `join()` (D) is a string method.

### Q16. [Hard] What is the time complexity of checking 'key in dict'?

A. O(n)
B. O(log n)
C. O(1) average
D. O(n log n)

**Answer:** C

**C is correct.** Dictionary key lookup uses hashing, which provides O(1) average-case time complexity. This is why dictionaries are preferred over lists for lookups. List membership checking (`item in list`) is O(n).

### Q17. [Easy] What is the output of len({'a': 1, 'b': 2, 'c': 3})?

A. 6
B. 3
C. 2
D. 9

**Answer:** B

**B is correct.** `len()` on a dictionary returns the number of key-value pairs. This dictionary has 3 pairs, so the length is 3.

### Q18. [Hard] What does d = {}; d[(1, 2)] = 'point' do?

A. Creates a dictionary with two keys: 1 and 2
B. Creates a dictionary with one key: the tuple (1, 2)
C. Raises TypeError
D. Creates a nested dictionary

**Answer:** B

**B is correct.** The tuple `(1, 2)` is used as a single dictionary key mapping to 'point'. Tuples are hashable and valid as keys. The dictionary has one entry: `{(1, 2): 'point'}`.

## Coding Challenges

### Challenge 1. Word Frequency Counter

**Difficulty:** Easy

Given the string "the cat sat on the mat the cat", write a program that counts the frequency of each word and prints the result as a dictionary.

**Constraints:**

- Use .split() and .get() pattern.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
{'the': 3, 'cat': 2, 'sat': 1, 'on': 1, 'mat': 1}
```

**Solution:**

```python
text = "the cat sat on the mat the cat"
words = text.split()
freq = {}
for word in words:
    freq[word] = freq.get(word, 0) + 1
print(freq)
```

### Challenge 2. Invert a Dictionary

**Difficulty:** Easy

Given the dictionary {'a': 1, 'b': 2, 'c': 3}, write a program that inverts it so keys become values and values become keys. Print the result.

**Constraints:**

- Use dictionary comprehension.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
{1: 'a', 2: 'b', 3: 'c'}
```

**Solution:**

```python
original = {'a': 1, 'b': 2, 'c': 3}
inverted = {v: k for k, v in original.items()}
print(inverted)
```

### Challenge 3. Merge Two Dictionaries

**Difficulty:** Easy

Aarav has two dictionaries: d1 = {'a': 1, 'b': 2} and d2 = {'b': 3, 'c': 4}. Merge them into a new dictionary where d2's values take priority for overlapping keys.

**Constraints:**

- Use ** unpacking or update().

**Sample input:**

```
(No input required)
```

**Sample output:**

```
{'a': 1, 'b': 3, 'c': 4}
```

**Solution:**

```python
d1 = {'a': 1, 'b': 2}
d2 = {'b': 3, 'c': 4}
merged = {**d1, **d2}
print(merged)
```

### Challenge 4. Group Students by Grade

**Difficulty:** Medium

Given a list of tuples: [('Aarav', 'A'), ('Priya', 'B'), ('Rohan', 'A'), ('Meera', 'B'), ('Vikram', 'A')], group students by their grade into a dictionary. Print the result.

**Constraints:**

- Use setdefault() or .get() pattern.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
{'A': ['Aarav', 'Rohan', 'Vikram'], 'B': ['Priya', 'Meera']}
```

**Solution:**

```python
students = [('Aarav', 'A'), ('Priya', 'B'), ('Rohan', 'A'), ('Meera', 'B'), ('Vikram', 'A')]
groups = {}
for name, grade in students:
    groups.setdefault(grade, []).append(name)
print(groups)
```

### Challenge 5. Find Students Above Average

**Difficulty:** Medium

Given marks = {'Aarav': 85, 'Priya': 92, 'Rohan': 78, 'Meera': 95, 'Vikram': 88}, calculate the average marks and print only the students who scored above average.

**Constraints:**

- Use sum(), len(), and dictionary comprehension.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Average: 87.6
Above average: {'Priya': 92, 'Meera': 95, 'Vikram': 88}
```

**Solution:**

```python
marks = {'Aarav': 85, 'Priya': 92, 'Rohan': 78, 'Meera': 95, 'Vikram': 88}
avg = sum(marks.values()) / len(marks)
print(f"Average: {avg}")
above = {name: score for name, score in marks.items() if score > avg}
print(f"Above average: {above}")
```

### Challenge 6. Nested Dictionary Access

**Difficulty:** Medium

Given a nested dictionary representing a school, write a program that prints each student's name and their total marks across all subjects.

```
school = {
    "Aarav": {"Maths": 90, "Science": 85, "English": 88},
    "Priya": {"Maths": 95, "Science": 92, "English": 91}
}
```

**Constraints:**

- Use nested loops or sum() on values.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Aarav: 263
Priya: 278
```

**Solution:**

```python
school = {
    "Aarav": {"Maths": 90, "Science": 85, "English": 88},
    "Priya": {"Maths": 95, "Science": 92, "English": 91}
}
for name, subjects in school.items():
    total = sum(subjects.values())
    print(f"{name}: {total}")
```

### Challenge 7. Two Lists to Dictionary

**Difficulty:** Medium

Given keys = ['name', 'age', 'city'] and values = ['Rohan', 16, 'Delhi'], write a program that creates a dictionary from these two lists using zip().

**Constraints:**

- Use zip() and dict().

**Sample input:**

```
(No input required)
```

**Sample output:**

```
{'name': 'Rohan', 'age': 16, 'city': 'Delhi'}
```

**Solution:**

```python
keys = ['name', 'age', 'city']
values = ['Rohan', 16, 'Delhi']
result = dict(zip(keys, values))
print(result)
```

### Challenge 8. Character Frequency with Sorting

**Difficulty:** Hard

Write a program that counts the frequency of each character in "programming" and prints them sorted by frequency (highest first). For ties, sort alphabetically.

**Constraints:**

- Use .get() for counting. Use sorted() with a key.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
g: 2
m: 2
r: 2
a: 1
i: 1
n: 1
o: 1
p: 1
```

**Solution:**

```python
text = "programming"
freq = {}
for ch in text:
    freq[ch] = freq.get(ch, 0) + 1
sorted_chars = sorted(freq.items(), key=lambda x: (-x[1], x[0]))
for ch, count in sorted_chars:
    print(f"{ch}: {count}")
```

### Challenge 9. Find Duplicate Values

**Difficulty:** Hard

Given the dictionary {'a': 1, 'b': 2, 'c': 1, 'd': 3, 'e': 2}, write a program that finds and prints which values appear more than once, along with the keys that share them.

**Constraints:**

- Use a dictionary to group keys by their values.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Value 1 is shared by: ['a', 'c']
Value 2 is shared by: ['b', 'e']
```

**Solution:**

```python
d = {'a': 1, 'b': 2, 'c': 1, 'd': 3, 'e': 2}
value_to_keys = {}
for key, value in d.items():
    value_to_keys.setdefault(value, []).append(key)
for value, keys in value_to_keys.items():
    if len(keys) > 1:
        print(f"Value {value} is shared by: {keys}")
```

### Challenge 10. Flatten a Nested Dictionary

**Difficulty:** Hard

Write a program that flattens the nested dictionary {'a': 1, 'b': {'c': 2, 'd': {'e': 3}}} into a flat dictionary with dotted keys: {'a': 1, 'b.c': 2, 'b.d.e': 3}.

**Constraints:**

- Use recursion or a stack-based approach.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
{'a': 1, 'b.c': 2, 'b.d.e': 3}
```

**Solution:**

```python
def flatten(d, parent_key='', sep='.'):
    items = {}
    for k, v in d.items():
        new_key = parent_key + sep + k if parent_key else k
        if isinstance(v, dict):
            items.update(flatten(v, new_key, sep))
        else:
            items[new_key] = v
    return items

nested = {'a': 1, 'b': {'c': 2, 'd': {'e': 3}}}
print(flatten(nested))
```

---

*Notes: https://learn.modernagecoders.com/resources/python/dictionaries-in-python/*
