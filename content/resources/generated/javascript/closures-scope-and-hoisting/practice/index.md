---
title: "Practice: Closures, Scope, and Hoisting"
description: "50 practice problems for Closures, Scope, and Hoisting in JavaScript"
slug: closures-scope-and-hoisting-practice
canonical: https://learn.modernagecoders.com/resources/javascript/closures-scope-and-hoisting/practice/
category: "JavaScript"
---
# Practice: Closures, Scope, and Hoisting

**Total questions:** 50

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
let x = 10;
function foo() {
  console.log(x);
}
foo();
```

*Hint:* Inner functions can access outer (including global) variables.

**Answer:** `10`

The function `foo` accesses the global variable `x` through lexical scope.

### Q2. [Easy] What is the output?

```
function test() {
  let a = 5;
  return a;
}
console.log(test());
// console.log(a);
```

*Hint:* Variables declared inside a function are not accessible outside.

**Answer:** `5` (and the commented line would throw ReferenceError)

The function returns 5, which is logged. The variable `a` is function-scoped and does not exist outside the function. Uncommenting the last line would throw ReferenceError.

### Q3. [Easy] What is the output?

```
console.log(x);
var x = 5;
console.log(x);
```

*Hint:* var declarations are hoisted. The value is NOT hoisted.

**Answer:** `undefined`
`5`

var x is hoisted to the top (initialized to undefined). The first log prints undefined. Then x is assigned 5, so the second log prints 5.

### Q4. [Easy] What is the output?

```
if (true) {
  var a = 10;
  let b = 20;
}
console.log(a);
// console.log(b);
```

*Hint:* var ignores block scope. let respects block scope.

**Answer:** `10` (and the commented line would throw ReferenceError)

var ignores the if block, so `a` is accessible outside. let is block-scoped, so `b` only exists inside the if block.

### Q5. [Medium] What is the output?

```
function make() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const fn = make();
console.log(fn());
console.log(fn());
console.log(fn());
```

*Hint:* The returned function forms a closure over 'count'.

**Answer:** `1`
`2`
`3`

Each call to `fn()` increments and returns the `count` variable that is trapped in the closure. The variable persists between calls.

### Q6. [Medium] What is the output?

```
function greet(greeting) {
  return function(name) {
    return greeting + ", " + name;
  };
}
const hi = greet("Hi");
const hello = greet("Hello");
console.log(hi("Aarav"));
console.log(hello("Priya"));
```

*Hint:* Each call to greet creates a separate closure with its own 'greeting'.

**Answer:** `Hi, Aarav`
`Hello, Priya`

`hi` captures "Hi" and `hello` captures "Hello". Each closure has its own independent copy of the greeting variable.

### Q7. [Medium] What is the output?

```
sayHello();
function sayHello() {
  console.log("Hello!");
}

