---
title: "Practice: DOM Selection and Manipulation"
description: "58 practice problems for DOM Selection and Manipulation in JavaScript"
slug: dom-selection-and-manipulation-practice
canonical: https://learn.modernagecoders.com/resources/javascript/dom-selection-and-manipulation/practice/
category: "JavaScript"
---
# Practice: DOM Selection and Manipulation

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] Given this HTML and JS, what is logged to the console?

```
Hello World

const el = document.getElementById("title");
console.log(el.textContent);

```

*Hint:* textContent returns the text inside the element.

**Answer:** `Hello World`

`getElementById("title")` selects the h1 element. `textContent` returns the plain text inside it, which is "Hello World".

### Q2. [Easy] What does this code log?

```
Good **Morning**

const p = document.getElementById("msg");
console.log(p.textContent);
console.log(p.innerHTML);

```

*Hint:* textContent strips HTML tags. innerHTML preserves them.

**Answer:** `Good Morning`
`Good Morning`

`textContent` returns the raw text without any HTML tags: "Good Morning". `innerHTML` returns the full HTML content including tags: "Good <strong>Morning</strong>".

### Q3. [Easy] What is logged?

```

  Apple
  Banana
  Cherry

const items = document.querySelectorAll(".item");
console.log(items.length);

```

*Hint:* querySelectorAll returns all matching elements.

**Answer:** `3`

There are three `` elements with class "item". `querySelectorAll(".item")` selects all of them, and `.length` returns 3.

### Q4. [Easy] What does this code log?

```

const input = document.getElementById("username");
console.log(input.value);
input.value = "Priya";
console.log(input.value);

```

*Hint:* The .value property reads and sets the current value of an input.

**Answer:** `Aarav`
`Priya`

Initially the input's value is "Aarav". After setting `input.value = "Priya"`, the value changes. Both the displayed text in the input field and the property update.

### Q5. [Easy] What is logged?

```
Hello

const box = document.getElementById("box");
console.log(box.classList.contains("active"));
console.log(box.classList.contains("hidden"));

```

*Hint:* classList.contains() checks if an element has a specific class.

**Answer:** `true`
`false`

The div has classes "card" and "active". `contains("active")` returns true because the class exists. `contains("hidden")` returns false because it does not.

### Q6. [Easy] What is logged after this code runs?

```
Original

const p = document.getElementById("text");
p.textContent = "Updated";
console.log(p.textContent);

```

*Hint:* Setting textContent replaces the element's text.

**Answer:** `Updated`

We set `p.textContent = "Updated"`, which replaces "Original" with "Updated". The console.log confirms the new value.

### Q7. [Medium] What is logged?

```
Hello

const box = document.getElementById("box");
const result1 = box.classList.toggle("active");
console.log(result1);
console.log(box.className);

const result2 = box.classList.toggle("active");
console.log(result2);
console.log(box.className);

```

*Hint:* toggle() returns true if the class was added, false if removed. className returns all classes as a string.

**Answer:** `true`
`card active`
`false`
`card`

First toggle: "active" was not present, so it is added. Returns true. className is "card active". Second toggle: "active" is present, so it is removed. Returns false. className is "card".

### Q8. [Medium] What is logged?

```

const img = document.getElementById("pic");
console.log(img.getAttribute("alt"));
img.setAttribute("alt", "A dog");
console.log(img.getAttribute("alt"));
console.log(img.hasAttribute("title"));

```

*Hint:* getAttribute reads, setAttribute writes, hasAttribute checks existence.

**Answer:** `A cat`
`A dog`
`false`

Initially alt is "A cat". After setAttribute, alt becomes "A dog". The img has no title attribute, so hasAttribute("title") returns false.

### Q9. [Medium] What does the h1 display after this code runs?

```
Welcome

const h1 = document.getElementById("heading");
h1.innerHTML = "Hello World";

```

*Hint:* innerHTML parses and renders HTML tags.

**Answer:** The h1 displays "Hello World" -- the word "Hello" in default color and "World" in red.

`innerHTML` parses the HTML string. The `` tag is rendered as an actual span element with red text. The h1 now contains two nodes: the text "Hello " and a red span with "World".

### Q10. [Medium] What does this code log?

