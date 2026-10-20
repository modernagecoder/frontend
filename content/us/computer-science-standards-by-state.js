'use strict';
// Computer science standards by state (ag- state data door; US cluster Phase 3, row 53).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources read raw on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/computer-science-standards-by-state/):
//  - Code.org (2025). 2025 State of AI + CS Education, full report (CC BY-NC-SA 4.0). Summary: "4 out of 50 states emphasize
//    AI in their CS standards". Rubric on advocacy.code.org/stateofdigitalfluency/: a state has K-12 AI + CS standards if,
//    within the CS standards, "There is a specific strand/topic that is named AI" or "AI concepts and skills are integrated
//    throughout each grade band"; standards in development are marked in progress. Toggles on the 51 state pages read by
//    our script and checked by eye (Nebraska, Oregon, South Dakota, Vermont, Kansas, Wisconsin): CS Standards 44 yes,
//    6 no (DC, Maine, Minnesota, Oregon, South Dakota, Vermont), 1 in progress (Nebraska); AI + CS Standards 4 yes
//    (Colorado, North Dakota, Ohio, Virginia, matching the published 4), 6 in progress (Iowa, Kentucky, Oregon, South
//    Dakota, Tennessee, Wisconsin); State Plan 35 yes, 1 in progress (Wisconsin). These are our counts of the toggles.
//    State page text: Colorado standards "position AI as one of six core strands"; Ohio "frames AI as one of six strands";
//    North Dakota "Computer Science & Cyber Security standards"; Virginia "emphasizes AI concepts in the state's
//    elementary, middle, and high school computer science standards"; South Dakota AI in elementary and middle standards,
//    "high school standards development is in progress"; Tennessee "in the process of revising its computer science
//    standards to emphasize AI"; Wisconsin "released a draft of updated computer science standards that include AI for
//    public comment in September 2025"; Kentucky "the current revision of its computer science standards".
//  - CodeAI 10 Policies page (revised September 24, 2026): tiered rubric; standards are Historic when they "have not been
//    revised within the past 5 years". Not applied to 2025 statuses.
//  - K12CS framework FAQ (k12cs.org): five core concepts, seven core practices; concepts delineated at "Grades 2, 5, 8, and
//    12"; "The framework is not a set of standards."; "more than 530 reviews submitted".
//  - NC DPI, NC Computer Science Standards: grade bands "K-2, 3-5, and 6-8"; "Introduction to Computer Science (ICS)";
//    "derived originally from the CSTA standards"; the same five core concepts.
// Blocked or unreachable on 17 October 2026: Virginia DOE (403), Colorado CDE (did not connect), Ohio DEW (empty page),
// CSTA standards site (Cloudflare block). Not retried.
// Our own material, labelled: the practice set (one middle school task per core concept), the Python mean and median example
// and its output, and the reading guide.
// Lesson family: summarising data with the statistics module (Data and Analysis concept).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const STD_ROWS = [
  ["Alabama", "Yes", "No", "Yes"],
  ["Alaska", "Yes", "No", "Yes"],
  ["Arizona", "Yes", "No", "No"],
  ["Arkansas", "Yes", "No", "Yes"],
  ["California", "Yes", "No", "Yes"],
  ["Colorado", "Yes", "Yes", "No"],
  ["Connecticut", "Yes", "No", "Yes"],
  ["Delaware", "Yes", "No", "No"],
  ["District of Columbia", "No", "No", "No"],
  ["Florida", "Yes", "No", "No"],
  ["Georgia", "Yes", "No", "Yes"],
  ["Hawaii", "Yes", "No", "Yes"],
  ["Idaho", "Yes", "No", "Yes"],
  ["Illinois", "Yes", "No", "No"],
  ["Indiana", "Yes", "No", "Yes"],
  ["Iowa", "Yes", "In progress", "Yes"],
  ["Kansas", "Yes", "No", "No"],
  ["Kentucky", "Yes", "In progress", "Yes"],
  ["Louisiana", "Yes", "No", "Yes"],
  ["Maine", "No", "No", "Yes"],
  ["Maryland", "Yes", "No", "Yes"],
  ["Massachusetts", "Yes", "No", "Yes"],
  ["Michigan", "Yes", "No", "No"],
  ["Minnesota", "No", "No", "Yes"],
  ["Mississippi", "Yes", "No", "Yes"],
  ["Missouri", "Yes", "No", "Yes"],
  ["Montana", "Yes", "No", "No"],
  ["Nebraska", "In progress", "No", "Yes"],
  ["Nevada", "Yes", "No", "Yes"],
  ["New Hampshire", "Yes", "No", "Yes"],
  ["New Jersey", "Yes", "No", "Yes"],
  ["New Mexico", "Yes", "No", "Yes"],
  ["New York", "Yes", "No", "Yes"],
  ["North Carolina", "Yes", "No", "Yes"],
  ["North Dakota", "Yes", "Yes", "Yes"],
  ["Ohio", "Yes", "Yes", "Yes"],
  ["Oklahoma", "Yes", "No", "Yes"],
  ["Oregon", "No", "In progress", "Yes"],
  ["Pennsylvania", "Yes", "No", "No"],
  ["Rhode Island", "Yes", "No", "Yes"],
  ["South Carolina", "Yes", "No", "No"],
  ["South Dakota", "No", "In progress", "No"],
  ["Tennessee", "Yes", "In progress", "Yes"],
  ["Texas", "Yes", "No", "No"],
  ["Utah", "Yes", "No", "Yes"],
  ["Vermont", "No", "No", "No"],
  ["Virginia", "Yes", "Yes", "No"],
  ["Washington", "Yes", "No", "Yes"],
  ["West Virginia", "Yes", "No", "Yes"],
  ["Wisconsin", "Yes", "In progress", "In progress"],
  ["Wyoming", "Yes", "No", "Yes"]
];

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'STATE DATA', blurb: 'K-12 computer science standards in every US state and DC, including which states have put AI into their standards.' },
  slug: 'computer-science-standards-by-state',
  code: 'cssb',
  accent: '#7A495D',
  accentRationale: 'CS standards by state: a muted plum, #7A495D as allocated, warm enough to set it apart from the cluster navies and with strong contrast on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'CS standards by state',
  title: 'K-12 Computer Science Standards by State, With AI',
  description: 'K-12 computer science standards in all 50 states and DC: which states have adopted them, which put AI into them, and the five concepts most states build on.',
  ogDescription: 'Forty-four states show adopted K-12 CS standards in the 2025 Code.org report, and four emphasize AI. The full table, the shared framework behind most standards, and a practice set.',
  twitterDescription: 'Which states have K-12 computer science standards, and which include AI.',
  pageName: 'Computer Science Standards by State',
  webPageDescription: 'A state-by-state reference to K-12 computer science standards in the United States, with AI in standards, the K12CS framework concepts, and a practice set for middle school students.',
  courseDescription: 'Live online computer science classes for US students in grades 3 to 12, built on the concepts that state CS standards share, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'CS standards by state',
  navLinks: [
    { href: '#states', label: 'State table' },
    { href: '#ai', label: 'AI in standards' },
    { href: '#concepts', label: 'Five concepts' },
    { href: '#practice', label: 'Practice set' },
    { href: '#python', label: 'Python example' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; K-12 &middot; What students are expected to learn',
  h1: 'Computer science standards by state',
  lede: 'Standards are the list of what a state expects students to know and do in each grade band. For computer science, most states now have them, a handful do not, and only four had written artificial intelligence clearly into them in the 2025 State of AI + CS Education report. Below is every state and DC in one table, the AI picture in detail, the shared framework that most state standards grew from, and a short practice set so a student can see what the standards actually ask for.',
  secondaryCta: { href: '#states', label: 'See the state table' },
  wa: 'Hello Modern Age Coders, my child is in a US school and I want to understand the computer science standards. Could we book a free first lesson?',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ students &middot; grades 3 to 12 in computer science',
  spec: [
    ['States with CS standards', '44 plus 1 in progress'],
    ['AI in CS standards', '4 states'],
    ['Report', 'Code.org (2025)'],
    ['Core concepts', 'Five, from K12CS'],
    ['Our classes', 'Live, online'],
    ['Formats', 'Batch or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Most US states have K-12 computer science standards. Reading the state pages of Code.org (2025), 2025 State of AI + CS Education, we count 44 states with standards adopted, Nebraska in progress, and six without: DC, Maine, Minnesota, Oregon, South Dakota and Vermont. Only four states emphasize AI in their CS standards: Colorado, North Dakota, Ohio and Virginia. Six more were revising toward it. Modern Age Coders teaches this live online for US students, in a batch or one to one, and the first class is free.',

  picks: {
    eyebrow: 'Learn what the standards describe',
    h2: 'Three courses mapped to the standards&rsquo; core ideas',
    lede: 'Programming, data, computing systems and the impact of computing, taught live and in order.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'CSSB / 01', title: 'Coding for kids', note: 'Ages 6 to 12. Algorithms and programming through games and apps.' },
      { course: 'python-complete-masterclass-teens', code: 'CSSB / 02', title: 'Python for teens', note: 'Ages 13 to 18. Programming plus data and analysis.' },
      { course: 'ap-computer-science-principles-exam-prep-course', code: 'CSSB / 03', title: 'AP CS Principles', note: 'Grades 9 to 12. Every core concept, and the AP exam.' }
    ]
  },

  sections: [
    {
      id: 'states', tint: 'tint', eyebrow: 'Every state and DC',
      h2: 'Which states have computer science standards',
      lede: 'Three policies from each state page of the 2025 report. "In progress" means the state had begun writing or revising but had not published when the data were finalized on December 1, 2025.',
      body: [
        { kind: 'table', caption: 'K-12 computer science standards, AI in standards and state CS plans, by state (Code.org, 2025; read 17 October 2026)', head: ['State', 'K-12 CS standards', 'AI emphasized in CS standards', 'State CS plan'], rows: STD_ROWS },
        { kind: 'source', html: 'Source: Code.org (2025). 2025 State of AI + CS Education, <a class="ag-inline-link" href="https://advocacy.code.org/stateofdigitalfluency/" rel="noopener" target="_blank">state report pages</a> (CC BY-NC-SA 4.0). The organisation now trades as CodeAI. Statuses are our reading of each published toggle; the AI column matches the report&rsquo;s printed total of four. We have no connection with Code.org or with any state.' },
        { kind: 'two', mt: true,
          leftH3: 'The six "No" rows',
          left: [
            'The District of Columbia, Maine, Minnesota, Oregon, South Dakota and Vermont show no adopted K-12 CS standards in the 2025 data, and Nebraska shows standards in progress. Schools in those places still teach computer science; they simply lack a statewide set of grade-band expectations under the report&rsquo;s rubric.',
            'South Dakota is a useful reminder that one column rarely tells the whole story. Its state page says AI concepts are already in its elementary and middle school CS standards and that "high school standards development is in progress".'
          ],
          rightH3: 'Standards are not requirements',
          right: [
            'Having standards does not mean every student must take computer science. Standards describe what a CS course or unit should cover; a graduation requirement decides who must take one. A state can have detailed standards and no requirement at all.',
            'For a parent, standards are most useful as a checklist: if your child&rsquo;s school offers CS, the state standards tell you what a good course in that grade band should include.'
          ] }
      ]
    },
    {
      id: 'ai', tint: 'deep', eyebrow: 'AI in the standards',
      h2: 'The four states that put AI into their CS standards',
      lede: 'The report counts a state only if its CS standards either name a specific AI strand or topic, or integrate AI concepts and skills through every grade band. Four did.',
      body: [
        { kind: 'table', caption: 'States emphasizing AI in K-12 CS standards, and how, from their 2025 report pages', head: ['State', 'How the report describes it'], rows: [
          ['Colorado', 'Standards "position AI as one of six core strands" across elementary, middle and high school'],
          ['North Dakota', 'AI concepts emphasized across its elementary, middle and high school "Computer Science &amp; Cyber Security standards"'],
          ['Ohio', 'Frames AI as one of six strands that cut across elementary, middle and high school CS standards'],
          ['Virginia', '"emphasizes AI concepts in the state&rsquo;s elementary, middle, and high school computer science standards"']
        ] },
        { kind: 'table', mt: true, caption: 'States marked in progress toward AI in CS standards (Code.org, 2025)', head: ['State', 'What the state page says'], rows: [
          ['Iowa', 'Marked in progress; the page lists AI in standards among next steps'],
          ['Kentucky', 'A "current revision" of its CS standards is under way'],
          ['Oregon', 'Marked in progress; the state also has no adopted K-12 CS standards in the report'],
          ['South Dakota', 'AI already in elementary and middle standards; high school standards in progress'],
          ['Tennessee', '"in the process of revising its computer science standards to emphasize AI"'],
          ['Wisconsin', 'A draft including AI went out for public comment in September 2025']
        ] },
        { kind: 'p', mt: true, html: 'A note on dates: the report&rsquo;s data were finalized on December 1, 2025. Wisconsin planned to finalize its standards by the end of 2025, so its status may well have changed since. Check the state education department for the version in force.' }
      ]
    },
    {
      id: 'concepts', tint: 'tint', eyebrow: 'The shared framework',
      h2: 'Why most state standards look alike: the five core concepts',
      lede: 'Many states wrote their standards from the K-12 Computer Science Framework, a set of conceptual guidelines developed by national organizations with state representatives. It is not itself a set of standards, which is why each state&rsquo;s version differs in detail.',
      body: [
        { kind: 'table', caption: 'The K-12 Computer Science Framework: core concepts and core practices (k12cs.org, read 17 October 2026)', head: ['Five core concepts', 'Seven core practices'], rows: [
          ['Computing Systems', 'Fostering an Inclusive Computing Culture'],
          ['Networks and the Internet', 'Collaborating Around Computing'],
          ['Data and Analysis', 'Recognizing and Defining Computational Problems'],
          ['Algorithms and Programming', 'Developing and Using Abstractions'],
          ['Impacts of Computing', 'Creating Computational Artifacts'],
          ['', 'Testing and Refining Computational Artifacts'],
          ['', 'Communicating About Computing']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How the framework is organized',
          left: [
            'The framework sets expectations for each concept at four grade band endpoints: the end of grades 2, 5, 8 and 12. The practices are written as a narrative of growth rather than split by grade.',
            'Its FAQ says plainly that "The framework is not a set of standards." States turn it into measurable performance expectations, and that is where their versions diverge.'
          ],
          rightH3: 'One state as an example',
          right: [
            'North Carolina&rsquo;s standards are "derived originally from the CSTA standards" and built around the same five concepts. They are organized by grade band from kindergarten to grade 8 (K-2, 3-5 and 6-8) and by course in high school, starting with "Introduction to Computer Science (ICS)".',
            'Expect a similar shape in most states: grade bands through middle school, then course-based standards in high school.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://k12cs.org/" rel="noopener" target="_blank">K-12 Computer Science Framework</a> and its FAQ; NC Department of Public Instruction, NC Computer Science Standards. Read 17 October 2026.' }
      ]
    },
    {
      id: 'reading', tint: 'deep', eyebrow: 'Reading your state&rsquo;s standards',
      h2: 'How to read a state CS standard in five minutes',
      lede: 'Our short guide for parents opening a state standards document for the first time.',
      body: [
        { kind: 'ol', items: [
          '<b>Find your child&rsquo;s grade band.</b> Most states group kindergarten to grade 8 into bands such as K-2, 3-5 and 6-8.',
          '<b>Look for the concept label</b> on each line, often an abbreviation of one of the five concepts, such as Algorithms and Programming.',
          '<b>Read the verb.</b> "Create", "debug" and "analyze" ask far more than "identify" or "describe".',
          '<b>Check for AI.</b> In a few states it is a named strand; in most it appears, if at all, inside Data and Analysis or Impacts of Computing.',
          '<b>Compare with the school course.</b> Ask which standards the course covers and how student work is assessed against them.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Revision cycles matter',
          left: [
            'CodeAI&rsquo;s newer rubric, revised on September 24, 2026, treats standards as historic if they "have not been revised within the past 5 years". Computing changes quickly, so the age of a document is worth noticing.',
            'That newer rubric was published after the 2025 data, so the table on this page does not use its tiers.'
          ],
          rightH3: 'What standards leave out',
          right: [
            'Standards describe outcomes, not lessons. They will not tell you which language a school uses, how many hours a week CS gets, or whether a teacher is trained in it.',
            'Those questions belong to the school. The standards simply give you the vocabulary to ask them.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice set',
      h2: 'Five middle school tasks, one per core concept',
      lede: 'Our own practice set for grades 6 to 8. Each task matches one of the five concepts, so a student can see what a standard asks in practice. Answers are discussed in class, not printed here.',
      body: [
        { kind: 'table', caption: 'A grades 6 to 8 practice set across the five core concepts (ours)', head: ['Concept', 'Task', 'What it shows'], rows: [
          ['Computing Systems', 'List what happens, step by step, between pressing a key and a letter appearing on screen', 'Hardware and software working together'],
          ['Networks and the Internet', 'Explain why a large file is split into packets, using a mailed jigsaw as the comparison', 'How data travels'],
          ['Data and Analysis', 'Record a week of daily temperatures and find the mean and median (see the code below)', 'Summarising data'],
          ['Algorithms and Programming', 'Write a loop that prints the 7 times table up to 70, then change it to any number', 'Loops and variables'],
          ['Impacts of Computing', 'Name one benefit and one risk of a school using face recognition for attendance', 'Weighing technology&rsquo;s effects']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'For grades 3 to 5', p: 'Do the same five tasks out loud or on paper, with block code for the loop. The concepts are the same; the tools are simpler.' },
          { h3: 'For grades 6 to 8', p: 'Write the loop and the data task in real code, and write two sentences for the impact task.' },
          { h3: 'For high school', p: 'Extend each one: a packet simulation, a full data report, and a written argument with sources.' }
        ] }
      ]
    },
    {
      id: 'python', tint: 'deep', eyebrow: 'Data and Analysis in code',
      h2: 'A Python example for the data task',
      lede: 'The data task from the practice set, in a few lines of Python. It uses only the standard library, so it runs anywhere Python 3 is installed.',
      body: [
        { kind: 'code', label: 'temperatures.py (our example)', lang: 'Python 3', code: 'import statistics\n\n# one week of noon temperatures in degrees Fahrenheit (our sample data)\ntemps = [61, 64, 58, 70, 73, 66, 59]\n\nprint("mean:", round(statistics.mean(temps), 1))\nprint("median:", statistics.median(temps))\nprint("warmest day:", temps.index(max(temps)) + 1)', note: 'Output: mean 64.4, median 64, warmest day 5. The sum is 451 and 451 / 7 = 64.43, so the mean rounds to 64.4. Sorting gives 58, 59, 61, 64, 66, 70, 73, and the middle value is 64.' },
        { kind: 'two', mt: true,
          leftH3: 'Which standards this touches',
          left: [
            'Data and Analysis, through collecting and summarising data. Algorithms and Programming, through variables, lists and built-in functions.',
            'The extension question "why might the mean and median differ?" moves the task from following steps to analysing, which is what higher-level standards ask for.'
          ],
          rightH3: 'Make it harder',
          right: [
            'Ask the student to read the temperatures from a file instead of typing them, then to chart them. Both steps appear in high school standards in many states.',
            'Then ask what would change with thirty days instead of seven. Larger samples are where summary statistics start to earn their keep.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where students are',
    h2: 'Four stages through the standards',
    lede: 'How students usually move through what the standards describe.',
    table: { caption: 'Stages through K-12 CS standards (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Explorer', 'Uses block code to make things move and respond'],
      ['2. Builder', 'Writes loops and conditions, fixes simple bugs'],
      ['3. Analyst', 'Works with data, files and functions in a typed language'],
      ['4. Designer', 'Plans, builds and tests a project for real users']
    ] },
    left: { h3: 'For parents', ps: [
      'Stages do not map neatly to grades. A keen fifth grader can be a builder; a tenth grader new to CS starts as an explorer.',
      'The five concepts are a better guide than any single grade label.'
    ] },
    right: { h3: 'For students', ps: [
      'If something in your school&rsquo;s CS course feels too easy or too hard, find its concept in the table and ask for the next step.',
      'Projects that touch several concepts at once teach the most.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses across the grade bands',
    lede: 'Grouped by grade band; each one runs live with the same teacher each week, as a group class or privately.',
    bands: [
      { num: 'I', h3: 'Elementary', sub: 'Grades 3 to 5', courses: [
        { code: 'CSSB / E / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Algorithms in blocks.' },
        { code: 'CSSB / E / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Logic and patterns.' },
        { code: 'CSSB / E / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How AI works, age-appropriately.' }
      ] },
      { num: 'II', h3: 'Middle school', sub: 'Grades 6 to 8', courses: [
        { code: 'CSSB / M / 01', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'The first typed language.' },
        { code: 'CSSB / M / 02', slug: 'kids-ai-web-development-course', title: 'Web development for kids', blurb: 'Pages, networks and the internet.' },
        { code: 'CSSB / M / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Data and number in Python.' }
      ] },
      { num: 'III', h3: 'High school', sub: 'Grades 9 to 12', courses: [
        { code: 'CSSB / H / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Programming and data in depth.' },
        { code: 'CSSB / H / 02', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP CS Principles', blurb: 'All five concepts.' },
        { code: 'CSSB / H / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Where the standards are heading.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons organised by concept, not by worksheet',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school times across US time zones.' },
      { time: 'Weekends', l: 'Longer project sessions suit weekends.' },
      { time: '1-on-1', l: 'Aligned to your state&rsquo;s grade band.' }
    ],
    cells: [
      { h3: 'Concept by concept', p: 'Each unit names the standard it serves.' },
      { h3: 'One teacher', p: 'The same person every week.' },
      { h3: 'Code that runs', p: 'Ideas become working programs.' },
      { h3: 'AI with care', p: 'Age-appropriate tools only.' },
      { h3: 'Every state', p: 'Live online, nationwide.' },
      { h3: 'Two formats', p: 'Groups of fifteen to twenty, or private.' }
    ]
  },

  projectsH2: 'What our students have made',
  projectsLede: 'Projects from our learners that cover programming, data and design. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents&rsquo; Google reviews, as written.',

  fees: {
    h2: 'Fees',
    lede: 'Monthly billing in US dollars, with no term contract. Families often use a few months of classes to fill a gap the school year leaves in one concept.',
    free: ['A free first lesson', 'A concept-by-concept check', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Matched to your grade band', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Computer science standards: common questions',
    items: [
      { q: 'How many states have K-12 computer science standards?', a: 'Reading the state pages of Code.org (2025), 2025 State of AI + CS Education, we count 44 states with adopted standards and Nebraska in progress. DC, Maine, Minnesota, Oregon, South Dakota and Vermont were marked as not having them.' },
      { q: 'Which states include AI in their computer science standards?', a: 'Four, according to the 2025 report: Colorado, North Dakota, Ohio and Virginia. Iowa, Kentucky, Oregon, South Dakota, Tennessee and Wisconsin were marked as in progress.' },
      { q: 'What are the five core concepts?', a: 'Computing Systems; Networks and the Internet; Data and Analysis; Algorithms and Programming; and Impacts of Computing. They come from the K-12 Computer Science Framework, which many states used to write their standards.' },
      { q: 'Are standards the same as a graduation requirement?', a: 'No. Standards describe what a CS course should cover in each grade band. A graduation requirement decides whether every student must take one. A state can have one without the other.' },
      { q: 'What does it mean when a state is in progress?', a: 'In the report, it means the state had publicly begun creating or revising standards but had not published them when the data were finalized on December 1, 2025.' },
      { q: 'Is the K-12 CS Framework a set of standards?', a: 'No. Its own FAQ says the framework is not a set of standards. States use it to write measurable standards of their own.' },
      { q: 'My state has no standards. Does that matter for my child?', a: 'It mainly means schools have less shared guidance. Many still teach strong CS. The five core concepts are a sensible checklist for any course, wherever you live.' },
      { q: 'Do your classes follow a particular state\'s standards?', a: 'Our courses cover the five core concepts that most state standards share, and in 1-on-1 classes the teacher can align topics to your state\'s grade band.' },
      { q: 'When can my child take classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with Code.org or a state department?', a: 'Not at all. Modern Age Coders runs its own classes; this page only reports what those organisations publish, with links.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US families following computer science through school.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Our hub for US families.' },
      { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina', p: 'The NC standards and requirement.' },
      { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles', p: 'The broadest high school CS course.' },
      { href: '/homeschool-coding-curriculum', label: 'Homeschool coding', p: 'Using the concepts at home.' },
      { href: '/coding-for-10-year-olds', label: 'Coding for 10-year-olds', p: 'Where elementary CS starts.' },
      { href: '/ai-and-machine-learning-classes-in-usa', label: 'AI and machine learning', p: 'For students who want more AI.' },
      { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state', p: 'High school computer science access and enrollment in every US state, 2025 data.' },
      { href: '/ai-guidance-for-schools-by-state', label: 'AI guidance for schools by state', p: 'State AI guidance for schools, all 50 states and DC, from the 2025 Code.org report.' },
      { href: '/common-core-math-vs-traditional-math', label: 'Common Core math vs traditional math', p: 'Common Core and traditional math compared from the standards, with a worked example.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Share the grade and the state you live in. In the first session the teacher checks your child against the five concepts and suggests where to begin.',
    readFirst: 'Curious about our approach? Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or look through <a class="ag-inline-link" href="/courses">every course outline</a>.',
    note: 'Lessons are taught live by video from India, at times that suit US families. Message us on WhatsApp for the quickest reply.',
    formNote: 'Free first lesson; we never ask for a card.'
  },

  footer: {
    cols: [
      { h4: 'School computer science', links: [
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A' },
        { href: '/homeschool-coding-curriculum', label: 'Homeschool coding' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
        { href: '/coding-classes-in-new-york', label: 'New York' },
        { href: '/coding-classes-in-georgia', label: 'Georgia' }
      ] }
    ],
    bottomRight: 'Five concepts, fifty-one rows'
  },

  personalityCss: `
.ag-root.ag-cssb .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-cssb .ag-capsule { border-left-width: 3px; border-radius: 4px; }
.ag-root.ag-cssb .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-cssb .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-cssb .ag-steps { gap: 0.9rem; }
.ag-root.ag-cssb .ag-band-head h3 { letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'Code.org (2025), 2025 State of AI + CS Education, read raw 17 October 2026: 4 of 50 states emphasize AI in CS standards (Colorado, North Dakota, Ohio, Virginia); six in progress; our toggle counts 44 states with CS standards, Nebraska in progress, six without; state plan 35; rubric wording for AI + CS standards; state page wording for CO, ND, OH, VA, SD, TN, WI, KY; data finalized December 1, 2025. CodeAI 10 Policies (revised September 24, 2026): historic if not revised in 5 years. K12CS framework: five concepts, seven practices, grade 2, 5, 8 and 12 endpoints, not a set of standards. NC DPI standards: K-2, 3-5, 6-8 bands, ICS, derived from CSTA.',
    localProject: 'Our grades 6 to 8 practice set with one task per core concept, and our Python statistics example (mean 64.4, median 64, warmest day 5; sum 451). Lesson family: summarising data with the statistics module.',
    requiredMentions: ['position AI as one of six core strands', 'Computer Science &amp; Cyber Security standards', 'high school standards development is in progress', 'in the process of revising its computer science standards to emphasize AI', 'The framework is not a set of standards.', 'Introduction to Computer Science (ICS)', 'derived originally from the CSTA standards', 'have not been revised within the past 5 years', 'September 24, 2026', 'grades 2, 5, 8 and 12', 'mean 64.4, median 64', 'statistics.median'],
    sources: [
      { claim: '2025 State of AI + CS Education: state pages, AI + CS standards rubric and totals.', url: 'https://advocacy.code.org/stateofdigitalfluency/' },
      { claim: 'CodeAI 10 Policies tiered rubric, revised September 24, 2026.', url: 'https://code.org/en-US/10policies' },
      { claim: 'K-12 Computer Science Framework: concepts, practices, grade band endpoints.', url: 'https://k12cs.org/' },
      { claim: 'NC Computer Science Standards: grade bands, ICS, five concepts.', url: 'https://www.dpi.nc.gov/districts-schools/classroom-resources/computer-science-it-and-technology-education/nc-computer-science-standards' }
    ],
    rejectedClaims: [
      'Adoption years for each state\'s standards: not in the report and state sites could not be read (Virginia 403, Colorado did not connect, Ohio empty, CSTA blocked) on 17 October 2026.',
      'Tiers from the September 2026 rubric applied to 2025 statuses: not done; the page keeps the 2025 binary statuses.',
      'CSTA standards text: the CSTA site blocked our request, so the page quotes only NC\'s statement that its standards derive from CSTA.',
      'Any claim that our courses are aligned to a named state\'s standards: refused; we say the courses cover the shared five concepts.',
      'Any affiliation with Code.org (CodeAI), K12CS, CSTA or any state: none.'
    ]
  }
};
