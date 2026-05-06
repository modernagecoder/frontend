---
title: "Practice: File Handling in Python"
description: "55 practice problems for File Handling in Python in Python"
slug: file-handling-in-python-practice
canonical: https://learn.modernagecoders.com/resources/python/file-handling-in-python/practice
category: "Python"
---
# Practice: File Handling in Python

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
with open("test.txt", "w") as f:
    f.write("Hello")
    f.write("World")

with open("test.txt", "r") as f:
    print(f.read())
```

*Hint:* write() does not add newlines automatically.

**Answer:** `HelloWorld`

Two `write()` calls write "Hello" and "World" consecutively with no separator. Since `write()` does not add newlines, the output is a single string "HelloWorld".

### Q2. [Easy] What is the output?

```
with open("test.txt", "w") as f:
    f.write("Line 1\n")
    f.write("Line 2\n")

with open("test.txt", "r") as f:
    lines = f.readlines()
    print(len(lines))
    print(lines[0].strip())
```

*Hint:* readlines() returns a list of lines including newline characters.

**Answer:** `2`
`Line 1`

`readlines()` returns `['Line 1\n', 'Line 2\n']`, which has 2 elements. `lines[0]` is `'Line 1\n'`, and `strip()` removes the trailing newline.

### Q3. [Easy] What is the output?

```
with open("test.txt", "w") as f:
    result = f.write("Python")
    print(result)
```

*Hint:* write() returns the number of characters written.

**Answer:** `6`

`write()` returns the number of characters written. "Python" has 6 characters, so it returns 6.

### Q4. [Easy] What is the output?

```
with open("test.txt", "w") as f:
    f.write("Hello\n")

with open("test.txt", "a") as f:
    f.write("World\n")

with open("test.txt", "r") as f:
    print(f.read())
```

*Hint:* Append mode adds to the end without erasing existing content.

**Answer:** `Hello`
`World`

The first block writes "Hello\n" in write mode. The second block opens in append mode, which preserves "Hello\n" and adds "World\n" at the end. The result is both lines.

### Q5. [Easy] What is the output?

```
with open("test.txt", "w") as f:
    f.write("ABCDEF")

with open("test.txt", "r") as f:
    print(f.read(3))
    print(f.read(3))
```

*Hint:* read(n) reads n characters and advances the file pointer.

**Answer:** `ABC`
`DEF`

`f.read(3)` reads the first 3 characters: "ABC". The file pointer advances to position 3. The next `f.read(3)` reads the next 3 characters: "DEF".

### Q6. [Medium] What is the output?

```
with open("test.txt", "w") as f:
    f.write("Line A\nLine B\nLine C\n")

with open("test.txt", "r") as f:
    first = f.readline()
    second = f.readline()
    rest = f.read()
    print(repr(first))
    print(repr(second))
    print(repr(rest))
```

*Hint:* readline() reads up to and including the newline. read() reads everything remaining.

**Answer:** `'Line A\n'`
`'Line B\n'`
`'Line C\n'`

`readline()` reads one line including the `\n`. After two calls, the pointer is at the start of "Line C". `read()` reads everything remaining: "Line C\n".

### Q7. [Medium] What is the output?

```
with open("test.txt", "w") as f:
    f.write("Hello")

with open("test.txt", "r") as f:
    content = f.read()
    print(f.tell())
    f.seek(0)
    print(f.tell())
    print(f.read(2))
```

*Hint:* tell() shows the current position. seek(0) moves to the start.

**Answer:** `5`
`0`
`He`

After reading "Hello" (5 characters), `tell()` returns 5. `seek(0)` moves back to position 0. `read(2)` reads the first 2 characters: "He".

### Q8. [Medium] What is the output?

```
with open("test.txt", "w") as f:
    f.write("Data\n")

with open("test.txt", "w") as f:
    f.write("New\n")

with open("test.txt", "r") as f:
    print(f.read())
