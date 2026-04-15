/*
 * grade-pages.js — unique configs for Classes 4 through 12.
 * Required by scripts/age-grade-pages-config.js.
 */

const IMG = slug => `/images/${slug}`;

const KIDS = {
    scratch: { href: '/courses/scratch-programming-complete-course', pill: 'Block', img: IMG('scratch-kids.webp'), alt: 'Scratch programming for school kids', title: 'Scratch Programming', desc: 'The visual block coding foundation — animations, characters, games.', tags: ['Scratch', 'Beginner'] },
    kidsBlocks: { href: '/courses/kids-coding-blocks-masterclass', pill: 'Block', img: IMG('kids-coding.webp'), alt: 'Kids block coding masterclass', title: 'Kids Coding Adventure', desc: 'Playful intro to logic, sequence and events using friendly blocks.', tags: ['Block', 'Logic'] },
    pythonKids: { href: '/courses/python-ai-kids-masterclass', pill: 'Python', img: IMG('python-kids.webp'), alt: 'Python for school kids', title: 'Python for Kids', desc: 'Turtle graphics, mini games, maths quizzes — real Python that still feels like play.', tags: ['Python', 'Beginner'] },
    htmlKids: { href: '/courses/kids-ai-web-development-course', pill: 'Web', img: IMG('html-css-kids.webp'), alt: 'HTML and CSS for kids', title: 'Build Your First Website', desc: 'HTML and CSS basics — a personal page your child actually hosts online.', tags: ['HTML', 'CSS'] },
    aiKids: { href: '/courses/kids-ai-mastery-course', pill: 'AI', img: IMG('ai-tools-kids.webp'), alt: 'AI tools for kids', title: 'AI Tools for Kids', desc: 'Teachable Machine, classifiers, simple chatbots — hands-on AI at the right depth.', tags: ['AI', 'No-code'] },
    gameKids: { href: '/courses/game-development-masterclass-for-kids', pill: 'Game Dev', img: IMG('game-dev-kids.webp'), alt: 'Game development for kids', title: 'Game Development', desc: 'Characters, score, levels — finished playable games.', tags: ['Games', 'Projects'] },
    appKids: { href: '/courses/block-coding-app-development-masterclass', pill: 'App', img: IMG('app-dev-kids.webp'), alt: 'Block coding app development', title: 'Block Coding App Dev', desc: 'Design and build mobile-app style screens using blocks.', tags: ['App', 'Block'] },
    creativeKids: { href: '/courses/creative-coding-animation-mastery', pill: 'Creative', img: IMG('creative-coding-kids.webp'), alt: 'Creative coding and animation', title: 'Creative Coding & Animation', desc: 'Code that produces art — spirals, patterns, moving stories.', tags: ['Creative', 'Python'] },
    problemKids: { href: '/courses/problem-solving-and-computational-thinking-for-kids', pill: 'Logic', img: IMG('problem-solving-kids.webp'), alt: 'Problem solving for kids', title: 'Problem Solving & Logic', desc: 'Puzzle-driven computational thinking and pattern spotting.', tags: ['Logic'] },
    officeKids: { href: '/courses/microsoft-office-kids-mastery', pill: 'Office', img: IMG('microsoft-office-kids.webp'), alt: 'MS Office for kids', title: 'Microsoft Office for Kids', desc: 'Word, Excel, PowerPoint taught through projects — school-ready.', tags: ['Office'] },
    vibeKids: { href: '/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev', pill: 'Starter', img: IMG('vibe-coding-kids.webp'), alt: 'Vibe coding starter for kids', title: 'Vibe Coding Starter', desc: 'AI, Scratch and game-dev taster sessions to find what lights them up.', tags: ['Starter'] }
};

const TEEN = {
    vibeTeen: { href: '/courses/vibe-coding-for-teens-python-web-ai-projects-course', pill: 'Starter', img: IMG('vibe-coding-teens.webp'), alt: 'Vibe coding starter for teens', title: 'Vibe Coding for Teens', desc: 'Python, web and AI taster projects — the strongest first step if undecided.', tags: ['Starter'] },
    pythonTeen: { href: '/courses/python-complete-masterclass-teens', pill: 'Python', img: IMG('python-teens.webp'), alt: 'Python masterclass for teens', title: 'Python Masterclass', desc: 'Zero to confident — functions, OOP, files, real mini-apps.', tags: ['Python', 'OOP'] },
    fullstackTeen: { href: '/courses/full-stack-web-development-teens-masterclass', pill: 'Full Stack', img: IMG('web-dev-teens.webp'), alt: 'Full stack web development for teens', title: 'Full Stack Web Dev', desc: 'HTML, CSS, JS, Node, databases — ship a real deployed web app.', tags: ['Web', 'Node'] },
    reactTeen: { href: '/courses/react-for-teens-complete-masterclass', pill: 'React', img: IMG('react-teens.webp'), alt: 'React for teens', title: 'React.js Masterclass', desc: 'Build component-based web apps with the modern product stack.', tags: ['React'] },
    javaTeen: { href: '/courses/java-programming-masterclass-for-teens', pill: 'Java', img: IMG('java-teens.webp'), alt: 'Java for teens', title: 'Java Programming', desc: 'OOP in depth — strong for ICSE/CBSE CS and Android foundations.', tags: ['Java', 'Board'] },
    cppTeen: { href: '/courses/cpp-programming-masterclass-for-teens', pill: 'C++', img: IMG('cpp-teens.webp'), alt: 'C++ for teens', title: 'C++ Programming', desc: 'STL, pointers, OOP — the CP and JEE Advanced prep language.', tags: ['C++', 'CP'] },
    appTeen: { href: '/courses/complete-app-development-masterclass-for-teens', pill: 'App Dev', img: IMG('app-dev-teens.webp'), alt: 'App development for teens', title: 'App Development', desc: 'Flutter + Firebase — build and publish real mobile apps.', tags: ['Flutter'] },
    aimlTeen: { href: '/courses/ai-ml-masterclass-teens', pill: 'AI/ML', img: IMG('ai-ml-teens.webp'), alt: 'AI and ML for teens', title: 'AI & ML Masterclass', desc: 'Pandas, sklearn, neural net intro — real AI projects, real data.', tags: ['AI', 'ML'] },
    gameTeen: { href: '/courses/complete-game-development-masterclass-for-teens', pill: 'Game Dev', img: IMG('game-dev-teens.webp'), alt: 'Game development for teens', title: 'Game Development', desc: 'Unity / Godot — playable games with physics and levels.', tags: ['Unity'] },
    dsaTeen: { href: '/courses/problem-solving-dsa-masterclass-teens', pill: 'DSA', img: IMG('data-structure-algorithms.webp'), alt: 'DSA masterclass for teens', title: 'DSA & Problem Solving', desc: 'Arrays, strings, trees, DP — core of every CS interview.', tags: ['DSA'] },
    mysqlTeen: { href: '/courses/mysql-mastery-for-teens', pill: 'SQL', img: IMG('mysql-teens.webp'), alt: 'MySQL for teens', title: 'MySQL Mastery', desc: 'Joins, subqueries — directly relevant to CBSE IP / CS projects.', tags: ['SQL'] },
    frontendTeen: { href: '/courses/frontend-development-masterclass-for-teens', pill: 'Frontend', img: IMG('frontend-teens.webp'), alt: 'Frontend masterclass for teens', title: 'Frontend Development', desc: 'Pixel-perfect responsive UI, animations, Tailwind.', tags: ['UI'] },
    backendTeen: { href: '/courses/backend-coding-masterclass-for-teens', pill: 'Backend', img: IMG('backend-teens.webp'), alt: 'Backend coding for teens', title: 'Backend Coding', desc: 'APIs, auth, databases. The half of the web employers love.', tags: ['API'] },
    cbseCS: { href: '/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course', pill: 'Board', img: IMG('python-teens.webp'), alt: 'CBSE ICSE CS Class 11 12 course', title: 'CBSE/ICSE CS 11–12', desc: 'Board-aligned Python + Java — full syllabus, sample papers.', tags: ['Board', 'CS'] },
    cbseIP: { href: '/courses/cbse-informatics-practices-ip-class-11-12-python-pandas-sql-complete-course', pill: 'IP', img: IMG('ip-cs-class-11-12.webp'), alt: 'CBSE IP Class 11 12', title: 'CBSE IP 11–12', desc: 'Python, Pandas, SQL — the exact tools Informatics Practices tests.', tags: ['IP'] },
    compTeen: { href: '/courses/competitive-programming-masterclass', pill: 'CP', img: IMG('data-structure-algorithms.webp'), alt: 'Competitive programming masterclass', title: 'Competitive Programming', desc: 'Codeforces/CodeChef rating climb — algorithms that win contests.', tags: ['CP'] }
};

const CITY_CHIPS = [
    { href: '/best-coding-class-in-delhi', label: 'Delhi' },
    { href: '/best-coding-class-in-mumbai', label: 'Mumbai' },
    { href: '/best-coding-class-in-bengaluru', label: 'Bengaluru' },
    { href: '/best-coding-class-in-hyderabad', label: 'Hyderabad' },
    { href: '/best-coding-class-in-chennai', label: 'Chennai' },
    { href: '/best-coding-class-in-pune', label: 'Pune' },
    { href: '/best-coding-class-in-kolkata', label: 'Kolkata' },
    { href: '/best-coding-class-in-ahmedabad', label: 'Ahmedabad' }
];

