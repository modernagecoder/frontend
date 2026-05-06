---
title: "Practice: Conditional Statements (if, else, switch)"
description: "56 practice problems for Conditional Statements (if, else, switch) in JavaScript"
slug: conditional-statements-practice
canonical: https://learn.modernagecoders.com/resources/javascript/conditional-statements/practice/
category: "JavaScript"
---
# Practice: Conditional Statements (if, else, switch)

**Total questions:** 56

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
let x = 10;
if (x > 5) {
  console.log("Big");
}
console.log("Done");
```

*Hint:* The if block runs because x > 5 is true. The last line runs regardless.

**Answer:** `Big`
`Done`

`10 > 5` is true, so "Big" is printed. "Done" is outside the if block, so it always prints.

### Q2. [Easy] What is the output?

```
let age = 12;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

*Hint:* 12 is not >= 18.

**Answer:** `Minor`

`12 >= 18` is false, so the else block runs, printing "Minor".

### Q3. [Easy] What is the output?

```
let score = 85;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}
```

*Hint:* 85 is not >= 90, but it IS >= 80.

**Answer:** `B`

`85 >= 90` is false. `85 >= 80` is true, so "B" is printed. The remaining conditions are skipped.

### Q4. [Medium] What is the output?

```
let x = 0;
if (x) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
```

*Hint:* if checks for truthy/falsy, not just true/false. What is Boolean(0)?

**Answer:** `Falsy`

`0` is a falsy value in JavaScript. `if (0)` evaluates to `if (false)`, so the else block runs.

### Q5. [Medium] What is the output?

```
let name = "";
if (name) {
  console.log(`Hello, ${name}!`);
} else {
  console.log("Name is empty.");
}
```

*Hint:* Empty string is falsy.

**Answer:** `Name is empty.`

An empty string `""` is falsy. `if ("")` is false, so the else block runs.

### Q6. [Medium] What is the output?

```
let color = "red";
switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Slow down");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Unknown");
}
```

*Hint:* color matches 'red'. break prevents fall-through.

**Answer:** `Stop`

`color` is "red", which matches `case "red"`. "Stop" is printed, then `break` exits the switch.

### Q7. [Medium] What is the output?

```
let num = 2;
switch (num) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
  case 3:
    console.log("Three");
  default:
    console.log("Default");
}
```

*Hint:* There are no break statements. What happens after case 2 matches?

**Answer:** `Two`
`Three`
`Default`

Case 2 matches and prints "Two". Without `break`, execution falls through to case 3 ("Three") and default ("Default"). This is the fall-through behavior.

### Q8. [Hard] What is the output?

```
let x = "1";
switch (x) {
  case 1:
    console.log("Number one");
    break;
  case "1":
    console.log("String one");
    break;
  default:
    console.log("No match");
}
```

*Hint:* switch uses === (strict equality). '1' is not the same as 1.

**Answer:** `String one`

Switch uses `===`. `"1" === 1` is false (different types). `"1" === "1"` is true (same type and value). So "String one" is printed.

### Q9. [Easy] Priya wrote this code but both messages print. Find the bug:

```
let score = 50;
if (score >= 90)
  console.log("Grade A");
  console.log("Excellent!");
```

*Hint:* Without curly braces, only the first line belongs to the if.

**Answer:** Add curly braces: 

```
if (score >= 90) {
  console.log("Grade A");
  console.log("Excellent!");
}
```

Without `{}`, only `console.log("Grade A")` is part of the if. `console.log("Excellent!")` is a separate statement that always runs. Curly braces group both statements inside the if.

### Q10. [Hard] What is the output?

```
let a = 5;
let b = 10;
let c = 15;

if (a > b) {
  if (b > c) {
    console.log("A");
  } else {
    console.log("B");
  }
} else {
  if (a + b > c) {
    console.log("C");
  } else {
    console.log("D");
  }
}
```

*Hint:* 5 > 10 is false, so go to the outer else. Then check 5 + 10 > 15.

**Answer:** `D`

`5 > 10` is false, so we go to the outer else. `5 + 10 > 15` is `15 > 15`, which is false. So we go to the inner else and print "D".

### Q11. [Easy] Write code that checks if a number stored in variable `n` (set to 7) is even or odd. Print the result.

*Hint:* Use the % operator: n % 2 === 0 means even.

