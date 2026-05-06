---
title: "Practice: Taking Input and Type Conversion"
description: "57 practice problems for Taking Input and Type Conversion in Python"
slug: taking-input-and-type-conversion-practice
canonical: https://learn.modernagecoders.com/resources/python/taking-input-and-type-conversion/practice/
category: "Python"
---
# Practice: Taking Input and Type Conversion

**Total questions:** 57

## Topic-Specific Questions

### Q1. [Easy] What data type does the input() function always return?

*Hint:* No matter what the user types, input() returns the same type.

**Answer:** The `input()` function always returns a **string** (`str`).

Even if the user types a number like 42, input() returns the string "42", not the integer 42. This is Python's design choice to avoid ambiguity about how to interpret the user's input.

### Q2. [Easy] What is the output if the user types 5 and 3?

```
a = input("Enter a: ")
b = input("Enter b: ")
print(a + b)
```

*Hint:* Remember: input() returns strings. What does + do with strings?

**Answer:** `53`

Since `input()` returns strings, `a` is `"5"` and `b` is `"3"`. The `+` operator with strings performs concatenation: `"5" + "3"` = `"53"`. To get 8, you would need to convert to int first.

### Q3. [Easy] What is the output?

```
print(type(input()))
```

Assume the user types: 42

*Hint:* input() always returns the same type.

**Answer:** ``

No matter what the user types, `input()` returns a string. Even though 42 looks like a number, it is received as `"42"` (a string). The `type()` function confirms this.

### Q4. [Easy] What is the output?

```
x = int("25")
y = float("3.14")
z = str(100)
print(x, type(x))
print(y, type(y))
print(z, type(z))
```

*Hint:* Each conversion function changes the type.

**Answer:** `25 `
`3.14 `
`100 `

`int("25")` converts the string to integer 25. `float("3.14")` converts to float 3.14. `str(100)` converts the integer to string "100". Each conversion function creates a new value of the target type.

### Q5. [Medium] What is the output?

```
print(int(7.9))
print(int(-7.9))
```

*Hint:* int() truncates toward zero, not toward negative infinity.

**Answer:** `7`
`-7`

`int()` truncates toward zero (removes the decimal part). `int(7.9)` gives 7 (drops .9). `int(-7.9)` gives -7 (not -8). This is different from floor division (`//`) which rounds toward negative infinity.

### Q6. [Medium] What happens when this code runs?

```
x = int("3.14")
```

*Hint:* Can int() handle a string with a decimal point?

**Answer:** It raises a `ValueError: invalid literal for int() with base 10: '3.14'`

The `int()` function cannot directly convert a string containing a decimal point. It expects a clean integer string like "42" or "-7". To convert "3.14" to an integer, you must chain: `int(float("3.14"))` = `int(3.14)` = `3`.

### Q7. [Medium] What is the output?

```
print(int(float("9.75")))
```

*Hint:* Evaluate from the inside out: float() first, then int().

**Answer:** `9`

Evaluating from inside out: `float("9.75")` gives `9.75`. Then `int(9.75)` truncates to `9`. This chaining pattern is necessary because `int("9.75")` would raise a ValueError.

### Q8. [Medium] What is the output?

```
print(int(True))
print(int(False))
print(float(True))
print(bool(0))
print(bool(""))
print(bool("0"))
```

*Hint:* True is 1, False is 0. For bool(), 0 and empty strings are False, but '0' is a non-empty string.

**Answer:** `1`
`0`
`1.0`
`False`
`False`
`True`

`int(True)` = 1, `int(False)` = 0. `float(True)` = 1.0. `bool(0)` = False (0 is falsy). `bool("")` = False (empty string is falsy). `bool("0")` = True because `"0"` is a non-empty string. The string contains the character 0, but it is not the integer 0.

### Q9. [Medium] What is the output if the user types `10 20 30`?

```
a, b, c = input("Enter three numbers: ").split()
print(a, b, c)
print(type(a))
```

*Hint:* split() returns strings. Does it automatically convert to numbers?

