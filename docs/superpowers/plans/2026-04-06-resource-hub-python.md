# Resource Hub (Python Phase 1) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a `/resources/` section with 25 Python chapters (notes + practice pages), generated from JSON data using the same pattern as the existing blog/course system.

**Architecture:** JSON data files per chapter feed into a Node.js generator script (`generate-resources.js`) that populates HTML templates and outputs static pages to `content/resources/generated/`. The generator follows the exact same pattern as `scripts/generate-blogs.js` — read JSON, validate, replace template variables, write `index.html` to output directories.

**Tech Stack:** Node.js (fs, path), HTML/CSS/JS (no frameworks), existing `seo-utils.js` and `seo-config.js` for structured data, Prism.js for code syntax highlighting.

**Spec:** `docs/superpowers/specs/2026-04-06-resource-hub-design.md`

---

## File Structure

### New Files to Create

```
content/resources/
  data/
    python/
      _meta.json                              # Python language metadata + chapter order
      introduction-to-python.json             # Chapter 1 data
      installing-python-and-setup.json        # Chapter 2 data
      your-first-python-program.json          # Chapter 3 data
      variables-and-data-types.json           # Chapter 4 data
      operators-in-python.json                # Chapter 5 data
      taking-input-and-type-conversion.json   # Chapter 6 data
      conditional-statements.json             # Chapter 7 data
      loops-in-python.json                    # Chapter 8 data
      loop-control-statements.json            # Chapter 9 data
      pattern-printing.json                   # Chapter 10 data
      strings-in-python.json                  # Chapter 11 data
      lists-in-python.json                    # Chapter 12 data
      tuples-in-python.json                   # Chapter 13 data
      dictionaries-in-python.json             # Chapter 14 data
      sets-in-python.json                     # Chapter 15 data
      functions-in-python.json                # Chapter 16 data
      scope-and-closures.json                 # Chapter 17 data
      lambda-map-filter-reduce.json           # Chapter 18 data
      file-handling-in-python.json            # Chapter 19 data
      exception-handling.json                 # Chapter 20 data
      object-oriented-programming.json        # Chapter 21 data
      inheritance-and-polymorphism.json        # Chapter 22 data
      modules-and-packages.json               # Chapter 23 data
      list-comprehensions-and-generators.json  # Chapter 24 data
      decorators-and-iterators.json            # Chapter 25 data
  template/
    resource-index-template.html              # Master /resources/ index page
    language-index-template.html              # Language /resources/python/ index page
    resource-notes-template.html              # Notes page template
    resource-practice-template.html           # Practice page template
    resource-template.css                     # All CSS for resource pages
    resource-interactive.js                   # JS for collapsible answers, code copy, etc.
  generated/                                  # Output (auto-generated, gitignored)

scripts/
  generate-resources.js                       # Generator script
```

### Files to Modify

```
package.json                    # Add generate:resources script, update generate:all
netlify.toml                    # Add /resources/* routing
components/nav.html             # Add Resources dropdown
sitemap.xml                     # Add resource page entries (done by generator)
```

---

## Task 1: Create Directory Structure and Python Meta File

**Files:**
- Create: `content/resources/data/python/_meta.json`
- Create: `content/resources/template/` (empty dir)
- Create: `content/resources/generated/` (empty dir)

- [ ] **Step 1: Create the directory structure**

```bash
mkdir -p content/resources/data/python
mkdir -p content/resources/template
mkdir -p content/resources/generated
```

- [ ] **Step 2: Create `_meta.json` for Python**

Create `content/resources/data/python/_meta.json`:

```json
{
  "language": "Python",
  "slug": "python",
  "audience": "beginners",
  "ageRange": "10-16",
  "tone": "simple, analogy-heavy, step-by-step",
  "index": {
    "title": "Python Tutorial for Beginners - Complete Chapter-by-Chapter Guide",
    "description": "Learn Python from scratch with our free, detailed chapter-by-chapter guide. Each topic includes clear explanations, code examples, and 50+ practice questions. Designed for students aged 10-16.",
    "keywords": "python tutorial, learn python, python for beginners, python notes for students, python tutorial for kids, python programming guide, python chapters, python practice questions",
    "intro": "<p>Python is one of the most popular and beginner-friendly programming languages in the world. Whether you are 10 years old or 16, this guide will take you from knowing nothing about programming to writing real Python code with confidence.</p><p>Each chapter below covers one topic in detail. You will learn what the concept is, why it matters, and how to use it — with plenty of code examples. Every chapter also has a dedicated practice page with 50+ questions ranging from easy to hard, so you can test your understanding thoroughly.</p><p>This is not a quick overview. This is a complete, chapter-by-chapter Python course designed to build your skills step by step.</p>"
  },
  "chapters": [
    { "slug": "introduction-to-python", "order": 1, "title": "Introduction to Python", "difficulty": "Beginner", "description": "Learn what Python is, where it is used, and why it is the best language to start your coding journey." },
    { "slug": "installing-python-and-setup", "order": 2, "title": "Installing Python and Setting Up Your Environment", "difficulty": "Beginner", "description": "Download Python, set up an IDE, and get your computer ready to write code." },
    { "slug": "your-first-python-program", "order": 3, "title": "Your First Python Program", "difficulty": "Beginner", "description": "Write your first Python program using the print() function and understand how Python executes code." },
    { "slug": "variables-and-data-types", "order": 4, "title": "Variables and Data Types in Python", "difficulty": "Beginner", "description": "Understand how to store data in variables and learn the four basic data types: int, float, str, and bool." },
    { "slug": "operators-in-python", "order": 5, "title": "Operators in Python", "difficulty": "Beginner", "description": "Learn arithmetic, comparison, logical, and assignment operators with practical examples." },
    { "slug": "taking-input-and-type-conversion", "order": 6, "title": "Taking Input and Type Conversion", "difficulty": "Beginner", "description": "Take user input with input(), and convert between data types using int(), float(), and str()." },
    { "slug": "conditional-statements", "order": 7, "title": "Conditional Statements in Python (if, elif, else)", "difficulty": "Beginner", "description": "Make decisions in your code using if, elif, and else statements with comparison operators." },
    { "slug": "loops-in-python", "order": 8, "title": "Loops in Python (for and while)", "difficulty": "Beginner", "description": "Repeat actions using for loops and while loops, and learn when to use each one." },
    { "slug": "loop-control-statements", "order": 9, "title": "Loop Control - break, continue, pass", "difficulty": "Beginner", "description": "Control loop execution using break, continue, and pass statements with nested loop examples." },
    { "slug": "pattern-printing", "order": 10, "title": "Pattern Printing in Python", "difficulty": "Beginner", "description": "Build star patterns, number patterns, and alphabet patterns using nested loops." },
    { "slug": "strings-in-python", "order": 11, "title": "Strings in Python", "difficulty": "Intermediate", "description": "Master string creation, slicing, formatting, and all important string methods." },
    { "slug": "lists-in-python", "order": 12, "title": "Lists in Python", "difficulty": "Intermediate", "description": "Work with Python lists — create, modify, slice, and use list methods and comprehensions." },
    { "slug": "tuples-in-python", "order": 13, "title": "Tuples in Python", "difficulty": "Intermediate", "description": "Understand immutable sequences, tuple packing/unpacking, and when to use tuples over lists." },
    { "slug": "dictionaries-in-python", "order": 14, "title": "Dictionaries in Python", "difficulty": "Intermediate", "description": "Store and retrieve data using key-value pairs with dictionary methods and iteration." },
    { "slug": "sets-in-python", "order": 15, "title": "Sets in Python", "difficulty": "Intermediate", "description": "Learn set operations like union, intersection, and difference for working with unique collections." },
    { "slug": "functions-in-python", "order": 16, "title": "Functions in Python", "difficulty": "Intermediate", "description": "Define reusable code with def, parameters, return values, default arguments, and *args/**kwargs." },
    { "slug": "scope-and-closures", "order": 17, "title": "Scope, LEGB Rule, and Closures", "difficulty": "Intermediate", "description": "Understand variable scope (local, enclosing, global, built-in) and how closures work." },
    { "slug": "lambda-map-filter-reduce", "order": 18, "title": "Lambda, Map, Filter, and Reduce", "difficulty": "Intermediate", "description": "Write concise code with anonymous functions and functional programming tools." },
    { "slug": "file-handling-in-python", "order": 19, "title": "File Handling in Python", "difficulty": "Advanced", "description": "Read from and write to files using open(), with statement, and file modes." },
    { "slug": "exception-handling", "order": 20, "title": "Exception Handling in Python", "difficulty": "Advanced", "description": "Handle errors gracefully with try, except, else, finally, and custom exceptions." },
    { "slug": "object-oriented-programming", "order": 21, "title": "Object-Oriented Programming in Python", "difficulty": "Advanced", "description": "Learn classes, objects, __init__, self, methods, and encapsulation from scratch." },
    { "slug": "inheritance-and-polymorphism", "order": 22, "title": "Inheritance and Polymorphism", "difficulty": "Advanced", "description": "Extend classes with inheritance, override methods, and understand polymorphism." },
    { "slug": "modules-and-packages", "order": 23, "title": "Modules and Packages in Python", "difficulty": "Advanced", "description": "Organize code with modules, import statements, and understand Python packages." },
    { "slug": "list-comprehensions-and-generators", "order": 24, "title": "Comprehensions and Generators", "difficulty": "Advanced", "description": "Write elegant code with list/dict/set comprehensions and lazy evaluation with generators." },
    { "slug": "decorators-and-iterators", "order": 25, "title": "Decorators and Iterators", "difficulty": "Advanced", "description": "Understand the iterator protocol, create custom iterators, and use decorators to modify functions." }
  ],
  "courseCta": {
    "text": "Want to learn Python with a live mentor?",
    "linkText": "Explore our Python course",
    "url": "/courses/python-for-kids/"
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add content/resources/data/python/_meta.json
git commit -m "feat: add resource hub directory structure and Python meta file"
```

---

## Task 2: Create Resource Notes HTML Template

**Files:**
- Create: `content/resources/template/resource-notes-template.html`

This template follows the exact same pattern as `content/blog/template/blog-template.html` — template variables like `{{VARIABLE}}` get replaced by the generator script.

- [ ] **Step 1: Create `resource-notes-template.html`**

Create `content/resources/template/resource-notes-template.html`:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16910316353"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16910316353');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{SEO_TITLE}}</title>

    <!-- SEO Meta Tags -->
    <meta name="description" content="{{SEO_DESCRIPTION}}">
    <meta name="keywords" content="{{SEO_KEYWORDS}}">
    <meta name="author" content="Modern Age Coders">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
    <link rel="canonical" href="https://learn.modernagecoders.com/resources/{{LANGUAGE_SLUG}}/{{TOPIC_SLUG}}">
    <link rel="alternate" hreflang="en" href="https://learn.modernagecoders.com/resources/{{LANGUAGE_SLUG}}/{{TOPIC_SLUG}}">
    <link rel="alternate" hreflang="en-in" href="https://learn.modernagecoders.com/resources/{{LANGUAGE_SLUG}}/{{TOPIC_SLUG}}">
    <link rel="alternate" hreflang="x-default" href="https://learn.modernagecoders.com/resources/{{LANGUAGE_SLUG}}/{{TOPIC_SLUG}}">

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="apple-touch-icon" href="/favicon/favicon-32x32.png">

    <!-- Open Graph Meta Tags -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://learn.modernagecoders.com/resources/{{LANGUAGE_SLUG}}/{{TOPIC_SLUG}}">
    <meta property="og:title" content="{{SEO_TITLE}}">
    <meta property="og:description" content="{{SEO_DESCRIPTION}}">
    <meta property="og:image" content="https://learn.modernagecoders.com/images/og-default.webp">
    <meta property="og:site_name" content="Modern Age Coders">

    <!-- Twitter Card Meta Tags -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://learn.modernagecoders.com/resources/{{LANGUAGE_SLUG}}/{{TOPIC_SLUG}}">
    <meta property="twitter:title" content="{{SEO_TITLE}}">
    <meta property="twitter:description" content="{{SEO_DESCRIPTION}}">
    <meta property="twitter:image" content="https://learn.modernagecoders.com/images/og-default.webp">

    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
    {{STRUCTURED_DATA}}
    </script>

    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/responsive.css">
    <link rel="stylesheet" href="/css/resource-template.css">
    <link rel="stylesheet" href="/css/mobile-nav-final-fix.css">

    <!-- Prism.js for code syntax highlighting -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css">
