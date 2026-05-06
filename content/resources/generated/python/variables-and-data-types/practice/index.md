---
title: "Practice: Variables and Data Types in Python"
description: "65 practice problems for Variables and Data Types in Python in Python"
slug: variables-and-data-types-practice
canonical: https://learn.modernagecoders.com/resources/python/variables-and-data-types/practice/
category: "Python"
---
# Practice: Variables and Data Types in Python

**Total questions:** 65

## Topic-Specific Questions

### Q1. [Easy] Create a variable called city and assign the value "Mumbai" to it. Then print the value of the variable.

*Hint:* Use the assignment operator (=) and print().

**Answer:** ```
city = "Mumbai"
print(city)
```

Output: Mumbai

The variable city is created and assigned the string value "Mumbai". When you print(city), Python looks up the value stored in the variable city and displays it. Notice you do NOT put quotes around the variable name in print — print(city) prints the VALUE, while print("city") would print the word 'city'.

### Q2. [Easy] What are the four basic data types in Python?

*Hint:* Think about whole numbers, decimal numbers, text, and yes/no values.

**Answer:** The four basic data types are: **int** (integers/whole numbers), **float** (floating-point/decimal numbers), **str** (strings/text), and **bool** (booleans: True or False).

These four types cover most basic data needs. int handles counting and whole numbers, float handles measurements and decimals, str handles text and characters, and bool handles yes/no decisions. Python has more advanced types (list, dict, tuple, set) that you will learn later.

### Q3. [Easy] What is the output of: print(type(3.14))

*Hint:* 3.14 has a decimal point.

**Answer:** Output: ``

The value 3.14 has a decimal point, making it a floating-point number. The type() function returns  for any number with a decimal point, whether it is 3.14, -0.5, or even 5.0.

### Q4. [Easy] Which of these variable names are valid in Python? (a) my_name (b) 2fast (c) _count (d) for (e) student name

*Hint:* Check each one: can it start with a digit? Does it contain spaces? Is it a keyword?

**Answer:** Valid: **(a) my_name** and **(c) _count**. Invalid: (b) 2fast (starts with digit), (d) for (Python keyword), (e) student name (contains a space).

my_name uses only letters and underscore — valid. _count starts with underscore — valid. 2fast starts with a digit — invalid. for is a reserved keyword used for loops — invalid. student name has a space — invalid (use student_name instead).

### Q5. [Easy] What is the output of:
x = 5
print(type(x))
x = "five"
print(type(x))

*Hint:* Python is dynamically typed — variables can change type.

**Answer:** Output:

```

```

First, x is assigned the integer 5, so type(x) is int. Then x is reassigned the string "five", so type(x) becomes str. This demonstrates Python's dynamic typing — the same variable can hold different types at different times.

### Q6. [Medium] What is the output of:
print(int(7.9))
print(int(7.1))
print(int(-3.8))

*Hint:* int() truncates — it removes the decimal part. It does NOT round.

**Answer:** Output:

```
7
7
-3
```

int() truncates the decimal part (cuts it off): 7.9 becomes 7, 7.1 becomes 7. For negative numbers, int() truncates toward zero: -3.8 becomes -3 (not -4). This is a critical distinction — int() does NOT round.

### Q7. [Medium] What is the output of:
print(bool(""))
print(bool(" "))
print(bool("0"))
print(bool(0))

*Hint:* For strings, bool() checks if the string is empty. For numbers, it checks if the number is zero.

**Answer:** Output:

```
False
True
True
False
```

bool("") is False because the string is empty (zero characters). bool(" ") is True because the string contains a space character (it is NOT empty). bool("0") is True because it is a non-empty string (contains the character '0'). bool(0) is False because the integer 0 is a falsy value.

### Q8. [Medium] What is the output of:
a, b, c = 10, 20, 30
print(b)

*Hint:* In multiple assignment, values are matched left to right.

**Answer:** Output: `20`

Multiple assignment matches values to variables from left to right: a gets 10, b gets 20, c gets 30. So print(b) outputs 20.

### Q9. [Medium] What is the output of:
x = 10
y = 20
x, y = y, x
print(x, y)

*Hint:* This is variable swapping. The right side is evaluated completely before assignment.

**Answer:** Output: `20 10`

