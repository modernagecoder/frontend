---
title: "File Handling in Python - open, read, write, with Statement | Modern Age Coders"
description: "Learn Python file handling including the open() function, file modes (r, w, a, r+, rb, wb), read/write methods, the with statement for context management, file paths, and CSV processing. Includes 55+ practice questions with output prediction and coding challenges."
slug: file-handling-in-python
canonical: https://learn.modernagecoders.com/resources/python/file-handling-in-python
category: "Python"
keywords: ["python file handling", "read write files python", "python open function", "python file handling tutorial", "python with statement", "python read file", "python write file", "python file modes", "python csv file", "python context manager"]
---
# File Handling in Python

**Difficulty:** Advanced  
**Reading time:** 40 min  
**Chapter:** 19  
**Practice questions:** 55

## What Is File Handling in Python?

**File handling** is the ability to read data from files and write data to files on your computer's storage. Until now, every program you have written loses all its data the moment it stops running. Variables exist only in memory (RAM), and RAM is cleared when the program ends. Files provide **persistent storage** -- data that survives after your program exits.

Python provides the built-in `open()` function to work with files. The basic workflow is:

```
# Open a file
file = open("data.txt", "r")  # "r" = read mode

# Do something with the file
content = file.read()
print(content)

# Close the file
file.close()
```

Every file operation follows this three-step pattern: **open**, **operate**, **close**. However, as we will see, Python offers a better approach using the `with` statement that handles closing automatically.

### Types of Files

Files fall into two broad categories:

- **Text files** -- contain human-readable characters (letters, digits, symbols). Examples: `.txt`, `.csv`, `.py`, `.html`. Python reads these as strings.
- **Binary files** -- contain raw bytes (not human-readable). Examples: `.jpg`, `.png`, `.pdf`, `.exe`. Python reads these as bytes objects.

## Why Is File Handling Important?

### 1. Data Persistence

Without files, every program starts with a blank slate. If Aarav builds a quiz application, the scores disappear when the program ends. With file handling, he can save scores to a file and load them the next time the program runs. This is the foundation of all data storage.

### 2. Processing Real-World Data

Real-world applications constantly read and write files. A school management system reads student data from CSV files. A web scraper saves results to text files. A configuration system reads settings from files. Understanding file handling is essential for building any practical application.

### 3. Interoperability

Files are the universal way programs exchange data. Priya's Python script can write a CSV file that Rohan opens in Excel. A program can read configuration files, log files, or data files created by other programs. Files are the common language between different software.

### 4. Logging and Debugging

Professional applications write log files that record what happened during execution. When something goes wrong, developers read these logs to diagnose the problem. Without file handling, there would be no way to keep a permanent record of program activity.

### 5. Foundation for Databases

Databases (like SQLite, MySQL, PostgreSQL) are ultimately sophisticated file management systems. Understanding how basic file I/O works gives you the conceptual foundation for understanding how databases store and retrieve data.

## Detailed Explanation

### 1. The open() Function

The `open()` function creates a file object. Its signature is:

```
open(filename, mode="r", encoding=None)
```

`filename` is a string path to the file. `mode` determines what you can do with the file. `encoding` specifies the character encoding (default depends on your OS, but `"utf-8"` is recommended for text files).

### 2. File Modes

The mode string tells Python how to open the file:

ModeDescriptionCreates file?Overwrites?`"r"`Read only (default)No (FileNotFoundError)No`"w"`Write onlyYesYes (erases existing content)`"a"`Append onlyYesNo (adds to end)`"r+"`Read and writeNo (FileNotFoundError)Overwrites from position`"w+"`Write and readYesYes (erases existing content)`"a+"`Append and readYesNo (adds to end)`"rb"`Read binaryNoNo`"wb"`Write binaryYesYes

The most critical distinction: `"w"` mode **destroys existing content** the moment you open the file. If Meera accidentally opens an important file in `"w"` mode, all its data is gone instantly, even if she never writes anything to it.

### 3. Reading Files

Python provides three methods to read file content:

#### read() -- Read the Entire File

```
# Reads everything into one string
with open("poem.txt", "r") as f:
    content = f.read()
    print(content)
```

