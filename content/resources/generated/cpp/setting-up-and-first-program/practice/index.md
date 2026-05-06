---
title: "Practice: Setting Up C++ and Your First Program"
description: "54 practice problems for Setting Up C++ and Your First Program in C++"
slug: setting-up-and-first-program-practice
canonical: https://learn.modernagecoders.com/resources/cpp/setting-up-and-first-program/practice
category: "C++"
---
# Practice: Setting Up C++ and Your First Program

**Total questions:** 54

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << "Hello" << endl;
    cout << "World" << endl;
    return 0;
}
```

*Hint:* Each endl moves output to the next line.

**Answer:** `Hello`
`World`

The first `cout` prints `Hello` followed by a newline (from `endl`). The second prints `World` on the next line. Two separate lines of output.

### Q2. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << "A" << "B" << "C" << endl;
    return 0;
}
```

*Hint:* Chaining << outputs values sequentially without spaces.

**Answer:** `ABC`

The chained `<<` operators output each string one after another with no spaces between them: `A`, then `B`, then `C`. Result: `ABC`.

### Q3. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << "Sum = " << 5 + 3 << endl;
    return 0;
}
```

*Hint:* Arithmetic expressions are evaluated before being printed.

**Answer:** `Sum = 8`

The expression `5 + 3` is evaluated to `8`, then printed after the string `"Sum = "`. Output: `Sum = 8`.

### Q4. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    // cout << "This is commented out";
    cout << "This prints" << endl;
    return 0;
}
```

*Hint:* Comments are ignored by the compiler.

**Answer:** `This prints`

The first line inside main is a comment (starts with `//`), so the compiler ignores it completely. Only the second `cout` executes, printing `This prints`.

### Q5. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << "Hello\nWorld\nC++" << endl;
    return 0;
}
```

*Hint:* \n is an escape sequence that produces a newline.

**Answer:** `Hello`
`World`
`C++`

The `\n` escape sequences inside the string create newlines. The output is three lines: `Hello`, `World`, and `C++`.

### Q6. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    int x = 10;
    int y = 3;
    cout << x / y << endl;
    return 0;
}
```

*Hint:* Both operands are int, so this is integer division.

**Answer:** `3`

When both operands of `/` are integers, C++ performs **integer division**, which truncates the decimal part. `10 / 3` = 3.333... truncated to `3`. To get 3.333, at least one operand must be a float or double.

### Q7. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    cout << "Hello";
    cout << " ";
    cout << "World";
    cout << endl;
    return 0;
}
```

*Hint:* Without endl or \n, outputs stay on the same line.

**Answer:** `Hello World`

Without `endl` or `\n`, each `cout` continues on the same line. The three outputs concatenate: `Hello` + ` ` + `World` = `Hello World`. The final `endl` moves to the next line after the output.

### Q8. [Easy] What is the difference between // and /* */ comments in C++?

*Hint:* One is for single lines, the other for multiple lines.

**Answer:** `//` is a **single-line comment**: everything after `//` until the end of the line is ignored. `/* ... */` is a **multi-line comment**: everything between `/*` and `*/` is ignored, even across multiple lines.

Single-line comments are more common for brief notes. Multi-line comments are useful for longer explanations or temporarily disabling blocks of code. Multi-line comments cannot be nested (a `/*` inside a `/* */` block causes issues).

### Q9. [Medium] What does 'using namespace std;' do, and what happens if you omit it?

*Hint:* It relates to how C++ organizes standard library names.

**Answer:** `using namespace std;` imports all names from the `std` namespace into the current scope. If you omit it, you must prefix every standard library name with `std::`, like `std::cout`, `std::cin`, `std::endl`, `std::string`.

The `std` namespace contains the entire C++ standard library. The `using` directive is a convenience that avoids repetitive typing. In competitive programming it saves time, but in large projects it can cause name collisions.

