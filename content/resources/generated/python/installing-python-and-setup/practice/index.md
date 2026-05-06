---
title: "Practice: Installing Python and Setting Up Your Environment"
description: "55 practice problems for Installing Python and Setting Up Your Environment in Python"
slug: installing-python-and-setup-practice
canonical: https://learn.modernagecoders.com/resources/python/installing-python-and-setup/practice
category: "Python"
---
# Practice: Installing Python and Setting Up Your Environment

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] What command shows your Python version?

```
python --version
```

What does this output look like?

*Hint:* The --version flag works for most tools.

**Answer:** Something like: Python 3.12.0

python --version (or python3 --version on Mac/Linux) shows the installed Python version. The output format is "Python X.Y.Z".

### Q2. [Easy] What is the output?

```
import sys
print(sys.version_info.major)
print(sys.version_info.minor)
```

*Hint:* sys.version_info gives version details.

**Answer:** 3
12 (or your minor version)

sys.version_info.major returns the major version (3 for Python 3.x). sys.version_info.minor returns the minor version (like 12 for Python 3.12).

### Q3. [Easy] What is the output of running this in terminal?

```
python3 -c "print(2 ** 8)"
```

*Hint:* The -c flag runs a Python command directly.

**Answer:** 256

python3 -c lets you run Python code directly from the terminal without creating a file. 2**8 = 256.

### Q4. [Easy] What is the output?

```
import os
print(os.getcwd())
```

*Hint:* os.getcwd() returns the current working directory.

**Answer:** Prints the current directory path, e.g., C:UsersAaravprojects

os.getcwd() returns the absolute path of the current working directory as a string. This is useful to know where your script is running from.

### Q5. [Easy] You save this code as test.py:

```
print("Setup works!")
print(2 + 3)
```

What is the output when you run: python test.py?

*Hint:* Each print statement outputs on a new line.

**Answer:** Setup works!
5

Python executes the file line by line. First it prints "Setup works!", then calculates 2+3=5 and prints it.

### Q6. [Easy] What is the output?

```
import keyword
print(len(keyword.kwlist))
print("for" in keyword.kwlist)
print("print" in keyword.kwlist)
```

*Hint:* keyword.kwlist contains all Python reserved words.

**Answer:** 35 (approximately)
True
False

keyword.kwlist is a list of all Python keywords. "for" is a keyword (True). "print" is a built-in function, not a keyword (False).

### Q7. [Medium] What is the output?

```
import this
```

What does this module print?

*Hint:* This is a famous Python Easter egg.

**Answer:** The Zen of Python - a poem about Python philosophy

import this prints "The Zen of Python" by Tim Peters - guiding principles like "Beautiful is better than ugly" and "Simple is better than complex".

### Q8. [Medium] What happens when you run this file named hello.txt?

```
# Saved as hello.txt
print("Hello World")
```

Command: python hello.txt

*Hint:* Python can run any text file with valid Python code.

**Answer:** It works! Prints: Hello World

Python does not require .py extension to run a file. It reads the content regardless of extension. However, .py is the convention and IDEs expect it.

### Q9. [Medium] What is the output?

```
x = 10
print(type(x).__name__)
x = "hello"
print(type(x).__name__)
```

*Hint:* __name__ gives the type name as a string.

**Answer:** int
str

In Python, variables can change type. First x is 10 (int), then x becomes "hello" (str). This is called dynamic typing.

### Q10. [Medium] Write a one-line Python command that prints all even numbers from 2 to 20.

*Hint:* Use range() with step parameter and print().

**Answer:** print(list(range(2, 21, 2)))

range(2, 21, 2) generates 2, 4, 6, ..., 20. The third argument is the step size. list() converts it to a printable list.

### Q11. [Medium] What is the output?

```
print("Hello"[::-1])
```

*Hint:* [::-1] reverses a string.

**Answer:** olleH

The slice [::-1] means start from end, go backwards with step -1. This reverses the string "Hello" to "olleH".

### Q12. [Medium] What is the output?

```
a = 5
b = 2
print(a / b)
print(a // b)
print(a % b)
print(a ** b)
```

*Hint:* Four different operators on the same numbers.

**Answer:** 2.5
2
1
25

