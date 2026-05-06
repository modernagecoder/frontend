---
title: "Loops in JavaScript - for, while, for...of, for...in | Modern Age Coders"
description: "Learn JavaScript loops: for loop, while loop, do-while, for...of, for...in, break, continue, and nested loops. Build dynamic HTML lists and multiplication tables. Includes 60 practice questions."
slug: loops-in-javascript
canonical: https://learn.modernagecoders.com/resources/javascript/loops-in-javascript
category: "JavaScript"
keywords: ["javascript for loop", "javascript while loop", "for of loop javascript", "for in loop javascript", "javascript loops tutorial", "nested loops javascript", "javascript loop examples", "do while loop javascript", "break continue javascript", "javascript dynamic html loop"]
---
# Loops (for, while, for...of, for...in)

**Difficulty:** Beginner  
**Reading time:** 24 min  
**Chapter:** 6  
**Practice questions:** 60

## What Are Loops in JavaScript?

A **loop** is a way to repeat a block of code multiple times without writing it out again and again. Imagine you want to print the numbers 1 to 100 on a webpage. Without a loop, you would need 100 separate lines of code. With a loop, you write it once and tell JavaScript how many times to repeat.

JavaScript gives you several types of loops, each suited to different situations:

**1. for loop** - The most common loop. Use it when you know how many times you want to repeat.

**2. while loop** - Repeats as long as a condition is true. Use it when you do not know the exact number of repetitions.

**3. do...while loop** - Like a while loop, but it always runs at least once before checking the condition.

**4. for...of loop** - Loops through the values of arrays, strings, and other iterable objects.

**5. for...in loop** - Loops through the property names (keys) of an object.

Each type of loop is a tool. Learning when to use which one is a big part of becoming a good JavaScript developer.

## Why Are Loops Important?

Loops are everywhere in real web development. Almost every interactive website uses loops behind the scenes. Here is why you need to understand them:

### 1. Building Dynamic Web Pages

When you have a list of products, student names, or blog posts, you use a loop to create HTML elements for each item. Instead of manually writing 50 product cards, you loop through your data and generate them automatically.

### 2. Processing User Data

Forms, surveys, shopping carts - all involve collections of data. Loops let you go through each item, validate it, calculate totals, or transform it into something useful.

### 3. Creating Animations and Games

Game loops, animation frames, countdown timers - these all use loops or loop-like patterns. Every game you have played has a loop running behind the scenes that updates the screen many times per second.

### 4. Working with APIs

When you fetch data from the internet (like weather data or movie listings), it usually comes as an array of objects. You need loops to go through each item and display it on your page.

### 5. Foundation for Array Methods

Methods like `map()`, `filter()`, and `forEach()` are built on top of loops. Understanding basic loops first makes these powerful methods much easier to learn later.

## Detailed Explanation

### 1. The for Loop

The `for` loop is the most common loop in JavaScript. It has three parts inside the parentheses, separated by semicolons:

```
for (initialization; condition; update) {
  // code to repeat
}
```

**Initialization** runs once before the loop starts. Usually, you create a counter variable here. **Condition** is checked before each iteration. If it is true, the loop body runs. If false, the loop stops. **Update** runs after each iteration, usually incrementing or decrementing the counter.

```
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

This prints 0, 1, 2, 3, 4. Here is the step-by-step: (1) `let i = 0` creates the counter. (2) Is `0 < 5`? Yes, run the body. (3) Print 0. (4) `i++` makes i = 1. (5) Is `1 < 5`? Yes, run the body. This continues until i becomes 5, at which point `5 < 5` is false and the loop stops.

#### Counting with Different Steps

You are not limited to incrementing by 1. You can count by 2, 3, or any number:

```
// Count by 2 (even numbers)
for (let i = 2; i <= 10; i += 2) {
  console.log(i); // 2, 4, 6, 8, 10
}