### Q10. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    cout << "Tab:\tEnd" << endl;
    cout << "Quote: \"Hello\"" << endl;
    cout << "Backslash: \\" << endl;
    return 0;
}
```

*Hint:* \t is tab, \" is a literal double quote, \\ is a literal backslash.

**Answer:** `Tab:	End`
`Quote: "Hello"`
`Backslash: \`

`\t` inserts a horizontal tab. `\"` inserts a literal double quote character. `\\` inserts a single backslash (because backslash is the escape character, you need two to get one literal backslash).

### Q11. [Medium] Does this program compile? If yes, what is the output?

```
#include 
int main() {
    std::cout << 42 << std::endl;
    return 0;
}
```

*Hint:* Without 'using namespace std', you must use the std:: prefix.

**Answer:** Yes, it compiles. Output: `42`

This program does not use `using namespace std;`, so it uses the explicit `std::` prefix for `cout` and `endl`. This is perfectly valid and is actually the recommended style for production code.

### Q12. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    int a, b;
    a = b = 5;
    cout << a << " " << b << endl;
    return 0;
}
```

*Hint:* Assignment operators are right-associative: b = 5 happens first, then a = b.

**Answer:** `5 5`

The assignment operator `=` is right-associative. `a = b = 5` is evaluated as `a = (b = 5)`. First, `b` is assigned 5. The expression `b = 5` returns the value 5, which is then assigned to `a`. Both variables end up with value 5.

### Q13. [Hard] Explain the difference between endl and '\n'. When would you prefer one over the other?

*Hint:* One does something extra that affects performance.

**Answer:** Both produce a newline, but `endl` also **flushes the output buffer**. Flushing forces all buffered output to be written to the screen immediately. `'\n'` just adds a newline without flushing. Use `'\n'` in competitive programming for better performance (flushing is slow when done millions of times). Use `endl` when you need to ensure output appears immediately (e.g., before waiting for input).

The output buffer is a temporary storage area. Data is collected in the buffer and written to the screen in batches for efficiency. Flushing forces the buffer to write immediately. In competitive programming with heavy I/O, unnecessary flushing from `endl` can cause TLE (Time Limit Exceeded).

### Q14. [Hard] Does this compile? What happens?

```
#include 
using namespace std;
int main() {
    cout << "Hello" << endl
    return 0;
}
```

*Hint:* Look carefully at the end of the cout line.

**Answer:** It does NOT compile. Error: `expected ';' before 'return'`

The `cout` statement is missing a semicolon after `endl`. Without the semicolon, the compiler sees `endl return` as one continuous expression, which is not valid. This is the most common beginner error in C++.

### Q15. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    /* This is a
       multi-line comment */
    cout << 42 << endl;
    return 0;
}
```

*Hint:* Multi-line comments are completely ignored.

**Answer:** `42`

The multi-line comment between `/*` and `*/` is completely ignored by the compiler. Only the `cout` statement executes, printing `42`.

### Q16. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    cout << "Line 1" << '\n' << "Line 2" << '\n';
    return 0;
}
```

*Hint:* '\n' works the same as endl for producing a newline (but does not flush).

**Answer:** `Line 1`
`Line 2`

The character `'\n'` produces a newline just like `endl` but without flushing the buffer. The output is identical: two lines.

### Q17. [Medium] What is the g++ command to compile a file called 'solution.cpp' with C++17 standard and all warnings enabled, producing an executable called 'sol'?

*Hint:* Combine the -std, -Wall, and -o flags.

**Answer:** `g++ -std=c++17 -Wall solution.cpp -o sol`

`-std=c++17` selects the C++17 standard. `-Wall` enables all common warnings (uninitialized variables, unused variables, etc.). `-o sol` names the output executable `sol`. You can also add `-Wextra` for even more warnings and `-O2` for optimization.

### Q18. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    int a = 10;
    cout << "a" << endl;
    cout << a << endl;
    return 0;
}
```

*Hint:* Pay attention to the quotes. "a" is a string, a (without quotes) is a variable.

**Answer:** `a`
`10`

`"a"` (in double quotes) is the string literal containing the character 'a'. `a` (without quotes) is the variable with value 10. The first line prints the letter `a`, the second prints the number `10`. This distinction between quoted and unquoted names is fundamental.