```

  One
  Two
  Three

const first = document.querySelector("#list li");
const all = document.querySelectorAll("#list li");
console.log(first.textContent);
console.log(all.length);
console.log(all[2].textContent);

```

*Hint:* querySelector returns the first match. querySelectorAll returns all. NodeList is zero-indexed.

**Answer:** `One`
`3`
`Three`

`querySelector` returns the first li: "One". `querySelectorAll` returns all three li elements (length 3). Index 2 is the third element: "Three".

### Q11. [Medium] What is logged?

```
Hello

const box = document.getElementById("box");
box.style.color = "white";
box.style.backgroundColor = "#a855f7";
box.style.padding = "20px";
console.log(box.style.color);
console.log(box.style.backgroundColor);
console.log(box.style.margin);

```

*Hint:* element.style only reads inline styles, not styles from a stylesheet.

**Answer:** `white`
`#a855f7`
`` (empty string)

We set color, backgroundColor, and padding as inline styles. Reading them back works. But margin was never set as an inline style, so `box.style.margin` returns an empty string. Note: element.style only reads inline styles, not CSS file styles.

### Q12. [Medium] What does this code log?

```
Hello

const p = document.getElementById("demo");
p.textContent = "**Bold**";
console.log(p.textContent);
console.log(p.innerHTML);

```

*Hint:* textContent does not parse HTML. It treats everything as plain text.

**Answer:** `Bold`
`Bold`

When you set `textContent`, the string is treated as plain text, not HTML. The tags are displayed as literal text on the page. Internally, the browser escapes the angle brackets in innerHTML, showing the encoded version.

### Q13. [Hard] What is logged?

```
A

B

C

const redBoxes = document.querySelectorAll('.box[data-color="red"]');
console.log(redBoxes.length);
redBoxes.forEach(function(box) {
  console.log(box.textContent);
});

```

*Hint:* Attribute selectors filter by attribute value.

**Answer:** `2`
`A`
`C`

The selector `.box[data-color="red"]` matches elements with class "box" AND data-color="red". Two elements match (A and C). The forEach logs their text content.

### Q14. [Hard] What is logged?

```

  First

  Second

  Third

const el = document.querySelector(".text.highlight");
console.log(el.textContent);

const notFound = document.querySelector(".text.missing");
console.log(notFound);

```

*Hint:* querySelector returns null when no element matches the selector.

**Answer:** `Second`
`null`

`.text.highlight` matches the element with both classes: the second p with text "Second". `.text.missing` matches nothing because no element has both "text" and "missing" classes, so querySelector returns `null`.

### Q15. [Hard] What does the paragraph display on the page after this code runs?

```
Name: Guest

const nameSpan = document.getElementById("name");
nameSpan.textContent = "Aarav";

const info = document.getElementById("info");
console.log(info.textContent);
console.log(info.innerHTML);

```

*Hint:* Changing the span's text changes it inside the parent too.

**Answer:** Console logs:
`Name: Aarav`
`Name: Aarav`

We changed the span's textContent to "Aarav". The parent p's textContent returns all nested text: "Name: Aarav". The parent's innerHTML shows the span tag is still there with the updated text inside.

### Q16. [Hard] What is logged?

```
Hello

const box = document.getElementById("box");
box.classList.add("active", "large");
console.log(box.className);

box.classList.remove("card", "large");
console.log(box.className);

box.classList.toggle("hidden");
box.classList.toggle("active");
console.log(box.className);

```

*Hint:* Track the classes step by step. add/remove can take multiple arguments.

**Answer:** `card active large`
`active`
`hidden`

Start: "card". After add("active", "large"): "card active large". After remove("card", "large"): "active". Toggle "hidden" (adds it): "active hidden". Toggle "active" (removes it): "hidden".

### Q17. [Hard] What does this code log?

```

  Red
  Green
  Blue

const select = document.getElementById("color");
console.log(select.value);
console.log(select.selectedIndex);
select.value = "blue";
console.log(select.value);
console.log(select.selectedIndex);

```

*Hint:* The selected attribute determines the initial value. selectedIndex is zero-based.

**Answer:** `green`
`1`
`blue`
`2`

