'use strict';
// Oegstgeest: a village beside Leiden with the Groene Kerkje, the castles of
// Endegeest and Oud-Poelgeest, and Descartes as a resident in 1642.
// 26,095 residents.
// Spine (modest, per the Phase 5 method): Descartes, who lived at Endegeest,
// published his Discourse on Method in Leiden in 1637, with its advice to
// divide each difficulty into as many parts as needed. Programmers call the
// idea divide and conquer, and its sharpest form, halving, finds one number
// in a thousand with ten questions.

module.exports = {
  slug: 'coding-classes-in-oegstgeest',
  code: 'ogg',
  accent: '#0C665A',
  accentRationale: 'Oegstgeest: a deep green-church teal placed by the solver more than fifty units from every page it links to, Leiden and Voorschoten among them, with an unlinked district as its nearest neighbour',
  pageType: 'city',
  place: {
    name: 'Oegstgeest',
    eyebrow: 'Oegstgeest, Zuid-Holland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Zuid-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Oegstgeest, Netherlands',
  title: 'Coding Classes in Oegstgeest | Modern Age Coders',
  description: 'Live online coding, Python, AI and app classes for Oegstgeest, ages 6 to 67, from Oud Oegstgeest and Oudenhof to De Kwaak. The first lesson is free.',
  ogDescription: 'Live online coding, Python, AI and mathematics where Descartes once lived, on a page about solving big problems by splitting them.',
  twitterDescription: 'Oegstgeest classes for learners aged 6 to 67, live online, with a free first lesson.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Oegstgeest Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Oegstgeest, taught in English.'
  },

  h1: 'Coding classes in Oegstgeest, where Descartes lived and a big problem becomes small ones',
  capsuleQ: 'What are the best coding classes in Oegstgeest?',
  capsule: 'Oegstgeest, with 26,095 residents on 1 January 2026 by the national count, lies against Leiden, around a village whose Groene Kerkje stands where, legend says, Willibrord consecrated a church in the ninth century. Among its castles is Endegeest, where the philosopher and mathematician René Descartes lived in 1642, a few years after his Discourse on Method was published in Leiden. Its best-known piece of advice, to divide each difficulty into as many parts as possible, is also the most useful idea in programming. Programmers call it divide and conquer, and in its sharpest form, halving, it finds one number among a thousand in at most ten questions. Modern Age Coders teaches live online in English, for ages 6 to 67; the first lesson is free, and then a group costs USD 100 a month and one-to-one tuition USD 150.',
  lead: 'Think of a number between one and a thousand. A careless guesser tries numbers one after another and may need a thousand tries. A careful one asks whether it is above five hundred, then halves what is left, and halves again, and is certain to have it within ten questions, because ten halvings reduce a thousand possibilities to one. That is the whole trick of divide and conquer: split a problem so that each part is smaller and simpler than the whole, solve the parts, and put the answers together. Descartes, who lived for a time at Endegeest in Oegstgeest, put a version of it at the heart of his method, published in Leiden in 1637. Computer science turned it into sorting methods that handle millions of items, searches that find one record among billions, and the way good programmers break any large task into pieces small enough to get right.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Oegstgeest.',

  picks: {
    eyebrow: 'Course picks for Oegstgeest',
    h2: 'Four courses for the village beside Leiden',
    intro: 'A child in De Kwaak who wants to build a guess-my-number game, a teenager in Oudenhof learning how search and sorting really work, a student in Oegstgeest Noord facing a project too big to start, and an adult in Oud Oegstgeest who wants to break messy work problems into steps a computer can do. Each of them can take the first lesson free.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'A guess-my-number game in Python that learns to ask the halving question, and a child who can explain why it always wins in ten.' },
      { course: 'maths-through-coding', band: 'Ages 11 to 14', note: 'Halving, powers of two and logarithms met through code, so the mathematics behind fast search becomes something a learner has built.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Divide-and-conquer algorithms, recursion and task decomposition in Python, from binary search to breaking a project into testable parts.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Large reporting and AI tasks split into small, checkable steps before any tool is asked to do them.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Oegstgeest today',
      h2: 'A ninth-century church site, two castles, and a philosopher in 1642',
      intro: 'Oegstgeest is divided by the statistics office into five wijken, Oud Oegstgeest, Oudenhof, De Kwaak, Oegstgeest Noord and Oegstgeest West, and 15 buurten. On 729 hectares of land and 67 of water it has a published density of 3,574 residents per square kilometre.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The Groene Kerkje', p: 'In the ninth century a small church stood where the Groene Kerkje stands today, consecrated, according to legend, by Willibrord. The oldest spelling of the name that has been found is Osgeresgeest, in a tenth-century document.' },
          { h3: 'Two castles', p: 'The castles of Oud-Poelgeest and Endegeest date from the medieval period, according to the encyclopaedia entry for Oegstgeest.' },
          { h3: 'Descartes at Endegeest', p: 'René Descartes, philosopher and mathematician, who lived from 1596 to 1650, lived at kasteel Endegeest in 1642. His Discourse on Method had first been published in Leiden, in 1637.' }
        ] },
        { kind: 'p', text: 'The older parts of the village include the Kerkbuurt, the Leidse Buurt, the Poelgeesterbuurt, the Mors, the Bazar and the Rijsjes, with twentieth-century neighbourhoods such as the Wilhelminapark, the Julianapark and Haaswijk around them. The municipality grew from 19,445 residents in 1995 to 26,095 in 2026.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Halving',
      h2: 'How many questions it takes to find one number',
      intro: 'Each halving question cuts the possibilities in two. The table shows how few questions are needed, and how fast the advantage grows with the size of the problem.',
      body: [
        { kind: 'table', caption: 'Guessing one number, one at a time or by halving', head: ['Possible numbers', 'Guessing one after another, worst case', 'Halving, worst case', 'Why'], rows: [
          ['16', '16 guesses', '4 questions', '2 to the power 4 is 16'],
          ['1,000', '1,000 guesses', '10 questions', '2 to the power 10 is 1,024'],
          ['1,000,000', '1,000,000 guesses', '20 questions', '2 to the power 20 is just over a million'],
          ['1,000,000,000', 'a billion guesses', '30 questions', '2 to the power 30 is just over a billion']
        ] },
        { kind: 'p', text: 'Multiplying the problem by a thousand adds only ten questions to the halving method, while the one-after-another method needs a thousand times more work. This is why a sorted list of a billion names can be searched almost instantly, and why so much of computer science is about finding ways to split a problem into halves or smaller parts. The same principle runs through sorting, where a large list is split, each half is sorted, and the sorted halves are merged, and through ordinary programming, where a task that seems impossible as a whole becomes a series of small functions, each simple enough to write and test. Descartes wrote about problems of reasoning, not about computers, and the page does not claim otherwise. His advice simply turned out to describe one of the most powerful ideas the field has.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Oegstgeest in the national statistics',
      intro: 'The figures published for the municipality, each with its year, followed by the encyclopaedia history and the arithmetic used on this page.',
      body: [
        { kind: 'table', caption: 'Oegstgeest in the statistics', head: ['Measure', 'Figure', 'Year'], rows: [
          ['Residents', '19,445; 23,153; 26,058; 26,095', '1995, 2013, 2025, 2026'],
          ['Men and women', '12,628 and 13,430', '2025'],
          ['Under fifteen, 15 to 25, 25 to 45', '4,559; 2,849; 5,940', '2026'],
          ['45 to 65, and 65 or over', '7,030 and 5,717', '2026'],
          ['Households, single-person, with children', '11,255; 3,862; 4,141', '2025'],
          ['Dwellings, owner-occupied, rented', '11,286; 8,239; 3,047', '2025'],
          ['Primary establishments and pupils', '12 and 3,361', 'latest'],
          ['Secondary establishments and pupils', '4 and 2,678', 'latest']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Income and homes', p: 'Average income was 47,400 euro per resident and 60,100 per income recipient in 2024, with 2.0 percent of residents in poverty. The estimated average home value was 600,000 euro in 2025, and 73 percent of dwellings were owner-occupied.' },
          { h3: 'Origin', p: 'In 2025, 18,020 residents were of Dutch origin, 3,346 of European and 4,692 of non-European origin, together 26,058; 21,255 were born in the Netherlands and 4,803 abroad.' },
          { h3: 'The arithmetic', p: '26,095 minus 19,445 is 6,650. 3,361 pupils over 12 establishments is about 280, and 2,678 over 4 about 670. Every group in the table was added up against its total and matches. The halving table uses powers of two and nothing from the statistics.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with the municipality of Oegstgeest, Endegeest, the Groene Kerkje or any school in the area, and nothing on the page suggests one. The statistics are those published for Oegstgeest for the years stated. The church, the early spelling, the castles, Descartes at Endegeest and the neighbourhoods come from the encyclopaedia entry for Oegstgeest, which gives 26,096 residents on 1 January 2026 and an area of 7.97 square kilometres, from a different source; the publication of the Discourse in Leiden comes from the entry for that book.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Split it until each part is easy',
      intro: 'Divide and conquer is a way of thinking before it is an algorithm. A learner can practise both halves of it, the fast search and the careful breakdown, in a single project.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Build the halving search', p: 'Write a guess-my-number program that always asks about the middle of what is left. Count the questions for different sizes and check them against the powers of two.' },
          { h3: '2. Break a big task down', p: 'Take a task that feels too big, such as a quiz app, and split it into parts until each part is one small function with a clear input and output. Write and test the parts one by one.' },
          { h3: '3. Put it back together', p: 'Combine the parts and test the whole. If the whole fails while every part works, the problem lies in how the parts were split or joined, and that is the next thing to examine.' }
        ] },
        { kind: 'table', caption: 'Divide and conquer at work', head: ['Where', 'How the problem is split', 'What is gained', 'What must be true'], rows: [
          ['Searching a sorted list', 'look at the middle and keep only the half that can hold the answer', 'a billion items in about thirty steps', 'the list must be sorted'],
          ['Sorting', 'split the list, sort each half, merge the results', 'millions of items sorted quickly', 'merging two sorted halves must be done carefully'],
          ['Finding a bug', 'test halfway through the program, then halfway through the half that fails', 'the faulty line found in a few steps', 'each test must give a clear yes or no'],
          ['Writing a program', 'one function per small job', 'code that can be written and checked in pieces', 'the pieces must fit together cleanly'],
          ['Descartes\' method', 'divide each difficulty into parts', 'problems made manageable', 'the parts must be solvable one at a time']
        ] },
        { kind: 'callout', h3: 'Why AI works better on problems that have been split', p: 'AI assistants are most reliable on small, clearly defined tasks and least reliable on large, vague ones. Ask for a whole application in one request and the result is often long, plausible and subtly wrong in ways that are hard to find. Split the same job into parts, each with a clear purpose and a test, and the assistant can help with every part while the person keeps track of how they fit together. Many AI tools now try to do this splitting themselves, planning a task in steps before carrying it out, and the quality of the result depends heavily on whether the split was a good one. That judgement, how to cut a problem so that each part is small, independent and checkable, is the part of divide and conquer that remains human. A learner who has halved a search to ten questions and broken an app into testable functions has practised it twice. Descartes\' advice was written for reasoning in general, nearly four centuries ago, a few kilometres from where these lessons are joined; it applies to programming, and to working with AI, as well as it ever did.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for breaking problems down',
      intro: 'For searches, sorting, debugging, projects and AI-assisted work. Worked through in the village where Descartes lived.',
      body: [
        { kind: 'table', caption: 'Dividing well', head: ['Habit', 'In practice', 'What it avoids', 'What it yields'], rows: [
          ['Halve when you can', 'Look for a question that rules out half the possibilities', 'Checking things one by one', 'Search that stays fast as data grows'],
          ['Small, testable parts', 'Split a task until each part is one clear function', 'Code too big to understand', 'Pieces you can trust'],
          ['Clear inputs and outputs', 'Define what each part receives and returns', 'Parts that do not fit together', 'Clean joins'],
          ['Bisect bugs', 'Test halfway, then halfway again, to find a fault', 'Hours of reading code line by line', 'Faults found in a few steps'],
          ['Split before asking AI', 'Give AI tools one well-defined part at a time', 'Large, plausible, wrong answers', 'Help you can check']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A guessing game played first with a friend and then against the computer. The child discovers that asking about the middle always wins faster, and teaches the computer to do it.' },
          { h3: 'For teenagers', p: 'Binary search and merge sort written in Python and timed on growing lists. The teenager plots the steps needed and connects them to powers of two.' },
          { h3: 'For adults', p: 'A large task at work split into small steps on paper before any tool is opened. Adults often find the splitting itself reveals which part was really the hard one.' }
        ] },
        { kind: 'p', text: 'This section uses the encyclopaedia\'s note that Descartes lived at Endegeest and the publication of his Discourse in Leiden as context, and standard computer science for the rest. It does not claim that Descartes wrote about computing.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a guessing game to splitting problems for AI',
    intro: 'Where a learner starts is decided in the free lesson from the way they work on something real. Neither age alone nor which wijk they live in decides it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Ask about the middle', p: 'Children learn that halving wins a guessing game fastest.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Powers of two', p: 'Learners count halving steps in Python and link them to powers of two.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Search and sort', p: 'Teenagers write binary search and merge sort and time them.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Split the job', p: 'Adults break large tasks into checkable parts for people and AI.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can take on a huge task in one go. Why should a teenager in Oegstgeest learn to split it first?',
    intro: 'Because a big problem cut into small, checkable parts is one a person can actually verify.',
    p1: 'Modern AI tools will attempt almost any task in a single request, and the answer usually looks complete. Large answers to large requests are also where subtle errors hide, because nobody can check a thousand lines at once. Tools that plan their own steps help, but only as much as the plan is sound, and a plan that splits a problem badly produces parts that each look fine and fail together.',
    p2: 'A learner who has turned a thousand possibilities into ten questions, and a daunting project into small functions that each pass their tests, knows how to make a problem checkable. Deciding where to cut, what each part should do and how the parts will be tested together are judgements a person makes, and they decide whether AI help can be trusted. The assistant can solve the parts. Choosing the parts is the human skill.',
    closer: 'So the case for a child in Oegstgeest learning to code in 2026 is not the castles or the famous resident. It is that someone who can split a problem into parts small enough to check will be needed wherever AI is handed tasks too large for anyone to verify whole.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Lessons that reach every wijk of Oegstgeest',
    intro: 'From Oud Oegstgeest by the Groene Kerkje to Oegstgeest West, the village is compact, and a class at home is equally close to every street.',
    cells: [
      { h3: 'Right at home', p: 'A learner in De Kwaak and a learner in Oegstgeest Noord join the same lesson at the same moment from their own homes, with no trip into Leiden.' },
      { h3: 'School words in Dutch', p: 'Groep, brugklas, vmbo, havo, vwo and the profielkeuze stay in Dutch, as Oegstgeest families use them, and the teaching is in English.' },
      { h3: 'A free lesson with a real task', p: 'The first hour is a real lesson. Afterwards the teacher suggests a level, a course and a weekly time; no payment details are asked for.' },
      { h3: 'Groups beyond the village', p: 'Five to ten learners at one stage. Oegstgeest has 4,559 residents under fifteen, far too few to fill every level and hour locally, so groups include learners from other places.' },
      { h3: 'Regio Midden holidays', p: 'Twice a week, about eight lessons a month, at one fixed hour, with breaks for the regio Midden holidays of Zuid-Holland.' },
      { h3: 'Evening-friendly hours', p: 'The teachers are in India, three and a half hours ahead of Oegstgeest in summer and four and a half in winter, so late afternoons, evenings and weekend mornings all work.' }
    ],
    spec: { title: 'Sixteen schools, five wijken, and one group online', p: 'Oegstgeest has 12 primary establishments teaching 3,361 pupils and 4 secondary establishments teaching 2,678. A coding group needs five learners who match on subject, stage and hour at once, and they are found far more easily across all ages from 6 to 67 and many countries than inside one village.' }
  },

  fees: {
    h2: 'Oegstgeest fees',
    intro: 'Three prices, with nothing added later.',
    first: 'A real lesson on a real task, finishing with a level and a course.',
    group: 'Per month, normally eight lessons, five to ten learners at one level.',
    private: 'Per month, normally eight lessons, one learner with a teacher.',
    closer: 'The fee is set in dollars and is the same everywhere, with no euro list, so a family in Oudenhof pays what a family in Oegstgeest West pays. Nothing is charged until the free lesson has fixed a course and a time, and payment is then arranged over WhatsApp. The pricing page explains pauses, a change of format and missed lessons.'
  },

  reviewsH2: 'Six Google reviews, printed as their writers left them',

  book: {
    h2: 'Tell us what the learner can do',
    intro: 'The first task might be a guessing game that learns to halve, a count of halving steps against powers of two, or a large task split into small parts before any code is written.',
    success: 'Thank you. Your Oegstgeest class request has been sent.'
  },

  faq: {
    h2: 'Oegstgeest coding class questions',
    intro: 'The village, its history, its figures, and the lessons.',
    items: [
      { q: 'Which wijken does Oegstgeest have?', a: 'The statistics office divides Oegstgeest into five wijken, Oud Oegstgeest, Oudenhof, De Kwaak, Oegstgeest Noord and Oegstgeest West, with 15 buurten between them.' },
      { q: 'How many people live in Oegstgeest?', a: 'The national count was 26,095 on 1 January 2026, in 11,255 households in 2025. In 1995 it was 19,445.' },
      { q: 'Did Descartes really live in Oegstgeest?', a: 'Yes. According to the encyclopaedia, René Descartes, the philosopher and mathematician, lived at kasteel Endegeest in 1642. His Discourse on Method had been published in Leiden in 1637.' },
      { q: 'What is the Groene Kerkje?', a: 'The church that stands where, in the ninth century, a small church stood that legend says was consecrated by Willibrord. The oldest spelling of the village name found so far is Osgeresgeest, from a tenth-century document.' },
      { q: 'Which castles are in Oegstgeest?', a: 'The encyclopaedia names Oud-Poelgeest and Endegeest, both dating from the medieval period.' },
      { q: 'How many schools are there in Oegstgeest?', a: 'The statistics count 12 primary establishments teaching 3,361 pupils and 4 secondary establishments teaching 2,678. This page rates no school.' },
      { q: 'What language are lessons in, and at what time?', a: 'The lessons are in English, with Dutch school words such as brugklas, havo and vwo left as they are. With the teachers in India, three and a half hours ahead of Oegstgeest in summer and four and a half in winter, late-afternoon, evening and weekend times are easy to find. The time is agreed in the free lesson, and regio Midden holidays are kept.' },
      { q: 'Is there a Modern Age Coders classroom in Oegstgeest?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Oegstgeest coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Leiden region and beyond',
    h2: 'Next door to Leiden, and across the province',
    html: 'Oegstgeest\'s neighbour has its own page at <a class="cg-inline-link" href="/coding-classes-in-leiden">coding classes in Leiden</a>, and a little further south along the Vliet lies <a class="cg-inline-link" href="/coding-classes-in-voorschoten">Voorschoten</a>. Every town and city in the province with a page is gathered on <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. For machine learning from the first lesson there is the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the whole series is listed on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Chat on WhatsApp'
  },

  footerHeading: 'Oegstgeest, Zuid-Holland and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-leiden', label: 'Leiden' },
    { href: '/coding-classes-in-zuid-holland', label: 'Zuid-Holland' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-ogg .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 2.9vw, 2.35rem); }
.cg-root.cg-ogg .cg-hero h1 { font-weight: 640; letter-spacing: -0.018em; line-height: 1.08; }
.cg-root.cg-ogg .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.3rem; }
.cg-root.cg-ogg .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ogg .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.015em; }
.cg-root.cg-ogg .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.8rem); }
.cg-root.cg-ogg .cg-card { border-radius: 8px; border-top: 3px solid var(--cg-accent-soft); }
.cg-root.cg-ogg .cg-table caption { letter-spacing: 0.04em; font-weight: 700; }
.cg-root.cg-ogg .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ogg .cg-table td:nth-child(3) { font-weight: 700; }
.cg-root.cg-ogg .cg-ladder-col { border-bottom: 2px solid var(--cg-accent-soft); padding-bottom: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Oegstgeest, Zuid-Holland: 26,095 residents (statistics, 1 January 2026), 26,058 (2025), 23,153 (2013), 19,445 (1995); 12,628 men and 13,430 women (2025); ages (2026) 4,559 under fifteen, 2,849 fifteen to twenty-five, 5,940 twenty-five to forty-five, 7,030 forty-five to sixty-five, 5,717 sixty-five or over; 11,255 households (2025) averaging 2.26, 3,862 one-person, 7,393 multi-person, 4,141 with children; 797 hectares, 729 land, 67 water, published density 3,574; 11,286 dwellings (2025), 8,239 owner-occupied at 73 percent, 3,047 rented at 27 percent; estimated average value 600,000 euro; income 47,400 euro per resident and 60,100 per recipient (2024); 2.0 percent in poverty; origin (2025) 18,020 Dutch, 3,346 European, 4,692 non-European, 21,255 born in the Netherlands and 4,803 abroad; 5 wijken (Oud Oegstgeest, Oudenhof, De Kwaak, Oegstgeest Noord, Oegstgeest West), 15 buurten; 12 primary establishments with 3,361 pupils, 4 secondary with 2,678. Encyclopaedia (Oegstgeest): in the ninth century a small church, by legend consecrated by Willibrord, stood on the site of the present Groene Kerkje; the oldest spelling found is Osgeresgeest, in a tenth-century document; the castles Oud-Poelgeest and Endegeest date from that period; Rene Descartes (1596-1650), philosopher and mathematician, lived at kasteel Endegeest in 1642; neighbourhoods Kerkbuurt, Leidse Buurt, Poelgeesterbuurt, Mors, Bazar, Rijsjes, and twentieth-century Wilhelminapark, Julianapark and Haaswijk; 26,096 residents on 1 January 2026 and 7.97 square kilometres, not combined with the statistics. Encyclopaedia (Discours de la methode): first published in Leiden, 1637. Regio Midden holidays. The city page teaches divide and conquer.',
    localProject: 'Split the problem until each part is easy. Descartes lived at Endegeest in Oegstgeest in 1642, and his Discourse on Method, first published in Leiden in 1637, advised dividing each difficulty into parts; the page uses this as context, not as a claim that Descartes wrote about computing. A halving table shows 16, 1,000, a million and a billion possibilities needing at most 4, 10, 20 and 30 halving questions against the same numbers of one-by-one guesses, because each question removes half. The programming form covers binary search, merge sort, bisecting to find a bug, and decomposing a program into small testable functions; for AI, tools are most reliable on small, well-defined parts, and planning tools are only as good as their split. The defences are asking halving questions, splitting until each part is one clear function, defining inputs and outputs, bisecting bugs, and giving AI one well-defined part at a time. Chosen after a case-sensitive check found no page using divide and conquer, binary search or Descartes. Distinct from Gouda, which concerns failures hidden at the joints of a sequential pipeline, from Velsen, which concerns the slowest stage, and from Nissewaard, which splits an average into its groups.',
    requiredMentions: [
      '19,445',
      '23,153',
      '11,255',
      'Haaswijk',
      '4,141',
      '11,286',
      '8,239',
      '3,047',
      '3,361',
      '2,678',
      'Endegeest',
      'Oud-Poelgeest',
      'Osgeresgeest',
      'Oudenhof'
    ],
    sources: [
      { claim: 'Gemeente Oegstgeest: 26,095 inwoners (2026), 26,058 (2025), 23,153 (2013), 19,445 (1995); mannen 12,628, vrouwen 13,430; ages 0-15 4,559, 15-25 2,849, 25-45 5,940, 45-65 7,030, 65+ 5,717; 11,255 huishoudens, 3,862 eenpersoons, 7,393 meerpersoons, 4,141 met kinderen, gemiddeld 2.26 (2025); 797 hectare, land 729, water 67; bevolkingsdichtheid 3,574; woningvoorraad 11,286, koop 8,239 (73 percent), huur 3,047 (27 percent) (2025); gemiddelde WOZ 600,000 euro; gemiddeld inkomen per inwoner 47,400 and per inkomensontvanger 60,100 euro (2024); personen in armoede 2.0 percent; basisonderwijs 12 vestigingen 3,361 leerlingen, voortgezet onderwijs 4 vestigingen 2,678 leerlingen; herkomst Nederland 18,020, Europa 3,346, buiten Europa 4,692, geboren in Nederland 21,255, buiten Nederland 4,803 (2025); 5 wijken (Oud Oegstgeest, Oudenhof, De Kwaak, Oegstgeest Noord, Oegstgeest West), 15 buurten.', url: 'https://allecijfers.nl/gemeente/oegstgeest/' },
      { claim: 'Oegstgeest (encyclopaedia): In de negende eeuw stond op de plaats van het huidige Groene Kerkje een volgens de legende door Willibrord gewijd kerkje. Oldest spelling Osgeresgeest, in a tenth-century document. Uit deze tijd dateren de kastelen Oud-Poelgeest en Endegeest. Rene Descartes (1596-1650), filosoof en wiskundige, woonde in 1642 op kasteel Endegeest. Neighbourhoods Kerkbuurt, Leidse Buurt, Poelgeesterbuurt, Mors, Bazar, Rijsjes; Wilhelminapark, Julianapark, Haaswijk. De gemeente telt 26.096 inwoners (1 januari 2026, bron: CBS) en heeft een oppervlakte van 7,97 km2.', url: 'https://nl.wikipedia.org/wiki/Oegstgeest' },
      { claim: 'Discours de la methode (encyclopaedia): het boek werd oorspronkelijk gepubliceerd in Leiden, Nederland, in 1637.', url: 'https://nl.wikipedia.org/wiki/Discours_de_la_m%C3%A9thode' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any claim that Descartes wrote about computing or algorithms. The page presents his advice on dividing difficulties as a general method that later computing echoes.',
      'The exact wording of the rules in the Discourse. The encyclopaedia entry read does not quote them, so the page paraphrases the well-known second rule.',
      'Any claim about the Leiden Bio Science Park, international schools or Rhijngeest. Not in the sentences read.',
      'Any comparison of the encyclopaedia figure of 26,096 with the statistics figure of 26,095. Two sources that disagree is the Breda argument.',
      'Any reading of the absence of higher-education institutions in the row. That is the Westland argument.',
      'Anything the Leiden, Voorschoten and Zuid-Holland pages own, including their figures and arguments.'
    ]
  }
};
