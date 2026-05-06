---
title: "Practice: Operators in Python"
description: "58 practice problems for Operators in Python in Python"
slug: operators-in-python-practice
canonical: https://learn.modernagecoders.com/resources/python/operators-in-python/practice
category: "Python"
---
# Practice: Operators in Python

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
print(15 + 3)
```

*Hint:* The + operator adds two numbers.

**Answer:** `18`

The `+` operator performs addition. 15 + 3 equals 18. Python evaluates the expression first and then prints the result.

### Q2. [Easy] What is the output?

```
print(10 / 2)
```

*Hint:* Remember what / always returns in Python 3.

**Answer:** `5.0`

The `/` operator in Python 3 always returns a float, even when the result is a whole number. So `10 / 2` gives `5.0`, not `5`. This is different from `//` which would give `5`.

### Q3. [Easy] What is the output?

```
print(17 % 5)
```

*Hint:* The % operator gives the remainder after division.

**Answer:** `2`

The modulus operator `%` returns the remainder. 17 divided by 5 is 3 with a remainder of 2 (because 5 * 3 = 15, and 17 - 15 = 2). So `17 % 5` equals `2`.

### Q4. [Easy] What is the output?

```
print(2 ** 5)
```

*Hint:* The ** operator raises the first number to the power of the second.

**Answer:** `32`

The `**` operator performs exponentiation. `2 ** 5` means 2 raised to the power of 5, which is 2 * 2 * 2 * 2 * 2 = 32.

### Q5. [Easy] What is the output?

```
print(10 == 10)
print(10 == 5)
```

*Hint:* The == operator checks equality and returns a Boolean.

**Answer:** `True`
`False`

The `==` operator compares two values for equality. 10 equals 10, so the first line prints `True`. 10 does not equal 5, so the second line prints `False`.

### Q6. [Medium] What is the output?

```
print(17 // 3)
print(-17 // 3)
```

*Hint:* Floor division rounds toward negative infinity, not toward zero.

**Answer:** `5`
`-6`

`17 // 3` = 5 (17/3 = 5.67, floor is 5). For `-17 // 3`, -17/3 = -5.67, and flooring (rounding toward negative infinity) gives `-6`, not -5. This is a common tricky question.

### Q7. [Medium] What is the output?

```
x = 10
x += 5
x *= 2
x -= 3
print(x)
```

*Hint:* Trace through each assignment step by step.

**Answer:** `27`

Step by step: `x = 10`. After `x += 5`, x = 15. After `x *= 2`, x = 30. After `x -= 3`, x = 27. Each compound assignment operator updates x using its current value.

### Q8. [Medium] What is the output?

```
print(True and False)
print(True or False)
print(not True)
```

*Hint:* AND needs both True, OR needs at least one True, NOT reverses.

**Answer:** `False`
`True`
`False`

`True and False` is False (both must be True for AND). `True or False` is True (at least one is True for OR). `not True` is False (NOT reverses the value).

### Q9. [Medium] What is the output?

```
print("a" in "Ananya")
print("A" in "Ananya")
print("x" not in "Ananya")
```

*Hint:* Python is case-sensitive. Lowercase 'a' and uppercase 'A' are different characters.

**Answer:** `True`
`True`
`True`

`"a" in "Ananya"` is True because lowercase 'a' appears in "Ananya" (at positions 2, 4, 6). `"A" in "Ananya"` is True because uppercase 'A' appears at position 1. `"x" not in "Ananya"` is True because 'x' does not appear anywhere in the string.

### Q10. [Medium] What is the output?

```
a = [1, 2, 3]
b = [1, 2, 3]
c = a
print(a == b)
print(a is b)
print(a is c)
```

*Hint:* == checks values, 'is' checks if they are the same object in memory.

**Answer:** `True`
`False`
`True`

`a == b` is True because both lists have the same values. `a is b` is False because `a` and `b` are two separate list objects in memory (even though they contain the same values). `a is c` is True because `c = a` makes c point to the same object as a.

### Q11. [Hard] What is the output?

```
print(2 + 3 * 4 ** 2 - 6 // 2)
```

*Hint:* Follow PEMDAS: Exponentiation first, then multiplication and floor division, then addition and subtraction.

**Answer:** `47`