5/2=2.5 (true division), 5//2=2 (floor division), 5%2=1 (remainder), 5**2=25 (power). Know all four!

### Q13. [Hard] Priya installed Python on her Windows computer but did not check the 'Add to PATH' checkbox. When she types 'python' in Command Prompt, she gets an error. Explain what happened and describe two ways to fix it.

*Hint:* One fix involves reinstalling. The other involves manually editing system settings.

**Answer:** The error occurs because the **Command Prompt cannot find the Python executable** — Python's folder is not listed in the system PATH variable. **Fix 1:** Uninstall Python completely, download the installer again, and reinstall while checking the 'Add python.exe to PATH' checkbox. **Fix 2:** Manually add Python's installation path to the PATH environment variable through System Properties > Environment Variables.

When Priya types 'python', Windows searches through all folders listed in the PATH variable. Since Python's folder is not there, Windows cannot find the python.exe file and reports that the command is not recognized. The reinstallation method is simpler and recommended for beginners. The manual method requires navigating to Control Panel > System > Advanced System Settings > Environment Variables, finding the PATH variable, and adding Python's installation directory.

### Q14. [Hard] Arjun created a file called 'my program.py' (with a space in the name). What problem might he face when running it from the terminal, and how should he fix it?

*Hint:* Spaces in filenames cause issues in terminal commands.

**Answer:** When Arjun types `python my program.py`, the terminal interprets `my` and `program.py` as two separate arguments instead of one filename. Python will try to run a file called `my` (which does not exist) and show an error. **Fix:** Rename the file to use an underscore instead of a space: `my_program.py`. Alternatively, he could use quotes: `python "my program.py"`.

Terminal commands use spaces to separate different parts of a command. So 'python my program.py' is interpreted as: run Python with arguments 'my' and 'program.py'. The best practice is to never use spaces in Python filenames. Use underscores instead: my_program.py, calculator_app.py, etc.

### Q15. [Hard] What are the advantages and disadvantages of using IDLE versus VS Code for Python development?

*Hint:* Think about simplicity versus power, and built-in versus requires installation.

**Answer:** **IDLE advantages:** Pre-installed with Python, simple interface, good for beginners, lightweight. **IDLE disadvantages:** Basic features, no built-in terminal, no extensions, not used professionally. **VS Code advantages:** Professional-grade, powerful extensions, IntelliSense, built-in terminal, used by millions of developers. **VS Code disadvantages:** Requires separate download, needs Python extension, can feel overwhelming for absolute beginners.

There is no single 'best' editor — it depends on your needs. IDLE is like training wheels on a bicycle: simple and perfect for getting started. VS Code is like a professional bicycle: more features and capabilities, but requires a bit more setup. Most learners start with IDLE for the first week or two and then switch to VS Code.

### Q16. [Easy] Write a Python program that prints 'Python is installed!' and save it as a .py file. What command would you type in the terminal to run this file if it is named check.py?

*Hint:* Use print() for the code. The terminal command starts with 'python'.

**Answer:** ```
print("Python is installed!")
```

Terminal command: `python check.py`

The program is a single print() statement saved in a file called check.py. To run it from the terminal, you type 'python check.py'. Make sure your terminal is in the same folder as the file, or navigate there first using the 'cd' command.

### Q17. [Hard] Sanya has Python 3.12 installed on her Windows computer. She reads an online tutorial that says to type 'python3' in the terminal. When she does, the Microsoft Store opens instead. Explain why this happens and what she should do.

*Hint:* Windows handles the 'python3' command differently than Linux or macOS.

**Answer:** On Windows, the command `python3` is not the standard way to run Python. Windows has a built-in app execution alias that redirects `python3` to the Microsoft Store to encourage you to install Python from there. Sanya should simply use `python` instead of `python3`. Her Python 3.12 installation responds to the `python` command.

On Linux and macOS, both Python 2 and Python 3 might coexist, so 'python3' is used to specify version 3. On Windows, this is usually not needed because the 'python' command already points to Python 3. The Microsoft Store redirect is a Windows feature that can be disabled in Settings > Apps > Advanced app settings > App execution aliases.

### Q18. [Hard] What is the difference between a text editor (like Notepad) and an IDE (like VS Code or PyCharm)? List at least four features an IDE provides that a basic text editor does not.

