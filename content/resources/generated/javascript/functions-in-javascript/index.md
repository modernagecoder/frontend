---
title: "JavaScript Functions - Regular, Arrow, Callback, IIFE | Modern Age Coders"
description: "Learn JavaScript functions: declarations, expressions, arrow functions, callbacks, default and rest parameters, setTimeout, IIFE, and event handlers. Includes 57 practice questions with coding challenges."
slug: functions-in-javascript
canonical: https://learn.modernagecoders.com/resources/javascript/functions-in-javascript/
category: "JavaScript"
keywords: ["javascript functions", "arrow functions javascript", "callback functions javascript", "javascript function tutorial", "javascript parameters", "javascript return value", "IIFE javascript", "function expression javascript", "javascript event handler function", "javascript setTimeout callback"]
---
# Functions - Regular, Arrow, and Callback

**Difficulty:** Beginner  
**Reading time:** 26 min  
**Chapter:** 7  
**Practice questions:** 57

## What Are Functions in JavaScript?

A **function** is a reusable block of code that performs a specific task. Instead of writing the same code over and over, you put it inside a function and call that function whenever you need it. Think of a function as a recipe: you define the steps once, and you can follow that recipe any time you want to make the dish.

Functions are one of the most important building blocks of JavaScript. They let you organize your code, avoid repetition, and build complex programs from small, manageable pieces.

JavaScript gives you several ways to create functions:

**1. Function Declaration** - The classic way: `function greet() { }`

**2. Function Expression** - Storing a function in a variable: `const greet = function() { }`

**3. Arrow Function** - A shorter syntax introduced in ES6: `const greet = () => { }`

Each style has its own use cases, and you will see all three in real codebases.

## Why Are Functions Important?

Functions are everywhere in JavaScript. Every interactive feature on a website uses functions. Here is why they matter:

### 1. Code Reusability

Instead of copying and pasting the same calculation or logic multiple times, you write it once as a function and call it wherever you need it. If you need to change how it works, you change it in one place.

### 2. Organization

Functions break a large program into smaller, named pieces. Instead of one massive block of code, you have functions like `validateForm()`, `calculateTotal()`, and `displayResults()`. Each function has a clear purpose.

### 3. Event Handling

Every time a user clicks a button, types in a form, or scrolls the page, a function runs. Functions are the backbone of interactivity on the web. You cannot build interactive websites without them.

### 4. Working with Timers and Async Code

Functions are passed to `setTimeout`, `setInterval`, and Promises as callbacks. Understanding how functions work is essential for handling time-based operations and asynchronous code.

### 5. Foundation for Everything Else

Array methods (`map`, `filter`, `reduce`), event listeners, API calls, and frameworks like React are all built on functions. If you understand functions deeply, everything else becomes easier.

## Detailed Explanation

### 1. Function Declaration

A function declaration uses the `function` keyword, followed by a name, parentheses for parameters, and curly braces for the body:

```
function greet() {
  console.log("Hello!");
}

greet(); // Call the function
```

You define the function once and call it by writing its name followed by parentheses. You can call it as many times as you want.

Function declarations are **hoisted**, which means they are moved to the top of their scope before the code runs. You can call a declared function before the line where it is defined:

```
sayHi(); // Works! Function is hoisted

function sayHi() {
  console.log("Hi!");
}
```

### 2. Parameters and Arguments

**Parameters** are the variable names listed in the function definition. **Arguments** are the actual values you pass when calling the function.

```
function greetStudent(name, grade) {
  console.log("Hello, " + name + " from grade " + grade);
}

greetStudent("Aarav", "10th"); // name = "Aarav", grade = "10th"
greetStudent("Priya", "9th");  // name = "Priya", grade = "9th"
```

The function is defined with two parameters: `name` and `grade`. When you call it, you pass the actual values (arguments). The parameters act as local variables inside the function.

### 3. Return Values

A function can send a value back to the caller using the `return` statement. Once `return` executes, the function stops immediately.

```
function add(a, b) {
  return a + b;
}

const result = add(5, 3); // result = 8
console.log(result);
```

If a function does not have a `return` statement, it returns `undefined` by default.

### 4. Default Parameters

You can give parameters default values that are used when no argument is provided:

```
function greet(name = "Student") {
  console.log("Hello, " + name);
}

greet("Rohan"); // Hello, Rohan
greet();        // Hello, Student
```

The default value `"Student"` is used only when the argument is not passed or is `undefined`.

### 5. Rest Parameters (...args)

Rest parameters let a function accept any number of arguments as an array:

```
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3));       // 6
console.log(sum(10, 20, 30, 40)); // 100
```

The three dots (`...`) before the parameter name collect all remaining arguments into an array. This is useful when you do not know how many arguments will be passed.

