---
title: "Advanced Array and Object Patterns in JavaScript - Chaining, Destructuring, Data Processing | Modern Age Coders"
description: "Master advanced JavaScript patterns: method chaining (filter-map-reduce), nested destructuring, computed properties, Object.keys/values/entries, deep cloning, grouping data, sorting objects, removing duplicates, flattening arrays, and real-world data processing. Includes 56+ practice questions."
slug: array-and-object-advanced-patterns
canonical: https://learn.modernagecoders.com/resources/javascript/array-and-object-advanced-patterns/
category: "JavaScript"
keywords: ["javascript method chaining", "nested destructuring", "object.keys values entries", "javascript deep clone", "structuredclone javascript", "javascript group by reduce", "sort array of objects", "remove duplicates javascript", "flatten array javascript", "javascript data processing"]
---
# Advanced Array and Object Patterns

**Difficulty:** Advanced  
**Reading time:** 55 min  
**Chapter:** 23  
**Practice questions:** 50

## What Are Advanced Array and Object Patterns?

You already know the basics of arrays and objects. You can use `map`, `filter`, `reduce`, and destructuring. Now it is time to combine these tools into powerful patterns that solve real problems.

This chapter teaches you how to:

- Chain array methods together to process data in a pipeline
- Use nested destructuring to extract deep values
- Work with Object.keys, Object.values, and Object.entries to transform objects
- Deep clone objects properly
- Group, sort, deduplicate, and flatten data
- Process real datasets like student records, shopping carts, and leaderboards

```
// Example: process student data in one chain
const topStudents = students
  .filter(s => s.grade >= 90)
  .map(s => ({ name: s.name, grade: s.grade }))
  .sort((a, b) => b.grade - a.grade)
  .slice(0, 3);
// Top 3 students with grade >= 90, sorted highest first
```

These patterns are what separate a beginner from someone who can write real, professional JavaScript.

## Why Learn Advanced Patterns?

### 1. Real Apps Process Data Constantly

Every real application receives data from APIs, databases, or user input, and needs to transform it. An e-commerce site filters products by price, sorts by rating, and groups by category. A school app calculates averages, finds top students, and generates reports. These all use the patterns in this chapter.

### 2. Method Chaining Makes Code Readable

Instead of writing 10 lines with temporary variables, you can chain filter, map, sort, and reduce into a single readable pipeline. When Priya reads your code, she can follow the data transformation step by step, like reading a sentence.

### 3. Interview Essentials

Array and object manipulation questions dominate JavaScript interviews. "Group these items by category", "Find the most frequent element", "Flatten a nested array" -- these are extremely common. Knowing these patterns cold will make interviews feel easy.

### 4. Foundation for Frameworks

React, Vue, and Angular all rely heavily on immutable data transformations. Rendering a list of filtered, sorted products in React is exactly the same chain of filter-map-sort you learn here.

## Detailed Explanation

### 1. Method Chaining (Pipeline Pattern)

Since `filter`, `map`, and `sort` each return a new array, you can chain them together. The output of one method becomes the input of the next.

```
const students = [
  { name: "Aarav", grade: 92, subject: "Maths" },
  { name: "Priya", grade: 85, subject: "Science" },
  { name: "Rohan", grade: 97, subject: "Maths" },
  { name: "Meera", grade: 78, subject: "English" },
  { name: "Kavya", grade: 91, subject: "Science" }
];

// Chain: filter -> map -> sort
const result = students
  .filter(function(s) { return s.grade >= 85; })  // Keep grade >= 85
  .map(function(s) { return s.name + ": " + s.grade; }) // Format as string
  .sort();  // Alphabetical sort

console.log(result);
// ["Aarav: 92", "Kavya: 91", "Priya: 85", "Rohan: 97"]
```

You can also end a chain with `reduce` to produce a single value:

```
// Total grade of students scoring 85+
const total = students
  .filter(function(s) { return s.grade >= 85; })
  .reduce(function(sum, s) { return sum + s.grade; }, 0);
console.log(total); // 365
```