**Answer:** `10 20 30`
``

The `split()` method splits the input string by spaces into a list `["10", "20", "30"]`. These are unpacked into a, b, c. But they are still strings. `split()` does not convert types; it only splits the string. You need `map(int, ...)` for numeric conversion.

### Q10. [Hard] What is the output?

```
print(int("  42  "))
```

*Hint:* Does int() handle leading and trailing whitespace?

**Answer:** `42`

The `int()` function automatically strips leading and trailing whitespace before converting. So `int("  42  ")` works fine and gives 42. Similarly, `float(" 3.14 ")` gives 3.14. This is a helpful feature when dealing with user input that might have extra spaces.

### Q11. [Hard] What is the output?

```
x = input()  # User types nothing, just presses Enter
print(repr(x))
print(len(x))
print(type(x))
```

*Hint:* What does input() return when the user just presses Enter without typing anything?

**Answer:** `''`
`0`
``

When the user presses Enter without typing anything, `input()` returns an empty string `""`. The `repr()` function shows the string with quotes for clarity. The length is 0, and the type is still `str`. Note: `int("") ` would raise a ValueError.

### Q12. [Hard] What is the output?

```
print(str(int(float("3.99"))))
```

*Hint:* Evaluate from the innermost function outward.

**Answer:** `3`

From inside out: `float("3.99")` = 3.99. Then `int(3.99)` = 3 (truncates). Then `str(3)` = "3". The print outputs `3` (which is the string "3", but it looks the same when printed).

### Q13. [Medium] What is the difference between int(3.9) and int(-3.9)? Why?

*Hint:* int() truncates toward zero, not toward negative infinity.

**Answer:** `int(3.9)` gives `3` and `int(-3.9)` gives `-3`. The `int()` function truncates toward zero, meaning it simply removes the decimal part. For positive numbers it rounds down, for negative numbers it rounds up (toward zero).

This is different from floor division (`//`) which rounds toward negative infinity. `-3.9 // 1` gives `-4.0`, but `int(-3.9)` gives `-3`. The `int()` function always moves toward zero, while `//` always moves toward negative infinity.

### Q14. [Hard] Why does int("3.14") raise a ValueError, but int(3.14) works fine? Both involve the value 3.14.

*Hint:* Think about what int() expects when given a string vs a float.

**Answer:** `int(3.14)` works because Python knows how to truncate a float to an integer (remove the decimal part, giving 3). But `int("3.14")` fails because when `int()` receives a string, it expects the string to contain **only digits** (optionally with a leading - sign). The decimal point is not a digit, so it raises ValueError.

The `int()` function has different behavior depending on the input type. For floats, it truncates. For strings, it parses the string as a base-10 integer, which means only digits and an optional minus sign are allowed. This is a design choice: when given a string, Python does not assume you want truncation; you might want rounding or ceiling. The solution is to chain: `int(float("3.14"))`.

### Q15. [Hard] What is the output?

```
x = "5"
print(x * 3)
print(int(x) * 3)
```

*Hint:* Multiplying a string by a number repeats the string. Multiplying an integer by a number performs arithmetic.

**Answer:** `555`
`15`

`"5" * 3` repeats the string 3 times: `"555"`. But `int("5") * 3` = `5 * 3` = `15` (arithmetic). This shows exactly why type conversion matters: the same operator behaves completely differently depending on the data type.

### Q16. [Hard] What is the output?

```
print(bool("False"))
print(bool(""))
print(bool(" "))
```

*Hint:* Any non-empty string is truthy, even if it contains the word 'False'.

**Answer:** `True`
`False`
`True`

`bool("False")` is `True` because `"False"` is a non-empty string. Python does not interpret the string's content; it only checks if the string is empty or not. `bool("")` is False (empty string). `bool(" ")` is True because a space character makes it non-empty.

### Q17. [Easy] What is the output?

```
print(str(42) + str(8))
```

*Hint:* Both values are converted to strings first.

**Answer:** `428`

