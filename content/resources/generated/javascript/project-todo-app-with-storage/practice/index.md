---
title: "Practice: Project: Build a To-Do App with Local Storage"
description: "51 practice problems for Project: Build a To-Do App with Local Storage in JavaScript"
slug: project-todo-app-with-storage-practice
canonical: https://learn.modernagecoders.com/resources/javascript/project-todo-app-with-storage/practice/
category: "JavaScript"
---
# Practice: Project: Build a To-Do App with Local Storage

**Total questions:** 51

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
const tasks = [];
tasks.push({ id: 1, text: "Learn JS", completed: false });
tasks.push({ id: 2, text: "Build app", completed: false });
console.log(tasks.length);
console.log(tasks[0].text);
```

*Hint:* push adds items to the array. Access properties with dot notation.

**Answer:** `2`
`Learn JS`

Two task objects are pushed to the array. `tasks.length` is 2. `tasks[0].text` accesses the text of the first task.

### Q2. [Easy] What is the output?

```
const tasks = [
  { id: 1, text: "A", completed: false },
  { id: 2, text: "B", completed: true },
  { id: 3, text: "C", completed: false }
];
const active = tasks.filter(function(t) { return !t.completed; });
console.log(active.length);
console.log(active[0].text);
```

*Hint:* filter keeps items where the callback returns true. !false is true.

**Answer:** `2`
`A`

filter keeps tasks where completed is false (the ! flips it to true). Tasks A and C are not completed, so the filtered array has length 2 and the first item is A.

### Q3. [Easy] What is the output?

```
const task = { id: 1, text: "Learn JS", completed: false };
task.completed = !task.completed;
console.log(task.completed);
task.completed = !task.completed;
console.log(task.completed);
```

*Hint:* !false is true, !true is false.

**Answer:** `true`
`false`

The first toggle flips false to true. The second toggle flips true back to false. This is how the checkbox toggle works.

### Q4. [Easy] What is the output?

```
const tasks = [
  { id: 1, text: "A" },
  { id: 2, text: "B" },
  { id: 3, text: "C" }
];
const filtered = tasks.filter(function(t) { return t.id !== 2; });
console.log(filtered.length);
filtered.forEach(function(t) { console.log(t.text); });
```

*Hint:* filter keeps items where the condition is true. id !== 2 is true for tasks 1 and 3.

**Answer:** `2`
`A`
`C`

filter removes the task with id 2, keeping A and C. This is exactly how deleteTask works.

### Q5. [Medium] What is the output?

```
const tasks = [
  { id: 1, text: "X", completed: false },
  { id: 2, text: "Y", completed: true },
  { id: 3, text: "Z", completed: false }
];
const remaining = tasks.filter(function(t) { return !t.completed; }).length;
console.log(remaining + " item" + (remaining !== 1 ? "s" : "") + " left");
```

*Hint:* 2 items are not completed. The ternary adds 's' for plural.

**Answer:** `2 items left`

Two tasks (X and Z) are not completed. Since remaining (2) is not 1, the ternary adds "s" making it "items". The result is "2 items left".

### Q6. [Medium] What is the output?

```
let tasks = [
  { id: 1, text: "A", completed: false },
  { id: 2, text: "B", completed: true }
];

tasks = tasks.map(function(task) {
  if (task.id === 1) {
    return { id: task.id, text: task.text, completed: !task.completed };
  }
  return task;
});

console.log(tasks[0].completed);
console.log(tasks[1].completed);
```

*Hint:* map creates a new array. Only task with id 1 is modified.

**Answer:** `true`
`true`

The map function flips the completed status of task 1 (false becomes true) and leaves task 2 unchanged (stays true). Both end up as true.

### Q7. [Medium] What is the output?

```
const id1 = Date.now();
const id2 = Date.now();
console.log(id1 === id2);
console.log(typeof id1);
```

*Hint:* Date.now() runs so fast that both calls happen in the same millisecond.

**Answer:** `true`
`number`

Date.now() returns milliseconds since Jan 1, 1970. Both calls execute in the same millisecond, so they return the same value. This is why in production apps, you might use `Date.now() + Math.random()` for extra uniqueness. For a simple to-do app, Date.now() is sufficient because users cannot add tasks that fast.

### Q8. [Hard] What is the output?

```
let tasks = [
  { id: 1, text: "A", completed: true },
  { id: 2, text: "B", completed: false },
  { id: 3, text: "C", completed: true },
  { id: 4, text: "D", completed: false }
];

