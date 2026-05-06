---
title: "Practice: Project: Build an Interactive Quiz App"
description: "52 practice problems for Project: Build an Interactive Quiz App in JavaScript"
slug: project-interactive-quiz-app-practice
canonical: https://learn.modernagecoders.com/resources/javascript/project-interactive-quiz-app/practice/
category: "JavaScript"
---
# Practice: Project: Build an Interactive Quiz App

**Total questions:** 52

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
const quizData = [
  { question: "Q1", options: ["A", "B", "C", "D"], correct: 2 },
  { question: "Q2", options: ["X", "Y", "Z", "W"], correct: 0 }
];

console.log(quizData[0].options[quizData[0].correct]);
```

*Hint:* correct is 2, so look at index 2 of the options array.

**Answer:** `C`

`quizData[0].correct` is 2. `quizData[0].options[2]` is "C". This is how the quiz app finds the correct answer text.

### Q2. [Easy] What is the output?

```
let score = 0;
const total = 5;

score++;
score++;
score++;

const pct = Math.round((score / total) * 100);
console.log(pct + "%");
```

*Hint:* 3 out of 5 is 60%.

**Answer:** `60%`

score is incremented 3 times to 3. `(3 / 5) * 100 = 60`. `Math.round(60)` is 60. String concatenation gives "60%".

### Q3. [Easy] What is the output?

```
const quizData = [
  { question: "Q1", correct: 1 },
  { question: "Q2", correct: 3 },
  { question: "Q3", correct: 0 }
];

console.log(quizData.length);
console.log(quizData[2].question);
```

*Hint:* The array has 3 objects. Index 2 is the third one.

**Answer:** `3`
`Q3`

The array has 3 elements, so `length` is 3. Index 2 is the third element, whose question property is "Q3".

### Q4. [Easy] What is the output?

```
const labels = ["A", "B", "C", "D"];
const options = ["Red", "Blue", "Green", "Yellow"];

options.forEach(function(option, index) {
  console.log(labels[index] + ". " + option);
});
```

*Hint:* forEach gives both the element and its index.

**Answer:** `A. Red`
`B. Blue`
`C. Green`
`D. Yellow`

forEach iterates through each option with its index. labels[0] is "A", labels[1] is "B", etc. Each line combines the label with the option text.

### Q5. [Easy] What is the output?

```
let currentQuestion = 0;
const total = 3;

currentQuestion++;
console.log("Question " + (currentQuestion + 1) + " of " + total);

currentQuestion++;
console.log("Question " + (currentQuestion + 1) + " of " + total);
```

*Hint:* currentQuestion starts at 0, incremented to 1 then 2. Display adds 1.

**Answer:** `Question 2 of 3`
`Question 3 of 3`

After first increment, currentQuestion is 1. Display shows 1+1=2. After second increment, it is 2. Display shows 2+1=3.

### Q6. [Medium] What is the output?

```
function checkAnswer(selected, correct) {
  if (selected === correct) {
    return "correct";
  } else {
    return "wrong";
  }
}

console.log(checkAnswer(2, 2));
console.log(checkAnswer(1, 3));
console.log(checkAnswer(0, 0));
```

*Hint:* Compare selected with correct using ===.

**Answer:** `correct`
`wrong`
`correct`

2 === 2 is true (correct). 1 === 3 is false (wrong). 0 === 0 is true (correct).

### Q7. [Medium] What is the output?

```
const quizData = [
  { question: "Q1", correct: 1 },
  { question: "Q2", correct: 0 },
  { question: "Q3", correct: 2 }
];

let score = 0;
const answers = [1, 1, 2]; // user picked these

for (let i = 0; i < quizData.length; i++) {
  if (answers[i] === quizData[i].correct) {
    score++;
  }
}
console.log("Score: " + score + "/" + quizData.length);
```

*Hint:* Compare each user answer with the correct answer for that question.

**Answer:** `Score: 2/3`

Q1: user picked 1, correct is 1 (match). Q2: user picked 1, correct is 0 (no match). Q3: user picked 2, correct is 2 (match). Score is 2 out of 3.

### Q8. [Medium] What is the output?

```
function getMessage(percentage) {
  if (percentage === 100) return "Perfect!";
  if (percentage >= 70) return "Great!";
  if (percentage >= 40) return "OK!";
  return "Try again!";
}

