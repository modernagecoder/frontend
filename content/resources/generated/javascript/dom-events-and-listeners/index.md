---
title: "DOM Events and Event Listeners in JavaScript - click, input, submit, keydown | Modern Age Coders"
description: "Learn JavaScript event handling with addEventListener, click, input, submit, keydown, mouseover events. Master the event object, event delegation, preventDefault, and build interactive web pages. 60+ practice questions."
slug: dom-events-and-listeners
canonical: https://learn.modernagecoders.com/resources/javascript/dom-events-and-listeners/
category: "JavaScript"
keywords: ["javascript events", "addEventListener javascript", "click event javascript", "javascript event listener", "keydown event", "submit event", "event delegation", "event object javascript", "preventDefault", "javascript interactive webpage"]
---
# DOM Events and Event Listeners

**Difficulty:** Intermediate  
**Reading time:** 45 min  
**Chapter:** 12  
**Practice questions:** 60

## What Are DOM Events?

An **event** is something that happens on a web page -- a user clicks a button, types in a text field, moves the mouse, scrolls the page, or submits a form. JavaScript can **listen** for these events and run code when they happen. This is what makes websites interactive.

Every interactive thing you have ever done on a website -- liking a post, opening a dropdown, typing a search query, playing a video -- was powered by events.

```
Click Me

const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  alert("Button was clicked!");
});

```

This code tells the browser: "When the user clicks the button with id 'btn', run this function." The function is called an **event handler** or **callback**.

## Why Learn Events?

### 1. Events Are the Core of Web Interactivity

Without events, JavaScript cannot respond to users. Every form, every button, every slider, every game on the web relies on events. If you want to build anything interactive, you need events.

### 2. Understanding the Event Object Unlocks Power

When an event fires, the browser passes an **event object** to your handler. This object contains information like which element was clicked, which key was pressed, or where the mouse is. Learning to use this object lets you build smart, responsive interfaces.

### 3. Event Delegation Saves Memory and Code

Instead of attaching listeners to 100 list items, you attach one listener to the parent. This pattern (event delegation) is how professional developers handle dynamic content. React and other frameworks use this pattern internally.

### 4. It Is Essential for Form Handling

Forms are everywhere on the web -- login, signup, search, checkout, feedback. Handling form events (submit, input, change, focus, blur) is a core skill for any web developer.

## Detailed Explanation

### 1. addEventListener Basics

The `addEventListener` method attaches an event handler to an element. It takes two required arguments: the event type (a string) and a callback function:

```
element.addEventListener(eventType, handlerFunction);
```

You can attach multiple listeners to the same element for the same event. They all run in order:

```
Click

const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  console.log("First handler");
});

btn.addEventListener("click", function() {
  console.log("Second handler");
});
// Both run when button is clicked

```

### 2. Common Event Types

**Mouse events:**

- `click` -- element is clicked
- `dblclick` -- element is double-clicked
- `mouseover` -- mouse enters the element (bubbles to children)
- `mouseout` -- mouse leaves the element
- `mouseenter` -- mouse enters the element (does not bubble)
- `mouseleave` -- mouse leaves the element (does not bubble)

**Keyboard events:**

- `keydown` -- a key is pressed down
- `keyup` -- a key is released

**Form / Input events:**

- `input` -- the value of an input/textarea changes (fires on every keystroke)
- `change` -- the value changes and the element loses focus (or for select/checkbox, on change)
- `submit` -- a form is submitted
- `focus` -- an input gains focus (user clicks or tabs into it)
- `blur` -- an input loses focus

**Page events:**

- `scroll` -- the page or element is scrolled
- `load` -- the page or resource finishes loading
- `DOMContentLoaded` -- the HTML is fully parsed (before images load)

### 3. The Event Object

When an event fires, the browser creates an event object and passes it to your handler. You can name it anything, but `e`, `event`, or `evt` are common:

```
Click Me

document.getElementById("btn").addEventListener("click", function(e) {
  console.log(e.type);    // "click"
  console.log(e.target);  // the button element
  console.log(e.target.textContent); // "Click Me"
});

```

Key properties of the event object:

- `e.type` -- the event type ("click", "keydown", etc.)
- `e.target` -- the element that triggered the event
- `e.currentTarget` -- the element the listener is attached to
- `e.key` -- (keyboard events) which key was pressed
- `e.preventDefault()` -- stops the default browser behavior
- `e.stopPropagation()` -- stops the event from bubbling up

### 4. preventDefault

Some elements have default behaviors: forms submit and reload the page, links navigate to a URL. `e.preventDefault()` stops these defaults:

