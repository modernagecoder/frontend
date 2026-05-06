---
title: "Practice: JavaScript in the Browser - Script Tags and Console"
description: "54 practice problems for JavaScript in the Browser - Script Tags and Console in JavaScript"
slug: javascript-in-the-browser-practice
canonical: https://learn.modernagecoders.com/resources/javascript/javascript-in-the-browser/practice
category: "JavaScript"
---
# Practice: JavaScript in the Browser - Script Tags and Console

**Total questions:** 54

## Topic-Specific Questions

### Q1. [Easy] What appears in the console when this HTML page loads?

```

  console.log("First");

Hello

  console.log("Second");

```

*Hint:* Script tags execute in order as the browser reads the page.

**Answer:** `First`
`Second`

Script tags execute in document order. The browser reads the first script and logs `"First"`. Then it creates the paragraph. Then it reads the second script and logs `"Second"`. Both messages appear in the console, in order.

### Q2. [Easy] What is the output?

```
console.log("A");
console.log("B");
console.log("C");
```

*Hint:* console.log statements execute in order.

**Answer:** `A`
`B`
`C`

Each `console.log()` statement executes in sequence, printing each value on a new line in the console.

### Q3. [Easy] What is the output?

```
console.log(2, 4, 6, 8);
```

*Hint:* console.log can take multiple arguments separated by commas.

**Answer:** `2 4 6 8`

`console.log()` accepts multiple arguments separated by commas. It prints them all on the same line, separated by spaces. This is different from using `+` which would add the numbers.

### Q4. [Easy] What is the output?

```
console.log("10" + 20);
console.log(10 + 20);
```

*Hint:* The first line has a string, the second has two numbers.

**Answer:** `1020`
`30`

In the first line, `"10"` is a string, so `+` performs concatenation: `"10" + 20 = "1020"`. In the second line, both are numbers, so `+` performs addition: `10 + 20 = 30`.

### Q5. [Medium] What happens when this page loads?

```
<!DOCTYPE html>

  
    document.getElementById("msg").textContent = "Hello!";
  

  Original

```

*Hint:* The script runs in the head, before the body elements exist.

**Answer:** A `TypeError` appears in the console: `Cannot set properties of null`. The paragraph shows "Original".

The script in the `` runs before the `` is processed. At that point, `` does not exist yet, so `getElementById("msg")` returns `null`. Trying to set `.textContent` on `null` causes a TypeError. The fix is to move the script before `` or add the `defer` attribute.

### Q6. [Medium] What is the output?

```
let x = prompt("Enter a number:");
console.log(typeof x);
```

Assume the user types 42 and clicks OK.

*Hint:* What type does prompt() always return?

**Answer:** `string`

`prompt()` always returns a **string**, regardless of what the user types. Even if the user types `42`, the returned value is `"42"` (a string). `typeof "42"` is `"string"`.

### Q7. [Medium] What is the output?

```
let result = confirm("Are you sure?");
console.log(result);
console.log(typeof result);
```

Assume the user clicks Cancel.

*Hint:* confirm() returns a boolean value.

**Answer:** `false`
`boolean`

When the user clicks Cancel on a `confirm()` dialog, it returns `false`. Clicking OK returns `true`. The return value is always a boolean, so `typeof result` is `"boolean"`.

### Q8. [Medium] What is the output?

```
let name = prompt("Enter name:");
console.log(name);
console.log(typeof name);
```

Assume the user clicks Cancel without typing anything.

*Hint:* What does prompt() return when the user cancels?

**Answer:** `null`
`object`

When the user clicks Cancel, `prompt()` returns `null`. And `typeof null` is `"object"` (the famous JavaScript bug). If the user had clicked OK without typing anything, the result would be `""` (empty string).

### Q9. [Easy] Aarav wrote this but nothing runs. Find the bug:

```

  console.log("Hello!");

```

*Hint:* What happens when a script tag has both src and inline code?

**Answer:** The inline `console.log("Hello!")` is ignored because the script tag has a `src` attribute. When `src` is present, inline code is not executed.

A script tag with `src` tells the browser to run the external file. Any code between the tags is ignored. To run both, use two separate script tags: one for the external file and one for the inline code.

### Q10. [Hard] What is the output?

```

  var a = 10;

  console.log(a);
  var b = 20;

  console.log(a + b);

```

*Hint:* All script tags on a page share the same global scope.

**Answer:** `10`
`30`

