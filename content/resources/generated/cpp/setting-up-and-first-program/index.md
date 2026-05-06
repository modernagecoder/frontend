---
title: "Setting Up C++ and Your First Program - Install g++, IDE Setup & Hello World | Modern Age Coders"
description: "Learn how to install g++ (MinGW on Windows, built-in on Linux/Mac), set up VS Code for C++, and write your first C++ program. Covers cout, cin, endl, comments, namespaces, and 54 practice questions."
slug: setting-up-and-first-program
canonical: https://learn.modernagecoders.com/resources/cpp/setting-up-and-first-program
category: "C++"
keywords: ["install c++ compiler", "g++ setup", "mingw windows", "c++ hello world", "first c++ program", "cout cin", "c++ ide setup", "vs code c++", "c++ for beginners", "namespace std"]
---
# Setting Up C++ and Your First Program

**Difficulty:** Beginner  
**Reading time:** 22 min  
**Chapter:** 2  
**Practice questions:** 54

## Setting Up Your C++ Environment

Before you can write and run C++ programs, you need two things: a **text editor or IDE** to write code, and a **compiler** to convert your code into an executable program. Unlike Python or JavaScript where you can run code with just an interpreter, C++ requires compilation -- your source code must be translated into machine code before it can run.

This chapter walks you through installing a C++ compiler on any operating system, setting up an editor, and writing your very first program. By the end, you will be able to write, compile, and run C++ programs from your terminal.

### What You Need

ComponentPurposeRecommendationCompilerConverts C++ source code to executableg++ (part of GCC)Text Editor / IDEWrite and manage codeVS Code with C/C++ extensionTerminalRun compilation commandsBuilt-in terminal in VS Code

## Why Does Setup Matter?

Many beginners skip environment setup and use online compilers exclusively. While online compilers are fine for learning basics, understanding the local setup process is critical for several reasons:

### 1. Real-World Development

No professional developer uses an online compiler. Real projects have multiple files, libraries, build systems (Make, CMake), and debuggers. Setting up a local environment teaches you the fundamentals of how software development actually works.

### 2. Competitive Programming

In competitions like ICPC and Google Code Jam, you often code locally and submit files. A properly configured local setup with fast compilation and testing saves crucial minutes during contests.

### 3. Debugging

Online compilers give you limited error information. A local setup with a debugger (GDB, LLDB) lets you step through code line by line, inspect variables, and find bugs efficiently.

### 4. Understanding the Toolchain

Knowing what g++ does, what flags it accepts, and how compilation works makes you a better programmer. When you get a "linker error" or "undefined reference," you will know what it means and how to fix it.

## Detailed Explanation

### Installing g++ on Different Platforms

#### Windows (MinGW-w64)

Windows does not come with a C++ compiler. The most popular free option is **MinGW-w64**, which provides g++ for Windows:

1. Download the MinGW-w64 installer from `https://www.mingw-w64.org/` or install via MSYS2.
2. During installation, select `x86_64` architecture and `posix` threads.
3. Add the `bin` directory to your system's PATH environment variable (e.g., `C:\mingw64\bin`).
4. Open Command Prompt and verify: `g++ --version`.

Alternatively, install via **MSYS2**: run `pacman -S mingw-w64-x86_64-gcc` in the MSYS2 terminal.

#### macOS

macOS provides Clang (which is compatible with g++) via Xcode Command Line Tools:

1. Open Terminal and run: `xcode-select --install`
2. Verify: `g++ --version` (this actually invokes Clang on macOS, but it is fully compatible)

#### Linux (Ubuntu/Debian)

Most Linux distributions have g++ available in their package manager:

1. Open Terminal and run: `sudo apt update && sudo apt install g++`
2. Verify: `g++ --version`

### Compiling from the Terminal

The basic compilation command is:

```
g++ filename.cpp -o outputname
```

This compiles `filename.cpp` and creates an executable called `outputname`. To run it:

- Linux/macOS: `./outputname`
- Windows: `outputname.exe` or just `outputname`

Useful g++ flags:

FlagPurpose`-o name`Name the output executable`-std=c++17`Use C++17 standard`-Wall`Enable all common warnings`-Wextra`Enable extra warnings`-g`Include debug information (for GDB)`-O2`Optimization level 2 (for competitive programming)`-fsanitize=address`Detect memory errors at runtime