```

  
  Submit

document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop page reload
  const name = document.getElementById("name").value;
  console.log("Form submitted with name:", name);
});

```

### 5. Event Bubbling and stopPropagation

When an event fires on an element, it **bubbles up** through its parent elements. A click on a button inside a div also triggers click handlers on the div and body:

```

  Click

document.getElementById("outer").addEventListener("click", function() {
  console.log("Outer div clicked");
});

document.getElementById("inner").addEventListener("click", function(e) {
  console.log("Button clicked");
  // e.stopPropagation(); // Uncomment to stop bubbling
});
// Clicking the button logs: "Button clicked" then "Outer div clicked"

```

### 6. Event Delegation

Instead of adding a listener to every child element, add one listener to the parent and use `e.target` to detect which child was clicked:

```

- Home
- About
- Contact

document.getElementById("menu").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});

```

This works even for elements added later dynamically. It is also more efficient -- one listener instead of many.

### 7. Removing Event Listeners

To remove a listener, you need a reference to the same function. Anonymous functions cannot be removed:

```
function handleClick() {
  console.log("Clicked!");
}

const btn = document.getElementById("btn");
btn.addEventListener("click", handleClick);

// Later, remove it:
btn.removeEventListener("click", handleClick);

// This does NOT work (different function reference):
btn.addEventListener("click", function() { console.log("X"); });
btn.removeEventListener("click", function() { console.log("X"); }); // Fails!
```

### 8. Keyboard Events

Use `keydown` and `keyup` to respond to keyboard input. The `e.key` property tells you which key was pressed:

```
document.addEventListener("keydown", function(e) {
  console.log("Key pressed:", e.key);
  
  if (e.key === "Enter") {
    console.log("Enter was pressed!");
  }
  
  if (e.key === "Escape") {
    console.log("Escape was pressed!");
  }
  
  // Ctrl + S
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault(); // Stop browser save dialog
    console.log("Ctrl+S pressed! Saving...");
  }
});
```

## Code Examples