</head>

<body class="resource-notes-page">

    <!-- Navigation -->
    <div id="nav-placeholder"></div>

    <main class="resource-main">
        <!-- Breadcrumb -->
        <nav class="resource-breadcrumb" aria-label="Breadcrumb">
            <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/resources/">Resources</a></li>
                <li><a href="/resources/{{LANGUAGE_SLUG}}/">{{LANGUAGE_NAME}}</a></li>
                <li aria-current="page">{{TOPIC_TITLE}}</li>
            </ol>
        </nav>

        <!-- Chapter Header -->
        <header class="resource-header">
            <div class="resource-meta-badges">
                <span class="meta-badge badge-chapter">Chapter {{CHAPTER_NUMBER}}</span>
                <span class="meta-badge badge-{{DIFFICULTY_CLASS}}">{{DIFFICULTY}}</span>
                <span class="meta-badge badge-time">{{READING_TIME}} read</span>
                <span class="meta-badge badge-updated">Updated: {{LAST_UPDATED}}</span>
            </div>
            <h1 class="resource-title">{{TOPIC_TITLE_FULL}}</h1>
            <p class="resource-practice-link">
                <a href="/resources/{{LANGUAGE_SLUG}}/{{TOPIC_SLUG}}/practice/">Practice Questions for This Topic &rarr;</a>
            </p>
        </header>

        <!-- Table of Contents -->
        <div class="resource-toc">
            <h3>In This Chapter</h3>
            <ul class="toc-list">
                <li><a href="#what">What — Definition and Syntax</a></li>
                <li><a href="#why">Why — Purpose and Real-World Relevance</a></li>
                <li><a href="#explanation">Detailed Explanation</a></li>
                <li><a href="#code-examples">Code Examples</a></li>
                <li><a href="#common-mistakes">Common Mistakes</a></li>
                <li><a href="#summary">Quick Summary</a></li>
            </ul>
        </div>

        <!-- Content Sections -->
        <article class="resource-content">

            <!-- WHAT Section -->
            <section id="what" class="content-section">
                {{CONTENT_WHAT}}
            </section>

            <!-- WHY Section -->
            <section id="why" class="content-section">
                {{CONTENT_WHY}}
            </section>

            <!-- DETAILED EXPLANATION Section -->
            <section id="explanation" class="content-section">
                {{CONTENT_EXPLANATION}}
            </section>

            <!-- CODE EXAMPLES Section -->
            <section id="code-examples" class="content-section">
                <h2>Code Examples</h2>
                {{CODE_EXAMPLES_HTML}}
            </section>

            <!-- COMMON MISTAKES Section -->
            <section id="common-mistakes" class="content-section">
                <h2>Common Mistakes</h2>
                {{COMMON_MISTAKES_HTML}}
            </section>

            <!-- QUICK SUMMARY Section -->
            <section id="summary" class="content-section">
                <h2>Quick Summary</h2>
                <div class="summary-box">
                    <ul>
                        {{SUMMARY_HTML}}
                    </ul>
                </div>
            </section>

        </article>

        <!-- Related Topics -->
        <section class="resource-related">
            <h2>Related Topics</h2>
            <div class="related-links">
                {{RELATED_TOPICS_HTML}}
            </div>
        </section>

        <!-- Chapter Navigation -->
        <nav class="chapter-nav">
            {{PREV_CHAPTER_LINK}}
            {{NEXT_CHAPTER_LINK}}
        </nav>

        <!-- Practice CTA -->
        <section class="resource-practice-cta">
            <h2>Ready to Practice?</h2>
            <p>Test your understanding with 50+ practice questions on this topic — from basic to advanced.</p>
            <a href="/resources/{{LANGUAGE_SLUG}}/{{TOPIC_SLUG}}/practice/" class="btn-practice">Go to Practice Questions</a>
        </section>

        <!-- Course CTA -->
        <section class="resource-course-cta">
            <p>{{COURSE_CTA_TEXT}}</p>
            <a href="{{COURSE_CTA_URL}}" class="btn-course">{{COURSE_CTA_LINK_TEXT}}</a>
        </section>

    </main>

    <!-- Footer -->
    <div id="footer-placeholder"></div>

    <!-- Scripts -->
    <script src="/js/components-loader.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js"></script>
    <script src="/js/resource-interactive.js"></script>
</body>

</html>
```

- [ ] **Step 2: Commit**

```bash
git add content/resources/template/resource-notes-template.html
git commit -m "feat: add resource notes page HTML template"
```

---

## Task 3: Create Resource Practice HTML Template

**Files:**
- Create: `content/resources/template/resource-practice-template.html`

- [ ] **Step 1: Create `resource-practice-template.html`**

Create `content/resources/template/resource-practice-template.html`:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16910316353"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16910316353');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{SEO_TITLE}}</title>

    <!-- SEO Meta Tags -->
    <meta name="description" content="{{SEO_DESCRIPTION}}">
    <meta name="keywords" content="{{SEO_KEYWORDS}}">
    <meta name="author" content="Modern Age Coders">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
    <link rel="canonical" href="https://learn.modernagecoders.com/resources/{{LANGUAGE_SLUG}}/{{TOPIC_SLUG}}/practice">
    <link rel="alternate" hreflang="en" href="https://learn.modernagecoders.com/resources/{{LANGUAGE_SLUG}}/{{TOPIC_SLUG}}/practice">
    <link rel="alternate" hreflang="en-in" href="https://learn.modernagecoders.com/resources/{{LANGUAGE_SLUG}}/{{TOPIC_SLUG}}/practice">
    <link rel="alternate" hreflang="x-default" href="https://learn.modernagecoders.com/resources/{{LANGUAGE_SLUG}}/{{TOPIC_SLUG}}/practice">

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="apple-touch-icon" href="/favicon/favicon-32x32.png">

    <!-- Open Graph Meta Tags -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://learn.modernagecoders.com/resources/{{LANGUAGE_SLUG}}/{{TOPIC_SLUG}}/practice">
    <meta property="og:title" content="{{SEO_TITLE}}">
    <meta property="og:description" content="{{SEO_DESCRIPTION}}">
    <meta property="og:image" content="https://learn.modernagecoders.com/images/og-default.webp">
    <meta property="og:site_name" content="Modern Age Coders">

    <!-- Twitter Card Meta Tags -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://learn.modernagecoders.com/resources/{{LANGUAGE_SLUG}}/{{TOPIC_SLUG}}/practice">
    <meta property="twitter:title" content="{{SEO_TITLE}}">
    <meta property="twitter:description" content="{{SEO_DESCRIPTION}}">
    <meta property="twitter:image" content="https://learn.modernagecoders.com/images/og-default.webp">

    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
    {{STRUCTURED_DATA}}
    </script>

    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/responsive.css">
    <link rel="stylesheet" href="/css/resource-template.css">
    <link rel="stylesheet" href="/css/mobile-nav-final-fix.css">

    <!-- Prism.js for code syntax highlighting -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css">
</head>

<body class="resource-practice-page">

    <!-- Navigation -->
    <div id="nav-placeholder"></div>

    <main class="resource-main">
        <!-- Breadcrumb -->
        <nav class="resource-breadcrumb" aria-label="Breadcrumb">
            <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/resources/">Resources</a></li>
                <li><a href="/resources/{{LANGUAGE_SLUG}}/">{{LANGUAGE_NAME}}</a></li>
                <li><a href="/resources/{{LANGUAGE_SLUG}}/{{TOPIC_SLUG}}/">{{TOPIC_TITLE}}</a></li>
                <li aria-current="page">Practice</li>
            </ol>
        </nav>

        <!-- Practice Header -->
        <header class="resource-header">
            <div class="resource-meta-badges">
                <span class="meta-badge badge-chapter">Chapter {{CHAPTER_NUMBER}}</span>
                <span class="meta-badge badge-{{DIFFICULTY_CLASS}}">{{DIFFICULTY}}</span>
                <span class="meta-badge badge-questions">{{TOTAL_QUESTIONS}} Questions</span>
            </div>
            <h1 class="resource-title">Practice Questions — {{TOPIC_TITLE}}</h1>
            <p class="resource-notes-link">
                <a href="/resources/{{LANGUAGE_SLUG}}/{{TOPIC_SLUG}}/">&larr; Review the notes for this topic first</a>
            </p>
        </header>

        <!-- Question Stats -->
        <div class="practice-stats">
            <div class="stat-item"><span class="stat-number">{{COUNT_EASY}}</span><span class="stat-label">Easy</span></div>
            <div class="stat-item"><span class="stat-number">{{COUNT_MEDIUM}}</span><span class="stat-label">Medium</span></div>
            <div class="stat-item"><span class="stat-number">{{COUNT_HARD}}</span><span class="stat-label">Hard</span></div>
        </div>

        <!-- Topic-Specific Questions -->
        <section class="practice-section" id="topic-specific">
            <h2>Topic-Specific Questions</h2>
            <p class="section-desc">These questions test only the concepts from this specific chapter.</p>
            {{TOPIC_SPECIFIC_HTML}}
        </section>

        <!-- Mixed / Application Questions -->
        <section class="practice-section" id="mixed">
            <h2>Mixed / Application Questions</h2>
            <p class="section-desc">These questions combine concepts from this chapter with previous chapters. They require thinking across multiple topics.</p>
            {{MIXED_QUESTIONS_HTML}}
        </section>

        <!-- MCQs -->
        <section class="practice-section" id="mcqs">
            <h2>Multiple Choice Questions</h2>
            <p class="section-desc">Quick self-assessment. Each question has four options — pick the correct one, then check the explanation.</p>
            {{MCQS_HTML}}
        </section>

        <!-- Coding Challenges -->
        <section class="practice-section" id="coding-challenges">
            <h2>Coding Challenges</h2>
            <p class="section-desc">Write-the-code problems. Try solving them on your own before looking at the solution.</p>
            {{CODING_CHALLENGES_HTML}}
        </section>

        <!-- Chapter Navigation -->
        <nav class="chapter-nav">
            {{PREV_CHAPTER_PRACTICE_LINK}}
            {{NEXT_CHAPTER_PRACTICE_LINK}}
        </nav>

        <!-- Notes Link -->
        <section class="resource-practice-cta">
            <h2>Need to Revise?</h2>
            <p>Go back to the detailed notes for this topic and review the concepts.</p>
            <a href="/resources/{{LANGUAGE_SLUG}}/{{TOPIC_SLUG}}/" class="btn-practice">Back to Notes</a>
        </section>

        <!-- Course CTA -->
        <section class="resource-course-cta">
            <p>{{COURSE_CTA_TEXT}}</p>
            <a href="{{COURSE_CTA_URL}}" class="btn-course">{{COURSE_CTA_LINK_TEXT}}</a>
        </section>

    </main>

    <!-- Footer -->
    <div id="footer-placeholder"></div>

    <!-- Scripts -->
    <script src="/js/components-loader.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js"></script>
    <script src="/js/resource-interactive.js"></script>
</body>

</html>
```

