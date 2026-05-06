---
title: "DOM Selection and Manipulation in JavaScript - getElementById, querySelector, Styles | Modern Age Coders"
description: "Learn how to select and manipulate HTML elements with JavaScript. Master getElementById, querySelector, querySelectorAll, textContent, innerHTML, setAttribute, classList, and element.style with 58+ practice questions."
slug: dom-selection-and-manipulation
canonical: https://learn.modernagecoders.com/resources/javascript/dom-selection-and-manipulation
category: "JavaScript"
keywords: ["javascript dom manipulation", "getElementById javascript", "querySelector javascript", "javascript change text", "javascript change style", "javascript classList", "dom tutorial for beginners", "javascript html manipulation", "querySelectorAll", "javascript setAttribute"]
---
# DOM Selection and Manipulation

**Difficulty:** Intermediate  
**Reading time:** 40 min  
**Chapter:** 11  
**Practice questions:** 58

## What Is the DOM?

The **DOM** (Document Object Model) is a tree-like representation of your HTML page that JavaScript can read and change. When a browser loads an HTML file, it builds a DOM tree where every HTML tag becomes a **node** (an object). JavaScript can then select these nodes, read their content, and modify them -- changing text, styles, attributes, and structure in real time.

Think of it like this: HTML is the blueprint of a house. The DOM is the actual built house. JavaScript is the person who can walk through the house and repaint walls, move furniture, or add new rooms.

```
<!-- This HTML... -->

  

# Hello

  

Welcome to my page

<!-- ...becomes this tree in the DOM:
  document
    html
      head
      body
        div#container
          h1.title  -> "Hello"
          p         -> "Welcome to my page"
-->
```

Every element in the DOM is an object with properties and methods. You can use JavaScript to find any element and change it.

## Why Learn DOM Selection and Manipulation?

### 1. It Is What Makes Websites Interactive

Without DOM manipulation, a webpage is just static text and images. Every button click, every form submission, every dropdown menu, every dark mode toggle -- all of these work because JavaScript selects elements and changes them.

### 2. It Connects HTML, CSS, and JavaScript

This is where the three languages come together. HTML gives structure, CSS gives style, and JavaScript uses the DOM to read and change both. Understanding the DOM is the bridge between knowing JavaScript and actually building real websites.

### 3. Every Framework Uses It

React, Vue, Angular -- all of these frameworks are built on top of DOM manipulation. They just hide it behind abstractions. If you understand the raw DOM, you will understand these frameworks much faster when you learn them later.

### 4. It Is Tested in Interviews and Exams

Questions like "What is the difference between textContent and innerHTML?" or "How do you add a class to an element?" are common in web development interviews. Knowing the DOM well gives you an edge.

## Detailed Explanation

### 1. Selecting Elements by ID

`document.getElementById()` returns the single element with the matching `id`. IDs must be unique on a page, so this always returns one element (or `null` if not found).

```

# Welcome

const title = document.getElementById("main-title");
console.log(title);           // 

# Welcome

console.log(title.textContent); // "Welcome"

```

### 2. Selecting with querySelector and querySelectorAll

`document.querySelector()` takes any CSS selector and returns the **first** matching element. `document.querySelectorAll()` returns **all** matching elements as a NodeList.

```

- Apple
- Banana
- Cherry

// First .item element
const first = document.querySelector(".item");
console.log(first.textContent); // "Apple"

// The element with both classes
const active = document.querySelector(".item.active");
console.log(active.textContent); // "Cherry"

// All .item elements
const allItems = document.querySelectorAll(".item");
console.log(allItems.length); // 3
allItems.forEach(item => console.log(item.textContent));
// Apple, Banana, Cherry

```

`querySelectorAll` returns a **NodeList**, not an array. You can use `forEach` on it, but not `map` or `filter` directly. To use array methods, convert it: `Array.from(nodeList)` or `[...nodeList]`.

### 3. Changing Text Content

