---
title: "Practice: Forms and Input Validation"
description: "58 practice problems for Forms and Input Validation in JavaScript"
slug: forms-and-validation-practice
canonical: https://learn.modernagecoders.com/resources/javascript/forms-and-validation/practice/
category: "JavaScript"
---
# Practice: Forms and Input Validation

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] What happens when the form is submitted with an empty input?

```

  
  Submit

document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    console.log("Name is required");
  } else {
    console.log("Hello, " + name);
  }
});

```

*Hint:* The input is empty, so value.trim() is an empty string.

**Answer:** `Name is required`

The input value is empty. `.trim()` removes whitespace (still empty). The if-check catches the empty string and logs the error message.

### Q2. [Easy] What is logged?

```

const regex = /^\d{10}$/;
console.log(regex.test("9876543210"));
console.log(regex.test("12345"));
console.log(regex.test("98765432101"));
console.log(regex.test("abcdefghij"));

```

*Hint:* \d{10} means exactly 10 digits. ^ and $ mean start and end of string.

**Answer:** `true`
`false`
`false`
`false`

"9876543210" is exactly 10 digits -- true. "12345" is only 5 digits -- false. "98765432101" is 11 digits -- false. "abcdefghij" has no digits -- false.

### Q3. [Easy] What is logged?

```

const cb = document.getElementById("agree");
console.log(cb.checked);
console.log(typeof cb.checked);
cb.checked = true;
console.log(cb.checked);

```

*Hint:* .checked is a boolean property on checkboxes.

**Answer:** `false`
`boolean`
`true`

The checkbox is unchecked by default, so `checked` is false (a boolean). After setting it to true, the checkbox becomes checked.

### Q4. [Easy] What is logged?

```

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test("aarav@gmail.com"));
console.log(emailRegex.test("priya@school"));
console.log(emailRegex.test("@gmail.com"));
console.log(emailRegex.test("rohan@mail.co.in"));

```

*Hint:* The regex requires: something@something.something

**Answer:** `true`
`false`
`false`
`true`

"aarav@gmail.com" matches the pattern. "priya@school" has no dot after @. "@gmail.com" has nothing before @. "rohan@mail.co.in" has valid characters on both sides.

### Q5. [Medium] What is logged?

```

  Select
  Delhi
  Mumbai

const select = document.getElementById("city");
console.log(select.value);
console.log(select.selectedIndex);
console.log(select.options[select.selectedIndex].text);

```

*Hint:* The 'selected' attribute makes Mumbai the initial selection.

**Answer:** `mumbai`
`2`
`Mumbai`

Mumbai has the `selected` attribute, so it is the initial selection. Its value is "mumbai", its index is 2 (0-based), and its display text is "Mumbai".

### Q6. [Medium] What is logged?

```

const selected = document.querySelector('input[name="color"]:checked');
console.log(selected.value);

const all = document.querySelectorAll('input[name="color"]');
console.log(all.length);

```

*Hint:* :checked selects the checked radio button. The blue one has 'checked'.

**Answer:** `blue`
`3`

The blue radio button has the `checked` attribute, so `querySelector(':checked')` returns it with value "blue". There are 3 radio buttons in total.

### Q7. [Medium] What is logged?

```

const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
console.log(passRegex.test("Aarav123"));
console.log(passRegex.test("aarav123"));
console.log(passRegex.test("AARAV123"));
console.log(passRegex.test("Aa1"));
console.log(passRegex.test("Aarav@123!"));

```

*Hint:* Requires: 8+ chars, at least one lowercase, one uppercase, one digit.

**Answer:** `true`
`false`
`false`
`false`
`true`

"Aarav123": has all three + 8 chars = true. "aarav123": no uppercase = false. "AARAV123": no lowercase = false. "Aa1": only 3 chars = false. "Aarav@123!": has all three + 10 chars = true.

### Q8. [Medium] What is logged?

```

const ageInput = document.getElementById("age");
console.log(ageInput.value);
console.log(typeof ageInput.value);
console.log(ageInput.value + 5);
console.log(Number(ageInput.value) + 5);

```

*Hint:* Input .value is always a string, even for type='number'.

**Answer:** `25`
`string`
`255`
`30`

Even with type="number", `.value` returns a string. "25" + 5 is string concatenation: "255". `Number("25") + 5` converts to number first: 30.

### Q9. [Hard] What is the result?

```

  
  
  

const fields = ["a", "b", "c"];
fields.forEach(function(id) {
  const val = document.getElementById(id).value.trim();
  console.log(id + ": " + (val === "" ? "empty" : "filled") + " (" + JSON.stringify(val) + ")");
});

```

