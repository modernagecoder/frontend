---
title: "Practice: Strings - C-style and std::string"
description: "56 practice problems for Strings - C-style and std::string in C++"
slug: strings-in-cpp-practice
canonical: https://learn.modernagecoders.com/resources/cpp/strings-in-cpp/practice
category: "C++"
---
# Practice: Strings - C-style and std::string

**Total questions:** 56

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    char s[] = "Hello";
    cout << strlen(s) << endl;
    cout << sizeof(s) << endl;
    return 0;
}
```

*Hint:* strlen counts characters before \0. sizeof counts total bytes including \0.

**Answer:** `5`
`6`

`strlen("Hello")` counts 5 characters (H, e, l, l, o). `sizeof(s)` is 6 because the array stores 5 characters plus the null terminator `'\0'`.

### Q2. [Easy] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    string s = "Hello";
    cout << s.length() << endl;
    cout << s[1] << endl;
    return 0;
}
```

*Hint:* length() returns character count. Indexing is 0-based.

**Answer:** `5`
`e`

`s.length()` is 5. `s[1]` is the second character, 'e' (0-indexed: H=0, e=1, l=2, l=3, o=4).

### Q3. [Easy] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    string a = "Hello";
    string b = " World";
    string c = a + b;
    cout << c << endl;
    return 0;
}
```

*Hint:* The + operator concatenates strings.

**Answer:** `Hello World`

The `+` operator is overloaded for `std::string` to concatenate. `"Hello" + " World"` produces `"Hello World"`.

### Q4. [Medium] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    string s = "Hello, World!";
    cout << s.substr(7, 5) << endl;
    return 0;
}
```

*Hint:* substr(start_pos, length) extracts a substring.

**Answer:** `World`

`s.substr(7, 5)` extracts 5 characters starting at index 7. Counting: H(0) e(1) l(2) l(3) o(4) ,(5) (6) W(7) o(8) r(9) l(10) d(11). So characters at 7-11 are "World".

### Q5. [Medium] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    string s = "abcdefgh";
    size_t pos = s.find("cde");
    cout << pos << endl;
    pos = s.find("xyz");
    cout << (pos == string::npos ? "Not found" : "Found") << endl;
    return 0;
}
```

*Hint:* find returns the starting index, or string::npos if not found.

**Answer:** `2`
`Not found`

`"cde"` starts at index 2 in `"abcdefgh"`. `"xyz"` is not present, so `find` returns `string::npos`.

### Q6. [Medium] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    string s = "Hello";
    s.insert(5, " World");
    cout << s << endl;
    s.erase(5, 6);
    cout << s << endl;
    return 0;
}
```

*Hint:* insert adds at position. erase removes from position.

**Answer:** `Hello World`
`Hello`

`insert(5, " World")` inserts " World" at position 5, giving "Hello World". `erase(5, 6)` removes 6 characters from position 5, restoring "Hello".

### Q7. [Medium] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    int n = 42;
    string s = "Value: " + to_string(n);
    cout << s << endl;
    string num = "123";
    cout << stoi(num) + 7 << endl;
    return 0;
}
```

*Hint:* to_string converts number to string. stoi converts string to int.

**Answer:** `Value: 42`
`130`

`to_string(42)` produces `"42"`. Concatenated with "Value: " gives "Value: 42". `stoi("123")` converts to int 123. Adding 7 gives 130.

### Q8. [Hard] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    char s1[] = "hello";
    char s2[] = "hello";
    if (s1 == s2) cout << "Equal" << endl;
    else cout << "Not equal" << endl;
    if (strcmp(s1, s2) == 0) cout << "Content equal" << endl;
    return 0;
}
```

*Hint:* == compares addresses for C-strings. strcmp compares content.

**Answer:** `Not equal`
`Content equal`

`s1 == s2` compares the memory addresses of the two arrays, which are different (they are separate arrays). `strcmp` compares the actual character content and returns 0 because both contain "hello".

### Q9. [Easy] What is the difference between `strlen(s)` and `sizeof(s)` for the C-string `char s[] = "Hello";`?

*Hint:* One counts characters, the other counts bytes.

**Answer:** `strlen(s)` returns 5 -- the number of characters before the null terminator. `sizeof(s)` returns 6 -- the total size of the array including the null terminator `'\0'`. `strlen` is O(n) (scans until `'\0'`). `sizeof` is a compile-time constant.

