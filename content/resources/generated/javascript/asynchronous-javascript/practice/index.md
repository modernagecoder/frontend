---
title: "Practice: Asynchronous JavaScript - Callbacks, Promises, Async/Await"
description: "50 practice problems for Asynchronous JavaScript - Callbacks, Promises, Async/Await in JavaScript"
slug: asynchronous-javascript-practice
canonical: https://learn.modernagecoders.com/resources/javascript/asynchronous-javascript/practice
category: "JavaScript"
---
# Practice: Asynchronous JavaScript - Callbacks, Promises, Async/Await

**Total questions:** 50

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
console.log("A");
setTimeout(function() {
  console.log("B");
}, 0);
console.log("C");
```

*Hint:* Even with 0ms delay, setTimeout callback runs after synchronous code.

**Answer:** `A`
`C`
`B`

A prints (sync). setTimeout puts B in the task queue. C prints (sync). After sync code finishes, B runs from the queue.

### Q2. [Easy] What is the output?

```
console.log("start");
setTimeout(function() {
  console.log("timeout");
}, 1000);
console.log("end");
```

*Hint:* The timeout fires after 1 second. The rest runs immediately.

**Answer:** `start`
`end`
(after 1 second) `timeout`

'start' prints, setTimeout schedules callback for 1 second later, 'end' prints. After 1 second, 'timeout' prints.

### Q3. [Easy] What is the output?

```
const p = new Promise(function(resolve) {
  resolve(42);
});

p.then(function(value) {
  console.log(value);
});
```

*Hint:* The Promise is immediately resolved with 42.

**Answer:** `42`

The Promise resolves with 42. The .then callback receives 42 and logs it.

### Q4. [Easy] What is the output?

```
async function greet() {
  return "Hello";
}

greet().then(function(msg) {
  console.log(msg);
});
```

*Hint:* async functions always return a Promise.

**Answer:** `Hello`

An async function automatically wraps the return value in a Promise. greet() returns Promise that resolves to 'Hello'. The .then receives it.

### Q5. [Easy] What is the output?

```
console.log("1");

Promise.resolve("2").then(function(val) {
  console.log(val);
});

console.log("3");
```

*Hint:* Promise.then callbacks are microtasks -- they run after sync code but before setTimeout.

**Answer:** `1`
`3`
`2`

'1' prints (sync). Promise.then is async (microtask). '3' prints (sync). After sync finishes, '2' prints from the microtask queue.

### Q6. [Medium] What is the output?

```
console.log("1");

setTimeout(function() {
  console.log("2");
}, 0);

Promise.resolve().then(function() {
  console.log("3");
});

console.log("4");
```

*Hint:* Microtasks (Promises) run before macrotasks (setTimeout).

**Answer:** `1`
`4`
`3`
`2`

'1' and '4' are synchronous. Promise.then is a microtask (3). setTimeout is a macrotask (2). Microtasks run first, then macrotasks.

### Q7. [Medium] What is the output?

```
const p = new Promise(function(resolve, reject) {
  reject("error!");
});

p.then(function(val) {
  console.log("then:", val);
}).catch(function(err) {
  console.log("catch:", err);
});
```

*Hint:* The Promise is rejected, so .then is skipped and .catch runs.

**Answer:** `catch: error!`

The Promise rejects with 'error!'. The .then callback is skipped (it only runs on resolve). The .catch callback runs with the rejection value.

### Q8. [Medium] What is the output?

```
Promise.resolve(1)
  .then(function(x) {
    console.log(x);
    return x + 1;
  })
  .then(function(x) {
    console.log(x);
    return x + 1;
  })
  .then(function(x) {
    console.log(x);
  });
```

*Hint:* Each .then receives the return value of the previous .then.

**Answer:** `1`
`2`
`3`

First .then gets 1, returns 2. Second .then gets 2, returns 3. Third .then gets 3. The return value of each .then becomes the input to the next.

### Q9. [Medium] What is the output?

```
async function test() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

