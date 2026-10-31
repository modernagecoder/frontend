'use strict';
// A level Computer Science tutor online, UK (ag- exam door, generic; UK cluster row UK040).
// Board doors already live and NOT repeated here: aqa-a-level-computer-science-7517-help (Skeleton Program,
// Electronic Answer Document spine), ocr-a-level-computer-science-h446-help (by hand in the papers, any
// language in the project), a-level-computer-science-nea-help (marks split, AI rules, state machines).
// This page is the generic door: the shared DfE core, the maths floor, and the board facts that change who
// can sit what, then links down to the three doors.
// Read raw with curl on 31 October 2026 (PDFs via pypdf; copies under keyword-research-2026-09/uk-us-gap/
// src/a-level-computer-science-tutor-online-uk/):
//  - DfE, GCE AS and A level subject content for computer science (April 2014, DFE-00359-2014): sets out
//    "the knowledge, understanding and skills common to all AS and A level specifications in computer
//    science"; aims include "abstraction, decomposition, logic, algorithms and data representation"; A level
//    adds "the importance of the efficiency of an algorithm", "standard algorithms", databases and "a variety
//    of programming paradigms"; skills include "design, write and test programs"; annex: "Any accredited
//    specification in computer science must contain a minimum of 10% mathematics."; topics "Boolean algebra",
//    "Comparison of complexity of algorithms" (A level only), "Number representations and bases".
//  - AQA AS and A-level Computer Science 7516/7517 specification, Version 1.6, 31 July 2023: Paper 1
//    "On-screen exam: 2 hours 30 minutes", "40% of A-level", Preliminary Material and Skeleton Program; Paper
//    2 "Written exam: 2 hours 30 minutes", "40% of A-level"; NEA "75 marks", "20% of A-level"; languages C#,
//    Java, Python, VB.Net; 7.8: "These specifications are not available to private candidates."
//  - Cambridge OCR A Level Computer Science H446 specification, Version 3.0 (April 2026), first assessment
//    2017: components 01 and 02 written, "(no calculators allowed)"; programming project 20 per cent;
//    "Private candidates may enter for OCR assessments."; a private candidate "may be a part-time student,
//    someone taking a distance learning course, or someone being tutored privately. They must be based in
//    the UK."; centres "may charge"; "The total qualification time for A Level Computer Science is 360
//    hours."; 5c "must contain a minimum of 10% mathematical skills"; 5d pseudocode: learners "may provide
//    answers in any style of pseudocode they choose providing its meaning could be reasonably inferred by a
//    competent programmer"; 5e accepted project languages Python, C family, Java, Visual Basic, PHP, Delphi,
//    and "All tasks completed in all languages need to have a suitable graphical interface."; available in
//    England, with Wales and Northern Ireland availability to be checked on their own lists.
// Our own: the worked examples (one byte read two ways, Boolean simplification, binary search bound), the
// Python function, the practice set, the choosing checklist.
// Spine: one core, two exams, one door that only one board opens. Every A level CS shares the DfE core and
// a 10 per cent maths floor, but AQA's specification is closed to private candidates while OCR's is open,
// so for some learners the board is decided before the tutor.
// Lesson family: a generic subject door that routes to board doors by the facts that decide the board.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

