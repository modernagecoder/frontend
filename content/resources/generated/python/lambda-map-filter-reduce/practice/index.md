---
title: "Practice: Lambda, Map, Filter, and Reduce"
description: "58 practice problems for Lambda, Map, Filter, and Reduce in Python"
slug: lambda-map-filter-reduce-practice
canonical: https://learn.modernagecoders.com/resources/python/lambda-map-filter-reduce/practice
category: "Python"
---
# Practice: Lambda, Map, Filter, and Reduce

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
square = lambda x: x ** 2
print(square(4))
print(square(7))
```

*Hint:* Lambda works like a regular function. x ** 2 is returned automatically.

**Answer:** `16`
`49`

The lambda takes `x` and returns `x ** 2`. `square(4)` = 16, `square(7)` = 49.

### Q2. [Easy] What is the output?

```
add = lambda a, b: a + b
print(add(3, 5))
print(add("Hello ", "World"))
```

*Hint:* The + operator works for both numbers and strings.

**Answer:** `8`
`Hello World`

`add(3, 5)` returns 8 (numeric addition). `add("Hello ", "World")` returns "Hello World" (string concatenation). Lambda works with any type.

### Q3. [Easy] What is the output?

```
numbers = [1, 2, 3, 4, 5]
result = list(map(lambda x: x * 2, numbers))
print(result)
```

*Hint:* map() applies the function to every element.

**Answer:** `[2, 4, 6, 8, 10]`

`map()` applies `lambda x: x * 2` to each element: 1*2=2, 2*2=4, 3*2=6, 4*2=8, 5*2=10.

### Q4. [Easy] What is the output?

```
numbers = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)
```

*Hint:* filter() keeps elements where the function returns True.

**Answer:** `[2, 4, 6]`

`filter()` tests each element with `x % 2 == 0`. Only 2, 4, and 6 are even (return True), so those are kept.

### Q5. [Easy] What is the output?

```
check = lambda x: "even" if x % 2 == 0 else "odd"
print(check(4))
print(check(7))
```

*Hint:* Lambda can use conditional expressions (ternary).

**Answer:** `even`
`odd`

The lambda uses a ternary expression. 4 is even (4%2==0 is True), so returns "even". 7 is odd, so returns "odd".

### Q6. [Easy] What is the output?

```
words = ["banana", "pie", "apple", "fig"]
result = sorted(words, key=lambda w: len(w))
print(result)
```

*Hint:* key=lambda w: len(w) tells sorted() to compare by length.

**Answer:** `['pie', 'fig', 'apple', 'banana']`

Lengths: pie=3, fig=3, apple=5, banana=6. sorted() orders by length. For equal lengths (pie, fig), the original order is preserved (stable sort).

### Q7. [Medium] What is the output?

```
from functools import reduce
result = reduce(lambda a, b: a + b, [1, 2, 3, 4, 5])
print(result)
```

*Hint:* reduce applies cumulatively: ((((1+2)+3)+4)+5).

**Answer:** `15`

reduce processes: 1+2=3, 3+3=6, 6+4=10, 10+5=15. The final accumulated value is 15.

### Q8. [Medium] What is the output?

```
from functools import reduce
result = reduce(lambda a, b: a * b, [1, 2, 3, 4, 5])
print(result)
```

*Hint:* This computes the product of all elements.

**Answer:** `120`

reduce processes: 1*2=2, 2*3=6, 6*4=24, 24*5=120. This is 5! (factorial of 5).

### Q9. [Medium] What is the output?

```
names = ["aarav", "priya", "rohan"]
result = list(map(str.upper, names))
print(result)
```

*Hint:* str.upper is an existing method. No lambda needed.

**Answer:** `['AARAV', 'PRIYA', 'ROHAN']`

`map(str.upper, names)` applies `str.upper` to each element. When passing an existing function (not a lambda), map is cleaner than a list comprehension.

### Q10. [Medium] What is the output?

```
data = [("Aarav", 85), ("Priya", 92), ("Rohan", 78)]
result = sorted(data, key=lambda x: x[1], reverse=True)
print(result)
```

*Hint:* key=lambda x: x[1] sorts by the second element. reverse=True for descending.

**Answer:** `[('Priya', 92), ('Aarav', 85), ('Rohan', 78)]`

sorted() uses the second element of each tuple for comparison. reverse=True gives descending order: 92, 85, 78.

### Q11. [Medium] What is the output?

```
mixed = [0, 1, "", "hello", None, 42, False, "world"]
result = list(filter(None, mixed))
print(result)
```

*Hint:* filter(None, ...) removes all falsy values.

**Answer:** `[1, 'hello', 42, 'world']`

When the function is `None`, filter removes all falsy values. 0, "", None, and False are falsy. 1, "hello", 42, and "world" are truthy.

### Q12. [Medium] What is the output?

```
numbers = [1, 2, 3, 4, 5]
result = list(map(lambda x: x ** 2, filter(lambda x: x > 2, numbers)))
print(result)
```

*Hint:* filter first (keep x > 2), then map (square them).

**Answer:** `[9, 16, 25]`

filter keeps [3, 4, 5] (elements > 2). map squares them: [9, 16, 25]. The chain reads inside-out: filter first, then map.

### Q13. [Hard] What is the output?

```
from functools import reduce
result = reduce(lambda a, b: a if a > b else b, [3, 7, 2, 9, 4])
print(result)
```

*Hint:* This reduce keeps the larger of each pair, finding the maximum.

**Answer:** `9`

reduce compares pairs: max(3,7)=7, max(7,2)=7, max(7,9)=9, max(9,4)=9. This is equivalent to `max([3, 7, 2, 9, 4])`.

### Q14. [Hard] What is the output?

```
from functools import reduce
result = reduce(lambda a, b: a + b, [1, 2, 3], 100)
print(result)
```

*Hint:* reduce with an initial value starts accumulation from that value.

**Answer:** `106`

The initial value is 100. reduce processes: 100+1=101, 101+2=103, 103+3=106. The initial value is combined with the first element first.

### Q15. [Hard] What is the output?

```
students = [
    {"name": "Aarav", "marks": 85},
    {"name": "Priya", "marks": 92},
    {"name": "Rohan", "marks": 78}
]
topper = max(students, key=lambda s: s["marks"])
print(topper["name"])
```

*Hint:* max() with key=lambda finds the element with the highest value for the given key.

**Answer:** `Priya`

`max()` compares students by their "marks" value. Priya has 92, which is the highest. `max()` returns the entire dictionary, and `["name"]` extracts her name.

### Q16. [Hard] What is the output?

```
pairs = [("Aarav", 85), ("Priya", 92), ("Rohan", 85), ("Meera", 92)]
result = sorted(pairs, key=lambda x: (-x[1], x[0]))
print(result)
```

*Hint:* Negative marks for descending order, then name for ascending (alphabetical).

**Answer:** `[('Meera', 92), ('Priya', 92), ('Aarav', 85), ('Rohan', 85)]`

The key is `(-marks, name)`. Negating marks gives descending order: 92 before 85. For equal marks, names are sorted ascending: Meera before Priya, Aarav before Rohan.

### Q17. [Hard] What is the output?

```
funcs = [lambda x: x + 1, lambda x: x * 2, lambda x: x ** 2]
result = [f(3) for f in funcs]
print(result)
```

*Hint:* Each lambda is applied to the argument 3.

**Answer:** `[4, 6, 9]`

The list contains three lambda functions. Applying each to 3: 3+1=4, 3*2=6, 3**2=9. Functions stored in a list and called in a comprehension.

## Mixed Questions

### Q1. [Easy] What is the output?

```
f = lambda: 42
print(f())
print(type(f))
```

*Hint:* A lambda with no parameters just returns the expression.

**Answer:** `42`
``

The lambda takes no parameters and returns 42. Lambda functions are still functions; `type(f)` returns ``.

### Q2. [Easy] What is the output?

```
nums = ["3", "1", "4", "1", "5"]
result = list(map(int, nums))
print(result)
print(sum(result))
```

*Hint:* map(int, ...) converts each string to an integer.

**Answer:** `[3, 1, 4, 1, 5]`
`14`

`map(int, nums)` converts each string to an integer. `sum([3, 1, 4, 1, 5])` = 14.

### Q3. [Easy] What is the output?

```
words = ["hello", "world", "python"]
lengths = list(map(len, words))
print(lengths)
```

*Hint:* map(len, ...) applies len() to each element.

**Answer:** `[5, 5, 6]`

`len("hello")`=5, `len("world")`=5, `len("python")`=6. map applies len to each word.

### Q4. [Medium] What is the output?

```
numbers = [1, 2, 3, 4, 5]
odd_squares = list(map(lambda x: x**2, filter(lambda x: x % 2 != 0, numbers)))
print(odd_squares)
```

*Hint:* filter keeps odd numbers, then map squares them.

**Answer:** `[1, 9, 25]`

filter keeps odd numbers: [1, 3, 5]. map squares them: [1, 9, 25].

### Q5. [Medium] What is the output?

```
a = [1, 2, 3]
b = [10, 20, 30]
result = list(map(lambda x, y: x + y, a, b))
print(result)
```

*Hint:* map with two iterables passes one element from each to the lambda.

**Answer:** `[11, 22, 33]`

With two iterables, map passes pairs: (1,10), (2,20), (3,30). The lambda adds them: 11, 22, 33.

### Q6. [Medium] What is the output?

```
words = ["Python", "is", "awesome", "!"]
longest = max(words, key=lambda w: len(w))
shortest = min(words, key=lambda w: len(w))
print(longest)
print(shortest)
```

*Hint:* max/min with key=len finds the longest/shortest string.

**Answer:** `awesome`
`!`

Lengths: Python=6, is=2, awesome=7, !=1. max by length is "awesome" (7). min by length is "!" (1).

### Q7. [Medium] What is the output?

```
result = (lambda x, y: x ** y)(2, 10)
print(result)
```

*Hint:* This is an immediately invoked lambda expression (IIFE).

**Answer:** `1024`

The lambda is defined and called immediately with arguments (2, 10). It computes 2**10 = 1024.

### Q8. [Medium] What is the difference between map() and filter()?

*Hint:* One transforms, the other selects.

**Answer:** `map(func, iterable)` **transforms** every element by applying func and returns the results. `filter(func, iterable)` **selects** elements where func returns True. map changes values, filter changes which values are included.

Example: `map(lambda x: x*2, [1,2,3])` gives [2,4,6] (all elements, transformed). `filter(lambda x: x>1, [1,2,3])` gives [2,3] (only elements passing the test, untransformed).

### Q9. [Medium] When should you use a lambda instead of a def function?

*Hint:* Think about function complexity and reusability.

**Answer:** Use lambda for short, simple, throwaway operations used once (like sort keys, quick transforms in map/filter). Use `def` when the function is complex, needs multiple lines, will be reused, or needs a docstring.

Lambda is syntactic sugar for simple cases. If you find yourself writing a complex lambda that is hard to read, switch to def. The Python style guide (PEP 8) discourages assigning lambdas to variables: use def instead.

### Q10. [Hard] What is the output?

```
from functools import reduce
nested = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]
flat = reduce(lambda a, b: a + b, nested)
print(flat)
print(len(flat))
```

*Hint:* The + operator on lists concatenates them. reduce applies it cumulatively.

**Answer:** `[1, 2, 3, 4, 5, 6, 7, 8, 9]`
`9`

reduce concatenates lists: [1,2,3]+[4,5]=[1,2,3,4,5], then +[6,7,8,9]=[1,2,3,4,5,6,7,8,9]. The flat list has 9 elements.

### Q11. [Hard] What is the output?

```
marks = {"Aarav": 85, "Priya": 45, "Rohan": 92, "Meera": 38}
passed = dict(filter(lambda item: item[1] >= 50, marks.items()))
print(passed)
```

*Hint:* filter on dict.items() gives key-value tuples. Convert back to dict.

**Answer:** `{'Aarav': 85, 'Rohan': 92}`

`marks.items()` gives tuples: ('Aarav', 85), ('Priya', 45), etc. The filter keeps tuples where the second element >= 50: Aarav (85) and Rohan (92). `dict()` converts back.

### Q12. [Hard] What is the output?

```
from functools import reduce
words = ["Hello", " ", "World", "!"]
result = reduce(lambda a, b: a + b, words)
print(result)
print(type(result))
```

*Hint:* reduce with string concatenation joins all strings into one.

**Answer:** `Hello World!`
``

reduce concatenates: "Hello"+" "="Hello ", +"World"="Hello World", +"!"="Hello World!". The result is a single string.

## Multiple Choice Questions

### Q1. [Easy] What is the correct syntax for a lambda function?

A. lambda(x): x + 1
B. lambda x: x + 1
C. def lambda(x): x + 1
D. lambda x -> x + 1

**Answer:** B

**B is correct.** Lambda syntax is `lambda params: expression`. No parentheses around parameters, no arrow notation, and no def keyword.

### Q2. [Easy] What does map() return in Python 3?

A. A list
B. A tuple
C. A map object (iterator)
D. A dictionary

**Answer:** C

**C is correct.** In Python 3, `map()` returns a lazy map object (iterator), not a list. Use `list(map(...))` to get a list. This is memory-efficient for large datasets.

### Q3. [Easy] What does filter() do?

A. Transforms every element
B. Keeps elements where the function returns True
C. Removes duplicate elements
D. Sorts elements by condition

**Answer:** B

**B is correct.** `filter(func, iterable)` tests each element with func and keeps only those where func returns True. It does not transform elements (that is map) or remove duplicates (that is set).

### Q4. [Easy] Where is reduce() located in Python 3?

A. It is a built-in function
B. In the math module
C. In the functools module
D. In the itertools module

**Answer:** C

**C is correct.** `reduce()` was moved to `functools` in Python 3. You must write `from functools import reduce` before using it.

### Q5. [Easy] Can a lambda function contain an if-else statement?

A. No, lambdas cannot have any conditions
B. Yes, using a conditional expression (ternary): a if condition else b
C. Yes, using a regular if-else block
D. Only in Python 3.10+

**Answer:** B

**B is correct.** Lambda can use conditional **expressions** (ternary): `lambda x: 'yes' if x > 0 else 'no'`. It cannot use if-else **statements** (blocks with colons and indentation).

### Q6. [Medium] What is the output of list(map(lambda x: x ** 2, [1, 2, 3]))?

A. [1, 2, 3]
B. [2, 4, 6]
C. [1, 4, 9]
D. (1, 4, 9)

**Answer:** C

**C is correct.** map applies `x ** 2` to each element: 1**2=1, 2**2=4, 3**2=9. Result: [1, 4, 9].

### Q7. [Medium] What is the output of list(filter(lambda x: x > 3, [1, 2, 3, 4, 5]))?

A. [1, 2, 3]
B. [4, 5]
C. [3, 4, 5]
D. [True, True]

**Answer:** B

**B is correct.** filter keeps elements where `x > 3` is True. Only 4 and 5 satisfy this condition. Result: [4, 5].

### Q8. [Medium] What does filter(None, [0, 1, '', 'hello', None, 42]) return?

A. [0, 1, '', 'hello', None, 42]
B. [1, 'hello', 42]
C. [None]
D. []

**Answer:** B

**B is correct.** When func is None, filter removes all falsy values. 0, '', and None are falsy. 1, 'hello', and 42 are truthy and are kept.

### Q9. [Medium] What does sorted(['pie', 'apple', 'fig'], key=lambda x: len(x)) return?

A. ['apple', 'fig', 'pie']
B. ['pie', 'fig', 'apple']
C. ['fig', 'pie', 'apple']
D. [3, 3, 5]

**Answer:** B

**B is correct.** Lengths: pie=3, fig=3, apple=5. Sorted by length: pie and fig (both 3) come first (original order preserved), then apple (5). Result: ['pie', 'fig', 'apple'].

### Q10. [Medium] Which is NOT a valid lambda expression?

A. lambda x: x + 1
B. lambda: 42
C. lambda x, y: x * y
D. lambda x: print(x); return x

**Answer:** D

**D is correct.** Lambda cannot contain statements like `return` or semicolons separating multiple statements. Lambda can only have a single expression. Options A, B, and C are all valid.

### Q11. [Hard] What is the output of reduce(lambda a, b: a * b, [1, 2, 3, 4])?

A. 10
B. 24
C. [2, 6, 24]
D. Error

**Answer:** B

**B is correct.** reduce computes the product cumulatively: 1*2=2, 2*3=6, 6*4=24. The final result is 24 (factorial of 4).

### Q12. [Hard] What is the difference between lambda and def?

A. Lambda is faster than def
B. Lambda can only contain a single expression; def can have multiple statements
C. Lambda can have a docstring; def cannot
D. There is no difference

**Answer:** B

**B is correct.** Lambda is limited to a single expression (no statements, no multi-line body). `def` can have multiple statements, docstrings, and complex logic. Lambda is not faster; both create function objects.

### Q13. [Hard] What does map() do when given two iterables of different lengths?

A. Raises a ValueError
B. Pads the shorter one with None
C. Stops at the shortest iterable
D. Repeats the shorter iterable

**Answer:** C

**C is correct.** `map()` stops when the shortest iterable is exhausted. For example, `list(map(lambda x, y: x+y, [1, 2, 3], [10, 20]))` gives [11, 22] (stops after 2 elements).

### Q14. [Hard] What is reduce(lambda a, b: a + b, [5], 10)?

A. 5
B. 15
C. 10
D. Error

**Answer:** B

**B is correct.** The initial value is 10. reduce computes: 10 + 5 = 15. The initial value is combined with the first (and only) element.

### Q15. [Medium] Which is more readable for squaring a list of numbers?

A. list(map(lambda x: x**2, numbers))
B. [x**2 for x in numbers]
C. Both are equally readable
D. Neither is readable

**Answer:** B

**B is correct.** For simple transformations, list comprehensions are generally more readable and Pythonic than map with lambda. The Python community and PEP 8 favor comprehensions for simple cases.

### Q16. [Easy] What does lambda x, y: x + y do?

A. Creates a function that prints x + y
B. Creates a function that returns x + y
C. Assigns x + y to a variable
D. Creates two variables x and y

**Answer:** B

**B is correct.** Lambda creates an anonymous function that takes two parameters (x and y) and returns their sum. The return is implicit.

### Q17. [Hard] What does sorted(data, key=lambda x: (-x[1], x[0])) do?

A. Sorts by first element descending, then second ascending
B. Sorts by second element descending, then first element ascending
C. Sorts by second element ascending, then first descending
D. Raises an error because of the negative sign

**Answer:** B

**B is correct.** Negating the second element (`-x[1]`) reverses its sort order (descending). The first element (`x[0]`) is not negated, so it sorts ascending. This is a common multi-criteria sort pattern.

### Q18. [Hard] What is the output of list(filter(lambda x: x, [0, 1, 2, 0, 3]))?

A. [0, 1, 2, 0, 3]
B. [1, 2, 3]
C. [0, 0]
D. []

**Answer:** B

**B is correct.** The lambda returns x itself. filter keeps elements that are truthy. 0 is falsy, so it is removed. 1, 2, and 3 are truthy, so they are kept.

## Coding Challenges

### Challenge 1. Square All Numbers Using map()

**Difficulty:** Easy

Given the list [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use map() with a lambda to create a new list of their squares.

**Constraints:**

- Use map() and lambda. Do not use list comprehension.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

**Solution:**

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
squares = list(map(lambda x: x ** 2, numbers))
print(squares)
```

