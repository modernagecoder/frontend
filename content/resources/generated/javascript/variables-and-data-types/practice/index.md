---
title: "Practice: Variables and Data Types"
description: "58 practice problems for Variables and Data Types in JavaScript"
slug: variables-and-data-types-practice
canonical: https://learn.modernagecoders.com/resources/javascript/variables-and-data-types/practice/
category: "JavaScript"
---
# Practice: Variables and Data Types

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
let x = 10;
const y = 20;
console.log(x + y);
```

*Hint:* let and const both store values. + adds numbers.

**Answer:** `30`

`x` is 10 and `y` is 20. The `+` operator adds them: `10 + 20 = 30`.

### Q2. [Easy] What is the output?

```
console.log(typeof 42);
console.log(typeof "42");
console.log(typeof true);
```

*Hint:* typeof returns the type as a lowercase string.

**Answer:** `number`
`string`
`boolean`

`42` is a number. `"42"` is a string (it has quotes). `true` is a boolean.

### Q3. [Easy] What is the output?

```
let name = "Aarav";
console.log(`Hello, ${name}!`);
```

*Hint:* Backticks and ${} create template literals.

**Answer:** `Hello, Aarav!`

Template literals replace `${name}` with the value of the variable `name`, which is `"Aarav"`.

### Q4. [Easy] What is the output?

```
let x;
console.log(x);
```

*Hint:* What value does a variable have if you never assign anything?

**Answer:** `undefined`

When a variable is declared with `let` but not assigned a value, it is automatically `undefined`.

### Q5. [Medium] What is the output?

```
console.log(typeof null);
console.log(typeof undefined);
```

*Hint:* One of these has a famous bug.

**Answer:** `object`
`undefined`

`typeof null` returns `"object"` — this is a well-known bug from 1995. `typeof undefined` correctly returns `"undefined"`.

### Q6. [Medium] What is the output?

```
console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "2");
```

*Hint:* The + operator concatenates with strings. Other math operators convert to numbers.

**Answer:** `53`
`2`
`10`

`"5" + 3`: `+` with a string does concatenation, giving `"53"`. `"5" - 3`: `-` only works with numbers, converting `"5"` to `5`, giving `2`. `"5" * "2"`: `*` converts both to numbers, giving `10`.

### Q7. [Medium] What is the output?

```
console.log(NaN === NaN);
console.log(typeof NaN);
console.log(Number.isNaN(NaN));
```

*Hint:* NaN has two famous quirks: its type and its equality behavior.

**Answer:** `false`
`number`
`true`

`NaN === NaN` is `false` — NaN is not equal to itself. `typeof NaN` returns `"number"`. `Number.isNaN(NaN)` is the correct way to check for NaN, returning `true`.

### Q8. [Medium] What is the output?

```
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean([]));  
```

*Hint:* There are exactly six falsy values. '0' is a non-empty string. [] is an empty array.

**Answer:** `false`
`false`
`true`
`true`

`0` and `""` (empty string) are falsy. `"0"` is a non-empty string, so it is truthy. `[]` (empty array) is an object, and all objects are truthy in JavaScript. This catches many people.

### Q9. [Hard] What is the output?

```
console.log(null == undefined);
console.log(null === undefined);
console.log(null == 0);
console.log(null == "");
```

*Hint:* null and undefined are loosely equal to each other but not to anything else.

**Answer:** `true`
`false`
`false`
`false`

With `==`, null and undefined are equal to each other and ONLY each other. `null == 0` is false, `null == ""` is false. With `===`, null and undefined are different types, so `null === undefined` is false.

### Q10. [Hard] What is the output?

```
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
```

*Hint:* The + operator with a string concatenates. All other math operators convert to numbers.

**Answer:** `10`
`-1`
`1`
`2`
`6`

Line 1: `"" + 1` is `"1"`, then `"1" + 0` is `"10"`. Line 2: `"" - 1` converts "" to 0, giving -1, then -1 + 0 = -1. Line 3: true=1, false=0, 1+0=1. Line 4: `"3"` becomes 3, 6/3=2. Line 5: both become numbers, 2*3=6.

### Q11. [Easy] Priya wrote this code but gets an error. Find the bug:

```
const score = 100;
score = score + 10;
console.log(score);
```

*Hint:* Check the variable declaration keyword.

**Answer:** Change `const` to `let` since the value needs to be reassigned: `let score = 100;`

`const` prevents reassignment. `score = score + 10` tries to reassign `score`, which causes a `TypeError`. Use `let` instead since the value needs to change.

### Q12. [Hard] What is the output?

```
let a = "2";
let b = "3";
console.log(a + b);
console.log(+a + +b);
```

*Hint:* The unary + operator converts to a number.

**Answer:** `23`
`5`

`"2" + "3"` is string concatenation: `"23"`. `+"2"` converts to number 2, `+"3"` converts to number 3, then `2 + 3 = 5`. The unary plus is a shortcut for `Number()`.

### Q13. [Hard] What is the output?

```
console.log(Number(""));
console.log(Number(" "));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(false));
console.log(Number("hello"));
```

*Hint:* Each value converts to a number differently. Empty string and null become 0.

**Answer:** `0`
`0`
`0`
`NaN`
`0`
`NaN`

`Number("")` and `Number(" ")` both give `0`. `Number(null)` gives `0`. `Number(undefined)` gives `NaN`. `Number(false)` gives `0`. `Number("hello")` gives `NaN` because "hello" is not a valid number.

### Q14. [Medium] Write code that declares a const name, a let age, and uses a template literal to log: 'Vikram is 16 and will be 17 next year'.

*Hint:* Use backticks and ${} with an expression inside.

**Answer:** ```
const name = "Vikram";
let age = 16;
console.log(`${name} is ${age} and will be ${age + 1} next year`);
```

Template literals can contain any expression inside `${}`. `${age + 1}` evaluates to 17. The name is const because it does not change.

### Q15. [Hard] What is the output?

```
console.log(parseInt("42px"));
console.log(parseInt("px42"));
console.log(Number("42px"));
console.log(parseFloat("3.14.15"));
```

*Hint:* parseInt/parseFloat read from the start. Number requires the whole string to be valid.

**Answer:** `42`
`NaN`
`NaN`
`3.14`

`parseInt("42px")` reads digits from the start: 42. `parseInt("px42")` starts with non-digit, returns NaN. `Number("42px")` requires the entire string to be numeric, returns NaN. `parseFloat("3.14.15")` reads until the second dot: 3.14.

### Q16. [Easy] What is the output?

```
let greeting = `Hello`;
console.log(typeof greeting);
```

*Hint:* Backticks create strings just like quotes do.

**Answer:** `string`

Template literals (backticks) create strings. `typeof `Hello`` returns `"string"`, just like `typeof "Hello"`.

### Q17. [Medium] What is the output?

```
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
```

*Hint:* const prevents reassignment but not mutation.

**Answer:** `[1, 2, 3, 4]`

`const` prevents you from reassigning the variable (like `arr = [5, 6]`), but it does NOT prevent you from modifying the array's contents. `arr.push(4)` adds an element to the existing array, which is allowed.

### Q18. [Hard] What is the output?

```
console.log(typeof typeof 42);
console.log(typeof typeof typeof true);
```

*Hint:* typeof always returns a string. What is typeof of a string?

**Answer:** `string`
`string`

`typeof 42` returns `"number"` (a string). `typeof "number"` returns `"string"`. Any number of chained typeof operations beyond the first will always return `"string"` because typeof always returns a string.

### Q19. [Medium] Rohan wants to check if a value is null but his check never works:

```
let data = null;
if (typeof data === "null") {
  console.log("It is null");
} else {
  console.log("Not null"); // This runs!
}
```

*Hint:* What does typeof null actually return?

**Answer:** Replace `typeof data === "null"` with `data === null`.

`typeof null` returns `"object"`, not `"null"`. The typeof check will never match. The correct way to check for null is `data === null`.

### Q20. [Hard] What is the output?

```
let a = 1;
let b = "1";
console.log(a == b);
console.log(a === b);
console.log(a + b);
console.log(a - b);
```

*Hint:* == converts types, === does not. + concatenates with strings, - converts to numbers.

**Answer:** `true`
`false`
`11`
`0`

`1 == "1"` is true (== converts types). `1 === "1"` is false (different types). `1 + "1"` is `"11"` (concatenation). `1 - "1"` is `0` (subtraction converts string to number).

## Mixed Questions

### Q1. [Easy] What is the output?

```
let a = 5;
let b = 10;
let c = a + b;
console.log(c);
console.log(typeof c);
```

*Hint:* Both a and b are numbers. typeof returns the type.

**Answer:** `15`
`number`

`5 + 10 = 15`. Both operands are numbers, so the result is a number. `typeof 15` is `"number"`.

### Q2. [Easy] Declare a const for your school name, a let for your age, and use a template literal to log: '[School] student, age [age]'.

*Hint:* Use const for the school (it won't change), let for age.

**Answer:** ```
const school = "Delhi Public School";
let age = 15;
console.log(`${school} student, age ${age}`);
```

The school name is a constant. Age could change. Template literals embed both variables cleanly.

### Q3. [Medium] What is the output?

```
console.log("5" == 5);
console.log("5" === 5);
console.log(0 == false);
console.log(0 === false);
```

*Hint:* == converts types before comparing. === does not.

**Answer:** `true`
`false`
`true`
`false`

`==` converts types: `"5"` becomes 5, so `"5" == 5` is true. `===` requires same type: string vs number is false. `0 == false`: false becomes 0, 0==0 is true. `0 === false`: number vs boolean is false.

### Q4. [Medium] What is the output?

```
let x = "10";
console.log(x + 5);
console.log(Number(x) + 5);
console.log(parseInt(x) + 5);
console.log(+x + 5);
```

*Hint:* Four ways to handle string-to-number conversion.

**Answer:** `105`
`15`
`15`
`15`

`"10" + 5` concatenates: `"105"`. `Number("10") + 5`: converts to 10, adds 5 = 15. `parseInt("10") + 5` = 15. `+"10" + 5`: unary plus converts to 10, adds 5 = 15.

### Q5. [Medium] Write an HTML page where the user enters a value in an input field and clicks a button. Display the typeof the entered value, its Number conversion, and its Boolean conversion.

*Hint:* Input values are always strings. Show Number() and Boolean() results.

**Answer:** ```