The line x, y = y, x swaps the values. Python first evaluates the right side: y is 20 and x is 10. Then it assigns: x gets 20 (old y) and y gets 10 (old x). After the swap, x is 20 and y is 10.

### Q10. [Medium] What is the output of:
result = 10 / 2
print(result)
print(type(result))

*Hint:* Division with / always returns a float, even when the result is a whole number.

**Answer:** Output:

```
5.0

```

In Python, the / operator always returns a float, even if the division is exact. 10 / 2 gives 5.0 (not 5). The type is float, not int. If you want an integer result, use integer division: 10 // 2 gives 5.

### Q11. [Medium] What is the output of:
print(True + True + True)
print(True * 5)
print(False + 42)

*Hint:* In arithmetic, True is treated as 1 and False as 0.

**Answer:** Output:

```
3
5
42
```

In Python, True equals 1 and False equals 0 when used in arithmetic. True + True + True = 1 + 1 + 1 = 3. True * 5 = 1 * 5 = 5. False + 42 = 0 + 42 = 42.

### Q12. [Medium] Explain the difference between x = 5 (assignment) and x == 5 (comparison).

*Hint:* One stores a value, the other checks a condition.

**Answer:** `x = 5` is **assignment** — it stores the value 5 in the variable x. `x == 5` is **comparison** — it checks whether the current value of x is equal to 5 and returns True or False.

This distinction is crucial in programming. The single = (assignment operator) changes the value of the variable. The double == (comparison operator) asks a question without changing anything. In the code 'if x == 5:', we are asking 'is x equal to 5?'. Writing 'if x = 5:' would be a SyntaxError because assignment is not allowed inside an if condition.

### Q13. [Hard] What is the output of:
print("5" + "3")
print(5 + 3)
print("5" * 3)
print(int("5") + int("3"))

*Hint:* The + operator behaves differently for strings and numbers.

**Answer:** Output:

```
53
8
555
8
```

"5" + "3" concatenates two strings: "53". 5 + 3 adds two integers: 8. "5" * 3 repeats the string "5" three times: "555". int("5") + int("3") converts both strings to integers first, then adds: 5 + 3 = 8.

### Q14. [Hard] What is the output of:
x = 5
print(type(x))
x = 5.0
print(type(x))
x = "5"
print(type(x))
x = True
print(type(x))

*Hint:* 5 is int, 5.0 is float, "5" is str, True is bool.

**Answer:** Output:

```

```

5 (no decimal) is an int. 5.0 (with decimal point) is a float. "5" (in quotes) is a str. True (capital T) is a bool. The variable x changes type each time — this is dynamic typing in action.

### Q15. [Hard] What is the output of:
print(bool("False"))
print(bool("True"))
print(bool("0"))
print(bool(""))
print(bool(None))

*Hint:* bool() checks emptiness/zero-ness, not the content of the string.

**Answer:** Output:

```
True
True
True
False
False
```

bool("False") is True because "False" is a non-empty string. bool("True") is True for the same reason. bool("0") is True because "0" is a non-empty string. bool("") is False because it is an empty string. bool(None) is False because None is a special falsy value in Python.

### Q16. [Hard] What is the output of:
a = "10"
b = "20"
print(a + b)
print(int(a) + int(b))

*Hint:* String concatenation vs integer addition.

**Answer:** Output:

```
1020
30
```

a and b are both strings. a + b concatenates them: "10" + "20" = "1020". int(a) + int(b) converts both to integers first: int("10") + int("20") = 10 + 20 = 30. This illustrates why knowing data types matters — the same + operator does very different things depending on the types.

### Q17. [Hard] Explain what dynamic typing means in Python. How is it different from static typing in Java?

*Hint:* Think about whether you need to declare a variable's type before using it.

**Answer:** In **dynamic typing** (Python), you do not declare a variable's type — Python infers it from the assigned value. A variable can change type: `x = 5` (int) then `x = "Hello"` (str) is valid. In **static typing** (Java), you must declare the type: `int x = 5;` and then `x = "Hello";` causes a compile error because x was declared as int.

Dynamic typing makes Python quicker to write and more flexible. Static typing catches type-related errors at compile time (before the program runs). Python's approach is great for learning and rapid development. Java's approach is better for large projects where type safety prevents certain bugs.

