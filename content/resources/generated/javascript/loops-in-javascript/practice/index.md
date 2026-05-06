---
title: "Practice: Loops (for, while, for...of, for...in)"
description: "60 practice problems for Loops (for, while, for...of, for...in) in JavaScript"
slug: loops-in-javascript-practice
canonical: https://learn.modernagecoders.com/resources/javascript/loops-in-javascript/practice/
category: "JavaScript"
---
# Practice: Loops (for, while, for...of, for...in)

**Total questions:** 60

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
for (let i = 0; i < 4; i++) {
  console.log(i);
}
```

*Hint:* The loop starts at 0 and runs while i is less than 4.

**Answer:** `0`
`1`
`2`
`3`

The loop starts with i = 0. Each iteration checks `i < 4`. It prints 0, 1, 2, 3. When i becomes 4, the condition `4 < 4` is false, and the loop stops. The number 4 is NOT printed.

### Q2. [Easy] What is the output?

```
for (let i = 1; i <= 5; i++) {
  console.log(i * 2);
}
```

*Hint:* Multiply each value of i by 2.

**Answer:** `2`
`4`
`6`
`8`
`10`

i takes values 1, 2, 3, 4, 5. Each is multiplied by 2: 1*2=2, 2*2=4, 3*2=6, 4*2=8, 5*2=10.

### Q3. [Easy] What is the output?

```
const fruits = ["apple", "mango", "banana"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

*Hint:* for...of gives you each value in the array.

**Answer:** `apple`
`mango`
`banana`

`for...of` loops through the values of the array. The variable `fruit` gets each element one by one: first "apple", then "mango", then "banana".

### Q4. [Easy] What is the output?

```
let count = 3;
while (count > 0) {
  console.log(count);
  count--;
}
```

*Hint:* count starts at 3 and decreases by 1 each time.

**Answer:** `3`
`2`
`1`

Iteration 1: count = 3, prints 3, count becomes 2. Iteration 2: count = 2, prints 2, count becomes 1. Iteration 3: count = 1, prints 1, count becomes 0. Now `0 > 0` is false, so the loop stops.

### Q5. [Easy] What is the output?

```
for (const char of "Hi!") {
  console.log(char);
}
```

*Hint:* for...of on a string gives you each character.

**Answer:** `H`
`i`
`!`

`for...of` iterates over each character of the string "Hi!". It produces three iterations: "H", "i", "!".

### Q6. [Easy] What is the output?

```
for (let i = 10; i >= 6; i--) {
  console.log(i);
}
```

*Hint:* The loop counts down from 10, stopping when i goes below 6.

**Answer:** `10`
`9`
`8`
`7`
`6`

The loop starts at 10 and decrements by 1 each time. It prints 10, 9, 8, 7, 6. When i becomes 5, the condition `5 >= 6` is false, so the loop stops.

### Q7. [Medium] What is the output?

```
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

*Hint:* continue skips the rest of the current iteration.

**Answer:** `1`
`2`
`4`
`5`

When i equals 3, `continue` skips the `console.log` for that iteration and moves to i = 4. So 3 is never printed. All other values (1, 2, 4, 5) are printed normally.

### Q8. [Medium] What is the output?

```
for (let i = 1; i <= 10; i++) {
  if (i === 4) break;
  console.log(i);
}
```

*Hint:* break exits the loop entirely.

**Answer:** `1`
`2`
`3`

The loop prints 1, 2, 3. When i becomes 4, the `break` statement executes before `console.log`, so 4 is never printed and the loop stops immediately.

### Q9. [Medium] What is the output?

```
let x = 1;
while (x < 20) {
  x *= 2;
}
console.log(x);
```

*Hint:* Trace x: 1, 2, 4, 8, 16, ... When does x first reach 20 or more?

**Answer:** `32`

x starts at 1. Each iteration doubles x: 1 -> 2 -> 4 -> 8 -> 16. After x = 16, the condition `16 < 20` is true, so x doubles again to 32. Now `32 < 20` is false, the loop stops. The answer is 32, not 16.

### Q10. [Medium] What is the output?

```
let num = 10;
do {
  console.log(num);
  num += 10;
} while (num < 5);
```

*Hint:* do...while always runs the body at least once before checking the condition.

**Answer:** `10`

The body runs first: prints 10, then num becomes 20. Then the condition `20 < 5` is checked - it is false, so the loop stops. Even though the condition was never true, the body ran once because it is a do...while loop.

### Q11. [Medium] What is the output?

```
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key);
}
```

*Hint:* for...in gives you the property names (keys), not the values.

**Answer:** `a`
`b`
`c`

`for...in` iterates over the property names of the object. It prints "a", "b", "c" (the keys). To get the values, you would use `obj[key]`.

### Q12. [Medium] What is the output?

```
let total = 0;
for (let i = 1; i <= 5; i++) {
  total += i;
}
console.log(total);
```

*Hint:* Add 1 + 2 + 3 + 4 + 5.

**Answer:** `15`

The loop adds each value of i to total: 0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15. The sum of numbers 1 through 5 is 15.

### Q13. [Hard] What is the output?

```
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(i + "," + j);
  }
}
```

*Hint:* The inner loop runs completely (j=1, j=2) for each value of i.

**Answer:** `1,1`
`1,2`
`2,1`
`2,2`
`3,1`
`3,2`

The outer loop runs 3 times (i = 1, 2, 3). For each i, the inner loop runs 2 times (j = 1, 2). Total: 3 x 2 = 6 lines of output. First i=1 with j=1,2, then i=2 with j=1,2, then i=3 with j=1,2.

### Q14. [Hard] What is the output?

```
for (let i = 0; i < 3; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
```

*Hint:* The inner loop runs i+1 times for each row.

**Answer:** `* `
`* * `
`* * * `

Row i=0: j goes from 0 to 0 (1 star). Row i=1: j goes from 0 to 1 (2 stars). Row i=2: j goes from 0 to 2 (3 stars). This creates a right triangle pattern.

### Q15. [Hard] What is the output?

```
const arr = [10, 20, 30, 40];
let result = 0;
for (const val of arr) {
  if (val === 30) break;
  result += val;
}
console.log(result);
```

*Hint:* The loop adds values until it hits 30, then breaks.

**Answer:** `30`

The loop adds 10 (result = 10), then adds 20 (result = 30). When val is 30, `break` executes before the addition, so 30 is not added to result. The final value is 10 + 20 = 30.

### Q16. [Hard] What is the output?

```
let count = 0;
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    if (i === j) count++;
  }
}
console.log(count);
```

*Hint:* How many times does i equal j in a 4x4 grid?

**Answer:** `4`

The pairs where i === j are: (0,0), (1,1), (2,2), (3,3). That is 4 diagonal pairs. The total iterations are 16 (4x4), but only 4 meet the condition.

### Q17. [Medium] What is the difference between for...of and for...in? When should you use each one?

*Hint:* Think about what each loop gives you: values vs keys.

**Answer:** `for...of` iterates over **values** of iterable objects like arrays and strings. `for...in` iterates over **property names (keys)** of objects. Use `for...of` for arrays and strings. Use `for...in` for plain objects. Never use `for...in` on arrays because it gives string indices and can include inherited properties.

Example: for an array `[10, 20, 30]`, `for...of` gives values 10, 20, 30, while `for...in` gives string indices "0", "1", "2". For an object `{a: 1, b: 2}`, `for...in` gives keys "a", "b", while `for...of` throws an error because objects are not iterable.

### Q18. [Easy] What is the difference between break and continue?

*Hint:* One stops the loop entirely, the other skips one iteration.

**Answer:** `break` exits the loop completely - no more iterations run. `continue` skips the rest of the current iteration and moves on to the next one. With `break`, the loop is done. With `continue`, the loop keeps going.

Think of it this way: if you are reading a book, `break` is like closing the book and putting it down. `continue` is like skipping one page and continuing to read the rest.

### Q19. [Hard] What is the output?

```
const word = "JavaScript";
let vowels = 0;
for (const ch of word) {
  if ("aeiouAEIOU".includes(ch)) {
    vowels++;
  }
}
console.log(vowels);
```

*Hint:* Count the vowels in "JavaScript": J-a-v-a-S-c-r-i-p-t.

**Answer:** `3`

The vowels in "JavaScript" are: a (position 2), a (position 4), i (position 8). That is 3 vowels. The loop checks each character against the string of vowels using `includes()`.

### Q20. [Easy] What is the output?

```
for (let i = 0; i < 3; i++) {
  console.log("Hello");
}
```

*Hint:* How many times does the loop run? i goes 0, 1, 2.

**Answer:** `Hello`
`Hello`
`Hello`

The loop runs 3 times (i = 0, 1, 2). Each time it prints "Hello". The value of i is not used in the body, but the loop still runs 3 times.

## Mixed Questions

### Q1. [Easy] What is the output?

```
const nums = [5, 10, 15];
for (const n of nums) {
  console.log(n + 1);
}
```

*Hint:* Add 1 to each element.

**Answer:** `6`
`11`
`16`

for...of gives values 5, 10, 15. Each has 1 added: 5+1=6, 10+1=11, 15+1=16.

### Q2. [Easy] What is the output?

```
let sum = 0;
for (let i = 2; i <= 10; i += 2) {
  sum += i;
}
console.log(sum);
```

*Hint:* i takes values 2, 4, 6, 8, 10. Add them up.

**Answer:** `30`

The loop adds even numbers: 2 + 4 + 6 + 8 + 10 = 30. The step is `i += 2`, so i goes 2, 4, 6, 8, 10.

### Q3. [Medium] What is the output?

```
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}
```

*Hint:* continue skips even numbers.

**Answer:** `1`
`3`
`5`

When i is even (2 or 4), `continue` skips the console.log. When i is odd (1, 3, 5), it prints. This effectively prints only odd numbers from 1 to 5.

### Q4. [Medium] What is the output?

```
const scores = { maths: 95, science: 88, english: 76 };
for (const subject in scores) {
  if (scores[subject] >= 90) {
    console.log(subject);
  }
}
```

*Hint:* Only print subjects where the score is 90 or above.

**Answer:** `maths`

The loop goes through each key in the object. Only maths has a score >= 90 (95). Science is 88 and English is 76, both below 90. So only "maths" is printed.

### Q5. [Medium] What is the output?

```
let result = "";
for (let i = 3; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);
```

*Hint:* The inner loop runs i times. i goes 3, 2, 1.

**Answer:** `***`
`**`
`*`

Row i=3: 3 stars. Row i=2: 2 stars. Row i=1: 1 star. This creates an inverted right triangle pattern.

### Q6. [Medium] What is the output?

```
let i = 5;
while (i > 0) {
  i -= 2;
}
console.log(i);
```

*Hint:* Trace: 5, 3, 1, -1. What stops the loop?

**Answer:** `-1`

i starts at 5: 5->3->1->-1. After i becomes 1, the condition `1 > 0` is true, so i becomes 1-2 = -1. Now `-1 > 0` is false, loop stops. The answer is -1, not 1.

### Q7. [Hard] What is the output?

```
const matrix = [[1, 2], [3, 4], [5, 6]];
for (const row of matrix) {
  for (const val of row) {
    console.log(val);
  }
}
```

*Hint:* The outer loop gets each sub-array. The inner loop gets each value within that sub-array.

**Answer:** `1`
`2`
`3`
`4`
`5`
`6`

The outer `for...of` gives each sub-array: [1,2], [3,4], [5,6]. The inner `for...of` iterates through each sub-array's values. All 6 values are printed in order: 1, 2, 3, 4, 5, 6.

### Q8. [Hard] What is the output?

```
let n = 1;
for (let i = 0; i < 4; i++) {
  n *= 3;
}
console.log(n);
```

*Hint:* Multiply n by 3 four times: 1 * 3 * 3 * 3 * 3.

**Answer:** `81`

n starts at 1. After i=0: n = 1*3 = 3. After i=1: n = 3*3 = 9. After i=2: n = 9*3 = 27. After i=3: n = 27*3 = 81. This calculates 3 to the power of 4.

### Q9. [Hard] What is the output?

```
const text = "hello";
let reversed = "";
for (let i = text.length - 1; i >= 0; i--) {
  reversed += text[i];
}
console.log(reversed);
```

*Hint:* Start from the last character and go backwards.

**Answer:** `olleh`

text.length is 5, so i starts at 4. text[4]='o', text[3]='l', text[2]='l', text[1]='e', text[0]='h'. Concatenating these gives "olleh", the reverse of "hello".

### Q10. [Hard] What is the output?

```
outer:
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) continue outer;
    console.log(i, j);
  }
}
```

*Hint:* continue outer skips to the next iteration of the outer loop, not the inner one.

**Answer:** `0 0`
`1 0`
`2 0`

When j equals 1, `continue outer` skips to the next iteration of the outer loop (not the inner loop). So for each i, only j=0 gets printed. j=1 and j=2 are never printed because the outer loop advances as soon as j hits 1.

### Q11. [Medium] Why should you use let instead of var in a for loop? What problem does var cause?

*Hint:* Think about variable scope and closures.

**Answer:** `var` is function-scoped, meaning there is only one variable shared across all iterations. `let` is block-scoped, creating a new variable for each iteration. With `var`, if you use the loop variable inside a callback (like setTimeout), all callbacks will see the final value of the variable. With `let`, each callback captures its own copy of the variable.

Example: `for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 100); }` prints 3, 3, 3 because all callbacks share the same i (which is 3 after the loop). With `let`, it prints 0, 1, 2 because each iteration has its own i.

### Q12. [Easy] What is the output?

```
for (let i = 0; i < 5; i += 2) {
  console.log(i);
}
```

*Hint:* i starts at 0 and increases by 2 each time.

**Answer:** `0`
`2`
`4`

i goes 0, 2, 4. The next value would be 6, but `6 < 5` is false, so the loop stops. The step is 2, not 1.

### Q13. [Hard] What is the output?

```
let a = 0;
let b = 1;
for (let i = 0; i < 7; i++) {
  let temp = a + b;
  a = b;
  b = temp;
}
console.log(a);
```

*Hint:* This generates Fibonacci numbers. Trace a few iterations.

**Answer:** `13`

This computes Fibonacci numbers. Starting with a=0, b=1: after i=0: a=1, b=1. After i=1: a=1, b=2. After i=2: a=2, b=3. After i=3: a=3, b=5. After i=4: a=5, b=8. After i=5: a=8, b=13. After i=6: a=13, b=21. So a = 13.

## Multiple Choice Questions

### Q1. [Easy] What are the three parts of a for loop in JavaScript?

**Answer:** B

**B is correct.** A for loop has three parts separated by semicolons: initialization (runs once), condition (checked before each iteration), and update (runs after each iteration). The other options use informal terms that are not standard.

### Q2. [Easy] Which loop always runs its body at least once?

**Answer:** C

**C is correct.** The `do...while` loop executes the body first and then checks the condition. This guarantees at least one execution. The other loops check the condition before running the body, so they might not run at all.

### Q3. [Easy] Which loop is best for iterating over array values?

**Answer:** B

**B is correct.** `for...of` is designed to iterate over values of iterable objects like arrays and strings. `for...in` (option A) iterates over keys and should not be used on arrays. while and do...while work but require manual index management.

### Q4. [Easy] What does the break statement do inside a loop?

**Answer:** C

**C is correct.** `break` exits the loop completely, stopping all further iterations. Option A describes `continue`. Options B and D are not real loop behaviors in JavaScript.

### Q5. [Easy] How many times does this loop run? for (let i = 0; i < 6; i++)

**Answer:** B

**B is correct.** The loop starts at i=0 and runs while i < 6. The values of i are 0, 1, 2, 3, 4, 5 - that is 6 iterations. When i becomes 6, the condition fails and the loop stops.

### Q6. [Medium] What does for...in loop over?

**Answer:** B

**B is correct.** `for...in` iterates over the enumerable property names (keys) of an object. While it technically works on arrays (giving string indices), it is designed for objects. Use `for...of` for array values and string characters.

### Q7. [Medium] What is the output of: let i = 10; while (i < 5) { console.log(i); i++; }

**Answer:** C

**C is correct.** The while loop checks the condition before running the body. Since `10 < 5` is false from the start, the body never executes. Nothing is printed.

### Q8. [Medium] What causes an infinite loop?

**Answer:** B

**B is correct.** An infinite loop occurs when the condition never becomes false, usually because the loop variable is not updated correctly. Nested loops (C) and multiple variables (A) are perfectly fine. break (D) actually stops a loop.

### Q9. [Medium] What is the difference between continue and break?

**Answer:** B

**B is correct.** `continue` skips the rest of the current iteration and goes to the next one. `break` exits the loop entirely. Both work in all loop types (for, while, do...while, for...of, for...in).

### Q10. [Medium] Which loop type should you NOT use with arrays?

**Answer:** C

**C is correct.** `for...in` should not be used with arrays because it iterates over indices as strings and can include inherited properties. Use a regular `for` loop or `for...of` for arrays.

### Q11. [Hard] How many times does the inner console.log execute?

```
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
  }
}
```

**Answer:** D

**D is correct.** The outer loop runs 5 times and the inner loop runs 3 times for each outer iteration. Total: 5 x 3 = 15. Option C (8) incorrectly adds instead of multiplying.

### Q12. [Hard] What is the output?

```
for (let i = 0; i < 3; i++) {
  // empty body
}
console.log(typeof i);
```

**Answer:** D

**D is correct.** When you use `let` in a for loop, the variable is scoped to the loop block. After the loop ends, `i` does not exist in the outer scope. Trying to access it throws a ReferenceError. This is different from `var`, which would make i accessible.

### Q13. [Hard] What does the following code create on a webpage?

```
const items = ["A", "B", "C"];
const ul = document.createElement("ul");
for (const item of items) {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
}
```

**Answer:** B

**B is correct.** The code creates a `` element and loops through the array, creating a `` for each item and appending it to the ul. The result is an unordered list with 3 list items: A, B, C.

### Q14. [Hard] What is a labeled statement used for with loops?

**Answer:** B

**B is correct.** Labels like `outer:` allow `break outer` or `continue outer` to affect the labeled loop instead of just the innermost loop. This is useful in nested loops when you want to break out of or continue an outer loop from inside an inner loop.

### Q15. [Easy] What does continue do?

**Answer:** C

**C is correct.** `continue` skips the remaining code in the current iteration and immediately starts the next iteration (after running the update expression in a for loop). It does not stop the loop or restart it.

### Q16. [Medium] What is the correct syntax for a do...while loop?

**Answer:** A

**A is correct.** The syntax is `do { body } while (condition);`. The body comes first, then the while keyword with the condition. Note the semicolon after the closing parenthesis.

### Q17. [Hard] What happens when you use for...of on a regular object?

**Answer:** C

**C is correct.** Regular objects are not iterable, so `for...of` throws a TypeError saying the object is not iterable. Use `for...in` for object keys, or convert with `Object.keys()`/`Object.values()` to make an iterable array.

## Coding Challenges

### Challenge 1. Sum of Odd Numbers

**Difficulty:** Easy

Write a program that uses a for loop to calculate and print the sum of all odd numbers from 1 to 25.

**Constraints:**

- Use a for loop. Do not hardcode the answer.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Sum of odd numbers from 1 to 25: 169
```

