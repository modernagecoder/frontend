---
title: "How to Install Python and Set Up Your Environment - Step by Step Guide | Modern Age Coders"
description: "Learn how to download and install Python on Windows, set up the PATH, choose an IDE like VS Code or IDLE, and run your first Python file. A complete setup guide for beginners aged 10-16."
slug: installing-python-and-setup
canonical: https://learn.modernagecoders.com/resources/python/installing-python-and-setup
category: "Python"
keywords: ["how to install python", "python setup for beginners", "python IDE setup", "download python", "install python windows", "python PATH setup", "python IDLE tutorial", "VS Code python setup", "python for beginners setup", "python environment setup"]
---
# Installing Python and Setting Up Your Environment

**Difficulty:** Beginner  
**Reading time:** 15 min  
**Chapter:** 2  
**Practice questions:** 55

## What Is Python Installation and Environment Setup?

Before you can write and run Python programs on your computer, you need to do two things: **install Python** (the language itself) and **set up a code editor** (the tool where you will write your code). Think of it this way: if Python is a language like Hindi or English, then installing Python is like getting a dictionary and grammar book, and setting up a code editor is like getting a notebook and pen to write in that language.

When you install Python, you are downloading the **Python interpreter** onto your computer. The interpreter is the program that reads your Python code and tells the computer what to do. Without it, your computer has no idea what `print("Hello")` means.

The code editor (also called an **IDE** or **Integrated Development Environment**) is the application where you will type your Python code. While you could technically write Python code in Notepad, a proper IDE gives you helpful features like coloring your code, spotting errors before you run the program, and running your code with a single button click.

### What You Will Learn in This Chapter

- How to download Python from the official website
- How to install Python on Windows step by step
- What the PATH checkbox means and why it matters
- How to verify that Python is installed correctly
- How to choose and set up a code editor (IDLE, VS Code, PyCharm)
- How to create your first `.py` file
- How to run Python programs from the terminal and from IDLE

## Why Is Proper Setup Important?

Many beginners skip the setup process or rush through it, and then spend hours trying to figure out why their code does not work. A proper setup saves you from frustration later. Here is why each step matters:

### 1. Without Python Installed, Nothing Works

Your computer does not come with Python pre-installed (on Windows). Even if you write perfect Python code, your computer cannot run it unless the Python interpreter is installed. It is like having a letter written in French but no one in the room speaks French — the message goes unread.

### 2. PATH Configuration Prevents Headaches

The **PATH** is a setting that tells your computer where to find programs. If Python is not added to your PATH, you will have to type the full location of Python every time you want to run a program (something like `C:\Users\Aarav\AppData\Local\Programs\Python\Python312\python.exe hello.py` instead of just `python hello.py`). Adding Python to PATH during installation saves you from this tedious process.

### 3. A Good IDE Makes You More Productive

Imagine writing an essay by hand versus typing it on a computer with spell-check. A good IDE does for programming what spell-check does for writing. It highlights errors as you type, suggests completions, and lets you run and test your code without switching between applications. Choosing the right IDE from the start builds good habits.

### 4. Understanding the Terminal Gives You Power

The terminal (also called Command Prompt on Windows) is a text-based way to interact with your computer. Professional programmers use the terminal extensively. Learning to run Python from the terminal early on gives you skills that will be useful throughout your programming career.

### 5. First-Time Setup Is a One-Time Investment

You only need to install Python and set up your IDE once. After that, every time you want to write a new program, you simply open your editor, write your code, and run it. Spending 15-20 minutes on proper setup now saves hours of troubleshooting later.

## Detailed Explanation

### Step 1: Downloading Python

Python is available for free from the official website. Here is how to download it:

1. Open your web browser (Chrome, Edge, Firefox, etc.).
2. Go to the official Python website: **`https://www.python.org`**
3. On the homepage, you will see a yellow button that says **"Download Python 3.x.x"** (the x.x will be the latest version number, like 3.12.3).
4. Click that button. The download will start automatically.
5. The file that downloads will be named something like `python-3.12.3-amd64.exe` (on Windows).

**Important:** Always download Python from `python.org`. Do not download it from random websites, as those may contain modified or unsafe versions.

### Step 2: Installing Python on Windows (Step by Step)

Once the download is complete, follow these steps carefully:

1. **Find the downloaded file** in your Downloads folder and double-click it to start the installer.
2. **CRITICAL STEP: Check the box that says "Add python.exe to PATH"** at the bottom of the installer window. This is the most important step in the entire installation. If you miss this checkbox, you will face problems later when trying to run Python from the terminal.
3. Click **"Install Now"** (the recommended option). This installs Python with all the default settings, which are perfect for beginners.
4. Wait for the installation to complete. You will see a progress bar.
5. When you see the message **"Setup was successful"**, click **"Close"**.

#### What Does "Add to PATH" Mean?

Your computer has a list of folders where it looks for programs when you type a command. This list is called the **PATH environment variable**. When you type `python` in the terminal, your computer searches through all the folders in the PATH to find a program called `python`.

If you check the "Add to PATH" box during installation, the installer automatically adds Python's folder to this list. If you forget to check it, your computer will not know where to find Python when you type `python` in the terminal, and you will get an error like: `'python' is not recognized as an internal or external command`.

#### What If You Forgot to Check the PATH Box?

If you already installed Python without checking the PATH box, you have two options:

- **Option 1 (Recommended):** Uninstall Python, download the installer again, and reinstall — this time making sure to check the PATH box.
- **Option 2 (Advanced):** Manually add Python to PATH through System Environment Variables. This requires navigating to System Properties and editing the PATH variable.

### Step 3: Verifying Your Installation

After installation, you need to verify that Python is working correctly. Here is how:

1. Open the **Command Prompt**: Press the Windows key, type `cmd`, and press Enter.
2. Type the following command and press Enter:
`python --version`
3. You should see output like: `Python 3.12.3`

If you see the version number, congratulations — Python is installed correctly. If you see an error message like `'python' is not recognized`, it means Python was not added to your PATH (go back to the installation step and check the PATH box).

#### Additional Verification

You can also verify by opening the Python REPL. In the Command Prompt, type:

```
python
```

You should see the Python prompt (`>>>`), which means the interpreter is running. Type `exit()` to leave the REPL.

### Step 4: Choosing a Code Editor (IDE)

Now that Python is installed, you need a place to write your code. There are several options, each with its own advantages:

#### Option 1: IDLE (Built-In)

IDLE comes pre-installed with Python, so you already have it. IDLE stands for **Integrated Development and Learning Environment**. It was created specifically for beginners learning Python.

**How to open IDLE:**

1. Press the Windows key and type **IDLE**.
2. Click on **"IDLE (Python 3.x)"** from the results.
3. The **Python Shell** window opens. This is similar to the REPL — you can type Python commands and see results immediately.
4. To write a full program, go to **File > New File**. This opens a new editor window where you can write multiple lines of code.
5. After writing your code, save the file with **File > Save** (give it a `.py` extension).
6. Run the file with **Run > Run Module** (or press **F5**).

**Advantages of IDLE:**

- Already installed — no extra download needed
- Simple and not overwhelming for beginners
- Syntax highlighting (colors different parts of your code)
- Integrated Python Shell for quick testing

**Limitations of IDLE:**

- Very basic compared to modern editors
- No advanced features like auto-complete or integrated terminal
- Most professional developers do not use IDLE

#### Option 2: Visual Studio Code (VS Code) — Recommended

VS Code is a free, powerful code editor made by Microsoft. It is the most popular code editor in the world and is used by millions of professional developers.

**How to set up VS Code for Python:**

1. Go to **`https://code.visualstudio.com`** and download VS Code.
2. Install it by running the downloaded file (follow the on-screen instructions).
3. Open VS Code.
4. Install the **Python extension**: Click the Extensions icon on the left sidebar (it looks like four squares), search for "Python", and install the one by Microsoft.
5. Create a new file: **File > New File**, then save it with a `.py` extension (for example, `hello.py`).
6. Write your Python code in the file.
7. Run it by clicking the **play button** (triangle icon) in the top-right corner, or by pressing **Ctrl + F5**.

**Advantages of VS Code:**

- Free and lightweight
- Excellent Python support with the Python extension
- IntelliSense (smart auto-completion)
- Built-in terminal
- Thousands of extensions for added features
- Used by professional developers worldwide

#### Option 3: PyCharm

PyCharm is an IDE made by JetBrains specifically for Python development. It comes in two versions: **Community Edition** (free) and **Professional Edition** (paid).

