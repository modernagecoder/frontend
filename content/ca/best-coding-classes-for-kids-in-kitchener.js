'use strict';
// Kitchener (cg- city page, Canada cluster Wave 2, row 118). Brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Angle: best-coding-classes-for-kids-in- (ages 6 to 12). "Best" only in the title and meta. The body asks what a paid
// class must add to the free CEMC material a Kitchener family can already use, ranks no provider, never claims we are best.
// Spine: Grade 7 sub-programs in Ontario math (and the Grade 8 data step after it), CEMC's free resources from the
// neighbouring University of Waterloo, a checklist of what a paid class must add, a City of Kitchener playgrounds data
// project on impossible dates, and Eastern time.
// Sources, read raw on 22 October 2026. Curriculum facts from keyword-research-2026-09/ca/facts-schools-contests.md (raw
// ca/src/ontario/api-math-g7-strands.txt, api-math-g8-strands.txt); CEMC from ca/src/cemc; geography from ca/facts-geo.md;
// data and licence in ca/src-pilots/best-coding-classes-for-kids-in-kitchener/ (SOURCES.txt):
//  - Ontario Grade 7 C3.1: code "that involves events influenced by a defined count and/or subprogram and other control
//    structures"; teacher note: "Sub-programs can be reused for multiple programs or can be called upon more than once from
//    one main program."; example "a sub-program to determine the area of a rectangle"; student voice example "I need to stay
//    calm, knowing that we may have to make a few tweaks before we get it right." Grade 8 C3.1: code "that involves the
//    analysis of data in order to inform and communicate decisions".
//  - CEMC resources: Problem of the Week "e-mailed to educators for use with their students from Grades 3 to 12" and "New
//    problems are sent every Thursday, and their solutions are sent one week later."; Courseware "Covering topics from Grades
//    4 to12 mathematics and computer science" (missing space in source), "No registration is required to access these
//    resources.", "there is no certificate or other form of credential awarded"; resources page "There is no registration or
//    fee required to access these materials."; past contests "from the last 10 years"; CS Circles "[Python Programming
//    Tutorials]". BCC "Grade 8 or below" for 7/8; through-a-school rule.
//  - facts-geo.md: Kitchener and Waterloo are both in the Kitchener - Cambridge - Waterloo CMA; area codes 226, 382, 519, 548
//    (CNAC via the Internet Archive); America/Toronto UTC-5 from 1 November 2026, UTC-4 from 14 March 2027 (IANA 2026e).
//    No populations used.
//  - City of Kitchener open data, "Playgrounds" (ArcGIS item 443172cdd0a34d39a45b7b69530afb07, playgrounds_item.json):
//    snippet "(Update Frequency: Daily)" and "Playground locations in City of Kitchener"; description "Please check the
//    individual record's CREATE_DATE for date the feature was added and UPDATE_DATE for the last date an attribute was
//    edited."; accessInformation "City of Kitchener - Infrastructure Services - Operations"; dataset page
//    https://open-kitchenergis.opendata.arcgis.com/datasets/443172cdd0a34d39a45b7b69530afb07_0 (HTTP 200). The portal CSV
//    (Playgrounds.csv, re-downloaded 22 October 2026 and byte-identical to the earlier copy, 162,622 bytes, sha256
//    861043ba...e732f6b4) has 337 rows; the live service count query returned {"count":340} the same day.
//  - Licence (item licenseInfo): "The information provider grants you a worldwide, royalty-free, perpetual, non-exclusive
//    licence to use the information, including for commercial purposes"; credit text "Contains information licensed under
//    the Open Government Licence - The Corporation of the City of Kitchener."; non-endorsement clause.
// Our own calculations (page_script.py, checks.py, subprogram.py, python -I; outputs *.out.txt): 337 rows; CONSTRUCTION_YEAR
// blank 92, "PRE" 72, numeric 173 from 1998 to 2024; one INSTALLATION_DATE of 3013/06/18 on a row built 2013; 240 rows have no
// installation date; of 77 rows with both a numeric year and an installation date, 48 match and 9 show installation before
// construction; STATUS ACTIVE 333, HISTORIC 3, TEMPORARILY CLOSED 1; CATEGORY Playground 265, Swing 58, Natural Playground
// 10, Sand Play Area 3, Water Play 1. No landmark names, staff names, manufacturers or school-board sites printed.
// Lesson family: validating dates and flagging impossible values before using a column.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SUB = [
  'def rectangle_area(length, width):',
  '    return length * width',
  '',
  'print(rectangle_area(6, 4))',
  'print(rectangle_area(6, 4) * 10)'
].join('\n');

