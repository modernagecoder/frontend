---
title: "Practice: Introduction to JavaScript"
description: "55 practice problems for Introduction to JavaScript in JavaScript"
slug: introduction-to-javascript-practice
canonical: https://learn.modernagecoders.com/resources/javascript/introduction-to-javascript/practice/
category: "JavaScript"
---
# Practice: Introduction to JavaScript

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
console.log(typeof 42);
```

*Hint:* typeof returns the type of a value as a string.

**Answer:** `number`

The `typeof` operator returns a string representing the type. `42` is a number, so `typeof 42` returns the string `"number"`. This is printed to the console.

### Q2. [Easy] What is the output?

```
console.log(typeof "hello");
```

*Hint:* Anything inside quotes is a string.

**Answer:** `string`

`"hello"` is a text value enclosed in quotes, which makes it a string. `typeof "hello"` returns `"string"`.

### Q3. [Easy] What is the output?

```
console.log(10 + 5);
console.log("10" + "5");
```

*Hint:* The + operator behaves differently with numbers and strings.

**Answer:** `15`
`105`

When both values are numbers, `+` performs addition: `10 + 5 = 15`. When both values are strings (in quotes), `+` performs **concatenation** (joins them): `"10" + "5" = "105"`. This is a critical JavaScript concept.

### Q4. [Easy] What is the output?

```
console.log(typeof true);
console.log(typeof false);
```

*Hint:* true and false are special values in JavaScript.

**Answer:** `boolean`
`boolean`

`true` and `false` are the two Boolean values in JavaScript. `typeof true` and `typeof false` both return `"boolean"`.

### Q5. [Easy] What is the output?

```
console.log(typeof undefined);
console.log(typeof null);
```

*Hint:* One of these has a famous quirk that is a known bug in JavaScript.

**Answer:** `undefined`
`object`

`typeof undefined` returns `"undefined"` as expected. But `typeof null` returns `"object"`, which is a well-known bug in JavaScript from 1995. It was never fixed because changing it would break existing websites. Remember this quirk.

### Q6. [Easy] What is the output?

```
console.log("Aarav" + " is " + 15 + " years old");
```

*Hint:* When you add a string and a number, the number becomes a string.

**Answer:** `Aarav is 15 years old`

JavaScript converts the number `15` to the string `"15"` when it is combined with strings using `+`. The entire expression joins all parts into one string: `"Aarav is 15 years old"`.

### Q7. [Medium] What is the output?

```
console.log(5 + 3 + " cats");
console.log("cats " + 5 + 3);
```

*Hint:* JavaScript evaluates left to right. The + operator switches from addition to concatenation when it encounters a string.

**Answer:** `8 cats`
`cats 53`

In the first line, `5 + 3` is evaluated first (both numbers, so addition gives 8), then `8 + " cats"` becomes string concatenation: `"8 cats"`. In the second line, `"cats " + 5` is string + number, so 5 becomes `"5"` giving `"cats 5"`, then `"cats 5" + 3` gives `"cats 53"`. The order matters!

### Q8. [Medium] What is the output?

```
let x;
console.log(x);
console.log(typeof x);
```

*Hint:* What happens when you declare a variable without assigning a value?

**Answer:** `undefined`
`undefined`

When you declare a variable with `let` but do not assign a value, it is automatically set to `undefined`. `console.log(x)` prints `undefined`. `typeof x` returns the string `"undefined"`.

### Q9. [Easy] Write a complete HTML page with a button that shows an alert saying 'Hello, World!' when clicked.

*Hint:* Use the onclick attribute on the button and the alert() function.

**Answer:** ```
<!DOCTYPE html>

  Click Me

```

The `onclick` attribute runs JavaScript code when the button is clicked. `alert('Hello, World!')` shows a popup with the message. Note the use of single quotes inside the double quotes of the attribute value to avoid conflicts.

### Q10. [Medium] What happens when you run this code?

```
console.log(typeof console.log);
```

*Hint:* console.log is itself a value. What kind of value is it?

**Answer:** `function`

`console.log` without the parentheses refers to the function itself, not its return value. `typeof console.log` returns `"function"`. If you had written `typeof console.log()`, the `console.log()` would execute first (returning `undefined`), and then `typeof undefined` would give `"undefined"`.

### Q11. [Easy] Rohan wrote this code but gets an error. Find and fix the bug:

```

  console.log(Hello World);