### 6. Function Expression

A function expression stores a function in a variable. The function itself can be anonymous (no name):

```
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 5)); // 20
```

Unlike function declarations, function expressions are NOT hoisted. You must define them before you call them.

### 7. Arrow Functions (=>)

Arrow functions are a shorter syntax for writing functions, introduced in ES6:

```
// Regular function
const add = function(a, b) {
  return a + b;
};

// Arrow function (same thing)
const addArrow = (a, b) => {
  return a + b;
};

// Even shorter: implicit return (one expression)
const addShort = (a, b) => a + b;

// Single parameter: parentheses optional
const double = n => n * 2;
```

Arrow functions have a few shortcuts: (1) If the body is a single expression, you can omit the curly braces and the `return` keyword. The expression is automatically returned. (2) If there is only one parameter, you can omit the parentheses.

### 8. Callback Functions

A **callback** is a function passed as an argument to another function. The receiving function decides when to call it.

```
function processStudent(name, callback) {
  console.log("Processing: " + name);
  callback(name);
}

function celebrate(studentName) {
  console.log("Congratulations, " + studentName + "!");
}

processStudent("Meera", celebrate);
```

Here, `celebrate` is passed as a callback to `processStudent`. The `processStudent` function calls it when it is ready. Callbacks are fundamental to JavaScript - they are used in event handlers, timers, and asynchronous operations.

### 9. setTimeout and setInterval with Callbacks

`setTimeout` calls a function after a delay. `setInterval` calls a function repeatedly at a fixed interval.

```
// Run once after 2 seconds
setTimeout(function() {
  console.log("2 seconds passed!");
}, 2000);

// Run every 1 second
let count = 0;
const timer = setInterval(function() {
  count++;
  console.log("Tick: " + count);
  if (count >= 5) {
    clearInterval(timer); // Stop after 5 ticks
  }
}, 1000);
```

The first argument to both is a callback function. The second argument is the time in milliseconds (1000ms = 1 second). Use `clearTimeout` and `clearInterval` to cancel them.

### 10. IIFE (Immediately Invoked Function Expression)

An IIFE is a function that runs immediately after it is defined. It is wrapped in parentheses and called right away:

```
(function() {
  const secret = "hidden value";
  console.log("IIFE ran!");
})();

// Arrow function IIFE
(() => {
  console.log("Arrow IIFE ran!");
})();
```

IIFEs create a private scope. Variables declared inside do not leak into the global scope. This was very important before `let` and `const` existed, and is still useful for encapsulation.

### 11. Functions as Event Handlers

In web development, you often attach functions to HTML elements as event handlers. When the user interacts with the element, your function runs:

```
// HTML: Click me

const btn = document.getElementById("myBtn");

btn.addEventListener("click", function() {
  btn.style.backgroundColor = "purple";
  btn.textContent = "Clicked!";
});

// Same thing with an arrow function
btn.addEventListener("click", () => {
  console.log("Button was clicked");
});
```

The function you pass to `addEventListener` is a callback. It waits until the event (click, keypress, etc.) happens, and then it runs.

## Code Examples

### Function Declaration vs Expression vs Arrow

```javascript
// Function declaration (hoisted)
function greet(name) {
  return "Hello, " + name;
}

// Function expression (not hoisted)
const greetExpr = function(name) {
  return "Hi, " + name;
};

// Arrow function (not hoisted)
const greetArrow = (name) => "Hey, " + name;

console.log(greet("Aarav"));
console.log(greetExpr("Priya"));
console.log(greetArrow("Rohan"));
```

All three create functions that do the same thing. The declaration is hoisted (can be called before it is defined). The expression and arrow function must be defined before use. The arrow function uses implicit return since the body is a single expression.

**Output:**

```
Hello, Aarav
Hi, Priya
Hey, Rohan
```

### Parameters, Default Values, and Rest Parameters

```javascript
// Default parameter
function enroll(name, course = "JavaScript") {
  console.log(name + " enrolled in " + course);
}

enroll("Diya", "Python");  // Diya enrolled in Python
enroll("Vikram");           // Vikram enrolled in JavaScript

// Rest parameters
function average(...scores) {
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  return total / scores.length;
}

console.log(average(80, 90, 70));       // 80
console.log(average(95, 85, 75, 65));   // 80
```

Default parameters use a fallback value when no argument is given. Rest parameters (`...scores`) collect any number of arguments into an array. The `average` function works with 3 arguments or 4 arguments or any number - it handles them all.

**Output:**

```
Diya enrolled in Python
Vikram enrolled in JavaScript
80
80
```

### Arrow Function Shortcuts

