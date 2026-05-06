---
title: "Practice: Error Handling and Debugging"
description: "50 practice problems for Error Handling and Debugging in JavaScript"
slug: error-handling-and-debugging-practice
canonical: https://learn.modernagecoders.com/resources/javascript/error-handling-and-debugging/practice
category: "JavaScript"
---
# Practice: Error Handling and Debugging

**Total questions:** 50

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
try {
  console.log("A");
  console.log("B");
} catch (error) {
  console.log("C");
}
console.log("D");
```

*Hint:* No error occurs in the try block.

**Answer:** `A`
`B`
`D`

No error occurs, so the entire try block runs (A, B). The catch block is skipped. D prints after the try-catch.

### Q2. [Easy] What is the output?

```
try {
  console.log("A");
  JSON.parse("invalid");
  console.log("B");
} catch (error) {
  console.log("C");
}
console.log("D");
```

*Hint:* JSON.parse with invalid input throws SyntaxError.

**Answer:** `A`
`C`
`D`

A prints. JSON.parse throws SyntaxError, so B is skipped. Catch runs (C). D prints after the try-catch.

### Q3. [Easy] What is the output?

```
try {
  console.log("start");
} catch (error) {
  console.log("error");
} finally {
  console.log("done");
}
```

*Hint:* finally always runs, even when there is no error.

**Answer:** `start`
`done`

No error: try runs (start), catch is skipped, finally always runs (done).

### Q4. [Easy] What type of error does this code throw?

```
console.log(myVar);
```

*Hint:* myVar has not been declared anywhere.

**Answer:** `ReferenceError: myVar is not defined`

Accessing a variable that has not been declared throws a ReferenceError.

### Q5. [Easy] What type of error does this code throw?

```
const num = 42;
num.toUpperCase();
```

*Hint:* toUpperCase is a string method, not a number method.

**Answer:** `TypeError: num.toUpperCase is not a function`

num is a number, and numbers do not have a toUpperCase method. Calling a non-existent method is a TypeError.

### Q6. [Medium] What is the output?

```
try {
  throw new Error("oops");
  console.log("after throw");
} catch (error) {
  console.log(error.message);
}
console.log("end");
```

*Hint:* throw immediately exits the try block.

**Answer:** `oops`
`end`

throw exits the try block immediately. 'after throw' never runs. Catch receives the error and prints 'oops'. Then 'end' prints normally.

### Q7. [Medium] What is the output?

```
function test() {
  try {
    return 1;
  } finally {
    console.log("finally");
  }
}

const result = test();
console.log(result);
```

*Hint:* finally runs even after a return statement.

**Answer:** `finally`
`1`

The try block returns 1, but finally runs before the return value is delivered. So 'finally' prints first, then the return value 1 is logged.

### Q8. [Medium] What is the output?

```
try {
  const obj = null;
  console.log(obj.name);
} catch (error) {
  console.log(error.name);
  console.log(error.message.includes("null"));
}
```

*Hint:* Accessing a property of null throws TypeError.

**Answer:** `TypeError`
`true`

null.name throws a TypeError. The error name is 'TypeError'. The message mentions 'null', so includes('null') is true.

### Q9. [Medium] What is the output?

```
try {
  JSON.parse("invalid");
} catch (error) {
  console.log(error instanceof SyntaxError);
  console.log(error instanceof Error);
  console.log(error instanceof TypeError);
}
```

*Hint:* SyntaxError is a subclass of Error.

**Answer:** `true`
`true`
`false`

JSON.parse with invalid input throws SyntaxError. SyntaxError instanceof SyntaxError is true. SyntaxError is a subclass of Error, so instanceof Error is also true. It is not a TypeError, so false.

### Q10. [Hard] What is the output?

```
function outer() {
  try {
    inner();
    console.log("after inner");
  } catch (error) {
    console.log("outer caught:", error.message);
  }
}

function inner() {
  throw new Error("inner error");
}