console.log("C");
test();
console.log("D");
```

*Hint:* await pauses the async function but NOT the caller.

**Answer:** `C`
`A`
`D`
`B`

'C' prints. test() starts, 'A' prints. await pauses test(). Control returns to caller. 'D' prints. After sync finishes, 'B' prints.

### Q10. [Hard] What is the output?

```
async function f1() {
  console.log("f1 start");
  await f2();
  console.log("f1 end");
}

async function f2() {
  console.log("f2 start");
  await Promise.resolve();
  console.log("f2 end");
}

console.log("main start");
f1();
console.log("main end");
```

*Hint:* Each await pauses its function. Synchronous code always runs first.

**Answer:** `main start`
`f1 start`
`f2 start`
`main end`
`f2 end`
`f1 end`

'main start' (sync). f1 starts, 'f1 start'. f1 calls f2. 'f2 start'. f2 hits await, pauses. f1 is also paused (waiting for f2). 'main end' (sync). Then f2 resumes: 'f2 end'. Then f1 resumes: 'f1 end'.

### Q11. [Hard] What is the output?

```
const p1 = new Promise(resolve => setTimeout(() => resolve("A"), 100));
const p2 = new Promise(resolve => setTimeout(() => resolve("B"), 50));
const p3 = new Promise(resolve => setTimeout(() => resolve("C"), 150));

Promise.all([p1, p2, p3]).then(function(results) {
  console.log(results);
});

Promise.race([p1, p2, p3]).then(function(result) {
  console.log(result);
});
```

*Hint:* all returns results in input order. race returns the fastest.

**Answer:** `B`
`["A", "B", "C"]`

race resolves with the fastest (B at 50ms). all waits for all to finish (150ms) and returns results in the original order [A, B, C], not in the order they finished.

### Q12. [Hard] What is the output?

```
console.log("1");

setTimeout(() => console.log("2"), 0);
setTimeout(() => console.log("3"), 0);

Promise.resolve()
  .then(() => console.log("4"))
  .then(() => console.log("5"));

Promise.resolve()
  .then(() => console.log("6"));

console.log("7");
```

*Hint:* All microtasks drain before any macrotask runs.

**Answer:** `1`
`7`
`4`
`6`
`5`
`2`
`3`

Sync: 1, 7. Then microtasks: 4 and 6 (both .then from resolved promises), then 5 (chained .then from first promise). Then macrotasks: 2, 3 (setTimeouts in order).

### Q13. [Hard] What is the output?

```
async function test() {
  try {
    const result = await Promise.reject("fail");
    console.log("result:", result);
  } catch (error) {
    console.log("caught:", error);
  } finally {
    console.log("finally");
  }
}

test();
console.log("after test");
```

*Hint:* await on a rejected Promise throws in the async function.

**Answer:** `after test`
`caught: fail`
`finally`

'after test' prints first (sync). Then the async function runs: await rejects, catch runs ('caught: fail'), finally runs ('finally'). The 'result' line never executes.

## Mixed Questions

### Q1. [Easy] What is the output?

```
const p = Promise.resolve("done");
console.log(typeof p);
p.then(val => console.log(val));
```

*Hint:* Promise.resolve returns a Promise object.

**Answer:** `object`
`done`

typeof a Promise is 'object'. The .then callback receives 'done' and logs it.

### Q2. [Easy] What is the output?

```
async function add(a, b) {
  return a + b;
}

add(3, 4).then(result => console.log(result));
```

*Hint:* async functions wrap return values in a Promise.

**Answer:** `7`

The async function returns 3 + 4 = 7 wrapped in a Promise. The .then receives 7.

### Q3. [Medium] What is the output?

```
let x = 0;

setTimeout(() => { x = 1; }, 0);
Promise.resolve().then(() => { x = 2; });

console.log(x);

