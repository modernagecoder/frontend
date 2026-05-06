---
title: "Practice: Strings and Template Literals"
description: "55 practice problems for Strings and Template Literals in JavaScript"
slug: strings-and-template-literals-practice
canonical: https://learn.modernagecoders.com/resources/javascript/strings-and-template-literals/practice
category: "JavaScript"
---
# Practice: Strings and Template Literals

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
const name = "Aarav";
console.log(name.length);
console.log(name[0]);
```

*Hint:* length counts characters. Index 0 is the first character.

**Answer:** `5`
`A`

"Aarav" has 5 characters. `name[0]` returns the first character "A".

### Q2. [Easy] What is the output?

```
const str = "Hello World";
console.log(str.toUpperCase());
console.log(str);
```

*Hint:* toUpperCase returns a new string. The original is unchanged.

**Answer:** `HELLO WORLD`
`Hello World`

`toUpperCase()` returns a new all-uppercase string. The original `str` is unchanged because strings are immutable.

### Q3. [Easy] What is the output?

```
const text = "JavaScript";
console.log(text.includes("Script"));
console.log(text.includes("script"));
```

*Hint:* includes is case-sensitive.

**Answer:** `true`
`false`

`includes` is case-sensitive. "Script" (capital S) is found, so true. "script" (lowercase s) is not found because the actual text has an uppercase S.

### Q4. [Easy] What is the output?

```
const name = "Priya";
const age = 15;
console.log(`${name} is ${age} years old.`);
```

*Hint:* Template literals use ${} for interpolation.

**Answer:** `Priya is 15 years old.`

Template literals (backticks) replace `${name}` with "Priya" and `${age}` with 15, producing the complete sentence.

### Q5. [Easy] What is the output?

```
const str = "Hello, World!";
console.log(str.indexOf("World"));
console.log(str.indexOf("world"));
```

*Hint:* indexOf returns -1 if not found. It is case-sensitive.

**Answer:** `7`
`-1`

"World" starts at index 7. "world" (lowercase w) is not found, so indexOf returns -1. The search is case-sensitive.

### Q6. [Easy] What is the output?

```
console.log("Ha".repeat(4));
```

*Hint:* repeat(n) repeats the string n times.

**Answer:** `HaHaHaHa`

`"Ha".repeat(4)` creates a new string by repeating "Ha" four times: "HaHaHaHa".

### Q7. [Medium] What is the output?

```
const text = "JavaScript";
console.log(text.slice(4, 10));
console.log(text.slice(-6));
```

*Hint:* slice(4, 10) extracts from index 4 to 9. Negative index counts from the end.

**Answer:** `Script`
`Script`

`slice(4, 10)` extracts characters at indices 4 through 9: "Script". `slice(-6)` starts 6 characters from the end: "Script". Both produce the same result here.

### Q8. [Medium] What is the output?

```
const csv = "Aarav,Priya,Rohan";
const names = csv.split(",");
console.log(names);
console.log(names.join(" - "));
```

*Hint:* split breaks at commas. join combines with the given separator.

**Answer:** `["Aarav", "Priya", "Rohan"]`
`Aarav - Priya - Rohan`

`split(",")` breaks the string at each comma, creating an array. `join(" - ")` combines the array elements back into a string with " - " between each.

### Q9. [Medium] What is the output?

```
const str = "   hello   ";
console.log(str.trim());
console.log(str.trim().length);
```

*Hint:* trim removes whitespace from both ends.

**Answer:** `hello`
`5`

`trim()` removes leading and trailing whitespace, leaving "hello" (5 characters). The spaces in the original string are gone.

### Q10. [Medium] What is the output?

```
const text = "hello hello hello";
console.log(text.replace("hello", "hi"));
console.log(text.replaceAll("hello", "hi"));
```

*Hint:* replace changes only the first match. replaceAll changes all.

**Answer:** `hi hello hello`
`hi hi hi`

`replace` only changes the first "hello" to "hi". `replaceAll` changes every occurrence.

### Q11. [Medium] What is the output?

```
const n = 42;
console.log(String(n).padStart(6, "0"));
console.log("Hi".padEnd(10, "."));
```

*Hint:* padStart pads the beginning. padEnd pads the end.

**Answer:** `000042`
`Hi........`

`padStart(6, "0")` adds zeros to the start until the string is 6 characters long: "000042". `padEnd(10, ".")` adds dots to the end until the string is 10 characters long: "Hi........".

### Q12. [Medium] What is the output?

```
const score = 85;
console.log(`Grade: ${score >= 90 ? "A" : score >= 75 ? "B" : "C"}`);
```

*Hint:* Ternary operators work inside ${}.

**Answer:** `Grade: B`

Inside `${}`, the ternary chain evaluates: 85 >= 90? No. 85 >= 75? Yes, so "B". The result is "Grade: B".

### Q13. [Hard] What is the output?

```
const str = "abcabc";
console.log(str.indexOf("c"));
console.log(str.lastIndexOf("c"));
console.log(str.indexOf("c", 3));
```

*Hint:* indexOf searches from the start. lastIndexOf from the end. The second argument is the start position.

**Answer:** `2`
`5`
`5`

`indexOf("c")` finds the first "c" at index 2. `lastIndexOf("c")` finds the last "c" at index 5. `indexOf("c", 3)` starts searching from index 3 and finds "c" at index 5.

### Q14. [Hard] What is the output?

```
const students = ["Aarav", "Priya", "Rohan"];
const html = students.map(s => `${s}`).join("\n");
console.log(html);
```

*Hint:* map transforms each name into an li element. join combines with newlines.

**Answer:** `Aarav`
`Priya`
`Rohan`

`map` wraps each name in `` tags. `join("\n")` puts a newline between each element. The result is three list items, one per line.

### Q15. [Hard] What is the output?

```
const email = "priya.sharma@school.edu.in";
const parts = email.split(".");
console.log(parts);
console.log(parts.length);
```

*Hint:* split at every dot character.

**Answer:** `["priya", "sharma@school", "edu", "in"]`
`4`

`split(".")` breaks the string at every dot. The email has 3 dots, creating 4 parts. Note that the @ is not a split point, so "sharma@school" stays as one piece.

### Q16. [Easy] What is the difference between single quotes, double quotes, and backticks in JavaScript?

*Hint:* Two of them are the same. One has special powers.

**Answer:** Single quotes (`'`) and double quotes (`"`) are functionally identical - use either one consistently. Backticks (```) create **template literals** which have special features: string interpolation with `${expression}`, multiline strings (actual line breaks preserved), and tagged templates. Use backticks whenever you need variables in a string or multiline text.

