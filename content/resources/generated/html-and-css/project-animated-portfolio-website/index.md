---
title: "Build an Animated Portfolio Website - HTML CSS Project with Dark Mode | Modern Age Coders"
description: "Build a stunning animated portfolio website with HTML and CSS. Includes smooth scroll, gradient hero, animated skill bars, project grid with hover effects, contact form, dark/light mode toggle, scroll animations, and glassmorphism. Complete code and 55+ questions."
slug: project-animated-portfolio-website
canonical: https://learn.modernagecoders.com/resources/html-and-css/project-animated-portfolio-website
category: "HTML and CSS"
keywords: ["portfolio website html css", "animated portfolio project", "dark mode css", "skill bars css", "glassmorphism css", "scroll animations css", "portfolio tutorial", "hover effects", "css portfolio for students", "responsive portfolio"]
---
# Project: Build an Animated Portfolio Website

**Difficulty:** Advanced  
**Reading time:** 65 min  
**Chapter:** 25  
**Practice questions:** 55

## What We Are Building

This is the final project of the HTML and CSS track — a **stunning animated portfolio website** built entirely with HTML and CSS. One tiny sliver of JavaScript is used for the dark mode toggle (literally 3 lines), but everything visual — animations, hover effects, scroll reveals, glassmorphism, gradients — is pure CSS.

The portfolio includes:

1. **Fixed navbar** with smooth anchor scrolling
2. **Hero section** with gradient text, animated background, and a pulsing CTA
3. **About section** with a glowing avatar and bio
4. **Skills section** with animated progress bars that fill on hover
5. **Projects grid** with beautiful hover effects revealing project details
6. **Contact form** with modern validation styling and `:has()`
7. **Dark/light mode toggle** using CSS variables + 3 lines of JS
8. **Scroll animations** with `@keyframes` and `animation-delay`
9. **Glassmorphism cards** with backdrop-filter: blur()
10. **Gradient borders** and neon glow effects
11. **Fully responsive** from phone to desktop

The portfolio belongs to 'Aarav Kulkarni' — a 16-year-old full-stack developer from Pune. His bio, projects, and skills tell a coherent story that you can easily customize with your own content.

## Why Build an Animated Portfolio?

### 1. It Is Your Calling Card

A portfolio is the first thing any internship, college, or client will look at. A custom-built portfolio (not a template) screams 'this person can actually build things'. It is worth 10x any line on a resume.

### 2. It Uses Everything You Have Learned

This project combines flexbox, grid, CSS variables, pseudo-elements, `:has()`, `@keyframes`, `clamp()`, transforms, transitions, and the modern CSS features from Chapter 23. Building it proves you can use the full toolbox.

### 3. Animations Make It Feel Alive

Smooth hover effects, scroll-in reveals, pulsing CTAs, and animated skill bars are what separate an 'okay' portfolio from one that looks like a professional product. These effects cost nothing to build once you know the patterns.

### 4. Dark Mode Shows Attention to Detail

A working dark mode with smooth transitions tells the viewer you care about user experience. It is also a chance to flex CSS variables in their best light.

### 5. It Is Yours to Keep

By the end of this chapter, Priya has a portfolio she can host, share, and update. She swaps in her real projects, changes the brand color, and ships. That confidence is worth more than any tutorial.

## Building the Portfolio Step by Step

### Step 1: Set Up Variables and Theme

Start with a dual theme: dark mode on by default (more impressive for a portfolio), light mode as an override. Define every color, spacing, radius, and shadow as a variable.

```
:root {
  --bg: #0b0f1e;
  --surface: #131833;
  --surface-2: #1a2040;
  --text: #f1f5f9;
  --muted: #94a3b8;
  --brand: #a855f7;
  --brand-2: #06b6d4;
  --accent: #ec4899;
  --border: rgba(255,255,255,0.08);
}

body.light {
  --bg: #fafafa;
  --surface: #ffffff;
  --surface-2: #f8fafc;
  --text: #0f172a;
  --muted: #64748b;
  --border: #e2e8f0;
}
```

### Step 2: Fixed Navbar with Smooth Scroll

```
html { scroll-behavior: smooth; }
.nav {
  position: fixed; top: 0; width: 100%;
  padding: 16px 32px;
  background: rgba(11, 15, 30, 0.7);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  z-index: 100;
}
```

Fixed at the top, blurred background for the frosted glass look, and smooth scrolling so anchor links animate.

### Step 3: Hero with Animated Background

The hero has a gradient heading, a pulsing CTA, and an animated background that slowly shifts colors.

```
.hero {
  min-height: 100dvh;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 20%, rgba(168,85,247,0.3), transparent 60%),
              radial-gradient(ellipse at 70% 80%, rgba(6,182,212,0.25), transparent 60%);
  animation: float 20s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -20px) scale(1.1); }
}

.hero h1 {
  font-size: clamp(40px, 7vw, 84px);
  line-height: 1.05;
  text-wrap: balance;
  background: linear-gradient(135deg, var(--brand), var(--brand-2), var(--accent));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeUp 0.8s ease-out;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Step 4: Skills with Animated Bars

```
.skill-bar { height: 10px; background: var(--surface-2); border-radius: 999px; overflow: hidden; }
.skill-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--brand), var(--brand-2));
  border-radius: 999px;
  width: var(--width, 0);
  animation: fill 1.5s ease-out forwards;
}
@keyframes fill {
  from { width: 0; }
  to { width: var(--width); }
}
```

The bar width is driven by a `--width` CSS variable on the element, so each skill can have a different value without new CSS rules.

### Step 5: Project Cards with Hover Reveals

```
.project { position: relative; border-radius: 18px; overflow: hidden; aspect-ratio: 4/3; cursor: pointer; }
.project .thumb { width: 100%; height: 100%; background: gradient; transition: transform 0.5s, filter 0.5s; }
.project:hover .thumb { transform: scale(1.08); filter: brightness(0.5); }
.project .info {
  position: absolute;
  inset: 0;
  padding: 24px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.4s, transform 0.4s;
}
.project:hover .info { opacity: 1; transform: translateY(0); }
```

### Step 6: Glassmorphism Cards

```
.glass {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
}
```

### Step 7: Dark Mode Toggle

Pure CSS dark mode is fine, but since we want a persistent toggle that remembers the user's choice, we use 3 lines of JavaScript to toggle a `.light` class on the body.

```
Toggle

  document.getElementById('themeBtn').addEventListener('click', () => {
    document.body.classList.toggle('light');
  });