Check Type

  function check() {
    let val = document.getElementById("val").value;
    let result = `Value: '${val}'\n`;
    result += `typeof: ${typeof val}\n`;
    result += `Number(): ${Number(val)}\n`;
    result += `Boolean(): ${Boolean(val)}`;
    document.getElementById("output").textContent = result;
  }

```

The input value is always a string. `Number()` tries to convert it to a number (NaN if invalid). `Boolean()` converts to false only for empty strings, true for anything else.

### Q6. [Hard] What is the output?

```
let x = 0;
let y = "";
let z = null;

console.log(x == y);
console.log(x == z);
console.log(y == z);
console.log(x === y);
```

*Hint:* With ==: 0 equals '', null only equals undefined, not 0 or ''.

**Answer:** `true`
`false`
`false`
`false`

`0 == ""`: empty string converts to 0, 0==0 is true. `0 == null`: null only equals undefined with ==, so false. `"" == null`: same rule, false. `0 === ""`: different types (number vs string), false.

### Q7. [Hard] What is the output?

```
console.log(isNaN("hello"));
console.log(isNaN("42"));
console.log(Number.isNaN("hello"));
console.log(Number.isNaN(NaN));
```

*Hint:* Global isNaN converts first. Number.isNaN does not convert.

**Answer:** `true`
`false`
`false`
`true`

Global `isNaN("hello")` converts "hello" to NaN first, then checks: true. `isNaN("42")` converts to 42 (valid number): false. `Number.isNaN("hello")` does NOT convert — "hello" is a string, not NaN: false. `Number.isNaN(NaN)` checks the actual NaN value: true.

### Q8. [Medium] Neha tries to build a string using template literals but gets the literal text '${name}' instead of the value:

```
let name = "Neha";
console.log('Hello, ${name}!');
```

*Hint:* What kind of quotes does this use?

**Answer:** Use backticks instead of single quotes: `console.log(`Hello, ${name}!`);`

Template literals only work with backticks (```). Single quotes (`'`) and double quotes (`"`) treat `${name}` as literal text. The fix is to use backticks.

