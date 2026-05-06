---
title: "Practice: Introduction to Python"
description: "62 practice problems for Introduction to Python in Python"
slug: introduction-to-python-practice
canonical: https://learn.modernagecoders.com/resources/python/introduction-to-python/practice
category: "Python"
---
# Practice: Introduction to Python

**Total questions:** 62

## Topic-Specific Questions

### Q1. [Easy] What is the output of this code?

```
print("Hello" + " " + "World")
```

*Hint:* The + operator concatenates strings.

**Answer:** Hello World

The + operator joins strings together. "Hello" + " " + "World" becomes "Hello World". This is called string concatenation.

### Q2. [Easy] What is the output?

```
print(3 + 4)
print("3" + "4")
```

*Hint:* Numbers add, strings concatenate.

**Answer:** 7
34

3 + 4 performs arithmetic addition giving 7. "3" + "4" concatenates two strings giving "34". The data type determines what + does.

### Q3. [Easy] What is the output?

```
print(type(42))
print(type("hello"))
print(type(3.14))
```

*Hint:* type() shows the data type of a value.

**Answer:** 

42 is an integer (int), "hello" is a string (str), and 3.14 is a floating point number (float). Python assigns types automatically.

### Q4. [Easy] Find the bug:

```
print("Welcome to Python)
print("Let us begin")
```

*Hint:* Check all quotes carefully.

**Answer:** Missing closing quote on line 1. Fix: print("Welcome to Python")

Every opening quote must have a matching closing quote. The first line has " at the start but no " before the closing parenthesis.

### Q5. [Easy] What is the output?

```
print(10 / 3)
print(10 // 3)
print(10 % 3)
```

*Hint:* / is division, // is floor division, % is remainder.

**Answer:** 3.3333333333333335
3
1

/ gives decimal result (3.33...), // gives integer quotient (3), and % gives remainder (1). These are the three division-related operators.

### Q6. [Easy] What is the output?

```
x = 5
y = 10
print(x + y)
print(x * y)
print(y - x)
```

*Hint:* Basic arithmetic with variables.

**Answer:** 15
50
5

x stores 5 and y stores 10. x + y = 15, x * y = 50, y - x = 5. Variables hold values that can be used in expressions.

### Q7. [Medium] Will this code work? What happens?

```
Print("Hello")
```

*Hint:* Python is case-sensitive.

**Answer:** NameError: name Print is not defined

Python is case-sensitive. print() is valid but Print() is not — Python treats them as different names. Always use lowercase print().

### Q8. [Medium] What is the output?

```
print(2 ** 10)
print(2 ** 0)
print(5 ** 3)
```

*Hint:* ** is the power/exponent operator.

**Answer:** 1024
1
125

2**10 = 1024 (2 raised to power 10), 2**0 = 1 (any number to power 0 is 1), 5**3 = 125 (5 cubed).

### Q9. [Medium] What is the output?

```
name = "Python"
print(len(name))
print(name[0])
print(name[-1])
```

*Hint:* len() gives length, [] accesses characters.

**Answer:** 6
P
n

len("Python") is 6 (6 characters). name[0] is the first character "P". name[-1] is the last character "n". Indexing starts at 0.

### Q10. [Medium] What is the output?

```
a = True
b = False
print(a and b)
print(a or b)
print(not a)
```

*Hint:* and, or, not are logical operators.

**Answer:** False
True
False

True and False = False (both must be True). True or False = True (at least one True). not True = False (reverses the value).

### Q11. [Easy] Write a Python program that prints your name. For example, if your name is Priya, the output should be: My name is Priya.

*Hint:* Use the print() function with your name inside quotes.

**Answer:** ```
print("My name is Priya.")
```

The print() function outputs whatever text you place inside the parentheses and quotes. You can replace 'Priya' with any name. The text inside the quotes is called a 'string' — you will learn more about strings in later chapters.

### Q12. [Medium] Write a program that prints numbers from 1 to 5, each on a new line.

*Hint:* Use range() with a for loop.

**Answer:** for i in range(1, 6):
    print(i)