```

Three lines. That is all. The CSS variables do the rest.

### Step 8: Scroll Animations

Elements animate in as they enter the viewport using CSS animations with `animation-delay` to stagger them.

```
.reveal {
  opacity: 0;
  transform: translateY(40px);
  animation: reveal 0.8s ease-out forwards;
}
.reveal:nth-child(2) { animation-delay: 0.15s; }
.reveal:nth-child(3) { animation-delay: 0.3s; }
@keyframes reveal {
  to { opacity: 1; transform: translateY(0); }
}
```

For true 'animate on scroll', you would use the Intersection Observer API (JavaScript). For a CSS-only effect, we simply animate everything on load with staggered delays — it still looks great.

Now let us see the ENTIRE animated portfolio in one complete, runnable file.

## Code Examples

### COMPLETE Animated Portfolio - Full HTML + CSS

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Aarav Kulkarni - Full Stack Developer</title>
<style>
  :root {
    --bg: #0b0f1e;
    --surface: #131833;
    --surface-2: #1a2040;
    --text: #f1f5f9;
    --muted: #94a3b8;
    --brand: #a855f7;
    --brand-2: #06b6d4;
    --accent: #ec4899;
    --border: rgba(255,255,255,0.08);
    --glass: rgba(255,255,255,0.04);
    --shadow: 0 20px 60px rgba(0,0,0,0.5);
    --radius: 18px;
    --nav-h: 72px;
  }
  body.light {
    --bg: #fafafa;
    --surface: #ffffff;
    --surface-2: #f8fafc;
    --text: #0f172a;
    --muted: #64748b;
    --border: #e2e8f0;
    --glass: rgba(0,0,0,0.03);
    --shadow: 0 20px 60px rgba(0,0,0,0.08);
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; scroll-padding-top: 90px; }
  body { font-family: 'Segoe UI', -apple-system, sans-serif; background: var(--bg); color: var(--text); line-height: 1.6; transition: background 0.4s, color 0.4s; overflow-x: hidden; }
  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; }

  /* NAV */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    padding: 16px 32px;
    display: flex; align-items: center; justify-content: space-between;
    background: color-mix(in oklab, var(--bg) 70%, transparent);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
  }
  .nav .brand { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 19px; }
  .nav .brand::before { content: ''; width: 32px; height: 32px; background: linear-gradient(135deg, var(--brand), var(--brand-2)); border-radius: 10px; box-shadow: 0 8px 20px rgba(168,85,247,0.4); }
  .nav .links { display: flex; gap: 28px; }
  .nav .links a { color: var(--muted); font-size: 14px; font-weight: 500; position: relative; transition: color 0.2s; }
  .nav .links a:hover { color: var(--text); }
  .nav .links a::after { content: ''; position: absolute; left: 0; bottom: -6px; width: 100%; height: 2px; background: linear-gradient(90deg, var(--brand), var(--brand-2)); transform: scaleX(0); transform-origin: right; transition: transform 0.3s; }
  .nav .links a:hover::after { transform: scaleX(1); transform-origin: left; }
  .theme-btn {
    padding: 10px 18px;
    background: var(--glass);
    color: var(--text);
    border: 1px solid var(--border);
    border-radius: 999px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    transition: all 0.2s;
  }
  .theme-btn:hover { background: var(--brand); color: white; border-color: var(--brand); }

  /* HERO */
  .hero {
    min-height: 100dvh;
    display: grid;
    place-items: center;
    text-align: center;
    padding: var(--nav-h) 24px 48px;
    position: relative;
    overflow: hidden;
  }
  .hero::before, .hero::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .hero::before {
    background: radial-gradient(ellipse at 30% 20%, rgba(168,85,247,0.25), transparent 55%),
                radial-gradient(ellipse at 70% 80%, rgba(6,182,212,0.22), transparent 55%),
                radial-gradient(ellipse at 50% 50%, rgba(236,72,153,0.15), transparent 60%);
    animation: floatBg 20s ease-in-out infinite alternate;
  }
  @keyframes floatBg {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(40px, -30px) scale(1.15); }
  }
  .hero-content { position: relative; z-index: 2; max-width: 900px; }
  .hero .eyebrow { display: inline-block; padding: 8px 20px; background: var(--glass); border: 1px solid var(--border); border-radius: 999px; font-size: 13px; color: var(--muted); margin-bottom: 24px; animation: fadeUp 0.8s ease-out; }
  .hero .eyebrow .dot { display: inline-block; width: 8px; height: 8px; background: #10b981; border-radius: 50%; margin-right: 8px; box-shadow: 0 0 10px #10b981; animation: pulse 2s ease-in-out infinite; }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.3); }
  }
  .hero h1 {
    font-size: clamp(40px, 7vw, 88px);
    line-height: 1.02;
    text-wrap: balance;
    letter-spacing: -2px;
    margin-bottom: 20px;
    background: linear-gradient(135deg, var(--brand) 0%, var(--brand-2) 50%, var(--accent) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: fadeUp 0.9s ease-out 0.1s backwards;
  }
  .hero p { font-size: clamp(16px, 1.8vw, 21px); color: var(--muted); max-width: 640px; margin: 0 auto 36px; text-wrap: pretty; animation: fadeUp 0.9s ease-out 0.25s backwards; }
  .hero-ctas { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; animation: fadeUp 0.9s ease-out 0.4s backwards; }
  .btn { padding: 14px 28px; border-radius: 12px; font-weight: 700; font-size: 15px; cursor: pointer; border: none; transition: transform 0.2s, box-shadow 0.2s; display: inline-flex; align-items: center; gap: 8px; }
  .btn-primary { background: linear-gradient(135deg, var(--brand), var(--accent)); color: white; box-shadow: 0 18px 40px rgba(168,85,247,0.4); position: relative; }
  .btn-primary::before { content: ''; position: absolute; inset: -2px; background: linear-gradient(135deg, var(--brand), var(--brand-2), var(--accent)); border-radius: 14px; z-index: -1; opacity: 0; transition: opacity 0.3s; filter: blur(12px); }
  .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 25px 50px rgba(168,85,247,0.55); }
  .btn-primary:hover::before { opacity: 1; }
  .btn-outline { background: var(--glass); color: var(--text); border: 1px solid var(--border); }
  .btn-outline:hover { background: var(--surface); border-color: var(--brand); }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* SECTIONS */
  section { padding: 96px 24px; max-width: 1100px; margin: 0 auto; position: relative; }
  .s-head { text-align: center; margin-bottom: 56px; }
  .s-head .kicker { color: var(--brand); font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px; }
  .s-head h2 { font-size: clamp(28px, 4vw, 48px); text-wrap: balance; letter-spacing: -1px; margin-bottom: 10px; }
  .s-head p { color: var(--muted); max-width: 600px; margin: 0 auto; }

  /* ABOUT */
  .about { display: grid; grid-template-columns: 300px 1fr; gap: 56px; align-items: center; }
  .avatar {
    aspect-ratio: 1;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--brand), var(--brand-2), var(--accent));
    display: grid;
    place-items: center;
    color: white;
    font-size: 92px;
    font-weight: 800;
    position: relative;
    box-shadow: 0 30px 80px rgba(168,85,247,0.3);
    animation: glow 4s ease-in-out infinite;
  }
  @keyframes glow {
    0%, 100% { box-shadow: 0 30px 80px rgba(168,85,247,0.3); }
    50% { box-shadow: 0 40px 100px rgba(6,182,212,0.4); }
  }
  .about-text h3 { font-size: 28px; margin-bottom: 12px; }
  .about-text p { color: var(--muted); margin-bottom: 12px; line-height: 1.7; }
  .tags { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 16px; }
  .tag { padding: 6px 14px; background: var(--glass); border: 1px solid var(--border); border-radius: 999px; font-size: 13px; color: var(--text); }

  /* SKILLS */
  .skills { display: grid; gap: 20px; max-width: 720px; margin: 0 auto; }
  .skill { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 20px 24px; transition: transform 0.3s, border-color 0.3s; }
  .skill:hover { transform: translateX(6px); border-color: var(--brand); }
  .skill-header { display: flex; justify-content: space-between; margin-bottom: 10px; font-weight: 700; font-size: 15px; }
  .skill-header .pct { color: var(--brand); }
  .skill-bar { height: 10px; background: var(--surface-2); border-radius: 999px; overflow: hidden; }
  .skill-fill { height: 100%; background: linear-gradient(90deg, var(--brand), var(--brand-2)); border-radius: 999px; width: 0; animation: fill 1.6s ease-out 0.3s forwards; box-shadow: 0 0 20px rgba(168,85,247,0.4); }
  @keyframes fill { to { width: var(--width); } }

  /* PROJECTS */
  .project-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
  .project {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    aspect-ratio: 4/3;
    cursor: pointer;
    border: 1px solid var(--border);
    transform: translateY(0);
    transition: transform 0.4s;
  }
  .project:hover { transform: translateY(-8px); }
  .project .thumb {
    position: absolute; inset: 0;
    transition: transform 0.6s, filter 0.6s;
  }
  .project:hover .thumb { transform: scale(1.12); filter: brightness(0.35); }
  .p1 .thumb { background: linear-gradient(135deg, #7c3aed, #ec4899); }
  .p2 .thumb { background: linear-gradient(135deg, #06b6d4, #0ea5e9); }
  .p3 .thumb { background: linear-gradient(135deg, #f59e0b, #ef4444); }
  .p4 .thumb { background: linear-gradient(135deg, #10b981, #06b6d4); }
  .p5 .thumb { background: linear-gradient(135deg, #8b5cf6, #3b82f6); }
  .p6 .thumb { background: linear-gradient(135deg, #ec4899, #f43f5e); }
  .project .title-wrap {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 24px;
    color: white;
    z-index: 2;
    background: linear-gradient(0deg, rgba(0,0,0,0.8), transparent);
    transform: translateY(60%);
    transition: transform 0.4s;
  }
  .project:hover .title-wrap { transform: translateY(0); }
  .project h3 { font-size: 22px; margin-bottom: 8px; }
  .project p { font-size: 14px; opacity: 0.85; margin-bottom: 12px; }
  .project .techs { display: flex; gap: 8px; flex-wrap: wrap; }
  .project .techs span { padding: 3px 10px; background: rgba(255,255,255,0.15); border-radius: 999px; font-size: 11px; backdrop-filter: blur(10px); }

  /* CONTACT */
  .contact-form {
    background: var(--glass);
    backdrop-filter: blur(20px);
    border: 1px solid var(--border);
    border-radius: 24px;
    padding: 40px;
    max-width: 520px;
    margin: 0 auto;
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  .contact-form:has(input:valid, textarea:valid):not(:has(input:invalid, textarea:invalid)) { border-color: #10b981; box-shadow: 0 0 40px rgba(16,185,129,0.15); }
  .contact-form:has(input:invalid, textarea:invalid) { border-color: rgba(239,68,68,0.4); }
  .contact-form label { display: block; margin-bottom: 18px; font-size: 13px; color: var(--muted); font-weight: 600; }
  .contact-form input, .contact-form textarea {
    display: block; width: 100%; margin-top: 8px;
    padding: 14px 16px;
    background: var(--surface);
    color: var(--text);
    border: 1px solid var(--border);
    border-radius: 12px;
    font-size: 15px;
    font-family: inherit;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .contact-form textarea { resize: vertical; min-height: 110px; }
  .contact-form input:focus, .contact-form textarea:focus { border-color: var(--brand); box-shadow: 0 0 0 4px rgba(168,85,247,0.15); }
  .contact-form input:not(:placeholder-shown):valid, .contact-form textarea:not(:placeholder-shown):valid { border-color: #10b981; }
  .contact-form input:not(:placeholder-shown):invalid, .contact-form textarea:not(:placeholder-shown):invalid { border-color: #ef4444; }
  .contact-form button {
    width: 100%;
    padding: 15px;
    background: linear-gradient(135deg, var(--brand), var(--accent));
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 8px;
    box-shadow: 0 15px 40px rgba(168,85,247,0.35);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .contact-form button:hover { transform: translateY(-2px); box-shadow: 0 20px 50px rgba(168,85,247,0.5); }
  .contact-form:has(input:invalid, textarea:invalid) button { opacity: 0.35; pointer-events: none; }

  /* FOOTER */
  footer { text-align: center; padding: 48px 24px; color: var(--muted); border-top: 1px solid var(--border); margin-top: 40px; font-size: 14px; }
  footer .socials { display: flex; justify-content: center; gap: 16px; margin-bottom: 16px; }
  footer .socials a { padding: 10px 18px; border: 1px solid var(--border); border-radius: 10px; transition: all 0.2s; }
  footer .socials a:hover { background: var(--brand); color: white; border-color: var(--brand); transform: translateY(-2px); }

  /* RESPONSIVE */
  @media (max-width: 800px) {
    .nav .links { display: none; }
    .about { grid-template-columns: 1fr; text-align: center; }
    .avatar { max-width: 220px; margin: 0 auto; font-size: 72px; }
    .tags { justify-content: center; }
  }
</style>
</head>
<body>
  <!-- NAV -->
  <header class="nav">
    <a href="#" class="brand">Aarav.dev</a>
    <nav class="links">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
    <button class="theme-btn" id="themeBtn">Light Mode</button>
  </header>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-content">
      <div class="eyebrow"><span class="dot"></span>Available for internships</div>
      <h1>Aarav Kulkarni<br>Full Stack Developer</h1>
      <p>I am a 16-year-old developer from Pune who builds fast, beautiful web apps with React, Node, and a love for CSS animations.</p>
      <div class="hero-ctas">
        <a href="#projects" class="btn btn-primary">View My Work</a>
        <a href="#contact" class="btn btn-outline">Get In Touch</a>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about">
    <div class="s-head">
      <div class="kicker">About Me</div>
      <h2>Building the Web, One Pixel at a Time</h2>
      <p>A little background about who I am and what I love.</p>
    </div>
    <div class="about">
      <div class="avatar">A</div>
      <div class="about-text">
        <h3>Hi, I am Aarav</h3>
        <p>I started coding when I was 13, inspired by a game my older sister Priya was building. Four years later, I have shipped a dozen projects, contributed to open source, and helped my classmates build their first websites.</p>
        <p>When I am not coding, I play chess, read sci-fi, and practice competitive maths with Rohan and Ishita. I am currently in Grade 11 at a school in Pune, and I am looking for a summer internship.</p>
        <div class="tags">
          <span class="tag">React</span>
          <span class="tag">Next.js</span>
          <span class="tag">TypeScript</span>
          <span class="tag">Node.js</span>
          <span class="tag">CSS</span>
          <span class="tag">Chess</span>
          <span class="tag">Open Source</span>
        </div>
      </div>
    </div>
  </section>

  <!-- SKILLS -->
  <section id="skills">
    <div class="s-head">
      <div class="kicker">Skills</div>
      <h2>What I Work With Every Day</h2>
      <p>The tools and languages I use to build things.</p>
    </div>
    <div class="skills">
      <div class="skill">
        <div class="skill-header"><span>HTML and CSS</span><span class="pct">95%</span></div>
        <div class="skill-bar"><div class="skill-fill" style="--width: 95%"></div></div>
      </div>
      <div class="skill">
        <div class="skill-header"><span>JavaScript and TypeScript</span><span class="pct">90%</span></div>
        <div class="skill-bar"><div class="skill-fill" style="--width: 90%"></div></div>
      </div>
      <div class="skill">
        <div class="skill-header"><span>React and Next.js</span><span class="pct">85%</span></div>
        <div class="skill-bar"><div class="skill-fill" style="--width: 85%"></div></div>
      </div>
      <div class="skill">
        <div class="skill-header"><span>Node.js</span><span class="pct">75%</span></div>
        <div class="skill-bar"><div class="skill-fill" style="--width: 75%"></div></div>
      </div>
      <div class="skill">
        <div class="skill-header"><span>Python</span><span class="pct">70%</span></div>
        <div class="skill-bar"><div class="skill-fill" style="--width: 70%"></div></div>
      </div>
      <div class="skill">
        <div class="skill-header"><span>Design (Figma)</span><span class="pct">65%</span></div>
        <div class="skill-bar"><div class="skill-fill" style="--width: 65%"></div></div>
      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section id="projects">
    <div class="s-head">
      <div class="kicker">Work</div>
      <h2>Selected Projects</h2>
      <p>A few things I am proud of. Hover to see details.</p>
    </div>
    <div class="project-grid">
      <div class="project p1">
        <div class="thumb"></div>
        <div class="title-wrap">
          <h3>Kalpana Quiz</h3>
          <p>A multiplayer quiz app with live scoring and leaderboards.</p>
          <div class="techs"><span>React</span><span>Socket.io</span><span>MongoDB</span></div>
        </div>
      </div>
      <div class="project p2">
        <div class="thumb"></div>
        <div class="title-wrap">
          <h3>Trishul Weather</h3>
          <p>Fast weather dashboard with beautiful charts and forecasts.</p>
          <div class="techs"><span>Next.js</span><span>Chart.js</span><span>OpenWeather</span></div>
        </div>
      </div>
      <div class="project p3">
        <div class="thumb"></div>
        <div class="title-wrap">
          <h3>ShikshaBot</h3>
          <p>An AI homework helper trained on class 10 and 11 textbooks.</p>
          <div class="techs"><span>Python</span><span>OpenAI</span><span>Flask</span></div>
        </div>
      </div>
      <div class="project p4">
        <div class="thumb"></div>
        <div class="title-wrap">
          <h3>Chess Tracker</h3>
          <p>Track your chess games, rating, and opening repertoire.</p>
          <div class="techs"><span>React</span><span>Firebase</span></div>
        </div>
      </div>
      <div class="project p5">
        <div class="thumb"></div>
        <div class="title-wrap">
          <h3>Bhasha Notes</h3>
          <p>Bilingual note-taking app that translates as you type.</p>
          <div class="techs"><span>TypeScript</span><span>i18next</span></div>
        </div>
      </div>
      <div class="project p6">
        <div class="thumb"></div>
        <div class="title-wrap">
          <h3>VedaTimer</h3>
          <p>Pomodoro timer with a chakra-themed minimalist design.</p>
          <div class="techs"><span>HTML</span><span>CSS</span><span>JS</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact">
    <div class="s-head">
      <div class="kicker">Contact</div>
      <h2>Let Us Build Something</h2>
      <p>I am available for internships and freelance work.</p>
    </div>
    <form class="contact-form">
      <label>Name<input type="text" placeholder="Your name" minlength="2" required></label>
      <label>Email<input type="email" placeholder="you@example.com" required></label>
      <label>Message<textarea placeholder="How can I help?" minlength="10" required></textarea></label>
      <button type="submit">Send Message</button>
    </form>
  </section>

  <!-- FOOTER -->
  <footer>
    <div class="socials">
      <a href="#">GitHub</a>
      <a href="#">LinkedIn</a>
      <a href="#">Twitter</a>
    </div>
    <p>Built with HTML and CSS by Aarav Kulkarni. 2026.</p>
  </footer>

  <script>
    document.getElementById('themeBtn').addEventListener('click', function() {
      document.body.classList.toggle('light');
      this.textContent = document.body.classList.contains('light') ? 'Dark Mode' : 'Light Mode';
    });
  </script>
</body>
</html>
```