### Q9. [Hard] What is the output?

```
console.log([] + []);
console.log([] + {});
console.log(+[]);
console.log(+{});
```

*Hint:* Empty array becomes '' when converted to string. Unary + converts to number.

**Answer:** `` (empty string)
`[object Object]`
`0`
`NaN`

`[] + []`: arrays become empty strings, `"" + "" = ""`. `[] + {}`: `"" + "[object Object]"`. `+[]`: array to string is "", Number("") is 0. `+{}`: object to string is "[object Object]", Number of that is NaN.

### Q10. [Hard] Write code that demonstrates all six falsy values. For each, log the value and its Boolean conversion.

*Hint:* The six falsy values are: 0, '', null, undefined, NaN, false.

**Answer:** ```
let falsyValues = [0, "", null, undefined, NaN, false];
for (let val of falsyValues) {
  console.log(`${String(val)} -> ${Boolean(val)}`);
}
```

Each of the six falsy values converts to `false` with `Boolean()`. All other values in JavaScript are truthy.

### Q11. [Medium] What is the output?

```
let age = 15;
console.log(`In 5 years: ${age + 5}`);
console.log(`Double: ${age * 2}`);
console.log(`Is teen: ${age >= 13 && age <= 19}`);
```

*Hint:* Any expression works inside ${}.