range(1, 6) generates numbers 1, 2, 3, 4, 5 (stops before 6). The for loop prints each number on its own line.

### Q13. [Medium] What is the output?

```
for i in range(3):
    print("*" * (i + 1))
```

*Hint:* String * number repeats the string.

**Answer:** *
**
***

When i=0: "*"*1 = "*". When i=1: "*"*2 = "**". When i=2: "*"*3 = "***". The * operator with strings repeats them.

### Q14. [Medium] What is the output?

```
x = [1, 2, 3, 4, 5]
print(sum(x))
print(max(x))
print(min(x))
```

*Hint:* sum(), max(), min() are built-in functions.

**Answer:** 15
5
1

sum() adds all elements (1+2+3+4+5=15). max() finds the largest (5). min() finds the smallest (1). These work on any iterable.

### Q15. [Hard] Find the bug:

```
age = input("Enter age: ")
next_year = age + 1
print(next_year)
```

*Hint:* input() always returns a string.

**Answer:** TypeError. Fix: next_year = int(age) + 1

input() returns a string, so age is "25" not 25. You cannot add a string and an integer. Convert with int() first: int(age) + 1.

### Q16. [Hard] What is the output?

```
print("Python"[1:4])
print("Python"[:3])
print("Python"[::2])
```

*Hint:* String slicing: [start:stop:step].

**Answer:** yth
Pyt
Pto

"Python"[1:4] = "yth" (index 1,2,3). [:3] = "Pyt" (first 3 chars). [::2] = "Pto" (every 2nd character).

### Q17. [Hard] If Python is an interpreted language and runs slower than compiled languages like C++, why do so many companies still choose Python?

*Hint:* Speed of the program is not always the most important factor. Think about development speed and team productivity.

**Answer:** Companies choose Python because **developer productivity is often more important than program execution speed**. Python allows developers to write code faster, read it more easily, and maintain it with less effort. For tasks where speed is critical, Python can use C/C++ extensions or specialized libraries like NumPy that run computationally intensive parts in compiled code.

While Python code runs slower than C++ code, the difference rarely matters for most applications (web servers, data processing scripts, automation). Developer time is expensive — a task that takes 2 days in C++ might take 2 hours in Python. Additionally, Python's rich ecosystem of optimized libraries (NumPy, TensorFlow) handles performance-critical operations in compiled code under the hood, giving you the best of both worlds.

### Q18. [Hard] What was the ABC language, and how did it influence the creation of Python?

*Hint:* Guido van Rossum worked on ABC before Python. Think about what ABC did well and where it fell short.

**Answer:** ABC was a programming language developed at CWI in the Netherlands. It was designed to be easy to teach and use. Guido van Rossum worked on the ABC project and was inspired by its simplicity and readability. However, ABC had limitations — it was not **extensible** (you could not add new features easily) and was not suitable for real-world tasks. Python was created to keep ABC's readability while adding the flexibility and power needed for practical programming.

Understanding Python's origins helps explain its design philosophy. Python inherited ABC's focus on clean syntax and readability but added features like modules, exceptions, and the ability to interface with other languages (like C). This combination of simplicity and power is what made Python successful where ABC was not.

### Q19. [Hard] What is open-source software? Name two advantages and one potential disadvantage of software being open-source.

*Hint:* Think about cost, community, and who is responsible for fixing bugs.

**Answer:** **Open-source software** is software whose source code is publicly available for anyone to view, use, modify, and distribute. **Advantages:** (1) It is free to use, removing financial barriers, and (2) a large community of developers can contribute to improving it, finding bugs, and adding features. **Potential disadvantage:** There is no single company responsible for guaranteed support — if you encounter a problem, you rely on the community for help rather than a dedicated support team.

Open-source software like Python, Linux, and Firefox has transformed the technology industry. The community-driven development model often produces high-quality software because thousands of developers review and improve the code. However, for businesses that need guaranteed support and service-level agreements, open-source can be a concern, which is why companies like Red Hat offer paid support for open-source products.

## Mixed Questions

### Q1. [Easy] What makes a programming language "beginner-friendly"? List at least three characteristics.

