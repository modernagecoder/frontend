---
title: "Build an Interactive Portfolio Website - Complete HTML CSS JavaScript Project | Modern Age Coders"
description: "Build a complete interactive portfolio website from scratch with HTML, CSS, and JavaScript. Includes smooth scroll, dark mode toggle, typing effect, project filter, contact form validation, scroll animations, responsive hamburger menu, and more. 52+ practice questions."
slug: project-interactive-portfolio
canonical: https://learn.modernagecoders.com/resources/javascript/project-interactive-portfolio/
category: "JavaScript"
keywords: ["javascript portfolio project", "build portfolio website", "html css javascript project", "interactive portfolio tutorial", "smooth scroll javascript", "dark mode javascript", "typing effect javascript", "intersection observer animation", "responsive portfolio", "javascript project tutorial"]
---
# Project: Build an Interactive Portfolio Website

**Difficulty:** Advanced  
**Reading time:** 65 min  
**Chapter:** 25  
**Practice questions:** 50

## What Are We Building?

In this final chapter, you will build a complete, interactive portfolio website from scratch. This is the **capstone project** -- it combines everything you have learned across all 25 chapters into one impressive, real-world project.

The portfolio will include:

- Navigation bar with smooth scroll to sections
- Hero section with a typing effect
- About section with your bio
- Skills section with progress bars
- Projects grid with category filters (All / Web / JavaScript / Design)
- Contact form with validation and submission feedback
- Footer with social links
- Dark/light mode toggle that saves to localStorage
- Scroll animations using Intersection Observer
- Mobile-responsive hamburger menu
- Scroll-to-top button
- Active nav link highlighting on scroll

By the end, you will have a portfolio you can customize with your own content, deploy on the web, and show to anyone.

## Why Build a Portfolio Website?

### 1. It Showcases Everything You Have Learned

This project uses DOM manipulation, event listeners, CSS manipulation, localStorage, closures, array methods, Intersection Observer, form validation, responsive design, and more. If you can build this, you have proven mastery of frontend web development fundamentals.

### 2. It Is Your Professional Calling Card

A portfolio website is the first thing employers and clients look at. Having a custom-built portfolio (not a template) immediately demonstrates your skills. When Aarav applies for an internship and shares a link to his handmade portfolio, it speaks louder than any resume.

### 3. It Uses Modern Web Development Patterns

The techniques used here -- Intersection Observer for scroll animations, CSS custom properties for theming, localStorage for persistence, responsive design with mobile-first CSS -- are the same techniques used by professional developers every day.

### 4. It Is Fully Customizable

After building the base, you can add your own projects, change the colors, add new sections, and make it truly yours. The skills and patterns you learn here will let you modify and extend any website.

## Building the Portfolio Step by Step

### Step 1: HTML Structure

The HTML has seven main sections: nav, hero, about, skills, projects, contact, and footer.

```
<!DOCTYPE html>

  
  
  Aarav | Web Developer
  

  <!-- Navigation -->
  
    Aarav.dev

    
      
    
    

- [Home](#hero)
- [About](#about)
- [Skills](#skills)
- [Projects](#projects)
- [Contact](#contact)

    Dark
  

  <!-- Hero Section -->
  
    
      

Hello, I am

      

# Aarav Sharma

      

I build |

      
        [View My Work](#projects)
        [Contact Me](#contact)
      

    

  

  <!-- About Section -->
  
    

## About Me

    
      

I am a 16-year-old web developer from Delhi who loves building interactive websites. I started learning HTML and CSS when I was 14, and now I build full projects with JavaScript.

      

When I am not coding, I play chess, read sci-fi novels, and practice competitive maths.

    

  

  <!-- Skills Section -->
  
    

## My Skills

    
      
        
          HTML & CSS90%
        

        

      

      
        
          JavaScript85%
        

        

      

      
        
          React70%
        

        

      

      
        
          Python65%
        

        

      

    

  

  <!-- Projects Section -->
  
    

## My Projects

    
      All
      Web
      JavaScript
      Design
    

    

  

  <!-- Contact Section -->
  
    

## Contact Me

    
      
        
        
      

      
        
        
      

      
        
        
      

      Send Message
      

    
  

  <!-- Footer -->
  
    

Built by Aarav Sharma | 2026

  

  <!-- Scroll to top button -->
  Top

  

```

### Step 2: CSS Styling

The CSS uses custom properties (CSS variables) for easy theming and a dark/light mode toggle:

```
:root {
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --text-primary: #e2e8f0;
  --text-secondary: #94a3b8;
  --accent: #a855f7;
  --accent-hover: #9333ea;
  --card-bg: #1e293b;
  --border: #334155;
}

.light-mode {
  --bg-primary: #f8fafc;
  --bg-secondary: #ffffff;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --accent: #7c3aed;
  --accent-hover: #6d28d9;
  --card-bg: #ffffff;
  --border: #e2e8f0;
}
```

The full CSS covers the navigation, hero with gradient text, glassmorphism project cards, responsive grid, skill bars, form styling, transitions, and scroll animations.

### Step 3: JavaScript Features

The JavaScript implements eight interactive features:

#### 1. Smooth Scroll Navigation

```
document.querySelectorAll('.nav-link').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
    // Close mobile menu if open
    document.getElementById('navLinks').classList.remove('open');
  });
});
```

#### 2. Typing Effect

```
function typeWriter(element, words, speed) {
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      element.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      element.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? speed / 2 : speed;

    if (!isDeleting && charIndex === currentWord.length) {
      delay = 2000; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 500; // Pause before next word
    }

    setTimeout(type, delay);
  }

  type();
}

typeWriter(
  document.getElementById('typingText'),
  ['interactive websites', 'web applications', 'creative projects'],
  80
);
```

#### 3. Dark/Light Mode Toggle

```
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('portfolioTheme');

if (savedTheme === 'light') {
  document.body.classList.add('light-mode');
  themeToggle.textContent = 'Dark';
}

themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  themeToggle.textContent = isLight ? 'Dark' : 'Light';
  localStorage.setItem('portfolioTheme', isLight ? 'light' : 'dark');
});
```

#### 4. Scroll Animations with Intersection Observer

```
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
  observer.observe(el);
});
```

#### 5. Project Filter

```
const projects = [
  { title: 'Quiz App', category: 'javascript', description: 'Interactive quiz with scoring', tech: ['HTML', 'CSS', 'JS'] },
  { title: 'Portfolio Site', category: 'web', description: 'Personal portfolio website', tech: ['HTML', 'CSS', 'JS'] },
  { title: 'To-Do App', category: 'javascript', description: 'Task manager with localStorage', tech: ['HTML', 'CSS', 'JS'] },
  { title: 'Landing Page', category: 'design', description: 'Modern landing page design', tech: ['HTML', 'CSS'] },
  { title: 'Weather App', category: 'web', description: 'Weather data from API', tech: ['HTML', 'CSS', 'JS', 'API'] },
  { title: 'Calculator', category: 'javascript', description: 'Scientific calculator', tech: ['HTML', 'CSS', 'JS'] }
];

function renderProjects(filter) {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';
  const filtered = filter === 'all' ? projects : projects.filter(function(p) { return p.category === filter; });
  filtered.forEach(function(project) {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML = '

### ' + project.title + '

' +
      '

' + project.description + '

' +
      '' + project.tech.map(function(t) {
        return '' + t + '';
      }).join('') + '

';
    grid.appendChild(card);
  });
}
```

#### 6. Contact Form Validation

```
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;
  const name = document.getElementById('nameInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();
  const message = document.getElementById('messageInput').value.trim();

  if (name.length < 2) {
    document.getElementById('nameError').textContent = 'Name must be at least 2 characters';
    valid = false;
  } else {
    document.getElementById('nameError').textContent = '';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email';
    valid = false;
  } else {
    document.getElementById('emailError').textContent = '';
  }

  if (message.length < 10) {
    document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
    valid = false;
  } else {
    document.getElementById('messageError').textContent = '';
  }

  if (valid) {
    document.getElementById('formFeedback').textContent = 'Message sent successfully!';
    document.getElementById('formFeedback').style.color = '#10b981';
    this.reset();
  }
});
```

#### 7. Mobile Hamburger Menu

```
document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('navLinks').classList.toggle('open');
  this.classList.toggle('active');
});
```

#### 8. Scroll-to-Top Button and Active Nav

```
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', function() {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }

  // Active nav link on scroll
  const sections = document.querySelectorAll('section');
  sections.forEach(function(section) {
    const top = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    const link = document.querySelector('.nav-link[href="#' + section.id + '"]');
    if (window.scrollY >= top && window.scrollY < bottom) {
      document.querySelectorAll('.nav-link').forEach(function(l) { l.classList.remove('active'); });
      if (link) link.classList.add('active');
    }
  });
});

scrollTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
```