`str(42)` gives `"42"` and `str(8)` gives `"8"`. The `+` operator with strings concatenates: `"42" + "8"` = `"428"`.

### Q18. [Medium] What is the difference between split() and map() when taking multiple inputs?

*Hint:* split() divides the string, map() applies a function to each part.

**Answer:** `split()` divides a string into a list of substrings based on a separator (default: space). `map()` applies a function to every element of an iterable. When combined as `map(int, input().split())`, `split()` breaks the input into strings, and `map(int, ...)` converts each string to an integer.

Without `map()`, you would need to convert each value separately: `a, b = input().split()` followed by `a = int(a)` and `b = int(b)`. With `map()`, it is done in one line: `a, b = map(int, input().split())`.

## Mixed Questions

### Q1. [Easy] What is the output if the user types `Priya`?

```
name = input("Name: ")
print("Hello, " + name + "!")
```

*Hint:* String concatenation with the + operator.

**Answer:** `Hello, Priya!`

The user types "Priya", which is stored in `name`. String concatenation joins `"Hello, "` + `"Priya"` + `"!"` to produce `"Hello, Priya!"`.

### Q2. [Easy] Write a program that asks the user for their name and age, then prints: 'My name is [name] and I am [age] years old.'

*Hint:* Use input() for both values. Age does not need conversion since you are just printing it.

**Answer:** ```
name = input("Enter your name: ")
age = input("Enter your age: ")
print("My name is", name, "and I am", age, "years old.")
```

Since we are only printing the age (not doing math with it), we do not need to convert it to int. The `print()` function with commas automatically adds spaces between values.

### Q3. [Medium] What is the output if the user types 8?

```
num = input("Number: ")
result = num * 3
print(result)
print(type(result))
```

*Hint:* num is a string. What does * do with a string and an integer?

**Answer:** `888`
``

Since `num` is the string `"8"`, `"8" * 3` repeats the string 3 times, giving `"888"`. The result is still a string. To get the mathematical result 24, you would need `int(num) * 3`.

### Q4. [Medium] Write a program that asks the user for the radius of a circle and prints the area. Use pi = 3.14159. The formula is: area = pi * radius^2.

*Hint:* Use float(input()) for the radius since it could be a decimal.

**Answer:** ```
radius = float(input("Enter the radius: "))
pi = 3.14159
area = pi * radius ** 2
print("Area of the circle:", area)
```

We use `float(input())` because the radius could be a decimal (like 2.5). The formula `pi * radius ** 2` correctly uses the exponentiation operator. If the user enters 5, the area is 3.14159 * 25 = 78.53975.

### Q5. [Medium] What is the output?

```
a = "10"
b = "3"
print(a + b)
print(int(a) + int(b))
print(a * int(b))
```

*Hint:* Line 1: string + string. Line 2: int + int. Line 3: string * int.

**Answer:** `103`
`13`
`101010`

Line 1: `"10" + "3"` = `"103"` (concatenation). Line 2: `10 + 3` = `13` (arithmetic). Line 3: `"10" * 3` = `"101010"` (string repetition). Each line demonstrates a different behavior depending on the types involved.

### Q6. [Medium] What is the output?

```
x = float("10")
print(x)
print(x == 10)
print(x == 10.0)
```

*Hint:* float('10') gives 10.0. Does 10.0 equal 10?

**Answer:** `10.0`
`True`
`True`

`float("10")` gives `10.0`. Python considers `10.0 == 10` as True because they have the same numerical value, even though one is a float and the other is an int. Similarly, `10.0 == 10.0` is True.

### Q7. [Hard] Explain why eval() is dangerous to use with input(). Give a specific example of what could go wrong.

*Hint:* eval() executes any Python code the user types.

**Answer:** `eval()` evaluates a string as a Python expression and executes it. If used with `input()`, a malicious user could type any Python code instead of a number. For example, typing `__import__('os').system('rm -rf /')` would attempt to delete all files on the system. Even typing `__import__('os').listdir('.')` would expose the file system.

