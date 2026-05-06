---
title: "Dictionaries in Python - Dict Methods, Key-Value Pairs, Comprehension | Modern Age Coders"
description: "Learn Python dictionaries including dict methods, key-value pairs, .get() vs [], nested dictionaries, dictionary comprehension, and common patterns. Includes 62+ practice questions with output prediction and coding challenges."
slug: dictionaries-in-python
canonical: https://learn.modernagecoders.com/resources/python/dictionaries-in-python/
category: "Python"
keywords: ["python dictionary", "dict methods python", "key value pairs python", "python dictionary tutorial", "python dict comprehension", "python nested dictionary", "python dict get", "python dictionary methods", "python dictionary examples", "python dictionary operations"]
---
# Dictionaries in Python

**Difficulty:** Intermediate  
**Reading time:** 30 min  
**Chapter:** 14  
**Practice questions:** 62

## What Are Dictionaries in Python?

A **dictionary** is an unordered (in Python < 3.7) or insertion-ordered (Python 3.7+) collection of **key-value pairs**. Each key maps to a value, like a real dictionary where a word (key) maps to its definition (value).

Dictionaries are defined using curly braces `{}` with `key: value` pairs separated by commas:

```
student = {
    "name": "Aarav",
    "age": 16,
    "grade": "A"
}
```

Keys must be **immutable** and **unique** (strings, numbers, tuples). Values can be any type and can be duplicated. Dictionaries provide **O(1) average-time** lookups, making them extremely fast for searching by key.

### Creating Dictionaries

```
empty = {}                              # Empty dictionary
empty2 = dict()                         # Also empty dictionary
student = {"name": "Priya", "age": 15}  # Literal syntax
from_pairs = dict(name="Rohan", age=16) # Keyword arguments
from_tuples = dict([("a", 1), ("b", 2)]) # From list of tuples
```

## Why Are Dictionaries Important?

Dictionaries are one of the most powerful and frequently used data structures in Python. Here is why:

### 1. Fast Lookups by Key

When you have a student roll number and need their name, a list would require searching through every element. A dictionary gives you the answer instantly using the key. With thousands or millions of entries, this speed difference is enormous.

### 2. Natural Representation of Real-World Data

Most real-world data is key-value: a person's name maps to their phone number, a product ID maps to its price, a country maps to its capital. Dictionaries model these relationships directly and intuitively.

### 3. Foundation of JSON and APIs

JSON (JavaScript Object Notation), the most common data format on the web, is essentially a nested dictionary structure. When you work with web APIs, you receive and send dictionaries. Python's `json` module converts between JSON strings and dictionaries seamlessly.

### 4. Counting and Grouping

Dictionaries are the standard tool for counting occurrences (word frequency, character counts) and grouping data (students by grade, products by category). These are among the most common programming tasks.

### 5. Configuration and Settings

Application settings, configuration files, environment variables — all are naturally represented as dictionaries. Frameworks like Django and Flask use dictionaries extensively for settings, request data, and template contexts.

## Detailed Explanation

### 1. Accessing Values: [] vs .get()

There are two ways to access a value by key:

**Square bracket notation:** `dict[key]` returns the value if the key exists. Raises `KeyError` if the key does not exist.

**.get() method:** `dict.get(key)` returns the value if the key exists. Returns `None` (or a specified default) if the key does not exist. Never raises an error.

```
student = {"name": "Aarav", "age": 16}
print(student["name"])         # "Aarav"
print(student.get("name"))     # "Aarav"
print(student.get("grade"))    # None (no error)
print(student.get("grade", "N/A"))  # "N/A" (custom default)
# student["grade"]  would raise KeyError
```

Use `[]` when you are certain the key exists (and want an error if it does not). Use `.get()` when the key might not exist and you want a safe fallback.

### 2. Adding and Updating Keys

Simply assign a value to a key. If the key exists, it is updated. If it does not exist, it is created:

```
d = {"a": 1}
d["b"] = 2      # Add new key
d["a"] = 10     # Update existing key
# d is now {"a": 10, "b": 2}
```

### 3. Deleting Keys

`del dict[key]` removes the key-value pair. Raises KeyError if the key does not exist.

`dict.pop(key)` removes and returns the value. Raises KeyError if not found (unless a default is provided).

`dict.pop(key, default)` returns default instead of raising an error.

`dict.popitem()` removes and returns the last inserted key-value pair (Python 3.7+).

`dict.clear()` removes all key-value pairs.