const SCRIPT = [
  'import csv',
  '',
  'this_year = 2026',
  'problems = {"blank": 0, "PRE": 0, "future": 0}',
  'good = []',
  'with open("Playgrounds.csv", encoding="utf-8-sig") as f:',
  '    rows = csv.DictReader(f)',
  '    for row in rows:',
  '        year = row["CONSTRUCTION_YEAR"].strip()',
  '        if year == "":',
  '            problems["blank"] += 1',
  '        elif year == "PRE":',
  '            problems["PRE"] += 1',
  '        elif int(year) > this_year:',
  '            problems["future"] += 1',
  '        else:',
  '            good.append(int(year))',
  '        installed = row["INSTALLATION_DATE"][:4]',
  '        if installed and int(installed) > this_year:',
  '            print("impossible:", row["INSTALLATION_DATE"][:10], "built", year)',
  '',
  'print(problems)',
  'print(len(good), "usable years, from", min(good), "to", max(good))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'KITCHENER', label: 'Kitchener', blurb: 'Choosing a kids\' coding class in Kitchener after using CEMC\'s free resources, Grade 7 sub-programs in Ontario math, and a City of Kitchener playgrounds project.' },
  market: CA,
  audience: 'kids',
  slug: 'best-coding-classes-for-kids-in-kitchener',
  code: 'bkk',
  accent: '#522A22',
  accentRationale: 'Kitchener kids page: a muted dark brick, #522A22, allocated to this row by the Canada group so it clears every site accent by 6 RGB units and the other Canada accents by 14, including the Toronto clay; contrast 11.56 on the paper #FBF8F2, 10.88 on #F5F1E8 and 9.95 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Kitchener',
    eyebrow: 'Kitchener, Ontario',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Ontario' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-ontario', name: 'Ontario' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Ontario', href: '/coding-classes-in-ontario' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Kitchener',
  title: 'Best Coding Classes for Kids in Kitchener | Free First, Then Paid',
  description: 'How to find the best coding classes for kids in Kitchener: start with free CEMC material, then ask what a paid class adds. Grade 7 code and a playgrounds project.',
  ogDescription: 'Kitchener families live next door to CEMC\'s free math and coding material. Here is what a paid kids\' class should add, plus Grade 7 sub-programs and a City playgrounds project.',
  twitterDescription: 'Kitchener kids\' coding: free CEMC resources first, then what a paid class must add.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Kitchener Children Aged 6 to 12',
    description: 'Live online coding for Kitchener children from Grade 1 to Grade 7: blocks and Scratch, then Python functions, logic puzzles and real City of Kitchener data, in a group or one to one.'
  },

  h1: 'Coding classes for kids in Kitchener',
  capsuleQ: 'Does a Kitchener child need a paid coding class when so much free material exists?',
  capsule: 'Use the free material first: CEMC, at the University of Waterloo next door, publishes math and computer science resources with no registration or fee. Pay for a class only if it adds what free pages cannot, which is a live teacher, feedback and a steady plan. For Kitchener children aged 6 to 12, Modern Age Coders adds exactly that, live online, either with 15 to 20 classmates or with a teacher alone, starting with a free class.',
  lead: 'Kitchener families have an unusual advantage. The Centre for Education in Mathematics and Computing (CEMC) sits at the University of Waterloo, in the same metropolitan area, and much of what it publishes for students is free: past contests, weekly problems, courseware and a Python tutorial site. So the honest question for a Kitchener parent is not which class is cheapest, but what a paid class would add to that free material. This page answers it with a checklist, sets out what Ontario math asks of a Grade 7 student, when code starts to be built from reusable pieces, and walks through a City of Kitchener open data file, used in our classes for older children, that contains a playground installed, apparently, in the year 3013. We rank no provider, and the checklist applies to us too.',
  wa: 'Hello Modern Age Coders, we are in Kitchener. Could my child have a free coding class?',

  picks: {
    eyebrow: 'Course picks for Kitchener children',
    h2: 'Four courses that go beyond the free material',
    intro: 'Each adds a teacher and a plan to ideas a child can also explore for free. The free class checks the fit.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 8', note: 'Block coding with a live teacher for children too young for text tutorials, built around talking through each step.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Python taught live, including functions written once and reused, the Grade 7 sub-program idea, and the playground date checker on this page.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 8 to 12', note: 'Puzzles in the spirit of weekly problem sets, with a teacher who asks how you know rather than marking the answer.' },
      { course: 'cpp-programming-for-kids-course', band: 'Ages 9 to 12', note: 'A second typed language for children who have found Python easy, with games and puzzles that reward careful thinking.' }
    ]
  },

  sections: [
    {
      id: 'free', tint: '', eyebrow: 'Free first',
      h2: 'What a Kitchener family can use for free, and what a paid class must add',
      intro: 'CEMC&rsquo;s resources are free; CEMC says no registration or fee is required. We read each page on 22 October 2026. The right-hand column is our checklist, for any provider, including us.',
      body: [
        { kind: 'table', caption: 'Free CEMC resources, as CEMC describes them, and what a paid kids&rsquo; class should add (our checklist, October 2026)', head: ['Free from CEMC', 'What CEMC says', 'A paid class should add'], rows: [
          ['Problem of the Week', 'Problems e-mailed to educators for students from Grades 3 to 12; new problems every Thursday, solutions a week later', 'Someone who watches your child attempt the problem and asks why, not only a solution a week later'],
          ['Courseware', 'Covers Grades 4 to 12 math and computer science; no registration; no certificate or credential awarded', 'A plan: which lesson next, at what pace, and a check that the last one stuck'],
          ['Past contests', 'Resources from the last 10 years, free to read', 'Original practice problems, and help reading a question your child has never seen before'],
          ['CS Circles', 'Python programming tutorials', 'Live feedback when the code fails, which a child of nine or ten rarely gets from a tutorial alone'],
          ['All of the above', 'Free, open, self-paced', 'Company: other children at the same stage, and one teacher who learns how your child thinks']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'If free is working, keep going', p: 'A motivated child who works through free material with a parent nearby may not need a class yet. That is a fine outcome, and we would rather say so than sell you a class.' },
          { h3: 'When a class helps', p: 'Most children under twelve stall alone at the first confusing error. A class is worth paying for when it turns that moment into a conversation instead of a closed laptop.' },
          { h3: 'Three questions to ask', p: 'Will one teacher stay with my child? How many children share that teacher? What will my child be able to do in eight weeks that free pages would not have taught?' }
        ] },
        { kind: 'p', text: 'CEMC&rsquo;s material is CEMC&rsquo;s, and we never reproduce it; our classes use problems our teachers write and label as ours. Our <a class="cg-inline-link" href="/cemc-free-resources-guide">guide to CEMC&rsquo;s free resources</a> lists them in more detail. Modern Age Coders is not connected with CEMC or the University of Waterloo.' }
      ]
    },
    {
      id: 'grade7', tint: 'tint', eyebrow: 'Grade 7 in Ontario',
      h2: 'Grade 7: when a Kitchener student&rsquo;s code is built from reusable pieces',
      intro: 'Kitchener schools teach the Ontario curriculum. Grade 7 math brings in sub-programs, the pieces most languages call functions. We read the wording from the ministry&rsquo;s curriculum data on 22 October 2026; the quotes are the ministry&rsquo;s and the reading is ours.',
      body: [
        { kind: 'align', rows: [
          { code: 'C3.1', req: 'Code &ldquo;that involves events influenced by a defined count and/or subprogram and other control structures&rdquo;.', ours: 'A defined count is a loop that runs a set number of times. A subprogram is a named block of code that does one job.' },
          { code: 'Note', req: 'The ministry adds that sub-programs can be reused, or called more than once from one main program, and gives the example of a sub-program for the area of a rectangle.', ours: 'Write it once, use it many times. This is the single biggest step from beginner code to real code.' },
          { code: 'Feelings', req: 'A student voice in the curriculum says: &ldquo;I need to stay calm, knowing that we may have to make a few tweaks before we get it right.&rdquo;', ours: 'The ministry expects frustration. A good class plans for it, and celebrates the fix.' },
          { code: 'Grade 8', req: 'The next year asks for code involving &ldquo;the analysis of data in order to inform and communicate decisions&rdquo;.', ours: 'Which is what the playground project below is: data, checked, then turned into a careful sentence.' }
        ] },
        { kind: 'p', text: 'Here is the ministry&rsquo;s rectangle idea as a Python function, written by us. It is defined once and then used twice: first for the area of a 6 by 4 rectangle, then inside the volume of a box 10 units tall. It prints 24 and then 240:<code class="cg-mt-2">' + SUB + '</code>' },
        { kind: 'callout', h3: 'Beside school, not instead of it', p: 'We are a live online class and give no report-card marks. We are not connected with the Ontario Ministry of Education, EQAO, the local school boards or the City of Kitchener.' }
      ]
    },
    {
      id: 'playgrounds', tint: 'deep', eyebrow: 'Kitchener data project',
      h2: 'A playground installed in 3013? Checking dates in the City of Kitchener file',
      intro: 'The City of Kitchener publishes its playgrounds as open data, with a construction year and an installation date for each. Children in our classes, usually from about age 10, check those two columns before trusting either. Every figure here is our count, not the City&rsquo;s.',
      body: [
        { kind: 'table', caption: 'Our check of the CONSTRUCTION_YEAR and INSTALLATION_DATE columns in the City of Kitchener Playgrounds CSV, downloaded 22 October 2026 (337 rows)', head: ['What we found', 'Rows'], rows: [
          ['CONSTRUCTION_YEAR left blank', '92'],
          ['CONSTRUCTION_YEAR written as the word PRE', '72'],
          ['CONSTRUCTION_YEAR usable as a number (1998 to 2024)', '173'],
          ['No INSTALLATION_DATE at all', '240'],
          ['INSTALLATION_DATE in the year 3013, on a row built in 2013', '1'],
          ['Rows with both a numeric year and a date that agree on the year', '48 of 77'],
          ['Rows where installation comes before construction', '9']
        ] },
        { kind: 'p', text: 'Our checker uses only the standard library. Each row is sorted into blank, PRE, future or usable, and any installation date after this year is printed for a human to look at:<code class="cg-mt-2">' + SCRIPT + '</code>On our download it prints one impossible date, <b>3013/06/18</b>, on a playground built in 2013, then the problem counts, then &ldquo;173 usable years, from 1998 to 2024&rdquo;.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A typo, almost certainly', p: '3013 sits next to a construction year of 2013, so a mistyped first digit is the likely story. But it is our guess, and a careful report says so instead of silently changing it to 2013.' },
          { h3: 'What PRE probably means', p: 'Seventy-two rows say PRE instead of a year. The file does not define it. It may mean built before records began, but we do not know, so the script keeps those rows out of any average.' },
          { h3: 'Two dates, two meanings', p: 'Nine rows show installation before construction. Perhaps the two columns record different things, such as equipment and the site. That is a question for the City, not something to fix in code.' }
        ] },
        { kind: 'callout', h3: 'A file that changes daily', p: 'The City describes the layer as updated daily, and it asks users to check each record&rsquo;s CREATE_DATE and UPDATE_DATE. On 22 October 2026 the portal&rsquo;s CSV had 337 rows while the live map service reported 340. Students learn to write which copy they used and when.' },
        { kind: 'p', text: 'Data source: City of Kitchener open data, <a class="cg-inline-link" href="https://open-kitchenergis.opendata.arcgis.com/datasets/443172cdd0a34d39a45b7b69530afb07_0">Playgrounds</a>. Contains information licensed under the Open Government Licence - The Corporation of the City of Kitchener. Nothing here is endorsed by the City, and we print no playground names, staff names or school-board sites from the file.' }
      ]
    },
    {
      id: 'contest', tint: '', eyebrow: 'Contests nearby',
      h2: 'Contests run from next door, entered through a Kitchener school',
      intro: 'CEMC&rsquo;s contests are written in schools across Canada, and Kitchener schools are a short drive from where they are made. The entry route is the same for every family.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Grade 7 and 8: Beaver Computing Challenge', p: 'The 7/8 level of the Beaver Computing Challenge is open to students in Grade 8 or below and needs no coding experience. CEMC lists the 2026 window as 9 to 20 November 2026.' },
          { h3: 'Grade 7 and 8: Gauss', p: 'CEMC&rsquo;s Gauss math contest is for Grades 7 and 8, and CEMC welcomes motivated younger students. Its 2027 window is 10 to 21 May 2027.' },
          { h3: 'Through the school', p: 'CEMC says it is not possible for students to register individually; all students take part through their school. Ask your child&rsquo;s teacher early in the school year.' }
        ] },
        { kind: 'p', text: 'For more, see the <a class="cg-inline-link" href="/beaver-computing-challenge-guide">Beaver Computing Challenge guide</a>, <a class="cg-inline-link" href="/gauss-contest-preparation">Gauss preparation</a> and <a class="cg-inline-link" href="/how-to-register-for-waterloo-contests">how to register for Waterloo contests</a>.' }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Class times',
      h2: 'Kitchener on Eastern time, our teachers on India time',
      intro: 'Kitchener changes its clocks on 1 November 2026 and 14 March 2027. India does not. We converted the sample slots below ourselves, from IANA time zone data (2026e).',
      body: [
        { kind: 'table', caption: 'Two Kitchener class slots in India time (our conversions)', head: ['Kitchener slot', 'Kitchener offset', 'India time'], rows: [
          ['Weekday 5:30 pm, until 1 November 2026', 'UTC-4', '3:00 am next day'],
          ['Weekday 5:30 pm, 1 November 2026 to 14 March 2027', 'UTC-5', '4:00 am next day'],
          ['Saturday 11:00 am, until 1 November 2026', 'UTC-4', '8:30 pm Saturday'],
          ['Saturday 11:00 am, 1 November 2026 to 14 March 2027', 'UTC-5', '9:30 pm Saturday']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Times in Eastern time', p: 'We send Kitchener families every class time in Eastern time, and repeat it before each clock change.' },
          { h3: 'Pace by age', p: 'Younger children get shorter sessions with a stretch break; by eleven or twelve, most stay with one project for the whole lesson.' },
          { h3: 'Kitchener numbers', p: 'Kitchener phones use 519 and 226, with 548 and 382 sharing the area. Enter ten digits in the form.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From blocks to functions and data, for Kitchener children',
    intro: 'Ages are approximate; the free class places your child by what they show on the day.',
    cols: [
      { band: 'Ages 6 and 7', h3: 'Blocks and order', p: 'Short block programs, repeats and lots of predicting aloud, with a teacher beside every step.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 8 and 9', h3: 'Puzzles and games', p: 'Loops and decisions inside games, and logic puzzles like the ones on weekly problem sets.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 10 and 11', h3: 'Functions', p: 'Typed Python, functions written once and reused, and a second language for the keen.', courses: ['python-ai-kids-masterclass', 'cpp-programming-for-kids-course'] },
      { band: 'Age 12', h3: 'Checking data', p: 'Real files like the Kitchener playgrounds list, validated before any chart is drawn.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Would an AI tool have noticed the year 3013?',
    intro: 'Perhaps. It might also have quietly averaged it in.',
    p1: 'Hand the Kitchener playgrounds file to an AI tool and ask for the average construction year, and it may skip the PRE rows, treat blanks as zero, or not mention the 3013 date at all. The number it prints will look reasonable either way. A student who has written the checker knows exactly which rows were left out and why, and can say so.',
    p2: 'That is the habit we teach children: check the data, decide the rules, write the code, and explain the result in a sentence that is true. Our classes cover how AI works and where it goes wrong, but children do their own reasoning. At home, OpenAI requires a parent&rsquo;s permission for ChatGPT users under 18.',
    closer: 'Ontario&rsquo;s Grade 8 expectation is about using data to inform decisions; a decision built on an unchecked 3013 is not informed.',
    blogAnchor: 'our case for learning to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online classes for Kitchener children',
    intro: 'A teacher and a group, live on screen each week, from home in Kitchener.',
    cells: [
      { h3: 'Scheduling', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Two ways to join', p: 'Learn alongside 15 to 20 children of a similar level, or have a teacher to yourself at a pace that suits your child.' },
      { h3: 'At home', p: 'Any computer with a real keyboard, working sound and a dependable connection. Only free tools are used.' },
      { h3: 'Waterloo and Cambridge', p: 'Families across the Kitchener - Cambridge - Waterloo area share these online classes and their Eastern time schedule.' },
      { h3: 'Sit in', p: 'Parents are welcome to listen to any lesson and judge the teaching for themselves.' },
      { h3: 'Free first class', p: 'A full lesson; at its end the teacher recommends a course and level. We never ask for card details.' }
    ],
    spec: { title: 'No Kitchener classroom', p: 'Modern Age Coders has no location in Kitchener and claims none. Classes are live online, taught from India.' }
  },

  fees: {
    h2: 'What our kids&rsquo; coding classes cost in Kitchener',
    intro: 'Three options; each fee is shown with its currency code.',
    first: 'A complete live class, free, ending with a suggested course and level.',
    group: 'The monthly fee for a place among 15 to 20 children at the same stage.',
    private: 'The monthly fee for one-to-one lessons at times you pick.',
    closer: 'Kitchener families pay the same monthly fee as families anywhere in Canada. Billing begins only after the free class, once you have chosen a course and a time, and the pricing page covers holidays and missed sessions.'
  },

  reviewsH2: 'What families and students wrote on Google',

  book: {
    h2: 'Ask for a free class for your Kitchener child',
    intro: 'Share your child&rsquo;s grade or age, and mention any free material they already use. The first lesson starts from there.',
    success: 'Thank you. We will contact you soon about a class for your child in Kitchener.'
  },

  faq: {
    h2: 'Kitchener families ask',
    intro: 'Common questions from Kitchener parents.',
    items: [
      { q: 'Do you run coding classes for kids in Kitchener?', a: 'Yes, though online rather than in a Kitchener room. Lessons are live: a teacher watches each screen, and a child learns either among 15 to 20 classmates or alone with the teacher.' },
      { q: 'Are CEMC\'s resources really free?', a: 'CEMC says there is no registration or fee required to access its resources, which include past contests, courseware and Python tutorials. Its courseware awards no certificate.' },
      { q: 'Why pay for a class if free material exists?', a: 'Pay only if the class adds something free pages cannot: a live teacher who watches your child work, feedback at the moment of confusion, and a steady plan. If free material is working, keep using it.' },
      { q: 'What does Grade 7 math ask about coding?', a: 'Grade 7 adds sub-programs, reusable pieces of code that most languages call functions, along with loops that run a defined number of times.' },
      { q: 'What age can my child start?', a: 'Six, with blocks. The courses for children cover ages 6 to 12; older students move on to our teen courses.' },
      { q: 'Can my child write a CEMC contest?', a: 'Yes, through their school. The Beaver Computing Challenge 7/8 level is open to Grade 8 or below, and Gauss is for Grades 7 and 8.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We give every time in Eastern time.' },
      { q: 'Do you copy contest problems?', a: 'No. We never reproduce CEMC problems or solutions. Our teachers write original practice problems and label them as ours.' },
      { q: 'Will my child use AI in class?', a: 'They learn how AI works and how to check its answers, but they write and explain their own code.' },
      { q: 'How much do classes cost?', a: 'The fees section shows a free first class, then the monthly fee for a group place or for one-to-one lessons. Nothing is charged before the free class.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario families',
    h2: 'Related pages for Kitchener and Ontario',
    html: 'Province-wide, read <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a>; nationally, the <a class="cg-inline-link" href="/coding-classes-in-canada">Canada hub</a>. Every grade&rsquo;s coding expectations are in our <a class="cg-inline-link" href="/ontario-coding-curriculum-grades-1-to-8">Ontario Grades 1 to 8 guide</a>, the free material is listed in the <a class="cg-inline-link" href="/cemc-free-resources-guide">CEMC free resources guide</a>, and the wider contest route is on <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contests preparation</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Kitchener and Ontario',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/cemc-free-resources-guide', label: 'CEMC free resources' },
    { href: '/how-to-register-for-waterloo-contests', label: 'Registering for Waterloo contests' },
    { href: '/ontario-coding-curriculum-grades-1-to-8', label: 'Ontario coding, Grades 1 to 8' }
  ],

  personalityCss: `
.cg-root.cg-bkk .cg-hero h1 { font-weight: 700; letter-spacing: -0.018em; line-height: 1.06; }
.cg-root.cg-bkk .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-bkk .cg-eyebrow { letter-spacing: 0.1em; font-weight: 650; text-transform: uppercase; font-size: 0.76rem; }
.cg-root.cg-bkk .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.01em; }
.cg-root.cg-bkk .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-bkk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bkk #grade7 code, .cg-root.cg-bkk #playgrounds code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.81rem; line-height: 1.55; padding: 0.85rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-bkk #free .cg-table td:first-child { font-weight: 650; }
.cg-root.cg-bkk .cg-align-code { font-weight: 700; }
.cg-root.cg-bkk .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.8rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: Elementary Mathematics (2020) Grade 7 C3.1 (defined count and subprogram), the sub-program reuse note and rectangle-area example, the student-voice note on staying calm, and Grade 8 C3.1 (analysis of data). CEMC free resources (Problem of the Week for Grades 3 to 12, courseware for Grades 4 to 12 with no certificate, past contests from the last 10 years, CS Circles, no registration or fee), BCC 7/8 eligibility and dates, Gauss dates, through-a-school rule. Kitchener and Waterloo in one CMA, SW Ontario area codes, Eastern time offsets (facts-geo.md; IANA tzdb 2026e).',
    localProject: 'City of Kitchener open data, Playgrounds (Open Government Licence - The Corporation of the City of Kitchener), portal CSV downloaded 22 October 2026 (162,622 bytes, 337 rows; the live service reported 340) and checked with our script page_script.py (python -I): CONSTRUCTION_YEAR blank 92, PRE 72, numeric 173 (1998 to 2024); one INSTALLATION_DATE of 3013/06/18 on a row built 2013; 240 rows without an installation date; 48 of 77 rows agree on the year; 9 show installation before construction. Labelled as ours; no names printed. Lesson family: validating dates and flagging impossible values.',
    requiredMentions: [
      'INSTALLATION_DATE in the year 3013',
      'CONSTRUCTION_YEAR written as the word PRE',
      '173 usable years, from 1998 to 2024',
      'the live map service reported 340',
      'Open Government Licence - The Corporation of the City of Kitchener',
      'I need to stay calm, knowing that we may have to make a few tweaks',
      'Problems e-mailed to educators for students from Grades 3 to 12',
      'no certificate or credential awarded',
      'Kitchener phones use 519 and 226'
    ],
    sources: [
      { claim: 'Ontario curriculum content API: Grade 7 math strands (subprogram, defined count, reuse note, rectangle example, student voice).', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_7___strands?depth=4' },
      { claim: 'Ontario curriculum content API: Grade 8 math strands (analysis of data).', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_8___strands?depth=4' },
      { claim: 'CEMC resources: free, no registration or fee.', url: 'https://cemc.uwaterloo.ca/resources' },
      { claim: 'CEMC Problem of the Week: Grades 3 to 12, weekly schedule.', url: 'https://cemc.uwaterloo.ca/resources/potw' },
      { claim: 'CEMC Courseware: Grades 4 to 12, no registration, no credential.', url: 'https://cemc.uwaterloo.ca/resources/courseware' },
      { claim: 'CEMC Beaver Computing Challenge and Gauss: eligibility and dates; through-a-school rule.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'City of Kitchener open data: Playgrounds dataset (update frequency daily; licence text in the item).', url: 'https://open-kitchenergis.opendata.arcgis.com/datasets/443172cdd0a34d39a45b7b69530afb07_0' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Kitchener population figure: StatCan was not reachable live.',
      'That the 3013 installation date is 2013: refused as a fact; flagged as our likely reading only.',
      'What PRE means in the construction year column: refused; the file does not define it.',
      'Playground names, staff user names, manufacturers and school-board sites from the file: not printed.',
      'That CEMC endorses or partners with us, or that we reproduce CEMC material: refused.',
      'Any ranking of Kitchener coding providers, or that Modern Age Coders is the best: refused.',
      'Any affiliation with the City of Kitchener, the local school boards, the Ontario Ministry of Education, EQAO, CEMC or the University of Waterloo.'
    ]
  }
};