### Challenge 2. Filter Passing Students

**Difficulty:** Easy

Given marks = {'Aarav': 85, 'Priya': 45, 'Rohan': 92, 'Meera': 38, 'Vikram': 67}, use filter() to create a new dictionary containing only students who scored 50 or above.

**Constraints:**

- Use filter() with lambda on dict.items().

**Sample input:**

```
(No input required)
```

**Sample output:**

```
{'Aarav': 85, 'Rohan': 92, 'Vikram': 67}
```

**Solution:**

```python
marks = {'Aarav': 85, 'Priya': 45, 'Rohan': 92, 'Meera': 38, 'Vikram': 67}
passed = dict(filter(lambda item: item[1] >= 50, marks.items()))
print(passed)
```

### Challenge 3. Sort Students by Marks

**Difficulty:** Easy

Given a list of tuples: students = [('Aarav', 85), ('Priya', 92), ('Rohan', 78), ('Meera', 95)], sort them by marks in descending order using sorted() with key=lambda.

**Constraints:**

- Use sorted() with key=lambda and reverse=True.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
[('Meera', 95), ('Priya', 92), ('Aarav', 85), ('Rohan', 78)]
```

**Solution:**

```python
students = [('Aarav', 85), ('Priya', 92), ('Rohan', 78), ('Meera', 95)]
result = sorted(students, key=lambda s: s[1], reverse=True)
print(result)
```

### Challenge 4. Celsius to Fahrenheit with map()

**Difficulty:** Medium

Given temperatures in Celsius: [0, 20, 37, 100], use map() with a lambda to convert each to Fahrenheit (F = C * 9/5 + 32). Print the result rounded to 1 decimal place.

**Constraints:**

- Use map() with lambda. Use round() inside the lambda.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
[32.0, 68.0, 98.6, 212.0]
```