### IDEs and Editors for C++

Editor/IDEProsBest ForVS Code + C/C++ ExtensionFree, lightweight, excellent IntelliSense, integrated terminalAll levelsCode::BlocksFree, simple, built-in compiler on WindowsBeginnersCLion (JetBrains)Best debugger, CMake integration, refactoring toolsSerious projects (paid, free for students)Vim/NeovimTerminal-based, extremely fast, programmableAdvanced users, competitive programming

### Anatomy of a C++ Program

Every C++ program has a specific structure. Let us break down each part:

#### 1. #include 

This is a **preprocessor directive**. It tells the preprocessor to include the contents of the `` header file. This header provides `cout` (console output), `cin` (console input), `endl` (newline + flush), and other I/O facilities. Without this line, you cannot use any of these.

#### 2. using namespace std;

The C++ standard library puts everything inside the `std` namespace to avoid name conflicts. Without this line, you would need to write `std::cout`, `std::cin`, `std::endl` everywhere. The `using namespace std;` directive imports all names from the `std` namespace into the global scope, so you can write just `cout`.

#### 3. int main()

This is the **entry point** of every C++ program. When you run the executable, execution starts from the first line inside `main()`. The `int` return type means main returns an integer to the operating system. `return 0;` means success; any non-zero value means an error occurred.

#### 4. Statements and Semicolons

Every statement in C++ must end with a **semicolon** (`;`). This is how the compiler knows where one statement ends and the next begins. Forgetting a semicolon is the single most common syntax error for beginners.

#### 5. Comments

C++ supports two types of comments:

- `//` Single-line comment: everything after `//` on that line is ignored by the compiler.
- `/* ... */` Multi-line comment: everything between `/*` and `*/` is ignored, even across multiple lines.

#### 6. cout and the Insertion Operator (<<)

`cout` stands for "character output" and sends data to the standard output (your terminal). The `<<` operator is called the **insertion operator** because it inserts data into the output stream. You can chain multiple `<<` operators to output several values in sequence.

#### 7. cin and the Extraction Operator (>>)

`cin` stands for "character input" and reads data from the standard input (your keyboard). The `>>` operator is called the **extraction operator** because it extracts data from the input stream and stores it in a variable. `cin >>` reads until the first whitespace character (space, tab, or newline).

#### 8. endl vs \n

Both `endl` and `'\n'` produce a newline. The difference: `endl` also **flushes the output buffer**, forcing all buffered data to be written immediately. `'\n'` just adds a newline without flushing. In competitive programming, use `'\n'` because buffer flushing is slow when done repeatedly.

#### 9. Case Sensitivity

C++ is **case-sensitive**. `Main` is not the same as `main`. `Cout` is not the same as `cout`. `Int` is not the same as `int`. Every keyword and identifier must match its exact casing.

## Code Examples

### Hello World - The Complete First Program

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
```

This is the canonical first C++ program. Line 1 includes the iostream header for I/O. Line 2 imports the std namespace. Line 4 declares the main function. Line 5 prints `Hello, World!` followed by a newline. Line 6 returns 0 to indicate success. Compile with `g++ hello.cpp -o hello` and run with `./hello`.

**Output:**

```
Hello, World!
```

### Multiple cout Statements and Chaining

```cpp
#include <iostream>
using namespace std;

int main() {
    // Separate cout statements
    cout << "Name: Rohan" << endl;
    cout << "Age: 20" << endl;

    // Chaining multiple values in one cout
    cout << "Branch: " << "CSE" << ", Year: " << 3 << endl;

    // Mixing strings and expressions
    cout << "2 + 3 = " << 2 + 3 << endl;

    return 0;
}
```

You can have multiple `cout` statements, or chain multiple values in a single `cout` using the `<<` operator. String literals go in double quotes. Numbers and expressions are printed as their values -- `2 + 3` is evaluated to `5` before printing.

**Output:**

```
Name: Rohan
Age: 20
Branch: CSE, Year: 3
2 + 3 = 5
```

### Reading Input with cin

```cpp
#include <iostream>
using namespace std;