### Q19. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    cout << 10 / 3 << endl;
    cout << 10.0 / 3 << endl;
    return 0;
}
```

*Hint:* Integer division truncates. If either operand is floating-point, the result is floating-point.

**Answer:** `3`
`3.33333`

`10 / 3` performs integer division (both operands are int), giving `3` (decimal part truncated). `10.0 / 3` performs floating-point division (10.0 is a double), giving `3.33333`. This is a critical distinction in C++.

### Q20. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << "First ";
    cout << "Second ";
    cout << "Third" << endl;
    return 0;
}
```

*Hint:* Without endl or \n, output continues on the same line.

**Answer:** `First Second Third`

The three `cout` statements output on the same line because there is no `endl` or `\n` between them. The trailing spaces in the string literals provide the spacing.

## Mixed Questions

### Q1. [Easy] Write a C++ program that prints 'Hello, I am [your name] and I am learning C++!' on one line.

*Hint:* Use cout with chained << operators.

**Answer:** ```
#include 
using namespace std;
int main() {
    cout << "Hello, I am Vikas and I am learning C++!" << endl;
    return 0;
}
```

Output: Hello, I am Vikas and I am learning C++!

A straightforward program using `cout` with `endl` to print a single line. Replace "Vikas" with any name.

### Q2. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << 2 * 3 + 1 << endl;
    return 0;
}
```

*Hint:* Multiplication has higher precedence than addition.

**Answer:** `7`

`2 * 3` is evaluated first (giving 6), then `6 + 1` = 7. The result is printed.

### Q3. [Medium] Write a C++ program that reads two integers from the user and prints their sum, difference, product, and quotient.

*Hint:* Use cin >> to read both numbers. Remember integer division truncates.

**Answer:** ```
#include 
using namespace std;
int main() {
    int a, b;
    cout << "Enter two integers: ";
    cin >> a >> b;
    cout << "Sum: " << a + b << endl;
    cout << "Difference: " << a - b << endl;
    cout << "Product: " << a * b << endl;
    cout << "Quotient: " << a / b << endl;
    return 0;
}
```

Input: 15 4
Output:
Sum: 19
Difference: 11
Product: 60
Quotient: 3

The program reads two integers using `cin >> a >> b` and computes all four operations. Note that `15 / 4` gives `3` (integer division), not 3.75.

### Q4. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    int x = 5;
    cout << x << endl;
    cout << "x" << endl;
    cout << 'x' << endl;
    return 0;
}
```

*Hint:* x (no quotes) is a variable, "x" is a string, 'x' is a character.

**Answer:** `5`
`x`
`x`

`x` without quotes refers to the variable (value 5). `"x"` in double quotes is the string literal. `'x'` in single quotes is the character literal. Both the string and character print the letter `x`.

### Q5. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    cout << "A\tB\tC" << endl;
    cout << "1\t2\t3" << endl;
    return 0;
}
```

*Hint:* \t inserts a horizontal tab character.

**Answer:** `A	B	C`
`1	2	3`

The `\t` escape sequence inserts a horizontal tab, aligning the columns. This creates a simple table-like output with tabs between columns.

### Q6. [Medium] Write a program that reads a student's name (single word) and three subject marks, then prints the total and average.

*Hint:* Read the name with cin >>. Calculate average by dividing by 3.0 (not 3) for floating-point result.

**Answer:** ```
#include 
using namespace std;
int main() {
    string name;
    int m1, m2, m3;
    cout << "Enter name: ";
    cin >> name;
    cout << "Enter 3 marks: ";
    cin >> m1 >> m2 >> m3;
    int total = m1 + m2 + m3;
    double avg = total / 3.0;
    cout << name << ": Total = " << total << ", Average = " << avg << endl;
    return 0;
}
```

Input: Divya 85 92 78
Output: Divya: Total = 255, Average = 85

Three marks are read using chained `cin`. The total is computed as an integer sum. For the average, dividing by `3.0` ensures floating-point division.

### Q7. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    cout << 5 << " + " << 3 << " = " << 5 + 3 << endl;
    return 0;
}
```

*Hint:* Strings are printed literally, expressions are evaluated.

**Answer:** `5 + 3 = 8`

