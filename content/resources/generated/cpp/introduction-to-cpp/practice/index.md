---
title: "Practice: Introduction to C++"
description: "55 practice problems for Introduction to C++ in C++"
slug: introduction-to-cpp-practice
canonical: https://learn.modernagecoders.com/resources/cpp/introduction-to-cpp/practice/
category: "C++"
---
# Practice: Introduction to C++

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
#include 
using namespace std;
int main() {
    cout << "Hello, World!";
    return 0;
}
```

*Hint:* cout << sends text to the standard output.

**Answer:** `Hello, World!`

`cout << "Hello, World!"` prints the string to the console. There is no `endl` or `\n`, so the cursor stays on the same line, but the printed output is `Hello, World!`.

### Q2. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << sizeof(char) << endl;
    return 0;
}
```

*Hint:* The size of char is defined by the C++ standard.

**Answer:** `1`

The C++ standard guarantees that `sizeof(char)` is always `1` byte. This is true on every platform and every compiler. All other type sizes are defined relative to char.

### Q3. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << sizeof(int) << endl;
    return 0;
}
```

*Hint:* On most modern 64-bit systems, int is 4 bytes.

**Answer:** `4`

On most modern systems (32-bit and 64-bit), `sizeof(int)` is `4` bytes (32 bits). This gives int a range of approximately -2.1 billion to +2.1 billion. The C++ standard only guarantees int is at least 16 bits, but in practice it is always 32 bits on modern platforms.

### Q4. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << "Line 1" << endl;
    cout << "Line 2" << endl;
    return 0;
}
```

*Hint:* endl inserts a newline and flushes the buffer.

**Answer:** `Line 1`
`Line 2`

Each `endl` inserts a newline character. So `"Line 1"` prints on the first line and `"Line 2"` prints on the second line. The output is two lines.

### Q5. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << 10 + 20 << endl;
    return 0;
}
```

*Hint:* The expression is evaluated first, then the result is printed.

**Answer:** `30`

C++ evaluates the expression `10 + 20` first, producing the integer `30`. Then `cout <<` prints that result. Arithmetic expressions inside `cout` are evaluated before printing.

### Q6. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    cout << "Value: " << 5 << " + " << 3 << " = " << 5 + 3 << endl;
    return 0;
}
```

*Hint:* The << operator chains multiple outputs. Expressions are evaluated when reached.

**Answer:** `Value: 5 + 3 = 8`

The `<<` operator is left-associative and chains outputs left to right. First `"Value: "` is printed, then `5`, then `" + "`, then `3`, then `" = "`, then the expression `5 + 3` is evaluated to `8` and printed.