*Hint:* trim() removes whitespace. A value of '  ' becomes '' after trim.

**Answer:** `a: filled ("Hello")`
`b: empty ("")`
`c: empty ("")`

Field a: "Hello" trimmed is "Hello" -- filled. Field b: "  " trimmed is "" -- empty. Field c: "" trimmed is "" -- empty. The `trim()` catches whitespace-only inputs.

### Q10. [Hard] What does this password strength function return?

```

function strength(p) {
  let s = 0;
  if (p.length >= 8) s++;
  if (/[a-z]/.test(p)) s++;
  if (/[A-Z]/.test(p)) s++;
  if (/\d/.test(p)) s++;
  if (/[^A-Za-z0-9]/.test(p)) s++;
  return s;
}

console.log(strength(""));
console.log(strength("hello"));
console.log(strength("Hello123"));
console.log(strength("Hello@123"));
console.log(strength("Aa1!"));

```

*Hint:* Each criteria adds 1 to the score. Check: length >= 8, lowercase, uppercase, digit, special char.

**Answer:** `0`
`1`
`4`
`5`
`4`

"": 0 criteria. "hello": lowercase only (1). "Hello123" (8 chars): length>=8 + lowercase + uppercase + digit = 4. "Hello@123" (9 chars): all 5 criteria = 5. "Aa1!" (4 chars): lowercase + uppercase + digit + special but not length >= 8 = 4.

### Q11. [Hard] What does the button state become?

```

Submit

const name = document.getElementById("name");
const email = document.getElementById("email");
const btn = document.getElementById("btn");

function check() {
  const nameOk = name.value.trim().length >= 2;
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  btn.disabled = !(nameOk && emailOk);
}

name.addEventListener("input", check);
email.addEventListener("input", check);

```

User types 'Aa' in name and 'a@b.c' in email.

*Hint:* Both conditions must be true for the button to be enabled.

**Answer:** The button becomes enabled (not disabled). 'Aa' is 2+ characters and 'a@b.c' matches the email regex.

nameOk: "Aa".length >= 2 is true. emailOk: "a@b.c" matches the email pattern. Both are true, so `btn.disabled = !(true && true) = false`. The button is enabled.

### Q12. [Easy] What is logged?

```

const nameRegex = /^[A-Za-z\s]+$/;
console.log(nameRegex.test("Aarav"));
console.log(nameRegex.test("Aarav Sharma"));
console.log(nameRegex.test("Aarav123"));
console.log(nameRegex.test(""));

```

*Hint:* The regex allows only letters and spaces. + means one or more.

**Answer:** `true`
`true`
`false`
`false`

"Aarav": letters only = true. "Aarav Sharma": letters and space = true. "Aarav123": has digits = false. "": empty, + requires at least one character = false.

### Q13. [Medium] What is logged?

```

const pw = document.getElementById("pw").value;
console.log(pw.length >= 8);
console.log(/[a-z]/.test(pw));
console.log(/[A-Z]/.test(pw));
console.log(/\d/.test(pw));
console.log(/[^A-Za-z0-9]/.test(pw));

```

*Hint:* Check each condition individually against 'Hello@World1'.

**Answer:** `true`
`true`
`true`
`true`
`true`

"Hello@World1" is 12 chars (>=8: true), has lowercase (true), has uppercase (true), has digit '1' (true), has special char '@' (true). All 5 conditions pass.

### Q14. [Medium] What is the state of the checkboxes?

```

const a = document.getElementById("a");
const b = document.getElementById("b");
console.log(a.checked);
console.log(b.checked);
a.checked = false;
b.checked = true;
console.log(a.checked);
console.log(b.checked);

```

*Hint:* The checked property can be read and set programmatically.

**Answer:** `true`
`false`
`false`
`true`

Initially a is checked (true), b is unchecked (false). After toggling: a becomes unchecked (false), b becomes checked (true).

### Q15. [Hard] What is logged?

```

  
  
  

const inputs = document.querySelectorAll('input[name="field"]');
const values = Array.from(inputs).map(function(i) { return i.value; });
console.log(values);
console.log(values.join(", "));

```

*Hint:* Multiple inputs can share the same name. querySelectorAll gets them all.

**Answer:** `["one", "two", "three"]`
`one, two, three`

Three inputs share the name 'field'. querySelectorAll finds all three. map extracts their values into an array. join creates a comma-separated string.

### Q16. [Easy] What is logged?

```

const input = document.getElementById("name");
console.log(input.value);
console.log(input.placeholder);
console.log(input.value === "");

```