### Q18. [Hard] What does the id() function return? If a = 100 and b = 100, will id(a) == id(b) be True or False? What about a = 1000 and b = 1000?

*Hint:* Python caches small integers from -5 to 256.

**Answer:** The `id()` function returns the **memory address** (identity) of an object. For `a = 100` and `b = 100`, `id(a) == id(b)` is **True** because Python caches small integers (-5 to 256) and reuses the same object. For `a = 1000` and `b = 1000`, the result **may be False** (in the REPL) because 1000 is outside the cached range, so Python may create two separate objects.

Python pre-creates and caches integer objects for values -5 through 256 because these numbers are used frequently. Any variable assigned a value in this range points to the same cached object. For integers outside this range, Python creates new objects each time (though in some cases, like within the same script, the compiler may optimize this). This is an implementation detail of CPython and should not affect your programs.

### Q19. [Easy] Create two variables: name with value "Diya" and age with value 12. Print them on one line as: Diya is 12 years old.

*Hint:* Use comma separation in print() or string conversion with +.

**Answer:** ```
name = "Diya"
age = 12
print(name, "is", age, "years old.")
```

Output: Diya is 12 years old.

Using commas in print() is the easiest way to combine strings and numbers. Python automatically adds spaces between the values and handles the type difference (name is a string, age is an integer).

### Q20. [Medium] What is the output of:
score = 80
score = score + 10
score = score + 5
print(score)

*Hint:* Trace through each assignment. The right side is evaluated before storing.

**Answer:** Output: `95`

Initially score is 80. score = score + 10 takes the current value (80), adds 10, and stores 90. score = score + 5 takes 90, adds 5, and stores 95. The final value is 95.

## Mixed Questions

### Q1. [Easy] Write a program that creates variables for a student's name, roll number, percentage, and whether they passed. Print all four values with labels.

*Hint:* Use four variables with appropriate types: str, int, float, bool.

**Answer:** ```
name = "Rohit Kumar"
roll_number = 23
percentage = 87.5
has_passed = True

print("Name:", name)
print("Roll Number:", roll_number)
print("Percentage:", percentage)
print("Passed:", has_passed)
```

This program demonstrates all four data types working together: name is a string, roll_number is an integer, percentage is a float, and has_passed is a boolean. Each variable is named descriptively to make the code readable.

### Q2. [Easy] Why do we use variables instead of typing values directly everywhere?

*Hint:* Think about what happens when a value needs to change, or when the same value is used in multiple places.

**Answer:** We use variables because: (1) **Reusability** — use the same value in many places without retyping. (2) **Easy updates** — change the value once and it updates everywhere. (3) **Readability** — `total_marks` is more meaningful than `500`. (4) **Calculations** — you can perform operations on variables and store results.

Imagine a program that uses a student's name 20 times. If you type "Aarav Sharma" in 20 places and then need to change it to "Aarav S.", you must find and change all 20 occurrences. With a variable, you change it once: name = "Aarav S." and all 20 uses automatically reflect the new value.

### Q3. [Medium] What is the output of the following code?
age = "14"
print(age + age)
print(int(age) + int(age))

*Hint:* age is a string (in quotes). String + string concatenates. int + int adds.

**Answer:** Output:

```
1414
28
```

age is the string "14" (not the number 14). String concatenation: "14" + "14" = "1414". Integer addition: int("14") + int("14") = 14 + 14 = 28. This clearly shows why data types matter — the same + operator does different things.

### Q4. [Medium] Meera writes this code and gets an error. What went wrong and how should she fix it?
marks = 95
print("I scored " + marks + " marks")

*Hint:* You cannot concatenate strings and integers with +.

**Answer:** The error is `TypeError: can only concatenate str (not "int") to str`. The `+` operator cannot join a string with an integer. **Fix 1:** `print("I scored " + str(marks) + " marks")` — convert marks to string. **Fix 2:** `print("I scored", marks, "marks")` — use comma separation.

Python does not automatically convert integers to strings when using +. You must explicitly convert using str(). The comma method is simpler because print() handles the conversion automatically, but it adds spaces between values.

### Q5. [Medium] What is the output of:
print(float("3"))
print(int(3.0))
print(str(42))
print(bool(3.14))

*Hint:* Follow each conversion function's rules.