For `std::string`, use `s.length()` or `s.size()` which are both O(1) because the length is stored internally.

### Q10. [Medium] What is `string::npos` and when is it returned?

*Hint:* It is the return value of find() when the substring is not found.

**Answer:** `string::npos` is a constant of type `size_t` with the maximum possible value (typically 18446744073709551615 on 64-bit). It is returned by `find()`, `rfind()`, and similar functions when the search string is not found. Always compare with `string::npos`, not with -1.

Technically, `string::npos` equals `(size_t)-1`, which wraps to the max unsigned value. Comparing with `-1` works due to implicit conversion but is not idiomatic C++.

### Q11. [Hard] What is the output?

```
#include 
#include 
#include 
using namespace std;
int main() {
    string s = "abcba";
    string rev = s;
    reverse(rev.begin(), rev.end());
    cout << (s == rev ? "Palindrome" : "Not") << endl;
    return 0;
}
```

*Hint:* Reverse the string and compare with the original.

**Answer:** `Palindrome`

The string "abcba" reversed is "abcba" (same). Since `s == rev` is true, it is a palindrome.

### Q12. [Hard] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    string s = "Hello World";
    s.replace(s.find("World"), 5, "C++");
    cout << s << endl;
    cout << s.length() << endl;
    return 0;
}
```

*Hint:* find returns 6. replace(6, 5, "C++") replaces 5 chars with 3 chars.

**Answer:** `Hello C++`
`9`

`find("World")` returns 6. `replace(6, 5, "C++")` removes 5 characters ("World") and inserts "C++" (3 characters). The string shrinks from 11 to 9 characters.

### Q13. [Medium] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    string a = "apple";
    string b = "banana";
    cout << (a < b) << endl;
    cout << (a > b) << endl;
    cout << (a == "apple") << endl;
    return 0;
}
```

*Hint:* String comparison is lexicographic (dictionary order).

**Answer:** `1`
`0`
`1`

Lexicographic comparison: 'a' (97) < 'b' (98), so "apple" < "banana" is true (1). "apple" > "banana" is false (0). "apple" == "apple" is true (1).

### Q14. [Hard] Why is the frequency array approach O(n) for anagram checking while the sorting approach is O(n log n)?

*Hint:* Think about what each approach does.

**Answer:** The frequency array approach iterates through each string once (O(n) each) and then checks 26 counts (O(1)). Total: O(n). The sorting approach sorts both strings (O(n log n) each) and then compares them (O(n)). Total: O(n log n). The frequency array is faster but only works for lowercase letters. For Unicode, sorting may be simpler.

In competitive programming, the frequency array approach is preferred for its linear time complexity. Use an array of size 26 for lowercase-only strings, or a map/unordered_map for general character sets.

### Q15. [Easy] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    string s = "Hello";
    s += " World";
    s.append("!");
    cout << s << endl;
    return 0;
}
```

*Hint:* += and append both concatenate to the end.

**Answer:** `Hello World!`

`+=` appends " World" to "Hello", making "Hello World". `append("!")` adds "!" at the end. Both `+=` and `append` achieve the same result.

### Q16. [Medium] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    string s = "HELLO";
    for (char &c : s) {
        c = c + 32;
    }
    cout << s << endl;
    return 0;
}
```

*Hint:* Adding 32 to an uppercase ASCII letter gives the lowercase version.

**Answer:** `hello`

Each uppercase letter (ASCII 65-90) is converted to lowercase by adding 32 ('A'+32 = 'a'). The reference `&c` modifies the string in place.

### Q17. [Hard] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    string s = "aababcabc";
    int count = 0;
    size_t pos = 0;
    while ((pos = s.find("ab", pos)) != string::npos) {
        count++;
        pos++;  // Move past this match
    }
    cout << count << endl;
    return 0;
}
```

*Hint:* Count all occurrences of "ab" including overlapping ones.

**Answer:** `3`

"ab" appears at positions 1, 3, and 6 in "aababcabc". The while loop finds each occurrence by starting the next search from `pos + 1` (allowing overlaps, though "ab" does not overlap with itself). Count = 3.

### Q18. [Easy] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    string s = "Hello";
    s[0] = 'J';
    cout << s << endl;
    return 0;
}
```

