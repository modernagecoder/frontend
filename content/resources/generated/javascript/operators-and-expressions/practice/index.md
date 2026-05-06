---
title: "Practice: Operators and Expressions"
description: "57 practice problems for Operators and Expressions in JavaScript"
slug: operators-and-expressions-practice
canonical: https://learn.modernagecoders.com/resources/javascript/operators-and-expressions/practice/
category: "JavaScript"
---
# Practice: Operators and Expressions

**Total questions:** 57

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 3);
```

*Hint:* Basic arithmetic. Division returns a decimal.

**Answer:** `15`
`5`
`50`
`3.3333333333333335`

Addition, subtraction, and multiplication are straightforward. JavaScript division always returns a floating-point number — there is no integer division operator.

### Q2. [Easy] What is the output?

```
console.log(10 % 3);
console.log(15 % 5);
console.log(7 % 2);
```

*Hint:* % returns the remainder after division.

**Answer:** `1`
`0`
`1`

`10 % 3`: 10 / 3 = 3 remainder 1. `15 % 5`: 15 / 5 = 3 remainder 0 (evenly divisible). `7 % 2`: 7 / 2 = 3 remainder 1. The % operator is useful for checking if a number is even (`n % 2 === 0`).

### Q3. [Easy] What is the output?

```
console.log(5 == "5");
console.log(5 === "5");
```

*Hint:* == converts types, === does not.

**Answer:** `true`
`false`

`==` converts `"5"` to number 5, so `5 == 5` is true. `===` checks type AND value: number vs string, so it is false.

### Q4. [Medium] What is the output?

```
console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);
```

*Hint:* == converts types. false becomes 0, '' becomes 0.

**Answer:** `true`
`false`
`true`
`false`

With ==: `0 == false` converts false to 0, true. `"" == false` converts both to 0, true. With ===: different types are immediately false.

### Q5. [Medium] What is the output?

```
console.log("Aarav" && "Priya");
console.log(0 && "Priya");
console.log("" || "Guest");
console.log("Rohan" || "Guest");
```

*Hint:* && returns first falsy or last value. || returns first truthy or last value.

**Answer:** `Priya`
`0`
`Guest`
`Rohan`

`"Aarav" && "Priya"`: both truthy, returns last ("Priya"). `0 && "Priya"`: 0 is falsy, returns 0 immediately. `"" || "Guest"`: "" is falsy, tries next, returns "Guest". `"Rohan" || "Guest"`: "Rohan" is truthy, returns it.

### Q6. [Medium] What is the output?

```
let age = 15;
let result = age >= 18 ? "adult" : "minor";
console.log(result);
```

*Hint:* condition ? valueIfTrue : valueIfFalse

**Answer:** `minor`

`15 >= 18` is false, so the ternary returns the value after `:`, which is `"minor"`.

### Q7. [Medium] What is the output?

```
let count = 0;
console.log(count || 10);
console.log(count ?? 10);
```

*Hint:* || checks for falsy. ?? checks only for null/undefined.

**Answer:** `10`
`0`

`0 || 10`: 0 is falsy, so || returns 10. `0 ?? 10`: 0 is not null or undefined, so ?? returns 0. This is the key difference between || and ??.

### Q8. [Medium] What is the output?

```
let user = { name: "Neha" };
console.log(user.name);
console.log(user.address?.city);
console.log(user.phone?.number ?? "No phone");
```

*Hint:* ?. returns undefined if the property does not exist. ?? provides a fallback.

**Answer:** `Neha`
`undefined`
`No phone`

`user.name` exists: "Neha". `user.address` is undefined, so `user.address?.city` returns undefined (no error). `user.phone?.number` is undefined, and `undefined ?? "No phone"` returns "No phone".

### Q9. [Hard] What is the output?

```
let x = 5;
console.log(x++);
console.log(x);
console.log(++x);
console.log(x);
```

*Hint:* x++ returns old value then increments. ++x increments then returns new value.

**Answer:** `5`
`6`
`7`
`7`

`x++` returns 5 (old value), then x becomes 6. `x` is now 6. `++x` increments x to 7, then returns 7. `x` is still 7.

### Q10. [Hard] What is the output?

```
console.log("0" == false);
console.log("0" == "");
console.log(false == "");
console.log(null == 0);
console.log(undefined == 0);
```

*Hint:* == is inconsistent. null only equals undefined with ==, not 0.

**Answer:** `true`
`false`
`true`
`false`
`false`

`"0" == false`: both convert to 0, true. `"0" == ""`: both strings, different values, false. `false == ""`: both convert to 0, true. `null == 0`: null only equals undefined, not 0, false. `undefined == 0`: same rule, false. This inconsistency is why === is preferred.

### Q11. [Hard] What is the output?

```
console.log(true + true + true);
console.log(true + "hello");
console.log([] + {});
console.log({} + []);
```

*Hint:* true is 1 in numeric context. [] becomes '' as a string. {} is '[object Object]'.

**Answer:** `3`
`truehello`
`[object Object]`
`[object Object]`

`true + true + true`: 1+1+1 = 3. `true + "hello"`: string wins, "truehello". `[] + {}`: [] becomes "", {} becomes "[object Object]", concatenation gives "[object Object]". In a browser console, `{} + []` might show `0` because {} is treated as an empty block.

### Q12. [Medium] Vikram wrote a function to greet users but it greets everyone as 'Guest' even when they provide a name. Find the bug:

```
function greet(name) {
  let displayName = name || "Guest";
  console.log(`Hello, ${displayName}!`);
}
greet("");  // User cleared their name intentionally
```

*Hint:* What happens when name is an empty string with ||?

**Answer:** Use `??` instead of `||`: `let displayName = name ?? "Guest";`

Empty string `""` is falsy, so `"" || "Guest"` returns "Guest". If the user intentionally cleared their name, we should keep the empty string. `"" ?? "Guest"` returns `""` because `??` only triggers on null/undefined.

### Q13. [Hard] What is the output?

```
console.log(2 + 3 * 4);
console.log((2 + 3) * 4);
console.log(2 ** 3 ** 2);
console.log(!true || false && true);
```

*Hint:* PEMDAS for math. Precedence: ! > && > || for logical.

**Answer:** `14`
`20`
`512`
`false`

Line 1: `3 * 4 = 12`, then `2 + 12 = 14`. Line 2: `(2+3) = 5`, then `5 * 4 = 20`. Line 3: `**` is right-associative, so `3**2 = 9`, then `2**9 = 512`. Line 4: `!true = false`, `false && true = false`, `false || false = false`.

### Q14. [Easy] Write code that checks if a number is even or odd using the % operator. Test with the number 17.

*Hint:* A number is even if n % 2 === 0.

**Answer:** ```
let n = 17;
let result = n % 2 === 0 ? "even" : "odd";
console.log(`${n} is ${result}`);
```

Output: 17 is odd

`17 % 2` equals 1 (not 0), so it is odd. The ternary operator assigns the correct string.

### Q15. [Hard] What is the output?

```
let a = 1;
let b = 2;
console.log(a || b);
console.log(a && b);
console.log(!a);
console.log(!!a);
```

*Hint:* || returns first truthy value. && returns first falsy or last value. ! converts to boolean.

**Answer:** `1`
`2`
`false`
`true`

`1 || 2`: 1 is truthy, returns 1. `1 && 2`: 1 is truthy, checks next, 2 is truthy, returns 2. `!1`: 1 is truthy, so !truthy = false. `!!1`: double NOT, converts to boolean true.

### Q16. [Easy] What is the output?

```
let x = 10;
x += 5;
x *= 2;
x -= 3;
console.log(x);
```

*Hint:* Trace each step: 10, then +5, then *2, then -3.

**Answer:** `27`

`x = 10`. `x += 5`: x = 15. `x *= 2`: x = 30. `x -= 3`: x = 27.

### Q17. [Medium] Write a one-liner using the ternary operator that assigns 'Pass' to a variable if marks >= 40, otherwise 'Fail'. Test with marks = 35.

*Hint:* Use condition ? 'Pass' : 'Fail'.

**Answer:** ```
let marks = 35;
let result = marks >= 40 ? "Pass" : "Fail";
console.log(`Marks: ${marks}, Result: ${result}`);
```

Output: Marks: 35, Result: Fail

`35 >= 40` is false, so the ternary returns "Fail".

### Q18. [Hard] What is the output?

```
console.log(false || 0 || "" || null || undefined || "found it" || true);
```

*Hint:* || keeps going until it finds a truthy value.

**Answer:** `found it`

`||` checks each value left to right: false (falsy), 0 (falsy), "" (falsy), null (falsy), undefined (falsy), "found it" (truthy — stops here). The string "found it" is returned.

### Q19. [Medium] What is the output?

```
let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" : "F";
console.log(grade);
```

*Hint:* Nested ternaries evaluate from left to right.

**Answer:** `B`

`85 >= 90` is false, so check next. `85 >= 80` is true, so return "B". The remaining conditions are not checked.

### Q20. [Hard] What is the output?

```
console.log(null ?? "a" ?? "b");
console.log(undefined ?? null ?? "c");
console.log(0 ?? null ?? "d");
```

*Hint:* ?? returns the right side only for null/undefined.

**Answer:** `a`
`c`
`0`

`null ?? "a"`: null triggers ??, returns "a". The second ?? is not reached. `undefined ?? null`: undefined triggers ??, returns null. Then `null ?? "c"` returns "c". `0 ?? null`: 0 is not null/undefined, returns 0.

## Mixed Questions

### Q1. [Easy] What is the output?

```
console.log(2 ** 3);
console.log(3 ** 2);
console.log(10 ** 0);
```

*Hint:* ** is the exponentiation operator (power).

**Answer:** `8`
`9`
`1`

`2 ** 3` = 8 (2 cubed). `3 ** 2` = 9 (3 squared). `10 ** 0` = 1 (any number to the power of 0 is 1).

### Q2. [Easy] Write code that checks if a variable `age` (set to 16) is between 13 and 19 inclusive using comparison operators. Log: 'Is teenager: true'.

*Hint:* Use >= and <= with &&.

**Answer:** ```
let age = 16;
let isTeen = age >= 13 && age <= 19;
console.log(`Is teenager: ${isTeen}`);
```

Output: Is teenager: true

`16 >= 13` is true, `16 <= 19` is true. `true && true` is true.

### Q3. [Medium] What is the output?

```
let x = 5;
console.log(x > 3 && x < 10);
console.log(x > 10 || x < 3);
console.log(!(x === 5));
```

*Hint:* Evaluate each comparison first, then apply logical operators.

**Answer:** `true`
`false`
`false`

Line 1: `5 > 3` is true, `5 < 10` is true, `true && true = true`. Line 2: `5 > 10` is false, `5 < 3` is false, `false || false = false`. Line 3: `5 === 5` is true, `!true = false`.

### Q4. [Medium] What is the output?

```
console.log(!!"");
console.log(!!"hello");
console.log(!!0);
console.log(!!null);
console.log(!!undefined);
console.log(!!"0");
```

*Hint:* !! converts any value to its boolean equivalent.

**Answer:** `false`
`true`
`false`
`false`
`false`
`true`

Double NOT converts to boolean. Empty string, 0, null, undefined are falsy (false). Non-empty strings (including "0") and non-zero numbers are truthy (true).

### Q5. [Medium] Write an HTML page with a number input. When a button is clicked, display whether the number is positive, negative, or zero, AND whether it is even or odd — all using ternary operators.

*Hint:* Use two ternary operators: one for sign, one for even/odd.

**Answer:** ```