Variables declared with `var` in any script tag are added to the global scope and accessible from any other script tag. Script 2 logs `a` (10 from Script 1). Script 3 logs `a + b` (10 + 20 = 30). All scripts share the same variable space.

### Q11. [Easy] Write an HTML page that uses console.log to print your name, console.warn to print a warning, and console.error to print an error message.

*Hint:* Use three different console methods.

**Answer:** ```
<!DOCTYPE html>

  
    console.log("My name is Rohan");
    console.warn("This is a warning message");
    console.error("This is an error message");
  

```

Each console method displays messages differently in the DevTools: `log` shows normal text, `warn` shows yellow-highlighted text with a warning icon, and `error` shows red-highlighted text with an error icon and stack trace.

### Q12. [Hard] What is the output?

```
console.log(1);
setTimeout(function() {
  console.log(2);
}, 0);
console.log(3);
```

*Hint:* setTimeout always runs its callback after the current code finishes, even with 0 delay.

**Answer:** `1`
`3`
`2`

Even with a delay of `0` milliseconds, `setTimeout` puts the function in a queue and runs it **after** the current code finishes. So `1` is logged first, then `3`, and only after both synchronous logs complete does the setTimeout callback run, logging `2`.

### Q13. [Medium] Priya wants to add two numbers from prompts, but gets concatenation instead of addition. Fix the bug:

```
let a = prompt("First number:");
let b = prompt("Second number:");
console.log("Sum: " + (a + b));
```

User enters 5 and 3. Output: Sum: 53

*Hint:* prompt() returns strings. How do you convert them to numbers?

**Answer:** ```
let a = Number(prompt("First number:"));
let b = Number(prompt("Second number:"));
console.log("Sum: " + (a + b));
```

Output: Sum: 8

`prompt()` returns strings, so `a` is `"5"` and `b` is `"3"`. The `+` operator concatenates strings: `"5" + "3" = "53"`. Wrapping each prompt in `Number()` converts the strings to actual numbers first.

### Q14. [Hard] What is the output?

```
console.log(typeof alert);
console.log(typeof prompt);
console.log(typeof console);
```

*Hint:* alert and prompt are functions. What about console itself?

**Answer:** `function`
`function`
`object`

`alert` and `prompt` are functions, so `typeof` returns `"function"`. `console` is an object (it contains methods like `.log()`, `.warn()`, etc.), so `typeof console` returns `"object"`.

### Q15. [Medium] Write code that asks the user for their name using prompt, then displays a greeting on the web page (not in the console) inside a paragraph with id 'greeting'.

*Hint:* Use prompt() to get the name, then .textContent to display it.

**Answer:** ```

  let name = prompt("What is your name?");
  document.getElementById("greeting").textContent = "Hello, " + name + "!";

```

`prompt()` gets the user's name as a string. Then `.textContent` sets the visible text of the paragraph element. If the user types "Neha", the paragraph shows "Hello, Neha!".

### Q16. [Easy] What is the output?

```
console.log("Hello");
// console.log("World");
console.log("JavaScript");
```

*Hint:* Lines starting with // are comments — they do not execute.

**Answer:** `Hello`
`JavaScript`

The second line is a comment (starts with `//`), so it is ignored by JavaScript. Only the first and third `console.log()` statements execute.

### Q17. [Medium] What is the output?

```
/* 
console.log("A");
console.log("B");
*/
console.log("C");
```

*Hint:* /* and */ create multi-line comments.

**Answer:** `C`

Everything between `/*` and `*/` is a multi-line comment and is not executed. Only the last `console.log("C")` runs.

### Q18. [Hard] Vikram wrote this code. The page loads, the button appears, but clicking it does nothing. No errors in the console either. Find the bug:

```
<!DOCTYPE html>

  Click Me
  

  
    function showMessage() {
      document.getElementById("msg").textContent = "Button clicked!";
    }
  

```

*Hint:* Look at the onclick attribute. How do you call a function?

**Answer:** The `onclick` should be `onclick="showMessage()"` with parentheses. Without `()`, the function is referenced but never called.

Writing `onclick="showMessage"` just evaluates the function name (which does nothing). To actually **call** the function, you need the parentheses: `onclick="showMessage()"`. This is a subtle but common mistake.

### Q19. [Hard] What is the output in the console?

```
console.log("Start");
alert("Pause!");
console.log("End");
```

*Hint:* alert() blocks code execution until the user clicks OK.

**Answer:** `Start` appears in the console. Then the alert popup shows. After the user clicks OK, `End` appears in the console.