Step by step following operator precedence: (1) `4 ** 2` = 16 (exponentiation first). (2) `3 * 16` = 48 (multiplication). (3) `6 // 2` = 3 (floor division). (4) `2 + 48 - 3` = 47 (left to right). The full expression becomes 2 + 48 - 3 = 47.

### Q12. [Hard] What is the output?

```
print(2 ** 3 ** 2)
```

*Hint:* Exponentiation is right-associative, meaning it evaluates from right to left.

**Answer:** `512`

The `**` operator is right-associative. So `2 ** 3 ** 2` is evaluated as `2 ** (3 ** 2)` = `2 ** 9` = 512. It is NOT `(2 ** 3) ** 2` = `8 ** 2` = 64. This is one of the most common trick questions in Python.

### Q13. [Hard] What is the output?

```
print(True or False and False)
print((True or False) and False)
```

*Hint:* 'and' has higher precedence than 'or'. Parentheses change the order.

**Answer:** `True`
`False`

In the first line, `and` has higher precedence than `or`, so it evaluates as `True or (False and False)` = `True or False` = `True`. In the second line, parentheses force `or` to be evaluated first: `(True or False) and False` = `True and False` = `False`.

### Q14. [Medium] Explain the difference between / and // in Python. What happens when you use // with negative numbers?

*Hint:* One always returns a float, the other returns an integer. Think about which direction rounding goes.

**Answer:** `/` is float division and always returns a float (even `10 / 2` gives `5.0`). `//` is floor division and rounds down to the nearest integer. With negative numbers, `//` rounds toward **negative infinity**: `-7 // 2` gives `-4` (not -3), because -3.5 rounded toward negative infinity is -4.

This distinction is critical. Many students expect `-7 // 2` to give -3 (truncating toward zero), but Python's floor division always rounds down. If you need truncation toward zero for negative numbers, use `int(-7 / 2)` which gives -3.

### Q15. [Medium] What is the difference between == and is in Python? When should you use each one?

*Hint:* One checks value equality, the other checks object identity.

**Answer:** `==` checks if two values are **equal**. `is` checks if two variables point to the **same object in memory**. Use `==` for comparing values (numbers, strings, lists). Use `is` only for checking `None` (e.g., `if x is None`).

Two lists `[1, 2]` and `[1, 2]` have equal values (`==` returns True) but are different objects in memory (`is` returns False). Python caches small integers (-5 to 256), so `5 is 5` may be True, but `1000 is 1000` may be False depending on context. This unpredictability is why you should never use `is` to compare values.

### Q16. [Hard] What is the output?

```
x = 5
y = 2
print(x % y)
print(-x % y)
print(x % -y)
```

*Hint:* The sign of the result follows the sign of the divisor (second operand) in Python.

**Answer:** `1`
`1`
`-1`

`5 % 2` = 1 (5 = 2*2 + 1). For `-5 % 2`, Python ensures the result has the same sign as the divisor (2, positive), so the result is 1 (because -5 = 2*(-3) + 1). For `5 % -2`, the divisor is -2 (negative), so the result is -1 (because 5 = (-2)*(-3) + (-1)). This is different from some other programming languages.

### Q17. [Hard] What is the output?

```
print(not True or True and not False)
```

*Hint:* Precedence: not > and > or. Evaluate not first, then and, then or.

**Answer:** `True`

Following precedence: (1) `not True` = False, `not False` = True. Expression becomes `False or True and True`. (2) `True and True` = True. Expression becomes `False or True`. (3) `False or True` = True. Final answer: `True`.

### Q18. [Hard] What is the output?

```
a = 12
b = 10
print(a & b)
print(a | b)
print(a ^ b)
```

*Hint:* Convert 12 and 10 to binary first. 12 = 1100, 10 = 1010.

**Answer:** `8`
`14`
`6`

12 in binary is `1100`, 10 is `1010`. AND (`&`): 1100 & 1010 = 1000 = 8. OR (`|`): 1100 | 1010 = 1110 = 14. XOR (`^`): 1100 ^ 1010 = 0110 = 6. XOR gives 1 where bits differ.

### Q19. [Easy] What are the three logical operators in Python?

*Hint:* They combine or reverse Boolean values.

**Answer:** The three logical operators are `and`, `or`, and `not`.

