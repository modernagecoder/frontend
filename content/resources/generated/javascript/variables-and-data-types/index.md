---
title: "JavaScript Variables and Data Types - let, const, var, typeof, Type Coercion | Modern Age Coders"
description: "Master JavaScript variables with let, const, and var. Learn all 7 primitive data types, typeof operator, type coercion, NaN, template literals, and type conversion. Includes 58 practice questions."
slug: variables-and-data-types
canonical: https://learn.modernagecoders.com/resources/javascript/variables-and-data-types/
category: "JavaScript"
keywords: ["javascript variables", "let const var javascript", "javascript data types", "typeof javascript", "type coercion javascript", "NaN javascript", "template literals", "javascript primitive types", "javascript for beginners"]
---
# Variables and Data Types

**Difficulty:** Beginner  
**Reading time:** 25 min  
**Chapter:** 3  
**Practice questions:** 58

## What Are Variables and Data Types?

A **variable** is a named container that stores a value. Think of it like a labeled box: the label is the variable name, and the thing inside the box is the value. You can put something in the box, look at what is inside, replace it with something else, or use it in calculations.

In JavaScript, you create variables using three keywords: `let`, `const`, and `var`.

```
let age = 15;         // a variable that can change
const name = "Aarav"; // a variable that cannot change
var score = 100;      // the old way (avoid in modern JS)
```

A **data type** tells JavaScript what kind of value is stored in a variable. Is it a number? A piece of text? A true/false value? JavaScript has **7 primitive data types** and one complex type (object). Understanding types is critical because JavaScript handles different types differently — and sometimes in surprising ways.

## Why Do Variables and Data Types Matter?

### 1. Every Program Needs to Store Data

Whether you are building a calculator, a game, or a form — you need to store information: the user's name, the current score, the number of lives left. Variables make this possible. Without variables, your program would have no memory.

### 2. let vs const vs var: Getting It Wrong Causes Bugs

Using `var` when you should use `let` can cause subtle bugs because of how `var` handles scope. Using `let` when you should use `const` means your code does not communicate intent clearly. Knowing which one to use is a fundamental JavaScript skill.

### 3. Type Coercion Is JavaScript's Biggest Trap

JavaScript automatically converts between types in ways that surprise even experienced developers. `"5" + 3` gives `"53"` (string), but `"5" - 3` gives `2` (number). Understanding type coercion prevents hours of debugging mysterious results.

### 4. Interviews Love This Topic

Questions about `typeof null`, `NaN === NaN`, the difference between `==` and `===`, and type coercion quirks appear in virtually every JavaScript interview. Mastering this chapter gives you a significant advantage.

## Detailed Explanation

### 1. Declaring Variables: let, const, var

#### let — Use for Values That Change

`let` declares a variable whose value can be reassigned later. Use `let` when the value will change, like a counter, a score, or user input.

```
let score = 0;
score = 10;    // OK: let allows reassignment
score = 20;    // OK: can change as many times as needed
```

#### const — Use for Values That Stay the Same

`const` declares a **constant** — a variable that cannot be reassigned after it is created. Use `const` for values that should never change, like configuration settings, mathematical constants, or DOM element references.

```
const PI = 3.14159;
PI = 3;        // ERROR: Assignment to constant variable
```

**Important:** `const` prevents reassignment, not mutation. If a `const` holds an object or array, you can still change the contents — you just cannot point the variable to a completely different object.

#### var — The Old Way (Avoid It)

`var` was the only way to declare variables before ES6 (2015). It still works, but it has two problems: it is **function-scoped** (not block-scoped like `let` and `const`), and it is **hoisted** (the declaration is moved to the top of the function). Both of these behaviors lead to bugs. In modern JavaScript, always prefer `let` and `const`.

#### The Rule of Thumb

Start with `const`. If you realize you need to reassign the variable, change it to `let`. Never use `var` in new code.

### 2. The 7 Primitive Data Types

JavaScript has seven **primitive** (basic) data types:

TypeExampletypeof Returns**String**`"Hello"`, `'World'`, ``Hi```"string"`**Number**`42`, `3.14`, `-7`, `Infinity`, `NaN``"number"`**Boolean**`true`, `false``"boolean"`**undefined**`undefined``"undefined"`**null**`null``"object"` (bug!)**Symbol**`Symbol("id")``"symbol"`**BigInt**`9007199254740991n``"bigint"`

Plus one complex type: **Object** (includes arrays, functions, dates, etc.).

### 3. The typeof Operator

`typeof` returns a string telling you the type of a value. It works on any value or variable.

```
typeof 42          // "number"
typeof "hello"     // "string"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object"   <-- FAMOUS BUG
typeof {}          // "object"
typeof []          // "object"   <-- arrays are objects
typeof function(){} // "function"
```

Two gotchas to memorize: `typeof null` is `"object"` (a bug from 1995 that will never be fixed), and `typeof []` is also `"object"` (use `Array.isArray()` to check for arrays).

### 4. Type Coercion (Implicit Conversion)

JavaScript automatically converts values between types in certain situations. This is called **type coercion** and it is one of the most confusing parts of the language.

#### String Coercion (with +)

When you use `+` with a string and a non-string, JavaScript converts the non-string to a string and concatenates.

```
"5" + 3     // "53" (number 3 becomes string "3")
"5" + true  // "5true"
"5" + null  // "5null"
```

#### Number Coercion (with -, *, /, ==)

The `-`, `*`, and `/` operators only work with numbers, so JavaScript converts strings to numbers.

```
"5" - 3     // 2 (string "5" becomes number 5)
"5" * 2     // 10
"10" / "2"  // 5
true + 1    // 2 (true becomes 1)
false + 1   // 1 (false becomes 0)
"" - 1      // -1 (empty string becomes 0)
```

### 5. NaN and isNaN()

`NaN` stands for **Not a Number**. It is the result of invalid math operations.

```
"hello" * 2    // NaN
Math.sqrt(-1)  // NaN
undefined + 1  // NaN
```

The weird part: `typeof NaN` is `"number"` (yes, "Not a Number" is technically a number), and `NaN === NaN` is `false` (NaN is not equal to itself). Use `Number.isNaN()` to check for NaN.

### 6. Template Literals

