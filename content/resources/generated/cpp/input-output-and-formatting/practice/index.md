---
title: "Practice: Input, Output, and Formatting"
description: "52 practice problems for Input, Output, and Formatting in C++"
slug: input-output-and-formatting-practice
canonical: https://learn.modernagecoders.com/resources/cpp/input-output-and-formatting/practice/
category: "C++"
---
# Practice: Input, Output, and Formatting

**Total questions:** 52

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << "Hello" << " " << "World" << endl;
    return 0;
}
```

*Hint:* Multiple << operators chain outputs sequentially.

**Answer:** `Hello World`

The chained `<<` operators output each string in sequence: "Hello", then " ", then "World", producing `Hello World`.

### Q2. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << "Line 1" << '\n' << "Line 2" << '\n';
    return 0;
}
```

*Hint:* '\n' inserts a newline character.

**Answer:** `Line 1`
`Line 2`

`'\n'` inserts a newline just like `endl`, but without flushing the buffer. The output is two lines.

### Q3. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    int a = 3, b = 7;
    cout << a << "+" << b << "=" << a + b << endl;
    return 0;
}
```

*Hint:* The expression a + b is evaluated before printing.

**Answer:** `3+7=10`

Each chained output prints in sequence: 3, then "+", then 7, then "=", then the result of `a + b` (10).

### Q4. [Medium] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    double pi = 3.14159265;
    cout << fixed << setprecision(2) << pi << endl;
    cout << setprecision(5) << pi << endl;
    return 0;
}
```

*Hint:* fixed makes setprecision control decimal places. setprecision is persistent.

**Answer:** `3.14`
`3.14159`

`fixed` switches to fixed-point mode. `setprecision(2)` shows 2 decimal places: 3.14. Then `setprecision(5)` shows 5 decimal places: 3.14159. Both `fixed` and the new precision persist.

### Q5. [Medium] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    cout << setw(8) << 42 << 99 << endl;
    return 0;
}
```

*Hint:* setw only affects the very next output.

**Answer:** `      4299`

`setw(8)` applies only to 42, padding it to 8 characters (6 spaces + "42"). Then 99 is printed with no padding because setw resets after each use.

### Q6. [Medium] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    cout << setfill('*') << setw(10) << 42 << endl;
    return 0;
}
```

*Hint:* setfill changes the padding character from space to '*'.

**Answer:** `********42`

`setfill('*')` changes the padding character to asterisks. `setw(10)` pads to 10 characters. Since 42 is 2 characters, 8 asterisks are prepended (right-aligned by default).

### Q7. [Medium] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    cout << left << setw(10) << "Name" << right << setw(5) << "Age" << endl;
    cout << left << setw(10) << "Sneha" << right << setw(5) << 20 << endl;
    return 0;
}
```

*Hint:* left/right control alignment within the setw field.

**Answer:** `Name          Age`
`Sneha          20`

`left` left-aligns within the setw field. `right` right-aligns. "Name" is left-aligned in 10 chars, "Age" is right-aligned in 5 chars. Same for the data row.

### Q8. [Easy] What is the difference between `endl` and `'\n'`?

*Hint:* Both produce a newline, but one does extra work.

**Answer:** `endl` inserts a newline AND flushes the output buffer. `'\n'` only inserts a newline without flushing. In competitive programming, `'\n'` is preferred because flushing after every line is slow.

Flushing means forcing all buffered data to be written to the screen immediately. With millions of outputs, the overhead of flushing each time can cause TLE. The buffer flushes automatically when the program ends.

### Q9. [Medium] Why does `getline` read an empty string after `cin >>`? How do you fix it?

*Hint:* cin >> leaves a character in the buffer.

**Answer:** `cin >>` reads a value but leaves the newline character (`'\n'`) in the input buffer. When `getline` is called next, it immediately finds that `'\n'` and returns an empty string. Fix: use `cin.ignore()` between `cin >>` and `getline` to discard the leftover newline.

This is the most common I/O bug in C++. `cin.ignore()` discards one character (the `'\n'`). For a more robust version: `cin.ignore(numeric_limits::max(), '\n')` discards everything up to and including the newline.

### Q10. [Medium] What do `ios_base::sync_with_stdio(false)` and `cin.tie(NULL)` do?

*Hint:* They disable two synchronization mechanisms for faster I/O.

**Answer:** `ios_base::sync_with_stdio(false)` disconnects C++ streams from C streams, removing synchronization overhead. `cin.tie(NULL)` unties cin from cout so cout is not flushed before every cin read. Together they make cin/cout as fast as scanf/printf. After using them, do NOT mix printf/scanf with cout/cin.

By default, C++ synchronizes its streams with C streams so you can mix printf and cout. This synchronization has overhead. Disabling it is safe as long as you use only C++ I/O afterward.

### Q11. [Hard] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    double x = 3.14159;
    cout << setprecision(3) << x << endl;
    cout << fixed << setprecision(3) << x << endl;
    cout << scientific << setprecision(3) << x << endl;
    return 0;
}
```