**Solution:**

```javascript
let sum = 0;
for (let i = 1; i <= 25; i += 2) {
  sum += i;
}
console.log("Sum of odd numbers from 1 to 25:", sum);
```

### Challenge 2. Reverse a String Using a Loop

**Difficulty:** Easy

Aarav has the string "JavaScript". Write a program using a for loop to print the string in reverse order.

**Constraints:**

- Use a for loop counting backwards. Do not use built-in reverse methods.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
tpircSavaJ
```

**Solution:**

```javascript
const text = "JavaScript";
let reversed = "";
for (let i = text.length - 1; i >= 0; i--) {
  reversed += text[i];
}
console.log(reversed);
```

### Challenge 3. Create 10 Div Elements with Different Colors

**Difficulty:** Easy

Write a loop that creates 10 div elements. Each div should have a different background color from this array: ["red", "orange", "yellow", "green", "teal", "blue", "indigo", "purple", "pink", "brown"]. Set each div's width to 100px, height to 50px, and display the color name as text.

**Constraints:**

- Use a for loop to create elements. Do not write the HTML manually.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
(10 colored divs appear on the webpage, each showing its color name)
```

**Solution:**

```javascript
const colors = ["red", "orange", "yellow", "green", "teal", "blue", "indigo", "purple", "pink", "brown"];

for (let i = 0; i < colors.length; i++) {
  const div = document.createElement("div");
  div.textContent = colors[i];
  div.style.backgroundColor = colors[i];
  div.style.color = "white";
  div.style.width = "100px";
  div.style.height = "50px";
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
  div.style.margin = "4px";
  document.body.appendChild(div);
}
```

