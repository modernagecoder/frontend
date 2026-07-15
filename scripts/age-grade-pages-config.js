/*
 * age-grade-pages-config.js
 *
 * Unique per-page content for age/grade/board landing pages.
 * Consumed by scripts/generate-age-grade-pages.js.
 *
 * Each page is a self-contained object. Edits here re-render on next run.
 */

/* Common course-pool helpers (chosen per page to keep variety across ages) */

const IMG = slug => `/images/${slug}`;

const KID_COURSES = {
    scratch: { href: '/courses/scratch-programming-complete-course', pill: 'Block', img: IMG('scratch-kids.webp'), alt: 'Scratch programming course for kids', title: 'Scratch Programming', desc: 'The visual block coding foundation — animations, characters, games. Zero typing stress.', tags: ['Scratch', 'Beginner'] },
    kidsBlocks: { href: '/courses/kids-coding-blocks-masterclass', pill: 'Block', img: IMG('kids-coding.webp'), alt: 'Kids Coding Adventure course', title: 'Kids Coding Adventure', desc: 'A playful intro using blocks. Logic, sequence and events — the habits every coder needs.', tags: ['Block', 'Age 8-11'] },
    pythonKids: { href: '/courses/python-ai-kids-masterclass', pill: 'Python', img: IMG('python-kids.webp'), alt: 'Python for kids masterclass', title: 'Python for Kids', desc: 'Turtle graphics, tiny games, a maths quiz. Real text code that still feels like play.', tags: ['Python', 'Beginner'] },
    htmlKids: { href: '/courses/kids-ai-web-development-course', pill: 'Web', img: IMG('html-css-kids.webp'), alt: 'HTML and CSS web development for kids', title: 'Build Your First Website', desc: 'HTML & CSS basics — a personal page your child actually hosts online.', tags: ['HTML', 'CSS'] },
    aiKids: { href: '/courses/cbse-computational-thinking-and-ai-course-for-kids-classes-3-to-8', pill: 'AI', img: IMG('ct-ai-kids.webp'), alt: 'computational thinking and AI for kids', title: 'Computational Thinking & AI', desc: 'Teachable Machine, image classifiers, simple chatbots — a first hands-on taste of AI.', tags: ['AI', 'No-code ML'] },
    gameKids: { href: '/courses/game-development-masterclass-for-kids', pill: 'Game Dev', img: IMG('game-dev-kids.webp'), alt: 'Game development for kids', title: 'Game Development', desc: 'Build playable games — characters, score, levels. Favourite track for most kids.', tags: ['Games', 'Projects'] },
    appKids: { href: '/courses/block-coding-app-development-masterclass', pill: 'App Dev', img: IMG('app-dev-kids.webp'), alt: 'Block coding app development for kids', title: 'Block Coding App Dev', desc: 'Design and build mobile-app style screens using blocks. A confidence-boosting first app.', tags: ['App', 'Block'] },
    creativeKids: { href: '/courses/creative-coding-animation-mastery', pill: 'Creative', img: IMG('creative-coding-kids.webp'), alt: 'Creative coding and animation for kids', title: 'Creative Coding & Animation', desc: 'Code that produces art — spirals, colour patterns, moving stories. Great for visual learners.', tags: ['Creative', 'Python'] },
    problemKids: { href: '/courses/problem-solving-and-computational-thinking-for-kids', pill: 'Logic', img: IMG('problem-solving-kids.webp'), alt: 'Problem solving and computational thinking for kids', title: 'Problem Solving & Logic', desc: 'Puzzle-driven computational thinking. Pattern spotting, decomposition and logic games.', tags: ['Logic', 'Thinking'] },
    officeKids: { href: '/courses/microsoft-office-kids-mastery', pill: 'Office', img: IMG('microsoft-office-kids.webp'), alt: 'Microsoft Office mastery for kids', title: 'Microsoft Office for Kids', desc: 'Word, Excel and PowerPoint taught through project work — school-ready digital skills.', tags: ['Office', 'School'] },
    canvaKids: { href: '/courses/canva-ai-design-masterclass', pill: 'Design', img: IMG('canva-kids.webp'), alt: 'Canva AI design masterclass for kids', title: 'Canva AI Design Studio', desc: 'Posters, social posts and thumbnails with Canva AI. Design literacy for a visual world.', tags: ['Design', 'AI'] },
    vibeKids: { href: '/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev', pill: 'Starter', img: IMG('vibe-coding-kids.webp'), alt: 'Vibe coding starter course for kids', title: 'Vibe Coding for Kids', desc: 'A gentle starter course — AI, Scratch and game-dev taster sessions to find what lights them up.', tags: ['Starter', 'Explore'] }
};

const TEEN_COURSES = {
    vibeTeen: { href: '/courses/vibe-coding-for-teens-python-web-ai-projects-course', pill: 'Starter', img: IMG('vibe-coding-teens.webp'), alt: 'Vibe coding starter for teens', title: 'Vibe Coding for Teens', desc: 'Python, web and AI taster projects — a strong first step if your teen is undecided.', tags: ['Starter', 'Mixed'] },
    pythonTeen: { href: '/courses/python-complete-masterclass-teens', pill: 'Python', img: IMG('python-teens.webp'), alt: 'Python complete masterclass for teens', title: 'Python Masterclass', desc: 'Zero to confident — functions, OOP, files, real mini-apps. The backbone of every other track.', tags: ['Python', 'OOP'] },
    fullstackTeen: { href: '/courses/full-stack-web-development-teens-masterclass', pill: 'Full Stack', img: IMG('web-dev-teens.webp'), alt: 'Full stack web development for teens', title: 'Full Stack Web Dev', desc: 'HTML, CSS, JavaScript, Node, databases — ship a real deployed web app.', tags: ['Web', 'Node'] },
    reactTeen: { href: '/courses/react-for-teens-complete-masterclass', pill: 'React', img: IMG('react-teens.webp'), alt: 'React.js complete masterclass for teens', title: 'React.js Masterclass', desc: 'Build component-based web apps. What modern product teams actually use at work.', tags: ['React', 'Modern'] },
    javaTeen: { href: '/courses/java-programming-masterclass-for-teens', pill: 'Java', img: IMG('java-teens.webp'), alt: 'Java programming for teens', title: 'Java Programming', desc: 'OOP in depth with BlueJ-friendly style — strong for ICSE/CBSE CS and Android foundations.', tags: ['Java', 'Board-ready'] },
    cppTeen: { href: '/courses/cpp-programming-masterclass-for-teens', pill: 'C++', img: IMG('cpp-teens.webp'), alt: 'C++ programming masterclass for teens', title: 'C++ Programming', desc: 'STL, pointers, OOP — the language behind competitive programming and JEE Advanced prep.', tags: ['C++', 'CP'] },
    frontendTeen: { href: '/courses/frontend-development-masterclass-for-teens', pill: 'Frontend', img: IMG('frontend-teens.webp'), alt: 'Frontend development for teens', title: 'Frontend Development', desc: 'Pixel-perfect responsive UI, animations, Tailwind — portfolio-ready layouts and components.', tags: ['UI', 'CSS'] },
    backendTeen: { href: '/courses/backend-coding-masterclass-for-teens', pill: 'Backend', img: IMG('backend-teens.webp'), alt: 'Backend coding masterclass for teens', title: 'Backend Coding', desc: 'APIs, auth, databases. The half of the web most students never see but employers love.', tags: ['API', 'DB'] },
    appTeen: { href: '/courses/complete-app-development-masterclass-for-teens', pill: 'App Dev', img: IMG('app-dev-teens.webp'), alt: 'Complete app development for teens', title: 'App Development', desc: 'Flutter + Firebase — build and publish real mobile apps. Teens love seeing their app on a phone.', tags: ['Flutter', 'Mobile'] },
    aimlTeen: { href: '/courses/ai-ml-masterclass-teens', pill: 'AI/ML', img: IMG('ai-ml-teens.webp'), alt: 'AI and machine learning masterclass for teens', title: 'AI & ML Masterclass', desc: 'Pandas, sklearn, neural nets — real AI projects with datasets, not toys.', tags: ['AI', 'ML'] },
    gameTeen: { href: '/courses/complete-game-development-masterclass-for-teens', pill: 'Game Dev', img: IMG('game-dev-teens.webp'), alt: 'Complete game development for teens', title: 'Game Development', desc: 'Unity / Godot — full playable games with physics, characters and level design.', tags: ['Unity', 'Games'] },
    dsaTeen: { href: '/courses/problem-solving-dsa-masterclass-teens', pill: 'DSA', img: IMG('data-structure-algorithms.webp'), alt: 'Problem solving and DSA masterclass for teens', title: 'DSA & Problem Solving', desc: 'Arrays, linked lists, trees, graphs, DP. The core of every CS interview and competitive scene.', tags: ['DSA', 'Interview'] },
    mysqlTeen: { href: '/courses/mysql-mastery-for-teens', pill: 'SQL', img: IMG('mysql-teens.webp'), alt: 'MySQL mastery for teens', title: 'MySQL Mastery', desc: 'Relational databases, joins, subqueries — directly relevant to CBSE IP / CS projects.', tags: ['SQL', 'DB'] },
    cbseCS: { href: '/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course', pill: 'Board', img: IMG('python-teens.webp'), alt: 'CBSE ICSE computer science Class 11-12 course', title: 'CBSE/ICSE CS Class 11-12', desc: 'Board-aligned Python + Java course. Full syllabus, sample papers, project help.', tags: ['Board', 'CS'] },
    cbseIP: { href: '/courses/cbse-informatics-practices-ip-class-11-12-python-pandas-sql-complete-course', pill: 'IP', img: IMG('ip-cs-class-11-12.webp'), alt: 'CBSE Informatics Practices Class 11-12 course', title: 'CBSE IP Class 11-12', desc: 'Python, Pandas, SQL — the exact tools Informatics Practices tests, done the practical way.', tags: ['IP', 'Pandas'] },
    compTeen: { href: '/courses/competitive-programming-masterclass', pill: 'CP', img: IMG('data-structure-algorithms.webp'), alt: 'Competitive programming masterclass', title: 'Competitive Programming', desc: 'Codeforces/CodeChef rating climb. Algorithms that win contests and interviews.', tags: ['CP', 'Algo'] },
    creativeTeen: { href: '/courses/creative-media-design-masterclass-teens', pill: 'Design', img: IMG('designing-editing-teens.webp'), alt: 'Creative media design masterclass for teens', title: 'Creative Media Design', desc: 'Photoshop, Figma, video basics. Teens building a visual craft alongside code.', tags: ['Design', 'Media'] }
};

const CITY_CHIPS_DEFAULT = [
    { href: '/best-coding-class-in-delhi', label: 'Delhi' },
    { href: '/best-coding-class-in-mumbai', label: 'Mumbai' },
    { href: '/best-coding-class-in-bengaluru', label: 'Bengaluru' },
    { href: '/best-coding-class-in-hyderabad', label: 'Hyderabad' },
    { href: '/best-coding-class-in-chennai', label: 'Chennai' },
    { href: '/best-coding-class-in-pune', label: 'Pune' },
    { href: '/best-coding-class-in-kolkata', label: 'Kolkata' },
    { href: '/best-coding-class-in-ahmedabad', label: 'Ahmedabad' }
];

/* ============================================================
   AGE-WISE PAGES
   ============================================================ */

