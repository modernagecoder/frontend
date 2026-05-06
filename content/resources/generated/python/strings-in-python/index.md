---
title: "Strings in Python - String Methods, Slicing, f-Strings | Modern Age Coders"
description: "Learn Python strings including string methods, slicing, f-strings, formatting, indexing, and immutability. Includes 65+ practice questions with output prediction and coding challenges."
slug: strings-in-python
canonical: https://learn.modernagecoders.com/resources/python/strings-in-python/
category: "Python"
keywords: ["python strings", "string methods python", "string slicing python", "python string tutorial", "python f-strings", "python string formatting", "python string indexing", "python string immutability", "python string operations", "python string examples"]
---
# Strings in Python

**Difficulty:** Intermediate  
**Reading time:** 28 min  
**Chapter:** 11  
**Practice questions:** 65

## What Are Strings in Python?

A **string** is a sequence of characters enclosed in quotes. Characters can be letters, digits, symbols, spaces, or even special characters like newline. In Python, strings are one of the most commonly used data types because almost every program deals with text in some form — names, messages, file paths, user input, and more.

Python treats strings as **sequences**, which means each character has a position (index), and you can access individual characters, extract substrings, and iterate over them just like you would with a list of items.

### Creating Strings

Python allows you to create strings using three different types of quotes:

**1. Single quotes:** `'Hello'` — Most common for short strings.

**2. Double quotes:** `"Hello"` — Identical to single quotes. Useful when the string itself contains a single quote, like `"Aarav's book"`.

**3. Triple quotes:** `'''Hello'''` or `"""Hello"""` — Used for multi-line strings or strings that span several lines. Also used for docstrings (documentation strings in functions).

Single and double quotes are interchangeable in Python. There is no difference in the resulting string. The choice is purely about readability and avoiding escape characters.

## Why Are Strings Important?

Strings are arguably the most versatile data type in programming. Here is why mastering strings is essential:

### 1. Text Processing Is Everywhere

From reading user input to displaying results, from processing files to communicating over networks, text is the universal medium. Every `input()` call returns a string. Every `print()` call converts data to a string. Understanding strings means understanding how your program communicates.

### 2. Data Cleaning and Validation

Real-world data is messy. Names come with extra spaces, emails need validation, phone numbers need formatting. String methods like `strip()`, `lower()`, `replace()`, and `isdigit()` are your tools for cleaning and validating data before processing it.

### 3. String Manipulation Is a Core Interview Topic

Whether you are preparing for college placements, competitive programming, or coding interviews, string problems are among the most frequently asked. Palindrome checking, anagram detection, pattern matching, and substring search are classic problems that require strong string skills.

### 4. Foundation for File and Web Processing

Reading from files produces strings. Web scraping produces strings. API responses are often strings (JSON format). Database queries return strings. Without string manipulation skills, you cannot process any of this data effectively.

### 5. Formatted Output Makes Programs Professional

f-strings and the `.format()` method let you create clean, readable output. Instead of clumsy concatenation with `+` operators, you can embed variables directly into text, control decimal places, align columns, and build professional-looking reports.

## Detailed Explanation

### 1. String Indexing

Every character in a string has a position called an **index**. Python uses **zero-based indexing**, meaning the first character is at index 0, the second at index 1, and so on.

Python also supports **negative indexing**. The last character is at index -1, the second-to-last at -2, and so on. Negative indexing is a shortcut for accessing characters from the end without knowing the length of the string.

```
name = "Python"
# Positive:  P=0, y=1, t=2, h=3, o=4, n=5
# Negative:  P=-6, y=-5, t=-4, h=-3, o=-2, n=-1
```

Accessing an index beyond the string length raises an `IndexError`.

### 2. String Slicing

Slicing extracts a **substring** from a string using the syntax `string[start:stop:step]`.

**Rules of slicing:**

- `start` is the index where the slice begins (included).

- `stop` is the index where the slice ends (excluded).

- `step` determines the direction and interval (default is 1).

- If `start` is omitted, it defaults to 0 (or end of string if step is negative).

- If `stop` is omitted, it defaults to the end of string (or beginning if step is negative).

