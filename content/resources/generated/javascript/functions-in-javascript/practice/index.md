---
title: "Practice: Functions - Regular, Arrow, and Callback"
description: "57 practice problems for Functions - Regular, Arrow, and Callback in JavaScript"
slug: functions-in-javascript-practice
canonical: https://learn.modernagecoders.com/resources/javascript/functions-in-javascript/practice
category: "JavaScript"
---
# Practice: Functions - Regular, Arrow, and Callback

**Total questions:** 57

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
function greet() {
  console.log("Hello!");
}

greet();
greet();
```

*Hint:* The function is called twice.

**Answer:** `Hello!`
`Hello!`

The function `greet` is called twice. Each call executes the body, printing "Hello!" each time.

### Q2. [Easy] What is the output?

```
function add(a, b) {
  return a + b;
}

console.log(add(3, 7));
```

*Hint:* The function returns the sum of a and b.

**Answer:** `10`

The function adds 3 and 7, returning 10. The `return` statement sends the value back to the caller, and `console.log` prints it.

### Q3. [Easy] What is the output?

```
function multiply(a, b) {
  a * b;
}

console.log(multiply(4, 5));
```

*Hint:* Look carefully - is there a return statement?

**Answer:** `undefined`

The function calculates `a * b` but does not `return` the result. Without a return statement, the function returns `undefined` by default. This is a very common mistake.

### Q4. [Easy] What is the output?

```
const double = (n) => n * 2;

console.log(double(6));
```

*Hint:* This is an arrow function with implicit return.

**Answer:** `12`

The arrow function takes one parameter `n` and returns `n * 2`. Since the body is a single expression without braces, the return is implicit. 6 * 2 = 12.

### Q5. [Easy] What is the output?

```
function greet(name = "Student") {
  console.log("Hello, " + name);
}

greet("Diya");
greet();
```

*Hint:* The second call passes no argument, so the default value is used.

**Answer:** `Hello, Diya`
`Hello, Student`

The first call passes "Diya", so the default is not used. The second call passes nothing, so `name` gets the default value "Student".

### Q6. [Easy] What is the output?

```
sayHello();

function sayHello() {
  console.log("Hello!");
}
```

*Hint:* Function declarations are hoisted.

**Answer:** `Hello!`

Function declarations are hoisted to the top of their scope. So even though `sayHello()` is called before the function definition, it works perfectly. The function is available throughout the scope.

### Q7. [Medium] What is the output?

```
function sum(...nums) {
  let total = 0;
  for (const n of nums) {
    total += n;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));
```

*Hint:* Rest parameters collect all arguments into an array.

**Answer:** `15`

The rest parameter `...nums` collects all 5 arguments into the array [1, 2, 3, 4, 5]. The loop adds them: 1+2+3+4+5 = 15.

### Q8. [Medium] What is the output?

```
const greet = function(name) {
  return "Hi, " + name;
};

console.log(greet("Arjun"));
console.log(typeof greet);
```

*Hint:* A function expression stored in a variable. What is the type of a function?

**Answer:** `Hi, Arjun`
`function`

The function expression is stored in `greet`. Calling it with "Arjun" returns "Hi, Arjun". The `typeof` a function is the string "function".

### Q9. [Medium] What is the output?

```
function test(a, b, c) {
  console.log(a, b, c);
}

test(1, 2);
```

*Hint:* What happens when fewer arguments are passed than parameters?

**Answer:** `1 2 undefined`

The function expects 3 parameters but receives only 2. The missing third parameter `c` becomes `undefined`. JavaScript does not throw an error for missing arguments.

### Q10. [Medium] What is the output?

```
const calc = (a, b, operation) => {
  return operation(a, b);
};

const subtract = (x, y) => x - y;

console.log(calc(10, 3, subtract));
```

*Hint:* subtract is passed as a callback to calc.

**Answer:** `7`

The function `calc` takes two numbers and a callback function `operation`. It calls `operation(10, 3)`, which is `subtract(10, 3)`, which returns 10 - 3 = 7.

### Q11. [Medium] What is the output?

```
function outer() {
  const x = 10;
  function inner() {
    console.log(x);
  }
  inner();
}