// Clear completed
tasks = tasks.filter(function(t) { return !t.completed; });
console.log(tasks.length);
tasks.forEach(function(t) { console.log(t.text); });
```

*Hint:* filter keeps tasks where completed is false.

**Answer:** `2`
`B`
`D`

Clearing completed removes tasks A and C (both completed). Tasks B and D (not completed) remain. This is how the "Clear Completed" button works.

### Q9. [Easy] Why do we use Date.now() as the task ID instead of the array index?

*Hint:* Think about what happens when you delete a task or filter the list.

**Answer:** Array indices change when items are added, removed, or filtered. If you delete the task at index 0, all other indices shift down. But a Date.now() ID stays the same regardless of what happens to the array. It uniquely identifies the task forever.

With filters, the visible list has different indices than the full array. If Aarav sees 3 active tasks and clicks delete on 'index 2', that might be index 5 in the full array. Using unique IDs avoids this problem.

### Q10. [Medium] Why does the renderTasks function call `list.innerHTML = ""` before adding task elements?

*Hint:* What would happen if you did not clear the list?

**Answer:** Without clearing, each call to renderTasks would **append** new elements to the existing ones. After toggling a task, you would see the original list plus a duplicate list. Clearing first ensures the list always matches the current state of the data.

The render function follows a 'clear and rebuild' pattern. It is simple and reliable: destroy the old UI, build a new one from the current data. More advanced approaches (like virtual DOM diffing) update only what changed, but clear-and-rebuild is perfect for learning.

### Q11. [Hard] What is CRUD and how does the to-do app implement each operation?

*Hint:* CRUD stands for Create, Read, Update, Delete.

**Answer:** **C**reate: the addTask function pushes a new task object to the array. **R**ead: the renderTasks function reads the array and displays tasks on screen. **U**pdate: toggleTask and editTask modify task properties (completed, text). **D**elete: deleteTask removes a task using filter. These four operations are the backbone of nearly every web application.

Whether it is a social media app (create post, read feed, update profile, delete comment) or a shopping site (create order, read products, update cart, delete item), all apps are built around CRUD operations.

### Q12. [Easy] What is the output?

```
const tasks = [
  { id: 1, text: "A", completed: false },
  { id: 2, text: "B", completed: true }
];
console.log(JSON.stringify(tasks));
```

*Hint:* JSON.stringify converts the array to a string.

**Answer:** `[{"id":1,"text":"A","completed":false},{"id":2,"text":"B","completed":true}]`

JSON.stringify converts the array of objects to a JSON string. This is exactly how tasks are saved to localStorage.

### Q13. [Easy] What is the output?

```
const ul = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'Task 1';
ul.appendChild(li);
console.log(ul.children.length);
console.log(ul.children[0].textContent);
```

*Hint:* appendChild adds the li to the ul. children gives child elements.

**Answer:** `1`
`Task 1`

One li is appended to the ul. children.length is 1. children[0] is the first child element, whose text is 'Task 1'.

### Q14. [Medium] What is the output?

```
const tasks = [
  { id: 1, text: "A", completed: true },
  { id: 2, text: "B", completed: false },
  { id: 3, text: "C", completed: true }
];
const result = tasks.map(function(t) {
  if (t.id === 2) return { id: t.id, text: t.text, completed: true };
  return t;
});
console.log(result[1].completed);
console.log(tasks[1].completed);
```

*Hint:* map creates a new array. The original is unchanged.

**Answer:** `true`
`false`

map creates a new array where task 2 has completed changed to true. But the original tasks array is unmodified -- tasks[1].completed is still false.

### Q15. [Medium] What is the output?

```
const el = document.createElement('span');
el.classList.add('task-text');
el.classList.add('completed');
console.log(el.className);
el.classList.remove('completed');
console.log(el.className);
```

*Hint:* classList.add adds classes, classList.remove removes them.

**Answer:** `task-text completed`
`task-text`

After adding two classes, className shows both. After removing 'completed', only 'task-text' remains. This is how tasks are visually toggled between active and completed states.

### Q16. [Hard] What is the output?

```
let tasks = [
  { id: 1, text: "A", completed: false },
  { id: 2, text: "B", completed: true },
  { id: 3, text: "C", completed: false }
];

