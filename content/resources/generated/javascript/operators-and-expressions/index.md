---
title: "JavaScript Operators and Expressions - == vs ===, Truthy Falsy, Ternary | Modern Age Coders"
description: "Master JavaScript operators: arithmetic, comparison (== vs ===), logical, ternary, nullish coalescing, optional chaining, truthy/falsy values, and operator precedence. 57 practice questions."
slug: operators-and-expressions
canonical: https://learn.modernagecoders.com/resources/javascript/operators-and-expressions/
category: "JavaScript"
keywords: ["javascript operators", "== vs === javascript", "truthy falsy javascript", "ternary operator javascript", "nullish coalescing", "optional chaining", "javascript operator precedence", "logical operators javascript"]
---
# Operators and Expressions

**Difficulty:** Beginner  
**Reading time:** 25 min  
**Chapter:** 4  
**Practice questions:** 57

## What Are Operators and Expressions?

An **operator** is a symbol that tells JavaScript to perform a specific operation on values. You have already used operators: `+` to add numbers, `=` to assign values, and `===` to compare. An **expression** is any piece of code that produces a value: `5 + 3` is an expression (it produces 8), `age >= 18` is an expression (it produces true or false), and even just `42` by itself is an expression.

JavaScript has many operators grouped into categories: arithmetic, assignment, comparison, logical, and some modern ones like nullish coalescing (`??`) and optional chaining (`?.`). This chapter covers all of them, with special focus on the tricky parts that trip up beginners — especially `==` vs `===` and truthy/falsy values.

## Why Do Operators Matter?

### 1. == vs === Is the Most Common JavaScript Bug

The loose equality operator `==` performs type coercion, leading to surprises like `0 == ''` being true and `'' == false` being true. Understanding when and why this happens — and always using `===` instead — prevents an entire category of bugs.

### 2. Truthy/Falsy Values Control Your If Statements

In JavaScript, `if (value)` does not just check for `true` or `false`. It checks if the value is **truthy** or **falsy**. Since `0`, `""`, `null`, `undefined`, and `NaN` are all falsy, your conditional logic can behave unexpectedly if you do not understand this concept.

### 3. Modern Operators Save You Lines of Code

The nullish coalescing operator (`??`) and optional chaining (`?.`) were added in recent JavaScript versions. They replace verbose `if` checks with elegant one-liners. Professional codebases use them constantly.

### 4. Short-Circuit Evaluation Is Used Everywhere

`&&` and `||` do not just return true/false — they return actual values. This enables patterns like `name || "Guest"` (default value) and `isLoggedIn && showDashboard()` (conditional execution) that you will see in every JavaScript project.

## Detailed Explanation

### 1. Arithmetic Operators

These perform mathematical operations:

OperatorNameExampleResult`+`Addition`10 + 3``13``-`Subtraction`10 - 3``7``*`Multiplication`10 * 3``30``/`Division`10 / 3``3.333...``%`Remainder (Modulo)`10 % 3``1``**`Exponentiation`2 ** 3``8`

Unlike Python, JavaScript has only one division operator (`/`) that always gives a decimal result. There is no separate floor division. Use `Math.floor()` if you need integer division.

The `+` operator is special: with two numbers it adds, but if either operand is a string, it concatenates. This dual behavior is the source of many bugs.

### 2. Assignment Operators

The basic assignment is `=`. Compound assignment operators combine an operation with assignment:

OperatorExampleSame As`+=``x += 5``x = x + 5``-=``x -= 5``x = x - 5``*=``x *= 5``x = x * 5``/=``x /= 5``x = x / 5``%=``x %= 5``x = x % 5``**=``x **= 2``x = x ** 2`

Also: increment `x++` (same as `x = x + 1`) and decrement `x--` (same as `x = x - 1`). There is a difference between `x++` (returns old value, then increments) and `++x` (increments, then returns new value).

### 3. Comparison Operators: == vs === (CRITICAL)

This is one of the most important topics in all of JavaScript.

OperatorNameExampleResult`==`Loose equality`5 == '5'``true``===`Strict equality`5 === '5'``false``!=`Loose inequality`5 != '5'``false``!==`Strict inequality`5 !== '5'``true``>`Greater than`5 > 3``true``<`Less than`5 < 3``false``>=`Greater or equal`5 >= 5``true``<=`Less or equal`5 <= 3``false`