try { sayBye(); } catch(e) { console.log(e.message); }
var sayBye = function() {
  console.log("Bye!");
};
```

*Hint:* Function declarations are fully hoisted. Function expressions assigned to var are NOT.

**Answer:** `Hello!`
`sayBye is not a function`

Function declaration `sayHello` is fully hoisted and can be called anywhere. The var `sayBye` is hoisted as undefined, so calling it as a function throws TypeError.

### Q8. [Hard] What is the output?

```
var funcs = [];
for (var i = 0; i < 3; i++) {
  funcs.push(function() { return i; });
}
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
```

*Hint:* This is the classic closure trap with var.

**Answer:** `3`
`3`
`3`

All three functions share the same `var i`. By the time any function is called, the loop has finished and `i` is 3. All functions return 3.

### Q9. [Hard] What is the output?

```
var funcs = [];
for (let i = 0; i < 3; i++) {
  funcs.push(function() { return i; });
}
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
```

*Hint:* let creates a new variable for each iteration.

**Answer:** `0`
`1`
`2`

With `let`, each iteration of the loop creates a new block-scoped `i`. Each closure captures its own `i` with the value from that iteration.

### Q10. [Hard] What is the output?

```
function outer() {
  let x = 10;
  function inner() {
    console.log(x);
  }
  x = 20;
  return inner;
}
const fn = outer();
fn();
```

*Hint:* Closures capture a reference to the variable, not a snapshot of its value.

**Answer:** `20`

The closure captures a reference to `x`, not its value at creation time. By the time `fn()` is called, `x` has been changed to 20.

### Q11. [Hard] What is the output?

```
console.log(typeof a);
console.log(typeof b);
var a = 1;
let b = 2;
```

*Hint:* var is hoisted as undefined. But what happens with let?

**Answer:** The first line prints `undefined`. The second line throws `ReferenceError: Cannot access 'b' before initialization`.

`var a` is hoisted and initialized to undefined, so `typeof a` returns "undefined". `let b` is in the Temporal Dead Zone -- accessing it before its declaration throws ReferenceError. The second console.log never executes.

### Q12. [Medium] What is a closure in simple terms? Give a one-sentence definition.

*Hint:* Think about what the inner function remembers.

**Answer:** A closure is a function that retains access to variables from its outer (enclosing) function's scope, even after the outer function has finished executing.

The inner function 'closes over' the variables it references from the outer scope. These variables are kept alive in memory as long as the closure exists.

### Q13. [Hard] What is the Temporal Dead Zone (TDZ) and which variables are affected by it?

*Hint:* Think about what happens between hoisting and the declaration line.

**Answer:** The Temporal Dead Zone is the period between a `let` or `const` variable being hoisted and its actual declaration in the code. During the TDZ, the variable exists (it has been hoisted) but accessing it throws a ReferenceError because it has not been initialized. `var` does NOT have a TDZ -- it is initialized to `undefined` during hoisting.

The TDZ is a safety feature. It catches the mistake of using a variable before declaring it, which var silently allows by returning undefined.

### Q14. [Easy] What is the output?

```
function outer() {
  let x = 5;
  function inner() {
    return x * 2;
  }
  return inner();
}
console.log(outer());
```

*Hint:* inner can access x from outer's scope.

**Answer:** `10`

inner accesses x (5) from outer's scope via lexical scoping and returns 5 * 2 = 10.

### Q15. [Easy] What is the output?

```
const x = 10;
if (true) {
  const x = 20;
  console.log(x);
}
console.log(x);
```

*Hint:* const is block-scoped. The inner x shadows the outer x inside the block.

**Answer:** `20`
`10`

Inside the if block, const x = 20 creates a new block-scoped variable that shadows the outer x. Inside the block, x is 20. Outside, the outer x (10) is still accessible.

### Q16. [Medium] What is the output?

```
function makeAdder(x) {
  return function(y) { return x + y; };
}
const add5 = makeAdder(5);
const add10 = makeAdder(10);
console.log(add5(3) + add10(3));
```

*Hint:* add5 remembers x=5, add10 remembers x=10.

**Answer:** `21`

add5(3) = 5 + 3 = 8. add10(3) = 10 + 3 = 13. 8 + 13 = 21.

### Q17. [Medium] What is the output?

```
for (var i = 0; i < 3; i++) {
  // just looping
}
console.log(i);
```

*Hint:* var is not block-scoped. It leaks out of the for loop.

**Answer:** `3`

var is function-scoped, not block-scoped. After the loop ends, i is 3 and is still accessible outside the loop. With let, this would be a ReferenceError.

### Q18. [Hard] What is the output?

```
function makeCounter() {
  let count = 0;
  return {
    inc: function() { return ++count; },
    get: function() { return count; }
  };
}
const a = makeCounter();
const b = makeCounter();
a.inc(); a.inc(); a.inc();
b.inc();
console.log(a.get());
console.log(b.get());
```

*Hint:* Each makeCounter call creates a separate closure with its own count.

**Answer:** `3`
`1`

a and b have independent closures with their own count variables. a.inc() was called 3 times (count = 3). b.inc() was called once (count = 1). They do not share state.

## Mixed Questions

### Q1. [Easy] What is the output?

```
var a = 1;
function foo() {
  var a = 2;
  console.log(a);
}
foo();
console.log(a);
```

*Hint:* Each function has its own scope. The inner 'a' shadows the outer 'a'.

**Answer:** `2`
`1`

Inside foo, var a creates a new local variable that shadows the global a. foo logs 2. Outside foo, the global a is still 1.

### Q2. [Easy] What is the output?

```
for (let i = 0; i < 3; i++) {
  // just looping
}
try {
  console.log(i);
} catch(e) {
  console.log("Error: i is not defined");
}
```

*Hint:* let is block-scoped. The loop body is a block.

**Answer:** `Error: i is not defined`

With `let`, the variable `i` only exists inside the for loop block. Accessing it outside throws a ReferenceError.

### Q3. [Medium] What is the output?

```
(function() {
  var x = 10;
  console.log(x);
})();
try {
  console.log(x);
} catch(e) {
  console.log("x not defined");
}
```

*Hint:* IIFE creates a function scope. Variables inside are not accessible outside.

**Answer:** `10`
`x not defined`

The IIFE creates its own scope. `x` is accessible inside (prints 10) but not outside (ReferenceError).

### Q4. [Medium] What is the output?

```
function createAdder(x) {
  return function(y) {
    return x + y;
  };
}
const add5 = createAdder(5);
const add10 = createAdder(10);
console.log(add5(3));
console.log(add10(3));
console.log(add5(add10(1)));
```

*Hint:* Each closure remembers its own x. The last line nests the calls.

**Answer:** `8`
`13`
`16`

add5 remembers x=5, add10 remembers x=10. add5(3)=8, add10(3)=13. add10(1)=11, then add5(11)=16.

### Q5. [Medium] What is the output?

```
let a = 1;
function foo() {
  console.log(a);
  let a = 2;
  console.log(a);
}
```

*Hint:* let is hoisted within the function but enters TDZ.

**Answer:** ReferenceError: Cannot access 'a' before initialization

The `let a = 2` inside foo creates a local `a` that shadows the global `a`. But accessing it before the declaration line puts us in the TDZ, causing a ReferenceError. The global `a` is not used because the local `a` exists (it is just not initialized yet).

### Q6. [Hard] What is the output?

```
function createFunctions() {
  var result = [];
  for (var i = 0; i < 3; i++) {
    result.push((function(j) {
      return function() { return j; };
    })(i));
  }
  return result;
}
var fns = createFunctions();
console.log(fns[0]());
console.log(fns[1]());
console.log(fns[2]());
```

*Hint:* The IIFE captures the current value of i as j in each iteration.

**Answer:** `0`
`1`
`2`

The IIFE captures each value of `i` as the parameter `j`. Each inner function closes over its own `j`. This is the pre-let solution to the loop closure trap.

### Q7. [Hard] What is the output?

```
const counter = (function() {
  let count = 0;
  return {
    up: function() { return ++count; },
    down: function() { return --count; },
    value: function() { return count; }
  };
})();

