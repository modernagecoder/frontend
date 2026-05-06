---
title: "Strings in C++ - C-strings, std::string, String Functions & Algorithms | Modern Age Coders"
description: "Master C++ strings: C-strings (char arrays, strlen, strcpy, strcat, strcmp), std::string (length, substr, find, replace, append, insert, erase), getline, stoi/stof/to_string, palindrome check, anagram check, reverse, and character counting. 56 practice questions."
slug: strings-in-cpp
canonical: https://learn.modernagecoders.com/resources/cpp/strings-in-cpp/
category: "C++"
keywords: ["c++ strings", "c-string vs std::string", "strlen c++", "strcpy c++", "string functions c++", "substr c++", "find replace c++", "stoi c++", "to_string c++", "palindrome c++"]
---
# Strings - C-style and std::string

**Difficulty:** Intermediate  
**Reading time:** 30 min  
**Chapter:** 10  
**Practice questions:** 56

## What Are Strings in C++?

A **string** is a sequence of characters. C++ has two string systems: **C-style strings** (inherited from C) and **std::string** (from the C++ Standard Library). Understanding both is essential because C-style strings teach you how strings work at the memory level, and `std::string` is what you use in practice.

### C-style Strings

A C-string is a `char` array terminated by a null character `'\0'`. When you write `char s[] = "Hello";`, the compiler creates an array of 6 characters: `{'H', 'e', 'l', 'l', 'o', '\0'}`. The null terminator tells functions like `strlen` and `cout` where the string ends. Without it, they would read past the array into garbage memory.

### std::string

`std::string` is a class from the `` header. It manages memory automatically (no manual null terminator management), supports dynamic resizing, and provides rich member functions. It stores the length internally, so `length()` is O(1) unlike `strlen()` which is O(n).

### Comparison at a Glance

FeatureC-string (char[])std::stringDeclaration`char s[] = "Hi";``string s = "Hi";`Null terminatorRequired (`'\0'`)Managed internallySizeFixed (array size)Dynamic (can grow)Length`strlen(s)` -- O(n)`s.length()` -- O(1)Concatenation`strcat(s1, s2)``s1 + s2` or `s1 += s2`Comparison`strcmp(s1, s2)``s1 == s2`, `s1 < s2`SafetyBuffer overflow riskSafe (manages memory)Header````

## Why Master Both String Types?

### 1. Competitive Programming

String manipulation is a major category in CP: palindrome checking, anagram detection, pattern matching, string hashing, and parsing. Most CP solutions use `std::string` for convenience, but understanding C-strings helps with low-level tricks like char arithmetic for case conversion and digit extraction.

### 2. Interviews

String questions are among the most common in placement interviews. "Reverse a string in-place", "check if two strings are anagrams", "find the first non-repeating character", "longest palindromic substring" -- these appear at every level from TCS to Google. Interviewers expect you to handle both C-string and std::string operations.

### 3. Real-world C++ Code

Production C++ code uses `std::string` extensively, but many libraries and APIs (especially OS-level APIs) use C-strings (`const char*`). The `c_str()` method bridges the two worlds. Understanding both is necessary for working with real codebases.

### 4. Memory Understanding

C-strings teach you about null-terminated buffers, buffer overflow vulnerabilities, and why `strcpy` is dangerous. These concepts are fundamental for systems programming and security.

## Detailed Explanation

### C-strings: char Arrays and \0

A C-string is a `char` array where the last character is `'\0'` (null, ASCII 0). Declare with: `char s[] = "Hello";` (compiler adds `'\0'` automatically). You can also declare: `char s[10] = "Hello";` (remaining slots are '\0'). The key functions from ``:

- `strlen(s)`: Returns the number of characters before `'\0'`. O(n) because it scans until null.
- `strcpy(dest, src)`: Copies src into dest including `'\0'`. **Dangerous**: no bounds checking.
- `strcat(dest, src)`: Appends src to the end of dest. **Dangerous**: dest must have enough space.
- `strcmp(s1, s2)`: Returns 0 if equal, negative if s1 < s2, positive if s1 > s2 (lexicographic).

### std::string Operations

Include `` and use `string` (which is `std::string` with `using namespace std`).