**Answer:** ```
let n = 7;
if (n % 2 === 0) {
  console.log(`${n} is even`);
} else {
  console.log(`${n} is odd`);
}
```

Output: 7 is odd

`7 % 2` is 1 (not 0), so the else block runs.

### Q12. [Medium] What is the output?

```
let x = 5;
if (x > 3) {
  console.log("A");
}
if (x > 4) {
  console.log("B");
}
if (x > 5) {
  console.log("C");
}
```

*Hint:* These are separate if statements (not else-if), so each is checked independently.

**Answer:** `A`
`B`

Three separate `if` statements (not else-if). Each is checked independently. `5 > 3`: true, prints "A". `5 > 4`: true, prints "B". `5 > 5`: false, skips. Note: if these were else-if, only "A" would print.

### Q13. [Hard] What is the output?

```
let n = 15;
if (n % 3 === 0 && n % 5 === 0) {
  console.log("FizzBuzz");
} else if (n % 3 === 0) {
  console.log("Fizz");
} else if (n % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(n);
}
```

*Hint:* 15 is divisible by both 3 and 5. Which condition is checked first?

**Answer:** `FizzBuzz`

`15 % 3 === 0` is true and `15 % 5 === 0` is true. The first condition `&& both true` matches, so "FizzBuzz" is printed. The order matters — if the combined check was not first, you would get "Fizz" instead.

### Q14. [Medium] Write a switch statement that takes a month number (1-12) and prints the season: 'Winter' (12,1,2), 'Spring' (3,4,5), 'Summer' (6,7,8), 'Autumn' (9,10,11). Test with month = 7.

*Hint:* Use fall-through by grouping cases without break.

**Answer:** ```
let month = 7;
switch (month) {
  case 12: case 1: case 2:
    console.log("Winter");
    break;
  case 3: case 4: case 5:
    console.log("Spring");
    break;
  case 6: case 7: case 8:
    console.log("Summer");
    break;
  case 9: case 10: case 11:
    console.log("Autumn");
    break;
  default:
    console.log("Invalid month");
}
```

Output: Summer

Month 7 matches case 7, which is grouped with 6 and 8 (all Summer). Fall-through without break groups the cases, then break exits after printing.

### Q15. [Hard] What is the output?

```
let x = null;
if (x === null) {
  console.log("A");
}
if (x === undefined) {
  console.log("B");
}
if (x == undefined) {
  console.log("C");
}
if (!x) {
  console.log("D");
}
```

*Hint:* null === null is true. null === undefined is false. null == undefined is true. null is falsy.

**Answer:** `A`
`C`
`D`

`null === null`: true (A prints). `null === undefined`: false (B skips). `null == undefined`: true by special rule (C prints). `!null`: null is falsy, so !falsy = true (D prints).

### Q16. [Hard] Write an HTML page with an input for temperature (in Celsius) and a button. When clicked, change the body's background color: red if >40, orange if >30, green if >15, blue if >0, purple if <=0.

*Hint:* Use document.body.style.backgroundColor and if-else.

**Answer:** ```

Update

  function update() {
    let t = Number(document.getElementById("temp").value);
    let color;
    if (t > 40) color = "#e74c3c";
    else if (t > 30) color = "#f39c12";
    else if (t > 15) color = "#2ecc71";
    else if (t > 0) color = "#3498db";
    else color = "#9b59b6";
    document.body.style.backgroundColor = color;
    document.getElementById("msg").textContent = `${t} C`;
    document.getElementById("msg").style.color = "white";
  }

```

Reads the temperature, uses else-if to determine the color, and applies it to the body background. This demonstrates conditional logic driving visual changes on the page.

### Q17. [Medium] What is the output?

```
let day = "Monday";
switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Weekday");
    break;
}
```

*Hint:* Monday does not match Saturday or Sunday.

**Answer:** `Weekday`

"Monday" does not match "Saturday" or "Sunday", so the default case runs, printing "Weekday".

### Q18. [Medium] Rohan's code always prints 'Fail' even when marks is 85. Find the bug:

```
let marks = 85;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else if (marks >= 40) {
  console.log("Pass");
}
if (marks < 40) {
  console.log("Fail");
} else {
  console.log("Fail");  // BUG: this always prints when marks >= 40!
}
```