### 4. Dictionary Methods

#### View Methods

`keys()` returns a view of all keys. `values()` returns a view of all values. `items()` returns a view of all key-value pairs as tuples. These views are dynamic: they reflect changes to the dictionary.

#### update()

`dict.update(other_dict)` adds all key-value pairs from `other_dict`. Existing keys are overwritten.

#### setdefault()

`dict.setdefault(key, default)` returns the value if the key exists. If the key does not exist, it inserts the key with the default value and returns the default.

#### fromkeys()

`dict.fromkeys(iterable, value)` creates a new dictionary with keys from the iterable, all set to the same value.

### 5. Looping Over Dictionaries

There are several ways to iterate:

```
d = {"name": "Aarav", "age": 16}

# Loop over keys (default)
for key in d:
    print(key)

# Loop over values
for value in d.values():
    print(value)

# Loop over key-value pairs
for key, value in d.items():
    print(f"{key}: {value}")
```

Iterating with `.items()` is the most common pattern because you usually need both the key and the value.

### 6. Nested Dictionaries

A dictionary can contain other dictionaries as values, creating a hierarchical structure:

```
school = {
    "student1": {"name": "Aarav", "marks": 90},
    "student2": {"name": "Priya", "marks": 95}
}
print(school["student1"]["name"])  # "Aarav"
```

Nested dictionaries are common for representing structured data like JSON responses, configuration files, and database records.

### 7. Dictionary Comprehension

Similar to list comprehension, dictionary comprehension creates dictionaries in a single expression:

```
{key_expr: value_expr for item in iterable}
{key_expr: value_expr for item in iterable if condition}
```

Examples:

```
squares = {x: x**2 for x in range(1, 6)}
# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

even_squares = {x: x**2 for x in range(1, 11) if x % 2 == 0}
# {2: 4, 4: 16, 6: 36, 8: 64, 10: 100}
```

### 8. Checking Key Existence

Use the `in` operator to check if a key exists:

```
d = {"name": "Aarav", "age": 16}
print("name" in d)     # True
print("grade" in d)    # False
print("Aarav" in d)    # False (checks keys, not values)
```

The `in` operator checks **keys**, not values. To check values, use `value in d.values()`.

### 9. Dictionary Ordering (Python 3.7+)

Since Python 3.7, dictionaries maintain **insertion order**. Items are iterated in the order they were added. In older versions of Python, dictionaries were unordered.

### 10. Merging Dictionaries

There are multiple ways to merge dictionaries:

```
# Method 1: update() (modifies in place)
a = {"x": 1}
a.update({"y": 2})

# Method 2: Unpacking (Python 3.5+)
c = {**a, **b}  # Creates a new dict

# Method 3: | operator (Python 3.9+)
c = a | b       # Creates a new dict
a |= b          # Updates a in place
```

When keys overlap, the rightmost dictionary's values win.

### 11. Common Patterns

#### Counting

```
text = "banana"
count = {}
for ch in text:
    count[ch] = count.get(ch, 0) + 1
# {"b": 1, "a": 3, "n": 2}
```

#### Grouping

```
students = [("Aarav", "A"), ("Priya", "B"), ("Rohan", "A")]
groups = {}
for name, grade in students:
    groups.setdefault(grade, []).append(name)
# {"A": ["Aarav", "Rohan"], "B": ["Priya"]}
```

## Code Examples

### Creating and Accessing Dictionaries

```python
# Creating a dictionary
student = {
    "name": "Aarav",
    "age": 16,
    "grade": "A",
    "subjects": ["Maths", "Science"]
}

# Accessing with []
print(student["name"])
print(student["subjects"])

# Accessing with .get() (safe)
print(student.get("age"))
print(student.get("phone"))         # None
print(student.get("phone", "N/A"))  # "N/A"

# What happens with missing key and []
try:
    print(student["phone"])
except KeyError as e:
    print(f"KeyError: {e}")
```

Square brackets `[]` raise a KeyError if the key is missing. `.get()` returns None (or a custom default) without raising an error. Use `.get()` when you are unsure if the key exists.

**Output:**

```
Aarav
['Maths', 'Science']
16
None
N/A
KeyError: 'phone'
```

### Adding, Updating, and Deleting

