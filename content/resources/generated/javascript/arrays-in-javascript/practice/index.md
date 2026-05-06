---
title: "Practice: Arrays and Array Methods"
description: "58 practice problems for Arrays and Array Methods in JavaScript"
slug: arrays-in-javascript-practice
canonical: https://learn.modernagecoders.com/resources/javascript/arrays-in-javascript/practice/
category: "JavaScript"
---
# Practice: Arrays and Array Methods

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
const arr = [10, 20, 30];
console.log(arr[1]);
```

*Hint:* Arrays are zero-indexed. Index 1 is the second element.

**Answer:** `20`

Index 0 is 10, index 1 is 20, index 2 is 30. So `arr[1]` returns 20.

### Q2. [Easy] What is the output?

```
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
```

*Hint:* push adds an element to the end.

**Answer:** `[1, 2, 3, 4]`

`push(4)` adds 4 to the end of the array. The array becomes [1, 2, 3, 4].

### Q3. [Easy] What is the output?

```
const arr = ["a", "b", "c"];
console.log(arr.length);
console.log(arr[arr.length - 1]);
```

*Hint:* length is 3. The last index is length - 1.

**Answer:** `3`
`c`

The array has 3 elements. `arr[arr.length - 1]` is `arr[2]` which is "c". This is the standard way to access the last element.

### Q4. [Easy] What is the output?

```
const nums = [5, 10, 15];
const doubled = nums.map(n => n * 2);
console.log(doubled);
```

*Hint:* map transforms each element and returns a new array.

**Answer:** `[10, 20, 30]`

`map` calls the callback on each element: 5*2=10, 10*2=20, 15*2=30. Returns a new array [10, 20, 30]. The original array is unchanged.

### Q5. [Easy] What is the output?

```
const nums = [1, 2, 3, 4, 5];
const even = nums.filter(n => n % 2 === 0);
console.log(even);
```

*Hint:* filter keeps elements where the callback returns true.

**Answer:** `[2, 4]`

`filter` tests each element. 1%2=1 (false), 2%2=0 (true), 3%2=1 (false), 4%2=0 (true), 5%2=1 (false). Only 2 and 4 pass the test.

### Q6. [Easy] What is the output?

```
const arr = [10, 20, 30];
console.log(arr.includes(20));
console.log(arr.includes(25));
```

*Hint:* includes returns true if the value is in the array.

**Answer:** `true`
`false`

20 is in the array, so `includes(20)` returns true. 25 is not in the array, so `includes(25)` returns false.

### Q7. [Medium] What is the output?

```
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);
```

*Hint:* reduce accumulates: 0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15.

**Answer:** `15`

reduce starts with acc=0. Step by step: 0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15. The final accumulated value is 15.

### Q8. [Medium] What is the output?

```
const arr = [3, 1, 4, 1, 5];
const sorted = [...arr].sort((a, b) => a - b);
console.log(sorted);
console.log(arr);
```

*Hint:* Spreading creates a copy. Sort modifies the copy, not the original.

**Answer:** `[1, 1, 3, 4, 5]`
`[3, 1, 4, 1, 5]`

`[...arr]` creates a copy. `sort` modifies that copy, not the original. So sorted is [1,1,3,4,5] but arr remains [3,1,4,1,5].

### Q9. [Medium] What is the output?

```
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 4));
console.log(arr.slice(3));
```

*Hint:* slice(start, end) extracts from start up to (not including) end.

**Answer:** `[2, 3, 4]`
`[4, 5]`

`slice(1, 4)` extracts elements at indices 1, 2, 3 (not 4): [2, 3, 4]. `slice(3)` extracts from index 3 to the end: [4, 5]. The original array is unchanged.

### Q10. [Medium] What is the output?

```
const students = [
  { name: "Aarav", score: 72 },
  { name: "Priya", score: 91 },
  { name: "Rohan", score: 85 }
];

