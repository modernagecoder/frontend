/*
 * python-kids-pages.js — beginners & projects pages (2 pages).
 */

const { PY, CITY_CHIPS } = require('./python-shared');

module.exports = [

    /* ---------- PYTHON FOR BEGINNERS KIDS ---------- */
    {
        slug: 'python-for-beginners-kids',
        pageTitle: 'Python for Beginners Kids — Absolute Zero Start, Fun Projects, Live 1-on-1 Classes',
        metaDescription: 'Python for absolute beginner kids — 6 to 14 years. Start from zero with turtle graphics, silly games and tiny projects. Live 1 hour classes, 1:1 or small group. Free demo.',
        keywords: 'python for beginners kids, python for kids beginners, learn python for kids, python beginner course kids, python for absolute beginners kids, free python for kids, python classes for beginners, python lessons for kids, python introduction for kids, start learning python kid, best python course for beginner kids, python for children beginners, easy python for kids, kids first python class',
        audienceType: 'Absolute beginner kids (age 6 to 14)',
        courseCode: 'PY-BEG-KIDS',
        courseName: 'Python for Beginners Kids',
        courseDesc: 'Python from absolute zero for kids. Turtle graphics, silly games, tiny projects. 1 hour live classes, 1:1 or small group.',
        breadcrumbName: 'Python for Beginners Kids',
        accent: '#3b82f6', accent2: '#f59e0b', bodyClass: 'py-beg-kids-page',
        badge: 'Py', badgeLabel: 'For beginners',
        badgeFontSize: 'clamp(60px, 9vw, 120px)',
        eyebrow: 'For kids new to Python · Ages 6 to 14',
        h1Before: 'Python for ', h1Highlight: 'Beginners Kids', h1After: ' — start from zero, finish something real.',
        heroSub: 'No prior coding needed. Our 1 hour live Python classes begin with print and silly outputs, build into turtle drawings and tiny games, and end with the child saying "look what I made". Live teacher watching every line.',
        trust: [
            { big: '5,200+', sub: 'Beginner kids taught Python' },
            { big: '4.9 / 5', sub: 'Parent rating · 620+ reviews' },
            { big: '1 hour', sub: 'Per live class, 1:1 or small group' },
            { big: '4 weeks', sub: 'From zero to first working project' }
        ],
        chips: ['Absolute zero', 'Silly first', 'Real Python'],
        coursesHeading: 'Beginner-friendly Python courses by age.',
        coursesLede: 'We match the course to the child\'s age and reading level. The options below are all beginner-safe — no prior knowledge required.',
        courses: [PY.pythonKids, PY.aiKids, PY.pythonTeen, PY.aimlTeen, PY.dsaTeen, PY.flaskBackend, PY.dsTeen, PY.autoPy],
        skipHeading: 'Has your child already done Scratch?',
        skipBody: 'If your child has some Scratch or Code.org under the belt, <strong>skip the very first weeks</strong> and jump into <a href="/courses/python-ai-kids-masterclass" style="color:inherit;text-decoration:underline;">Python for Kids</a> or <a href="/courses/cbse-computational-thinking-and-ai-course-for-kids-classes-3-to-8" style="color:inherit;text-decoration:underline;">AI Tools</a>. The demo teacher does a 10-minute level check.',
        whyHeading: 'The right beginner path depends on the child.',
        whyLede: 'A 7-year-old beginner needs very different pacing from a 13-year-old beginner. Our teachers shape the first month around the child — shorter programs, silly content, plenty of wins.',
        whys: [
            { tag: 'Pace', title: 'Pace matches age', body: 'A 7-year-old writes 3-line programs; a 12-year-old writes 15-line programs in the same first month. Same Python, different ladder.' },
            { tag: 'Content', title: 'Silly before serious', body: 'First programs make jokes, roll dice, ask silly questions. Real Python, but content chosen to light up the child.' },
            { tag: 'Confidence', title: 'Wins every single class', body: 'Every class ends with something the child can show a parent — a joke program, a turtle drawing, a tiny quiz. No "we\'ll continue next time".' }
        ],
        projectsHeading: 'Six first Python projects any beginner kid can finish.',
        projectsLede: 'These are the six projects we walk every beginner through in the first 8–10 classes. Nothing scary, everything real.',
        projects: [
            { sticker: 'Intro', title: 'Hello, Me', desc: 'A program that asks for a name and greets you. First Python. First "it ran".', tags: ['print', 'input'] },
            { sticker: 'Fun', title: 'Silly Fortune Teller', desc: 'Ask it anything, get a random silly answer. First use of random.choice.', tags: ['random', 'lists'] },
            { sticker: 'Game', title: 'Guess the Number', desc: 'Computer picks a number, player guesses with hints. First if / elif.', tags: ['if-else', 'random'] },
            { sticker: 'Turtle', title: 'Shape Drawer', desc: 'Draws a square, triangle or star depending on what you type. First turtle.', tags: ['turtle'] },
            { sticker: 'Maths', title: 'Times Table Printer', desc: 'Asks for a number and prints its times table 1–10. First for loop.', tags: ['for', 'print'] },
            { sticker: 'Quiz', title: 'Three-Question Quiz', desc: 'Three questions, keeps a score, prints a grade at the end. First while + counter.', tags: ['while', 'score'] }
        ],
        roadmapHeading: 'Four starter stages — roughly 2 to 3 months.',
        roadmapLede: 'The beginner arc. Younger kids move slower; older kids move faster. Pace is the teacher\'s judgment, not a schedule.',
        roadmap: [
            { label: 'Week 1–2 · Warm-up', title: 'Install Python + first print', body: 'Install Thonny. First print statements. First comments. First "oh, it works". Confidence first.', tags: ['install', 'print'] },
            { label: 'Week 3–4 · input + random', title: 'Programs that respond', body: 'input() and random. Silly fortune teller. Random joke. Programs stop being one-shot.', tags: ['input', 'random'] },
            { label: 'Week 5–6 · logic', title: 'First if-else', body: 'Guess-the-number game. Simple age-check program. Branching unlocked.', tags: ['if-else'] },
            { label: 'Week 7–8 · loops', title: 'First for + while', body: 'Times table printer. Turtle star. Three-question quiz. A real Python toolkit in hand.', tags: ['for', 'while'] }
        ],
        compareHeading: 'Beginner Python — age 8 vs 11 vs 13.',
        compareLede: 'Which way the beginner path shapes at different ages.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Beginner age 8' },
                { label: 'Beginner age 11 (typical)' },
                { label: 'Beginner age 13' }
            ],
            rows: [
                { label: 'Starting point', values: ['Scratch first, Python second', 'Python from week 1', 'Python from week 1'] },
                { label: 'Typing', values: ['Very short programs', 'Comfortable', 'Fluent'] },
                { label: 'First working program', values: ['Week 3–4', 'Week 1', 'Week 1'] },
                { label: 'After 2 months', values: ['Silly + loops', 'If + loops + lists', 'Functions + lists + files'] },
                { label: 'Best format', values: ['Group works', 'Both', 'Both'] },
                { label: 'Class length', values: ['1 hour', '1 hour', '1 hour'] }
            ]
        },
        reviewsHeading: 'Parents of beginner Python kids.',
        reviewsLede: 'Three recent reviews from families whose child started Python from zero with us.',
        reviews: [
            { initial: 'A', name: 'Aisha V.', meta: 'Parent · Delhi · Group · son age 9', body: 'He did not know what Python even was. After 4 classes he asks Alexa to shut up because "she is not as clever as Python". The teacher makes it silly first. That worked.' },
            { initial: 'B', name: 'Bhaskar T.', meta: 'Parent · Bengaluru · 1-on-1 · daughter age 12', body: 'She had tried a recorded-video Python app and given up. The live class made the difference — her teacher catches her when she types a colon instead of a semicolon and explains why.' },
            { initial: 'M', name: 'Meena S.', meta: 'Parent · Chennai · Group · son age 14', body: 'Started from zero as a beginner in Class 9. After 2 months he is writing 30-line programs. The teacher said he should now move to the mainstream Python track — and he is ready.' }
        ],
        faqs: [
            { q: 'My child has zero coding experience — is this okay?', a: 'Perfect — that\'s exactly who this is for. We start from print("hello") and build up one tiny idea at a time. By month 1, most students have written a working game.' },
            { q: 'What\'s the minimum age to start Python?', a: 'Practically, 8 is the earliest we recommend. Younger than that, we recommend Scratch first. At 8+, direct Python is possible with patient teaching.' },
            { q: 'Is Python too hard for a beginner?', a: 'Python is the easiest mainstream language. Short, readable, clear errors. Harder to break than many others. It is what most colleges now teach in first year too.' },
            { q: 'What editor / software?', a: 'Thonny for ages 8–12 (friendly errors). VS Code for 13+. Both free. We help install in session 1.' },
            { q: 'Do you give homework from day one?', a: 'Light, optional homework from week 2. Usually "finish your own project". Never drill exercises for beginners.' },
            { q: '1-on-1 vs small group for a beginner?', a: '1-on-1 gives a shy or very young beginner the most attention. Small group (4–6) works great for older or socially comfortable beginners.' },
            { q: 'Can you handle multiple siblings at different levels?', a: 'Yes. We often place siblings in different classes at their levels, or run a family 1-on-1 session where the teacher paces for both.' },
            { q: 'Free demo?', a: 'Yes — one full 1 hour live class. No card. Refund clause 2 weeks if fit is off.' }
        ],
        relatedChips: [
            { href: '/python-for-9-year-olds', small: 'Age', label: 'Python for 9 Year Olds' },
            { href: '/python-for-10-year-olds', small: 'Age', label: 'Python for 10 Year Olds' },
            { href: '/python-for-11-year-olds', small: 'Age', label: 'Python for 11 Year Olds' },
            { href: '/python-projects-for-kids', small: 'Projects', label: 'Python Projects for Kids' },
            { href: '/python-and-ai-classes-for-kids-teens', small: 'Course', label: 'Python & AI for Kids' },
            { href: '/coding-classes-for-girls', small: 'Special', label: 'Coding for Girls' },
            { href: '/summer-coding-camp-kids', small: 'Camp', label: 'Summer Coding Camp' },
            { href: '/best-coding-classes-online', small: 'Compare', label: 'Best Online Classes' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- PYTHON PROJECTS FOR KIDS ---------- */
    {
        slug: 'python-projects-for-kids',
        pageTitle: 'Python Projects for Kids — 20+ Finishable Python Projects (Ages 8 to 15)',
        metaDescription: 'The Python project shelf for kids. 20+ finishable Python projects — games, AI, turtle art, quizzes, first web pages — with a live teacher guiding every step. 1 hour classes.',
        keywords: 'python projects for kids, python projects for beginners kids, easy python projects for kids, fun python projects, python project ideas kids, python game projects kids, python turtle projects, python ai projects kids, kids python portfolio, python projects class 5, python projects class 6, python projects class 7, best python projects for kids, simple python projects',
        audienceType: 'Kids (age 8 to 15) looking for Python projects',
        courseCode: 'PY-PROJ-KIDS',
        courseName: 'Python Projects for Kids',
        courseDesc: 'Project-first Python programme for kids aged 8 to 15. Build 20+ finishable Python projects with a live teacher. 1 hour live classes.',
        breadcrumbName: 'Python Projects for Kids',
        accent: '#10b981', accent2: '#f59e0b', bodyClass: 'py-proj-kids-page',
        badge: 'Py', badgeLabel: 'Project shelf',
        badgeFontSize: 'clamp(60px, 9vw, 120px)',
        eyebrow: 'Python projects for kids · Ages 8 to 15',
        h1Before: 'Python ', h1Highlight: 'Projects for Kids', h1After: ' — 20+ finishable builds, one live teacher.',
        heroSub: 'Most kids drop Python because videos are passive and the projects are too big. Our 1 hour live project classes flip it — your child builds 20+ small, finishable Python projects with a real teacher watching the screen.',
        trust: [
            { big: '20+', sub: 'Curated finishable Python projects' },
            { big: '4.9 / 5', sub: 'Parent rating · 510+ reviews' },
            { big: '1 hour', sub: 'Live class per project stage' },
            { big: '100%', sub: 'Projects finished, none abandoned' }
        ],
        chips: ['Games', 'Turtle art', 'AI tasters'],
        coursesHeading: 'Project-first Python courses for kids.',
        coursesLede: 'Not one long track — a menu. Pick the courses that match your child\'s age and interest. Every class is 1 hour live.',
        courses: [PY.pythonKids, PY.aiKids, PY.pythonTeen, PY.aimlTeen, PY.flaskBackend, PY.autoPy, PY.dsaTeen, PY.dsTeen],
        skipHeading: 'Has your child already finished 5+ Python projects?',
        skipBody: 'If your child has built real Python projects before, <strong>skip to</strong> <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI & ML</a>, <a href="/courses/backend-coding-masterclass-for-teens" style="color:inherit;text-decoration:underline;">Flask backend</a>, or <a href="/courses/problem-solving-dsa-masterclass-teens" style="color:inherit;text-decoration:underline;">DSA in Python</a>. Free demo level check.',
        whyHeading: 'Projects beat tutorials. Every time.',
        whyLede: 'Kids who build small projects remember 10x more than kids who watch tutorials. Projects give a reason to learn a new idea. Tutorials teach ideas without a reason — and the ideas evaporate.',
        whys: [
            { tag: 'Retention', title: 'Projects anchor concepts', body: 'A child who learned random inside a dice game will remember random a year later. A child who watched a "random tutorial" will not.' },
            { tag: 'Confidence', title: 'Finished > perfect', body: 'We pick small projects so they actually finish. Five finished projects beat one half-done big project every time, especially for kids.' },
            { tag: 'Shareable', title: 'Shown to grandparents', body: 'A finished project is shown. A half-done project is hidden. Show-off moments are the fuel that keeps the child engaged.' }
        ],
        projectsHeading: 'Twelve of our 20+ Python projects — across ages.',
        projectsLede: 'A taste of the project shelf. Some beginner, some medium, some advanced. Teachers pick based on the child\'s age and interest.',
        projects: [
            { sticker: 'Age 8–10', title: 'Mad Libs', desc: 'The classic Python teaching project — ask for nouns and verbs, produce a silly story.', tags: ['input', 'strings'] },
            { sticker: 'Age 8–10', title: 'Dice Roller', desc: 'Roll a dice 100 times, print a bar chart. First import.', tags: ['random', 'loops'] },
            { sticker: 'Age 9–11', title: 'Guess the Number', desc: 'Computer picks secret, player guesses with hints.', tags: ['if-else'] },
            { sticker: 'Age 10–12', title: 'Rock–Paper–Scissors', desc: 'Best of 5 against the computer. Lists + random.', tags: ['lists'] },
            { sticker: 'Age 10–12', title: 'Turtle Star Field', desc: 'Night-sky starfield with nested loops and colour.', tags: ['turtle'] },
            { sticker: 'Age 10–12', title: 'Maths Quiz', desc: 'Random times-table and division drills with score.', tags: ['random', 'score'] },
            { sticker: 'Age 11–13', title: 'Flashcard Tool', desc: 'Load question/answer pairs from a text file and drill yourself.', tags: ['files'] },
            { sticker: 'Age 11–13', title: 'Teachable ML Call', desc: 'Train Teachable Machine, call the model from a tiny Python script.', tags: ['AI'] },
            { sticker: 'Age 12–14', title: 'Pygame Pong', desc: 'Two paddles, one ball, score counter. First real game library.', tags: ['pygame'] },
            { sticker: 'Age 12–14', title: 'Weather API', desc: 'Python script fetches weather for a city from a public API.', tags: ['requests'] },
            { sticker: 'Age 13–15', title: 'Flask Blog', desc: 'Small Flask app with posts and admin. Deployed online.', tags: ['flask'] },
            { sticker: 'Age 13–15', title: 'Kaggle Classifier', desc: 'sklearn on a real dataset — titanic or iris. Full pipeline.', tags: ['sklearn'] }
        ],
        roadmapHeading: 'How the project-first roadmap runs.',
        roadmapLede: 'We don\'t have a textbook. We have a project queue. Each project teaches one concept.',
        roadmap: [
            { label: 'Stage 1 · Small wins', title: 'Finish 3 starter projects', body: 'Mad Libs, Dice Roller, Guess the Number. Small enough to finish inside 2 classes each. Confidence first.', tags: ['starter'] },
            { label: 'Stage 2 · Build the muscle', title: 'Next 5 projects', body: 'Rock–Paper–Scissors, Turtle Star, Maths Quiz, Flashcard, Teachable ML call. Each introduces one new idea.', tags: ['build'] },
            { label: 'Stage 3 · Real tools', title: 'Pygame + APIs', body: 'Pygame Pong, Weather API. First brush with libraries and external data. Feels like real programming.', tags: ['libs'] },
            { label: 'Stage 4 · Portfolio', title: 'One bigger build', body: 'A deployed Flask blog or a Kaggle classifier. Something that goes on GitHub with a readme.', tags: ['github'] }
        ],
        compareHeading: 'Project-first vs tutorial-first vs school-first Python.',
        compareLede: 'Three common ways kids learn Python. What each actually delivers.',
        compare: {
            highlight: 0,
            columns: [
                { label: 'Project-first (this page)' },
                { label: 'Tutorial-first' },
                { label: 'School-first' }
            ],
            rows: [
                { label: 'Retention after 6 months', values: ['High', 'Low', 'Medium'] },
                { label: 'Enthusiasm', values: ['High', 'Drops', 'Mixed'] },
                { label: 'Finished projects', values: ['5+ in 2 months', 'Few', '1 per year'] },
                { label: 'Live teacher', values: ['Yes', 'No', 'Shared classroom'] },
                { label: 'Pace matched to child', values: ['Yes', 'No', 'No'] },
                { label: 'Cost vs outcome', values: ['Strong', 'Cheap but weak', 'Free but slow'] }
            ]
        },
        reviewsHeading: 'Parents on the project-first approach.',
        reviewsLede: 'Three recent reviews from families choosing our Python projects path.',
        reviews: [
            { initial: 'T', name: 'Tara R.', meta: 'Parent · Delhi · Group · son age 11', body: 'He had tried two video Python courses and given up. Here he finished 6 projects in 2 months. His Rock–Paper–Scissors has proper scoring. He actually plays his own game.' },
            { initial: 'V', name: 'Viraj S.', meta: 'Parent · Pune · 1-on-1 · daughter age 13', body: 'Daughter built a Pygame Pong and a Kaggle titanic classifier back-to-back. At 13, writing proper readmes. I ask her technical questions now, not the other way around.' },
            { initial: 'S', name: 'Simran G.', meta: 'Parent · Bengaluru · Group · son age 10', body: 'Small group of 4 kids. Teacher rotates projects based on who has done what. My son has built a Mad Libs, a turtle star and a Maths quiz. He is 10 and he shows them to his uncles on WhatsApp.' }
        ],
        faqs: [
            { q: 'Do you only do projects, or also teach concepts?', a: 'Both — but project-first. Concepts are introduced exactly when the project needs them. No "week on for loops" in isolation — we introduce for loops inside a project that needs them.' },
            { q: 'Can a total beginner start here?', a: 'Yes. Our first three projects (Mad Libs, Dice Roller, Guess the Number) are pure beginner. You can be at zero Python and still follow.' },
            { q: 'How many projects will my child finish in 3 months?', a: 'Typically 6–8 if doing 2 classes per week. Some simpler (Mad Libs, dice), some harder (Pygame, API). All finished, not half-done.' },
            { q: 'Do projects go on GitHub?', a: 'For age 12+, yes. We help set up the account and write proper readmes. For under 12, we save locally and share a zip with parents.' },
            { q: 'Can my child suggest project ideas?', a: 'Strongly encouraged. If your 11-year-old wants a Pokemon quiz, we build a Pokemon quiz — just using the concepts at their level.' },
            { q: 'Is it 1-on-1 or group?', a: 'Both work. Group is cheaper and peer learning helps. 1-on-1 is better if your child has specific projects in mind or unusual pace.' },
            { q: 'Do the projects have viva / presentation?', a: 'At the end of each project, yes — a 5-minute show-off at the end of class. Parents are welcome to watch.' },
            { q: 'Free demo?', a: 'Yes — one full 1 hour live project-building class. No card required. Refund clause 2 weeks.' }
        ],
        relatedChips: [
            { href: '/python-for-beginners-kids', small: 'Start', label: 'Python for Beginners Kids' },
            { href: '/python-for-9-year-olds', small: 'Age', label: 'Python for 9 Year Olds' },
            { href: '/python-for-10-year-olds', small: 'Age', label: 'Python for 10 Year Olds' },
            { href: '/python-for-11-year-olds', small: 'Age', label: 'Python for 11 Year Olds' },
            { href: '/python-for-12-year-olds', small: 'Age', label: 'Python for 12 Year Olds' },
            { href: '/python-and-ai-classes-for-kids-teens', small: 'Course', label: 'Python & AI for Kids' },
            { href: '/coding-classes-for-girls', small: 'Special', label: 'Coding for Girls' },
            { href: '/summer-coding-camp-kids', small: 'Camp', label: 'Summer Coding Camp' }
        ],
        cityChips: CITY_CHIPS
    }

];