**Answer:** Output:

```
3.0
3
42
True
```

float("3") converts string "3" to float 3.0. int(3.0) converts float 3.0 to integer 3 (removes decimal). str(42) converts integer 42 to string "42" (displayed without quotes by print). bool(3.14) converts to True because 3.14 is a non-zero number.

### Q6. [Medium] What is the difference between x = y = z = 0 and x, y, z = 1, 2, 3?

*Hint:* One assigns the same value to all variables, the other assigns different values.

**Answer:** `x = y = z = 0` assigns the **same value (0) to all three variables**. `x, y, z = 1, 2, 3` assigns **different values**: x gets 1, y gets 2, z gets 3.

The first form is used when you want to initialize multiple variables to the same starting value (like setting all counters to zero). The second form (called tuple unpacking) is used when each variable needs a different value.

### Q7. [Hard] Predict the output of:
a = 5
b = a
a = 10
print(a)
print(b)

*Hint:* When you assign b = a, b gets the current value of a at that moment. Changing a later does not affect b.

**Answer:** Output:

```
10
5
```

When b = a is executed, b gets the value 5 (the current value of a). After that, a and b are independent. Changing a to 10 does not affect b. b still holds 5. This is because integers are immutable in Python — b = a creates a reference to the same object, but a = 10 makes a point to a new object.

### Q8. [Hard] What happens when you run: int("hello")? What about int("3.14")?

*Hint:* int() can only convert strings that look like valid integers.

**Answer:** `int("hello")` raises `ValueError: invalid literal for int() with base 10: 'hello'`. `int("3.14")` also raises `ValueError: invalid literal for int() with base 10: '3.14'`.

int() can only convert strings that represent valid integers (like "42", "-7", "0"). It cannot convert "hello" because there are no digits. Surprisingly, it also cannot convert "3.14" directly — the decimal point makes it invalid for int(). To convert "3.14" to an integer, you must go through float first: int(float("3.14")) gives 3.

### Q9. [Hard] What is the output of:
x = 10
y = "10"
print(x == y)
print(str(x) == y)
print(x == int(y))

*Hint:* 10 (int) and "10" (str) are different types. == compares values.

**Answer:** Output:

```
False
True
True
```

x == y compares 10 (int) with "10" (str). Different types, so False. str(x) == y compares "10" (str) with "10" (str). Same type and value, so True. x == int(y) compares 10 (int) with 10 (int). Same type and value, so True.

### Q10. [Hard] Write a program that swaps three variables in a circle: a has "Apple", b has "Banana", c has "Cherry". After swapping, a should have Cherry, b should have Apple, and c should have Banana.

*Hint:* Use multiple assignment: a, b, c = c, a, b

**Answer:** ```
a = "Apple"
b = "Banana"
c = "Cherry"

a, b, c = c, a, b

print("a =", a)  # Cherry
print("b =", b)  # Apple
print("c =", c)  # Banana
```

Python evaluates the entire right side first: c is "Cherry", a is "Apple", b is "Banana". Then it assigns: a gets "Cherry", b gets "Apple", c gets "Banana". This circular swap is done in one elegant line.

### Q11. [Medium] Arjun types: print = 5. What happens next time he tries to use print("Hello")?

*Hint:* print is the name of a built-in function. What happens when you assign a value to it?

**Answer:** He gets `TypeError: 'int' object is not callable`. By writing `print = 5`, Arjun **overwrote the built-in print function** with the integer 5. Now `print` refers to the number 5, not the function. Calling `print("Hello")` is like calling `5("Hello")`, which makes no sense.

Python allows you to use any name for variables, including names of built-in functions. But doing so 'shadows' the built-in function — your variable replaces it. This is a dangerous mistake. Never name variables: print, type, int, float, str, bool, list, input, len, etc. To recover, you can use del print to delete your variable and restore the built-in.

### Q12. [Easy] What is the output of:
print(type(True))
print(type(False))

*Hint:* True and False are boolean values.

**Answer:** Output:

```

```

Both True and False are values of the bool (boolean) data type. Note the capital T in True and capital F in False — this is required. Writing true or false (lowercase) would cause a NameError.

## Multiple Choice Questions

### Q1. [Easy] What is the correct way to create a variable in Python?

A. int age = 14
B. var age = 14
C. age = 14
D. let age = 14