### Challenge 4. FizzBuzz

**Difficulty:** Medium

Priya is practicing a classic programming challenge. Write a program that prints numbers 1 to 30. For multiples of 3, print "Fizz". For multiples of 5, print "Buzz". For multiples of both 3 and 5, print "FizzBuzz".

**Constraints:**

- Use a for loop. Check for both 3 and 5 first.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
...
```

**Solution:**

```javascript
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

### Challenge 5. Multiplication Table on a Webpage

**Difficulty:** Medium

Rohan wants to display a 10x10 multiplication table on a webpage using nested loops. Create an HTML table where each cell shows the product of its row and column numbers.

**Constraints:**

- Use nested for loops. Create table, tr, and td elements with JavaScript.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
(A 10x10 HTML table showing products: 1, 2, 3... in row 1; 2, 4, 6... in row 2; etc.)
```

**Solution:**

```javascript
const table = document.createElement("table");
table.style.borderCollapse = "collapse";

for (let i = 1; i <= 10; i++) {
  const tr = document.createElement("tr");
  for (let j = 1; j <= 10; j++) {
    const td = document.createElement("td");
    td.textContent = i * j;
    td.style.border = "1px solid #555";
    td.style.padding = "8px";
    td.style.textAlign = "center";
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

document.body.appendChild(table);
```

### Challenge 6. Count Vowels in a String

**Difficulty:** Medium

Ananya has the string "Modern Age Coders teaches JavaScript". Write a program using for...of to count the number of vowels (a, e, i, o, u - both cases).

**Constraints:**

- Use a for...of loop to iterate through the string.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Vowels: 12
```

**Solution:**

```javascript
const text = "Modern Age Coders teaches JavaScript";
let count = 0;
for (const ch of text) {
  if ("aeiouAEIOU".includes(ch)) {
    count++;
  }
}
console.log("Vowels:", count);
```

### Challenge 7. Build a Student List from an Array of Objects

**Difficulty:** Medium

Kavya has an array of student objects: [{name: "Aarav", grade: "10th"}, {name: "Diya", grade: "9th"}, {name: "Vikram", grade: "11th"}, {name: "Meera", grade: "10th"}]. Use a for...of loop to create an unordered list on the webpage where each item shows "Name - Grade".

**Constraints:**

- Use for...of to loop through the array. Create DOM elements.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
(An unordered list: Aarav - 10th, Diya - 9th, Vikram - 11th, Meera - 10th)
```

**Solution:**

```javascript
const students = [
  { name: "Aarav", grade: "10th" },
  { name: "Diya", grade: "9th" },
  { name: "Vikram", grade: "11th" },
  { name: "Meera", grade: "10th" }
];

const ul = document.createElement("ul");
for (const student of students) {
  const li = document.createElement("li");
  li.textContent = student.name + " - " + student.grade;
  ul.appendChild(li);
}
document.body.appendChild(ul);
```

### Challenge 8. Diamond Pattern

**Difficulty:** Hard

Write a program using nested loops to print a diamond pattern with 5 rows in the top half and 4 in the bottom half (total 9 rows).

**Constraints:**

- Use nested for loops. Build the pattern as a string.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

**Solution:**

```javascript
let pattern = "";
const n = 5;
// Top half
for (let i = 1; i <= n; i++) {
  pattern += " ".repeat(n - i);
  pattern += "*".repeat(2 * i - 1);
  pattern += "\n";
}
// Bottom half
for (let i = n - 1; i >= 1; i--) {
  pattern += " ".repeat(n - i);
  pattern += "*".repeat(2 * i - 1);
  pattern += "\n";
}
console.log(pattern);
```

### Challenge 9. Prime Numbers in a Range

**Difficulty:** Hard

Arjun wants to find all prime numbers between 2 and 50. Write a program using nested loops. For each number, check if it is divisible by any number from 2 to its square root.

**Constraints:**

- Use nested loops. Use break when a divisor is found.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Primes: 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47
```

**Solution:**

```javascript
let primes = "Primes:";
for (let num = 2; num <= 50; num++) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primes += " " + num;
  }
}
console.log(primes);
```

### Challenge 10. Build a Color Grid on a Webpage

**Difficulty:** Hard

Write a program using nested loops to create a 5x5 grid of div elements on a webpage. Each div should be 60px by 60px. Use a different shade of blue for each cell, calculated as: rgb(0, 0, (row * 5 + col) * 10 + 50).

**Constraints:**

- Use nested for loops. Create div elements and style them dynamically.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
(A 5x5 grid of divs with increasingly darker shades of blue)
```

**Solution:**

```javascript
const container = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(5, 60px)";
container.style.gap = "4px";

for (let row = 0; row < 5; row++) {
  for (let col = 0; col < 5; col++) {
    const div = document.createElement("div");
    const blue = (row * 5 + col) * 10 + 50;
    div.style.width = "60px";
    div.style.height = "60px";
    div.style.backgroundColor = `rgb(0, 0, ${blue})`;
    div.style.borderRadius = "4px";
    container.appendChild(div);
  }
}

document.body.appendChild(container);
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/loops-in-javascript/*