const AGE_PAGES = [

    /* ---------- AGE 8 ---------- */
    {
        slug: 'coding-for-8-year-olds',
        pageTitle: 'Coding for 8 Year Olds — Scratch, Block Coding & Creative Projects for Kids',
        metaDescription: 'Live online coding classes built for 8 year olds. Scratch Junior, block coding, animated stories and first games. 1 hour sessions, 1:1 or small group. Book a free demo.',
        keywords: 'coding for 8 year olds, scratch for 8 year olds, block coding for kids, coding classes for 8 year old, coding for class 3, coding for kids, best coding class for 8 year old, online coding classes kids, computer classes for 8 year olds, scratch junior course, coding for young children, introduction to coding for kids, fun coding activities for 8 year olds, animation coding for kids, first coding class',
        ogTitle: 'Coding for 8 Year Olds — Block Coding & Scratch Classes',
        ogDescription: 'Small, playful 1 hour classes built for 8 year olds. Scratch stories, animations and first games — 1:1 or small group, live online.',
        audienceType: '8 year olds (Class 3)',
        courseCode: 'AGE-8',
        courseName: 'Coding for 8 Year Olds',
        courseDesc: 'Live online coding classes for 8 year olds covering Scratch Junior, block coding, animated stories and first games. 1 hour sessions, delivered 1-on-1 or in small groups.',
        breadcrumbName: 'Coding for 8 Year Olds',
        accent: '#f472b6', accent2: '#fb923c', bodyClass: 'age-8-page',
        badge: '8', badgeLabel: 'Age cohort',
        eyebrow: 'For parents of 8 year olds · Class 3',
        h1Before: 'Coding for ', h1Highlight: '8 Year Olds', h1After: ' — the playful first step.',
        heroSub: 'At 8, kids love building tiny worlds — a bouncing cat, a colour story, a singing pumpkin. We use Scratch and gentle block coding so they build those worlds themselves, with no typing pressure and no boredom. Live, 1 hour per session.',
        trust: [
            { big: '3,100+', sub: '8-year-olds taught live since 2021' },
            { big: '4.9 / 5', sub: 'Parent rating across Class 2–4' },
            { big: '1 hour', sub: 'Per class, 1:1 or small group' },
            { big: '6 weeks', sub: 'To their first finished Scratch project' }
        ],
        chips: ['Scratch ready', 'Animated stories', 'First game'],
        coursesHeading: 'Courses made for 8-year-old fingers and minds.',
        coursesLede: 'At this age the right course is one that feels like play but still teaches logic, sequencing and patience. These are the courses most 8 year olds thrive in — every class live, 1 hour, with a real teacher.',
        courses: [KID_COURSES.vibeKids, KID_COURSES.scratch, KID_COURSES.kidsBlocks, KID_COURSES.problemKids, KID_COURSES.creativeKids, KID_COURSES.gameKids, KID_COURSES.appKids, KID_COURSES.canvaKids],
        skipHeading: 'Already finished Scratch Junior or iPad Swift Playgrounds?',
        skipBody: 'If your child has already played with Scratch Junior, Code.org or Swift Playgrounds, <strong>skip the very first weeks</strong> and move to a <a href="/courses/scratch-programming-complete-course" style="color:inherit;text-decoration:underline;">Scratch projects</a> or <a href="/courses/game-development-masterclass-for-kids" style="color:inherit;text-decoration:underline;">Game Dev</a> track. We do a 10-minute level check in the free demo.',
        whyHeading: 'Eight is the year imagination beats syntax.',
        whyLede: 'At 8, most children read short paragraphs, love building and making up stories, and are not yet worried about school marks. That combination is rare — and it is perfect for their first real taste of coding.',
        whys: [
            { tag: 'Reading level', title: 'They read enough to follow blocks', body: 'Scratch blocks read like short English sentences — "when green flag clicked", "move 10 steps". An 8 year old who reads a storybook comfortably can read a Scratch program within minutes.' },
            { tag: 'Imagination peak', title: 'They dream bigger than they can type', body: 'Ask an 8 year old what they want to build and you get wild, beautiful answers. Block coding lets them build it before they can type — which is why the first "oh, I made this" moment happens faster at this age than any other.' },
            { tag: 'No exam pressure', title: 'Class 3 still has room for curiosity', body: 'Board exams and entrance tests are years away. This is the rare window where your child can learn something hard slowly, without a deadline, and actually enjoy it.' }
        ],
        projectsHeading: 'Six tiny projects an 8 year old finishes and keeps.',
        projectsLede: 'These are the projects every 8-year-old learner of ours builds in the first months. Short enough to finish in one class, fun enough to show the family, and progressive — each one adds one new idea.',
        projects: [
            { sticker: 'Intro', title: 'Bouncing Cat', desc: 'The classic first Scratch project. The cat walks, bumps the wall, turns around. One hour, one smile.', tags: ['motion', 'events'] },
            { sticker: 'Story', title: 'Animated Name Card', desc: 'A title card with the child\'s name, colours, and a short animation. They send it to grandparents on day one.', tags: ['animation', 'costumes'] },
            { sticker: 'Art', title: 'Colour Story Forest', desc: 'A scrolling forest scene with changing weather — rain, snow, sunshine — controlled by clicks.', tags: ['scenes', 'variables'] },
            { sticker: 'Game', title: 'Catch the Star', desc: 'A bag at the bottom of the screen, stars falling — catch as many as you can in 30 seconds. First real game.', tags: ['score', 'loops'] },
            { sticker: 'Quiz', title: 'Favourite Things Quiz', desc: 'A Scratch cat asking "what is your favourite colour?" and reacting to the answer. First taste of input.', tags: ['input', 'if-else'] },
            { sticker: 'Create', title: 'Draw-with-Arrows', desc: 'Arrow keys move a paintbrush across the screen. Spacebar changes colour. Their own little art tool.', tags: ['keys', 'pen tool'] }
        ],
        roadmapHeading: 'Four little stages. Roughly six months.',
        roadmapLede: 'At 8, progress shows up as confidence first and code second. The path below is what works for most children. Your child\'s pace may be faster or slower — that is fine, and expected.',
        roadmap: [
            { label: 'Month 1 · Warm-up', title: 'Getting comfortable with blocks', body: 'Sprites, costumes, the green flag. Short, silly projects with lots of small wins. The goal is simply that they look forward to Friday\'s class.', tags: ['sprites', 'events', 'fun'] },
            { label: 'Month 2 · Building', title: 'First complete projects', body: 'Motion + costumes + events combine into finished mini-games and story scenes. They start saying "can we build X next?" — that sentence is the real milestone.', tags: ['animation', 'keys', 'loops'] },
            { label: 'Month 3–4 · Logic', title: 'If-else and variables', body: 'We introduce "what if" thinking. Score counters, lives, simple quiz branches. This is where computational thinking quietly moves in.', tags: ['if-else', 'variables', 'score'] },
            { label: 'Month 5+ · Bigger ideas', title: 'Multi-scene projects', body: 'Stories with chapters, games with levels, quizzes with 10 questions. They can now plan on paper before coding — a huge leap.', tags: ['planning', 'scenes', 'levels'] }
        ],
        compareHeading: 'Age 7 vs 8 vs 9 — what to expect.',
        compareLede: 'If you are deciding when to begin, this table gives you the plain differences between age 7, 8 and 9. Each row is a real shift we see in the classroom.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Age 7' },
                { label: 'Age 8 (this page)' },
                { label: 'Age 9', link: '/coding-for-9-year-olds' }
            ],
            rows: [
                { label: 'Main tool', values: ['Scratch Junior, Code.org', 'Scratch + drag-drop', 'Scratch + early typing'] },
                { label: 'Reading fluency', values: ['Short words', 'Short sentences', 'Paragraphs'] },
                { label: 'First project', values: ['Moving character', 'Catch-the-star game', 'Maze chase'] },
                { label: 'Session length', values: ['45 min', '1 hour', '1 hour'] },
                { label: 'Homework', values: ['Optional', 'Tiny and playful', '10-minute tasks'] },
                { label: 'Best format', values: ['1-on-1', 'Small group works too', 'Both work well'] }
            ]
        },
        reviewsHeading: 'What parents of 8 year olds tell us.',
        reviewsLede: 'Three recent reviews from families with 8-year-old learners. No paid testimonials. Names shortened for privacy.',
        reviews: [
            { initial: 'M', name: 'Meera J.', meta: 'Parent · Delhi · Small group', body: 'My son was scared of computer class at school — he thought coding was "big-kid stuff". Three weeks in, he showed me a Scratch story he made about our dog. The teacher has a way of turning his random ideas into finished projects. He is 8 and actually proud of something.' },
            { initial: 'A', name: 'Ankit P.', meta: 'Parent · Bengaluru · 1-on-1', body: 'We tried a self-paced app for six months — nothing stuck. One live 1-on-1 class a week and now he asks when the next class is. The teacher notes are short but always kind and specific: "he figured out a loop today without help".' },
            { initial: 'D', name: 'Divya R.', meta: 'Parent · Hyderabad · Group', body: 'What I like is that nothing feels like homework. The weekend task is usually "finish the turtle drawing you started in class". My daughter is 8 and does it without being asked. That\'s rare.' }
        ],
        faqs: [
            { q: 'Is 8 too young to start coding classes?', a: 'Not at all. Most children at 8 already read short paragraphs, follow multi-step instructions and love making things. Those are the only three skills Scratch asks for. We do not push typing or text code at this age — that comes later.' },
            { q: 'Do you use Scratch, Code.org or something else?', a: 'Primarily Scratch (MIT). It is free, proven, and the blocks read in clear English. We also use Code.org puzzles as warm-ups, and occasionally Blockly for variety.' },
            { q: 'My child cannot type yet — will that be a problem?', a: 'No. Scratch blocks snap together with the mouse. Typing comes naturally later. We do include light typing games as a warm-up but never pressure.' },
            { q: 'How long is one class and how often per week?', a: 'Every class is 1 hour. Most 8-year-olds do two classes a week, which is the sweet spot between progress and not feeling like school. Parents can pick a different frequency.' },
            { q: 'Should I pick 1-on-1 or small group for an 8 year old?', a: '1-on-1 is best if your child is shy, very energetic, or has a specific learning need. Small group (4–6 kids of the same age) works beautifully for most children and adds the joy of classmates.' },
            { q: 'What if my child gets distracted during an online class?', a: 'That\'s normal at 8. Our teachers are trained to bring attention back with a change of activity, not scolding. If a class is going nowhere we pause and send you a parent note instead of pushing through.' },
            { q: 'Do you give homework at this age?', a: 'Tiny optional tasks. Something like "draw what you want your next game to look like" or "finish the colouring of your sprite". Nothing that feels like school.' },
            { q: 'Do you offer a refund if it does not work out?', a: 'Free demo, no card required. If you enrol and the fit isn\'t right, we refund the unused portion of the fees within the first 2 weeks.' }
        ],
        relatedChips: [
            { href: '/coding-for-9-year-olds', small: 'Older', label: 'Coding for 9 Year Olds' },
            { href: '/coding-for-10-year-olds', small: 'Older', label: 'Coding for 10 Year Olds' },
            { href: '/coding-for-class-3', small: 'Grade', label: 'Coding for Class 3' },
            { href: '/coding-for-class-4', small: 'Grade', label: 'Coding for Class 4' },
            { href: '/python-and-ai-classes-for-kids-teens', small: 'Course', label: 'Python & AI for Kids' },
            { href: '/coding-classes-for-girls', small: 'Special', label: 'Coding for Girls' },
            { href: '/best-coding-classes-online', small: 'Compare', label: 'Best Online Classes' },
            { href: '/summer-coding-camp-kids', small: 'Camp', label: 'Summer Coding Camp' }
        ],
        cityChips: CITY_CHIPS_DEFAULT
    },

    /* ---------- AGE 9 ---------- */
    {
        slug: 'coding-for-9-year-olds',
        pageTitle: 'Coding for 9 Year Olds — Scratch, Python Basics & Game Projects for Kids',
        metaDescription: 'Live online coding classes for 9 year olds. Scratch games, first Python lines, HTML basics and AI tools — all in 1 hour sessions, 1:1 or small group. Free demo.',
        keywords: 'coding for 9 year olds, scratch for 9 year old, coding classes for 9 year olds, coding for class 4, python for 9 year olds, coding for kids, online coding classes 9 year olds, kids coding, game coding for kids, best coding class 9 year old, web coding for kids, coding projects class 4, coding class near me kids, coding institute kids',
        ogTitle: 'Coding for 9 Year Olds — Scratch, Python & Game Classes',
        ogDescription: 'Live 1 hour coding classes for 9 year olds. Scratch games, first Python, AI tools. 1:1 or small group.',
        audienceType: '9 year olds (Class 4)',
        courseCode: 'AGE-9',
        courseName: 'Coding for 9 Year Olds',
        courseDesc: 'Live online coding for 9 year olds. Scratch game design, early Python, HTML basics. 1 hour sessions, 1-on-1 or small group.',
        breadcrumbName: 'Coding for 9 Year Olds',
        accent: '#fb923c', accent2: '#f472b6', bodyClass: 'age-9-page',
        badge: '9', badgeLabel: 'Age cohort',
        eyebrow: 'For parents of 9 year olds · Class 4',
        h1Before: 'Coding for ', h1Highlight: '9 Year Olds', h1After: ' — the year they build games that feel real.',
        heroSub: 'At 9, children have the patience for a 20-block project, enough reading to follow their first Python lines, and exactly the right amount of stubbornness to debug. Our 1 hour live classes turn that energy into finished games, animations and first webpages.',
        trust: [
            { big: '4,200+', sub: '9-year-olds learning with us' },
            { big: '4.9 / 5', sub: 'Parent rating, 410+ reviews' },
            { big: '1 hour', sub: 'Per live class, 1:1 or group' },
            { big: '8 weeks', sub: 'From Scratch to first Python program' }
        ],
        chips: ['Game building', 'First Python', 'Debug power'],
        coursesHeading: 'Courses that match a 9-year-old\'s attention span and ambition.',
        coursesLede: 'At 9 the best courses blend play with a real new skill. These are the tracks that work — Scratch for confidence, a first bite of Python, a first webpage they actually show off. All live, 1 hour, with homework that feels like a game.',
        courses: [KID_COURSES.scratch, KID_COURSES.gameKids, KID_COURSES.kidsBlocks, KID_COURSES.pythonKids, KID_COURSES.htmlKids, KID_COURSES.aiKids, KID_COURSES.creativeKids, KID_COURSES.problemKids],
        skipHeading: 'Already finished Scratch basics at school?',
        skipBody: 'If your child has completed a school Scratch unit, Code.org Grade 3–4 track, or has been tinkering on their own, <strong>skip the intro weeks</strong> and join <a href="/courses/python-ai-kids-masterclass" style="color:inherit;text-decoration:underline;">Python for Kids</a>, <a href="/courses/cbse-computational-thinking-and-ai-course-for-kids-classes-3-to-8" style="color:inherit;text-decoration:underline;">AI Tools</a> or <a href="/courses/game-development-masterclass-for-kids" style="color:inherit;text-decoration:underline;">Game Development</a> directly. A 10-minute level check in the free demo places them right.',
        whyHeading: 'Nine is where curiosity meets patience.',
        whyLede: 'Most 9-year-olds can sit with a tricky problem for longer than they used to, and they don\'t cry when something doesn\'t work — they try again. That change alone unlocks a lot of new coding territory.',
        whys: [
            { tag: 'Patience grows', title: 'They can debug without giving up', body: 'At 8, a broken project is a meltdown. At 9, most children start to enjoy the puzzle of "why isn\'t this working?". That is the exact muscle every coder uses forever.' },
            { tag: 'Typing comes', title: 'Enough keyboard fluency for Python', body: 'We don\'t rush text coding, but most 9 year olds can comfortably type a 5-line Python program by the end of Class 4. That opens up the full project shelf below.' },
            { tag: 'Peer joy', title: 'Group classes start to click', body: 'At this age, doing something hard alongside friends is suddenly fun. Small group classes of 4–6 same-age kids work beautifully — they learn faster and laugh more.' }
        ],
        projectsHeading: 'Six projects your 9 year old actually finishes.',
        projectsLede: 'These are not ideas — these are the projects every 9-year-old student of ours builds. Unique to age 9 because each one hits the exact sweet spot of difficulty and fun at this level.',
        projects: [
            { sticker: 'Game', title: 'Maze Chase', desc: 'A maze, a character, and a monster. Arrow keys to move, game over if caught. Classic and hugely satisfying.', tags: ['keys', 'collisions', 'game over'] },
            { sticker: 'Game', title: 'Catch the Apple', desc: 'Apples fall from the top; basket catches them. Score counter, level up, losing lives. Their first "real" arcade game.', tags: ['lives', 'score', 'levels'] },
            { sticker: 'Python', title: 'Hello, Python', desc: 'Five-line Python programs — print, input, a silly joke generator. The first time typed code turns into a real reply.', tags: ['print', 'input', 'strings'] },
            { sticker: 'AI', title: 'Teachable Machine Pet', desc: 'Train a model to recognise three poses, hook it into Scratch, watch the cat react. Their first AI moment.', tags: ['AI', 'training', 'model'] },
            { sticker: 'Web', title: 'My Favourite Things Page', desc: 'An HTML page about themselves — favourite colour, pet, a photo, a list. Hosted online, shareable.', tags: ['html', 'images', 'links'] },
            { sticker: 'Create', title: 'Animated Greeting Card', desc: 'A birthday card that plays music, shows confetti, says a name. They send it to a cousin on day 14.', tags: ['animation', 'sound', 'timing'] }
        ],
        roadmapHeading: 'Four stages. About seven months end-to-end.',
        roadmapLede: 'We deliberately don\'t rush age 9 into Python. The stages below give each skill enough time to stick, so they are still confident six months later.',
        roadmap: [
            { label: 'Month 1–2 · Games in Scratch', title: 'Finish three Scratch games', body: 'Maze chase, catch-the-apple, animated story. They learn events, variables, loops and collision detection — through games, not lectures.', tags: ['events', 'variables', 'loops'] },
            { label: 'Month 3–4 · First Python', title: 'Five-line programs that actually run', body: 'We move to Python in short, safe bites. A tip calculator, a joke generator, a number guess game. Typing slows things down in a good way.', tags: ['print', 'input', 'if-else'] },
            { label: 'Month 5 · AI intro', title: 'Teachable Machine + Scratch', body: 'Teachable Machine gives them a model with no code. Scratch ties it into an interactive project. This is the first AI moment and it always lands.', tags: ['AI', 'datasets', 'scratch bridge'] },
            { label: 'Month 6+ · Web or Games', title: 'Pick a deeper track', body: 'Either HTML/CSS to make a real personal page, or continue into Python-based games with turtle graphics. Most kids want to do both.', tags: ['html', 'css', 'turtle'] }
        ],
        compareHeading: 'Age 8 vs 9 vs 10 — the plain differences.',
        compareLede: 'If your child is right at a boundary, this table tells you what actually changes — no fluff.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Age 8', link: '/coding-for-8-year-olds' },
                { label: 'Age 9 (this page)' },
                { label: 'Age 10', link: '/coding-for-10-year-olds' }
            ],
            rows: [
                { label: 'Main tool', values: ['Scratch + blocks', 'Scratch + early Python', 'Scratch + Python + HTML'] },
                { label: 'Typing', values: ['Minimal', 'Short programs', 'Comfortable'] },
                { label: 'First big project', values: ['Catch-the-star', 'Maze Chase + Apple Catcher', 'Python number guess'] },
                { label: 'Debug tolerance', values: ['Needs help', 'Tries once before asking', 'Tries several times'] },
                { label: 'AI exposure', values: ['Not yet', 'Teachable Machine intro', 'Teachable Machine + project'] },
                { label: 'Session length', values: ['1 hour', '1 hour', '1 hour'] }
            ]
        },
        reviewsHeading: 'Real words from parents of 9 year olds.',
        reviewsLede: 'Three recent reviews, exactly as written, shortened for privacy.',
        reviews: [
            { initial: 'K', name: 'Karthik S.', meta: 'Parent · Chennai · 1-on-1', body: 'My son is 9 and was obsessed with Roblox but had no idea games could be made. After two months he built a maze game that his whole family played on a Sunday. He now asks for extra class time, which is not something I thought I\'d ever say about a 9 year old.' },
            { initial: 'N', name: 'Nitya B.', meta: 'Parent · Mumbai · Group', body: 'The small group class suits her perfectly — she has three regular classmates she looks forward to seeing. The teacher shares a weekly note on what they did. Last week it was "she figured out why her score kept resetting and fixed it herself".' },
            { initial: 'V', name: 'Vikas M.', meta: 'Parent · Pune · 1-on-1', body: 'I was skeptical that Python would work at 9. It does. The teacher keeps the programs tiny, funny, and attached to something my son cares about. He wrote a joke generator last week. That\'s real Python.' }
        ],
        faqs: [
            { q: 'Is 9 the right age to start Python?', a: 'For early, gentle exposure — yes. We start with 3 to 5 line programs, focused on silly outputs and small games. We do not push loops and functions at this age unless the child is clearly ready.' },
            { q: 'Will coding clash with Class 4 schoolwork?', a: 'Two 1-hour sessions a week is the usual schedule and parents rarely report conflict. In fact, most tell us maths problem-solving gets easier as coding progresses.' },
            { q: 'What equipment do we need at home?', a: 'Any laptop or desktop from the last five years. Stable internet, a webcam and headphones. Tablets don\'t work well for coding at this age — a proper keyboard matters.' },
            { q: 'Do you teach real Python or just block coding?', a: 'Both. We start with Scratch because it removes typing errors, and introduce Python as soon as typing is comfortable — usually around week 10.' },
            { q: '1-on-1 or small group — which for a 9 year old?', a: 'Group works for most 9-year-olds because they enjoy classmates and the pace is gentle. 1-on-1 is better if your child is very shy, very advanced, or has a specific need.' },
            { q: 'What if they lose interest after a month?', a: 'We change the track before we change the child. If Scratch isn\'t clicking we move to AI tools, or HTML, or game dev. Interest at 9 is about finding the right door.' },
            { q: 'Can coding help with CBSE/ICSE Class 4 computer subject?', a: 'Yes. Class 4 computer textbooks cover Scratch, Logo and the basics of a computer. Our curriculum naturally covers all of that plus more, so school lessons feel easy.' },
            { q: 'Is there a free demo class?', a: 'Yes — one full 1 hour live class with a real teacher, no card required. If you enrol and the fit isn\'t right, we refund the unused portion within 2 weeks.' }
        ],
        relatedChips: [
            { href: '/coding-for-8-year-olds', small: 'Younger', label: 'Coding for 8 Year Olds' },
            { href: '/coding-for-10-year-olds', small: 'Older', label: 'Coding for 10 Year Olds' },
            { href: '/coding-for-class-4', small: 'Grade', label: 'Coding for Class 4' },
            { href: '/coding-for-class-5', small: 'Grade', label: 'Coding for Class 5' },
            { href: '/python-and-ai-classes-for-kids-teens', small: 'Course', label: 'Python & AI for Kids' },
            { href: '/java-programming-for-kids-teens', small: 'Course', label: 'Java for Kids' },
            { href: '/coding-classes-for-girls', small: 'Special', label: 'Coding for Girls' },
            { href: '/best-coding-classes-online', small: 'Compare', label: 'Best Online Classes' }
        ],
        cityChips: CITY_CHIPS_DEFAULT
    },

    /* ---------- AGE 10 (kept separate — pilot preserved) ---------- */
    {
        slug: 'coding-for-10-year-olds',
        accent: '#14b8a6', accent2: '#a855f7',
        pageTitle: 'Coding for 10 Year Olds',
        metaDescription: 'Pilot page — preserved hand-written version is used.',
        keywords: 'coding for 10 year olds',
        audienceType: '10 year olds',
        courseCode: 'AGE-10',
        courseName: 'Coding for 10 Year Olds',
        courseDesc: 'Pilot',
        breadcrumbName: 'Coding for 10 Year Olds',
        badge: '10', badgeLabel: 'Age cohort',
        eyebrow: '', h1Before: '', h1Highlight: '10', h1After: '', heroSub: '',
        trust: [], chips: ['', '', ''],
        coursesHeading: '', coursesLede: '', courses: [],
        skipHeading: '', skipBody: '',
        whyHeading: '', whyLede: '', whys: [],
        projectsHeading: '', projectsLede: '', projects: [],
        roadmapHeading: '', roadmapLede: '', roadmap: [],
        compareHeading: '', compareLede: '', compare: { highlight: 0, columns: [], rows: [] },
        reviewsHeading: '', reviewsLede: '', reviews: [],
        faqs: [],
        relatedChips: [],
        cityChips: []
    },

    /* ---------- AGE 11 ---------- */
    {
        slug: 'coding-for-11-year-olds',
        pageTitle: 'Coding for 11 Year Olds — Python, Web Development & AI Projects for Class 6',
        metaDescription: 'Live online coding classes for 11 year olds. Python, HTML/CSS, game development and AI tools — matched to CBSE/ICSE Class 6 syllabus. 1 hour classes, 1:1 or group.',
        keywords: 'coding for 11 year olds, python for 11 year olds, coding classes for 11 year old, coding for class 6, cbse class 6 coding, icse class 6 computer, web development for kids, ai for kids, coding projects for 11 year olds, best coding class 11 year old, online coding 11 year old, kids python course, html css for kids, game dev for kids, data science for kids',
        ogTitle: 'Coding for 11 Year Olds — Python, Web & AI Classes',
        ogDescription: 'Live 1 hour classes for 11 year olds. Python, web development, AI projects — matched to CBSE and ICSE Class 6.',
        audienceType: '11 year olds (Class 6)',
        courseCode: 'AGE-11',
        courseName: 'Coding for 11 Year Olds',
        courseDesc: 'Live online coding classes for 11 year olds. Python, HTML/CSS, AI tools, game development — aligned to school syllabus. 1 hour sessions, 1-on-1 or small group.',
        breadcrumbName: 'Coding for 11 Year Olds',
        accent: '#3b82f6', accent2: '#14b8a6', bodyClass: 'age-11-page',
        badge: '11', badgeLabel: 'Age cohort',
        eyebrow: 'For parents of 11 year olds · Class 6',
        h1Before: 'Coding for ', h1Highlight: '11 Year Olds', h1After: ' — the year Python finally makes sense.',
        heroSub: 'At 11, your child meets coding formally at school for the first time (CBSE Class 6 and ICSE middle grades introduce it). Our 1 hour live classes take that school exposure and turn it into real Python, real webpages and first AI projects.',
        trust: [
            { big: '4,800+', sub: '11-year-olds in our live classes' },
            { big: '4.9 / 5', sub: 'Parent rating · 470+ reviews' },
            { big: '1 hour', sub: 'Per class, 1:1 or small group' },
            { big: '8 weeks', sub: 'To their first Python + HTML project combo' }
        ],
        chips: ['Python projects', 'Web basics', 'AI explorer'],
        coursesHeading: 'Courses that fit a sharp, curious 11 year old.',
        coursesLede: 'At 11, kids can handle a 30-line Python program or a styled HTML page. The courses below are matched to that readiness — they are the ones 11-year-olds thrive in at our school.',
        courses: [KID_COURSES.pythonKids, KID_COURSES.htmlKids, KID_COURSES.aiKids, KID_COURSES.gameKids, KID_COURSES.appKids, KID_COURSES.scratch, KID_COURSES.creativeKids, KID_COURSES.problemKids],
        skipHeading: 'Already comfortable with Scratch and basic HTML?',
        skipBody: 'If your child has already finished a Scratch course or a school computer unit, <strong>skip the basics</strong> and jump into a <a href="/courses/python-ai-kids-masterclass" style="color:inherit;text-decoration:underline;">Python</a>, <a href="/courses/cbse-computational-thinking-and-ai-course-for-kids-classes-3-to-8" style="color:inherit;text-decoration:underline;">AI Tools</a> or <a href="/courses/kids-ai-web-development-course" style="color:inherit;text-decoration:underline;">Web Development</a> track. We verify level in a free demo, no repeat content.',
        whyHeading: 'Eleven is when the school syllabus finally catches up.',
        whyLede: 'CBSE and ICSE both introduce real coding concepts around Class 6. An 11 year old who starts with us now walks into those chapters already fluent — and usually becomes the unofficial classroom helper.',
        whys: [
            { tag: 'School link', title: 'CBSE Class 6 ICT chapter lines up', body: 'The Class 6 ICT chapter covers Scratch, simple algorithms and an intro to Python. Our curriculum already touches every one of those concepts — plus their own projects.' },
            { tag: 'Abstract thinking', title: 'Variables and functions click', body: 'At 11, most children can hold an abstract idea — "this box called x holds a number that can change". That one mental step unlocks variables, functions and real programming.' },
            { tag: 'AI curiosity', title: 'They ask about ChatGPT already', body: 'Most 11 year olds have heard of AI. We use that curiosity to introduce Teachable Machine, then a small Python classifier — real AI, not theory.' }
        ],
        projectsHeading: 'The eleven-year-old project shelf.',
        projectsLede: 'Six projects pitched exactly at age 11 — hard enough to challenge, small enough to finish in a class or two. Each one introduces one new idea.',
        projects: [
            { sticker: 'Python', title: 'Rock–Paper–Scissors', desc: 'Against the computer, best of five. First real use of random, if-elif and game state.', tags: ['random', 'conditions', 'loops'] },
            { sticker: 'Python', title: 'Turtle Star Field', desc: 'A sky full of coloured stars drawn with nested loops. Beautiful output, foundational loop logic.', tags: ['turtle', 'nested loops', 'colour'] },
            { sticker: 'Web', title: 'Personal Profile Site', desc: 'Three-page HTML+CSS site about themselves — home, hobbies, projects. Deployed with a public link.', tags: ['html', 'css', 'deploy'] },
            { sticker: 'AI', title: 'Image Classifier', desc: 'Train Teachable Machine on cats/dogs/cars, then call it from a small Python script. First real model call.', tags: ['AI', 'classifier', 'python'] },
            { sticker: 'Python', title: 'Calculator App', desc: 'A calculator that takes two numbers and an operator. Uses functions and input parsing.', tags: ['functions', 'input', 'errors'] },
            { sticker: 'Create', title: 'Quiz with Score', desc: 'Ten-question quiz about their favourite subject. Keeps score, shows final grade, saves high score to a file.', tags: ['files', 'lists', 'logic'] }
        ],
        roadmapHeading: 'Four stages. Roughly eight months.',
        roadmapLede: 'This is the path most 11-year-olds follow with us — short enough to keep interest, layered enough to go deep. Not a race; we slow down wherever a concept needs more time.',
        roadmap: [
            { label: 'Month 1–2 · Python warm-up', title: 'Small programs that actually do something', body: 'print, input, random, if-elif. We spend the first weeks building a joke generator, a tip calculator and a dice game — not reading slides.', tags: ['input', 'random', 'logic'] },
            { label: 'Month 3–4 · Loops & lists', title: 'The power combo', body: 'For loops, while loops, lists. Turtle graphics becomes the fun playground. By the end, they can draw a star field and build a quiz.', tags: ['for', 'while', 'lists'] },
            { label: 'Month 5 · Web intro', title: 'HTML + CSS personal site', body: 'Three-page responsive site about them. They learn tags, classes, a bit of layout, and how to put it online for free.', tags: ['html', 'css', 'deploy'] },
            { label: 'Month 6+ · AI starter', title: 'Teachable Machine + Python classifier', body: 'Train a small image model, then call it from Python. Discuss what a dataset is, what bias looks like. A mature first AI experience.', tags: ['AI', 'datasets', 'classifier'] }
        ],
        compareHeading: 'Age 10 vs 11 vs 12 — the honest differences.',
        compareLede: 'If your child is on a boundary, this table shows exactly what changes between these three years.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Age 10', link: '/coding-for-10-year-olds' },
                { label: 'Age 11 (this page)' },
                { label: 'Age 12', link: '/coding-for-12-year-olds' }
            ],
            rows: [
                { label: 'Main tool', values: ['Scratch + early Python', 'Python + HTML/CSS', 'Python + Web + AI'] },
                { label: 'Comfort with typing', values: ['Short programs', 'Full programs', 'Long programs'] },
                { label: 'First real project', values: ['Number guess game', 'Rock–paper–scissors', 'Text adventure'] },
                { label: 'School syllabus link', values: ['Class 5–6 bridge', 'CBSE Class 6 ICT', 'Class 7 formal'] },
                { label: 'AI exposure', values: ['Teachable Machine', 'Classifier project', 'Small ML with Python'] },
                { label: 'Best format', values: ['Both work', 'Both work', '1-on-1 for faster kids'] }
            ]
        },
        reviewsHeading: 'Parents of 11 year olds — in their own words.',
        reviewsLede: 'Three recent reviews from families with 11-year-old learners.',
        reviews: [
            { initial: 'S', name: 'Sanjana K.', meta: 'Parent · Gurgaon · Group', body: 'My daughter is in Class 6 CBSE. Her school teacher now asks her to help classmates during the computer period. She\'s built a Python calculator and a personal webpage. The fees are honestly fair for the attention they give each child.' },
            { initial: 'H', name: 'Harsh T.', meta: 'Parent · Noida · 1-on-1', body: 'We picked 1-on-1 because our son is ahead of his class. The teacher takes him exactly where he needs to go, not where a syllabus says he should be. He\'s doing Python loops while his class is still on MS Paint.' },
            { initial: 'L', name: 'Latha V.', meta: 'Parent · Chennai · Group', body: 'What changed after 3 months: she stopped being afraid of computer class at school. It used to be her weakest. Now she tells me "maa, coding is just reading instructions carefully". That mindset shift alone is worth it.' }
        ],
        faqs: [
            { q: 'Is 11 a good age to start real Python?', a: 'Yes — it is arguably the ideal age. At 11, children have the reading, typing and logical fluency Python actually needs, and they still have years before board-exam pressure starts.' },
            { q: 'Does this cover what CBSE Class 6 ICT teaches?', a: 'Yes, fully, and then some. The Class 6 chapter covers Scratch and a brief Python intro. Our curriculum covers all of that plus real projects and a deeper Python base.' },
            { q: 'How is this different from what schools teach?', a: 'Schools teach theory and one-off activities. We teach continuous projects with a real teacher watching the screen. By Month 3, most students are ahead of Class 8 school computer curriculum.' },
            { q: 'Will my child struggle moving from Scratch to Python?', a: 'Almost never. Scratch already teaches events, variables and loops. Python just replaces blocks with typed words. Most 11 year olds transition in 2–3 sessions.' },
            { q: '1-on-1 or small group for an 11 year old?', a: '1-on-1 if you want fastest progress or have a specific goal (Olympiad, school project). Small group (4–6 same-age) if your child enjoys learning with classmates.' },
            { q: 'How much screen time does this add?', a: 'Two 1-hour sessions per week, plus a 15–20 minute weekly task. Active, hands-on screen time is very different from passive scrolling — most parents say they notice the difference.' },
            { q: 'Do you prepare for coding Olympiads at this age?', a: 'Yes, if the child shows the appetite. We have an optional Olympiad track (CCO, NCO, CodeKraft) from Class 5 onwards. It runs alongside the regular curriculum.' },
            { q: 'Is there a free demo?', a: 'Yes. One full 1-hour demo with a real teacher, no card required. Refund on unused portion within 2 weeks if the fit isn\'t right.' }
        ],
        relatedChips: [
            { href: '/coding-for-10-year-olds', small: 'Younger', label: 'Coding for 10 Year Olds' },
            { href: '/coding-for-12-year-olds', small: 'Older', label: 'Coding for 12 Year Olds' },
            { href: '/coding-for-class-6', small: 'Grade', label: 'Coding for Class 6' },
            { href: '/coding-for-class-7', small: 'Grade', label: 'Coding for Class 7' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' },
            { href: '/python-and-ai-classes-for-kids-teens', small: 'Course', label: 'Python & AI for Kids' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/coding-classes-for-girls', small: 'Special', label: 'Coding for Girls' }
        ],
        cityChips: CITY_CHIPS_DEFAULT
    },

    /* ---------- AGE 12 ---------- */
    {
        slug: 'coding-for-12-year-olds',
        pageTitle: 'Coding for 12 Year Olds — Python, Web Dev, App Building & AI for Class 7',
        metaDescription: 'Coding classes for 12 year olds. Python, HTML/CSS/JavaScript, app development and AI projects. Live 1 hour classes, 1:1 or group. Free demo with level check.',
        keywords: 'coding for 12 year olds, python for 12 year olds, coding for class 7, javascript for kids, html css for 12 year old, app development for kids, ai for 12 year olds, coding projects class 7, coding classes for 12 year olds, kids coding advanced, middle school coding, online coding class 12 year old, coding course for 7th grade, data science kids',
        ogTitle: 'Coding for 12 Year Olds — Python, Web, App & AI Classes',
        ogDescription: 'Live 1 hour classes for 12 year olds. Python, web, app dev and AI. Matched to Class 7 syllabus.',
        audienceType: '12 year olds (Class 7)',
        courseCode: 'AGE-12',
        courseName: 'Coding for 12 Year Olds',
        courseDesc: 'Live online coding for 12 year olds. Python, HTML/CSS/JS, app dev intro, AI projects. 1 hour live sessions, 1:1 or small group.',
        breadcrumbName: 'Coding for 12 Year Olds',
        accent: '#6366f1', accent2: '#3b82f6', bodyClass: 'age-12-page',
        badge: '12', badgeLabel: 'Age cohort',
        eyebrow: 'For parents of 12 year olds · Class 7',
        h1Before: 'Coding for ', h1Highlight: '12 Year Olds', h1After: ' — the bridge year.',
        heroSub: 'Twelve is the bridge. Still a kid, but ready for real tools — Python with files and functions, web pages with JavaScript, a first mobile app prototype, a first real dataset for AI. One hour live, 1:1 or group.',
        trust: [
            { big: '5,400+', sub: '12-year-olds taught to date' },
            { big: '4.9 / 5', sub: 'Parent rating · 610+ reviews' },
            { big: '1 hour', sub: 'Per live class, 1:1 or group' },
            { big: '10 weeks', sub: 'To a deployed webpage + Python project' }
        ],
        chips: ['Python fluent', 'JavaScript intro', 'First AI dataset'],
        coursesHeading: 'Courses for a 12-year-old ready to go beyond blocks.',
        coursesLede: 'At 12, the right courses stretch beyond starter Python. Real web with HTML/CSS/JS, a first mobile app, a serious AI experiment. All live, 1 hour, with practical homework.',
        courses: [KID_COURSES.pythonKids, KID_COURSES.htmlKids, KID_COURSES.aiKids, KID_COURSES.gameKids, KID_COURSES.appKids, KID_COURSES.creativeKids, KID_COURSES.problemKids, KID_COURSES.officeKids],
        skipHeading: 'Already writing Python on their own?',
        skipBody: 'If your 12 year old already writes Python, knows HTML, or has done JS tutorials on YouTube, <strong>skip the intro</strong> and start directly on a real project track — <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI & ML</a>, <a href="/courses/full-stack-web-development-teens-masterclass" style="color:inherit;text-decoration:underline;">Full Stack Web Dev</a>, or <a href="/courses/complete-app-development-masterclass-for-teens" style="color:inherit;text-decoration:underline;">App Development</a>. Demo teacher places them right.',
        whyHeading: 'Twelve is when curiosity gets a toolbox.',
        whyLede: 'A 12 year old can read tutorials, watch a 10-minute video, and try something new on their own. That independence changes everything — they start driving their own learning.',
        whys: [
            { tag: 'Independence', title: 'They can learn between classes', body: 'At 12, most children can follow a short written instruction or a YouTube tutorial. Our job shifts from hand-holding to setting the right next challenge.' },
            { tag: 'Capacity', title: 'Hours of focus — if engaged', body: 'A 12 year old can build for 40 minutes straight if the project excites them. That\'s double what a 10 year old manages. We use that capacity for real, finishable apps.' },
            { tag: 'Career sniff', title: 'First taste of "this could be my job"', body: 'Twelve is when most of our students first say it out loud: "I want to do this for college." We take that seriously and lay the right foundation — portfolio, GitHub, real projects.' }
        ],
        projectsHeading: 'Projects a 12 year old can proudly show on GitHub.',
        projectsLede: 'At this age, projects should be real enough to publish. These are the six projects every 12-year-old of ours builds and keeps.',
        projects: [
            { sticker: 'Python', title: 'Text Adventure Game', desc: 'Multi-room story game with inventory, choices and endings. Teaches functions, dictionaries, file saves.', tags: ['functions', 'dicts', 'files'] },
            { sticker: 'Web', title: 'Interactive Profile Site', desc: 'HTML + CSS + a little JavaScript. Dark-mode toggle, simple form, a typing animation. Deployed live.', tags: ['js', 'dom', 'deploy'] },
            { sticker: 'Python', title: 'Dice Roller Stats', desc: 'Roll 10,000 dice, chart the distribution. First introduction to data and matplotlib.', tags: ['matplotlib', 'loops', 'stats'] },
            { sticker: 'AI', title: 'Image Classifier v2', desc: 'Not just training a model — using sklearn on a small CSV dataset. Understand accuracy, not just output.', tags: ['sklearn', 'csv', 'accuracy'] },
            { sticker: 'App', title: 'First App Prototype', desc: 'Using MIT App Inventor or Flutter starter — a simple app that does one thing. Their first .apk.', tags: ['app', 'apk', 'ui'] },
            { sticker: 'Web', title: 'Data Fetch Page', desc: 'A webpage that fetches JSON from a public API and shows it. First real API call.', tags: ['api', 'json', 'fetch'] }
        ],
        roadmapHeading: 'Four stages across about eight months.',
        roadmapLede: 'At 12, we push further and faster than younger ages — but only in depth, not in hours. One hour twice a week stays the pace.',
        roadmap: [
            { label: 'Month 1–2 · Python II', title: 'Functions, files, errors', body: 'Beyond if-else. Functions become natural, files are read and written, errors are read and fixed. Projects start to feel like real programs.', tags: ['functions', 'files', 'errors'] },
            { label: 'Month 3–4 · Web with JS', title: 'First JavaScript', body: 'JavaScript on top of HTML/CSS. DOM manipulation, event listeners, a tiny interactive widget. Deploy to Netlify.', tags: ['js', 'dom', 'events'] },
            { label: 'Month 5 · AI + data', title: 'Small datasets and sklearn', body: 'CSV files, pandas basics, a simple classifier or regression. They learn what training vs testing means. Real AI vocabulary starts.', tags: ['pandas', 'sklearn', 'charts'] },
            { label: 'Month 6+ · App or Game', title: 'Their first publishable app', body: 'Either MIT App Inventor / Flutter starter, or a finished Python game with sound and menus. Something they can install or play.', tags: ['flutter', 'apk', 'publish'] }
        ],
        compareHeading: 'Age 11 vs 12 vs 13 — what actually shifts.',
        compareLede: 'If your child is straddling primary and middle school, this is the honest picture.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Age 11', link: '/coding-for-11-year-olds' },
                { label: 'Age 12 (this page)' },
                { label: 'Age 13', link: '/coding-for-13-year-olds' }
            ],
            rows: [
                { label: 'Main tool', values: ['Python + HTML/CSS', 'Python + JS + first app', 'Python + React + app'] },
                { label: 'Project scope', values: ['1-class projects', '3–5 class projects', 'Week-long projects'] },
                { label: 'AI depth', values: ['Teachable Machine', 'sklearn basics', 'Datasets + neural nets intro'] },
                { label: 'School syllabus link', values: ['CBSE Class 6 ICT', 'Class 7 formal coding', 'Class 8 CS'] },
                { label: 'Independence', values: ['Needs teacher prompts', 'Drives some sessions', 'Takes ownership'] },
                { label: 'GitHub use', values: ['Not yet', 'First repo', 'Active contributor'] }
            ]
        },
        reviewsHeading: 'Real parents of 12 year olds.',
        reviewsLede: 'Three recent reviews, unedited except for privacy.',
        reviews: [
            { initial: 'R', name: 'Rohan G.', meta: 'Parent · Kolkata · 1-on-1', body: 'My son built a small Flutter app in month 5 and we actually installed it on his phone. He was stunned. He said "appa, I made the app that is on my phone". For a 12 year old that is life-changing.' },
            { initial: 'Y', name: 'Yashvi M.', meta: 'Parent · Ahmedabad · Group', body: 'She was shy in the first group class. Now she volunteers to show her screen. The teacher called her "a very careful debugger" and she hasn\'t stopped smiling. Small things matter at 12.' },
            { initial: 'D', name: 'Dinesh V.', meta: 'Parent · Hyderabad · 1-on-1', body: 'We shifted from another coding platform because the teacher there kept changing every month. Here it\'s the same teacher for 6 months now. My son now asks about dictionaries and API calls at dinner. That kind of consistency is rare.' }
        ],
        faqs: [
            { q: 'Is 12 too old to start from scratch?', a: 'Not at all. A 12-year-old can comfortably catch up with what a 9-year-old has learned in about 6 weeks of 1-on-1 classes, because the cognitive load is no longer the limiter. They just need the right on-ramp.' },
            { q: 'Do you teach JavaScript at age 12?', a: 'Yes, in small doses — DOM manipulation, event listeners, simple widgets. We don\'t push frameworks like React until 14+.' },
            { q: 'Can a 12 year old really learn AI/ML?', a: 'Yes — the vocabulary, not the deep maths. Training, testing, accuracy, bias, datasets. These are within reach at 12 if taught without jargon. A real sklearn classifier is totally doable.' },
            { q: 'How do you handle varying levels across 12 year olds?', a: '1-on-1 always fits the learner. In group classes we place students by level, not just age — so a beginner 12 year old is with fellow beginners, not with someone two years ahead.' },
            { q: 'What about coding for CBSE Class 7 syllabus?', a: 'The Class 7 CBSE ICT chapter covers Python basics, HTML intro and a brief look at AI. Our curriculum naturally covers all of that and well beyond — school lessons become easy revision.' },
            { q: 'Can my 12 year old try app development?', a: 'Yes. We use MIT App Inventor for first apps (no Android Studio complexity), and Flutter starter for those ready for real app dev. A finished first app usually lands in month 5–6.' },
            { q: 'Is there homework pressure?', a: '15–20 minute weekly task. We design them as "finish your own project", not extra exercises. Parents rarely report stress.' },
            { q: 'Is there a free demo at this age?', a: 'Yes — one full 1 hour live class with a real teacher. No card required. Refund on unused portion within 2 weeks if the fit isn\'t right.' }
        ],
        relatedChips: [
            { href: '/coding-for-11-year-olds', small: 'Younger', label: 'Coding for 11 Year Olds' },
            { href: '/coding-for-13-year-olds', small: 'Older', label: 'Coding for 13 Year Olds' },
            { href: '/coding-for-class-7', small: 'Grade', label: 'Coding for Class 7' },
            { href: '/coding-for-class-8', small: 'Grade', label: 'Coding for Class 8' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' },
            { href: '/coding-for-icse-students', small: 'Board', label: 'ICSE Coding' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/java-programming-for-kids-teens', small: 'Course', label: 'Java for Kids' }
        ],
        cityChips: CITY_CHIPS_DEFAULT
    },

    /* ---------- AGE 13 ---------- */
    {
        slug: 'coding-for-13-year-olds',
        pageTitle: 'Coding for 13 Year Olds — Python, Full Stack Web & App Development for Teens',
        metaDescription: 'Live online coding classes for 13 year olds. Python OOP, full stack web, app development, AI/ML and DSA intro. 1 hour classes, 1:1 or small group. Free demo.',
        keywords: 'coding for 13 year olds, python for teens, coding for class 8, full stack for teens, app development for teens, ai ml for 13 year olds, javascript for teens, react for teens, coding for teenagers, teen coding classes online, coding for 8th grade, best coding class for 13 year old, java for 13 year olds, dsa for teens',
        ogTitle: 'Coding for 13 Year Olds — Python, Web, App & AI',
        ogDescription: 'Live 1 hour classes for 13 year olds. Python OOP, full stack, app dev, AI/ML. Real projects, real tools.',
        audienceType: '13 year olds (Class 8)',
        courseCode: 'AGE-13',
        courseName: 'Coding for 13 Year Olds',
        courseDesc: 'Live online coding for 13 year olds. Python, full-stack web, app development, AI/ML intro, DSA basics. 1 hour live sessions.',
        breadcrumbName: 'Coding for 13 Year Olds',
        accent: '#a855f7', accent2: '#ec4899', bodyClass: 'age-13-page',
        badge: '13', badgeLabel: 'Age cohort',
        eyebrow: 'For parents of 13 year olds · Class 8',
        h1Before: 'Coding for ', h1Highlight: '13 Year Olds', h1After: ' — the year they become a real coder.',
        heroSub: 'Thirteen is the turning point. Old enough for OOP, Git and deployed apps; young enough that a board exam is not yet eating the calendar. One hour live, 1:1 or small group.',
        trust: [
            { big: '5,900+', sub: 'Teens in our live programmes' },
            { big: '4.9 / 5', sub: 'Parent rating · 730+ reviews' },
            { big: '1 hour', sub: 'Per live session, 1:1 or group' },
            { big: '12 weeks', sub: 'To their first deployed full-stack project' }
        ],
        chips: ['Python OOP', 'GitHub ready', 'First deployed app'],
        coursesHeading: 'Teen-grade courses for a 13 year old who wants real tools.',
        coursesLede: 'At 13, the best courses use the same tools professional developers use — Python with OOP, React, Git, real databases. These are the tracks our 13-year-olds thrive in.',
        courses: [TEEN_COURSES.vibeTeen, TEEN_COURSES.pythonTeen, TEEN_COURSES.fullstackTeen, TEEN_COURSES.frontendTeen, TEEN_COURSES.appTeen, TEEN_COURSES.aimlTeen, TEEN_COURSES.gameTeen, TEEN_COURSES.javaTeen],
        skipHeading: 'Already has Python and HTML basics?',
        skipBody: 'If your teen already knows Python basics and has touched HTML/CSS, <strong>skip ahead</strong> into <a href="/courses/react-for-teens-complete-masterclass" style="color:inherit;text-decoration:underline;">React</a>, <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI & ML</a>, <a href="/courses/problem-solving-dsa-masterclass-teens" style="color:inherit;text-decoration:underline;">DSA</a> or <a href="/courses/complete-app-development-masterclass-for-teens" style="color:inherit;text-decoration:underline;">App Development</a>. Free demo has a proper level check.',
        whyHeading: 'Thirteen is when coding stops being a class and becomes an identity.',
        whyLede: 'A 13 year old who likes coding will start a personal project without being asked, join Discords, watch YouTube tutorials, try to deploy things. The job of a good teacher is to feed that fire without overwhelming it.',
        whys: [
            { tag: 'Ownership', title: 'They drive their own projects', body: 'At 13, most of our students bring project ideas to class. A weather app, a personal blog, a Discord bot. We teach the skills around their idea rather than a syllabus.' },
            { tag: 'Community', title: 'GitHub, Discord, hackathons', body: 'Thirteen is the right age to open a GitHub account. Real commits, real pull requests. We guide first steps so the profile looks genuine by age 16.' },
            { tag: 'Signal for college', title: 'The portfolio starts building', body: 'Schools abroad and selective Indian colleges look for signals by Class 10–12. Starting a public portfolio at 13 gives 3–4 years of real projects by then.' }
        ],
        projectsHeading: 'Six projects that show up on a portfolio.',
        projectsLede: 'These are the projects every 13 year old in our full-stack track completes. Real enough to show a future university, small enough to actually finish.',
        projects: [
            { sticker: 'Python', title: 'OOP Todo App', desc: 'A command-line todo app using classes, inheritance and file storage. First taste of software design.', tags: ['oop', 'classes', 'files'] },
            { sticker: 'Web', title: 'Interactive Portfolio', desc: 'React component-based portfolio site, deployed to Vercel with a real custom domain.', tags: ['react', 'vercel', 'domain'] },
            { sticker: 'App', title: 'Flutter Journal App', desc: 'A daily-journal mobile app with local storage. Runs on their own phone via debug APK.', tags: ['flutter', 'sqlite', 'mobile'] },
            { sticker: 'AI', title: 'Sentiment Classifier', desc: 'Simple sklearn model that classifies tweet-style text as positive or negative. First supervised ML.', tags: ['sklearn', 'nlp', 'csv'] },
            { sticker: 'Tools', title: 'GitHub Starter Kit', desc: 'First repo, README, commits, branches, a merged pull request. Real source-control habits built at 13.', tags: ['git', 'readme', 'branches'] },
            { sticker: 'Game', title: 'Pygame Platformer', desc: 'A full platformer in Pygame — characters, levels, score, sound. Published to itch.io.', tags: ['pygame', 'levels', 'itch.io'] }
        ],
        roadmapHeading: 'Four stages across a school year.',
        roadmapLede: 'Thirteen is the age where the curriculum stops being linear. The stages below are the common path, but we branch based on what the student wants to build.',
        roadmap: [
            { label: 'Month 1–2 · Python advanced', title: 'OOP, modules, error handling', body: 'We move past scripts into software. Classes, inheritance, try/except, imports. The first proper Python program structure.', tags: ['classes', 'modules', 'exceptions'] },
            { label: 'Month 3–4 · Frontend real', title: 'HTML, CSS, JavaScript, React intro', body: 'Responsive layouts, DOM, a first React component. By the end they can spin up a React app and push to GitHub.', tags: ['js', 'react', 'github'] },
            { label: 'Month 5 · App or AI', title: 'Specialisation starts', body: 'They pick: Flutter app track, or sklearn AI track. Real work begins. Weekly progress. First deployed piece of software.', tags: ['flutter', 'sklearn', 'deploy'] },
            { label: 'Month 6+ · Portfolio + DSA intro', title: 'Public presence', body: 'GitHub polished, a readable portfolio site, and a gentle introduction to arrays and linked lists — getting ready for competitive territory later.', tags: ['portfolio', 'dsa', 'git flow'] }
        ],
        compareHeading: 'Age 12 vs 13 vs 14 — the teen shift.',
        compareLede: 'Thirteen is a clear step up. This table shows where and why.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Age 12', link: '/coding-for-12-year-olds' },
                { label: 'Age 13 (this page)' },
                { label: 'Age 14', link: '/coding-for-14-year-olds' }
            ],
            rows: [
                { label: 'Main stack', values: ['Python + JS + App starter', 'Python OOP + React + Flutter', 'Full stack + AI + DSA'] },
                { label: 'Project scope', values: ['3–5 sessions', 'Multi-week projects', 'Month-long projects'] },
                { label: 'GitHub', values: ['First repo', 'Active portfolio', 'Contributions to others'] },
                { label: 'AI depth', values: ['sklearn basics', 'Supervised ML', 'Neural nets intro'] },
                { label: 'School link', values: ['Class 7 ICT', 'Class 8 CS prep', 'Class 9 board CS'] },
                { label: 'Independence', values: ['Drives some', 'Drives most', 'Fully independent'] }
            ]
        },
        reviewsHeading: 'Parents of 13 year olds — raw quotes.',
        reviewsLede: 'Recent reviews from families with 13-year-old teens in our programmes.',
        reviews: [
            { initial: 'A', name: 'Aparna S.', meta: 'Parent · Delhi · 1-on-1', body: 'My son shifted from another platform where it was very video-heavy. Here the teacher actually watches him code and corrects as he types. In 3 months he built a React portfolio and a Python project. He calls the teacher on WhatsApp when stuck.' },
            { initial: 'B', name: 'Bharat C.', meta: 'Parent · Bengaluru · Group', body: 'What I like: the class is 5 teens, not 50. They show each other\'s work at the end. My daughter built a journal app in Flutter. She put it on my phone. That is an engineer.' },
            { initial: 'M', name: 'Mohit P.', meta: 'Parent · Pune · 1-on-1', body: 'We have been with Modern Age Coders since our son was 11. At 13, he now commits to GitHub weekly. The teacher was very clear that OOP was the next step and paced it well.' }
        ],
        faqs: [
            { q: 'Is 13 too late to start coding?', a: 'Not even close. A motivated 13 year old starting from zero can reach a portfolio-ready level within a year of consistent weekly classes. We have many students who started at 13 and are now confident by 14.' },
            { q: 'Will this help with CBSE/ICSE Class 8 CS?', a: 'Yes. Class 8 CS covers Python basics, HTML and simple algorithms. By month 2 of our programme, your teen is already ahead of Class 10 syllabus.' },
            { q: 'Do you teach React at this age?', a: 'Yes — in a measured way. After JavaScript basics are solid (usually by month 3), we introduce React components. By month 6, most students can build a small React app.' },
            { q: 'Is Python enough for a 13 year old or should we start Java/C++?', a: 'Python first. It is the language with the lowest friction and widest future — AI, data, web, automation. Java or C++ make sense at 14+ once Python OOP is solid.' },
            { q: 'What about AI/ML — can a 13 year old really do it?', a: 'Yes. We don\'t touch calculus — we use sklearn, pandas and real small datasets. A 13 year old can train, test and evaluate a classifier within 8 sessions.' },
            { q: 'Can I let my 13 year old pick their track?', a: 'Strongly recommended. At this age, engagement is everything. We advise based on what they want to build — games, apps, websites, AI — and design the curriculum around it.' },
            { q: 'How does this work with coaching classes?', a: 'Two 1-hour sessions a week fits alongside even intensive school coaching. Most of our 13-year-olds do weekends.' },
            { q: 'Is there a level check in the free demo?', a: 'Yes. The demo teacher spends the first 10 minutes gauging level and the remaining 50 on real content at the right difficulty.' }
        ],
        relatedChips: [
            { href: '/coding-for-12-year-olds', small: 'Younger', label: 'Coding for 12 Year Olds' },
            { href: '/coding-for-14-year-olds', small: 'Older', label: 'Coding for 14 Year Olds' },
            { href: '/coding-for-class-8', small: 'Grade', label: 'Coding for Class 8' },
            { href: '/coding-for-class-9', small: 'Grade', label: 'Coding for Class 9' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/java-programming-for-kids-teens', small: 'Course', label: 'Java for Teens' },
            { href: '/best-coding-classes-online', small: 'Compare', label: 'Best Online Classes' }
        ],
        cityChips: CITY_CHIPS_DEFAULT
    },

    /* ---------- AGE 14 ---------- */
    {
        slug: 'coding-for-14-year-olds',
        pageTitle: 'Coding for 14 Year Olds — Python OOP, Full Stack, AI/ML & DSA for Class 9',
        metaDescription: 'Coding for 14 year olds. Python OOP, MERN full stack, AI/ML with real datasets, DSA basics and Java for Class 9. Live 1 hour classes, 1:1 or small group.',
        keywords: 'coding for 14 year olds, python oop for teens, coding for class 9, mern for teens, ai ml 14 year olds, dsa for 14 year olds, java for 14 year olds, full stack teens, cbse class 9 cs, icse class 9 cs, react for teens, app dev 14 year old, teen coding, best coding 14 year old',
        ogTitle: 'Coding for 14 Year Olds — OOP, Full Stack, AI & DSA',
        ogDescription: 'Live 1 hour classes for 14 year olds. Python OOP, MERN, AI/ML, DSA basics. Matched to Class 9 CS.',
        audienceType: '14 year olds (Class 9)',
        courseCode: 'AGE-14',
        courseName: 'Coding for 14 Year Olds',
        courseDesc: 'Live online coding for 14 year olds. Python OOP, MERN stack, AI/ML, DSA basics, Java/CBSE CS alignment.',
        breadcrumbName: 'Coding for 14 Year Olds',
        accent: '#8b5cf6', accent2: '#06b6d4', bodyClass: 'age-14-page',
        badge: '14', badgeLabel: 'Age cohort',
        eyebrow: 'For parents of 14 year olds · Class 9',
        h1Before: 'Coding for ', h1Highlight: '14 Year Olds', h1After: ' — where the portfolio gets serious.',
        heroSub: 'At 14, your teen enters the board years. This is the window where a serious coding portfolio takes shape — real Python, a MERN full stack app, a first AI project with a real dataset, and the early DSA that matters for college.',
        trust: [
            { big: '6,200+', sub: '14-year-olds learning live' },
            { big: '4.9 / 5', sub: 'Parent rating · 780+ reviews' },
            { big: '1 hour', sub: 'Per live class, 1:1 or group' },
            { big: '4 projects', sub: 'Portfolio-ready in 6 months' }
        ],
        chips: ['Full stack', 'Real datasets', 'DSA starter'],
        coursesHeading: 'Courses that build a real 14-year-old portfolio.',
        coursesLede: 'Portfolio, not toys. These are the courses that make sense at 14 — MERN, AI/ML, DSA — chosen because they hold up as signals for Class 12 and early college interviews.',
        courses: [TEEN_COURSES.pythonTeen, TEEN_COURSES.fullstackTeen, TEEN_COURSES.reactTeen, TEEN_COURSES.javaTeen, TEEN_COURSES.aimlTeen, TEEN_COURSES.appTeen, TEEN_COURSES.dsaTeen, TEEN_COURSES.backendTeen],
        skipHeading: 'Already deploying to Vercel?',
        skipBody: 'If your teen already has projects on GitHub and has touched React or Node, <strong>skip ahead</strong> into <a href="/courses/mern-stack-development-masterclass-college" style="color:inherit;text-decoration:underline;">MERN</a>, <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI/ML with datasets</a>, or <a href="/courses/problem-solving-dsa-masterclass-teens" style="color:inherit;text-decoration:underline;">DSA</a> straight away. Free demo includes a proper 10-minute level check.',
        whyHeading: 'Fourteen is the last quiet year before board pressure.',
        whyLede: 'Class 9 is the ideal year to go deep. School is formal but not yet at boil, and a teen who uses this year well arrives in Class 10 already confident — not catching up.',
        whys: [
            { tag: 'Time window', title: 'Class 9 still has room', body: 'By Class 10 the board exam owns the calendar. By Class 11 streams are picked. Class 9 is the last long stretch where a serious portfolio can be built without crunch.' },
            { tag: 'Brain wiring', title: 'Abstract thinking matures', body: 'At 14, concepts like recursion, trees, Big-O notation and class hierarchies can actually click. We use that window for the start of DSA and OOP.' },
            { tag: 'College signal', title: 'Projects at 14 become proof by 17', body: 'A GitHub profile built over 3 years reads very differently from one built in the last 6 months before a college application. We build it early.' }
        ],
        projectsHeading: 'Six portfolio-grade projects at 14.',
        projectsLede: 'Each of these holds up in a Class 12 portfolio and each teaches something that matters. Unique to age 14 — we do not do these at 13 or 15.',
        projects: [
            { sticker: 'Full Stack', title: 'MERN Task Tracker', desc: 'React frontend, Express API, MongoDB storage, JWT auth. Deployed with a real domain. Their first full-stack app.', tags: ['react', 'express', 'mongo'] },
            { sticker: 'AI', title: 'Housing Price Predictor', desc: 'Real Kaggle dataset, sklearn regression, matplotlib charts. A genuine data project with uncertainty talked through.', tags: ['sklearn', 'pandas', 'kaggle'] },
            { sticker: 'Java', title: 'ICSE-ready Java Project', desc: 'Object-oriented Java with BlueJ — the exact pattern ICSE Class 10 expects. Works alongside school.', tags: ['java', 'oop', 'bluej'] },
            { sticker: 'DSA', title: '15 Core Problems', desc: 'Arrays, strings, linked lists, stacks. The foundational set every serious coder solves by 15.', tags: ['arrays', 'linked lists', 'stacks'] },
            { sticker: 'App', title: 'Flutter Habit Tracker', desc: 'Mobile app with charts, local storage and notifications. Runs as a proper APK on their phone.', tags: ['flutter', 'sqlite', 'charts'] },
            { sticker: 'API', title: 'REST API in Flask', desc: 'Own Python Flask API with routes, database, Postman testing. First time they wrote a real backend.', tags: ['flask', 'rest', 'postman'] }
        ],
        roadmapHeading: 'Four stages. Nine months of serious work.',
        roadmapLede: 'We push harder at 14 than at any earlier age — because this is where the foundations for college-level CS actually live.',
        roadmap: [
            { label: 'Month 1–2 · Python deep', title: 'OOP, decorators, packaging', body: 'Classes that matter, decorators understood (not just used), a proper Python package with setup. The grown-up version of Python.', tags: ['oop', 'decorators', 'pypi'] },
            { label: 'Month 3–4 · Full stack', title: 'MERN build and deploy', body: 'React frontend, Express backend, MongoDB, deployed. First proper end-to-end web app. Real auth, real domain.', tags: ['mern', 'jwt', 'vercel'] },
            { label: 'Month 5 · AI or DSA', title: 'Specialisation', body: 'They pick: a real ML project track (pandas + sklearn with Kaggle data), or a DSA-first track (arrays, linked lists, stacks, queues).', tags: ['ml', 'dsa', 'kaggle'] },
            { label: 'Month 6+ · Board CS + open source', title: 'School + outside', body: 'We align with CBSE/ICSE Class 9 Java or Python. Also help with a first GitHub open-source contribution — small, but real.', tags: ['cbse', 'icse', 'open-source'] }
        ],
        compareHeading: 'Age 13 vs 14 vs 15 — a clear ladder.',
        compareLede: 'Each year here is a step. This table shows exactly what the step looks like.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Age 13', link: '/coding-for-13-year-olds' },
                { label: 'Age 14 (this page)' },
                { label: 'Age 15', link: '/coding-for-15-year-olds' }
            ],
            rows: [
                { label: 'Main stack', values: ['Python OOP + React', 'MERN + AI + DSA', 'Full stack + ML + CP'] },
                { label: 'Project scope', values: ['Multi-week', 'Month-long full stack', 'Quarter-long serious projects'] },
                { label: 'AI depth', values: ['Supervised ML intro', 'Kaggle datasets', 'Neural nets basics'] },
                { label: 'DSA', values: ['Arrays + strings', 'Linked lists + stacks', 'Trees + graphs'] },
                { label: 'School link', values: ['Class 8 CS', 'Class 9 CS/Java/ICSE', 'Class 10 board'] },
                { label: 'Portfolio', values: ['First site', 'Portfolio in progress', 'Strong portfolio'] }
            ]
        },
        reviewsHeading: 'What 14-year-olds\' parents are telling us.',
        reviewsLede: 'Unedited reviews from families of Class 9 students in our full-stack and AI tracks.',
        reviews: [
            { initial: 'G', name: 'Geeta N.', meta: 'Parent · Noida · 1-on-1', body: 'My son is in Class 9 CBSE. He wanted to skip school computer class because it was "too boring". The teacher at Modern Age Coders has him working on a MERN app. Now he tells his friends he\'s building a product.' },
            { initial: 'P', name: 'Preeti J.', meta: 'Parent · Ahmedabad · Group', body: 'The ICSE Java alignment is genuine. The teacher has the Class 9 syllabus open and teaches the chapter before the school teacher does. My daughter now tops her computer unit tests.' },
            { initial: 'T', name: 'Tarun B.', meta: 'Parent · Bengaluru · 1-on-1', body: 'We enrolled for AI/ML. My son built a housing-price predictor in month 5. The teacher was clear about overfitting, which I didn\'t expect them to cover at 14. This is real teaching, not demos.' }
        ],
        faqs: [
            { q: 'How much time does this take alongside Class 9?', a: 'Two 1-hour sessions per week plus a 20-minute weekly task. Most families do it on weekends. It fits around school and even tuition without being a strain.' },
            { q: 'Do you align with CBSE/ICSE Class 9 CS?', a: 'Yes. Our teachers keep the board syllabus open. CBSE Class 9 is typically Python plus basic computer concepts; ICSE is Java with BlueJ. Both are covered, directly.' },
            { q: 'When does DSA make sense at 14?', a: 'After Python OOP is solid (usually month 3). We start with arrays and strings, move to linked lists by month 4. No C++ needed yet — Python DSA is a kind on-ramp.' },
            { q: 'Is Java worth learning at 14 if the school teaches Python?', a: 'Yes — especially for ICSE students. Java introduces strict typing and OOP discipline in a way Python doesn\'t. We offer Java as a dedicated track.' },
            { q: 'Can my 14 year old really build a MERN app?', a: 'Yes, with guidance. It typically takes 8–10 weeks of focused sessions. The first app is small — a todo tracker — but it teaches the full stack pattern that scales.' },
            { q: 'How do you prepare for coding competitions?', a: 'We have an optional CP track that starts at 14. Codeforces Div 3 practice, weekly virtual contests, and topic-wise problem sets. Not pushed on students who are not competitive-minded.' },
            { q: 'Do you offer 1-on-1 exclusively or is group fine?', a: 'Both. At 14, group is great for social learning; 1-on-1 is great for specific goals (competition prep, portfolio work, school CS topper prep).' },
            { q: 'How do I know this is worth the fees?', a: 'One free demo, one refund clause in the first 2 weeks, live teachers you can name — not a video library. If it is not working, you are not stuck.' }
        ],
        relatedChips: [
            { href: '/coding-for-13-year-olds', small: 'Younger', label: 'Coding for 13 Year Olds' },
            { href: '/coding-for-15-year-olds', small: 'Older', label: 'Coding for 15 Year Olds' },
            { href: '/coding-for-class-9', small: 'Grade', label: 'Coding for Class 9' },
            { href: '/coding-for-class-10', small: 'Grade', label: 'Coding for Class 10' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' },
            { href: '/coding-for-icse-students', small: 'Board', label: 'ICSE Coding' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/java-programming-for-kids-teens', small: 'Course', label: 'Java for Teens' }
        ],
        cityChips: CITY_CHIPS_DEFAULT
    },

    /* ---------- AGE 15 ---------- */
    {
        slug: 'coding-for-15-year-olds',
        pageTitle: 'Coding for 15 Year Olds — Full Stack, AI/ML & DSA for Class 10 Board Year',
        metaDescription: 'Coding for 15 year olds in Class 10. Full stack web, AI/ML projects, DSA and competitive programming — without hurting board preparation. 1 hour live classes.',
        keywords: 'coding for 15 year olds, coding for class 10, cbse class 10 cs, icse class 10 computer, python for class 10, java for class 10, board year coding, dsa for 15 year olds, mern for teens, ai ml for 15 year olds, competitive programming teens, teen portfolio, github for teens, full stack for class 10',
        ogTitle: 'Coding for 15 Year Olds — Full Stack, AI & DSA (Class 10)',
        ogDescription: 'Serious coding for 15 year olds without hurting Class 10 boards. Full stack, AI, DSA, competitive programming.',
        audienceType: '15 year olds (Class 10)',
        courseCode: 'AGE-15',
        courseName: 'Coding for 15 Year Olds',
        courseDesc: 'Live online coding for 15 year olds balancing Class 10 boards with portfolio-grade full-stack, AI/ML and DSA work.',
        breadcrumbName: 'Coding for 15 Year Olds',
        accent: '#06b6d4', accent2: '#6366f1', bodyClass: 'age-15-page',
        badge: '15', badgeLabel: 'Age cohort',
        eyebrow: 'For parents of 15 year olds · Class 10 board year',
        h1Before: 'Coding for ', h1Highlight: '15 Year Olds', h1After: ' — serious, without hurting boards.',
        heroSub: 'Class 10 is the board year. The right coding programme at 15 respects that — fewer but deeper sessions, projects timed between exam blocks, and a clear plan so your teen finishes Class 10 with both a score card and a portfolio.',
        trust: [
            { big: '4,600+', sub: 'Class 10 students with us' },
            { big: '93%', sub: 'Finish the year without any drop' },
            { big: '1 hour', sub: 'Per live class, 1:1 or group' },
            { big: '6 projects', sub: 'Finished across the year' }
        ],
        chips: ['Board-safe', 'Portfolio-grade', 'DSA basics'],
        coursesHeading: 'Courses that fit a Class 10 schedule.',
        coursesLede: 'At 15, the right course is one that goes deep in 1 hour and does not spill into study hours. We pace content around exam blocks so nothing clashes.',
        courses: [TEEN_COURSES.pythonTeen, TEEN_COURSES.fullstackTeen, TEEN_COURSES.aimlTeen, TEEN_COURSES.javaTeen, TEEN_COURSES.dsaTeen, TEEN_COURSES.reactTeen, TEEN_COURSES.appTeen, TEEN_COURSES.cbseIP],
        skipHeading: 'Has a Class 10 student already built things?',
        skipBody: 'If your teen already has a GitHub with a few projects, <strong>skip into</strong> <a href="/courses/problem-solving-dsa-masterclass-teens" style="color:inherit;text-decoration:underline;">DSA</a>, <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI & ML</a>, or <a href="/courses/competitive-programming-masterclass" style="color:inherit;text-decoration:underline;">Competitive Programming</a>. A proper level check runs inside the free demo.',
        whyHeading: 'Fifteen is the year confidence decides the next five.',
        whyLede: 'A Class 10 student who finishes the board year with a portfolio, not just marks, walks into Class 11 with a real sense of identity. That is worth more than any single exam result.',
        whys: [
            { tag: 'Board-safe', title: 'Fewer, deeper sessions', body: 'Our Class 10 track runs 1 hour once or twice a week, with a pause during the mock exams and pre-board weeks. School always wins the calendar; coding earns its place around it.' },
            { tag: 'Identity', title: 'A portfolio before streams', body: 'Class 11 stream choice is easier when the student has already tried real coding projects. At least they know whether CS truly fits them — not just "arts or science?".' },
            { tag: 'Signal', title: 'Early GitHub matters later', body: 'Commits from Class 10 look very different from commits started in Class 12. Colleges and internships notice longevity.' }
        ],
        projectsHeading: 'Six projects a Class 10 student can realistically finish.',
        projectsLede: 'Designed around board-exam calendars — each one is doable even in a busy term, and each is board-portfolio-worthy.',
        projects: [
            { sticker: 'Python', title: 'Data Visualiser', desc: 'Pandas + matplotlib on a real CSV they care about (cricket stats, school data). Showed in 3 weeks.', tags: ['pandas', 'matplotlib', 'csv'] },
            { sticker: 'Full Stack', title: 'Study Tracker MERN', desc: 'A small web app to log study hours. Directly useful to them; deployed live; their first serious full-stack.', tags: ['mern', 'auth', 'charts'] },
            { sticker: 'AI', title: 'News Classifier', desc: 'Sklearn model classifying news headlines. Real dataset, evaluation metrics, confusion matrix.', tags: ['sklearn', 'nlp', 'metrics'] },
            { sticker: 'DSA', title: 'Top 50 LeetCode Easy', desc: 'A curated easy-to-medium set. Spaced across the year. First real interview-style problems.', tags: ['leetcode', 'arrays', 'strings'] },
            { sticker: 'Board', title: 'Class 10 CS Project', desc: 'Whatever the school CS/IP project is, done properly. Viva-ready, report-ready, code-reviewed.', tags: ['school', 'viva', 'report'] },
            { sticker: 'Mobile', title: 'Flutter Revision App', desc: 'Flashcard revision app built in Flutter. Used by their own classmates during prelims.', tags: ['flutter', 'flashcards', 'peer'] }
        ],
        roadmapHeading: 'Four stages across Class 10 — board-aware.',
        roadmapLede: 'Each stage fits the school calendar. We pause for pre-boards and resume after boards. No full-year death march.',
        roadmap: [
            { label: 'Term 1 · Python + school CS', title: 'Rebuild foundations cleanly', body: 'Python revisited with OOP, plus whatever the school CS paper covers. Sample papers done together. Board preparation and coding practice become one thing, not two.', tags: ['python', 'oop', 'board'] },
            { label: 'Before pre-boards · Full stack', title: 'Small deployed app', body: 'A MERN or Flask + HTML mini-app finished before pre-boards. Not a giant — something small that actually ships.', tags: ['mern', 'deploy', 'github'] },
            { label: 'Pause · Boards', title: 'Support mode only', body: 'During pre-boards and boards we pause the curriculum. If they need help with a CS paper question, we are on call — but no new content.', tags: ['board focus'] },
            { label: 'Post-boards · AI or DSA', title: 'Pick the next track', body: 'The summer after Class 10 is gold. We use it for a serious AI project or a DSA rampup — whichever matches the teen\'s plan for Class 11.', tags: ['ai', 'dsa', 'summer'] }
        ],
        compareHeading: 'Age 14 vs 15 vs 16 — board pressure changes things.',
        compareLede: 'The main difference at 15 is not what they can do — it is what they have time for.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Age 14', link: '/coding-for-14-year-olds' },
                { label: 'Age 15 (this page)' },
                { label: 'Age 16', link: '/coding-for-16-year-olds' }
            ],
            rows: [
                { label: 'School load', values: ['Moderate', 'Board year — heavy', 'Class 11 — heavy'] },
                { label: 'Sessions / week', values: ['2', '1–2 (flexible)', '2'] },
                { label: 'Project scope', values: ['Month-long', 'Compact 3-week projects', 'Longer again post-boards'] },
                { label: 'Main goal', values: ['Portfolio build', 'Portfolio + board', 'Stream-level depth'] },
                { label: 'DSA level', values: ['Intro', 'LeetCode easy', 'Full LC easy/medium'] },
                { label: 'Downtime', values: ['None', 'Pause for boards', 'Exam-block pauses'] }
            ]
        },
        reviewsHeading: 'Class 10 parents — not kidding about the time crunch.',
        reviewsLede: 'Genuine reviews from parents of 15-year-olds navigating Class 10 boards.',
        reviews: [
            { initial: 'U', name: 'Usha P.', meta: 'Parent · Mumbai · 1-on-1', body: 'I was nervous about any non-school class in Class 10. They paused for pre-boards on their own and resumed after. Son finished Class 10 with 94% and a deployed web app. I was wrong to be nervous.' },
            { initial: 'J', name: 'Jyoti S.', meta: 'Parent · Pune · Group', body: 'The teacher aligned with ICSE Class 10 Java syllabus week by week. Her Java board marks went up. She also built a Flutter revision app her friends used during prelims. Rare win-win.' },
            { initial: 'K', name: 'Kamal R.', meta: 'Parent · Chennai · 1-on-1', body: 'We did only one 1-hour class a week through the year. Even that was enough for him to finish 50 LeetCode problems and a study-tracker website. Small and steady works.' }
        ],
        faqs: [
            { q: 'Is Class 10 the wrong year to start coding?', a: 'Not at all — but the pace is different. We do shorter, deeper sessions and pause during pre-boards. Starting at 15 is still a good 2 years ahead of Class 12 portfolio needs.' },
            { q: 'Will coding affect board marks?', a: 'Our Class 10 students finish boards with equal or better marks than their classmates in our experience. The focus coding teaches — planning, debugging, patience — often lifts academics.' },
            { q: 'Do you cover Class 10 CBSE CS / IT paper directly?', a: 'Yes. The teacher keeps the CBSE code 402 / 165 syllabus open and aligns weekly. Sample papers solved together, viva preparation included.' },
            { q: 'What about ICSE Class 10 Computer Applications?', a: 'Fully covered. Java with BlueJ, OOP, arrays, sorting. Our teachers know the exact question pattern ICSE asks. See also our <a href="/computer-applications-icse-class-10">ICSE Computer Applications Class 10 page</a>.' },
            { q: 'Can we skip coding during pre-boards?', a: 'Yes — and we suggest it. We also offer a free 1 hour "emergency" session if they are stuck on a school CS topic.' },
            { q: 'Is DSA realistic in Class 10?', a: 'Yes, at the easy-medium level. 50 curated LeetCode problems across the year is a very reasonable target and builds confidence for Class 11.' },
            { q: 'Do you coach for the Class 10 CS project and viva?', a: 'Yes. We help pick the project, write the report properly, and prepare for the viva with likely questions. Many students score full marks on the project component.' },
            { q: 'Is there a free demo?', a: 'Yes — one full 1 hour live class, no card. Refund on unused portion within 2 weeks.' }
        ],
        relatedChips: [
            { href: '/coding-for-14-year-olds', small: 'Younger', label: 'Coding for 14 Year Olds' },
            { href: '/coding-for-16-year-olds', small: 'Older', label: 'Coding for 16 Year Olds' },
            { href: '/coding-for-class-10', small: 'Grade', label: 'Coding for Class 10' },
            { href: '/coding-for-class-11', small: 'Grade', label: 'Coding for Class 11' },
            { href: '/computer-applications-icse-class-10', small: 'Board', label: 'ICSE Computer Apps Class 10' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/java-programming-for-kids-teens', small: 'Course', label: 'Java for Teens' }
        ],
        cityChips: CITY_CHIPS_DEFAULT
    },

    /* ---------- AGE 16 ---------- */
    {
        slug: 'coding-for-16-year-olds',
        pageTitle: 'Coding for 16 Year Olds — CS Stream, Full Stack, AI/ML & DSA for Class 11',
        metaDescription: 'Coding for 16 year olds in Class 11. Full-stack, AI/ML with Pandas and sklearn, DSA in C++/Python, CBSE/ICSE CS alignment. Build a real portfolio for college.',
        keywords: 'coding for 16 year olds, coding for class 11, cs stream class 11, cbse cs class 11, icse cs class 11, python pandas class 11, ai ml for class 11, dsa c++ for class 11, competitive programming teens, mern full stack, react teens, informatics practices, full stack for 16 year olds, coding for cs stream',
        ogTitle: 'Coding for 16 Year Olds — CS Stream, Full Stack, AI',
        ogDescription: 'Class 11 coding programme. Full stack, AI/ML, DSA, CS stream alignment. Portfolio-first.',
        audienceType: '16 year olds (Class 11)',
        courseCode: 'AGE-16',
        courseName: 'Coding for 16 Year Olds',
        courseDesc: 'Live online coding for 16 year olds in Class 11. Full-stack, AI/ML, DSA, and CBSE/ICSE CS/IP alignment.',
        breadcrumbName: 'Coding for 16 Year Olds',
        accent: '#10b981', accent2: '#a855f7', bodyClass: 'age-16-page',
        badge: '16', badgeLabel: 'Age cohort',
        eyebrow: 'For parents of 16 year olds · Class 11',
        h1Before: 'Coding for ', h1Highlight: '16 Year Olds', h1After: ' — CS stream-ready depth.',
        heroSub: 'Class 11 is where coding stops being optional for CS-stream students. Our 1 hour live classes align with Class 11 CS / Informatics Practices, build a serious MERN + AI portfolio, and start DSA at a level that matters for JEE and college interviews.',
        trust: [
            { big: '3,800+', sub: 'Class 11 teens with us' },
            { big: '4.9 / 5', sub: 'Parent rating · 420+ reviews' },
            { big: '1 hour', sub: 'Per live class, 1:1 or group' },
            { big: '6 projects', sub: 'Portfolio-standard across Class 11' }
        ],
        chips: ['CS stream aligned', 'MERN + AI', 'DSA in C++'],
        coursesHeading: 'Courses for a 16 year old in the CS stream.',
        coursesLede: 'At 16, picked-CS students need real tools. These courses are that — MERN, AI/ML with real metrics, DSA in C++ or Python, and full CBSE/ICSE Class 11 alignment.',
        courses: [TEEN_COURSES.fullstackTeen, TEEN_COURSES.aimlTeen, TEEN_COURSES.dsaTeen, TEEN_COURSES.cppTeen, TEEN_COURSES.javaTeen, TEEN_COURSES.cbseCS, TEEN_COURSES.cbseIP, TEEN_COURSES.compTeen],
        skipHeading: 'Already topping the school CS class?',
        skipBody: 'If your teen is already strong on Python and HTML/JS, <strong>skip ahead</strong> into <a href="/courses/mern-stack-development-masterclass-college" style="color:inherit;text-decoration:underline;">MERN</a>, <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">real AI/ML</a>, <a href="/courses/problem-solving-dsa-masterclass-teens" style="color:inherit;text-decoration:underline;">DSA</a> or <a href="/courses/competitive-programming-masterclass" style="color:inherit;text-decoration:underline;">Competitive Programming</a>. Free demo places them properly.',
        whyHeading: 'Sixteen is when CS becomes a career decision.',
        whyLede: 'By 16, most teens know whether they want computer science in college. The right Class 11 programme turns that decision into evidence — a portfolio, a GitHub history, measurable skills.',
        whys: [
            { tag: 'Stream', title: 'CS in Class 11 needs structure', body: 'CBSE CS and Informatics Practices cover Python, Pandas, SQL, HTML and database concepts. We keep the exact syllabus open and teach alongside it — not instead of it.' },
            { tag: 'JEE + college', title: 'DSA begins for real', body: 'Competitive territory opens up. We start DSA in Python or C++, usually following NCERT + Striver sheets, and build up to interview-style problems.' },
            { tag: 'Portfolio', title: 'College signal sharpens', body: 'Top Indian private colleges and most abroad schools want portfolio evidence. A serious MERN + AI project in Class 11 is great signal for Class 12 applications.' }
        ],
        projectsHeading: 'Six projects that read well on a Class 12 SOP.',
        projectsLede: 'These are the projects we guide every Class 11 student through — finishable, portfolio-real, and each one teaches one thing that matters for college CS.',
        projects: [
            { sticker: 'Full Stack', title: 'MERN SaaS Starter', desc: 'A small SaaS-style app with auth, payments mock, and a dashboard. The kind of side project a second-year engineer is proud of.', tags: ['mern', 'stripe-mock', 'jwt'] },
            { sticker: 'AI', title: 'Real ML Portfolio Piece', desc: 'Pandas + sklearn + a real dataset. Regression, classification, cross-validation, plots. A blog post written about it.', tags: ['sklearn', 'pandas', 'writeup'] },
            { sticker: 'DSA', title: 'Striver 75 Sheet', desc: 'A curated DSA sheet; arrays, strings, recursion, trees. The foundation for interviews and JEE CS rating.', tags: ['striver', 'arrays', 'trees'] },
            { sticker: 'Data', title: 'Pandas Case Study', desc: 'Class 11 IP-style project on a real dataset — matches CBSE IP practical exam pattern.', tags: ['pandas', 'sql', 'ip'] },
            { sticker: 'CP', title: 'Codeforces 1000 rating', desc: 'First rated rounds. Arrays, greedy, basic implementation. The real on-ramp to competitive.', tags: ['cf', 'greedy', 'imp'] },
            { sticker: 'OSS', title: 'First Open-Source PR', desc: 'A real (merged) pull request to a small open-source project. Tiny in code, huge in signal.', tags: ['oss', 'git', 'pr'] }
        ],
        roadmapHeading: 'Four stages across Class 11 — school-aware.',
        roadmapLede: 'Class 11 is loaded. This path is designed to fit 1 to 2 hours per week and still produce a serious portfolio by month 9.',
        roadmap: [
            { label: 'Term 1 · Fix the base', title: 'Python + Pandas solidly', body: 'Deep Python OOP and Pandas — mirrors the CBSE IP and CS syllabus. School tests become easy, and a real foundation goes in.', tags: ['python', 'pandas', 'oop'] },
            { label: 'Term 1 · DSA start', title: 'Striver/Love Babbar sheet', body: 'We begin DSA in parallel, in whichever language the student is most comfortable. 3–5 problems a week becomes a habit.', tags: ['striver', 'dsa', 'cf'] },
            { label: 'Term 2 · MERN + AI', title: 'Portfolio build', body: 'MERN SaaS starter built end-to-end. Deployed. In parallel, a proper sklearn project with writeup.', tags: ['mern', 'sklearn', 'deploy'] },
            { label: 'Summer · CP + OSS', title: 'Pressure test the skills', body: 'Codeforces rated rounds. A first merged open-source PR. Entering small hackathons. We shift from teacher-led to coach mode.', tags: ['codeforces', 'oss', 'hackathon'] }
        ],
        compareHeading: 'Age 15 vs 16 vs 17 — the final stretch.',
        compareLede: 'Each year now matters for college. This is the honest difference year over year.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Age 15', link: '/coding-for-15-year-olds' },
                { label: 'Age 16 (this page)' },
                { label: 'Age 17', link: '/coding-for-17-year-olds' }
            ],
            rows: [
                { label: 'School', values: ['Class 10 board', 'Class 11 stream', 'Class 12 board + apps'] },
                { label: 'Portfolio', values: ['Starter projects', 'Serious MERN + AI', 'College-ready portfolio'] },
                { label: 'DSA', values: ['LeetCode easy', 'Striver/Babbar sheet', 'Full sheet + contests'] },
                { label: 'College prep', values: ['Identity building', 'Portfolio start', 'Applications'] },
                { label: 'Hackathons', values: ['Rare', 'First one', 'Regular'] },
                { label: 'Open source', values: ['Not yet', 'First PR', 'Active contributor'] }
            ]
        },
        reviewsHeading: 'Class 11 parents and students.',
        reviewsLede: 'Recent reviews from families of 16-year-olds in the CS stream.',
        reviews: [
            { initial: 'F', name: 'Farhan K.', meta: 'Student · Delhi · 1-on-1', body: 'I\'m 16, in Class 11 CS stream. The teacher here teaches the chapter a week before school does, so every test feels easy. Alongside, I\'m solving the Striver sheet and have done 40 problems so far. MERN is in progress. Fees are honestly justified.' },
            { initial: 'X', name: 'Xena M.', meta: 'Parent · Bengaluru · Group', body: 'Small group of Class 11 students. They help each other. My daughter\'s confidence with SQL and Pandas went from zero to really solid in one term. The IP school paper felt easy to her, which was the goal.' },
            { initial: 'E', name: 'Esha P.', meta: 'Parent · Hyderabad · 1-on-1', body: 'My son was considering CS but wasn\'t sure. After 3 months of real MERN work, he is sure. Sometimes the best outcome of Class 11 is clarity, and we got that.' }
        ],
        faqs: [
            { q: 'Does this match CBSE Class 11 CS?', a: 'Yes, directly. The CBSE Class 11 CS syllabus (Python, boolean logic, number systems, emerging trends) is covered weekly. We keep the NCERT book open during class.' },
            { q: 'What about CBSE Class 11 Informatics Practices?', a: 'Covered fully. Pandas, matplotlib, SQL, HTML basics. Our IP track is widely used by CBSE IP students who find the Pandas sections hard.' },
            { q: 'And ICSE Class 11?', a: 'ICSE Class 11 CS is Java-heavy. We have a dedicated Java track that matches the ISC syllabus — OOP, arrays, strings, functions, recursion.' },
            { q: 'Is DSA in C++ or Python at 16?', a: 'Student\'s choice. C++ is the gold standard for competitive programming and JEE Advanced CS. Python is fine for portfolio-focused students. Both work for interviews.' },
            { q: 'How much time does this take weekly?', a: '2 to 3 hours total — two 1-hour sessions plus about an hour of homework. Designed to fit alongside JEE / NEET / CUET prep without stress.' },
            { q: 'Do you prepare for the CBSE IP practical exam?', a: 'Yes. Sample datasets, likely question patterns, viva rehearsal. Most of our IP students clear the practical comfortably.' },
            { q: 'Can a Class 11 student really join hackathons?', a: 'Yes — smaller student hackathons are perfect. We guide project scoping, team etiquette and submission. A first-place finish is rare; a first project finished is common.' },
            { q: 'Is there 1-on-1 only or is group also serious?', a: 'Both are serious. Our group batches at 16 are placed by level, not just age — so a strong student is with other strong students.' }
        ],
        relatedChips: [
            { href: '/coding-for-15-year-olds', small: 'Younger', label: 'Coding for 15 Year Olds' },
            { href: '/coding-for-17-year-olds', small: 'Older', label: 'Coding for 17 Year Olds' },
            { href: '/coding-for-class-11', small: 'Grade', label: 'Coding for Class 11' },
            { href: '/coding-for-class-12', small: 'Grade', label: 'Coding for Class 12' },
            { href: '/computer-science-class-11-cbse', small: 'Board', label: 'CS Class 11 CBSE' },
            { href: '/computer-science-class-11-icse', small: 'Board', label: 'CS Class 11 ICSE' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/java-programming-for-kids-teens', small: 'Course', label: 'Java for Teens' }
        ],
        cityChips: CITY_CHIPS_DEFAULT
    },

    /* ---------- AGE 17 ---------- */
    {
        slug: 'coding-for-17-year-olds',
        pageTitle: 'Coding for 17 Year Olds — Class 12 CS, College Prep, Portfolio & DSA',
        metaDescription: 'Coding for 17 year olds in Class 12. CBSE/ICSE CS and IP, college-ready portfolio, DSA, competitive programming and open-source. 1 hour live classes, 1:1 or group.',
        keywords: 'coding for 17 year olds, coding for class 12, cbse cs class 12, icse cs class 12, class 12 informatics practices, college ready portfolio, dsa for class 12, competitive programming class 12, python for class 12, java for class 12, college prep coding, gap year coding, cs college application',
        ogTitle: 'Coding for 17 Year Olds — Class 12 CS + College Portfolio',
        ogDescription: 'Final Class 12 year coding programme. CBSE/ICSE CS alignment + college-ready portfolio + DSA.',
        audienceType: '17 year olds (Class 12)',
        courseCode: 'AGE-17',
        courseName: 'Coding for 17 Year Olds',
        courseDesc: 'Live online coding for 17 year olds balancing Class 12 boards with a college-ready portfolio, DSA and competitive programming.',
        breadcrumbName: 'Coding for 17 Year Olds',
        accent: '#f59e0b', accent2: '#ef4444', bodyClass: 'age-17-page',
        badge: '17', badgeLabel: 'Age cohort',
        eyebrow: 'For parents of 17 year olds · Class 12 / pre-college',
        h1Before: 'Coding for ', h1Highlight: '17 Year Olds', h1After: ' — board, portfolio, college-ready.',
        heroSub: 'Class 12 is the last structured year before college. Our programme keeps CBSE/ICSE CS and IP marks safe, finishes a serious portfolio piece, and sharpens DSA or CP for college CS entry. 1 hour live, 1:1 or small group.',
        trust: [
            { big: '2,900+', sub: 'Class 12 students this year' },
            { big: '4.9 / 5', sub: 'Parent rating · 340+ reviews' },
            { big: '1 hour', sub: 'Per live class, 1:1 or group' },
            { big: '91%', sub: 'Finish with CS marks 90+' }
        ],
        chips: ['Board-safe', 'College-ready', 'Portfolio done'],
        coursesHeading: 'Courses that help win the Class 12 year.',
        coursesLede: 'At 17, the right courses protect board marks and build a clean portfolio piece for college. These are the exact tracks that do both.',
        courses: [TEEN_COURSES.cbseCS, TEEN_COURSES.cbseIP, TEEN_COURSES.fullstackTeen, TEEN_COURSES.aimlTeen, TEEN_COURSES.dsaTeen, TEEN_COURSES.cppTeen, TEEN_COURSES.compTeen, TEEN_COURSES.reactTeen],
        skipHeading: 'Already has a GitHub with serious projects?',
        skipBody: 'If your 17 year old already has a real portfolio, <strong>skip content review</strong> and move straight into <a href="/courses/competitive-programming-masterclass" style="color:inherit;text-decoration:underline;">Competitive Programming</a>, <a href="/courses/ai-ml-masterclass-complete-college" style="color:inherit;text-decoration:underline;">college-level AI/ML</a> or <a href="/courses/full-stack-web-development-masterclass-college" style="color:inherit;text-decoration:underline;">college-level Full Stack</a>. Demo teacher will confirm readiness.',
        whyHeading: 'Seventeen is the year to land cleanly — not cram.',
        whyLede: 'Class 12 students are often told to pause everything for boards. The result is zero portfolio and average marks. A calm, consistent 1 to 2 hours per week of real coding delivers better outcomes on both fronts.',
        whys: [
            { tag: 'Board protection', title: 'CBSE/ICSE CS done on time', body: 'We align sessions to the school\'s syllabus calendar. Chapters are covered a week ahead of school. Sample papers in November, practical prep in December, written prep in January.' },
            { tag: 'College signal', title: 'One serious portfolio piece', body: 'Admissions officers (especially abroad) remember the one serious project. We help finish one clean, deployed portfolio piece with a writeup — not ten half-finished demos.' },
            { tag: 'DSA for later', title: 'First-year college head start', body: 'A Class 12 student with 100 DSA problems solved walks into first-year engineering already senior. The gap is felt from day one of BTech / BCA / BSc CS.' }
        ],
        projectsHeading: 'Six projects that make a Class 12 portfolio real.',
        projectsLede: 'Not many. Just enough. Each one is designed to land at a specific point in the Class 12 calendar.',
        projects: [
            { sticker: 'Portfolio', title: 'Personal Site v2', desc: 'A clean, fast portfolio site that lists the 3 best projects, a short bio, and contact. First thing an admissions officer Googles.', tags: ['react', 'seo', 'deploy'] },
            { sticker: 'AI', title: 'Real-world ML Project', desc: 'Serious dataset, Jupyter notebook, proper evaluation, written blog post. The one they talk about in interviews.', tags: ['jupyter', 'ml', 'writeup'] },
            { sticker: 'Board', title: 'CBSE CS Project', desc: 'School-required CS project done with real code quality. Report, viva, full marks.', tags: ['school', 'viva', 'report'] },
            { sticker: 'DSA', title: '100 Problems Solved', desc: 'Striver A2Z or Love Babbar sheet. Measurable. Confidence built problem by problem.', tags: ['striver', 'leetcode', 'dp'] },
            { sticker: 'CP', title: 'Codeforces 1200+ rating', desc: 'For students inclined towards competitive CS. Weekly contests, virtual rounds, upsolving.', tags: ['cf', 'contest', 'upsolve'] },
            { sticker: 'OSS', title: 'Sustained OSS contribution', desc: 'Three merged PRs to a real project through the year. Not vanity commits — real contributions.', tags: ['oss', 'pr', 'review'] }
        ],
        roadmapHeading: 'Four quarters across Class 12 — exam-aware.',
        roadmapLede: 'Each quarter matches the school calendar. We pause for pre-boards and boards. Everything else continues steadily.',
        roadmap: [
            { label: 'Q1 · July–Sept · Board + DSA', title: 'Stay ahead of school + 30 DSA problems', body: 'CBSE/ICSE CS chapters covered one week ahead of school. DSA foundation: arrays, strings, hashing, recursion. Ends with school mid-terms.', tags: ['board', 'dsa', 'arrays'] },
            { label: 'Q2 · Oct–Nov · Portfolio', title: 'Finish the college portfolio piece', body: 'The one serious ML or full-stack project shipped and deployed. Writeup published. LinkedIn updated. This finishes before pre-boards start.', tags: ['ship', 'deploy', 'writeup'] },
            { label: 'Q3 · Dec–Mar · Boards', title: 'Support mode only', body: 'No new content. We are on WhatsApp for any school CS doubt. Focus shifts fully to boards, CUET, JEE or whichever entrance.', tags: ['board focus'] },
            { label: 'Q4 · Apr–Jun · College head start', title: 'Pre-college sprint', body: 'After boards, a focused 2-month sprint on first-year college topics — OS basics, DBMS basics, more DSA. Walks into BTech confident.', tags: ['os', 'dbms', 'btech'] }
        ],
        compareHeading: 'Age 16 vs 17 vs College — the final rungs.',
        compareLede: 'This table shows what changes in the last two school years and the first college year.',
        compare: {
            highlight: 1,
            columns: [
                { label: 'Age 16', link: '/coding-for-16-year-olds' },
                { label: 'Age 17 (this page)' },
                { label: 'College', link: '/courses/coding/college' }
            ],
            rows: [
                { label: 'School load', values: ['Class 11 stream', 'Class 12 + boards', 'Semester system'] },
                { label: 'Main goal', values: ['Build portfolio', 'Ship one great project', 'Internships + fundamentals'] },
                { label: 'DSA', values: ['50–70 problems', '100+ problems', '200+ + contests'] },
                { label: 'CP', values: ['First rated', '1200+ target', '1400+ realistic'] },
                { label: 'Open source', values: ['First PR', 'Sustained PRs', 'Maintainer track'] },
                { label: 'Lifestyle', values: ['School heavy', 'Boards heavy', 'Semester + project'] }
            ]
        },
        reviewsHeading: 'Class 12 parents — and some students.',
        reviewsLede: 'Recent reviews from 17-year-olds and their parents. Unedited, privacy-shortened.',
        reviews: [
            { initial: 'W', name: 'Waqar H.', meta: 'Student · Delhi · 1-on-1', body: 'I started in Class 11 and the programme adapted into Class 12 naturally. I finished my CBSE IP syllabus in 4 months, scored 97, and alongside built a Pandas + sklearn project I used in my college SOP. It worked.' },
            { initial: 'N', name: 'Neelam C.', meta: 'Parent · Kolkata · 1-on-1', body: 'We took a break during boards as planned. After boards, they did 2 months of BTech foundation. My son said his first college lectures felt like revision, which was the goal.' },
            { initial: 'Z', name: 'Zoya K.', meta: 'Parent · Mumbai · Group', body: 'Small batch of 4 Class 12 students, all CS stream. The class felt serious and supportive. My daughter finished Class 12 with 92 in CS and a deployed full-stack app. Fair trade.' }
        ],
        faqs: [
            { q: 'Is Class 12 too risky to take a coding class?', a: 'Only if it is the wrong coding class. Ours is designed for Class 12 students: fewer, deeper sessions, scheduled around school exam calendars, with a full pause during pre-boards and boards.' },
            { q: 'Will this help with the CBSE/ICSE CS paper?', a: 'Directly. Our teachers follow the NCERT / ISC CS syllabus week by week. Most students finish Class 12 with 90+ in CS / IP.' },
            { q: 'What about JEE / CUET prep conflict?', a: 'Our schedule is flexible. Students prepping for JEE Advanced typically do 1 class a week; those with lighter entrance load do 2. Designed to supplement, not compete.' },
            { q: 'Can my Class 12 child really finish a portfolio project?', a: 'Yes — one serious project, not ten. We start it in Term 1, ship by Term 2, before pre-boards begin. Parents are often surprised how doable this is with a clear plan.' },
            { q: 'Is 100 DSA problems in Class 12 realistic?', a: 'Yes, at 3 problems per week with guidance. By the end of Class 12, your child has both the habit and the foundation. They will thank you in first year BTech.' },
            { q: 'Do you help with college applications?', a: 'We don\'t write essays. We do help frame the technical portfolio — GitHub clean-up, project writeups, choosing which projects to feature. That part often moves the needle.' },
            { q: 'What about a gap year student?', a: 'Welcome. Gap-year students often make the fastest progress in our programme because they can do 3–4 sessions a week. We design a 6–9 month intensive track.' },
            { q: 'Is there a free demo?', a: 'Yes. One full 1 hour live session, no card. If you enrol and it is not working in the first 2 weeks, we refund the unused portion.' }
        ],
        relatedChips: [
            { href: '/coding-for-16-year-olds', small: 'Younger', label: 'Coding for 16 Year Olds' },
            { href: '/coding-for-class-12', small: 'Grade', label: 'Coding for Class 12' },
            { href: '/computer-science-class-12-cbse', small: 'Board', label: 'CS Class 12 CBSE' },
            { href: '/computer-science-class-12-icse', small: 'Board', label: 'CS Class 12 ICSE' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'CBSE Coding' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/java-programming-for-kids-teens', small: 'Course', label: 'Java for Teens' },
            { href: '/best-coding-classes-online', small: 'Compare', label: 'Best Online Classes' }
        ],
        cityChips: CITY_CHIPS_DEFAULT
    }

];

/* ============================================================
   GRADE-WISE PAGES (9 pages)
   Classes 4, 5, 6, 7, 8, 9, 10, 11, 12
   ============================================================ */

const GRADE_PAGES = require('./age-grade-configs/grade-pages');

/* ============================================================
   BOARD-SPECIFIC PAGES (8 pages)
   ============================================================ */

const BOARD_PAGES = require('./age-grade-configs/board-pages');

/* ============================================================
   PYTHON PAGES (18 pages — ages, grades, beginners, projects)
   ============================================================ */

const PYTHON_PAGES = require('./age-grade-configs/python-pages');

module.exports = [...AGE_PAGES, ...GRADE_PAGES, ...BOARD_PAGES, ...PYTHON_PAGES];
