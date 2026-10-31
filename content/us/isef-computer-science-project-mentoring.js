'use strict';
// Regeneron ISEF computer science and math project mentoring (ag- competition door; UK and US exams cluster Phase 2,
// row US074). Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Read raw with curl on 31 October 2026;
// copies in keyword-research-2026-09/uk-us-gap/src/isef-computer-science-project-mentoring/:
//  - societyforscience.org/isef: "the world's largest international pre-college science competition"; "more than 1,600
//    high-school students from nearly every state in the U.S. and more than 60 countries, regions, and territories";
//    competing "starts at a Society-affiliated fair"; "22 different scientific categories"; "the 2027 Regeneron ISEF in
//    Los Angeles, California, in May 2027". Award amounts on the page not printed.
//  - /isef/categories-and-subcategories (lists the 22 categories "used at Regeneron ISEF 2026"): finalists choose their
//    own category; affiliated fairs may use other categories; judges assigned by subcategory; pick the primary
//    subcategory rather than Other. Category pages: Software Design definition and subcategories ALG, CYB, DAT, HMC,
//    LNG, APP, LRN, OTH; Mathematics definition and ALB, ANL, CGG, GEO, NUM ("related topics such as cryptography"), PRO,
//    OTH; Robotics and Intelligent Machines definition and BIE, COG, CON, MAC ("projects that use machine learning as a
//    tool to interpret data should be placed in the category/sub-category of the data or results"), KIN, OTH.
//    Photo captions name individual finalists: not printed.
//  - 2027 Forms: 2027-22-Categories.pdf (sample abstract certification: "represents one year's work only").
//  - International Rules 2026-2027 (Rules Book.pdf): eligibility grades 9-12, not age 20 on or before May 1 preceding
//    ISEF; one project; "no more than 12 months of continuous research and may not include research performed before
//    January 2026"; teams "no more than three members"; demonstrations and literature reviews "not recommended or
//    appropriate"; AI rule 8; research plan sections a to g; "If a mentor is to be involved in the project, the research
//    plan should delineate what parts of the project are to be done by the student vs. those to be done by the mentor.";
//    required forms 1, 1A, research plan, 1B, Student Support Disclosure Form (2A); Form 2C when work was "conducted or
//    mentored either virtually or on site at a regulated research institution, industrial setting, or any work site
//    other than home, school or field"; 250-word abstract; human participant exemption for computer applications tested
//    only by the student; roles of student, Adult Sponsor, Qualified Scientist, Direct Supervisor; ethics statement:
//    "The project should reflect independent research done by the student(s) and be presented in their own words".
//  - Form 2A text: "Paid Support Disclosure", "Did you or your parents pay for any support for this project?",
//    including "mentorship, documentation preparation"; AI Usage Disclosure.
//  - FINAL Rule Modifications for 2026-27 PDF: the AI rule and the seven research plan sections are among the changes.
//  - Generative-AI-Use-Table.pdf (Society for Science, Oct 2025): using AI to initially write the research plan,
//    abstract, paper or poster is "Never acceptable".
// Our own material, labelled on the page: the made-up Software Design project and its research plan outline, the
// seeded maze experiment in Python 3.14 (40 seeds, 30 solvable mazes of 30 by 30 with 25 percent walls; the distance
// hint expanded a median 41.3 percent fewer cells, range 23.7 to 66.1 percent, same path length every time), the
// practice set and the timeline. Lesson family: paired comparison across seeded trials, reported as median and range.
// Siblings read so as not to repeat: ai-research-programs-for-high-school-students, science-fair-project-ideas-ai,
// machine-learning-competitions-for-high-school-students.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const MAZE = '# Our example experiment: does a distance hint (A*) expand fewer cells than plain search (Dijkstra)?\nimport heapq, random, statistics\n\ndef make_grid(seed, size=30, wall_chance=0.25):\n    rng = random.Random(seed)\n    grid = [[rng.random() < wall_chance for _ in range(size)] for _ in range(size)]\n    grid[0][0] = grid[size - 1][size - 1] = False\n    return grid\n\ndef search(grid, use_hint):\n    n = len(grid); goal = (n - 1, n - 1)\n    hint = (lambda r, c: (goal[0] - r) + (goal[1] - c)) if use_hint else (lambda r, c: 0)\n    frontier = [(hint(0, 0), 0, (0, 0))]\n    cheapest = {(0, 0): 0}; expanded = 0\n    while frontier:\n        _, cost, (r, c) = heapq.heappop(frontier)\n        if cost > cheapest[(r, c)]:\n            continue\n        expanded += 1\n        if (r, c) == goal:\n            return expanded, cost\n        for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < n and 0 <= nc < n and not grid[nr][nc]:\n                if cost + 1 < cheapest.get((nr, nc), 10**9):\n                    cheapest[(nr, nc)] = cost + 1\n                    heapq.heappush(frontier, (cost + 1 + hint(nr, nc), cost + 1, (nr, nc)))\n    return expanded, None          # no path in this maze\n\nsavings, skipped = [], 0\nfor seed in range(40):\n    g = make_grid(seed)\n    plain, length1 = search(g, use_hint=False)\n    hinted, length2 = search(g, use_hint=True)\n    if length1 is None:\n        skipped += 1\n        continue\n    assert length1 == length2      # both must find equally short paths\n    savings.append(1 - hinted / plain)\n\nprint(len(savings), "solvable mazes,", skipped, "skipped")\nprint("median saving", round(100 * statistics.median(savings), 1), "%")\nprint("range", round(100 * min(savings), 1), "to", round(100 * max(savings), 1), "%")';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPETITION', blurb: 'Regeneron ISEF computer science and math projects for 2027: choosing among the 22 categories, the 2026-2027 rules on mentors, paid support and AI, and a seeded experiment in Python.' },
  slug: 'isef-computer-science-project-mentoring',
  code: 'icsp',
  accent: '#5D6594',
  accentRationale: 'Regeneron ISEF computer science project mentoring: a slate blue #5D6594 from the US allocation table, 5.28:1 on paper #FBF8F2, cooler and calmer than the competition greens and browns on the robotics pages',
  pageType: 'market',
  market: US,
  routeLabel: 'ISEF computer science project mentoring',
  title: 'ISEF Computer Science Project Mentoring: 2027 Rules Guide',
  description: 'Regeneron ISEF computer science and math project help for 2027: the 22 categories, rules on mentors, paid support and AI, and how to design a fair experiment.',
  ogDescription: 'Software Design, Robotics or Mathematics? How to place a computer science project at Regeneron ISEF, what the 2026-27 rules say a mentor may do, and a seeded experiment in Python.',
  twitterDescription: 'ISEF CS and math projects: categories, mentor rules, a fair experiment.',
  pageName: 'ISEF Computer Science Project Mentoring',
  webPageDescription: 'A guide for US high school students, parents and teachers to computer science and mathematics projects for the 2027 Regeneron ISEF, from Society for Science pages and the 2026-2027 International Rules, with an original research plan outline and a seeded experiment in Python.',
  courseDescription: 'Live online classes for high school students planning a computer science or math research project: Python, algorithms, machine learning and experimental method, taught on our own examples while the student does the project, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'ISEF CS project mentoring',
  navLinks: [
    { href: '#isef', label: 'ISEF 2027' },
    { href: '#categories', label: 'Categories' },
    { href: '#mentors', label: 'Mentor rules' },
    { href: '#plan', label: 'Research plan' },
    { href: '#experiment', label: 'Experiment' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 9 to 12 &middot; Projects for Regeneron ISEF 2027',
  h1: 'ISEF computer science project mentoring',
  lede: 'A computer science project that impresses doctoral-level judges is rarely the one with the most code. It is the one with a clear question, a fair test and an honest account of what the student did. This guide reads Society for Science&rsquo;s ISEF pages and the 2026 to 2027 International Rules for what matters to a CS or math student: which category to enter, what a mentor may and may not do, how paid help must be disclosed, and how to design an experiment whose result a judge can trust.',
  secondaryCta: { href: '#experiment', label: 'See the worked experiment' },
  wa: 'Hello Modern Age Coders, my child is planning a computer science project for a science fair that leads to Regeneron ISEF. Could we book a free first lesson to talk about method and coding skills?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; we teach method; the project is the student&rsquo;s',
  spec: [
    ['Competition', 'Regeneron ISEF, Society for Science'],
    ['Next ISEF', 'Los Angeles, May 2027'],
    ['Grades', '9 to 12, under 20 on May 1'],
    ['Research window', 'Up to 12 months, none before January 2026'],
    ['Teams', 'Up to three students'],
    ['Categories', '22, incl. Software Design and Mathematics'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Regeneron ISEF, run by Society for Science, is the pre-college science fair that students in grades 9 to 12 reach by winning at an affiliated fair. Computer science projects usually enter Software Design, Robotics and Intelligent Machines or Mathematics. Modern Age Coders teaches the Python, AI and research method live online, in a batch or 1-on-1; the student does the project.',

  picks: {
    eyebrow: 'Learn with a teacher',
    h2: 'Courses for student researchers',
    lede: 'Skills first: machine learning, algorithms and the Python to test an idea properly.',
    items: [
      { course: 'ai-ml-masterclass-teens', code: 'ICSP / 01', title: 'AI and machine learning for teens', note: 'Training, testing and judging models honestly, from Python to real models.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'ICSP / 02', title: 'Data structures and algorithms', note: 'The core of an Algorithms subcategory project.' },
      { course: 'data-science-course-for-teens-python-data', code: 'ICSP / 03', title: 'Data science for teens', note: 'Cleaning data, summarising it and showing results clearly.' }
    ]
  },

  sections: [
    {
      id: 'isef', tint: 'tint', eyebrow: 'Regeneron ISEF 2027',
      h2: 'What is Regeneron ISEF, and who can compete in 2027?',
      lede: 'Society for Science calls Regeneron ISEF the world&rsquo;s largest international pre-college science competition. Students cannot enter directly: they compete at a Society-affiliated local, regional or state fair and are selected there. The 2027 fair is in Los Angeles in May 2027.',
      body: [
        { kind: 'table', caption: 'Eligibility and limits from the International Rules: Guidelines for Science and Engineering Fairs 2026 to 2027 (read 31 October 2026)', head: ['Rule', 'What the International Rules say'], rows: [
          ['Grade', 'Grades 9 to 12 or equivalent'],
          ['Age', 'Must not have reached age 20 on or before May 1 preceding ISEF'],
          ['Projects', 'One project per student'],
          ['Research window', 'No more than 12 months of continuous research, and none performed before January 2026'],
          ['Teams', 'No more than three members, the same ones who competed at the affiliated fair'],
          ['Unsuitable projects', 'Demonstrations, literature reviews, library research and explanation models are not recommended or appropriate'],
          ['Language', 'English, for project boards and abstracts'],
          ['Abstract', 'A one-page abstract of at most 250 words, written after experimentation']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The size of it',
          left: [
            'Society for Science says that each year more than 1,600 high school students from nearly every US state and more than 60 countries, regions and territories compete at its affiliated fairs for a place at ISEF, where projects are judged by doctoral-level scientists.',
            'Its ISEF pages also host a searchable database of abstracts from 2014 to 2026, a useful way to see how strong projects frame a question in 250 words.'
          ],
          rightH3: 'Start with your local fair',
          right: [
            'Every path runs through an affiliated fair, and each fair sets its own deadlines, forms and review dates. Society for Science&rsquo;s find-a-fair tool lists them. Ask your school&rsquo;s science teacher which fair your school feeds.',
            'Projects that need review, such as any study with human participants, must be approved before experimentation starts, so the fair&rsquo;s calendar shapes the whole year.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.societyforscience.org/isef/" rel="noopener" target="_blank">Regeneron ISEF</a> and the <a class="ag-inline-link" href="https://www.societyforscience.org/isef/international-rules/" rel="noopener" target="_blank">International Rules for 2026 to 2027</a>, Society for Science, read 31 October 2026. Regeneron ISEF is a program of Society for Science. We are not connected with Society for Science, Regeneron or any affiliated fair.' }
      ]
    },
    {
      id: 'categories', tint: 'deep', eyebrow: 'Categories',
      h2: 'Which ISEF category fits a computer science or math project?',
      lede: 'Most coding projects belong in Software Design, Robotics and Intelligent Machines, or Mathematics, with Embedded Systems and Computational Biology and Bioinformatics as neighbours. The finalist chooses, and Society for Science advises picking the category whose judges are most qualified to assess the project.',
      body: [
        { kind: 'table', caption: 'Category definitions from Society for Science&rsquo;s ISEF category pages (the list is the one used at ISEF 2026, read 31 October 2026)', head: ['Category', 'How Society for Science defines it', 'Some subcategories'], rows: [
          ['Software Design (SFTD)', 'The study or development of software, information processes or methodologies to demonstrate, analyze or control a process or solution', 'Algorithms, Cybersecurity, Databases, Human/Machine Interface, Languages and Operating Systems, Mobile Apps, Online Learning'],
          ['Robotics and Intelligent Machines (ROBO)', 'Studies in which the use of machine intelligence is paramount to reducing the reliance on human intervention', 'Biomechanics, Cognitive Systems, Control Theory, Machine Learning, Robot Kinematics'],
          ['Mathematics (MATH)', 'The study of the measurement, properties and relationships of quantities and sets, using numbers and symbols', 'Algebra, Analysis, Combinatorics, Graph Theory and Game Theory, Geometry and Topology, Number Theory, Probability and Statistics'],
          ['Technology Enhances the Arts (TECA)', 'Named by the Software Design and Robotics pages as the home for studies designed for an artistic purpose', 'See the category page'],
          ['Embedded Systems (EBED); Computational Biology and Bioinformatics (CBIO)', 'Separate categories for hardware-software systems and for computing applied to biology', 'See each category page']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The machine learning rule',
          left: [
            'The Machine Learning subcategory is meant for projects about how machine learning works. Society for Science says projects that use machine learning as a tool to interpret data should be placed in the category of the data or results instead.',
            'So a model that improves how neural networks train is a ROBO project; a model that classifies plant leaves is probably a plant sciences project that happens to use code. That distinction decides which judges read the board.'
          ],
          rightH3: 'Subcategories matter more than they look',
          right: [
            'Judges at ISEF are assigned by subcategory expertise, so Society for Science advises choosing the primary subcategory rather than Other. Number Theory, for example, lists cryptography among its topics, which makes it a natural home for a cipher project.',
            'Local and state fairs may use different categories or none, and a student does not have to enter the same category at ISEF as at their earlier fair.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.societyforscience.org/isef/categories-and-subcategories/" rel="noopener" target="_blank">ISEF Categories and Subcategories</a>, with the Software Design, Mathematics and Robotics and Intelligent Machines pages, read 31 October 2026.' }
      ]
    },
    {
      id: 'mentors', tint: 'tint', eyebrow: 'Mentor rules',
      h2: 'What can a mentor do on an ISEF project?',
      lede: 'A mentor may teach and advise, but the research must be the student&rsquo;s. The International Rules say a research plan with a mentor should spell out which parts the student does and which the mentor does, and every project files a Student Support Disclosure Form, 2A, that asks whether the family paid for any support.',
      body: [
        { kind: 'table', caption: 'Who is who in an ISEF project, from the Roles and Responsibilities section of the 2026 to 2027 International Rules', head: ['Role', 'Who it can be', 'What the rules ask of them'], rows: [
          ['Student researcher', 'The student or a team of up to three', 'Responsible for all aspects of the project, from approvals and forms to experimentation, engineering and data analysis'],
          ['Adult Sponsor', 'A teacher, parent, professor or other professional scientist', 'Works with the student on risks, reviews the Student Checklist and research plan, and checks eligibility'],
          ['Qualified Scientist', 'A doctoral or professional degree holder, or someone with extensive expertise in the area', 'Approves the plan before experimentation and supervises, directly or through a Direct Supervisor; required for some study types'],
          ['Direct Supervisor', 'An adult familiar with the project, no advanced degree needed', 'Provides onsite supervision when the Qualified Scientist is not local'],
          ['Other supporting adults', 'Graduate students, relatives, external experts and others', 'Listed on Form 2A with their contribution and how long they helped']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Paid help must be disclosed',
          left: [
            'Form 2A asks directly: "Did you or your parents pay for any support for this project?" It asks the student to explain fees, tuition or payment for anything that supported the project, naming mentorship and documentation preparation as examples.',
            'If a family pays us for lessons that a student then uses on an ISEF project, the honest course is to list that on Form 2A. We tell families this before the first lesson, and we describe our role in writing so the student can disclose it accurately.'
          ],
          rightH3: 'Where work was mentored matters',
          right: [
            'The rules require Regulated Research Institution Form 2C when work was conducted or mentored, virtually or on site, at a regulated research institution, industrial setting or any work site other than home, school or field.',
            'Whether online lessons from a company like ours count is a question for the student&rsquo;s fair and its review committee. We advise families to ask early, in writing, rather than guess.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.societyforscience.org/isef/international-rules/" rel="noopener" target="_blank">International Rules 2026 to 2027</a>, including the Roles and Responsibilities section and Forms 2A and 2C, read 31 October 2026.' }
      ]
    },
    {
      id: 'ai', tint: 'deep', eyebrow: 'AI rules',
      h2: 'Can you use AI on an ISEF project in 2026 to 2027?',
      lede: 'Only as a cited resource. The 2026 to 2027 International Rules allow AI as a project resource if it is cited and acknowledged, but say a student may not use generative AI to write the research plan, abstract or poster, or to create citations, because it is known to hallucinate references.',
      body: [
        { kind: 'two',
          leftH3: 'What the rules and guidance say',
          left: [
            'Society for Science lists this AI rule among its final rule changes for 2026 to 2027. The ethics statement adds that inappropriate use of AI, like fraudulent data or plagiarism, is grounds for a project to fail to qualify.',
            'Its generative AI guidance table, dated October 2025, calls using AI to initially write the research plan, abstract, paper or poster never acceptable, and asks students to keep a logbook of prompts when AI helps develop ideas. Form 2A also has an AI usage disclosure.'
          ],
          rightH3: 'How we teach around it',
          right: [
            'Our lessons do not use chatbots to write anything for a project. Students learn to read papers themselves, write their own code and explain their own results, which is what judges probe in an interview.',
            'A machine learning model the student builds and trains is a different thing from generative AI writing their work. The first can be the research; the second is not allowed to be.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.societyforscience.org/isef/international-rules/" rel="noopener" target="_blank">International Rules 2026 to 2027</a>, the Final Rule Modifications for 2026 to 2027 and the Generative AI Use Table, read 31 October 2026. Affiliated fairs may adopt stricter AI policies.' }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Research plan',
      h2: 'What goes in an ISEF research plan for a software project?',
      lede: 'The 2026 to 2027 rules list seven parts: rationale, research question or engineering goal with expected outcomes, materials, procedures, risk and safety, data analysis and bibliography. Below, each is filled in for a made-up project of ours, to show the level of precision a plan needs.',
      body: [
        { kind: 'table', caption: 'A research plan outline for an invented Software Design project, Algorithms subcategory (written by us as an example, not a project to copy)', head: ['Section (from the rules)', 'Our example'], rows: [
          ['Rationale', 'Route-finding programs search many cells they never use. A distance hint may cut wasted work on grid maps.'],
          ['Question and expected outcome', 'On random 30 by 30 grids, does adding a distance hint reduce cells expanded without lengthening the path? Expected: fewer cells, equal path length.'],
          ['Materials', 'A laptop, Python, a random maze generator with fixed seeds, no human participants.'],
          ['Procedures', 'Generate 40 mazes from seeds 0 to 39. Run both searches on each. Record cells expanded and path length. Skip mazes with no path.'],
          ['Risk and safety', 'No physical risk; no personal data collected.'],
          ['Data analysis', 'For each maze, the saving is 1 minus hinted over plain. Report the median and range of savings across mazes.'],
          ['Bibliography', 'Textbook and peer-reviewed sources on graph search, read and cited by the student.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why this is still too small for ISEF',
          left: [
            'Our example tests a well-known idea, which makes it a good lesson and a weak project. The rules call demonstrations not appropriate for ISEF; a real project needs a question whose answer is not already in a textbook.',
            'A student could push it further: new kinds of maps, a new hint, or a measurement nobody has published. That step, finding the open question, is the student&rsquo;s.'
          ],
          rightH3: 'Software testing and human participants',
          right: [
            'The rules exempt from review a computer application tested only by the student researcher, with no health or safety hazard. Once other people try the app, review and approval are needed before testing.',
            'Testing a student-designed invention or prototype also requires a Risk Assessment Form 3. A software student who plans a user study should raise it with their Adult Sponsor before writing a line of survey.'
          ] }
      ]
    },
    {
      id: 'experiment', tint: 'deep', eyebrow: 'Worked experiment',
      h2: 'How do you show one algorithm beats another, fairly?',
      lede: 'Run both on the same inputs, many times, and compare them input by input. Report the typical difference and its spread, not one lucky run. Our seeded experiment below does exactly that for the made-up project above.',
      body: [
        { kind: 'code', label: 'Our seeded maze experiment', lang: 'Python', code: MAZE, note: 'Our own teaching program, standard Python with no libraries to install. Fixed seeds mean anyone can rerun it and get the same mazes, which is the point.' },
        { kind: 'table', mt: true, caption: 'Results of our run on Python 3.14, 31 October 2026 (our measurement)', head: ['Measure', 'Result'], rows: [
          ['Mazes generated', '40 (seeds 0 to 39)'],
          ['Mazes with a path', '30; 10 skipped because no path existed'],
          ['Path length', 'Identical for both searches in all 30 mazes'],
          ['Median saving in cells expanded', '41.3 percent'],
          ['Range of savings', '23.7 percent to 66.1 percent']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What makes it fair',
          left: [
            'Each maze is used by both searches, so a hard maze cannot favour one side. The program also checks both find equally short paths, so the saving is not bought with worse answers.',
            'Counting cells expanded, rather than seconds, removes noise from the laptop. Time can be measured too, but it should never be the only number.'
          ],
          rightH3: 'How to report it',
          right: [
            'A sentence a judge can trust: "Across 30 solvable seeded mazes, the distance hint expanded a median 41.3 percent fewer cells, ranging from 23.7 to 66.1 percent, with equal path lengths." It says what, how many, how much and how varied.',
            'The 10 skipped mazes also belong in the report. Leaving out inconvenient trials without saying so is how honest projects go wrong.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice set',
      h2: 'Practice problems in research method',
      lede: 'Five original problems, written by us, of the kind we use in class. Each answer explains the reasoning a judge would expect a student to give.',
      body: [
        { kind: 'ol', items: [
          '<b>Category.</b> A student trains a model to spot water pollution in satellite images. ROBO Machine Learning, or elsewhere? <i>Answer:</i> elsewhere, most likely an environmental category, because Society for Science places projects that use machine learning as a tool in the category of the data or results.',
          '<b>The window.</b> A student began collecting data in November 2025 and wants to enter ISEF 2027. What does the rule say? <i>Answer:</i> research for this cycle may not include work performed before January 2026, so the November and December data cannot be part of the project; the student should ask their fair about continuation rules.',
          '<b>A missing control.</b> A student times their new sorting method on one list and reports it is 3 times faster. What is wrong? <i>Answer:</i> one input, one run and possibly a different machine; both methods must run on the same many inputs, and the result reported as a typical value with its spread.',
          '<b>User testing.</b> A student wants ten classmates to try their study app. Can they start next week? <i>Answer:</i> not without approval. The exemption covers testing by the student researcher alone; involving other people requires IRB review and approval before testing.',
          '<b>Disclosure.</b> A family paid for weekly coding lessons that the student used on the project. Where does that go? <i>Answer:</i> on Form 2A, which asks whether the student or parents paid for any support and to explain it, including mentorship.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why method beats polish',
          left: [
            'Judges ask how a student knows their result is real. A plain project with a careful comparison usually answers that better than a polished app with no measurement.',
            'Teaching that habit is where we spend most of our time with research students.'
          ],
          rightH3: 'Where else this helps',
          right: [
            'The same habits suit summer research programs and competitions. Our <a class="ag-inline-link" href="/ai-research-programs-for-high-school-students">AI research programs guide</a> and <a class="ag-inline-link" href="/machine-learning-competitions-for-high-school-students">machine learning competitions guide</a> cover those routes.',
            'Students still choosing a topic can browse <a class="ag-inline-link" href="/science-fair-project-ideas-ai">our AI science fair project ideas</a> as a starting point, then make the question their own.'
          ] }
      ]
    },
    {
      id: 'timeline', tint: 'deep', eyebrow: 'A year plan',
      h2: 'A twelve-month plan for an ISEF computer science project',
      lede: 'Our suggested rhythm for a student aiming at fairs in early 2027 and ISEF in May 2027. Fair deadlines vary, so the student sets real dates with their Adult Sponsor.',
      body: [
        { kind: 'table', caption: 'A project year for the 2027 cycle (our plan, inside the rule that no research may predate January 2026)', head: ['When', 'Student&rsquo;s project work', 'Skills we can teach alongside'], rows: [
          ['Months 1 and 2', 'Read widely; narrow to one question', 'Reading a paper; Python basics'],
          ['Month 3', 'Write the research plan; get approvals if needed', 'Turning a question into a measurable claim'],
          ['Months 4 to 6', 'Build the software and the test harness', 'Algorithms, data structures, testing'],
          ['Months 7 and 8', 'Run the experiments, log everything', 'Seeds, repeated trials, avoiding leaks'],
          ['Month 9', 'Analyse results, including failures', 'Medians, ranges, simple charts'],
          ['Months 10 and 11', 'Write the abstract and board in own words', 'Explaining method aloud, without scripts'],
          ['Month 12', 'Affiliated fair, then ISEF if selected', 'Practice interviews on our example projects']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we will not do',
          left: [
            'We do not choose the question, write code for the project, run its experiments, analyse its data or write or edit its abstract, plan or board. The rules expect independent research in the student&rsquo;s own words, and we hold to that.',
            'We teach on our own examples, like the maze experiment above, and the student applies the skill to their own project.'
          ],
          rightH3: 'What a parent can ask',
          right: [
            'Ask your child to explain, in two minutes, what they measured and why the comparison is fair. If they can, the project is theirs and is in good shape.',
            'Ask the Adult Sponsor early which forms the project needs. Society for Science&rsquo;s rules wizard lists them from a few questions.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four steps from coder to researcher',
    lede: 'Strong coders are not automatically ready for research. These are the steps we see between writing programs and testing ideas.',
    table: { caption: 'From programmer to student researcher (our steps)', head: ['Step', 'What the student can do'], rows: [
      ['1. Builder', 'Writes working programs from a specification'],
      ['2. Tester', 'Checks programs against many inputs, not one'],
      ['3. Experimenter', 'Compares two methods fairly and reports median and spread'],
      ['4. Researcher', 'Asks a question whose answer is unknown and designs the test for it']
    ] },
    left: { h3: 'For parents and teachers', ps: [
      'The most common weakness in student CS projects is a missing comparison. Ask "compared with what?" about any result.',
      'Keep a record of any paid help as it happens. Filling in Form 2A accurately is far easier with dates and descriptions written down.'
    ] },
    right: { h3: 'For students', ps: [
      'Write your question so that a number answers it. "Is my app better?" cannot be tested; "Does it cut steps per task?" can.',
      'Keep a dated research notebook from the first day. Judges and review committees both trust a project whose history they can see.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for research-minded teens',
    lede: 'Online, live and with a single regular teacher, as a class or private lessons.',
    bands: [
      { num: 'I', h3: 'AI and data', sub: 'Grades 9 to 12', courses: [
        { code: 'ICSP / AI / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Models, tested honestly.' },
        { code: 'ICSP / AI / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'From raw data to results.' },
        { code: 'ICSP / AI / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The research workhorse.' }
      ] },
      { num: 'II', h3: 'Algorithms and systems', sub: 'For Software Design', courses: [
        { code: 'ICSP / AL / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms for teens', blurb: 'Structures and complexity.' },
        { code: 'ICSP / AL / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Fast, correct algorithms.' },
        { code: 'ICSP / AL / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'Defensive security basics.' }
      ] },
      { num: 'III', h3: 'Math and languages', sub: 'For Mathematics and beyond', courses: [
        { code: 'ICSP / MA / 01', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Explore conjectures in code.' },
        { code: 'ICSP / MA / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Structured, typed programs.' },
        { code: 'ICSP / MA / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ basics', blurb: 'Speed for heavy experiments.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Skills lessons alongside a research year',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, a steady weekly slot.' },
      { time: 'Weekends', l: 'Longer sessions for method and analysis.' },
      { time: '1-on-1', l: 'Skills matched to the student&rsquo;s chosen field.' }
    ],
    cells: [
      { h3: 'Our examples only', p: 'We never touch the project itself.' },
      { h3: 'Disclosure in writing', p: 'A note of our role for Form 2A.' },
      { h3: 'No AI ghostwriting', p: 'Students write every word.' },
      { h3: 'Fair comparisons', p: 'Seeds, repeats, median and spread.' },
      { h3: 'All US time zones', p: 'Live online, any state.' },
      { h3: 'Group size', p: 'Fifteen to twenty per batch, or one student.' }
    ]
  },

  projectsH2: 'Student work from our classes',
  projectsLede: 'Apps, games and AI projects made by our learners in class. More in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews parents left on Google, unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'Fair entry, travel and any lab costs are separate and paid to the fair or institution; our fee is for skills lessons only. We bill monthly, and if a student uses what they learn on an ISEF project, the family should list our lessons on Form 2A.',
    free: ['A free first lesson', 'A short Python and method check', 'No card needed'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A private teacher', 'Skills for the student&rsquo;s field', 'A written note of our role']
  },

  faq: {
    eyebrow: 'Questions from families and teachers',
    h2: 'ISEF computer science projects: what people ask',
    items: [
      { q: 'How do you get to Regeneron ISEF?', a: 'By competing at a Society-affiliated local, regional or state science fair and being selected there. Society for Science says competing at ISEF starts at an affiliated fair, and each fair sends the number of projects in its agreement.' },
      { q: 'Where and when is ISEF 2027?', a: 'Society for Science says the 2027 Regeneron ISEF will be in Los Angeles, California, in May 2027. Check its site for exact dates as they are published.' },
      { q: 'Which ISEF category is best for a computer science project?', a: 'Usually Software Design for software and algorithms, Robotics and Intelligent Machines for work on machine intelligence, or Mathematics for proofs and number theory. Projects that only use machine learning as a tool go in the category of the data they study.' },
      { q: 'Who is eligible for ISEF in 2027?', a: 'Students in grades 9 to 12 or equivalent who have not reached age 20 on or before May 1 preceding ISEF, and who are selected by an affiliated fair. Each student may enter one project, and teams may have up to three members.' },
      { q: 'Can a mentor help with an ISEF project?', a: 'Yes, within limits. The International Rules say a research plan with a mentor should set out which parts the student does and which the mentor does, and all support must be listed on Form 2A. The research must be the student\'s own.' },
      { q: 'Do you have to disclose paid tutoring or mentoring for ISEF?', a: 'Yes. Form 2A asks whether the student or their parents paid for any support for the project, and to explain it, naming mentorship and documentation preparation as examples. We give families a written description of our role.' },
      { q: 'Can I use generative AI on my ISEF project?', a: 'Only as a cited resource. The 2026-2027 rules say a student may not use generative AI to write the research plan, abstract or poster, or to create citations, and any AI use must be cited and disclosed on Form 2A.' },
      { q: 'Does a software project need IRB approval?', a: 'Not if the student researcher is the only person testing the program and there is no health or safety hazard. If other people test it, IRB review and approval are needed before testing begins.' },
      { q: 'How long can an ISEF project take?', a: 'No more than 12 months of continuous research, and for this cycle no research performed before January 2026. Continuation projects need extra documentation showing the new work is different.' },
      { q: 'When are your lessons?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with Society for Science or Regeneron?', a: 'No. Modern Age Coders is an independent coding school with no connection to Society for Science, Regeneron or any affiliated fair. We teach skills and method; we do not do projects.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for high school researchers',
    lede: 'Programs, contests and ideas around research.',
    items: [
      { href: '/ai-research-programs-for-high-school-students', label: 'AI research programs', p: 'Summer and school-year research options for teens.' },
      { href: '/machine-learning-competitions-for-high-school-students', label: 'Machine learning competitions', p: 'Contests where a model is scored on hidden data.' },
      { href: '/science-fair-project-ideas-ai', label: 'AI science fair project ideas', p: 'Starting points to make your own.' },
      { href: '/computer-science-summer-programs-for-high-school-students', label: 'CS summer programs', p: 'Where to build skills before a project year.' },
      { href: '/coding-competitions-for-high-school-students', label: 'High school coding competitions', p: 'For students who want contests as well as research.' },
      { href: '/us-coding-math-and-ai-competitions-calendar', label: 'US competitions calendar', p: 'Dates for this school year.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us your child&rsquo;s grade, their field of interest and how far the project has got. The teacher runs a short Python and method task and suggests which skills to build first.',
    readFirst: 'To understand our approach, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or look at <a class="ag-inline-link" href="/courses">our full course list</a>.',
    note: 'Teachers work from India and teach live by video at US after-school and weekend hours. WhatsApp is often the easiest way for families to reach us.',
    formNote: 'The first lesson is free, and booking it does not ask for a card.'
  },

  footer: {
    cols: [
      { h4: 'Research and contests', links: [
        { href: '/ai-research-programs-for-high-school-students', label: 'AI research programs' },
        { href: '/machine-learning-competitions-for-high-school-students', label: 'ML competitions' },
        { href: '/science-fair-project-ideas-ai', label: 'AI science fair ideas' },
        { href: '/us-coding-math-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] },
      { h4: 'High school coding', links: [
        { href: '/coding-classes-for-high-school-students', label: 'High school coding' },
        { href: '/computer-science-summer-programs-for-high-school-students', label: 'CS summer programs' },
        { href: '/computer-science-internships-for-high-school-students', label: 'CS internships' },
        { href: '/coding-classes-in-united-states', label: 'All US pages' }
      ] }
    ],
    bottomRight: 'A fair test, in your own words'
  },

  personalityCss: `
.ag-root.ag-icsp .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-icsp .ag-capsule { border-left-width: 3px; border-radius: 10px; }
.ag-root.ag-icsp .ag-section-head h2 { max-width: 36ch; }
.ag-root.ag-icsp .ag-table caption { text-align: left; font-weight: 500; font-style: italic; }
.ag-root.ag-icsp .ag-steps li { line-height: 1.68; }
.ag-root.ag-icsp .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'Read raw on 31 October 2026: societyforscience.org ISEF page (largest pre-college competition, 1,600+ students, 60+ countries, affiliated fairs, 22 categories, 2027 ISEF in Los Angeles in May 2027), the ISEF categories page and the Software Design, Mathematics and Robotics and Intelligent Machines pages (definitions, subcategories, machine learning placement rule), the International Rules page, the 2026-2027 International Rules book (eligibility, research window, teams, unsuitable projects, AI rule, research plan sections, mentor delineation, forms 1, 1A, 1B, 2A, 2C, 3, abstract, exemption for software tested only by the student, roles), Form 2A paid support and AI disclosure, the Final Rule Modifications for 2026-27, and the Generative AI Use Table (October 2025).',
    localProject: 'Our invented Software Design project and its seven-part research plan outline; our seeded maze experiment in Python 3.14 (40 seeds, 30 solvable 30 by 30 mazes, median 41.3 percent fewer cells expanded with a distance hint, range 23.7 to 66.1 percent, equal path lengths, 10 mazes skipped); five practice problems; a twelve-month plan. Lesson family: paired comparison across seeded trials with median and range.',
    requiredMentions: ['none performed before January 2026', 'Must not have reached age 20 on or before May 1 preceding ISEF', 'Did you or your parents pay for any support for this project?', 'projects that use machine learning as a tool to interpret data should be placed in the category of the data or results instead', 'Median saving in cells expanded', '23.7 percent to 66.1 percent', '30; 10 skipped because no path existed', 'A fair test, in your own words', 'the 2027 Regeneron ISEF will be in Los Angeles, California, in May 2027', 'Number Theory, for example, lists cryptography among its topics', 'a computer application tested only by the student researcher'],
    sources: [
      { claim: 'Regeneron ISEF overview: scale, affiliated fairs, 22 categories, 2027 location.', url: 'https://www.societyforscience.org/isef/' },
      { claim: 'ISEF categories and subcategories, with category definitions and the machine learning placement rule.', url: 'https://www.societyforscience.org/isef/categories-and-subcategories/' },
      { claim: 'International Rules 2026-2027: eligibility, research plan, roles, forms, AI rule, human participant exemption.', url: 'https://www.societyforscience.org/isef/international-rules/' },
      { claim: 'International Rules book and forms PDF, including Form 2A paid support disclosure.', url: 'https://sspcdn.blob.core.windows.net/files/Documents/SEP/ISEF/2027/Rules/Book.pdf' },
      { claim: 'Final Rule Modifications for 2026-2027 and the Generative AI Use Table.', url: 'https://sspcdn.blob.core.windows.net/files/Documents/SEP/ISEF/2027/Rules/FINAL-Rule-Modifications-for-2026-27.pdf' }
    ],
    rejectedClaims: [
      'Award and prize totals on the ISEF pages: not printed (no typed currency).',
      'Exact 2027 ISEF dates: only "May 2027" in Los Angeles was published on the page read; no days printed.',
      'Names of finalists in photo captions on the category pages: not printed (no individuals named).',
      'Definitions of Embedded Systems and Computational Biology and Bioinformatics: category pages not read; only their names printed.',
      'Whether online paid lessons trigger Form 2C: not stated in the rules read; families told to ask their fair.',
      'The 2027 category list: the page says its 22 categories are those used at ISEF 2026; the 2027 abstract form also lists 22 categories; no new category claimed.',
      'Any claim that our students qualified for or won at ISEF: none made.',
      'Any affiliation with Society for Science, Regeneron or affiliated fairs: none, stated on the page.'
    ]
  }
};
