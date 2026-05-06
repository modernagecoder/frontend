---
title: "Practice: ES6+ Modern JavaScript Features"
description: "52 practice problems for ES6+ Modern JavaScript Features in JavaScript"
slug: es6-modern-javascript-practice
canonical: https://learn.modernagecoders.com/resources/javascript/es6-modern-javascript/practice
category: "JavaScript"
---
# Practice: ES6+ Modern JavaScript Features

**Total questions:** 52

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
const x = 10;
let y = 20;
y = 30;
console.log(x, y);
```

*Hint:* const cannot be reassigned, let can.

**Answer:** `10 30`

x is const and stays 10. y is let and is reassigned to 30.

### Q2. [Easy] What is the output?

```
const double = n => n * 2;
console.log(double(7));
```

*Hint:* Arrow function with single parameter and implicit return.

**Answer:** `14`

The arrow function takes n and returns n * 2. 7 * 2 = 14. Single parameter does not need parentheses, single expression does not need return keyword.

### Q3. [Easy] What is the output?

```
const [a, b, c] = ["red", "green", "blue"];
console.log(b);
```

*Hint:* Array destructuring maps by position.

**Answer:** `green`

Array destructuring assigns by position: a="red", b="green", c="blue". console.log(b) outputs "green".

### Q4. [Easy] What is the output?

```
const { name, age } = { name: "Kavya", age: 14, city: "Pune" };
console.log(name, age);
```

*Hint:* Object destructuring extracts named properties.

**Answer:** `Kavya 14`

Object destructuring extracts name and age from the object. city is not destructured so it is ignored.

### Q5. [Easy] What is the output?

```
const arr = [1, 2, 3];
const merged = [...arr, 4, 5];
console.log(merged);
```

*Hint:* Spread expands the array elements.

**Answer:** `[1, 2, 3, 4, 5]`

The spread operator expands arr into individual elements: 1, 2, 3. Then 4 and 5 are added after.

### Q6. [Medium] What is the output?

```
const [first, , third] = [10, 20, 30, 40];
console.log(first, third);
```

*Hint:* The empty slot (comma with nothing) skips an element.

**Answer:** `10 30`

The empty position (between the two commas) skips the second element (20). first=10, third=30. The 40 is not destructured.

### Q7. [Medium] What is the output?

```
const { name: studentName, grade = "10th" } = { name: "Rohan" };
console.log(studentName);
console.log(grade);
```

*Hint:* name: studentName renames. grade has a default because it is not in the object.

**Answer:** `Rohan`
`10th`

`name: studentName` renames: the value of name goes into studentName. grade is not in the object, so the default "10th" is used.

### Q8. [Medium] What is the output?

```
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet("Aarav"));
console.log(greet());
console.log(greet(undefined));
```

*Hint:* Default is used when no argument or undefined is passed.

**Answer:** `Hello, Aarav!`
`Hello, Guest!`
`Hello, Guest!`

"Aarav" is provided so it overrides the default. No argument and undefined both trigger the default "Guest".

### Q9. [Medium] What is the output?

```
const base = { a: 1, b: 2 };
const extra = { b: 3, c: 4 };
const merged = { ...base, ...extra };
console.log(merged);
```

*Hint:* When spreading objects, later properties override earlier ones with the same key.

**Answer:** `{ a: 1, b: 3, c: 4 }`

Spread base gives a:1, b:2. Spread extra gives b:3, c:4. The second b:3 overrides the first b:2. Result: {a:1, b:3, c:4}.

### Q10. [Medium] What is the output?

```
const [first, ...rest] = [10, 20, 30, 40, 50];
console.log(first);
console.log(rest);
console.log(rest.length);
```

*Hint:* Rest collects all remaining elements into an array.

**Answer:** `10`
`[20, 30, 40, 50]`
`4`

first gets 10. rest collects the remaining elements [20, 30, 40, 50]. rest.length is 4.

### Q11. [Medium] What is the output?

```
const user = { name: "Diya" };
console.log(user.address?.city);
console.log(user.address?.city ?? "Unknown");
```

*Hint:* Optional chaining returns undefined when a level is missing.

**Answer:** `undefined`
`Unknown`

user.address is undefined. Optional chaining returns undefined (no error). Then ?? replaces undefined with "Unknown".

### Q12. [Hard] What is the output?

```
const { a: { b: value } = {} } = { a: { b: 42 } };
console.log(value);