- `s.length()` or `s.size()`: Number of characters. O(1).
- `s.at(i)`: Character at index i with bounds checking. Throws `out_of_range` if invalid.
- `s[i]`: Character at index i without bounds checking. Faster but unsafe.
- `s.substr(pos, len)`: Returns a substring starting at `pos` of length `len`.
- `s.find("abc")`: Returns the index of the first occurrence, or `string::npos` if not found.
- `s.replace(pos, len, "new")`: Replaces `len` characters starting at `pos` with "new".
- `s.append("xyz")` or `s += "xyz"`: Appends to the end.
- `s.insert(pos, "abc")`: Inserts "abc" at position `pos`.
- `s.erase(pos, len)`: Removes `len` characters starting at `pos`.
- `s.c_str()`: Returns a `const char*` (C-string). Needed for C APIs and printf.

### String Input: getline

`cin >> s` reads until whitespace (cannot read names with spaces). `getline(cin, s)` reads the entire line including spaces. Remember the `cin.ignore()` trick when switching from `cin >>` to `getline`.

### Conversions: stoi, stof, to_string

- `stoi("123")`: String to int. Throws `invalid_argument` if conversion fails.
- `stol("123")`: String to long.
- `stoll("123")`: String to long long.
- `stof("3.14")`: String to float.
- `stod("3.14")`: String to double.
- `to_string(42)`: Int/float/double to string.

### String Iteration

You can iterate over a string like an array:

- Index-based: `for (int i = 0; i < s.length(); i++) { cout << s[i]; }`
- Range-based: `for (char c : s) { cout << c; }`
- By reference (modifiable): `for (char &c : s) { c = toupper(c); }`

### Common String Algorithms

**Reverse a string:** Use two pointers from both ends, or use `reverse(s.begin(), s.end())` from ``.

**Palindrome check:** Compare s with its reverse, or use two pointers from both ends checking if characters match.

**Count vowels:** Iterate and check if each character is a/e/i/o/u (case-insensitive).

**Anagram check:** Two strings are anagrams if they have the same character frequencies. Sort both and compare, or use a frequency array of size 26.

## Code Examples

### C-strings: Declaration, strlen, strcpy, strcat, strcmp

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main() {
    // Declaration
    char s1[] = "Hello";
    char s2[20] = "World";
    char s3[50];

    // strlen: length without null terminator
    cout << "strlen(\"Hello\") = " << strlen(s1) << endl;  // 5
    cout << "sizeof(\"Hello\") = " << sizeof(s1) << endl;   // 6 (includes \0)

    // strcpy: copy s1 into s3
    strcpy(s3, s1);
    cout << "After strcpy: s3 = " << s3 << endl;  // Hello

    // strcat: append s2 to s3
    strcat(s3, " ");
    strcat(s3, s2);
    cout << "After strcat: s3 = " << s3 << endl;  // Hello World

    // strcmp: comparison
    cout << "strcmp(\"abc\", \"abd\"): " << strcmp("abc", "abd") << endl;  // Negative
    cout << "strcmp(\"abc\", \"abc\"): " << strcmp("abc", "abc") << endl;  // 0
    cout << "strcmp(\"abd\", \"abc\"): " << strcmp("abd", "abc") << endl;  // Positive

    return 0;
}
```

`strlen` counts characters until `'\0'` (5, not 6). `sizeof` includes the null terminator (6). `strcpy` copies the entire string including `'\0'`. `strcat` appends at the position of the existing null terminator. `strcmp` returns 0 for equal, negative if first is less, positive if first is greater (lexicographic comparison).

**Output:**

```
strlen("Hello") = 5
sizeof("Hello") = 6
After strcpy: s3 = Hello
After strcat: s3 = Hello World
strcmp("abc", "abd"): -1
strcmp("abc", "abc"): 0
strcmp("abd", "abc"): 1
```

### std::string Operations

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s = "Hello, World!";

    // Length
    cout << "Length: " << s.length() << endl;  // 13

    // Access
    cout << "s[0] = " << s[0] << endl;         // H
    cout << "s.at(7) = " << s.at(7) << endl;   // W

    // substr
    cout << "substr(7, 5) = " << s.substr(7, 5) << endl;  // World

    // find
    size_t pos = s.find("World");
    cout << "'World' found at: " << pos << endl;  // 7

    pos = s.find("xyz");
    if (pos == string::npos) {
        cout << "'xyz' not found" << endl;
    }

    // replace
    s.replace(7, 5, "C++");
    cout << "After replace: " << s << endl;  // Hello, C++!

    // append
    s += " is great";
    cout << "After append: " << s << endl;

    // insert
    s.insert(0, "*** ");
    cout << "After insert: " << s << endl;

    // erase
    s.erase(0, 4);  // Remove "*** "
    cout << "After erase: " << s << endl;

    return 0;
}
```

