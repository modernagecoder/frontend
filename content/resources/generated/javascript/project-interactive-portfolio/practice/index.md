---
title: "Practice: Project: Build an Interactive Portfolio Website"
description: "50 practice problems for Project: Build an Interactive Portfolio Website in JavaScript"
slug: project-interactive-portfolio-practice
canonical: https://learn.modernagecoders.com/resources/javascript/project-interactive-portfolio/practice/
category: "JavaScript"
---
# Practice: Project: Build an Interactive Portfolio Website

**Total questions:** 50

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
const el = document.querySelector('#hero');
el.scrollIntoView({ behavior: 'smooth' });
console.log('Scrolling started');
```

*Hint:* Does scrollIntoView block execution?

**Answer:** `Scrolling started` (prints immediately, scroll happens asynchronously)

scrollIntoView starts the smooth scroll animation but does not block. JavaScript continues executing immediately. The console.log runs right away while the scroll happens in the background.

### Q2. [Easy] What is the output?

```
const btn = document.createElement('button');
btn.dataset.category = 'javascript';
console.log(btn.dataset.category);
console.log(btn.getAttribute('data-category'));
```

*Hint:* dataset and data-* attributes are two ways to access the same thing.

**Answer:** `javascript`
`javascript`

Both `dataset.category` and `getAttribute('data-category')` access the same data attribute. dataset uses camelCase, getAttribute uses the full attribute name.

### Q3. [Easy] What is the output?

```
document.body.classList.add('light-mode');
console.log(document.body.classList.contains('light-mode'));
document.body.classList.toggle('light-mode');
console.log(document.body.classList.contains('light-mode'));
```

*Hint:* add adds the class, toggle removes it if present.

**Answer:** `true`
`false`

add puts 'light-mode' on the body (contains returns true). toggle removes it because it was already present (contains returns false).

### Q4. [Medium] What is the output?

```
const projects = [
  { title: 'A', category: 'web' },
  { title: 'B', category: 'js' },
  { title: 'C', category: 'web' },
  { title: 'D', category: 'design' }
];
const webProjects = projects.filter(function(p) {
  return p.category === 'web';
});
console.log(webProjects.length);
console.log(webProjects.map(function(p) { return p.title; }));
```

*Hint:* filter keeps items matching the condition.

**Answer:** `2`
`["A", "C"]`

filter keeps projects with category 'web' (A and C). There are 2 such projects, and map extracts their titles.

### Q5. [Medium] What is the output?

```
const style = getComputedStyle(document.documentElement);
const accent = style.getPropertyValue('--accent');
console.log(typeof accent);
console.log(accent.trim());
```

*Hint:* CSS variable values are returned as strings, often with leading spaces.

**Answer:** `string`
`#a855f7` (or whatever the current --accent value is)

getPropertyValue returns the CSS variable value as a string. It may include leading whitespace, so trim() is used. The value is the current --accent color defined in :root.

### Q6. [Medium] What is the output?

```
const words = ['hello', 'world'];
let i = 0;
i = (i + 1) % words.length;
console.log(i, words[i]);
i = (i + 1) % words.length;
console.log(i, words[i]);
i = (i + 1) % words.length;
console.log(i, words[i]);
```

*Hint:* The modulo operator wraps around to 0 after reaching the array length.

**Answer:** `1 world`
`0 hello`
`1 world`

With 2 words, the modulo cycles: 0->1->0->1. This pattern is used in the typing effect to cycle through words infinitely.

### Q7. [Hard] What is the output?

```
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test('aarav@gmail.com'));
console.log(emailRegex.test('aarav@gmail'));
console.log(emailRegex.test('aarav gmail.com'));
console.log(emailRegex.test('@gmail.com'));
```

*Hint:* The regex requires: something@something.something with no spaces.

**Answer:** `true`
`false`
`false`
`false`

The regex requires at least one character before @, at least one character after @ but before the dot, and at least one character after the dot. No spaces allowed. Only the first email passes all checks.

### Q8. [Easy] Why do we use CSS custom properties (variables) for theming instead of changing individual styles in JavaScript?

*Hint:* Think about how many elements need to change when switching themes.

**Answer:** CSS variables let you define colors once and use them throughout the stylesheet. To switch themes, you only need to change the variable values (by toggling a CSS class like `.light-mode`), and every element using those variables updates automatically. Without variables, you would need JavaScript to find and update every single element's color individually.