console.log(getMessage(100));
console.log(getMessage(80));
console.log(getMessage(50));
console.log(getMessage(20));
```

*Hint:* Each if checks from highest to lowest. First match returns.

**Answer:** `Perfect!`
`Great!`
`OK!`
`Try again!`

100 matches first check (Perfect). 80 is >= 70 (Great). 50 is >= 40 (OK). 20 does not match any if, so the default return runs (Try again).

### Q9. [Medium] What is the output?

```
const container = document.createElement("div");

const options = ["HTML", "CSS", "JS"];
options.forEach(function(opt) {
  const btn = document.createElement("button");
  btn.textContent = opt;
  container.appendChild(btn);
});

console.log(container.children.length);
console.log(container.children[1].textContent);
```

*Hint:* 3 buttons are created and appended. Index 1 is the second button.

**Answer:** `3`
`CSS`

Three buttons are created and appended to the container. `children.length` is 3. The second child (index 1) has textContent "CSS".

### Q10. [Medium] What is the output?

```
let currentQuestion = 4;
const quizData = [{}, {}, {}, {}, {}]; // 5 items

currentQuestion++;
console.log(currentQuestion);
console.log(currentQuestion < quizData.length);

if (currentQuestion < quizData.length) {
  console.log("load next");
} else {
  console.log("show results");
}
```

*Hint:* After incrementing, currentQuestion is 5. quizData.length is also 5.

**Answer:** `5`
`false`
`show results`

currentQuestion goes from 4 to 5. `5 < 5` is false. Since it is not less than the length, we go to the else branch and show results. This is the exact logic used in the Next button handler.

### Q11. [Hard] What is the output?

```
const data = [
  { q: "Q1", opts: ["a", "b", "c", "d"], correct: 2 },
  { q: "Q2", opts: ["w", "x", "y", "z"], correct: 0 }
];

let score = 0;
const picks = [2, 1];

for (let i = 0; i < data.length; i++) {
  const isCorrect = picks[i] === data[i].correct;
  if (isCorrect) score++;
  const picked = data[i].opts[picks[i]];
  const correct = data[i].opts[data[i].correct];
  console.log(data[i].q + ": picked " + picked + ", correct " + correct + " -> " + (isCorrect ? "right" : "wrong"));
}
console.log("Final: " + score + "/" + data.length);
```

*Hint:* Q1: picked index 2 ("c"), correct is 2 ("c"). Q2: picked index 1 ("x"), correct is 0 ("w").

**Answer:** `Q1: picked c, correct c -> right`
`Q2: picked x, correct w -> wrong`
`Final: 1/2`

Q1: picked index 2 = "c", correct index 2 = "c" -- match, score becomes 1. Q2: picked index 1 = "x", correct index 0 = "w" -- no match. Final score 1/2.

### Q12. [Hard] What is the output?

```
const container = document.createElement("div");

["A", "B", "C"].forEach(function(text) {
  const btn = document.createElement("button");
  btn.textContent = text;
  container.appendChild(btn);
});

// Simulate disabling all buttons
const allBtns = container.querySelectorAll("button");
allBtns.forEach(function(btn) {
  btn.disabled = true;
});