```python
d = {"a": 1, "b": 2, "c": 3}
print("Original:", d)

# Add new key
d["d"] = 4
print("After add:", d)

# Update existing key
d["a"] = 10
print("After update:", d)

# Delete with del
del d["b"]
print("After del:", d)

# Delete with pop (returns the value)
val = d.pop("c")
print(f"Popped: {val}, Dict: {d}")

# pop with default (no error if missing)
val = d.pop("z", "not found")
print(f"Pop missing key: {val}")

# popitem (removes last inserted)
d["x"] = 100
d["y"] = 200
item = d.popitem()
print(f"Popitem: {item}, Dict: {d}")
```

Assigning to a key adds it (if new) or updates it (if existing). `del` removes by key. `pop(key)` removes and returns the value. `pop(key, default)` avoids errors for missing keys. `popitem()` removes the last inserted pair.

**Output:**

```
Original: {'a': 1, 'b': 2, 'c': 3}
After add: {'a': 1, 'b': 2, 'c': 3, 'd': 4}
After update: {'a': 10, 'b': 2, 'c': 3, 'd': 4}
After del: {'a': 10, 'c': 3, 'd': 4}
Popped: 3, Dict: {'a': 10, 'd': 4}
Pop missing key: not found
Popitem: ('y', 200), Dict: {'a': 10, 'd': 4, 'x': 100}
```

### Dictionary Methods - keys(), values(), items()

```python
student = {"name": "Priya", "age": 15, "grade": "A+"}

print("Keys:", list(student.keys()))
print("Values:", list(student.values()))
print("Items:", list(student.items()))

# Looping over items (most common pattern)
print("\nStudent details:")
for key, value in student.items():
    print(f"  {key}: {value}")

# Checking key existence
print("\nHas 'name':", "name" in student)
print("Has 'phone':", "phone" in student)
print("Has value 'A+':", "A+" in student.values())
```

`keys()`, `values()`, and `items()` return view objects. Wrap with `list()` to see the contents. `items()` returns key-value tuples, enabling tuple unpacking in a for loop. The `in` operator checks keys by default; use `.values()` to check values.

**Output:**

```
Keys: ['name', 'age', 'grade']
Values: ['Priya', 15, 'A+']
Items: [('name', 'Priya'), ('age', 15), ('grade', 'A+')]

Student details:
  name: Priya
  age: 15
  grade: A+

Has 'name': True
Has 'phone': False
Has value 'A+': True
```

### Dictionary Comprehension

```python
# Basic comprehension: squares
squares = {x: x**2 for x in range(1, 6)}
print("Squares:", squares)

# With condition: even squares only
even_sq = {x: x**2 for x in range(1, 11) if x % 2 == 0}
print("Even squares:", even_sq)

# Invert a dictionary (swap keys and values)
original = {"a": 1, "b": 2, "c": 3}
inverted = {v: k for k, v in original.items()}
print("Inverted:", inverted)

# Filter a dictionary
scores = {"Aarav": 90, "Priya": 55, "Rohan": 78, "Meera": 45}
passed = {name: score for name, score in scores.items() if score >= 60}
print("Passed:", passed)
```

Dictionary comprehension uses `{key_expr: value_expr for item in iterable if condition}`. It can create new dictionaries, invert existing ones, or filter based on conditions. Like list comprehension, it is a concise alternative to building dictionaries with loops.

**Output:**

```
Squares: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
Even squares: {2: 4, 4: 16, 6: 36, 8: 64, 10: 100}
Inverted: {1: 'a', 2: 'b', 3: 'c'}
Passed: {'Aarav': 90, 'Rohan': 78}
```

### Nested Dictionaries

```python
# School records as nested dict
school = {
    "Aarav": {"age": 16, "marks": {"Maths": 90, "Science": 85}},
    "Priya": {"age": 15, "marks": {"Maths": 95, "Science": 92}}
}

# Accessing nested values
print("Aarav's Maths marks:", school["Aarav"]["marks"]["Maths"])
print("Priya's age:", school["Priya"]["age"])

# Modifying nested values
school["Aarav"]["marks"]["English"] = 88
print("\nAarav's marks:", school["Aarav"]["marks"])

# Looping over nested dict
print("\nAll students:")
for name, info in school.items():
    print(f"  {name} (age {info['age']}):")
    for subject, mark in info["marks"].items():
        print(f"    {subject}: {mark}")
```

Nested dictionaries store dictionaries inside dictionaries. Access deep values by chaining keys: `d[key1][key2][key3]`. This is the same structure as JSON. Nested loops are used to iterate through all levels.

**Output:**