## Code Examples

### Complete Portfolio -- HTML + CSS + JavaScript

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aarav | Web Developer</title>
  <style>
    :root {
      --bg-primary: #0f172a; --bg-secondary: #1e293b;
      --text-primary: #e2e8f0; --text-secondary: #94a3b8;
      --accent: #a855f7; --accent-hover: #9333ea;
      --card-bg: #1e293b; --border: #334155;
    }
    .light-mode {
      --bg-primary: #f8fafc; --bg-secondary: #ffffff;
      --text-primary: #1e293b; --text-secondary: #64748b;
      --accent: #7c3aed; --accent-hover: #6d28d9;
      --card-bg: #ffffff; --border: #e2e8f0;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', sans-serif; background: var(--bg-primary); color: var(--text-primary); transition: background 0.3s, color 0.3s; }
    
    /* Navigation */
    .navbar { position: fixed; top: 0; width: 100%; background: var(--bg-secondary); padding: 16px 32px; display: flex; align-items: center; justify-content: space-between; z-index: 100; border-bottom: 1px solid var(--border); }
    .nav-brand { font-size: 24px; font-weight: 700; color: var(--accent); }
    .nav-links { list-style: none; display: flex; gap: 24px; }
    .nav-link { color: var(--text-secondary); text-decoration: none; font-size: 15px; transition: color 0.2s; }
    .nav-link:hover, .nav-link.active { color: var(--accent); }
    .hamburger { display: none; background: none; border: none; cursor: pointer; flex-direction: column; gap: 5px; }
    .hamburger span { display: block; width: 25px; height: 3px; background: var(--text-primary); transition: 0.3s; }
    .theme-toggle { padding: 8px 16px; background: var(--accent); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; }
    
    /* Hero */
    .hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 120px 32px 80px; }
    .hero-greeting { font-size: 18px; color: var(--accent); margin-bottom: 8px; }
    .hero-name { font-size: 56px; font-weight: 800; margin-bottom: 16px; background: linear-gradient(135deg, var(--accent), #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .hero-title { font-size: 24px; color: var(--text-secondary); margin-bottom: 32px; }
    .cursor { animation: blink 1s infinite; }
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
    .hero-buttons { display: flex; gap: 16px; justify-content: center; }
    .btn { padding: 14px 32px; border-radius: 10px; font-size: 16px; font-weight: 600; text-decoration: none; transition: 0.2s; cursor: pointer; }
    .btn-primary { background: var(--accent); color: white; border: none; }
    .btn-primary:hover { background: var(--accent-hover); }
    .btn-outline { border: 2px solid var(--accent); color: var(--accent); background: none; }
    .btn-outline:hover { background: var(--accent); color: white; }
    
    /* Sections */
    .section { padding: 80px 32px; max-width: 900px; margin: 0 auto; }
    .section-title { font-size: 36px; text-align: center; margin-bottom: 40px; color: var(--accent); }
    .about-content p { font-size: 17px; line-height: 1.8; color: var(--text-secondary); margin-bottom: 16px; }
    
    /* Skills */
    .skills-grid { display: grid; gap: 20px; }
    .skill-header { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 15px; }
    .skill-bar { height: 10px; background: var(--border); border-radius: 5px; overflow: hidden; }
    .skill-fill { height: 100%; background: linear-gradient(90deg, var(--accent), #06b6d4); border-radius: 5px; width: 0; transition: width 1s ease; }
    
    /* Projects */
    .project-filters { display: flex; justify-content: center; gap: 8px; margin-bottom: 32px; flex-wrap: wrap; }
    .filter-btn { padding: 8px 20px; background: none; border: 1px solid var(--border); border-radius: 8px; color: var(--text-secondary); cursor: pointer; font-size: 14px; }
    .filter-btn:hover, .filter-btn.active { border-color: var(--accent); color: var(--accent); }
    .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
    .project-card { background: var(--card-bg); border: 1px solid var(--border); border-radius: 14px; padding: 24px; transition: transform 0.2s, box-shadow 0.2s; }
    .project-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px rgba(168, 85, 247, 0.1); }
    .project-card h3 { margin-bottom: 8px; font-size: 20px; }
    .project-card p { color: var(--text-secondary); font-size: 15px; margin-bottom: 12px; }
    .tech-tags { display: flex; gap: 6px; flex-wrap: wrap; }
    .tag { padding: 4px 10px; background: var(--bg-primary); border-radius: 4px; font-size: 12px; color: var(--accent); }
    
    /* Contact */
    .contact-form { max-width: 500px; margin: 0 auto; }
    .form-group { margin-bottom: 16px; }
    .form-group input, .form-group textarea { width: 100%; padding: 14px; font-size: 16px; border: 2px solid var(--border); border-radius: 10px; background: var(--bg-primary); color: var(--text-primary); outline: none; }
    .form-group input:focus, .form-group textarea:focus { border-color: var(--accent); }
    .error-msg { color: #ef4444; font-size: 13px; margin-top: 4px; display: block; }
    .form-feedback { text-align: center; margin-top: 16px; font-weight: 600; }
    
    /* Footer */
    .footer { text-align: center; padding: 32px; color: var(--text-secondary); border-top: 1px solid var(--border); }
    
    /* Scroll to top */
    .scroll-top-btn { position: fixed; bottom: 30px; right: 30px; padding: 12px 16px; background: var(--accent); color: white; border: none; border-radius: 10px; cursor: pointer; font-size: 14px; opacity: 0; transition: opacity 0.3s; pointer-events: none; }
    .scroll-top-btn.visible { opacity: 1; pointer-events: auto; }
    
    /* Animations */
    .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: opacity 0.6s, transform 0.6s; }
    .animate-on-scroll.visible { opacity: 1; transform: translateY(0); }
    
    /* Mobile */
    @media (max-width: 768px) {
      .hamburger { display: flex; }
      .nav-links { position: fixed; top: 60px; left: 0; right: 0; background: var(--bg-secondary); flex-direction: column; padding: 20px; gap: 16px; transform: translateY(-100%); transition: transform 0.3s; }
      .nav-links.open { transform: translateY(0); }
      .hero-name { font-size: 36px; }
      .hero-title { font-size: 18px; }
      .hero-buttons { flex-direction: column; align-items: center; }
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <div class="nav-brand">Aarav.dev</div>
    <button class="hamburger" id="hamburger"><span></span><span></span><span></span></button>
    <ul class="nav-links" id="navLinks">
      <li><a href="#hero" class="nav-link active">Home</a></li>
      <li><a href="#about" class="nav-link">About</a></li>
      <li><a href="#skills" class="nav-link">Skills</a></li>
      <li><a href="#projects" class="nav-link">Projects</a></li>
      <li><a href="#contact" class="nav-link">Contact</a></li>
    </ul>
    <button class="theme-toggle" id="themeToggle">Light</button>
  </nav>

  <section id="hero" class="hero">
    <div class="hero-content">
      <p class="hero-greeting">Hello, I am</p>
      <h1 class="hero-name">Aarav Sharma</h1>
      <p class="hero-title">I build <span id="typingText"></span><span class="cursor">|</span></p>
      <div class="hero-buttons">
        <a href="#projects" class="btn btn-primary">View My Work</a>
        <a href="#contact" class="btn btn-outline">Contact Me</a>
      </div>
    </div>
  </section>

  <section id="about" class="section">
    <h2 class="section-title">About Me</h2>
    <div class="about-content animate-on-scroll">
      <p>I am a 16-year-old web developer from Delhi who loves building interactive websites. I started with HTML and CSS, and now I build full projects with JavaScript.</p>
      <p>When I am not coding, I play chess, read sci-fi novels, and practice competitive maths.</p>
    </div>
  </section>

  <section id="skills" class="section">
    <h2 class="section-title">My Skills</h2>
    <div class="skills-grid animate-on-scroll">
      <div class="skill-item"><div class="skill-header"><span>HTML and CSS</span><span>90%</span></div><div class="skill-bar"><div class="skill-fill" data-width="90"></div></div></div>
      <div class="skill-item"><div class="skill-header"><span>JavaScript</span><span>85%</span></div><div class="skill-bar"><div class="skill-fill" data-width="85"></div></div></div>
      <div class="skill-item"><div class="skill-header"><span>React</span><span>70%</span></div><div class="skill-bar"><div class="skill-fill" data-width="70"></div></div></div>
      <div class="skill-item"><div class="skill-header"><span>Python</span><span>65%</span></div><div class="skill-bar"><div class="skill-fill" data-width="65"></div></div></div>
    </div>
  </section>

  <section id="projects" class="section">
    <h2 class="section-title">My Projects</h2>
    <div class="project-filters">
      <button class="filter-btn active" data-category="all">All</button>
      <button class="filter-btn" data-category="web">Web</button>
      <button class="filter-btn" data-category="javascript">JavaScript</button>
      <button class="filter-btn" data-category="design">Design</button>
    </div>
    <div class="projects-grid" id="projectsGrid"></div>
  </section>

  <section id="contact" class="section">
    <h2 class="section-title">Contact Me</h2>
    <form id="contactForm" class="contact-form animate-on-scroll">
      <div class="form-group"><input type="text" id="nameInput" placeholder="Your Name" required><span class="error-msg" id="nameError"></span></div>
      <div class="form-group"><input type="email" id="emailInput" placeholder="Your Email" required><span class="error-msg" id="emailError"></span></div>
      <div class="form-group"><textarea id="messageInput" placeholder="Your Message" rows="5" required></textarea><span class="error-msg" id="messageError"></span></div>
      <button type="submit" class="btn btn-primary" style="width:100%">Send Message</button>
      <p id="formFeedback" class="form-feedback"></p>
    </form>
  </section>

  <footer class="footer"><p>Built by Aarav Sharma | 2026</p></footer>
  <button id="scrollTopBtn" class="scroll-top-btn">Top</button>

  <script>
    // --- Projects Data ---
    const projects = [
      { title: 'Quiz App', category: 'javascript', desc: 'Interactive quiz with scoring and timer', tech: ['HTML', 'CSS', 'JS'] },
      { title: 'Portfolio Site', category: 'web', desc: 'Personal portfolio with dark mode', tech: ['HTML', 'CSS', 'JS'] },
      { title: 'To-Do App', category: 'javascript', desc: 'Task manager with localStorage', tech: ['HTML', 'CSS', 'JS'] },
      { title: 'Landing Page', category: 'design', desc: 'Modern business landing page', tech: ['HTML', 'CSS'] },
      { title: 'Weather App', category: 'web', desc: 'Live weather from API', tech: ['HTML', 'CSS', 'JS', 'API'] },
      { title: 'Calculator', category: 'javascript', desc: 'Scientific calculator', tech: ['HTML', 'CSS', 'JS'] }
    ];

    // --- Render Projects ---
    function renderProjects(filter) {
      const grid = document.getElementById('projectsGrid');
      grid.innerHTML = '';
      const list = filter === 'all' ? projects : projects.filter(function(p) { return p.category === filter; });
      list.forEach(function(p) {
        const card = document.createElement('div');
        card.classList.add('project-card');
        card.innerHTML = '<h3>' + p.title + '</h3><p>' + p.desc + '</p><div class="tech-tags">' + p.tech.map(function(t) { return '<span class="tag">' + t + '</span>'; }).join('') + '</div>';
        grid.appendChild(card);
      });
    }

    // --- Project Filters ---
    document.querySelectorAll('.filter-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        renderProjects(btn.dataset.category);
      });
    });

    // --- Typing Effect ---
    function typeWriter(element, words, speed) {
      let wordIdx = 0, charIdx = 0, deleting = false;
      function tick() {
        var word = words[wordIdx];
        element.textContent = deleting ? word.substring(0, charIdx - 1) : word.substring(0, charIdx + 1);
        charIdx += deleting ? -1 : 1;
        var delay = deleting ? speed / 2 : speed;
        if (!deleting && charIdx === word.length) { delay = 2000; deleting = true; }
        else if (deleting && charIdx === 0) { deleting = false; wordIdx = (wordIdx + 1) % words.length; delay = 500; }
        setTimeout(tick, delay);
      }
      tick();
    }
    typeWriter(document.getElementById('typingText'), ['interactive websites', 'web applications', 'creative projects'], 80);

    // --- Dark/Light Mode ---
    var themeToggle = document.getElementById('themeToggle');
    if (localStorage.getItem('portfolioTheme') === 'light') {
      document.body.classList.add('light-mode');
      themeToggle.textContent = 'Dark';
    }
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('light-mode');
      var isLight = document.body.classList.contains('light-mode');
      themeToggle.textContent = isLight ? 'Dark' : 'Light';
      localStorage.setItem('portfolioTheme', isLight ? 'light' : 'dark');
    });

    // --- Smooth Scroll ---
    document.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        document.getElementById('navLinks').classList.remove('open');
        document.getElementById('hamburger').classList.remove('active');
      });
    });

    // --- Hamburger Menu ---
    document.getElementById('hamburger').addEventListener('click', function() {
      document.getElementById('navLinks').classList.toggle('open');
      this.classList.toggle('active');
    });

    // --- Scroll Animations ---
    var scrollObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Animate skill bars when skills section is visible
          entry.target.querySelectorAll('.skill-fill').forEach(function(bar) {
            bar.style.width = bar.dataset.width + '%';
          });
          scrollObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach(function(el) { scrollObserver.observe(el); });

    // --- Scroll-to-Top and Active Nav ---
    var scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', function() {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
      var sections = document.querySelectorAll('section');
      sections.forEach(function(sec) {
        var top = sec.offsetTop - 100;
        var link = document.querySelector('.nav-link[href="#' + sec.id + '"]');
        if (window.scrollY >= top && window.scrollY < top + sec.offsetHeight) {
          document.querySelectorAll('.nav-link').forEach(function(l) { l.classList.remove('active'); });
          if (link) link.classList.add('active');
        }
      });
    });
    scrollTopBtn.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });

    // --- Contact Form Validation ---
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      var valid = true;
      var name = document.getElementById('nameInput').value.trim();
      var email = document.getElementById('emailInput').value.trim();
      var message = document.getElementById('messageInput').value.trim();
      document.getElementById('nameError').textContent = name.length < 2 ? (valid = false, 'Name must be at least 2 characters') : '';
      document.getElementById('emailError').textContent = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? (valid = false, 'Please enter a valid email') : '';
      document.getElementById('messageError').textContent = message.length < 10 ? (valid = false, 'Message must be at least 10 characters') : '';
      if (valid) {
        document.getElementById('formFeedback').textContent = 'Message sent successfully!';
        document.getElementById('formFeedback').style.color = '#10b981';
        this.reset();
      }
    });

    // --- Initial Render ---
    renderProjects('all');
  </script>
