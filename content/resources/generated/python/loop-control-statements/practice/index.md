---
title: "Practice: Loop Control - break, continue, pass"
description: "55 practice problems for Loop Control - break, continue, pass in Python"
slug: loop-control-statements-practice
canonical: https://learn.modernagecoders.com/resources/python/loop-control-statements/practice/
category: "Python"
---
# Practice: Loop Control - break, continue, pass

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
for i in range(1, 6):
    if i == 3:
        break
    print(i)
```

*Hint:* The loop stops entirely when i reaches 3.

**Answer:** `1`
`2`

When i = 1 and i = 2, the condition `i == 3` is False, so print executes. When i = 3, the condition is True, break executes, and the loop exits immediately. Values 3, 4, 5 are never printed.

### Q2. [Easy] What is the output?

```
for i in range(1, 6):
    if i == 3:
        continue
    print(i)
```

*Hint:* continue skips only the current iteration, not the entire loop.

**Answer:** `1`
`2`
`4`
`5`

When i = 3, `continue` skips the print for that iteration only. The loop continues with i = 4 and i = 5 normally. Unlike break, continue does not stop the loop.

### Q3. [Easy] What is the output?

```
for i in range(3):
    pass
print("Done")
```

*Hint:* pass does nothing. The loop runs but produces no output.

**Answer:** `Done`

The loop runs 3 times, but `pass` does nothing each time. After the loop, "Done" is printed. The `pass` statement is a no-operation; it exists only to prevent a syntax error in an empty block.

### Q4. [Easy] What is the output?

```
i = 10
while i > 0:
    i -= 3
    if i == 4:
        break
print(i)
```

*Hint:* Trace i: 10 -> 7 -> 4. What happens when i is 4?

**Answer:** `4`

i = 10. Iteration 1: i = 10 - 3 = 7, 7 == 4 is False. Iteration 2: i = 7 - 3 = 4, 4 == 4 is True, break. Loop exits with i = 4. The print statement after the loop outputs 4.

### Q5. [Easy] What is the output?

```
for letter in "Hello":
    if letter == "l":
        continue
    print(letter, end="")
```

*Hint:* continue skips the current character. How many l's are in "Hello"?

**Answer:** `Heo`

The loop iterates through H, e, l, l, o. When the character is 'l' (which appears twice), continue skips the print. So H, e, and o are printed, giving "Heo".

### Q6. [Medium] What is the output?

```
for i in range(5):
    if i == 3:
        break
else:
    print("Loop completed")
print("After loop")
```

*Hint:* The else block runs only if the loop completes WITHOUT a break.

**Answer:** `After loop`

The loop breaks when i = 3. Since break was executed, the else block is skipped. Only "After loop" is printed. The else would have printed "Loop completed" only if the loop finished all 5 iterations without break.

### Q7. [Medium] What is the output?

```
for i in range(5):
    if i == 10:
        break
else:
    print("No break")
print("Done")
```

*Hint:* Will i ever equal 10 in range(5)?

**Answer:** `No break`
`Done`

The condition `i == 10` is never True because range(5) only produces 0-4. The loop completes all iterations without break, so the else block runs, printing "No break". Then "Done" prints.

### Q8. [Medium] What is the output?

```
for i in range(3):
    for j in range(3):
        if j == 1:
            break
        print(i, j)
```

*Hint:* break exits only the inner loop. The outer loop continues.

**Answer:** `0 0`
`1 0`
`2 0`

For each value of i (0, 1, 2): the inner loop starts with j = 0, prints (i, 0). Then j = 1, break exits the inner loop. The outer loop continues with the next i. So only j = 0 is ever printed for each row.

### Q9. [Medium] What is the output?

```
for i in range(1, 6):
    if i % 2 == 0:
        continue
    if i == 5:
        break
    print(i)