- [ ] **Step 2: Commit**

```bash
git add content/resources/template/resource-practice-template.html
git commit -m "feat: add resource practice page HTML template"
```

---

## Task 4: Create Language Index and Master Index Templates

**Files:**
- Create: `content/resources/template/language-index-template.html`
- Create: `content/resources/template/resource-index-template.html`

- [ ] **Step 1: Create `language-index-template.html`**

Create `content/resources/template/language-index-template.html`:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16910316353"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16910316353');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{SEO_TITLE}}</title>

    <meta name="description" content="{{SEO_DESCRIPTION}}">
    <meta name="keywords" content="{{SEO_KEYWORDS}}">
    <meta name="author" content="Modern Age Coders">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
    <link rel="canonical" href="https://learn.modernagecoders.com/resources/{{LANGUAGE_SLUG}}">
    <link rel="alternate" hreflang="en" href="https://learn.modernagecoders.com/resources/{{LANGUAGE_SLUG}}">
    <link rel="alternate" hreflang="en-in" href="https://learn.modernagecoders.com/resources/{{LANGUAGE_SLUG}}">
    <link rel="alternate" hreflang="x-default" href="https://learn.modernagecoders.com/resources/{{LANGUAGE_SLUG}}">

    <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="apple-touch-icon" href="/favicon/favicon-32x32.png">

    <meta property="og:type" content="website">
    <meta property="og:url" content="https://learn.modernagecoders.com/resources/{{LANGUAGE_SLUG}}">
    <meta property="og:title" content="{{SEO_TITLE}}">
    <meta property="og:description" content="{{SEO_DESCRIPTION}}">
    <meta property="og:image" content="https://learn.modernagecoders.com/images/og-default.webp">
    <meta property="og:site_name" content="Modern Age Coders">

    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://learn.modernagecoders.com/resources/{{LANGUAGE_SLUG}}">
    <meta property="twitter:title" content="{{SEO_TITLE}}">
    <meta property="twitter:description" content="{{SEO_DESCRIPTION}}">
    <meta property="twitter:image" content="https://learn.modernagecoders.com/images/og-default.webp">

    <script type="application/ld+json">
    {{STRUCTURED_DATA}}
    </script>

    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/responsive.css">
    <link rel="stylesheet" href="/css/resource-template.css">
    <link rel="stylesheet" href="/css/mobile-nav-final-fix.css">
</head>

<body class="resource-index-page">

    <div id="nav-placeholder"></div>

    <main class="resource-main">
        <nav class="resource-breadcrumb" aria-label="Breadcrumb">
            <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/resources/">Resources</a></li>
                <li aria-current="page">{{LANGUAGE_NAME}}</li>
            </ol>
        </nav>

        <header class="resource-header">
            <h1 class="resource-title">{{INDEX_TITLE}}</h1>
            <div class="language-intro">
                {{INDEX_INTRO}}
            </div>
            <div class="language-stats">
                <span class="stat-badge">{{TOTAL_CHAPTERS}} Chapters</span>
                <span class="stat-badge">{{TOTAL_QUESTIONS}}+ Practice Questions</span>
                <span class="stat-badge">Free</span>
            </div>
        </header>

        <section class="chapter-listing">
            {{CHAPTERS_HTML}}
        </section>

        <section class="resource-course-cta">
            <p>{{COURSE_CTA_TEXT}}</p>
            <a href="{{COURSE_CTA_URL}}" class="btn-course">{{COURSE_CTA_LINK_TEXT}}</a>
        </section>
    </main>

    <div id="footer-placeholder"></div>

    <script src="/js/components-loader.js"></script>
</body>

</html>
```

- [ ] **Step 2: Create `resource-index-template.html`**

Create `content/resources/template/resource-index-template.html`:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16910316353"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16910316353');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Free Coding Resources - Detailed Notes and Practice Questions | Modern Age Coders</title>

    <meta name="description" content="Free detailed coding notes and practice questions for Python, HTML/CSS, JavaScript, C++, and Java. Chapter-by-chapter guides with 50+ questions per topic.">
    <meta name="keywords" content="coding resources, programming notes, coding practice questions, python tutorial, learn programming, coding notes for students, free coding guide">
    <meta name="author" content="Modern Age Coders">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
    <link rel="canonical" href="https://learn.modernagecoders.com/resources">
    <link rel="alternate" hreflang="en" href="https://learn.modernagecoders.com/resources">
    <link rel="alternate" hreflang="en-in" href="https://learn.modernagecoders.com/resources">
    <link rel="alternate" hreflang="x-default" href="https://learn.modernagecoders.com/resources">

    <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="apple-touch-icon" href="/favicon/favicon-32x32.png">

    <meta property="og:type" content="website">
    <meta property="og:url" content="https://learn.modernagecoders.com/resources">
    <meta property="og:title" content="Free Coding Resources - Detailed Notes and Practice Questions | Modern Age Coders">
    <meta property="og:description" content="Free detailed coding notes and practice questions for Python, HTML/CSS, JavaScript, C++, and Java.">
    <meta property="og:image" content="https://learn.modernagecoders.com/images/og-default.webp">
    <meta property="og:site_name" content="Modern Age Coders">

    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://learn.modernagecoders.com/resources">
    <meta property="twitter:title" content="Free Coding Resources - Detailed Notes and Practice Questions | Modern Age Coders">
    <meta property="twitter:description" content="Free detailed coding notes and practice questions for Python, HTML/CSS, JavaScript, C++, and Java.">
    <meta property="twitter:image" content="https://learn.modernagecoders.com/images/og-default.webp">

    <script type="application/ld+json">
    {{STRUCTURED_DATA}}
    </script>

    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/responsive.css">
    <link rel="stylesheet" href="/css/resource-template.css">
    <link rel="stylesheet" href="/css/mobile-nav-final-fix.css">
</head>

<body class="resource-index-page">

    <div id="nav-placeholder"></div>

    <main class="resource-main">
        <nav class="resource-breadcrumb" aria-label="Breadcrumb">
            <ol>
                <li><a href="/">Home</a></li>
                <li aria-current="page">Resources</li>
            </ol>
        </nav>

        <header class="resource-header">
            <h1 class="resource-title">Free Coding Resources — Detailed Notes and Practice Questions</h1>
            <p class="resource-subtitle">Chapter-by-chapter guides for every programming language we teach. Each topic has detailed notes explaining what and why, code examples, common mistakes, and 50+ practice questions from basic to advanced.</p>
        </header>

        <section class="language-cards">
            {{LANGUAGE_CARDS_HTML}}
        </section>
    </main>

    <div id="footer-placeholder"></div>

    <script src="/js/components-loader.js"></script>
</body>

</html>
```

- [ ] **Step 3: Commit**

```bash
git add content/resources/template/language-index-template.html content/resources/template/resource-index-template.html
git commit -m "feat: add language index and master index templates"
```

---

## Task 5: Create Resource CSS

**Files:**
- Create: `content/resources/template/resource-template.css`

- [ ] **Step 1: Create `resource-template.css`**