### Q7. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    cout << sizeof(double) << endl;
    cout << sizeof(long long) << endl;
    return 0;
}
```

*Hint:* double and long long are both 8 bytes on most modern systems.

**Answer:** `8`
`8`

On most modern systems, `sizeof(double)` is 8 bytes (64-bit IEEE 754) and `sizeof(long long)` is 8 bytes (64-bit integer). Both are guaranteed to be at least 8 bytes by the standard.

### Q8. [Easy] Who created C++ and when? What was it originally called?

*Hint:* Think Bell Labs, late 1970s.

**Answer:** C++ was created by **Bjarne Stroustrup** in **1979** at **Bell Labs**. It was originally called **"C with Classes"** and renamed to C++ in 1983.

Stroustrup wanted to add Simula-like classes to C without sacrificing C's efficiency. The name C++ uses the increment operator from C, symbolizing that C++ is 'one step beyond C.'

### Q9. [Easy] Name any four real-world applications or domains where C++ is heavily used.

*Hint:* Think about software that needs to be very fast.

**Answer:** C++ is heavily used in: (1) **Game engines** (Unreal Engine), (2) **Operating systems** (Windows, parts of Linux), (3) **Web browsers** (Chrome, Firefox), and (4) **Competitive programming** (Codeforces, ICPC). Other domains include databases (MySQL), finance (HFT), and embedded systems.

All these domains share a common requirement: performance. C++ compiles to native machine code and gives direct control over memory, making it the go-to language when milliseconds or bytes matter.

### Q10. [Medium] Explain the four stages of the C++ compilation process.

*Hint:* Source code goes through four transformations before becoming an executable.

**Answer:** The four stages are: (1) **Preprocessing** -- expands #include directives, macros, and conditional compilation. (2) **Compilation** -- converts preprocessed source to assembly language. (3) **Assembly** -- converts assembly to machine code (object file, .o). (4) **Linking** -- combines object files and library references into the final executable.

You can see each stage using g++ flags: `-E` (preprocess only), `-S` (compile to assembly), `-c` (assemble to object file). Without flags, all stages run and produce the executable.

### Q11. [Medium] What are three key differences between C++ and Java?

*Hint:* Think about memory management, compilation, and language features.

**Answer:** (1) **Memory management:** C++ uses manual memory management (new/delete, smart pointers) while Java has automatic garbage collection. (2) **Compilation:** C++ compiles to native machine code, while Java compiles to bytecode that runs on the JVM. (3) **Multiple inheritance:** C++ supports multiple inheritance of classes, while Java only allows multiple interface implementation.

These differences reflect different design philosophies. Java prioritizes safety and portability (write once, run anywhere via JVM). C++ prioritizes performance and control (compile to native code for each platform). Both are valid approaches depending on the use case.

### Q12. [Medium] What was the significance of C++11? Name at least four features it introduced.

*Hint:* C++11 was called 'Modern C++' because of how many features it added.

**Answer:** C++11 was the biggest update to C++ since its original standardization. Key features: (1) `auto` keyword for type inference, (2) Range-based for loops, (3) Lambda expressions, (4) Smart pointers (`unique_ptr`, `shared_ptr`), (5) Move semantics and rvalue references, (6) `nullptr` replacing NULL, (7) `constexpr` for compile-time computation, (8) Threading support.

C++11 is often called the dividing line between 'old C++' and 'Modern C++.' It made C++ significantly more expressive and safer while maintaining its performance characteristics.

### Q13. [Medium] What happens when you compile and run this code?

```
#include 
int main() {
    std::cout << "No using namespace" << std::endl;
    return 0;
}
```

*Hint:* Without 'using namespace std', you must prefix std:: before cout and endl.

**Answer:** It compiles and runs successfully. Output: `No using namespace`

Without `using namespace std;`, you must explicitly write `std::cout` and `std::endl`. This is actually the recommended practice in large projects to avoid name conflicts. The `using namespace std;` directive is mainly used in competitive programming and small programs for brevity.

### Q14. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    cout << sizeof(sizeof(int)) << endl;
    return 0;
}
```

*Hint:* sizeof returns a value of type size_t. What is the size of size_t?

**Answer:** `8` (on a 64-bit system) or `4` (on a 32-bit system)

`sizeof(int)` evaluates to 4 (of type `size_t`). Then `sizeof(sizeof(int))` asks for the size of `size_t` itself. On a 64-bit system, `size_t` is 8 bytes. On a 32-bit system, it is 4 bytes. This is a common interview trick question.

