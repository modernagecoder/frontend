---
title: "Fetch API in JavaScript - GET, POST, JSON, Error Handling, CORS | Modern Age Coders"
description: "Learn the JavaScript Fetch API: GET and POST requests, handling JSON responses, async/await with fetch, error handling, loading states, CORS, and building apps with real APIs. 56+ practice questions and projects."
slug: fetch-api-and-working-with-apis
canonical: https://learn.modernagecoders.com/resources/javascript/fetch-api-and-working-with-apis/
category: "JavaScript"
keywords: ["javascript fetch api", "fetch json javascript", "get request javascript", "post request javascript", "async await fetch", "javascript api tutorial", "cors javascript", "fetch error handling", "jsonplaceholder", "javascript rest api"]
---
# Fetch API - Getting Data from the Internet

**Difficulty:** Advanced  
**Reading time:** 50 min  
**Chapter:** 20  
**Practice questions:** 50

## What Is the Fetch API?

The **Fetch API** is JavaScript's built-in way to make HTTP requests -- to get data from servers, send data to servers, and communicate with web APIs. When you use a weather app, a movie search, or any site that loads data without refreshing the page, fetch (or something like it) is working behind the scenes.

Think of an API like a restaurant. You (the browser) are the customer. The waiter (the API) takes your order (request) to the kitchen (server) and brings back your food (response/data). You do not need to know how the kitchen works -- you just need to know what to order.

```
// Basic fetch: get data from an API
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(function(response) {
    return response.json(); // Parse the JSON
  })
  .then(function(user) {
    console.log(user.name);  // "Leanne Graham"
    console.log(user.email); // "Sincere@april.biz"
  });
```

That is it. Three lines to get data from anywhere on the internet and display it on your page.

## Why Learn the Fetch API?

### 1. Every Modern Web App Fetches Data

Instagram loads posts from an API. Google Maps loads map tiles from an API. Swiggy loads restaurant menus from an API. If a web app shows data that changes, it is almost certainly using fetch or a similar tool. Learning fetch lets you build the same kind of apps.

### 2. It Connects Your Frontend to the World

Without fetch, your web page can only display static content that is hardcoded in the HTML. With fetch, you can pull in weather data, news articles, user profiles, movie databases, and thousands of other data sources. Your skills go from building static pages to building real applications.

### 3. It Ties Together Everything You Have Learned

Fetch uses Promises and async/await (Chapter 19), JSON and objects (Chapter 9), DOM manipulation to display data (Chapters 11-13), and error handling (Chapter 18). It is the capstone skill that brings everything together.

### 4. It Is the Foundation for Full-Stack Development

Whether you go into React, Angular, Node.js, or any other technology, making HTTP requests is fundamental. The patterns you learn with fetch apply everywhere.

## Detailed Explanation

### 1. How APIs Work

An API (Application Programming Interface) is a URL that returns data instead of a web page. When you visit a normal website, the server returns HTML. When you call an API, the server returns **JSON** (JavaScript Object Notation) -- structured data that JavaScript can easily work with.

```
// Normal website URL: returns HTML
// https://example.com/about  -> About us...

// API URL: returns JSON data
// https://jsonplaceholder.typicode.com/users/1
// -> { "id": 1, "name": "Leanne Graham", "email": "Sincere@april.biz" }
```

Free APIs you can practice with:

- `jsonplaceholder.typicode.com` -- fake users, posts, comments
- `api.openweathermap.org` -- weather data (needs free API key)
- `pokeapi.co/api/v2` -- Pokemon data
- `restcountries.com/v3.1` -- country information

### 2. fetch() Basics (GET Request)

The `fetch()` function takes a URL and returns a Promise that resolves to a Response object:

```
// fetch returns a Promise
const promise = fetch("https://jsonplaceholder.typicode.com/users/1");

// The Promise resolves to a Response object
promise.then(function(response) {
  console.log(response.status);  // 200
  console.log(response.ok);      // true
  console.log(response.headers); // Headers object

  // To get the actual data, call .json()
  return response.json(); // This is also a Promise!
}).then(function(data) {
  console.log(data); // The actual JSON data
});
```

Important: `fetch()` resolves the Promise as soon as the server responds, even if the response is an error (like 404). You need to check `response.ok` to know if the request was actually successful.

### 3. Using async/await with fetch

async/await makes fetch code much cleaner:

```
async function getUser(id) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const user = await response.json();
  return user;
}

async function main() {
  const user = await getUser(1);
  console.log(user.name);  // "Leanne Graham"
  console.log(user.email); // "Sincere@april.biz"
}

main();
```

### 4. Handling JSON Response

Most APIs return JSON. The `response.json()` method parses it:

```
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json(); // Parse JSON to JavaScript array

  console.log(users.length); // 10
  users.forEach(function(user) {
    console.log(user.name + " - " + user.email);
  });
}

getUsers();
```

### 5. Error Handling

There are two types of errors with fetch:

- **Network errors**: no internet, server down, DNS failure. These cause fetch() to reject.
- **HTTP errors**: server responds with 404, 500, etc. Fetch does NOT reject for these -- you must check response.ok.

```
async function fetchSafely(url) {
  try {
    const response = await fetch(url);

    // Check for HTTP errors (404, 500, etc.)
    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Catches both network errors and our thrown HTTP errors
    console.log("Fetch failed:", error.message);
    return null;
  }
}

// Usage
const user = await fetchSafely("https://jsonplaceholder.typicode.com/users/1");
const notFound = await fetchSafely("https://jsonplaceholder.typicode.com/users/9999");
```

### 6. Loading States

While data is being fetched, show a loading indicator. Hide it when the data arrives:

```
async function loadUsers() {
  const container = document.getElementById("users");
  container.innerHTML = "

Loading...

";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Failed to load users");
    const users = await response.json();

    container.innerHTML = ""; // Clear loading message
    users.forEach(function(user) {
      const card = document.createElement("div");
      card.innerHTML = "

### " + user.name + "

" + user.email + "

";
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = "

Error: " + error.message + "

";
  }
}
```

### 7. POST Requests (Sending Data)

To send data to a server, use a POST request with a body:

```
async function createPost(title, body, userId) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      body: body,
      userId: userId
    })
  });

  const result = await response.json();
  console.log("Created post:", result);
  return result;
}

createPost("My First Post", "Hello from JavaScript!", 1);
```

Key parts of a POST request:

- `method: "POST"` -- tells the server we are sending data
- `headers: { "Content-Type": "application/json" }` -- tells the server the data format
- `body: JSON.stringify(data)` -- converts the JavaScript object to a JSON string

### 8. CORS (Cross-Origin Resource Sharing)

When your website at `mysite.com` tries to fetch data from `api.other.com`, the browser checks if the API server allows it. This is called **CORS**.

```
// This might fail with a CORS error:
fetch("https://some-api-without-cors.com/data")
  .then(response => response.json())
  .catch(error => console.log("CORS error:", error));

// Error in console:
// Access to fetch at 'https://...' from origin 'http://localhost'
// has been blocked by CORS policy
```

CORS is a **security feature**. The API server must include the header `Access-Control-Allow-Origin` to allow requests from your domain. Public APIs like jsonplaceholder allow all origins. Private APIs may not.

If you hit a CORS error:

- Check if the API supports CORS (read its documentation)
- Use an API that supports CORS for practice
- In production, your backend server makes the API call (server-to-server has no CORS)

### 9. Displaying API Data on a Page

```
// Fetch users and display as cards
async function displayUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  const container = document.getElementById("users");

  users.forEach(function(user) {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
      

### ${user.name}

      

Email: ${user.email}

      

Phone: ${user.phone}

      

City: ${user.address.city}

    `;
    container.appendChild(card);
  });
}
```

## Code Examples

### Complete User Card Display from API

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>User Cards</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #1a1a2e; color: #e2e8f0; padding: 20px; }
    h1 { text-align: center; margin-bottom: 24px; color: #a855f7; }
    #status { text-align: center; padding: 20px; color: #94a3b8; }
    .cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; max-width: 900px; margin: 0 auto; }
    .card { background: #16213e; border-radius: 12px; padding: 20px; border: 1px solid #1e3a5f; }
    .card h3 { color: #a855f7; margin-bottom: 8px; }
    .card p { color: #94a3b8; margin-bottom: 4px; font-size: 14px; }
    .error { color: #ef4444; }
  </style>
</head>
<body>
  <h1>Users from API</h1>
  <div id="status">Loading...</div>
  <div class="cards" id="cards"></div>

  <script>
    async function loadUsers() {
      const status = document.getElementById("status");
      const cards = document.getElementById("cards");

      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("HTTP " + response.status);
        const users = await response.json();

        status.style.display = "none";
        users.forEach(function(user) {
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = "<h3>" + user.name + "</h3>" +
            "<p>Email: " + user.email + "</p>" +
            "<p>Phone: " + user.phone + "</p>" +
            "<p>City: " + user.address.city + "</p>" +
            "<p>Company: " + user.company.name + "</p>";
          cards.appendChild(card);
        });
      } catch (error) {
        status.className = "error";
        status.textContent = "Failed to load users: " + error.message;
      }
    }

    loadUsers();
  </script>
</body>
</html>
```

