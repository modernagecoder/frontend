---
title: "Practice: Strings in Python"
description: "65 practice problems for Strings in Python in Python"
slug: strings-in-python-practice
canonical: https://learn.modernagecoders.com/resources/python/strings-in-python/practice
category: "Python"
---
# Practice: Strings in Python

**Total questions:** 65

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
s = "Python"
print(s[0])
print(s[-1])
```

*Hint:* Index 0 is the first character. Index -1 is the last character.

**Answer:** `P`
`n`

`s[0]` accesses the first character 'P'. `s[-1]` accesses the last character 'n'. The string "Python" has indices 0-5 (positive) and -6 to -1 (negative).

### Q2. [Easy] What is the output?

```
s = "Hello"
print(s[1:4])
```

*Hint:* Slicing from index 1 up to (but not including) index 4.

**Answer:** `ell`

`s[1:4]` gives characters at indices 1, 2, 3 which are 'e', 'l', 'l'. The stop index 4 is excluded. This returns the substring "ell".

### Q3. [Easy] What is the output?

```
print("hello".upper())
print("WORLD".lower())
```

*Hint:* upper() converts all characters to uppercase, lower() to lowercase.

**Answer:** `HELLO`
`world`

`upper()` returns a new string with all characters converted to uppercase. `lower()` returns a new string with all characters in lowercase. The original strings are not modified.

### Q4. [Easy] What is the output?

```
s = "Python"
print(len(s))
print(s[len(s)-1])
```

*Hint:* len() returns the number of characters. The last valid index is len(s)-1.

**Answer:** `6`
`n`

"Python" has 6 characters, so `len(s)` returns 6. The last valid index is 5 (which is len(s)-1). `s[5]` is 'n'. This is equivalent to `s[-1]`.

### Q5. [Easy] What is the output?

```
print("abc" * 3)
print("Hi" + "!" * 4)
```

*Hint:* * repeats a string. + concatenates strings. * has higher precedence than +.

**Answer:** `abcabcabc`
`Hi!!!!`

`"abc" * 3` repeats "abc" three times. In the second line, `"!" * 4` is evaluated first (multiplication has higher precedence) giving "!!!!", then it is concatenated with "Hi" to give "Hi!!!!".

### Q6. [Easy] What is the output?

```
s = "  hello  "
print(s.strip())
print(s.lstrip())
print(s.rstrip())
```

*Hint:* strip() removes whitespace from both ends, lstrip() from left, rstrip() from right.

**Answer:** `hello`
`hello  `
`  hello`

`strip()` removes whitespace from both sides. `lstrip()` removes only from the left (leading spaces). `rstrip()` removes only from the right (trailing spaces). The original string `s` remains unchanged.

### Q7. [Medium] What is the output?

```
s = "Programming"
print(s[::2])
print(s[1::2])
```

*Hint:* Step 2 means take every second character. Starting from index 0 vs index 1 gives different results.

**Answer:** `Pormig`
`rgamn`

`s[::2]` takes every 2nd character starting from index 0: P(0), o(2), r(4), m(6), i(8), g(10) = "Pormig". `s[1::2]` takes every 2nd character starting from index 1: r(1), g(3), a(5), m(7), n(9) = "rgamn".

### Q8. [Medium] What is the output?

```
s = "abcdef"
print(s[-3:])
print(s[:-3])
print(s[-4:-1])
```

*Hint:* Negative indices count from the end. -1 is the last character, -2 is second to last, etc.

**Answer:** `def`
`abc`
`cde`

`s[-3:]` starts at index -3 ('d') and goes to the end: "def". `s[:-3]` starts from the beginning and stops before index -3: "abc". `s[-4:-1]` starts at index -4 ('c') and stops before index -1 ('f'): "cde".

### Q9. [Medium] What is the output?

```
s = "Hello World"
print(s.split())
print(s.split("o"))
print("l" in s)
```

*Hint:* split() without arguments splits on whitespace. split("o") splits at every 'o'. 'in' checks membership.

**Answer:** `['Hello', 'World']`
`['Hell', ' W', 'rld']`
`True`

`split()` with no argument splits on whitespace, giving two words. `split("o")` splits at each 'o', producing three parts: 'Hell', ' W', 'rld'. The `in` operator checks if 'l' exists anywhere in the string and returns True.

### Q10. [Medium] What is the output?

```
text = "Python is great"
print(text.find("is"))
print(text.find("was"))
print(text.count("t"))
```

*Hint:* find() returns the starting index of the first match, or -1. count() counts non-overlapping occurrences.

**Answer:** `7`
`-1`
`2`

`find("is")` finds "is" starting at index 7. `find("was")` returns -1 because "was" is not in the string. `count("t")` counts occurrences of 't': one in 'great' (index 14) and one at index 2 in 'Python' — wait, let us recount. 'P-y-t-h-o-n- -i-s- -g-r-e-a-t'. The 't' appears at index 2 and index 14, so count is 2.

### Q11. [Medium] What is the output?

```
s = "Hello"
print(s.replace("l", "L"))
print(s.replace("l", "L", 1))
print(s)
```

*Hint:* replace() replaces all occurrences by default. The third argument limits replacements. The original is unchanged.

**Answer:** `HeLLo`
`HeLlo`
`Hello`

`replace("l", "L")` replaces all occurrences of 'l' with 'L', giving "HeLLo". `replace("l", "L", 1)` replaces only the first occurrence, giving "HeLlo". The original string `s` is unchanged because strings are immutable.

### Q12. [Medium] What is the output?

```
name = "rohan"
print(name.capitalize())
print(name.title())
print("hello world python".title())
```

*Hint:* capitalize() capitalizes only the first character. title() capitalizes the first letter of each word.

**Answer:** `Rohan`
`Rohan`
`Hello World Python`

`capitalize()` makes the first character uppercase and the rest lowercase. `title()` capitalizes the first letter of every word. For a single word like "rohan", both give "Rohan". For multiple words, `title()` capitalizes each word's first letter.

### Q13. [Medium] What is the output?

```
words = ["Python", "is", "fun"]
result = " ".join(words)
print(result)
print("-".join("Hello"))
```

*Hint:* join() uses the string as a separator between elements of the iterable.

**Answer:** `Python is fun`
`H-e-l-l-o`

`" ".join(words)` joins the list elements with a space between them. `"-".join("Hello")` treats the string as an iterable of characters and joins them with hyphens. The join method is called on the separator, not on the list.

### Q14. [Hard] What is the output?

```
s = "abcdef"
print(s[10:20])
print(s[-100:3])
print(s[2:100])
```

*Hint:* Slicing with out-of-range indices does not raise errors. Python clips to available range.

**Answer:** `` (empty string)
`abc`
`cdef`

`s[10:20]` starts beyond the string, so it returns an empty string. `s[-100:3]` clips -100 to 0, giving `s[0:3]` = "abc". `s[2:100]` clips 100 to the end of string, giving `s[2:]` = "cdef". Slicing is forgiving with indices.

### Q15. [Hard] What is the output?

```
s = "racecar"
print(s == s[::-1])
print(s[1:-1])
print(s[1:-1] == s[1:-1][::-1])
```

*Hint:* [::-1] reverses a string. 'racecar' is a palindrome. What about the substring without the first and last character?

**Answer:** `True`
`aceca`
`True`

"racecar" reversed is "racecar" (a palindrome), so the first comparison is True. `s[1:-1]` removes the first and last characters, giving "aceca". "aceca" reversed is also "aceca" (also a palindrome), so the third comparison is also True.

### Q16. [Hard] What is the output?

```
s = "Hello World"
print(s[::-1])
print(s[6::-1])
print(s[:5:-1])
```

*Hint:* With negative step, the defaults change. Omitting start means start from the end. Omitting stop means go to the beginning.

**Answer:** `dlroW olleH`
`W olleH`
`dlroW`

`s[::-1]` reverses the entire string. `s[6::-1]` starts at index 6 ('W') and goes backwards to the beginning: "W olleH". `s[:5:-1]` starts from the end (default with negative step) and goes backwards, stopping before index 5: characters at indices 10,9,8,7,6 = "dlroW".

### Q17. [Hard] What is the output?

```
s = "aabbaabb"
print(s.count("aa"))
print(s.count("ab"))
print(s.replace("aa", "x"))
```

*Hint:* count() counts non-overlapping occurrences. replace() replaces all non-overlapping matches left to right.

**Answer:** `2`
`2`
`xbbxbb`

`count("aa")` finds non-overlapping "aa" at positions 0 and 4, giving 2. `count("ab")` finds "ab" at positions 2 and 6, giving 2. `replace("aa", "x")` replaces each "aa" with "x": "aabbaabb" becomes "xbb" + "xbb" = "xbbxbb".

### Q18. [Hard] What is the output?

```
print("42".zfill(5))
print("-42".zfill(5))
print("hello".center(11, "*"))
print("7".zfill(1))
```

*Hint:* zfill() pads with zeros on the left. It handles negative signs specially. center() pads on both sides.

**Answer:** `00042`
`-0042`
`***hello***`
`7`

`zfill(5)` pads "42" with zeros to width 5: "00042". For "-42", zfill places zeros after the sign: "-0042". `center(11, "*")` centers "hello" (5 chars) in an 11-char field, padding 3 stars on each side. `zfill(1)` does nothing because "7" already has width 1.

## Mixed Questions

### Q1. [Easy] What is the output?

```
s = "Python"
print(s[0] + s[-1])
```

*Hint:* s[0] is the first character, s[-1] is the last. + concatenates strings.

**Answer:** `Pn`

`s[0]` is 'P' and `s[-1]` is 'n'. Concatenating them with `+` gives "Pn".

### Q2. [Easy] What is the output?

```
name = "Meera"
for ch in name:
    print(ch, end="-")