```javascript
// Full arrow function
const add = (a, b) => {
  return a + b;
};

// Implicit return (single expression)
const multiply = (a, b) => a * b;

// Single parameter - no parentheses needed
const double = n => n * 2;

// No parameters - empty parentheses required
const getRandom = () => Math.floor(Math.random() * 100);

console.log(add(3, 4));       // 7
console.log(multiply(5, 6));   // 30
console.log(double(8));        // 16
console.log(getRandom());      // random number 0-99
```

Arrow functions have shortcuts. If the body is one expression, skip the braces and return keyword. If there is one parameter, skip the parentheses. If there are no parameters, you need empty parentheses `()`. These shortcuts make code more concise.

**Output:**

```
7
30
16
(random number between 0 and 99)
```

### Callback Functions

```javascript
// A function that takes a callback
function processMarks(marks, callback) {
  for (const mark of marks) {
    callback(mark);
  }
}

// Different callbacks for different behavior
function printMark(m) {
  console.log("Score: " + m);
}

function checkPass(m) {
  if (m >= 40) {
    console.log(m + " - Pass");
  } else {
    console.log(m + " - Fail");
  }
}

const marks = [85, 32, 67, 28, 91];
console.log("--- Print ---");
processMarks(marks, printMark);
console.log("--- Check ---");
processMarks(marks, checkPass);
```

The `processMarks` function accepts an array and a callback. It loops through the array and calls the callback for each element. By passing different callbacks (`printMark` vs `checkPass`), the same function behaves differently. This is the power of callbacks.

**Output:**

```
--- Print ---
Score: 85
Score: 32
Score: 67
Score: 28
Score: 91
--- Check ---
85 - Pass
32 - Fail
67 - Pass
28 - Fail
91 - Pass
```

### setTimeout and setInterval

```javascript
// setTimeout - runs once after a delay
console.log("Starting...");
setTimeout(() => {
  console.log("This runs after 1 second");
}, 1000);

// setInterval - runs repeatedly
let ticks = 0;
const timer = setInterval(() => {
  ticks++;
  console.log("Tick " + ticks);
  if (ticks === 3) {
    clearInterval(timer);
    console.log("Timer stopped");
  }
}, 1000);

console.log("This runs immediately (before timeouts)");
```

Both `setTimeout` and `setInterval` take a callback function and a delay in milliseconds. The code after them runs immediately, without waiting. The callbacks run later when the timer fires. Use `clearInterval` to stop a repeating timer.

**Output:**

```
Starting...
This runs immediately (before timeouts)
This runs after 1 second
Tick 1
Tick 2
Tick 3
Timer stopped
```

### IIFE (Immediately Invoked Function Expression)

```javascript
// IIFE with regular function
(function() {
  const message = "I run immediately!";
  console.log(message);
})();

// IIFE with arrow function
(() => {
  const x = 10;
  const y = 20;
  console.log("Sum:", x + y);
})();

// IIFE with a return value
const result = (() => {
  return 42;
})();
console.log("Result:", result);
```

An IIFE is a function wrapped in parentheses that is called immediately with `()` at the end. Variables inside an IIFE are private and do not leak into the global scope. The third example shows that an IIFE can return a value, which gets stored in the variable.

**Output:**

```
I run immediately!
Sum: 30
Result: 42
```

### Functions as Event Handlers (Browser)

```javascript
// Assume HTML: <button id="colorBtn">Change Color</button>

function changeButtonColor(buttonId) {
  const btn = document.getElementById(buttonId);
  const colors = ["#a855f7", "#06b6d4", "#f59e0b", "#ef4444"];
  let index = 0;

  btn.addEventListener("click", () => {
    btn.style.backgroundColor = colors[index];
    btn.style.color = "white";
    index = (index + 1) % colors.length;
  });
}

changeButtonColor("colorBtn");
// Each click cycles through purple, cyan, amber, red
```

This function takes a button's id and adds a click event listener. Each click changes the background color by cycling through an array of colors. The `% colors.length` makes the index wrap around to 0 after reaching the end. This shows how functions and callbacks work together in real web development.

**Output:**

```
(Button changes color on each click: purple, cyan, amber, red, purple...)
```

### Higher-Order Function Pattern

```javascript
// A function that returns a function
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const tenTimes = createMultiplier(10);

console.log(double(5));    // 10
console.log(triple(5));    // 15
console.log(tenTimes(5));  // 50
```

A **higher-order function** is a function that takes a function as an argument or returns a function. Here, `createMultiplier` returns a new function that remembers the `factor`. Each call to `createMultiplier` creates a specialized multiplier function. This pattern is called a **closure**.

**Output:**

```
10
15
50
```

## Common Mistakes

### Calling a Function Without Parentheses

**Wrong:**