There are three ways to change the text inside an element:

- `textContent` -- gets or sets the raw text. Ignores HTML tags.
- `innerText` -- similar to textContent but respects CSS visibility (slower).
- `innerHTML` -- gets or sets the HTML content. Parses HTML tags.

```

Hello **World**

const p = document.getElementById("demo");

console.log(p.textContent); // "Hello World" (raw text, no tags)
console.log(p.innerHTML);   // "Hello **World**" (includes tags)

// Setting text
p.textContent = "New text";   // Replaces everything with plain text
// p is now: 

New text

// Setting HTML
p.innerHTML = "New *styled* text";
// p is now: 

New *styled* text

```

**Security warning:** Never use `innerHTML` with user input. If a user types `alert('hacked')`, innerHTML will execute it. This is called XSS (Cross-Site Scripting). Use `textContent` for user input.

### 4. Changing Attributes

HTML attributes (like `src`, `href`, `alt`, `disabled`) can be read and changed with JavaScript:

```

[Click me](https://example.com)

const img = document.getElementById("photo");

// Read attributes
console.log(img.getAttribute("src"));  // "old.jpg"
console.log(img.getAttribute("alt"));  // "Old photo"

// Set attributes
img.setAttribute("src", "new.jpg");
img.setAttribute("alt", "New photo");

// Remove attributes
img.removeAttribute("alt");

// Check if attribute exists
console.log(img.hasAttribute("alt")); // false

// Direct property access (for standard attributes)
const link = document.getElementById("link");
console.log(link.href); // "https://example.com"
link.href = "https://google.com";

```

### 5. Changing Styles

You can change CSS styles directly with `element.style.property`. CSS property names use camelCase in JavaScript:

```

Styled text

const text = document.getElementById("text");

// CSS: background-color  ->  JS: backgroundColor
text.style.color = "white";
text.style.backgroundColor = "#a855f7";
text.style.padding = "10px 20px";
text.style.borderRadius = "8px";
text.style.fontSize = "18px";

```

This adds inline styles. For toggling styles, it is much better to use CSS classes instead of setting styles directly.

### 6. Manipulating CSS Classes

The `classList` property gives you methods to add, remove, toggle, and check CSS classes:

```

  .highlight { background-color: yellow; font-weight: bold; }
  .large { font-size: 24px; }
  .hidden { display: none; }

Some text

const text = document.getElementById("text");

// Add a class
text.classList.add("highlight");

// Add multiple classes
text.classList.add("highlight", "large");

// Remove a class
text.classList.remove("large");

// Toggle: adds if missing, removes if present
text.classList.toggle("hidden"); // Adds "hidden"
text.classList.toggle("hidden"); // Removes "hidden"

// Check if a class exists
console.log(text.classList.contains("highlight")); // true
console.log(text.classList.contains("large"));     // false

```

`classList.toggle()` is incredibly useful. It returns `true` if the class was added and `false` if it was removed.

### 7. Reading Input Values

To read what a user has typed into an input field, use the `.value` property:

```

  Delhi
  Mumbai

const nameInput = document.getElementById("name-input");
console.log(nameInput.value); // "Aarav"

nameInput.value = "Priya"; // Change the input value

const citySelect = document.getElementById("city-select");
console.log(citySelect.value); // "mumbai"

```

### 8. Selecting Multiple Elements and Looping

When you need to change many elements at once, select them all and loop:

```

- Apple
- Banana
- Cherry

const items = document.querySelectorAll("#fruits li");

// Add a class to every item
items.forEach(item => {
  item.classList.add("fruit-item");
});

// Change text of all items
items.forEach((item, index) => {
  item.textContent = `Fruit ${index + 1}: ${item.textContent}`;
});
// Now: "Fruit 1: Apple", "Fruit 2: Banana", "Fruit 3: Cherry"

```

## Code Examples

### Selecting and Changing Text

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    #greeting { font-size: 24px; color: #333; }
  </style>