const { a: { b: value2 } = {} } = {};
console.log(value2);
```

*Hint:* In the first case, a exists. In the second, a is undefined so the default {} is used.

**Answer:** `42`
`undefined`

First: a exists as {b: 42}, so b is 42. The default = {} is not needed. Second: a does not exist, so the default {} is used. {} has no b property, so value2 is undefined.

### Q13. [Hard] What is the output?

```
console.log(0 ?? "zero");
console.log(0 || "zero");
console.log("" ?? "empty");
console.log("" || "empty");
console.log(null ?? "null");
console.log(null || "null");
```

*Hint:* ?? triggers only on null/undefined. || triggers on any falsy value.

**Answer:** `0`
`zero`
`` (empty string)
`empty`
`null`
`null`

?? only replaces null and undefined. 0 and "" are NOT null/undefined, so ?? keeps them. || replaces any falsy value (0, "", null, false). Both give "null" for the null case.

### Q14. [Hard] What is the output?

```
function collect(first, ...middle, last) {
  console.log(first, middle, last);
}
collect(1, 2, 3, 4, 5);
```

*Hint:* Where must rest parameters appear?

**Answer:** `SyntaxError: Rest parameter must be last formal parameter`

Rest parameters must be the LAST parameter in the function. Having `last` after `...middle` is a syntax error. JavaScript would not know where "middle" ends and "last" begins.

### Q15. [Hard] What is the output?

```
const set = new Set([1, 2, 3, 2, 1]);
set.add(4);
set.add(2);
set.delete(1);
console.log([...set]);
console.log(set.size);
```

*Hint:* Set removes duplicates. Adding an existing value does nothing.

**Answer:** `[2, 3, 4]`
`3`

Initial set: {1, 2, 3} (duplicates removed). Add 4: {1, 2, 3, 4}. Add 2 again: no change (already exists). Delete 1: {2, 3, 4}. Size is 3.

## Mixed Questions

### Q1. [Easy] What is the output?

```
const add = (a, b) => a + b;
const result = add(3, 4);
console.log(result);
```

*Hint:* Arrow function with two parameters and implicit return.

**Answer:** `7`

The arrow function adds a and b. 3 + 4 = 7.

### Q2. [Easy] What is the output?

```
const name = "Ankit";
const age = 16;
const student = { name, age };
console.log(student);
```

*Hint:* Shorthand property syntax: { name } is the same as { name: name }.

**Answer:** `{ name: "Ankit", age: 16 }`

Shorthand property syntax. When the variable name matches the property name, you write { name } instead of { name: name }.

### Q3. [Medium] What is the output?

```
let a = 5, b = 10;
[a, b] = [b, a];
console.log(a, b);
```

*Hint:* Array destructuring swaps values without a temporary variable.

**Answer:** `10 5`

The right side creates [10, 5]. Destructuring assigns a=10 and b=5. This is the swap pattern using destructuring.

### Q4. [Medium] What is the output?

```
const key = "score";
const obj = { [key]: 95, [key + "Max"]: 100 };
console.log(obj);
```

*Hint:* Computed property names use [expression] as the key.

**Answer:** `{ score: 95, scoreMax: 100 }`

Computed property names: [key] evaluates to "score", [key + "Max"] evaluates to "scoreMax".

### Q5. [Medium] What is the output?

```
const map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("a", 3);
console.log(map.get("a"));
console.log(map.size);
```

*Hint:* Setting the same key again overwrites the value.

**Answer:** `3`
`2`

The second set("a", 3) overwrites the first set("a", 1). So get("a") returns 3. Size is 2 (keys "a" and "b").

### Q6. [Medium] What is the output?

```
const arr = [1, 2, 3];
const copy = [...arr];
copy.push(4);
console.log(arr.length);
console.log(copy.length);
```

*Hint:* Spread creates a new array. Changes to copy do not affect original.

**Answer:** `3`
`4`

Spread creates a shallow copy. Pushing to copy does not affect the original arr. arr stays [1,2,3] (length 3), copy becomes [1,2,3,4] (length 4).

### Q7. [Hard] What is the output?

```
const fn = () => ({ name: "test" });
const fn2 = () => { name: "test" };
console.log(fn());
console.log(fn2());
```

*Hint:* Pay attention to the parentheses around the object literal.

**Answer:** `{ name: "test" }`
`undefined`

fn wraps the object in parentheses, so it returns the object. fn2 has { } treated as a function body, "name:" is treated as a label, and there is no return statement, so it returns undefined.

### Q8. [Hard] What is the output?

```
function test({ a, b = 10, ...rest }) {
  console.log(a, b, rest);
}