*Hint:* Without fixed/scientific, setprecision controls total significant digits.

**Answer:** `3.14`
`3.142`
`3.142e+00`

Without `fixed`/`scientific`, `setprecision(3)` means 3 total significant digits: 3.14. With `fixed`, it means 3 decimal places: 3.142. With `scientific`, it means 3 decimal places in scientific notation: 3.142e+00.

### Q12. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    cout << boolalpha;
    cout << (5 > 3) << endl;
    cout << (5 < 3) << endl;
    cout << noboolalpha;
    cout << (5 > 3) << endl;
    return 0;
}
```

*Hint:* boolalpha prints true/false as words.

**Answer:** `true`
`false`
`1`

`boolalpha` makes cout print boolean values as "true"/"false" instead of 1/0. `noboolalpha` reverts to numeric output.

### Q13. [Hard] What is the difference between `cerr` and `cout`? When would you use `cerr`?

*Hint:* Think about buffering and what happens during a crash.

**Answer:** `cout` writes to stdout and is **buffered** -- output may sit in a buffer before being displayed. `cerr` writes to stderr and is **unbuffered** -- output appears immediately. Use `cerr` for error messages (they appear even if the program crashes) and for debug output in competitive programming (judges only check stdout).

If a program crashes, buffered cout data may be lost. cerr output is guaranteed to appear because it is unbuffered. In CP, debug prints to cerr are invisible to the judge, so you can leave them in your submission.

### Q14. [Easy] What is the output?

```
#include 
int main() {
    printf("%d + %d = %d\n", 3, 4, 3 + 4);
    return 0;
}
```

*Hint:* %d is the format specifier for integers in printf.

**Answer:** `3 + 4 = 7`

`printf` replaces each `%d` with the corresponding integer argument in order: 3, 4, 7. The `\n` adds a newline.

### Q15. [Medium] What is the output?

```
#include 
int main() {
    printf("%.3f\n", 3.14159);
    printf("%10d\n", 42);
    printf("%-10d|\n", 42);
    return 0;
}
```

*Hint:* %.3f means 3 decimal places. %10d means right-aligned in 10 chars. %-10d means left-aligned.

**Answer:** `3.142`
`        42`
`42        |`

`%.3f` prints with 3 decimal places (rounds 3.14159 to 3.142). `%10d` right-aligns 42 in 10 characters. `%-10d` left-aligns 42 in 10 characters.

### Q16. [Hard] What does `cin.clear()` do and when is it needed?

*Hint:* What happens when cin >> expects an int but receives a letter?

**Answer:** `cin.clear()` resets the error flags on the cin stream. When `cin >>` fails (e.g., user enters 'abc' when an int is expected), cin enters a **fail state**. All subsequent cin reads silently fail. `cin.clear()` resets this state. You also need `cin.ignore()` to clear the bad input from the buffer.

After a failed read: (1) `cin.clear()` resets the fail flag. (2) `cin.ignore(numeric_limits::max(), '\n')` discards the bad input. Then cin is ready for new input.

### Q17. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    int x = 42;
    cout << "x" << endl;
    cout << x << endl;
    return 0;
}
```