### Q15. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    cout << "Hello";
    cout << " World";
    cout << endl;
    return 0;
}
```

*Hint:* Multiple cout statements without endl do not insert newlines between them.

**Answer:** `Hello World`

Without `endl` or `\n` between them, the outputs are concatenated on the same line. The first `cout` prints `Hello`, the second appends ` World` (note the leading space in the string), and then `endl` moves to the next line. Output: `Hello World` on one line.

### Q16. [Hard] What is the difference between a compiler error and a linker error in C++? Give an example of each.

*Hint:* Compiler errors happen during the compilation stage. Linker errors happen when combining object files.

**Answer:** A **compiler error** occurs when the source code has syntax errors or type mismatches. Example: using a variable without declaring it (`x = 5;` without `int x;`). A **linker error** occurs when the compiler succeeds but the linker cannot find a function or variable definition. Example: declaring `void myFunc();` and calling it, but never providing the function body -- the linker cannot resolve the reference.

Compiler errors have specific line numbers and are easier to fix. Linker errors like `undefined reference to 'myFunc()'` can be harder to debug because they do not point to a specific line. They usually mean you forgot to define a function, forgot to link a library, or have mismatched function signatures.

### Q17. [Hard] Why is C++ preferred over Python in competitive programming despite Python being easier to write?

*Hint:* Think about execution speed and time limits.

**Answer:** C++ is preferred in competitive programming for three reasons: (1) **Speed:** C++ is 10-100x faster than Python, and CP problems have strict time limits (usually 1-2 seconds). A solution that passes in C++ may get TLE (Time Limit Exceeded) in Python. (2) **STL:** The Standard Template Library provides optimized data structures (set, map, priority_queue) and algorithms (sort, lower_bound) out of the box. (3) **Deterministic performance:** No garbage collector pauses or interpreter overhead.

Most competitive programming judges give C++ solutions 1-2 seconds, while Python gets 3-5x more time. Even with the extra time, complex problems (O(n log n) with n = 10^6) often cannot pass in Python. This is why most top competitive programmers (tourist, Benq, Petr) use C++.

### Q18. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << "C" << "+" << "+" << endl;
    return 0;
}
```

*Hint:* Each << outputs its operand sequentially.

**Answer:** `C++`

The chained `<<` operators output each string sequentially: `"C"`, then `"+"`, then `"+"`, resulting in `C++`. Then `endl` adds a newline.

### Q19. [Medium] What does the preprocessor directive #include do? What is the difference between #include  and #include "myfile.h"?

*Hint:* Think about where the compiler looks for the file.

**Answer:** `#include` tells the preprocessor to copy the entire contents of the specified file into the current file before compilation. `#include ` (angle brackets) searches in the **system/standard library** directories. `#include "myfile.h"` (double quotes) searches in the **current directory first**, then falls back to system directories.

Use angle brackets for standard library headers (iostream, vector, string). Use double quotes for your own custom header files. This distinction helps the compiler find files efficiently.

### Q20. [Hard] Does this program compile? If yes, what is the output?

```
#include 
using namespace std;
int main() {
    cout << sizeof('A') << endl;
    return 0;
}
```

*Hint:* In C, sizeof('A') is 4 because character literals are ints in C. What about C++?

**Answer:** `1`

In C++, character literals like `'A'` have type `char`, so `sizeof('A')` is `1`. This is different from C, where character literals have type `int`, making `sizeof('A')` equal to 4. This is a classic C vs C++ difference that appears in interviews.

## Mixed Questions

### Q1. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << 100 << endl;
    cout << 200 << endl;
    return 0;
}
```

*Hint:* Each cout with endl prints on a new line.

**Answer:** `100`
`200`

The first `cout` prints `100` followed by a newline (from `endl`). The second prints `200` on the next line. Simple sequential output.

### Q2. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << 3 + 4 * 2 << endl;
    return 0;
}
```

*Hint:* C++ follows standard mathematical operator precedence.

**Answer:** `11`

Multiplication has higher precedence than addition. So `4 * 2` is evaluated first (giving 8), then `3 + 8` gives `11`. Not 14.

### Q3. [Easy] Write a C++ program that prints your name, age, and college on three separate lines using three separate cout statements.

*Hint:* Use endl or '\n' after each cout to move to the next line.

**Answer:** ```
#include 
using namespace std;
int main() {
    cout << "Arjun" << endl;
    cout << 20 << endl;
    cout << "IIT Delhi" << endl;
    return 0;
}
```