The complete animated portfolio in a single file. Dark mode by default. Uses CSS variables for theming, clamp() for fluid typography, @keyframes for fade-up hero animations, animated background gradients, animated skill bars with CSS variables for width, project hover effects with transform and filter, glassmorphism contact form with :has() validation, and a smooth dark/light mode toggle. Three lines of JavaScript. Everything else is pure CSS.

**Output:**

```
A stunning portfolio with: animated gradient background hero, gradient text heading, pulsing CTAs, glowing avatar, animated skill bars, 6 project cards with dramatic hover effects, a glassmorphism contact form with live validation, and a working dark/light mode toggle. Fully responsive.
```

### Hero with Animated Gradient Background

```html
<!DOCTYPE html>
<html>
<head>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: #0b0f1e; color: white; }
  .hero { min-height: 100dvh; display: grid; place-items: center; text-align: center; padding: 24px; position: relative; overflow: hidden; }
  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 30% 20%, rgba(168,85,247,0.3), transparent 55%),
      radial-gradient(ellipse at 70% 80%, rgba(6,182,212,0.25), transparent 55%),
      radial-gradient(ellipse at 50% 50%, rgba(236,72,153,0.2), transparent 60%);
    animation: floatBg 20s ease-in-out infinite alternate;
    pointer-events: none;
  }
  @keyframes floatBg {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(40px, -30px) scale(1.15); }
  }
  .content { position: relative; z-index: 2; max-width: 900px; }
  h1 {
    font-size: clamp(40px, 7vw, 84px);
    line-height: 1.02;
    text-wrap: balance;
    letter-spacing: -2px;
    margin-bottom: 20px;
    background: linear-gradient(135deg, #a855f7, #06b6d4, #ec4899);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: fadeUp 1s ease-out;
  }
  p { font-size: clamp(16px, 1.8vw, 21px); color: #94a3b8; max-width: 600px; margin: 0 auto 32px; animation: fadeUp 1s ease-out 0.2s backwards; }
  .btn {
    display: inline-block;
    padding: 14px 30px;
    background: linear-gradient(135deg, #a855f7, #ec4899);
    color: white;
    border-radius: 12px;
    font-weight: 700;
    text-decoration: none;
    box-shadow: 0 18px 40px rgba(168,85,247,0.4);
    animation: fadeUp 1s ease-out 0.4s backwards;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .btn:hover { transform: translateY(-3px); box-shadow: 0 25px 50px rgba(168,85,247,0.55); }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
</style>
</head>
<body>
  <section class="hero">
    <div class="content">
      <h1>Priya Sharma<br>Web Developer</h1>
      <p>I build fast, beautiful web apps from Pune. Currently looking for my first internship.</p>
      <a href="#" class="btn">View My Work</a>
    </div>
  </section>
</body>
</html>
```