Check

  function check() {
    let n = Number(document.getElementById("num").value);
    let sign = n > 0 ? "positive" : n < 0 ? "negative" : "zero";
    let parity = n % 2 === 0 ? "even" : "odd";
    document.getElementById("result").textContent = `${n} is ${sign} and ${parity}`;
  }

```

Two ternary operators determine the sign and parity. Template literal combines them for display.

### Q6. [Hard] What is the output?

```
let a = null;
let b = undefined;
let c = 0;
let d = "";
let e = false;

console.log(a ?? "default");
console.log(b ?? "default");
console.log(c ?? "default");
console.log(d ?? "default");
console.log(e ?? "default");
```

*Hint:* ?? only triggers on null and undefined. 0, '', and false are kept.

**Answer:** `default`
`default`
`0`
`` (empty string)
`false`

`null ?? "default"`: null triggers ??, returns "default". `undefined ?? "default"`: same. `0 ?? "default"`: 0 is not null/undefined, returns 0. `"" ?? "default"`: empty string is kept. `false ?? "default"`: false is kept.

### Q7. [Medium] Ananya's calculator adds numbers from two inputs but keeps concatenating instead of adding:

```
 
Add

  function add() {
    let result = document.getElementById('a').value + document.getElementById('b').value;
    alert(result);  // Shows '53' instead of 8
  }

