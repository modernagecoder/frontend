---
title: "Practice: Objects and JSON"
description: "57 practice problems for Objects and JSON in JavaScript"
slug: objects-in-javascript-practice
canonical: https://learn.modernagecoders.com/resources/javascript/objects-in-javascript/practice
category: "JavaScript"
---
# Practice: Objects and JSON

**Total questions:** 57

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
const obj = { name: "Aarav", age: 15 };
console.log(obj.name);
console.log(obj.age);
```

*Hint:* Dot notation accesses property values.

**Answer:** `Aarav`
`15`

`obj.name` returns the value of the name property ("Aarav"). `obj.age` returns the value of the age property (15).

### Q2. [Easy] What is the output?

```
const student = { name: "Priya", grade: "10th" };
const key = "grade";
console.log(student[key]);
```

*Hint:* Bracket notation lets you use a variable as the key.

**Answer:** `10th`

The variable `key` holds the string "grade". `student[key]` is the same as `student["grade"]`, which returns "10th".

### Q3. [Easy] What is the output?

```
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj));
```

*Hint:* Object.keys returns an array of property names.

**Answer:** `["a", "b", "c"]`

`Object.keys()` returns an array of the object's own property names (keys) in the order they were added.

### Q4. [Easy] What is the output?

```
const obj = { x: 10, y: 20 };
obj.z = 30;
console.log(obj);
```

*Hint:* You can add properties to objects at any time.

**Answer:** `{ x: 10, y: 20, z: 30 }`

Assigning `obj.z = 30` adds a new property z with value 30 to the object.

### Q5. [Easy] What is the output?

```
const scores = { maths: 95, science: 88 };
console.log(Object.values(scores));
```

*Hint:* Object.values returns an array of property values.

**Answer:** `[95, 88]`

`Object.values()` returns an array containing all the property values: [95, 88].

### Q6. [Easy] What is the output?

```
const { name, age } = { name: "Rohan", age: 16, grade: "11th" };
console.log(name);
console.log(age);
```

*Hint:* Destructuring extracts specific properties into variables.

**Answer:** `Rohan`
`16`

Destructuring extracts `name` and `age` from the object. The `grade` property is not extracted because it is not listed in the destructuring pattern.

### Q7. [Medium] What is the output?

```
const person = {
  name: "Kavya",
  greet() {
    return "Hi, " + this.name;
  }
};

console.log(person.greet());
```

*Hint:* this refers to the object the method belongs to.

**Answer:** `Hi, Kavya`

Inside the `greet` method, `this` refers to the `person` object. So `this.name` is "Kavya". The method returns "Hi, Kavya".

### Q8. [Medium] What is the output?

```
const a = { x: 1 };
const b = { ...a, y: 2 };
console.log(b);
console.log(a);
```

*Hint:* Spread copies properties into a new object.

**Answer:** `{ x: 1, y: 2 }`
`{ x: 1 }`

`{ ...a, y: 2 }` creates a new object with all properties from a plus y: 2. The original object a is not modified.

### Q9. [Medium] What is the output?

```
const obj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj);
console.log(entries);
```

*Hint:* Object.entries returns [key, value] pairs.

**Answer:** `[["a", 1], ["b", 2], ["c", 3]]`

`Object.entries()` returns an array of [key, value] pairs. Each property becomes a two-element array inside the outer array.

### Q10. [Medium] What is the output?

```
const student = {
  name: "Diya",
  address: {
    city: "Chennai",
    state: "Tamil Nadu"
  }
};

