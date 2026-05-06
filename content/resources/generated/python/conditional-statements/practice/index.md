---
title: "Practice: Conditional Statements in Python (if, elif, else)"
description: "60 practice problems for Conditional Statements in Python (if, elif, else) in Python"
slug: conditional-statements-practice
canonical: https://learn.modernagecoders.com/resources/python/conditional-statements/practice
category: "Python"
---
# Practice: Conditional Statements in Python (if, elif, else)

**Total questions:** 60

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
x = 10
if x > 5:
    print("Big")
print("Done")
```

*Hint:* Check if 10 > 5. The last line is outside the if block.

**Answer:** `Big`
`Done`

`10 > 5` is True, so "Big" prints. "Done" is outside the `if` block (not indented), so it always prints regardless of the condition.

### Q2. [Easy] What is the output?

```
x = 3
if x > 5:
    print("Big")
print("Done")
```

*Hint:* Is 3 > 5?

**Answer:** `Done`

`3 > 5` is False, so the indented line is skipped. Only "Done" prints because it is outside the `if` block.

### Q3. [Easy] What is the output?

```
num = 7
if num % 2 == 0:
    print("Even")
else:
    print("Odd")
```

*Hint:* What is 7 % 2?

**Answer:** `Odd`

`7 % 2` = 1 (not 0), so the condition is False. The else block runs, printing "Odd".

### Q4. [Easy] What is the output?

```
marks = 85
if marks >= 90:
    print("A")
elif marks >= 80:
    print("B")
elif marks >= 70:
    print("C")
else:
    print("D")
```

*Hint:* Check conditions from top to bottom. Which is the first True condition?

**Answer:** `B`

`85 >= 90` is False. `85 >= 80` is True. So "B" prints and all remaining elif/else are skipped. Even though 85 >= 70 is also True, it is never checked.

### Q5. [Easy] What is the output?

```
a = 5
b = 5
if a == b:
    print("Equal")
else:
    print("Not equal")
```

*Hint:* Does 5 equal 5?

**Answer:** `Equal`

`5 == 5` is True, so the if block executes and "Equal" is printed.

### Q6. [Medium] What is the output?

```
x = 15
if x > 10:
    print("A")
if x > 5:
    print("B")
if x > 0:
    print("C")
```

*Hint:* These are three separate if statements, NOT if-elif-else.

**Answer:** `A`
`B`
`C`

These are three **separate** `if` statements, not an if-elif chain. Each one is checked independently. 15 > 10 is True (prints A). 15 > 5 is True (prints B). 15 > 0 is True (prints C). All three print because each `if` is independent.

### Q7. [Medium] What is the output? Compare with the previous question.

```
x = 15
if x > 10:
    print("A")
elif x > 5:
    print("B")
elif x > 0:
    print("C")
```

*Hint:* This time it IS an if-elif chain. Only the first True condition's block runs.

**Answer:** `A`

This is an if-elif chain. `15 > 10` is True, so "A" prints and all remaining elif blocks are **skipped**. Even though 15 > 5 and 15 > 0 are also True, they are never checked. Compare this with the previous question where each `if` was separate.

### Q8. [Medium] What is the output?

```
x = 10
y = 20
if x > 5 and y > 15:
    print("Both")
elif x > 5 or y > 15:
    print("At least one")
else:
    print("Neither")
```

*Hint:* Check if BOTH conditions are True for the 'and'.

**Answer:** `Both`

`10 > 5` is True and `20 > 15` is True. `True and True` = True. So "Both" prints and the elif is skipped.

### Q9. [Medium] What is the output?

```
if 0:
    print("A")
if "":
    print("B")
if None:
    print("C")
if "hello":
    print("D")
if 1:
    print("E")
