---
title: "Practice: Your First Python Program"
description: "60 practice problems for Your First Python Program in Python"
slug: your-first-python-program-practice
canonical: https://learn.modernagecoders.com/resources/python/your-first-python-program/practice/
category: "Python"
---
# Practice: Your First Python Program

**Total questions:** 60

## Topic-Specific Questions

### Q1. [Easy] Write a Python program that prints: Hello, I am learning Python!

*Hint:* Use the print() function with the message inside quotes.

**Answer:** ```
print("Hello, I am learning Python!")
```

The print() function takes a string (text in quotes) and displays it on screen. You can use either single or double quotes around the text.

### Q2. [Easy] Write a Python program that prints the number 2026 (without quotes).

*Hint:* Numbers do not need quotes inside print().

**Answer:** ```
print(2026)
```

When printing a number, you do not put quotes around it. print(2026) prints the integer 2026. If you wrote print("2026"), it would print the same output visually, but Python would treat it as text (a string) rather than a number.

### Q3. [Easy] What is the difference between print(100) and print("100")?

*Hint:* One is a number and the other is text.

**Answer:** `print(100)` prints the **integer** 100. `print("100")` prints the **string** "100". The output looks the same on screen, but Python treats them differently — 100 is a number (you can do math with it) and "100" is text (a sequence of characters).

This distinction matters when you start doing calculations. print(100 + 50) gives 150 (math addition), but print("100" + "50") gives "10050" (string concatenation — joining text). Understanding the difference between numbers and strings is fundamental.

### Q4. [Easy] What is the output of the following code?
print("Python")
print("is")
print("fun")

*Hint:* Each print() statement outputs on a new line by default.

**Answer:** Output:

```
Python
is
fun
```

Each print() statement outputs its text and then moves to the next line (because the default value of end is '\n', a newline character). So the three words appear on three separate lines.

### Q5. [Easy] What is the output of: print("My age is", 14)

*Hint:* When you separate values with commas, Python adds a space between them.

**Answer:** Output: `My age is 14`

When multiple values are passed to print() separated by commas, Python prints each value with a space between them. The string "My age is" is printed, followed by a space, followed by the number 14.

### Q6. [Easy] What does the escape character \n do inside a string?

*Hint:* The 'n' stands for 'new line'.

**Answer:** `\n` is the **newline** escape character. It moves the output to the next line.

When Python encounters \n inside a string, it does not print the characters \ and n. Instead, it starts a new line at that point. For example, print("Hello\nWorld") prints Hello on one line and World on the next line.

### Q7. [Medium] What is the output of: print("Hello\tWorld\nGoodbye\tWorld")

*Hint:* \t adds a tab space, \n moves to next line.

**Answer:** Output:

```
Hello	World
Goodbye	World
```

The \t escape character inserts a horizontal tab (several spaces) between Hello and World. Then \n starts a new line. On the new line, Goodbye and World are also separated by a tab. Tabs are useful for creating aligned columns in text output.

### Q8. [Medium] What is the output of: print("A", "B", "C", sep="-")

*Hint:* The sep parameter replaces the default space between values.

**Answer:** Output: `A-B-C`

The sep parameter changes the separator between multiple values. By default, sep is a space (" "), so values are separated by spaces. Here, sep="-" replaces the space with a hyphen, so A, B, and C are printed with hyphens between them.

### Q9. [Medium] What is the output of the following code?
print("Hello", end=" ")
print("World", end="!")
print()

*Hint:* The end parameter controls what comes after the printed text instead of a newline.

**Answer:** Output: `Hello World!`

The first print() outputs "Hello" followed by a space (instead of the default newline). The second print() continues on the same line, outputting "World" followed by "!". The third print() with no arguments outputs just a newline, ending the line. So everything appears on one line: Hello World!

### Q10. [Medium] Write a Python program that prints a file path: C:\Users\Sneha\Documents using proper escape characters.

*Hint:* You need to use \\ to print a single backslash.