With CSS variables, switching from dark to light mode is a single classList.toggle() call. Without them, you might need to update 50+ elements individually.

### Q9. [Medium] Why do we call observer.unobserve(entry.target) after the scroll animation plays?

*Hint:* What happens if we keep observing?

**Answer:** Without `unobserve`, the observer keeps watching the element. Every time it scrolls in and out of the viewport, the callback fires again. For animations that should only play once (like fade-in on first scroll), unobserve stops the observer from re-triggering. It also improves performance by reducing the number of elements being tracked.

If you want an animation to replay every time the user scrolls past it, keep observing. But for portfolio-style reveal animations, play once and unobserve.

### Q10. [Hard] How does the typing effect use closures?

*Hint:* What variables does the tick function remember?

**Answer:** The `tick` function inside `typeWriter` forms a closure over the variables `wordIndex`, `charIndex`, `isDeleting`, `element`, `words`, and `speed`. These variables persist between setTimeout calls because the closure keeps them alive. Each time tick runs, it reads and modifies the state variables, then schedules itself again. Without closures, the state would be lost between setTimeout callbacks.

The tick function calls itself recursively via setTimeout. The closure ensures the state (which word, which character, whether deleting) is preserved across these asynchronous calls.

### Q11. [Easy] What is the output?

```
const el = document.createElement('div');
el.style.opacity = '0';
console.log(el.style.opacity);
el.style.opacity = '1';
console.log(el.style.opacity);
```

*Hint:* style.opacity is set and read as a string.

**Answer:** `0`
`1`

Setting `style.opacity` to '0' makes the element invisible. Setting it to '1' makes it fully visible. This is used in scroll animations.

### Q12. [Medium] What is the output?

```
const links = document.querySelectorAll('a');
console.log(typeof links);
console.log(links instanceof NodeList);
console.log(Array.isArray(links));
```

*Hint:* querySelectorAll returns a NodeList, not an Array.

**Answer:** `object`
`true`
`false`

querySelectorAll returns a NodeList, which is an object (not an Array). It has forEach but not map, filter, or reduce. Use Array.from() to convert it if you need array methods.

### Q13. [Medium] What is the output?

```
const el = document.createElement('section');
el.id = 'about';
console.log(el.offsetTop);
```

*Hint:* The element is not in the DOM yet.

**Answer:** `0`

offsetTop returns 0 for elements not attached to the DOM. The element must be in the document for offsetTop to return its actual position. This matters for scroll-based nav highlighting.

### Q14. [Hard] What is the output?

```
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    console.log(entry.isIntersecting);
  });
});
const el = document.createElement('div');
observer.observe(el);
```

*Hint:* What happens when you observe an element that is not in the DOM?

**Answer:** The callback fires immediately with `false` because the element is not in the viewport (it is not even in the DOM).

IntersectionObserver fires its callback once when observe is called, reporting the initial state. An element not in the DOM is not intersecting, so isIntersecting is false.

### Q15. [Medium] What is the difference between opacity: 0 and display: none for hiding elements in scroll animations?

*Hint:* Think about whether the element takes up space.

**Answer:** `opacity: 0` makes the element invisible but it still takes up space in the layout. `display: none` removes the element from the layout entirely, causing other elements to shift. For scroll animations, opacity: 0 is preferred because the element maintains its position and can smoothly transition to opacity: 1.

If you used display: none, adding the visible class would cause a layout jump as the element suddenly appears and pushes other content. opacity with transitions creates a smooth fade effect.

### Q16. [Hard] How would you add keyboard accessibility to the hamburger menu?

*Hint:* Think about Enter key, Escape key, and focus management.

**Answer:** Add a keydown listener for Enter/Space to toggle the menu (matching button behavior). Add Escape key support to close the menu. When the menu opens, move focus to the first nav link. When it closes, return focus to the hamburger button. Add `aria-expanded` attribute to communicate the menu state to screen readers.

Accessibility ensures that users who navigate with keyboards or screen readers can use the menu. The hamburger button should have aria-expanded='true' when open and aria-expanded='false' when closed.

## Mixed Questions

### Q1. [Easy] What is the output?

```
const el = document.createElement('div');
el.classList.add('animate-on-scroll');
console.log(el.classList.contains('visible'));
el.classList.add('visible');
console.log(el.classList.contains('visible'));
```

*Hint:* The element starts without the 'visible' class.