</body>
</html>
```

This is the complete portfolio website in a single file. It combines all 25 chapters of JavaScript knowledge: DOM manipulation for rendering projects, event listeners for interactivity, localStorage for theme persistence, Intersection Observer for scroll animations, closures in the typing effect, array methods for filtering projects, form validation, and responsive design with a hamburger menu.

**Output:**

```
A complete, interactive portfolio website with smooth scroll navigation, typing effect, dark/light mode toggle, project filter, scroll animations, contact form validation, mobile hamburger menu, and scroll-to-top button.
```

### Typing Effect with Closure

```javascript
function typeWriter(element, words, speed) {
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function tick() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      element.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      element.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? speed / 2 : speed;

    if (!isDeleting && charIndex === currentWord.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 500;
    }

    setTimeout(tick, delay);
  }

  tick();
}

// Usage
const el = document.getElementById('typingText');
typeWriter(el, ['web developer', 'problem solver', 'creative coder'], 80);

// The tick function is a closure that remembers:
// - wordIndex, charIndex, isDeleting (state)
// - element, words, speed (configuration)
// It calls itself recursively via setTimeout
```

The typing effect uses a closure to maintain state (which word, which character, whether deleting). The `tick` function calls itself with setTimeout, creating an animation loop. Typing speed is normal, deleting is faster (speed/2), and there is a pause at the end of each word and between words. The modulo operator cycles through words infinitely.

**Output:**

```
Text types out letter by letter: 'w', 'we', 'web', 'web ', 'web d'... then deletes, then types the next word.
```

### Intersection Observer for Scroll Animations

```javascript
// CSS needed:
// .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: opacity 0.6s, transform 0.6s; }
// .animate-on-scroll.visible { opacity: 1; transform: translateY(0); }