*Hint:* An IDE is a text editor with many extra programming-specific features built in.

**Answer:** A **text editor** (like Notepad) is a basic tool that lets you type and save text — it has no programming-specific features. An **IDE** provides programming features on top of text editing. Four additional features: (1) **Syntax highlighting** — colors code elements differently, (2) **Auto-completion** — suggests code as you type, (3) **Error detection** — highlights mistakes before you run the code, (4) **Built-in terminal** — lets you run code without leaving the editor. Other features include debugging tools, file navigation, version control integration, and code formatting.

Using Notepad to write Python code is like writing a school essay on a plain piece of paper — it works, but you have no spell-check, no grammar suggestions, and no formatting tools. An IDE is like using a word processor (Google Docs or MS Word) — it provides tools that make writing faster, catch mistakes early, and help you organize your work.

## Mixed Questions

### Q1. [Easy] Why is it recommended to create a dedicated folder (like PythonProjects) for your Python files instead of saving them directly on the Desktop?

*Hint:* Think about organization and finding files easily.

**Answer:** Creating a dedicated folder keeps your files **organized and easy to find**. As you write more programs, you will have dozens or hundreds of .py files. Without a proper folder structure, your Desktop becomes cluttered and finding a specific file becomes difficult. It also makes it easier to navigate to the folder in the terminal.

Professional developers always organize their code into project folders. A good habit from the start is to create a main folder (like PythonProjects) and then create sub-folders for different projects or topics (like Basics, Games, Practice). This organization becomes essential as your projects grow in size.

### Q2. [Easy] What keyboard shortcut do you press to run a Python file in IDLE?

*Hint:* It is a function key at the top of your keyboard.

**Answer:** Press **F5** to run a Python file in IDLE (or go to Run > Run Module).

F5 is the shortcut for 'Run Module' in IDLE. When you press F5, IDLE first saves the file (if there are unsaved changes, it asks you to save), and then executes the entire file. The output appears in the Shell window.

### Q3. [Medium] Karan types '5 + 3' in a Python script file (.py file) and runs it. He sees no output. But when he types '5 + 3' in the IDLE Shell, he sees 8. Why is there a difference?

*Hint:* The REPL/Shell automatically displays results of expressions. Script mode does not.

**Answer:** In **interactive mode** (IDLE Shell/REPL), the result of every expression is automatically displayed on screen. In **script mode** (.py files), expressions are evaluated but their results are **not displayed unless you use print()**. To see the output in a script file, Karan should write `print(5 + 3)`.

This is a key difference between interactive and script mode. The Shell is designed for quick experimentation, so it shows results automatically. Script files are designed for full programs where you explicitly choose what to display using print(). Writing just '5 + 3' in a script is valid Python — it calculates 8 — but since you did not tell Python to print it, the result is calculated and immediately discarded.

### Q4. [Medium] What terminal command lists all files in the current folder on Windows?

*Hint:* It is a three-letter command.

**Answer:** The command `dir` lists all files and folders in the current directory on Windows.

The 'dir' command (short for 'directory') is useful when you want to check if your Python file is in the current folder before running it. On Linux and macOS, the equivalent command is 'ls'. If you do not see your .py file in the list, you need to navigate to the correct folder first.

### Q5. [Medium] What extension do you need to install in VS Code to get Python support? Who developed it?

*Hint:* The extension is simply called 'Python' and it is made by the same company that made VS Code.

**Answer:** You need to install the **Python extension**, developed by **Microsoft**.

VS Code is a general-purpose editor that supports many languages through extensions. The Python extension by Microsoft adds features like syntax highlighting for Python, IntelliSense (auto-completion), linting (error checking), debugging, and the ability to run Python files. Without this extension, VS Code treats Python files as plain text.

### Q6. [Medium] Why do Python file names use underscores instead of spaces (e.g., my_program.py instead of my program.py)?

*Hint:* Think about what happens when you type the filename in the terminal.

**Answer:** Spaces in filenames cause problems in the terminal because the terminal uses spaces to separate different parts of a command. If you type `python my program.py`, the terminal thinks `my` and `program.py` are separate arguments. Underscores avoid this problem entirely.

