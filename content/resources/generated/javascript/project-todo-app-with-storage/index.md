---
title: "Build a To-Do App with Local Storage - Complete JavaScript Project | Modern Age Coders"
description: "Build a complete to-do list app with HTML, CSS, and JavaScript. Add, delete, edit, mark complete, filter tasks, and persist everything with localStorage. Includes full code walkthrough and 52+ practice questions."
slug: project-todo-app-with-storage
canonical: https://learn.modernagecoders.com/resources/javascript/project-todo-app-with-storage
category: "JavaScript"
keywords: ["javascript todo app", "build todo app javascript", "todo list localstorage", "javascript project tutorial", "todo app html css js", "localstorage todo app", "javascript crud app", "todo app step by step", "beginner javascript project"]
---
# Project: Build a To-Do App with Local Storage

**Difficulty:** Advanced  
**Reading time:** 60 min  
**Chapter:** 22  
**Practice questions:** 51

## What Are We Building?

In this chapter, you will build a complete to-do list application from scratch. This is a **project chapter** -- you will combine HTML, CSS, JavaScript, and localStorage into a fully working app that you can actually use every day.

The to-do app will have:

- An input field and button to add new tasks
- A list of tasks with checkboxes to mark them complete
- A delete button on each task
- Double-click to edit a task
- Filter buttons: All, Active, Completed
- A "Clear Completed" button
- Task count display ("3 tasks remaining")
- All data saved to localStorage -- refresh the page and your tasks are still there

```
Add a task: [ Learn JavaScript        ] [Add]
-----------------------------------------------
[x] Practice CSS           [Delete]
[ ] Build to-do app         [Delete]
[ ] Read chapter 22         [Delete]
-----------------------------------------------
[All] [Active] [Completed]   2 items left
                          [Clear Completed]
-----------------------------------------------
Double-click any task to edit it.
```

By the end of this chapter, you will have a real, useful application and a deep understanding of how HTML, CSS, and JavaScript work together.

## Why Build a To-Do App?

### 1. It Is the Ultimate Beginner Project

A to-do app is the "Hello World" of web applications. It covers every fundamental skill: creating elements, handling events, managing state, storing data, and updating the UI. If you can build a to-do app from scratch, you can build almost anything.

### 2. It Uses Everything You Have Learned

This project combines DOM manipulation (creating and removing elements), event listeners (click, double-click, keydown), CSS manipulation (strikethrough for completed tasks), arrays and objects (storing task data), and localStorage (persisting data). It proves you understand these concepts together.

### 3. CRUD Operations

The to-do app implements all four CRUD operations: **C**reate (add a task), **R**ead (display tasks), **U**pdate (edit or toggle complete), **D**elete (remove a task). These operations are the foundation of every web application, from social media to e-commerce.

### 4. You Can Actually Use It

Unlike toy examples, this is an app you can use daily. Add it to your bookmarks. Track your homework, coding practice, or goals. Show it to friends and family.

## Building the To-Do App Step by Step

### Step 1: HTML Structure

The HTML has three main sections: an input area for adding tasks, a task list, and a footer with filters and count.

```
<!DOCTYPE html>

  
  
  To-Do App
  

  
    

# My To-Do List

    
      
      Add
    

    

    
      0 items left
      
        All
        Active
        Completed
      

      Clear Completed
    

  

  

```

Key decisions: the task list is a `` where each task will be an ``. Filter buttons use `data-filter` attributes to identify which filter is selected.

### Step 2: CSS Styling

The CSS creates a clean, modern look with strikethrough for completed tasks, hover effects for buttons, and responsive design.

