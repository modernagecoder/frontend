---
title: "Build a JavaScript Quiz App - Complete Project Tutorial | Modern Age Coders"
description: "Build a complete interactive quiz app from scratch with HTML, CSS, and JavaScript. Includes question display, scoring, timer, progress bar, results screen, and restart. 52+ practice questions and coding challenges."
slug: project-interactive-quiz-app
canonical: https://learn.modernagecoders.com/resources/javascript/project-interactive-quiz-app/
category: "JavaScript"
keywords: ["javascript quiz app", "build quiz app javascript", "javascript project tutorial", "interactive quiz html css js", "quiz app with score", "javascript quiz game", "beginner javascript project", "quiz app step by step"]
---
# Project: Build an Interactive Quiz App

**Difficulty:** Intermediate  
**Reading time:** 55 min  
**Chapter:** 16  
**Practice questions:** 52

## What Are We Building?

In this chapter, you will build a complete interactive quiz app from scratch using HTML, CSS, and JavaScript. This is a **project chapter** -- instead of learning one concept, you will combine everything you have learned so far into a working application.

The quiz app will have:

- A question displayed with 4 clickable option buttons
- A score counter that tracks correct answers
- Visual feedback -- green for correct, red for wrong
- A "Next" button to move to the next question
- A results screen at the end showing the final score
- A restart button to play again

Here is what the finished app looks like in action:

```
Question 1 of 5
-------------------------------
What does CSS stand for?

[ ] Computer Style Sheets
[x] Cascading Style Sheets    <-- turns green
[ ] Creative Style Syntax
[ ] Coded Style Sheets
-------------------------------
Score: 1 | [Next Question]
```

By the end of this chapter, you will have a project you can customize with your own questions and show to anyone.

## Why Build a Quiz App?

### 1. It Uses Everything You Have Learned

A quiz app combines DOM selection, event listeners, creating elements, CSS manipulation, arrays, objects, functions, and conditional logic. Building it proves you actually understand these concepts, not just in isolation, but together.

### 2. It Is a Real Application

This is not a toy example. Quiz apps are used in education platforms, interview prep sites, trivia games, and even corporate training. The patterns you learn here apply to real-world web development.

### 3. It Teaches Application Architecture

You will learn how to structure an app: separating data (questions) from logic (checking answers) from display (updating the screen). This separation is the foundation of how professional web apps are built.

### 4. It Is Fun to Customize

Once you build the base quiz, you can add your own questions about any topic -- science, history, cricket, movies, coding. You can share it with friends and family.

## Building the Quiz App Step by Step

### Step 1: HTML Structure

First, we create the HTML skeleton. The quiz app needs three main areas: a quiz container that shows questions, a results container that shows the final score, and control buttons.

```
<!DOCTYPE html>

  
  
  Quiz App
  

  
    
      Question 1 of 5
      Score: 0
    

    
      

## 

      

    

    
      

## Quiz Complete!

      

      

    

    
      Next Question
      Restart Quiz
    

  

  

```

Key structural decisions:

- `#quiz` holds the active question and options
- `#results` is hidden initially and shown at the end
- `#nextBtn` appears only after answering
- `#restartBtn` appears only on the results screen

### Step 2: CSS Styling

The CSS creates a clean card layout with hover effects and correct/wrong colors:

```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Arial, sans-serif;
  background: #1a1a2e;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: #e2e8f0;
}

.quiz-container {
  background: #16213e;
  border-radius: 16px;
  padding: 32px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.quiz-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  font-size: 14px;
  color: #94a3b8;
}

#question {
  font-size: 20px;
  margin-bottom: 24px;
  line-height: 1.5;
}

.option-btn {
  display: block;
  width: 100%;
  padding: 14px 20px;
  margin-bottom: 12px;
  background: #0f3460;
  border: 2px solid #1a4a7a;
  border-radius: 10px;
  color: #e2e8f0;
  font-size: 16px;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s, border-color 0.2s, transform 0.1s;
}

.option-btn:hover {
  background: #1a4a7a;
  border-color: #a855f7;
  transform: translateY(-1px);
}

.option-btn.correct {
  background: #065f46;
  border-color: #10b981;
  color: #d1fae5;
}

.option-btn.wrong {
  background: #7f1d1d;
  border-color: #ef4444;
  color: #fecaca;
}

.option-btn.disabled {
  pointer-events: none;
  opacity: 0.7;
}

.quiz-footer {
  margin-top: 24px;
  text-align: center;
}

#nextBtn, #restartBtn {
  padding: 12px 32px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
}

#nextBtn {
  background: #a855f7;
  color: white;
}

#nextBtn:hover {
  background: #9333ea;
}

#restartBtn {
  background: #06b6d4;
  color: white;
}

#restartBtn:hover {
  background: #0891b2;
}

#results h2 {
  font-size: 28px;
  margin-bottom: 16px;
  color: #a855f7;
}

#results p {
  font-size: 18px;
  margin-bottom: 8px;
}

@media (max-width: 480px) {
  .quiz-container {
    margin: 16px;
    padding: 20px;
  }
  #question {
    font-size: 18px;
  }
}
```

Key CSS decisions:

- `.option-btn.correct` turns green when the answer is right
- `.option-btn.wrong` turns red when the answer is wrong
- `.option-btn.disabled` prevents clicking after answering
- Hover effects use `transform` for a subtle lift
- Responsive: padding and font sizes reduce on mobile

### Step 3: Quiz Data

The quiz questions are stored as an array of objects. Each object has a question, an array of options, and the index of the correct answer:

```
const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "HyperText Markup Language",
      "HyperText Marketing Language",
      "HyperText Modeling Language"
    ],
    correct: 1
  },
  {
    question: "Which CSS property changes the text color?",
    options: [
      "font-color",
      "text-color",
      "color",
      "foreground-color"
    ],
    correct: 2
  },
  {
    question: "What does the === operator check in JavaScript?",
    options: [
      "Only value",
      "Only type",
      "Value and type both",
      "Neither value nor type"
    ],
    correct: 2
  },
  {
    question: "Which method adds an element to the end of an array?",
    options: [
      "array.add()",
      "array.append()",
      "array.push()",
      "array.insert()"
    ],
    correct: 2
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Display Object Management",
      "Document Oriented Middleware"
    ],
    correct: 0
  }
];
```

The `correct` field holds the index (0, 1, 2, or 3) of the correct option. This makes checking answers simple: compare the clicked button's index with the correct index.

### Step 4: JavaScript Logic

Now the main logic. We need to: load a question, handle option clicks, track the score, move to the next question, and show results.

```
// --- State Variables ---
let currentQuestion = 0;
let score = 0;

// --- DOM Elements ---
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const quizEl = document.getElementById("quiz");
const resultsEl = document.getElementById("results");
const finalScoreEl = document.getElementById("finalScore");
const messageEl = document.getElementById("message");
const counterEl = document.getElementById("questionCounter");
const scoreDisplayEl = document.getElementById("scoreDisplay");

// --- Load a Question ---
function loadQuestion() {
  const data = quizData[currentQuestion];
  questionEl.textContent = data.question;
  counterEl.textContent = "Question " + (currentQuestion + 1) + " of " + quizData.length;
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";

  data.options.forEach(function(option, index) {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.addEventListener("click", function() {
      selectAnswer(index, btn);
    });
    optionsEl.appendChild(btn);
  });
}

// --- Handle Answer Selection ---
function selectAnswer(selectedIndex, selectedBtn) {
  const data = quizData[currentQuestion];
  const allBtns = optionsEl.querySelectorAll(".option-btn");

  // Disable all buttons
  allBtns.forEach(function(btn) {
    btn.classList.add("disabled");
  });

  // Check answer
  if (selectedIndex === data.correct) {
    selectedBtn.classList.add("correct");
    score++;
    scoreDisplayEl.textContent = "Score: " + score;
  } else {
    selectedBtn.classList.add("wrong");
    // Highlight the correct answer
    allBtns[data.correct].classList.add("correct");
  }

  // Show next button
  nextBtn.style.display = "inline-block";
}

// --- Next Question ---
nextBtn.addEventListener("click", function() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
});

// --- Show Results ---
function showResults() {
  quizEl.style.display = "none";
  resultsEl.style.display = "block";
  nextBtn.style.display = "none";
  restartBtn.style.display = "inline-block";
  counterEl.style.display = "none";

  const percentage = Math.round((score / quizData.length) * 100);
  finalScoreEl.textContent = "You scored " + score + " out of " + quizData.length + " (" + percentage + "%)";

  if (percentage === 100) {
    messageEl.textContent = "Perfect score! You are a genius!";
  } else if (percentage >= 70) {
    messageEl.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 40) {
    messageEl.textContent = "Not bad, but you can do better!";
  } else {
    messageEl.textContent = "Keep practicing, you will get there!";
  }
}

// --- Restart Quiz ---
restartBtn.addEventListener("click", function() {
  currentQuestion = 0;
  score = 0;
  scoreDisplayEl.textContent = "Score: 0";
  quizEl.style.display = "block";
  resultsEl.style.display = "none";
  restartBtn.style.display = "none";
  counterEl.style.display = "inline";
  loadQuestion();
});

// --- Start the Quiz ---
loadQuestion();
```

