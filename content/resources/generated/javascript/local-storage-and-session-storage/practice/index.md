---
title: "Practice: Local Storage and Session Storage"
description: "50 practice problems for Local Storage and Session Storage in JavaScript"
slug: local-storage-and-session-storage-practice
canonical: https://learn.modernagecoders.com/resources/javascript/local-storage-and-session-storage/practice/
category: "JavaScript"
---
# Practice: Local Storage and Session Storage

**Total questions:** 50

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
localStorage.setItem("city", "Delhi");
console.log(localStorage.getItem("city"));
```

*Hint:* setItem saves the value, getItem retrieves it.

**Answer:** `Delhi`

`setItem` stores the key "city" with value "Delhi". `getItem` retrieves it and returns the string "Delhi".

### Q2. [Easy] What is the output?

```
localStorage.setItem("score", 95);
const score = localStorage.getItem("score");
console.log(typeof score);
console.log(score);
```

*Hint:* localStorage stores everything as strings.

**Answer:** `string`
`95`

Even though we stored the number 95, localStorage converts it to the string "95". `typeof` confirms it is a string.

### Q3. [Easy] What is the output?

```
console.log(localStorage.getItem("nonexistent"));
```

*Hint:* What does getItem return when the key does not exist?

**Answer:** `null`

When a key does not exist in localStorage, `getItem` returns `null`, not undefined or an empty string.

### Q4. [Easy] What is the output?

```
localStorage.setItem("a", "1");
localStorage.setItem("b", "2");
localStorage.setItem("c", "3");
console.log(localStorage.length);
localStorage.removeItem("b");
console.log(localStorage.length);
localStorage.clear();
console.log(localStorage.length);
```

*Hint:* length tells you how many items are stored. removeItem removes one, clear removes all.

**Answer:** `3`
`2`
`0`

After setting 3 items, length is 3. After removing "b", length is 2. After clear(), length is 0.

### Q5. [Easy] What is the output?

```
localStorage.setItem("score", 42);
const score = localStorage.getItem("score");
console.log(score + 1);
```

*Hint:* score is a string. What happens when you add 1 to a string?

**Answer:** `421`

Since localStorage returns strings, `score` is "42" (a string). Adding 1 to a string causes string concatenation: "42" + 1 = "421". To get 43, use `Number(score) + 1`.

### Q6. [Medium] What is the output?

```
const arr = [10, 20, 30];
localStorage.setItem("nums", JSON.stringify(arr));
const saved = JSON.parse(localStorage.getItem("nums"));
console.log(saved.length);
console.log(saved[1]);
console.log(Array.isArray(saved));
```

*Hint:* JSON.stringify converts the array to a string. JSON.parse converts it back.

**Answer:** `3`
`20`
`true`

The array is stored as the string "[10,20,30]". JSON.parse converts it back to a real array. It has length 3, index 1 is 20, and `Array.isArray` confirms it is a real array.

### Q7. [Medium] What is the output?

```
const user = { name: "Aarav", age: 15 };
localStorage.setItem("user", user);
console.log(localStorage.getItem("user"));
```

*Hint:* What happens when you save an object without JSON.stringify?

**Answer:** `[object Object]`

Without `JSON.stringify`, the object's `.toString()` method is called, which returns the useless string "[object Object]". The actual data (name, age) is lost. Always use `JSON.stringify` for objects.

### Q8. [Medium] What is the output?

```
localStorage.setItem("flag", "true");
const flag = localStorage.getItem("flag");

if (flag) {
  console.log("A");
}

if (flag === true) {
  console.log("B");
}

if (flag === "true") {
  console.log("C");
}
```

*Hint:* flag is the string "true", not the boolean true.

**Answer:** `A`
`C`

The string "true" is truthy, so the first if prints A. `flag === true` is false because "true" (string) is not strictly equal to true (boolean). `flag === "true"` is true because both are the same string. B is NOT printed.

### Q9. [Medium] What is the output?

```
console.log(JSON.parse(null));
```

*Hint:* What happens when you pass null to JSON.parse?

**Answer:** `null`

`JSON.parse(null)` returns `null`. This means if getItem returns null (key not found) and you pass it directly to JSON.parse, you get null. You should check for null before parsing.

### Q10. [Medium] What is the output?

```
localStorage.setItem("x", "10");
localStorage.setItem("x", "20");
console.log(localStorage.getItem("x"));
console.log(localStorage.length);
```

*Hint:* Setting the same key twice overwrites the value.

**Answer:** `20`
`1`

Setting the same key again overwrites the previous value. The key "x" now holds "20". There is still only 1 item (not 2) because the key is the same.

### Q11. [Hard] What is the output?

```
const tasks = [
  { text: "Study", done: false },
  { text: "Code", done: true }
];
localStorage.setItem("tasks", JSON.stringify(tasks));