The `eval()` function has no restrictions on what code it can execute. It has full access to Python's capabilities, including file operations, network access, and system commands. This makes it a critical security vulnerability when combined with user input. Always use `int()` or `float()` for numeric conversion.

### Q8. [Hard] What is the output?

```
a = "5"
b = 2
print(a + str(b))
print(int(a) + b)
print(float(a) + b)
```

*Hint:* Line 1: string + string. Line 2: int + int. Line 3: float + int.

**Answer:** `52`
`7`
`7.0`

Line 1: `"5" + "2"` = `"52"` (string concatenation). Line 2: `5 + 2` = `7` (integer addition). Line 3: `5.0 + 2` = `7.0` (float + int gives float). The same values produce different results depending on their types.

### Q9. [Hard] What is the output?

```
x = int("  -42  ")
y = float(" 3.14 ")
print(x + y)
print(type(x + y))
```

*Hint:* int() and float() strip whitespace. What type do you get when adding int and float?

**Answer:** `-38.86`
``

`int("  -42  ")` strips whitespace and gives `-42`. `float(" 3.14 ")` strips whitespace and gives `3.14`. When you add an int and a float, Python promotes the int to float: `-42 + 3.14` = `-38.86`. The result type is float.

### Q10. [Hard] What is the output?

```
print(int(True) + int(True) + int(False))
print(str(True) + str(False))
print(float(False))
```

*Hint:* int(True) = 1, int(False) = 0. str(True) = 'True'.

**Answer:** `2`
`TrueFalse`
`0.0`

Line 1: `1 + 1 + 0` = `2`. Line 2: `"True" + "False"` = `"TrueFalse"` (string concatenation). Line 3: `float(False)` = `0.0`.

### Q11. [Medium] Write a program that takes a temperature in Fahrenheit from the user and converts it to Celsius. Formula: C = (F - 32) * 5/9.

*Hint:* Use float(input()) since temperature can be a decimal.

**Answer:** ```
fahrenheit = float(input("Enter temperature in Fahrenheit: "))
celsius = (fahrenheit - 32) * 5 / 9
print(fahrenheit, "F =", round(celsius, 2), "C")
```

We use `float(input())` because temperatures can be decimals. The formula `(F - 32) * 5 / 9` converts Fahrenheit to Celsius. `round(celsius, 2)` rounds to 2 decimal places for a cleaner output.

### Q12. [Hard] What is the output?

```
x = "100"
print(x > "99")
print(int(x) > 99)
```

*Hint:* String comparison is lexicographic (character by character), not numeric.

**Answer:** `False`
`True`

Line 1 compares strings lexicographically: `"100" > "99"` compares the first characters '1' and '9'. Since '1' comes before '9' in ASCII, `"100"` is NOT greater than `"99"` in string comparison, giving False. Line 2 compares integers: `100 > 99` is True. This shows why proper type conversion is essential.

## Multiple Choice Questions

### Q1. [Easy] What does input() always return in Python?

A. An integer
B. A float
C. A string
D. The type that matches the user's input

**Answer:** C

**C is correct.** The `input()` function always returns a string, regardless of what the user types. If the user types 42, it returns "42" (a string). Option D is a common misconception; Python does not automatically detect the type.

### Q2. [Easy] How do you take an integer input from the user?

A. int(input())
B. input(int())
C. integer(input())
D. input.int()

**Answer:** A

**A is correct.** `int(input())` first gets the string from `input()`, then converts it to an integer with `int()`. Option B would pass an integer (0) as the prompt, which is a TypeError. Option C is invalid (no such function). Option D is invalid syntax.

### Q3. [Easy] What is the output of: print(type("42"))?

A. 
B. 
C. 
D. 42

**Answer:** B

**B is correct.** `"42"` is a string because it is enclosed in quotes. The type is `str`. It does not matter that the characters form a number; the quotes make it a string.

### Q4. [Easy] What does int(3.7) return?

A. 4
B. 3.7
C. 3
D. 4.0

**Answer:** C