```

*Hint:* 0, empty string, and None are falsy. Non-empty string and non-zero integer are truthy.

**Answer:** `D`
`E`

`0` is falsy (skip A). `""` is falsy (skip B). `None` is falsy (skip C). `"hello"` is truthy (print D). `1` is truthy (print E). Only truthy values execute their if blocks.

### Q10. [Medium] What is the output?

```
result = "Pass" if 85 >= 40 else "Fail"
print(result)
```

*Hint:* This is a ternary operator. Check the condition.

**Answer:** `Pass`

The ternary operator evaluates the condition `85 >= 40` which is True. So the value before `if` is chosen: "Pass". If the condition were False, "Fail" would be chosen.

### Q11. [Hard] What is the output?

```
x = 5
if x > 3:
    if x > 7:
        print("A")
    else:
        print("B")
else:
    if x > 1:
        print("C")
    else:
        print("D")
```

*Hint:* First check the outer if. Then check the inner if within the matching block.

**Answer:** `B`

Outer: `5 > 3` is True, so we enter the first block. Inner: `5 > 7` is False, so the inner else runs, printing "B". The outer else block (C and D) is never reached.

### Q12. [Hard] What is the output?

```
a = 10
b = 20
c = 30

if a > b:
    print("X")
elif b > c:
    print("Y")
elif a + b > c:
    print("Z")
else:
    print("W")
```

*Hint:* Check each condition: 10 > 20? 20 > 30? 10 + 20 > 30?

**Answer:** `W`

`10 > 20` is False. `20 > 30` is False. `10 + 20 > 30` = `30 > 30` is False (not strictly greater). All conditions are False, so the else block runs, printing "W".

### Q13. [Hard] What is the output?

```
if "False":
    print("A")
if bool(""):
    print("B")
if bool(0):
    print("C")
if bool("0"):
    print("D")
```

*Hint:* The string 'False' is a non-empty string. The string '0' is also non-empty.

**Answer:** `A`
`D`

`"False"` is a non-empty string (truthy, print A). `bool("") `= False (skip B). `bool(0)` = False (skip C). `bool("0")` = True because "0" is a non-empty string (print D). The string "False" and "0" are both truthy because Python only checks if strings are empty, not their content.

### Q14. [Hard] What is the output?

```
x = 5
result = "A" if x > 10 else "B" if x > 3 else "C"
print(result)
```

*Hint:* Nested ternary: evaluate from left to right.

**Answer:** `B`

The nested ternary is evaluated as: `"A" if x > 10 else ("B" if x > 3 else "C")`. First: `5 > 10` is False, so we go to the else part. Second: `5 > 3` is True, so "B" is chosen.

### Q15. [Hard] What is the output?

```
x = 10
y = 5
z = 10

if x == z:
    if y > x:
        print("A")
    elif y == x:
        print("B")
    else:
        print("C")
elif x > y:
    print("D")
else:
    print("E")
```

*Hint:* x equals z (both 10). Then check y vs x inside.

**Answer:** `C`

Outer: `10 == 10` is True, so we enter the first block. Inner: `5 > 10` is False. `5 == 10` is False. So the inner else runs, printing "C".

### Q16. [Hard] What is the output?

```
print("Yes") if True else print("No")
print("Yes") if False else print("No")
```

*Hint:* The ternary operator can contain function calls, not just values.

**Answer:** `Yes`
`No`

Line 1: The condition is True, so `print("Yes")` executes. Line 2: The condition is False, so `print("No")` executes. While this works, using ternary with print statements is not recommended; it is better to use a regular if-else.

### Q17. [Medium] What is the difference between using separate if statements and using if-elif? Give an example where the output differs.

*Hint:* With separate if statements, every condition is checked. With if-elif, checking stops at the first True.

**Answer:** With **separate if statements**, every condition is checked independently. With **if-elif**, checking stops at the first True condition. Example: for `x = 15`, three separate `if x > 10`, `if x > 5`, `if x > 0` would print all three blocks. But `if x > 10`, `elif x > 5`, `elif x > 0` would print only the first one.

This distinction is crucial. Use if-elif when the conditions are mutually exclusive (only one should match, like grade ranges). Use separate if statements when conditions are independent and multiple might apply (like checking a number against different properties).

### Q18. [Medium] List all the falsy values in Python.

*Hint:* There are 7 main categories of falsy values.

**Answer:** The falsy values in Python are: `False`, `0` (integer zero), `0.0` (float zero), `""` (empty string), `[]` (empty list), `()` (empty tuple), `{}` (empty dictionary), and `None`.

Everything else is truthy. The key surprises for beginners: the string `"0"` is truthy (non-empty string), the string `"False"` is truthy (non-empty string), `[0]` is truthy (non-empty list), and negative numbers like `-1` are truthy (non-zero).

### Q19. [Hard] What is the output?

```
x = 0
if x:
    print("A")
