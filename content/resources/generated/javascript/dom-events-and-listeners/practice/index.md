---
title: "Practice: DOM Events and Event Listeners"
description: "60 practice problems for DOM Events and Event Listeners in JavaScript"
slug: dom-events-and-listeners-practice
canonical: https://learn.modernagecoders.com/resources/javascript/dom-events-and-listeners/practice
category: "JavaScript"
---
# Practice: DOM Events and Event Listeners

**Total questions:** 60

## Topic-Specific Questions

### Q1. [Easy] What happens when the button is clicked?

```
Click Me
Waiting...

document.getElementById("btn").addEventListener("click", function() {
  document.getElementById("msg").textContent = "Button clicked!";
});

```

*Hint:* The click handler changes the paragraph text.

**Answer:** When the button is clicked, the paragraph text changes from "Waiting..." to "Button clicked!".

The click event listener runs the function when the button is clicked. The function selects the paragraph by ID and sets its textContent to "Button clicked!".

### Q2. [Easy] What is logged to the console when the button is clicked?

```
Hello

document.getElementById("btn").addEventListener("click", function(e) {
  console.log(e.type);
  console.log(e.target.textContent);
});

```

*Hint:* e.type gives the event type. e.target is the clicked element.

**Answer:** `click`
`Hello`

`e.type` is the string "click" (the event type). `e.target` is the button element, and its textContent is "Hello".

### Q3. [Easy] What happens when you type in the input?

```

document.getElementById("name").addEventListener("input", function() {
  document.getElementById("output").textContent = "Hello, " + this.value;
});

```

*Hint:* The input event fires on every keystroke. 'this' refers to the input element.

**Answer:** As you type, the paragraph below updates in real time. Typing "Aarav" shows "Hello, Aarav".

The `input` event fires on every keystroke, paste, or deletion. `this.value` inside the event handler refers to the current value of the input. The paragraph updates immediately.

### Q4. [Easy] What is logged when the user presses the 'a' key?

```

document.addEventListener("keydown", function(e) {
  console.log("Key: " + e.key);
});

```

*Hint:* e.key gives the name of the key that was pressed.

**Answer:** `Key: a`

When the 'a' key is pressed, the keydown event fires. `e.key` returns the string "a". If Shift+A was pressed, e.key would be "A" (uppercase).

### Q5. [Easy] What happens when the form is submitted?

```

  
  Go

document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("Form submitted!");
});

```

*Hint:* preventDefault stops the page from reloading.

**Answer:** The console logs "Form submitted!" and the page does NOT reload.

`e.preventDefault()` stops the default form submission behavior (page reload). The handler runs, logs the message, and the page stays as it is.

### Q6. [Medium] What is logged when the button inside the div is clicked?

```

  Click

document.getElementById("outer").addEventListener("click", function() {
  console.log("Outer");
});
document.getElementById("inner").addEventListener("click", function() {
  console.log("Inner");
});

```

*Hint:* Events bubble from child to parent.

**Answer:** `Inner`
`Outer`

When the button is clicked, its handler runs first ("Inner"). Then the event bubbles up to the div, triggering its handler ("Outer"). This is event bubbling.

### Q7. [Medium] What is logged when the button is clicked?

```

  Click

document.getElementById("parent").addEventListener("click", function() {
  console.log("Parent");
});
document.getElementById("child").addEventListener("click", function(e) {
  e.stopPropagation();
  console.log("Child");
});

```

*Hint:* stopPropagation prevents the event from bubbling up.

**Answer:** `Child`

`e.stopPropagation()` stops the event from bubbling to the parent. Only "Child" is logged. Without stopPropagation, "Parent" would also be logged.

### Q8. [Medium] Given this HTML, what is logged when 'Banana' is clicked?

```

  Apple
  Banana
  Cherry

document.getElementById("fruits").addEventListener("click", function(e) {
  console.log("Clicked:", e.target.textContent);
  console.log("Listener on:", e.currentTarget.id);
});

```

*Hint:* e.target is what was clicked. e.currentTarget is where the listener is attached.

**Answer:** `Clicked: Banana`
`Listener on: fruits`

`e.target` is the li element that was actually clicked ("Banana"). `e.currentTarget` is the ul element where the listener is attached (id="fruits"). This is event delegation in action.

### Q9. [Medium] What is logged?

```
Click

const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  console.log("First");
});

btn.addEventListener("click", function() {
  console.log("Second");
});

btn.addEventListener("click", function() {
  console.log("Third");
});

```

*Hint:* Multiple listeners on the same element run in the order they were added.

**Answer:** `First`
`Second`
`Third`