*Hint:* std::string characters can be modified by index.

**Answer:** `Jello`

`s[0] = 'J'` replaces the first character 'H' with 'J'. The string becomes "Jello".

### Q19. [Medium] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    string s = "12345";
    int sum = 0;
    for (char c : s) {
        sum += c - '0';
    }
    cout << sum << endl;
    return 0;
}
```

*Hint:* c - '0' converts a digit character to its integer value.

**Answer:** `15`

Each character is converted to its digit value using `c - '0'`: 1+2+3+4+5 = 15. This is the standard technique for digit extraction from strings.

### Q20. [Hard] Why is `strcpy` considered dangerous and what is the alternative?

*Hint:* Think about what happens when the source is longer than the destination.

**Answer:** `strcpy` copies characters until it finds `'\0'` with no bounds checking. If the source is longer than the destination buffer, it writes past the buffer boundary (buffer overflow). Alternatives: `strncpy` (copies at most n characters), or better yet, use `std::string` which manages memory automatically.

Buffer overflow is one of the most common security vulnerabilities in C/C++ programs. It can allow attackers to execute arbitrary code. This is why modern C++ strongly recommends std::string over C-strings.

## Mixed Questions

### Q1. [Easy] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    string s = "Hello";
    cout << s[0] << s[4] << endl;
    return 0;
}
```

*Hint:* s[0] is the first character, s[4] is the last.

**Answer:** `Ho`

`s[0]` = 'H', `s[4]` = 'o'. They are printed without a space between them: "Ho".

### Q2. [Easy] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    cout << strcmp("abc", "abc") << endl;
    cout << strcmp("abc", "abd") << endl;
    cout << strcmp("abd", "abc") << endl;
    return 0;
}
```

*Hint:* strcmp returns 0, negative, or positive.

**Answer:** `0`
`-1`
`1`

Equal strings: 0. "abc" < "abd" (c < d): negative. "abd" > "abc" (d > c): positive. Exact values may vary by compiler, but the sign is guaranteed.

### Q3. [Medium] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    string s = "Hello World";
    int count = 0;
    for (char c : s) {
        if (c == 'l') count++;
    }
    cout << count << endl;
    return 0;
}
```

*Hint:* Count how many 'l' characters are in "Hello World".

**Answer:** `3`

"Hello World" contains 'l' at positions 2, 3, and 9 (in "World"). Total count = 3.

### Q4. [Easy] Write a program that reads a string and prints it reversed without using any library reverse function.

*Hint:* Use a loop from the last index to 0.

**Answer:** ```
#include 
#include 
using namespace std;
int main() {
    string s;
    getline(cin, s);
    for (int i = s.length() - 1; i >= 0; i--) {
        cout << s[i];
    }
    cout << endl;
    return 0;
}
```

Input: Hello
Output: olleH

Iterate from the last index to 0 and print each character. This reverses the string without modifying the original.

### Q5. [Medium] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    string s = "123";
    int n = stoi(s);
    n *= 2;
    s = to_string(n);
    cout << s << endl;
    return 0;
}
```

*Hint:* Convert to int, double it, convert back to string.

**Answer:** `246`

`stoi("123")` gives 123. Doubled: 246. `to_string(246)` gives "246".

### Q6. [Medium] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    string s = "abcdef";
    s.erase(2, 3);  // Remove 3 chars starting at index 2
    cout << s << endl;
    cout << s.length() << endl;
    return 0;
}
```

*Hint:* erase(2, 3) removes characters at indices 2, 3, 4.

**Answer:** `abf`
`3`

`erase(2, 3)` removes 'c', 'd', 'e' (3 characters starting at index 2). Remaining: "abf" with length 3.

### Q7. [Medium] Write a function that checks if a given string is a palindrome (ignoring case).

*Hint:* Convert to lowercase first, then use two-pointer comparison.

**Answer:** ```
#include 
#include 
#include 
using namespace std;
bool isPalindrome(string s) {
    for (char &c : s) c = tolower(c);
    int l = 0, r = s.length() - 1;
    while (l < r) {
        if (s[l] != s[r]) return false;
        l++; r--;
    }
    return true;
}
int main() {
    cout << isPalindrome("Racecar") << endl;  // 1
    cout << isPalindrome("Hello") << endl;    // 0
    cout << isPalindrome("Madam") << endl;    // 1
    return 0;
}
```