Template literals use backticks (```) instead of quotes and allow you to embed expressions using `${}`. They are much cleaner than string concatenation with `+`.

```
let name = "Priya";
let age = 16;

// Old way (concatenation)
console.log("My name is " + name + " and I am " + age + " years old.");

// New way (template literal)
console.log(`My name is ${name} and I am ${age} years old.`);
```

You can put any expression inside `${}`: variables, math, function calls, even ternary operators.

### 7. Type Conversion (Explicit)

Sometimes you need to convert types manually. Here are the main conversion functions:

#### String to Number

```
Number("42")       // 42
Number("")         // 0
Number("hello")    // NaN
Number(true)       // 1
Number(false)      // 0
Number(null)       // 0
Number(undefined)  // NaN

parseInt("42px")   // 42 (stops at non-digit)
parseFloat("3.14") // 3.14
+"42"              // 42 (unary plus shortcut)
```

#### Number to String

```
String(42)         // "42"
(42).toString()    // "42"
42 + ""            // "42" (concatenation trick)
```

#### To Boolean

JavaScript has exactly six **falsy** values that convert to `false`: `0`, `""` (empty string), `null`, `undefined`, `NaN`, and `false`. Everything else is **truthy**.

```
Boolean(0)         // false
Boolean("")        // false
Boolean(null)      // false
Boolean(undefined) // false
Boolean(NaN)       // false
Boolean("0")       // true (non-empty string!)
Boolean(" ")       // true (non-empty string!)
Boolean([])        // true (empty array is truthy!)
Boolean({})        // true (empty object is truthy!)
```

## Code Examples

### let vs const vs var

```javascript
// let: can be reassigned
let score = 0;
console.log(score);  // 0
score = 50;
console.log(score);  // 50

// const: cannot be reassigned
const PI = 3.14159;
console.log(PI);     // 3.14159
// PI = 3;  // TypeError: Assignment to constant variable

// const with objects: contents CAN change
const student = { name: "Aarav", age: 15 };
student.age = 16;    // OK! Changing a property is fine
console.log(student.age);  // 16
// student = {};  // TypeError: can't reassign the variable itself

// var: function-scoped (avoid in modern JS)
if (true) {
  var x = 10;   // var leaks out of the if block
  let y = 20;   // let stays inside the if block
}
console.log(x);  // 10 (var leaked!)
// console.log(y);  // ReferenceError: y is not defined
```

`let` allows reassignment. `const` blocks reassignment but allows mutation of objects and arrays. `var` is function-scoped, meaning it leaks out of `if/for` blocks — this is why `let` and `const` were introduced as replacements.

**Output:**

```
0
50
3.14159
16
10
```

### All 7 Primitive Types in Action

```javascript
// String
let name = "Priya";
console.log(typeof name);        // "string"

// Number (integers AND decimals)
let age = 15;
let price = 99.99;
console.log(typeof age);         // "number"
console.log(typeof price);       // "number"
console.log(typeof Infinity);    // "number"
console.log(typeof NaN);         // "number" (yes, really!)

// Boolean
let isStudent = true;
console.log(typeof isStudent);   // "boolean"

// undefined (variable declared but no value assigned)
let x;
console.log(x);                  // undefined
console.log(typeof x);           // "undefined"

// null (intentional "no value")
let data = null;
console.log(typeof data);        // "object" (famous bug!)

// Symbol (unique identifier)
let id = Symbol("userId");
console.log(typeof id);          // "symbol"

// BigInt (very large numbers)
let big = 9007199254740991n;
console.log(typeof big);         // "bigint"
```

JavaScript has 7 primitive types. `String` holds text. `Number` holds both integers and decimals (JavaScript has no separate int/float types). `Boolean` is true/false. `undefined` means no value was assigned. `null` means intentionally empty. `Symbol` creates unique identifiers. `BigInt` handles numbers larger than Number can safely represent.

**Output:**

```
string
number
number
number
number
boolean
undefined
undefined
object
symbol
bigint
```

### Type Coercion Surprises

```javascript
// String + anything = String (concatenation)
console.log("5" + 3);         // "53"
console.log("5" + true);      // "5true"
console.log("5" + null);      // "5null"
console.log("5" + undefined); // "5undefined"

// Math operators convert to Number
console.log("5" - 3);         // 2
console.log("5" * 2);         // 10
console.log("10" / "2");      // 5

// Weird coercions
console.log(true + true);     // 2 (true = 1)
console.log(true + false);    // 1 (false = 0)
console.log("" - 1);          // -1 ("" = 0)
console.log(null + 1);        // 1 (null = 0)
console.log(undefined + 1);   // NaN

// The tricky ones
console.log("" == false);     // true
console.log("0" == false);    // true
console.log("" == 0);         // true
console.log(null == undefined); // true
console.log(null == 0);       // false (special case!)
```

The `+` operator prefers string concatenation when a string is involved. Other math operators (`-`, `*`, `/`) always convert to numbers. `true` becomes 1, `false` and empty string become 0, `null` becomes 0 in math but behaves specially with `==`. `undefined` becomes `NaN` in math. These quirks are why `===` (strict equality) is preferred over `==`.

**Output:**

```
53
5true
5null
5undefined
2
10
5
2
1
-1
1
NaN
true
true
true
true
false
```

### NaN: The Strangest Number

```javascript
// Ways to get NaN
console.log("hello" * 2);     // NaN
console.log(undefined + 1);   // NaN
console.log(Math.sqrt(-1));   // NaN
console.log(0 / 0);          // NaN
console.log(parseInt("abc")); // NaN

// NaN quirks
console.log(typeof NaN);       // "number" (!)
console.log(NaN === NaN);      // false (!)
console.log(NaN == NaN);       // false (!)
console.log(NaN !== NaN);      // true

// How to check for NaN
console.log(isNaN(NaN));           // true
console.log(isNaN("hello"));       // true (converts first)
console.log(Number.isNaN(NaN));    // true
console.log(Number.isNaN("hello")); // false (strict, no conversion)
```

`NaN` is the only JavaScript value not equal to itself. `typeof NaN` returns `"number"` because NaN is technically a special IEEE 754 float value. The global `isNaN()` converts the argument first (so `isNaN("hello")` is true because `Number("hello")` is NaN). `Number.isNaN()` is stricter — it only returns true for the actual NaN value.

**Output:**

```
NaN
NaN
NaN
NaN
NaN
number
false
false
true
true
true
true
false
```

### Template Literals and String Interpolation

```javascript
let name = "Rohan";
let age = 16;
let subject = "Computer Science";

// Old way: clunky concatenation
let msg1 = "Hi, I am " + name + ". I am " + age + " years old. I study " + subject + ".";
console.log(msg1);

// New way: clean template literals
let msg2 = `Hi, I am ${name}. I am ${age} years old. I study ${subject}.`;
console.log(msg2);

// Expressions inside ${}
console.log(`Next year I will be ${age + 1}.`);
console.log(`Is teen? ${age >= 13 && age <= 19}`);
console.log(`Name in caps: ${name.toUpperCase()}`);

// Multi-line strings (template literals preserve line breaks)
let poem = `Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`;
console.log(poem);
```

Template literals use backticks (```) and `${}` for embedding expressions. They are far more readable than concatenation with `+`. You can put any expression inside `${}`: variables, math, method calls, comparisons. Template literals also support multi-line strings without needing `\n`.