console.log(allBtns.length);
console.log(allBtns[0].disabled);
console.log(allBtns[2].textContent);
```

*Hint:* 3 buttons created. All are disabled. Check length, disabled state, and text.

**Answer:** `3`
`true`
`C`

3 buttons created. After disabling, `allBtns.length` is 3. The first button's disabled is true. The third button (index 2) has textContent "C".

### Q13. [Easy] Why do we store quiz questions in an array of objects instead of writing them directly in the HTML?

*Hint:* Think about what happens when you want to add or change questions.

**Answer:** Storing questions in a JavaScript array of objects separates **data** from **display logic**. This means you can add, remove, or change questions by editing just the data array, without touching the HTML or the functions that render questions. It also makes it possible to load questions from an external source (like a JSON file or API) in the future.

This is the principle of separation of concerns. Data (questions) is separate from logic (checking answers) and display (showing buttons). Each can change independently.

### Q14. [Medium] Why do we use `innerHTML = ""` before creating new option buttons? What would happen without it?

*Hint:* Think about what appendChild does to a container that already has children.

**Answer:** Without clearing the container, each call to `loadQuestion` would add 4 NEW buttons while the old buttons remain. After 3 questions, there would be 12 buttons visible. Setting `innerHTML = ""` removes all existing children first, so only the current question's 4 options are shown.

`appendChild` adds elements -- it does not replace them. So if the container already has children and you append more, they stack up. Clearing first ensures a clean slate.

### Q15. [Medium] Why do we disable ALL buttons after the user clicks one option, not just the clicked button?

*Hint:* What could the user do if the other buttons were still clickable?

**Answer:** If only the clicked button was disabled, the user could click other options too. They could click the correct answer after seeing which was wrong (cheating), or click multiple options and increase the score multiple times. Disabling all buttons ensures only one answer per question.

This is a common pattern in interactive apps: once a choice is made, lock the interface to prevent manipulation. The quiz must record exactly one answer per question for the score to be valid.

## Mixed Questions

### Q1. [Easy] What is the output?

```
const arr = ["apple", "banana", "cherry"];
arr.forEach(function(item, i) {
  console.log(i + ": " + item);
});
```

*Hint:* forEach gives the item and index for each element.

**Answer:** `0: apple`
`1: banana`
`2: cherry`

forEach iterates through the array. On each iteration, `item` is the element and `i` is its index.

### Q2. [Easy] What is the output?

```
const div = document.createElement("div");
div.innerHTML = "";
console.log(div.children.length);

div.innerHTML = "Hello

World

";
console.log(div.children.length);
```

*Hint:* After clearing, 0 children. After adding HTML, count the elements.

**Answer:** `0`
`2`

After setting innerHTML to empty string, no children. After setting to two  tags, there are 2 child elements.

### Q3. [Easy] What is the output?

```
let x = 0;

function increment() {
  x++;
  console.log(x);
}

increment();
increment();
increment();
```

*Hint:* Each call increments the same variable x.

**Answer:** `1`
`2`
`3`

x starts at 0. Each call to increment adds 1 and logs. So we get 1, 2, 3. This is the same pattern used for tracking quiz scores.

### Q4. [Medium] What is the output?

```
function reset() {
  let count = 0;
  count = 0;
  console.log("Count: " + count);
}

let count = 10;
reset();
console.log("Outside: " + count);
```

*Hint:* The function has its own local count variable. The outer count is separate.

**Answer:** `Count: 0`
`Outside: 10`

Inside the function, `let count` creates a LOCAL variable. Setting it to 0 only affects the local one. The outer `count` remains 10.

### Q5. [Medium] What is the output?

```
const data = [
  { name: "Aarav", score: 80 },
  { name: "Priya", score: 95 },
  { name: "Rohan", score: 60 }
];

data.forEach(function(student) {
  let msg;
  if (student.score >= 90) msg = "Excellent";
  else if (student.score >= 70) msg = "Good";
  else msg = "Needs work";
  console.log(student.name + ": " + msg);
});
```

*Hint:* Check each score against the conditions.

**Answer:** `Aarav: Good`
`Priya: Excellent`
`Rohan: Needs work`

Aarav: 80 >= 90 false, 80 >= 70 true (Good). Priya: 95 >= 90 true (Excellent). Rohan: 60 >= 90 false, 60 >= 70 false (Needs work).

### Q6. [Medium] What is the output?

```
const el = document.createElement("button");
el.textContent = "Click me";
el.classList.add("active");
el.classList.add("primary");

console.log(el.classList.length);
console.log(el.classList.contains("active"));

el.classList.remove("active");
console.log(el.classList.contains("active"));
console.log(el.classList.length);
```

*Hint:* Two classes added, then one removed.

**Answer:** `2`
`true`
`false`
`1`

Two classes added: length is 2, contains "active" is true. After removing "active": contains is false, length is 1 (only "primary" remains).

### Q7. [Hard] What is the output?

```
const items = [];

for (let i = 0; i < 3; i++) {
  items.push(function() {
    return i;
  });
}

console.log(items[0]());
console.log(items[1]());
console.log(items[2]());
```

*Hint:* let creates a new binding per iteration. Each function captures its own i.

**Answer:** `0`
`1`
`2`

With `let`, each iteration of the loop creates a new scope with its own `i`. So items[0] returns 0, items[1] returns 1, items[2] returns 2. If `var` was used instead, all three would return 3.

### Q8. [Hard] What is the output?

```
const quizData = [
  { q: "Q1", correct: 0 },
  { q: "Q2", correct: 3 },
  { q: "Q3", correct: 1 }
];