```

*Hint:* A for loop iterates over each character. end="-" adds a hyphen after each print.

**Answer:** `M-e-e-r-a-`

The loop iterates over each character of "Meera" and prints it followed by a hyphen (instead of a newline). This produces M-e-e-r-a- with a trailing hyphen.

### Q3. [Easy] What is the output?

```
print("Hello".startswith("He"))
print("Hello".endswith("lo"))
print("Hello".startswith("he"))
```

*Hint:* startswith() and endswith() are case-sensitive.

**Answer:** `True`
`True`
`False`

"Hello" starts with "He" (True) and ends with "lo" (True). It does NOT start with "he" (False) because the comparison is case-sensitive: 'H' is not 'h'.

### Q4. [Medium] What is the output?

```
s = "abcde"
result = ""
for i in range(len(s)-1, -1, -1):
    result += s[i]
print(result)
print(result == s[::-1])
```

*Hint:* The loop builds a reversed string character by character. Compare with slicing reversal.

**Answer:** `edcba`
`True`

The loop iterates from index 4 down to 0, appending each character to result: 'e', 'd', 'c', 'b', 'a'. The result "edcba" is the same as `s[::-1]`, so the comparison returns True.

### Q5. [Medium] What is the output?

```
s = "Hello World"
words = s.split()
print(words)
print(" ".join(words[::-1]))
```

*Hint:* split() breaks into words. [::-1] reverses the list. join() combines them back.

**Answer:** `['Hello', 'World']`
`World Hello`

`split()` creates a list of words: ['Hello', 'World']. `words[::-1]` reverses the list to ['World', 'Hello']. `" ".join()` joins them with a space, giving "World Hello".

### Q6. [Medium] What is the output?

```
x = 10
y = 3
print(f"{x} / {y} = {x/y:.2f}")
print(f"{x} // {y} = {x//y}")
print(f"{x} % {y} = {x%y}")
```

*Hint:* f-strings can contain arithmetic expressions. :.2f formats to 2 decimal places.

**Answer:** `10 / 3 = 3.33`
`10 // 3 = 3`
`10 % 3 = 1`