console.log(student.address.city);
console.log(student.phone?.number);
```

*Hint:* Optional chaining (?.) returns undefined for missing properties instead of throwing an error.

**Answer:** `Chennai`
`undefined`

`student.address.city` follows the chain and finds "Chennai". `student.phone?.number` uses optional chaining. Since `student.phone` is undefined, it returns undefined instead of throwing a TypeError.

### Q11. [Medium] What is the output?

```
const obj = { name: "Vikram" };
const json = JSON.stringify(obj);
console.log(json);
console.log(typeof json);
```

*Hint:* JSON.stringify converts an object to a string.

**Answer:** `{"name":"Vikram"}`
`string`

`JSON.stringify` converts the object to a JSON string. The result is a string (not an object). Notice that keys in JSON are wrapped in double quotes.

### Q12. [Medium] What is the output?

```
const defaults = { color: "red", size: 10 };
const custom = { size: 20, weight: 5 };
const merged = { ...defaults, ...custom };
console.log(merged);
```

*Hint:* When spreading, later properties overwrite earlier ones with the same key.

**Answer:** `{ color: "red", size: 20, weight: 5 }`

Spreading defaults gives color: "red" and size: 10. Spreading custom gives size: 20 and weight: 5. The size from custom (20) overwrites the size from defaults (10).

### Q13. [Hard] What is the output?

```
const a = { data: [1, 2, 3] };
const b = { ...a };
b.data.push(4);
console.log(a.data);
```

*Hint:* Spread creates a shallow copy. What happens to nested arrays?

**Answer:** `[1, 2, 3, 4]`

Spread creates a **shallow** copy. The `data` array is not copied - both a.data and b.data point to the same array. Pushing to b.data also modifies a.data.

### Q14. [Hard] What is the output?

```
const a = { name: "Meera" };
const b = { name: "Meera" };
const c = a;

console.log(a === b);
console.log(a === c);
```

*Hint:* Objects are compared by reference, not content.

**Answer:** `false`
`true`

`a` and `b` are two different objects in memory (even though they have the same content), so `a === b` is false. `c` is assigned the same reference as `a`, so `a === c` is true - they point to the exact same object.

### Q15. [Hard] What is the output?

```
const { name: studentName, age: studentAge = 18 } = { name: "Arjun" };
console.log(studentName);
console.log(studentAge);
```

*Hint:* Renaming and default values in destructuring.

**Answer:** `Arjun`
`18`

`name: studentName` extracts the name property and stores it in a variable called studentName. `age: studentAge = 18` extracts age, renames it to studentAge, and since age does not exist in the object, uses the default value 18.

### Q16. [Hard] What is the output?

```
const person = {
  name: "Aarav",
  greet: () => {
    return "Hi, " + this.name;
  }
};

console.log(person.greet());
```

*Hint:* Arrow functions do NOT have their own this.

**Answer:** `Hi, undefined`

The arrow function does not have its own `this`. It inherits `this` from the enclosing scope (likely the global object where `this.name` is undefined). This is why you should use regular function syntax for object methods.

### Q17. [Medium] What is the difference between dot notation and bracket notation for accessing object properties?

*Hint:* When can you use each one?

**Answer:** Dot notation (`obj.key`) is simpler and more common. Bracket notation (`obj["key"]`) is required when the key contains spaces or special characters, when the key is stored in a variable, or when the key is computed dynamically. Dot notation only works with valid identifier names.

Example: `obj.name` works for simple keys. `obj["full name"]` is needed for keys with spaces. `obj[variable]` is needed when the key is in a variable.

### Q18. [Hard] What is the output?

```
const student = {
  name: "Priya",
  marks: { maths: 92, science: 88 }
};

const { marks: { maths, science } } = student;
console.log(maths);
console.log(science);
```

*Hint:* Nested destructuring extracts values from nested objects.

**Answer:** `92`
`88`

This uses nested destructuring. It goes into the `marks` property and extracts `maths` and `science` directly into variables. The `marks` variable itself is not created.

### Q19. [Easy] What is the output?

```
const obj = { a: 1, b: 2, c: 3 };
delete obj.b;
console.log(obj);
```

*Hint:* delete removes a property from an object.

**Answer:** `{ a: 1, c: 3 }`

`delete obj.b` removes the `b` property from the object. The remaining properties are `a` and `c`.

### Q20. [Medium] What is the output?

```
const json = '{"name":"Diya","age":14}';
const obj = JSON.parse(json);
console.log(obj.name);
console.log(typeof obj);
```

*Hint:* JSON.parse converts a JSON string to a JavaScript object.

**Answer:** `Diya`
`object`

`JSON.parse` converts the JSON string to a JavaScript object. You can then access properties normally. The type of the result is "object".

## Mixed Questions

### Q1. [Easy] What is the output?

```
const person = { name: "Kabir", age: 17 };
console.log("name" in person);
console.log("email" in person);
```

*Hint:* The in operator checks if a property exists in an object.

**Answer:** `true`
`false`

The `in` operator checks whether a property name exists in the object. "name" exists, so it returns true. "email" does not exist, so it returns false.

### Q2. [Easy] What is the output?

```
const obj = { x: 10, y: 20, z: 30 };
const sum = Object.values(obj).reduce((a, b) => a + b, 0);
console.log(sum);
```

*Hint:* Extract values as an array, then reduce to sum.

**Answer:** `60`

`Object.values(obj)` gives [10, 20, 30]. `reduce` sums them: 0 + 10 + 20 + 30 = 60.

### Q3. [Medium] What is the output?

```
const obj = { a: 1, b: 2, c: 3 };
const filtered = Object.entries(obj)
  .filter(([key, val]) => val > 1)
  .map(([key, val]) => key);