```

*Hint:* Opening in "w" mode erases the file each time.

**Answer:** `New`

The first `"w"` writes "Data\n". The second `"w"` erases everything and writes "New\n". Only "New\n" remains. This demonstrates why `"w"` mode is destructive.

### Q9. [Medium] What is the output?

```
with open("test.txt", "w") as f:
    f.write("Line 1\nLine 2\nLine 3\n")

count = 0
with open("test.txt", "r") as f:
    for line in f:
        count += 1

print(count)
```

*Hint:* Iterating over a file object yields one line per iteration.

**Answer:** `3`

The file has 3 lines. Iterating over the file object yields each line one at a time. The counter increments 3 times.

### Q10. [Medium] What is the output?

```
with open("test.txt", "w") as f:
    f.write("ABCDEFGHIJ")

with open("test.txt", "r") as f:
    f.read(5)
    pos = f.tell()
    f.seek(2)
    char = f.read(1)
    print(pos)
    print(char)
```

*Hint:* read(5) moves the pointer to position 5. seek(2) moves to position 2.

**Answer:** `5`
`C`

After `read(5)`, the pointer is at position 5. `tell()` returns 5. `seek(2)` moves to position 2 (0-indexed: A=0, B=1, C=2). `read(1)` reads "C".

### Q11. [Medium] What is the output?

```
lines = ["apple", "banana", "cherry"]
with open("test.txt", "w") as f:
    f.writelines(lines)

with open("test.txt", "r") as f:
    print(f.read())
```

*Hint:* writelines() does not add newlines or separators between strings.

**Answer:** `applebananacherry`

`writelines()` writes each string exactly as given, without adding any separator or newline. The three strings are concatenated: "applebananacherry".

### Q12. [Hard] What is the output?

```
with open("test.txt", "w") as f:
    f.write("Hello")

with open("test.txt", "r") as f:
    data1 = f.read()
    data2 = f.read()
    print(repr(data1))
    print(repr(data2))
```

*Hint:* After the first read() consumes everything, the pointer is at EOF.

**Answer:** `'Hello'`
`''`

The first `read()` returns the entire content "Hello" and moves the pointer to the end. The second `read()` has nothing left to read, so it returns an empty string `''`.

### Q13. [Hard] What is the output?

```
with open("test.txt", "w") as f:
    f.write("A\nB\nC")

with open("test.txt", "r") as f:
    lines = f.readlines()
    print(len(lines))
    print(repr(lines[-1]))
```

*Hint:* The last line does not have a trailing newline.

**Answer:** `3`
`'C'`

The content is "A\nB\nC". `readlines()` splits on newlines: `['A\n', 'B\n', 'C']`. There are 3 lines. The last line `'C'` has no trailing newline because the file does not end with one.

### Q14. [Hard] What is the output?

```
with open("test.txt", "w") as f:
    f.write("Python\n")

with open("test.txt", "r+") as f:
    content = f.read()
    print(repr(content))
    f.write("Java\n")

with open("test.txt", "r") as f:
    print(f.read())
```

*Hint:* r+ opens for reading and writing. After read(), the pointer is at the end.

**Answer:** `'Python\n'`
`Python`
`Java`

In `"r+"` mode, `read()` reads "Python\n" and moves the pointer to the end. `write("Java\n")` writes at the current position (end), appending "Java\n". The final read shows both lines.

### Q15. [Hard] What is the output?

```
import os

with open("test.txt", "w") as f:
    f.write("Hello")

print(os.path.exists("test.txt"))
print(os.path.getsize("test.txt"))

with open("test.txt", "w") as f:
    pass  # Write nothing

print(os.path.exists("test.txt"))
print(os.path.getsize("test.txt"))
```

*Hint:* Opening in "w" mode truncates the file to zero bytes, even if you write nothing.

**Answer:** `True`
`5`
`True`
`0`

After writing "Hello", the file exists (True) and is 5 bytes. Opening in `"w"` mode with no writes still truncates the file. It still exists (True) but is now 0 bytes.

### Q16. [Hard] What is the output?

```
with open("test.txt", "w") as f:
    f.write("ABCDE\n12345\n")

