---
title: "Build a Complete SaaS Landing Page - Full HTML CSS Project | Modern Age Coders"
description: "Build a full responsive SaaS landing page from scratch with HTML and CSS only. Includes navbar, hero, features grid, pricing cards, testimonials, FAQ, and footer. Complete code, modern design, 55+ practice questions."
slug: project-build-a-landing-page
canonical: https://learn.modernagecoders.com/resources/html-and-css/project-build-a-landing-page
category: "HTML and CSS"
keywords: ["build landing page html css", "saas landing page tutorial", "responsive landing page", "pricing section css", "hero section css", "features grid", "testimonials css", "footer css", "complete landing page project", "css project"]
---
# Project: Build a Complete SaaS Landing Page

**Difficulty:** Advanced  
**Reading time:** 65 min  
**Chapter:** 24  
**Practice questions:** 55

## What We Are Building

In this project you will build a **complete, production-quality SaaS landing page** from scratch using only HTML and CSS. No framework. No JavaScript. No libraries. Just the fundamentals you have learned across all 23 previous chapters.

The finished page has 7 sections:

1. **Navbar** - logo, nav links, and a CTA button (flex layout)
2. **Hero** - big headline with gradient text, subheadline, two CTAs, and a visual on the right (grid layout)
3. **Features** - 3-column grid of feature cards (`auto-fit minmax`)
4. **Pricing** - 3 pricing cards with the middle one highlighted
5. **Testimonials** - user avatars and quotes
6. **FAQ** - accordion using native `` and ``
7. **Footer** - columns of links and a bottom bar

The whole page uses:

- CSS custom properties for theming (one line to change the brand color)
- clamp() for fluid typography (no media queries for type)
- Grid and flexbox for layout
- Modern hover effects and transitions
- Responsive design for phone, tablet, and desktop

You will build the SaaS product 'SkyPanel' - a fictional dashboard tool. Every section has real content written by Indian students: Aarav, Priya, Rohan, Ishita, and Kavya.

## Why Build a Landing Page?

### 1. It Is the Most Common Frontend Job

Every company, product, and founder needs a landing page. Whether you freelance, join a startup, or build your own products, the ability to ship a polished landing page in an afternoon is one of the highest-leverage skills a developer can have.

### 2. It Exercises Every CSS Skill

A good landing page uses almost every topic in this book: flexbox for the navbar, grid for the hero and feature cards, clamp() for fluid type, variables for theming, transitions for hover states, pseudo-elements for ribbons, and the `` element for the FAQ. If you can build this, you know CSS.

### 3. You Can Reuse Every Section

The navbar, hero, feature grid, pricing cards, testimonials, FAQ, and footer are reusable building blocks. Once you have built them, you can drop them into any future project: a portfolio, a product site, a school club page, a fundraiser.

### 4. Design That Works at Every Size

The page is responsive from a 320px phone to a 1600px desktop. You will learn how to structure sections that look great at every size without shipping a maintenance nightmare of media queries. Modern CSS (container queries, clamp, auto-fit) does most of the work.

### 5. It Looks Like a Real Product

This is not a toy example. By the end, Aarav can open his browser, load the page, and it looks like something a real company would ship. That confidence is worth more than any tutorial.

## Building the Landing Page Step by Step

### Step 1: HTML Structure

Start with a semantic HTML skeleton. Use ``, ``, ``, and `` for accessibility. Each section has a clear role.

```
 ... 

   ... 
   ... 
   ... 
   ... 
   ... 

 ... 
```

### Step 2: CSS Variables and Reset

Define a design token system at the top of the stylesheet. Spacing scale, type scale, colors, radii, and shadows all live in one place.

```
:root {
  --brand: #7c3aed;
  --brand-2: #ec4899;
  --bg: #fafaf9;
  --surface: #ffffff;
  --text: #0f172a;
  --muted: #64748b;
  --border: #e2e8f0;
  --radius: 14px;
  --shadow: 0 10px 30px rgba(0,0,0,0.08);
  --shadow-lg: 0 25px 60px rgba(124,58,237,0.2);
  --s-4: 16px; --s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
```

### Step 3: Navbar with Flexbox

A simple horizontal nav with the logo on the left, links in the middle, and a CTA button on the right.

```
.nav { display: flex; align-items: center; justify-content: space-between; padding: var(--s-4) var(--s-6); background: var(--surface); border-bottom: 1px solid var(--border); }
.nav .links { display: flex; gap: var(--s-5); }
.nav a { color: var(--muted); text-decoration: none; }
.nav a:hover { color: var(--brand); }
```

### Step 4: Hero Section with Grid

A two-column hero: text on the left, visual on the right. Collapses to one column on mobile.

```
.hero { display: grid; grid-template-columns: 1fr 1fr; gap: var(--s-7); padding: var(--s-8) var(--s-6); max-width: 1200px; margin: 0 auto; align-items: center; }
.hero h1 { font-size: clamp(36px, 5vw, 64px); line-height: 1.1; text-wrap: balance; }
.hero h1 .highlight { background: linear-gradient(135deg, var(--brand), var(--brand-2)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }

@media (max-width: 800px) {
  .hero { grid-template-columns: 1fr; }
}
```

### Step 5: Features Grid

Three feature cards in a responsive grid using `repeat(auto-fit, minmax())` - no media query needed.

```
.features { padding: var(--s-8) var(--s-6); max-width: 1200px; margin: 0 auto; }
.features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--s-5); }
.feature { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: var(--s-6); transition: transform 0.3s, box-shadow 0.3s; }
.feature:hover { transform: translateY(-4px); box-shadow: var(--shadow); }
```

### Step 6: Pricing with Highlighted Card

Three pricing tiers. The middle one is marked as `.popular` and scales up slightly, with a colored background and a 'Most Popular' badge.