```

*Hint:* Text values must be wrapped in something.

**Answer:** ```

  console.log("Hello World");

```

The string `Hello World` is missing quotes. Without quotes, JavaScript thinks `Hello` is a variable name and throws a `ReferenceError`. Strings must be in double quotes `""`, single quotes `''`, or backticks ````.

### Q12. [Medium] Ananya wrote this code. The page loads but nothing happens when she clicks the button. Find the bug:

```
<!DOCTYPE html>

  
    function show() {
      document.getElementById("output").textContent = "Clicked!";
    }
  

  Waiting...

  Click

```

*Hint:* Think about when the script runs vs when the button is clicked.

**Answer:** Actually, this code will work! The function is defined in the head, but it does not run until the button is clicked. By the time the user clicks, the `` element already exists. The bug is not here. However, the best practice is to move the script before ``. If the code inside the script tag tried to access the DOM directly (not inside a function), THAT would fail.

This is a trick question. Functions defined in the `` are stored in memory but do not execute until called. When the user clicks the button, the function runs and finds the `` element successfully. The real problem only occurs when you write code that accesses DOM elements directly (not inside a function) in the head section.

### Q13. [Medium] What is the output?

```
console.log("5" - 3);
console.log("5" + 3);
```

*Hint:* The - operator does not concatenate strings, but the + operator does.

**Answer:** `2`
`53`

The `-` operator only works with numbers, so JavaScript converts `"5"` to the number `5` and performs subtraction: `5 - 3 = 2`. The `+` operator can do both addition and string concatenation. When one operand is a string, it chooses concatenation: `"5" + 3 = "53"`. This inconsistency is one of JavaScript's most famous quirks.

### Q14. [Hard] What is the output?

```
console.log(typeof typeof 42);
```

*Hint:* Work from the inside out. What does the inner typeof return? Then what is the typeof of that?

**Answer:** `string`

The inner `typeof 42` returns the string `"number"`. Then the outer `typeof "number"` returns `"string"` because `"number"` is a string. `typeof` always returns a string, so `typeof typeof anything` will always be `"string"`.

### Q15. [Medium] Write JavaScript code that declares a variable `name` with value `"Vikram"` and a variable `age` with value `16`, then logs: `Vikram is 16 years old`

*Hint:* You can combine strings and variables with the + operator.

**Answer:** ```
let name = "Vikram";
let age = 16;
console.log(name + " is " + age + " years old");
```

Declare the variables with `let`, assign values, and use `+` to concatenate. JavaScript automatically converts the number `16` to a string when combined with other strings.

### Q16. [Hard] What is the output?

```
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log("6" / "2");
```

*Hint:* The + operator with strings concatenates. The -, *, / operators always convert to numbers. true = 1, false = 0.

**Answer:** `10`
`-1`
`1`
`3`

Line 1: `"" + 1` gives `"1"` (string concat), then `"1" + 0` gives `"10"`. Line 2: `"" - 1` converts empty string to 0, gives `-1`, then `-1 + 0 = -1`. Line 3: `true` is 1, `false` is 0, so `1 + 0 = 1`. Line 4: `/` converts both to numbers: `6 / 2 = 3`.

### Q17. [Medium] Priya wrote this code to change a heading's text, but nothing changes. Find the bug:

```
Old Title

  document.getElementById("Title").textContent = "New Title";

```

*Hint:* JavaScript is case-sensitive when matching IDs.

**Answer:** ```
document.getElementById("title").textContent = "New Title";
```

The id in the HTML is `"title"` (lowercase t), but the JavaScript looks for `"Title"` (uppercase T). Since IDs are case-sensitive, `getElementById("Title")` returns `null`. The fix is to match the exact case: `"title"`.

### Q18. [Hard] What is the output?

```
console.log(1 + "2" + 3 + 4);
console.log(1 + 2 + "3" + 4);
```

*Hint:* JavaScript evaluates left to right. Once a string appears, everything after becomes concatenation.

**Answer:** `1234`
`334`

Line 1: `1 + "2"` gives `"12"` (number + string = string), then `"12" + 3` gives `"123"`, then `"123" + 4` gives `"1234"`. Line 2: `1 + 2` gives `3` (both numbers), then `3 + "3"` gives `"33"`, then `"33" + 4` gives `"334"`. The position of the string changes everything.

### Q19. [Hard] Write a complete HTML page with an input field and a button. When the button is clicked, read the number from the input and display whether it is positive, negative, or zero in a paragraph below.

*Hint:* Use Number() or parseInt() to convert the input value to a number. Use if-else to check the condition.

**Answer:** ```
<!DOCTYPE html>

  
  Check
  

  
    function check() {
      let num = Number(document.getElementById("numInput").value);
      let result;
      if (num > 0) {
        result = num + " is positive";
      } else if (num < 0) {
        result = num + " is negative";
      } else {
        result = "The number is zero";
      }
      document.getElementById("result").textContent = result;
    }
  