with open("test.txt", "r") as f:
    line = f.readline()
    f.seek(0)
    chars = f.read(3)
    rest = f.readline()
    print(repr(line))
    print(repr(chars))
    print(repr(rest))
```

*Hint:* seek(0) resets to the beginning. readline() reads from the current position to the next newline.

**Answer:** `'ABCDE\n'`
`'ABC'`
`'DE\n'`

`readline()` reads "ABCDE\n". `seek(0)` rewinds. `read(3)` reads "ABC" (pointer now at position 3). `readline()` reads from position 3 to the next newline: "DE\n".

### Q17. [Medium] Explain the difference between `"w"` and `"a"` file modes. When would you use each?

*Hint:* Think about what happens to existing content in the file.

**Answer:** `"w"` (write) mode erases all existing content immediately upon opening the file and starts fresh. Use it when you want to replace the entire file. `"a"` (append) mode preserves existing content and adds new data at the end. Use it when you want to add to a file (like log entries) without losing what is already there.

The key distinction is destructive vs non-destructive. `"w"` is destructive -- it truncates the file to zero bytes before writing. `"a"` is non-destructive -- the file pointer starts at the end. Both modes create the file if it does not exist.

### Q18. [Easy] Why should you use the `with` statement instead of manually calling `open()` and `close()`?

*Hint:* Think about what happens if an error occurs between open() and close().

**Answer:** The `with` statement guarantees the file is closed when the block ends, even if an error occurs. Without `with`, if an exception is raised between `open()` and `close()`, the file is never closed, which can cause data loss and resource leaks.

The `with` statement implements the context manager protocol. It calls the file's `__exit__()` method automatically, which closes the file and flushes any buffered data. It is shorter, safer, and the accepted best practice.

## Mixed Questions

### Q1. [Easy] What is the output?

```
with open("test.txt", "w") as f:
    for i in range(3):
        f.write(str(i) + " ")

with open("test.txt", "r") as f:
    print(f.read())
```

*Hint:* The loop writes 0, 1, 2 with spaces.

**Answer:** `0 1 2 `

The loop writes `"0 "`, `"1 "`, `"2 "` consecutively. `read()` returns the entire content: `"0 1 2 "` (with a trailing space).

### Q2. [Easy] What is the output?

```
with open("test.txt", "w") as f:
    f.write("Hello\nWorld")

with open("test.txt", "r") as f:
    for line in f:
        print(line.upper().strip())
```

*Hint:* upper() converts to uppercase. strip() removes whitespace including newlines.

**Answer:** `HELLO`
`WORLD`

The file has two lines: "Hello\n" and "World". Iterating yields each line. `upper()` converts to uppercase, `strip()` removes the trailing newline.

### Q3. [Medium] What is the output?

```
data = {"name": "Aarav", "age": 16}

with open("test.txt", "w") as f:
    for key, value in data.items():
        f.write(f"{key}={value}\n")

result = {}
with open("test.txt", "r") as f:
    for line in f:
        key, value = line.strip().split("=")
        result[key] = value

print(result)
print(type(result["age"]))
```

*Hint:* When reading from a file, all values are strings, not their original types.

**Answer:** `{'name': 'Aarav', 'age': '16'}`
``

Data is written as strings: "name=Aarav\n" and "age=16\n". When read back, splitting by "=" gives string keys and values. The age is the string "16", not the integer 16. File I/O always deals with strings.

### Q4. [Medium] What is the output?

```
with open("test.txt", "w") as f:
    numbers = [10, 20, 30, 40, 50]
    f.write(",".join(str(n) for n in numbers))

with open("test.txt", "r") as f:
    content = f.read()
    values = content.split(",")
    total = sum(int(v) for v in values)
    print(values)
    print(total)
```

*Hint:* join() creates a comma-separated string. split() breaks it back apart.

**Answer:** `['10', '20', '30', '40', '50']`
`150`

`join()` creates "10,20,30,40,50". `split(",")` produces a list of strings. Converting each to int and summing gives 150.

### Q5. [Medium] What is the output?

```
with open("test.txt", "w") as f:
    f.write("one\ntwo\nthree\nfour\nfive\n")