The chain prints: number `5`, then string `" + "`, then number `3`, then string `" = "`, then the expression `5 + 3` evaluated to `8`. Result: `5 + 3 = 8`.

### Q8. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    cout << "Hello" << endl;
    cout << "World" << endl;
    cout << endl;
    cout << "C++" << endl;
    return 0;
}
```

*Hint:* A bare endl by itself produces an empty line.

**Answer:** `Hello`
`World`

`C++`

`cout << endl;` by itself outputs only a newline, creating a blank line in the output. So between `World` and `C++`, there is an empty line.

### Q9. [Hard] What happens if you write 'cout << "Hello";' but forget to include '#include '?

*Hint:* The compiler needs to know what cout is.

**Answer:** The program will NOT compile. The compiler will report: `error: 'cout' was not declared in this scope`. Without `#include `, the compiler has no definition of `cout`, `cin`, `endl`, or the `<<` / `>>` operators for streams.

Unlike Python where `print()` is built-in and always available, C++ requires explicit inclusion of every feature. The `#include` directive tells the preprocessor to paste the header file contents into your code.

### Q10. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << 100 << " " << 200 << " " << 300 << endl;
    return 0;
}
```

*Hint:* Numbers and spaces are chained together.

**Answer:** `100 200 300`

Three numbers separated by space strings, all on one line: `100 200 300`.

### Q11. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    cout << 'A' << endl;
    cout << (int)'A' << endl;
    return 0;
}
```

*Hint:* Casting a char to int gives its ASCII value.

**Answer:** `A`
`65`

`'A'` is a character literal. When printed directly, it shows the character `A`. When cast to `int`, it shows the ASCII value of 'A', which is `65`. This is a common technique in C++ for working with character codes.

### Q12. [Medium] What is the purpose of 'return 0;' in main()? What happens if you omit it?

*Hint:* It is the exit code sent to the operating system.

**Answer:** `return 0;` sends an exit code of 0 to the operating system, indicating the program ran successfully. If you omit `return 0;` in main(), C++ (since C++98) **implicitly returns 0**. So omitting it is valid -- the compiler inserts it automatically. However, explicitly writing it is considered good practice.

This implicit return only applies to `main()`. All other functions with a non-void return type MUST have an explicit return statement, or you get undefined behavior.

## Multiple Choice Questions

### Q1. [Easy] Which command compiles a C++ file called 'test.cpp' using g++?

**B is correct.** `g++` is the GNU C++ compiler. `g++ test.cpp` compiles the file and produces a default executable (`a.out` on Linux/Mac, `a.exe` on Windows). `gcc` (A) is for C. `cpp` (C) is the preprocessor. `c++ -compile` (D) is not valid syntax.

### Q2. [Easy] What does #include  do?

**B is correct.** `#include ` includes the I/O stream library that provides `cout`, `cin`, `cerr`, `clog`, and `endl`. It does NOT include math functions (A), string functions (C), or all libraries (D).

### Q3. [Easy] Which is the correct entry point for a C++ program?

**C is correct.** The standard C++ entry point is `int main()`. `void main()` (A) is not standard-compliant. `int Main()` (B) is wrong because C++ is case-sensitive. `function main()` (D) is not valid C++ syntax.

### Q4. [Easy] What character must appear at the end of every C++ statement?

**C is correct.** Every statement in C++ must end with a semicolon `;`. This is different from Python which uses newlines. The colon (A) is used in labels and class definitions. The period (B) and comma (D) have different purposes.

### Q5. [Easy] Which operator is used with cin for input?

**B is correct.** `cin >>` uses the extraction operator `>>` to read input. Think of the arrows pointing from cin INTO the variable: data flows from the input stream to your variable. `<<` (A) is the insertion operator used with `cout`.

### Q6. [Medium] What is the difference between 'Hello' and "Hello" in C++?

**C is correct.** Single quotes are for single characters (`'A'`). `'Hello'` is a multi-character literal, which has implementation-defined behavior (usually treated as an integer). Double quotes create string literals. Always use double quotes for strings.

### Q7. [Medium] What does the -o flag do in 'g++ file.cpp -o myprogram'?