`and` returns True only if both operands are True. `or` returns True if at least one operand is True. `not` reverses the Boolean value (True becomes False, False becomes True). Python uses English words for logical operators, unlike some languages that use symbols like &&, ||, and !.

### Q20. [Hard] What is the output?

```
print(10 > 5 > 3 > 1)
```

*Hint:* Python supports chaining multiple comparisons.

**Answer:** `True`

Python evaluates chained comparisons as if connected by `and`. So `10 > 5 > 3 > 1` is equivalent to `10 > 5 and 5 > 3 and 3 > 1`. All three conditions are True, so the result is True.

## Mixed Questions

### Q1. [Easy] What is the output?

```
x = 7
y = 3
print(x + y)
print(x - y)
print(x * y)
print(x ** y)
```

*Hint:* Simple arithmetic with x = 7 and y = 3.

**Answer:** `10`
`4`
`21`
`343`

Addition: 7 + 3 = 10. Subtraction: 7 - 3 = 4. Multiplication: 7 * 3 = 21. Exponentiation: 7 ** 3 = 7 * 7 * 7 = 343.

### Q2. [Easy] Priya scored 85, 92, and 78 in three tests. Write a program to calculate and print her average score.

*Hint:* Add the three scores and divide by 3. Use parentheses to ensure correct order.

**Answer:** ```
average = (85 + 92 + 78) / 3
print("Average score:", average)
```

Output: Average score: 85.0

Parentheses are essential here. Without them, only 78 would be divided by 3 (due to operator precedence), giving a wrong answer. `(85 + 92 + 78) / 3` = `255 / 3` = `85.0`.

### Q3. [Medium] What is the output?

```
a = 25
b = 7
print(a / b)
print(a // b)
print(a % b)
```

*Hint:* Division gives a float, floor division gives the quotient, modulus gives the remainder.

**Answer:** `3.5714285714285716`
`3`
`4`

`25 / 7` = 3.5714... (float division). `25 // 7` = 3 (floor of 3.57 is 3). `25 % 7` = 4 (25 = 7*3 + 4, the remainder is 4).

### Q4. [Medium] Aarav has a number stored in a variable. Write code to check if the number is even or odd using the modulus operator. Print the result as a Boolean.

*Hint:* A number is even if the remainder when divided by 2 is 0.

**Answer:** ```
num = 42
is_even = num % 2 == 0
print("Is", num, "even?", is_even)
```

Output: Is 42 even? True

The expression `num % 2 == 0` first computes the remainder of num divided by 2, then checks if that remainder equals 0. If yes, the number is even (True), otherwise odd (False). For 42: `42 % 2` = 0, and `0 == 0` is True.

### Q5. [Medium] What is the output?

```
x = 10
print(x > 5 and x < 20)
print(x > 15 or x < 5)
print(not x == 10)
```

*Hint:* Evaluate each comparison first, then apply the logical operator.

**Answer:** `True`
`False`
`False`

Line 1: `10 > 5` is True, `10 < 20` is True, `True and True` = True. Line 2: `10 > 15` is False, `10 < 5` is False, `False or False` = False. Line 3: `10 == 10` is True, `not True` = False.

### Q6. [Medium] What is the output?

```
price = 100
discount = 15
price -= discount
price *= 2
print(price)
```

*Hint:* Trace through each compound assignment operator step by step.

**Answer:** `170`

Starting with `price = 100`. After `price -= 15`, price = 85 (100 - 15). After `price *= 2`, price = 170 (85 * 2). Compound assignment operators update the variable in place.

### Q7. [Medium] What is short-circuit evaluation in Python? Give an example with the 'and' operator.

*Hint:* Think about what happens when Python already knows the final answer before evaluating all parts.

**Answer:** Short-circuit evaluation means Python stops evaluating a logical expression as soon as the final result is determined. With `and`, if the left side is False, Python does not evaluate the right side (because False and anything is False). Example: `False and (10 / 0 == 1)` returns False without causing a ZeroDivisionError, because Python never evaluates the right side.

This optimization matters in real code. You can write `if x != 0 and 10 / x > 2` safely because if x is 0, the left side is False and Python never attempts the division. Without short-circuit evaluation, this would crash.

### Q8. [Hard] What is the output?

```
print(5 + 2 * 3)
print((5 + 2) * 3)
print(5 * 2 ** 2)
print((5 * 2) ** 2)
```

