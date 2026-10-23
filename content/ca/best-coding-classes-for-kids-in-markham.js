'use strict';
// Markham (cg- city page, Canada cluster Wave 2, row 114). Brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Angle: best-coding-classes-for-kids-in- (ages 6 to 12). "Best" appears in the title and meta only. The body sets out
// what to watch for in a trial lesson, ranks no provider, and never claims we are the best.
// Spine: Grade 4 nested loops and Grade 5 conditionals in Ontario math, signs of a good kids' class seen in a trial
// lesson, a City of Markham open data project on the age of City-owned buildings, CEMC's Gauss and Team Up Challenge.
// Sources, read raw on 22 October 2026. Curriculum and contest facts from keyword-research-2026-09/ca/facts-schools-contests.md
// (raw files in ca/src/ontario, ca/src/cemc); geography from ca/facts-geo.md; data and licence in
// ca/src-pilots/best-coding-classes-for-kids-in-markham/ (SOURCES.txt):
//  - Ontario DCP API, Elementary Mathematics (2020): Grade 4 C3.1 "including code that involves sequential, concurrent,
//    repeating, and nested events"; Grade 4 note "Loops can exist within loops, referred to as" nested loops (curly quotes
//    in source); Grade 4 example "Repeat 4 times: Move 100 steps. Turn 90 degrees."; Grade 5 C3.1 "including code that
//    involves conditional statements and other control structures"; Grade 5 examples "code that would determine who can
//    ride the roller coaster at an amusement park" and a "Guess that Number" game (curly quotes in source); Grade 5 note
//    "Conditional statements are a representation of binary logic (yes or no, true or false, 1 or 0)."
//  - CEMC Gauss (cemc/gauss.txt): "Students in Grades 7 and 8."; "Motivated students in lower grades are welcome to write
//    the contest."; "25 multiple-choice questions."; "Time allowed for completion is 60 minutes."; "May 10, 2027 to Friday,
//    May 21, 2027"; ordering deadline "April 22, 2027". Team Up Challenge (cemc/contests.txt): "designed for students in
//    Grades 6 to 8", "grouping four students to work collaboratively", date "June 1, 2027 or later".
//    how-contests-work: "all students must participate through their school".
//  - facts-geo.md: Markham is in the Toronto CMA (98-10-0003-01); Markham sits in the 905 belt overlay with 289, 365, 742
//    (CNAC via the Internet Archive); America/Toronto UTC-5 from 1 November 2026, UTC-4 from 14 March 2027 (IANA 2026e).
//    No populations used.
//  - City of Markham Open Data, "City Owned Facilities" (ArcGIS item d8cee9f1183f4d8f9c731e777782f3a3, facilities_item.json):
//    snippet "Facility buildings owned by the City of Markham"; accessInformation "City of Markham"; licenseInfo "The City
//    of Markham's Terms of Use"; dataset page https://data-markham.opendata.arcgis.com/datasets/d8cee9f1183f4d8f9c731e777782f3a3_0
//    (HTTP 200). CSV saved as City_Owned_Facilities.csv, 11,383 bytes, sha256 0722db77...6050a.
//  - Licence: "Open Data Licence - City of Markham (Version 1.0)" (markham_terms_item_data.json; page
//    data-markham.opendata.arcgis.com/pages/terms-of-use, HTTP 200): "grants You a worldwide, royalty-free, perpetual,
//    non-exclusive license"; "use the Information commercially"; credit statement "Contains public sector Information made
//    available under the City of Markham's Open Data Licence" (curly apostrophe in source); must not suggest that "the
//    City of Markham endorses You or Your use of the Information".
// Our own calculations (page_script.py and checks.py, python -I, outputs *.out.txt): 82 rows; TYPE Museum 52, Community
// Centre 21, Library 3, Recycling Depot 3, Art Gallery 2, Theatre 1; YEAR_BUILT 1824 to 2016; by hundreds 1800s 37,
// 1900s 36, 2000s 9; Community Centre 1800s 3, 1900s 12, 2000s 6; Museum 1800s 31, 1900s 18, 2000s 3; median year 1926;
// 9 names contain LIBRARY while TYPE Library has 3 rows; TOWNAREA Markham 63, Unionville 8, Thornhill 6, Milliken 4, Box
// Grove 1. Our nested-loop and ride-check examples were run on 22 October 2026 and print what the page shows.
// Lesson family: putting years into bins with integer division, and checking a type label against the names.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const NESTED = [
  'for row in range(3):',
  '    line = ""',
  '    for col in range(4):',
  '        line = line + "*"',
  '    print(line)'
].join('\n');

