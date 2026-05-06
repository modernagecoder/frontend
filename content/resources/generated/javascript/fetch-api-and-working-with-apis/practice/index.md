---
title: "Practice: Fetch API - Getting Data from the Internet"
description: "50 practice problems for Fetch API - Getting Data from the Internet in JavaScript"
slug: fetch-api-and-working-with-apis-practice
canonical: https://learn.modernagecoders.com/resources/javascript/fetch-api-and-working-with-apis/practice/
category: "JavaScript"
---
# Practice: Fetch API - Getting Data from the Internet

**Total questions:** 50

## Topic-Specific Questions

### Q1. [Easy] What does `response.ok` return when the server responds with status 200?

*Hint:* ok is true for status codes 200-299.

**Answer:** `true`

`response.ok` is true when the HTTP status code is in the 200-299 range (success). 200 means 'OK', so response.ok is true.

### Q2. [Easy] What does `response.ok` return when the server responds with status 404?

*Hint:* 404 means Not Found.

**Answer:** `false`

404 is not in the 200-299 range, so `response.ok` is false. The request completed, but the resource was not found.

### Q3. [Easy] What is the output?

```
const obj = { name: "Aarav", age: 16 };
const json = JSON.stringify(obj);
console.log(typeof json);
console.log(json);
```

*Hint:* JSON.stringify converts an object to a JSON string.

**Answer:** `string`
`{"name":"Aarav","age":16}`

JSON.stringify converts a JavaScript object to a JSON string. typeof returns 'string'. The output is a string with no spaces.

### Q4. [Easy] What is the output?

```
const json = '{"name":"Priya","score":95}';
const obj = JSON.parse(json);
console.log(obj.name);
console.log(obj.score + 5);
```

*Hint:* JSON.parse converts a JSON string to a JavaScript object.

**Answer:** `Priya`
`100`

JSON.parse converts the JSON string to an object. obj.name is 'Priya'. obj.score is the number 95, so 95 + 5 = 100.

### Q5. [Easy] What is the output?

```
const users = [
  { name: "Aarav", city: "Delhi" },
  { name: "Priya", city: "Mumbai" }
];

users.forEach(function(user) {
  console.log(user.name + " from " + user.city);
});
```

*Hint:* forEach iterates through each user object.

**Answer:** `Aarav from Delhi`
`Priya from Mumbai`

This is the pattern used to display API data. forEach iterates the array, and each user object's properties are accessed with dot notation.

### Q6. [Easy] Why do we need to call `response.json()` after `fetch()`? Why does fetch not give us the JSON directly?

*Hint:* The response body can be different formats.

**Answer:** The fetch Response object contains the HTTP response metadata (status, headers) and a body stream. The body could be JSON, text, a blob (image), or other formats. `response.json()` reads the body stream and parses it as JSON. `response.text()` reads it as plain text. You choose the parsing method based on what the API returns.

The two-step process (fetch then json) gives you flexibility. You can check the status before parsing, handle different response formats, and avoid wasting resources parsing a large error response.

### Q7. [Medium] What is the output?

```
async function test() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  console.log(typeof response);
  console.log(response.ok);
  console.log(response.status);
}
test();
```

*Hint:* fetch returns a Response object. jsonplaceholder returns 200 for valid IDs.

**Answer:** `object`
`true`
`200`

response is a Response object (typeof: 'object'). Status 200 means success, so ok is true and status is 200.

### Q8. [Medium] What is the output?

```
const data = [
  { id: 1, name: "Post 1" },
  { id: 2, name: "Post 2" },
  { id: 3, name: "Post 3" }
];

const filtered = data.filter(item => item.id > 1);
console.log(filtered.length);
console.log(filtered.map(item => item.name));
```

*Hint:* filter keeps items where id > 1. map extracts names.

**Answer:** `2`
`["Post 2", "Post 3"]`

filter keeps items with id > 1 (posts 2 and 3). length is 2. map extracts the name property from each.

### Q9. [Medium] What is CORS and why does it block some API requests?

*Hint:* Think about security between different websites.