with open("test.txt", "r") as f:
    lines = f.readlines()
    print(lines[1].strip())
    print(lines[-1].strip())
    print(len(lines))
```

*Hint:* readlines() returns a list where index 0 is the first line.

**Answer:** `two`
`five`
`5`

`readlines()` returns `['one\n', 'two\n', 'three\n', 'four\n', 'five\n']`. Index 1 is 'two\n' (stripped: 'two'). Index -1 is 'five\n' (stripped: 'five'). Length is 5.

### Q6. [Medium] What is the output?

```
with open("test.txt", "w") as f:
    f.write("Python is great\n")
    f.write("Python is popular\n")
    f.write("Java is also good\n")

count = 0
with open("test.txt", "r") as f:
    for line in f:
        if "Python" in line:
            count += 1

print(count)
```

*Hint:* The 'in' operator checks if a substring exists in a string.

**Answer:** `2`

Three lines are written. "Python" appears in lines 1 and 2 but not in line 3. The counter reaches 2.

### Q7. [Hard] What is the output?

```
with open("test.txt", "w") as f:
    f.write("Aarav,92\nPriya,97\nRohan,78\n")

with open("test.txt", "r") as f:
    students = []
    for line in f:
        name, marks = line.strip().split(",")
        students.append((name, int(marks)))

students.sort(key=lambda x: x[1], reverse=True)
for name, marks in students:
    print(f"{name}: {marks}")
```

*Hint:* The data is read, parsed, and sorted by marks in descending order.

**Answer:** `Priya: 97`
`Aarav: 92`
`Rohan: 78`

CSV data is parsed into tuples: ("Aarav", 92), ("Priya", 97), ("Rohan", 78). Sorting by marks in descending order gives Priya first (97), then Aarav (92), then Rohan (78).

### Q8. [Hard] What is the output?

```
with open("test.txt", "w") as f:
    f.write("abc\ndef\nghi\n")

with open("test.txt", "r") as f:
    content = f.read()
    words = content.strip().split("\n")
    result = "-".join(word.upper() for word in words)
    print(result)
```

*Hint:* strip() removes trailing whitespace, split by newline gives a list of lines, join with hyphen.

**Answer:** `ABC-DEF-GHI`

`read()` gives "abc\ndef\nghi\n". `strip()` removes trailing newline: "abc\ndef\nghi". `split("\n")` gives ["abc", "def", "ghi"]. Each is uppercased and joined with "-".

### Q9. [Hard] What is the output?

```
with open("test.txt", "w") as f:
    for i in range(5):
        f.write(f"{i * i}\n")

with open("test.txt", "r") as f:
    lines = [int(line.strip()) for line in f]
    print(lines)
    print(sum(lines))
```

*Hint:* The loop writes squares: 0, 1, 4, 9, 16.

**Answer:** `[0, 1, 4, 9, 16]`
`30`

The loop writes i*i for i in 0..4: 0, 1, 4, 9, 16. Reading back, each line is converted to int via list comprehension. The sum is 0+1+4+9+16 = 30.

### Q10. [Hard] What is the output?

```
def count_words(filename):
    with open(filename, "r") as f:
        total = 0
        for line in f:
            total += len(line.split())
    return total

with open("test.txt", "w") as f:
    f.write("hello world\n")
    f.write("python is great\n")
    f.write("file handling\n")

