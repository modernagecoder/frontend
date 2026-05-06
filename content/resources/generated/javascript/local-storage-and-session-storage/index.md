---
title: "Local Storage and Session Storage in JavaScript - Save Data in the Browser | Modern Age Coders"
description: "Learn JavaScript localStorage and sessionStorage to save data in the browser. Covers setItem, getItem, removeItem, clear, JSON.stringify/parse, dark mode persistence, form drafts, notes app, and storage limits. Includes 54+ practice questions with coding challenges."
slug: local-storage-and-session-storage
canonical: https://learn.modernagecoders.com/resources/javascript/local-storage-and-session-storage/
category: "JavaScript"
keywords: ["javascript localstorage", "sessionstorage javascript", "web storage api", "localstorage setitem getitem", "save data browser javascript", "javascript dark mode localstorage", "json stringify parse localstorage", "javascript persist data", "web storage tutorial", "localstorage vs sessionstorage"]
---
# Local Storage and Session Storage

**Difficulty:** Advanced  
**Reading time:** 50 min  
**Chapter:** 21  
**Practice questions:** 50

## What Is Web Storage?

Web Storage is a way for your website to save data directly in the user's browser. Think of it like a small notebook that the browser keeps for your website. When Aarav visits your site and picks dark mode, you can save that choice. Next time he visits, you read the notebook and apply dark mode automatically.

There are two types of Web Storage:

- **localStorage** -- data stays forever (until you or the user deletes it). Even if Aarav closes the browser and reopens it next week, the data is still there.
- **sessionStorage** -- data stays only for the current tab session. If Aarav closes the tab, the data is gone. Opening a new tab starts a fresh session.

```
// Save something to localStorage
localStorage.setItem("username", "Aarav");

// Read it back
const name = localStorage.getItem("username");
console.log(name); // "Aarav"

// This data survives browser restarts!
```

Web Storage is different from cookies. It is simpler, holds more data (~5MB vs 4KB for cookies), and is never sent to the server automatically. It stays in the browser only.

## Why Learn Web Storage?

### 1. Make Your Apps Remember Things

Without storage, every time a user refreshes the page, everything resets. Their preferences, their form data, their progress -- all gone. Web Storage lets your app remember things between visits. A to-do app that forgets all tasks on refresh is useless. With localStorage, tasks persist.

### 2. Better User Experience

When Priya picks dark mode on your site, she does not want to pick it again tomorrow. When Rohan fills half a form and accidentally refreshes, he does not want to start over. Web Storage solves these problems and makes your app feel professional.

### 3. It Is Simple to Use

Unlike databases or server-side storage, localStorage has just 4 methods: `setItem`, `getItem`, `removeItem`, and `clear`. You can learn the basics in 10 minutes and start using it immediately.

### 4. Essential for Projects

Almost every JavaScript project needs some form of data persistence. In the next chapter, you will build a complete to-do app that saves tasks to localStorage. Understanding Web Storage is a prerequisite for building anything that remembers user data.

### 5. Interview Favorite

"What is the difference between localStorage and sessionStorage?" is one of the most common frontend interview questions. Understanding storage also helps you understand cookies, IndexedDB, and how real apps manage client-side data.

## Detailed Explanation

### 1. localStorage Basics

localStorage stores data as key-value pairs, where both the key and value are **strings**. It has 4 main methods:

```
// SET -- save a value
localStorage.setItem("theme", "dark");
localStorage.setItem("fontSize", "16");

// GET -- read a value
const theme = localStorage.getItem("theme");
console.log(theme); // "dark"

// REMOVE -- delete one key
localStorage.removeItem("fontSize");

// CLEAR -- delete everything
localStorage.clear();
```

You can also use bracket notation like an object:

```
// These also work, but setItem/getItem is preferred
localStorage["theme"] = "dark";
console.log(localStorage["theme"]); // "dark"
```

