---
title: "Closures, Scope, and Hoisting in JavaScript - Lexical Scope, Closure Patterns, var vs let | Modern Age Coders"
description: "Master JavaScript closures, scope, and hoisting. Learn global/function/block scope, lexical scope, closures (counter factory, private variables, memoization), hoisting (var vs let/const temporal dead zone), IIFE, module pattern, and classic interview closure questions. 56+ practice questions."
slug: closures-scope-and-hoisting
canonical: https://learn.modernagecoders.com/resources/javascript/closures-scope-and-hoisting
category: "JavaScript"
keywords: ["javascript closures", "javascript scope", "javascript hoisting", "lexical scope javascript", "closure in loop", "var vs let hoisting", "temporal dead zone", "iife javascript", "module pattern javascript", "javascript closure interview questions"]
---
# Closures, Scope, and Hoisting

**Difficulty:** Advanced  
**Reading time:** 55 min  
**Chapter:** 24  
**Practice questions:** 50

## What Are Closures, Scope, and Hoisting?

These three concepts explain how JavaScript manages variables -- where they are accessible, how long they live, and some surprising behaviors that trip up even experienced developers.

- **Scope** determines where a variable can be accessed. If Aarav declares a variable inside a function, it cannot be used outside that function.
- **Closures** happen when an inner function remembers the variables from its outer function, even after the outer function has finished running. It is like a function carrying a backpack of variables.
- **Hoisting** is JavaScript's behavior of moving variable and function declarations to the top of their scope before execution. It explains why some code works in surprising ways.

```
// Closure example -- the inner function remembers 'count'
function createCounter() {
  let count = 0;          // This variable lives in the outer function
  return function() {     // This inner function is a closure
    count++;              // It can access 'count' even after createCounter returns
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
// The 'count' variable is private -- no one else can access it
```

## Why Are These Concepts Important?

### 1. Understanding How JavaScript Actually Works

If you do not understand scope and closures, you will be confused by bugs that seem impossible. Variables appearing as undefined when you expected a value, loops behaving strangely, and callbacks not having access to data they should -- all of these are scope and closure issues.

### 2. The #1 JavaScript Interview Topic

"Explain closures" and "What is the output of this code?" are the most common JavaScript interview questions. The classic loop-with-closure trap question (var vs let inside a for loop) appears in almost every interview. Understanding these concepts deeply will make you stand out.

### 3. Foundation for Design Patterns

Closures enable powerful patterns: private variables (data hiding), factory functions (creating customized functions), memoization (caching expensive computations), and the module pattern (organizing code). React hooks (useState, useEffect) are built on closures.

### 4. Debugging Superpowers

When Priya sees a variable that is undefined when it should have a value, understanding scope tells her exactly where to look. When Rohan sees a stale value in a callback, understanding closures tells him why. These concepts turn mysterious bugs into obvious fixes.

## Detailed Explanation

### 1. Global Scope

Variables declared outside any function or block are in the global scope. They are accessible everywhere in your code:

```
const appName = "My App";  // Global scope
let userCount = 0;          // Global scope

function greet() {
  console.log(appName);    // Can access global variables
  userCount++;
}

greet();
console.log(userCount);     // 1

// Global variables are accessible in all functions, if-blocks, loops, etc.
// But this is usually a BAD practice -- too many globals cause name conflicts
```

### 2. Function Scope

Variables declared inside a function are only accessible inside that function. They do not exist outside:

```
function calculateTotal() {
  const tax = 0.18;        // Function scope -- only exists inside calculateTotal
  const price = 100;
  return price + price * tax;
}

console.log(calculateTotal()); // 118
// console.log(tax);           // ReferenceError: tax is not defined
// console.log(price);         // ReferenceError: price is not defined
```

Each function call creates a NEW scope. Variables from one call do not interfere with another:

```
function add(a, b) {
  const result = a + b;   // Each call has its own 'result'
  return result;
}
add(1, 2);  // result = 3 (in this call)
add(3, 4);  // result = 7 (in this call) -- completely independent
```

### 3. Block Scope (let and const)

`let` and `const` are block-scoped. A block is anything between `{` and `}`:

```
if (true) {
  let x = 10;     // Block scope -- only exists inside this { }
  const y = 20;   // Block scope
  var z = 30;     // NOT block-scoped! var ignores blocks!
}

// console.log(x);  // ReferenceError: x is not defined
// console.log(y);  // ReferenceError: y is not defined
console.log(z);     // 30 -- var leaks out of blocks!

// This is why you should always use let/const instead of var
for (let i = 0; i < 3; i++) {
  // i only exists inside this loop
}
// console.log(i); // ReferenceError: i is not defined
```

### 4. Lexical Scope

Lexical scope means an inner function can access variables from its outer function. The scope is determined by where the function is written in the code, not where it is called:

```
function outer() {
  const message = "Hello from outer";

  function inner() {
    console.log(message);  // inner can access outer's variables
  }

  inner();
}

outer(); // "Hello from outer"

// Nested three levels deep
function level1() {
  const a = "level 1";
  function level2() {
    const b = "level 2";
    function level3() {
      console.log(a);  // Can access level1's variable
      console.log(b);  // Can access level2's variable
    }
    level3();
  }
  level2();
}
level1();
```

### 5. What Is a Closure?

A closure is created when an inner function retains access to its outer function's variables even after the outer function has returned. The inner function "closes over" the variables it needs:

```
function createGreeter(greeting) {
  // 'greeting' is captured by the closure
  return function(name) {
    return greeting + ", " + name + "!";
  };
}

const sayHello = createGreeter("Hello");
const sayNamaste = createGreeter("Namaste");

console.log(sayHello("Aarav"));    // "Hello, Aarav!"
console.log(sayNamaste("Priya"));  // "Namaste, Priya!"

// createGreeter has already returned, but the inner functions
// still remember their 'greeting' values
```

Each call to `createGreeter` creates a separate closure with its own `greeting` variable. sayHello remembers "Hello" and sayNamaste remembers "Namaste".

### 6. Practical Closure: Counter Factory

```
function createCounter(start) {
  let count = start || 0;

  return {
    increment: function() { count++; return count; },
    decrement: function() { count--; return count; },
    getCount: function() { return count; },
    reset: function() { count = start || 0; return count; }
  };
}

const counter1 = createCounter(0);
const counter2 = createCounter(100);

console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2
console.log(counter2.increment()); // 101
console.log(counter1.getCount());  // 2
console.log(counter2.getCount());  // 101
// Each counter has its own private 'count' variable
```

### 7. Practical Closure: Private Variables

```
function createUser(name, age) {
  // These are private -- no one can access them directly
  let _name = name;
  let _age = age;

  return {
    getName: function() { return _name; },
    getAge: function() { return _age; },
    setAge: function(newAge) {
      if (newAge > 0 && newAge < 150) {
        _age = newAge;
        return true;
      }
      return false;
    },
    toString: function() {
      return _name + " (age " + _age + ")";
    }
  };
}

const user = createUser("Aarav", 15);
console.log(user.getName()); // "Aarav"
console.log(user.getAge());  // 15
user.setAge(16);
console.log(user.toString()); // "Aarav (age 16)"
// user._name is undefined -- the variable is truly private
```

### 8. Practical Closure: Memoization

```
function memoize(fn) {
  const cache = {};   // Closure captures this cache
  return function(n) {
    if (cache[n] !== undefined) {
      console.log("  Cache hit for " + n);
      return cache[n];
    }
    console.log("  Computing " + n);
    cache[n] = fn(n);
    return cache[n];
  };
}

function slowSquare(n) {
  return n * n;
}

const fastSquare = memoize(slowSquare);
console.log(fastSquare(5));  // Computing 5 -> 25
console.log(fastSquare(5));  // Cache hit for 5 -> 25
console.log(fastSquare(3));  // Computing 3 -> 9
console.log(fastSquare(3));  // Cache hit for 3 -> 9
```

### 9. Hoisting: var Declarations

JavaScript hoists `var` declarations (but not their values) to the top of the function scope:

```
console.log(x); // undefined (not ReferenceError!)
var x = 10;
console.log(x); // 10

// JavaScript interprets the above as:
var x;           // Declaration hoisted to top
console.log(x);  // undefined (declared but not assigned)
x = 10;          // Assignment stays in place
console.log(x);  // 10
```