This is a convention followed by almost all programmers, not just Python developers. Underscores work everywhere without issues: in the terminal, in import statements, in URLs, and across different operating systems. Other alternatives include using hyphens (my-program.py) or camelCase (myProgram.py), but underscores are the Python community standard.

### Q7. [Easy] Write the exact terminal commands you would type to: (1) navigate to a folder called MyCode on the Desktop, (2) check if Python is installed, and (3) run a file called test.py.

*Hint:* Use cd to navigate, python --version to check, and python filename to run.

**Answer:** ```
cd Desktop\MyCode
python --version
python test.py
```

These three commands demonstrate the basic terminal workflow. 'cd Desktop\MyCode' navigates to the folder. 'python --version' verifies Python is installed and shows the version. 'python test.py' runs the Python file. Each command is typed separately and you press Enter after each one.

### Q8. [Hard] Neha has both Python 3.10 and Python 3.12 installed on her Windows computer. When she types 'python --version', it shows 3.10. How can she run her code using Python 3.12 instead?

*Hint:* There is a tool called the Python Launcher that helps manage multiple versions.

**Answer:** On Windows, she can use the **Python Launcher** with the command `py -3.12 script.py` to specify the exact version. She can also use `py -3.12 --version` to confirm. Alternatively, she can modify the PATH variable to put Python 3.12's folder before Python 3.10's folder, so that `python` points to 3.12 by default.

The Python Launcher (py.exe) is installed on Windows alongside Python. It lets you choose which Python version to use with the -3.X flag. Running 'py -0' lists all installed Python versions. For most beginners, having only one Python version installed avoids this complexity entirely.

### Q9. [Hard] Explain why IDLE shows different colors for different parts of your code. What is this feature called, and why is it useful?

*Hint:* The feature has two words: one is 'syntax' and the other describes making text visible.

**Answer:** This feature is called **syntax highlighting**. IDLE uses different colors to distinguish different types of code elements: keywords (like `print`) are shown in purple/orange, strings (text in quotes) in green, comments in red, and regular code in black. It is useful because it helps you **visually identify errors** — for example, if you forget to close a string with a quote, the color of the text after the opening quote will be wrong, alerting you to the mistake.

Syntax highlighting is one of the most important features of any code editor. It makes code much easier to read because your brain can quickly distinguish between keywords, variables, strings, and comments based on color. Without syntax highlighting, reading code is like reading a textbook with no headings, bold text, or formatting — technically possible, but much harder.

### Q10. [Hard] Rohan sees two options during Python installation: 'Install Now' and 'Customize installation'. What is the difference, and which should a beginner choose?

*Hint:* One uses default settings, the other lets you change where and what is installed.

**Answer:** **'Install Now'** installs Python with all the default settings (including IDLE, pip, and the standard library) to a default location. **'Customize installation'** lets you choose which components to install, pick a different installation folder, and configure advanced options. **Beginners should choose 'Install Now'** because the default settings are appropriate for learning and include everything needed.

The 'Customize installation' option is for advanced users who need to install Python in a specific location (like a company server), exclude certain components, or install for all users on a shared computer. The default 'Install Now' includes everything: the interpreter, IDLE, pip, the standard library, and documentation. There is no reason for a beginner to customize the installation.

### Q11. [Medium] After installing VS Code, Meera opens a .py file but the code is all one color (no syntax highlighting). What did she most likely forget to do?

*Hint:* VS Code needs something extra to understand Python files properly.

**Answer:** She most likely forgot to install the **Python extension** in VS Code. Without the Python extension, VS Code does not have Python-specific features like syntax highlighting, auto-completion, or the ability to run Python files with a play button.

VS Code is a general-purpose editor that relies on extensions for language-specific features. When you first install VS Code, it does not know how to handle Python files intelligently. Installing the Python extension (by Microsoft) adds Python support. VS Code may also prompt you to install the extension automatically when you open a .py file for the first time.

### Q12. [Hard] Write a Python program that displays where Python is installed on the computer. Use the sys module.

*Hint:* Import sys and use sys.executable.

**Answer:** ```
import sys
print("Python is installed at:")
print(sys.executable)
```

The sys module is a built-in Python module that gives you information about the Python interpreter. sys.executable returns the full path to the Python executable (python.exe on Windows). This is useful for troubleshooting when you are not sure which Python installation is being used.