// JavaScript
const observer = new IntersectionObserver(
  function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Animate skill bars if present
        entry.target.querySelectorAll('.skill-fill').forEach(function(bar) {
          bar.style.width = bar.dataset.width + '%';
        });

        // Stop observing (animate only once)
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }  // Trigger when 10% of element is visible
);

// Observe all elements with the class
document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
  observer.observe(el);
});

console.log('Observing', document.querySelectorAll('.animate-on-scroll').length, 'elements');
```

Intersection Observer watches elements and fires a callback when they enter the viewport. When an element becomes visible (isIntersecting is true), we add the 'visible' class which triggers CSS transitions (fade in and slide up). We also animate skill bar widths at this point. `unobserve` ensures the animation only plays once.

**Output:**

```
Elements fade in and slide up as the user scrolls down the page. Skill bars animate to their target width when the skills section becomes visible.
```

### Project Filter System

```javascript
const projects = [
  { title: 'Quiz App', category: 'javascript', desc: 'Interactive quiz with scoring', tech: ['HTML', 'CSS', 'JS'] },
  { title: 'Portfolio', category: 'web', desc: 'Personal portfolio website', tech: ['HTML', 'CSS', 'JS'] },
  { title: 'To-Do App', category: 'javascript', desc: 'Task manager with storage', tech: ['HTML', 'CSS', 'JS'] },
  { title: 'Landing Page', category: 'design', desc: 'Modern landing page', tech: ['HTML', 'CSS'] },
  { title: 'Weather App', category: 'web', desc: 'Live weather data', tech: ['JS', 'API'] },
  { title: 'Calculator', category: 'javascript', desc: 'Scientific calculator', tech: ['HTML', 'CSS', 'JS'] }
];