if not x:
    print("B")
if x == 0:
    print("C")
if x is None:
    print("D")
```

*Hint:* 0 is falsy, but it is NOT None. Also, 0 == 0 is True.

**Answer:** `B`
`C`

`x = 0`: `if 0` is falsy (skip A). `if not 0`: `not 0` = True (print B). `if 0 == 0`: True (print C). `if 0 is None`: False, 0 is not None (skip D). Being falsy is not the same as being None.

### Q20. [Hard] What is the output?

```
a = True
b = False
c = True

if a and b or c:
    print("X")
if (a and b) or c:
    print("Y")
if a and (b or c):
    print("Z")
```

*Hint:* Remember: 'and' has higher precedence than 'or'.

**Answer:** `X`
`Y`
`Z`

Line 1: `and` before `or`: `(True and False) or True` = `False or True` = True (print X). Line 2: Same with explicit parentheses: `(True and False) or True` = True (print Y). Line 3: `True and (False or True)` = `True and True` = True (print Z). All three print because of how the conditions evaluate.

## Mixed Questions

### Q1. [Easy] Write a program that takes a number from the user and prints whether it is positive, negative, or zero.

*Hint:* Use if-elif-else with comparisons to 0.

**Answer:** ```
num = int(input("Enter a number: "))
if num > 0:
    print("Positive")
elif num < 0:
    print("Negative")
else:
    print("Zero")
```

There are three possible cases: the number is greater than 0 (positive), less than 0 (negative), or equal to 0 (zero). The if-elif-else chain handles all three cases. Exactly one block will execute.

### Q2. [Easy] What is the output?

```
age = 16
if age >= 18:
    print("Can vote")
print("Done")
```

*Hint:* 16 is not >= 18. The last line is outside the if block.

**Answer:** `Done`

`16 >= 18` is False, so "Can vote" is skipped. "Done" is not indented under the if, so it executes regardless.

### Q3. [Medium] What is the output?

```
x = 5
if x > 2:
    print("A")
    if x > 4:
        print("B")
    print("C")
print("D")
```

*Hint:* Trace the indentation carefully. 'C' is inside the outer if but outside the inner if.

**Answer:** `A`
`B`
`C`
`D`

`5 > 2` is True: print "A". Inner: `5 > 4` is True: print "B". "C" is at the same indentation as the inner if, so it is inside the outer if but outside the inner if; it prints. "D" is outside everything; it prints.

### Q4. [Medium] Ananya wants to build a simple eligibility checker. Write a program that takes age and nationality as input. Print 'Eligible' if age >= 18 AND nationality is 'Indian'. Otherwise, print 'Not Eligible'.

*Hint:* Use 'and' to combine two conditions.

**Answer:** ```
age = int(input("Enter age: "))
nationality = input("Enter nationality: ")
if age >= 18 and nationality == "Indian":
    print("Eligible")
else:
    print("Not Eligible")
```

The `and` operator requires both conditions to be True. If either the age is below 18 or the nationality is not Indian, the overall condition is False and "Not Eligible" prints.

### Q5. [Medium] What is the output?

```
num = 15
if num % 3 == 0 and num % 5 == 0:
    print("FizzBuzz")
elif num % 3 == 0:
    print("Fizz")
elif num % 5 == 0:
    print("Buzz")
else:
    print(num)
```

*Hint:* Check: is 15 divisible by both 3 and 5?

**Answer:** `FizzBuzz`

`15 % 3 == 0` is True and `15 % 5 == 0` is True. Both conditions True with `and` gives True. So "FizzBuzz" prints. The elif and else blocks are skipped.

### Q6. [Medium] What is the output?

```
x = []
if x:
    print("List has items")