Convention varies: some teams use single quotes for JS and double quotes for HTML attributes. But backticks should be used whenever you need interpolation. Template literals do not need escape characters for newlines.

### Q17. [Medium] Why are strings called immutable in JavaScript? What does that mean practically?

*Hint:* You cannot change a string after it is created.

**Answer:** Immutable means strings cannot be changed once created. You cannot modify individual characters: `str[0] = "X"` does nothing. Every string method (`toUpperCase`, `replace`, `slice`, etc.) returns a **new** string instead of modifying the original. To change a string variable, you must reassign it to a new string.

Example: `let s = "hello"; s.toUpperCase();` does NOT change s. You need `s = s.toUpperCase();` to update the variable.

### Q18. [Hard] What is the output?

```
const words = "  hello   world  ";
const clean = words.trim().split(/\s+/);
console.log(clean);
console.log(clean.join("-"));
```

*Hint:* trim first, then split on one or more whitespace characters.

**Answer:** `["hello", "world"]`
`hello-world`

`trim()` removes leading/trailing spaces: "hello   world". `split(/\s+/)` splits on one or more whitespace characters (regex), handling the multiple spaces between words. The result is ["hello", "world"]. `join("-")` combines them: "hello-world".

### Q19. [Easy] What is the output?

```
const str = "Hello";
console.log(str.startsWith("He"));
console.log(str.endsWith("lo"));
console.log(str.startsWith("he"));
```

*Hint:* Both methods are case-sensitive.

**Answer:** `true`
`true`
`false`