*Hint:* Remember: ** > * > +. Parentheses override all precedence rules.

**Answer:** `11`
`21`
`20`
`100`

Line 1: `2 * 3` = 6, then `5 + 6` = 11. Line 2: `(5 + 2)` = 7, then `7 * 3` = 21. Line 3: `2 ** 2` = 4, then `5 * 4` = 20. Line 4: `(5 * 2)` = 10, then `10 ** 2` = 100. Parentheses change the result significantly.

### Q9. [Hard] What is the output?

```
x = 100
x //= 7
x %= 5
x **= 2
print(x)
```

*Hint:* Trace: 100 // 7 = ?, then result % 5 = ?, then result ** 2 = ?

**Answer:** `16`

Step by step: `x = 100`. After `x //= 7`: 100 // 7 = 14, so x = 14. After `x %= 5`: 14 % 5 = 4, so x = 4. After `x **= 2`: 4 ** 2 = 16. Final answer: 16.

### Q10. [Hard] What is the output?

```
a = 5
b = 3
print(a > b > 1 > 0)
print(a > b > 1 > 10)
```

*Hint:* Chained comparisons: each pair is checked with 'and' between them.

**Answer:** `True`
`False`

Line 1: `5 > 3` is True, `3 > 1` is True, `1 > 0` is True. All True with AND = True. Line 2: `5 > 3` is True, `3 > 1` is True, `1 > 10` is False. One False with AND = False.

### Q11. [Hard] Explain why Python's floor division (//) gives -4 for -7 // 2 instead of -3. What mathematical principle is at work?

*Hint:* Think about the floor function from mathematics, which always rounds down.

**Answer:** Python's `//` operator implements the mathematical **floor function**, which rounds toward negative infinity (always downward on the number line). For `-7 / 2 = -3.5`, the floor is `-4` because -4 is the largest integer that is less than or equal to -3.5. Rounding toward zero would give -3, but that is not what floor does.

Python chose floor division (rounding toward negative infinity) because it maintains a useful mathematical property: `a == (a // b) * b + (a % b)` is always true. This ensures that the modulus result always has the same sign as the divisor. Some languages like C++ use truncation toward zero instead, which leads to different modulus behavior.

### Q12. [Medium] Rohan wants to check if a year is a leap year. A year is a leap year if it is divisible by 4 AND (not divisible by 100 OR divisible by 400). Using only operators and print, check the year 2024.

*Hint:* Use % for divisibility checks and 'and'/'or'/'not' for combining conditions.

**Answer:** ```
year = 2024
is_leap = (year % 4 == 0) and (year % 100 != 0 or year % 400 == 0)
print(year, "is a leap year:", is_leap)
```

Output: 2024 is a leap year: True

For 2024: `2024 % 4 == 0` is True, `2024 % 100 != 0` is True (2024 is not a century year). Since the first `or` operand is True, the entire `or` is True. `True and True` = True. So 2024 is a leap year.

## Multiple Choice Questions

### Q1. [Easy] What does the % operator do in Python?

A. Calculates percentage
B. Returns the remainder after division
C. Performs floor division
D. Calculates the quotient

**Answer:** B

**B is correct.** The `%` operator is the modulus operator, which returns the remainder after division. `10 % 3` gives 1 because 10 / 3 = 3 remainder 1. It does NOT calculate percentage (option A). Floor division uses `//` (option C). The quotient is obtained by `//` or `/` (option D).

### Q2. [Easy] What is the result of 10 / 5 in Python 3?

A. 2
B. 2.0
C. 2.5
D. Error

**Answer:** B

**B is correct.** In Python 3, the `/` operator always returns a float. So `10 / 5` gives `2.0`, not `2`. If you want the integer result `2`, use floor division: `10 // 5`.

### Q3. [Easy] Which operator is used for exponentiation (raising to a power) in Python?

A. ^
B. **
C. ^^
D. pow

**Answer:** B

**B is correct.** Python uses `**` for exponentiation. `2 ** 3` = 8. The `^` operator (option A) is the bitwise XOR operator in Python, NOT exponentiation. `^^` (option C) does not exist in Python. `pow` (option D) is a function, not an operator.

### Q4. [Easy] What does the == operator do?