## Multiple Choice Questions

### Q1. [Easy] What is the official website to download Python?

A. python.com
B. python.org
C. downloadpython.com
D. python.net

**Answer:** B

**B is correct.** The official Python website is python.org, managed by the Python Software Foundation. python.com is a different website not related to the Python programming language. The other options are not official Python download sites.

### Q2. [Easy] What happens if you do not check 'Add Python to PATH' during installation?

A. Python installs without IDLE
B. Python does not install at all
C. The terminal cannot find the 'python' command
D. Python installs in a different language

**Answer:** C

**C is correct.** Without adding Python to PATH, the terminal does not know where to find the python executable, so commands like 'python --version' and 'python hello.py' will fail. Python still installs successfully (Option B is wrong), IDLE is still included (Option A is wrong), and the installation language is unaffected (Option D is wrong).

### Q3. [Easy] Which command checks the installed Python version in the terminal?

A. python -v
B. python --version
C. python /version
D. python check

**Answer:** B

**B is correct.** The correct flag is --version (two dashes). Option A (-v) activates verbose mode, not version checking. Options C and D are not valid Python command-line arguments.

### Q4. [Easy] Which of the following comes pre-installed with Python?

A. VS Code
B. PyCharm
C. IDLE
D. Sublime Text

**Answer:** C

**C is correct.** IDLE (Integrated Development and Learning Environment) comes bundled with every Python installation. VS Code, PyCharm, and Sublime Text are separate applications that need to be downloaded and installed independently.

### Q5. [Easy] What is the correct file extension for Python source code?

A. .python
B. .pyt
C. .py
D. .p

**Answer:** C

**C is correct.** Python source code files always use the .py extension. The other extensions (.python, .pyt, .p) are not standard Python file extensions and will not be recognized by the Python interpreter or code editors.

### Q6. [Easy] What keyboard shortcut runs a Python program in IDLE?

A. Ctrl + R
B. F5
C. Ctrl + Enter
D. F9

**Answer:** B

**B is correct.** In IDLE, pressing F5 runs the current file (it is the shortcut for Run > Run Module). Ctrl + R, Ctrl + Enter, and F9 do not run programs in IDLE.

### Q7. [Medium] What is the PATH environment variable?

A. The folder where Python files are saved
B. A list of folders where the OS searches for executable programs
C. The installation directory of Python
D. The file path of a Python script

**Answer:** B

**B is correct.** PATH is an environment variable that contains a list of directory paths. When you type a command in the terminal, the OS searches these directories to find the executable. Option A describes a project folder. Option C describes one specific folder. Option D describes a single file location.

### Q8. [Medium] Which of the following is the best Python filename?

A. My Program.py
B. my-program.PY
C. my_program.py
D. 2nd_program.py

**Answer:** C

**C is correct.** Python file naming conventions recommend: lowercase letters, underscores instead of spaces, and the .py extension (lowercase). Option A has a space (causes terminal issues). Option B uses hyphens (can cause issues with Python imports) and uppercase extension. Option D starts with a number (while this works for standalone scripts, it is not recommended and fails as a module name).

### Q9. [Medium] What command do you type in the terminal to navigate to a folder called Projects?

A. go Projects
B. navigate Projects
C. open Projects
D. cd Projects

**Answer:** D

**D is correct.** 'cd' stands for 'change directory' and is the universal command for navigating between folders in the terminal. The commands 'go', 'navigate', and 'open' are not standard terminal commands for folder navigation.

### Q10. [Medium] What tool is used to install additional Python libraries like pygame or pandas?

A. npm
B. pip
C. apt
D. brew

**Answer:** B

**B is correct.** pip is Python's official package manager. It comes pre-installed with Python. npm is the package manager for Node.js/JavaScript. apt is a package manager for Linux (Debian/Ubuntu). brew (Homebrew) is a package manager for macOS.

### Q11. [Medium] In IDLE, what does the >>> symbol represent?

A. An error message
B. A comment
C. The interactive prompt waiting for input
D. The output of a program

**Answer:** C

**C is correct.** The >>> symbol is the Python interactive prompt. It appears in the REPL and IDLE Shell, indicating that Python is ready and waiting for you to type a command. It is not an error (Option A), not a comment (Option B), and not output (Option D).