First convert all characters to lowercase. Then use two pointers from both ends. If all pairs match, it is a palindrome.

### Q8. [Hard] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    string s = "aaabbbccc";
    int freq[26] = {0};
    for (char c : s) freq[c - 'a']++;
    for (int i = 0; i < 26; i++) {
        if (freq[i] > 0) {
            cout << (char)('a' + i) << ":" << freq[i] << " ";
        }
    }
    cout << endl;
    return 0;
}
```

*Hint:* Build a frequency array and print characters with non-zero counts.

**Answer:** `a:3 b:3 c:3`

The frequency array counts: a appears 3 times, b appears 3 times, c appears 3 times. Only non-zero frequencies are printed.

### Q9. [Hard] Write a function that takes two strings and checks if they are anagrams using a frequency array.

*Hint:* Increment for string 1, decrement for string 2. All counts should be 0.

**Answer:** ```
#include 
#include 
using namespace std;
bool isAnagram(string a, string b) {
    if (a.length() != b.length()) return false;
    int freq[26] = {0};
    for (char c : a) freq[c - 'a']++;
    for (char c : b) freq[c - 'a']--;
    for (int i = 0; i < 26; i++)
        if (freq[i] != 0) return false;
    return true;
}
int main() {
    cout << isAnagram("listen", "silent") << endl;  // 1
    cout << isAnagram("hello", "world") << endl;   // 0
    return 0;
}
```

Anagrams have identical character frequencies. Increment counts for string 1, decrement for string 2. If all counts are 0, they are anagrams. O(n) time, O(1) space.

### Q10. [Hard] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    string s = "the quick brown fox";
    int words = 1;
    for (char c : s) {
        if (c == ' ') words++;
    }
    cout << words << endl;
    return 0;
}
```

*Hint:* Count spaces + 1 = number of words (assuming single spaces, no leading/trailing spaces).

**Answer:** `4`

There are 3 spaces in "the quick brown fox". Words = spaces + 1 = 4. This simple approach assumes single spaces and no leading/trailing spaces.