function simulateQuiz(userAnswers) {
  let score = 0;
  const results = [];

  userAnswers.forEach(function(answer, i) {
    const isCorrect = answer === quizData[i].correct;
    if (isCorrect) score++;
    results.push(quizData[i].q + ":" + (isCorrect ? "Y" : "N"));
  });

  return { score: score, total: quizData.length, log: results };
}

const result = simulateQuiz([0, 2, 1]);
console.log(result.log.join(", "));
console.log(result.score + "/" + result.total);
```

*Hint:* Q1: 0===0 (Y). Q2: 2===3 (N). Q3: 1===1 (Y).

**Answer:** `Q1:Y, Q2:N, Q3:Y`
`2/3`

Q1: answer 0 matches correct 0 (Y, score 1). Q2: answer 2 does not match correct 3 (N). Q3: answer 1 matches correct 1 (Y, score 2). Final score 2/3.

### Q9. [Hard] If you used `var i` instead of `let i` in a for loop that creates buttons with click handlers, what would happen when any button is clicked?

*Hint:* var is function-scoped, not block-scoped.

**Answer:** With `var i`, all button click handlers would share the same variable `i`. By the time any button is clicked, the loop has already finished and `i` equals the total number of options (e.g., 4). So every button would pass the same wrong index to `selectAnswer`, and every answer check would fail or give incorrect results.

`var` is function-scoped, so there is only one `i` shared across all iterations. After the loop, `i` holds its final value. `let` is block-scoped, creating a fresh `i` per iteration, which closures capture correctly.

### Q10. [Medium] Why do we show the correct answer (in green) even when the user picks wrong? Would it not be simpler to just show the wrong answer in red?

*Hint:* Think about the purpose of a quiz app for learning.

**Answer:** Showing the correct answer when the user picks wrong serves an educational purpose. The user immediately learns what the right answer was, which helps them remember it for next time. Just showing red without revealing the correct answer leaves the user confused -- they know they were wrong but not what was right. A good quiz app helps users learn, not just test them.

This is a UX (user experience) principle: provide actionable feedback. Knowing something is wrong is less useful than knowing what is correct.

## Multiple Choice Questions

### Q1. [Easy] In the quiz app, where are the quiz questions stored?

**Answer:** B

**B is correct.** Quiz questions are stored in a JavaScript array where each element is an object with question, options, and correct properties. This separates data from logic.

### Q2. [Easy] What does `optionsEl.innerHTML = ""` do?

**Answer:** B

**B is correct.** Setting innerHTML to an empty string removes all child elements and content from inside the element. This clears old option buttons before adding new ones.

### Q3. [Easy] Which CSS property prevents an element from being clicked?

**Answer:** C

**C is correct.** `pointer-events: none` makes the element ignore all mouse/touch interactions. The element is still visible but cannot be clicked. display: none would hide it entirely.

### Q4. [Easy] What does `Math.round((3 / 5) * 100)` return?

**Answer:** B

**B is correct.** (3/5) = 0.6. 0.6 * 100 = 60. Math.round(60) = 60. This is how the quiz calculates the percentage score.

### Q5. [Easy] In the quiz data object `{ question: "...", options: [...], correct: 2 }`, what does `correct: 2` mean?

**Answer:** C

**C is correct.** The correct property stores the index (0-3) of the correct answer in the options array. So correct: 2 means options[2] is the right answer.

### Q6. [Medium] What method is used to create new HTML elements dynamically in JavaScript?

**Answer:** B

**B is correct.** `document.createElement(tagName)` creates a new HTML element. After creating it, you set its properties and use appendChild to add it to the page.

### Q7. [Medium] Why does the quiz app use `forEach` instead of a `for` loop with `var` to create buttons?

**Answer:** C

**C is correct.** With forEach, the callback has its own scope per iteration, so the index value is captured correctly in closures. A for loop with var shares one variable across all iterations, causing bugs in event handlers.

### Q8. [Medium] What happens if you forget to disable buttons after the user clicks an option?

**Answer:** B

**B is correct.** Without disabling, the user can click the correct answer after seeing their wrong answer (cheating), or click multiple answers to increase the score multiple times per question.

### Q9. [Medium] Which method adds a created element to the page?

**Answer:** B

**B is correct.** `appendChild` adds a child element to the end of a parent element's children list. It is the standard DOM method for inserting dynamically created elements.

### Q10. [Medium] What is the advantage of using `quizData.length` instead of hardcoding the number 5?

**Answer:** B

**B is correct.** If you hardcode 5 and later add 3 more questions, the counter would still say 'of 5'. Using .length makes the app automatically reflect the actual number of questions.

### Q11. [Hard] In the quiz app, why do we separate the quiz data (array of objects) from the rendering logic (functions)?

**Answer:** B

**B is correct.** Separation of concerns is a fundamental principle. The quiz data can be changed (new questions) without touching the functions. The functions can be improved without changing the data. This is how real applications are built.

### Q12. [Hard] What CSS property creates the smooth green/red color change on quiz buttons?

**Answer:** C

**C is correct.** The `transition` property creates smooth animations when CSS properties change. `transition: background 0.2s` means the background color animates over 0.2 seconds when a class like .correct or .wrong is added.

### Q13. [Easy] What does `element.style.display = "none"` do?

**Answer:** C

**C is correct.** `display: none` hides the element completely -- it is not rendered and takes no space. The quiz app uses this to hide the results div until the quiz is finished.

### Q14. [Medium] What does `element.classList.add("disabled")` do?

**Answer:** B

**B is correct.** `classList.add` adds a CSS class to an element. If you have CSS rules for `.disabled` (like pointer-events: none), they take effect immediately.

### Q15. [Hard] Why does the quiz app create buttons dynamically with `createElement` instead of putting them in the HTML?

**Answer:** C

**C is correct.** Each question has different option text. Creating buttons dynamically lets the app set each button's text from the quiz data array. Static HTML buttons would always show the same text.

### Q16. [Medium] What is the purpose of the `currentQuestion` variable in the quiz app?

**Answer:** B

**B is correct.** `currentQuestion` is an index into the quizData array. It starts at 0 and increments with each 'Next' click. It is used to load the correct question: `quizData[currentQuestion]`.

### Q17. [Easy] What event does the Next button listen for?

**Answer:** C

**C is correct.** The Next button uses `addEventListener('click', ...)` to detect when the user clicks it. Click is the standard event for buttons.

## Coding Challenges

### Challenge 1. Add a Timer (10 Seconds Per Question)

**Difficulty:** Medium

Add a countdown timer that gives the user 10 seconds per question. Display the remaining seconds. If time runs out, automatically mark the answer as wrong, highlight the correct answer, disable buttons, and show the Next button.

**Constraints:**

- Use setInterval and clearInterval. Reset the timer for each new question. Clear the timer when the user answers before time runs out.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Time: 10
... counts down ...
Time: 0
(Auto-selects wrong, shows correct answer, enables Next button)
```