```

*Hint:* Even numbers are skipped. The loop stops at 5.

**Answer:** `1`
`3`

i=1: odd (no skip), not 5 (no break), prints 1. i=2: even, continue. i=3: odd, not 5, prints 3. i=4: even, continue. i=5: odd, equals 5, break. Only 1 and 3 are printed.

### Q10. [Medium] What is the output?

```
count = 0
for i in range(10):
    if i % 3 == 0:
        continue
    count += 1
print(count)
```

*Hint:* continue skips multiples of 3. How many numbers from 0-9 are NOT multiples of 3?

**Answer:** `6`

Numbers 0-9 that are multiples of 3: 0, 3, 6, 9 (4 numbers skipped by continue). The remaining 6 numbers (1, 2, 4, 5, 7, 8) increment count. Total: 10 - 4 = 6.

### Q11. [Medium] What is the output?

```
while True:
    print("Hello")
    break
```

*Hint:* while True normally runs forever, but what does break do?

**Answer:** `Hello`

`while True` creates a loop that would run forever. However, `break` is executed immediately after the print, so the loop exits after just one iteration. "Hello" is printed exactly once.

### Q12. [Hard] What is the output?

```
for i in range(3):
    for j in range(3):
        if i == j:
            continue
        print(i, j)
```

*Hint:* continue skips when i equals j (the diagonal). All other pairs are printed.

**Answer:** `0 1`
`0 2`
`1 0`
`1 2`
`2 0`
`2 1`

The nested loop generates all pairs (i, j) where both range from 0 to 2. The continue statement skips pairs where i == j: (0,0), (1,1), (2,2). The remaining 6 pairs are printed.

### Q13. [Hard] What is the output?

```
for i in range(3):
    for j in range(3):
        if j == 2:
            break
    else:
        print("Inner else for i =", i)
```

*Hint:* The else belongs to the inner loop. Does the inner loop ever complete without break?

**Answer:** (No output - nothing is printed)

For every value of i, the inner loop runs with j = 0, 1, 2. When j = 2, break executes. Since break always runs in the inner loop, the inner else block never executes. Nothing is printed.

### Q14. [Hard] What is the output?

```
n = 0
for i in range(1, 5):
    for j in range(1, 5):
        if i * j > 6:
            break
        n += 1
print(n)
```

*Hint:* For each i, count how many j values give i*j <= 6 before break triggers.

**Answer:** `10`

i=1: j=1(1), j=2(2), j=3(3), j=4(4), no break, count 4. i=2: j=1(2), j=2(4), j=3(6), j=4(8>6, break), count 3. i=3: j=1(3), j=2(6), j=3(9>6, break), count 2. i=4: j=1(4), j=2(8>6, break), count 1. Total: 4+3+2+1 = 10.

### Q15. [Hard] What is the output?

```
for i in range(5):
    if i < 2:
        continue
    if i > 3:
        break
    print(i, end=" ")
```

*Hint:* continue skips 0 and 1. break stops at 4. What values remain?

**Answer:** `2 3 `

i=0: 0 < 2, continue (skip). i=1: 1 < 2, continue (skip). i=2: not < 2, not > 3, print 2. i=3: not < 2, not > 3, print 3. i=4: not < 2, 4 > 3, break. Only 2 and 3 are printed.

### Q16. [Medium] What is the difference between break and continue? Give a one-line example of each.

*Hint:* One stops the loop entirely, the other skips to the next iteration.

**Answer:** `break` exits the loop entirely; no more iterations run. `continue` skips the rest of the current iteration and moves to the next one. Example of break: in a loop searching for a name, `if name == target: break` stops searching once found. Example of continue: in a loop processing scores, `if score < 0: continue` skips invalid scores.

Think of it this way: break says "I am done with this entire loop." Continue says "I am done with this particular iteration, but keep the loop going." Break is for stopping early. Continue is for skipping selectively.

### Q17. [Hard] Explain the loop-else pattern. When does the else block run, and when is it skipped? Why is it useful?

*Hint:* Think about what happens when a search succeeds versus when it fails.

**Answer:** The else block on a loop runs only when the loop completes all iterations without encountering a `break`. If break is executed, else is skipped. It is useful for search operations: use break when the target is found, and else handles the 'not found' case. This is cleaner than using a flag variable like `found = False`.

A helpful way to remember: think of loop-else as "no-break-else". The else runs when there was no break. Example: `for name in names: if name == target: print('Found'); break` followed by `else: print('Not found')`. This pattern eliminates the need for a separate Boolean flag.

## Mixed Questions

### Q1. [Easy] What is the output?

```
for i in range(5):
    if i == 0:
        continue
    print(i, end=" ")