**Answer:** ```
print("C:\\Users\\Sneha\\Documents")
```

Since the backslash (\) is an escape character in Python, you need to use a double backslash (\\) to print a single backslash. Each \\ in the code produces one \ in the output. Alternatively, you can use a raw string: print(r"C:\Users\Sneha\Documents").

### Q11. [Medium] What is the difference between # comments and ''' ''' (triple-quote) comments?

*Hint:* One is for single lines, the other can span multiple lines.

**Answer:** `#` creates a **single-line comment** — everything after # on that line is ignored. `''' '''` (triple quotes) create **multi-line comments** that can span multiple lines. Technically, triple-quoted strings are not true comments but strings that are not assigned to any variable, so they are discarded.

Use # for short comments and notes. Use triple quotes when you need to write a longer explanation that spans several lines, such as describing what an entire program or function does. In professional code, triple-quoted strings are more commonly used as 'docstrings' (documentation strings) inside functions and classes.

### Q12. [Medium] What is the output of: print(10, 20, 30, sep=", ", end=".\n")

*Hint:* sep controls what goes between values, end controls what comes at the very end.

**Answer:** Output: `10, 20, 30.`

The sep=", " puts a comma and space between each number. The end=".\n" puts a period followed by a newline at the end. So the output is: 10, 20, 30. (with a period at the end and then a newline to move to the next line).

### Q13. [Hard] What is the output of the following code?
print("She said", end=" ")
print("\"Hello\"")
print('It\'s', end=" ")
print("a sunny day")

*Hint:* \" prints a literal double quote, \' prints a literal single quote.

**Answer:** Output:

```
She said "Hello"
It's a sunny day
```

