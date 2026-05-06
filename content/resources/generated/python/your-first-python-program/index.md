---
title: "Your First Python Program - print() Function, Escape Characters, Comments | Modern Age Coders"
description: "Learn how to write your first Python program using the print() function. Master printing strings, numbers, escape characters, sep and end parameters, and Python comments with 60+ practice questions."
slug: your-first-python-program
canonical: https://learn.modernagecoders.com/resources/python/your-first-python-program/
category: "Python"
keywords: ["python hello world", "first python program", "python print function", "python print tutorial", "python escape characters", "python comments", "python print sep end", "python newline character", "python print multiple values"]
---
# Your First Python Program

**Difficulty:** Beginner  
**Reading time:** 18 min  
**Chapter:** 3  
**Practice questions:** 60

## What Is Your First Python Program?

Every programmer's journey begins with a simple task: making the computer display a message on the screen. In Python, you do this using the **print() function**. The `print()` function is the most basic and most frequently used tool in Python — it takes whatever you give it and displays it as text on the screen.

In this chapter, you will learn everything about the `print()` function: how to print text (strings), how to print numbers, how to print multiple items on one line, how to use special characters like newline and tab, and how to control the output format using the `sep` and `end` parameters. You will also learn about **comments** — notes that you write in your code for humans to read, which Python completely ignores.

### What You Will Learn

- How the `print()` function works
- Printing strings using single quotes and double quotes
- Printing numbers (integers and decimals)
- Printing multiple values with comma separation
- Escape characters: `\n`, `\t`, `\\`, `\"`, `\'`
- The `sep` parameter (custom separator between values)
- The `end` parameter (custom ending instead of newline)
- Comments: single-line (`#`) and multi-line (`''' '''`)
- Running complete programs from a file

## Why Is the print() Function So Important?

You might think that printing text on screen is too simple to be important. But the `print()` function is one of the most critical tools in a programmer's toolkit, and here is why:

### 1. It Is How Your Program Communicates

A program that does calculations but never shows the results is useless. The `print()` function is the primary way your program communicates its output to the user. Whether you are building a calculator, a quiz game, or a data analysis tool, you will use `print()` to display results, messages, and information.

### 2. It Is Your Best Debugging Tool

When your program is not working correctly, the first thing experienced programmers do is add `print()` statements to see what is happening at each step. For example, if a calculation gives the wrong result, you can print the value at each stage to find where it goes wrong. This technique is called **print debugging**, and you will use it throughout your programming career.

### 3. It Teaches Fundamental Concepts

Learning `print()` thoroughly introduces you to several important programming concepts:

- **Functions:** `print()` is a function — it has a name, takes arguments (inputs), and performs an action.
- **Strings:** Text inside quotes is called a string. You will work with strings in every program you ever write.
- **Parameters:** The `sep` and `end` parameters teach you how functions can have optional settings that change their behavior.
- **Escape sequences:** Special character combinations like `\n` introduce the concept of encoding special characters.

### 4. Every Program You Write Will Use It

From your very first program to advanced projects, `print()` is always there. Even professional developers with decades of experience use `print()` daily. Mastering it now means you have a solid foundation for everything that follows.

## Detailed Explanation

### The print() Function

The `print()` function displays output on the screen (technically, it writes to the **standard output**, which is usually your terminal or console). The basic syntax is:

```
print(value)
```

You can pass one or more values to `print()`, and it will display them. After printing, it automatically moves to the next line (unless you change this behavior with the `end` parameter).

### Printing Strings (Text)

A **string** is a sequence of characters (letters, numbers, symbols, spaces) enclosed in quotes. In Python, you can use either **single quotes** (`'...'`) or **double quotes** (`"..."`) — both work exactly the same way.

```
print("Hello, World!")    # Using double quotes
print('Hello, World!')    # Using single quotes — same output
```

Both produce the exact same output: `Hello, World!`

#### When to Use Single vs Double Quotes

Since both work the same, when should you use which? The answer is: use whichever makes your string easier to read.

