---
title: "JavaScript Objects and JSON - Properties, Methods, Destructuring | Modern Age Coders"
description: "Learn JavaScript objects: creating objects, dot vs bracket notation, methods, this keyword, Object.keys/values/entries, destructuring, spread, nested objects, JSON.stringify/parse. 57 practice questions."
slug: objects-in-javascript
canonical: https://learn.modernagecoders.com/resources/javascript/objects-in-javascript
category: "JavaScript"
keywords: ["javascript objects", "javascript JSON", "object destructuring javascript", "javascript object methods", "this keyword javascript", "JSON stringify parse", "javascript object tutorial", "javascript nested objects", "javascript spread objects", "Object.keys values entries"]
---
# Objects and JSON

**Difficulty:** Intermediate  
**Reading time:** 25 min  
**Chapter:** 9  
**Practice questions:** 57

## What Are Objects in JavaScript?

An **object** is a collection of related data and functionality stored as key-value pairs. While arrays store data in an ordered list (accessed by index), objects store data with named labels (accessed by key).

Think of an object as a student ID card. It has a name, age, grade, and school - each piece of information has a label (key) and a value. In JavaScript, you write this as:

```
const student = {
  name: "Aarav",
  age: 15,
  grade: "10th",
  school: "DPS Delhi"
};
```

Each key-value pair is called a **property**. The key is always a string (or Symbol), and the value can be any data type: string, number, boolean, array, another object, or even a function.

When a property's value is a function, we call it a **method**. Methods let objects have behavior, not just data.

## Why Are Objects Important?

Objects are everywhere in JavaScript. They are arguably the most important data structure in the language. Here is why:

### 1. Modeling Real-World Things

Every real thing has properties: a student has a name and marks, a product has a price and rating, a user has an email and password. Objects are the natural way to represent these entities in code.

### 2. JSON - The Language of APIs

When websites communicate with servers (like fetching weather data or movie listings), they use **JSON** (JavaScript Object Notation). JSON looks almost identical to JavaScript objects. Understanding objects is essential for working with APIs.

### 3. DOM and Browser APIs

Everything in the browser is an object. The `document`, `window`, every HTML element, every event - they are all objects with properties and methods. `document.getElementById("btn")` returns an object.

### 4. Configuration and State

App settings, user preferences, form data, shopping cart contents - all stored as objects. React state, Vue data, and Angular components all use objects to manage application state.

### 5. Foundation for Classes and OOP

JavaScript classes are built on top of objects and prototypes. If you understand objects, you understand the foundation of object-oriented programming in JavaScript.

## Detailed Explanation

### 1. Creating Objects

The most common way to create an object is with **object literal notation** using curly braces:

```
const student = {
  name: "Priya",
  age: 16,
  subjects: ["Maths", "Science", "English"],
  isActive: true
};
```

Properties are separated by commas. The last comma is optional (called a trailing comma) but is recommended for cleaner version control diffs.

### 2. Accessing Properties: Dot vs Bracket Notation

**Dot notation** is the most common way to access properties:

```
console.log(student.name);  // "Priya"
console.log(student.age);   // 16
```

**Bracket notation** uses a string inside square brackets. You must use it when the key has spaces, special characters, or is stored in a variable:

```
console.log(student["name"]); // "Priya"

const key = "age";
console.log(student[key]);    // 16

// Keys with spaces (only bracket notation works)
const obj = { "full name": "Priya Sharma" };
console.log(obj["full name"]);
```

### 3. Adding and Deleting Properties

You can add new properties to an object at any time, and delete existing ones:

```
const student = { name: "Rohan" };

student.age = 17;          // Add new property
student.school = "DPS";    // Add another
delete student.school;     // Remove property

console.log(student); // { name: "Rohan", age: 17 }
```

### 4. Methods: Functions Inside Objects

When a property holds a function, it is called a **method**. Methods give objects behavior:

```
const student = {
  name: "Kavya",
  marks: [85, 92, 78],
  getAverage() {
    const sum = this.marks.reduce((a, b) => a + b, 0);
    return sum / this.marks.length;
  },
  greet() {
    return "Hi, I am " + this.name;
  }
};

console.log(student.greet());       // Hi, I am Kavya
console.log(student.getAverage());  // 85
```