```
.plans { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--s-5); max-width: 1100px; margin: 0 auto; }
.plan { background: var(--surface); border: 2px solid var(--border); border-radius: var(--radius); padding: var(--s-6); text-align: center; }
.plan.popular { background: linear-gradient(135deg, var(--brand), var(--brand-2)); color: white; transform: scale(1.04); box-shadow: var(--shadow-lg); position: relative; }
.plan.popular::before { content: 'MOST POPULAR'; position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: #0f172a; color: white; padding: 4px 16px; border-radius: 999px; font-size: 11px; letter-spacing: 1px; }
```

### Step 7: Testimonials

A grid of quote cards with avatars, names, and the quote itself.

```
.t-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--s-5); }
.t-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: var(--s-6); }
.t-card .avatar { width: 48px; height: 48px; border-radius: 50%; }
```

### Step 8: FAQ with details/summary

Native HTML accordion. Zero JavaScript.

```
.faq details { background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: var(--s-4) var(--s-5); margin-bottom: var(--s-3); }
.faq summary { cursor: pointer; font-weight: 600; color: var(--text); list-style: none; }
.faq details[open] summary { color: var(--brand); }
```

### Step 9: Footer

A grid of link columns with a copyright bar underneath.

```
.footer { background: #0f172a; color: #cbd5e1; padding: var(--s-8) var(--s-6); margin-top: var(--s-8); }
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: var(--s-6); max-width: 1200px; margin: 0 auto; }
.footer .bar { border-top: 1px solid #1e293b; margin-top: var(--s-7); padding-top: var(--s-5); text-align: center; font-size: 14px; }
```

Now let us see the ENTIRE landing page in one complete code example that you can copy, paste, and run.

## Code Examples