**Solution:**

```javascript
let timer;
let timeLeft;
const timerEl = document.createElement("span");
timerEl.id = "timer";
document.querySelector(".quiz-header").appendChild(timerEl);

function startTimer() {
  timeLeft = 10;
  timerEl.textContent = "Time: " + timeLeft;
  timer = setInterval(function() {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      // Time's up -- disable all buttons, show correct
      const allBtns = optionsEl.querySelectorAll(".option-btn");
      allBtns.forEach(function(btn) { btn.classList.add("disabled"); });
      allBtns[quizData[currentQuestion].correct].classList.add("correct");
      nextBtn.style.display = "inline-block";
    }
  }, 1000);
}

// In loadQuestion, add: startTimer();
// In selectAnswer, add: clearInterval(timer);
```

### Challenge 2. Add a Progress Bar

**Difficulty:** Easy

Add a progress bar at the top that fills up as the user goes through questions. If there are 5 questions and the user is on question 3, the bar should be 60% full.

**Constraints:**

- Use a div inside a div. The inner div's width is set as a percentage using JavaScript.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Question 1: bar is 20% wide
Question 3: bar is 60% wide
Question 5: bar is 100% wide
```

**Solution:**

```javascript
// Add to HTML:
// <div id="progressBar" style="height:6px;background:#333;border-radius:3px;margin-bottom:16px;">
//   <div id="progressFill" style="height:100%;background:#a855f7;border-radius:3px;width:0%;transition:width 0.3s;"></div>
// </div>