### Q12. [Medium] Which IDE is specifically designed for Python development?

A. VS Code
B. Sublime Text
C. PyCharm
D. Atom

**Answer:** C

**C is correct.** PyCharm is built specifically for Python development by JetBrains. VS Code (Option A) and Sublime Text (Option B) are general-purpose editors that support many languages. Atom (Option D) was also a general-purpose editor (now discontinued). While all of them can be used for Python, only PyCharm was designed exclusively for it.

### Q13. [Hard] What error do you see if Python is not in your PATH and you type 'python' in Command Prompt?

A. SyntaxError: invalid syntax
B. ModuleNotFoundError: No module named 'python'
C. 'python' is not recognized as an internal or external command
D. PermissionError: access denied

**Answer:** C

**C is correct.** This Windows-specific error message means the system cannot find any program called 'python' in the directories listed in PATH. Option A is a Python error (only appears when Python is running). Option B is a Python import error. Option D would occur only if you do not have permission to run the program.

### Q14. [Hard] What happens when you type 'python hello.py' inside the Python REPL (after the >>> prompt)?

A. It runs the file hello.py successfully
B. It shows a SyntaxError
C. It opens the file in a text editor
D. It downloads the file from the internet

**Answer:** B

**B is correct.** Inside the Python REPL, Python tries to interpret 'python hello.py' as Python code. 'python' is treated as a variable name and 'hello.py' is invalid syntax, resulting in a SyntaxError. The command 'python hello.py' is a terminal/shell command, not Python code. You must exit the REPL first (type exit()) and then type the command in the terminal.

### Q15. [Hard] On Windows, what happens if you type 'python3' in Command Prompt?

A. It opens Python 3
B. It shows an error because the command does not exist on Windows
C. It may open the Microsoft Store
D. Both B and C are possible depending on settings

**Answer:** D

**D is correct.** On Windows, the behavior of 'python3' depends on your system settings. By default, Windows has app execution aliases that redirect 'python3' to the Microsoft Store (Option C). If those aliases are disabled, you get a 'not recognized' error (Option B). On Windows, the correct command is simply 'python', which runs Python 3 if you installed it from python.org.

### Q16. [Hard] Which of the following is NOT a valid reason to prefer VS Code over IDLE?

A. VS Code has a built-in terminal
B. VS Code supports extensions for added functionality
C. VS Code can run Python without the Python interpreter installed
D. VS Code provides IntelliSense (smart auto-completion)

**Answer:** C

**C is the invalid reason and therefore the correct answer.** No code editor, including VS Code, can run Python code without the Python interpreter being installed on the computer. VS Code is just an editor — it still needs the Python interpreter to execute Python code. Options A, B, and D are all valid advantages of VS Code over IDLE.

### Q17. [Hard] What does pip stand for?

A. Python Installation Program
B. Package Installer for Python
C. pip installs packages
D. Python Integrated Packages

**Answer:** C

**C is correct.** pip stands for 'pip installs packages' — it is a recursive acronym (the name refers to itself). While it is commonly described as a 'package installer for Python' (Option B is a common description but not what the acronym stands for), the official recursive name is 'pip installs packages'.

### Q18. [Hard] You type 'python --version' and see 'Python 3.12.3'. What does the '3' in '3.12.3' represent?

A. The major version number
B. The minor version number
C. The patch/micro version number
D. The build number

**Answer:** A

**A is correct.** Python uses semantic versioning: major.minor.micro. The first number (3) is the major version — a fundamental version of the language. The second number (12) is the minor version — a feature release within the major version. The third number (3) is the micro/patch version — bug fixes within the minor version. So Python 3.12.3 is major version 3, minor release 12, patch 3.

### Q19. [Easy] How do you open a new file in IDLE to write a Python program?

A. File > Open
B. File > New File
C. Run > New Module
D. Edit > New Program

**Answer:** B

**B is correct.** In IDLE, go to File > New File (or press Ctrl+N) to open a new editor window where you can write a multi-line Python program. File > Open opens an existing file. The other options do not exist in IDLE's menus.

### Q20. [Medium] Which terminal command clears the screen on Windows Command Prompt?

A. clear
B. cls
C. reset
D. clean

**Answer:** B