f-strings evaluate expressions inside `{}`. `x/y` is 3.3333..., formatted to 2 decimal places as 3.33. `x//y` is integer division giving 3. `x%y` is the remainder giving 1.

### Q7. [Medium] What is the output?

```
s = "Mississippi"
print(s.count("ss"))
print(s.count("i"))
print(s.replace("ss", "S"))
```

*Hint:* count() counts non-overlapping occurrences from left to right.

**Answer:** `2`
`4`
`MiSiSippi`

"Mississippi" contains "ss" at positions 2 and 5 (non-overlapping), giving count 2. It contains 'i' at positions 1, 4, 7, 10, giving count 4. `replace("ss", "S")` replaces each "ss" with "S": "M-i-ss-i-ss-i-p-p-i" becomes "MiSiSippi".

### Q8. [Hard] What is the output?

```
s = "Python"
print(s[1:5:2])
print(s[5:1:-2])
print(s[::3])
```

*Hint:* s[start:stop:step] - with positive step, goes left to right. With negative step, goes right to left.

**Answer:** `yh`
`nh`
`Ph`

`s[1:5:2]` takes indices 1, 3 from "Python": 'y', 'h' = "yh". `s[5:1:-2]` starts at index 5 ('n') and goes backwards by 2, stopping before index 1: indices 5, 3 = 'n', 'h' = "nh". `s[::3]` takes every 3rd character: indices 0, 3 = 'P', 'h' = "Ph".