A standalone animated hero section. The background uses three radial gradients layered together, slowly floating with `@keyframes floatBg`. The heading, paragraph, and button each fade up with staggered `animation-delay`. Gradient text uses `background-clip: text`.

**Output:**

```
A dark hero with soft purple, cyan, and pink glows drifting in the background. A huge gradient heading fades up, followed by the subtitle and CTA button. A cohesive, high-quality intro.
```

### Project Card with Hover Reveal

```html
<!DOCTYPE html>
<html>
<head>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: #0b0f1e; padding: 40px 24px; display: grid; gap: 24px; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); max-width: 1000px; margin: 0 auto; }
  .project {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    aspect-ratio: 4/3;
    cursor: pointer;
    border: 1px solid rgba(255,255,255,0.08);
    transition: transform 0.4s;
  }
  .project:hover { transform: translateY(-8px); }
  .project .thumb {
    position: absolute; inset: 0;
    transition: transform 0.6s, filter 0.6s;
  }
  .project:hover .thumb { transform: scale(1.15); filter: brightness(0.35) saturate(1.3); }
  .p1 .thumb { background: linear-gradient(135deg, #7c3aed, #ec4899); }
  .p2 .thumb { background: linear-gradient(135deg, #06b6d4, #0ea5e9); }
  .p3 .thumb { background: linear-gradient(135deg, #f59e0b, #ef4444); }
  .title-wrap {
    position: absolute;
    left: 0; right: 0; bottom: 0;
    padding: 24px;
    color: white;
    background: linear-gradient(0deg, rgba(0,0,0,0.85), transparent);
    transform: translateY(60%);
    transition: transform 0.4s;
  }
  .project:hover .title-wrap { transform: translateY(0); }
  h3 { font-size: 22px; margin-bottom: 8px; }
  p { font-size: 14px; opacity: 0.85; margin-bottom: 12px; line-height: 1.6; }
  .techs { display: flex; gap: 8px; flex-wrap: wrap; }
  .techs span { padding: 3px 10px; background: rgba(255,255,255,0.18); border-radius: 999px; font-size: 11px; backdrop-filter: blur(10px); font-weight: 600; }
</style>
</head>
<body>
  <div class="project p1">
    <div class="thumb"></div>
    <div class="title-wrap">
      <h3>Kalpana Quiz</h3>
      <p>A multiplayer quiz with live scoring and leaderboards.</p>
      <div class="techs"><span>React</span><span>Socket.io</span></div>
    </div>
  </div>
  <div class="project p2">
    <div class="thumb"></div>
    <div class="title-wrap">
      <h3>Trishul Weather</h3>
      <p>Beautiful weather dashboard with charts and forecasts.</p>
      <div class="techs"><span>Next.js</span><span>Chart.js</span></div>
    </div>
  </div>
  <div class="project p3">
    <div class="thumb"></div>
    <div class="title-wrap">
      <h3>ShikshaBot</h3>
      <p>An AI homework helper trained on NCERT textbooks.</p>
      <div class="techs"><span>Python</span><span>OpenAI</span></div>
    </div>
  </div>
</body>
</html>
```