**C is correct.** `int()` truncates toward zero, meaning it removes the decimal part without rounding. `int(3.7)` gives 3, not 4. Option A would be the result of rounding, but `int()` truncates.

### Q5. [Easy] What is the result of: '5' + '3'?

A. 8
B. 53
C. '53'
D. Error

**Answer:** C

**C is correct.** When both operands are strings, the `+` operator performs concatenation: `'5' + '3'` = `'53'`. Option A (8) would be the result if both were integers.

### Q6. [Medium] Which of the following will cause a ValueError?

A. int("42")
B. int(3.14)
C. int("3.14")
D. float("42")

**Answer:** C

**C is correct.** `int("3.14")` raises a ValueError because the string contains a decimal point, which `int()` cannot handle when parsing a string. Option B `int(3.14)` works fine (truncates to 3) because it is converting a float, not a string.

### Q7. [Medium] What is the output of: print(bool('0'))?

A. True
B. False
C. 0
D. Error

**Answer:** A

**A is correct.** `bool('0')` returns True because `'0'` is a non-empty string. Python checks if the string is empty, not if its content represents zero. Only `bool('')` (empty string) returns False.

### Q8. [Medium] What does the split() method do?

A. Splits a number into digits
B. Splits a string into a list of substrings
C. Converts a string to a list of integers
D. Divides two numbers

**Answer:** B

**B is correct.** `split()` splits a string into a list of substrings based on a delimiter (default: whitespace). `"10 20 30".split()` returns `["10", "20", "30"]`. It does NOT convert to numbers (option C) or work on numbers (option A).

### Q9. [Medium] What is the output of: print(float(10))?

A. 10
B. 10.0
C. Error
D. 10.00

**Answer:** B

**B is correct.** `float(10)` converts the integer 10 to the float `10.0`. Python represents this as `10.0`, not `10.00`. The `float()` function adds the minimum necessary decimal representation.

### Q10. [Medium] Why is eval(input()) considered dangerous?

A. It is slow
B. It can only handle numbers
C. It executes any Python code the user types
D. It does not return a value

**Answer:** C

**C is correct.** `eval()` evaluates any Python expression, meaning a user could execute harmful code like file deletion or data theft. Options A and B are incorrect (eval is reasonably fast and handles any expression). Option D is wrong (eval does return a value).

### Q11. [Medium] What is int(-2.9)?

A. -3
B. -2
C. -2.0
D. Error

**Answer:** B

**B is correct.** `int()` truncates toward zero. For -2.9, truncating toward zero gives -2 (not -3). This is the opposite of floor division, where `-2.9 // 1` would give -3.0. Remember: `int()` always moves toward zero.

### Q12. [Hard] What is the output of: print(int(float('  -3.75  ')))?

A. -4
B. -3
C. Error
D. -3.75

**Answer:** B

**B is correct.** Step by step: `float('  -3.75  ')` strips whitespace and gives `-3.75`. Then `int(-3.75)` truncates toward zero, giving `-3`. Option A (-4) would be the floor, not the truncation.

### Q13. [Hard] What is the output of: print('5' > '30')?

A. True
B. False
C. Error
D. None

**Answer:** A

**A is correct.** String comparison is lexicographic (character by character). Python compares the first characters: '5' vs '3'. Since '5' comes after '3' in ASCII/Unicode, `'5' > '30'` is True. Numerically 5 < 30, but string comparison does not work numerically. This is why proper type conversion matters.

### Q14. [Hard] What does map(int, ['1', '2', '3']) produce?

A. [1, 2, 3]
B. A map object that yields 1, 2, 3
C. ['1', '2', '3']
D. Error

**Answer:** B

**B is correct.** `map()` returns a map object (an iterator), not a list. It lazily applies `int()` to each element when iterated. To get a list, you would need `list(map(int, ['1', '2', '3']))`. However, when used with unpacking like `a, b, c = map(...)`, the values are extracted correctly.

### Q15. [Hard] Which of the following will NOT raise a ValueError?