**Solution:**

```python
celsius = [0, 20, 37, 100]
fahrenheit = list(map(lambda c: round(c * 9/5 + 32, 1), celsius))
print(fahrenheit)
```

### Challenge 5. Product of a List Using reduce()

**Difficulty:** Medium

Use reduce() to compute the product of all numbers in [2, 3, 5, 7, 11] (multiply all elements together).

**Constraints:**

- Must use reduce() from functools.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
2310
```

**Solution:**

```python
from functools import reduce
numbers = [2, 3, 5, 7, 11]
product = reduce(lambda a, b: a * b, numbers)
print(product)
```

### Challenge 6. Extract and Sort Names by Length

**Difficulty:** Medium

Given records = [{'name': 'Aarav', 'age': 16}, {'name': 'Priya', 'age': 15}, {'name': 'Vikramaditya', 'age': 17}, {'name': 'Meera', 'age': 14}], use map() to extract just the names, then sort them by length (shortest first).

**Constraints:**

- Use map() to extract names and sorted() with key=lambda for sorting.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
['Aarav', 'Priya', 'Meera', 'Vikramaditya']
```

**Solution:**

```python
records = [
    {'name': 'Aarav', 'age': 16},
    {'name': 'Priya', 'age': 15},
    {'name': 'Vikramaditya', 'age': 17},
    {'name': 'Meera', 'age': 14}
]
names = list(map(lambda r: r['name'], records))
sorted_names = sorted(names, key=lambda n: len(n))
print(sorted_names)
```