int main() {
    int age;
    string name;
    float gpa;

    cout << "Enter your name: ";
    cin >> name;

    cout << "Enter your age: ";
    cin >> age;

    cout << "Enter your GPA: ";
    cin >> gpa;

    cout << "\nHello, " << name << "!" << endl;
    cout << "Age: " << age << ", GPA: " << gpa << endl;

    return 0;
}
```

`cin >>` reads one token (separated by whitespace) from the keyboard and stores it in the variable. The variable type determines how the input is parsed: `int` reads an integer, `float` reads a decimal number, `string` reads one word. Note: `cin >> name` reads only the first word. If you type "Rahul Sharma", only "Rahul" is stored.

**Output:**

```
Enter your name: Ankit
Enter your age: 21
Enter your GPA: 8.7

Hello, Ankit!
Age: 21, GPA: 8.7
```

### Comments - Single Line and Multi Line

```cpp
#include <iostream>
using namespace std;

// This is a single-line comment
// The compiler ignores everything after //

/*
  This is a multi-line comment.
  It can span multiple lines.
  Useful for explaining complex logic
  or temporarily disabling blocks of code.
*/

int main() {
    // Print a greeting
    cout << "Welcome to C++" << endl;  // inline comment

    /* cout << "This line is commented out"; */

    return 0;
}
```

Single-line comments start with `//` and extend to the end of the line. Multi-line comments start with `/*` and end with `*/`. Comments are completely ignored by the compiler. Use them to explain your logic, document your code, or temporarily disable code during debugging. Inline comments (after code on the same line) are common for brief explanations.

**Output:**

```
Welcome to C++
```

### Without 'using namespace std' - Using std:: Prefix

```cpp
#include <iostream>

int main() {
    std::cout << "Method 1: Using std:: prefix" << std::endl;

    // You can also import specific names
    using std::cout;
    using std::endl;

    cout << "Method 2: Selective using" << endl;

    return 0;
}
```

Without `using namespace std;`, you must prefix every standard library name with `std::`. Alternatively, you can import specific names with `using std::cout;`. This selective approach is preferred in large projects because it avoids name collisions while keeping code readable. In competitive programming, `using namespace std;` is fine.

**Output:**

```
Method 1: Using std:: prefix
Method 2: Selective using
```

### Multiple Inputs on One Line

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b, c;

    cout << "Enter three numbers separated by spaces: ";
    cin >> a >> b >> c;

    cout << "You entered: " << a << ", " << b << ", " << c << endl;
    cout << "Sum: " << a + b + c << endl;
    cout << "Average: " << (a + b + c) / 3.0 << endl;

    return 0;
}
```

You can chain multiple `>>` operators to read multiple values in one statement. `cin >> a >> b >> c` reads three integers separated by whitespace (spaces, tabs, or newlines). Note the use of `3.0` instead of `3` in the average calculation -- dividing by `3.0` (a double) forces floating-point division. If we used `3`, integer division would truncate the decimal part.

**Output:**

```
Enter three numbers separated by spaces: 10 20 30
You entered: 10, 20, 30
Sum: 60
Average: 20
```

### Escape Sequences in C++

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Newline: Hello\nWorld" << endl;
    cout << "Tab: Col1\tCol2\tCol3" << endl;
    cout << "Backslash: C:\\Users\\Priya" << endl;
    cout << "Double quote: She said \"Hello\"" << endl;
    cout << "Single quote: It\'s working" << endl;
    cout << "Null character size: " << sizeof('\0') << endl;

    return 0;
}
```

Escape sequences start with a backslash `\` and represent special characters. `\n` is newline, `\t` is tab, `\\` is a literal backslash, `\"` is a literal double quote inside a string, `\'` is a literal single quote, and `\0` is the null character (used to terminate C-strings). These work inside both string literals and character literals.

**Output:**

```
Newline: Hello
World
Tab: Col1	Col2	Col3
Backslash: C:\Users\Priya
Double quote: She said "Hello"
Single quote: It's working
Null character size: 1
```

## Common Mistakes

### Forgetting the Semicolon

**Wrong:**

```
#include <iostream>
using namespace std;

int main() {
    cout << "Hello" << endl
    cout << "World" << endl;
    return 0;
}
```

error: expected ';' before 'cout'

**Correct:**