### 2. Nested Destructuring

Destructuring can go multiple levels deep to extract nested values:

```
const student = {
  name: "Aarav",
  scores: { maths: 95, science: 88 },
  address: { city: "Delhi", pin: "110001" }
};

// Nested destructuring
const { name, scores: { maths, science }, address: { city } } = student;
console.log(name);    // "Aarav"
console.log(maths);   // 95
console.log(city);    // "Delhi"

// Array nested in object
const response = {
  data: {
    users: [{ id: 1, name: "Aarav" }, { id: 2, name: "Priya" }]
  }
};

const { data: { users: [firstUser] } } = response;
console.log(firstUser); // { id: 1, name: "Aarav" }
```

### 3. Computed Property Names

You can use an expression inside square brackets to compute an object property name:

```
const field = "score";
const obj = { [field]: 95 };
console.log(obj); // { score: 95 }

// Useful for dynamic object creation
function createPair(key, value) {
  return { [key]: value };
}
console.log(createPair("name", "Aarav")); // { name: "Aarav" }
console.log(createPair("age", 15));       // { age: 15 }

// Building objects from arrays
const keys = ["a", "b", "c"];
const values = [1, 2, 3];
const combined = {};
keys.forEach(function(key, i) {
  combined[key] = values[i];
});
console.log(combined); // { a: 1, b: 2, c: 3 }
```

### 4. Object.keys, Object.values, Object.entries

These methods convert an object into arrays that you can use with array methods:

```
const scores = { maths: 95, science: 88, english: 92, hindi: 85 };

// Keys: array of property names
console.log(Object.keys(scores));   // ["maths", "science", "english", "hindi"]

// Values: array of values
console.log(Object.values(scores)); // [95, 88, 92, 85]

// Entries: array of [key, value] pairs
console.log(Object.entries(scores));
// [["maths", 95], ["science", 88], ["english", 92], ["hindi", 85]]

// Average score using Object.values
const avg = Object.values(scores).reduce(function(sum, v) {
  return sum + v;
}, 0) / Object.values(scores).length;
console.log(avg); // 90

// Find highest scoring subject using entries
const best = Object.entries(scores).sort(function(a, b) {
  return b[1] - a[1];
})[0];
console.log(best[0] + ": " + best[1]); // "maths: 95"
```

### 5. Object.fromEntries

Converts an array of [key, value] pairs back into an object. This is the reverse of Object.entries:

```
const entries = [["name", "Aarav"], ["age", 15], ["city", "Delhi"]];
const obj = Object.fromEntries(entries);
console.log(obj); // { name: "Aarav", age: 15, city: "Delhi" }

// Transform object values: double all scores
const scores = { maths: 45, science: 40, english: 48 };
const doubled = Object.fromEntries(
  Object.entries(scores).map(function([key, val]) {
    return [key, val * 2];
  })
);
console.log(doubled); // { maths: 90, science: 80, english: 96 }

// Filter an object: keep scores above 42
const high = Object.fromEntries(
  Object.entries(scores).filter(function([key, val]) {
    return val > 42;
  })
);
console.log(high); // { maths: 45, english: 48 }
```

### 6. Deep Cloning with structuredClone

The spread operator and Object.assign create **shallow copies**. Nested objects and arrays are still shared references. `structuredClone` creates a true deep copy:

```
const original = {
  name: "Aarav",
  scores: [95, 88, 92],
  address: { city: "Delhi" }
};

// Shallow copy (nested objects are shared!)
const shallow = { ...original };
shallow.scores.push(100);
console.log(original.scores); // [95, 88, 92, 100] -- original is modified!

// Deep clone (completely independent)
const deep = structuredClone(original);
deep.scores.push(200);
console.log(original.scores); // [95, 88, 92, 100] -- original is NOT affected
console.log(deep.scores);     // [95, 88, 92, 100, 200]
```

