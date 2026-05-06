---
title: "Practice: Comprehensions and Generators"
description: "60 practice problems for Comprehensions and Generators in Python"
slug: list-comprehensions-and-generators-practice
canonical: https://learn.modernagecoders.com/resources/python/list-comprehensions-and-generators/practice
category: "Python"
---
# Practice: Comprehensions and Generators

**Total questions:** 60

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
result = [x * 2 for x in [1, 2, 3, 4]]
print(result)
```

*Hint:* Each element is multiplied by 2.

**Answer:** `[2, 4, 6, 8]`

The list comprehension takes each element from [1, 2, 3, 4] and multiplies it by 2, producing [2, 4, 6, 8].

### Q2. [Easy] What is the output?

```
evens = [x for x in range(10) if x % 2 == 0]
print(evens)
```

*Hint:* The if clause filters elements. Only even numbers pass the condition.

**Answer:** `[0, 2, 4, 6, 8]`

The comprehension iterates from 0 to 9 and keeps only those where `x % 2 == 0` (even numbers). Result: [0, 2, 4, 6, 8].

### Q3. [Easy] What is the output?

```
words = ["hello", "world"]
upper = [w.upper() for w in words]
print(upper)
```

*Hint:* The .upper() method converts a string to uppercase.

**Answer:** `['HELLO', 'WORLD']`

Each string in the list has `.upper()` called on it, converting to uppercase. Result: ['HELLO', 'WORLD'].

### Q4. [Easy] What is the output?

```
result = ["even" if x % 2 == 0 else "odd" for x in range(4)]
print(result)
```

*Hint:* The if-else before 'for' transforms every element.

**Answer:** `['even', 'odd', 'even', 'odd']`

For each x in range(4): 0 is even, 1 is odd, 2 is even, 3 is odd. The if-else expression before the for clause determines the value for every element.

### Q5. [Easy] What is the output?

```
squares = {x: x**2 for x in range(4)}
print(squares)
```

*Hint:* Curly braces with key:value create a dictionary comprehension.

**Answer:** `{0: 0, 1: 1, 2: 4, 3: 9}`

The dict comprehension creates key-value pairs where each key is x and each value is x squared. Result: {0: 0, 1: 1, 2: 4, 3: 9}.

### Q6. [Medium] What is the output?

```
matrix = [[1, 2], [3, 4], [5, 6]]
flat = [n for row in matrix for n in row]
print(flat)
```

*Hint:* Nested comprehension reads left to right: outer loop first, inner loop second.

**Answer:** `[1, 2, 3, 4, 5, 6]`

The outer loop iterates over rows ([1,2], [3,4], [5,6]). The inner loop iterates over numbers in each row. All numbers are collected into a flat list.

### Q7. [Medium] What is the output?

```
names = ["Aarav", "Ananya", "Priya", "Arjun"]
result = {name[0] for name in names}
print(sorted(result))
```

*Hint:* Curly braces without key:value create a set comprehension. Sets have unique elements.

**Answer:** `['A', 'P']`

The set comprehension extracts the first character of each name: 'A', 'A', 'P', 'A'. Since sets contain unique elements, duplicates are removed. Sorted result: ['A', 'P'].

### Q8. [Medium] What is the output?

```
def gen():
    yield 1
    yield 2
    yield 3

g = gen()
print(next(g))
print(next(g))
print(list(g))
```

*Hint:* next() consumes one value. list() consumes all remaining values.

**Answer:** `1`
`2`
`[3]`

First `next()` gets 1, second gets 2. `list(g)` consumes all remaining values, which is only [3]. The generator had 3 values total; 2 were consumed by next(), leaving 1 for list().

### Q9. [Medium] What is the output?

```
gen = (x ** 2 for x in range(4))
print(type(gen).__name__)
print(sum(gen))
print(sum(gen))
```

*Hint:* A generator can only be consumed once.

**Answer:** `generator`
`14`
`0`

The type is 'generator'. First `sum(gen)` consumes all values: 0+1+4+9 = 14. Second `sum(gen)` gets 0 because the generator is exhausted and has no more values.

### Q10. [Medium] What is the output?

```
scores = {"Aarav": 85, "Priya": 42, "Rohan": 91}
result = {k: v for k, v in scores.items() if v >= 50}
print(result)
```

*Hint:* The if clause filters dictionary items by value.

**Answer:** `{'Aarav': 85, 'Rohan': 91}`

The dict comprehension iterates over all key-value pairs and keeps only those where the value is >= 50. Priya's score (42) is excluded.

### Q11. [Medium] What is the output?

```
def countdown(n):
    while n > 0:
        yield n
        n -= 1