console.log(counter.up());
console.log(counter.up());
console.log(counter.down());
console.log(counter.value());
console.log(counter.count);
```

*Hint:* This is the module pattern. count is private.

**Answer:** `1`
`2`
`1`
`1`
`undefined`

up() increments: 1, 2. down() decrements: 1. value() returns current count: 1. counter.count is undefined because count is a private variable inside the closure, not a property of the returned object.

### Q8. [Hard] What is the output?

```
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log("var: " + i);
  }, 0);
}

for (let j = 1; j <= 3; j++) {
  setTimeout(function() {
    console.log("let: " + j);
  }, 0);
}
```

*Hint:* setTimeout runs after the loop finishes. var shares one i, let creates a j per iteration.

**Answer:** `var: 4`
`var: 4`
`var: 4`
`let: 1`
`let: 2`
`let: 3`

The var loop: by the time setTimeout callbacks run, i is 4 (loop ended). All print "var: 4". The let loop: each iteration has its own j. Callbacks print the captured values: 1, 2, 3.

### Q9. [Hard] Explain why the module pattern works for creating private variables in JavaScript.

*Hint:* Think about what the IIFE does and what the returned object can access.

**Answer:** The module pattern uses an IIFE (Immediately Invoked Function Expression) that declares variables inside its function scope. These variables cannot be accessed from outside the function. The IIFE returns an object with methods that form closures over the private variables. Only these methods can read or modify the private data. Code outside the module can use the methods but cannot directly access the private variables.

This works because: (1) function scope prevents external access to the variables, (2) the returned methods maintain closure references to those variables, and (3) there is no other way to reach the variables. This is JavaScript's way of achieving encapsulation before ES6 classes with # private fields.

## Multiple Choice Questions

### Q1. [Easy] What is scope in JavaScript?

**Answer:** B

**B is correct.** Scope determines where a variable can be accessed. Variables in function scope are only accessible inside that function.

### Q2. [Easy] What is a closure?

**Answer:** B

**B is correct.** A closure is a function plus its lexical environment. It retains access to outer variables even after the outer function has finished executing.

### Q3. [Easy] What does hoisting do to var declarations?

**Answer:** B

**B is correct.** Hoisting moves the `var` declaration to the top of its scope and initializes it to `undefined`. The value assignment stays in its original position.

### Q4. [Easy] Which keyword creates a block-scoped variable?

**Answer:** C

**C is correct.** `let` (and `const`) create block-scoped variables that only exist inside the { } block where they are declared.

### Q5. [Medium] What happens when you access a let variable before its declaration?

**Answer:** C

**C is correct.** let and const have a Temporal Dead Zone. Accessing them before declaration throws ReferenceError. This is different from var, which returns undefined.

### Q6. [Medium] In the classic loop trap, why do all var closures return the same value?

**Answer:** B

**B is correct.** var is function-scoped, not block-scoped. There is only ONE i variable shared by all iterations. By the time callbacks run, the loop is done and i has its final value.

### Q7. [Medium] What is an IIFE?

**Answer:** B

**B is correct.** An IIFE is a function that is defined and immediately executed: `(function() { ... })()`. It creates a private scope.

### Q8. [Medium] Which of these is fully hoisted (both name and body)?

**Answer:** C

**C is correct.** Only function declarations (`function name() { }`) are fully hoisted. Function expressions and arrow functions follow their variable keyword rules.

### Q9. [Hard] Do closures capture variables by value or by reference?

**Answer:** B

**B is correct.** Closures capture a reference to the variable, not its value. If the variable changes after the closure is created, the closure sees the updated value.

### Q10. [Hard] What is the module pattern used for?

**Answer:** B

**B is correct.** The module pattern uses an IIFE to create private variables and returns an object with public methods. The methods form closures over the private variables, providing encapsulation.

### Q11. [Hard] Why does let fix the loop closure trap?

**Answer:** B

**B is correct.** let is block-scoped, and each iteration of a for loop is a new block. So each closure captures its own separate variable with the correct value from that iteration.

### Q12. [Hard] What is lexical scope?

**Answer:** B

**B is correct.** Lexical (or static) scope means the scope is determined by the position of the code when it is written, not when it is executed. Inner functions can access variables from their enclosing scope in the source code.

### Q13. [Easy] What value does a var variable have before it is assigned?

**Answer:** C

**C is correct.** var declarations are hoisted and initialized to undefined. Accessing a var before its assignment line returns undefined.

### Q14. [Medium] What is the main practical use of closures?

**Answer:** B

**B is correct.** Closures are used to create private variables (that cannot be accessed from outside) and to maintain state between calls (like a counter that remembers its count).

### Q15. [Hard] What is the output of: (function(x) { return x * 2; })(5)?

**Answer:** C

**C is correct.** This is an IIFE that takes 5 as an argument and returns 5 * 2 = 10. The function is defined and immediately called.

### Q16. [Medium] In the module pattern, how are private variables created?

**Answer:** B

**B is correct.** Variables declared inside an IIFE are trapped in its function scope. Only the methods returned by the IIFE can access them. Code outside cannot reach them.

### Q17. [Hard] What is the difference between function scope and block scope?

**Answer:** B

**B is correct.** var is function-scoped (only trapped by function boundaries). let/const are block-scoped (trapped by any { } including if, for, while, etc.).

## Coding Challenges

### Challenge 1. Counter with Reset

**Difficulty:** Easy

Create a function makeCounter that returns an object with increment, decrement, getCount, and reset methods. The count variable should be private (not accessible directly from outside).

**Constraints:**

- The count variable must be private. Only the returned methods should be able to access it.

**Sample input:**

```
counter.increment() x3, counter.decrement() x1, counter.getCount()
```

**Sample output:**

```
1, 2, 3, 2, getCount: 2, reset: 0
```

**Solution:**

```javascript
function makeCounter(start) {
  let count = start || 0;
  return {
    increment: function() { return ++count; },
    decrement: function() { return --count; },
    getCount: function() { return count; },
    reset: function() { count = start || 0; return count; }
  };
}