// Toggle task 1
tasks = tasks.map(function(t) {
  return t.id === 1 ? { id: t.id, text: t.text, completed: !t.completed } : t;
});

// Delete task 2
tasks = tasks.filter(function(t) { return t.id !== 2; });

// Clear completed
tasks = tasks.filter(function(t) { return !t.completed; });

console.log(tasks.length);
console.log(tasks[0].text);
```

*Hint:* Track each operation: toggle makes task 1 completed, delete removes task 2, clear completed removes task 1.

**Answer:** `1`
`C`

After toggle: task 1 is completed. After delete: task 2 is gone (tasks: A-completed, C-active). After clear completed: task 1 (A) is removed. Only task 3 (C) remains.

### Q17. [Medium] Why does the to-do app use innerHTML = '' before rendering tasks instead of removing individual elements?

*Hint:* Think about simplicity vs performance.

**Answer:** Setting `innerHTML = ''` is the simplest approach -- it clears everything in one step, then the render function rebuilds the list from the data array. Removing individual elements would require tracking which ones changed, which is more complex. For a small to-do list (tens of items), the performance difference is negligible, and simplicity is more important.

This 'clear and rebuild' pattern is easy to understand and debug. More advanced approaches (like React's virtual DOM) selectively update only what changed, but for learning purposes and small apps, clear-and-rebuild is ideal.

## Mixed Questions

### Q1. [Easy] What is the output?

```
const text = "  Learn JavaScript  ";
console.log(text.trim());
console.log(text.trim() === "");
```

*Hint:* trim() removes whitespace from both ends of a string.

**Answer:** `Learn JavaScript`
`false`

trim() removes leading and trailing spaces, producing "Learn JavaScript". This is not an empty string, so the comparison returns false. We use trim() to check if the user typed only spaces.

### Q2. [Easy] What is the output?

```
const el = document.createElement("li");
el.classList.add("task-item");
el.classList.add("completed");
console.log(el.classList.contains("task-item"));
console.log(el.classList.contains("active"));
console.log(el.className);
```

*Hint:* classList.add adds classes, contains checks if a class exists.

**Answer:** `true`
`false`
`task-item completed`

The element has two classes: task-item and completed. contains("task-item") is true, contains("active") is false. className shows all classes as a space-separated string.

### Q3. [Medium] What is the output?

```
const tasks = [
  { id: 1, text: "A", completed: false },
  { id: 2, text: "B", completed: true },
  { id: 3, text: "C", completed: false }
];

const found = tasks.find(function(t) { return t.id === 2; });
console.log(found.text);

const notFound = tasks.find(function(t) { return t.id === 99; });
console.log(notFound);
```

*Hint:* find returns the first matching element, or undefined if none found.

**Answer:** `B`
`undefined`

find returns the first task whose id is 2, which has text "B". No task has id 99, so find returns undefined. We use find to locate a specific task for editing.

### Q4. [Medium] What is the output?

```
const btn = document.createElement("button");
btn.dataset.filter = "active";
console.log(btn.dataset.filter);
console.log(btn.getAttribute("data-filter"));
```

*Hint:* dataset accesses data-* attributes. data-filter becomes dataset.filter.

**Answer:** `active`
`active`

The `data-filter` HTML attribute is accessed via `dataset.filter` in JavaScript (the "data-" prefix is removed and the rest becomes camelCase). Both `dataset.filter` and `getAttribute("data-filter")` return the same value.

### Q5. [Medium] What is the output?

```
let tasks = [
  { id: 1, text: "A", completed: false },
  { id: 2, text: "B", completed: false }
];

localStorage.setItem("tasks", JSON.stringify(tasks));
tasks[0].completed = true;

const saved = JSON.parse(localStorage.getItem("tasks"));
console.log(saved[0].completed);
```

*Hint:* Does changing the array in memory automatically update localStorage?

**Answer:** `false`

Changing the in-memory array does NOT automatically update localStorage. The saved version still has the original data (completed: false). You must call setItem again to update localStorage.

### Q6. [Hard] What is the output?

```
const tasks = [
  { id: 1, text: "JS", completed: false },
  { id: 2, text: "CSS", completed: true },
  { id: 3, text: "HTML", completed: false },
  { id: 4, text: "React", completed: true }
];

