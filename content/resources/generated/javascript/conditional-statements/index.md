---
title: "JavaScript Conditional Statements - if, else, switch, Ternary Operator | Modern Age Coders"
description: "Master JavaScript conditionals: if, if-else, else-if, nested if, switch-case, ternary operator. Build interactive pages that respond to user input. 56 practice questions."
slug: conditional-statements
canonical: https://learn.modernagecoders.com/resources/javascript/conditional-statements
category: "JavaScript"
keywords: ["javascript if else", "javascript switch case", "javascript conditional", "javascript ternary operator", "javascript decision making", "if else javascript beginners", "switch fall through javascript"]
---
# Conditional Statements (if, else, switch)

**Difficulty:** Beginner  
**Reading time:** 25 min  
**Chapter:** 5  
**Practice questions:** 56

## What Are Conditional Statements?

A **conditional statement** lets your program make decisions. Instead of running every line of code from top to bottom, conditionals let your program choose which code to run based on whether a condition is true or false.

Think of it like a crossroad: if it is raining, you take an umbrella. If it is sunny, you wear sunglasses. Your program does the same thing — it checks a condition and takes a different action depending on the result.

JavaScript has three main conditional structures:

- `if / else if / else` — for most decision-making
- `switch` — for checking a variable against many specific values
- `? :` (ternary) — for simple inline conditions

## Why Are Conditionals Important?

### 1. Every Interactive Feature Needs Conditions

When you build a form, you check: is the email valid? Is the password strong enough? When you build a game, you check: did the player score? Did they lose all lives? Conditionals are the foundation of all interactivity.

### 2. User Input Is Unpredictable

Users will type anything into your forms — empty strings, negative numbers, special characters. Conditionals let you handle every possible case and give appropriate feedback.

### 3. The DOM Comes Alive with Conditions

Want to show or hide an element? Change a color based on a value? Display different messages for different users? All of these require conditional logic combined with DOM manipulation — and that is what makes web pages feel alive.

### 4. It Is the Gateway to Loops

Loops (the next chapter) use conditions to decide when to stop repeating. Without understanding conditionals first, loops will not make sense.

## Detailed Explanation

### 1. The if Statement

The simplest conditional. If the condition is true, run the code block. If false, skip it.

```
if (condition) {
  // code runs only if condition is true
}
```

The condition can be any expression that evaluates to a truthy or falsy value. It does not have to be strictly `true` or `false` — any truthy value will enter the if block.

### 2. if-else

Adds an alternative path when the condition is false.

```
if (condition) {
  // runs if condition is true
} else {
  // runs if condition is false
}
```

### 3. if - else if - else (Multiple Conditions)

Checks multiple conditions in sequence. Only the first matching block runs.

```
if (condition1) {
  // runs if condition1 is true
} else if (condition2) {
  // runs if condition1 is false AND condition2 is true
} else if (condition3) {
  // runs if both above are false AND condition3 is true
} else {
  // runs if ALL conditions are false
}
```

Important: once a condition matches, the remaining else-if and else blocks are skipped entirely. Order matters — put the most specific conditions first.

### 4. Nested if Statements

You can put an if inside another if to check conditions in stages.

```
if (isLoggedIn) {
  if (isAdmin) {
    // show admin dashboard
  } else {
    // show user dashboard
  }
} else {
  // show login page
}
```

Nested ifs can get messy. If you find yourself nesting more than 2-3 levels deep, consider refactoring with early returns or separate functions.

### 5. The Ternary Operator (Quick Review)

You learned this in the previous chapter. It is a one-line if-else:

```
let result = condition ? valueIfTrue : valueIfFalse;
```

Use ternary for simple assignments or template literals. Use if-else for complex logic with multiple statements.

### 6. switch Statement

Switch is ideal when you need to compare ONE variable against MANY specific values.

```
switch (expression) {
  case value1:
    // code for value1
    break;
  case value2:
    // code for value2
    break;
  default:
    // code if no case matches
}
```

#### Key Rules:

- `break` is essential. Without it, execution "falls through" to the next case.
- `default` is like the `else` — it runs when no case matches.
- Switch uses `===` (strict comparison), not `==`.
- You can intentionally omit `break` for fall-through behavior (grouping cases).

#### Fall-Through (Grouping Cases)

Sometimes you want multiple cases to run the same code. Omitting `break` lets execution fall through:

```
switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Weekday");
}
```