```

The input's `.value` property always returns a string. `Number()` converts it to a number. Then `if-else if-else` checks three conditions. The result is displayed in the paragraph using `.textContent`.

### Q20. [Easy] What is the output?

```
console.log(Math.max(10, 20, 5));
console.log(Math.min(10, 20, 5));
```

*Hint:* Math.max returns the largest number, Math.min returns the smallest.

**Answer:** `20`
`5`

`Math.max()` takes any number of arguments and returns the largest one. `Math.max(10, 20, 5)` returns `20`. `Math.min()` returns the smallest: `Math.min(10, 20, 5)` returns `5`.

## Mixed Questions

### Q1. [Easy] What is the output?

```
console.log("Hello" + " " + "World");
```

*Hint:* The + operator joins strings together.

**Answer:** `Hello World`

The `+` operator when used with strings performs concatenation (joining). `"Hello" + " " + "World"` joins all three strings into `"Hello World"`.

### Q2. [Easy] What is the output?

```
console.log(10 * 2 + 5);
console.log(10 * (2 + 5));
```

*Hint:* Multiplication happens before addition, unless you use parentheses.

**Answer:** `25`
`70`

In the first line, `10 * 2 = 20` is done first (multiplication before addition), then `20 + 5 = 25`. In the second line, parentheses force `2 + 5 = 7` first, then `10 * 7 = 70`.

### Q3. [Easy] Write JavaScript code to calculate the area of a rectangle with width 12 and height 8. Log the result as: 'Area: 96'

*Hint:* Area = width * height.

**Answer:** ```
let width = 12;
let height = 8;
let area = width * height;
console.log("Area: " + area);
```

Output: Area: 96

Declare the width and height, multiply them to get the area, and concatenate the result with the label string. `12 * 8 = 96`.

### Q4. [Medium] What is the output?

```
let a = "5";
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
```

*Hint:* Only the + operator concatenates strings. Other operators convert strings to numbers.

**Answer:** `53`
`2`
`15`

`"5" + 3`: `+` with a string does concatenation, giving `"53"`. `"5" - 3`: `-` only works with numbers, so `"5"` is converted to `5`, giving `2`. `"5" * 3`: same conversion logic, giving `15`.

### Q5. [Medium] What is the output?

```
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean(" "));
```

*Hint:* 0 and empty string are falsy. But what about the string '0' and a string with just a space?

**Answer:** `false`
`false`
`true`
`true`

`0` is falsy, so `Boolean(0)` is `false`. Empty string `""` is falsy: `false`. But the string `"0"` is NOT empty — it has one character — so it is truthy: `true`. A space `" "` is also a non-empty string, so truthy: `true`. This catches many beginners.

### Q6. [Medium] Write a complete HTML page with a text input and a button. When the button is clicked, convert the text to uppercase and display it in a paragraph below the button.

*Hint:* Use .value to read the input and .toUpperCase() to convert the string.

**Answer:** ```
<!DOCTYPE html>

  
  Convert
  

  
    function convert() {
      let text = document.getElementById("textInput").value;
      document.getElementById("output").textContent = text.toUpperCase();
    }
  