Each project card shows only its title (peeking from the bottom) by default. On hover, the card lifts, the thumbnail zooms in and darkens, and the title-wrap slides fully into view showing the description and tech tags. A dramatic, interactive pattern using only transforms and filters.

**Output:**

```
Three colorful project cards. Hovering any card lifts it up, darkens the thumbnail, zooms it slightly, and reveals a description and tech tags from the bottom edge.
```

### Animated Skill Bars with CSS Variable Width

```html
<!DOCTYPE html>
<html>
<head>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: #0b0f1e; color: white; padding: 60px 24px; }
  .wrap { max-width: 600px; margin: 0 auto; }
  h1 { text-align: center; margin-bottom: 32px; color: #a855f7; font-size: 32px; }
  .skill {
    background: #131833;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    padding: 20px 24px;
    margin-bottom: 16px;
    transition: transform 0.3s, border-color 0.3s;
  }
  .skill:hover { transform: translateX(8px); border-color: #a855f7; }
  .skill-header { display: flex; justify-content: space-between; margin-bottom: 10px; font-weight: 700; font-size: 15px; }
  .pct { color: #a855f7; }
  .bar { height: 10px; background: #1a2040; border-radius: 999px; overflow: hidden; }
  .fill {
    height: 100%;
    background: linear-gradient(90deg, #a855f7, #06b6d4);
    border-radius: 999px;
    width: 0;
    animation: fill 1.6s ease-out 0.3s forwards;
    box-shadow: 0 0 20px rgba(168,85,247,0.5);
  }
  @keyframes fill { to { width: var(--width); } }
</style>
</head>
<body>
  <div class="wrap">
    <h1>Ishita's Skills</h1>
    <div class="skill">
      <div class="skill-header"><span>HTML and CSS</span><span class="pct">95%</span></div>
      <div class="bar"><div class="fill" style="--width: 95%"></div></div>
    </div>
    <div class="skill">
      <div class="skill-header"><span>JavaScript</span><span class="pct">88%</span></div>
      <div class="bar"><div class="fill" style="--width: 88%"></div></div>
    </div>
    <div class="skill">
      <div class="skill-header"><span>React</span><span class="pct">80%</span></div>
      <div class="bar"><div class="fill" style="--width: 80%"></div></div>
    </div>
    <div class="skill">
      <div class="skill-header"><span>Python</span><span class="pct">65%</span></div>
      <div class="bar"><div class="fill" style="--width: 65%"></div></div>
    </div>
  </div>
</body>
</html>
```

