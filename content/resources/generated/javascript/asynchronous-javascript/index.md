---
title: "Asynchronous JavaScript - Callbacks, Promises, Async/Await | Modern Age Coders"
description: "Master asynchronous JavaScript including setTimeout, callbacks, callback hell, Promises, .then/.catch/.finally, Promise.all/race/allSettled, async/await, and the event loop. 56+ practice questions with console.log order prediction."
slug: asynchronous-javascript
canonical: https://learn.modernagecoders.com/resources/javascript/asynchronous-javascript
category: "JavaScript"
keywords: ["javascript async await", "javascript promises", "callback hell", "event loop javascript", "setTimeout", "Promise.all", "async await tutorial", "javascript asynchronous", "then catch finally", "javascript callback function"]
---
# Asynchronous JavaScript - Callbacks, Promises, Async/Await

**Difficulty:** Advanced  
**Reading time:** 55 min  
**Chapter:** 19  
**Practice questions:** 50

## What Is Asynchronous JavaScript?

Most code you have written so far is **synchronous**: each line runs one after another, and the next line waits for the current one to finish. But some operations take time: loading data from a server, reading a file, or waiting for a user action. If JavaScript waited for each of these, your web page would freeze.

**Asynchronous** code lets JavaScript start a time-consuming operation and continue running other code. When the operation finishes, a callback function runs with the result.

```
// Synchronous: each line waits for the previous
console.log("1");
console.log("2");
console.log("3");
// Output: 1, 2, 3 (in order)

// Asynchronous: setTimeout does not block
console.log("A");
setTimeout(function() {
  console.log("B"); // Runs after 2 seconds
}, 2000);
console.log("C");
// Output: A, C, B (C prints before B!)
```

This is one of the most important concepts in JavaScript. Understanding async code is essential for working with APIs, animations, timers, and any real-world web application.

## Why Learn Asynchronous JavaScript?

### 1. JavaScript Is Single-Threaded

JavaScript has only one thread -- it can do one thing at a time. Without async, a network request taking 3 seconds would freeze the entire page for 3 seconds. No scrolling, no clicking, nothing. Async lets the browser handle the waiting while JavaScript continues running other code.

### 2. Every Real App Is Asynchronous

Loading user data from a database, fetching weather from an API, uploading a photo, sending a message -- all of these are async operations. If Aarav builds a weather app, the API request is async. If Priya builds a chat app, every message send and receive is async. You cannot build real apps without understanding async.

### 3. It Explains Confusing Behavior

Have you ever seen console.log output in a different order than expected? Or a variable that was `undefined` even though you assigned it? These are usually async issues. Understanding the event loop explains all of this.

### 4. Promises and Async/Await Are Everywhere

Modern JavaScript APIs (fetch, the File API, Web Workers) all return Promises. React, Node.js, and every major framework uses async/await heavily. It is an interview essential.

## Detailed Explanation

### 1. The Event Loop (How Async Works)

JavaScript has a **call stack** (where code runs) and a **task queue** (where async callbacks wait). The **event loop** checks: is the call stack empty? If yes, take the next task from the queue and run it.

```
console.log("1");

setTimeout(function() {
  console.log("2");
}, 0); // Even with 0ms delay!

console.log("3");

// Output: 1, 3, 2
// Why? setTimeout's callback goes to the task queue.
// It runs only AFTER the current code finishes.
```

Even with a 0ms delay, the setTimeout callback goes to the task queue and waits until the main code finishes. This is the key insight: **async callbacks never run until the current synchronous code is done**.

### 2. setTimeout and setInterval

```
// setTimeout: run once after a delay
setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);

// setInterval: run repeatedly at intervals
let count = 0;
const timer = setInterval(function() {
  count++;
  console.log("Count: " + count);
  if (count >= 5) {
    clearInterval(timer); // Stop the interval
  }
}, 1000);

// clearTimeout cancels a setTimeout
const timeoutId = setTimeout(function() {
  console.log("This will NOT run");
}, 5000);
clearTimeout(timeoutId); // Cancelled!
```

### 3. Callbacks

A **callback** is a function passed to another function, to be called later when an operation completes:

```
function loadData(callback) {
  console.log("Loading...");
  setTimeout(function() {
    const data = { name: "Aarav", score: 95 };
    callback(data); // Call the callback with the result
  }, 1000);
}

loadData(function(result) {
  console.log("Data loaded:", result);
});
console.log("This prints first!");

// Output:
// Loading...
// This prints first!
// Data loaded: { name: "Aarav", score: 95 }
```

### 4. Callback Hell (Pyramid of Doom)

When async operations depend on each other, callbacks get nested deeper and deeper:

```
// Callback Hell -- deeply nested, hard to read
getUser(userId, function(user) {
  getOrders(user.id, function(orders) {
    getOrderDetails(orders[0].id, function(details) {
      getShippingInfo(details.trackingId, function(shipping) {
        console.log("Shipping:", shipping.status);
        // And it gets worse...
      });
    });
  });
});
```

This is called the "pyramid of doom" because the code drifts to the right with each level. It is hard to read, hard to debug, and hard to add error handling. Promises solve this problem.

### 5. Promises

A **Promise** represents a value that will be available in the future. It can be in three states: **pending** (waiting), **fulfilled** (succeeded), or **rejected** (failed).

```
// Creating a Promise
const myPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    const success = true;
    if (success) {
      resolve("Data loaded!"); // Fulfilled
    } else {
      reject("Failed to load"); // Rejected
    }
  }, 1000);
});

// Using a Promise
myPromise
  .then(function(result) {
    console.log("Success:", result);
  })
  .catch(function(error) {
    console.log("Error:", error);
  });

// Output (after 1 second): Success: Data loaded!
```

### 6. Promise Chaining (.then)

Instead of nesting callbacks, Promises chain with `.then()`:

```
// Callback Hell becomes flat Promise chain
getUser(userId)
  .then(function(user) {
    return getOrders(user.id);
  })
  .then(function(orders) {
    return getOrderDetails(orders[0].id);
  })
  .then(function(details) {
    console.log("Details:", details);
  })
  .catch(function(error) {
    console.log("Error at any step:", error);
  });

// Each .then returns a new Promise
// .catch handles errors from ANY step in the chain
```

### 7. .catch() and .finally()

```
fetchData()
  .then(function(data) {
    console.log("Got data:", data);
  })
  .catch(function(error) {
    console.log("Error:", error);
  })
  .finally(function() {
    console.log("Done, success or failure");
    // Hide loading spinner here
  });
```

`.catch()` handles any rejected Promise in the chain. `.finally()` runs regardless of success or failure, like the `finally` block in try-catch.

### 8. Promise.all, Promise.race, Promise.allSettled, Promise.any

```
const p1 = new Promise(resolve => setTimeout(() => resolve("A"), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve("B"), 2000));
const p3 = new Promise(resolve => setTimeout(() => resolve("C"), 1500));

// Promise.all -- wait for ALL to finish (fails if ANY fails)
Promise.all([p1, p2, p3]).then(function(results) {
  console.log(results); // ["A", "B", "C"] (after 2 seconds)
});

// Promise.race -- first one to finish wins
Promise.race([p1, p2, p3]).then(function(result) {
  console.log(result); // "A" (fastest, 1 second)
});

// Promise.allSettled -- wait for ALL, even if some fail
const p4 = Promise.reject("error!");
Promise.allSettled([p1, p4]).then(function(results) {
  console.log(results);
  // [{ status: "fulfilled", value: "A" },
  //  { status: "rejected", reason: "error!" }]
});

// Promise.any -- first one to SUCCEED (ignores failures)
Promise.any([p4, p1, p2]).then(function(result) {
  console.log(result); // "A" (first success)
});
```

### 9. Async/Await

`async/await` is syntactic sugar over Promises. It makes async code look and behave like synchronous code:

```
// With .then() chains
function loadUserData() {
  return getUser(1)
    .then(function(user) {
      return getOrders(user.id);
    })
    .then(function(orders) {
      return orders;
    });
}

// With async/await (much cleaner)
async function loadUserData() {
  const user = await getUser(1);
  const orders = await getOrders(user.id);
  return orders;
}

// await pauses the function until the Promise resolves
// The function itself returns a Promise
```

Key rules:

- `await` can only be used inside an `async` function
- `async` functions always return a Promise
- `await` pauses the function (not the entire program) until the Promise resolves