console.log(filtered);
```

*Hint:* Convert to entries, filter by value, extract keys.

**Answer:** `["b", "c"]`

Object.entries gives [["a",1],["b",2],["c",3]]. Filter keeps entries where value > 1: [["b",2],["c",3]]. Map extracts the keys: ["b", "c"].

### Q4. [Medium] What is the output?

```
const student = { name: "Ananya", grade: "10th" };
const { name, ...rest } = student;
console.log(name);
console.log(rest);
```

*Hint:* Rest pattern collects remaining properties.

**Answer:** `Ananya`
`{ grade: "10th" }`

Destructuring extracts `name` into a variable. The rest pattern `...rest` collects all remaining properties into a new object: { grade: "10th" }.

### Q5. [Medium] What is the output?

```
const key = "color";
const value = "purple";
const obj = { [key]: value };
console.log(obj);
```

*Hint:* Square brackets in an object literal create a computed property name.

**Answer:** `{ color: "purple" }`

Computed property names use square brackets `[key]` in the object literal. The value of the `key` variable ("color") becomes the property name. So the object has a property called color with value "purple".

### Q6. [Hard] What is the output?

```
const students = [
  { name: "Aarav", marks: 72 },
  { name: "Priya", marks: 91 },
  { name: "Rohan", marks: 85 },
  { name: "Diya", marks: 68 }
];

const names = students
  .filter(s => s.marks >= 70)
  .sort((a, b) => b.marks - a.marks)
  .map(s => s.name);

console.log(names);
```

*Hint:* Filter >= 70, sort descending, extract names.

**Answer:** `["Priya", "Rohan", "Aarav"]`

Filter keeps marks >= 70: Aarav(72), Priya(91), Rohan(85). Sort descending: Priya(91), Rohan(85), Aarav(72). Map to names: ["Priya", "Rohan", "Aarav"]. Diya(68) was filtered out.

### Q7. [Hard] What is the output?

```
const obj = {
  count: 0,
  increment() {
    this.count++;
    return this;
  },
  getCount() {
    return this.count;
  }
};

console.log(obj.increment().increment().increment().getCount());
```

*Hint:* Each increment returns this (the object), enabling chaining.

**Answer:** `3`

Each `increment()` increases count by 1 and returns `this` (the object), enabling method chaining. After three increments, count is 3. `getCount()` returns 3.

### Q8. [Hard] What is the output?

```
const data = '{"students":[{"name":"Meera","score":88},{"name":"Kabir","score":92}]}';
const parsed = JSON.parse(data);
console.log(parsed.students[1].name);
console.log(parsed.students.length);
```

*Hint:* Parse the JSON string, then navigate the nested structure.

**Answer:** `Kabir`
`2`

`JSON.parse` converts the string to an object. `parsed.students` is an array of 2 objects. `parsed.students[1]` is the second student (Kabir). `.name` gives "Kabir". `.length` gives 2.

### Q9. [Medium] What is the output?

```
const obj = { a: 1, b: 2 };
const copy = Object.assign({}, obj, { c: 3 });
console.log(copy);
console.log(obj);
```

*Hint:* Object.assign copies properties from source objects to a target.

**Answer:** `{ a: 1, b: 2, c: 3 }`
`{ a: 1, b: 2 }`

`Object.assign({}, obj, { c: 3 })` copies properties from obj and { c: 3 } into a new empty object. The original obj is unchanged. This is similar to using spread: `{ ...obj, c: 3 }`.

### Q10. [Hard] What is the difference between a shallow copy and a deep copy of an object? How do you create each?

*Hint:* Think about what happens with nested objects and arrays.

**Answer:** A **shallow copy** copies top-level properties by value for primitives but by reference for nested objects/arrays. Changes to nested data in the copy affect the original. Create with `{ ...obj }` or `Object.assign({}, obj)`. A **deep copy** creates completely independent copies at all nesting levels. Create with `structuredClone(obj)` or `JSON.parse(JSON.stringify(obj))`.

Example: if original = { data: [1,2] }, a shallow copy shares the same array. Pushing to the copy's data also pushes to the original's data. A deep copy has its own independent array.

### Q11. [Easy] What is the output?

```
const obj = { name: "Ishaan", age: 13 };
console.log(obj.hasOwnProperty("name"));
console.log(obj.hasOwnProperty("email"));
```

*Hint:* hasOwnProperty checks if the object directly has the property.

**Answer:** `true`
`false`

`hasOwnProperty` checks if the object itself (not its prototype) has the specified property. "name" exists directly on obj (true). "email" does not exist (false).

### Q12. [Hard] What is the output?

```
const people = [
  { name: "Aarav", city: "Delhi" },
  { name: "Priya", city: "Mumbai" },
  { name: "Rohan", city: "Delhi" },
  { name: "Diya", city: "Mumbai" }
];