### 2. sessionStorage Works the Same Way

sessionStorage has the exact same API as localStorage. The only difference is how long data lasts:

```
// Save to sessionStorage
sessionStorage.setItem("currentStep", "3");

// Read from sessionStorage
const step = sessionStorage.getItem("currentStep");
console.log(step); // "3"

// This data disappears when the tab is closed
```

FeaturelocalStoragesessionStoragePersists after tab close?YesNoPersists after browser close?YesNoShared between tabs?Yes (same origin)No (per tab)Storage limit~5MB~5MBSent to server?NoNo

### 3. Everything Is a String

This is the most important thing to understand. localStorage only stores strings. If you store a number, it becomes a string. If you store a boolean, it becomes a string.

```
localStorage.setItem("score", 42);
const score = localStorage.getItem("score");
console.log(score);        // "42" -- it is a string!
console.log(typeof score);  // "string"

// You need to convert it back to a number
const realScore = Number(score);
console.log(realScore + 1); // 43
```

### 4. Storing Objects and Arrays with JSON

Since localStorage only stores strings, you cannot directly save an object or array. You must convert it to a JSON string first with `JSON.stringify()`, and parse it back with `JSON.parse()` when reading:

```
// Saving an object
const user = { name: "Aarav", age: 15, darkMode: true };
localStorage.setItem("user", JSON.stringify(user));

// Reading it back
const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name);     // "Aarav"
console.log(savedUser.darkMode); // true (a real boolean, not a string)

// Saving an array
const tasks = ["Math homework", "Read chapter 5", "Practice coding"];
localStorage.setItem("tasks", JSON.stringify(tasks));

// Reading it back
const savedTasks = JSON.parse(localStorage.getItem("tasks"));
console.log(savedTasks.length); // 3
console.log(savedTasks[0]);     // "Math homework"
```

This pattern -- `JSON.stringify` when saving, `JSON.parse` when loading -- is the most common pattern when working with localStorage.

### 5. Checking If Data Exists

When you try to get a key that does not exist, `getItem` returns `null`. You should always check for this:

```
const savedTheme = localStorage.getItem("theme");

if (savedTheme !== null) {
  console.log("Found saved theme:", savedTheme);
} else {
  console.log("No theme saved, using default");
}

// Common pattern: use a default value
const theme = localStorage.getItem("theme") || "light";
console.log(theme); // "light" if nothing was saved
```

For arrays and objects, always check before parsing:

```
const raw = localStorage.getItem("tasks");
const tasks = raw ? JSON.parse(raw) : [];
// If nothing saved, start with an empty array
```

### 6. Practical Example: Dark Mode Toggle

Here is a real example that saves the user's theme preference:

```
// On page load, check for saved preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

// When the toggle button is clicked
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");

  // Save the current state
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
```

### 7. Practical Example: Remember Username

```
const usernameInput = document.getElementById("username");
const saveBtn = document.getElementById("saveBtn");

// Load saved username on page load
const savedName = localStorage.getItem("username");
if (savedName) {
  usernameInput.value = savedName;
}

// Save when button is clicked
saveBtn.addEventListener("click", function() {
  localStorage.setItem("username", usernameInput.value);
  alert("Username saved!");
});
```

### 8. Practical Example: Auto-Save Form Draft

```
const form = document.getElementById("feedbackForm");
const textarea = document.getElementById("feedback");

// Load saved draft
const draft = localStorage.getItem("feedbackDraft");
if (draft) {
  textarea.value = draft;
}

// Auto-save as user types
textarea.addEventListener("input", function() {
  localStorage.setItem("feedbackDraft", textarea.value);
});

// Clear draft when form is submitted
form.addEventListener("submit", function() {
  localStorage.removeItem("feedbackDraft");
});
```

### 9. The storage Event

When localStorage changes in another tab (same origin), the other tabs receive a `storage` event. This lets you sync data across tabs:

```
// This fires when localStorage changes in ANOTHER tab
window.addEventListener("storage", function(event) {
  console.log("Key changed:", event.key);
  console.log("Old value:", event.oldValue);
  console.log("New value:", event.newValue);

  // Example: sync dark mode across tabs
  if (event.key === "theme") {
    if (event.newValue === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }
});
```

Note: the storage event does NOT fire in the tab that made the change. It only fires in other tabs of the same origin.

### 10. Storage Limits and Best Practices

Each origin (like `learn.modernagecoders.com`) gets about 5MB of localStorage. That is enough for preferences, small datasets, and app state, but not for large files or images.

```
// Check how much storage is being used (approximate)
let totalSize = 0;
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  totalSize += key.length + value.length;
}
console.log("Storage used:", (totalSize / 1024).toFixed(2), "KB");
console.log("Total keys:", localStorage.length);
```

Best practices:

- Always use `JSON.stringify/parse` for non-string data
- Always check if `getItem` returns null before using the value
- Use try-catch when parsing JSON (in case of corrupt data)
- Clear old data you no longer need
- Do not store sensitive information (passwords, tokens) in localStorage -- it is not encrypted

## Code Examples

### localStorage: Set, Get, Remove, Clear

```javascript
// SET -- save values
localStorage.setItem("name", "Aarav");
localStorage.setItem("age", "15");
localStorage.setItem("school", "DPS Noida");
console.log("Saved 3 items");

// GET -- read values
console.log(localStorage.getItem("name"));   // "Aarav"
console.log(localStorage.getItem("age"));    // "15" (string!)
console.log(localStorage.getItem("city"));   // null (does not exist)

// LENGTH -- how many items
console.log("Total items:", localStorage.length); // 3

// KEY -- get key by index
console.log("First key:", localStorage.key(0));

// REMOVE -- delete one item
localStorage.removeItem("school");
console.log("After remove:", localStorage.length); // 2

// CLEAR -- delete everything
localStorage.clear();
console.log("After clear:", localStorage.length); // 0
```

These are the 4 core methods of localStorage: `setItem(key, value)` saves data, `getItem(key)` reads it, `removeItem(key)` deletes one item, and `clear()` deletes everything. The `length` property tells you how many items are stored, and `key(index)` returns the key name at a given position.

**Output:**

```
Saved 3 items
Aarav
15
null
Total items: 3
First key: name
After remove: 2
After clear: 0
```

### Storing Objects and Arrays with JSON

```javascript
// Store an object
const student = {
  name: "Priya",
  grade: 10,
  subjects: ["Maths", "Science", "English"],
  scores: { maths: 95, science: 88, english: 92 }
};

localStorage.setItem("student", JSON.stringify(student));

// Read it back
const raw = localStorage.getItem("student");
console.log(typeof raw);       // "string"
console.log(raw);              // '{"name":"Priya",...}'

const parsed = JSON.parse(raw);
console.log(parsed.name);       // "Priya"
console.log(parsed.subjects);   // ["Maths", "Science", "English"]
console.log(parsed.scores.maths); // 95

// Store an array of tasks
const tasks = [
  { text: "Finish homework", done: false },
  { text: "Practice JavaScript", done: true },
  { text: "Read chapter 21", done: false }
];

localStorage.setItem("tasks", JSON.stringify(tasks));

// Read and use the array
const savedTasks = JSON.parse(localStorage.getItem("tasks"));
console.log("Total tasks:", savedTasks.length);
savedTasks.forEach(function(task) {
  const status = task.done ? "[x]" : "[ ]";
  console.log(status + " " + task.text);
});
```

`JSON.stringify()` converts objects and arrays into a JSON string that localStorage can store. `JSON.parse()` converts the string back into a real JavaScript object or array. This is the standard pattern for storing any non-string data.

**Output:**