```

*Hint:* Input .value always returns a string.

**Answer:** Convert inputs to numbers: `let result = Number(document.getElementById('a').value) + Number(document.getElementById('b').value);`

Input values are always strings. `"5" + "3"` is string concatenation giving `"53"`. Wrapping in `Number()` converts them to numbers first.

### Q8. [Hard] What is the output?

```
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```

*Hint:* JavaScript does NOT chain comparisons like Python. It evaluates left to right.

**Answer:** `true`
`false`

JavaScript evaluates left to right: `1 < 2` is `true`, then `true < 3` converts true to 1, and `1 < 3` is true. `3 > 2` is `true`, then `true > 1` converts true to 1, and `1 > 1` is `false`. Unlike Python, JavaScript does not support chained comparisons.

### Q9. [Hard] Write code that safely accesses deeply nested data. Given an API response object, access the first user's email and provide 'No email' as a default.

*Hint:* Use optional chaining (?.) and nullish coalescing (??).

**Answer:** ```
let response = {
  data: {
    users: [
      { name: "Priya", contact: { email: "priya@example.com" } }
    ]
  }
};

// Safe access with ?. and ??
let email = response?.data?.users?.[0]?.contact?.email ?? "No email";
console.log(email);  // "priya@example.com"

// Test with missing data
let emptyResponse = {};
let email2 = emptyResponse?.data?.users?.[0]?.contact?.email ?? "No email";
console.log(email2);  // "No email"
```

Each `?.` checks if the preceding value is null/undefined before proceeding. `?.[0]` is optional chaining for array access. If any step is null/undefined, the entire chain returns undefined, and `??` provides the fallback.

### Q10. [Easy] What is the output?

```
console.log(5 + 3 + "px");
console.log("$" + 5 + 3);
```

*Hint:* JavaScript evaluates left to right. The + behavior changes when it encounters a string.

**Answer:** `8px`
`$53`

Line 1: `5 + 3 = 8` (both numbers), then `8 + "px" = "8px"`. Line 2: `"$" + 5 = "$5"` (string wins), then `"$5" + 3 = "$53"`.

### Q11. [Hard] What is the output?

```
let x = 10;
let y = (x++, x + 5);
console.log(x);
console.log(y);
```

*Hint:* The comma operator evaluates both expressions and returns the last one.

**Answer:** `11`
`16`

The comma operator evaluates `x++` first (x becomes 11), then evaluates `x + 5 = 11 + 5 = 16` and assigns it to y. `x` is 11, `y` is 16.

### Q12. [Medium] What is the output?

```
console.log(typeof (10 > 5));
console.log(typeof (5 === 5));
console.log(typeof !true);
```

*Hint:* What type do comparison and logical operators return?

**Answer:** `boolean`
`boolean`
`boolean`

Comparison operators (`>`, `===`) and logical NOT (`!`) always return boolean values. `typeof true` or `typeof false` is `"boolean"`.

## Multiple Choice Questions

### Q1. [Easy] What is the output of: 5 === '5'?

**B is correct.** `===` (strict equality) checks both value AND type. `5` is a number and `'5'` is a string. Since the types differ, the result is `false`.

### Q2. [Easy] What does the % operator return?

**C is correct.** `%` is the remainder (modulo) operator. `10 % 3` returns 1 because 10 divided by 3 is 3 with a remainder of 1.

### Q3. [Easy] Which operator should you use for comparisons in JavaScript?

**C is correct.** `===` (strict equality) is the recommended comparison operator. `=` is assignment. `==` performs type coercion which leads to bugs.

### Q4. [Easy] What is the output of: Boolean(0)?

**B is correct.** `0` is one of the six falsy values in JavaScript. `Boolean(0)` returns `false`.

### Q5. [Medium] What is the output of: '' || 'Guest'?

**B is correct.** `||` returns the first truthy value. Empty string `''` is falsy, so `||` moves to the next value and returns `'Guest'`.

### Q6. [Medium] What is the output of: 0 ?? 'default'?

**A is correct.** `??` only returns the right side for `null` or `undefined`. `0` is neither, so it is returned as-is.

### Q7. [Medium] What does the ternary operator do?

**B is correct.** The ternary operator `condition ? a : b` evaluates the condition. If true, it returns `a`. If false, it returns `b`. It takes three operands: the condition, the true value, and the false value.

### Q8. [Medium] What is the output of: 'Aarav' && 'Priya'?

**C is correct.** `&&` returns the first falsy value, or the last value if all are truthy. Both strings are truthy, so it returns the last one: `'Priya'`.

### Q9. [Medium] Which of these is a truthy value?

**C is correct.** The string `"0"` is a non-empty string, which is truthy. `0`, `null`, and `NaN` are all falsy.

### Q10. [Hard] What is the output of: 3 > 2 > 1?

**B is correct.** JavaScript evaluates left to right: `3 > 2` is `true`. Then `true > 1` converts true to 1, and `1 > 1` is `false`. JavaScript does not chain comparisons like Python.

### Q11. [Hard] What is the difference between || and ???

**B is correct.** `||` returns the right side for ANY falsy value (0, '', null, undefined, NaN, false). `??` returns the right side ONLY for `null` or `undefined`. Use `??` when 0 or '' are valid values.

### Q12. [Hard] What is the output of: false || 0 || '' || null || 'found'?

**D is correct.** `||` checks each value left to right: false (falsy), 0 (falsy), '' (falsy), null (falsy), 'found' (truthy — returns it). The first truthy value encountered is `'found'`.

### Q13. [Hard] What is the output of: typeof (5 > 3)?

**B is correct.** `5 > 3` evaluates to `true`. `typeof true` returns `"boolean"`. Comparison operators always return boolean values.

### Q14. [Easy] What is x after: let x = 10; x += 5?

**C is correct.** `x += 5` is shorthand for `x = x + 5`. `10 + 5 = 15`.

### Q15. [Hard] What is the output of: null == undefined?

**A is correct.** With `==`, null and undefined are considered equal to each other (and only to each other). This is a special rule in the == algorithm. Note: `null === undefined` would be false.

## Coding Challenges

### Challenge 1. Comparison Table Builder

**Difficulty:** Easy

Write code that compares the number 5 with the string '5' using both == and ===. Display the results on a web page in a clear format.

**Constraints:**

- Show both results on the page.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
5 == '5': true
5 === '5': false
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <pre id="output"></pre>
  <script>
    let result = `5 == '5': ${5 == '5'}\n5 === '5': ${5 === '5'}\n\n0 == false: ${0 == false}\n0 === false: ${0 === false}\n\n'' == false: ${'' == false}\n'' === false: ${'' === false}`;
    document.getElementById('output').textContent = result;
  </script>
</body>
</html>
```

