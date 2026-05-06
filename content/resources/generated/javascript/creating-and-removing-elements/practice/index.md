---
title: "Practice: Creating and Removing DOM Elements"
description: "58 practice problems for Creating and Removing DOM Elements in JavaScript"
slug: creating-and-removing-elements-practice
canonical: https://learn.modernagecoders.com/resources/javascript/creating-and-removing-elements/practice
category: "JavaScript"
---
# Practice: Creating and Removing DOM Elements

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] What appears on the page after this code runs?

```

const p = document.createElement("p");
p.textContent = "Hello from JavaScript!";
document.getElementById("box").appendChild(p);

```

*Hint:* createElement creates an element, textContent sets its text, appendChild adds it.

**Answer:** The div now contains a paragraph that says "Hello from JavaScript!".

We create a new `` element, set its text, and append it to the div. The page now shows the text inside the div.

### Q2. [Easy] What is the HTML inside #container after this code?

```

  Original

const newP = document.createElement("p");
newP.textContent = "New";
document.getElementById("container").appendChild(newP);

```

*Hint:* appendChild adds at the end.

**Answer:** The container has two paragraphs: "Original" (first) and "New" (second).

`appendChild` adds the new element as the last child. The original paragraph stays in place, and the new one appears after it.

### Q3. [Easy] What is the HTML inside #container after this code?

```

  Original

const newP = document.createElement("p");
newP.textContent = "First!";
document.getElementById("container").prepend(newP);

```

*Hint:* prepend adds at the beginning.

**Answer:** The container has two paragraphs: "First!" (first) and "Original" (second).

`prepend` adds the new element as the first child, before any existing content.

### Q4. [Easy] What happens after this code runs?

```

  Apple
  Banana
  Cherry

document.getElementById("banana").remove();

```

*Hint:* remove() removes the element from the DOM.

**Answer:** The list now contains only "Apple" and "Cherry". "Banana" is removed.

`element.remove()` removes the element from its parent. The Banana li is no longer in the DOM.

### Q5. [Easy] What appears on the page?

```

const div = document.createElement("div");
div.className = "card";
div.id = "my-card";
div.textContent = "Card content";
document.getElementById("box").appendChild(div);
console.log(div.className);
console.log(div.id);

```

*Hint:* className sets the class, id sets the id.

**Answer:** A div with text "Card content" appears inside #box. Console logs: `card` and `my-card`.

We create a div, set its class to "card", id to "my-card", and text to "Card content". After appending, the div is visible. The console confirms the class and id.

### Q6. [Medium] What does the list contain after this code?

```

  A
  B
  C

const list = document.getElementById("list");
const target = document.getElementById("target");
const newLi = document.createElement("li");
newLi.textContent = "X";
list.insertBefore(newLi, target);

```

*Hint:* insertBefore places the new element before the reference element.

**Answer:** The list contains: A, X, B, C (in that order).

`insertBefore(newLi, target)` places "X" right before "B". The final order is A, X, B, C.

### Q7. [Medium] What does the page show?

```
Old text

const oldP = document.getElementById("old");
const newP = document.createElement("p");
newP.textContent = "New text";
newP.style.color = "green";
oldP.replaceWith(newP);

```

*Hint:* replaceWith swaps the old element for the new one.

**Answer:** The page shows a green paragraph with text "New text". The old paragraph is gone.

`replaceWith` removes the old element from the DOM and puts the new element in its place. The old element no longer exists on the page.

### Q8. [Medium] What is logged?

```

  One

  Two

  Three

const box = document.getElementById("box");
console.log(box.children.length);
console.log(box.firstElementChild.textContent);
console.log(box.lastElementChild.textContent);

```

*Hint:* children returns element children. firstElementChild and lastElementChild are the first and last.

**Answer:** `3`
`One`
`Three`

`children` returns the 3 p elements. `firstElementChild` is the first p ("One"). `lastElementChild` is the last p ("Three").

### Q9. [Medium] What is logged?

```
Hello

const box = document.getElementById("box");
const original = box.firstElementChild;
const clone = original.cloneNode(true);
clone.textContent = "World";
box.appendChild(clone);
console.log(original.textContent);
console.log(clone.textContent);
console.log(box.children.length);

```