else:
    print("List is empty")

y = [0, 0, 0]
if y:
    print("List has items")
else:
    print("List is empty")
```

*Hint:* An empty list is falsy. A list with items (even zeros) is truthy.

**Answer:** `List is empty`
`List has items`

Empty list `[]` is falsy, so the else runs for x. The list `[0, 0, 0]` is truthy because it is non-empty (it contains three elements, even though they are all zeros). This is a common source of confusion.

### Q7. [Hard] What is the output?

```
a = 5
b = 10
c = 15

if a + b == c:
    print("Sum")
if a * b == c * a:
    print("Product")
if c - b == a:
    print("Difference")
if c / a == b / a:
    print("Quotient")
```

*Hint:* These are four separate if statements. Check each one independently.

**Answer:** `Sum`
`Difference`

`5 + 10 == 15`: True (print Sum). `5 * 10 == 15 * 5`: `50 == 75`: False (skip). `15 - 10 == 5`: True (print Difference). `15 / 5 == 10 / 5`: `3.0 == 2.0`: False (skip).

### Q8. [Hard] What is the output?

```
x = 10
if x > 5:
    x = x - 3
    if x > 5:
        x = x - 3
        if x > 5:
            print("Still big")
        else:
            print("Getting small")
    else:
        print("Small")
print("x =", x)
```

*Hint:* Trace x: starts at 10, becomes 7 after first subtraction, then becomes 4.

**Answer:** `Getting small`
`x = 4`

x starts at 10. `10 > 5` is True: x = 10 - 3 = 7. `7 > 5` is True: x = 7 - 3 = 4. `4 > 5` is False: else block prints "Getting small". Final x = 4.

### Q9. [Hard] What is the output?

```
name = ""
if name:
    greeting = "Hello, " + name
else:
    greeting = "Hello, stranger"

short = "Hello, " + name if name else "Hello, stranger"

print(greeting)
print(short)
```

*Hint:* Empty string is falsy. Both approaches should give the same result.

**Answer:** `Hello, stranger`
`Hello, stranger`

`name = ""` is falsy, so the else block sets greeting to "Hello, stranger". The ternary: since `name` is falsy, the else part is chosen: "Hello, stranger". Both approaches give the same result.

### Q10. [Medium] Write a program that takes three numbers from the user and prints the largest one.

*Hint:* You can compare them with if-elif-else, or use nested conditions.

**Answer:** ```
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
c = int(input("Enter third number: "))

if a >= b and a >= c:
    print("Largest:", a)
elif b >= a and b >= c:
    print("Largest:", b)
else:
    print("Largest:", c)
```

We compare each number with the other two using `and`. If `a` is greater than or equal to both b and c, then a is the largest. Similarly for b. If neither a nor b is the largest, then c must be.

### Q11. [Hard] What is the output?

```
x = 1
y = 2
z = 3

if x < y < z:
    print("A")
if x < y > z:
    print("B")
if x < y and y < z:
    print("C")
if x == 1 == True:
    print("D")
```

*Hint:* Chained comparisons. Also, 1 == True in Python.

**Answer:** `A`
`C`
`D`

`1 < 2 < 3`: True (print A). `1 < 2 > 3`: `1 < 2 and 2 > 3` = `True and False` = False (skip B). `1 < 2 and 2 < 3`: True (print C). `1 == 1 == True`: `1 == 1 and 1 == True`: True (because `True == 1` in Python), print D.

### Q12. [Hard] What is the output?

```
x = None
if x is None:
    print("A")
if x == None:
    print("B")
if not x:
    print("C")
if x == False:
    print("D")