- Slicing never raises an IndexError, even if indices are out of range. Python simply truncates to the available characters.

```
s = "Modern Age Coders"
s[0:6]    # "Modern"
s[7:10]   # "Age"
s[:6]     # "Modern" (start defaults to 0)
s[11:]    # "Coders" (stop defaults to end)
s[::2]    # "MdnAeCdr" (every 2nd character)
s[::-1]   # "sredoC egA nredoM" (reversed)
```

### 3. String Immutability

Strings in Python are **immutable**. Once a string is created, you cannot change any character in it. If you try to assign a new character to a specific index, Python raises a `TypeError`.

```
name = "Priya"
name[0] = "p"  # TypeError: 'str' object does not support item assignment
```

To "change" a string, you must create a new string. For example: `name = "p" + name[1:]` creates a new string `"priya"` and reassigns the variable.

### 4. String Methods

Python provides a rich set of built-in methods for string manipulation. These methods do not modify the original string (because strings are immutable). They return a new string.

#### Case Methods

`upper()` converts all characters to uppercase. `lower()` converts all to lowercase. `title()` capitalizes the first letter of each word. `capitalize()` capitalizes only the first character of the string.

#### Whitespace Methods

`strip()` removes leading and trailing whitespace. `lstrip()` removes only leading (left) whitespace. `rstrip()` removes only trailing (right) whitespace. These are essential for cleaning user input.

#### Search and Replace Methods

`find(sub)` returns the index of the first occurrence of `sub`, or -1 if not found. `index(sub)` is similar but raises a `ValueError` if not found. `count(sub)` returns the number of non-overlapping occurrences. `replace(old, new)` replaces all occurrences of `old` with `new`.

#### Split and Join

`split(sep)` breaks a string into a list of substrings at each occurrence of `sep`. If no separator is given, it splits on whitespace. `join(iterable)` is the reverse: it joins a list of strings with a separator.

#### Checking Methods

`startswith(prefix)` and `endswith(suffix)` check if a string begins or ends with a given substring. `isdigit()` returns True if all characters are digits. `isalpha()` returns True if all characters are letters. `isalnum()` returns True if all characters are alphanumeric.

#### Padding and Alignment

`center(width)` centers the string in a field of given width. `zfill(width)` pads the string with zeros on the left to reach the given width.

### 5. f-Strings (Formatted String Literals)

Introduced in Python 3.6, f-strings are the most readable way to embed expressions inside strings. Prefix the string with `f` and place expressions inside curly braces `{}`.

```
name = "Rohan"
age = 16
print(f"{name} is {age} years old")
```

f-strings can contain any valid Python expression: arithmetic, method calls, conditional expressions, and more. They are faster and more readable than the older `.format()` method or `%` formatting.

### 6. The .format() Method

Before f-strings, the `.format()` method was the standard way to format strings. It uses `{}` as placeholders that are filled by the arguments of `.format()`.

```
print("My name is {} and I am {} years old".format("Ananya", 15))
print("Pi is approximately {:.2f}".format(3.14159))
```

While f-strings are now preferred, `.format()` is still used in logging, older codebases, and situations where the template string is stored separately from the data.

### 7. String Concatenation and Multiplication

The `+` operator concatenates (joins) two strings. The `*` operator repeats a string a given number of times.

```
greeting = "Hello" + " " + "World"   # "Hello World"
line = "-" * 30                       # "------------------------------"
```

Note: you cannot concatenate a string with a non-string type using `+`. You must convert the other value to a string first using `str()`, or use an f-string.

### 8. Iterating Over Strings

Since strings are sequences, you can loop through each character using a `for` loop:

```
for ch in "Aarav":
    print(ch)
```

You can also loop using indices with `range(len(s))`, which is useful when you need to know the position of each character.

### 9. String Comparison

Strings are compared character by character using their Unicode (ASCII) values. Uppercase letters have lower values than lowercase letters: `'A' (65) < 'a' (97)`. Comparison operators (`==`, `!=`, `<`, `>`, `<=`, `>=`) work on strings.

### 10. ord() and chr()