outer();
```

*Hint:* Inner functions can access variables from outer functions.

**Answer:** `10`

The `inner` function has access to the variable `x` from its enclosing function `outer`. This is called **closure**. When `inner()` runs, it looks for `x` and finds it in the outer scope.

### Q12. [Hard] What is the output?

```
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
```

*Hint:* The returned function remembers the count variable from createCounter.

**Answer:** `1`
`2`
`3`

This is a closure. `createCounter` returns a function that remembers `count`. Each call to `counter()` increments and returns count. The variable persists between calls because the inner function holds a reference to it.

### Q13. [Hard] What is the output?

```
(function(name) {
  console.log("Hello, " + name);
})("Priya");
```

*Hint:* This is an IIFE with an argument.

**Answer:** `Hello, Priya`

This IIFE (Immediately Invoked Function Expression) is defined and called immediately. The argument "Priya" is passed as the `name` parameter. It prints "Hello, Priya" and then the function is done.

### Q14. [Hard] What is the output?

```
const funcs = [];
for (let i = 0; i < 3; i++) {
  funcs.push(() => i);
}

console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
```

*Hint:* let creates a new variable for each iteration.

**Answer:** `0`
`1`
`2`

Because `let` is block-scoped, each iteration of the loop gets its own `i`. The arrow function in each iteration captures that specific `i`. So funcs[0] returns 0, funcs[1] returns 1, funcs[2] returns 2. With `var`, all three would return 3.

### Q15. [Hard] What is the output?

```
function apply(arr, fn) {
  const result = [];
  for (const item of arr) {
    result.push(fn(item));
  }
  return result;
}

const nums = [1, 2, 3, 4];
console.log(apply(nums, n => n * n));
```

*Hint:* The callback squares each number. What does the result array look like?

**Answer:** `[1, 4, 9, 16]`

The `apply` function loops through each item in the array and calls the callback `fn` on it. The callback `n => n * n` squares each number. The results [1, 4, 9, 16] are collected and returned.

### Q16. [Easy] What is the difference between a parameter and an argument?

*Hint:* One is in the definition, the other is in the call.

**Answer:** A **parameter** is a variable name listed in the function definition (like a placeholder). An **argument** is the actual value you pass when calling the function. In `function greet(name) { }`, `name` is a parameter. In `greet("Aarav")`, `"Aarav"` is an argument.

Think of parameters as the labels on empty boxes. Arguments are the actual things you put in those boxes. The function is defined with parameters and called with arguments.

### Q17. [Medium] What is a callback function? Give a simple example of when you would use one.

*Hint:* A function passed as an argument to another function.

**Answer:** A callback is a function passed as an argument to another function. The receiving function calls it when it is ready. Example: `setTimeout(function() { console.log("Done"); }, 1000)`. Here the anonymous function is a callback that runs after 1 second. Callbacks are used in event handlers, timers, and array methods.

Callbacks allow you to customize behavior. Instead of hardcoding what happens, you let the caller decide by passing a function. The click handler on a button is a callback. The function you pass to forEach is a callback.

### Q18. [Medium] What is the output?

```
const square = n => n * n;
const cube = n => n * n * n;

function applyTo5(fn) {
  return fn(5);
}

console.log(applyTo5(square));
console.log(applyTo5(cube));
```

*Hint:* applyTo5 calls whatever function you pass with the argument 5.

**Answer:** `25`
`125`

`applyTo5(square)` calls `square(5)` which returns 5*5=25. `applyTo5(cube)` calls `cube(5)` which returns 5*5*5=125. The function `applyTo5` is a higher-order function that accepts a callback.

### Q19. [Hard] What is the output?

```
function makeGreeter(greeting) {
  return (name) => greeting + ", " + name + "!";
}

const hello = makeGreeter("Hello");
const namaste = makeGreeter("Namaste");

console.log(hello("Vikram"));
console.log(namaste("Ananya"));
console.log(hello("Kavya"));
```

*Hint:* Each call to makeGreeter returns a new function that remembers the greeting.

**Answer:** `Hello, Vikram!`
`Namaste, Ananya!`
`Hello, Kavya!`

`makeGreeter` returns an arrow function that closes over `greeting`. `hello` remembers "Hello" and `namaste` remembers "Namaste". Each is an independent function with its own captured greeting.

### Q20. [Easy] What is the output?

```
const isEven = n => n % 2 === 0;