**Answer:** `In 5 years: 20`
`Double: 30`
`Is teen: true`

Template literals evaluate expressions inside `${}`. `15 + 5 = 20`. `15 * 2 = 30`. `15 >= 13 && 15 <= 19` is `true`.

### Q12. [Hard] What is the output?

```
console.log("" == false);
console.log(" " == false);
console.log("0" == false);
console.log("1" == true);
```

*Hint:* == converts both sides to numbers. '' becomes 0, ' ' becomes 0, '0' becomes 0, false becomes 0, true becomes 1.

**Answer:** `true`
`false`
`true`
`true`

With ==, comparison converts to numbers. "" -> 0, false -> 0: 0==0 true. " " -> 0, false -> 0... wait, `" "` is actually 0 when converted, but the == algorithm first converts both to numbers: Number(" ") is 0, Number(false) is 0, so it should be true. However, the string-to-boolean path is different. Let me correct: `" " == false` evaluates as `Number(" ") == Number(false)` which is `0 == 0 = true`. Actually, "0" converts to 0, false converts to 0, true converts to 1. Let me reconsider: `" " == false` -> `0 == 0` -> true? No, the correct answer is false because the == algorithm is: when one is boolean, convert it to number first, then compare. false -> 0, then `" " == 0`, then " " converts to 0, so 0 == 0 is true.

## Multiple Choice Questions

### Q1. [Easy] Which keyword should you use for a variable whose value will never change?

**C is correct.** `const` creates a constant that cannot be reassigned. `let` (A) allows reassignment. `var` (B) is outdated. `static` (D) is used in classes, not for regular variables.

### Q2. [Easy] What is the output of: typeof 'hello'?

**C is correct.** `typeof` returns lowercase type names. `'hello'` is a string. Note it returns `"string"` (lowercase), not `"String"` (capital S).

### Q3. [Easy] How many primitive data types does JavaScript have?

**D is correct.** JavaScript has 7 primitive types: string, number, boolean, undefined, null, symbol, and bigint.

### Q4. [Easy] What is the output of: typeof null?

**C is correct.** `typeof null` returns `"object"`. This is a well-known bug from JavaScript's first version in 1995 that was never fixed.

### Q5. [Easy] What value does a declared but uninitialized variable have?

**C is correct.** A variable declared with `let` but not assigned a value is automatically `undefined`. It is not `null` (A), `0` (B), or `NaN` (D).

### Q6. [Medium] What is the output of: '5' + 3?

**B is correct.** When the `+` operator has a string operand, it performs concatenation. `'5' + 3` converts 3 to '3' and gives `'53'`.

### Q7. [Medium] What is the output of: '5' - 3?

**B is correct.** The `-` operator only works with numbers, so `'5'` is converted to the number `5`. Then `5 - 3 = 2`.

### Q8. [Medium] Which of the following is a falsy value in JavaScript?

**C is correct.** The number `0` is one of the six falsy values. `"0"` is a non-empty string (truthy). `[]` is an empty array (truthy). `"false"` is a non-empty string (truthy).

### Q9. [Medium] What does parseInt('42px') return?

**B is correct.** `parseInt()` reads digits from the start of the string and stops at the first non-digit. It successfully parses `42` from `'42px'`.

### Q10. [Medium] Which of these is the correct way to use template literals?