```
string
{"name":"Priya","grade":10,"subjects":["Maths","Science","English"],"scores":{"maths":95,"science":88,"english":92}}
Priya
["Maths", "Science", "English"]
95
Total tasks: 3
[ ] Finish homework
[x] Practice JavaScript
[ ] Read chapter 21
```

### Safe Reading with Null Checks and Defaults

```javascript
// Pattern 1: Check for null
const savedTheme = localStorage.getItem("theme");
if (savedTheme !== null) {
  console.log("Theme found:", savedTheme);
} else {
  console.log("No theme saved");
}

// Pattern 2: Use || for default values (strings)
const theme = localStorage.getItem("theme") || "light";
console.log("Using theme:", theme);

// Pattern 3: Safe JSON parsing with try-catch
function loadFromStorage(key, defaultValue) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return defaultValue;
    return JSON.parse(raw);
  } catch (error) {
    console.log("Error parsing " + key + ":", error.message);
    return defaultValue;
  }
}

// Usage
const tasks = loadFromStorage("tasks", []);
console.log("Tasks:", tasks); // [] if nothing saved

const settings = loadFromStorage("settings", { volume: 50, muted: false });
console.log("Settings:", settings);

// Pattern 4: Check if a specific key exists
function hasKey(key) {
  return localStorage.getItem(key) !== null;
}
console.log("Has theme?", hasKey("theme")); // false
localStorage.setItem("theme", "dark");
console.log("Has theme?", hasKey("theme")); // true
```

Always check if `getItem` returns null before using the value. For JSON data, wrap `JSON.parse` in a try-catch because corrupt or invalid data would throw an error. The `loadFromStorage` helper function handles all edge cases and returns a safe default value.

**Output:**

```
No theme saved
Using theme: light
Tasks: []
Settings: { volume: 50, muted: false }
Has theme? false
Has theme? true
```

### Dark Mode Toggle with localStorage

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dark Mode Toggle</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f0f0f0; color: #222;
      transition: background 0.3s, color 0.3s;
      padding: 40px; text-align: center;
    }
    body.dark-mode {
      background: #1a1a2e; color: #e2e8f0;
    }
    .toggle-btn {
      padding: 12px 24px; font-size: 16px;
      border: 2px solid #a855f7; border-radius: 8px;
      background: transparent; color: inherit;
      cursor: pointer; margin-top: 20px;
    }
    .toggle-btn:hover { background: #a855f7; color: white; }
  </style>
</head>
<body>
  <h1>Dark Mode Demo</h1>
  <p>Your preference is saved in localStorage.</p>
  <button class="toggle-btn" id="themeToggle">Toggle Dark Mode</button>

  <script>
    // Load saved preference on page load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    }

    // Toggle on button click
    document.getElementById("themeToggle").addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      console.log("Theme saved:", isDark ? "dark" : "light");
    });
  </script>