const BSEARCH = [
  'def binary_search(items, target):',
  '    """Return the index of target in sorted items, or -1.',
  '    Also return how many comparisons were made."""',
  '    low, high = 0, len(items) - 1',
  '    comparisons = 0',
  '    while low <= high:',
  '        mid = (low + high) // 2',
  '        comparisons += 1',
  '        if items[mid] == target:',
  '            return mid, comparisons',
  '        if items[mid] < target:',
  '            low = mid + 1',
  '        else:',
  '            high = mid - 1',
  '    return -1, comparisons',
  '',
  'data = list(range(0, 2_000_000, 2))   # 1,000,000 sorted even numbers',
  'print(binary_search(data, 1_999_998))  # last item: found in at most 20 comparisons'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'A LEVEL CS', label: 'A level Computer Science tutor', blurb: 'One DfE core, a 10 per cent maths floor, two exams. AQA\'s A level is closed to private candidates; OCR\'s is open.' },
  slug: 'a-level-computer-science-tutor-online-uk',
  code: 'lcsu',
  accent: '#715B13',
  accentRationale: 'Generic A level Computer Science: a dark ochre (#715B13), 6.18:1 on #FBF8F2 and 5.31:1 on the deepest paper tint, set apart from the cooler accents of the AQA, OCR and NEA doors it links down to',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'A level Computer Science tutor online',
  title: 'A Level Computer Science Tutor Online | AQA 7517, OCR H446',
  description: 'A level Computer Science tutor online for UK students: the DfE core every board shares, the 10 per cent maths floor, AQA 7517 or OCR H446, and live lessons.',
  ogDescription: 'Every A level Computer Science shares one government core and at least 10 per cent maths. The boards differ on screens, pseudocode and private candidates.',
  twitterDescription: 'A level Computer Science, any board: the shared DfE core, the maths, AQA 7517 against OCR H446, and live online teaching in Python.',
  pageName: 'A Level Computer Science Tutor Online',
  webPageDescription: 'Live online A level Computer Science tuition for UK students, built from the Department for Education\'s subject content and the AQA 7517 and OCR H446 specifications.',
  courseDescription: 'Live online teaching for A level Computer Science students on AQA 7517 or OCR H446: programming in Python, algorithms and complexity, data representation, Boolean algebra and project method.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'A level Computer Science',
  navLinks: [
    { href: '#core', label: 'The shared core' },
    { href: '#boards', label: 'AQA or OCR' },
    { href: '#maths', label: 'The maths' },
    { href: '#examples', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; A level Computer Science &middot; Years 12 and 13',
  h1: 'A level Computer Science tutor online',
  lede: 'A level Computer Science in England is taught to one Department for Education core, whichever board a school uses, and every specification must contain at least 10 per cent mathematics. The two biggest boards then examine it differently: AQA 7517 sets a programming paper on screen, OCR H446 sets both papers on paper, and only OCR\'s specification is open to private candidates. Modern Age Coders teaches A level Computer Science live online, in a group or one to one, through our A level Computer Science course for AQA and OCR. This page sets out the shared core, the board differences that decide the most, and how we teach.',
  secondaryCta: { href: '#boards', label: 'Compare AQA and OCR' },
  wa: 'Hello Modern Age Coders, I would like a free A level Computer Science lesson.',
  heroNote: 'From the DfE subject content and the AQA and OCR specifications, read 31 October 2026 &middot; Not connected with any exam board',
  spec: [
    ['Qualification', 'A level Computer Science, England'],
    ['Common core', 'DfE subject content, April 2014'],
    ['Maths floor', 'At least 10 per cent'],
    ['AQA', '7517: on-screen Paper 1, written Paper 2, NEA'],
    ['OCR', 'H446: two written papers, programming project'],
    ['Coursework', '20 per cent at both boards'],
    ['Private candidates', 'OCR yes, AQA no'],
    ['We teach in', 'Python, with the board\'s own conventions']
  ],
  capsuleQ: 'What is A level Computer Science?',
  capsule: 'A level Computer Science is a two-year qualification taken in Years 12 and 13. Every board\'s specification in England follows the Department for Education\'s subject content of April 2014, which lists programming, data types and structures, data representation, algorithms and their efficiency, databases, systems software, architecture, networks and programming paradigms, and requires "a minimum of 10% mathematics". At AQA 7517, Paper 1 is a 2 hour 30 minute on-screen exam worth 40 per cent, Paper 2 a written exam worth 40 per cent, and a 75-mark project the last 20 per cent. At OCR H446, two written papers with no calculators make up 80 per cent and a programming project 20 per cent. AQA says its specification is "not available to private candidates"; OCR says private candidates may enter. Modern Age Coders teaches A level Computer Science live online for both boards, in Python, with project method taught but never project work done.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses for A level Computer Science',
    lede: 'The first card is our A level course for AQA and OCR; the other two deepen the programming and algorithms underneath. Each opens a full syllabus.',
    items: [
      { course: 'a-level-computer-science-course-aqa-ocr', code: 'LCS / 01', title: 'A level Computer Science, AQA and OCR', note: 'Both boards\' content in Python, with paper practice for each and project method mentoring for the 20 per cent.' },
      { course: 'python-complete-masterclass-teens', code: 'LCS / 02', title: 'Python for teens', note: 'For a Year 12 student who arrives with little programming and needs fluency before the theory lands.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'LCS / 03', title: 'Problem solving and data structures', note: 'Stacks, queues, trees, graphs and search, the algorithms both boards examine, practised in code.' }
    ]
  },

  sections: [
    {
      id: 'core', tint: 'tint', eyebrow: 'The shared core',
      h2: 'What does every A level Computer Science course cover?',
      lede: 'The same government list, whichever board a school chose. The DfE subject content sets out what is "common to all AS and A level specifications in computer science".',
      body: [
        { kind: 'table', caption: 'The DfE subject content for A level Computer Science (April 2014), in its own terms', head: ['Area', 'What the content requires'], rows: [
          ['Principles', '"abstraction, decomposition, logic, algorithms and data representation"'],
          ['Programming', 'Fundamentals of programming; data types from primitive to complex data structures'],
          ['Algorithms', 'Following and writing algorithms; at A level, "the importance of the efficiency of an algorithm" and "standard algorithms"'],
          ['Data', 'Capturing, selecting, exchanging and managing data; at A level, databases including "database programming and producing a data model"'],
          ['Systems', 'Systems software; processors, storage, input, output and connectivity; networks and protocols'],
          ['Paradigms', 'At A level, "the need for and characteristics of a variety of programming paradigms"'],
          ['Skills', '"design, write and test programs"; arguing for correctness and efficiency; modular structure; writing specifications'],
          ['Wider issues', 'The moral, ethical, legal and cultural opportunities and risks of digital technology']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the core matters to a tutor',
          left: [
            'Because most of the subject is shared, good teaching of the core serves a student on either board. Recursion, a hash table, a two\'s complement number or a SQL join is the same idea at AQA and at OCR.',
            'What changes between boards is how the idea is examined: on screen or on paper, in a real language or in pseudocode, inside a pre-released program or from a blank page.'
          ],
          rightH3: 'What the core leaves to boards',
          right: [
            'Paper structure, timings, weightings, project rules and languages. Those come from each specification, and the board doors linked below go through them one board at a time.',
            'Outside England, check the local list. OCR\'s specification says H446 "is available in England" and points Wales and Northern Ireland to their own qualification lists.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/gce-as-and-a-level-for-computer-science" rel="noopener" target="_blank">Department for Education, GCE AS and A level subject content for computer science</a>, April 2014, reference DFE-00359-2014. Read 31 October 2026.' }
      ]
    },
    {
      id: 'boards', tint: 'deep', eyebrow: 'AQA or OCR',
      h2: 'What is the difference between AQA and OCR A level Computer Science?',
      lede: 'Both put 80 per cent in exams and 20 per cent in a project. They part company on where code is written in the exam, and on who can enter at all.',
      body: [
        { kind: 'table', caption: 'AQA 7517 and OCR H446 compared, from each board\'s current specification', head: ['Feature', 'AQA 7517 (v1.6, July 2023)', 'OCR H446 (v3.0, April 2026)'], rows: [
          ['Exam papers', 'Paper 1 on screen, 2 hours 30 minutes, 40 per cent; Paper 2 written, 2 hours 30 minutes, 40 per cent', 'Components 01 and 02, both written, 2 hours 30 minutes each, 40 per cent each'],
          ['Programming in the exam', 'In an Electronic Answer Document, working with a pre-released Skeleton Program', 'On paper; any pseudocode style whose meaning "could be reasonably inferred by a competent programmer"'],
          ['Calculators', 'Not stated in the summary we read', '"(no calculators allowed)" on both written papers'],
          ['Project', 'Non-exam assessment, 75 marks, 20 per cent', 'Programming project, 70 marks, 20 per cent'],
          ['Languages', 'C#, Java, Python (not Python 2), VB.Net', 'Project in Python, C family, Java, Visual Basic, PHP or Delphi, with "a suitable graphical interface"'],
          ['Private candidates', '"These specifications are not available to private candidates."', '"Private candidates may enter for OCR assessments."'],
          ['Teaching time', 'Not stated in the pages we read', 'Total qualification time and guided learning time of 360 hours']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'For a student at school',
          left: [
            'The school has already chosen. Find the board on the school\'s course information or exam timetable, then go to the matching page: <a class="ag-inline-link" href="/aqa-a-level-computer-science-7517-help">AQA 7517 help</a> or <a class="ag-inline-link" href="/ocr-a-level-computer-science-h446-help">OCR H446 help</a>.',
            'For the 20 per cent project at either board, see <a class="ag-inline-link" href="/a-level-computer-science-nea-help">A level Computer Science coursework help</a>, which sets out where the marks are and what the boards say about AI.'
          ],
          rightH3: 'For a private or home-educated candidate',
          right: [
            'The board may be decided for you. AQA\'s specification says plainly that it is not available to private candidates. OCR\'s says private candidates may enter, must be based in the UK, and must find an approved centre willing to host them; it adds that the centre "may charge for this facility" and recommends arranging it "early in the course".',
            'Ask any centre how it will handle the 20 per cent programming project before agreeing an entry; the exams alone are not the whole qualification.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/computer-science-and-it/as-and-a-level/computer-science-7516-7517" rel="noopener" target="_blank">AQA 7516/7517 specification</a>, version 1.6, sections 1 and 7.8; <a class="ag-inline-link" href="https://www.ocr.org.uk/qualifications/as-and-a-level/computer-science-h046-h446-from-2015/" rel="noopener" target="_blank">OCR H446 specification</a>, version 3.0, sections 1, 3, 4 and 5. Cambridge 9618, taken in many international schools, is a separate qualification covered on our <a class="ag-inline-link" href="/cambridge-a-level-computer-science-online-classes">Cambridge A level Computer Science page</a>.' }
      ]
    },
    {
      id: 'maths', tint: '', eyebrow: 'The maths',
      h2: 'Do you need maths for A level Computer Science?',
      lede: 'Some, and the amount has a legal floor. The DfE content says every accredited specification "must contain a minimum of 10% mathematics", and names three topics.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Boolean algebra', p: 'Expressions in AND, OR and NOT, simplified with laws such as De Morgan\'s. It is the algebra of logic gates and of every if statement with more than one condition.' },
          { h3: 'Complexity of algorithms', p: 'Comparing how running time or memory grows with input size, written in Big O notation. The DfE marks this topic as A level only "due to its advanced nature".' },
          { h3: 'Number bases', p: 'Binary, hexadecimal and decimal, signed and unsigned integers, fixed and floating point. The DfE calls these Level 2 concepts applied in a Level 3 context.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A level Maths is not required by the boards',
          left: [
            'Neither specification we read requires A level Maths to take A level Computer Science. The maths both boards assess is the list above, which OCR lists again as topics "counted as Level 2 (or higher) mathematics", while saying candidates will be "expected to apply the skills in a Level 3 context".',
            'Schools and universities set their own entry requirements, so check those separately.'
          ],
          rightH3: 'Where students actually struggle',
          right: [
            'In our view, the hard part is rarely the arithmetic. It is the reasoning: why a binary search halves the work, why a two\'s complement byte can be negative, why two Boolean expressions are equal. Those are the habits the worked examples below practise.',
            'Students taking <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level Maths</a> alongside will meet logarithms there, which is where the log in O(n log n) comes from.'
          ] },
        { kind: 'source', html: 'Sources: DfE subject content, annex on mathematical skills; OCR H446 specification, section 5c, Mathematical skills.' }
      ]
    },
    {
      id: 'examples', tint: 'tint', eyebrow: 'Worked examples, written by us',
      h2: 'What does A level Computer Science reasoning look like?',
      lede: 'Three original problems, one from each of the DfE\'s maths topics, worked in full. None is from an AQA or OCR paper.',
      body: [
        { kind: 'three', cells: [
          { h3: '1. One byte, two meanings', p: 'What is 10110110 in decimal? As an unsigned byte: 128 + 32 + 16 + 4 + 2 = 182, which is B6 in hex. As 8-bit two\'s complement the top bit is worth minus 128, so the value is minus 128 + 54 = minus 74. Check: 182 minus 256 is minus 74. The bits never changed; only the agreed meaning did.' },
          { h3: '2. Simplify the condition', p: 'Simplify (A AND B) OR (A AND NOT B). Factor out A: A AND (B OR NOT B). B OR NOT B is always true, so the whole expression is just A. In code, if (a and b) or (a and not b) can become if a. A truth table with four rows confirms it.' },
          { h3: '3. How many guesses?', p: 'At most how many comparisons does binary search need on 1,000,000 sorted items? Each comparison halves what is left. Two to the power 19 is 524,288, too small; two to the power 20 is 1,048,576, enough. So at most 20, against up to 1,000,000 for a linear search. That gap is O(log n) against O(n).' }
        ] },
        { kind: 'code', label: 'Example 3 in Python (ours)', lang: 'Python', code: BSEARCH, note: 'Run it and the comparison count comes back at or under 20. Change the list to ten million items and the bound rises to 24, not to ten times as many. Students learn more from changing the input and predicting the count than from reading the function.' },
        { kind: 'table', mt: true, caption: 'A practice set written by Modern Age Coders', head: ['Question (ours)', 'Answer', 'The reasoning'], rows: [
          ['Convert hexadecimal 3F to decimal', '63', '3 sixteens are 48, plus 15'],
          ['What is 11111111 as 8-bit two\'s complement?', 'Minus 1', 'Minus 128 plus 127'],
          ['Simplify NOT(NOT A) OR (A AND B)', 'A', 'Double negation gives A; A OR (A AND B) absorbs to A'],
          ['Two nested loops, each running n times: what order of time?', 'O(n squared)', 'n repetitions of n steps'],
          ['Maximum binary search comparisons on 1,000 sorted items', '10', 'Two to the power 10 is 1,024'],
          ['How many different patterns can 12 bits hold?', '4,096', 'Two to the power 12']
        ] }
      ]
    },
    {
      id: 'choose', tint: 'deep', eyebrow: 'Choosing a tutor',
      h2: 'What should I look for in an A level Computer Science tutor?',
      lede: 'Our checklist, which applies to us as much as anyone. The first question is the board; the last is the project.',
      body: [
        { kind: 'ol', items: [
          'Ask which board and specification code the tutor will teach to: 7517 and H446 examine the same core in different ways.',
          'For AQA, ask whether they will work with the Preliminary Material and Skeleton Program in the board\'s language your school uses.',
          'For OCR, ask how they will practise writing code on paper, in pseudocode a marker can follow.',
          'Ask how they teach the maths topics, Boolean algebra, complexity and number bases, not only programming.',
          'Ask where their line is on the project. The answer should be that they teach method and never write, edit or debug the student\'s own project code.',
          'Ask for a free first lesson on a topic the student finds hard, and judge the reasoning, not the slides.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Our line on the project',
          left: [
            'We teach how to analyse a problem, design, test and evaluate, using our own example projects. We do not write, edit, debug or review any part of a student\'s assessed project.',
            'The detail of what each board allows, including on AI tools, is on our <a class="ag-inline-link" href="/a-level-computer-science-nea-help">coursework help page</a>.'
          ],
          rightH3: 'What we do not promise',
          right: [
            'A grade, a university offer or a mark on any component. We teach the subject and the exam technique; the result is the student\'s.',
            'Teaching in every language. We teach in Python and introduce the board\'s pseudocode conventions; a student whose school uses C# or Java for AQA should tell us at the start.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Across two years',
    h2: 'From Year 12 to the summer of Year 13',
    lede: 'The order we teach in, built from the DfE core. Projects usually start in Year 12 and finish in Year 13; your school sets the dates.',
    table: { caption: 'Four stages for A level Computer Science, our plan', head: ['When', 'Stage', 'Secure when'], rows: [
      ['Autumn of Year 12', '1. Programming fluency', 'Writes and tests functions, lists, dictionaries and files without help'],
      ['Spring of Year 12', '2. Data and its representation', 'Converts bases, explains two\'s complement and floating point, designs a simple database'],
      ['Year 12 into Year 13', '3. Algorithms and complexity', 'Traces and writes searches, sorts and graph algorithms, and compares their Big O'],
      ['Year 13', '4. Papers and paradigms', 'Answers full papers in the board\'s format; explains object-oriented and functional ideas']
    ] },
    left: { h3: 'Arriving without GCSE Computer Science', ps: [
      'It is possible, but the first term needs extra programming time. Our <a class="ag-inline-link" href="/courses/python-complete-masterclass-teens">Python for teens</a> course closes that gap.',
      'Olympiad-minded students can try the <a class="ag-inline-link" href="/british-informatics-olympiad-preparation">British Informatics Olympiad</a>.'
    ] },
    right: { h3: 'After the A level', ps: [
      'Students going on to computing degrees often continue with <a class="ag-inline-link" href="/courses/data-structures-algorithms-masterclass-college">data structures and algorithms</a>.',
      'Lessons lighten around mocks and the exam season.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Courses for sixth-form computer scientists',
    lede: 'The A level itself, the skills under it, and what follows.',
    bands: [
      { num: 'I', h3: 'The qualification', sub: 'Years 12 and 13', courses: [
        { code: 'UK / LCSU / 01', slug: 'a-level-computer-science-course-aqa-ocr', title: 'A level Computer Science, AQA and OCR', blurb: 'Both boards, in Python, with paper practice.' },
        { code: 'UK / LCSU / 02', slug: 'cambridge-a-level-computer-science-9618-course', title: 'Cambridge 9618', blurb: 'For international schools on Cambridge.' },
        { code: 'UK / LCSU / 03', slug: 'ib-diploma-computer-science-course', title: 'IB Computer Science', blurb: 'For diploma students instead of A levels.' }
      ] },
      { num: 'II', h3: 'Underneath', sub: 'Programming and algorithms', courses: [
        { code: 'UK / LCSU / 04', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Fluency first, from the beginning.' },
        { code: 'UK / LCSU / 05', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'Data structures and algorithms in practice.' },
        { code: 'UK / LCSU / 06', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'For AQA students whose school uses Java.' }
      ] },
      { num: 'III', h3: 'Alongside and after', sub: 'Maths and university', courses: [
        { code: 'UK / LCSU / 07', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Logarithms, proof and the maths behind complexity.' },
        { code: 'UK / LCSU / 08', slug: 'data-structures-algorithms-masterclass-college', title: 'University DSA', blurb: 'The next step for computing degrees.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live code, in the board\'s format',
    lede: TIMING + ' Our teachers work from India; India time is four and a half hours ahead of UK time in summer and five and a half in winter, and every lesson is booked in UK time.',
    slots: [
      { time: 'After school', l: 'The usual slot in Years 12 and 13.' },
      { time: 'Weekend morning', l: 'Long enough for a full paper.' },
      { time: 'Holidays', l: 'Revision blocks before mocks and summer exams.' }
    ],
    cells: [
      { h3: 'Code you run', p: 'Every idea written and run in Python during the lesson.' },
      { h3: 'Board format', p: 'On-screen practice for AQA, on-paper pseudocode for OCR.' },
      { h3: 'Maths topics', p: 'Boolean algebra, complexity and bases taught as reasoning.' },
      { h3: 'Project method', p: 'Taught on our examples; your project stays yours.' },
      { h3: 'Group or 1-on-1', p: 'A batch of 15 to 20 at one stage, or a teacher for one student.' },
      { h3: 'No promises', p: 'We teach; grades and offers are the student\'s.' }
    ]
  },

  projectsH2: 'Projects our students built',
  projectsLede: 'Work made in our classes, none of it assessed coursework. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'From parents and students on our Google profile, unedited.',

  fees: {
    h2: 'Fees for A level Computer Science',
    lede: 'One monthly fee, shown in the currency we use for UK families, with nothing to sign for the year. The first lesson is free.',
    free: ['A lesson on a topic the student finds hard', 'An honest view of where they stand', 'A phone number is enough'],
    group: ['15 to 20 students at one stage', 'One teacher through Years 12 and 13', 'Board-format paper practice', 'Project method on our examples'],
    one: ['One student, one teacher', 'Paced to the school\'s board and dates', 'Useful for a private candidate']
  },

  faq: {
    eyebrow: 'A level Computer Science questions',
    h2: 'What students and parents ask',
    items: [
      { q: 'What do you study in A level Computer Science?', a: 'The DfE core shared by every board: programming, data structures, data representation, algorithms and their efficiency, databases, systems software, architecture, networks, programming paradigms and the wider issues of digital technology, with at least 10 per cent mathematics.' },
      { q: 'Is AQA or OCR A level Computer Science harder?', a: 'Neither board publishes a comparison and we will not invent one. AQA sets its programming paper on screen with a pre-released Skeleton Program; OCR sets two written papers with code in pseudocode. Some students prefer one format to the other.' },
      { q: 'Do I need A level Maths for A level Computer Science?', a: 'The AQA and OCR specifications we read do not require it. Every specification must contain at least 10 per cent maths: Boolean algebra, complexity of algorithms and number bases, applied at A level standard.' },
      { q: 'Can I take A level Computer Science as a private candidate?', a: 'With OCR, yes, if you are based in the UK and an approved centre agrees to host you; the centre may charge. AQA says its 7517 specification is not available to private candidates.' },
      { q: 'How is AQA A level Computer Science assessed?', a: 'Paper 1 is a 2 hour 30 minute on-screen exam worth 40 per cent, Paper 2 a 2 hour 30 minute written exam worth 40 per cent, and the non-exam assessment is 75 marks and 20 per cent.' },
      { q: 'How is OCR A level Computer Science assessed?', a: 'Two written papers, Computer systems and Algorithms and programming, each 2 hours 30 minutes and 40 per cent with no calculators, plus a 70-mark programming project worth 20 per cent.' },
      { q: 'Which programming language should I use?', a: 'The one your school uses for the exam. AQA supports C#, Java, Python and VB.Net; OCR accepts several languages for the project. We teach in Python and introduce each board\'s conventions.' },
      { q: 'Will you help with my NEA or programming project?', a: 'We teach project method on our own examples. We never write, edit, debug or review any part of a student\'s assessed project.' },
      { q: 'When are lessons?', a: TIMING + ' All times are in UK time.' },
      { q: 'Is there a free trial lesson?', a: 'Yes. The first lesson is free, on a topic the student finds hard, and afterwards we tell you honestly what we saw.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for A level computer scientists',
    lede: 'The board doors, the project, and the routes around them.',
    items: [
      { href: '/aqa-a-level-computer-science-7517-help', label: 'AQA A level Computer Science 7517', p: 'The on-screen paper and the Skeleton Program.' },
      { href: '/ocr-a-level-computer-science-h446-help', label: 'OCR A level Computer Science H446', p: 'Two written papers and a free-choice project.' },
      { href: '/a-level-computer-science-nea-help', label: 'A level Computer Science coursework', p: 'Where the project marks are, and AI rules.' },
      { href: '/cambridge-a-level-computer-science-online-classes', label: 'Cambridge A level Computer Science', p: 'The 9618 route in international schools.' },
      { href: '/ccea-a-level-software-systems-development-help', label: 'CCEA Software Systems Development', p: 'The Northern Ireland A level route.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Our hub for every UK page.' }
    ]
  },

  start: {
    h2: 'Book a free A level lesson',
    lede: 'Tell us your board, your year and the topic that worries you most. We teach that topic, live, and then tell you what we saw.',
    readFirst: 'Reading first? Each <a class="ag-inline-link" href="/courses">course page</a> has its syllabus, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our method.',
    note: 'WhatsApp reaches us quickest and is free from a UK phone. Replies come from India, on a number starting +91.',
    formNote: 'No card details. One reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'A level computing', links: [
        { href: '/aqa-a-level-computer-science-7517-help', label: 'AQA 7517' },
        { href: '/ocr-a-level-computer-science-h446-help', label: 'OCR H446' },
        { href: '/a-level-computer-science-nea-help', label: 'Coursework help' },
        { href: '/cambridge-a-level-computer-science-online-classes', label: 'Cambridge 9618' }
      ] },
      { h4: 'More', links: [
        { href: '/a-level-maths-tuition-online', label: 'A level maths' },
        { href: '/british-informatics-olympiad-preparation', label: 'Informatics Olympiad' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'One core, two exams; find the board first'
  },

  personalityCss: `
.ag-root.ag-lcsu .ag-hero h1 { letter-spacing: -0.022em; }
.ag-root.ag-lcsu .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-lcsu .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-lcsu .ag-table caption { text-align: left; font-weight: 630; }
.ag-root.ag-lcsu .ag-table th:first-child { width: 20%; }
`,

  dossier: {
    curriculumAuthority: 'England, A level Computer Science. DfE subject content (April 2014, DFE-00359-2014): knowledge and skills "common to all AS and A level specifications"; A level additions on algorithm efficiency, standard algorithms, databases and paradigms; "Any accredited specification in computer science must contain a minimum of 10% mathematics"; Boolean algebra, complexity (A level only) and number bases. AQA 7516/7517 v1.6 (31 July 2023): Paper 1 on screen 2 hours 30 minutes 40 per cent with Preliminary Material and Skeleton Program; Paper 2 written 2 hours 30 minutes 40 per cent; NEA 75 marks 20 per cent; C#, Java, Python, VB.Net; "These specifications are not available to private candidates." OCR H446 v3.0 (April 2026): two written papers, no calculators, 40 per cent each; project 20 per cent; private candidates may enter, UK-based, centre may charge; 360 hours TQT; 10 per cent maths; any reasonable pseudocode; project languages and graphical interface; England availability.',
    localProject: 'One core, two exams, one door that only one board opens. The page lays out the DfE subject content every A level Computer Science specification shares, then compares AQA 7517 and OCR H446 in one table from each current specification, including the decisive fact that AQA\'s specification is not available to private candidates while OCR\'s is. It explains the 10 per cent maths floor and its three topics, works three original examples (one byte read unsigned and as two\'s complement, a Boolean simplification, the binary search bound) with a runnable Python function and a six-question practice set, and gives a tutor-choosing checklist that ends on the project boundary. It routes down to the AQA, OCR and coursework doors rather than repeating them. Lesson family: a generic subject door that routes to board doors by the facts that decide the board.',
    requiredMentions: ['common to all AS and A level specifications in computer science', 'must contain a minimum of 10% mathematics', 'These specifications are not available to private candidates', 'Private candidates may enter for OCR assessments', 'could be reasonably inferred by a competent programmer', 'a suitable graphical interface', 'One byte, two meanings', 'Total qualification time and guided learning time of 360 hours'],
    sources: [
      { claim: 'DfE GCE AS and A level subject content for computer science, April 2014: shared content, skills, 10 per cent maths annex.', url: 'https://assets.publishing.service.gov.uk/media/5a7dbefb40f0b65d88634282/A_level_computer_science_subject_content.pdf' },
      { claim: 'AQA AS and A-level Computer Science 7516/7517 specification v1.6: assessments, languages, private candidates.', url: 'https://filestore.aqa.org.uk/resources/computing/specifications/AQA-7516-7517-SP-2015.PDF' },
      { claim: 'Cambridge OCR A Level Computer Science H446 specification v3.0 (April 2026): components, calculators, private candidates, TQT, maths skills, pseudocode, project languages.', url: 'https://www.ocr.org.uk/Images/170844-specification-accredited-a-level-gce-computer-science-h446.pdf' }
    ],
    rejectedClaims: [
      'Entry numbers, grade distributions and grade boundaries: JCQ returns 403 to us and none were read at a primary source.',
      'Which board is harder: no board publishes a comparison; not claimed.',
      'University entry requirements for computing degrees: set by each university; not stated.',
      'Eduqas/WJEC and CCEA A level details: separate rows and pages; only linked.',
      'AQA calculator rules: not in the assessment summary read; left as not stated.',
      'Any grade, mark or offer promise.'
    ]
  }
};