**Answer:** C

**C is correct.** In Python, you create a variable by simply writing the name, an = sign, and the value. No type declaration (Option A is Java syntax), no var keyword (Option B is JavaScript), and no let keyword (Option D is JavaScript/Swift).

### Q2. [Easy] What is the data type of the value 3.14?

A. int
B. float
C. str
D. bool

**Answer:** B

**B is correct.** 3.14 has a decimal point, making it a float (floating-point number). int (Option A) is for whole numbers without decimals. str (Option C) would require quotes: "3.14". bool (Option D) is only True or False.

### Q3. [Easy] Which of these is an INVALID variable name in Python?

A. _name
B. student1
C. my_age
D. 2nd_place

**Answer:** D

**D is correct.** Variable names cannot start with a digit. 2nd_place starts with '2', which is invalid. _name (starts with underscore — valid), student1 (digit at end — valid), and my_age (letters and underscore — valid) are all valid.

### Q4. [Easy] What does type(42) return?

A. 
B. 
C. 
D. 

**Answer:** C

**C is correct.** 42 is an integer (a whole number without a decimal point), so type(42) returns . It would be str if it were "42" (in quotes), float if it were 42.0 (with decimal), or bool if it were True/False.

### Q5. [Easy] What is the output of print(type("Hello"))?

A. 
B. 
C. 
D. 

**Answer:** A

**A is correct.** Text in quotes is a string, and Python's type name for strings is 'str' (abbreviated), not 'text' or 'string'. Python uses short type names: str, int, float, bool.

### Q6. [Easy] What are the only two values of the bool data type?

A. true and false
B. True and False
C. 1 and 0
D. yes and no

**Answer:** B

**B is correct.** The bool type has exactly two values: True and False (with capital T and F). Option A (true/false in lowercase) would cause a NameError. While True equals 1 and False equals 0 in arithmetic (Option C), 1 and 0 themselves are int values, not bool. Option D (yes/no) is not used in Python.

### Q7. [Medium] What is the output of int(3.9)?

A. 4 (rounded up)
B. 3 (truncated)
C. 3.0
D. Error

**Answer:** B

**B is correct.** int() truncates (removes the decimal part) — it does NOT round. So int(3.9) gives 3, not 4. This is a very common misconception. If you want rounding, use round(3.9) which gives 4.

### Q8. [Medium] What is the output of bool("")?

A. True
B. False
C. Error
D. None

**Answer:** B

**B is correct.** An empty string "" is a falsy value in Python, so bool("") returns False. Any non-empty string (even " " or "0" or "False") returns True.

### Q9. [Medium] What is the output of: print("5" + "3")?

A. 8
B. 53
C. 5 3
D. Error

**Answer:** B

**B is correct.** Both "5" and "3" are strings (in quotes). The + operator concatenates (joins) strings: "5" + "3" = "53". For numeric addition (8), you would need print(5 + 3) without quotes.

### Q10. [Medium] What type does division (/) always return in Python?

A. int
B. float
C. str
D. It depends on the numbers

**Answer:** B

**B is correct.** The / operator always returns a float in Python 3, even for exact divisions like 10 / 2 (result is 5.0, not 5). If you want an integer result, use the // operator (floor division): 10 // 2 gives 5.

### Q11. [Medium] What is the output of: a, b = 5, 10; print(a)

A. 5
B. 10
C. 5 10
D. Error

**Answer:** A

**A is correct.** In multiple assignment, a, b = 5, 10 assigns 5 to a and 10 to b. print(a) outputs 5.

### Q12. [Medium] Which of the following is TRUE about Python's dynamic typing?

A. Variables must be declared with a type before use
B. A variable's type is fixed once assigned
C. A variable can change its type during execution
D. Type errors are caught before the program runs

**Answer:** C

**C is correct.** Dynamic typing means variables can change type: x = 5 (int) then x = "hello" (str) is valid. Option A describes static typing (Java). Option B is false — types can change. Option D describes compile-time type checking (static typing).

### Q13. [Hard] What is the output of bool("0")?

A. True
B. False
C. 0
D. Error

**Answer:** A

**A is correct.** "0" is a string containing the character '0'. It is a non-empty string, so bool("0") returns True. bool() checks if the string is empty, not its content. Only bool("") (empty string) returns False. Similarly, bool("False") is also True.