**Output:**

```
Hi, I am Rohan. I am 16 years old. I study Computer Science.
Hi, I am Rohan. I am 16 years old. I study Computer Science.
Next year I will be 17.
Is teen? true
Name in caps: ROHAN
Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.
```

### Type Conversion Functions

```javascript
// String to Number
console.log(Number("42"));         // 42
console.log(Number(""));           // 0
console.log(Number("hello"));      // NaN
console.log(Number(true));         // 1
console.log(Number(false));        // 0
console.log(Number(null));         // 0
console.log(Number(undefined));    // NaN

// parseInt and parseFloat
console.log(parseInt("42px"));     // 42
console.log(parseInt("3.99"));     // 3 (drops decimal)
console.log(parseFloat("3.14"));   // 3.14
console.log(parseInt("abc"));      // NaN

// Unary + (shortcut for Number())
console.log(+"42");                // 42
console.log(+"");                  // 0
console.log(+true);                // 1

// Number to String
console.log(String(42));           // "42"
console.log((42).toString());      // "42"
console.log(42 + "");              // "42"

// To Boolean
console.log(Boolean(0));           // false
console.log(Boolean(""));          // false
console.log(Boolean("0"));         // true (non-empty string!)
console.log(Boolean([]));          // true (empty array!)
```

`Number()` converts the entire value (fails on `"42px"`). `parseInt()` reads digits from the start and stops (handles `"42px"`). The unary `+` is a shortcut for `Number()`. For booleans, memorize the six falsy values: `0`, `""`, `null`, `undefined`, `NaN`, `false`. Everything else (including `"0"`, `" "`, `[]`, `{}`) is truthy.

**Output:**

```
42
0
NaN
1
0
0
NaN
42
3
3.14
NaN
42
0
1
42
42
42
false
false
true
true
```

### Variable Naming Rules and Conventions

```javascript
// Valid variable names
let firstName = "Neha";       // camelCase (recommended)
let _private = "secret";      // can start with underscore
let $price = 99;              // can start with dollar sign
let student2 = "Vikram";      // can contain digits (not first char)

// INVALID variable names (these cause errors)
// let 2nd = "second";        // cannot start with a digit
// let my-name = "Aarav";     // hyphens not allowed
// let let = 5;               // cannot use reserved words

// Naming conventions in JavaScript
let camelCase = "for variables and functions"; // most common
const UPPER_SNAKE = "for constants";           // e.g., MAX_SIZE
let PascalCase = "for classes";                // e.g., Student

console.log(firstName, _private, $price, student2);
```

Variable names can contain letters, digits, underscores, and dollar signs, but cannot start with a digit. They cannot be reserved words like `let`, `const`, `if`, `for`, etc. JavaScript convention uses `camelCase` for variables and functions, `UPPER_SNAKE_CASE` for constants, and `PascalCase` for class names.