`ord(char)` returns the Unicode code point of a single character. `chr(num)` returns the character for a given Unicode code point. These are useful for character arithmetic and encoding problems.

```
ord('A')   # 65
chr(65)    # 'A'
ord('a')   # 97
chr(97)    # 'a'
```

## Code Examples

### String Creation and Indexing

```python
# Different ways to create strings
single = 'Hello'
double = "Hello"
triple = '''This is a
multi-line string'''

print(single == double)  # True
print(triple)

# Indexing
name = "Ananya"
print(name[0])    # First character
print(name[-1])   # Last character
print(name[3])    # Fourth character
print(name[-2])   # Second to last
```

Single and double quotes produce identical strings. Triple quotes preserve line breaks. Positive indexing starts at 0 from the left. Negative indexing starts at -1 from the right. `name[0]` gives 'A' and `name[-1]` gives 'a' for the string "Ananya".

**Output:**

```
True
This is a
multi-line string
A
a
n
y
```

### String Slicing - All Variations

```python
s = "Programming"
print(s[0:4])     # First 4 characters
print(s[4:])      # From index 4 to end
print(s[:7])      # From start to index 6
print(s[::2])     # Every 2nd character
print(s[1::2])    # Every 2nd char starting from index 1
print(s[::-1])    # Reversed string
print(s[-4:])     # Last 4 characters
print(s[2:8:2])   # Index 2 to 7, step 2
print(s[100:200]) # Out of range - no error, empty string
```

Slicing uses `[start:stop:step]`. The stop index is always excluded. Omitting start defaults to 0 (or end if step is negative). Omitting stop defaults to end (or beginning if step is negative). `[::-1]` is the standard idiom for reversing a string. Out-of-range slice indices do not cause errors; Python simply returns whatever characters are available.

**Output:**

```
Prog
ramming
Program
Pormmn
rgamig
gnimmargorP
ming
orms

```

### String Immutability

```python
name = "Vikram"

# Attempting to change a character causes an error
try:
    name[0] = "v"
except TypeError as e:
    print("Error:", e)

# Correct approach: create a new string
name = "v" + name[1:]
print("New string:", name)

# Another approach using replace()
original = "Vikram"
modified = original.replace("V", "v")
print("Replace result:", modified)
print("Original unchanged:", original)
```

Strings cannot be changed in place. Assigning to an index like `name[0] = 'v'` raises a TypeError. To modify a string, you create a new one using slicing, concatenation, or methods like `replace()`. The original string remains unchanged because methods return new strings.

**Output:**

```
Error: 'str' object does not support item assignment
New string: vikram
Replace result: vikram
Original unchanged: Vikram
```

### Essential String Methods

```python
text = "  Hello, World!  "
print(text.strip())       # Remove whitespace
print(text.lstrip())      # Remove left whitespace
print(text.rstrip())      # Remove right whitespace

name = "aarav sharma"
print(name.upper())       # AARAV SHARMA
print(name.title())       # Aarav Sharma
print(name.capitalize())  # Aarav sharma

sentence = "Python is fun and Python is powerful"
print(sentence.count("Python"))     # 2
print(sentence.find("fun"))         # 10
print(sentence.find("boring"))      # -1
print(sentence.replace("fun", "great"))
```

`strip()` removes whitespace from both ends. `upper()` and `lower()` change case. `title()` capitalizes first letter of each word. `count()` counts occurrences. `find()` returns the index of the first match or -1 if not found. `replace()` substitutes all occurrences. None of these modify the original string.

**Output:**

```
Hello, World!
Hello, World!  
  Hello, World!
AARAV SHARMA
Aarav Sharma
Aarav sharma
2
10
-1
Python is great and Python is powerful
```

### split() and join()

```python
# split() - break string into a list
sentence = "Maths Science English Hindi"
words = sentence.split()
print(words)

csv_data = "Aarav,Priya,Rohan,Meera"
names = csv_data.split(",")
print(names)

# join() - combine list into a string
result = " - ".join(names)
print(result)

letters = ['P', 'y', 't', 'h', 'o', 'n']
word = "".join(letters)
print(word)

# split with maxsplit
data = "one:two:three:four"
print(data.split(":", 2))
```