A. Assigns a value to a variable
B. Checks if two values are equal
C. Checks if two objects are identical
D. Copies one variable to another

**Answer:** B

**B is correct.** `==` is the equality comparison operator. It checks if two values are equal and returns True or False. Option A describes `=` (single equals, assignment). Option C describes the `is` operator (identity check). Option D is not a specific operator.

### Q5. [Easy] What is the output of: print(True and True)?

A. True
B. False
C. 1
D. None

**Answer:** A

**A is correct.** The `and` operator returns True only if BOTH operands are True. Since both sides are True, the result is True. Option B would be correct if either side were False. Option C is wrong because `and` with Boolean values returns a Boolean.

### Q6. [Medium] What is the output of: print(2 + 3 * 4)?

A. 20
B. 14
C. 24
D. 12

**Answer:** B

**B is correct.** Due to operator precedence, multiplication is performed before addition. So `3 * 4` = 12 is calculated first, then `2 + 12` = 14. Option A (20) would be correct if addition were done first: (2 + 3) * 4.

### Q7. [Medium] What is -11 // 4 in Python?

A. -2
B. -3
C. -2.75
D. 2

**Answer:** B

**B is correct.** Floor division rounds toward negative infinity. `-11 / 4` = -2.75, and the floor of -2.75 is -3 (the next integer toward negative infinity). Option A (-2) would be truncation toward zero, which is NOT what Python does.

### Q8. [Medium] Which operator should you use to check if x is None?

A. x == None
B. x = None
C. x is None
D. x in None

**Answer:** C

**C is correct.** The Python best practice for checking None is `x is None`, using the identity operator. While `x == None` (option A) often works, it can be overridden by custom classes and is considered bad practice. Option B is assignment, not comparison. Option D would cause a TypeError because None is not iterable.

### Q9. [Medium] What does x += 5 mean?

A. x = 5
B. x = x + 5
C. x == 5
D. x = 5 + 5

**Answer:** B

**B is correct.** The `+=` is a compound assignment operator. `x += 5` is shorthand for `x = x + 5`. It adds 5 to the current value of x and stores the result back in x. Option A just assigns 5. Option C checks equality. Option D always sets x to 10.

### Q10. [Medium] What is the output of: print('hello' in 'hello world')?

A. True
B. False
C. hello
D. Error

**Answer:** A

**A is correct.** The `in` membership operator checks if a substring exists within a string. `'hello'` is indeed found within `'hello world'`, so the result is True. The `in` operator works with strings, lists, tuples, sets, and dictionaries.

### Q11. [Medium] What is the output of: print(10 > 5 > 3)?

A. True
B. False
C. Error
D. None

**Answer:** A

**A is correct.** Python supports chained comparisons. `10 > 5 > 3` is equivalent to `10 > 5 and 5 > 3`. Both conditions are True, so the result is True.

### Q12. [Hard] What is the output of: print(2 ** 3 ** 2)?

A. 64
B. 512
C. 256
D. 81

**Answer:** B

**B is correct.** The `**` operator is right-associative, meaning it evaluates from right to left. So `2 ** 3 ** 2` = `2 ** (3 ** 2)` = `2 ** 9` = 512. Option A (64) would be `(2 ** 3) ** 2` = 8 ** 2. This is a classic trick question.

### Q13. [Hard] What is the output of: print(bool(0), bool(''), bool(None), bool([]))?

A. True True True True
B. False False False False
C. True False False False
D. False True False True

**Answer:** B

**B is correct.** In Python, the values `0`, `''` (empty string), `None`, and `[]` (empty list) are all considered **falsy**. Converting any of them to a Boolean with `bool()` returns `False`. Non-zero numbers, non-empty strings, and non-empty collections are truthy.

### Q14. [Hard] What is the output of: print(5 ^ 3)?

A. 125
B. 15
C. 8
D. 6

**Answer:** D

**D is correct.** In Python, `^` is the bitwise XOR operator, NOT exponentiation. 5 in binary is `101`, 3 is `011`. XOR gives 1 where bits differ: `110` = 6. Option A (125) would be `5 ** 3` (exponentiation). Many students confuse `^` with power — that is a common trap.

### Q15. [Hard] What is the output of: print(not False or True and False)?

A. True
B. False
C. None
D. Error

**Answer:** A