### COMPLETE Landing Page - Full HTML + CSS in One File

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>SkyPanel - The Dashboard Built for Teams</title>
<style>
  :root {
    --brand: #7c3aed;
    --brand-2: #ec4899;
    --accent: #06b6d4;
    --bg: #fafaf9;
    --surface: #ffffff;
    --text: #0f172a;
    --muted: #64748b;
    --border: #e2e8f0;
    --radius: 14px;
    --radius-lg: 22px;
    --shadow: 0 10px 30px rgba(0,0,0,0.08);
    --shadow-lg: 0 25px 60px rgba(124,58,237,0.25);
    --s-2: 8px; --s-3: 12px; --s-4: 16px; --s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px; --s-9: 96px;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'Segoe UI', -apple-system, sans-serif; background: var(--bg); color: var(--text); line-height: 1.6; }
  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; }

  /* NAV */
  .nav {
    position: sticky; top: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: var(--s-4) var(--s-6);
    background: rgba(255,255,255,0.9); backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border);
  }
  .nav .brand { font-weight: 800; font-size: 22px; color: var(--brand); display: flex; align-items: center; gap: 8px; }
  .nav .brand::before { content: ''; width: 28px; height: 28px; background: linear-gradient(135deg, var(--brand), var(--brand-2)); border-radius: 8px; }
  .nav .links { display: flex; gap: var(--s-5); }
  .nav .links a { color: var(--muted); font-size: 15px; transition: color 0.2s; }
  .nav .links a:hover { color: var(--brand); }
  .nav .cta { padding: 10px 20px; background: var(--brand); color: white; border-radius: 10px; font-weight: 600; font-size: 14px; transition: background 0.2s, transform 0.2s; }
  .nav .cta:hover { background: #6d28d9; transform: translateY(-1px); }

  /* HERO */
  .hero {
    display: grid; grid-template-columns: 1.1fr 1fr;
    gap: var(--s-7); align-items: center;
    padding: var(--s-9) var(--s-6) var(--s-8);
    max-width: 1200px; margin: 0 auto;
  }
  .hero .eyebrow { display: inline-block; background: #ede9fe; color: var(--brand); padding: 6px 14px; border-radius: 999px; font-size: 13px; font-weight: 700; letter-spacing: 1px; margin-bottom: var(--s-4); }
  .hero h1 { font-size: clamp(36px, 5vw, 64px); line-height: 1.05; text-wrap: balance; margin-bottom: var(--s-4); letter-spacing: -1px; }
  .hero h1 .gradient { background: linear-gradient(135deg, var(--brand), var(--brand-2)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
  .hero p { font-size: clamp(16px, 1.5vw, 19px); color: var(--muted); max-width: 500px; margin-bottom: var(--s-6); text-wrap: pretty; }
  .hero-ctas { display: flex; gap: var(--s-3); flex-wrap: wrap; }
  .btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 26px; border-radius: 12px; font-weight: 700; font-size: 15px; cursor: pointer; border: none; transition: transform 0.2s, box-shadow 0.2s; }
  .btn-primary { background: linear-gradient(135deg, var(--brand), var(--brand-2)); color: white; box-shadow: 0 12px 30px rgba(124,58,237,0.35); }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 18px 40px rgba(124,58,237,0.45); }
  .btn-outline { background: var(--surface); color: var(--text); border: 2px solid var(--border); }
  .btn-outline:hover { border-color: var(--brand); color: var(--brand); }

  .hero-visual {
    aspect-ratio: 5/4;
    background: linear-gradient(135deg, #ede9fe, #fce7f3);
    border-radius: var(--radius-lg);
    display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr;
    gap: 12px; padding: 24px;
    box-shadow: var(--shadow-lg);
    position: relative; overflow: hidden;
  }
  .hero-visual::after { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at top right, rgba(255,255,255,0.4), transparent 60%); pointer-events: none; }
  .hero-visual > div { background: white; border-radius: 10px; padding: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.06); font-size: 13px; color: var(--muted); display: flex; flex-direction: column; justify-content: space-between; }
  .hero-visual strong { color: var(--text); font-size: 18px; display: block; margin-bottom: 4px; }
  .hero-visual .v1 strong { color: var(--brand); }
  .hero-visual .v2 strong { color: var(--brand-2); }
  .hero-visual .v3 strong { color: var(--accent); }
  .hero-visual .v4 strong { color: #10b981; }

  /* SECTION HEADING */
  .s-head { text-align: center; max-width: 720px; margin: 0 auto var(--s-7); }
  .s-head h2 { font-size: clamp(28px, 3.5vw, 44px); margin-bottom: var(--s-3); text-wrap: balance; }
  .s-head p { color: var(--muted); font-size: clamp(15px, 1.5vw, 18px); text-wrap: pretty; }

  /* FEATURES */
  .features { padding: var(--s-8) var(--s-6); max-width: 1200px; margin: 0 auto; }
  .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--s-5); }
  .feature { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: var(--s-6); transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s; }
  .feature:hover { transform: translateY(-6px); box-shadow: var(--shadow); border-color: #c4b5fd; }
  .feature .icon { width: 56px; height: 56px; border-radius: 14px; display: grid; place-items: center; font-weight: 800; font-size: 22px; color: white; margin-bottom: var(--s-4); }
  .feature:nth-child(1) .icon { background: linear-gradient(135deg, #7c3aed, #ec4899); }
  .feature:nth-child(2) .icon { background: linear-gradient(135deg, #06b6d4, #0ea5e9); }
  .feature:nth-child(3) .icon { background: linear-gradient(135deg, #f59e0b, #ef4444); }
  .feature:nth-child(4) .icon { background: linear-gradient(135deg, #10b981, #06b6d4); }
  .feature:nth-child(5) .icon { background: linear-gradient(135deg, #8b5cf6, #3b82f6); }
  .feature:nth-child(6) .icon { background: linear-gradient(135deg, #ec4899, #f43f5e); }
  .feature h3 { font-size: 20px; margin-bottom: var(--s-2); }
  .feature p { color: var(--muted); font-size: 14px; line-height: 1.6; }

  /* PRICING */
  .pricing { padding: var(--s-8) var(--s-6); background: linear-gradient(180deg, var(--bg), white); }
  .plans { display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: var(--s-5); max-width: 1100px; margin: 0 auto; align-items: center; }
  .plan { background: var(--surface); border: 2px solid var(--border); border-radius: var(--radius-lg); padding: var(--s-7) var(--s-5); text-align: center; transition: transform 0.3s; }
  .plan:hover { transform: translateY(-6px); }
  .plan h3 { font-size: 20px; margin-bottom: var(--s-3); color: var(--muted); letter-spacing: 1px; text-transform: uppercase; }
  .plan .price { font-size: 52px; font-weight: 800; color: var(--text); margin-bottom: var(--s-2); }
  .plan .price small { font-size: 16px; color: var(--muted); font-weight: 500; }
  .plan ul { list-style: none; margin: var(--s-5) 0; text-align: left; }
  .plan li { padding: 10px 0; color: var(--muted); font-size: 14px; border-bottom: 1px solid var(--border); }
  .plan li::before { content: 'check '; color: #10b981; font-weight: 700; }
  .plan .btn { width: 100%; justify-content: center; }
  .plan.popular { background: linear-gradient(135deg, var(--brand), var(--brand-2)); color: white; border-color: transparent; transform: scale(1.05); box-shadow: var(--shadow-lg); position: relative; }
  .plan.popular:hover { transform: scale(1.05) translateY(-4px); }
  .plan.popular::before { content: 'MOST POPULAR'; position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: #0f172a; color: white; padding: 6px 18px; border-radius: 999px; font-size: 11px; letter-spacing: 1.5px; font-weight: 800; }
  .plan.popular h3, .plan.popular .price, .plan.popular .price small { color: white; }
  .plan.popular li { color: rgba(255,255,255,0.95); border-bottom-color: rgba(255,255,255,0.2); }
  .plan.popular li::before { color: #fef08a; }
  .plan.popular .btn { background: white; color: var(--brand); }

  /* TESTIMONIALS */
  .testimonials { padding: var(--s-8) var(--s-6); max-width: 1200px; margin: 0 auto; }
  .t-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--s-5); }
  .t-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: var(--s-6); transition: transform 0.3s, box-shadow 0.3s; position: relative; }
  .t-card:hover { transform: translateY(-4px); box-shadow: var(--shadow); }
  .t-card::before { content: '"'; position: absolute; top: 12px; right: 24px; font-size: 80px; line-height: 1; color: #ede9fe; font-family: Georgia, serif; }
  .t-card p { color: var(--text); font-size: 15px; line-height: 1.7; margin-bottom: var(--s-5); position: relative; }
  .t-user { display: flex; align-items: center; gap: 12px; }
  .avatar { width: 48px; height: 48px; border-radius: 50%; display: grid; place-items: center; color: white; font-weight: 700; font-size: 18px; }
  .a1 { background: linear-gradient(135deg, #7c3aed, #ec4899); }
  .a2 { background: linear-gradient(135deg, #06b6d4, #0ea5e9); }
  .a3 { background: linear-gradient(135deg, #f59e0b, #ef4444); }
  .t-user strong { display: block; font-size: 14px; }
  .t-user span { color: var(--muted); font-size: 13px; }

  /* FAQ */
  .faq { padding: var(--s-8) var(--s-6); max-width: 760px; margin: 0 auto; }
  .faq details { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: var(--s-4) var(--s-5); margin-bottom: var(--s-3); transition: box-shadow 0.2s, border-color 0.2s; }
  .faq details:hover { border-color: #c4b5fd; }
  .faq details[open] { border-color: var(--brand); box-shadow: 0 8px 22px rgba(124,58,237,0.1); }
  .faq summary { cursor: pointer; font-weight: 700; color: var(--text); font-size: 16px; list-style: none; position: relative; padding-right: 32px; }
  .faq summary::-webkit-details-marker { display: none; }
  .faq summary::after { content: '+'; position: absolute; right: 0; top: 50%; transform: translateY(-50%); color: var(--brand); font-size: 24px; font-weight: 300; transition: transform 0.2s; }
  .faq details[open] summary::after { content: '-'; transform: translateY(-50%) rotate(180deg); }
  .faq details[open] summary { color: var(--brand); }
  .faq p { margin-top: 12px; color: var(--muted); font-size: 15px; line-height: 1.6; }

  /* FOOTER */
  .footer { background: #0f172a; color: #cbd5e1; padding: var(--s-8) var(--s-6) var(--s-5); margin-top: var(--s-8); }
  .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: var(--s-6); max-width: 1200px; margin: 0 auto; }
  .footer .brand { color: white; font-size: 22px; font-weight: 800; margin-bottom: 12px; display: flex; align-items: center; gap: 8px; }
  .footer .brand::before { content: ''; width: 28px; height: 28px; background: linear-gradient(135deg, var(--brand), var(--brand-2)); border-radius: 8px; }
  .footer p { color: #94a3b8; font-size: 14px; line-height: 1.6; max-width: 280px; }
  .footer h4 { color: white; margin-bottom: 12px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
  .footer ul { list-style: none; }
  .footer li { padding: 6px 0; }
  .footer a { color: #94a3b8; font-size: 14px; transition: color 0.2s; }
  .footer a:hover { color: var(--brand-2); }
  .footer .bar { border-top: 1px solid #1e293b; margin-top: var(--s-7); padding-top: var(--s-5); text-align: center; color: #64748b; font-size: 13px; }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .hero { grid-template-columns: 1fr; text-align: center; }
    .hero p { margin-left: auto; margin-right: auto; }
    .hero-ctas { justify-content: center; }
    .footer-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 600px) {
    .nav .links { display: none; }
    .footer-grid { grid-template-columns: 1fr; }
    .plan.popular { transform: none; }
    .plan.popular:hover { transform: translateY(-4px); }
  }
</style>
</head>
<body>
  <!-- NAV -->
  <header class="nav">
    <a href="#" class="brand">SkyPanel</a>
    <nav class="links">
      <a href="#features">Features</a>
      <a href="#pricing">Pricing</a>
      <a href="#testimonials">Reviews</a>
      <a href="#faq">FAQ</a>
    </nav>
    <a href="#" class="cta">Start Free</a>
  </header>

  <main>
    <!-- HERO -->
    <section class="hero">
      <div>
        <span class="eyebrow">NEW IN 2026</span>
        <h1>The Dashboard <span class="gradient">Built for Teams</span> That Ship</h1>
        <p>SkyPanel gives your team a single place to track every metric, sprint, and customer. Built by Aarav, Priya, and Rohan for developers who value clarity over clutter.</p>
        <div class="hero-ctas">
          <a href="#pricing" class="btn btn-primary">Start Free Trial</a>
          <a href="#features" class="btn btn-outline">See How It Works</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="v1"><strong>1,284</strong> Active users</div>
        <div class="v2"><strong>+23%</strong> Growth</div>
        <div class="v3"><strong>98%</strong> Uptime</div>
        <div class="v4"><strong>4.9/5</strong> Rating</div>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="features" id="features">
      <div class="s-head">
        <h2>Everything You Need. Nothing You Do Not.</h2>
        <p>Six features that replace ten tools. Your team finally gets to focus on shipping instead of switching tabs.</p>
      </div>
      <div class="features-grid">
        <div class="feature"><div class="icon">S</div><h3>Smart Search</h3><p>Find anything across every project in milliseconds with full-text and semantic search.</p></div>
        <div class="feature"><div class="icon">L</div><h3>Live Metrics</h3><p>Real-time dashboards update the moment your data changes. No refresh button in sight.</p></div>
        <div class="feature"><div class="icon">C</div><h3>Collaboration</h3><p>Comments, mentions, and shared views keep Priya, Rohan, and Ishita on the same page.</p></div>
        <div class="feature"><div class="icon">A</div><h3>AI Insights</h3><p>Our model summarizes your weekly metrics and suggests next steps in plain English.</p></div>
        <div class="feature"><div class="icon">P</div><h3>Privacy First</h3><p>End-to-end encryption for every project. Your data never leaves your region.</p></div>
        <div class="feature"><div class="icon">I</div><h3>Integrations</h3><p>Connect with 80+ tools including GitHub, Slack, Notion, Linear, and Figma.</p></div>
      </div>
    </section>

    <!-- PRICING -->
    <section class="pricing" id="pricing">
      <div class="s-head">
        <h2>Simple Pricing, No Surprises</h2>
        <p>Start free, upgrade when your team grows. Cancel anytime, no questions asked.</p>
      </div>
      <div class="plans">
        <div class="plan">
          <h3>Starter</h3>
          <div class="price">Rs 0<small>/month</small></div>
          <ul>
            <li>Up to 3 team members</li>
            <li>5 projects</li>
            <li>Community support</li>
            <li>Basic integrations</li>
          </ul>
          <button class="btn btn-outline">Get Started</button>
        </div>
        <div class="plan popular">
          <h3>Pro</h3>
          <div class="price">Rs 999<small>/month</small></div>
          <ul>
            <li>Up to 25 team members</li>
            <li>Unlimited projects</li>
            <li>Priority support</li>
            <li>AI insights included</li>
            <li>Custom dashboards</li>
          </ul>
          <button class="btn btn-primary">Start Free Trial</button>
        </div>
        <div class="plan">
          <h3>Team</h3>
          <div class="price">Rs 2,499<small>/month</small></div>
          <ul>
            <li>Unlimited members</li>
            <li>Unlimited projects</li>
            <li>Dedicated manager</li>
            <li>SSO and audit logs</li>
          </ul>
          <button class="btn btn-outline">Contact Sales</button>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="testimonials" id="testimonials">
      <div class="s-head">
        <h2>Loved by Teams That Ship</h2>
        <p>Real stories from real builders who replaced five tools with SkyPanel.</p>
      </div>
      <div class="t-grid">
        <div class="t-card">
          <p>SkyPanel replaced three of our internal dashboards. Our weekly review meeting went from 45 minutes to 12. Every founder should try it.</p>
          <div class="t-user"><div class="avatar a1">AK</div><div><strong>Aarav Kulkarni</strong><span>CEO, Bhasha Tools</span></div></div>
        </div>
        <div class="t-card">
          <p>The AI summaries are scary good. It highlighted a bug trend I would have missed for another week. Worth every rupee just for that.</p>
          <div class="t-user"><div class="avatar a2">PS</div><div><strong>Priya Sharma</strong><span>Lead Engineer, Kalpana AI</span></div></div>
        </div>
        <div class="t-card">
          <p>My whole team switched from four different tools to SkyPanel in a single afternoon. The onboarding was effortless and the design feels great.</p>
          <div class="t-user"><div class="avatar a3">IR</div><div><strong>Ishita Rao</strong><span>Product Manager, Trishul Labs</span></div></div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq" id="faq">
      <div class="s-head">
        <h2>Frequently Asked Questions</h2>
        <p>Still have questions? Contact us at hello@skypanel.example.com.</p>
      </div>
      <details open>
        <summary>Can I start for free?</summary>
        <p>Yes. The Starter plan is completely free forever, no credit card required. It includes 3 team members, 5 projects, and access to all core features.</p>
      </details>
      <details>
        <summary>How do I upgrade from Starter to Pro?</summary>
        <p>Click the 'Upgrade' button in your account settings. Your projects and team members transfer automatically. You are charged per month, pro-rated to your upgrade date.</p>
      </details>
      <details>
        <summary>Is my data secure?</summary>
        <p>Absolutely. All data is encrypted end-to-end with AES-256. We are SOC 2 Type II certified and comply with the Indian DPDP Act. Your data never leaves your selected region.</p>
      </details>
      <details>
        <summary>Do you support students or open source projects?</summary>
        <p>Yes! Students get the Pro plan free with a verified .edu email. Open source projects get unlimited team members on the Team plan at no cost. Apply on our Support page.</p>
      </details>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer-grid">
      <div>
        <div class="brand">SkyPanel</div>
        <p>The dashboard for teams that ship. Built with care in India for the world.</p>
      </div>
      <div>
        <h4>Product</h4>
        <ul><li><a href="#">Features</a></li><li><a href="#">Pricing</a></li><li><a href="#">Changelog</a></li><li><a href="#">Roadmap</a></li></ul>
      </div>
      <div>
        <h4>Company</h4>
        <ul><li><a href="#">About</a></li><li><a href="#">Blog</a></li><li><a href="#">Careers</a></li><li><a href="#">Contact</a></li></ul>
      </div>
      <div>
        <h4>Legal</h4>
        <ul><li><a href="#">Privacy</a></li><li><a href="#">Terms</a></li><li><a href="#">Security</a></li></ul>
      </div>
    </div>
    <div class="bar">Built by Aarav, Priya, Rohan, Ishita, and Kavya. 2026 SkyPanel Inc.</div>
  </footer>
</body>
</html>
```

This is the complete landing page in a single file. It uses CSS variables for theming, clamp() for fluid typography, grid for layout, flexbox for the nav, :hover for interactive cards, ::before for the 'MOST POPULAR' badge and quote marks, and the native <details> element for the FAQ. Zero JavaScript, zero frameworks, zero libraries.

**Output:**

```
A polished, responsive SaaS landing page with sticky navbar, hero with gradient text and visual, 6 feature cards in a grid, 3 pricing tiers with the middle one highlighted, 3 testimonial cards, expandable FAQ accordion, and multi-column footer. Everything is responsive from phone to desktop.
```

### Just the Hero Section (Standalone)

```html
<!DOCTYPE html>
<html>
<head>
<style>
  :root { --brand: #7c3aed; --brand-2: #ec4899; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: #fafaf9; }
  .hero { display: grid; grid-template-columns: 1.1fr 1fr; gap: 48px; align-items: center; padding: 96px 32px; max-width: 1200px; margin: 0 auto; }
  .eyebrow { display: inline-block; background: #ede9fe; color: var(--brand); padding: 6px 14px; border-radius: 999px; font-size: 13px; font-weight: 700; letter-spacing: 1px; margin-bottom: 16px; }
  h1 { font-size: clamp(36px, 5vw, 64px); line-height: 1.05; text-wrap: balance; letter-spacing: -1px; margin-bottom: 16px; }
  .gradient { background: linear-gradient(135deg, var(--brand), var(--brand-2)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
  .sub { color: #64748b; font-size: 19px; max-width: 500px; margin-bottom: 32px; text-wrap: pretty; line-height: 1.6; }
  .ctas { display: flex; gap: 12px; flex-wrap: wrap; }
  .btn { padding: 14px 26px; border-radius: 12px; font-weight: 700; font-size: 15px; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
  .btn-primary { background: linear-gradient(135deg, var(--brand), var(--brand-2)); color: white; box-shadow: 0 12px 30px rgba(124,58,237,0.35); }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 18px 40px rgba(124,58,237,0.45); }
  .btn-outline { background: white; color: #0f172a; border: 2px solid #e2e8f0; }
  .btn-outline:hover { border-color: var(--brand); color: var(--brand); }
  .visual { aspect-ratio: 5/4; background: linear-gradient(135deg, #ede9fe, #fce7f3); border-radius: 22px; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 12px; padding: 24px; box-shadow: 0 25px 60px rgba(124,58,237,0.25); }
  .visual > div { background: white; border-radius: 10px; padding: 14px; font-size: 13px; color: #64748b; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
  .visual strong { font-size: 20px; color: #0f172a; display: block; margin-bottom: 4px; }
  @media (max-width: 900px) { .hero { grid-template-columns: 1fr; text-align: center; } .sub { margin-left: auto; margin-right: auto; } .ctas { justify-content: center; } }
</style>
</head>
<body>
  <section class="hero">
    <div>
      <span class="eyebrow">NEW IN 2026</span>
      <h1>The Dashboard <span class="gradient">Built for Teams</span> That Ship</h1>
      <p class="sub">SkyPanel gives your team a single place to track every metric, sprint, and customer.</p>
      <div class="ctas">
        <a href="#" class="btn btn-primary">Start Free Trial</a>
        <a href="#" class="btn btn-outline">See It in Action</a>
      </div>
    </div>
    <div class="visual">
      <div><strong>1,284</strong> Active users</div>
      <div><strong>+23%</strong> Growth</div>
      <div><strong>98%</strong> Uptime</div>
      <div><strong>4.9/5</strong> Rating</div>
    </div>
  </section>
</body>
</html>
```

A standalone hero section that you can drop into any project. Grid layout for two columns, clamp() for the fluid headline, gradient text with `-webkit-background-clip`, and a visual mockup built with nested grids. Responsive — collapses to one column on screens narrower than 900px.

**Output:**

```
A two-column hero with a huge headline containing a gradient-colored phrase, a supporting paragraph, two CTA buttons, and a 2x2 stats visual on the right.
```

### Just the Pricing Section (Standalone)

```html
<!DOCTYPE html>
<html>
<head>
<style>
  :root { --brand: #7c3aed; --brand-2: #ec4899; --border: #e2e8f0; --text: #0f172a; --muted: #64748b; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: linear-gradient(180deg, #fafaf9, white); padding: 80px 24px; }
  .s-head { text-align: center; max-width: 600px; margin: 0 auto 56px; }
  .s-head h2 { font-size: clamp(28px, 3.5vw, 44px); margin-bottom: 10px; color: var(--text); }
  .s-head p { color: var(--muted); }
  .plans { display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 24px; max-width: 1100px; margin: 0 auto; align-items: center; }
  .plan { background: white; border: 2px solid var(--border); border-radius: 22px; padding: 48px 24px; text-align: center; transition: transform 0.3s; }
  .plan:hover { transform: translateY(-6px); }
  .plan h3 { font-size: 20px; color: var(--muted); letter-spacing: 1px; text-transform: uppercase; margin-bottom: 12px; }
  .plan .price { font-size: 52px; font-weight: 800; color: var(--text); }
  .plan .price small { font-size: 16px; color: var(--muted); font-weight: 500; }
  .plan ul { list-style: none; margin: 24px 0; text-align: left; }
  .plan li { padding: 10px 0; color: var(--muted); font-size: 14px; border-bottom: 1px solid var(--border); }
  .plan li::before { content: '+ '; color: #10b981; font-weight: 700; }
  .plan button { width: 100%; padding: 14px; border-radius: 12px; font-weight: 700; cursor: pointer; border: 2px solid var(--border); background: white; color: var(--text); transition: all 0.2s; }
  .plan button:hover { border-color: var(--brand); color: var(--brand); }
  .plan.popular { background: linear-gradient(135deg, var(--brand), var(--brand-2)); color: white; border: none; transform: scale(1.05); box-shadow: 0 25px 60px rgba(124,58,237,0.25); position: relative; }
  .plan.popular::before { content: 'MOST POPULAR'; position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: #0f172a; color: white; padding: 6px 18px; border-radius: 999px; font-size: 11px; letter-spacing: 1.5px; font-weight: 800; }
  .plan.popular h3, .plan.popular .price, .plan.popular .price small { color: white; }
  .plan.popular li { color: rgba(255,255,255,0.95); border-bottom-color: rgba(255,255,255,0.25); }
  .plan.popular li::before { color: #fef08a; }
  .plan.popular button { background: white; color: var(--brand); border: none; }
</style>
</head>
<body>
  <div class="s-head">
    <h2>Simple Pricing, No Surprises</h2>
    <p>Start free, upgrade as you grow. Cancel anytime.</p>
  </div>
  <div class="plans">
    <div class="plan"><h3>Starter</h3><div class="price">Rs 0<small>/mo</small></div><ul><li>3 team members</li><li>5 projects</li><li>Community support</li></ul><button>Get Started</button></div>
    <div class="plan popular"><h3>Pro</h3><div class="price">Rs 999<small>/mo</small></div><ul><li>25 team members</li><li>Unlimited projects</li><li>Priority support</li><li>AI insights</li></ul><button>Start Trial</button></div>
    <div class="plan"><h3>Team</h3><div class="price">Rs 2,499<small>/mo</small></div><ul><li>Unlimited members</li><li>Unlimited projects</li><li>Dedicated manager</li></ul><button>Contact Sales</button></div>
  </div>
</body>
</html>
```

The pricing section as a standalone piece. Three plans in a responsive grid. The middle plan uses `.popular` which adds a gradient background, scales up with `transform`, and adds a 'MOST POPULAR' ribbon via `::before`. Drop this into any project.

**Output:**

```
Three pricing cards. The middle one is slightly larger, has a purple-to-pink gradient background, a 'MOST POPULAR' ribbon on top, and a white button — clearly drawing the eye to the recommended plan.
```

### FAQ Accordion with Pure CSS

```html
<!DOCTYPE html>
<html>
<head>
<style>
  :root { --brand: #7c3aed; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: #f8fafc; padding: 60px 24px; }
  .faq { max-width: 720px; margin: 0 auto; }
  h2 { text-align: center; color: #0f172a; margin-bottom: 32px; font-size: 32px; }
  details {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 18px 24px;
    margin-bottom: 12px;
    transition: box-shadow 0.2s, border-color 0.2s;
  }
  details:hover { border-color: #c4b5fd; }
  details[open] {
    border-color: var(--brand);
    box-shadow: 0 8px 22px rgba(124,58,237,0.12);
  }
  summary {
    cursor: pointer;
    font-weight: 700;
    color: #0f172a;
    font-size: 16px;
    list-style: none;
    position: relative;
    padding-right: 36px;
  }
  summary::-webkit-details-marker { display: none; }
  summary::after {
    content: '+';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    color: var(--brand);
    font-size: 26px;
    font-weight: 300;
    transition: transform 0.3s;
  }
  details[open] summary::after {
    content: '-';
    transform: translateY(-50%) rotate(180deg);
  }
  details[open] summary { color: var(--brand); }
  details p {
    margin-top: 12px;
    color: #64748b;
    font-size: 15px;
    line-height: 1.6;
  }
</style>
</head>
<body>
  <section class="faq">
    <h2>Frequently Asked Questions</h2>
    <details open>
      <summary>Can I start for free?</summary>
      <p>Yes! The Starter plan is free forever. No credit card needed. Includes 3 team members and 5 projects.</p>
    </details>
    <details>
      <summary>How do I upgrade?</summary>
      <p>Click the upgrade button in settings. Your projects and team carry over automatically.</p>
    </details>
    <details>
      <summary>Is my data secure?</summary>
      <p>Yes. End-to-end encryption with AES-256. Your data never leaves your selected region.</p>
    </details>
    <details>
      <summary>Do you offer student discounts?</summary>
      <p>Students get Pro free with a verified .edu email. Open source projects get unlimited team members.</p>
    </details>
  </section>
</body>
</html>
```

An accordion made with the native HTML `` element. Zero JavaScript. The open/close state is handled by the browser. CSS styles the `[open]` attribute selector and uses `::after` to show a plus/minus icon that flips when the section is open.

**Output:**

```
A clean FAQ list. Each question can be clicked to expand. A purple plus becomes a minus when open, the border turns purple, and a subtle shadow appears.
```

### Feature Cards Grid (Reusable Section)

```html
<!DOCTYPE html>
<html>
<head>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: #f8fafc; padding: 80px 24px; }
  .s-head { text-align: center; max-width: 600px; margin: 0 auto 48px; }
  .s-head h2 { font-size: clamp(28px, 3.5vw, 42px); color: #0f172a; margin-bottom: 10px; text-wrap: balance; }
  .s-head p { color: #64748b; font-size: 17px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; max-width: 1100px; margin: 0 auto; }
  .feature { background: white; border: 1px solid #e2e8f0; border-radius: 16px; padding: 32px; transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s; }
  .feature:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.08); border-color: #c4b5fd; }
  .feature .icon { width: 56px; height: 56px; border-radius: 14px; display: grid; place-items: center; font-weight: 800; font-size: 22px; color: white; margin-bottom: 20px; }
  .feature:nth-child(1) .icon { background: linear-gradient(135deg, #7c3aed, #ec4899); }
  .feature:nth-child(2) .icon { background: linear-gradient(135deg, #06b6d4, #0ea5e9); }
  .feature:nth-child(3) .icon { background: linear-gradient(135deg, #f59e0b, #ef4444); }
  .feature:nth-child(4) .icon { background: linear-gradient(135deg, #10b981, #06b6d4); }
  .feature:nth-child(5) .icon { background: linear-gradient(135deg, #8b5cf6, #3b82f6); }
  .feature:nth-child(6) .icon { background: linear-gradient(135deg, #ec4899, #f43f5e); }
  .feature h3 { font-size: 20px; margin-bottom: 8px; color: #0f172a; }
  .feature p { color: #64748b; font-size: 14px; line-height: 1.6; }
</style>
</head>
<body>
  <div class="s-head">
    <h2>Everything You Need, Nothing You Do Not</h2>
    <p>Six features that replace ten tools.</p>
  </div>
  <div class="grid">
    <div class="feature"><div class="icon">S</div><h3>Smart Search</h3><p>Find anything across every project in milliseconds.</p></div>
    <div class="feature"><div class="icon">L</div><h3>Live Metrics</h3><p>Real-time dashboards update the instant data changes.</p></div>
    <div class="feature"><div class="icon">C</div><h3>Collaboration</h3><p>Comments and mentions keep everyone on the same page.</p></div>
    <div class="feature"><div class="icon">A</div><h3>AI Insights</h3><p>Weekly summaries and smart suggestions in plain English.</p></div>
    <div class="feature"><div class="icon">P</div><h3>Privacy First</h3><p>End-to-end encryption and regional data residency.</p></div>
    <div class="feature"><div class="icon">I</div><h3>Integrations</h3><p>Connect with 80+ tools including GitHub, Slack, and Notion.</p></div>
  </div>
</body>
</html>
```

A reusable feature grid that auto-fits 3 columns on desktop, 2 on tablet, and 1 on mobile via `repeat(auto-fit, minmax(260px, 1fr))`. Each card has a colorful gradient icon using `:nth-child` so you do not need per-card classes.

**Output:**

```
A 3-column feature grid (on desktop) with 6 cards. Each card has a unique gradient icon, title, and description. Cards lift and border purples on hover.
```

### Testimonials Row with Avatar Quotes

```html
<!DOCTYPE html>
<html>
<head>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: #f8fafc; padding: 80px 24px; }
  .s-head { text-align: center; max-width: 600px; margin: 0 auto 48px; }
  .s-head h2 { font-size: clamp(28px, 3.5vw, 42px); color: #0f172a; margin-bottom: 10px; text-wrap: balance; }
  .s-head p { color: #64748b; font-size: 17px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 24px; max-width: 1100px; margin: 0 auto; }
  .card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 28px;
    transition: transform 0.3s, box-shadow 0.3s;
    position: relative;
  }
  .card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,0.08); }
  .card::before {
    content: '"';
    position: absolute;
    top: 8px;
    right: 24px;
    font-size: 88px;
    line-height: 1;
    color: #ede9fe;
    font-family: Georgia, serif;
  }
  .card p { color: #0f172a; font-size: 15px; line-height: 1.7; margin-bottom: 20px; position: relative; }
  .user { display: flex; align-items: center; gap: 12px; }
  .avatar { width: 48px; height: 48px; border-radius: 50%; display: grid; place-items: center; color: white; font-weight: 700; font-size: 18px; }
  .a1 { background: linear-gradient(135deg, #7c3aed, #ec4899); }
  .a2 { background: linear-gradient(135deg, #06b6d4, #0ea5e9); }
  .a3 { background: linear-gradient(135deg, #f59e0b, #ef4444); }
  .user strong { display: block; color: #0f172a; font-size: 14px; }
  .user span { color: #64748b; font-size: 13px; }
</style>
</head>
<body>
  <div class="s-head">
    <h2>Loved by Teams That Ship</h2>
    <p>Real stories from real builders.</p>
  </div>
  <div class="grid">
    <div class="card">
      <p>SkyPanel replaced three dashboards. Our weekly review dropped from 45 minutes to 12. It is that good.</p>
      <div class="user"><div class="avatar a1">AK</div><div><strong>Aarav Kulkarni</strong><span>CEO, Bhasha Tools</span></div></div>
    </div>
    <div class="card">
      <p>The AI summaries are scary good. It caught a bug trend I would have missed all week. Worth every rupee.</p>
      <div class="user"><div class="avatar a2">PS</div><div><strong>Priya Sharma</strong><span>Lead Engineer, Kalpana AI</span></div></div>
    </div>
    <div class="card">
      <p>My whole team switched from four tools in one afternoon. The onboarding was effortless.</p>
      <div class="user"><div class="avatar a3">IR</div><div><strong>Ishita Rao</strong><span>PM, Trishul Labs</span></div></div>
    </div>
  </div>
</body>
</html>
```

Three testimonial cards. Each uses `::before` to render a giant decorative quote mark in the background. Avatars are built with CSS gradients and initials — no images needed. The grid uses auto-fit to wrap responsively.

**Output:**

```
Three cards with quotes from Aarav, Priya, and Ishita. Each has a big pale purple quote mark in the background and a colorful circular avatar with initials.
```

## Common Mistakes

### Fixed Width Hero That Overflows on Mobile

**Wrong:**

```
.hero { width: 1200px; padding: 64px 200px; }
```

On a 400px phone, the hero is 1200px wide — users scroll horizontally and miss the CTAs. Fixed widths never work for responsive design.

**Correct:**

```
.hero { max-width: 1200px; padding: clamp(32px, 8vw, 96px) clamp(16px, 5vw, 64px); margin: 0 auto; }
```

Use `max-width` instead of `width` so the element shrinks to fit narrow screens. Use `clamp()` for padding so it scales with the viewport. Center with `margin: 0 auto`.

### Breaking the Grid on Narrow Screens

**Wrong:**

```
.features { display: grid; grid-template-columns: repeat(3, 1fr); }
```

On a phone, 3 columns squeeze everything into thin unusable strips. Fixed column counts ignore the viewport.

**Correct:**

```
.features { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; }
```

`repeat(auto-fit, minmax(260px, 1fr))` is the magic line: it creates as many columns as fit, where each is at least 260px wide. One column on phones, two on tablets, three on desktops, all without media queries.

### Forgetting box-sizing: border-box

**Wrong:**

```
/* No * { box-sizing: border-box } */
.card { width: 100%; padding: 24px; border: 2px solid #eee; }
/* Card overflows its parent by the padding and border amount */
```

Without `border-box`, the card's width is 100% of its parent PLUS the padding and border, overflowing to the right and breaking layouts.

**Correct:**

```
* { box-sizing: border-box; margin: 0; padding: 0; }
.card { width: 100%; padding: 24px; border: 2px solid #eee; }
```

Always start every project with `* { box-sizing: border-box; margin: 0; padding: 0; }`. `border-box` makes padding and border part of the declared width, which is how humans think about sizes.

### Hardcoded Colors Instead of Variables

**Wrong:**

```
.btn { background: #7c3aed; }
.header { background: #7c3aed; }
.link:hover { color: #7c3aed; }
/* Change the brand? You have to find and replace all 30 usages */
```

Using the same hex code in 20 places means changing your brand color requires hunting through the whole file.

**Correct:**

```
:root { --brand: #7c3aed; }
.btn { background: var(--brand); }
.header { background: var(--brand); }
.link:hover { color: var(--brand); }
```

Define every important color as a CSS variable at the top of your stylesheet. Changing the brand color becomes a one-line edit, and your design stays consistent automatically.

## Summary

- Start every landing page with a CSS reset (`* { box-sizing: border-box; margin: 0; padding: 0; }`) and a set of CSS variables for colors, spacing, type, radius, and shadows.
- Use semantic HTML: ``, ``, ``, ``. Each section should have a clear role for accessibility and SEO.
- The navbar is a flexbox with `justify-content: space-between`: logo on the left, links in the middle, CTA on the right.
- Hero sections are grids. Use `grid-template-columns: 1.1fr 1fr` for a two-column hero (text + visual), collapsing to one column on mobile with a media query or container query.
- `clamp(min, preferred, max)` for fluid typography — your headlines stay readable at every screen size without any breakpoints.
- Feature grids use `repeat(auto-fit, minmax(260px, 1fr))` — the magic line that wraps responsively from 1 to 4 columns with zero media queries.
- For pricing, mark the recommended plan with a `.popular` class. Use `transform: scale(1.05)`, a gradient background, a bigger shadow, and a 'MOST POPULAR' ribbon via `::before`.
- Build the FAQ with native `` and `` — zero JavaScript. Style the `[open]` state and use `::after` for a plus/minus icon.
- Testimonials are quote cards with a gradient avatar (CSS only, no images needed) and initials. Use `::before` to render a giant background quote mark.
- Footers are grids of link columns. Usually 2fr 1fr 1fr 1fr on desktop, collapsing to 1fr or 1fr 1fr on mobile.
- Use `backdrop-filter: blur()` plus a semi-transparent background for a modern 'frosted glass' sticky navbar.
- Make every interactive element show hover feedback with `transform: translateY(-2px)` and a bigger shadow. Small details separate an amateur page from a polished one.

## Related Topics

- undefined
- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/html-and-css/project-build-a-landing-page/*
*Practice questions: https://learn.modernagecoders.com/resources/html-and-css/project-build-a-landing-page/practice/*