"Hello" starts with "He" (true) and ends with "lo" (true). It does NOT start with "he" (false) because the check is case-sensitive.

### Q20. [Hard] What is the output?

```
const student = { name: "Diya", score: 95 };
const card = `
  ${student.name}
  ${student.score >= 90 ? "Distinction" : "Pass"}

`;
console.log(card);
```

*Hint:* Template literal with nested ternary and multiline HTML.

**Answer:** ``
`  Diya`
`  Distinction`
``

The template literal builds multiline HTML. `${student.name}` inserts "Diya". `${student.score >= 90 ? "Distinction" : "Pass"}` evaluates to "Distinction" since 95 >= 90.

## Mixed Questions

### Q1. [Easy] What is the output?

```
const word = "Code";
console.log(word.split(""));
```

*Hint:* split with empty string splits into individual characters.

**Answer:** `["C", "o", "d", "e"]`

`split("")` splits the string at every character boundary, creating an array of individual characters.

### Q2. [Easy] What is the output?

```
console.log("5".padStart(3, "0"));
console.log("42".padStart(3, "0"));
console.log("123".padStart(3, "0"));
```

*Hint:* padStart pads to the target length. If already long enough, no padding is added.

**Answer:** `005`
`042`
`123`

"5" is 1 character, padded to 3: "005". "42" is 2 characters, padded to 3: "042". "123" is already 3 characters, no padding needed: "123".

### Q3. [Medium] What is the output?

```
const email = "aarav@school.com";
const username = email.slice(0, email.indexOf("@"));
const domain = email.slice(email.indexOf("@") + 1);
console.log(username);
console.log(domain);
```

*Hint:* Find the @ position, then slice before and after it.

**Answer:** `aarav`
`school.com`

`indexOf("@")` returns 5. `slice(0, 5)` gives "aarav". `slice(6)` (5+1) gives "school.com". This is a common pattern for parsing emails.

### Q4. [Medium] What is the output?

```
const str = "JavaScript";
console.log(str.charAt(0) + str.slice(1).toLowerCase());
```

*Hint:* Take the first character, then lowercase the rest.

**Answer:** `Javascript`

`charAt(0)` gives "J". `slice(1)` gives "avaScript". `.toLowerCase()` gives "avascript". Concatenated: "Javascript". This is a capitalize-first-letter pattern.

### Q5. [Medium] What is the output?

```
const arr = ["Maths", "Science", "English"];
const result = arr.map(s => s.toUpperCase()).join(", ");
console.log(result);
```

*Hint:* Map to uppercase, then join with comma-space.

**Answer:** `MATHS, SCIENCE, ENGLISH`

`map` transforms each string to uppercase: ["MATHS", "SCIENCE", "ENGLISH"]. `join(", ")` combines them into a single comma-separated string.

### Q6. [Medium] What is the output?

```
const str = "hello world hello";
const count = str.split("hello").length - 1;
console.log(count);
```

*Hint:* split at "hello" creates one more segment than there are occurrences.

**Answer:** `2`

Splitting "hello world hello" at "hello" gives ["", " world ", ""]. The array has 3 elements. The number of occurrences is `length - 1` = 2.

### Q7. [Hard] What is the output?

```
const words = ["the", "quick", "brown", "fox"];
const result = words
  .map(w => w.charAt(0).toUpperCase() + w.slice(1))
  .join(" ");
console.log(result);
```

*Hint:* Capitalize the first letter of each word.

**Answer:** `The Quick Brown Fox`

For each word, `charAt(0).toUpperCase()` capitalizes the first letter, and `slice(1)` keeps the rest. This creates a Title Case string.

### Q8. [Hard] What is the output?

```
const str = "racecar";
const reversed = str.split("").reverse().join("");
console.log(reversed);
console.log(str === reversed);
```

*Hint:* Split into chars, reverse the array, join back. Is racecar a palindrome?

**Answer:** `racecar`
`true`

Splitting "racecar" into characters, reversing them, and joining gives "racecar" (same as the original). Since the original equals the reversed version, it is a palindrome.

### Q9. [Hard] What is the output?