const grouped = people.reduce((acc, person) => {
  const city = person.city;
  acc[city] = acc[city] || [];
  acc[city].push(person.name);
  return acc;
}, {});

console.log(grouped);
```

*Hint:* reduce groups people by city into an object.

**Answer:** `{ Delhi: ["Aarav", "Rohan"], Mumbai: ["Priya", "Diya"] }`

The reduce builds an object where each key is a city and each value is an array of names from that city. Delhi gets Aarav and Rohan. Mumbai gets Priya and Diya.

### Q13. [Medium] What is the output?

```
const obj = { a: 1, b: 2, c: 3 };
for (const [key, val] of Object.entries(obj)) {
  console.log(key + " = " + val);
}
```

*Hint:* Destructuring in the for...of loop unpacks each [key, value] pair.

**Answer:** `a = 1`
`b = 2`
`c = 3`

`Object.entries(obj)` returns [["a",1],["b",2],["c",3]]. The `for...of` loop destructures each pair into `key` and `val`.

## Multiple Choice Questions

### Q1. [Easy] How do you create an object in JavaScript?

**Answer:** B

**B is correct.** Objects are created with curly braces `{}`. Square brackets `[]` (option A) create arrays. The other syntaxes are not valid.

### Q2. [Easy] What does Object.keys(obj) return?

**Answer:** C

**C is correct.** `Object.keys()` returns an array of property names (strings). `Object.values()` returns values (option A). `Object.entries()` returns pairs (option B).

### Q3. [Easy] When must you use bracket notation instead of dot notation?

**Answer:** B

**B is correct.** Bracket notation is required when the key contains spaces or special characters (`obj["full name"]`), when the key is stored in a variable (`obj[key]`), or when it is computed dynamically.

### Q4. [Easy] What does JSON stand for?

**Answer:** C

**C is correct.** JSON stands for JavaScript Object Notation. It is a text format for representing data that looks like JavaScript objects but with stricter rules (all keys must be double-quoted).

### Q5. [Easy] What does delete obj.key do?

**Answer:** C

**C is correct.** The `delete` operator completely removes the property from the object. After deletion, the property no longer exists (not null, not undefined - gone).

### Q6. [Medium] What happens when you use === to compare two objects with identical content?

**Answer:** B

**B is correct.** `===` compares objects by reference (memory address), not by content. Two different objects with identical content are different references, so `===` returns false.

### Q7. [Medium] Why should you NOT use arrow functions as object methods?

**Answer:** B

**B is correct.** Arrow functions do not have their own `this`. They inherit `this` from the enclosing scope, which is usually NOT the object. So `this.propertyName` inside an arrow method will be undefined.

### Q8. [Medium] What does JSON.stringify do?

**Answer:** C

**C is correct.** `JSON.stringify` converts a JavaScript object to a JSON string. `JSON.parse` does the opposite (option A).

### Q9. [Medium] What does the spread operator { ...obj } create?

**Answer:** B

**B is correct.** The spread operator creates a shallow copy. Top-level primitive properties are copied by value, but nested objects and arrays are copied by reference (shared). Use `structuredClone` for deep copies.

### Q10. [Medium] What is optional chaining (?.) used for?

**Answer:** B

**B is correct.** Optional chaining `?.` safely accesses nested properties. If any part of the chain is null or undefined, it short-circuits and returns undefined instead of throwing a TypeError.

### Q11. [Hard] What is the result of typeof null?

**Answer:** C

**C is correct.** `typeof null` returns "object". This is a well-known bug in JavaScript from its early implementation. null is NOT actually an object - it is its own type. This has never been fixed for backward compatibility.

### Q12. [Hard] What is the modern way to create a deep copy of an object?

**Answer:** C

**C is correct.** `structuredClone()` creates a true deep copy of an object, including nested structures. Options A and B create shallow copies. Option D is not a real method.

### Q13. [Hard] What types of values are NOT allowed in JSON?

**Answer:** C

**C is correct.** JSON only supports strings, numbers, booleans, null, arrays, and objects. Functions, undefined, Symbol, Infinity, and NaN are NOT valid JSON values. `JSON.stringify` silently omits these.

### Q14. [Hard] What does Object.entries({ a: 1, b: 2 }) return?

**Answer:** C

**C is correct.** `Object.entries()` returns an array of [key, value] pairs. Each property becomes a two-element array. Option A is Object.keys(). Option B is Object.values().

### Q15. [Easy] What is the output of: const obj = {}; console.log(typeof obj);

**Answer:** B

**B is correct.** An empty object is still an object. `typeof {}` returns "object". It is not "empty" or "undefined" - those are not valid typeof results for objects.

### Q16. [Medium] What is the shorthand for { name: name, age: age } in ES6?

**Answer:** A

**A is correct.** When the property name and variable name are the same, you can use the shorthand `{ name, age }` instead of `{ name: name, age: age }`. This is called shorthand property notation in ES6.

### Q17. [Hard] What does Object.freeze(obj) do?

**Answer:** B

**B is correct.** `Object.freeze()` makes an object immutable at the top level. You cannot add, remove, or modify properties. It is a shallow freeze - nested objects can still be modified.

## Coding Challenges

### Challenge 1. Student Report Card

**Difficulty:** Easy

Aarav has a student object: {name: "Aarav", marks: {maths: 92, science: 88, english: 76, hindi: 82}}. Write a program that calculates the total marks, average, and percentage.

**Constraints:**

- Use Object.values to extract marks. Use reduce to calculate the total.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Student: Aarav
Total: 338 / 400
Average: 84.5
Percentage: 84.5%
```

