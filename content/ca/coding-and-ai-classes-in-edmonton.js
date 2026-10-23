'use strict';
// Edmonton (cg- city page, Canada cluster Plan 2 Wave 2, row 104). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md. Shape from coding-and-ai-classes-in-toronto.js, prose fresh.
// Spine: Edmonton is where Alberta's legislature sits and where its tests are written into policy; computational thinking
// is already a reporting category on the Grade 6 science test, and a draft Grade 7 to 9 program adds computer science and
// AI. The city's pet licence file teaches the data lesson every young analyst needs: read the description before the chart.
// Sources, read raw on 22 October 2026 (Alberta facts from keyword-research-2026-09/ca/facts-schools-contests.md and raw files
// in ca/src/alberta/ and ca/src-pilots/alberta-grade-6-math-pat-practice/ + alberta-math-shared/; geography from
// ca/facts-geo.md; pet file, metadata and licence pages in ca/src-pilots/coding-and-ai-classes-in-edmonton/):
//  - Legislative Assembly of Alberta address "9820 - 107 Street, NW Edmonton, Alberta" (facts-geo.md, capitals).
//  - 2026-2027 Grade 6 Parent Guide (edc-grade-6-parent-guide-2026-27.pdf): Grade 6 Science test reporting categories "Matter
//    and Energy Resources, Interactions, Climate and Ecosystems, Solar Systems, Computational Thinking, and Scientific Method.";
//    the science test "consists of 50 questions"; "All students registered in grades 6 and 9 or those in their sixth or ninth
//    year of schooling are expected to write the tests for their grades."; "Alberta Education and Childcare discourages test
//    rehearsal and coaching."
//  - General Information Bulletin 2026-2027, PAT schedules (ecc-pat-administration-schedules.pdf): Grade 6 Science Friday June
//    11, 9 AM-10 AM; Grade 6 Mathematics Part(ie) A Monday June 14, Part(ie) B Wednesday June 16; Grade 9 Mathematics Part(ie) A
//    Friday January 22 or Tuesday June 15; Grade 9 Science Tuesday January 26 or Tuesday June 22 (months headed 2027; en dashes
//    in source).
//  - alberta.ca/provincial-achievement-tests: "administered annually to all Alberta students in grades 6 and 9"; tests written
//    "in a digital environment rather than pencil and paper".
//  - alberta.ca/curriculum-how-we-got-here: draft 7 to 9 "By integrating topics like artificial intelligence, computer science
//    and money management"; "ahead of mandatory implementation in September 2027"; grades 4 to 6 science implemented 2024/2025.
//  - CEMC: CCC "Wednesday, February 17, 2027", Senior level "intermediate to advanced programming skills", Senior Q5 "IOI level
//    question"; CCO "Approximately 20 of the top official CCC Senior participants from schools in Canada are invited", "CCO
//    participants must use C++."; PCF "Tuesday, February 23, 2027 and Wednesday, February 24, 2027"; FGH "Wednesday, April 7,
//    2027"; Euclid "Tuesday, April 6, 2027"; "all students must participate through their school"; past contests free.
//  - facts-geo.md: Edmonton area code 780 (Northern Alberta) with the province-wide overlays 587, 825 and 368 (CNAC files via the
//    Internet Archive); Alberta UTC-6 all year (Official Time Act); BC UTC-7 all year; Manitoba UTC-5 from 1 November 2026.
//  - City of Edmonton open data, Pet Licenses by Neighbourhood (5squ-mg4w), pet-licenses-by-neighbourhood.csv, 17,365,974
//    bytes, sha256 07b2bd37...beed5902, downloaded 22 October 2026 (rows updated 21 October 2026, update frequency Daily);
//    description: "Distribution of various currently-licensed pets (cats, dogs, pigeons) by neighbourhood."; "this is a
//    snapshot of pets that were licensed as of the last update date of this dataset"; "It is therefore not possible to use this
//    dataset to see trends in pet licensing over time."; licence page "Open Government Licence - Edmonton", attribution
//    "Contains information licensed under the Open Government Licence - City of Edmonton." (en dash in source), commercial use
//    allowed, non-endorsement clause.
// Our own calculations (edmonton_pets.py, python -I, output edmonton_pets.out.txt; extra checks on the same file): 85,368 rows,
// COUNT is 1 on every row; PET_TYPE Dog 56,140, Cat 28,917, Hens 143, Pigeons 97, Bees 69, blank 2; YEAR 2023 9, 2024 1,923,
// 2025 24,131, 2026 59,281; 33 rows dated before 2024, earliest 2013; 2026 rows run only to October (3,271 October rows); dog
// breeds LABRADOR RETRIEVER 5,015, GERMAN SHEPHERD 3,444, UNKNOWN 2,822; 336 named neighbourhoods, 12 rows blank.
// Not used on purpose: pet GENDER and SPAYED_OR_NEUTERED columns, and neighbourhood names.
// Lesson family: reading a dataset's own description before plotting it (a snapshot is not a time series).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv',
  'from collections import Counter',
  '',
  'kinds = Counter()',
  'years = Counter()',
  'dog_breeds = Counter()',
  '',
  'with open("pet-licenses-by-neighbourhood.csv", encoding="utf-8-sig") as pets:',
  '    for row in csv.DictReader(pets):',
  '        kinds[row["PET_TYPE"] or "(blank)"] += 1',
  '        years[row["YEAR"]] += 1',
  '        if row["PET_TYPE"] == "Dog":',
  '            dog_breeds[row["BREED"]] += 1',
  '',
  'print(kinds.most_common())',
  'for year in sorted(years)[-4:]:',
  '    print(year, years[year])',
  'print(dog_breeds.most_common(3))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'EDMONTON', label: 'Edmonton', blurb: 'Coding and AI for Edmonton students: computational thinking on Alberta\'s Grade 6 test, a pet licence data lesson, and the CCC Senior road.' },
  market: CA,
  slug: 'coding-and-ai-classes-in-edmonton',
  code: 'aie',
  accent: '#2A7011',
  accentRationale: 'Edmonton: a muted river-valley green, #2A7011, for the North Saskatchewan parkland; allocated by the cluster plan; nearest site accent 6.4 RGB units away, nearest Canada accent 12.0 away; contrast 5.79 on the paper #FBF8F2 and above 4.9 on all three paper tints',
  pageType: 'city',
  place: {
    name: 'Edmonton',
    eyebrow: 'Edmonton, Alberta',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Alberta' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-alberta', name: 'Alberta' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Alberta', href: '/coding-classes-in-alberta' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Edmonton',
  title: 'Coding and AI Classes in Edmonton | Live Online, Kids to Adults',
  description: 'Live online coding, Python and AI classes for Edmonton learners: computational thinking on Alberta\'s Grade 6 test, CCC Senior dates and a pet licence data lesson.',
  ogDescription: 'Alberta already tests computational thinking in Grade 6 science. Here is what Edmonton students meet, the 2026 to 2027 contest dates, and live online classes.',
  twitterDescription: 'Edmonton coding, Python, data and AI classes, live online, on Alberta time all year.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and AI Classes for Edmonton Students',
    description: 'Live online coding for Edmonton learners from age 6 to adult: Python for children, data science for teens, CCC Junior and Senior preparation, and Pre-calculus 12 and Math 30-1 support, placed by level.'
  },

  h1: 'Coding and AI classes in Edmonton',
  capsuleQ: 'Where can an Edmonton student study coding, data and AI with a live teacher?',
  capsule: 'With Modern Age Coders, live online. We teach Edmonton learners from age 6 to adult, in a live group of fifteen to twenty or one to one: children in Python and AI for Kids, teens in Data Science for Teens or our CCC preparation course, and Grade 12 students in Western Canada Grade 12 Math. Your first lesson costs nothing.',
  lead: 'Alberta\'s Legislative Assembly gives its address as 9820 - 107 Street NW, Edmonton, so the capital is where the province\'s school rules are debated. One detail in its school tests surprises most parents: the Grade 6 science test already reports on computational thinking, alongside matter, ecosystems and the solar system. A draft Grade 7 to 9 program goes further and brings computer science and artificial intelligence into the middle years, with mandatory use planned for September 2027. So an Edmonton child is expected to think like a programmer before high school, whether or not anyone teaches them to program. This page sets out those Alberta facts with their dates, the CEMC contests that lead an Edmonton teen toward the Canadian Computing Olympiad, and a lesson we teach on the city\'s pet licence file, where the most important line is in the description, not the data.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Edmonton.',

  picks: {
    eyebrow: 'Course picks for Edmonton',
    h2: 'Four places an Edmonton learner can begin',
    intro: 'Each pick matches a stage of Alberta school, and the free first lesson confirms the fit before anything is booked.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Grades 4 to 7', note: 'A child\'s first typed language, taught through drawings, games and small puzzles that build the step-by-step thinking Grade 6 science now reports on.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 9 to 12', note: 'Python for real data: loading files like the pet licence list, counting, charting and, above all, reading what a dataset can and cannot show.' },
      { course: 'ccc-junior-and-senior-preparation-course', band: 'Grades 8 to 12', note: 'Structured preparation for the Canadian Computing Competition, from Junior loops and counting to the Senior problems that lead toward the CCO.' },
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', band: 'Grade 12', note: 'Math 30-1 understood properly, beside the school course, for students whose plans need it.' }
    ]
  },

  sections: [
    {
      id: 'alberta', tint: '', eyebrow: 'Alberta tests and curriculum',
      h2: 'Computational thinking on the Grade 6 test, and AI in the draft Grade 7 to 9 program',
      intro: 'Edmonton schools follow Alberta\'s curriculum and write its Provincial Achievement Tests (PATs). Everything here was checked against Alberta\'s bulletins and web pages on 22 October 2026; quoted phrases are the province\'s own and the rest is our summary.',
      body: [
        { kind: 'table', caption: 'Provincial Achievement Test sittings in 2027 for Grades 6 and 9, as scheduled in the 2026-2027 General Information Bulletin for Grades 6 and 9 (times are Alberta time)', head: ['Test', 'When Alberta schedules it', 'Worth knowing'], rows: [
          ['Grade 6 Science', 'Friday 11 June 2027, 9 to 10 am', '50 questions; Computational Thinking is one of six reporting categories'],
          ['Grade 6 Mathematics, Part A', 'Monday 14 June 2027', 'Number questions, no calculator'],
          ['Grade 6 Mathematics, Part B', 'Wednesday 16 June 2027', 'Questions from across the Grade 6 math curriculum'],
          ['Grade 9 Mathematics, Part A', 'Friday 22 January or Tuesday 15 June 2027', 'The bulletin lists a January and a June sitting'],
          ['Grade 9 Science', 'Tuesday 26 January or Tuesday 22 June 2027', 'Also offered in January and June']
        ] },
        { kind: 'p', text: 'The Grade 6 parent guide names the six reporting categories of the science test: Matter and Energy Resources, Interactions, Climate and Ecosystems, Solar Systems, Computational Thinking, and Scientific Method. In other words, an Edmonton eleven-year-old is assessed on reasoning in steps, spotting patterns and following an algorithm, in the same sitting as questions about ecosystems. Alberta adds that the tests are taken on screen, and that every student registered in Grade 6 or 9 is expected to write them.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The draft Grade 7 to 9 program', p: 'Alberta describes its renewed middle-years curriculum as integrating topics like artificial intelligence, computer science and money management. Classrooms may pilot it in 2026 to 2027, ahead of mandatory implementation in September 2027.' },
          { h3: 'Science in Grades 4 to 6', p: 'Alberta lists new Grades 4 to 6 science as implemented in schools in 2024 to 2025. A child in Grade 6 in Edmonton this year is studying from that newer program, computational thinking included.' },
          { h3: 'No drilling for the test', p: 'The Grade 6 parent guide says plainly that Alberta Education and Childcare discourages test rehearsal and coaching. We agree, and we do not drill PAT formats; we teach the reasoning, and a test becomes one more place to use it.' }
        ] },
        { kind: 'callout', h3: 'Our role beside Edmonton schools', p: 'We teach alongside a student\'s Alberta courses and we do not grant Alberta credits, PAT results or diploma marks. We are not connected with Alberta Education and Childcare, any Edmonton school board or the City of Edmonton.' },
        { kind: 'p', text: 'Families preparing for those tests can read our <a class="cg-inline-link" href="/alberta-grade-6-math-pat-practice">Grade 6 math PAT practice</a> and <a class="cg-inline-link" href="/alberta-grade-9-math-pat-practice">Grade 9 math PAT practice</a> pages, and older students our <a class="cg-inline-link" href="/math-30-1-tutor-alberta">Math 30-1 tutoring</a> page. For the province-wide coding picture, see <a class="cg-inline-link" href="/coding-classes-in-alberta">coding classes in Alberta</a>.' }
      ]
    },
    {
      id: 'pets', tint: 'deep', eyebrow: 'Edmonton data project',
      h2: 'Did Edmonton\'s pets multiply in 2026? Read the description before the chart',
      intro: 'The City of Edmonton publishes its current pet licences by neighbourhood as open data, refreshed daily. It is a friendly file for a first data project, and it hides a trap that catches adults too. Every count below is ours, from the file downloaded on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Our counts from the City of Edmonton Pet Licenses by Neighbourhood file (85,368 rows, one licensed animal per row; downloaded 22 October 2026). YEAR is the year in the licence date', head: ['What we counted', 'Rows'], rows: [
          ['PET_TYPE Dog', '56,140'],
          ['PET_TYPE Cat', '28,917'],
          ['PET_TYPE Hens', '143'],
          ['PET_TYPE Pigeons', '97'],
          ['PET_TYPE Bees', '69'],
          ['YEAR 2024', '1,923'],
          ['YEAR 2025', '24,131'],
          ['YEAR 2026 (to October)', '59,281']
        ] },
        { kind: 'p', text: 'Put the last three rows on a bar chart and it looks as if licensed pets more than doubled in a year. They did not, or at least this file cannot say so. The city\'s own description explains that the dataset is a snapshot of pets licensed as of its last update, so an animal whose licence lapsed has dropped out, and it states that it is not possible to use this dataset to see trends in pet licensing over time. The 2026 rows are mostly recent renewals and the older years are the survivors. This is the beginner script that produced the table, standard-library Python run beside the downloaded CSV:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count what is there', p: 'A Counter over PET_TYPE gives five animal types and two blank rows. Every row has a COUNT of 1, so counting rows and adding the COUNT column give the same answer here, which is worth checking rather than assuming.' },
          { h3: '2. Compare with the description', p: 'The metadata says the file covers cats, dogs and pigeons. The file also holds 143 hens and 69 bees. A description is a claim about the data, and a careful student tests it like any other claim.' },
          { h3: '3. Refuse the tempting chart', p: 'The YEAR column runs back to 2013 on a single row, with only 33 rows dated before 2024. A student who reads the city\'s note writes &ldquo;licences still active, by year issued&rdquo; on the axis, or does not draw the chart at all.' }
        ] },
        { kind: 'table', mt: true, caption: 'Further checks our students run on the same City of Edmonton file (our results)', head: ['Check', 'Result'], rows: [
          ['Most common dog breeds recorded', 'LABRADOR RETRIEVER 5,015; GERMAN SHEPHERD 3,444; UNKNOWN 2,822'],
          ['Named neighbourhoods in the file', '336, plus 12 rows with no neighbourhood'],
          ['Rows dated October 2026', '3,271, a partial month at download'],
          ['Value of COUNT on every row', '1']
        ] },
        { kind: 'callout', h3: 'What the file cannot tell you', p: 'It cannot say how many pets live in Edmonton, only how many hold a current licence, and it cannot show a trend. The third most common dog breed is UNKNOWN, which is a fact about the form, not about dogs. Writing those limits down is as much a part of the project as the code.' },
        { kind: 'p', text: 'The data is used under the Open Government Licence - Edmonton, which permits commercial reuse provided the city is credited. Contains information licensed under the Open Government Licence - City of Edmonton (<a class="cg-inline-link" href="https://data.edmonton.ca/stories/s/Open-Government-Licence-Edmonton/msh8-if28/">licence</a>, <a class="cg-inline-link" href="https://data.edmonton.ca/Community-Services/Pet-Licenses-by-Neighbourhood/5squ-mg4w">dataset page</a>). Our counts are our own, and the City of Edmonton is not endorsing this page or these classes.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests from Edmonton',
      h2: 'From high school contests to the Canadian Computing Olympiad, 2026 to 2027',
      intro: 'Edmonton schools order most of their contests from CEMC at the University of Waterloo. For a teenager who already codes, the ladder runs from the CCC Senior paper to an invitation-only olympiad. Each date below is the one CEMC publishes for the Americas, as it stood on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'CEMC contests on the high school and olympiad path, 2026 to 2027 (CEMC dates and wording)', head: ['Step', 'What CEMC says', 'Date'], rows: [
          ['CCC Senior', 'For intermediate to advanced programmers; the last question is an &ldquo;IOI level question&rdquo;', 'Wednesday 17 February 2027'],
          ['Canadian Computing Olympiad (CCO)', 'About 20 top official CCC Senior participants from Canadian schools are invited; C++ only', 'Spring 2027, by invitation'],
          ['Pascal, Cayley and Fermat', 'Math contests for Grades 9, 10 and 11', '23 and 24 February 2027'],
          ['Fryer, Galois and Hypatia', 'Full-solution math contests for Grades 9, 10 and 11', 'Wednesday 7 April 2027'],
          ['Euclid', 'For students in their final year of secondary school', 'Tuesday 6 April 2027']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Through a school only', p: 'CEMC\'s wording is that all students must participate through their school; nobody signs up alone. If an Edmonton student\'s school does not take part, CEMC suggests finding another local school that will host them.' },
          { h3: 'Why C++ matters later', p: 'CEMC allows Python and Java at the CCC but requires C++ at the CCO, and warns that a perfect CCC score may not always be possible in Python or Java. Senior hopefuls usually learn C++ alongside Python.' },
          { h3: 'Past papers stay free', p: 'Ten years of CEMC contests can be downloaded free with no account. Students practise on <a class="cg-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests">that archive</a>, and our lessons use problems we write ourselves.' }
        ] },
        { kind: 'p', text: 'The pet file is a gentle start on the same road: count, group, check a claim. Senior problems ask for the same discipline on inputs too large for anything but an efficient method. Our <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a> explains how we build that up, and the <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contests page</a> covers the math side. Modern Age Coders is independent of CEMC and the University of Waterloo.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Edmonton keeps UTC-6 all year: what that means for class times',
      intro: 'Alberta\'s official time is fixed at six hours behind UTC, so Edmonton never changes its clocks. India, where our teachers work, does not change either, which makes the gap between them the same in every month.',
      body: [
        { kind: 'table', caption: 'Two Edmonton example hours with their India and Vancouver equivalents (Alberta UTC-6 and British Columbia UTC-7 all year; India UTC+5:30; our arithmetic)', head: ['In Edmonton', 'In India', 'In Vancouver'], rows: [
          ['Monday 6 to 7 pm', 'Tuesday 5:30 to 6:30 am', 'Monday 5 to 6 pm'],
          ['Sunday 9 to 10 am', 'Sunday 8:30 to 9:30 pm', 'Sunday 8 to 9 am']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Eleven and a half hours', p: 'India is always eleven and a half hours ahead of Edmonton, so a time we agree in September is still right in January. Only families comparing with Ontario see a difference, because Ontario changes on 1 November 2026.' },
          { h3: 'Manitoba moves closer', p: 'From 1 November 2026 Manitoba stays on UTC-5 all year, so Winnipeg will always be one hour ahead of Edmonton, and Vancouver always one hour behind.' },
          { h3: 'Edmonton phone numbers', p: 'Edmonton numbers use 780, plus the Alberta-wide overlays 587, 825 and 368. The form accepts any of them as ten digits after the +1.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a Grade 1 sequence to the CCC Senior paper',
    intro: 'Grades are a starting guess; the free lesson decides.',
    cols: [
      { band: 'Grades 1 to 3', h3: 'Sequences and patterns', p: 'Block coding and puzzles where a child predicts what happens, then checks.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 4 to 7', h3: 'Algorithms in Python', p: 'Typed code, loops and conditions, the habits behind the Computational Thinking category on the Grade 6 test.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Grades 8 to 10', h3: 'Data and contests', p: 'Python with real files, the first CCC Junior paper, and data work like the pet licence lesson.', courses: ['data-science-course-for-teens-python-data', 'ccc-junior-and-senior-preparation-course'] },
      { band: 'Grades 11 and 12', h3: 'Senior level', p: 'C++ for the CCC Senior and beyond, and Math 30-1 alongside the school course.', courses: ['cpp-programming-masterclass-for-teens', 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Would an AI assistant have drawn the misleading pet chart?',
    intro: 'Quite possibly, if nobody told it to read the description first.',
    p1: 'Ask an AI tool to chart Edmonton pet licences by year and you will likely get a tidy bar chart that climbs steeply to 2026. The code will run. The chart will be wrong in the way that matters, because the city says the file is a snapshot and cannot show trends. The tool did what it was asked; the asking was the mistake.',
    p2: 'That is the habit we build: read the source, plan the steps, write the code, then question the result. Students meet AI tools as they get older, under the age rules we follow, and they learn to treat them as assistants to be checked, not authorities to be copied.',
    closer: 'Alberta reports on computational thinking in Grade 6 because thinking in clear steps is the skill underneath everything else, AI tools included.',
    blogAnchor: 'the full case for learning to program in an age of AI assistants'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How classes work for Edmonton and the capital region',
    intro: 'Lessons are live and online, so a student in Sherwood Park, St. Albert or the south side shares the same teacher and screen.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Class or private', p: 'Join a class of fifteen to twenty students at the same level, or work privately with one teacher for CCC Senior training or extra pace.' },
      { h3: 'Planned in Alberta grades', p: 'Teachers know the PAT calendar and the Grade 12 diploma sittings, and they never schedule a new topic on the eve of a test.' },
      { h3: 'Your own work stays yours', p: 'Teachers explain and question; they do not complete school assignments. Marked school work is always the student\'s own.' },
      { h3: 'Equipment', p: 'A laptop or desktop with sound, a microphone and a stable connection. A physical keyboard is essential for writing code.' },
      { h3: 'First lesson free', p: 'The first lesson is a real class at no cost. It ends with a suggested level, course and time, and no card is needed.' }
    ],
    spec: { title: 'No Edmonton building', p: 'Modern Age Coders has no office or classroom in Edmonton or elsewhere in Alberta, and claims none. Every class is taught live online from India.' }
  },

  fees: {
    h2: 'What Edmonton families pay',
    intro: 'Each figure below carries its currency code.',
    first: 'A full live lesson, free, ending with a suggested level, course and class time.',
    group: 'The monthly fee for one place in a class of fifteen to twenty students at the same level.',
    private: 'The monthly fee for private teaching, one student and one teacher.',
    closer: 'Edmonton families pay the same monthly fee as families anywhere in Canada. Payment begins after the free lesson, and only once the course and time suit you; holidays and missed classes are set out on the pricing page.'
  },

  reviewsH2: 'Reviews from families and students on Google',

  book: {
    h2: 'Tell us about your Edmonton student',
    intro: 'The first task fits the level: a pattern puzzle in blocks for a young child, a Python dice game for a Grade 5 or 6 student, or the pet licence file for a teenager who likes real data.',
    success: 'Thank you. We will contact you soon about an Edmonton class.'
  },

  faq: {
    h2: 'Edmonton coding and AI questions',
    intro: 'What Edmonton families tend to ask before booking.',
    items: [
      { q: 'Can my child take coding for kids classes in Edmonton?', a: 'Yes, from age 6, live online. Your child joins a real teacher from home, in a group of fifteen to twenty children or alone with the teacher. We do not have an Edmonton location.' },
      { q: 'Does Alberta test coding in Grade 6?', a: 'Not coding itself, but the Grade 6 Science test lists Computational Thinking as one of its six reporting categories. Alberta schedules that test for Friday 11 June 2027.' },
      { q: 'Is AI part of the Alberta curriculum?', a: 'Alberta says its renewed Grade 7 to 9 curriculum integrates topics like artificial intelligence and computer science. It is a draft, with mandatory implementation planned for September 2027.' },
      { q: 'Will you coach my child for the PATs?', a: 'We do not drill PAT formats; Alberta itself discourages test rehearsal and coaching. We teach the math and reasoning the tests draw on.' },
      { q: 'Do your classes give Alberta credits?', a: 'They do not, because we do not grant Alberta credits, test results or diploma marks; those come only from school and from Alberta Education and Childcare.' },
      { q: 'Do you teach robotics classes in Edmonton?', a: 'Only the programming side: Python, logic, sensors as data and careful debugging. For building robots, pair our classes with a school or community robotics team.' },
      { q: 'Is there a Python or data course for Edmonton teens?', a: 'Yes. Data Science for Teens uses Python on real files, such as the city\'s pet licence list, and teaches students to check what a dataset can honestly show.' },
      { q: 'Which AI tools are used with Edmonton teenagers?', a: 'Age-appropriate ones only. Anything rated 18 and over, such as Claude, is kept out of lessons for under-18s, and ChatGPT needs a parent\'s permission for a teenager.' },
      { q: 'What hours suit Edmonton families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Alberta keeps one clock all year, so the agreed time never shifts.' },
      { q: 'Does a 780 number work in the booking form?', a: 'Yes. Any 780 number works, as do the Alberta-wide 587, 825 and 368 codes; enter ten digits after the +1.' },
      { q: 'How can I see the fees?', a: 'Look at the fees section above the reviews. It shows the free first lesson and the two monthly fees, for a class place and for private teaching, each with its currency code.' }
    ]
  },

  next: {
    eyebrow: 'More for Canada',
    h2: 'More pages for Edmonton and Alberta students',
    html: 'For the whole province, see <a class="cg-inline-link" href="/coding-classes-in-alberta">our Alberta coding page</a>. Math help is on <a class="cg-inline-link" href="/alberta-math-30-1-diploma-exam-prep">Math 30-1 diploma preparation</a> and <a class="cg-inline-link" href="/alberta-new-math-curriculum-explained">Alberta\'s new math curriculum</a>, and the national overview is on <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Edmonton and Canada',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-alberta', label: 'Alberta' },
    { href: '/alberta-grade-6-math-pat-practice', label: 'Grade 6 PAT practice' },
    { href: '/alberta-grade-9-math-pat-practice', label: 'Grade 9 PAT practice' },
    { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' }
  ],

  personalityCss: `
.cg-root.cg-aie .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.8vw, 2.2rem); }
.cg-root.cg-aie .cg-hero h1 { font-weight: 710; letter-spacing: -0.016em; line-height: 1.07; }
.cg-root.cg-aie .cg-capsule { border-left: 2px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-aie .cg-eyebrow { letter-spacing: 0.1em; font-weight: 680; font-size: 0.75rem; text-transform: uppercase; }
.cg-root.cg-aie .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.009em; }
.cg-root.cg-aie .cg-table caption { font-weight: 630; text-align: left; }
.cg-root.cg-aie .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aie #pets code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.58; padding: 0.9rem 1rem; border-left: 2px solid var(--cg-accent); }
.cg-root.cg-aie .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-aie .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Alberta, read 22 October 2026: 2026-2027 Grade 6 Parent Guide (Grade 6 Science reporting categories including Computational Thinking, 50 questions, expectation to write, discourages test rehearsal and coaching); 2026-2027 General Information Bulletin PAT schedules (Grade 6 Science 11 June 2027, Grade 6 Mathematics 14 and 16 June 2027, Grade 9 Mathematics and Science January or June 2027); alberta.ca PAT page (grades 6 and 9, digital); curriculum history (draft 7 to 9 with AI and computer science, mandatory September 2027; Grades 4 to 6 science 2024/2025). Legislative Assembly address in Edmonton (facts-geo.md). CEMC 2026-27: CCC Senior, CCO invitation and C++ rule, PCF, FGH and Euclid dates, through-a-school rule. Edmonton area codes and time offsets from facts-geo.md (CNAC via the Internet Archive; IANA tzdb 2026e; Alberta Official Time Act; Manitoba news release).',
    localProject: 'City of Edmonton open data, Pet Licenses by Neighbourhood (Open Government Licence - Edmonton), CSV downloaded 22 October 2026 and counted with our script edmonton_pets.py (python -I): 85,368 rows; Dog 56,140, Cat 28,917, Hens 143, Pigeons 97, Bees 69, blank 2; YEAR 2024 1,923, 2025 24,131, 2026 59,281 (to October); 33 rows before 2024; top dog breeds Labrador Retriever 5,015, German Shepherd 3,444, UNKNOWN 2,822; 336 named neighbourhoods. The city states the file is a snapshot and cannot show trends. Labelled as ours. Lesson family: reading the description before the chart.',
    requiredMentions: [
      'not possible to use this dataset to see trends in pet licensing over time',
      'LABRADOR RETRIEVER 5,015',
      'The file also holds 143 hens and 69 bees',
      'Open Government Licence - City of Edmonton',
      'YEAR 2026 (to October)',
      'Rows dated October 2026',
      'Value of COUNT on every row',
      'Friday 11 June 2027, 9 to 10 am',
      'requires C++ at the CCO',
      'Edmonton numbers use 780'
    ],
    sources: [
      { claim: 'Alberta 2026-2027 Grade 6 Parent Guide (science reporting categories, expectation to write, coaching statement).', url: 'https://www.alberta.ca/system/files/edc-grade-6-parent-guide-2026-27.pdf' },
      { claim: 'Alberta 2026-2027 General Information Bulletin, PAT administration schedules.', url: 'https://www.alberta.ca/system/files/ecc-pat-administration-schedules.pdf' },
      { claim: 'alberta.ca: Provincial Achievement Tests (grades 6 and 9, digital).', url: 'https://www.alberta.ca/provincial-achievement-tests' },
      { claim: 'alberta.ca: how the curriculum got here (draft 7 to 9 with AI and computer science; September 2027).', url: 'https://www.alberta.ca/curriculum-how-we-got-here' },
      { claim: 'CEMC: CCC levels and languages, CCO invitation and C++ rule, 2026-27 contest dates, free past contests.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'City of Edmonton open data: Pet Licenses by Neighbourhood dataset page and description.', url: 'https://data.edmonton.ca/Community-Services/Pet-Licenses-by-Neighbourhood/5squ-mg4w' },
      { claim: 'City of Edmonton: Open Government Licence - Edmonton (attribution, commercial use, non-endorsement).', url: 'https://data.edmonton.ca/stories/s/Open-Government-Licence-Edmonton/msh8-if28/' },
      { claim: 'Manitoba news release on permanent UTC-5 from 1 November 2026.', url: 'https://news.gov.mb.ca/news/?item=75397' }
    ],
    rejectedClaims: [
      'Any Edmonton or Alberta population figure: StatCan was not reachable live, so no population is printed.',
      'That pet ownership or licensing grew from 2024 to 2026: refused; the city says the file cannot show trends.',
      'The number of pets in Edmonton: refused; the file holds current licences only.',
      'Pet gender, spay or neuter status and neighbourhood names: not used on purpose.',
      'That Alberta tests coding directly in Grade 6: not claimed; Computational Thinking is a science reporting category.',
      'That we prepare students by rehearsing PAT formats: refused; Alberta discourages test rehearsal and coaching.',
      'That our classes earn Alberta credits, PAT results or diploma marks: refused.',
      'That we run robotics hardware classes: refused; we teach the programming side only.',
      'Named Edmonton employers or AI institutes: not fetched raw for this page, so not used.',
      'Names of Edmonton schools, school boards or private people: not used.',
      'CEMC fees: left out on purpose (currency-neutral page).',
      'Any affiliation with the City of Edmonton, Alberta Education and Childcare, CEMC or the University of Waterloo.'
    ]
  }
};