const c = makeCounter(0);
console.log(c.increment()); // 1
console.log(c.increment()); // 2
console.log(c.increment()); // 3
console.log(c.decrement()); // 2
console.log(c.getCount());  // 2
console.log(c.reset());     // 0
console.log(c.count);       // undefined (private!)
```

### Challenge 2. Once Function

**Difficulty:** Easy

Write a function called once that takes a function as an argument and returns a new function that can only be called once. Subsequent calls should return the result of the first call without executing the original function again.

**Constraints:**

- Use a closure to track whether the function has been called.

**Sample input:**

```
const add = once((a, b) => a + b); add(2, 3); add(5, 5);
```

**Sample output:**

```
5, 5 (second call returns cached result)
```

**Solution:**

```javascript
function once(fn) {
  let called = false;
  let result;
  return function() {
    if (!called) {
      result = fn.apply(this, arguments);
      called = true;
    }
    return result;
  };
}

const addOnce = once(function(a, b) {
  console.log("Computing...");
  return a + b;
});
console.log(addOnce(2, 3)); // Computing... 5
console.log(addOnce(5, 5)); // 5 (no Computing...)
console.log(addOnce(10, 10)); // 5 (still cached)
```

### Challenge 3. Rate Limiter

**Difficulty:** Medium

Write a function called createRateLimiter that takes a function and a time limit in milliseconds. It should return a new function that can only be called once within the time limit. Additional calls within the limit are ignored.

**Constraints:**

- Use closure to track the last call time. Use Date.now() for timing.

**Sample input:**

```
const limited = createRateLimiter(fn, 1000); limited(); limited(); (after 1s) limited();
```

**Sample output:**

```
First call: executed. Second call: ignored. After 1s: executed.
```

**Solution:**

```javascript
function createRateLimiter(fn, limit) {
  let lastCalled = 0;
  return function() {
    const now = Date.now();
    if (now - lastCalled >= limit) {
      lastCalled = now;
      return fn.apply(this, arguments);
    }
    console.log("Rate limited, try again later");
    return undefined;
  };
}