const loaded = JSON.parse(localStorage.getItem("tasks"));
loaded.push({ text: "Read", done: false });

console.log(loaded.length);
console.log(JSON.parse(localStorage.getItem("tasks")).length);
```

*Hint:* Pushing to the loaded array does not automatically update localStorage.

**Answer:** `3`
`2`

After loading and parsing, `loaded` is a new array in memory. Pushing to it makes it length 3. But localStorage still has the original 2-item array because we did not call setItem again. You must explicitly save changes back to localStorage.

### Q12. [Hard] What is the output?

```
const raw = localStorage.getItem("missing");
const data = raw ? JSON.parse(raw) : [];
console.log(data);
console.log(data.length);
```

*Hint:* The key 'missing' does not exist. getItem returns null, which is falsy.

**Answer:** `[]`
`0`

`getItem("missing")` returns null. null is falsy, so the ternary returns the default value `[]`. data is an empty array with length 0.

### Q13. [Easy] What is the main difference between localStorage and sessionStorage?

*Hint:* Think about when the data disappears.

**Answer:** **localStorage** data persists forever until you explicitly delete it. **sessionStorage** data is cleared when the browser tab is closed. Both have the same API and same ~5MB limit.

Use localStorage for data that should survive across sessions (preferences, saved data). Use sessionStorage for temporary per-session data (form progress, temporary state).

### Q14. [Medium] Why do you need JSON.stringify and JSON.parse when working with localStorage?

*Hint:* What type of data can localStorage store?

**Answer:** localStorage can only store **strings**. Objects and arrays are not strings. `JSON.stringify()` converts objects/arrays into a JSON string for storage. `JSON.parse()` converts the JSON string back into a real JavaScript object or array when reading.

Without JSON.stringify, an object becomes "[object Object]" and its data is lost. Without JSON.parse, you get a raw JSON string instead of a usable object.

### Q15. [Hard] When does the `storage` event fire, and when does it NOT fire?

*Hint:* Think about which tab triggers the event.

**Answer:** The `storage` event fires in **other tabs** of the same origin when localStorage is changed. It does **NOT** fire in the tab that made the change. The event object contains `key`, `oldValue`, `newValue`, and `storageArea`.

This is designed for cross-tab synchronization. If Tab A changes the theme to dark, Tab B receives the storage event and can update its display. Tab A does not need the event because it already knows what it just did.

## Mixed Questions

### Q1. [Easy] What is the output?

```
localStorage.clear();
localStorage.setItem("color", "purple");
console.log(localStorage.getItem("color"));
localStorage.removeItem("color");
console.log(localStorage.getItem("color"));
```

*Hint:* removeItem deletes the key. getItem on a deleted key returns null.

**Answer:** `purple`
`null`

After setItem, getItem returns "purple". After removeItem, the key is gone, so getItem returns null.

### Q2. [Easy] What is the output?

```
localStorage.setItem("name", "Priya");
const name = localStorage.getItem("name") || "Guest";
console.log(name);

const missing = localStorage.getItem("email") || "not set";
console.log(missing);
```

*Hint:* The || operator returns the first truthy value.

**Answer:** `Priya`
`not set`

"Priya" is truthy so the || returns it. getItem("email") returns null (falsy), so the || returns the default "not set".

### Q3. [Medium] What is the output?

```
const config = { volume: 80, muted: false };
localStorage.setItem("config", JSON.stringify(config));