**Output:**

```
Neha secret 99 Vikram
```

## Common Mistakes

### Reassigning a const Variable

**Wrong:**

```
const name = "Aarav";
name = "Priya";
```

TypeError: Assignment to constant variable.

**Correct:**

```
let name = "Aarav";
name = "Priya"; // Use let if you need to reassign
```

`const` means the variable binding cannot be changed. If you need to reassign a variable, use `let` instead. Use `const` only when the variable should keep the same value throughout its lifetime.

### Confusing undefined and null

**Wrong:**

```
let x;
if (x == null) {
  console.log("x is null"); // This runs!
}
// But x is actually undefined, not null
```

No error, but the logic is misleading. == considers null and undefined equal.

**Correct:**

```
let x;
if (x === undefined) {
  console.log("x is undefined");
}
if (x === null) {
  console.log("x is null"); // This does NOT run
}
```

`undefined` means a variable was declared but never assigned a value. `null` means the value was intentionally set to "nothing". They are different values but `==` considers them equal (`null == undefined` is true). Use `===` to distinguish between them.

### Expecting typeof null to Return 'null'

**Wrong:**

```
let data = null;
if (typeof data === "null") {
  console.log("data is null"); // Never runs!
}
```

No error, but the condition is always false because typeof null returns 'object', not 'null'.

**Correct:**

```
let data = null;
if (data === null) {
  console.log("data is null"); // This works
}
```

`typeof null` returns `"object"`, not `"null"`. This is a well-known bug. To check for null, use the strict equality check `data === null` instead of typeof.

### Using var Inside a Loop (Scope Bug)

**Wrong:**

```
for (var i = 0; i < 3; i++) {
  // do something
}
console.log(i); // 3 (var leaked out of the loop!)
```

No error, but i is accessible outside the loop, which can cause bugs.

**Correct:**

```
for (let i = 0; i < 3; i++) {
  // do something
}
// console.log(i); // ReferenceError: i is not defined (correct!)
```

`var` is function-scoped, not block-scoped. A variable declared with `var` inside a `for` loop is accessible outside the loop. `let` is block-scoped, so it stays inside the loop where it belongs. This is one of the main reasons `let` replaced `var`.

### Trusting == for Type Comparisons

**Wrong:**

```
console.log(0 == "");       // true (both coerce to 0)
console.log(0 == false);    // true
console.log("" == false);   // true
console.log("0" == false);  // true
// All these are confusing and can lead to bugs
```

No error, but loose equality gives unexpected results.

**Correct:**

```
console.log(0 === "");      // false
console.log(0 === false);   // false
console.log("" === false);  // false
console.log("0" === false); // false
// Strict equality gives predictable results
```

The `==` operator converts types before comparing, leading to confusing results. `===` (strict equality) checks both value AND type, giving predictable results. Rule: **always use `===` and `!==`** unless you have a specific reason to use `==`.

## Summary

- Variables store values. Use const by default, let when you need to reassign, and never use var in new code.
- const prevents reassignment, not mutation. A const object's properties can still be changed.
- JavaScript has 7 primitive types: string, number, boolean, undefined, null, symbol, and bigint.
- typeof returns the type as a string. Two gotchas: typeof null is 'object' (bug), and typeof NaN is 'number'.
- Type coercion: the + operator concatenates if any operand is a string. The -, *, / operators always convert to numbers.
- The six falsy values are: 0, '' (empty string), null, undefined, NaN, and false. Everything else is truthy, including '0', ' ', [], and {}.
- NaN is not equal to itself: NaN === NaN is false. Use Number.isNaN() to check for NaN.
- Template literals use backticks and ${} for cleaner string interpolation: `Hello ${name}` instead of 'Hello ' + name.
- Number() converts the entire string (or returns NaN). parseInt() reads digits from the start and stops at the first non-digit.
- Always use === (strict equality) instead of == (loose equality) to avoid type coercion surprises.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/javascript/variables-and-data-types/*
*Practice questions: https://learn.modernagecoders.com/resources/javascript/variables-and-data-types/practice/*