const top = students.find(s => s.score > 80);
console.log(top.name);
```

*Hint:* find returns the FIRST element that matches.

**Answer:** `Priya`

`find` returns the first element where the callback returns true. It checks Aarav (72 > 80? No), then Priya (91 > 80? Yes). It returns Priya's object immediately without checking Rohan.

### Q11. [Medium] What is the output?

```
const [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);
console.log(b);
console.log(rest);
```

*Hint:* Destructuring with rest pattern collects remaining elements.

**Answer:** `10`
`20`
`[30, 40, 50]`

`a` gets the first element (10), `b` gets the second (20), and `...rest` collects everything else into an array [30, 40, 50].

### Q12. [Hard] What is the output?

```
const nums = [1, 2, 3, 4, 5, 6];
const result = nums
  .filter(n => n % 2 === 0)
  .map(n => n * n);
console.log(result);
```

*Hint:* Filter even numbers first, then square each one.

**Answer:** `[4, 16, 36]`

First, `filter` keeps even numbers: [2, 4, 6]. Then `map` squares each: [4, 16, 36]. This is method chaining - the output of filter feeds into map.

### Q13. [Hard] What is the output?

```
const words = ["hello", "world", "javascript"];
const result = words.reduce((longest, word) => {
  return word.length > longest.length ? word : longest;
}, "");
console.log(result);
```

*Hint:* reduce finds the longest word by comparing lengths.

**Answer:** `javascript`

Starting with "" (length 0): "hello" (5 > 0, keep "hello"), "world" (5 > 5? No, keep "hello"), "javascript" (10 > 5, keep "javascript"). The longest word is "javascript".

### Q14. [Hard] What is the output?

```
const nums = [1, 2, 3, 4, 5];
const result = nums.reduce((acc, n) => {
  acc[n % 2 === 0 ? "even" : "odd"].push(n);
  return acc;
}, { even: [], odd: [] });
console.log(result);
```

*Hint:* reduce builds an object that groups numbers into even and odd arrays.

**Answer:** `{ even: [2, 4], odd: [1, 3, 5] }`

The accumulator starts as `{ even: [], odd: [] }`. Each number is pushed into the appropriate array based on whether it is even or odd. This is a grouping pattern using reduce.

### Q15. [Hard] What is the output?

```
const a = [1, 2, 3];
const b = [3, 4, 5];
const unique = [...new Set([...a, ...b])];
console.log(unique);
```

*Hint:* Spread both arrays, use a Set to remove duplicates, spread back to array.

**Answer:** `[1, 2, 3, 4, 5]`

`[...a, ...b]` merges into [1,2,3,3,4,5]. `new Set()` removes duplicates: {1,2,3,4,5}. Spreading the Set back gives [1,2,3,4,5].

### Q16. [Medium] What is the difference between map and forEach? When would you use each one?

*Hint:* One returns a new array, the other returns undefined.

**Answer:** `map` transforms each element and returns a **new array** with the results. `forEach` runs a function for each element but returns `undefined`. Use `map` when you need to transform data into a new array. Use `forEach` for side effects like logging, updating DOM elements, or other operations where you do not need a return value.

Example: `[1,2,3].map(n => n*2)` returns [2,4,6]. `[1,2,3].forEach(n => console.log(n))` logs each number but returns undefined. A common mistake is trying to use forEach to create a new array.

### Q17. [Medium] What is the output?

```
const ages = [12, 18, 15, 21, 16];
console.log(ages.every(a => a >= 18));
console.log(ages.some(a => a >= 18));
```

*Hint:* every checks ALL elements. some checks if ANY element passes.

**Answer:** `false`
`true`

`every` returns false because not all ages are >= 18 (12, 15, 16 fail). `some` returns true because at least one age is >= 18 (18 and 21 pass).

### Q18. [Easy] What is the output?

```
const arr = ["a", "b", "c"];
const removed = arr.pop();
console.log(removed);
console.log(arr);
```

*Hint:* pop removes and returns the last element.

**Answer:** `c`
`["a", "b"]`

`pop()` removes the last element ("c") and returns it. The array is now ["a", "b"].

### Q19. [Hard] What is the output?

```
const data = [[1, 2], [3, 4], [5, 6]];
const flat = data.flat();
const sum = flat.reduce((a, b) => a + b, 0);
console.log(flat);
console.log(sum);
```

*Hint:* flat flattens one level of nesting. Then reduce sums them all.

**Answer:** `[1, 2, 3, 4, 5, 6]`
`21`

`flat()` turns [[1,2],[3,4],[5,6]] into [1,2,3,4,5,6]. Then `reduce` sums all values: 1+2+3+4+5+6 = 21.

### Q20. [Medium] What is the output?

```
const arr = [1, 2, 3, 4, 5];
const idx = arr.findIndex(n => n > 3);
console.log(idx);
```

*Hint:* findIndex returns the INDEX of the first matching element.

**Answer:** `3`

`findIndex` tests each element: 1>3? No. 2>3? No. 3>3? No. 4>3? Yes, at index 3. Returns 3 (the index, not the value).

## Mixed Questions

### Q1. [Easy] What is the output?

```
const arr = ["x", "y", "z"];
arr.unshift("w");
console.log(arr);
```

*Hint:* unshift adds to the start of the array.

**Answer:** `["w", "x", "y", "z"]`

`unshift("w")` adds "w" to the beginning. The array becomes ["w", "x", "y", "z"].

### Q2. [Easy] What is the output?

```
const names = ["Aarav", "Priya", "Rohan"];
console.log(names.indexOf("Priya"));
console.log(names.indexOf("Diya"));
```

*Hint:* indexOf returns the index or -1 if not found.

**Answer:** `1`
`-1`

"Priya" is at index 1. "Diya" is not in the array, so indexOf returns -1.

### Q3. [Medium] What is the output?

```
const nums = [10, 20, 30, 40, 50];
const result = nums
  .filter(n => n >= 20)
  .map(n => n / 10);