outer();
console.log("done");
```

*Hint:* The error from inner() propagates up to outer's try-catch.

**Answer:** `outer caught: inner error`
`done`

inner() throws an error. It propagates up to outer()'s catch block. 'after inner' never runs. The catch logs the message. Then 'done' prints normally.

### Q11. [Hard] What is the output?

```
function test(val) {
  try {
    if (val < 0) throw new RangeError("negative");
    if (typeof val !== "number") throw new TypeError("not a number");
    return val * 2;
  } catch (error) {
    return error.name + ": " + error.message;
  } finally {
    console.log("finally for " + val);
  }
}

console.log(test(5));
console.log(test(-3));
console.log(test("abc"));
```

*Hint:* finally runs before the return value is delivered each time.

**Answer:** `finally for 5`
`10`
`finally for -3`
`RangeError: negative`
`finally for abc`
`TypeError: not a number`

test(5): no error, returns 10. finally prints first. test(-3): RangeError caught, returns error string. finally prints first. test('abc'): -3 < 0 check does not apply (string comparison), typeof is not 'number' so TypeError.

### Q12. [Hard] What is the output?

```
try {
  try {
    throw new TypeError("inner");
  } catch (e) {
    console.log("inner catch:", e.message);
    throw new RangeError("re-thrown");
  } finally {
    console.log("inner finally");
  }
} catch (e) {
  console.log("outer catch:", e.name, e.message);
} finally {
  console.log("outer finally");
}
```

*Hint:* The inner catch throws a NEW error. The inner finally still runs. The new error propagates to outer catch.

**Answer:** `inner catch: inner`
`inner finally`
`outer catch: RangeError re-thrown`
`outer finally`

Inner try throws TypeError. Inner catch handles it and throws a new RangeError. Inner finally runs. The RangeError propagates to outer catch. Outer finally runs.

### Q13. [Easy] What type of error does this code throw?

```
const arr = new Array(-1);
```

*Hint:* Array length cannot be negative.

**Answer:** `RangeError: Invalid array length`

Creating an array with a negative length throws a RangeError because the length is outside the valid range (0 to 2^32 - 1).

### Q14. [Medium] What is the output?

```
function greet(name) {
  if (typeof name !== "string") {
    throw new TypeError("Name must be a string");
  }
  return "Hello, " + name;
}

try {
  console.log(greet("Aarav"));
  console.log(greet(42));
} catch (error) {
  console.log(error.message);
}
console.log("done");
```

*Hint:* First call succeeds. Second call throws.

**Answer:** `Hello, Aarav`
`Name must be a string`
`done`

greet("Aarav") succeeds and prints. greet(42) throws TypeError because 42 is not a string. The catch block handles it. Then 'done' prints normally.

### Q15. [Easy] What is the output?

```
console.warn("low disk space");
console.log("program continues");
```

*Hint:* console.warn does not stop execution.

**Answer:** `low disk space` (as a warning)
`program continues`

console.warn displays a yellow warning in the console but does NOT stop execution. The next line runs normally.

## Mixed Questions

### Q1. [Easy] What is the output?

```
try {
  const x = 10;
  console.log(x / 2);
} catch (error) {
  console.log("Error!");
}
```

*Hint:* 10 / 2 is a valid operation.

**Answer:** `5`

No error occurs. 10 / 2 = 5. The catch block is skipped.

### Q2. [Easy] What is the output?

```
console.assert(5 > 3, "This should not log");
console.assert(2 > 7, "Math is broken");
```

*Hint:* console.assert only logs when the condition is FALSE.

**Answer:** `Assertion failed: Math is broken`

First assert: 5 > 3 is true, nothing logs. Second assert: 2 > 7 is false, so the message 'Math is broken' is logged.

### Q3. [Medium] What is the output?

```
function safeDivide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

const results = [];
const pairs = [[10, 2], [6, 0], [9, 3]];