```

*Hint:* None is falsy. None is None. But is None == False?

**Answer:** `A`
`B`
`C`

`x is None`: True (print A). `x == None`: True (print B). `not None`: True because None is falsy (print C). `None == False`: False! None is not equal to False; they are different objects. None is falsy but it does not equal False.

## Multiple Choice Questions

### Q1. [Easy] What keyword starts a conditional statement in Python?

A. when
B. check
C. if
D. condition

**Answer:** C

**C is correct.** The `if` keyword is used to start a conditional statement in Python. The other options are not Python keywords for conditional statements.

### Q2. [Easy] What must appear at the end of an if statement line?

A. A semicolon (;)
B. A colon (:)
C. A period (.)
D. Curly braces ({})

**Answer:** B

**B is correct.** Every `if`, `elif`, and `else` line must end with a colon (`:`). Semicolons are used to separate statements on one line (rare). Curly braces are used in languages like Java and C++, not Python.

### Q3. [Easy] What does elif stand for?

A. else if
B. eliminate if
C. element if
D. elif is not an abbreviation

**Answer:** A

**A is correct.** `elif` is short for "else if". It allows you to check additional conditions when the previous `if` or `elif` was False.

### Q4. [Easy] How many spaces is the standard indentation in Python?

A. 1
B. 2
C. 4
D. 8

**Answer:** C

**C is correct.** The standard Python indentation is 4 spaces. While Python technically allows any consistent number of spaces, PEP 8 (Python's style guide) recommends 4 spaces.

### Q5. [Easy] Which value is considered falsy in Python?

A. 1
B. "hello"
C. [1, 2, 3]
D. 0

**Answer:** D

**D is correct.** `0` is falsy. All the other options are truthy: `1` is a non-zero number, `"hello"` is a non-empty string, and `[1, 2, 3]` is a non-empty list.

### Q6. [Medium] What is the output of: print('Adult' if 15 >= 18 else 'Minor')?

A. Adult
B. Minor
C. True
D. Error

**Answer:** B

**B is correct.** The ternary operator checks `15 >= 18` which is False. So the value after `else` is chosen: 'Minor'.

### Q7. [Medium] What happens if you forget to indent the code after an if statement?

A. Python adds indentation automatically
B. The code runs normally
C. IndentationError
D. SyntaxWarning

**Answer:** C

**C is correct.** Python requires indentation after `if`, `elif`, `else`, and other compound statements. Missing indentation causes an `IndentationError`. Python never adds indentation automatically.

### Q8. [Medium] In an if-elif-else chain, how many blocks can execute?

A. All of them
B. At most one
C. At least one
D. Exactly one

**Answer:** D

**D is correct** when an else block is present. In an if-elif-else chain, exactly one block executes: either the first if/elif whose condition is True, or the else block if no conditions are True. Without an else, at most one block executes (option B would be correct).

### Q9. [Medium] What is the output of: print(bool('False'))?

A. True
B. False
C. Error
D. None

**Answer:** A

**A is correct.** `'False'` is a non-empty string, which is truthy. `bool('False')` returns True. Python does not interpret the content of the string; it only checks whether the string is empty.

### Q10. [Medium] Which is the correct ternary operator syntax in Python?

A. condition ? value1 : value2
B. value1 if condition else value2
C. if condition then value1 else value2
D. value1 when condition otherwise value2

**Answer:** B

**B is correct.** Python's ternary syntax is `value_if_true if condition else value_if_false`. Option A is the syntax used in C, Java, and JavaScript. Options C and D are not valid Python syntax.

### Q11. [Medium] What is the output?
`x = 10
if x > 5: print('A')
else: print('B')`

A. A
B. B
C. A B
D. Error

**Answer:** A

**A is correct.** Short-hand if-else on one line is valid when each block has only one statement. `10 > 5` is True, so 'A' prints.

### Q12. [Hard] What is the output?
`print(None == False)`

A. True
B. False
C. None
D. Error

**Answer:** B

**B is correct.** `None == False` is False. Although both are falsy (they are treated as False in boolean context), they are not equal to each other. `None` is only equal to `None`. Similarly, `0 == False` is True (because bool is a subclass of int), but `None == False` is False.

### Q13. [Hard] What error occurs with this code?
`if True:
    print('A')
  print('B')`

A. SyntaxError
B. IndentationError
C. NameError
D. No error

**Answer:** B

**B is correct.** The second print has 2 spaces of indentation while the first has 4 spaces. All lines in the same block must have the same indentation level. Python raises an `IndentationError: unexpected indent`.

### Q14. [Hard] What is the output?
`x = 5
y = 10
print('Equal' if x == y else 'X bigger' if x > y else 'Y bigger')`

A. Equal
B. X bigger
C. Y bigger
D. Error

**Answer:** C

**C is correct.** Nested ternary: `5 == 10` is False, go to else. `5 > 10` is False, go to else. Result: 'Y bigger'.

### Q15. [Hard] Which of these is truthy in Python?

A. 0
B. ''
C. None
D. '0'

**Answer:** D

**D is correct.** `'0'` is a non-empty string, making it truthy. `0` (integer zero), `''` (empty string), and `None` are all falsy. This is a frequently tested concept.

### Q16. [Hard] What is 1 < 2 < 3 < 4 equivalent to in Python?

A. ((1 < 2) < 3) < 4
B. 1 < 2 and 2 < 3 and 3 < 4
C. 1 < 4
D. True < 3 < 4

**Answer:** B

**B is correct.** Python's chained comparisons are equivalent to each adjacent pair connected by `and`. `1 < 2 < 3 < 4` means `1 < 2 and 2 < 3 and 3 < 4`. Option A is how most other languages would evaluate it (left to right, which would give a different result). Option D is what option A would produce.

### Q17. [Medium] Which keyword catches all remaining cases in a conditional chain?

A. elif
B. else
C. default
D. otherwise

**Answer:** B

**B is correct.** The `else` keyword catches all cases not handled by the preceding `if` and `elif` blocks. `default` is used in switch statements in other languages (Python 3.10+ uses `case _:` for match-case). `otherwise` is not a Python keyword.

### Q18. [Hard] What is the output?
`if not not True:
    print('A')