```
function sayHello() {
  return "Hello!";
}

const result = sayHello; // Missing ()
console.log(result); // Prints the function itself, not "Hello!"
```

Prints the function code instead of its return value.

**Correct:**

```
function sayHello() {
  return "Hello!";
}

const result = sayHello(); // With ()
console.log(result); // "Hello!"
```

Without parentheses, `sayHello` is just a reference to the function object. You are storing the function itself, not calling it. To actually run the function and get its return value, you need the parentheses: `sayHello()`.

### Forgetting the return Statement

**Wrong:**

```
function add(a, b) {
  a + b; // Calculates but does not return!
}

const sum = add(3, 4);
console.log(sum); // undefined
```

The function returns undefined because there is no return statement.

**Correct:**

```
function add(a, b) {
  return a + b;
}

const sum = add(3, 4);
console.log(sum); // 7
```

If you calculate something inside a function but do not use `return`, the result is thrown away. The function returns `undefined` by default. Always use `return` to send a value back to the caller.

### Arrow Function Returning an Object Literal

**Wrong:**

```
// Trying to return an object
const makeStudent = (name) => { name: name, grade: "10th" };
// JavaScript thinks the braces are a function body!
```

SyntaxError or returns undefined. JavaScript interprets the braces as a block, not an object.

**Correct:**

```
// Wrap the object in parentheses
const makeStudent = (name) => ({ name: name, grade: "10th" });
console.log(makeStudent("Aarav")); // { name: "Aarav", grade: "10th" }
```

When an arrow function implicitly returns an object literal, you must wrap the object in parentheses. Without them, JavaScript thinks the curly braces are the function body, not an object. The parentheses tell JavaScript: this is an expression (an object), not a block.

### Using a Function Expression Before It Is Defined

**Wrong:**

```
sayHi(); // TypeError: sayHi is not a function

const sayHi = function() {
  console.log("Hi!");
};
```

TypeError: sayHi is not a function. Function expressions are NOT hoisted.

**Correct:**

```
const sayHi = function() {
  console.log("Hi!");
};

sayHi(); // Works! Defined before the call.
```

Function declarations are hoisted (you can call them before they appear in code). But function expressions and arrow functions stored in `const` or `let` are NOT hoisted. You must define them before you call them.

### Not Understanding Callback Execution Timing

**Wrong:**

```
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
// Many students expect: A, B, C
// Actual output: A, C, B
```

B prints after C, even though the timeout is 0 milliseconds.

**Correct:**

```
// This is correct behavior!
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
// Output: A, C, B (this is expected!)
```

Even with a 0ms delay, `setTimeout` puts the callback in a queue. JavaScript finishes all synchronous code first (A, then C), and then processes the queue (B). This is how the JavaScript event loop works. Callbacks always run after the current code finishes.

### Confusing Parameters and Arguments

**Wrong:**

```
function greet(name) {
  console.log("Hello, " + name);
}

// Calling with no argument
greet(); // Hello, undefined
```

No error, but prints "Hello, undefined" because no argument was passed.

**Correct:**

```
function greet(name = "friend") {
  console.log("Hello, " + name);
}

greet();        // Hello, friend
greet("Kavya"); // Hello, Kavya
```

If you call a function without providing an argument, the parameter becomes `undefined`. Use default parameters (`name = "friend"`) to handle missing arguments gracefully.

## Summary

- A function is a reusable block of code. Define it once, call it many times. Functions make code organized, readable, and maintainable.
- Function declarations use the function keyword and are hoisted (can be called before they are defined). Function expressions and arrow functions are NOT hoisted.
- Parameters are the variable names in the function definition. Arguments are the actual values passed when calling the function. If fewer arguments are passed, missing parameters become undefined.
- The return statement sends a value back to the caller and stops the function. Without return, a function returns undefined by default.
- Default parameters (name = "value") provide fallback values when arguments are not passed. Rest parameters (...args) collect any number of arguments into an array.
- Arrow functions (=>) are a shorter syntax for functions. With one expression, you can skip braces and return. With one parameter, you can skip parentheses.
- A callback is a function passed as an argument to another function. The receiving function decides when to call it. Callbacks are used in event handlers, timers, and async operations.
- setTimeout runs a callback once after a delay. setInterval runs a callback repeatedly. Use clearTimeout and clearInterval to cancel them.
- An IIFE (Immediately Invoked Function Expression) runs immediately after it is defined. It creates a private scope where variables do not leak into the global scope.
- Functions are the backbone of event handling. You pass functions to addEventListener to respond to user interactions like clicks, key presses, and form submissions.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/javascript/functions-in-javascript/*
*Practice questions: https://learn.modernagecoders.com/resources/javascript/functions-in-javascript/practice/*