`split()` without arguments splits on any whitespace and removes empty strings. With an argument, it splits on that exact separator. `join()` is called on the separator string and takes a list of strings. `split(sep, maxsplit)` limits the number of splits. These two methods are inverse operations and are used constantly in data processing.

**Output:**

```
['Maths', 'Science', 'English', 'Hindi']
['Aarav', 'Priya', 'Rohan', 'Meera']
Aarav - Priya - Rohan - Meera
Python
['one', 'two', 'three:four']
```

### f-Strings and .format()

```python
# f-strings (Python 3.6+)
name = "Priya"
marks = 92.567
print(f"Student: {name}")
print(f"Marks: {marks:.2f}")       # 2 decimal places
print(f"Double marks: {marks * 2}")
print(f"Name in uppercase: {name.upper()}")

# .format() method
print("Hello, {}! You scored {}%.".format("Rohan", 85))
print("Pi is {:.4f}".format(3.14159))
print("{0} and {1} and {0}".format("Coding", "Maths"))

# Padding and alignment with f-strings
for i in range(1, 4):
    print(f"{i:>5} | {i*i:<5} | {i*i*i:^5}")
```

f-strings embed expressions inside `{}`. You can call methods, perform arithmetic, and use format specifiers like `:.2f` for 2 decimal places. The `.format()` method uses positional or indexed placeholders. Alignment specifiers: `>` right-aligns, `<` left-aligns, `^` centers within the given width.

**Output:**

```
Student: Priya
Marks: 92.57
Double marks: 185.134
Name in uppercase: PRIYA
Hello, Rohan! You scored 85%.
Pi is 3.1416
Coding and Maths and Coding
    1 | 1     |   1  
    2 | 4     |   8  
    3 | 9     |  27  
```

### Checking Methods and ord()/chr()

```python
# Checking methods
print("12345".isdigit())      # True
print("12.5".isdigit())       # False (dot is not a digit)
print("Hello".isalpha())      # True
print("Hello World".isalpha()) # False (space is not a letter)
print("abc123".isalnum())     # True
print("Python3".startswith("Py"))  # True
print("script.py".endswith(".py")) # True

# ord() and chr()
print(ord('A'))   # 65
print(ord('a'))   # 97
print(chr(65))    # A
print(chr(97))    # a
print(ord('0'))   # 48

# Character arithmetic
letter = 'C'
next_letter = chr(ord(letter) + 1)
print(f"Next letter after {letter} is {next_letter}")
```

`isdigit()`, `isalpha()`, and `isalnum()` test the content of strings. They return False if the string is empty or contains characters outside the expected set. `ord()` converts a character to its Unicode code point, and `chr()` does the reverse. Character arithmetic (adding/subtracting from ord values) is useful for problems involving alphabets, like Caesar cipher or generating sequences.

**Output:**

```
True
False
True
False
True
True
True
65
97
A
a
48
Next letter after C is D
```

### String Multiplication and Concatenation

```python
# String multiplication
line = "=" * 40
print(line)

pattern = "AB" * 5
print(pattern)

# Concatenation
first = "Modern"
last = "Coders"
full = first + " Age " + last
print(full)

# Concatenation vs f-string
name = "Aarav"
age = 14
# This causes an error: name + " is " + age
# Fix with str():
result = name + " is " + str(age)
print(result)
# Better with f-string:
print(f"{name} is {age}")
```

The `*` operator repeats a string. The `+` operator joins strings but both operands must be strings. Trying to concatenate a string with an integer raises a TypeError. Use `str()` for explicit conversion, or use f-strings which handle conversion automatically. f-strings are generally preferred because they are more readable and less error-prone.

**Output:**

```
========================================
ABABABABAB
Modern Age Coders
Aarav is 14
Aarav is 14
```

## Common Mistakes

### Trying to Modify a String In Place

**Wrong:**

```
name = "Priya"
name[0] = "p"
```

TypeError: 'str' object does not support item assignment

**Correct:**

```
name = "Priya"
name = "p" + name[1:]
print(name)  # priya
```

