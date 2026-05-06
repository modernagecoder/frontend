---
title: "CSS Grid Complete Guide - grid-template, auto-fit, minmax, grid-area | Modern Age Coders"
description: "Master CSS Grid with 25 complete examples. Learn display: grid, grid-template-columns, fr units, repeat(), minmax(), auto-fit, grid-template-areas, responsive layouts without media queries, and grid vs flexbox. 60+ practice questions."
slug: css-grid-complete-guide
canonical: https://learn.modernagecoders.com/resources/html-and-css/css-grid-complete-guide/
category: "HTML and CSS"
keywords: ["css grid tutorial", "grid-template-columns", "grid-template-areas", "auto-fit minmax", "css grid vs flexbox", "repeat fr unit", "responsive grid layout", "css grid for beginners", "grid gap", "grid-column span"]
---
# CSS Grid - The Complete Guide

**Difficulty:** Intermediate  
**Reading time:** 45 min  
**Chapter:** 16  
**Practice questions:** 60

## What Is CSS Grid?

CSS Grid is a two-dimensional layout system built into CSS. Unlike Flexbox, which arranges items in a single row or column at a time, Grid lets you control BOTH rows and columns simultaneously. It is the most powerful layout tool CSS has ever had.

Think of Grid like a spreadsheet: you define rows and columns, then place items into specific cells. You can make items span multiple cells, create named areas, and build layouts that would have required tables, floats, or complicated JavaScript in the past.

```
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;  /* 3 equal columns */
  grid-template-rows: 100px 200px;     /* 2 rows */
  gap: 20px;                            /* space between cells */
}
```

That is it. Four lines and you have a professional grid layout that works everywhere from mobile phones to large monitors.

## Why Learn CSS Grid?

### 1. Real-World Layouts Are 2D

Almost every modern website uses grid layouts: dashboards, photo galleries, magazine pages, product listings, admin panels, blog grids. Flexbox can only handle one dimension at a time. Grid handles both rows and columns, which matches how designers actually think about layouts.

### 2. Responsive Without Media Queries

One of the most magical things about Grid: with `repeat(auto-fit, minmax(250px, 1fr))`, you can build a fully responsive card layout that automatically adjusts from 1 column on mobile to 2, 3, 4, or more columns on larger screens — without writing a single media query. This is game-changing.

### 3. Named Grid Areas Are Beautiful

Grid lets you name areas of your layout (header, sidebar, main, footer) and then draw the layout visually with `grid-template-areas`. Your CSS actually looks like the layout it creates. Nothing else in CSS is that intuitive.

### 4. Less HTML, Less CSS

Layouts that used to require nested div wrappers, float hacks, or multiple Flexbox containers can now be done with a single grid parent. Less markup means faster pages and easier maintenance.

## Detailed Explanation

### 1. Turning on Grid: display: grid

The parent element becomes a grid container. All direct children become grid items automatically:

```
.container {
  display: grid;
}
```

Without defining columns, all children will stack in a single column. You need `grid-template-columns` to get multiple columns.

### 2. grid-template-columns - Defining Columns

This is where you describe how many columns the grid has and how wide each should be. You can mix many unit types:

```
/* Three fixed columns */
grid-template-columns: 200px 200px 200px;

/* Mixed - fixed sidebar + flexible main */
grid-template-columns: 250px 1fr;

/* The fr unit: fractional share of free space */
grid-template-columns: 1fr 2fr 1fr;  /* middle is twice as wide */

/* repeat() shortcut */
grid-template-columns: repeat(4, 1fr);  /* 4 equal columns */

/* minmax() - minimum and maximum */
grid-template-columns: minmax(200px, 1fr) 3fr;
/* First column: never less than 200px, can grow with space */
```

### 3. The Magic Line: repeat(auto-fit, minmax(250px, 1fr))

This is the most useful grid line you will ever write. It creates a responsive grid that fits as many columns as possible, where each column is at least 250px wide. On a phone, you get 1 column. On a tablet, 2. On a desktop, 3 or 4. All without media queries.

