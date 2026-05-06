---
title: "Forms and Input Validation in JavaScript - Submit, Regex, Real-time Validation | Modern Age Coders"
description: "Learn JavaScript form handling and validation. Master form submit event, preventDefault, regex validation for email and phone, real-time input validation, checkbox/radio/select handling, password strength checker, and error messages. 58+ practice questions."
slug: forms-and-validation
canonical: https://learn.modernagecoders.com/resources/javascript/forms-and-validation
category: "JavaScript"
keywords: ["javascript form validation", "form submit javascript", "email validation javascript", "regex javascript", "password validation", "real-time validation", "javascript form handling", "checkbox radio select javascript", "preventDefault form", "input validation tutorial"]
---
# Forms and Input Validation

**Difficulty:** Intermediate  
**Reading time:** 40 min  
**Chapter:** 14  
**Practice questions:** 58

## What Is Form Validation?

**Form validation** is the process of checking that user input meets your requirements before processing it. Does the email have an @ symbol? Is the password at least 8 characters? Is the phone number 10 digits? Did the user fill in all required fields?

JavaScript can validate forms on the **client side** (in the browser) before data is sent to a server. This gives users instant feedback without waiting for a page reload.

```

  
  
  Login

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "") {
    alert("Email is required!");
    return;
  }
  if (password.length < 8) {
    alert("Password must be at least 8 characters!");
    return;
  }
  console.log("Form is valid. Submitting...");
});

```

## Why Learn Form Validation?

### 1. Forms Are Everywhere

Login, registration, search, checkout, feedback, contact, booking -- nearly every website has forms. If you want to build websites, you will handle forms. A lot.

### 2. User Experience

Good validation gives users instant feedback. Instead of submitting a form and waiting for a server error, they see "Password too short" as they type. This is how all modern websites work -- Google, Amazon, Instagram all validate in real-time.

### 3. Security Layer

Client-side validation is the first line of defense against bad data. It catches typos, missing fields, and incorrect formats before they reach your server. Note: you should ALWAYS validate on the server too, because client-side validation can be bypassed.

### 4. It Combines Everything You Have Learned

Form validation uses DOM selection (getting inputs), events (submit, input, focus, blur), element creation (error messages), and CSS manipulation (red borders, green checkmarks). It is the perfect practice for combining all your DOM skills.

## Detailed Explanation

### 1. The Form Submit Event

When a form is submitted (clicking submit button or pressing Enter in an input), the browser fires a `submit` event and reloads the page. To handle it with JavaScript, listen for the submit event and call `e.preventDefault()`:

```

  
  Submit

document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop page reload
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    console.log("Name is required");
  } else {
    console.log("Submitted: " + name);
  }
});

```

### 2. Basic Validation Checks

Common validations you need to write:

```
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value;
const age = Number(document.getElementById("age").value);

// Empty check
if (email === "") { /* Show error */ }

// Minimum length
if (password.length < 8) { /* Show error */ }

// Maximum length
if (password.length > 50) { /* Show error */ }

// Number range
if (age < 13 || age > 120) { /* Show error */ }

// Contains specific character
if (!email.includes("@")) { /* Show error */ }
```

### 3. Regular Expressions (Regex) for Validation

Regex patterns let you check if a string matches a specific format:

```
// Email: basic pattern
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test("aarav@gmail.com")); // true
console.log(emailRegex.test("aarav@")); // false
console.log(emailRegex.test("aarav")); // false

// Phone: exactly 10 digits
const phoneRegex = /^\d{10}$/;
console.log(phoneRegex.test("9876543210")); // true
console.log(phoneRegex.test("12345")); // false

// Password: at least 8 chars, one uppercase, one lowercase, one number
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
console.log(passRegex.test("Aarav123")); // true
console.log(passRegex.test("aarav123")); // false (no uppercase)
console.log(passRegex.test("AARAV123")); // false (no lowercase)

// Only letters and spaces (for names)
const nameRegex = /^[A-Za-z\s]+$/;
console.log(nameRegex.test("Aarav Sharma")); // true
console.log(nameRegex.test("Aarav123")); // false
```

### 4. Showing Error Messages Dynamically

Instead of using alert(), create error message elements that appear below the input:

```
function showError(input, message) {
  // Remove existing error
  const existing = input.parentNode.querySelector(".error");
  if (existing) existing.remove();

  // Create error element
  const error = document.createElement("div");
  error.className = "error";
  error.textContent = message;
  error.style.color = "red";
  error.style.fontSize = "13px";
  error.style.marginTop = "4px";

  // Add after the input
  input.parentNode.appendChild(error);
  input.style.borderColor = "red";
}

function clearError(input) {
  const existing = input.parentNode.querySelector(".error");
  if (existing) existing.remove();
  input.style.borderColor = "green";
}
```

### 5. Real-Time Validation (input event)

Instead of waiting for form submission, validate as the user types using the `input` event:

```

const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailInput.addEventListener("input", function() {
  const value = emailInput.value.trim();
  if (value === "") {
    emailError.textContent = "";
    emailInput.style.borderColor = "";
  } else if (emailRegex.test(value)) {
    emailError.textContent = "Valid email";
    emailError.style.color = "green";
    emailInput.style.borderColor = "green";
  } else {
    emailError.textContent = "Enter a valid email";
    emailError.style.color = "red";
    emailInput.style.borderColor = "red";
  }
});

```

### 6. Handling Checkboxes, Radio Buttons, and Select

```
// Checkbox: .checked is a boolean
const agree = document.getElementById("agree");
console.log(agree.checked); // true or false

// Radio buttons: find the checked one
const selectedGender = document.querySelector('input[name="gender"]:checked');
if (selectedGender) {
  console.log(selectedGender.value); // "male", "female", etc.
}

// Select dropdown: .value gives the selected option's value
const city = document.getElementById("city");
console.log(city.value); // "delhi", "mumbai", etc.

// Select: get the text of the selected option
console.log(city.options[city.selectedIndex].text); // "Delhi"
```

### 7. Password Strength Checker

A common feature that rates password strength as the user types:

```
function checkStrength(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) return { text: "Weak", color: "red" };
  if (score <= 4) return { text: "Medium", color: "orange" };
  return { text: "Strong", color: "green" };
}
```

### 8. Enabling/Disabling the Submit Button

Disable the submit button until all validations pass:

```
const submitBtn = document.getElementById("submit");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

function checkFormValidity() {
  const nameValid = nameInput.value.trim().length >= 2;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
  submitBtn.disabled = !(nameValid && emailValid);
}

nameInput.addEventListener("input", checkFormValidity);
emailInput.addEventListener("input", checkFormValidity);
```

## Code Examples