console.log(isEven(4));
console.log(isEven(7));
```

*Hint:* The modulo operator % gives the remainder. Even numbers have remainder 0 when divided by 2.

**Answer:** `true`
`false`

4 % 2 is 0, so 0 === 0 is true. 7 % 2 is 1, so 1 === 0 is false. The arrow function returns a boolean.

## Mixed Questions

### Q1. [Easy] What is the output?

```
function max(a, b) {
  if (a > b) return a;
  return b;
}

console.log(max(15, 8));
console.log(max(3, 12));
```

*Hint:* The function returns the larger of two numbers.

**Answer:** `15`
`12`

First call: 15 > 8 is true, returns 15. Second call: 3 > 12 is false, falls through to return 12.

### Q2. [Easy] What is the output?

```
const lengths = ["cat", "elephant", "dog"].map(w => w.length);
console.log(lengths);
```

*Hint:* map transforms each element. The callback returns the length of each word.

**Answer:** `[3, 8, 3]`

The `map` method calls the arrow function on each element. "cat".length is 3, "elephant".length is 8, "dog".length is 3. The result is [3, 8, 3].

### Q3. [Medium] What is the output?

```
function repeat(str, times) {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
}

console.log(repeat("Ha", 3));
console.log(repeat("*", 5));
```

*Hint:* The function concatenates the string 'times' number of times.

**Answer:** `HaHaHa`
`*****`

First call: "Ha" repeated 3 times = "HaHaHa". Second call: "*" repeated 5 times = "*****". The function builds the result string using a loop.

### Q4. [Medium] What is the output?

```
const operations = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b
};

console.log(operations.add(5, 3));
console.log(operations.sub(10, 4));
console.log(operations.mul(6, 7));
```

*Hint:* Functions stored as object properties (methods).

**Answer:** `8`
`6`
`42`

The object `operations` stores three arrow functions as properties. Each is called using dot notation: add(5,3)=8, sub(10,4)=6, mul(6,7)=42.

### Q5. [Medium] What is the output?

```
function first(a) {
  return function second(b) {
    return a + b;
  };
}

console.log(first(10)(20));
```

*Hint:* first(10) returns a function. That function is immediately called with 20.

**Answer:** `30`

`first(10)` returns the `second` function with `a = 10`. Then `(20)` calls that returned function with `b = 20`. It returns 10 + 20 = 30. This is called currying.

### Q6. [Hard] What is the output?

```
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));
```

*Hint:* This is a recursive function. It calls itself with a smaller number each time.

**Answer:** `120`

factorial(5) = 5 * factorial(4) = 5 * 4 * factorial(3) = 5 * 4 * 3 * factorial(2) = 5 * 4 * 3 * 2 * factorial(1) = 5 * 4 * 3 * 2 * 1 = 120. The base case is n <= 1, which returns 1.

### Q7. [Hard] What is the output?

```
const pipeline = [n => n * 2, n => n + 10, n => n / 3];

let value = 5;
for (const fn of pipeline) {
  value = fn(value);
}
console.log(value);
```

*Hint:* Apply each function in sequence: 5 -> *2 -> +10 -> /3.

**Answer:** `6.666666666666667`

Step 1: 5 * 2 = 10. Step 2: 10 + 10 = 20. Step 3: 20 / 3 = 6.666666666666667. Each function in the pipeline transforms the value and passes it to the next.

### Q8. [Hard] What is the output?

```
function compose(f, g) {
  return (x) => f(g(x));
}

const double = n => n * 2;
const addOne = n => n + 1;

