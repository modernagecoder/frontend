---
title: "Practice: Forms, Inputs, and Form Validation"
description: "58 practice problems for Forms, Inputs, and Form Validation in HTML and CSS"
slug: forms-and-inputs-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/forms-and-inputs/practice
category: "HTML and CSS"
---
# Practice: Forms, Inputs, and Form Validation

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] What does this HTML display?

```

```

*Hint:* A single-line box with grey hint text.

**Answer:** A single-line text input field with 'Enter name' shown in grey until the user types.

The default `type="text"` creates a single-line text field. The `placeholder` shows grey hint text that disappears once the user starts typing.

### Q2. [Easy] Create a form with a single email input and a submit button.

*Hint:* Use form, input type=email, and button type=submit.

**Answer:** ```

  Email:
  
  Submit

```

Every form needs the form tag as the wrapper, at least one input, and a submit button. The email type makes the browser validate the format automatically.

### Q3. [Easy] Which attribute makes an input field mandatory?

*Hint:* Users cannot leave it empty.

**Answer:** `required`

The `required` attribute stops the form from being submitted if the field is empty. The browser shows a default error message.

### Q4. [Easy] What input type should you use for a password field?

*Hint:* It hides what the user types.

**Answer:** `type="password"`

`type="password"` masks the characters as dots or asterisks, hiding what the user types from people looking at the screen.

### Q5. [Easy] What does  create?

*Hint:* A box that can be ticked on or off.

**Answer:** A checkbox — a square box users can tick. Lets them pick multiple options.

Checkboxes are for independent yes/no choices. Users can tick any number of them. Use `radio` when only one option should be picked.

### Q6. [Easy] Create a dropdown (select) where users can pick their favourite sport: Cricket, Football, or Hockey.

*Hint:* Use select with option tags inside.

**Answer:** ```
Sport:

  Cricket
  Football
  Hockey

```

Each `` has a value (what is sent to the server) and display text (what the user sees). Both can be the same or different.

### Q7. [Easy] What element should you use for multi-line text input like a comment?

*Hint:* It is not input.

**Answer:** ``

`` creates a multi-line text box. It has rows and cols attributes to control the default size.

### Q8. [Easy] Aarav's form is sending nothing to the server. Find the bug:

```

  
  Go

```

*Hint:* The server needs a key to identify the data.

**Answer:** Missing `name` attribute. Add `name="username"` to the input.

Only fields with a `name` attribute are submitted. `id` is for labels and scripts, not for form submission.

### Q9. [Easy] Create 3 radio buttons for gender: Male, Female, Other. They should be grouped so only one can be selected.

*Hint:* Give them all the same name.

**Answer:** ```
 Male
 Female
 Other
```

All three radios share `name="gender"`, so the browser treats them as a group. Only one can be selected at a time.

### Q10. [Easy] What does  do?

*Hint:* It connects the label to an input.

**Answer:** Links the label to the input with id="email". Clicking the label focuses that input.

The `for` attribute must match the input's `id`. This connection helps screen readers, improves mobile usability, and makes forms more accessible.

### Q11. [Easy] Create a number input that only accepts ages between 5 and 100.

*Hint:* Use type=number with min and max.

**Answer:** ```
Age:

```

`type="number"` makes it a number-only field with up/down arrows. `min` and `max` limit the allowed range.

### Q12. [Easy] What input type should you use for a date of birth field?

*Hint:* It opens a calendar.

**Answer:** `type="date"`

`type="date"` shows a calendar picker in modern browsers. On mobile, it opens a date wheel.

### Q13. [Easy] Priya's radio buttons all allow multiple selections. Fix:

```
 Dog
 Cat
 Bird
```

*Hint:* Radio buttons need the same name to group.

**Answer:** ```
 Dog
 Cat
 Bird
```

Radio buttons are grouped by their `name`. All three must share the same name (like 'pet') for the browser to enforce single-selection behaviour.

### Q14. [Medium] Create a textarea with 5 rows, 40 columns, maximum 200 characters, and a placeholder 'Tell us about yourself'.

*Hint:* Use rows, cols, maxlength, and placeholder attributes.

**Answer:** ```

```

`textarea` is a multi-line text field. `maxlength` stops the user from typing more than 200 characters.

### Q15. [Medium] What is the difference between readonly and disabled?

*Hint:* Both prevent editing, but only one submits the value.

