---
title: "Introduction to JavaScript - What Is JavaScript and Why Learn It | Modern Age Coders"
description: "Learn what JavaScript is, how it works with HTML and CSS, and write your first interactive script. Includes 55 code-based practice questions for beginners."
slug: introduction-to-javascript
canonical: https://learn.modernagecoders.com/resources/javascript/introduction-to-javascript/
category: "JavaScript"
keywords: ["what is javascript", "javascript introduction", "why learn javascript", "javascript for beginners", "javascript html css", "javascript first program", "learn javascript from scratch", "javascript tutorial for teens"]
---
# Introduction to JavaScript

**Difficulty:** Beginner  
**Reading time:** 20 min  
**Chapter:** 1  
**Practice questions:** 55

## What Is JavaScript?

**JavaScript** is the programming language of the web. Every interactive thing you see on a website — a button that changes color when you hover over it, a form that checks your email before you submit, a dropdown menu that slides open, a live chat widget, an animated counter — that is JavaScript at work.

Think of a website as a house. **HTML** is the structure — the walls, floors, and roof. **CSS** is the paint, furniture, and decoration. **JavaScript** is the electricity — it makes things actually work. Without JavaScript, websites would be static pages that just sit there. With JavaScript, they come alive.

### The Three Layers of the Web

TechnologyRoleExample`HTML`Structure (content)A button on the page`CSS`Style (appearance)The button is blue and rounded`JavaScript`Behavior (interactivity)Clicking the button shows a message

You cannot build a modern website without all three working together. HTML without CSS looks ugly. HTML + CSS without JavaScript looks pretty but does nothing. JavaScript is what turns a poster into an app.

## Why Should You Learn JavaScript?

JavaScript is the single most important language to learn if you want to build anything for the web. Here is why:

### 1. It Runs Everywhere

JavaScript is the only programming language that runs natively in every web browser — Chrome, Firefox, Safari, Edge. You do not need to install anything. Open your browser, press F12, and you can start writing JavaScript right now. No compiler, no setup, no downloads.

### 2. You See Results Instantly

Unlike some languages where you write code, compile it, and then run it, JavaScript gives you instant feedback. Change a line of code, refresh the page, and you see the result immediately. This makes learning faster and more fun.

### 3. It Powers Everything on the Web

Every website you use daily — Google, YouTube, Instagram, WhatsApp Web, Netflix — uses JavaScript. Learning JavaScript means you can understand and build the same kind of interactive experiences.

### 4. It Works Beyond the Browser

JavaScript is not limited to websites. With **Node.js**, you can use JavaScript to build servers, desktop apps, mobile apps, and even control robots. Companies like Netflix, PayPal, and LinkedIn use JavaScript on their servers.

### 5. Massive Job Market

JavaScript is consistently the most popular programming language in developer surveys. Learning it opens doors to frontend development, backend development, mobile app development, and more.

## Detailed Explanation

### A Brief History

JavaScript was created by **Brendan Eich** in 1995, working at Netscape (one of the first web browsers). He built the first version in just 10 days. The language was originally called Mocha, then LiveScript, and finally renamed to JavaScript as a marketing move to ride the popularity of Java — even though JavaScript and Java are completely different languages.

Over the years, JavaScript has evolved dramatically. The big update came in 2015 with **ES6 (ECMAScript 2015)**, which added features like `let`, `const`, arrow functions, and template literals. Today, JavaScript gets yearly updates and is one of the most powerful languages in the world.

### JavaScript vs Java

This confuses a lot of beginners. **JavaScript and Java are completely different languages.** They have different syntax, different use cases, and were created by different people. The name similarity is purely a marketing decision from 1995. Think of it like "car" and "carpet" — they share letters but have nothing else in common.

### What Can JavaScript Do?

Here is a concrete list of things JavaScript can do on a web page:

- **Change content:** Update text, images, or HTML on the page without reloading
- **Respond to events:** React when a user clicks, types, scrolls, or hovers
- **Validate forms:** Check if an email is valid before sending it to the server
- **Animate elements:** Slide, fade, rotate, or bounce elements on the page
- **Fetch data:** Load new data from a server without refreshing the page (AJAX/Fetch API)
- **Store data:** Save information in the browser using localStorage
- **Build games:** Create interactive games using the HTML5 Canvas
- **Control multimedia:** Play/pause videos, create audio players