*Hint:* value and placeholder are different properties. An empty value does not show the placeholder in JS.

**Answer:** `` (empty string)
`Enter name`
`true`

The value is empty (no text typed). The placeholder is "Enter name" (displayed in the UI but not in .value). The empty check returns true.

## Mixed Questions

### Q1. [Easy] What is logged?

```

const val = document.getElementById("field").value;
console.log(val);
console.log(val.trim());
console.log(val.trim().length);

```

*Hint:* trim() removes leading and trailing whitespace.

**Answer:** `  Hello World  `
`Hello World`
`11`

The raw value includes spaces. `trim()` removes leading and trailing spaces but not spaces between words. "Hello World" is 11 characters.

### Q2. [Medium] What happens?

```

  
  Go

const form = document.getElementById("form");
const input = document.getElementById("name");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const value = input.value.trim();
  if (value.length < 3) {
    msg.textContent = "Too short (min 3 chars)";
    msg.style.color = "red";
    input.style.borderColor = "red";
    input.focus();
  } else if (value.length > 20) {
    msg.textContent = "Too long (max 20 chars)";
    msg.style.color = "red";
  } else {
    msg.textContent = "Welcome, " + value + "!";
    msg.style.color = "green";
    input.style.borderColor = "green";
  }
});

```

User types 'Hi' and submits.

*Hint:* 'Hi' has only 2 characters, which is less than the minimum of 3.

**Answer:** The message shows "Too short (min 3 chars)" in red, the input border turns red, and the input gains focus.

"Hi" trimmed is 2 characters, which is less than 3. The error message appears, the border turns red, and `input.focus()` puts the cursor back in the input for the user to fix the value.

### Q3. [Easy] Why should you always validate form data on the server, even if you validate on the client?

*Hint:* Think about what a tech-savvy user could do.

**Answer:** Client-side validation runs in the browser, which the user controls. They can disable JavaScript, modify the HTML, or send requests directly to the server using tools like Postman or cURL. Server-side validation is the only truly reliable check because the server is under your control.

Client-side validation is for user experience -- giving instant feedback. Server-side validation is for security -- ensuring only valid data is processed. Both are needed.

### Q4. [Medium] What does the `?=` mean in the regex `/^(?=.*[A-Z])(?=.*\d).{8,}$/`?

*Hint:* These are called lookaheads.

**Answer:** `(?=...)` is a **positive lookahead**. It checks if the pattern exists somewhere in the string without consuming characters. `(?=.*[A-Z])` means 'somewhere in the string there must be an uppercase letter'. `(?=.*\d)` means 'somewhere there must be a digit'. `.{8,}` means 'total length must be 8 or more characters'.

Lookaheads let you enforce multiple conditions on the same string. Without them, you would need to check the conditions in order, which would not work for 'at least one of each anywhere in the string'.

### Q5. [Medium] What is logged?

```

const checked = document.querySelectorAll('input[name="lang"]:checked');
const values = Array.from(checked).map(function(cb) { return cb.value; });
console.log(values);
console.log(values.join(", "));

```

*Hint:* Only checkboxes with the 'checked' attribute are initially checked.

**Answer:** `["html", "css"]`
`html, css`

Only the first two checkboxes have the `checked` attribute. `querySelectorAll(':checked')` finds them. We convert to an array and map to get the values. `join(", ")` creates a comma-separated string.

### Q6. [Hard] What is logged when the user presses Enter in the input (the input is inside the form)?

```

  

document.getElementById("search").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    console.log("Keydown Enter");
  }
});

document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("Form submitted");
});

```

*Hint:* Pressing Enter in a form input triggers both keydown and form submit.

**Answer:** `Keydown Enter`
`Form submitted`

Pressing Enter in an input inside a form triggers the keydown event first ("Keydown Enter"), then the form's submit event ("Form submitted"). The keydown fires before the submit.

### Q7. [Hard] What is logged?

```

const tests = [
  { input: "aarav@gmail.com", expected: true },
  { input: "@gmail.com", expected: false },
  { input: "aarav@", expected: false },
  { input: "aarav@g.c", expected: true },
  { input: "a a@b.c", expected: false }
];

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passed = 0;

tests.forEach(function(t) {
  const result = regex.test(t.input);
  if (result === t.expected) passed++;
});

console.log(passed + " / " + tests.length + " tests passed");

```

*Hint:* Check each input against the regex and compare to expected.

**Answer:** `5 / 5 tests passed`