function renderProjects(filter) {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';

  const filtered = filter === 'all'
    ? projects
    : projects.filter(function(p) { return p.category === filter; });

  console.log('Showing', filtered.length, 'of', projects.length, 'projects');

  filtered.forEach(function(project) {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML =
      '<h3>' + project.title + '</h3>' +
      '<p>' + project.desc + '</p>' +
      '<div class="tech-tags">' +
        project.tech.map(function(t) {
          return '<span class="tag">' + t + '</span>';
        }).join('') +
      '</div>';
    grid.appendChild(card);
  });
}

// Filter button listeners
document.querySelectorAll('.filter-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');
    renderProjects(btn.dataset.category);
  });
});

// Initial render
renderProjects('all');
```

Projects are stored as an array of objects. The `renderProjects` function filters the array based on the selected category and dynamically creates card elements. Filter buttons use data-category attributes to specify which category to show. This same pattern is used in e-commerce sites for product filtering.

**Output:**

```
Showing 6 of 6 projects
(Click 'JavaScript')
Showing 3 of 6 projects
(Click 'Web')
Showing 2 of 6 projects
```

### Contact Form Validation

```javascript
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;

  // Get values
  const name = document.getElementById('nameInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();
  const message = document.getElementById('messageInput').value.trim();

  // Validate name
  if (name.length < 2) {
    document.getElementById('nameError').textContent = 'Name must be at least 2 characters';
    valid = false;
  } else {
    document.getElementById('nameError').textContent = '';
  }

  // Validate email with regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email';
    valid = false;
  } else {
    document.getElementById('emailError').textContent = '';
  }

  // Validate message
  if (message.length < 10) {
    document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
    valid = false;
  } else {
    document.getElementById('messageError').textContent = '';
  }

  // Submit if valid
  const feedback = document.getElementById('formFeedback');
  if (valid) {
    feedback.textContent = 'Message sent successfully!';
    feedback.style.color = '#10b981';
    this.reset();
    console.log('Form submitted:', { name: name, email: email, message: message });
  } else {
    feedback.textContent = 'Please fix the errors above.';
    feedback.style.color = '#ef4444';
  }
});
```

The form validation checks three fields: name must be at least 2 characters, email must match a basic regex pattern, and message must be at least 10 characters. Error messages are shown below each field. If all validations pass, a success message is shown and the form is reset. `e.preventDefault()` stops the form from actually submitting (refreshing the page).

**Output:**

```
(Submit with empty fields)
Error: Name must be at least 2 characters
Error: Please enter a valid email
Error: Message must be at least 10 characters