**A is correct.** Precedence: `not` > `and` > `or`. Step 1: `not False` = True. Step 2: `True and False` = False. Step 3: `True or False` = True. Final result: True.

### Q16. [Hard] What is the value of: 15 % 4 + 2 ** 3 - 10 // 3?

A. 8
B. 7
C. 9
D. 6

**Answer:** A

**A is correct.** Following precedence: (1) `2 ** 3` = 8 (exponentiation first). (2) `15 % 4` = 3 and `10 // 3` = 3 (same level, left to right). (3) `3 + 8 - 3` = 8. Final result: 8.

### Q17. [Hard] Which statement about Python operators is FALSE?

A. The / operator always returns a float
B. The ** operator is right-associative
C. The ^ operator performs exponentiation
D. 'and' has higher precedence than 'or'

**Answer:** C

**C is the FALSE statement and therefore the correct answer.** In Python, `^` is the bitwise XOR operator, NOT exponentiation. Exponentiation uses `**`. All other statements are true: `/` always returns a float, `**` is right-associative, and `and` has higher precedence than `or`.

### Q18. [Medium] What is the output of: print(8 << 2)?

A. 2
B. 16
C. 32
D. 4

**Answer:** C

**C is correct.** The left shift operator `<<` shifts bits to the left. Shifting left by n positions is equivalent to multiplying by 2^n. `8 << 2` = 8 * 2^2 = 8 * 4 = 32. In binary: 1000 shifted left by 2 = 100000 = 32.

### Q19. [Easy] Which of the following is a valid comparison operator in Python?

A. =!
B. =>
C. !=
D. <>

**Answer:** C

**C is correct.** `!=` is the "not equal to" comparison operator in Python. Option A (`=!`) is not valid — the order matters. Option B (`=>`) is not valid in Python (it is used in JavaScript for arrow functions). Option D (`<>`) was valid in Python 2 but is NOT valid in Python 3.

### Q20. [Hard] What is the output of: print(False or not False and True)?

A. True
B. False
C. None
D. Error

**Answer:** A

**A is correct.** Precedence: `not` > `and` > `or`. Step 1: `not False` = True. Step 2: `True and True` = True. Step 3: `False or True` = True. Final result: True.

## Coding Challenges

### Challenge 1. Simple Interest Calculator

**Difficulty:** Easy

Write a program to calculate simple interest given principal = 10000, rate = 8.5, and time = 3 years. Use the formula: SI = (P * R * T) / 100. Print the simple interest.

**Constraints:**

- Use arithmetic operators. Do not hardcode the answer.

**Sample input:**

```
(No input required - use hardcoded values)
```

**Sample output:**

```
Simple Interest: 2550.0
```

**Solution:**

```python
principal = 10000
rate = 8.5
time = 3
si = (principal * rate * time) / 100
print("Simple Interest:", si)
```

### Challenge 2. Temperature Converter

**Difficulty:** Easy

Ananya wants to convert a temperature from Celsius to Fahrenheit. Given celsius = 37, use the formula F = (C * 9/5) + 32 to calculate and print the Fahrenheit value.

**Constraints:**

- Use arithmetic operators. Be careful with operator precedence.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
37 Celsius = 98.6 Fahrenheit
```

**Solution:**

```python
celsius = 37
fahrenheit = (celsius * 9/5) + 32
print(celsius, "Celsius =", fahrenheit, "Fahrenheit")
```

### Challenge 3. Digital Clock: Extract Hours and Minutes

**Difficulty:** Medium

Given total_minutes = 450 (total minutes since midnight), use the // and % operators to calculate and print the hours and remaining minutes. For example, 450 minutes = 7 hours and 30 minutes.

**Constraints:**

- Use // for hours and % for remaining minutes. Do not hardcode.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
450 minutes = 7 hours and 30 minutes
```

**Solution:**

```python
total_minutes = 450
hours = total_minutes // 60
minutes = total_minutes % 60
print(total_minutes, "minutes =", hours, "hours and", minutes, "minutes")
```

### Challenge 4. Digit Extractor

**Difficulty:** Medium