`alert()` is **blocking** — it pauses all JavaScript execution until the user clicks OK. So `"Start"` is logged, then the alert appears and everything freezes. Only after clicking OK does `"End"` get logged. This blocking behavior is why alert should not be used in production websites.

### Q20. [Hard] Write an HTML page with a button. When clicked, use console.time and console.timeEnd to measure how long it takes to concatenate the string 'x' to itself 100000 times, and log the final string length.

*Hint:* Use console.time('label') before, console.timeEnd('label') after, and a for loop.

**Answer:** ```
Run Test

  function measure() {
    console.time("concat");
    let str = "";
    for (let i = 0; i < 100000; i++) {
      str += "x";
    }
    console.timeEnd("concat");
    console.log("String length: " + str.length);
  }

```

`console.time("concat")` starts a timer with the label "concat". After the loop, `console.timeEnd("concat")` stops the timer and prints the elapsed time. The label must match exactly. This is useful for measuring performance.

## Mixed Questions

### Q1. [Easy] What is the output?

```
console.log("Hello" + " " + "Aarav");
```

*Hint:* The + operator joins strings.

**Answer:** `Hello Aarav`

Three strings are concatenated: `"Hello"` + `" "` + `"Aarav"` = `"Hello Aarav"`.

### Q2. [Easy] Write code using console.log that prints the numbers 1 through 5, each on a separate line.

*Hint:* Use five console.log statements.

**Answer:** ```
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

Each `console.log()` call prints on a new line. You could also pass them as one call `console.log(1, 2, 3, 4, 5)`, but that prints them on the same line.

### Q3. [Medium] What does this HTML page display on the web page (not the console)?

```
<!DOCTYPE html>

  Old Text

  
    console.log("New Text");
  

```

*Hint:* console.log does not change the web page.

**Answer:** The web page displays `Old Text`. The console shows `New Text`.

`console.log()` only prints to the browser's Developer Console, not to the web page. To change the paragraph text, you would need `document.getElementById("demo").textContent = "New Text"`.

### Q4. [Medium] What is the output?

```
let a = "5";
let b = "10";
console.log(a + b);
console.log(Number(a) + Number(b));
```

*Hint:* String + string concatenates. Number() converts strings to numbers.

**Answer:** `510`
`15`

Both `a` and `b` are strings. `"5" + "10"` concatenates to `"510"`. `Number("5") + Number("10")` converts them to numbers first: `5 + 10 = 15`.

### Q5. [Medium] Write an HTML page with an external JavaScript file. The HTML should have a paragraph with id 'output'. The external JS file should set the text to 'Loaded from external file!'.

*Hint:* Create two files: an HTML file with a script src tag, and a .js file.

**Answer:** ```
<!-- index.html -->
<!DOCTYPE html>

  

  

// script.js
document.getElementById("output").textContent = "Loaded from external file!";
```

The HTML file links to `script.js` using the `src` attribute. The JavaScript file finds the paragraph and sets its text. The script tag is placed before `` so the paragraph exists when the script runs.

### Q6. [Medium] What is the output?

```
console.log(parseInt("42px"));
console.log(parseInt("abc"));
console.log(Number("42px"));
console.log(Number("abc"));
```

*Hint:* parseInt reads digits until it hits a non-digit. Number requires the entire string to be numeric.

**Answer:** `42`
`NaN`
`NaN`
`NaN`

`parseInt("42px")` reads digits from the start and stops at 'p', returning `42`. `parseInt("abc")` finds no digits at the start, returning `NaN`. `Number("42px")` requires the ENTIRE string to be a valid number — since 'px' is not numeric, it returns `NaN`. `Number("abc")` is also `NaN`.

### Q7. [Medium] Ananya wrote this HTML file but the browser shows the JavaScript code as text on the page instead of running it. Find the bug:

```
<!DOCTYPE html>

  
    console.log("Hello World");
  

```

*Hint:* JavaScript code needs a special tag to execute.

**Answer:** The code is inside a `` tag, not a `` tag. It should be:

```

  console.log("Hello World");

```

HTML displays the content of `` tags as text on the page. JavaScript code must be inside `` tags for the browser to execute it. Without the script tag, the browser treats JavaScript code as regular text.

### Q8. [Hard] What is the output?

```
let x = prompt("Enter value:");