```
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Segoe UI', Arial, sans-serif;
  background: #0f172a;
  display: flex; justify-content: center;
  padding: 40px 16px; color: #e2e8f0;
}

.todo-container {
  background: #1e293b; border-radius: 16px;
  padding: 32px; width: 100%; max-width: 560px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
}

h1 {
  text-align: center; margin-bottom: 24px;
  color: #a855f7; font-size: 28px;
}

.input-area {
  display: flex; gap: 10px; margin-bottom: 20px;
}

#taskInput {
  flex: 1; padding: 12px 16px; font-size: 16px;
  border: 2px solid #334155; border-radius: 10px;
  background: #0f172a; color: #e2e8f0; outline: none;
}

#taskInput:focus { border-color: #a855f7; }

#addBtn {
  padding: 12px 24px; font-size: 16px; font-weight: 600;
  background: #a855f7; color: white; border: none;
  border-radius: 10px; cursor: pointer;
}

#addBtn:hover { background: #9333ea; }

#taskList { list-style: none; }

.task-item {
  display: flex; align-items: center; gap: 12px;
  padding: 12px 16px; margin-bottom: 8px;
  background: #0f172a; border-radius: 10px;
  border: 1px solid #334155;
  transition: background 0.2s;
}

.task-item:hover { background: #1a2744; }

.task-item input[type="checkbox"] {
  width: 20px; height: 20px; cursor: pointer;
  accent-color: #a855f7;
}

.task-text {
  flex: 1; font-size: 16px; cursor: pointer;
}

.task-text.completed {
  text-decoration: line-through;
  color: #64748b;
}

.task-text.editing {
  background: #1e293b; border: 1px solid #a855f7;
  padding: 4px 8px; border-radius: 6px;
  outline: none; color: #e2e8f0;
}

.delete-btn {
  background: none; border: none; color: #ef4444;
  font-size: 18px; cursor: pointer; opacity: 0;
  transition: opacity 0.2s;
}

.task-item:hover .delete-btn { opacity: 1; }

.footer {
  display: flex; justify-content: space-between;
  align-items: center; margin-top: 16px;
  padding-top: 16px; border-top: 1px solid #334155;
  font-size: 14px; flex-wrap: wrap; gap: 8px;
}

#taskCount { color: #94a3b8; }

.filters { display: flex; gap: 4px; }

.filter-btn {
  padding: 6px 14px; font-size: 13px;
  background: none; border: 1px solid #334155;
  border-radius: 6px; color: #94a3b8; cursor: pointer;
}

.filter-btn:hover { border-color: #a855f7; color: #e2e8f0; }
.filter-btn.active { border-color: #a855f7; color: #a855f7; }

#clearCompleted {
  background: none; border: none;
  color: #94a3b8; cursor: pointer; font-size: 13px;
}

#clearCompleted:hover { color: #ef4444; }

@media (max-width: 480px) {
  .footer { flex-direction: column; align-items: stretch; text-align: center; }
  .filters { justify-content: center; }
}
```

### Step 3: JavaScript -- Data Structure and Storage

Each task is stored as an object with three properties: id (unique identifier), text (the task description), and completed (true or false). All tasks are stored in an array in localStorage.

```
// Task structure
// { id: 1712678400000, text: "Learn JavaScript", completed: false }

// Load tasks from localStorage
function loadTasks() {
  const raw = localStorage.getItem("tasks");
  return raw ? JSON.parse(raw) : [];
}

// Save tasks to localStorage
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
```

### Step 4: JavaScript -- Adding a Task

```
let tasks = loadTasks();
let currentFilter = "all";

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (text === "") return;

  tasks.push({
    id: Date.now(),
    text: text,
    completed: false
  });

  saveTasks(tasks);
  input.value = "";
  renderTasks();
}
```

We use `Date.now()` as a unique ID for each task. This gives a timestamp in milliseconds, which is unique enough for our purposes.

### Step 5: JavaScript -- Rendering Tasks

```
function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  const filtered = getFilteredTasks();

  filtered.forEach(function(task) {
    const li = document.createElement("li");
    li.classList.add("task-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", function() {
      toggleTask(task.id);
    });

    const span = document.createElement("span");
    span.classList.add("task-text");
    if (task.completed) span.classList.add("completed");
    span.textContent = task.text;
    span.addEventListener("dblclick", function() {
      editTask(task.id, span);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", function() {
      deleteTask(task.id);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  updateCount();
}
```

### Step 6: JavaScript -- Toggle, Delete, Edit

```
function toggleTask(id) {
  tasks = tasks.map(function(task) {
    if (task.id === id) {
      return { id: task.id, text: task.text, completed: !task.completed };
    }
    return task;
  });
  saveTasks(tasks);
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(function(task) {
    return task.id !== id;
  });
  saveTasks(tasks);
  renderTasks();
}

function editTask(id, span) {
  const task = tasks.find(function(t) { return t.id === id; });
  if (!task) return;

  span.contentEditable = true;
  span.classList.add("editing");
  span.focus();

  function saveEdit() {
    span.contentEditable = false;
    span.classList.remove("editing");
    const newText = span.textContent.trim();
    if (newText === "") {
      deleteTask(id);
    } else {
      task.text = newText;
      saveTasks(tasks);
    }
  }

  span.addEventListener("blur", saveEdit, { once: true });
  span.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      span.blur();
    }
  });
}
```

