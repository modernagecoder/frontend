---
title: "Introduction to C++ - What Is C++, History, Features & Comparison | Modern Age Coders"
description: "Learn what C++ is, its history from Bjarne Stroustrup at Bell Labs, key features, where C++ is used, and how it compares to C, Java, and Python. Includes 55 practice questions."
slug: introduction-to-cpp
canonical: https://learn.modernagecoders.com/resources/cpp/introduction-to-cpp
category: "C++"
keywords: ["what is c++", "c++ introduction", "c++ vs java vs python", "why learn c++", "c++ history", "c++ features", "c++ for beginners", "bjarne stroustrup", "c++ compilation process", "c++ versions"]
---
# Introduction to C++

**Difficulty:** Beginner  
**Reading time:** 20 min  
**Chapter:** 1  
**Practice questions:** 55

## What Is C++?

**C++** is a general-purpose, compiled, statically typed programming language that provides both high-level abstractions and low-level hardware access. It was created by **Bjarne Stroustrup** in **1979** at **Bell Labs** (Murray Hill, New Jersey) as an extension of the C programming language. Stroustrup originally called it **"C with Classes"** because his primary goal was to add object-oriented features (classes, inheritance, encapsulation) to C without sacrificing C's performance and low-level control. The name C++ came later, in 1983 -- the `++` is the increment operator in C, so C++ literally means "one step beyond C."