```
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

**auto-fit** vs **auto-fill**: auto-fit collapses empty columns so remaining items stretch; auto-fill keeps empty columns. For most galleries, use auto-fit.

### 4. grid-template-rows and gap

```
.container {
  grid-template-rows: 100px auto 60px;  /* header, content, footer */
  gap: 16px;                             /* same gap both directions */
  row-gap: 20px;                         /* different row/column gaps */
  column-gap: 12px;
}
```

### 5. Placing Items - grid-column and grid-row

By default, items fill cells in order. You can override this:

```
.hero {
  grid-column: 1 / 4;     /* starts at line 1, ends at line 4 (spans 3 columns) */
  grid-row: 1 / 2;
}

.wide-card {
  grid-column: span 2;    /* shorthand: span 2 columns from where it naturally lands */
}

.featured {
  grid-column: 1 / -1;    /* -1 means "to the end" - spans ALL columns */
}
```

### 6. Named Grid Areas - The Beautiful Way

You can name cells and then draw your layout:

```
.page {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  min-height: 100vh;
}

.page header  { grid-area: header; }
.page aside   { grid-area: sidebar; }
.page main    { grid-area: main; }
.page footer  { grid-area: footer; }
```

Look at `grid-template-areas` — that string IS the layout. Header spans both columns, sidebar and main sit side by side, footer spans both columns. Beautiful.

### 7. Alignment - justify and align

```
.container {
  justify-items: center;   /* horizontal align inside cells */
  align-items: center;     /* vertical align inside cells */
  justify-content: center; /* horizontal align of the whole grid */
  align-content: center;   /* vertical align of the whole grid */
}
```

Shortcut: `place-items: center` sets both justify-items and align-items.

### 8. Implicit vs Explicit Grid

The grid you define with grid-template-columns/rows is the *explicit* grid. If you add more items than cells, the browser creates extra rows automatically — that is the *implicit* grid. Control implicit rows with `grid-auto-rows`:

```
.container {
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;   /* every auto-created row is 200px tall */
}
```

### 9. Grid vs Flexbox - When to Use Which

**Use Flexbox** when: laying out items in a single row or column (navbars, button groups, centered content, form fields).

**Use Grid** when: laying out items in two dimensions (dashboards, galleries, page layouts, magazine designs, any layout where rows AND columns matter).

They are not competitors — modern websites use both. Grid for the page layout, Flexbox inside each grid cell.

## Code Examples

### Responsive Photo Gallery with auto-fit

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #0f172a; color: #f1f5f9; padding: 24px; margin: 0; }
    h1 { color: #a855f7; margin-bottom: 16px; }
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .photo {
      aspect-ratio: 4 / 3;
      border-radius: 14px;
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      padding: 16px;
      color: white;
      font-weight: 700;
      font-size: 18px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      transition: transform 0.3s;
    }
    .photo:hover { transform: translateY(-6px) scale(1.02); }
    .p1 { background: linear-gradient(135deg, #a855f7, #ec4899); }
    .p2 { background: linear-gradient(135deg, #06b6d4, #0ea5e9); }
    .p3 { background: linear-gradient(135deg, #f59e0b, #ef4444); }
    .p4 { background: linear-gradient(135deg, #10b981, #06b6d4); }
    .p5 { background: linear-gradient(135deg, #8b5cf6, #3b82f6); }
    .p6 { background: linear-gradient(135deg, #ec4899, #f59e0b); }
    .p7 { background: linear-gradient(135deg, #14b8a6, #84cc16); }
    .p8 { background: linear-gradient(135deg, #f43f5e, #8b5cf6); }
  </style>
</head>
<body>
  <h1>Aarav's Photography Portfolio</h1>
  <div class="gallery">
    <div class="photo p1">Mountains</div>
    <div class="photo p2">Ocean</div>
    <div class="photo p3">Desert</div>
    <div class="photo p4">Forest</div>
    <div class="photo p5">City</div>
    <div class="photo p6">Sunset</div>
    <div class="photo p7">Fields</div>
    <div class="photo p8">Night Sky</div>
  </div>
</body>
</html>
```

The magic line `repeat(auto-fit, minmax(220px, 1fr))` creates a gallery that is fully responsive. On a phone you get 1 column, on a tablet 2 or 3, on a desktop 4 or 5. Resize the browser window and watch the grid reflow automatically. Zero media queries needed.

**Output:**

```
A dark-themed photo gallery with 8 colorful gradient tiles that automatically rearrange into 1-5 columns depending on screen width. Tiles lift on hover.
```