`read()` returns the entire file as a single string, including newline characters (`\n`). You can also pass a number to read that many characters: `f.read(100)` reads the first 100 characters.

#### readline() -- Read One Line

```
# Reads one line at a time
with open("poem.txt", "r") as f:
    first_line = f.readline()   # Reads line 1
    second_line = f.readline()  # Reads line 2
    print(first_line)
    print(second_line)
```

`readline()` reads up to and including the next newline character. Each subsequent call reads the next line. When the file is exhausted, it returns an empty string `""`.

#### readlines() -- Read All Lines into a List

```
# Returns a list of lines
with open("poem.txt", "r") as f:
    lines = f.readlines()
    print(lines)   # ['Line 1\n', 'Line 2\n', 'Line 3\n']
    print(len(lines))  # Number of lines
```

`readlines()` returns a list where each element is one line (including the trailing `\n`). Useful when you need to process lines by index.

#### Iterating Over a File (Best Practice)

```
# Most memory-efficient way to read line by line
with open("poem.txt", "r") as f:
    for line in f:
        print(line.strip())  # strip() removes trailing \n
```

A file object is **iterable**. Iterating directly over it reads one line at a time without loading the entire file into memory. This is the preferred approach for large files.

### 4. Writing to Files

#### write() -- Write a String

```
with open("output.txt", "w") as f:
    f.write("Hello, World!\n")
    f.write("This is line 2.\n")
```

`write()` writes a string to the file. It does **not** automatically add a newline -- you must include `\n` yourself. It returns the number of characters written.

#### writelines() -- Write a List of Strings

```
lines = ["Line 1\n", "Line 2\n", "Line 3\n"]
with open("output.txt", "w") as f:
    f.writelines(lines)
```

`writelines()` writes each string in the list to the file. Like `write()`, it does not add newlines between items -- you must include them in the strings.

### 5. The with Statement (Context Manager)

The `with` statement is the **correct** way to work with files in Python. It guarantees the file is closed when the block ends, even if an error occurs:

```
# Without with (risky)
f = open("data.txt", "r")
content = f.read()
f.close()  # What if an error occurs before this line?

# With with (safe)
with open("data.txt", "r") as f:
    content = f.read()
# File is automatically closed here, no matter what
```

Why is the first approach risky? If an error occurs between `open()` and `close()`, the file is never closed. An unclosed file can lead to data loss (buffered writes not flushed), resource leaks (too many open files), and corrupted data. The `with` statement eliminates all these risks.

Technical detail: `with` calls the file object's `__enter__()` method when entering the block and `__exit__()` method when leaving (which calls `close()`). This is the **context manager protocol**.

### 6. File Paths

#### Absolute vs Relative Paths

```
# Absolute path (full path from root)
f = open("/home/aarav/projects/data.txt", "r")
f = open("C:/Users/Priya/Documents/data.txt", "r")  # Windows

# Relative path (relative to current working directory)
f = open("data.txt", "r")          # Same directory
f = open("data/input.txt", "r")     # Subdirectory
f = open("../data.txt", "r")        # Parent directory
```

#### Using os.path for Cross-Platform Paths

```
import os

# Join path components (uses correct separator for OS)
path = os.path.join("data", "students", "marks.txt")
print(path)  # data/students/marks.txt (Linux/Mac)
             # data\\students\\marks.txt (Windows)

# Check if file exists before opening
if os.path.exists("data.txt"):
    with open("data.txt", "r") as f:
        print(f.read())
else:
    print("File not found!")

# Get absolute path
print(os.path.abspath("data.txt"))
```

### 7. File Pointer Position: tell() and seek()

When you read from a file, Python maintains a **file pointer** that tracks your current position (measured in bytes from the start):

```
with open("data.txt", "r") as f:
    print(f.tell())       # 0 (start of file)
    
    chunk = f.read(10)    # Read 10 characters
    print(f.tell())       # 10 (moved forward)
    
    f.seek(0)             # Move back to start
    print(f.tell())       # 0
    
    content = f.read()    # Read from beginning again
```

`tell()` returns the current position. `seek(offset)` moves the pointer to a specific position. `seek(0)` rewinds to the beginning. This is useful when you need to read a file multiple times without reopening it.