**Answer:** `false`
`true`

Initially the div only has 'animate-on-scroll'. After adding 'visible', contains returns true. This is how the scroll animation works: elements start hidden, and 'visible' is added when they scroll into view.

### Q2. [Medium] What is the output?

```
localStorage.setItem('portfolioTheme', 'light');
const saved = localStorage.getItem('portfolioTheme');
if (saved === 'light') {
  console.log('Apply light mode');
} else {
  console.log('Apply dark mode');
}
```

*Hint:* localStorage stores and returns strings.

**Answer:** `Apply light mode`

The saved value is the string 'light', which matches the comparison. The light mode CSS class would be added to the body.

### Q3. [Medium] What is the output?

```
const word = 'JavaScript';
console.log(word.substring(0, 1));
console.log(word.substring(0, 4));
console.log(word.substring(0, word.length));
```

*Hint:* substring(start, end) extracts characters from start up to (but not including) end.

**Answer:** `J`
`Java`
`JavaScript`

substring(0, 1) gets the first character. substring(0, 4) gets the first 4 characters. substring(0, word.length) gets the entire string. The typing effect uses this to show progressively more characters.

### Q4. [Hard] What is the output?

```
const sections = [
  { id: 'hero', top: 0, height: 800 },
  { id: 'about', top: 800, height: 400 },
  { id: 'projects', top: 1200, height: 600 }
];
const scrollY = 900;
sections.forEach(function(sec) {
  if (scrollY >= sec.top && scrollY < sec.top + sec.height) {
    console.log('Active: ' + sec.id);
  }
});
```

*Hint:* Find which section range contains scrollY = 900.

**Answer:** `Active: about`

scrollY 900 is >= 800 (about's top) and < 1200 (about's top + height). So the 'about' section is active. This is the logic behind active nav link highlighting.

### Q5. [Hard] What is the output?

```
const bar = document.createElement('div');
bar.dataset.width = '85';
bar.style.width = '0%';

// Simulate Intersection Observer callback
bar.style.width = bar.dataset.width + '%';
console.log(bar.style.width);
```

*Hint:* dataset.width is a string. Concatenating with '%' creates the CSS value.

**Answer:** `85%`

dataset.width returns the string '85'. Concatenating with '%' gives '85%'. This is how skill bar widths are animated: start at 0%, then set to the target percentage when the section is visible.

### Q6. [Easy] What is the output?

```
const el = document.createElement('div');
el.innerHTML = 'Quiz AppA quiz game

';
console.log(el.querySelector('h3').textContent);
console.log(el.querySelector('p').textContent);
```

*Hint:* innerHTML creates child elements. querySelector finds them.

**Answer:** `Quiz App`
`A quiz game`

innerHTML creates the h3 and p elements inside the div. querySelector finds them within that div and textContent extracts the text.

### Q7. [Easy] What is the output?

```
const tech = ['HTML', 'CSS', 'JS'];
const tags = tech.map(function(t) {
  return '' + t + '';
}).join('');
console.log(tags);
```

*Hint:* map transforms each element, join combines them into a string.

**Answer:** `HTMLCSSJS`

map creates an array of span strings. join('') combines them into one string with no separator. This pattern is used to create tech tags for project cards.

### Q8. [Medium] What is the output?

```
localStorage.setItem('portfolioTheme', 'dark');
document.body.classList.remove('light-mode');
console.log(document.body.classList.contains('light-mode'));
console.log(localStorage.getItem('portfolioTheme'));
```

*Hint:* classList.remove removes the class. localStorage stores the string.

**Answer:** `false`
`dark`

After removing 'light-mode', the body does not contain that class (false). localStorage stores 'dark' as a string and returns it.

### Q9. [Medium] What is the output?

```
const name = '  Aarav  ';
const email = 'aarav@test.com';
const msg = 'Hi';

console.log(name.trim().length >= 2);
console.log(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
console.log(msg.length >= 10);
```

*Hint:* Check each validation rule: name >= 2 chars after trim, valid email, message >= 10 chars.

**Answer:** `true`
`true`
`false`

name.trim() is 'Aarav' (5 chars >= 2, true). The email matches the regex (true). 'Hi' is 2 characters (< 10, false). The form would show an error for the message.

### Q10. [Hard] What is the output?