### Step 5: How Each Part Works

#### Loading a Question

The `loadQuestion` function reads the current question from the array, sets the question text, and creates 4 buttons dynamically. Each button gets a click listener that calls `selectAnswer` with its index.

#### Checking the Answer

When an option is clicked, `selectAnswer` compares the clicked index with `data.correct`. If they match, the button turns green and the score increases. If wrong, the clicked button turns red and the correct button turns green. All buttons are disabled to prevent multiple clicks.

#### Moving to the Next Question

The "Next" button increments `currentQuestion` and calls `loadQuestion` again. If there are no more questions, it calls `showResults`.

#### Results Screen

The `showResults` function hides the quiz, shows the results div, calculates the percentage, and displays a message based on the score.

#### Restarting

The restart button resets the score and question index to 0, hides the results, shows the quiz, and loads the first question again.

## Code Examples

### Complete Quiz App - All in One File

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quiz App</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      background: #1a1a2e;
      display: flex; justify-content: center; align-items: center;
      min-height: 100vh; color: #e2e8f0;
    }
    .quiz-container {
      background: #16213e; border-radius: 16px; padding: 32px;
      width: 100%; max-width: 600px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    .quiz-header {
      display: flex; justify-content: space-between;
      margin-bottom: 24px; font-size: 14px; color: #94a3b8;
    }
    #question { font-size: 20px; margin-bottom: 24px; line-height: 1.5; }
    .option-btn {
      display: block; width: 100%; padding: 14px 20px; margin-bottom: 12px;
      background: #0f3460; border: 2px solid #1a4a7a; border-radius: 10px;
      color: #e2e8f0; font-size: 16px; cursor: pointer; text-align: left;
      transition: background 0.2s, border-color 0.2s;
    }
    .option-btn:hover { background: #1a4a7a; border-color: #a855f7; }
    .option-btn.correct { background: #065f46; border-color: #10b981; color: #d1fae5; }
    .option-btn.wrong { background: #7f1d1d; border-color: #ef4444; color: #fecaca; }
    .option-btn.disabled { pointer-events: none; opacity: 0.7; }
    .quiz-footer { margin-top: 24px; text-align: center; }
    #nextBtn, #restartBtn {
      padding: 12px 32px; font-size: 16px; border: none;
      border-radius: 10px; cursor: pointer; font-weight: 600;
    }
    #nextBtn { background: #a855f7; color: white; }
    #nextBtn:hover { background: #9333ea; }
    #restartBtn { background: #06b6d4; color: white; }
    #restartBtn:hover { background: #0891b2; }
    #results h2 { font-size: 28px; margin-bottom: 16px; color: #a855f7; }
    #results p { font-size: 18px; margin-bottom: 8px; }
  </style>
</head>
<body>
  <div class="quiz-container">
    <div class="quiz-header">
      <span id="questionCounter">Question 1 of 5</span>
      <span id="scoreDisplay">Score: 0</span>
    </div>
    <div id="quiz">
      <h2 id="question"></h2>
      <div id="options"></div>
    </div>
    <div id="results" style="display: none;">
      <h2>Quiz Complete!</h2>
      <p id="finalScore"></p>
      <p id="message"></p>
    </div>
    <div class="quiz-footer">
      <button id="nextBtn" style="display: none;">Next Question</button>
      <button id="restartBtn" style="display: none;">Restart Quiz</button>
    </div>
  </div>

  <script>
    const quizData = [
      {
        question: "What does HTML stand for?",
        options: ["Hyper Trainer Marking Language", "HyperText Markup Language", "HyperText Marketing Language", "HyperText Modeling Language"],
        correct: 1
      },
      {
        question: "Which CSS property changes the text color?",
        options: ["font-color", "text-color", "color", "foreground-color"],
        correct: 2
      },
      {
        question: "What does === check in JavaScript?",
        options: ["Only value", "Only type", "Value and type both", "Neither"],
        correct: 2
      },
      {
        question: "Which method adds an element to the end of an array?",
        options: ["array.add()", "array.append()", "array.push()", "array.insert()"],
        correct: 2
      },
      {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Model", "Display Object Management", "Document Oriented Middleware"],
        correct: 0
      }
    ];

    let currentQuestion = 0;
    let score = 0;
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const nextBtn = document.getElementById("nextBtn");
    const restartBtn = document.getElementById("restartBtn");
    const quizEl = document.getElementById("quiz");
    const resultsEl = document.getElementById("results");
    const finalScoreEl = document.getElementById("finalScore");
    const messageEl = document.getElementById("message");
    const counterEl = document.getElementById("questionCounter");
    const scoreDisplayEl = document.getElementById("scoreDisplay");

    function loadQuestion() {
      const data = quizData[currentQuestion];
      questionEl.textContent = data.question;
      counterEl.textContent = "Question " + (currentQuestion + 1) + " of " + quizData.length;
      optionsEl.innerHTML = "";
      nextBtn.style.display = "none";
      data.options.forEach(function(option, index) {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("option-btn");
        btn.addEventListener("click", function() { selectAnswer(index, btn); });
        optionsEl.appendChild(btn);
      });
    }

    function selectAnswer(selectedIndex, selectedBtn) {
      const data = quizData[currentQuestion];
      const allBtns = optionsEl.querySelectorAll(".option-btn");
      allBtns.forEach(function(btn) { btn.classList.add("disabled"); });
      if (selectedIndex === data.correct) {
        selectedBtn.classList.add("correct");
        score++;
        scoreDisplayEl.textContent = "Score: " + score;
      } else {
        selectedBtn.classList.add("wrong");
        allBtns[data.correct].classList.add("correct");
      }
      nextBtn.style.display = "inline-block";
    }

    nextBtn.addEventListener("click", function() {
      currentQuestion++;
      if (currentQuestion < quizData.length) { loadQuestion(); }
      else { showResults(); }
    });

    function showResults() {
      quizEl.style.display = "none";
      resultsEl.style.display = "block";
      nextBtn.style.display = "none";
      restartBtn.style.display = "inline-block";
      counterEl.style.display = "none";
      const pct = Math.round((score / quizData.length) * 100);
      finalScoreEl.textContent = "You scored " + score + " out of " + quizData.length + " (" + pct + "%)";
      if (pct === 100) messageEl.textContent = "Perfect score! You are a genius!";
      else if (pct >= 70) messageEl.textContent = "Great job! You know your stuff!";
      else if (pct >= 40) messageEl.textContent = "Not bad, keep practicing!";
      else messageEl.textContent = "Keep learning, you will improve!";
    }

    restartBtn.addEventListener("click", function() {
      currentQuestion = 0; score = 0;
      scoreDisplayEl.textContent = "Score: 0";
      quizEl.style.display = "block";
      resultsEl.style.display = "none";
      restartBtn.style.display = "none";
      counterEl.style.display = "inline";
      loadQuestion();
    });

    loadQuestion();
  </script>
</body>
</html>
```

This is the complete quiz app in a single file. The HTML provides structure, the CSS styles the card and buttons with correct/wrong feedback colors, and the JavaScript manages state (current question, score), renders questions dynamically, checks answers, and handles navigation between questions and the results screen.

**Output:**

```
A fully interactive quiz app with questions, clickable options, score tracking, and a results screen.
```

### Quiz Data Structure

```javascript
// Each question is an object with:
// - question: the question text (string)
// - options: array of 4 answer choices (strings)
// - correct: index of the correct option (0-3)

const quizData = [
  {
    question: "Which tag is used for the largest heading in HTML?",
    options: ["<header>", "<heading>", "<h6>", "<h1>"],
    correct: 3
  },
  {
    question: "Which property is used to change background color in CSS?",
    options: ["bgcolor", "background-color", "color-background", "bg-color"],
    correct: 1
  }
];

// Accessing question data
console.log(quizData[0].question);
// "Which tag is used for the largest heading in HTML?"

console.log(quizData[0].options[quizData[0].correct]);
// "<h1>" -- the correct answer

console.log(quizData.length);
// 2 -- total number of questions
```

The quiz data is an array of objects. Each object stores one question, its 4 options, and which option is correct (by index). This structure makes it easy to add, remove, or modify questions without touching the logic code.

**Output:**

```
Which tag is used for the largest heading in HTML?
<h1>
2
```

### Dynamic Button Creation with Event Listeners

```javascript
// Creating option buttons for a question
const optionsContainer = document.getElementById("options");
const questionData = {
  question: "What is 2 + 2?",
  options: ["3", "4", "5", "22"],
  correct: 1
};

// Clear previous buttons
optionsContainer.innerHTML = "";

// Create a button for each option
questionData.options.forEach(function(optionText, index) {
  const btn = document.createElement("button");
  btn.textContent = optionText;
  btn.classList.add("option-btn");

  // Each button knows its own index
  btn.addEventListener("click", function() {
    console.log("Clicked option " + index + ": " + optionText);

    if (index === questionData.correct) {
      console.log("Correct!");
      btn.classList.add("correct");
    } else {
      console.log("Wrong!");
      btn.classList.add("wrong");
    }
  });

  optionsContainer.appendChild(btn);
});

console.log("Created " + questionData.options.length + " buttons");
```

This shows the core pattern: loop through options, create a button for each, and attach a click listener that knows which option index it represents. The closure captures the `index` variable so each button remembers its own position.

**Output:**

```
Created 4 buttons
(On click) Clicked option 1: 4
Correct!
```

### Disabling Buttons After Selection

```javascript
function selectAnswer(selectedIndex, selectedBtn) {
  const correctIndex = quizData[currentQuestion].correct;

  // Get all option buttons
  const allBtns = document.querySelectorAll(".option-btn");

  // Disable ALL buttons so user cannot click again
  allBtns.forEach(function(btn) {
    btn.classList.add("disabled");
  });

  // Show correct/wrong feedback
  if (selectedIndex === correctIndex) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
    // Always show which one was correct
    allBtns[correctIndex].classList.add("correct");
  }
}

// The CSS .disabled class uses pointer-events: none
// This prevents any further clicks on the buttons
// The opacity: 0.7 also gives visual feedback that buttons are inactive
```

After clicking any option, all buttons get the `disabled` class (which uses CSS `pointer-events: none` to block clicks). If the answer is wrong, the correct answer is highlighted in green so the user learns the right answer.

**Output:**

```
Buttons become unclickable after first selection. Wrong answers turn red, correct answer turns green.
```

### Score Calculation and Results Display

```javascript
function showResults() {
  // Hide the quiz, show the results div
  document.getElementById("quiz").style.display = "none";
  document.getElementById("results").style.display = "block";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("restartBtn").style.display = "inline-block";

  // Calculate percentage
  const total = quizData.length;
  const percentage = Math.round((score / total) * 100);

  // Display score
  document.getElementById("finalScore").textContent =
    "You scored " + score + " out of " + total + " (" + percentage + "%)";

  // Give a message based on performance
  let msg = "";
  if (percentage === 100) {
    msg = "Perfect score! Incredible!";
  } else if (percentage >= 80) {
    msg = "Excellent work!";
  } else if (percentage >= 60) {
    msg = "Good effort, keep going!";
  } else if (percentage >= 40) {
    msg = "Not bad, practice more!";
  } else {
    msg = "Keep studying, you will improve!";
  }
  document.getElementById("message").textContent = msg;
}

// Example: score = 4, total = 5
// Output: "You scored 4 out of 5 (80%)" + "Excellent work!"
```

The results function calculates the percentage using `Math.round`, displays the score, and picks an encouraging message based on the score range. It also toggles visibility between the quiz and results containers.

**Output:**

```
You scored 4 out of 5 (80%)
Excellent work!
```

### Restart Functionality

```javascript
document.getElementById("restartBtn").addEventListener("click", function() {
  // Reset state
  currentQuestion = 0;
  score = 0;

  // Reset display
  document.getElementById("scoreDisplay").textContent = "Score: 0";
  document.getElementById("quiz").style.display = "block";
  document.getElementById("results").style.display = "none";
  document.getElementById("restartBtn").style.display = "none";
  document.getElementById("questionCounter").style.display = "inline";

  // Load the first question
  loadQuestion();
});

// The restart resets two things:
// 1. JavaScript state (currentQuestion and score variables)
// 2. DOM state (show/hide the right elements)
// Then it loads question 0 as if the app just started
```

Restarting requires resetting both the JavaScript state (variables) and the visual state (showing/hiding elements). After resetting, `loadQuestion()` renders the first question fresh, as if the page just loaded.

**Output:**

```
Quiz restarts from Question 1 with score reset to 0.
```

### Adding Option Labels (A, B, C, D)

```javascript
// Enhancement: add letter labels before each option
function loadQuestion() {
  const data = quizData[currentQuestion];
  questionEl.textContent = data.question;
  optionsEl.innerHTML = "";

  const labels = ["A", "B", "C", "D"];

  data.options.forEach(function(option, index) {
    const btn = document.createElement("button");
    btn.textContent = labels[index] + ". " + option;
    btn.classList.add("option-btn");
    btn.addEventListener("click", function() {
      selectAnswer(index, btn);
    });
    optionsEl.appendChild(btn);
  });
}

// Result:
// A. Hyper Trainer Marking Language
// B. HyperText Markup Language
// C. HyperText Marketing Language
// D. HyperText Modeling Language
```

A small enhancement that adds "A.", "B.", "C.", "D." labels before each option. The `labels` array maps indices 0-3 to letters. This makes the quiz feel more like a real multiple-choice test.

**Output:**

```
Options display with A, B, C, D labels before each choice.
```

## Common Mistakes

### Forgetting to Clear Previous Options

**Wrong:**

```
function loadQuestion() {
  const data = quizData[currentQuestion];
  questionEl.textContent = data.question;
  // Missing: optionsEl.innerHTML = "";
  data.options.forEach(function(option, index) {
    const btn = document.createElement("button");
    btn.textContent = option;
    optionsEl.appendChild(btn);
  });
}
```

Each time loadQuestion runs, 4 new buttons are ADDED to the existing ones. After 3 questions, there are 12 buttons visible.

**Correct:**

```
function loadQuestion() {
  const data = quizData[currentQuestion];
  questionEl.textContent = data.question;
  optionsEl.innerHTML = ""; // Clear previous buttons first
  data.options.forEach(function(option, index) {
    const btn = document.createElement("button");
    btn.textContent = option;
    optionsEl.appendChild(btn);
  });
}
```

When creating elements dynamically, always clear the container first with `innerHTML = ""`. Otherwise, previous elements remain and new ones stack on top, creating a mess.

### Not Disabling Buttons After Selection

**Wrong:**

```
function selectAnswer(selectedIndex, selectedBtn) {
  if (selectedIndex === quizData[currentQuestion].correct) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }
  // User can keep clicking other options!
}
```

The user can click multiple options and increase the score multiple times for the same question.

**Correct:**

```
function selectAnswer(selectedIndex, selectedBtn) {
  const allBtns = optionsEl.querySelectorAll(".option-btn");
  allBtns.forEach(function(btn) {
    btn.classList.add("disabled"); // Disable all buttons
  });
  if (selectedIndex === quizData[currentQuestion].correct) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
    allBtns[quizData[currentQuestion].correct].classList.add("correct");
  }
}
```

After any selection, all option buttons must be disabled immediately. Using a CSS class with `pointer-events: none` is the cleanest approach. Also, always highlight the correct answer when the user picks wrong -- this is how they learn.

### Using var Inside forEach Creates Closure Bug

**Wrong:**

```
// Using var in a loop -- all buttons share the same index!
for (var i = 0; i < data.options.length; i++) {
  const btn = document.createElement("button");
  btn.textContent = data.options[i];
  btn.addEventListener("click", function() {
    selectAnswer(i, btn); // i is always 4 (after loop ends)
  });
  optionsEl.appendChild(btn);
}
```

All buttons pass i = 4 to selectAnswer because var is function-scoped and the loop finishes before any click happens.

**Correct:**

```
// Use let or forEach -- each iteration has its own index
data.options.forEach(function(option, index) {
  const btn = document.createElement("button");
  btn.textContent = option;
  btn.addEventListener("click", function() {
    selectAnswer(index, btn); // index is unique per iteration
  });
  optionsEl.appendChild(btn);
});
```

With `var`, the variable `i` is shared across all iterations. By the time any button is clicked, the loop has finished and `i` is 4. Using `forEach` or `let` in a for loop creates a separate binding per iteration.

### Forgetting to Reset Both State and DOM on Restart

**Wrong:**

```
restartBtn.addEventListener("click", function() {
  currentQuestion = 0;
  score = 0;
  loadQuestion();
  // Forgot to hide results, show quiz, reset counter display
});
```

The results screen stays visible on top of the quiz. The score display still shows the old score.

**Correct:**

```
restartBtn.addEventListener("click", function() {
  currentQuestion = 0;
  score = 0;
  scoreDisplayEl.textContent = "Score: 0";
  quizEl.style.display = "block";
  resultsEl.style.display = "none";
  restartBtn.style.display = "none";
  counterEl.style.display = "inline";
  loadQuestion();
});
```

Restarting an app means resetting both the JavaScript variables AND the visual state. Every element that was shown or hidden during the quiz must be put back to its initial state.

### Hardcoding the Total Number of Questions

**Wrong:**

```
counterEl.textContent = "Question " + (currentQuestion + 1) + " of 5";
// If you add more questions, this still says "of 5"
```

If someone adds 3 more questions, the counter still says 'of 5' even when there are 8 questions.

**Correct:**

```
counterEl.textContent = "Question " + (currentQuestion + 1) + " of " + quizData.length;
// Automatically adjusts to the actual number of questions
```

Always use `quizData.length` instead of hardcoding numbers. This way, anyone can add or remove questions from the data array and the app adapts automatically.

## Summary

- A quiz app combines HTML (structure), CSS (styling and feedback), and JavaScript (logic and interactivity). Separating these concerns makes the code organized and maintainable.
- Quiz questions are stored as an array of objects. Each object has a question string, an options array, and a correct index. This data-driven approach means you can change questions without touching the logic.
- Dynamic element creation (createElement + appendChild) is used to build option buttons. Each button gets its own event listener. Always clear the container (innerHTML = '') before adding new elements.
- Answer checking compares the clicked button's index with the correct index stored in the data. Visual feedback uses CSS classes: .correct (green) and .wrong (red).
- After any selection, disable all buttons immediately to prevent multiple clicks. Use a CSS class with pointer-events: none for clean disabling.
- When the wrong answer is selected, always highlight the correct answer too. This teaches the user the right answer instead of just saying 'wrong'.
- The results screen calculates a percentage with Math.round((score / total) * 100) and shows a message based on the score range.
- Restarting requires resetting both JavaScript state (variables) and DOM state (show/hide elements). Missing either causes bugs.
- Use quizData.length instead of hardcoded numbers so the app works with any number of questions.
- Closures in forEach callbacks ensure each button remembers its own index. Using var in a for loop would cause all buttons to share the same index value.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/javascript/project-interactive-quiz-app/*
*Practice questions: https://learn.modernagecoders.com/resources/javascript/project-interactive-quiz-app/practice/*