### Step 7: JavaScript -- Filtering and Count

```
function getFilteredTasks() {
  if (currentFilter === "active") {
    return tasks.filter(function(t) { return !t.completed; });
  }
  if (currentFilter === "completed") {
    return tasks.filter(function(t) { return t.completed; });
  }
  return tasks;
}

function updateCount() {
  const remaining = tasks.filter(function(t) { return !t.completed; }).length;
  document.getElementById("taskCount").textContent = remaining + " item" + (remaining !== 1 ? "s" : "") + " left";
}

function clearCompleted() {
  tasks = tasks.filter(function(t) { return !t.completed; });
  saveTasks(tasks);
  renderTasks();
}
```

### Step 8: JavaScript -- Event Listeners

```
document.getElementById("addBtn").addEventListener("click", addTask);

document.getElementById("taskInput").addEventListener("keydown", function(e) {
  if (e.key === "Enter") addTask();
});

document.querySelectorAll(".filter-btn").forEach(function(btn) {
  btn.addEventListener("click", function() {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

document.getElementById("clearCompleted").addEventListener("click", clearCompleted);

// Initial render
renderTasks();
```

### How It All Fits Together

The app follows a simple pattern:

1. User performs an action (add, toggle, delete, edit, filter)
2. The `tasks` array is updated
3. `saveTasks()` writes the array to localStorage
4. `renderTasks()` rebuilds the UI from the array

This pattern -- action, update data, save, re-render -- is the foundation of how all web applications work. React, Vue, and Angular all follow this same principle.

## Code Examples