- If your string contains a **single quote (apostrophe)**, use double quotes on the outside: `print("It's a great day")`
- If your string contains **double quotes**, use single quotes on the outside: `print('She said "Hello"')`
- If your string contains neither, use whichever you prefer (most Python developers prefer double quotes)

### Printing Numbers

You can print numbers directly without any quotes:

```
print(42)       # Prints an integer
print(3.14)     # Prints a decimal number
print(2 + 3)    # Prints the result: 5
print(10 * 7)   # Prints the result: 70
```

**Important difference:** `print(42)` prints the number 42, while `print("42")` prints the text "42". They look the same on screen, but Python treats them differently internally. The first is a **number** (you can do math with it), and the second is a **string** (it is just text).

### Printing Multiple Values

You can print multiple values in a single `print()` call by separating them with commas:

```
print("My name is", "Aarav")
print("I am", 14, "years old")
print("Score:", 95, "out of", 100)
```

When you separate values with commas, Python automatically adds a **space** between them in the output.

Output:

```
My name is Aarav
I am 14 years old
Score: 95 out of 100
```

### Escape Characters

Sometimes you need to include special characters in a string that you cannot type directly. Python uses the **backslash** (`\`) as an **escape character** — it tells Python that the character after the backslash has a special meaning.

#### Common Escape Characters

Escape SequenceMeaningExample`\n`New line (moves to next line)`print("Hello\nWorld")` prints Hello and World on separate lines`\t`Tab (adds horizontal space)`print("Name:\tAarav")` adds a tab between Name: and Aarav`\\`A literal backslash`print("C:\\Users\\Aarav")` prints C:\Users\Aarav`\"`A double quote inside a double-quoted string`print("She said \"Hi\"")` prints She said "Hi"`\'`A single quote inside a single-quoted string`print('It\'s great')` prints It's great

#### Why Do We Need Escape Characters?

Consider this problem: you want to print `She said "Hello"`. If you write `print("She said "Hello"")`, Python gets confused because it sees the second `"` and thinks the string has ended. The escape character `\"` tells Python: "This is not the end of the string — this is a literal double quote character that I want to print."

### The sep Parameter

When you print multiple values, Python puts a **space** between them by default. The `sep` (separator) parameter lets you change what goes between the values:

```
print("Aarav", "Sharma", sep="-")        # Output: Aarav-Sharma
print("10", "04", "2026", sep="/")       # Output: 10/04/2026
print("A", "B", "C", sep=" -> ")         # Output: A -> B -> C
print("Hello", "World", sep="")           # Output: HelloWorld (no space)
print("one", "two", "three", sep="\n")   # Prints each on a new line
```

### The end Parameter

By default, every `print()` call ends with a **newline character** — this is why each `print()` starts its output on a new line. The `end` parameter lets you change what comes at the end:

```
# Default behavior (end="\n"):
print("Hello")
print("World")
# Output:
# Hello
# World

# Custom end:
print("Hello", end=" ")
print("World")
# Output: Hello World (both on same line with a space between)
```

The `end` parameter is useful when you want to print multiple things on the same line using separate `print()` calls.

### Comments in Python

Comments are notes written inside your code that Python **completely ignores**. They exist only for humans — to explain what the code does, why a certain approach was chosen, or to temporarily disable a line of code.

#### Single-Line Comments (#)

Use the hash symbol (`#`) to write a comment. Everything after `#` on that line is ignored by Python:

```
# This is a comment — Python ignores this line
print("Hello")  # This is an inline comment

# The next line calculates the sum
print(5 + 3)     # Result: 8
```

#### Multi-Line Comments (Triple Quotes)

For longer comments that span multiple lines, you can use triple quotes (`'''...'''` or `"""..."""`):

```
'''
This is a multi-line comment.
It can span as many lines as you need.
Python treats this as a string but since
it is not assigned to any variable, it is ignored.
'''
print("Hello, World!")
```