All 5 test cases match their expected results: aarav@gmail.com = true, @gmail.com = false (nothing before @), aarav@ = false (nothing after @), aarav@g.c = true (minimal valid), a a@b.c = false (space is not allowed by [^\s@]).

### Q8. [Medium] What is the value of the select after this code?

```

  Apple
  Banana
  Cherry

const select = document.getElementById("fruit");
select.value = "cherry";
console.log(select.value);
console.log(select.selectedIndex);

```

*Hint:* Setting .value on a select changes the selected option.

**Answer:** `cherry`
`2`

Setting `select.value = "cherry"` selects the Cherry option. Its value is "cherry" and its index is 2 (0-based: apple=0, banana=1, cherry=2).

### Q9. [Easy] What is logged?

```

const val = document.getElementById("field").value;
console.log(val.length);
console.log(val.trim().length);

```

*Hint:* trim() removes leading and trailing spaces.

**Answer:** `9`
`5`

The raw value "  Aarav  " is 9 characters (2 spaces + 5 letters + 2 spaces). After trim(), "Aarav" is 5 characters.

### Q10. [Medium] What is logged?

```

  
  
  

const inputs = document.querySelectorAll("#form input");
let empty = 0;
inputs.forEach(function(input) {
  if (input.value.trim() === "") empty++;
});
console.log("Empty fields: " + empty);

```

*Hint:* Loop through all inputs and count the empty ones.

**Answer:** `Empty fields: 1`

Three inputs: "hello" (not empty), "" (empty), "world" (not empty). Only one field is empty.

### Q11. [Hard] What is logged?

```

function validateAge(val) {
  const age = Number(val);
  if (isNaN(age)) return "Not a number";
  if (age < 0) return "Too young";
  if (age > 120) return "Too old";
  return "Valid: " + age;
}

console.log(validateAge("25"));
console.log(validateAge(""));
console.log(validateAge("abc"));
console.log(validateAge("-5"));
console.log(validateAge("150"));

```

*Hint:* Number('') is 0 (not NaN). Number('abc') is NaN.

**Answer:** `Valid: 25`
`Valid: 0`
`Not a number`
`Too young`
`Too old`

"25" becomes 25 (valid). "" becomes 0 (valid, 0 is >= 0 and <= 120). "abc" becomes NaN (not a number). "-5" becomes -5 (too young). "150" becomes 150 (too old).

### Q12. [Easy] What is logged?

```

const input = document.getElementById("name");
console.log(input.value);
input.value = "";
console.log(input.value);
console.log(input.value === "");

```

*Hint:* Setting value to '' clears the input.

**Answer:** `Priya`
`` (empty string)
`true`

Initially the value is "Priya". After setting to empty string, the input is cleared. Comparing to empty string returns true.

### Q13. [Medium] What does the button do?

```

Show

document.getElementById("toggle").addEventListener("click", function() {
  const pw = document.getElementById("pw");
  if (pw.type === "password") {
    pw.type = "text";
    this.textContent = "Hide";
  } else {
    pw.type = "password";
    this.textContent = "Show";
  }
});

```

*Hint:* Changing input type between 'password' and 'text' toggles visibility.

**Answer:** Clicking the button toggles the password field between hidden (dots) and visible (plain text). The button text switches between 'Show' and 'Hide'.

When type is 'password', characters are hidden. Changing type to 'text' reveals them. The button text updates to reflect the current state. This is a common 'show/hide password' feature.

### Q14. [Hard] What is the difference between the `required` HTML attribute and JavaScript validation?

*Hint:* Think about browser support and customization.

**Answer:** The `required` HTML attribute uses the browser's built-in validation. It shows a default browser tooltip when the field is empty and the form is submitted. JavaScript validation gives you full control: custom error messages, real-time feedback as the user types, complex rules (like regex patterns, cross-field comparisons), and consistent styling across browsers. Most production forms use both: HTML attributes as a baseline and JavaScript for enhanced UX.

HTML validation is simpler but less flexible. JavaScript validation is more powerful. Using both provides graceful degradation -- the form still validates even if JavaScript fails.

### Q15. [Hard] What is logged?

```

const patterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\d{10}$/,
  name: /^[A-Za-z\s]{2,50}$/
};

function validate(type, value) {
  return patterns[type] ? patterns[type].test(value) : false;
}

console.log(validate("email", "a@b.c"));
console.log(validate("phone", "1234567890"));
console.log(validate("name", "A"));
console.log(validate("zip", "12345"));

```

*Hint:* The 'zip' pattern does not exist in the patterns object.

**Answer:** `true`
`true`
`false`
`false`