### 8. Reading CSV Files Manually

CSV (Comma-Separated Values) is a common format for tabular data. Before learning the `csv` module, understand how to parse CSV manually:

```
# students.csv contains:
# Name,Age,Grade
# Aarav,16,A
# Priya,15,A+
# Rohan,17,B+

with open("students.csv", "r") as f:
    header = f.readline().strip().split(",")
    print(f"Columns: {header}")
    
    for line in f:
        values = line.strip().split(",")
        name, age, grade = values
        print(f"{name} is {age} years old with grade {grade}")
```

Each line is split by the comma delimiter. `strip()` removes the trailing newline. This approach works for simple CSV files but breaks if values contain commas. For production code, use the `csv` module.

### 9. Writing Formatted Data

```
students = [
    {"name": "Aarav", "age": 16, "marks": 92},
    {"name": "Priya", "age": 15, "marks": 97},
    {"name": "Rohan", "age": 17, "marks": 85},
]

# Write as CSV
with open("results.csv", "w") as f:
    f.write("Name,Age,Marks\n")
    for s in students:
        f.write(f"{s['name']},{s['age']},{s['marks']}\n")

# Write as formatted report
with open("report.txt", "w") as f:
    f.write("Student Report\n")
    f.write("=" * 30 + "\n")
    for s in students:
        f.write(f"Name: {s['name']:10s} Age: {s['age']:3d} Marks: {s['marks']:3d}\n")
```

### 10. Common File Operations

#### Counting Lines in a File

```
with open("data.txt", "r") as f:
    line_count = sum(1 for line in f)
    print(f"Total lines: {line_count}")
```

#### Searching for Text

```
search_term = "Python"
with open("notes.txt", "r") as f:
    for line_num, line in enumerate(f, 1):
        if search_term in line:
            print(f"Line {line_num}: {line.strip()}")
```

#### Copying File Content

```
with open("source.txt", "r") as src:
    with open("destination.txt", "w") as dst:
        for line in src:
            dst.write(line)
```

## Code Examples

### Writing and Reading a Text File

```python
# Writing to a file
with open("greeting.txt", "w") as f:
    f.write("Hello, Aarav!\n")
    f.write("Welcome to Python file handling.\n")
    f.write("This is line 3.\n")

# Reading the entire file
with open("greeting.txt", "r") as f:
    content = f.read()
    print("--- Full content ---")
    print(content)

# Reading line by line
with open("greeting.txt", "r") as f:
    print("--- Line by line ---")
    for line in f:
        print(line.strip())

# Reading into a list
with open("greeting.txt", "r") as f:
    lines = f.readlines()
    print(f"\nNumber of lines: {len(lines)}")
    print(f"First line: {lines[0].strip()}")
```

This example demonstrates the complete cycle of writing to a file and reading it back using three different methods: `read()` for the entire content, direct iteration for line-by-line processing, and `readlines()` for getting all lines as a list. The `with` statement ensures proper file closure.

**Output:**

```
--- Full content ---
Hello, Aarav!
Welcome to Python file handling.
This is line 3.

--- Line by line ---
Hello, Aarav!
Welcome to Python file handling.
This is line 3.

Number of lines: 3
First line: Hello, Aarav!
```

### File Modes: Write vs Append

```python
# Write mode ("w") -- creates or overwrites
with open("log.txt", "w") as f:
    f.write("Entry 1: Program started\n")
    f.write("Entry 2: Loading data\n")

with open("log.txt", "r") as f:
    print("After write mode:")
    print(f.read())

# Append mode ("a") -- adds to end
with open("log.txt", "a") as f:
    f.write("Entry 3: Processing complete\n")
    f.write("Entry 4: Program ended\n")

with open("log.txt", "r") as f:
    print("After append mode:")
    print(f.read())

# Write mode again -- DESTROYS previous content!
with open("log.txt", "w") as f:
    f.write("Fresh start!\n")

with open("log.txt", "r") as f:
    print("After second write mode:")
    print(f.read())
```

Write mode (`"w"`) erases all existing content and starts fresh. Append mode (`"a"`) preserves existing content and adds new data at the end. The final write mode call demonstrates how `"w"` destroys the four entries and replaces them with a single line.