```
function typeStep(word, index) {
  return word.substring(0, index);
}

console.log(typeStep('Hello', 0));
console.log(typeStep('Hello', 3));
console.log(typeStep('Hello', 5));
```

*Hint:* substring(0, n) returns the first n characters.

**Answer:** `` (empty string)
`Hel`
`Hello`

substring(0, 0) returns empty string. substring(0, 3) returns 'Hel'. substring(0, 5) returns the full word 'Hello'. This is the core of the typing effect -- incrementing the index reveals more letters.

### Q11. [Hard] What is the output?

```
const root = document.documentElement;
root.style.setProperty('--accent', '#ff0000');
const computed = getComputedStyle(root).getPropertyValue('--accent');
console.log(computed.trim());
```

*Hint:* setProperty changes a CSS variable. getPropertyValue reads it.

**Answer:** `#ff0000`

setProperty changes the --accent CSS variable to red. getPropertyValue reads it back. This technique could be used for a color theme picker where the user chooses their own accent color.

## Multiple Choice Questions

### Q1. [Easy] What does scrollIntoView({ behavior: 'smooth' }) do?

**Answer:** B

**B is correct.** scrollIntoView scrolls the page so the element is visible in the viewport. The 'smooth' behavior creates a smooth animation instead of an instant jump.

### Q2. [Easy] What is the purpose of CSS custom properties (--variable-name)?

**Answer:** B

**B is correct.** CSS custom properties let you define values once (:root) and use them throughout your CSS with var(). Changing the variable changes all uses automatically.

### Q3. [Easy] Why do we call e.preventDefault() in the form submit handler?

**Answer:** B

**B is correct.** By default, form submission refreshes the page. preventDefault() stops this so JavaScript can handle the form data without losing the page state.

### Q4. [Medium] What does IntersectionObserver detect?

**Answer:** B

**B is correct.** IntersectionObserver watches elements and fires a callback when they enter or leave the viewport (or any specified root element).

### Q5. [Medium] How does the dark mode toggle work with localStorage?

**Answer:** B

**B is correct.** On toggle click, save the preference to localStorage. On page load, read from localStorage and add the appropriate CSS class. localStorage just stores the string; your JavaScript applies it.

### Q6. [Medium] What CSS property is used to make elements initially hidden for scroll animations?

**Answer:** C

**C is correct.** opacity: 0 with transform: translateY(30px) makes elements invisible and slightly below their final position. Adding the 'visible' class transitions them to opacity: 1 and translateY(0). display: none would remove them from layout.

### Q7. [Medium] Why do we use the modulo operator (%) in the typing effect?

**Answer:** B

**B is correct.** `(wordIndex + 1) % words.length` wraps the index back to 0 after reaching the end of the array, creating an infinite cycle through the words.

### Q8. [Hard] What is the threshold option in IntersectionObserver?

**Answer:** B

**B is correct.** threshold: 0.1 means the callback fires when 10% of the element is visible. threshold: 1 would require the entire element to be visible. It can be a single number or an array of numbers.

### Q9. [Hard] How does the active nav link highlighting determine which section is visible?

**Answer:** B

**B is correct.** On each scroll event, the code checks if scrollY is between a section's top (offsetTop - navHeight) and bottom (top + offsetHeight). The nav link matching the visible section gets the active class.

### Q10. [Hard] Why does the portfolio use data-width attributes on skill bars instead of hardcoded CSS widths?

**Answer:** B

**B is correct.** Skill bars start at width: 0. When the skills section scrolls into view, JavaScript reads data-width and sets the element's width to that percentage, creating a smooth animation via CSS transition.

### Q11. [Medium] What is the hamburger menu pattern?

**Answer:** B

**B is correct.** The hamburger menu is a common mobile UI pattern: three horizontal lines that, when tapped, reveal or hide the navigation links. It saves space on small screens.

### Q12. [Hard] What technique does the typing effect use to create the animation loop?

**Answer:** C

**C is correct.** The tick function uses setTimeout to call itself with a variable delay (slower for typing, faster for deleting, pause at end of word). This recursive approach via closure gives more control than setInterval.

### Q13. [Easy] What does document.body.classList.toggle('light-mode') do?

**Answer:** C

**C is correct.** `classList.toggle` adds the class if the element does not have it, or removes it if it does. This is perfect for dark/light mode switching.

### Q14. [Medium] What is the purpose of the glassmorphism effect on project cards?

**Answer:** B