Output:
Arjun
20
IIT Delhi

Three separate `cout` statements, each ending with `endl`, produce three lines of output. You can also use `"\n"` instead of `endl`.

### Q4. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    cout << "A" << "B" << endl << "C" << "D" << endl;
    return 0;
}
```

*Hint:* endl can appear in the middle of a chain, not just at the end.

**Answer:** `AB`
`CD`

The chain outputs `"A"`, then `"B"`, then `endl` (newline). On the next line, `"C"` and `"D"` are printed, followed by another `endl`. Result: `AB` on line 1, `CD` on line 2.

### Q5. [Medium] What is the difference between endl and '\n' in C++?

*Hint:* Both produce a newline, but one does something extra.

**Answer:** Both `endl` and `'\n'` insert a newline character. However, `endl` also **flushes the output buffer**, forcing all buffered output to be written to the screen immediately. `'\n'` just adds a newline without flushing. In competitive programming, using `'\n'` is faster because flushing the buffer takes time.

For competitive programming, always use `'\n'` instead of `endl` for better performance. The overhead of flushing can add up significantly when printing millions of lines. For regular programs, the difference is negligible.

### Q6. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    int a = 10;
    cout << "a = " << a << endl;
    a = 20;
    cout << "a = " << a << endl;
    return 0;
}
```

*Hint:* The variable is reassigned between the two print statements.

**Answer:** `a = 10`
`a = 20`

The first `cout` prints the value of `a` which is 10. Then `a` is reassigned to 20. The second `cout` prints the new value, 20.

### Q7. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    cout << sizeof(bool) << endl;
    cout << sizeof(short) << endl;
    cout << sizeof(float) << endl;
    return 0;
}
```

*Hint:* bool is 1 byte, short is 2 bytes, float is 4 bytes on most systems.

**Answer:** `1`
`2`
`4`

On most modern systems: `bool` occupies 1 byte (even though it only needs 1 bit), `short` is 2 bytes (16 bits), and `float` is 4 bytes (32-bit IEEE 754). These are the typical sizes across all major compilers.

### Q8. [Medium] Write a C++ program that declares two integer variables, assigns them values 15 and 27, and prints their sum, difference, product, and quotient.

*Hint:* Remember that integer division truncates the decimal part.

**Answer:** ```
#include 
using namespace std;
int main() {
    int a = 15, b = 27;
    cout << "Sum: " << a + b << endl;
    cout << "Difference: " << a - b << endl;
    cout << "Product: " << a * b << endl;
    cout << "Quotient: " << a / b << endl;
    return 0;
}
```

Output:
Sum: 42
Difference: -12
Product: 405
Quotient: 0

Sum is 42, difference is -12, product is 405. The quotient is 0 because `15 / 27` performs integer division (since both operands are int), and 15 divided by 27 is 0 with a remainder of 15.

### Q9. [Hard] Does this code compile? If yes, what is the output?

```
#include 
using namespace std;
int main() {
    cout << "Size: " << sizeof("Hello") << endl;
    return 0;
}
```

*Hint:* String literals in C++ are arrays of char, and they have a null terminator.

**Answer:** `Size: 6`

The string literal `"Hello"` is stored as a char array: `{'H', 'e', 'l', 'l', 'o', '\0'}`. The null terminator `\0` is included, so the total size is 6 bytes (5 characters + 1 null terminator). This is a common interview question.

### Q10. [Hard] Explain what 'using namespace std;' does and why some programmers avoid it in large projects.

*Hint:* Think about what happens when two libraries define a function with the same name.

**Answer:** The `using namespace std;` directive imports all names from the `std` namespace into the current scope. This lets you write `cout` instead of `std::cout`. In large projects, this is avoided because it can cause **name collisions** -- if you define your own function called `count` or `distance`, it conflicts with `std::count` or `std::distance` from the standard library, leading to ambiguous calls.

In competitive programming, `using namespace std;` is fine because programs are small and you want to type fast. In production code and large projects, prefer explicit `std::` prefixes or selective imports like `using std::cout;` and `using std::endl;`.

### Q11. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << "Hello " << 2026 << "!" << endl;
    return 0;
}
```