*Hint:* Look at the second if-else block. When marks is 85, which branch runs?

**Answer:** The second if-else is a separate block. When marks >= 40, the else of the second block runs and prints "Fail". Fix by combining into one else-if chain or removing the second block.

The second `if-else` is completely separate from the first. When marks is 85, the first chain prints "Grade B". Then the second block checks: `85 < 40` is false, so the else runs and prints "Fail". The fix is to make it all one else-if chain.

### Q19. [Hard] What is the output?

```
let a = "10";
let b = "9";
if (a > b) {
  console.log("a is greater");
} else {
  console.log("b is greater");
}
```

*Hint:* Both are strings. String comparison is character by character.

**Answer:** `b is greater`

Both `a` and `b` are strings. String comparison is character by character: '1' (from "10") vs '9' (from "9"). Since '1' < '9' in Unicode, `"10" < "9"` is true. So the else block runs. This is a common trap with string comparison.

### Q20. [Easy] What is the output?

```
let x = 5;
let result = x > 3 ? "big" : "small";
console.log(result);
```

*Hint:* 5 > 3 is true, so the ternary returns the first option.

**Answer:** `big`

`5 > 3` is true. The ternary returns `"big"`.

## Mixed Questions

### Q1. [Easy] What is the output?

```
let temp = 25;
if (temp > 30) {
  console.log("Hot");
} else if (temp > 20) {
  console.log("Warm");
} else {
  console.log("Cold");
}
```

*Hint:* 25 is not > 30, but it IS > 20.

**Answer:** `Warm`

`25 > 30` is false. `25 > 20` is true. "Warm" is printed.

### Q2. [Easy] Write code that checks if a year (2024) is a leap year. A year is a leap year if: divisible by 4 AND (not divisible by 100 OR divisible by 400).

*Hint:* Use % for divisibility and && / || for combining conditions.

**Answer:** ```
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}
```

Output: 2024 is a leap year

2024 % 4 === 0 (true) and 2024 % 100 !== 0 (true, 2024 is not a century year). True AND true = true. So 2024 is a leap year.

### Q3. [Medium] What is the output?

```
let val = "";
if (val) {
  console.log("Has value");
} else if (val === "") {
  console.log("Empty string");
} else {
  console.log("Something else");
}
```

*Hint:* Empty string is falsy, so the first condition is false.

**Answer:** `Empty string`

`if (""))` is false (empty string is falsy). `else if ("" === "")` is true. So "Empty string" is printed.

### Q4. [Medium] What is the output?

```
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
```

*Hint:* continue skips the rest of the loop body for the current iteration.

**Answer:** `1`
`2`
`4`
`5`

The loop runs from 1 to 5. When `i === 3`, `continue` skips the `console.log` for that iteration. So 3 is not printed.

### Q5. [Medium] Write an HTML page with a text input for a password. As the user types (oninput), show feedback: 'Weak' (red) if < 6 chars, 'Medium' (orange) if 6-9 chars, 'Strong' (green) if >= 10 chars.

*Hint:* Use the .length property of the input value and if-else for feedback.

**Answer:** ```

  function check() {
    let len = document.getElementById("pass").value.length;
    let fb = document.getElementById("feedback");
    if (len === 0) {
      fb.textContent = "";
    } else if (len < 6) {
      fb.textContent = "Weak";
      fb.style.color = "red";
    } else if (len < 10) {
      fb.textContent = "Medium";
      fb.style.color = "orange";
    } else {
      fb.textContent = "Strong";
      fb.style.color = "green";
    }
  }

```

The oninput event fires on every keystroke. We check the length of the password and show colored feedback. This is a common real-world pattern for password strength indicators.

### Q6. [Hard] What is the output?

```
let x = 10;
let y = 20;
let z = 30;

if (x < y && y < z) {
  console.log("Ascending");
}
if (x < y || x > z) {
  console.log("At least one true");
}
if (!(x === 10)) {
  console.log("Not ten");
} else {
  console.log("It is ten");
}
```

*Hint:* Evaluate each condition step by step. These are separate if blocks.

**Answer:** `Ascending`
`At least one true`
`It is ten`

`10 < 20 && 20 < 30`: true && true = true. `10 < 20 || 10 > 30`: true || false = true. `!(10 === 10)`: !true = false, so else runs.