```
const data = [
  { name: "Aarav", score: 92 },
  { name: "Priya", score: 88 }
];

const html = data.map(s => 
  `${s.name}${s.score}`
).join("\n");

console.log(`\n${html}\n`);
```

*Hint:* Build table rows from data, then wrap in a table element.

**Answer:** ``
`Aarav92`
`Priya88`
``

Each student is mapped to a table row using template literals. The rows are joined with newlines and wrapped in `` tags. This is a fundamental pattern for generating HTML tables from data.

### Q10. [Hard] What is the output?

```
console.log(String.raw`Hello\nWorld`);
console.log(`Hello\nWorld`);
```

*Hint:* String.raw does not process escape sequences.

**Answer:** `Hello\nWorld`
`Hello`
`World`

`String.raw` treats backslash-n as literal characters (prints \n as text). The regular template literal processes \n as a newline, printing Hello and World on separate lines.

### Q11. [Medium] What is the difference between split and join? How do they work together?

*Hint:* One breaks strings into arrays. The other combines arrays into strings.

**Answer:** `split(separator)` breaks a string into an array at each occurrence of the separator. `join(separator)` combines array elements into a string with the separator between each element. They are inverses of each other. `"a-b-c".split("-")` gives ["a","b","c"]. `["a","b","c"].join("-")` gives "a-b-c".

A common pattern is split -> transform -> join. For example, capitalizing each word: split on spaces, capitalize each word with map, then join with spaces.

### Q12. [Easy] What is the output?

```
const a = 10;
const b = 20;
console.log(`Sum: ${a + b}`);
console.log(`Product: ${a * b}`);
```

*Hint:* Any expression works inside ${}.

**Answer:** `Sum: 30`
`Product: 200`

Inside `${}`, the expressions are evaluated: 10+20=30 and 10*20=200. The results are inserted into the string.

### Q13. [Medium] What is the output?

```
const str = "abcdef";
console.log(str.slice(2, 5));
console.log(str.slice(-3));
console.log(str.slice(1, -1));
```

*Hint:* Negative indices count from the end. End index is exclusive.

**Answer:** `cde`
`def`
`bcde`

`slice(2, 5)`: indices 2,3,4 = "cde". `slice(-3)`: last 3 characters = "def". `slice(1, -1)`: from index 1 to one before the end = "bcde".

## Multiple Choice Questions

### Q1. [Easy] What does str.length return?

**Answer:** B

**B is correct.** `length` returns the total number of characters. The last index is length - 1 (option A). It counts characters, not words (option C).

### Q2. [Easy] Which method checks if a string contains a specific substring?

**Answer:** C

**C is correct.** `includes()` returns true or false depending on whether the substring is found. `has()` and `contains()` are not string methods. `find()` is an array method.

### Q3. [Easy] What is the output of "Hello".indexOf("xyz")?

**Answer:** C

**C is correct.** `indexOf` returns -1 when the substring is not found. It returns a number, not a boolean (option B) or undefined (option D).

### Q4. [Easy] Which of these creates a template literal?

**Answer:** C