*Hint:* You can chain strings and numbers together with <<.

**Answer:** `Hello 2026!`

The `<<` operator can chain strings, integers, and other types. `"Hello "`, `2026` (an int), and `"!"` are output sequentially to produce `Hello 2026!`.

### Q12. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    int x = 5;
    cout << sizeof(x) << " " << sizeof(x + 1.0) << endl;
    return 0;
}
```

*Hint:* When int and double are added, the result is promoted to double.

**Answer:** `4 8`

`sizeof(x)` is `sizeof(int)` = 4. For `x + 1.0`, the integer `x` is implicitly promoted to `double` (because `1.0` is a double), so the expression has type `double`. `sizeof(double)` is 8. Note that `sizeof` evaluates the type of the expression at compile time without actually computing the expression.

## Multiple Choice Questions

### Q1. [Easy] Who created C++?

**B is correct.** Bjarne Stroustrup created C++ in 1979 at Bell Labs. Dennis Ritchie (A) created C. James Gosling (C) created Java. Guido van Rossum (D) created Python.

### Q2. [Easy] What was C++ originally called?

**C is correct.** Stroustrup originally named the language 'C with Classes' because his goal was to add class-based object-oriented programming to C. It was renamed to C++ in 1983.

### Q3. [Easy] What does the ++ in C++ represent?

**B is correct.** In C, the `++` operator increments a value by 1. So C++ literally means 'C incremented by 1' -- one step beyond C. This clever naming reflects that C++ is an evolution of C.

### Q4. [Easy] Which of the following is NOT a feature of C++?

**B is correct.** C++ does NOT have automatic garbage collection like Java or Python. In C++, the programmer is responsible for managing memory using `new` and `delete` (or smart pointers in modern C++). All other options are genuine C++ features.

### Q5. [Easy] Which header file is needed to use cout and cin?

**C is correct.** `` provides `cout`, `cin`, `cerr`, `clog`, and `endl`. `<stdio.h>` (A) is the C header for printf/scanf. `<conio.h>` (B) is a non-standard header. `` (D) is for the string class.

### Q6. [Easy] What is the correct return type of the main() function in standard C++?

**B is correct.** The C++ standard requires `main()` to return `int`. `return 0;` indicates successful execution. While some older compilers accept `void main()`, it is not standard-compliant and should be avoided.

### Q7. [Medium] What is the output of sizeof(char) in C++?

**B is correct.** The C++ standard guarantees that `sizeof(char)` is always 1 byte on every platform and every compiler. This is the only type with a guaranteed fixed size.

### Q8. [Medium] Which of the following is the correct compilation command for a C++ file using g++?

**B is correct.** `g++` is the GNU C++ compiler. The `-o output` flag specifies the name of the output executable. While `gcc` (A) can compile C++ with the `-lstdc++` flag, `g++` is the standard approach. `cpp` (C) is the preprocessor, not the compiler.

### Q9. [Medium] Which stage of the C++ compilation process resolves #include directives?

**C is correct.** The preprocessor runs before the compiler and handles all directives starting with `#`: `#include`, `#define`, `#ifdef`, etc. It replaces `#include ` with the actual file contents.

### Q10. [Medium] What does 'return 0;' in main() signify?

**C is correct.** `return 0;` sends an exit code of 0 to the operating system, which conventionally means the program executed successfully. A non-zero return value (like 1) indicates an error.

### Q11. [Medium] In C++, sizeof('A') evaluates to what value?

**A is correct.** In C++, character literals like `'A'` have type `char`, which is 1 byte. This is different from C, where `'A'` has type `int` (4 bytes). This difference is a classic C/C++ interview question.