### Q11. [Medium] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    string s = "C++ Programming";
    cout << s.substr(0, 3) << endl;
    cout << s.substr(4) << endl;
    return 0;
}
```

*Hint:* substr(0, 3) gets first 3 chars. substr(4) gets from index 4 to end.

**Answer:** `C++`
`Programming`

`substr(0, 3)` extracts 3 characters from index 0: "C++". `substr(4)` extracts from index 4 to the end: "Programming".

### Q12. [Easy] What is the output?

```
#include 
#include 
using namespace std;
int main() {
    string s = "Hello";
    cout << s.empty() << endl;
    s = "";
    cout << s.empty() << endl;
    return 0;
}
```

*Hint:* empty() returns true (1) if the string has 0 characters.

**Answer:** `0`
`1`

"Hello" is not empty: `empty()` returns false (0). After assigning "", the string is empty: `empty()` returns true (1).

## Multiple Choice Questions

### Q1. [Easy] Which header is needed for `strlen`, `strcpy`, `strcmp`?

**B is correct.** `` provides C-string functions: `strlen`, `strcpy`, `strcat`, `strcmp`. `` provides the `std::string` class.

### Q2. [Easy] What is the null terminator character in C-strings?

**C is correct.** `'\0'` (ASCII 0) marks the end of a C-string. `'0'` is the digit zero (ASCII 48). `'\n'` is newline.

### Q3. [Easy] What does `s.length()` return for `string s = "Hello";`?

**B is correct.** `length()` returns the number of characters in the string: 5 for "Hello". Unlike C-strings, `std::string` does not count any null terminator in its length.

### Q4. [Easy] How do you concatenate two `std::string` objects?

**C is correct.** `std::string` overloads the `+` and `+=` operators for concatenation. `strcat` is for C-strings only. There is no `concat` or `add` method.

### Q5. [Medium] What does `strcmp` return when two strings are equal?

**C is correct.** `strcmp` returns 0 when strings are equal, a negative value when the first is less, and a positive value when the first is greater.

### Q6. [Medium] What does `string::find` return when the substring is not found?

**C is correct.** `find` returns `string::npos` (the maximum `size_t` value) when the substring is not found. Comparing with -1 works but `string::npos` is the correct idiom.

### Q7. [Medium] What is the time complexity of `strlen()`?

**B is correct.** `strlen` scans from the beginning until it finds `'\0'`, making it O(n). In contrast, `std::string::length()` is O(1) because the length is stored internally.

### Q8. [Medium] What does `stoi("42abc")` return?

**B is correct.** `stoi` reads as many characters as possible that form a valid integer: "42". The remaining "abc" is ignored. It returns 42. It would throw `invalid_argument` only if the string starts with a non-numeric character.

### Q9. [Hard] Which approach is faster for anagram checking: sorting or frequency array?

**C is correct.** The frequency array approach iterates each string once: O(n). Sorting both strings is O(n log n). The frequency array is faster for lowercase-only strings (fixed 26-element array).

### Q10. [Hard] What does `char* s = "Hello";` vs `char s[] = "Hello";` differ in?

**B is correct.** `char* s = "Hello"` makes s point to a string literal in read-only memory (modifying it is undefined behavior). `char s[] = "Hello"` creates a writable copy in local memory.

### Q11. [Hard] What is the output of `cout << string("abc") + string("def");`?

**B is correct.** The `+` operator for `std::string` concatenates without any separator. "abc" + "def" = "abcdef".

### Q12. [Medium] What does `c_str()` return?

**C is correct.** `c_str()` returns a `const char*` pointing to a null-terminated C-string representation of the `std::string`. It is used when C APIs require a `char*`.

### Q13. [Easy] What is the output of `string s = "abc"; cout << s + "def";`?

**A is correct.** The `+` operator concatenates std::string with a C-string literal. "abc" + "def" = "abcdef" with no separator.

### Q14. [Medium] What does `s.substr(3)` return if `s = "HelloWorld"`?

**B is correct.** `substr(3)` with one argument returns everything from index 3 to the end. For "HelloWorld", characters from index 3 onward are "loWorld".

### Q15. [Hard] What does `stoi("abc")` do?

**C is correct.** `stoi` throws `std::invalid_argument` when the string does not start with a valid integer representation. "abc" has no leading digits.

### Q16. [Easy] What is the correct way to read a full line of text including spaces?

**B is correct.** `getline(cin, s)` reads the entire line including spaces. `cin >> s` stops at the first whitespace character.

### Q17. [Hard] Which is more efficient for checking string equality: sorting both then comparing, or using a frequency array?

**C is correct.** Building a frequency array takes O(n). Sorting takes O(n log n). For anagram checking with lowercase letters, the frequency approach is asymptotically faster.

### Q18. [Medium] What does `to_string(3.14)` return?

**B is correct.** `to_string` for floating-point numbers uses a default format with 6 decimal places, producing something like "3.140000". For controlled formatting, use stringstream with setprecision.

## Coding Challenges

### Challenge 1. Count Vowels and Consonants

**Difficulty:** Easy

Read a string (may contain spaces) and count the number of vowels (a, e, i, o, u -- case-insensitive) and consonants. Ignore non-alphabetic characters.

**Constraints:**

- Use tolower() or char arithmetic for case conversion. Use isalpha() to filter.

**Sample input:**

```
Hello World
```

**Sample output:**

```
Vowels: 3
Consonants: 7
```

**Solution:**

```cpp
#include <iostream>
#include <string>
#include <cctype>
using namespace std;
int main() {
    string s;
    getline(cin, s);
    int vowels = 0, consonants = 0;
    for (char c : s) {
        c = tolower(c);
        if (isalpha(c)) {
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
                vowels++;
            else
                consonants++;
        }
    }
    cout << "Vowels: " << vowels << endl;
    cout << "Consonants: " << consonants << endl;
    return 0;
}
```

### Challenge 2. First Non-Repeating Character

**Difficulty:** Medium

Given a string, find the first character that does not repeat. Print the character and its index. If all characters repeat, print 'None'.

**Constraints:**

- Use a frequency array. Single pass to count, second pass to find first with count 1.

**Sample input:**

```
aabbcdd
```

**Sample output:**

```
First non-repeating: c at index 4
```

**Solution:**

```cpp
#include <iostream>
#include <string>
using namespace std;
int main() {
    string s;
    getline(cin, s);
    int freq[256] = {0};
    for (char c : s) freq[(int)c]++;
    for (int i = 0; i < (int)s.length(); i++) {
        if (freq[(int)s[i]] == 1) {
            cout << "First non-repeating: " << s[i] << " at index " << i << endl;
            return 0;
        }
    }
    cout << "None" << endl;
    return 0;
}
```

### Challenge 3. Remove All Occurrences of a Character

**Difficulty:** Medium

Read a string and a character. Remove all occurrences of that character from the string. Print the resulting string and its length.

**Constraints:**

- Use erase and find in a loop, or build a new string. Do NOT use any external library.

**Sample input:**

```
programming
m
```

**Sample output:**

```
Result: prograing
Length: 9
```

**Solution:**

```cpp
#include <iostream>
#include <string>
using namespace std;
int main() {
    string s;
    char ch;
    getline(cin, s);
    cin >> ch;
    string result = "";
    for (char c : s) {
        if (c != ch) result += c;
    }
    cout << "Result: " << result << endl;
    cout << "Length: " << result.length() << endl;
    return 0;
}
```

### Challenge 4. Word Reverser

**Difficulty:** Hard

Read a sentence and reverse the order of words. Do not reverse individual characters within words. Example: 'hello world' becomes 'world hello'.

**Constraints:**

- Handle multiple spaces between words. Use string operations.

**Sample input:**

```
I love competitive programming
```

**Sample output:**

```
programming competitive love I
```

**Solution:**

```cpp
#include <iostream>
#include <string>
#include <vector>
using namespace std;
int main() {
    string s;
    getline(cin, s);
    vector<string> words;
    string word = "";
    for (int i = 0; i <= (int)s.length(); i++) {
        if (i == (int)s.length() || s[i] == ' ') {
            if (!word.empty()) {
                words.push_back(word);
                word = "";
            }
        } else {
            word += s[i];
        }
    }
    for (int i = words.size() - 1; i >= 0; i--) {
        cout << words[i];
        if (i > 0) cout << " ";
    }
    cout << endl;
    return 0;
}
```

### Challenge 5. Longest Palindromic Substring (Brute Force)

**Difficulty:** Hard

Given a string, find and print the longest substring that is a palindrome. If there are multiple of the same length, print the first one found.

**Constraints:**

- O(n^3) brute force is acceptable. Check all substrings and verify palindrome.

**Sample input:**

```
babad
```

**Sample output:**

```
bab
```

**Solution:**

```cpp
#include <iostream>
#include <string>
using namespace std;
bool isPalindrome(string s) {
    int l = 0, r = s.length() - 1;
    while (l < r) {
        if (s[l] != s[r]) return false;
        l++; r--;
    }
    return true;
}
int main() {
    string s;
    cin >> s;
    string longest = "";
    for (int i = 0; i < (int)s.length(); i++) {
        for (int len = 1; len <= (int)s.length() - i; len++) {
            string sub = s.substr(i, len);
            if (isPalindrome(sub) && (int)sub.length() > (int)longest.length()) {
                longest = sub;
            }
        }
    }
    cout << longest << endl;
    return 0;
}
```

### Challenge 6. String Compression (Run-Length Encoding)

**Difficulty:** Hard

Implement basic string compression using run-length encoding. Consecutive duplicate characters are replaced with the character followed by the count. If the compressed string is not shorter, return the original.

**Constraints:**

- Single pass. Handle edge cases: empty string, single character, no repeats.

**Sample input:**

```
aabcccccaaa
```

**Sample output:**

```
a2b1c5a3
```

**Solution:**

```cpp
#include <iostream>
#include <string>
using namespace std;
int main() {
    string s;
    cin >> s;
    if (s.empty()) {
        cout << s << endl;
        return 0;
    }
    string compressed = "";
    int count = 1;
    for (int i = 1; i <= (int)s.length(); i++) {
        if (i < (int)s.length() && s[i] == s[i - 1]) {
            count++;
        } else {
            compressed += s[i - 1];
            compressed += to_string(count);
            count = 1;
        }
    }
    if ((int)compressed.length() >= (int)s.length()) {
        cout << s << endl;
    } else {
        cout << compressed << endl;
    }
    return 0;
}
```

---

*Notes: https://learn.modernagecoders.com/resources/cpp/strings-in-cpp/*