**C is correct.** The `-o` flag specifies the name of the output executable. Without it, the default is `a.out` (Linux/Mac) or `a.exe` (Windows). For optimization, use `-O2` (capital O). For warnings, use `-Wall`.

### Q8. [Medium] Which of the following is a valid single-line comment in C++?

**B is correct.** C++ uses `//` for single-line comments. `#` (A) is for preprocessor directives in C++, and comments in Python. `--` (C) is for comments in SQL and Haskell. `'` (D) is for comments in VB.

### Q9. [Medium] What happens when cin >> reads a string and the user types 'Amit Kumar'?

**B is correct.** `cin >>` reads until the first whitespace character (space, tab, newline). So only `Amit` is stored in the variable. `Kumar` remains in the input buffer and will be read by the next `cin >>` call. To read the full line, use `getline(cin, variable)`.

### Q10. [Medium] What does the -Wall flag do when compiling with g++?

**B is correct.** `-Wall` stands for 'Warn all' and enables most common warnings: uninitialized variables, unused variables, implicit type conversions, etc. It does not actually enable ALL warnings (for that, also add `-Wextra`). Warnings help catch bugs before they cause problems.

### Q11. [Hard] What is the output of: cout << endl << endl << endl;?

**B is correct.** Each `endl` outputs a newline character (and flushes the buffer). Three `endl` in sequence produce three newline characters, resulting in three blank lines in the output.

### Q12. [Hard] Which of the following is NOT a valid way to use cout?

**D is correct.** `cout` uses the insertion operator `<<`, not the extraction operator `>>`. `cout >> "hello"` is invalid because `>>` is for extracting data FROM a stream (used with `cin`), not inserting into one.

### Q13. [Hard] If you compile with 'g++ -std=c++17 program.cpp', what does -std=c++17 specify?

**B is correct.** The `-std=c++17` flag tells the compiler to use the C++17 standard. This enables C++17 features like structured bindings, `if constexpr`, `std::optional`, etc. Without this flag, the compiler uses its default standard (often C++14 or C++17 depending on the version).

### Q14. [Easy] What does 'cout' stand for?

**B is correct.** `cout` stands for **character output**. It is an object of the `ostream` class that sends character data to the standard output stream (usually the terminal/console).

### Q15. [Hard] What does the escape sequence '\0' represent in C++?

**C is correct.** `\0` is the null character with ASCII value 0. It is used to mark the end of C-style strings (char arrays). Every string literal like `"Hello"` has a hidden `\0` at the end. It is different from the digit 0 (`'0'`, ASCII 48).

### Q16. [Medium] Which IDE is free, lightweight, and recommended for beginners learning C++?

**B is correct.** VS Code is free, lightweight, cross-platform, and has excellent C++ support through the C/C++ extension by Microsoft. It includes IntelliSense, debugging, and an integrated terminal. Visual Studio Enterprise (A) is paid. IntelliJ (C) and Eclipse for Java (D) are primarily Java IDEs.

### Q17. [Hard] What is the default executable name when you compile with 'g++ program.cpp' (without -o flag)?

**C is correct.** Without the `-o` flag, g++ produces a default-named executable: `a.out` on Linux/macOS and `a.exe` on Windows. The name `a.out` stands for 'assembler output' -- a convention dating back to the original Unix systems.

### Q18. [Medium] Which of these is a valid escape sequence in C++?

**B is correct.** `\t` is the horizontal tab escape sequence. Valid escape sequences include `\n` (newline), `\t` (tab), `\\` (backslash), `\"` (double quote), `\'` (single quote), `\0` (null), and `\a` (bell). `\p`, `\w`, and `\z` are not valid and may cause compiler warnings.

## Coding Challenges

### Challenge 1. Rectangle Calculator

**Difficulty:** Easy

Write a C++ program that reads the length and width of a rectangle from the user and prints its area and perimeter.

**Constraints:**

- Use integer variables. Area = length * width. Perimeter = 2 * (length + width).

**Sample input:**

```
5 3
```

**Sample output:**