**Output:**

```
After write mode:
Entry 1: Program started
Entry 2: Loading data

After append mode:
Entry 1: Program started
Entry 2: Loading data
Entry 3: Processing complete
Entry 4: Program ended

After second write mode:
Fresh start!
```

### readline() and tell()/seek()

```python
# Create a test file
with open("sample.txt", "w") as f:
    f.write("Line 1: Python\n")
    f.write("Line 2: is\n")
    f.write("Line 3: powerful\n")

# Demonstrate readline and file pointer
with open("sample.txt", "r") as f:
    print(f"Position: {f.tell()}")
    
    line1 = f.readline()
    print(f"Read: {line1.strip()!r}")
    print(f"Position: {f.tell()}")
    
    line2 = f.readline()
    print(f"Read: {line2.strip()!r}")
    print(f"Position: {f.tell()}")
    
    # Seek back to the beginning
    f.seek(0)
    print(f"\nAfter seek(0), position: {f.tell()}")
    print(f"Read again: {f.readline().strip()!r}")
    
    # Read after end of file
    f.seek(0)
    while True:
        line = f.readline()
        if not line:  # Empty string means EOF
            print("Reached end of file")
            break
        print(line.strip())
```

`readline()` reads one line at a time, advancing the file pointer. `tell()` shows the current byte position. `seek(0)` rewinds to the start. When `readline()` returns an empty string, the file is exhausted.

**Output:**

```
Position: 0
Read: 'Line 1: Python'
Position: 16
Read: 'Line 2: is'
Position: 27

After seek(0), position: 0
Read again: 'Line 1: Python'
Line 1: Python
Line 2: is
Line 3: powerful
Reached end of file
```

### Writing and Reading CSV Data

```python
# Write student data as CSV
students = [
    ("Aarav", 16, 92, "A"),
    ("Priya", 15, 97, "A+"),
    ("Rohan", 17, 78, "B+"),
    ("Meera", 14, 85, "A"),
    ("Vikram", 16, 68, "B"),
]

with open("students.csv", "w") as f:
    f.write("Name,Age,Marks,Grade\n")
    for name, age, marks, grade in students:
        f.write(f"{name},{age},{marks},{grade}\n")

print("CSV file written.")

# Read and process the CSV
with open("students.csv", "r") as f:
    header = f.readline().strip().split(",")
    print(f"Columns: {header}")
    print("-" * 35)
    
    total_marks = 0
    count = 0
    for line in f:
        name, age, marks, grade = line.strip().split(",")
        marks = int(marks)
        total_marks += marks
        count += 1
        print(f"{name:8s} | Age: {age} | Marks: {marks} | Grade: {grade}")
    
    print("-" * 35)
    print(f"Average marks: {total_marks / count:.1f}")
```

This example writes structured data as CSV (comma-separated values), then reads it back, parses each line by splitting on commas, and computes statistics. The header line is read separately since it contains column names, not data.

**Output:**

```
CSV file written.
Columns: ['Name', 'Age', 'Marks', 'Grade']
-----------------------------------
Aarav    | Age: 16 | Marks: 92 | Grade: A
Priya    | Age: 15 | Marks: 97 | Grade: A+
Rohan    | Age: 17 | Marks: 78 | Grade: B+
Meera    | Age: 14 | Marks: 85 | Grade: A
Vikram   | Age: 16 | Marks: 68 | Grade: B
-----------------------------------
Average marks: 84.0
```

### Checking File Existence and Using os.path

```python
import os

# Create a test file
with open("test_file.txt", "w") as f:
    f.write("Test content\n")

# Check if file exists
print(f"test_file.txt exists: {os.path.exists('test_file.txt')}")
print(f"missing.txt exists: {os.path.exists('missing.txt')}")

# Get absolute path
print(f"Absolute path: {os.path.abspath('test_file.txt')}")

# Join paths safely
path = os.path.join("data", "reports", "summary.txt")
print(f"Joined path: {path}")

# Get file size
size = os.path.getsize("test_file.txt")
print(f"File size: {size} bytes")

# Safe file reading pattern
def safe_read(filepath):
    if not os.path.exists(filepath):
        return f"Error: {filepath} not found"
    with open(filepath, "r") as f:
        return f.read()

print(safe_read("test_file.txt"))
print(safe_read("nonexistent.txt"))
```