### 7. Conditionals with the DOM

The real power of conditionals appears when you combine them with DOM manipulation to create interactive pages:

- Show/hide elements based on user input
- Change colors based on values (red for errors, green for success)
- Enable/disable buttons based on form validation
- Display different content for different user types

### 8. Comparing Strings

Strings are compared character by character using Unicode values. This means:

```
"apple" < "banana"   // true (a comes before b)
"Apple" < "apple"    // true (uppercase A has lower Unicode value than lowercase a)
"10" < "9"           // true (string comparison: '1' comes before '9')
```

The last one catches many beginners: `"10" < "9"` is `true` because string comparison checks the first character ('1' vs '9'), and '1' comes before '9'. If you want numeric comparison, convert to numbers first.

## Code Examples

### if, if-else, and else-if in Action

```javascript
let marks = 78;

// Simple if
if (marks >= 40) {
  console.log("Passed!");
}

// if-else
if (marks >= 90) {
  console.log("Excellent!");
} else {
  console.log("Keep working hard.");
}

// else-if chain (grade calculator)
let grade;
if (marks >= 90) {
  grade = "A";
} else if (marks >= 80) {
  grade = "B";
} else if (marks >= 70) {
  grade = "C";
} else if (marks >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log(`Marks: ${marks}, Grade: ${grade}`);
```

The first `if` checks if marks are at least 40. The if-else provides two paths. The else-if chain checks conditions in order — since 78 is not >= 90 and not >= 80, but it IS >= 70, the grade is "C". The remaining else-if and else are skipped.

**Output:**

```
Passed!
Keep working hard.
Marks: 78, Grade: C
```

### Interactive Grade Calculator on a Web Page

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial; text-align: center; padding: 30px; }
    input { padding: 10px; font-size: 18px; width: 200px; }
    button { padding: 10px 20px; font-size: 18px; cursor: pointer; }
    #result { font-size: 24px; margin-top: 20px; font-weight: bold; }
  </style>
</head>
<body>
  <h1>Grade Calculator</h1>
  <input type="number" id="marks" placeholder="Enter marks (0-100)">
  <button onclick="calculateGrade()">Get Grade</button>
  <p id="result"></p>

  <script>
    function calculateGrade() {
      let marks = Number(document.getElementById("marks").value);
      let result = document.getElementById("result");

      if (marks < 0 || marks > 100) {
        result.textContent = "Invalid! Enter 0-100.";
        result.style.color = "red";
      } else if (marks >= 90) {
        result.textContent = `${marks} marks = Grade A`;
        result.style.color = "#2ecc71";
      } else if (marks >= 80) {
        result.textContent = `${marks} marks = Grade B`;
        result.style.color = "#3498db";
      } else if (marks >= 70) {
        result.textContent = `${marks} marks = Grade C`;
        result.style.color = "#f39c12";
      } else if (marks >= 60) {
        result.textContent = `${marks} marks = Grade D`;
        result.style.color = "#e67e22";
      } else {
        result.textContent = `${marks} marks = Grade F`;
        result.style.color = "#e74c3c";
      }
    }
  </script>
</body>
</html>
```

This is a practical project. The function reads the input, validates it (catches invalid values like -5 or 150), then uses else-if to assign a grade. Each grade gets a different color using `style.color`. This combines conditionals with DOM manipulation — the core of interactive web development.

**Output:**

```
Entering 85 shows: '85 marks = Grade B' in blue.
Entering 150 shows: 'Invalid! Enter 0-100.' in red.
```

### switch Statement with Days of the Week

```javascript
let day = new Date().toLocaleDateString("en-US", { weekday: "long" });
console.log(`Today is ${day}`);

switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("Midweek. Keep going!");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend! Relax and code for fun.");
    break;
  default:
    console.log("Unknown day.");
}
```

This switch uses the current day. Tuesday, Wednesday, and Thursday share the same code block (fall-through without break). Saturday and Sunday also share a block. `break` prevents execution from falling into the next case. `default` handles unexpected values. Notice how switch is cleaner than writing 7 if-else statements.

**Output:**

```
Today is [current day]
[corresponding message]
```

### Nested if for Login System

```javascript
let username = "aarav";
let password = "secure123";
let role = "admin";