"a@b.c" matches the email pattern. "1234567890" is 10 digits (matches phone). "A" is only 1 character (name needs 2-50, so false). "zip" is not in the patterns object, so patterns["zip"] is undefined, returning false.

## Multiple Choice Questions

### Q1. [Easy] What is the first thing you should do in a form submit handler?

**Answer:** B

**B is correct.** `e.preventDefault()` must be called first to prevent the page from reloading. After that, you can read values, validate, and process the form.

### Q2. [Easy] What type does `input.value` return for a number input?

**Answer:** B

**B is correct.** `.value` always returns a string, even for `type="number"` inputs. Use `Number()` or `parseInt()` to convert.

### Q3. [Easy] How do you check if a checkbox is checked?

**Answer:** B

**B is correct.** `.checked` is a boolean property (true/false) on checkbox and radio input elements. `.value` returns the value attribute, not whether it is checked.

### Q4. [Easy] Which method tests if a string matches a regular expression?

**Answer:** B

**B is correct.** `regex.test(string)` returns true or false. `string.match(regex)` also works but returns the match result or null, not a boolean.

### Q5. [Medium] What does `value.trim()` do?

**Answer:** B

**B is correct.** `trim()` removes whitespace from the start and end of a string. Spaces between words are preserved. "  hello world  " becomes "hello world".

### Q6. [Medium] Which event is best for real-time input validation?

**Answer:** C

**C is correct.** The `input` event fires on every change (keystroke, paste, delete). `change` only fires when the element loses focus. `input` is ideal for real-time feedback as the user types.

### Q7. [Medium] How do you get the selected radio button's value from a group?

**Answer:** B

**B is correct.** `querySelector('input[name="group"]:checked')` selects the checked radio button from the group. Remember to check for null if no option is selected.

### Q8. [Medium] What regex pattern matches exactly 10 digits?

**Answer:** B

**B is correct.** `^\d{10}$` anchors the match to the full string (^ start, $ end) and requires exactly 10 digits. Without ^ and $, /\d{10}/ would match 10 digits anywhere in a longer string.

### Q9. [Hard] What does `(?=.*[A-Z])` mean in a regex?

**Answer:** C

**C is correct.** `(?=.*[A-Z])` is a positive lookahead. It asserts that somewhere in the string there is at least one uppercase letter, without consuming any characters. It does not specify where the letter must be.

### Q10. [Hard] Why is it bad practice to use `alert()` for form validation errors?

**Answer:** B

**B is correct.** `alert()` blocks the entire page (user cannot interact until they dismiss it), only shows one message at a time, and breaks the user's flow. Inline error messages below inputs are the standard approach.

### Q11. [Easy] What does `input.focus()` do?

**Answer:** B

**B is correct.** `focus()` places the cursor inside the input element, as if the user clicked on it. This is useful for directing the user to the first invalid field.

### Q12. [Medium] How do you disable a button with JavaScript?

**Answer:** A

**A is correct.** Setting `button.disabled = true` disables the button. It cannot be clicked and appears grayed out. Set to `false` to re-enable it.

### Q13. [Hard] When does the `change` event fire on a text input?

**Answer:** B

**B is correct.** For text inputs, `change` fires when the value has changed AND the element loses focus (blur). For checkboxes, radio buttons, and selects, it fires immediately on state change.

### Q14. [Hard] What is the correct way to check if a select dropdown has a value selected?

**Answer:** B

**B is correct.** If the first option has `value=""` (like a placeholder), then `select.value !== ""` correctly checks if a real option is selected. `.checked` and `.selected` are not properties of select elements.

### Q15. [Easy] What does `input.value = ''` do?

**Answer:** B

**B is correct.** Setting `value` to an empty string clears whatever the user typed. The input remains visible and functional.

### Q16. [Medium] What does the regex `/^\d{10}$/` match?

**Answer:** B

**B is correct.** `^` anchors to the start, `$` anchors to the end, `\d{10}` means exactly 10 digits. The entire string must be exactly 10 digits with nothing before or after.

### Q17. [Medium] How do you programmatically submit a form with JavaScript?

**Answer:** A

**A is correct.** `form.submit()` submits the form programmatically. Note: this does NOT fire the submit event or run addEventListener handlers. It directly submits.

### Q18. [Hard] What is the default value of an unchecked checkbox's `.value` property?

**Answer:** C

**C is correct.** If no `value` attribute is set on a checkbox, the default value is the string "on". The `.checked` property (boolean) tells you if it is checked; `.value` is always "on" regardless of checked state.

## Coding Challenges

### Challenge 1. Simple Email Validator

**Difficulty:** Easy