**Solution:**

```javascript
const student = {
  name: "Aarav",
  marks: { maths: 92, science: 88, english: 76, hindi: 82 }
};

const values = Object.values(student.marks);
const total = values.reduce((a, b) => a + b, 0);
const maxTotal = values.length * 100;
const avg = total / values.length;

console.log("Student:", student.name);
console.log("Total:", total, "/", maxTotal);
console.log("Average:", avg);
console.log("Percentage:", avg + "%");
```

### Challenge 2. Merge User Preferences

**Difficulty:** Easy

Priya has default settings {theme: "dark", fontSize: 14, lang: "en", notifications: true} and user preferences {fontSize: 18, lang: "hi"}. Merge them so user preferences override defaults.

**Constraints:**

- Use the spread operator to merge.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
{ theme: "dark", fontSize: 18, lang: "hi", notifications: true }
```

**Solution:**

```javascript
const defaults = { theme: "dark", fontSize: 14, lang: "en", notifications: true };
const userPrefs = { fontSize: 18, lang: "hi" };
const settings = { ...defaults, ...userPrefs };
console.log(settings);
```

### Challenge 3. Build Product Cards from Objects

**Difficulty:** Medium

Rohan has an array of product objects: [{name: "Laptop", price: 45000, rating: 4.5}, {name: "Phone", price: 15000, rating: 4.2}, {name: "Watch", price: 8000, rating: 4.8}]. Use map and template literals to generate HTML card strings for each product.

**Constraints:**

- Use map with template literals. Include price formatted with commas.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
(Three HTML cards with product name, price, and star rating)
```

**Solution:**

```javascript
const products = [
  { name: "Laptop", price: 45000, rating: 4.5 },
  { name: "Phone", price: 15000, rating: 4.2 },
  { name: "Watch", price: 8000, rating: 4.8 }
];

const cards = products.map(p => `<div class="product-card">
  <h3>${p.name}</h3>
  <p class="price">Rs ${p.price.toLocaleString()}</p>
  <p class="rating">${p.rating} / 5</p>