C++ is one of the most widely used programming languages in the world. It powers operating systems (Windows, macOS, Linux kernel modules), game engines (Unreal Engine, Unity's native layer), web browsers (Chrome, Firefox), databases (MySQL, MongoDB), embedded systems, compilers, and high-frequency trading platforms. If software needs to be **fast**, **efficient**, or **close to hardware**, there is a very good chance it is written in C++.

### C++ at a Glance

PropertyDetailCreatorBjarne StroustrupYear1979 ("C with Classes"), renamed C++ in 1983ParadigmMulti-paradigm: procedural, object-oriented, generic, functionalTypingStatically typed, compiledExtension`.cpp`, `.cc`, `.cxx`Standard BodyISO/IEC JTC1/SC22/WG21

## Why Learn C++?

If you are a college student, C++ is arguably the single most valuable language you can invest time in. Here is why:

### 1. Competitive Programming

C++ is the dominant language in competitive programming. Platforms like Codeforces, CodeChef, AtCoder, and ICPC use C++ overwhelmingly. The reasons are simple: it is the fastest among commonly used languages, the STL (Standard Template Library) provides ready-made data structures and algorithms, and most editorial solutions are written in C++. If you want to compete seriously, C++ is non-negotiable.

### 2. Placement Interviews

Companies like Google, Amazon, Microsoft, Goldman Sachs, and virtually every product-based company test Data Structures and Algorithms in interviews. C++ is the preferred language because interviewers expect you to understand memory, pointers, and efficiency -- concepts that C++ makes explicit. Writing a solution in C++ often signals deeper technical understanding.

### 3. Performance and Control

C++ gives you direct control over memory allocation and deallocation, CPU cache behavior, and system resources. No garbage collector runs behind the scenes. You decide when memory is allocated with `new` and freed with `delete`. This control is why C++ is used in performance-critical domains: game engines running at 60 FPS, trading systems where microseconds matter, and embedded systems with limited memory.

### 4. Systems Programming

Operating systems, device drivers, compilers, interpreters, and virtual machines are written in C++. If you want to understand how software actually works at the system level -- not just use frameworks built by others -- C++ is the path.

### 5. Foundation for Other Languages

Once you understand C++, every other language becomes easier. Java's syntax is borrowed from C++. Python's CPython interpreter is written in C. Understanding pointers, memory layout, stack vs heap, and compilation makes you a fundamentally better programmer regardless of what language you use later.

## Detailed Explanation

### Key Features of C++

C++ is a multi-paradigm language. Here are its defining features:

- **Compiled Language:** C++ code is compiled directly into machine code (binary) by a compiler like g++ or clang++. This means no interpreter or virtual machine sits between your code and the CPU. The result is raw speed.
- **Object-Oriented Programming (OOP):** C++ supports classes, objects, inheritance, polymorphism, encapsulation, and abstraction. This lets you model real-world entities and build large, maintainable software systems.
- **Low-Level Memory Access:** Through pointers and references, you can directly manipulate memory addresses. You can allocate memory on the heap, pass addresses between functions, and even write inline assembly if needed.
- **Standard Template Library (STL):** C++ comes with a powerful library of generic data structures (vector, map, set, queue, stack) and algorithms (sort, binary_search, lower_bound). This is a massive productivity boost, especially in competitive programming.
- **Multi-Paradigm:** You can write procedural code (like C), object-oriented code (like Java), generic code (using templates), and even functional code (using lambdas and higher-order functions from C++11 onwards).
- **Platform Independent (at source level):** C++ code can be compiled on Windows, Linux, macOS, and embedded platforms. The same source code works everywhere, though you need to recompile for each target.

### Where Is C++ Used?

DomainExamplesGame DevelopmentUnreal Engine, Unity (native), game physics enginesOperating SystemsWindows, macOS components, Linux kernel modulesWeb BrowsersChrome (V8 engine), Firefox, Safari (WebKit)DatabasesMySQL, MongoDB, RedisEmbedded SystemsArduino, automotive ECUs, IoT devicesCompetitive ProgrammingCodeforces, CodeChef, ICPC, Google Code JamFinanceHigh-frequency trading systems, risk enginesCompilersGCC, Clang, MSVC are all written in C++

### C++ vs C vs Java vs Python

FeatureCC++JavaPythonParadigmProceduralMulti-paradigmObject-orientedMulti-paradigmTypingStaticStaticStaticDynamicMemory ManagementManual (malloc/free)Manual (new/delete) + smart pointersAutomatic (garbage collector)Automatic (garbage collector)SpeedVery fastVery fastFast (JIT)Slow (interpreted)OOP SupportNoYes (classes, inheritance)Yes (everything is an object)Yes (flexible)STL/LibrariesMinimal standard libraryRich STLLarge standard libraryHuge ecosystem (pip)PointersYesYes + ReferencesNo (references only)NoUse CaseOS kernels, embeddedSystems, games, CPEnterprise, AndroidML, scripting, web

### The C++ Compilation Process

Understanding how C++ code becomes an executable is fundamental. There are four stages:

1. **Preprocessing:** The preprocessor handles directives that start with `#`. It replaces `#include ` with the actual contents of the iostream header file. It processes `#define` macros and `#ifdef` conditional compilation. The output is a single, expanded source file called a **translation unit**.
2. **Compilation:** The compiler takes the preprocessed source and converts it into **assembly language** specific to your CPU architecture (x86, ARM, etc.). It checks syntax, enforces types, and reports errors at this stage.
3. **Assembly:** The assembler converts assembly language into **object code** -- machine-readable binary stored in `.o` or `.obj` files. Each source file produces one object file.
4. **Linking:** The linker combines all object files and resolves references between them. If your code calls `cout`, the linker finds its implementation in the C++ standard library and links it in. The output is the final **executable** file.

This pipeline is: `source.cpp` -> Preprocessor -> `source.i` -> Compiler -> `source.s` -> Assembler -> `source.o` -> Linker -> `executable`

### C++ Standards Timeline

VersionYearKey AdditionsC++981998First ISO standard. STL, templates, exceptions, namespaces.C++032003Bug fixes to C++98. Minor technical corrections.C++112011Major update: auto, range-based for, lambda, smart pointers, move semantics, nullptr, constexpr, threads.C++142014Generic lambdas, return type deduction, relaxed constexpr.C++172017Structured bindings, if-init, std::optional, std::variant, filesystem library.C++202020Concepts, ranges, coroutines, modules, three-way comparison (spaceship operator).C++232023std::print, deducing this, more constexpr, multidimensional subscript.

### How to Think About C++

C++ is about **control and performance**. Every feature exists because a programmer somewhere needed finer control over what the machine does. Where Python says "do not worry about memory, I will handle it," C++ says "here is the memory -- you decide what happens." This is not a burden; it is power. The cost is complexity, but the reward is that you truly understand what your program is doing at every level. As Bjarne Stroustrup himself said: *"C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do it blows your whole leg off."* The quote is humorous, but the point is real: C++ gives you powerful tools, and with power comes responsibility.

## Code Examples

### The Simplest C++ Program

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++!" << endl;
    return 0;
}
```

This is the minimal C++ program. `#include ` brings in the input/output library. `using namespace std;` allows us to write `cout` instead of `std::cout`. The `main()` function is the entry point of every C++ program. `cout <<` sends text to the standard output. `return 0;` tells the operating system the program finished successfully.