*Hint:* Think about how easy it is to read, how much setup is needed, and how quickly you can see results.

**Answer:** A beginner-friendly language has: (1) **Simple, readable syntax** that looks like natural language, (2) **Minimal setup** required to write and run your first program, (3) **Quick feedback** — you can see results immediately, (4) **Good error messages** that help you understand what went wrong, and (5) **Large community** with plenty of tutorials and help available.

Python meets all of these criteria, which is why it is consistently recommended as the best first programming language. A language that requires you to write 10 lines of boilerplate code, understand complex concepts like memory management, and wait through a compilation step before seeing any output is much harder for beginners.

### Q2. [Medium] If you wanted to build a website using Python, which two frameworks could you use? Which one is more suitable for large projects?

*Hint:* One is "batteries included" and the other is lightweight.

**Answer:** The two major Python web frameworks are **Django** and **Flask**. Django is more suitable for large projects because it includes everything you need (authentication, database management, admin panel) built-in.

Django follows the 'batteries included' philosophy, providing a complete set of tools for building web applications. It is used by large projects like Instagram and Pinterest. Flask is a 'micro-framework' that provides only the basics and lets you add features as needed, making it better for smaller projects or when you want more control over your choices.

### Q3. [Medium] Compare writing a "Hello World" program in Python with how you would describe the task in plain English. What do you notice?

*Hint:* The Python code is very close to the English instruction.

**Answer:** In plain English, you might say: "Print the text Hello World on the screen." In Python, you write: `print("Hello, World!")`. The Python code is remarkably close to the English instruction — it uses the word **print** and puts the text in quotes. This closeness to natural language is what makes Python a "high-level" language.

This comparison illustrates why Python is considered readable. High-level languages aim to be as close to human thinking as possible. The closer the code is to natural language, the easier it is to learn, read, write, and debug. This is a deliberate design choice by Guido van Rossum.

### Q4. [Easy] What is a programming language? Explain in your own words.

*Hint:* Think of it as a way to talk to a computer, similar to how you use Hindi or English to talk to people.

**Answer:** A programming language is a **set of rules and instructions** that allows humans to communicate with computers. Just like we use natural languages (English, Hindi) to communicate with each other, we use programming languages to tell computers what tasks to perform.

Computers only understand machine language (binary — 0s and 1s), which is extremely difficult for humans to write. Programming languages act as a bridge, allowing us to write instructions in a more human-readable form, which are then translated into machine language by interpreters or compilers.

### Q5. [Medium] Name three Python libraries and the fields they are used in.

*Hint:* Think about data analysis, machine learning, and game development.

**Answer:** (Any three) **pandas** — data science and data analysis, **TensorFlow** — artificial intelligence and deep learning, **Pygame** — game development, **NumPy** — scientific computing and mathematics, **Django** — web development, **Flask** — web development, **Matplotlib** — data visualization.

Python's power comes largely from its ecosystem of libraries (also called packages or modules). A library is a collection of pre-written code that you can use in your programs. Instead of writing everything from scratch, you import a library and use its functions. This saves enormous amounts of time and effort.

### Q6. [Hard] Imagine you are explaining to a friend why they should learn programming. They ask: "But I am not good at maths. Can I still learn to code?" What would you tell them?

*Hint:* Programming is more about logic and problem-solving than advanced mathematics.

**Answer:** You do not need to be good at advanced mathematics to learn programming. Programming is primarily about **logical thinking, problem-solving, and giving clear instructions**. Basic arithmetic (addition, subtraction, multiplication, division) is enough to get started. The maths skills you need will develop naturally as you learn to code.

This is one of the most common misconceptions about programming. While some advanced fields like machine learning and graphics programming require strong maths, the vast majority of programming tasks (building websites, writing scripts, creating apps) require only basic mathematical knowledge. What matters more is the ability to think step by step and break problems into smaller parts.

### Q7. [Medium] What is the difference between a text editor and an IDE? Which would you recommend for a beginner learning Python?

*Hint:* An IDE has more features built in, like running code, debugging, and autocomplete.