Technically, triple-quoted strings are not "true" comments — they are strings that are not assigned to anything, so Python evaluates them but discards the result. However, they are commonly used as multi-line comments by Python developers.

#### Why Write Comments?

- **For yourself:** When you come back to your code after a month, comments remind you what each part does.
- **For others:** If someone else reads your code, comments help them understand your logic.
- **For debugging:** You can "comment out" a line of code (add # before it) to temporarily disable it without deleting it.

### Running Programs from a File

In the previous chapter, you learned how to create and run `.py` files. Here is the complete workflow again:

1. Open your code editor (IDLE, VS Code, etc.).
2. Write your program — for example, multiple `print()` statements.
3. Save the file with a `.py` extension (e.g., `greetings.py`).
4. Run the file (F5 in IDLE, or `python greetings.py` in the terminal).

When you run a file, Python executes all the lines from top to bottom, one at a time. If there is an error on any line, execution stops at that line and shows an error message.

## Code Examples

### Hello World - Your Very First Program

```python
print("Hello, World!")
```

This is the classic first program that every programmer writes. The `print()` function takes the string `"Hello, World!"` and displays it on the screen. The string must be enclosed in quotes (single or double).

**Output:**

```
Hello, World!
```

### Single Quotes vs Double Quotes

```python
print("Hello, World!")      # Double quotes
print('Hello, World!')      # Single quotes - same result

# Use double quotes when string has an apostrophe:
print("It's a beautiful day")

# Use single quotes when string has double quotes:
print('She said "Welcome" to everyone')
```

Python allows both single and double quotes for strings. They produce identical results. The practical rule is: if your string contains an apostrophe (single quote), wrap it in double quotes. If your string contains double quotes, wrap it in single quotes. This avoids the need for escape characters.

**Output:**

```
Hello, World!
Hello, World!
It's a beautiful day
She said "Welcome" to everyone
```

### Printing Numbers and Expressions

```python
print(42)           # An integer
print(3.14)         # A decimal (float)
print(7 + 8)        # Addition: 15
print(100 - 37)     # Subtraction: 63
print(6 * 9)        # Multiplication: 54
print(45 / 5)       # Division: 9.0 (always gives decimal)
print(2 ** 10)      # Power: 1024

# Number vs string:
print(50)           # This is a number
print("50")         # This is text (a string)
```

You can print numbers directly without quotes. Python evaluates mathematical expressions first and then prints the result. Notice that division (`/`) always produces a decimal result (9.0, not 9). Also notice the difference between `print(50)` (a number) and `print("50")` (a string) — they look the same in output but are different types internally.

**Output:**

```
42
3.14
15
63
54
9.0
1024
50
50
```

### Printing Multiple Values with Commas

```python
print("My name is", "Ananya")
print("I am", 13, "years old")
print("Marks in Maths:", 95, "out of", 100)
print("Sum of 5 and 3 is", 5 + 3)
print("Total students:", 30 + 15 + 20)
```

When you pass multiple values to `print()` separated by commas, Python prints them all on the same line with a **space** between each value. You can mix strings and numbers freely. Python evaluates expressions (like `5 + 3`) before printing.

**Output:**

```
My name is Ananya
I am 13 years old
Marks in Maths: 95 out of 100
Sum of 5 and 3 is 8
Total students: 65
```

### Escape Characters in Action

```python
# Newline: \n moves to next line
print("Line 1\nLine 2\nLine 3")
print()  # Empty line for spacing

# Tab: \t adds horizontal spacing
print("Name\tAge\tCity")
print("Rohit\t14\tMumbai")
print("Sneha\t13\tDelhi")
print()

# Backslash: \\ prints a single \
print("File path: C:\\Users\\Priya\\Documents")

# Quotes inside strings:
print("He said \"Python is fun\"")
print('It\'s a great language')
```

Escape characters start with a backslash (`\`). `\n` creates a new line, `\t` adds a tab (useful for aligning columns), `\\` prints a literal backslash, `\"` prints a double quote inside double-quoted strings, and `\'` prints a single quote inside single-quoted strings. An empty `print()` with no arguments just prints a blank line.

**Output:**

```
Line 1
Line 2
Line 3

Name	Age	City
Rohit	14	Mumbai
Sneha	13	Delhi

File path: C:\Users\Priya\Documents
He said "Python is fun"
It's a great language
```

### Using sep and end Parameters

```python
# sep changes the separator between values
print("Aarav", "Sharma", sep="-")
print(25, "04", 2026, sep="/")
print("A", "B", "C", "D", sep=" -> ")
print("Hello", "World", sep="***")
print()

# end changes what comes after the printed text
print("Loading", end="")
print(".", end="")
print(".", end="")
print(".")

print("Name:", end=" ")
print("Diya")

# Combining sep and end
print(1, 2, 3, sep=", ", end=" ...done!\n")
```

The `sep` parameter controls what appears between multiple values (default is a space). The `end` parameter controls what appears after all values are printed (default is `\n`, a newline). Setting `end=""` means the next `print()` continues on the same line. You can use both `sep` and `end` in the same `print()` call.

**Output:**

```
Aarav-Sharma
25/04/2026
A -> B -> C -> D
Hello***World

Loading...
Name: Diya
1, 2, 3 ...done!
```

### Comments: Single-Line and Multi-Line

```python
# This is a single-line comment
# Python ignores everything after the # symbol

print("Hello!")  # This is an inline comment

# You can use comments to temporarily disable code:
# print("This line will NOT run")
print("This line WILL run")

'''
This is a multi-line comment.
It uses triple single quotes.
Useful for longer explanations.
'''

"""
You can also use triple double quotes
for multi-line comments.
"""

print("Program complete!")
```

Single-line comments use `#`. Everything after `#` on that line is ignored. Inline comments come after code on the same line. Multi-line comments use triple quotes (`'''...'''` or `"""..."""`). Commenting out code (putting `#` before it) is a common debugging technique — it disables the line without deleting it.

**Output:**

```
Hello!
This line WILL run
Program complete!
```

### A Complete Program with Everything Combined

```python
# Student Report Card Generator
# Author: Riya Patel
# Date: April 2026

'''
This program prints a formatted report card
using print(), escape characters, and sep/end.
'''

print("========================================")
print("        STUDENT REPORT CARD")
print("========================================")
print()
print("Name:\tRiya Patel")
print("Class:\t9th Standard")
print("Roll No:\t42")
print()
print("Subject", "Marks", sep="\t\t")
print("-------", "-----", sep="\t\t")
print("Maths", "95", sep="\t\t")
print("Science", "88", sep="\t\t")
print("English", "92", sep="\t\t")
print("Hindi", "85", sep="\t\t")
print("Computer", "98", sep="\t\t")
print()
print("Total:", 95 + 88 + 92 + 85 + 98, "out of 500")
print("Result:", end=" ")
print("PASS")
print("========================================")
```

This complete program demonstrates all the concepts from this chapter working together: comments explain the program's purpose, `\t` creates aligned columns, `sep` controls spacing in the table, `end` keeps "Result:" and "PASS" on the same line, and mathematical expressions calculate the total marks automatically.

**Output:**

```
========================================
        STUDENT REPORT CARD
========================================

Name:	Riya Patel
Class:	9th Standard
Roll No:	42

Subject		Marks
-------		-----
Maths		95
Science		88
English		92
Hindi		85
Computer		98

Total: 458 out of 500
Result: PASS
========================================
```

## Common Mistakes

### Forgetting Parentheses in print()

**Wrong:**

```
print "Hello, World!"
```

SyntaxError: Missing parentheses in call to 'print'. Did you mean print(...)?

**Correct:**

```
print("Hello, World!")
```

In Python 3, `print` is a function and requires parentheses. The syntax `print "Hello"` was valid in Python 2 (where print was a statement) but causes a SyntaxError in Python 3. Always write `print(...)` with parentheses.

### Mismatched Quotes

**Wrong:**

```
print("Hello, World!')
print('Welcome to Python")
```

SyntaxError: EOL while scanning string literal

**Correct:**

```
print("Hello, World!")
print('Welcome to Python')
```

A string must start and end with the **same type of quote**. If you open with a double quote (`"`), you must close with a double quote. If you open with a single quote (`'`), you must close with a single quote. Mixing them confuses Python because it cannot find the matching closing quote.

### Forgetting Quotes Around Strings

**Wrong:**

```
print(Hello World)
```

SyntaxError: invalid syntax

**Correct:**

```
print("Hello World")
```

Text (strings) must always be enclosed in quotes. Without quotes, Python tries to interpret `Hello` and `World` as variable names. Since these variables do not exist, you get an error. Only numbers can be printed without quotes: `print(42)` works, but `print(Hello)` requires quotes.

### Using Wrong Escape Character Direction

**Wrong:**

```
print("Hello/nWorld")
print("Name/tAge")
```

No error, but output is wrong:
Hello/nWorld
Name/tAge

**Correct:**

```
print("Hello\nWorld")
print("Name\tAge")
```

Escape characters use a **backslash** (`\`), not a forward slash (`/`). `\n` is a newline, but `/n` is just the characters '/' and 'n' printed literally. This mistake does not cause an error — the program runs, but the output is not what you expected. Always use the backslash: `\n`, `\t`, `\\`.

### Incorrect sep and end Syntax

**Wrong:**

```
print("A", "B", sep = "-")    # Spaces around = (works but not recommended)
print("Hello" sep=",")          # Missing comma before sep
print("Hi", sep:"-")            # Using colon instead of equals
```

The second and third lines cause SyntaxError. The first line works but has unnecessary spaces.

**Correct:**

```
print("A", "B", sep="-")
print("Hello", "World", sep=",")
print("Hi", "Bye", sep="-")
```

The `sep` and `end` parameters must be written with `=` (not `:`), and they must come after the values you want to print, separated by a comma. Writing `sep = "-"` with spaces works but Python style (PEP 8) recommends no spaces around `=` in keyword arguments: `sep="-"`.

### Printing a Backslash Without Escaping

**Wrong:**

```
print("C:\new_folder\test")
```

No error, but output is unexpected:
C:
ew_folder	est
(\n becomes a newline and \t becomes a tab!)

**Correct:**

```
print("C:\\new_folder\\test")
# Or use a raw string:
print(r"C:\new_folder\test")
```

When Python sees `\n` inside a string, it interprets it as a newline character, and `\t` as a tab — even if you intended them as part of a file path. To print a literal backslash, use `\\` (double backslash). Alternatively, prefix the string with `r` to make it a "raw string" where backslashes are treated literally: `r"C:\new_folder\test"`.

## Summary

- The print() function displays output on the screen. It is the most commonly used function in Python.
- Strings (text) must be enclosed in quotes — either single quotes ('...') or double quotes ("..."). Both work identically.
- Numbers can be printed without quotes. Mathematical expressions inside print() are evaluated before printing.
- Multiple values can be printed in one print() call by separating them with commas. Python adds a space between each value by default.
- Escape characters use a backslash: \n (newline), \t (tab), \\ (literal backslash), \" (double quote), \' (single quote).
- The sep parameter changes the separator between multiple values (default is a space): print('A', 'B', sep='-') outputs A-B.
- The end parameter changes what comes after the output (default is a newline): print('Hello', end=' ') keeps the next print on the same line.
- Single-line comments use the # symbol. Everything after # on that line is ignored by Python.
- Multi-line comments use triple quotes (''' or """). They are useful for longer explanations at the top of a file or function.
- An empty print() with no arguments prints a blank line, useful for adding spacing in output.
- Comments are essential for code readability. Write comments to explain 'why', not just 'what' your code does.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/python/your-first-python-program/*
*Practice questions: https://learn.modernagecoders.com/resources/python/your-first-python-program/practice/*