`structuredClone` is built into modern browsers and Node.js. Before it existed, people used `JSON.parse(JSON.stringify(obj))` which cannot handle functions, undefined, or Date objects.

### 7. Grouping Data with reduce

One of the most powerful patterns: group an array of objects by a property:

```
const students = [
  { name: "Aarav", subject: "Maths" },
  { name: "Priya", subject: "Science" },
  { name: "Rohan", subject: "Maths" },
  { name: "Meera", subject: "Science" },
  { name: "Kavya", subject: "English" }
];

const grouped = students.reduce(function(groups, student) {
  const key = student.subject;
  if (!groups[key]) {
    groups[key] = [];
  }
  groups[key].push(student.name);
  return groups;
}, {});

console.log(grouped);
// {
//   Maths: ["Aarav", "Rohan"],
//   Science: ["Priya", "Meera"],
//   English: ["Kavya"]
// }
```

Modern JavaScript also has `Object.groupBy` (available in newer browsers).

### 8. Sorting Objects by Property

```
const students = [
  { name: "Aarav", grade: 92 },
  { name: "Priya", grade: 85 },
  { name: "Rohan", grade: 97 },
  { name: "Meera", grade: 78 }
];

// Sort by grade (highest first)
const byGrade = [...students].sort(function(a, b) {
  return b.grade - a.grade;
});
console.log(byGrade[0].name); // "Rohan" (97)

// Sort by name (alphabetical)
const byName = [...students].sort(function(a, b) {
  return a.name.localeCompare(b.name);
});
console.log(byName[0].name); // "Aarav"
```

Note: `[...students]` creates a copy before sorting because `sort()` mutates the original array.

### 9. Removing Duplicates

```
// Duplicates in a simple array
const nums = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(nums)];
console.log(unique); // [1, 2, 3, 4]

// Duplicates in strings
const words = ["apple", "banana", "apple", "cherry", "banana"];
const uniqueWords = [...new Set(words)];
console.log(uniqueWords); // ["apple", "banana", "cherry"]

// Unique objects by a property (using Map)
const users = [
  { id: 1, name: "Aarav" },
  { id: 2, name: "Priya" },
  { id: 1, name: "Aarav" }
];
const uniqueUsers = [...new Map(users.map(function(u) {
  return [u.id, u];
})).values()];
console.log(uniqueUsers); // [{ id: 1, name: "Aarav" }, { id: 2, name: "Priya" }]
```

### 10. Flattening Nested Arrays

```
// One level deep
const nested = [[1, 2], [3, 4], [5, 6]];
console.log(nested.flat()); // [1, 2, 3, 4, 5, 6]

// Multiple levels
const deep = [1, [2, [3, [4]]]];
console.log(deep.flat(1));        // [1, 2, [3, [4]]]
console.log(deep.flat(2));        // [1, 2, 3, [4]]
console.log(deep.flat(Infinity)); // [1, 2, 3, 4]

// flatMap: map + flatten in one step
const sentences = ["Hello world", "Good morning"];
const words = sentences.flatMap(function(s) { return s.split(" "); });
console.log(words); // ["Hello", "world", "Good", "morning"]
```

### 11. Creating Lookup Maps from Arrays

```
// Convert array to object for O(1) lookup
const students = [
  { id: 101, name: "Aarav", grade: 92 },
  { id: 102, name: "Priya", grade: 85 },
  { id: 103, name: "Rohan", grade: 97 }
];

const lookup = Object.fromEntries(
  students.map(function(s) { return [s.id, s]; })
);

// Now find by ID instantly
console.log(lookup[102].name);  // "Priya"
console.log(lookup[101].grade); // 92
```

### 12. Real Data Processing Examples