setTimeout(() => { console.log(x); }, 100);
```

*Hint:* First console.log is sync. Second is after everything has run.

**Answer:** `0`
`1`

First log: x is still 0 (async has not run). Then microtask sets x=2. Then macrotask sets x=1. After 100ms, x is 1 (setTimeout ran after Promise.then).

### Q4. [Medium] What is the output?

```
function delay(ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

async function test() {
  const result = await delay(100, "hello");
  console.log(result.toUpperCase());
}

test();
```

*Hint:* await pauses until the Promise resolves with the value.

**Answer:** `HELLO`

delay returns a Promise that resolves with 'hello' after 100ms. await gets 'hello'. toUpperCase() gives 'HELLO'.

### Q5. [Medium] What is the output?

```
Promise.resolve("A")
  .then(val => {
    console.log(val);
    throw new Error("B");
  })
  .then(val => {
    console.log("C");
  })
  .catch(err => {
    console.log(err.message);
  })
  .then(() => {
    console.log("D");
  });
```

*Hint:* An error in .then skips to .catch. After .catch, the chain continues.

**Answer:** `A`
`B`
`D`

A logs. throw Error skips 'C' and goes to catch. catch logs 'B' (error message). After catch, the chain resumes: 'D' logs.

### Q6. [Hard] What is the output?

```
async function test() {
  const results = await Promise.allSettled([
    Promise.resolve("ok"),
    Promise.reject("fail"),
    Promise.resolve("done")
  ]);

  results.forEach(r => {
    console.log(r.status, r.value || r.reason);
  });
}

test();
```

*Hint:* allSettled never rejects. It reports each Promise's status.

**Answer:** `fulfilled ok`
`rejected fail`
`fulfilled done`

allSettled waits for all Promises regardless of success/failure. Each result has status ('fulfilled' or 'rejected') and either value or reason.

### Q7. [Hard] What is the output?

```
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 0);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 0);
}
```

*Hint:* var shares one variable. let creates a new one per iteration.

**Answer:** `var: 3`
`var: 3`
`var: 3`
`let: 0`
`let: 1`
`let: 2`

With var, all callbacks share one i (which is 3 after the loop). With let, each iteration has its own j, so callbacks capture 0, 1, 2 correctly.

### Q8. [Medium] What is the difference between `Promise.all` and `Promise.allSettled`?

*Hint:* What happens when one Promise rejects?

**Answer:** `Promise.all` rejects immediately if ANY Promise rejects. You get the error and lose the results of successful Promises. `Promise.allSettled` waits for ALL Promises to finish and reports each one's status (fulfilled or rejected). It never rejects itself.

Use all when you need every operation to succeed (and want to fail fast). Use allSettled when you want results for each operation regardless of whether some failed.

### Q9. [Hard] Why does `Promise.resolve().then(fn)` run before `setTimeout(fn, 0)` even though both have 0 delay?

*Hint:* Think about microtasks vs macrotasks.

**Answer:** The event loop has two queues: the microtask queue (Promise callbacks) and the macrotask queue (setTimeout, setInterval). After each macrotask finishes, ALL microtasks are drained before the next macrotask runs. So Promise.then (microtask) always runs before setTimeout (macrotask), regardless of delay values.

The priority order is: synchronous code > microtasks (Promise.then) > macrotasks (setTimeout). This is a fundamental rule of the JavaScript event loop.

## Multiple Choice Questions

### Q1. [Easy] What does 'asynchronous' mean in JavaScript?

**Answer:** B

**B is correct.** Asynchronous means starting an operation (like a network request) and continuing to run other code. When the operation finishes, a callback handles the result. JavaScript is still single-threaded.

### Q2. [Easy] What does `setTimeout(fn, 0)` do?

**Answer:** C

**C is correct.** Even with 0ms delay, the callback is placed in the macrotask queue and runs only after the current synchronous code finishes and all microtasks drain.

### Q3. [Easy] What are the three states of a Promise?

**Answer:** B

**B is correct.** A Promise starts as pending, then transitions to either fulfilled (resolve was called) or rejected (reject was called). Once settled, it cannot change again.

### Q4. [Easy] What keyword makes a function return a Promise?

**Answer:** C

**C is correct.** Adding `async` before a function declaration makes it always return a Promise. The return value is automatically wrapped in Promise.resolve().

### Q5. [Easy] Where can `await` be used?

**Answer:** B

**B is correct.** `await` can only appear inside `async` functions or at the top level of ES modules. Using it elsewhere causes a SyntaxError.

### Q6. [Medium] What does `.catch()` do in a Promise chain?

**Answer:** B

**B is correct.** `.catch()` handles rejections from ANY .then() before it in the chain. It is like a safety net for the entire chain.

### Q7. [Medium] What does `Promise.all([p1, p2, p3])` do?

**Answer:** B

**B is correct.** Promise.all waits for ALL Promises to resolve and returns their results as an array in the same order. If ANY Promise rejects, Promise.all immediately rejects.

### Q8. [Medium] What is 'callback hell'?

**Answer:** B

**B is correct.** Callback hell (also called the pyramid of doom) occurs when async operations are nested inside each other, creating deeply indented code. Promises and async/await solve this.

### Q9. [Medium] What does `.finally()` do on a Promise?

**Answer:** C

**C is correct.** `.finally()` runs whether the Promise resolved or rejected. It is used for cleanup like hiding loading spinners. It does not receive the value or error.

### Q10. [Hard] Which runs first: `Promise.resolve().then(fn1)` or `setTimeout(fn2, 0)`?

**Answer:** B

**B is correct.** Promise.then callbacks are microtasks, which have higher priority than macrotasks (setTimeout). All microtasks drain before the next macrotask runs.

### Q11. [Hard] When should you use `Promise.all` vs sequential `await`?

**Answer:** B

**B is correct.** Promise.all runs operations in parallel (faster) but is only appropriate when they are independent. Use sequential await when operation B needs the result of operation A.

### Q12. [Hard] What happens if you forget to `await` an async function call?

**Answer:** B

**B is correct.** Without await, the async function returns a Promise object. Your variable holds the Promise, not its result. This leads to bugs like 'Promise {  }' appearing in your output.

### Q13. [Hard] What does `Promise.race([p1, p2, p3])` return?

**Answer:** B

**B is correct.** Promise.race returns a Promise that settles with the result of whichever Promise finishes first, whether it resolves or rejects.

### Q14. [Easy] What function cancels a setTimeout?

**Answer:** C

**C is correct.** `clearTimeout(timerId)` cancels a pending setTimeout. You need the ID returned by setTimeout: `const id = setTimeout(fn, 1000); clearTimeout(id);`

### Q15. [Medium] What does `Promise.reject('error')` return?

**Answer:** B

**B is correct.** `Promise.reject(value)` creates a Promise that is immediately in the rejected state. You need `.catch()` or try-catch to handle it.

### Q16. [Easy] What is a callback function?

**Answer:** B

**B is correct.** A callback is a function you pass as an argument to another function. The receiving function 'calls back' your function when an operation completes.

### Q17. [Medium] What happens if a Promise is rejected and there is no .catch() handler?

**Answer:** C

**C is correct.** Unhandled promise rejections produce a warning in the console. In Node.js, they can even crash the process. Always add .catch() or use try-catch with await.

### Q18. [Hard] What does `Promise.any([p1, p2, p3])` do?

**Answer:** C

**C is correct.** `Promise.any` returns the first Promise that resolves successfully. It ignores rejections unless ALL Promises reject (then it throws AggregateError).

### Q19. [Hard] In `async function f() { return 42; }`, what does `f()` return?

**Answer:** C

**C is correct.** async functions always wrap their return value in a Promise. `f()` returns `Promise.resolve(42)`, not the number 42 directly. You need `await f()` or `f().then()` to get 42.

### Q20. [Medium] What does `clearInterval(timer)` do?

**Answer:** B

**B is correct.** `clearInterval` permanently stops a running setInterval. The callback will never be called again. There is no way to pause and resume an interval.

## Coding Challenges

### Challenge 1. Delay Function with Promise

**Difficulty:** Easy

Write a function delay(ms) that returns a Promise which resolves after ms milliseconds. Then use it with async/await to print 'A', wait 1 second, print 'B', wait 1 second, print 'C'.

**Constraints:**

- Use new Promise and setTimeout. Use async/await to sequence.

**Sample input:**

```
delay(1000)
```

**Sample output:**

```
A (immediate)
B (after 1s)
C (after 2s)
```

**Solution:**

```javascript
function delay(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}