### Q9. [Hard] What is the output?

```
print(ord("A"))
print(ord("a") - ord("A"))
print(chr(ord("A") + 3))
print(chr(ord("z") - 25))
```

*Hint:* ord('A') is 65, ord('a') is 97. chr() converts a number back to a character.

**Answer:** `65`
`32`
`D`
`a`

`ord('A')` is 65. `ord('a') - ord('A')` = 97 - 65 = 32 (the gap between uppercase and lowercase). `chr(65 + 3)` = chr(68) = 'D'. `chr(ord('z') - 25)` = chr(122 - 25) = chr(97) = 'a'.

### Q10. [Hard] What is the output?

```
s = "aAbBcC"
uppers = ""
lowers = ""
for ch in s:
    if ch.isupper():
        uppers += ch
    else:
        lowers += ch
print(uppers)
print(lowers)
```

*Hint:* isupper() returns True for uppercase letters, False otherwise.

**Answer:** `ABC`
`abc`

The loop checks each character. Uppercase characters ('A', 'B', 'C') are added to `uppers`. Lowercase characters ('a', 'b', 'c') are added to `lowers`. Result: uppers = "ABC", lowers = "abc".

### Q11. [Medium] What is the difference between `find()` and `index()` when the substring is not found?

*Hint:* One returns a special value, the other raises an exception.

**Answer:** `find()` returns **-1** when the substring is not found. `index()` raises a **ValueError** when the substring is not found.

Both methods search for a substring and return the starting index of the first occurrence. The only difference is their behavior when the substring does not exist. `find()` fails silently by returning -1, making it safe to use with an if-check. `index()` raises an exception, which is useful when the absence of the substring should be treated as an error.

### Q12. [Medium] Why are strings called immutable in Python? What happens when you call a method like `upper()` on a string?

*Hint:* Think about whether the original string changes or a new one is created.

**Answer:** Strings are immutable because their content cannot be changed after creation. You cannot modify individual characters using indexing (e.g., `s[0] = 'x'` raises TypeError). When you call `upper()`, Python creates and returns a **new string** with all characters in uppercase. The original string remains unchanged.

Immutability means the object's state cannot be altered after creation. All string methods (upper, lower, replace, strip, etc.) return new strings. The variable can be reassigned to point to the new string, but the old string object itself is never modified. This is an important concept that also applies to tuples and frozensets.

### Q13. [Hard] What is the output?

```
s = "12345"
print(s.isdigit())
print(s.isalpha())
print("abc123".isalnum())
print("".isdigit())
print(" ".isalpha())
```

*Hint:* These methods return True only if ALL characters match the condition AND the string is non-empty.

**Answer:** `True`
`False`
`True`
`False`
`False`

"12345" contains only digits, so `isdigit()` is True but `isalpha()` is False. "abc123" is all alphanumeric, so `isalnum()` is True. An empty string returns False for all is-methods. A space is neither a digit nor a letter, so both would return False.