else:
    print('B')`

A. A
B. B
C. Error
D. None

**Answer:** A

**A is correct.** `not True` = False. `not False` = True. So `not not True` = True, and 'A' prints. Double negation returns the original value.

### Q19. [Medium] Can an if-elif chain exist without an else block?

A. No, else is mandatory
B. Yes, else is optional
C. Only with one elif
D. Only in Python 3.10+

**Answer:** B

**B is correct.** The `else` block is optional. An if-elif chain without else simply means: if no condition is True, nothing happens (no block executes).

### Q20. [Hard] What is the output?
`x = 10
if x > 5:
    pass
else:
    print('Small')
print('Done')`

A. Small Done
B. Done
C. Small
D. Error

**Answer:** B

**B is correct.** `10 > 5` is True, so the if block runs. But the if block contains only `pass`, which does nothing. The else block is skipped. "Done" is outside the if-else, so it prints. Output: just "Done".

## Coding Challenges

### Challenge 1. Voting Eligibility

**Difficulty:** Easy

Write a program that takes a user's age and prints whether they are eligible to vote (age >= 18). Print 'You can vote!' or 'You cannot vote yet. Wait [X] more years.' where X is the years remaining.

**Constraints:**

- Use if-else. Calculate remaining years for the else case.

**Sample input:**

```
Enter your age: 15
```

**Sample output:**

```
You cannot vote yet. Wait 3 more years.
```

**Solution:**

```python
age = int(input("Enter your age: "))
if age >= 18:
    print("You can vote!")
else:
    years_left = 18 - age
    print("You cannot vote yet. Wait", years_left, "more years.")
```

### Challenge 2. Ticket Price Calculator

**Difficulty:** Easy

A movie theater charges different prices: Children (under 12): Rs 100, Teens (12-17): Rs 200, Adults (18-59): Rs 300, Seniors (60+): Rs 150. Take age as input and print the ticket price.

**Constraints:**

- Use if-elif-else chain.

**Sample input:**

```
Enter age: 14
```

**Sample output:**

```
Ticket price: Rs 200
```

**Solution:**

```python
age = int(input("Enter age: "))
if age < 12:
    price = 100
elif age <= 17:
    price = 200
elif age <= 59:
    price = 300
else:
    price = 150