if (x === null) {
  console.log("Cancelled");
} else if (x === "") {
  console.log("Empty");
} else {
  console.log("Value: " + x);
}
```

The user clicks OK without typing anything.

*Hint:* When the user clicks OK without typing, prompt returns an empty string, not null.

**Answer:** `Empty`

When the user clicks OK with an empty field, `prompt()` returns `""` (empty string). This is different from clicking Cancel, which returns `null`. The code checks for `null` first (not the case), then checks for empty string (matches), so it logs `"Empty"`.

### Q9. [Hard] What is the output?

```
console.log("A");

setTimeout(function() {
  console.log("B");
}, 1000);

setTimeout(function() {
  console.log("C");
}, 0);

console.log("D");
```

*Hint:* All synchronous code runs first. Then setTimeout callbacks run based on their delay.

**Answer:** `A`
`D`
`C`
`B`

Synchronous code runs first: `A` then `D`. Then the event loop processes the queued callbacks. The 0ms timeout callback (C) runs first, then the 1000ms timeout callback (B) runs after 1 second. Even with 0ms delay, setTimeout always defers to after the current code completes.

### Q10. [Hard] Write an HTML page that uses console.table to display an array of 3 student objects. Each student should have name, age, and grade properties.

*Hint:* Create an array of objects and pass it to console.table().

**Answer:** ```

  let students = [
    { name: "Aarav", age: 14, grade: "9th" },
    { name: "Priya", age: 15, grade: "10th" },
    { name: "Vikram", age: 16, grade: "11th" }
  ];
  console.table(students);

```

`console.table()` takes an array of objects and displays them in a table format in the console, with columns for each property. This is much easier to read than `console.log()` for structured data.

### Q11. [Easy] What is the output?

```
console.log(typeof console.log);
console.log(typeof alert);
```

*Hint:* console.log and alert are both built-in functions.

**Answer:** `function`
`function`

Both `console.log` and `alert` are functions provided by the browser. `typeof` returns `"function"` for both.

### Q12. [Hard] Write an HTML page with a text input and a button. When clicked, use prompt-like behavior without actually using prompt: read the input value, and if it is empty, show a red error message 'Name cannot be empty!'. If it has a value, show a green success message 'Welcome, [name]!'.

*Hint:* Check if the input value is an empty string. Use style.color to change text color.

**Answer:** ```

Submit

  function validate() {
    let name = document.getElementById("nameInput").value;
    let msg = document.getElementById("msg");
    if (name === "") {
      msg.textContent = "Name cannot be empty!";
      msg.style.color = "red";
    } else {
      msg.textContent = "Welcome, " + name + "!";
      msg.style.color = "green";
    }
  }