### Q14. [Hard] What is the output of: print(True + True)?

A. True True
B. TrueTrue
C. 2
D. Error

**Answer:** C

**C is correct.** In arithmetic operations, True is treated as 1 and False as 0. So True + True = 1 + 1 = 2. Python does not concatenate booleans like strings — it performs numeric addition.

### Q15. [Hard] What happens when you run int("3.14")?

A. Returns 3
B. Returns 3.14
C. Raises ValueError
D. Returns 4

**Answer:** C

**C is correct.** int() cannot convert "3.14" directly because the string contains a decimal point. You get ValueError: invalid literal for int() with base 10: '3.14'. To convert "3.14" to an integer, use int(float("3.14")) which gives 3.

### Q16. [Hard] What is the output of:
x = 10
y = x
x = 20
print(y)

A. 10
B. 20
C. Error
D. None

**Answer:** A

**A is correct.** When y = x is executed, y gets the value 10 (the current value of x). After that, changing x to 20 does not affect y. y still holds 10. Variables for immutable types (int, float, str, bool) are independent after assignment.

### Q17. [Hard] Which of the following is a valid way to swap two variables a and b in Python?

A. a = b; b = a
B. a, b = b, a
C. swap(a, b)
D. a =: b

**Answer:** B

**B is correct.** a, b = b, a is Python's elegant swap syntax. Option A does NOT work: after a = b, both a and b have b's original value, so b = a just assigns that same value back. Option C is not a built-in Python function. Option D is not valid Python syntax.

### Q18. [Hard] What is the output of:
print(int(-2.9))

A. -3
B. -2
C. 2
D. Error

**Answer:** B

**B is correct.** int() truncates toward zero. For -2.9, truncating toward zero gives -2 (not -3). The decimal part .9 is removed. This is different from floor division, which would give -3.

### Q19. [Medium] Which of the following will cause a NameError?

A. x = 5
B. print(x) before x = 5
C. x = "hello"
D. x = True

**Answer:** B

**B is correct.** A NameError occurs when you try to use a variable that has not been defined yet. If print(x) comes before x = 5, Python does not know what x is and raises NameError: name 'x' is not defined. The other options all create variables before using them.

### Q20. [Easy] What is the output of: x = 5; x = x + 3; print(x)?

A. 5
B. 3
C. 8
D. Error — x cannot equal x + 3

**Answer:** C

**C is correct.** x = x + 3 means: take the current value of x (5), add 3 to it (getting 8), and store the result back in x. This is reassignment, not a mathematical equation. The final value of x is 8.

## Coding Challenges

### Challenge 1. Student Profile Card

**Difficulty:** Easy

Create variables for a student's name (str), age (int), height in feet (float), grade (str), and whether they are a class monitor (bool). Print all information in a formatted card.

**Constraints:**

- Use at least one variable of each type (str, int, float, bool). Use descriptive variable names.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
=== Student Profile ===
Name: Ananya Gupta
Age: 13
Height: 5.2 feet
Grade: 8th
Class Monitor: True
```

**Solution:**

```python
name = "Ananya Gupta"
age = 13
height = 5.2
grade = "8th"
is_monitor = True

print("=== Student Profile ===")
print("Name:", name)
print("Age:", age)
print("Height:", height, "feet")
print("Grade:", grade)
print("Class Monitor:", is_monitor)
```

### Challenge 2. Type Detective

**Difficulty:** Easy

Write a program that creates one variable of each type (int, float, str, bool) and prints the value along with its type for each variable.

**Constraints:**

- Create exactly 4 variables, one of each basic type. Print both the value and type() result for each.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Value: 42 | Type: <class 'int'>
Value: 3.14 | Type: <class 'float'>
Value: Hello | Type: <class 'str'>
Value: True | Type: <class 'bool'>
```

**Solution:**

```python
a = 42
b = 3.14
c = "Hello"
d = True

print("Value:", a, "| Type:", type(a))
print("Value:", b, "| Type:", type(b))
print("Value:", c, "| Type:", type(c))
print("Value:", d, "| Type:", type(d))
```

### Challenge 3. Temperature Converter

**Difficulty:** Medium