```

The `.value` property reads the text from the input field. The `.toUpperCase()` string method converts all characters to uppercase. The result is displayed in the paragraph.

### Q7. [Hard] What is the output?

```
console.log([] + []);
console.log([] + {});
console.log({} + []);
```

*Hint:* Arrays and objects are converted to strings when used with +. An empty array becomes an empty string.

**Answer:** `` (empty string)
`[object Object]`
`[object Object]`

When JavaScript uses `+` with non-primitives, it converts them to strings. An empty array `[]` becomes `""`. So `[] + []` is `"" + "" = ""`. An empty object `{}` becomes `"[object Object]"`. So `[] + {}` is `"" + "[object Object]" = "[object Object]"`. In a console, `{} + []` may show `0` because `{}` is interpreted as an empty block, but as an expression it gives `"[object Object]"`.

### Q8. [Medium] Neha wrote this counter but the number keeps showing as text concatenation instead of addition (clicking +1 shows '01', '011', '0111'). Find and fix the bug:

```
0

+1

  function add() {
    let current = document.getElementById("count").textContent;
    document.getElementById("count").textContent = current + 1;
  }

```

*Hint:* What type does .textContent return? How can you convert it to a number?

**Answer:** ```
function add() {
  let current = Number(document.getElementById("count").textContent);
  document.getElementById("count").textContent = current + 1;
}
```

`.textContent` always returns a **string**, even if the text looks like a number. So `current` is `"0"` (a string), and `"0" + 1` gives `"01"` (string concatenation). Wrapping it in `Number()` converts it to the number `0`, so `0 + 1` gives `1` (proper addition).

### Q9. [Hard] What is the output?

```
console.log(typeof NaN);
console.log(NaN === NaN);
console.log(isNaN("hello"));
```

*Hint:* NaN stands for Not a Number, but what type does JavaScript think it is?

**Answer:** `number`
`false`
`true`

Despite its name, `typeof NaN` is `"number"`. This is because NaN is technically a special IEEE 754 floating-point value. `NaN === NaN` is `false` — NaN is the only value in JavaScript that is not equal to itself. `isNaN("hello")` tries to convert `"hello"` to a number (which gives NaN), then checks if it is NaN — result is `true`.

### Q10. [Medium] Write JavaScript code that uses typeof to check and log the types of these values: 42, 'Rohan', true, null, undefined, [1,2,3].

*Hint:* Call typeof on each value and log the result.

**Answer:** ```
console.log(typeof 42);          // number
console.log(typeof 'Rohan');     // string
console.log(typeof true);        // boolean
console.log(typeof null);        // object
console.log(typeof undefined);   // undefined
console.log(typeof [1, 2, 3]);   // object
```

Most results are intuitive except two: `typeof null` returns `"object"` (famous bug) and `typeof [1,2,3]` also returns `"object"` because arrays are objects in JavaScript. To check if something is an array, use `Array.isArray()`.

### Q11. [Hard] What is the output?

```
console.log("b" + "a" + + "a" + "a");
```

*Hint:* Pay attention to the + + part. The second + is a unary plus operator trying to convert 'a' to a number.

**Answer:** `baNaNa`

Breaking it down: `"b" + "a"` gives `"ba"`. Then `+ "a"` is the unary plus trying to convert `"a"` to a number, which gives `NaN`. Then `"ba" + NaN` gives `"baNaN"`. Then `"baNaN" + "a"` gives `"baNaNa"`. This is a famous JavaScript trick that spells out "baNaNa".

### Q12. [Hard] Write a complete HTML page with two number inputs and four buttons (+, -, *, /). When a button is clicked, perform the operation on the two numbers and display the result.

*Hint:* Use Number() to convert input values. Create a function for each operation or one function that takes the operator.

**Answer:** ```
<!DOCTYPE html>

  
  

  +
  -
  *
  /
  

  
    function calc(op) {
      let a = Number(document.getElementById("num1").value);
      let b = Number(document.getElementById("num2").value);
      let result;
      if (op === '+') result = a + b;
      else if (op === '-') result = a - b;
      else if (op === '*') result = a * b;
      else if (op === '/') result = a / b;
      document.getElementById("result").textContent = "Result: " + result;
    }
  