**C is correct.** Template literals use backticks (```). Single and double quotes (options A, B) treat `${name}` as literal text. Option D is not valid syntax.

### Q5. [Easy] What does trim() do?

**Answer:** B

**B is correct.** `trim()` removes whitespace from both ends of a string. It does NOT remove spaces in the middle (option A) or remove non-whitespace characters (option C).

### Q6. [Medium] What is the difference between replace and replaceAll?

**Answer:** B

**B is correct.** `replace()` only replaces the first occurrence of the search string. `replaceAll()` replaces every occurrence. Both return new strings.

### Q7. [Medium] What does "Hello".split("") return?

**Answer:** B

**B is correct.** `split("")` with an empty string splits at every character boundary, creating an array of individual characters: ["H", "e", "l", "l", "o"].

### Q8. [Medium] What is the end index parameter in slice(start, end)?

**Answer:** C

**C is correct.** In `slice(start, end)`, the character at the end index is NOT included. It extracts from start up to (but not including) end. `"Hello".slice(1, 4)` gives "ell" (indices 1, 2, 3).

### Q9. [Medium] Why are strings called immutable in JavaScript?

**Answer:** C

**C is correct.** Immutable means strings cannot be modified after creation. You cannot change individual characters. Every string method returns a new string. The variable can be reassigned, but the string itself cannot be altered.

### Q10. [Medium] What does ${ } do inside a template literal?

**Answer:** B

**B is correct.** `${expression}` evaluates the JavaScript expression inside and inserts the result into the string. This is called string interpolation. Any valid expression works: variables, math, function calls, ternary operators.

### Q11. [Hard] What is the output of "abc".padStart(2, "0")?

**Answer:** B

**B is correct.** `padStart(2, "0")` pads to a total length of 2. Since "abc" is already 3 characters (longer than 2), no padding is added. The string is returned unchanged.

### Q12. [Hard] What does String.raw do?

**Answer:** B

**B is correct.** `String.raw` is a tagged template that returns the raw string content without processing escape sequences like `\n` or `\t`. Backslashes are treated as literal characters.

### Q13. [Hard] What is a tagged template literal?

**Answer:** B

**B is correct.** A tagged template is a function placed before a template literal: `myTag`text ${value}``. The function receives the string parts and interpolated values separately, allowing custom processing.

### Q14. [Hard] How do you check if a string is a palindrome?

**Answer:** C

**C is correct.** Strings do not have a `reverse()` method. You must split into an array, reverse the array, and join back into a string. If the result equals the original, it is a palindrome.

## Coding Challenges

### Challenge 1. Capitalize First Letter of Each Word

**Difficulty:** Easy

Aarav has the string "hello world from javascript". Write a function titleCase that capitalizes the first letter of each word.

**Constraints:**

- Use split, map, and join.

**Sample input:**

```
"hello world from javascript"
```

**Sample output:**

```
Hello World From Javascript
```

**Solution:**

```javascript
function titleCase(str) {
  return str.split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(titleCase("hello world from javascript"));
```

### Challenge 2. Count Character Frequency

**Difficulty:** Easy

Priya has the string "programming". Write a program that counts how many times each character appears.

**Constraints:**

- Use split and reduce.

**Sample input:**

```
"programming"
```

**Sample output:**

```
{ p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 }
```

**Solution:**

```javascript
const str = "programming";
const freq = str.split("").reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});

console.log(freq);
```

### Challenge 3. Generate an HTML Card from a Student Object

**Difficulty:** Medium

Use template literals to generate an HTML card from the student object: {name: "Kavya", grade: "10th", score: 94, subjects: ["Maths", "Science", "English"]}. The card should include the name, grade, score with a status (Distinction if >= 90, else Pass), and a list of subjects.

**Constraints:**

- Use template literals with ${} interpolation. Use map and join for the subjects list.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
(An HTML card with student details and a subject list)
```

**Solution:**

```javascript
const student = {
  name: "Kavya",
  grade: "10th",
  score: 94,
  subjects: ["Maths", "Science", "English"]
};

const card = `<div class="student-card">
  <h3>${student.name}</h3>
  <p>Grade: ${student.grade} | Score: ${student.score}/100</p>
  <p>Status: ${student.score >= 90 ? "Distinction" : "Pass"}</p>
  <h4>Subjects:</h4>
  <ul>
    ${student.subjects.map(s => `<li>${s}</li>`).join("\n    ")}
  </ul>
</div>`;

console.log(card);
```

### Challenge 4. Palindrome Checker

**Difficulty:** Medium

Rohan wants to check if a string is a palindrome (reads the same forwards and backwards). Write a function isPalindrome that ignores spaces and case.

**Constraints:**

- Convert to lowercase and remove spaces before checking.

**Sample input:**

```
"Race Car"
```

**Sample output:**

```
true
```

**Solution:**

```javascript
function isPalindrome(str) {
  const clean = str.toLowerCase().replaceAll(" ", "");
  const reversed = clean.split("").reverse().join("");
  return clean === reversed;
}

console.log(isPalindrome("Race Car"));   // true
console.log(isPalindrome("Hello"));      // false
console.log(isPalindrome("Was It A Car Or A Cat I Saw")); // true
```