`substr(7, 5)` extracts 5 characters starting at index 7. `find` returns the position or `string::npos` (usually -1 as unsigned). `replace(7, 5, "C++")` replaces 5 chars at position 7 with "C++". `+=` appends. `insert(0, "*** ")` inserts at the beginning. `erase(0, 4)` removes 4 chars from position 0.

**Output:**

```
Length: 13
s[0] = H
s.at(7) = W
substr(7, 5) = World
'World' found at: 7
'xyz' not found
After replace: Hello, C++!
After append: Hello, C++! is great
After insert: *** Hello, C++! is great
After erase: Hello, C++! is great
```

### String Conversions: stoi, stod, to_string

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    // String to number
    string numStr = "12345";
    int num = stoi(numStr);
    cout << "stoi(\"12345\") = " << num << endl;
    cout << "Doubled: " << num * 2 << endl;

    string floatStr = "3.14159";
    double pi = stod(floatStr);
    cout << "stod(\"3.14159\") = " << pi << endl;

    string llStr = "9000000000";
    long long big = stoll(llStr);
    cout << "stoll: " << big << endl;

    // Number to string
    int age = 21;
    string msg = "Age: " + to_string(age);
    cout << msg << endl;

    double gpa = 8.75;
    string gpaStr = to_string(gpa);
    cout << "GPA string: " << gpaStr << endl;  // Has many decimal places

    // c_str() for C-style APIs
    string filename = "data.txt";
    const char* cstr = filename.c_str();
    printf("C-string: %s\n", cstr);

    return 0;
}
```

`stoi` converts string to int. `stod` to double. `stoll` to long long. `to_string` converts any number to string (note: `to_string(8.75)` gives many decimal places). `c_str()` returns a `const char*` for use with C functions like `printf`.

**Output:**

```
stoi("12345") = 12345
Doubled: 24690
stod("3.14159") = 3.14159
stoll: 9000000000
Age: 21
GPA string: 8.750000
C-string: data.txt
```

### String Iteration and Character Manipulation

```cpp
#include <iostream>
#include <string>
#include <cctype>
using namespace std;

int main() {
    string s = "Hello World 123";

    // Index-based iteration
    cout << "Characters: ";
    for (int i = 0; i < (int)s.length(); i++) {
        cout << s[i];
    }
    cout << endl;

    // Range-based (read-only)
    int vowels = 0, digits = 0, spaces = 0;
    for (char c : s) {
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ||
            c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') vowels++;
        if (isdigit(c)) digits++;
        if (isspace(c)) spaces++;
    }
    cout << "Vowels: " << vowels << ", Digits: " << digits << ", Spaces: " << spaces << endl;

    // Range-based (modify by reference)
    string upper = s;
    for (char &c : upper) {
        c = toupper(c);
    }
    cout << "Uppercase: " << upper << endl;

    // Convert using char arithmetic
    string lower = s;
    for (char &c : lower) {
        if (c >= 'A' && c <= 'Z') c += 32;
    }
    cout << "Lowercase: " << lower << endl;

    return 0;
}
```

Strings can be iterated like arrays. `for (char c : s)` is read-only. `for (char &c : s)` allows modification. `toupper()` and `tolower()` from `` convert case. `isdigit()`, `isalpha()`, `isspace()` classify characters. The char arithmetic approach (adding/subtracting 32) is common in CP.

**Output:**

```
Characters: Hello World 123
Vowels: 3, Digits: 3, Spaces: 2
Uppercase: HELLO WORLD 123
Lowercase: hello world 123
```

### Reverse String and Palindrome Check

```cpp
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

// Manual reverse using two pointers
string manualReverse(string s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        swap(s[left], s[right]);
        left++;
        right--;
    }
    return s;
}

bool isPalindrome(string s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        if (s[left] != s[right]) return false;
        left++;
        right--;
    }
    return true;
}