**Advantages of PyCharm:**

- Designed specifically for Python
- Powerful debugging tools
- Excellent code analysis and error detection

**Limitations for beginners:**

- Heavier (uses more computer memory than VS Code)
- Can feel overwhelming with too many features
- Slower to start up

For this course, we recommend starting with **IDLE** for the first few chapters (since it is already installed) and then switching to **VS Code** once you are comfortable.

### Step 5: Creating Your First .py File

Let us create your very first Python file:

1. Open your chosen code editor (IDLE or VS Code).
2. Create a new file.
3. Type the following code:
`print("Hello, World!")`
4. Save the file as **`hello.py`** in a folder you can easily find (for example, create a folder called `PythonProjects` on your Desktop).
5. Run the file (F5 in IDLE, or Ctrl + F5 in VS Code).
6. You should see the output: `Hello, World!`

**File naming rules:**

- Always use the `.py` extension
- Use lowercase letters
- Use underscores instead of spaces: `my_program.py` (not `my program.py`)
- Do not start the filename with a number: `game_v2.py` (not `2_game.py`)
- Use descriptive names: `calculator.py` is better than `abc.py`

### Step 6: Running Python from the Terminal

While running code from an IDE is convenient, knowing how to run Python from the terminal is an essential skill. Here is how:

1. Open the **Command Prompt** (press Windows key, type `cmd`, press Enter).
2. **Navigate to the folder** where your `.py` file is saved. For example, if it is on your Desktop in a folder called PythonProjects:
`cd Desktop\PythonProjects`
3. Run your Python file by typing:
`python hello.py`
4. You should see the output: `Hello, World!`

#### Useful Terminal Commands

- `python --version` — Check which version of Python is installed
- `python` — Open the Python REPL (interactive mode)
- `python filename.py` — Run a Python file
- `cd foldername` — Navigate into a folder
- `cd ..` — Go back to the parent folder
- `dir` — List all files in the current folder (Windows)
- `cls` — Clear the terminal screen (Windows)

### Step 7: IDLE Walkthrough

Since IDLE comes built-in with Python, let us do a detailed walkthrough of how to use it:

#### The Shell Window

When you first open IDLE, you see the **Shell window**. This is the interactive mode where you can type Python commands after the `>>>` prompt. It works exactly like the REPL you learned about in Chapter 1. Try typing `2 + 3` and press Enter — you should see `5` immediately.

#### The Editor Window

For writing full programs (multiple lines of code that you want to save), use the Editor window:

1. In IDLE, go to **File > New File**.
2. A new blank window opens — this is the Editor.
3. Type your program here.
4. Save it with **File > Save** (Ctrl + S).
5. Run it with **Run > Run Module** (F5).
6. The output appears in the Shell window.

#### Key IDLE Features

- **Syntax Highlighting:** Keywords like `print` are shown in purple, strings in green, and comments in red.
- **Auto-Indent:** IDLE automatically adds indentation where needed (you will appreciate this when you learn about loops and conditions).
- **Call Tips:** When you type a function name followed by `(`, IDLE shows you what arguments the function expects.

## Code Examples

### Checking Your Python Version

```python
# In the Command Prompt (terminal), type:
# python --version

# You can also check from inside Python:
import sys
print(sys.version)
```

The `python --version` command is typed in the terminal (Command Prompt), not inside a Python file. It shows the installed Python version. You can also check the version from inside a Python program using the `sys` module, which gives more detailed information including the build date.

**Output:**

```
3.12.3 (tags/v3.12.3:f6650f9, Apr  9 2024, 18:05:18) [MSC v.1938 64 bit (AMD64)]
```

### Running a Simple Python File from Terminal

```python
# Step 1: Create a file called greet.py with this content:
print("Hello! My name is Ananya.")
print("I am learning Python.")
print("This is my first program!")

# Step 2: Open Command Prompt
# Step 3: Navigate to the file location: cd Desktop\PythonProjects
# Step 4: Run it: python greet.py
```

This example shows the complete workflow of creating a Python file, saving it, and running it from the terminal. The file contains three `print()` statements that execute from top to bottom. The terminal command `python greet.py` tells the Python interpreter to read and execute the file.

**Output:**