if (username !== "" && password !== "") {
  if (username === "aarav" && password === "secure123") {
    if (role === "admin") {
      console.log("Welcome, Admin Aarav! You have full access.");
    } else {
      console.log("Welcome, Aarav! You have standard access.");
    }
  } else {
    console.log("Invalid username or password.");
  }
} else {
  console.log("Please enter both username and password.");
}
```

Nested ifs check conditions in stages: first, are the fields filled? Then, do the credentials match? Finally, what is the user's role? This pattern is common in authentication flows. Each level narrows the check before proceeding deeper.

**Output:**

```
Welcome, Admin Aarav! You have full access.
```

### Conditionals with DOM: Show/Hide and Color Change

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial; text-align: center; padding: 30px; }
    #tempDisplay { font-size: 48px; margin: 20px; padding: 20px; border-radius: 10px; }
  </style>
</head>
<body>
  <h1>Temperature Monitor</h1>
  <input type="number" id="temp" placeholder="Enter temperature (C)">
  <button onclick="checkTemp()">Check</button>
  <div id="tempDisplay"></div>

  <script>
    function checkTemp() {
      let temp = Number(document.getElementById("temp").value);
      let display = document.getElementById("tempDisplay");

      if (temp > 40) {
        display.textContent = `${temp} C - Extreme Heat!`;
        display.style.backgroundColor = "#e74c3c";
        display.style.color = "white";
      } else if (temp > 30) {
        display.textContent = `${temp} C - Hot`;
        display.style.backgroundColor = "#f39c12";
        display.style.color = "white";
      } else if (temp > 15) {
        display.textContent = `${temp} C - Comfortable`;
        display.style.backgroundColor = "#2ecc71";
        display.style.color = "white";
      } else if (temp > 0) {
        display.textContent = `${temp} C - Cold`;
        display.style.backgroundColor = "#3498db";
        display.style.color = "white";
      } else {
        display.textContent = `${temp} C - Freezing!`;
        display.style.backgroundColor = "#9b59b6";
        display.style.color = "white";
      }
    }
  </script>
</body>
</html>
```

This project combines conditionals with DOM styling. Each temperature range gets a different background color: red for extreme heat, orange for hot, green for comfortable, blue for cold, purple for freezing. The user sees immediate visual feedback. This is the kind of interactive feature that makes web pages engaging.

**Output:**

```
Entering 42 shows: '42 C - Extreme Heat!' with red background.
Entering 22 shows: '22 C - Comfortable' with green background.
```

### switch with Return Values (in a Function)

```javascript
function getDayType(day) {
  switch (day.toLowerCase()) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      return "weekday";
    case "saturday":
    case "sunday":
      return "weekend";
    default:
      return "invalid day";
  }
}

console.log(getDayType("Monday"));    // "weekday"
console.log(getDayType("SATURDAY"));  // "weekend"
console.log(getDayType("Holiday"));   // "invalid day"

// Using it in a conditional
let today = "Saturday";
if (getDayType(today) === "weekend") {
  console.log("No school today!");
} else {
  console.log("Time for school.");
}
```

Using `return` inside a function means you do not need `break` — return exits the function immediately. `day.toLowerCase()` makes the comparison case-insensitive ("Monday", "MONDAY", "monday" all work). Fall-through groups weekdays together and weekend days together.

**Output:**

```
weekday
weekend
invalid day
No school today!
```

### String Comparison Gotchas

```javascript
// Alphabetical comparison works as expected
console.log("apple" < "banana");    // true
console.log("cat" > "car");          // true (3rd char: t > r)

// But case matters!
console.log("Apple" < "apple");     // true (uppercase has lower Unicode value)
console.log("Z" < "a");            // true (all uppercase < all lowercase)

// Number strings compared as strings, NOT numbers!
console.log("10" < "9");            // true! ('1' < '9')
console.log("100" < "20");          // true! ('1' < '2')

// Fix: convert to numbers for numeric comparison
console.log(Number("10") < Number("9"));   // false (correct)
console.log(10 < 9);                       // false (correct)

// Case-insensitive comparison
let a = "Hello";
let b = "hello";
console.log(a === b);                          // false
console.log(a.toLowerCase() === b.toLowerCase()); // true
```

String comparison uses Unicode values, character by character. This means uppercase letters come before lowercase (Z < a), and number strings are compared as strings ("10" < "9" because '1' < '9'). Always convert to numbers for numeric comparison. Use `.toLowerCase()` for case-insensitive string comparison.

**Output:**