### Challenge 7. Chain Filter and Map: High Scorer Names

**Difficulty:** Medium

Given students = [{'name': 'Aarav', 'marks': 85}, {'name': 'Priya', 'marks': 92}, {'name': 'Rohan', 'marks': 78}, {'name': 'Meera', 'marks': 95}, {'name': 'Vikram', 'marks': 60}], use filter() to keep students scoring above 80, then map() to extract just their names.

**Constraints:**

- Chain filter() and map() with lambda.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
['Aarav', 'Priya', 'Meera']
```

**Solution:**

```python
students = [
    {'name': 'Aarav', 'marks': 85},
    {'name': 'Priya', 'marks': 92},
    {'name': 'Rohan', 'marks': 78},
    {'name': 'Meera', 'marks': 95},
    {'name': 'Vikram', 'marks': 60}
]
result = list(map(lambda s: s['name'], filter(lambda s: s['marks'] > 80, students)))
print(result)
```

### Challenge 8. Multi-Criteria Sort

**Difficulty:** Hard

Given data = [('Aarav', 'A', 85), ('Priya', 'A', 92), ('Rohan', 'B', 85), ('Meera', 'A', 92), ('Vikram', 'B', 78)], sort by: grade ascending, then marks descending, then name ascending.

**Constraints:**

- Use sorted() with a lambda that returns a tuple key.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
[('Meera', 'A', 92), ('Priya', 'A', 92), ('Aarav', 'A', 85), ('Rohan', 'B', 85), ('Vikram', 'B', 78)]
```