### Q7. [Hard] What is the output?

```
function check(val) {
  if (typeof val === "number") {
    if (val > 0) return "positive number";
    if (val < 0) return "negative number";
    return "zero";
  } else if (typeof val === "string") {
    if (val.length > 0) return "non-empty string";
    return "empty string";
  }
  return "other type";
}

console.log(check(42));
console.log(check(-5));
console.log(check(""));
console.log(check(null));
```

*Hint:* typeof null is 'object', not 'number' or 'string'.

**Answer:** `positive number`
`negative number`
`empty string`
`other type`

`check(42)`: number, > 0, "positive number". `check(-5)`: number, < 0, "negative number". `check("")`: string, length 0, "empty string". `check(null)`: typeof null is "object", not matched, "other type".

### Q8. [Hard] Vikram's switch statement should print the Indian season but prints the wrong one for month 4. Find the bug:

```
let month = 4;
switch (month) {
  case 3: case 4: case 5:
    console.log("Summer");
    break;
  case 6: case 7: case 8: case 9:
    console.log("Monsoon");
    break;
  case 10: case 11:
    console.log("Autumn");
    break;
  case 12: case 1: case 2:
    console.log("Winter");
    break;
  default:
    console.log("Spring");
}
```

*Hint:* In India, April (4) is Summer. The code does print 'Summer' for month 4. Look more carefully at the season mapping.

**Answer:** The code actually works correctly for month 4 (prints Summer). If Vikram expected "Spring" for April, the mapping is wrong. In India, March-May is typically Summer, not Spring. The code matches the Indian season calendar correctly.

This is a trick question. The switch is technically correct for the Indian calendar where March-May is Summer. If a different mapping is desired, the case groupings need to be changed.

### Q9. [Hard] Write a function that takes a number and returns its English ordinal suffix: 1st, 2nd, 3rd, 4th, 5th, ... 11th, 12th, 13th, 21st, 22nd, 23rd, 31st. Test with 1, 2, 3, 4, 11, 13, 21, 22.

*Hint:* The tricky part is 11, 12, 13 which all use 'th' (not st, nd, rd).

**Answer:** ```
function ordinal(n) {
  let suffix;
  if (n % 100 >= 11 && n % 100 <= 13) {
    suffix = "th";
  } else {
    switch (n % 10) {
      case 1: suffix = "st"; break;
      case 2: suffix = "nd"; break;
      case 3: suffix = "rd"; break;
      default: suffix = "th";
    }
  }
  return n + suffix;
}
console.log(ordinal(1));   // 1st
console.log(ordinal(2));   // 2nd
console.log(ordinal(3));   // 3rd
console.log(ordinal(4));   // 4th
console.log(ordinal(11));  // 11th
console.log(ordinal(13));  // 13th
console.log(ordinal(21));  // 21st
console.log(ordinal(22));  // 22nd
```

First check if the last two digits are 11, 12, or 13 (these always use 'th'). Otherwise, check the last digit: 1='st', 2='nd', 3='rd', everything else='th'. This uses both if and switch effectively.

### Q10. [Medium] What is the output?

```
let x = 5;
let y = "5";

if (x == y) console.log("A");
if (x === y) console.log("B");
if (x != y) console.log("C");
if (x !== y) console.log("D");
```

*Hint:* == converts types. === does not. Same applies to != vs !==.

**Answer:** `A`
`D`

`5 == "5"`: true (type coercion), prints A. `5 === "5"`: false (different types), B skips. `5 != "5"`: false (== says they are equal), C skips. `5 !== "5"`: true (different types), prints D.

### Q11. [Medium] Write an HTML page with a dropdown select for a traffic light color (Red, Yellow, Green). When the selection changes, display the appropriate message and change a div's background to that color.

*Hint:* Use the onchange event on a select element and switch or if-else.

**Answer:** ```

  Red
  Yellow
  Green

  function update() {
    let color = document.getElementById("light").value;
    let signal = document.getElementById("signal");
    let msg = document.getElementById("msg");
    signal.style.backgroundColor = color;
    switch (color) {
      case "red":
        msg.textContent = "STOP!";
        break;
      case "yellow":
        msg.textContent = "SLOW DOWN";
        break;
      case "green":
        msg.textContent = "GO!";
        break;
    }
  }
  update();

```

