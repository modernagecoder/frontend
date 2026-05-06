---
title: "ES6+ Modern JavaScript - Destructuring, Spread, Arrow Functions, Modules | Modern Age Coders"
description: "Master ES6+ JavaScript features including let/const, arrow functions, destructuring, spread/rest operators, default parameters, optional chaining, nullish coalescing, Map, Set, and ES modules. 56+ practice questions with tricky scenarios."
slug: es6-modern-javascript
canonical: https://learn.modernagecoders.com/resources/javascript/es6-modern-javascript
category: "JavaScript"
keywords: ["es6 javascript", "javascript destructuring", "spread operator javascript", "arrow functions", "javascript modules", "optional chaining", "nullish coalescing", "let const var", "javascript map set", "rest parameters javascript"]
---
# ES6+ Modern JavaScript Features

**Difficulty:** Advanced  
**Reading time:** 50 min  
**Chapter:** 17  
**Practice questions:** 52

## What Is ES6+ JavaScript?

**ES6** (also called ES2015) was a massive update to JavaScript released in 2015. It added features that make code shorter, cleaner, and more powerful. Since then, new features have been added every year (ES2016, ES2017, etc.). Together, these are called **ES6+** or **modern JavaScript**.

Before ES6, JavaScript had only `var` for variables, no arrow functions, no destructuring, and limited ways to work with data. ES6+ changed everything. Today, every professional JavaScript codebase uses these features.

```
// Old JavaScript (before ES6)
var name = "Aarav";
var greet = function(person) {
  return "Hello, " + person + "!";
};

// Modern JavaScript (ES6+)
const name = "Aarav";
const greet = (person) => `Hello, ${person}!`;
```

Both do the same thing, but the modern version is shorter and more readable.

## Why Learn ES6+?

### 1. Every Modern Codebase Uses It

If you look at any professional JavaScript project, React component, Node.js server, or open-source library, you will see ES6+ everywhere. Arrow functions, destructuring, and const/let have completely replaced older patterns. You cannot read or contribute to modern code without knowing these features.

### 2. It Makes Code Shorter and Clearer

Destructuring pulls values out of objects and arrays in one line. Arrow functions remove boilerplate. Template literals make string building readable. Spread operators replace complex copying patterns. Your code becomes easier to write and easier to read.

### 3. It Prevents Bugs

`let` and `const` have block scoping, which prevents the accidental variable sharing bugs that `var` caused. Optional chaining prevents the "Cannot read property of undefined" error. Nullish coalescing handles default values properly.

### 4. Interview and Job Essential

ES6+ questions appear in almost every JavaScript interview. Destructuring, arrow functions, and spread/rest are among the most commonly tested topics. Employers expect candidates to write modern JavaScript.

## Detailed Explanation

### 1. let and const (Block Scoping)

`let` and `const` replace `var`. The key difference is **block scoping**: they exist only inside the block `{ }` where they are declared.

```
// var is function-scoped (leaks out of blocks)
if (true) {
  var x = 10;
}
console.log(x); // 10 -- var leaks out!

// let is block-scoped (stays inside the block)
if (true) {
  let y = 20;
}
// console.log(y); // ReferenceError: y is not defined

// const is also block-scoped and cannot be reassigned
const PI = 3.14159;
// PI = 3; // TypeError: Assignment to constant variable

// But const objects/arrays CAN be modified
const arr = [1, 2, 3];
arr.push(4); // OK! The array itself is modified, not the variable
console.log(arr); // [1, 2, 3, 4]

const obj = { name: "Aarav" };
obj.age = 16; // OK! Adding a property to the object
console.log(obj); // { name: "Aarav", age: 16 }
```

**Rule of thumb:** Use `const` by default. Use `let` only when you need to reassign. Never use `var`.

### 2. Arrow Functions Deep Dive

Arrow functions are a shorter way to write functions. They have some differences from regular functions:

```
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function (full form)
const add = (a, b) => {
  return a + b;
};

// Arrow function (short form -- implicit return)
const add = (a, b) => a + b;

// Single parameter -- parentheses optional
const double = n => n * 2;

// No parameters -- empty parentheses required
const greet = () => "Hello!";

// Returning an object literal -- wrap in parentheses
const makeUser = (name, age) => ({ name: name, age: age });
```

When the function body is a single expression, you can remove the curly braces and the `return` keyword. The expression's value is returned automatically (implicit return).

### 3. Destructuring

Destructuring lets you pull values out of arrays and objects into variables in one step.

#### Array Destructuring

```
// Without destructuring
const colors = ["red", "green", "blue"];
const first = colors[0];
const second = colors[1];

// With destructuring
const [first, second, third] = ["red", "green", "blue"];
console.log(first);  // "red"
console.log(second); // "green"
console.log(third);  // "blue"

// Skip elements
const [a, , c] = [10, 20, 30];
console.log(a); // 10
console.log(c); // 30

// Default values
const [x = 5, y = 10] = [1];
console.log(x); // 1 (provided)
console.log(y); // 10 (default, since not provided)

// Swap variables
let p = 1, q = 2;
[p, q] = [q, p];
console.log(p, q); // 2, 1
```

#### Object Destructuring

```
const student = { name: "Priya", age: 15, city: "Mumbai" };

// Without destructuring
const name = student.name;
const age = student.age;

// With destructuring
const { name, age, city } = student;
console.log(name); // "Priya"
console.log(age);  // 15

// Renaming variables
const { name: studentName, age: studentAge } = student;
console.log(studentName); // "Priya"

// Default values
const { name, grade = "10th" } = student;
console.log(grade); // "10th" (default, not in object)

// Nested destructuring
const user = {
  name: "Rohan",
  address: {
    city: "Delhi",
    pin: 110001
  }
};

const { address: { city, pin } } = user;
console.log(city); // "Delhi"
console.log(pin);  // 110001
```

#### Destructuring in Function Parameters

```
// Without destructuring
function greet(person) {
  return "Hello, " + person.name + " from " + person.city;
}

// With destructuring in the parameter
function greet({ name, city }) {
  return `Hello, ${name} from ${city}`;
}

const result = greet({ name: "Diya", city: "Bangalore" });
console.log(result); // "Hello, Diya from Bangalore"
```

### 4. Spread Operator (...)

The spread operator `...` expands an array or object into individual elements.

```
// Spread with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5, 6]

// Copy an array (not a reference)
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3] -- not affected
console.log(copy);     // [1, 2, 3, 4]

// Spread with objects
const base = { color: "red", size: "M" };
const extended = { ...base, size: "L", weight: 100 };
console.log(extended); // { color: "red", size: "L", weight: 100 }
// Notice: size is "L" because the later property wins

// Spread in function calls
const numbers = [5, 2, 8, 1, 9];
console.log(Math.max(...numbers)); // 9
```

### 5. Rest Parameters (...)

Rest looks like spread but works in reverse -- it collects multiple elements into an array.

```
// Rest in function parameters
function sum(...numbers) {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total;
}
console.log(sum(1, 2, 3));    // 6
console.log(sum(10, 20));     // 30
console.log(sum(5));          // 5

// Rest with regular parameters
function introduce(greeting, ...names) {
  return greeting + " " + names.join(" and ");
}
console.log(introduce("Hello", "Aarav", "Priya", "Rohan"));
// "Hello Aarav and Priya and Rohan"

// Rest in destructuring
const [first, second, ...remaining] = [1, 2, 3, 4, 5];
console.log(first);     // 1
console.log(second);    // 2
console.log(remaining); // [3, 4, 5]

const { name, ...rest } = { name: "Aarav", age: 16, city: "Delhi" };
console.log(name); // "Aarav"
console.log(rest); // { age: 16, city: "Delhi" }
```