nums = list(countdown(5))
print(nums)
print(sum(countdown(3)))
```

*Hint:* Each call to countdown() creates a fresh generator.

**Answer:** `[5, 4, 3, 2, 1]`
`6`

`countdown(5)` yields 5, 4, 3, 2, 1. `list()` collects them all. `countdown(3)` creates a new generator yielding 3, 2, 1. `sum()` adds them: 3+2+1 = 6.

### Q12. [Hard] What is the output?

```
result = [[i*j for j in range(1, 4)] for i in range(1, 4)]
for row in result:
    print(row)
```

*Hint:* Outer comprehension creates rows (i=1,2,3). Inner comprehension creates columns (j=1,2,3).

**Answer:** `[1, 2, 3]`
`[2, 4, 6]`
`[3, 6, 9]`

The outer comprehension iterates i from 1 to 3. For each i, the inner comprehension creates [i*1, i*2, i*3]. This builds a 3x3 multiplication table.

### Q13. [Hard] What is the output?

```
def gen_ab():
    yield "a"
    yield "b"

def gen_cd():
    yield "c"
    yield "d"

def chain(*generators):
    for gen in generators:
        yield from gen

result = list(chain(gen_ab(), gen_cd()))
print(result)
```

*Hint:* yield from delegates to another generator, yielding all its values.

**Answer:** `['a', 'b', 'c', 'd']`

`yield from gen` yields all values from the sub-generator. The chain function iterates over each generator argument and delegates to it with `yield from`. The result is all values from gen_ab followed by all values from gen_cd.

### Q14. [Hard] What is the output?

```
original = [[1, 2, 3], [4, 5, 6]]
transposed = [[row[i] for row in original] for i in range(3)]
print(transposed)
```

*Hint:* The outer comprehension iterates column indices. The inner collects that column from each row.

**Answer:** `[[1, 4], [2, 5], [3, 6]]`

For i=0: [row[0] for row in original] = [1, 4]. For i=1: [row[1] for row in original] = [2, 5]. For i=2: [row[2] for row in original] = [3, 6]. This transposes the matrix (swaps rows and columns).

### Q15. [Hard] What is the output?

```
def infinite():
    n = 0
    while True:
        yield n
        n += 1

gen = infinite()
result = [next(gen) for _ in range(5)]
next(gen)  # Skip one
result.append(next(gen))
print(result)
```

*Hint:* next(gen) advances the generator by one. The skipped value is not in result.

**Answer:** `[0, 1, 2, 3, 4, 6]`

First, 5 calls to next(gen) produce [0, 1, 2, 3, 4]. Then next(gen) produces 5 but it is discarded (not appended). Then next(gen) produces 6, which is appended. Result: [0, 1, 2, 3, 4, 6].

### Q16. [Hard] What is the output?

```
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Three different comprehension types
list_result = [x for x in data if x % 3 == 0]
dict_result = {x: x**2 for x in data if x % 3 == 0}
set_result = {x % 5 for x in data if x % 3 == 0}

