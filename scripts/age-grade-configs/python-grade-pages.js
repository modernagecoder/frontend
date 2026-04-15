/*
 * python-grade-pages.js — Python for Class 6 through Class 10
 * plus Python for Class 11 CBSE and Python for Class 12 CBSE Board Exam.
 * (7 pages)
 */

const { PY, CITY_CHIPS } = require('./python-shared');

module.exports = [

    /* ---------- PYTHON FOR CLASS 6 ---------- */
    {
        slug: 'python-for-class-6',
        pageTitle: 'Python for Class 6 — CBSE Code 166 Python, Turtle, First AI (Age 11)',
        metaDescription: 'Python classes for Class 6 students. CBSE Code 166 aligned, turtle graphics, first AI classifier, tiny games — 1 hour live classes, 1:1 or small group.',
        keywords: 'python for class 6, class 6 python cbse, code 166 python, python for class 6 cbse, python class 6 ncert, python for 11 year olds, cbse 6 python tuition, python class 6 icse, class 6 python project, python class 6 online, class 6 turtle python, python for class 6 beginner',
        audienceType: 'Class 6 students learning Python',
        courseCode: 'PY-CL-6',
        courseName: 'Python for Class 6',
        courseDesc: 'Live online Python for Class 6. CBSE Code 166 aligned. Turtle, first AI, tiny games. 1 hour live classes.',
        breadcrumbName: 'Python for Class 6',
        accent: '#3b82f6', accent2: '#f59e0b', bodyClass: 'py-class-6-page',
        badge: '6', badgeLabel: 'Class · Python',
        eyebrow: 'Python for Class 6 · Age 11',
        h1Before: 'Python for ', h1Highlight: 'Class 6', h1After: ' — CBSE Code 166 done right.',
        heroSub: 'Class 6 is where CBSE formally introduces Python through Code 166. Our 1 hour live classes cover every Code 166 Python chapter a week before school does, plus real projects school cannot fit in.',
        trust: [
            { big: '3,100+', sub: 'Class 6 Python students' },
            { big: '4.9 / 5', sub: 'Parent rating · 370+ reviews' },
            { big: '1 hour', sub: 'Live class, 1:1 or small group' },
            { big: 'Code 166', sub: 'Fully aligned to CBSE' }
        ],
        chips: ['Code 166', 'Turtle', 'First AI'],
        coursesHeading: 'Python courses for Class 6.',
        coursesLede: 'At Class 6, the right Python course blends CBSE chapters with real projects. These are our top picks.',
        courses: [PY.pythonKids, PY.aiKids, PY.pythonTeen, PY.aimlTeen, PY.flaskBackend, PY.dsaTeen, PY.dsTeen, PY.autoPy],
        skipHeading: 'Already did Python in Class 5?',
        skipBody: 'If your Class 6 child already handled Python in Class 5, <strong>skip basics</strong> and move into <a href="/courses/python-ai-kids-masterclass" style="color:inherit;text-decoration:underline;">Python + AI</a> or <a href="/courses/kids-ai-mastery-course" style="color:inherit;text-decoration:underline;">AI Tools</a>. Free demo places them.',
        whyHeading: 'Class 6 Python is when the real thing starts.',
        whyLede: 'Code 166 introduces Python, blocks, AI basics and digital citizenship. Most school classrooms cannot do real projects. We can. And we are aligned to exactly what your child\'s school teaches.',
        whys: [
            { tag: 'Syllabus', title: 'CBSE Code 166 covered deeply', body: 'Every Code 166 Python concept — print, input, loops, simple AI concepts — covered with real projects, not textbook answers.' },
            { tag: 'Pace', title: 'One week ahead of school', body: 'We deliberately cover each chapter a week before the school lesson. School class becomes revision for your child.' },
            { tag: 'Beyond', title: 'Functions, files, first AI', body: 'Where school stops, we go further — functions, files, a first sklearn classifier. Same Class 6 age, much deeper outcome.' }
        ],
        projectsHeading: 'Six Python projects for Class 6.',
        projectsLede: 'Each project matches a Code 166 chapter plus adds real substance.',
        projects: [
            { sticker: 'Code 166', title: 'Hello Python', desc: 'Matches the Code 166 intro chapter — print, input, comments. Done properly with error discussion.', tags: ['print', 'input'] },
            { sticker: 'Code 166', title: 'Rock–Paper–Scissors', desc: 'Matches the "loops and conditions" chapter with an actual playable game.', tags: ['loops', 'random'] },
            { sticker: 'Turtle', title: 'Colour Spiral', desc: 'Turtle graphics spiral with colour. Beautiful output that reinforces loops.', tags: ['turtle'] },
            { sticker: 'Quiz', title: '10-Question Quiz', desc: 'A quiz with score and grade. Uses lists, functions and a simple scoring system.', tags: ['lists', 'functions'] },
            { sticker: 'AI', title: 'Teachable Python Call', desc: 'Train a Teachable Machine model, then call it from a 10-line Python script. Covers Code 166 AI unit.', tags: ['AI'] },
            { sticker: 'Files', title: 'Score Saver', desc: 'Saves quiz high-scores to a text file. First file read/write.', tags: ['files'] }
        ],
        roadmapHeading: 'Four terms aligned to Class 6 calendar.',
        roadmapLede: 'We pace this to keep you one week ahead of school all year.',
        roadmap: [
            { label: 'Term 1 · Code 166 intro', title: 'Python first half', body: 'print, input, operators, conditions. School chapters covered. Real mini-programs beyond the book.', tags: ['print', 'if-else'] },
            { label: 'Term 1–2 · Loops + lists', title: 'Code 166 loops chapter', body: 'for and while loops. First lists. Rock-paper-scissors. Colour spiral in turtle.', tags: ['loops', 'lists'] },
            { label: 'Term 2 · Functions + files', title: 'Going beyond school', body: 'Functions as reusable tools. File read/write. 10-question quiz app with score file.', tags: ['functions', 'files'] },
            { label: 'Term 3 · First AI', title: 'Code 166 AI unit + real model', body: 'Teachable Machine trained, called from Python. First time "I built an AI" is honestly true.', tags: ['AI'] }
        ],
        compareHeading: 'Python at Class 5 vs 6 vs 7.',
        compareLede: 'What changes grade by grade.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Class 5' },
                { label: 'Class 6 (this page)' },
                { label: 'Class 7', link: '/python-for-class-7' }
            ],
            rows: [
                { label: 'Program length', values: ['15–25 lines', '30–50 lines', '50–80 lines'] },
                { label: 'CBSE book', values: ['Class 5 intro', 'Code 166', 'Code 166/167'] },
                { label: 'Functions', values: ['Intro', 'Comfortable', 'Fluent'] },
                { label: 'Files', values: ['Not yet', 'Read / write', 'CSV basics'] },
                { label: 'AI', values: ['Teachable intro', 'Teachable + Python call', 'First sklearn'] },
                { label: 'Editor', values: ['Thonny', 'Thonny', 'Thonny / VS Code'] }
            ]
        },
        reviewsHeading: 'Class 6 Python parents and students.',
        reviewsLede: 'Three recent reviews from Class 6 families.',
        reviews: [
            { initial: 'K', name: 'Kiran N.', meta: 'Parent · Delhi · 1-on-1', body: 'Class 6 CBSE. Son finished the Code 166 Python unit in month one. His school computer teacher made him the lab helper. At 11 this is a lot of confidence.' },
            { initial: 'S', name: 'Saira V.', meta: 'Parent · Bengaluru · Group', body: 'Small Class 6 batch. Teacher keeps the Code 166 book open during class. Every time school teaches a chapter, my daughter has already built two projects in it.' },
            { initial: 'R', name: 'Raj P.', meta: 'Parent · Pune · 1-on-1', body: 'Son built a Teachable Machine project and called the model from Python. At 11. The teacher explained what training data means without dumbing it down.' }
        ],
        faqs: [
            { q: 'Does this cover the full CBSE Code 166 Class 6 Python unit?', a: 'Yes, and well beyond. Code 166 Python is introductory; we cover everything it includes plus functions, files and a first sklearn classifier.' },
            { q: 'Is Python for Class 6 the same as for 11 year olds?', a: 'Nearly — Class 6 students are typically 11 year olds. This page focuses on the CBSE Class 6 syllabus angle; <a href="/python-for-11-year-olds">Python for 11 Year Olds</a> focuses on age-based pacing.' },
            { q: 'Does this help with the CBSE Class 6 AI unit?', a: 'Yes. Code 166 introduces AI; we cover it with a real Teachable Machine + Python project that students build and keep.' },
            { q: 'ICSE Class 6 Python — covered?', a: 'Most ICSE Class 6 textbooks touch Python lightly. We cover their chapters plus go deeper with the same content used for CBSE.' },
            { q: 'How many hours per week?', a: '2 hours of live class + 20 minutes homework. Fits alongside Class 6 school easily.' },
            { q: 'Do you prepare for Code 166 practicals?', a: 'Yes — sample questions, viva rehearsal, lab-file format.' },
            { q: 'What editor for a Class 6 student?', a: 'Thonny. Friendly errors. Free. We help install in session 1.' },
            { q: 'Free demo?', a: 'Yes. One 1 hour live class. No card. Refund clause 2 weeks.' }
        ],
        relatedChips: [
            { href: '/python-for-11-year-olds', small: 'Age', label: 'Python for 11 Year Olds' },
            { href: '/python-for-class-7', small: 'Next', label: 'Python for Class 7' },
            { href: '/python-for-class-8', small: 'Higher', label: 'Python for Class 8' },
            { href: '/python-projects-for-kids', small: 'Projects', label: 'Python Projects for Kids' },
            { href: '/coding-for-class-6', small: 'Class', label: 'Coding for Class 6' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' },
            { href: '/python-and-ai-classes-for-kids-teens', small: 'Course', label: 'Python & AI for Kids' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- PYTHON FOR CLASS 7 ---------- */
    {
        slug: 'python-for-class-7',
        pageTitle: 'Python for Class 7 — OOP Basics, Pygame, First sklearn for Age 12 Students',
        metaDescription: 'Python for Class 7 students. OOP basics, Pygame games, sklearn with CSV datasets, matplotlib charts. CBSE/ICSE Class 7 aligned. 1 hour live classes.',
        keywords: 'python for class 7, class 7 python cbse, python class 7 icse, python for 12 year olds, python oop class 7, python pygame class 7, class 7 python project, python sklearn class 7, python for class 7 online, best python class 7, python matplotlib class 7, cbse class 7 python',
        audienceType: 'Class 7 students learning Python',
        courseCode: 'PY-CL-7',
        courseName: 'Python for Class 7',
        courseDesc: 'Live online Python for Class 7. OOP basics, Pygame, sklearn + matplotlib. CBSE/ICSE Class 7 aligned.',
        breadcrumbName: 'Python for Class 7',
        accent: '#6366f1', accent2: '#14b8a6', bodyClass: 'py-class-7-page',
        badge: '7', badgeLabel: 'Class · Python',
        eyebrow: 'Python for Class 7 · Age 12',
        h1Before: 'Python for ', h1Highlight: 'Class 7', h1After: ' — the bridge year.',
        heroSub: 'Class 7 is the bridge year — from introductory Python into real software. Our 1 hour live classes cover school syllabus plus OOP basics, Pygame, sklearn with real CSVs and matplotlib.',
        trust: [
            { big: '3,300+', sub: 'Class 7 Python students' },
            { big: '4.9 / 5', sub: 'Parent rating · 400+ reviews' },
            { big: '1 hour', sub: 'Live class, 1:1 or small group' },
            { big: '10 weeks', sub: 'To a GitHub-ready Python project' }
        ],
        chips: ['OOP intro', 'Pygame', 'First sklearn'],
        coursesHeading: 'Python tracks for a Class 7 student.',
        coursesLede: 'At Class 7, the right tracks move past the basics. OOP, Pygame, sklearn — all live, 1 hour.',
        courses: [PY.pythonTeen, PY.aimlTeen, PY.dsaTeen, PY.flaskBackend, PY.pythonKids, PY.aiKids, PY.dsTeen, PY.autoPy],
        skipHeading: 'Already handling Python functions comfortably?',
        skipBody: 'If your Class 7 student already writes functions fluently, <strong>skip basics</strong> and go into <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI & ML</a> or <a href="/courses/backend-coding-masterclass-for-teens" style="color:inherit;text-decoration:underline;">Flask backend</a>. Free demo places them.',
        whyHeading: 'Class 7 Python is when the toolbox grows.',
        whyLede: 'By Class 7, a student can handle OOP, matplotlib, sklearn and Pygame in parallel. The range is new — and it matters for what comes in Class 8 and 9.',
        whys: [
            { tag: 'Range', title: 'Multiple tools one term', body: 'At Class 7, we no longer need to pick "just games" or "just AI". Students handle Pygame + sklearn in the same term comfortably.' },
            { tag: 'OOP', title: 'Classes click', body: 'The bank-account example lands at Class 7. Once classes click, every program becomes cleaner and more real.' },
            { tag: 'Data', title: 'First charts + CSVs', body: 'Matplotlib plots. Pandas on tiny CSVs. Data vocabulary begins — and this is what college cares about later.' }
        ],
        projectsHeading: 'Six Python projects for Class 7.',
        projectsLede: 'Each one designed for age 12 / Class 7 specifically — GitHub-worthy, finishable in 2–3 classes.',
        projects: [
            { sticker: 'Game', title: 'Pygame Pong', desc: 'Classic Pong — two paddles, ball, score. First real game library.', tags: ['pygame'] },
            { sticker: 'OOP', title: 'Bank Account Class', desc: 'Deposit, withdraw, balance methods. First real OOP example.', tags: ['oop'] },
            { sticker: 'AI', title: 'sklearn Iris Classifier', desc: 'Classic iris dataset. Train/test split, accuracy, matplotlib viz.', tags: ['sklearn'] },
            { sticker: 'Data', title: 'Dice Stats Chart', desc: '10,000 rolls, distribution plot in matplotlib. Stats + code in one.', tags: ['matplotlib'] },
            { sticker: 'Web', title: 'API Fetcher', desc: 'Python script that fetches weather or jokes from a public API.', tags: ['requests'] },
            { sticker: 'Tools', title: 'Todo CLI', desc: 'Command-line todo app saved to JSON. Real software design.', tags: ['json', 'cli'] }
        ],
        roadmapHeading: 'Four stages across Class 7.',
        roadmapLede: 'Matched to school terms. Depth over hours.',
        roadmap: [
            { label: 'Term 1 · OOP + modules', title: 'Classes and methods', body: 'Move beyond scripts. Classes with fields and methods. Simple inheritance. Bank account and pet classes.', tags: ['oop'] },
            { label: 'Term 1–2 · Pygame', title: 'First real game library', body: 'Pygame basics. Pong, then brick breaker. Teaches the game loop properly.', tags: ['pygame'] },
            { label: 'Term 2 · sklearn + matplotlib', title: 'Real data projects', body: 'Iris classifier. Dice stats chart. First real data workflow.', tags: ['sklearn'] },
            { label: 'Term 3 · APIs + polish', title: 'Public APIs + GitHub', body: 'Fetching with requests. First GitHub repos with readme. Projects shared.', tags: ['requests', 'git'] }
        ],
        compareHeading: 'Python at Class 6 vs 7 vs 8.',
        compareLede: 'Grade-by-grade shift.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Class 6', link: '/python-for-class-6' },
                { label: 'Class 7 (this page)' },
                { label: 'Class 8', link: '/python-for-class-8' }
            ],
            rows: [
                { label: 'Program length', values: ['30–50 lines', '60–100 lines', '100+ lines'] },
                { label: 'OOP', values: ['Intro', 'Comfortable', 'Fluent + inheritance'] },
                { label: 'Games', values: ['Turtle', 'Pygame', 'Pygame + OOP'] },
                { label: 'AI', values: ['Teachable call', 'Iris + charts', 'Kaggle datasets'] },
                { label: 'Editor', values: ['Thonny', 'Thonny/VS Code', 'VS Code'] },
                { label: 'GitHub', values: ['Not yet', 'First repo', 'Active repos'] }
            ]
        },
        reviewsHeading: 'Class 7 Python parents.',
        reviewsLede: 'Three recent reviews from Class 7 families.',
        reviews: [
            { initial: 'A', name: 'Ananya L.', meta: 'Parent · Hyderabad · 1-on-1', body: 'Class 7 CBSE. Daughter built a Pygame Pong and an iris classifier in the same term. The teacher switches between game, OOP and sklearn smoothly — no whiplash.' },
            { initial: 'P', name: 'Pranav G.', meta: 'Parent · Bengaluru · Group', body: 'Group of 4 Class 7 Python kids. My son\'s GitHub has 4 repos now. His readme writing is also improving — the teacher corrects readmes, which I did not expect.' },
            { initial: 'L', name: 'Lokesh M.', meta: 'Parent · Mumbai · 1-on-1', body: 'Picked 1-on-1. Teacher took my daughter straight to matplotlib and sklearn. She now visualises her own cricket-score dataset. First class that treats her as a real learner.' }
        ],
        faqs: [
            { q: 'Is Pygame realistic at Class 7?', a: 'Yes. The game loop takes 2 sessions to click. After that, Class 7 students build Pong and a small brick breaker.' },
            { q: 'Can a Class 7 student do sklearn?', a: 'Yes — at the classifier-on-CSV level. Iris is the typical first dataset. Accuracy and train/test split explained plainly.' },
            { q: 'Does this align with CBSE Class 7 computer?', a: 'Yes. CBSE Class 7 covers Python basics and sometimes HTML. We cover all of that plus real projects.' },
            { q: 'ICSE Class 7 computer?', a: 'ICSE Class 7 varies by textbook — our teachers align with the specific book your school uses.' },
            { q: 'Is OOP too hard at Class 7?', a: 'Not if taught through examples. Bank account, pet class, car class. These make OOP click at Class 7.' },
            { q: 'Weekly hours?', a: '2 live hours + 20 min homework. Fits alongside Class 7 tuition easily.' },
            { q: 'Can my Class 7 student compete in Olympiads?', a: 'Yes. Optional track for NCO, CCO, CodeKraft. Python accepted.' },
            { q: 'Free demo?', a: 'Yes — 1 full hour live class. No card. Refund clause 2 weeks.' }
        ],
        relatedChips: [
            { href: '/python-for-12-year-olds', small: 'Age', label: 'Python for 12 Year Olds' },
            { href: '/python-for-class-6', small: 'Prev', label: 'Python for Class 6' },
            { href: '/python-for-class-8', small: 'Next', label: 'Python for Class 8' },
            { href: '/python-projects-for-kids', small: 'Projects', label: 'Python Projects for Kids' },
            { href: '/coding-for-class-7', small: 'Class', label: 'Coding for Class 7' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/python-and-ai-classes-for-kids-teens', small: 'Course', label: 'Python & AI' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- PYTHON FOR CLASS 8 ---------- */
    {
        slug: 'python-for-class-8',
        pageTitle: 'Python for Class 8 — OOP, Flask API, sklearn, Kaggle Datasets & DSA Intro',
        metaDescription: 'Python for Class 8 students. OOP with inheritance, Flask REST APIs, sklearn ML with real Kaggle datasets, first DSA. 1 hour live classes, 1:1 or group.',
        keywords: 'python for class 8, class 8 python, cbse class 8 python, icse class 8 python, python oop class 8, flask for class 8, kaggle python class 8, python dsa class 8, python for 13 year olds, class 8 python project, best python class 8, python ai class 8',
        audienceType: 'Class 8 students learning Python',
        courseCode: 'PY-CL-8',
        courseName: 'Python for Class 8',
        courseDesc: 'Live online Python for Class 8. OOP, Flask, sklearn ML, DSA intro. CBSE/ICSE Class 8 aligned.',
        breadcrumbName: 'Python for Class 8',
        accent: '#a855f7', accent2: '#ec4899', bodyClass: 'py-class-8-page',
        badge: '8', badgeLabel: 'Class · Python',
        eyebrow: 'Python for Class 8 · Age 13',
        h1Before: 'Python for ', h1Highlight: 'Class 8', h1After: ' — where portfolio becomes real.',
        heroSub: 'Class 8 is the turning point. Old enough for deep OOP, Flask APIs, real Kaggle datasets and DSA. Our 1 hour live classes build a GitHub portfolio that reads real.',
        trust: [
            { big: '2,900+', sub: 'Class 8 Python students' },
            { big: '4.9 / 5', sub: 'Parent rating · 350+ reviews' },
            { big: '1 hour', sub: 'Live class, 1:1 or group' },
            { big: '4 projects', sub: 'GitHub portfolio in 6 months' }
        ],
        chips: ['OOP deep', 'Flask API', 'Kaggle'],
        coursesHeading: 'Python tracks for a Class 8 student ready for real tools.',
        coursesLede: 'At Class 8, the best Python courses use the same tools developers use daily — Flask, sklearn, pandas, Git.',
        courses: [PY.pythonTeen, PY.aimlTeen, PY.dsaTeen, PY.flaskBackend, PY.dsTeen, PY.autoPy, PY.genAI, PY.mlPro],
        skipHeading: 'Already deploying Python projects?',
        skipBody: 'If your Class 8 student has deployed projects, <strong>skip review</strong> and go to <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI & ML</a> or <a href="/courses/data-science-complete-masterclass-college" style="color:inherit;text-decoration:underline;">Data Science</a>. Free demo level check.',
        whyHeading: 'Class 8 is when Python becomes an identity.',
        whyLede: 'A Class 8 student who likes Python starts side projects without being asked. Our job shifts from teaching to coaching.',
        whys: [
            { tag: 'Ownership', title: 'They bring project ideas', body: 'At Class 8, most students bring ideas — a Discord bot, a weather app, a Twitter-style feed. We build skills around their ideas.' },
            { tag: 'GitHub', title: 'Real commits, real repos', body: 'Class 8 is the right time for a real GitHub profile. By Class 10 it looks serious.' },
            { tag: 'Workflow', title: 'venv + requirements + readme', body: 'Proper project setup enters here — virtual environments, requirements files, proper readmes. Grown-up Python.' }
        ],
        projectsHeading: 'Six Class 8 Python projects for a portfolio.',
        projectsLede: 'Each lives on GitHub with a readme.',
        projects: [
            { sticker: 'OOP', title: 'CLI Todo with Classes', desc: 'Task and Project classes, inheritance, JSON storage.', tags: ['oop'] },
            { sticker: 'API', title: 'Flask REST API', desc: 'First Flask app — routes, JSON endpoint, Postman test.', tags: ['flask'] },
            { sticker: 'AI', title: 'Kaggle Housing Predictor', desc: 'Real Kaggle dataset, linear regression, cross-validation.', tags: ['sklearn'] },
            { sticker: 'Data', title: 'Pandas IPL Stats', desc: 'CSV of IPL stats cleaned in pandas, charts in matplotlib.', tags: ['pandas'] },
            { sticker: 'Automate', title: 'Auto-Rename Script', desc: 'Renames all photos in a folder by date taken. Real automation.', tags: ['os'] },
            { sticker: 'Game', title: 'Pygame Platformer', desc: 'Full platformer with levels, sound, published to itch.io.', tags: ['pygame'] }
        ],
        roadmapHeading: 'Four stages across Class 8.',
        roadmapLede: 'Paced around school. Depth not hours.',
        roadmap: [
            { label: 'Term 1 · Python advanced', title: 'OOP, venv, packaging', body: 'Deep OOP. Proper project setup with venv and requirements.txt.', tags: ['oop', 'venv'] },
            { label: 'Term 1–2 · Flask', title: 'First web API', body: 'Flask basics. Build a REST API. Test in Postman. Deploy to Render.', tags: ['flask'] },
            { label: 'Term 2 · ML deep', title: 'sklearn with Kaggle', body: 'A real Kaggle dataset — full train/test, metrics, matplotlib viz.', tags: ['sklearn'] },
            { label: 'Term 3 · Polish + OSS', title: 'GitHub + first PR', body: 'Four projects with readmes on GitHub. A first merged PR to a small OSS project.', tags: ['github', 'oss'] }
        ],
        compareHeading: 'Python at Class 7 vs 8 vs 9.',
        compareLede: 'Grade-by-grade shift.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Class 7', link: '/python-for-class-7' },
                { label: 'Class 8 (this page)' },
                { label: 'Class 9', link: '/python-for-class-9' }
            ],
            rows: [
                { label: 'OOP', values: ['Comfortable', 'Inheritance + polymorphism', 'Design patterns basics'] },
                { label: 'Web', values: ['API client', 'Flask API', 'Flask + DB + auth'] },
                { label: 'ML', values: ['Iris + charts', 'Kaggle regression', 'Kaggle + DL intro'] },
                { label: 'Tools', values: ['VS Code', 'VS Code + Git + venv', 'Full workflow'] },
                { label: 'GitHub', values: ['First repo', 'Active + PR', 'Sustained commits'] },
                { label: 'Project scope', values: ['3–5 classes', 'Multi-week', 'Month-long'] }
            ]
        },
        reviewsHeading: 'Class 8 Python parents.',
        reviewsLede: 'Three recent reviews.',
        reviews: [
            { initial: 'B', name: 'Bhavna S.', meta: 'Parent · Delhi · 1-on-1', body: 'Son is Class 8. He built a Flask API that his friends ping from their own scripts. At 13 he is explaining JSON to me. I feel outpaced.' },
            { initial: 'N', name: 'Nikhil R.', meta: 'Parent · Bengaluru · Group', body: 'Group of 4 Class 8 teens. Teacher runs weekly code reviews. My daughter\'s OOP design is surprisingly clean.' },
            { initial: 'O', name: 'Omkar T.', meta: 'Parent · Mumbai · 1-on-1', body: 'Moved from a recorded-video course. Huge difference. Live teacher asks "why did you write this loop?" — the questions shape thinking, not just knowledge.' }
        ],
        faqs: [
            { q: 'Is Flask realistic at Class 8?', a: 'Yes. Flask is deliberately small — 3 routes, a JSON endpoint, Postman test. Class 8 students deploy a simple Flask API within 4 weeks.' },
            { q: 'Does this align with Class 8 school CS?', a: 'Yes — and far beyond. Class 8 school CS usually covers Python basics. We are at Flask, sklearn and OOP by mid-year.' },
            { q: 'Kaggle datasets at Class 8 — realistic?', a: 'Yes. Titanic and housing are the classic starters. Full train/test, accuracy, visualisation — all doable at Class 8.' },
            { q: 'Is DSA in Python now or wait?', a: 'Class 8 is a fine start. Arrays, strings, simple linked lists in Python. No C++ needed yet.' },
            { q: 'VS Code at Class 8?', a: 'Yes. We transition from Thonny to VS Code around this stage, with Git integration.' },
            { q: 'GitHub Copilot — allowed?', a: 'Parent\'s choice. We lean "no" for the first year of real Python, "yes" as an explainer later.' },
            { q: 'Weekly hours?', a: '2 to 3 hours total. Fits alongside even heavy Class 8 tuition.' },
            { q: 'Free demo?', a: 'Yes — 1 full hour. No card. Refund clause 2 weeks.' }
        ],
        relatedChips: [
            { href: '/python-for-13-year-olds', small: 'Age', label: 'Python for 13 Year Olds' },
            { href: '/python-for-class-7', small: 'Prev', label: 'Python for Class 7' },
            { href: '/python-for-class-9', small: 'Next', label: 'Python for Class 9' },
            { href: '/python-projects-for-kids', small: 'Projects', label: 'Python Projects for Kids' },
            { href: '/coding-for-class-8', small: 'Class', label: 'Coding for Class 8' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/python-and-ai-classes-for-kids-teens', small: 'Course', label: 'Python & AI' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- PYTHON FOR CLASS 9 ---------- */
    {
        slug: 'python-for-class-9',
        pageTitle: 'Python for Class 9 — CBSE Code 402 Python, Flask, Django Intro & Kaggle',
        metaDescription: 'Python for Class 9 students. CBSE Code 402 IT aligned, Flask + Django intro, sklearn with Kaggle, DSA in Python. 1 hour live classes, 1:1 or group.',
        keywords: 'python for class 9, cbse class 9 python, code 402 python, class 9 python cbse, class 9 it 402, python for 14 year olds, cbse class 9 cs, python flask class 9, python django class 9, python kaggle class 9, class 9 python project, python dsa class 9, best python class 9',
        audienceType: 'Class 9 students learning Python',
        courseCode: 'PY-CL-9',
        courseName: 'Python for Class 9',
        courseDesc: 'Live online Python for Class 9. CBSE Code 402 aligned, Flask + Django intro, sklearn with Kaggle, DSA.',
        breadcrumbName: 'Python for Class 9',
        accent: '#8b5cf6', accent2: '#06b6d4', bodyClass: 'py-class-9-page',
        badge: '9', badgeLabel: 'Class · Python',
        eyebrow: 'Python for Class 9 · Age 14',
        h1Before: 'Python for ', h1Highlight: 'Class 9', h1After: ' — portfolio-grade, board-aware.',
        heroSub: 'Class 9 is the last quiet year before boards. Our 1 hour live classes use the window for depth — CBSE Code 402, Flask, Django intro, sklearn with real Kaggle datasets, and DSA.',
        trust: [
            { big: '3,000+', sub: 'Class 9 Python students' },
            { big: '4.9 / 5', sub: 'Parent rating · 370+ reviews' },
            { big: '1 hour', sub: 'Live class, 1:1 or group' },
            { big: 'Code 402', sub: 'CBSE IT syllabus aligned' }
        ],
        chips: ['Code 402', 'Flask + Django', 'Kaggle'],
        coursesHeading: 'Python tracks for Class 9.',
        coursesLede: 'At Class 9, the right tracks build for college — Flask, Django, sklearn, DSA.',
        courses: [PY.pythonTeen, PY.aimlTeen, PY.dsaTeen, PY.flaskBackend, PY.dsTeen, PY.autoPy, PY.genAI, PY.mlPro],
        skipHeading: 'Already has a serious Python GitHub?',
        skipBody: 'If your Class 9 student has real Python repos, <strong>skip ahead</strong> to <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI & ML</a> or <a href="/courses/data-science-complete-masterclass-college" style="color:inherit;text-decoration:underline;">Data Science</a>. Demo teacher places them.',
        whyHeading: 'Class 9 is the last unhurried Python year.',
        whyLede: 'Class 10 brings boards. Class 11 brings streams. Class 9 has room for deep projects.',
        whys: [
            { tag: 'Window', title: 'Before Class 10 crunch', body: 'Class 9 still has calendar room. Class 10 onwards, timing is the constraint.' },
            { tag: 'Maturity', title: 'Recursion and Big-O click', body: 'At 14, recursion stops being magic. Big-O makes sense. The foundations for college CS.' },
            { tag: 'Syllabus', title: 'CBSE Code 402 IT', body: 'If your school offers Code 402 (IT / AI sub-code), it contains a Python unit. Our teachers align.' }
        ],
        projectsHeading: 'Six Class 9 Python portfolio pieces.',
        projectsLede: 'Portfolio-ready. Finishable in a month.',
        projects: [
            { sticker: 'Web', title: 'Flask Blog App', desc: 'Full Flask app — auth, posts, comments. Deployed live.', tags: ['flask'] },
            { sticker: 'Django', title: 'Django Intro Project', desc: 'First Django project — admin, models, views, templates.', tags: ['django'] },
            { sticker: 'AI', title: 'Titanic ML End-to-End', desc: 'Full pipeline — EDA, feature engineering, sklearn, evaluation, writeup.', tags: ['sklearn'] },
            { sticker: 'DSA', title: 'Python DSA 15 Problems', desc: 'Arrays, strings, linked lists in Python.', tags: ['dsa'] },
            { sticker: 'Automate', title: 'Web Scraper', desc: 'BeautifulSoup + requests to scrape a simple news site.', tags: ['scraping'] },
            { sticker: 'Data', title: 'Matplotlib Dashboard', desc: 'Jupyter notebook with 5 charts on a chosen dataset.', tags: ['jupyter'] }
        ],
        roadmapHeading: 'Four stages across Class 9.',
        roadmapLede: 'Deep projects, board-aware pacing.',
        roadmap: [
            { label: 'Term 1 · Flask deep', title: 'Flask with auth + DB', body: 'Full Flask app — login, SQLite, CRUD. Deployed to Render.', tags: ['flask'] },
            { label: 'Term 1–2 · ML pipeline', title: 'Full sklearn pipeline', body: 'Kaggle dataset end-to-end. Proper data-science workflow.', tags: ['sklearn'] },
            { label: 'Term 2 · Django intro', title: 'The other big framework', body: 'Django basics — admin, models, views.', tags: ['django'] },
            { label: 'Term 3 · DSA foundation', title: 'Arrays + strings + lists', body: 'DSA in Python. 15 foundational problems. Solid base for Class 10.', tags: ['dsa'] }
        ],
        compareHeading: 'Python at Class 8 vs 9 vs 10.',
        compareLede: 'Clear ladder.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Class 8', link: '/python-for-class-8' },
                { label: 'Class 9 (this page)' },
                { label: 'Class 10', link: '/python-for-class-10' }
            ],
            rows: [
                { label: 'Web framework', values: ['Flask basics', 'Flask + Django intro', 'Flask + Django production'] },
                { label: 'ML', values: ['Kaggle regression', 'Full pipeline', 'ML + light DL'] },
                { label: 'DSA', values: ['First problems', 'Arrays + strings', 'LeetCode easy 50'] },
                { label: 'DB', values: ['Files', 'SQLite', 'SQL + ORM'] },
                { label: 'Deploy', values: ['Local', 'Render', 'Multiple deployments'] },
                { label: 'School', values: ['Class 8 CS', 'Class 9 CS / Code 402', 'Class 10 board'] }
            ]
        },
        reviewsHeading: 'Class 9 Python parents.',
        reviewsLede: 'Three recent reviews.',
        reviews: [
            { initial: 'G', name: 'Geeta N.', meta: 'Parent · Noida · 1-on-1', body: 'Class 9 CBSE. Son built a Flask blog with login and deployed it. Aunts abroad visit his link. At 14 he explains POST requests at dinner.' },
            { initial: 'P', name: 'Priya J.', meta: 'Parent · Ahmedabad · Group', body: 'Group of 3 Class 9 Python teens. Teacher runs weekly code reviews. My son had to accept feedback gracefully — that is valuable.' },
            { initial: 'T', name: 'Tarun B.', meta: 'Parent · Bengaluru · 1-on-1', body: 'We moved from YouTube-only. Teacher here is tough but kind. Daughter\'s code now has docstrings, type hints and tests. At 14.' }
        ],
        faqs: [
            { q: 'Does this align with CBSE Class 9 Code 402?', a: 'Yes. Code 402 IT contains a Python unit. We cover every sub-topic and go deeper with real projects.' },
            { q: 'ICSE Class 9 Computer Applications — does this help?', a: 'ICSE Class 9 is Java-based. Python does not replace that. Pair this with our Java track if your child is ICSE.' },
            { q: 'Is Django worth it at Class 9?', a: 'Intro yes, deep no. Full Django with DRF waits for Class 11. At Class 9 we stop at admin + models + views.' },
            { q: 'Is ML serious at Class 9?', a: 'Serious. Full sklearn pipeline on Kaggle. A Class 9 student can build, evaluate and write up a real ML project in 8 weeks.' },
            { q: 'DSA in Python — good idea?', a: 'Yes. Python is a fine first DSA language. C++ comes at Class 11 if CP-inclined.' },
            { q: 'Time weekly?', a: '2 to 3 hours. Fits alongside Class 9 easily.' },
            { q: 'Deep learning at Class 9?', a: 'Introduced at tutorial level. Keras for an image classifier. No backprop math.' },
            { q: 'Free demo?', a: 'Yes — 1 full hour. No card. Refund clause 2 weeks.' }
        ],
        relatedChips: [
            { href: '/python-for-14-year-olds', small: 'Age', label: 'Python for 14 Year Olds' },
            { href: '/python-for-class-8', small: 'Prev', label: 'Python for Class 8' },
            { href: '/python-for-class-10', small: 'Next', label: 'Python for Class 10' },
            { href: '/python-for-class-11-cbse', small: 'Board', label: 'Python for Class 11 CBSE' },
            { href: '/coding-for-class-9', small: 'Class', label: 'Coding for Class 9' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/python-and-ai-classes-for-kids-teens', small: 'Course', label: 'Python & AI' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- PYTHON FOR CLASS 10 ---------- */
    {
        slug: 'python-for-class-10',
        pageTitle: 'Python for Class 10 — Board-Safe Python for CBSE IT 402 + College Prep',
        metaDescription: 'Python classes for Class 10 board students. CBSE IT 402 aligned, paced around pre-boards, plus one serious portfolio project. Live 1 hour classes.',
        keywords: 'python for class 10, cbse class 10 python, code 402 class 10, class 10 it 402, python for 15 year olds, class 10 board python, python class 10 project, python tutoring class 10, python sample paper class 10, best python class 10, class 10 python online, icse class 10 python',
        audienceType: 'Class 10 students learning Python',
        courseCode: 'PY-CL-10',
        courseName: 'Python for Class 10',
        courseDesc: 'Live online Python for Class 10. CBSE IT 402 aligned, board-safe pacing, portfolio project.',
        breadcrumbName: 'Python for Class 10',
        accent: '#06b6d4', accent2: '#6366f1', bodyClass: 'py-class-10-page',
        badge: '10', badgeLabel: 'Class · Python',
        eyebrow: 'Python for Class 10 · Age 15 · Board year',
        h1Before: 'Python for ', h1Highlight: 'Class 10', h1After: ' — serious, not stressful.',
        heroSub: 'Class 10 is the board year. Our 1 hour live Python classes respect that — shorter, deeper sessions, paused during pre-boards. Board marks safe, one portfolio piece shipped.',
        trust: [
            { big: '2,200+', sub: 'Class 10 Python students' },
            { big: '93%', sub: 'Maintain or improve board marks' },
            { big: '1 hour', sub: 'Live class, 1:1 or group' },
            { big: 'IT 402', sub: 'CBSE syllabus aligned' }
        ],
        chips: ['Board-safe', 'IT 402 ready', 'One portfolio piece'],
        coursesHeading: 'Python tracks that fit Class 10.',
        coursesLede: 'Shorter, deeper classes that do not compete with board prep.',
        courses: [PY.pythonTeen, PY.aimlTeen, PY.dsaTeen, PY.dsTeen, PY.flaskBackend, PY.cbseIP, PY.autoPy, PY.mlPro],
        skipHeading: 'Already scoring 85+ on school CS?',
        skipBody: 'If your Class 10 student is strong, <strong>skip review</strong> and go to <a href="/courses/problem-solving-dsa-masterclass-teens" style="color:inherit;text-decoration:underline;">DSA</a> or <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI & ML</a>. Free demo.',
        whyHeading: 'Class 10 confidence decides the next 5 years.',
        whyLede: 'A Class 10 student who finishes the year with both board marks and real Python walks into Class 11 with identity.',
        whys: [
            { tag: 'Board-safe', title: 'Paced for the calendar', body: '1–2 sessions a week, full pause during mocks and pre-boards. School wins the calendar.' },
            { tag: 'Identity', title: 'Portfolio before stream pick', body: 'Stream choice becomes easier when the student has tried real Python.' },
            { tag: 'Signal', title: 'Long GitHub history works', body: 'Class 10 commits read differently from Class 12 commits. Longevity matters later.' }
        ],
        projectsHeading: 'Six Python projects a Class 10 student finishes.',
        projectsLede: 'Calibrated around the board year.',
        projects: [
            { sticker: 'Data', title: 'Study Tracker (Pandas)', desc: 'Pandas + matplotlib app logging study hours.', tags: ['pandas'] },
            { sticker: 'Web', title: 'Django Mini Blog', desc: 'A small Django blog with admin panel. Deployed live.', tags: ['django'] },
            { sticker: 'AI', title: 'Twitter Sentiment', desc: 'sklearn text classifier. Real dataset, metrics explained.', tags: ['sklearn'] },
            { sticker: 'DSA', title: 'Top 50 LeetCode Easy', desc: 'Curated easy set in Python. Across the year.', tags: ['leetcode'] },
            { sticker: 'Board', title: 'Class 10 Python Project', desc: 'Whatever the school asks — done properly.', tags: ['school'] },
            { sticker: 'Auto', title: 'Flashcard Maker', desc: 'Python script that builds flashcards from a text file. Used during boards.', tags: ['scripts'] }
        ],
        roadmapHeading: 'Four stages across Class 10 — board-aware.',
        roadmapLede: 'Full pause during pre-boards and boards.',
        roadmap: [
            { label: 'Term 1 · Rebuild', title: 'Python OOP + pandas', body: 'Clean, solid OOP recap. Pandas introduced deeply. School Python covered one week ahead.', tags: ['oop'] },
            { label: 'Before pre-boards · Ship one', title: 'Django blog deployed', body: 'Small Django blog with admin, deployed. Shipped before pre-boards.', tags: ['django'] },
            { label: 'Pause · Boards', title: 'Support mode only', body: 'No new content. On call for school doubts.', tags: ['board focus'] },
            { label: 'Post-boards · AI + DSA', title: 'Sprint the summer', body: 'Real ML project and 50 DSA easy problems.', tags: ['ai', 'dsa'] }
        ],
        compareHeading: 'Python at Class 9 vs 10 vs 11.',
        compareLede: 'Board year differences.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Class 9', link: '/python-for-class-9' },
                { label: 'Class 10 (this page)' },
                { label: 'Class 11', link: '/python-for-class-11-cbse' }
            ],
            rows: [
                { label: 'School load', values: ['Moderate', 'Board — heavy', 'Stream — heavy'] },
                { label: 'Sessions / week', values: ['2', '1–2', '2'] },
                { label: 'Main goal', values: ['Portfolio build', 'Portfolio + board', 'Stream depth'] },
                { label: 'DSA', values: ['Arrays + strings', 'LeetCode easy 50', 'Striver sheet'] },
                { label: 'Web', values: ['Flask + Django', 'Django deployed', 'Full Django + DRF'] },
                { label: 'ML', values: ['Full pipeline', 'NLP intro', 'DL + production'] }
            ]
        },
        reviewsHeading: 'Class 10 Python parents.',
        reviewsLede: 'Three recent reviews.',
        reviews: [
            { initial: 'S', name: 'Shruti M.', meta: 'Parent · Mumbai · 1-on-1', body: 'Class 10 CBSE. The programme paused during pre-boards. My son finished with 94% and a deployed Django blog. I was wrong to worry.' },
            { initial: 'R', name: 'Ranjan P.', meta: 'Parent · Pune · Group', body: 'Her Java board score was 96 (ICSE) — Python was her extra. She built a Flutter-like script that helped her friends. Win-win.' },
            { initial: 'D', name: 'Dipesh K.', meta: 'Parent · Chennai · 1-on-1', body: 'One 1-hour class a week through the year. My son still solved 50 LeetCode problems and shipped a study tracker. Small and steady.' }
        ],
        faqs: [
            { q: 'Is Python worth it in Class 10?', a: 'Yes — at lower weekly intensity. Keeps identity alive and gives a head start for Class 11 CS stream.' },
            { q: 'Does this align with CBSE Class 10 IT 402?', a: 'Yes. The Python unit in Code 402 is fully covered.' },
            { q: 'Can we pause during pre-boards?', a: 'Yes — we suggest it. Free "emergency" 1-hour during pre-boards for any school doubt.' },
            { q: 'Is 50 LeetCode realistic in Class 10?', a: 'Yes — 1 per week across the year. Builds confidence for Class 11.' },
            { q: 'Will Python affect board marks?', a: 'Not if paced right. Our Class 10 students maintain or improve marks.' },
            { q: 'Does Django work in Class 10?', a: 'A small Django blog, yes. 8 weeks. Not full production — that waits for Class 11.' },
            { q: '1-on-1 or group?', a: '1-on-1 for pacing control. Group works for self-motivated students.' },
            { q: 'Free demo?', a: 'Yes — 1 full hour. No card. Refund clause 2 weeks.' }
        ],
        relatedChips: [
            { href: '/python-for-15-year-olds', small: 'Age', label: 'Python for 15 Year Olds' },
            { href: '/python-for-class-9', small: 'Prev', label: 'Python for Class 9' },
            { href: '/python-for-class-11-cbse', small: 'Next', label: 'Python for Class 11 CBSE' },
            { href: '/python-for-class-12-cbse', small: 'Future', label: 'Python for Class 12 CBSE' },
            { href: '/coding-for-class-10', small: 'Class', label: 'Coding for Class 10' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/python-and-ai-classes-for-kids-teens', small: 'Course', label: 'Python & AI' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- PYTHON FOR CLASS 11 CBSE ---------- */
    {
        slug: 'python-for-class-11-cbse',
        pageTitle: 'Python for Class 11 CBSE — CS 083 & IP Aligned, Pandas, SQL, Functions',
        metaDescription: 'CBSE Class 11 Python tuition. Aligned to CS 083 and Informatics Practices — Python, Pandas, SQL, functions, boolean logic. 1 hour live classes, 1:1 or group.',
        keywords: 'python for class 11 cbse, cbse class 11 python, class 11 cs 083 python, class 11 ip python, class 11 python ncert, python class 11 cbse tuition, class 11 pandas tuition, cbse class 11 python sample paper, class 11 python project, python class 11 online, cbse class 11 ip pandas, cbse class 11 cs functions',
        audienceType: 'CBSE Class 11 CS / IP students',
        courseCode: 'PY-CL-11-CBSE',
        courseName: 'Python for Class 11 CBSE',
        courseDesc: 'Live online Python for CBSE Class 11. Aligned to CS 083 and Informatics Practices — Python, Pandas, SQL, functions.',
        breadcrumbName: 'Python for Class 11 CBSE',
        accent: '#f59e0b', accent2: '#a855f7', bodyClass: 'py-class-11-cbse-page',
        badge: '11', badgeLabel: 'CBSE · Python',
        eyebrow: 'Python for CBSE Class 11 · CS 083 + IP',
        h1Before: 'Python for ', h1Highlight: 'Class 11 CBSE', h1After: ' — NCERT-aligned, stream-grade.',
        heroSub: 'CBSE Class 11 Python is split between CS 083 (theory + programming) and IP (Pandas + SQL). Our 1 hour live classes cover both NCERT books, chapter by chapter, with real practical prep.',
        trust: [
            { big: '1,900+', sub: 'CBSE Class 11 Python students' },
            { big: '94%', sub: 'Score 85+ on the paper' },
            { big: '1 hour', sub: 'Live class, 1:1 or group' },
            { big: 'CS 083', sub: 'Full NCERT alignment' }
        ],
        chips: ['NCERT aligned', 'Pandas + SQL', 'Practical prep'],
        coursesHeading: 'Python courses for CBSE Class 11.',
        coursesLede: 'The CS 083 + IP combined track is the spine. Companion courses for those going beyond board marks.',
        courses: [PY.cbseCS, PY.cbseIP, PY.pythonTeen, PY.aimlTeen, PY.dsTeen, PY.dsaTeen, PY.flaskBackend, PY.genAI],
        skipHeading: 'Already has strong Python from Class 10?',
        skipBody: 'If your Class 11 CBSE student already has strong Python, <strong>skip basics</strong> and go into <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI/ML</a>, <a href="/courses/mern-stack-development-masterclass-college" style="color:inherit;text-decoration:underline;">MERN</a>, or <a href="/courses/problem-solving-dsa-masterclass-teens" style="color:inherit;text-decoration:underline;">DSA</a>. Free demo confirms.',
        whyHeading: 'CBSE Class 11 Python sets the Class 12 base.',
        whyLede: 'A student who takes Class 11 Python seriously finds Class 12 significantly easier. Python fluency and Pandas basics are revisited and deepened in Class 12.',
        whys: [
            { tag: 'NCERT', title: 'Follows NCERT CS 083 + IP', body: 'Our teachers open the NCERT books in class. Every chapter, every example covered.' },
            { tag: 'Practical', title: '30 marks on practical', body: 'Practical is too much to ignore. We build real Python projects throughout the year.' },
            { tag: 'Class 12 prep', title: 'Strong 11 = easy 12', body: 'Class 12 deepens Python, adds SQL + data structures. Strong Class 11 Python makes Class 12 sail.' }
        ],
        projectsHeading: 'Six Class 11 CBSE Python sets.',
        projectsLede: 'Each matches a CS 083 / IP unit.',
        projects: [
            { sticker: 'Unit 2 CS', title: 'Python Functions + Strings', desc: 'User-defined functions, scope, string slicing. Paper favourites.', tags: ['functions'] },
            { sticker: 'Unit 2 CS', title: 'Lists + Dicts + Tuples', desc: 'All three data structures with real examples.', tags: ['lists', 'dicts'] },
            { sticker: 'IP', title: 'Pandas Series + DataFrames', desc: 'Hands-on with real CSV datasets. IP practical pattern.', tags: ['pandas'] },
            { sticker: 'IP', title: 'MySQL Basics', desc: 'SELECT, WHERE, GROUP BY. With a real student dataset.', tags: ['sql'] },
            { sticker: 'CS 083', title: 'Boolean + Number Systems', desc: 'Truth tables, K-maps, binary/hex. Theory drilled.', tags: ['boolean'] },
            { sticker: 'Project', title: 'Class 11 Python Project', desc: 'Required project, done with real code quality and report.', tags: ['project'] }
        ],
        roadmapHeading: 'Four stages across Class 11 Python.',
        roadmapLede: 'Matched to school terms. Theory and programming in parallel.',
        roadmap: [
            { label: 'Term 1 · Unit 1 CS + Python I', title: 'Computer systems + Python basics', body: 'Boolean, number systems. Python data types, conditions, loops. Two muscles in parallel.', tags: ['boolean', 'python'] },
            { label: 'Term 1–2 · Python II', title: 'Functions, strings, lists', body: 'Where most Class 11 programming marks come from. Real programs written and tested.', tags: ['functions'] },
            { label: 'Term 2 · IP focus', title: 'Pandas + SQL', body: 'IP students dive into Pandas and SQL. CS students do projects. Clear split.', tags: ['pandas', 'sql'] },
            { label: 'Pre-board · Mocks', title: '5 full papers', body: 'Timed mock papers. Feedback same day. Lab file + project finalised.', tags: ['mocks'] }
        ],
        compareHeading: 'CBSE Python 11 CS vs IP vs Class 12.',
        compareLede: 'Stream choice at Class 11.',
        compare: {
            highlight: 0,
            columns: [
                { label: 'Class 11 CS 083 (this page)' },
                { label: 'Class 11 IP' },
                { label: 'Class 12 CS', link: '/python-for-class-12-cbse' }
            ],
            rows: [
                { label: 'Main content', values: ['Python + theory', 'Python + Pandas + SQL', 'Python + DS + SQL + Networks'] },
                { label: 'Data structures', values: ['Lists, tuples, dicts', 'Series, DataFrame', 'Stacks, queues (Python)'] },
                { label: 'SQL', values: ['Low', 'High', 'Medium'] },
                { label: 'Practical weight', values: ['30', '30', '30'] },
                { label: 'Career fit', values: ['CS college', 'Data / IP', 'CS college'] },
                { label: 'Difficulty', values: ['Medium', 'Lower', 'Medium-high'] }
            ]
        },
        reviewsHeading: 'CBSE Class 11 Python parents + students.',
        reviewsLede: 'Three recent reviews.',
        reviews: [
            { initial: 'H', name: 'Harsh V.', meta: 'Student · Delhi · 1-on-1', body: 'Class 11 CBSE CS. Teacher teaches NCERT a week before school. I finished Python units by mid-term. 92 in half-yearly. Practical project on track.' },
            { initial: 'P', name: 'Poonam S.', meta: 'Parent · Hyderabad · Group · Class 11 IP', body: 'Group of 4 IP students. Pandas was breaking my daughter. Fixed in 4 weeks. Half-yearly IP marks doubled.' },
            { initial: 'R', name: 'Rahul M.', meta: 'Parent · Bengaluru · 1-on-1', body: 'My son\'s school CS teacher changed three times in a term. This class gave him consistency. He finished the Python project properly.' }
        ],
        faqs: [
            { q: 'Does this cover both CS 083 and IP Python?', a: 'Yes. We have dedicated teachers for each. CS 083 stream covers Python + boolean + networks; IP stream covers Python + Pandas + SQL deeply.' },
            { q: 'Is Python enough for Class 11 CS 083?', a: 'The programming part is Python; you also need boolean, number systems and theory. We cover both.' },
            { q: 'Class 11 IP vs CS — which is easier?', a: 'IP is typically easier and more data-focused. CS is broader and has more theory. Choose based on Class 12 plan.' },
            { q: 'CBSE Class 11 practical — covered?', a: 'Yes. Sample datasets, likely question patterns, viva rehearsal. 15 lab programs delivered.' },
            { q: 'Does this help with Class 12?', a: 'Directly. A strong Class 11 Python base makes Class 12 stacks/queues, SQL and networks easier.' },
            { q: '1-on-1 or group?', a: '1-on-1 for students needing improvement. Group works for students already scoring 80+.' },
            { q: 'JEE CS additional?', a: 'We do not prepare JEE Advanced CS directly. That is separate, harder, and needs its own track.' },
            { q: 'Free demo?', a: 'Yes. Full 1 hour class. No card. Refund clause 2 weeks.' }
        ],
        relatedChips: [
            { href: '/python-for-16-year-olds', small: 'Age', label: 'Python for 16 Year Olds' },
            { href: '/python-for-class-10', small: 'Prev', label: 'Python for Class 10' },
            { href: '/python-for-class-12-cbse', small: 'Next', label: 'Python for Class 12 CBSE Board' },
            { href: '/computer-science-class-11-cbse', small: 'Paper', label: 'CS Class 11 CBSE' },
            { href: '/coding-for-class-11', small: 'Class', label: 'Coding for Class 11' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/python-and-ai-classes-for-kids-teens', small: 'Course', label: 'Python & AI' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- PYTHON FOR CLASS 12 CBSE BOARD EXAM ---------- */
    {
        slug: 'python-for-class-12-cbse',
        pageTitle: 'Python for Class 12 CBSE Board Exam — Full Syllabus, Project, SQL, Sample Papers',
        metaDescription: 'CBSE Class 12 Python board-exam tuition. Full CS 083 syllabus — Python data structures, file handling, SQL, networks — plus project and viva prep. Live 1 hour classes.',
        keywords: 'python for class 12 cbse, python for class 12 cbse board exam, cbse class 12 python, cs 083 class 12, class 12 python ncert, class 12 python data structures, python class 12 sql, class 12 python file handling, class 12 python sample papers, cbse class 12 python project, python class 12 board tuition, class 12 python online, python class 12 viva prep',
        audienceType: 'CBSE Class 12 CS / IP board students',
        courseCode: 'PY-CL-12-CBSE',
        courseName: 'Python for Class 12 CBSE Board Exam',
        courseDesc: 'Live online CBSE Class 12 Python board-exam tuition. Full CS 083 syllabus, project, viva prep, sample papers.',
        breadcrumbName: 'Python for Class 12 CBSE Board Exam',
        accent: '#ef4444', accent2: '#f59e0b', bodyClass: 'py-class-12-cbse-page',
        badge: '12', badgeLabel: 'CBSE Board · Python',
        eyebrow: 'Python for CBSE Class 12 · Board exam year',
        h1Before: 'Python for ', h1Highlight: 'Class 12 CBSE', h1After: ' — board exam, full confidence.',
        heroSub: 'CBSE Class 12 Python is Python + data structures + SQL + networks. Our 1 hour live classes cover every NCERT chapter, run through 10 years of sample papers, and finish the mandatory project with a clean report and viva prep.',
        trust: [
            { big: '1,500+', sub: 'Class 12 CBSE Python students' },
            { big: '92%', sub: 'Score 90+ on the board paper' },
            { big: '1 hour', sub: 'Live class, 1:1 or group' },
            { big: 'NCERT 083', sub: 'Full board syllabus alignment' }
        ],
        chips: ['Board-safe', 'Full project', 'SQL mastered'],
        coursesHeading: 'Python tracks that win Class 12 CBSE board.',
        coursesLede: 'The CS 083 track is non-negotiable. Companion tracks for Class 12 students who want college-ready portfolio.',
        courses: [PY.cbseCS, PY.cbseIP, PY.pythonTeen, PY.aimlTeen, PY.dsTeen, PY.dsaTeen, PY.autoPy, PY.mlPro],
        skipHeading: 'Already scoring 85+ in mid-term?',
        skipBody: 'If your Class 12 CBSE student is already scoring high, <strong>skip review</strong> and go into <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI/ML</a>, <a href="/courses/problem-solving-dsa-masterclass-teens" style="color:inherit;text-decoration:underline;">DSA</a>, or <a href="/courses/competitive-programming-masterclass" style="color:inherit;text-decoration:underline;">CP</a>. Free demo places them.',
        whyHeading: 'Class 12 CS is high-stakes — the right help matters.',
        whyLede: 'CS is often a top-3 marks subject. A 95 vs 85 can shift PCM+CS average and JEE Main merit picture. The paper rewards precise Python and clean SQL.',
        whys: [
            { tag: 'Stakes', title: 'CS lifts PCM+CS average', body: 'For engineering-bound students, CS is a reliably high-scoring subject. A clean 95 is well within reach.' },
            { tag: 'Practical', title: '30 marks — often lost', body: 'Project + lab file + viva = 30 marks. Students neglect this and lose easy marks.' },
            { tag: 'College', title: 'Project can support college apps', body: 'A well-written Class 12 CS project can also be used in CS-abroad college applications. Double benefit.' }
        ],
        projectsHeading: 'Six mastery sets across Class 12 CBSE Python.',
        projectsLede: 'Each set is a full NCERT 083 unit.',
        projects: [
            { sticker: 'Unit 1', title: 'Python Recap + DS', desc: 'Class 11 Python recap. Lists, dicts, stacks, queues implemented.', tags: ['python'] },
            { sticker: 'Unit 1', title: 'File Handling', desc: 'Text + binary + CSV file handling — a confusing topic simplified.', tags: ['files'] },
            { sticker: 'Unit 1', title: 'Functions + Recursion', desc: 'Scope, defaults, gentle recursion.', tags: ['functions'] },
            { sticker: 'Unit 2', title: 'Networks', desc: 'Types, topologies, internet basics. Drilled via MCQ.', tags: ['networks'] },
            { sticker: 'Unit 3', title: 'SQL + MySQL', desc: 'SELECT, WHERE, GROUP BY, joins. Practised on a real dataset.', tags: ['sql'] },
            { sticker: 'Project', title: 'Mandatory Class 12 Project', desc: 'Topic chosen together, code reviewed, report in CBSE format, viva rehearsed.', tags: ['project'] }
        ],
        roadmapHeading: 'Four quarters across Class 12 — board-aware.',
        roadmapLede: 'Pauses for pre-boards and boards. Everything else steady.',
        roadmap: [
            { label: 'Q1 · Jul–Sep · Python + DS', title: 'Unit 1 core', body: 'Class 11 Python recap. Stacks, queues, lists. File handling covered early — it trips students otherwise.', tags: ['python', 'stacks'] },
            { label: 'Q2 · Oct–Nov · SQL + Project', title: 'Unit 3 + mandatory project', body: 'MySQL drilled on real datasets. Project end-to-end. Both done before pre-boards.', tags: ['sql', 'project'] },
            { label: 'Q3 · Dec–Feb · Mocks', title: 'Sample papers', body: 'Weekly 3-hour sample papers under timed conditions. Scored. Gaps reviewed.', tags: ['mocks'] },
            { label: 'Q4 · Mar+ · Board support', title: 'On-call support', body: 'During boards, no new content. On WhatsApp for last-minute doubts. After boards, pre-college sprint.', tags: ['board'] }
        ],
        compareHeading: 'CBSE Python 11 vs 12 vs CBSE IP 12.',
        compareLede: 'What shifts at board.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Class 11', link: '/python-for-class-11-cbse' },
                { label: 'Class 12 CBSE (this page)' },
                { label: 'Class 12 IP' }
            ],
            rows: [
                { label: 'Main content', values: ['Python + theory', 'Python + DS + SQL + Networks', 'Python + Pandas + SQL'] },
                { label: 'Data structures', values: ['Lists, tuples, dicts', 'Stacks, queues (Python)', 'Pandas Series / DF'] },
                { label: 'Networks', values: ['Intro', 'Full chapter', 'Less emphasis'] },
                { label: 'SQL weight', values: ['Medium', 'High', 'High'] },
                { label: 'Practical weight', values: ['30', '30', '30'] },
                { label: 'Typical topper %', values: ['93+', '95+', '93+'] }
            ]
        },
        reviewsHeading: 'Class 12 CBSE Python parents + students.',
        reviewsLede: 'Three recent board-year reviews.',
        reviews: [
            { initial: 'A', name: 'Abhinav R.', meta: 'Student · Delhi · 1-on-1', body: 'Class 12 CBSE CS. SQL was breaking me at mid-term. Teacher rebuilt it in 5 sessions on a real dataset. 97 in pre-boards. Project: library management Flask app. Full marks.' },
            { initial: 'G', name: 'Gayatri P.', meta: 'Parent · Mumbai · Group', body: 'Small group of 3 Class 12 CS students. Teacher runs strict timed simulations — 3 hours, no breaks. Daughter scored 93 in boards. Project: book recommender using Pandas.' },
            { initial: 'K', name: 'Karan M.', meta: 'Parent · Bengaluru · 1-on-1', body: 'Joined late — October. SQL + networks + project in 3 months. Son scored 91 in boards. Given the timeline, remarkable.' }
        ],
        faqs: [
            { q: 'What is the full Class 12 CBSE CS 083 syllabus?', a: 'Unit 1: Computational Thinking (Python DS, file handling) — 40 marks. Unit 2: Networks — 10 marks. Unit 3: Database (SQL + MySQL) — 20 marks. Practical + project — 30 marks.' },
            { q: 'Is the project really 12 marks?', a: 'Yes. The mandatory project is 12 marks of 30 practical. Students lose marks here — we make it solid.' },
            { q: 'Is MySQL in theory?', a: 'Yes. Database questions appear in theory and the practical. We cover both through the same dataset.' },
            { q: 'Can we start in October?', a: 'Yes — 1-on-1 only at that stage. Intensive 3-month push on high-yield topics.' },
            { q: 'JEE CS separate?', a: 'Yes. JEE Advanced CS is deeper. Our Class 12 CBSE course does not replace JEE prep.' },
            { q: 'Pre-board drop — help?', a: 'Yes. 4-week intensive between pre-boards and boards for students who dropped.' },
            { q: '1-on-1 or group?', a: '1-on-1 for improvement. Group works for students already scoring 80+.' },
            { q: 'Free demo?', a: 'Yes. Full 1 hour class. No card. Refund 2 weeks.' }
        ],
        relatedChips: [
            { href: '/python-for-17-year-olds', small: 'Age', label: 'Python for 17 Year Olds' },
            { href: '/python-for-class-11-cbse', small: 'Prev', label: 'Python for Class 11 CBSE' },
            { href: '/computer-science-class-12-cbse', small: 'Paper', label: 'CS Class 12 CBSE' },
            { href: '/computer-science-class-11-cbse', small: 'Prev paper', label: 'CS Class 11 CBSE' },
            { href: '/coding-for-class-12', small: 'Class', label: 'Coding for Class 12' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/python-and-ai-classes-for-kids-teens', small: 'Course', label: 'Python & AI' }
        ],
        cityChips: CITY_CHIPS
    }

];