Given a 4-digit number stored in a variable (e.g., num = 5821), extract and print each digit separately using only arithmetic operators (// and %). Print the thousands, hundreds, tens, and ones digits on separate lines.

**Constraints:**

- Use only // and % operators. Do not convert to string.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Number: 5821
Thousands digit: 5
Hundreds digit: 8
Tens digit: 2
Ones digit: 1
```

**Solution:**

```python
num = 5821
thousands = num // 1000
hundreds = (num // 100) % 10
tens = (num // 10) % 10
ones = num % 10
print("Number:", num)
print("Thousands digit:", thousands)
print("Hundreds digit:", hundreds)
print("Tens digit:", tens)
print("Ones digit:", ones)
```

### Challenge 5. Precedence Master

**Difficulty:** Hard

Without running the code, predict the output of each expression. Then write a program that prints each expression and its result. Expressions: (a) 3 + 4 * 2 / (1 - 5) ** 2, (b) 2 ** 2 ** 3, (c) 100 - 25 * 3 % 4 + 10 // 3.

**Constraints:**

- Show your step-by-step working as comments before each print statement.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Expression a: 3.5
Expression b: 256
Expression c: 100
```

**Solution:**

```python
# (a) 3 + 4 * 2 / (1 - 5) ** 2
# Step: (1-5)=-4, (-4)**2=16, 4*2=8, 8/16=0.5, 3+0.5=3.5
print("Expression a:", 3 + 4 * 2 / (1 - 5) ** 2)

# (b) 2 ** 2 ** 3  (right-associative)
# Step: 2**3=8, 2**8=256
print("Expression b:", 2 ** 2 ** 3)

# (c) 100 - 25 * 3 % 4 + 10 // 3
# Step: 25*3=75, 75%4=3, 10//3=3, 100-3+3=100
print("Expression c:", 100 - 25 * 3 % 4 + 10 // 3)
```

### Challenge 6. Eligibility Checker

**Difficulty:** Medium

Rohan is building a club eligibility checker. A person can join if they are: (aged 13-18 AND have a school ID) OR (aged above 18). Given age = 15 and has_id = True, use logical and comparison operators to determine eligibility and print the result.

**Constraints:**

- Use comparison operators with logical operators. Use parentheses for clarity.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Age: 15, Has ID: True
Eligible to join: True
```

**Solution:**

```python
age = 15
has_id = True
eligible = (age >= 13 and age <= 18 and has_id) or (age > 18)
print("Age:", age, ", Has ID:", has_id)
print("Eligible to join:", eligible)
```

### Challenge 7. Swap Two Numbers Without a Third Variable

**Difficulty:** Hard

Given a = 25 and b = 40, swap their values using only arithmetic operators (no third variable allowed). Print the values before and after swapping.

**Constraints:**

- Do not use a temporary variable. Use only +, -, or XOR (^) operators.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Before: a = 25, b = 40
After: a = 40, b = 25
```

**Solution:**

```python
a = 25
b = 40
print("Before: a =", a, ", b =", b)

# Method using arithmetic
a = a + b   # a = 65
b = a - b   # b = 25
a = a - b   # a = 40

print("After: a =", a, ", b =", b)
```

### Challenge 8. Bitwise Even/Odd Checker

**Difficulty:** Hard

Write a program that uses the bitwise AND operator to check if numbers 1 through 10 are even or odd. Print each number with its result. Hint: A number is odd if its last bit is 1 (num & 1 == 1).

**Constraints:**

- Use the bitwise AND operator (&), not the modulus operator (%). You have not learned loops yet, so use separate print statements or use a simple approach.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
1 is odd
2 is even
3 is odd
4 is even
5 is odd
6 is even
7 is odd
8 is even
9 is odd
10 is even
```

**Solution:**

```python
# Using bitwise AND: num & 1 gives 0 for even, 1 for odd
print(1, "is odd" if 1 & 1 else "is even")
print(2, "is odd" if 2 & 1 else "is even")
print(3, "is odd" if 3 & 1 else "is even")
print(4, "is odd" if 4 & 1 else "is even")
print(5, "is odd" if 5 & 1 else "is even")
print(6, "is odd" if 6 & 1 else "is even")
print(7, "is odd" if 7 & 1 else "is even")
print(8, "is odd" if 8 & 1 else "is even")
print(9, "is odd" if 9 & 1 else "is even")
print(10, "is odd" if 10 & 1 else "is even")
```

---

*Notes: https://learn.modernagecoders.com/resources/python/operators-in-python/*