*Hint:* cloneNode creates an independent copy. Changing the clone does not affect the original.

**Answer:** `Hello`
`World`
`2`

`cloneNode(true)` creates a deep copy. We change the clone's text to "World" without affecting the original ("Hello"). The box now has 2 children.

### Q10. [Hard] What is the final HTML inside #container?

```

const container = document.getElementById("container");
const p = document.createElement("p");
p.textContent = "Only one";

container.appendChild(p);
container.appendChild(p);
container.appendChild(p);

```

*Hint:* An element can only exist in one place. Appending it again moves it.

**Answer:** The container has one paragraph: "Only one".

A DOM element can only be in one location. Each `appendChild` moves the same element (it does not copy it). After three appends of the same element, it is just in its final position -- still one element.

### Q11. [Hard] What is logged?

```

  A
  B
  C

const list = document.getElementById("list");
while (list.firstChild) {
  list.removeChild(list.firstChild);
}
console.log(list.children.length);
console.log(list.innerHTML);

```

*Hint:* The while loop keeps removing the first child until there are none left.

**Answer:** `0`
`` (empty string)

The while loop removes children one by one until there are none left. After the loop, the ul is empty: 0 children and empty innerHTML. Note: `firstChild` includes text nodes (whitespace), so this removes everything.

### Q12. [Hard] What is logged?

```

const box = document.getElementById("box");
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 3; i++) {
  const p = document.createElement("p");
  p.textContent = "Item " + i;
  fragment.appendChild(p);
}

console.log(fragment.childNodes.length);
console.log(box.children.length);

box.appendChild(fragment);

console.log(fragment.childNodes.length);
console.log(box.children.length);

```

*Hint:* After appending a fragment, its children move to the parent. The fragment becomes empty.

**Answer:** `3`
`0`
`0`
`3`

Before appending: fragment has 3 children, box has 0. After appending the fragment, its children are transferred to box. Fragment becomes empty (0 children), box now has 3.

### Q13. [Medium] What does the page show?

```

  First

  Third

const container = document.getElementById("container");
const third = container.children[1]; // The "Third" paragraph
const second = document.createElement("p");
second.textContent = "Second";
container.insertBefore(second, third);

```

*Hint:* insertBefore(new, reference) places new before reference.

**Answer:** The page shows three paragraphs: "First", "Second", "Third".

`children[1]` is the "Third" paragraph. `insertBefore(second, third)` places "Second" right before "Third". Order: First, Second, Third.

### Q14. [Hard] What is the result?

```

  Original **bold** text

const p = document.querySelector("#box p");
const shallow = p.cloneNode(false);
const deep = p.cloneNode(true);
console.log(shallow.childNodes.length);
console.log(deep.childNodes.length);
console.log(shallow.textContent);
console.log(deep.textContent);

```

*Hint:* cloneNode(false) copies only the element. cloneNode(true) copies children too.

**Answer:** `0`
`3`
`` (empty string)
`Original bold text`

Shallow clone (false): just the p tag with no children, so 0 childNodes and empty textContent. Deep clone (true): copies all children (text node + strong + text node = 3 childNodes) with their text.

### Q15. [Easy] What does the page show?

```

const box = document.getElementById("box");
const h2 = document.createElement("h2");
h2.textContent = "Welcome, Aarav!";
h2.style.color = "#a855f7";
box.appendChild(h2);

```

*Hint:* Create an h2, set its text and color, then append it.

**Answer:** A purple heading that says "Welcome, Aarav!" appears inside the div.