The `os.path` module provides utilities for working with file paths. `exists()` checks if a path exists, `abspath()` returns the full path, `join()` combines path components using the correct separator for the OS, and `getsize()` returns file size in bytes.

**Output:**

```
test_file.txt exists: True
missing.txt exists: False
Absolute path: /home/user/test_file.txt
Joined path: data/reports/summary.txt
File size: 13 bytes
Test content

Error: nonexistent.txt not found
```

### Counting Lines, Searching Text, Copying Files

```python
# Create a source file
with open("source.txt", "w") as f:
    f.write("Python is a programming language.\n")
    f.write("Python is used for web development.\n")
    f.write("Java is also popular.\n")
    f.write("Python supports file handling.\n")
    f.write("C++ is a compiled language.\n")

# Count total lines
with open("source.txt", "r") as f:
    line_count = sum(1 for _ in f)
    print(f"Total lines: {line_count}")

# Search for lines containing a keyword
keyword = "Python"
with open("source.txt", "r") as f:
    print(f"\nLines containing '{keyword}':")
    for num, line in enumerate(f, 1):
        if keyword in line:
            print(f"  Line {num}: {line.strip()}")

# Count occurrences of a word
with open("source.txt", "r") as f:
    content = f.read()
    count = content.count("Python")
    print(f"\n'Python' appears {count} times")

# Copy file
with open("source.txt", "r") as src:
    with open("backup.txt", "w") as dst:
        for line in src:
            dst.write(line)

print("\nFile copied to backup.txt")

# Verify copy
with open("backup.txt", "r") as f:
    print(f"Backup has {sum(1 for _ in f)} lines")
```

Practical file operations: counting lines using a generator expression, searching for text with `enumerate()` for line numbers, counting word occurrences with `str.count()`, and copying a file line by line. Nested `with` blocks can open multiple files simultaneously.

**Output:**

```
Total lines: 5

Lines containing 'Python':
  Line 1: Python is a programming language.
  Line 2: Python is used for web development.
  Line 4: Python supports file handling.

'Python' appears 3 times

File copied to backup.txt
Backup has 5 lines
```

### writelines() and the with Statement Guarantee

```python
# writelines() does NOT add newlines
fruits = ["apple", "banana", "cherry"]

# Wrong: lines will be joined together
with open("fruits_wrong.txt", "w") as f:
    f.writelines(fruits)

with open("fruits_wrong.txt", "r") as f:
    print("Without newlines:")
    print(repr(f.read()))

# Correct: add newlines yourself
with open("fruits_correct.txt", "w") as f:
    f.writelines(fruit + "\n" for fruit in fruits)

with open("fruits_correct.txt", "r") as f:
    print("\nWith newlines:")
    print(f.read())

# Demonstrating with statement safety
print("Demonstrating automatic close:")
f = open("temp.txt", "w")
print(f"Before close: f.closed = {f.closed}")
f.close()
print(f"After close: f.closed = {f.closed}")

with open("temp.txt", "w") as f:
    print(f"Inside with: f.closed = {f.closed}")
print(f"Outside with: f.closed = {f.closed}")
```

`writelines()` writes each string from an iterable but does not add newline characters between them. You must include `\n` yourself. The `with` statement automatically sets `f.closed` to `True` when the block ends, as confirmed by checking the `closed` attribute.

**Output:**

```
Without newlines:
'applebananacherry'

With newlines:
apple
banana
cherry

Demonstrating automatic close:
Before close: f.closed = False
After close: f.closed = True
Inside with: f.closed = False
Outside with: f.closed = True
```

## Common Mistakes

### Opening in Write Mode When You Meant to Read

**Wrong:**

```
# Accidentally using "w" instead of "r"
with open("important_data.txt", "w") as f:
    content = f.read()  # Trying to read
# The file is now EMPTY! All data is gone!
```

io.UnsupportedOperation: not readable (and all previous content is erased!)

**Correct:**

```
with open("important_data.txt", "r") as f:
    content = f.read()  # Correctly reading
```