```

*Hint:* continue skips i = 0. All other values are printed.

**Answer:** `1 2 3 4 `

When i = 0, continue skips the print. For i = 1, 2, 3, 4, the print executes normally. So the output is 1 2 3 4.

### Q2. [Easy] What is the output?

```
x = 1
while x <= 10:
    if x == 6:
        break
    x += 1
print(x)
```

*Hint:* Trace x: it increments until reaching 6, then break stops the loop.

**Answer:** `6`

x starts at 1. The loop increments x: 2, 3, 4, 5, 6. When x = 6, break executes before the next increment. So x = 6 is printed.

### Q3. [Medium] What is the output?

```
text = "Python"
result = ""
for ch in text:
    if ch in "aeiou":
        continue
    result += ch
print(result)
```

*Hint:* continue skips vowels. Consonants are added to result.

**Answer:** `Pythn`

Iterating through "Python": P (not vowel, add), y (not vowel, add), t (not vowel, add), h (not vowel, add), o (vowel, skip), n (not vowel, add). Result: "Pythn".

### Q4. [Medium] What is the output?

```
nums = [2, 4, 6, 7, 8, 10]
for num in nums:
    if num % 2 != 0:
        print("Found odd:", num)
        break
else:
    print("All even")
```

*Hint:* The loop looks for an odd number. Is there one in the list?

**Answer:** `Found odd: 7`

The loop checks each number. 2, 4, 6 are even (no break). 7 is odd (7 % 2 != 0 is True), so it prints "Found odd: 7" and breaks. Since break was executed, the else block is skipped.

### Q5. [Medium] What is the output?

```
for i in range(4):
    for j in range(4):
        if j > i:
            break
        print("*", end="")
    print()
```

*Hint:* When j exceeds i, the inner loop breaks. How many stars per row?

**Answer:** `*`
`**`
`***`
`****`

Row i=0: j=0 (0>0 is False, print *), j=1 (1>0, break). 1 star. Row i=1: j=0,1 before break at j=2. 2 stars. Row i=2: j=0,1,2 before break at j=3. 3 stars. Row i=3: j=0,1,2,3 (j never exceeds 3). 4 stars.

### Q6. [Medium] What is the output?

```
total = 0
i = 1
while i <= 10:
    if i % 5 == 0:
        i += 1
        continue
    total += i
    i += 1
print(total)
```

*Hint:* Multiples of 5 (5 and 10) are skipped. Sum the rest from 1 to 10.

**Answer:** `40`

Numbers 1-10 excluding multiples of 5 (5, 10): 1+2+3+4+6+7+8+9 = 40. When i = 5 or i = 10, continue skips the addition. Note: i is incremented before continue to avoid an infinite loop.

### Q7. [Hard] What is the output?

```
for i in range(1, 4):
    for j in range(1, 4):
        if i + j == 4:
            break
        print(i, j)
    else:
        print("Row", i, "complete")