**B is correct.** On Windows, 'cls' (clear screen) clears the terminal. 'clear' (Option A) is the equivalent command on Linux and macOS — it does not work on Windows Command Prompt. 'reset' and 'clean' are not standard terminal commands for clearing the screen.

## Coding Challenges

### Challenge 1. Verify Your Setup

**Difficulty:** Easy

Write a Python program that prints 'My Python setup is working!' and save it as setup_test.py. Run it from the terminal to verify your installation is complete.

**Constraints:**

- The file must be named setup_test.py. Use the print() function.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
My Python setup is working!
```

**Solution:**

```python
print("My Python setup is working!")
```

### Challenge 2. System Information Display

**Difficulty:** Easy

Write a Python program that uses the sys module to display the Python version and the platform (operating system) you are using.

**Constraints:**

- Use import sys. Display both sys.version and sys.platform.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Python version: 3.12.3 (tags/v3.12.3:f6650f9, Apr  9 2024, 18:05:18) [MSC v.1938 64 bit (AMD64)]
Platform: win32
```

**Solution:**

```python
import sys
print("Python version:", sys.version)
print("Platform:", sys.platform)
```

### Challenge 3. Terminal Command Guide

**Difficulty:** Easy

Write a Python program that prints a mini reference guide of useful terminal commands for a beginner. Include at least 5 commands with their descriptions.

**Constraints:**

- Use print() statements. Include at least 5 terminal commands with brief explanations.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
=== Terminal Command Guide ===
python --version    : Check Python version
python filename.py  : Run a Python file
cd foldername       : Navigate into a folder
cd ..               : Go to parent folder
dir                 : List files (Windows)
cls                 : Clear the screen (Windows)
```

**Solution:**

```python
print("=== Terminal Command Guide ===")
print("python --version    : Check Python version")
print("python filename.py  : Run a Python file")
print("cd foldername       : Navigate into a folder")
print("cd ..               : Go to parent folder")
print("dir                 : List files (Windows)")
print("cls                 : Clear the screen (Windows)")
```

### Challenge 4. IDE Comparison Chart

**Difficulty:** Medium

Write a Python program that prints a neatly formatted comparison of three Python editors (IDLE, VS Code, and PyCharm) showing their key characteristics.

**Constraints:**

- Use print() statements with careful alignment. The table must have borders and at least 3 rows of data.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
+------------+------------+----------+-----------+
| Editor     | Cost       | Built-in | Best For  |
+------------+------------+----------+-----------+
| IDLE       | Free       | Yes      | Beginners |
| VS Code    | Free       | No       | Everyone  |
| PyCharm CE | Free       | No       | Python    |
+------------+------------+----------+-----------+
```

**Solution:**

```python
print("+------------+------------+----------+-----------+")
print("| Editor     | Cost       | Built-in | Best For  |")
print("+------------+------------+----------+-----------+")
print("| IDLE       | Free       | Yes      | Beginners |")
print("| VS Code    | Free       | No       | Everyone  |")
print("| PyCharm CE | Free       | No       | Python    |")
print("+------------+------------+----------+-----------+")
```

### Challenge 5. Installation Checklist

**Difficulty:** Medium

Write a Python program that prints a checklist of steps for installing Python on Windows. Use checkmarks or symbols to make it visually clear. The checklist should have at least 6 steps.

**Constraints:**

- Use print() statements. Include at least 6 steps. The step about PATH must be emphasized.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
=== Python Installation Checklist ===
[Step 1] Go to python.org
[Step 2] Click Download Python 3.x.x
[Step 3] Run the installer
[Step 4] CHECK 'Add python.exe to PATH'
[Step 5] Click Install Now
[Step 6] Verify: python --version
[Step 7] Open IDLE and test
=== Setup Complete! ===
```

**Solution:**

```python
print("=== Python Installation Checklist ===")
print("[Step 1] Go to python.org")
print("[Step 2] Click Download Python 3.x.x")
print("[Step 3] Run the installer")
print("[Step 4] CHECK 'Add python.exe to PATH'")
print("[Step 5] Click Install Now")
print("[Step 6] Verify: python --version")
print("[Step 7] Open IDLE and test")
print("=== Setup Complete! ===")
```

### Challenge 6. Multi-File Project Plan

**Difficulty:** Medium

Write a Python program that displays a folder structure for an organized Python project. Show a main folder with at least 3 subfolders and some .py files in each.

**Constraints:**

- Use print() statements. Show a hierarchical folder structure with at least 3 subfolders and at least 2 files in each.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
PythonProjects/
|-- basics/
|   |-- hello.py
|   |-- calculator.py
|   |-- greet.py
|-- games/
|   |-- guess_number.py
|   |-- quiz.py
|-- practice/
|   |-- patterns.py
|   |-- math_problems.py
```