const loaded = JSON.parse(localStorage.getItem("config"));
console.log(loaded.volume);
console.log(loaded.muted);
console.log(typeof loaded.muted);
```

*Hint:* JSON preserves booleans and numbers correctly.

**Answer:** `80`
`false`
`boolean`

JSON.stringify preserves the structure including numbers and booleans. JSON.parse restores them to their original types. So volume is a real number (80) and muted is a real boolean (false), not strings.

### Q4. [Medium] What is the output?

```
localStorage.setItem("empty", "");
console.log(localStorage.getItem("empty"));
console.log(localStorage.getItem("empty") === null);
console.log(localStorage.getItem("empty") === "");
```

*Hint:* An empty string is a valid value, different from null.

**Answer:** `` (empty line)
`false`
`true`

An empty string is a valid value in localStorage. It is NOT the same as null. getItem returns "" (empty string), which is not null, so the null check is false and the empty string check is true.

### Q5. [Medium] What is the output?

```
localStorage.clear();
for (let i = 0; i < 3; i++) {
  localStorage.setItem("item" + i, "value" + i);
}
console.log(localStorage.length);
for (let i = 0; i < localStorage.length; i++) {
  console.log(localStorage.key(i));
}
```

*Hint:* key(index) returns the key name at that index position.

**Answer:** `3`
`item0`
`item1`
`item2`

Three items are stored with keys "item0", "item1", "item2". `localStorage.length` is 3. `localStorage.key(i)` returns the key name at each index.

### Q6. [Hard] What is the output?

```
function saveScore(name, score) {
  const raw = localStorage.getItem("scores");
  const scores = raw ? JSON.parse(raw) : {};
  scores[name] = score;
  localStorage.setItem("scores", JSON.stringify(scores));
}

localStorage.clear();
saveScore("Aarav", 95);
saveScore("Priya", 88);
saveScore("Aarav", 97);

const result = JSON.parse(localStorage.getItem("scores"));
console.log(Object.keys(result).length);
console.log(result["Aarav"]);
console.log(result["Priya"]);
```

*Hint:* Setting the same key in the object overwrites the previous value.

**Answer:** `2`
`97`
`88`

Aarav's score is set to 95, then overwritten to 97. Priya's score is 88. The final object has 2 keys. Aarav's latest score is 97.

### Q7. [Hard] What is the output?

```
const original = { a: 1, b: [2, 3] };
localStorage.setItem("data", JSON.stringify(original));

const copy = JSON.parse(localStorage.getItem("data"));
copy.b.push(4);

console.log(original.b);
console.log(copy.b);
```

*Hint:* JSON parse creates a completely new object -- it is a deep copy.

**Answer:** `[2, 3]`
`[2, 3, 4]`

JSON.stringify + JSON.parse creates a deep copy. The parsed object is completely independent of the original. Modifying `copy.b` does not affect `original.b`.

### Q8. [Hard] What is the output?

```
localStorage.clear();
localStorage.setItem("0", "zero");
localStorage.setItem("false", "nope");
localStorage.setItem("null", "nothing");

console.log(localStorage.getItem("0"));
console.log(localStorage.getItem("false"));
console.log(localStorage.getItem("null"));
console.log(localStorage.getItem(0));
```

*Hint:* Keys are always strings. The number 0 becomes the string "0".

**Answer:** `zero`
`nope`
`nothing`
`zero`

"0", "false", and "null" are all valid string keys. `getItem(0)` converts 0 to the string "0" and finds the matching key, returning "zero".

### Q9. [Hard] What is the output?

```
try {
  const result = JSON.parse("not valid json");
  console.log(result);
} catch (e) {
  console.log("Error:", e.constructor.name);
}
```

*Hint:* What happens when you try to parse invalid JSON?

**Answer:** `Error: SyntaxError`

JSON.parse throws a SyntaxError when the input is not valid JSON. This is why you should wrap JSON.parse in try-catch when loading data from localStorage, in case the data is corrupted.

### Q10. [Medium] A user stores their to-do list in sessionStorage. They close the browser tab. What happens to the data?

*Hint:* Think about the key difference between sessionStorage and localStorage.

**Answer:** The data is **permanently lost**. sessionStorage is cleared when the tab is closed. The user will have an empty to-do list when they reopen the page. For persistent data like to-do lists, localStorage should be used instead.

This is a common mistake. sessionStorage is meant for temporary data within a single browsing session. To-do lists, user preferences, and saved notes should always use localStorage.

### Q11. [Hard] Why should you NOT store passwords or sensitive tokens in localStorage?

*Hint:* Think about who can access localStorage.

**Answer:** localStorage is accessible to **any JavaScript running on the page**, including third-party scripts, browser extensions, and code injected through XSS (Cross-Site Scripting) attacks. If an attacker can run JavaScript on your page, they can read everything in localStorage. Sensitive data should be stored in httpOnly cookies (which JavaScript cannot access) or handled server-side.

localStorage has no access controls. Any script on the page can read all keys and values. For authentication tokens, httpOnly secure cookies are the safer choice.

### Q12. [Medium] What is the output?

```
localStorage.clear();
localStorage.setItem("a", "1");
localStorage.setItem("b", "2");