Initially, "green" is selected (index 1). After setting value to "blue", the select changes to blue (index 2). selectedIndex is 0-based: red=0, green=1, blue=2.

### Q18. [Easy] What is logged?

```
[Visit](https://example.com)

const link = document.getElementById("link");
console.log(link.textContent);
console.log(link.getAttribute("href"));

```

*Hint:* textContent gives the visible text. getAttribute reads the attribute value.

**Answer:** `Visit`
`https://example.com`

The anchor's visible text is "Visit" (textContent). The href attribute value is "https://example.com" (getAttribute).

## Mixed Questions

### Q1. [Easy] What does this code do?

```
Click Me

const btn = document.getElementById("btn");
btn.textContent = "Clicked!";
btn.style.backgroundColor = "green";
btn.style.color = "white";

```

*Hint:* The code runs immediately, not on click.

**Answer:** The button immediately shows "Clicked!" with a green background and white text. No click is needed because the code runs as soon as the page loads.

This code does not set up a click handler. It runs immediately and changes the button's text to "Clicked!", background to green, and text color to white. The button appears already changed when the page loads.

### Q2. [Easy] What does this code log?

```
Hello

const box = document.querySelector("#box");
const box2 = document.getElementById("box");
console.log(box === box2);

```

*Hint:* Both methods select the same element.

**Answer:** `true`

Both `querySelector("#box")` and `getElementById("box")` select the exact same DOM element. Since they reference the same object, `===` returns true.

### Q3. [Medium] What is logged?

```

  HTML
  CSS
  JavaScript

const tags = document.querySelectorAll(".tag");
const arr = Array.from(tags);
const result = arr.map(tag => tag.textContent.toUpperCase());
console.log(result);

```

*Hint:* Array.from converts a NodeList to an array, enabling map().

**Answer:** `["HTML", "CSS", "JAVASCRIPT"]`

querySelectorAll returns a NodeList. Array.from converts it to an array. map() transforms each element's textContent to uppercase. The result is an array of uppercase strings.

### Q4. [Medium] After this code runs, what CSS classes does the div have?

```
Hello

const card = document.getElementById("card");
card.classList.add("active");
card.classList.add("active");  // Adding same class again
card.classList.toggle("card");
card.classList.toggle("new");
console.log(card.className);

```

*Hint:* Adding a class that already exists does nothing. Toggle removes if present, adds if missing.

**Answer:** `active new`

Start: "card". Add "active": "card active". Add "active" again: no change (already present). Toggle "card": removes it (was present). Toggle "new": adds it (was missing). Final: "active new".

### Q5. [Medium] What does this code log?

```

const checkbox = document.getElementById("agree");
console.log(checkbox.checked);
console.log(checkbox.value);
checkbox.checked = true;
console.log(checkbox.checked);

```

*Hint:* Checkboxes have a checked property (boolean) and a value property.

**Answer:** `false`
`on`
`true`

The checkbox is unchecked by default, so `checked` is false. The default `value` of a checkbox (when no value attribute is set) is "on". After setting `checked = true`, the checkbox becomes checked.

### Q6. [Medium] What does this code log?

```

  Aarav
  Priya
  Rohan

const items = document.querySelectorAll("#list li");
let names = "";
items.forEach(function(item, index) {
  names += index + ": " + item.textContent + " ";
});
console.log(names.trim());

```

*Hint:* forEach on a NodeList provides the element and its index.

**Answer:** `0: Aarav 1: Priya 2: Rohan`

forEach loops through each li element. The callback receives the element and its index. We build a string with the index and text of each item, then trim the trailing space.

### Q7. [Hard] What does this code log?

```

  Hello

const outer = document.getElementById("outer");
const inner = document.getElementById("inner");

outer.innerHTML = "Replaced

";

const innerAgain = document.getElementById("inner");
console.log(inner.textContent);
console.log(innerAgain.textContent);
console.log(inner === innerAgain);

```

*Hint:* innerHTML destroys old elements and creates new ones. The old reference still points to the old element.

**Answer:** `Hello`
`Replaced`
`false`

Setting `innerHTML` destroys the old p element and creates a new one. The variable `inner` still references the old (now detached) element with text "Hello". `innerAgain` references the new element with text "Replaced". They are different objects.