```
Aarav's Maths marks: 90
Priya's age: 15

Aarav's marks: {'Maths': 90, 'Science': 85, 'English': 88}

All students:
  Aarav (age 16):
    Maths: 90
    Science: 85
    English: 88
  Priya (age 15):
    Maths: 95
    Science: 92
```

### Counting and Grouping Patterns

```python
# Pattern 1: Counting with .get()
text = "mississippi"
char_count = {}
for ch in text:
    char_count[ch] = char_count.get(ch, 0) + 1
print("Character counts:", char_count)

# Pattern 2: Grouping with setdefault()
students = [
    ("Aarav", "Science"),
    ("Priya", "Maths"),
    ("Rohan", "Science"),
    ("Meera", "Maths"),
    ("Vikram", "Science")
]
by_subject = {}
for name, subject in students:
    by_subject.setdefault(subject, []).append(name)
print("\nGrouped by subject:", by_subject)

# Pattern 3: Finding max value
scores = {"Aarav": 90, "Priya": 95, "Rohan": 78}
top = max(scores, key=scores.get)
print(f"\nHighest scorer: {top} with {scores[top]}")
```

Counting with `.get(key, 0) + 1` is the standard pattern for frequency counting. `setdefault(key, [])` creates an empty list if the key is missing, then appends to it — perfect for grouping. `max(dict, key=dict.get)` finds the key with the highest value.

**Output:**

```
Character counts: {'m': 1, 'i': 4, 's': 4, 'p': 2}

Grouped by subject: {'Science': ['Aarav', 'Rohan', 'Vikram'], 'Maths': ['Priya', 'Meera']}

Highest scorer: Priya with 95
```

### Merging Dictionaries

```python
d1 = {"a": 1, "b": 2}
d2 = {"b": 3, "c": 4}

# Method 1: update() - modifies d1 in place
merged1 = d1.copy()  # Copy first to preserve d1
merged1.update(d2)
print("update():", merged1)

# Method 2: ** unpacking (Python 3.5+)
merged2 = {**d1, **d2}
print("** unpacking:", merged2)

# Method 3: | operator (Python 3.9+)
merged3 = d1 | d2
print("| operator:", merged3)

# Note: when keys overlap, the last value wins
print("\nOriginal d1:", d1)
print("Original d2:", d2)
print("Key 'b' in merge:", merged2["b"], "(from d2)")
```

All three methods merge dictionaries. When keys overlap, the rightmost dictionary's value wins (d2's value for key 'b'). `update()` modifies in place. `{**d1, **d2}` and `d1 | d2` create new dictionaries. The `|` operator (Python 3.9+) is the most readable.

**Output:**

```
update(): {'a': 1, 'b': 3, 'c': 4}
** unpacking: {'a': 1, 'b': 3, 'c': 4}
| operator: {'a': 1, 'b': 3, 'c': 4}

Original d1: {'a': 1, 'b': 2}
Original d2: {'b': 3, 'c': 4}
Key 'b' in merge: 3 (from d2)
```

### setdefault() and fromkeys()

```python
# setdefault: get value if exists, set and return default if not
d = {"name": "Aarav"}
result1 = d.setdefault("name", "Unknown")
result2 = d.setdefault("age", 16)
print(f"Existing key: {result1}")
print(f"New key: {result2}")
print(f"Dict after setdefault: {d}")

# fromkeys: create dict with same value for all keys
subjects = ["Maths", "Science", "English"]
initial_scores = dict.fromkeys(subjects, 0)
print(f"\nInitial scores: {initial_scores}")

# Caution: fromkeys with mutable default
d2 = dict.fromkeys(["a", "b"], [])
d2["a"].append(1)
print(f"\nfromkeys gotcha: {d2}")  # Both share same list!
```

`setdefault()` is useful for initialization: it only sets the value if the key does not exist. `fromkeys()` creates a dictionary with specified keys all set to the same value. Warning: with a mutable default (like a list), all keys share the same object, similar to the `[[]] * n` list gotcha.

**Output:**

```
Existing key: Aarav
New key: 16
Dict after setdefault: {'name': 'Aarav', 'age': 16}

Initial scores: {'Maths': 0, 'Science': 0, 'English': 0}

fromkeys gotcha: {'a': [1], 'b': [1]}
```

## Common Mistakes

### Using [] Instead of .get() for Optional Keys

**Wrong:**

```
config = {"host": "localhost", "port": 8080}
timeout = config["timeout"]  # KeyError!
```

KeyError: 'timeout'

**Correct:**

```
config = {"host": "localhost", "port": 8080}
timeout = config.get("timeout", 30)  # Returns 30 as default
print(timeout)
```