*Hint:* "x" is a string literal. x (without quotes) is the variable.

**Answer:** `x`
`42`

`"x"` (in quotes) prints the literal character x. `x` (no quotes) prints the value of the variable x, which is 42.

### Q18. [Medium] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    cout << setfill('0');
    for (int i = 1; i <= 3; i++) {
        cout << setw(4) << i << endl;
    }
    return 0;
}
```

*Hint:* setfill('0') persists. setw(4) must be repeated for each output.

**Answer:** `0001`
`0002`
`0003`

`setfill('0')` is persistent -- it stays in effect. `setw(4)` is applied before each number, padding with zeros. Each number is displayed as 4 digits with leading zeros.

## Mixed Questions

### Q1. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << "A" << endl;
    cerr << "B" << endl;
    cout << "C" << endl;
    return 0;
}
```

*Hint:* cerr writes to stderr, cout writes to stdout. Both appear on screen.

**Answer:** `A`
`B`
`C`

Both `cout` and `cerr` output to the terminal. The order is A, B, C. Note: if you redirect stdout (`./a.out > output.txt`), only A and C go to the file. B still appears on screen.

### Q2. [Easy] What is the output?

```
#include 
using namespace std;
int main() {
    cout << "Hello\tWorld\n";
    cout << "Line\\2" << endl;
    return 0;
}
```

*Hint:* \t is tab, \n is newline, \\ is a literal backslash.

**Answer:** `Hello	World`
`Line\2`

`\t` inserts a tab character. `\n` inserts a newline. `\\` prints a single backslash (the first backslash escapes the second).

### Q3. [Medium] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    double x = 0.1 + 0.2;
    cout << x << endl;
    cout << fixed << setprecision(17) << x << endl;
    return 0;
}
```

*Hint:* 0.1 and 0.2 cannot be represented exactly in binary floating point.

**Answer:** `0.3`
`0.30000000000000004`

0.1 and 0.2 cannot be represented exactly in IEEE 754 binary. The sum is not exactly 0.3 -- it is 0.30000000000000004... Default cout hides this, but with 17 decimal places the imprecision is revealed.

### Q4. [Easy] Write a program that reads a student's name (full name with spaces), roll number (integer), and CGPA (decimal). Print them in a formatted way.

*Hint:* Use cin >> for roll number, cin.ignore() + getline for name.

**Answer:** ```
#include 
#include 
#include 
using namespace std;
int main() {
    int roll;
    string name;
    double cgpa;
    cout << "Enter roll number: ";
    cin >> roll;
    cin.ignore();
    cout << "Enter full name: ";
    getline(cin, name);
    cout << "Enter CGPA: ";
    cin >> cgpa;
    cout << "Roll: " << roll << endl;
    cout << "Name: " << name << endl;
    cout << "CGPA: " << fixed << setprecision(2) << cgpa << endl;
    return 0;
}
```

Input: 101, Amit Kumar, 8.75
Output:
Roll: 101
Name: Amit Kumar
CGPA: 8.75

cin >> roll reads the integer. cin.ignore() discards the leftover newline. getline reads the full name including spaces. cin >> cgpa reads the decimal. fixed + setprecision(2) shows exactly 2 decimal places.

### Q5. [Medium] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    cout << setw(5) << left << 1 << setw(5) << left << 2 << setw(5) << left << 3 << endl;
    return 0;
}
```

*Hint:* Each number is left-aligned in a 5-character field.

**Answer:** `1    2    3    `

Each number is placed in a 5-character wide field, left-aligned. 1 takes 1 char, followed by 4 spaces. Same for 2 and 3.