### Q8. [Hard] What does this code log?

```
Text

const box = document.getElementById("box");
console.log(box.style.color);
console.log(box.style.fontSize);
box.style.cssText = "background: blue;";
console.log(box.style.color);
console.log(box.style.cssText);

```

*Hint:* Setting style.cssText replaces ALL inline styles with the new string.

**Answer:** `red`
`20px`
`` (empty string)
`background: blue;`

Initially, color is "red" and fontSize is "20px" from inline styles. Setting `style.cssText` replaces the entire inline style. After the replacement, only "background: blue" remains. Color is now an empty string because it was removed.

### Q9. [Easy] What is the difference between `textContent` and `innerHTML`?

*Hint:* One treats the content as plain text, the other as HTML.

**Answer:** `textContent` gets or sets the plain text inside an element. It ignores HTML tags and treats everything as text. `innerHTML` gets or sets the HTML content, parsing and rendering any HTML tags. For security, use textContent when dealing with user input to prevent XSS attacks.

Example: setting `el.textContent = "Bold"` displays the literal text `Bold` on the page. Setting `el.innerHTML = "Bold"` renders the word **Bold** in bold.

### Q10. [Medium] Why should you avoid using `innerHTML` with user input?

*Hint:* Think about what happens if a user types a script tag.

**Answer:** Using innerHTML with user input creates a Cross-Site Scripting (XSS) vulnerability. If a user enters ``, innerHTML will parse it as real HTML and execute the JavaScript. Always use `textContent` for user input, which treats everything as safe plain text.

XSS is one of the most common web security vulnerabilities. Attackers can steal cookies, redirect users, or deface websites. The simple fix is: use textContent for user-provided data, and only use innerHTML with trusted, developer-controlled content.

### Q11. [Medium] What is the difference between `querySelector` and `getElementById`?

*Hint:* Think about what selectors each one accepts.

**Answer:** `getElementById` only selects by ID and takes the ID string without the # symbol. `querySelector` accepts any CSS selector (#id, .class, tag, [attribute], combinations). getElementById is slightly faster for ID lookups, but querySelector is more flexible and is the modern approach.

Both `getElementById("title")` and `querySelector("#title")` select the same element. But querySelector can also do `querySelector(".card.active")`, `querySelector("ul li:first-child")`, and other complex selectors that getElementById cannot.

### Q12. [Hard] What does this code log?

```
Hello

const p = document.getElementById("text");
const classes = [...p.classList];
console.log(classes);
console.log(typeof p.classList);
console.log(Array.isArray(p.classList));
console.log(Array.isArray(classes));

```

*Hint:* classList is a DOMTokenList, not an array. Spreading converts it.

**Answer:** `["blue", "bold"]`
`object`
`false`
`true`

`classList` is a DOMTokenList object. Spreading it with `[...p.classList]` creates a real array. `typeof` returns "object" for both arrays and DOMTokenLists. `Array.isArray` correctly distinguishes them.

## Multiple Choice Questions

### Q1. [Easy] Which method selects an element by its ID?

**Answer:** B

**B is correct.** `document.getElementById()` selects a single element by its unique ID. Option A uses CSS selectors. Option C selects by class name. Option D does not exist.

### Q2. [Easy] What does `document.querySelectorAll('.item')` return?

**Answer:** C

**C is correct.** `querySelectorAll` returns a NodeList containing all matching elements. A NodeList is array-like but not a true array. It supports forEach but not map or filter directly.

### Q3. [Easy] Which property should you use to safely display user input on a page?

**Answer:** C

**C is correct.** `textContent` treats the input as plain text and does not parse HTML tags, preventing XSS attacks. `innerHTML` would parse and execute any HTML or scripts in the input.

### Q4. [Easy] How do you read the current value of a text input field?

**Answer:** D

**D is correct.** The `.value` property reads and sets the current value of input, textarea, and select elements. textContent and innerHTML are for reading content of regular HTML elements, not form inputs.

### Q5. [Easy] What does `getElementById` return if no element matches?

**Answer:** C

**C is correct.** `getElementById` returns `null` when no element with that ID exists. This is important to check before using the element to avoid TypeError.

### Q6. [Easy] How do you write `background-color` in JavaScript's style property?