</head>
<body>
  <h1 id="greeting">Hello, Guest!</h1>
  <input type="text" id="name-input" placeholder="Enter your name">
  <button id="update-btn">Update Greeting</button>

  <script>
    const greeting = document.getElementById("greeting");
    const nameInput = document.getElementById("name-input");
    const btn = document.getElementById("update-btn");

    btn.addEventListener("click", function() {
      const name = nameInput.value;
      if (name.trim() !== "") {
        greeting.textContent = "Hello, " + name + "!";
      }
    });
  </script>
</body>
</html>
```

When the button is clicked, JavaScript reads the value from the input field and updates the h1 text using `textContent`. The `trim()` call ensures we do not accept an empty or whitespace-only name.

**Output:**

```
A page with a heading that says 'Hello, Guest!' -- when you type a name and click the button, the heading changes to greet that name.
```

### Toggling CSS Classes for Dark Mode

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      transition: background-color 0.3s, color 0.3s;
    }
    body.dark {
      background-color: #1a1a2e;
      color: #e0e0e0;
    }
    .toggle-btn {
      padding: 10px 20px;
      cursor: pointer;
      border: 2px solid #a855f7;
      background: transparent;
      color: inherit;
      border-radius: 8px;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h1>My Website</h1>
  <p>This page supports dark mode.</p>
  <button class="toggle-btn" id="theme-btn">Toggle Dark Mode</button>

  <script>
    const btn = document.getElementById("theme-btn");

    btn.addEventListener("click", function() {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        btn.textContent = "Toggle Light Mode";
      } else {
        btn.textContent = "Toggle Dark Mode";
      }
    });
  </script>
</body>
</html>
```

`classList.toggle("dark")` adds the class if it is missing and removes it if it is present. The CSS transition makes the color change smooth. We also update the button text to reflect the current state using `classList.contains()`.

**Output:**

```
Clicking the button switches between light and dark backgrounds. The button text updates to reflect the current mode.
```

### Changing Attributes Dynamically

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; text-align: center; }
    img { width: 300px; border-radius: 12px; margin: 10px; }
    button { padding: 8px 16px; margin: 5px; cursor: pointer; }
  </style>
</head>
<body>
  <h2>Image Switcher</h2>
  <img id="display" src="https://placehold.co/300x200/a855f7/white?text=Image+1" alt="Image 1">
  <br>
  <button id="btn1">Image 1</button>
  <button id="btn2">Image 2</button>
  <button id="btn3">Image 3</button>

  <script>
    const img = document.getElementById("display");

    document.getElementById("btn1").addEventListener("click", function() {
      img.setAttribute("src", "https://placehold.co/300x200/a855f7/white?text=Image+1");
      img.setAttribute("alt", "Image 1");
    });

    document.getElementById("btn2").addEventListener("click", function() {
      img.setAttribute("src", "https://placehold.co/300x200/06b6d4/white?text=Image+2");
      img.setAttribute("alt", "Image 2");
    });

    document.getElementById("btn3").addEventListener("click", function() {
      img.setAttribute("src", "https://placehold.co/300x200/f59e0b/white?text=Image+3");
      img.setAttribute("alt", "Image 3");
    });
  </script>