**Answer:** CORS (Cross-Origin Resource Sharing) is a browser security feature that prevents web pages from making requests to a different domain unless the server explicitly allows it. When your page at mysite.com tries to fetch from api.other.com, the browser checks if the API server includes the Access-Control-Allow-Origin header. If not, the request is blocked. CORS prevents malicious websites from making requests to APIs on behalf of unsuspecting users.

CORS only applies in browsers. Server-to-server requests have no CORS restrictions. That is why production apps often route API calls through their own backend server.

### Q10. [Hard] What is the output?

```
async function fetchTwo() {
  const [users, posts] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()),
    fetch("https://jsonplaceholder.typicode.com/posts").then(r => r.json())
  ]);

  console.log("Users:", users.length);
  console.log("Posts:", posts.length);
}

fetchTwo();
```

*Hint:* jsonplaceholder has 10 users and 100 posts.

**Answer:** `Users: 10`
`Posts: 100`

Promise.all runs both fetch requests in parallel. jsonplaceholder returns 10 users and 100 posts. Destructuring assigns them to separate variables.

### Q11. [Hard] Why is it important to check `response.ok` before calling `response.json()`?

*Hint:* What happens if the server returns a 404 or 500 error?

**Answer:** If the server returns a 404 or 500, the response body might be an HTML error page, not JSON. Calling `response.json()` on HTML will throw a SyntaxError because it is not valid JSON. Also, even if the error response IS JSON (some APIs return JSON error objects), you should handle it differently from success data. Checking `response.ok` first lets you throw a meaningful error before attempting to parse.

fetch considers any response (even 404) as a 'successful' network request. The application must decide what counts as success. The response.ok check is your guard against processing error responses as if they were valid data.

### Q12. [Medium] What is the output?

```
const obj = { name: "Aarav", age: 16 };
const json = JSON.stringify(obj);
const parsed = JSON.parse(json);
console.log(parsed.name);
console.log(obj === parsed);
```

*Hint:* JSON.stringify then JSON.parse creates a new object.

**Answer:** `Aarav`
`false`

stringify converts to string, parse creates a NEW object. The values are the same but they are different objects in memory, so === returns false.

### Q13. [Easy] What is the output?

```
const data = [1, 2, 3, 4, 5];
const filtered = data.filter(n => n > 3);
console.log(filtered);
```

*Hint:* filter keeps elements where the condition is true.

**Answer:** `[4, 5]`

filter tests each element: 1>3 false, 2>3 false, 3>3 false, 4>3 true, 5>3 true. Only 4 and 5 pass. This pattern is used to filter API response data.

## Mixed Questions

### Q1. [Easy] What is the output?

```
const arr = [10, 20, 30];
const doubled = arr.map(x => x * 2);
console.log(doubled);
```

*Hint:* map creates a new array by applying a function to each element.

**Answer:** `[20, 40, 60]`

map multiplies each element by 2: 10*2=20, 20*2=40, 30*2=60. This pattern is used to transform API data before displaying it.

### Q2. [Easy] What is the output?

```
const user = { name: "Diya", address: { city: "Pune" } };
console.log(user.address.city);
console.log(user.phone?.number ?? "N/A");
```

*Hint:* Optional chaining and nullish coalescing for missing properties.

**Answer:** `Pune`
`N/A`

user.address.city exists: 'Pune'. user.phone is undefined, ?. returns undefined, ?? replaces with 'N/A'.

### Q3. [Medium] What is the output?

```
async function getData() {
  return { name: "Aarav" };
}

const result = getData();
console.log(result);
console.log(result.name);
```

*Hint:* async functions always return a Promise.

**Answer:** `Promise { { name: 'Aarav' } }`
`undefined`

getData is async, so it returns a Promise, not the object directly. result is a Promise, and Promises do not have a .name property. You need await or .then to get the value.

### Q4. [Medium] What is the output?

```
const users = [
  { name: "Aarav", active: true },
  { name: "Priya", active: false },
  { name: "Rohan", active: true }
];

const active = users.filter(u => u.active).map(u => u.name);
console.log(active);
```