print("Ticket price: Rs", price)
```

### Challenge 3. Triangle Type Identifier

**Difficulty:** Medium

Take three sides of a triangle from the user. First check if they can form a valid triangle (sum of any two sides must be greater than the third). If valid, determine if it is equilateral (all equal), isosceles (two equal), or scalene (none equal).

**Constraints:**

- Check validity first. Then check type. Use logical operators.

**Sample input:**

```
Side 1: 5
Side 2: 5
Side 3: 8
```

**Sample output:**

```
Valid triangle
Type: Isosceles
```

**Solution:**

```python
a = int(input("Side 1: "))
b = int(input("Side 2: "))
c = int(input("Side 3: "))

if a + b > c and b + c > a and a + c > b:
    print("Valid triangle")
    if a == b == c:
        print("Type: Equilateral")
    elif a == b or b == c or a == c:
        print("Type: Isosceles")
    else:
        print("Type: Scalene")
else:
    print("Not a valid triangle")
```

### Challenge 4. Grade Calculator with Remarks

**Difficulty:** Medium

Take marks (0-100) from the user. Validate that marks are between 0 and 100. Then assign grades: A (90-100), B (80-89), C (70-79), D (60-69), E (40-59), F (below 40). Also print a remark: A/B = 'Excellent', C/D = 'Good', E = 'Pass', F = 'Fail'.

**Constraints:**

- Validate input range first. Use if-elif-else.

**Sample input:**

```
Enter marks: 73
```

**Sample output:**

```
Grade: C
Remark: Good
```

**Solution:**

```python
marks = int(input("Enter marks: "))
if marks < 0 or marks > 100:
    print("Invalid marks! Must be 0-100.")
elif marks >= 90:
    print("Grade: A")
    print("Remark: Excellent")
elif marks >= 80:
    print("Grade: B")
    print("Remark: Excellent")
elif marks >= 70:
    print("Grade: C")
    print("Remark: Good")
elif marks >= 60:
    print("Grade: D")
    print("Remark: Good")
elif marks >= 40:
    print("Grade: E")
    print("Remark: Pass")
else:
    print("Grade: F")
    print("Remark: Fail")
```

### Challenge 5. Leap Year Checker

**Difficulty:** Medium

Take a year from the user and determine if it is a leap year. Rules: A year is a leap year if (1) it is divisible by 4, AND (2) it is NOT divisible by 100, UNLESS (3) it is also divisible by 400. Test with: 2024, 1900, 2000.

**Constraints:**

- Use logical operators (and, or, not). Handle all three rules.

**Sample input:**

```
Enter year: 1900
```

**Sample output:**

```
1900 is NOT a leap year
```

**Solution:**

```python
year = int(input("Enter year: "))
if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print(year, "is a leap year")
else:
    print(year, "is NOT a leap year")
```

### Challenge 6. Simple Calculator with Operation Choice

**Difficulty:** Medium

Build a calculator that takes two numbers and an operation (+, -, *, /) from the user. Perform the chosen operation and print the result. Handle division by zero.

**Constraints:**

- Use if-elif-else for operation selection. Check for division by zero.

**Sample input:**

```
Enter first number: 20
Enter second number: 0
Enter operation (+, -, *, /): /
```

**Sample output:**

```
Error: Cannot divide by zero!
```

**Solution:**

```python
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
op = input("Enter operation (+, -, *, /): ")

if op == "+":
    print("Result:", num1 + num2)
elif op == "-":
    print("Result:", num1 - num2)
elif op == "*":
    print("Result:", num1 * num2)
elif op == "/":
    if num2 == 0:
        print("Error: Cannot divide by zero!")
    else:
        print("Result:", num1 / num2)
else:
    print("Invalid operation!")
```

### Challenge 7. BMI Calculator with Health Category

**Difficulty:** Hard

Take weight (in kg) and height (in meters) from the user. Calculate BMI using the formula: BMI = weight / (height * height). Classify: Underweight (BMI < 18.5), Normal (18.5-24.9), Overweight (25-29.9), Obese (30+). Print BMI rounded to 1 decimal place and the category.

**Constraints:**

- Use float(input()) for both values. Validate that both are positive. Round BMI to 1 decimal.

**Sample input:**

```
Enter weight (kg): 70
Enter height (m): 1.75
```

**Sample output:**

```
BMI: 22.9
Category: Normal weight
```

**Solution:**

```python
weight = float(input("Enter weight (kg): "))
height = float(input("Enter height (m): "))