```
Hello! My name is Ananya.
I am learning Python.
This is my first program!
```

### Using IDLE Shell for Quick Calculations

```python
>>> 45 + 78
123
>>> 1000 - 347
653
>>> 12 * 15
180
>>> 144 / 12
12.0
>>> 2 ** 20
1048576
```

The IDLE Shell lets you type Python expressions directly after the `>>>` prompt. Each expression is evaluated immediately and the result is shown on the next line. This is perfect for quick calculations and testing small pieces of code. Notice that division (/) always gives a decimal result in Python 3.

**Output:**

```
(Results appear immediately after each expression as shown above)
```

### Creating and Saving a .py File

```python
# File: my_info.py
# This is my first saved Python program

print("=== My Information ===")
print("Name: Rahul Verma")
print("Class: 8th Standard")
print("School: Delhi Public School")
print("Favourite Subject: Computer Science")
print("=======================")
```

This program demonstrates a complete `.py` file with comments and multiple print statements. The file is named `my_info.py` — notice the `.py` extension, the lowercase letters, and the underscore instead of a space. Comments at the top explain what the program does.

**Output:**

```
=== My Information ===
Name: Rahul Verma
Class: 8th Standard
School: Delhi Public School
Favourite Subject: Computer Science
=======================
```

### Verifying Python and pip Installation

```python
# In the Command Prompt, run these commands:
# python --version
# pip --version

# If both work, your installation is correct.
# pip is Python's package manager — it lets you install
# additional libraries later.

# You can also test Python works by running:
print("Python is working correctly!")
print("Installation successful!")
```

`pip` is a tool that comes bundled with Python. It is the **package manager** that lets you install additional libraries (like pygame for games, or pandas for data analysis) later in your learning journey. If both `python --version` and `pip --version` show version numbers without errors, your installation is complete and correct.

**Output:**

```
Python is working correctly!
Installation successful!
```

### Checking Where Python Is Installed

```python
# You can find out where Python is installed on your computer:
import sys
print("Python is installed at:")
print(sys.executable)

import os
print("\nPython's home directory:")
print(os.path.dirname(sys.executable))
```

The `sys.executable` attribute tells you the exact location of the Python interpreter on your computer. This is useful for troubleshooting when you have multiple Python versions installed or when you need to confirm that the correct version is being used. On Windows, this is typically something like `C:\Users\YourName\AppData\Local\Programs\Python\Python312\python.exe`.

**Output:**

```
Python is installed at:
C:\Users\Ananya\AppData\Local\Programs\Python\Python312\python.exe

Python's home directory:
C:\Users\Ananya\AppData\Local\Programs\Python\Python312
```

### Running Python in Interactive Mode vs Script Mode

```python
# INTERACTIVE MODE (REPL / IDLE Shell):
# You type one line at a time and see results immediately
# >>> 5 + 3
# 8
# >>> print("Hello")
# Hello

# SCRIPT MODE (running a .py file):
# You write multiple lines in a file and run them all at once
# File: script_example.py
result = 5 + 3
print("The result is:", result)
print("This ran from a script file!")
```

Python can be used in two modes. **Interactive mode** (the REPL or IDLE Shell) is great for testing small pieces of code — you type a line, see the result, type another line. **Script mode** is when you write a complete program in a `.py` file and run the entire file at once. For real programs, you will almost always use script mode.

**Output:**

```
The result is: 8
This ran from a script file!
```

## Common Mistakes

### Forgetting to Check 'Add Python to PATH' During Installation

**Wrong:**

```
# In Command Prompt after installation:
C:\Users\Aarav> python hello.py
```

'python' is not recognized as an internal or external command, operable program or batch file.

**Correct:**

```
# Solution: Uninstall Python, reinstall with the PATH checkbox checked
# Then try again:
C:\Users\Aarav> python hello.py
Hello, World!
```

This is the most common installation problem. When you see `'python' is not recognized`, it almost always means Python was installed without adding it to the PATH. The easiest fix is to uninstall Python completely, download the installer again, and this time make absolutely sure to check the **"Add python.exe to PATH"** checkbox at the bottom of the first installer screen before clicking Install Now.

### Saving Python Files Without the .py Extension

**Wrong:**

```
# Saved file as: hello (no extension)
# Or saved as: hello.txt

# Trying to run:
python hello
```