print(count_words("test.txt"))
```

*Hint:* split() splits by whitespace. Count the words in each line.

**Answer:** `7`

Line 1: "hello world" = 2 words. Line 2: "python is great" = 3 words. Line 3: "file handling" = 2 words. Total: 2 + 3 + 2 = 7.

### Q11. [Medium] What is the difference between `read()`, `readline()`, and `readlines()`?

*Hint:* Think about what each returns and how much of the file it reads.

**Answer:** `read()` returns the entire file as a single string. `readline()` returns one line (up to and including the next newline character) and advances the pointer. `readlines()` returns a list of all lines, each as a separate string. For large files, iterating over the file object (for line in f) is more memory-efficient than any of these.

Choose based on your needs: `read()` for small files when you need the full content, `readline()` when processing one line at a time with precise control, `readlines()` when you need random access to specific line numbers. For large files, direct iteration is preferred.

## Multiple Choice Questions

### Q1. [Easy] What is the default mode when opening a file with open()?

A. "w" (write)
B. "a" (append)
C. "r" (read)
D. "r+" (read and write)

**Answer:** C

**C is correct.** If no mode is specified, `open()` defaults to `"r"` (read-only text mode). This is the safest default since it cannot accidentally modify the file.

### Q2. [Easy] Which mode creates a new file if it does not exist and erases content if it does?

A. "r"
B. "w"
C. "a"
D. "r+"

**Answer:** B

**B is correct.** `"w"` mode creates the file if missing and **truncates** (erases) it if it exists. This is the most destructive mode. Option A raises FileNotFoundError if the file is missing. Option C appends without erasing. Option D requires the file to exist.

### Q3. [Easy] What does the with statement guarantee when used with files?

A. The file will be created if it does not exist
B. The file will be read faster
C. The file will be closed automatically when the block ends
D. The file will be encrypted

**Answer:** C

**C is correct.** The `with` statement ensures the file is closed when the block ends, even if an exception occurs. It does not affect file creation (that depends on the mode) or read speed.

### Q4. [Easy] What does write() return?

A. None
B. True if successful, False otherwise
C. The number of characters written
D. The file object

**Answer:** C

**C is correct.** `write()` returns an integer representing the number of characters written. For example, `f.write("Hello")` returns 5.

### Q5. [Easy] What happens if you try to open a file in "r" mode that does not exist?

A. An empty file is created
B. The file object is None
C. FileNotFoundError is raised
D. The program silently continues

**Answer:** C

**C is correct.** Read mode (`"r"`) requires the file to exist. If it does not, Python raises `FileNotFoundError`. Only `"w"`, `"a"`, `"w+"`, and `"a+"` create files automatically.

### Q6. [Medium] What does readlines() return?

A. A single string with all content
B. A list of strings, one per line (including \n)
C. A list of strings with \n removed
D. A generator that yields lines

**Answer:** B

**B is correct.** `readlines()` returns a list where each element is a line from the file, **including** the trailing newline character. You need to call `strip()` on each line to remove newlines. Option C is wrong because newlines are preserved.

### Q7. [Medium] What does writelines() do that is different from write()?

A. It adds newlines between strings automatically
B. It writes a list of strings to the file without adding newlines
C. It writes binary data instead of text
D. It writes each string on a separate line

**Answer:** B

**B is correct.** `writelines()` accepts an iterable of strings and writes each one as-is. It does **not** add newlines, separators, or any characters between the strings. Option A is a common misconception.

### Q8. [Medium] What does tell() return?

A. The total number of lines in the file
B. The current position of the file pointer in bytes
C. The number of characters read so far
D. The file size in bytes

**Answer:** B

**B is correct.** `tell()` returns the current position of the file pointer as a byte offset from the beginning of the file. At the start, `tell()` returns 0. After reading 10 bytes, it returns 10.

### Q9. [Medium] What does seek(0) do?

A. Closes the file
B. Moves the file pointer to the beginning of the file
C. Deletes the first character
D. Reads the first character

**Answer:** B

**B is correct.** `seek(0)` moves the file pointer to byte position 0, which is the beginning of the file. This allows you to read the file again from the start without reopening it.

### Q10. [Medium] Which is the most memory-efficient way to read a large file line by line?

A. f.read().split('\n')
B. f.readlines()
C. for line in f:
D. f.readline() in a while loop

**Answer:** C

**C is correct.** Iterating directly over the file object (`for line in f`) reads one line at a time without loading the entire file into memory. Options A and B load the entire file into memory. Option D also reads line by line but is less Pythonic.

### Q11. [Medium] What is the difference between "a" and "a+" mode?

A. "a" can only append, "a+" can also read
B. "a+" appends faster than "a"
C. "a" creates the file, "a+" does not
D. There is no difference

**Answer:** A

**A is correct.** `"a"` opens for appending only (cannot read). `"a+"` opens for both appending and reading. Both modes create the file if it does not exist and both preserve existing content.

### Q12. [Hard] What happens if you open a file in "w" mode and close it without writing anything?

A. Nothing happens, the file stays the same
B. The file is deleted
C. The file is emptied (truncated to 0 bytes)
D. A PermissionError is raised

**Answer:** C

**C is correct.** Opening in `"w"` mode **immediately truncates** the file to 0 bytes, regardless of whether you write anything. The file exists but is empty. This is why `"w"` is considered dangerous.

### Q13. [Hard] What does os.path.join("data", "files", "report.txt") do?

A. Creates the directories and file
B. Joins the strings with the OS-appropriate path separator
C. Opens the file at that path
D. Checks if the path exists

**Answer:** B

**B is correct.** `os.path.join()` combines path components using the correct separator for the operating system (/ on Linux/Mac, \\ on Windows). It does not create directories, open files, or check existence.

### Q14. [Hard] When reading a text file, readline() returns an empty string. What does this indicate?

A. The line is blank
B. The file pointer is at the end of the file (EOF)
C. The file is corrupted
D. There was a read error

**Answer:** B

**B is correct.** An empty string `""` from `readline()` means the end of file (EOF) has been reached. A blank line would return `"\n"` (just the newline character), not an empty string.

### Q15. [Hard] What is the difference between a blank line and EOF when using readline()?

A. There is no difference
B. A blank line returns "\n", EOF returns ""
C. A blank line returns "", EOF returns "\n"
D. A blank line returns None, EOF returns ""

**Answer:** B

**B is correct.** A blank line in a file is represented as `"\n"` (just a newline). The end of file returns an empty string `""`. This distinction is critical for writing correct file-reading loops.

### Q16. [Hard] Which mode should you use to read a JPEG image file?

A. "r"
B. "rb"
C. "r+"
D. "w"

**Answer:** B

**B is correct.** JPEG files are binary files, not text. You must use `"rb"` (read binary) mode. Using `"r"` (text mode) can corrupt binary data because Python may try to decode bytes as text and translate newline characters.

### Q17. [Easy] Does write() automatically add a newline at the end?

A. Yes, always
B. No, never
C. Only in "w" mode
D. Only for the last write() call

**Answer:** B

**B is correct.** `write()` writes exactly the string you provide, with no additions. You must explicitly include `"\n"` if you want a newline.

### Q18. [Medium] What is a context manager in Python?

A. A function that manages global variables
B. An object that defines __enter__ and __exit__ methods for use with the with statement
C. A class that manages file permissions
D. A module for handling errors

**Answer:** B

**B is correct.** A context manager is any object that implements the `__enter__()` and `__exit__()` methods. The `with` statement calls these automatically. File objects are context managers that close the file in `__exit__()`.

## Coding Challenges

### Challenge 1. Word Counter

**Difficulty:** Easy

Write a program that creates a file with 5 lines of text, then reads it and prints: (a) total number of lines, (b) total number of words, (c) total number of characters (excluding newlines).

**Constraints:**

- Use the with statement for all file operations.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Lines: 5
Words: 15
Characters: 75
```