### Q6. [Hard] What is the output?

```
#include 
using namespace std;
int main() {
    int x = 5;
    cout << "Value: " << x << ", Double: " << x * 2;
    cout << '\n';
    cout << "Address size: " << sizeof(&x) << endl;
    return 0;
}
```

*Hint:* &x is a pointer. sizeof a pointer depends on the system (32-bit vs 64-bit).

**Answer:** `Value: 5, Double: 10`
`Address size: 8`

The first line chains multiple outputs. `x * 2` is 10. `sizeof(&x)` gives the size of a pointer, which is 8 bytes on a 64-bit system.

### Q7. [Medium] Write a program that reads n floating-point numbers and prints each with exactly 4 decimal places, right-aligned in a field of width 12.

*Hint:* Use fixed, setprecision(4), and setw(12) for each number.

**Answer:** ```
#include 
#include 
using namespace std;
int main() {
    int n;
    cin >> n;
    cout << fixed << setprecision(4);
    for (int i = 0; i < n; i++) {
        double x;
        cin >> x;
        cout << setw(12) << x << '\n';
    }
    return 0;
}
```

Input: 3 3.14 100.5 0.001
Output:
      3.1400
    100.5000
      0.0010

`fixed` and `setprecision(4)` are persistent -- set once. `setw(12)` must be repeated for each output. Right alignment is the default.

### Q8. [Hard] Why should you not use `endl` in competitive programming? What should you use instead?

*Hint:* Think about what endl does beyond adding a newline.

**Answer:** `endl` inserts a newline AND flushes the output buffer. Flushing forces the OS to write buffered data to the screen immediately. When printing millions of lines, this flush operation after each line causes a massive slowdown (5-10x). Use `'\n'` instead, which only adds a newline. The buffer flushes automatically when the program ends.

Combined with `ios_base::sync_with_stdio(false)` and `cin.tie(NULL)`, using `'\n'` instead of `endl` makes C++ I/O competitive with C's scanf/printf.

### Q9. [Easy] What is the output?

```
#include 
int main() {
    printf("%05d\n", 42);
    printf("%8.2f\n", 3.14159);
    return 0;
}
```

*Hint:* %05d means zero-padded to 5 digits. %8.2f means 8 chars wide with 2 decimal places.

**Answer:** `00042`
`    3.14`

`%05d` pads 42 to 5 digits with leading zeros: 00042. `%8.2f` formats 3.14159 to 2 decimal places (3.14) in a field of width 8, right-aligned.

### Q10. [Hard] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    double d = 123456789.123456789;
    cout << d << endl;
    cout << fixed << setprecision(9) << d << endl;
    return 0;
}
```

*Hint:* double has ~15 significant digits. The number has 18 digits total.

**Answer:** `1.23457e+08`
`123456789.123456791`

Default cout for large doubles uses scientific notation with 6 significant digits: 1.23457e+08. With `fixed` and 9 decimal places, the full precision is shown, but the last few digits are slightly off because `double` has only ~15-16 significant digits.

### Q11. [Medium] Write a program that keeps reading integers until the user enters a non-integer (like a letter). Use cin.fail() to detect bad input and cin.clear() + cin.ignore() to recover. Print the sum of valid integers.

*Hint:* After cin >> fails, cin.fail() returns true.

**Answer:** ```
#include 
#include 
using namespace std;
int main() {
    int sum = 0, x;
    cout << "Enter integers (non-integer to stop): ";
    while (cin >> x) {
        sum += x;
    }
    cout << "Sum: " << sum << endl;
    return 0;
}
```

Input: 10 20 30 abc
Output: Sum: 60

`cin >> x` returns a truthy stream when successful and a falsy stream when it fails. The while loop reads integers until a non-integer is encountered. At that point, cin enters fail state and the loop ends.

### Q12. [Medium] What is the output?

```
#include 
using namespace std;
int main() {
    cout << "Tab:\tEnd" << endl;
    cout << "Quote: \"hello\"" << endl;
    cout << "Backslash: \\" << endl;
    cout << "Null char: " << '\0' << "end" << endl;
    return 0;
}
```

*Hint:* Escape sequences: \t, \", \\, \0.

**Answer:** `Tab:	End`
`Quote: "hello"`
`Backslash: \`
`Null char: end`

`\t` = tab. `\"` = literal double quote. `\\` = single backslash. `\0` is the null character (invisible), so "end" follows immediately.