**Answer:** B

**B is correct.** CSS property names with hyphens are converted to camelCase in JavaScript. Remove the hyphen and capitalize the next letter: background-color becomes backgroundColor.

### Q7. [Medium] What does `classList.toggle('active')` do?

**Answer:** C

**C is correct.** `toggle()` adds the class if it is not present and removes it if it is. It returns true if the class was added and false if it was removed.

### Q8. [Medium] Which selector would match `` but NOT ``?

**Answer:** C

**C is correct.** `.item.active` (no space) selects elements with BOTH classes. `.item .active` (with space) selects .active elements that are descendants of .item elements. Option A matches both because both have class 'item'.

### Q9. [Medium] What is the security risk of using `innerHTML` with user input?

**Answer:** B

**B is correct.** XSS (Cross-Site Scripting) occurs when user input containing malicious HTML or JavaScript is inserted into the page via innerHTML. The browser executes the injected code, which can steal data or hijack sessions.

### Q10. [Medium] How do you convert a NodeList to a real array?

**Answer:** B

**B is correct.** `Array.from(nodeList)` and the spread operator `[...nodeList]` both convert a NodeList to a real array, enabling methods like map, filter, and reduce.

### Q11. [Medium] What does `element.style.fontSize` read?

**Answer:** C

**C is correct.** `element.style` only reads inline styles (styles set directly on the element via the style attribute or JS). To get the computed style from all CSS sources, use `getComputedStyle(element)`.

### Q12. [Hard] What happens when you set `element.innerHTML = ''`?

**Answer:** B

**B is correct.** Setting innerHTML to an empty string removes all child nodes (elements and text) inside the element. The element itself remains in the DOM, just empty.

### Q13. [Hard] What does `setAttribute('disabled', '')` do to a button?

**Answer:** C

**C is correct.** HTML boolean attributes like `disabled`, `checked`, and `readonly` are active simply by being present on the element. The value does not matter. Even `disabled=""` disables the button.

### Q14. [Hard] Which method returns the styles actually applied to an element (including styles from CSS files)?

**Answer:** C

**C is correct.** `getComputedStyle(element)` returns the final computed values of all CSS properties, including those from stylesheets, inherited styles, and browser defaults. `element.style` only reads inline styles.

### Q15. [Hard] What is the difference between `removeAttribute('disabled')` and `element.disabled = false`?

**Answer:** B

**B is correct.** `removeAttribute` removes the attribute from the HTML markup. Setting the property to false changes the element's behavior. Both effectively enable the element, but they work at different levels (attribute vs. property).

### Q16. [Easy] Which selector selects the first child `` inside `#list`?

**Answer:** A

**A is correct.** `querySelector` returns the first matching element. `#list li` matches all li elements inside #list, but querySelector only returns the first one.

### Q17. [Medium] What does `element.className` return?

**Answer:** C

**C is correct.** `className` returns a string like `"card active large"`. For individual class manipulation, use `classList` which provides add, remove, toggle, and contains methods.

### Q18. [Hard] Why should you place `` tags at the end of the ``?

**Answer:** B

**B is correct.** The browser parses HTML top to bottom. If a script in the `` tries to access an element in the body, the element does not exist yet and getElementById returns null. Placing scripts at the end ensures all elements are loaded.

## Coding Challenges

### Challenge 1. Live Character Counter

**Difficulty:** Easy

Create an HTML page with a textarea and a paragraph below it. As the user types in the textarea, show the character count in the paragraph. Example: 'Characters: 15'.

**Constraints:**

- Use the 'input' event on the textarea and textContent to update the count.

**Sample input:**

```
(No input required -- type in the textarea)
```

**Sample output:**

```
Characters: 0 (updates as you type)
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <textarea id="text" rows="4" cols="40" placeholder="Start typing..."></textarea>
  <p id="count">Characters: 0</p>
  <script>
    const textarea = document.getElementById("text");
    const countDisplay = document.getElementById("count");
    textarea.addEventListener("input", function() {
      countDisplay.textContent = "Characters: " + textarea.value.length;
    });
  </script>
</body>
</html>
```

### Challenge 2. Profile Card Builder

**Difficulty:** Easy