### 10. Error Handling with Async/Await

```
async function fetchUserData(userId) {
  try {
    const user = await getUser(userId);
    const orders = await getOrders(user.id);
    console.log("Orders:", orders);
    return orders;
  } catch (error) {
    console.log("Failed:", error.message);
    return [];
  } finally {
    console.log("Loading complete");
  }
}

fetchUserData(1);
```

Use try-catch with async/await just like synchronous code. This is much cleaner than chaining `.catch()` calls.

### 11. Sequential vs Parallel Async Operations

```
// Sequential -- each waits for the previous (slower)
async function sequential() {
  const a = await slowOperation("A"); // waits 1 sec
  const b = await slowOperation("B"); // waits another 1 sec
  const c = await slowOperation("C"); // waits another 1 sec
  return [a, b, c]; // Total: 3 seconds
}

// Parallel -- all run at the same time (faster)
async function parallel() {
  const [a, b, c] = await Promise.all([
    slowOperation("A"),
    slowOperation("B"),
    slowOperation("C")
  ]);
  return [a, b, c]; // Total: 1 second (all run simultaneously)
}
```

If operations are independent (they do not need each other's results), run them in parallel with `Promise.all` for much better performance.

## Code Examples

### Event Loop in Action

```javascript
console.log("1 - Start");

setTimeout(function() {
  console.log("2 - Timeout 0ms");
}, 0);

Promise.resolve().then(function() {
  console.log("3 - Promise");
});

console.log("4 - End");

// Output order: 1, 4, 3, 2
// Why?
// 1 and 4 are synchronous (run immediately)
// 3 is a microtask (Promises have higher priority)
// 2 is a macrotask (setTimeout, runs after microtasks)
```

The event loop has two queues: the **microtask queue** (Promises, .then callbacks) and the **macrotask queue** (setTimeout, setInterval). After synchronous code finishes, microtasks run first, then macrotasks. That is why the Promise callback (3) runs before setTimeout (2), even though both are async.

**Output:**

```
1 - Start
4 - End
3 - Promise
2 - Timeout 0ms
```

### Creating and Using Promises

```javascript
function delay(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}

function loadStudent(name) {
  return new Promise(function(resolve, reject) {
    console.log("Loading " + name + "...");
    setTimeout(function() {
      if (name) {
        resolve({ name: name, score: Math.floor(Math.random() * 100) });
      } else {
        reject(new Error("Name is required"));
      }
    }, 1000);
  });
}

// Using the Promise
loadStudent("Aarav")
  .then(function(student) {
    console.log("Loaded:", student.name, "Score:", student.score);
    return loadStudent("Priya"); // Chain another async operation
  })
  .then(function(student) {
    console.log("Loaded:", student.name, "Score:", student.score);
  })
  .catch(function(error) {
    console.log("Error:", error.message);
  });
```

A Promise wraps an async operation. `resolve` is called on success, `reject` on failure. `.then()` chains operations sequentially. `.catch()` handles errors from any step. Returning a Promise from .then creates a chain.

**Output:**

```
Loading Aarav...
(after 1s) Loaded: Aarav Score: 73
Loading Priya...
(after 1s) Loaded: Priya Score: 88
```

### Promise.all for Parallel Operations

```javascript
function fetchScore(name, delayMs) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve({ name: name, score: Math.floor(Math.random() * 100) });
    }, delayMs);
  });
}

// Sequential: total time = 1000 + 1500 + 800 = 3300ms
async function sequential() {
  console.time("sequential");
  const a = await fetchScore("Aarav", 1000);
  const b = await fetchScore("Priya", 1500);
  const c = await fetchScore("Rohan", 800);
  console.timeEnd("sequential");
  console.log([a, b, c]);
}

// Parallel: total time = max(1000, 1500, 800) = 1500ms
async function parallel() {
  console.time("parallel");
  const [a, b, c] = await Promise.all([
    fetchScore("Aarav", 1000),
    fetchScore("Priya", 1500),
    fetchScore("Rohan", 800)
  ]);
  console.timeEnd("parallel");
  console.log([a, b, c]);
}

sequential();
// parallel(); // Uncomment to compare
```

Sequential awaits each operation before starting the next (total: sum of all times). Parallel starts all at once with Promise.all (total: time of the slowest). Use parallel when operations are independent. The results array preserves the order you passed them in.

**Output:**

```
sequential: ~3300ms
[{name:'Aarav',...}, {name:'Priya',...}, {name:'Rohan',...}]
```

### Async/Await with Error Handling

```javascript
function fetchData(id) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (id > 0) {
        resolve({ id: id, data: "Item " + id });
      } else {
        reject(new Error("Invalid ID: " + id));
      }
    }, 500);
  });
}

async function processItems(ids) {
  const results = [];

  for (const id of ids) {
    try {
      const item = await fetchData(id);
      results.push(item.data);
      console.log("Loaded:", item.data);
    } catch (error) {
      results.push("ERROR: " + error.message);
      console.log("Failed:", error.message);
    }
  }

  return results;
}

async function main() {
  const results = await processItems([1, 2, -1, 3]);
  console.log("Final:", results);
}

main();
```

try-catch inside a for...of loop handles errors per item without stopping the entire loop. Each failed item logs an error but processing continues with the next item. The final results array contains both successful data and error messages.

**Output:**

```
Loaded: Item 1
Loaded: Item 2
Failed: Invalid ID: -1
Loaded: Item 3
Final: ["Item 1", "Item 2", "ERROR: Invalid ID: -1", "Item 3"]
```

### Practical: Simulating a Loading Sequence

```javascript
function simulateLoad(step, duration) {
  return new Promise(function(resolve) {
    console.log(step + "...");
    setTimeout(function() {
      console.log(step + " done");
      resolve(step);
    }, duration);
  });
}

async function bootApp() {
  console.log("=== App Starting ===");

  // These must be sequential (each depends on the previous)
  await simulateLoad("Loading config", 500);
  await simulateLoad("Connecting to database", 800);

  // These can be parallel (independent of each other)
  await Promise.all([
    simulateLoad("Loading images", 600),
    simulateLoad("Loading fonts", 400),
    simulateLoad("Loading scripts", 700)
  ]);

  console.log("=== App Ready ===");
}

bootApp();
```

Real apps often have a mix of sequential and parallel operations. Config must load before database connection (sequential). But images, fonts, and scripts are independent (parallel with Promise.all). This pattern is common in app initialization.

**Output:**

```
=== App Starting ===
Loading config...
Loading config done
Connecting to database...
Connecting to database done
Loading images...
Loading fonts...
Loading scripts...
Loading fonts done
Loading images done
Loading scripts done
=== App Ready ===
```

### setInterval with Cleanup

```javascript
function createCountdown(seconds) {
  return new Promise(function(resolve) {
    let remaining = seconds;
    console.log("Countdown: " + remaining);

    const timer = setInterval(function() {
      remaining--;
      if (remaining > 0) {
        console.log("Countdown: " + remaining);
      } else {
        clearInterval(timer);
        console.log("GO!");
        resolve("Countdown complete");
      }
    }, 1000);
  });
}

async function startRace() {
  console.log("Get ready...");
  const result = await createCountdown(3);
  console.log(result);
  console.log("The race has begun!");
}

startRace();
```

This wraps setInterval in a Promise so it can be used with await. The interval counts down each second. When it reaches 0, it clears itself and resolves the Promise. The async function waits for the countdown to finish before continuing.

**Output:**

```
Get ready...
Countdown: 3
Countdown: 2
Countdown: 1
GO!
Countdown complete
The race has begun!
```

## Common Mistakes

### Expecting Async Code to Run in Order

**Wrong:**

```
let data;

setTimeout(function() {
  data = "loaded";
}, 1000);

console.log(data); // undefined! setTimeout hasn't run yet
```

data is undefined because the setTimeout callback has not executed yet when console.log runs.

**Correct:**

```
// Option 1: Use the data inside the callback
setTimeout(function() {
  const data = "loaded";
  console.log(data); // "loaded"
}, 1000);

// Option 2: Use async/await with a Promise
async function loadData() {
  const data = await new Promise(resolve => {
    setTimeout(() => resolve("loaded"), 1000);
  });
  console.log(data); // "loaded"
}
loadData();
```

Async operations complete later. Code after setTimeout runs immediately, before the callback. Use the data inside the callback, or wrap it in a Promise and use await.

### Forgetting to Return a Promise in .then() Chain

**Wrong:**

```
getUser(1)
  .then(function(user) {
    getOrders(user.id); // Forgot to return!
  })
  .then(function(orders) {
    console.log(orders); // undefined!
  });
```

orders is undefined because the previous .then did not return the Promise from getOrders.

**Correct:**

```
getUser(1)
  .then(function(user) {
    return getOrders(user.id); // Return the Promise!
  })
  .then(function(orders) {
    console.log(orders); // Now this works
  });
```

In a .then chain, you must `return` the Promise for the next .then to receive its result. Without return, the next .then gets undefined.

### Using await Outside an async Function

**Wrong:**

```
// At the top level of a regular script
const data = await fetch("https://api.example.com/data");
console.log(data);
// SyntaxError: await is only valid in async functions
```

SyntaxError: await is only valid in async functions and at the top level of a module.

**Correct:**

```
// Wrap in an async function
async function loadData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
}
loadData();

// Or use type="module" in HTML (allows top-level await)
// <script type="module">
//   const data = await fetch("...");
// </script>
```

The `await` keyword can only be used inside a function declared with `async`. Or at the top level of a module (``). Regular scripts do not support top-level await.

### Not Handling Promise Rejections

**Wrong:**

```
// No .catch() -- if the Promise rejects, the error is silent
fetch("https://bad-url.example.com/data")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });
// If fetch fails: UnhandledPromiseRejection warning
```

Unhandled promise rejection. The error is silently lost or causes a warning.

**Correct:**

```
fetch("https://bad-url.example.com/data")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log("Request failed:", error.message);
  });

// Or with async/await:
async function loadData() {
  try {
    const response = await fetch("https://bad-url.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Failed:", error.message);
  }
}
```

Always add `.catch()` to Promise chains or use try-catch with async/await. Unhandled rejections are a common source of silent failures that are hard to debug.

### Running Async Operations Sequentially When They Could Be Parallel

**Wrong:**

```
async function loadAll() {
  const a = await fetchUser();    // waits 1s
  const b = await fetchPosts();   // waits 1s
  const c = await fetchComments(); // waits 1s
  // Total: 3 seconds -- unnecessarily slow!
}
```

Each operation waits for the previous one to finish, even though they are independent.

**Correct:**

```
async function loadAll() {
  const [a, b, c] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments()
  ]);
  // Total: ~1 second (all run in parallel)
}
```

If async operations do not depend on each other, use `Promise.all` to run them in parallel. This can cut loading time dramatically. Only use sequential await when each operation needs the previous result.

## Summary

- JavaScript is single-threaded: it can only do one thing at a time. The event loop manages async operations by placing callbacks in a queue and running them after the current code finishes.
- setTimeout(fn, ms) runs a function after a delay. setInterval(fn, ms) runs repeatedly. clearTimeout and clearInterval cancel them. Even setTimeout with 0ms delay runs AFTER synchronous code.
- Callbacks are functions passed to other functions, called when an async operation completes. Nested callbacks create 'callback hell' (pyramid of doom) that is hard to read and maintain.
- A Promise represents a future value. It can be pending, fulfilled (resolved), or rejected. Create with new Promise((resolve, reject) => { }).
- .then() handles success, .catch() handles errors, .finally() runs regardless. Always return Promises in .then() chains so the next .then receives the result.
- Promise.all waits for ALL promises and returns an array of results. Promise.race returns the first to finish. Promise.allSettled waits for all and reports each status. Promise.any returns the first success.
- async/await is syntactic sugar over Promises. async functions always return a Promise. await pauses the function until a Promise resolves. It makes async code look synchronous.
- Use try-catch with async/await for error handling, just like synchronous code. Always handle errors -- unhandled rejections cause silent failures.
- For independent operations, use Promise.all for parallel execution. Sequential await is only needed when each step depends on the previous step's result.
- Microtasks (Promise callbacks) run before macrotasks (setTimeout callbacks). This is why Promise.resolve().then(fn) runs before setTimeout(fn, 0).

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/javascript/asynchronous-javascript/*
*Practice questions: https://learn.modernagecoders.com/resources/javascript/asynchronous-javascript/practice/*