Create a variable celsius with a temperature value. Convert it to Fahrenheit using the formula: F = (C * 9/5) + 32. Print both the Celsius and Fahrenheit values. Use type() to show the types.

**Constraints:**

- Start with celsius as an integer. The formula should produce a float automatically.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Celsius: 37
Fahrenheit: 98.6
Celsius type: <class 'int'>
Fahrenheit type: <class 'float'>
```

**Solution:**

```python
celsius = 37
fahrenheit = (celsius * 9/5) + 32

print("Celsius:", celsius)
print("Fahrenheit:", fahrenheit)
print("Celsius type:", type(celsius))
print("Fahrenheit type:", type(fahrenheit))
```

### Challenge 4. Type Conversion Chain

**Difficulty:** Medium

Start with the string "42". Convert it to int, then to float, then back to str, then to bool. Print the value and type at each step.

**Constraints:**

- Show each step clearly with labels. Use type() at each step.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Step 1 (str): 42 | <class 'str'>
Step 2 (int): 42 | <class 'int'>
Step 3 (float): 42.0 | <class 'float'>
Step 4 (str): 42.0 | <class 'str'>
Step 5 (bool): True | <class 'bool'>
```

**Solution:**

```python
val = "42"
print("Step 1 (str):", val, "|", type(val))

val = int(val)
print("Step 2 (int):", val, "|", type(val))

val = float(val)
print("Step 3 (float):", val, "|", type(val))

val = str(val)
print("Step 4 (str):", val, "|", type(val))

val = bool(val)
print("Step 5 (bool):", val, "|", type(val))
```

### Challenge 5. Variable Swap Challenge

**Difficulty:** Medium

Create three variables a, b, c with values 1, 2, 3 respectively. Swap them so that a=3, b=1, c=2. Print the values before and after swapping.

**Constraints:**

- Use Python's multiple assignment for the swap. Do not use a temporary variable.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Before: a=1, b=2, c=3
After: a=3, b=1, c=2
```

**Solution:**

```python
a, b, c = 1, 2, 3
print("Before: a=" + str(a) + ", b=" + str(b) + ", c=" + str(c))

a, b, c = c, a, b
print("After: a=" + str(a) + ", b=" + str(b) + ", c=" + str(c))
```

### Challenge 6. Bill Calculator

**Difficulty:** Medium

Create variables for three items with their prices (use floats). Calculate the total, the GST (18%), and the final amount. Print a formatted bill.

**Constraints:**

- Use float variables for prices. Calculate GST as 18% of subtotal. Calculate total as subtotal + GST.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
=== BILL ===
Item 1 (Notebook): Rs 45.50
Item 2 (Pen):      Rs 15.00
Item 3 (Eraser):   Rs 8.75

Subtotal: Rs 69.25
GST (18%): Rs 12.465
Total: Rs 81.715
```

**Solution:**

```python
item1_name = "Notebook"
item1_price = 45.50
item2_name = "Pen"
item2_price = 15.00
item3_name = "Eraser"
item3_price = 8.75

subtotal = item1_price + item2_price + item3_price
gst = subtotal * 18 / 100
total = subtotal + gst

print("=== BILL ===")
print("Item 1 (" + item1_name + "):", "Rs", item1_price)
print("Item 2 (" + item2_name + "):", "Rs", item2_price)
print("Item 3 (" + item3_name + "):", "Rs", item3_price)
print()
print("Subtotal: Rs", subtotal)
print("GST (18%): Rs", gst)
print("Total: Rs", total)
```

### Challenge 7. Bool Truthiness Tester

**Difficulty:** Hard

Write a program that tests the bool() function with 10 different values and prints whether each is truthy or falsy. Include: 0, 1, -5, 0.0, 3.14, "", "Hello", "0", True, False.

**Constraints:**