This fetches 10 users from jsonplaceholder.typicode.com and displays them as cards. It shows 'Loading...' while fetching, handles errors with a red message, and uses `response.ok` to catch HTTP errors. The cards use CSS Grid for responsive layout.

**Output:**

```
A grid of 10 user cards, each showing name, email, phone, city, and company.
```

### Fetch with Async/Await and Error Handling

```javascript
async function fetchJSON(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("HTTP error " + response.status + ": " + response.statusText);
    }

    const data = await response.json();
    return { success: true, data: data };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function demo() {
  // Successful request
  const result1 = await fetchJSON("https://jsonplaceholder.typicode.com/posts/1");
  if (result1.success) {
    console.log("Title:", result1.data.title);
  }

  // 404 error
  const result2 = await fetchJSON("https://jsonplaceholder.typicode.com/posts/99999");
  console.log("404 result:", result2);

  // Network error (bad URL)
  const result3 = await fetchJSON("https://this-does-not-exist.example.com");
  console.log("Network error:", result3);
}

demo();
```

The `fetchJSON` function wraps fetch with proper error handling. It checks `response.ok` for HTTP errors and uses try-catch for network errors. The return object always has a `success` flag so the caller knows what happened without try-catch.

**Output:**

```
Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
404 result: { success: false, error: 'HTTP error 404: Not Found' }
Network error: { success: false, error: 'fetch failed' }
```

### POST Request - Sending Data to an API

```javascript
async function createUser(name, email) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email,
      username: name.toLowerCase().replace(/\s/g, "")
    })
  });

  if (!response.ok) {
    throw new Error("Failed to create user: " + response.status);
  }

  const result = await response.json();
  return result;
}

async function demo() {
  try {
    const user = await createUser("Aarav Kumar", "aarav@example.com");
    console.log("Created user:");
    console.log("  ID:", user.id);
    console.log("  Name:", user.name);
    console.log("  Email:", user.email);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

demo();
```

POST requests need three extra parts: `method: 'POST'`, `headers` with Content-Type, and `body` with JSON.stringify. The server receives the data and returns the created resource (including a new ID). jsonplaceholder simulates the creation without actually saving it.

**Output:**

```
Created user:
  ID: 11
  Name: Aarav Kumar
  Email: aarav@example.com
```