for (const [a, b] of pairs) {
  try {
    results.push(safeDivide(a, b));
  } catch (error) {
    results.push(error.message);
  }
}
console.log(results);
```

*Hint:* Each pair is processed independently. Errors are caught per iteration.

**Answer:** `[5, "Cannot divide by zero", 3]`

10/2=5 (success). 6/0 throws error (message pushed). 9/3=3 (success). The for loop continues after each caught error.

### Q4. [Medium] What is the output?

```
function parseAge(input) {
  const age = Number(input);
  if (isNaN(age)) throw new TypeError("Not a number: " + input);
  if (age < 0) throw new RangeError("Negative age: " + age);
  return age;
}

const inputs = ["25", "abc", "-5", "16"];
for (const input of inputs) {
  try {
    console.log(parseAge(input));
  } catch (e) {
    console.log(e.name);
  }
}
```

*Hint:* Number('abc') is NaN. Number('-5') is -5.

**Answer:** `25`
`TypeError`
`RangeError`
`16`

"25" converts to 25 (success). "abc" is NaN (TypeError). "-5" is -5, which is negative (RangeError). "16" converts to 16 (success).

### Q5. [Medium] What is the output?

```
let count = 0;

try {
  count++;
  JSON.parse("bad");
  count++;
} catch (e) {
  count += 10;
} finally {
  count += 100;
}

console.log(count);
```

*Hint:* Track count: starts at 0, incremented in try, error occurs, then catch and finally both run.

**Answer:** `111`

count starts at 0. First count++ makes it 1. JSON.parse fails, so second count++ is skipped. Catch adds 10 (count=11). Finally adds 100 (count=111).

### Q6. [Hard] What is the output?

```
function validate(data) {
  if (!data) throw new Error("No data");
  if (!data.name) throw new Error("No name");
  if (typeof data.age !== "number") throw new TypeError("Bad age");
  return "Valid";
}

const tests = [null, {}, { name: "A" }, { name: "B", age: 16 }];

