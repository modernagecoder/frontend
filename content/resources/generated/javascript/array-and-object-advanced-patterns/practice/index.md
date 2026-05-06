---
title: "Practice: Advanced Array and Object Patterns"
description: "50 practice problems for Advanced Array and Object Patterns in JavaScript"
slug: array-and-object-advanced-patterns-practice
canonical: https://learn.modernagecoders.com/resources/javascript/array-and-object-advanced-patterns/practice
category: "JavaScript"
---
# Practice: Advanced Array and Object Patterns

**Total questions:** 50

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
const nums = [1, 2, 3, 4, 5];
const result = nums.filter(function(n) { return n > 2; }).map(function(n) { return n * 10; });
console.log(result);
```

*Hint:* filter keeps numbers > 2, then map multiplies each by 10.

**Answer:** `[30, 40, 50]`

filter keeps [3, 4, 5], then map transforms to [30, 40, 50]. This is a simple two-step chain.

### Q2. [Easy] What is the output?

```
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj));
console.log(Object.values(obj));
```

*Hint:* Object.keys returns property names. Object.values returns property values.

**Answer:** `["a", "b", "c"]`
`[1, 2, 3]`

Object.keys returns an array of the object's own property names. Object.values returns an array of the corresponding values.

### Q3. [Easy] What is the output?

```
const nums = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(nums)];
console.log(unique);
```

*Hint:* A Set only keeps unique values. Spread converts it back to an array.

**Answer:** `[1, 2, 3]`

new Set([1, 2, 2, 3, 3, 3]) creates a Set with unique values {1, 2, 3}. Spreading it into an array gives [1, 2, 3].

### Q4. [Easy] What is the output?

```
const nested = [[1, 2], [3, 4], [5, 6]];
console.log(nested.flat());
```

*Hint:* flat() flattens one level of nesting by default.

**Answer:** `[1, 2, 3, 4, 5, 6]`

flat() without arguments flattens one level of nesting, turning an array of arrays into a single flat array.

### Q5. [Medium] What is the output?

```
const student = {
  name: "Priya",
  scores: { maths: 95, science: 88 }
};
const { name, scores: { maths } } = student;
console.log(name);
console.log(maths);
```

*Hint:* Nested destructuring extracts values from nested objects.

**Answer:** `Priya`
`95`

The nested destructuring extracts `name` from the top level and `maths` from inside the `scores` object. Note that `scores` itself is not assigned to a variable -- only `maths` is extracted from it.

### Q6. [Medium] What is the output?

```
const key = "color";
const obj = { [key]: "purple", size: 10 };
console.log(obj);
console.log(obj.color);
```

*Hint:* Square brackets in object literals compute the property name from a variable.

**Answer:** `{ color: "purple", size: 10 }`
`purple`

The computed property name `[key]` evaluates the variable `key` to "color", creating the property `color: "purple"`.

### Q7. [Medium] What is the output?

```
const entries = [["x", 1], ["y", 2], ["z", 3]];
const obj = Object.fromEntries(entries);
console.log(obj);
console.log(obj.y);
```

*Hint:* Object.fromEntries converts [key, value] pairs into an object.

**Answer:** `{ x: 1, y: 2, z: 3 }`
`2`

Object.fromEntries takes an array of [key, value] pairs and creates an object. Each pair's first element becomes the key, second becomes the value.

### Q8. [Medium] What is the output?

```
const original = { a: 1, nested: { b: 2 } };
const copy = { ...original };
copy.a = 99;
copy.nested.b = 99;
console.log(original.a);
console.log(original.nested.b);
```

*Hint:* Spread creates a shallow copy. Top-level properties are independent, but nested objects are shared.

**Answer:** `1`
`99`

Changing copy.a does not affect original.a (top-level properties are copied). But copy.nested and original.nested point to the SAME object, so changing copy.nested.b also changes original.nested.b.

### Q9. [Hard] What is the output?

```
const items = [
  { name: "A", cat: "X" },
  { name: "B", cat: "Y" },
  { name: "C", cat: "X" },
  { name: "D", cat: "Y" },
  { name: "E", cat: "X" }
];
const grouped = items.reduce(function(acc, item) {
  if (!acc[item.cat]) acc[item.cat] = [];
  acc[item.cat].push(item.name);
  return acc;
}, {});
console.log(grouped);
console.log(grouped.X.length);
```

*Hint:* reduce groups items by their cat property.

**Answer:** `{ X: ["A", "C", "E"], Y: ["B", "D"] }`
`3`

The reduce creates an object with category keys. Items A, C, E belong to category X (length 3). Items B, D belong to category Y.

### Q10. [Hard] What is the output?

```
const data = [1, [2, [3, [4]]]];
console.log(data.flat(1));
console.log(data.flat(2));
console.log(data.flat(Infinity));
```

*Hint:* flat(n) flattens n levels of nesting.

**Answer:** `[1, 2, [3, [4]]]`
`[1, 2, 3, [4]]`
`[1, 2, 3, 4]`

flat(1) removes one level of nesting. flat(2) removes two levels. flat(Infinity) removes all levels, producing a completely flat array.

### Q11. [Hard] What is the output?

```
const scores = { maths: 40, science: 50, english: 30 };
const doubled = Object.fromEntries(
  Object.entries(scores).map(function([key, val]) {
    return [key, val * 2];
  })
);
console.log(doubled);
```

*Hint:* entries -> map (double values) -> fromEntries creates a new object.

**Answer:** `{ maths: 80, science: 100, english: 60 }`

Object.entries converts to [["maths", 40], ["science", 50], ["english", 30]]. Map doubles each value. Object.fromEntries converts back to an object.

### Q12. [Medium] What is the difference between a shallow copy and a deep copy?

*Hint:* Think about what happens to nested objects.

**Answer:** A **shallow copy** copies only the top-level properties. Nested objects and arrays inside the copy still point to the same references as the original. If you modify a nested property in the copy, the original is also affected. A **deep copy** recursively copies everything, creating completely independent nested objects.

Spread operator and Object.assign create shallow copies. structuredClone() and JSON.parse(JSON.stringify()) create deep copies. Use deep copies when your objects contain nested data that might be modified.

### Q13. [Hard] Why should you copy an array before sorting it? When is it OK not to?

*Hint:* Think about what sort() does to the original array.

**Answer:** `sort()` mutates the original array in place. If other parts of your code rely on the original order, sorting without copying will break them. You should copy first: `[...array].sort()`. It is OK to sort without copying if the array is temporary or you no longer need the original order (for example, you just loaded it from an API and want it sorted before displaying).

This is a common source of bugs. In React, for example, sorting a state array without copying causes unexpected re-render issues because the reference does not change.

### Q14. [Easy] What is the output?

```
const arr = [3, 1, 2];
const sorted = [...arr].sort();
console.log(arr);
console.log(sorted);
```

*Hint:* Spread creates a copy. Sort without a comparator sorts as strings.

**Answer:** `[3, 1, 2]`
`[1, 2, 3]`

The spread creates a copy, so the original array is unchanged. Default sort converts elements to strings and sorts alphabetically, which works correctly for single-digit numbers.

### Q15. [Easy] What is the output?

```
const obj = { name: 'Aarav', age: 15 };
const copy = { ...obj, age: 16 };
console.log(obj.age);
console.log(copy.age);
```

*Hint:* Spread copies all properties. Later properties override earlier ones.

**Answer:** `15`
`16`

The spread copies all properties from obj. The age: 16 after the spread overrides the copied age: 15. The original obj is unchanged.

### Q16. [Medium] What is the output?

```
const data = [
  { name: 'A', score: 10 },
  { name: 'B', score: 30 },
  { name: 'C', score: 20 }
];
const max = data.reduce(function(best, item) {
  return item.score > best.score ? item : best;
});
console.log(max.name);
```

*Hint:* reduce without initial value starts with the first element as accumulator.

**Answer:** `B`

reduce starts with A (score 10). B (30) > 10, so B becomes best. C (20) < 30, so B stays. B has the highest score.

### Q17. [Medium] What is the output?

```
const users = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 1, name: 'A' }
];
const unique = [...new Map(
  users.map(function(u) { return [u.id, u]; })
).values()];
console.log(unique.length);
```

*Hint:* Map keys are unique. Duplicate id=1 is overwritten.

**Answer:** `2`

The Map has keys 1 and 2. The duplicate (id: 1) overwrites the first entry. values() returns 2 unique users.

### Q18. [Hard] What is the output?

```
const items = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
const freq = items.reduce(function(acc, item) {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
const sorted = Object.entries(freq).sort(function(a, b) { return b[1] - a[1]; });
console.log(sorted[0]);
```

*Hint:* reduce counts frequencies. entries + sort finds the most common.

**Answer:** `["apple", 3]`

reduce builds { apple: 3, banana: 2, cherry: 1 }. Object.entries converts to pairs. Sorting by count descending puts ["apple", 3] first.

## Mixed Questions

### Q1. [Easy] What is the output?

```
const words = ["hello world", "good morning"];
const result = words.flatMap(function(w) { return w.split(" "); });
console.log(result);
```

*Hint:* flatMap maps each element and flattens the result by one level.

**Answer:** `["hello", "world", "good", "morning"]`

Each string is split into an array of words. flatMap combines the results into a single flat array.

### Q2. [Easy] What is the output?

```
const obj = { a: 1, b: 2, c: 3 };
const sum = Object.values(obj).reduce(function(s, v) { return s + v; }, 0);
console.log(sum);
```

*Hint:* Object.values gives [1, 2, 3]. reduce sums them.

**Answer:** `6`

Object.values extracts [1, 2, 3]. reduce sums them: 0 + 1 + 2 + 3 = 6.

### Q3. [Medium] What is the output?

```
const students = [
  { name: "Aarav", score: 85 },
  { name: "Priya", score: 92 },
  { name: "Rohan", score: 78 }
];
const best = students.reduce(function(max, s) {
  return s.score > max.score ? s : max;
});
console.log(best.name);
```

*Hint:* reduce without initial value starts with the first element.

**Answer:** `Priya`

reduce compares each student's score with the current max. Priya has the highest score (92), so she is the result.

### Q4. [Medium] What is the output?

```
const arr = [3, 1, 4, 1, 5, 9];
const sorted = [...arr].sort(function(a, b) { return a - b; });
console.log(arr);
console.log(sorted);
```

*Hint:* Spreading creates a copy. The original is not affected.

**Answer:** `[3, 1, 4, 1, 5, 9]`
`[1, 1, 3, 4, 5, 9]`

The spread creates a copy before sorting. The original array `arr` is unchanged. The sorted copy is in ascending order.

### Q5. [Medium] What is the output?

```
const people = [
  { name: "Aarav" },
  { name: "Priya" },
  { name: "Aarav" }
];
const names = people.map(function(p) { return p.name; });
const unique = [...new Set(names)];
console.log(unique);
```

*Hint:* Map extracts names, Set removes duplicates.

**Answer:** `["Aarav", "Priya"]`

map extracts ["Aarav", "Priya", "Aarav"]. new Set removes the duplicate "Aarav". Spreading gives ["Aarav", "Priya"].

### Q6. [Hard] What is the output?

```
const cart = [
  { item: "Pen", price: 10, qty: 5 },
  { item: "Book", price: 200, qty: 2 },
  { item: "Eraser", price: 5, qty: 10 }
];
const total = cart
  .map(function(i) { return i.price * i.qty; })
  .reduce(function(sum, val) { return sum + val; }, 0);
console.log(total);
```

*Hint:* map calculates each line total, reduce sums them.

**Answer:** `500`

map produces [50, 400, 50] (each price * qty). reduce sums them: 50 + 400 + 50 = 500.

### Q7. [Hard] What is the output?

```
const data = [
  { name: "Aarav", grade: "A" },
  { name: "Priya", grade: "B" },
  { name: "Rohan", grade: "A" },
  { name: "Meera", grade: "A" },
  { name: "Kavya", grade: "B" }
];

const countByGrade = data.reduce(function(acc, s) {
  acc[s.grade] = (acc[s.grade] || 0) + 1;
  return acc;
}, {});
console.log(countByGrade);
```

*Hint:* This counts how many students have each grade.

**Answer:** `{ A: 3, B: 2 }`

reduce counts occurrences of each grade. Three students have grade A (Aarav, Rohan, Meera) and two have grade B (Priya, Kavya).

### Q8. [Hard] What is the output?

```
const obj = { a: 10, b: 20, c: 30 };
const filtered = Object.fromEntries(
  Object.entries(obj).filter(function([k, v]) { return v >= 20; })
);
console.log(filtered);
console.log(Object.keys(filtered).length);
```

*Hint:* entries -> filter (keep values >= 20) -> fromEntries.

**Answer:** `{ b: 20, c: 30 }`
`2`

Object.entries gives [["a",10],["b",20],["c",30]]. filter keeps pairs where value >= 20: [["b",20],["c",30]]. fromEntries converts back to { b: 20, c: 30 }.

### Q9. [Hard] What is the output?

```
const original = { x: 1, arr: [2, 3] };
const deep = structuredClone(original);
deep.x = 99;
deep.arr.push(4);
console.log(original.x);
console.log(original.arr);
```

*Hint:* structuredClone creates a completely independent deep copy.

**Answer:** `1`
`[2, 3]`

structuredClone creates a deep copy. Modifying deep.x and deep.arr does not affect the original at all. Both top-level and nested data are independent.

## Multiple Choice Questions

### Q1. [Easy] Which method removes duplicate values from an array?

**Answer:** B

**B is correct.** `new Set(array)` creates a Set with unique values. Spreading it back into an array gives a deduplicated array.

### Q2. [Easy] What does Object.entries({ a: 1, b: 2 }) return?

**Answer:** C

**C is correct.** Object.entries returns an array of [key, value] pairs.

### Q3. [Easy] What does array.flat() do?

**Answer:** C

**C is correct.** `flat()` without arguments flattens one level of nesting. Pass a number for deeper flattening or Infinity for complete flattening.

### Q4. [Medium] What is the correct way to create a deep copy of an object?

**Answer:** C

**C is correct.** `structuredClone()` creates a true deep copy. Object.assign and spread only create shallow copies.

### Q5. [Medium] What does Object.fromEntries do?

**Answer:** B

**B is correct.** Object.fromEntries is the reverse of Object.entries. It takes [["a", 1], ["b", 2]] and returns { a: 1, b: 2 }.

### Q6. [Medium] Why should you write [...array].sort() instead of array.sort()?

**Answer:** B

**B is correct.** `sort()` modifies the array in place. If you need to keep the original order, spread into a new array first.

### Q7. [Medium] What is the purpose of reduce when grouping data?

**Answer:** B

**B is correct.** reduce starts with an empty object and adds each item to the appropriate group (array) based on a property value.

### Q8. [Medium] What is a computed property name in JavaScript?

**Answer:** B

**B is correct.** `{ [expression]: value }` evaluates the expression to determine the property name. Example: `{ ["na" + "me"]: "Aarav" }` creates `{ name: "Aarav" }`.

### Q9. [Hard] What does flatMap do differently from map followed by flat?

**Answer:** C

**C is correct.** `flatMap` is equivalent to calling `map` then `flat(1)`. It only flattens one level. It is slightly more efficient because it does both steps in one pass.

### Q10. [Hard] Which method is best for converting an array to an object for O(1) lookups by ID?

**Answer:** B

**B is correct.** This creates an object keyed by ID, allowing instant O(1) lookups. find() and indexOf() search the array each time (O(n)).

### Q11. [Hard] What happens when you use JSON.parse(JSON.stringify(obj)) as a deep clone?

**Answer:** B

**B is correct.** JSON.stringify cannot serialize functions, undefined, Infinity, NaN, Date objects (converts to strings), Map, Set, or circular references. structuredClone handles most of these better.

### Q12. [Easy] How do you sort an array of objects by a string property alphabetically?

**Answer:** C

**C is correct.** `localeCompare` compares strings properly for sorting, handling different languages and special characters.

### Q13. [Easy] What does the spread operator do in [...array]?

**Answer:** B

**B is correct.** The spread operator `[...array]` creates a shallow copy. Top-level elements are copied, but nested objects are still shared references.

### Q14. [Medium] What does array.reduce() return when used with an initial value of {}?

**Answer:** B

**B is correct.** reduce with {} as the initial value starts with an empty object. The callback builds up this object by adding/modifying properties in each iteration.

### Q15. [Hard] What is the time complexity of looking up a value in a lookup map (Object/Map) vs using array.find()?

**Answer:** C

**C is correct.** Object property access and Map.get() are O(1) (constant time). array.find() searches through the array linearly, which is O(n).

### Q16. [Medium] What does (acc[key] || 0) + 1 do in a reduce callback?

**Answer:** B

**B is correct.** If acc[key] is undefined (key does not exist), || 0 gives 0, then + 1 makes it 1. If acc[key] already has a value, it uses that value and adds 1.

### Q17. [Hard] What does array.flat(Infinity) do?

**Answer:** B

**B is correct.** flat(Infinity) recursively flattens all nested arrays, regardless of depth, into a single flat array.

## Coding Challenges

### Challenge 1. Student Grade Report

**Difficulty:** Easy

Given an array of students with name and scores (maths, science, english), calculate each student's average, find the class topper, and list students who scored above 90 in any subject.

**Constraints:**

- Use Object.values, reduce, filter, and sort.

**Sample input:**

```
[{name: 'Aarav', scores: {maths: 95, science: 88, english: 92}}, ...]
```

**Sample output:**

```
Topper: Aarav (Avg: 91.7)
Above 90 in any subject: Aarav, Priya
```

**Solution:**

```javascript
const students = [
  { name: "Aarav", scores: { maths: 95, science: 88, english: 92 } },
  { name: "Priya", scores: { maths: 78, science: 95, english: 85 } },
  { name: "Rohan", scores: { maths: 82, science: 76, english: 80 } }
];

const withAvg = students.map(function(s) {
  const vals = Object.values(s.scores);
  const avg = vals.reduce(function(sum, v) { return sum + v; }, 0) / vals.length;
  return { name: s.name, average: Math.round(avg * 10) / 10 };
});

const topper = withAvg.reduce(function(best, s) {
  return s.average > best.average ? s : best;
});
console.log("Topper:", topper.name, "(Avg:", topper.average + ")");

const above90 = students.filter(function(s) {
  return Object.values(s.scores).some(function(v) { return v > 90; });
});
console.log("Above 90:", above90.map(function(s) { return s.name; }).join(", "));
```

### Challenge 2. Word Frequency Counter

**Difficulty:** Easy

Write a function that takes a string, splits it into words, counts how many times each word appears, and returns the words sorted by frequency (highest first).

**Constraints:**

- Use split, reduce for counting, Object.entries for sorting.

**Sample input:**

```
"the cat sat on the mat the cat"
```

**Sample output:**

```
the: 3, cat: 2, sat: 1, on: 1, mat: 1
```

**Solution:**

```javascript
function wordFrequency(text) {
  const words = text.toLowerCase().split(/\s+/);
  const freq = words.reduce(function(acc, word) {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(freq)
    .sort(function(a, b) { return b[1] - a[1]; })
    .map(function([word, count]) { return word + ": " + count; })
    .join(", ");
}
console.log(wordFrequency("the cat sat on the mat the cat"));
```

### Challenge 3. Shopping Cart Calculator

**Difficulty:** Medium

Given a shopping cart array (items with name, price, quantity, category), write functions to: calculate total, find the most expensive category, get items sorted by total value, and create a summary with item count per category.

**Constraints:**

- Use reduce, sort, Object.entries, and method chaining.

**Sample input:**

```
[{name: 'Book', price: 300, qty: 2, category: 'Study'}, ...]
```

**Sample output:**

```
Total: Rs 1250
Most expensive category: Electronics
Items by value: [...]
```

**Solution:**

```javascript
const cart = [
  { name: "Book", price: 300, qty: 2, category: "Study" },
  { name: "Pen", price: 25, qty: 10, category: "Study" },
  { name: "Mouse", price: 500, qty: 1, category: "Electronics" }
];

const total = cart.reduce(function(sum, i) { return sum + i.price * i.qty; }, 0);
console.log("Total: Rs", total);

const byCat = cart.reduce(function(acc, i) {
  acc[i.category] = (acc[i.category] || 0) + i.price * i.qty;
  return acc;
}, {});

const topCat = Object.entries(byCat).sort(function(a, b) { return b[1] - a[1]; })[0];
console.log("Most expensive category:", topCat[0]);

const sorted = [...cart].sort(function(a, b) {
  return (b.price * b.qty) - (a.price * a.qty);
}).map(function(i) { return i.name + ": Rs " + (i.price * i.qty); });
console.log("By value:", sorted);
```

### Challenge 4. Leaderboard System

**Difficulty:** Medium

Build a leaderboard that sorts players by score (descending), then by wins (descending) for tiebreakers. Add functions to: get top N players, find a player's rank, and calculate the average score of the top 3.

**Constraints:**

- Use sort with multi-criteria comparison. Use findIndex for rank.

**Sample input:**

```
[{name: 'Aarav', score: 920, wins: 12}, ...]
```

**Sample output:**

```
Leaderboard:
1. Priya - 950 (15 wins)
2. Aarav - 920 (12 wins)
Aarav's rank: 2
```

**Solution:**

```javascript
const players = [
  { name: "Aarav", score: 920, wins: 12 },
  { name: "Priya", score: 950, wins: 15 },
  { name: "Rohan", score: 920, wins: 14 },
  { name: "Meera", score: 880, wins: 10 }
];

const ranked = [...players].sort(function(a, b) {
  if (b.score !== a.score) return b.score - a.score;
  return b.wins - a.wins;
});

function getTopN(n) {
  return ranked.slice(0, n);
}

function getRank(name) {
  return ranked.findIndex(function(p) { return p.name === name; }) + 1;
}

function topAvg(n) {
  const top = getTopN(n);
  return top.reduce(function(s, p) { return s + p.score; }, 0) / top.length;
}

console.log("Leaderboard:");
ranked.forEach(function(p, i) {
  console.log((i+1) + ". " + p.name + " - " + p.score + " (" + p.wins + " wins)");
});
console.log("Aarav rank:", getRank("Aarav"));
console.log("Top 3 avg:", topAvg(3).toFixed(1));
```

### Challenge 5. Data Transformation Pipeline

**Difficulty:** Hard

Given raw API data (array of user objects with nested address and posts), write a pipeline that: extracts users from Delhi, flattens their posts into a single array, counts posts per user, sorts by post count, and returns a summary object.

**Constraints:**

- Use method chaining, flatMap, reduce, sort, and destructuring.

**Sample input:**

```
[{name: 'Aarav', address: {city: 'Delhi'}, posts: [{title: 'JS Tips'}, ...]}, ...]
```

**Sample output:**

```
Delhi users: 3, Total posts: 12, Most active: Priya (5 posts)
```

**Solution:**

```javascript
const users = [
  { name: "Aarav", address: { city: "Delhi" }, posts: [{t: "a"}, {t: "b"}, {t: "c"}] },
  { name: "Priya", address: { city: "Delhi" }, posts: [{t: "d"}, {t: "e"}, {t: "f"}, {t: "g"}, {t: "h"}] },
  { name: "Rohan", address: { city: "Mumbai" }, posts: [{t: "i"}] },
  { name: "Meera", address: { city: "Delhi" }, posts: [{t: "j"}, {t: "k"}, {t: "l"}, {t: "m"}] }
];

const delhiUsers = users.filter(function(u) { return u.address.city === "Delhi"; });
const allPosts = delhiUsers.flatMap(function(u) { return u.posts; });
const postCounts = delhiUsers.map(function(u) {
  return { name: u.name, count: u.posts.length };
}).sort(function(a, b) { return b.count - a.count; });

const summary = {
  delhiUsers: delhiUsers.length,
  totalPosts: allPosts.length,
  mostActive: postCounts[0].name + " (" + postCounts[0].count + " posts)"
};
console.log(summary);
```

### Challenge 6. Object Difference Finder

**Difficulty:** Hard

Write a function that compares two objects and returns an object showing what was added, removed, and changed. Test with user profile updates.

**Constraints:**

- Use Object.keys, includes, and reduce.

**Sample input:**

```
{ name: 'Aarav', age: 15, city: 'Delhi' } vs { name: 'Aarav', age: 16, school: 'DPS' }
```

**Sample output:**

```
{ added: { school: 'DPS' }, removed: { city: 'Delhi' }, changed: { age: { from: 15, to: 16 } } }
```

**Solution:**

```javascript
function objectDiff(oldObj, newObj) {
  const oldKeys = Object.keys(oldObj);
  const newKeys = Object.keys(newObj);
  
  const added = Object.fromEntries(
    newKeys.filter(function(k) { return !oldKeys.includes(k); })
    .map(function(k) { return [k, newObj[k]]; })
  );
  
  const removed = Object.fromEntries(
    oldKeys.filter(function(k) { return !newKeys.includes(k); })
    .map(function(k) { return [k, oldObj[k]]; })
  );
  
  const changed = Object.fromEntries(
    oldKeys.filter(function(k) {
      return newKeys.includes(k) && oldObj[k] !== newObj[k];
    }).map(function(k) {
      return [k, { from: oldObj[k], to: newObj[k] }];
    })
  );
  
  return { added: added, removed: removed, changed: changed };
}

const diff = objectDiff(
  { name: "Aarav", age: 15, city: "Delhi" },
  { name: "Aarav", age: 16, school: "DPS" }
);
console.log(JSON.stringify(diff, null, 2));
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/array-and-object-advanced-patterns/*