const activeTexts = tasks
  .filter(function(t) { return !t.completed; })
  .map(function(t) { return t.text; });

console.log(activeTexts);
```

*Hint:* filter keeps active tasks, then map extracts just the text.

**Answer:** `["JS", "HTML"]`

filter keeps tasks 1 and 3 (not completed). map transforms them to just their text values. The result is ["JS", "HTML"]. Chaining filter and map is very common in real apps.

### Q7. [Hard] What is the output?

```
function addTask(tasks, text) {
  return tasks.concat([{ id: Date.now(), text: text, completed: false }]);
}

let tasks = [];
tasks = addTask(tasks, "A");
tasks = addTask(tasks, "B");
console.log(tasks.length);

const original = [];
const updated = addTask(original, "C");
console.log(original.length);
console.log(updated.length);
```

*Hint:* concat returns a NEW array. It does not modify the original.

**Answer:** `2`
`0`
`1`

concat creates a new array instead of modifying the original. After two addTask calls, tasks has 2 items. The original array remains empty (length 0) because concat does not mutate it. The updated array has 1 item.

### Q8. [Hard] What is the output?

```
const span = document.createElement("span");
span.textContent = "Learn JavaScript";
span.contentEditable = true;

console.log(span.contentEditable);
console.log(span.isContentEditable);

span.contentEditable = false;
console.log(span.contentEditable);
console.log(span.isContentEditable);
```

*Hint:* contentEditable is a string attribute. isContentEditable is a boolean.

**Answer:** `true`
`true`
`false`
`false`

Setting `contentEditable = true` makes the element editable (the user can click and type in it). `isContentEditable` returns a boolean indicating whether the element can be edited. The to-do app uses this for inline editing of task text.

### Q9. [Easy] What is the output?

```
const input = document.createElement('input');
input.value = '  Learn JavaScript  ';
console.log(input.value.trim());
console.log(input.value.trim().length);
```

*Hint:* trim() removes whitespace from both ends.

**Answer:** `Learn JavaScript`
`16`

trim() removes the leading and trailing spaces, producing 'Learn JavaScript' which is 16 characters long.

### Q10. [Medium] What is the output?

```
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.checked = false;
console.log(checkbox.checked);
checkbox.checked = !checkbox.checked;
console.log(checkbox.checked);
```

*Hint:* The ! operator flips a boolean.

**Answer:** `false`
`true`

Initially checked is false. !false is true, so after toggling, checked becomes true. This is how checkboxes toggle task completion.

### Q11. [Medium] What is the output?

```
const tasks = [
  { id: 1, text: "JS" },
  { id: 2, text: "CSS" },
  { id: 3, text: "HTML" }
];
const idx = tasks.findIndex(function(t) { return t.id === 2; });
console.log(idx);
console.log(tasks[idx].text);
```

*Hint:* findIndex returns the index of the first matching element.

**Answer:** `1`
`CSS`

findIndex returns the index where id === 2, which is index 1. tasks[1].text is 'CSS'.

### Q12. [Hard] What is the output?

```
const el = document.createElement('span');
el.addEventListener('blur', function() {
  console.log('blur fired');
}, { once: true });

// Simulate two blurs
el.dispatchEvent(new Event('blur'));
el.dispatchEvent(new Event('blur'));
```

*Hint:* { once: true } removes the listener after it fires once.

**Answer:** `blur fired` (printed only once)

The { once: true } option removes the event listener after it fires for the first time. The second dispatchEvent has no effect because the listener is already removed. This is used in the edit feature to save only once.

### Q13. [Hard] What is the output?

```
let tasks = [
  { id: 1, text: "A", completed: false },
  { id: 2, text: "B", completed: false }
];
localStorage.setItem('tasks', JSON.stringify(tasks));

tasks.push({ id: 3, text: "C", completed: false });
localStorage.setItem('tasks', JSON.stringify(tasks));