Using `[]` with a missing key raises a `KeyError`. Use `.get(key, default)` when the key might not exist. The default value (30 here) is returned instead of raising an error.

### Using a Mutable Type (List) as a Dictionary Key

**Wrong:**

```
d = {}
d[[1, 2]] = "value"  # TypeError!
```

TypeError: unhashable type: 'list'

**Correct:**

```
d = {}
d[(1, 2)] = "value"  # Tuples are hashable
print(d)
```

Dictionary keys must be hashable (immutable). Lists are mutable and therefore not hashable. Convert the list to a tuple first, since tuples are immutable and hashable.

### Modifying a Dictionary While Iterating

**Wrong:**

```
d = {"a": 1, "b": 2, "c": 3}
for key in d:
    if d[key] < 3:
        del d[key]  # RuntimeError!
```

RuntimeError: dictionary changed size during iteration

**Correct:**

```
d = {"a": 1, "b": 2, "c": 3}
keys_to_delete = [key for key in d if d[key] < 3]
for key in keys_to_delete:
    del d[key]
print(d)  # {'c': 3}
```

You cannot add or delete keys while iterating over a dictionary. This raises a RuntimeError. Collect the keys to delete first (in a list), then delete them in a separate loop.

### Assuming 'in' Checks Values (It Checks Keys)

**Wrong:**

```
d = {"name": "Aarav", "age": 16}
print("Aarav" in d)  # False! Checks keys, not values
```

No error, but returns False unexpectedly. 'Aarav' is a value, not a key.

**Correct:**

```
d = {"name": "Aarav", "age": 16}
print("Aarav" in d.values())  # True
print("name" in d)           # True (checks keys)
```

The `in` operator on a dictionary checks **keys**, not values. `"Aarav" in d` is False because "Aarav" is not a key. To check values, use `"Aarav" in d.values()`.

### fromkeys() with Mutable Default Shares the Same Object

**Wrong:**

```
d = dict.fromkeys(["a", "b", "c"], [])
d["a"].append(1)
print(d)  # {'a': [1], 'b': [1], 'c': [1]} - all changed!
```

No error, but all keys share the same list object. Modifying one affects all.

**Correct:**

```
d = {key: [] for key in ["a", "b", "c"]}
d["a"].append(1)
print(d)  # {'a': [1], 'b': [], 'c': []}
```

`fromkeys()` assigns the SAME object to all keys. When that object is mutable (like a list), all keys share it. Use a dictionary comprehension instead, which creates a new list for each key.

### Overwriting Keys with Duplicate Keys in Literal

**Wrong:**

```
d = {"a": 1, "b": 2, "a": 3}
print(d)  # {'a': 3, 'b': 2} - first 'a' is overwritten!
```

No error, but the first 'a': 1 is silently overwritten by 'a': 3.

**Correct:**

```
# Ensure unique keys
d = {"a": 1, "b": 2, "c": 3}
print(d)
```

Dictionary keys must be unique. If you define the same key twice in a literal, the last value wins. Python does not warn you about this. Always ensure keys are unique when creating a dictionary.

## Summary

- Dictionaries store key-value pairs using curly braces {}. Keys must be immutable and unique. Values can be any type.
- Access values with dict[key] (raises KeyError if missing) or dict.get(key, default) (returns None or a default if missing). Prefer .get() for optional keys.
- Add or update entries by assigning: dict[key] = value. Delete with del dict[key], pop(key), popitem(), or clear().
- keys(), values(), and items() return view objects for iteration. items() is the most common for looping because it provides both key and value.
- The 'in' operator checks keys by default. Use 'in dict.values()' to check values.
- Dictionary comprehension {key: value for item in iterable if condition} creates dictionaries concisely, similar to list comprehension.
- Nested dictionaries store dictionaries as values. Access deep values by chaining keys: dict[key1][key2]. This mirrors JSON structure.
- Since Python 3.7, dictionaries maintain insertion order. Items are iterated in the order they were added.
- Merge dictionaries with update() (in place), {**d1, **d2} (new dict), or d1 | d2 (Python 3.9+). When keys overlap, the last dictionary's values win.
- Common patterns: counting with .get(key, 0) + 1, grouping with setdefault(key, []).append(value), finding max with max(dict, key=dict.get).

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/python/dictionaries-in-python/*
*Practice questions: https://learn.modernagecoders.com/resources/python/dictionaries-in-python/practice/*