console.log(result);
```

*Hint:* Filter first (>= 20), then divide each by 10.

**Answer:** `[2, 3, 4, 5]`

Filter keeps [20, 30, 40, 50] (all >= 20). Map divides each by 10: [2, 3, 4, 5].

### Q4. [Medium] What is the output?

```
const a = [1, 2];
const b = [3, 4];
const c = [...a, ...b, 5];
console.log(c);
```

*Hint:* Spread unpacks arrays. You can add extra elements too.

**Answer:** `[1, 2, 3, 4, 5]`

`...a` gives 1, 2. `...b` gives 3, 4. Then 5 is added. The result is [1, 2, 3, 4, 5].

### Q5. [Medium] What is the output?

```
const arr = ["hello", "world", "test"];
const result = arr.map(s => s.toUpperCase());
console.log(result);
```

*Hint:* map transforms each string to uppercase.

**Answer:** `["HELLO", "WORLD", "TEST"]`

`map` calls `toUpperCase()` on each string and returns a new array with the uppercase versions.

### Q6. [Medium] What is the output?

```
const scores = [85, 42, 91, 67, 38];
const passCount = scores.filter(s => s >= 50).length;
console.log(passCount);
```

*Hint:* Filter, then check the length of the filtered array.

**Answer:** `3`

`filter` keeps scores >= 50: [85, 91, 67]. The length of that array is 3. Three students passed.

### Q7. [Hard] What is the output?

```
const students = [
  { name: "Aarav", marks: 85 },
  { name: "Priya", marks: 92 },
  { name: "Rohan", marks: 78 },
  { name: "Diya", marks: 95 }
];

const toppers = students
  .filter(s => s.marks >= 85)
  .sort((a, b) => b.marks - a.marks)
  .map(s => s.name);

console.log(toppers);
```

*Hint:* Filter >= 85, sort descending by marks, extract names.

**Answer:** `["Diya", "Priya", "Aarav"]`

Filter keeps students with marks >= 85: Aarav(85), Priya(92), Diya(95). Sort descending: Diya(95), Priya(92), Aarav(85). Map extracts names: ["Diya", "Priya", "Aarav"].

### Q8. [Hard] What is the output?

```
const words = ["cat", "elephant", "dog", "hippopotamus"];
const longest = words.reduce((a, b) => a.length >= b.length ? a : b);
console.log(longest);
```

*Hint:* reduce compares each word's length to find the longest.

**Answer:** `hippopotamus`

Starting with "cat": "elephant"(8) > "cat"(3) -> "elephant". "dog"(3) < "elephant"(8) -> "elephant". "hippopotamus"(12) > "elephant"(8) -> "hippopotamus". The longest word is "hippopotamus".

### Q9. [Hard] What is the output?

```
const arr = Array.from({ length: 5 }, (_, i) => i * i);
console.log(arr);
```

*Hint:* Array.from with a mapping function. The second parameter (i) is the index.

**Answer:** `[0, 1, 4, 9, 16]`

`Array.from` creates an array of length 5. The mapping function receives each index (0,1,2,3,4) and returns its square: 0, 1, 4, 9, 16.

### Q10. [Hard] What is the output?

```
const data = [
  { category: "fruit", name: "apple" },
  { category: "veg", name: "carrot" },
  { category: "fruit", name: "mango" },
  { category: "veg", name: "potato" }
];