### 6. Default Parameters

```
// Default parameter values
function greet(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greet("Aarav", "Hi")); // "Hi, Aarav!"
console.log(greet("Priya"));       // "Hello, Priya!"
console.log(greet());              // "Hello, Guest!"

// Default using previous parameters
function createUser(name, role = "student", id = name.toLowerCase()) {
  return { name, role, id };
}
console.log(createUser("Aarav")); // { name: "Aarav", role: "student", id: "aarav" }
```

### 7. Enhanced Object Literals

```
const name = "Diya";
const age = 14;
const hobby = "coding";

// Shorthand properties (key = variable name)
const student = { name, age, hobby };
console.log(student); // { name: "Diya", age: 14, hobby: "coding" }

// Shorthand methods
const calculator = {
  add(a, b) { return a + b; },
  subtract(a, b) { return a - b; }
};
console.log(calculator.add(5, 3)); // 8

// Computed property names
const key = "score";
const obj = { [key]: 95, [key + "Max"]: 100 };
console.log(obj); // { score: 95, scoreMax: 100 }
```

### 8. Optional Chaining (?.)

Optional chaining lets you safely access deeply nested properties without checking each level:

```
const user = {
  name: "Aarav",
  address: {
    city: "Delhi"
  }
};

// Without optional chaining -- crashes if address is undefined
// console.log(user.phone.number); // TypeError!

// With optional chaining -- returns undefined instead of crashing
console.log(user.phone?.number); // undefined
console.log(user.address?.city); // "Delhi"
console.log(user.address?.pin);  // undefined

// Chaining multiple levels
const data = { a: { b: { c: 42 } } };
console.log(data.a?.b?.c);  // 42
console.log(data.x?.y?.z);  // undefined

// With methods
const arr = [1, 2, 3];
console.log(arr.find?.(x => x > 2)); // 3
console.log(arr.flatten?.());        // undefined (method does not exist)
```

### 9. Nullish Coalescing (??)

The `??` operator returns the right side only if the left side is `null` or `undefined` (not just falsy):

```
// Problem with || for defaults
const count = 0;
console.log(count || 10); // 10 -- WRONG! 0 is valid but falsy

// ?? only triggers on null/undefined
console.log(count ?? 10); // 0 -- CORRECT! 0 is not null/undefined

console.log(null ?? "default");      // "default"
console.log(undefined ?? "default"); // "default"
console.log(0 ?? "default");         // 0
console.log("" ?? "default");        // ""
console.log(false ?? "default");     // false

// Combine with optional chaining
const user = {};
const city = user.address?.city ?? "Unknown";
console.log(city); // "Unknown"
```

### 10. for...of Loop

```
// for...of iterates over values (arrays, strings, Maps, Sets)
const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}
// "apple", "banana", "cherry"

// Works with strings
for (const char of "Hello") {
  console.log(char);
}
// "H", "e", "l", "l", "o"

// for...in iterates over keys (object properties)
const student = { name: "Aarav", age: 16 };
for (const key in student) {
  console.log(key + ": " + student[key]);
}
// "name: Aarav", "age: 16"
```

### 11. Map and Set

```
// Map -- key-value pairs where keys can be ANY type
const map = new Map();
map.set("name", "Aarav");
map.set(42, "the answer");
map.set(true, "yes");

console.log(map.get("name")); // "Aarav"
console.log(map.get(42));     // "the answer"
console.log(map.size);        // 3
console.log(map.has("name")); // true

map.forEach(function(value, key) {
  console.log(key + " => " + value);
});

// Set -- collection of unique values
const set = new Set([1, 2, 3, 2, 1, 4]);
console.log(set); // Set {1, 2, 3, 4} -- duplicates removed
console.log(set.size); // 4
console.log(set.has(3)); // true

set.add(5);
set.delete(1);
console.log([...set]); // [2, 3, 4, 5] -- convert to array
```

### 12. Import/Export Modules