### Challenge 5. Email Validator

**Difficulty:** Medium

Diya wants to validate email addresses. Write a function isValidEmail that checks if a string has exactly one @, at least one character before @, and at least one dot after @.

**Constraints:**

- Use string methods like indexOf, includes, and slice. Do not use regex.

**Sample input:**

```
"diya@school.com"
```

**Sample output:**

```
true
```

**Solution:**

```javascript
function isValidEmail(email) {
  const trimmed = email.trim();
  const atIndex = trimmed.indexOf("@");
  
  if (atIndex < 1) return false; // nothing before @
  if (trimmed.lastIndexOf("@") !== atIndex) return false; // multiple @
  
  const domain = trimmed.slice(atIndex + 1);
  if (!domain.includes(".")) return false; // no dot in domain
  if (domain.startsWith(".") || domain.endsWith(".")) return false;
  
  return true;
}

console.log(isValidEmail("diya@school.com"));  // true
console.log(isValidEmail("@school.com"));      // false
console.log(isValidEmail("diya@school"));      // false
console.log(isValidEmail("diya@@school.com")); // false
```

### Challenge 6. String Compression

**Difficulty:** Hard

Arjun wants to compress strings by counting consecutive characters. For example, "aaabbbccda" becomes "a3b3c2d1a1". Write a function compress(str).

**Constraints:**

- Use a loop. Handle single characters and edge cases.

**Sample input:**

```
"aaabbbccda"
```

**Sample output:**

```
a3b3c2d1a1
```

**Solution:**

```javascript
function compress(str) {
  if (str.length === 0) return "";
  
  let result = "";
  let count = 1;
  
  for (let i = 1; i <= str.length; i++) {
    if (i < str.length && str[i] === str[i - 1]) {
      count++;
    } else {
      result += str[i - 1] + count;
      count = 1;
    }
  }
  
  return result;
}

console.log(compress("aaabbbccda"));  // a3b3c2d1a1
console.log(compress("aabbcc"));      // a2b2c2
console.log(compress("abcdef"));      // a1b1c1d1e1f1
```

### Challenge 7. Build a Formatted Table from Data

**Difficulty:** Hard

Meera has an array of student objects. Write a function that generates a formatted text table using padStart and padEnd for alignment.

**Constraints:**

- Use padStart and padEnd for column alignment.

**Sample input:**

```
[{name: "Aarav", maths: 95, science: 88}, {name: "Priya", maths: 78, science: 92}]
```

**Sample output:**

```
Name        Maths    Science
--------------------------
Aarav          95         88
Priya          78         92
```

**Solution:**

```javascript
const students = [
  { name: "Aarav", maths: 95, science: 88 },
  { name: "Priya", maths: 78, science: 92 },
  { name: "Rohan", maths: 85, science: 76 }
];

const header = "Name".padEnd(12) + "Maths".padStart(8) + "Science".padStart(10);
const separator = "-".repeat(30);
const rows = students.map(s => 
  s.name.padEnd(12) + String(s.maths).padStart(8) + String(s.science).padStart(10)
);

console.log(header);
console.log(separator);
rows.forEach(row => console.log(row));
```

### Challenge 8. URL Slug Generator

**Difficulty:** Hard

Vikram wants to convert blog titles into URL-friendly slugs. Write a function slugify that converts "Hello World! This is Great" to "hello-world-this-is-great" by lowercasing, removing special characters, and replacing spaces with hyphens.

**Constraints:**

- Use toLowerCase, replace/replaceAll, and trim. Handle multiple spaces.

**Sample input:**

```
"Hello World! This is Great"
```

**Sample output:**

```
hello-world-this-is-great
```

**Solution:**

```javascript
function slugify(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")  // remove special chars
    .replace(/\s+/g, "-")           // spaces to hyphens
    .replace(/-+/g, "-")            // collapse multiple hyphens
    .replace(/^-|-$/g, "");          // trim hyphens
}

console.log(slugify("Hello World! This is Great"));
console.log(slugify("  JavaScript: The Good Parts  "));
console.log(slugify("10 Tips & Tricks for Coding!"));
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/strings-and-template-literals/*