test({ a: 1, b: 2, c: 3, d: 4 });
test({ a: 5, c: 6 });
```

*Hint:* Destructure the parameter. b has a default. rest collects remaining properties.

**Answer:** `1 2 { c: 3, d: 4 }`
`5 10 { c: 6 }`

First call: a=1, b=2 (provided), rest={c:3, d:4}. Second call: a=5, b=10 (default since not provided), rest={c:6}.

### Q9. [Hard] What is the output?

```
if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}
console.log(a);
console.log(typeof b);
console.log(typeof c);
```

*Hint:* var escapes the block. let and const do not.

**Answer:** `1`
`undefined`
`undefined`

var is function-scoped, so a is accessible outside the block. let and const are block-scoped, so b and c do not exist outside. typeof returns "undefined" for undeclared variables.

### Q10. [Hard] What is the output?

```
const nums = [5, 2, 8, 1, 9];
console.log(Math.max(...nums));
console.log(Math.min(...nums));

const all = [...nums, ...nums];
console.log(all.length);
console.log(new Set(all).size);
```

*Hint:* Spread in function args. Spread in array creation. Set removes duplicates.

**Answer:** `9`
`1`
`10`
`5`

Spread passes array elements as arguments to Math.max (9) and Math.min (1). Merging nums with itself gives 10 elements. Set removes duplicates: 5 unique values.

## Multiple Choice Questions

### Q1. [Easy] Which keyword should you use by default for declaring variables in modern JavaScript?

**Answer:** C

**C is correct.** Use `const` by default. Only use `let` when you need to reassign. Never use `var` in modern code.

### Q2. [Easy] What is the short form of `const double = (n) => { return n * 2; };`?

**Answer:** B

**B is correct.** Single parameter can drop parentheses. Single expression can drop curly braces and return keyword. `n => n * 2` is the shortest form.

### Q3. [Easy] What does `const [a, b] = [10, 20]` do?

**Answer:** B

**B is correct.** This is array destructuring. It assigns the first element (10) to a and the second (20) to b.

### Q4. [Easy] What does the spread operator `...` do with arrays?

**Answer:** C

**C is correct.** `...[1,2,3]` expands into 1, 2, 3 as individual values. Used in function calls, array creation, and object merging.

### Q5. [Easy] What is the difference between `let` and `const`?

**Answer:** B

**B is correct.** `let` allows reassignment (`let x = 1; x = 2;`). `const` does not allow reassignment after declaration.

### Q6. [Medium] What does `const { name: n } = { name: "Aarav" };` do?

**Answer:** B

**B is correct.** In destructuring, `name: n` means 'take the name property and store it in a variable called n'. Only `n` is created, not `name`.

### Q7. [Medium] What does the rest operator (...) do in function parameters?

**Answer:** C

**C is correct.** In function parameters, `...args` collects all remaining arguments into an array called args. It must be the last parameter.

### Q8. [Medium] What does `user.address?.city` return when `user.address` is undefined?

**Answer:** B

**B is correct.** Optional chaining `?.` returns `undefined` when the chain is broken (when a property does not exist), instead of throwing a TypeError.

### Q9. [Medium] What is the result of `0 ?? 'default'`?

**Answer:** B

**B is correct.** `??` only replaces null and undefined. 0 is neither null nor undefined, so the left side (0) is returned.

### Q10. [Medium] Which data structure automatically removes duplicates?

**Answer:** D

**D is correct.** `Set` only stores unique values. `new Set([1,2,2,3,3,3])` results in Set {1, 2, 3}.

### Q11. [Hard] What is the difference between `for...in` and `for...of`?

**Answer:** B

**B is correct.** `for...in` iterates over property names/keys (for objects) or indices (for arrays). `for...of` iterates over values (for arrays, strings, Maps, Sets).

### Q12. [Hard] Why does `const arr = [1,2]; arr.push(3);` work even though arr is const?

**Answer:** B

**B is correct.** `const` prevents reassigning the variable (arr = something_else). But the array the variable points to CAN be modified (push, pop, etc.). The reference is constant, not the data.

### Q13. [Hard] How do you import a default export from a module?

**Answer:** C

**C is correct.** Default exports are imported without curly braces: `import myName from './module.js'`. You can use any name you want. Named exports use curly braces: `import { name } from ...`.

### Q14. [Easy] What is template literal syntax in JavaScript?

**Answer:** C

**C is correct.** Template literals use backticks (`) and allow embedded expressions with `${}`. They also support multi-line strings.