for (const test of tests) {
  try {
    console.log(validate(test));
  } catch (e) {
    console.log(e.message);
  }
}
```

*Hint:* Each test object fails at a different validation check (or passes).

**Answer:** `No data`
`No name`
`Bad age`
`Valid`

null: fails !data check. {}: fails !data.name check. {name:'A'}: age is undefined (not number), TypeError. {name:'B', age:16}: passes all checks.

### Q7. [Hard] What is the output?

```
function f() {
  try {
    return "try";
  } catch (e) {
    return "catch";
  } finally {
    return "finally";
  }
}
console.log(f());
```

*Hint:* If finally has a return, it overrides all previous returns.

**Answer:** `finally`

The try block returns 'try', but the finally block also returns. The finally return overrides the try return. The function returns 'finally'. This is a known JavaScript gotcha -- avoid returning from finally.

### Q8. [Medium] Why should you always throw Error objects (like `new Error('msg')`) instead of strings (like `throw 'msg'`)?

*Hint:* What properties do Error objects have that strings do not?

**Answer:** Error objects provide `.name` (error type), `.message` (description), and `.stack` (where it happened). Strings have none of these. Without a stack trace, you cannot tell where the error originated. Without .name, you cannot distinguish error types. Throwing strings makes debugging much harder.

Error objects are specifically designed for error handling. They automatically capture the call stack, have a standard interface (.name, .message), and work properly with instanceof for type checking.

### Q9. [Hard] Why does try-catch NOT work around setTimeout or event listeners for catching errors inside them?

*Hint:* Think about when the callback actually executes.

**Answer:** try-catch only catches errors that happen synchronously within the try block. setTimeout and event listener callbacks run LATER, after the try-catch has already completed. By the time the callback executes and throws, the try-catch is no longer active. You need to put try-catch inside the callback, or use async/await.

JavaScript is single-threaded with an event loop. The try-catch runs and finishes. The callback is placed in the event queue. When it runs later, it is in a completely separate execution context with no surrounding try-catch.

## Multiple Choice Questions

### Q1. [Easy] Which error occurs when you use a variable that has not been declared?

**Answer:** C

**C is correct.** Using an undeclared variable throws `ReferenceError: x is not defined`. TypeError is for wrong type operations, SyntaxError is for bad code structure.

### Q2. [Easy] What block always runs, whether an error occurred or not?

**Answer:** D

**D is correct.** `finally` always runs: after try succeeds, after catch handles an error, and even after return statements.

### Q3. [Easy] What does `error.message` contain?

**Answer:** C

**C is correct.** `error.message` is a human-readable string describing the error. `error.name` is the type. `error.stack` is the trace.

### Q4. [Easy] Which error does `null.toString()` throw?

**Answer:** B

**B is correct.** Calling a method on null (or accessing a property) throws TypeError: Cannot read properties of null.

### Q5. [Easy] What does `console.assert(false, 'test')` do?

**Answer:** A

**A is correct.** `console.assert` logs the message only when the condition is false. It does not throw errors or crash -- it just logs to the console.

### Q6. [Medium] What is the correct way to create a custom error?

**Answer:** B

**B is correct.** `throw new Error('...')` creates an Error object and throws it. Option A throws a string (bad practice). Option C just logs. Option D creates but does not throw.

### Q7. [Medium] What console method displays data as a formatted table?

**Answer:** C

**C is correct.** `console.table()` displays arrays and objects as a formatted table in the browser console. Very useful for debugging data.

### Q8. [Medium] If a try block has a return statement and a finally block also has a return statement, which return wins?

**Answer:** B

**B is correct.** The finally return overrides the try return. This is because finally always runs last. However, returning from finally is considered bad practice.

### Q9. [Medium] How do you check if an error is a specific type?

**Answer:** B

**B is correct.** `instanceof` checks if an object is an instance of a class. `error instanceof TypeError` is true for TypeErrors (and false for other types).

### Q10. [Medium] What keyboard shortcut opens browser DevTools?

**Answer:** B

**B is correct.** F12 or Ctrl+Shift+I opens DevTools in Chrome, Firefox, and Edge. This is the most important tool for debugging web applications.

### Q11. [Hard] Why does `try { setTimeout(() => { throw new Error(); }, 0); } catch(e) {}` NOT catch the error?

**Answer:** C

**C is correct.** try-catch is synchronous. The setTimeout callback runs asynchronously in a later event loop tick. By then, the try-catch is long gone.

### Q12. [Hard] What is a breakpoint in browser DevTools?

**Answer:** B

**B is correct.** A breakpoint pauses execution at that line, letting you inspect variable values, the call stack, and step through code line by line. Set them by clicking a line number in the Sources tab.

### Q13. [Hard] What is the difference between `console.warn()` and `throw new Error()`?

**Answer:** B

**B is correct.** `console.warn` logs a yellow warning and execution continues normally. `throw` stops execution immediately and the error must be caught by a try-catch or it crashes the program.

### Q14. [Easy] What does `console.error('msg')` do?

**Answer:** B

**B is correct.** `console.error` logs a message styled as an error (red in most browsers) but does NOT throw an error or stop execution.

### Q15. [Medium] What does the `error.stack` property contain?

**Answer:** C

**C is correct.** `error.stack` contains a string showing the chain of function calls (call stack) that led to the error, including file names and line numbers. This is the most useful property for debugging.

### Q16. [Easy] Which error occurs when you call `JSON.parse('invalid')`?

**Answer:** C

**C is correct.** Invalid JSON causes a `SyntaxError` because the input string does not follow JSON syntax rules.

### Q17. [Medium] What is `Step Over (F10)` in browser DevTools?

**Answer:** B

**B is correct.** Step Over executes the current line completely (including any function calls) and pauses at the next line. Step Into (F11) would go inside function calls.

### Q18. [Hard] Can you catch a SyntaxError with try-catch if it is in the same code block?

**Answer:** B

**B is correct.** SyntaxErrors in your code are caught during parsing, before any code runs. The try-catch itself would not execute. However, SyntaxErrors from `eval()` or `JSON.parse()` CAN be caught because they happen at runtime.

### Q19. [Easy] What property gives the error type name (like 'TypeError' or 'RangeError')?

**Answer:** B

**B is correct.** `error.name` contains the error type as a string, like 'TypeError', 'RangeError', or 'SyntaxError'.

## Coding Challenges

### Challenge 1. Safe JSON Parser

**Difficulty:** Easy

Write a function safeJsonParse(str, fallback) that parses a JSON string and returns the result. If parsing fails, return the fallback value instead of crashing.

**Constraints:**

- Use try-catch. Return the fallback on any error.

**Sample input:**

```
safeJsonParse('{"name":"Aarav"}', {}), safeJsonParse('bad', [])
```

**Sample output:**

```
{ name: 'Aarav' }
[]
```

**Solution:**

```javascript
function safeJsonParse(str, fallback) {
  try {
    return JSON.parse(str);
  } catch (error) {
    return fallback;
  }
}