*Hint:* filter keeps active users, map extracts names.

**Answer:** `["Aarav", "Rohan"]`

filter keeps users where active is true (Aarav, Rohan). map extracts their names. This chaining pattern is very common when processing API data.

### Q5. [Medium] What is the output?

```
try {
  const obj = JSON.parse("not json");
} catch (error) {
  console.log(error.name);
}

try {
  const obj = JSON.parse('{"name": "Aarav"}');
  console.log(obj.name);
} catch (error) {
  console.log("Error");
}
```

*Hint:* First parse fails (SyntaxError). Second parse succeeds.

**Answer:** `SyntaxError`
`Aarav`

First: 'not json' is invalid JSON, throws SyntaxError. Second: valid JSON, parses to object with name 'Aarav'.

### Q6. [Hard] What is the output?

```
async function fetchUser() {
  // Simulating fetch
  return { name: "Aarav", scores: [85, 92, 78] };
}

async function main() {
  const user = await fetchUser();
  const { name, scores } = user;
  const avg = scores.reduce((sum, s) => sum + s, 0) / scores.length;
  console.log(name + ": " + avg.toFixed(1));
}

main();
```

*Hint:* Destructure the user, then calculate average of scores.

**Answer:** `Aarav: 85.0`

fetchUser returns user data. Destructuring extracts name and scores. Average: (85+92+78)/3 = 255/3 = 85. toFixed(1) gives '85.0'.

### Q7. [Hard] What is the output?

```
async function fetchWithRetry(url, retries) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("HTTP " + response.status);
      return await response.json();
    } catch (error) {
      console.log("Attempt " + (i + 1) + " failed: " + error.message);
      if (i === retries - 1) throw error;
    }
  }
}

// Assuming all 3 attempts fail with 404
fetchWithRetry("https://jsonplaceholder.typicode.com/users/9999", 3)
  .catch(e => console.log("Final: " + e.message));
```

*Hint:* User 9999 does not exist (404). All 3 attempts will fail.

**Answer:** `Attempt 1 failed: HTTP 404`
`Attempt 2 failed: HTTP 404`
`Attempt 3 failed: HTTP 404`
`Final: HTTP 404`

Each attempt fetches user 9999 (returns 404). response.ok is false, so Error is thrown. After 3 failures, the last error is re-thrown and caught by .catch.

### Q8. [Medium] What is the difference between `response.json()` and `JSON.parse()`?

*Hint:* One works with a Response stream, the other with a string.

**Answer:** `response.json()` reads the Response body stream and parses it as JSON. It returns a Promise because reading the stream is async. `JSON.parse()` takes a plain string and parses it synchronously. You cannot call JSON.parse on a Response object, and you cannot call .json() on a string.

response.json() = read stream + parse (async). JSON.parse() = parse string (sync). They both produce JavaScript objects from JSON, but they work with different inputs.

### Q9. [Hard] When building a search feature that fetches from an API on every keystroke, what problems can occur and how do you solve them?

*Hint:* Think about too many requests and out-of-order responses.

**Answer:** Two main problems: (1) Too many requests: typing 'Delhi' sends 5 requests (D, De, Del, Delh, Delhi). Solution: debouncing -- wait 300-500ms after the last keystroke before fetching. (2) Out-of-order responses: the request for 'De' might return after the request for 'Delhi', replacing correct results with stale ones. Solution: store the latest search term and ignore responses for outdated queries, or use AbortController to cancel previous requests.

Debouncing reduces server load and improves performance. Handling out-of-order responses prevents the UI from showing stale data. Both are essential patterns for production search features.

## Multiple Choice Questions

### Q1. [Easy] What does the Fetch API return?

**Answer:** B

**B is correct.** `fetch()` returns a Promise. That Promise resolves to a Response object. You then call `response.json()` to get the actual data.

### Q2. [Easy] Which method parses a fetch Response body as JSON?

**Answer:** C

**C is correct.** `response.json()` reads the response body and parses it as JSON. It returns a Promise. Option D does not work because Response is not a string.

### Q3. [Easy] What does API stand for?

