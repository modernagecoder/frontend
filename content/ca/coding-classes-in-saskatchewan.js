'use strict';
// Saskatchewan (cg- province page, Canada cluster Wave 2, row 93). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md. Not repeated from canada-coding-curriculum-by-province, which
// only names Computer Science 20 and 30 and quotes the "other science curricula" line: this page owns the outcomes, the
// suggested languages, Pre-Calculus 30 and Calculus 30, the Time Act, 2026 bill and a provincial open data project.
// Spine: two provincial computer science courses whose outcomes are published one by one, the senior math courses beside
// them, a parks data project that teaches the difference between a mean and a median, and a province that has kept one
// clock all year for decades.
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src/coding-classes-in-saskatchewan/):
//  - curriculum.gov.sk.ca Computer Science 20 outcomes (CurriculumOutcomeContent?id=446; cs20-outcomes.html and the CSV
//    cs20_outcomes.csv): goals "Core Principles and Techniques", "Fundamentals of Programming", "Computing and Society",
//    "Career Exploration", "Student-Directed Research"; CS20-FP1 "Utilize different data types, including integer, floating
//    point, Boolean and string, to solve programming problems."; CS20-FP3 "Construct and utilize functions to create reusable
//    pieces of code."; CS20-FP4 "Investigate one-dimensional arrays and their applications."; CS20-CS2 "Investigate the
//    impacts of information technologies on privacy, including digital security practices."; CS20-SD1 "Develop a coding
//    project and/or research a topic related to computer science of the student's choice."
//  - Computer Science 20 curriculum PDF, Ministry of Education, "January, 2018" (CurriculumFile?id=446, saved
//    cs20-curriculum.pdf): "The choice of programming language for Computer Science 20 and Computer Science 30 is left to
//    individual teachers"; suggested languages CS20 Python, Java, PHP, JavaScript, Visual Basic; CS30 Python, Processing,
//    Java, PHP, JavaScript; visual environments Blockly and Scratch, which "should not be used as the core language in
//    Computer Science 20"; "students should start coding as soon as possible in the course"; Karel the Robot as a bridge;
//    computational thinking dimensions Decomposition, Pattern recognition, Abstraction, Algorithm design; "The current credit
//    requirements for graduation from Grade 12 are one 10-level credit and one 20-level credit in science."
//  - Computer Science 30 outcomes (CurriculumOutcomeContent?id=444; cs30-outcomes.html): CS30-FP2 "Create programs that
//    utilize external files."; CS30-FP3 "Use libraries to simplify solutions to programming problems."; CS30-FP4 "Explore
//    the concepts and principles of object-oriented programming."; CS30-CC1 "Explore recursion and investigate sorting
//    algorithms."; CS30-CC2 "Explore number systems and character encoding used in computing."; CS30-CAP1 "Create a
//    large-scale computer program to demonstrate proficiency in procedural or object-oriented programming."
//  - Secondary course lists on the same site (cs30-home.html): Sciences include Computer Science 20 and 30; Mathematics
//    includes Foundations of Mathematics and Pre-calculus 10, Pre-Calculus 20 and 30, Foundations 20 and 30, Workplace and
//    Apprenticeship 10 to 30, Calculus 30. The CS30 page files it with "other science curricula".
//  - Pre-Calculus 30 outcomes (CurriculumOutcomeContent?id=159): P30.1 to P30.13, including P30.2 unit circle, P30.9
//    logarithms, P30.12 "Demonstrate understanding of permutations, including the fundamental counting principle.".
//    Calculus 30 outcomes (id=163): C30.3 "Demonstrate understanding of limits and continuity.", C30.6 derivatives for
//    optimization, rates of change and related rates.
//  - The Time Act, 2026, Bill No. 58 (docs.legassembly.sk.ca, geo/tz/gov_Bill30-58.pdf): "central standard time" means UTC-6
//    hours; "Saskatchewan" includes the City of Lloydminster; "the time to be observed in Saskatchewan is central standard
//    time"; "This Act comes into force by order of the Lieutenant Governor in Council."; the assent line is blank on the
//    printed bill. tzdb 2026e: America/Regina -6:00 with no DST; tzdb comment that the new Act comes into force by order.
//    Area codes 306, 474, 639 (facts-geo.md). No populations.
//  - CEMC (facts-schools-contests.md): Pascal, Cayley and Fermat 23 and 24 February 2027; Euclid 6 April 2027; CCC
//    Wednesday 17 February 2027; Gauss 10 to 21 May 2027; through a school; past contests free.
//  - Government of Saskatchewan GeoHub, Saskatchewan Parks Boundaries (ArcGIS item 2dcf3ee92e2c4d25a109eeac74f085af; feature
//    service gis.saskatchewan.ca ParksAsLegislated FeatureServer/4; accessInformation "Saskatchewan Ministry of Parks, Culture
//    and Sport"; description: last update "Sept 22, 2021"; types NE, RP, WP, HP, RS, "Protected Area (PR)", HS), queried with
//    curl on 22 October 2026 15:41 UTC, attributes only, saved opendata/parks.json (sha256 9d03e485...82fe3); spatial
//    reference wkid 2151 (NAD83(CSRS) UTM zone 13N). Licence: Government of Saskatchewan Standard Unrestricted Use Data
//    Licence (Version 2.0), PDF saved: "including for commercial purposes"; attribution "Contains information licensed
//    under the Government of Saskatchewan Standard Unrestricted Use Data Licence (Version 2.0)."; non-endorsement.
// Our own calculations (py/mean_median.py and py/explore_parks.py, python -I; outputs *.out.txt): 172 rows, 172 distinct
// PPID; PARKTYPE RS 104, PA 24, PP-N 12, PP-R 11, PP-H 9, HS 8, PP-W 4 (the file says PA where the description says PR);
// Shape__Area / 1,000,000 as km2: all parks mean 72.61, median 0.61; RS mean 3.22 median 0.58; PP-N mean 583.02 median
// 235.42; PP-W mean 1207.5 median 1151.7; largest Lac La Ronge Provincial Park 3,191.9; 14 over 100 km2; 99 under 1 km2;
// HUNTING flag 1 on 18 rows. No total area printed.
// Lesson family: summary statistics on a skewed column (mean versus median) and unit conversion.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import json',
  'import statistics',
  '',
  'with open("parks.json", encoding="utf-8") as f:',
  '    parks = [feature["attributes"] for feature in json.load(f)["features"]]',
  '',
  'by_type = {}',
  'for park in parks:',
  '    km2 = park["Shape__Area"] / 1_000_000',
  '    by_type.setdefault(park["PARKTYPE"], []).append(km2)',
  '',
  'for kind, areas in sorted(by_type.items(), key=lambda p: len(p[1]), reverse=True):',
  '    print(kind, len(areas),',
  '          "mean", round(statistics.mean(areas), 2),',
  '          "median", round(statistics.median(areas), 2))',
  '',
  'every = [a for areas in by_type.values() for a in areas]',
  'print("all", len(every), "mean", round(statistics.mean(every), 2),',
  '      "median", round(statistics.median(every), 2))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'province', tag: 'SASKATCHEWAN', label: 'Saskatchewan', blurb: 'Coding, Python and AI for Saskatchewan students: Computer Science 20 and 30 outcome by outcome, Pre-Calculus 30, and a provincial parks data project.' },
  market: CA,
  slug: 'coding-classes-in-saskatchewan',
  code: 'sas',
  accent: '#4C3C1C',
  accentRationale: 'Saskatchewan: a dark wheat-stubble brown, #4C3C1C, allocated to row 93; contrast 10.05 on the paper #FBF8F2, 9.45 on #F5F1E8 and 8.65 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Saskatchewan',
    eyebrow: 'Saskatchewan, Canada',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'By province', href: '/canada-coding-curriculum-by-province' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Saskatchewan',
  title: 'Coding Classes in Saskatchewan | Live Online Python, Ages 6+',
  description: 'Live online coding, Python and AI classes for Saskatchewan students: Computer Science 20 and 30 outcomes, Pre-Calculus 30 help and a parks data project.',
  ogDescription: 'Saskatchewan publishes every outcome for Computer Science 20 and 30 and leaves the language to the teacher. Here is what the courses ask and how live online classes build on them.',
  twitterDescription: 'Saskatchewan coding, Python and AI classes, live online, built around Computer Science 20 and 30.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and AI Classes for Saskatchewan Students',
    description: 'Live online coding for Saskatchewan students from Grade 1 to adult: blocks, Python, Java, AI and machine learning, Waterloo math contest training and Pre-Calculus 30 support, taught in English alongside school.'
  },

  h1: 'Coding classes in Saskatchewan',
  capsuleQ: 'Who teaches coding live to Saskatchewan students, beyond what school offers?',
  capsule: 'Modern Age Coders runs live online coding, Python and AI classes for Saskatchewan learners aged 6 to adult, in a group batch of fifteen to twenty or with a private teacher. Children usually begin with Python and AI for Kids, teens with Python for Teens, and Grade 12 students add our Pre-Calculus companion. Times follow Saskatchewan\'s year-round clock, and the first class is free.',
  lead: 'Saskatchewan publishes its two computer science courses outcome by outcome. Computer Science 20 and Computer Science 30 sit with the sciences in the Ministry of Education\'s curriculum, the language is the teacher\'s choice, and Python heads the list of languages the ministry\'s guide suggests. Where a school runs them, a single semester leaves little time for the large project the outcomes describe. This page lists what the two courses ask for in the ministry\'s words, sets out the senior math courses beside them, walks through a Python project on the province\'s parks data, and explains the bill that would write Saskatchewan\'s single clock into a new Time Act.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a student in Saskatchewan.',

  picks: {
    eyebrow: 'Course picks for Saskatchewan',
    h2: 'Four places Saskatchewan students start',
    intro: 'Chosen around Computer Science 20 and 30 and the Grade 12 math year, then checked against the student in the free first lesson.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Grades 4 to 7', note: 'Typed Python for children ready to move past blocks, the step the ministry itself recommends making early in a first programming course.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 8 to 12', note: 'Python from data types and functions to files and libraries, which covers the Fundamentals of Programming outcomes in both Computer Science 20 and 30.' },
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', band: 'Grade 12', note: 'Built for BC and Alberta, and close to Pre-Calculus 30: the unit circle, trigonometric equations, logarithms, transformations and permutations. We map each lesson to the P30 outcomes.' },
      { course: 'waterloo-math-contests-gauss-to-euclid-course', band: 'Grades 7 to 12', note: 'For contest-minded students: original practice for the Gauss, Pascal, Cayley, Fermat and Euclid contests that Saskatchewan schools can order.' }
    ]
  },

  sections: [
    {
      id: 'school', tint: '', eyebrow: 'Computer science in Saskatchewan schools',
      h2: 'Computer Science 20 and 30, outcome by outcome',
      intro: 'Saskatchewan\'s curriculum site publishes every outcome for both courses. We read them on 22 October 2026; quoted outcomes are the ministry\'s wording, the right-hand column is our plain reading.',
      body: [
        { kind: 'table', caption: 'Selected Computer Science 20 and 30 outcomes, Saskatchewan Ministry of Education (quoted from curriculum.gov.sk.ca; the explanations are ours)', head: ['Outcome', 'Ministry wording', 'In practice'], rows: [
          ['CS20-FP1', '&ldquo;Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.&rdquo;', 'Knowing why 0.1 + 0.2 is not exactly 0.3, and when to use text instead of a number'],
          ['CS20-FP3', '&ldquo;Construct and utilize functions to create reusable pieces of code.&rdquo;', 'Writing a function once and calling it everywhere, the first real step toward clean code'],
          ['CS20-FP4', '&ldquo;Investigate one-dimensional arrays and their applications.&rdquo;', 'Lists of values, looping over them and finding the largest or the average'],
          ['CS20-CS2', '&ldquo;Investigate the impacts of information technologies on privacy, including digital security practices.&rdquo;', 'Passwords, permissions and what an app can learn about its user'],
          ['CS30-FP2', '&ldquo;Create programs that utilize external files.&rdquo;', 'Reading a data file, such as the parks file on this page, instead of typing values in'],
          ['CS30-CC1', '&ldquo;Explore recursion and investigate sorting algorithms.&rdquo;', 'Functions that call themselves, and why some sorts are far faster than others'],
          ['CS30-CC2', '&ldquo;Explore number systems and character encoding used in computing.&rdquo;', 'Binary, hexadecimal and how a letter becomes a number'],
          ['CS30-CAP1', '&ldquo;Create a large-scale computer program to demonstrate proficiency in procedural or object-oriented programming.&rdquo;', 'The capstone: one big program, planned, built and documented']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The teacher picks the language', p: 'The ministry\'s January 2018 guide says the choice of language for both courses is left to individual teachers. Its suggestions for Computer Science 20 are Python, Java, PHP, JavaScript and Visual Basic; for Computer Science 30 it lists Python, Processing, Java, PHP and JavaScript.' },
          { h3: 'Blocks only to begin', p: 'Blockly and Scratch are suggested as a starting environment, but the guide says a visual tool should not be the core language of Computer Science 20, and that students should start coding as soon as possible. It even suggests a Karel the Robot style language as the bridge.' },
          { h3: 'Four ways of thinking', p: 'The guide names four dimensions of computational thinking: decomposition, pattern recognition, abstraction and algorithm design. They are the habits we teach from the first class, long before a student meets either course.' }
        ] },
        { kind: 'p', text: 'Computer Science 20 has five goals, from core principles and programming fundamentals to computing and society, career exploration and a student-directed project. The last one is the most demanding: outcome CS20-SD1 asks students to develop a coding project or research a topic of their own choice. A student who arrives in Computer Science 20 already comfortable with functions and lists can spend that project on something ambitious, rather than on learning syntax in the last weeks of the semester.' },
        { kind: 'callout', h3: 'Our place beside the school course', p: 'Our classes run alongside Computer Science 20, Computer Science 30 and the math courses, and we do not grant Saskatchewan credits. Credits are earned at school. We are not connected with the Saskatchewan Ministry of Education or any school division.' }
      ]
    },
    {
      id: 'math', tint: 'tint', eyebrow: 'Senior math in Saskatchewan',
      h2: 'Pre-Calculus 30 and Calculus 30, and how they meet programming',
      intro: 'The same curriculum site lists the senior math courses: Foundations of Mathematics, Pre-Calculus, Workplace and Apprenticeship Mathematics, and Calculus 30. Two of them matter most to students heading for computer science or engineering.',
      body: [
        { kind: 'table', caption: 'Selected Pre-Calculus 30 and Calculus 30 outcomes (Saskatchewan Ministry of Education, curriculum.gov.sk.ca; groupings ours)', head: ['Course', 'Outcomes', 'What the outcomes cover'], rows: [
          ['Pre-Calculus 30', 'P30.1 to P30.5', 'Angles in degrees and radians, the unit circle and six trigonometric ratios, trigonometric graphs, equations and identities'],
          ['Pre-Calculus 30', 'P30.6 to P30.11', 'Operations on and compositions of functions, transformations, inverses, logarithms, polynomials up to degree 5, radical and rational functions'],
          ['Pre-Calculus 30', 'P30.12 and P30.13', 'Permutations with the fundamental counting principle, combinations and the binomial theorem'],
          ['Calculus 30', 'C30.3 to C30.6', 'Limits and continuity, differentiation as a rate of change, curve sketching, optimization and related rates']
        ] },
        { kind: 'p', text: 'Counting is where Pre-Calculus 30 and Computer Science 30 overlap most. P30.12 asks students to demonstrate understanding of permutations, including the fundamental counting principle, and a short recursive function that lists every arrangement of four letters makes the formula visible: 24 arrangements, printed one by one. We use exactly that exercise in our own classes, written by us, to connect the two courses.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Logarithms in code', p: 'P30.9 covers evaluating logarithms, laws of logarithms and solving equations. A binary search that halves a sorted list each step finishes in about log base 2 of n steps, which turns an abstract outcome into a number a student can measure.' },
          { h3: 'Calculus 30', p: 'Calculus 30 adds limits, derivatives and their applications. Students who write a few lines of Python to estimate a slope from shrinking intervals see what a limit is doing before they are asked to prove anything about it.' },
          { h3: 'How we help', p: 'Our Pre-Calculus support follows the P30 outcome order a Saskatchewan school uses, with practice sets written by us. We do not reproduce school or ministry assessments.' }
        ] }
      ]
    },
    {
      id: 'parks', tint: 'deep', eyebrow: 'Saskatchewan data project',
      h2: 'How big is a typical Saskatchewan park? Mean and median on the province\'s own file',
      intro: 'The Government of Saskatchewan publishes its parks boundaries on GeoHub. Our students download the 172 records, convert the areas to square kilometres and find that the average tells a misleading story. All the figures here are ours.',
      body: [
        { kind: 'table', caption: 'Our calculation on Saskatchewan Parks Boundaries, queried 22 October 2026: area per park type in square kilometres (area as computed by the province\'s map service; our conversion and rounding)', head: ['PARKTYPE in the file', 'Rows', 'Mean area', 'Median area'], rows: [
          ['RS, recreation site', '104', '3.22', '0.58'],
          ['PA, protected area', '24', '2.37', '0.49'],
          ['PP-N, natural environment provincial park', '12', '583.02', '235.42'],
          ['PP-R, recreation provincial park', '11', '24.27', '5.73'],
          ['PP-H, historic provincial park', '9', '0.40', '0.13'],
          ['HS, historic site', '8', '0.02', '0.01'],
          ['PP-W, wilderness provincial park', '4', '1,207.50', '1,151.70'],
          ['All 172 rows', '172', '72.61', '0.61']
        ] },
        { kind: 'p', text: 'This short script produces the table from the downloaded file, using only Python 3 and its built-in statistics module:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Convert the units', p: 'The Shape__Area field is in square metres, because the service stores the boundaries in a metric map projection. Dividing by 1,000,000 gives square kilometres. Writing the divisor as 1_000_000 lets Python read it while a person can still count the zeros.' },
          { h3: '2. Mean against median', p: 'Across all 172 rows the mean is 72.61 km2 but the median is 0.61 km2. A few huge northern parks pull the mean up: Lac La Ronge Provincial Park alone is about 3,191.9 km2, while 99 of the 172 rows are under 1 km2. The median is the honest answer to how big a typical park is.' },
          { h3: '3. Check the labels', p: 'The dataset description lists protected areas as PR, but the file itself uses PA for those 24 rows. A careful student trusts the data over the description, then writes the mismatch down so the next reader is not caught out.' }
        ] },
        { kind: 'callout', h3: 'What the numbers leave out', p: 'Areas come from the service\'s map projection, so treat the second decimal as approximate. The description says the boundaries were last updated on 22 September 2021, so a park created since then may be missing. And a park\'s area says nothing about how many people visit it or what it offers.' },
        { kind: 'p', text: 'For a stronger student the next step is a chart: a histogram of park areas on a normal scale is one tall bar and a long empty tail, while the same data on a logarithmic scale spreads out neatly, which ties straight back to the logarithms of Pre-Calculus 30. Contains information licensed under the Government of Saskatchewan Standard Unrestricted Use Data Licence (Version 2.0). Data: Saskatchewan Parks Boundaries, Saskatchewan Ministry of Parks, Culture and Sport, on the <a class="cg-inline-link" href="https://geohub.saskatchewan.ca/datasets/2dcf3ee92e2c4d25a109eeac74f085af_4/about">Saskatchewan GeoHub</a> (<a class="cg-inline-link" href="https://gisappl.saskatchewan.ca/Html5Ext/Resources/GOS_Standard_Unrestricted_Use_Data_Licence_v2.0.pdf">licence</a>). The calculations and script are ours; the Government of Saskatchewan does not endorse this page.' }
      ]
    },
    {
      id: 'contests', tint: '', eyebrow: 'Contests from Saskatchewan',
      h2: 'Math and computing contests a Saskatchewan school can order for 2027',
      intro: 'The University of Waterloo\'s CEMC sets contests that schools anywhere in Canada can order for their students. The winter and spring 2027 dates below are CEMC\'s, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'CEMC contests in 2027 for Saskatchewan students (grades and dates as listed by CEMC)', head: ['Contest', 'Who it is for', 'CEMC date'], rows: [
          ['Canadian Computing Competition (CCC)', 'Junior or Senior, chosen by programming skill', 'Wednesday 17 February 2027'],
          ['Pascal, Cayley and Fermat', 'Grades 9, 10 and 11', '23 and 24 February 2027'],
          ['Euclid', 'Final year of secondary school', 'Tuesday 6 April 2027'],
          ['Gauss', 'Grades 7 and 8', '10 to 21 May 2027']
        ] },
        { kind: 'p', text: 'Entry runs through a school, never through an individual sign-up, so the first step is asking a teacher whether the school will place an order; CEMC also allows a student to join another local school that is taking part. The CCC accepts C, C++, Python and Java, which suits a student whose Computer Science 20 class used Python or Java. CEMC\'s past contests are free to read, and we teach from original problems we write rather than copying CEMC\'s. Our <a class="cg-inline-link" href="/pascal-contest-preparation">Pascal</a>, <a class="cg-inline-link" href="/euclid-contest-preparation">Euclid</a> and <a class="cg-inline-link" href="/gauss-contest-preparation">Gauss</a> pages go deeper. Modern Age Coders and CEMC are not connected.' }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Class times',
      h2: 'Saskatchewan\'s one clock, and the Time Act, 2026 bill',
      intro: 'Saskatchewan does not change its clocks, and the time zone database has it at UTC-6 through the year. Neighbouring provinces changed in 2026, which matters for anyone scheduling across the Prairies.',
      body: [
        { kind: 'table', caption: 'Prairie and India clocks from 1 November 2026 (offsets from IANA tzdb 2026e and provincial time laws; the example times and conversions are ours)', head: ['Place', 'Offset all year', 'A 4 pm class in Saskatchewan is, there', 'Same moment in India'], rows: [
          ['Saskatchewan', 'UTC-6', '4:00 pm', '3:30 am the next day'],
          ['Alberta', 'UTC-6', '4:00 pm', '3:30 am the next day'],
          ['Manitoba', 'UTC-5', '5:00 pm', '3:30 am the next day']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The bill as printed', p: 'Bill No. 58, The Time Act, 2026, defines central standard time as UTC-6 hours and says Saskatchewan includes the City of Lloydminster. Its last section says it comes into force by order of the Lieutenant Governor in Council, and the assent line on the copy we read is blank, so we treat it as a bill, not yet as law in force.' },
          { h3: 'A shared Prairie clock', p: 'With Alberta at UTC-6 all year and Manitoba at UTC-5 all year from November 2026, Regina and Calgary now always read the same time and Winnipeg is always an hour ahead. Saskatoon families can schedule with Alberta relatives without a seasonal adjustment.' },
          { h3: 'Phone numbers', p: 'Saskatchewan numbers with the 306, 474 and 639 area codes work in our booking form. Enter the ten digits; the +1 is supplied.' }
        ] },
        { kind: 'p', text: 'For our teachers in India, a Saskatchewan class is the simplest in Canada to plan: India is eleven and a half hours ahead every week of the year. A Saturday class at 9 am in Regina is 8:30 pm the same day in India, all year, which is why weekend mornings are a comfortable fit. We still write every confirmation in Saskatchewan time.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first blocks to the Computer Science 30 capstone',
    intro: 'Grades are a starting guess; the free class decides the real starting point.',
    cols: [
      { band: 'Grades 1 to 3', h3: 'Blocks and puzzles', p: 'Blockly-style and Scratch projects where the child plans each step before running it.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 4 to 8', h3: 'Into Python', p: 'Typed Python with loops and functions, and plain-language lessons on how AI systems learn from examples.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 9 and 10', h3: 'Ahead of Computer Science 20', p: 'Data types, functions and lists in Python or Java, so the CS20 project can be ambitious.', courses: ['python-complete-masterclass-teens', 'java-programming-masterclass-for-teens'] },
      { band: 'Grades 11 and 12', h3: 'CS30, AI and contests', p: 'Files, recursion and a large program, then machine learning and CCC practice for those who want it.', courses: ['ai-ml-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'A mean is easy to compute and easy to misread. So is AI output',
    intro: 'The parks project shows the habit we care about most: checking whether a correct-looking number answers the question asked.',
    p1: 'Ask an AI tool for the average size of a Saskatchewan park and it may compute 72.61 km2 correctly and still mislead, because the typical park is under a square kilometre. Spotting that takes a student who knows what a mean and a median do, and who looks at the data before trusting a summary of it.',
    p2: 'Our students write their own analysis first, then compare it with what a tool produces, and explain any difference. Teens use AI tools only within each provider\'s age rules, with parental permission where a provider requires it; younger children learn how AI predicts things by building small programs, not by using adult tools.',
    closer: 'Computer Science 20 lists privacy and the impact of technology among its outcomes; judging AI output is the newest part of that same job.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online for Saskatoon, Regina and everywhere between',
    intro: 'Every class is live with a teacher on video, so distance from a city makes no difference to what a student can take.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Around the province', p: 'A learner in Saskatoon, Regina, Prince Albert, Moose Jaw, Swift Current, Yorkton or North Battleford can sit in the same class, on the same Saskatchewan time.' },
      { h3: 'Two formats', p: 'A group batch of fifteen to twenty students at one level, or a private teacher for a student who wants a faster pace or help on the CS30 capstone.' },
      { h3: 'Saskatchewan courses', p: 'Teachers plan around Computer Science 20 and 30, Pre-Calculus 30 and Calculus 30, and know where each sits in the semester.' },
      { h3: 'School languages', p: 'Python is our default, as it heads the ministry\'s suggested list. Students whose school uses Java or JavaScript can learn in that language instead.' },
      { h3: 'Start free', p: 'The first class is a full lesson, free, ending with a recommended level, course and time.' }
    ],
    spec: { title: 'No Saskatchewan office', p: 'Modern Age Coders has no centre in Saskatchewan and claims none. Teaching is live and online from India, and a student needs a computer with a microphone, speakers and a steady internet connection.' }
  },

  fees: {
    h2: 'What classes cost in Saskatchewan',
    intro: 'The currency appears next to each fee, so nothing has to be converted by hand.',
    first: 'A full live lesson that costs nothing and ends with a recommended level, course and time.',
    group: 'The monthly fee for a seat in a group batch of fifteen to twenty students at one level.',
    private: 'The monthly fee for one-to-one teaching on a schedule built around the student.',
    closer: 'Saskatchewan families pay the same monthly fee as families elsewhere in Canada. We bill only after the free lesson, once the course and the time are fixed; the pricing page covers holidays and missed classes.'
  },

  reviewsH2: 'What families and students say about us on Google',

  book: {
    h2: 'Tell us about your Saskatchewan student',
    intro: 'We choose the first task by level: a block-coding maze for Grade 2, a Python quiz game for Grade 6, or the parks file for a Computer Science 20 student who wants real data.',
    success: 'Thank you. The team will be in touch soon about a class for Saskatchewan.'
  },

  faq: {
    h2: 'Saskatchewan coding questions',
    intro: 'Questions Saskatchewan families send us most often.',
    items: [
      { q: 'Do you teach coding to students in Saskatchewan?', a: 'Yes, live and online, from Grade 1 to adult. There is no Saskatchewan classroom; students join from home, in a group batch of fifteen to twenty or with a private teacher.' },
      { q: 'Does Saskatchewan have high school computer science courses?', a: 'Yes. The Ministry of Education publishes Computer Science 20 and Computer Science 30, filed with the science courses. Whether a particular school offers them is up to that school.' },
      { q: 'What programming language is used in Computer Science 20?', a: 'The teacher chooses. The ministry suggests Python, Java, PHP, JavaScript or Visual Basic for Computer Science 20, and says block tools such as Scratch should not be the core language.' },
      { q: 'Do your classes give Saskatchewan credits?', a: 'No. We do not grant Saskatchewan credits. Credits for Computer Science 20, Computer Science 30 and math courses come from the school; we teach alongside them.' },
      { q: 'Can you help with Pre-Calculus 30?', a: 'Yes. We teach the P30 outcomes in school order, from the unit circle and trigonometry to logarithms, permutations and combinations, with practice we write ourselves.' },
      { q: 'Does Saskatchewan change its clocks?', a: 'No. Saskatchewan stays at UTC-6 all year. The Time Act, 2026 bill would set central standard time as UTC-6 and comes into force by order of the Lieutenant Governor in Council.' },
      { q: 'What time are classes for Saskatchewan families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Saskatchewan time.' },
      { q: 'Can my child write the Waterloo math contests from Saskatchewan?', a: 'Yes, if their school orders them. CEMC lists Pascal, Cayley and Fermat for 23 and 24 February 2027 and Euclid for 6 April 2027. Students cannot sign up on their own.' },
      { q: 'Do Saskatchewan phone numbers work in the form?', a: 'Yes. Numbers with the 306, 474 and 639 area codes work. Type the ten digits; the country code is already filled in.' },
      { q: 'What is a good age to start?', a: 'Age 6 or Grade 1 for block coding. Most children are ready for typed Python by Grade 4 or 5, and adult beginners are welcome.' },
      { q: 'Where do I find the fees?', a: 'In the fees section of this page, which lists the free first class, the monthly group fee and the monthly private fee, each shown with its currency. Nothing is billed before the free class.' }
    ]
  },

  cityLinks: {
    "eyebrow": "Saskatchewan cities",
    "h2": "Our city pages in Saskatchewan",
    "p": "2 pages for Saskatchewan towns and cities, each written for the families there.",
    "links": [
      {
        "href": "/coding-and-ai-classes-in-regina",
        "label": "Coding and AI classes in Regina"
      },
      {
        "href": "/coding-and-ai-classes-in-saskatoon",
        "label": "Coding and AI classes in Saskatoon"
      }
    ]
  },
  next: {
    eyebrow: 'More for Canada',
    h2: 'Other pages for Saskatchewan students',
    html: 'Begin at <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>, or read how Saskatchewan compares with other provinces in <a class="cg-inline-link" href="/canada-coding-curriculum-by-province">our curriculum guide</a>. Neighbouring Alberta has its own page, <a class="cg-inline-link" href="/coding-classes-in-alberta">coding classes in Alberta</a>, and every province\'s high school math is side by side in <a class="cg-inline-link" href="/canada-high-school-math-courses-compared">Canadian high school math courses compared</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Saskatchewan and Canada',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/canada-coding-curriculum-by-province', label: 'Curriculum by province' },
    { href: '/coding-classes-in-alberta', label: 'Alberta' },
    { href: '/canada-high-school-math-courses-compared', label: 'High school math compared' },
    { href: '/euclid-contest-preparation', label: 'Euclid contest' }
  ],

  personalityCss: `
.cg-root.cg-sas .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.2rem); }
.cg-root.cg-sas .cg-hero h1 { font-weight: 760; letter-spacing: -0.022em; line-height: 1.04; }
.cg-root.cg-sas .cg-capsule { border-left: 2px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-sas .cg-eyebrow { letter-spacing: 0.14em; font-weight: 640; font-size: 0.75rem; text-transform: uppercase; }
.cg-root.cg-sas .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.014em; }
.cg-root.cg-sas .cg-table caption { font-weight: 620; text-align: left; }
.cg-root.cg-sas .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sas #parks code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.58; padding: 0.95rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-sas .cg-ladder-col { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-sas .cg-callout { border-left-width: 2px; }
`,

  dossier: {
    curriculumAuthority: 'Saskatchewan, read 22 October 2026 from curriculum.gov.sk.ca and saved raw: Computer Science 20 outcomes (five goals, CS20-FP1, FP3, FP4, CS2, SD1) and the January 2018 CS20 guide (language left to teachers, suggested languages for CS20 and CS30, Blockly and Scratch not the core language, start coding early, Karel bridge, four computational thinking dimensions, science credit requirement); Computer Science 30 outcomes (FP2, FP3, FP4, CC1, CC2, CAP1); secondary course lists (CS20 and CS30 under Sciences; Pre-Calculus 20 and 30, Calculus 30 under Mathematics); Pre-Calculus 30 (P30.1 to P30.13) and Calculus 30 (C30.1 to C30.8) outcomes. Time: The Time Act, 2026, Bill No. 58 (UTC-6, Lloydminster, coming into force by order); tzdb 2026e America/Regina. Area codes 306, 474, 639. CEMC 2027 dates via facts-schools-contests.md.',
    localProject: 'Government of Saskatchewan GeoHub, Saskatchewan Parks Boundaries (Ministry of Parks, Culture and Sport; Standard Unrestricted Use Data Licence v2.0), 172 records queried with curl on 22 October 2026 and analysed with our script mean_median.py (python -I): RS 104, PA 24, PP-N 12, PP-R 11, PP-H 9, HS 8, PP-W 4; all parks mean 72.61 km2 against median 0.61 km2; PP-N mean 583.02, median 235.42; largest Lac La Ronge Provincial Park about 3,191.9 km2; 99 of 172 under 1 km2; description says PR, file says PA. No total area. Labelled as ours. Lesson family: mean versus median on a skewed column, unit conversion.',
    requiredMentions: [
      'Saskatchewan Parks Boundaries',
      'Standard Unrestricted Use Data Licence (Version 2.0)',
      'the median is 0.61 km2',
      'Lac La Ronge Provincial Park',
      'Create programs that utilize external files.',
      'Explore number systems and character encoding used in computing.',
      'should not be the core language of Computer Science 20',
      'includes the City of Lloydminster',
      '306, 474 and 639',
      'but the file itself uses PA'
    ],
    sources: [
      { claim: 'Saskatchewan Computer Science 20 outcomes.', url: 'https://curriculum.gov.sk.ca/CurriculumOutcomeContent?id=446' },
      { claim: 'Saskatchewan Computer Science 20 curriculum guide (January 2018): languages, visual environments, computational thinking.', url: 'https://curriculum.gov.sk.ca/CurriculumFile?id=446' },
      { claim: 'Saskatchewan Computer Science 30 outcomes.', url: 'https://curriculum.gov.sk.ca/CurriculumOutcomeContent?id=444' },
      { claim: 'Saskatchewan Pre-Calculus 30 outcomes.', url: 'https://curriculum.gov.sk.ca/CurriculumOutcomeContent?id=159' },
      { claim: 'Saskatchewan Calculus 30 outcomes.', url: 'https://curriculum.gov.sk.ca/CurriculumOutcomeContent?id=163' },
      { claim: 'The Time Act, 2026, Bill No. 58 (UTC-6, Lloydminster, coming into force by order).', url: 'https://docs.legassembly.sk.ca/legdocs/Bills/30L2S/Bill30-58.pdf' },
      { claim: 'Saskatchewan GeoHub: Saskatchewan Parks Boundaries dataset.', url: 'https://geohub.saskatchewan.ca/datasets/2dcf3ee92e2c4d25a109eeac74f085af_4/about' },
      { claim: 'Government of Saskatchewan Standard Unrestricted Use Data Licence (Version 2.0).', url: 'https://gisappl.saskatchewan.ca/Html5Ext/Resources/GOS_Standard_Unrestricted_Use_Data_Licence_v2.0.pdf' },
      { claim: 'CEMC contests 2026-27: CCC, Pascal, Cayley, Fermat, Euclid, Gauss dates; through a school.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'IANA tzdb northamerica: America/Regina, no daylight saving time.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Saskatchewan, Regina or Saskatoon population figure: none printed.',
      'That The Time Act, 2026 is in force: refused; the bill comes into force by order of the Lieutenant Governor in Council and our copy shows no assent date.',
      'That Computer Science 20 counts toward the science graduation requirement: not stated by the guide; only the general science credit rule is quoted.',
      'A total area of Saskatchewan parks: not computed.',
      'That C5 was written for Saskatchewan: refused; it was written for BC and Alberta and is mapped to the P30 outcomes.',
      'The name of the smallest site in the parks file: left out (a religious building).',
      'That every Saskatchewan high school offers Computer Science 20 or 30: refused.',
      'That our classes grant or count toward a Saskatchewan credit: refused.',
      'Any affiliation with the Saskatchewan Ministry of Education, the Ministry of Parks, Culture and Sport, a school division or CEMC.'
    ]
  }
};