const allKeys = [];
for (let i = 0; i < localStorage.length; i++) {
  allKeys.push(localStorage.key(i));
}
console.log(allKeys.sort());
```

*Hint:* key(index) returns the key name at that position.

**Answer:** `["a", "b"]`

After clearing and setting two items, localStorage.length is 2. The loop collects both key names using key(). After sorting, the result is ["a", "b"].

## Multiple Choice Questions

### Q1. [Easy] What does localStorage.getItem return when the key does not exist?

**Answer:** C

**C is correct.** `getItem` returns `null` when the key does not exist. It does not return undefined, an empty string, or false.

### Q2. [Easy] How many main methods does localStorage have?

**Answer:** C

**C is correct.** localStorage has 4 methods: `setItem` (save), `getItem` (read), `removeItem` (delete one), and `clear` (delete all).

### Q3. [Easy] What data type does localStorage always store values as?

**Answer:** D

**D is correct.** localStorage stores all values as strings. Numbers, booleans, and other types are automatically converted to strings.

### Q4. [Easy] Which storage type persists after the browser is closed?

**Answer:** B

**B is correct.** localStorage persists until explicitly deleted. sessionStorage is cleared when the tab (or browser) is closed.

### Q5. [Easy] What is the approximate storage limit for localStorage per origin?

**Answer:** C

**C is correct.** localStorage has a limit of approximately 5MB per origin. This is much more than cookies (4KB) but not enough for large files.

### Q6. [Medium] What is the correct way to store an object in localStorage?

**Answer:** B

**B is correct.** You must convert the object to a JSON string using `JSON.stringify()` before storing it. Without this, the object becomes the useless string "[object Object]".

### Q7. [Medium] What does this code print? `localStorage.setItem("n", 5); console.log(typeof localStorage.getItem("n"));`

**Answer:** B

**B is correct.** Even though the number 5 was stored, localStorage converts it to the string "5". `typeof` returns "string".

### Q8. [Medium] When does the 'storage' event fire?

**Answer:** B

**B is correct.** The storage event fires in other tabs of the same origin when localStorage is changed. It does NOT fire in the tab that made the change.

### Q9. [Medium] Is sessionStorage shared between two tabs of the same website?

**Answer:** B

**B is correct.** Each tab has its own separate sessionStorage. Even if two tabs are on the same website, their sessionStorage data is independent.

### Q10. [Medium] What happens when you call localStorage.setItem with a key that already exists?

**Answer:** C

**C is correct.** Setting an existing key overwrites the previous value. There are no duplicate keys in localStorage.

### Q11. [Hard] Is localStorage data sent to the server with HTTP requests?

**Answer:** C

**C is correct.** Unlike cookies, localStorage data is never automatically sent to the server. It stays entirely in the browser. If you need to send it, you must include it in your JavaScript code manually.

### Q12. [Hard] What does JSON.parse(localStorage.getItem("noKey")) return?

**Answer:** C

**C is correct.** `getItem("noKey")` returns null. `JSON.parse(null)` returns null. It does not throw an error because null is valid JSON.

### Q13. [Hard] What is the best practice for loading data from localStorage that might not exist?

**Answer:** B

**B is correct.** Check if getItem returns null (key does not exist), then parse, and use try-catch in case the stored data is corrupt or not valid JSON. This is the safest pattern.

### Q14. [Hard] Why should you NOT store sensitive data in localStorage?

**Answer:** B

**B is correct.** localStorage has no encryption and any JavaScript running on the page (including malicious scripts from XSS attacks) can read all stored data. Sensitive data should use httpOnly cookies or server-side storage.

### Q15. [Medium] What is the correct way to read an array stored in localStorage?

**Answer:** B

**B is correct.** getItem returns the JSON string. `JSON.parse` converts it back into a real JavaScript array.

## Coding Challenges

### Challenge 1. Save and Load Theme Preference

**Difficulty:** Easy

Write JavaScript that saves a user's theme preference ("dark" or "light") to localStorage when a button is clicked. On page load, check if a preference is saved and apply it by adding or removing a 'dark-mode' class on the body.

**Constraints:**

- Use localStorage.setItem and getItem. Check for null on load.

**Sample input:**

```
User clicks the toggle button
```

**Sample output:**

```
Theme toggled to: dark
(Page refresh)
Theme loaded: dark
```

**Solution:**

```javascript
// On page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  console.log("Theme loaded: dark");
} else {
  console.log("Theme loaded: light");
}