// In loadQuestion, add:
const progress = ((currentQuestion + 1) / quizData.length) * 100;
document.getElementById("progressFill").style.width = progress + "%";
```

### Challenge 3. Randomize Question Order

**Difficulty:** Easy

Shuffle the quiz questions so they appear in a different order each time the quiz is started or restarted. Use the Fisher-Yates shuffle algorithm.

**Constraints:**

- Shuffle the array in place. Apply the shuffle when the quiz starts and when the user restarts.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
First play: Q3, Q1, Q5, Q2, Q4
Restart: Q2, Q5, Q1, Q4, Q3
```

**Solution:**

```javascript
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

// Call at start:
shuffleArray(quizData);
loadQuestion();

// Call in restart handler:
shuffleArray(quizData);
currentQuestion = 0;
score = 0;
loadQuestion();
```

### Challenge 4. Show Answer Explanation

**Difficulty:** Medium

Add an explanation property to each question object. After the user answers, display the explanation below the options.

**Constraints:**

- Add an explanation field to each quiz data object. Create a div to show it after selection.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
(After answering) Explanation: The DOM is a tree structure that represents the HTML document in memory. JavaScript uses the DOM to read and change page content.
```

**Solution:**

```javascript
// Add to quiz data:
// { question: "...", options: [...], correct: 0,
//   explanation: "The DOM stands for Document Object Model..." }

// In selectAnswer, after showing correct/wrong:
const explanationDiv = document.createElement("div");
explanationDiv.style.marginTop = "16px";
explanationDiv.style.padding = "12px";
explanationDiv.style.background = "#1e293b";
explanationDiv.style.borderRadius = "8px";
explanationDiv.style.color = "#94a3b8";
explanationDiv.textContent = "Explanation: " + quizData[currentQuestion].explanation;
optionsEl.appendChild(explanationDiv);
```

### Challenge 5. Track and Display Wrong Answers at the End

**Difficulty:** Medium

Keep track of which questions the user got wrong. On the results screen, show a list of wrong answers with the correct answer for each.

**Constraints:**

- Use an array to store wrong question indices. Display them in the results.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
You scored 3/5 (60%)

Questions you got wrong:
- What does CSS stand for? (Correct answer: Cascading Style Sheets)
- Which method adds to an array? (Correct answer: array.push())
```

**Solution:**

```javascript
const wrongAnswers = [];

// In selectAnswer, when wrong:
if (selectedIndex !== data.correct) {
  wrongAnswers.push({
    question: data.question,
    yourAnswer: data.options[selectedIndex],
    correctAnswer: data.options[data.correct]
  });
}

// In showResults:
if (wrongAnswers.length > 0) {
  const wrongList = document.createElement("div");
  wrongList.innerHTML = "<h3>Questions you got wrong:</h3>";
  wrongAnswers.forEach(function(item) {
    const p = document.createElement("p");
    p.textContent = item.question + " (Correct: " + item.correctAnswer + ")";
    wrongList.appendChild(p);
  });
  resultsEl.appendChild(wrongList);
}

// In restart, clear: wrongAnswers.length = 0;
```

### Challenge 6. Add Sound Effects

**Difficulty:** Medium

Play a short sound when the user answers correctly and a different sound when wrong. You can use the Web Audio API or HTML Audio element with free sound URLs.

**Constraints:**

- Create Audio objects. Handle the case where sound fails to play (some browsers block autoplay).

**Sample input:**

```
(No input required)
```

**Sample output:**

```
(Correct answer) plays a positive 'ding' sound
(Wrong answer) plays a buzzer sound
```

**Solution:**

```javascript
// Create audio objects
const correctSound = new Audio("https://example.com/correct.mp3");
const wrongSound = new Audio("https://example.com/wrong.mp3");

// In selectAnswer:
if (selectedIndex === data.correct) {
  selectedBtn.classList.add("correct");
  score++;
  correctSound.currentTime = 0;
  correctSound.play().catch(function() {}); // Catch autoplay errors
} else {
  selectedBtn.classList.add("wrong");
  allBtns[data.correct].classList.add("correct");
  wrongSound.currentTime = 0;
  wrongSound.play().catch(function() {});
}
```

### Challenge 7. Difficulty Levels

**Difficulty:** Hard