### Q15. [Medium] What does `const { a, ...rest } = { a: 1, b: 2, c: 3 }` give for `rest`?

**Answer:** B

**B is correct.** The rest operator in object destructuring collects all remaining properties. Since `a` is extracted separately, rest gets `{ b: 2, c: 3 }`.

### Q16. [Hard] What is the output of `typeof NaN`?

**Answer:** C

**C is correct.** Despite standing for 'Not a Number', `NaN` has type 'number' in JavaScript. Use `isNaN()` or `Number.isNaN()` to check for NaN.

### Q17. [Easy] What does the `...` operator do in `[...arr1, ...arr2]`?

**Answer:** B

**B is correct.** The spread operator expands both arrays into individual elements, creating a new merged array containing all elements from both.

### Q18. [Medium] What is the value of `x` after `const [x = 5] = [undefined]`?

**Answer:** C

**C is correct.** Default values in destructuring are used when the value is `undefined`. Since the array element is explicitly `undefined`, the default value 5 is used.

### Q19. [Hard] What is the difference between `Map` and a regular object for key-value storage?

**Answer:** B

**B is correct.** Regular object keys are coerced to strings. Map keys can be any type: numbers, booleans, objects, even other Maps. Maps also maintain insertion order and have a `size` property.

## Coding Challenges

### Challenge 1. Swap Values Using Destructuring

**Difficulty:** Easy

Given two variables a = 100 and b = 200, swap their values using array destructuring in one line. Do not use a temporary variable.

**Constraints:**

- Must use destructuring. No temporary variable.

**Sample input:**

```
a = 100, b = 200
```

**Sample output:**

```
a = 200, b = 100
```

**Solution:**

```javascript
let a = 100;
let b = 200;

[a, b] = [b, a];

console.log("a =", a); // 200
console.log("b =", b); // 100
```

### Challenge 2. Remove Duplicates from Array

**Difficulty:** Easy

Write a function removeDuplicates(arr) that returns a new array with all duplicates removed. Use Set and spread.

**Constraints:**

- Use Set and the spread operator. Return a new array.

**Sample input:**

```
[1, 2, 2, 3, 4, 4, 5]
```

**Sample output:**

```
[1, 2, 3, 4, 5]
```

**Solution:**

```javascript
const removeDuplicates = (arr) => [...new Set(arr)];

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// [1, 2, 3, 4, 5]

console.log(removeDuplicates(["a", "b", "a", "c", "b"]));
// ["a", "b", "c"]
```

### Challenge 3. Deep Extract with Destructuring

**Difficulty:** Medium

Given the object below, use a single destructuring statement to extract the city name and the first hobby into separate variables.

**Constraints:**

- Use one destructuring statement. No dot notation.

**Sample input:**

```
{ user: { name: "Aarav", address: { city: "Delhi" }, hobbies: ["coding", "cricket"] } }
```

**Sample output:**

```
City: Delhi, First hobby: coding
```

**Solution:**

```javascript
const data = {
  user: {
    name: "Aarav",
    address: { city: "Delhi" },
    hobbies: ["coding", "cricket"]
  }
};

const { user: { address: { city }, hobbies: [firstHobby] } } = data;

console.log("City:", city);           // Delhi
console.log("First hobby:", firstHobby); // coding
```

### Challenge 4. Merge Settings with Defaults

**Difficulty:** Medium

Write a function applySettings(userSettings) that merges user settings with defaults. Defaults: { theme: 'dark', fontSize: 14, language: 'en', notifications: true }. User settings should override defaults.

**Constraints:**

- Use the spread operator for merging. Return a new object.

**Sample input:**

```
{ fontSize: 18, language: 'hi' }
```

**Sample output:**

```
{ theme: 'dark', fontSize: 18, language: 'hi', notifications: true }
```

**Solution:**

```javascript
const applySettings = (userSettings) => {
  const defaults = { theme: 'dark', fontSize: 14, language: 'en', notifications: true };
  return { ...defaults, ...userSettings };
};

console.log(applySettings({ fontSize: 18, language: 'hi' }));
// { theme: 'dark', fontSize: 18, language: 'hi', notifications: true }

console.log(applySettings({}));
// { theme: 'dark', fontSize: 14, language: 'en', notifications: true }
```