### 10. Hoisting: let and const (Temporal Dead Zone)

`let` and `const` are also hoisted, but they are NOT initialized. Accessing them before declaration throws a ReferenceError. The period between hoisting and declaration is called the Temporal Dead Zone (TDZ):

```
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;
console.log(a);   // 5

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 10;
console.log(b);   // 10

// var does NOT have a TDZ -- it returns undefined
console.log(c);   // undefined
var c = 15;
```

### 11. Hoisting: Function Declarations vs Expressions

Function declarations are fully hoisted (you can call them before they appear). Function expressions are NOT:

```
// Function declaration -- fully hoisted
sayHello();  // Works! "Hello!"
function sayHello() {
  console.log("Hello!");
}

// Function expression -- NOT hoisted
// sayBye();  // TypeError: sayBye is not a function
var sayBye = function() {
  console.log("Bye!");
};
sayBye();    // Works now

// Arrow function expression -- also NOT hoisted
// greet();  // ReferenceError: Cannot access 'greet' before initialization
const greet = () => console.log("Hi!");
greet();     // Works now
```

### 12. The Classic Closure-in-Loop Trap

This is the most famous JavaScript interview question. With `var`, all iterations share the same variable:

```
// THE TRAP -- var in a loop
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);  // All print 3!
  }, 100);
}
// Output: 3, 3, 3
// By the time setTimeout callbacks run, the loop is done and i is 3.
// All three closures share the SAME 'i' variable.

// THE FIX -- use let
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);  // Prints 0, 1, 2
  }, 100);
}
// Output: 0, 1, 2
// let creates a new 'i' for each iteration. Each closure has its own copy.
```

### 13. IIFE Pattern (Immediately Invoked Function Expression)

An IIFE creates a scope to avoid polluting the global scope:

```
(function() {
  const secret = "hidden";
  console.log("IIFE running");
  // 'secret' is not accessible outside this function
})();

// console.log(secret); // ReferenceError

// IIFE with parameters
(function(name) {
  console.log("Hello, " + name);
})("Aarav");
// Output: "Hello, Aarav"
```

### 14. Module Pattern Using Closures

```
const Calculator = (function() {
  // Private state
  let history = [];

  // Private function
  function record(operation) {
    history.push(operation);
  }

  // Public API (returned object)
  return {
    add: function(a, b) {
      const result = a + b;
      record(a + " + " + b + " = " + result);
      return result;
    },
    subtract: function(a, b) {
      const result = a - b;
      record(a + " - " + b + " = " + result);
      return result;
    },
    getHistory: function() {
      return [...history]; // Return a copy
    }
  };
})();

console.log(Calculator.add(5, 3));       // 8
console.log(Calculator.subtract(10, 4)); // 6
console.log(Calculator.getHistory());
// ["5 + 3 = 8", "10 - 4 = 6"]
// Calculator.history is undefined -- it is private!
```

## Code Examples

### Scope Types: Global, Function, Block

```javascript
// --- Global Scope ---
const globalVar = "I am global";

function testScope() {
  // --- Function Scope ---
  const funcVar = "I am in a function";
  console.log(globalVar);  // Accessible
  console.log(funcVar);    // Accessible

  if (true) {
    // --- Block Scope ---
    let blockLet = "let is block-scoped";
    const blockConst = "const is block-scoped";
    var blockVar = "var ignores blocks!";
    console.log(blockLet);    // Accessible inside block
  }

  // console.log(blockLet);   // ReferenceError!
  // console.log(blockConst); // ReferenceError!
  console.log(blockVar);      // "var ignores blocks!" -- var leaks out
}

testScope();
console.log(globalVar);     // Accessible
// console.log(funcVar);    // ReferenceError -- function scope
// console.log(blockVar);   // ReferenceError -- function scope (var is function-scoped)

// Key lesson: let/const respect blocks. var only respects functions.
```

Global variables are accessible everywhere. Function variables are only accessible inside the function. `let` and `const` are block-scoped (trapped inside { }). `var` ignores block boundaries but respects function boundaries. This is the main reason to prefer `let` and `const` over `var`.