### Where Does JavaScript Run?

JavaScript runs in two main environments:

#### 1. The Browser

Every web browser has a built-in **JavaScript engine** that reads and executes JavaScript code. Chrome uses the **V8 engine**, Firefox uses **SpiderMonkey**, and Safari uses **JavaScriptCore**. When you open a web page, the browser downloads the HTML, CSS, and JavaScript files, then the engine runs the JavaScript code.

#### 2. Node.js (Server-Side)

**Node.js** takes Chrome's V8 engine and lets you run JavaScript outside the browser — on your computer or on a server. This means you can use the same language for both the frontend (what users see) and the backend (the server logic). We will focus on browser JavaScript in this guide.

### Your First JavaScript Program

Let us write a complete web page with HTML, CSS, and JavaScript working together. This page has a button that changes the text when you click it.

To try this, create a file called `index.html` on your computer, paste the code from Example 1 below, and open it in your browser. Click the button and watch the magic happen. That is JavaScript.

### How the Browser Reads Your Code

When you open an HTML file in the browser, here is what happens in order:

1. The browser reads the HTML from top to bottom
2. It builds the page structure (the DOM — Document Object Model)
3. It applies the CSS styles
4. It runs any JavaScript code it finds

This order matters. If your JavaScript tries to find a button that has not been created yet (because the HTML has not been read that far), it will fail. That is why we usually put the `` tag at the end of the ``, after all the HTML elements. You will learn more about this in Chapter 2.

## Code Examples

### Your First Interactive Web Page

```html
<!DOCTYPE html>
<html>
<head>
  <title>My First JS Page</title>
  <style>
    body { font-family: Arial; text-align: center; padding: 50px; }
    button { padding: 10px 20px; font-size: 18px; cursor: pointer; }
    #message { font-size: 24px; margin: 20px; }
  </style>
</head>
<body>
  <h1>My First JavaScript Page</h1>
  <p id="message">Click the button below!</p>
  <button onclick="changeText()">Click Me</button>

  <script>
    function changeText() {
      document.getElementById("message").textContent = "JavaScript is working!";
    }
  </script>
</body>
</html>
```

This is a complete web page with all three layers working together. The HTML creates a heading, a paragraph with `id="message"`, and a button. The CSS centers everything and styles the button. The JavaScript defines a function `changeText()` that finds the paragraph by its ID and changes its text. When you click the button, the `onclick` attribute calls this function. Notice the script tag is placed before the closing `` tag.

**Output:**

```
Before click: 'Click the button below!'
After click: 'JavaScript is working!'
```

### Using console.log() to See Output

```javascript
console.log("Hello from JavaScript!");
console.log(42);
console.log(10 + 5);
console.log("Aarav" + " is learning JS");
```

`console.log()` is how you print output in JavaScript. It does not show anything on the web page — it prints to the browser's Developer Console (press F12 to open it). This is your best friend for testing and debugging. You can log text (strings in quotes), numbers, math expressions, and even combine strings with the `+` operator.

**Output:**

```
Hello from JavaScript!
42
15
Aarav is learning JS
```

### JavaScript Can Change Styles

```html
<!DOCTYPE html>
<html>
<head>
  <title>Change Color</title>
  <style>
    #box {
      width: 200px; height: 200px;
      background-color: #3498db;
      margin: 20px auto;
      border-radius: 10px;
      transition: background-color 0.3s;
    }
  </style>
</head>
<body>
  <div id="box"></div>
  <button onclick="changeColor()">Change Color</button>

  <script>
    function changeColor() {
      let box = document.getElementById("box");
      box.style.backgroundColor = "#e74c3c";
    }
  </script>
</body>
</html>
```

JavaScript can change any CSS property on any element. Here, clicking the button runs the `changeColor()` function, which finds the `div` with `id="box"` and changes its `backgroundColor` to red. Notice that CSS properties with hyphens (like `background-color`) become camelCase in JavaScript (`backgroundColor`). The CSS `transition` property makes the color change smooth.

**Output:**

```
The blue box smoothly changes to red when the button is clicked.
```