const doubleThenAdd = compose(addOne, double);
console.log(doubleThenAdd(5));
```

*Hint:* compose returns a function that applies g first, then f.

**Answer:** `11`

`compose(addOne, double)` returns `(x) => addOne(double(x))`. Calling with 5: double(5) = 10, then addOne(10) = 11. The function g (double) runs first, then f (addOne) runs on the result.

### Q9. [Medium] What is the output?

```
console.log("Start");
setTimeout(() => console.log("Timer"), 0);
console.log("End");
```

*Hint:* Even with 0ms delay, setTimeout is asynchronous.

**Answer:** `Start`
`End`
`Timer`

"Start" prints first. `setTimeout` with 0ms puts the callback in the task queue. "End" prints next (synchronous code runs first). Then "Timer" prints when the event loop processes the queue.

### Q10. [Easy] What is the output?

```
const sayName = (name) => {
  console.log("Name: " + name);
};

sayName("Meera");
```

*Hint:* Arrow function with braces needs no return for console.log.

**Answer:** `Name: Meera`

The arrow function takes "Meera" as the name parameter and logs "Name: Meera". Since we are using `console.log` (side effect) and not returning anything, the braces are fine.

### Q11. [Hard] What is an IIFE and why would you use one?

*Hint:* It stands for Immediately Invoked Function Expression.

**Answer:** An IIFE is a function that is defined and immediately called: `(function() { })();`. It creates a private scope where variables do not pollute the global namespace. It was commonly used before `let` and `const` existed to prevent variable leaks. It is still useful for initialization code that should run once and for module patterns.

Example: `(function() { const secret = 42; })();`. The variable `secret` is completely hidden from the outside. You cannot access it after the IIFE runs. This is useful for one-time setup code or creating isolated scopes.

### Q12. [Hard] What is the output?

```
function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}

