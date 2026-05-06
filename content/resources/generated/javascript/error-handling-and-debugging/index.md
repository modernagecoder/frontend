---
title: "JavaScript Error Handling and Debugging - try/catch, throw, DevTools | Modern Age Coders"
description: "Learn JavaScript error handling with try-catch-finally, throw, custom errors, and debugging with console methods and browser DevTools. Includes 53+ practice questions with 'find the bug' and 'what error does this throw' challenges."
slug: error-handling-and-debugging
canonical: https://learn.modernagecoders.com/resources/javascript/error-handling-and-debugging
category: "JavaScript"
keywords: ["javascript try catch", "javascript error handling", "javascript debugging", "javascript throw error", "javascript devtools", "console.log debugging", "ReferenceError", "TypeError", "SyntaxError", "javascript custom error"]
---
# Error Handling and Debugging

**Difficulty:** Advanced  
**Reading time:** 45 min  
**Chapter:** 18  
**Practice questions:** 50

## What Is Error Handling?

Errors happen in every program. A user enters text instead of a number. A network request fails. You try to access a property of `undefined`. Without error handling, these situations crash your program and show ugly error messages.

**Error handling** is the practice of anticipating things that can go wrong and writing code to deal with them gracefully. In JavaScript, this is done with `try`, `catch`, `finally`, and `throw`.

```
// Without error handling -- crashes
const data = JSON.parse("this is not JSON");
console.log(data); // Never runs

// With error handling -- recovers
try {
  const data = JSON.parse("this is not JSON");
  console.log(data);
} catch (error) {
  console.log("Invalid JSON input");
  console.log("Error:", error.message);
}
console.log("Program continues normally");
```

**Debugging** is the process of finding and fixing errors in your code. JavaScript provides powerful tools: the browser console, console methods (log, table, group, time), and browser DevTools with breakpoints, step-through execution, and variable watching.

## Why Is Error Handling Important?

### 1. Programs Must Not Crash in Front of Users

If Kavya builds a weather app and the API is down, the app should show "Unable to fetch weather data" -- not a blank white screen or a cryptic error. Error handling lets you show helpful messages instead of crashes.

### 2. JavaScript Errors Are Silent Killers

In the browser, one unhandled error can stop all JavaScript on the page. A TypeError in your event handler means none of the rest of your code runs. Error handling isolates failures so one broken piece does not break everything.

### 3. Debugging Skills Save Hours

Beginners often spend hours staring at code trying to find bugs. Knowing how to use console.log effectively, read error messages, set breakpoints, and step through code turns hours of frustration into minutes of systematic investigation.

### 4. Professional Code Always Handles Errors

Every API call, every form submission, every file operation in professional code has error handling. If you want to write code that actually works in the real world, you must handle errors.

## Detailed Explanation

### 1. Common JavaScript Errors

JavaScript has several built-in error types. Knowing them helps you read error messages and fix bugs faster:

```
// ReferenceError -- using a variable that does not exist
console.log(myVariable); // ReferenceError: myVariable is not defined

// TypeError -- using a value in a way that is not allowed
const num = 42;
num.toUpperCase(); // TypeError: num.toUpperCase is not a function

null.name; // TypeError: Cannot read properties of null
undefined.length; // TypeError: Cannot read properties of undefined

// SyntaxError -- code structure is wrong (usually caught before execution)
// JSON.parse("{ bad json }"); // SyntaxError: Unexpected token b
// eval("if("); // SyntaxError: Unexpected end of input

// RangeError -- a value is outside the allowed range
const arr = new Array(-1); // RangeError: Invalid array length
const num = 1;
num.toFixed(200); // RangeError: toFixed() digits argument must be between 0 and 100
```

### 2. try-catch

The `try` block contains code that might throw an error. The `catch` block runs if an error occurs:

```
try {
  // Code that might fail
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  // Runs only if an error occurred
  console.log("Something went wrong:", error.message);
}
// Code here runs regardless
```

If no error occurs, the catch block is skipped. If an error occurs, JavaScript immediately jumps to catch. Any code after the error in try does NOT run.

### 3. The Error Object

When an error is caught, the catch block receives an error object with useful properties:

```
try {
  null.toString();
} catch (error) {
  console.log(error.name);    // "TypeError"
  console.log(error.message); // "Cannot read properties of null (reading 'toString')"
  console.log(error.stack);   // Full stack trace (shows where the error happened)
}
```

### 4. try-catch-finally

The `finally` block always runs, whether an error occurred or not. It is used for cleanup:

```
function loadData() {
  const loadingEl = document.getElementById("loading");
  loadingEl.style.display = "block";

  try {
    const data = JSON.parse(localStorage.getItem("data"));
    displayData(data);
  } catch (error) {
    console.log("Failed to load data:", error.message);
    showErrorMessage("Could not load your data.");
  } finally {
    // Always hide the loading spinner, success or failure
    loadingEl.style.display = "none";
  }
}
```

### 5. throw -- Creating Your Own Errors

Use `throw` to create errors when your code detects something wrong:

```
function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers");
  }
  if (b === 0) {
    throw new RangeError("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 2));    // 5
  console.log(divide(10, 0));    // throws RangeError
} catch (error) {
  console.log(error.name + ": " + error.message);
  // "RangeError: Cannot divide by zero"
}
```

You can throw any of the built-in error types: `Error`, `TypeError`, `RangeError`, `ReferenceError`. Always use `new` to create error objects.

### 6. Custom Error Classes

Create your own error types by extending the Error class:

```
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function validateAge(age) {
  if (typeof age !== "number") {
    throw new ValidationError("age", "Age must be a number");
  }
  if (age < 0 || age > 120) {
    throw new ValidationError("age", "Age must be between 0 and 120");
  }
  return true;
}

try {
  validateAge(-5);
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Field:", error.field);     // "age"
    console.log("Message:", error.message); // "Age must be between 0 and 120"
  }
}
```

### 7. Console Methods for Debugging

The console has many methods beyond `console.log`:

```
// console.log -- basic output
console.log("Basic message");
console.log("Name:", name, "Age:", age); // Multiple values

// console.table -- display arrays/objects as tables
const students = [
  { name: "Aarav", score: 85 },
  { name: "Priya", score: 92 },
  { name: "Rohan", score: 78 }
];
console.table(students);

// console.group / groupEnd -- group related logs
console.group("User Data");
console.log("Name: Aarav");
console.log("Age: 16");
console.log("City: Delhi");
console.groupEnd();

// console.time / timeEnd -- measure execution time
console.time("loop");
for (let i = 0; i < 1000000; i++) { /* empty */ }
console.timeEnd("loop"); // loop: 3.5ms

// console.warn -- yellow warning
console.warn("This function is deprecated");

// console.error -- red error (does not stop execution)
console.error("Something failed!");

// console.assert -- logs only if condition is FALSE
console.assert(1 === 1, "This will NOT log");
console.assert(1 === 2, "This WILL log because 1 !== 2");
```

### 8. Browser DevTools

The browser DevTools (press F12 or Ctrl+Shift+I) are the most powerful debugging tools available:

**Console tab:** Run JavaScript, see logs, errors, and warnings.

**Sources tab / Debugger:**

- **Breakpoints:** Click a line number in your JS file to set a breakpoint. The code pauses there.
- **Step Over (F10):** Execute the current line and move to the next.
- **Step Into (F11):** Go inside a function call to see what happens inside.
- **Step Out (Shift+F11):** Finish the current function and return to the caller.
- **Watch:** Add expressions to watch their values change as you step through code.
- **Call Stack:** Shows the chain of function calls that led to the current point.

**Network tab:** See all network requests (API calls, images, CSS files), their status codes, response data, and timing. Essential for debugging fetch/API issues.

**Elements tab:** Inspect and modify HTML/CSS in real time. Right-click any element and choose "Inspect".

### 9. Common Debugging Patterns

```
// Pattern 1: Log before and after suspicious code
console.log("Before fetch, URL:", url);
const response = await fetch(url);
console.log("After fetch, status:", response.status);

// Pattern 2: Log the type when you get unexpected behavior
console.log(typeof myVariable); // Is it string? number? undefined?
console.log(Array.isArray(data)); // Is it actually an array?

// Pattern 3: Use JSON.stringify for objects
console.log(JSON.stringify(data, null, 2)); // Pretty-printed object

// Pattern 4: Add temporary try-catch to isolate errors
try {
  suspiciousFunction();
} catch (e) {
  console.error("suspiciousFunction failed:", e);
}
```

### 10. Handling Errors in DOM Code

DOM operations can fail when elements do not exist. Handle them gracefully:

```
// Bad: crashes if element does not exist
const btn = document.getElementById("submit-btn");
btn.addEventListener("click", handleSubmit); // TypeError if btn is null

// Good: check before using
const btn = document.getElementById("submit-btn");
if (btn) {
  btn.addEventListener("click", handleSubmit);
} else {
  console.warn("Submit button not found in the page");
}

// Good with optional chaining:
document.getElementById("submit-btn")?.addEventListener("click", handleSubmit);
```