```

Read the input value, check if it is empty using `=== ""`, and display the appropriate message with the correct color. This is a common pattern in form validation.

## Multiple Choice Questions

### Q1. [Easy] Which tag is used to add JavaScript to an HTML page?

**C is correct.** The `` tag is the standard way to include JavaScript in HTML. The other tags (``, ``) do not exist. `` is for displaying code as text.

### Q2. [Easy] What keyboard shortcut opens the browser DevTools in Chrome?

**B is correct.** `F12` opens DevTools in Chrome, Edge, and Firefox. `Ctrl + Shift + J` also works in Chrome to open the Console directly. `Ctrl + D` bookmarks the page, and `Ctrl + F` opens Find.

### Q3. [Easy] What does console.log('Hello') do?

**C is correct.** `console.log()` outputs to the Developer Console only (F12), not to the web page (A), not as a popup (B), and not to a file (D).

### Q4. [Easy] What does prompt() return when the user clicks Cancel?

**D is correct.** Clicking Cancel on `prompt()` returns `null`. Clicking OK with nothing typed returns an empty string `""`. This distinction is important for handling user input.

### Q5. [Easy] What happens to inline code when a script tag has a src attribute?

**C is correct.** When a `` tag has a `src` attribute, any code between the opening and closing tags is completely ignored. To run both, you need two separate script tags.

### Q6. [Medium] What does the defer attribute do on a script tag?

**C is correct.** The `defer` attribute tells the browser to download the script file while continuing to build the page, then execute the script only after the entire HTML has been parsed. This prevents the script from blocking page rendering.

### Q7. [Medium] Which console method displays data in a table format?

**B is correct.** `console.table()` displays arrays and objects in a formatted table in the console. `console.grid()` and `console.display()` do not exist.

### Q8. [Medium] What happens when document.write() is called after the page has finished loading?

**C is correct.** When called after the page has loaded (e.g., from a button click), `document.write()` overwrites the entire page. This destructive behavior is why it should be avoided in modern JavaScript.

### Q9. [Medium] What is the correct way to link an external JavaScript file?

**B is correct.** The `src` attribute on the `` tag specifies the external JavaScript file. `href` is used for links and stylesheets, not scripts. There is no `file` attribute for script tags.

### Q10. [Medium] What is the output of: console.log(parseInt('42abc'))?

**C is correct.** `parseInt()` reads digits from the beginning of the string and stops when it hits a non-digit character. It successfully parses `42` from `'42abc'`. If the string started with non-digits (like `'abc42'`), the result would be `NaN`.

### Q11. [Medium] What does confirm() return?

**C is correct.** `confirm()` returns `true` when the user clicks OK and `false` when they click Cancel. It does not return strings or numbers.

### Q12. [Hard] What is the output of: console.log(1); setTimeout(() => console.log(2), 0); console.log(3);

**B is correct.** Synchronous code runs first: `1` then `3`. The `setTimeout` callback is placed in the event queue and only runs after all synchronous code completes, even with a 0ms delay. So `2` prints last.

### Q13. [Hard] Why is the  tag not self-closing in HTML?

**B is correct.** The `` tag can contain JavaScript code between its opening and closing tags, so HTML requires the explicit closing ``. Self-closing tags like `` are only for void elements that cannot have children.

### Q14. [Hard] What is the difference between defer and async on a script tag?

**B is correct.** `defer` downloads the script in the background and waits until the entire HTML is parsed before executing. `async` also downloads in the background but executes immediately when the download completes, even if the page is not fully loaded. Use `defer` for scripts that need the DOM.

### Q15. [Hard] What is the output of: console.log(typeof console)?

**C is correct.** `console` is an object that contains methods like `log()`, `warn()`, `error()`, etc. `typeof console` returns `"object"`. Individual methods like `console.log` are functions, but the `console` itself is an object.

### Q16. [Easy] What type does prompt() always return when the user clicks OK?

**B is correct.** `prompt()` always returns a **string** when the user clicks OK, regardless of what they type. Even if the user types `42`, the return value is `"42"`. Use `Number()` to convert it.

### Q17. [Hard] Which of the following is true about multiple script tags on a page?

**C is correct.** All script tags on a page share the same global scope. A variable declared with `var` or without any keyword in one script is accessible from any other script. `let` and `const` at the top level are also global but not added to the `window` object.

### Q18. [Medium] Which console method shows a message with a yellow warning icon?

**B is correct.** `console.warn()` displays messages with a yellow background and a warning triangle icon. `console.error()` shows red, `console.log()` shows default styling, and `console.info()` shows with an info icon.

## Coding Challenges

### Challenge 1. Multi-Method Console Explorer

**Difficulty:** Easy

Write a script that demonstrates all five console methods: log, warn, error, table, and time/timeEnd. Log your name, warn about something, show an error, display a table of 3 fruits with their colors, and time a loop that counts to 10000.

**Constraints:**

- Use all five console methods in one script.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Console shows: name, warning, error, fruit table, and timing result.
```

**Solution:**

```javascript
<script>
  console.log("Name: Rohan");
  console.warn("Low battery warning!");
  console.error("404: Page not found");
  console.table([
    { fruit: "Mango", color: "Yellow" },
    { fruit: "Apple", color: "Red" },
    { fruit: "Banana", color: "Yellow" }
  ]);
  console.time("counting");
  for (let i = 0; i < 10000; i++) {}
  console.timeEnd("counting");
</script>
```

### Challenge 2. Input Adder Without prompt

**Difficulty:** Easy

Create an HTML page with two number inputs and a button. When the button is clicked, read both values, add them, and display the sum in a paragraph. Do NOT use prompt or alert.

**Constraints:**

- Use document.getElementById and Number() for conversion.

**Sample input:**

```
User enters 25 and 17
```

**Sample output:**

```
The sum of 25 and 17 is 42
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <input type="number" id="a" placeholder="First number">
  <input type="number" id="b" placeholder="Second number">
  <button onclick="add()">Add</button>
  <p id="result"></p>
  <script>
    function add() {
      let a = Number(document.getElementById("a").value);
      let b = Number(document.getElementById("b").value);
      document.getElementById("result").textContent = "The sum of " + a + " and " + b + " is " + (a + b);
    }
  </script>
</body>
</html>
```

### Challenge 3. Script Loading Order Experiment

**Difficulty:** Medium

Create an HTML page with three script tags at different positions (one in head, one in mid-body, one before closing body). Each logs which script it is and whether a specific paragraph element exists (using getElementById). Predict the output before running it.