```

*Hint:* The else belongs to the inner for loop. It runs only when the inner loop does not break.

**Answer:** `1 1`
`1 2`
`2 1`

i=1: j=1 (1+1=2, print 1 1), j=2 (1+2=3, print 1 2), j=3 (1+3=4, break). Else skipped. i=2: j=1 (2+1=3, print 2 1), j=2 (2+2=4, break). Else skipped. i=3: j=1 (3+1=4, break). Else skipped. All three rows encounter break, so the else block never runs.

### Q8. [Hard] What is the output?

```
for i in range(5):
    if i == 2:
        pass
    if i == 3:
        continue
    if i == 4:
        break
    print(i)
```

*Hint:* pass does nothing (i=2 still prints). continue skips i=3. break stops at i=4.

**Answer:** `0`
`1`
`2`

i=0: no special condition, prints 0. i=1: no special condition, prints 1. i=2: pass does nothing, execution continues, prints 2. i=3: continue skips print. i=4: break exits loop. Output: 0, 1, 2.

### Q9. [Hard] What is the output?

```
found = False
for i in range(2, 5):
    for j in range(2, 5):
        if i * j == 12:
            found = True
            break
    if found:
        break
print(i, j)
```

*Hint:* This uses a flag to break out of both loops. When does i * j first equal 12?

**Answer:** `3 4`

i=2: j=2(4), j=3(6), j=4(8). No match. i=3: j=2(6), j=3(9), j=4(12). found = True, break inner. Check found, break outer. i=3, j=4 at time of exit. Prints 3 4.

### Q10. [Hard] What is the output?

```
for i in range(5):
    for j in range(5):
        if (i + j) % 2 == 0:
            continue
        if j == 3:
            break
        print(i, j, end="  ")
    print()
```

*Hint:* Even sums of i+j are skipped. If j reaches 3, the inner loop breaks.

**Answer:** `0 1  `
`1 0  1 2  `
`2 1  `
`3 0  3 2  `
`4 1  `

For each (i,j): skip if (i+j) even, break if j==3. i=0: j=0(even,skip), j=1(odd,print 0 1), j=2(even,skip), j=3(break). i=1: j=0(odd,print 1 0), j=1(even,skip), j=2(odd,print 1 2), j=3(break). i=2: j=0(even,skip), j=1(odd,print 2 1), j=2(even,skip), j=3(break). i=3: j=0(odd,print 3 0), j=1(even,skip), j=2(odd,print 3 2), j=3(break). i=4: j=0(even,skip), j=1(odd,print 4 1), j=2(even,skip), j=3(break).

### Q11. [Hard] What is the output?

```
i = 0
while i < 10:
    i += 1
    if i % 2 == 0:
        continue
    if i > 7:
        break
    print(i, end=" ")