### 5. The this Keyword

Inside a method, `this` refers to the object the method belongs to. It lets a method access other properties of the same object:

```
const person = {
  name: "Arjun",
  age: 18,
  introduce() {
    return this.name + " is " + this.age + " years old";
  }
};

console.log(person.introduce()); // Arjun is 18 years old
```

**Important:** Arrow functions do NOT have their own `this`. If you use an arrow function as a method, `this` will not refer to the object. Always use regular function syntax for object methods.

### 6. Object.keys(), Object.values(), Object.entries()

These static methods let you extract information from objects as arrays:

```
const student = { name: "Diya", age: 14, grade: "9th" };

Object.keys(student);    // ["name", "age", "grade"]
Object.values(student);  // ["Diya", 14, "9th"]
Object.entries(student); // [["name","Diya"], ["age",14], ["grade","9th"]]
```

These are very useful for iterating over object properties using array methods like `forEach`, `map`, and `filter`.

### 7. Destructuring Objects

Destructuring lets you extract properties into individual variables in one line:

```
const student = { name: "Vikram", age: 17, grade: "12th" };

// Extract specific properties
const { name, age } = student;
console.log(name); // "Vikram"
console.log(age);  // 17

// Rename variables
const { name: studentName, grade: studentGrade } = student;
console.log(studentName);  // "Vikram"
console.log(studentGrade); // "12th"

// Default values
const { school = "Unknown" } = student;
console.log(school); // "Unknown"
```

### 8. Spread with Objects

The spread operator (`...`) copies properties from one object to another. It is great for creating copies and merging objects:

```
const defaults = { theme: "dark", fontSize: 14 };
const userPrefs = { fontSize: 18, language: "Hindi" };

// Merge (later properties overwrite earlier ones)
const settings = { ...defaults, ...userPrefs };
// { theme: "dark", fontSize: 18, language: "Hindi" }

// Copy and add new properties
const updated = { ...student, school: "DPS" };
```

### 9. Nested Objects

Objects can contain other objects, creating a tree-like structure:

```
const student = {
  name: "Meera",
  address: {
    city: "Mumbai",
    state: "Maharashtra",
    pin: 400001
  },
  marks: {
    maths: 92,
    science: 88,
    english: 76
  }
};

console.log(student.address.city);  // "Mumbai"
console.log(student.marks.maths);   // 92
```

Access nested properties by chaining dot notation. Be careful with deeply nested objects - if any level is undefined, you will get a TypeError.

### 10. JSON.stringify and JSON.parse

**JSON** (JavaScript Object Notation) is a text format for storing and transporting data. It looks like JavaScript objects but has stricter rules: all keys must be in double quotes, and values can only be strings, numbers, booleans, null, arrays, or objects (no functions, no undefined).

```
const student = { name: "Aarav", age: 15, active: true };

// Object to JSON string
const jsonString = JSON.stringify(student);
console.log(jsonString);
// '{"name":"Aarav","age":15,"active":true}'

// JSON string to object
const parsed = JSON.parse(jsonString);
console.log(parsed.name); // "Aarav"
```

`JSON.stringify` converts a JavaScript object to a JSON string. `JSON.parse` converts a JSON string back to a JavaScript object. These are essential for sending data to and receiving data from servers.

### 11. Comparing Objects: Reference vs Value

In JavaScript, objects are compared by **reference** (memory address), not by value (content):

```
const a = { name: "Aarav" };
const b = { name: "Aarav" };
const c = a;

console.log(a === b); // false (different objects in memory)
console.log(a === c); // true (same reference)
```

To compare objects by their content, you can use `JSON.stringify`:

```
console.log(JSON.stringify(a) === JSON.stringify(b)); // true
```

### 12. Copying Objects: Shallow vs Deep

A **shallow copy** copies the top-level properties. If a property holds an object or array, the copy shares the same reference:

```
const original = { name: "Priya", marks: [85, 90] };
const shallow = { ...original };

shallow.name = "Rohan";   // Does NOT affect original
shallow.marks.push(95);   // DOES affect original!
console.log(original.marks); // [85, 90, 95] - changed!
```