const loaded = JSON.parse(localStorage.getItem('tasks'));
console.log(loaded.length);
console.log(loaded[2].text);
```

*Hint:* The second setItem overwrites the first save.

**Answer:** `3`
`C`

The first setItem saves 2 tasks. After pushing a third task, the second setItem saves all 3. Loading from localStorage gives the latest version with 3 tasks.

## Multiple Choice Questions

### Q1. [Easy] What does CRUD stand for in web development?

**Answer:** B

**B is correct.** CRUD stands for Create, Read, Update, Delete. These are the four basic operations for managing data in any application.

### Q2. [Easy] Which array method is best for deleting a task by its ID?

**Answer:** C

**C is correct.** `filter` creates a new array excluding the task with the matching ID: `tasks.filter(t => t.id !== id)`. splice works but requires finding the index first. pop and shift only remove from the end/start.

### Q3. [Easy] Why do we use Date.now() for task IDs?

**Answer:** B

**B is correct.** Date.now() returns the current time in milliseconds, which is practically unique for each task creation. It is simple and does not require a counter variable.

### Q4. [Easy] What CSS property creates a line through completed task text?

**Answer:** B

**B is correct.** `text-decoration: line-through` draws a line through the text. This is applied when the task has the `.completed` CSS class.

### Q5. [Medium] Which array method is used to toggle a task's completed status immutably?

**Answer:** C

**C is correct.** `map` creates a new array where the matching task has `completed: !task.completed` and all other tasks are unchanged. This is the immutable approach.

### Q6. [Medium] What does contentEditable do to an HTML element?

**Answer:** C

**C is correct.** Setting `contentEditable = true` allows the user to click on the element and type to change its text, like a text input but on any element.

### Q7. [Medium] Why do we clear innerHTML before re-rendering the task list?

**Answer:** B

**B is correct.** Without clearing, each render call would append new elements after the existing ones, causing duplicates. Clearing first ensures the list matches the current data.

### Q8. [Medium] What does the { once: true } option do for addEventListener?

**Answer:** B

**B is correct.** `{ once: true }` automatically removes the event listener after it fires once. This is useful for the blur event on editable tasks -- we only want to save once when editing ends.

### Q9. [Hard] What is the data flow pattern used in the to-do app?

**Answer:** B

**B is correct.** Every user action triggers: update the tasks array, save to localStorage, re-render the UI from the array. This unidirectional data flow is the same pattern used by React and other modern frameworks.

### Q10. [Hard] Why is using array.filter() for deletion better than array.splice()?

**Answer:** B

**B is correct.** `filter` returns a new array, which is the immutable approach. `splice` modifies the original array in place. While both work, filter is cleaner and aligns with modern functional programming practices.

### Q11. [Hard] What happens if two tasks are added in the same millisecond using Date.now() as the ID?

**Answer:** B

**B is correct.** If Date.now() is called twice in the same millisecond, both return the same value. This is extremely rare in manual user interaction (humans cannot click that fast). For production apps, use crypto.randomUUID() or a library for truly unique IDs.

### Q12. [Medium] What is the purpose of the data-filter attribute on the filter buttons?

**Answer:** B

**B is correct.** The `data-filter` attribute stores the filter type ("all", "active", "completed"). When clicked, JavaScript reads `btn.dataset.filter` to know which filter to apply.

### Q13. [Easy] What does input.value.trim() do?

**Answer:** B

**B is correct.** `trim()` removes whitespace from both ends of a string. It does not remove spaces in the middle.

### Q14. [Hard] What is the benefit of using event delegation for the delete buttons?

**Answer:** B

**B is correct.** Event delegation uses one listener on a parent element instead of individual listeners on each child. This handles dynamically created elements automatically.

### Q15. [Medium] What does the Escape key do during task editing in the to-do app?

**Answer:** C

**C is correct.** Pressing Escape restores the original task text and exits edit mode. Enter saves the changes, and Escape cancels them.

## Coding Challenges

### Challenge 1. Add Due Dates to Tasks

**Difficulty:** Easy

Modify the to-do app to include a due date for each task. Add a date input next to the task input. Display the due date next to each task. Highlight tasks that are overdue (due date is in the past) with a red border.

**Constraints:**

- Store the due date in the task object. Use new Date() to compare dates.

**Sample input:**

```
Task: 'Finish homework', Due: '2026-04-10'
```

**Sample output:**

```
[ ] Finish homework (Due: Apr 10) [Delete]
[!] Overdue tasks shown with red border
```

**Solution:**

```javascript
// Modified task structure
// { id: Date.now(), text: "Finish homework", completed: false, dueDate: "2026-04-10" }