const grouped = data.reduce((acc, item) => {
  if (!acc[item.category]) acc[item.category] = [];
  acc[item.category].push(item.name);
  return acc;
}, {});

console.log(grouped);
```

*Hint:* reduce groups items by category into an object.

**Answer:** `{ fruit: ["apple", "mango"], veg: ["carrot", "potato"] }`

This is a groupBy pattern. The accumulator starts as an empty object. For each item, it creates an array for the category (if it does not exist) and pushes the name into it. The result groups items by their category.

### Q11. [Hard] Explain the difference between slice and splice. Which one modifies the original array?

*Hint:* One copies, the other cuts.

**Answer:** `slice(start, end)` creates a new array from a portion of the original without modifying it. `splice(start, deleteCount, ...items)` modifies the original array by removing, replacing, or inserting elements at a specified position. `splice` modifies the original, `slice` does not.

Think of it this way: sl**ice** is like photocopying some pages from a book (original stays intact). Spl**ice** is like cutting pages out of the book and optionally inserting new ones (original is changed).

### Q12. [Easy] What is the output?

```
const arr = [1, 2, 3, 4];
const shifted = arr.shift();
console.log(shifted);
console.log(arr);
```

*Hint:* shift removes and returns the first element.

**Answer:** `1`
`[2, 3, 4]`

`shift()` removes the first element (1) and returns it. The array becomes [2, 3, 4].

### Q13. [Medium] What is the output?

```
const sentences = ["hello world", "foo bar baz"];
const words = sentences.flatMap(s => s.split(" "));
console.log(words);
```

*Hint:* flatMap maps then flattens one level.

**Answer:** `["hello", "world", "foo", "bar", "baz"]`

`map` would give [["hello","world"],["foo","bar","baz"]]. `flatMap` flattens that one level to ["hello","world","foo","bar","baz"].

## Multiple Choice Questions

### Q1. [Easy] What index does the first element of an array have?

**Answer:** B

**B is correct.** Arrays in JavaScript are zero-indexed. The first element is always at index 0, the second at index 1, and so on.

### Q2. [Easy] Which method adds an element to the END of an array?

**Answer:** C

**C is correct.** `push()` adds to the end. `unshift()` adds to the start. `pop()` removes from the end. `shift()` removes from the start.

### Q3. [Easy] Which method returns a new array with transformed elements?

**Answer:** B

**B is correct.** `map()` calls a function on each element and returns a new array with the results. `forEach` returns undefined. `filter` returns selected elements. `reduce` returns a single value.

### Q4. [Easy] What does [1, 2, 3].includes(2) return?

**Answer:** B

**B is correct.** `includes()` returns a boolean: `true` if the value is found in the array, `false` if not. Since 2 is in the array, it returns true.

### Q5. [Easy] What does arr.pop() return?

**Answer:** B

**B is correct.** `pop()` removes the last element from the array and returns that removed element. `push()` is the one that returns the new length.

### Q6. [Medium] What is the default sorting behavior of arr.sort()?

**Answer:** C

**C is correct.** By default, `sort()` converts elements to strings and sorts them by Unicode code points (alphabetically). This is why [40, 100, 1] sorts as [1, 100, 40] - because "100" comes before "40" as strings.

### Q7. [Medium] What does filter() return if no elements match the condition?

**Answer:** C

**C is correct.** `filter()` always returns an array. If no elements pass the test, it returns an empty array `[]`. It never returns null, undefined, or false.

### Q8. [Medium] Which method modifies the original array?

**Answer:** D

**D is correct.** `sort()` modifies the original array in place. `map()`, `filter()`, and `slice()` all return new arrays without changing the original.

### Q9. [Medium] What does the spread operator [...arr] do?

**Answer:** B

**B is correct.** `[...arr]` creates a shallow copy of the array. It does not reverse (option A), flatten deeply nested arrays (option C), or remove duplicates (option D - use a Set for that).

### Q10. [Medium] What is the second argument to reduce()?

**Answer:** C

**C is correct.** `reduce(callback, initialValue)` takes a callback as the first argument and an optional initial value for the accumulator as the second. Always provide an initial value to avoid errors with empty arrays.

### Q11. [Hard] What is the result of [1, 2, 3].map(n => n > 1)?

**Answer:** B

**B is correct.** `map` transforms each element using the callback. `1 > 1` is false, `2 > 1` is true, `3 > 1` is true. The result is [false, true, true]. If you wanted [2, 3], you would use `filter` instead.

### Q12. [Hard] What does Array.from({length: 3}, (_, i) => i) return?

**Answer:** B

**B is correct.** `Array.from` creates an array of length 3 and calls the mapping function for each index. The function receives the element (undefined, which we ignore with _) and the index. It returns [0, 1, 2].

### Q13. [Hard] What is the difference between find() and filter()?

**Answer:** B

**B is correct.** `find` returns the first element that matches (or undefined if none match). `filter` returns a new array with ALL elements that match (or an empty array if none match). find stops at the first match; filter checks every element.

### Q14. [Hard] What does [1, [2, [3]]].flat() return?

**Answer:** B

**B is correct.** By default, `flat()` flattens one level of nesting. The outer array [1, [2, [3]]] becomes [1, 2, [3]]. The inner [3] is not flattened because it is at depth 2. Use `flat(2)` or `flat(Infinity)` to flatten deeper.

### Q15. [Easy] What does arr.length return?

**Answer:** B

**B is correct.** `length` returns the total number of elements in the array. The last index is `length - 1` (option A). JavaScript arrays do not have a fixed capacity (option D).

### Q16. [Medium] How do you correctly sort numbers in ascending order?

**Answer:** C

**C is correct.** `(a, b) => a - b` sorts numbers ascending. If a < b, the result is negative (a comes first). If a > b, the result is positive (b comes first). Option B sorts descending.

## Coding Challenges

### Challenge 1. Find the Maximum Value

**Difficulty:** Easy

Aarav has the array [23, 67, 12, 89, 45, 91, 34]. Write a program using reduce to find the maximum value without using Math.max.

**Constraints:**

- Use reduce. Do not use Math.max or sort.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Maximum: 91
```