### Click Event with Button Counter

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    button { padding: 12px 24px; font-size: 18px; cursor: pointer; background: #a855f7; color: white; border: none; border-radius: 8px; }
    #count { font-size: 48px; margin: 20px 0; }
  </style>
</head>
<body>
  <h2>Click Counter</h2>
  <div id="count">0</div>
  <button id="increment">+1</button>
  <button id="decrement">-1</button>
  <button id="reset">Reset</button>

  <script>
    let count = 0;
    const display = document.getElementById("count");

    document.getElementById("increment").addEventListener("click", function() {
      count++;
      display.textContent = count;
    });

    document.getElementById("decrement").addEventListener("click", function() {
      count--;
      display.textContent = count;
    });

    document.getElementById("reset").addEventListener("click", function() {
      count = 0;
      display.textContent = count;
    });
  </script>
</body>
</html>
```

Three buttons each have a click event listener. The increment button increases the count, the decrement button decreases it, and the reset button sets it back to 0. The display updates after every click.

**Output:**

```
A counter display with +1, -1, and Reset buttons. Clicking them updates the number shown.
```

### Real-Time Input with Character Count

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    textarea { width: 100%; max-width: 400px; height: 100px; padding: 10px; font-size: 16px; border: 2px solid #ddd; border-radius: 8px; }
    textarea:focus { border-color: #a855f7; outline: none; }
    .counter { margin-top: 8px; color: #666; }
    .counter.warning { color: #f59e0b; }
    .counter.danger { color: #ef4444; }
  </style>
</head>
<body>
  <h2>Tweet Composer</h2>
  <textarea id="tweet" placeholder="What is happening?"></textarea>
  <div class="counter" id="counter">0 / 280 characters</div>

  <script>
    const textarea = document.getElementById("tweet");
    const counter = document.getElementById("counter");
    const MAX = 280;

    textarea.addEventListener("input", function() {
      const length = textarea.value.length;
      counter.textContent = length + " / " + MAX + " characters";

      counter.classList.remove("warning", "danger");
      if (length > MAX) {
        counter.classList.add("danger");
      } else if (length > MAX * 0.8) {
        counter.classList.add("warning");
      }
    });
  </script>
</body>
</html>
```

The `input` event fires on every keystroke, paste, or deletion. We read the textarea's length, update the counter text, and change the counter color when approaching or exceeding the limit. The `input` event is ideal for real-time feedback.

**Output:**

```
A textarea with a character counter below it. The counter turns yellow above 224 characters and red above 280.
```

### Form Submit with preventDefault

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    form { max-width: 300px; }
    input { display: block; width: 100%; padding: 8px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box; }
    button { padding: 10px 20px; background: #a855f7; color: white; border: none; border-radius: 6px; cursor: pointer; }
    #result { margin-top: 16px; padding: 12px; background: #d1fae5; border-radius: 6px; display: none; }
  </style>
</head>
<body>
  <h2>Student Registration</h2>
  <form id="regForm">
    <input type="text" id="name" placeholder="Full Name" required>
    <input type="email" id="email" placeholder="Email" required>
    <input type="text" id="school" placeholder="School Name">
    <button type="submit">Register</button>
  </form>
  <div id="result"></div>

  <script>
    document.getElementById("regForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const school = document.getElementById("school").value;

      const result = document.getElementById("result");
      result.style.display = "block";
      result.textContent = "Registered: " + name + " (" + email + ") from " + (school || "N/A");
    });
  </script>
</body>
</html>
```

`e.preventDefault()` stops the form from actually submitting (which would reload the page). Instead, we read the values and display them in a result div. This is the pattern used by every modern web form.

**Output:**

```
A registration form that shows submitted data below the form without reloading the page.
```

### Event Delegation with Dynamic List

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    #list { list-style: none; padding: 0; }
    #list li { padding: 10px; margin: 4px 0; background: #f3f4f6; border-radius: 4px; cursor: pointer; }
    #list li:hover { background: #e5e7eb; }
    #list li.done { text-decoration: line-through; color: #9ca3af; }
    .add-area { margin-bottom: 16px; }
    input { padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
    button { padding: 8px 16px; background: #a855f7; color: white; border: none; border-radius: 4px; cursor: pointer; }
  </style>
</head>
<body>
  <h2>To-Do List (Event Delegation)</h2>
  <div class="add-area">
    <input type="text" id="taskInput" placeholder="New task...">
    <button id="addBtn">Add</button>
  </div>
  <ul id="list">
    <li>Complete homework</li>
    <li>Practice coding</li>
    <li>Read a book</li>
  </ul>

  <script>
    const list = document.getElementById("list");
    const taskInput = document.getElementById("taskInput");

    // Event delegation: one listener on the parent ul
    list.addEventListener("click", function(e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
      }
    });

    // Add new tasks
    document.getElementById("addBtn").addEventListener("click", function() {
      const text = taskInput.value.trim();
      if (text !== "") {
        const li = document.createElement("li");
        li.textContent = text;
        list.appendChild(li);
        taskInput.value = "";
      }
    });
  </script>
</body>
</html>
```

Instead of attaching click listeners to every li, we use **event delegation**: one listener on the ul parent. When any li is clicked, `e.target` tells us which one. This works even for new li elements added dynamically -- they do not need their own listeners.

**Output:**

```
A to-do list where clicking any item toggles line-through. New items can be added and they also respond to clicks.
```

### Keyboard Shortcuts

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    #log { padding: 16px; background: #1a1a2e; color: #e0e0e0; border-radius: 8px; min-height: 200px; font-family: monospace; white-space: pre-wrap; }
    .shortcut { display: inline-block; padding: 4px 8px; background: #374151; color: #f9fafb; border-radius: 4px; margin: 2px; font-family: monospace; }
  </style>
</head>
<body>
  <h2>Keyboard Event Logger</h2>
  <p>Try these shortcuts: <span class="shortcut">Ctrl+B</span> <span class="shortcut">Ctrl+I</span> <span class="shortcut">Escape</span> <span class="shortcut">Arrow keys</span></p>
  <div id="log">Press any key...</div>

  <script>
    const log = document.getElementById("log");

    document.addEventListener("keydown", function(e) {
      let message = "Key: " + e.key + " | Code: " + e.code;

      if (e.ctrlKey && e.key === "b") {
        e.preventDefault();
        message = "SHORTCUT: Bold (Ctrl+B)";
      } else if (e.ctrlKey && e.key === "i") {
        e.preventDefault();
        message = "SHORTCUT: Italic (Ctrl+I)";
      } else if (e.key === "Escape") {
        message = "SHORTCUT: Escape pressed - closing panel";
      } else if (e.key.startsWith("Arrow")) {
        message = "ARROW: Moving " + e.key.replace("Arrow", "").toLowerCase();
      }

      log.textContent = message + "\n" + log.textContent;
    });
  </script>
</body>
</html>
```

We listen for `keydown` on the entire document. `e.key` gives the key name, `e.code` gives the physical key code. `e.ctrlKey` is true when Ctrl is held. `e.preventDefault()` stops browser shortcuts (like Ctrl+B for bookmarks) from firing.

**Output:**

```
A log panel that shows which key was pressed. Ctrl+B, Ctrl+I, Escape, and arrow keys trigger special messages.
```

### Mouse Events: Hover Card Effect

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .card { display: inline-block; width: 200px; padding: 20px; margin: 10px; border: 2px solid #ddd; border-radius: 12px; text-align: center; transition: all 0.3s; cursor: pointer; }
    .card img { width: 80px; height: 80px; border-radius: 50%; }
    .card .details { display: none; margin-top: 10px; font-size: 14px; color: #666; }
    #status { margin-top: 16px; padding: 10px; background: #f3f4f6; border-radius: 4px; }
  </style>
</head>
<body>
  <h2>Student Cards</h2>
  <div class="card" id="card1">
    <img src="https://placehold.co/80/a855f7/white?text=A" alt="Aarav">
    <h3>Aarav</h3>
    <div class="details">Class 10 | Delhi | Loves coding</div>
  </div>
  <div class="card" id="card2">
    <img src="https://placehold.co/80/06b6d4/white?text=P" alt="Priya">
    <h3>Priya</h3>
    <div class="details">Class 9 | Mumbai | Loves maths</div>
  </div>
  <div id="status">Hover over a card</div>

  <script>
    const cards = document.querySelectorAll(".card");
    const status = document.getElementById("status");

    cards.forEach(function(card) {
      card.addEventListener("mouseenter", function() {
        card.style.borderColor = "#a855f7";
        card.style.transform = "scale(1.05)";
        card.querySelector(".details").style.display = "block";
        status.textContent = "Viewing: " + card.querySelector("h3").textContent;
      });

      card.addEventListener("mouseleave", function() {
        card.style.borderColor = "#ddd";
        card.style.transform = "scale(1)";
        card.querySelector(".details").style.display = "none";
        status.textContent = "Hover over a card";
      });
    });
  </script>
</body>
</html>
```

`mouseenter` fires when the mouse enters the element. `mouseleave` fires when it leaves. We scale the card, change its border color, show hidden details, and update a status bar. Unlike `mouseover/mouseout`, mouseenter/mouseleave do not bubble to children.

**Output:**

```
Two student cards that scale up, show details, and highlight their border when hovered.
```

### Focus and Blur on Form Inputs

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .field { margin-bottom: 12px; }
    input { padding: 10px; border: 2px solid #ddd; border-radius: 6px; width: 250px; font-size: 16px; transition: border-color 0.3s; }
    input:focus { outline: none; }
    .hint { font-size: 13px; color: #9ca3af; display: none; margin-top: 4px; }
  </style>
</head>
<body>
  <h2>Smart Form Hints</h2>
  <div class="field">
    <input type="text" id="username" placeholder="Username">
    <div class="hint" id="hint-username">Username must be 3-20 characters, letters and numbers only.</div>
  </div>
  <div class="field">
    <input type="email" id="email" placeholder="Email">
    <div class="hint" id="hint-email">Enter a valid email like aarav@example.com.</div>
  </div>
  <div class="field">
    <input type="password" id="password" placeholder="Password">
    <div class="hint" id="hint-password">Password must be at least 8 characters with one number.</div>
  </div>

  <script>
    const fields = [
      { input: "username", hint: "hint-username", color: "#a855f7" },
      { input: "email", hint: "hint-email", color: "#06b6d4" },
      { input: "password", hint: "hint-password", color: "#f59e0b" }
    ];

    fields.forEach(function(field) {
      const input = document.getElementById(field.input);
      const hint = document.getElementById(field.hint);

      input.addEventListener("focus", function() {
        input.style.borderColor = field.color;
        hint.style.display = "block";
        hint.style.color = field.color;
      });

      input.addEventListener("blur", function() {
        input.style.borderColor = "#ddd";
        hint.style.display = "none";
      });
    });
  </script>
</body>
</html>
```

`focus` fires when the user clicks into or tabs to an input. `blur` fires when they leave it. We use these events to show context-specific hints below each field and highlight the border. This pattern improves the user experience of forms.

**Output:**

```
Each input shows a colored hint when focused and hides it when blurred. The input border highlights in a matching color.
```

## Common Mistakes

### Calling the Function Instead of Passing It

**Wrong:**

```
const btn = document.getElementById("btn");

function handleClick() {
  console.log("Clicked!");
}

btn.addEventListener("click", handleClick()); // Wrong: calls immediately!
```

The function runs immediately when the page loads, not when the button is clicked. The return value (undefined) is passed to addEventListener.

**Correct:**

```
const btn = document.getElementById("btn");

function handleClick() {
  console.log("Clicked!");
}

btn.addEventListener("click", handleClick); // Correct: pass the reference
```

`handleClick()` with parentheses calls the function and passes its return value. `handleClick` without parentheses passes the function itself. addEventListener needs the function reference, not its return value.

### Forgetting preventDefault on Form Submit

**Wrong:**

```
document.getElementById("form").addEventListener("submit", function(e) {
  // Forgot e.preventDefault()!
  const name = document.getElementById("name").value;
  console.log(name); // Logs briefly, then page reloads
});
```

The page reloads after form submission, losing all JavaScript state and the console log.

**Correct:**

```
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop page reload
  const name = document.getElementById("name").value;
  console.log(name); // Works!
});
```

By default, submitting a form causes the browser to reload the page. `e.preventDefault()` stops this default behavior so your JavaScript can handle the data without a page reload.

### Cannot Remove Anonymous Event Listeners

**Wrong:**

```
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  console.log("Clicked!");
});