```
// E-commerce cart total
const cart = [
  { item: "Notebook", price: 120, qty: 3 },
  { item: "Pen", price: 15, qty: 10 },
  { item: "Eraser", price: 8, qty: 5 }
];

const total = cart.reduce(function(sum, item) {
  return sum + item.price * item.qty;
}, 0);
console.log("Cart total: Rs " + total); // "Cart total: Rs 550"

// Leaderboard
const players = [
  { name: "Aarav", score: 850, wins: 12 },
  { name: "Priya", score: 920, wins: 15 },
  { name: "Rohan", score: 780, wins: 10 },
  { name: "Meera", score: 920, wins: 13 }
];

// Sort by score descending, then by wins descending
const leaderboard = [...players].sort(function(a, b) {
  if (b.score !== a.score) return b.score - a.score;
  return b.wins - a.wins;
});
leaderboard.forEach(function(p, i) {
  console.log((i + 1) + ". " + p.name + " - " + p.score + " (" + p.wins + " wins)");
});
// 1. Priya - 920 (15 wins)
// 2. Meera - 920 (13 wins)
// 3. Aarav - 850 (12 wins)
// 4. Rohan - 780 (10 wins)
```

## Code Examples

### Method Chaining: Filter, Map, Sort, Reduce

```javascript
const students = [
  { name: "Aarav", grade: 92, subject: "Maths" },
  { name: "Priya", grade: 85, subject: "Science" },
  { name: "Rohan", grade: 97, subject: "Maths" },
  { name: "Meera", grade: 78, subject: "English" },
  { name: "Kavya", grade: 91, subject: "Maths" },
  { name: "Arjun", grade: 68, subject: "Science" }
];

// Chain 1: top scorers formatted
const topScorers = students
  .filter(function(s) { return s.grade >= 85; })
  .sort(function(a, b) { return b.grade - a.grade; })
  .map(function(s) { return s.name + " (" + s.grade + ")"; });
console.log("Top scorers:", topScorers);

// Chain 2: average of Maths students
const mathStudents = students.filter(function(s) { return s.subject === "Maths"; });
const mathAvg = mathStudents.reduce(function(sum, s) { return sum + s.grade; }, 0) / mathStudents.length;
console.log("Maths average:", mathAvg.toFixed(1));

// Chain 3: count per subject
const counts = students.reduce(function(acc, s) {
  acc[s.subject] = (acc[s.subject] || 0) + 1;
  return acc;
}, {});
console.log("Subject counts:", counts);
```

Chain 1 filters students with grade >= 85, sorts by grade descending, and maps to formatted strings. Chain 2 filters Maths students and calculates their average. Chain 3 uses reduce to count how many students are in each subject. Each chain reads like a step-by-step data transformation.

**Output:**

```
Top scorers: ["Rohan (97)", "Aarav (92)", "Kavya (91)", "Priya (85)"]
Maths average: 93.3
Subject counts: { Maths: 3, Science: 2, English: 1 }
```

### Object.keys, Object.values, Object.entries, Object.fromEntries

```javascript
const scores = { maths: 95, science: 88, english: 92, hindi: 85 };

// Object.keys -- array of key names
const subjects = Object.keys(scores);
console.log("Subjects:", subjects);

// Object.values -- array of values
const marks = Object.values(scores);
console.log("Marks:", marks);
console.log("Total:", marks.reduce(function(a, b) { return a + b; }, 0));

// Object.entries -- array of [key, value] pairs
const entries = Object.entries(scores);
console.log("Entries:", entries);

// Transform: add 5 bonus marks to each subject
const boosted = Object.fromEntries(
  Object.entries(scores).map(function([subject, mark]) {
    return [subject, mark + 5];
  })
);
console.log("Boosted:", boosted);

// Filter: only subjects with score > 88
const high = Object.fromEntries(
  Object.entries(scores).filter(function([subject, mark]) {
    return mark > 88;
  })
);
console.log("High scores:", high);
```

`Object.keys` returns property names, `Object.values` returns values, and `Object.entries` returns [key, value] pairs. `Object.fromEntries` converts pairs back into an object. Together, they let you use array methods (map, filter, reduce) on objects.

**Output:**