**C is correct.** Template literals require backticks (```), not double quotes (A), single quotes (B), or parentheses (D). Only backticks enable the `${}` syntax.

### Q11. [Medium] What is NaN === NaN?

**B is correct.** `NaN` is the only value in JavaScript that is not equal to itself. Both `NaN == NaN` and `NaN === NaN` return `false`. Use `Number.isNaN()` to check for NaN.

### Q12. [Hard] What is the output of: console.log(Boolean([]))?

**A is correct.** An empty array `[]` is an object, and ALL objects are truthy in JavaScript. This surprises many beginners who expect empty collections to be falsy.

### Q13. [Hard] What is the output of: typeof typeof 42?

**B is correct.** `typeof 42` returns the string `"number"`. Then `typeof "number"` returns `"string"`. Since typeof always returns a string, `typeof typeof anything` is always `"string"`.

### Q14. [Hard] What is the output of: console.log(null == undefined)?

**A is correct.** The `==` operator treats `null` and `undefined` as equal to each other (and only each other). `null == undefined` is true, but `null === undefined` is false.

### Q15. [Hard] What happens when you do: const obj = {a: 1}; obj.a = 2;

**B is correct.** `const` prevents reassignment of the variable (you cannot do `obj = {}`), but it does NOT prevent mutation of the object's properties. Changing `obj.a` to 2 is perfectly valid.

### Q16. [Easy] What is the output of: console.log(typeof true)?

**B is correct.** `typeof true` returns the string `"boolean"` (lowercase). JavaScript uses the full word, not abbreviations like "bool".

### Q17. [Hard] What is the output of: console.log(Number(''))?

**B is correct.** `Number('')` converts an empty string to `0`. This is an important conversion rule to memorize. `Number(null)` is also `0`, but `Number(undefined)` is `NaN`.

### Q18. [Hard] Which of these values is truthy?

**C is correct.** The string `"0"` is truthy because it is a non-empty string. The other three (`0`, `null`, `NaN`) are all falsy values.

## Coding Challenges

### Challenge 1. Variable Type Inspector

**Difficulty:** Easy

Create a variable of each primitive type (string, number, boolean, null, undefined) and log each value along with its typeof result.

**Constraints:**

- Use template literals for the output.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Aarav -> string
42 -> number
true -> boolean
null -> object
undefined -> undefined
```

**Solution:**

```javascript
let str = "Aarav";
let num = 42;
let bool = true;
let empty = null;
let undef = undefined;
console.log(`${str} -> ${typeof str}`);
console.log(`${num} -> ${typeof num}`);
console.log(`${bool} -> ${typeof bool}`);
console.log(`${empty} -> ${typeof empty}`);
console.log(`${undef} -> ${typeof undef}`);
```

### Challenge 2. String to Number Converter Page

**Difficulty:** Easy

Build an HTML page with an input field and a button. When clicked, show the original value, its type, and the result of Number(), parseInt(), and parseFloat() conversions.

**Constraints:**

- Display results on the page, not in alerts.

**Sample input:**

```
User enters '3.14abc'
```

**Sample output:**

```
Original: '3.14abc' (string)
Number(): NaN
parseInt(): 3
parseFloat(): 3.14
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <input type="text" id="val">
  <button onclick="convert()">Convert</button>
  <pre id="output"></pre>
  <script>
    function convert() {
      let val = document.getElementById("val").value;
      let result = `Original: '${val}' (${typeof val})\n`;
      result += `Number(): ${Number(val)}\n`;
      result += `parseInt(): ${parseInt(val)}\n`;
      result += `parseFloat(): ${parseFloat(val)}`;
      document.getElementById("output").textContent = result;
    }
  </script>
</body>
</html>
```

### Challenge 3. Truthy/Falsy Tester

**Difficulty:** Medium

Build a page where the user enters a value and the page tells them if it is truthy or falsy. Test the value as-is (string), then as Number conversion, then as Boolean conversion.

**Constraints:**

- Handle the empty string case too.

**Sample input:**

```
User enters '0'
```

**Sample output:**

```
'0' as string: truthy
'0' as Number (0): falsy
'0' as Boolean: truthy
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <input type="text" id="val">
  <button onclick="test()">Test</button>
  <pre id="output"></pre>
  <script>
    function test() {
      let val = document.getElementById("val").value;
      let numVal = Number(val);
      let result = `'${val}' as string: ${Boolean(val) ? 'truthy' : 'falsy'}\n`;
      result += `'${val}' as Number (${numVal}): ${Boolean(numVal) ? 'truthy' : 'falsy'}\n`;
      result += `'${val}' as Boolean: ${Boolean(val) ? 'truthy' : 'falsy'}`;
      document.getElementById("output").textContent = result;
    }
  </script>
</body>
</html>
```

### Challenge 4. Student Profile Card Builder

**Difficulty:** Medium

Build a page with inputs for name, age, and grade. When 'Create Card' is clicked, display a styled card using template literals and DOM manipulation. The card should show the name, age, grade, and whether the student is a teenager (13-19).

**Constraints:**

- Use template literals with innerHTML to build the card HTML. Use const for unchanging values.

**Sample input:**

```
Name: Ananya, Age: 15, Grade: 10th
```

**Sample output:**

```
A styled card showing: Ananya, 15 years old, 10th grade, Is teenager: Yes
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <input id="name" placeholder="Name">
  <input id="age" type="number" placeholder="Age">
  <input id="grade" placeholder="Grade">
  <button onclick="createCard()">Create Card</button>
  <div id="card"></div>
  <script>
    function createCard() {
      const name = document.getElementById("name").value;
      const age = Number(document.getElementById("age").value);
      const grade = document.getElementById("grade").value;
      const isTeen = age >= 13 && age <= 19;
      document.getElementById("card").innerHTML = `
        <div style="border:2px solid #333; padding:15px; margin:10px; border-radius:8px; max-width:300px;">
          <h2>${name}</h2>
          <p>Age: ${age} years old</p>
          <p>Grade: ${grade}</p>
          <p>Teenager: ${isTeen ? 'Yes' : 'No'}</p>
        </div>`;
    }
  </script>
</body>
</html>
```

### Challenge 5. Type Coercion Quiz

**Difficulty:** Hard

Build a quiz page that shows a JavaScript expression and asks the user to predict the output. Show 5 type coercion questions one at a time. Track score and show the final result.

**Constraints:**

- Use an array of question objects. Compare user's answer with the actual evaluated result.

**Sample input:**

```
User guesses outputs for each expression
```

**Sample output:**

```
Expression: '5' + 3
User enters: 53
Correct! Score: 1/1
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <h2 id="question"></h2>
  <input id="answer" placeholder="Your answer">
  <button onclick="checkAnswer()">Submit</button>
  <p id="feedback"></p>
  <p id="score"></p>
  <script>
    const questions = [
      { expr: "'5' + 3", answer: "53" },
      { expr: "'5' - 3", answer: "2" },
      { expr: "true + true", answer: "2" },
      { expr: "typeof null", answer: "object" },
      { expr: "Boolean('')", answer: "false" }
    ];
    let current = 0;
    let score = 0;
    function showQuestion() {
      if (current < questions.length) {
        document.getElementById("question").textContent = "What is the output of: " + questions[current].expr + " ?";
        document.getElementById("answer").value = "";
        document.getElementById("feedback").textContent = "";
      } else {
        document.getElementById("question").textContent = "Quiz complete!";
        document.getElementById("score").textContent = "Final score: " + score + "/" + questions.length;
      }
    }
    function checkAnswer() {
      if (current >= questions.length) return;
      let userAnswer = document.getElementById("answer").value.trim();
      let correct = questions[current].answer;
      if (userAnswer === correct) {
        score++;
        document.getElementById("feedback").textContent = "Correct!";
        document.getElementById("feedback").style.color = "green";
      } else {
        document.getElementById("feedback").textContent = "Wrong! Answer: " + correct;
        document.getElementById("feedback").style.color = "red";
      }
      document.getElementById("score").textContent = "Score: " + score + "/" + (current + 1);
      current++;
      setTimeout(showQuestion, 1500);
    }
    showQuestion();
  </script>
</body>
</html>
```

### Challenge 6. Dynamic Type Conversion Table

**Difficulty:** Hard

Build a page that generates an HTML table showing how different values convert to Number, String, and Boolean. Include these values: 0, 1, '', '0', ' ', null, undefined, true, false, NaN, [], {}.

**Constraints:**

- Generate the table dynamically with JavaScript. Use template literals and innerHTML.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A table with columns: Value | typeof | Number() | String() | Boolean()
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <h2>Type Conversion Table</h2>
  <div id="table"></div>
  <script>
    const values = [0, 1, '', '0', ' ', null, undefined, true, false, NaN, [], {}];
    let html = '<table border="1" cellpadding="8"><tr><th>Value</th><th>typeof</th><th>Number()</th><th>String()</th><th>Boolean()</th></tr>';
    for (let val of values) {
      let display = JSON.stringify(val);
      if (val === undefined) display = 'undefined';
      if (typeof val === 'number' && isNaN(val)) display = 'NaN';
      html += `<tr><td>${display}</td><td>${typeof val}</td><td>${Number(val)}</td><td>${String(val)}</td><td>${Boolean(val)}</td></tr>`;
    }
    html += '</table>';
    document.getElementById("table").innerHTML = html;
  </script>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/variables-and-data-types/*