// Trying to remove it:
btn.removeEventListener("click", function() {
  console.log("Clicked!");
}); // Fails! Different function objects
```

The listener is not removed because the two anonymous functions are different objects in memory, even though they look identical.

**Correct:**

```
const btn = document.getElementById("btn");

function handleClick() {
  console.log("Clicked!");
}

btn.addEventListener("click", handleClick);
// Later:
btn.removeEventListener("click", handleClick); // Works!
```

Each `function() {...}` expression creates a new function object. To remove a listener, you must pass the exact same function reference that was used to add it. Store the function in a named variable.

### Using e.target Instead of e.currentTarget in Delegation

**Wrong:**

```
// HTML: <ul id="list"><li>Item <strong>1</strong></li></ul>

document.getElementById("list").addEventListener("click", function(e) {
  console.log(e.target.textContent); // If user clicks the <strong>, e.target is the <strong>, not the <li>
});
```

If the user clicks on a nested element (like the bold text), e.target is the inner element, not the li you expected.

**Correct:**

```
document.getElementById("list").addEventListener("click", function(e) {
  const li = e.target.closest("li"); // Find the nearest li ancestor
  if (li) {
    console.log(li.textContent); // Always gets the li
  }
});
```

`e.target` is the exact element clicked, which could be a child element. Use `e.target.closest('li')` to find the nearest matching ancestor. This makes event delegation reliable even with nested elements.

### Listening to keypress Instead of keydown

**Wrong:**

```
document.addEventListener("keypress", function(e) {
  console.log(e.key); // Does not fire for Escape, Arrow keys, Ctrl, etc.
});
```

The keypress event is deprecated and does not fire for many important keys like Escape, arrow keys, Ctrl, Shift, and function keys.

**Correct:**

```
document.addEventListener("keydown", function(e) {
  console.log(e.key); // Works for ALL keys
});
```

`keypress` is deprecated and only fires for keys that produce a character. Use `keydown` instead -- it fires for all keys and is the modern standard.

## Summary

- addEventListener(type, handler) attaches a function that runs when the specified event occurs on an element. You can attach multiple listeners to the same element.
- Common mouse events: click, dblclick, mouseenter, mouseleave, mouseover, mouseout. Use mouseenter/mouseleave for hover effects as they do not bubble.
- Common keyboard events: keydown (key pressed) and keyup (key released). Use e.key to check which key. The keypress event is deprecated.
- Common form events: input (fires on every keystroke), change (fires when value changes and element loses focus), submit (fires when form is submitted), focus, blur.
- The event object (e) contains information about the event: e.type, e.target (element that triggered it), e.key (for keyboard), e.preventDefault(), e.stopPropagation().
- e.preventDefault() stops the browser's default behavior -- form submission page reload, link navigation, or browser keyboard shortcuts.
- Events bubble up from child to parent. e.stopPropagation() stops this bubbling. Understanding bubbling is key to understanding event delegation.
- Event delegation: attach one listener to a parent element instead of many listeners to children. Use e.target to detect which child was clicked. Works for dynamically added elements too.
- To remove an event listener, you must pass the exact same function reference to removeEventListener. Anonymous functions cannot be removed.
- Always use keydown over keypress. Always call preventDefault on form submit. Always use named functions if you need to remove listeners later.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/javascript/dom-events-and-listeners/*
*Practice questions: https://learn.modernagecoders.com/resources/javascript/dom-events-and-listeners/practice/*