async function main() {
  console.log('A');
  await delay(1000);
  console.log('B');
  await delay(1000);
  console.log('C');
}

main();
```

### Challenge 2. Promise-based Timer

**Difficulty:** Easy

Write a function countdown(n) that returns a Promise. It should log n, n-1, n-2, ... 1 each second, then resolve with 'done' when it reaches 0.

**Constraints:**

- Use setInterval inside a new Promise. clearInterval when done.

**Sample input:**

```
countdown(3)
```

**Sample output:**

```
3
2
1
done
```

**Solution:**

```javascript
function countdown(n) {
  return new Promise(function(resolve) {
    let current = n;
    console.log(current);
    const timer = setInterval(function() {
      current--;
      if (current > 0) {
        console.log(current);
      } else {
        clearInterval(timer);
        resolve('done');
      }
    }, 1000);
  });
}

countdown(3).then(result => console.log(result));
```

### Challenge 3. Sequential vs Parallel Comparison

**Difficulty:** Medium

Write two functions: sequentialLoad(names) and parallelLoad(names) that simulate loading data for each name (500ms each). Compare the time taken using console.time.

**Constraints:**

- Use a fake loadUser function that returns a Promise. Use Promise.all for parallel.

**Sample input:**

```
["Aarav", "Priya", "Rohan"]
```

**Sample output:**

```
sequential: ~1500ms
parallel: ~500ms
```

**Solution:**

```javascript
function loadUser(name) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ name, loaded: true }), 500);
  });
}