The onchange event fires when the dropdown selection changes. Switch matches the color value and sets the appropriate message. The div's background color is set directly to the color value.

### Q12. [Hard] What is the output?

```
let n = 0;

if (n) {
  console.log("truthy");
}

if (n === 0) {
  console.log("zero");
}

if (n == false) {
  console.log("loose false");
}

if (n === false) {
  console.log("strict false");
}
```

*Hint:* 0 is falsy. 0 == false is true. 0 === false is false (different types).

**Answer:** `zero`
`loose false`

`if (0)`: 0 is falsy, skips. `if (0 === 0)`: true, prints "zero". `if (0 == false)`: false becomes 0, 0==0 is true, prints "loose false". `if (0 === false)`: number vs boolean, false.

## Multiple Choice Questions

### Q1. [Easy] What does the if statement check?

**B is correct.** The `if` statement evaluates a condition. If the result is truthy (not just `true`, but any truthy value), the code block runs. If falsy, it is skipped.

### Q2. [Easy] What is the else block for?

**B is correct.** The `else` block runs only when the `if` condition is false (falsy). It provides the alternative path.

### Q3. [Easy] What keyword exits a switch case?

**C is correct.** `break` exits the switch statement. Without it, execution falls through to the next case.

### Q4. [Easy] What comparison does switch use?

**B is correct.** `switch` uses `===` (strict equality) to compare the expression with each case value. This means types must match.

### Q5. [Medium] What happens when you omit break in a switch case?

**C is correct.** Without `break`, execution continues into the next case regardless of whether it matches. This is called "fall-through" and can be used intentionally to group cases.

### Q6. [Medium] What is the output of: if ('') console.log('yes'); else console.log('no');

**B is correct.** An empty string `''` is falsy in JavaScript. `if ('')` evaluates to false, so the else block runs, printing 'no'.

### Q7. [Medium] In an else-if chain, how many blocks can execute?

**B is correct.** In an if / else-if / else chain, only the first matching condition's block runs. All subsequent blocks are skipped. If none match and there is no else, zero blocks run.

### Q8. [Medium] What is the output of: console.log('10' < '9')?

**A is correct.** Both values are strings, so JavaScript compares them character by character. '1' (from '10') has a lower Unicode value than '9', so `'10' < '9'` is `true`. To compare as numbers, convert first.

### Q9. [Medium] When should you use switch instead of if-else?

**B is correct.** Switch is ideal when checking one variable against many specific values (like days of the week or color names). For range checks (>, <, >=), if-else is more appropriate. Switch does not support range comparisons directly.

### Q10. [Hard] What is the output of: if ([] == false) console.log('yes'); else console.log('no');

**A is correct.** With `==`, the array `[]` is converted to a string `""`, then to number `0`. `false` is also converted to `0`. `0 == 0` is `true`. However, `if ([])` would be truthy because [] is an object. This shows why == is confusing.

### Q11. [Hard] What happens if you write: if (x = 5) { ... }?

**B is correct.** `x = 5` is assignment, not comparison. It assigns 5 to x and evaluates to 5. Since 5 is truthy, the if block always runs. This is a common bug — use `===` for comparison.

### Q12. [Hard] In a switch, what is the default case?

**B is correct.** `default` runs when no case matches, similar to `else` in if-else. It is optional — you do not have to include it, but it is good practice for handling unexpected values.

### Q13. [Easy] What is the ternary operator syntax?

**B is correct.** The ternary syntax is `condition ? valueIfTrue : valueIfFalse`. The `?` separates the condition from the true value, and `:` separates the true and false values.

### Q14. [Hard] What is the output of: let x = 0; if (x !== false) console.log('yes'); else console.log('no');

**A is correct.** `!==` is strict inequality. `0 !== false` is `true` because 0 is a number and false is a boolean (different types). So 'yes' prints. Note: `0 != false` would be `false` because `==` converts types.

## Coding Challenges

### Challenge 1. Age Category Classifier

**Difficulty:** Easy

Write a function that takes an age and returns a category: 'Infant' (0-2), 'Child' (3-12), 'Teenager' (13-19), 'Adult' (20-59), 'Senior' (60+). Test with ages: 1, 8, 16, 35, 72.

**Constraints:**

- Use if-else. Handle invalid ages (negative or non-number).