**Output:**

```
I am global
I am in a function
let is block-scoped
var ignores blocks!
I am global
```

### Closures: Functions That Remember

```javascript
// --- Basic closure ---
function makeMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;  // 'multiplier' is remembered
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);
const tenTimes = makeMultiplier(10);

console.log(double(5));    // 10
console.log(triple(5));    // 15
console.log(tenTimes(5));  // 50

// --- Counter with closure ---
function createCounter() {
  let count = 0;
  return {
    increment: function() { return ++count; },
    decrement: function() { return --count; },
    getCount: function() { return count; }
  };
}

const c1 = createCounter();
const c2 = createCounter();  // Separate closure!

console.log(c1.increment()); // 1
console.log(c1.increment()); // 2
console.log(c2.increment()); // 1 (independent!)
console.log(c1.getCount());  // 2
console.log(c2.getCount());  // 1
```

Each call to `makeMultiplier` creates a new closure with its own `multiplier` value. `double` remembers 2, `triple` remembers 3, `tenTimes` remembers 10. Similarly, each `createCounter` call creates an independent counter with its own private `count` variable.

**Output:**

```
10
15
50
1
2
1
2
1
```

### Hoisting: var, let, const, and Functions

```javascript
// --- var hoisting ---
console.log("a:", a); // undefined (hoisted, not initialized)
var a = 10;
console.log("a:", a); // 10

// --- let/const: Temporal Dead Zone ---
try {
  console.log(b);
} catch (e) {
  console.log("b error:", e.message); // Cannot access 'b' before initialization
}
let b = 20;
console.log("b:", b); // 20

// --- Function declaration: fully hoisted ---
console.log("sayHi:", sayHi()); // "Hi!"
function sayHi() { return "Hi!"; }

// --- Function expression: NOT hoisted ---
try {
  console.log(sayBye());
} catch (e) {
  console.log("sayBye error:", e.message); // sayBye is not a function
}
var sayBye = function() { return "Bye!"; };
console.log("sayBye:", sayBye()); // "Bye!"

// --- Arrow function with const: TDZ ---
try {
  greet();
} catch (e) {
  console.log("greet error:", e.message); // Cannot access 'greet' before initialization
}
const greet = () => "Hello!";
console.log("greet:", greet()); // "Hello!"
```

`var` declarations are hoisted and initialized to undefined. `let` and `const` are hoisted but NOT initialized (Temporal Dead Zone). Function declarations are fully hoisted (name + body). Function expressions and arrow functions follow the rules of their declaration keyword (var/let/const).

**Output:**

```
a: undefined
a: 10
b error: Cannot access 'b' before initialization
b: 20
sayHi: Hi!
sayBye error: sayBye is not a function
sayBye: Bye!
greet error: Cannot access 'greet' before initialization
greet: Hello!
```

### The Classic Loop Closure Trap (var vs let)

```javascript
// ========== THE TRAP: var in a loop ==========
console.log("--- var (broken) ---");
var funcsVar = [];
for (var i = 0; i < 3; i++) {
  funcsVar.push(function() { return i; });
}
// All functions return 3 because they share the SAME 'i'
console.log(funcsVar[0]()); // 3
console.log(funcsVar[1]()); // 3
console.log(funcsVar[2]()); // 3

// ========== THE FIX: let in a loop ==========
console.log("--- let (correct) ---");
var funcsLet = [];
for (let j = 0; j < 3; j++) {
  funcsLet.push(function() { return j; });
}
// Each function has its own 'j' because let is block-scoped
console.log(funcsLet[0]()); // 0
console.log(funcsLet[1]()); // 1
console.log(funcsLet[2]()); // 2

// ========== OLD FIX: IIFE ==========
console.log("--- IIFE fix ---");
var funcsIIFE = [];
for (var k = 0; k < 3; k++) {
  (function(captured) {
    funcsIIFE.push(function() { return captured; });
  })(k);  // Pass k as argument, creating a new scope
}
console.log(funcsIIFE[0]()); // 0
console.log(funcsIIFE[1]()); // 1
console.log(funcsIIFE[2]()); // 2
```