const addOnce = once((a, b) => a + b);
console.log(addOnce(3, 4));
console.log(addOnce(10, 20));
console.log(addOnce(100, 200));
```

*Hint:* The function only executes the original function on the first call.

**Answer:** `7`
`7`
`7`

The `once` function wraps another function so it can only run once. The first call computes 3+4=7 and stores it. All subsequent calls return the cached result (7) without running the original function again.

### Q13. [Medium] What is the output?

```
const arr = [1, 2, 3];
arr.forEach((val, idx) => {
  console.log(idx + ": " + val);
});
```

*Hint:* forEach passes each value and its index to the callback.

**Answer:** `0: 1`
`1: 2`
`2: 3`

`forEach` calls the callback for each element, passing the value and the index. The callback prints both: index 0 has value 1, index 1 has value 2, index 2 has value 3.

## Multiple Choice Questions

### Q1. [Easy] What keyword is used to send a value back from a function?

**Answer:** C

**C is correct.** The `return` keyword sends a value back to the caller and stops the function. The other options are not valid JavaScript keywords for this purpose.

### Q2. [Easy] What does a function return if there is no return statement?

**Answer:** C

**C is correct.** By default, JavaScript functions return `undefined` when there is no explicit return statement. This is different from null (option A), which must be returned explicitly.

### Q3. [Easy] Which of these is an arrow function?

**Answer:** B

**B is correct.** Arrow functions use the `=>` syntax. Option A is a function declaration. Option C uses the Function constructor (rarely used). Option D is not valid JavaScript syntax.

### Q4. [Easy] What is the term for a function passed as an argument to another function?

**Answer:** B

**B is correct.** A function passed as an argument to another function is called a **callback**. The receiving function decides when and how to call it. Callbacks are fundamental to JavaScript.

### Q5. [Easy] Which type of function is hoisted in JavaScript?

**Answer:** C

**C is correct.** Only function declarations (using the `function` keyword as a statement) are hoisted. Function expressions and arrow functions stored in variables are NOT hoisted.

### Q6. [Medium] What is the output of: const f = (a, b = 5) => a + b; console.log(f(3));

**Answer:** B

**B is correct.** The parameter `b` has a default value of 5. Since only one argument (3) is passed, `a = 3` and `b = 5`. The function returns 3 + 5 = 8.

### Q7. [Medium] What does rest parameter syntax look like?

**Answer:** B

**B is correct.** Rest parameters use three dots BEFORE the parameter name: `...args`. This collects all remaining arguments into an array. Option D is Python syntax, not JavaScript.

### Q8. [Medium] What does setTimeout do?

**Answer:** B

**B is correct.** `setTimeout` schedules a function to run once after a specified delay. It does NOT pause the program (option A). Option C describes `setInterval`.

### Q9. [Medium] What is an IIFE?

**Answer:** C

**C is correct.** IIFE stands for Immediately Invoked Function Expression. It is a function wrapped in parentheses and called right away: `(function() { })();`. It creates a private scope.

### Q10. [Medium] In the arrow function const f = x => x * 2, why are there no parentheses around x?

**Answer:** B

**B is correct.** Arrow functions allow omitting parentheses when there is exactly one parameter. With zero parameters `() => ...` or multiple parameters `(a, b) => ...`, parentheses are required.

### Q11. [Hard] What is the output?

```
const f = () => {};
console.log(f());
```

**Answer:** C

**C is correct.** The arrow function has an empty body (the `{}` is the function block, not an object literal). With no return statement, it returns `undefined`. If you wanted to return an empty object, you would write `() => ({})`.

### Q12. [Hard] What is a higher-order function?

**Answer:** B

**B is correct.** A higher-order function either takes a function as an argument, returns a function, or both. Examples include `map`, `filter`, `setTimeout`, and `addEventListener`. Option D describes a recursive function.

### Q13. [Hard] What happens when you call a function with more arguments than it has parameters?

**Answer:** B

**B is correct.** Extra arguments are simply ignored. `function f(a) {}` called as `f(1, 2, 3)` just sets a=1 and ignores 2 and 3. No error is thrown. You can access all arguments using rest parameters (`...args`).

### Q14. [Hard] What is the difference between clearTimeout and clearInterval?

**Answer:** B

**B is correct.** `clearTimeout` cancels a one-time timer set by `setTimeout`. `clearInterval` cancels a repeating timer set by `setInterval`. Each is paired with its corresponding timer function.

### Q15. [Easy] What is the output of: function f() {} console.log(typeof f);

**Answer:** B

**B is correct.** Functions in JavaScript have their own type. `typeof` a function returns the string "function". Even though functions are technically objects, typeof distinguishes them.

### Q16. [Medium] What does the ... (spread/rest) syntax do in a function parameter?

**Answer:** B

**B is correct.** When used in function parameters, `...` is the rest syntax. It collects all remaining arguments into an array. `function sum(...nums) {}` called as `sum(1,2,3)` makes nums = [1,2,3].

### Q17. [Hard] What is the output?

```
const f = (x) => x * 2;
console.log(f(f(f(3))));
```

**Answer:** C

**C is correct.** Working from inside out: f(3) = 6, f(6) = 12, f(12) = 24. Each call doubles the input. Three doublings of 3: 3 * 2 * 2 * 2 = 24.

## Coding Challenges

### Challenge 1. Temperature Converter

**Difficulty:** Easy

Write two functions: celsiusToFahrenheit(c) and fahrenheitToCelsius(f). Test them with the values 0, 100, and 72.

**Constraints:**

- Use arrow functions. Formula: F = C * 9/5 + 32 and C = (F - 32) * 5/9.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
0C = 32F
100C = 212F
72F = 22.22C
```

**Solution:**

```javascript
const celsiusToFahrenheit = (c) => c * 9/5 + 32;
const fahrenheitToCelsius = (f) => ((f - 32) * 5/9).toFixed(2);

console.log("0C = " + celsiusToFahrenheit(0) + "F");
console.log("100C = " + celsiusToFahrenheit(100) + "F");
console.log("72F = " + fahrenheitToCelsius(72) + "C");
```

### Challenge 2. Write a Function That Changes a Button's Color

**Difficulty:** Easy

Write a function called changeColor that takes a button's id and a color, and changes the button's background color when called. Test it with two different buttons.

**Constraints:**

- Use document.getElementById and style.backgroundColor.

**Sample input:**

```
(No input required - assumes HTML buttons exist)
```

**Sample output:**

```
(Button with id 'btn1' turns purple, button with id 'btn2' turns teal)
```

**Solution:**

```javascript
function changeColor(buttonId, color) {
  const btn = document.getElementById(buttonId);
  btn.style.backgroundColor = color;
  btn.style.color = "white";
  btn.style.padding = "10px 20px";
  btn.style.border = "none";
  btn.style.borderRadius = "6px";
  btn.style.cursor = "pointer";
}

// Usage:
// changeColor("btn1", "#a855f7");
// changeColor("btn2", "#06b6d4");
```