### JavaScript Can Respond to User Input

```html
<!DOCTYPE html>
<html>
<head>
  <title>Greeting App</title>
  <style>
    body { font-family: Arial; text-align: center; padding: 30px; }
    input { padding: 8px; font-size: 16px; }
    button { padding: 8px 16px; font-size: 16px; }
    #greeting { font-size: 20px; color: #2ecc71; margin: 15px; }
  </style>
</head>
<body>
  <h1>Greeting App</h1>
  <input type="text" id="nameInput" placeholder="Enter your name">
  <button onclick="greet()">Say Hello</button>
  <p id="greeting"></p>

  <script>
    function greet() {
      let name = document.getElementById("nameInput").value;
      document.getElementById("greeting").textContent = "Hello, " + name + "! Welcome to JavaScript.";
    }
  </script>
</body>
</html>
```

This example reads user input from a text field using `.value`, then displays a personalized greeting. Priya types her name, clicks the button, and sees "Hello, Priya! Welcome to JavaScript." on the page. The `.value` property gets whatever the user typed in the input field. The `.textContent` property sets the text of the paragraph.

**Output:**

```
If user types 'Priya' and clicks the button:
Hello, Priya! Welcome to JavaScript.
```

### alert(), prompt(), and confirm()

```javascript
// alert() shows a popup message
alert("Welcome to JavaScript!");

// prompt() asks for input and returns what the user typed
let name = prompt("What is your name?");
console.log("User entered: " + name);

// confirm() asks a yes/no question, returns true or false
let likesJS = confirm("Do you like JavaScript?");
console.log("Likes JavaScript: " + likesJS);
```

These are three built-in browser dialog functions. `alert()` shows a message popup. `prompt()` shows an input dialog and returns whatever the user types (or `null` if they cancel). `confirm()` shows a dialog with OK and Cancel buttons, returning `true` for OK and `false` for Cancel. These are useful for quick interactions but should not be used in real websites because they block the page.

**Output:**

```
A popup saying 'Welcome to JavaScript!'
A dialog asking for the user's name
A dialog asking 'Do you like JavaScript?' with OK and Cancel
```

### typeof Operator - Checking Data Types

```javascript
console.log(typeof 42);           // "number"
console.log(typeof "hello");      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (a famous JS bug!)
console.log(typeof console.log);  // "function"
```

The `typeof` operator tells you what type a value is. It returns a string like `"number"`, `"string"`, `"boolean"`, `"undefined"`, or `"function"`. There is one famous quirk: `typeof null` returns `"object"` instead of `"null"`. This is a bug from the very first version of JavaScript in 1995 that was never fixed because too many websites depend on it.

**Output:**

```
number
string
boolean
undefined
object
function
```

### A Simple Counter App

```html
<!DOCTYPE html>
<html>
<head>
  <title>Counter</title>
  <style>
    body { font-family: Arial; text-align: center; padding: 40px; }
    #count { font-size: 48px; margin: 20px; }
    button { padding: 10px 25px; font-size: 20px; margin: 5px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>Click Counter</h1>
  <p id="count">0</p>
  <button onclick="increment()">+1</button>
  <button onclick="decrement()">-1</button>
  <button onclick="reset()">Reset</button>

  <script>
    let count = 0;

    function increment() {
      count = count + 1;
      document.getElementById("count").textContent = count;
    }

    function decrement() {
      count = count - 1;
      document.getElementById("count").textContent = count;
    }

    function reset() {
      count = 0;
      document.getElementById("count").textContent = count;
    }
  </script>
</body>
</html>
```

This is a practical project — a counter app with three buttons. A variable `count` stores the current number. Each function modifies `count` and updates the page. `increment()` adds 1, `decrement()` subtracts 1, and `reset()` sets it back to 0. The variable lives outside the functions so all three functions can access it. This is your first real interactive app.

**Output:**

```
A page showing 0 with +1, -1, and Reset buttons.
Clicking +1 three times shows 3.
Clicking -1 once shows 2.
Clicking Reset shows 0.
```

## Common Mistakes

### Putting the Script Tag Before the HTML Elements

**Wrong:**