`==` (loose equality) converts types before comparing. `===` (strict equality) checks both value AND type. The rule is simple: **always use `===` and `!==`**. Never use `==` unless you specifically want type coercion.

### 4. Logical Operators and Short-Circuit Evaluation

OperatorNameReturns`&&`Logical ANDFirst falsy value, or last value if all truthy`||`Logical ORFirst truthy value, or last value if all falsy`!`Logical NOTOpposite boolean value

The key insight: `&&` and `||` do not always return `true` or `false` — they return one of the actual operand values. This enables powerful patterns:

```
// Default values with ||
let name = userInput || "Guest";  // if userInput is falsy, use "Guest"

// Conditional execution with &&
isLoggedIn && showDashboard();  // only runs showDashboard() if isLoggedIn is truthy

// Double NOT for explicit boolean conversion
let exists = !!value;  // converts any value to true/false
```

### 5. Ternary Operator

The ternary operator is a compact if-else expression:

```
condition ? valueIfTrue : valueIfFalse
```

Example: `let status = age >= 18 ? "adult" : "minor";`

This is equivalent to an if-else but in a single expression, which makes it useful for assigning values or embedding logic in template literals.

### 6. Nullish Coalescing Operator (??)

The `??` operator returns the right side only when the left side is `null` or `undefined`. It is different from `||` which returns the right side for ANY falsy value.

```
let count = 0;
console.log(count || 10);   // 10 (0 is falsy, so || gives default)
console.log(count ?? 10);   // 0 (?? only checks for null/undefined)
```

Use `??` when `0`, `""`, or `false` are valid values that you want to keep.

### 7. Optional Chaining (?.)

The `?.` operator lets you safely access nested object properties without checking each level for null/undefined.

```
let user = { profile: { name: "Priya" } };
console.log(user.profile.name);     // "Priya"
console.log(user.address?.city);    // undefined (no error!)
console.log(user.address.city);     // TypeError! (without ?.)
```

### 8. Truthy and Falsy Values

In JavaScript, every value is either **truthy** (treated as true in boolean context) or **falsy** (treated as false). The six falsy values are:

- `false`
- `0` (and `-0`)
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

**Everything else is truthy**, including: `"0"`, `" "`, `[]`, `{}`, `"false"`, and any non-zero number.

### 9. Operator Precedence

When multiple operators appear in one expression, JavaScript follows this priority (highest to lowest):

1. `()` — Parentheses
2. `!`, `++`, `--`, unary `+`/`-`, `typeof` — Unary operators
3. `**` — Exponentiation
4. `*`, `/`, `%` — Multiplication, division, remainder
5. `+`, `-` — Addition, subtraction
6. `<`, `>`, `<=`, `>=` — Comparison
7. `===`, `!==`, `==`, `!=` — Equality
8. `&&` — Logical AND
9. `||` — Logical OR
10. `??` — Nullish coalescing
11. `? :` — Ternary
12. `=`, `+=`, `-=`, etc. — Assignment

When in doubt, use parentheses to make your intent clear.

## Code Examples

### Arithmetic and the + String Trap

```javascript
// Normal arithmetic
console.log(10 + 5);    // 15
console.log(10 - 5);    // 5
console.log(10 * 5);    // 50
console.log(10 / 3);    // 3.3333...
console.log(10 % 3);    // 1 (remainder)
console.log(2 ** 10);   // 1024

// The + trap with strings
console.log(5 + 3);         // 8 (number + number = addition)
console.log("5" + 3);       // "53" (string + number = concatenation)
console.log(5 + "3");       // "53" (number + string = concatenation)
console.log(5 + 3 + "px"); // "8px" (5+3=8, then 8+"px"="8px")
console.log("$" + 5 + 3);  // "$53" ("$"+5="$5", then "$5"+3="$53")
```

Arithmetic operators work as expected with numbers. The danger is `+`: if either side is a string, JavaScript switches to concatenation. Notice how `5 + 3 + "px"` gives `"8px"` (addition first, then concatenation), but `"$" + 5 + 3` gives `"$53"` (concatenation from the start). The order and types matter.

**Output:**

```
15
5
50
3.3333333333333335
1
1024
8
53
53
8px
$53
```