```
#include <iostream>
using namespace std;

int main() {
    cout << "Hello" << endl;
    cout << "World" << endl;
    return 0;
}
```

Every statement in C++ must end with a semicolon. The compiler error often points to the line AFTER the missing semicolon, which confuses beginners. In this case, the error says there is a problem before the second `cout`, but the actual fix is adding `;` to the first line.

### Writing Main Instead of main

**Wrong:**

```
#include <iostream>
using namespace std;

int Main() {
    cout << "Hello" << endl;
    return 0;
}
```

undefined reference to 'main' (linker error)

**Correct:**

```
#include <iostream>
using namespace std;

int main() {
    cout << "Hello" << endl;
    return 0;
}
```

C++ is case-sensitive. The entry point must be exactly `main` (all lowercase). `Main`, `MAIN`, or `mAiN` are all different identifiers and will not be recognized as the program entry point. The linker will report that it cannot find `main`.

### Using cin to Read Full Name (Gets Only First Word)

**Wrong:**

```
#include <iostream>
using namespace std;

int main() {
    string name;
    cout << "Enter your full name: ";
    cin >> name;  // Only reads first word!
    cout << "Hello, " << name << endl;
    return 0;
}
```

No error, but if user types 'Rahul Sharma', only 'Rahul' is stored in name.

**Correct:**

```
#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    cout << "Enter your full name: ";
    getline(cin, name);  // Reads the entire line
    cout << "Hello, " << name << endl;
    return 0;
}
```

`cin >>` reads until the first whitespace character. To read an entire line including spaces, use `getline(cin, name)`. This is covered in detail in Chapter 5, but it is important to know early that `cin >>` has this limitation.

### Missing #include <string> When Using std::string

**Wrong:**

```
#include <iostream>
using namespace std;

int main() {
    string name = "Kavya";
    cout << name << endl;
    return 0;
}
```

May compile on some compilers (because iostream indirectly includes string), but may fail on others with: error: 'string' was not declared in this scope

**Correct:**

```
#include <iostream>
#include <string>
using namespace std;

int main() {
    string name = "Kavya";
    cout << name << endl;
    return 0;
}
```

While many compilers include `` implicitly through ``, this is not guaranteed by the standard. Always explicitly include `#include ` when using `std::string`. Relying on implicit includes makes your code non-portable.

### Using Single Quotes for Strings

**Wrong:**

```
#include <iostream>
using namespace std;

int main() {
    cout << 'Hello' << endl;
    return 0;
}
```

warning: multi-character character constant / unexpected numeric output

**Correct:**

```
#include <iostream>
using namespace std;

int main() {
    cout << "Hello" << endl;
    return 0;
}
```

In C++, single quotes `'` are for **single characters** only (e.g., `'A'`, `'5'`, `'\n'`). Double quotes `"` are for **strings** (sequences of characters). `'Hello'` is a multi-character literal, which has implementation-defined behavior and will likely print a garbage integer value instead of the word Hello.

## Summary

- To write C++ programs, you need a compiler (g++) and an editor (VS Code recommended). Install MinGW-w64 on Windows, use xcode-select --install on macOS, or sudo apt install g++ on Linux.
- Compile with: g++ filename.cpp -o output. Run with: ./output (Linux/Mac) or output.exe (Windows). Useful flags: -std=c++17, -Wall, -O2.
- #include  is required for cout and cin. It is a preprocessor directive that copies the iostream header into your file before compilation.
- 'using namespace std;' lets you write cout instead of std::cout. In large projects, prefer std:: prefix or selective 'using std::cout;' to avoid name collisions.
- int main() is the entry point of every C++ program. It must return int. return 0 means success; non-zero means error.
- cout << sends data to standard output (screen). cin >> reads data from standard input (keyboard). The << and >> operators can be chained.
- endl inserts a newline AND flushes the buffer. '\n' inserts only a newline (faster). Use '\n' in competitive programming for better performance.
- C++ has two comment styles: // for single-line and /* */ for multi-line. Comments are ignored by the compiler.
- C++ is case-sensitive: main is not Main. Strings use double quotes ("text"). Single characters use single quotes ('A').
- Every statement must end with a semicolon (;). Forgetting semicolons is the most common beginner error.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/setting-up-and-first-program/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/setting-up-and-first-program/practice/*