```

A single `calc()` function takes the operator as a parameter. It reads both input values, converts them to numbers, performs the correct operation using if-else, and displays the result.

## Multiple Choice Questions

### Q1. [Easy] What does console.log() do in JavaScript?

**B is correct.** `console.log()` prints output to the browser's Developer Console (accessible via F12). It does NOT display anything on the web page (A) — for that you would use `textContent` or `innerHTML`. It does not show a popup (C) — that is `alert()`. It does not write files (D).

### Q2. [Easy] What is the output of: console.log(typeof 'hello')?

**C is correct.** `typeof 'hello'` returns `"string"` (lowercase). JavaScript's `typeof` returns lowercase type names. `String` with a capital S (D) is the String constructor, not the typeof result.

### Q3. [Easy] Which of these correctly places JavaScript in an HTML file?

**C is correct.** JavaScript is placed inside `` tags in HTML. There are no `` (A) or `` (B) tags. The `` tag (D) is for displaying code as text, not executing it.

### Q4. [Easy] What is the output of: console.log(10 + '5')?

**B is correct.** When the `+` operator is used with a number and a string, JavaScript converts the number to a string and performs concatenation. `10 + '5'` becomes `'10' + '5' = '105'`. It does not perform addition (A).

### Q5. [Easy] What does typeof null return in JavaScript?

**C is correct.** `typeof null` returns `"object"`. This is a well-known bug from the first version of JavaScript in 1995. Logically it should return `"null"`, but the bug was never fixed to avoid breaking existing code.

### Q6. [Easy] Which method finds an HTML element by its id?

**B is correct.** `document.getElementById()` is the standard method to find an HTML element by its `id` attribute. The other options are not valid JavaScript methods.

### Q7. [Medium] What is the output of: console.log('5' - 2)?

**B is correct.** The `-` operator does not do string concatenation — it only works with numbers. JavaScript converts `'5'` to the number `5` and performs subtraction: `5 - 2 = 3`. This is different from `+` which would give `'52'`.

### Q8. [Medium] Where should you place the  tag for best practice?

**C is correct.** Placing the script just before `` ensures all HTML elements have been created before the JavaScript runs. Placing it in the head (B) can cause errors if the script tries to access elements that do not exist yet. After `` (D) is invalid.

### Q9. [Medium] What is the output of: console.log(typeof typeof 42)?

**B is correct.** The inner `typeof 42` returns the string `"number"`. Then `typeof "number"` returns `"string"`, because `"number"` is a string value. `typeof` always returns a string.

### Q10. [Medium] What does prompt() return if the user clicks Cancel?

**C is correct.** When the user clicks Cancel on a `prompt()` dialog, the function returns `null`. If the user clicks OK without typing anything, it returns an empty string `""`. This distinction matters when processing user input.

### Q11. [Medium] What is the output of: console.log(5 + 3 + '2')?

**C is correct.** JavaScript evaluates left to right. `5 + 3 = 8` (both numbers, so addition). Then `8 + '2' = '82'` (number + string, so concatenation). The string `'2'` triggers concatenation only from that point onward.

### Q12. [Medium] Which of the following is NOT a valid way to declare a variable in JavaScript?

**D is correct.** JavaScript does not have an `int` keyword. That is from languages like C and Java. In JavaScript, you declare variables with `let`, `const`, or `var`. JavaScript variables do not have explicit types.

### Q13. [Hard] What is the output of: console.log('b' + 'a' + + 'a' + 'a')?

**B is correct.** `'b' + 'a'` gives `'ba'`. The `+ 'a'` is a unary plus on the string `'a'`, which cannot be converted to a number, so it becomes `NaN`. Then `'ba' + NaN` gives `'baNaN'`. Finally `'baNaN' + 'a'` gives `'baNaNa'`.

### Q14. [Hard] What is the output of: console.log('' == false)?

**A is correct.** The `==` operator performs type coercion. An empty string `''` is coerced to `0`, and `false` is also coerced to `0`. `0 == 0` is `true`. This is why `===` (strict equality without coercion) is recommended over `==`.

### Q15. [Hard] What is the output of: console.log(NaN === NaN)?

**B is correct.** `NaN` is the only value in JavaScript that is not equal to itself. `NaN === NaN` is `false`. To check if a value is NaN, use `Number.isNaN()` or `isNaN()`.

### Q16. [Hard] What is the output of: console.log('' + 1 + 0)?

**B is correct.** `'' + 1` is string concatenation, giving `'1'`. Then `'1' + 0` is also string concatenation, giving `'10'`. An empty string plus a number always gives a string, not a number.

### Q17. [Hard] Which statement about JavaScript is TRUE?

**C is correct.** `typeof null` returning `'object'` is a well-documented bug from 1995. JavaScript and Java are different languages (A). JavaScript also runs in Node.js outside browsers (B). JavaScript was created in 1995, not 2005 (D).

### Q18. [Easy] What is the output of: console.log(2 + 2)?

**B is correct.** Both `2` and `2` are numbers, so `+` performs addition: `2 + 2 = 4`. It would only be `"22"` (A) if one of them were a string like `'2' + 2`.

### Q19. [Medium] What does the confirm() function return when the user clicks OK?

**C is correct.** `confirm()` shows a dialog with OK and Cancel buttons. Clicking OK returns the boolean `true`. Clicking Cancel returns `false`. It does not return a number or a string.

### Q20. [Hard] What is the output of: console.log(true + true + true)?

**B is correct.** When used with the `+` operator and no strings are involved, `true` is converted to `1` and `false` to `0`. So `true + true + true = 1 + 1 + 1 = 3`.

## Coding Challenges

### Challenge 1. Personal Introduction Page

**Difficulty:** Easy

Create an HTML page that displays your name, age, and favorite subject. Use JavaScript to set all the text content using getElementById (do not hardcode the text in HTML).

**Constraints:**

- HTML should have empty paragraphs with IDs. JavaScript should fill in all the text.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Name: Aarav
Age: 15
Favorite Subject: Computer Science
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <p id="name"></p>
  <p id="age"></p>
  <p id="subject"></p>
  <script>
    document.getElementById("name").textContent = "Name: Aarav";
    document.getElementById("age").textContent = "Age: 15";
    document.getElementById("subject").textContent = "Favorite Subject: Computer Science";
  </script>
</body>
</html>
```