Create a form with fields for name, age, and hobby. When a 'Generate Card' button is clicked, display a styled card below the form showing the entered information. Use textContent for security.

**Constraints:**

- Use getElementById to get input values. Use textContent (not innerHTML) to display user input.

**Sample input:**

```
Name: Aarav, Age: 15, Hobby: Coding
```

**Sample output:**

```
A card appears showing: Name: Aarav, Age: 15, Hobby: Coding
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head>
  <style>
    .card { padding: 16px; border: 2px solid #a855f7; border-radius: 8px; margin-top: 16px; display: none; }
    .card.visible { display: block; }
  </style>
</head>
<body>
  <input type="text" id="name" placeholder="Name">
  <input type="number" id="age" placeholder="Age">
  <input type="text" id="hobby" placeholder="Hobby">
  <button id="generate">Generate Card</button>
  <div class="card" id="card">
    <p id="card-name"></p>
    <p id="card-age"></p>
    <p id="card-hobby"></p>
  </div>
  <script>
    document.getElementById("generate").addEventListener("click", function() {
      document.getElementById("card-name").textContent = "Name: " + document.getElementById("name").value;
      document.getElementById("card-age").textContent = "Age: " + document.getElementById("age").value;
      document.getElementById("card-hobby").textContent = "Hobby: " + document.getElementById("hobby").value;
      document.getElementById("card").classList.add("visible");
    });
  </script>
</body>
</html>
```

### Challenge 3. Color Theme Switcher

**Difficulty:** Medium

Create a page with three buttons: 'Purple', 'Teal', 'Amber'. Clicking each button should change the page's background color and text color using classList. Define three CSS classes (.theme-purple, .theme-teal, .theme-amber) with different color schemes. Only one theme should be active at a time.

**Constraints:**

- Use classList.add and classList.remove. Do not use inline styles. Remove the previous theme class before adding the new one.

**Sample input:**

```
(Click buttons)
```

**Sample output:**

```
Background and text colors change based on which button is clicked.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial; padding: 20px; transition: all 0.3s; }
    .theme-purple { background: #a855f7; color: white; }
    .theme-teal { background: #06b6d4; color: white; }
    .theme-amber { background: #f59e0b; color: #1a1a1a; }
  </style>
</head>
<body>
  <h1>Theme Switcher</h1>
  <button id="purple">Purple</button>
  <button id="teal">Teal</button>
  <button id="amber">Amber</button>
  <script>
    const themes = ["theme-purple", "theme-teal", "theme-amber"];
    function setTheme(theme) {
      themes.forEach(function(t) { document.body.classList.remove(t); });
      document.body.classList.add(theme);
    }
    document.getElementById("purple").addEventListener("click", function() { setTheme("theme-purple"); });
    document.getElementById("teal").addEventListener("click", function() { setTheme("theme-teal"); });
    document.getElementById("amber").addEventListener("click", function() { setTheme("theme-amber"); });
  </script>
</body>
</html>
```

### Challenge 4. Student List Filter

**Difficulty:** Medium

Create an HTML page with a list of 6 student names (as li elements with a class 'student'). Add a text input at the top. As the user types, hide students whose names do not match the search text (case-insensitive). Use classList to add/remove a 'hidden' class.

**Constraints:**

- Use querySelectorAll, forEach, textContent.toLowerCase(), and classList.toggle or add/remove.

**Sample input:**

```
Type 'pr' in the search box
```

**Sample output:**

```
Only 'Priya' and 'Pramod' remain visible. Other students are hidden.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head>
  <style>
    .hidden { display: none; }
    li { padding: 8px; font-size: 18px; }
  </style>
</head>
<body>
  <input type="text" id="search" placeholder="Search students...">
  <ul>
    <li class="student">Aarav</li>
    <li class="student">Priya</li>
    <li class="student">Rohan</li>
    <li class="student">Meera</li>
    <li class="student">Pramod</li>
    <li class="student">Kavya</li>
  </ul>
  <script>
    const search = document.getElementById("search");
    const students = document.querySelectorAll(".student");
    search.addEventListener("input", function() {
      const query = search.value.toLowerCase();
      students.forEach(function(student) {
        const name = student.textContent.toLowerCase();
        if (name.includes(query)) {
          student.classList.remove("hidden");
        } else {
          student.classList.add("hidden");
        }
      });
    });
  </script>
</body>
</html>
```