The key trick: each skill bar's target width is set via an inline CSS variable (`style="--width: 95%"`). The `@keyframes fill` animation reads that variable with `width: var(--width)`. One animation, one class, different values per bar. Much cleaner than writing a separate animation per skill.

**Output:**

```
Four skill bars that smoothly fill from 0 to their target width when the page loads. Each bar has a neon glow. Hovering the row slides it slightly right and highlights the border.
```

### Glassmorphism Contact Form with :has() Validation

```html
<!DOCTYPE html>
<html>
<head>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Segoe UI', sans-serif;
    background: #0b0f1e;
    color: white;
    min-height: 100vh;
    padding: 60px 24px;
    position: relative;
    overflow-x: hidden;
  }
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background: radial-gradient(ellipse at 30% 30%, rgba(168,85,247,0.3), transparent 55%),
                radial-gradient(ellipse at 70% 70%, rgba(6,182,212,0.3), transparent 55%);
    pointer-events: none;
    z-index: 0;
  }
  h1 { text-align: center; margin-bottom: 32px; background: linear-gradient(135deg, #a855f7, #06b6d4); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; font-size: 36px; position: relative; z-index: 1; }
  form {
    position: relative;
    z-index: 1;
    max-width: 500px;
    margin: 0 auto;
    padding: 40px;
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(25px);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 24px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.4);
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  form:has(input:valid, textarea:valid):not(:has(input:invalid, textarea:invalid)) {
    border-color: rgba(16,185,129,0.5);
    box-shadow: 0 0 40px rgba(16,185,129,0.2);
  }
  form:has(input:invalid, textarea:invalid) {
    border-color: rgba(239,68,68,0.4);
  }
  label { display: block; margin-bottom: 18px; font-size: 13px; color: #cbd5e1; font-weight: 600; }
  input, textarea {
    display: block; width: 100%; margin-top: 8px;
    padding: 14px 16px;
    background: rgba(255,255,255,0.06);
    color: white;
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 12px;
    font-size: 15px;
    font-family: inherit;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  textarea { resize: vertical; min-height: 110px; }
  input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.4); }
  input:focus, textarea:focus { border-color: #a855f7; box-shadow: 0 0 0 4px rgba(168,85,247,0.2); }
  input:not(:placeholder-shown):valid, textarea:not(:placeholder-shown):valid { border-color: #10b981; }
  input:not(:placeholder-shown):invalid, textarea:not(:placeholder-shown):invalid { border-color: #ef4444; }
  button {
    width: 100%;
    padding: 15px;
    background: linear-gradient(135deg, #a855f7, #ec4899);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 6px;
    box-shadow: 0 15px 40px rgba(168,85,247,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  button:hover { transform: translateY(-2px); box-shadow: 0 22px 50px rgba(168,85,247,0.55); }
  form:has(input:invalid, textarea:invalid) button { opacity: 0.3; pointer-events: none; }
</style>
</head>
<body>
  <h1>Contact Ishaan</h1>
  <form>
    <label>Name<input type="text" placeholder="Your name" minlength="2" required></label>
    <label>Email<input type="email" placeholder="you@example.com" required></label>
    <label>Message<textarea placeholder="How can I help?" minlength="10" required></textarea></label>
    <button type="submit">Send Message</button>
  </form>
</body>
</html>
```