async function sequentialLoad(names) {
  console.time('sequential');
  const results = [];
  for (const name of names) {
    results.push(await loadUser(name));
  }
  console.timeEnd('sequential');
  return results;
}

async function parallelLoad(names) {
  console.time('parallel');
  const results = await Promise.all(names.map(loadUser));
  console.timeEnd('parallel');
  return results;
}

async function main() {
  await sequentialLoad(['Aarav', 'Priya', 'Rohan']);
  await parallelLoad(['Aarav', 'Priya', 'Rohan']);
}
main();
```

### Challenge 4. Retry with Delay

**Difficulty:** Medium

Write an async function retryWithDelay(fn, maxRetries, delayMs) that calls fn(), and if it throws, waits delayMs milliseconds and tries again, up to maxRetries times.

**Constraints:**

- Use async/await and a delay function.

**Sample input:**

```
A function that fails twice then succeeds
```

**Sample output:**

```
Attempt 1: failed, retrying in 500ms
Attempt 2: failed, retrying in 500ms
Attempt 3: success!
```

**Solution:**

```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function retryWithDelay(fn, maxRetries, delayMs) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const result = await fn();
      console.log('Attempt ' + attempt + ': success!');
      return result;
    } catch (error) {
      console.log('Attempt ' + attempt + ': failed, retrying in ' + delayMs + 'ms');
      if (attempt === maxRetries) throw error;
      await delay(delayMs);
    }
  }
}

let callCount = 0;
async function unreliable() {
  callCount++;
  if (callCount < 3) throw new Error('not ready');
  return 'data';
}

retryWithDelay(unreliable, 5, 500).then(r => console.log('Got:', r));
```

### Challenge 5. Promise.allSettled Report

**Difficulty:** Medium

Write an async function runAll(tasks) where tasks is an array of functions that return Promises. Use Promise.allSettled and return a summary: { total, succeeded, failed, results }.

**Constraints:**

- Use Promise.allSettled. Count fulfilled and rejected.

**Sample input:**

```
[() => Promise.resolve('a'), () => Promise.reject('b'), () => Promise.resolve('c')]
```

**Sample output:**

```
{ total: 3, succeeded: 2, failed: 1, results: [...] }
```

**Solution:**

```javascript
async function runAll(tasks) {
  const promises = tasks.map(fn => fn());
  const results = await Promise.allSettled(promises);

  return {
    total: results.length,
    succeeded: results.filter(r => r.status === 'fulfilled').length,
    failed: results.filter(r => r.status === 'rejected').length,
    results: results
  };
}