```
Subjects: ["maths", "science", "english", "hindi"]
Marks: [95, 88, 92, 85]
Total: 360
Entries: [["maths", 95], ["science", 88], ["english", 92], ["hindi", 85]]
Boosted: { maths: 100, science: 93, english: 97, hindi: 90 }
High scores: { maths: 95, english: 92 }
```

### Deep Cloning and Nested Destructuring

```javascript
// --- Nested Destructuring ---
const student = {
  name: "Aarav",
  scores: { maths: 95, science: 88 },
  hobbies: ["coding", "cricket", "chess"]
};

const { name, scores: { maths }, hobbies: [firstHobby] } = student;
console.log(name);        // "Aarav"
console.log(maths);       // 95
console.log(firstHobby);  // "coding"

// Destructuring in function parameters
function printStudent({ name, scores: { maths, science } }) {
  console.log(name + ": Maths=" + maths + ", Science=" + science);
}
printStudent(student);

// --- Deep Clone vs Shallow Copy ---
const original = { a: 1, nested: { b: 2 }, arr: [3, 4] };

// Shallow copy: nested objects are shared
const shallow = { ...original };
shallow.nested.b = 99;
console.log("Original after shallow change:", original.nested.b); // 99!

// Reset
original.nested.b = 2;

// Deep clone: completely independent
const deep = structuredClone(original);
deep.nested.b = 99;
deep.arr.push(5);
console.log("Original after deep change:", original.nested.b); // 2
console.log("Original arr:", original.arr);  // [3, 4]
console.log("Deep arr:", deep.arr);          // [3, 4, 5]
```

Nested destructuring extracts values from deeply nested objects in one statement. Shallow copies (spread operator) share nested references, so modifying nested data in the copy also modifies the original. `structuredClone` creates a true deep copy where everything is independent.

**Output:**

```
Aarav
95
coding
Aarav: Maths=95, Science=88
Original after shallow change: 99
Original after deep change: 2
Original arr: [3, 4]
Deep arr: [3, 4, 5]
```

### Grouping, Deduplication, and Flattening

```javascript
// --- Grouping with reduce ---
const orders = [
  { product: "Pen", category: "Stationery", amount: 15 },
  { product: "Notebook", category: "Stationery", amount: 120 },
  { product: "Mouse", category: "Electronics", amount: 500 },
  { product: "Keyboard", category: "Electronics", amount: 800 },
  { product: "Eraser", category: "Stationery", amount: 8 }
];

const grouped = orders.reduce(function(groups, order) {
  const key = order.category;
  if (!groups[key]) groups[key] = [];
  groups[key].push(order.product);
  return groups;
}, {});
console.log("Grouped:", grouped);

// --- Remove duplicates ---
const nums = [1, 2, 2, 3, 3, 3, 4, 5, 5];
console.log("Unique:", [...new Set(nums)]);

const tags = ["js", "css", "js", "html", "css"];
console.log("Unique tags:", [...new Set(tags)]);

// --- Flatten ---
const nested = [[1, 2], [3, 4], [5, 6]];
console.log("Flat:", nested.flat());

const deepNested = [1, [2, [3, [4, [5]]]]];
console.log("Deep flat:", deepNested.flat(Infinity));

// --- flatMap ---
const classes = [
  { teacher: "Ms. Sharma", students: ["Aarav", "Priya"] },
  { teacher: "Mr. Singh", students: ["Rohan", "Meera", "Kavya"] }
];
const allStudents = classes.flatMap(function(c) { return c.students; });
console.log("All students:", allStudents);
```

Grouping uses reduce to build an object where each key contains an array of matching items. `new Set` removes duplicates from arrays (works for primitives). `flat()` flattens nested arrays, with a depth argument or `Infinity` for full flattening. `flatMap` combines map and flat in one step.

**Output:**

```
Grouped: { Stationery: ["Pen", "Notebook", "Eraser"], Electronics: ["Mouse", "Keyboard"] }
Unique: [1, 2, 3, 4, 5]
Unique tags: ["js", "css", "html"]
Flat: [1, 2, 3, 4, 5, 6]
Deep flat: [1, 2, 3, 4, 5]
All students: ["Aarav", "Priya", "Rohan", "Meera", "Kavya"]
```