**Output:**

```
Hello, C++!
```

### Checking the Size of Data Types

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Size of int: " << sizeof(int) << " bytes" << endl;
    cout << "Size of float: " << sizeof(float) << " bytes" << endl;
    cout << "Size of double: " << sizeof(double) << " bytes" << endl;
    cout << "Size of char: " << sizeof(char) << " bytes" << endl;
    cout << "Size of bool: " << sizeof(bool) << " bytes" << endl;
    cout << "Size of long long: " << sizeof(long long) << " bytes" << endl;
    return 0;
}
```

The `sizeof` operator returns the number of bytes a data type occupies in memory. On most modern systems (64-bit), `int` is 4 bytes, `double` is 8 bytes, `char` is always 1 byte. This operator is evaluated at compile time, not at runtime. Knowing sizes matters for memory-conscious programming and understanding overflow limits.

**Output:**

```
Size of int: 4 bytes
Size of float: 4 bytes
Size of double: 8 bytes
Size of char: 1 bytes
Size of bool: 1 bytes
Size of long long: 8 bytes
```

### Compilation Stages Demonstration

```cpp
// Save this as demo.cpp
// Then run these commands in terminal:
// Step 1: Preprocessing only
//   g++ -E demo.cpp -o demo.i
// Step 2: Compile to assembly
//   g++ -S demo.cpp -o demo.s
// Step 3: Assemble to object code
//   g++ -c demo.cpp -o demo.o
// Step 4: Link to executable
//   g++ demo.o -o demo

#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 20;
    cout << "Sum: " << a + b << endl;
    return 0;
}
```

This demonstrates the four compilation stages using g++ flags. `-E` stops after preprocessing (you will see the iostream header expanded to thousands of lines). `-S` produces assembly code. `-c` produces an object file. Without flags, g++ performs all stages and produces the final executable. Understanding this pipeline helps you debug linker errors and understand how C++ builds work.

**Output:**

```
Sum: 30
```

### C++ Version Check with __cplusplus Macro

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "C++ Standard Version: " << __cplusplus << endl;

    #if __cplusplus >= 202002L
        cout << "You are using C++20 or later" << endl;
    #elif __cplusplus >= 201703L
        cout << "You are using C++17" << endl;
    #elif __cplusplus >= 201402L
        cout << "You are using C++14" << endl;
    #elif __cplusplus >= 201103L
        cout << "You are using C++11" << endl;
    #else
        cout << "You are using C++98/03 or earlier" << endl;
    #endif

    return 0;
}
```

The `__cplusplus` macro is defined by every C++ compiler and tells you which standard is being used. The value `201703L` means C++17, `202002L` means C++20. The `#if` / `#elif` / `#endif` are preprocessor conditionals -- they are evaluated before compilation. Compile with `g++ -std=c++17 demo.cpp` to select a specific standard.

**Output:**

```
C++ Standard Version: 201703
You are using C++17
```

### Basic Input and Output

```cpp
#include <iostream>
using namespace std;

int main() {
    string name;
    int age;

    cout << "Enter your name: ";
    cin >> name;
    cout << "Enter your age: ";
    cin >> age;

    cout << "Hello, " << name << "! You are " << age << " years old." << endl;
    return 0;
}
```

This program takes user input using `cin >>` (extraction operator). `cin` reads input from the keyboard. The `>>` operator extracts data from the input stream and stores it in a variable. Note that `cin >>` reads until the first whitespace, so if you type "Rahul Sharma", only "Rahul" goes into `name`. To read a full line, you need `getline()` (covered in Chapter 5).

**Output:**

```
Enter your name: Rahul
Enter your age: 20
Hello, Rahul! You are 20 years old.
```

### Demonstrating return 0 vs return 1

```cpp
#include <iostream>
using namespace std;

int main() {
    int num;
    cout << "Enter a positive number: ";
    cin >> num;

    if (num < 0) {
        cout << "Error: Negative number entered!" << endl;
        return 1;  // Non-zero = error
    }

    cout << "You entered: " << num << endl;
    return 0;  // Zero = success
}
```