**Answer:** `readonly` prevents editing but the value IS submitted. `disabled` prevents editing AND the value is NOT submitted.

Use `readonly` when you want the server to receive the current value. Use `disabled` when you want to completely exclude the field from the form.

### Q16. [Medium] Create a fieldset with the legend 'Contact Info' containing email and phone inputs.

*Hint:* Use fieldset, legend, and two inputs.

**Answer:** ```

  Contact Info
  Email: 

  Phone: 

```

`` visually groups related fields with a border. `` gives the group a title that sits on the border.

### Q17. [Medium] What is the difference between name and id on an input field?

*Hint:* One is for the server, one is for labels and CSS.

**Answer:** `name` is used when submitting the form (the server sees it as the key). `id` is for labels, CSS, and JavaScript. Most fields need both.

Without `name`, data is not submitted. Without `id`, labels cannot link to the field. They are different attributes with different jobs.

### Q18. [Medium] Create a checkbox list for hobbies (Reading, Gaming, Sports, Music). Each should send the value on submit.

*Hint:* Each checkbox needs a name and value. You can give them the same name.

**Answer:** ```

  Hobbies
   Reading

   Gaming

   Sports

   Music

```

Giving checkboxes the same name groups them on the server side. The server receives a list of all checked values.

### Q19. [Medium] What does pattern="[0-9]{10}" mean on an input?

*Hint:* It is a regex requiring exactly 10 digits.

**Answer:** The input must contain exactly 10 digits (0-9). Useful for Indian phone numbers.

`[0-9]` matches any digit, and `{10}` means exactly 10 of them. The form won't submit unless the input matches this pattern.

### Q20. [Medium] Create a complete form with a phone input requiring exactly 10 digits using pattern.

*Hint:* Use type=tel and pattern="[0-9]{10}".

**Answer:** ```

  Phone:
  
  Submit

```

`type="tel"` opens the numeric keyboard on mobile. The pattern enforces 10 digits. The `title` is the error message.

### Q21. [Medium] Rohan's password field looks broken — users see their passwords. Fix:

```

```

*Hint:* Change the type.

**Answer:** ```

```

Password fields must use `type="password"`, not `type="text"`. This hides the characters as dots.

### Q22. [Medium] What type of input should you use for uploading an image?

*Hint:* It opens a file picker.

**Answer:** `type="file"` with `accept="image/*"`

`type="file"` creates a file upload button. The `accept` attribute filters what files can be chosen — `image/*` limits to image files.

### Q23. [Medium] Create a slider (range) input from 0 to 100 with default value 50 for volume.

*Hint:* Use type=range.

**Answer:** ```
Volume:

```

`type="range"` creates a slider. The `value` sets the starting position.

### Q24. [Medium] Why should you avoid using placeholder as the only label for an input?

*Hint:* It disappears when users type.

**Answer:** Placeholders disappear when the user types, leaving them without context. Screen readers often skip them. Always use a real label.

Accessibility experts agree: placeholders are for hints, not labels. Use `` for the main field description, and optionally use placeholder for examples.

### Q25. [Hard] Build a complete registration form with name, email, password (min 8 chars), age (10-80), gender (radio), interests (checkboxes: Sports, Music, Art), country (select), and bio (textarea). Include proper labels for everything.

*Hint:* Use all the concepts from the chapter.

**Answer:** ```
<!DOCTYPE html>

  Name:
  

  Email:
  

  Password:
  

  Age:
  

  Gender
     Male
     Female
     Other
  

  Interests
     Sports
     Music
     Art
  

  Country:
  
    India
    USA
  

  Bio:
  

  Register

```

Full form using text, email, password, number, radio, checkbox, select, and textarea. Fieldsets group radios and checkboxes. Every field has a label and a name. This is a real-world registration form.

### Q26. [Hard] Why does  not submit 'hello' to the server?

*Hint:* What does disabled do exactly?

**Answer:** The `disabled` attribute excludes the field from form submission entirely. To still submit it while preventing edits, use `readonly` instead.

Disabled = invisible to the server. Readonly = visible to the server but locked for the user. This is a common source of bugs.

### Q27. [Hard] Create a search form that uses the GET method and sends a query parameter named 'q'.

*Hint:* Use method="GET" and input name="q".

**Answer:** ```

  Search:
  
  Go

```

GET forms put the data in the URL like `/search?q=hello`. This is how Google, YouTube, and most search boxes work.