Opening a file in `"w"` mode immediately erases all its content, even before you write anything. The data is lost permanently. Always double-check the mode string. Use `"r"` for reading.

### Forgetting to Close the File (Not Using with)

**Wrong:**

```
f = open("data.txt", "w")
f.write("Important data")
# Forgot f.close()
# Data might not be written if program crashes!
```

No error shown, but data may be lost. The file remains open, consuming system resources.

**Correct:**

```
with open("data.txt", "w") as f:
    f.write("Important data")
# File is automatically closed and data is flushed
```

Without `with`, you must manually call `close()`. If you forget, or if an error occurs before `close()`, the file may not be properly saved. Always use the `with` statement for file operations.

### Expecting writelines() to Add Newlines

**Wrong:**

```
lines = ["Hello", "World", "Python"]
with open("output.txt", "w") as f:
    f.writelines(lines)
# File contains: HelloWorldPython (all on one line!)
```

No error, but the output is all on a single line: 'HelloWorldPython'

**Correct:**

```
lines = ["Hello", "World", "Python"]
with open("output.txt", "w") as f:
    f.writelines(line + "\n" for line in lines)
# File contains three separate lines
```

`writelines()` writes each string exactly as-is. It does not add any separator or newline between items. You must include `\n` in each string yourself.

### Reading a File Twice Without Seeking

**Wrong:**

```
with open("data.txt", "r") as f:
    first_read = f.read()
    second_read = f.read()  # Returns empty string!
    print(len(first_read))   # e.g., 100
    print(len(second_read))  # 0 (empty!)
```

No error, but the second read returns an empty string because the file pointer is at the end.

**Correct:**

```
with open("data.txt", "r") as f:
    first_read = f.read()
    f.seek(0)  # Reset pointer to beginning
    second_read = f.read()  # Now reads the full content again
    print(len(first_read) == len(second_read))  # True
```

After `read()`, the file pointer is at the end. A second `read()` returns nothing because there is nothing left to read. Use `seek(0)` to rewind the pointer to the beginning before reading again.

### Not Handling FileNotFoundError

**Wrong:**

```
with open("nonexistent.txt", "r") as f:
    content = f.read()
# FileNotFoundError: [Errno 2] No such file or directory
```

FileNotFoundError: [Errno 2] No such file or directory: 'nonexistent.txt'

**Correct:**

```
import os

filename = "nonexistent.txt"
if os.path.exists(filename):
    with open(filename, "r") as f:
        content = f.read()
else:
    print(f"File '{filename}' not found.")
```

Opening a non-existent file in read mode raises `FileNotFoundError`. Always check with `os.path.exists()` first, or handle the error with try/except (covered in the next chapter).

## Summary

- The open() function creates a file object. It takes a filename and mode (default is "r" for read). Always specify encoding="utf-8" for text files to avoid platform-dependent issues.
- File modes: "r" (read), "w" (write, destroys existing content), "a" (append), "r+" (read+write), "rb"/"wb" (binary). The "w" mode erases the file immediately upon opening.
- Three reading methods: read() returns the entire file as one string, readline() returns one line, readlines() returns a list of all lines. Each includes trailing newline characters.
- The most memory-efficient way to read a file is to iterate over the file object directly: for line in f. This reads one line at a time without loading the entire file into memory.
- write() writes a string to a file without adding a newline. writelines() writes a list of strings without adding separators. You must include newline characters yourself.
- The with statement (context manager) is the correct way to handle files. It guarantees the file is closed when the block ends, even if an error occurs.
- tell() returns the current file pointer position in bytes. seek(offset) moves the pointer to a specific position. seek(0) rewinds to the beginning.
- Use os.path.exists() to check if a file exists before reading. Use os.path.join() to build file paths that work across operating systems.
- CSV files can be parsed manually by splitting lines on commas, but this approach breaks if values contain commas. The csv module handles edge cases properly.
- Files are either text (human-readable characters) or binary (raw bytes). Text mode is the default. Use "rb" and "wb" for binary files like images or PDFs.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/python/file-handling-in-python/*
*Practice questions: https://learn.modernagecoders.com/resources/python/file-handling-in-python/practice/*