The `return` value from `main()` is the program's exit code. `return 0;` signals success to the operating system. Any non-zero value (commonly 1) signals failure. You can check this in the terminal with `echo $?` (Linux/Mac) or `echo %ERRORLEVEL%` (Windows) immediately after running the program. Build systems and scripts use exit codes to detect if a program failed.

**Output:**

```
Enter a positive number: 42
You entered: 42
```

## Common Mistakes

### Missing Semicolon at End of Statement

**Wrong:**

```
#include <iostream>
using namespace std;

int main() {
    cout << "Hello" << endl
    return 0;
}
```

error: expected ';' before 'return'

**Correct:**

```
#include <iostream>
using namespace std;

int main() {
    cout << "Hello" << endl;
    return 0;
}
```

Every statement in C++ must end with a semicolon `;`. Unlike Python, which uses indentation and newlines, C++ uses semicolons as statement terminators. Forgetting a semicolon is the single most common syntax error for beginners. The compiler error often points to the line AFTER the missing semicolon, which can be confusing.

### Forgetting #include <iostream>

**Wrong:**

```
using namespace std;

int main() {
    cout << "Hello" << endl;
    return 0;
}
```

error: 'cout' was not declared in this scope

**Correct:**

```
#include <iostream>
using namespace std;

int main() {
    cout << "Hello" << endl;
    return 0;
}
```

Unlike Python where `print()` is built in, C++ requires you to explicitly include the `` header to use `cout`, `cin`, and `endl`. Without the include, the compiler has no idea what `cout` is. Every feature in C++ must be explicitly included.

### Using << with cin (or >> with cout)

**Wrong:**

```
#include <iostream>
using namespace std;

int main() {
    int x;
    cin << x;   // WRONG direction
    cout >> x;  // WRONG direction
    return 0;
}
```

error: no match for 'operator<<' / 'operator>>'

**Correct:**

```
#include <iostream>
using namespace std;

int main() {
    int x;
    cin >> x;   // Extraction: data flows FROM cin INTO x
    cout << x;  // Insertion: data flows FROM x INTO cout
    return 0;
}
```

Think of the arrows as showing the direction of data flow. `cin >> x` means data flows from the input stream into `x` (the arrows point toward x). `cout << x` means data flows from `x` into the output stream (the arrows point toward cout). Mixing them up is a common beginner mistake.

### Writing void main() Instead of int main()

**Wrong:**

```
#include <iostream>
using namespace std;

void main() {
    cout << "Hello" << endl;
}
```

warning: 'main' must return 'int' (some compilers will error, others warn)

**Correct:**

```
#include <iostream>
using namespace std;

int main() {
    cout << "Hello" << endl;
    return 0;
}
```

The C++ standard mandates that `main()` must return `int`. While some compilers (like older Turbo C++) accept `void main()`, it is not standard-compliant. In competitive programming and interviews, always write `int main()`. The return value is the exit code that the operating system reads.

## Summary

- C++ was created by Bjarne Stroustrup in 1979 at Bell Labs as an extension of C. It was originally called 'C with Classes' and renamed to C++ in 1983.
- C++ is a compiled, statically typed, multi-paradigm language supporting procedural, object-oriented, and generic programming.
- Key features: compiled to native machine code (fast), OOP support (classes, inheritance, polymorphism), low-level memory access (pointers), and the Standard Template Library (STL).
- C++ is used in game engines (Unreal), operating systems (Windows, Linux modules), browsers (Chrome, Firefox), databases (MySQL, MongoDB), competitive programming, and high-frequency trading.
- C++ vs C: C++ adds OOP, STL, references, and templates. C++ vs Java: C++ has no garbage collector, supports multiple inheritance, and compiles to native code. C++ vs Python: C++ is 10-100x faster but more verbose.
- The compilation process has four stages: Preprocessing (#include expansion) -> Compilation (source to assembly) -> Assembly (assembly to object code) -> Linking (object files to executable).
- Major C++ standards: C++98 (first standard), C++11 (auto, lambdas, smart pointers), C++14, C++17 (structured bindings, optional), C++20 (concepts, ranges, coroutines).
- Every C++ program must have an int main() function. Statements end with semicolons. #include  is needed for cout and cin.
- C++ is the dominant language in competitive programming due to its speed and the STL. It is also heavily favored in placement interviews at product companies.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/introduction-to-cpp/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/introduction-to-cpp/practice/*