```

*Hint:* Even numbers skip. Numbers above 7 trigger break. What odd numbers from 1-7 are printed?

**Answer:** `1 3 5 7 `

i increments first: 1(odd, <=7, print), 2(even, skip), 3(odd, <=7, print), 4(even, skip), 5(odd, <=7, print), 6(even, skip), 7(odd, <=7, print), 8(even, skip), 9(odd, >7, break). Output: 1 3 5 7.

### Q12. [Medium] Why is pass necessary in Python? What happens if you write an empty loop without pass?

*Hint:* Python uses indentation for blocks. What happens when a block has no statements?

**Answer:** Python requires every code block (after `if`, `for`, `while`, `def`, etc.) to have at least one statement. An empty block causes an `IndentationError` or `SyntaxError`. `pass` serves as a no-operation placeholder that satisfies this requirement. Example: `for i in range(5):` followed by nothing is a syntax error, but `for i in range(5): pass` is valid.

In languages like C++ or Java, you can use empty braces {} for an empty block. Python does not have braces; it uses indentation. Since an empty indented block is ambiguous (is it empty or is the next line supposed to be indented?), Python requires at least one statement, and pass fills that role.

## Multiple Choice Questions

### Q1. [Easy] What does the break statement do in a loop?

A. Skips the current iteration
B. Exits the loop entirely
C. Pauses the loop temporarily
D. Restarts the loop from the beginning

**Answer:** B

**B is correct.** `break` immediately exits the loop. Option A describes `continue`. Options C and D do not exist as loop control behaviors in Python.

### Q2. [Easy] What does the continue statement do?

A. Exits the loop
B. Skips the current iteration and moves to the next
C. Does nothing
D. Continues the loop forever

**Answer:** B

**B is correct.** `continue` skips the rest of the current iteration's body and moves to the next iteration. Option A describes break. Option C describes pass. Option D is not what continue does.

### Q3. [Easy] What does pass do in Python?

A. Exits the program
B. Skips to the next loop iteration
C. Does absolutely nothing
D. Passes a value to the next iteration

**Answer:** C

**C is correct.** `pass` is a null operation. It does nothing when executed. It is used as a placeholder when a statement is required syntactically but no action is needed.

### Q4. [Easy] Can break be used outside a loop?

A. Yes, it exits the program
B. Yes, it exits the function
C. No, it causes a SyntaxError
D. Yes, but it does nothing

**Answer:** C

**C is correct.** `break` can only be used inside a `for` or `while` loop. Using it outside a loop raises `SyntaxError: 'break' outside loop`.

### Q5. [Medium] In nested loops, which loop does break exit?

A. Both inner and outer loops
B. Only the outermost loop
C. Only the innermost loop it is in
D. All loops in the program

**Answer:** C

**C is correct.** `break` only exits the loop it is directly inside (the innermost loop containing the break). The outer loop continues its iterations. To exit multiple loops, use a flag variable.

### Q6. [Medium] When does the else clause of a for loop execute?

A. On every iteration
B. When the loop encounters an error
C. When break is executed
D. When the loop completes without break

**Answer:** D

**D is correct.** The loop-else runs only when the loop finishes all iterations without a `break`. If break is executed (option C), the else is skipped. It is not triggered by errors (option B) and does not run on each iteration (option A).

### Q7. [Medium] What is the output of: for i in range(3): continue; print(i)?

A. 0 1 2
B. Nothing is printed
C. SyntaxError
D. 0

**Answer:** B

**B is correct.** On every iteration, `continue` executes, which skips `print(i)`. No values are ever printed. The loop runs 3 times but produces no output because continue always skips the print. Note: using semicolons in Python is valid but not recommended.

### Q8. [Medium] What is the main danger of using continue in a while loop?

A. It always causes a SyntaxError
B. It can skip the counter update, causing an infinite loop
C. It exits the loop instead of skipping
D. It only works with for loops

**Answer:** B

**B is correct.** If the counter update (like `i += 1`) is placed after the continue statement in a while loop, continue will skip it, and the loop variable never changes, causing an infinite loop. Always update the counter before continue.

### Q9. [Medium] Which statement is a valid placeholder for an empty code block?

A. break
B. continue
C. pass
D. skip

**Answer:** C

**C is correct.** `pass` is designed to be a no-operation placeholder. break (option A) exits a loop. continue (option B) skips an iteration. skip (option D) is not a Python keyword.

### Q10. [Medium] What happens if a for loop with an else clause iterates over an empty sequence?

A. The else block is skipped
B. The else block runs
C. Python raises an error
D. The loop runs once

**Answer:** B

**B is correct.** If the sequence is empty (like `for i in range(0)`), the loop body never runs, and since no break was encountered, the else block runs. This catches many students off guard.

### Q11. [Hard] What is the output?

```
for i in range(3):
    pass
    print(i, end=" ")
```

A. Nothing is printed
B. 0 1 2
C. pass 0 pass 1 pass 2
D. Error

**Answer:** B

**B is correct.** `pass` does nothing and execution continues to the next statement, which is `print(i)`. So 0, 1, 2 are printed. pass does NOT skip the rest of the loop body like continue does.

### Q12. [Hard] How would you break out of two nested loops?

A. Use break twice on the same line
B. Use 'break 2' to specify the number of loops
C. Use a flag variable and check it after the inner loop
D. Use 'exit()' to stop the program

**Answer:** C

**C is correct.** Python does not support `break 2` (option B) or multiple breaks on one line (option A). The standard approach is to set a flag (like `found = True`) before breaking the inner loop, then check the flag to break the outer loop. `exit()` (option D) terminates the entire program, not just the loops.

### Q13. [Hard] What is the output?

```
x = 0
for i in range(1, 5):
    if i == 3:
        break
    x += i