### Challenge 5. Attribute Inspector

**Difficulty:** Medium

Create a page with an image element that has src, alt, width, and a data-photographer attribute. Add four buttons: 'Show src', 'Show alt', 'Change alt', 'Remove data-photographer'. Each button should perform its action and display the result in a paragraph below using getAttribute, setAttribute, and removeAttribute.

**Constraints:**

- Use getAttribute, setAttribute, removeAttribute, and hasAttribute.

**Sample input:**

```
(Click buttons)
```

**Sample output:**

```
Clicking 'Show src' displays the image source URL. Clicking 'Remove data-photographer' removes that attribute.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <img id="photo" src="https://placehold.co/200x150" alt="A scenic view" width="200" data-photographer="Aarav">
  <br>
  <button id="show-src">Show src</button>
  <button id="show-alt">Show alt</button>
  <button id="change-alt">Change alt</button>
  <button id="remove-data">Remove data-photographer</button>
  <p id="output"></p>
  <script>
    const img = document.getElementById("photo");
    const output = document.getElementById("output");
    document.getElementById("show-src").addEventListener("click", function() {
      output.textContent = "src: " + img.getAttribute("src");
    });
    document.getElementById("show-alt").addEventListener("click", function() {
      output.textContent = "alt: " + img.getAttribute("alt");
    });
    document.getElementById("change-alt").addEventListener("click", function() {
      img.setAttribute("alt", "Updated scenic view");
      output.textContent = "alt changed to: " + img.getAttribute("alt");
    });
    document.getElementById("remove-data").addEventListener("click", function() {
      img.removeAttribute("data-photographer");
      output.textContent = "Has data-photographer: " + img.hasAttribute("data-photographer");
    });
  </script>
</body>
</html>
```

### Challenge 6. Interactive Grade Card

**Difficulty:** Hard

Build a grade card page. Create a table with 5 subjects (Maths, Science, English, Hindi, Computer) and input fields for marks. Add a 'Calculate' button. When clicked: (1) Read all marks from inputs. (2) Calculate total and percentage. (3) Display results below the table. (4) If percentage >= 90, add a 'distinction' class to the result div (gold background). If >= 60, add 'pass' class (green). Otherwise add 'fail' class (red). Use classList for styling.

**Constraints:**

- Use querySelectorAll to get all input values. Use classList for conditional styling. Do not use inline styles.

**Sample input:**

```
Maths: 90, Science: 85, English: 78, Hindi: 92, Computer: 95
```

**Sample output:**

```
Total: 440/500, Percentage: 88%, Class: pass (green background)
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head>
  <style>
    .distinction { background: #fef3c7; border: 2px solid #f59e0b; padding: 16px; border-radius: 8px; }
    .pass { background: #d1fae5; border: 2px solid #10b981; padding: 16px; border-radius: 8px; }
    .fail { background: #fecaca; border: 2px solid #ef4444; padding: 16px; border-radius: 8px; }
    input { width: 60px; padding: 4px; }
  </style>
</head>
<body>
  <h2>Grade Card</h2>
  <table>
    <tr><td>Maths:</td><td><input type="number" class="mark" max="100"></td></tr>
    <tr><td>Science:</td><td><input type="number" class="mark" max="100"></td></tr>
    <tr><td>English:</td><td><input type="number" class="mark" max="100"></td></tr>
    <tr><td>Hindi:</td><td><input type="number" class="mark" max="100"></td></tr>
    <tr><td>Computer:</td><td><input type="number" class="mark" max="100"></td></tr>
  </table>
  <button id="calc">Calculate</button>
  <div id="result"></div>
  <script>
    document.getElementById("calc").addEventListener("click", function() {
      const inputs = document.querySelectorAll(".mark");
      let total = 0;
      inputs.forEach(function(input) { total += Number(input.value) || 0; });
      const percentage = (total / 500) * 100;
      const result = document.getElementById("result");
      result.classList.remove("distinction", "pass", "fail");
      result.textContent = "Total: " + total + "/500, Percentage: " + percentage.toFixed(1) + "%";
      if (percentage >= 90) { result.classList.add("distinction"); }
      else if (percentage >= 60) { result.classList.add("pass"); }
      else { result.classList.add("fail"); }
    });
  </script>
</body>
</html>
```