### Complete To-Do App -- All in One File

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do App</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      background: #0f172a; display: flex; justify-content: center;
      padding: 40px 16px; color: #e2e8f0;
    }
    .todo-container {
      background: #1e293b; border-radius: 16px; padding: 32px;
      width: 100%; max-width: 560px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.4);
    }
    h1 { text-align: center; margin-bottom: 24px; color: #a855f7; font-size: 28px; }
    .input-area { display: flex; gap: 10px; margin-bottom: 20px; }
    #taskInput {
      flex: 1; padding: 12px 16px; font-size: 16px;
      border: 2px solid #334155; border-radius: 10px;
      background: #0f172a; color: #e2e8f0; outline: none;
    }
    #taskInput:focus { border-color: #a855f7; }
    #addBtn {
      padding: 12px 24px; font-size: 16px; font-weight: 600;
      background: #a855f7; color: white; border: none;
      border-radius: 10px; cursor: pointer;
    }
    #addBtn:hover { background: #9333ea; }
    #taskList { list-style: none; }
    .task-item {
      display: flex; align-items: center; gap: 12px;
      padding: 12px 16px; margin-bottom: 8px;
      background: #0f172a; border-radius: 10px; border: 1px solid #334155;
    }
    .task-item:hover { background: #1a2744; }
    .task-item input[type="checkbox"] {
      width: 20px; height: 20px; cursor: pointer; accent-color: #a855f7;
    }
    .task-text { flex: 1; font-size: 16px; cursor: pointer; }
    .task-text.completed { text-decoration: line-through; color: #64748b; }
    .task-text.editing {
      background: #1e293b; border: 1px solid #a855f7;
      padding: 4px 8px; border-radius: 6px; outline: none; color: #e2e8f0;
    }
    .delete-btn {
      background: none; border: none; color: #ef4444;
      font-size: 18px; cursor: pointer; opacity: 0; transition: opacity 0.2s;
    }
    .task-item:hover .delete-btn { opacity: 1; }
    .footer {
      display: flex; justify-content: space-between; align-items: center;
      margin-top: 16px; padding-top: 16px; border-top: 1px solid #334155;
      font-size: 14px; flex-wrap: wrap; gap: 8px;
    }
    #taskCount { color: #94a3b8; }
    .filters { display: flex; gap: 4px; }
    .filter-btn {
      padding: 6px 14px; font-size: 13px; background: none;
      border: 1px solid #334155; border-radius: 6px;
      color: #94a3b8; cursor: pointer;
    }
    .filter-btn:hover { border-color: #a855f7; color: #e2e8f0; }
    .filter-btn.active { border-color: #a855f7; color: #a855f7; }
    #clearCompleted {
      background: none; border: none; color: #94a3b8;
      cursor: pointer; font-size: 13px;
    }
    #clearCompleted:hover { color: #ef4444; }
  </style>
</head>
<body>
  <div class="todo-container">
    <h1>My To-Do List</h1>
    <div class="input-area">
      <input type="text" id="taskInput" placeholder="What do you need to do?">
      <button id="addBtn">Add</button>
    </div>
    <ul id="taskList"></ul>
    <div class="footer">
      <span id="taskCount">0 items left</span>
      <div class="filters">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="active">Active</button>
        <button class="filter-btn" data-filter="completed">Completed</button>
      </div>
      <button id="clearCompleted">Clear Completed</button>
    </div>
  </div>

  <script>
    let tasks = loadTasks();
    let currentFilter = "all";

    function loadTasks() {
      const raw = localStorage.getItem("todoTasks");
      return raw ? JSON.parse(raw) : [];
    }

    function saveTasks() {
      localStorage.setItem("todoTasks", JSON.stringify(tasks));
    }

    function addTask() {
      const input = document.getElementById("taskInput");
      const text = input.value.trim();
      if (text === "") return;
      tasks.push({ id: Date.now(), text: text, completed: false });
      saveTasks();
      input.value = "";
      input.focus();
      renderTasks();
    }

    function toggleTask(id) {
      tasks = tasks.map(function(task) {
        if (task.id === id) {
          return { id: task.id, text: task.text, completed: !task.completed };
        }
        return task;
      });
      saveTasks();
      renderTasks();
    }

    function deleteTask(id) {
      tasks = tasks.filter(function(task) { return task.id !== id; });
      saveTasks();
      renderTasks();
    }

    function editTask(id, span) {
      const task = tasks.find(function(t) { return t.id === id; });
      if (!task) return;
      span.contentEditable = true;
      span.classList.add("editing");
      span.focus();
      function saveEdit() {
        span.contentEditable = false;
        span.classList.remove("editing");
        const newText = span.textContent.trim();
        if (newText === "") { deleteTask(id); }
        else { task.text = newText; saveTasks(); }
      }
      span.addEventListener("blur", saveEdit, { once: true });
      span.addEventListener("keydown", function(e) {
        if (e.key === "Enter") { e.preventDefault(); span.blur(); }
        if (e.key === "Escape") { span.textContent = task.text; span.blur(); }
      });
    }

    function getFilteredTasks() {
      if (currentFilter === "active") return tasks.filter(function(t) { return !t.completed; });
      if (currentFilter === "completed") return tasks.filter(function(t) { return t.completed; });
      return tasks;
    }

    function updateCount() {
      const remaining = tasks.filter(function(t) { return !t.completed; }).length;
      document.getElementById("taskCount").textContent = remaining + " item" + (remaining !== 1 ? "s" : "") + " left";
    }

    function renderTasks() {
      const list = document.getElementById("taskList");
      list.innerHTML = "";
      const filtered = getFilteredTasks();
      filtered.forEach(function(task) {
        const li = document.createElement("li");
        li.classList.add("task-item");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", function() { toggleTask(task.id); });

        const span = document.createElement("span");
        span.classList.add("task-text");
        if (task.completed) span.classList.add("completed");
        span.textContent = task.text;
        span.addEventListener("dblclick", function() { editTask(task.id, span); });

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "X";
        deleteBtn.addEventListener("click", function() { deleteTask(task.id); });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        list.appendChild(li);
      });
      updateCount();
    }

    function clearCompleted() {
      tasks = tasks.filter(function(t) { return !t.completed; });
      saveTasks();
      renderTasks();
    }

    // Event listeners
    document.getElementById("addBtn").addEventListener("click", addTask);
    document.getElementById("taskInput").addEventListener("keydown", function(e) {
      if (e.key === "Enter") addTask();
    });
    document.querySelectorAll(".filter-btn").forEach(function(btn) {
      btn.addEventListener("click", function() {
        document.querySelector(".filter-btn.active").classList.remove("active");
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        renderTasks();
      });
    });
    document.getElementById("clearCompleted").addEventListener("click", clearCompleted);

    renderTasks();
  </script>
</body>
</html>
```

This is the complete to-do app in a single file. The HTML provides the structure (input, list, filters). The CSS styles the dark theme with purple accents, strikethrough for completed tasks, and fade-in delete buttons. The JavaScript manages the task array, saves to localStorage, and re-renders the list after every change. The pattern is: action -> update array -> save -> re-render.

**Output:**

```
A fully interactive to-do app with add, delete, edit (double-click), toggle complete, filter (All/Active/Completed), clear completed, and localStorage persistence.
```

### Task Data Structure and localStorage Functions

```javascript
// Each task is an object with 3 properties:
const exampleTask = {
  id: 1712678400000,     // Date.now() gives a unique timestamp
  text: "Learn JavaScript",
  completed: false
};

// All tasks are stored as an array of objects
const exampleTasks = [
  { id: 1712678400000, text: "Learn JavaScript", completed: false },
  { id: 1712678400001, text: "Practice CSS", completed: true },
  { id: 1712678400002, text: "Build to-do app", completed: false }
];

// Save to localStorage
function saveTasks(tasks) {
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
  console.log("Saved " + tasks.length + " tasks");
}

// Load from localStorage
function loadTasks() {
  const raw = localStorage.getItem("todoTasks");
  if (raw === null) {
    console.log("No saved tasks, starting fresh");
    return [];
  }
  const tasks = JSON.parse(raw);
  console.log("Loaded " + tasks.length + " tasks");
  return tasks;
}

// Test
saveTasks(exampleTasks);
const loaded = loadTasks();
console.log(loaded[0].text);       // "Learn JavaScript"
console.log(loaded[1].completed);  // true
```

Each task needs three things: a unique `id` (we use Date.now() for simplicity), the task `text`, and a `completed` boolean. The `saveTasks` function converts the array to JSON and stores it. The `loadTasks` function reads it back, handling the case when nothing is saved yet.

**Output:**

```
Saved 3 tasks
Loaded 3 tasks
Learn JavaScript
true
```

### Adding a Task

```javascript
let tasks = [];

function addTask(text) {
  // Don't add empty tasks
  if (text.trim() === "") {
    console.log("Cannot add empty task");
    return;
  }

  // Create task object with unique ID
  const newTask = {
    id: Date.now(),
    text: text.trim(),
    completed: false
  };

  // Add to array
  tasks.push(newTask);
  console.log("Added: " + newTask.text + " (id: " + newTask.id + ")");

  // Save to localStorage
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
  console.log("Total tasks: " + tasks.length);
}

// Test
addTask("Learn JavaScript");
addTask("Build to-do app");
addTask("");                 // Should not add
addTask("   ");              // Should not add (whitespace only)
addTask("Practice CSS");
console.log(tasks.length);   // 3
```

The addTask function validates the input (no empty strings), creates a task object with a unique ID from Date.now(), adds it to the array, and saves to localStorage. The `trim()` call removes leading/trailing whitespace.

**Output:**

```
Added: Learn JavaScript (id: 1712678400000)
Total tasks: 1
Added: Build to-do app (id: 1712678400001)
Total tasks: 2
Cannot add empty task
Cannot add empty task
Added: Practice CSS (id: 1712678400002)
Total tasks: 3
3
```

### Toggle, Delete, and Filter Functions

```javascript
let tasks = [
  { id: 1, text: "Learn JavaScript", completed: false },
  { id: 2, text: "Practice CSS", completed: true },
  { id: 3, text: "Build to-do app", completed: false },
  { id: 4, text: "Read chapter 22", completed: true }
];

// Toggle completed status
function toggleTask(id) {
  tasks = tasks.map(function(task) {
    if (task.id === id) {
      return { id: task.id, text: task.text, completed: !task.completed };
    }
    return task;
  });
}

// Delete a task
function deleteTask(id) {
  tasks = tasks.filter(function(task) { return task.id !== id; });
}

// Filter tasks
function getFiltered(filter) {
  if (filter === "active") return tasks.filter(function(t) { return !t.completed; });
  if (filter === "completed") return tasks.filter(function(t) { return t.completed; });
  return tasks;
}

// Count remaining
function getRemaining() {
  return tasks.filter(function(t) { return !t.completed; }).length;
}

// Test toggle
console.log("Before toggle:", tasks[0].completed); // false
toggleTask(1);
console.log("After toggle:", tasks[0].completed);  // true

// Test filter
console.log("Active:", getFiltered("active").length);       // 1
console.log("Completed:", getFiltered("completed").length); // 3
console.log("All:", getFiltered("all").length);             // 4

// Test delete
deleteTask(2);
console.log("After delete:", tasks.length); // 3

// Test count
console.log("Remaining:", getRemaining()); // 1
```

`toggleTask` uses `map` to create a new array where the matching task has its completed status flipped. `deleteTask` uses `filter` to remove the task with the matching ID. `getFiltered` returns different subsets based on the filter. These are pure functions that work on the data without touching the DOM.

**Output:**

```
Before toggle: false
After toggle: true
Active: 1
Completed: 3
All: 4
After delete: 3
Remaining: 1
```

### Building the Task List Element

```javascript
// This function creates one task <li> element
function createTaskElement(task) {
  const li = document.createElement("li");
  li.classList.add("task-item");

  // Checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.addEventListener("change", function() {
    console.log("Toggled: " + task.text);
    // In the real app, this calls toggleTask(task.id)
  });

  // Task text
  const span = document.createElement("span");
  span.classList.add("task-text");
  if (task.completed) {
    span.classList.add("completed"); // Adds strikethrough
  }
  span.textContent = task.text;

  // Double-click to edit
  span.addEventListener("dblclick", function() {
    console.log("Editing: " + task.text);
    // In the real app, this calls editTask(task.id, span)
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", function() {
    console.log("Deleted: " + task.text);
    // In the real app, this calls deleteTask(task.id)
  });

  // Assemble
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}

// Test
const task = { id: 1, text: "Learn JavaScript", completed: false };
const element = createTaskElement(task);
console.log(element.outerHTML);
```

Each task in the list is built from four elements: an `` container, a checkbox input, a text span, and a delete button. Each element gets the appropriate event listener. The `.completed` class adds CSS strikethrough styling. This function is called for each task during rendering.

**Output:**

```
<li class="task-item"><input type="checkbox"><span class="task-text">Learn JavaScript</span><button class="delete-btn">X</button></li>
```

### Edit Task with contentEditable

```javascript
function editTask(id, span, tasks) {
  const task = tasks.find(function(t) { return t.id === id; });
  if (!task) return;

  // Make the span editable
  span.contentEditable = true;
  span.classList.add("editing");
  span.focus();

  console.log("Editing mode: " + task.text);

  function saveEdit() {
    span.contentEditable = false;
    span.classList.remove("editing");

    const newText = span.textContent.trim();
    if (newText === "") {
      // Empty text = delete the task
      console.log("Empty text, deleting task");
    } else if (newText !== task.text) {
      task.text = newText;
      console.log("Updated to: " + newText);
    } else {
      console.log("No changes");
    }
  }

  // Save on blur (clicking outside)
  span.addEventListener("blur", saveEdit, { once: true });

  // Save on Enter, cancel on Escape
  span.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      span.blur();  // Triggers saveEdit via blur
    }
    if (e.key === "Escape") {
      span.textContent = task.text;  // Restore original
      span.blur();
    }
  });
}