console.log(safeJsonParse('{"name":"Aarav"}', {}));
console.log(safeJsonParse('bad', []));
console.log(safeJsonParse(null, { error: true }));
```

### Challenge 2. Error Type Identifier

**Difficulty:** Easy

Write a function identifyError(fn) that takes a function, calls it, and returns the error type name if it throws, or 'No error' if it succeeds.

**Constraints:**

- Use try-catch and error.name.

**Sample input:**

```
() => null.x, () => unknownVar, () => 42
```

**Sample output:**

```
TypeError
ReferenceError
No error
```

**Solution:**

```javascript
function identifyError(fn) {
  try {
    fn();
    return "No error";
  } catch (error) {
    return error.name;
  }
}

console.log(identifyError(() => null.x));        // TypeError
console.log(identifyError(() => JSON.parse('{')));  // SyntaxError
console.log(identifyError(() => 42));             // No error
```

### Challenge 3. Input Validator with Custom Errors

**Difficulty:** Medium

Create a ValidationError class that extends Error and has a 'field' property. Write a validateStudent(data) function that validates name (string, 2+ chars), age (number, 5-25), and email (must include @). Throw ValidationError with the field name for each failure.

**Constraints:**

- Custom error class with field property. Use instanceof to check error type.

**Sample input:**

```
{ name: 'A', age: 16, email: 'a@b.com' }
```

**Sample output:**

```
ValidationError on field 'name': Name must be at least 2 characters
```

**Solution:**

```javascript
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

function validateStudent(data) {
  if (typeof data.name !== 'string' || data.name.length < 2) {
    throw new ValidationError('name', 'Name must be at least 2 characters');
  }
  if (typeof data.age !== 'number' || data.age < 5 || data.age > 25) {
    throw new ValidationError('age', 'Age must be a number between 5 and 25');
  }
  if (!data.email || !data.email.includes('@')) {
    throw new ValidationError('email', 'Email must contain @');
  }
  return true;
}

const tests = [
  { name: 'A', age: 16, email: 'a@b.com' },
  { name: 'Aarav', age: 3, email: 'a@b.com' },
  { name: 'Priya', age: 15, email: 'bad' },
  { name: 'Rohan', age: 16, email: 'r@x.com' }
];

for (const test of tests) {
  try {
    validateStudent(test);
    console.log(test.name + ': Valid');
  } catch (e) {
    if (e instanceof ValidationError) {
      console.log(test.name + ': ' + e.field + ' - ' + e.message);
    }
  }
}
```

### Challenge 4. Retry Function

**Difficulty:** Medium

Write a function retry(fn, maxAttempts) that calls fn() up to maxAttempts times. If fn succeeds, return the result. If fn throws and there are attempts left, try again. If all attempts fail, throw the last error.

**Constraints:**

- Track attempts. Re-throw the last error after all attempts fail.

**Sample input:**

```
A function that fails randomly
```

**Sample output:**

```
Attempt 1: failed
Attempt 2: success -> 42
```

**Solution:**

```javascript
function retry(fn, maxAttempts) {
  let lastError;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const result = fn();
      console.log('Attempt ' + attempt + ': success -> ' + result);
      return result;
    } catch (error) {
      lastError = error;
      console.log('Attempt ' + attempt + ': failed - ' + error.message);
    }
  }
  throw lastError;
}