**Answer:** A **text editor** (like Notepad, Sublime Text) is a simple tool for writing text and code. An **IDE** (Integrated Development Environment, like VS Code, PyCharm, Thonny) provides additional features like code highlighting, auto-completion, debugging tools, and the ability to run code with one click. For beginners, **Thonny** or **VS Code** is recommended.

While you can write Python code in any text editor, an IDE makes the experience much better. It highlights your code with colors (syntax highlighting), suggests completions as you type, shows errors before you run the code, and lets you run and debug programs without leaving the application. Thonny is designed specifically for Python beginners, while VS Code is a versatile editor used by professionals.

### Q8. [Hard] Why do you think Python became more popular than other beginner-friendly languages like Scratch or Logo?

*Hint:* Think about what happens after learning the basics. Can you build real projects with Scratch?

**Answer:** While Scratch and Logo are excellent for introducing very young children to programming concepts, they are **limited in what you can build** with them. Python is beginner-friendly AND powerful enough for professional use. You can start learning with simple print statements and eventually build real websites, data analysis tools, AI models, and professional software — all in the same language.

Scratch uses visual blocks and is great for ages 6-10, but you cannot build a website or analyze data with it. Logo is mainly for drawing. Python bridges the gap between 'learning languages' and 'professional languages'. The skills you learn in Python transfer directly to real-world jobs and projects, making the time investment worthwhile.

### Q9. [Easy] Write a Python program that prints the result of multiplying 12 by 15.

*Hint:* Use the print() function with the multiplication operator (*).

**Answer:** ```
print(12 * 15)
```

Output: 180

You can put mathematical expressions directly inside the print() function. Python evaluates the expression first (12 * 15 = 180) and then prints the result. Notice that we do NOT put quotes around 12 * 15 — if we did, Python would print the text '12 * 15' instead of calculating the answer.

### Q10. [Medium] What would happen if Python were a compiled language instead of an interpreted language? How would the development process change?

*Hint:* Think about the extra step needed before running code and what happens when there is an error.

**Answer:** If Python were compiled, you would need to **compile the entire program before running it**. Every time you made a change, you would have to recompile. If there were any errors anywhere in the code, the entire compilation would fail and nothing would run. The REPL would not exist because there would be no line-by-line execution.

The interpreted nature of Python is a huge advantage for learning and rapid development. Being able to test one line at a time, see immediate results, and use the REPL for experimentation makes the learning process much smoother. Compiled languages trade this convenience for faster program execution.

### Q11. [Hard] Research question: Find out what the "Zen of Python" is. How do you display it in the Python REPL? Name any three of its principles.

*Hint:* There is a special command you can type in the Python REPL. It starts with 'import'.

**Answer:** The Zen of Python is a collection of **19 guiding principles** for writing Python code. You display it by typing `import this` in the Python REPL. Three principles include: (1) **"Beautiful is better than ugly"**, (2) **"Simple is better than complex"**, (3) **"Readability counts"**.

The Zen of Python (written by Tim Peters) captures the philosophy behind Python's design. It emphasizes readability, simplicity, and practicality. These principles guide Python developers in writing clean, maintainable code. Try typing 'import this' in your Python REPL to read all 19 principles.

### Q12. [Hard] Python is dynamically typed, while Java is statically typed. Without knowing these terms yet, based on what you have learned about Python's design philosophy, which approach do you think Python would prefer and why?

*Hint:* Python's design philosophy favors simplicity and less code. Which approach sounds simpler?

**Answer:** Python prefers **dynamic typing**, meaning you do not have to declare the type of a variable when you create it. This aligns with Python's philosophy of keeping code simple and readable. In Java (static typing), you must specify whether a variable holds a number, text, or other type before using it.

Even though you have not studied variables or typing yet, this question helps you apply Python's design philosophy. Python consistently chooses the approach that requires less code and is more readable. Dynamic typing means writing `x = 5` instead of `int x = 5`. This is a trade-off: dynamic typing is easier to write but can lead to certain types of errors that static typing would catch early. You will explore this in detail in the Variables and Data Types chapter.

## Multiple Choice Questions

### Q1. [Easy] Who created the Python programming language?