With `var`, all closures share the same variable `i`. By the time the functions run, the loop is done and `i` is 3. With `let`, each iteration creates a new block-scoped variable, so each closure captures its own value. The IIFE fix was the old solution before `let` existed -- it creates a new function scope to capture each value.

**Output:**

```
--- var (broken) ---
3
3
3
--- let (correct) ---
0
1
2
--- IIFE fix ---
0
1
2
```

### Module Pattern with Private State

```javascript
// Module pattern: IIFE that returns a public API
const BankAccount = (function() {
  // Private variables (not accessible from outside)
  let balance = 0;
  const transactions = [];

  // Private function
  function log(type, amount) {
    transactions.push({
      type: type,
      amount: amount,
      date: new Date().toISOString().split("T")[0],
      balance: balance
    });
  }

  // Public API
  return {
    deposit: function(amount) {
      if (amount <= 0) return "Invalid amount";
      balance += amount;
      log("deposit", amount);
      return "Deposited Rs " + amount + ". Balance: Rs " + balance;
    },
    withdraw: function(amount) {
      if (amount <= 0) return "Invalid amount";
      if (amount > balance) return "Insufficient balance";
      balance -= amount;
      log("withdraw", amount);
      return "Withdrawn Rs " + amount + ". Balance: Rs " + balance;
    },
    getBalance: function() {
      return balance;
    },
    getTransactions: function() {
      return [...transactions]; // Return copy, not the original
    }
  };
})();

console.log(BankAccount.deposit(1000));
console.log(BankAccount.deposit(500));
console.log(BankAccount.withdraw(200));
console.log("Balance:", BankAccount.getBalance());
console.log("Transactions:", BankAccount.getTransactions().length);

// BankAccount.balance is undefined -- truly private!
console.log("Direct access:", BankAccount.balance);
```

The module pattern uses an IIFE that returns an object with methods. The methods form closures over the private variables (`balance`, `transactions`). The private variables cannot be accessed directly from outside -- only through the public methods. This is the JavaScript version of private/public access control.

**Output:**

```
Deposited Rs 1000. Balance: Rs 1000
Deposited Rs 500. Balance: Rs 1500
Withdrawn Rs 200. Balance: Rs 1300
Balance: 1300
Transactions: 3
Direct access: undefined
```

### Closure Patterns: Function Factory and Memoize

```javascript
// --- Function Factory ---
function createValidator(min, max) {
  return function(value) {
    return value >= min && value <= max;
  };
}

const isValidAge = createValidator(0, 120);
const isValidScore = createValidator(0, 100);
const isValidTemperature = createValidator(-50, 60);

console.log(isValidAge(25));          // true
console.log(isValidAge(150));         // false
console.log(isValidScore(85));        // true
console.log(isValidTemperature(-10)); // true

// --- Memoize ---
function memoize(fn) {
  const cache = {};
  return function() {
    const key = JSON.stringify(arguments);
    if (cache[key] !== undefined) return cache[key];
    cache[key] = fn.apply(this, arguments);
    return cache[key];
  };
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fastFib = memoize(function fib(n) {
  if (n <= 1) return n;
  return fastFib(n - 1) + fastFib(n - 2);
});

console.log(fastFib(10));  // 55
console.log(fastFib(20));  // 6765
console.log(fastFib(30));  // 832040 (instant with memoization)
```

Function factories use closures to create specialized functions. `createValidator` captures `min` and `max`, returning a function that validates any value against those bounds. The memoize function uses a closure to maintain a `cache` object that stores previously computed results, making repeated calls instant.

**Output:**

```
true
false
true
true
55
6765
832040
```

## Common Mistakes

### Using var in a Loop with Closures

**Wrong:**

```
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Prints 3, 3, 3
  }, 100);
}
```

All callbacks print 3 instead of 0, 1, 2. All closures share the same var i, which is 3 after the loop ends.

**Correct:**

```
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Prints 0, 1, 2
  }, 100);
}
```

`var` is function-scoped, so there is only one `i` shared by all iterations. `let` is block-scoped, creating a new `i` for each iteration. Always use `let` in loops.

### Expecting var to Be Block-Scoped

**Wrong:**

```
if (true) {
  var secret = "hidden";
}
console.log(secret); // "hidden" -- oops, it leaked!
```