**Answer:** B

**B is correct.** API stands for Application Programming Interface. It defines how different software systems communicate with each other.

### Q4. [Easy] What format do most web APIs return data in?

**Answer:** C

**C is correct.** JSON (JavaScript Object Notation) is the standard data format for web APIs. It is lightweight, human-readable, and natively supported by JavaScript.

### Q5. [Easy] What status code means 'success' in HTTP?

**Answer:** B

**B is correct.** 200 means 'OK' (success). 100 is informational. 404 is Not Found. 500 is Internal Server Error.

### Q6. [Medium] Does `fetch()` reject its Promise when the server returns a 404 error?

**Answer:** B

**B is correct.** fetch only rejects on network failures (server unreachable, no internet). HTTP error responses (404, 500) still resolve the Promise. You must check `response.ok` to detect HTTP errors.

### Q7. [Medium] What must you include in the body of a POST request when sending JSON data?

**Answer:** B

**B is correct.** The body must be a string. `JSON.stringify()` converts a JavaScript object to a JSON string. Sending the object directly would result in '[object Object]'.

### Q8. [Medium] What header tells the server the format of the data you are sending?

**Answer:** C

**C is correct.** `Content-Type: application/json` tells the server that the request body is JSON. Accept tells the server what format you want in the response.

### Q9. [Medium] What is the purpose of a loading state in a fetch-based UI?

**Answer:** B

**B is correct.** Loading states (spinners, 'Loading...' text) tell users that something is happening. Without them, users might think the app is frozen or click buttons multiple times.

### Q10. [Hard] What is CORS?

**Answer:** C

**C is correct.** CORS (Cross-Origin Resource Sharing) prevents web pages from making requests to different domains unless the server explicitly allows it. It protects users from malicious cross-site requests.

### Q11. [Hard] Why should you use `Promise.all` when fetching multiple independent API endpoints?

**Answer:** B

**B is correct.** Promise.all starts all requests simultaneously. Five 200ms requests take ~200ms total with Promise.all, but ~1000ms if awaited sequentially.

### Q12. [Hard] What does `response.status` contain?

**Answer:** B

**B is correct.** `response.status` is the numeric HTTP status code. 200 = OK, 201 = Created, 404 = Not Found, 500 = Server Error. `response.ok` is the boolean (true for 200-299).

### Q13. [Hard] What is debouncing in the context of a search feature?

**Answer:** B

**B is correct.** Debouncing delays the API call until the user stops typing (e.g., 300ms after the last keystroke). This prevents sending a request for every single character typed.

### Q14. [Easy] What does `JSON.stringify()` do?

**Answer:** B

**B is correct.** `JSON.stringify` converts a JavaScript object or array into a JSON-formatted string. This is needed when sending data in a POST request body.

### Q15. [Medium] What HTTP method is used to send new data to a server?

**Answer:** B

**B is correct.** POST is used to send data to a server to create a new resource. GET is for retrieving data. FETCH and SEND are not HTTP methods.

### Q16. [Hard] What does `response.json()` return?

**Answer:** C

**C is correct.** `response.json()` reads the response body stream and parses it as JSON. Because reading the stream is asynchronous, it returns a Promise. You need `await response.json()`.

### Q17. [Easy] What status code means 'Not Found'?

**Answer:** C

**C is correct.** 404 means the requested resource was not found on the server. 200 is success, 301 is redirect, 500 is server error.

### Q18. [Medium] What is `response.statusText` for a 404 response?

**Answer:** B

**B is correct.** `response.statusText` contains the human-readable status message. For 404, it is 'Not Found'. For 200, it is 'OK'. For 500, it is 'Internal Server Error'.

### Q19. [Hard] Why might you get a CORS error when fetching from `localhost` to an external API?

**Answer:** B