### Challenge 2. Background Color Picker

**Difficulty:** Easy

Create an HTML page with three buttons: Red, Green, and Blue. Clicking a button changes the page's background color to that color using JavaScript.

**Constraints:**

- Use document.body.style.backgroundColor to change the color.

**Sample input:**

```
User clicks the Green button
```

**Sample output:**

```
The entire page background turns green.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <h1>Pick a Background Color</h1>
  <button onclick="document.body.style.backgroundColor='red'">Red</button>
  <button onclick="document.body.style.backgroundColor='green'">Green</button>
  <button onclick="document.body.style.backgroundColor='blue'">Blue</button>
</body>
</html>
```

### Challenge 3. Character Counter

**Difficulty:** Medium

Create an HTML page with a text input and a paragraph below it. As the user types (use the oninput event), show the number of characters typed in real time. For example: 'Characters: 7'

**Constraints:**

- Use the oninput event and the .length property of the string.

**Sample input:**

```
User types 'Priya' in the input
```

**Sample output:**

```
Characters: 5
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <input type="text" id="textInput" oninput="countChars()" placeholder="Start typing...">
  <p id="counter">Characters: 0</p>
  <script>
    function countChars() {
      let text = document.getElementById("textInput").value;
      document.getElementById("counter").textContent = "Characters: " + text.length;
    }
  </script>
</body>
</html>
```

### Challenge 4. Temperature Converter

**Difficulty:** Medium

Build an HTML page with a number input for Celsius and a button. When clicked, convert the Celsius value to Fahrenheit using the formula F = (C * 9/5) + 32 and display the result. Also display whether it is 'Hot' (above 35C), 'Comfortable' (15-35C), or 'Cold' (below 15C).

**Constraints:**

- Use Number() to convert input. Use if-else for the temperature category.

**Sample input:**

```
User enters 40
```

**Sample output:**

```
40 C = 104 F - Hot!
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <input type="number" id="celsius" placeholder="Celsius">
  <button onclick="convert()">Convert</button>
  <p id="result"></p>
  <script>
    function convert() {
      let c = Number(document.getElementById("celsius").value);
      let f = (c * 9/5) + 32;
      let category;
      if (c > 35) category = "Hot!";
      else if (c >= 15) category = "Comfortable";
      else category = "Cold!";
      document.getElementById("result").textContent = c + " C = " + f + " F - " + category;
    }
  </script>
</body>
</html>
```

### Challenge 5. Show/Hide Toggle

**Difficulty:** Medium

Create an HTML page with a paragraph of text and a button that says 'Hide'. When clicked, the paragraph disappears and the button text changes to 'Show'. Clicking again makes the paragraph reappear and the button says 'Hide'.

**Constraints:**

- Use style.display = 'none' and style.display = 'block' to toggle visibility.