Create an email input and a paragraph below it. As the user types, show 'Valid email' (green) or 'Invalid email' (red) using the input event and a regex pattern.

**Constraints:**

- Use the input event and regex.test(). Use CSS classes for colors, not inline styles.

**Sample input:**

```
Type 'aarav@gmail.com'
```

**Sample output:**

```
'Valid email' appears in green below the input.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head><style>.valid{color:green;}.invalid{color:red;}</style></head>
<body>
  <input type="text" id="email" placeholder="Enter email">
  <p id="msg"></p>
  <script>
    const email = document.getElementById("email");
    const msg = document.getElementById("msg");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    email.addEventListener("input", function() {
      const val = email.value.trim();
      if (val === "") { msg.textContent = ""; msg.className = ""; }
      else if (regex.test(val)) { msg.textContent = "Valid email"; msg.className = "valid"; }
      else { msg.textContent = "Invalid email"; msg.className = "invalid"; }
    });
  </script>
</body>
</html>
```

### Challenge 2. Login Form with Validation

**Difficulty:** Easy

Build a login form with email and password fields. On submit: show 'Email required' if email is empty, 'Invalid email' if format is wrong, 'Password required' if empty, 'Password too short' if < 6 chars. Show errors below each field.

**Constraints:**

- Use e.preventDefault(). Create error message elements dynamically or use pre-existing divs.

**Sample input:**

```
Submit with empty email
```

**Sample output:**

```
'Email required' appears below the email field in red.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head><style>.error{color:red;font-size:13px;} input{display:block;margin:8px 0;padding:8px;width:250px;}</style></head>
<body>
  <form id="form">
    <input type="text" id="email" placeholder="Email">
    <div class="error" id="email-err"></div>
    <input type="password" id="pass" placeholder="Password">
    <div class="error" id="pass-err"></div>
    <button type="submit">Login</button>
  </form>
  <script>
    document.getElementById("form").addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const pass = document.getElementById("pass").value;
      const emailErr = document.getElementById("email-err");
      const passErr = document.getElementById("pass-err");
      emailErr.textContent = "";
      passErr.textContent = "";
      let valid = true;
      if (email === "") { emailErr.textContent = "Email required"; valid = false; }
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { emailErr.textContent = "Invalid email"; valid = false; }
      if (pass === "") { passErr.textContent = "Password required"; valid = false; }
      else if (pass.length < 6) { passErr.textContent = "Password too short"; valid = false; }
      if (valid) alert("Login successful!");
    });
  </script>
</body>
</html>
```

### Challenge 3. Phone Number Formatter

**Difficulty:** Medium

Create a phone input that only accepts digits (filter out non-digits in real time). As the user types, format the display as XXX-XXX-XXXX. Limit to 10 digits. Show 'Valid' when exactly 10 digits are entered.

**Constraints:**

- Use the input event. Replace non-digits with regex. Format the value programmatically.

**Sample input:**

```
Type '9876543210'
```

**Sample output:**

```
Input shows '987-654-3210'. Message shows 'Valid'.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<body>
  <input type="text" id="phone" placeholder="Phone number" maxlength="12">
  <p id="status"></p>
  <script>
    const phone = document.getElementById("phone");
    const status = document.getElementById("status");
    phone.addEventListener("input", function() {
      let digits = phone.value.replace(/\D/g, "").slice(0, 10);
      let formatted = digits;
      if (digits.length > 6) formatted = digits.slice(0,3) + "-" + digits.slice(3,6) + "-" + digits.slice(6);
      else if (digits.length > 3) formatted = digits.slice(0,3) + "-" + digits.slice(3);
      phone.value = formatted;
      if (digits.length === 10) { status.textContent = "Valid"; status.style.color = "green"; }
      else { status.textContent = digits.length + "/10 digits"; status.style.color = "red"; }
    });
  </script>
</body>
</html>
```

### Challenge 4. Registration Form with All Input Types

**Difficulty:** Medium

Build a registration form with: text input (name), email input, password input, radio buttons (gender: Male/Female/Other), checkbox (agree to terms), and select (city). Validate all fields on submit. Show all errors at once. If valid, show a summary of all entered data.

**Constraints:**

- Handle all input types. Check checkbox.checked, radio :checked, select .value.

**Sample input:**

```
Fill all fields and submit
```

**Sample output:**