### Challenge 2. Smart Default Values

**Difficulty:** Easy

Create a function that takes a name and an age. If name is not provided, default to 'Guest'. If age is not provided, default to 0. Use ?? for defaults so that empty string names and age 0 are preserved.

**Constraints:**

- Use ?? instead of ||.

**Sample input:**

```
greet('', 0)
```

**Sample output:**

```
Hello, ! You are 0 years old.
```

**Solution:**

```javascript
function greet(name, age) {
  let displayName = name ?? 'Guest';
  let displayAge = age ?? 0;
  console.log(`Hello, ${displayName}! You are ${displayAge} years old.`);
}
greet('Aarav', 15);   // Hello, Aarav! You are 15 years old.
greet('', 0);         // Hello, ! You are 0 years old.
greet(null, null);    // Hello, Guest! You are 0 years old.
greet(undefined);     // Hello, Guest! You are 0 years old.
```

### Challenge 3. Grade Calculator with Ternary

**Difficulty:** Medium

Build an HTML page where the user enters marks (0-100) and clicks a button. Use nested ternary operators to determine the grade (A: 90+, B: 80+, C: 70+, D: 60+, F: below 60). Display the grade with a different color for each.

**Constraints:**

- Use ternary operators, not if-else. Use different colors for each grade.

**Sample input:**