A. Dennis Ritchie
B. Guido van Rossum
C. James Gosling
D. Bjarne Stroustrup

**Answer:** B

**B is correct.** Guido van Rossum created Python in 1991. Dennis Ritchie created the C programming language. James Gosling created Java. Bjarne Stroustrup created C++.

### Q2. [Easy] In which year was Python first released?

A. 1989
B. 1991
C. 1995
D. 2000

**Answer:** B

**B is correct.** Python was first released in February 1991. 1989 is when Guido van Rossum started working on it (during Christmas holidays), but it was not released until 1991. 1995 is when Java was released. 2000 is when Python 2.0 was released.

### Q3. [Easy] Python is named after:

A. A species of snake
B. A Greek god
C. A British comedy show
D. A Dutch city

**Answer:** C

**C is correct.** Python is named after the British comedy show "Monty Python's Flying Circus". Although the Python logo features intertwined snakes, the language name comes from the comedy show. It is not named after a Greek god or a Dutch city.

### Q4. [Easy] What type of language is Python?

A. Compiled language
B. Interpreted language
C. Assembled language
D. Machine language

**Answer:** B

**B is correct.** Python is an interpreted language — the interpreter reads and executes code one line at a time. A compiled language (like C++) requires the entire code to be converted to machine code before execution. Assembly language is a low-level language that uses mnemonics. Machine language is binary code (0s and 1s) that the CPU directly executes.

### Q5. [Easy] Which of the following is the correct way to print "Hello" in Python 3?

A. print "Hello"
B. echo("Hello")
C. print("Hello")
D. console.log("Hello")

**Answer:** C

**C is correct.** In Python 3, print() is a function that requires parentheses. Option A (`print "Hello"`) was valid in Python 2 but causes an error in Python 3. Option B (`echo`) is a command used in PHP and shell scripting, not Python. Option D (`console.log`) is used in JavaScript, not Python.

### Q6. [Easy] What file extension is used for Python source code files?

A. .python
B. .pt
C. .py
D. .pn

**Answer:** C

**C is correct.** Python files use the .py extension (for example, hello.py). The other extensions (.python, .pt, .pn) are not standard Python file extensions. The .pt extension is sometimes used for PyTorch model files, not source code.

### Q7. [Medium] What does REPL stand for?

A. Read-Execute-Print-Loop
B. Read-Eval-Print-Loop
C. Run-Evaluate-Process-Loop
D. Read-Edit-Print-Load

**Answer:** B

**B is correct.** REPL stands for Read-Eval-Print-Loop. Read (reads input), Eval/Evaluate (evaluates the expression), Print (displays the result), Loop (repeats the process). Option A is close but uses 'Execute' instead of 'Eval'. Options C and D use incorrect terms.

### Q8. [Medium] Which of the following is NOT a real use of Python?

A. Building websites
B. Analyzing data
C. Designing CPU hardware
D. Creating AI models

**Answer:** C

**C is correct.** Python is NOT used for designing CPU hardware. Hardware design uses specialized languages like Verilog or VHDL. Python IS used for building websites (Django, Flask), analyzing data (pandas, NumPy), and creating AI models (TensorFlow, PyTorch).

### Q9. [Medium] Which command opens the Python interactive shell in the terminal?

A. start python
B. open python
C. python
D. run python

**Answer:** C

**C is correct.** You type `python` (or `python3` on some systems) in the terminal to open the interactive shell (REPL). Options A, B, and D are not valid commands for starting the Python interpreter.

### Q10. [Medium] Python is described as a "high-level" language. What does this mean?

A. It can only run on powerful computers
B. It is closer to human language than machine language
C. It is more advanced than all other languages
D. It runs at a higher speed than other languages

**Answer:** B

**B is correct.** High-level means the language is closer to human language (English) and abstracts away the complex details of the hardware. Option A is wrong — Python runs on any computer. Option C is wrong — 'high-level' is a classification, not a quality ranking. Option D is wrong — high-level languages are often slower than low-level languages because of the abstraction.

### Q11. [Medium] Which company's backend is built entirely using Python's Django framework?

A. Facebook
B. Twitter
C. Instagram
D. Amazon