let callCount = 0;
function unreliable() {
  callCount++;
  if (callCount < 3) throw new Error('not ready');
  return 42;
}

try {
  retry(unreliable, 5);
} catch (e) {
  console.log('All attempts failed');
}
```

### Challenge 5. Safe Property Accessor

**Difficulty:** Medium

Write a function safeAccess(obj, path) where path is a dot-separated string like 'a.b.c'. Return the value at that path, or undefined if any part is missing. Do NOT use optional chaining -- use try-catch instead.

**Constraints:**

- Use try-catch and a loop. Do not use optional chaining (?.).

**Sample input:**

```
({ a: { b: { c: 42 } } }, 'a.b.c')
```

**Sample output:**

```
42
```

**Solution:**

```javascript
function safeAccess(obj, path) {
  try {
    const keys = path.split('.');
    let current = obj;
    for (const key of keys) {
      current = current[key];
    }
    return current;
  } catch (error) {
    return undefined;
  }
}

const data = { a: { b: { c: 42 } } };
console.log(safeAccess(data, 'a.b.c'));   // 42
console.log(safeAccess(data, 'a.b'));     // { c: 42 }
console.log(safeAccess(data, 'a.x.y'));   // undefined
console.log(safeAccess(data, 'z'));        // undefined
```

### Challenge 6. Error Statistics Collector

**Difficulty:** Hard

Write a function testAll(functions) that takes an array of functions, calls each one, and returns an object with: { successes: count, errors: { TypeError: count, RangeError: count, ... } }.

**Constraints:**

- Use try-catch and error.name to categorize.

**Sample input:**

```
[() => 42, () => null.x, () => JSON.parse('{')]
```

**Sample output:**

```
{ successes: 1, errors: { TypeError: 1, SyntaxError: 1 } }
```

**Solution:**

```javascript
function testAll(functions) {
  const result = { successes: 0, errors: {} };

  for (const fn of functions) {
    try {
      fn();
      result.successes++;
    } catch (error) {
      const type = error.name;
      result.errors[type] = (result.errors[type] || 0) + 1;
    }
  }

  return result;
}

const fns = [
  () => 42,
  () => null.x,
  () => JSON.parse('{'),
  () => [].length,
  () => undefined.name,
  () => new Array(-1)
];

console.log(testAll(fns));
// { successes: 2, errors: { TypeError: 2, SyntaxError: 1, RangeError: 1 } }
```

### Challenge 7. Build a Debug Logger

**Difficulty:** Hard

Create a DebugLogger class with methods: log(msg), warn(msg), error(msg), time(label), timeEnd(label), getLog(). It should store all messages internally with timestamps. getLog() returns all stored messages as an array.

**Constraints:**

- Store messages in an array. Include type, message, and timestamp for each.

**Sample input:**

```
logger.log('hello'); logger.warn('warning'); logger.getLog()
```

**Sample output:**

```
[{type:'log', msg:'hello', time:...}, {type:'warn', msg:'warning', time:...}]
```

**Solution:**

```javascript
class DebugLogger {
  constructor() {
    this.messages = [];
    this.timers = {};
  }

  log(msg) {
    this.messages.push({ type: 'log', msg, time: Date.now() });
    console.log(msg);
  }

  warn(msg) {
    this.messages.push({ type: 'warn', msg, time: Date.now() });
    console.warn(msg);
  }

  error(msg) {
    this.messages.push({ type: 'error', msg, time: Date.now() });
    console.error(msg);
  }

  time(label) {
    this.timers[label] = Date.now();
  }

  timeEnd(label) {
    if (this.timers[label]) {
      const duration = Date.now() - this.timers[label];
      this.log(label + ': ' + duration + 'ms');
      delete this.timers[label];
    }
  }

  getLog() {
    return this.messages;
  }
}

const logger = new DebugLogger();
logger.log('App started');
logger.warn('Deprecated function used');
logger.time('process');
for (let i = 0; i < 100000; i++) {}
logger.timeEnd('process');
console.log(logger.getLog());
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/error-handling-and-debugging/*