(Submit with valid data)
Message sent successfully!
```

### Active Nav Link on Scroll

```javascript
// Highlight the nav link that corresponds to the currently visible section
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  sections.forEach(function(section) {
    const sectionTop = section.offsetTop - 100;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      // Remove active from all links
      navLinks.forEach(function(link) {
        link.classList.remove('active');
      });

      // Add active to the matching link
      const activeLink = document.querySelector('.nav-link[href="#' + section.id + '"]');
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
});

// The nav link for the currently visible section gets highlighted
// as the user scrolls through the page. The -100 offset accounts
// for the fixed navbar height.
```

On every scroll event, the code checks which section is currently in the viewport by comparing the scroll position with each section's top and bottom boundaries. The nav link whose href matches the visible section gets the 'active' class (highlighted with the accent color). The 100px offset accounts for the fixed navbar.

**Output:**

```
As the user scrolls past the About section, the 'About' nav link becomes highlighted. Scrolling to Projects highlights 'Projects', and so on.
```

## Common Mistakes

### Forgetting e.preventDefault() on Form Submit

**Wrong:**

```
document.getElementById('contactForm').addEventListener('submit', function(e) {
  // Missing e.preventDefault()!
  const name = document.getElementById('nameInput').value;
  console.log('Name:', name);
  // Page refreshes immediately, console.log is lost
});
```

The page refreshes when the form is submitted, losing all JavaScript state and any feedback messages.

**Correct:**

```
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();  // Stop the page from refreshing
  const name = document.getElementById('nameInput').value;
  console.log('Name:', name);
  // Now you can validate and show feedback without page refresh
});
```

By default, HTML forms refresh the page when submitted. `e.preventDefault()` stops this default behavior so JavaScript can handle the submission, validate fields, and show feedback without losing the page state.

### Not Unobserving After Scroll Animation

**Wrong:**

```
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Not calling unobserve -- animation triggers every time user scrolls past!
    }
  });
});
```

The animation replays every time the element enters the viewport. Scrolling up and down causes elements to flicker.

**Correct:**

```
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);  // Stop watching after animation
    }
  });
});
```

Call `unobserve` after adding the visible class so the animation only plays once. Without it, the observer keeps firing every time the element scrolls in and out of view.

### Smooth Scroll Not Working Because of href

**Wrong:**

```
// HTML: <a href="#about">About</a>
// Clicking jumps instantly to #about instead of smooth scrolling
// Because the default anchor behavior takes over
```

The browser's default anchor link behavior (instant jump) overrides the smooth scroll JavaScript.

**Correct:**

```
document.querySelectorAll('.nav-link').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();  // Stop default anchor behavior
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
```

Anchor links (``) have default browser behavior that instantly jumps to the target. You must call `e.preventDefault()` to stop this, then use `scrollIntoView({ behavior: 'smooth' })` for smooth scrolling.

### Hamburger Menu Not Closing After Link Click

**Wrong:**

```
// Menu opens on hamburger click, but stays open after clicking a nav link
document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('navLinks').classList.toggle('open');
});
// Nav links do not close the menu!
```

On mobile, after tapping a nav link, the menu stays open covering the content. The user has to manually close it.

**Correct:**

```
document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('navLinks').classList.toggle('open');
});

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-link').forEach(function(link) {
  link.addEventListener('click', function() {
    document.getElementById('navLinks').classList.remove('open');
    document.getElementById('hamburger').classList.remove('active');
  });
});
```

When a nav link is clicked, the menu should close automatically. Add a click listener to each nav link that removes the 'open' class from the menu. This is essential for a good mobile experience.

## Summary

- A portfolio website is the ultimate capstone project that combines all JavaScript concepts: DOM manipulation, event listeners, localStorage, closures, array methods, Intersection Observer, form validation, and responsive design.
- CSS custom properties (variables) enable easy theming. Define colors as --variable-name in :root, override them in .light-mode, and all elements using those variables update automatically.
- Smooth scroll navigation uses e.preventDefault() on anchor links and scrollIntoView({ behavior: 'smooth' }) to scroll to the target section.
- The typing effect uses a closure to maintain state (word index, character index, deleting flag) and setTimeout for recursive self-calling. It types, pauses, deletes, and cycles through words infinitely.
- Dark/light mode toggle: toggle a CSS class on the body, save the preference to localStorage, and load it on page start. CSS variables make the color switch automatic.
- Intersection Observer efficiently detects when elements enter the viewport. Use it for scroll animations (fade in, slide up) and skill bar animations. Always unobserve after the animation plays.
- Project filtering uses an array of project objects, filter() to match the selected category, and dynamic DOM creation to render project cards. The filter buttons use data-category attributes.
- Contact form validation checks each field (name length, email regex, message length), shows individual error messages, and displays a success message when all fields pass. e.preventDefault() stops page refresh.
- Mobile hamburger menu: toggle an 'open' class on the nav links container. Close the menu when a nav link is clicked. Use CSS transform for the slide-in animation.
- Active nav link highlighting: on scroll, compare window.scrollY with each section's offsetTop to determine which section is visible, then add the 'active' class to the corresponding nav link.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/javascript/project-interactive-portfolio/*
*Practice questions: https://learn.modernagecoders.com/resources/javascript/project-interactive-portfolio/practice/*