**Solution:**

```python
# Create the file
with open("sample.txt", "w") as f:
    f.write("Python is amazing\n")
    f.write("File handling is useful\n")
    f.write("Practice makes perfect\n")
    f.write("Keep coding daily\n")
    f.write("Learn something new\n")

# Count lines, words, characters
lines = 0
words = 0
chars = 0

with open("sample.txt", "r") as f:
    for line in f:
        lines += 1
        words += len(line.split())
        chars += len(line.strip())

print(f"Lines: {lines}")
print(f"Words: {words}")
print(f"Characters: {chars}")
```

### Challenge 2. Student Marks Analyzer

**Difficulty:** Easy

Write a program that writes student data (name, marks) to a CSV file, then reads it back and prints the student with the highest marks and the class average.

**Constraints:**

- Use CSV format (comma-separated). Parse marks as integers.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Topper: Priya with 97 marks
Class average: 84.4
```

**Solution:**

```python
# Write student data
students = [("Aarav", 92), ("Priya", 97), ("Rohan", 78), ("Meera", 85), ("Vikram", 70)]

with open("marks.csv", "w") as f:
    f.write("Name,Marks\n")
    for name, marks in students:
        f.write(f"{name},{marks}\n")

# Read and analyze
topper_name = ""
topper_marks = 0
total = 0
count = 0