```
true
true
true
true
true
true
false
false
false
true
```

## Common Mistakes

### Forgetting break in switch

**Wrong:**

```
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("It is an apple");
  case "banana":
    console.log("It is a banana");
  case "cherry":
    console.log("It is a cherry");
}
```

No error, but ALL three messages print! Without break, execution falls through to the next case.

**Correct:**

```
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("It is an apple");
    break;
  case "banana":
    console.log("It is a banana");
    break;
  case "cherry":
    console.log("It is a cherry");
    break;
}
```

Without `break`, once a matching case is found, ALL subsequent cases execute regardless of whether they match. This is called "fall-through." Always add `break` unless you intentionally want fall-through.

### Using = Instead of === in if Condition

**Wrong:**

```
let age = 20;
if (age = 18) {
  console.log("You are 18");
}
console.log(age);  // 18 (age got changed!)
```

No error, but age is reassigned to 18 and the condition always runs because 18 is truthy.

**Correct:**

```
let age = 20;
if (age === 18) {
  console.log("You are 18");
}
console.log(age);  // 20 (unchanged)
```

`=` assigns a value, `===` compares values. In the wrong code, `age = 18` assigns 18 to age and the `if` evaluates 18, which is truthy. This is one of the most common bugs in JavaScript.

### Comparing Strings as Numbers

**Wrong:**

```
let input = "42";
if (input > 100) {
  console.log("Big number");
}
// This works by accident because JS converts the string to a number.
// But what if input is "abc"?
```

If input is 'abc', the comparison 'abc' > 100 gives false (NaN > 100 is false), which might silently give wrong results.

**Correct:**

```
let input = "42";
let num = Number(input);
if (Number.isNaN(num)) {
  console.log("Not a valid number");
} else if (num > 100) {
  console.log("Big number");
} else {
  console.log("Small number");
}
```

Always explicitly convert strings to numbers with `Number()` before comparing. Then check for `NaN` to handle invalid input. Relying on implicit coercion in comparisons can mask bugs.

### Using if Without Curly Braces (Risky)

**Wrong:**

```
let score = 85;
if (score >= 90)
  console.log("Grade A");
  console.log("Excellent!");  // This ALWAYS runs (not part of the if)
```

No error, but 'Excellent!' prints regardless of the condition because only the first line is part of the if.

**Correct:**

```
let score = 85;
if (score >= 90) {
  console.log("Grade A");
  console.log("Excellent!");
}
```

Without curly braces `{}`, only the very next statement belongs to the `if`. The second `console.log` is not inside the if — it always runs. Always use curly braces, even for single-line if statements.

### switch with Type Mismatch

**Wrong:**

```
let x = "1";
switch (x) {
  case 1:
    console.log("One");
    break;
  default:
    console.log("Not matched");  // This runs!
}
```

No error, but 'Not matched' prints because switch uses === (strict comparison). '1' !== 1.

**Correct:**

```
let x = "1";
switch (x) {
  case "1":  // Match the type!
    console.log("One");
    break;
  default:
    console.log("Not matched");
}
```

`switch` uses strict equality (`===`). The string `"1"` does not match the number `1` because their types are different. Make sure the case values match the type of the switch expression.

## Summary

- The if statement runs code only when a condition is true. if-else provides an alternative path. else-if handles multiple conditions.
- In an else-if chain, only the first matching condition runs. Order matters: put the most specific conditions first.
- The ternary operator (condition ? a : b) is a one-line if-else. Use it for simple assignments, not complex logic.
- switch compares one value against many cases using === (strict equality). Always include break to prevent fall-through.
- Intentional fall-through in switch groups cases that share the same code: case 'Sat': case 'Sun': code; break;
- Curly braces {} are required for if blocks with multiple statements. Always use them, even for single statements, to prevent bugs.
- Conditionals work with truthy/falsy values: if (value) runs for any truthy value, not just the boolean true.
- String comparison uses Unicode values: 'Apple' < 'apple', and '10' < '9' (character by character). Convert to numbers for numeric comparison.
- Combine conditionals with DOM manipulation to build interactive features: showing/hiding elements, changing colors, validating forms.
- Nested ifs are sometimes necessary but should be avoided when more than 2-3 levels deep. Refactor with early returns or separate functions.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/javascript/conditional-statements/*
*Practice questions: https://learn.modernagecoders.com/resources/javascript/conditional-statements/practice/*