var ignores block boundaries. The variable leaks out of the if block.

**Correct:**

```
if (true) {
  let secret = "hidden";
}
// console.log(secret); // ReferenceError: secret is not defined
```

`var` is only scoped by functions, not by blocks like if, for, or while. `let` and `const` are properly block-scoped. Always use `let` or `const` to avoid accidental variable leaking.

### Using a Variable Before let/const Declaration

**Wrong:**

```
console.log(name); // ReferenceError!
let name = "Aarav";
```

ReferenceError: Cannot access 'name' before initialization. This is the Temporal Dead Zone (TDZ).

**Correct:**

```
let name = "Aarav";
console.log(name); // "Aarav"
```

`let` and `const` are hoisted but not initialized. The time between hoisting and the declaration line is the Temporal Dead Zone, where accessing the variable throws a ReferenceError. Always declare variables before using them.

### Assuming Closures Copy Values

**Wrong:**

```
function make() {
  let x = 1;
  const fn = function() { return x; };
  x = 2;  // Change x after creating the closure
  return fn;
}
console.log(make()()); // 2 (not 1!)
// The closure references the variable, not the value at creation time
```

Expected 1 but got 2. Closures capture a reference to the variable, not a snapshot of its value.

**Correct:**

```
// If you need the value at creation time, capture it explicitly
function make() {
  let x = 1;
  const captured = x;  // Capture the current value
  const fn = function() { return captured; };
  x = 2;
  return fn;
}
console.log(make()()); // 1
```

Closures hold a reference to the variable, not a copy of its value. If the variable changes after the closure is created, the closure sees the updated value. To capture a specific value, assign it to a new variable.

### Confusing Function Declaration and Expression Hoisting

**Wrong:**

```
sayHello(); // Works!
function sayHello() { console.log("Hello"); }

sayBye(); // TypeError: sayBye is not a function
var sayBye = function() { console.log("Bye"); };
```

Function declarations are fully hoisted (name + body). Function expressions assigned to var are only partially hoisted (the variable is undefined until assignment).

**Correct:**

```
// Put function expressions BEFORE their first use
var sayBye = function() { console.log("Bye"); };
sayBye(); // Works

// Or use function declarations which are fully hoisted
function sayHello() { console.log("Hello"); }
sayHello(); // Works regardless of position
```

A function declaration (`function name() { }`) is fully hoisted -- you can call it before it appears in the code. A function expression (`var name = function() { }`) follows var hoisting rules: the variable exists but is undefined until the assignment line.

## Summary

- Scope determines where variables are accessible. JavaScript has three types: global scope (accessible everywhere), function scope (inside a function only), and block scope (inside { } for let/const only).
- var is function-scoped and ignores blocks. let and const are block-scoped. This is the main reason to always prefer let/const over var.
- Lexical scope means inner functions can access variables from their outer functions. The scope is determined by where the code is written, not where it is called.
- A closure is an inner function that retains access to its outer function's variables even after the outer function returns. The inner function 'closes over' the variables it needs.
- Practical closure patterns: counter factory (private state), function factory (customized functions), private variables (data hiding), and memoization (result caching).
- Hoisting: var declarations are moved to the top and initialized to undefined. let/const are hoisted but NOT initialized (Temporal Dead Zone). Function declarations are fully hoisted (can be called before they appear).
- The Temporal Dead Zone (TDZ) is the period between a let/const variable being hoisted and its actual declaration line. Accessing it during the TDZ throws a ReferenceError.
- Classic loop trap: var in a for loop creates ONE shared variable for all closures. let creates a NEW variable per iteration. Always use let in loops with callbacks or closures.
- IIFE (Immediately Invoked Function Expression) creates a scope to avoid polluting the global namespace. Syntax: (function() { ... })(). Used before let/const existed, still useful for the module pattern.
- The module pattern uses an IIFE that returns an object of public methods, with private variables trapped in the closure. This provides encapsulation -- private state that can only be accessed through the returned API.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/javascript/closures-scope-and-hoisting/*
*Practice questions: https://learn.modernagecoders.com/resources/javascript/closures-scope-and-hoisting/practice/*