## Multiple Choice Questions

### Q1. [Easy] Which header file is needed for `setw` and `setprecision`?

**B is correct.** `` (input/output manipulation) provides `setw`, `setprecision`, `setfill`, `fixed`, `left`, `right`, and other formatting manipulators.

### Q2. [Easy] What does `cin.ignore()` do?

**B is correct.** `cin.ignore()` discards one character from the input buffer. It is commonly used to remove the leftover newline after `cin >>` before calling `getline`.

### Q3. [Easy] What does `endl` do that `'\n'` does not?

**B is correct.** `endl` inserts a newline AND flushes the output buffer. `'\n'` only inserts a newline. Flushing forces buffered output to appear on screen immediately.

### Q4. [Easy] Which stream is unbuffered?

**C is correct.** `cerr` is unbuffered -- output appears immediately. `cout` and `clog` are buffered. This makes `cerr` reliable for error messages even if the program crashes.

### Q5. [Easy] What does `cin >> x` stop reading at?

**B is correct.** `cin >>` skips leading whitespace and reads until the next whitespace character. This is why it cannot read full names with spaces -- it stops at the first space.

### Q6. [Medium] Which manipulator is NOT persistent (resets after one use)?

**C is correct.** `setw` only affects the very next output and then resets. All other listed manipulators (`fixed`, `setprecision`, `setfill`) are persistent -- they stay in effect until changed.

### Q7. [Medium] What does `ios_base::sync_with_stdio(false)` do?

**B is correct.** It disconnects C++ streams (cin/cout) from C streams (stdin/stdout), removing synchronization overhead. This makes C++ I/O significantly faster but prevents mixing C and C++ I/O.

### Q8. [Medium] What is the printf format specifier for printing a double with 2 decimal places?

**C is correct.** `%.2f` prints a floating-point number with exactly 2 decimal places. `%d` is for integers. `%2f` means minimum width 2 (not 2 decimal places).

### Q9. [Medium] After `cin >> n` followed by `getline(cin, s)`, what does s contain?

**B is correct.** `cin >> n` leaves the newline in the buffer. `getline` reads that newline immediately and stores an empty string. Fix with `cin.ignore()` between them.

### Q10. [Hard] What does `cin.tie(NULL)` do?

**B is correct.** By default, cout is flushed before every cin operation (so prompts appear before input). `cin.tie(NULL)` removes this tie, preventing automatic flushing. This speeds up I/O in competitive programming.

### Q11. [Hard] What does `cout << fixed << setprecision(0) << 3.7;` print?

**B is correct.** `fixed` with `setprecision(0)` means zero decimal places. The value 3.7 is rounded to the nearest integer: 4. Note this is rounding, not truncation.

### Q12. [Hard] Which of the following is TRUE about mixing C and C++ I/O after `sync_with_stdio(false)`?

**C is correct.** After disabling synchronization, C streams (printf/stdout) and C++ streams (cout) maintain separate buffers. Output may appear in unexpected order. It compiles fine but produces undefined output ordering.

### Q13. [Easy] What does `getline(cin, s)` do that `cin >> s` does not?

**B is correct.** `cin >> s` stops reading at the first whitespace. `getline(cin, s)` reads until the newline character, capturing spaces and tabs.

### Q14. [Medium] What does `setprecision(3)` do WITHOUT `fixed`?

**B is correct.** Without `fixed`, `setprecision(n)` controls the total number of significant digits. For example, `setprecision(3)` displays 3.14159 as 3.14 (3 significant digits).