**Solution:**

```python
data = [('Aarav', 'A', 85), ('Priya', 'A', 92), ('Rohan', 'B', 85), ('Meera', 'A', 92), ('Vikram', 'B', 78)]
result = sorted(data, key=lambda x: (x[1], -x[2], x[0]))
print(result)
```

### Challenge 9. Frequency Count with reduce()

**Difficulty:** Hard

Use reduce() to count the frequency of each character in the string 'mississippi'. The result should be a dictionary.

**Constraints:**

- Must use reduce(). The accumulator should be a dictionary.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
{'m': 1, 'i': 4, 's': 4, 'p': 2}
```

**Solution:**

```python
from functools import reduce

text = 'mississippi'
freq = reduce(
    lambda acc, ch: {**acc, ch: acc.get(ch, 0) + 1},
    text,
    {}
)
print(freq)
```

### Challenge 10. Data Processing Pipeline

**Difficulty:** Hard

Given raw data: raw = ['  Aarav:85  ', '  Priya:92  ', '  Rohan:78  ', '  Meera:95  ', '  Vikram:60  '], use map/filter/lambda to: (1) strip whitespace, (2) split by ':', (3) convert marks to int, (4) filter marks > 80, (5) print names of students who passed.

**Constraints:**

- Use a combination of map() and filter() with lambda.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
['Aarav', 'Priya', 'Meera']
```

**Solution:**

```python
raw = ['  Aarav:85  ', '  Priya:92  ', '  Rohan:78  ', '  Meera:95  ', '  Vikram:60  ']

# Step 1-3: Clean and parse
parsed = list(map(lambda s: s.strip().split(':'), raw))
parsed = list(map(lambda p: (p[0], int(p[1])), parsed))

# Step 4-5: Filter and extract names
result = list(map(lambda p: p[0], filter(lambda p: p[1] > 80, parsed)))
print(result)
```

---

*Notes: https://learn.modernagecoders.com/resources/python/lambda-map-filter-reduce/*