### Sorting Objects and Creating Lookup Maps

```javascript
// --- Sorting objects by property ---
const players = [
  { name: "Aarav", score: 850 },
  { name: "Priya", score: 920 },
  { name: "Rohan", score: 780 },
  { name: "Meera", score: 920 }
];

// Sort by score descending (copy first to avoid mutation)
const ranked = [...players].sort(function(a, b) { return b.score - a.score; });
ranked.forEach(function(p, i) {
  console.log((i + 1) + ". " + p.name + ": " + p.score);
});

// Sort by name alphabetically
const byName = [...players].sort(function(a, b) {
  return a.name.localeCompare(b.name);
});
console.log("Alphabetical:", byName.map(function(p) { return p.name; }));

// --- Lookup map from array ---
const products = [
  { id: "P001", name: "Notebook", price: 120 },
  { id: "P002", name: "Pen", price: 15 },
  { id: "P003", name: "Eraser", price: 8 }
];

const productMap = Object.fromEntries(
  products.map(function(p) { return [p.id, p]; })
);

console.log(productMap["P002"].name);  // "Pen"
console.log(productMap["P001"].price); // 120

// Using Map for non-string keys
const userMap = new Map(players.map(function(p) { return [p.name, p]; }));
console.log(userMap.get("Priya")); // { name: "Priya", score: 920 }
```

Always spread `[...array]` before sorting to avoid mutating the original. `localeCompare` handles alphabetical sorting correctly (including special characters). Lookup maps convert an array into an object (or Map) keyed by a unique property, enabling O(1) lookups instead of O(n) searching.

**Output:**

```
1. Priya: 920
2. Meera: 920
3. Aarav: 850
4. Rohan: 780
Alphabetical: ["Aarav", "Meera", "Priya", "Rohan"]
Pen
120
{ name: "Priya", score: 920 }
```

### Real Data Processing: Student Report Card

```javascript
const students = [
  { name: "Aarav", scores: { maths: 95, science: 88, english: 92 } },
  { name: "Priya", scores: { maths: 78, science: 95, english: 85 } },
  { name: "Rohan", scores: { maths: 82, science: 76, english: 90 } },
  { name: "Meera", scores: { maths: 91, science: 93, english: 88 } },
  { name: "Kavya", scores: { maths: 67, science: 72, english: 95 } }
];

// 1. Calculate average for each student
const withAverage = students.map(function(s) {
  const values = Object.values(s.scores);
  const avg = values.reduce(function(sum, v) { return sum + v; }, 0) / values.length;
  return { name: s.name, average: Math.round(avg * 10) / 10, scores: s.scores };
});

// 2. Rank by average
const ranked = [...withAverage].sort(function(a, b) { return b.average - a.average; });
console.log("--- Report Card ---");
ranked.forEach(function(s, i) {
  console.log((i + 1) + ". " + s.name + " -- Avg: " + s.average);
});

// 3. Find subject topper for each subject
const subjects = Object.keys(students[0].scores);
const toppers = {};
subjects.forEach(function(sub) {
  const best = students.reduce(function(top, s) {
    return s.scores[sub] > top.scores[sub] ? s : top;
  });
  toppers[sub] = best.name + " (" + best.scores[sub] + ")";
});
console.log("\nSubject toppers:", toppers);

// 4. Students above class average
const classAvg = withAverage.reduce(function(sum, s) { return sum + s.average; }, 0) / withAverage.length;
const aboveAvg = withAverage.filter(function(s) { return s.average > classAvg; });
console.log("\nClass average:", classAvg.toFixed(1));
console.log("Above average:", aboveAvg.map(function(s) { return s.name; }));
```

This example processes student data like a real school management system. It calculates individual averages using Object.values and reduce, ranks students by average, finds subject toppers using reduce, and identifies students above the class average. Every step uses the array/object patterns taught in this chapter.