A **deep copy** copies everything, including nested objects and arrays:

```
const deep = JSON.parse(JSON.stringify(original));
// or: const deep = structuredClone(original);

deep.marks.push(100);  // Does NOT affect original
```

`structuredClone()` is the modern way to deep copy. `JSON.parse(JSON.stringify())` works too but loses functions, undefined values, and special types like Date objects.

## Code Examples

### Creating Objects and Accessing Properties

```javascript
const student = {
  name: "Aarav",
  age: 15,
  grade: "10th",
  school: "DPS Delhi",
  hobbies: ["coding", "cricket", "chess"]
};

// Dot notation
console.log(student.name);
console.log(student.hobbies[0]);

// Bracket notation
const key = "grade";
console.log(student[key]);

// Adding a new property
student.email = "aarav@example.com";
console.log(student.email);
```

Objects store data as key-value pairs. Use dot notation for known property names and bracket notation when the key is in a variable or has special characters. You can add new properties at any time, even to `const` objects.

**Output:**

```
Aarav
coding
10th
aarav@example.com
```

### Object Methods and the this Keyword

```javascript
const calculator = {
  history: [],
  add(a, b) {
    const result = a + b;
    this.history.push(a + " + " + b + " = " + result);
    return result;
  },
  multiply(a, b) {
    const result = a * b;
    this.history.push(a + " * " + b + " = " + result);
    return result;
  },
  showHistory() {
    this.history.forEach(entry => console.log(entry));
  }
};

calculator.add(5, 3);
calculator.multiply(4, 7);
calculator.add(10, 20);
calculator.showHistory();
```

Methods are functions inside objects. The `this` keyword refers to the object itself, allowing methods to access other properties. Here, each operation adds to the history array using `this.history`.

**Output:**

```
5 + 3 = 8
4 * 7 = 28
10 + 20 = 30
```

### Object.keys, values, entries

```javascript
const scores = {
  maths: 95,
  science: 88,
  english: 76,
  hindi: 82
};

console.log("Keys:", Object.keys(scores));
console.log("Values:", Object.values(scores));

// Find the subject with the highest score
const entries = Object.entries(scores);
const best = entries.reduce((top, curr) => 
  curr[1] > top[1] ? curr : top
);
console.log("Best subject:", best[0], "with", best[1]);
```

`Object.keys()` returns an array of property names. `Object.values()` returns an array of values. `Object.entries()` returns an array of [key, value] pairs. These convert objects into arrays so you can use array methods like reduce.

**Output:**

```
Keys: ["maths", "science", "english", "hindi"]
Values: [95, 88, 76, 82]
Best subject: maths with 95
```

### Destructuring and Spread with Objects

```javascript
const student = {
  name: "Priya",
  age: 16,
  grade: "11th",
  school: "Kendriya Vidyalaya"
};

// Destructuring
const { name, grade, ...rest } = student;
console.log(name);  // Priya
console.log(grade); // 11th
console.log(rest);  // { age: 16, school: "Kendriya Vidyalaya" }

// Spread: merge and override
const defaults = { theme: "dark", lang: "en", fontSize: 14 };
const prefs = { lang: "hi", fontSize: 18 };
const settings = { ...defaults, ...prefs };
console.log(settings);
```

Destructuring extracts properties into variables. The rest pattern `...rest` collects remaining properties. Spread `...` copies properties into a new object. When spreading multiple objects, later properties override earlier ones (fontSize: 18 overrides 14).

**Output:**

```
Priya
11th
{ age: 16, school: "Kendriya Vidyalaya" }
{ theme: "dark", lang: "hi", fontSize: 18 }
```

### Nested Objects and Safe Access

```javascript
const student = {
  name: "Rohan",
  address: {
    city: "Bangalore",
    state: "Karnataka"
  },
  marks: {
    maths: 92,
    science: 88
  }
};

// Accessing nested properties
console.log(student.address.city);
console.log(student.marks.maths);

// Optional chaining (?.) for safe access
console.log(student.phone?.number);  // undefined (no error)
console.log(student.address?.pin);   // undefined (no error)

// Nested destructuring
const { address: { city }, marks: { maths } } = student;
console.log(city, maths);
```