### Q28. [Hard] Ananya's form has a file upload that never sends the file. Fix:

```

  
  Upload

```

*Hint:* The form needs a special attribute for file uploads.

**Answer:** ```

  
  Upload

```

File uploads require the form to have `enctype="multipart/form-data"`. Without it, the file is not encoded correctly and the server receives nothing.

## Mixed Questions

### Q1. [Easy] Which tag creates a multi-line text input?

*Hint:* It is not input.

**Answer:** ``

Textarea is specifically for multi-line text. You can size it with rows and cols or CSS width and height.

### Q2. [Easy] Create a simple form with a text input and submit button. Include a label.

*Hint:* Form, label, input, button.

**Answer:** ```

  Name:
  
  Submit

```

A minimal form with one labeled text field and a submit button.

### Q3. [Easy] What is the purpose of the action attribute on a form?

*Hint:* It is a URL.

**Answer:** It tells the browser where (which URL) to send the form data when submitted.

The server at that URL receives the form data and processes it. If omitted, the form is sent to the current page URL.

### Q4. [Easy] Why does clicking the label NOT focus the input?

```
Name:

```

*Hint:* The label and input need to be linked.

**Answer:** The label needs `for="name"` to link it to the input.

Without the `for` attribute on the label (matching the input's id), there is no connection between them.

### Q5. [Easy] Which two attributes let you set a number range on a number input?

*Hint:* They limit the smallest and largest values.

**Answer:** `min` and `max`

`min` is the smallest allowed value and `max` is the largest. Also works for type=range and type=date.

### Q6. [Medium] Create a form with three inputs: username (required, min 3 chars), email (required, must be valid), password (required, min 8 chars).

*Hint:* Use required, minlength, and type=email.

**Answer:** ```

  Username:
  

  Email:
  

  Password:
  

  Sign Up

```

HTML5 attributes handle all the validation for you — no JavaScript needed. The browser shows error messages automatically.

### Q7. [Medium] What is the difference between GET and POST methods?

*Hint:* Where does the data go in each case?

**Answer:** GET puts the data in the URL (visible). POST sends it hidden in the request body. POST is used for sensitive data like passwords.

Use GET for searches and filters (so the URL can be bookmarked). Use POST for anything that changes data or is sensitive.

### Q8. [Medium] The input shows plain text instead of dots:

```

```

*Hint:* Wrong type.

**Answer:** Change `type="text"` to `type="password"`.

Password fields must use type=password to mask the input as dots or stars.

### Q9. [Medium] Create a color picker input with a default of red (#ff0000).

*Hint:* type=color and value=#ff0000.

**Answer:** ```
Pick a colour:

```

type=color opens the browser's color picker. The value attribute sets the initial color.

### Q10. [Medium] What does the 'selected' attribute do on an option tag?

*Hint:* It affects which option shows by default.

**Answer:** It makes that option the default selected one in the dropdown.

Without selected, the browser shows the first option. Adding `selected` to a different option makes it the default.

### Q11. [Medium] Create a select dropdown of 3 cities with Mumbai pre-selected.

*Hint:* Use the selected attribute.

**Answer:** ```

  Delhi
  Mumbai
  Bangalore

```

Adding `selected` to the Mumbai option makes it the default when the page loads.

### Q12. [Medium] When filling a signup form, which autocomplete value should you use for a new password?

*Hint:* Not 'current-password'.

**Answer:** `autocomplete="new-password"`

This tells password managers to generate or store a new password instead of filling in an existing one.

### Q13. [Hard] The form lets users submit an empty username. Why?

```

```

*Hint:* Typo in an attribute name.

**Answer:** The attribute should be `required`, not `require`. Invalid attributes are ignored.

HTML silently ignores unknown attributes. A typo like `require` instead of `required` just turns off the validation completely.

### Q14. [Hard] Build a complete feedback form inside a styled card. Include name, email, a rating slider (1-5), a dropdown for 'Would you recommend us?' (Yes/No/Maybe), and a textarea for comments.

*Hint:* Use CSS in head to style the card.

**Answer:** ```
<!DOCTYPE html>

body { font-family: Arial; background: #f0f0f0; padding: 30px; }
.card { background: white; max-width: 450px; margin: auto; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
label { display: block; margin-top: 10px; font-weight: bold; }
input, select, textarea { width: 100%; padding: 8px; box-sizing: border-box; margin-top: 4px; }
button { margin-top: 15px; padding: 10px 20px; background: #2ecc71; color: white; border: none; cursor: pointer; }

  We Value Your Feedback
  
    Name:
    

    Email:
    

    Rating (1-5):
    

    Would you recommend us?
    
      Yes
      No
      Maybe
    

    Comments:
    

    Send
  

```

Uses all major form elements: text, email, range slider, select dropdown, and textarea. Styled as a card with CSS.

### Q15. [Hard] What happens if you include  in a form?

*Hint:* Hidden fields are invisible but still submitted.

**Answer:** The input is invisible on the page but its value ('abc123') is sent to the server as token=abc123 when the form is submitted.

Hidden inputs are useful for security tokens, user IDs, or version numbers — data the user should not see or change but that must reach the server.

## Multiple Choice Questions

### Q1. [Easy] Which tag wraps all the inputs in an HTML form?

**B is correct.** The `` tag wraps all form elements. It has action and method attributes that control where and how the data is sent.

### Q2. [Easy] Which input type hides what the user types?

**C is correct.** `type="password"` masks the characters as dots. `type="hidden"` is an invisible field that does not show on the page at all.

### Q3. [Easy] Which attribute makes a field mandatory in HTML5?

**B is correct.** The `required` attribute stops form submission if the field is empty.

### Q4. [Easy] Which tag creates a dropdown list?

**C is correct.** `` creates a dropdown, and each `` inside is one choice.

### Q5. [Easy] Which input type lets users pick multiple options from a group?

**B is correct.** Checkboxes allow multiple selections. Radio buttons only allow one selection from a group.

### Q6. [Easy] Which tag is used for multi-line text input?

**C is correct.** `` is for multi-line input like comments and bios.

### Q7. [Easy] What does the for attribute on a  do?

**B is correct.** `for="name"` links the label to the input with `id="name"`. Clicking the label then focuses the input.

### Q8. [Easy] Which button type submits the form?

**A is correct.** `type="submit"` is the default button type inside a form. Clicking it submits the form data to the action URL.

### Q9. [Easy] Which input type should you use for a phone number on mobile?

**C is correct.** `type="tel"` opens the numeric keyboard on mobile devices. There is no `type="phone"`.

### Q10. [Easy] Which attribute is used to set the URL that receives the form data?

**B is correct.** The `action` attribute specifies the URL where the form data will be sent on submit.

### Q11. [Easy] Which tag is used to give a form field group a visible title?

**B is correct.** `` goes inside `` to provide a title for the group.

### Q12. [Easy] Which attribute sets the maximum number of characters in a text input?

**C is correct.** `maxlength` limits text inputs to a maximum number of characters. `max` is for numbers and dates.

### Q13. [Medium] What is the difference between name and id on an input?

**B is correct.** Only `name` is sent to the server. `id` is for labels, CSS, and JavaScript. They are often both needed.

### Q14. [Medium] Which method sends form data in the URL?

**A is correct.** GET puts the data in the URL as query parameters (like `?q=hello`). POST sends it hidden in the request body.

### Q15. [Medium] Why should you use  instead of just placeholder?

**B is correct.** Placeholders disappear when the user starts typing, and screen readers often skip them. Labels are the accessible way to describe fields.

### Q16. [Medium] What does the disabled attribute do on a form input?

**B is correct.** Disabled stops the user from editing AND excludes the field from being submitted. Use `readonly` if you still want the value submitted.

### Q17. [Medium] Radio buttons in the same group must have the same:

**C is correct.** Radios sharing the same `name` become a group, so only one can be selected at a time. They should have different `value`s so the server knows which was picked.

### Q18. [Medium] Which input type would you use for a color picker?

**A is correct.** `type="color"` opens the browser's built-in color picker. The value is a hex color like #ff0000.

### Q19. [Medium] Which input type creates a slider?

**B is correct.** `type="range"` creates a slider. Use `min`, `max`, and `step` to control its range.

### Q20. [Medium] What is the correct form attribute for file uploads to work?

**C is correct.** Without `enctype="multipart/form-data"` on the form, file uploads do not work — the file gets dropped.

### Q21. [Medium] What will this pattern validate?

**B is correct.** `[0-9]` matches a digit, and `{4}` means exactly 4. Useful for PINs or OTPs.

### Q22. [Hard] What happens if an input has no name attribute when the form is submitted?

**C is correct.** Only inputs with a `name` attribute are sent to the server. Fields without name are silently ignored on submit.

### Q23. [Hard] What is the main reason to use fieldset and legend in a form?

**B is correct.** `` groups related fields visually and semantically. `` names the group. Screen readers announce the legend as context for all fields in the group.

### Q24. [Hard] Which autocomplete value is recommended for a new password field on a signup form?

**C is correct.** `new-password` tells browsers and password managers this is a new account creation, so they should offer to generate a strong password. Use `current-password` on login forms.

### Q25. [Hard] Which statement about type="email" is TRUE?

**C is correct.** `type="email"` only validates the basic format — it cannot check if the email exists or belongs to the user. Real verification requires sending an email from the server.

## Coding Challenges

### Challenge 1. Simple Contact Form

**Difficulty:** Easy

Build a complete HTML page with a contact form containing Name, Email, and Message fields, plus a Submit button. All fields should be required and have proper labels.

**Constraints:**

- Use proper labels with for/id. Required attribute on all fields. type=email for the email field. textarea for the message.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A form with Name, Email, Message, and Submit button. Browser validates on submit.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Contact Us</title>
  <style>
    body { font-family: Arial; padding: 30px; }
    label { display: block; margin-top: 10px; }
    input, textarea { width: 300px; padding: 6px; }
    button { margin-top: 15px; padding: 8px 16px; }
  </style>
</head>
<body>
  <h1>Contact Us</h1>
  <form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="msg">Message:</label>
    <textarea id="msg" name="message" rows="5" required></textarea>

    <button type="submit">Send</button>
  </form>
</body>
</html>
```

### Challenge 2. Login Page

**Difficulty:** Easy

Build a login form with Email and Password fields, a 'Remember me' checkbox, and a Log In button. Add correct autocomplete attributes.

**Constraints:**

- autocomplete="email" on the email field and autocomplete="current-password" on the password.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A login form with email, password, checkbox, and button.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Log In</title>
  <style>
    body { font-family: Arial; padding: 40px; }
    form { max-width: 320px; }
    label { display: block; margin-top: 10px; }
    input[type="email"], input[type="password"] { width: 100%; padding: 8px; box-sizing: border-box; }
    button { margin-top: 15px; padding: 10px; width: 100%; background: #4a90e2; color: white; border: none; }
  </style>
</head>
<body>
  <h1>Log In</h1>
  <form action="/login" method="POST">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required autocomplete="email">

    <label for="pwd">Password:</label>
    <input type="password" id="pwd" name="password" required autocomplete="current-password">

    <label><input type="checkbox" name="remember"> Remember me</label>

    <button type="submit">Log In</button>
  </form>
</body>
</html>
```

### Challenge 3. Survey with Radios and Checkboxes

**Difficulty:** Medium

Build a survey with: a 'How satisfied?' question with 5 radio options (Very Happy, Happy, Neutral, Sad, Very Sad), and a 'What did you like?' question with checkbox options (Food, Staff, Price, Speed, Cleanliness).

**Constraints:**

- Radios must share the same name. Use fieldset for grouping.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A survey form with one-choice and multi-choice questions.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Survey</title>
</head>
<body>
  <h1>Customer Survey</h1>
  <form>
    <fieldset>
      <legend>How satisfied are you?</legend>
      <label><input type="radio" name="satisfaction" value="5" required> Very Happy</label><br>
      <label><input type="radio" name="satisfaction" value="4"> Happy</label><br>
      <label><input type="radio" name="satisfaction" value="3"> Neutral</label><br>
      <label><input type="radio" name="satisfaction" value="2"> Sad</label><br>
      <label><input type="radio" name="satisfaction" value="1"> Very Sad</label>
    </fieldset>

    <fieldset>
      <legend>What did you like?</legend>
      <label><input type="checkbox" name="liked" value="food"> Food</label><br>
      <label><input type="checkbox" name="liked" value="staff"> Staff</label><br>
      <label><input type="checkbox" name="liked" value="price"> Price</label><br>
      <label><input type="checkbox" name="liked" value="speed"> Speed</label><br>
      <label><input type="checkbox" name="liked" value="clean"> Cleanliness</label>
    </fieldset>

    <button type="submit">Submit</button>
  </form>
</body>
</html>
```

### Challenge 4. Registration Form

**Difficulty:** Medium

Build a complete registration form with fields: full name (required, min 3 chars), email (required), password (required, min 8 chars), age (number, 10-100), gender (radio), country (select: India, USA, UK), and terms & conditions checkbox (required).

**Constraints:**

- All HTML5 validation. Proper labels. Fieldset for gender.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A full registration form with all validation working.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Register</title>
  <style>
    body { font-family: Arial; max-width: 500px; margin: auto; padding: 20px; }
    label { display: block; margin-top: 10px; }
    input, select { width: 100%; padding: 6px; box-sizing: border-box; }
    button { margin-top: 15px; padding: 10px 20px; background: #22c55e; color: white; border: none; }
  </style>
</head>
<body>
  <h1>Create Account</h1>
  <form action="/register" method="POST">
    <label for="n">Full Name:</label>
    <input type="text" id="n" name="name" required minlength="3">

    <label for="e">Email:</label>
    <input type="email" id="e" name="email" required>

    <label for="p">Password:</label>
    <input type="password" id="p" name="password" required minlength="8">

    <label for="a">Age:</label>
    <input type="number" id="a" name="age" min="10" max="100" required>

    <fieldset>
      <legend>Gender</legend>
      <label><input type="radio" name="gender" value="m" required> Male</label>
      <label><input type="radio" name="gender" value="f"> Female</label>
      <label><input type="radio" name="gender" value="o"> Other</label>
    </fieldset>

    <label for="c">Country:</label>
    <select id="c" name="country" required>
      <option value="">-- Select --</option>
      <option value="in">India</option>
      <option value="us">USA</option>
      <option value="uk">UK</option>
    </select>

    <label><input type="checkbox" name="terms" required> I agree to the terms</label>

    <button type="submit">Register</button>
  </form>
</body>
</html>
```

### Challenge 5. Pizza Order Form

**Difficulty:** Medium

Build a pizza order form with: size (radio: small, medium, large), crust (radio: thin, thick, stuffed), toppings (checkboxes: cheese, mushrooms, peppers, olives, onions), quantity (number 1-10), and delivery date (date).

**Constraints:**

- Use fieldsets for size, crust, and toppings.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A pizza order form with size, crust, toppings, quantity, and delivery date.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Order Pizza</title>
</head>
<body>
  <h1>Order Your Pizza</h1>
  <form>
    <fieldset>
      <legend>Size</legend>
      <label><input type="radio" name="size" value="s" required> Small</label>
      <label><input type="radio" name="size" value="m"> Medium</label>
      <label><input type="radio" name="size" value="l"> Large</label>
    </fieldset>

    <fieldset>
      <legend>Crust</legend>
      <label><input type="radio" name="crust" value="thin" required> Thin</label>
      <label><input type="radio" name="crust" value="thick"> Thick</label>
      <label><input type="radio" name="crust" value="stuffed"> Stuffed</label>
    </fieldset>

    <fieldset>
      <legend>Toppings</legend>
      <label><input type="checkbox" name="top" value="cheese"> Extra Cheese</label><br>
      <label><input type="checkbox" name="top" value="mush"> Mushrooms</label><br>
      <label><input type="checkbox" name="top" value="peppers"> Peppers</label><br>
      <label><input type="checkbox" name="top" value="olives"> Olives</label><br>
      <label><input type="checkbox" name="top" value="onions"> Onions</label>
    </fieldset>

    <label for="q">Quantity:</label>
    <input type="number" id="q" name="qty" min="1" max="10" value="1" required><br>

    <label for="d">Delivery Date:</label>
    <input type="date" id="d" name="delivery" required><br><br>

    <button type="submit">Place Order</button>
  </form>
</body>
</html>
```

### Challenge 6. Upload Profile with Hidden Field

**Difficulty:** Hard

Build a profile update form with: profile picture upload (image files only), display name, bio (textarea, 200 char max), and a hidden field sending userId=12345.

**Constraints:**

- File input with accept="image/*". Form must have enctype="multipart/form-data".

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A form with file upload, name, bio, and hidden userId field.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Update Profile</title>
</head>
<body>
  <h1>Update Your Profile</h1>
  <form action="/profile" method="POST" enctype="multipart/form-data">
    <input type="hidden" name="userId" value="12345">

    <label for="pic">Profile Picture:</label>
    <input type="file" id="pic" name="picture" accept="image/*" required><br>

    <label for="dname">Display Name:</label>
    <input type="text" id="dname" name="display" required><br>

    <label for="bio">Bio:</label>
    <textarea id="bio" name="bio" rows="4" maxlength="200" placeholder="Max 200 characters"></textarea><br><br>

    <button type="submit">Save</button>
  </form>
</body>
</html>
```

### Challenge 7. Event Registration with Validation

**Difficulty:** Hard

Build an event registration form with: name, email, phone (10 digits only, use pattern), event date (only future dates, use min), number of tickets (1-10), T-shirt size dropdown (S, M, L, XL), and dietary preference (radio: Veg, Non-Veg, Vegan).

**Constraints:**

- Phone must use pattern="[0-9]{10}". Event date has min attribute.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A form with phone pattern validation and future-date-only event date.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Event Registration</title>
  <style>
    body { font-family: Arial; padding: 20px; max-width: 500px; margin: auto; }
    label { display: block; margin-top: 10px; }
    input, select { width: 100%; padding: 6px; box-sizing: border-box; }
  </style>
</head>
<body>
  <h1>Register for Tech Fest 2026</h1>
  <form>
    <label for="n">Full Name:</label>
    <input type="text" id="n" name="name" required>

    <label for="e">Email:</label>
    <input type="email" id="e" name="email" required>

    <label for="p">Phone (10 digits):</label>
    <input type="tel" id="p" name="phone" pattern="[0-9]{10}" required title="Enter 10 digits">

    <label for="d">Event Date:</label>
    <input type="date" id="d" name="date" min="2026-05-01" required>

    <label for="t">Tickets:</label>
    <input type="number" id="t" name="tickets" min="1" max="10" value="1" required>

    <label for="s">T-Shirt Size:</label>
    <select id="s" name="size" required>
      <option value="">-- Select --</option>
      <option value="S">Small</option>
      <option value="M">Medium</option>
      <option value="L">Large</option>
      <option value="XL">Extra Large</option>
    </select>

    <fieldset>
      <legend>Meal Preference</legend>
      <label><input type="radio" name="meal" value="veg" required> Vegetarian</label>
      <label><input type="radio" name="meal" value="nonveg"> Non-Vegetarian</label>
      <label><input type="radio" name="meal" value="vegan"> Vegan</label>
    </fieldset>

    <button type="submit">Register</button>
  </form>
</body>
</html>
```

### Challenge 8. Advanced Settings Form

**Difficulty:** Hard

Build a user settings page with: username (readonly, pre-filled), email (required), theme color (color picker), notification volume (range slider 0-100), favorite language (select), dark mode (checkbox), and bio (textarea). Include proper sections with fieldsets.

**Constraints:**

- Use readonly on username. Group related fields with fieldsets.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
A complete settings form with color picker, slider, and many input types.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <title>Settings</title>
  <style>
    body { font-family: Arial; padding: 20px; max-width: 500px; margin: auto; }
    fieldset { margin-bottom: 15px; }
    label { display: block; margin-top: 8px; }
    input, select, textarea { width: 100%; padding: 6px; box-sizing: border-box; }
    input[type="color"] { width: 60px; }
    input[type="range"], input[type="checkbox"] { width: auto; }
  </style>
</head>
<body>
  <h1>Account Settings</h1>
  <form action="/settings" method="POST">
    <fieldset>
      <legend>Profile</legend>
      <label for="u">Username:</label>
      <input type="text" id="u" name="username" value="ananya_codes" readonly>

      <label for="e">Email:</label>
      <input type="email" id="e" name="email" value="ananya@example.com" required>

      <label for="b">Bio:</label>
      <textarea id="b" name="bio" rows="3" maxlength="150"></textarea>
    </fieldset>

    <fieldset>
      <legend>Preferences</legend>
      <label for="col">Theme Colour:</label>
      <input type="color" id="col" name="theme" value="#4a90e2">

      <label for="vol">Notification Volume:</label>
      <input type="range" id="vol" name="volume" min="0" max="100" value="70">

      <label for="lang">Language:</label>
      <select id="lang" name="language">
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="ta">Tamil</option>
        <option value="te">Telugu</option>
      </select>

      <label><input type="checkbox" name="darkmode"> Enable Dark Mode</label>
    </fieldset>

    <button type="submit">Save Changes</button>
  </form>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/forms-and-inputs/*