**Solution:**

```javascript
const nums = [23, 67, 12, 89, 45, 91, 34];
const max = nums.reduce((a, b) => a > b ? a : b);
console.log("Maximum:", max);
```

### Challenge 2. Remove Duplicates

**Difficulty:** Easy

Priya has the array [1, 3, 5, 3, 7, 1, 9, 5]. Write a program to remove duplicates and return a sorted array.

**Constraints:**

- Use the Set object and spread operator.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
[1, 3, 5, 7, 9]
```

**Solution:**

```javascript
const arr = [1, 3, 5, 3, 7, 1, 9, 5];
const unique = [...new Set(arr)].sort((a, b) => a - b);
console.log(unique);
```

### Challenge 3. Student Grade Report

**Difficulty:** Medium

Given an array of student objects [{name: "Aarav", marks: 85}, {name: "Priya", marks: 42}, {name: "Rohan", marks: 91}, {name: "Diya", marks: 67}, {name: "Vikram", marks: 38}], use method chaining to: (1) filter students who passed (marks >= 50), (2) sort by marks descending, (3) map to strings like "Rohan: 91".

**Constraints:**

- Use filter, sort, and map chained together.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Rohan: 91
Aarav: 85
Diya: 67
```

**Solution:**

```javascript
const students = [
  { name: "Aarav", marks: 85 },
  { name: "Priya", marks: 42 },
  { name: "Rohan", marks: 91 },
  { name: "Diya", marks: 67 },
  { name: "Vikram", marks: 38 }
];

students
  .filter(s => s.marks >= 50)
  .sort((a, b) => b.marks - a.marks)
  .map(s => s.name + ": " + s.marks)
  .forEach(line => console.log(line));
```