### Challenge 3. Array Processor with Callback

**Difficulty:** Medium

Kavya wants to build a flexible array processor. Write a function processArray(arr, callback) that applies the callback to each element and returns a new array. Test it with doubling, squaring, and checking if numbers are even.

**Constraints:**

- Write your own processArray function. Do not use built-in map.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Doubled: [2, 4, 6, 8, 10]
Squared: [1, 4, 9, 16, 25]
Is Even: [false, true, false, true, false]
```

**Solution:**

```javascript
function processArray(arr, callback) {
  const result = [];
  for (const item of arr) {
    result.push(callback(item));
  }
  return result;
}

const nums = [1, 2, 3, 4, 5];
console.log("Doubled:", processArray(nums, n => n * 2));
console.log("Squared:", processArray(nums, n => n * n));
console.log("Is Even:", processArray(nums, n => n % 2 === 0));
```

### Challenge 4. Countdown Timer Function

**Difficulty:** Medium

Write a function countdown(seconds) that uses setInterval to count down from the given number to 0, printing each second. When it reaches 0, print "Time's up!" and stop the timer.

**Constraints:**

- Use setInterval and clearInterval. The function should work for any number of seconds.

**Sample input:**

```
countdown(5)
```

**Sample output:**

```
5
4
3
2
1
0
Time's up!
```

**Solution:**

```javascript
function countdown(seconds) {
  let remaining = seconds;
  console.log(remaining);
  const timer = setInterval(() => {
    remaining--;
    console.log(remaining);
    if (remaining === 0) {
      console.log("Time's up!");
      clearInterval(timer);
    }
  }, 1000);
}

countdown(5);
```

### Challenge 5. Function Composition

**Difficulty:** Hard

Arjun wants to chain functions. Write a function compose(...fns) that takes any number of functions and returns a new function that applies them right to left. Test with double, addTen, and half.

**Constraints:**

- Use rest parameters. The rightmost function runs first.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Result: 15 (5 -> double -> addTen -> half = 5*2=10, 10+10=20, 20/2=15... wait let me recalculate: right to left means half first, then addTen, then double)
compose(double, addTen, half)(20) => double(addTen(half(20))) => double(addTen(10)) => double(20) => 40
```

**Solution:**

```javascript
function compose(...fns) {
  return function(x) {
    let result = x;
    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i](result);
    }
    return result;
  };
}

const double = n => n * 2;
const addTen = n => n + 10;
const half = n => n / 2;

const transform = compose(double, addTen, half);
console.log(transform(20)); // half(20)=10, addTen(10)=20, double(20)=40 => 40
```

### Challenge 6. Memoize Function

**Difficulty:** Hard

Meera is learning about optimization. Write a function memoize(fn) that caches the results of expensive function calls. If the same arguments are passed again, return the cached result instead of recalculating.

**Constraints:**

- Use an object or Map to store cached results. Handle single-argument functions.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
First call: (calculates) 25
Second call: (from cache) 25
New call: (calculates) 100
```

**Solution:**

```javascript
function memoize(fn) {
  const cache = {};
  return function(arg) {
    if (arg in cache) {
      console.log("(from cache)");
      return cache[arg];
    }
    console.log("(calculating)");
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}

const square = memoize(n => n * n);
console.log(square(5));  // (calculating) 25
console.log(square(5));  // (from cache) 25
console.log(square(10)); // (calculating) 100
```

### Challenge 7. Debounce Function

**Difficulty:** Hard

Write a debounce function that delays calling the original function until a certain amount of time has passed since the last call. If the function is called again before the delay expires, reset the timer.

**Constraints:**

- Use setTimeout and clearTimeout. Return a new function.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
(Only the last call executes after the delay period)
```

**Solution:**

```javascript
function debounce(fn, delay) {
  let timerId;
  return function(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// Usage example:
const logMessage = debounce((msg) => {
  console.log("Debounced:", msg);
}, 500);

logMessage("first");  // cancelled
logMessage("second"); // cancelled
logMessage("third");  // runs after 500ms
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/functions-in-javascript/*