```
// math.js -- exporting
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export default function multiply(a, b) {
  return a * b;
}

// app.js -- importing
import multiply, { PI, add } from "./math.js";

console.log(PI);           // 3.14159
console.log(add(2, 3));    // 5
console.log(multiply(4, 5)); // 20

// In HTML, use type="module":
// 
```

Named exports use `{ }` when importing. Default exports can be imported with any name, without curly braces.

## Code Examples

### let vs var in Loops (Closure Trap)

```javascript
// Problem with var
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log("var:", i);
  }, 100);
}
// Output: var: 3, var: 3, var: 3 (all 3!)

// Fixed with let
for (let j = 0; j < 3; j++) {
  setTimeout(function() {
    console.log("let:", j);
  }, 100);
}
// Output: let: 0, let: 1, let: 2
```

With `var`, there is only one `i` shared across all iterations. By the time setTimeout runs, the loop is done and `i` is 3. With `let`, each iteration creates a new `j` in its own scope, so each callback captures a different value.

**Output:**

```
var: 3
var: 3
var: 3
let: 0
let: 1
let: 2
```

### Destructuring with Nested Objects and Defaults

```javascript
const apiResponse = {
  user: {
    name: "Kavya",
    scores: [85, 92, 78],
    address: {
      city: "Chennai"
    }
  },
  status: 200
};

// Nested destructuring with renaming and defaults
const {
  user: {
    name: userName,
    scores: [first, ...otherScores],
    address: { city, state = "Tamil Nadu" }
  },
  status
} = apiResponse;

console.log(userName);     // "Kavya"
console.log(first);        // 85
console.log(otherScores);  // [92, 78]
console.log(city);         // "Chennai"
console.log(state);        // "Tamil Nadu" (default)
console.log(status);       // 200
```

This example combines nested object destructuring, array destructuring with rest, variable renaming (`name: userName`), and default values (`state = "Tamil Nadu"`) all in one statement. While powerful, do not go deeper than 2-3 levels or the code becomes hard to read.

**Output:**

```
Kavya
85
[92, 78]
Chennai
Tamil Nadu
200
```

### Spread and Rest in Real Scenarios

```javascript
// Merge arrays
const morning = ["Maths", "Science"];
const afternoon = ["English", "Hindi"];
const schedule = [...morning, "Lunch", ...afternoon];
console.log(schedule);
// ["Maths", "Science", "Lunch", "English", "Hindi"]

// Merge objects with override
const defaults = { theme: "dark", fontSize: 14, lang: "en" };
const userPrefs = { fontSize: 18, lang: "hi" };
const settings = { ...defaults, ...userPrefs };
console.log(settings);
// { theme: "dark", fontSize: 18, lang: "hi" }

// Rest to collect remaining
function logFirst(first, ...rest) {
  console.log("First:", first);
  console.log("Rest:", rest);
}
logFirst("Aarav", "Priya", "Rohan", "Diya");
// First: Aarav
// Rest: ["Priya", "Rohan", "Diya"]
```

Spread `...` expands arrays/objects. Rest `...` collects elements. When merging objects, later properties override earlier ones (fontSize 14 becomes 18). Rest parameters must be the last parameter in a function.

**Output:**

```
["Maths", "Science", "Lunch", "English", "Hindi"]
{ theme: "dark", fontSize: 18, lang: "hi" }
First: Aarav
Rest: ["Priya", "Rohan", "Diya"]
```

### Optional Chaining and Nullish Coalescing Together

```javascript
const students = [
  { name: "Aarav", scores: { maths: 90, science: 85 } },
  { name: "Priya", scores: { maths: 78 } },
  { name: "Rohan" }  // no scores at all
];

students.forEach(function(student) {
  const maths = student.scores?.maths ?? "N/A";
  const science = student.scores?.science ?? "N/A";
  console.log(`${student.name}: Maths=${maths}, Science=${science}`);
});

// Without ?. and ??, you would need:
// if (student.scores && student.scores.maths !== undefined) ...
```