</body>
</html>
```

On page load, we check localStorage for a saved theme and apply it. When the user clicks the toggle button, we switch the class and save the new preference. Next time the user visits, the preference is automatically applied. This is one of the most common uses of localStorage.

**Output:**

```
Page loads with the user's saved theme preference. Clicking the button toggles between light and dark mode, and the choice persists across page refreshes.
```

### Auto-Save Form Draft

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Auto-Save Draft</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 40px; background: #1a1a2e; color: #e2e8f0; }
    textarea { width: 100%; height: 150px; padding: 12px; font-size: 16px; border-radius: 8px;
      border: 2px solid #334155; background: #0f172a; color: #e2e8f0; resize: vertical; }
    button { margin-top: 12px; padding: 10px 24px; font-size: 16px; border: none;
      border-radius: 8px; cursor: pointer; }
    .save-status { color: #10b981; font-size: 14px; margin-top: 8px; }
    .submit-btn { background: #a855f7; color: white; }
    .clear-btn { background: #ef4444; color: white; margin-left: 8px; }
  </style>
</head>
<body>
  <h2>Feedback Form (Auto-Saves)</h2>
  <textarea id="feedback" placeholder="Type your feedback here..."></textarea>
  <p class="save-status" id="status"></p>
  <button class="submit-btn" id="submitBtn">Submit</button>
  <button class="clear-btn" id="clearBtn">Clear Draft</button>

  <script>
    const textarea = document.getElementById("feedback");
    const status = document.getElementById("status");

    // Load saved draft
    const draft = localStorage.getItem("feedbackDraft");
    if (draft) {
      textarea.value = draft;
      status.textContent = "Draft restored from last session.";
    }

    // Auto-save as user types
    textarea.addEventListener("input", function() {
      localStorage.setItem("feedbackDraft", textarea.value);
      status.textContent = "Draft saved.";
    });

    // Clear draft on submit
    document.getElementById("submitBtn").addEventListener("click", function() {
      localStorage.removeItem("feedbackDraft");
      status.textContent = "Submitted! Draft cleared.";
      textarea.value = "";
    });

    // Clear draft manually
    document.getElementById("clearBtn").addEventListener("click", function() {
      localStorage.removeItem("feedbackDraft");
      textarea.value = "";
      status.textContent = "Draft cleared.";
    });
  </script>
</body>
</html>
```

Every time the user types, the textarea content is saved to localStorage. If the user accidentally closes the tab or refreshes, the draft is restored on page load. When the form is submitted, the draft is cleared. This pattern prevents data loss and is used in many real applications.

**Output:**

```
Typing in the textarea auto-saves the draft. Refreshing the page restores the draft. Submit or Clear buttons remove the saved draft.
```