int main() {
    string s1 = "Hello";
    cout << "Manual reverse: " << manualReverse(s1) << endl;

    // STL reverse (modifies in place)
    string s2 = "abcdef";
    reverse(s2.begin(), s2.end());
    cout << "STL reverse: " << s2 << endl;

    // Palindrome check
    string words[] = {"racecar", "hello", "madam", "level", "cpp"};
    for (string &w : words) {
        cout << w << ": " << (isPalindrome(w) ? "Palindrome" : "Not palindrome") << endl;
    }

    return 0;
}
```

The two-pointer technique reverses in O(n) time. For palindrome, compare characters from both ends moving inward. `reverse(s.begin(), s.end())` from `` reverses in place. Palindrome check is O(n) time, O(1) space.

**Output:**

```
Manual reverse: olleH
STL reverse: fedcba
racecar: Palindrome
hello: Not palindrome
madam: Palindrome
level: Palindrome
cpp: Not palindrome
```

### Anagram Check Using Frequency Array

```cpp
#include <iostream>
#include <string>
using namespace std;

bool areAnagrams(string s1, string s2) {
    if (s1.length() != s2.length()) return false;

    int freq[26] = {0};
    for (char c : s1) freq[c - 'a']++;
    for (char c : s2) freq[c - 'a']--;

    for (int i = 0; i < 26; i++) {
        if (freq[i] != 0) return false;
    }
    return true;
}

int main() {
    string pairs[][2] = {
        {"listen", "silent"},
        {"hello", "world"},
        {"anagram", "nagaram"},
        {"rat", "tar"}
    };

    for (auto &p : pairs) {
        cout << "\"" << p[0] << "\" and \"" << p[1] << "\": ";
        cout << (areAnagrams(p[0], p[1]) ? "Anagrams" : "Not anagrams") << endl;
    }

    return 0;
}
```

Two strings are anagrams if they have identical character frequencies. Increment for s1, decrement for s2. If all frequencies are 0, they are anagrams. This is O(n) time, O(1) space (fixed 26-element array). The alternative is to sort both strings and compare -- O(n log n).

**Output:**

```
"listen" and "silent": Anagrams
"hello" and "world": Not anagrams
"anagram" and "nagaram": Anagrams
"rat" and "tar": Anagrams
```

### getline and C-string vs std::string Interaction

```cpp
#include <iostream>
#include <string>
#include <cstring>
using namespace std;