Optional chaining (`?.`) safely accesses nested properties, returning `undefined` if any part is missing. Nullish coalescing (`??`) provides a fallback only for `null`/`undefined`. Together, they handle missing data cleanly without nested if checks.

**Output:**

```
Aarav: Maths=90, Science=85
Priya: Maths=78, Science=N/A
Rohan: Maths=N/A, Science=N/A
```

### Map and Set Practical Usage

```javascript
// Count character frequency with Map
function charCount(str) {
  const map = new Map();
  for (const char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  return map;
}

const counts = charCount("banana");
counts.forEach(function(count, char) {
  console.log(char + ": " + count);
});
// b: 1, a: 3, n: 2

// Remove duplicates with Set
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const unique = [...new Set(numbers)];
console.log(unique); // [3, 1, 4, 5, 9, 2, 6]

// Find common elements between two arrays
function intersection(arr1, arr2) {
  const set = new Set(arr1);
  return arr2.filter(item => set.has(item));
}
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
```

Map is perfect for counting because keys can be any type. Set automatically removes duplicates and provides O(1) lookup with `has()`. Converting a Set to an array with `[...set]` uses the spread operator.

**Output:**

```
b: 1
a: 3
n: 2
[3, 1, 4, 5, 9, 2, 6]
[3, 4]
```

### Arrow Functions vs Regular Functions

```javascript
// Arrow functions and 'this'
const team = {
  name: "Sky Coders",
  members: ["Aarav", "Priya", "Rohan"],

  // Regular function -- 'this' depends on how it is called
  listMembers: function() {
    // Arrow inside a method -- inherits 'this' from listMembers
    this.members.forEach(member => {
      console.log(member + " is in " + this.name);
    });
  }
};

team.listMembers();
// Aarav is in Sky Coders
// Priya is in Sky Coders
// Rohan is in Sky Coders

// Different arrow function forms
const square = x => x * x;
const add = (a, b) => a + b;
const getObj = () => ({ key: "value" }); // Object needs parentheses
const multiLine = (x) => {
  const result = x * 2;
  return result + 1;
};

console.log(square(5));     // 25
console.log(add(3, 4));     // 7
console.log(getObj());      // { key: "value" }
console.log(multiLine(10)); // 21
```

Arrow functions do not have their own `this` -- they inherit it from the enclosing scope. Inside forEach, a regular function would lose `this`, but an arrow function inherits `this` from `listMembers`, so `this.name` works correctly.

**Output:**

```
Aarav is in Sky Coders
Priya is in Sky Coders
Rohan is in Sky Coders
25
7
{ key: "value" }
21
```

## Common Mistakes

### Trying to Reassign a const Variable

**Wrong:**

```
const name = "Aarav";
name = "Priya"; // TypeError!
```

TypeError: Assignment to constant variable.

**Correct:**

```
let name = "Aarav";
name = "Priya"; // Use let when you need to reassign

// Or with const for objects (modify properties, not the variable)
const student = { name: "Aarav" };
student.name = "Priya"; // OK! Modifying property, not reassigning
```

`const` prevents reassigning the variable itself. For primitives (strings, numbers), this means the value cannot change. For objects and arrays, the reference cannot change, but you CAN modify properties or elements.

### Forgetting Parentheses When Arrow Function Returns an Object

**Wrong:**

```
const makeUser = (name) => { name: name, age: 16 };
console.log(makeUser("Aarav")); // undefined!
```

Returns undefined because JavaScript treats { } as a function body, not an object literal. The 'name: name' is interpreted as a label.

**Correct:**

```
const makeUser = (name) => ({ name: name, age: 16 });
console.log(makeUser("Aarav")); // { name: "Aarav", age: 16 }
```

When an arrow function returns an object literal, wrap it in parentheses `=> ({ ... })`. Without them, JavaScript interprets the curly braces as the function body, not an object.