### Q15. [Hard] What is the printf format specifier for `long long`?

**C is correct.** `%lld` is the format specifier for `long long` in printf/scanf. `%d` is for int, `%ld` is for long. Using the wrong specifier causes undefined behavior.

### Q16. [Easy] Which escape sequence produces a tab character?

**B is correct.** `\t` is the tab character. `\n` is newline. `\b` is backspace. `\s` is not a valid escape sequence in C++.

## Coding Challenges

### Challenge 1. Formatted Student Report Card

**Difficulty:** Easy

Read a student's name (full name with spaces), roll number, and marks in 5 subjects. Print a formatted report card with the name, roll number, each subject mark (2 decimal places), total, and percentage. Use setw for alignment.

**Constraints:**

- Use cin.ignore() between cin >> and getline. Use fixed, setprecision(2), and setw for formatting.

**Sample input:**

```
101
Meera Krishnan
85.5 90.0 78.5 92.0 88.5
```

**Sample output:**

```
Roll Number: 101
Student Name: Meera Krishnan
--------------------------
Subject 1:        85.50
Subject 2:        90.00
Subject 3:        78.50
Subject 4:        92.00
Subject 5:        88.50
--------------------------
Total:           434.50
Percentage:       86.90%
```

**Solution:**

```cpp
#include <iostream>
#include <iomanip>
#include <string>
using namespace std;
int main() {
    int roll;
    string name;
    double marks[5], total = 0;
    cin >> roll;
    cin.ignore();
    getline(cin, name);
    for (int i = 0; i < 5; i++) {
        cin >> marks[i];
        total += marks[i];
    }
    cout << "Roll Number: " << roll << endl;
    cout << "Student Name: " << name << endl;
    cout << "--------------------------" << endl;
    cout << fixed << setprecision(2);
    for (int i = 0; i < 5; i++) {
        cout << "Subject " << i + 1 << ":" << setw(13) << marks[i] << endl;
    }
    cout << "--------------------------" << endl;
    cout << "Total:" << setw(16) << total << endl;
    cout << "Percentage:" << setw(11) << (total / 5.0) << "%" << endl;
    return 0;
}
```

### Challenge 2. Multiplication Table Formatter

**Difficulty:** Easy

Read an integer n and print its multiplication table from 1 to 10. Each line should be formatted as: n x i = result, with the result right-aligned in a field of width 4.

**Constraints:**

- Use setw for alignment of both the multiplier and the result.

**Sample input:**

```
7
```

**Sample output:**

```
7 x  1 =    7
7 x  2 =   14
7 x  3 =   21
...
7 x 10 =   70
```

**Solution:**

```cpp
#include <iostream>
#include <iomanip>
using namespace std;
int main() {
    int n;
    cin >> n;
    for (int i = 1; i <= 10; i++) {
        cout << n << " x " << setw(2) << i << " = " << setw(4) << n * i << endl;
    }
    return 0;
}
```

### Challenge 3. Interactive Calculator with Error Recovery

**Difficulty:** Medium

Write a calculator that reads two numbers and an operator (+, -, *, /). Handle division by zero and invalid input. If cin fails (user enters a non-number), use cin.clear() and cin.ignore() to recover and prompt again.

**Constraints:**

- Use cin.fail(), cin.clear(), cin.ignore(). Print result with 2 decimal places. Handle division by zero.

**Sample input:**

```
10 / 3
```

**Sample output:**

```
10 / 3 = 3.33
```

**Solution:**