## Multiple Choice Questions

### Q1. [Easy] Which of the following creates a valid string in Python?

A. 'Hello'
B. "Hello"
C. '''Hello'''
D. All of the above

**Answer:** D

**D is correct.** Python allows strings to be created with single quotes (A), double quotes (B), and triple quotes (C). All three produce valid string objects. Single and double quotes are interchangeable for single-line strings. Triple quotes support multi-line strings.

### Q2. [Easy] What does s[-1] return for a non-empty string s?

A. The first character
B. The last character
C. An error
D. The second character

**Answer:** B

**B is correct.** Negative indexing starts from the end. `s[-1]` always returns the last character of the string. `s[-2]` returns the second-to-last, and so on. Option A would be `s[0]`. Option C is wrong because -1 is a valid index for non-empty strings.

### Q3. [Easy] What is the result of 'Hello'[1:4]?

A. "Hel"
B. "ell"
C. "ello"
D. "Hell"

**Answer:** B

**B is correct.** Slicing `[1:4]` includes indices 1, 2, 3 (stop index 4 is excluded). 'Hello'[1]='e', [2]='l', [3]='l', giving "ell". Option A starts from index 0. Option C would be [1:5]. Option D would be [0:4].

### Q4. [Easy] Which method removes whitespace from both ends of a string?

A. clean()
B. trim()
C. strip()
D. remove()

**Answer:** C

**C is correct.** `strip()` removes leading and trailing whitespace. Python does not have `clean()` (A), `trim()` (B), or `remove()` (D) as string methods. Note: JavaScript uses `trim()`, but Python uses `strip()`.

### Q5. [Easy] What does 'Python'[::-1] return?

A. "Python"
B. "nohtyP"
C. "Pytho"
D. An error

**Answer:** B

**B is correct.** The slice `[::-1]` reverses the string. Starting from the end and going backwards through every character: n-o-h-t-y-P = "nohtyP". This is the standard Python idiom for reversing a string.

### Q6. [Medium] What is the output of 'Hello'.find('xyz')?

A. 0
B. -1
C. None
D. ValueError

**Answer:** B

**B is correct.** `find()` returns -1 when the substring is not found. It does NOT return None (C) or raise an error (D). `index()` would raise a ValueError, but `find()` returns -1 for the not-found case.

### Q7. [Medium] What does 'abc'.isalpha() return?

A. True
B. False
C. "abc"
D. 3

**Answer:** A

**A is correct.** `isalpha()` returns True if all characters in the string are alphabetic (letters) and the string is non-empty. 'abc' contains only letters, so it returns True. It does not return the string itself (C) or a count (D).

### Q8. [Medium] What happens when you execute: s = 'Hello'; s[0] = 'h'?

A. s becomes 'hello'
B. s becomes 'hHello'
C. TypeError is raised
D. s becomes 'hELLO'

**Answer:** C

**C is correct.** Strings are immutable in Python. You cannot assign to an index of a string. The statement `s[0] = 'h'` raises a `TypeError: 'str' object does not support item assignment`. To change the first character, create a new string: `s = 'h' + s[1:]`.

### Q9. [Medium] What is the output of ' '.join(['a', 'b', 'c'])?

A. "abc"
B. "a b c"
C. ['a', 'b', 'c']
D. "a, b, c"

**Answer:** B

**B is correct.** `join()` is called on the separator string (a single space here) and concatenates the list elements with that separator between them. So 'a', 'b', 'c' become "a b c". Option A would result from `''.join()`. Option D would result from `', '.join()`.

### Q10. [Medium] Which of these is the correct way to format a float to 2 decimal places using an f-string?

A. f"{x:2f}"
B. f"{x:.2f}"
C. f"{x:.2}"
D. f"{x:2.f}"

**Answer:** B

**B is correct.** The format specifier `:.2f` means 2 digits after the decimal point, formatted as a float. Option A (`:2f`) sets minimum width to 2, not decimal places. Option C (`:.2`) would work for significant digits but not specifically for decimal places of a float. Option D is invalid syntax.