module.exports = [

    /* ---------- CLASS 4 ---------- */
    {
        slug: 'coding-for-class-4',
        pageTitle: 'Coding for Class 4 — Scratch, Block Coding & First Python for 9 Year Olds',
        metaDescription: 'Live online coding classes for Class 4 students. Scratch games, block coding, first Python lines and AI tools matched to Class 4 ICT syllabus. 1 hour classes.',
        keywords: 'coding for class 4, class 4 computer syllabus, scratch for class 4, coding for 9 year olds, cbse class 4 computer, icse class 4 computer, block coding class 4, python for class 4, online coding class 4, computer classes class 4, kids coding class 4, best coding class for class 4',
        audienceType: 'Class 4 students',
        courseCode: 'GRADE-4',
        courseName: 'Coding for Class 4',
        courseDesc: 'Live online coding for Class 4 students — Scratch games, first Python lines, HTML basics. 1 hour live sessions, 1-on-1 or small group.',
        breadcrumbName: 'Coding for Class 4',
        accent: '#fb923c', accent2: '#f472b6', bodyClass: 'grade-4-page',
        badge: '4', badgeLabel: 'Class · Grade',
        eyebrow: 'For parents of Class 4 students · Age 9',
        h1Before: 'Coding for ', h1Highlight: 'Class 4', h1After: ' — the year logic becomes a game.',
        heroSub: 'Class 4 students can hold a three-step plan in their head, type short sentences on a keyboard, and love showing finished work to parents. Our 1 hour live classes use that sweet spot — Scratch games, tiny Python, AI taster.',
        trust: [
            { big: '3,400+', sub: 'Class 4 students taught' },
            { big: '4.9 / 5', sub: 'Parent rating · 380+ reviews' },
            { big: '1 hour', sub: 'Live class, 1:1 or small group' },
            { big: '6 weeks', sub: 'To their first finished Scratch game' }
        ],
        chips: ['Scratch games', 'Keyboard comfort', 'First Python'],
        coursesHeading: 'Courses that fit Class 4 energy and Class 4 brains.',
        coursesLede: 'At Class 4, the right course keeps hands busy and minds curious. These are our top picks — all live, 1 hour, with a real teacher watching every line.',
        courses: [KIDS.scratch, KIDS.kidsBlocks, KIDS.gameKids, KIDS.pythonKids, KIDS.aiKids, KIDS.htmlKids, KIDS.creativeKids, KIDS.problemKids],
        skipHeading: 'Already finished school-year Scratch units?',
        skipBody: 'If your Class 4 child has already completed school Scratch work or Code.org Grade 3–4, <strong>skip the intro</strong> and start directly on <a href="/courses/python-ai-kids-masterclass" style="color:inherit;text-decoration:underline;">Python for Kids</a>, <a href="/courses/kids-ai-mastery-course" style="color:inherit;text-decoration:underline;">AI Tools</a> or <a href="/courses/game-development-masterclass-for-kids" style="color:inherit;text-decoration:underline;">Game Development</a>. Free demo places them right.',
        whyHeading: 'Class 4 is the perfect first coding year.',
        whyLede: 'Old enough to read and type, young enough to be free of exam pressure. The CBSE and ICSE Class 4 computer books introduce coding gently — we take that starter and turn it into real, finished projects.',
        whys: [
            { tag: 'Syllabus', title: 'CBSE/ICSE Class 4 Computer covers Scratch', body: 'Most Class 4 computer textbooks have an early Scratch chapter. Our curriculum covers everything in that chapter and goes three levels deeper — so school tests feel trivial.' },
            { tag: 'Typing', title: 'Keyboard fluency is enough', body: 'By Class 4, most children can type short sentences. That\'s enough for 3 to 5 line Python programs. We pair blocks and text without pressure.' },
            { tag: 'Time', title: 'No board pressure yet', body: 'Class 4 is still in the deep curiosity zone. The year is long, homework is light, and there is room to learn something hard slowly and enjoyably.' }
        ],
        projectsHeading: 'Six projects your Class 4 student actually finishes.',
        projectsLede: 'The same six projects every Class 4 student of ours ships. Not ideas, not demos — finished, saved, shown-to-family work.',
        projects: [
            { sticker: 'Game', title: 'Maze Chase in Scratch', desc: 'Arrow keys, a maze, a monster. First real game they can show friends.', tags: ['keys', 'collisions'] },
            { sticker: 'Game', title: 'Apple Catcher', desc: 'Score counter, lives, levels — classic arcade pattern.', tags: ['score', 'loops'] },
            { sticker: 'Python', title: 'Joke Generator', desc: 'Three-line Python program that picks a random joke. First text-code win.', tags: ['random', 'print'] },
            { sticker: 'AI', title: 'Teachable Pet', desc: 'Train an image model, hook it to a Scratch cat that reacts.', tags: ['AI', 'model'] },
            { sticker: 'Web', title: 'Favourite Things Page', desc: 'A small HTML page about themselves — hosted online, shareable.', tags: ['html', 'links'] },
            { sticker: 'Create', title: 'Animated Greeting Card', desc: 'A birthday card with music, confetti and a name. Sent to a cousin.', tags: ['animation', 'sound'] }
        ],
        roadmapHeading: 'Four stages across a school year.',
        roadmapLede: 'We align to the school calendar — lighter around mid-terms, steady otherwise. This is what most Class 4 students walk through.',
        roadmap: [
            { label: 'Term 1 · Warm-up', title: 'Scratch comfort', body: 'Sprites, events, motion — short silly projects. The goal is "I enjoy coding class" more than any specific skill.', tags: ['sprites', 'events', 'fun'] },
            { label: 'Term 1 · Games', title: 'First finished games', body: 'Maze chase, apple catcher. Computational thinking quietly moves in through loops and score.', tags: ['loops', 'score', 'lives'] },
            { label: 'Term 2 · First Python', title: 'Three-line programs', body: 'Python enters with jokes, tip calculators, dice rollers. Typing is the new skill — blocks stay too.', tags: ['print', 'input', 'random'] },
            { label: 'Term 2 · Web or AI', title: 'Pick a direction', body: 'Either an HTML personal page or an AI Teachable Machine project. Most Class 4 students do both eventually.', tags: ['html', 'AI', 'deploy'] }
        ],
        compareHeading: 'Class 3 vs 4 vs 5 — what actually changes.',
        compareLede: 'If your child is on a boundary, here is the plain difference. Each row is a real classroom shift.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Class 3' },
                { label: 'Class 4 (this page)' },
                { label: 'Class 5', link: '/coding-for-class-5' }
            ],
            rows: [
                { label: 'Main tool', values: ['Scratch Jr', 'Scratch + early Python', 'Scratch + Python + HTML'] },
                { label: 'Typing', values: ['Short words', 'Short sentences', 'Full sentences'] },
                { label: 'Project length', values: ['1 session', '1 to 2 sessions', '2 to 3 sessions'] },
                { label: 'Python', values: ['Not yet', '3-line programs', 'Small programs'] },
                { label: 'AI', values: ['Story only', 'Teachable Machine', 'First classifier'] },
                { label: 'Session', values: ['1 hour', '1 hour', '1 hour'] }
            ]
        },
        reviewsHeading: 'Class 4 parents — their own words.',
        reviewsLede: 'Three recent reviews from Class 4 families. Privacy-shortened.',
        reviews: [
            { initial: 'C', name: 'Chitra R.', meta: 'Parent · Bengaluru · Group', body: 'My daughter is Class 4 ICSE. Her school computer teacher thinks she\'s advanced — she built a maze game that actually has a monster. The small group format suits her; she likes showing her work to classmates.' },
            { initial: 'I', name: 'Irfan M.', meta: 'Parent · Delhi · 1-on-1', body: 'We tried a self-paced coding app for a year — nothing stuck. One live 1-on-1 class a week and now my son asks about loops at dinner. The teacher is patient and specific.' },
            { initial: 'L', name: 'Lata V.', meta: 'Parent · Chennai · Group', body: 'The teacher shares a weekend voice note. Small thing but makes parents feel informed. My Class 4 daughter has built 4 games already. She shows them to grandparents on WhatsApp.' }
        ],
        faqs: [
            { q: 'Is Class 4 too early for coding?', a: 'Not at all. Class 4 students can read short paragraphs, follow instructions and love making things. That\'s exactly what Scratch asks for. Real Python, gently, comes mid-year.' },
            { q: 'Do you cover what the school computer book teaches?', a: 'Yes and more. The Class 4 school book is typically an intro to Scratch — we cover that deeply and add real projects school doesn\'t have time for.' },
            { q: 'How often per week?', a: 'Two 1-hour sessions a week is standard. You can choose weekends if weekdays are tight with school.' },
            { q: '1-on-1 or small group for Class 4?', a: 'Small group works for most. 1-on-1 is better for very shy or very advanced learners. The free demo helps you decide.' },
            { q: 'What equipment is needed?', a: 'Any laptop or desktop from the last 5 years. Stable internet, headphones, webcam. Tablets do not work well for coding — a real keyboard matters.' },
            { q: 'Is this fun or like school?', a: 'Fun. Most Class 4 students describe it as their favourite class. The projects always end with something they can show off.' },
            { q: 'Will this help with Class 5 school computer subject?', a: 'Strongly. By the end of Class 4 with us, most students are ahead of Class 6 school computer syllabus.' },
            { q: 'Is there a free demo?', a: 'Yes. One full 1 hour live class with a real teacher. No card. Refund on unused portion within 2 weeks if needed.' }
        ],
        relatedChips: [
            { href: '/coding-for-class-5', small: 'Higher', label: 'Coding for Class 5' },
            { href: '/coding-for-class-6', small: 'Higher', label: 'Coding for Class 6' },
            { href: '/coding-for-9-year-olds', small: 'Age', label: 'Coding for 9 Year Olds' },
            { href: '/coding-for-10-year-olds', small: 'Age', label: 'Coding for 10 Year Olds' },
            { href: '/python-and-ai-classes-for-kids-teens', small: 'Course', label: 'Python & AI for Kids' },
            { href: '/coding-classes-for-girls', small: 'Special', label: 'Coding for Girls' },
            { href: '/best-coding-classes-online', small: 'Compare', label: 'Best Online Classes' },
            { href: '/summer-coding-camp-kids', small: 'Camp', label: 'Summer Coding Camp' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- CLASS 5 ---------- */
    {
        slug: 'coding-for-class-5',
        pageTitle: 'Coding for Class 5 — Python, Scratch & AI Tools for 10 Year Olds',
        metaDescription: 'Live online coding classes for Class 5 students. Python basics, Scratch games, HTML first pages and AI taster projects matched to Class 5 syllabus. 1 hour live classes.',
        keywords: 'coding for class 5, class 5 computer syllabus, python for class 5, scratch for class 5, cbse class 5 computer, icse class 5 computer, coding class 5 online, kids coding class 5, class 5 html, ai class 5, best coding class for class 5, computer class 5',
        audienceType: 'Class 5 students',
        courseCode: 'GRADE-5',
        courseName: 'Coding for Class 5',
        courseDesc: 'Live online coding for Class 5 students. Scratch, Python basics, HTML, and AI Teachable Machine. 1 hour live sessions.',
        breadcrumbName: 'Coding for Class 5',
        accent: '#14b8a6', accent2: '#a855f7', bodyClass: 'grade-5-page',
        badge: '5', badgeLabel: 'Class · Grade',
        eyebrow: 'For parents of Class 5 students · Age 10',
        h1Before: 'Coding for ', h1Highlight: 'Class 5', h1After: ' — when Python starts to make sense.',
        heroSub: 'Class 5 is the bridge year — from playful blocks into real Python. Our 1 hour live classes take what school introduces and go deeper: finished games, first webpages, a first AI project. All live, 1:1 or small group.',
        trust: [
            { big: '4,100+', sub: 'Class 5 students with us' },
            { big: '4.9 / 5', sub: 'Parent rating · 510+ reviews' },
            { big: '1 hour', sub: 'Live class, 1:1 or small group' },
            { big: '10 weeks', sub: 'From Scratch to first Python project' }
        ],
        chips: ['Scratch fluent', 'First Python', 'First AI taster'],
        coursesHeading: 'Class 5 courses — our top picks.',
        coursesLede: 'At Class 5, the right courses combine fun projects with real skills. Python through Turtle, Scratch games, a first webpage they can show. All live, 1 hour.',
        courses: [KIDS.pythonKids, KIDS.scratch, KIDS.aiKids, KIDS.gameKids, KIDS.htmlKids, KIDS.appKids, KIDS.creativeKids, KIDS.problemKids],
        skipHeading: 'Already did Scratch projects in Class 4?',
        skipBody: 'If your Class 5 child already has Scratch projects under the belt, <strong>skip repeating intro blocks</strong> and jump straight into <a href="/courses/python-ai-kids-masterclass" style="color:inherit;text-decoration:underline;">Python for Kids</a>, <a href="/courses/kids-ai-mastery-course" style="color:inherit;text-decoration:underline;">AI Tools</a> or <a href="/courses/kids-ai-web-development-course" style="color:inherit;text-decoration:underline;">Web Development</a>. Demo teacher confirms level in 10 minutes.',
        whyHeading: 'Class 5 is when imagination meets real tools.',
        whyLede: 'Your child can plan, type, debug simple errors, and follow a 5-step project. That is exactly what real Python asks for. Everything below builds on those three habits.',
        whys: [
            { tag: 'Syllabus', title: 'CBSE Class 5 introduces Python basics', body: 'Most CBSE Class 5 computer books now include a Python chapter. Our curriculum keeps that book open and goes 3 levels deeper — so school becomes effortless revision.' },
            { tag: 'Patience', title: 'They can debug without meltdown', body: 'At Class 5, most children can handle a broken program without giving up. That one habit unlocks everything — without it, nothing works.' },
            { tag: 'Career seed', title: 'AI and Python make sense at 10', body: 'Children at this age have heard of ChatGPT and AI. We use that curiosity to introduce real Python and Teachable Machine — not toys, real tools at the right depth.' }
        ],
        projectsHeading: 'Six projects your Class 5 student ships.',
        projectsLede: 'Each project is designed for Class 5 specifically — not a hand-me-down from older grades. Finishable, fun, and it teaches something real.',
        projects: [
            { sticker: 'Python', title: 'Number Guess', desc: 'Computer picks a secret number; player guesses. First real if/else program.', tags: ['if-else', 'random'] },
            { sticker: 'Game', title: 'Pong in Scratch', desc: 'Two paddles, one ball, a score counter. A game their parents recognise.', tags: ['collision', 'score'] },
            { sticker: 'AI', title: 'Teachable Machine + Scratch', desc: 'Train a gesture model, hook it into a Scratch character. First AI moment.', tags: ['AI', 'training'] },
            { sticker: 'Python', title: 'Turtle Star Sky', desc: 'Nested loops in Python\'s turtle — a night sky of coloured stars.', tags: ['turtle', 'loops'] },
            { sticker: 'Web', title: 'My Hobbies Webpage', desc: 'HTML + CSS personal page, deployed online with a real link.', tags: ['html', 'css'] },
            { sticker: 'Maths', title: 'Class 5 Maths Quiz', desc: 'Python program that drills multiplication and division. Scored, levelled up.', tags: ['loops', 'score'] }
        ],
        roadmapHeading: 'Four stages across Class 5.',
        roadmapLede: 'We pace this around the school calendar — a little lighter during mid-terms and annual exams, steady otherwise.',
        roadmap: [
            { label: 'Term 1 · Foundations', title: 'Scratch finish + typing', body: 'Finish any remaining Scratch projects. Introduce keyboard comfort. Teachers keep an eye on typing speed — enough for short Python soon.', tags: ['scratch', 'typing'] },
            { label: 'Term 1–2 · Python I', title: 'Three to eight line programs', body: 'print, input, if-else, random, simple loops. Micro-programs — a dice roller, a joke generator, a number guess. Real Python, gentle pace.', tags: ['print', 'input', 'loops'] },
            { label: 'Term 2 · Turtle + AI', title: 'Drawing with code + first AI', body: 'Turtle graphics makes loops visible. Teachable Machine opens the AI door. Two big moments of "I made this" happen here.', tags: ['turtle', 'AI'] },
            { label: 'Term 3 · Web', title: 'First personal website', body: 'HTML + CSS. Deployed to a free host. A real URL they share with family. The proudest moment of Class 5 coding.', tags: ['html', 'deploy'] }
        ],
        compareHeading: 'Class 4 vs 5 vs 6 — the middle school step.',
        compareLede: 'If you are deciding whether to start now or next year, this table shows what actually changes.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Class 4', link: '/coding-for-class-4' },
                { label: 'Class 5 (this page)' },
                { label: 'Class 6', link: '/coding-for-class-6' }
            ],
            rows: [
                { label: 'Main tool', values: ['Scratch + Python intro', 'Python + Scratch + HTML', 'Python + HTML/CSS + AI'] },
                { label: 'Typing', values: ['Short sentences', 'Comfortable text', 'Full programs'] },
                { label: 'Project first', values: ['Joke generator', 'Number guess', 'Rock paper scissors'] },
                { label: 'AI depth', values: ['Teachable Machine intro', 'Gesture model project', 'sklearn basics'] },
                { label: 'Session', values: ['1 hour', '1 hour', '1 hour'] },
                { label: 'Best format', values: ['Group', 'Both', 'Both'] }
            ]
        },
        reviewsHeading: 'Class 5 parents — in their own words.',
        reviewsLede: 'Three recent reviews from Class 5 families.',
        reviews: [
            { initial: 'T', name: 'Tanya P.', meta: 'Parent · Hyderabad · 1-on-1', body: 'My son is Class 5 CBSE. After two terms he writes Python programs without peeking at the book. He built a website about cricket and sent the link to his uncle in Canada. That felt like a milestone to us.' },
            { initial: 'O', name: 'Omkar D.', meta: 'Parent · Pune · Group', body: 'Small group of 5 Class 5 students, all at similar levels. Teacher is strict in a kind way. Homework is short but meaningful. My daughter\'s school CS marks went from 72 to 96 in two quarters.' },
            { initial: 'B', name: 'Bhanu K.', meta: 'Parent · Bengaluru · 1-on-1', body: 'We picked 1-on-1 because my son is advanced. The teacher doesn\'t slow him down — she pushes him exactly where he is. He finished Python basics in 4 weeks and is now building a Teachable Machine pet.' }
        ],
        faqs: [
            { q: 'Is Class 5 the right age to start Python?', a: 'Yes — arguably the ideal age. The cognitive and typing fluency both line up. We start small and build up. Most Class 5 students are writing 15-line programs within 10 weeks.' },
            { q: 'Does this cover Class 5 school computer syllabus?', a: 'Yes. Every major Class 5 book introduces Python or Scratch. We cover it weekly plus real projects the school cannot fit in.' },
            { q: 'What about Class 5 ICSE?', a: 'ICSE Class 5 computer books vary by school but typically cover Scratch and early HTML. We match that and more — our ICSE-specific students also preview the Class 6 syllabus.' },
            { q: 'Will this help with Computer Olympiads?', a: 'Yes. We have an optional Olympiad track starting Class 5 that covers CCO and NCO patterns. Separate from the main curriculum.' },
            { q: '1-on-1 or small group for Class 5?', a: 'Both work. Small group is great for social learners. 1-on-1 is better for students with specific goals or faster pace.' },
            { q: 'How much homework?', a: '15 to 20 minutes a week. Usually "finish your project" rather than new exercises. Never pressure.' },
            { q: 'Is there a Class 5 school project we can help with?', a: 'Yes. Schools often ask for a Class 5 computer project. We help pick a topic, build it properly, and prepare the viva.' },
            { q: 'Free demo?', a: 'Yes — full 1 hour live class. No card. Refund on unused portion within 2 weeks if it doesn\'t fit.' }
        ],
        relatedChips: [
            { href: '/coding-for-class-4', small: 'Lower', label: 'Coding for Class 4' },
            { href: '/coding-for-class-6', small: 'Higher', label: 'Coding for Class 6' },
            { href: '/coding-for-10-year-olds', small: 'Age', label: 'Coding for 10 Year Olds' },
            { href: '/coding-for-11-year-olds', small: 'Age', label: 'Coding for 11 Year Olds' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' },
            { href: '/coding-for-icse-students', small: 'Board', label: 'ICSE Coding' },
            { href: '/python-and-ai-classes-for-kids-teens', small: 'Course', label: 'Python & AI for Kids' },
            { href: '/java-programming-for-kids-teens', small: 'Course', label: 'Java for Kids' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- CLASS 6 ---------- */
    {
        slug: 'coding-for-class-6',
        pageTitle: 'Coding for Class 6 — Python, HTML/CSS & AI Projects Matched to CBSE/ICSE Syllabus',
        metaDescription: 'Live online coding for Class 6 students. Python fluency, HTML/CSS deployed websites, AI Teachable Machine, matched to CBSE Class 6 Code 166 and ICSE ICT syllabus.',
        keywords: 'coding for class 6, class 6 cbse coding, class 6 icse computer, python for class 6, html css class 6, ai projects class 6, coding class 6 online, cbse 166 class 6, icse ict class 6, coding for 11 year olds, best coding class for class 6, computer class 6 online',
        audienceType: 'Class 6 students',
        courseCode: 'GRADE-6',
        courseName: 'Coding for Class 6',
        courseDesc: 'Live online coding for Class 6 — Python fluency, HTML/CSS, first AI projects, aligned to CBSE/ICSE Class 6 syllabus. 1 hour live sessions.',
        breadcrumbName: 'Coding for Class 6',
        accent: '#3b82f6', accent2: '#14b8a6', bodyClass: 'grade-6-page',
        badge: '6', badgeLabel: 'Class · Grade',
        eyebrow: 'For parents of Class 6 students · Age 11',
        h1Before: 'Coding for ', h1Highlight: 'Class 6', h1After: ' — where school coding finally gets real.',
        heroSub: 'Class 6 is the year CBSE formally introduces coding. Our 1 hour live classes take that starter and turn it into fluent Python, deployed websites and a first proper AI project — not just textbook answers.',
        trust: [
            { big: '4,700+', sub: 'Class 6 students with us' },
            { big: '4.9 / 5', sub: 'Parent rating · 550+ reviews' },
            { big: '1 hour', sub: 'Per live class, 1:1 or group' },
            { big: '8 weeks', sub: 'To fluent Python + deployed site' }
        ],
        chips: ['CBSE 166 aligned', 'Python fluent', 'AI explorer'],
        coursesHeading: 'Courses for a Class 6 student who wants to go deeper.',
        coursesLede: 'At Class 6 the right courses are real: Python with functions, HTML/CSS that deploys, a first meaningful AI project. These are the ones that fit.',
        courses: [KIDS.pythonKids, KIDS.htmlKids, KIDS.aiKids, KIDS.gameKids, KIDS.appKids, KIDS.creativeKids, KIDS.problemKids, KIDS.scratch],
        skipHeading: 'Already comfortable with Scratch and HTML basics?',
        skipBody: 'If your Class 6 child has Scratch or basic HTML under the belt, <strong>skip ahead</strong> into <a href="/courses/python-ai-kids-masterclass" style="color:inherit;text-decoration:underline;">Python with functions</a>, <a href="/courses/kids-ai-mastery-course" style="color:inherit;text-decoration:underline;">real AI Tools</a> or <a href="/courses/game-development-masterclass-for-kids" style="color:inherit;text-decoration:underline;">Game Dev</a>. Free demo places them.',
        whyHeading: 'Class 6 unlocks the first serious year of coding.',
        whyLede: 'CBSE Class 6 Code 166 and ICSE ICT chapters introduce coding formally — most schools teach Python and Scratch. A Class 6 child who goes deep this year becomes the school computer topper by default.',
        whys: [
            { tag: 'Syllabus', title: 'CBSE Code 166 is Python-centric', body: 'The CBSE Class 6 Code 166 textbook is Python + AI basics. Our curriculum covers every chapter plus a real project shelf school cannot fit in.' },
            { tag: 'Abstract', title: 'Variables, functions, loops all click', body: 'At Class 6, children can handle abstract ideas — a variable is "a box for a value", a function is "a tool you named". Once these concepts land, the project door opens.' },
            { tag: 'Identity', title: 'First signs of "I am a coder"', body: 'Class 6 is typically when children start identifying as coders. We nurture that with real work — their first deployed site, their first merged GitHub commit.' }
        ],
        projectsHeading: 'Six Class 6 projects a kid is proud of.',
        projectsLede: 'These are the six projects every Class 6 student of ours builds. Unique to Class 6 — not borrowed from higher grades.',
        projects: [
            { sticker: 'Python', title: 'Rock–Paper–Scissors', desc: 'Best of five against the computer. First serious use of random + conditions.', tags: ['random', 'if-elif'] },
            { sticker: 'Python', title: 'Calculator App', desc: 'A small calculator with error handling. Functions introduced properly.', tags: ['functions', 'errors'] },
            { sticker: 'Web', title: 'Deployed Personal Site', desc: '3-page HTML/CSS site, hosted free on Netlify. A real URL.', tags: ['html', 'netlify'] },
            { sticker: 'AI', title: 'Image Classifier', desc: 'Teachable Machine + Python — classify three types of objects. Real model call.', tags: ['AI', 'model'] },
            { sticker: 'Game', title: 'Pygame Pong', desc: 'Python Pong using pygame. First taste of the library everyone uses.', tags: ['pygame'] },
            { sticker: 'Data', title: '10-Question Quiz', desc: 'Quiz with score, level-up, high-score saved to file. Introduces files.', tags: ['files', 'lists'] }
        ],
        roadmapHeading: 'Four stages across Class 6.',
        roadmapLede: 'Matched to CBSE/ICSE Class 6 terms. We speed up where the school slows down — and vice versa.',
        roadmap: [
            { label: 'Term 1 · Python I', title: 'Fluency first', body: 'print, input, if-elif, loops, functions. Six or seven tiny programs finished by the end. This is where typing and logic come together.', tags: ['functions', 'loops', 'debug'] },
            { label: 'Term 1–2 · Web', title: 'HTML/CSS + deploy', body: 'Three-page site, CSS styling, deployed to Netlify. First real link they share.', tags: ['html', 'css', 'deploy'] },
            { label: 'Term 2 · AI', title: 'Classifier + Python call', body: 'Teachable Machine + Python to call the model. Discuss dataset and bias at this age — they get it.', tags: ['AI', 'dataset'] },
            { label: 'Term 3 · Game or App', title: 'Pick one', body: 'Pygame Pong or MIT App Inventor starter app. Something they can install or play.', tags: ['pygame', 'app'] }
        ],
        compareHeading: 'Class 5 vs 6 vs 7.',
        compareLede: 'Class 6 is where coding switches from "cute activity" to "real skill". This shows what shifts.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Class 5', link: '/coding-for-class-5' },
                { label: 'Class 6 (this page)' },
                { label: 'Class 7', link: '/coding-for-class-7' }
            ],
            rows: [
                { label: 'Main tool', values: ['Python + Scratch + HTML', 'Python + HTML/CSS + AI', 'Python + JS + AI'] },
                { label: 'Program size', values: ['10 lines', '30 lines with functions', '50+ lines'] },
                { label: 'Deploy', values: ['Rarely', 'First deploy', 'Multi-page deploys'] },
                { label: 'AI', values: ['First classifier', 'Classifier + Python', 'sklearn basics'] },
                { label: 'Board link', values: ['Class 5 Python intro', 'CBSE 166 / ICSE ICT', 'Class 7 formal coding'] },
                { label: 'Best format', values: ['Both', 'Both', 'Both'] }
            ]
        },
        reviewsHeading: 'Real Class 6 parents.',
        reviewsLede: 'Three recent unedited reviews from Class 6 families.',
        reviews: [
            { initial: 'M', name: 'Manjula S.', meta: 'Parent · Chennai · 1-on-1', body: 'Class 6 CBSE. Her teacher made her the computer lab helper after a week. She built a calculator with error handling — I had to ask her what that meant. That is how far ahead she is.' },
            { initial: 'R', name: 'Ravi T.', meta: 'Parent · Noida · Group', body: 'Small batch with 5 Class 6 kids. They roast each other\'s code in a friendly way. My son learned debugging faster because of it. Teacher is firm and fair.' },
            { initial: 'V', name: 'Vandana G.', meta: 'Parent · Delhi · 1-on-1', body: 'We switched from another platform. The difference: live teacher watching the code being typed. My son built and deployed a personal website in 3 weeks. He shows the URL to every relative now.' }
        ],
        faqs: [
            { q: 'Does this cover CBSE Class 6 Code 166?', a: 'Fully. The Code 166 book is Python + AI basics. Our curriculum covers every chapter deeply plus real projects school cannot fit in.' },
            { q: 'And ICSE Class 6 ICT?', a: 'Yes. ICSE Class 6 covers Scratch + HTML intro + computer fundamentals. Our teachers know the exact ICSE ICT rubric.' },
            { q: 'Is Python enough or should we also learn Java?', a: 'Python is enough at Class 6. Java becomes relevant from Class 8 onwards, especially for ICSE students heading into Class 9.' },
            { q: 'How about Scratch — is it too babyish at Class 6?', a: 'Not at all. We use Scratch for game-dev and AI-bridge projects where the visual format still shines. Alongside real Python.' },
            { q: 'How much time alongside school?', a: '2 hours a week is the typical commitment. Most families do weekends. The CBSE 166 link means school homework becomes a revision of our class.' },
            { q: 'Can my Class 6 child attempt coding Olympiads?', a: 'Yes. Our optional Olympiad track prepares for NCO, CCO, CodeKraft and similar. Separate from the main weekly curriculum.' },
            { q: 'What if my child already knows Python a bit?', a: 'Perfect — the free demo has a level check. We may start them on functions + files instead of basics, or jump into a project-first track.' },
            { q: 'Is there 1-on-1?', a: 'Yes. 1-on-1 is ideal for advanced students or those aiming for Olympiads. Group is great for social learners at Class 6.' }
        ],
        relatedChips: [
            { href: '/coding-for-class-5', small: 'Lower', label: 'Coding for Class 5' },
            { href: '/coding-for-class-7', small: 'Higher', label: 'Coding for Class 7' },
            { href: '/coding-for-11-year-olds', small: 'Age', label: 'Coding for 11 Year Olds' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' },
            { href: '/coding-for-icse-students', small: 'Board', label: 'ICSE Coding' },
            { href: '/python-and-ai-classes-for-kids-teens', small: 'Course', label: 'Python & AI for Kids' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/java-programming-for-kids-teens', small: 'Course', label: 'Java for Kids' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- CLASS 7 ---------- */
    {
        slug: 'coding-for-class-7',
        pageTitle: 'Coding for Class 7 — Python, JavaScript, App Dev & AI for CBSE/ICSE Students',
        metaDescription: 'Coding classes for Class 7 students. Python with functions, JavaScript intro, app development starter and real AI projects aligned to CBSE/ICSE Class 7 syllabus.',
        keywords: 'coding for class 7, class 7 python, javascript for class 7, app development class 7, ai for class 7, cbse class 7 computer, icse class 7 computer, coding for 12 year olds, kids coding class 7, coding class 7 online, full stack class 7, html css javascript class 7',
        audienceType: 'Class 7 students',
        courseCode: 'GRADE-7',
        courseName: 'Coding for Class 7',
        courseDesc: 'Live online coding for Class 7. Python with functions and files, JavaScript intro, app dev, AI projects. 1 hour live sessions, 1:1 or group.',
        breadcrumbName: 'Coding for Class 7',
        accent: '#6366f1', accent2: '#3b82f6', bodyClass: 'grade-7-page',
        badge: '7', badgeLabel: 'Class · Grade',
        eyebrow: 'For parents of Class 7 students · Age 12',
        h1Before: 'Coding for ', h1Highlight: 'Class 7', h1After: ' — bridging into real full stack.',
        heroSub: 'Class 7 is the bridge year. Still a kid, but ready for real tools — Python functions and files, first JavaScript on HTML, first app prototype and first real AI dataset. Our 1 hour live classes make the bridge smooth.',
        trust: [
            { big: '5,100+', sub: 'Class 7 students taught' },
            { big: '4.9 / 5', sub: 'Parent rating · 580+ reviews' },
            { big: '1 hour', sub: 'Per live class, 1:1 or group' },
            { big: '10 weeks', sub: 'To deployed site + Python mini-app' }
        ],
        chips: ['Functions fluent', 'First JS', 'First app'],
        coursesHeading: 'Class 7 courses — pick a direction.',
        coursesLede: 'At Class 7, the right course is usually the one that matches interest. Some kids love games, some love web, some love AI. Here is the full list — all live, 1 hour.',
        courses: [KIDS.pythonKids, KIDS.htmlKids, KIDS.aiKids, KIDS.gameKids, KIDS.appKids, KIDS.creativeKids, KIDS.problemKids, KIDS.officeKids],
        skipHeading: 'Already writing Python on their own?',
        skipBody: 'If your Class 7 child already writes Python, <strong>skip basics</strong> and move straight into <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI & ML</a>, <a href="/courses/full-stack-web-development-teens-masterclass" style="color:inherit;text-decoration:underline;">Full Stack Web Dev</a> or <a href="/courses/complete-app-development-masterclass-for-teens" style="color:inherit;text-decoration:underline;">App Development</a>. Demo teacher places them right.',
        whyHeading: 'Class 7 is when curiosity gets a toolbox.',
        whyLede: 'A Class 7 child can follow tutorials, watch 10-minute YouTube lessons and try things between classes. That independence changes what a teacher\'s job becomes — from hand-holding to setting the right next challenge.',
        whys: [
            { tag: 'Independence', title: 'They can learn between classes', body: 'Most Class 7 children can follow a written instruction or a short video. We shift from drill mode to coaching — setting stretch goals, reviewing their self-driven work.' },
            { tag: 'Capacity', title: 'Longer focus on engaging problems', body: 'A 12-year-old can focus 40 minutes straight on a project they care about. We use that for real, finishable things — a Flutter prototype, a sklearn mini-project.' },
            { tag: 'Career sense', title: 'First "this is for me" moment', body: 'Class 7 is when most of our students first say "I want to do this for college". We take that seriously — portfolio starts building, GitHub opens up.' }
        ],
        projectsHeading: 'Six Class 7 projects that show up on GitHub.',
        projectsLede: 'Projects at Class 7 should be real enough to publish. These are the six every Class 7 student of ours keeps.',
        projects: [
            { sticker: 'Python', title: 'Text Adventure Game', desc: 'Multi-room story game with inventory and endings. Functions, dictionaries, file saves.', tags: ['functions', 'dicts'] },
            { sticker: 'Web', title: 'Interactive Profile Site', desc: 'HTML + CSS + a bit of JavaScript. Dark-mode toggle, animated typing.', tags: ['js', 'dom'] },
            { sticker: 'Python', title: 'Dice Roller Stats', desc: 'Simulate 10,000 rolls, chart the distribution with matplotlib.', tags: ['matplotlib', 'stats'] },
            { sticker: 'AI', title: 'Image Classifier v2', desc: 'sklearn + small CSV dataset. Understand accuracy, not just output.', tags: ['sklearn', 'accuracy'] },
            { sticker: 'App', title: 'First App Prototype', desc: 'MIT App Inventor or Flutter starter — their first real APK.', tags: ['flutter', 'apk'] },
            { sticker: 'Web', title: 'Data Fetch Page', desc: 'HTML page that calls a public API and shows data. First real API call.', tags: ['api', 'json'] }
        ],
        roadmapHeading: 'Four stages across Class 7.',
        roadmapLede: 'Matched to the school calendar. We speed up where the school slows and use projects to keep engagement high.',
        roadmap: [
            { label: 'Term 1 · Python II', title: 'Functions, files, errors', body: 'Beyond if-else. Functions become natural; files are read and written; errors are read and fixed. Programs start to feel like software.', tags: ['functions', 'files', 'errors'] },
            { label: 'Term 1–2 · Web with JS', title: 'First JavaScript', body: 'JS on top of HTML/CSS. DOM manipulation, event listeners, a small widget. Deploy to Netlify.', tags: ['js', 'dom'] },
            { label: 'Term 2 · AI + data', title: 'Small datasets and sklearn', body: 'CSV files, pandas basics, a simple classifier. Talk about training vs testing. Real AI vocabulary starts.', tags: ['pandas', 'sklearn'] },
            { label: 'Term 3 · App or Game', title: 'Their first publishable app', body: 'MIT App Inventor / Flutter starter, or a finished Python game with menus and sound. Something they can install or play.', tags: ['flutter', 'publish'] }
        ],
        compareHeading: 'Class 6 vs 7 vs 8 — the step from kid to pre-teen coder.',
        compareLede: 'Class 7 is a quiet but real upgrade. This is what changes.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Class 6', link: '/coding-for-class-6' },
                { label: 'Class 7 (this page)' },
                { label: 'Class 8', link: '/coding-for-class-8' }
            ],
            rows: [
                { label: 'Main stack', values: ['Python + HTML/CSS', 'Python + JS + first app', 'Python OOP + React + app'] },
                { label: 'Project scope', values: ['1–2 sessions', '3–5 sessions', 'Multi-week'] },
                { label: 'AI depth', values: ['Classifier + Python', 'sklearn basics', 'Kaggle small'] },
                { label: 'GitHub', values: ['Not yet', 'First repo', 'Portfolio in progress'] },
                { label: 'Syllabus link', values: ['CBSE Code 166', 'CBSE 167 / ICSE ICT', 'Class 8 CS'] },
                { label: 'Independence', values: ['Guided', 'Starts driving', 'Drives mostly'] }
            ]
        },
        reviewsHeading: 'Parents of Class 7 students.',
        reviewsLede: 'Three recent reviews from Class 7 families.',
        reviews: [
            { initial: 'A', name: 'Arjun V.', meta: 'Parent · Bengaluru · 1-on-1', body: 'My son was drifting in Class 7 — not failing, just uninterested. Coding gave him a thing of his own. He built a Flutter app prototype last month. He is 12, it runs on my phone, and he is so proud.' },
            { initial: 'S', name: 'Sneha R.', meta: 'Parent · Mumbai · Group', body: 'Batch of 4 Class 7 students. Teacher assigns a project and they present in the last 10 minutes of class. My daughter showed her API-fetch page last week. I did not know Class 7 students could do this.' },
            { initial: 'G', name: 'Gaurav M.', meta: 'Parent · Pune · 1-on-1', body: 'The teacher noticed my son was ahead in Python and moved him to a sklearn project. No rigid syllabus for its own sake — they meet the student where they are.' }
        ],
        faqs: [
            { q: 'Does this align with CBSE Class 7 computer syllabus?', a: 'Yes. CBSE Class 7 typically covers Python, HTML and an AI intro. Our curriculum covers all of that plus real projects.' },
            { q: 'And ICSE Class 7 computer?', a: 'ICSE Class 7 covers computer fundamentals, HTML and early programming. Covered. Plus we add real, deployed projects.' },
            { q: 'Do you teach JavaScript at Class 7?', a: 'Yes, in small doses — DOM and events. Not frameworks like React (those come at 14+).' },
            { q: 'Can a Class 7 student really learn AI?', a: 'The vocabulary and basic code — yes. We do not touch calculus. sklearn on a small CSV is very doable and feels genuinely impressive to kids.' },
            { q: '1-on-1 vs small group?', a: 'Small group works well at Class 7 because social learning helps. 1-on-1 is best for students targeting fast progress or competitions.' },
            { q: 'How is homework managed?', a: '15–20 minutes weekly. Usually "finish your own project" — not extra exercises. Nothing that feels like school.' },
            { q: 'Olympiads at Class 7?', a: 'Yes — NCO, CCO, CodeKraft. Optional track alongside the main curriculum, stepping up from Class 6.' },
            { q: 'Free demo?', a: 'Yes. One full 1 hour live class, no card. Refund on unused portion within 2 weeks if the fit is off.' }
        ],
        relatedChips: [
            { href: '/coding-for-class-6', small: 'Lower', label: 'Coding for Class 6' },
            { href: '/coding-for-class-8', small: 'Higher', label: 'Coding for Class 8' },
            { href: '/coding-for-12-year-olds', small: 'Age', label: 'Coding for 12 Year Olds' },
            { href: '/coding-for-13-year-olds', small: 'Age', label: 'Coding for 13 Year Olds' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' },
            { href: '/coding-for-icse-students', small: 'Board', label: 'ICSE Coding' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/java-programming-for-kids-teens', small: 'Course', label: 'Java for Teens' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- CLASS 8 ---------- */
    {
        slug: 'coding-for-class-8',
        pageTitle: 'Coding for Class 8 — Python OOP, Full Stack, Java & AI for CBSE/ICSE Students',
        metaDescription: 'Coding for Class 8 students. Python OOP, full-stack web with React, Java for ICSE, AI with real datasets. 1 hour live classes aligned to Class 8 CS syllabus.',
        keywords: 'coding for class 8, class 8 python, java for class 8, icse class 8 computer, cbse class 8 computer, full stack class 8, ai ml class 8, oop class 8, react for class 8, coding for 13 year olds, kids coding class 8, teen coding class 8',
        audienceType: 'Class 8 students',
        courseCode: 'GRADE-8',
        courseName: 'Coding for Class 8',
        courseDesc: 'Live online coding for Class 8. Python OOP, full-stack web, Java for ICSE, AI with datasets. 1 hour live sessions, 1:1 or group.',
        breadcrumbName: 'Coding for Class 8',
        accent: '#a855f7', accent2: '#ec4899', bodyClass: 'grade-8-page',
        badge: '8', badgeLabel: 'Class · Grade',
        eyebrow: 'For parents of Class 8 students · Age 13',
        h1Before: 'Coding for ', h1Highlight: 'Class 8', h1After: ' — the year they become real coders.',
        heroSub: 'Class 8 is the turning point. Old enough for OOP, React and deployed apps; young enough that board exams are still a year away. Our 1 hour live classes make this year count — by Class 9, your child walks in ready.',
        trust: [
            { big: '5,400+', sub: 'Class 8 teens in our classes' },
            { big: '4.9 / 5', sub: 'Parent rating · 620+ reviews' },
            { big: '1 hour', sub: 'Per live class, 1:1 or group' },
            { big: '12 weeks', sub: 'To first deployed full-stack project' }
        ],
        chips: ['OOP fluent', 'GitHub active', 'First full-stack'],
        coursesHeading: 'Class 8 — pick a real track.',
        coursesLede: 'At Class 8 the courses stop being toys. Full-stack web, AI with Kaggle-style datasets, Java for ICSE. Here are the ones our Class 8 students thrive in.',
        courses: [TEEN.pythonTeen, TEEN.fullstackTeen, TEEN.reactTeen, TEEN.javaTeen, TEEN.aimlTeen, TEEN.appTeen, TEEN.dsaTeen, TEEN.gameTeen],
        skipHeading: 'Already deploying to GitHub?',
        skipBody: 'If your Class 8 student already has projects on GitHub, <strong>skip ahead</strong> into <a href="/courses/react-for-teens-complete-masterclass" style="color:inherit;text-decoration:underline;">React</a>, <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI & ML with datasets</a>, or <a href="/courses/problem-solving-dsa-masterclass-teens" style="color:inherit;text-decoration:underline;">DSA</a>. Free demo confirms level.',
        whyHeading: 'Class 8 is the last quiet year before boards matter.',
        whyLede: 'Class 9 and 10 bring serious board pressure. Class 8 is when a real portfolio can be built without stress. Students who use Class 8 well arrive at Class 9 confident, not catching up.',
        whys: [
            { tag: 'Time', title: 'Before Class 9 board CS pressure', body: 'Class 9 brings formal CS in both CBSE and ICSE. Starting real OOP and web work in Class 8 means they enter Class 9 ahead, not behind.' },
            { tag: 'Ownership', title: 'They drive their own projects', body: 'At Class 8, most students bring project ideas. A weather app, a school portal clone, a Discord bot. We build the skills around their ideas, not the other way around.' },
            { tag: 'Community', title: 'GitHub, Discord, hackathons start', body: 'Class 8 is the right age to open GitHub. Real commits, real pull requests. By Class 10 the profile looks genuine.' }
        ],
        projectsHeading: 'Six Class 8 projects for a real portfolio.',
        projectsLede: 'These are the projects every Class 8 student of ours keeps on their GitHub. Real enough for a future college essay, small enough to actually finish.',
        projects: [
            { sticker: 'Python', title: 'OOP Todo App', desc: 'Command-line todo app using classes, inheritance, file storage. First real software design.', tags: ['oop', 'files'] },
            { sticker: 'Web', title: 'Interactive Portfolio', desc: 'React component-based portfolio site, deployed with a real domain.', tags: ['react', 'vercel'] },
            { sticker: 'App', title: 'Flutter Journal App', desc: 'Daily journal mobile app with local storage. Runs on their own phone.', tags: ['flutter', 'sqlite'] },
            { sticker: 'AI', title: 'Sentiment Classifier', desc: 'sklearn model classifying tweet-style text. First supervised ML project.', tags: ['sklearn', 'nlp'] },
            { sticker: 'Java', title: 'ICSE-friendly Java OOP', desc: 'For ICSE students — BlueJ-style OOP project matching Class 9 expectations.', tags: ['java', 'bluej'] },
            { sticker: 'Tools', title: 'First GitHub Project', desc: 'README, commits, branches, a merged PR. Real source-control habits.', tags: ['git', 'readme'] }
        ],
        roadmapHeading: 'Four stages across Class 8.',
        roadmapLede: 'Class 8 is where we shift gears. Longer projects, deeper concepts, real tools. Still paced around school.',
        roadmap: [
            { label: 'Term 1 · Python advanced', title: 'OOP, modules, error handling', body: 'Classes, inheritance, try/except, imports. Proper software structure. Ends with a Python project that looks like real software.', tags: ['classes', 'modules'] },
            { label: 'Term 1–2 · Frontend real', title: 'HTML, CSS, JS, React intro', body: 'Responsive layouts, DOM, first React component. By the end they can spin up a React app and push to GitHub.', tags: ['js', 'react'] },
            { label: 'Term 2 · Specialise', title: 'App or AI track', body: 'They pick: Flutter app track, or sklearn AI track. Real work begins. Weekly progress. First deployed piece of software.', tags: ['flutter', 'sklearn'] },
            { label: 'Term 3 · Portfolio + DSA start', title: 'Public presence', body: 'GitHub polished, a readable portfolio site, and a gentle intro to arrays and linked lists.', tags: ['portfolio', 'dsa'] }
        ],
        compareHeading: 'Class 7 vs 8 vs 9.',
        compareLede: 'Class 8 is where the stack changes. This table is honest about the shift.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Class 7', link: '/coding-for-class-7' },
                { label: 'Class 8 (this page)' },
                { label: 'Class 9', link: '/coding-for-class-9' }
            ],
            rows: [
                { label: 'Main stack', values: ['Python + JS + app starter', 'Python OOP + React + Flutter', 'MERN + AI + DSA'] },
                { label: 'Project scope', values: ['3–5 sessions', 'Multi-week', 'Month-long'] },
                { label: 'AI depth', values: ['sklearn basics', 'Supervised ML', 'Kaggle datasets'] },
                { label: 'DSA', values: ['Not yet', 'Intro', 'Arrays + strings'] },
                { label: 'Syllabus link', values: ['Class 7 CS', 'Class 8 CS', 'Class 9 CS formal'] },
                { label: 'Board pressure', values: ['None', 'None yet', 'Starts building'] }
            ]
        },
        reviewsHeading: 'Class 8 parents — unvarnished.',
        reviewsLede: 'Three recent reviews from Class 8 families in full-stack and AI tracks.',
        reviews: [
            { initial: 'K', name: 'Kunal D.', meta: 'Parent · Delhi · 1-on-1', body: 'My son shifted to Modern Age Coders in Class 8 from a video-only platform. The difference is huge — live teacher, real feedback. Built a React portfolio and a Python project in 3 months. GitHub is genuine, not just repos copy-pasted.' },
            { initial: 'A', name: 'Anjali P.', meta: 'Parent · Bengaluru · Group', body: 'Small class of 5. They roast each other\'s code in a friendly way. My daughter built a journal app in Flutter — it is on my phone. For Class 8 that is huge.' },
            { initial: 'B', name: 'Bharat N.', meta: 'Parent · Pune · 1-on-1', body: 'Been with Modern Age Coders since my son was 11. Class 8 now — he commits to GitHub weekly. The teacher was clear OOP was the next step and paced it well.' }
        ],
        faqs: [
            { q: 'Is Class 8 the right year to go deep on coding?', a: 'Absolutely. Class 9 brings formal board CS. A Class 8 student who builds a real portfolio now enters Class 9 with confidence, not stress.' },
            { q: 'Does this help with Class 8 ICSE Computer Applications?', a: 'Yes — especially our Java track. Class 8 ICSE typically starts Java basics and our ICSE-aware teachers cover exactly what schools test.' },
            { q: 'CBSE Class 8 CS — covered?', a: 'Yes. CBSE Class 8 typically covers Python, HTML and basic algorithms. We go deeper with real projects.' },
            { q: 'Do you teach React at Class 8?', a: 'Yes — after JS basics are solid, usually by month 3. We keep React bite-sized. Not Redux, not Next.js yet.' },
            { q: 'Can my Class 8 child really build a full-stack app?', a: 'A small MERN app in 8–10 weeks, yes. A todo tracker is the usual first one. The pattern scales.' },
            { q: 'When does DSA make sense?', a: 'Start at Class 8 with arrays and strings in Python. Move to C++ at Class 10–11 for serious CP.' },
            { q: 'How does this work with coaching classes?', a: 'Two 1-hour sessions a week fits alongside even heavy coaching. Most Class 8 students do weekends.' },
            { q: 'Free demo?', a: 'Yes. One full 1 hour live class. No card required. Refund in 2 weeks if the fit is off.' }
        ],
        relatedChips: [
            { href: '/coding-for-class-7', small: 'Lower', label: 'Coding for Class 7' },
            { href: '/coding-for-class-9', small: 'Higher', label: 'Coding for Class 9' },
            { href: '/coding-for-13-year-olds', small: 'Age', label: 'Coding for 13 Year Olds' },
            { href: '/coding-for-14-year-olds', small: 'Age', label: 'Coding for 14 Year Olds' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' },
            { href: '/coding-for-icse-students', small: 'Board', label: 'ICSE Coding' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/java-programming-for-kids-teens', small: 'Course', label: 'Java for Teens' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- CLASS 9 ---------- */
    {
        slug: 'coding-for-class-9',
        pageTitle: 'Coding for Class 9 — CBSE/ICSE CS, Python, Java, Full Stack & DSA',
        metaDescription: 'Coding for Class 9 students. CBSE Python + ICSE Java aligned. Full stack web, AI/ML, DSA basics — build a portfolio before Class 10 boards. 1 hour live classes.',
        keywords: 'coding for class 9, cbse class 9 computer science, icse class 9 computer applications, python class 9, java class 9, full stack class 9, dsa class 9, ai ml class 9, coding for 14 year olds, class 9 cs, class 9 ca, class 9 python project, class 9 java bluej',
        audienceType: 'Class 9 students',
        courseCode: 'GRADE-9',
        courseName: 'Coding for Class 9',
        courseDesc: 'Live online coding for Class 9. CBSE Python + ICSE Java aligned, MERN stack, AI/ML intro, DSA basics. 1 hour live sessions.',
        breadcrumbName: 'Coding for Class 9',
        accent: '#8b5cf6', accent2: '#06b6d4', bodyClass: 'grade-9-page',
        badge: '9', badgeLabel: 'Class · Grade',
        eyebrow: 'For parents of Class 9 students · Age 14',
        h1Before: 'Coding for ', h1Highlight: 'Class 9', h1After: ' — portfolio year before boards.',
        heroSub: 'Class 9 is the window. Board formalities have started but the calendar is still flexible. Our 1 hour live classes keep CBSE CS / ICSE Computer Applications safe, and build a portfolio ready for college later.',
        trust: [
            { big: '5,800+', sub: 'Class 9 students taught' },
            { big: '4.9 / 5', sub: 'Parent rating · 710+ reviews' },
            { big: '1 hour', sub: 'Per live class, 1:1 or group' },
            { big: '4 projects', sub: 'Portfolio-ready by Class 10' }
        ],
        chips: ['Board aligned', 'MERN ready', 'DSA intro'],
        coursesHeading: 'Class 9 tracks that match the school calendar.',
        coursesLede: 'These are the tracks our Class 9 students take. Each one is board-aware — we align with CBSE Python or ICSE Java and go deeper where school stops.',
        courses: [TEEN.pythonTeen, TEEN.javaTeen, TEEN.fullstackTeen, TEEN.reactTeen, TEEN.aimlTeen, TEEN.appTeen, TEEN.dsaTeen, TEEN.backendTeen],
        skipHeading: 'Already has a strong Python or Java base?',
        skipBody: 'If your Class 9 student already knows Python or Java well, <strong>skip basics</strong> and go into <a href="/courses/mern-stack-development-masterclass-college" style="color:inherit;text-decoration:underline;">MERN</a>, <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI/ML with datasets</a> or <a href="/courses/problem-solving-dsa-masterclass-teens" style="color:inherit;text-decoration:underline;">DSA</a> directly. Free demo places them properly.',
        whyHeading: 'Class 9 is the last unhurried year of school.',
        whyLede: 'Class 10 is the board pressure year. Class 11 is stream pressure. Class 9 is the last long stretch where a real portfolio can be built with room to breathe.',
        whys: [
            { tag: 'School link', title: 'CBSE CS Code 402 / ICSE CA start formally', body: 'CBSE Class 9 Code 402 is Python-based. ICSE Class 9 Computer Applications is Java with BlueJ. We teach to the exact syllabus each student follows.' },
            { tag: 'Abstract', title: 'Recursion, trees, OOP click', body: 'At 14, concepts like recursion, OOP, big-O and tree traversals can properly click. The window is wider than at 13, narrower than at 17.' },
            { tag: 'Signal', title: 'A portfolio at Class 9 reads better in Class 12', body: 'College applications look for longevity. A GitHub with weekly commits since Class 9 reads very differently from one that started at Class 12.' }
        ],
        projectsHeading: 'Six portfolio projects at Class 9.',
        projectsLede: 'These sit on every Class 9 student\'s GitHub by the end of the year. Each one holds up in a Class 12 portfolio.',
        projects: [
            { sticker: 'Full Stack', title: 'MERN Task Tracker', desc: 'React + Express + Mongo + JWT. Their first real deployed full-stack app.', tags: ['mern', 'jwt'] },
            { sticker: 'AI', title: 'Housing Price Predictor', desc: 'Kaggle dataset, sklearn regression, charts. A real data project with proper evaluation.', tags: ['sklearn', 'pandas'] },
            { sticker: 'Java', title: 'ICSE-ready Java Project', desc: 'Object-oriented Java with BlueJ — matches Class 9 ICSE expectations exactly.', tags: ['java', 'bluej'] },
            { sticker: 'DSA', title: '15 Core Problems', desc: 'Arrays, strings, linked lists, stacks. The set every serious coder solves by Class 10.', tags: ['arrays', 'stacks'] },
            { sticker: 'App', title: 'Flutter Habit Tracker', desc: 'Mobile app with charts, local storage, notifications. Proper APK on phone.', tags: ['flutter', 'charts'] },
            { sticker: 'API', title: 'Flask REST API', desc: 'First backend in Flask with routes, database, Postman tests.', tags: ['flask', 'rest'] }
        ],
        roadmapHeading: 'Four stages across Class 9 — board aware.',
        roadmapLede: 'Paced to leave time for school mid-terms, finals and ICSE/CBSE formative assessments. Nothing pushes the calendar.',
        roadmap: [
            { label: 'Term 1 · School align', title: 'CBSE Python / ICSE Java', body: 'Whichever syllabus the school follows — we align week by week. Sample papers solved. School tests become easy.', tags: ['cbse', 'icse', 'bluej'] },
            { label: 'Term 1–2 · MERN', title: 'First deployed full-stack app', body: 'React + Express + Mongo. A todo tracker. Deployed with a real domain. Students\' first proper "I made software" moment.', tags: ['mern', 'deploy'] },
            { label: 'Term 2 · Specialise', title: 'AI or DSA', body: 'They pick: Kaggle ML track, or DSA-first track. Real work each week. Measurable progress.', tags: ['ml', 'dsa'] },
            { label: 'Term 3 · Polish + OSS', title: 'Portfolio cleanup + first PR', body: 'GitHub polished. Readable portfolio site. A first merged open-source PR — small, but real.', tags: ['portfolio', 'oss'] }
        ],
        compareHeading: 'Class 8 vs 9 vs 10.',
        compareLede: 'Class 9 is a clear ladder rung. This is what the rung looks like.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Class 8', link: '/coding-for-class-8' },
                { label: 'Class 9 (this page)' },
                { label: 'Class 10', link: '/coding-for-class-10' }
            ],
            rows: [
                { label: 'Main stack', values: ['Python OOP + React + Flutter', 'MERN + AI + DSA', 'Full stack + ML + CP'] },
                { label: 'Project scope', values: ['Multi-week', 'Month-long', 'Quarter, board-paused'] },
                { label: 'AI depth', values: ['Supervised ML', 'Kaggle datasets', 'Writeups + metrics'] },
                { label: 'DSA', values: ['Intro', 'Arrays/strings/lists', 'LeetCode easy'] },
                { label: 'School', values: ['Class 8 CS', 'Class 9 CS (402/CA)', 'Class 10 board'] },
                { label: 'Board pressure', values: ['None', 'Starts', 'Full-on'] }
            ]
        },
        reviewsHeading: 'Class 9 parents and teens.',
        reviewsLede: 'Three recent Class 9 reviews. Privacy-shortened, content unedited.',
        reviews: [
            { initial: 'P', name: 'Parth J.', meta: 'Student · Gurgaon · 1-on-1', body: 'I\'m in Class 9 CBSE. My school CS paper is Python-based. The teacher here covered Python chapters a week before school did, so every test felt like revision. Alongside, I\'m building a MERN app.' },
            { initial: 'T', name: 'Tejas R.', meta: 'Parent · Bengaluru · Group', body: 'ICSE Class 9 Computer Applications is strict. Modern Age Coders\' Java track matches it to the exam. My daughter topped the Class 9 unit test, up from 72 the year before.' },
            { initial: 'L', name: 'Leena B.', meta: 'Parent · Hyderabad · 1-on-1', body: 'We started Class 9 not knowing if coding was for him. Halfway through the year he is sure. He built a Kaggle housing-price model and explained overfitting at dinner. At 14 that is something.' }
        ],
        faqs: [
            { q: 'Does this align with CBSE Class 9 CS (Code 402)?', a: 'Yes. CBSE Class 9 Code 402 is Python-based. Our teachers keep the official workbook open and cover each unit one week ahead of school.' },
            { q: 'ICSE Class 9 Computer Applications?', a: 'Yes. ICSE Class 9 CA is Java with BlueJ — OOP, encapsulation, classes. Our Java track is built around exactly this syllabus.' },
            { q: 'How much time weekly alongside Class 9?', a: 'Two 1-hour sessions plus 20 minutes of homework. Typically weekends. Doable alongside Class 9 tuition.' },
            { q: 'When does DSA start in Class 9?', a: 'After Python or Java OOP is solid (usually month 3). We start with arrays and strings. No C++ required yet.' },
            { q: 'Is Java worth learning if school teaches only Python?', a: 'For ICSE students, yes — the school paper needs it. For CBSE students, Python is fully sufficient through Class 10.' },
            { q: 'Can my Class 9 student attempt hackathons?', a: 'Yes — smaller student hackathons work. We help scope projects and submit. A first project finished at Class 9 is great signal.' },
            { q: 'Free demo?', a: 'Yes. One full 1 hour class, no card. Refund on unused portion in 2 weeks if the fit is off.' },
            { q: 'How do I know this is worth the fees?', a: 'Free demo, refund clause, live teacher you can name. If it is not working, you are not stuck.' }
        ],
        relatedChips: [
            { href: '/coding-for-class-8', small: 'Lower', label: 'Coding for Class 8' },
            { href: '/coding-for-class-10', small: 'Higher', label: 'Coding for Class 10' },
            { href: '/coding-for-14-year-olds', small: 'Age', label: 'Coding for 14 Year Olds' },
            { href: '/coding-for-15-year-olds', small: 'Age', label: 'Coding for 15 Year Olds' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' },
            { href: '/coding-for-icse-students', small: 'Board', label: 'ICSE Coding' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/java-programming-for-kids-teens', small: 'Course', label: 'Java for Teens' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- CLASS 10 ---------- */
    {
        slug: 'coding-for-class-10',
        pageTitle: 'Coding for Class 10 — Board-Safe CS Prep, Python, Java, AI & DSA',
        metaDescription: 'Coding for Class 10 board students. CBSE Computer Applications, ICSE Computer Applications, Python project, Java BlueJ, AI/ML — all without hurting board marks.',
        keywords: 'coding for class 10, class 10 board coding, cbse class 10 ca, icse class 10 computer applications, python for class 10, java for class 10, class 10 cs project, dsa class 10, coding for 15 year olds, ai ml class 10, class 10 board year coding, computer applications class 10',
        audienceType: 'Class 10 students',
        courseCode: 'GRADE-10',
        courseName: 'Coding for Class 10',
        courseDesc: 'Live online coding for Class 10 board year. CBSE / ICSE CA aligned, full stack and AI, DSA intro. Paced around board exams.',
        breadcrumbName: 'Coding for Class 10',
        accent: '#06b6d4', accent2: '#6366f1', bodyClass: 'grade-10-page',
        badge: '10', badgeLabel: 'Class · Grade',
        eyebrow: 'For parents of Class 10 students · Board year',
        h1Before: 'Coding for ', h1Highlight: 'Class 10', h1After: ' — serious, without losing marks.',
        heroSub: 'Class 10 is the board year. The right programme respects that — fewer, deeper sessions, projects timed between exam blocks, full pause during pre-boards. Your child finishes Class 10 with both a score card and a portfolio.',
        trust: [
            { big: '4,800+', sub: 'Class 10 students with us' },
            { big: '93%', sub: 'Finish year without dropping marks' },
            { big: '1 hour', sub: 'Per live class, 1:1 or group' },
            { big: '6 projects', sub: 'Across the board year' }
        ],
        chips: ['Board-safe', 'Portfolio-grade', 'DSA started'],
        coursesHeading: 'Class 10 courses that fit a board schedule.',
        coursesLede: 'Shorter, deeper classes that do not spill into study hours. Paced around exam blocks.',
        courses: [TEEN.pythonTeen, TEEN.javaTeen, TEEN.fullstackTeen, TEEN.aimlTeen, TEEN.dsaTeen, TEEN.reactTeen, TEEN.appTeen, TEEN.cbseIP],
        skipHeading: 'Already has projects on GitHub?',
        skipBody: 'If your Class 10 student already has a GitHub with real projects, <strong>skip into</strong> <a href="/courses/problem-solving-dsa-masterclass-teens" style="color:inherit;text-decoration:underline;">DSA</a>, <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI & ML</a>, or <a href="/courses/competitive-programming-masterclass" style="color:inherit;text-decoration:underline;">Competitive Programming</a>. Free demo with level check.',
        whyHeading: 'Class 10 confidence decides the next five years.',
        whyLede: 'A Class 10 student who finishes the board year with a portfolio, not just marks, walks into Class 11 with an identity. That clarity is often worth more than any single exam result.',
        whys: [
            { tag: 'Board-safe', title: 'Fewer, deeper sessions', body: 'We run 1 to 2 sessions a week, pause during mocks and pre-boards, and resume after. School always wins the calendar; coding earns its slot around it.' },
            { tag: 'Identity', title: 'A portfolio before stream choice', body: 'Class 11 stream choice is easier when the student has already tried real coding. At least they know whether CS truly fits.' },
            { tag: 'Signal', title: 'Early GitHub matters later', body: 'College applications value longevity. Class 10 commits read very differently from Class 12 commits.' }
        ],
        projectsHeading: 'Six projects a Class 10 student can realistically finish.',
        projectsLede: 'Calibrated around the board year. Each one doable even in a busy term — each portfolio-worthy.',
        projects: [
            { sticker: 'Python', title: 'Data Visualiser', desc: 'Pandas + matplotlib on a real CSV they care about — sports stats, school data. 3 weeks.', tags: ['pandas'] },
            { sticker: 'Full Stack', title: 'Study Tracker MERN', desc: 'Log study hours. Deployed. Directly useful to them during boards.', tags: ['mern'] },
            { sticker: 'AI', title: 'News Classifier', desc: 'sklearn classifying news. Real dataset, confusion matrix, metrics.', tags: ['sklearn', 'nlp'] },
            { sticker: 'DSA', title: 'Top 50 LeetCode Easy', desc: 'Curated set spaced across the year. First real interview-style work.', tags: ['leetcode'] },
            { sticker: 'Board', title: 'Class 10 CS/IT Project', desc: 'School-required project done properly. Viva-ready, report-ready.', tags: ['school'] },
            { sticker: 'Mobile', title: 'Flutter Revision App', desc: 'Flashcard app used by their own classmates during prelims.', tags: ['flutter'] }
        ],
        roadmapHeading: 'Four stages across Class 10 — board-aware.',
        roadmapLede: 'Each stage fits the school calendar. We pause for pre-boards and resume after boards.',
        roadmap: [
            { label: 'Term 1 · School + Python', title: 'Rebuild the base cleanly', body: 'CBSE CA Python / ICSE CA Java revision. Sample papers solved. School tests become easy.', tags: ['ca', 'python', 'java'] },
            { label: 'Before pre-boards · Full stack', title: 'Small deployed app', body: 'A MERN or Flask mini-app finished before pre-boards. Small but shipped.', tags: ['mern', 'deploy'] },
            { label: 'Pause · Boards', title: 'Support mode only', body: 'During pre-boards and boards we pause the curriculum. On call for school CS doubts — no new content.', tags: ['board focus'] },
            { label: 'Post-boards · AI or DSA', title: 'Pick the next track', body: 'Post-board summer is gold. A serious AI project or DSA rampup — whichever matches the student\'s Class 11 plan.', tags: ['ai', 'dsa'] }
        ],
        compareHeading: 'Class 9 vs 10 vs 11.',
        compareLede: 'Class 10 looks like a plateau but it is actually a carefully managed year. Here is the real picture.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Class 9', link: '/coding-for-class-9' },
                { label: 'Class 10 (this page)' },
                { label: 'Class 11', link: '/coding-for-class-11' }
            ],
            rows: [
                { label: 'School load', values: ['Moderate', 'Board — heavy', 'Stream — heavy'] },
                { label: 'Sessions / week', values: ['2', '1–2 (flexible)', '2'] },
                { label: 'Project scope', values: ['Month-long', 'Compact 3-week', 'Longer post-boards'] },
                { label: 'DSA level', values: ['Arrays, strings', 'LeetCode easy', 'Full sheet'] },
                { label: 'Main goal', values: ['Portfolio build', 'Portfolio + board', 'Stream-level depth'] },
                { label: 'Downtime', values: ['None', 'Board pause', 'Exam-block pauses'] }
            ]
        },
        reviewsHeading: 'Class 10 parents — not kidding about the calendar.',
        reviewsLede: 'Three recent Class 10 reviews, unedited.',
        reviews: [
            { initial: 'S', name: 'Shruti M.', meta: 'Parent · Mumbai · 1-on-1', body: 'Class 10 CBSE. The programme paused during pre-boards on its own. My son finished with 93% and a deployed web app. I was nervous about any non-school class in Class 10 — I was wrong.' },
            { initial: 'R', name: 'Ranjan P.', meta: 'Parent · Pune · Group', body: 'ICSE CA syllabus was aligned to the week. Her Java board score was 96. Also built a Flutter revision app used by her friends during prelims. Rare win-win.' },
            { initial: 'D', name: 'Dipesh K.', meta: 'Parent · Chennai · 1-on-1', body: 'We did just one 1-hour class a week through the year. Still, my son solved 50 LeetCode problems and shipped a study tracker. Small and steady.' }
        ],
        faqs: [
            { q: 'Is Class 10 the wrong year to start coding?', a: 'Not at all — but the pace is different. Shorter sessions, pause during pre-boards. Two years ahead of Class 12 portfolio needs.' },
            { q: 'Does CBSE Class 10 CA (Code 402) need this?', a: 'Not strictly — but students who take this finish Class 10 CA with ease and arrive at Class 11 CS ready.' },
            { q: 'ICSE Class 10 Computer Applications?', a: 'Fully covered. Our dedicated <a href="/computer-applications-icse-class-10">ICSE Computer Applications Class 10 page</a> goes deep on exactly that syllabus.' },
            { q: 'Can we skip coding during pre-boards?', a: 'Yes — and we suggest it. One free "emergency" 1 hour session during pre-boards for any school CS question.' },
            { q: 'Is DSA realistic in Class 10?', a: 'Yes, at easy/medium LeetCode. 50 problems across the year is achievable and builds confidence for Class 11.' },
            { q: 'Will coding affect board marks?', a: 'Our Class 10 students typically finish with equal or better marks. The discipline coding teaches often lifts academic performance.' },
            { q: 'Do you help with the Class 10 CS/CA project and viva?', a: 'Yes. Topic choice, clean code, proper report, likely-questions viva rehearsal. Most students score full marks on the project component.' },
            { q: 'Free demo at Class 10?', a: 'Yes — one full 1 hour live class, no card. Refund clause 2 weeks.' }
        ],
        relatedChips: [
            { href: '/coding-for-class-9', small: 'Lower', label: 'Coding for Class 9' },
            { href: '/coding-for-class-11', small: 'Higher', label: 'Coding for Class 11' },
            { href: '/coding-for-15-year-olds', small: 'Age', label: 'Coding for 15 Year Olds' },
            { href: '/computer-applications-icse-class-10', small: 'Board', label: 'ICSE CA Class 10' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' },
            { href: '/coding-for-icse-students', small: 'Board', label: 'ICSE Coding' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/java-programming-for-kids-teens', small: 'Course', label: 'Java for Teens' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- CLASS 11 ---------- */
    {
        slug: 'coding-for-class-11',
        pageTitle: 'Coding for Class 11 — CS Stream, Python/Pandas, MERN, AI/ML & DSA in C++',
        metaDescription: 'Coding for Class 11 CS stream students. CBSE Class 11 CS + IP, ICSE Class 11, Python with Pandas, full-stack MERN, AI/ML with real datasets, DSA in C++ or Python.',
        keywords: 'coding for class 11, cbse class 11 cs, cbse class 11 ip, icse class 11 cs, isc class 11, python class 11, pandas class 11, mern for class 11, ai ml class 11, dsa c++ class 11, coding for 16 year olds, competitive programming class 11, full stack class 11',
        audienceType: 'Class 11 students',
        courseCode: 'GRADE-11',
        courseName: 'Coding for Class 11',
        courseDesc: 'Live online coding for Class 11 CS stream. CBSE/ICSE alignment, MERN, AI/ML, DSA in C++/Python. 1 hour live sessions.',
        breadcrumbName: 'Coding for Class 11',
        accent: '#10b981', accent2: '#a855f7', bodyClass: 'grade-11-page',
        badge: '11', badgeLabel: 'Class · Grade',
        eyebrow: 'For parents of Class 11 students · CS stream',
        h1Before: 'Coding for ', h1Highlight: 'Class 11', h1After: ' — stream-grade depth.',
        heroSub: 'Class 11 is where CS stops being optional for CS stream students. Our 1 hour live classes align with Class 11 CS / IP, build a serious MERN + AI portfolio, and start DSA at a level that matters for Class 12 and college CS entry.',
        trust: [
            { big: '3,900+', sub: 'Class 11 CS-stream students' },
            { big: '4.9 / 5', sub: 'Parent rating · 440+ reviews' },
            { big: '1 hour', sub: 'Per live class, 1:1 or group' },
            { big: '6 projects', sub: 'Portfolio-standard by year end' }
        ],
        chips: ['CS stream aligned', 'MERN + AI', 'DSA in C++'],
        coursesHeading: 'Class 11 courses for CS stream.',
        coursesLede: 'These are the tracks that match a Class 11 student who has chosen CS. Real tools. Real depth.',
        courses: [TEEN.fullstackTeen, TEEN.aimlTeen, TEEN.dsaTeen, TEEN.cppTeen, TEEN.javaTeen, TEEN.cbseCS, TEEN.cbseIP, TEEN.compTeen],
        skipHeading: 'Already topping the school CS class?',
        skipBody: 'If your Class 11 student is already strong, <strong>skip the basics</strong> and go into <a href="/courses/mern-stack-development-masterclass-college" style="color:inherit;text-decoration:underline;">MERN</a>, <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">real AI/ML</a>, <a href="/courses/problem-solving-dsa-masterclass-teens" style="color:inherit;text-decoration:underline;">DSA</a> or <a href="/courses/competitive-programming-masterclass" style="color:inherit;text-decoration:underline;">Competitive Programming</a>.',
        whyHeading: 'Class 11 is when CS becomes a career decision.',
        whyLede: 'By Class 11, most students know whether they want computer science in college. The right programme turns that decision into evidence — a portfolio, a GitHub history, measurable skills.',
        whys: [
            { tag: 'Stream', title: 'CBSE CS + IP both covered', body: 'CBSE Class 11 CS is Python + boolean logic + computer systems. IP is Python + Pandas + SQL. We keep the NCERT books open and align weekly.' },
            { tag: 'College', title: 'DSA begins for real', body: 'Competitive territory opens. DSA in Python or C++, typically following NCERT + Striver sheets, building up to interview-style problems.' },
            { tag: 'Signal', title: 'Portfolio gets real weight', body: 'Top Indian colleges and abroad schools want real portfolio evidence. A MERN + AI project finished in Class 11 is strong signal for Class 12 applications.' }
        ],
        projectsHeading: 'Six projects that read well on a Class 12 SOP.',
        projectsLede: 'Finishable, portfolio-real. Each teaches one thing that matters for college CS.',
        projects: [
            { sticker: 'Full Stack', title: 'MERN SaaS Starter', desc: 'Small SaaS-style app with auth, dashboard, payments mock. Proud-of-it side project.', tags: ['mern', 'jwt'] },
            { sticker: 'AI', title: 'Real ML Portfolio Piece', desc: 'Pandas + sklearn + real dataset. Regression, classification, cross-validation, blog post.', tags: ['sklearn', 'writeup'] },
            { sticker: 'DSA', title: 'Striver 75 Sheet', desc: 'Arrays, strings, recursion, trees. Foundation for interviews and JEE CS.', tags: ['striver', 'arrays'] },
            { sticker: 'Data', title: 'Pandas Case Study', desc: 'CBSE IP-style project on a real dataset. Matches IP practical exam pattern.', tags: ['pandas', 'sql'] },
            { sticker: 'CP', title: 'Codeforces 1000+ rating', desc: 'First rated rounds. Arrays, greedy, basic implementation.', tags: ['cf'] },
            { sticker: 'OSS', title: 'First Open-Source PR', desc: 'A real (merged) pull request. Tiny in code, huge in signal.', tags: ['oss', 'pr'] }
        ],
        roadmapHeading: 'Four stages across Class 11.',
        roadmapLede: 'Class 11 is loaded. This path fits 1 to 2 hours a week and still produces a serious portfolio by month 9.',
        roadmap: [
            { label: 'Term 1 · Base fixed', title: 'Python + Pandas solid', body: 'Deep Python OOP and Pandas — mirrors CBSE IP and CS. School tests easy, real foundation in place.', tags: ['python', 'pandas'] },
            { label: 'Term 1 · DSA starts', title: 'Striver / Love Babbar begins', body: 'Parallel DSA track. 3–5 problems a week. Language choice per student.', tags: ['dsa', 'sheet'] },
            { label: 'Term 2 · MERN + AI', title: 'Portfolio build', body: 'MERN SaaS starter end-to-end. Deployed. Parallel sklearn project with writeup.', tags: ['mern', 'sklearn'] },
            { label: 'Summer · CP + OSS', title: 'Pressure test skills', body: 'Codeforces rated rounds. First merged OSS PR. Small hackathons. Teacher shifts to coach mode.', tags: ['cf', 'oss'] }
        ],
        compareHeading: 'Class 10 vs 11 vs 12.',
        compareLede: 'Each year matters for college from here. This is the honest year-over-year difference.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Class 10', link: '/coding-for-class-10' },
                { label: 'Class 11 (this page)' },
                { label: 'Class 12', link: '/coding-for-class-12' }
            ],
            rows: [
                { label: 'School', values: ['Board', 'CS stream', 'Board + college apps'] },
                { label: 'Portfolio', values: ['Starter projects', 'Serious MERN + AI', 'College-ready portfolio'] },
                { label: 'DSA', values: ['LeetCode easy', 'Striver/Babbar sheet', 'Full sheet + contests'] },
                { label: 'CP', values: ['Not yet', 'First rated', '1200+ realistic'] },
                { label: 'OSS', values: ['Not yet', 'First PR', 'Sustained'] },
                { label: 'Main goal', values: ['Portfolio + board', 'Stream depth', 'Ship one + apply'] }
            ]
        },
        reviewsHeading: 'Class 11 parents and students.',
        reviewsLede: 'Three recent Class 11 CS-stream reviews.',
        reviews: [
            { initial: 'N', name: 'Nivedita S.', meta: 'Student · Delhi · 1-on-1', body: 'I\'m Class 11 CS stream. The teacher teaches the chapter a week before school does, so every test feels easy. I\'ve solved 40 problems from the Striver sheet. MERN is in progress. Fees are honestly justified.' },
            { initial: 'H', name: 'Harish V.', meta: 'Parent · Bengaluru · Group', body: 'Small batch of Class 11 CS students. They help each other. My daughter\'s SQL + Pandas went from zero to really solid in one term. The IP paper felt easy — the goal.' },
            { initial: 'J', name: 'Juhi C.', meta: 'Parent · Hyderabad · 1-on-1', body: 'My son was considering CS but unsure. After 3 months of real MERN work, he is sure. Sometimes the best outcome of Class 11 is clarity, and we got that.' }
        ],
        faqs: [
            { q: 'Does this match CBSE Class 11 CS?', a: 'Yes. CBSE Class 11 CS (Python, boolean, number systems, emerging trends) covered weekly. NCERT book open during class.' },
            { q: 'CBSE Class 11 Informatics Practices?', a: 'Yes, fully. Pandas, matplotlib, SQL, HTML basics. Widely used by IP students who struggle with Pandas.' },
            { q: 'ICSE / ISC Class 11?', a: 'ICSE/ISC Class 11 CS is Java-heavy (OOP, arrays, strings, functions, recursion). Our Java track matches the ISC syllabus.' },
            { q: 'DSA in C++ or Python at 16?', a: 'Student\'s choice. C++ is gold for CP and JEE Advanced CS. Python works for portfolio-focused paths. Both fine for interviews.' },
            { q: 'Weekly time?', a: '2 to 3 hours total — two 1-hour sessions plus ~1 hour homework. Fits alongside JEE/NEET/CUET prep.' },
            { q: 'CBSE IP practical exam?', a: 'Prepared. Sample datasets, likely patterns, viva rehearsal. Most IP students clear the practical comfortably.' },
            { q: 'Hackathons at Class 11?', a: 'Yes. Student hackathons are ideal. We guide scoping, team etiquette, submission.' },
            { q: '1-on-1 only or is group serious?', a: 'Both serious. Group batches placed by level, not age — a strong Class 11 student is with other strong Class 11 students.' }
        ],
        relatedChips: [
            { href: '/coding-for-class-10', small: 'Lower', label: 'Coding for Class 10' },
            { href: '/coding-for-class-12', small: 'Higher', label: 'Coding for Class 12' },
            { href: '/coding-for-16-year-olds', small: 'Age', label: 'Coding for 16 Year Olds' },
            { href: '/computer-science-class-11-cbse', small: 'Board', label: 'CS Class 11 CBSE' },
            { href: '/computer-science-class-11-icse', small: 'Board', label: 'CS Class 11 ICSE' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/java-programming-for-kids-teens', small: 'Course', label: 'Java for Teens' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- CLASS 12 ---------- */
    {
        slug: 'coding-for-class-12',
        pageTitle: 'Coding for Class 12 — Board CS, College-Ready Portfolio, DSA & Competitive Programming',
        metaDescription: 'Coding for Class 12 board students. CBSE/ICSE CS and IP alignment, one serious portfolio project, DSA, competitive programming and first-year college head start.',
        keywords: 'coding for class 12, cbse class 12 cs, icse class 12 cs, class 12 informatics practices, class 12 board coding, college ready portfolio, dsa class 12, competitive programming class 12, python class 12, java class 12, class 12 cs project, coding for 17 year olds',
        audienceType: 'Class 12 students',
        courseCode: 'GRADE-12',
        courseName: 'Coding for Class 12',
        courseDesc: 'Live online coding for Class 12. Board CS + IP aligned, serious portfolio piece, DSA, competitive programming, college head start.',
        breadcrumbName: 'Coding for Class 12',
        accent: '#f59e0b', accent2: '#ef4444', bodyClass: 'grade-12-page',
        badge: '12', badgeLabel: 'Class · Grade',
        eyebrow: 'For parents of Class 12 students · Board + college',
        h1Before: 'Coding for ', h1Highlight: 'Class 12', h1After: ' — board, portfolio, college-ready.',
        heroSub: 'Class 12 is the last structured year before college. Our programme keeps CBSE/ICSE CS/IP marks safe, finishes a serious portfolio piece, and sharpens DSA/CP for college CS entry. 1 hour live, 1:1 or small group.',
        trust: [
            { big: '3,100+', sub: 'Class 12 students this year' },
            { big: '4.9 / 5', sub: 'Parent rating · 360+ reviews' },
            { big: '1 hour', sub: 'Per live class, 1:1 or group' },
            { big: '91%', sub: 'Finish with CS marks 90+' }
        ],
        chips: ['Board-safe', 'College-ready', 'Portfolio finished'],
        coursesHeading: 'Class 12 courses that win the year.',
        coursesLede: 'The right courses for Class 12 protect board marks and produce one clean portfolio piece. These are those.',
        courses: [TEEN.cbseCS, TEEN.cbseIP, TEEN.fullstackTeen, TEEN.aimlTeen, TEEN.dsaTeen, TEEN.cppTeen, TEEN.compTeen, TEEN.reactTeen],
        skipHeading: 'Already has a strong portfolio?',
        skipBody: 'If your Class 12 student already has a real portfolio, <strong>skip content review</strong> and go directly to <a href="/courses/competitive-programming-masterclass" style="color:inherit;text-decoration:underline;">Competitive Programming</a>, <a href="/courses/ai-ml-masterclass-complete-college" style="color:inherit;text-decoration:underline;">college-level AI/ML</a>, or <a href="/courses/full-stack-web-development-masterclass-college" style="color:inherit;text-decoration:underline;">college-level Full Stack</a>.',
        whyHeading: 'Seventeen is the year to land cleanly — not cram.',
        whyLede: 'Class 12 students are often told to pause everything for boards. Result: zero portfolio, average marks. A calm, consistent 1 to 2 hours a week of real coding delivers better outcomes on both fronts.',
        whys: [
            { tag: 'Board protection', title: 'CBSE/ICSE CS done on time', body: 'We align sessions to the school\'s syllabus calendar. Chapters covered a week ahead. Sample papers November, practical December, written prep January.' },
            { tag: 'College signal', title: 'One serious portfolio piece', body: 'Admissions officers remember the one serious project. We finish one clean deployed piece with a writeup — not ten half-finished demos.' },
            { tag: 'DSA head start', title: 'First-year college advantage', body: 'A Class 12 student with 100 DSA problems solved walks into first-year engineering already senior.' }
        ],
        projectsHeading: 'Six projects that make a Class 12 portfolio real.',
        projectsLede: 'Just enough. Each one lands at a specific point on the Class 12 calendar.',
        projects: [
            { sticker: 'Portfolio', title: 'Personal Site v2', desc: 'Clean fast site listing 3 best projects, short bio, contact. First thing admissions Google.', tags: ['react', 'seo'] },
            { sticker: 'AI', title: 'Real-world ML Project', desc: 'Serious dataset, Jupyter notebook, proper evaluation, blog writeup. The one they talk about.', tags: ['jupyter', 'ml'] },
            { sticker: 'Board', title: 'CBSE/ICSE CS Project', desc: 'School-required project done with real code quality. Report, viva, full marks.', tags: ['school', 'viva'] },
            { sticker: 'DSA', title: '100 Problems Solved', desc: 'Striver A2Z / Love Babbar sheet. Measurable. Confidence problem by problem.', tags: ['striver', 'leetcode'] },
            { sticker: 'CP', title: 'Codeforces 1200+', desc: 'For competitive-inclined students. Weekly contests, upsolving.', tags: ['cf', 'upsolve'] },
            { sticker: 'OSS', title: 'Sustained OSS', desc: 'Three merged PRs through the year to a real project. Not vanity commits.', tags: ['oss', 'pr'] }
        ],
        roadmapHeading: 'Four quarters across Class 12 — exam aware.',
        roadmapLede: 'Matches the school calendar. Pauses for pre-boards and boards. Everything else steady.',
        roadmap: [
            { label: 'Q1 · Jul–Sep · Board + DSA', title: 'Ahead of school + 30 problems', body: 'CBSE/ICSE CS covered one week ahead. DSA foundation: arrays, strings, hashing, recursion. Ends at school mid-terms.', tags: ['board', 'dsa'] },
            { label: 'Q2 · Oct–Nov · Portfolio', title: 'Ship the college piece', body: 'The one serious ML or full-stack project shipped and deployed. Writeup published. LinkedIn updated.', tags: ['ship', 'writeup'] },
            { label: 'Q3 · Dec–Mar · Boards', title: 'Support mode only', body: 'No new content. On WhatsApp for any school CS doubt. Full focus on boards + CUET/JEE.', tags: ['board focus'] },
            { label: 'Q4 · Apr–Jun · College head start', title: 'Pre-college sprint', body: 'After boards — OS basics, DBMS basics, more DSA. Walks into BTech/BCA confident.', tags: ['os', 'dbms'] }
        ],
        compareHeading: 'Class 11 vs 12 vs college.',
        compareLede: 'What changes in the final school year and the first college year.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Class 11', link: '/coding-for-class-11' },
                { label: 'Class 12 (this page)' },
                { label: 'College', link: '/courses/coding/college' }
            ],
            rows: [
                { label: 'School load', values: ['Stream', 'Board + applications', 'Semester'] },
                { label: 'Main goal', values: ['Build portfolio', 'Ship one great project', 'Internships + fundamentals'] },
                { label: 'DSA', values: ['50–70', '100+', '200+ + contests'] },
                { label: 'CP', values: ['First rated', '1200+ target', '1400+ realistic'] },
                { label: 'OSS', values: ['First PR', 'Sustained', 'Maintainer track'] },
                { label: 'Lifestyle', values: ['School heavy', 'Boards heavy', 'Semester + project'] }
            ]
        },
        reviewsHeading: 'Class 12 parents and students.',
        reviewsLede: 'Recent reviews from Class 12 families. Unedited, privacy-shortened.',
        reviews: [
            { initial: 'W', name: 'Waqar H.', meta: 'Student · Delhi · 1-on-1', body: 'I started in Class 11 and the programme adapted into Class 12. I finished CBSE IP syllabus in 4 months, scored 97, and built a Pandas + sklearn project used in my college SOP. It worked.' },
            { initial: 'N', name: 'Neelam C.', meta: 'Parent · Kolkata · 1-on-1', body: 'We paused during boards as planned. After boards, 2 months of BTech foundation. My son said his first college lectures felt like revision — the goal.' },
            { initial: 'Z', name: 'Zoya K.', meta: 'Parent · Mumbai · Group', body: 'Small batch of Class 12 CS students. Class felt serious and supportive. My daughter finished Class 12 with 92 in CS and a deployed full-stack app. Fair trade.' }
        ],
        faqs: [
            { q: 'Is Class 12 too risky for a coding class?', a: 'Only if it is the wrong one. Ours is built for Class 12: fewer, deeper sessions, scheduled around exam calendars, full pause during pre-boards and boards.' },
            { q: 'CBSE Class 12 CS paper?', a: 'Directly aligned. Our teachers follow the NCERT CS syllabus week by week. Most students finish with 90+ in CS/IP.' },
            { q: 'ICSE/ISC Class 12 CS?', a: 'Yes. Java + OOP + data structures alignment. Sample papers, code review, viva prep included.' },
            { q: 'JEE / CUET prep conflict?', a: 'Schedule is flexible. JEE Advanced students usually 1 class/week; lighter load 2. Designed to supplement, not compete.' },
            { q: 'Can a Class 12 student really finish a portfolio project?', a: 'One serious project, not ten. Start Term 1, ship by Term 2, before pre-boards. Parents are often surprised how doable this is with a clear plan.' },
            { q: '100 DSA problems realistic?', a: 'At 3 problems a week with guidance — yes. Confidence and foundation for first-year BTech.' },
            { q: 'Help with college applications?', a: 'We don\'t write essays. We help frame the technical portfolio — GitHub cleanup, project writeups, which projects to feature. Often moves the needle.' },
            { q: 'Gap-year student?', a: 'Welcome. Gap-year students often make the fastest progress — 3 to 4 sessions a week. We design a 6–9 month intensive.' }
        ],
        relatedChips: [
            { href: '/coding-for-class-11', small: 'Lower', label: 'Coding for Class 11' },
            { href: '/coding-for-17-year-olds', small: 'Age', label: 'Coding for 17 Year Olds' },
            { href: '/computer-science-class-12-cbse', small: 'Board', label: 'CS Class 12 CBSE' },
            { href: '/computer-science-class-12-icse', small: 'Board', label: 'CS Class 12 ICSE' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/java-programming-for-kids-teens', small: 'Course', label: 'Java for Teens' },
            { href: '/best-coding-classes-online', small: 'Compare', label: 'Best Online Classes' }
        ],
        cityChips: CITY_CHIPS
    }

];