### Q12. [Medium] Which C++ standard introduced smart pointers, lambda expressions, and the auto keyword?

**C is correct.** C++11 was the landmark update that introduced `auto`, lambda expressions, smart pointers (`unique_ptr`, `shared_ptr`), range-based for loops, move semantics, `nullptr`, and much more. It is often called 'Modern C++.'

### Q13. [Hard] What is the output of sizeof("Hi") in C++?

**B is correct.** The string literal `"Hi"` is stored as a char array `{'H', 'i', '\0'}`. The null terminator adds 1 extra byte. So `sizeof("Hi")` = 2 characters + 1 null terminator = 3 bytes.

### Q14. [Hard] Which of the following is NOT a valid C++ file extension?

**D is correct.** While `.cpp`, `.cc`, and `.cxx` are all valid and commonly recognized C++ file extensions, `.c++` is problematic because the `+` character is not universally supported in filenames across all operating systems and build tools.

### Q15. [Hard] What does the linker do in the C++ compilation process?

**D is correct.** The linker takes one or more object files (`.o` files), resolves references between them (e.g., function calls across files), links in the standard library, and produces the final executable. Option A is the compiler, B is the preprocessor, C is the assembler.

### Q16. [Hard] Which of the following is true about C++ compared to Java?

**C is correct.** C++ supports multiple inheritance (a class can inherit from multiple base classes), while Java only supports single class inheritance (multiple interface implementation is allowed). C++ compiles to native code, not a VM (A is wrong). C++ has no GC (B is wrong). C++ fully supports operator overloading (D is wrong).

### Q17. [Easy] Which operator is used for output in C++?

**B is correct.** The `<<` operator (insertion operator) is used with `cout` for output. The `>>` operator (extraction operator) is used with `cin` for input. `->` is for accessing members via pointers. `::` is the scope resolution operator.

### Q18. [Hard] What is the value of __cplusplus macro when compiling with C++17 standard?

**C is correct.** The `__cplusplus` macro is set to `201703L` for C++17. The values correspond to the year and month of the standard's publication: `201103L` (C++11), `201402L` (C++14), `201703L` (C++17), `202002L` (C++20).

### Q19. [Medium] Which of these correctly describes C++?

**D is correct.** C++ is a **compiled** language (source code is compiled to native machine code) and **statically typed** (variable types are determined at compile time and cannot change). Python is interpreted and dynamically typed. JavaScript is interpreted and dynamically typed.

### Q20. [Hard] Which C++ feature is used to write generic, type-independent code?

**C is correct.** **Templates** allow you to write code that works with any data type. For example, `template T add(T a, T b) { return a + b; }` works with int, float, double, etc. The STL (vector, map, sort) is built entirely on templates. Inheritance (A) and Polymorphism (B) are OOP concepts, not generics.

## Coding Challenges

### Challenge 1. Print a Formatted ID Card

**Difficulty:** Easy

Write a C++ program that prints a formatted student ID card on the console. Print the name 'Sneha', roll number 'CS2024035', branch 'Computer Science', and year '2nd Year', each on a separate line with labels.

**Constraints:**

- Use cout for output. Each field must be on its own line.

**Sample input:**

```
(No input required - use hardcoded values)
```

**Sample output:**

```
Name: Sneha
Roll No: CS2024035
Branch: Computer Science
Year: 2nd Year
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    cout << "Name: Sneha" << endl;
    cout << "Roll No: CS2024035" << endl;
    cout << "Branch: Computer Science" << endl;
    cout << "Year: 2nd Year" << endl;
    return 0;
}
```

### Challenge 2. Data Type Size Reporter

**Difficulty:** Easy

Write a C++ program that prints the size (in bytes) of all fundamental data types: char, short, int, long, long long, float, double, and bool. Print each on a separate line with the type name.

**Constraints:**