Access nested properties with chained dot notation. Use optional chaining `?.` to safely access properties that might not exist - it returns undefined instead of throwing an error. Nested destructuring lets you extract deeply nested values in one statement.

**Output:**

```
Bangalore
92
undefined
undefined
Bangalore 92
```

### JSON.stringify and JSON.parse

```javascript
const student = {
  name: "Diya",
  age: 14,
  subjects: ["Maths", "Science"],
  active: true
};

// Convert to JSON string
const json = JSON.stringify(student, null, 2);
console.log(json);

// Parse back to object
const parsed = JSON.parse(json);
console.log(parsed.name);
console.log(parsed.subjects[0]);

// Pretty print any object
console.log(JSON.stringify({ a: 1, b: [2, 3] }, null, 2));
```

`JSON.stringify(obj, null, 2)` converts an object to a formatted JSON string (2-space indentation). `JSON.parse(str)` converts a JSON string back to a JavaScript object. The second argument to stringify is a replacer (null means include everything).

**Output:**

```
{
  "name": "Diya",
  "age": 14,
  "subjects": [
    "Maths",
    "Science"
  ],
  "active": true
}
Diya
Maths
{
  "a": 1,
  "b": [
    2,
    3
  ]
}
```

### Building Card Components from Object Data

```javascript
// Student data
const students = [
  { name: "Aarav", grade: "10th", score: 92 },
  { name: "Priya", grade: "9th", score: 88 },
  { name: "Rohan", grade: "11th", score: 95 }
];

// Generate HTML cards
const cards = students.map(s => {
  return `<div class="student-card">
  <h3>${s.name}</h3>
  <p>Grade: ${s.grade}</p>
  <p>Score: ${s.score}/100</p>
</div>`;
}).join("\n");

console.log(cards);

// In a browser, you would do:
// document.getElementById("container").innerHTML = cards;
```

This is a very common pattern in web development: take an array of objects, map each object to an HTML string using template literals, and join them together. This is how you build dynamic UI components from data.

**Output:**

```
<div class="student-card">
  <h3>Aarav</h3>
  <p>Grade: 10th</p>
  <p>Score: 92/100</p>
</div>
<div class="student-card">
  <h3>Priya</h3>
  <p>Grade: 9th</p>
  <p>Score: 88/100</p>
</div>
<div class="student-card">
  <h3>Rohan</h3>
  <p>Grade: 11th</p>
  <p>Score: 95/100</p>
</div>
```

### Shallow vs Deep Copy

```javascript
const original = {
  name: "Kavya",
  marks: [85, 90, 78],
  address: { city: "Delhi" }
};

// Shallow copy
const shallow = { ...original };
shallow.name = "Ananya";       // Only changes shallow
shallow.marks.push(95);         // Changes BOTH!
shallow.address.city = "Mumbai"; // Changes BOTH!

console.log("Original name:", original.name);
console.log("Original marks:", original.marks);
console.log("Original city:", original.address.city);

// Deep copy (revert original first)
original.marks = [85, 90, 78];
original.address.city = "Delhi";
const deep = structuredClone(original);
deep.marks.push(100);
console.log("After deep copy push:");
console.log("Original marks:", original.marks);
console.log("Deep marks:", deep.marks);
```

Shallow copy (`{ ...obj }`) copies top-level properties by value for primitives, but by reference for objects and arrays. So changing nested properties in the copy also changes the original. Deep copy (`structuredClone`) creates completely independent copies at all levels.

**Output:**

```
Original name: Kavya
Original marks: [85, 90, 78, 95]
Original city: Mumbai
After deep copy push:
Original marks: [85, 90, 78]
Deep marks: [85, 90, 78, 100]
```

## Common Mistakes

### Using Arrow Functions as Object Methods

**Wrong:**

```
const person = {
  name: "Aarav",
  greet: () => {
    return "Hi, I am " + this.name;
  }
};

console.log(person.greet()); // Hi, I am undefined
```

Arrow functions do not have their own this. this.name is undefined.