with open("marks.csv", "r") as f:
    f.readline()  # Skip header
    for line in f:
        name, marks = line.strip().split(",")
        marks = int(marks)
        total += marks
        count += 1
        if marks > topper_marks:
            topper_marks = marks
            topper_name = name

print(f"Topper: {topper_name} with {topper_marks} marks")
print(f"Class average: {total / count}")
```

### Challenge 3. Log File Appender

**Difficulty:** Easy

Write a function log_message(filename, message) that appends a timestamped message to a log file. Each entry should have a line number. Call it 5 times, then read and display the log.

**Constraints:**

- Use append mode. Number each line.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
[1] System started
[2] Loading data
[3] Processing records
[4] Saving results
[5] System shutdown
```

**Solution:**

```python
def log_message(filename, message):
    # Count existing lines
    try:
        with open(filename, "r") as f:
            count = sum(1 for _ in f)
    except FileNotFoundError:
        count = 0
    
    with open(filename, "a") as f:
        f.write(f"[{count + 1}] {message}\n")

# Clear and write fresh log
with open("app.log", "w") as f:
    pass  # Clear the file

log_message("app.log", "System started")
log_message("app.log", "Loading data")
log_message("app.log", "Processing records")
log_message("app.log", "Saving results")
log_message("app.log", "System shutdown")

# Display log
with open("app.log", "r") as f:
    print(f.read().strip())
```

### Challenge 4. Find and Replace in File

**Difficulty:** Medium

Write a function find_replace(filename, old_text, new_text) that reads a file, replaces all occurrences of old_text with new_text, and writes the result back to the same file. Test by replacing "Python" with "Python3" in a test file.

**Constraints:**

- Read the entire file, perform replacement, then write back. Return the number of replacements.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Before: Python is great. Python is popular.
After: Python3 is great. Python3 is popular.
Replacements made: 2
```

**Solution:**

```python
def find_replace(filename, old_text, new_text):
    with open(filename, "r") as f:
        content = f.read()
    
    count = content.count(old_text)
    new_content = content.replace(old_text, new_text)
    
    with open(filename, "w") as f:
        f.write(new_content)
    
    return count

# Create test file
with open("test.txt", "w") as f:
    f.write("Python is great. Python is popular.\n")

with open("test.txt", "r") as f:
    print(f"Before: {f.read().strip()}")

count = find_replace("test.txt", "Python", "Python3")

with open("test.txt", "r") as f:
    print(f"After: {f.read().strip()}")
print(f"Replacements made: {count}")
```

### Challenge 5. File Merger

**Difficulty:** Medium

Write a function merge_files(file_list, output_file) that reads content from multiple files and writes it all into one output file, with a separator line between each file's content. Test with 3 small files.

**Constraints:**

- Handle files that may not exist (skip them with a warning). Use a clear separator.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
--- part1.txt ---
Hello from file 1
--- part2.txt ---
Hello from file 2
--- part3.txt ---
Hello from file 3
```

**Solution:**