**Constraints:**

- Place the paragraph between Script 2 and Script 3.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Script 1: element is null
Script 2: element is null
Script 3: element exists
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head>
  <script>
    console.log("Script 1: element is", document.getElementById("target"));
  </script>
</head>
<body>
  <script>
    console.log("Script 2: element is", document.getElementById("target"));
  </script>
  <p id="target">Target paragraph</p>
  <script>
    console.log("Script 3: element is", document.getElementById("target"));
  </script>
</body>
</html>
```

### Challenge 4. Build a Prompt Replacement

**Difficulty:** Medium

Create an HTML page that works like prompt() but better: show a styled text input with a label, a Submit button, and a Cancel button. When Submit is clicked, show the entered value in green. When Cancel is clicked, show 'Cancelled' in red. Style it to look like a dialog box.

**Constraints:**

- Do not use prompt(), alert(), or confirm(). Use pure HTML, CSS, and JS.

**Sample input:**

```
User types 'Neha' and clicks Submit
```

**Sample output:**

```
You entered: Neha (shown in green)
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <div style="border:2px solid #333; padding:20px; width:300px; margin:50px auto; border-radius:8px; font-family:Arial;">
    <p><strong>Enter your name:</strong></p>
    <input type="text" id="input" style="width:90%; padding:8px; font-size:16px;">
    <br><br>
    <button onclick="submit()">Submit</button>
    <button onclick="cancel()">Cancel</button>
    <p id="result"></p>
  </div>
  <script>
    function submit() {
      let val = document.getElementById("input").value;
      let r = document.getElementById("result");
      r.textContent = "You entered: " + val;
      r.style.color = "green";
    }
    function cancel() {
      let r = document.getElementById("result");
      r.textContent = "Cancelled";
      r.style.color = "red";
    }
  </script>
</body>
</html>
```

### Challenge 5. Console-Based Student Report Card

**Difficulty:** Hard

Use console.table to display a student report card. Create an array of 5 subjects with name, marks (out of 100), and grade (A/B/C/D/F based on marks). Calculate the grade programmatically based on marks (90+: A, 80+: B, 70+: C, 60+: D, below: F). Also log the total and percentage.

**Constraints:**

- Calculate grades using conditional logic. Use console.table for the report and console.log for totals.

**Sample input:**

```
(No input required - use hardcoded marks)
```

**Sample output:**

```
A table showing 5 subjects with their marks and grades, plus total and percentage in console.log.
```

**Solution:**

```javascript
<script>
  function getGrade(marks) {
    if (marks >= 90) return "A";
    if (marks >= 80) return "B";
    if (marks >= 70) return "C";
    if (marks >= 60) return "D";
    return "F";
  }
  let subjects = [
    { subject: "Maths", marks: 92 },
    { subject: "Science", marks: 85 },
    { subject: "English", marks: 78 },
    { subject: "Hindi", marks: 88 },
    { subject: "Computer", marks: 95 }
  ];
  subjects.forEach(function(s) { s.grade = getGrade(s.marks); });
  console.table(subjects);
  let total = subjects.reduce(function(sum, s) { return sum + s.marks; }, 0);
  console.log("Total: " + total + "/500");
  console.log("Percentage: " + (total / 5) + "%");
</script>
```

### Challenge 6. Live Character Counter with Color Feedback

**Difficulty:** Hard

Build a textarea with a maximum limit of 100 characters. Show a live character count below it. The count text should be green when under 50, yellow when 50-80, and red when above 80. Disable the submit button when the limit is reached.

**Constraints:**

- Use the oninput event. Use style.color for feedback colors.

**Sample input:**

```
User types in the textarea
```

**Sample output:**

```
Characters: 45/100 (green)
Characters: 67/100 (yellow)
Characters: 92/100 (red)
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <textarea id="text" oninput="update()" maxlength="100" rows="5" cols="40" placeholder="Type here..."></textarea>
  <p id="count">Characters: 0/100</p>
  <button id="btn">Submit</button>
  <script>
    function update() {
      let len = document.getElementById("text").value.length;
      let counter = document.getElementById("count");
      counter.textContent = "Characters: " + len + "/100";
      if (len < 50) counter.style.color = "green";
      else if (len <= 80) counter.style.color = "orange";
      else counter.style.color = "red";
      document.getElementById("btn").disabled = (len >= 100);
    }
  </script>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/javascript-in-the-browser/*