// Count backwards
for (let i = 10; i >= 1; i--) {
  console.log(i); // 10, 9, 8, ... 1
}
```

### 2. The while Loop

A `while` loop checks its condition before each iteration. If the condition is false from the start, the body never runs.

```
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}
```

This prints 1, 2, 3, 4, 5. The variable `count` starts at 1. Each time through the loop, we print it and add 1. When count reaches 6, the condition `6 <= 5` is false, and the loop stops.

Use a while loop when you do not know how many iterations you need. For example, doubling a number until it exceeds 1000 - you do not know in advance how many doublings that takes.

### 3. The do...while Loop

A `do...while` loop is like a while loop, but it checks the condition **after** the body runs. This means the body always executes at least once, even if the condition is false.

```
let num = 10;
do {
  console.log(num);
  num++;
} while (num < 5);
```

This prints 10. Even though `10 < 5` is false, the body runs once before the check happens. This is useful for things like showing a menu at least once, or asking for input at least once.

### 4. The for...of Loop

The `for...of` loop iterates over the **values** of an iterable object like an array or a string. It is cleaner than a traditional for loop when you do not need the index.

```
const fruits = ["apple", "mango", "banana"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

This prints each fruit: apple, mango, banana. You do not have to deal with indices or `.length`. The loop variable `fruit` gets each value automatically.

#### for...of with Strings

```
const name = "Aarav";
for (const char of name) {
  console.log(char);
}
```

This prints each character: A, a, r, a, v. Strings are iterable in JavaScript, so `for...of` works on them directly.

### 5. The for...in Loop

The `for...in` loop iterates over the **property names (keys)** of an object. It is designed for objects, not arrays.

```
const student = { name: "Priya", age: 15, grade: "10th" };
for (const key in student) {
  console.log(key + ": " + student[key]);
}
```

This prints: name: Priya, age: 15, grade: 10th. The loop variable `key` gets each property name, and you use `student[key]` (bracket notation) to access the value.

**Important:** Do not use `for...in` with arrays. It loops over indices as strings, and it can also pick up inherited properties. Use `for...of` or a regular `for` loop for arrays.

### 6. break and continue

The `break` statement exits the loop immediately. The `continue` statement skips the rest of the current iteration and moves to the next one.

```
// break - stop at 5
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i); // prints 1, 2, 3, 4
}

// continue - skip 5
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i); // prints 1, 2, 3, 4, 6, 7, 8, 9, 10
}
```

With `break`, the loop stops entirely when i equals 5. With `continue`, the loop just skips printing 5 but keeps going until 10.

### 7. Nested Loops

A nested loop is a loop inside another loop. For each iteration of the outer loop, the inner loop runs completely from start to finish.

```
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}
```

This prints 9 pairs: (1,1), (1,2), (1,3), (2,1), (2,2), (2,3), (3,1), (3,2), (3,3). The inner loop runs 3 times for EACH iteration of the outer loop, giving 3 x 3 = 9 total iterations.

### 8. Building Dynamic HTML with Loops

One of the most common uses of loops in web development is creating HTML elements dynamically. Instead of hardcoding every list item or card, you loop through your data and build the HTML.

```
const names = ["Aarav", "Priya", "Rohan", "Ananya"];
const ul = document.createElement("ul");

for (const name of names) {
  const li = document.createElement("li");
  li.textContent = name;
  ul.appendChild(li);
}

document.body.appendChild(ul);
```

This creates an unordered list with four list items and adds it to the page. Each iteration creates a new `` element, sets its text, and appends it to the ``. This is how real websites build lists, menus, and grids from data.

### 9. Generating a Multiplication Table on a Webpage

Nested loops are perfect for building tables. Here is how you can generate a multiplication table and display it on a webpage:

```
const table = document.createElement("table");

for (let i = 1; i <= 10; i++) {
  const row = document.createElement("tr");
  for (let j = 1; j <= 10; j++) {
    const cell = document.createElement("td");
    cell.textContent = i * j;
    row.appendChild(cell);
  }
  table.appendChild(row);
}

document.body.appendChild(table);
```

The outer loop creates rows, and the inner loop creates cells within each row. Each cell shows the product of the row number and column number. This gives you a 10x10 multiplication table right on the webpage.

## Code Examples

### for Loop - All Variations

```javascript
// Basic for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0 1 2 3 4

// Counting by 3
for (let i = 0; i <= 15; i += 3) {
  console.log(i);
}
// Output: 0 3 6 9 12 15

// Counting backwards
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
// Output: 5 4 3 2 1
```

The for loop has three parts: initialization (`let i = 0`), condition (`i < 5`), and update (`i++`). You can change the step size with `i += 3` or count backwards with `i--`. The condition is checked before each iteration.

**Output:**

```
0
1
2
3
4
0
3
6
9
12
15
5
4
3
2
1
```

### while and do...while Comparison

```javascript
// while loop
let a = 1;
while (a <= 3) {
  console.log("while:", a);
  a++;
}

// do...while loop - runs at least once
let b = 10;
do {
  console.log("do-while:", b);
  b++;
} while (b < 5);
// b starts at 10, condition 10 < 5 is false,
// but body still runs once
```

The `while` loop checks the condition first. The `do...while` loop runs the body first, then checks. This means `do...while` always executes at least once. In this example, b = 10 and the condition is b < 5, which is false, but the body still prints once.

**Output:**

```
while: 1
while: 2
while: 3
do-while: 10
```

### for...of with Arrays and Strings

```javascript
// for...of with an array
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}

// for...of with a string
const word = "Hello";
for (const char of word) {
  console.log(char);
}
```

`for...of` gives you the values directly. With an array, you get each element. With a string, you get each character. No need to deal with index numbers. This is the cleanest way to loop through arrays when you do not need the index.

**Output:**

```
red
green
blue
H
e
l
l
o
```

### for...in with Objects

```javascript
const student = {
  name: "Kavya",
  age: 16,
  school: "DPS Delhi",
  grade: "11th"
};

for (const key in student) {
  console.log(key + " => " + student[key]);
}
```

`for...in` loops through the property names (keys) of an object. The variable `key` gets each property name as a string. You use bracket notation `student[key]` to access the corresponding value. This is the go-to way to loop through object properties.

**Output:**

```
name => Kavya
age => 16
school => DPS Delhi
grade => 11th
```

### break and continue in Action

```javascript
// break: find the first number divisible by 7
for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log("First multiple of 7:", i);
    break;
  }
}

// continue: print only odd numbers 1-10
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}
```

`break` stops the loop immediately. Here it stops after finding the first multiple of 7 (which is 7). `continue` skips the rest of the current iteration. Here it skips even numbers, so only odd numbers get printed. Both are useful for controlling loop flow.

**Output:**

```
First multiple of 7: 7
1
3
5
7
9
```

### Nested Loops - Star Pattern

```javascript
// Right triangle pattern
let pattern = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  pattern += "\n";
}
console.log(pattern);
```

The outer loop controls the rows (1 to 5). The inner loop runs `i` times for each row, so row 1 gets 1 star, row 2 gets 2 stars, and so on. We build the pattern as a string and print it at the end. Nested loops are essential for grids, tables, and pattern problems.

**Output:**

```
* 
* * 
* * * 
* * * * 
* * * * * 
```

### Building Dynamic HTML List Items with a Loop

```javascript
// This code runs in a browser with an HTML page
const students = ["Aarav", "Meera", "Rohan", "Diya", "Arjun"];
const ul = document.createElement("ul");

for (const student of students) {
  const li = document.createElement("li");
  li.textContent = student;
  li.style.padding = "8px";
  ul.appendChild(li);
}

document.body.appendChild(ul);
// Creates:
// <ul>
//   <li>Aarav</li>
//   <li>Meera</li>
//   <li>Rohan</li>
//   <li>Diya</li>
//   <li>Arjun</li>
// </ul>
```

This is how real websites build lists from data. The loop goes through each student name, creates an `` element, sets its text content, adds some padding, and appends it to a ``. Finally the `` is added to the page. No need to write 5 separate HTML lines.

**Output:**

```
(Creates an unordered list on the webpage with 5 student names)
```

### Generating a Multiplication Table on a Webpage

```javascript
// Creates a 10x10 multiplication table in the browser
const table = document.createElement("table");
table.style.borderCollapse = "collapse";

for (let i = 1; i <= 10; i++) {
  const tr = document.createElement("tr");
  for (let j = 1; j <= 10; j++) {
    const td = document.createElement("td");
    td.textContent = i * j;
    td.style.border = "1px solid #ccc";
    td.style.padding = "8px";
    td.style.textAlign = "center";
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

document.body.appendChild(table);
```

This uses nested loops to build an HTML table. The outer loop creates a `` (table row) for each number 1-10. The inner loop creates 10 `` (table cell) elements within each row, each showing the product. The result is a fully styled multiplication table on the webpage.

**Output:**

```
(Creates a 10x10 multiplication table on the webpage)
```

## Common Mistakes

### Off-by-One Error with < vs <=

**Wrong:**

```
// Rohan wants to print 1 to 10
for (let i = 1; i < 10; i++) {
  console.log(i);
}
// Only prints 1 to 9!
```

Prints 1 to 9 instead of 1 to 10 because < 10 excludes 10.

**Correct:**

```
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

Using `i < 10` means the loop stops when i reaches 10 (since 10 is not less than 10). To include 10, use `i <= 10`. This off-by-one error is extremely common. Always ask yourself: do I want to include the last number or exclude it?

### Infinite Loop - Forgetting to Update the Counter

**Wrong:**

```
let count = 1;
while (count <= 5) {
  console.log(count);
  // Forgot count++!
}
```

Infinite loop! The browser tab will freeze because count never changes.

**Correct:**

```
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}
```

A while loop needs its condition to eventually become false. If you forget to update the counter inside the loop body, the condition stays true forever. Always make sure you have an update statement (`count++`) that moves toward ending the loop.

### Using for...in on Arrays

**Wrong:**

```
const fruits = ["apple", "mango", "banana"];
for (const i in fruits) {
  console.log(typeof i); // "string"!
  console.log(i); // "0", "1", "2" (strings, not numbers)
}
```

for...in gives you string indices, not values. It can also pick up inherited properties.

**Correct:**

```
const fruits = ["apple", "mango", "banana"];
for (const fruit of fruits) {
  console.log(fruit); // "apple", "mango", "banana"
}
```

`for...in` is designed for objects. When used on arrays, it gives you the indices as strings ("0", "1", "2"), not the actual values. Use `for...of` for arrays - it gives you the values directly. This is a very common mistake, even among experienced developers.

### Using var Instead of let in for Loops

**Wrong:**

```
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Prints 3, 3, 3 instead of 0, 1, 2
  }, 100);
}
```

All three timeouts print 3 because var is function-scoped, not block-scoped.

**Correct:**

```
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Prints 0, 1, 2
  }, 100);
}
```

`var` is function-scoped, so there is only one `i` variable shared by all iterations. By the time setTimeout runs, the loop has finished and i is 3. `let` is block-scoped, creating a new `i` for each iteration. Always use `let` in for loops.

### Missing Semicolons in for Loop Syntax

**Wrong:**

```
// Missing semicolons
for (let i = 0, i < 5, i++) {
  console.log(i);
}
```

SyntaxError! The three parts of a for loop must be separated by semicolons, not commas.

**Correct:**

```
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