// Toggle button
document.getElementById("themeToggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  console.log("Theme toggled to:", isDark ? "dark" : "light");
});
```

### Challenge 2. Remember Username

**Difficulty:** Easy

Create a form with a username input and a "Remember Me" checkbox. If the checkbox is checked when the form is submitted, save the username to localStorage. On page load, if a username is saved, pre-fill the input field.

**Constraints:**

- Use a checkbox to decide whether to save. Clear saved username if checkbox is unchecked.

**Sample input:**

```
Username: Aarav, checkbox checked
```

**Sample output:**

```
(Page refresh)
Username field shows: Aarav
```

**Solution:**

```javascript
const usernameInput = document.getElementById("username");
const rememberCheckbox = document.getElementById("remember");
const form = document.getElementById("loginForm");

// Load saved username
const savedUsername = localStorage.getItem("rememberedUser");
if (savedUsername) {
  usernameInput.value = savedUsername;
  rememberCheckbox.checked = true;
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  if (rememberCheckbox.checked) {
    localStorage.setItem("rememberedUser", usernameInput.value);
    console.log("Username saved:", usernameInput.value);
  } else {
    localStorage.removeItem("rememberedUser");
    console.log("Username cleared from storage");
  }
});
```

### Challenge 3. Visit Counter

**Difficulty:** Easy

Write JavaScript that counts how many times the user has visited the page. Store the count in localStorage and display it. The count should increase by 1 every time the page loads.

**Constraints:**

- Use Number() to convert the stored string to a number.

**Sample input:**

```
(First visit, second visit, third visit)
```

**Sample output:**

```
Visit 1
Visit 2
Visit 3
```

**Solution:**

```javascript
const raw = localStorage.getItem("visitCount");
let count = raw ? Number(raw) : 0;
count++;
localStorage.setItem("visitCount", count);

console.log("Visit " + count);
document.getElementById("counter").textContent = "You have visited this page " + count + " time(s).";
```

### Challenge 4. Persistent Notes App

**Difficulty:** Medium

Build a notes app where the user can add, delete, and view notes. Store all notes in localStorage as an array of objects with text and timestamp. Notes should persist across page refreshes.

**Constraints:**

- Use JSON.stringify/parse. Handle empty storage gracefully. Each note should have text and date.

**Sample input:**

```
Add: "Learn localStorage", Add: "Build to-do app"
```

**Sample output:**

```
Notes:
1. Learn localStorage (2026-04-09)
2. Build to-do app (2026-04-09)
2 notes saved.
```

**Solution:**

```javascript
function loadNotes() {
  const raw = localStorage.getItem("notes");
  return raw ? JSON.parse(raw) : [];
}

function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function addNote(text) {
  const notes = loadNotes();
  notes.push({ text: text, date: new Date().toISOString().split("T")[0] });
  saveNotes(notes);
  renderNotes();
}

function deleteNote(index) {
  const notes = loadNotes();
  notes.splice(index, 1);
  saveNotes(notes);
  renderNotes();
}

function renderNotes() {
  const notes = loadNotes();
  const list = document.getElementById("notesList");
  list.innerHTML = "";
  notes.forEach(function(note, i) {
    const div = document.createElement("div");
    div.innerHTML = (i + 1) + ". " + note.text + " (" + note.date + ") ";
    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.addEventListener("click", function() { deleteNote(i); });
    div.appendChild(btn);
    list.appendChild(div);
  });
  console.log(notes.length + " notes saved.");
}