**Answer:** C

**C is correct.** Instagram's entire backend is built with Python using the Django framework. Facebook primarily uses PHP (Hack). Twitter initially used Ruby on Rails and later moved to Scala and Java. Amazon primarily uses Java.

### Q12. [Medium] What happens when there is an error on line 5 of a Python program?

A. The entire program refuses to start
B. Lines 1-4 execute, then the program stops at line 5 with an error
C. The program skips line 5 and continues
D. Python automatically fixes the error

**Answer:** B

**B is correct.** Since Python is interpreted (line by line), lines 1-4 execute normally, and the program stops at line 5 when the error is encountered. Option A describes compiler behavior (where no lines run if there is an error). Option C is wrong — Python does not skip errors. Option D is wrong — Python reports errors but does not fix them automatically.

### Q13. [Medium] Which of the following is a Python library used for data analysis?

A. React
B. pandas
C. Angular
D. Bootstrap

**Answer:** B

**B is correct.** pandas is a Python library for data analysis and manipulation. React and Angular are JavaScript frameworks for building user interfaces. Bootstrap is a CSS framework for responsive web design. None of the other options are Python libraries.

### Q14. [Hard] Which language inspired the creation of Python?

A. C++
B. Java
C. ABC
D. BASIC

**Answer:** C

**C is correct.** Python was inspired by the ABC language, which Guido van Rossum worked on at CWI. ABC was designed to be easy to learn, and Python inherited this philosophy. C++ was created by Bjarne Stroustrup. Java was created after Python (1995). BASIC is an older teaching language that did not directly influence Python.

### Q15. [Hard] When did Python 2 reach its end of life (no more updates or support)?

A. January 1, 2015
B. January 1, 2018
C. January 1, 2020
D. January 1, 2022

**Answer:** C

**C is correct.** Python 2 reached its end of life on January 1, 2020. After this date, Python 2 no longer receives any updates, security patches, or bug fixes. The other dates are incorrect — the end-of-life was originally planned for 2015 but was extended to 2020.

### Q16. [Hard] Why does Python use an interpreter instead of a compiler?

A. Because compilers did not exist when Python was created
B. Because interpreted code runs faster than compiled code
C. Because interpretation allows for quicker development, testing, and debugging
D. Because Python code is too complex for a compiler

**Answer:** C

**C is correct.** Python uses an interpreter because it allows developers to test code quickly, see results line by line, and use the interactive REPL. Option A is wrong — compilers existed long before Python. Option B is wrong — compiled code typically runs faster, not slower. Option D is wrong — Python code is simpler than most compiled languages.

### Q17. [Hard] Which of the following statements about Python is FALSE?

A. Python is open-source and free
B. Python can be used for web development
C. Python code must be compiled before running
D. Python was created by Guido van Rossum

**Answer:** C

**C is the FALSE statement and therefore the correct answer.** Python is an interpreted language — it does NOT need to be compiled before running. The interpreter executes code line by line. Options A, B, and D are all true statements about Python.

### Q18. [Hard] What is the output of typing 2 ** 10 in the Python REPL?

A. 20
B. 210
C. 1024
D. 100

**Answer:** C

**C is correct.** The `**` operator in Python means 'to the power of'. So 2 ** 10 means 2 raised to the power of 10, which equals 1024 (2 x 2 x 2 x 2 x 2 x 2 x 2 x 2 x 2 x 2). Option A (20) would be 2 * 10. Option B (210) is just the digits combined. Option D (100) would be 10 ** 2.

### Q19. [Easy] Python is best described as:

A. A low-level, compiled, domain-specific language
B. A high-level, interpreted, general-purpose language
C. A low-level, interpreted, general-purpose language
D. A high-level, compiled, domain-specific language

**Answer:** B

**B is correct.** Python is high-level (close to human language), interpreted (runs line by line), and general-purpose (used for many different types of tasks). Every other option has at least one incorrect term. Python is NOT low-level, NOT compiled, and NOT domain-specific.

### Q20. [Medium] What will happen if you type Print("Hello") in Python? (Note the capital P)