A. int('')
B. int('3.14')
C. int('  42  ')
D. float('hello')

**Answer:** C

**C is correct.** `int('  42  ')` works because `int()` automatically strips leading and trailing whitespace. Option A fails (empty string). Option B fails (decimal point in string). Option D fails ('hello' is not a number).

### Q16. [Hard] What is the output of: print(bool(''), bool(' '), bool('0'), bool(0))?

A. False False False False
B. False True True False
C. True True True False
D. False True False False

**Answer:** B

**B is correct.** `bool('')` = False (empty string). `bool(' ')` = True (string with a space is non-empty). `bool('0')` = True (non-empty string, even though it contains '0'). `bool(0)` = False (integer zero is falsy).

### Q17. [Medium] What is the output of: print(str(5) + str(3.14))?

A. 8.14
B. 53.14
C. Error
D. 5 3.14

**Answer:** B

**B is correct.** `str(5)` gives `"5"` and `str(3.14)` gives `"3.14"`. String concatenation: `"5" + "3.14"` = `"53.14"`. This is string joining, not arithmetic.

### Q18. [Easy] Which function converts a value to a floating-point number?

A. int()
B. str()
C. float()
D. decimal()

**Answer:** C

**C is correct.** `float()` converts values to floating-point numbers. `int()` converts to integers, `str()` converts to strings, and `decimal()` is not a built-in function (though there is a Decimal class in the decimal module).

### Q19. [Hard] What is the output when the user enters 'hello'?
`x = int(input())`

A. 0
B. hello
C. ValueError
D. None

**Answer:** C

**C is correct.** `int("hello")` raises a `ValueError: invalid literal for int() with base 10: 'hello'`. The string "hello" cannot be converted to an integer because it does not represent a number.

### Q20. [Hard] What is the output of: print(int(True) + float(False) + bool(1))?

A. 2.0
B. 2
C. 1.0
D. Error

**Answer:** A

**A is correct.** `int(True)` = 1, `float(False)` = 0.0, `bool(1)` = True. Now: `1 + 0.0` = `1.0` (float), `1.0 + True` = `1.0 + 1` = `2.0` (True is treated as 1 in arithmetic). The result is float because of the float(False) in the chain.

## Coding Challenges

### Challenge 1. Greeting Program

**Difficulty:** Easy

Write a program that asks the user for their name and city, then prints: 'Hello, [name] from [city]! Welcome to Python.'

**Constraints:**

- Use input() with descriptive prompts. Use string concatenation or comma-separated print.

**Sample input:**

```
Name: Ananya
City: Mumbai
```

**Sample output:**

```
Hello, Ananya from Mumbai! Welcome to Python.
```

**Solution:**

```python
name = input("Enter your name: ")
city = input("Enter your city: ")
print("Hello,", name, "from", city + "! Welcome to Python.")
```

### Challenge 2. Rectangle Area Calculator

**Difficulty:** Easy

Write a program that takes the length and width of a rectangle from the user and prints the area and perimeter.

**Constraints:**

- Use float(input()) since dimensions can be decimals.

**Sample input:**

```
Length: 10
Width: 5
```

**Sample output:**

```
Area: 50.0
Perimeter: 30.0
```

**Solution:**

```python
length = float(input("Enter length: "))
width = float(input("Enter width: "))
area = length * width
perimeter = 2 * (length + width)
print("Area:", area)
print("Perimeter:", perimeter)
```

### Challenge 3. Bill Splitter

**Difficulty:** Medium

Aarav and his friends went to a restaurant. Write a program that takes the total bill amount and the number of people, then calculates how much each person pays (rounded to 2 decimal places).

**Constraints:**

- Use float() for bill, int() for people. Round to 2 decimal places.

**Sample input:**

```
Total bill: 1573
Number of people: 7
```

**Sample output:**

```
Each person pays: 224.71
```

**Solution:**

```python
bill = float(input("Enter total bill: "))
people = int(input("Enter number of people: "))
each_pays = round(bill / people, 2)
print("Each person pays:", each_pays)
```