```
Summary: Name: Aarav, Email: aarav@mail.com, Gender: Male, City: Delhi, Agreed: Yes
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head><style>.err{color:red;font-size:13px;} .field{margin:8px 0;} #summary{padding:16px;background:#d1fae5;border-radius:8px;margin-top:16px;display:none;}</style></head>
<body>
  <form id="form">
    <div class="field"><input type="text" id="name" placeholder="Name"><div class="err" id="e-name"></div></div>
    <div class="field"><input type="email" id="email" placeholder="Email"><div class="err" id="e-email"></div></div>
    <div class="field"><input type="password" id="pass" placeholder="Password (8+ chars)"><div class="err" id="e-pass"></div></div>
    <div class="field">Gender: <label><input type="radio" name="gender" value="Male"> Male</label> <label><input type="radio" name="gender" value="Female"> Female</label> <label><input type="radio" name="gender" value="Other"> Other</label><div class="err" id="e-gender"></div></div>
    <div class="field"><select id="city"><option value="">Select city</option><option value="Delhi">Delhi</option><option value="Mumbai">Mumbai</option><option value="Pune">Pune</option></select><div class="err" id="e-city"></div></div>
    <div class="field"><label><input type="checkbox" id="agree"> I agree to terms</label><div class="err" id="e-agree"></div></div>
    <button type="submit">Register</button>
  </form>
  <div id="summary"></div>
  <script>
    document.getElementById("form").addEventListener("submit", function(e) {
      e.preventDefault();
      let valid = true;
      const errs = {name:"",email:"",pass:"",gender:"",city:"",agree:""};
      const name = document.getElementById("name").value.trim();
      if (name.length < 2) { errs.name = "Name required (2+ chars)"; valid = false; }
      const email = document.getElementById("email").value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { errs.email = "Valid email required"; valid = false; }
      if (document.getElementById("pass").value.length < 8) { errs.pass = "Password must be 8+ chars"; valid = false; }
      const gender = document.querySelector('input[name="gender"]:checked');
      if (!gender) { errs.gender = "Select gender"; valid = false; }
      const city = document.getElementById("city").value;
      if (!city) { errs.city = "Select city"; valid = false; }
      if (!document.getElementById("agree").checked) { errs.agree = "Must agree to terms"; valid = false; }
      for (const k in errs) document.getElementById("e-" + k).textContent = errs[k];
      if (valid) {
        const s = document.getElementById("summary");
        s.style.display = "block";
        s.textContent = "Name: " + name + ", Email: " + email + ", Gender: " + gender.value + ", City: " + city;
      }
    });
  </script>
</body>
</html>
```

### Challenge 5. Password Strength Meter

**Difficulty:** Hard

Create a password input with a visual strength meter below it. Check: length >= 8, length >= 12, has lowercase, has uppercase, has number, has special character. Show a colored bar (red/amber/green) and a checklist of criteria with pass/fail indicators. Show 'Weak', 'Medium', or 'Strong' based on score.

**Constraints:**

- Use regex for each criterion. Use classList for meter colors. Update on every keystroke.

**Sample input:**

```
Type 'Aarav@123'
```

**Sample output:**

```
Bar fills to ~83% green. Shows 'Strong'. All criteria except length >= 12 are checked.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head><style>.bar{width:300px;height:8px;background:#e5e7eb;border-radius:4px;margin:8px 0;overflow:hidden;} .fill{height:100%;border-radius:4px;transition:all 0.3s;} .pass{color:#10b981;} .fail{color:#9ca3af;}</style></head>
<body>
  <input type="password" id="pw" placeholder="Enter password" style="width:300px;padding:8px;">
  <div class="bar"><div class="fill" id="fill"></div></div>
  <div id="label"></div>
  <div id="checks"></div>
  <script>
    const pw = document.getElementById("pw");
    const fill = document.getElementById("fill");
    const label = document.getElementById("label");
    const checks = document.getElementById("checks");
    const rules = [
      {text:"8+ characters",fn:function(p){return p.length>=8;}},
      {text:"12+ characters",fn:function(p){return p.length>=12;}},
      {text:"Lowercase letter",fn:function(p){return /[a-z]/.test(p);}},
      {text:"Uppercase letter",fn:function(p){return /[A-Z]/.test(p);}},
      {text:"Number",fn:function(p){return /\d/.test(p);}},
      {text:"Special character",fn:function(p){return /[^A-Za-z0-9]/.test(p);}}
    ];
    pw.addEventListener("input", function() {
      const p = pw.value;
      let score = 0;
      let html = "";
      rules.forEach(function(r) {
        const ok = r.fn(p);
        if (ok) score++;
        html += '<div class="' + (ok?'pass':'fail') + '">' + (ok?'[ok]':'[  ]') + ' ' + r.text + '</div>';
      });
      checks.innerHTML = html;
      const pct = (score/rules.length)*100;
      fill.style.width = pct + "%";
      if (p === "") { fill.style.width = "0%"; label.textContent = ""; }
      else if (score <= 2) { fill.style.backgroundColor = "#ef4444"; label.textContent = "Weak"; label.style.color = "#ef4444"; }
      else if (score <= 4) { fill.style.backgroundColor = "#f59e0b"; label.textContent = "Medium"; label.style.color = "#f59e0b"; }
      else { fill.style.backgroundColor = "#10b981"; label.textContent = "Strong"; label.style.color = "#10b981"; }
    });
  </script>
</body>
</html>
```