int main() {
    // getline reads full line with spaces
    string fullName;
    cout << "Enter full name: ";
    getline(cin, fullName);
    cout << "Hello, " << fullName << "!" << endl;

    // std::string to C-string
    string s = "Modern Age Coders";
    const char* cstr = s.c_str();
    cout << "C-string length: " << strlen(cstr) << endl;
    printf("printf with c_str: %s\n", s.c_str());

    // C-string to std::string
    char arr[] = "From C-string";
    string converted = arr;  // Implicit conversion
    cout << "Converted: " << converted << endl;
    cout << "Length: " << converted.length() << endl;

    // String comparison
    string a = "apple", b = "banana";
    if (a < b) cout << a << " comes before " << b << endl;
    if (a == "apple") cout << "Exact match!" << endl;

    return 0;
}
```

`getline(cin, s)` reads the entire line. `c_str()` converts `std::string` to `const char*` for C APIs. C-strings convert to `std::string` implicitly. `std::string` supports `==`, `<`, `>` operators for comparison (unlike C-strings which require `strcmp`).

**Output:**

```
Enter full name: Priya Sharma
Hello, Priya Sharma!
C-string length: 17
printf with c_str: Modern Age Coders
Converted: From C-string
Length: 13
apple comes before banana
Exact match!
```

## Common Mistakes

### Comparing C-strings with == (Compares Pointers, Not Content)

**Wrong:**

```
#include <iostream>
#include <cstring>
using namespace std;
int main() {
    char s1[] = "hello";
    char s2[] = "hello";
    if (s1 == s2) {
        cout << "Equal" << endl;
    } else {
        cout << "Not equal" << endl;  // This prints!
    }
    return 0;
}
```

Prints 'Not equal' even though both strings contain 'hello'. == compares memory addresses, not content.

**Correct:**

```
#include <iostream>
#include <cstring>
using namespace std;
int main() {
    char s1[] = "hello";
    char s2[] = "hello";
    if (strcmp(s1, s2) == 0) {
        cout << "Equal" << endl;  // Correct!
    }
    return 0;
}
```

For C-strings, `==` compares the memory addresses of the two arrays, which are different. Use `strcmp(s1, s2) == 0` to compare content. For `std::string`, the `==` operator IS overloaded to compare content, so `s1 == s2` works correctly.

### Buffer Overflow with strcpy/strcat

**Wrong:**

```
#include <iostream>
#include <cstring>
using namespace std;
int main() {
    char dest[5];
    strcpy(dest, "Hello World");  // 11 chars + \0 into 5-char buffer!
    cout << dest << endl;
    return 0;
}
```

Writes past the buffer boundary. May crash, corrupt data, or appear to work (undefined behavior).

**Correct:**

```
#include <iostream>
#include <cstring>
using namespace std;
int main() {
    char dest[20];  // Ensure enough space
    strcpy(dest, "Hello World");
    cout << dest << endl;
    // Or better: use std::string
    return 0;
}
```

`strcpy` and `strcat` do NOT check if the destination has enough space. Writing past the buffer is a **buffer overflow** -- one of the most common security vulnerabilities in C/C++. Use `strncpy` for bounded copy, or better yet, use `std::string`.

### Forgetting that string::find Returns string::npos, Not -1

**Wrong:**

```
#include <iostream>
#include <string>
using namespace std;
int main() {
    string s = "Hello World";
    int pos = s.find("xyz");  // Assigned to int!
    if (pos == -1) {
        cout << "Not found" << endl;  // Works by accident on most systems
    }
    return 0;
}
```

string::find returns size_t (unsigned). Comparing with -1 works due to implicit conversion but is technically incorrect.

**Correct:**

```
#include <iostream>
#include <string>
using namespace std;
int main() {
    string s = "Hello World";
    size_t pos = s.find("xyz");
    if (pos == string::npos) {
        cout << "Not found" << endl;
    }
    return 0;
}
```

`string::find` returns `size_t` (unsigned). When not found, it returns `string::npos` (the maximum `size_t` value). Comparing with `-1` works because `-1` converts to the same value, but it is better practice to use `string::npos` explicitly.

### Modifying String Literal (Undefined Behavior)

**Wrong:**

```
#include <iostream>
using namespace std;
int main() {
    char* s = "Hello";  // Points to read-only memory
    s[0] = 'J';          // CRASH: modifying string literal!
    cout << s << endl;
    return 0;
}
```

Segmentation fault or crash. String literals are stored in read-only memory.

**Correct:**

```
#include <iostream>
using namespace std;
int main() {
    char s[] = "Hello";  // Copies into writable array
    s[0] = 'J';          // OK: modifying local copy
    cout << s << endl;   // Jello
    return 0;
}
```

`char* s = "Hello"` makes s point to a string literal in read-only memory. `char s[] = "Hello"` copies the literal into a writable local array. Modern compilers warn about the former and require `const char*`.

## Summary

- C++ has two string types: C-strings (char arrays with '\0' terminator) and std::string (dynamic, safe, from  header).
- C-string functions from : strlen (O(n) length), strcpy (copy), strcat (concatenate), strcmp (compare, returns 0 for equal).
- Never compare C-strings with == (compares addresses). Use strcmp(). For std::string, == compares content correctly.
- std::string key operations: length()/size() (O(1)), substr(pos, len), find(str), replace(pos, len, str), append/+=, insert, erase.
- string::find returns string::npos (not -1) when not found. Always compare with string::npos, not -1.
- Conversions: stoi/stol/stoll/stof/stod convert string to number. to_string() converts number to string. c_str() returns const char*.
- getline(cin, s) reads the entire line including spaces. cin >> s reads only until whitespace. Use cin.ignore() between >> and getline.
- String iteration: for (int i = 0; i < s.length(); i++) or for (char c : s). Use for (char &c : s) to modify characters in place.
- Common algorithms: reverse with two pointers or reverse(), palindrome check with two pointers, anagram check with frequency array (O(n)), vowel counting with iteration.
- C-strings risk buffer overflow (strcpy/strcat have no bounds checking). std::string manages memory automatically and is always preferred in modern C++.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/cpp/strings-in-cpp/*
*Practice questions: https://learn.modernagecoders.com/resources/cpp/strings-in-cpp/practice/*