A glassmorphism form: semi-transparent background, `backdrop-filter: blur(25px)`, and soft borders. The form reacts with `:has()`: red border if any field is invalid, green glow if all fields are valid. Submit button is disabled while invalid. Background radial gradients add depth behind the glass.

**Output:**

```
A beautiful frosted-glass form floating on a dark background with soft purple and cyan glows. As you type, the border changes color based on validation state. Submit is disabled until everything is valid.
```

### Dark/Light Mode Toggle with CSS Variables

```html
<!DOCTYPE html>
<html>
<head>
<style>
  :root {
    --bg: #0b0f1e;
    --surface: #131833;
    --text: #f1f5f9;
    --muted: #94a3b8;
    --brand: #a855f7;
    --border: rgba(255,255,255,0.1);
  }
  body.light {
    --bg: #fafafa;
    --surface: #ffffff;
    --text: #0f172a;
    --muted: #64748b;
    --brand: #7c3aed;
    --border: #e2e8f0;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Segoe UI', sans-serif;
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
    padding: 60px 24px;
    transition: background 0.4s, color 0.4s;
  }
  .theme-btn {
    position: fixed;
    top: 20px; right: 20px;
    padding: 12px 22px;
    background: var(--brand);
    color: white;
    border: none;
    border-radius: 999px;
    cursor: pointer;
    font-weight: 700;
    font-size: 13px;
    box-shadow: 0 10px 30px rgba(168,85,247,0.4);
    transition: transform 0.2s;
  }
  .theme-btn:hover { transform: translateY(-2px); }
  h1 { color: var(--brand); font-size: 36px; margin-bottom: 16px; max-width: 600px; margin-left: auto; margin-right: auto; }
  .card { max-width: 600px; margin: 0 auto; background: var(--surface); border: 1px solid var(--border); padding: 32px; border-radius: 20px; transition: background 0.4s, border-color 0.4s; }
  .card p { color: var(--muted); line-height: 1.7; }
</style>
</head>
<body>
  <button class="theme-btn" id="btn">Light Mode</button>
  <div class="card">
    <h1>Kavya's Notes</h1>
    <p>This entire page switches between dark and light mode with one CSS class toggle. Every color is a variable, and the body.light class overrides them. Try the button in the top-right corner.</p>
    <p>The transition on background and color makes the switch smooth. No external libraries, no complicated JavaScript — just three lines of JS and CSS variables.</p>
  </div>
  <script>
    const btn = document.getElementById('btn');
    btn.addEventListener('click', function() {
      document.body.classList.toggle('light');
      btn.textContent = document.body.classList.contains('light') ? 'Dark Mode' : 'Light Mode';
    });
  </script>
</body>
</html>
```