## Code Examples

### try-catch with Different Error Types

```javascript
function processInput(input) {
  try {
    if (input === undefined) {
      throw new Error("Input is required");
    }

    const parsed = JSON.parse(input);
    console.log("Parsed:", parsed);

    const name = parsed.user.name;
    console.log("Name:", name);
  } catch (error) {
    console.log("Error type:", error.name);
    console.log("Message:", error.message);
  }
}

processInput('{"user": {"name": "Aarav"}}');
console.log("---");
processInput("not json");
console.log("---");
processInput('{"data": 123}');
console.log("---");
processInput(undefined);
```

Different inputs cause different errors. Valid JSON with the right structure works. Invalid JSON causes SyntaxError. Valid JSON without the user property causes TypeError (accessing .name on undefined). Missing input triggers our custom Error. The catch block handles all cases.

**Output:**

```
Parsed: { user: { name: "Aarav" } }
Name: Aarav
---
Error type: SyntaxError
Message: Unexpected token 'o', "not json" is not valid JSON
---
Error type: TypeError
Message: Cannot read properties of undefined (reading 'name')
---
Error type: Error
Message: Input is required
```

### Form Validation with Custom Errors

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; background: #1a1a2e; color: #e2e8f0; }
    input { display: block; width: 250px; padding: 8px; margin: 8px 0; border-radius: 6px; border: 1px solid #334; background: #16213e; color: #e2e8f0; }
    button { padding: 10px 20px; background: #a855f7; color: white; border: none; border-radius: 6px; cursor: pointer; }
    .error { color: #ef4444; margin-top: 4px; font-size: 14px; }
    .success { color: #10b981; margin-top: 8px; }
  </style>
</head>
<body>
  <h2>Registration</h2>
  <input type="text" id="name" placeholder="Name">
  <input type="text" id="age" placeholder="Age">
  <input type="email" id="email" placeholder="Email">
  <button id="registerBtn">Register</button>
  <div id="output"></div>

  <script>
    class ValidationError extends Error {
      constructor(field, message) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
      }
    }

    function validate(name, age, email) {
      if (!name || name.trim().length < 2) {
        throw new ValidationError("name", "Name must be at least 2 characters");
      }
      const ageNum = Number(age);
      if (isNaN(ageNum) || ageNum < 5 || ageNum > 100) {
        throw new ValidationError("age", "Age must be a number between 5 and 100");
      }
      if (!email || !email.includes("@")) {
        throw new ValidationError("email", "Please enter a valid email");
      }
      return { name: name.trim(), age: ageNum, email };
    }

    document.getElementById("registerBtn").addEventListener("click", function() {
      const output = document.getElementById("output");
      try {
        const user = validate(
          document.getElementById("name").value,
          document.getElementById("age").value,
          document.getElementById("email").value
        );
        output.className = "success";
        output.textContent = "Registered: " + user.name + ", age " + user.age;
      } catch (error) {
        if (error instanceof ValidationError) {
          output.className = "error";
          output.textContent = error.field + ": " + error.message;
          document.getElementById(error.field).focus();
        } else {
          output.className = "error";
          output.textContent = "Unexpected error: " + error.message;
        }
      }
    });
  </script>
</body>
</html>
```

Custom `ValidationError` carries a field name so the error handler knows which input caused the problem. The catch block checks `instanceof ValidationError` to handle validation errors differently from unexpected errors. The failing input is focused automatically.

**Output:**

```
A registration form that shows specific field-level error messages. Wrong age shows 'age: Age must be a number between 5 and 100'.
```

### Console Methods Showcase

```javascript
// console.table for structured data
const scores = [
  { name: "Aarav", maths: 90, science: 85 },
  { name: "Priya", maths: 95, science: 92 },
  { name: "Rohan", maths: 78, science: 80 }
];
console.table(scores);

// console.group for organized output
console.group("Quiz Results");
console.log("Total questions: 10");
console.log("Correct: 7");
console.log("Score: 70%");
console.groupEnd();

// console.time for performance measurement
console.time("arrayCreation");
const bigArray = [];
for (let i = 0; i < 100000; i++) {
  bigArray.push(i * 2);
}
console.timeEnd("arrayCreation");

// console.assert for debugging conditions
const age = 15;
console.assert(age >= 18, "User is not an adult, age is " + age);
console.assert(age >= 0, "This will NOT log because age is positive");

// console.warn and console.error
console.warn("API key will expire in 3 days");
console.error("Failed to connect to database");
```

`console.table` displays data as a formatted table in the browser console. `console.group` creates collapsible sections. `console.time`/`timeEnd` measures how long code takes. `console.assert` only logs when the condition is false. These are much more useful than plain console.log for complex debugging.

**Output:**

```
(table showing name/maths/science)
Quiz Results
  Total questions: 10
  Correct: 7
  Score: 70%
arrayCreation: ~5ms
Assertion failed: User is not an adult, age is 15
Warning: API key will expire in 3 days
Error: Failed to connect to database
```

### Safe DOM Operations with Error Handling

```javascript
// Helper function that safely selects an element
function safeSelect(selector) {
  const element = document.querySelector(selector);
  if (!element) {
    console.warn("Element not found: " + selector);
    return null;
  }
  return element;
}

// Helper that safely updates text content
function safeSetText(selector, text) {
  const el = safeSelect(selector);
  if (el) {
    el.textContent = text;
    return true;
  }
  return false;
}

// Helper that safely adds event listener
function safeAddListener(selector, event, handler) {
  const el = safeSelect(selector);
  if (el) {
    el.addEventListener(event, handler);
    return true;
  }
  return false;
}

// Usage
safeSetText("#title", "Hello World");
safeSetText("#nonexistent", "This safely does nothing");
safeAddListener("#btn", "click", function() {
  console.log("Clicked!");
});
```

Instead of letting the code crash when an element does not exist, these helper functions check for null and log a warning. This pattern is especially useful in large apps where HTML structure may change and elements may be conditionally rendered.

**Output:**

```
(If #title exists) Sets its text to 'Hello World'
(If #nonexistent is missing) Console warning: Element not found: #nonexistent
(If #btn exists) Adds click listener
```

### finally for Cleanup

```javascript
function fetchUserData(userId) {
  console.log("Loading...");
  // Simulating showing a loading spinner
  let isLoading = true;

  try {
    if (typeof userId !== "number") {
      throw new TypeError("userId must be a number");
    }
    if (userId <= 0) {
      throw new RangeError("userId must be positive");
    }

    // Simulate successful data
    const user = { id: userId, name: "User " + userId };
    console.log("Data loaded:", user);
    return user;
  } catch (error) {
    console.log("Error:", error.name, "-", error.message);
    return null;
  } finally {
    isLoading = false;
    console.log("Loading done (isLoading:", isLoading, ")");
  }
}

console.log("Result:", fetchUserData(1));
console.log("---");
console.log("Result:", fetchUserData("abc"));
console.log("---");
console.log("Result:", fetchUserData(-5));
```

The `finally` block guarantees the loading state is reset, whether the operation succeeded or failed. This is critical for UI -- a loading spinner that never disappears because of an error is a terrible user experience.

**Output:**

```
Loading...
Data loaded: { id: 1, name: "User 1" }
Loading done (isLoading: false)
Result: { id: 1, name: "User 1" }
---
Loading...
Error: TypeError - userId must be a number
Loading done (isLoading: false)
Result: null
---
Loading...
Error: RangeError - userId must be positive
Loading done (isLoading: false)
Result: null
```

### Error Handling Pattern for JSON Parsing

```javascript
function safeParse(jsonString, fallback = null) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.warn("Invalid JSON:", error.message);
    return fallback;
  }
}

// Valid JSON
console.log(safeParse('{"name": "Aarav"}'));
// { name: "Aarav" }

// Invalid JSON -- returns fallback
console.log(safeParse("not json", {}));
// {} (fallback)

// null from localStorage
console.log(safeParse(null, []));
// [] (fallback)

// Practical use with localStorage
function loadSettings() {
  const saved = localStorage.getItem("settings");
  return safeParse(saved, { theme: "dark", fontSize: 14 });
}

const settings = loadSettings();
console.log("Settings:", settings);
```

Wrapping `JSON.parse` in try-catch is essential because invalid JSON throws a SyntaxError. The `safeParse` function provides a fallback value instead of crashing. This pattern is used constantly with localStorage and API responses.

**Output:**

```
{ name: "Aarav" }
Invalid JSON: Unexpected token 'o', "not json" is not valid JSON
{}
Invalid JSON: ...
[]
Settings: { theme: "dark", fontSize: 14 }
```

## Common Mistakes

### Catching Errors Without Using the Error Object

**Wrong:**

```
try {
  JSON.parse("bad json");
} catch (error) {
  console.log("Something went wrong");
  // Ignoring the error object completely!
}
```

No crash, but you lose all information about what went wrong. Debugging becomes impossible.

**Correct:**

```
try {
  JSON.parse("bad json");
} catch (error) {
  console.log("Parse failed:", error.message);
  // Or at minimum: console.error(error);
}
```

Always log the error object or at least `error.message`. Without this, you will have no idea what actually failed, making debugging extremely difficult.

### Using try-catch Around Asynchronous Code (Does Not Work)

**Wrong:**

```
try {
  setTimeout(function() {
    throw new Error("Async error!");
  }, 1000);
} catch (error) {
  // This NEVER runs! The error happens later.
  console.log("Caught:", error.message);
}
```

The catch block never runs. The error crashes the program after 1 second because it happens outside the try-catch.

**Correct:**

```
// Put try-catch INSIDE the async callback
setTimeout(function() {
  try {
    throw new Error("Async error!");
  } catch (error) {
    console.log("Caught:", error.message);
  }
}, 1000);

// Or with async/await:
// try {
//   await someAsyncOperation();
// } catch (error) {
//   console.log("Caught:", error.message);
// }
```

try-catch only catches errors that happen synchronously within the try block. setTimeout's callback runs later, after the try-catch has already finished. Put try-catch inside the callback, or use async/await.

### Throwing Strings Instead of Error Objects

**Wrong:**

```
function validate(age) {
  if (age < 0) {
    throw "Age cannot be negative"; // Throwing a string!
  }
}

try {
  validate(-1);
} catch (error) {
  console.log(error.message); // undefined! Strings don't have .message
  console.log(error.stack);   // undefined! No stack trace
}
```

error.message is undefined because strings do not have a message property. No stack trace available for debugging.

**Correct:**

```
function validate(age) {
  if (age < 0) {
    throw new RangeError("Age cannot be negative");
  }
}

try {
  validate(-1);
} catch (error) {
  console.log(error.message); // "Age cannot be negative"
  console.log(error.name);    // "RangeError"
  console.log(error.stack);   // Full stack trace
}
```

Always throw Error objects (or subclasses). They provide `.message`, `.name`, and `.stack` properties that are essential for debugging. Throwing strings loses all this information.

### Wrapping Too Much Code in try-catch

**Wrong:**

```
try {
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);
  const data = JSON.parse(localStorage.getItem("data"));
  const result = processData(data, name, age);
  displayResult(result);
} catch (error) {
  console.log("Error"); // Which line failed?
}
```

When an error occurs, you cannot tell if it was the DOM access, the parsing, or the processing that failed.

**Correct:**

```
const nameEl = document.getElementById("name");
if (!nameEl) {
  console.error("Name input not found");
  return;
}
const name = nameEl.value;
const age = parseInt(document.getElementById("age").value);

let data;
try {
  data = JSON.parse(localStorage.getItem("data"));
} catch (error) {
  console.error("Invalid stored data:", error.message);
  data = {};
}

try {
  const result = processData(data, name, age);
  displayResult(result);
} catch (error) {
  console.error("Processing failed:", error.message);
}
```

Keep try blocks focused on the specific operation that might fail. Use separate try blocks for independent risky operations. This way, when an error occurs, you know exactly which part failed.

## Summary

- JavaScript has built-in error types: ReferenceError (undefined variable), TypeError (wrong type usage, null.property), SyntaxError (bad code structure, bad JSON), and RangeError (value out of range).
- try-catch handles errors gracefully: the try block contains risky code, the catch block handles the error if one occurs. Code after the error in try does NOT run.
- The error object in catch has three key properties: error.name (type like 'TypeError'), error.message (what went wrong), and error.stack (where it happened).
- The finally block always runs -- after try succeeds or after catch handles an error. Use it for cleanup like hiding loading spinners or resetting state.
- Use throw new Error('message') to create your own errors. Always throw Error objects (not strings) so you get .message, .name, and .stack properties.
- Custom error classes extend Error: class MyError extends Error. They can carry extra data like which field failed validation.
- console.table shows data as formatted tables. console.group organizes related logs. console.time measures performance. console.assert logs only on failure.
- Browser DevTools (F12): Set breakpoints by clicking line numbers, step through code with F10/F11, watch variable values, inspect the call stack, and monitor network requests.
- try-catch does NOT work around async callbacks (setTimeout, event handlers). Put try-catch inside the callback, or use async/await with try-catch.
- For DOM operations, always check if an element exists before using it. Use optional chaining (el?.addEventListener) or explicit null checks to prevent TypeErrors.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/javascript/error-handling-and-debugging/*
*Practice questions: https://learn.modernagecoders.com/resources/javascript/error-handling-and-debugging/practice/*