- Test exactly these 10 values. Print the bool() result and label each as Truthy or Falsy.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
bool(0) = False (Falsy)
bool(1) = True (Truthy)
bool(-5) = True (Truthy)
bool(0.0) = False (Falsy)
bool(3.14) = True (Truthy)
bool('') = False (Falsy)
bool('Hello') = True (Truthy)
bool('0') = True (Truthy)
bool(True) = True (Truthy)
bool(False) = False (Falsy)
```

**Solution:**

```python
print("bool(0) =", bool(0), "(Falsy)")
print("bool(1) =", bool(1), "(Truthy)")
print("bool(-5) =", bool(-5), "(Truthy)")
print("bool(0.0) =", bool(0.0), "(Falsy)")
print("bool(3.14) =", bool(3.14), "(Truthy)")
print("bool('') =", bool(""), "(Falsy)")
print("bool('Hello') =", bool("Hello"), "(Truthy)")
print("bool('0') =", bool("0"), "(Truthy)")
print("bool(True) =", bool(True), "(Truthy)")
print("bool(False) =", bool(False), "(Falsy)")
```

### Challenge 8. Dynamic Typing Demonstration

**Difficulty:** Hard

Write a program that demonstrates dynamic typing by assigning 5 different types of values to the same variable. Print the value, type, and id after each assignment.

**Constraints:**

- Use at least 5 different types of values (int, float, str, bool, and one more). Show that the id changes with each reassignment.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Assignment 1: x = 42
  Value: 42 | Type: <class 'int'> | ID: 140234567890
Assignment 2: x = 3.14
  Value: 3.14 | Type: <class 'float'> | ID: 140234567920
(etc.)
```

**Solution:**

```python
x = 42
print("Assignment 1: x = 42")
print("  Value:", x, "| Type:", type(x), "| ID:", id(x))

x = 3.14
print("Assignment 2: x = 3.14")
print("  Value:", x, "| Type:", type(x), "| ID:", id(x))

x = "Python"
print("Assignment 3: x = 'Python'")
print("  Value:", x, "| Type:", type(x), "| ID:", id(x))

x = True
print("Assignment 4: x = True")
print("  Value:", x, "| Type:", type(x), "| ID:", id(x))

x = None
print("Assignment 5: x = None")
print("  Value:", x, "| Type:", type(x), "| ID:", id(x))
```

### Challenge 9. Data Type Cheat Sheet

**Difficulty:** Hard

Write a comprehensive program that serves as a reference for data types and type conversion. Show examples of: creating each type, converting between types, common edge cases (int(3.9), bool(""), etc.), and dangerous conversions that cause errors (inside comments).

**Constraints:**

- Cover all 4 data types, at least 4 type conversions, at least 4 edge cases, and at least 2 error-causing conversions (in comments).

**Sample input:**

```
(No input required)
```

**Sample output:**

```
=== Python Data Types Cheat Sheet ===

--- Creating Variables ---
Integer: 42 (<class 'int'>)
Float: 3.14 (<class 'float'>)
String: Hello (<class 'str'>)
Boolean: True (<class 'bool'>)

--- Type Conversion ---
int('42') = 42
float(42) = 42.0
str(42) = 42
bool(42) = True

--- Edge Cases ---
int(3.9) = 3 (truncates, not rounds!)
bool('') = False (empty string)
bool('0') = True (non-empty string!)
bool(0) = False (zero)
10 / 2 = 5.0 (always float!)

--- Errors (commented in code) ---
# int('hello') -> ValueError
# int('3.14') -> ValueError
=== End of Cheat Sheet ===
```

**Solution:**

```python
print("=== Python Data Types Cheat Sheet ===")
print()

print("--- Creating Variables ---")
print("Integer:", 42, type(42))
print("Float:", 3.14, type(3.14))
print("String:", "Hello", type("Hello"))
print("Boolean:", True, type(True))
print()

print("--- Type Conversion ---")
print("int('42') =", int("42"))
print("float(42) =", float(42))
print("str(42) =", str(42))
print("bool(42) =", bool(42))
print()

print("--- Edge Cases ---")
print("int(3.9) =", int(3.9), "(truncates, not rounds!)")
print("bool('') =", bool(""), "(empty string)")
print("bool('0') =", bool("0"), "(non-empty string!)")
print("bool(0) =", bool(0), "(zero)")
print("10 / 2 =", 10 / 2, "(always float!)")
print()

print("--- Errors (commented in code) ---")
# int('hello') -> ValueError: invalid literal
# int('3.14') -> ValueError: invalid literal
print("# int('hello') -> ValueError")
print("# int('3.14') -> ValueError")
print("=== End of Cheat Sheet ===")
```

---

*Notes: https://learn.modernagecoders.com/resources/python/variables-and-data-types/*