```cpp
#include <iostream>
#include <iomanip>
#include <limits>
using namespace std;
int main() {
    double a, b;
    char op;
    cout << "Enter: number operator number" << endl;
    while (!(cin >> a >> op >> b)) {
        cout << "Invalid input. Try again: " << endl;
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
    }
    cout << fixed << setprecision(2);
    if (op == '+') cout << a << " + " << b << " = " << a + b << endl;
    else if (op == '-') cout << a << " - " << b << " = " << a - b << endl;
    else if (op == '*') cout << a << " * " << b << " = " << a * b << endl;
    else if (op == '/') {
        if (b == 0) cout << "Error: Division by zero" << endl;
        else cout << a << " / " << b << " = " << a / b << endl;
    } else cout << "Unknown operator" << endl;
    return 0;
}
```

### Challenge 4. Fast I/O Speed Test

**Difficulty:** Medium

Write a program that reads t test cases. For each test case, read n and then n integers. Print the sum of each test case on a new line. Use fast I/O (sync_with_stdio, cin.tie) and '\n' instead of endl.

**Constraints:**

- Must use ios_base::sync_with_stdio(false) and cin.tie(NULL). Must use '\n' instead of endl.

**Sample input:**

```
2
3 1 2 3
4 10 20 30 40
```

**Sample output:**

```
6
100
```

**Solution:**

```cpp
#include <iostream>
using namespace std;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        long long sum = 0;
        for (int i = 0; i < n; i++) {
            int x;
            cin >> x;
            sum += x;
        }
        cout << sum << '\n';
    }
    return 0;
}
```

### Challenge 5. Receipt Printer

**Difficulty:** Hard

Write a program that reads the number of items n, then for each item reads the name (may contain spaces) and price. Print a formatted receipt with item names left-aligned in 20 chars, prices right-aligned in 10 chars (2 decimal places), a separator line, and the total.

**Constraints:**

- Use getline for names, cin >> for prices, cin.ignore() between them. Use iomanip for formatting.

**Sample input:**

```
3
Masala Dosa
120.00
Filter Coffee
40.50
Gulab Jamun
60.00
```

**Sample output:**

```
-------- RECEIPT --------
Masala Dosa              120.00
Filter Coffee             40.50
Gulab Jamun               60.00
------------------------------
Total                    220.50
```

**Solution:**

```cpp
#include <iostream>
#include <iomanip>
#include <string>
using namespace std;
int main() {
    int n;
    cin >> n;
    cin.ignore();
    string names[100];
    double prices[100];
    double total = 0;
    for (int i = 0; i < n; i++) {
        getline(cin, names[i]);
        cin >> prices[i];
        cin.ignore();
        total += prices[i];
    }
    cout << "-------- RECEIPT --------" << endl;
    cout << fixed << setprecision(2);
    for (int i = 0; i < n; i++) {
        cout << left << setw(20) << names[i] << right << setw(10) << prices[i] << endl;
    }
    cout << "------------------------------" << endl;
    cout << left << setw(20) << "Total" << right << setw(10) << total << endl;
    return 0;
}
```

### Challenge 6. Number Base Converter

**Difficulty:** Hard

Write a program that reads an integer and prints it in decimal, octal, hexadecimal (lowercase and uppercase) using cout manipulators (dec, oct, hex, uppercase). Also print using printf format specifiers.

**Constraints:**

- Use cout with dec, oct, hex, uppercase manipulators. Also demonstrate printf with %d, %o, %x, %X.

**Sample input:**

```
255
```

**Sample output:**

```
Decimal:     255
Octal:       377
Hex (lower): ff
Hex (upper): FF
```

**Solution:**

```cpp
#include <iostream>
#include <iomanip>
#include <cstdio>
using namespace std;
int main() {
    int n;
    cin >> n;
    cout << "Decimal:     " << dec << n << endl;
    cout << "Octal:       " << oct << n << endl;
    cout << "Hex (lower): " << hex << n << endl;
    cout << "Hex (upper): " << hex << uppercase << n << endl;
    cout << nouppercase << dec;
    printf("\nUsing printf:\n");
    printf("Decimal:     %d\n", n);
    printf("Octal:       %o\n", n);
    printf("Hex (lower): %x\n", n);
    printf("Hex (upper): %X\n", n);
    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/input-output-and-formatting/*