**B is correct.** CORS errors occur when the API server does not allow your origin (like http://localhost:3000). The server must include the `Access-Control-Allow-Origin` header to permit cross-origin requests.

### Q20. [Easy] What is the default HTTP method when you call `fetch(url)` without options?

**Answer:** C

**C is correct.** By default, fetch makes a GET request. You must explicitly set `method: 'POST'` in the options to make a POST request.

## Coding Challenges

### Challenge 1. Fetch and Display a User

**Difficulty:** Easy

Write an async function displayUser(id) that fetches a user from jsonplaceholder.typicode.com/users/{id} and logs their name, email, and city.

**Constraints:**

- Use async/await. Handle errors with try-catch.

**Sample input:**

```
displayUser(1)
```

**Sample output:**

```
Name: Leanne Graham
Email: Sincere@april.biz
City: Gwenborough
```

**Solution:**

```javascript
async function displayUser(id) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    if (!response.ok) throw new Error('User not found');
    const user = await response.json();
    console.log('Name:', user.name);
    console.log('Email:', user.email);
    console.log('City:', user.address.city);
  } catch (error) {
    console.log('Error:', error.message);
  }
}

displayUser(1);
```

### Challenge 2. Fetch Multiple Users

**Difficulty:** Easy

Write an async function getUserNames(ids) that takes an array of user IDs, fetches all users in parallel using Promise.all, and returns an array of their names.

**Constraints:**

- Use Promise.all for parallel fetching. Return the names array.

**Sample input:**

```
[1, 2, 3]
```

**Sample output:**

```
["Leanne Graham", "Ervin Howell", "Clementine Bauch"]
```

**Solution:**

```javascript
async function getUserNames(ids) {
  const promises = ids.map(id =>
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
      .then(r => r.json())
      .then(user => user.name)
  );
  return Promise.all(promises);
}

getUserNames([1, 2, 3]).then(names => console.log(names));
```

### Challenge 3. Create a Post via API

**Difficulty:** Medium

Write an async function createPost(title, body) that sends a POST request to jsonplaceholder.typicode.com/posts with the title, body, and userId: 1. Log the created post's id and title.

**Constraints:**

- Use method POST, Content-Type header, and JSON.stringify for the body.

**Sample input:**

```
createPost('My Post', 'Hello world')
```

**Sample output:**

```
Created post #101: My Post
```

**Solution:**

```javascript
async function createPost(title, body) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body, userId: 1 })
    });
    if (!response.ok) throw new Error('Failed to create');
    const post = await response.json();
    console.log('Created post #' + post.id + ': ' + post.title);
  } catch (error) {
    console.log('Error:', error.message);
  }
}

createPost('My Post', 'Hello world');
```

### Challenge 4. Safe Fetch Wrapper

**Difficulty:** Medium

Write an async function safeFetch(url) that wraps fetch with proper error handling. It should return { ok: true, data } on success and { ok: false, error } on failure. Handle both network errors and HTTP errors.

**Constraints:**

- Check response.ok. Use try-catch. Return a consistent object shape.

**Sample input:**

```
safeFetch('https://jsonplaceholder.typicode.com/users/1')
```

**Sample output:**

```
{ ok: true, data: { id: 1, name: 'Leanne Graham', ... } }
```

**Solution:**

```javascript
async function safeFetch(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { ok: false, error: 'HTTP ' + response.status + ': ' + response.statusText };
    }
    const data = await response.json();
    return { ok: true, data };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}

async function demo() {
  const r1 = await safeFetch('https://jsonplaceholder.typicode.com/users/1');
  console.log(r1.ok ? r1.data.name : r1.error);

  const r2 = await safeFetch('https://jsonplaceholder.typicode.com/users/9999');
  console.log(r2.ok ? r2.data.name : r2.error);
}
demo();
```

### Challenge 5. User Card Page with Loading and Error States

**Difficulty:** Medium

Build a complete page that fetches all users from jsonplaceholder.typicode.com/users and displays them as cards. Show 'Loading...' while fetching, user cards on success, and an error message on failure. Use proper error handling.

**Constraints:**

- Show three states: loading, success, error. Use async/await and DOM manipulation.

**Sample input:**

```
Page loads automatically
```

**Sample output:**

```
Loading... -> 10 user cards with name, email, and city
```

**Solution:**

```javascript
// HTML: <div id="app"></div>

async function loadUsers() {
  const app = document.getElementById('app');
  app.innerHTML = '<p>Loading users...</p>';

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Failed: HTTP ' + response.status);
    const users = await response.json();

    app.innerHTML = '';
    users.forEach(user => {
      const card = document.createElement('div');
      card.style.cssText = 'background:#16213e;padding:16px;margin:8px;border-radius:8px;';
      card.innerHTML = '<h3>' + user.name + '</h3>' +
        '<p>Email: ' + user.email + '</p>' +
        '<p>City: ' + user.address.city + '</p>';
      app.appendChild(card);
    });
  } catch (error) {
    app.innerHTML = '<p style="color:#ef4444;">Error: ' + error.message + '</p>';
  }
}

loadUsers();
```

### Challenge 6. Search Posts by Keyword

**Difficulty:** Hard

Fetch all posts from jsonplaceholder.typicode.com/posts. Write a function searchPosts(keyword) that filters posts where the title or body includes the keyword (case-insensitive). Display matching results.

**Constraints:**

- Fetch all posts once, then filter client-side. Use includes() for searching. Case-insensitive.

**Sample input:**

```
searchPosts('sunt')
```

**Sample output:**

```
Found 5 posts containing 'sunt'
```

**Solution:**

```javascript
let allPosts = [];

async function loadPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  allPosts = await response.json();
  console.log('Loaded', allPosts.length, 'posts');
}

function searchPosts(keyword) {
  const kw = keyword.toLowerCase();
  const results = allPosts.filter(post =>
    post.title.toLowerCase().includes(kw) ||
    post.body.toLowerCase().includes(kw)
  );

  console.log('Found ' + results.length + " posts containing '" + keyword + "'");
  results.forEach(post => console.log(' - ' + post.title));
  return results;
}

async function main() {
  await loadPosts();
  searchPosts('sunt');
}
main();
```

### Challenge 7. User Detail Page with Related Posts

**Difficulty:** Hard

Fetch a user by ID and their posts in parallel (both from jsonplaceholder). Display the user's name and email, followed by a list of their post titles.

**Constraints:**

- Use Promise.all for parallel fetching. Users at /users/{id}, posts at /posts?userId={id}.

**Sample input:**

```
loadUserPage(1)
```

**Sample output:**

```
User: Leanne Graham (Sincere@april.biz)
Posts (10):
- sunt aut facere...
- qui est esse...
```

**Solution:**

```javascript
async function loadUserPage(userId) {
  try {
    const [user, posts] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users/' + userId).then(r => r.json()),
      fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId).then(r => r.json())
    ]);

    console.log('User:', user.name, '(' + user.email + ')');
    console.log('Posts (' + posts.length + '):');
    posts.forEach(post => console.log(' - ' + post.title));
  } catch (error) {
    console.log('Error:', error.message);
  }
}

loadUserPage(1);
```

### Challenge 8. API Data Cache

**Difficulty:** Hard

Build a cachedFetch(url) function that caches responses. If the same URL is requested again, return the cached data instead of making a new network request. Log whether the data came from cache or network.

**Constraints:**

- Use a Map or object as cache. Return cached data if available.

**Sample input:**

```
cachedFetch('/users/1') twice
```

**Sample output:**

```
First call: [network] fetched /users/1
Second call: [cache] returned /users/1
```

**Solution:**

```javascript
const cache = new Map();

async function cachedFetch(url) {
  if (cache.has(url)) {
    console.log('[cache] returned', url);
    return cache.get(url);
  }

  const response = await fetch(url);
  if (!response.ok) throw new Error('HTTP ' + response.status);
  const data = await response.json();

  cache.set(url, data);
  console.log('[network] fetched', url);
  return data;
}

async function demo() {
  const user1 = await cachedFetch('https://jsonplaceholder.typicode.com/users/1');
  console.log(user1.name);

  const user1again = await cachedFetch('https://jsonplaceholder.typicode.com/users/1');
  console.log(user1again.name);

  console.log('Cache size:', cache.size);
}
demo();
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/fetch-api-and-working-with-apis/*