### == vs === (The Most Important Comparison)

```javascript
// Loose equality (==) converts types
console.log(5 == "5");       // true (string converted to number)
console.log(0 == false);     // true (false converted to 0)
console.log("" == false);    // true (both become 0)
console.log(null == undefined); // true (special rule)
console.log(0 == "");        // true (empty string becomes 0)

// Strict equality (===) checks type AND value
console.log(5 === "5");      // false (number vs string)
console.log(0 === false);    // false (number vs boolean)
console.log("" === false);   // false (string vs boolean)
console.log(null === undefined); // false (different types)
console.log(0 === "");       // false (number vs string)

// The confusing matrix with ==
console.log("0" == false);   // true
console.log("0" == 0);       // true
console.log(false == 0);     // true
console.log("0" == "");      // false! (this breaks the pattern)
```

`==` tries to convert operands to the same type before comparing, which leads to confusing results. `===` never converts types — if the types are different, it immediately returns false. The last line shows that `==` is not even consistent: `"0" == false` is true and `"" == false` is true, but `"0" == ""` is false. This inconsistency is why you should **always use ===**.

**Output:**

```
true
true
true
true
true
false
false
false
false
false
true
true
true
false
```

### Logical Operators and Short-Circuit Evaluation

```javascript
// && returns first falsy value, or last value if all truthy
console.log("Aarav" && "Priya");    // "Priya" (both truthy, returns last)
console.log(0 && "Priya");          // 0 (first is falsy, returns it)
console.log("Aarav" && 0 && "Hi");  // 0 (stops at first falsy)

// || returns first truthy value, or last value if all falsy
console.log("" || "Guest");          // "Guest" (first is falsy, tries second)
console.log("Rohan" || "Guest");    // "Rohan" (first is truthy, returns it)
console.log(0 || "" || "Default");  // "Default" (first truthy value)
console.log(0 || "" || null);       // null (all falsy, returns last)

// Practical patterns
let username = "" || "Anonymous";     // "Anonymous"
let score = 0 || 100;                // 100 (BUG! 0 was a valid score)

// ! (NOT) converts to boolean and flips
console.log(!true);     // false
console.log(!0);        // true (0 is falsy)
console.log(!"hello");  // false (non-empty string is truthy)
console.log(!!"hello"); // true (double NOT = convert to boolean)
```

`&&` stops at the first falsy value (short-circuits). `||` stops at the first truthy value. This enables default value patterns: `name || "Guest"` provides a fallback. But be careful: `0 || 100` gives 100 even though 0 might be a valid value. For that case, use `??` instead. Double NOT (`!!`) is a common way to convert any value to a boolean.

**Output:**

```
Priya
0
0
Guest
Rohan
Default
null
false
true
false
true
```

### Ternary Operator and Practical Uses

```javascript
let age = 16;

// Basic ternary
let status = age >= 18 ? "adult" : "minor";
console.log(status);  // "minor"

// Ternary in template literals
console.log(`Vikram is ${age >= 18 ? 'an adult' : 'a minor'}`);

// Ternary for setting classes (common in web dev)
let theme = "dark";
let className = theme === "dark" ? "bg-dark text-white" : "bg-light text-dark";
console.log(className);

// Nested ternary (readable but do not overdo it)
let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" : "F";
console.log(`Score: ${score}, Grade: ${grade}`);

// Using ternary in HTML updates
// document.getElementById("status").textContent = isOnline ? "Online" : "Offline";
```

The ternary operator `condition ? ifTrue : ifFalse` is a compact if-else. It works as an expression (returns a value), so you can use it inside assignments, template literals, and function arguments. Nested ternaries work for multiple conditions like grading, but if it gets too complex, switch to if-else for readability.

**Output:**

```
minor
Vikram is a minor
bg-dark text-white
Score: 85, Grade: B
```

### Nullish Coalescing (??) vs Logical OR (||)