Strings are immutable in Python. You cannot change individual characters using index assignment. To create a modified version, build a new string using slicing and concatenation, or use methods like `replace()`.

### Confusing find() and index() When Substring Is Missing

**Wrong:**

```
text = "Hello World"
pos = text.index("Python")
print(pos)
```

ValueError: substring not found

**Correct:**

```
text = "Hello World"
pos = text.find("Python")
print(pos)  # -1 (not found, no error)
```

`index()` raises a `ValueError` when the substring is not found. `find()` returns -1 instead. Use `find()` when you are unsure if the substring exists, and `index()` only when you are certain it does (or when you want an exception).

### Concatenating String with Non-String Type

**Wrong:**

```
age = 15
message = "I am " + age + " years old"
```

TypeError: can only concatenate str (not "int") to str

**Correct:**

```
age = 15
message = f"I am {age} years old"
print(message)
# Or: message = "I am " + str(age) + " years old"
```

The `+` operator cannot concatenate a string with an integer. Python does not auto-convert types. Either use `str()` to convert the integer to a string, or (preferably) use an f-string which handles the conversion automatically.

### Forgetting That String Methods Return New Strings

**Wrong:**

```
name = "  aarav  "
name.strip()
name.upper()
print(name)  # Still "  aarav  "
```

No error, but the original string is unchanged because the return values were not saved.

**Correct:**

```
name = "  aarav  "
name = name.strip().upper()
print(name)  # AARAV
```

String methods do not modify the original string (strings are immutable). They return a new string. You must assign the result back to a variable. You can chain methods: `name.strip().upper()` first strips whitespace, then converts to uppercase.

### Off-by-One Error in Slicing

**Wrong:**

```
# Meera wants characters at index 2, 3, 4
text = "Python"
result = text[2:4]
print(result)  # "th" - only 2 characters, not 3!
```

No error, but only gets indices 2 and 3. Index 4 is excluded.

**Correct:**

```
text = "Python"
result = text[2:5]  # stop index should be 5 to include index 4
print(result)  # "tho"
```

In slicing, the stop index is **excluded**. `text[2:4]` gives characters at indices 2 and 3 only. To include index 4, you need `text[2:5]`. A quick formula: `text[a:b]` gives `b - a` characters.

### Using == to Compare Strings Without Considering Case

**Wrong:**

```
user_input = "Yes"
if user_input == "yes":
    print("Confirmed")
else:
    print("Not confirmed")  # This runs!
```

No error, but "Yes" != "yes" because comparison is case-sensitive.

**Correct:**

```
user_input = "Yes"
if user_input.lower() == "yes":
    print("Confirmed")  # This runs now
```

String comparison in Python is case-sensitive. `"Yes"` and `"yes"` are different strings because 'Y' and 'y' have different Unicode values. Always convert both sides to the same case using `.lower()` or `.upper()` before comparing.

## Summary

- Strings are immutable sequences of characters created with single quotes, double quotes, or triple quotes. Single and double quotes are interchangeable.
- Indexing accesses individual characters: positive indices count from the left starting at 0, negative indices count from the right starting at -1.
- Slicing extracts substrings using [start:stop:step]. The stop index is always excluded. Slicing never raises IndexError even with out-of-range indices.
- Strings are immutable: you cannot change characters in place. Methods like upper(), replace(), and strip() return new strings without modifying the original.
- Key string methods: strip(), split(), join(), replace(), find(), count(), upper(), lower(), title(), startswith(), endswith(), isdigit(), isalpha().
- f-strings (f"...") are the preferred way to embed variables and expressions in strings. They are more readable and faster than .format() or concatenation.
- The + operator concatenates strings (both operands must be strings). The * operator repeats a string. Use str() to convert non-string types before concatenation.
- split() breaks a string into a list at a separator. join() combines a list of strings with a separator. These are inverse operations.
- ord() returns the Unicode code point of a character. chr() returns the character for a code point. These enable character arithmetic.
- String comparison is case-sensitive and uses Unicode values. Always normalize case with lower() or upper() before comparing user input.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/python/strings-in-python/*
*Practice questions: https://learn.modernagecoders.com/resources/python/strings-in-python/practice/*