**Output:**

```
--- Report Card ---
1. Meera -- Avg: 90.7
2. Aarav -- Avg: 91.7
3. Priya -- Avg: 86
4. Rohan -- Avg: 82.7
5. Kavya -- Avg: 78

Subject toppers: { maths: "Aarav (95)", science: "Priya (95)", english: "Kavya (95)" }

Class average: 85.8
Above average: ["Aarav", "Priya", "Meera"]
```

### Real Data Processing: E-Commerce Cart

```javascript
const cart = [
  { id: 1, name: "JavaScript Book", price: 450, qty: 1, category: "Books" },
  { id: 2, name: "USB Cable", price: 199, qty: 2, category: "Electronics" },
  { id: 3, name: "Notebook", price: 80, qty: 5, category: "Stationery" },
  { id: 4, name: "Python Book", price: 550, qty: 1, category: "Books" },
  { id: 5, name: "Pen Pack", price: 120, qty: 3, category: "Stationery" },
  { id: 6, name: "Mouse", price: 699, qty: 1, category: "Electronics" }
];

// 1. Total cart value
const total = cart.reduce(function(sum, item) {
  return sum + item.price * item.qty;
}, 0);
console.log("Cart total: Rs", total);

// 2. Total by category
const byCategory = cart.reduce(function(groups, item) {
  const cat = item.category;
  if (!groups[cat]) groups[cat] = 0;
  groups[cat] += item.price * item.qty;
  return groups;
}, {});
console.log("By category:", byCategory);

// 3. Most expensive item
const expensive = cart.reduce(function(max, item) {
  return item.price > max.price ? item : max;
});
console.log("Most expensive:", expensive.name, "- Rs", expensive.price);

// 4. Items sorted by total value (price * qty)
const sorted = [...cart]
  .sort(function(a, b) { return (b.price * b.qty) - (a.price * a.qty); })
  .map(function(item) {
    return item.name + ": Rs " + (item.price * item.qty);
  });
console.log("Sorted by value:", sorted);

// 5. Cart summary
const summary = {
  totalItems: cart.reduce(function(sum, item) { return sum + item.qty; }, 0),
  totalValue: total,
  categories: [...new Set(cart.map(function(item) { return item.category; }))],
  averagePrice: Math.round(total / cart.length)
};
console.log("Summary:", summary);
```

This example mimics a real e-commerce cart system. It calculates the total, groups spending by category, finds the most expensive item, sorts by total value, and creates a summary. Every operation uses the patterns from this chapter: reduce for aggregation, sort for ordering, Set for unique values, and map for transformation.

**Output:**

```
Cart total: Rs 2957
By category: { Books: 1000, Electronics: 1097, Stationery: 760 }
Most expensive: Mouse - Rs 699
Sorted by value: ["Mouse: Rs 699", "Python Book: Rs 550", "JavaScript Book: Rs 450", "Notebook: Rs 400", "USB Cable: Rs 398", "Pen Pack: Rs 360"]
Summary: { totalItems: 13, totalValue: 2957, categories: ["Books", "Electronics", "Stationery"], averagePrice: 493 }
```

## Common Mistakes

### Forgetting That sort() Mutates the Original Array

**Wrong:**

```
const scores = [85, 92, 78, 97];
const sorted = scores.sort(function(a, b) { return b - a; });
console.log(sorted);  // [97, 92, 85, 78]
console.log(scores);  // [97, 92, 85, 78] -- original is also changed!
```

sort() modifies the array in place. Both sorted and scores point to the same mutated array.

**Correct:**

```
const scores = [85, 92, 78, 97];
const sorted = [...scores].sort(function(a, b) { return b - a; });
console.log(sorted);  // [97, 92, 85, 78]
console.log(scores);  // [85, 92, 78, 97] -- original preserved!
```

Always spread `[...array]` before sorting if you need to keep the original order. The spread creates a shallow copy, and sort mutates only the copy.