print(list_result)
print(dict_result)
print(sorted(set_result))
```

*Hint:* Multiples of 3 in 1-10 are 3, 6, 9.

**Answer:** `[3, 6, 9]`
`{3: 9, 6: 36, 9: 81}`
`[0, 1, 4]`

Multiples of 3: [3, 6, 9]. Dict maps each to its square: {3:9, 6:36, 9:81}. Set of remainders mod 5: {3%5=3, 6%5=1, 9%5=4} -> sorted: [1, 3, 4]. Wait -- 3%5=3, 6%5=1, 9%5=4, so sorted is [1, 3, 4].

### Q17. [Medium] What is the difference between `[x for x in items if x > 0]` and `[x if x > 0 else 0 for x in items]`?

*Hint:* One filters, the other transforms.

**Answer:** The first expression **filters**: it includes only elements where x > 0. Elements that fail the condition are excluded entirely, so the result may have fewer elements. The second expression **transforms**: it includes every element, but replaces non-positive ones with 0. The result always has the same number of elements as the input.

For items = [-1, 2, -3, 4]: the filter produces [2, 4] (2 elements). The transform produces [0, 2, 0, 4] (4 elements). The position of the if clause determines the behavior.

### Q18. [Hard] Why are generators described as 'lazy'? What advantage does lazy evaluation provide?

*Hint:* Think about when values are computed and how much memory is used.

**Answer:** Generators are 'lazy' because they compute each value only when it is requested (by `next()` or a for loop), not in advance. This provides two advantages: (1) **Memory efficiency** -- only one value exists in memory at a time, regardless of the total number of values. A generator over 10 million items uses the same memory as one over 10 items. (2) **Computation efficiency** -- if you only need the first few values (e.g., finding the first match), the remaining values are never computed at all.

In contrast, a list comprehension is 'eager' -- it computes ALL values immediately and stores them ALL in memory. For large or infinite sequences, eager evaluation is impractical or impossible, making generators essential.

## Mixed Questions

### Q1. [Easy] What is the output?

```
lengths = [len(w) for w in ["hi", "hello", "hey"]]
print(lengths)
```

*Hint:* len() returns the length of each string.

**Answer:** `[2, 5, 3]`

`len("hi")` is 2, `len("hello")` is 5, `len("hey")` is 3. The comprehension applies len to each word.

### Q2. [Easy] What is the output?

```
chars = [c for c in "Python"]
print(chars)
```

*Hint:* Iterating over a string gives individual characters.

**Answer:** `['P', 'y', 't', 'h', 'o', 'n']`

Iterating over a string produces each character. The comprehension collects them into a list: ['P', 'y', 't', 'h', 'o', 'n'].

### Q3. [Easy] What is the output?

```
pairs = [(x, y) for x in [1, 2] for y in ["a", "b"]]
print(pairs)
```

*Hint:* Two for clauses create all combinations (Cartesian product).

**Answer:** `[(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b')]`

For x=1: (1,'a'), (1,'b'). For x=2: (2,'a'), (2,'b'). The two for clauses produce all combinations of x and y values.

### Q4. [Medium] What is the output?

```
nums = [1, 2, 3, 4, 5, 6]
result = [x ** 2 for x in nums if x % 2 != 0]
print(result)
```

*Hint:* The if clause filters to odd numbers first, then squares them.

**Answer:** `[1, 9, 25]`

Odd numbers: 1, 3, 5. Squared: 1, 9, 25. The filter (if x % 2 != 0) runs first, then the expression (x**2) applies to the survivors.

### Q5. [Medium] What is the output?

```
sentence = "the quick brown fox"
word_map = {w: len(w) for w in sentence.split()}
print(word_map)
```

*Hint:* split() breaks the string into words. Dict comprehension maps each word to its length.

**Answer:** `{'the': 3, 'quick': 5, 'brown': 5, 'fox': 3}`

The string is split into ["the", "quick", "brown", "fox"]. The dict comprehension maps each word to its length.

### Q6. [Medium] What is the output?

```
def double_gen(n):
    for i in range(n):
        yield i * 2

result = []
for val in double_gen(4):
    result.append(val)

print(result)
```

*Hint:* The generator yields 0*2, 1*2, 2*2, 3*2.

**Answer:** `[0, 2, 4, 6]`

The generator yields i*2 for i in range(4): 0, 2, 4, 6. The for loop collects all yielded values into the result list.

### Q7. [Medium] What is the output?

```
data = ["hello", 42, "world", 3.14, "!"]
strings_only = [x.upper() for x in data if isinstance(x, str)]
print(strings_only)
```

*Hint:* isinstance(x, str) filters to strings only. Then .upper() is applied.

**Answer:** `['HELLO', 'WORLD', '!']`

The filter keeps only string elements: "hello", "world", "!". Then `.upper()` converts each to uppercase: ['HELLO', 'WORLD', '!'].

### Q8. [Hard] What is the output?

```
def gen():
    print("start")
    yield 1
    print("middle")
    yield 2
    print("end")

g = gen()
print("before next")
val = next(g)
print(f"got {val}")
val = next(g)
print(f"got {val}")
```

*Hint:* Generator code runs lazily. It does not execute until next() is called.

**Answer:** `before next`
`start`
`got 1`
`middle`
`got 2`

Creating `gen()` does NOT execute any code inside it. The first `next()` runs from the beginning to the first yield, printing "start" and yielding 1. The second `next()` resumes from after the first yield, printing "middle" and yielding 2. "end" has not printed yet because no third next() was called.

### Q9. [Hard] What is the output?

```
nested = {"a": [1, 2], "b": [3, 4], "c": [5]}
flat = [(k, v) for k, vals in nested.items() for v in vals]
print(flat)
```

*Hint:* Outer loop iterates keys and lists. Inner loop iterates values in each list.

**Answer:** `[('a', 1), ('a', 2), ('b', 3), ('b', 4), ('c', 5)]`

For key 'a', values [1,2]: pairs ('a',1), ('a',2). For key 'b', values [3,4]: pairs ('b',3), ('b',4). For key 'c', values [5]: pair ('c',5). The nested comprehension flattens the dict of lists into a list of tuples.

### Q10. [Hard] What is the output?

```
def squares_up_to(n):
    i = 0
    while i * i <= n:
        yield i * i
        i += 1

print(list(squares_up_to(20)))
print(list(squares_up_to(1)))
```

*Hint:* The generator yields perfect squares that are <= n.

**Answer:** `[0, 1, 4, 9, 16]`
`[0, 1]`

For n=20: 0, 1, 4, 9, 16 are all <= 20. Next would be 25 > 20, so the loop stops. For n=1: 0 and 1 are <= 1. Next would be 4 > 1, so the loop stops.

### Q11. [Hard] What is the output?

```
mapping = list(map(lambda x: x**2, [1, 2, 3]))
comping = [x**2 for x in [1, 2, 3]]
genning = list(x**2 for x in [1, 2, 3])

print(mapping == comping == genning)
print(type(map(lambda x: x, [])).__name__)
print(type(x**2 for x in []).__name__)
```

*Hint:* All three produce the same values. map and generator expressions are lazy.

**Answer:** `True`
`map`
`generator`

All three approaches produce [1, 4, 9], so they are equal (True). `map()` returns a map object (lazy). A generator expression returns a generator object (lazy). Both must be converted with `list()` to get an actual list.

### Q12. [Medium] When should you use a generator expression instead of a list comprehension?

*Hint:* Think about memory usage and how many times you need the data.

**Answer:** Use a generator expression when: (1) you only need to iterate over the values once (e.g., passing to `sum()`, `max()`, or a for loop), (2) the data set is very large and would consume too much memory as a list, or (3) you are chaining operations where intermediate lists would be wasteful. Use a list comprehension when you need to access elements by index, iterate multiple times, or the data set is small enough that memory is not a concern.

A generator expression uses `()` instead of `[]` and produces values lazily. It uses constant memory (about 200 bytes) regardless of how many values it will produce, while a list comprehension stores all values in memory.

## Multiple Choice Questions

### Q1. [Easy] What does [x * 2 for x in range(3)] produce?

A. [0, 2, 4]
B. [2, 4, 6]
C. [1, 2, 3]
D. [0, 1, 2]

**Answer:** A

**A is correct.** range(3) produces 0, 1, 2. Multiplying each by 2: 0, 2, 4. Result: [0, 2, 4]. Option B would be correct for range(1, 4).

### Q2. [Easy] What type of comprehension uses curly braces with key:value pairs?

A. List comprehension
B. Set comprehension
C. Dictionary comprehension
D. Tuple comprehension

**Answer:** C

**C is correct.** `{key: value for ...}` creates a dictionary. `{value for ...}` (no colon) creates a set. `[value for ...]` creates a list. There is no tuple comprehension syntax.

### Q3. [Easy] What keyword is used in a generator function to produce values?

A. return
B. yield
C. produce
D. emit

**Answer:** B

**B is correct.** `yield` is the keyword that makes a function a generator. It pauses the function and produces a value. `return` would end the function entirely.

### Q4. [Easy] What is the output of (x for x in [1, 2, 3])?

A. [1, 2, 3]
B. (1, 2, 3)
C. A generator object
D. {1, 2, 3}

**Answer:** C

**C is correct.** Parentheses with a for expression create a generator object, not a tuple or list. To get a list, use `list(x for x in [1, 2, 3])`.

### Q5. [Easy] Which comprehension syntax filters elements?

A. [x if x > 0 for x in items]
B. [x for x in items if x > 0]
C. [if x > 0: x for x in items]
D. [x for x in items where x > 0]

**Answer:** B

**B is correct.** The filter condition goes after the for clause: `[x for x in items if condition]`. Option A is a SyntaxError (if-else requires an else). Options C and D are not valid Python syntax.

### Q6. [Medium] What happens when you call next() on an exhausted generator?

A. It returns None
B. It restarts from the beginning
C. It raises StopIteration
D. It raises GeneratorError

**Answer:** C

**C is correct.** When a generator has no more values to yield, calling `next()` raises `StopIteration`. A for loop catches this automatically, but manual `next()` calls will see it.

### Q7. [Medium] In [x if x > 0 else -x for x in numbers], where does the if-else go?

A. After the for clause
B. Before the for clause
C. Inside the for clause
D. It can go anywhere

**Answer:** B

**B is correct.** The `if-else` expression (ternary operator) goes before the `for` clause when you want to transform every element. The `if` goes after the `for` clause only when you want to filter elements.

### Q8. [Medium] What is lazy evaluation?

A. Evaluating code slowly for accuracy
B. Computing values only when they are needed
C. Skipping error checking for speed
D. Delaying all computation until the program ends

**Answer:** B

**B is correct.** Lazy evaluation means values are computed on demand, not in advance. Generators use lazy evaluation -- each value is computed only when `next()` is called or when a for loop requests it.

### Q9. [Medium] How much memory does a generator expression use compared to a list comprehension for 1 million elements?

A. About the same
B. Roughly half
C. A tiny fraction (constant, ~200 bytes)
D. Twice as much

**Answer:** C

**C is correct.** A generator object is about 200 bytes regardless of how many values it will produce. A list comprehension for 1 million integers uses about 8 MB. The generator computes values one at a time, never storing the full sequence.

### Q10. [Medium] What does {x % 3 for x in range(10)} create?

A. A list of remainders
B. A dictionary
C. A set of unique remainders
D. A generator

**Answer:** C

**C is correct.** Curly braces without key:value pairs create a set. The remainders when dividing 0-9 by 3 are 0, 1, 2, 0, 1, 2, 0, 1, 2, 0. The set contains only unique values: {0, 1, 2}.

### Q11. [Medium] What is the difference between yield and return?

A. They are the same
B. yield ends the function; return pauses it
C. return ends the function; yield pauses it and preserves state
D. return can only return one value; yield returns multiple at once

**Answer:** C

**C is correct.** `return` terminates the function permanently and sends back one value. `yield` pauses the function, sends back a value, and preserves all local variables. When `next()` is called again, execution resumes from where it paused.

### Q12. [Hard] What is the output of [n for row in [[1,2],[3]] for n in row]?

A. [[1, 2], [3]]
B. [1, 2, 3]
C. [[1, 2, 3]]
D. Error: too many for clauses

**Answer:** B

**B is correct.** The outer loop iterates over rows: [1,2] then [3]. The inner loop iterates numbers in each row: 1, 2, then 3. All numbers are collected into a flat list: [1, 2, 3]. This is the flattening pattern.

### Q13. [Hard] Can a generator function have both yield and return statements?

A. No, it is a SyntaxError
B. Yes, but return must have no value
C. Yes, return stops the generator (raises StopIteration)
D. Yes, return sends back the final value

**Answer:** C

**C is correct.** A generator function can have `return` (with or without a value). A bare `return` or falling off the end of the function raises `StopIteration`. `return value` raises `StopIteration(value)`, where the value can be accessed from the exception but is not yielded.

### Q14. [Hard] Why is a list comprehension typically faster than an equivalent for-loop-with-append?

A. Comprehensions use less memory
B. Comprehensions skip error checking
C. Comprehensions are optimized at the bytecode level with fewer function calls
D. Comprehensions run in parallel

**Answer:** C

**C is correct.** List comprehensions are compiled to optimized bytecode. They avoid the overhead of calling `list.append()` on each iteration (which involves attribute lookup and function call). The improvement is typically 10-30% for simple operations.

### Q15. [Hard] What does yield from iterable do in a generator function?

A. Yields the iterable as a single value
B. Yields each value from the iterable one at a time
C. Returns the iterable and stops the generator
D. Creates a sub-generator that runs in parallel

**Answer:** B

**B is correct.** `yield from iterable` delegates to a sub-iterator, yielding each of its values one at a time. It is equivalent to `for item in iterable: yield item` but more efficient and also supports send/throw for advanced generator protocols.

### Q16. [Hard] What is the result of sum(x for x in range(4))?

A. 10
B. 6
C. 4
D. Error: generator cannot be summed

**Answer:** B

**B is correct.** The generator expression produces 0, 1, 2, 3 (range(4) goes from 0 to 3). `sum()` adds them: 0+1+2+3 = 6. Generator expressions can be passed directly to functions like sum(), max(), min(), any(), all().

### Q17. [Easy] What does [x.strip() for x in [' hi ', ' bye ']] produce?

A. ['hi', 'bye']
B. [' hi ', ' bye ']
C. ['HI', 'BYE']
D. Error

**Answer:** A

**A is correct.** The `.strip()` method removes leading and trailing whitespace from each string. ' hi ' becomes 'hi' and ' bye ' becomes 'bye'.

### Q18. [Medium] Can you iterate over a generator with a for loop?

A. No, you must use next()
B. Yes, the for loop calls next() internally and handles StopIteration
C. Yes, but only for generator expressions, not generator functions
D. Yes, but the for loop converts it to a list first

**Answer:** B

**B is correct.** A for loop works with any iterable, including generators. Internally, it calls `iter()` (which returns the generator itself) and then `next()` repeatedly until `StopIteration` is raised. The for loop handles StopIteration automatically.

### Q19. [Hard] What is the correct way to create a tuple from a comprehension-like syntax?

A. (x**2 for x in range(5))
B. tuple[x**2 for x in range(5)]
C. tuple(x**2 for x in range(5))
D. <x**2 for x in range(5)>

**Answer:** C

**C is correct.** There is no tuple comprehension syntax. Option A creates a generator, not a tuple. Option C wraps a generator expression with `tuple()` to create a tuple. Options B and D are not valid Python syntax.

### Q20. [Hard] What is the advantage of chaining generators over using intermediate lists?

A. Chained generators are easier to debug
B. Chained generators process data in parallel
C. Chained generators use constant memory by processing one element at a time
D. Chained generators are always faster

**Answer:** C

**C is correct.** When generators are chained, each element flows through the entire pipeline one at a time. No intermediate lists are created, so memory usage is constant regardless of data size. This is not parallel processing (option B), and it is not necessarily faster for small data (option D).

## Coding Challenges

### Challenge 1. Comprehension Toolbox

**Difficulty:** Easy

Write the following using list comprehensions: (1) squares of numbers 1-10, (2) only even numbers from a list, (3) first character of each word in a sentence, (4) replace negative numbers with 0.

**Constraints:**

- Use only list comprehensions (no for loops).

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Squares: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
Evens: [2, 4, 6, 8, 10]
Initials: ['T', 'q', 'b', 'f']
Cleaned: [3, 0, 7, 0, 2]
```

**Solution:**

```python
# 1. Squares of 1-10
squares = [x ** 2 for x in range(1, 11)]
print(f"Squares: {squares}")

# 2. Even numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = [x for x in numbers if x % 2 == 0]
print(f"Evens: {evens}")

# 3. First character of each word
sentence = "The quick brown fox"
initials = [w[0] for w in sentence.split()]
print(f"Initials: {initials}")

# 4. Replace negatives with 0
data = [3, -1, 7, -5, 2]
cleaned = [x if x >= 0 else 0 for x in data]
print(f"Cleaned: {cleaned}")
```

### Challenge 2. Dict and Set Comprehension Practice

**Difficulty:** Easy

Use comprehensions to: (1) create a dict mapping each number 1-5 to its cube, (2) invert a dictionary (swap keys and values), (3) create a set of unique word lengths from a sentence, (4) filter a dictionary to keep only entries where the value is greater than 50.

**Constraints:**

- Use only dict/set comprehensions.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Cubes: {1: 1, 2: 8, 3: 27, 4: 64, 5: 125}
Inverted: {1: 'a', 2: 'b', 3: 'c'}
Lengths: {3, 4, 5}
Passed: {'Aarav': 85, 'Rohan': 91}
```

**Solution:**

```python
# 1. Number to cube mapping
cubes = {x: x**3 for x in range(1, 6)}
print(f"Cubes: {cubes}")

# 2. Invert a dictionary
original = {'a': 1, 'b': 2, 'c': 3}
inverted = {v: k for k, v in original.items()}
print(f"Inverted: {inverted}")

# 3. Unique word lengths
sentence = "the quick brown fox jumps"
lengths = {len(w) for w in sentence.split()}
print(f"Lengths: {sorted(lengths)}")

# 4. Filter dictionary by value
scores = {'Aarav': 85, 'Priya': 42, 'Rohan': 91, 'Meera': 38}
passed = {k: v for k, v in scores.items() if v > 50}
print(f"Passed: {passed}")
```

### Challenge 3. Fibonacci Generator

**Difficulty:** Easy

Write a generator function fibonacci() that yields Fibonacci numbers indefinitely. Then write code that uses it to: (1) get the first 10 Fibonacci numbers, (2) find the first Fibonacci number greater than 100, (3) sum all Fibonacci numbers under 50.

**Constraints:**

- The generator must be infinite. Use next() and for loops to consume values.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
First 10: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
First > 100: 144
Sum under 50: 88
```

**Solution:**

```python
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# 1. First 10 Fibonacci numbers
fib = fibonacci()
first_10 = [next(fib) for _ in range(10)]
print(f"First 10: {first_10}")

# 2. First Fibonacci number > 100
fib = fibonacci()
for num in fib:
    if num > 100:
        print(f"First > 100: {num}")
        break

# 3. Sum of Fibonacci numbers under 50
fib = fibonacci()
total = 0
for num in fib:
    if num >= 50:
        break
    total += num
print(f"Sum under 50: {total}")
```

### Challenge 4. Matrix Operations with Comprehensions

**Difficulty:** Medium

Using only comprehensions, write functions for: (1) create_matrix(rows, cols, fill=0) that creates a 2D list, (2) transpose(matrix) that swaps rows and columns, (3) flatten(matrix) that converts 2D to 1D, (4) matrix_add(a, b) that adds two matrices element-wise.

**Constraints:**

- Use comprehensions for all operations. No explicit for-loop-with-append.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Created: [[0, 0, 0], [0, 0, 0]]
Transpose: [[1, 4], [2, 5], [3, 6]]
Flattened: [1, 2, 3, 4, 5, 6]
Sum: [[6, 8], [10, 12]]
```

**Solution:**

```python
def create_matrix(rows, cols, fill=0):
    return [[fill for _ in range(cols)] for _ in range(rows)]

def transpose(matrix):
    if not matrix:
        return []
    return [[row[i] for row in matrix] for i in range(len(matrix[0]))]

def flatten(matrix):
    return [val for row in matrix for val in row]

def matrix_add(a, b):
    return [[a[i][j] + b[i][j] for j in range(len(a[0]))] for i in range(len(a))]

print(f"Created: {create_matrix(2, 3)}")
print(f"Transpose: {transpose([[1, 2, 3], [4, 5, 6]])}")
print(f"Flattened: {flatten([[1, 2, 3], [4, 5, 6]])}")

m1 = [[1, 2], [3, 4]]
m2 = [[5, 6], [7, 8]]
print(f"Sum: {matrix_add(m1, m2)}")
```

### Challenge 5. Generator Pipeline: Text Processor

**Difficulty:** Medium

Build a text processing pipeline using chained generators: (1) read_lines(text) yields each line from a multi-line string, (2) strip_lines(lines) yields stripped lines, (3) remove_empty(lines) yields only non-empty lines, (4) to_words(lines) yields individual words from each line, (5) unique_words(words) yields each word only the first time it appears.

**Constraints:**

- Each function must be a generator. Chain them together.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Lines: 5
Clean lines: 3
Words: ['Hello', 'world', 'Python', 'is', 'great', 'Hello', 'Python']
Unique: ['Hello', 'world', 'Python', 'is', 'great']
```

**Solution:**

```python
def read_lines(text):
    for line in text.split('\n'):
        yield line

def strip_lines(lines):
    for line in lines:
        yield line.strip()

def remove_empty(lines):
    for line in lines:
        if line:
            yield line

def to_words(lines):
    for line in lines:
        for word in line.split():
            yield word

def unique_words(words):
    seen = set()
    for word in words:
        if word not in seen:
            seen.add(word)
            yield word

text = """  Hello world  
  
  Python is great  
    
  Hello Python  """

all_lines = list(read_lines(text))
print(f"Lines: {len(all_lines)}")

clean = list(remove_empty(strip_lines(read_lines(text))))
print(f"Clean lines: {len(clean)}")

words = list(to_words(remove_empty(strip_lines(read_lines(text)))))
print(f"Words: {words}")

uniq = list(unique_words(to_words(remove_empty(strip_lines(read_lines(text))))))
print(f"Unique: {uniq}")
```

### Challenge 6. Infinite Generators Collection

**Difficulty:** Medium

Write these infinite generator functions: (1) naturals(start=1) yields natural numbers from start, (2) cycle(iterable) repeats an iterable endlessly, (3) repeat(value, times=None) yields a value forever (or times times if specified). Then write take(n, gen) to get the first n values from any generator.

**Constraints:**

- naturals and cycle must be truly infinite. take() must work with any generator.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Naturals: [1, 2, 3, 4, 5]
Cycle: ['a', 'b', 'c', 'a', 'b', 'c', 'a']
Repeat forever: [42, 42, 42, 42, 42]
Repeat 3 times: [42, 42, 42]
```

**Solution:**

```python
def naturals(start=1):
    n = start
    while True:
        yield n
        n += 1

def cycle(iterable):
    items = list(iterable)
    while True:
        for item in items:
            yield item

def repeat(value, times=None):
    if times is None:
        while True:
            yield value
    else:
        for _ in range(times):
            yield value

def take(n, gen):
    return [next(gen) for _ in range(n)]

print(f"Naturals: {take(5, naturals())}")
print(f"Cycle: {take(7, cycle(['a', 'b', 'c']))}")
print(f"Repeat forever: {take(5, repeat(42))}")
print(f"Repeat 3 times: {list(repeat(42, 3))}")
```

### Challenge 7. Comprehension-Based Data Analysis

**Difficulty:** Hard

Given a list of student records (dicts with 'name', 'subject', 'score'), use only comprehensions to: (1) get names of students who scored above 80, (2) create a dict mapping each subject to its average score, (3) find the top scorer in each subject, (4) create a grade distribution dict (A: 90+, B: 75+, C: 50+, F: below 50).

**Constraints:**

- Use comprehensions wherever possible. You may use helper comprehensions for intermediate results.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Above 80: ['Aarav', 'Rohan', 'Kavya']
Averages: {'Math': 74.33, 'Python': 68.0, 'Science': 73.0}
Top per subject: {'Math': 'Rohan', 'Python': 'Kavya', 'Science': 'Aarav'}
Grade distribution: {'A': 2, 'B': 2, 'C': 1, 'F': 1}
```

**Solution:**

```python
students = [
    {"name": "Aarav", "subject": "Math", "score": 85},
    {"name": "Priya", "subject": "Math", "score": 42},
    {"name": "Rohan", "subject": "Math", "score": 96},
    {"name": "Meera", "subject": "Python", "score": 55},
    {"name": "Kavya", "subject": "Python", "score": 81},
    {"name": "Aarav", "subject": "Science", "score": 91},
    {"name": "Rohan", "subject": "Science", "score": 55},
]

# 1. Names of students who scored above 80
above_80 = [s["name"] for s in students if s["score"] > 80]
print(f"Above 80: {above_80}")

# 2. Average score per subject
subjects = {s["subject"] for s in students}
averages = {
    subj: round(sum(s["score"] for s in students if s["subject"] == subj) / 
          sum(1 for s in students if s["subject"] == subj), 2)
    for subj in subjects
}
print(f"Averages: {averages}")

# 3. Top scorer per subject
top_per_subject = {
    subj: max((s for s in students if s["subject"] == subj), key=lambda s: s["score"])["name"]
    for subj in subjects
}
print(f"Top per subject: {top_per_subject}")

# 4. Grade distribution
def grade(score):
    if score >= 90: return "A"
    if score >= 75: return "B"
    if score >= 50: return "C"
    return "F"

grades = [grade(s["score"]) for s in students]
distribution = {g: grades.count(g) for g in sorted(set(grades))}
print(f"Grade distribution: {distribution}")
```

### Challenge 8. Lazy File-Like Reader with Generators

**Difficulty:** Hard

Create a class LazyCSV that simulates reading a CSV file lazily using generators. It should have: (1) rows() generator that yields each row as a list of strings, (2) dicts() generator that yields each row as a dictionary (using the header row as keys), (3) select(columns) generator that yields only specified columns, (4) where(column, condition) generator that filters rows based on a condition function.

**Constraints:**

- All methods must return generators (use yield). No data should be stored beyond what is needed for the current row.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Row: ['Aarav', '16', '85']
Dict: {'name': 'Aarav', 'age': '16', 'score': '85'}
Names: [['Aarav'], ['Priya'], ['Rohan']]
High scores: [{'name': 'Aarav', 'age': '16', 'score': '85'}, {'name': 'Rohan', 'age': '17', 'score': '92'}]
```

**Solution:**

```python
class LazyCSV:
    def __init__(self, data):
        self.lines = data.strip().split('\n')
        self.header = self.lines[0].split(',')
    
    def rows(self):
        for line in self.lines[1:]:
            yield line.split(',')
    
    def dicts(self):
        for row in self.rows():
            yield {self.header[i]: row[i].strip() for i in range(len(self.header))}
    
    def select(self, columns):
        indices = [self.header.index(col) for col in columns]
        for row in self.rows():
            yield [row[i].strip() for i in indices]
    
    def where(self, column, condition):
        for record in self.dicts():
            if condition(record.get(column, '')):
                yield record

csv_data = """name,age,score
Aarav,16,85
Priya,15,42
Rohan,17,92"""

csv = LazyCSV(csv_data)

row_gen = csv.rows()
print(f"Row: {next(row_gen)}")

dict_gen = csv.dicts()
print(f"Dict: {next(dict_gen)}")

names = list(csv.select(['name']))
print(f"Names: {names}")

high = list(csv.where('score', lambda s: int(s) > 50))
print(f"High scores: {high}")
```

### Challenge 9. Generator-Based Prime Sieve

**Difficulty:** Hard

Implement a prime number generator using the Sieve of Eratosthenes approach with generators: (1) integers_from(n) yields integers starting from n, (2) sieve(numbers) takes a generator of integers and yields primes by filtering out multiples, (3) primes() chains these to yield primes indefinitely. Use the generator to find the 100th prime and sum of primes below 100.

**Constraints:**

- Use generators throughout. The sieve function should recursively filter multiples.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
First 15 primes: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
100th prime: 541
Sum of primes below 100: 1060
```

**Solution:**

```python
def integers_from(n):
    while True:
        yield n
        n += 1

def sieve(numbers):
    prime = next(numbers)
    yield prime
    filtered = (n for n in numbers if n % prime != 0)
    yield from sieve(filtered)

def primes():
    yield from sieve(integers_from(2))

import sys
sys.setrecursionlimit(2000)

# First 15 primes
gen = primes()
first_15 = [next(gen) for _ in range(15)]
print(f"First 15 primes: {first_15}")

# 100th prime
gen = primes()
for i in range(99):
    next(gen)
hundredth = next(gen)
print(f"100th prime: {hundredth}")

# Sum of primes below 100
gen = primes()
total = 0
for p in gen:
    if p >= 100:
        break
    total += p
print(f"Sum of primes below 100: {total}")
```

---

*Notes: https://learn.modernagecoders.com/resources/python/list-comprehensions-and-generators/*