Line 1 prints "She said" followed by a space (no newline because end=" "). Line 2 prints "Hello" with literal double quotes around it (\" produces a double quote character). Line 3 prints "It's" followed by a space. Line 4 prints "a sunny day". Lines 1-2 form one output line, and lines 3-4 form another.

### Q14. [Hard] What is the output of:
print("1", "2", "3", sep="\n")
print()
print("A", "B", "C", sep="\t")

*Hint:* sep="\n" means a newline is used as the separator between values.

**Answer:** Output:

```
1
2
3

A	B	C
```

In the first print(), sep="\n" means each value is separated by a newline, so 1, 2, and 3 appear on separate lines. The empty print() adds a blank line. In the last print(), sep="\t" separates A, B, and C with tabs.

### Q15. [Hard] Write a single print() statement that produces this exact output:
Name	Marks
Aarav	95
Meera	88

*Hint:* Use \n for new lines and \t for tabs, all inside one string.

**Answer:** ```
print("Name\tMarks\nAarav\t95\nMeera\t88")
```

You can combine multiple escape characters in a single string. \t adds a tab between the column values, and \n starts a new row. This produces a neatly formatted table with two columns: Name and Marks.

### Q16. [Easy] What happens when you call print() with no arguments (empty parentheses)?

*Hint:* Think about what the default end character is.

**Answer:** An empty `print()` prints a **blank line**. Since print() has no values to display but still outputs the default end character (`\n`), it produces an empty line.

This is commonly used to add vertical spacing between sections of output. For example, if you want a gap between two blocks of text, place an empty print() between them. It is cleaner than printing an empty string: print("") does the same thing.

### Q17. [Hard] Predict the output of:
print("A", end="")
print("B", end="")
print("C", end="")
print()
print("Done")

*Hint:* end="" means nothing is printed after the value, not even a newline.

**Answer:** Output:

```
ABC
Done
```

The first three print() calls all have end="" (empty string), meaning no newline is added after each one. So A, B, and C appear on the same line without any spaces between them: ABC. The fourth print() with no arguments outputs just a newline, ending the line. The fifth print() outputs "Done" on a new line.

### Q18. [Medium] Write a program that prints a date in DD/MM/YYYY format using the sep parameter. Print 15, 08, and 2026 as separate values.

*Hint:* Use three numbers as separate arguments and set sep to '/'.

**Answer:** ```
print(15, "08", 2026, sep="/")
```

By passing the day, month, and year as separate values and setting sep="/", Python joins them with forward slashes. Note that the month is passed as a string "08" to preserve the leading zero — if you wrote 08 as a number, Python would print 8 (dropping the leading zero).

### Q19. [Hard] What is the output of: print("\\n")

*Hint:* The first backslash escapes the second backslash. Then 'n' is a regular character.

**Answer:** Output: `\n`

This is tricky. `\\` is an escape sequence that produces a single literal backslash (`\`). The `n` after it is just a regular character. So `\\n` produces the output `\n` — it prints the two characters backslash and n, NOT a newline.

## Mixed Questions

### Q1. [Easy] Write a program that prints your name, your class, and your favorite subject on three separate lines.

*Hint:* Use three separate print() statements.

**Answer:** ```
print("Name: Vikram Singh")
print("Class: 9th Standard")
print("Favourite Subject: Mathematics")
```

Each print() statement displays its text and automatically moves to the next line. You can replace the details with your own information. This is the simplest way to print multiple lines — one print() per line.

### Q2. [Easy] What is the output of: print(5, 10, 15, 20)

*Hint:* Multiple values separated by commas are printed with spaces between them.

**Answer:** Output: `5 10 15 20`

When you pass multiple values to print() separated by commas, Python prints them all on one line with a space between each value. The default separator (sep) is a single space.

### Q3. [Medium] Explain why print debugging is useful and give an example of when you would use it.

*Hint:* Think about a situation where your program gives the wrong answer.

**Answer:** **Print debugging** is the technique of adding `print()` statements to your code to see the values of variables and expressions at different points during execution. For example, if a calculation gives 50 instead of the expected 100, you can add `print()` after each step to see where the value goes wrong: `print("Step 1:", value1)`, `print("Step 2:", value2)`, etc.

Print debugging is the simplest and most widely used debugging technique. It works in any language and any environment. Even experienced developers use it because it is fast and requires no special tools. You will find yourself using print() for debugging far more often than for actual output.

### Q4. [Medium] Write a program that prints the following pattern using a single print() statement with escape characters:
*
**
***
****

*Hint:* Use \n to move to the next line within a single string.

**Answer:** ```
print("*\n**\n***\n****")
```

Each \n in the string moves the output to the next line. So the string "*\n**\n***\n****" produces four lines: * on the first line, ** on the second, *** on the third, and **** on the fourth.

### Q5. [Medium] Why is it important to write comments in your code? Give three reasons.

*Hint:* Think about future-you, other people reading your code, and debugging.

**Answer:** Three reasons: (1) **Future reference:** When you return to your code after weeks or months, comments remind you what each part does and why. (2) **Collaboration:** When other people read your code (classmates, teachers, team members), comments help them understand your logic without having to decode every line. (3) **Debugging:** You can "comment out" lines of code (add # before them) to temporarily disable them while testing, without deleting the code.

A common saying in programming is: 'Code tells you how, comments tell you why.' Good comments explain the reasoning behind a decision, not just what the code does. For example, '# Check if age is at least 13 (minimum age per policy)' is better than '# Check age'.

### Q6. [Medium] What is the output of:
print("5 + 3")
print(5 + 3)

*Hint:* The first one has quotes (it is a string), the second does not (it is an expression).

**Answer:** Output:

```
5 + 3
8
```

The first print() has quotes around "5 + 3", so Python treats it as a string (text) and prints it literally: 5 + 3. The second print() has no quotes around 5 + 3, so Python treats it as a mathematical expression, calculates the result (8), and prints that.

### Q7. [Hard] Write a program that uses only print() statements with the end parameter to print "HELLO" with each letter on the same line, separated by dots: H.E.L.L.O

*Hint:* Print each letter separately with end="." except for the last one.

**Answer:** ```
print("H", end=".")
print("E", end=".")
print("L", end=".")
print("L", end=".")
print("O")
```

Each print() with end="." prints its letter followed by a dot instead of a newline. The last print("O") uses the default end (newline), so it ends the line properly. The result is H.E.L.L.O on a single line. Alternatively, you could write: print("H", "E", "L", "L", "O", sep=".").

### Q8. [Hard] What is the output of:
print("Line 1", end="\n\n")
print("Line 2", end="\n\n")
print("Line 3")

*Hint:* end="\n\n" means two newlines — one normal and one extra blank line.

**Answer:** Output:

```
Line 1

Line 2

Line 3
```

The end="\n\n" adds two newline characters after each line — the first newline ends the current line, and the second creates an empty blank line. This produces output with a blank line between each line of text, creating a double-spaced effect.

### Q9. [Hard] Predict the output of:
print("A", "B", sep="", end="")
print("C", "D", sep="", end="\n")
print("E", "F", sep="-")

*Hint:* sep="" means no space between values. end="" means no newline.

**Answer:** Output:

```
ABCD
E-F
```

Line 1: sep="" removes spaces between A and B, and end="" removes the newline, giving 'AB' with no line break. Line 2: sep="" removes spaces between C and D, and end="\n" adds a newline, giving 'CD' followed by a newline. Since line 1 had no newline, AB and CD appear together as ABCD. Line 3: sep="-" puts a hyphen between E and F, giving E-F on a new line.

### Q10. [Medium] What is a raw string in Python? When would you use it?

*Hint:* It starts with the letter 'r' before the quote. It treats backslashes as literal characters.

**Answer:** A **raw string** is prefixed with `r` before the opening quote: `r"text"`. In a raw string, backslashes are treated as literal characters and not as escape characters. So `r"\n"` prints `\n` (two characters) instead of a newline. Raw strings are useful for **file paths** (like `r"C:\new_folder"`) and **regular expressions**.

Without the r prefix, print("C:\new_folder") would interpret \n as a newline, producing unexpected output. With the r prefix, print(r"C:\new_folder") prints exactly what you typed: C:\new_folder. Raw strings save you from having to double every backslash in file paths.

### Q11. [Easy] Write a comment above the following line of code explaining what it does:
print(2 ** 8)

*Hint:* The ** operator raises a number to a power. 2 ** 8 means 2 to the power of 8.

**Answer:** ```
# Calculate and print 2 raised to the power of 8
print(2 ** 8)
```

The comment uses # to explain what the code does. A good comment explains the purpose (what the calculation means) rather than just restating the code. This comment is helpful because someone reading the code might not immediately recognize that ** is the power operator.

### Q12. [Hard] What is the output of:
print(type("Hello"))
print(type(42))
print(type(3.14))

*Hint:* The type() function tells you what data type a value is.

**Answer:** Output:

```

```

The type() function returns the data type of a value. "Hello" is a str (string), 42 is an int (integer), and 3.14 is a float (floating-point/decimal number). This is a preview of data types, which you will study in detail in the next chapter.

## Multiple Choice Questions

### Q1. [Easy] What is the correct way to print "Hello" in Python 3?

A. echo("Hello")
B. print("Hello")
C. display("Hello")
D. write("Hello")

**Answer:** B

**B is correct.** In Python, the print() function displays output. echo (Option A) is used in PHP and shell scripting. display (Option C) and write (Option D) are not standard Python output functions.

### Q2. [Easy] Which of the following is a valid Python string?

A. Hello World
B. 'Hello World'
C. (Hello World)
D. [Hello World]

**Answer:** B

**B is correct.** Strings in Python must be enclosed in quotes (single or double). Option A has no quotes. Options C and D use parentheses and brackets, which have different meanings in Python (function calls and lists, respectively).

### Q3. [Easy] What is the output of print(10 + 5)?

A. 10 + 5
B. 15
C. 105
D. Error

**Answer:** B

**B is correct.** Since 10 + 5 is without quotes, Python evaluates it as a mathematical expression (10 + 5 = 15) and prints the result. Option A would be the output of print("10 + 5") (with quotes). Option C would result from string concatenation, not numeric addition.

### Q4. [Easy] What does \n represent in a Python string?

A. The letter 'n'
B. A backslash followed by 'n'
C. A newline (moves to next line)
D. A null character

**Answer:** C

**C is correct.** \n is the newline escape character. When Python sees \n in a string, it creates a line break. Option A is wrong — that would just be the character 'n'. Option B would be represented as \\n in Python (double backslash). Option D is wrong — the null character is \0.

### Q5. [Easy] What symbol is used for single-line comments in Python?

A. //
B. /* */
C. #
D. --

**Answer:** C

**C is correct.** Python uses the hash symbol (#) for single-line comments. // (Option A) is used in JavaScript, Java, and C++. /* */ (Option B) is used for multi-line comments in C, Java, and JavaScript. -- (Option D) is used in SQL.

### Q6. [Easy] What is the output of print('Hello') and print("Hello")?

A. Hello and 'Hello'
B. Both print Hello (same output)
C. 'Hello' and "Hello"
D. Error in one of them

**Answer:** B

**B is correct.** Single quotes and double quotes are interchangeable in Python for creating strings. Both print('Hello') and print("Hello") produce exactly the same output: Hello. The quotes are not part of the output — they only mark the beginning and end of the string in the code.

### Q7. [Medium] What is the output of print("A", "B", "C", sep="*")?

A. A B C
B. A*B*C
C. ABC
D. A * B * C

**Answer:** B

**B is correct.** The sep parameter changes the separator between values from the default space to the specified string. sep="*" puts an asterisk between each value: A*B*C. Option A would be the output without the sep parameter. Option C would result from sep="". Option D would result from sep=" * ".

### Q8. [Medium] What does the end parameter in print() control?

A. The last value that gets printed
B. Whether the program ends after printing
C. What character is printed after the output (default is newline)
D. The ending quote of the string

**Answer:** C

**C is correct.** The end parameter specifies what character (or string) is added after all values are printed. The default is '\n' (newline), which is why each print() normally starts on a new line. Setting end=" " makes the next print() continue on the same line with a space. Option A is wrong — end does not affect what values are printed. Option B is wrong — end has nothing to do with program termination.

### Q9. [Medium] Which escape character adds a horizontal tab in a string?

A. \n
B. \t
C. \s
D. \h

**Answer:** B

**B is correct.** \t is the tab escape character that adds horizontal spacing. \n (Option A) is a newline. \s (Option C) is not a valid Python escape character. \h (Option D) is not a valid Python escape character either.

### Q10. [Medium] What is the output of print("Hello\\World")?

A. HelloWorld
B. Hello\World
C. Hello\\World
D. Hello\nWorld

**Answer:** B

**B is correct.** The double backslash (\\) is an escape sequence that produces a single literal backslash (\) in the output. So "Hello\\World" prints Hello\World. Option A would result from print("Hello" + "World"). Option C shows the code, not the output. Option D would result from print("Hello\nWorld").

### Q11. [Medium] What is the output of print("5" + "3")?

A. 8
B. 53
C. 5 3
D. Error

**Answer:** B

**B is correct.** When you use + with strings, Python concatenates (joins) them together. "5" + "3" joins the string "5" and the string "3" to get "53". This is NOT mathematical addition. Option A (8) would be the output of print(5 + 3) (without quotes — numeric addition).

### Q12. [Medium] Which of the following correctly prints: It's a great day

A. print('It's a great day')
B. print("It's a great day")
C. print(It's a great day)
D. print("Its a great day")

**Answer:** B

**B is correct.** Since the string contains an apostrophe (single quote), wrapping it in double quotes avoids confusion. Option A causes a SyntaxError because the apostrophe in It's closes the single-quoted string prematurely. Option C has no quotes at all. Option D removes the apostrophe, changing the text.

### Q13. [Hard] What is the output of:
print("X", end="")
print("Y", end="")
print("Z")

A. X Y Z
B. XYZ
C. X\nY\nZ
D. X
Y
Z

**Answer:** B

**B is correct.** The first two print() calls have end="" (empty string), which means no character is added after the output — not even a space or newline. So X, Y, and Z are printed directly next to each other: XYZ. The last print("Z") uses the default end="\n", which ends the line.

### Q14. [Hard] What is the output of print("Line1\nLine2\nLine3")?

A. Line1\nLine2\nLine3
B. Line1 Line2 Line3
C. Line1
Line2
Line3
D. Line1nLine2nLine3

**Answer:** C

**C is correct.** Each \n in the string creates a newline, so the three words appear on three separate lines. Option A would be the output of a raw string: print(r"Line1\nLine2\nLine3"). Option B would result if \n were replaced with spaces. Option D would result if the backslashes were removed.

### Q15. [Hard] Which of the following is NOT a valid escape sequence in Python?

A. \n
B. \t
C. \a
D. \p

**Answer:** D

**D is correct.** \p is not a recognized escape sequence in Python. \n (newline), \t (tab), and \a (bell/alert sound) are all valid escape sequences. When Python encounters an unrecognized escape sequence like \p, it treats the backslash as a literal character in newer versions, but this is not reliable behavior.

### Q16. [Hard] What is the output of print("\\n")?

A. A newline (blank line)
B. \n
C. \\n
D. n

**Answer:** B

**B is correct.** The first two backslashes (\\) form an escape sequence that produces a single literal backslash (\). The 'n' after it is just a regular character. So the output is the two characters: \n. This is different from a single \n which would produce a newline. Option A would be the output of print("\n").

### Q17. [Hard] What is the output of print(type("42"))?

A. 
B. 
C. 
D. 42

**Answer:** B

**B is correct.** "42" is enclosed in quotes, making it a string (str), not a number. The type() function returns the data type. Without quotes, type(42) would return . The quotes make all the difference — "42" is text, while 42 is a number.

### Q18. [Hard] What is the output of print(1, 2, 3, sep="\t", end="!\n")?

A. 1 2 3!
B. 1\t2\t3!
C. 1	2	3!
D. 123!

**Answer:** C

**C is correct.** sep="\t" puts a tab character between each value (1, 2, 3), and end="!\n" adds an exclamation mark followed by a newline at the end. The output is: 1[tab]2[tab]3! Option A would result from the default sep (space). Option B shows the raw code, not the interpreted output. Option D would result from sep="".

### Q19. [Medium] How do you write a multi-line comment in Python?

A. /* This is a comment */
B. // This is a comment
C. ''' This is a comment '''
D. <!-- This is a comment -->

**Answer:** C

**C is correct.** Python uses triple quotes (''' or """) for multi-line comments/strings. /* */ (Option A) is used in C, Java, JavaScript. // (Option B) is a single-line comment in C, Java, JavaScript. <!-- --> (Option D) is used in HTML.

### Q20. [Easy] What is the default separator between values in print()?

A. No separator
B. A comma
C. A space
D. A newline

**Answer:** C

**C is correct.** The default value of the sep parameter is a single space (" "). So print("A", "B") outputs "A B" with a space between them. Option A would be sep="". Option B would be sep=",". Option D would be sep="\n".

### Q21. [Hard] What happens if you write: print('She said 'Hi'')?

A. It prints: She said Hi
B. It prints: She said 'Hi'
C. It causes a SyntaxError
D. It prints: She said 'Hi

**Answer:** C

**C is correct.** Python sees the first single quote as the start of the string and the second single quote (before Hi) as the end. The remaining Hi'' is invalid Python syntax, causing a SyntaxError. To fix this, use double quotes on the outside: print("She said 'Hi'") or escape the inner quotes: print('She said \'Hi\'').

## Coding Challenges

### Challenge 1. Personal Introduction

**Difficulty:** Easy

Write a Python program that prints your name, age, city, and favourite hobby on four separate lines.

**Constraints:**

- Use four separate print() statements. Each line should have a label followed by the information.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Name: Kavya Joshi
Age: 13
City: Pune
Hobby: Reading books
```

**Solution:**

```python
print("Name: Kavya Joshi")
print("Age: 13")
print("City: Pune")
print("Hobby: Reading books")
```

### Challenge 2. Formatted Table

**Difficulty:** Easy

Write a program that prints a multiplication table for 5 (from 5x1 to 5x5) using tab escape characters for neat alignment.

**Constraints:**

- Use \t for alignment. Let Python calculate the results (do not hardcode the answers).

**Sample input:**

```
(No input required)
```

**Sample output:**

```
5 x 1	=	5
5 x 2	=	10
5 x 3	=	15
5 x 4	=	20
5 x 5	=	25
```

**Solution:**

```python
print("5 x 1\t=\t", 5 * 1)
print("5 x 2\t=\t", 5 * 2)
print("5 x 3\t=\t", 5 * 3)
print("5 x 4\t=\t", 5 * 4)
print("5 x 5\t=\t", 5 * 5)
```

### Challenge 3. Date Formatter

**Difficulty:** Medium

Write a program that prints today's date in three different formats using the sep parameter: DD-MM-YYYY, DD/MM/YYYY, and DD.MM.YYYY. Use 06, 04, and 2026 as the day, month, and year.

**Constraints:**

- Use the sep parameter in each print() call. Do not use string concatenation.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
06-04-2026
06/04/2026
06.04.2026
```

**Solution:**

```python
print("06", "04", "2026", sep="-")
print("06", "04", "2026", sep="/")
print("06", "04", "2026", sep=".")
```

### Challenge 4. Loading Animation

**Difficulty:** Medium

Write a program that simulates a loading animation by printing 'Loading' followed by 10 dots on the same line, then 'Done!' on the same line. Use the end parameter.

**Constraints:**

- Use multiple print() statements with end="" to keep everything on one line. Print each dot separately.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Loading..........Done!
```

**Solution:**

```python
print("Loading", end="")
print(".", end="")
print(".", end="")
print(".", end="")
print(".", end="")
print(".", end="")
print(".", end="")
print(".", end="")
print(".", end="")
print(".", end="")
print(".", end="")
print("Done!")
```

### Challenge 5. Student Report Card with Comments

**Difficulty:** Medium

Write a well-commented program that creates a formatted report card for a student. Include at least 5 subjects with marks, calculate the total using Python, and use tabs for alignment. Every section must have a comment explaining it.

**Constraints:**

- Include at least 8 comments explaining different parts of the code. Use \t for alignment. Calculate the total using Python arithmetic.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
=============================
    REPORT CARD - Class 9
=============================
Name:	Arjun Reddy
Roll:	15

Subject		Marks
-------		-----
Maths		92
Science		88
English		95
Hindi		82
Computer	97

Total:		454 / 500
=============================
```

**Solution:**

```python
# Student Report Card Program
# This program displays a formatted report card

# Header section
print("=============================")
print("    REPORT CARD - Class 9")
print("=============================")

# Student information
print("Name:\tArjun Reddy")
print("Roll:\t15")
print()  # Blank line for spacing

# Table header
print("Subject\t\tMarks")
print("-------\t\t-----")

# Individual subject marks
print("Maths\t\t92")
print("Science\t\t88")
print("English\t\t95")
print("Hindi\t\t82")
print("Computer\t97")
print()

# Total calculation - let Python do the math
print("Total:\t\t", 92 + 88 + 95 + 82 + 97, "/ 500")
print("=============================")
```

### Challenge 6. Escape Character Art

**Difficulty:** Hard

Write a program using ONLY a single print() statement (with escape characters) that produces this exact output:

Name: "Diya"
Path: C:\Users\Diya
Status: It's working!

Note: Use \n for new lines, \" for quotes, \\ for backslash, and \' for apostrophe.

**Constraints:**

- Must use ONLY ONE print() statement. Must use at least three different escape characters.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Name: "Diya"
Path: C:\Users\Diya
Status: It's working!
```

**Solution:**

```python
print("Name: \"Diya\"\nPath: C:\\Users\\Diya\nStatus: It\'s working!")
```

### Challenge 7. sep and end Mastery

**Difficulty:** Hard

Write a program that uses the sep and end parameters creatively to print the following output. You must use at least 5 print() statements, each using either sep or end (or both).

Expected output:
IP: 192.168.1.1
Date: 06/04/2026
Time: 10:30:45
Path: C > Users > Student > Code
Status: OK...DONE!

**Constraints:**

- Each print() must use sep and/or end parameters. Do not concatenate strings manually.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
IP: 192.168.1.1
Date: 06/04/2026
Time: 10:30:45
Path: C > Users > Student > Code
Status: OK...DONE!
```

**Solution:**

```python
print("IP:", end=" ")
print(192, 168, 1, 1, sep=".")
print("Date:", end=" ")
print("06", "04", "2026", sep="/")
print("Time:", end=" ")
print(10, 30, 45, sep=":")
print("Path:", end=" ")
print("C", "Users", "Student", "Code", sep=" > ")
print("Status: OK", end="")
print(".", end="")
print(".", end="")
print(".DONE!")
```

### Challenge 8. ASCII Art with Print

**Difficulty:** Hard

Create an ASCII art house using only print() statements. The house should have a triangular roof, rectangular walls, and a door. It should be at least 7 lines tall.

**Constraints:**

- Use print() statements. The house must have a recognizable roof, walls, and door. Minimum 7 lines.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
     /\
    /  \
   /    \
  /______\
  |      |
  |  []  |
  |  ||  |
  |__||__|
```

**Solution:**

```python
print("     /\\")
print("    /  \\")
print("   /    \\")
print("  /______\\")
print("  |      |")
print("  |  []  |")
print("  |  ||  |")
print("  |__||__|")
```

### Challenge 9. Complete Program with All Concepts

**Difficulty:** Hard

Write a program that serves as a Python cheat sheet for the print() function. It should demonstrate: basic printing, numbers, escape characters (\n, \t, \\, \"), sep parameter, end parameter, comments, and an empty print(). Include a title, section headers, and examples with their expected output shown as comments.

**Constraints:**

- Must demonstrate all 6 concepts listed. Include comments explaining each section. Output must be neatly formatted with section numbers.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
=== Python print() Cheat Sheet ===

1. Basic String:
Hello, World!

2. Number:
42

3. Multiple Values:
Python is fun

4. Escape Characters:
Line1
Line2
Name	Age
Path: C:\Users
She said "Hi"

5. sep Parameter:
2026-04-06

6. end Parameter:
A B C Done!

=== End of Cheat Sheet ===
```

**Solution:**

```python
# Python print() Cheat Sheet
# Demonstrates all features of the print() function

print("=== Python print() Cheat Sheet ===")
print()

# 1. Basic string printing
print("1. Basic String:")
print("Hello, World!")
print()

# 2. Printing numbers
print("2. Number:")
print(42)
print()

# 3. Multiple values
print("3. Multiple Values:")
print("Python", "is", "fun")
print()

# 4. Escape characters
print("4. Escape Characters:")
print("Line1\nLine2")        # \n for new line
print("Name\tAge")          # \t for tab
print("Path: C:\\Users")    # \\ for backslash
print("She said \"Hi\"")   # \" for double quote
print()

# 5. sep parameter
print("5. sep Parameter:")
print(2026, "04", "06", sep="-")
print()

# 6. end parameter
print("6. end Parameter:")
print("A", end=" ")
print("B", end=" ")
print("C", end=" ")
print("Done!")
print()

print("=== End of Cheat Sheet ===")
```

---

*Notes: https://learn.modernagecoders.com/resources/python/your-first-python-program/*