### Shallow Copy Does Not Clone Nested Objects

**Wrong:**

```
const original = { name: "Aarav", scores: [90, 85] };
const copy = { ...original };
copy.scores.push(95);
console.log(original.scores); // [90, 85, 95] -- original modified!
```

The spread operator creates a shallow copy. Nested arrays and objects are still shared references.

**Correct:**

```
const original = { name: "Aarav", scores: [90, 85] };
const copy = structuredClone(original);
copy.scores.push(95);
console.log(original.scores); // [90, 85] -- original safe!
```

For nested data, use `structuredClone()` for a true deep copy. The spread operator only copies the top-level properties. Nested objects and arrays are shared by reference.

### Using Object.keys on an Array

**Wrong:**

```
const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // ["0", "1", "2"] -- indices as strings!
// This is technically correct but confusing and rarely useful
```

Object.keys on an array returns the indices as strings, not the array values.

**Correct:**

```
const arr = ["a", "b", "c"];
// For arrays, just use the array directly
console.log(arr); // ["a", "b", "c"]

// Object.keys is for objects
const obj = { name: "Aarav", age: 15 };
console.log(Object.keys(obj)); // ["name", "age"]
```

`Object.keys`, `Object.values`, and `Object.entries` are designed for plain objects. While they technically work on arrays, the results are confusing (indices as strings). Use array methods directly for arrays.

### Grouping Without Initializing the Group Array

**Wrong:**

```
const items = [{ cat: "A" }, { cat: "B" }, { cat: "A" }];
const grouped = items.reduce(function(acc, item) {
  acc[item.cat].push(item); // TypeError: Cannot read property 'push' of undefined
  return acc;
}, {});
```

TypeError: Cannot read property 'push' of undefined. The first time a category is encountered, acc[item.cat] is undefined.

**Correct:**

```
const items = [{ cat: "A" }, { cat: "B" }, { cat: "A" }];
const grouped = items.reduce(function(acc, item) {
  if (!acc[item.cat]) acc[item.cat] = [];  // Initialize if needed
  acc[item.cat].push(item);
  return acc;
}, {});
```

When grouping with reduce, always check if the group key exists before pushing. If it does not exist, initialize it as an empty array first.

## Summary

- Method chaining connects filter, map, sort, reduce, and slice into readable data pipelines. Each method returns a new array (except reduce, which returns any value), so they can be chained left to right.
- Nested destructuring extracts values from deep objects: const { scores: { maths } } = student. You can destructure in function parameters too.
- Computed property names use square brackets to create dynamic keys: { [variable]: value }. Useful when building objects from variables or arrays.
- Object.keys returns property names, Object.values returns values, Object.entries returns [key, value] pairs. Object.fromEntries converts pairs back into an object.
- Object.entries + map/filter + Object.fromEntries is the standard pattern for transforming or filtering object properties.
- structuredClone creates a true deep copy of objects with nested data. The spread operator and Object.assign only create shallow copies where nested objects are shared references.
- Grouping with reduce: start with an empty object {}, check if the group key exists (initialize to [] if not), push items into their group. This is one of the most common and useful patterns.
- Always copy an array before sorting: [...array].sort(). sort() mutates the original array in place. Use localeCompare for alphabetical sorting of strings.
- Remove duplicates with new Set for primitives: [...new Set(array)]. For objects, use a Map keyed by the unique property.
- flat() flattens nested arrays (pass Infinity for full flattening). flatMap() combines map and flat in one step. Both are useful for working with nested data structures.
- Lookup maps (Object.fromEntries or new Map) convert arrays to key-value structures for O(1) lookups instead of O(n) array searching.
- Real data processing chains these patterns together: filter the data, transform with map, group with reduce, sort for display, and deduplicate with Set.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/javascript/array-and-object-advanced-patterns/*
*Practice questions: https://learn.modernagecoders.com/resources/javascript/array-and-object-advanced-patterns/practice/*