### Confusing Spread (Copy) with Assignment (Reference)

**Wrong:**

```
const original = [1, 2, 3];
const copy = original; // This is NOT a copy!
copy.push(4);
console.log(original); // [1, 2, 3, 4] -- original changed!
```

Both variables point to the same array. Modifying one affects the other.

**Correct:**

```
const original = [1, 2, 3];
const copy = [...original]; // Spread creates a real copy
copy.push(4);
console.log(original); // [1, 2, 3] -- untouched
console.log(copy);     // [1, 2, 3, 4]
```

Assignment (`=`) with arrays and objects copies the **reference**, not the data. Both variables point to the same array. Use spread `[...arr]` or `{...obj}` to create a shallow copy.

### Using ?? When You Mean || (or Vice Versa)

**Wrong:**

```
// Using || when 0 and '' are valid values
const score = 0;
const displayScore = score || "No score"; // "No score" -- WRONG!

const name = "";
const displayName = name || "Anonymous"; // "Anonymous" -- WRONG!
```

|| treats 0, "", false, NaN as falsy and replaces them. If these are valid values in your program, || gives wrong results.

**Correct:**

```
const score = 0;
const displayScore = score ?? "No score"; // 0 -- CORRECT!

const name = "";
const displayName = name ?? "Anonymous"; // "" -- CORRECT!

// Use ?? when null/undefined means 'missing'
// Use || when any falsy value means 'missing'
```

`||` returns the right side for ANY falsy value (0, "", false, null, undefined, NaN). `??` returns the right side ONLY for null and undefined. Use ?? when values like 0 and empty string are legitimate.

### Destructuring from undefined

**Wrong:**

```
const user = {};
const { address: { city } } = user;
// TypeError: Cannot destructure property 'city' of undefined
```

TypeError: Cannot destructure property 'city' of undefined. user.address is undefined, and you cannot destructure undefined.

**Correct:**

```
const user = {};

// Option 1: Default value for nested object
const { address: { city } = {} } = user;
console.log(city); // undefined (but no error)

// Option 2: Optional chaining
const city = user.address?.city;
console.log(city); // undefined (no error)
```

When destructuring nested objects, if a middle level is undefined, JavaScript cannot read properties from it. Provide a default value `= {}` for the nested object, or use optional chaining instead.

## Summary

- Use const by default, let when you need to reassign, and never use var. const and let are block-scoped (inside { }), while var is function-scoped and leaks out of blocks.
- Arrow functions are shorter: (a, b) => a + b. They have implicit return for single expressions (no curly braces or return keyword needed). They inherit 'this' from the enclosing scope.
- Destructuring extracts values from arrays [a, b] = arr and objects { name, age } = obj in one step. It supports default values, renaming, nested destructuring, and rest patterns.
- The spread operator (...) expands arrays and objects: [...arr1, ...arr2] merges arrays, { ...obj1, ...obj2 } merges objects. Later properties override earlier ones in object spread.
- Rest parameters (...args) collect multiple arguments into an array. Rest in destructuring collects remaining elements: [first, ...rest] = arr.
- Default parameters (name = 'Guest') provide fallback values when arguments are not passed or are undefined.
- Optional chaining (?.) safely accesses nested properties: user.address?.city returns undefined instead of throwing TypeError when address is missing.
- Nullish coalescing (??) provides defaults only for null/undefined: 0 ?? 10 gives 0 (not 10). Use ?? instead of || when 0, '', or false are valid values.
- Map holds key-value pairs with any key type. Set holds unique values and removes duplicates automatically. Both are iterable with for...of and forEach.
- ES modules use export/import to share code between files. Named exports use { }, default exports do not. In HTML, use script type='module'.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/javascript/es6-modern-javascript/*
*Practice questions: https://learn.modernagecoders.com/resources/javascript/es6-modern-javascript/practice/*