renderNotes();
```

### Challenge 5. Shopping Cart with localStorage

**Difficulty:** Medium

Build a simple shopping cart that saves items to localStorage. Each item has a name and quantity. Implement addItem, removeItem, updateQuantity, and getTotal functions. The cart should persist across page refreshes.

**Constraints:**

- Use an array of objects in localStorage. Handle duplicates by updating quantity.

**Sample input:**

```
Add Notebook x2, Add Pen x5, Update Notebook to x3
```

**Sample output:**

```
Cart: Notebook (3), Pen (5)
Total items: 8
```

**Solution:**

```javascript
function loadCart() {
  const raw = localStorage.getItem("cart");
  return raw ? JSON.parse(raw) : [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addItem(name, qty) {
  const cart = loadCart();
  const existing = cart.find(function(item) { return item.name === name; });
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({ name: name, quantity: qty });
  }
  saveCart(cart);
}

function removeItem(name) {
  let cart = loadCart();
  cart = cart.filter(function(item) { return item.name !== name; });
  saveCart(cart);
}

function getTotal() {
  const cart = loadCart();
  return cart.reduce(function(sum, item) { return sum + item.quantity; }, 0);
}

// Test
localStorage.clear();
addItem("Notebook", 2);
addItem("Pen", 5);
addItem("Notebook", 1);
console.log("Cart:", loadCart());
console.log("Total items:", getTotal());
```

### Challenge 6. Auto-Save Form with Multiple Fields

**Difficulty:** Medium

Create a registration form with name, email, and message fields. Auto-save all field values to localStorage as the user types. Restore all fields on page load. Clear saved data when the form is submitted.

**Constraints:**

- Save all fields as one object in localStorage. Use the input event for auto-save.

**Sample input:**

```
Type in name, email, and message fields
```

**Sample output:**

```
(Page refresh)
All fields restored from saved draft.
```

**Solution:**

```javascript
const fields = ["name", "email", "message"];

// Load saved draft
const raw = localStorage.getItem("formDraft");
const draft = raw ? JSON.parse(raw) : {};
fields.forEach(function(field) {
  const el = document.getElementById(field);
  if (draft[field]) el.value = draft[field];
  
  el.addEventListener("input", function() {
    const current = raw ? JSON.parse(localStorage.getItem("formDraft")) : {};
    current[field] = el.value;
    localStorage.setItem("formDraft", JSON.stringify(current));
    console.log("Draft saved");
  });
});

document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();
  localStorage.removeItem("formDraft");
  console.log("Form submitted, draft cleared.");
});
```

### Challenge 7. High Score Board

**Difficulty:** Hard

Build a high score board that stores the top 5 scores in localStorage. Each score has a player name, score, and date. When a new score is added, insert it in the correct position and keep only the top 5. Display the leaderboard.

**Constraints:**

- Sort by score descending. Keep only top 5. Use JSON.stringify/parse.

**Sample input:**

```
Aarav: 950, Priya: 1200, Rohan: 800, Meera: 1100, Kavya: 1050, Arjun: 1150
```

**Sample output:**

```
Leaderboard:
1. Priya - 1200 (2026-04-09)
2. Arjun - 1150 (2026-04-09)
3. Meera - 1100 (2026-04-09)
4. Kavya - 1050 (2026-04-09)
5. Aarav - 950 (2026-04-09)
```

**Solution:**

```javascript
function loadScores() {
  const raw = localStorage.getItem("highScores");
  return raw ? JSON.parse(raw) : [];
}

function addScore(name, score) {
  const scores = loadScores();
  scores.push({
    name: name,
    score: score,
    date: new Date().toISOString().split("T")[0]
  });
  scores.sort(function(a, b) { return b.score - a.score; });
  const top5 = scores.slice(0, 5);
  localStorage.setItem("highScores", JSON.stringify(top5));
  return top5;
}

function displayScores() {
  const scores = loadScores();
  console.log("Leaderboard:");
  scores.forEach(function(entry, i) {
    console.log((i + 1) + ". " + entry.name + " - " + entry.score + " (" + entry.date + ")");
  });
}

localStorage.clear();
addScore("Aarav", 950);
addScore("Priya", 1200);
addScore("Rohan", 800);
addScore("Meera", 1100);
addScore("Kavya", 1050);
addScore("Arjun", 1150);
displayScores();
```

### Challenge 8. Storage Size Calculator

**Difficulty:** Hard

Write a function that calculates how much localStorage space is being used (in KB). Also write a function that estimates how much space is remaining. Display a usage bar showing percentage used.

**Constraints:**

- Iterate over all keys using localStorage.length and key(). Calculate size based on string length.

**Sample input:**

```
(Run with some data in localStorage)
```

**Sample output:**

```
Used: 2.45 KB
Estimated remaining: ~5117.55 KB
Usage: 0.05%
```

**Solution:**

```javascript
function getStorageUsed() {
  let total = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    total += key.length + value.length;
  }
  return total * 2; // UTF-16 uses 2 bytes per character
}

function getStorageInfo() {
  const used = getStorageUsed();
  const usedKB = (used / 1024).toFixed(2);
  const limit = 5 * 1024 * 1024; // ~5MB
  const remainingKB = ((limit - used) / 1024).toFixed(2);
  const percentage = ((used / limit) * 100).toFixed(2);

  console.log("Used: " + usedKB + " KB");
  console.log("Estimated remaining: ~" + remainingKB + " KB");
  console.log("Usage: " + percentage + "%");
  console.log("Keys stored: " + localStorage.length);
  return { usedKB: usedKB, remainingKB: remainingKB, percentage: percentage };
}

getStorageInfo();
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/local-storage-and-session-storage/*