can't open file 'C:\Users\Riya\hello': [Errno 2] No such file or directory
(or the file opens in Notepad instead of running as Python)

**Correct:**

```
# Save the file as: hello.py
# Then run:
python hello.py
```

Python files must have the `.py` extension. When you save a file in your editor, make sure the filename ends with `.py`. In some editors (like Notepad), you may need to change the "Save as type" dropdown from "Text Documents (*.txt)" to "All Files (*.*)" and manually type `.py` at the end of the filename. In IDLE and VS Code, this is handled automatically if you type the `.py` extension.

### Running Python Commands in the Wrong Place

**Wrong:**

```
# Inside the Python REPL (you see >>>):
>>> python hello.py
```

SyntaxError: invalid syntax

**Correct:**

```
# The command 'python hello.py' is a TERMINAL command, not Python code.
# In the REPL, you type Python code directly:
>>> print("Hello, World!")
Hello, World!

# To run a file, exit the REPL first with exit()
# Then in the terminal (not REPL), type:
python hello.py
```

This is a very common mistake for beginners. The `python hello.py` command must be typed in the **terminal (Command Prompt)**, not inside the Python REPL. If you see the `>>>` prompt, you are inside Python. Type `exit()` first to go back to the terminal, and then type `python hello.py`. The terminal prompt looks like `C:\Users\YourName>`, not `>>>`.

### Not Navigating to the Correct Folder Before Running

**Wrong:**

```
# File is saved at: C:\Users\Meera\Desktop\PythonProjects\hello.py
# But terminal is at: C:\Users\Meera>

C:\Users\Meera> python hello.py
```

can't open file 'C:\Users\Meera\hello.py': [Errno 2] No such file or directory

**Correct:**

```
# Navigate to the correct folder first:
C:\Users\Meera> cd Desktop\PythonProjects
C:\Users\Meera\Desktop\PythonProjects> python hello.py
Hello, World!
```

When you type `python hello.py`, the terminal looks for `hello.py` in the **current folder**. If the file is in a different folder, the terminal cannot find it. You must first navigate to the folder where your file is saved using the `cd` (change directory) command. Alternatively, you can provide the full file path: `python C:\Users\Meera\Desktop\PythonProjects\hello.py`.

### Using python3 Command on Windows

**Wrong:**

```
# On Windows Command Prompt:
C:\Users\Vikram> python3 --version
```

'python3' is not recognized as an internal or external command, operable program or batch file.
(On some Windows systems, this may open the Microsoft Store instead)

**Correct:**

```
# On Windows, use 'python' (not 'python3'):
C:\Users\Vikram> python --version
Python 3.12.3
```

On Windows, the command is usually `python`, not `python3`. The `python3` command is mainly used on Linux and macOS where both Python 2 and Python 3 might be installed. On Windows, if you installed Python 3 from python.org, the command `python` already points to Python 3. If typing `python3` on Windows opens the Microsoft Store, simply use `python` instead.

## Summary

- Python must be downloaded from the official website (python.org) and installed on your computer before you can write and run programs.
- During installation on Windows, always check the 'Add python.exe to PATH' checkbox. This is the most important step in the installation process.
- Verify your installation by opening Command Prompt and typing 'python --version'. You should see the version number (like Python 3.12.3).
- PATH is an environment variable that tells your computer where to find programs. Adding Python to PATH lets you run Python from any folder in the terminal.
- IDLE is Python's built-in editor that comes free with every Python installation. It has a Shell (interactive mode) and an Editor (for writing full programs).
- VS Code is a free, professional-grade editor by Microsoft. Install the Python extension for the best experience. It is recommended for learners who want a modern setup.
- PyCharm is a powerful Python-specific IDE but can feel heavy for beginners. The free Community Edition is available for students.
- Python files must be saved with the .py extension. Use lowercase names with underscores (e.g., my_program.py).
- You can run Python in two modes: interactive mode (REPL/Shell) for quick testing, and script mode (running .py files) for full programs.
- To run a Python file from the terminal, navigate to the file's folder with 'cd' and then type 'python filename.py'.
- pip is Python's package manager that comes bundled with Python. You will use it later to install additional libraries.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/python/installing-python-and-setup/*
*Practice questions: https://learn.modernagecoders.com/resources/python/installing-python-and-setup/practice/*
