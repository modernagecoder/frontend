/*
 * board-pages.js — unique configs for 8 board-specific pages.
 * CBSE, ICSE, IGCSE, Computer Applications ICSE Class 10,
 * CS Class 11 CBSE, CS Class 12 CBSE, CS Class 11 ICSE, CS Class 12 ICSE.
 */

const IMG = slug => `/images/${slug}`;

const TEEN = {
    pythonTeen: { href: '/courses/python-complete-masterclass-teens', pill: 'Python', img: IMG('python-teens.webp'), alt: 'Python masterclass for teens', title: 'Python Masterclass', desc: 'Zero to confident — functions, OOP, files, real mini-apps.', tags: ['Python', 'OOP'] },
    javaTeen: { href: '/courses/java-programming-masterclass-for-teens', pill: 'Java', img: IMG('java-teens.webp'), alt: 'Java for teens', title: 'Java Programming', desc: 'BlueJ-friendly OOP — strong for ICSE/CBSE CS.', tags: ['Java', 'BlueJ'] },
    fullstackTeen: { href: '/courses/full-stack-web-development-teens-masterclass', pill: 'Full Stack', img: IMG('web-dev-teens.webp'), alt: 'Full stack for teens', title: 'Full Stack Web Dev', desc: 'HTML, CSS, JS, Node — ship a real deployed web app.', tags: ['Web', 'Node'] },
    reactTeen: { href: '/courses/react-for-teens-complete-masterclass', pill: 'React', img: IMG('react-teens.webp'), alt: 'React for teens', title: 'React.js Masterclass', desc: 'Component-based web apps with the modern product stack.', tags: ['React'] },
    aimlTeen: { href: '/courses/ai-ml-masterclass-teens', pill: 'AI/ML', img: IMG('ai-ml-teens.webp'), alt: 'AI ML for teens', title: 'AI & ML Masterclass', desc: 'Pandas, sklearn, neural nets — real AI projects, real data.', tags: ['AI'] },
    cppTeen: { href: '/courses/cpp-programming-masterclass-for-teens', pill: 'C++', img: IMG('cpp-teens.webp'), alt: 'C++ for teens', title: 'C++ Programming', desc: 'STL, pointers, OOP — the language for CP and JEE Advanced.', tags: ['C++'] },
    dsaTeen: { href: '/courses/problem-solving-dsa-masterclass-teens', pill: 'DSA', img: IMG('data-structure-algorithms.webp'), alt: 'DSA for teens', title: 'DSA & Problem Solving', desc: 'Arrays, strings, trees, DP — the CS interview foundation.', tags: ['DSA'] },
    appTeen: { href: '/courses/complete-app-development-masterclass-for-teens', pill: 'App Dev', img: IMG('app-dev-teens.webp'), alt: 'App development for teens', title: 'App Development', desc: 'Flutter + Firebase — build and publish real mobile apps.', tags: ['Flutter'] },
    cbseCS: { href: '/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course', pill: 'Board', img: IMG('python-teens.webp'), alt: 'CBSE ICSE CS Class 11 12 course', title: 'CBSE/ICSE CS 11–12', desc: 'Board-aligned Python + Java — full syllabus, sample papers.', tags: ['Board'] },
    cbseIP: { href: '/courses/cbse-informatics-practices-ip-class-11-12-python-pandas-sql-complete-course', pill: 'IP', img: IMG('ip-cs-class-11-12.webp'), alt: 'CBSE IP Class 11 12 course', title: 'CBSE IP 11–12', desc: 'Python, Pandas, SQL — exact tools IP tests.', tags: ['IP'] },
    mysqlTeen: { href: '/courses/mysql-mastery-for-teens', pill: 'SQL', img: IMG('mysql-teens.webp'), alt: 'MySQL for teens', title: 'MySQL Mastery', desc: 'Joins, subqueries — aligned to CBSE IP / CS projects.', tags: ['SQL'] },
    compTeen: { href: '/courses/competitive-programming-masterclass', pill: 'CP', img: IMG('data-structure-algorithms.webp'), alt: 'Competitive programming', title: 'Competitive Programming', desc: 'Codeforces rating climb — algorithms that win contests.', tags: ['CP'] }
};