### Challenge 4. Group By Category

**Difficulty:** Medium

Kavya has an array of products: [{name: "Apple", type: "fruit"}, {name: "Carrot", type: "vegetable"}, {name: "Mango", type: "fruit"}, {name: "Potato", type: "vegetable"}, {name: "Banana", type: "fruit"}]. Use reduce to group them by type.

**Constraints:**

- Use reduce with an object as the accumulator.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
{ fruit: ["Apple", "Mango", "Banana"], vegetable: ["Carrot", "Potato"] }
```

**Solution:**

```javascript
const products = [
  { name: "Apple", type: "fruit" },
  { name: "Carrot", type: "vegetable" },
  { name: "Mango", type: "fruit" },
  { name: "Potato", type: "vegetable" },
  { name: "Banana", type: "fruit" }
];

const grouped = products.reduce((acc, p) => {
  if (!acc[p.type]) acc[p.type] = [];
  acc[p.type].push(p.name);
  return acc;
}, {});

console.log(grouped);
```

### Challenge 5. Flatten and Sum Nested Arrays

**Difficulty:** Medium

Arjun has the nested array [[10, 20], [30, 40], [50]]. Write a program that flattens it and calculates the sum using flat and reduce.

**Constraints:**

- Use flat() and reduce().

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Flat: [10, 20, 30, 40, 50]
Sum: 150
```

**Solution:**

```javascript
const nested = [[10, 20], [30, 40], [50]];
const flat = nested.flat();
const sum = flat.reduce((acc, n) => acc + n, 0);
console.log("Flat:", flat);
console.log("Sum:", sum);
```

### Challenge 6. Word Frequency Counter

**Difficulty:** Hard

Meera has the string "the cat sat on the mat the cat". Write a program that splits the string into words and uses reduce to count the frequency of each word.

**Constraints:**

- Use split and reduce.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
{ the: 3, cat: 2, sat: 1, on: 1, mat: 1 }
```

**Solution:**

```javascript
const text = "the cat sat on the mat the cat";
const freq = text.split(" ").reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(freq);
```

### Challenge 7. Intersection of Two Arrays

**Difficulty:** Hard

Rohan has two arrays: [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7]. Write a program to find the common elements (intersection) and the elements unique to each array (difference).

**Constraints:**

- Use filter and includes.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Common: [3, 4, 5]
Only in A: [1, 2]
Only in B: [6, 7]
```

**Solution:**

```javascript
const a = [1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7];

const common = a.filter(x => b.includes(x));
const onlyA = a.filter(x => !b.includes(x));
const onlyB = b.filter(x => !a.includes(x));

console.log("Common:", common);
console.log("Only in A:", onlyA);
console.log("Only in B:", onlyB);
```

### Challenge 8. Build Product Cards from Data

**Difficulty:** Hard

Diya has an array of products: [{name: "Laptop", price: 45000}, {name: "Phone", price: 15000}, {name: "Watch", price: 8000}]. Use map to generate HTML card strings for each product using template literals, then join them together.

**Constraints:**

- Use map and template literals. Generate valid HTML strings.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
(Three HTML card divs with product name and price)
```

**Solution:**

```javascript
const products = [
  { name: "Laptop", price: 45000 },
  { name: "Phone", price: 15000 },
  { name: "Watch", price: 8000 }
];

const cards = products.map(p => {
  return `<div class="card">
  <h3>${p.name}</h3>
  <p>Rs ${p.price.toLocaleString()}</p>
</div>`;
});

console.log(cards.join("\n"));
```

### Challenge 9. Custom Array Method: chunk

**Difficulty:** Hard

Write a function chunk(arr, size) that splits an array into groups of the given size. For example, chunk([1,2,3,4,5], 2) should return [[1,2], [3,4], [5]].

**Constraints:**

- Use a loop with slice. Return a new array of arrays.

**Sample input:**

```
chunk([1, 2, 3, 4, 5, 6, 7], 3)
```

**Sample output:**

```
[[1, 2, 3], [4, 5, 6], [7]]
```

**Solution:**

```javascript
function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3));
console.log(chunk([1, 2, 3, 4, 5], 2));
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/arrays-in-javascript/*