```
User enters 85
```

**Sample output:**

```
Grade: B (displayed in blue)
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <input type="number" id="marks" placeholder="Enter marks (0-100)">
  <button onclick="calc()">Get Grade</button>
  <p id="result"></p>
  <script>
    function calc() {
      let marks = Number(document.getElementById('marks').value);
      let grade = marks >= 90 ? 'A' : marks >= 80 ? 'B' : marks >= 70 ? 'C' : marks >= 60 ? 'D' : 'F';
      let color = grade === 'A' ? 'green' : grade === 'B' ? 'blue' : grade === 'C' ? 'orange' : 'red';
      let el = document.getElementById('result');
      el.textContent = `Marks: ${marks}, Grade: ${grade}`;
      el.style.color = color;
    }
  </script>
</body>
</html>
```

### Challenge 4. Short-Circuit Pattern Demo

**Difficulty:** Medium

Write code demonstrating three practical uses of short-circuit evaluation: (1) default values with ||, (2) conditional execution with &&, (3) safe property access before optional chaining existed. Log the results.

**Constraints:**

- Show each pattern clearly with comments.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Name: Guest
Dashboard shown
City: Unknown
```

**Solution:**

```javascript
// Pattern 1: Default values with ||
let userInput = '';
let name = userInput || 'Guest';
console.log('Name:', name);