Create `content/resources/template/resource-template.css` with all styles for resource pages. This CSS follows the existing design tokens from the site (#a855f7 purple, #06b6d4 cyan, #000002 background, #f1f5f9 text, Syne headings, Inter body, Fira Code mono).

```css
/* ============================================
   RESOURCE HUB STYLES
   Modern Age Coders - Resource Pages
   ============================================ */

/* --- Base Layout --- */
.resource-main {
    max-width: 900px;
    margin: 0 auto;
    padding: 100px 24px 60px;
    color: #f1f5f9;
}

/* --- Breadcrumb --- */
.resource-breadcrumb ol {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0 0 24px;
    gap: 8px;
    font-size: 0.875rem;
    color: #94a3b8;
}

.resource-breadcrumb li::after {
    content: ">";
    margin-left: 8px;
    color: #475569;
}

.resource-breadcrumb li:last-child::after {
    content: "";
}

.resource-breadcrumb a {
    color: #a855f7;
    text-decoration: none;
}

.resource-breadcrumb a:hover {
    text-decoration: underline;
}

/* --- Page Header --- */
.resource-header {
    margin-bottom: 40px;
}

.resource-title {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    line-height: 1.2;
    color: #ffffff;
    margin: 16px 0;
}

.resource-subtitle {
    font-size: 1.125rem;
    color: #94a3b8;
    line-height: 1.6;
    max-width: 700px;
}

.resource-meta-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 8px;
}

.meta-badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.badge-chapter {
    background: rgba(168, 85, 247, 0.15);
    color: #a855f7;
    border: 1px solid rgba(168, 85, 247, 0.3);
}

.badge-beginner, .badge-Beginner {
    background: rgba(34, 197, 94, 0.15);
    color: #22c55e;
    border: 1px solid rgba(34, 197, 94, 0.3);
}

.badge-intermediate, .badge-Intermediate {
    background: rgba(245, 158, 11, 0.15);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.3);
}

.badge-advanced, .badge-Advanced {
    background: rgba(239, 68, 68, 0.15);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
}

.badge-time, .badge-updated {
    background: rgba(100, 116, 139, 0.15);
    color: #94a3b8;
    border: 1px solid rgba(100, 116, 139, 0.3);
}

.badge-questions {
    background: rgba(6, 182, 212, 0.15);
    color: #06b6d4;
    border: 1px solid rgba(6, 182, 212, 0.3);
}

.resource-practice-link a,
.resource-notes-link a {
    color: #06b6d4;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
}

.resource-practice-link a:hover,
.resource-notes-link a:hover {
    text-decoration: underline;
}

/* --- Table of Contents --- */
.resource-toc {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 40px;
}

.resource-toc h3 {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    margin: 0 0 12px;
    color: #ffffff;
}

.toc-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.toc-list li {
    padding: 6px 0;
}

.toc-list a {
    color: #a855f7;
    text-decoration: none;
    font-size: 0.9375rem;
}

.toc-list a:hover {
    text-decoration: underline;
}

/* --- Content Sections --- */
.resource-content {
    line-height: 1.8;
    font-size: 1.0625rem;
}

.content-section {
    margin-bottom: 48px;
}

.resource-content h2 {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: clamp(1.375rem, 3vw, 1.75rem);
    color: #ffffff;
    margin: 0 0 16px;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.resource-content h3 {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    color: #e2e8f0;
    margin: 24px 0 12px;
}

.resource-content p {
    color: #cbd5e1;
    margin: 0 0 16px;
}

.resource-content ul,
.resource-content ol {
    color: #cbd5e1;
    padding-left: 24px;
    margin: 0 0 16px;
}

.resource-content li {
    margin-bottom: 8px;
}

.resource-content strong {
    color: #f1f5f9;
}

/* --- Code Blocks --- */
.code-example {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    margin-bottom: 24px;
    overflow: hidden;
}

.code-example-title {
    background: rgba(168, 85, 247, 0.1);
    padding: 10px 16px;
    font-weight: 600;
    font-size: 0.9375rem;
    color: #a855f7;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.code-example pre {
    margin: 0;
    padding: 16px;
    overflow-x: auto;
    font-family: 'Fira Code', monospace;
    font-size: 0.875rem;
    line-height: 1.6;
}

.code-example-explanation {
    padding: 12px 16px;
    background: rgba(6, 182, 212, 0.05);
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    font-size: 0.9375rem;
    color: #94a3b8;
}

.code-example-output {
    padding: 10px 16px;
    background: rgba(34, 197, 94, 0.05);
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    font-size: 0.875rem;
    font-family: 'Fira Code', monospace;
    color: #22c55e;
}

.code-example-output::before {
    content: "Output: ";
    font-weight: 600;
    color: #16a34a;
}

/* --- Common Mistakes --- */
.mistake-card {
    background: rgba(239, 68, 68, 0.05);
    border: 1px solid rgba(239, 68, 68, 0.15);
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 20px;
}

.mistake-card h3 {
    color: #ef4444;
    font-size: 1.1rem;
    margin: 0 0 12px;
}

.mistake-card .wrong-code {
    border-left: 3px solid #ef4444;
}

.mistake-card .correct-code {
    border-left: 3px solid #22c55e;
}

.mistake-card .error-message {
    background: rgba(239, 68, 68, 0.1);
    color: #fca5a5;
    padding: 8px 12px;
    border-radius: 6px;
    font-family: 'Fira Code', monospace;
    font-size: 0.8125rem;
    margin: 8px 0;
}

/* --- Summary Box --- */
.summary-box {
    background: rgba(168, 85, 247, 0.05);
    border: 1px solid rgba(168, 85, 247, 0.2);
    border-radius: 12px;
    padding: 20px 20px 20px 16px;
}

.summary-box ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.summary-box li {
    padding: 8px 0 8px 24px;
    position: relative;
    color: #e2e8f0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.summary-box li:last-child {
    border-bottom: none;
}

.summary-box li::before {
    content: "\2713";
    position: absolute;
    left: 0;
    color: #a855f7;
    font-weight: 700;
}

/* --- Practice Page Styles --- */
.practice-stats {
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
}

.stat-item {
    flex: 1;
    text-align: center;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 16px;
}

.stat-number {
    display: block;
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.75rem;
    color: #a855f7;
}

.stat-label {
    font-size: 0.8125rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.practice-section {
    margin-bottom: 48px;
}

.practice-section h2 {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: clamp(1.375rem, 3vw, 1.75rem);
    color: #ffffff;
    margin: 0 0 8px;
}

.section-desc {
    color: #94a3b8;
    margin: 0 0 24px;
    font-size: 0.9375rem;
}

/* --- Question Cards --- */
.question-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 16px;
}

.question-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}

.question-number {
    font-weight: 700;
    color: #a855f7;
    font-size: 0.875rem;
}

.difficulty-easy {
    color: #22c55e;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.difficulty-medium {
    color: #f59e0b;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.difficulty-hard {
    color: #ef4444;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.question-text {
    color: #e2e8f0;
    margin-bottom: 12px;
    line-height: 1.7;
}

.question-code pre {
    margin: 12px 0;
    padding: 12px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    overflow-x: auto;
    font-family: 'Fira Code', monospace;
    font-size: 0.8125rem;
}

/* --- Collapsible Hint/Answer --- */
.collapsible-toggle {
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #94a3b8;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.875rem;
    margin-right: 8px;
    margin-bottom: 8px;
    transition: all 0.2s;
}

.collapsible-toggle:hover {
    border-color: #a855f7;
    color: #a855f7;
}

.collapsible-content {
    display: none;
    margin-top: 12px;
    padding: 16px;
    background: rgba(168, 85, 247, 0.05);
    border-radius: 8px;
    border: 1px solid rgba(168, 85, 247, 0.1);
}

.collapsible-content.is-open {
    display: block;
}

.collapsible-content.hint-content {
    background: rgba(245, 158, 11, 0.05);
    border-color: rgba(245, 158, 11, 0.15);
}

.answer-explanation {
    color: #cbd5e1;
    line-height: 1.7;
    font-size: 0.9375rem;
}

/* --- MCQ Styles --- */
.mcq-options {
    list-style: none;
    padding: 0;
    margin: 12px 0;
}

.mcq-options li {
    padding: 10px 14px;
    margin-bottom: 6px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 8px;
    color: #cbd5e1;
    font-size: 0.9375rem;
    cursor: pointer;
    transition: border-color 0.2s;
}

.mcq-options li:hover {
    border-color: #a855f7;
}

.mcq-options li.correct {
    border-color: #22c55e;
    background: rgba(34, 197, 94, 0.08);
}

.mcq-options li.incorrect {
    border-color: #ef4444;
    background: rgba(239, 68, 68, 0.08);
}

/* --- Chapter Navigation --- */
.chapter-nav {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin: 40px 0;
    padding: 20px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.chapter-nav a {
    display: flex;
    flex-direction: column;
    padding: 16px 20px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    text-decoration: none;
    flex: 1;
    transition: border-color 0.2s;
}

.chapter-nav a:hover {
    border-color: #a855f7;
}

.chapter-nav .nav-label {
    font-size: 0.75rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 4px;
}

.chapter-nav .nav-title {
    color: #f1f5f9;
    font-weight: 600;
    font-size: 0.9375rem;
}

.chapter-nav a:last-child {
    text-align: right;
}

/* --- CTAs --- */
.resource-practice-cta,
.resource-course-cta {
    text-align: center;
    padding: 32px;
    margin: 32px 0;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 16px;
}

.resource-practice-cta h2,
.resource-course-cta h2 {
    font-family: 'Syne', sans-serif;
    color: #ffffff;
    margin: 0 0 8px;
}

.resource-practice-cta p,
.resource-course-cta p {
    color: #94a3b8;
    margin: 0 0 16px;
}

.btn-practice,
.btn-course {
    display: inline-block;
    padding: 12px 32px;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    font-size: 1rem;
    transition: transform 0.2s, box-shadow 0.2s;
}

.btn-practice {
    background: linear-gradient(135deg, #a855f7, #06b6d4);
    color: #ffffff;
}

.btn-course {
    background: transparent;
    border: 2px solid #a855f7;
    color: #a855f7;
}

.btn-practice:hover,
.btn-course:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(168, 85, 247, 0.3);
}

/* --- Language Index Page --- */
.language-intro {
    color: #cbd5e1;
    line-height: 1.8;
    font-size: 1.0625rem;
    margin-bottom: 24px;
}

.language-stats {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 40px;
}

.stat-badge {
    padding: 8px 16px;
    background: rgba(168, 85, 247, 0.1);
    border: 1px solid rgba(168, 85, 247, 0.2);
    border-radius: 20px;
    color: #a855f7;
    font-weight: 600;
    font-size: 0.875rem;
}

.chapter-listing {
    margin-bottom: 40px;
}

.chapter-card {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    margin-bottom: 12px;
    text-decoration: none;
    transition: border-color 0.2s, transform 0.15s;
}

.chapter-card:hover {
    border-color: #a855f7;
    transform: translateX(4px);
}

.chapter-number {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    color: #a855f7;
    min-width: 48px;
    text-align: center;
}

.chapter-info {
    flex: 1;
}

.chapter-card-title {
    color: #f1f5f9;
    font-weight: 600;
    font-size: 1.0625rem;
    margin-bottom: 4px;
}

.chapter-card-desc {
    color: #94a3b8;
    font-size: 0.875rem;
    line-height: 1.5;
}

/* --- Master Index — Language Cards --- */
.language-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    margin-bottom: 40px;
}

.language-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 28px;
    text-decoration: none;
    transition: border-color 0.2s, transform 0.2s;
}

.language-card:hover {
    border-color: #a855f7;
    transform: translateY(-4px);
}

.language-card h2 {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    color: #ffffff;
    margin: 0 0 8px;
}

.language-card p {
    color: #94a3b8;
    font-size: 0.9375rem;
    line-height: 1.6;
    margin: 0 0 16px;
}

.language-card-meta {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

/* --- Related Topics --- */
.resource-related {
    margin: 40px 0;
}

.resource-related h2 {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    color: #ffffff;
    margin: 0 0 16px;
}

.related-links {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.related-links a {
    padding: 10px 18px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    color: #06b6d4;
    text-decoration: none;
    font-size: 0.9375rem;
    font-weight: 500;
    transition: border-color 0.2s;
}

.related-links a:hover {
    border-color: #06b6d4;
}

/* --- Responsive --- */
@media (max-width: 768px) {
    .resource-main {
        padding: 80px 16px 40px;
    }

    .practice-stats {
        flex-direction: column;
        gap: 12px;
    }

    .chapter-nav {
        flex-direction: column;
    }

    .chapter-nav a:last-child {
        text-align: left;
    }

    .chapter-card {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }

    .language-cards {
        grid-template-columns: 1fr;
    }
}

@media print {
    .resource-breadcrumb,
    .resource-practice-cta,
    .resource-course-cta,
    .chapter-nav,
    #nav-placeholder,
    #footer-placeholder {
        display: none;
    }

    .resource-main {
        padding: 0;
        max-width: 100%;
        color: #000;
    }

    .resource-title {
        color: #000;
    }

    .resource-content h2,
    .resource-content h3 {
        color: #000;
    }

    .resource-content p,
    .resource-content li {
        color: #333;
    }

    .code-example {
        border: 1px solid #ccc;
    }

    .collapsible-content {
        display: block;
    }
}
```

- [ ] **Step 2: Commit**

```bash
git add content/resources/template/resource-template.css
git commit -m "feat: add resource page CSS with design tokens"
```

---

## Task 6: Create Resource Interactive JS

**Files:**
- Create: `content/resources/template/resource-interactive.js`

This handles collapsible hint/answer sections and code copy buttons on resource pages.

- [ ] **Step 1: Create `resource-interactive.js`**

Create `content/resources/template/resource-interactive.js`:

```javascript
/**
 * Resource Pages Interactive Features
 * Handles collapsible answers/hints and code copy buttons
 */

(function () {
    'use strict';

    // --- Collapsible Sections (Hints, Answers, Solutions) ---
    document.addEventListener('click', function (e) {
        var toggle = e.target.closest('.collapsible-toggle');
        if (!toggle) return;

        var targetId = toggle.getAttribute('data-target');
        var content = document.getElementById(targetId);
        if (!content) return;

        var isOpen = content.classList.contains('is-open');
        content.classList.toggle('is-open');
        toggle.textContent = isOpen
            ? toggle.getAttribute('data-label-closed') || 'Show'
            : toggle.getAttribute('data-label-open') || 'Hide';
    });

    // --- Code Copy Buttons ---
    document.querySelectorAll('.code-example pre').forEach(function (pre) {
        var btn = document.createElement('button');
        btn.className = 'code-copy-btn';
        btn.textContent = 'Copy';
        btn.addEventListener('click', function () {
            var code = pre.querySelector('code');
            var text = code ? code.textContent : pre.textContent;
            navigator.clipboard.writeText(text).then(function () {
                btn.textContent = 'Copied!';
                setTimeout(function () {
                    btn.textContent = 'Copy';
                }, 2000);
            });
        });
        pre.parentNode.style.position = 'relative';
        pre.parentNode.insertBefore(btn, pre);
    });

    // --- Smooth scroll for TOC links ---
    document.querySelectorAll('.toc-list a, .resource-breadcrumb a').forEach(function (link) {
        if (link.getAttribute('href') && link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', function (e) {
                var target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        }
    });
})();
```

- [ ] **Step 2: Commit**

```bash
git add content/resources/template/resource-interactive.js
git commit -m "feat: add resource interactive JS for collapsible answers and code copy"
```

---

## Task 7: Create the Resource Generator Script

**Files:**
- Create: `scripts/generate-resources.js`

This is the core script. It follows the exact pattern of `scripts/generate-blogs.js` — reads JSON from `content/resources/data/`, loads templates, replaces variables, writes output to `content/resources/generated/`.

- [ ] **Step 1: Create `scripts/generate-resources.js`**

Create `scripts/generate-resources.js`:

```javascript
#!/usr/bin/env node

/**
 * Resource Generator for Modern Age Coders
 * Generates resource pages (notes + practice) from JSON data files
 */

const fs = require('fs');
const path = require('path');
const seoUtils = require('./seo-utils.js');

class ResourceGenerator {
    constructor() {
        this.projectRoot = path.resolve(__dirname, '..');
        this.dataDir = path.join(this.projectRoot, 'content', 'resources', 'data');
        this.templateDir = path.join(this.projectRoot, 'content', 'resources', 'template');
        this.generatedDir = path.join(this.projectRoot, 'content', 'resources', 'generated');
    }

    async generate() {
        try {
            console.log('Generating resource pages...');
            this.ensureDirectories();

            // Load templates
            const notesTemplate = fs.readFileSync(path.join(this.templateDir, 'resource-notes-template.html'), 'utf8');
            const practiceTemplate = fs.readFileSync(path.join(this.templateDir, 'resource-practice-template.html'), 'utf8');
            const langIndexTemplate = fs.readFileSync(path.join(this.templateDir, 'language-index-template.html'), 'utf8');
            const masterIndexTemplate = fs.readFileSync(path.join(this.templateDir, 'resource-index-template.html'), 'utf8');

            // Copy CSS and JS to output
            this.copyAssets();

            // Find all language directories
            const languages = fs.readdirSync(this.dataDir).filter(f => {
                return fs.statSync(path.join(this.dataDir, f)).isDirectory();
            });

            if (languages.length === 0) {
                console.log('No language directories found in resources/data/');
                return;
            }

            const allLanguageMeta = [];

            for (const langSlug of languages) {
                const langDataDir = path.join(this.dataDir, langSlug);
                const metaPath = path.join(langDataDir, '_meta.json');

                if (!fs.existsSync(metaPath)) {
                    console.error(`  Missing _meta.json for ${langSlug}, skipping`);
                    continue;
                }

                const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
                console.log(`  Processing: ${meta.language} (${meta.chapters.length} chapters)`);

                allLanguageMeta.push(meta);

                // Generate each chapter's notes + practice pages
                for (const chapter of meta.chapters) {
                    const chapterFile = path.join(langDataDir, `${chapter.slug}.json`);

                    if (!fs.existsSync(chapterFile)) {
                        console.error(`    Missing data file: ${chapter.slug}.json, skipping`);
                        continue;
                    }

                    const chapterData = JSON.parse(fs.readFileSync(chapterFile, 'utf8'));

                    if (!this.validateChapterData(chapterData, chapter.slug)) {
                        continue;
                    }

                    console.log(`    Generating: ${chapter.slug}`);

                    // Generate notes page
                    this.generateNotesPage(notesTemplate, chapterData, meta);

                    // Generate practice page
                    this.generatePracticePage(practiceTemplate, chapterData, meta);
                }

                // Generate language index page
                this.generateLanguageIndex(langIndexTemplate, meta);
            }

            // Generate master index page
            this.generateMasterIndex(masterIndexTemplate, allLanguageMeta);

            // Generate sitemap entries
            this.generateSitemapEntries(allLanguageMeta);

            console.log('Resource generation complete!');

        } catch (error) {
            console.error('Fatal error:', error.message);
            process.exit(1);
        }
    }

    ensureDirectories() {
        if (!fs.existsSync(this.generatedDir)) {
            fs.mkdirSync(this.generatedDir, { recursive: true });
        }
    }

    copyAssets() {
        // Copy resource CSS to src/css so it's served via /css/ route
        const cssSrc = path.join(this.templateDir, 'resource-template.css');
        const cssDest = path.join(this.projectRoot, 'src', 'css', 'resource-template.css');
        if (fs.existsSync(cssSrc)) {
            fs.copyFileSync(cssSrc, cssDest);
        }

        // Copy resource JS to src/js so it's served via /js/ route
        const jsSrc = path.join(this.templateDir, 'resource-interactive.js');
        const jsDest = path.join(this.projectRoot, 'src', 'js', 'resource-interactive.js');
        if (fs.existsSync(jsSrc)) {
            fs.copyFileSync(jsSrc, jsDest);
        }
    }

    validateChapterData(data, slug) {
        if (!data.title || !data.slug || !data.language || !data.chapter) {
            console.error(`    Invalid chapter data: ${slug} (missing required fields)`);
            return false;
        }
        if (!data.seo || !data.seo.title || !data.seo.description) {
            console.error(`    Invalid SEO data: ${slug}`);
            return false;
        }
        if (!data.content) {
            console.error(`    Missing content: ${slug}`);
            return false;
        }
        return true;
    }

    // --- Notes Page Generation ---

    generateNotesPage(template, chapterData, meta) {
        let html = template;
        const chapter = meta.chapters.find(c => c.slug === chapterData.slug);

        // SEO replacements
        html = html.replace(/{{SEO_TITLE}}/g, chapterData.seo.title);
        html = html.replace(/{{SEO_DESCRIPTION}}/g, chapterData.seo.description);
        html = html.replace(/{{SEO_KEYWORDS}}/g, chapterData.seo.keywords);
        html = html.replace(/{{LANGUAGE_SLUG}}/g, meta.slug);
        html = html.replace(/{{TOPIC_SLUG}}/g, chapterData.slug);
        html = html.replace(/{{LANGUAGE_NAME}}/g, meta.language);
        html = html.replace(/{{TOPIC_TITLE}}/g, chapterData.title);
        html = html.replace(/{{TOPIC_TITLE_FULL}}/g, chapterData.seo.title.replace(' | Modern Age Coders', ''));

        // Chapter metadata
        html = html.replace(/{{CHAPTER_NUMBER}}/g, String(chapterData.chapter));
        html = html.replace(/{{DIFFICULTY}}/g, chapterData.difficulty);
        html = html.replace(/{{DIFFICULTY_CLASS}}/g, chapterData.difficulty);
        html = html.replace(/{{READING_TIME}}/g, chapterData.readingTime || '15 min');
        html = html.replace(/{{LAST_UPDATED}}/g, chapterData.lastUpdated || '2026-04-06');

        // Content sections
        html = html.replace(/{{CONTENT_WHAT}}/g, chapterData.content.what || '');
        html = html.replace(/{{CONTENT_WHY}}/g, chapterData.content.why || '');
        html = html.replace(/{{CONTENT_EXPLANATION}}/g, chapterData.content.explanation || '');

        // Code examples
        html = html.replace(/{{CODE_EXAMPLES_HTML}}/g, this.generateCodeExamplesHTML(chapterData.content.codeExamples || []));

        // Common mistakes
        html = html.replace(/{{COMMON_MISTAKES_HTML}}/g, this.generateMistakesHTML(chapterData.content.commonMistakes || []));

        // Summary
        html = html.replace(/{{SUMMARY_HTML}}/g, this.generateSummaryHTML(chapterData.content.summary || []));

        // Related topics
        html = html.replace(/{{RELATED_TOPICS_HTML}}/g, this.generateRelatedTopicsHTML(chapterData.relatedTopics || [], meta));

        // Chapter navigation
        const nav = this.getChapterNav(chapterData.slug, meta, 'notes');
        html = html.replace(/{{PREV_CHAPTER_LINK}}/g, nav.prev);
        html = html.replace(/{{NEXT_CHAPTER_LINK}}/g, nav.next);

        // Course CTA
        html = html.replace(/{{COURSE_CTA_TEXT}}/g, meta.courseCta.text);
        html = html.replace(/{{COURSE_CTA_URL}}/g, meta.courseCta.url);
        html = html.replace(/{{COURSE_CTA_LINK_TEXT}}/g, meta.courseCta.linkText);

        // Structured data
        html = html.replace(/{{STRUCTURED_DATA}}/g, this.generateNotesStructuredData(chapterData, meta));

        // Write output
        const outDir = path.join(this.generatedDir, meta.slug, chapterData.slug);
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, 'index.html'), html);
    }

    // --- Practice Page Generation ---

    generatePracticePage(template, chapterData, meta) {
        let html = template;
        const practice = chapterData.practice || {};

        const topicSpecific = practice.topicSpecific || [];
        const mixed = practice.mixed || [];
        const mcqs = practice.mcqs || [];
        const codingChallenges = practice.codingChallenges || [];
        const totalQuestions = topicSpecific.length + mixed.length + mcqs.length + codingChallenges.length;

        // Count by difficulty
        const allQuestions = [...topicSpecific, ...mixed, ...mcqs, ...codingChallenges];
        const countEasy = allQuestions.filter(q => q.difficulty === 'Easy').length;
        const countMedium = allQuestions.filter(q => q.difficulty === 'Medium').length;
        const countHard = allQuestions.filter(q => q.difficulty === 'Hard').length;

        // Practice-specific SEO
        const practiceSeoTitle = `${chapterData.title} Practice Questions - Python | Modern Age Coders`;
        const practiceSeoDesc = `${totalQuestions}+ practice questions on ${chapterData.title}. Includes coding problems, MCQs, and mixed questions from easy to hard. Free Python practice for students.`;
        const practiceSeoKeywords = `${chapterData.title.toLowerCase()} practice questions, ${chapterData.title.toLowerCase()} exercises, python ${chapterData.slug.replace(/-/g, ' ')} quiz, ${chapterData.seo.keywords}`;

        html = html.replace(/{{SEO_TITLE}}/g, practiceSeoTitle);
        html = html.replace(/{{SEO_DESCRIPTION}}/g, practiceSeoDesc);
        html = html.replace(/{{SEO_KEYWORDS}}/g, practiceSeoKeywords);
        html = html.replace(/{{LANGUAGE_SLUG}}/g, meta.slug);
        html = html.replace(/{{TOPIC_SLUG}}/g, chapterData.slug);
        html = html.replace(/{{LANGUAGE_NAME}}/g, meta.language);
        html = html.replace(/{{TOPIC_TITLE}}/g, chapterData.title);
        html = html.replace(/{{CHAPTER_NUMBER}}/g, String(chapterData.chapter));
        html = html.replace(/{{DIFFICULTY}}/g, chapterData.difficulty);
        html = html.replace(/{{DIFFICULTY_CLASS}}/g, chapterData.difficulty);
        html = html.replace(/{{TOTAL_QUESTIONS}}/g, String(totalQuestions));
        html = html.replace(/{{COUNT_EASY}}/g, String(countEasy));
        html = html.replace(/{{COUNT_MEDIUM}}/g, String(countMedium));
        html = html.replace(/{{COUNT_HARD}}/g, String(countHard));

        // Question sections
        html = html.replace(/{{TOPIC_SPECIFIC_HTML}}/g, this.generateQuestionsHTML(topicSpecific, 'ts'));
        html = html.replace(/{{MIXED_QUESTIONS_HTML}}/g, this.generateQuestionsHTML(mixed, 'mx'));
        html = html.replace(/{{MCQS_HTML}}/g, this.generateMCQsHTML(mcqs));
        html = html.replace(/{{CODING_CHALLENGES_HTML}}/g, this.generateCodingChallengesHTML(codingChallenges));

        // Chapter navigation (practice)
        const nav = this.getChapterNav(chapterData.slug, meta, 'practice');
        html = html.replace(/{{PREV_CHAPTER_PRACTICE_LINK}}/g, nav.prev);
        html = html.replace(/{{NEXT_CHAPTER_PRACTICE_LINK}}/g, nav.next);

        // Course CTA
        html = html.replace(/{{COURSE_CTA_TEXT}}/g, meta.courseCta.text);
        html = html.replace(/{{COURSE_CTA_URL}}/g, meta.courseCta.url);
        html = html.replace(/{{COURSE_CTA_LINK_TEXT}}/g, meta.courseCta.linkText);

        // Structured data
        html = html.replace(/{{STRUCTURED_DATA}}/g, this.generatePracticeStructuredData(chapterData, meta, totalQuestions));

        // Write output
        const outDir = path.join(this.generatedDir, meta.slug, chapterData.slug, 'practice');
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, 'index.html'), html);
    }

    // --- Language Index Generation ---

    generateLanguageIndex(template, meta) {
        let html = template;

        html = html.replace(/{{SEO_TITLE}}/g, meta.index.title + ' | Modern Age Coders');
        html = html.replace(/{{SEO_DESCRIPTION}}/g, meta.index.description);
        html = html.replace(/{{SEO_KEYWORDS}}/g, meta.index.keywords);
        html = html.replace(/{{LANGUAGE_SLUG}}/g, meta.slug);
        html = html.replace(/{{LANGUAGE_NAME}}/g, meta.language);
        html = html.replace(/{{INDEX_TITLE}}/g, meta.index.title);
        html = html.replace(/{{INDEX_INTRO}}/g, meta.index.intro);
        html = html.replace(/{{TOTAL_CHAPTERS}}/g, String(meta.chapters.length));
        html = html.replace(/{{TOTAL_QUESTIONS}}/g, String(meta.chapters.length * 50));

        // Chapter listing HTML
        let chaptersHtml = '';
        for (const ch of meta.chapters) {
            chaptersHtml += `<a href="/resources/${meta.slug}/${ch.slug}/" class="chapter-card">\n`;
            chaptersHtml += `  <div class="chapter-number">${ch.order}</div>\n`;
            chaptersHtml += `  <div class="chapter-info">\n`;
            chaptersHtml += `    <div class="chapter-card-title">${ch.title}</div>\n`;
            chaptersHtml += `    <div class="chapter-card-desc">${ch.description}</div>\n`;
            chaptersHtml += `  </div>\n`;
            chaptersHtml += `  <span class="meta-badge badge-${ch.difficulty}">${ch.difficulty}</span>\n`;
            chaptersHtml += `</a>\n`;
        }
        html = html.replace(/{{CHAPTERS_HTML}}/g, chaptersHtml);

        // Course CTA
        html = html.replace(/{{COURSE_CTA_TEXT}}/g, meta.courseCta.text);
        html = html.replace(/{{COURSE_CTA_URL}}/g, meta.courseCta.url);
        html = html.replace(/{{COURSE_CTA_LINK_TEXT}}/g, meta.courseCta.linkText);

        // Structured data
        const breadcrumbs = [
            { name: 'Home', url: '/' },
            { name: 'Resources', url: '/resources' },
            { name: meta.language, url: `/resources/${meta.slug}` }
        ];
        const structuredData = JSON.stringify([
            seoUtils.generateBreadcrumbSchema(breadcrumbs),
            {
                "@context": "https://schema.org",
                "@type": "Course",
                "name": meta.index.title,
                "description": meta.index.description,
                "provider": {
                    "@type": "Organization",
                    "name": "Modern Age Coders",
                    "url": "https://learn.modernagecoders.com"
                },
                "isAccessibleForFree": true
            }
        ], null, 2);
        html = html.replace(/{{STRUCTURED_DATA}}/g, structuredData);

        // Write output
        const outDir = path.join(this.generatedDir, meta.slug);
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, 'index.html'), html);
    }

    // --- Master Index Generation ---

    generateMasterIndex(template, allLanguageMeta) {
        let html = template;

        let cardsHtml = '';
        for (const meta of allLanguageMeta) {
            cardsHtml += `<a href="/resources/${meta.slug}/" class="language-card">\n`;
            cardsHtml += `  <h2>${meta.language}</h2>\n`;
            cardsHtml += `  <p>${meta.index.description}</p>\n`;
            cardsHtml += `  <div class="language-card-meta">\n`;
            cardsHtml += `    <span class="meta-badge badge-chapter">${meta.chapters.length} Chapters</span>\n`;
            cardsHtml += `    <span class="meta-badge badge-questions">${meta.chapters.length * 50}+ Questions</span>\n`;
            cardsHtml += `    <span class="meta-badge badge-${meta.chapters[0].difficulty}">${meta.audience}</span>\n`;
            cardsHtml += `  </div>\n`;
            cardsHtml += `</a>\n`;
        }
        html = html.replace(/{{LANGUAGE_CARDS_HTML}}/g, cardsHtml);

        // Structured data
        const structuredData = JSON.stringify([
            seoUtils.generateBreadcrumbSchema([
                { name: 'Home', url: '/' },
                { name: 'Resources', url: '/resources' }
            ]),
            {
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                "name": "Free Coding Resources",
                "description": "Detailed coding notes and practice questions for Python, HTML/CSS, JavaScript, C++, and Java.",
                "url": "https://learn.modernagecoders.com/resources",
                "provider": {
                    "@type": "Organization",
                    "name": "Modern Age Coders",
                    "url": "https://learn.modernagecoders.com"
                }
            }
        ], null, 2);
        html = html.replace(/{{STRUCTURED_DATA}}/g, structuredData);

        // Write output
        const outDir = this.generatedDir;
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, 'index.html'), html);
    }

    // --- HTML Generation Helpers ---

    generateCodeExamplesHTML(examples) {
        let html = '';
        for (const ex of examples) {
            html += `<div class="code-example">\n`;
            if (ex.title) {
                html += `  <div class="code-example-title">${ex.title}</div>\n`;
            }
            html += `  <pre><code class="language-${ex.language || 'python'}">${this.escapeHtml(ex.code)}</code></pre>\n`;
            if (ex.explanation) {
                html += `  <div class="code-example-explanation">${ex.explanation}</div>\n`;
            }
            if (ex.output) {
                html += `  <div class="code-example-output">${this.escapeHtml(ex.output)}</div>\n`;
            }
            html += `</div>\n`;
        }
        return html;
    }

    generateMistakesHTML(mistakes) {
        let html = '';
        for (const m of mistakes) {
            html += `<div class="mistake-card">\n`;
            html += `  <h3>${m.title}</h3>\n`;
            if (m.wrongCode) {
                html += `  <div class="code-example wrong-code">\n`;
                html += `    <div class="code-example-title">Wrong Code</div>\n`;
                html += `    <pre><code class="language-python">${this.escapeHtml(m.wrongCode)}</code></pre>\n`;
                html += `  </div>\n`;
            }
            if (m.error) {
                html += `  <div class="error-message">${this.escapeHtml(m.error)}</div>\n`;
            }
            if (m.correctCode) {
                html += `  <div class="code-example correct-code">\n`;
                html += `    <div class="code-example-title">Correct Code</div>\n`;
                html += `    <pre><code class="language-python">${this.escapeHtml(m.correctCode)}</code></pre>\n`;
                html += `  </div>\n`;
            }
            if (m.explanation) {
                html += `  <p>${m.explanation}</p>\n`;
            }
            html += `</div>\n`;
        }
        return html;
    }

    generateSummaryHTML(items) {
        return items.map(item => `<li>${item}</li>`).join('\n');
    }

    generateRelatedTopicsHTML(slugs, meta) {
        let html = '';
        for (const slug of slugs) {
            const ch = meta.chapters.find(c => c.slug === slug);
            if (ch) {
                html += `<a href="/resources/${meta.slug}/${slug}/">${ch.title}</a>\n`;
            }
        }
        return html;
    }

    generateQuestionsHTML(questions, prefix) {
        let html = '';
        questions.forEach((q, i) => {
            const id = q.id || `${prefix}-${i + 1}`;
            html += `<div class="question-card">\n`;
            html += `  <div class="question-header">\n`;
            html += `    <span class="question-number">Q${i + 1}</span>\n`;
            html += `    <span class="difficulty-${(q.difficulty || 'Medium').toLowerCase()}">${q.difficulty || 'Medium'}</span>\n`;
            html += `  </div>\n`;
            html += `  <div class="question-text">${q.question}</div>\n`;
            if (q.code) {
                html += `  <div class="question-code"><pre><code class="language-python">${this.escapeHtml(q.code)}</code></pre></div>\n`;
            }
            // Hint button
            if (q.hint) {
                html += `  <button class="collapsible-toggle" data-target="hint-${id}" data-label-closed="Show Hint" data-label-open="Hide Hint">Show Hint</button>\n`;
                html += `  <div class="collapsible-content hint-content" id="hint-${id}">${q.hint}</div>\n`;
            }
            // Answer button
            if (q.answer || q.explanation) {
                html += `  <button class="collapsible-toggle" data-target="answer-${id}" data-label-closed="Show Answer" data-label-open="Hide Answer">Show Answer</button>\n`;
                html += `  <div class="collapsible-content" id="answer-${id}">\n`;
                if (q.answer) {
                    html += `    <div class="code-example"><pre><code class="language-python">${this.escapeHtml(q.answer)}</code></pre></div>\n`;
                }
                if (q.explanation) {
                    html += `    <div class="answer-explanation">${q.explanation}</div>\n`;
                }
                html += `  </div>\n`;
            }
            html += `</div>\n`;
        });
        return html;
    }

    generateMCQsHTML(mcqs) {
        let html = '';
        mcqs.forEach((q, i) => {
            const id = q.id || `mcq-${i + 1}`;
            html += `<div class="question-card">\n`;
            html += `  <div class="question-header">\n`;
            html += `    <span class="question-number">Q${i + 1}</span>\n`;
            html += `    <span class="difficulty-${(q.difficulty || 'Medium').toLowerCase()}">${q.difficulty || 'Medium'}</span>\n`;
            html += `  </div>\n`;
            html += `  <div class="question-text">${q.question}</div>\n`;
            if (q.code) {
                html += `  <div class="question-code"><pre><code class="language-python">${this.escapeHtml(q.code)}</code></pre></div>\n`;
            }
            html += `  <ul class="mcq-options">\n`;
            for (const [key, value] of Object.entries(q.options)) {
                html += `    <li data-option="${key}">${key}. ${value}</li>\n`;
            }
            html += `  </ul>\n`;
            // Answer
            html += `  <button class="collapsible-toggle" data-target="answer-${id}" data-label-closed="Show Answer" data-label-open="Hide Answer">Show Answer</button>\n`;
            html += `  <div class="collapsible-content" id="answer-${id}">\n`;
            html += `    <p><strong>Correct Answer: ${q.correct}</strong></p>\n`;
            if (q.explanation) {
                html += `    <div class="answer-explanation">${q.explanation}</div>\n`;
            }
            html += `  </div>\n`;
            html += `</div>\n`;
        });
        return html;
    }

    generateCodingChallengesHTML(challenges) {
        let html = '';
        challenges.forEach((q, i) => {
            const id = q.id || `cc-${i + 1}`;
            html += `<div class="question-card">\n`;
            html += `  <div class="question-header">\n`;
            html += `    <span class="question-number">Challenge ${i + 1}</span>\n`;
            html += `    <span class="difficulty-${(q.difficulty || 'Hard').toLowerCase()}">${q.difficulty || 'Hard'}</span>\n`;
            html += `  </div>\n`;
            html += `  <div class="question-text">${q.question}</div>\n`;
            if (q.expectedInput) {
                html += `  <p><strong>Sample Input:</strong> <code>${this.escapeHtml(q.expectedInput)}</code></p>\n`;
            }
            if (q.expectedOutput) {
                html += `  <p><strong>Expected Output:</strong> <code>${this.escapeHtml(q.expectedOutput)}</code></p>\n`;
            }
            if (q.constraints) {
                html += `  <p><strong>Constraints:</strong> ${q.constraints}</p>\n`;
            }
            // Solution
            html += `  <button class="collapsible-toggle" data-target="solution-${id}" data-label-closed="Show Solution" data-label-open="Hide Solution">Show Solution</button>\n`;
            html += `  <div class="collapsible-content" id="solution-${id}">\n`;
            if (q.solution) {
                html += `    <div class="code-example"><pre><code class="language-python">${this.escapeHtml(q.solution)}</code></pre></div>\n`;
            }
            if (q.explanation) {
                html += `    <div class="answer-explanation">${q.explanation}</div>\n`;
            }
            if (q.alternativeSolution) {
                html += `    <p><strong>Alternative Solution:</strong></p>\n`;
                html += `    <div class="code-example"><pre><code class="language-python">${this.escapeHtml(q.alternativeSolution)}</code></pre></div>\n`;
            }
            html += `  </div>\n`;
            html += `</div>\n`;
        });
        return html;
    }

    // --- Navigation Helpers ---

    getChapterNav(currentSlug, meta, type) {
        const idx = meta.chapters.findIndex(c => c.slug === currentSlug);
        const suffix = type === 'practice' ? '/practice/' : '/';
        let prev = '';
        let next = '';

        if (idx > 0) {
            const prevCh = meta.chapters[idx - 1];
            prev = `<a href="/resources/${meta.slug}/${prevCh.slug}${suffix}">\n`;
            prev += `  <span class="nav-label">Previous</span>\n`;
            prev += `  <span class="nav-title">${prevCh.title}</span>\n`;
            prev += `</a>`;
        }

        if (idx < meta.chapters.length - 1) {
            const nextCh = meta.chapters[idx + 1];
            next = `<a href="/resources/${meta.slug}/${nextCh.slug}${suffix}">\n`;
            next += `  <span class="nav-label">Next</span>\n`;
            next += `  <span class="nav-title">${nextCh.title}</span>\n`;
            next += `</a>`;
        }

        return { prev, next };
    }

    // --- Structured Data Helpers ---

    generateNotesStructuredData(chapterData, meta) {
        const breadcrumbs = [
            { name: 'Home', url: '/' },
            { name: 'Resources', url: '/resources' },
            { name: meta.language, url: `/resources/${meta.slug}` },
            { name: chapterData.title, url: `/resources/${meta.slug}/${chapterData.slug}` }
        ];

        const schemas = [
            seoUtils.generateBreadcrumbSchema(breadcrumbs),
            {
                "@context": "https://schema.org",
                "@type": "TechArticle",
                "headline": chapterData.seo.title,
                "description": chapterData.seo.description,
                "author": {
                    "@type": "Organization",
                    "name": "Modern Age Coders"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Modern Age Coders",
                    "url": "https://learn.modernagecoders.com"
                },
                "dateModified": chapterData.lastUpdated || "2026-04-06",
                "mainEntityOfPage": `https://learn.modernagecoders.com/resources/${meta.slug}/${chapterData.slug}`,
                "isAccessibleForFree": true
            }
        ];

        // Add FAQ from common mistakes
        if (chapterData.content.commonMistakes && chapterData.content.commonMistakes.length > 0) {
            schemas.push({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": chapterData.content.commonMistakes.map(m => ({
                    "@type": "Question",
                    "name": m.title,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": m.explanation
                    }
                }))
            });
        }

        return JSON.stringify(schemas, null, 2);
    }

    generatePracticeStructuredData(chapterData, meta, totalQuestions) {
        const breadcrumbs = [
            { name: 'Home', url: '/' },
            { name: 'Resources', url: '/resources' },
            { name: meta.language, url: `/resources/${meta.slug}` },
            { name: chapterData.title, url: `/resources/${meta.slug}/${chapterData.slug}` },
            { name: 'Practice', url: `/resources/${meta.slug}/${chapterData.slug}/practice` }
        ];

        return JSON.stringify([
            seoUtils.generateBreadcrumbSchema(breadcrumbs),
            {
                "@context": "https://schema.org",
                "@type": "Quiz",
                "name": `${chapterData.title} Practice Questions`,
                "description": `${totalQuestions} practice questions on ${chapterData.title} in Python`,
                "educationalLevel": chapterData.difficulty,
                "isAccessibleForFree": true
            }
        ], null, 2);
    }

    // --- Sitemap Generation ---

    generateSitemapEntries(allLanguageMeta) {
        const today = new Date().toISOString().split('T')[0];
        let entries = '';

        // Master index
        entries += `\n  <!-- Resource Pages -->\n`;
        entries += `  <url>\n    <loc>https://learn.modernagecoders.com/resources</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;

        for (const meta of allLanguageMeta) {
            // Language index
            entries += `  <url>\n    <loc>https://learn.modernagecoders.com/resources/${meta.slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;

            // Chapter pages
            for (const ch of meta.chapters) {
                entries += `  <url>\n    <loc>https://learn.modernagecoders.com/resources/${meta.slug}/${ch.slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.80</priority>\n  </url>\n`;
                entries += `  <url>\n    <loc>https://learn.modernagecoders.com/resources/${meta.slug}/${ch.slug}/practice</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.75</priority>\n  </url>\n`;
            }
        }

        // Write to a file that can be appended to sitemap.xml
        const outPath = path.join(this.generatedDir, 'sitemap-entries.xml');
        fs.writeFileSync(outPath, entries);
        console.log(`  Sitemap entries written to ${outPath}`);
    }

    // --- Utilities ---

    escapeHtml(text) {
        const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
        return text.replace(/[&<>"']/g, m => map[m]);
    }
}

// Run
const generator = new ResourceGenerator();
generator.generate();
```

- [ ] **Step 2: Run the generator to verify it boots without errors (no data yet, should exit cleanly)**

```bash
node scripts/generate-resources.js
```

Expected output: `Generating resource pages...` then `No language directories found` or processes the _meta.json with missing chapter files.

- [ ] **Step 3: Commit**

```bash
git add scripts/generate-resources.js
git commit -m "feat: add resource generator script"
```

---

## Task 8: Update Build System (package.json, netlify.toml, nav)

**Files:**
- Modify: `package.json:8`
- Modify: `netlify.toml:1-6`
- Modify: `components/nav.html`

- [ ] **Step 1: Update package.json — add generate:resources script and update generate:all**

In `package.json`, change:
```json
"generate:all": "npm run generate:blogs && npm run generate:courses",
```
to:
```json
"generate:resources": "node scripts/generate-resources.js",
"generate:all": "npm run generate:blogs && npm run generate:courses && npm run generate:resources",
```

- [ ] **Step 2: Update netlify.toml — add resources redirect rule**

Add this redirect block in `netlify.toml` (before the static page redirects):

```toml
# Resources section
[[redirects]]
  from = "/resources/*"
  to = "/content/resources/generated/:splat"
  status = 200

[[redirects]]
  from = "/resources"
  to = "/content/resources/generated/index.html"
  status = 200
```

- [ ] **Step 3: Update `components/nav.html` — add Resources dropdown**

Add a "Resources" link to the nav. Find the existing dropdown structure and add:

```html
<li class="nav-dropdown">
    <a href="/resources/" class="nav-link dropdown-toggle">Resources</a>
    <div class="dropdown-menu">
        <a href="/resources/python/" class="dropdown-item">Python</a>
    </div>
</li>
```

(Place it after the existing "Practice" dropdown in the nav.)

- [ ] **Step 4: Commit**

```bash
git add package.json netlify.toml components/nav.html
git commit -m "feat: integrate resource generator into build system and navigation"
```

---

## Task 9: Create Python Chapter 1 — Introduction to Python (Sample Chapter)

**Files:**
- Create: `content/resources/data/python/introduction-to-python.json`

This is the first full chapter JSON file. It serves as the template for all subsequent chapters. It must include: complete notes content (what, why, explanation), 5+ code examples, 3+ common mistakes, summary, and 50+ practice questions.

- [ ] **Step 1: Create `introduction-to-python.json`**

Create `content/resources/data/python/introduction-to-python.json` with the full chapter data. This JSON file should follow the schema defined in the spec (section 6). It must contain:

- `title`: "Introduction to Python"
- `slug`: "introduction-to-python"
- `language`: "python"
- `chapter`: 1
- `difficulty`: "Beginner"
- `readingTime`: "12 min"
- `lastUpdated`: "2026-04-06"
- `seo`: title, description, and keywords targeting "what is python", "python introduction for beginners", "why learn python"
- `content.what`: HTML explaining what Python is (programming language, created by Guido van Rossum, used in web dev, AI, data science, etc.)
- `content.why`: HTML explaining why learn Python (easy syntax, huge community, career opportunities, versatile)
- `content.explanation`: Detailed HTML covering history, features, where Python is used, Python 2 vs 3, how Python works (interpreted language), REPL
- `content.codeExamples`: 6+ examples showing print(), comments, basic math in REPL, multiline code
- `content.commonMistakes`: 3+ mistakes (running Python 2 commands, forgetting parentheses in print, case sensitivity)
- `content.summary`: 8+ bullet points
- `relatedTopics`: ["installing-python-and-setup", "your-first-python-program"]
- `practice.topicSpecific`: 15+ questions
- `practice.mixed`: 10+ questions (since this is chapter 1, these are "general programming concepts" questions)
- `practice.mcqs`: 18+ MCQs
- `practice.codingChallenges`: 7+ challenges

**Total: 50+ questions, from Easy to Hard.**

The full JSON content is too large to include inline in this plan. The implementer should write the complete JSON following the schema from the spec, ensuring:
- Professional tone, no emojis
- "What" and "why" explained before "how"
- Easy language appropriate for ages 10-16
- All code examples have line-by-line explanations
- All answers have detailed explanations
- MCQs explain why each wrong option is wrong
- Difficulty spread: 30% easy, 40% medium, 30% hard

- [ ] **Step 2: Run the generator to test end-to-end**

```bash
node scripts/generate-resources.js
```

Expected: Generator creates `content/resources/generated/index.html`, `content/resources/generated/python/index.html`, `content/resources/generated/python/introduction-to-python/index.html`, and `content/resources/generated/python/introduction-to-python/practice/index.html`.

- [ ] **Step 3: Verify the generated HTML files are valid**

Open the generated files and check:
- All template variables are replaced (no `{{...}}` remaining)
- Structured data JSON-LD is valid JSON
- Code examples render with Prism.js classes
- Collapsible sections have correct data-target IDs
- Chapter navigation works (Ch 1 should have no "Previous" link)
- Breadcrumbs are correct

```bash
grep -r "{{" content/resources/generated/ || echo "No unreplaced variables found"
```

- [ ] **Step 4: Commit**

```bash
git add content/resources/data/python/introduction-to-python.json
git commit -m "feat: add Python Chapter 1 - Introduction to Python"
```

---

## Task 10: Create Python Chapter 2 — Installing Python and Setup

**Files:**
- Create: `content/resources/data/python/installing-python-and-setup.json`

Same structure as Task 9. Content covers: downloading Python from python.org, installing on Windows/Mac/Linux, verifying installation (`python --version`), choosing an IDE (IDLE, VS Code, PyCharm), creating your first file, running from terminal vs IDE.

50+ practice questions: installation troubleshooting scenarios, IDE comparison MCQs, "what happens if..." questions.

- [ ] **Step 1: Create `installing-python-and-setup.json` with full content**
- [ ] **Step 2: Run generator and verify output**
- [ ] **Step 3: Commit**

---

## Task 11: Create Python Chapter 3 — Your First Python Program

**Files:**
- Create: `content/resources/data/python/your-first-python-program.json`

Content: print() function in detail, printing strings, numbers, multiple values, escape characters (\n, \t, \\), comments (# and triple-quotes), running programs from file vs interactive mode. 50+ practice questions.

- [ ] **Step 1: Create JSON with full content**
- [ ] **Step 2: Run generator and verify**
- [ ] **Step 3: Commit**

---

## Task 12: Create Python Chapter 4 — Variables and Data Types

**Files:**
- Create: `content/resources/data/python/variables-and-data-types.json`

Content: What is a variable, naming rules, int/float/str/bool, type(), type conversion, multiple assignment, variable swapping. 50+ practice questions with heavy focus on type conversion edge cases and output prediction.

- [ ] **Step 1: Create JSON with full content**
- [ ] **Step 2: Run generator and verify**
- [ ] **Step 3: Commit**

---

## Task 13: Create Python Chapter 5 — Operators in Python

**Files:**
- Create: `content/resources/data/python/operators-in-python.json`

Content: Arithmetic (+, -, *, /, //, %, **), comparison (==, !=, <, >, <=, >=), logical (and, or, not), assignment (=, +=, -=, etc.), operator precedence. 50+ questions with heavy operator precedence tricky questions.

- [ ] **Step 1: Create JSON with full content**
- [ ] **Step 2: Run generator and verify**
- [ ] **Step 3: Commit**

---

## Task 14: Create Python Chapter 6 — Taking Input and Type Conversion

**Files:**
- Create: `content/resources/data/python/taking-input-and-type-conversion.json`

Content: input() function, everything from input() is a string, int(), float(), str(), bool(), ValueError when conversion fails, building a simple calculator. 50+ questions.

- [ ] **Step 1: Create JSON with full content**
- [ ] **Step 2: Run generator and verify**
- [ ] **Step 3: Commit**

---

## Task 15: Create Python Chapter 7 — Conditional Statements

**Files:**
- Create: `content/resources/data/python/conditional-statements.json`

Content: if, if-else, if-elif-else, nested if, short-hand if, ternary operator, truthiness/falsiness, combining conditions with and/or/not. 55+ questions including tricky nested condition output prediction.

- [ ] **Step 1: Create JSON with full content**
- [ ] **Step 2: Run generator and verify**
- [ ] **Step 3: Commit**

---

## Task 16: Create Python Chapter 8 — Loops in Python

**Files:**
- Create: `content/resources/data/python/loops-in-python.json`

Content: for loop with range(), iterating over strings/lists, while loop, infinite loops, else clause on loops, nested loops, loop counter patterns. 60+ questions — loops are a critical concept.

- [ ] **Step 1: Create JSON with full content**
- [ ] **Step 2: Run generator and verify**
- [ ] **Step 3: Commit**

---

## Task 17: Create Python Chapter 9 — Loop Control Statements

**Files:**
- Create: `content/resources/data/python/loop-control-statements.json`

Content: break, continue, pass, how they work in for vs while, nested loop break behavior, using break with else, practical examples (searching, filtering). 50+ questions.

- [ ] **Step 1: Create JSON with full content**
- [ ] **Step 2: Run generator and verify**
- [ ] **Step 3: Commit**

---

## Task 18: Create Python Chapter 10 — Pattern Printing

**Files:**
- Create: `content/resources/data/python/pattern-printing.json`

Content: Star patterns (right triangle, inverted, pyramid, diamond), number patterns (1-2-3, Floyd's triangle), alphabet patterns. Step-by-step breakdown of how to think about patterns using rows and columns. 55+ questions — all coding challenges.

- [ ] **Step 1: Create JSON with full content**
- [ ] **Step 2: Run generator and verify**
- [ ] **Step 3: Commit**

---

## Task 19: Create Python Chapter 11 — Strings in Python

**Files:**
- Create: `content/resources/data/python/strings-in-python.json`

Content: String creation (single/double/triple quotes), indexing, slicing [start:stop:step], string methods (upper, lower, strip, split, join, replace, find, count, startswith, endswith), f-strings, string immutability, string iteration. 60+ questions.

- [ ] **Step 1: Create JSON with full content**
- [ ] **Step 2: Run generator and verify**
- [ ] **Step 3: Commit**

---

## Task 20: Create Python Chapter 12 — Lists in Python

**Files:**
- Create: `content/resources/data/python/lists-in-python.json`

Content: Creating lists, accessing elements, slicing, list methods (append, insert, remove, pop, sort, reverse, index, count), list comprehension basics, nested lists, list copying (shallow vs deep), list vs string differences. 60+ questions.

- [ ] **Step 1: Create JSON with full content**
- [ ] **Step 2: Run generator and verify**
- [ ] **Step 3: Commit**

---

## Task 21: Create Python Chapter 13 — Tuples in Python

**Files:**
- Create: `content/resources/data/python/tuples-in-python.json`

Content: Tuple creation, single-element tuple gotcha, tuple unpacking, tuple methods (count, index), tuple vs list, when to use tuples, named tuples mention, tuple as dictionary keys. 50+ questions.

- [ ] **Step 1: Create JSON with full content**
- [ ] **Step 2: Run generator and verify**
- [ ] **Step 3: Commit**

---

## Task 22: Create Python Chapter 14 — Dictionaries in Python

**Files:**
- Create: `content/resources/data/python/dictionaries-in-python.json`

Content: Creating dictionaries, accessing values ([] vs get()), adding/updating/deleting keys, dictionary methods (keys, values, items, update, pop, setdefault), looping over dictionaries, nested dictionaries, dictionary comprehension. 55+ questions.

- [ ] **Step 1: Create JSON with full content**
- [ ] **Step 2: Run generator and verify**
- [ ] **Step 3: Commit**

---

## Task 23: Create Python Chapter 15 — Sets in Python

**Files:**
- Create: `content/resources/data/python/sets-in-python.json`

Content: Creating sets, set vs list, set methods (add, remove, discard, pop, clear), set operations (union, intersection, difference, symmetric_difference), frozenset, set comprehension, using sets for deduplication. 50+ questions.

- [ ] **Step 1: Create JSON with full content**
- [ ] **Step 2: Run generator and verify**
- [ ] **Step 3: Commit**

---

## Task 24: Create Python Chapter 16 — Functions in Python

**Files:**
- Create: `content/resources/data/python/functions-in-python.json`

Content: def keyword, parameters vs arguments, return statement, default parameters, keyword arguments, *args, **kwargs, docstrings, function as first-class object, recursion basics. 60+ questions — functions are critical.

- [ ] **Step 1: Create JSON with full content**
- [ ] **Step 2: Run generator and verify**
- [ ] **Step 3: Commit**

---

## Task 25: Create Python Chapter 17 — Scope and Closures

**Files:**
- Create: `content/resources/data/python/scope-and-closures.json`

Content: Local scope, global scope, enclosing scope, built-in scope (LEGB rule), global keyword, nonlocal keyword, closures (function returning function), practical closure examples. 50+ questions.

- [ ] **Step 1: Create JSON with full content**
- [ ] **Step 2: Run generator and verify**
- [ ] **Step 3: Commit**

---

## Task 26: Create Python Chapter 18 — Lambda, Map, Filter, Reduce

**Files:**
- Create: `content/resources/data/python/lambda-map-filter-reduce.json`

Content: Lambda syntax, when to use lambda, map() with lambda and regular functions, filter() for conditional selection, reduce() from functools, chaining map/filter, sorted() with key=lambda. 50+ questions.

- [ ] **Step 1: Create JSON with full content**
- [ ] **Step 2: Run generator and verify**
- [ ] **Step 3: Commit**

---

## Task 27: Create Python Chapter 19 — File Handling in Python

**Files:**
- Create: `content/resources/data/python/file-handling-in-python.json`

Content: open() function, file modes (r, w, a, r+, b), read(), readline(), readlines(), write(), writelines(), with statement (context manager), file paths, os.path basics, CSV reading basics. 50+ questions.

- [ ] **Step 1: Create JSON with full content**
- [ ] **Step 2: Run generator and verify**
- [ ] **Step 3: Commit**

---

## Task 28: Create Python Chapter 20 — Exception Handling

**Files:**
- Create: `content/resources/data/python/exception-handling.json`

Content: try/except, catching specific exceptions, multiple except blocks, else clause, finally clause, raising exceptions, custom exception classes, common built-in exceptions (ValueError, TypeError, IndexError, KeyError, ZeroDivisionError). 50+ questions.

- [ ] **Step 1: Create JSON with full content**
- [ ] **Step 2: Run generator and verify**
- [ ] **Step 3: Commit**

---

## Task 29: Create Python Chapter 21 — Object-Oriented Programming

**Files:**
- Create: `content/resources/data/python/object-oriented-programming.json`

Content: Classes and objects, __init__, self, instance variables, class variables, methods, encapsulation (public, _protected, __private), property decorator basics, __str__ and __repr__, static methods vs class methods. 60+ questions.

- [ ] **Step 1: Create JSON with full content**
- [ ] **Step 2: Run generator and verify**
- [ ] **Step 3: Commit**

---

## Task 30: Create Python Chapter 22 — Inheritance and Polymorphism

**Files:**
- Create: `content/resources/data/python/inheritance-and-polymorphism.json`

Content: Single inheritance, super(), method overriding, multiple inheritance, MRO (Method Resolution Order), isinstance(), issubclass(), polymorphism (same method name, different behavior), abstract base classes (abc module basics). 55+ questions.

- [ ] **Step 1: Create JSON with full content**
- [ ] **Step 2: Run generator and verify**
- [ ] **Step 3: Commit**

---

## Task 31: Create Python Chapter 23 — Modules and Packages

**Files:**
- Create: `content/resources/data/python/modules-and-packages.json`

Content: import, from...import, as alias, creating your own module, __name__ == "__main__", popular standard library modules (math, random, datetime, os, sys, json), installing third-party packages with pip, __init__.py. 50+ questions.

- [ ] **Step 1: Create JSON with full content**
- [ ] **Step 2: Run generator and verify**
- [ ] **Step 3: Commit**

---

## Task 32: Create Python Chapter 24 — Comprehensions and Generators

**Files:**
- Create: `content/resources/data/python/list-comprehensions-and-generators.json`

Content: List comprehension syntax, conditional comprehension, nested comprehension, dict comprehension, set comprehension, generator expressions, yield keyword, generator functions, lazy evaluation, memory efficiency comparison. 55+ questions.

- [ ] **Step 1: Create JSON with full content**
- [ ] **Step 2: Run generator and verify**
- [ ] **Step 3: Commit**

---

## Task 33: Create Python Chapter 25 — Decorators and Iterators

**Files:**
- Create: `content/resources/data/python/decorators-and-iterators.json`

Content: Iterator protocol (__iter__, __next__), creating custom iterators, StopIteration, itertools basics (count, cycle, chain), decorator concept (function that modifies function), @ syntax, functools.wraps, practical decorator examples (timer, logger, memoize). 50+ questions.

- [ ] **Step 1: Create JSON with full content**
- [ ] **Step 2: Run generator and verify**
- [ ] **Step 3: Commit**

---

## Task 34: Final Verification and Sitemap Update

**Files:**
- Modify: `sitemap.xml`

- [ ] **Step 1: Run the full generator one final time**

```bash
npm run generate:resources
```

Verify all 25 chapters generated successfully (25 notes pages + 25 practice pages + 1 Python index + 1 master index = 52 pages).

- [ ] **Step 2: Verify no unreplaced template variables**

```bash
grep -r "{{" content/resources/generated/ | head -20
```

Expected: No output (all variables replaced).

- [ ] **Step 3: Append sitemap entries to sitemap.xml**

Read the generated `content/resources/generated/sitemap-entries.xml` and insert those entries into `sitemap.xml` before the closing `</urlset>` tag.

- [ ] **Step 4: Run the full build to test everything together**

```bash
npm run generate:all
```

- [ ] **Step 5: Commit everything**

```bash
git add sitemap.xml
git commit -m "feat: add resource sitemap entries for 52 Python resource pages"
```

- [ ] **Step 6: Final commit with all generated files (if not gitignored)**

If generated files are committed (like blog generated files are), add them:

```bash
git add content/resources/generated/
git commit -m "feat: add generated Python resource pages (25 notes + 25 practice)"
```