- Use the sizeof operator for each type.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
char: 1 bytes
short: 2 bytes
int: 4 bytes
long: 4 bytes
long long: 8 bytes
float: 4 bytes
double: 8 bytes
bool: 1 bytes
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    cout << "char: " << sizeof(char) << " bytes" << endl;
    cout << "short: " << sizeof(short) << " bytes" << endl;
    cout << "int: " << sizeof(int) << " bytes" << endl;
    cout << "long: " << sizeof(long) << " bytes" << endl;
    cout << "long long: " << sizeof(long long) << " bytes" << endl;
    cout << "float: " << sizeof(float) << " bytes" << endl;
    cout << "double: " << sizeof(double) << " bytes" << endl;
    cout << "bool: " << sizeof(bool) << " bytes" << endl;
    return 0;
}
```

### Challenge 3. String Literal Size Puzzle

**Difficulty:** Medium

Write a program that prints the sizeof the following string literals and explains the output using comments: "Hello", "A", "", and "C++". Remember that string literals include a null terminator.

**Constraints:**

- Use sizeof on each string literal. Add comments explaining why the size is one more than the visible characters.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
sizeof("Hello") = 6
sizeof("A") = 2
sizeof("") = 1
sizeof("C++") = 4
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    // Each string literal has a hidden '\0' null terminator
    cout << "sizeof(\"Hello\") = " << sizeof("Hello") << endl;  // 5 chars + 1 null = 6
    cout << "sizeof(\"A\") = " << sizeof("A") << endl;          // 1 char + 1 null = 2
    cout << "sizeof(\"\") = " << sizeof("") << endl;             // 0 chars + 1 null = 1
    cout << "sizeof(\"C++\") = " << sizeof("C++") << endl;      // 3 chars + 1 null = 4
    return 0;
}
```

### Challenge 4. Compilation Flags Explorer

**Difficulty:** Medium

Write a C++ program that uses the __cplusplus macro and preprocessor conditionals (#if, #elif) to print which C++ standard is being used. Test compiling it with different flags: g++ -std=c++11, g++ -std=c++17, g++ -std=c++20.

**Constraints:**

- Use #if, #elif, #else preprocessor directives. Handle C++11, C++14, C++17, and C++20.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
C++ version: 201703
You are compiling with C++17
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    cout << "C++ version: " << __cplusplus << endl;
    #if __cplusplus >= 202002L
        cout << "You are compiling with C++20" << endl;
    #elif __cplusplus >= 201703L
        cout << "You are compiling with C++17" << endl;
    #elif __cplusplus >= 201402L
        cout << "You are compiling with C++14" << endl;
    #elif __cplusplus >= 201103L
        cout << "You are compiling with C++11" << endl;
    #else
        cout << "You are compiling with C++98/03" << endl;
    #endif
    return 0;
}
```

### Challenge 5. Expression vs String Output

**Difficulty:** Hard

Write a program that demonstrates the difference between printing an arithmetic expression and printing the same expression as a string. Print '10 + 20 = ' followed by the computed result 30, all on one line. Then print the string '10 + 20' literally (without computing it).

**Constraints:**

- Use a single cout chain for each line. Do NOT use any variables.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Computed: 10 + 20 = 30
Literal: 10 + 20
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    cout << "Computed: 10 + 20 = " << 10 + 20 << endl;
    cout << "Literal: 10 + 20" << endl;
    return 0;
}
```

### Challenge 6. Multi-line Art with cout

**Difficulty:** Easy

Write a C++ program that prints the following pattern using only cout and endl (or '\n'). Use separate cout statements for each line.

  *
 ***
*****
 ***
  *

**Constraints:**

- Use only cout and string literals. No loops.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
  *
 ***
*****
 ***
  *
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    cout << "  *" << endl;
    cout << " ***" << endl;
    cout << "*****" << endl;
    cout << " ***" << endl;
    cout << "  *" << endl;
    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/introduction-to-cpp/*