async function main() {
  const report = await runAll([
    () => Promise.resolve('data1'),
    () => Promise.reject('error1'),
    () => Promise.resolve('data2'),
    () => Promise.reject('error2')
  ]);
  console.log('Total:', report.total);
  console.log('Succeeded:', report.succeeded);
  console.log('Failed:', report.failed);
}
main();
```

### Challenge 6. Timeout Wrapper

**Difficulty:** Hard

Write a function withTimeout(promise, ms) that races the given Promise against a timer. If the Promise does not resolve within ms milliseconds, reject with 'Timeout after {ms}ms'.

**Constraints:**

- Use Promise.race with a timeout Promise.

**Sample input:**

```
withTimeout(delay(5000, 'data'), 2000)
```

**Sample output:**

```
Error: Timeout after 2000ms
```

**Solution:**

```javascript
function withTimeout(promise, ms) {
  const timeout = new Promise(function(_, reject) {
    setTimeout(function() {
      reject(new Error('Timeout after ' + ms + 'ms'));
    }, ms);
  });
  return Promise.race([promise, timeout]);
}

function slowOperation() {
  return new Promise(resolve => setTimeout(() => resolve('done'), 5000));
}

function fastOperation() {
  return new Promise(resolve => setTimeout(() => resolve('done'), 500));
}

async function main() {
  try {
    const result = await withTimeout(fastOperation(), 2000);
    console.log('Fast:', result);
  } catch (e) {
    console.log('Fast error:', e.message);
  }

  try {
    const result = await withTimeout(slowOperation(), 2000);
    console.log('Slow:', result);
  } catch (e) {
    console.log('Slow error:', e.message);
  }
}
main();
```

### Challenge 7. Async Queue (Process One at a Time)

**Difficulty:** Hard

Build an AsyncQueue class with an add(asyncFn) method. Tasks should be processed one at a time in the order they are added. Each task must complete before the next starts.

**Constraints:**

- Tasks must run sequentially. Use async/await internally.

**Sample input:**

```
queue.add(() => delay(1000, 'A')); queue.add(() => delay(500, 'B'));
```

**Sample output:**

```
A finishes at 1000ms, B finishes at 1500ms (not 500ms)
```

**Solution:**

```javascript
class AsyncQueue {
  constructor() {
    this.queue = [];
    this.running = false;
  }

  add(asyncFn) {
    return new Promise((resolve, reject) => {
      this.queue.push({ fn: asyncFn, resolve, reject });
      if (!this.running) {
        this.process();
      }
    });
  }

  async process() {
    this.running = true;
    while (this.queue.length > 0) {
      const { fn, resolve, reject } = this.queue.shift();
      try {
        const result = await fn();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }
    this.running = false;
  }
}

const queue = new AsyncQueue();
function delay(ms, val) {
  return new Promise(r => setTimeout(() => r(val), ms));
}

queue.add(() => delay(1000, 'A')).then(v => console.log(v, Date.now()));
queue.add(() => delay(500, 'B')).then(v => console.log(v, Date.now()));
queue.add(() => delay(300, 'C')).then(v => console.log(v, Date.now()));
```

### Challenge 8. Loading Indicator with Async/Await

**Difficulty:** Medium

Write an async function fetchWithLoading(url, loadingEl) that shows 'Loading...' in a DOM element, fetches data (simulate with delay), shows the result on success, and shows 'Error' on failure. Use try-catch-finally to always clear the loading state.

**Constraints:**

- Use try-catch-finally. Show and hide loading state.

**Sample input:**

```
A simulated fetch with a DOM element
```

**Sample output:**

```
Loading... -> Data loaded -> (loading hidden)
```

**Solution:**

```javascript
function simulateFetch(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url.includes('fail')) reject(new Error('Network error'));
      else resolve({ data: 'Result from ' + url });
    }, 1000);
  });
}

async function fetchWithLoading(url, statusEl) {
  statusEl.textContent = 'Loading...';
  try {
    const result = await simulateFetch(url);
    statusEl.textContent = 'Success: ' + result.data;
    return result;
  } catch (error) {
    statusEl.textContent = 'Error: ' + error.message;
    return null;
  } finally {
    console.log('Loading complete for', url);
  }
}

// Usage:
// const el = document.getElementById('status');
// fetchWithLoading('/api/data', el);
// fetchWithLoading('/api/fail', el);
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/asynchronous-javascript/*