### Challenge 7. Bulk Style Editor

**Difficulty:** Hard

Create a page with 5 paragraph elements with class 'editable'. Add a control panel with: (1) a color input for text color, (2) a range input (12-36) for font size, (3) a checkbox for bold. As the user changes any control, ALL paragraphs should update their style immediately. Use querySelectorAll and forEach.

**Constraints:**

- Use querySelectorAll to get all paragraphs. Use the input event on controls. You may use inline styles here since the values are dynamic.

**Sample input:**

```
Set color to red, font size to 24, check bold
```

**Sample output:**

```
All 5 paragraphs turn red, 24px, bold simultaneously.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <div>
    <label>Color: <input type="color" id="color" value="#000000"></label>
    <label>Size: <input type="range" id="size" min="12" max="36" value="16"> <span id="size-display">16px</span></label>
    <label><input type="checkbox" id="bold"> Bold</label>
  </div>
  <p class="editable">Paragraph 1 by Aarav</p>
  <p class="editable">Paragraph 2 by Priya</p>
  <p class="editable">Paragraph 3 by Rohan</p>
  <p class="editable">Paragraph 4 by Meera</p>
  <p class="editable">Paragraph 5 by Kavya</p>
  <script>
    const paragraphs = document.querySelectorAll(".editable");
    const colorInput = document.getElementById("color");
    const sizeInput = document.getElementById("size");
    const boldInput = document.getElementById("bold");
    const sizeDisplay = document.getElementById("size-display");
    function updateStyles() {
      const color = colorInput.value;
      const size = sizeInput.value + "px";
      const weight = boldInput.checked ? "bold" : "normal";
      sizeDisplay.textContent = size;
      paragraphs.forEach(function(p) {
        p.style.color = color;
        p.style.fontSize = size;
        p.style.fontWeight = weight;
      });
    }
    colorInput.addEventListener("input", updateStyles);
    sizeInput.addEventListener("input", updateStyles);
    boldInput.addEventListener("change", updateStyles);
  </script>
</body>
</html>
```

### Challenge 8. Accordion FAQ

**Difficulty:** Hard

Build an FAQ accordion. Create 4 question-answer pairs where each question is in a div with class 'question' and the answer is in a div with class 'answer'. Initially all answers are hidden (display: none via a CSS class). Clicking a question toggles its answer visibility. Only one answer should be visible at a time -- clicking a new question hides the previously open answer.

**Constraints:**

- Use querySelectorAll, forEach, classList.toggle, and classList.remove. Do not use inline styles.

**Sample input:**

```
(Click on questions)
```

**Sample output:**

```
Clicking 'What is JavaScript?' shows its answer and hides any other open answer.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head>
  <style>
    .question { padding: 12px; background: #f3f4f6; cursor: pointer; border-bottom: 1px solid #ddd; font-weight: bold; }
    .answer { padding: 12px; display: none; }
    .answer.open { display: block; }
  </style>
</head>
<body>
  <h2>FAQ</h2>
  <div class="faq">
    <div class="question">What is JavaScript?</div>
    <div class="answer">JavaScript is a programming language that makes websites interactive.</div>
    <div class="question">What is the DOM?</div>
    <div class="answer">The DOM is a tree of objects representing your HTML page.</div>
    <div class="question">What is querySelector?</div>
    <div class="answer">querySelector selects the first element matching a CSS selector.</div>
    <div class="question">What is classList?</div>
    <div class="answer">classList provides methods to add, remove, and toggle CSS classes.</div>
  </div>
  <script>
    const questions = document.querySelectorAll(".question");
    questions.forEach(function(q) {
      q.addEventListener("click", function() {
        const answer = q.nextElementSibling;
        const isOpen = answer.classList.contains("open");
        document.querySelectorAll(".answer").forEach(function(a) { a.classList.remove("open"); });
        if (!isOpen) { answer.classList.add("open"); }
      });
    });
  </script>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/dom-selection-and-manipulation/*