You can add multiple event listeners to the same element for the same event. They run in the order they were registered.

### Q10. [Medium] What happens when the button is clicked?

```
Click Me

function greet() {
  console.log("Hello!");
}

const btn = document.getElementById("btn");
btn.addEventListener("click", greet);
btn.removeEventListener("click", greet);

```

*Hint:* The listener is added and then immediately removed.

**Answer:** Nothing happens when the button is clicked. No console output.

The event listener is added with addEventListener but immediately removed with removeEventListener. Since the same function reference (greet) is used for both, the removal works. Clicking the button does nothing.

### Q11. [Hard] What is logged when the button is clicked?

```
Click

const btn = document.getElementById("btn");
let count = 0;

function handleClick() {
  count++;
  console.log("Count: " + count);
  if (count >= 3) {
    btn.removeEventListener("click", handleClick);
    console.log("Listener removed");
  }
}

btn.addEventListener("click", handleClick);

```

The button is clicked 5 times.

*Hint:* After 3 clicks, the listener removes itself.

**Answer:** `Count: 1`
`Count: 2`
`Count: 3`
`Listener removed`
(Clicks 4 and 5 produce no output)

The first 3 clicks increment the count and log it. On the 3rd click, count reaches 3, so the listener removes itself. Clicks 4 and 5 do nothing because there is no listener anymore.

### Q12. [Hard] What is logged when 'Enter' is pressed while the input is focused?

```

const input = document.getElementById("search");

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    console.log("Searching for: " + this.value);
    console.log("Input or Textarea: " + (e.target.tagName));
  }
});

```

*Hint:* 'this' in a regular function handler refers to the element the listener is on. tagName returns uppercase.

**Answer:** `Searching for: JavaScript`
`Input or Textarea: INPUT`