const RIDE = [
  'height = 125',
  'if height >= 120:',
  '    print("You can ride")',
  'else:',
  '    print("Not yet")'
].join('\n');

const SCRIPT = [
  'import csv',
  '',
  'bins = {}',
  'oldest = None',
  'with open("City_Owned_Facilities.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f):',
  '        year = int(row["YEAR_BUILT"])',
  '        hundreds = year // 100 * 100',
  '        key = (row["TYPE"], hundreds)',
  '        bins[key] = bins.get(key, 0) + 1',
  '        if oldest is None or year < oldest[0]:',
  '            oldest = (year, row["TYPE"])',
  '',
  'for key in sorted(bins):',
  '    print(key[0], str(key[1]) + "s", bins[key])',
  'print("oldest:", oldest)'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'MARKHAM', label: 'Markham', blurb: 'What to look for in a kids\' coding class in Markham: Grade 4 and 5 coding in Ontario math, trial-lesson signs, and a City of Markham buildings data project.' },
  market: CA,
  audience: 'kids',
  slug: 'best-coding-classes-for-kids-in-markham',
  code: 'beaa',
  accent: '#104C3F',
  accentRationale: 'Markham kids page: a deep muted spruce, #104C3F, allocated to this row by the Canada group so it sits at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 9.31 on the paper #FBF8F2, 8.76 on #F5F1E8 and 8.01 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Markham',
    eyebrow: 'Markham, Ontario',
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
  routeLabel: 'Markham',
  title: 'Best Coding Classes for Kids in Markham | Live Online, Ages 6-12',
  description: 'Finding the best coding classes for kids in Markham: what a good trial lesson looks like, the Grade 4 and 5 coding Ontario asks for, and a Markham data project.',
  ogDescription: 'What to watch for in a Markham kids\' coding trial lesson, the nested loops and if statements Ontario math expects in Grades 4 and 5, and a project on City of Markham data.',
  twitterDescription: 'Choosing a kids\' coding class in Markham: trial-lesson signs, Grades 4 and 5 coding, a City data project.',
  ogImageCourse: 'scratch-programming-complete-course',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Markham Children Aged 6 to 12',
    description: 'Live online coding for Markham children from Grade 1 to Grade 7: Scratch and block coding, typed Python with loops and if statements, small games and real data projects, in a batch or one to one.'
  },

  h1: 'Coding classes for kids in Markham',
  capsuleQ: 'What makes a coding class right for a Markham child aged 6 to 12?',
  capsule: 'A good class keeps children talking about their own code, matches what Ontario asks in their grade, and states its group size and fee up front. Modern Age Coders runs live online coding for Markham children aged 6 to 12, with Scratch first and then Python and AI for Kids, in groups of 15 to 20 or one to one. A free trial lesson comes first.',
  lead: 'Markham parents comparing kids&rsquo; coding classes usually face the same problem: every brochure promises the same things. Games, creativity, future skills. The difference shows up only inside a lesson, in who is talking, who is typing, and what happens when the program breaks. So this page is mostly about what to watch for in a trial lesson. It also sets out what Ontario math already expects from a Markham child in Grades 4 and 5, where loops start living inside other loops and code begins to make decisions, and it shows a small project our older students run on a City of Markham open data file. We name and rank no other provider. You can use every sign below on any class you try, including ours.',
  wa: 'Hello Modern Age Coders, I would like a free trial coding lesson for my child in Markham.',

  picks: {
    eyebrow: 'Course picks for Markham children',
    h2: 'Four starting points for Markham kids',
    intro: 'Matched to age and to the stage Ontario math has reached; the trial lesson checks the match.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 7 to 10', note: 'Repeat blocks inside repeat blocks, and if blocks that decide what a sprite does next: the Grade 4 and 5 ideas, built into a game.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'The step to typed code, where a nested loop draws a grid and an if statement checks a ride height, as on this page.' },
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Game rules are conditions in disguise. Children plan scoring and levels on paper first, then make the code follow them.' },
      { course: 'ai-literacy-for-kids-course', band: 'Ages 8 to 12', note: 'How AI tools make decisions, where they get things wrong, and how a child can check an answer before believing it.' }
    ]
  },

  sections: [
    {
      id: 'g45', tint: '', eyebrow: 'Grades 4 and 5 in Ontario math',
      h2: 'Loops inside loops, then code that decides: Grades 4 and 5 in Markham',
      intro: 'Markham&rsquo;s public schools teach the Ontario curriculum. We took the Grade 4 and Grade 5 coding wording straight from the ministry&rsquo;s curriculum data on 22 October 2026. Quoted words belong to the ministry; the explanations are ours.',
      body: [
        { kind: 'align', rows: [
          { code: 'Grade 4', req: 'Expectation C3.1 adds code with &ldquo;repeating, and nested events&rdquo;, and a teacher note explains that loops can sit inside other loops.', ours: 'One loop draws a row; an outer loop repeats the row. The ministry&rsquo;s own example draws a square with &ldquo;Repeat 4 times: Move 100 steps. Turn 90 degrees.&rdquo;' },
          { code: 'Grade 5', req: 'C3.1 moves on to code &ldquo;that involves conditional statements and other control structures&rdquo;.', ours: 'An if statement: the program checks something and takes one path or another. This is where most children first feel that a program is thinking.' },
          { code: 'Grade 5 note', req: 'The ministry calls conditional statements &ldquo;a representation of binary logic (yes or no, true or false, 1 or 0)&rdquo;.', ours: 'Every if asks a yes-or-no question. Children who can say the question out loud write far fewer broken conditions.' },
          { code: 'Grade 5 examples', req: 'Suggested tasks include code that would decide who can ride the roller coaster at an amusement park, and a guess-the-number game.', ours: 'Both are favourites in our classes too, because a child can test them with their own numbers.' }
        ] },
        { kind: 'p', text: 'Two short programs, written by us, show each grade in typed Python. The first is a Grade 4 nested loop: the inner loop builds a line of four stars and the outer loop prints that line three times.<code class="cg-mt-2">' + NESTED + '</code>It prints three rows of four stars. The second is the Grade 5 ride check, with our own made-up height rule of 120 centimetres. With a height of 125 it prints &ldquo;You can ride&rdquo;; change the height to 110 and it prints &ldquo;Not yet&rdquo;.<code class="cg-mt-2">' + RIDE + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The edge case', p: 'Ask a child what happens at exactly 120. Many guess wrong, because the difference between greater-than and greater-than-or-equal is invisible until you test it. Testing the boundary is the most useful habit Grade 5 can build.' },
          { h3: 'Reading before running', p: 'Ontario also asks children to read and alter existing code and describe how a change affects the outcome. We do this every lesson: predict the output, run it, and explain any surprise.' },
          { h3: 'No marks from us', p: 'We are an online class that sits beside school. We give no report-card marks and have no connection with the Ontario Ministry of Education, EQAO, the Markham school boards or the City of Markham.' }
        ] }
      ]
    },
    {
      id: 'trial', tint: 'tint', eyebrow: 'Inside a trial lesson',
      h2: 'Seven signs of a strong kids&rsquo; coding class, visible in one trial lesson',
      intro: 'Brochures look alike; lessons do not. These are the signs we would look for as parents, written for Markham families with a child aged 6 to 12. They are our own guide, and they apply to our trial lessons as much as anyone&rsquo;s.',
      body: [
        { kind: 'table', caption: 'What to watch for in a free trial coding lesson for a child aged 6 to 12 (our guide, October 2026)', head: ['Sign', 'What you will see', 'What its absence looks like'], rows: [
          ['The child talks more than once a minute', 'The teacher asks what the code will do, and waits for an answer.', 'A long demonstration while the child watches and nods.'],
          ['Mistakes are treated as information', 'A bug becomes a question: what did you expect, and what happened?', 'The teacher quietly fixes it, or the child is told to copy again.'],
          ['The task matches the grade', 'A Grade 4 child meets loops inside loops; a Grade 5 child meets if statements.', 'Every age gets the same drag-and-drop activity.'],
          ['The child changes something', 'Before the end, the rule changes and the child adapts their own program.', 'The lesson ends the moment the copied program works.'],
          ['The group is the right size for the age', 'The teacher can see each screen and names each child.', 'Children wait a long time with their hand up, or drift off camera.'],
          ['You hear a plan', 'The teacher can say what the next few lessons build toward.', '&ldquo;We&rsquo;ll see how it goes&rdquo; with no next step.'],
          ['Your child leaves with something', 'A program they can run again at home and explain to you.', 'A certificate, but nothing they can show working.']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'If you can only watch five minutes', p: 'Watch for the first mistake. How a teacher handles one broken program tells you more than an hour of slides about the curriculum.' },
          { h3: 'Ask the same thing everywhere', p: 'Use one question at every trial: what will my child be able to build in eight weeks that they cannot build today? Compare the answers side by side.' },
          { h3: 'Then ask your child', p: 'On the drive home, ask which part was hard. A child who names a specific bug and how it was fixed has been taught, not entertained.' }
        ] }
      ]
    },
    {
      id: 'buildings', tint: 'deep', eyebrow: 'Markham data project',
      h2: 'How old are the buildings the City of Markham owns? A project in Python',
      intro: 'The City of Markham publishes a file called City Owned Facilities, with the year each building was built. Our students aged about 10 to 12 sort the 82 rows into centuries with one line of integer division. All the counts here are ours.',
      body: [
        { kind: 'table', caption: 'Our count of City Owned Facilities by type and by the hundred years the building dates from (City of Markham Open Data, downloaded 22 October 2026, 82 rows)', head: ['Type in the file', '1800s', '1900s', '2000s'], rows: [
          ['Museum', '31', '18', '3'],
          ['Community Centre', '3', '12', '6'],
          ['Library', '1', '2', '0'],
          ['Recycling Depot', '1', '2', '0'],
          ['Art Gallery', '1', '1', '0'],
          ['Theatre', '0', '1', '0'],
          ['All 82 rows', '37', '36', '9']
        ] },
        { kind: 'p', text: 'Our script, using only Python&rsquo;s standard library. The key line is <b>hundreds = year // 100 * 100</b>: dividing 1874 by 100 with whole-number division gives 18, and multiplying back gives 1800, so every year falls into its century bin.<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The oldest row', p: 'The earliest YEAR_BUILT in the file is 1824, on a Museum row, and the newest is 2016. Sorting all 82 years puts the middle of the list at 1926, so half the buildings the City lists are older than that.' },
          { h3: 'A label that hides things', p: 'Only 3 rows have the type Library, yet 9 building names contain the word LIBRARY. A community centre with a library inside is filed as a Community Centre, so a count by type undercounts libraries.' },
          { h3: 'A question to argue about', p: 'More than half the rows are Museum buildings, almost all from the 1800s. Should a chart of City buildings include them? There is no single right answer, which is the point of the exercise.' }
        ] },
        { kind: 'callout', h3: 'What the file does not say', p: 'YEAR_BUILT tells us when a building was built, not when the City bought it, moved it or last renovated it. A building from 1850 may have been moved onto its site much later. Our students write those limits beside their chart before they present it.' },
        { kind: 'p', text: 'Data source: City of Markham Open Data, <a class="cg-inline-link" href="https://data-markham.opendata.arcgis.com/datasets/d8cee9f1183f4d8f9c731e777782f3a3_0">City Owned Facilities</a>. Contains public sector Information made available under the City of Markham&rsquo;s Open Data Licence (<a class="cg-inline-link" href="https://data-markham.opendata.arcgis.com/pages/terms-of-use">licence</a>). The City of Markham does not endorse Modern Age Coders, and this page is ours alone.' }
      ]
    },
    {
      id: 'next-contests', tint: '', eyebrow: 'After Grade 5',
      h2: 'Gauss and the Team Up Challenge: the next CEMC steps for Markham children',
      intro: 'The Centre for Education in Mathematics and Computing (CEMC) at the University of Waterloo runs two things a Markham child meets around Grades 6 to 8. We read both on CEMC&rsquo;s site on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Two CEMC options for children finishing elementary school, 2026 to 2027 (CEMC&rsquo;s own details)', head: ['', 'Gauss math contest', 'Team Up Challenge'], rows: [
          ['Meant for', 'Grades 7 and 8; CEMC welcomes motivated younger students', 'Grades 6 to 8'],
          ['Format', '25 multiple-choice questions in 60 minutes', 'A classroom resource that groups four students to solve problems together'],
          ['When', '10 to 21 May 2027, with schools ordering by 22 April 2027', '1 June 2027 or later'],
          ['How a child takes part', 'Through their school', 'Through a teacher who uses it in class']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Only through school', p: 'CEMC says every student must take part through their school, so a Markham family cannot enter a child alone. If your child is keen, ask the math teacher in the spring.' },
          { h3: 'Where coding helps', p: 'Gauss is a math contest, not a coding one, but the Grade 5 habit of testing edge cases carries straight over. Children who check their answer at the boundary lose fewer easy marks.' },
          { h3: 'Original practice only', p: 'We never copy CEMC problems. We point families to CEMC&rsquo;s free past contests and teach with puzzles our teachers write and label as ours.' }
        ] },
        { kind: 'p', text: 'For a full plan, read our <a class="cg-inline-link" href="/gauss-contest-preparation">Gauss preparation page</a> or the wider <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">guide to Waterloo contests</a>. Modern Age Coders is not part of CEMC or the University of Waterloo.' }
      ]
    },
    {
      id: 'hours', tint: 'tint', eyebrow: 'Class times',
      h2: 'Markham class times on Eastern time, and what they are in India',
      intro: 'Markham moves its clocks back on 1 November 2026 and forward on 14 March 2027. Our teachers in India do not change theirs, so the gap between the two shifts by an hour. Two typical slots, converted by us from the IANA time zone database (release 2026e):',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Weekday, 4:30 pm in Markham', p: 'Until 1 November 2026 Markham is on UTC-4 and India is 9 hours 30 minutes ahead, so this is 2:00 am the next day in India. From 1 November 2026 to 14 March 2027 Markham is on UTC-5, the gap is 10 hours 30 minutes, and it is 3:00 am.' },
          { h3: 'Sunday, 11:00 am in Markham', p: 'Under UTC-4 that is 8:30 pm the same Sunday in India; under UTC-5, from 1 November 2026, it is 9:30 pm. Weekend mornings in Markham fall in the Indian evening all year.' },
          { h3: 'Our part of the arithmetic', p: 'Families never convert anything. Each invitation states the Markham time, and before both clock changes we send the next class time again in Eastern time.' }
        ] },
        { kind: 'p', text: 'Phone numbers in Markham use the 905 overlay, where 289, 365 and 742 share the same area. Enter the ten digits in the form below; the +1 is handled for you.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'How a Markham child moves from blocks to Python',
    intro: 'The grade bands are only a starting guess. The trial lesson shows where your child really is.',
    cols: [
      { band: 'Grades 1 to 3', h3: 'Blocks and repeats', p: 'Characters that move in order, then repeat blocks, with plenty of talking through each step.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grade 4', h3: 'Nested loops', p: 'Patterns and drawings made by a loop inside a loop, built in Scratch and explained aloud.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Grades 5 and 6', h3: 'Decisions in code', p: 'If statements, small games with rules, and the first typed Python for children ready to type.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grade 7', h3: 'Data and bigger builds', p: 'Files like the Markham buildings list, functions, and logic puzzles that lead toward Gauss.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'With AI tools everywhere, why should a Markham child learn if statements?',
    intro: 'Because a decision written in code is only as good as the question behind it.',
    p1: 'Ask an AI tool for a ride-height checker and it writes one instantly. Whether it says greater-than or greater-than-or-equal is a choice about a real child standing at 120 centimetres, and the tool makes that choice silently. A Grade 5 student who has tested the boundary themselves will catch it. A student who has never written an if statement will not know there was a choice.',
    p2: 'That is why our children&rsquo;s classes put thinking first: say the yes-or-no question, write it, test the edge, explain the result. Children learn what AI is and how it errs, and they practise checking its answers, but no chatbot does their work in class. For home use, OpenAI requires that anyone under 18 has a parent&rsquo;s permission to use ChatGPT.',
    closer: 'Ontario describes conditional statements as binary logic, a yes or a no; deciding which question deserves which answer is a human job.',
    blogAnchor: 'whether coding is still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online classes for Markham children, step by step',
    intro: 'Your child joins from home; the teacher joins from India; the lesson is live, with screens shared both ways.',
    cells: [
      { h3: 'Choosing a time', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Group or private', p: 'A group of 15 to 20 children at a similar level, or private lessons where the teacher follows one child&rsquo;s pace and interests.' },
      { h3: 'Equipment', p: 'A computer with a keyboard, speakers or headphones, and a reliable internet connection. Our teachers help set up free tools in the first lesson.' },
      { h3: 'Same teacher', p: 'Each group keeps a regular teacher, who learns how your child thinks and which mistakes they tend to make.' },
      { h3: 'Across Markham', p: 'Children in Unionville, Thornhill, Milliken and Box Grove join the same online classes as the rest of Markham, on Eastern time.' },
      { h3: 'Trial first', p: 'The first lesson is free and complete. It ends with a level, a course and a time we recommend, and no card details.' }
    ],
    spec: { title: 'Online only', p: 'Modern Age Coders has no centre in Markham and does not claim one. All teaching is live and online, and the teachers are based in India.' }
  },

  fees: {
    h2: 'Kids&rsquo; coding class fees for Markham families',
    intro: 'Three lines; the currency code is printed beside each fee.',
    first: 'A complete live trial lesson, free, finishing with a suggested course and level.',
    group: 'The monthly fee for a group place among 15 to 20 children at the same stage.',
    private: 'The monthly fee for private lessons with one teacher, at times you pick.',
    closer: 'Markham families are charged exactly what any Canadian family is charged. There is no bill before the free trial lesson; payment starts once you have agreed a course and a time, and the pricing page covers missed lessons and holidays.'
  },

  reviewsH2: 'Google reviews from parents and students',

  book: {
    h2: 'Request a free trial lesson for your Markham child',
    intro: 'Give us the grade or age. A Grade 2 child might make a sprite repeat a dance; a Grade 5 child might write the ride-height check and find its edge case.',
    success: 'Thank you. We will be in touch soon to arrange a trial lesson for your child in Markham.'
  },

  faq: {
    h2: 'Markham parents&rsquo; questions about coding for kids',
    intro: 'What Markham families most often ask before a first lesson.',
    items: [
      { q: 'Are your coding classes for kids in Markham in person?', a: 'No, they are live online. Your child learns from home with a real teacher who can see their screen, in a group of 15 to 20 or in private lessons. We have no Markham location.' },
      { q: 'What age are your kids\' coding classes for?', a: 'Ages 6 to 12 on these courses. Older children and teens move on to our Python and AI courses for teens.' },
      { q: 'What does Ontario teach about coding in Grades 4 and 5?', a: 'Grade 4 math adds nested loops, which means a loop inside a loop. Grade 5 adds conditional statements, the if statements that let code make decisions.' },
      { q: 'How can I tell in a trial lesson whether a class is good?', a: 'Watch who talks and what happens at the first mistake. In a strong lesson your child explains their own code often, and a bug becomes a question rather than something the teacher silently fixes.' },
      { q: 'Should my 8-year-old learn Scratch or Python?', a: 'Usually Scratch first. At eight most children reason well but type slowly, and blocks let them focus on loops and decisions. Python follows once typing is comfortable.' },
      { q: 'Can my child enter a math or coding contest?', a: 'In Grades 7 and 8 your child can write CEMC\'s Gauss contest through their school, listed for 10 to 21 May 2027. CEMC also welcomes motivated younger students.' },
      { q: 'When are the classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are always confirmed in Eastern time.' },
      { q: 'Will my child use AI tools in class?', a: 'Children learn how AI works and how to check its answers, but they write their own code. We do not hand young children a chatbot to do the thinking.' },
      { q: 'Is there homework?', a: 'Usually a small optional task, such as changing one rule in the program from class. Children who try it learn faster, but nobody is marked on it.' },
      { q: 'What does it cost?', a: 'The fees section on this page lists a free trial lesson, the monthly group fee and the monthly private fee. Nothing is charged before the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario families',
    h2: 'Related pages for Markham and Ontario',
    html: 'Start from <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a> or the <a class="cg-inline-link" href="/coding-classes-in-canada">Canada hub</a>. Every grade from 1 to 8 is covered in our <a class="cg-inline-link" href="/ontario-coding-curriculum-grades-1-to-8">Ontario coding curriculum guide</a>, the Grade 6 year has its own <a class="cg-inline-link" href="/ontario-grade-6-math-and-coding-help">math and coding help page</a>, and the national comparison of class formats is <a class="cg-inline-link" href="/best-online-coding-classes-in-canada">online coding classes in Canada</a>. Toronto families can see <a class="cg-inline-link" href="/coding-and-ai-classes-in-toronto">coding and AI classes in Toronto</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Markham and Ontario',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/coding-and-ai-classes-in-toronto', label: 'Toronto' },
    { href: '/gauss-contest-preparation', label: 'Gauss preparation' },
    { href: '/ontario-grade-6-math-and-coding-help', label: 'Grade 6 math and coding' }
  ],

  personalityCss: `
.cg-root.cg-beaa .cg-hero h1 { font-weight: 680; letter-spacing: -0.02em; line-height: 1.05; }
.cg-root.cg-beaa .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-beaa .cg-eyebrow { letter-spacing: 0.12em; font-weight: 650; text-transform: uppercase; font-size: 0.76rem; }
.cg-root.cg-beaa .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.012em; }
.cg-root.cg-beaa .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-beaa .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-beaa #g45 code, .cg-root.cg-beaa #buildings code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.82rem; line-height: 1.55; padding: 0.85rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-beaa .cg-align-code { font-weight: 700; letter-spacing: 0.04em; }
.cg-root.cg-beaa #trial .cg-table td:first-child { font-weight: 650; }
.cg-root.cg-beaa .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.8rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: Elementary Mathematics (2020) Grade 4 C3.1 (nested events), the Grade 4 nested-loop note and square example, Grade 5 C3.1 (conditional statements), the Grade 5 binary-logic note and its roller coaster and guess-the-number examples, and the read-and-alter expectation. CEMC Gauss (Grades 7 and 8, 25 questions in 60 minutes, 10 to 21 May 2027, ordering by 22 April 2027) and Team Up Challenge (Grades 6 to 8, groups of four, 1 June 2027 or later); through-a-school rule. Markham in the Toronto CMA and the 905 overlay; Eastern time offsets from facts-geo.md (IANA tzdb 2026e).',
    localProject: 'City of Markham Open Data, City Owned Facilities (Open Data Licence - City of Markham, Version 1.0), CSV downloaded 22 October 2026 (11,383 bytes) and counted with our script page_script.py (python -I): 82 rows; by hundreds 1800s 37, 1900s 36, 2000s 9; Museum 31/18/3, Community Centre 3/12/6, Library 1/2/0, Recycling Depot 1/2/0, Art Gallery 1/1/0, Theatre 0/1/0; oldest 1824 (Museum), newest 2016, median 1926; 9 names contain LIBRARY against 3 Library rows. Labelled as ours. Lesson family: integer-division bins and checking a type label against names.',
    requiredMentions: [
      'hundreds = year // 100 * 100',
      '9 building names contain the word LIBRARY',
      'The earliest YEAR_BUILT in the file is 1824',
      'City of Markham&rsquo;s Open Data Licence',
      'a representation of binary logic (yes or no, true or false, 1 or 0)',
      'With a height of 125 it prints',
      'groups four students to solve problems together',
      'with schools ordering by 22 April 2027',
      'Unionville, Thornhill, Milliken and Box Grove'
    ],
    sources: [
      { claim: 'Ontario curriculum content API: Grade 4 math strands (nested events, loop note, square example).', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_4___strands?depth=4' },
      { claim: 'Ontario curriculum content API: Grade 5 math strands (conditional statements, binary logic note, examples).', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_5___strands?depth=4' },
      { claim: 'CEMC Gauss contest: grades, format, 2027 dates and ordering deadline.', url: 'https://cemc.uwaterloo.ca/contests/gauss' },
      { claim: 'CEMC contests overview: Team Up Challenge description and date.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'CEMC: students participate through their school.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'City of Markham Open Data: City Owned Facilities dataset page.', url: 'https://data-markham.opendata.arcgis.com/datasets/d8cee9f1183f4d8f9c731e777782f3a3_0' },
      { claim: 'Open Data Licence - City of Markham, Version 1.0 (commercial use, credit statement, non-endorsement).', url: 'https://data-markham.opendata.arcgis.com/pages/terms-of-use' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Markham population figure: StatCan was not reachable live.',
      'Names of individual City buildings and of any Markham school: not printed.',
      'That YEAR_BUILT is when the City acquired or last renovated a building: not stated in the file, so refused.',
      'Any ranking of Markham coding providers, or that Modern Age Coders is the best: refused; the page gives signs to look for.',
      'That our classes raise report-card marks or EQAO results: refused.',
      'CEMC fees: left out on purpose (currency-neutral page).',
      'Any affiliation with the City of Markham, the Markham school boards, the Ontario Ministry of Education, EQAO, CEMC or the University of Waterloo.'
    ]
  }
};