**Solution:**

```python
print("PythonProjects/")
print("|-- basics/")
print("|   |-- hello.py")
print("|   |-- calculator.py")
print("|   |-- greet.py")
print("|-- games/")
print("|   |-- guess_number.py")
print("|   |-- quiz.py")
print("|-- practice/")
print("|   |-- patterns.py")
print("|   |-- math_problems.py")
```

### Challenge 7. Troubleshooting Guide

**Difficulty:** Hard

Write a Python program that prints a troubleshooting guide for common Python installation problems. Include at least 4 problems with their solutions.

**Constraints:**

- Include at least 4 problem-solution pairs. Format clearly with PROBLEM and SOLUTION labels.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
=== Python Installation Troubleshooting ===

PROBLEM: 'python' is not recognized
SOLUTION: Reinstall Python with PATH checkbox checked

PROBLEM: Microsoft Store opens when typing python
SOLUTION: Disable app execution aliases in Windows Settings

PROBLEM: IDLE does not appear in Start menu
SOLUTION: Reinstall Python, ensure 'tcl/tk' is included

PROBLEM: Permission denied when installing packages
SOLUTION: Run Command Prompt as Administrator
```

**Solution:**

```python
print("=== Python Installation Troubleshooting ===")
print()
print("PROBLEM: 'python' is not recognized")
print("SOLUTION: Reinstall Python with PATH checkbox checked")
print()
print("PROBLEM: Microsoft Store opens when typing python")
print("SOLUTION: Disable app execution aliases in Windows Settings")
print()
print("PROBLEM: IDLE does not appear in Start menu")
print("SOLUTION: Reinstall Python, ensure 'tcl/tk' is included")
print()
print("PROBLEM: Permission denied when installing packages")
print("SOLUTION: Run Command Prompt as Administrator")
```

### Challenge 8. Python vs Other Setups

**Difficulty:** Hard

Write a Python program that compares the setup complexity of Python with two other languages (Java and C++). For each language, show how many steps it takes to go from nothing to printing Hello World.

**Constraints:**

- Compare at least 3 languages. Show the numbered steps for each. Highlight Python's simplicity.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
=== Setup Comparison: Hello World ===

Python (3 steps):
  1. Install Python from python.org
  2. Write: print("Hello, World!")
  3. Run: python hello.py

Java (5 steps):
  1. Install JDK from oracle.com
  2. Set JAVA_HOME and PATH
  3. Write: public class Hello { public static void main... }
  4. Compile: javac Hello.java
  5. Run: java Hello

C++ (5 steps):
  1. Install a compiler (MinGW/GCC)
  2. Set PATH for the compiler
  3. Write: #include <iostream> int main() { cout... }
  4. Compile: g++ hello.cpp -o hello
  5. Run: ./hello
```

**Solution:**

```python
print("=== Setup Comparison: Hello World ===")
print()
print("Python (3 steps):")
print("  1. Install Python from python.org")
print("  2. Write: print(\"Hello, World!\")")
print("  3. Run: python hello.py")
print()
print("Java (5 steps):")
print("  1. Install JDK from oracle.com")
print("  2. Set JAVA_HOME and PATH")
print("  3. Write: public class Hello { public static void main... }")
print("  4. Compile: javac Hello.java")
print("  5. Run: java Hello")
print()
print("C++ (5 steps):")
print("  1. Install a compiler (MinGW/GCC)")
print("  2. Set PATH for the compiler")
print("  3. Write: #include <iostream> int main() { cout... }")
print("  4. Compile: g++ hello.cpp -o hello")
print("  5. Run: ./hello")
```

---

*Notes: https://learn.modernagecoders.com/resources/python/installing-python-and-setup/*