**B is correct.** Glassmorphism is a design trend that uses background blur, transparency, and subtle borders to create cards that look like frosted glass.

### Q15. [Hard] Why does the portfolio use event.target.closest('.project-card') for click handling?

**Answer:** B

**B is correct.** When a user clicks a tag or paragraph inside a card, event.target is the tag/paragraph, not the card. closest('.project-card') walks up the DOM to find the card ancestor.

### Q16. [Easy] What does the scroll-to-top button do?

**Answer:** C

**C is correct.** The button calls `window.scrollTo({ top: 0, behavior: 'smooth' })` to smoothly scroll back to the top.

### Q17. [Medium] Why are CSS transitions used for the scroll animations instead of JavaScript animations?

**Answer:** B

**B is correct.** CSS transitions for opacity and transform are hardware-accelerated by the browser's GPU, making them smoother and more performant than JavaScript-driven style changes.

## Coding Challenges

### Challenge 1. Add Skill Progress Bar Animation

**Difficulty:** Easy

Add a CSS transition to the skill bars so they animate from 0% to their target width when the skills section scrolls into view. Use Intersection Observer and data-width attributes.

**Constraints:**

- Use CSS transition for the animation. Use IntersectionObserver to trigger it.

**Sample input:**

```
User scrolls to the skills section
```

**Sample output:**

```
Skill bars smoothly expand from 0% to their target widths (90%, 85%, etc.)
```

**Solution:**

```javascript
// CSS:
// .skill-fill { width: 0; transition: width 1s ease; }

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(function(bar) {
        bar.style.width = bar.dataset.width + '%';
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

observer.observe(document.querySelector('.skills-grid'));
```

### Challenge 2. Add a Testimonials Carousel

**Difficulty:** Medium

Add a testimonials section with a carousel that automatically cycles through quotes. Show one testimonial at a time with a fade transition. Include left/right arrow buttons for manual navigation.

**Constraints:**

- Use setInterval for auto-rotation. Use classList for transitions.

**Sample input:**

```
3 testimonials with name, quote, and role
```

**Sample output:**

```
Testimonials auto-rotate every 4 seconds. Arrows allow manual navigation.
```

**Solution:**

```javascript
const testimonials = [
  { name: 'Priya', role: 'Student', quote: 'Aarav built an amazing website for our school project!' },
  { name: 'Mr. Sharma', role: 'Teacher', quote: 'Impressive skills for a 16-year-old developer.' },
  { name: 'Rohan', role: 'Classmate', quote: 'He taught me JavaScript in just one week!' }
];
let current = 0;

function showTestimonial(index) {
  const el = document.getElementById('testimonialContent');
  el.style.opacity = 0;
  setTimeout(function() {
    el.innerHTML = '<p>"' + testimonials[index].quote + '"</p><strong>' + testimonials[index].name + '</strong><span> - ' + testimonials[index].role + '</span>';
    el.style.opacity = 1;
  }, 300);
}

setInterval(function() {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}, 4000);

document.getElementById('prevBtn').addEventListener('click', function() {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
});

document.getElementById('nextBtn').addEventListener('click', function() {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
});
```

### Challenge 3. Add a Blog Section

**Difficulty:** Medium

Add a blog section that displays blog post cards. Each card shows a title, date, excerpt, and 'Read More' link. Store blog data as an array of objects. Add a 'Load More' button that shows 3 posts at a time.

**Constraints:**

- Use array.slice() for pagination. Dynamically create card elements.

**Sample input:**

```
6 blog posts, initially showing 3
```

**Sample output:**

```
3 blog cards visible. Click 'Load More' to see 3 more. Button hides when all are shown.
```

**Solution:**

```javascript
const posts = [
  { title: 'Getting Started with JS', date: '2026-04-01', excerpt: 'Learn the basics of JavaScript...' },
  { title: 'CSS Grid Layout', date: '2026-03-15', excerpt: 'Master CSS Grid for layouts...' },
  { title: 'DOM Manipulation', date: '2026-03-01', excerpt: 'How to change HTML with JS...' },
  { title: 'Async JavaScript', date: '2026-02-15', excerpt: 'Understanding promises...' },
  { title: 'Building APIs', date: '2026-02-01', excerpt: 'Create your own REST API...' },
  { title: 'React Basics', date: '2026-01-15', excerpt: 'Introduction to React...' }
];
let shown = 0;
const perPage = 3;

function loadMore() {
  const grid = document.getElementById('blogGrid');
  const batch = posts.slice(shown, shown + perPage);
  batch.forEach(function(post) {
    const card = document.createElement('div');
    card.classList.add('blog-card');
    card.innerHTML = '<h3>' + post.title + '</h3><time>' + post.date + '</time><p>' + post.excerpt + '</p><a href="#">Read More</a>';
    grid.appendChild(card);
  });
  shown += batch.length;
  if (shown >= posts.length) {
    document.getElementById('loadMoreBtn').style.display = 'none';
  }
}

document.getElementById('loadMoreBtn').addEventListener('click', loadMore);
loadMore();
```