### Challenge 6. Multi-Step Form Wizard

**Difficulty:** Hard

Build a 3-step form wizard. Step 1: Name and email. Step 2: Phone and city (select). Step 3: Review all data and submit. Each step has 'Next' and 'Back' buttons. 'Next' validates the current step before proceeding. Only one step is visible at a time. The final step shows a summary.

**Constraints:**

- Use classList to show/hide steps. Validate each step independently. Use DOM manipulation to display the summary.

**Sample input:**

```
Fill Step 1, click Next, fill Step 2, click Next, review and submit
```

**Sample output:**

```
Steps transition smoothly. Invalid fields prevent advancing. Final step shows all entered data.
```

**Solution:**

```javascript
<!DOCTYPE html>
<html>
<head><style>.step{display:none;padding:16px;border:1px solid #ddd;border-radius:8px;max-width:350px;} .step.active{display:block;} .err{color:red;font-size:13px;} input,select{display:block;margin:8px 0;padding:8px;width:100%;box-sizing:border-box;} button{padding:8px 16px;margin:4px;cursor:pointer;}</style></head>
<body>
  <h2>Registration Wizard</h2>
  <div class="step active" id="step1">
    <h3>Step 1: Personal Info</h3>
    <input type="text" id="name" placeholder="Full Name">
    <div class="err" id="e1-name"></div>
    <input type="email" id="email" placeholder="Email">
    <div class="err" id="e1-email"></div>
    <button id="next1">Next</button>
  </div>
  <div class="step" id="step2">
    <h3>Step 2: Contact</h3>
    <input type="text" id="phone" placeholder="Phone (10 digits)" maxlength="10">
    <div class="err" id="e2-phone"></div>
    <select id="city"><option value="">Select city</option><option value="Delhi">Delhi</option><option value="Mumbai">Mumbai</option><option value="Pune">Pune</option></select>
    <div class="err" id="e2-city"></div>
    <button id="back2">Back</button><button id="next2">Next</button>
  </div>
  <div class="step" id="step3">
    <h3>Step 3: Review</h3>
    <div id="review"></div>
    <button id="back3">Back</button><button id="submit">Submit</button>
  </div>
  <script>
    function goTo(step) {
      document.querySelectorAll(".step").forEach(function(s){s.classList.remove("active");});
      document.getElementById("step"+step).classList.add("active");
    }
    document.getElementById("next1").addEventListener("click", function() {
      let ok = true;
      document.getElementById("e1-name").textContent = "";
      document.getElementById("e1-email").textContent = "";
      if (document.getElementById("name").value.trim().length < 2) { document.getElementById("e1-name").textContent = "Name required"; ok = false; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById("email").value)) { document.getElementById("e1-email").textContent = "Valid email required"; ok = false; }
      if (ok) goTo(2);
    });
    document.getElementById("back2").addEventListener("click", function() { goTo(1); });
    document.getElementById("next2").addEventListener("click", function() {
      let ok = true;
      document.getElementById("e2-phone").textContent = "";
      document.getElementById("e2-city").textContent = "";
      if (!/^\d{10}$/.test(document.getElementById("phone").value)) { document.getElementById("e2-phone").textContent = "10 digit phone required"; ok = false; }
      if (!document.getElementById("city").value) { document.getElementById("e2-city").textContent = "Select a city"; ok = false; }
      if (ok) {
        document.getElementById("review").innerHTML = "<strong>Name:</strong> " + document.getElementById("name").value + "<br><strong>Email:</strong> " + document.getElementById("email").value + "<br><strong>Phone:</strong> " + document.getElementById("phone").value + "<br><strong>City:</strong> " + document.getElementById("city").value;
        goTo(3);
      }
    });
    document.getElementById("back3").addEventListener("click", function() { goTo(2); });
    document.getElementById("submit").addEventListener("click", function() { alert("Registration complete!"); });
  </script>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/forms-and-validation/*