</body>
</html>
```

Each button uses `setAttribute()` to change the image's `src` and `alt` attributes. This is how image galleries, sliders, and carousels work under the hood.

**Output:**

```
Three buttons switch which image is displayed by changing the src attribute of the img element.
```

### querySelector with Different CSS Selectors

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .highlight { background-color: #fef3c7; padding: 4px 8px; }
    .result { margin-top: 10px; padding: 10px; background: #f0f0f0; border-radius: 6px; }
  </style>
</head>
<body>
  <div id="container">
    <h2 class="title">Student List</h2>
    <ul id="student-list">
      <li class="student" data-grade="A">Aarav</li>
      <li class="student" data-grade="B">Priya</li>
      <li class="student active" data-grade="A">Rohan</li>
      <li class="student" data-grade="C">Meera</li>
    </ul>
  </div>
  <div class="result" id="output"></div>

  <script>
    // Select by ID
    const container = document.querySelector("#container");

    // Select by class
    const title = document.querySelector(".title");

    // Select by tag
    const firstLi = document.querySelector("li");

    // Select by attribute
    const gradeA = document.querySelectorAll('[data-grade="A"]');

    // Select by compound selector
    const activeStudent = document.querySelector(".student.active");

    // Select nested element
    const firstInList = document.querySelector("#student-list li:first-child");
    const lastInList = document.querySelector("#student-list li:last-child");

    const output = document.getElementById("output");
    output.innerHTML = 
      "First li: " + firstLi.textContent + "<br>" +
      "Active student: " + activeStudent.textContent + "<br>" +
      "Grade A students: " + gradeA.length + "<br>" +
      "First in list: " + firstInList.textContent + "<br>" +
      "Last in list: " + lastInList.textContent;
  </script>
</body>
</html>
```