// Pattern 2: Conditional execution with &&
let isLoggedIn = true;
isLoggedIn && console.log('Dashboard shown');

// Pattern 3: Safe access (old way, before ?.)
let user = { profile: null };
let city = user && user.profile && user.profile.city || 'Unknown';
console.log('City:', city);

// Modern way with ?. and ??
let city2 = user?.profile?.city ?? 'Unknown';
console.log('City (modern):', city2);
```

### Challenge 5. Truthy/Falsy Visual Tester

**Difficulty:** Hard

Build an HTML page with an input field. As the user types (oninput event), show in real-time: the raw value, typeof, Boolean conversion (truthy/falsy), Number conversion, and highlight the box green for truthy or red for falsy.

**Constraints:**

- Update in real time using oninput event.

**Sample input:**

```
User types '0'
```

**Sample output:**

```
Value: '0' | typeof: string | Boolean: true (truthy) | Number: 0 [green border]
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <input type="text" id="val" oninput="test()" placeholder="Type any value..." style="padding:10px;font-size:16px;border:3px solid #ccc;">
  <pre id="output" style="font-size:16px;"></pre>
  <script>
    function test() {
      let val = document.getElementById('val').value;
      let boolVal = Boolean(val);
      let numVal = Number(val);
      let input = document.getElementById('val');
      input.style.borderColor = boolVal ? 'green' : 'red';
      document.getElementById('output').textContent = 
        `Value: '${val}'\ntypeof: ${typeof val}\nBoolean: ${boolVal} (${boolVal ? 'truthy' : 'falsy'})\nNumber: ${numVal}\n\nNote: Only empty string is falsy for strings.\n'0', ' ', and 'false' are all truthy strings!`;
    }
    test();
  </script>
</body>
</html>
```

### Challenge 6. Operator Precedence Challenge

**Difficulty:** Hard

Write 5 complex expressions that test operator precedence knowledge. For each, show the expression, the step-by-step evaluation (as comments), and the final result. Include at least one with **, one with mixed && and ||, and one with ternary.

**Constraints:**

- Show detailed step-by-step comments for each expression.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Step-by-step evaluation of 5 expressions with final results.
```

**Solution:**

```javascript
// Expression 1: Math precedence
// 2 + 3 * 4 ** 2 - 1
// Step: 4**2=16, 3*16=48, 2+48-1=49
console.log(2 + 3 * 4 ** 2 - 1);  // 49

// Expression 2: Logical precedence
// true || false && false
// Step: && first: false && false = false, then true || false = true
console.log(true || false && false);  // true

// Expression 3: Mixed comparison and logical
// 5 > 3 && 10 < 20 || false
// Step: 5>3=true, 10<20=true, true&&true=true, true||false=true
console.log(5 > 3 && 10 < 20 || false);  // true

// Expression 4: Ternary with comparison
// 10 > 5 ? 'yes' : 'no' + ' way'
// Step: 10>5=true, returns 'yes' (+ is inside the false branch)
console.log(10 > 5 ? 'yes' : 'no' + ' way');  // 'yes'

// Expression 5: Nullish with logical
// null ?? 'a' || 'b'
// Step: null??'a' = 'a', 'a'||'b' = 'a'
console.log(null ?? 'a' || 'b');  // 'a'
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/operators-and-expressions/*