```
<!DOCTYPE html>
<html>
<head>
  <script>
    document.getElementById("msg").textContent = "Hello!";
  </script>
</head>
<body>
  <p id="msg">Original text</p>
</body>
</html>
```

TypeError: Cannot set properties of null (reading 'textContent')

**Correct:**

```
<!DOCTYPE html>
<html>
<head></head>
<body>
  <p id="msg">Original text</p>

  <script>
    document.getElementById("msg").textContent = "Hello!";
  </script>
</body>
</html>
```

When the script is in the ``, it runs before the browser has created the `` element. So `getElementById("msg")` returns `null` because the element does not exist yet. The fix is to put the `` tag at the end of ``, after all the HTML elements. This way, all elements are created before the JavaScript runs.

### Using = Instead of == for Comparison

**Wrong:**

```
let score = 100;
if (score = 50) {
  console.log("Score is 50");
}
```

No error, but the condition is always true! score gets reassigned to 50.

**Correct:**

```
let score = 100;
if (score === 50) {
  console.log("Score is 50");
}
```

A single `=` is the assignment operator — it stores a value. A double `==` or triple `===` is for comparison. In the wrong code, `score = 50` assigns 50 to score and the `if` evaluates 50, which is truthy. So the message prints even though the score was originally 100. Always use `===` for comparison in JavaScript.

### Forgetting Quotes Around Strings

**Wrong:**

```
console.log(Hello World);
```

ReferenceError: Hello is not defined

**Correct:**

```
console.log("Hello World");
```

Text values (strings) must be wrapped in quotes — either double quotes `"Hello"`, single quotes `'Hello'`, or backticks ``Hello``. Without quotes, JavaScript thinks `Hello` is a variable name and looks for a variable called Hello. Since it does not exist, you get a ReferenceError.

### Misspelling getElementById

**Wrong:**

```
document.getElementByld("msg").textContent = "Hello";
// Note: that is a lowercase 'L' instead of capital 'I' in 'Id'
```

TypeError: document.getElementByld is not a function

**Correct:**

```
document.getElementById("msg").textContent = "Hello";
```

JavaScript is **case-sensitive**. The method name is `getElementById` with a capital B, capital I, and lowercase d. Common misspellings include `getElementByld` (lowercase L instead of I), `getelementbyid` (all lowercase), and `getElementByID` (capital D). Always double-check the spelling.

### Using textContent vs innerHTML Incorrectly

**Wrong:**

```
document.getElementById("msg").textContent = "<strong>Bold text</strong>";
```

No error, but the page literally shows '**Bold text**' as plain text, not bold.

**Correct:**

```
document.getElementById("msg").innerHTML = "<strong>Bold text</strong>";
```

`textContent` treats everything as plain text — HTML tags are displayed as-is, not rendered. If you want to insert HTML that the browser should render (like bold text or links), use `innerHTML`. However, be careful with `innerHTML` when dealing with user input, as it can create security vulnerabilities (XSS attacks).

## Summary

- JavaScript is the programming language of the web. It adds interactivity and behavior to web pages built with HTML and CSS.
- HTML provides structure (content), CSS provides style (appearance), and JavaScript provides behavior (interactivity). All three work together.
- JavaScript was created by Brendan Eich in 1995 at Netscape. Despite the name, JavaScript and Java are completely different languages.
- JavaScript runs in every web browser using built-in engines (V8 in Chrome, SpiderMonkey in Firefox). It also runs on servers via Node.js.
- You can add JavaScript to a web page using the  tag, placed before the closing  tag so all HTML elements are available.
- console.log() prints output to the browser's Developer Console (F12). It does not display anything on the web page itself.
- document.getElementById() finds an HTML element by its id attribute. You can then change its textContent, innerHTML, or style properties.
- The typeof operator returns the type of a value as a string: 'number', 'string', 'boolean', 'undefined', 'object', or 'function'.
- alert() shows a popup, prompt() asks for input, and confirm() asks a yes/no question. These are useful for learning but not for real websites.
- JavaScript is case-sensitive. getElementById is not the same as getElementByid. Always watch your capitalization.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/javascript/introduction-to-javascript/*
*Practice questions: https://learn.modernagecoders.com/resources/javascript/introduction-to-javascript/practice/*