### Challenge 5. Safe Property Access Function

**Difficulty:** Medium

Write a function safeGet(obj, path, defaultValue) that uses optional chaining logic to safely access nested properties. The path is a dot-separated string like 'user.address.city'.

**Constraints:**

- Split the path on dots and traverse. Use nullish coalescing for the default.

**Sample input:**

```
({ user: { name: "Aarav" } }, 'user.name', 'N/A')
```

**Sample output:**

```
Aarav
```

**Solution:**

```javascript
const safeGet = (obj, path, defaultValue = undefined) => {
  const result = path.split('.').reduce((current, key) => current?.[key], obj);
  return result ?? defaultValue;
};

const data = { user: { name: "Aarav", address: { city: "Delhi" } } };
console.log(safeGet(data, 'user.name', 'N/A'));         // "Aarav"
console.log(safeGet(data, 'user.address.city', 'N/A')); // "Delhi"
console.log(safeGet(data, 'user.phone', 'N/A'));        // "N/A"
console.log(safeGet(data, 'x.y.z', 'N/A'));             // "N/A"
```

### Challenge 6. Word Frequency Counter with Map

**Difficulty:** Medium

Write a function wordFrequency(text) that returns a Map with each word (lowercase) as the key and its count as the value. Use a for...of loop.

**Constraints:**

- Use Map and for...of. Convert to lowercase.

**Sample input:**

```
"the cat sat on the mat the cat"
```

**Sample output:**

```
Map { 'the' => 3, 'cat' => 2, 'sat' => 1, 'on' => 1, 'mat' => 1 }
```

**Solution:**

```javascript
const wordFrequency = (text) => {
  const map = new Map();
  const words = text.toLowerCase().split(/\s+/);
  for (const word of words) {
    if (word) {
      map.set(word, (map.get(word) || 0) + 1);
    }
  }
  return map;
};

const result = wordFrequency("the cat sat on the mat the cat");
result.forEach((count, word) => console.log(`${word}: ${count}`));
// the: 3, cat: 2, sat: 1, on: 1, mat: 1
```

### Challenge 7. Flexible Student Report Function

**Difficulty:** Hard

Write a function generateReport that uses destructuring in parameters, default values, rest, and template literals. It takes a student object { name, age, ...scores } and returns a formatted report string.

**Constraints:**

- Use destructuring in parameters. Use rest to collect subject scores. Use template literals.

**Sample input:**

```
{ name: "Priya", age: 15, maths: 90, science: 85, english: 92 }
```

**Sample output:**

```
Student: Priya (age 15)
Subjects: maths: 90, science: 85, english: 92
Average: 89
```

**Solution:**

```javascript
const generateReport = ({ name, age = "unknown", ...scores }) => {
  const subjects = Object.entries(scores)
    .map(([subject, score]) => `${subject}: ${score}`)
    .join(", ");

  const values = Object.values(scores);
  const avg = Math.round(values.reduce((sum, v) => sum + v, 0) / values.length);

  return `Student: ${name} (age ${age})\nSubjects: ${subjects}\nAverage: ${avg}`;
};

console.log(generateReport({ name: "Priya", age: 15, maths: 90, science: 85, english: 92 }));
console.log();
console.log(generateReport({ name: "Aarav", maths: 78, science: 82 }));
```

### Challenge 8. Array Utility Functions with ES6

**Difficulty:** Hard

Write these utility functions using ES6 features: (1) unique(arr) using Set, (2) chunk(arr, size) using slice and a loop, (3) zip(arr1, arr2) that pairs elements, (4) flatten(arr) using spread and reduce.

**Constraints:**

- Use arrow functions, spread, destructuring, and Set where appropriate.

**Sample input:**

```
Various arrays
```

**Sample output:**

```
unique: [1,2,3]
chunk: [[1,2],[3,4],[5]]
zip: [[1,'a'],[2,'b']]
flatten: [1,2,3,4,5,6]
```

**Solution:**

```javascript
const unique = arr => [...new Set(arr)];

const chunk = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const zip = (a, b) => a.map((item, i) => [item, b[i]]);

const flatten = arr => arr.reduce((acc, item) => 
  [...acc, ...(Array.isArray(item) ? item : [item])], []);

console.log(unique([1, 2, 2, 3, 3]));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(zip([1, 2, 3], ['a', 'b', 'c']));
console.log(flatten([1, [2, 3], [4, 5], 6]));
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/es6-modern-javascript/*