### Q11. [Medium] What does 'Hello World'.split() return?

A. ['Hello World']
B. ['Hello', 'World']
C. ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
D. ('Hello', 'World')

**Answer:** B

**B is correct.** `split()` with no arguments splits on whitespace and returns a list of words. It does NOT split into individual characters (C) or return a tuple (D). Option A would result from `split('x')` where 'x' is not in the string.

### Q12. [Hard] What is the output of 'aaa'.count('aa')?

A. 1
B. 2
C. 3
D. 0

**Answer:** A

**A is correct.** `count()` counts **non-overlapping** occurrences. In 'aaa', after finding 'aa' starting at index 0, it moves past those 2 characters to index 2. From index 2, only one 'a' remains, which is not enough for 'aa'. So the count is 1. If it counted overlapping occurrences, it would be 2.

### Q13. [Hard] What is the output of 'abc' > 'abd'?

A. True
B. False
C. TypeError
D. None

**Answer:** B

**B is correct.** String comparison is done character by character using Unicode values. 'a'=='a', 'b'=='b', then 'c' vs 'd': ord('c')=99, ord('d')=100. Since 99 < 100, 'abc' < 'abd', so 'abc' > 'abd' is False.

### Q14. [Hard] What does 'Hello'[1:1] return?

A. "e"
B. "H"
C. "" (empty string)
D. IndexError

**Answer:** C

**C is correct.** When start equals stop in a slice, the result is always an empty string because there are no indices between 1 and 1. No error is raised. The slice `[n:n]` always returns an empty string for any valid or invalid n.

### Q15. [Hard] What is the output of '\n'.join(['a', 'b', 'c'])?

A. "a\nb\nc"
B. "a b c"
C. A string with a, b, c on separate lines
D. "a,b,c"

**Answer:** C

**C is correct.** The separator is `'\n'` (newline character). `join()` places a newline between each element, resulting in a string where a, b, and c are on separate lines. When printed, it would display as three lines. Option A shows the escape sequence literally, not the actual output.

### Q16. [Hard] What does 'Python'.swapcase() return?

A. "python"
B. "PYTHON"
C. "pYTHON"
D. "Python"

**Answer:** C

**C is correct.** `swapcase()` converts uppercase letters to lowercase and lowercase letters to uppercase. 'P' becomes 'p', 'y' becomes 'Y', 't' becomes 'T', 'h' becomes 'H', 'o' becomes 'O', 'n' becomes 'N'. Result: "pYTHON".

### Q17. [Hard] What is the output of bool('') and bool(' ')?

A. False and False
B. True and True
C. False and True
D. True and False

**Answer:** C

**C is correct.** An empty string `''` is falsy in Python, so `bool('')` returns False. A string containing a space `' '` is non-empty (length 1), so `bool(' ')` returns True. Any non-empty string is truthy, even if it contains only whitespace.

### Q18. [Easy] What does the 'in' operator do with strings?

A. Checks if a string is a valid Python identifier
B. Checks if a substring exists within a string
C. Returns the index of a substring
D. Inserts a substring into a string

**Answer:** B

**B is correct.** The `in` operator checks for substring membership. `'lo' in 'Hello'` returns True. It does not return an index (C) - that is what `find()` does. It does not insert anything (D) - strings are immutable.

## Coding Challenges

### Challenge 1. Count Vowels and Consonants

**Difficulty:** Easy

Aarav has the string "Modern Age Coders". Write a program that counts and prints the number of vowels and consonants (ignore spaces and special characters).

**Constraints:**

- Use a for loop. Consider both uppercase and lowercase letters.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Vowels: 6
Consonants: 9
```

**Solution:**

```python
text = "Modern Age Coders"
vowels = 0
consonants = 0
for ch in text:
    if ch.lower() in "aeiou":
        vowels += 1
    elif ch.isalpha():
        consonants += 1
print("Vowels:", vowels)
print("Consonants:", consonants)
```

### Challenge 2. Reverse Each Word

**Difficulty:** Easy

Given the string "Python is fun", reverse each word individually but keep the word order the same. Print the result.

**Constraints:**

- Use split(), slicing, and join().

**Sample input:**

```
(No input required)
```

**Sample output:**

```
nohtyP si nuf
```

**Solution:**

```python
text = "Python is fun"
words = text.split()
reversed_words = []
for word in words:
    reversed_words.append(word[::-1])