```javascript
// || treats ALL falsy values as "missing"
let count1 = 0;
console.log(count1 || 10);  // 10 (BUG: 0 is valid but treated as falsy)

let text1 = "";
console.log(text1 || "default");  // "default" (BUG: empty string might be valid)

// ?? only treats null and undefined as "missing"
let count2 = 0;
console.log(count2 ?? 10);  // 0 (correct: 0 is kept)

let text2 = "";
console.log(text2 ?? "default");  // "" (correct: empty string is kept)

let data = null;
console.log(data ?? "fallback");  // "fallback" (null triggers ??)

let nothing = undefined;
console.log(nothing ?? "fallback");  // "fallback" (undefined triggers ??)

// Real-world example
let settings = { volume: 0, name: "" };
let volume = settings.volume ?? 50;  // 0 (preserves the setting)
let name = settings.name ?? "User";  // "" (preserves empty name)
console.log(volume, name);
```

`||` returns the right side for ANY falsy value (0, "", null, undefined, NaN, false). `??` returns the right side ONLY for `null` or `undefined`. This distinction is crucial: if a user intentionally sets volume to 0 or clears their name to an empty string, `||` would override their choice, but `??` would respect it.

**Output:**

```
10
default
0

fallback
fallback
0 
```

### Optional Chaining (?.) for Safe Property Access

```javascript
let student = {
  name: "Ananya",
  address: {
    city: "Mumbai"
  }
};

// Normal access (works fine)
console.log(student.name);           // "Ananya"
console.log(student.address.city);   // "Mumbai"

// Accessing something that does not exist
// console.log(student.phone.number);  // TypeError: Cannot read property 'number' of undefined

// Safe access with ?.
console.log(student.phone?.number);   // undefined (no error!)
console.log(student.address?.city);   // "Mumbai" (works normally when path exists)
console.log(student.grades?.math);    // undefined

// Works with methods too
let arr = [1, 2, 3];
console.log(arr.find?.(x => x > 2));  // 3

let obj = {};
console.log(obj.greet?.());           // undefined (method does not exist)

// Combining with ??
let city = student.phone?.city ?? "Unknown city";
console.log(city);  // "Unknown city"
```

Without `?.`, accessing a property on `undefined` or `null` crashes your program. `?.` checks if the left side is null/undefined, and if so, returns `undefined` instead of throwing an error. You can chain it: `user?.address?.city?.zipCode`. Combining with `??` lets you provide default values: `user?.name ?? "Anonymous"`.

**Output:**

```
Ananya
Mumbai
undefined
Mumbai
undefined
3
undefined
Unknown city
```

### Truthy/Falsy Values: Complete Guide

```javascript
// All 6 falsy values
console.log("=== Falsy values ===");
console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(-0));         // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

// Surprising truthy values
console.log("\n=== Truthy (surprising) ===");
console.log(Boolean("0"));        // true! (non-empty string)
console.log(Boolean(" "));        // true! (space is not empty)
console.log(Boolean("false"));    // true! (the word false is a non-empty string)
console.log(Boolean([]));         // true! (empty array)
console.log(Boolean({}));         // true! (empty object)
console.log(Boolean(-1));         // true! (any non-zero number)
console.log(Boolean(Infinity));   // true!

// Practical: checking if a value exists
let input = "";
if (input) {
  console.log("Has value");
} else {
  console.log("Empty or missing");  // This runs (empty string is falsy)
}
```

Memorize the six falsy values: `false`, `0`, `""`, `null`, `undefined`, `NaN`. Everything else is truthy — including things that look empty like `"0"`, `[]`, and `{}`. This matters because `if (value)` checks truthiness, not just `true/false`.

**Output:**

```
=== Falsy values ===
false
false
false
false
false
false
false

=== Truthy (surprising) ===
true
true
true
true
true
true
true
Empty or missing
```

### Increment, Decrement, and Prefix vs Postfix

```javascript
// Basic increment and decrement
let a = 5;
a++;  // a is now 6
console.log(a);  // 6
a--;  // a is now 5 again
console.log(a);  // 5

// Postfix (x++): returns OLD value, then increments
let x = 10;
let y = x++;   // y gets 10 (old value), THEN x becomes 11
console.log("x:", x, "y:", y);  // x: 11, y: 10

// Prefix (++x): increments FIRST, then returns NEW value
let m = 10;
let n = ++m;   // m becomes 11 FIRST, then n gets 11
console.log("m:", m, "n:", n);  // m: 11, n: 11

// This matters in expressions
let count = 0;
console.log(count++);  // 0 (returns old value)
console.log(count);    // 1 (incremented after)
console.log(++count);  // 2 (increments first, returns new value)
```