const KIDS = {
    pythonKids: { href: '/courses/python-ai-kids-masterclass', pill: 'Python', img: IMG('python-kids.webp'), alt: 'Python for kids', title: 'Python for Kids', desc: 'Turtle graphics, games, maths quiz — real Python, gently.', tags: ['Python'] },
    scratch: { href: '/courses/scratch-programming-complete-course', pill: 'Block', img: IMG('scratch-kids.webp'), alt: 'Scratch for kids', title: 'Scratch Programming', desc: 'Block coding foundation — events, loops, variables.', tags: ['Scratch'] },
    htmlKids: { href: '/courses/kids-ai-web-development-course', pill: 'Web', img: IMG('html-css-kids.webp'), alt: 'HTML CSS for kids', title: 'Build Your First Website', desc: 'HTML + CSS basics — hosted personal page.', tags: ['HTML'] },
    aiKids: { href: '/courses/cbse-computational-thinking-and-ai-course-for-kids-classes-3-to-8', pill: 'AI', img: IMG('ct-ai-kids.webp'), alt: 'computational thinking and AI for kids', title: 'Computational Thinking & AI', desc: 'Teachable Machine + simple classifiers — hands-on AI.', tags: ['AI'] },
    gameKids: { href: '/courses/game-development-masterclass-for-kids', pill: 'Game Dev', img: IMG('game-dev-kids.webp'), alt: 'Game dev for kids', title: 'Game Development', desc: 'Playable games with levels and score.', tags: ['Games'] },
    appKids: { href: '/courses/block-coding-app-development-masterclass', pill: 'App', img: IMG('app-dev-kids.webp'), alt: 'Block app dev', title: 'Block Coding App Dev', desc: 'Design and build mobile-app style screens using blocks.', tags: ['App'] }
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

    /* ---------- CBSE STUDENTS ---------- */
    {
        slug: 'coding-for-cbse-students',
        pageTitle: 'Coding for CBSE Students — Python, CS & Informatics Practices from Class 6 to 12',
        metaDescription: 'Coding classes built for CBSE students. Python-first curriculum aligned to CBSE Code 166, 402, CS and IP syllabus from Class 6 to 12. 1 hour live classes, 1:1 or group.',
        keywords: 'coding for cbse students, cbse coding classes, cbse python, cbse class 9 cs, cbse class 10 ca, cbse class 11 cs, cbse class 12 cs, cbse informatics practices, cbse code 402, cbse code 166, cbse it 402, cbse board coding, best cbse coding institute, cbse class 11 ip, cbse class 12 ip',
        audienceType: 'CBSE students (Class 6-12)',
        courseCode: 'CBSE',
        courseName: 'Coding for CBSE Students',
        courseDesc: 'Live online coding aligned to CBSE Code 166, 402, CS and IP syllabus from Class 6 to 12. 1 hour live sessions, 1:1 or small group.',
        breadcrumbName: 'Coding for CBSE Students',
        accent: '#ef4444', accent2: '#3b82f6', bodyClass: 'board-cbse-page',
        badge: 'CBSE', badgeLabel: 'Board · NCERT',
        badgeFontSize: 'clamp(40px, 6vw, 64px)',
        eyebrow: 'For CBSE parents · Class 6 through 12',
        h1Before: 'Coding for ', h1Highlight: 'CBSE Students', h1After: ' — Python-first from Class 6 onwards.',
        heroSub: 'CBSE has been quietly Python-first for years. Our 1 hour live classes follow the exact NCERT trajectory — Code 166 at Class 6, Code 402 at Class 9/10, CS and IP at Class 11/12 — and add the real projects the school cannot fit in.',
        trust: [
            { big: '8,600+', sub: 'CBSE students across India' },
            { big: '4.9 / 5', sub: 'Parent rating · 910+ reviews' },
            { big: '1 hour', sub: 'Live class, 1:1 or small group' },
            { big: 'NCERT', sub: 'Textbook-aligned curriculum' }
        ],
        chips: ['Python-first', 'Code 402 ready', 'CS + IP covered'],
        coursesHeading: 'Courses across the CBSE journey — Class 6 to 12.',
        coursesLede: 'The full CBSE-aligned curriculum in one place. Start where your child is — our teachers already know every NCERT chapter your school will cover.',
        courses: [KIDS.pythonKids, KIDS.htmlKids, KIDS.aiKids, TEEN.pythonTeen, TEEN.fullstackTeen, TEEN.aimlTeen, TEEN.cbseCS, TEEN.cbseIP],
        skipHeading: 'Already comfortable with CBSE Class 9 Python?',
        skipBody: 'If your CBSE student already knows Python from Class 9, <strong>skip ahead</strong> into <a href="/courses/mern-stack-development-masterclass-college" style="color:inherit;text-decoration:underline;">MERN</a>, <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI/ML</a>, <a href="/courses/problem-solving-dsa-masterclass-teens" style="color:inherit;text-decoration:underline;">DSA</a>, or CBSE-specific <a href="/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course" style="color:inherit;text-decoration:underline;">CS Class 11–12</a>. Free demo places them.',
        whyHeading: 'CBSE rewards depth, not just coverage.',
        whyLede: 'The NCERT Computer Science and Informatics Practices papers increasingly test applied understanding — write code, not memorise output. A student who actually builds with Python through Class 9 to 12 finds the paper easy.',
        whys: [
            { tag: 'Trajectory', title: 'Python spans six CBSE years', body: 'Code 166 (Class 6–8), Code 402 (9–10), CS / IP (11–12) — all Python-first. A CBSE student who starts with us in Class 6 has 6 years of consistent Python by Class 12.' },
            { tag: 'Board rewards', title: 'Practical exam expects real code', body: 'CBSE CS and IP practicals now expect working code and explanations. Students who have built real projects find the practical viva easy.' },
            { tag: 'Beyond marks', title: 'CS stream clarity by Class 11', body: 'Many CBSE students make the CS stream choice blindly. A student who has tried real coding by Class 10 knows whether CS actually fits them.' }
        ],
        projectsHeading: 'Six projects across the CBSE years.',
        projectsLede: 'A project shelf that grows with the student — one anchor per stage of the CBSE journey, all Python-first.',
        projects: [
            { sticker: 'Class 6', title: 'Python Quiz App', desc: 'Matches Code 166 — Python basics with functions and a score counter.', tags: ['code 166'] },
            { sticker: 'Class 8', title: 'HTML + CSS Site', desc: 'A deployed site aligned with the Class 8 web unit.', tags: ['class 8'] },
            { sticker: 'Class 10', title: 'Code 402 AI Project', desc: 'AI unit of Code 402 done properly — not just theory answers.', tags: ['402'] },
            { sticker: 'Class 11', title: 'Pandas Case Study', desc: 'IP-aligned dataset analysis — matches the Class 11 IP practical pattern.', tags: ['ip'] },
            { sticker: 'Class 12', title: 'Class 12 CS Project', desc: 'Board-required project with report, viva prep, full marks target.', tags: ['cs 12'] },
            { sticker: 'CBSE+', title: 'MERN or ML Portfolio', desc: 'One serious project beyond the syllabus — the one that stands in a college SOP.', tags: ['portfolio'] }
        ],
        roadmapHeading: 'Four stages spanning Class 6 to 12.',
        roadmapLede: 'We pick up your child at whichever year you join, and build forward using the NCERT trajectory.',
        roadmap: [
            { label: 'Class 6–8 · Code 166', title: 'Python + AI intro', body: 'Every Code 166 chapter covered a week ahead of school. Real projects on top — deployed sites, first AI classifier.', tags: ['code 166', 'python'] },
            { label: 'Class 9–10 · Code 402', title: 'IT / Web / AI units', body: 'All three Code 402 specialisations covered. Practical exam prep. Project report help.', tags: ['402', 'practical'] },
            { label: 'Class 11 · CS + IP', title: 'Two NCERT papers', body: 'CS Python + IP Pandas/SQL. Both covered in-depth. Sample papers solved weekly.', tags: ['cs', 'ip'] },
            { label: 'Class 12 · Board + portfolio', title: 'Finish board + ship one', body: 'Full board alignment + one serious portfolio project. College-ready exit.', tags: ['board', 'portfolio'] }
        ],
        compareHeading: 'CBSE vs ICSE vs IGCSE — where they really differ for coding.',
        compareLede: 'If you are choosing between boards or comparing what each expects, here is the honest breakdown.',
        compare: {
            highlight: 0,
            columns: [
                { label: 'CBSE (this page)' },
                { label: 'ICSE', link: '/coding-for-icse-students' },
                { label: 'IGCSE', link: '/coding-for-igcse-students' }
            ],
            rows: [
                { label: 'Main language', values: ['Python', 'Java', 'Python + theory'] },
                { label: 'Formal CS start', values: ['Class 9 (Code 402)', 'Class 7 CA', 'Class 9 IGCSE CS'] },
                { label: 'Class 11/12 paper', values: ['CS + IP (Python)', 'CS (Java)', 'CS + ICT'] },
                { label: 'Practical weight', values: ['High', 'High (BlueJ)', 'Medium'] },
                { label: 'Tool for projects', values: ['Python IDLE / Thonny', 'BlueJ', 'Python IDLE / Thonny'] },
                { label: 'Best first language', values: ['Python', 'Java (or Python)', 'Python'] }
            ]
        },
        reviewsHeading: 'CBSE parents and students.',
        reviewsLede: 'Three recent reviews from CBSE families across classes.',
        reviews: [
            { initial: 'R', name: 'Radhika S.', meta: 'Parent · Delhi · Class 10 student · 1-on-1', body: 'The teacher keeps the Code 402 book open every class. Before pre-boards he had the complete unit wrapped. Not just answers — real understanding. His board paper was easy.' },
            { initial: 'V', name: 'Vinay T.', meta: 'Parent · Hyderabad · Class 11 student · Group', body: 'My son picked IP in Class 11 and Pandas was breaking him. Small group class fixed it in 4 weeks. His school half-yearly IP marks doubled.' },
            { initial: 'S', name: 'Sonia P.', meta: 'Parent · Bengaluru · Class 8 student · 1-on-1', body: 'We started at Class 8 which is early but CBSE pushes Python from Code 166. My daughter\'s school teacher now assumes she knows ahead — and she does.' }
        ],
        faqs: [
            { q: 'What exactly does CBSE expect in Class 11 CS?', a: 'Python programming, boolean logic, number systems, computer networks, emerging trends. NCERT CS textbook. Our classes cover all of it plus real projects for the practical.' },
            { q: 'And CBSE Class 11 Informatics Practices?', a: 'Python fundamentals + Pandas + matplotlib + MySQL + society, law and ethics. We have a dedicated IP track because Pandas is where most students struggle.' },
            { q: 'Does this align with CBSE Class 9 Code 402?', a: 'Yes. Code 402 IT has three specialisations (IT Skills, Web, AI). We cover each, plus help with the mandated practical project.' },
            { q: 'CBSE Class 10 CA or IT 402?', a: 'Both. IT 402 at Class 10 is elective in many schools. Our teachers know both papers and align weekly.' },
            { q: 'How is the CBSE practical exam marked?', a: 'Typically around 30 marks — code writing, viva and lab-file. We prepare for all three, especially viva which students neglect.' },
            { q: 'CBSE project report help?', a: 'Yes. We help pick a topic, build it properly, write the report in the CBSE format, and rehearse likely viva questions.' },
            { q: 'Can your classes replace school coaching?', a: 'They complement, not replace. We go deeper and wider. School stays important for exam discipline — but our classes give the real skill.' },
            { q: 'Free demo for CBSE?', a: 'Yes. One full 1 hour live class with a CBSE-aware teacher. No card. Refund clause 2 weeks.' }
        ],
        relatedChips: [
            { href: '/coding-for-icse-students', small: 'Compare', label: 'Coding for ICSE' },
            { href: '/coding-for-igcse-students', small: 'Compare', label: 'Coding for IGCSE' },
            { href: '/computer-science-class-11-cbse', small: 'Paper', label: 'CS Class 11 CBSE' },
            { href: '/computer-science-class-12-cbse', small: 'Paper', label: 'CS Class 12 CBSE' },
            { href: '/coding-for-class-9', small: 'Grade', label: 'Coding for Class 9' },
            { href: '/coding-for-class-10', small: 'Grade', label: 'Coding for Class 10' },
            { href: '/coding-for-class-11', small: 'Grade', label: 'Coding for Class 11' },
            { href: '/coding-for-class-12', small: 'Grade', label: 'Coding for Class 12' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- ICSE STUDENTS ---------- */
    {
        slug: 'coding-for-icse-students',
        pageTitle: 'Coding for ICSE Students — Java BlueJ, Computer Applications & ISC CS',
        metaDescription: 'ICSE coding classes. Java BlueJ, Computer Applications Class 7–10 and ISC CS Class 11–12 — aligned to the exact CISCE syllabus. 1 hour live classes, 1:1 or group.',
        keywords: 'coding for icse students, icse java, icse computer applications, isc computer science, icse bluej, icse class 10 ca, icse class 9 ca, isc class 11 cs, isc class 12 cs, icse coding institute, icse class 7 computer, icse class 8 computer, best icse coding online',
        audienceType: 'ICSE / ISC students (Class 7-12)',
        courseCode: 'ICSE',
        courseName: 'Coding for ICSE Students',
        courseDesc: 'Live online coding aligned to ICSE Computer Applications and ISC Computer Science Java syllabus from Class 7 to 12.',
        breadcrumbName: 'Coding for ICSE Students',
        accent: '#6366f1', accent2: '#14b8a6', bodyClass: 'board-icse-page',
        badge: 'ICSE', badgeLabel: 'Board · CISCE',
        badgeFontSize: 'clamp(40px, 6vw, 64px)',
        eyebrow: 'For ICSE/ISC parents · Class 7 through 12',
        h1Before: 'Coding for ', h1Highlight: 'ICSE Students', h1After: ' — Java done the way boards expect.',
        heroSub: 'ICSE and ISC are Java-heavy, BlueJ-centric, and strict about OOP style. Our 1 hour live classes know the CISCE syllabus by heart — from Class 7 Computer Applications through ISC Class 12 CS — and build real Java projects alongside board prep.',
        trust: [
            { big: '5,200+', sub: 'ICSE/ISC students with us' },
            { big: '4.9 / 5', sub: 'Parent rating · 580+ reviews' },
            { big: '1 hour', sub: 'Live class, 1:1 or group' },
            { big: 'CISCE', sub: 'Syllabus-aligned curriculum' }
        ],
        chips: ['Java / BlueJ', 'CA + ISC CS', 'OOP done right'],
        coursesHeading: 'ICSE-aligned courses — Class 7 onwards.',
        coursesLede: 'These are the courses our ICSE students take. Java is the spine, with Python and web as useful companions for anyone going into CS college.',
        courses: [TEEN.javaTeen, KIDS.htmlKids, KIDS.aiKids, TEEN.pythonTeen, TEEN.fullstackTeen, TEEN.aimlTeen, TEEN.dsaTeen, TEEN.appTeen],
        skipHeading: 'Already comfortable with BlueJ Java?',
        skipBody: 'If your ICSE student already handles Class 9 BlueJ Java well, <strong>skip review</strong> and go into <a href="/courses/problem-solving-dsa-masterclass-teens" style="color:inherit;text-decoration:underline;">DSA</a>, <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI/ML</a>, <a href="/courses/full-stack-web-development-teens-masterclass" style="color:inherit;text-decoration:underline;">Full Stack</a> or <a href="/courses/mern-stack-development-masterclass-college" style="color:inherit;text-decoration:underline;">MERN</a>. Free demo includes a level check.',
        whyHeading: 'ICSE rewards strict OOP style.',
        whyLede: 'ICSE Computer Applications and ISC CS papers are precise. They want specific syntax, specific comments, specific variable naming. A student who writes Java the ICSE way scores high; one who just "knows Java generally" often loses marks.',
        whys: [
            { tag: 'Syntax', title: 'ICSE Java has a style', body: 'Public access modifiers, block comments in a specific format, Scanner for input. Our teachers know the exact style the CISCE examiner expects.' },
            { tag: 'BlueJ', title: 'BlueJ is the expected tool', body: 'ICSE practicals are BlueJ-centric. We use BlueJ in classes — screenshots, expected output format, all aligned to the ICSE lab file.' },
            { tag: 'ISC deeper', title: 'ISC CS adds data structures', body: 'ISC Class 12 CS adds arrays, sorting, linked lists, recursion — still in Java. Our ISC track covers each of these with the exact exam pattern.' }
        ],
        projectsHeading: 'Six ICSE/ISC projects that match the exam.',
        projectsLede: 'Each project matches a paper pattern and builds one concept. These are the ones our ICSE students actually turn in.',
        projects: [
            { sticker: 'Class 9', title: 'Bank Account Java Class', desc: 'ICSE-style OOP — fields, constructors, methods. The canonical Class 9 example.', tags: ['oop'] },
            { sticker: 'Class 10', title: 'Pattern Printing', desc: 'Nested loops for patterns — the classic ICSE question type. Done cleanly.', tags: ['loops'] },
            { sticker: 'Class 10', title: 'String Manipulation', desc: 'Palindrome, frequency count — ICSE Class 10 favourite.', tags: ['strings'] },
            { sticker: 'ISC 11', title: 'Recursive Functions', desc: 'Factorial, Fibonacci, tower of Hanoi — the ISC 11 recursion set.', tags: ['recursion'] },
            { sticker: 'ISC 12', title: 'Linked List Class', desc: 'Singly linked list in Java with insert/delete/display — ISC 12 paper.', tags: ['linked list'] },
            { sticker: 'Beyond', title: 'Flutter or MERN Project', desc: 'One portfolio piece beyond the syllabus — what stands in a college SOP.', tags: ['portfolio'] }
        ],
        roadmapHeading: 'Four stages from Class 7 to ISC 12.',
        roadmapLede: 'We pick up your child at whichever year you join, aligned to the exact CISCE trajectory.',
        roadmap: [
            { label: 'Class 7–8 · CA intro', title: 'Java basics in BlueJ', body: 'Variables, types, simple I/O, conditional and looping constructs. All in BlueJ, with the ICSE syntax style taught from day one.', tags: ['bluej'] },
            { label: 'Class 9–10 · CA core', title: 'OOP, arrays, strings, classes', body: 'The heart of ICSE Computer Applications. Practical exam preparation. Lab-file rehearsal. Viva practice.', tags: ['oop', 'practical'] },
            { label: 'ISC 11 · CS paper', title: 'Arrays, sorting, recursion', body: 'Class 11 ISC CS. Binary numbers, boolean algebra (covered with patience), programming paradigms.', tags: ['recursion'] },
            { label: 'ISC 12 · CS paper + portfolio', title: 'Data structures + one real project', body: 'Linked lists, stacks, queues, BST. Plus one MERN/AI portfolio piece beyond the syllabus.', tags: ['dsa', 'portfolio'] }
        ],
        compareHeading: 'ICSE vs CBSE vs IGCSE — for coding.',
        compareLede: 'If you are weighing boards or comparing what each expects, this is the honest breakdown.',
        compare: {
            highlight: 0,
            columns: [
                { label: 'ICSE (this page)' },
                { label: 'CBSE', link: '/coding-for-cbse-students' },
                { label: 'IGCSE', link: '/coding-for-igcse-students' }
            ],
            rows: [
                { label: 'Main language', values: ['Java', 'Python', 'Python + theory'] },
                { label: 'Formal CS start', values: ['Class 7 CA', 'Class 9 Code 402', 'Class 9 IGCSE CS'] },
                { label: 'Class 11/12 paper', values: ['ISC CS (Java)', 'CS + IP (Python)', 'CS + ICT'] },
                { label: 'Tool', values: ['BlueJ', 'Thonny / IDLE', 'Thonny / Notepad++'] },
                { label: 'Practical style', values: ['Strict syntax', 'Applied code', 'Documented'] },
                { label: 'Paradigm', values: ['OOP-first', 'Procedural → OOP', 'Procedural'] }
            ]
        },
        reviewsHeading: 'ICSE parents and students.',
        reviewsLede: 'Three recent ICSE family reviews.',
        reviews: [
            { initial: 'K', name: 'Kavita M.', meta: 'Parent · Kolkata · Class 10 ICSE · 1-on-1', body: 'My daughter was at 72 in ICSE CA at Class 9. The teacher here aligned exactly to the CISCE question pattern — specific variable naming, specific comment format. She got 94 in Class 10 boards.' },
            { initial: 'A', name: 'Anand P.', meta: 'Parent · Mumbai · ISC 11 · Group', body: 'Small batch of ISC 11 students. Teacher is very particular about ICSE Java style. My son made mistakes initially. Now he writes Java the way ISC expects — clean, correct, commented.' },
            { initial: 'R', name: 'Roshni V.', meta: 'Parent · Delhi · Class 9 ICSE · 1-on-1', body: 'Started early because Class 9 ICSE CA is strict. Her school computer teacher now tells other parents to check us out. Also she enjoys it, which I didn\'t expect at 14.' }
        ],
        faqs: [
            { q: 'Is ICSE Class 10 Computer Applications Java-only?', a: 'Yes. ICSE Class 10 CA is entirely Java (BlueJ). No Python. Our dedicated <a href="/computer-applications-icse-class-10">ICSE CA Class 10 page</a> goes deep on the exact syllabus.' },
            { q: 'What about ISC Class 11 and 12?', a: 'ISC CS Class 11 covers Java + boolean algebra + binary systems. ISC Class 12 adds data structures (arrays, sorting, recursion, linked list). Both fully covered.' },
            { q: 'ICSE Class 7/8 computer — covered?', a: 'Yes. ICSE Class 7 onwards introduces Java gently via BlueJ. We cover CA basics well before Class 9 formal expectations.' },
            { q: 'Do you teach Python too for ICSE students?', a: 'Optional. Python is very useful for college and broader career signal — many ICSE students add a Python track alongside Java.' },
            { q: 'ISC project work?', a: 'Yes. We help with the ISC CS project — topic choice, clean code, report writing, viva rehearsal.' },
            { q: 'Practical exam prep?', a: 'ICSE/ISC practicals are strict. We run full mock labs with the exact viva pattern each student\'s board uses.' },
            { q: 'Can my ICSE student also learn web/AI?', a: 'Yes, in parallel. Once CA/ISC Java is solid, students add web or AI tracks. By Class 12 the profile is broad.' },
            { q: 'Free demo?', a: 'Yes. One full 1 hour live class with an ICSE-aware teacher. No card. Refund clause 2 weeks.' }
        ],
        relatedChips: [
            { href: '/coding-for-cbse-students', small: 'Compare', label: 'Coding for CBSE' },
            { href: '/coding-for-igcse-students', small: 'Compare', label: 'Coding for IGCSE' },
            { href: '/computer-applications-icse-class-10', small: 'Paper', label: 'ICSE CA Class 10' },
            { href: '/computer-science-class-11-icse', small: 'Paper', label: 'CS Class 11 ICSE' },
            { href: '/computer-science-class-12-icse', small: 'Paper', label: 'CS Class 12 ICSE' },
            { href: '/coding-for-class-9', small: 'Grade', label: 'Coding for Class 9' },
            { href: '/coding-for-class-10', small: 'Grade', label: 'Coding for Class 10' },
            { href: '/java-programming-for-kids-teens', small: 'Course', label: 'Java for Teens' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- IGCSE STUDENTS ---------- */
    {
        slug: 'coding-for-igcse-students',
        pageTitle: 'Coding for IGCSE Students — Cambridge CS 0478, 0984, ICT & Python',
        metaDescription: 'Cambridge IGCSE coding classes. CS 0478 / 0984, ICT 0417, Python programming, pseudocode, flowcharts — aligned to the IGCSE syllabus. 1 hour live classes.',
        keywords: 'coding for igcse students, igcse cs 0478, igcse cs 0984, igcse ict 0417, cambridge igcse computer science, igcse python, igcse pseudocode, igcse flowcharts, cambridge coding classes, igcse paper 1, igcse paper 2, igcse coursework, best igcse coding online',
        audienceType: 'IGCSE students',
        courseCode: 'IGCSE',
        courseName: 'Coding for IGCSE Students',
        courseDesc: 'Live online coding aligned to Cambridge IGCSE Computer Science (0478/0984) and ICT (0417) syllabus. Python, pseudocode, flowcharts.',
        breadcrumbName: 'Coding for IGCSE Students',
        accent: '#14b8a6', accent2: '#8b5cf6', bodyClass: 'board-igcse-page',
        badge: 'IGCSE', badgeLabel: 'Cambridge',
        badgeFontSize: 'clamp(36px, 5vw, 56px)',
        eyebrow: 'For IGCSE parents · Cambridge syllabus',
        h1Before: 'Coding for ', h1Highlight: 'IGCSE Students', h1After: ' — Cambridge CS, done properly.',
        heroSub: 'Cambridge IGCSE CS 0478 / 0984 is strict about theory and pseudocode. Our 1 hour live classes follow the Cambridge syllabus line by line — Paper 1 theory, Paper 2 practical problem-solving, plus real Python projects so it all sticks.',
        trust: [
            { big: '1,900+', sub: 'IGCSE students with us' },
            { big: '4.9 / 5', sub: 'Parent rating · 210+ reviews' },
            { big: '1 hour', sub: 'Live class, 1:1 or group' },
            { big: 'Cambridge', sub: 'Full syllabus alignment' }
        ],
        chips: ['CS 0478/0984', 'Pseudocode', 'Paper 2 ready'],
        coursesHeading: 'Courses for Cambridge IGCSE CS and ICT.',
        coursesLede: 'These are the courses our IGCSE students take. Python is the practical language; pseudocode and theory are taught in parallel to the Cambridge pattern.',
        courses: [TEEN.pythonTeen, TEEN.fullstackTeen, TEEN.aimlTeen, TEEN.dsaTeen, TEEN.appTeen, TEEN.reactTeen, KIDS.htmlKids, KIDS.aiKids],
        skipHeading: 'Already strong on Python basics?',
        skipBody: 'If your IGCSE student is already comfortable with Python, <strong>skip basics</strong> and go into Paper 2 problem-solving, <a href="/courses/problem-solving-dsa-masterclass-teens" style="color:inherit;text-decoration:underline;">DSA</a> or <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI/ML</a>. Free demo places them correctly.',
        whyHeading: 'IGCSE is Cambridge — not Indian — pattern.',
        whyLede: 'Cambridge tests structured understanding: pseudocode, flowcharts, trace tables, ethical implications. A student who can only code in Python but cannot pseudocode loses serious marks. We cover both.',
        whys: [
            { tag: 'Paper 1', title: 'Theory is real marks', body: 'Paper 1 is 50% of the grade and is pure theory — data representation, networks, security. We do not skip it. Most coaching classes do.' },
            { tag: 'Paper 2', title: 'Pseudocode matters', body: 'Paper 2 Section B requires pseudocode/flowchart. A student who writes Python fluently but cannot translate to Cambridge pseudocode loses easy marks.' },
            { tag: 'Ethics', title: 'Cambridge cares about impact', body: 'IGCSE CS has structured questions about ethical, environmental and legal issues around computing. We teach these properly — not as afterthought.' }
        ],
        projectsHeading: 'Six projects that make IGCSE stick.',
        projectsLede: 'Paper 2 preparation plus real Python projects that reinforce each theory topic.',
        projects: [
            { sticker: 'Paper 2', title: 'Pseudocode Library', desc: 'All 20 standard pseudocode patterns — linear search, bubble sort, count, validate. Memorised through practice.', tags: ['pseudocode'] },
            { sticker: 'Paper 2', title: 'Trace Table Mastery', desc: 'Every IGCSE trace-table pattern solved by hand. Drill until speed is instinct.', tags: ['trace'] },
            { sticker: 'Python', title: 'Input Validation App', desc: 'A Python app that validates user input — the exact pattern Cambridge asks.', tags: ['validation'] },
            { sticker: 'Data', title: 'Binary and Hex Converter', desc: 'Python program to convert between denary, binary and hex. Reinforces Paper 1 data representation.', tags: ['binary'] },
            { sticker: 'Project', title: 'Pre-release Material Prep', desc: 'Cambridge IGCSE often releases pre-release material before the exam. We prepare students on it specifically.', tags: ['pre-release'] },
            { sticker: 'Beyond', title: 'Real Deployed Web App', desc: 'One portfolio piece beyond syllabus — deployed Python Flask or full-stack site.', tags: ['portfolio'] }
        ],
        roadmapHeading: 'Four stages across IGCSE years.',
        roadmapLede: 'Typical IGCSE journey with us across two years (Year 10 and Year 11 in Cambridge structure).',
        roadmap: [
            { label: 'Year 10 · Foundations', title: 'Python basics + Paper 1 start', body: 'Data types, conditions, loops, functions in Python. Paper 1 topics begun — data representation, basic networks.', tags: ['python', 'paper 1'] },
            { label: 'Year 10 · Pseudocode', title: 'Cambridge pseudocode drills', body: 'All 20 standard patterns. Trace tables. Flowcharts. The exact Paper 2 toolkit.', tags: ['pseudocode', 'trace'] },
            { label: 'Year 11 · Paper 1 complete', title: 'Theory finished', body: 'Remaining Paper 1 topics — security, ethics, impact. Practice papers graded weekly.', tags: ['theory', 'ethics'] },
            { label: 'Year 11 · Paper 2 + beyond', title: 'Mock papers + portfolio', body: 'Full mock exam cycles. Pre-release material prep. Plus one real portfolio project beyond syllabus.', tags: ['mocks', 'portfolio'] }
        ],
        compareHeading: 'IGCSE vs CBSE vs ICSE — coding side.',
        compareLede: 'What each board really expects.',
        compare: {
            highlight: 0,
            columns: [
                { label: 'IGCSE (this page)' },
                { label: 'CBSE', link: '/coding-for-cbse-students' },
                { label: 'ICSE', link: '/coding-for-icse-students' }
            ],
            rows: [
                { label: 'Main language', values: ['Python', 'Python', 'Java'] },
                { label: 'Pseudocode weight', values: ['Heavy', 'Low', 'None'] },
                { label: 'Theory weight', values: ['~50%', '~30%', '~40%'] },
                { label: 'Ethics / impact', values: ['Structured topic', 'Some units', 'Minor'] },
                { label: 'Project work', values: ['Minimal / pre-release', 'Required', 'Required (lab)'] },
                { label: 'Tool', values: ['Any IDE', 'Thonny / IDLE', 'BlueJ'] }
            ]
        },
        reviewsHeading: 'IGCSE parents and students.',
        reviewsLede: 'Three recent reviews from IGCSE families.',
        reviews: [
            { initial: 'L', name: 'Laila H.', meta: 'Parent · Dubai · Year 11 IGCSE · 1-on-1', body: 'We moved from London and my son needed a tutor who knew the exact Cambridge pseudocode style. This team does. He got 8 (equivalent A*) in the mock; predicted 9.' },
            { initial: 'M', name: 'Mohit V.', meta: 'Parent · Bengaluru · IGCSE Year 10 · Group', body: 'Small IGCSE-only group. Teacher doesn\'t mix us with CBSE students — useful because Cambridge pseudocode is nothing like Python. Daughter\'s Paper 2 confidence is solid now.' },
            { initial: 'E', name: 'Eshaan K.', meta: 'Student · Singapore · Year 11 · 1-on-1', body: 'My IB school pushed us onto IGCSE in Year 11. I was behind. The teacher paced it — Paper 1 theory in 6 weeks, Paper 2 drills in 4. Felt rushed but I got there.' }
        ],
        faqs: [
            { q: 'Do you cover both CS 0478 and 0984?', a: 'Yes. 0478 is the older syllabus still used in many schools; 0984 is the newer variant. Both covered — teacher checks which the school follows.' },
            { q: 'What about IGCSE ICT 0417?', a: 'Yes. ICT 0417 includes practical skills (spreadsheets, databases, word processing) plus theory. Covered fully.' },
            { q: 'Is IGCSE CS harder than CBSE CS?', a: 'Different — not harder overall. IGCSE has more theory breadth and strict pseudocode; CBSE has more programming depth. We cover both when students move between systems.' },
            { q: 'Do you help with pre-release material?', a: 'Yes. Cambridge publishes pre-release material before the exam. We use it for dedicated sessions once available.' },
            { q: 'Can a CBSE/ICSE student prepare for IGCSE through you?', a: 'Yes, especially for transfers. We have IGCSE-only teachers for exactly these students.' },
            { q: 'Do you teach pseudocode formally?', a: 'Yes — separately from Python. Pseudocode is its own module because Cambridge tests it explicitly.' },
            { q: 'Past papers practice?', a: 'Yes. Full mark scheme walkthroughs for both Paper 1 and Paper 2, with examiner report commentary where relevant.' },
            { q: 'Free demo for IGCSE?', a: 'Yes. One full 1 hour live class with an IGCSE-aware teacher. Refund in 2 weeks if fit is off.' }
        ],
        relatedChips: [
            { href: '/coding-for-cbse-students', small: 'Compare', label: 'Coding for CBSE' },
            { href: '/coding-for-icse-students', small: 'Compare', label: 'Coding for ICSE' },
            { href: '/coding-for-class-9', small: 'Grade', label: 'Coding for Class 9' },
            { href: '/coding-for-class-10', small: 'Grade', label: 'Coding for Class 10' },
            { href: '/python-and-ai-classes-for-kids-teens', small: 'Course', label: 'Python & AI' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/best-coding-classes-online', small: 'Compare', label: 'Best Online Classes' },
            { href: '/java-programming-for-kids-teens', small: 'Course', label: 'Java for Teens' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- COMPUTER APPLICATIONS ICSE CLASS 10 ---------- */
    {
        slug: 'computer-applications-icse-class-10',
        pageTitle: 'Computer Applications ICSE Class 10 — Java BlueJ Tuition, Project & Viva Prep',
        metaDescription: 'ICSE Class 10 Computer Applications Java/BlueJ tuition. Chapter-wise coverage, pattern questions, string problems, practical project and viva prep. 1 hour live classes.',
        keywords: 'computer applications icse class 10, icse class 10 computer applications, icse java class 10, bluej class 10, icse ca class 10, class 10 java tuition, icse 2024 ca, icse ca syllabus, class 10 bluej online, java for icse class 10, icse ca sample papers, class 10 ca project, class 10 ca viva',
        audienceType: 'ICSE Class 10 Computer Applications students',
        courseCode: 'ICSE-CA-10',
        courseName: 'Computer Applications ICSE Class 10',
        courseDesc: 'Live online ICSE Class 10 Computer Applications tuition. Full Java/BlueJ syllabus, practical project, viva preparation.',
        breadcrumbName: 'Computer Applications ICSE Class 10',
        accent: '#10b981', accent2: '#a855f7', bodyClass: 'icse-ca-10-page',
        badge: 'CA10', badgeLabel: 'ICSE · CA',
        badgeFontSize: 'clamp(40px, 6vw, 64px)',
        eyebrow: 'For ICSE Class 10 students · CA paper',
        h1Before: 'Computer Applications ', h1Highlight: 'ICSE Class 10', h1After: ' — strict Java, clean marks.',
        heroSub: 'ICSE Class 10 Computer Applications is a 100-mark Java paper with strict style expectations. Our 1 hour live classes follow the exact CISCE chapter structure — classes, methods, loops, strings, arrays — plus full project + viva prep.',
        trust: [
            { big: '2,400+', sub: 'ICSE Class 10 CA students' },
            { big: '96%', sub: 'Score 85+ on the CA board paper' },
            { big: '1 hour', sub: 'Live class, 1:1 or group' },
            { big: 'BlueJ', sub: 'Exact ICSE tool and style' }
        ],
        chips: ['Chapter-wise', 'Project help', 'Viva prep'],
        coursesHeading: 'Courses built around ICSE Class 10 CA.',
        coursesLede: 'The Java track is the spine. Companion courses (DSA, AI) are for students who want more than just marks.',
        courses: [TEEN.javaTeen, TEEN.dsaTeen, TEEN.pythonTeen, TEEN.fullstackTeen, TEEN.aimlTeen, TEEN.appTeen, TEEN.reactTeen, TEEN.cbseCS],
        skipHeading: 'Already strong on Java loops and strings?',
        skipBody: 'If your Class 10 ICSE student already nails loops and strings, <strong>skip review</strong> and focus on arrays, project work and <a href="/courses/problem-solving-dsa-masterclass-teens" style="color:inherit;text-decoration:underline;">DSA</a> for Class 11 readiness. Demo teacher checks level first.',
        whyHeading: 'ICSE CA rewards discipline, not improvisation.',
        whyLede: 'The ICSE examiner wants code written a specific way — with specific comments, specific variable naming, specific class structure. Students who follow the pattern score full marks on questions they answered correctly; students who improvise lose marks.',
        whys: [
            { tag: 'Style', title: 'Specific variable naming', body: 'ICSE expects meaningful variable names like `totalAmount`, not `t` or `x`. Teachers deduct for vague naming even when logic is correct.' },
            { tag: 'Comments', title: 'Comment format matters', body: 'Block comments above class, single-line comments above logic sections. The mark scheme literally rewards this.' },
            { tag: 'Output', title: 'Output format is tested', body: 'Sample inputs and outputs are printed exactly in the question. Your output should match — spacing, wording, everything.' }
        ],
        projectsHeading: 'Six mastery sets across the ICSE CA syllabus.',
        projectsLede: 'Each set covers a chapter completely — not a cherry-picked question. These are the drills our students finish.',
        projects: [
            { sticker: 'Ch 1-3', title: 'Intro + Intro Java', desc: 'Objects, classes, encapsulation. Cover the basics the paper almost always assumes.', tags: ['oop'] },
            { sticker: 'Ch 4', title: 'User-defined Methods', desc: 'Method signatures, return types, overloading. The most common paper pattern.', tags: ['methods'] },
            { sticker: 'Ch 5', title: 'Constructors', desc: 'Default, parameterised, copy. Questions almost guaranteed.', tags: ['constructors'] },
            { sticker: 'Ch 6-7', title: 'Loops + Patterns', desc: 'The nested-loop pattern printing. Trained until they can solve any given pattern in 3 minutes.', tags: ['loops', 'patterns'] },
            { sticker: 'Ch 8-9', title: 'String Manipulation', desc: 'Palindrome, character frequency, toUpperCase/toLowerCase. The ICSE string classic set.', tags: ['strings'] },
            { sticker: 'Ch 10', title: 'Arrays + Project', desc: 'Searching, sorting, average — plus the required ICSE CA project.', tags: ['arrays', 'project'] }
        ],
        roadmapHeading: 'Four stages across the Class 10 ICSE year.',
        roadmapLede: 'Paced around the school calendar. We pause for pre-boards, resume after. Board safety first.',
        roadmap: [
            { label: 'Term 1 · Chapters 1–4', title: 'OOP foundations + methods', body: 'Classes, constructors, user-defined methods. Where most of the paper\'s easy marks live.', tags: ['oop', 'methods'] },
            { label: 'Term 1–2 · Loops + Strings', title: 'The two biggest mark pools', body: 'Pattern printing drilled until automatic. Every ICSE string classic pattern covered.', tags: ['loops', 'strings'] },
            { label: 'Term 2 · Arrays + Project', title: 'Project done properly', body: 'Arrays chapter plus the mandatory ICSE CA project — topic, code, report, viva rehearsal.', tags: ['arrays', 'project'] },
            { label: 'Pre-boards · Mocks + Viva', title: 'Full mock papers', body: 'Five full mock papers under timed conditions. Viva likely-questions drilled.', tags: ['mocks', 'viva'] }
        ],
        compareHeading: 'ICSE CA vs CBSE CS vs IGCSE CS at Class 10.',
        compareLede: 'If you\'re moving between boards or comparing difficulty.',
        compare: {
            highlight: 0,
            columns: [
                { label: 'ICSE CA (this page)' },
                { label: 'CBSE CS/IT 402' },
                { label: 'IGCSE CS 0478' }
            ],
            rows: [
                { label: 'Language', values: ['Java', 'Python', 'Python + pseudocode'] },
                { label: 'Paper weight', values: ['100 marks', '70 theory + 30 practical', '50 theory + 50 practical'] },
                { label: 'Style strictness', values: ['High', 'Medium', 'Very high (pseudocode)'] },
                { label: 'Tool', values: ['BlueJ', 'Thonny/IDLE', 'Any Python IDE'] },
                { label: 'Project', values: ['Required', 'Elective', 'Pre-release material'] },
                { label: 'Typical topper %', values: ['92+', '90+', 'A* (grade 9)'] }
            ]
        },
        reviewsHeading: 'ICSE Class 10 parents and students.',
        reviewsLede: 'Three recent reviews from ICSE Class 10 CA families.',
        reviews: [
            { initial: 'A', name: 'Avik S.', meta: 'Student · Kolkata · 1-on-1', body: 'I was scoring 72 in my Class 10 pre-board CA. Switched to 1-on-1 with Modern Age Coders for 4 months. Final board: 95. The teacher was relentless about my comment style and variable naming.' },
            { initial: 'V', name: 'Vani R.', meta: 'Parent · Delhi · Group · Class 10 ICSE', body: 'Group of 4 Class 10 ICSE CA students. Every Saturday they submit a pattern question and get it marked the way ICSE marks it. My daughter went from losing 8 marks on patterns to losing zero.' },
            { initial: 'T', name: 'Tanvi M.', meta: 'Parent · Mumbai · 1-on-1', body: 'The project prep was detailed. Topic chosen together, code reviewed line by line, report written in the exact CISCE format. Full marks on project. Would not have happened without the teacher.' }
        ],
        faqs: [
            { q: 'How many chapters are in ICSE Class 10 CA?', a: 'The CISCE ICSE Class 10 Computer Applications syllabus has 10 units, spanning from revision of OOP basics through arrays. We cover every one.' },
            { q: 'Is the project compulsory?', a: 'Yes. The ICSE CA practical exam includes a project (20 marks) along with the viva. We help with both end-to-end.' },
            { q: 'What is the tool — BlueJ or Eclipse?', a: 'BlueJ. CISCE expects BlueJ screenshots and style. We use BlueJ in classes.' },
            { q: 'Can you help with the CA viva?', a: 'Yes. We rehearse the 40–50 most common viva questions so there are no surprises.' },
            { q: 'How much time per week is needed?', a: 'Two 1-hour sessions is typical. 1 session/week works if the student is already comfortable.' },
            { q: 'What about pre-board drop?', a: 'Very common. We run a 4-week intensive between pre-boards and boards specifically for students who dropped.' },
            { q: 'Is 1-on-1 better than group for ICSE CA?', a: '1-on-1 for students needing major improvement. Group works for students already above 75% who want to reach 90+.' },
            { q: 'Free demo?', a: 'Yes. One full 1 hour live class with an ICSE-aware Java teacher. No card. Refund clause 2 weeks.' }
        ],
        relatedChips: [
            { href: '/coding-for-icse-students', small: 'Board', label: 'Coding for ICSE' },
            { href: '/computer-science-class-11-icse', small: 'Paper', label: 'CS Class 11 ICSE' },
            { href: '/computer-science-class-12-icse', small: 'Paper', label: 'CS Class 12 ICSE' },
            { href: '/coding-for-class-10', small: 'Grade', label: 'Coding for Class 10' },
            { href: '/coding-for-15-year-olds', small: 'Age', label: 'Coding for 15 Year Olds' },
            { href: '/java-programming-for-kids-teens', small: 'Course', label: 'Java for Teens' },
            { href: '/coding-for-cbse-students', small: 'Compare', label: 'Coding for CBSE' },
            { href: '/coding-for-igcse-students', small: 'Compare', label: 'Coding for IGCSE' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- CS CLASS 11 CBSE ---------- */
    {
        slug: 'computer-science-class-11-cbse',
        pageTitle: 'Computer Science Class 11 CBSE — Python, Boolean Logic & Full Syllabus Tuition',
        metaDescription: 'CBSE Class 11 Computer Science tuition. Python programming, boolean logic, number systems, computer networks, emerging trends — NCERT-aligned. 1 hour live classes.',
        keywords: 'computer science class 11 cbse, cbse class 11 cs, class 11 python cbse, cbse class 11 cs tuition, cbse cs 083, class 11 cs syllabus, cbse class 11 cs ncert, class 11 boolean algebra, class 11 number systems, cbse 11 cs sample papers, python for class 11 cbse, class 11 cs online tuition',
        audienceType: 'CBSE Class 11 Computer Science students',
        courseCode: 'CBSE-CS-11',
        courseName: 'Computer Science Class 11 CBSE',
        courseDesc: 'Live online CBSE Class 11 Computer Science tuition. Full NCERT 083 syllabus, Python, boolean algebra, networks, emerging trends.',
        breadcrumbName: 'Computer Science Class 11 CBSE',
        accent: '#f59e0b', accent2: '#a855f7', bodyClass: 'cbse-cs-11-page',
        badge: 'CS11', badgeLabel: 'CBSE · 083',
        badgeFontSize: 'clamp(40px, 6vw, 64px)',
        eyebrow: 'For CBSE Class 11 CS students · Code 083',
        h1Before: 'Computer Science ', h1Highlight: 'Class 11 CBSE', h1After: ' — NCERT-aligned, stream-ready.',
        heroSub: 'CBSE Class 11 CS (Code 083) is Python-based with serious theory — boolean algebra, number systems, basics of computer organisation. Our 1 hour live classes cover the NCERT syllabus line by line and build real projects for the practical.',
        trust: [
            { big: '2,200+', sub: 'CBSE Class 11 CS students' },
            { big: '94%', sub: 'Score 85+ on the CS paper' },
            { big: '1 hour', sub: 'Live class, 1:1 or group' },
            { big: 'Code 083', sub: 'Full NCERT alignment' }
        ],
        chips: ['NCERT aligned', 'Python', 'Boolean + networks'],
        coursesHeading: 'Courses for a CBSE Class 11 CS student.',
        coursesLede: 'The CS 083 track is the spine. Companion courses for those who want to go beyond marks — MERN, AI/ML, DSA.',
        courses: [TEEN.cbseCS, TEEN.pythonTeen, TEEN.fullstackTeen, TEEN.aimlTeen, TEEN.dsaTeen, TEEN.cppTeen, TEEN.reactTeen, TEEN.compTeen],
        skipHeading: 'Already strong in Python from Class 10?',
        skipBody: 'If your Class 11 CBSE CS student already has strong Python, <strong>skip basics</strong> and go straight into <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI/ML</a>, <a href="/courses/mern-stack-development-masterclass-college" style="color:inherit;text-decoration:underline;">MERN</a>, or <a href="/courses/problem-solving-dsa-masterclass-teens" style="color:inherit;text-decoration:underline;">DSA</a>. Free demo confirms level.',
        whyHeading: 'CBSE Class 11 CS sets the foundation for Class 12.',
        whyLede: 'A student who takes Class 11 CS seriously finds Class 12 significantly easier. Python fluency, boolean logic and basics of networks are revisited and deepened in Class 12 — the base you build now pays off next year.',
        whys: [
            { tag: 'NCERT', title: 'Syllabus follows NCERT Part 1', body: 'Our teachers follow the NCERT CS Class 11 book chapter by chapter. Every example, every sample question — covered.' },
            { tag: 'Practical', title: '30 marks on practical', body: 'The practical exam is 30/100 — too much to ignore. We build real Python projects throughout the year so the practical viva is comfortable.' },
            { tag: 'Class 12 prep', title: 'Strong 11 = easy 12', body: 'Class 12 CS deepens everything — Python, data structures, DB/SQL. A Class 11 student who got fundamentals right sails through.' }
        ],
        projectsHeading: 'Six mastery sets across the Class 11 CS syllabus.',
        projectsLede: 'Each set covers a unit of NCERT 083 comprehensively — not just sample questions.',
        projects: [
            { sticker: 'Unit 1', title: 'Computer Systems', desc: 'Hardware, software, boolean logic, number systems. The theory part often ignored.', tags: ['boolean', 'binary'] },
            { sticker: 'Unit 2', title: 'Python Basics', desc: 'Data types, operators, control flow, lists, dicts, tuples. With code practice per topic.', tags: ['python'] },
            { sticker: 'Unit 2', title: 'Functions + Strings', desc: 'User-defined functions, scope, string slicing. The paper\'s favourite source of programs.', tags: ['functions', 'strings'] },
            { sticker: 'Unit 3', title: 'Society + Ethics', desc: 'IT Act, privacy, cyber safety, e-waste. Short questions; easy marks when prepared.', tags: ['ethics'] },
            { sticker: 'Practical', title: 'Project + Lab File', desc: 'Required project + the 15 lab-file programs. Done properly with output.', tags: ['project', 'lab'] },
            { sticker: 'Mocks', title: '5 Full Mock Papers', desc: 'Written under timed conditions, graded, feedback the same day.', tags: ['mocks'] }
        ],
        roadmapHeading: 'Four stages across Class 11 CS.',
        roadmapLede: 'Matched to the school calendar. We speed up where school slows and use real projects to keep interest.',
        roadmap: [
            { label: 'Term 1 · Unit 1 + Python I', title: 'Foundations', body: 'Computer systems, boolean algebra, number systems. Python basics in parallel. Both come in handy for the paper.', tags: ['boolean', 'python'] },
            { label: 'Term 1-2 · Python II', title: 'Functions, strings, lists', body: 'Where most mid-term questions come from. Real programs written and tested.', tags: ['functions', 'lists'] },
            { label: 'Term 2 · Unit 3 + Project', title: 'Society + mandatory project', body: 'Unit 3 topics covered alongside the Class 11 CS project. Topic chosen with the teacher.', tags: ['project', 'ethics'] },
            { label: 'Pre-board · Mocks', title: '5 full papers', body: 'Graded, feedback the same day. Lab file finalised. Viva rehearsed.', tags: ['mocks', 'viva'] }
        ],
        compareHeading: 'CBSE CS 11 vs IP 11 vs ICSE CS 11.',
        compareLede: 'If you are choosing a stream or elective.',
        compare: {
            highlight: 0,
            columns: [
                { label: 'CBSE CS 11 (this page)' },
                { label: 'CBSE IP 11' },
                { label: 'ICSE CS 11', link: '/computer-science-class-11-icse' }
            ],
            rows: [
                { label: 'Language', values: ['Python', 'Python + SQL', 'Java'] },
                { label: 'Theory weight', values: ['Medium', 'Low', 'High'] },
                { label: 'Practical weight', values: ['30/100', '30/100', '30/100'] },
                { label: 'Data emphasis', values: ['Structures', 'Pandas + SQL', 'Arrays'] },
                { label: 'Career align', values: ['CS college', 'Data / IP', 'CS college'] },
                { label: 'Difficulty', values: ['Medium', 'Lower', 'Higher'] }
            ]
        },
        reviewsHeading: 'CBSE Class 11 CS parents and students.',
        reviewsLede: 'Three recent reviews from Class 11 CBSE CS families.',
        reviews: [
            { initial: 'H', name: 'Harsh V.', meta: 'Student · Delhi · 1-on-1', body: 'Class 11 CBSE CS — the teacher teaches the NCERT chapter a week before school. I\'ve finished the Python units by mid-term. 92 in the half-yearly. The practical project is also on track.' },
            { initial: 'P', name: 'Poonam S.', meta: 'Parent · Hyderabad · Group · Class 11 CS', body: 'Group of 4 Class 11 CBSE CS students. Small, focused, serious. My daughter went from 68 at Class 10 IT to 88 at Class 11 CS half-yearly. Teacher is patient with boolean algebra which she dreaded.' },
            { initial: 'R', name: 'Rahul M.', meta: 'Parent · Bengaluru · 1-on-1', body: 'We took this because my son\'s school CS teacher changed three times in a term. This class gave him consistency. He finished the project properly and is now ahead of the school calendar.' }
        ],
        faqs: [
            { q: 'What is the Code 083 structure?', a: 'CBSE CS Class 11 (Code 083) has 3 units — Computer Systems (10 marks), Computational Thinking & Programming (45 marks), Society/Ethics (15 marks) — plus 30 marks practical.' },
            { q: 'Does the practical include a project?', a: 'Yes. 12 marks for the project out of the 30 practical marks. We help with topic, code, report and viva.' },
            { q: 'Is boolean algebra heavily tested?', a: 'Yes — ~10 marks in the theory paper. Many students underestimate it. We make it straightforward with diagrams and truth tables.' },
            { q: 'Does this help with JEE CS too?', a: 'Partly. JEE Advanced tests CS at Class 12 level, and our Class 11 foundation makes Class 12 easier. Dedicated JEE CS prep is separate.' },
            { q: 'Does this also prepare for CBSE 12 CS?', a: 'Yes — directly. The Python and logic foundation built in Class 11 makes Class 12 Data Structures and SQL units much easier.' },
            { q: 'Can I move from CBSE CS to IP mid-year?', a: 'Technically yes, practically no (most schools don\'t allow it). We recommend deciding at Class 10 end based on career direction.' },
            { q: 'How much time weekly?', a: 'Two 1-hour sessions is typical. One session works if the student is already strong.' },
            { q: 'Free demo for Class 11 CS?', a: 'Yes. One full 1 hour live class with a CBSE-aware teacher. No card, refund clause 2 weeks.' }
        ],
        relatedChips: [
            { href: '/computer-science-class-12-cbse', small: 'Next', label: 'CS Class 12 CBSE' },
            { href: '/computer-science-class-11-icse', small: 'Compare', label: 'CS Class 11 ICSE' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'Coding for CBSE' },
            { href: '/coding-for-class-11', small: 'Grade', label: 'Coding for Class 11' },
            { href: '/coding-for-16-year-olds', small: 'Age', label: 'Coding for 16 Year Olds' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/java-programming-for-kids-teens', small: 'Course', label: 'Java for Teens' },
            { href: '/best-coding-classes-online', small: 'Compare', label: 'Best Online Classes' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- CS CLASS 12 CBSE ---------- */
    {
        slug: 'computer-science-class-12-cbse',
        pageTitle: 'Computer Science Class 12 CBSE — Python Data Structures, SQL & Full Board Tuition',
        metaDescription: 'CBSE Class 12 Computer Science tuition. Python data structures, functions, file handling, SQL, networks — NCERT Code 083 aligned. Project + viva prep included.',
        keywords: 'computer science class 12 cbse, cbse class 12 cs, cbse class 12 cs 083, python class 12 cbse, class 12 cs tuition, class 12 python data structures, class 12 sql, class 12 mysql, cbse 12 cs ncert, cbse 12 cs sample paper, class 12 cs project, class 12 cs online tuition, class 12 python file handling',
        audienceType: 'CBSE Class 12 Computer Science students',
        courseCode: 'CBSE-CS-12',
        courseName: 'Computer Science Class 12 CBSE',
        courseDesc: 'Live online CBSE Class 12 Computer Science tuition. Python data structures, SQL, networks, project and viva prep.',
        breadcrumbName: 'Computer Science Class 12 CBSE',
        accent: '#ef4444', accent2: '#f59e0b', bodyClass: 'cbse-cs-12-page',
        badge: 'CS12', badgeLabel: 'CBSE · 083',
        badgeFontSize: 'clamp(40px, 6vw, 64px)',
        eyebrow: 'For CBSE Class 12 CS students · Code 083 board year',
        h1Before: 'Computer Science ', h1Highlight: 'Class 12 CBSE', h1After: ' — Python + SQL + project.',
        heroSub: 'CBSE Class 12 CS is Python + data structures + SQL + networks. Our 1 hour live classes cover every NCERT chapter, run through 10 years of sample papers, and finish the mandatory project with a clean report and viva prep.',
        trust: [
            { big: '1,900+', sub: 'Class 12 CBSE CS students' },
            { big: '92%', sub: 'Score 90+ on the CS paper' },
            { big: '1 hour', sub: 'Live class, 1:1 or group' },
            { big: 'NCERT 083', sub: 'Full board syllabus alignment' }
        ],
        chips: ['Board-safe', 'Full project', 'SQL mastered'],
        coursesHeading: 'Class 12 CBSE CS + college-ready companions.',
        coursesLede: 'The CS 083 track is non-negotiable. Companion tracks help Class 12 students who also want a college-ready portfolio.',
        courses: [TEEN.cbseCS, TEEN.pythonTeen, TEEN.mysqlTeen, TEEN.aimlTeen, TEEN.fullstackTeen, TEEN.dsaTeen, TEEN.cppTeen, TEEN.compTeen],
        skipHeading: 'Already scoring 85+ in the mid-term?',
        skipBody: 'If your Class 12 CS student is already scoring high, <strong>skip review</strong> and go into <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI/ML</a>, <a href="/courses/problem-solving-dsa-masterclass-teens" style="color:inherit;text-decoration:underline;">DSA</a>, <a href="/courses/full-stack-web-development-teens-masterclass" style="color:inherit;text-decoration:underline;">Full Stack</a>, or <a href="/courses/competitive-programming-masterclass" style="color:inherit;text-decoration:underline;">CP</a>. Free demo places them.',
        whyHeading: 'Class 12 CS is high-stakes — the right help matters.',
        whyLede: 'CS is often a top-3 marks subject for CS-stream students. The paper rewards precise Python, clean SQL and a well-presented project. One careless term and marks drop. We make that precision routine.',
        whys: [
            { tag: 'Stakes', title: 'CS counts in PCM + CS average', body: 'For most engineering-bound students, CS is a high-scoring subject that lifts the PCM + CS average. A 95 vs 85 can shift the JEE main merit picture.' },
            { tag: 'Practical', title: '30 marks on practical', body: 'Includes the mandatory project. Lost marks here are common — students prioritise theory and neglect the project.' },
            { tag: 'College signal', title: 'Project + marks together', body: 'A well-done Class 12 CS project (written up properly) can be used in college applications for CS-abroad programmes. Dual benefit.' }
        ],
        projectsHeading: 'Six mastery sets across Class 12 CS 083.',
        projectsLede: 'Each set covers a full unit of NCERT 083 comprehensively.',
        projects: [
            { sticker: 'Unit 1', title: 'Python Recap + DS', desc: 'Revision of Class 11 Python. Then lists, dicts, stacks, queues — implemented, not just understood.', tags: ['python', 'ds'] },
            { sticker: 'Unit 1', title: 'File Handling', desc: 'Text + binary + CSV file handling — a confusing topic simplified with real examples.', tags: ['files', 'csv'] },
            { sticker: 'Unit 1', title: 'Functions + Recursion', desc: 'Functions, scope, default arguments, a gentle look at recursion.', tags: ['functions', 'recursion'] },
            { sticker: 'Unit 2', title: 'Networks', desc: 'Network types, topologies, internet basics. Theory unit — drilled via MCQ banks.', tags: ['networks'] },
            { sticker: 'Unit 3', title: 'SQL + MySQL', desc: 'SELECT, WHERE, GROUP BY, aggregate, joins. With real MySQL practice on a dataset.', tags: ['sql', 'mysql'] },
            { sticker: 'Project', title: 'Mandatory CS Project', desc: 'Topic chosen together, code reviewed, report in CBSE format, viva rehearsed. Full marks target.', tags: ['project', 'viva'] }
        ],
        roadmapHeading: 'Four quarters across Class 12 — board-aware.',
        roadmapLede: 'We pause for pre-boards and boards. Rest of the year is paced steadily.',
        roadmap: [
            { label: 'Q1 · Jul–Sep · Python + DS', title: 'Recap + unit 1 core', body: 'Class 11 Python recapped, then stacks, queues, lists in depth. File handling covered early — it often trips students later.', tags: ['python', 'stacks'] },
            { label: 'Q2 · Oct–Nov · SQL + Project', title: 'Unit 3 + mandatory project', body: 'MySQL drilled on real datasets. Project delivered end-to-end. Both done before pre-boards start.', tags: ['sql', 'project'] },
            { label: 'Q3 · Dec–Feb · Mocks', title: 'Full sample papers', body: 'Each week, one full 3-hour sample paper under timed conditions. Scored, gaps reviewed, improved.', tags: ['mocks'] },
            { label: 'Q4 · Mar+ · Board support', title: 'On-call support', body: 'During boards, no new content. On WhatsApp for any last-minute question. After boards, pre-college sprint starts.', tags: ['board', 'college'] }
        ],
        compareHeading: 'CBSE CS 12 vs ICSE CS 12 vs CBSE IP 12.',
        compareLede: 'If you\'re comparing which paper suits your child.',
        compare: {
            highlight: 0,
            columns: [
                { label: 'CBSE CS 12 (this page)' },
                { label: 'ICSE CS 12', link: '/computer-science-class-12-icse' },
                { label: 'CBSE IP 12' }
            ],
            rows: [
                { label: 'Language', values: ['Python + SQL', 'Java', 'Python + Pandas + SQL'] },
                { label: 'Data structures', values: ['Stacks + queues', 'Linked list + BST', 'Pandas Series/DF'] },
                { label: 'Networks', values: ['Yes', 'Yes', 'Yes (less)'] },
                { label: 'SQL weight', values: ['High', 'None', 'High'] },
                { label: 'Practical weight', values: ['30', '30', '30'] },
                { label: 'Typical topper %', values: ['95+', '93+', '93+'] }
            ]
        },
        reviewsHeading: 'Class 12 CBSE CS parents and students.',
        reviewsLede: 'Three recent Class 12 reviews. Unedited, privacy-shortened.',
        reviews: [
            { initial: 'A', name: 'Abhinav R.', meta: 'Student · Delhi · 1-on-1', body: 'Class 12 CBSE CS. SQL was breaking me at mid-term. Teacher rebuilt it in 5 sessions using a real dataset. Scored 97 in the pre-boards. Project is a Flask-based library management app — full marks.' },
            { initial: 'G', name: 'Gayatri P.', meta: 'Parent · Mumbai · Group · Class 12 CS', body: 'Small group of 3 Class 12 CS students. Teacher is firm about sample paper timing — 3 hours, no breaks. Daughter scored 93 in boards. Project: book-recommender using Pandas. Unusually good.' },
            { initial: 'K', name: 'Karan M.', meta: 'Parent · Bengaluru · 1-on-1', body: 'We joined late — October. The teacher still managed SQL + networks + project in 3 months. He scored 91 in boards. Could have been higher with an earlier start, but given the timeline, remarkable.' }
        ],
        faqs: [
            { q: 'What is the full CBSE Class 12 CS syllabus?', a: 'Unit 1: Computational Thinking and Programming (Python data structures, file handling) — 40 marks. Unit 2: Networks — 10 marks. Unit 3: Database (SQL + MySQL) — 20 marks. Practical + project — 30 marks.' },
            { q: 'Is the project really 12 marks?', a: 'Yes. The mandatory project is 12 marks of the 30 practical marks. Students lose marks here all the time. We make it solid.' },
            { q: 'Is MySQL asked in theory too?', a: 'Yes. Database questions appear in theory and are hands-on in the practical. We cover both through the same dataset.' },
            { q: 'Can we start late (October onwards)?', a: 'Yes, but ideally only 1-on-1 at that stage. We run an intensive 3-month push focused on high-yield areas.' },
            { q: 'Is JEE CS separate?', a: 'Yes — JEE Advanced CS is deeper. Our Class 12 CBSE CS course does not cover JEE Advanced. Separate prep recommended.' },
            { q: 'Pre-board drop — can you help?', a: 'Yes. We run a 4-week intensive between pre-boards and boards for students who dropped in pre-boards.' },
            { q: '1-on-1 or group for Class 12?', a: '1-on-1 for students needing marks improvement or working on specific weak areas. Group works for students already scoring 80+.' },
            { q: 'Free demo?', a: 'Yes. One full 1 hour live class with a CBSE-aware teacher. No card. Refund in 2 weeks if fit is off.' }
        ],
        relatedChips: [
            { href: '/computer-science-class-11-cbse', small: 'Prev', label: 'CS Class 11 CBSE' },
            { href: '/computer-science-class-12-icse', small: 'Compare', label: 'CS Class 12 ICSE' },
            { href: '/coding-for-cbse-students', small: 'Board', label: 'Coding for CBSE' },
            { href: '/coding-for-class-12', small: 'Grade', label: 'Coding for Class 12' },
            { href: '/coding-for-17-year-olds', small: 'Age', label: 'Coding for 17 Year Olds' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' },
            { href: '/java-programming-for-kids-teens', small: 'Course', label: 'Java for Teens' },
            { href: '/best-coding-classes-online', small: 'Compare', label: 'Best Online Classes' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- CS CLASS 11 ICSE ---------- */
    {
        slug: 'computer-science-class-11-icse',
        pageTitle: 'Computer Science Class 11 ICSE — Java OOP, Boolean Algebra & ISC Full Syllabus',
        metaDescription: 'ISC Class 11 Computer Science tuition. Java OOP, boolean algebra, number systems, computer ethics — CISCE-aligned. 1 hour live classes, 1:1 or small group.',
        keywords: 'computer science class 11 icse, isc class 11 cs, icse class 11 java, isc computer science class 11, class 11 icse java tuition, isc 11 boolean algebra, isc 11 cs syllabus, icse class 11 java oop, cisce class 11 cs, isc class 11 cs sample papers, isc 11 practical, class 11 icse cs online',
        audienceType: 'ICSE/ISC Class 11 Computer Science students',
        courseCode: 'ICSE-CS-11',
        courseName: 'Computer Science Class 11 ICSE',
        courseDesc: 'Live online ISC Class 11 Computer Science tuition. Java, boolean algebra, number systems, ethics, practical prep.',
        breadcrumbName: 'Computer Science Class 11 ICSE',
        accent: '#06b6d4', accent2: '#6366f1', bodyClass: 'icse-cs-11-page',
        badge: 'CS11', badgeLabel: 'ISC · CISCE',
        badgeFontSize: 'clamp(40px, 6vw, 64px)',
        eyebrow: 'For ISC Class 11 CS students · CISCE',
        h1Before: 'Computer Science ', h1Highlight: 'Class 11 ICSE', h1After: ' — strict Java, strict style.',
        heroSub: 'ISC Class 11 CS is Java-centric with heavy theory — boolean algebra, propositional logic, number systems. Our 1 hour live classes follow the CISCE syllabus exactly and drill the specific Java style ISC examiners reward.',
        trust: [
            { big: '1,400+', sub: 'ISC Class 11 CS students' },
            { big: '93%', sub: 'Score 85+ on the CS paper' },
            { big: '1 hour', sub: 'Live class, 1:1 or group' },
            { big: 'CISCE', sub: 'Exact ISC syllabus alignment' }
        ],
        chips: ['Strict Java', 'Boolean heavy', 'Paper-pattern drills'],
        coursesHeading: 'ISC Class 11 CS — tracks that fit.',
        coursesLede: 'Java is the paper language. DSA and Python are for students going to a CS college.',
        courses: [TEEN.javaTeen, TEEN.cbseCS, TEEN.dsaTeen, TEEN.pythonTeen, TEEN.fullstackTeen, TEEN.aimlTeen, TEEN.reactTeen, TEEN.compTeen],
        skipHeading: 'Already strong with Class 10 ICSE CA?',
        skipBody: 'If your ISC Class 11 CS student already has strong ICSE CA foundations, <strong>skip basics</strong> and go directly into ISC-level OOP, plus <a href="/courses/problem-solving-dsa-masterclass-teens" style="color:inherit;text-decoration:underline;">DSA</a> or <a href="/courses/full-stack-web-development-teens-masterclass" style="color:inherit;text-decoration:underline;">Full Stack</a> for college prep. Demo confirms level.',
        whyHeading: 'ISC Class 11 CS is the strict foundation year.',
        whyLede: 'ISC deliberately tests the basics of CS as a formal subject — not just Java, but logic, number systems and ethics. Students who ignore theory because they can code end up with dropped marks in these sections.',
        whys: [
            { tag: 'Theory', title: 'Boolean + number systems are scoring', body: 'Truth tables, K-maps, binary/hex conversion — scoring sections if prepared. Easy marks to lose if ignored.' },
            { tag: 'Style', title: 'Java style matters here too', body: 'ISC examiners dock for incorrect style — improper access modifiers, bad variable names. We drill the style from day one.' },
            { tag: 'ISC 12 prep', title: 'Class 12 ISC CS is harder', body: 'ISC 12 adds data structures and algorithms. A strong Class 11 base makes Class 12 manageable.' }
        ],
        projectsHeading: 'Six mastery sets across ISC Class 11 CS.',
        projectsLede: 'Each set is aligned to an exact ISC 11 CS unit.',
        projects: [
            { sticker: 'Unit 1', title: 'Boolean Algebra', desc: 'Truth tables, K-maps, SOP/POS forms. Every ISC 11 favourite.', tags: ['boolean'] },
            { sticker: 'Unit 1', title: 'Number Systems', desc: 'Binary, octal, hex, 2\'s complement. Conversions drilled.', tags: ['binary', 'hex'] },
            { sticker: 'Unit 2', title: 'Java OOP', desc: 'Class, object, encapsulation, access modifiers — the ISC way.', tags: ['oop'] },
            { sticker: 'Unit 2', title: 'Arrays + Loops', desc: 'Searching, sorting, pattern printing. The bulk of Java marks.', tags: ['arrays'] },
            { sticker: 'Unit 3', title: 'Ethics + Society', desc: 'IT-related ethics, privacy, law. Short questions — easy marks.', tags: ['ethics'] },
            { sticker: 'Practical', title: 'ISC Practical Lab File', desc: '15 Java programs in the ISC format, plus viva prep.', tags: ['lab'] }
        ],
        roadmapHeading: 'Four stages across ISC Class 11.',
        roadmapLede: 'Matched to the CISCE calendar. Theory and Java progress in parallel — never theory-heavy or code-heavy.',
        roadmap: [
            { label: 'Term 1 · Foundations', title: 'Boolean + OOP basics', body: 'Boolean algebra, number systems. Java OOP introduction. Two different muscles, both trained.', tags: ['boolean', 'oop'] },
            { label: 'Term 1-2 · Arrays + methods', title: 'Core programming', body: 'Arrays, user-defined methods, pattern printing. Where most Java marks live.', tags: ['arrays', 'methods'] },
            { label: 'Term 2 · Ethics + polish', title: 'Short-answer topics', body: 'Ethics, short theory, revision of boolean. Short-answer sections cleared.', tags: ['ethics'] },
            { label: 'Pre-mock · Lab + mock', title: 'Practical + full papers', body: 'Lab file finalised. 5 full timed mocks. Viva rehearsed.', tags: ['mocks', 'lab'] }
        ],
        compareHeading: 'ISC CS 11 vs CBSE CS 11 vs IGCSE.',
        compareLede: 'Honest comparison across boards at Class 11.',
        compare: {
            highlight: 0,
            columns: [
                { label: 'ISC CS 11 (this page)' },
                { label: 'CBSE CS 11', link: '/computer-science-class-11-cbse' },
                { label: 'IGCSE CS', link: '/coding-for-igcse-students' }
            ],
            rows: [
                { label: 'Language', values: ['Java', 'Python', 'Python + pseudocode'] },
                { label: 'Theory weight', values: ['High (boolean heavy)', 'Medium', 'Very high'] },
                { label: 'Practical weight', values: ['30', '30', '50'] },
                { label: 'Style strictness', values: ['High', 'Medium', 'Very high'] },
                { label: 'Data structures', values: ['Arrays only', 'None yet', 'None'] },
                { label: 'Difficulty', values: ['Higher', 'Medium', 'Medium'] }
            ]
        },
        reviewsHeading: 'ISC Class 11 CS parents and students.',
        reviewsLede: 'Three recent ISC Class 11 reviews.',
        reviews: [
            { initial: 'D', name: 'Dhruv N.', meta: 'Student · Kolkata · 1-on-1', body: 'ISC Class 11. Boolean algebra was a wall. Teacher broke it down truth-table first, K-map second. Now it\'s easy marks for me. Half-yearly CS score: 94.' },
            { initial: 'A', name: 'Anushka B.', meta: 'Parent · Delhi · Group · ISC 11', body: 'My daughter is in ISC Class 11 CS. She was scared of Java OOP from ICSE Class 10. Small group of 4 has built her confidence. Teacher is strict about style — exactly what ISC wants.' },
            { initial: 'M', name: 'Madhav V.', meta: 'Parent · Mumbai · 1-on-1', body: 'Moved from ICSE Class 10 CA to ISC Class 11 CS. The jump was real. Modern Age Coders paced the jump — boolean first, OOP second, arrays third. It worked.' }
        ],
        faqs: [
            { q: 'What is the ISC Class 11 CS structure?', a: 'CISCE ISC Class 11 CS syllabus has 3 sections — Section A (boolean algebra, propositional logic), Section B (Java OOP, arrays, methods), Section C (ethics, applications). 70 theory + 30 practical.' },
            { q: 'Is the practical strict?', a: 'Yes. ISC lab file format is specific and the viva is oral. We prepare for both.' },
            { q: 'Is boolean algebra really ~20 marks?', a: 'Approximately. Between boolean and number systems, ~25 marks. Preparing these is non-negotiable.' },
            { q: 'How is ISC Java different from ICSE Class 10 Java?', a: 'ISC adds longer programs, more OOP depth, and introduces slightly harder algorithms like sorting. Our teachers bridge the gap clearly.' },
            { q: 'Can an ISC CS student also learn Python?', a: 'Optional. Python is useful for college CS and broader projects. Many ISC students add a Python track.' },
            { q: 'ISC 11 to ISC 12 jump — what to expect?', a: 'ISC 12 adds linked lists, sorting algorithms, recursion. A strong Class 11 base makes Class 12 doable.' },
            { q: '1-on-1 or group for ISC 11 CS?', a: '1-on-1 for students recovering from ICSE CA drop. Group works for students comfortable with basics aiming for 90+.' },
            { q: 'Free demo?', a: 'Yes. One full 1 hour live class with an ISC-aware Java teacher. No card. Refund clause 2 weeks.' }
        ],
        relatedChips: [
            { href: '/computer-science-class-12-icse', small: 'Next', label: 'CS Class 12 ICSE' },
            { href: '/computer-science-class-11-cbse', small: 'Compare', label: 'CS Class 11 CBSE' },
            { href: '/coding-for-icse-students', small: 'Board', label: 'Coding for ICSE' },
            { href: '/computer-applications-icse-class-10', small: 'Prev', label: 'ICSE CA Class 10' },
            { href: '/coding-for-class-11', small: 'Grade', label: 'Coding for Class 11' },
            { href: '/coding-for-16-year-olds', small: 'Age', label: 'Coding for 16 Year Olds' },
            { href: '/java-programming-for-kids-teens', small: 'Course', label: 'Java for Teens' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' }
        ],
        cityChips: CITY_CHIPS
    },

    /* ---------- CS CLASS 12 ICSE ---------- */
    {
        slug: 'computer-science-class-12-icse',
        pageTitle: 'Computer Science Class 12 ICSE — ISC Java Data Structures, Recursion & Board Prep',
        metaDescription: 'ISC Class 12 Computer Science tuition. Java inheritance, recursion, linked list, sorting, algorithmic complexity — CISCE-aligned. Project + viva prep included.',
        keywords: 'computer science class 12 icse, isc class 12 cs, class 12 icse java, isc computer science class 12, class 12 icse linked list, isc 12 recursion, isc 12 sorting, isc 12 cs syllabus, cisce class 12 cs, isc class 12 sample papers, isc 12 practical, class 12 icse cs online, isc 12 project',
        audienceType: 'ICSE/ISC Class 12 Computer Science students',
        courseCode: 'ICSE-CS-12',
        courseName: 'Computer Science Class 12 ICSE',
        courseDesc: 'Live online ISC Class 12 Computer Science tuition. Inheritance, recursion, linked lists, sorting, algorithmic complexity. Project and viva prep.',
        breadcrumbName: 'Computer Science Class 12 ICSE',
        accent: '#8b5cf6', accent2: '#06b6d4', bodyClass: 'icse-cs-12-page',
        badge: 'CS12', badgeLabel: 'ISC · CISCE',
        badgeFontSize: 'clamp(40px, 6vw, 64px)',
        eyebrow: 'For ISC Class 12 CS students · Board year',
        h1Before: 'Computer Science ', h1Highlight: 'Class 12 ICSE', h1After: ' — Java DS done properly.',
        heroSub: 'ISC Class 12 CS is Java + data structures + algorithmic complexity. Our 1 hour live classes take the CISCE syllabus and drill every linked-list, every recursion, every sorting pattern that examiners love — plus the project and viva.',
        trust: [
            { big: '1,300+', sub: 'ISC Class 12 CS students' },
            { big: '94%', sub: 'Score 85+ on the CS paper' },
            { big: '1 hour', sub: 'Live class, 1:1 or group' },
            { big: 'CISCE', sub: 'Exact ISC Class 12 alignment' }
        ],
        chips: ['Board-safe', 'Linked list mastered', 'Recursion drilled'],
        coursesHeading: 'ISC Class 12 CS — tracks that matter.',
        coursesLede: 'Java is the paper. Companion tracks for students going into CS college.',
        courses: [TEEN.javaTeen, TEEN.cbseCS, TEEN.dsaTeen, TEEN.cppTeen, TEEN.pythonTeen, TEEN.fullstackTeen, TEEN.aimlTeen, TEEN.compTeen],
        skipHeading: 'Already scoring 85+ in mid-term?',
        skipBody: 'If your ISC Class 12 CS student is already scoring high, <strong>skip review</strong> and go into <a href="/courses/problem-solving-dsa-masterclass-teens" style="color:inherit;text-decoration:underline;">DSA</a>, <a href="/courses/competitive-programming-masterclass" style="color:inherit;text-decoration:underline;">CP</a>, <a href="/courses/full-stack-web-development-teens-masterclass" style="color:inherit;text-decoration:underline;">Full Stack</a>, or <a href="/courses/ai-ml-masterclass-teens" style="color:inherit;text-decoration:underline;">AI/ML</a> for college prep. Free demo confirms.',
        whyHeading: 'ISC Class 12 CS rewards clean algorithmic thinking.',
        whyLede: 'Unlike ISC 11 which tests syntax and theory, ISC 12 tests algorithmic understanding — recursion, linked list manipulation, complexity. Students who can only memorise struggle; those who genuinely understand sail through.',
        whys: [
            { tag: 'Depth', title: 'Data structures become central', body: 'Linked list, stack, queue, BST — all in Java, all with full working code expected in the paper. Memorisation won\'t work here.' },
            { tag: 'Recursion', title: 'Recursion is paper-favourite', body: 'Factorial, Fibonacci, array recursion, string recursion. The examiners love recursive questions. We drill them.' },
            { tag: 'Complexity', title: 'Big-O matters in Class 12 ISC', body: 'Algorithmic complexity is formally examined. Understanding O(n), O(log n), O(n²) — not trivia, real analytic skill.' }
        ],
        projectsHeading: 'Six mastery sets across ISC Class 12 CS.',
        projectsLede: 'Each set is one full ISC 12 CS unit. We drill until the paper pattern is instinct.',
        projects: [
            { sticker: 'Unit 1', title: 'Inheritance + Polymorphism', desc: 'super, overriding, abstract classes, interfaces. The OOP depth ISC 12 expects.', tags: ['oop'] },
            { sticker: 'Unit 1', title: 'Recursion Patterns', desc: 'Factorial, Fibonacci, sum, power. All classic ISC recursion questions solved.', tags: ['recursion'] },
            { sticker: 'Unit 2', title: 'Linked List Operations', desc: 'Insert, delete, reverse, search. Singly linked lists in Java — paper standard.', tags: ['linked list'] },
            { sticker: 'Unit 2', title: 'Stacks + Queues', desc: 'Array-based and linked-list based. With all classic examples.', tags: ['stack', 'queue'] },
            { sticker: 'Unit 3', title: 'Sorting', desc: 'Bubble, selection, insertion sort in Java. With complexity explained.', tags: ['sort'] },
            { sticker: 'Project', title: 'ISC CS Project', desc: 'The mandatory project — topic chosen, code clean, report in CISCE format, viva rehearsed.', tags: ['project'] }
        ],
        roadmapHeading: 'Four quarters across ISC Class 12 — board-aware.',
        roadmapLede: 'Paced around the CISCE calendar. Full pause during pre-boards and boards.',
        roadmap: [
            { label: 'Q1 · Jul–Sep · Core DS', title: 'Inheritance + linked list', body: 'Most of the intimidating data structure content done early. By Puja break, linked lists and stacks are second nature.', tags: ['oop', 'linked list'] },
            { label: 'Q2 · Oct–Nov · Recursion + sort', title: 'Recursion and sorting drilled', body: 'All classic recursion patterns. Three sorting algorithms. Complexity explained. Project is delivered in parallel.', tags: ['recursion', 'sort'] },
            { label: 'Q3 · Dec–Feb · Mocks', title: '5 full sample papers', body: 'Under timed conditions. Scored. Gaps reviewed. Lab file finalised. Viva rehearsed.', tags: ['mocks'] },
            { label: 'Q4 · Mar+ · Board support', title: 'On-call support', body: 'During boards, no new content. Phone/WhatsApp for any doubt. After boards, pre-college sprint starts.', tags: ['board', 'college'] }
        ],
        compareHeading: 'ISC CS 12 vs CBSE CS 12 vs CBSE IP 12.',
        compareLede: 'Honest comparison at the board-year level.',
        compare: {
            highlight: 0,
            columns: [
                { label: 'ISC CS 12 (this page)' },
                { label: 'CBSE CS 12', link: '/computer-science-class-12-cbse' },
                { label: 'CBSE IP 12' }
            ],
            rows: [
                { label: 'Language', values: ['Java', 'Python + SQL', 'Python + Pandas + SQL'] },
                { label: 'Data structures', values: ['Linked list, stack, queue, BST', 'Stacks, queues (Python)', 'Pandas Series / DF'] },
                { label: 'Recursion', values: ['Heavy', 'Light', 'None'] },
                { label: 'Complexity / Big-O', values: ['Formally tested', 'Mentioned', 'None'] },
                { label: 'SQL', values: ['No', 'Yes', 'Yes'] },
                { label: 'Difficulty', values: ['Highest', 'Medium', 'Lower'] }
            ]
        },
        reviewsHeading: 'ISC Class 12 CS parents and students.',
        reviewsLede: 'Three recent Class 12 ISC reviews.',
        reviews: [
            { initial: 'S', name: 'Siddharth V.', meta: 'Student · Delhi · 1-on-1', body: 'ISC Class 12 CS — linked list was breaking me. Teacher rebuilt it in 6 sessions using hand-drawn diagrams first, then Java. Pre-boards: 93. Project was a library system using linked list. Full marks.' },
            { initial: 'P', name: 'Preeti K.', meta: 'Parent · Kolkata · Group · ISC 12', body: 'Small group of 3 ISC Class 12 CS students. Very serious batch. Teacher runs timed paper simulations — forces them to write code within the 3-hour window. My daughter scored 94 in boards.' },
            { initial: 'A', name: 'Amit M.', meta: 'Parent · Mumbai · 1-on-1', body: 'Joined mid-year because my son\'s school teacher was weak on recursion. Four months of 1-on-1 fixed it — he finished recursion, sorting, plus the project. Board result: 91. He will take CS in college.' }
        ],
        faqs: [
            { q: 'What exactly does ISC Class 12 CS cover?', a: 'CISCE ISC Class 12 CS syllabus — Section A (OOP + inheritance + recursion), Section B (data structures — linked list, stacks, queues, BST), Section C (complexity + networks). 70 theory + 30 practical.' },
            { q: 'Is the practical really strict?', a: 'Yes. ISC practicals have strict format expectations for the lab file and viva. We drill both.' },
            { q: 'How hard is linked list for ISC students?', a: 'It trips most students. We use diagrams first, then Java code. Takes 5 to 6 sessions to become comfortable — which is normal.' },
            { q: 'Is recursion heavily tested?', a: 'Yes — almost every year. We drill factorial, Fibonacci, sum, power, string recursion. With explanation, not just code.' },
            { q: 'Can an ISC student also learn Python?', a: 'Optional. Python is useful for college and broader CS work. Many ISC students add it for portfolio.' },
            { q: 'Is JEE Advanced CS covered?', a: 'No — that\'s a different prep. Our ISC course focuses on ISC paper plus college readiness.' },
            { q: 'Pre-board drop — can you help?', a: 'Yes. 4-week intensive between pre-boards and boards for students who dropped in pre-boards.' },
            { q: 'Free demo?', a: 'Yes. One full 1 hour live class with an ISC-aware Java teacher. No card. Refund in 2 weeks.' }
        ],
        relatedChips: [
            { href: '/computer-science-class-11-icse', small: 'Prev', label: 'CS Class 11 ICSE' },
            { href: '/computer-science-class-12-cbse', small: 'Compare', label: 'CS Class 12 CBSE' },
            { href: '/coding-for-icse-students', small: 'Board', label: 'Coding for ICSE' },
            { href: '/computer-applications-icse-class-10', small: 'Prev', label: 'ICSE CA Class 10' },
            { href: '/coding-for-class-12', small: 'Grade', label: 'Coding for Class 12' },
            { href: '/coding-for-17-year-olds', small: 'Age', label: 'Coding for 17 Year Olds' },
            { href: '/java-programming-for-kids-teens', small: 'Course', label: 'Java for Teens' },
            { href: '/ai-ml-course-for-teens', small: 'Course', label: 'AI & ML for Teens' }
        ],
        cityChips: CITY_CHIPS
    }

];