### Simple Notes App with localStorage

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Notes App</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 40px; background: #1a1a2e; color: #e2e8f0; max-width: 600px; margin: 0 auto; }
    input { width: 70%; padding: 10px; font-size: 16px; border-radius: 8px; border: 2px solid #334155; background: #0f172a; color: #e2e8f0; }
    button { padding: 10px 20px; font-size: 16px; border: none; border-radius: 8px; cursor: pointer; }
    .add-btn { background: #a855f7; color: white; }
    .note { background: #16213e; padding: 12px 16px; margin: 8px 0; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; }
    .delete-btn { background: #ef4444; color: white; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 14px; }
    .count { color: #94a3b8; margin-top: 16px; }
  </style>
</head>
<body>
  <h2>My Notes</h2>
  <div>
    <input id="noteInput" type="text" placeholder="Write a note...">
    <button class="add-btn" id="addBtn">Add</button>
  </div>
  <div id="notesList"></div>
  <p class="count" id="count"></p>

  <script>
    // Load notes from localStorage
    function loadNotes() {
      const raw = localStorage.getItem("notes");
      return raw ? JSON.parse(raw) : [];
    }

    // Save notes to localStorage
    function saveNotes(notes) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }

    // Render all notes on the page
    function renderNotes() {
      const notes = loadNotes();
      const list = document.getElementById("notesList");
      list.innerHTML = "";

      notes.forEach(function(note, index) {
        const div = document.createElement("div");
        div.classList.add("note");
        div.innerHTML = '<span>' + note + '</span>' +
          '<button class="delete-btn" data-index="' + index + '">Delete</button>';
        list.appendChild(div);
      });

      document.getElementById("count").textContent = notes.length + " note(s) saved";

      // Attach delete listeners
      list.querySelectorAll(".delete-btn").forEach(function(btn) {
        btn.addEventListener("click", function() {
          deleteNote(Number(btn.dataset.index));
        });
      });
    }

    // Add a new note
    function addNote() {
      const input = document.getElementById("noteInput");
      const text = input.value.trim();
      if (text === "") return;

      const notes = loadNotes();
      notes.push(text);
      saveNotes(notes);
      input.value = "";
      renderNotes();
    }

    // Delete a note by index
    function deleteNote(index) {
      const notes = loadNotes();
      notes.splice(index, 1);
      saveNotes(notes);
      renderNotes();
    }

    // Event listeners
    document.getElementById("addBtn").addEventListener("click", addNote);
    document.getElementById("noteInput").addEventListener("keydown", function(e) {
      if (e.key === "Enter") addNote();
    });

    // Initial render
    renderNotes();
  </script>
</body>
</html>
```

This notes app uses the full localStorage workflow: load existing notes on page start, add new notes and save them, delete notes and save the updated list. The `loadNotes` function handles the null check and JSON parsing. The `saveNotes` function handles JSON.stringify. All notes persist across page refreshes.

**Output:**

```
A working notes app where you can add and delete notes. All notes are saved to localStorage and persist across page refreshes.
```

### localStorage vs sessionStorage Comparison

```javascript
// --- localStorage: persists forever ---
localStorage.setItem("permanent", "I survive browser restarts");

// --- sessionStorage: only current tab ---
sessionStorage.setItem("temporary", "I disappear when the tab closes");

// Both have the same API
console.log(localStorage.getItem("permanent"));   // "I survive..."
console.log(sessionStorage.getItem("temporary")); // "I disappear..."

// Both store strings only
localStorage.setItem("num", 42);
console.log(typeof localStorage.getItem("num")); // "string"

sessionStorage.setItem("arr", JSON.stringify([1, 2, 3]));
const arr = JSON.parse(sessionStorage.getItem("arr"));
console.log(arr); // [1, 2, 3]

// sessionStorage is useful for:
// - Multi-step forms (save progress for THIS session only)
// - One-time notifications ("Welcome!" shown once per visit)
// - Temporary UI state (which tab is open)

// localStorage is useful for:
// - User preferences (dark mode, language)
// - Saved data (notes, to-do lists)
// - Authentication tokens (though be careful with security)

// Check storage sizes
console.log("localStorage items:", localStorage.length);
console.log("sessionStorage items:", sessionStorage.length);
```

Both localStorage and sessionStorage share the same 4-method API. The key difference is persistence: localStorage data survives forever until explicitly deleted, while sessionStorage data is cleared when the tab closes. Use localStorage for user preferences and saved data. Use sessionStorage for temporary per-session state.

**Output:**

```
I survive browser restarts
I disappear when the tab closes
string
[1, 2, 3]
localStorage items: 2
sessionStorage items: 1
```

## Common Mistakes

### Forgetting That localStorage Stores Strings Only

**Wrong:**

```
localStorage.setItem("score", 42);
const score = localStorage.getItem("score");
console.log(score + 1);    // "421" -- string concatenation!
console.log(score === 42); // false -- comparing string to number
```

No error thrown, but "421" instead of 43. The value is a string, not a number.

**Correct:**

```
localStorage.setItem("score", 42);
const score = Number(localStorage.getItem("score"));
console.log(score + 1);    // 43
console.log(score === 42); // true
```

localStorage always returns strings. If you stored a number, convert it back with `Number()` or `parseInt()`. If you stored an object or array, use `JSON.parse()`.

### Storing an Object Without JSON.stringify

**Wrong:**

```
const user = { name: "Aarav", age: 15 };
localStorage.setItem("user", user);

const saved = localStorage.getItem("user");
console.log(saved);       // "[object Object]" -- useless!
console.log(saved.name);  // undefined
```

The object is converted to the string "[object Object]" and the actual data is lost.

**Correct:**

```
const user = { name: "Aarav", age: 15 };
localStorage.setItem("user", JSON.stringify(user));

const saved = JSON.parse(localStorage.getItem("user"));
console.log(saved);       // { name: "Aarav", age: 15 }
console.log(saved.name);  // "Aarav"
```

Objects must be converted to a JSON string with `JSON.stringify()` before saving. When reading, convert back with `JSON.parse()`. Without this, JavaScript calls `.toString()` on the object, which gives the useless string `[object Object]`.

### Not Checking for null Before Using getItem

**Wrong:**

```
const tasks = JSON.parse(localStorage.getItem("tasks"));
tasks.push("New task"); // TypeError: Cannot read property 'push' of null
```

TypeError: Cannot read properties of null (reading 'push'). getItem returns null when the key does not exist, and JSON.parse(null) returns null.

**Correct:**

```
const raw = localStorage.getItem("tasks");
const tasks = raw ? JSON.parse(raw) : [];
tasks.push("New task"); // Works! Starts with empty array if nothing saved
```

Always check if `getItem` returns null before parsing. A common pattern is: `const data = raw ? JSON.parse(raw) : defaultValue`. This ensures your code works even when nothing has been saved yet.

### Using sessionStorage When You Need Persistence

**Wrong:**

```
// Saving user preference to sessionStorage
sessionStorage.setItem("theme", "dark");
// User closes the tab and reopens -- theme preference is GONE
```

No error, but the data disappears when the tab is closed. The user has to set their preference every time.

**Correct:**

```
// Use localStorage for data that should persist
localStorage.setItem("theme", "dark");
// User closes the browser and reopens -- theme preference is still there
```

sessionStorage is cleared when the tab closes. If you want data to persist across sessions (like user preferences, saved notes, or to-do lists), use localStorage instead. Use sessionStorage only for temporary data that should not survive beyond the current visit.

### Trying to Store Functions or DOM Elements

**Wrong:**

```
// Storing a function
const greet = function() { return "Hello"; };
localStorage.setItem("fn", JSON.stringify(greet));
console.log(localStorage.getItem("fn")); // undefined or empty

// Storing a DOM element
const div = document.createElement("div");
localStorage.setItem("element", JSON.stringify(div));
console.log(localStorage.getItem("element")); // {} -- empty object
```

Functions cannot be serialized to JSON. DOM elements serialize to nearly empty objects. The data is lost.

**Correct:**

```
// Store DATA, not functions or DOM elements
// Store the configuration, not the function:
localStorage.setItem("greetingType", "hello");

// Store the content, not the element:
localStorage.setItem("divContent", "This is the text inside the div");
```

JSON.stringify only works with plain data: strings, numbers, booleans, arrays, and plain objects. Functions, DOM elements, Maps, Sets, and class instances cannot be properly serialized. Store the data that those things represent instead.

## Summary

- Web Storage (localStorage and sessionStorage) lets you save key-value pairs in the browser. Both have the same API: setItem, getItem, removeItem, and clear.
- localStorage persists forever (until you delete it or the user clears browser data). sessionStorage is cleared when the tab is closed.
- Both localStorage and sessionStorage only store strings. Numbers become strings, booleans become strings, everything becomes a string.
- To store objects or arrays, use JSON.stringify() when saving and JSON.parse() when reading. This is the most important pattern for Web Storage.
- getItem returns null when a key does not exist. Always check for null before using the value, especially before calling JSON.parse.
- A safe loading pattern is: const data = raw ? JSON.parse(raw) : defaultValue. Wrap JSON.parse in try-catch for extra safety against corrupt data.
- Common uses of localStorage: saving dark mode preference, remembering a username, auto-saving form drafts, building notes/to-do apps that persist, saving game progress.
- The storage event fires in OTHER tabs (same origin) when localStorage changes. It does not fire in the tab that made the change. This enables cross-tab synchronization.
- Storage limit is approximately 5MB per origin. Do not store large files or images. Do not store sensitive data like passwords -- localStorage is not encrypted.
- sessionStorage is useful for temporary per-session data: multi-step form progress, one-time welcome messages, or temporary UI state that should reset on next visit.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/javascript/local-storage-and-session-storage/*
*Practice questions: https://learn.modernagecoders.com/resources/javascript/local-storage-and-session-storage/practice/*