A. It will print Hello
B. It will print hello in lowercase
C. It will show a NameError
D. It will show a SyntaxError

**Answer:** C

**C is correct.** Python is case-sensitive, so `Print` and `print` are different names. Since `Print` (with capital P) is not defined anywhere, Python raises a `NameError: name 'Print' is not defined`. Option A is wrong because the capital P matters. Option B is wrong — Python does not auto-correct case. Option D is wrong — it is a NameError, not a SyntaxError.

### Q21. [Hard] Which of the following is NOT a feature that Python inherited from the ABC language?

A. Clean and readable syntax
B. Focus on ease of learning
C. Object-oriented programming
D. Interactive usage

**Answer:** C

**C is correct.** Object-oriented programming was NOT a feature of the ABC language. ABC focused on clean syntax, ease of learning, and interactive usage. Python added object-oriented programming (classes, inheritance) as one of its improvements over ABC, drawing inspiration from languages like C++ and Modula-3.

### Q22. [Hard] Which of the following Python frameworks is described as following the "batteries included" philosophy?

A. Flask
B. Pygame
C. Django
D. NumPy

**Answer:** C

**C is correct.** Django follows the 'batteries included' philosophy, meaning it provides everything you need to build a web application (authentication, database management, admin panel, URL routing) out of the box. Flask is a lightweight micro-framework that does not include these by default. Pygame is for game development, not web development. NumPy is for numerical computing, not web development.

## Coding Challenges

### Challenge 1. Print Your Full Name

**Difficulty:** Easy

Write a Python program that prints your full name on one line. For example, if your name is Aarav Sharma, the output should be exactly: My name is Aarav Sharma.

**Constraints:**

- Use the print() function. The output must be exactly one line.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
My name is Aarav Sharma.
```

**Solution:**

```python
print("My name is Aarav Sharma.")
```

### Challenge 2. Draw a Box with Stars

**Difficulty:** Easy

Write a Python program that prints a rectangular box made of asterisk (*) characters. The box should be 5 characters wide and 4 lines tall, with hollow inside.

**Constraints:**

- Use only print() statements. You should use exactly 4 print() statements.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
* * * * *
*       *
*       *
* * * * *
```

**Solution:**

```python
print("* * * * *")
print("*       *")
print("*       *")
print("* * * * *")
```

### Challenge 3. Print a Short Poem

**Difficulty:** Easy

Write a Python program that prints the following 4-line poem (or any poem of your choice with at least 4 lines), with each line on a separate line of output.

**Constraints:**

- Use separate print() statements for each line. Minimum 4 lines of output.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Twinkle, twinkle, little star,
How I wonder what you are.
Up above the world so high,
Like a diamond in the sky.
```

**Solution:**

```python
print("Twinkle, twinkle, little star,")
print("How I wonder what you are.")
print("Up above the world so high,")
print("Like a diamond in the sky.")
```

### Challenge 4. Calculator Challenge

**Difficulty:** Medium

Use Python as a calculator to solve the following expression and print the result: (25 + 17) * 3. Do NOT calculate the answer yourself — let Python do the math.

**Constraints:**

- You must use the mathematical expression inside the print() function. Do not hardcode the answer (do not write print(126)).

**Sample input:**

```
(No input required)
```

**Sample output:**

```
126
```

**Solution:**

```python
print((25 + 17) * 3)
```

### Challenge 5. Monday Timetable

**Difficulty:** Medium

Write a Python program that prints your school timetable for Monday in a formatted way. Include at least 5 periods with subject names and timings.

**Constraints:**

- Use print() statements. The timetable must be neatly formatted with at least 5 entries. Include a title line.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
=== Monday Timetable ===
1. 08:00 - 08:45  Mathematics
2. 08:45 - 09:30  English
3. 09:30 - 10:15  Science
4. 10:30 - 11:15  Hindi
5. 11:15 - 12:00  Computer Science
```

**Solution:**

```python
print("=== Monday Timetable ===")
print("1. 08:00 - 08:45  Mathematics")
print("2. 08:45 - 09:30  English")
print("3. 09:30 - 10:15  Science")
print("4. 10:30 - 11:15  Hindi")
print("5. 11:15 - 12:00  Computer Science")
```