else:
    x += 100
print(x)
```

A. 103
B. 110
C. 3
D. 100

**Answer:** C

**C is correct.** The loop adds i=1 (x=1) and i=2 (x=3), then breaks at i=3. Since break was executed, the else block (x += 100) is skipped. Final x = 3.

### Q14. [Hard] What is the output?

```
for i in range(5):
    if i == 2:
        continue
    for j in range(5):
        if j == 2:
            break
    print(i, j)
```

A. Prints 4 pairs
B. Prints 5 pairs
C. Prints nothing
D. Error

**Answer:** A

**A is correct.** The outer continue skips i=2 entirely. For i=0,1,3,4: the inner loop runs and breaks at j=2. After the inner loop, print(i, j) runs. So 4 lines are printed: (0,2), (1,2), (3,2), (4,2). The inner break does not affect the outer loop.

### Q15. [Hard] Which is NOT a valid use of pass?

A. Empty function body: def my_func(): pass
B. Empty loop body: for i in range(5): pass
C. Empty if body: if True: pass
D. Replacing break: for i in range(5): pass # exits loop

**Answer:** D

**D is correct (it is NOT a valid use).** `pass` does NOT exit a loop; it does nothing. If you want to exit a loop, use `break`. Options A, B, and C are all valid uses of pass as a placeholder for empty code blocks.

### Q16. [Easy] What is the output of: for i in range(3): break; print("After loop")?

A. 0 1 2 After loop
B. After loop
C. 0 After loop
D. Nothing

**Answer:** B

**B is correct.** The break executes on the very first iteration (i=0), immediately exiting the loop. No values of i are printed. Then "After loop" is printed because it is outside the loop. Note: the semicolon puts two statements on one line.

### Q17. [Hard] What is the output?

```
while False:
    print("Inside")
else:
    print("Else")
```

A. Inside
B. Else
C. Inside Else
D. Nothing

**Answer:** B

**B is correct.** The while condition is False from the start, so the loop body never runs. However, since no break was encountered (the loop simply did not run), the else block executes. This is a subtle but important behavior.

### Q18. [Hard] In this code, how many times does 'Hello' print?

```
for i in range(10):
    if i % 3 == 0:
        continue
    if i == 8:
        break
    print("Hello")
```

A. 4
B. 5
C. 6
D. 7

**Answer:** B

**B is correct.** i=0: skip (0%3==0). i=1: print. i=2: print. i=3: skip (3%3==0). i=4: print. i=5: print. i=6: skip (6%3==0). i=7: print. i=8: break. Total prints: i=1,2,4,5,7 = 5 times.

## Coding Challenges

### Challenge 1. First Negative Number

**Difficulty:** Easy

Given the list [5, 12, 8, -3, 9, -7, 4], write a program that finds and prints the first negative number. Stop searching after finding it.

**Constraints:**

- Use a for loop with break.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
First negative number: -3
```

**Solution:**

```python
numbers = [5, 12, 8, -3, 9, -7, 4]
for num in numbers:
    if num < 0:
        print("First negative number:", num)
        break
```

### Challenge 2. Print Without Vowels

**Difficulty:** Easy

Given the string "Ananya loves coding", write a program that prints the string with all vowels removed.

**Constraints:**

- Use a for loop with continue to skip vowels.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
nny lvs cdng
```

**Solution:**

```python
text = "Ananya loves coding"
for ch in text:
    if ch.lower() in "aeiou":
        continue
    print(ch, end="")