**Correct:**

```
const person = {
  name: "Aarav",
  greet() {
    return "Hi, I am " + this.name;
  }
};

console.log(person.greet()); // Hi, I am Aarav
```

Arrow functions inherit `this` from the surrounding scope (usually the global object or undefined in strict mode). They do NOT get `this` from the object they are defined in. Always use regular function syntax (method shorthand) for object methods.

### Comparing Objects with ===

**Wrong:**

```
const a = { name: "Priya" };
const b = { name: "Priya" };

if (a === b) {
  console.log("Equal");
} else {
  console.log("Not equal"); // This runs!
}
```

Objects are compared by reference, not by content. Two objects with identical content are not equal.

**Correct:**

```
const a = { name: "Priya" };
const b = { name: "Priya" };

// Compare by content using JSON.stringify
if (JSON.stringify(a) === JSON.stringify(b)) {
  console.log("Equal"); // This runs!
}
```

`===` checks if two variables point to the exact same object in memory. Two different objects with identical content are NOT equal. Use `JSON.stringify` to compare by content, or compare specific properties individually.

### Modifying Objects During for...in Iteration

**Wrong:**

```
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  if (obj[key] < 3) {
    delete obj[key]; // Deleting during iteration!
  }
}
// Results may be unpredictable
```

Modifying an object while iterating over it can lead to unexpected behavior.

**Correct:**

```
const obj = { a: 1, b: 2, c: 3 };
const keysToDelete = Object.keys(obj).filter(k => obj[k] < 3);
keysToDelete.forEach(k => delete obj[k]);
console.log(obj); // { c: 3 }
```

Deleting properties during a `for...in` loop can cause skipped properties or other issues. Instead, collect the keys to delete first (using filter), then delete them in a separate step.

### Assuming Spread Creates a Deep Copy

**Wrong:**

```
const original = { data: [1, 2, 3] };
const copy = { ...original };
copy.data.push(4);
console.log(original.data); // [1, 2, 3, 4] - Original changed!
```

Spread creates a shallow copy. Nested objects and arrays are still shared.

**Correct:**

```
const original = { data: [1, 2, 3] };
const copy = structuredClone(original);
copy.data.push(4);
console.log(original.data); // [1, 2, 3] - Unchanged!
```

The spread operator only copies one level deep. Nested objects and arrays are copied by reference, meaning changes to nested data in the copy will affect the original. Use `structuredClone()` for a true deep copy.

## Summary

- Objects store data as key-value pairs (properties). Keys are strings, values can be any type. Create them using object literal notation: { key: value }.
- Access properties with dot notation (obj.key) for known keys, or bracket notation (obj["key"]) when the key is in a variable or has special characters.
- Add properties by assignment (obj.newKey = value). Delete with the delete keyword (delete obj.key). Objects declared with const can still have their properties modified.
- Methods are functions stored as object properties. Use regular function syntax (not arrow functions) so that the this keyword correctly refers to the object.
- The this keyword inside a method refers to the object the method belongs to. Arrow functions do NOT have their own this - avoid using them as object methods.
- Object.keys() returns property names as an array. Object.values() returns values. Object.entries() returns [key, value] pairs. These convert objects to arrays for processing.
- Destructuring { name, age } = obj extracts properties into variables. You can rename ({ name: studentName }), set defaults ({ school = "Unknown" }), and use rest (...rest).
- The spread operator { ...obj } creates a shallow copy. Merge objects by spreading multiple: { ...defaults, ...overrides }. Later properties overwrite earlier ones.
- JSON.stringify converts objects to JSON strings (for sending to servers). JSON.parse converts JSON strings back to objects (for receiving from servers). Keys in JSON must be double-quoted.
- Objects are compared by reference, not value. { a: 1 } === { a: 1 } is false. Use JSON.stringify for content comparison, or compare specific properties.
- Shallow copies (spread, Object.assign) share nested references. Deep copies (structuredClone, JSON parse/stringify) are fully independent. Know which you need to avoid bugs.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/javascript/objects-in-javascript/*
*Practice questions: https://learn.modernagecoders.com/resources/javascript/objects-in-javascript/practice/*