A for loop uses semicolons (`;`) to separate its three parts: initialization, condition, and update. Using commas instead causes a syntax error. This is a common typo, especially for students coming from other languages.

### Comparing Wrong Loop Type

**Wrong:**

```
// Meera wants to loop through object keys
const person = { name: "Meera", age: 14 };
for (const key of person) {
  console.log(key);
}
```

TypeError: person is not iterable. Objects are not iterable with for...of.

**Correct:**

```
const person = { name: "Meera", age: 14 };
for (const key in person) {
  console.log(key + ": " + person[key]);
}
```

Regular objects are not iterable, so `for...of` does not work on them. Use `for...in` to loop through object keys. If you want to use `for...of`, first convert the object using `Object.keys()`, `Object.values()`, or `Object.entries()`.

## Summary

- The for loop is the most common loop: for (let i = 0; i < n; i++). It has three parts separated by semicolons: initialization, condition, and update.
- The while loop checks its condition before each iteration. If the condition is false from the start, the body never runs. Always include an update to avoid infinite loops.
- The do...while loop checks the condition after the body runs, so it always executes at least once. Useful when you need something to happen at least one time.
- for...of iterates over values of arrays, strings, and other iterables. Use it when you need each value but not the index. It is the cleanest way to loop through arrays.
- for...in iterates over property names (keys) of objects. Do not use it on arrays - use for...of or a regular for loop for arrays instead.
- break exits the loop immediately. continue skips the rest of the current iteration and moves to the next one. Both work in all loop types.
- Nested loops place one loop inside another. The inner loop runs completely for each iteration of the outer loop. A 5x3 nested loop runs 15 total iterations.
- Always use let (not var) in for loop declarations. var is function-scoped and causes bugs with closures and asynchronous code.
- Loops are essential for building dynamic HTML. You can create elements in a loop and append them to the DOM to build lists, tables, and grids from data.
- Off-by-one errors are the most common loop bug. Double-check whether you need < or <= in your condition to include or exclude the boundary value.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/javascript/loops-in-javascript/*
*Practice questions: https://learn.modernagecoders.com/resources/javascript/loops-in-javascript/practice/*
