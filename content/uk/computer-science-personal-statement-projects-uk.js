'use strict';
// Computer science personal statement projects, UK (ag- guide door, UK and US exams cluster, row UK074).
// Sources read raw with curl on 31 October 2026 (copies in keyword-research-2026-09/uk-us-gap/src/computer-science-personal-statement-projects-uk/):
//  - UCAS, How to write your personal statement: "the personal statement has changed recently from one longer piece of
//    text to three separate questions"; "Each answer will have a minimum character count of 350 characters";
//    "The 4,000 overall character limit (including spaces) remains the same"; "There's no 'wrong' place to include
//    information"; "Admissions staff will still review your personal statement as a whole"; Question 1 "Why do you
//    want to study this course or subject?" (super-curricular activities named as evidence of curiosity); Question 2
//    "How have your qualifications and studies helped you to prepare for this course or subject?" (EPQ, competitions
//    "e.g. UKMT", "Essays or projects that explore a particular view point or technique"; grades are seen elsewhere);
//    Question 3 "What else have you done to prepare outside of education, and why are these experiences useful?"
//    ("anything you do include should reflect on why you're including it"; MOOCs, podcasts). UCAS titles its guides
//    "2026 entry".
//  - UCAS, Using AI and ChatGPT with your personal statement: "you now have to declare that your personal statement
//    hasn't been copied or provided from another source, including artificial intelligence software"; "the UCAS
//    Verification Team run checks to detect fraudulent applications and patterns of similarity in personal statements";
//    similar elements may be notified to the universities; "Anything not in your words could get flagged as fraud".
//  - Imperial College London, Personal statement: "For 2027 entry, personal statements will be structured into three
//    distinct sections"; each section "at least 350 characters" with "an overall character limit of 4,000 characters";
//    "You can only submit one personal statement for the five courses"; quality over quantity of skills with evidence;
//    "UCAS runs all personal statements through its similarity detection system, Copycatch".
//  - University of Cambridge, UCAS personal statement: "We will read your personal statement in full."; "We don't give
//    personal statements a formal score."; "divided into 3 sections"; no preference for how it is split; "focus mostly on
//    academic detail throughout"; "Don't exaggerate."; non-academic activities "should not take up more than 20% of the
//    section that you mention them in"; "It is better to focus on a few activities in detail."; "Crucially, we are
//    interested in your thoughts."; "The best personal statements show a pattern and logic in an applicant's academic
//    engagement."; a shorter Cambridge-specific statement in My Cambridge Application is optional.
//  - Cambridge Department of Computer Science and Technology, Super-curricular activities: "learning about the subject
//    independently, beyond what you're taught in school"; build an app or website; "a simple program you can run from the
//    command line would be a great example"; Raspberry Pi; research a theoretical topic and write an article; Nuffield
//    Research Placement; learn a language not taught in the course, Python a popular choice; Project Euler, Advent of
//    Code, Codewars; Bebras Computing Challenge, Cipher Challenge; NRICH, Ada Computer Science; reading list including
//    The New Turing Omnibus and How to Think Like a Mathematician.
//  - Cambridge Department of Computer Science and Technology, FAQs: primary focus on Mathematics; Further Mathematics
//    "highly recommended"; A Level Computer Science "also valuable if your school offers it".
//  - University of Cambridge, Computer Science course page: TMUA required; Peterhouse and Trinity also set the CSAT;
//    Further Mathematics required to AS or A level where offered; final-year project with a 10,000 to 12,000 word
//    dissertation; languages taught include OCaml, Java, C/C++ and Prolog.
// Our own material, labelled on the page: six project briefs; a worked prime-counting experiment with operation counts we
// computed on 31 October 2026 (trial division to the square root: 117,527 / 2,745,694 / 67,740,404 steps for N = 10^4 /
// 10^5 / 10^6; sieve of Eratosthenes crossings-out: 16,981 / 193,078 / 2,122,048; prime counts 1,229 / 9,592 / 78,498);
// a build-log template; and a mapping of evidence to the three questions. We never write, draft, edit or rewrite any
// part of a personal statement. Lesson family: a project you can explain, measured and logged.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'PERSONAL STATEMENT', blurb: 'The UCAS statement is now three questions in 4,000 characters. Which computer science projects give a student something real to say, and how to log them. We mentor projects; we never write statements.' },
  slug: 'computer-science-personal-statement-projects-uk',
  code: 'csps',
  accent: '#7A4F7A',
  accentRationale: 'Computer science personal statement projects: a muted plum #7A4F7A from the cluster allocation, about 6.1:1 on #FBF8F2 and above 4.5:1 on every paper tint, softer than the brighter plums used on the coding pages so the guide reads as advice rather than a course door',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Computer science personal statement projects',
  title: 'Computer Science Personal Statement Projects for UCAS 2027',
  description: 'Computer science personal statement projects for the three UCAS questions: what universities ask, six project briefs of ours. We mentor projects, never statements.',
  ogDescription: 'Cambridge says a simple command-line program is a great super-curricular project. What UCAS, Imperial and Cambridge ask of the three-question statement, six project briefs of ours, and a build log.',
  twitterDescription: 'Computer science personal statement projects: what UCAS and universities ask for, and projects worth writing about.',
  pageName: 'Computer Science Personal Statement Projects',
  webPageDescription: 'A guide for UK computer science applicants to the three-question UCAS personal statement, built from UCAS, Imperial College London and University of Cambridge pages, with original project briefs and a worked programming experiment.',
  courseDescription: 'Live online mentoring for sixth-form computer science applicants building super-curricular projects in Python and machine learning: choosing a question, building, measuring, and keeping a log the student can write from in their own words.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'CS personal statement projects',
  navLinks: [
    { href: '#questions', label: 'Three questions' },
    { href: '#universities', label: 'What universities say' },
    { href: '#briefs', label: 'Project briefs' },
    { href: '#experiment', label: 'Worked project' },
    { href: '#integrity', label: 'Your own words' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Years 12 and 13 &middot; UCAS applications for 2027 entry',
  h1: 'Computer science personal statement projects: something real to write about',
  lede: 'Most searches for a computer science personal statement end at example statements, and copying from those is the one thing UCAS checks for. The useful question comes earlier: what has the student actually done with computing that they can describe, explain and defend? Cambridge\'s Department of Computer Science and Technology says a simple program run from the command line is a great example of independent work. This page sets out what UCAS, Imperial and Cambridge say about the three-question statement, gives six project briefs of ours sized for a sixth former, and works one through with real measurements. We mentor the project. The statement stays the student\'s own.',
  secondaryCta: { href: '#briefs', label: 'See the six project briefs' },
  wa: 'Hello Modern Age Coders, I am applying for computer science and would like help building a project, please.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Guidance quoted from UCAS, Imperial and Cambridge',
  spec: [
    ['Statement', 'Three questions, one total'],
    ['Length', '4,000 characters including spaces'],
    ['Each answer', 'At least 350 characters'],
    ['Checked by', 'UCAS similarity detection'],
    ['Declaration', 'Not copied, not from AI'],
    ['What we mentor', 'The project, never the text'],
    ['Formats', 'Group of 15 to 20, or 1-on-1'],
    ['Start', 'One free class']
  ],
  capsuleQ: 'In short',
  capsule: 'The UCAS personal statement is now three questions sharing 4,000 characters, each answer at least 350 characters, and Imperial confirms that structure for 2027 entry. For computer science, Cambridge suggests super-curricular work such as building an app, a command-line program or a Raspberry Pi device, or researching a theoretical topic. Modern Age Coders mentors sixth formers live online, in a group of 15 to 20 or 1-on-1, through building and measuring such a project; we never write or edit any part of the statement.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses behind a strong project',
    lede: 'One for machine learning projects, one for the A Level that underpins them, and one for the algorithms that make a project worth measuring.',
    items: [
      { course: 'ai-ml-masterclass-teens', code: 'CSP / 01', title: 'AI and machine learning for teens', note: 'Train a small model, then study where it goes wrong: the part worth writing about.' },
      { course: 'a-level-computer-science-course-aqa-ocr', code: 'CSP / 02', title: 'A Level Computer Science', note: 'AQA 7517 or OCR H446, with the theory that turns a project into an explanation.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'CSP / 03', title: 'Problem solving and algorithms', note: 'Complexity, searching and sorting: the tools for a project that compares two methods.' }
    ]
  },

  sections: [
    {
      id: 'questions', tint: 'tint', eyebrow: 'The UCAS format',
      h2: 'What are the three UCAS personal statement questions?',
      lede: 'UCAS replaced the single free-text statement with three questions that share one 4,000-character limit. Each answer needs at least 350 characters, and UCAS says admissions staff still read the three as a whole, so evidence should not be repeated across them.',
      body: [
        { kind: 'table', caption: 'The three questions as UCAS words them, with the evidence UCAS suggests for each (read 31 October 2026)', head: ['#', 'UCAS question', 'Evidence UCAS mentions', 'Where a CS project fits'], rows: [
          ['1', 'Why do you want to study this course or subject?', 'Motivation, subject knowledge, research, super-curricular activities', 'The question the project set out to answer, and why it mattered to you'],
          ['2', 'How have your qualifications and studies helped you to prepare for this course or subject?', 'Skills from formal study, EPQ, competitions such as UKMT, essays or projects on a technique', 'A project grown from A Level work, an EPQ, or an olympiad you sat'],
          ['3', 'What else have you done to prepare outside of education, and why are these experiences useful?', 'Work experience, hobbies, online learning such as MOOCs, podcasts', 'A project built in your own time, and what it taught you']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The numbers, and how flexible they are',
          left: [
            'UCAS says the 4,000-character limit, including spaces, is unchanged, and that it can be spread across the three answers in any way. Imperial gives the same rule for 2027 entry: at least 350 characters per section, 4,000 overall, with a built-in counter.',
            'Our arithmetic: three minimum answers use only 1,050 characters, leaving 2,950 to place where the evidence is strongest. A strong project might take a third of the total on its own.'
          ],
          rightH3: 'No wrong box',
          right: [
            'UCAS says there is no wrong place for a piece of evidence and that applicants should not panic about whether something belongs in question 2 or 3. Cambridge adds that it has no preference for how a statement is split.',
            'So a project built for an A Level class and then extended at home can sit in either answer. What matters is that it appears once, explained, rather than three times in passing.'
          ] },
        { kind: 'source', html: 'Sources: UCAS <a class="ag-inline-link" href="https://www.ucas.com/applying/applying-to-university/writing-your-personal-statement/how-to-write-your-personal-statement" rel="noopener" target="_blank">How to write your personal statement</a>, and Imperial College London <a class="ag-inline-link" href="https://www.imperial.ac.uk/study/apply/undergraduate/process/personal-statement/" rel="noopener" target="_blank">personal statement page</a>, read 31 October 2026. The character arithmetic is ours. We are not connected with UCAS or any university named here.' }
      ]
    },
    {
      id: 'universities', tint: 'deep', eyebrow: 'Imperial and Cambridge',
      h2: 'What do universities want to see in a computer science personal statement?',
      lede: 'Academic engagement, explained. Cambridge says it reads every statement in full, gives it no formal score, and wants mostly academic detail; Imperial wants fewer skills with evidence rather than a long list. Both point away from activity lists and towards what the student thought.',
      body: [
        { kind: 'table', caption: 'What two universities say about the statement, quoted from their own pages (read 31 October 2026)', head: ['University', 'What it says'], rows: [
          ['Cambridge', '"We will read your personal statement in full." and "We don\'t give personal statements a formal score."'],
          ['Cambridge', 'Your statement "should focus mostly on academic detail throughout"; "Don\'t exaggerate."'],
          ['Cambridge', 'Non-academic activities "should not take up more than 20% of the section that you mention them in"'],
          ['Cambridge', '"It is better to focus on a few activities in detail." and "Crucially, we are interested in your thoughts."'],
          ['Cambridge', '"The best personal statements show a pattern and logic in an applicant\'s academic engagement."'],
          ['Imperial', 'One statement goes to all five choices; choose "quality over quantity" when describing skills, with evidence for each'],
          ['Imperial', 'Work experience "isn\'t essential for most Imperial courses"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Cambridge Computer Science, specifically',
          left: [
            'The Department of Computer Science and Technology defines super-curricular work as "learning about the subject independently, beyond what you\'re taught in school". Its suggestions are deliberately modest: an app or website, a command-line program, something built with a Raspberry Pi, or an article on a theoretical topic you researched.',
            'It also suggests learning a language the Cambridge course does not teach, naming Python as a popular choice, and lists puzzle sites such as Project Euler, Advent of Code and Codewars, plus the Bebras Computing Challenge and the Cipher Challenge.'
          ],
          rightH3: 'Mathematics is still the centre',
          right: [
            'The same department says in its FAQs that its primary focus is on Mathematics, that Further Mathematics is highly recommended, and that A Level Computer Science is valuable where a school offers it. Cambridge Computer Science also requires the TMUA, and Peterhouse and Trinity add the CSAT.',
            'A project does not replace any of that. It gives the reader of a strong mathematical application a reason to believe the student will enjoy a degree that ends with a substantial project and a 10,000 to 12,000 word dissertation.'
          ] },
        { kind: 'source', html: 'Sources: University of Cambridge <a class="ag-inline-link" href="https://www.undergraduate.study.cam.ac.uk/apply/how/ucas-personal-statement" rel="noopener" target="_blank">UCAS personal statement page</a> and <a class="ag-inline-link" href="https://www.undergraduate.study.cam.ac.uk/courses/computer-science" rel="noopener" target="_blank">Computer Science course page</a>; Cambridge Department of Computer Science and Technology <a class="ag-inline-link" href="https://www.cst.cam.ac.uk/admissions/undergraduate/super-curricular-activities" rel="noopener" target="_blank">super-curricular activities</a> and <a class="ag-inline-link" href="https://www.cst.cam.ac.uk/admissions/undergraduate/faqs" rel="noopener" target="_blank">FAQs</a>; Imperial\'s personal statement page; all read 31 October 2026.' }
      ]
    },
    {
      id: 'briefs', tint: 'plain', eyebrow: 'Six briefs of ours',
      h2: 'What computer science projects are good for a personal statement?',
      lede: 'Small, finished projects that start from a question and end with something measured or explained. The six briefs below are ours, sized for a sixth former working a few hours a week, and each matches one of the kinds of work Cambridge\'s department suggests. None needs anything beyond a laptop, apart from the Raspberry Pi in brief 4.',
      body: [
        { kind: 'table', caption: 'Our six project briefs, with the question each one asks', head: ['#', 'Our brief', 'The question it answers', 'What to measure or explain'], rows: [
          ['1', 'Count primes two ways in Python: trial division and the sieve of Eratosthenes', 'Why is one method so much faster as N grows?', 'Steps taken for N = 10<sup>4</sup>, 10<sup>5</sup>, 10<sup>6</sup>; the growth rate of each'],
          ['2', 'A command-line Sudoku solver: plain backtracking, then with constraint propagation', 'How much search does a little reasoning save?', 'Number of guesses on the same twenty puzzles, before and after'],
          ['3', 'A frequency-analysis breaker for Caesar and Vigen&egrave;re ciphers', 'How much ciphertext does frequency analysis need to work?', 'Success rate against message length'],
          ['4', 'A Raspberry Pi logger that records room temperature every minute for a week', 'How noisy is a cheap sensor, and how do you smooth it?', 'Raw against moving-average readings; what the window size does'],
          ['5', 'A small handwritten-digit classifier, then a study of its mistakes', 'Which digits does it confuse, and why those?', 'A confusion table; examples of 4 read as 9, and what they share'],
          ['6', 'A researched article: why no program can decide whether every program halts', 'What does the proof actually show, and what does it not?', 'The argument in your own words, with one worked case']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Start from a question', p: '"I built a website" invites the reply "so what?". "I wanted to know why my prime counter slowed down so badly" invites a conversation. Every brief above is phrased as a question for that reason.' },
          { h3: 'Finish small', p: 'Cambridge\'s department says a project "doesn\'t have to be something complicated and polished". A finished command-line tool with one clear result beats an ambitious app abandoned at the login screen.' },
          { h3: 'Measure something', p: 'A number the student produced, such as steps taken, guesses saved or accuracy lost, turns a hobby into evidence. It is also the thing an interviewer is most likely to ask about.' }
        ] },
        { kind: 'source', html: 'The six briefs are ours, written on 31 October 2026. They follow the categories on the Cambridge Department of Computer Science and Technology super-curricular page (a program, a hardware build with a Raspberry Pi, a cryptography challenge, a researched article) and use public datasets and puzzles only. A student choosing one should still pick the question that genuinely interests them.' }
      ]
    },
    {
      id: 'experiment', tint: 'tint', eyebrow: 'Brief 1, worked through',
      h2: 'What does a finished personal statement project look like?',
      lede: 'Here is our brief 1 carried to the end, with numbers we measured ourselves on 31 October 2026. The point is not the primes; it is that the student ends with a result they can explain in a sentence and defend for ten minutes.',
      body: [
        { kind: 'table', caption: 'Our prime-counting experiment: basic steps taken by each method (measured by us, 31 October 2026)', head: ['N', 'Primes up to N', 'Trial division steps', 'Sieve crossings-out', 'Ratio'], rows: [
          ['10,000', '1,229', '117,527', '16,981', 'about 7 to 1'],
          ['100,000', '9,592', '2,745,694', '193,078', 'about 14 to 1'],
          ['1,000,000', '78,498', '67,740,404', '2,122,048', 'about 32 to 1']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the numbers say',
          left: [
            'Each time N grows tenfold, trial division does roughly 23 to 25 times as much work, while the sieve does about 11 times as much. Trial division tests each number against divisors up to its square root, so its total grows faster than N; the sieve crosses out each composite a few times, growing only slightly faster than N.',
            'That observation leads straight to the next question: what is the growth rate of each? A student who goes on to read about why the sieve\'s work is close to N log log N has moved from a coding exercise to the edge of number theory, which is the "pattern and logic" Cambridge says strong statements show.'
          ],
          rightH3: 'What the student writes down',
          right: [
            'Not a paragraph for UCAS. A log: the question, the first version, the surprise (trial division at a million took far longer than expected), the measurement, what they read next, and what they would try now, such as a segmented sieve to save memory.',
            'Months later, the student writes their own sentences from that log. Because every claim in them came from something they did, there is nothing to exaggerate and nothing they cannot explain if asked.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Write the question first.</strong> One line, in the log, before any code.',
          '<strong>Build the simplest version that answers it.</strong> For brief 1, that is two short functions and a counter.',
          '<strong>Measure, then check the measurement.</strong> Both methods must agree on the prime count; ours give 78,498 below a million, the known value.',
          '<strong>Read one source about what you found.</strong> Note its title and the one idea you took from it.',
          '<strong>Change one thing and measure again.</strong> A second version, compared with the first, is a project; one version is an exercise.',
          '<strong>Stop and keep the log.</strong> The code goes in a public repository with a short README; the log stays with the student.'
        ] },
        { kind: 'source', html: 'The experiment, counts and ratios are ours, run in Python on 31 October 2026; the prime counts are standard values and the step counts depend on exactly how steps are counted. This is a model of a project, not text for a personal statement.' }
      ]
    },
    {
      id: 'integrity', tint: 'deep', eyebrow: 'Your own words',
      h2: 'Can someone else write or edit my personal statement?',
      lede: 'No, and UCAS checks. Applicants now declare that the statement has not been copied or provided from another source, including AI software, and UCAS runs similarity checks on every statement. Imperial names the system: Copycatch. That is why we mentor projects and never touch the text.',
      body: [
        { kind: 'table', caption: 'What UCAS and Imperial say about copied and AI-written statements (read 31 October 2026)', head: ['Source', 'What it says'], rows: [
          ['UCAS', 'You "now have to declare that your personal statement hasn\'t been copied or provided from another source, including artificial intelligence software"'],
          ['UCAS', 'The UCAS Verification Team checks "patterns of similarity in personal statements", and universities may be notified of similar elements'],
          ['UCAS', 'Submitting AI-generated text as your own "could be considered cheating" and "Anything not in your words could get flagged as fraud"'],
          ['UCAS', 'Acceptable uses of AI include ideas, structure and checking, not producing the text'],
          ['Imperial', '"UCAS runs all personal statements through its similarity detection system, Copycatch, to compare them with previous statements."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we do',
          left: [
            'We teach the programming, mathematics and machine learning a project needs. We help a student choose a question they care about, size it so it can be finished, measure the result properly and keep an honest log.',
            'If a student wants to talk through what they learned, we ask questions the way an interviewer might. Answering them out loud is good preparation for the statement and for any interview that follows.'
          ],
          rightH3: 'What we never do',
          right: [
            'We do not write, draft, edit, rewrite, shorten or "polish" any answer in a personal statement, and we do not supply example statements. We do not build a project for a student to present as their own.',
            'A teacher at school, who writes the reference and knows the student, is the right person to read a draft. Every word of the statement should be the student\'s.'
          ] },
        { kind: 'source', html: 'Quotations from UCAS <a class="ag-inline-link" href="https://www.ucas.com/undergraduate/applying-university/writing-your-personal-statement/guide-using-ai-and-chatgpt-your-personal-statement" rel="noopener" target="_blank">Using AI and ChatGPT with your personal statement</a> and Imperial\'s personal statement page, read 31 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From Year 12 to the UCAS deadline',
    h2: 'Four stages for a project worth writing about',
    lede: 'Our suggested timing for a student applying in the autumn of Year 13. The project finishes before the writing starts, so the statement describes something complete.',
    table: { caption: 'Our project timeline', head: ['When', 'Stage', 'Finished when'], rows: [
      ['Year 12, spring term', '1. Choose a question', 'One line in a log, and a brief small enough to finish'],
      ['Year 12, Easter to June', '2. Build the first version', 'It runs and answers the question roughly'],
      ['Year 12, summer holiday', '3. Measure, read, improve', 'A second version compared with the first, and one source read'],
      ['Year 13, September', '4. Stop and write, alone', 'The log is complete; the statement is drafted by the student and read by a teacher']
    ] },
    left: { h3: 'If it is already September of Year 13', ps: [
      'Pick the smallest brief, such as brief 1 or brief 3, and finish it in three or four weeks. A small finished project is honest; a large unfinished one is hard to write about.',
      'Applicants with the 15 October deadline for Oxford or Cambridge have less time than others and should be strict about scope.'
    ] },
    right: { h3: 'If you are in Year 11 or early Year 12', ps: [
      'Start with puzzles: the Cambridge department suggests Project Euler, Advent of Code and the Bebras challenge. They build fluency without the pressure of a project.',
      'An EPQ in computing is another route, and UCAS lists the EPQ as evidence for question 2. The project must then follow the EPQ rules for the student\'s own work.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'What we teach a computer science applicant',
    lede: 'Grouped by what the project needs: the code, the mathematics, and the competitions that sit beside it.',
    bands: [
      { num: 'I', h3: 'Building the project', sub: 'Python and machine learning', courses: [
        { code: 'CSP / B / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language most of the six briefs use.' },
        { code: 'CSP / B / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'For the classifier brief and beyond.' },
        { code: 'CSP / B / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Cleaning and plotting what a project measures.' }
      ] },
      { num: 'II', h3: 'The theory behind it', sub: 'A Level and mathematics', courses: [
        { code: 'CSP / T / 01', slug: 'a-level-computer-science-course-aqa-ocr', title: 'A Level Computer Science', blurb: 'AQA 7517 and OCR H446.' },
        { code: 'CSP / T / 02', slug: 'a-level-further-maths-course', title: 'A Level Further Maths', blurb: 'Highly recommended by Cambridge Computer Science.' },
        { code: 'CSP / T / 03', slug: 'tmua-mat-step-preparation-course', title: 'TMUA preparation', blurb: 'The test Cambridge and others set for CS.' }
      ] },
      { num: 'III', h3: 'Alongside the project', sub: 'Competitions and problem solving', courses: [
        { code: 'CSP / C / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Why one method beats another.' },
        { code: 'CSP / C / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'For the olympiad route.' },
        { code: 'CSP / C / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cyber security for teens', blurb: 'The Cipher Challenge side of computing.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How mentoring runs',
    h2: 'Live project mentoring through Year 12',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekday evenings', l: 'Teaching: the code and theory a brief needs.' },
      { time: 'Weekend mornings', l: 'Build sessions, with a teacher on hand.' },
      { time: '1-on-1', l: 'One student, one project, a weekly check of the log.' }
    ],
    cells: [
      { h3: 'Question first', p: 'No code until the question is written down in one line.' },
      { h3: 'Student types', p: 'The student writes every line of code; teachers explain and point.' },
      { h3: 'Measured results', p: 'Each project ends with a number the student produced and checked.' },
      { h3: 'Groups of 15 to 20', p: 'Students demo work in progress and field each other\'s questions.' },
      { h3: 'The log is theirs', p: 'We read the build log for gaps; we never read or edit a statement.' },
      { h3: 'No offer promised', p: 'A project is evidence, not a guarantee, and we promise no place.' }
    ]
  },

  projectsH2: 'Projects our students have built',
  projectsLede: 'Coding, maths and machine-learning work our students have chosen to publish. Browse more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Unedited reviews from families on our Google business profile.',

  fees: {
    h2: 'Fees',
    lede: 'Applying through UCAS has its own fee, paid to UCAS. Our mentoring is a separate monthly fee with nothing to join; most project students stay for one to two terms in Year 12.',
    free: ['A free first class', 'Choose a question for your project together', 'No card details'],
    group: ['Groups of 15 to 20', 'Weekly build sessions', 'Work in progress shown and questioned', 'Monthly, stop when the project is done'],
    one: ['One student, one mentor', 'A weekly look at the build log', 'For a project with a near deadline']
  },

  faq: {
    eyebrow: 'Personal statement questions',
    h2: 'What computer science applicants and parents ask',
    items: [
      { q: 'What are the three UCAS personal statement questions?', a: 'Why do you want to study this course or subject; how have your qualifications and studies helped you to prepare; and what else have you done to prepare outside of education, and why are these experiences useful. UCAS says they share one 4,000-character limit.' },
      { q: 'How long is the UCAS personal statement?', a: 'Up to 4,000 characters including spaces, across all three answers, with at least 350 characters for each. Imperial confirms the same structure for 2027 entry.' },
      { q: 'What should I write about in a computer science personal statement?', a: 'Cambridge asks for mostly academic detail and says it is interested in your thoughts. A project you built, measured and can explain, or a topic you researched, gives you something specific to say in your own words.' },
      { q: 'What can I do if I have no computer science experience?', a: 'Start small. Cambridge\'s Computer Science department suggests programming puzzles such as Project Euler and Advent of Code, and says a simple command-line program is a great example of independent work.' },
      { q: 'Can I use ChatGPT to write my personal statement?', a: 'Not to produce the text. UCAS says applicants declare the statement was not copied or provided by another source, including AI software, and that anything not in your words could be flagged as fraud.' },
      { q: 'Does UCAS check personal statements for copying?', a: 'Yes. UCAS says its Verification Team checks for patterns of similarity, and Imperial says every statement goes through the Copycatch similarity system. Copying from example statements is a real risk.' },
      { q: 'Do extracurricular activities matter for computer science?', a: 'Subject-related ones matter most. Cambridge says non-academic activities should take up no more than 20% of the section they appear in, and that a few activities in detail beat a list.' },
      { q: 'Will you write or check my personal statement?', a: 'No. We mentor the project itself and the computing and mathematics behind it. A school teacher is the right person to read a draft, and every word should be yours.' },
      { q: 'What days are mentoring sessions?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with UCAS or any university?', a: 'No. Modern Age Coders is an independent online school, not connected with UCAS, Cambridge, Imperial or any other university, and we promise no offer.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for computer science applicants',
    lede: 'The wider picture on activities, the A Level, and competitions that give a project company.',
    items: [
      { href: '/computer-science-extracurriculars', label: 'Computer science extracurriculars', p: 'How UK and US admissions weigh activities, ranked.' },
      { href: '/passion-project-ideas-computer-science', label: 'Passion project ideas', p: 'Fourteen more projects, and what finished means.' },
      { href: '/a-level-computer-science-nea-help', label: 'A Level Computer Science NEA', p: 'The assessed project, and the rules for your own work.' },
      { href: '/aqa-a-level-computer-science-7517-help', label: 'AQA Computer Science 7517', p: 'The AQA A Level, paper by paper.' },
      { href: '/british-informatics-olympiad-preparation', label: 'British Informatics Olympiad', p: 'A national competition UCAS-style evidence can point to.' },
      { href: '/uk-olympiad-in-artificial-intelligence-preparation', label: 'UK Olympiad in AI', p: 'For students whose project is machine learning.' }
    ]
  },

  start: {
    h2: 'Book a free project class',
    lede: 'Tell us which courses you are applying for and what you have built so far, even if the answer is nothing. In the free class we pick a question for a first project with you and plan the smallest version that would answer it.',
    readFirst: 'You can also look at <a class="ag-inline-link" href="/courses">our full course list</a>, or read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> before you book.',
    note: 'Mentors teach from India on a timetable set in UK time. For a quick reply from a UK number, WhatsApp is usually quickest.',
    formNote: 'Nothing to pay, no card; we write back once to fix a time.'
  },

  footer: {
    cols: [
      { h4: 'Computer science', links: [
        { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' },
        { href: '/passion-project-ideas-computer-science', label: 'Passion project ideas' },
        { href: '/a-level-computer-science-nea-help', label: 'A Level NEA' },
        { href: '/ocr-a-level-computer-science-h446-help', label: 'OCR Computer Science H446' }
      ] },
      { h4: 'Courses', links: [
        { href: '/courses/ai-ml-masterclass-teens', label: 'AI and machine learning' },
        { href: '/courses/a-level-computer-science-course-aqa-ocr', label: 'A Level Computer Science' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python for teens' },
        { href: '/coding-classes-in-united-kingdom', label: 'All UK pages' }
      ] }
    ],
    bottomRight: 'Build it, measure it, then write it yourself'
  },

  personalityCss: `
.ag-root.ag-csps .ag-hero h1 { letter-spacing: -0.01em; max-width: 27ch; }
.ag-root.ag-csps .ag-capsule { border-left-width: 4px; padding-left: 1.15rem; }
.ag-root.ag-csps .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-csps .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-csps .ag-table th:first-child { width: 8%; }
.ag-root.ag-csps .ag-three h3 { letter-spacing: -0.005em; }
.ag-root.ag-csps .ag-steps li { line-height: 1.58; }
.ag-root.ag-csps .ag-slots { gap: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'Personal statement facts read raw on 31 October 2026 from UCAS (How to write your personal statement: three questions replacing one text; 350-character minimum each; 4,000 characters including spaces; no wrong place; read as a whole; question wording and suggested evidence including super-curricular activities, EPQ and UKMT; Using AI and ChatGPT: declaration that the statement was not copied or provided by another source including AI; Verification Team similarity checks; fraud warning), Imperial College London (personal statement page: three sections for 2027 entry; 350 and 4,000 characters; one statement for five courses; quality over quantity; Copycatch), the University of Cambridge (UCAS personal statement page: read in full, no formal score, three sections with no preferred split, academic detail, do not exaggerate, non-academic activities at most 20% of a section, a few activities in detail, pattern and logic; Computer Science course page: TMUA, CSAT at Peterhouse and Trinity, Further Maths, final-year dissertation) and the Cambridge Department of Computer Science and Technology (super-curricular page: definition, command-line program, Raspberry Pi, article, Nuffield placements, Python, Project Euler, Advent of Code, Codewars, Bebras, Cipher Challenge; FAQs: Mathematics first, Further Maths highly recommended, A Level CS valuable).',
    localProject: 'A computer science project-mentoring lesson of our own: six project briefs phrased as questions (two prime counters, a Sudoku solver with constraint propagation, a frequency-analysis cipher breaker, a Raspberry Pi temperature logger with smoothing, a digit classifier error study, an article on the halting problem), with brief 1 worked through using step counts we measured on 31 October 2026 (trial division 117,527 / 2,745,694 / 67,740,404 against sieve 16,981 / 193,078 / 2,122,048 for N up to 10^4 / 10^5 / 10^6; 78,498 primes below a million), a six-step build-log method, and a mapping of project evidence to the three UCAS questions. Lesson family: a project you can explain, measured and logged.',
    requiredMentions: ['should not take up more than 20% of the section', 'simple command-line program is a great example', 'similarity detection system, Copycatch', 'including artificial intelligence software', '67,740,404', '2,122,048', 'leaving 2,950 to place where the evidence is strongest', 'Imperial confirms that structure for 2027 entry', 'Count primes two ways in Python', 'Build it, measure it, then write it yourself'],
    sources: [
      { claim: 'Three-question format, character limits, question wording and suggested evidence.', url: 'https://www.ucas.com/applying/applying-to-university/writing-your-personal-statement/how-to-write-your-personal-statement' },
      { claim: 'UCAS declaration on copying and AI, similarity checks and fraud warning.', url: 'https://www.ucas.com/undergraduate/applying-university/writing-your-personal-statement/guide-using-ai-and-chatgpt-your-personal-statement' },
      { claim: 'Imperial: three sections for 2027 entry, limits, one statement, quality over quantity, Copycatch.', url: 'https://www.imperial.ac.uk/study/apply/undergraduate/process/personal-statement/' },
      { claim: 'Cambridge on reading statements, academic detail and the 20% limit for non-academic activities.', url: 'https://www.undergraduate.study.cam.ac.uk/apply/how/ucas-personal-statement' },
      { claim: 'Cambridge Computer Science super-curricular suggestions.', url: 'https://www.cst.cam.ac.uk/admissions/undergraduate/super-curricular-activities' },
      { claim: 'Cambridge Computer Science FAQs and course page: mathematics focus, Further Maths, TMUA, CSAT, dissertation.', url: 'https://www.cst.cam.ac.uk/admissions/undergraduate/faqs' }
    ],
    rejectedClaims: [
      'Writing, drafting, editing or supplying example personal statements: refused; the page says we mentor projects only.',
      'The exact first UCAS cycle of the three-question format: UCAS says only that it changed recently and titles its guides 2026 entry; Imperial confirms the structure for 2027 entry, which is what the page states.',
      'UCAS application fee amounts: not printed; no currency is typed on the page.',
      'Claims that a project improves the chance of an offer: none made; Cambridge says statements are not formally scored.',
      'Oxford Computer Science guidance: not re-read for this page; the live extracurriculars page already covers it and is linked.',
      'Any affiliation with UCAS or any university: none, stated on the page.'
    ]
  }
};