function addTask() {
  const text = document.getElementById("taskInput").value.trim();
  const dueDate = document.getElementById("dateInput").value;
  if (text === "") return;
  tasks.push({ id: Date.now(), text: text, completed: false, dueDate: dueDate || null });
  saveTasks();
  renderTasks();
}

// In renderTasks, check if overdue
function isOverdue(task) {
  if (!task.dueDate || task.completed) return false;
  return new Date(task.dueDate) < new Date();
}

// Add red border class if overdue
if (isOverdue(task)) {
  li.style.borderColor = "#ef4444";
}
```

### Challenge 2. Add Task Categories/Tags

**Difficulty:** Medium

Add a category system to tasks. Users can tag tasks as 'Work', 'Personal', 'Study', or 'Other'. Add a dropdown for category selection when adding tasks. Add filter buttons for each category. Show a colored dot next to each task based on its category.

**Constraints:**

- Store category in the task object. Add color mapping for each category.

**Sample input:**

```
Task: 'Read chapter 23', Category: 'Study'
```

**Sample output:**

```
Categories: [All] [Work] [Personal] [Study]
[purple dot] Read chapter 23 [Delete]
[blue dot] Fix bug in code [Delete]
```

**Solution:**

```javascript
const categoryColors = {
  work: "#3b82f6",
  personal: "#10b981",
  study: "#a855f7",
  other: "#94a3b8"
};

function addTask() {
  const text = document.getElementById("taskInput").value.trim();
  const category = document.getElementById("categorySelect").value;
  if (text === "") return;
  tasks.push({ id: Date.now(), text: text, completed: false, category: category });
  saveTasks();
  renderTasks();
}

// In renderTasks, add category dot
const dot = document.createElement("span");
dot.style.width = "10px";
dot.style.height = "10px";
dot.style.borderRadius = "50%";
dot.style.background = categoryColors[task.category] || "#94a3b8";
li.prepend(dot);

// Add category filter
function filterByCategory(cat) {
  if (cat === "all") return tasks;
  return tasks.filter(function(t) { return t.category === cat; });
}
```

### Challenge 3. Drag and Drop Reordering

**Difficulty:** Hard

Add drag-and-drop functionality to reorder tasks. Users should be able to drag a task and drop it at a new position in the list. The new order should be saved to localStorage.

**Constraints:**

- Use the HTML Drag and Drop API (draggable, dragstart, dragover, drop events).

**Sample input:**

```
Drag task 3 above task 1
```

**Sample output:**

```
Tasks reordered:
1. (was task 3)
2. (was task 1)
3. (was task 2)
Order saved to localStorage.
```

**Solution:**

```javascript
// Make task items draggable
li.draggable = true;
li.dataset.id = task.id;

li.addEventListener("dragstart", function(e) {
  e.dataTransfer.setData("text/plain", task.id);
  li.classList.add("dragging");
});

li.addEventListener("dragend", function() {
  li.classList.remove("dragging");
});

// Allow dropping on the task list
const list = document.getElementById("taskList");
list.addEventListener("dragover", function(e) {
  e.preventDefault();
  const dragging = document.querySelector(".dragging");
  const siblings = Array.from(list.querySelectorAll(".task-item:not(.dragging)"));
  const nextSibling = siblings.find(function(sib) {
    const box = sib.getBoundingClientRect();
    return e.clientY < box.top + box.height / 2;
  });
  list.insertBefore(dragging, nextSibling || null);
});