### Complete Registration Form with Validation

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    form { max-width: 400px; }
    .field { margin-bottom: 16px; }
    label { display: block; font-weight: bold; margin-bottom: 4px; }
    input, select { width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 6px; font-size: 16px; box-sizing: border-box; }
    input:focus { outline: none; }
    .error-msg { color: #ef4444; font-size: 13px; margin-top: 4px; display: none; }
    .error-msg.show { display: block; }
    .valid { border-color: #10b981; }
    .invalid { border-color: #ef4444; }
    button { padding: 12px 24px; background: #a855f7; color: white; border: none; border-radius: 6px; font-size: 16px; cursor: pointer; width: 100%; }
    button:disabled { background: #d1d5db; cursor: not-allowed; }
    #success { padding: 16px; background: #d1fae5; border-radius: 8px; display: none; margin-top: 16px; }
  </style>
</head>
<body>
  <h2>Student Registration</h2>
  <form id="regForm">
    <div class="field">
      <label>Full Name</label>
      <input type="text" id="name" placeholder="Aarav Sharma">
      <div class="error-msg" id="name-error">Name must be at least 2 characters (letters only)</div>
    </div>
    <div class="field">
      <label>Email</label>
      <input type="text" id="email" placeholder="aarav@example.com">
      <div class="error-msg" id="email-error">Enter a valid email address</div>
    </div>
    <div class="field">
      <label>Phone (10 digits)</label>
      <input type="text" id="phone" placeholder="9876543210" maxlength="10">
      <div class="error-msg" id="phone-error">Phone must be exactly 10 digits</div>
    </div>
    <div class="field">
      <label>Password</label>
      <input type="password" id="password" placeholder="Min 8 chars, 1 upper, 1 lower, 1 number">
      <div class="error-msg" id="password-error">Min 8 chars with uppercase, lowercase, and number</div>
    </div>
    <div class="field">
      <label>City</label>
      <select id="city">
        <option value="">Select city</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Chennai">Chennai</option>
        <option value="Pune">Pune</option>
      </select>
      <div class="error-msg" id="city-error">Please select a city</div>
    </div>
    <button type="submit" id="submitBtn" disabled>Register</button>
  </form>
  <div id="success"></div>

  <script>
    const form = document.getElementById("regForm");
    const fields = {
      name: { el: document.getElementById("name"), err: document.getElementById("name-error"), valid: false },
      email: { el: document.getElementById("email"), err: document.getElementById("email-error"), valid: false },
      phone: { el: document.getElementById("phone"), err: document.getElementById("phone-error"), valid: false },
      password: { el: document.getElementById("password"), err: document.getElementById("password-error"), valid: false },
      city: { el: document.getElementById("city"), err: document.getElementById("city-error"), valid: false }
    };
    const submitBtn = document.getElementById("submitBtn");

    function validate(name, value) {
      switch(name) {
        case "name": return /^[A-Za-z\s]{2,}$/.test(value);
        case "email": return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        case "phone": return /^\d{10}$/.test(value);
        case "password": return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
        case "city": return value !== "";
      }
    }

    function checkField(name) {
      const f = fields[name];
      const value = f.el.value.trim();
      if (value === "" && name !== "city") {
        f.el.classList.remove("valid", "invalid");
        f.err.classList.remove("show");
        f.valid = false;
      } else if (validate(name, value)) {
        f.el.classList.add("valid");
        f.el.classList.remove("invalid");
        f.err.classList.remove("show");
        f.valid = true;
      } else {
        f.el.classList.add("invalid");
        f.el.classList.remove("valid");
        f.err.classList.add("show");
        f.valid = false;
      }
      submitBtn.disabled = !Object.values(fields).every(function(f) { return f.valid; });
    }

    Object.keys(fields).forEach(function(name) {
      const eventType = name === "city" ? "change" : "input";
      fields[name].el.addEventListener(eventType, function() { checkField(name); });
    });

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const success = document.getElementById("success");
      success.style.display = "block";
      success.textContent = "Welcome, " + fields.name.el.value + "! Registration successful.";
    });
  </script>
</body>
</html>
```

A complete registration form with real-time validation. Each field validates as the user types (input event). The submit button stays disabled until all fields pass validation. On successful submission, a green success message appears. Regex is used for email, phone, and password patterns.

**Output:**

```
A registration form with live validation. Fields turn green/red as you type. Submit is disabled until all fields are valid.
```

### Password Strength Meter

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    input { width: 300px; padding: 10px; border: 2px solid #ddd; border-radius: 6px; font-size: 16px; }
    .meter { width: 300px; height: 8px; background: #e5e7eb; border-radius: 4px; margin-top: 8px; overflow: hidden; }
    .meter-fill { height: 100%; border-radius: 4px; transition: width 0.3s, background-color 0.3s; width: 0%; }
    .strength-text { margin-top: 6px; font-size: 14px; font-weight: bold; }
    .checks { margin-top: 12px; font-size: 14px; }
    .check { margin: 4px 0; }
    .pass { color: #10b981; }
    .fail { color: #9ca3af; }
  </style>
</head>
<body>
  <h2>Password Strength Checker</h2>
  <input type="password" id="password" placeholder="Enter password">
  <div class="meter"><div class="meter-fill" id="fill"></div></div>
  <div class="strength-text" id="strength"></div>
  <div class="checks" id="checks"></div>

  <script>
    const passwordInput = document.getElementById("password");
    const fill = document.getElementById("fill");
    const strengthText = document.getElementById("strength");
    const checksDiv = document.getElementById("checks");

    const criteria = [
      { label: "At least 8 characters", test: function(p) { return p.length >= 8; } },
      { label: "At least 12 characters", test: function(p) { return p.length >= 12; } },
      { label: "Contains lowercase letter", test: function(p) { return /[a-z]/.test(p); } },
      { label: "Contains uppercase letter", test: function(p) { return /[A-Z]/.test(p); } },
      { label: "Contains a number", test: function(p) { return /\d/.test(p); } },
      { label: "Contains special character", test: function(p) { return /[^A-Za-z0-9]/.test(p); } }
    ];

    passwordInput.addEventListener("input", function() {
      const password = passwordInput.value;
      let score = 0;
      let checksHTML = "";

      criteria.forEach(function(c) {
        const passed = c.test(password);
        if (passed) score++;
        const div = document.createElement("div");
        div.className = "check " + (passed ? "pass" : "fail");
        div.textContent = (passed ? "[ok] " : "[  ] ") + c.label;
        checksHTML += div.outerHTML;
      });

      checksDiv.innerHTML = checksHTML;

      const percent = (score / criteria.length) * 100;
      fill.style.width = percent + "%";

      if (password === "") {
        fill.style.width = "0%";
        strengthText.textContent = "";
      } else if (score <= 2) {
        fill.style.backgroundColor = "#ef4444";
        strengthText.textContent = "Weak";
        strengthText.style.color = "#ef4444";
      } else if (score <= 4) {
        fill.style.backgroundColor = "#f59e0b";
        strengthText.textContent = "Medium";
        strengthText.style.color = "#f59e0b";
      } else {
        fill.style.backgroundColor = "#10b981";
        strengthText.textContent = "Strong";
        strengthText.style.color = "#10b981";
      }
    });
  </script>
</body>
</html>
```

Each criterion is a function that tests the password. As the user types, we check each criterion and calculate a score. The meter bar fills up based on the score (red for weak, amber for medium, green for strong). Each check is listed with a pass/fail indicator.

**Output:**

```
A password field with a colored progress bar and a checklist that updates in real time as the user types.
```

### Checkbox, Radio, and Select Handling

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .group { margin-bottom: 16px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; }
    label { display: block; margin: 4px 0; cursor: pointer; }
    #summary { padding: 16px; background: #f3f4f6; border-radius: 8px; margin-top: 16px; }
    button { padding: 10px 20px; background: #a855f7; color: white; border: none; border-radius: 6px; cursor: pointer; }
  </style>
</head>
<body>
  <h2>Student Preferences</h2>
  <div class="group">
    <strong>Subjects (checkboxes - select multiple):</strong>
    <label><input type="checkbox" name="subject" value="Maths"> Maths</label>
    <label><input type="checkbox" name="subject" value="Science"> Science</label>
    <label><input type="checkbox" name="subject" value="English"> English</label>
    <label><input type="checkbox" name="subject" value="Computer"> Computer Science</label>
  </div>
  <div class="group">
    <strong>Batch (radio - select one):</strong>
    <label><input type="radio" name="batch" value="morning"> Morning (8 AM)</label>
    <label><input type="radio" name="batch" value="afternoon"> Afternoon (2 PM)</label>
    <label><input type="radio" name="batch" value="evening"> Evening (6 PM)</label>
  </div>
  <div class="group">
    <strong>Class (select dropdown):</strong>
    <select id="classSelect">
      <option value="">Select class</option>
      <option value="8">Class 8</option>
      <option value="9">Class 9</option>
      <option value="10">Class 10</option>
      <option value="11">Class 11</option>
      <option value="12">Class 12</option>
    </select>
  </div>
  <button id="showBtn">Show Summary</button>
  <div id="summary"></div>

  <script>
    document.getElementById("showBtn").addEventListener("click", function() {
      // Checkboxes: get all checked values
      const checkedSubjects = document.querySelectorAll('input[name="subject"]:checked');
      const subjects = Array.from(checkedSubjects).map(function(cb) { return cb.value; });

      // Radio: get the selected one
      const selectedBatch = document.querySelector('input[name="batch"]:checked');
      const batch = selectedBatch ? selectedBatch.value : "None selected";

      // Select: get value
      const classSelect = document.getElementById("classSelect");
      const selectedClass = classSelect.value || "None selected";

      const summary = document.getElementById("summary");
      summary.innerHTML = 
        "<strong>Subjects:</strong> " + (subjects.length > 0 ? subjects.join(", ") : "None") + "<br>" +
        "<strong>Batch:</strong> " + batch + "<br>" +
        "<strong>Class:</strong> " + (selectedClass !== "None selected" ? "Class " + selectedClass : selectedClass);
    });
  </script>
</body>
</html>
```

Checkboxes: use `querySelectorAll(':checked')` to get all checked boxes, then map their values. Radio buttons: use `querySelector(':checked')` to get the single selected option. Select: read `.value` for the current selection.

**Output:**

```
A form with checkboxes, radio buttons, and a dropdown. Clicking 'Show Summary' displays all selected values.
```

### Real-Time Field Validation with Visual Feedback

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .field { margin-bottom: 14px; position: relative; }
    label { display: block; font-weight: bold; margin-bottom: 4px; }
    input { width: 300px; padding: 10px 36px 10px 10px; border: 2px solid #ddd; border-radius: 6px; font-size: 16px; box-sizing: border-box; }
    .icon { position: absolute; right: 10px; top: 34px; font-size: 18px; }
    .msg { font-size: 13px; margin-top: 2px; }
    .valid input { border-color: #10b981; }
    .valid .icon { color: #10b981; }
    .valid .msg { color: #10b981; }
    .invalid input { border-color: #ef4444; }
    .invalid .icon { color: #ef4444; }
    .invalid .msg { color: #ef4444; }
  </style>
</head>
<body>
  <h2>Live Validation</h2>
  <div class="field" id="name-field">
    <label>Name</label>
    <input type="text" id="name" placeholder="At least 2 letters">
    <span class="icon" id="name-icon"></span>
    <div class="msg" id="name-msg"></div>
  </div>
  <div class="field" id="email-field">
    <label>Email</label>
    <input type="text" id="email" placeholder="aarav@example.com">
    <span class="icon" id="email-icon"></span>
    <div class="msg" id="email-msg"></div>
  </div>
  <div class="field" id="phone-field">
    <label>Phone</label>
    <input type="text" id="phone" placeholder="10 digit number" maxlength="10">
    <span class="icon" id="phone-icon"></span>
    <div class="msg" id="phone-msg"></div>
  </div>

  <script>
    function setupValidation(id, testFn, validMsg, invalidMsg) {
      const input = document.getElementById(id);
      const field = document.getElementById(id + "-field");
      const icon = document.getElementById(id + "-icon");
      const msg = document.getElementById(id + "-msg");

      input.addEventListener("input", function() {
        const value = input.value.trim();
        if (value === "") {
          field.classList.remove("valid", "invalid");
          icon.textContent = "";
          msg.textContent = "";
        } else if (testFn(value)) {
          field.classList.add("valid");
          field.classList.remove("invalid");
          icon.textContent = "[ok]";
          msg.textContent = validMsg;
        } else {
          field.classList.add("invalid");
          field.classList.remove("valid");
          icon.textContent = "[x]";
          msg.textContent = invalidMsg;
        }
      });
    }

    setupValidation("name",
      function(v) { return /^[A-Za-z\s]{2,}$/.test(v); },
      "Looks good!",
      "Letters only, at least 2 characters"
    );

    setupValidation("email",
      function(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); },
      "Valid email!",
      "Enter a valid email address"
    );

    setupValidation("phone",
      function(v) { return /^\d{10}$/.test(v); },
      "Valid phone number!",
      "Must be exactly 10 digits"
    );
  </script>
</body>
</html>
```

A reusable `setupValidation` function handles the validation logic for any field. It takes the field ID, a test function, and messages for valid/invalid states. Each field validates in real time as the user types, with color-coded borders, icons, and messages.

**Output:**

```
Three input fields that show green check or red X icons and messages as you type. Each validates with a different rule.
```

### Login Form with Error Messages

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; display: flex; justify-content: center; }
    .login-card { width: 350px; padding: 30px; border: 1px solid #e5e7eb; border-radius: 12px; }
    h2 { text-align: center; margin-bottom: 24px; }
    .field { margin-bottom: 16px; }
    label { display: block; font-size: 14px; font-weight: bold; margin-bottom: 4px; }
    input { width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 6px; font-size: 16px; box-sizing: border-box; }
    .error { color: #ef4444; font-size: 13px; margin-top: 4px; min-height: 18px; }
    button { width: 100%; padding: 12px; background: #a855f7; color: white; border: none; border-radius: 6px; font-size: 16px; cursor: pointer; }
    button:hover { background: #9333ea; }
    #result { text-align: center; margin-top: 16px; padding: 10px; border-radius: 6px; }
    .success { background: #d1fae5; color: #065f46; }
    .failure { background: #fecaca; color: #991b1b; }
  </style>
</head>
<body>
  <div class="login-card">
    <h2>Login</h2>
    <form id="loginForm">
      <div class="field">
        <label>Email</label>
        <input type="text" id="email" placeholder="aarav@example.com">
        <div class="error" id="email-error"></div>
      </div>
      <div class="field">
        <label>Password</label>
        <input type="password" id="password" placeholder="Enter password">
        <div class="error" id="password-error"></div>
      </div>
      <button type="submit">Login</button>
    </form>
    <div id="result"></div>
  </div>

  <script>
    document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const email = document.getElementById("email");
      const password = document.getElementById("password");
      const emailError = document.getElementById("email-error");
      const passwordError = document.getElementById("password-error");
      const result = document.getElementById("result");

      let isValid = true;

      // Email validation
      emailError.textContent = "";
      if (email.value.trim() === "") {
        emailError.textContent = "Email is required";
        email.style.borderColor = "#ef4444";
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        emailError.textContent = "Enter a valid email";
        email.style.borderColor = "#ef4444";
        isValid = false;
      } else {
        email.style.borderColor = "#10b981";
      }

      // Password validation
      passwordError.textContent = "";
      if (password.value === "") {
        passwordError.textContent = "Password is required";
        password.style.borderColor = "#ef4444";
        isValid = false;
      } else if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        password.style.borderColor = "#ef4444";
        isValid = false;
      } else {
        password.style.borderColor = "#10b981";
      }

      // Result
      result.className = "";
      if (isValid) {
        result.textContent = "Login successful!";
        result.classList.add("success");
      }
    });
  </script>
</body>
</html>
```

On form submission, each field is validated. If empty or invalid, an error message appears below the input and the border turns red. If valid, the border turns green. Only when all validations pass does the success message appear. This is the basic pattern for any login form.

**Output:**

```
A styled login form. Submitting with empty fields shows red error messages. Valid inputs turn green. Success shows a green banner.
```

### Enable Submit Button Based on Validity

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    form { max-width: 350px; }
    .field { margin-bottom: 12px; }
    label { display: block; font-weight: bold; margin-bottom: 4px; }
    input { width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 6px; font-size: 16px; box-sizing: border-box; }
    button { width: 100%; padding: 12px; background: #a855f7; color: white; border: none; border-radius: 6px; font-size: 16px; cursor: pointer; }
    button:disabled { background: #d1d5db; cursor: not-allowed; }
    .status { font-size: 13px; margin-top: 2px; }
    .check { margin-top: 8px; }
    label.check-label { font-weight: normal; cursor: pointer; }
  </style>
</head>
<body>
  <h2>Contact Form</h2>
  <form id="form">
    <div class="field">
      <label>Name</label>
      <input type="text" id="name" placeholder="Your name">
      <div class="status" id="name-status"></div>
    </div>
    <div class="field">
      <label>Email</label>
      <input type="text" id="email" placeholder="you@example.com">
      <div class="status" id="email-status"></div>
    </div>
    <div class="field">
      <label>Message</label>
      <input type="text" id="message" placeholder="At least 10 characters">
      <div class="status" id="message-status"></div>
    </div>
    <div class="check">
      <label class="check-label"><input type="checkbox" id="agree"> I agree to the terms</label>
    </div>
    <br>
    <button type="submit" id="submit" disabled>Send Message</button>
  </form>

  <script>
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const agreeCheckbox = document.getElementById("agree");
    const submitBtn = document.getElementById("submit");

    function checkAll() {
      const nameOk = nameInput.value.trim().length >= 2;
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
      const msgOk = messageInput.value.trim().length >= 10;
      const agreed = agreeCheckbox.checked;

      document.getElementById("name-status").textContent = nameInput.value.trim() ? (nameOk ? "" : "Too short") : "";
      document.getElementById("name-status").style.color = nameOk ? "green" : "red";
      document.getElementById("email-status").textContent = emailInput.value.trim() ? (emailOk ? "" : "Invalid email") : "";
      document.getElementById("email-status").style.color = emailOk ? "green" : "red";
      document.getElementById("message-status").textContent = messageInput.value.trim() ? (msgOk ? "" : (10 - messageInput.value.trim().length) + " more chars needed") : "";
      document.getElementById("message-status").style.color = msgOk ? "green" : "red";

      submitBtn.disabled = !(nameOk && emailOk && msgOk && agreed);
    }

    nameInput.addEventListener("input", checkAll);
    emailInput.addEventListener("input", checkAll);
    messageInput.addEventListener("input", checkAll);
    agreeCheckbox.addEventListener("change", checkAll);

    document.getElementById("form").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Message sent! Thank you, " + nameInput.value.trim());
    });
  </script>
</body>
</html>
```

The submit button is disabled by default. As the user fills in each field, the `checkAll` function validates all fields and enables the button only when ALL conditions are met: name >= 2 chars, valid email, message >= 10 chars, and checkbox is checked. The message field even shows how many more characters are needed.

**Output:**

```
A contact form with a disabled submit button. It enables only when all fields are valid and the checkbox is checked.
```

## Common Mistakes

### Forgetting e.preventDefault() on Form Submit

**Wrong:**

```
document.getElementById("form").addEventListener("submit", function() {
  // Forgot e.preventDefault()!
  console.log("This logs for a split second, then the page reloads");
});
```

The page reloads because the default form submission behavior is not prevented.

**Correct:**

```
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("Now this works without page reload");
});
```

The `submit` event's default behavior is to send the form data and reload the page. You must call `e.preventDefault()` to handle the form with JavaScript instead.

### Reading .value of a Non-Existent Element

**Wrong:**

```
const email = document.getElementById("emial").value; // Typo in ID!
// TypeError: Cannot read properties of null (reading 'value')
```

TypeError: Cannot read properties of null (reading 'value'). The ID 'emial' does not exist (typo for 'email').

**Correct:**

```
const email = document.getElementById("email").value; // Correct ID
```

If getElementById returns null (element not found), accessing `.value` on null throws a TypeError. Always check for typos in IDs, or add a null check before accessing properties.

### Checking .checked on a Radio Group Without Handling No Selection

**Wrong:**

```
const selected = document.querySelector('input[name="gender"]:checked');
console.log(selected.value); // TypeError if nothing is selected!
```

TypeError: Cannot read properties of null (reading 'value'). If no radio button is checked, querySelector returns null.

**Correct:**

```
const selected = document.querySelector('input[name="gender"]:checked');
if (selected) {
  console.log(selected.value);
} else {
  console.log("No option selected");
}
```

If no radio button is checked, `querySelector(':checked')` returns null. Always check if the result is not null before accessing .value.

### Comparing Input Value as Number Without Conversion

**Wrong:**

```
const age = document.getElementById("age").value;
if (age > 18) {
  console.log("Adult");
}
// Problem: age is a STRING, not a number
// "9" > 18 is false (correct by luck), but "9" > "18" is true (string comparison)!
```

The comparison works with numbers by coercion, but can give unexpected results with string comparisons. Also, "" (empty input) > 18 evaluates to false, which might mask an empty field.

**Correct:**

```
const age = Number(document.getElementById("age").value);
if (isNaN(age) || age <= 0) {
  console.log("Enter a valid age");
} else if (age > 18) {
  console.log("Adult");
}
```

Input values are always strings. Convert to a number with `Number()` or `parseInt()`. Also check for NaN (invalid input) before comparing.

### Regex Without the test() Method

**Wrong:**

```
const email = "aarav@gmail.com";
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (email === regex) { // Always false! Comparing string to regex object
  console.log("Valid");
}
```

A string is never equal to a regex object. The comparison is always false.

**Correct:**

```
const email = "aarav@gmail.com";
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (regex.test(email)) {
  console.log("Valid");
}
```

Use `regex.test(string)` to check if a string matches the pattern. It returns true or false. You cannot compare a string to a regex with `===`.

## Summary

- Always use e.preventDefault() in the form submit handler to stop the page from reloading. This lets JavaScript process the form data.
- Read input values with .value (returns a string). For numbers, convert with Number() or parseInt(). For checkboxes, use .checked (boolean).
- Common validations: empty check (value.trim() === ''), minimum length (value.length < n), regex patterns for email, phone, and password.
- Regular expressions: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ for email, /^\d{10}$/ for 10-digit phone, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/ for strong passwords.
- Show error messages by creating elements or toggling CSS classes. Never use alert() for validation -- it is disruptive to the user experience.
- Use the input event for real-time validation (fires on every keystroke). Use the change event for final-value validation (fires when the field loses focus).
- For checkboxes: querySelectorAll(':checked') gets all checked boxes. For radio buttons: querySelector(':checked') gets the selected one (null if none).
- For select dropdowns: .value gives the selected option's value. .selectedIndex gives the index. .options[index].text gives the display text.
- Disable the submit button until all validations pass. Re-check validity on every input event to enable/disable dynamically.
- Always validate on the server too. Client-side validation improves UX but can be bypassed by disabling JavaScript or manipulating the request.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/javascript/forms-and-validation/*
*Practice questions: https://learn.modernagecoders.com/resources/javascript/forms-and-validation/practice/*