result = " ".join(reversed_words)
print(result)
```

### Challenge 3. Check Palindrome

**Difficulty:** Easy

Write a program that checks whether the string "madam" is a palindrome (reads the same forwards and backwards). Print the result.

**Constraints:**

- Use string slicing to reverse.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
madam is a palindrome
```

**Solution:**

```python
text = "madam"
if text == text[::-1]:
    print(f"{text} is a palindrome")
else:
    print(f"{text} is not a palindrome")
```

### Challenge 4. Title Case Converter

**Difficulty:** Medium

Priya has the string "the quick brown fox jumps over the lazy dog". Write a program that converts it to title case WITHOUT using the built-in title() method. Capitalize the first letter of each word.

**Constraints:**

- Do not use title(). Use split(), string concatenation, and join().

**Sample input:**

```
(No input required)
```

**Sample output:**

```
The Quick Brown Fox Jumps Over The Lazy Dog
```

**Solution:**

```python
text = "the quick brown fox jumps over the lazy dog"
words = text.split()
result = []
for word in words:
    capitalized = word[0].upper() + word[1:]
    result.append(capitalized)
print(" ".join(result))
```

### Challenge 5. Character Frequency Counter

**Difficulty:** Medium

Write a program that prints the frequency of each character in the string "banana" (excluding spaces). Print each character and its count on a separate line, without repeating characters.

**Constraints:**

- Use a loop. Track which characters you have already counted.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
b: 1
a: 3
n: 2
```

**Solution:**

```python
text = "banana"
counted = ""
for ch in text:
    if ch not in counted:
        print(f"{ch}: {text.count(ch)}")
        counted += ch
```

### Challenge 6. Caesar Cipher Encoder

**Difficulty:** Medium

Rohan wants to encode the message "HELLO" by shifting each letter 3 positions forward in the alphabet (A becomes D, B becomes E, ..., X becomes A, Y becomes B, Z becomes C). Write the encoder.

**Constraints:**

- Use ord() and chr(). Handle wrapping (Z + 1 = A).

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Encoded: KHOOR
```

**Solution:**

```python
message = "HELLO"
shift = 3
result = ""
for ch in message:
    new_pos = (ord(ch) - ord('A') + shift) % 26
    result += chr(ord('A') + new_pos)
print("Encoded:", result)
```

### Challenge 7. Remove Duplicate Characters

**Difficulty:** Hard

Write a program that removes duplicate characters from the string "programming" while preserving the order of first occurrence. Print the result.

**Constraints:**

- Use a loop. Track seen characters.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
progamin
```

**Solution:**

```python
text = "programming"
result = ""
for ch in text:
    if ch not in result:
        result += ch
print(result)
```

### Challenge 8. Word Reverser Preserving Punctuation

**Difficulty:** Hard

Ananya has the string "Hello, World!". Write a program that reverses the order of words but keeps punctuation attached to its word. Expected output: "World! Hello,".

**Constraints:**

- Use split() and join(). Do not remove punctuation.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
World! Hello,
```

**Solution:**

```python
text = "Hello, World!"
words = text.split()
reversed_text = " ".join(words[::-1])
print(reversed_text)
```

### Challenge 9. String Compression

**Difficulty:** Hard

Write a program that compresses the string "aaabbccddddee" by replacing consecutive duplicate characters with the character followed by its count. Single characters should not have a count.

**Constraints:**

- Use a loop. Handle the last group carefully.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
a3b2c2d4e2
```

**Solution:**

```python
text = "aaabbccddddee"
result = ""
i = 0
while i < len(text):
    count = 1
    while i + count < len(text) and text[i + count] == text[i]:
        count += 1
    if count > 1:
        result += text[i] + str(count)
    else:
        result += text[i]
    i += count
print(result)
```

---

*Notes: https://learn.modernagecoders.com/resources/python/strings-in-python/*