const limitedLog = createRateLimiter(function(msg) {
  console.log("Logged: " + msg);
}, 1000);

limitedLog("hello");  // Logged: hello
limitedLog("world");  // Rate limited
// After 1 second:
// limitedLog("again"); // Logged: again
```

### Challenge 4. Private Collection

**Difficulty:** Medium

Create a function called createCollection that returns an object with add, remove, has, getAll, and size methods. The internal array should be completely private. getAll should return a copy, not the original.

**Constraints:**

- Use closures for privacy. getAll must return a copy. Prevent duplicates.

**Sample input:**

```
add('Aarav'), add('Priya'), has('Aarav'), remove('Aarav'), size()
```

**Sample output:**

```
add: true, add: true, has: true, remove: true, size: 1
```

**Solution:**

```javascript
function createCollection() {
  const items = [];
  return {
    add: function(item) {
      if (!items.includes(item)) {
        items.push(item);
        return true;
      }
      return false;
    },
    remove: function(item) {
      const idx = items.indexOf(item);
      if (idx !== -1) {
        items.splice(idx, 1);
        return true;
      }
      return false;
    },
    has: function(item) { return items.includes(item); },
    getAll: function() { return [...items]; },
    size: function() { return items.length; }
  };
}

const col = createCollection();
console.log(col.add("Aarav"));   // true
console.log(col.add("Priya"));   // true
console.log(col.add("Aarav"));   // false (duplicate)
console.log(col.has("Aarav"));   // true
console.log(col.remove("Aarav")); // true
console.log(col.size());          // 1
```

### Challenge 5. Fix the Loop Closure Bug

**Difficulty:** Hard

The following code has a bug. Each button should log its own index when clicked, but all buttons log 5. Fix it using three different approaches: (1) let, (2) IIFE, (3) closure function.

**Constraints:**

- Provide three different solutions.

**Sample input:**

```
5 buttons created in a loop with var
```

**Sample output:**

```
Click button 0 -> logs 0, click button 1 -> logs 1, etc.
```

**Solution:**

```javascript
// BUGGY CODE:
// for (var i = 0; i < 5; i++) {
//   buttons[i].addEventListener('click', function() { console.log(i); });
// }

// FIX 1: Use let
for (let i = 0; i < 5; i++) {
  buttons[i].addEventListener('click', function() { console.log(i); });
}

// FIX 2: IIFE
for (var i = 0; i < 5; i++) {
  (function(j) {
    buttons[j].addEventListener('click', function() { console.log(j); });
  })(i);
}

// FIX 3: Closure function
function createHandler(index) {
  return function() { console.log(index); };
}
for (var i = 0; i < 5; i++) {
  buttons[i].addEventListener('click', createHandler(i));
}
```

### Challenge 6. Function Pipeline Builder

**Difficulty:** Hard

Write a function called pipe that takes multiple functions as arguments and returns a new function that applies them left to right. pipe(double, addOne)(5) should return 11 (5*2 = 10, 10+1 = 11).

**Constraints:**

- Use closures and reduce. The piped function should work with any number of functions.

**Sample input:**

```
pipe(double, addOne, square)(3)
```

**Sample output:**

```
49 (3*2=6, 6+1=7, 7*7=49)
```

**Solution:**

```javascript
function pipe() {
  const fns = Array.from(arguments);
  return function(input) {
    return fns.reduce(function(result, fn) {
      return fn(result);
    }, input);
  };
}

function double(x) { return x * 2; }
function addOne(x) { return x + 1; }
function square(x) { return x * x; }

const transform = pipe(double, addOne, square);
console.log(transform(3)); // 49 (3*2=6, +1=7, 7^2=49)
console.log(transform(5)); // 121 (5*2=10, +1=11, 11^2=121)

const simple = pipe(double, double);
console.log(simple(4)); // 16 (4*2=8, 8*2=16)
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/closures-scope-and-hoisting/*