list.addEventListener("drop", function(e) {
  e.preventDefault();
  // Read new order from DOM
  const newOrder = Array.from(list.children).map(function(li) {
    return Number(li.dataset.id);
  });
  // Reorder tasks array to match
  tasks = newOrder.map(function(id) {
    return tasks.find(function(t) { return t.id === id; });
  });
  saveTasks();
});
```

### Challenge 4. Task Statistics Dashboard

**Difficulty:** Medium

Add a statistics section that shows: total tasks, completed tasks, completion percentage, most productive day (day with most tasks completed), and a simple bar showing completion progress.

**Constraints:**

- Calculate stats from the tasks array. Display a visual progress bar using a div with dynamic width.

**Sample input:**

```
(5 tasks total, 3 completed)
```

**Sample output:**

```
Stats:
Total: 5 | Completed: 3 | Active: 2
Completion: 60%
[====------] 60%
```

**Solution:**

```javascript
function showStats() {
  const total = tasks.length;
  const completed = tasks.filter(function(t) { return t.completed; }).length;
  const active = total - completed;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  const statsEl = document.getElementById("stats");
  statsEl.innerHTML = '<p>Total: ' + total + ' | Completed: ' + completed + ' | Active: ' + active + '</p>' +
    '<p>Completion: ' + percentage + '%</p>' +
    '<div class="progress-bar">' +
    '<div class="progress-fill" style="width: ' + percentage + '%"></div>' +
    '</div>';
}

// Call showStats() inside renderTasks()
// CSS for progress bar:
// .progress-bar { height: 8px; background: #334155; border-radius: 4px; }
// .progress-fill { height: 100%; background: #a855f7; border-radius: 4px; transition: width 0.3s; }
```

### Challenge 5. Export and Import Tasks

**Difficulty:** Hard

Add buttons to export all tasks as a JSON file (download) and import tasks from a JSON file (upload). This lets users back up their tasks or transfer them between devices.

**Constraints:**

- Use Blob and URL.createObjectURL for export. Use FileReader for import.

**Sample input:**

```
Click 'Export' to download tasks.json, or click 'Import' to upload a file.
```

**Sample output:**

```
Exported 5 tasks to tasks.json
Imported 5 tasks from file
```

**Solution:**

```javascript
// Export tasks as JSON file
function exportTasks() {
  const data = JSON.stringify(tasks, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "tasks.json";
  a.click();
  URL.revokeObjectURL(url);
  console.log("Exported " + tasks.length + " tasks");
}

// Import tasks from JSON file
function importTasks(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (Array.isArray(imported)) {
        tasks = imported;
        saveTasks();
        renderTasks();
        console.log("Imported " + imported.length + " tasks");
      }
    } catch (err) {
      console.log("Invalid file format");
    }
  };
  reader.readAsText(file);
}

// File input for import
document.getElementById("importInput").addEventListener("change", function(e) {
  if (e.target.files[0]) importTasks(e.target.files[0]);
});
```

### Challenge 6. Undo Delete Feature

**Difficulty:** Hard

Add an undo feature. When a task is deleted, show a toast notification with an 'Undo' button. If the user clicks Undo within 5 seconds, the task is restored. After 5 seconds, the toast disappears and the deletion is final.

**Constraints:**

- Store the deleted task temporarily. Use setTimeout for auto-dismiss.

**Sample input:**

```
Delete task 'Learn JavaScript', click Undo within 5 seconds
```

**Sample output:**

```
Task deleted. [Undo - 5s]
(Click Undo)
Task restored: Learn JavaScript
```

**Solution:**

```javascript
let lastDeleted = null;
let undoTimeout = null;

function deleteTask(id) {
  const task = tasks.find(function(t) { return t.id === id; });
  lastDeleted = { task: task, index: tasks.indexOf(task) };
  tasks = tasks.filter(function(t) { return t.id !== id; });
  saveTasks();
  renderTasks();
  showUndoToast();
}

function showUndoToast() {
  const toast = document.getElementById("undoToast");
  toast.textContent = 'Task deleted. ';
  const undoBtn = document.createElement("button");
  undoBtn.textContent = "Undo";
  undoBtn.addEventListener("click", function() {
    if (lastDeleted) {
      tasks.splice(lastDeleted.index, 0, lastDeleted.task);
      saveTasks();
      renderTasks();
      lastDeleted = null;
    }
    toast.style.display = "none";
    clearTimeout(undoTimeout);
  });
  toast.appendChild(undoBtn);
  toast.style.display = "block";
  clearTimeout(undoTimeout);
  undoTimeout = setTimeout(function() {
    toast.style.display = "none";
    lastDeleted = null;
  }, 5000);
}
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/project-todo-app-with-storage/*