if weight <= 0 or height <= 0:
    print("Error: Weight and height must be positive.")
else:
    bmi = weight / (height ** 2)
    bmi_rounded = round(bmi, 1)
    print("BMI:", bmi_rounded)
    
    if bmi < 18.5:
        print("Category: Underweight")
    elif bmi < 25:
        print("Category: Normal weight")
    elif bmi < 30:
        print("Category: Overweight")
    else:
        print("Category: Obese")
```

### Challenge 8. Electricity Bill Calculator

**Difficulty:** Hard

Write a program for Rohan to calculate his electricity bill. Take units consumed as input. Pricing: First 100 units: Rs 5/unit. Next 100 units (101-200): Rs 7/unit. Next 100 units (201-300): Rs 10/unit. Above 300: Rs 15/unit. Add a fixed charge of Rs 100. Print the total bill.

**Constraints:**

- Use if-elif-else. Calculate charges for each slab separately.

**Sample input:**

```
Enter units consumed: 250
```

**Sample output:**

```
Units: 250
Total bill: Rs 1600
```

**Solution:**

```python
units = int(input("Enter units consumed: "))
fixed_charge = 100

if units <= 100:
    bill = units * 5
elif units <= 200:
    bill = 100 * 5 + (units - 100) * 7
elif units <= 300:
    bill = 100 * 5 + 100 * 7 + (units - 200) * 10
else:
    bill = 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 15

total = bill + fixed_charge
print("Units:", units)
print("Total bill: Rs", total)
```

### Challenge 9. Number Classifier

**Difficulty:** Hard

Take a number from the user and print ALL properties that apply: positive/negative/zero, even/odd, divisible by 5, divisible by 3, a single digit number, a two-digit number, a three-digit number. Use separate if statements (not elif) since multiple properties can apply.

**Constraints:**

- Use separate if statements (not elif) since multiple conditions can be true simultaneously.

**Sample input:**

```
Enter a number: 15
```

**Sample output:**

```
15 is positive
15 is odd
15 is divisible by 5
15 is divisible by 3
15 is a two-digit number
```

**Solution:**

```python
num = int(input("Enter a number: "))

if num > 0:
    print(num, "is positive")
elif num < 0:
    print(num, "is negative")
else:
    print(num, "is zero")

if num != 0:
    if num % 2 == 0:
        print(num, "is even")
    else:
        print(num, "is odd")

if num % 5 == 0 and num != 0:
    print(num, "is divisible by 5")

if num % 3 == 0 and num != 0:
    print(num, "is divisible by 3")

abs_num = abs(num)
if 0 <= abs_num <= 9:
    print(num, "is a single digit number")
elif 10 <= abs_num <= 99:
    print(num, "is a two-digit number")
elif 100 <= abs_num <= 999:
    print(num, "is a three-digit number")
```

### Challenge 10. Password Strength Checker

**Difficulty:** Hard

Take a password as input and check its strength. Rules: Weak (length < 6), Medium (length 6-9 and contains at least one digit), Strong (length 10+ and contains at least one digit and at least one uppercase letter). Print the strength level. Hint: Use any() with a generator expression or loop through characters.

**Constraints:**

- Use len() for length. Use the 'in' operator or string methods to check for digits and uppercase. Use nested conditions.

**Sample input:**

```
Enter password: Hello123World
```

**Sample output:**

```
Password strength: Strong
```

**Solution:**

```python
password = input("Enter password: ")
length = len(password)

has_digit = False
has_upper = False
for char in password:
    if char.isdigit():
        has_digit = True
    if char.isupper():
        has_upper = True

if length >= 10 and has_digit and has_upper:
    print("Password strength: Strong")
elif length >= 6 and has_digit:
    print("Password strength: Medium")
else:
    print("Password strength: Weak")
```

---

*Notes: https://learn.modernagecoders.com/resources/python/conditional-statements/*