print()
```

### Challenge 3. Sum Until Negative

**Difficulty:** Medium

Given the list [10, 25, 30, -5, 40, 50], write a program that calculates the sum of elements until a negative number is encountered. Stop at the negative number (do not include it).

**Constraints:**

- Use a for loop with break.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Sum before negative: 65
```

**Solution:**

```python
numbers = [10, 25, 30, -5, 40, 50]
total = 0
for num in numbers:
    if num < 0:
        break
    total += num
print("Sum before negative:", total)
```

### Challenge 4. Password Checker Simulation

**Difficulty:** Medium

Simulate a password checker. The correct password is "mac2026". Use a while loop to allow up to 3 attempts. If the correct password is found in the attempts list ["hello", "mac2026", "python"], print "Access granted" and stop. If all 3 fail, print "Account locked".

**Constraints:**

- Use a while loop with break. Use the loop-else pattern.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Attempt 1: hello - Wrong!
Attempt 2: mac2026 - Access granted!
```

**Solution:**

```python
attempts = ["hello", "mac2026", "python"]
correct = "mac2026"
i = 0
while i < len(attempts):
    guess = attempts[i]
    i += 1
    if guess == correct:
        print("Attempt " + str(i) + ": " + guess + " - Access granted!")
        break
    else:
        print("Attempt " + str(i) + ": " + guess + " - Wrong!")
else:
    print("Account locked")
```

### Challenge 5. Skip Multiples

**Difficulty:** Medium

Write a program that prints numbers from 1 to 30, but skips all multiples of 3 and all multiples of 5. Use continue for skipping.

**Constraints:**

- Use a single for loop with continue.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
1 2 4 7 8 11 13 14 16 17 19 22 23 26 28 29
```

**Solution:**

```python
for i in range(1, 31):
    if i % 3 == 0 or i % 5 == 0:
        continue
    print(i, end=" ")
print()
```

### Challenge 6. Find Common Element

**Difficulty:** Hard

Given two lists list1 = [3, 7, 12, 9, 5] and list2 = [8, 5, 14, 3, 20], find and print the first element that appears in both lists. Use nested loops with break.

**Constraints:**

- Use nested for loops with break. Use a flag variable to exit both loops.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
First common element: 3
```

**Solution:**

```python
list1 = [3, 7, 12, 9, 5]
list2 = [8, 5, 14, 3, 20]
found = False
for a in list1:
    for b in list2:
        if a == b:
            print("First common element:", a)
            found = True
            break
    if found:
        break
```

### Challenge 7. Count Digits, Letters, and Spaces

**Difficulty:** Hard

Given the string "Aarav is 14 years old and in class 9", count and print the number of digits, letters, and spaces. Use continue to skip characters that are not in any category.

**Constraints:**

- Use a for loop. Use str.isdigit(), str.isalpha(), and comparison with ' '.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Digits: 3
Letters: 26
Spaces: 8
```

**Solution:**

```python
text = "Aarav is 14 years old and in class 9"
digits = 0
letters = 0
spaces = 0
for ch in text:
    if ch.isdigit():
        digits += 1
    elif ch.isalpha():
        letters += 1
    elif ch == ' ':
        spaces += 1
    else:
        continue
print("Digits:", digits)
print("Letters:", letters)
print("Spaces:", spaces)
```

### Challenge 8. Prime Numbers in Range

**Difficulty:** Hard

Write a program that prints all prime numbers between 2 and 50. Use nested loops with break and the loop-else pattern to check each number for primality.

**Constraints:**

- Use a for loop inside a for loop. Use break when a divisor is found and else to print primes.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
2 3 5 7 11 13 17 19 23 29 31 37 41 43 47
```

**Solution:**

```python
for num in range(2, 51):
    for i in range(2, num):
        if num % i == 0:
            break
    else:
        print(num, end=" ")
print()
```

---

*Notes: https://learn.modernagecoders.com/resources/python/loop-control-statements/*