### Challenge 4. Add Project Search

**Difficulty:** Easy

Add a search input above the projects grid that filters projects in real-time as the user types. Search should match against the project title and description.

**Constraints:**

- Use the input event for real-time filtering. Convert to lowercase for case-insensitive search.

**Sample input:**

```
User types 'quiz' in the search box
```

**Sample output:**

```
Only the Quiz App project card is shown
```

**Solution:**

```javascript
document.getElementById('projectSearch').addEventListener('input', function() {
  const query = this.value.toLowerCase().trim();
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';
  const matching = projects.filter(function(p) {
    return p.title.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query);
  });
  matching.forEach(function(p) {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML = '<h3>' + p.title + '</h3><p>' + p.desc + '</p>';
    grid.appendChild(card);
  });
});
```

### Challenge 5. Add Animated Number Counters

**Difficulty:** Hard

Add a stats section with animated number counters (e.g., '5+ Projects', '1000+ Lines of Code', '3 Languages'). The numbers should count up from 0 to their target value when the section scrolls into view.

**Constraints:**

- Use IntersectionObserver to trigger. Use setInterval or requestAnimationFrame for counting.

**Sample input:**

```
Section scrolls into view with targets: 5, 1000, 3
```

**Sample output:**

```
Numbers animate: 0->1->2->3->4->5, 0->100->200...->1000, 0->1->2->3
```

**Solution:**

```javascript
function animateCounter(element, target, duration) {
  let current = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(function() {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current);
  }, 16);
}

const statsObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.counter').forEach(function(el) {
        animateCounter(el, parseInt(el.dataset.target), 1500);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

statsObserver.observe(document.querySelector('.stats-section'));
```

### Challenge 6. Add a Project Detail Modal

**Difficulty:** Hard

When a project card is clicked, show a modal overlay with full project details: title, description, technologies used, a screenshot placeholder, and links to live demo and source code. The modal should close when clicking the X button or the overlay background.

**Constraints:**

- Create the modal dynamically. Use event delegation. Add a fade-in animation.

**Sample input:**

```
User clicks on the 'Quiz App' project card
```

**Sample output:**

```
Modal appears with Quiz App details, tech tags, and links. Clicking X or overlay closes it.
```

**Solution:**

```javascript
function showModal(project) {
  const overlay = document.createElement('div');
  overlay.classList.add('modal-overlay');
  overlay.innerHTML = '<div class="modal-content">' +
    '<button class="modal-close">X</button>' +
    '<h2>' + project.title + '</h2>' +
    '<p>' + project.desc + '</p>' +
    '<div class="tech-tags">' + project.tech.map(function(t) { return '<span class="tag">' + t + '</span>'; }).join('') + '</div>' +
    '<div class="modal-links">' +
    '<a href="#" class="btn btn-primary">Live Demo</a>' +
    '<a href="#" class="btn btn-outline">Source Code</a>' +
    '</div></div>';

  document.body.appendChild(overlay);
  requestAnimationFrame(function() { overlay.classList.add('visible'); });

  overlay.querySelector('.modal-close').addEventListener('click', function() {
    overlay.classList.remove('visible');
    setTimeout(function() { overlay.remove(); }, 300);
  });
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      overlay.classList.remove('visible');
      setTimeout(function() { overlay.remove(); }, 300);
    }
  });
}

// Attach to project cards
document.getElementById('projectsGrid').addEventListener('click', function(e) {
  const card = e.target.closest('.project-card');
  if (card) {
    const title = card.querySelector('h3').textContent;
    const project = projects.find(function(p) { return p.title === title; });
    if (project) showModal(project);
  }
});
```

---

*Notes: https://learn.modernagecoders.com/resources/javascript/project-interactive-portfolio/*