The simplest possible dark mode toggle. CSS variables for all colors on `:root` (dark defaults). Override them on `body.light` (light mode). A `transition` on `background` and `color` makes the switch smooth. JavaScript is just 3 lines: toggle the class, update button text. That is it.

**Output:**

```
A card on a dark background. Clicking the top-right button smoothly transitions the entire page to a clean light theme. Click again to go back. The button text updates to reflect the current action.
```

## Common Mistakes

### Using overflow: hidden on the body (Breaks Sticky/Fixed)

**Wrong:**

```
body { overflow: hidden; }
/* Hoping to stop horizontal scroll */
```

`overflow: hidden` on body kills vertical scroll too. The whole page becomes unscrollable.

**Correct:**

```
body { overflow-x: hidden; }
/* Only stops horizontal scroll */
```

If your animated background is causing a horizontal scrollbar, use `overflow-x: hidden` on the body to prevent it. Using plain `overflow: hidden` blocks vertical scrolling too and breaks the whole page.

### Forgetting Fallback Color with background-clip: text

**Wrong:**

```
.heading {
  background: linear-gradient(135deg, red, blue);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  /* In very old browsers, text becomes invisible! */
}
```

If `background-clip: text` is not supported, the text becomes invisible because `-webkit-text-fill-color: transparent` still applies.

**Correct:**

```
.heading {
  color: red; /* Fallback color */
  background: linear-gradient(135deg, red, blue);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

Set an explicit `color` as a fallback before the background-clip tricks. In 2026 this is rarely an issue, but it is still good practice for defensive CSS.

### Animating Too Many Properties at Once

**Wrong:**

```
.card {
  transition: all 0.3s;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
  filter: brightness(1.1);
  background: red;
  margin: 10px;
}
```

`transition: all` animates every changed property, including layout-affecting ones like `margin`. That triggers layout recalculation and causes jank.

**Correct:**

```
.card {
  transition: transform 0.3s, box-shadow 0.3s, filter 0.3s;
  /* Only animate properties that do not trigger layout */
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
  filter: brightness(1.1);
}
```

Prefer `transform`, `opacity`, and `filter` for animations — they are GPU-accelerated. Avoid animating `margin`, `width`, `height`, or `padding` because they force the browser to recalculate layout.

### Gradient Text Not Showing Because of Color

**Wrong:**

```
.heading {
  color: white;
  background: linear-gradient(135deg, red, blue);
  background-clip: text;
  /* Missing -webkit-text-fill-color: transparent */
}
```

The text stays white because the color is not set to transparent. The gradient background is clipped to the text shape but hidden behind the solid color fill.

**Correct:**

```
.heading {
  background: linear-gradient(135deg, red, blue);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent; /* standard fallback */
}
```

Background-clip to text only shows through if the text fill is transparent. Use `-webkit-text-fill-color: transparent` (for WebKit) and `color: transparent` as a standard fallback.

## Summary

- Start with dark mode variables on `:root` and light mode overrides on `body.light`. A single class toggle flips the whole theme. Add a `transition` on `background` and `color` for a smooth fade.
- Use `html { scroll-behavior: smooth }` and `scroll-padding-top` matching your navbar height so anchor links animate to sections with the heading visible below the nav.
- Build the hero with `min-height: 100dvh` and layered radial-gradient backgrounds that animate slowly with `@keyframes` for a dreamy ambient effect.
- Gradient text: `background: linear-gradient(...); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;`. Always set a fallback `color`.
- Stagger entry animations with `animation-delay`: `.eyebrow` at 0s, `h1` at 0.1s, `p` at 0.25s, `.ctas` at 0.4s. The `backwards` fill-mode prevents a flash before the delay.
- Animated skill bars: set the target width via an inline `--width` CSS variable on each bar. One `@keyframes fill { to { width: var(--width); } }` animation handles every bar.
- Project cards use `aspect-ratio: 4/3`, `overflow: hidden`, and hover effects: scale the thumbnail, darken it, and slide the info overlay up with `transform`.
- Glassmorphism = semi-transparent background (`rgba(255,255,255,0.05)`) + `backdrop-filter: blur(20px)` + a thin border. Looks best against a colorful background.
- Use `:has()` for a reactive contact form: `form:has(input:valid):not(:has(input:invalid))` matches when every field is valid. Combine with `:not(:placeholder-shown)` so empty fields do not show red immediately.
- Three lines of JavaScript is all you need for a persistent dark mode toggle: get the button, add a click listener, toggle a class on the body.
- For smooth performance, animate `transform`, `opacity`, and `filter` — not `width`, `height`, `margin`, or `padding`. The first three are GPU-accelerated; the others force layout recalculation.
- Neon glow effect: `box-shadow: 0 0 20px rgba(168,85,247,0.5)` or double/triple shadows for depth. Works great on skill bars, buttons, and avatars.

## Related Topics

- undefined
- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/html-and-css/project-animated-portfolio-website/*
*Practice questions: https://learn.modernagecoders.com/resources/html-and-css/project-animated-portfolio-website/practice/*