```python
import os

def merge_files(file_list, output_file):
    with open(output_file, "w") as out:
        for filename in file_list:
            if not os.path.exists(filename):
                print(f"Warning: {filename} not found, skipping.")
                continue
            out.write(f"--- {filename} ---\n")
            with open(filename, "r") as f:
                out.write(f.read())
            if not out.tell():  # ensure newline between files
                out.write("\n")

# Create test files
for i in range(1, 4):
    with open(f"part{i}.txt", "w") as f:
        f.write(f"Hello from file {i}\n")

merge_files(["part1.txt", "part2.txt", "part3.txt"], "merged.txt")

with open("merged.txt", "r") as f:
    print(f.read().strip())
```

### Challenge 6. Line Number Adder

**Difficulty:** Medium

Write a function add_line_numbers(input_file, output_file) that reads a file and writes a new file with line numbers prefixed to each line (e.g., '1: content'). Also print the total number of lines processed.

**Constraints:**

- Line numbers should start at 1. Use proper formatting.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
1: Python is versatile
2: It supports file handling
3: Practice daily
Total lines: 3
```

**Solution:**

```python
def add_line_numbers(input_file, output_file):
    count = 0
    with open(input_file, "r") as src:
        with open(output_file, "w") as dst:
            for num, line in enumerate(src, 1):
                dst.write(f"{num}: {line}")
                count = num
    return count

# Create test file
with open("input.txt", "w") as f:
    f.write("Python is versatile\n")
    f.write("It supports file handling\n")
    f.write("Practice daily\n")

total = add_line_numbers("input.txt", "numbered.txt")

with open("numbered.txt", "r") as f:
    print(f.read().strip())
print(f"Total lines: {total}")
```

### Challenge 7. Frequency Counter from File

**Difficulty:** Hard

Write a function word_frequency(filename) that reads a file and returns a dictionary mapping each word (lowercase) to its frequency. Print the top 5 most frequent words. Ignore punctuation.

**Constraints:**

- Convert to lowercase. Remove common punctuation (.,!?;:). Sort by frequency descending.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Top 5 words:
  the: 4
  is: 3
  python: 2
  and: 2
  for: 2
```

**Solution:**

```python
def word_frequency(filename):
    freq = {}
    with open(filename, "r") as f:
        for line in f:
            # Remove punctuation and lowercase
            for char in ".,!?;:":
                line = line.replace(char, "")
            for word in line.lower().split():
                freq[word] = freq.get(word, 0) + 1
    return freq

# Create test file
with open("article.txt", "w") as f:
    f.write("The Python language is great. Python is used for the web.\n")
    f.write("The community is strong and the resources are vast.\n")
    f.write("Learning Python and practicing is essential for growth.\n")

freq = word_frequency("article.txt")
sorted_words = sorted(freq.items(), key=lambda x: x[1], reverse=True)

print("Top 5 words:")
for word, count in sorted_words[:5]:
    print(f"  {word}: {count}")
```

### Challenge 8. Config File Parser

**Difficulty:** Hard

Write a function that reads a configuration file in 'key=value' format (ignoring blank lines and lines starting with #) and returns a dictionary. Then write a function that saves a dictionary back to the config format.

**Constraints:**

- Skip comment lines (starting with #) and blank lines. Strip whitespace from keys and values.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
{'host': 'localhost', 'port': '8080', 'debug': 'true', 'name': 'MyApp'}
Config saved successfully.
```

**Solution:**

```python
def read_config(filename):
    config = {}
    with open(filename, "r") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" in line:
                key, value = line.split("=", 1)
                config[key.strip()] = value.strip()
    return config

def write_config(filename, config):
    with open(filename, "w") as f:
        f.write("# Configuration File\n\n")
        for key, value in config.items():
            f.write(f"{key} = {value}\n")

# Create config file
with open("app.conf", "w") as f:
    f.write("# Server settings\n")
    f.write("host = localhost\n")
    f.write("port = 8080\n")
    f.write("\n")
    f.write("# App settings\n")
    f.write("debug = true\n")
    f.write("name = MyApp\n")

config = read_config("app.conf")
print(config)

config["port"] = "9090"
write_config("app_updated.conf", config)
print("Config saved successfully.")
```

---

*Notes: https://learn.modernagecoders.com/resources/python/file-handling-in-python/*