**Sample input:**

```
classifyAge(16)
```

**Sample output:**

```
Teenager
```

**Solution:**

```javascript
function classifyAge(age) {
  if (typeof age !== 'number' || age < 0) return 'Invalid age';
  if (age <= 2) return 'Infant';
  if (age <= 12) return 'Child';
  if (age <= 19) return 'Teenager';
  if (age <= 59) return 'Adult';
  return 'Senior';
}
console.log(classifyAge(1));   // Infant
console.log(classifyAge(8));   // Child
console.log(classifyAge(16));  // Teenager
console.log(classifyAge(35));  // Adult
console.log(classifyAge(72));  // Senior
```

### Challenge 2. Simple Calculator Page

**Difficulty:** Easy

Build an HTML page with two number inputs, a dropdown for the operation (+, -, *, /), and a button. When clicked, perform the selected operation and display the result. Handle division by zero.

**Constraints:**

- Use switch for the operation. Show 'Cannot divide by zero' for 0 divisor.

**Sample input:**

```
10, 3, division
```

**Sample output:**

```
10 / 3 = 3.3333...
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <input type="number" id="a" placeholder="Number 1">
  <select id="op">
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
  </select>
  <input type="number" id="b" placeholder="Number 2">
  <button onclick="calc()">Calculate</button>
  <p id="result"></p>
  <script>
    function calc() {
      let a = Number(document.getElementById('a').value);
      let b = Number(document.getElementById('b').value);
      let op = document.getElementById('op').value;
      let result;
      switch (op) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/':
          if (b === 0) { result = 'Cannot divide by zero'; }
          else { result = a / b; }
          break;
      }
      document.getElementById('result').textContent = `${a} ${op} ${b} = ${result}`;
    }
  </script>
</body>
</html>
```

### Challenge 3. FizzBuzz on a Web Page

**Difficulty:** Medium

Build an HTML page with a number input. When a button is clicked, display FizzBuzz output from 1 to the entered number. For multiples of 3, show 'Fizz'. For multiples of 5, show 'Buzz'. For multiples of both, show 'FizzBuzz'. Style FizzBuzz in purple, Fizz in green, Buzz in blue, numbers in gray.

**Constraints:**

- Use a loop with if-else inside. Color-code each type.

**Sample input:**

```
User enters 15
```

**Sample output:**

```
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <input type="number" id="n" placeholder="Enter number">
  <button onclick="fizzBuzz()">Go</button>
  <div id="output"></div>
  <script>
    function fizzBuzz() {
      let n = Number(document.getElementById('n').value);
      let html = '';
      for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          html += '<span style="color:purple;font-weight:bold;">FizzBuzz</span> ';
        } else if (i % 3 === 0) {
          html += '<span style="color:green;">Fizz</span> ';
        } else if (i % 5 === 0) {
          html += '<span style="color:blue;">Buzz</span> ';
        } else {
          html += '<span style="color:gray;">' + i + '</span> ';
        }
      }
      document.getElementById('output').innerHTML = html;
    }
  </script>
</body>
</html>
```

### Challenge 4. Day Planner with Switch

**Difficulty:** Medium

Build a page that shows today's day and a schedule. Use switch with the current day to display different activities. Include fall-through for weekdays sharing activities. Style the page with different colors for weekdays vs weekends.

**Constraints:**

- Use new Date().getDay() and switch. Group weekdays and weekends.

**Sample input:**

```
(Uses current day automatically)
```

**Sample output:**

```
Today is Wednesday
Schedule: School 8am-3pm, Coding class 4pm-5pm, Homework 6pm-8pm
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <h1 id="day"></h1>
  <p id="schedule"></p>
  <script>
    let dayNum = new Date().getDay();
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    document.getElementById('day').textContent = 'Today is ' + days[dayNum];
    let schedule;
    switch (dayNum) {
      case 1: case 2: case 3: case 4: case 5:
        schedule = 'School 8am-3pm, Coding class 4pm-5pm, Homework 6pm-8pm';
        document.body.style.backgroundColor = '#ecf0f1';
        break;
      case 6:
        schedule = 'Sleep in! Project work 10am-12pm, Free time!';
        document.body.style.backgroundColor = '#d5f5e3';
        break;
      case 0:
        schedule = 'Family time, light study 5pm-6pm, relax!';
        document.body.style.backgroundColor = '#fdebd0';
        break;
    }
    document.getElementById('schedule').textContent = 'Schedule: ' + schedule;
  </script>
</body>
</html>
```