### Search with Fetch (Dynamic Query)

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; background: #1a1a2e; color: #e2e8f0; }
    input { padding: 10px; width: 300px; border-radius: 8px; border: 1px solid #334; background: #16213e; color: #e2e8f0; font-size: 16px; }
    #results { margin-top: 16px; }
    .post { background: #16213e; padding: 12px; margin-bottom: 8px; border-radius: 8px; border: 1px solid #1e3a5f; }
    .post h3 { color: #a855f7; font-size: 16px; margin-bottom: 4px; }
    .post p { color: #94a3b8; font-size: 14px; }
  </style>
</head>
<body>
  <h2>Search Posts</h2>
  <input type="text" id="search" placeholder="Search by user ID (1-10)">
  <div id="results"></div>

  <script>
    const searchInput = document.getElementById("search");
    const resultsDiv = document.getElementById("results");
    let debounceTimer;

    searchInput.addEventListener("input", function() {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(searchPosts, 500);
    });

    async function searchPosts() {
      const userId = searchInput.value.trim();
      if (!userId) {
        resultsDiv.innerHTML = "";
        return;
      }

      resultsDiv.innerHTML = "<p>Searching...</p>";

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?userId=" + userId
        );
        if (!response.ok) throw new Error("HTTP " + response.status);
        const posts = await response.json();

        if (posts.length === 0) {
          resultsDiv.innerHTML = "<p>No posts found.</p>";
          return;
        }

        resultsDiv.innerHTML = "";
        posts.forEach(function(post) {
          const div = document.createElement("div");
          div.className = "post";
          div.innerHTML = "<h3>" + post.title + "</h3><p>" + post.body + "</p>";
          resultsDiv.appendChild(div);
        });
      } catch (error) {
        resultsDiv.innerHTML = "<p>Error: " + error.message + "</p>";
      }
    }
  </script>
</body>
</html>
```

This combines fetch with user input. The debounce pattern (clearTimeout/setTimeout) waits 500ms after the user stops typing before making the API call, preventing excessive requests. The API URL includes a query parameter (`?userId=`) to filter results.

**Output:**

```
A search input that fetches and displays blog posts filtered by user ID, with debounced API calls.
```

### Parallel Fetch with Promise.all

```javascript
async function fetchMultipleUsers(ids) {
  console.time("fetch");

  // Create an array of fetch Promises
  const promises = ids.map(function(id) {
    return fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then(function(response) {
        if (!response.ok) throw new Error("User " + id + " not found");
        return response.json();
      });
  });

  // Wait for ALL requests to complete
  const users = await Promise.all(promises);

  console.timeEnd("fetch");
  return users;
}

async function main() {
  try {
    const users = await fetchMultipleUsers([1, 2, 3, 4, 5]);
    users.forEach(function(user) {
      console.log(user.name + " (" + user.email + ")");
    });
  } catch (error) {
    console.log("One or more requests failed:", error.message);
  }
}

main();
```

Instead of fetching users one at a time (sequential), we create all fetch Promises at once and use Promise.all to wait for all of them. 5 requests that each take 200ms would take ~1000ms sequentially but only ~200ms in parallel.

**Output:**

```
fetch: ~200ms
Leanne Graham (Sincere@april.biz)
Ervin Howell (Shanna@melissa.tv)
Clementine Bauch (Nathan@yesenia.net)
Patricia Lebsack (Julianne.OConner@kory.org)
Chelsey Dietrich (Lucio_Hettinger@annie.ca)
```

### Complete Mini-App: Country Information Finder

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; background: #1a1a2e; color: #e2e8f0; }
    input { padding: 10px; width: 250px; border-radius: 8px; border: 1px solid #334; background: #16213e; color: #e2e8f0; }
    button { padding: 10px 20px; background: #a855f7; color: white; border: none; border-radius: 8px; cursor: pointer; margin-left: 8px; }
    #result { margin-top: 20px; background: #16213e; padding: 20px; border-radius: 12px; display: none; }
    .flag { font-size: 64px; }
    .error { color: #ef4444; }
  </style>
</head>
<body>
  <h2>Country Finder</h2>
  <input type="text" id="countryInput" placeholder="Enter country name">
  <button id="searchBtn">Search</button>
  <div id="result"></div>

  <script>
    document.getElementById("searchBtn").addEventListener("click", searchCountry);
    document.getElementById("countryInput").addEventListener("keydown", function(e) {
      if (e.key === "Enter") searchCountry();
    });

    async function searchCountry() {
      const name = document.getElementById("countryInput").value.trim();
      const resultDiv = document.getElementById("result");

      if (!name) return;

      resultDiv.style.display = "block";
      resultDiv.innerHTML = "<p>Searching...</p>";

      try {
        const response = await fetch("https://restcountries.com/v3.1/name/" + name);
        if (!response.ok) throw new Error("Country not found");
        const countries = await response.json();
        const country = countries[0];

        resultDiv.innerHTML =
          '<div class="flag">' + country.flag + '</div>' +
          '<h2>' + country.name.common + '</h2>' +
          '<p>Capital: ' + (country.capital ? country.capital[0] : 'N/A') + '</p>' +
          '<p>Population: ' + country.population.toLocaleString() + '</p>' +
          '<p>Region: ' + country.region + '</p>' +
          '<p>Languages: ' + Object.values(country.languages || {}).join(', ') + '</p>';
      } catch (error) {
        resultDiv.innerHTML = '<p class="error">' + error.message + '</p>';
      }
    }
  </script>
</body>
</html>
```

A complete mini-app that searches the REST Countries API. It handles user input (click and Enter key), shows loading state, displays country data (flag, capital, population, region, languages), and handles errors. Uses a real public API with no API key required.

**Output:**

```
An input field where typing 'India' and clicking Search shows the Indian flag, capital (New Delhi), population, region (Asia), and languages.
```

## Common Mistakes

### Forgetting that fetch Does Not Reject on HTTP Errors

**Wrong:**

```
// Expecting catch to handle 404
try {
  const response = await fetch("https://api.example.com/users/9999");
  const data = await response.json(); // Might parse error HTML as JSON!
  console.log(data);
} catch (error) {
  console.log("Error:", error); // Only runs for NETWORK errors, not 404!
}
```

404 responses do NOT cause fetch to reject. The catch block only handles network errors (no internet, server down). HTTP error responses are still 'successful' fetches.

**Correct:**

```
try {
  const response = await fetch("https://api.example.com/users/9999");

  if (!response.ok) {
    throw new Error("HTTP " + response.status + ": " + response.statusText);
  }

  const data = await response.json();
  console.log(data);
} catch (error) {
  console.log("Error:", error.message);
}
```

`fetch()` only rejects on network failures. For HTTP errors (404, 500), it resolves with a Response that has `ok: false`. Always check `response.ok` before parsing the body.

### Forgetting to Parse the JSON Response

**Wrong:**

```
const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
console.log(response.name); // undefined!
// response is a Response object, not the JSON data
```

response is a Response object with properties like status and ok. The actual data must be extracted with .json().

**Correct:**

```
const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
const user = await response.json(); // Parse the body as JSON
console.log(user.name); // "Leanne Graham"
```

`fetch()` returns a Response object. To get the actual JSON data, you must call `response.json()`, which itself returns a Promise. You need two awaits: one for fetch, one for .json().

### Not Using JSON.stringify for POST Body

**Wrong:**

```
// Sending an object directly -- does not work!
fetch("https://api.example.com/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: { name: "Aarav", age: 16 } // JavaScript object, not JSON string!
});
```

The body is converted to "[object Object]" string. The server receives garbage data.

**Correct:**

```
fetch("https://api.example.com/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Aarav", age: 16 }) // Convert to JSON string
});
```

The `body` must be a string. JavaScript objects are NOT automatically converted to JSON. You must use `JSON.stringify()` to convert the object to a JSON string that the server can parse.

### Not Showing Loading State

**Wrong:**

```
// User clicks search, nothing happens for 2 seconds, then data appears
async function search() {
  const response = await fetch(url); // User sees nothing while waiting
  const data = await response.json();
  displayResults(data);
}
```

The user has no feedback that something is happening. They might click the button again or think the app is broken.

**Correct:**

```
async function search() {
  const container = document.getElementById("results");
  container.innerHTML = "<p>Loading...</p>"; // Show loading state

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Request failed");
    const data = await response.json();
    displayResults(data);
  } catch (error) {
    container.innerHTML = "<p>Error: " + error.message + "</p>";
  }
}
```

Always show a loading indicator before starting a fetch request. Users need visual feedback that something is happening. Also show clear error messages when something goes wrong.

## Summary

- An API is a URL that returns data (usually JSON) instead of a web page. Think of it like a restaurant: you send an order (request) to the kitchen (server) and the waiter (API) brings back your food (data).
- fetch(url) makes a GET request and returns a Promise that resolves to a Response object. Call response.json() (also a Promise) to parse the JSON body into a JavaScript object.
- async/await makes fetch code clean: const response = await fetch(url); const data = await response.json();
- fetch does NOT reject on HTTP errors (404, 500). It only rejects on network failures. Always check response.ok before parsing the body.
- Loading states are essential UX: show 'Loading...' before fetch, show data on success, show error message on failure.
- POST requests need method: 'POST', headers with Content-Type: 'application/json', and body: JSON.stringify(data).
- CORS (Cross-Origin Resource Sharing) is a browser security feature. If an API does not allow requests from your domain, you get a CORS error. Use public APIs that support CORS for practice.
- Use Promise.all with multiple fetch calls for parallel requests. This is much faster than sequential awaits when the requests are independent.
- Free practice APIs: jsonplaceholder.typicode.com (users, posts, comments), restcountries.com (countries), pokeapi.co (Pokemon).
- Always handle both network errors (try-catch) and HTTP errors (response.ok check) when using fetch.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/javascript/fetch-api-and-working-with-apis/*
*Practice questions: https://learn.modernagecoders.com/resources/javascript/fetch-api-and-working-with-apis/practice/*