### Magazine Layout with grid-template-areas

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Georgia, serif; background: #fafaf9; padding: 24px; margin: 0; }
    .magazine {
      display: grid;
      max-width: 1000px;
      margin: 0 auto;
      gap: 16px;
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-areas:
        "hero    hero    sidebar"
        "hero    hero    sidebar"
        "article card1   sidebar"
        "article card2   card3";
    }
    .magazine > div {
      padding: 20px;
      border-radius: 10px;
      color: white;
    }
    .hero    { grid-area: hero;    background: linear-gradient(135deg, #7c3aed, #db2777); font-size: 28px; display: flex; align-items: center; }
    .sidebar { grid-area: sidebar; background: #1e293b; }
    .article { grid-area: article; background: #0891b2; }
    .card1   { grid-area: card1;   background: #dc2626; }
    .card2   { grid-area: card2;   background: #ea580c; }
    .card3   { grid-area: card3;   background: #059669; }
  </style>
</head>
<body>
  <div class="magazine">
    <div class="hero">The Rise of Young Coders in India</div>
    <div class="sidebar"><h3>Trending</h3><p>Top 10 stories this week about Priya, Rohan, and more.</p></div>
    <div class="article"><h3>Feature Story</h3><p>How Ishita built her first AI model at age 14.</p></div>
    <div class="card1"><h4>Tech</h4><p>New CSS features.</p></div>
    <div class="card2"><h4>Design</h4><p>Color trends 2026.</p></div>
    <div class="card3"><h4>Career</h4><p>Junior dev guide.</p></div>
  </div>
</body>
</html>
```

The `grid-template-areas` string IS the layout. Look at how clearly you can see the structure in CSS. The hero occupies a 2x2 block in the top-left, sidebar runs down the right side for 3 rows, the article column sits on the left bottom, and three smaller cards fill the rest. Each child uses `grid-area` to claim its named spot.

**Output:**

```
A magazine-style layout with a large hero on top-left, a tall sidebar on the right, a feature article underneath the hero, and three small category cards.
```

### Dashboard Layout with Named Areas

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; background: #f1f5f9; }
    .dashboard {
      display: grid;
      grid-template-columns: 240px 1fr;
      grid-template-rows: 64px 1fr 48px;
      grid-template-areas:
        "sidebar header"
        "sidebar main"
        "sidebar footer";
      min-height: 100vh;
    }
    header  { grid-area: header; background: #ffffff; padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); display: flex; align-items: center; justify-content: space-between; }
    aside   { grid-area: sidebar; background: #0f172a; color: #cbd5e1; padding: 24px; }
    main    { grid-area: main; padding: 24px; }
    footer  { grid-area: footer; background: #e2e8f0; padding: 12px 24px; font-size: 13px; color: #64748b; display: flex; align-items: center; }
    aside h2 { color: #a855f7; margin-bottom: 20px; }
    aside a { display: block; padding: 10px 0; color: #cbd5e1; text-decoration: none; border-bottom: 1px solid #1e293b; }
    aside a:hover { color: #a855f7; }
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
      margin-top: 16px;
    }
    .stat { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .stat h3 { font-size: 28px; color: #a855f7; }
    .stat p { color: #64748b; font-size: 14px; }
  </style>
</head>
<body>
  <div class="dashboard">
    <header><strong>Welcome back, Meera</strong><span>Sign out</span></header>
    <aside>
      <h2>SkyPanel</h2>
      <a href="#">Overview</a>
      <a href="#">Students</a>
      <a href="#">Courses</a>
      <a href="#">Settings</a>
    </aside>
    <main>
      <h1>Dashboard</h1>
      <div class="stats">
        <div class="stat"><h3>1,284</h3><p>Active students</p></div>
        <div class="stat"><h3>42</h3><p>Courses live</p></div>
        <div class="stat"><h3>98%</h3><p>Completion rate</p></div>
        <div class="stat"><h3>4.9</h3><p>Average rating</p></div>
      </div>
    </main>
    <footer>Made with CSS Grid. No framework.</footer>
  </div>
</body>
</html>
```

A classic dashboard layout: sidebar on the left, header on top, main content in the middle, footer at the bottom. The outer grid uses `grid-template-areas` for the page structure. Inside `main`, a nested grid with `auto-fit minmax` creates a responsive stats row. This is how real dashboards are built.

**Output:**

```
A complete admin dashboard with dark sidebar, light header and footer, and a stats grid inside main that wraps responsively.
```

### Chessboard with Nested Grid

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #1e293b; margin: 0; font-family: Arial, sans-serif; }
    .wrapper { text-align: center; }
    h1 { color: #f59e0b; margin-bottom: 16px; }
    .board {
      display: grid;
      grid-template-columns: repeat(8, 48px);
      grid-template-rows: repeat(8, 48px);
      border: 4px solid #78350f;
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    }
    .cell {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
    }
    .light { background: #fef3c7; }
    .dark  { background: #78350f; }
    .piece-white { color: #f8fafc; text-shadow: 0 0 2px #000; }
    .piece-black { color: #0f172a; }
  </style>
</head>
<body>
  <div class="wrapper">
    <h1>Grid Chessboard</h1>
    <div class="board" id="board"></div>
  </div>
  <script>
    const board = document.getElementById('board');
    const backRow = ['R','N','B','Q','K','B','N','R'];
    const symbols = { R:'R', N:'N', B:'B', Q:'Q', K:'K', P:'P' };
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const cell = document.createElement('div');
        const isLight = (row + col) % 2 === 0;
        cell.className = 'cell ' + (isLight ? 'light' : 'dark');
        let piece = '';
        if (row === 0) { piece = backRow[col]; cell.classList.add('piece-black'); }
        if (row === 1) { piece = 'P'; cell.classList.add('piece-black'); }
        if (row === 6) { piece = 'P'; cell.classList.add('piece-white'); }
        if (row === 7) { piece = backRow[col]; cell.classList.add('piece-white'); }
        cell.textContent = piece;
        board.appendChild(cell);
      }
    }
  </script>
</body>
</html>
```

An 8x8 chessboard built with `grid-template-columns: repeat(8, 48px)` and `grid-template-rows: repeat(8, 48px)`. JavaScript generates 64 cells alternating light and dark based on `(row + col) % 2`. The board demonstrates how grid handles fixed-size 2D layouts elegantly.

**Output:**

```
A full 8x8 chessboard with alternating light and dark squares and chess pieces in their starting positions.
```

### Pricing Table with grid-column span

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 40px 20px; margin: 0; }
    h1 { text-align: center; color: #0f172a; margin-bottom: 32px; }
    .pricing {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      max-width: 1000px;
      margin: 0 auto;
    }
    .plan {
      background: white;
      border-radius: 16px;
      padding: 32px 24px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      text-align: center;
      border: 2px solid transparent;
      transition: transform 0.3s, border-color 0.3s;
    }
    .plan:hover { transform: translateY(-8px); border-color: #a855f7; }
    .plan h2 { color: #334155; margin-bottom: 8px; }
    .plan .price { font-size: 40px; color: #a855f7; font-weight: bold; margin: 16px 0; }
    .plan ul { list-style: none; padding: 0; text-align: left; }
    .plan li { padding: 8px 0; color: #64748b; border-bottom: 1px solid #f1f5f9; }
    .plan.popular {
      grid-column: 1 / -1;
      background: linear-gradient(135deg, #7c3aed, #db2777);
      color: white;
    }
    .plan.popular h2, .plan.popular .price { color: white; }
    .plan.popular li { color: #f1f5f9; border-color: rgba(255,255,255,0.2); }
    @media (min-width: 700px) {
      .plan.popular { grid-column: auto; transform: scale(1.05); }
    }
  </style>
</head>
<body>
  <h1>Choose Your Plan</h1>
  <div class="pricing">
    <div class="plan"><h2>Starter</h2><div class="price">Rs 0</div><ul><li>1 student</li><li>5 lessons</li><li>Email support</li></ul></div>
    <div class="plan popular"><h2>Pro</h2><div class="price">Rs 999</div><ul><li>Unlimited students</li><li>All lessons</li><li>Priority support</li></ul></div>
    <div class="plan"><h2>Team</h2><div class="price">Rs 2,499</div><ul><li>25 students</li><li>Custom content</li><li>Dedicated mentor</li></ul></div>
  </div>
</body>
</html>
```

Three pricing plans in a grid. The middle 'popular' plan uses `grid-column: 1 / -1` on small screens to span the full width for easy reading, then switches back to auto and scales up on screens wider than 700px. `1 / -1` means from the first line to the last line — a great trick for full-width items.

**Output:**

```
Three pricing cards that arrange in a row on desktop with the middle card highlighted and slightly larger. On narrow screens the popular plan spans full width.
```

### Tic-Tac-Toe Board (Interactive)

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { display: flex; justify-content: center; align-items: center; flex-direction: column; min-height: 100vh; background: #0f172a; color: white; font-family: Arial, sans-serif; margin: 0; }
    h1 { color: #06b6d4; margin-bottom: 8px; }
    .status { margin-bottom: 16px; color: #cbd5e1; font-size: 18px; }
    .board {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      grid-template-rows: repeat(3, 100px);
      gap: 6px;
      background: #334155;
      padding: 6px;
      border-radius: 12px;
    }
    .cell {
      background: #1e293b;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.2s, transform 0.2s;
    }
    .cell:hover { background: #334155; transform: scale(0.97); }
    .x { color: #a855f7; }
    .o { color: #f59e0b; }
    button { margin-top: 16px; padding: 10px 22px; background: #06b6d4; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 15px; }
  </style>
</head>
<body>
  <h1>Tic Tac Toe</h1>
  <div class="status" id="status">Vivaan's turn (X)</div>
  <div class="board" id="board"></div>
  <button id="reset">Reset</button>
  <script>
    const board = document.getElementById('board');
    const status = document.getElementById('status');
    let cells = [], turn = 'X';
    function build() {
      board.innerHTML = '';
      cells = [];
      turn = 'X';
      status.textContent = 'Vivaan\u2019s turn (X)';
      for (let i = 0; i < 9; i++) {
        const c = document.createElement('div');
        c.className = 'cell';
        c.addEventListener('click', function () {
          if (c.textContent) return;
          c.textContent = turn;
          c.classList.add(turn === 'X' ? 'x' : 'o');
          turn = turn === 'X' ? 'O' : 'X';
          status.textContent = (turn === 'X' ? 'Vivaan' : 'Anika') + '\u2019s turn (' + turn + ')';
        });
        board.appendChild(c);
        cells.push(c);
      }
    }
    document.getElementById('reset').addEventListener('click', build);
    build();
  </script>
</body>
</html>
```

Classic 3x3 tic-tac-toe board built with `grid-template-columns: repeat(3, 100px)`. The grid gap acts as the board's lines. Clicking a cell places an X or O and toggles turns between Vivaan and Anika. Grid makes the 3x3 structure trivial.

**Output:**

```
A 3x3 tic-tac-toe board with clickable cells. X is purple, O is amber. A reset button clears the board.
```

### Bento Grid Portfolio (Modern Look)

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #fafaf9; padding: 24px; margin: 0; }
    h1 { text-align: center; color: #0f172a; margin-bottom: 24px; }
    .bento {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 140px;
      gap: 16px;
      max-width: 1100px;
      margin: 0 auto;
    }
    .bento > div {
      border-radius: 18px;
      padding: 22px;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      font-weight: 600;
      transition: transform 0.3s;
    }
    .bento > div:hover { transform: scale(1.02); }
    .intro  { grid-column: span 2; grid-row: span 2; background: linear-gradient(135deg, #7c3aed, #ec4899); font-size: 22px; }
    .pic    { grid-column: span 2; background: linear-gradient(135deg, #06b6d4, #0ea5e9); }
    .stats  { grid-column: span 1; background: linear-gradient(135deg, #f59e0b, #ef4444); }
    .skill  { grid-column: span 1; background: linear-gradient(135deg, #10b981, #06b6d4); }
    .blog   { grid-column: span 3; background: linear-gradient(135deg, #1e293b, #334155); }
    .contact{ grid-column: span 1; background: linear-gradient(135deg, #ec4899, #f43f5e); }
    @media (max-width: 700px) {
      .bento { grid-template-columns: repeat(2, 1fr); }
      .bento > div { grid-column: span 2 !important; grid-row: auto !important; }
    }
  </style>
</head>
<body>
  <h1>Ishaan's Bento Portfolio</h1>
  <div class="bento">
    <div class="intro">Hi, I am Ishaan. I design and code fun things.</div>
    <div class="pic">My Work</div>
    <div class="stats">42 projects</div>
    <div class="skill">React</div>
    <div class="blog">Latest blog: Building a game in one weekend</div>
    <div class="contact">Contact</div>
  </div>
</body>
</html>
```

A trendy bento-box portfolio layout. Each card uses `grid-column: span N` and `grid-row: span N` to claim different amounts of space, creating an asymmetric yet balanced design. The intro card takes a 2x2 area, the blog card takes 3 columns, and smaller cards fill the gaps. A media query collapses everything to 2 columns on phones.

**Output:**

```
A colorful bento-style portfolio with cards of different sizes arranged in a 4-column grid, collapsing to 2 columns on mobile.
```

## Common Mistakes

### Forgetting display: grid on the Parent

**Wrong:**

```
.container {
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}
/* No display: grid! */
```

The grid properties are ignored. The container still behaves like a normal block, and items stack vertically.

**Correct:**

```
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}
```

Grid properties only take effect when the container has `display: grid` (or `inline-grid`). Without that, nothing becomes a grid and all your template columns are ignored.

### Using px Instead of fr for Flexible Columns

**Wrong:**

```
.container {
  display: grid;
  grid-template-columns: 300px 300px 300px;
}
/* Breaks on narrow screens - horizontal scroll! */
```

On screens narrower than 900px plus gaps, the grid overflows and creates horizontal scroll. Fixed widths cannot adapt.

**Correct:**

```
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* Or: repeat(auto-fit, minmax(250px, 1fr)) for full responsiveness */
}
```

The `fr` unit represents a fraction of available space, so columns adapt to their container. Use `1fr` (or `minmax()`) for flexible widths and reserve px only for truly fixed sizes like sidebars.

### auto-fill vs auto-fit Confusion

**Wrong:**

```
/* Using auto-fill when you want items to stretch */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
/* With only 2 items, the grid leaves ghost empty columns */
```

With `auto-fill`, the grid creates as many tracks as fit even if they are empty. With few items, the existing items stay small instead of stretching.

**Correct:**

```
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
/* auto-fit collapses empty tracks so existing items stretch to fill space */
```

`auto-fit` collapses empty tracks and lets real items stretch. `auto-fill` keeps empty tracks, which is useful if you want consistent item widths regardless of count. For galleries and card layouts, auto-fit is almost always what you want.

### Off-by-One Errors with Grid Lines

**Wrong:**

```
.item {
  grid-column: 1 / 3;
  /* Thinking this spans columns 1, 2, AND 3 */
}
```

This only spans 2 columns (columns 1 and 2), not 3. Grid lines are between columns, not the columns themselves.

**Correct:**

```
/* To span 3 columns, use: */
.item {
  grid-column: 1 / 4;    /* from line 1 to line 4 */
  /* Or: */
  grid-column: 1 / span 3;
  /* Or: */
  grid-column: span 3;
}
```

Grid lines are numbered starting from 1 and sit BETWEEN cells. A 3-column grid has 4 lines. `grid-column: 1 / 4` goes from line 1 to line 4 and covers 3 columns. Using `span N` is usually clearer because it tells you how many columns to cover.

## Summary

- display: grid turns an element into a grid container. All direct children become grid items automatically.
- grid-template-columns defines the number and width of columns. Use px for fixed, fr for flexible shares of free space, and minmax(min, max) for constrained flexibility.
- repeat(N, size) is shorthand for repeating column or row definitions. Example: repeat(4, 1fr) creates 4 equal columns.
- The magic responsive line: repeat(auto-fit, minmax(250px, 1fr)) creates a fully responsive grid with zero media queries. Use it for galleries, card lists, and product grids.
- gap sets spacing between cells. row-gap and column-gap set them individually. There is no need for margin hacks.
- grid-template-areas lets you draw layouts visually with named regions. Children claim a region with grid-area: regionName. This is the most intuitive CSS layout syntax ever invented.
- grid-column and grid-row control where an item sits. Use line numbers (1 / 3), span keywords (span 2), or -1 (the last line) for full-width items.
- justify-items and align-items align content inside each cell. justify-content and align-content align the whole grid inside the container. place-items: center is the shortcut for centering everything.
- Grid is for 2D layouts (rows AND columns); Flexbox is for 1D layouts (rows OR columns). Real websites use both together: Grid for page structure, Flexbox inside each cell.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/html-and-css/css-grid-complete-guide/*
*Practice questions: https://learn.modernagecoders.com/resources/html-and-css/css-grid-complete-guide/practice/*