Add a difficulty selector before the quiz starts (Easy, Medium, Hard). Each difficulty shows a different set of questions. Add a difficulty property to each question object and filter based on the selected level.

**Constraints:**

- Add a difficulty property to each question. Filter quizData based on selection. Show a start screen.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Select Difficulty: [Easy] [Medium] [Hard]
(User picks Medium)
Showing 5 medium questions...
```

**Solution:**

```javascript
// Add difficulty to data:
// { question: "...", options: [...], correct: 0, difficulty: "easy" }

let filteredQuestions = [];

function startQuiz(level) {
  filteredQuestions = quizData.filter(function(q) {
    return q.difficulty === level;
  });
  currentQuestion = 0;
  score = 0;
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  loadQuestion(); // Modify loadQuestion to use filteredQuestions
}

// In HTML:
// <div id="startScreen">
//   <h2>Select Difficulty</h2>
//   <button onclick="startQuiz('easy')">Easy</button>
//   <button onclick="startQuiz('medium')">Medium</button>
//   <button onclick="startQuiz('hard')">Hard</button>
// </div>
```

### Challenge 8. High Score Tracker with Local Storage

**Difficulty:** Hard

Save the highest score in localStorage so it persists across page reloads. Display the high score on the results screen. If the user beats the high score, show a special message.

**Constraints:**

- Use localStorage.getItem and localStorage.setItem. Handle the case where no high score exists yet.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
You scored 4/5 (80%)
High Score: 5/5 (100%)
---
You scored 5/5 (100%)
New High Score!
```

**Solution:**

```javascript
function showResults() {
  const percentage = Math.round((score / quizData.length) * 100);
  const highScore = parseInt(localStorage.getItem("quizHighScore")) || 0;

  finalScoreEl.textContent = "You scored " + score + "/" + quizData.length + " (" + percentage + "%)";

  if (percentage > highScore) {
    localStorage.setItem("quizHighScore", percentage);
    messageEl.textContent = "New High Score!";
  } else {
    messageEl.textContent = "High Score: " + highScore + "%";
  }

  quizEl.style.display = "none";
  resultsEl.style.display = "block";
  nextBtn.style.display = "none";
  restartBtn.style.display = "inline-block";
}
```

### Challenge 9. Multi-Category Quiz

**Difficulty:** Hard

Add a category property to each question (e.g., 'html', 'css', 'javascript'). Before starting, let the user pick a category. Only show questions from that category.

**Constraints:**

- Use the filter method on the quiz data array. Handle the 'All' option by not filtering.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Choose a category: [HTML] [CSS] [JavaScript] [All]
(User picks CSS)
Showing 5 CSS questions...
```

**Solution:**

```javascript
function getCategories() {
  const categories = [];
  quizData.forEach(function(q) {
    if (categories.indexOf(q.category) === -1) {
      categories.push(q.category);
    }
  });
  return categories;
}

function startByCategory(category) {
  let questions;
  if (category === "all") {
    questions = quizData.slice();
  } else {
    questions = quizData.filter(function(q) {
      return q.category === category;
    });
  }
  // Use 'questions' instead of 'quizData' in loadQuestion
  activeQuestions = questions;
  currentQuestion = 0;
  score = 0;
  loadQuestion();
}
```

### Challenge 10. Animated Score Counter

**Difficulty:** Easy

When the score increases, make the score display briefly scale up and change color (like a bounce animation) before returning to normal. Use CSS transitions or keyframe animations.

**Constraints:**

- Add a CSS animation class, apply it with JavaScript, then remove it after the animation completes.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
(On correct answer) Score number grows to 1.3x size, turns green, then shrinks back to normal after 0.3s.
```

**Solution:**

```javascript
// CSS:
// @keyframes scoreBounce {
//   0% { transform: scale(1); color: #94a3b8; }
//   50% { transform: scale(1.3); color: #10b981; }
//   100% { transform: scale(1); color: #94a3b8; }
// }
// .score-animate { animation: scoreBounce 0.4s ease; }

// In selectAnswer, when correct:
score++;
scoreDisplayEl.textContent = "Score: " + score;
scoreDisplayEl.classList.add("score-animate");
setTimeout(function() {
  scoreDisplayEl.classList.remove("score-animate");
}, 400);
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/project-interactive-quiz-app/*