// This uses contentEditable, which makes any HTML element
// act like a text input. It is simpler than replacing
// the span with an <input> element.
```

The edit function uses `contentEditable` to turn the task text span into an editable field. The user can type a new text, press Enter to save, or Escape to cancel. Clicking outside (blur) also saves. If the text is empty after editing, the task is deleted. The `{ once: true }` option ensures the blur listener fires only once.

**Output:**

```
Editing mode: Learn JavaScript
(User types new text and presses Enter)
Updated to: Learn advanced JavaScript
```

## Common Mistakes

### Not Saving After Every Change

**Wrong:**

```
function toggleTask(id) {
  tasks = tasks.map(function(task) {
    if (task.id === id) task.completed = !task.completed;
    return task;
  });
  renderTasks();
  // Forgot to call saveTasks()!
}
```

No error, but changes are lost when the page is refreshed because the updated array was never saved to localStorage.

**Correct:**

```
function toggleTask(id) {
  tasks = tasks.map(function(task) {
    if (task.id === id) {
      return { id: task.id, text: task.text, completed: !task.completed };
    }
    return task;
  });
  saveTasks();   // Always save after modifying tasks
  renderTasks();
}
```

Every time the tasks array changes (add, toggle, delete, edit), you must call `saveTasks()` to write the updated array to localStorage. Without this, the changes exist only in memory and disappear on refresh.

### Mutating the Task Object Directly

**Wrong:**

```
function toggleTask(id) {
  const task = tasks.find(function(t) { return t.id === id; });
  task.completed = !task.completed;  // Mutating the original object
  saveTasks();
  renderTasks();
}
```

This works but is a bad practice. Directly mutating objects makes bugs harder to track. It is better to create a new object.

**Correct:**

```
function toggleTask(id) {
  tasks = tasks.map(function(task) {
    if (task.id === id) {
      return { id: task.id, text: task.text, completed: !task.completed };
    }
    return task;
  });
  saveTasks();
  renderTasks();
}
```

Using `map` to create a new array with a new object is a cleaner pattern. It makes it clear that the data changed and avoids bugs from shared references. This immutable approach is used by React and other frameworks.

### Using Array Index Instead of Unique ID

**Wrong:**

```
// Using array index to identify tasks
function deleteTask(index) {
  tasks.splice(index, 1);
}
// Problem: if the list is filtered, index 2 in the filtered
// view is NOT index 2 in the full array!
```

Deleting by index breaks when filters are active. The visible list has different indices than the full tasks array.

**Correct:**

```
// Use a unique ID instead
function deleteTask(id) {
  tasks = tasks.filter(function(task) { return task.id !== id; });
}
// Works correctly regardless of filtering because ID is unique
```

Array indices change when items are added, removed, or filtered. A unique ID (like `Date.now()`) stays the same regardless of the array's order or current filter. Always use unique IDs to identify items in a list.

### Re-rendering Without Clearing the List First

**Wrong:**

```
function renderTasks() {
  const list = document.getElementById("taskList");
  // Forgot list.innerHTML = "";
  tasks.forEach(function(task) {
    const li = document.createElement("li");
    li.textContent = task.text;
    list.appendChild(li);
  });
}
```

Tasks are duplicated every time renderTasks is called because old elements are not removed before adding new ones.

**Correct:**

```
function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";  // Clear existing tasks first
  tasks.forEach(function(task) {
    const li = document.createElement("li");
    li.textContent = task.text;
    list.appendChild(li);
  });
}
```

Always clear the container with `innerHTML = ""` before re-rendering. Otherwise, every call to renderTasks appends duplicate elements. The simple "clear and rebuild" approach is the safest for beginners.

## Summary

- A to-do app implements all four CRUD operations: Create (add task), Read (display tasks), Update (edit or toggle), Delete (remove task). These operations are the foundation of every web application.
- Each task is stored as an object with three properties: id (unique, from Date.now()), text (the task description), and completed (boolean). Tasks are stored in an array.
- The data flow pattern is: user action -> update array -> save to localStorage -> re-render UI. This same pattern is used by React, Vue, and every modern framework.
- localStorage persistence uses two functions: saveTasks() calls JSON.stringify and setItem, loadTasks() calls getItem and JSON.parse with a fallback to an empty array.
- Rendering clears the list with innerHTML = '' and rebuilds it from the array. Each task element is assembled from a checkbox, text span, and delete button with their own event listeners.
- Toggling uses array.map() to create a new array where the matching task has its completed property flipped. Deleting uses array.filter() to exclude the matching task.
- Editing uses contentEditable to make the text span editable in place. Enter saves, Escape cancels, and blur (clicking outside) also saves. Empty text after editing deletes the task.
- Filtering uses array.filter() with the current filter state. 'active' shows tasks where completed is false, 'completed' shows tasks where completed is true, 'all' shows everything.
- Always use unique IDs (not array indices) to identify tasks. Array indices change when items are added, removed, or filtered. IDs are stable and unique.
- Always save to localStorage after every change to the tasks array. Without saving, changes exist only in memory and are lost on page refresh.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/javascript/project-todo-app-with-storage/*
*Practice questions: https://learn.modernagecoders.com/resources/javascript/project-todo-app-with-storage/practice/*