### Challenge 4. Percentage Calculator

**Difficulty:** Medium

Write a program that takes marks obtained and total marks from the user, calculates the percentage, and prints it rounded to 2 decimal places.

**Constraints:**

- Use float(input()) for both values. Print with % sign.

**Sample input:**

```
Marks obtained: 437
Total marks: 500
```

**Sample output:**

```
Percentage: 87.4%
```

**Solution:**

```python
obtained = float(input("Enter marks obtained: "))
total = float(input("Enter total marks: "))
percentage = (obtained / total) * 100
print("Percentage:", str(round(percentage, 2)) + "%")
```

### Challenge 5. Time Converter

**Difficulty:** Medium

Write a program that takes a number of seconds from the user and converts it to hours, minutes, and remaining seconds. For example, 3672 seconds = 1 hour, 1 minute, and 12 seconds.

**Constraints:**

- Use // and % operators. Take input as int.

**Sample input:**

```
Enter seconds: 3672
```

**Sample output:**

```
1 hours, 1 minutes, 12 seconds
```

**Solution:**

```python
total_seconds = int(input("Enter seconds: "))
hours = total_seconds // 3600
minutes = (total_seconds % 3600) // 60
seconds = total_seconds % 60
print(hours, "hours,", minutes, "minutes,", seconds, "seconds")
```

### Challenge 6. Two-Number Calculator with Menu

**Difficulty:** Hard

Write a program that takes two numbers from the user and displays the results of all arithmetic operations: addition, subtraction, multiplication, division, floor division, modulus, and exponentiation.

**Constraints:**

- Use int(input()) for both numbers. Display results for all 7 arithmetic operators.

**Sample input:**

```
Enter first number: 17
Enter second number: 5
```

**Sample output:**

```
17 + 5 = 22
17 - 5 = 12
17 * 5 = 85
17 / 5 = 3.4
17 // 5 = 3
17 % 5 = 2
17 ** 5 = 1419857
```

**Solution:**

```python
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
print(a, "+", b, "=", a + b)
print(a, "-", b, "=", a - b)
print(a, "*", b, "=", a * b)
print(a, "/", b, "=", a / b)
print(a, "//", b, "=", a // b)
print(a, "%", b, "=", a % b)
print(a, "**", b, "=", a ** b)
```

### Challenge 7. Swap Values Using Arithmetic

**Difficulty:** Hard

Take two numbers from the user and swap their values without using a third variable. Print the values before and after swapping. Use arithmetic operators only.

**Constraints:**

- Do not use a third variable or Python's tuple swap (a, b = b, a).

**Sample input:**

```
Enter a: 15
Enter b: 30
```

**Sample output:**

```
Before swap: a = 15, b = 30
After swap: a = 30, b = 15
```

**Solution:**

```python
a = int(input("Enter a: "))
b = int(input("Enter b: "))
print("Before swap: a =", a, ", b =", b)
a = a + b
b = a - b
a = a - b
print("After swap: a =", a, ", b =", b)
```

### Challenge 8. Multiple Input CGPA Calculator

**Difficulty:** Hard

Take 5 subject grades (as floats on one line, space-separated) from the user using split() and map(). Calculate and print the CGPA (average of all grades) rounded to 2 decimal places.

**Constraints:**

- Take all 5 inputs on a single line using split() and map(). Round CGPA to 2 decimal places.

**Sample input:**

```
Enter 5 grades: 8.5 9.0 7.5 8.0 9.5
```

**Sample output:**

```
Grades: 8.5 9.0 7.5 8.0 9.5
CGPA: 8.5
```

**Solution:**

```python
g1, g2, g3, g4, g5 = map(float, input("Enter 5 grades: ").split())
print("Grades:", g1, g2, g3, g4, g5)
cgpa = (g1 + g2 + g3 + g4 + g5) / 5
print("CGPA:", round(cgpa, 2))
```

---

*Notes: https://learn.modernagecoders.com/resources/python/taking-input-and-type-conversion/*