### Challenge 6. Triangle Pattern

**Difficulty:** Medium

Write a Python program that prints the following right-angled triangle pattern using only print() statements and asterisk (*) characters.

**Constraints:**

- Use exactly 5 print() statements, one for each row. Do not use loops (you have not learned them yet).

**Sample input:**

```
(No input required)
```

**Sample output:**

```
*
* *
* * *
* * * *
* * * * *
```

**Solution:**

```python
print("*")
print("* *")
print("* * *")
print("* * * *")
print("* * * * *")
```

### Challenge 7. Add Comments to a Program

**Difficulty:** Medium

The following program has no comments. Rewrite it with a comment above each line explaining what it does:
`print("Welcome to Python!")
print(2 + 3)
print("Goodbye!")`

**Constraints:**

- Add at least one comment (starting with #) before each print statement. The output should remain the same as the original program.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Welcome to Python!
5
Goodbye!
```

**Solution:**

```python
# Print a welcome message to the user
print("Welcome to Python!")
# Calculate and print the sum of 2 and 3
print(2 + 3)
# Print a farewell message
print("Goodbye!")
```

### Challenge 8. Multiplication Table for 7

**Difficulty:** Hard

Write a Python program that prints the first 5 lines of the multiplication table for 7. Each line should show the multiplication expression and the result. Use Python to calculate the answers (do not hardcode them).

**Constraints:**

- Use print() with mathematical expressions. Do not calculate the answers yourself — let Python compute 7*1, 7*2, etc. You have not learned string formatting yet, so use separate print statements.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
```

**Solution:**

```python
print("7 x 1 =", 7 * 1)
print("7 x 2 =", 7 * 2)
print("7 x 3 =", 7 * 3)
print("7 x 4 =", 7 * 4)
print("7 x 5 =", 7 * 5)
```

### Challenge 9. Personal Introduction Card

**Difficulty:** Hard

Write a Python program that prints a neatly formatted personal introduction card inside a border. Include your name, age, city, favourite subject, and a fun fact about yourself.

**Constraints:**

- Use print() statements to create the border and content. The card should have at least 5 fields of personal information. Try to align the content neatly.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
+---------------------------+
|   INTRODUCTION CARD       |
+---------------------------+
| Name    : Rohan Mehta     |
| Age     : 14              |
| City    : Bangalore       |
| Subject : Computer Science|
| Fun Fact: I love chess!   |
+---------------------------+
```

**Solution:**

```python
print("+---------------------------+")
print("|   INTRODUCTION CARD       |")
print("+---------------------------+")
print("| Name    : Rohan Mehta     |")
print("| Age     : 14              |")
print("| City    : Bangalore       |")
print("| Subject : Computer Science|")
print("| Fun Fact: I love chess!   |")
print("+---------------------------+")
```

### Challenge 10. Mathematical Expressions Challenge

**Difficulty:** Hard

Write a Python program that calculates and prints the results of ALL of the following expressions, each on a separate line with a label:
1. The sum of all numbers from 1 to 5 (1+2+3+4+5)
2. 2 raised to the power of 16
3. The remainder when 100 is divided by 7
4. Integer division of 100 by 7 (whole number result only)
5. The result of (15 + 5) * (10 - 3) / 2

**Constraints:**

- Use Python operators to calculate each result. The % operator gives remainder, the // operator gives integer division, and ** gives exponentiation. Do not hardcode any answers.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Sum of 1 to 5 = 15
2 to the power 16 = 65536
100 mod 7 = 2
100 divided by 7 (integer) = 14
Expression result = 70.0
```

**Solution:**

```python
print("Sum of 1 to 5 =", 1 + 2 + 3 + 4 + 5)
print("2 to the power 16 =", 2 ** 16)
print("100 mod 7 =", 100 % 7)
print("100 divided by 7 (integer) =", 100 // 7)
print("Expression result =", (15 + 5) * (10 - 3) / 2)
```

---

*Notes: https://learn.modernagecoders.com/resources/python/introduction-to-python/*