When Enter is pressed, e.key is "Enter". `this.value` returns "JavaScript" (the input's current value). `e.target.tagName` returns "INPUT" (tag names are always uppercase).

### Q13. [Hard] What is logged?

```

  Save
  Delete
  Edit

document.getElementById("container").addEventListener("click", function(e) {
  if (e.target.classList.contains("btn")) {
    const action = e.target.getAttribute("data-action");
    console.log("Action: " + action);
  }
});

```

The user clicks the 'Delete' button.

*Hint:* Event delegation with data attributes to determine the action.

**Answer:** `Action: delete`

The listener is on the container div (event delegation). When Delete is clicked, `e.target` is the Delete button. It has class "btn" so the if-check passes. `getAttribute("data-action")` returns "delete".

### Q14. [Easy] What is logged?

```

const input = document.getElementById("name");

input.addEventListener("focus", function() {
  console.log("Focused");
});

input.addEventListener("blur", function() {
  console.log("Blurred");
});

```

The user clicks the input, types 'Hi', then clicks outside the input.

*Hint:* focus fires when the input gains focus, blur when it loses focus.

**Answer:** `Focused`
`Blurred`

Clicking the input triggers `focus` (logged "Focused"). Typing does not trigger focus or blur. Clicking outside the input triggers `blur` (logged "Blurred").

### Q15. [Medium] What is the difference in output between input and change events?

```

const field = document.getElementById("field");

field.addEventListener("input", function() {
  console.log("input: " + field.value);
});

field.addEventListener("change", function() {
  console.log("change: " + field.value);
});

```

The user types 'Hi' and then clicks outside the input.

*Hint:* input fires on every keystroke. change fires when the value changes AND the element loses focus.

**Answer:** `input: H`
`input: Hi`
`change: Hi`

The `input` event fires on every keystroke: once for 'H', once for 'Hi'. The `change` event fires once when the input loses focus AND the value has changed since it gained focus.

### Q16. [Hard] What is logged?

```
Click

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  console.log("this:", this === window);
});

btn.addEventListener("click", function() {
  console.log("this:", this === btn);
});

```

*Hint:* Arrow functions do not have their own 'this'. Regular functions get 'this' set to the element.

**Answer:** `this: true`
`this: true`

In an arrow function event handler, `this` is the outer scope's this (which is `window` in a script). In a regular function handler, `this` is the element the listener is attached to (the button). Both comparisons are true.

### Q17. [Hard] What is logged when the user presses Ctrl+Enter?

```

document.addEventListener("keydown", function(e) {
  console.log("key:", e.key);
  console.log("ctrlKey:", e.ctrlKey);
  console.log("shiftKey:", e.shiftKey);
  console.log("altKey:", e.altKey);
});

```

*Hint:* Modifier key properties (ctrlKey, shiftKey, altKey) are booleans.

**Answer:** `key: Enter`
`ctrlKey: true`
`shiftKey: false`
`altKey: false`

When Ctrl+Enter is pressed, `e.key` is "Enter". `e.ctrlKey` is true because Ctrl is held. `e.shiftKey` and `e.altKey` are false because Shift and Alt are not held.

### Q18. [Easy] What happens when this code runs?

```
Click Me

const btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  btn.textContent = "Clicked!";
  btn.disabled = true;
});

```

*Hint:* Setting disabled to true prevents further clicks.

**Answer:** On the first click, the button text changes to "Clicked!" and the button becomes disabled. It cannot be clicked again.

The handler changes the button text and sets `disabled = true`. A disabled button does not fire click events, so this creates a one-time-use button.

## Mixed Questions

### Q1. [Easy] What is logged when the button is clicked twice?

```
Toggle

let isOn = false;
document.getElementById("btn").addEventListener("click", function() {
  isOn = !isOn;
  console.log(isOn);
});

```

*Hint:* !false is true, !true is false.

**Answer:** `true`
`false`

First click: isOn goes from false to true (logged). Second click: isOn goes from true to false (logged). The `!` operator toggles the boolean.

### Q2. [Easy] What does this code do?

```
[Google](https://google.com)

document.getElementById("link").addEventListener("click", function(e) {
  e.preventDefault();
  console.log("Link click prevented!");
});

```

*Hint:* preventDefault stops the default link navigation.

**Answer:** Clicking the link does NOT navigate to Google. Instead, "Link click prevented!" is logged to the console.

`e.preventDefault()` stops the browser from following the link's href. The page stays as is and the console message is logged. This is useful for handling link clicks with custom JavaScript.

### Q3. [Medium] What is logged when 'Item 2' is clicked?

```

  Item 1
  Item 2
  Item 3

document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("ID: " + e.target.dataset.id);
    console.log("Text: " + e.target.textContent);
  }
});

```

*Hint:* dataset gives access to data-* attributes. data-id becomes dataset.id.

**Answer:** `ID: 2`
`Text: Item 2`

Event delegation on the ul. When Item 2 is clicked, `e.target` is that li. `e.target.dataset.id` reads the data-id attribute value ("2"). `e.target.textContent` returns "Item 2".

### Q4. [Medium] What is logged when the button is clicked 3 times?

```
Click

let clicks = [];
document.getElementById("btn").addEventListener("click", function() {
  const now = new Date();
  clicks.push(now.getSeconds());
  document.getElementById("result").textContent = clicks.join(", ");
  console.log("Clicks so far: " + clicks.length);
});

```

*Hint:* Each click adds the current second to the array.

**Answer:** `Clicks so far: 1`
`Clicks so far: 2`
`Clicks so far: 3`

Each click pushes the current second to the clicks array and updates the paragraph. The console shows the running count. The actual seconds depend on when you click.

### Q5. [Easy] What is the difference between the `input` event and the `change` event on a text input?

*Hint:* One fires in real time, the other waits.

**Answer:** The `input` event fires immediately on every change to the input's value (every keystroke, paste, or deletion). The `change` event fires only when the value has changed AND the input loses focus (the user clicks or tabs away). Use `input` for real-time updates and `change` for final values.

For a live search or character counter, use `input`. For processing the final submitted value, use `change`. On checkboxes and select elements, `change` fires immediately when the selection changes.

### Q6. [Medium] What is event delegation and why is it useful?

*Hint:* Think about attaching one listener vs many.

**Answer:** Event delegation is a pattern where you attach a single event listener to a parent element instead of individual listeners to each child. When a child is clicked, the event bubbles up to the parent, where you use `e.target` to identify which child triggered it. Benefits: (1) uses less memory (one listener vs many), (2) works for dynamically added elements, (3) less code to write and maintain.

Example: instead of adding click handlers to 50 list items, add one handler to the ul. If new items are added later, they automatically work because the parent is listening. React and other frameworks use this pattern internally.

### Q7. [Medium] What is the difference between `e.target` and `e.currentTarget`?

*Hint:* One is what was clicked, the other is where the listener lives.

**Answer:** `e.target` is the actual element that was clicked (the most specific element). `e.currentTarget` is the element the event listener is attached to. In event delegation, e.target is the child that was clicked and e.currentTarget is the parent with the listener.

If a click listener is on a ul and you click an li inside it: `e.target` is the li (what was clicked), `e.currentTarget` is the ul (where the listener is). They are the same only when you click directly on the element with the listener.

### Q8. [Hard] What is logged?

```

  
    Click
  

document.getElementById("outer").addEventListener("click", function(e) {
  console.log("outer - target: " + e.target.id + ", currentTarget: " + e.currentTarget.id);
});
document.getElementById("middle").addEventListener("click", function(e) {
  console.log("middle - target: " + e.target.id + ", currentTarget: " + e.currentTarget.id);
});
document.getElementById("inner").addEventListener("click", function(e) {
  console.log("inner - target: " + e.target.id + ", currentTarget: " + e.currentTarget.id);
});

```

The button is clicked.

*Hint:* e.target is always the clicked element. e.currentTarget changes as the event bubbles.

**Answer:** `inner - target: inner, currentTarget: inner`
`middle - target: inner, currentTarget: middle`
`outer - target: inner, currentTarget: outer`

The button is clicked, so `e.target` is always "inner" at every level. As the event bubbles up, `e.currentTarget` changes: it is the element whose listener is currently running.

### Q9. [Hard] What is logged? The user types 'AB' into the input.

```

const field = document.getElementById("field");

field.addEventListener("keydown", function(e) {
  console.log("keydown: " + e.key + " value: " + field.value);
});

field.addEventListener("keyup", function(e) {
  console.log("keyup: " + e.key + " value: " + field.value);
});

```

*Hint:* keydown fires before the character appears. keyup fires after.

**Answer:** `keydown: A value: ` (empty)
`keyup: A value: A`
`keydown: B value: A`
`keyup: B value: AB`

`keydown` fires before the character is inserted into the input, so the value has not updated yet. `keyup` fires after the character is inserted, so the value includes the new character.

### Q10. [Hard] What is logged?

```
Click

const btn = document.getElementById("btn");

btn.onclick = function() {
  console.log("First");
};

btn.onclick = function() {
  console.log("Second");
};

btn.addEventListener("click", function() {
  console.log("Third");
});

```

*Hint:* onclick is a property -- setting it replaces the previous value. addEventListener adds to a list.

**Answer:** `Second`
`Third`

Setting `onclick` as a property replaces the previous handler. The second assignment overwrites the first, so only "Second" runs from onclick. `addEventListener` adds a separate handler, so "Third" also runs. The onclick handler runs before addEventListener handlers.

### Q11. [Medium] What is the output of this scroll handler?

```

let scrollCount = 0;

window.addEventListener("scroll", function() {
  scrollCount++;
});

setTimeout(function() {
  console.log("Scroll events fired: " + scrollCount);
}, 5000);

```

Assume the user scrolls continuously for 5 seconds.

*Hint:* The scroll event fires many times per second during scrolling.

**Answer:** A large number, typically in the hundreds (e.g., "Scroll events fired: 200+"). The exact number depends on how fast and how much the user scrolls.

The `scroll` event fires very rapidly during scrolling -- potentially dozens of times per second. This is why scroll handlers should be lightweight, or you should use techniques like throttling or debouncing to limit how often the handler runs.

### Q12. [Hard] What happens?

```

  
  Submit

document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name");
  if (name.value.trim() === "") {
    name.style.borderColor = "red";
    name.focus();
  } else {
    name.style.borderColor = "green";
    console.log("Submitted: " + name.value);
  }
});

```

The user clicks Submit with an empty input, then types 'Aarav' and submits again.

*Hint:* First submit: empty check triggers. Second submit: name has a value.

**Answer:** First submit: the input border turns red and the input gains focus. Second submit: the input border turns green and "Submitted: Aarav" is logged.

First click: the name value is empty, so borderColor becomes red and `focus()` puts the cursor in the input. Second click: "Aarav" is not empty, so borderColor becomes green and the name is logged.

## Multiple Choice Questions

### Q1. [Easy] Which method is used to attach an event handler to an element?

**Answer:** B

**B is correct.** `addEventListener` is the standard method for attaching event handlers. Option C is an old IE-only method. Options A and D do not exist.

### Q2. [Easy] Which event fires when a user clicks a button?

**Answer:** C

**C is correct.** The `click` event fires when an element is clicked (mouse or touch). Options A, B, and D are not standard DOM events.

### Q3. [Easy] What does `e.preventDefault()` do?

**Answer:** C

**C is correct.** `e.preventDefault()` stops default behaviors like form submission page reload, link navigation, or browser shortcuts. It does not stop JavaScript or remove listeners.

### Q4. [Easy] Which property of the event object tells you which element was clicked?

**Answer:** C

**C is correct.** `e.target` references the element that triggered the event. Options A, B, and D are not properties of DOM events.

### Q5. [Easy] Which event fires on every keystroke in a text input?

**Answer:** B

**B is correct.** The `input` event fires on every change to the value (keystroke, paste, delete). `change` fires only when the element loses focus. `keypress` is deprecated.

### Q6. [Medium] What is event bubbling?

**Answer:** B

**B is correct.** When an event fires on a child element, it bubbles up through all ancestors (parent, grandparent, etc.). A click on a button inside a div also fires click handlers on the div, body, and document.

### Q7. [Medium] Which method stops an event from bubbling to parent elements?

**Answer:** C

**C is correct.** `e.stopPropagation()` prevents the event from bubbling up to parent elements. `e.preventDefault()` stops the default browser action but does not stop bubbling.

### Q8. [Medium] Why can you NOT remove an anonymous function event listener?

**Answer:** B

**B is correct.** Two identical-looking anonymous functions are different objects in memory. `removeEventListener` compares by reference, not by code content. You must store the function in a variable to remove it later.

### Q9. [Medium] Which keyboard event is deprecated and should NOT be used?

**Answer:** C

**C is correct.** `keypress` is deprecated. It only fires for keys that produce characters and does not fire for Escape, arrow keys, Ctrl, etc. Use `keydown` or `keyup` instead.

### Q10. [Medium] What does `e.target.closest('li')` do in event delegation?

**Answer:** B

**B is correct.** `closest('li')` traverses up the DOM tree from the clicked element and returns the first ancestor (or self) that matches the selector. This is essential for reliable event delegation with nested elements.

### Q11. [Hard] What is the value of `this` inside an arrow function event handler?

**Answer:** C

**C is correct.** Arrow functions do not have their own `this`. They inherit `this` from the enclosing scope. In a top-level script, that is `window`. If you need `this` to be the element, use a regular function.

### Q12. [Hard] Which fires first: `DOMContentLoaded` or `load`?

**Answer:** B

**B is correct.** `DOMContentLoaded` fires when the HTML is fully parsed (DOM tree built). `load` fires after everything including images, stylesheets, and iframes have finished loading. DOMContentLoaded is always first.

### Q13. [Hard] What does `{ once: true }` do as a third argument to addEventListener?

**Answer:** A

**A is correct.** `element.addEventListener('click', handler, { once: true })` runs the handler once and then automatically removes the listener. This is useful for one-time actions like welcome modals or first-click tutorials.

### Q14. [Hard] In the event flow, what are the three phases?

**Answer:** B

**B is correct.** Events travel in three phases: (1) Capture phase (from document down to the target), (2) Target phase (on the target element), (3) Bubble phase (from target back up to document). By default, listeners run during the bubble phase.

### Q15. [Easy] What does `e.key` return when the Enter key is pressed?

**Answer:** C

**C is correct.** `e.key` returns the string "Enter" (capital E). Other examples: "Escape", "ArrowUp", "a", "Shift". The old `e.keyCode` (which returns 13) is deprecated.

### Q16. [Medium] What is the difference between `mouseenter` and `mouseover`?

**Answer:** B

**B is correct.** `mouseover` bubbles, which means it fires again when the mouse moves over child elements. `mouseenter` does not bubble, so it fires only once when entering the element. mouseenter/mouseleave are usually preferred for hover effects.

### Q17. [Easy] What happens if you call `addEventListener` with the same function on the same event twice?

**Answer:** B

**B is correct.** If you pass the exact same function reference for the same event type on the same element, the browser ignores the duplicate. The handler runs only once per event.

### Q18. [Hard] What is the difference between `onclick` property and `addEventListener('click', ...)`?

**Answer:** B

**B is correct.** Setting `element.onclick = fn` replaces any previous onclick handler. `addEventListener` adds handlers to a list, so multiple handlers can coexist for the same event.

### Q19. [Medium] Which event fires when the user selects an option from a `` dropdown?

**Answer:** C

**C is correct.** The `change` event fires when the user selects a different option in a select dropdown. The `input` event also fires on select elements in modern browsers, but `change` is the standard and most reliable.

### Q20. [Hard] What does `e.target.closest('li')` return if the click was on a span inside a div (not inside any li)?

**Answer:** C

**C is correct.** `closest('li')` traverses up from the clicked element looking for an li ancestor. If none is found (the element is not inside an li), it returns null. Always check for null before using the result.

## Coding Challenges

### Challenge 1. Live Character Counter for Textarea

**Difficulty:** Easy

Create a textarea with a maximum of 150 characters. Show a live counter below it that says 'X / 150 characters'. Change the counter color to red when over 150.

**Constraints:**

- Use the input event. Use classList.add/remove for the red color, not inline styles.

**Sample input:**

```
Type in the textarea
```

**Sample output:**

```
Counter updates: '45 / 150 characters'. Turns red at 151+.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head>
  <style>
    .over-limit { color: red; font-weight: bold; }
  </style>
</head>
<body>
  <textarea id="text" rows="4" cols="40"></textarea>
  <p id="counter">0 / 150 characters</p>
  <script>
    const text = document.getElementById("text");
    const counter = document.getElementById("counter");
    text.addEventListener("input", function() {
      const len = text.value.length;
      counter.textContent = len + " / 150 characters";
      if (len > 150) {
        counter.classList.add("over-limit");
      } else {
        counter.classList.remove("over-limit");
      }
    });
  </script>
</body>
</html>
```

### Challenge 2. Keyboard Navigation

**Difficulty:** Easy

Create a colored box (div) on the page. Use keydown events to move it: Arrow keys move it 20px in the corresponding direction. Display the current position (x, y) below the box.

**Constraints:**

- Use keydown on the document. Use element.style.left and element.style.top. Use position: absolute on the box.

**Sample input:**

```
Press arrow keys
```

**Sample output:**

```
The box moves around the page. Position display: 'x: 100, y: 60'.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head>
  <style>
    #box { width: 50px; height: 50px; background: #a855f7; position: absolute; top: 100px; left: 100px; border-radius: 8px; }
  </style>
</head>
<body>
  <p id="pos">x: 100, y: 100</p>
  <div id="box"></div>
  <script>
    const box = document.getElementById("box");
    const pos = document.getElementById("pos");
    let x = 100, y = 100;
    document.addEventListener("keydown", function(e) {
      if (e.key === "ArrowUp") y -= 20;
      if (e.key === "ArrowDown") y += 20;
      if (e.key === "ArrowLeft") x -= 20;
      if (e.key === "ArrowRight") x += 20;
      box.style.left = x + "px";
      box.style.top = y + "px";
      pos.textContent = "x: " + x + ", y: " + y;
    });
  </script>
</body>
</html>
```

### Challenge 3. Color Picker with Delegation

**Difficulty:** Medium

Create a grid of 9 colored divs (3x3) using different background colors. Use event delegation on the parent container. When any color div is clicked, change the page body background to that color. Show the selected color code in a paragraph.

**Constraints:**

- Use a single event listener on the parent (event delegation). Store colors in data-color attributes.

**Sample input:**

```
Click any color square
```

**Sample output:**

```
Body background changes to the clicked color. Display shows '#a855f7'.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head>
  <style>
    .grid { display: grid; grid-template-columns: repeat(3, 80px); gap: 8px; }
    .color-box { width: 80px; height: 80px; border-radius: 8px; cursor: pointer; border: 3px solid transparent; }
    .color-box:hover { border-color: #000; }
    body { transition: background-color 0.3s; padding: 20px; font-family: Arial; }
  </style>
</head>
<body>
  <h2>Pick a Color</h2>
  <div class="grid" id="grid">
    <div class="color-box" data-color="#a855f7" style="background:#a855f7"></div>
    <div class="color-box" data-color="#06b6d4" style="background:#06b6d4"></div>
    <div class="color-box" data-color="#f59e0b" style="background:#f59e0b"></div>
    <div class="color-box" data-color="#ef4444" style="background:#ef4444"></div>
    <div class="color-box" data-color="#10b981" style="background:#10b981"></div>
    <div class="color-box" data-color="#3b82f6" style="background:#3b82f6"></div>
    <div class="color-box" data-color="#ec4899" style="background:#ec4899"></div>
    <div class="color-box" data-color="#8b5cf6" style="background:#8b5cf6"></div>
    <div class="color-box" data-color="#14b8a6" style="background:#14b8a6"></div>
  </div>
  <p id="selected">No color selected</p>
  <script>
    document.getElementById("grid").addEventListener("click", function(e) {
      if (e.target.classList.contains("color-box")) {
        const color = e.target.getAttribute("data-color");
        document.body.style.backgroundColor = color;
        document.getElementById("selected").textContent = "Selected: " + color;
      }
    });
  </script>
</body>
</html>
```

### Challenge 4. Interactive Quiz with Score

**Difficulty:** Medium

Create a simple quiz with 3 multiple-choice questions. Each question has 4 radio button options. A 'Check Answers' button at the bottom checks all answers, highlights correct ones in green and wrong ones in red, and shows the score (e.g., '2 / 3').

**Constraints:**

- Use the submit event with preventDefault. Use querySelectorAll to check radio button values. Use classList for green/red highlighting.

**Sample input:**

```
Select answers and click 'Check Answers'
```

**Sample output:**

```
Correct answers highlighted green, wrong ones red. Score: '2 / 3'.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head>
  <style>
    .correct { background: #d1fae5; padding: 8px; border-radius: 4px; }
    .wrong { background: #fecaca; padding: 8px; border-radius: 4px; }
    .question { margin: 16px 0; padding: 12px; border: 1px solid #ddd; border-radius: 8px; }
    button { padding: 10px 20px; background: #a855f7; color: white; border: none; border-radius: 6px; cursor: pointer; }
  </style>
</head>
<body>
  <h2>Quick Quiz</h2>
  <form id="quiz">
    <div class="question" id="q1">
      <p>1. What does DOM stand for?</p>
      <label><input type="radio" name="q1" value="a"> Document Object Model</label><br>
      <label><input type="radio" name="q1" value="b"> Data Object Method</label><br>
      <label><input type="radio" name="q1" value="c"> Digital Output Machine</label>
    </div>
    <div class="question" id="q2">
      <p>2. Which event fires on every keystroke?</p>
      <label><input type="radio" name="q2" value="a"> change</label><br>
      <label><input type="radio" name="q2" value="b"> input</label><br>
      <label><input type="radio" name="q2" value="c"> submit</label>
    </div>
    <div class="question" id="q3">
      <p>3. What does e.preventDefault() do?</p>
      <label><input type="radio" name="q3" value="a"> Stops JavaScript</label><br>
      <label><input type="radio" name="q3" value="b"> Removes the element</label><br>
      <label><input type="radio" name="q3" value="c"> Stops the default browser action</label>
    </div>
    <button type="submit">Check Answers</button>
  </form>
  <p id="score"></p>
  <script>
    const answers = { q1: "a", q2: "b", q3: "c" };
    document.getElementById("quiz").addEventListener("submit", function(e) {
      e.preventDefault();
      let score = 0;
      for (const q in answers) {
        const div = document.getElementById(q);
        const selected = document.querySelector('input[name="' + q + '"]:checked');
        div.classList.remove("correct", "wrong");
        if (selected && selected.value === answers[q]) {
          div.classList.add("correct");
          score++;
        } else {
          div.classList.add("wrong");
        }
      }
      document.getElementById("score").textContent = "Score: " + score + " / 3";
    });
  </script>
</body>
</html>
```

### Challenge 5. Double Click to Edit

**Difficulty:** Hard

Create a list of 5 items. When an item is double-clicked, it turns into an editable text input with the current text. When the user presses Enter or clicks outside (blur), the input is replaced back with the updated text. Use event delegation for the double-click.

**Constraints:**

- Use event delegation (single listener on the ul). Use dblclick event. Use keydown for Enter detection. Use blur for click-outside.

**Sample input:**

```
Double-click 'Read a book', change to 'Read two books', press Enter
```

**Sample output:**

```
The list item text changes from 'Read a book' to 'Read two books'.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head>
  <style>
    li { padding: 10px; cursor: pointer; font-size: 18px; border-bottom: 1px solid #eee; }
    li:hover { background: #f3f4f6; }
    input.edit { font-size: 18px; padding: 8px; width: 100%; border: 2px solid #a855f7; border-radius: 4px; }
  </style>
</head>
<body>
  <h2>Double-Click to Edit</h2>
  <ul id="list">
    <li>Complete homework</li>
    <li>Practice coding</li>
    <li>Read a book</li>
    <li>Go for a walk</li>
    <li>Call a friend</li>
  </ul>
  <script>
    document.getElementById("list").addEventListener("dblclick", function(e) {
      if (e.target.tagName === "LI") {
        const li = e.target;
        const oldText = li.textContent;
        const input = document.createElement("input");
        input.className = "edit";
        input.value = oldText;
        li.textContent = "";
        li.appendChild(input);
        input.focus();
        function save() {
          li.textContent = input.value || oldText;
        }
        input.addEventListener("blur", save);
        input.addEventListener("keydown", function(ev) {
          if (ev.key === "Enter") { input.blur(); }
          if (ev.key === "Escape") { input.value = oldText; input.blur(); }
        });
      }
    });
  </script>
</body>
</html>
```

### Challenge 6. Keyboard Shortcuts Panel

**Difficulty:** Hard

Build a page with a content area and a shortcuts panel. Implement these keyboard shortcuts: Ctrl+B toggles bold on the content, Ctrl+I toggles italic, Ctrl+L toggles a 'large' class (bigger font), Escape hides the shortcuts panel, and 'H' (without Ctrl) toggles the panel visibility. Show which shortcut was last used.

**Constraints:**

- Use keydown on document. Use e.preventDefault() to override browser shortcuts. Use classList.toggle for all styling.

**Sample input:**

```
Press Ctrl+B, then Ctrl+I, then Escape
```

**Sample output:**

```
Content becomes bold, then bold+italic. Panel hides on Escape.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial; padding: 20px; }
    #content { padding: 20px; border: 1px solid #ddd; border-radius: 8px; min-height: 100px; }
    #content.bold { font-weight: bold; }
    #content.italic { font-style: italic; }
    #content.large { font-size: 24px; }
    #panel { margin-top: 16px; padding: 16px; background: #f3f4f6; border-radius: 8px; }
    #panel.hidden { display: none; }
    .shortcut { font-family: monospace; background: #e5e7eb; padding: 2px 6px; border-radius: 4px; }
  </style>
</head>
<body>
  <div id="content">This is the editable content area. Use keyboard shortcuts to style it.</div>
  <div id="panel">
    <h3>Shortcuts</h3>
    <p><span class="shortcut">Ctrl+B</span> Bold | <span class="shortcut">Ctrl+I</span> Italic | <span class="shortcut">Ctrl+L</span> Large | <span class="shortcut">Esc</span> Hide panel | <span class="shortcut">H</span> Toggle panel</p>
  </div>
  <p id="last">Last shortcut: none</p>
  <script>
    const content = document.getElementById("content");
    const panel = document.getElementById("panel");
    const last = document.getElementById("last");
    document.addEventListener("keydown", function(e) {
      if (e.ctrlKey && e.key === "b") { e.preventDefault(); content.classList.toggle("bold"); last.textContent = "Last shortcut: Ctrl+B"; }
      else if (e.ctrlKey && e.key === "i") { e.preventDefault(); content.classList.toggle("italic"); last.textContent = "Last shortcut: Ctrl+I"; }
      else if (e.ctrlKey && e.key === "l") { e.preventDefault(); content.classList.toggle("large"); last.textContent = "Last shortcut: Ctrl+L"; }
      else if (e.key === "Escape") { panel.classList.add("hidden"); last.textContent = "Last shortcut: Escape"; }
      else if (e.key === "h" || e.key === "H") { if (!e.ctrlKey) { panel.classList.toggle("hidden"); last.textContent = "Last shortcut: H"; } }
    });
  </script>
</body>
</html>
```

### Challenge 7. Stopwatch with Start/Stop/Reset

**Difficulty:** Hard

Build a stopwatch with a time display (MM:SS:ms format) and three buttons: Start, Stop, Reset. Start begins counting, Stop pauses it, Reset sets it back to 00:00:00. Also add a Lap button that records the current time and displays it in a list below.

**Constraints:**

- Use setInterval for the timer. Use click events for buttons. Use createElement to add lap times to a list.

**Sample input:**

```
Click Start, wait, click Lap, click Stop, click Reset
```

**Sample output:**

```
Timer counts up. Lap times are recorded. Stop pauses. Reset clears.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial; padding: 20px; text-align: center; }
    #display { font-size: 48px; font-family: monospace; margin: 20px; }
    button { padding: 10px 20px; margin: 4px; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; color: white; }
    #start { background: #10b981; } #stop { background: #ef4444; }
    #reset { background: #6b7280; } #lap { background: #a855f7; }
    #laps { text-align: left; max-width: 300px; margin: 20px auto; }
    #laps li { padding: 4px 0; font-family: monospace; }
  </style>
</head>
<body>
  <h2>Stopwatch</h2>
  <div id="display">00:00:00</div>
  <button id="start">Start</button>
  <button id="stop">Stop</button>
  <button id="reset">Reset</button>
  <button id="lap">Lap</button>
  <ol id="laps"></ol>
  <script>
    let ms = 0, timer = null;
    const display = document.getElementById("display");
    function format(ms) {
      const minutes = String(Math.floor(ms / 6000)).padStart(2, "0");
      const seconds = String(Math.floor((ms % 6000) / 100)).padStart(2, "0");
      const centis = String(ms % 100).padStart(2, "0");
      return minutes + ":" + seconds + ":" + centis;
    }
    document.getElementById("start").addEventListener("click", function() {
      if (!timer) { timer = setInterval(function() { ms++; display.textContent = format(ms); }, 10); }
    });
    document.getElementById("stop").addEventListener("click", function() {
      clearInterval(timer); timer = null;
    });
    document.getElementById("reset").addEventListener("click", function() {
      clearInterval(timer); timer = null; ms = 0; display.textContent = format(ms);
      document.getElementById("laps").innerHTML = "";
    });
    document.getElementById("lap").addEventListener("click", function() {
      const li = document.createElement("li");
      li.textContent = format(ms);
      document.getElementById("laps").appendChild(li);
    });
  </script>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/dom-events-and-listeners/*