**Sample input:**

```
User clicks the button
```

**Sample output:**

```
The paragraph toggles between visible and hidden.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <p id="text">This paragraph can be toggled. Try clicking the button below!</p>
  <button id="btn" onclick="toggle()">Hide</button>
  <script>
    function toggle() {
      let text = document.getElementById("text");
      let btn = document.getElementById("btn");
      if (text.style.display === "none") {
        text.style.display = "block";
        btn.textContent = "Hide";
      } else {
        text.style.display = "none";
        btn.textContent = "Show";
      }
    }
  </script>
</body>
</html>
```

### Challenge 6. Type Checker Tool

**Difficulty:** Hard

Build a page with an input field and a button. When the user enters a value and clicks the button, determine and display whether the input is: a number, the word 'true' or 'false' (boolean-like), an empty string, or just a regular string. Display the typeof the original input and the converted type.

**Constraints:**

- Input values are always strings. Use Number(), isNaN(), and conditional checks.

**Sample input:**

```
User enters '42'
```

**Sample output:**

```
You entered: '42'
typeof (raw input): string
Detected type: number
Converted value: 42
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <input type="text" id="val" placeholder="Enter any value">
  <button onclick="checkType()">Check Type</button>
  <p id="output"></p>
  <script>
    function checkType() {
      let raw = document.getElementById("val").value;
      let result = "You entered: '" + raw + "'\n";
      result += "typeof (raw input): " + typeof raw + "\n";
      if (raw === "") {
        result += "Detected type: empty string";
      } else if (raw === "true" || raw === "false") {
        result += "Detected type: boolean-like\nConverted value: " + (raw === "true");
      } else if (!isNaN(Number(raw))) {
        result += "Detected type: number\nConverted value: " + Number(raw);
      } else {
        result += "Detected type: regular string";
      }
      document.getElementById("output").textContent = result;
    }
  </script>
</body>
</html>
```

### Challenge 7. Build a Simple Quiz Question

**Difficulty:** Hard

Create a page with a question: 'What is typeof null in JavaScript?' with four clickable buttons (A: null, B: undefined, C: object, D: boolean). When the user clicks the correct answer (C), show 'Correct!' in green. For wrong answers, show 'Wrong! The answer is C: object' in red.

**Constraints:**

- Use style.color to change text color. Use if-else to check the answer.

**Sample input:**

```
User clicks option C
```

**Sample output:**

```
Correct! (displayed in green)
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <h2>What is typeof null in JavaScript?</h2>
  <button onclick="check('A')">A: null</button>
  <button onclick="check('B')">B: undefined</button>
  <button onclick="check('C')">C: object</button>
  <button onclick="check('D')">D: boolean</button>
  <p id="feedback"></p>
  <script>
    function check(answer) {
      let fb = document.getElementById("feedback");
      if (answer === "C") {
        fb.textContent = "Correct!";
        fb.style.color = "green";
      } else {
        fb.textContent = "Wrong! The answer is C: object";
        fb.style.color = "red";
      }
    }
  </script>
</body>
</html>
```

### Challenge 8. Dynamic Greeting Based on Time

**Difficulty:** Hard

Create a page that automatically shows a greeting based on the current time: 'Good Morning' (5am-12pm), 'Good Afternoon' (12pm-5pm), 'Good Evening' (5pm-9pm), 'Good Night' (9pm-5am). Use JavaScript's Date object (new Date().getHours()) to get the current hour. Also display the current time.

**Constraints:**

- Use new Date().getHours() and if-else to determine the greeting.

**Sample input:**

```
(No input - uses current time automatically)
```

**Sample output:**

```
Good Afternoon! It is 2:30 PM.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <h1 id="greeting"></h1>
  <p id="time"></p>
  <script>
    let now = new Date();
    let hour = now.getHours();
    let greeting;
    if (hour >= 5 && hour < 12) greeting = "Good Morning!";
    else if (hour >= 12 && hour < 17) greeting = "Good Afternoon!";
    else if (hour >= 17 && hour < 21) greeting = "Good Evening!";
    else greeting = "Good Night!";
    document.getElementById("greeting").textContent = greeting;
    document.getElementById("time").textContent = "Current time: " + now.toLocaleTimeString();
  </script>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/introduction-to-javascript/*