We create an h2 element, set its text to "Welcome, Aarav!", set its color to purple (#a855f7), and append it to the div. The heading appears on the page.

### Q16. [Medium] What is logged?

```

  A
  B
  C

const list = document.getElementById("list");
const items = list.querySelectorAll("li");
items.forEach(function(item) {
  const span = document.createElement("span");
  span.textContent = " [done]";
  item.appendChild(span);
});
console.log(list.textContent.trim().replace(/\s+/g, ' '));

```

*Hint:* Each li gets a span appended to it with ' [done]'.

**Answer:** `A [done] B [done] C [done]`

For each li, we create a span with " [done]" and append it. Each li now has its original text plus the span text. The console shows all text content joined.

## Mixed Questions

### Q1. [Easy] What does the page show?

```

const fruits = ["Apple", "Banana", "Cherry"];
const list = document.getElementById("list");

fruits.forEach(function(fruit) {
  const li = document.createElement("li");
  li.textContent = fruit;
  list.appendChild(li);
});

```

*Hint:* forEach loops through the array and creates an li for each fruit.

**Answer:** A list with three items: Apple, Banana, Cherry.

The forEach loop creates a new li element for each fruit in the array, sets its text, and appends it to the ul. The list is built dynamically from the data.

### Q2. [Easy] What is logged?

```

  Child 1

  Child 2

const parent = document.getElementById("parent");
console.log(parent.childElementCount);
parent.innerHTML = "";
console.log(parent.childElementCount);

```

*Hint:* childElementCount tells you how many child elements exist. innerHTML = '' empties the element.

**Answer:** `2`
`0`

Initially the div has 2 child elements (two p tags). Setting `innerHTML = ""` removes all content. Now childElementCount is 0.

### Q3. [Medium] What does the page show after this code?

```

const students = [
  { name: "Aarav", score: 95 },
  { name: "Priya", score: 88 },
  { name: "Rohan", score: 72 }
];

const container = document.getElementById("container");

students.forEach(function(s) {
  const div = document.createElement("div");
  const name = document.createElement("strong");
  name.textContent = s.name;
  const score = document.createElement("span");
  score.textContent = " - Score: " + s.score;
  div.appendChild(name);
  div.appendChild(score);
  container.appendChild(div);
});

```

*Hint:* Each student gets a div with a bold name and a score span.

**Answer:** Three divs appear: "**Aarav** - Score: 95", "**Priya** - Score: 88", "**Rohan** - Score: 72".

For each student, we create a div containing a strong element (name) and a span element (score). Each div is appended to the container.

### Q4. [Easy] What is the difference between `appendChild` and `prepend`?

*Hint:* Think about where the new element is placed.

**Answer:** `appendChild` adds an element as the **last child** of the parent. `prepend` adds it as the **first child**. Both add the element inside the parent, but at different positions.

If a parent has children [A, B, C]: `appendChild(D)` makes it [A, B, C, D]. `prepend(D)` makes it [D, A, B, C].

### Q5. [Medium] Why is `innerHTML +=` problematic when existing elements have event listeners?

*Hint:* Think about what happens to the existing elements.

**Answer:** `innerHTML +=` reads the current HTML as a string, appends the new content, and then completely re-parses and rebuilds all the inner HTML. This destroys the original DOM nodes along with their event listeners. The elements look the same but they are actually new elements without any listeners. Use `appendChild` or `prepend` to preserve existing elements and their listeners.

Example: a button with a click listener inside the container. After `container.innerHTML += 'New'`, the button appears but clicking it does nothing because it is a brand new button element without the listener.

### Q6. [Medium] What is a DocumentFragment and when should you use it?

*Hint:* Think about performance when adding many elements.

**Answer:** A DocumentFragment is an invisible, lightweight container that exists only in memory. You can add many elements to a fragment without triggering DOM re-renders. When you finally append the fragment to the page, all its children are transferred in a single operation. Use it when creating many elements in a loop (like 100+ list items) to improve performance.

Without a fragment, each appendChild triggers a browser re-render. With a fragment, you batch all additions into one re-render. The fragment itself is not added to the DOM -- only its children are.

### Q7. [Hard] What is the result?

```

const p = document.createElement("p");
p.textContent = "Shared";

document.getElementById("a").appendChild(p);
console.log(document.getElementById("a").children.length);
console.log(document.getElementById("b").children.length);

document.getElementById("b").appendChild(p);
console.log(document.getElementById("a").children.length);
console.log(document.getElementById("b").children.length);

```

*Hint:* An element can only exist in one parent. Appending it elsewhere moves it.

**Answer:** `1`
`0`
`0`
`1`

After first appendChild: p is in div#a (1 child in a, 0 in b). After second appendChild: p is moved to div#b (0 in a, 1 in b). An element can only have one parent.

### Q8. [Hard] What does the page show?

```

  Keep
  Remove 1
  Keep
  Remove 2
  Keep

const toRemove = document.querySelectorAll(".remove");
toRemove.forEach(function(el) {
  el.remove();
});
console.log(document.getElementById("list").children.length);

```

*Hint:* querySelectorAll captures all .remove elements, then forEach removes each one.

**Answer:** The list shows three "Keep" items. Console logs: `3`.

querySelectorAll finds both .remove elements. forEach removes each one. The 3 "Keep" items remain (3 children).

### Q9. [Medium] What is logged?

```

const box = document.getElementById("box");

const p1 = document.createElement("p");
p1.textContent = "First";

const p2 = document.createElement("p");
p2.textContent = "Second";

box.append(p1, " and ", p2);
console.log(box.innerHTML);

```

*Hint:* append() can take multiple arguments, including strings.

**Answer:** `First and Second`

`append()` can accept multiple arguments including elements and strings. It adds them all in order. The result is two p elements with the text " and " between them.

### Q10. [Hard] What is logged?

```
Hello

const box = document.getElementById("box");
const p = box.firstElementChild;

p.remove();
console.log(box.children.length);
console.log(p.textContent);
console.log(p.parentNode);

```

*Hint:* After remove(), the element still exists in memory but has no parent.

**Answer:** `0`
`Hello`
`null`

After `remove()`, the element is detached from the DOM (box has 0 children). But the JavaScript variable `p` still references the element in memory. Its textContent is still "Hello" but its parentNode is null.

### Q11. [Easy] What is the HTML inside the ul after this code?

```

const list = document.getElementById("list");
const li1 = document.createElement("li");
li1.textContent = "First";
const li2 = document.createElement("li");
li2.textContent = "Second";
list.appendChild(li1);
list.prepend(li2);

```

*Hint:* appendChild adds at the end, prepend adds at the beginning.

**Answer:** The ul contains: Second (first), then First (second).

li1 ("First") is appended at the end. li2 ("Second") is prepended at the beginning. Final order: Second, First.

### Q12. [Medium] What happens?

```

  A

  B

  C

const container = document.getElementById("container");
const c = document.getElementById("c");
container.insertBefore(c, container.firstElementChild);
console.log(container.children[0].textContent);
console.log(container.children[1].textContent);
console.log(container.children[2].textContent);

```

*Hint:* insertBefore moves existing elements, not copies them.

**Answer:** `C`
`A`
`B`

insertBefore moves C before the first child (A). C is removed from its original position and placed first. New order: C, A, B.

### Q13. [Medium] What is logged?

```

  
    
    

  

const tmpl = document.getElementById("tmpl");
console.log(tmpl.innerHTML.includes("card"));
console.log(tmpl.content instanceof DocumentFragment);
console.log(document.querySelectorAll(".card").length);

```

*Hint:* Template content is not rendered in the DOM. It exists only in the template's content property.

**Answer:** `true`
`true`
`0`

The template's innerHTML contains the 'card' string (true). template.content is a DocumentFragment (true). But querySelectorAll('.card') finds 0 elements because template content is not part of the active DOM.

### Q14. [Hard] What is logged?

```

const box = document.getElementById("box");
box.innerHTML = "Hello

";
const p1 = box.firstElementChild;

box.innerHTML = "Hello

";
const p2 = box.firstElementChild;

console.log(p1.textContent);
console.log(p2.textContent);
console.log(p1 === p2);

```

*Hint:* Setting innerHTML destroys old elements and creates new ones.

**Answer:** `Hello`
`Hello`
`false`

Setting innerHTML destroys the old p and creates a new one. p1 references the old (detached) element. p2 references the new element. They have the same text but are different objects (p1 === p2 is false).

### Q15. [Hard] When should you use `innerHTML` and when should you use `createElement`?

*Hint:* Think about security, performance, and event listeners.

**Answer:** Use `innerHTML` when: (1) you need to set a large chunk of trusted, static HTML quickly, and (2) the content does not come from user input. Use `createElement` when: (1) the content includes user input (for XSS safety), (2) existing elements have event listeners you want to preserve, and (3) you need references to the created elements for further manipulation.

innerHTML is faster for bulk HTML insertion but destroys existing elements and their listeners, and is unsafe with user input. createElement is safer, preserves existing DOM, and gives you direct references to new elements.

## Multiple Choice Questions

### Q1. [Easy] Which method creates a new HTML element?

**Answer:** B

**B is correct.** `document.createElement('tag')` creates a new element. The other methods do not exist in the DOM API.

### Q2. [Easy] Where does `appendChild` place the new element?

**Answer:** B

**B is correct.** `appendChild` adds the new element as the last child of the parent. To add as the first child, use `prepend`.

### Q3. [Easy] How do you remove an element from the DOM?

**Answer:** C

**C is correct.** `element.remove()` removes the element from the DOM. `delete` and `destroy` are not DOM methods. `hide` does not exist (you would use CSS for hiding).

### Q4. [Easy] What happens if you call `createElement` but never `appendChild`?

**Answer:** C

**C is correct.** `createElement` creates an element in JavaScript's memory. It has no parent and is invisible. You must explicitly append it to a visible element for it to appear.

### Q5. [Medium] What does `element.replaceWith(newElement)` do?

**Answer:** B

**B is correct.** `replaceWith` removes the original element from the DOM and inserts the new element exactly where the old one was.

### Q6. [Medium] What is the danger of using `innerHTML` with user input?

**Answer:** C

**C is correct.** `innerHTML` parses strings as HTML. If user input contains malicious scripts (like `` tags or event handlers), they get executed. Always use `textContent` for user input.

### Q7. [Medium] What happens when you append the same element to a different parent?

**Answer:** B

**B is correct.** A DOM element can only have one parent. Appending it to a new parent moves it from the old one. To have it in both places, use `cloneNode(true)`.

### Q8. [Medium] What does `cloneNode(true)` do compared to `cloneNode(false)`?

**Answer:** A

**A is correct.** `cloneNode(true)` creates a deep clone: the element AND all its children and their text. `cloneNode(false)` clones only the element itself, with no children.

### Q9. [Hard] Why does `innerHTML +=` destroy event listeners on existing elements?

**Answer:** B

**B is correct.** `innerHTML +=` serializes current content to a string, concatenates the new string, then re-parses the entire result. The old DOM nodes (with their listeners) are destroyed and replaced with new ones that look the same but have no listeners.

### Q10. [Hard] What is a DocumentFragment?

**Answer:** C

**C is correct.** A DocumentFragment is a minimal document object that is not part of the active DOM tree. You can add elements to it without triggering re-renders, then append the fragment to add all elements at once.

### Q11. [Easy] Which method adds an element as the first child of a parent?

**Answer:** B

**B is correct.** `prepend` adds an element at the beginning (first child). `appendChild` adds at the end. `insertBefore` can also achieve this but requires a reference to the current first child.

### Q12. [Medium] What does the `append` method accept that `appendChild` does not?

**Answer:** A

**A is correct.** `append()` can take multiple arguments and accepts both elements and strings. `appendChild()` accepts only a single node and returns the appended node.

### Q13. [Hard] After calling `element.remove()`, what happens to JavaScript variables referencing that element?

**Answer:** C

**C is correct.** `remove()` detaches the element from the DOM, but the JavaScript variable still references the element object in memory. Its `parentNode` becomes null, but you can still read its properties or even re-append it.

### Q14. [Hard] What does `insertBefore(newNode, null)` do?

**Answer:** C

**C is correct.** When the reference node is `null`, `insertBefore` appends the new node at the end of the parent's children, behaving exactly like `appendChild`.

### Q15. [Easy] What does `element.textContent = ''` do?

**Answer:** B

**B is correct.** Setting textContent to an empty string removes all child nodes (text and elements) from inside the element. The element itself remains in the DOM, just empty.

### Q16. [Medium] What is the difference between `append()` and `appendChild()`?

**Answer:** A

**A is correct.** `append()` can accept multiple arguments including strings and nodes. `appendChild()` takes only a single DOM node and returns the appended node.

### Q17. [Medium] What does `parentNode` return for an element that has been removed with `remove()`?

**Answer:** C

**C is correct.** After calling `remove()`, the element is detached from the DOM. Its `parentNode` becomes null because it no longer has a parent.

### Q18. [Hard] Why is `DocumentFragment` better than appending elements one by one in a loop?

**Answer:** B

**B is correct.** Each `appendChild` call on a visible element can trigger the browser to re-render. A DocumentFragment is an invisible container; building elements there does not trigger renders. Appending the fragment causes just one re-render.

### Q19. [Easy] What method creates a text node (not an element)?

**Answer:** B

**B is correct.** `document.createTextNode('some text')` creates a text node. This is rarely needed because `textContent` is simpler, but it is useful for precise text insertion.

## Coding Challenges

### Challenge 1. Dynamic Shopping List

**Difficulty:** Easy

Create a page with an input field and an 'Add Item' button. When the button is clicked, add the input text as a new list item. Each list item should have a 'Remove' button that deletes it. Show the total count of items above the list.

**Constraints:**

- Use createElement, appendChild, remove. Use textContent for the item text.

**Sample input:**

```
Type 'Milk' and click Add Item
```

**Sample output:**

```
List item 'Milk' appears with a remove button. Count shows '1 item'.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <h2>Shopping List</h2>
  <input type="text" id="item" placeholder="Add item..."><button id="add">Add Item</button>
  <p id="count">0 items</p>
  <ul id="list"></ul>
  <script>
    const list = document.getElementById("list");
    const count = document.getElementById("count");
    function updateCount() { count.textContent = list.children.length + " item" + (list.children.length !== 1 ? "s" : ""); }
    document.getElementById("add").addEventListener("click", function() {
      const text = document.getElementById("item").value.trim();
      if (text) {
        const li = document.createElement("li");
        li.textContent = text + " ";
        const btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.addEventListener("click", function() { li.remove(); updateCount(); });
        li.appendChild(btn);
        list.appendChild(li);
        document.getElementById("item").value = "";
        updateCount();
      }
    });
  </script>
</body>
</html>
```

### Challenge 2. Student Cards from Array

**Difficulty:** Easy

Given an array of student objects [{name, age, city}], create a card for each student and add them to the page. Each card should show the name (bold), age, and city. Use a DocumentFragment for performance.

**Constraints:**

- Use createElement, DocumentFragment, textContent. Do not use innerHTML.

**Sample input:**

```
const students = [{name:'Aarav',age:15,city:'Delhi'},{name:'Priya',age:14,city:'Mumbai'},{name:'Rohan',age:16,city:'Pune'}]
```

**Sample output:**

```
Three styled cards appear on the page with student info.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head><style>.card{padding:16px;margin:8px 0;border:1px solid #ddd;border-radius:8px;} .card .name{font-weight:bold;font-size:18px;}</style></head>
<body>
  <h2>Students</h2>
  <div id="container"></div>
  <script>
    const students = [{name:'Aarav',age:15,city:'Delhi'},{name:'Priya',age:14,city:'Mumbai'},{name:'Rohan',age:16,city:'Pune'}];
    const fragment = document.createDocumentFragment();
    students.forEach(function(s) {
      const card = document.createElement("div");
      card.className = "card";
      const name = document.createElement("div");
      name.className = "name";
      name.textContent = s.name;
      const info = document.createElement("div");
      info.textContent = "Age: " + s.age + " | City: " + s.city;
      card.appendChild(name);
      card.appendChild(info);
      fragment.appendChild(card);
    });
    document.getElementById("container").appendChild(fragment);
  </script>
</body>
</html>
```

### Challenge 3. Notification Stack

**Difficulty:** Medium

Build a notification system. Add buttons for 'Info', 'Success', 'Warning', and 'Error' notifications. Each notification appears at the top of a stack, shows a message and type, has a close button, and auto-removes after 5 seconds. Use different background colors for each type.

**Constraints:**

- Use createElement, prepend, remove, setTimeout. Use classList for type-based styling.

**Sample input:**

```
Click 'Success' button
```

**Sample output:**

```
A green notification appears saying 'Success: Operation completed!' with an 'x' button. It disappears after 5 seconds.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head><style>.notif{padding:12px;margin:6px 0;border-radius:6px;display:flex;justify-content:space-between;} .info{background:#dbeafe;} .success{background:#d1fae5;} .warning{background:#fef3c7;} .error{background:#fecaca;} .close{background:none;border:none;cursor:pointer;font-size:16px;}</style></head>
<body>
  <button id="info">Info</button><button id="success">Success</button><button id="warning">Warning</button><button id="error">Error</button>
  <div id="stack"></div>
  <script>
    function notify(type, msg) {
      const div = document.createElement("div");
      div.className = "notif " + type;
      const text = document.createElement("span");
      text.textContent = type.charAt(0).toUpperCase() + type.slice(1) + ": " + msg;
      const btn = document.createElement("button");
      btn.className = "close";
      btn.textContent = "x";
      btn.addEventListener("click", function() { div.remove(); });
      div.appendChild(text);
      div.appendChild(btn);
      document.getElementById("stack").prepend(div);
      setTimeout(function() { if (div.parentNode) div.remove(); }, 5000);
    }
    document.getElementById("info").addEventListener("click", function() { notify("info", "Here is some information."); });
    document.getElementById("success").addEventListener("click", function() { notify("success", "Operation completed!"); });
    document.getElementById("warning").addEventListener("click", function() { notify("warning", "Check your input."); });
    document.getElementById("error").addEventListener("click", function() { notify("error", "Something went wrong."); });
  </script>
</body>
</html>
```

### Challenge 4. Sortable List with Move Up/Down

**Difficulty:** Medium

Create a list of 5 items. Each item has 'Move Up' and 'Move Down' buttons. Clicking 'Move Up' moves the item one position up in the list. Clicking 'Move Down' moves it one position down. The first item should not move up, and the last should not move down.

**Constraints:**

- Use insertBefore for moving. Check if the element is first or last before moving.

**Sample input:**

```
Click 'Move Up' on the third item
```

**Sample output:**

```
The third item moves to the second position.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head><style>li{padding:10px;margin:4px 0;background:#f3f4f6;border-radius:4px;display:flex;justify-content:space-between;align-items:center;} button{padding:4px 8px;margin:0 2px;cursor:pointer;}</style></head>
<body>
  <h2>Reorder List</h2>
  <ul id="list">
    <li>Item 1 <span><button class="up">Up</button><button class="down">Down</button></span></li>
    <li>Item 2 <span><button class="up">Up</button><button class="down">Down</button></span></li>
    <li>Item 3 <span><button class="up">Up</button><button class="down">Down</button></span></li>
    <li>Item 4 <span><button class="up">Up</button><button class="down">Down</button></span></li>
    <li>Item 5 <span><button class="up">Up</button><button class="down">Down</button></span></li>
  </ul>
  <script>
    const list = document.getElementById("list");
    list.addEventListener("click", function(e) {
      const li = e.target.closest("li");
      if (!li) return;
      if (e.target.classList.contains("up") && li.previousElementSibling) {
        list.insertBefore(li, li.previousElementSibling);
      }
      if (e.target.classList.contains("down") && li.nextElementSibling) {
        list.insertBefore(li.nextElementSibling, li);
      }
    });
  </script>
</body>
</html>
```

### Challenge 5. Dynamic Table Builder

**Difficulty:** Hard

Build a table generator. The user enters the number of rows and columns. When they click 'Generate', create a table with those dimensions. Each cell should show its row and column number (e.g., 'R1C2'). Add a 'Delete Row' button at the end of each row and a 'Delete Column' button at the top of each column.

**Constraints:**

- Use createElement for table, tr, td, th elements. Use event delegation for delete buttons.

**Sample input:**

```
Rows: 3, Columns: 4
```

**Sample output:**

```
A 3x4 table with cells labeled R1C1, R1C2, etc. Delete buttons on rows and columns.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head><style>table{border-collapse:collapse;margin:16px 0;} td,th{border:1px solid #ddd;padding:8px;text-align:center;} button{padding:4px 8px;cursor:pointer;}</style></head>
<body>
  <h2>Table Builder</h2>
  <input type="number" id="rows" value="3" min="1" max="10" style="width:60px;"> rows
  <input type="number" id="cols" value="4" min="1" max="10" style="width:60px;"> cols
  <button id="gen">Generate</button>
  <div id="output"></div>
  <script>
    document.getElementById("gen").addEventListener("click", function() {
      const rows = parseInt(document.getElementById("rows").value);
      const cols = parseInt(document.getElementById("cols").value);
      const output = document.getElementById("output");
      output.innerHTML = "";
      const table = document.createElement("table");
      for (let r = 1; r <= rows; r++) {
        const tr = document.createElement("tr");
        for (let c = 1; c <= cols; c++) {
          const td = document.createElement("td");
          td.textContent = "R" + r + "C" + c;
          tr.appendChild(td);
        }
        const delTd = document.createElement("td");
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete Row";
        delBtn.addEventListener("click", function() { tr.remove(); });
        delTd.appendChild(delBtn);
        tr.appendChild(delTd);
        table.appendChild(tr);
      }
      output.appendChild(table);
    });
  </script>
</body>
</html>
```

### Challenge 6. Bookmark Manager

**Difficulty:** Hard

Build a bookmark manager. Users can add bookmarks with a title and URL. Each bookmark is displayed as a card with the title (as a clickable link), URL text, and a 'Delete' button. Add a search input that filters bookmarks by title in real time. Use textContent for the title (for XSS safety) and setAttribute for the href.

**Constraints:**

- Use createElement for everything. Use textContent for user input. Use setAttribute for href. Use a DocumentFragment when initially rendering.

**Sample input:**

```
Title: 'Google', URL: 'https://google.com'
```

**Sample output:**

```
A bookmark card appears with 'Google' as a clickable link and a delete button.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head><style>.card{padding:12px;margin:8px 0;border:1px solid #ddd;border-radius:8px;display:flex;justify-content:space-between;align-items:center;} .card a{font-weight:bold;color:#a855f7;} .card .url{font-size:12px;color:#9ca3af;} button{padding:4px 12px;cursor:pointer;} input{padding:8px;margin:4px;border:1px solid #ddd;border-radius:4px;}</style></head>
<body>
  <h2>Bookmarks</h2>
  <input type="text" id="title" placeholder="Title">
  <input type="url" id="url" placeholder="URL">
  <button id="add">Add</button>
  <input type="text" id="search" placeholder="Search bookmarks..." style="display:block;margin-top:12px;width:300px;">
  <div id="bookmarks"></div>
  <script>
    const container = document.getElementById("bookmarks");
    document.getElementById("add").addEventListener("click", function() {
      const title = document.getElementById("title").value.trim();
      const url = document.getElementById("url").value.trim();
      if (title && url) {
        const card = document.createElement("div");
        card.className = "card";
        card.setAttribute("data-title", title.toLowerCase());
        const info = document.createElement("div");
        const link = document.createElement("a");
        link.textContent = title;
        link.setAttribute("href", url);
        link.setAttribute("target", "_blank");
        const urlText = document.createElement("div");
        urlText.className = "url";
        urlText.textContent = url;
        info.appendChild(link);
        info.appendChild(urlText);
        const del = document.createElement("button");
        del.textContent = "Delete";
        del.addEventListener("click", function() { card.remove(); });
        card.appendChild(info);
        card.appendChild(del);
        container.appendChild(card);
        document.getElementById("title").value = "";
        document.getElementById("url").value = "";
      }
    });
    document.getElementById("search").addEventListener("input", function() {
      const q = this.value.toLowerCase();
      document.querySelectorAll(".card").forEach(function(card) {
        card.style.display = card.getAttribute("data-title").includes(q) ? "flex" : "none";
      });
    });
  </script>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/creating-and-removing-elements/*