```
Area: 15
Perimeter: 16
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    int length, width;
    cout << "Enter length and width: ";
    cin >> length >> width;
    cout << "Area: " << length * width << endl;
    cout << "Perimeter: " << 2 * (length + width) << endl;
    return 0;
}
```

### Challenge 2. Swap Two Numbers (Without Temp)

**Difficulty:** Medium

Write a program that reads two integers and swaps them using only arithmetic operators (no third variable). Print the values before and after swapping.

**Constraints:**

- Do NOT use a temporary variable. Use only arithmetic operations (+, -).

**Sample input:**

```
10 25
```

**Sample output:**

```
Before: a = 10, b = 25
After: a = 25, b = 10
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    int a, b;
    cin >> a >> b;
    cout << "Before: a = " << a << ", b = " << b << endl;
    a = a + b;  // a = 35
    b = a - b;  // b = 35 - 25 = 10
    a = a - b;  // a = 35 - 10 = 25
    cout << "After: a = " << a << ", b = " << b << endl;
    return 0;
}
```

### Challenge 3. Student Grade Card

**Difficulty:** Medium

Write a program that reads a student's name (single word) and marks in 5 subjects. Print the total marks, percentage, and average.

**Constraints:**

- Use integer for marks and double for percentage/average. Maximum marks per subject is 100.

**Sample input:**

```
Meera 85 90 78 92 88
```

**Sample output:**

```
Name: Meera
Total: 433
Percentage: 86.6%
Average: 86.6
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    string name;
    int m1, m2, m3, m4, m5;
    cin >> name >> m1 >> m2 >> m3 >> m4 >> m5;
    int total = m1 + m2 + m3 + m4 + m5;
    double percentage = total / 5.0;
    cout << "Name: " << name << endl;
    cout << "Total: " << total << endl;
    cout << "Percentage: " << percentage << "%" << endl;
    cout << "Average: " << percentage << endl;
    return 0;
}
```

### Challenge 4. ASCII Art Box

**Difficulty:** Easy

Write a C++ program that prints a box made of + and - characters with a message inside:
+----------+
|  Hello!  |
+----------+

**Constraints:**

- Use cout with escape sequences or multiple statements. Align the text inside the box.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
+----------+
|  Hello!  |
+----------+
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    cout << "+----------+" << endl;
    cout << "|  Hello!  |" << endl;
    cout << "+----------+" << endl;
    return 0;
}
```

### Challenge 5. Temperature Converter

**Difficulty:** Medium

Write a program that reads a temperature in Celsius from the user and converts it to Fahrenheit and Kelvin. Formula: F = (C * 9.0/5.0) + 32, K = C + 273.15.

**Constraints:**

- Use double for all temperature variables to preserve decimal precision.

**Sample input:**

```
37
```

**Sample output:**

```
Celsius: 37
Fahrenheit: 98.6
Kelvin: 310.15
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    double celsius;
    cout << "Enter temperature in Celsius: ";
    cin >> celsius;
    double fahrenheit = (celsius * 9.0 / 5.0) + 32;
    double kelvin = celsius + 273.15;
    cout << "Celsius: " << celsius << endl;
    cout << "Fahrenheit: " << fahrenheit << endl;
    cout << "Kelvin: " << kelvin << endl;
    return 0;
}
```

### Challenge 6. Compilation Flags Practice

**Difficulty:** Hard

Write a C++ program that prints a welcome message. Then, in comments, write the exact g++ commands to: (1) compile with C++17, (2) compile with all warnings, (3) compile with optimization level 2, (4) compile and produce only the assembly output.

**Constraints:**

- Write all four compilation commands as comments at the top of the file.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Welcome to C++ compilation practice!
```

**Solution:**

```cpp
// Compile with C++17: g++ -std=c++17 practice.cpp -o practice
// Compile with all warnings: g++ -Wall -Wextra practice.cpp -o practice
// Compile with optimization: g++ -O2 practice.cpp -o practice
// Produce assembly only: g++ -S practice.cpp -o practice.s

#include <iostream>
using namespace std;
int main() {
    cout << "Welcome to C++ compilation practice!" << endl;
    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/setting-up-and-first-program/*
