'use strict';
// Manitoba (cg- province page, Canada cluster Wave 2, row 92). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md. Not repeated from canada-coding-curriculum-by-province (which
// only names the 20S/30S/40S framework and the Grade 9 pilot): this page owns the framework's course outlines, the Grade 12
// provincial math tests, the permanent-daylight-time change and a provincial open data project.
// Spine: Manitoba's three senior computer science courses as the 2004 framework sets them out, the Grade 12 math tests that
// count for a fifth of the mark, a fish-stocking data project on the province's own open data, and a clock that stops
// changing on 1 November 2026.
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src/coding-classes-in-manitoba/ and
// ca/src/other-provinces/):
//  - Manitoba Education and Early Childhood Learning, Senior 2 (20S), Senior 3 (30S), and Senior 4 (40S) Computer Science:
//    Manitoba Curriculum Framework of Outcomes, 2004 (edu.gov.mb.ca/k12/cur/cs/framework.pdf, 730,800 bytes, saved as
//    mb-cs-framework.pdf, text mb-cs-framework.raw.txt): "The computer science framework does not prescribe a specific
//    language. The teacher and students will decide which modern programming languages students will learn."; "Many of the
//    computer science learning outcomes can be achieved only by programming a computer."; "No prerequisites are specified
//    for computer science courses."; "Schools may choose to offer one, two, or three full credits in computer science.";
//    "the computer science course code is 0280"; 20S "This introductory course in computer programming is of interest to a
//    broad audience."; 30S "This course takes an in-depth look at problem solving through computer programming."; 40S "This
//    project-based computer programming course reflects the way projects are completed in industry."; topic lists per
//    course (branching, looping, subprograms without parameters; multiple branching, subprograms with parameters, strings,
//    one-dimensional and parallel arrays, simple sorts; files, two languages, object-oriented programming, recursion,
//    two-dimensional arrays, analyzing algorithms, sorting and searching, "Team project: create a computer simulation",
//    "Learning a new programming language" independently); "Confirm an algorithm's logic by hand-tracing a computer
//    program."; "Program advanced algorithms (such as quick sort, bisection search, and random number generator)."; "Students
//    are not required to create their own classes until S4."
//  - edu.gov.mb.ca Senior Years ICT page (mb-ict-index.html): the Computer Science framework "replaces the former curriculum
//    documents Computer Science 205 and Computer Science 305".
//  - edu.gov.mb.ca/k12/assess/ (mb-assess-index.html): Grade 12 Applied Mathematics Achievement Test 26 January 2027 and
//    17 June 2027; Essential 27 January 2027 and 16 June 2027; Pre-Calculus 28 January 2027 and 15 June 2027; "Grade 12
//    Provincial Tests in Language Arts (40S) and Mathematics (40S)"; "Marked locally by teachers according to marking
//    guidelines and training offered by the department"; "Tests count for 20 per cent of students' final grades for Language
//    Arts, Applied Mathematics, Pre-Calculus Mathematics, or Essential Mathematics"; Grade 3 numeracy results collected 19
//    October to 27 November 2026; Grade 7 mathematics (Middle Years) collected 18 January to 26 February 2027.
//  - edu.gov.mb.ca Framework for Learning, Grade 12 Pre-Calculus Mathematics (fw-math-gr12-precal.html): "Course Code 3939",
//    "Course Credit 1"; course overview (unit circle, six trigonometric ratios, transformations, inverses, logarithms,
//    permutations and combinations, binomial expansion). Grade 12 program list (fw-english_math_math_gr12.html). Math page
//    "four areas" (fw-english_math_index.html).
//  - Manitoba news release 17 September 2026 (geo/tz/gov__item_75397): "This change means Manitobans' clocks will not revert
//    to standard time on Nov. 1." The Official Time Amendment Act, S.M. 2023, c. 4 (geo/tz/gov_c00423.pdf): "Manitoba Standard
//    Time" means five hours behind Coordinated Universal Time (UTC). tzdb 2026e America/Winnipeg: CDT until 2026 Nov 1 2:00,
//    then -5:00 all year. Area codes 204, 431, 584 (facts-geo.md). No populations.
//  - CEMC (facts-schools-contests.md): BCC 9 to 20 November 2026; CCC Wednesday 17 February 2027, Junior or Senior by skill,
//    C, C++, Python or Java; Gauss 10 to 21 May 2027; through a school.
//  - Manitoba Government open data, Manitoba_Waterbody_Stocking_Records (ArcGIS item 42b7b0930d304ea4a5457cf046507253,
//    licenceInfo "Manitoba Open Data Licence", accessInformation "Manitoba Government"); description: "individual stocking
//    events dating back to 1917"; QUANTITY is the "Approximate number of fish stocked". Feature service queried with curl on
//    22 October 2026 at 15:30 UTC, seven pages of up to 2,000 records (maxRecordCount 2000), saved in opendata/stocking/.
//    Licence: OpenMB Information and Data Use License PDF (saved): use "including for commercial purposes"; attribution
//    "Contains information from the Government of Manitoba, licensed under the OpenMB Information and Data Use License
//    (Manitoba.ca/OpenMB)"; non-endorsement clause.
// Our own calculations (py/count_stocking.py and py/extra_stocking.py, python -I; outputs *.out.txt): 12,880 events,
// 12,880 distinct OBJECTID; events per decade 1910s 1, 1920s 74, 1930s 216, 1940s 446, 1950s 768, 1960s 996, 1970s 1,121,
// 1980s 1,748, 1990s 2,287, 2000s 2,088, 2010s 1,925, 2020s 1,210; 28 species labels, WALLEYE 4,404, RAINBOW TROUT 3,408,
// BROOK TROUT 1,643, BROWN TROUT 1,034, LAKE TROUT 531; 594 distinct WATERBODY_ID but 576 names; 23 names belong to 2+
// waterbodies (GULL LAKE 4 ids); 2,930 events with no DATE; SIZE has 13 labels including '0' (70) and 'SEE COMMENTS' (3);
// busiest year 1994 (291 events); 2026 so far 140 events. QUANTITY never summed.
// Lesson family: paging through a web API and grouping records by a key, and why a name is not a key.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import glob',
  'import json',
  '',
  'rows = []',
  'for name in glob.glob("stocking/page-*.json"):',
  '    with open(name, encoding="utf-8") as f:',
  '        rows += [feature["attributes"] for feature in json.load(f)["features"]]',
  '',
  'by_decade = {}',
  'ids_for_name = {}',
  'for row in rows:',
  '    decade = row["YEAR"] // 10 * 10',
  '    by_decade[decade] = by_decade.get(decade, 0) + 1',
  '    ids_for_name.setdefault(row["WATERBODY_NAME"], set()).add(row["WATERBODY_ID"])',
  '',
  'print("events", len(rows))',
  'for decade in sorted(by_decade):',
  '    print(decade, by_decade[decade])',
  'shared = [n for n, ids in ids_for_name.items() if len(ids) > 1]',
  'print("names", len(ids_for_name), "shared by 2+ waterbodies", len(shared))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'province', tag: 'MANITOBA', label: 'Manitoba', blurb: 'Coding, Python and AI for Manitoba students: the 20S, 30S and 40S computer science courses, the Grade 12 math tests and a fish-stocking data project.' },
  market: CA,
  slug: 'coding-classes-in-manitoba',
  code: 'man',
  accent: '#8A4C46',
  accentRationale: 'Manitoba: a muted prairie-brick red, #8A4C46, allocated to row 92; contrast 6.19 on the paper #FBF8F2, 5.82 on #F5F1E8 and 5.32 on #EDE7DA, so it clears 4.5 on all three paper tints',
  pageType: 'city',
  place: {
    name: 'Manitoba',
    eyebrow: 'Manitoba, Canada',
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
  routeLabel: 'Manitoba',
  title: 'Coding Classes in Manitoba | Live Online Python and AI, Ages 6+',
  description: 'Live online coding, Python and AI classes for Manitoba students: the 20S to 40S computer science courses, Grade 12 math test dates and a data project.',
  ogDescription: 'Manitoba lets schools offer up to three computer science credits in any modern language. Here is what each course covers, the 2027 math test dates and live classes that go further.',
  twitterDescription: 'Manitoba coding, Python and AI classes, live online, planned around 20S, 30S and 40S.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and AI Classes for Manitoba Students',
    description: 'Live online coding for Manitoba students from Grade 1 to adult: blocks, Python, Java, AI and machine learning, CCC preparation and Grade 12 Pre-Calculus support, taught in English alongside school.'
  },

  h1: 'Coding classes in Manitoba',
  capsuleQ: 'Where can a Manitoba student learn coding with a live teacher?',
  capsule: 'Manitoba students from Grade 1 to adult learn coding, Python and AI with Modern Age Coders in live online classes, either with a private teacher or in a group batch of fifteen to twenty. Typical starting points are Python and AI for Kids, Python for Teens and, for Grade 12, our Pre-Calculus companion. Classes run on Manitoba time and the first one is free.',
  lead: 'Manitoba has had a provincial computer science framework since 2004, with three courses a school may offer in Senior 2, 3 and 4, and it leaves the programming language to the teacher and the class. That freedom is generous, and it means two Winnipeg schools can teach the same course in different languages, and a school may decide not to offer it at all. This page sets out what each course is meant to cover, in the department\'s words where they matter; the Grade 12 math tests on the 2026 to 2027 calendar; a Python project built on fish-stocking records the province publishes itself; and the clock change Manitoba is skipping this November.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a student in Manitoba.',

  picks: {
    eyebrow: 'Course picks for Manitoba',
    h2: 'Four courses Manitoba families ask about',
    intro: 'Matched to the stages of Manitoba schooling, from the early grades to the 40S year, and confirmed in a free first lesson.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Grades 4 to 7', note: 'A first typed language for children who are done with blocks: variables, loops, conditions and small games they can show at home.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 8 to 12', note: 'Python all the way to files and data, the same ground the 20S and 30S outlines cover, which suits schools that teach computer science in Python.' },
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', band: 'Grade 12', note: 'Written for BC and Alberta, and close to Manitoba\'s Grade 12 Pre-Calculus: trigonometry, logarithms, transformations and counting. We map each lesson to the Manitoba outline.' },
      { course: 'ccc-junior-and-senior-preparation-course', band: 'Grades 9 to 12', note: 'For students who like contests: original practice for the Canadian Computing Competition, in Python, Java or C++.' }
    ]
  },

  sections: [
    {
      id: 'school', tint: '', eyebrow: 'Computer science in Manitoba schools',
      h2: 'The three senior computer science courses, as Manitoba\'s framework describes them',
      intro: 'A single 2004 framework from the department, now called Manitoba Education and Early Childhood Learning, covers Senior 2 (20S), Senior 3 (30S) and Senior 4 (40S) Computer Science. Quoted words below are the department\'s; the topic lists are taken from its suggested course outlines and shortened by us.',
      body: [
        { kind: 'table', caption: 'Manitoba computer science courses from the 2004 Curriculum Framework of Outcomes (suggested outlines; wording in quotation marks is the department\'s, topic lists shortened by us)', head: ['Course', 'How the framework describes it', 'Programming topics in the outline'], rows: [
          ['Senior 2 Computer Science (20S)', '&ldquo;This introductory course in computer programming is of interest to a broad audience.&rdquo;', 'Variables and data types, input and output, debugging, branching and nested branching, definite and indefinite loops, built-in graphics, subprograms without parameters'],
          ['Senior 3 Computer Science (30S)', '&ldquo;This course takes an in-depth look at problem solving through computer programming.&rdquo;', 'Multiple branching, subprograms with parameters, strings, one-dimensional and parallel arrays, simple sorts'],
          ['Senior 4 Computer Science (40S)', '&ldquo;This project-based computer programming course reflects the way projects are completed in industry.&rdquo;', 'Files, one program in two languages, object-oriented programming, recursion, two-dimensional arrays, analyzing algorithms, sorting and searching, a team computer simulation']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'No set language', p: 'The framework says it &ldquo;does not prescribe a specific language&rdquo; and that the teacher and students decide which modern languages to learn. In 40S, students are even asked to learn a new language on their own and to write one program in two different languages.' },
          { h3: 'Credits are optional', p: 'Schools may offer one, two or three full credits in computer science, and the framework sets no prerequisites. Where a school skips 20S, its outcomes move into 30S, and the same happens between 30S and 40S. The department\'s course code for all three is 0280.' },
          { h3: 'Code has to run', p: 'The department is plain that &ldquo;many of the computer science learning outcomes can be achieved only by programming a computer.&rdquo; Students trace an algorithm by hand to confirm its logic, then program sorts, searches and a random number generator.' }
        ] },
        { kind: 'p', text: 'The framework replaced the older Computer Science 205 and 305 documents, and its age shows mostly in small things, such as the department\'s former name, Manitoba Education, Citizenship and Youth, on the cover. The ideas have not aged. Hand-tracing, two-dimensional arrays, recursion and comparing the efficiency of two sorts still separate a student who can type code from one who can reason about it, and in our view they remain the core of programming. The framework also notes that students are not required to create their own classes until S4, which tells a parent roughly when object-oriented programming arrives.' },
        { kind: 'callout', h3: 'Alongside the school course', p: 'Our classes support a student taking 20S, 30S or 40S, or a student whose school does not offer them, and we do not grant Manitoba credits. Credits and marks come from the school. We are not connected with Manitoba Education and Early Childhood Learning or any school division.' }
      ]
    },
    {
      id: 'math', tint: 'tint', eyebrow: 'Grade 12 math tests',
      h2: 'Manitoba\'s Grade 12 math tests in 2026 to 2027, and the fifth of the mark they carry',
      intro: 'Manitoba sets provincial tests at the end of each semester for the three main Grade 12 math courses. Dates are the department\'s 2026/27 schedule, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Grade 12 Mathematics (40S) provincial tests, 2026 to 2027 (Manitoba Education and Early Childhood Learning assessment schedule)', head: ['Test', 'Semester 1', 'Semester 2'], rows: [
          ['Grade 12 Applied Mathematics Achievement Test', 'Tuesday 26 January 2027', 'Thursday 17 June 2027'],
          ['Grade 12 Essential Mathematics Achievement Test', 'Wednesday 27 January 2027', 'Wednesday 16 June 2027'],
          ['Grade 12 Pre-Calculus Mathematics Achievement Test', 'Thursday 28 January 2027', 'Tuesday 15 June 2027']
        ] },
        { kind: 'p', text: 'The department says these tests count for 20 per cent of a student\'s final grade in Applied, Pre-Calculus or Essential Mathematics, and that they are marked locally by teachers using its marking guidelines. The schedule also names the courses at 40S, which places 40S in Grade 12; by the same pattern 30S is the Grade 11 level and 20S the Grade 10 level, though schools decide which grade takes each computer science course.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Pre-Calculus 40S', p: 'Grade 12 Pre-Calculus Mathematics carries course code 3939 and one credit. Its overview covers angles in standard position, the unit circle and six trigonometric ratios, transformations and inverses, logarithms, and permutations, combinations and the binomial expansion.' },
          { h3: 'Earlier assessments', p: 'Manitoba also collects classroom results province-wide: Grade 3 reading and numeracy between 19 October and 27 November 2026, and Grade 7 mathematics between 18 January and 26 February 2027. These are formative, used to plan teaching rather than to grade.' },
          { h3: 'How we help', p: 'For Pre-Calculus 40S we teach the topics in the order a Manitoba school does, with original practice written by us. We do not reproduce provincial test items; the department publishes its own archived tests and support documents.' }
        ] }
      ]
    },
    {
      id: 'stocking', tint: 'deep', eyebrow: 'Manitoba data project',
      h2: 'More than a century of fish stocking: a project on Manitoba\'s open data',
      intro: 'The Manitoba government publishes its waterbody stocking records as open data, one row per stocking event back to 1917. Our students pull the whole file through the web service, group it in Python and then question it. Every figure below is our own count.',
      body: [
        { kind: 'table', caption: 'Our count of Manitoba_Waterbody_Stocking_Records, queried 22 October 2026: stocking events per decade (12,880 events in all; 2020s to date)', head: ['Decade', 'Stocking events'], rows: [
          ['1910s', '1'],
          ['1920s', '74'],
          ['1930s', '216'],
          ['1940s', '446'],
          ['1950s', '768'],
          ['1960s', '996'],
          ['1970s', '1,121'],
          ['1980s', '1,748'],
          ['1990s', '2,287'],
          ['2000s', '2,088'],
          ['2010s', '1,925'],
          ['2020s, to October 2026', '1,210']
        ] },
        { kind: 'p', text: 'Our script reads the seven saved pages and groups the events. It runs on Python 3 with no extra packages:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Page through the service', p: 'The feature service hands back at most 2,000 records per request, so the 12,880 events arrive in seven pages, asked for with a growing resultOffset. Students check that the pages hold 12,880 distinct OBJECTID values, which proves no page was fetched twice.' },
          { h3: '2. Group by a key', p: 'Integer division turns a year into its decade, and a dictionary counts events per decade. The busiest single year in the file is 1994, with 291 events. By species, walleye leads with 4,404 events, ahead of rainbow trout at 3,408 and brook trout at 1,643.' },
          { h3: '3. Find the trap', p: 'There are 594 waterbody IDs but only 576 names, because 23 names belong to more than one lake or river. Gull Lake alone covers four separate waterbodies. A student who groups by name merges different lakes; grouping by WATERBODY_ID keeps them apart.' }
        ] },
        { kind: 'callout', h3: 'What the counts do not say', p: 'An event is one stocking, of any size, so more events in the 1990s does not mean more fish. We never add up the QUANTITY column, which the province describes as an approximate number of fish. And 2,930 events have no exact date, only a year, which is why the script groups by YEAR rather than DATE.' },
        { kind: 'p', text: 'A good follow-up question for a Grade 11 or 12 student: the SIZE column holds 13 different labels, from Fry and Fingerling to 18+ cm, and includes 70 rows marked 0 and 3 marked SEE COMMENTS. How should those be cleaned before anyone charts fish size over time? Contains information from the Government of Manitoba, licensed under the OpenMB Information and Data Use License (Manitoba.ca/OpenMB). Data: Manitoba_Waterbody_Stocking_Records (see the <a class="cg-inline-link" href="https://geoportal.gov.mb.ca/datasets/42b7b0930d304ea4a5457cf046507253_0/about">stocking records on the Manitoba geoportal</a> and the <a class="cg-inline-link" href="https://www.manitoba.ca/openmb/">OpenMB licence</a>). We wrote the script and made every count; the Manitoba government has not endorsed this page or our classes.' }
      ]
    },
    {
      id: 'contests', tint: '', eyebrow: 'Contests from Manitoba',
      h2: 'Waterloo contests open to Manitoba students this school year',
      intro: 'Manitoba students write the same University of Waterloo (CEMC) contests as students in Ontario, ordered by their school. These are the ones closest to the courses above, with CEMC\'s dates for North and South America.',
      body: [
        { kind: 'table', caption: 'CEMC contests for Manitoba students, 2026 to 2027 (dates as CEMC lists them, read 22 October 2026)', head: ['Student', 'Contest', 'Date'], rows: [
          ['Up to Grade 10, no coding needed', 'Beaver Computing Challenge', '9 to 20 November 2026'],
          ['Any grade with some programming', 'Canadian Computing Competition, Junior or Senior', 'Wednesday 17 February 2027'],
          ['Grades 7 and 8', 'Gauss math contest', '10 to 21 May 2027']
        ] },
        { kind: 'p', text: 'The CCC fits Manitoba\'s courses closely. A student who has finished the 30S topics, strings, arrays and simple sorts, has the tools for the first Junior questions, and the 40S topics of recursion and searching lead into Senior. Participants choose C, C++, Python or Java, and CEMC does not let anyone register alone: a school orders the contest and the student writes it there, online. We prepare students with problems we write ourselves and point them to <a class="cg-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests">CEMC\'s free past contests</a>; more is on our <a class="cg-inline-link" href="/ccc-junior-guide">CCC Junior guide</a> and <a class="cg-inline-link" href="/ccc-senior-guide">CCC Senior guide</a>. Modern Age Coders is independent of CEMC.' }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Class times',
      h2: 'Manitoba keeps its clocks still from November 2026',
      intro: 'On 17 September 2026 the Manitoba government announced permanent daylight saving time. For families booking online classes, that makes the arithmetic easier, not harder.',
      body: [
        { kind: 'table', caption: 'Manitoba, Ontario and India clocks, 2026 to 2027 (offsets from the Official Time Amendment Act and IANA tzdb 2026e; the example class times and conversions are ours)', head: ['Period', 'Manitoba', 'Toronto', 'A 4:30 pm Manitoba class is, in India'], rows: [
          ['Until 1 November 2026', 'UTC-5', 'UTC-4', '3:00 am the next day'],
          ['1 November 2026 to 14 March 2027', 'UTC-5, no change', 'UTC-5', '3:00 am the next day'],
          ['From 14 March 2027', 'UTC-5, no change', 'UTC-4', '3:00 am the next day']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What changed', p: 'The release said Manitobans\' clocks will not revert to standard time on Nov. 1. The Official Time Amendment Act of 2023 already defines Manitoba Standard Time as five hours behind UTC, so the province simply stays at UTC-5 all year.' },
          { h3: 'Winnipeg and Toronto', p: 'In winter Winnipeg and Toronto now show the same time. From 14 March 2027, when Ontario moves forward, Toronto is an hour ahead again. Every class time we send names Manitoba time, so no one has to work this out.' },
          { h3: 'Manitoba phone numbers', p: 'Numbers with the 204, 431 and 584 area codes all work in our form. Type the ten digits; the +1 country code is already set.' }
        ] },
        { kind: 'p', text: 'There is a coding lesson inside the news. A reminder program that stores Winnipeg as a fixed offset will be right this winter by luck, while one that relies on an out-of-date time zone database will move the class an hour on 1 November 2026. Our students compare both against the America/Winnipeg zone and see why software teams update time zone data instead of hard-coding it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first loops in Grade 1 to the 40S team project',
    intro: 'Grades are only a guide. The free class shows where a student should begin.',
    cols: [
      { band: 'Grades 1 to 3', h3: 'Blocks first', p: 'Sequences, repeats and stories built in blocks, with the child explaining each step aloud.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 4 to 8', h3: 'Typed Python', p: 'Python with loops, conditions and functions, and a gentle first look at how AI makes guesses.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 9 and 10', h3: 'Ready for 20S and 30S', p: 'Python or Java taken properly, with arrays, strings and simple sorts before school asks for them.', courses: ['python-complete-masterclass-teens', 'java-programming-masterclass-for-teens'] },
      { band: 'Grades 11 and 12', h3: '40S, AI and contests', p: 'Recursion, searching and machine learning, plus CCC preparation for students who want a contest.', courses: ['ai-ml-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why hand-tracing still matters when AI can write the sort',
    intro: 'Manitoba\'s framework asks students to confirm an algorithm\'s logic by hand. That habit is the best protection against confident, wrong AI output.',
    p1: 'An AI assistant will write a quicksort in seconds. It will not tell a student whether the version it wrote handles an empty list, or why grouping fish records by lake name quietly merges four different Gull Lakes. Those checks come from tracing code line by line, which is exactly what the 2004 framework asks for and what we practise in every class.',
    p2: 'So students write the first version themselves, test it on small cases they worked out on paper, and only then compare it with what a tool suggests. Teenagers use AI tools within each tool\'s own age limits, and with a parent\'s consent wherever a tool asks for it. For children under 13 we skip the tools and build tiny guessing programs that show how AI makes a prediction.',
    closer: 'A course with no prescribed language is a course about thinking, and thinking is the part no tool can do for the student.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'One live class for Winnipeg, Brandon and the North',
    intro: 'Lessons are online, so a student in Thompson has the same teacher and the same class as a student in Winnipeg.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Across Manitoba', p: 'Winnipeg, Brandon, Steinbach, Winkler, Portage la Prairie or Thompson: wherever the student lives, the lesson is identical and the province keeps a single clock.' },
      { h3: 'Batch or private', p: 'A group of fifteen to twenty at a similar level, or a private teacher when a student needs a faster pace or help with a 40S project.' },
      { h3: 'Manitoba grades', p: 'Teachers plan in Manitoba grades and know where 20S, 30S, 40S and the January and June math tests fall in the year.' },
      { h3: 'Any school language', p: 'Because the framework leaves the language open, we teach in the one the school uses where we can, Python or Java, and bridge to the other.' },
      { h3: 'Start free', p: 'The first lesson is a full class that ends with a recommended level, course and time, and costs nothing.' }
    ],
    spec: { title: 'No Manitoba office', p: 'Modern Age Coders has no centre in Manitoba and claims none. Lessons are live on video with a teacher in India, and a student needs a computer with sound, a microphone and a dependable connection.' }
  },

  fees: {
    h2: 'Fees for Manitoba families',
    intro: 'Each fee below shows its currency next to the number.',
    first: 'One full lesson free of charge, ending with a recommended level, course and weekly time.',
    group: 'The monthly fee for a place in a class of fifteen to twenty learners at one level.',
    private: 'The monthly fee for private lessons with one teacher, scheduled around the student.',
    closer: 'Manitoba families are charged the same monthly fee as families in every other province. No payment is taken until the free lesson is over and the course and time are agreed; see the pricing page for holidays and missed classes.'
  },

  reviewsH2: 'Reviews from families and students, as posted on Google',

  book: {
    h2: 'Tell us about your Manitoba student',
    intro: 'The first task depends on the level: a looping pattern for a Grade 2 child, a guessing game for a Grade 6 student, or the stocking records for a 40S student who wants real data.',
    success: 'Thank you. The team will be in touch soon about a class for Manitoba.'
  },

  faq: {
    h2: 'Manitoba coding questions',
    intro: 'The questions Manitoba parents and students ask us before starting.',
    items: [
      { q: 'Do you have coding classes for Manitoba students?', a: 'Yes. Every lesson is live on video with a teacher. There is no Manitoba classroom to visit; students log in from home and learn either in a shared class or with a teacher of their own.' },
      { q: 'Is computer science taught in Manitoba high schools?', a: 'Manitoba has a framework for Senior 2 (20S), Senior 3 (30S) and Senior 4 (40S) Computer Science, and schools may offer one, two or three of these full-credit courses. Whether a given school offers them is the school\'s choice.' },
      { q: 'Which programming language do Manitoba computer science courses use?', a: 'The framework does not set one. The teacher and students decide which modern language to learn, and the 40S outline asks students to learn a new language on their own as well.' },
      { q: 'Will your classes give my child a Manitoba credit?', a: 'No. We do not grant Manitoba credits. Credits for 20S, 30S and 40S courses are earned at school; our classes run alongside them.' },
      { q: 'When are the Grade 12 Pre-Calculus provincial tests?', a: 'In 2026 to 2027 the department lists Thursday 28 January 2027 for semester 1 and Tuesday 15 June 2027 for semester 2. The tests count for 20 per cent of the final grade.' },
      { q: 'Is Manitoba changing its clocks in November 2026?', a: 'No. The Manitoba government announced that clocks will not go back on 1 November 2026, so Manitoba stays at UTC-5 all year. We confirm every class in Manitoba time.' },
      { q: 'What time are classes for Manitoba families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Can a Manitoba student enter the Canadian Computing Competition?', a: 'Yes, through a school that orders it. The 2027 CCC is on Wednesday 17 February 2027, according to CEMC, and each student picks Junior or Senior by programming skill, not by grade.' },
      { q: 'Do Manitoba phone numbers work in your form?', a: 'Yes. Numbers with the 204, 431 and 584 area codes work. Enter all ten digits without the leading 1.' },
      { q: 'How young can a child start?', a: 'Around age 6, in Grade 1, with block coding. Most children move to typed Python between Grades 4 and 6, and adults can start at any point.' },
      { q: 'Where can I see the fees?', a: 'In the fees block on this page: the free first lesson, the monthly group fee and the monthly private fee, each with its currency. You pay nothing until after the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'More for Canada',
    h2: 'Other pages for Manitoba students',
    html: 'The national page is <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>, and <a class="cg-inline-link" href="/canada-coding-curriculum-by-province">our province-by-province curriculum guide</a> sets Manitoba beside its neighbours. For time zones across the country after this year\'s changes, see <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones in 2026</a>; for contests, the <a class="cg-inline-link" href="/canada-math-and-coding-contest-calendar">contest calendar</a>; for math help, <a class="cg-inline-link" href="/online-math-tutor-canada">online math tutoring in Canada</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Manitoba and Canada',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/canada-coding-curriculum-by-province', label: 'Curriculum by province' },
    { href: '/canada-time-zones-2026-online-class-times', label: 'Canada time zones 2026' },
    { href: '/ccc-junior-guide', label: 'CCC Junior guide' },
    { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' }
  ],

  personalityCss: `
.cg-root.cg-man .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.6vw, 2rem); }
.cg-root.cg-man .cg-hero h1 { font-weight: 740; letter-spacing: -0.015em; line-height: 1.08; }
.cg-root.cg-man .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-man .cg-eyebrow { letter-spacing: 0.08em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-man .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.008em; }
.cg-root.cg-man .cg-table caption { font-weight: 640; text-align: left; }
.cg-root.cg-man .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-man #stocking code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.81rem; line-height: 1.55; padding: 1rem; border-top: 3px solid var(--cg-accent); }
.cg-root.cg-man .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-man .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Manitoba, read 22 October 2026 from edu.gov.mb.ca and saved raw: Senior 2 (20S), Senior 3 (30S), and Senior 4 (40S) Computer Science Curriculum Framework of Outcomes (2004): no prescribed language, outcomes need programming, no prerequisites, one to three full credits, course code 0280, course descriptions and topic outlines, hand-tracing, advanced algorithms, classes not required until S4; ICT page (replaces Computer Science 205 and 305); assessment schedule 2026/27 (Grade 12 Applied, Essential, Pre-Calculus test dates; 20 per cent; marked locally; Grade 3 and Grade 7 collection windows); Framework for Learning Grade 12 Pre-Calculus (code 3939, 1 credit, overview). Time: news release 17 September 2026 and Official Time Amendment Act S.M. 2023 c.4; tzdb 2026e America/Winnipeg. Area codes 204, 431, 584 (facts-geo.md). CEMC 2026-27 dates via facts-schools-contests.md.',
    localProject: 'Manitoba Government open data, Manitoba_Waterbody_Stocking_Records (OpenMB Information and Data Use License), queried with curl on 22 October 2026 in seven pages of up to 2,000 records and counted with our script count_stocking.py (python -I): 12,880 events; per decade from 1 (1910s) to 2,287 (1990s), 1,210 in the 2020s to date; busiest year 1994 (291); walleye 4,404, rainbow trout 3,408, brook trout 1,643 events; 594 waterbody IDs but 576 names, 23 names shared by 2+ waterbodies, Gull Lake 4; 2,930 events without a date; 13 SIZE labels incl. 70 rows of 0 and 3 SEE COMMENTS. QUANTITY never summed. Labelled as ours. Lesson family: paging an API and grouping by a key; names are not keys.',
    requiredMentions: [
      'Manitoba_Waterbody_Stocking_Records',
      'OpenMB Information and Data Use License',
      'does not prescribe a specific language',
      'Computer Science 205 and 305',
      'course code 3939',
      'busiest single year in the file is 1994',
      'Gull Lake alone covers four separate waterbodies',
      '594 waterbody IDs but only 576 names',
      '204, 431 and 584',
      'will not revert to standard time on Nov. 1'
    ],
    sources: [
      { claim: 'Manitoba Senior 2, 3 and 4 Computer Science framework (2004).', url: 'https://www.edu.gov.mb.ca/k12/cur/cs/framework.pdf' },
      { claim: 'Manitoba Computer Science framework page (Manitoba Education and Early Childhood Learning).', url: 'https://www.edu.gov.mb.ca/k12/cur/cs/index.html' },
      { claim: 'Manitoba assessment schedule 2026/27, Grade 12 provincial tests, 20 per cent.', url: 'https://www.edu.gov.mb.ca/k12/assess/index.html' },
      { claim: 'Manitoba Framework for Learning, Grade 12 Pre-Calculus Mathematics (code 3939, 1 credit).', url: 'https://www.edu.gov.mb.ca/k12/framework/english/math/grade_12/precal.html' },
      { claim: 'Manitoba news release, permanent daylight saving time, 17 September 2026.', url: 'https://news.gov.mb.ca/news/?item=75397' },
      { claim: 'The Official Time Amendment Act, S.M. 2023, c. 4: Manitoba Standard Time five hours behind UTC.', url: 'https://web2.gov.mb.ca/laws/statutes/2023/pdf/c00423.pdf' },
      { claim: 'Manitoba open data: Manitoba_Waterbody_Stocking_Records dataset.', url: 'https://geoportal.gov.mb.ca/datasets/42b7b0930d304ea4a5457cf046507253_0/about' },
      { claim: 'OpenMB Information and Data Use License (commercial use, attribution statement, non-endorsement).', url: 'https://www.gov.mb.ca/asset_library/en/legal/OpenMB-Information-Data-Use-Licence.pdf' },
      { claim: 'CEMC contests 2026-27: BCC, CCC, Gauss dates and the through-a-school rule.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'IANA tzdb northamerica: America/Winnipeg from 2026 Nov 1.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Manitoba or Winnipeg population figure: StatCan not reachable live; none printed.',
      'A total number of fish stocked: QUANTITY is approximate and never summed.',
      'The premier\'s quotation and the consultation figures in the time release: left out; only the Nov. 1 sentence is used.',
      'That 20S, 30S and 40S are fixed to Grades 10, 11 and 12: only 40S is tied to Grade 12 by the assessment page; the rest is labelled as a pattern, and schools decide.',
      'That C5 (Western Canada Grade 12 Math) was written for Manitoba: refused; the page says it was written for BC and Alberta and is mapped to the Manitoba outline.',
      'Reproducing provincial test items: refused; we point to the department archive.',
      'Math facts from mb-math-9-12.html: that file is a copy of the Framework for Learning landing page and was not used.',
      'That our classes grant or count toward a Manitoba credit: refused.',
      'Any affiliation with Manitoba Education and Early Childhood Learning, a school division, the Manitoba government or CEMC.'
    ]
  }
};