With `x++` (postfix), the old value is used in the expression, then x is incremented. With `++x` (prefix), x is incremented first, then the new value is used. This difference matters when the result is assigned to another variable or used in an expression.

**Output:**

```
6
5
x: 11 y: 10
m: 11 n: 11
0
1
2
```

## Common Mistakes

### Using == Instead of ===

**Wrong:**

```
let input = "0";
if (input == false) {
  console.log("Input is false");  // This runs! "0" == false is true
}
```

No error, but unexpected behavior. '0' is a valid input that should not be treated as false.

**Correct:**

```
let input = "0";
if (input === false) {
  console.log("Input is false");  // Does NOT run (correct)
}
if (input === "") {
  console.log("Input is empty");  // Does NOT run (correct)
}
```

`==` converts types: `"0"` becomes 0, `false` becomes 0, and `0 == 0` is true. With `===`, `"0"` (string) and `false` (boolean) are different types, so the comparison is immediately false. Always use `===`.

### Using || for Default Values When 0 Is Valid

**Wrong:**

```
let volume = 0;  // User set volume to 0 (muted)
let actualVolume = volume || 50;
console.log(actualVolume);  // 50 (BUG: user wanted 0!)
```

No error, but the user's intended value of 0 is overwritten because 0 is falsy.

**Correct:**

```
let volume = 0;
let actualVolume = volume ?? 50;
console.log(actualVolume);  // 0 (correct: ?? only checks null/undefined)
```

`||` returns the right side for any falsy value, including `0`, `""`, and `false`. `??` only returns the right side for `null` or `undefined`. When 0, empty string, or false are valid values, use `??` instead of `||`.

### Confusing = with === in Conditions

**Wrong:**

```
let score = 100;
if (score = 50) {  // ASSIGNMENT, not comparison!
  console.log("Score is 50");  // Always runs!
}
console.log(score);  // 50 (score got changed!)
```

No error. score is reassigned to 50, and since 50 is truthy, the if block runs.

**Correct:**

```
let score = 100;
if (score === 50) {  // COMPARISON
  console.log("Score is 50");  // Does not run (correct)
}
console.log(score);  // 100 (unchanged)
```

`=` is assignment (stores a value). `===` is comparison (checks equality). In the wrong code, `score = 50` assigns 50 to score and the if evaluates 50, which is truthy. This is a very common bug that is hard to spot.

### Postfix vs Prefix Confusion

**Wrong:**

```
let count = 5;
let result = count++;
console.log(result);  // 5 (expected 6!)
```

No error, but result is 5 instead of 6.

**Correct:**

```
let count = 5;
let result = ++count;
console.log(result);  // 6 (prefix increments first)
```

With postfix `count++`, the old value (5) is returned first, then count is incremented to 6. With prefix `++count`, count is incremented to 6 first, then the new value (6) is returned. If you need the updated value immediately, use prefix.

## Summary

- Arithmetic operators: +, -, *, /, % (remainder), ** (power). The + operator concatenates if either side is a string.
- Assignment operators: =, +=, -=, *=, /=, %=, **=. x += 5 is shorthand for x = x + 5.
- CRITICAL: Always use === (strict equality) instead of == (loose equality). == performs type coercion that leads to confusing results.
- Logical AND (&&) returns the first falsy value or the last value. Logical OR (||) returns the first truthy value or the last value.
- Short-circuit: || is used for default values (name || 'Guest'). && is used for conditional execution (isValid && submit()).
- The ternary operator (condition ? a : b) is a compact if-else expression. Use it for simple conditions, not complex logic.
- Nullish coalescing (??) returns the right side only for null/undefined. Use it instead of || when 0, '', or false are valid values.
- Optional chaining (?.) safely accesses properties that might not exist, returning undefined instead of throwing an error.
- The 6 falsy values: false, 0, '' (empty string), null, undefined, NaN. Everything else is truthy (including '0', [], {}).
- Operator precedence: () > unary > ** > */% > +- > comparisons > equality > && > || > ?? > ternary > assignment.
- Prefix ++x increments first then returns. Postfix x++ returns first then increments. The difference matters in assignments.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/javascript/operators-and-expressions/*
*Practice questions: https://learn.modernagecoders.com/resources/javascript/operators-and-expressions/practice/*