### Challenge 5. Form Validator

**Difficulty:** Hard

Build a registration form with name, email, age, and password fields. When submitted, validate: name must not be empty, email must contain '@', age must be 13-100, password must be 8+ characters with at least one number. Show all errors at once in red. If valid, show 'Registration successful!' in green.

**Constraints:**

- Check all fields and show all errors (do not stop at the first error).

**Sample input:**

```
Name: '', Email: 'test', Age: 10, Password: 'short'
```

**Sample output:**

```
Errors: Name is required. Email must contain @. Age must be 13-100. Password must be 8+ characters with a number.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <input id="name" placeholder="Name"><br>
  <input id="email" placeholder="Email"><br>
  <input id="age" type="number" placeholder="Age"><br>
  <input id="pass" type="password" placeholder="Password"><br>
  <button onclick="validate()">Register</button>
  <div id="errors"></div>
  <script>
    function validate() {
      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      let age = Number(document.getElementById('age').value);
      let pass = document.getElementById('pass').value;
      let errors = [];
      if (name.trim() === '') errors.push('Name is required.');
      if (!email.includes('@')) errors.push('Email must contain @.');
      if (age < 13 || age > 100) errors.push('Age must be 13-100.');
      if (pass.length < 8) {
        errors.push('Password must be 8+ characters.');
      } else if (!/[0-9]/.test(pass)) {
        errors.push('Password must contain at least one number.');
      }
      let el = document.getElementById('errors');
      if (errors.length > 0) {
        el.innerHTML = errors.map(e => '<p style="color:red;">' + e + '</p>').join('');
      } else {
        el.innerHTML = '<p style="color:green;font-weight:bold;">Registration successful!</p>';
      }
    }
  </script>
</body>
</html>
```

### Challenge 6. Interactive BMI Calculator

**Difficulty:** Hard

Build a BMI calculator page. User enters weight (kg) and height (cm). Calculate BMI = weight / (height/100)^2. Display the BMI value and category: Underweight (<18.5), Normal (18.5-24.9), Overweight (25-29.9), Obese (30+). Color-code the result. Also show a health tip for each category.

**Constraints:**

- Validate inputs. Show 2 decimal places. Use if-else for categories.

**Sample input:**

```
Weight: 70, Height: 175
```

**Sample output:**

```
BMI: 22.86 - Normal weight (green)
Tip: Great job! Maintain a balanced diet and regular exercise.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <h2>BMI Calculator</h2>
  <input id="weight" type="number" placeholder="Weight (kg)"><br>
  <input id="height" type="number" placeholder="Height (cm)"><br>
  <button onclick="calcBMI()">Calculate</button>
  <h3 id="result"></h3>
  <p id="tip"></p>
  <script>
    function calcBMI() {
      let weight = Number(document.getElementById('weight').value);
      let height = Number(document.getElementById('height').value);
      let resultEl = document.getElementById('result');
      let tipEl = document.getElementById('tip');
      if (weight <= 0 || height <= 0) {
        resultEl.textContent = 'Please enter valid values.';
        resultEl.style.color = 'red';
        tipEl.textContent = '';
        return;
      }
      let bmi = weight / ((height / 100) ** 2);
      let category, color, tip;
      if (bmi < 18.5) {
        category = 'Underweight';
        color = '#3498db';
        tip = 'Consider eating more nutritious meals and consulting a doctor.';
      } else if (bmi < 25) {
        category = 'Normal weight';
        color = '#2ecc71';
        tip = 'Great job! Maintain a balanced diet and regular exercise.';
      } else if (bmi < 30) {
        category = 'Overweight';
        color = '#f39c12';
        tip = 'Try increasing physical activity and reducing processed food.';
      } else {
        category = 'Obese';
        color = '#e74c3c';
        tip = 'Please consult a healthcare professional for guidance.';
      }
      resultEl.textContent = `BMI: ${bmi.toFixed(2)} - ${category}`;
      resultEl.style.color = color;
      tipEl.textContent = 'Tip: ' + tip;
    }
  </script>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/conditional-statements/*