`querySelector` accepts any valid CSS selector: IDs (#id), classes (.class), tags (li), attributes ([data-grade="A"]), compound selectors (.student.active), and pseudo-selectors (li:first-child). `querySelectorAll` returns all matches.

**Output:**

```
Displays: First li: Aarav, Active student: Rohan, Grade A students: 2, First in list: Aarav, Last in list: Meera
```

### Inline Styles vs classList

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .card {
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      margin: 10px 0;
    }
    .card-purple {
      background-color: #a855f7;
      color: white;
      border-color: #a855f7;
    }
    .card-teal {
      background-color: #06b6d4;
      color: white;
      border-color: #06b6d4;
    }
    button { padding: 8px 16px; margin: 4px; cursor: pointer; }
  </style>
</head>
<body>
  <div class="card" id="my-card">
    <h3>Aarav's Project Card</h3>
    <p>This card changes style when you click the buttons.</p>
  </div>
  <button id="purple-btn">Purple Theme</button>
  <button id="teal-btn">Teal Theme</button>
  <button id="reset-btn">Reset</button>
  <button id="inline-btn">Inline Style (Red Border)</button>

  <script>
    const card = document.getElementById("my-card");

    document.getElementById("purple-btn").addEventListener("click", function() {
      card.classList.remove("card-teal");
      card.classList.add("card-purple");
    });

    document.getElementById("teal-btn").addEventListener("click", function() {
      card.classList.remove("card-purple");
      card.classList.add("card-teal");
    });

    document.getElementById("reset-btn").addEventListener("click", function() {
      card.classList.remove("card-purple", "card-teal");
      card.style.border = "";  // Clear inline style too
    });

    document.getElementById("inline-btn").addEventListener("click", function() {
      card.style.border = "3px solid red";
    });
  </script>
</body>
</html>
```

This example shows two approaches: `classList.add/remove` for switching predefined CSS themes, and `element.style` for setting inline styles. The classList approach is cleaner because styles are defined in CSS. Inline styles override class styles, which is why the red border appears even with a theme class.

**Output:**

```
Buttons switch the card between purple theme, teal theme, plain, or add a red border via inline style.
```

### Reading and Displaying Input Values

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .form-group { margin-bottom: 10px; }
    label { display: block; margin-bottom: 4px; font-weight: bold; }
    input, select { padding: 8px; width: 250px; border: 1px solid #ccc; border-radius: 4px; }
    #preview { margin-top: 16px; padding: 16px; background: #f3f4f6; border-radius: 8px; }
    button { padding: 10px 20px; background: #a855f7; color: white; border: none; border-radius: 6px; cursor: pointer; margin-top: 10px; }
  </style>
</head>
<body>
  <h2>Student Profile Preview</h2>
  <div class="form-group">
    <label>Name:</label>
    <input type="text" id="name" placeholder="Enter name">
  </div>
  <div class="form-group">
    <label>Age:</label>
    <input type="number" id="age" placeholder="Enter age">
  </div>
  <div class="form-group">
    <label>City:</label>
    <select id="city">
      <option value="">Select city</option>
      <option value="Delhi">Delhi</option>
      <option value="Mumbai">Mumbai</option>
      <option value="Bangalore">Bangalore</option>
      <option value="Chennai">Chennai</option>
    </select>
  </div>
  <button id="show-btn">Show Preview</button>
  <div id="preview"></div>

  <script>
    document.getElementById("show-btn").addEventListener("click", function() {
      const name = document.getElementById("name").value;
      const age = document.getElementById("age").value;
      const city = document.getElementById("city").value;

      const preview = document.getElementById("preview");

      if (name && age && city) {
        preview.innerHTML = 
          "<strong>Name:</strong> " + name + "<br>" +
          "<strong>Age:</strong> " + age + "<br>" +
          "<strong>City:</strong> " + city;
      } else {
        preview.textContent = "Please fill in all fields.";
      }
    });
  </script>
</body>
</html>
```

We read values from text inputs and select elements using `.value`. The preview div is updated using `innerHTML` (for bold formatting) or `textContent` (for plain error messages). The `&&` check ensures all fields are filled before displaying.

**Output:**

```
A form with name, age, and city fields. Clicking 'Show Preview' displays the entered data below the form.
```

### Looping Over querySelectorAll Results

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .task { padding: 8px 12px; margin: 4px 0; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; }
    .task.done { background-color: #d1fae5; text-decoration: line-through; color: #065f46; }
    button { padding: 8px 16px; margin-top: 10px; cursor: pointer; }
  </style>
</head>
<body>
  <h2>Task List</h2>
  <div class="task">Complete maths homework</div>
  <div class="task">Practice JavaScript DOM</div>
  <div class="task">Read science chapter</div>
  <div class="task">Revise English essay</div>
  <button id="mark-all">Mark All Done</button>
  <button id="clear-all">Clear All</button>

  <script>
    const tasks = document.querySelectorAll(".task");

    // Click individual tasks to toggle done
    tasks.forEach(function(task) {
      task.addEventListener("click", function() {
        task.classList.toggle("done");
      });
    });

    // Mark all done
    document.getElementById("mark-all").addEventListener("click", function() {
      tasks.forEach(function(task) {
        task.classList.add("done");
      });
    });

    // Clear all
    document.getElementById("clear-all").addEventListener("click", function() {
      tasks.forEach(function(task) {
        task.classList.remove("done");
      });
    });
  </script>
</body>
</html>
```

We use `querySelectorAll(".task")` to get all task elements, then `forEach` to loop through them. Each task gets a click handler that toggles the "done" class. The "Mark All" and "Clear All" buttons loop through all tasks and add or remove the class.

**Output:**

```
A list of tasks. Clicking a task toggles its done state. Buttons mark all as done or clear all.
```

## Common Mistakes

### Using getElementById with a # Symbol

**Wrong:**

```
const el = document.getElementById("#main-title");
console.log(el); // null!
```

Returns null because no element has the literal id '#main-title'.

**Correct:**

```
const el = document.getElementById("main-title");
console.log(el); // <h1 id="main-title">...</h1>
```

`getElementById` expects just the ID value, without the `#` symbol. The `#` is only used in CSS selectors and `querySelector`. This is a very common mistake.

### Trying to Use forEach on getElementsByClassName

**Wrong:**

```
const items = document.getElementsByClassName("item");
items.forEach(item => console.log(item)); // TypeError!
```

TypeError: items.forEach is not a function. getElementsByClassName returns an HTMLCollection, not a NodeList.

**Correct:**

```
// Option 1: Use querySelectorAll instead
const items = document.querySelectorAll(".item");
items.forEach(item => console.log(item));

// Option 2: Convert HTMLCollection to array
const items2 = document.getElementsByClassName("item");
Array.from(items2).forEach(item => console.log(item));
```

`getElementsByClassName` returns an HTMLCollection, which does not have `forEach`. Use `querySelectorAll` instead (returns a NodeList with forEach), or convert with `Array.from()`.

### Using CSS Property Names Instead of camelCase in JS

**Wrong:**

```
const el = document.getElementById("box");
el.style.background-color = "red";   // SyntaxError!
el.style.font-size = "20px";          // SyntaxError!
```

SyntaxError: JavaScript interprets the hyphen as a minus sign.

**Correct:**

```
const el = document.getElementById("box");
el.style.backgroundColor = "red";
el.style.fontSize = "20px";
```

CSS uses hyphens (background-color) but JavaScript uses camelCase (backgroundColor). Remove the hyphen and capitalize the next letter: font-size becomes fontSize, border-radius becomes borderRadius.

### Forgetting that querySelector Returns Only the First Match

**Wrong:**

```
// HTML: <li class="item">A</li> <li class="item">B</li> <li class="item">C</li>
const items = document.querySelector(".item");
console.log(items.length); // undefined! items is a single element
```

querySelector returns one element, not a collection. There is no .length property on a single element.

**Correct:**

```
// Use querySelectorAll for multiple elements
const items = document.querySelectorAll(".item");
console.log(items.length); // 3
```

`querySelector` returns the first matching element. `querySelectorAll` returns all matching elements as a NodeList. If you need multiple elements, always use querySelectorAll.

### Script Runs Before HTML Elements Exist

**Wrong:**

```
<!-- This script is in the <head> -->
<head>
  <script>
    const title = document.getElementById("title");
    title.textContent = "New Title"; // TypeError: Cannot set properties of null
  </script>
</head>
<body>
  <h1 id="title">Old Title</h1>
</body>
```

TypeError: Cannot set properties of null (reading 'textContent'). The element does not exist yet when the script runs.

**Correct:**

```
<!-- Option 1: Place script at the end of body -->
<body>
  <h1 id="title">Old Title</h1>
  <script>
    const title = document.getElementById("title");
    title.textContent = "New Title"; // Works!
  </script>
</body>

<!-- Option 2: Use DOMContentLoaded -->
<head>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      const title = document.getElementById("title");
      title.textContent = "New Title";
    });
  </script>
</head>
```

The browser reads HTML top to bottom. If your script is in the head, the body elements do not exist yet. Either place your script at the end of the body, or wrap it in a `DOMContentLoaded` event listener.

## Summary

- The DOM (Document Object Model) is a tree of objects representing your HTML page. JavaScript can read, change, add, and remove any part of it.
- document.getElementById('id') selects one element by its ID. Do not include the # symbol -- that is only for CSS selectors.
- document.querySelector('.class') selects the first element matching a CSS selector. document.querySelectorAll('.class') selects all matches and returns a NodeList.
- textContent gets or sets plain text. innerHTML gets or sets HTML content (can parse tags). Never use innerHTML with user input due to XSS security risks.
- setAttribute(), getAttribute(), removeAttribute(), and hasAttribute() let you read and change HTML attributes like src, href, alt, and data-* attributes.
- element.style.propertyName sets inline CSS styles. Use camelCase in JavaScript: background-color becomes backgroundColor, font-size becomes fontSize.
- element.classList provides add(), remove(), toggle(), and contains() methods for managing CSS classes. This is the preferred way to change styles.
- The .value property reads or sets the current value of input, textarea, and select elements. This is how you get what the user has typed.
- querySelectorAll returns a NodeList, not an array. You can use forEach on it, but for map/filter, convert it with Array.from() or the spread operator.
- Always place your script at the end of the body or use DOMContentLoaded to ensure HTML elements exist before your JavaScript tries to select them.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/javascript/dom-selection-and-manipulation/*
*Practice questions: https://learn.modernagecoders.com/resources/javascript/dom-selection-and-manipulation/practice/*