</div>`);

console.log(cards.join("\n"));
```

### Challenge 4. Object Difference Checker

**Difficulty:** Medium

Kavya wants to compare two versions of a student object and find what changed. Write a function diff(oldObj, newObj) that returns an object showing only the properties that changed.

**Constraints:**

- Compare each property. Only include properties that changed.

**Sample input:**

```
diff({name: "Kavya", age: 15, grade: "10th"}, {name: "Kavya", age: 16, grade: "11th"})
```

**Sample output:**

```
{ age: { old: 15, new: 16 }, grade: { old: "10th", new: "11th" } }
```

**Solution:**

```javascript
function diff(oldObj, newObj) {
  const changes = {};
  for (const key of Object.keys(newObj)) {
    if (oldObj[key] !== newObj[key]) {
      changes[key] = { old: oldObj[key], new: newObj[key] };
    }
  }
  return changes;
}

const result = diff(
  { name: "Kavya", age: 15, grade: "10th" },
  { name: "Kavya", age: 16, grade: "11th" }
);
console.log(result);
```

### Challenge 5. Invert Object Keys and Values

**Difficulty:** Medium

Vikram has the object {a: 1, b: 2, c: 3}. Write a function invertObject that swaps keys and values, returning {1: "a", 2: "b", 3: "c"}.

**Constraints:**

- Use Object.entries and reduce.

**Sample input:**

```
invertObject({a: 1, b: 2, c: 3})
```

**Sample output:**

```
{ 1: "a", 2: "b", 3: "c" }
```

**Solution:**

```javascript
function invertObject(obj) {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    acc[val] = key;
    return acc;
  }, {});
}

console.log(invertObject({ a: 1, b: 2, c: 3 }));
```

### Challenge 6. Deep Flatten Nested Object

**Difficulty:** Hard

Arjun has a deeply nested object: {a: 1, b: {c: 2, d: {e: 3, f: 4}}, g: 5}. Write a function flattenObject that returns {a: 1, "b.c": 2, "b.d.e": 3, "b.d.f": 4, g: 5}.

**Constraints:**

- Use recursion. Concatenate keys with dots for nesting.

**Sample input:**

```
flattenObject({a: 1, b: {c: 2, d: {e: 3}}})
```

**Sample output:**

```
{a: 1, "b.c": 2, "b.d.e": 3}
```

**Solution:**

```javascript
function flattenObject(obj, prefix = "") {
  const result = {};
  for (const [key, val] of Object.entries(obj)) {
    const newKey = prefix ? prefix + "." + key : key;
    if (typeof val === "object" && val !== null && !Array.isArray(val)) {
      Object.assign(result, flattenObject(val, newKey));
    } else {
      result[newKey] = val;
    }
  }
  return result;
}

console.log(flattenObject({ a: 1, b: { c: 2, d: { e: 3, f: 4 } }, g: 5 }));
```

### Challenge 7. Student Ranking System

**Difficulty:** Hard

Meera has student data as an array of objects. Write a function that takes the array, calculates each student's average, adds a rank property (1 = highest average), and returns the sorted array.

**Constraints:**

- Use map, sort, and forEach. Do not modify the original array.

**Sample input:**

```
[{name: "Aarav", marks: [85, 90, 78]}, {name: "Priya", marks: [92, 88, 95]}, {name: "Rohan", marks: [70, 65, 80]}]
```

**Sample output:**

```
[{name: "Priya", marks: [...], average: 91.67, rank: 1}, ...]
```

**Solution:**

```javascript
function rankStudents(students) {
  return students
    .map(s => ({
      ...s,
      average: parseFloat((s.marks.reduce((a, b) => a + b, 0) / s.marks.length).toFixed(2))
    }))
    .sort((a, b) => b.average - a.average)
    .map((s, i) => ({ ...s, rank: i + 1 }));
}

const data = [
  { name: "Aarav", marks: [85, 90, 78] },
  { name: "Priya", marks: [92, 88, 95] },
  { name: "Rohan", marks: [70, 65, 80] }
];

console.log(rankStudents(data));
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/objects-in-javascript/*
