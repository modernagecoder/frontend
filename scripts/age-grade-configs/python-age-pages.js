/*
 * python-age-pages.js — Python for 9 through 17 year olds (9 pages).
 */

const { PY, CITY_CHIPS } = require('./python-shared');

module.exports = [

    /* ---------- PYTHON FOR 9 YEAR OLDS ---------- */
    {
        slug: 'python-for-9-year-olds',
        pageTitle: 'Python for 9 Year Olds — First Python Programs, Turtle Graphics & Games',
        metaDescription: 'Live online Python classes for 9 year olds. Turtle graphics, number guess, tiny games and first AI taster — 1 hour sessions, 1:1 or small group. Free demo.',
        keywords: 'python for 9 year olds, python for kids, python for class 4, python for beginners kids, learn python 9 year old, turtle python for kids, first python program, kid friendly python, online python class 9 year old, easy python for kids, python game for kids, python projects 9 year olds',
        audienceType: '9 year olds (Class 4) learning Python',
        courseCode: 'PY-AGE-9',
        courseName: 'Python for 9 Year Olds',
        courseDesc: 'Live online Python classes built for 9 year olds. Turtle graphics, tiny games, number puzzles — 1 hour live sessions.',
        breadcrumbName: 'Python for 9 Year Olds',
        accent: '#3b82f6', accent2: '#f59e0b', bodyClass: 'py-age-9-page',
        badge: 'Py9', badgeLabel: 'Python · Age 9',
        badgeFontSize: 'clamp(48px, 7vw, 84px)',
        eyebrow: 'Python at age 9 · Class 4',
        h1Before: 'Python for ', h1Highlight: '9 Year Olds', h1After: ' — gentle, real, no fluff.',
        heroSub: 'Nine year olds can type short sentences and read a 5-line program. That\'s all Python asks for. Our 1 hour live classes turn that readiness into tiny working programs — number guess games, turtle drawings, a first quiz.',
        trust: [
            { big: '2,400+', sub: '9-year-olds learning Python with us' },
            { big: '4.9 / 5', sub: 'Parent rating · 280+ reviews' },
            { big: '1 hour', sub: 'Per live class, 1:1 or small group' },
            { big: '4 weeks', sub: 'To their first working Python program' }
        ],
        chips: ['First print()', 'Turtle graphics', 'First game'],
        coursesHeading: 'Python tracks made for 9-year-old hands.',
        coursesLede: 'At 9, the right Python course starts with silly outputs and draws shapes with turtle. Real code, still playful. Live, 1 hour, with a teacher who knows how to slow down.',
        courses: [PY.pythonKids, PY.aiKids, PY.pythonTeen, PY.dsaTeen, PY.flaskBackend, PY.aimlTeen, PY.dsTeen, PY.genAI],
        skipHeading: 'Already wrote a Python program on their own?',
        skipBody: 'If your 9-year-old has already tried Python on YouTube or at school, <strong>skip intro weeks</strong> and jump into <a href="/courses/python-ai-kids-masterclass" style="color:inherit;text-decoration:underline;">Python + AI projects</a>. Our demo teacher places them accurately in 10 minutes.',
        whyHeading: 'Nine is the right age to meet Python gently.',
        whyLede: 'Younger and the typing is a wall. Older and they have missed the most curious window. Nine lands in the middle — reading is fluent, imagination is wild, exam pressure is still far away.',
        whys: [
            { tag: 'Reading', title: 'They can read a 5-line program', body: 'At 9, most children read comfortably enough to follow a short Python program line by line. That is enough for print, input, a simple if, a simple loop.' },
            { tag: 'Typing', title: 'Short text is comfortable', body: 'Five-minute typing warm-ups and they are ready. We keep early programs to five lines so typing never becomes the obstacle.' },
            { tag: 'Patience', title: 'They can retry a bug', body: 'At 9, most children will try a broken program twice before asking for help. That is the exact habit real coding rewards.' }
        ],
        projectsHeading: 'Six tiny Python programs a 9 year old actually finishes.',
        projectsLede: 'Short, finishable, memorable. These are the Python projects every 9-year-old learner of ours ships in the first months.',
        projects: [
            { sticker: 'Intro', title: 'Hello, Me', desc: 'Three-line program that asks for a name and prints a greeting. First typed program that speaks back.', tags: ['print', 'input'] },
            { sticker: 'Random', title: 'Dice Roller', desc: 'Rolls a six-sided dice using random.randint. Their first import, their first random.', tags: ['random', 'functions'] },
            { sticker: 'Logic', title: 'Number Guess', desc: 'Computer picks a secret number; player guesses. First if / elif that actually does something.', tags: ['if-else'] },
            { sticker: 'Fun', title: 'Joke Generator', desc: 'Picks a random joke from a list of ten. First list. First random.choice. Always a hit.', tags: ['lists', 'random'] },
            { sticker: 'Turtle', title: 'Star Drawer', desc: 'Python turtle drawing a star using a for loop. The first time code produces visible art.', tags: ['turtle', 'for loop'] },
            { sticker: 'Create', title: 'Favourite Colour Quiz', desc: 'Three-question quiz that keeps score and prints a grade at the end. First while loop.', tags: ['while', 'score'] }
        ],
        roadmapHeading: 'Four gentle stages across about six months.',
        roadmapLede: 'At 9, pace beats everything. The stages below are what most students walk through — faster if they click fast, slower if they need time.',
        roadmap: [
            { label: 'Month 1 · Typing + print', title: 'Build the typing muscle', body: 'Five-minute typing games per class. Hello-world programs. print() and comments. Silly outputs all the way.', tags: ['typing', 'print'] },
            { label: 'Month 2 · input + random', title: 'Programs that respond', body: 'input() and random. Dice, jokes, random-fact generators. Programs stop being one-shot and start to react.', tags: ['input', 'random'] },
            { label: 'Month 3 · if-else', title: 'First branching logic', body: 'Number guess game. Simple password checker. The if / elif / else trio. Logic muscle wakes up.', tags: ['if-else', 'compare'] },
            { label: 'Month 4+ · loops + turtle', title: 'Loops and art', body: 'for and while loops. Turtle graphics star field. First quiz with score. Feels like real Python.', tags: ['for', 'while', 'turtle'] }
        ],
        compareHeading: 'Python at age 8 vs 9 vs 10.',
        compareLede: 'If you are near a boundary, this table is the plain difference.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Age 8' },
                { label: 'Age 9 (this page)' },
                { label: 'Age 10', link: '/python-for-10-year-olds' }
            ],
            rows: [
                { label: 'Program length', values: ['Rare', '3–8 lines', '10–20 lines'] },
                { label: 'First concept', values: ['Scratch first', 'print + input', 'if + loops'] },
                { label: 'Turtle graphics', values: ['Later', 'Star + square', 'Spiral + colour'] },
                { label: 'Error handling', values: ['Teacher fixes', 'Read red line', 'Try once solo'] },
                { label: 'AI tie-in', values: ['Story only', 'Demo classifier', 'First real model'] },
                { label: 'Class format', values: ['1-on-1', 'Both fine', 'Both fine'] }
            ]
        },
        reviewsHeading: 'Parents of 9 year olds — in their own words.',
        reviewsLede: 'Three recent reviews from Class 4 families doing Python.',
        reviews: [
            { initial: 'R', name: 'Ritu V.', meta: 'Parent · Delhi · 1-on-1', body: 'My son was afraid of Python because YouTube tutorials looked intimidating. Two weeks in he built a jokes program and showed it to his grandfather. First time he explained code to an adult. He is 9.' },
            { initial: 'S', name: 'Sameer K.', meta: 'Parent · Pune · Group', body: 'Small group of four Class 4 students, all doing Python together. They show each other\'s programs at the end of class. My daughter said coding is "like solving riddles". I\'ll take it.' },
            { initial: 'A', name: 'Anita M.', meta: 'Parent · Chennai · 1-on-1', body: 'Teacher goes slow. No rush. By month three my son was writing number-guess games on his own. He is 9 and this is the first class that does not feel like extra tuition.' }
        ],
        faqs: [
            { q: 'Is Python too hard for a 9 year old?', a: 'Not if it is taught right. We start with 3-line programs and only add one new idea at a time. Most 9-year-olds write a working Python program by week 4.' },
            { q: 'Do you start with Scratch first?', a: 'Not for this course — this is a dedicated Python track. If your child has never coded, we still handle that here; the first 3 weeks are Python-from-zero.' },
            { q: 'Will coding affect school marks?', a: 'Two 1-hour classes a week fits alongside Class 4 homework comfortably. Many parents report improved maths problem-solving as a bonus.' },
            { q: 'What do we need at home?', a: 'Any laptop from the last 5 years. Stable internet, webcam, headphones. Python is a 30 MB install — we walk you through it in session 1.' },
            { q: '1-on-1 or group?', a: 'Both work at 9. Group (4–6 kids) is great for social learners. 1-on-1 is best for faster pace or shy children.' },
            { q: 'What Python version do you use?', a: 'Python 3.x — the current standard. We use Thonny as the editor at this age because the error messages are friendly.' },
            { q: 'Is there homework?', a: '15 minutes weekly. Usually "finish your own project" rather than drill exercises. Never pressured.' },
            { q: 'Free demo?', a: 'Yes — one full 1 hour live class with a real teacher, no card required. Refund clause for 2 weeks if it does not fit.' }
        ],
        relatedChips: [
            { href: '/python-for-10-year-olds', small: 'Older', label: 'Python for 10 Year Olds' },
            { href: '/python-for-class-6', small: 'Grade', label: 'Python for Class 6' },
            { href: '/coding-for-9-year-olds', small: 'Coding', label: 'Coding for 9 Year Olds' },
            { href: '/python-for-beginners-kids', small: 'Beginner', label: 'Python for Beginners Kids' },
            { href: '/python-projects-for-kids', small: 'Projects', label: 'Python Projects for Kids' },
            { href: '/python-and-ai-classes-for-kids-teens', small: 'Course', label: 'Python & AI for Kids' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/coding-classes-for-girls', small: 'Special', label: 'Coding for Girls' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- PYTHON FOR 10 YEAR OLDS ---------- */
    {
        slug: 'python-for-10-year-olds',
        pageTitle: 'Python for 10 Year Olds — Real Python Programs, Turtle Art & Mini Games',
        metaDescription: 'Live online Python classes for 10 year olds. Real Python programs, turtle graphics, a number guess game, first AI project — 1 hour live sessions, 1:1 or group.',
        keywords: 'python for 10 year olds, python for kids 10, python for class 5, learn python 10 year old, python course for kids, python games 10 year old, turtle python for kids, online python class for kids, best python course 10 year old, python project class 5, python ai kids, python for 10 year old beginner',
        audienceType: '10 year olds (Class 5) learning Python',
        courseCode: 'PY-AGE-10',
        courseName: 'Python for 10 Year Olds',
        courseDesc: 'Live online Python for 10 year olds. Real programs, turtle graphics, first AI project. 1 hour live classes, 1:1 or small group.',
        breadcrumbName: 'Python for 10 Year Olds',
        accent: '#14b8a6', accent2: '#f59e0b', bodyClass: 'py-age-10-page',
        badge: 'Py10', badgeLabel: 'Python · Age 10',
        badgeFontSize: 'clamp(44px, 6.5vw, 76px)',
        eyebrow: 'Python at age 10 · Class 5',
        h1Before: 'Python for ', h1Highlight: '10 Year Olds', h1After: ' — the age it finally clicks.',
        heroSub: 'Ten is the sweet spot for Python. Reading is strong, typing is comfortable, curiosity peaks. Our 1 hour live classes take that readiness and turn it into real 15-line programs, a quiz app, a turtle spiral and a first AI experiment.',
        trust: [
            { big: '3,100+', sub: '10-year-olds learning Python' },
            { big: '4.9 / 5', sub: 'Parent rating · 360+ reviews' },
            { big: '1 hour', sub: 'Per live class, 1:1 or group' },
            { big: '6 weeks', sub: 'To their first portfolio Python project' }
        ],
        chips: ['Loops fluent', 'Turtle art', 'First AI'],
        coursesHeading: 'Python courses that fit a 10-year-old\'s focus.',
        coursesLede: 'At 10, kids can hold a 30-line program in their head and follow a short YouTube tutorial between classes. The courses below are where they thrive.',
        courses: [PY.pythonKids, PY.aiKids, PY.pythonTeen, PY.aimlTeen, PY.dsTeen, PY.flaskBackend, PY.dsaTeen, PY.autoPy],
        skipHeading: 'Already printing and looping in Python?',
        skipBody: 'If your 10-year-old already knows print, input and simple loops, <strong>skip basics</strong> and go to <a href="/courses/python-ai-kids-masterclass" style="color:inherit;text-decoration:underline;">Python + AI projects</a> or the <a href="/courses/kids-ai-mastery-course" style="color:inherit;text-decoration:underline;">AI Tools for Kids</a> track. Level check in the free demo.',
        whyHeading: 'Ten is the clearest "yes" for Python.',
        whyLede: 'Below 10, Python is a stretch. Above 10, school timetables tighten. At 10, a child has exactly the right reading, typing and focus to learn Python properly — and still has years before board pressure.',
        whys: [
            { tag: 'Cognitive', title: 'Variables finally make sense', body: 'At 10, most children can hold the idea that "a box called x holds a value that can change". That is the mental step Python actually asks for.' },
            { tag: 'Typing', title: '20-line programs are comfortable', body: 'Typing speed at 10 is enough for real programs. We keep examples tight, but students can write a 20-line Python program without fatigue.' },
            { tag: 'Timing', title: 'Years before boards matter', body: 'A 10-year-old has a full 5-year runway before Class 10 boards. That is enormous for a portfolio — most strong Class 12 portfolios we see started around this age.' }
        ],
        projectsHeading: 'Six Python projects a 10 year old keeps.',
        projectsLede: 'Each of these is designed for age 10 — not borrowed from older grades. Small, finished, proudly shown.',
        projects: [
            { sticker: 'Game', title: 'Number Guess', desc: 'Binary-search style hot/cold number guessing game. First serious use of loops + conditions.', tags: ['loops', 'if-else'] },
            { sticker: 'Turtle', title: 'Spiral Art', desc: 'Colour-changing spiral drawn with turtle using nested loops. Beautiful output, deep logic.', tags: ['turtle', 'nested loops'] },
            { sticker: 'Maths', title: 'Class 5 Maths Quiz', desc: 'Python program that drills multiplication and division, keeps score, levels up. Reinforces school maths too.', tags: ['functions', 'score'] },
            { sticker: 'Random', title: 'Magic 8 Ball', desc: 'Ask a yes/no question, get a random fortune. Lists, random.choice, and a fun use-case.', tags: ['lists', 'random'] },
            { sticker: 'AI', title: 'Teachable Machine Python', desc: 'Train a simple image classifier, then call the model from Python. First real AI moment.', tags: ['AI', 'classifier'] },
            { sticker: 'Data', title: 'Dice Stats Chart', desc: 'Roll 1,000 dice in Python, print a bar chart of results. First brush with data analysis.', tags: ['loops', 'count'] }
        ],
        roadmapHeading: 'Four stages across roughly seven months.',
        roadmapLede: 'This is the path most 10-year-olds follow with us. Paced to keep interest high and confidence building every single week.',
        roadmap: [
            { label: 'Month 1 · Foundations', title: 'print, input, random', body: 'Tiny silly programs. Dice roller, jokes generator, greeting machine. The goal is "I made this" every single class.', tags: ['print', 'input', 'random'] },
            { label: 'Month 2 · Logic', title: 'if-else + comparisons', body: 'Number guess game. Age category checker. Simple password validator. Branching becomes a tool, not a topic.', tags: ['if-else', 'logic'] },
            { label: 'Month 3–4 · Loops', title: 'for + while + lists', body: 'Pattern printing. Lists of favourite things. Magic 8 ball. Loops become the hammer that fits most problems.', tags: ['for', 'while', 'lists'] },
            { label: 'Month 5+ · Graphics + AI', title: 'Turtle + Teachable Machine', body: 'Spiral art and colour patterns in turtle. Teachable Machine model called from Python. First proud portfolio pieces.', tags: ['turtle', 'AI'] }
        ],
        compareHeading: 'Python at 9 vs 10 vs 11.',
        compareLede: 'If your child is near a boundary, this is the plain difference.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Age 9', link: '/python-for-9-year-olds' },
                { label: 'Age 10 (this page)' },
                { label: 'Age 11', link: '/python-for-11-year-olds' }
            ],
            rows: [
                { label: 'Program length', values: ['3–8 lines', '15–25 lines', '30–50 lines'] },
                { label: 'Loops comfort', values: ['Starting', 'Comfortable', 'Fluent'] },
                { label: 'Turtle art', values: ['Star + square', 'Spiral + colour', 'Multi-pattern'] },
                { label: 'Lists / dicts', values: ['Simple lists', 'Lists + basics', 'Dicts too'] },
                { label: 'AI depth', values: ['Demo', 'Teachable Machine call', 'First sklearn'] },
                { label: 'Class size', values: ['Both fine', 'Both fine', 'Both fine'] }
            ]
        },
        reviewsHeading: 'Class 5 parents on Python.',
        reviewsLede: 'Three recent reviews from families of 10-year-old Python learners.',
        reviews: [
            { initial: 'P', name: 'Prakash D.', meta: 'Parent · Noida · 1-on-1', body: 'Son is Class 5. After 2 months he writes 15-line Python programs without looking at notes. He built a maths quiz that his cousins play. This is the first coding class where I actually understand what he learned.' },
            { initial: 'M', name: 'Manali G.', meta: 'Parent · Mumbai · Group', body: 'Group of 5 Class 5 kids. They show their turtle spirals to each other — you should see the pride. Teacher is patient and specific. My daughter\'s school computer teacher now asks her to help in lab.' },
            { initial: 'V', name: 'Vishal T.', meta: 'Parent · Bengaluru · 1-on-1', body: 'We tried three coding apps before this. All were videos. This is the first live class that actually watches him type. He has a Teachable Machine project and a dice-stats Python program. He is 10.' }
        ],
        faqs: [
            { q: 'What can a 10 year old really do in Python?', a: 'By month 3, a typical 10-year-old writes 20-line Python programs with loops, lists and functions. By month 6 they have a turtle art portfolio and have called an AI model from Python.' },
            { q: 'Is 10 the best age for Python?', a: 'Arguably yes. Reading, typing and focus all line up. Earlier is possible with the right teacher; later works too but means missing the most curious window.' },
            { q: 'Do you cover CBSE Class 5 Python?', a: 'Yes. Most CBSE Class 5 books now include a Python intro. Our curriculum covers that chapter in week 1–2 and then goes well beyond.' },
            { q: 'What editor do you use?', a: 'Thonny at age 10 — its error messages are child-friendly. We move to VS Code at age 13+.' },
            { q: 'How much typing is needed?', a: 'Short programs, 15 to 25 lines. Comfortable typing speed is enough. We do light typing warm-ups for the first month.' },
            { q: 'Can a 10 year old learn AI through Python?', a: 'Yes — at the taster level. Teachable Machine + a 5-line Python script that calls the model. No calculus, no deep maths.' },
            { q: 'Does this replace a school coding class?', a: 'It complements. We typically run ahead of school, so school chapters become revision. We do not replace the school syllabus.' },
            { q: 'Free demo?', a: 'Yes. One full 1 hour live class with a real Python teacher. No card needed. Refund clause 2 weeks if fit is off.' }
        ],
        relatedChips: [
            { href: '/python-for-9-year-olds', small: 'Younger', label: 'Python for 9 Year Olds' },
            { href: '/python-for-11-year-olds', small: 'Older', label: 'Python for 11 Year Olds' },
            { href: '/python-for-class-6', small: 'Grade', label: 'Python for Class 6' },
            { href: '/python-projects-for-kids', small: 'Projects', label: 'Python Projects for Kids' },
            { href: '/coding-for-10-year-olds', small: 'Coding', label: 'Coding for 10 Year Olds' },
            { href: '/python-and-ai-classes-for-kids-teens', small: 'Course', label: 'Python & AI for Kids' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/coding-for-class-5', small: 'Class', label: 'Coding for Class 5' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- PYTHON FOR 11 YEAR OLDS ---------- */
    {
        slug: 'python-for-11-year-olds',
        pageTitle: 'Python for 11 Year Olds — Functions, Files & First AI Projects for Class 6',
        metaDescription: 'Live Python classes for 11 year olds. Functions, files, lists, first sklearn AI project, turtle art — aligned to CBSE Class 6 Code 166. 1 hour live sessions.',
        keywords: 'python for 11 year olds, python for class 6, cbse class 6 python, python for kids 11, learn python 11 year old, python functions for kids, python for class 6 cbse, code 166 python, python projects 11 year old, python ai 11 year old, python course class 6, best python class for 11 year old',
        audienceType: '11 year olds (Class 6) learning Python',
        courseCode: 'PY-AGE-11',
        courseName: 'Python for 11 Year Olds',
        courseDesc: 'Live online Python for 11 year olds. Functions, files, first sklearn AI. CBSE Class 6 aligned. 1 hour live classes.',
        breadcrumbName: 'Python for 11 Year Olds',
        accent: '#3b82f6', accent2: '#14b8a6', bodyClass: 'py-age-11-page',
        badge: 'Py11', badgeLabel: 'Python · Age 11',
        badgeFontSize: 'clamp(44px, 6.5vw, 76px)',
        eyebrow: 'Python at age 11 · Class 6',
        h1Before: 'Python for ', h1Highlight: '11 Year Olds', h1After: ' — where functions start to click.',
        heroSub: 'Eleven is the year CBSE formally introduces Python. Our 1 hour live classes take that starter and push it into fluent territory — functions, files, lists, a first sklearn AI project and a small calculator app.',
        trust: [
            { big: '3,500+', sub: '11-year-olds in Python classes' },
            { big: '4.9 / 5', sub: 'Parent rating · 410+ reviews' },
            { big: '1 hour', sub: 'Live class, 1:1 or small group' },
            { big: '10 weeks', sub: 'To a 50-line Python project' }
        ],
        chips: ['Functions fluent', 'Files + lists', 'First sklearn'],
        coursesHeading: 'Python tracks matched to Class 6 readiness.',
        coursesLede: 'At 11, Python gets serious. Functions, files, small sklearn. These are the tracks that fit — each live, 1 hour, with a teacher who matches pace.',
        courses: [PY.pythonKids, PY.pythonTeen, PY.aimlTeen, PY.aiKids, PY.dsTeen, PY.flaskBackend, PY.dsaTeen, PY.autoPy],
        skipHeading: 'Already writes Python functions on their own?',
        skipBody: 'If your 11-year-old already writes functions and uses lists fluently, <strong>skip basics</strong> and move to <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI & ML</a> or <a href="/courses/python-complete-masterclass-teens" style="color:inherit;text-decoration:underline;">Python Masterclass</a>. Demo teacher confirms level.',
        whyHeading: 'Eleven is where Python stops being toys.',
        whyLede: 'Functions, files and lists are the three ideas that turn Python from a novelty into a real tool. At 11, all three land — and the programs start looking like software.',
        whys: [
            { tag: 'School', title: 'CBSE Code 166 begins Python', body: 'CBSE Class 6 Code 166 formally introduces Python. A student who goes deep with us walks into every school chapter already fluent.' },
            { tag: 'Functions', title: 'The big unlock', body: 'A function is "a tool with a name". Once this lands, every program becomes smaller and cleaner. Eleven is where this lands for most kids.' },
            { tag: 'AI taste', title: 'First real sklearn', body: 'Not Teachable Machine this time — actual sklearn on a tiny CSV. Training, testing, accuracy as words they use correctly.' }
        ],
        projectsHeading: 'Six projects that feel like software.',
        projectsLede: 'Unique to age 11 — not recycled from younger grades. Each one introduces exactly one new idea while reusing the last one.',
        projects: [
            { sticker: 'Python', title: 'Rock–Paper–Scissors', desc: 'Best of five against the computer. First real use of random + conditions + a game loop.', tags: ['random', 'loops'] },
            { sticker: 'Python', title: 'Calculator with Functions', desc: 'Add, subtract, multiply, divide — each as its own function. Error handling for divide by zero.', tags: ['functions', 'errors'] },
            { sticker: 'Files', title: 'High Score Tracker', desc: 'A quiz game that saves high scores to a file. First open(), first read/write.', tags: ['files', 'open'] },
            { sticker: 'Turtle', title: 'Star Field', desc: 'Hundred-star night sky drawn with nested loops and random placement. Gorgeous output.', tags: ['turtle', 'random'] },
            { sticker: 'AI', title: 'sklearn Fruit Classifier', desc: 'Train a simple model on fruit weights/colours (CSV). First real sklearn with accuracy discussed.', tags: ['sklearn', 'csv'] },
            { sticker: 'Quiz', title: '10-Question Quiz', desc: 'Quiz from a list of dicts. Keeps score. Prints final grade. Introduces dictionaries.', tags: ['dicts', 'lists'] }
        ],
        roadmapHeading: 'Four stages. Roughly eight months.',
        roadmapLede: 'Paced around CBSE Class 6 calendar. We cover every Code 166 chapter a week before school does, then go beyond.',
        roadmap: [
            { label: 'Term 1 · Python II', title: 'Functions + files', body: 'Beyond print + if. Functions as reusable tools. File read/write. Error reading. Programs start to feel like software.', tags: ['functions', 'files'] },
            { label: 'Term 1 · Lists + dicts', title: 'Collections of data', body: 'Lists and dictionaries. The tools that turn "a thing" into "many things". Quiz apps, score tables, simple databases.', tags: ['lists', 'dicts'] },
            { label: 'Term 2 · AI intro', title: 'First sklearn classifier', body: 'sklearn on a tiny CSV dataset. Training vs testing. Accuracy. The vocabulary of AI introduced with real code.', tags: ['sklearn', 'accuracy'] },
            { label: 'Term 3 · Polish', title: 'Portfolio-ready projects', body: 'Three projects polished — readme, cleanup, a small demo video. First GitHub repo for the ones ready.', tags: ['git', 'readme'] }
        ],
        compareHeading: 'Python at age 10 vs 11 vs 12.',
        compareLede: 'Honest differences by year at the Python level.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Age 10', link: '/python-for-10-year-olds' },
                { label: 'Age 11 (this page)' },
                { label: 'Age 12', link: '/python-for-12-year-olds' }
            ],
            rows: [
                { label: 'Program length', values: ['15–25 lines', '30–50 lines', '60–100 lines'] },
                { label: 'Functions', values: ['Starting', 'Comfortable', 'Fluent'] },
                { label: 'Files', values: ['Not yet', 'Read / write', 'CSV + parsing'] },
                { label: 'AI', values: ['Teachable Machine', 'First sklearn', 'Real datasets'] },
                { label: 'Board link', values: ['Class 5 Python intro', 'CBSE Code 166', 'Class 7 formal'] },
                { label: 'Editor', values: ['Thonny', 'Thonny', 'Thonny / VS Code'] }
            ]
        },
        reviewsHeading: 'Class 6 parents on the Python leap.',
        reviewsLede: 'Three recent reviews from Class 6 Python learners and their parents.',
        reviews: [
            { initial: 'A', name: 'Arjun B.', meta: 'Parent · Hyderabad · 1-on-1', body: 'Son is Class 6 CBSE. Code 166 in school is very basic — he was bored. Here the teacher pushes to functions, files and even a sklearn classifier. At 11 he understands what training data means. That surprised me.' },
            { initial: 'N', name: 'Neha K.', meta: 'Parent · Delhi · Group', body: 'Small group of Class 6 Python kids. They review each other\'s code. My daughter\'s Rock-Paper-Scissors has cleaner structure than my office interns. Teacher insists on readable code from day one.' },
            { initial: 'R', name: 'Rohit M.', meta: 'Parent · Pune · 1-on-1', body: 'We switched from a recorded-video Python course. Night and day. Live teacher watches him type, catches small errors, explains why. His programs are real software now, not scripts.' }
        ],
        faqs: [
            { q: 'Does this cover CBSE Class 6 Code 166 Python?', a: 'Fully and beyond. We cover every Code 166 Python chapter plus functions, files and a first sklearn project — which the textbook does not touch.' },
            { q: 'Is sklearn really doable at 11?', a: 'Yes — at the classifier-on-CSV level. No calculus. A 10-line training script, and the vocabulary of AI explained in plain English.' },
            { q: 'How long until my 11 year old writes real programs?', a: 'By week 4, most students write 30-line programs with functions. By week 8, they are saving data to files and using dictionaries comfortably.' },
            { q: 'Do you teach OOP at 11?', a: 'Lightly. We introduce classes as "a blueprint for something" using a dog/bank-account example. Deep OOP comes at age 13.' },
            { q: 'What about Olympiads?', a: 'Optional track for NCO, CCO, CodeKraft. Python is accepted in many of these. Separate from the main weekly curriculum.' },
            { q: '1-on-1 or group for 11?', a: 'Both work. Group is great for social learners and a bit cheaper. 1-on-1 is best for specific goals like Olympiads or accelerated pace.' },
            { q: 'What editor at 11?', a: 'Still Thonny mostly. We introduce VS Code for a session or two at the end of the year so the jump at 12 is smooth.' },
            { q: 'Free demo?', a: 'Yes. One full 1 hour live class. No card required. Refund clause 2 weeks.' }
        ],
        relatedChips: [
            { href: '/python-for-10-year-olds', small: 'Younger', label: 'Python for 10 Year Olds' },
            { href: '/python-for-12-year-olds', small: 'Older', label: 'Python for 12 Year Olds' },
            { href: '/python-for-class-6', small: 'Grade', label: 'Python for Class 6' },
            { href: '/python-for-class-7', small: 'Grade', label: 'Python for Class 7' },
            { href: '/python-projects-for-kids', small: 'Projects', label: 'Python Projects for Kids' },
            { href: '/coding-for-11-year-olds', small: 'Coding', label: 'Coding for 11 Year Olds' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/python-and-ai-classes-for-kids-teens', small: 'Course', label: 'Python & AI for Kids' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- PYTHON FOR 12 YEAR OLDS ---------- */
    {
        slug: 'python-for-12-year-olds',
        pageTitle: 'Python for 12 Year Olds — OOP, Pygame, sklearn & Real Projects for Class 7',
        metaDescription: 'Live online Python for 12 year olds. OOP basics, Pygame projects, sklearn with real CSVs, matplotlib charts — aligned to Class 7 syllabus. 1 hour classes.',
        keywords: 'python for 12 year olds, python for class 7, cbse class 7 python, python oop for kids, python for 12 year old beginner, python pygame for kids, python matplotlib, python sklearn kids, python project 12 year old, python for kids class 7, best python class for 12 year old, python ai class 7',
        audienceType: '12 year olds (Class 7) learning Python',
        courseCode: 'PY-AGE-12',
        courseName: 'Python for 12 Year Olds',
        courseDesc: 'Live online Python for 12 year olds. OOP basics, Pygame, sklearn + matplotlib, Class 7 aligned. 1 hour live classes.',
        breadcrumbName: 'Python for 12 Year Olds',
        accent: '#6366f1', accent2: '#14b8a6', bodyClass: 'py-age-12-page',
        badge: 'Py12', badgeLabel: 'Python · Age 12',
        badgeFontSize: 'clamp(44px, 6.5vw, 76px)',
        eyebrow: 'Python at age 12 · Class 7',
        h1Before: 'Python for ', h1Highlight: '12 Year Olds', h1After: ' — bridging to real software.',
        heroSub: 'Twelve is the bridge year. Old enough for OOP, Pygame and a real sklearn project with charts. Young enough that boards and streams are still far away. Our 1 hour live classes make the bridge count.',
        trust: [
            { big: '3,800+', sub: '12-year-olds in Python classes' },
            { big: '4.9 / 5', sub: 'Parent rating · 450+ reviews' },
            { big: '1 hour', sub: 'Live class, 1:1 or group' },
            { big: '10 weeks', sub: 'To a deployed Python project' }
        ],
        chips: ['OOP intro', 'Pygame', 'Matplotlib charts'],
        coursesHeading: 'Python tracks for a 12 year old ready to go deeper.',
        coursesLede: 'At 12, the right tracks move beyond the basics. Real OOP, real sklearn, real Pygame. Every course live, 1 hour, teacher-led.',
        courses: [PY.pythonTeen, PY.aimlTeen, PY.dsaTeen, PY.dsTeen, PY.flaskBackend, PY.autoPy, PY.pythonKids, PY.aiKids],
        skipHeading: 'Already handling classes and objects?',
        skipBody: 'If your 12-year-old writes classes comfortably, <strong>skip ahead</strong> to <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI & ML</a>, <a href="/courses/backend-coding-masterclass-for-teens" style="color:inherit;text-decoration:underline;">Flask backend</a> or <a href="/courses/problem-solving-dsa-masterclass-teens" style="color:inherit;text-decoration:underline;">DSA</a>. Free demo places them.',
        whyHeading: 'Twelve is when the toolbox grows.',
        whyLede: 'At 12, a Python learner can handle classes, modules, a Pygame game, a matplotlib chart and a sklearn script — all in the same term. The range is new, and it matters for what comes next.',
        whys: [
            { tag: 'Range', title: 'Multiple tools in one term', body: 'At 12, we no longer have to pick "just games" or "just AI". Students can handle a Pygame project and a sklearn script in parallel without confusion.' },
            { tag: 'OOP', title: 'Classes and objects click', body: 'The dog-with-name-and-bark example finally makes sense. Once classes click, every Python program becomes cleaner and more real.' },
            { tag: 'Data', title: 'First brush with charts and CSVs', body: 'Matplotlib plots, pandas on small CSVs. Data as a vocabulary starts here — and this is what colleges care about later.' }
        ],
        projectsHeading: 'Six Python projects at 12 that show up on GitHub.',
        projectsLede: 'Each one is designed to be GitHub-worthy — small, clean, finishable in 2–3 classes.',
        projects: [
            { sticker: 'Game', title: 'Pygame Pong', desc: 'Classic Pong clone in Pygame — two paddles, one ball, score. First real game library.', tags: ['pygame'] },
            { sticker: 'OOP', title: 'Bank Account Class', desc: 'A BankAccount class with deposit, withdraw, balance methods. First real OOP example.', tags: ['oop', 'classes'] },
            { sticker: 'AI', title: 'sklearn Iris Classifier', desc: 'The classic iris dataset. Train/test split, accuracy score, matplotlib visualisation.', tags: ['sklearn', 'iris'] },
            { sticker: 'Data', title: 'Dice Stats Chart', desc: 'Simulate 10,000 rolls and plot the distribution with matplotlib. Stats + Python in one.', tags: ['matplotlib', 'stats'] },
            { sticker: 'Web', title: 'API Fetcher', desc: 'Python script that fetches weather or jokes from a public API and prints nicely.', tags: ['requests', 'json'] },
            { sticker: 'Tools', title: 'Todo CLI with Files', desc: 'Command-line todo app that saves to JSON file. Real software design.', tags: ['json', 'cli'] }
        ],
        roadmapHeading: 'Four stages across Class 7.',
        roadmapLede: 'Matched to school terms. We cover a range of Python in depth — OOP, AI, data, games.',
        roadmap: [
            { label: 'Term 1 · OOP + modules', title: 'Classes, methods, inheritance basics', body: 'Move beyond scripts. Classes with fields and methods. Simple inheritance. Bank account and pet classes.', tags: ['oop', 'classes'] },
            { label: 'Term 1–2 · Pygame', title: 'First real game library', body: 'Pygame basics. Pong clone, then a brick breaker. Teaches the game loop properly.', tags: ['pygame', 'game loop'] },
            { label: 'Term 2 · sklearn + matplotlib', title: 'Real data projects', body: 'Iris classifier. Dice stats chart. First real exposure to data workflows.', tags: ['sklearn', 'matplotlib'] },
            { label: 'Term 3 · APIs + polish', title: 'Public APIs + GitHub', body: 'Fetching data from APIs with requests. First GitHub repos with readme. Projects deployed for friends.', tags: ['requests', 'git'] }
        ],
        compareHeading: 'Python at 11 vs 12 vs 13.',
        compareLede: 'What changes year by year.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Age 11', link: '/python-for-11-year-olds' },
                { label: 'Age 12 (this page)' },
                { label: 'Age 13', link: '/python-for-13-year-olds' }
            ],
            rows: [
                { label: 'Program length', values: ['30–50 lines', '60–100 lines', '100+ lines'] },
                { label: 'OOP', values: ['Intro', 'Classes + methods', 'Inheritance + polymorphism'] },
                { label: 'Games', values: ['Turtle', 'Pygame Pong', 'Pygame platformer'] },
                { label: 'AI depth', values: ['First sklearn', 'Iris + charts', 'Real datasets + evaluation'] },
                { label: 'APIs', values: ['Not yet', 'Public APIs', 'Own Flask API'] },
                { label: 'GitHub', values: ['Not yet', 'First repo', 'Active repos'] }
            ]
        },
        reviewsHeading: 'Class 7 parents on their 12 year olds.',
        reviewsLede: 'Three recent reviews from Class 7 families doing Python.',
        reviews: [
            { initial: 'S', name: 'Sushmita R.', meta: 'Parent · Kolkata · 1-on-1', body: 'My daughter is Class 7. She built a Pygame Pong game and an iris classifier in the same term. The teacher moves between game, OOP and sklearn smoothly — no cognitive whiplash.' },
            { initial: 'T', name: 'Tarun H.', meta: 'Parent · Bengaluru · Group', body: 'Small group of Class 7 Python kids. My son\'s GitHub has 4 repos now. His readme writing is also improving — the teacher actually corrects readmes, which I did not expect.' },
            { initial: 'I', name: 'Isha P.', meta: 'Parent · Mumbai · 1-on-1', body: 'We picked 1-on-1 because my daughter is ahead. Teacher took her straight to matplotlib and sklearn. She now visualises her cricket-score dataset on her own. This is the first class that treats her as a real learner.' }
        ],
        faqs: [
            { q: 'Can a 12 year old really do OOP?', a: 'Yes. We use the dog-with-name-and-bark example and build from there. Classes with fields and methods make sense at 12 if taught patiently.' },
            { q: 'Is Pygame hard at 12?', a: 'The game loop takes 2 sessions to click. After that, most 12-year-olds build Pong and a small brick breaker. Not too hard, not too easy — perfect.' },
            { q: 'Do you teach pandas at 12?', a: 'Lightly — enough to read a CSV, filter, sort. Full pandas comes at 14+. At 12, pandas is "a better way to handle CSVs".' },
            { q: 'Is sklearn at 12 realistic?', a: 'Yes, at the classifier-on-CSV level with iris or similar tiny datasets. Accuracy, training/testing split — all explained in plain language.' },
            { q: 'VS Code or Thonny at 12?', a: 'We transition to VS Code around age 12. Thonny remains fine for debugging. VS Code opens up extensions and GitHub integration.' },
            { q: 'Is GitHub appropriate at 12?', a: 'Yes — with parent email. We help set up the account and first repo. Code for projects they are proud of.' },
            { q: 'How much time weekly?', a: 'Two 1-hour sessions + 20 minutes homework. Fits alongside Class 7 tuition easily.' },
            { q: 'Free demo?', a: 'Yes — one full 1 hour class. Refund clause 2 weeks if fit is off.' }
        ],
        relatedChips: [
            { href: '/python-for-11-year-olds', small: 'Younger', label: 'Python for 11 Year Olds' },
            { href: '/python-for-13-year-olds', small: 'Older', label: 'Python for 13 Year Olds' },
            { href: '/python-for-class-7', small: 'Grade', label: 'Python for Class 7' },
            { href: '/python-for-class-8', small: 'Grade', label: 'Python for Class 8' },
            { href: '/python-projects-for-kids', small: 'Projects', label: 'Python Projects for Kids' },
            { href: '/coding-for-12-year-olds', small: 'Coding', label: 'Coding for 12 Year Olds' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/python-and-ai-classes-for-kids-teens', small: 'Course', label: 'Python & AI' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- PYTHON FOR 13 YEAR OLDS ---------- */
    {
        slug: 'python-for-13-year-olds',
        pageTitle: 'Python for 13 Year Olds — OOP, Flask APIs, sklearn ML & Portfolio Projects',
        metaDescription: 'Python classes for 13 year olds. OOP with inheritance, Flask REST APIs, sklearn ML with Kaggle datasets — build a real portfolio. 1 hour live classes.',
        keywords: 'python for 13 year olds, python for class 8, python oop for teens, flask for teens, sklearn ml teens, python for 13 year old, python portfolio teen, python projects class 8, python for 8th grade, cbse class 8 python, best python class 13 year old, python ai class 8 teens',
        audienceType: '13 year olds (Class 8) learning Python',
        courseCode: 'PY-AGE-13',
        courseName: 'Python for 13 Year Olds',
        courseDesc: 'Live online Python for 13 year olds. OOP, Flask, sklearn ML, portfolio projects. 1 hour live classes, 1:1 or group.',
        breadcrumbName: 'Python for 13 Year Olds',
        accent: '#a855f7', accent2: '#ec4899', bodyClass: 'py-age-13-page',
        badge: 'Py13', badgeLabel: 'Python · Age 13',
        badgeFontSize: 'clamp(44px, 6.5vw, 76px)',
        eyebrow: 'Python at age 13 · Class 8',
        h1Before: 'Python for ', h1Highlight: '13 Year Olds', h1After: ' — portfolio-grade, teen-real.',
        heroSub: 'Thirteen is the turning point. Old enough for deep OOP, Flask APIs, sklearn on real Kaggle datasets. Our 1 hour live classes build a GitHub portfolio that reads real — the kind a Class 12 student will thank you for.',
        trust: [
            { big: '3,200+', sub: '13-year-olds in Python classes' },
            { big: '4.9 / 5', sub: 'Parent rating · 390+ reviews' },
            { big: '1 hour', sub: 'Live class, 1:1 or group' },
            { big: '4 projects', sub: 'GitHub portfolio in 6 months' }
        ],
        chips: ['OOP deep', 'Flask API', 'Kaggle dataset'],
        coursesHeading: 'Python tracks for a 13 year old ready for real tools.',
        coursesLede: 'At 13, the best Python courses use the same tools professional developers use — Flask, sklearn, pandas, Git. Every class live, 1 hour.',
        courses: [PY.pythonTeen, PY.aimlTeen, PY.dsaTeen, PY.flaskBackend, PY.dsTeen, PY.autoPy, PY.genAI, PY.mlPro],
        skipHeading: 'Already deploying Python projects?',
        skipBody: 'If your teen has deployed Python projects, <strong>skip review</strong> and go directly to <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI & ML</a>, <a href="/courses/data-science-complete-masterclass-college" style="color:inherit;text-decoration:underline;">Data Science</a>, or <a href="/courses/complete-generative-ai-masterclass-college" style="color:inherit;text-decoration:underline;">Generative AI</a>. Free demo level check.',
        whyHeading: 'Thirteen is when Python becomes an identity.',
        whyLede: 'A 13-year-old who likes Python starts side projects without being asked, joins Discords, watches Fireship on YouTube. Our job shifts from teaching to coaching — pointing at the right next challenge.',
        whys: [
            { tag: 'Ownership', title: 'They bring project ideas', body: 'At 13, most students bring ideas to class. A weather bot. A Twitter-style feed. A dataset they found on Kaggle. We build skills around their ideas.' },
            { tag: 'GitHub', title: 'Real commits, real repos', body: 'Thirteen is the right age for a proper GitHub profile. First merged PR, first readme, first deployed project. By 16 this profile looks serious.' },
            { tag: 'Ecosystem', title: 'pip + venv + requirements.txt', body: 'Proper project setup — virtual environments, requirements files, package installation. The grown-up Python workflow enters here.' }
        ],
        projectsHeading: 'Six portfolio-grade Python projects at 13.',
        projectsLede: 'Each of these lives on GitHub with a readme. Each one teaches one thing that matters for CS later.',
        projects: [
            { sticker: 'Python', title: 'OOP Todo App', desc: 'CLI todo app with Task and Project classes, inheritance, file storage in JSON.', tags: ['oop', 'json'] },
            { sticker: 'API', title: 'Flask REST API', desc: 'First Flask app — routes, GET/POST, a tiny JSON endpoint tested in Postman.', tags: ['flask', 'rest'] },
            { sticker: 'AI', title: 'Kaggle Housing Predictor', desc: 'Real Kaggle dataset, linear regression, cross-validation, metrics explained.', tags: ['sklearn', 'kaggle'] },
            { sticker: 'Data', title: 'Pandas Cricket Stats', desc: 'CSV of IPL stats cleaned in pandas, charts in matplotlib. First proper data project.', tags: ['pandas', 'charts'] },
            { sticker: 'Automate', title: 'Auto-Rename Photos', desc: 'A Python script that renames all photos in a folder by date taken. First real automation.', tags: ['os', 'exif'] },
            { sticker: 'Game', title: 'Pygame Platformer', desc: 'Full platformer with levels, score, sound. Published to itch.io. A proud portfolio piece.', tags: ['pygame', 'levels'] }
        ],
        roadmapHeading: 'Four stages across about nine months.',
        roadmapLede: 'Paced around Class 8. We push depth, not hours.',
        roadmap: [
            { label: 'Term 1 · Python advanced', title: 'OOP, venv, packaging', body: 'Deep OOP — inheritance, polymorphism, encapsulation. Proper project setup with venv and requirements.txt.', tags: ['oop', 'venv'] },
            { label: 'Term 1–2 · Flask', title: 'First web API', body: 'Flask basics. Build a REST API with 3 routes. Test in Postman. Deploy to Render.', tags: ['flask', 'deploy'] },
            { label: 'Term 2 · ML deep', title: 'sklearn with Kaggle', body: 'A real Kaggle dataset — housing, wine, titanic. Full train/test split. Metrics. Matplotlib visualisation.', tags: ['sklearn', 'kaggle'] },
            { label: 'Term 3 · Polish + OSS', title: 'GitHub portfolio + first PR', body: 'Four projects cleaned up with readmes on GitHub. A first merged PR to a small open-source project. Small, but real.', tags: ['github', 'oss'] }
        ],
        compareHeading: 'Python at 12 vs 13 vs 14.',
        compareLede: 'Thirteen is a clear rung up. This is what changes.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Age 12', link: '/python-for-12-year-olds' },
                { label: 'Age 13 (this page)' },
                { label: 'Age 14', link: '/python-for-14-year-olds' }
            ],
            rows: [
                { label: 'OOP', values: ['Classes + methods', 'Inheritance + polymorphism', 'Design patterns basics'] },
                { label: 'Web', values: ['API client', 'Flask API server', 'Flask + DB + auth'] },
                { label: 'ML', values: ['Iris + charts', 'Kaggle regression', 'Kaggle + DL intro'] },
                { label: 'Tools', values: ['VS Code', 'VS Code + Git + venv', 'Full workflow'] },
                { label: 'GitHub', values: ['First repo', 'Active repos + PR', 'Sustained commits'] },
                { label: 'Project scope', values: ['3–5 classes', 'Multi-week', 'Month-long'] }
            ]
        },
        reviewsHeading: 'Class 8 parents on teen Python.',
        reviewsLede: 'Three recent reviews from Class 8 Python families.',
        reviews: [
            { initial: 'K', name: 'Kritika S.', meta: 'Parent · Delhi · 1-on-1', body: 'Son is Class 8. He built a Flask API that his friends actually ping from their own scripts. At 13 he is explaining JSON to me. I feel outpaced, and I am an engineer.' },
            { initial: 'V', name: 'Vivek R.', meta: 'Parent · Bengaluru · Group', body: 'Group of 4 Class 8 teens. Teacher runs weekly code reviews. My daughter\'s OOP design is surprisingly clean. She knows the word "refactor" at 13.' },
            { initial: 'D', name: 'Deepika M.', meta: 'Parent · Mumbai · 1-on-1', body: 'We moved from a recorded-video Python course. Huge difference. Live teacher asks "why did you write this loop?" — the questions shape thinking, not just knowledge.' }
        ],
        faqs: [
            { q: 'Is Flask realistic at 13?', a: 'Yes. Flask is deliberately small — 3 routes, a JSON endpoint, Postman test. A 13-year-old can build and deploy a simple Flask API within 4 weeks.' },
            { q: 'How deep does OOP go at 13?', a: 'Classes, inheritance, polymorphism, encapsulation. Not design patterns yet — those come at 15+.' },
            { q: 'Can my teen really use Kaggle at 13?', a: 'Yes. The titanic and housing datasets are the classic starting points. 13-year-olds can do full train/test splits, interpret accuracy, and visualise results.' },
            { q: 'Is deep learning taught at 13?', a: 'Not the mathematics. We do introduce Keras/TensorFlow for image classification at the tutorial level — enough to say "I built a neural network" honestly.' },
            { q: 'What editor at 13?', a: 'VS Code, with GitHub Copilot optional (parent decision). Students type real code; Copilot is used for explanation, not generation.' },
            { q: 'Does this align with Class 8 school CS?', a: 'Yes — and far beyond. Class 8 school CS typically covers basic Python. We are at Flask, sklearn and OOP by mid-year.' },
            { q: 'How is homework structured?', a: '20–30 minutes weekly, usually finishing a project started in class. GitHub commits tracked as proof of progress.' },
            { q: 'Free demo?', a: 'Yes — full 1 hour live class, no card. Refund clause 2 weeks.' }
        ],
        relatedChips: [
            { href: '/python-for-12-year-olds', small: 'Younger', label: 'Python for 12 Year Olds' },
            { href: '/python-for-14-year-olds', small: 'Older', label: 'Python for 14 Year Olds' },
            { href: '/python-for-class-8', small: 'Grade', label: 'Python for Class 8' },
            { href: '/python-for-class-9', small: 'Grade', label: 'Python for Class 9' },
            { href: '/python-projects-for-kids', small: 'Projects', label: 'Python Projects for Kids' },
            { href: '/coding-for-13-year-olds', small: 'Coding', label: 'Coding for 13 Year Olds' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/python-and-ai-classes-for-kids-teens', small: 'Course', label: 'Python & AI' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- PYTHON FOR 14 YEAR OLDS ---------- */
    {
        slug: 'python-for-14-year-olds',
        pageTitle: 'Python for 14 Year Olds — Flask, Django Intro, sklearn ML & Kaggle Projects',
        metaDescription: 'Python for 14 year olds. Flask + Django intro, sklearn ML with real Kaggle datasets, pandas deep dive, DSA in Python — 1 hour live classes aligned to Class 9.',
        keywords: 'python for 14 year olds, python for class 9, flask for 14 year olds, django for teens, kaggle python for teens, python dsa for class 9, cbse class 9 python, pandas for 14 year olds, sklearn ml class 9, python ai class 9, best python class 14 year old, python project class 9',
        audienceType: '14 year olds (Class 9) learning Python',
        courseCode: 'PY-AGE-14',
        courseName: 'Python for 14 Year Olds',
        courseDesc: 'Live online Python for 14 year olds. Flask + Django intro, sklearn with Kaggle, DSA in Python, Class 9 aligned.',
        breadcrumbName: 'Python for 14 Year Olds',
        accent: '#8b5cf6', accent2: '#06b6d4', bodyClass: 'py-age-14-page',
        badge: 'Py14', badgeLabel: 'Python · Age 14',
        badgeFontSize: 'clamp(44px, 6.5vw, 76px)',
        eyebrow: 'Python at age 14 · Class 9',
        h1Before: 'Python for ', h1Highlight: '14 Year Olds', h1After: ' — portfolio year, board-safe.',
        heroSub: 'Class 9 is the last quiet year before board pressure. Our 1 hour live Python classes use this window for depth — Flask, Django intro, sklearn with real Kaggle datasets, and DSA in Python as a gentle foundation.',
        trust: [
            { big: '3,400+', sub: '14-year-olds in Python classes' },
            { big: '4.9 / 5', sub: 'Parent rating · 420+ reviews' },
            { big: '1 hour', sub: 'Live class, 1:1 or group' },
            { big: '5 projects', sub: 'Portfolio-ready by Class 10' }
        ],
        chips: ['Flask + Django', 'Real Kaggle', 'DSA in Python'],
        coursesHeading: 'Python tracks that shape a Class 9 portfolio.',
        coursesLede: 'At 14, the right tracks build for college — Flask, Django, sklearn, DSA. Every course live, 1 hour.',
        courses: [PY.pythonTeen, PY.aimlTeen, PY.dsaTeen, PY.flaskBackend, PY.dsTeen, PY.autoPy, PY.genAI, PY.mlPro],
        skipHeading: 'Already has a serious Python GitHub?',
        skipBody: 'If your 14-year-old already has real Python repos, <strong>skip ahead</strong> to <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI & ML</a>, <a href="/courses/data-science-complete-masterclass-college" style="color:inherit;text-decoration:underline;">Data Science</a>, or <a href="/courses/complete-generative-ai-masterclass-college" style="color:inherit;text-decoration:underline;">Generative AI</a>. Demo teacher places them.',
        whyHeading: 'Fourteen is the last unhurried Python year.',
        whyLede: 'Class 10 brings boards. Class 11 brings streams. Class 9 is where a real portfolio can be built without calendar pressure. Students who use 14 well enter Class 10 confident.',
        whys: [
            { tag: 'Window', title: 'Before Class 10 board crunch', body: 'Class 9 still has room for deep projects. Class 10 onwards, schedule becomes the constraint. This is the right year for depth.' },
            { tag: 'Maturity', title: 'Recursion and Big-O click', body: 'At 14, recursion finally stops being magic. Big-O makes sense. These are the foundations for every CS college course after.' },
            { tag: 'Signal', title: 'A 3-year GitHub head start', body: 'College applications value longevity. Weekly commits from Class 9 read differently from a Class 12 rush.' }
        ],
        projectsHeading: 'Six Python portfolio pieces at 14.',
        projectsLede: 'Each one holds up in a Class 12 portfolio. Finishable in a month, real enough to talk about.',
        projects: [
            { sticker: 'Web', title: 'Flask Blog App', desc: 'Full Flask app — user login, posts, comments. Deployed with real domain. First real deployed app.', tags: ['flask', 'auth'] },
            { sticker: 'Django', title: 'Django Intro Project', desc: 'First Django project — admin panel, models, views, templates. Taste of the "batteries-included" framework.', tags: ['django'] },
            { sticker: 'AI', title: 'Titanic ML End-to-End', desc: 'Full pipeline — EDA in pandas, feature engineering, sklearn model, evaluation, writeup.', tags: ['sklearn', 'eda'] },
            { sticker: 'DSA', title: 'Python DSA 15 Problems', desc: 'Arrays, strings, linked lists implemented in Python. Core DSA foundation.', tags: ['dsa'] },
            { sticker: 'Automate', title: 'Web Scraper', desc: 'BeautifulSoup + requests to scrape a simple site (news headlines or product prices).', tags: ['scraping'] },
            { sticker: 'Data', title: 'Matplotlib Dashboard', desc: 'A Jupyter notebook with 5 charts summarising a dataset of choice. Writeup included.', tags: ['jupyter', 'plots'] }
        ],
        roadmapHeading: 'Four stages across Class 9.',
        roadmapLede: 'We push depth — deploy, DSA, real datasets.',
        roadmap: [
            { label: 'Term 1 · Flask deep', title: 'Flask with auth + DB', body: 'Full Flask app — user login (JWT or sessions), SQLite database, CRUD. Deployed to Render.', tags: ['flask', 'jwt'] },
            { label: 'Term 1–2 · ML pipeline', title: 'Full sklearn pipeline', body: 'Kaggle dataset end-to-end — EDA, feature engineering, model, evaluation. Proper data-science workflow.', tags: ['sklearn', 'pandas'] },
            { label: 'Term 2 · Django intro', title: 'The other big framework', body: 'Django basics — admin, models, views. Enough to know when to pick Django over Flask.', tags: ['django'] },
            { label: 'Term 3 · DSA foundation', title: 'Arrays + strings + lists', body: 'DSA in Python. 15 foundational problems. Solid base for Class 10 and beyond.', tags: ['dsa'] }
        ],
        compareHeading: 'Python at 13 vs 14 vs 15.',
        compareLede: 'Clear ladder between teen years.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Age 13', link: '/python-for-13-year-olds' },
                { label: 'Age 14 (this page)' },
                { label: 'Age 15', link: '/python-for-15-year-olds' }
            ],
            rows: [
                { label: 'Web framework', values: ['Flask basics', 'Flask + Django intro', 'Django + Flask production'] },
                { label: 'ML', values: ['Kaggle regression', 'Full ML pipeline', 'ML + light DL'] },
                { label: 'DSA', values: ['First problems', 'Arrays + strings', 'LeetCode easy 50'] },
                { label: 'DB', values: ['Files', 'SQLite basics', 'SQL + ORM'] },
                { label: 'Deploy', values: ['Local', 'Render / Vercel', 'Multiple deployments'] },
                { label: 'School', values: ['Class 8 CS', 'Class 9 CS', 'Class 10 board'] }
            ]
        },
        reviewsHeading: 'Class 9 parents on Python at 14.',
        reviewsLede: 'Three recent reviews from 14-year-old Python learners.',
        reviews: [
            { initial: 'H', name: 'Harita N.', meta: 'Parent · Chennai · 1-on-1', body: 'Class 9 CBSE. Son built a Flask blog with login and deployed it. Aunts from abroad can visit his link. At 14 he explains what a POST request is at dinner. My husband is thrilled.' },
            { initial: 'J', name: 'Jatin P.', meta: 'Parent · Hyderabad · Group', body: 'Group of 3 Class 9 Python teens. Teacher runs weekly code reviews where they critique each other\'s PRs. My son has had to accept feedback gracefully — that alone is valuable.' },
            { initial: 'R', name: 'Rekha V.', meta: 'Parent · Delhi · 1-on-1', body: 'We moved from a Python YouTube-only self-study. Teacher here is tough but kind. My daughter\'s code now has docstrings, type hints and tests. At 14.' }
        ],
        faqs: [
            { q: 'Is Django too much at 14?', a: 'Django intro, yes — possible and useful. Full Django with class-based views and DRF is for 16+. We stop at admin + models + views at 14.' },
            { q: 'How serious is ML at 14?', a: 'Serious. Full sklearn pipeline on Kaggle. A 14-year-old can build, evaluate and write up a real ML project in 8 weeks.' },
            { q: 'What about deep learning?', a: 'We introduce Keras/TensorFlow for an image classifier at the tutorial level. No backpropagation math. Enough to say "I trained a neural network" honestly.' },
            { q: 'DSA in Python — good idea?', a: 'Yes. Python is a fine first DSA language. We move to C++ for serious CP at 15–16 if interested. Python DSA is perfectly accepted in most CS interviews.' },
            { q: 'Does this help with Class 9 CBSE CS?', a: 'Yes. Class 9 CBSE CS is Python-based. We run ahead of the school syllabus and go well beyond.' },
            { q: 'Time commitment weekly?', a: 'Two 1-hour sessions + 20–30 minutes homework. Most Class 9 students manage easily.' },
            { q: 'GitHub Copilot allowed?', a: 'Parent\'s choice. We lean towards "no" in the first year so students actually learn to type code, and "yes" as an explainer tool later.' },
            { q: 'Free demo?', a: 'Yes. One full 1 hour class. No card. Refund clause 2 weeks.' }
        ],
        relatedChips: [
            { href: '/python-for-13-year-olds', small: 'Younger', label: 'Python for 13 Year Olds' },
            { href: '/python-for-15-year-olds', small: 'Older', label: 'Python for 15 Year Olds' },
            { href: '/python-for-class-9', small: 'Grade', label: 'Python for Class 9' },
            { href: '/python-for-class-10', small: 'Grade', label: 'Python for Class 10' },
            { href: '/coding-for-14-year-olds', small: 'Coding', label: 'Coding for 14 Year Olds' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/python-and-ai-classes-for-kids-teens', small: 'Course', label: 'Python & AI' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- PYTHON FOR 15 YEAR OLDS ---------- */
    {
        slug: 'python-for-15-year-olds',
        pageTitle: 'Python for 15 Year Olds — Board-Safe Python + Django, ML & DSA for Class 10',
        metaDescription: 'Python classes for 15 year olds in Class 10. Board-safe pacing. Django, sklearn ML, DSA in Python, SQL — without hurting board marks. 1 hour live classes.',
        keywords: 'python for 15 year olds, python for class 10, cbse class 10 python, icse class 10 python, python board year, python dsa class 10, django for teens, python ml class 10, sklearn class 10, python sql class 10, best python class 15 year old, python project class 10',
        audienceType: '15 year olds (Class 10) learning Python',
        courseCode: 'PY-AGE-15',
        courseName: 'Python for 15 Year Olds',
        courseDesc: 'Live online Python for 15 year olds. Django, sklearn ML, DSA in Python, SQL — paced around Class 10 board year.',
        breadcrumbName: 'Python for 15 Year Olds',
        accent: '#06b6d4', accent2: '#6366f1', bodyClass: 'py-age-15-page',
        badge: 'Py15', badgeLabel: 'Python · Age 15',
        badgeFontSize: 'clamp(44px, 6.5vw, 76px)',
        eyebrow: 'Python at age 15 · Class 10 board year',
        h1Before: 'Python for ', h1Highlight: '15 Year Olds', h1After: ' — serious, not stressful.',
        heroSub: 'Class 10 is the board year. Our 1 hour live Python classes respect that — shorter, deeper sessions, projects timed between exam blocks, pause during pre-boards. Your child finishes Class 10 with board marks and real Python portfolio pieces.',
        trust: [
            { big: '2,400+', sub: '15-year-olds in Python classes' },
            { big: '93%', sub: 'Finish Class 10 without dropping marks' },
            { big: '1 hour', sub: 'Live class, 1:1 or group' },
            { big: '4 projects', sub: 'Compact Class 10-year projects' }
        ],
        chips: ['Board-safe', 'Django + ML', 'DSA easy 50'],
        coursesHeading: 'Python tracks that fit a Class 10 schedule.',
        coursesLede: 'At 15, the right courses respect the board calendar. Shorter, deeper classes that do not compete with study hours.',
        courses: [PY.pythonTeen, PY.aimlTeen, PY.dsaTeen, PY.dsTeen, PY.flaskBackend, PY.cbseIP, PY.autoPy, PY.mlPro],
        skipHeading: 'Already scoring 85+ on school CS tests?',
        skipBody: 'If your Class 10 student is already strong, <strong>skip review</strong> and go into <a href="/courses/problem-solving-dsa-masterclass-teens" style="color:inherit;text-decoration:underline;">DSA</a>, <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI & ML</a>, or <a href="/courses/competitive-programming-masterclass" style="color:inherit;text-decoration:underline;">CP</a>. Free demo places them.',
        whyHeading: 'Fifteen is when confidence decides the next 5 years.',
        whyLede: 'A Class 10 student who ends the board year with both marks and portfolio walks into Class 11 with identity. That is often worth more than a single exam result.',
        whys: [
            { tag: 'Board-safe', title: 'Paced for the Class 10 calendar', body: 'We run 1–2 sessions a week, pause during mocks and pre-boards, and resume after. School always wins the calendar.' },
            { tag: 'Identity', title: 'A portfolio before stream pick', body: 'Class 11 stream choice is easier when the student has real Python, real ML and real projects to compare against.' },
            { tag: 'College', title: 'Long GitHub history works', body: 'Commits from Class 10 read differently from commits started in Class 12. A 3-year visible Python history is strong signal later.' }
        ],
        projectsHeading: 'Six Python projects a Class 10 student finishes.',
        projectsLede: 'Calibrated around the board year. Each one short, each portfolio-worthy.',
        projects: [
            { sticker: 'Data', title: 'Study Tracker (Pandas)', desc: 'Pandas + matplotlib app logging study hours. Directly useful during board prep.', tags: ['pandas'] },
            { sticker: 'Web', title: 'Django Mini Blog', desc: 'A small Django blog with admin panel. Deployed live. 3 weeks.', tags: ['django'] },
            { sticker: 'AI', title: 'Twitter Sentiment', desc: 'sklearn text classifier — positive vs negative. Real dataset, metrics explained.', tags: ['sklearn', 'nlp'] },
            { sticker: 'DSA', title: 'Top 50 LeetCode Easy', desc: 'Curated easy set in Python. Spaced across the year. Interview-style patience built.', tags: ['leetcode'] },
            { sticker: 'Board', title: 'Class 10 Python Project', desc: 'Whatever the school asks — done properly. Viva-ready, report-ready.', tags: ['school'] },
            { sticker: 'Auto', title: 'Flashcard Maker', desc: 'Python script that builds Anki-style flashcards from a text file. Used during boards.', tags: ['scripts'] }
        ],
        roadmapHeading: 'Four stages across Class 10 — board-aware.',
        roadmapLede: 'Paced around the school calendar. Full pause during pre-boards and boards.',
        roadmap: [
            { label: 'Term 1 · Rebuild base', title: 'Python OOP recap + pandas', body: 'Clean, solid OOP recap. Pandas introduced deeply. School Python chapters covered one week ahead.', tags: ['oop', 'pandas'] },
            { label: 'Before pre-boards · Ship one', title: 'Django blog deployed', body: 'Small Django blog with admin, deployed. Small but shipped. Done before pre-boards begin.', tags: ['django', 'deploy'] },
            { label: 'Pause · Boards', title: 'Support mode only', body: 'During pre-boards and boards we pause the curriculum. On call for school doubts — no new content.', tags: ['board focus'] },
            { label: 'Post-boards · AI + DSA', title: 'Sprint the summer', body: 'Post-board summer is gold. A real ML project and 50 DSA easy problems.', tags: ['ai', 'dsa'] }
        ],
        compareHeading: 'Python at 14 vs 15 vs 16.',
        compareLede: 'What changes year over year around the board.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Age 14', link: '/python-for-14-year-olds' },
                { label: 'Age 15 (this page)' },
                { label: 'Age 16', link: '/python-for-16-year-olds' }
            ],
            rows: [
                { label: 'School load', values: ['Moderate', 'Board — heavy', 'Stream — heavy'] },
                { label: 'Sessions / week', values: ['2', '1–2 (flexible)', '2'] },
                { label: 'Main goal', values: ['Portfolio build', 'Portfolio + board', 'Stream depth'] },
                { label: 'DSA', values: ['Arrays + strings', 'LeetCode easy 50', 'LeetCode medium + Striver'] },
                { label: 'Web', values: ['Flask + Django', 'Django deployed', 'Full Django + DRF'] },
                { label: 'ML', values: ['Full pipeline', 'NLP intro', 'DL + production'] }
            ]
        },
        reviewsHeading: 'Class 10 Python parents.',
        reviewsLede: 'Three recent reviews from 15-year-old Class 10 Python students.',
        reviews: [
            { initial: 'U', name: 'Usha P.', meta: 'Parent · Mumbai · 1-on-1', body: 'I was nervous about any non-school class in Class 10. They paused for pre-boards on their own and resumed after. Son finished with 94% and a deployed Django blog. I was wrong to worry.' },
            { initial: 'F', name: 'Farida K.', meta: 'Parent · Pune · Group', body: 'ICSE Class 10 student, Python wasn\'t in her board paper but she loved it. The teacher paced everything around her school calendar. 50 LeetCode solved + a sentiment classifier project.' },
            { initial: 'D', name: 'Darshan R.', meta: 'Parent · Bengaluru · 1-on-1', body: 'One 1-hour class a week through the year was all. Still, my son finished 50 LeetCode problems and deployed a study tracker. Small and steady works in Class 10.' }
        ],
        faqs: [
            { q: 'Is Python worth learning in Class 10?', a: 'Yes — but at a lower weekly intensity. It keeps identity alive through a board-heavy year and gives a head start for Class 11 CS stream.' },
            { q: 'Does this align with CBSE Class 10 CS / IT 402?', a: 'Yes. Class 10 CBSE IT 402 includes a Python unit. We cover it and go beyond. See also our <a href="/python-for-class-10">Python for Class 10</a> page.' },
            { q: 'Can we skip Python during pre-boards?', a: 'Yes — we suggest it. One free "emergency" 1-hour session during pre-boards for any school CS doubt.' },
            { q: 'Is 50 LeetCode realistic in Class 10?', a: 'Yes. At 1 problem per week across the year + some catchup, 50 is achievable. Builds confidence for Class 11.' },
            { q: 'Django in Class 10 — doable?', a: 'A small Django blog, yes. 8 weeks. Not full production Django with DRF — that waits for Class 11.' },
            { q: 'Will Python affect board marks?', a: 'Not if paced correctly. Our Class 10 students typically maintain or improve board marks. The focus Python teaches often helps school too.' },
            { q: '1-on-1 or group?', a: '1-on-1 if you want surgical control over pacing. Group works for self-motivated Class 10 students.' },
            { q: 'Free demo?', a: 'Yes — 1 full hour. No card. Refund clause 2 weeks.' }
        ],
        relatedChips: [
            { href: '/python-for-14-year-olds', small: 'Younger', label: 'Python for 14 Year Olds' },
            { href: '/python-for-16-year-olds', small: 'Older', label: 'Python for 16 Year Olds' },
            { href: '/python-for-class-10', small: 'Grade', label: 'Python for Class 10' },
            { href: '/python-for-class-11-cbse', small: 'Next', label: 'Python for Class 11 CBSE' },
            { href: '/coding-for-15-year-olds', small: 'Coding', label: 'Coding for 15 Year Olds' },
            { href: '/coding-for-class-10', small: 'Class', label: 'Coding for Class 10' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- PYTHON FOR 16 YEAR OLDS ---------- */
    {
        slug: 'python-for-16-year-olds',
        pageTitle: 'Python for 16 Year Olds — CS Stream Python, Pandas, ML, Django & DSA',
        metaDescription: 'Python for 16 year olds in Class 11 CS stream. Pandas + SQL (CBSE IP), Django production, sklearn ML with real datasets, DSA in Python/C++. 1 hour live classes.',
        keywords: 'python for 16 year olds, python for class 11, cbse class 11 python, cbse class 11 ip, python pandas class 11, python for cs stream, python django for teens, python ml class 11, python dsa class 11, python sql cbse ip, best python class 16 year old, python project class 11',
        audienceType: '16 year olds (Class 11) learning Python',
        courseCode: 'PY-AGE-16',
        courseName: 'Python for 16 Year Olds',
        courseDesc: 'Live online Python for 16 year olds in Class 11 CS stream. Pandas + SQL, Django, sklearn ML, DSA. 1 hour live classes.',
        breadcrumbName: 'Python for 16 Year Olds',
        accent: '#10b981', accent2: '#a855f7', bodyClass: 'py-age-16-page',
        badge: 'Py16', badgeLabel: 'Python · Age 16',
        badgeFontSize: 'clamp(44px, 6.5vw, 76px)',
        eyebrow: 'Python at age 16 · Class 11 CS stream',
        h1Before: 'Python for ', h1Highlight: '16 Year Olds', h1After: ' — stream-grade, college-ready.',
        heroSub: 'Class 11 is where Python stops being optional for CS stream. Our 1 hour live classes align with Class 11 CS / IP, build a serious Django + ML portfolio, and start DSA at a level that matters for Class 12 and college entry.',
        trust: [
            { big: '2,100+', sub: '16-year-olds in Python classes' },
            { big: '4.9 / 5', sub: 'Parent rating · 260+ reviews' },
            { big: '1 hour', sub: 'Live class, 1:1 or group' },
            { big: '5 projects', sub: 'Portfolio-grade by year end' }
        ],
        chips: ['Pandas + SQL', 'Django + ML', 'DSA Striver'],
        coursesHeading: 'Python tracks for a Class 11 CS student.',
        coursesLede: 'These are the tracks that match a 16-year-old in CS stream. Real tools, real depth.',
        courses: [PY.pythonTeen, PY.aimlTeen, PY.dsaTeen, PY.dsTeen, PY.cbseIP, PY.cbseCS, PY.flaskBackend, PY.genAI],
        skipHeading: 'Already has a working MERN or ML project?',
        skipBody: 'If your Class 11 student already has a working project, <strong>skip</strong> into <a href="/courses/ai-ml-masterclass-complete-college" style="color:inherit;text-decoration:underline;">college-level AI/ML</a>, <a href="/courses/complete-generative-ai-masterclass-college" style="color:inherit;text-decoration:underline;">Generative AI</a>, or <a href="/courses/competitive-programming-masterclass" style="color:inherit;text-decoration:underline;">CP</a>. Free demo places them.',
        whyHeading: 'Sixteen is when Python becomes a career decision.',
        whyLede: 'By 16, most students know whether they want CS in college. Python is the language that carries all the possible paths — web, data, AI, automation — so building it seriously in Class 11 is high-value.',
        whys: [
            { tag: 'Stream', title: 'CBSE CS + IP are Python', body: 'Both Class 11 papers (CS and IP) are Python-based. We keep the NCERT books open and align week by week. Real depth alongside.' },
            { tag: 'Real ML', title: 'Full pipeline with metrics', body: 'At 16, ML projects stop being tutorials. Full train/test split, evaluation metrics, hyperparameter tuning. The real workflow.' },
            { tag: 'DSA start', title: 'Striver / Love Babbar begins', body: 'Competitive territory opens. DSA in Python or C++ (student\'s choice). 3–5 problems a week becomes a habit.' }
        ],
        projectsHeading: 'Six Python projects that read well on a college SOP.',
        projectsLede: 'Finishable, portfolio-real. Each teaches one thing that college CS cares about.',
        projects: [
            { sticker: 'Full Stack', title: 'Django SaaS Starter', desc: 'Django + DRF + React front end. Auth, dashboard, payment mock. Serious portfolio piece.', tags: ['django', 'drf'] },
            { sticker: 'AI', title: 'Kaggle Competition Entry', desc: 'Real Kaggle competition submission. Feature engineering, ensemble model, writeup.', tags: ['kaggle', 'ensemble'] },
            { sticker: 'Data', title: 'IP Pandas Case Study', desc: 'CBSE IP-style case study on a real dataset. Matches IP practical pattern.', tags: ['pandas', 'sql'] },
            { sticker: 'DSA', title: 'Striver 75 in Python', desc: 'Arrays, strings, recursion, trees. The foundational DSA sheet.', tags: ['striver', 'trees'] },
            { sticker: 'NLP', title: 'Text Summariser', desc: 'Extractive text summariser using transformers. Real NLP starter.', tags: ['nlp', 'huggingface'] },
            { sticker: 'OSS', title: 'First Open-Source PR', desc: 'A real (merged) PR to a Python OSS project. Small but significant.', tags: ['oss', 'pr'] }
        ],
        roadmapHeading: 'Four stages across Class 11.',
        roadmapLede: 'Fits 1 to 2 hours per week and still produces a serious portfolio by month 9.',
        roadmap: [
            { label: 'Term 1 · Base fixed', title: 'Python OOP + Pandas', body: 'Deep Python OOP + Pandas — mirrors CBSE CS and IP. School tests easy, real foundation in place.', tags: ['python', 'pandas'] },
            { label: 'Term 1 · DSA starts', title: 'Striver / Love Babbar begins', body: 'Parallel DSA track. 3–5 problems a week. Python by default; C++ if CP-inclined.', tags: ['dsa'] },
            { label: 'Term 2 · Django + ML', title: 'Portfolio build', body: 'Django SaaS starter end-to-end. Parallel sklearn project with writeup.', tags: ['django', 'sklearn'] },
            { label: 'Summer · CP + OSS', title: 'Pressure test the skills', body: 'Codeforces rated rounds. First merged OSS PR. Small hackathons. Coach mode.', tags: ['cf', 'oss'] }
        ],
        compareHeading: 'Python at 15 vs 16 vs 17.',
        compareLede: 'Honest year-over-year at the college-approach level.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Age 15', link: '/python-for-15-year-olds' },
                { label: 'Age 16 (this page)' },
                { label: 'Age 17', link: '/python-for-17-year-olds' }
            ],
            rows: [
                { label: 'School', values: ['Class 10 board', 'Class 11 stream', 'Class 12 board + apps'] },
                { label: 'ML', values: ['NLP intro', 'Full Kaggle + DL', 'College-level'] },
                { label: 'DSA', values: ['LeetCode easy 50', 'Striver sheet', 'Full sheet + contests'] },
                { label: 'Web', values: ['Django deployed', 'Django + DRF + React', 'Production stack'] },
                { label: 'CP', values: ['Not yet', 'First rated', '1200+ target'] },
                { label: 'OSS', values: ['Not yet', 'First PR', 'Sustained'] }
            ]
        },
        reviewsHeading: 'Class 11 CS students and their parents.',
        reviewsLede: 'Three recent reviews from 16-year-olds in the Python + CS stream.',
        reviews: [
            { initial: 'N', name: 'Nishant K.', meta: 'Student · Delhi · 1-on-1', body: 'I\'m Class 11 CS. The teacher teaches CS + IP chapters a week before school does. I\'ve solved 40 problems from the Striver sheet. Django SaaS is in progress. 93 in CS half-yearly. Fees are honestly justified.' },
            { initial: 'P', name: 'Pradeep M.', meta: 'Parent · Bengaluru · Group', body: 'Small batch of 4 Class 11 students. They help each other. My daughter\'s SQL + Pandas went from zero to really solid in one term. The IP paper feels easy now.' },
            { initial: 'E', name: 'Esha P.', meta: 'Parent · Hyderabad · 1-on-1', body: 'My son was considering CS but unsure. After 3 months of real Django work, he is sure. Sometimes the best outcome of Class 11 is clarity, and we got that.' }
        ],
        faqs: [
            { q: 'Does this match CBSE Class 11 CS?', a: 'Yes. CBSE Class 11 CS (Python, boolean, computer systems) covered weekly. NCERT book open during class.' },
            { q: 'And CBSE Class 11 IP?', a: 'Fully. Pandas, matplotlib, SQL, HTML basics. Widely used by IP students who struggle with Pandas.' },
            { q: 'Is DSA in Python fine, or should we use C++?', a: 'Python is fine for portfolio and most interviews. C++ is better for serious CP and JEE Advanced CS. Student picks.' },
            { q: 'How much weekly time?', a: '2 to 3 hours total. Designed to fit alongside JEE/NEET/CUET prep.' },
            { q: 'CBSE IP practical prep?', a: 'Yes — sample datasets, patterns, viva rehearsal.' },
            { q: 'Hackathons at 16?', a: 'Student hackathons are ideal. We help scope, team, submit.' },
            { q: 'Can you help with Kaggle competitions?', a: 'Yes. We have teachers who are active on Kaggle and guide competition entries with feature engineering and ensemble tips.' },
            { q: 'Free demo?', a: 'Yes. Full 1 hour class. No card. Refund clause 2 weeks.' }
        ],
        relatedChips: [
            { href: '/python-for-15-year-olds', small: 'Younger', label: 'Python for 15 Year Olds' },
            { href: '/python-for-17-year-olds', small: 'Older', label: 'Python for 17 Year Olds' },
            { href: '/python-for-class-11-cbse', small: 'Board', label: 'Python for Class 11 CBSE' },
            { href: '/python-for-class-12-cbse', small: 'Next', label: 'Python for Class 12 CBSE' },
            { href: '/coding-for-16-year-olds', small: 'Coding', label: 'Coding for 16 Year Olds' },
            { href: '/coding-for-class-11', small: 'Class', label: 'Coding for Class 11' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/computer-science-class-11-cbse', small: 'Paper', label: 'CS Class 11 CBSE' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- PYTHON FOR 17 YEAR OLDS ---------- */
    {
        slug: 'python-for-17-year-olds',
        pageTitle: 'Python for 17 Year Olds — Class 12 Board CS, College Portfolio, ML & DSA',
        metaDescription: 'Python for 17 year olds in Class 12. CBSE CS/IP alignment, one serious portfolio project, ML, DSA and college head start. Board-aware 1 hour live classes.',
        keywords: 'python for 17 year olds, python for class 12, cbse class 12 python, python data structures class 12, python sql class 12, python class 12 board, python college portfolio, python dsa class 12, python ml class 12, gap year python, best python class 17 year old, python project class 12',
        audienceType: '17 year olds (Class 12) learning Python',
        courseCode: 'PY-AGE-17',
        courseName: 'Python for 17 Year Olds',
        courseDesc: 'Live online Python for 17 year olds in Class 12. CBSE CS/IP alignment, portfolio, ML, DSA, college head start.',
        breadcrumbName: 'Python for 17 Year Olds',
        accent: '#f59e0b', accent2: '#ef4444', bodyClass: 'py-age-17-page',
        badge: 'Py17', badgeLabel: 'Python · Age 17',
        badgeFontSize: 'clamp(44px, 6.5vw, 76px)',
        eyebrow: 'Python at age 17 · Class 12 board + college',
        h1Before: 'Python for ', h1Highlight: '17 Year Olds', h1After: ' — board, portfolio, college-ready.',
        heroSub: 'Class 12 is the last structured year. Our 1 hour live Python classes keep CBSE CS / IP marks safe, finish one serious portfolio project, and sharpen DSA or ML for college CS entry.',
        trust: [
            { big: '1,700+', sub: '17-year-olds in Python classes' },
            { big: '4.9 / 5', sub: 'Parent rating · 210+ reviews' },
            { big: '1 hour', sub: 'Live class, 1:1 or group' },
            { big: '91%', sub: 'Finish with CS marks 90+' }
        ],
        chips: ['Board-safe', 'College-ready', 'Portfolio finished'],
        coursesHeading: 'Python tracks that win the Class 12 year.',
        coursesLede: 'The right tracks protect board marks and produce one clean portfolio piece. These are those.',
        courses: [PY.cbseCS, PY.cbseIP, PY.pythonTeen, PY.aimlTeen, PY.dsaTeen, PY.dsTeen, PY.genAI, PY.mlPro],
        skipHeading: 'Already has a polished GitHub?',
        skipBody: 'If your Class 12 student already has a real portfolio, <strong>skip content review</strong> and go directly to <a href="/courses/ai-ml-masterclass-complete-college" style="color:inherit;text-decoration:underline;">college-level AI/ML</a>, <a href="/courses/data-science-complete-masterclass-college" style="color:inherit;text-decoration:underline;">Data Science</a>, or <a href="/courses/competitive-programming-masterclass" style="color:inherit;text-decoration:underline;">CP</a>.',
        whyHeading: 'Seventeen is the year to land cleanly.',
        whyLede: 'Students often pause everything for boards. Result: zero portfolio, average marks. A calm 1 to 2 hours a week of real Python delivers better outcomes on both fronts.',
        whys: [
            { tag: 'Board protection', title: 'CBSE/ICSE Python aligned', body: 'We align sessions to the school calendar. Chapters covered one week ahead. Sample papers November, practical December, written prep January.' },
            { tag: 'College signal', title: 'One serious portfolio piece', body: 'Admissions officers remember the one serious project. We finish one clean deployed piece with writeup — not ten half-finished demos.' },
            { tag: 'DSA head start', title: 'First-year college advantage', body: 'A Class 12 student with 100 DSA problems solved walks into first-year engineering already senior.' }
        ],
        projectsHeading: 'Six Python projects for a college-ready Class 12.',
        projectsLede: 'Just enough. Each one at a specific point on the Class 12 calendar.',
        projects: [
            { sticker: 'Portfolio', title: 'Personal Site v2', desc: 'Clean fast portfolio site listing 3 best projects. First thing admissions Google.', tags: ['deploy'] },
            { sticker: 'AI', title: 'Real ML Writeup', desc: 'Serious Kaggle dataset, full Jupyter notebook, evaluation, blog post. The one they talk about in interviews.', tags: ['jupyter', 'ml'] },
            { sticker: 'Board', title: 'CBSE CS / IP Project', desc: 'School-required Python project done with real code quality. Report, viva, full marks.', tags: ['school'] },
            { sticker: 'DSA', title: '100 Python DSA Problems', desc: 'Striver A2Z sheet in Python. Measurable. Confidence problem by problem.', tags: ['striver'] },
            { sticker: 'Gen AI', title: 'LLM App Starter', desc: 'A simple Streamlit app using an LLM API. Shows awareness of 2026 AI reality.', tags: ['llm', 'streamlit'] },
            { sticker: 'OSS', title: 'Sustained OSS Contribs', desc: 'Three merged PRs through the year. Not vanity commits.', tags: ['oss'] }
        ],
        roadmapHeading: 'Four quarters across Class 12 — exam aware.',
        roadmapLede: 'Fits the school calendar. Pauses for pre-boards and boards. Everything else steady.',
        roadmap: [
            { label: 'Q1 · Jul–Sep · Board + DSA', title: 'Ahead of school + 30 problems', body: 'CBSE CS chapters covered one week ahead. Python DSA foundation — arrays, strings, hashing, recursion.', tags: ['board', 'dsa'] },
            { label: 'Q2 · Oct–Nov · Portfolio', title: 'Ship the college piece', body: 'The one serious ML or full-stack Python project shipped and deployed. Writeup published. LinkedIn updated.', tags: ['ship', 'writeup'] },
            { label: 'Q3 · Dec–Mar · Boards', title: 'Support mode only', body: 'No new content. On WhatsApp for any school CS doubt. Full focus on boards + CUET/JEE.', tags: ['board focus'] },
            { label: 'Q4 · Apr–Jun · College head start', title: 'Pre-college sprint', body: 'After boards — OS basics, DBMS basics, more DSA. Walks into BTech/BCA confident.', tags: ['os', 'dbms'] }
        ],
        compareHeading: 'Python at 16 vs 17 vs college year 1.',
        compareLede: 'Where the final school year sits relative to college.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Age 16', link: '/python-for-16-year-olds' },
                { label: 'Age 17 (this page)' },
                { label: 'College', link: '/courses/coding/college' }
            ],
            rows: [
                { label: 'School load', values: ['Stream', 'Boards + apps', 'Semester'] },
                { label: 'Main goal', values: ['Build portfolio', 'Ship one + apply', 'Internships + fundamentals'] },
                { label: 'DSA', values: ['50–70 problems', '100+ problems', '200+ + contests'] },
                { label: 'ML', values: ['Full Kaggle', 'Kaggle + writeup + LLM starter', 'Research / project'] },
                { label: 'CP', values: ['First rated', '1200+ target', '1400+'] },
                { label: 'OSS', values: ['First PR', 'Sustained', 'Maintainer track'] }
            ]
        },
        reviewsHeading: 'Class 12 Python students and parents.',
        reviewsLede: 'Three recent reviews from 17-year-olds.',
        reviews: [
            { initial: 'W', name: 'Waqar H.', meta: 'Student · Delhi · 1-on-1', body: 'Started in Class 11, continued into Class 12. Finished CBSE IP in 4 months, scored 97. Built a Pandas + sklearn project used in my SOP. The programme adapted to board pressure naturally.' },
            { initial: 'N', name: 'Neelam C.', meta: 'Parent · Kolkata · 1-on-1', body: 'We paused during boards as planned. After boards, 2 months of Python DSA + OS basics. My son said his first college lectures felt like revision.' },
            { initial: 'Z', name: 'Zoya K.', meta: 'Parent · Mumbai · Group', body: 'Small batch of 3 Class 12 CS students. Serious and supportive. My daughter finished Class 12 with 92 in CS and a deployed Python portfolio. Fair trade.' }
        ],
        faqs: [
            { q: 'Is Class 12 too risky for a Python class?', a: 'Only if it is the wrong one. Ours is built for Class 12: fewer deeper sessions, scheduled around exams, full pause during pre-boards.' },
            { q: 'CBSE Class 12 CS paper alignment?', a: 'Directly. Our teachers follow NCERT Class 12 CS week by week. Most students finish with 90+ in CS/IP. See <a href="/python-for-class-12-cbse">Python for Class 12 CBSE</a> for details.' },
            { q: 'JEE / CUET conflict?', a: 'Flexible schedule. JEE Advanced students usually 1 class/week. Designed to supplement, not compete.' },
            { q: 'Can a Class 12 student really finish a portfolio project?', a: 'One serious project, not ten. Start Term 1, ship by Term 2, before pre-boards.' },
            { q: '100 DSA problems realistic?', a: 'At 3 problems a week with guidance — yes. Confidence and foundation for first-year BTech.' },
            { q: 'Help with college applications?', a: 'We don\'t write essays. We help frame technical portfolio — GitHub cleanup, project writeups.' },
            { q: 'Gap-year student?', a: 'Welcome. Often the fastest-progressing students. We design a 6–9 month intensive — 3 to 4 sessions a week.' },
            { q: 'Free demo?', a: 'Yes. Full 1 hour class. No card. Refund clause 2 weeks.' }
        ],
        relatedChips: [
            { href: '/python-for-16-year-olds', small: 'Younger', label: 'Python for 16 Year Olds' },
            { href: '/python-for-class-12-cbse', small: 'Board', label: 'Python for Class 12 CBSE' },
            { href: '/python-for-class-11-cbse', small: 'Prev', label: 'Python for Class 11 CBSE' },
            { href: '/coding-for-17-year-olds', small: 'Coding', label: 'Coding for 17 Year Olds' },
            { href: '/coding-for-class-12', small: 'Class', label: 'Coding for Class 12' },
            { href: '/computer-science-class-12-cbse', small: 'Paper', label: 'CS Class 12 CBSE' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' }
        ],
        cityChips: CITY_CHIPS
    }

];
