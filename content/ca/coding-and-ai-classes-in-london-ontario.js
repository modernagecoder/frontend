'use strict';
// London, Ontario (cg- city page, Canada cluster Wave 2, row 108). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md. Not repeated from coding-classes-in-ontario (OSSD strands and the
// 2008 document) or coding-and-ai-classes-in-toronto (the C3.1 grade ladder, the EQAO window table, the CEMC date table): this
// page owns the senior course chains (ICS3U to ICS4U, MCR3U to MHF4U to MCV4U), the Grade 9 EQAO format, the CCC scoring facts
// and a City of London park amenities project.
// Spine: a London student's last three years of high school as two linked chains of courses, what Waterloo-style admission
// asks of them, a City of London file that teaches students to distrust a spike in a year column, and Eastern time.
// Sources, read raw on 22 October 2026 (keyword-research-2026-09/ca/facts-schools-contests.md rows with saved files in ca/src/):
//  - Ontario DCP API: ICS3U "Students will design software independently and as part of a team, using industry-standard
//    programming tools and applying the software development life-cycle model"; ICS4U "Students will use modular design
//    principles to create complex and fully documented programs, according to industry standards"; ICS4U prerequisite
//    "Introduction to Computer Science, Grade 11, University Preparation"; ICS3U no prerequisite; MCR3U prerequisite "Principles
//    of Mathematics, Grade 10, Academic"; MHF4U prerequisite "Functions, Grade 11, University Preparation, or Mathematics for
//    College Technology, Grade 12, College Preparation"; "The new Advanced Functions course (MHF4U) must be taken prior to or
//    concurrently with Calculus and Vectors (MCV4U)"; ICD2O (2023, Open) "investigate artificial intelligence, cybersecurity".
//  - ontario.ca OSSD page: computer studies is in the STEM group of the 17 compulsory credits ("Of the 17 compulsory credits,
//    you must complete 1 from the following group:"); "3 credits in mathematics (Grade 9, Grade 10 and 1 credit in Grade 11 or 12)".
//  - EQAO Grade 9: "an online assessment that includes two sessions (Session A and Session B), totalling 54 questions";
//    "multi-stage computer adaptive testing model"; "Results of this assessment are to be included as part of a student's final
//    course mark"; window "January 12 - February 5, 2027" (en dash in source).
//  - University of Waterloo CS page: Ontario requirements Advanced Functions, Calculus and Vectors, "Any Grade 12 U English",
//    "One other 4U course"; recommended "Grade 11 U Introduction to Computer Science"; contests "not required for admission, but
//    writing one of these contests is required for some scholarships offered by the Faculty of Mathematics"; AIF deadline
//    "February 15, 2027".
//  - CEMC CCC page: "5 questions." "Time allowed for completion is 3 hours." "Score out of 75."; Junior Q1-2 "(e.g. basic loops
//    and conditions)"; Senior Q5 "IOI level question"; Python caveat "it may not always be possible to achieve a perfect score
//    with a particular language choice (for example, Python or Java)"; 2026 means Junior 42.65 and Senior 15.56 (table values);
//    CCC "Wednesday, February 17, 2027"; Euclid "Tuesday, April 6, 2027", final year of secondary school; through a school.
//  - facts-geo.md: London CMA area codes 519, 226, 548 and 382 (CNAC files via the Internet Archive); America/Toronto UTC-5 from
//    1 November 2026, UTC-4 from 14 March 2027 (IANA tzdb 2026e). No populations.
//  - City of London Open Data, Park Amenities (hub item 716311972be047f39a5937247ed80a2c, layer 1; MapServer
//    maps.london.ca/server/rest/services/OpenData/OpenData_Recreation/MapServer/1), CSV downloaded with curl on 22 October 2026
//    (207,260 bytes, sha256 4efd4d7b...d295). Licence: "Terms of Use - City of London Open Data" (PDF, saved london-terms.pdf
//    and .txt): "grants you a world-wide, royalty-free, non-exclusive license to use, modify, and distribute the data sets in all
//    current and future media and formats for any lawful purpose"; no non-commercial clause; credit is optional but encouraged
//    ("encouraged to conspicuously announce that these data sets are publicly available from the City under these Terms of
//    Use"); "No endorsement" clause. Not an OGL variant: flagged for the owner.
// Our own calculations (amenities_page.py, the script printed on this page, and analysis.py / analysis2.py, python -I; outputs
// *.out.txt in keyword-research-2026-09/ca/src-pilots/coding-and-ai-classes-in-london-ontario/): 1,225 rows, 1,225 distinct
// GIS_ID; Owner City 912, School 276, blank 29, Private 8; Type Soccer Field 254, Baseball Diamond 194, Play Structure 190, Swing
// Set 157, Tennis Court 94, Washroom 69, Basketball Court 57, Pickleball Court 30; 1,073 rows with a year (1927 to 2025), 152
// without; decades 1990s 181, 2000s 279, 2010s 290, 2020s 262; 2021 alone 203 rows (School 164, City 32, Private 7), of which
// Baseball Diamond 124 and Tennis Court 42; all 276 School rows are either 2021 (164) or blank (112); AmenityType "Peewee" 25 and
// "PeeWee" 1, 26 after lowercasing. The reading of 2021 as a record-entry year is our inference, labelled as such.
// Lesson family: a histogram of a year column, then explaining a spike by cross-tabulating it against another column; case
// normalisation of labels.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

const SCRIPT = [
  'import csv',
  'from collections import Counter',
  '',
  'decades = Counter()',
  'by_owner_2021 = Counter()',
  'no_year = Counter()',
  'sizes = Counter()',
  '',
  'with open("park-amenities.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f):',
  '        year = row["YearConstructed"].strip()',
  '        owner = row["Owner"] or "(blank)"',
  '        if year.isdigit():',
  '            decades[int(year) // 10 * 10] += 1',
  '            if year == "2021":',
  '                by_owner_2021[owner] += 1',
  '        else:',
  '            no_year[owner] += 1',
  '        if row["AmenityType"]:',
  '            sizes[row["AmenityType"].lower()] += 1',
  '',
  'for decade in sorted(decades):',
  '    print(decade, "#" * (decades[decade] // 10), decades[decade])',
  'print("built in 2021, by owner:", dict(by_owner_2021))',
  'print("no year, by owner:", dict(no_year))',
  'print("peewee after lower():", sizes["peewee"])'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'LONDON ON', label: 'London, Ontario', blurb: 'Coding, AI, ICS3U and ICS4U support and Grade 12 university math for London, Ontario students, with a City of London park data project.' },
  market: CA,
  slug: 'coding-and-ai-classes-in-london-ontario',
  code: 'alo',
  accent: '#21194C',
  accentRationale: 'London, Ontario: a near-black indigo, #21194C, allocated for this row, at least 14 RGB units from the other Canada accents and well clear of the retired purple band; contrast 15.15 on the paper #FBF8F2 and above 13 on all three paper tints',
  pageType: 'city',
  courseCodePage: true,
  place: {
    name: 'London',
    eyebrow: 'London, Ontario',
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
  routeLabel: 'London, Ontario',
  title: 'Coding and AI Classes in London, Ontario | Live Online',
  description: 'Live online coding, Python and AI classes for London, Ontario students, with ICS3U and ICS4U support, MHF4U and MCV4U math, and a London park data project.',
  ogDescription: 'For London, Ontario students: coding and AI taught live online, plus support beside ICS3U, ICS4U, MHF4U and MCV4U, and a City of London data project.',
  twitterDescription: 'London, Ontario coding, AI and Grade 12 math support, live online on Eastern time.',
  ogImageCourse: 'ics3u-ics4u-computer-science-companion-course',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Live Online Coding, AI and Senior Math Support for London, Ontario Students',
    description: 'Live online coding and AI for London, Ontario students from age 6 to adult, with companion courses beside ICS3U and ICS4U and beside MHF4U and MCV4U, taught in English on Eastern time.'
  },

  h1: 'Coding and AI classes in London, Ontario',
  capsuleQ: 'Where does a London, Ontario student learn coding and AI from a live teacher?',
  capsule: 'Modern Age Coders teaches coding and AI live online to students in London, Ontario, from age 6 to adult, in a class of 15 to 20 or one to one. Senior students take our ICS3U and ICS4U companion or our MHF4U and MCV4U math course beside school; younger ones start with Python. The first lesson is free.',
  lead: 'For a London, Ontario teenager, Grades 11 and 12 come down to two chains of courses. One runs from ICS3U to ICS4U in computer science; the other runs from MCR3U to MHF4U and on to MCV4U in math, and university computing programs ask for the second chain by name. We do not grant Ontario credits: those are earned at school, and our companion courses run beside them. This page sets out both chains in the ministry&rsquo;s own words, what one university&rsquo;s computer science page asks of an Ontario applicant, a project we built on the City of London&rsquo;s park amenities file, the Waterloo contests that matter in Grade 12, and how our classes fit London&rsquo;s Eastern clock.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in London, Ontario.',

  picks: {
    eyebrow: 'Course picks for London, Ontario',
    h2: 'Four courses for London students, from first program to Grade 12',
    intro: 'The two companion courses sit beside school courses and grant no credit. The free first lesson confirms which fits.',
    items: [
      { course: 'ics3u-ics4u-computer-science-companion-course', band: 'Grades 11 and 12', note: 'Weekly practice, code review and projects beside a school ICS3U or ICS4U course. It does not grant an Ontario credit; the school course does.' },
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', band: 'Grade 12', note: 'Advanced Functions and Calculus and Vectors explained properly, for students taking MHF4U and MCV4U at school. No credit is granted here.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 8 to 12', note: 'Python from the first line to files and data, the right start before ICS3U and the language of the London park project below.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 10 to 12', note: 'Machine learning in Python, with the math of MHF4U and MCV4U showing up in the models, and every result questioned.' }
    ]
  },

  sections: [
    {
      id: 'chains', tint: '', eyebrow: 'Senior courses in London schools',
      h2: 'Two course chains a London, Ontario student climbs in Grades 11 and 12',
      intro: 'London schools follow the Ontario curriculum. We pulled each course record from the Ontario curriculum content service on 22 October 2026; quoted words are the ministry&rsquo;s, the summaries are ours.',
      body: [
        { kind: 'table', caption: 'Ontario senior computer science and university math courses, with prerequisites as the ministry lists them (read 22 October 2026)', head: ['Course', 'Grade and type', 'Needs first', 'In the ministry&rsquo;s words, or our summary'], rows: [
          ['ICS3U Introduction to Computer Science', 'Grade 11, university', 'No prerequisite', '&ldquo;Students will design software independently and as part of a team&rdquo;'],
          ['ICS4U Computer Science', 'Grade 12, university', 'ICS3U', '&ldquo;Students will use modular design principles to create complex and fully documented programs&rdquo;'],
          ['MCR3U Functions', 'Grade 11, university', 'Principles of Mathematics, Grade 10, Academic', 'Our summary: the course that opens the senior math chain'],
          ['MHF4U Advanced Functions', 'Grade 12, university', 'MCR3U, or Mathematics for College Technology, Grade 12', 'Our summary: the Grade 12 function course that university computing programs name'],
          ['MCV4U Calculus and Vectors', 'Grade 12, university', 'MHF4U, before or at the same time', 'The ministry says MHF4U &ldquo;must be taken prior to or concurrently with&rdquo; MCV4U']
        ] },
        { kind: 'p', text: 'The two chains meet in university admission. The University of Waterloo&rsquo;s computer science page, read on 22 October 2026, lists Advanced Functions, Calculus and Vectors, any Grade 12 U English and one other 4U course for Ontario applicants, and names Grade 11 U Introduction to Computer Science as recommended. In other words, a London student aiming at computing needs MHF4U and MCV4U, and ICS3U is the course that page encourages, not the one it demands. The ministry allows MCV4U to be taken at the same time as MHF4U, and a student who does that finds a weak function or a shaky limit costing marks in both.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Before Grade 11: ICD2O', p: 'Ontario&rsquo;s current list also holds ICD2O, a 2023 open course for Grade 10 in which students apply coding concepts to hands-on projects and investigate artificial intelligence and cybersecurity. It is a gentle first look, not a prerequisite for ICS3U.' },
          { h3: 'The Grade 9 math test', p: 'EQAO describes the Grade 9 Assessment of Mathematics as an online test of 54 questions over two sessions, using a multi-stage computer adaptive model, and says the results are included in the student&rsquo;s final course mark. The 2027 window is 12 January to 5 February 2027.' },
          { h3: 'Computer studies and the OSSD', p: 'For students who began Grade 9 in 2024 or later, one compulsory credit must come from a STEM group that includes computer studies, so a computer studies course such as ICS3U can count toward that requirement as well as being an elective.' }
        ] },
        { kind: 'callout', h3: 'Credit belongs to the school', p: 'We teach alongside a London student&rsquo;s school courses, and we do not grant Ontario credits. ICS3U, ICS4U, MHF4U and MCV4U credits are earned only through the school. We are not connected with the Ontario Ministry of Education, EQAO, the University of Waterloo or any London school board.' }
      ]
    },
    {
      id: 'amenities', tint: 'deep', eyebrow: 'London data project',
      h2: 'Were 203 London park amenities really built in 2021? A project on the city&rsquo;s file',
      intro: 'The City of London publishes a Park Amenities file: soccer fields, ball diamonds, play structures, courts and more, each with an owner and a year built. Our students chart the years and find a spike that needs explaining. All counts below are ours.',
      body: [
        { kind: 'table', caption: 'Our count of the City of London Park Amenities file, downloaded 22 October 2026 (1,225 rows). Year built, by decade, for the 1,073 rows that give one', head: ['Decade', 'Rows', 'Note from our analysis'], rows: [
          ['1920s to 1950s', '9 in all (1, 1, 2, 5)', 'The oldest entry is 1927'],
          ['1960s', '27', ''],
          ['1970s', '12', ''],
          ['1980s', '13', ''],
          ['1990s', '181', '141 of them in 1996 alone'],
          ['2000s', '279', ''],
          ['2010s', '290', ''],
          ['2020s', '262', '203 of them carry the single year 2021']
        ] },
        { kind: 'p', text: 'This script prints the decade chart as rows of hash marks, then breaks down the 2021 rows by owner. Run it with Python 3 next to the downloaded CSV:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Draw the decades', p: 'A text histogram, one hash mark per ten rows, shows the shape at a glance: almost nothing before 1990, then a broad plateau. Then one year inside the plateau stands out, with 203 rows dated 2021.' },
          { h3: '2. Cross the spike with owner', p: 'Split the 2021 rows by the Owner column and the spike changes character: 164 are school-owned, 32 city-owned and 7 private. Most are ball diamonds (124) and tennis courts (42).' },
          { h3: '3. Check the other side', p: 'The file lists 276 school-owned rows in total. Every one is dated 2021 or has no year at all (112). Not a single school row carries any other year.' }
        ] },
        { kind: 'callout', h3: 'What we think the spike means, and why it is only a guess', p: 'Our reading, and it is ours, not the city&rsquo;s: 2021 is probably the year school fields were added to the city&rsquo;s records, not the year 164 diamonds and courts were built. The file cannot prove that. A good student writes &ldquo;dated 2021 in this file&rdquo; instead of &ldquo;built in 2021&rdquo;, and says why.' },
        { kind: 'p', text: 'The last line of the script teaches a smaller lesson. The AmenityType column spells one size as Peewee 25 times and as PeeWee once; lowercasing first gives the honest count of 26. For a stronger student, the next step is mapping the soccer fields (254 rows) and ball diamonds (194) with the X and Y columns, which hold projected map coordinates rather than latitude and longitude. The data comes from the City of London under its <a class="cg-inline-link" href="https://london.maps.arcgis.com/sharing/rest/content/items/e31458fd0c7e41dd9f93144a9550781d/data">Terms of Use for City of London open data</a>, which allow use for any lawful purpose; the file is publicly available from the City under those terms (<a class="cg-inline-link" href="https://opendata.london.ca/datasets/716311972be047f39a5937247ed80a2c_1">dataset page</a>). The City has not approved or endorsed this page or our classes.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests for senior students',
      h2: 'The CCC and the Euclid: two Waterloo contests that matter in Grade 12',
      intro: 'CEMC at the University of Waterloo runs both. Facts below come from CEMC&rsquo;s contest pages, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'The Canadian Computing Competition at a glance, from CEMC&rsquo;s CCC page (2026 means are CEMC&rsquo;s table values)', head: ['Item', 'Junior', 'Senior'], rows: [
          ['Who it suits', 'Beginner to intermediate programmers', 'Intermediate to advanced programmers'],
          ['Format', '5 questions, 3 hours, score out of 75', '5 questions, 3 hours, score out of 75'],
          ['Opening questions', 'Basic loops and conditions', 'Sorting and searching'],
          ['Last question', 'Recursion, two-dimensional arrays, efficient algorithms', 'An IOI level question'],
          ['2026 average score', '42.65', '15.56']
        ] },
        { kind: 'p', text: 'The Senior average sitting near a fifth of the marks tells a London student something useful: the paper is meant to stretch even good programmers. CEMC lists the 2027 CCC for Wednesday 17 February 2027, and notes that with some language choices, Python or Java for example, a perfect score may not always be possible, which is why our Senior students learn to judge an algorithm&rsquo;s speed before writing it. ICS4U students meet that same idea when the course asks for efficient, modular programs.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Euclid, for Grade 12 math', p: 'CEMC lists the Euclid for Tuesday 6 April 2027, for students in their final year of secondary school. Its full-solution questions reward the clear written reasoning MHF4U and MCV4U ask for.' },
          { h3: 'Scholarships, not admission', p: 'Waterloo&rsquo;s computer science page says a contest such as the Euclid is not required for admission, but is required for some Faculty of Mathematics scholarships. Its Admission Information Form, due 15 February 2027, asks about Waterloo contests written.' },
          { h3: 'Only through a school', p: 'CEMC does not take entries from individual students; a London student writes through their own school, or through another local school that agrees to host them.' }
        ] },
        { kind: 'p', text: 'We prepare students with problems we write ourselves and point them to CEMC&rsquo;s <a class="cg-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests">free past contests</a> for the real thing; we never reproduce CEMC questions or solutions. For deeper reading see <a class="cg-inline-link" href="/ccc-senior-guide">the CCC Senior guide</a>, <a class="cg-inline-link" href="/mhf4u-advanced-functions-tutor">MHF4U help</a> and <a class="cg-inline-link" href="/mcv4u-calculus-and-vectors-tutor">MCV4U help</a>. Modern Age Coders is independent of CEMC and of the University of Waterloo.' }
      ]
    },
    {
      id: 'clock', tint: '', eyebrow: 'Class times',
      h2: 'Eastern time in London, Ontario, and where that falls in India',
      intro: 'London keeps the same Eastern clock as Toronto. Our teachers work from India, which does not change its clocks, so the gap is an hour wider in winter.',
      body: [
        { kind: 'table', caption: 'Two sample class times in London, Ontario, shown in India time. Offsets from IANA tzdb 2026e; the arithmetic is ours', head: ['Period', 'London offset', 'Gap to India', '6:30 pm weekday in London', '10 am Sunday in London'], rows: [
          ['To 1 November 2026, and again from 14 March 2027', 'UTC-4', '9 hours 30 minutes', '4:00 am, following day', '7:30 pm'],
          ['1 November 2026 to 14 March 2027', 'UTC-5', '10 hours 30 minutes', '5:00 am, following day', '8:30 pm']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Exam season and contest days', p: 'We plan around the EQAO window, the February CCC and June exams, and lighten homework-heavy weeks when a family asks. The class time itself stays fixed unless you move it.' },
          { h3: 'London area codes', p: 'Numbers in the London area use 519, 226, 548 or 382. Type the ten digits into the form; the +1 for Canada is already set.' },
          { h3: 'One reminder per clock change', p: 'Before Ontario falls back on 1 November 2026 and springs forward on 14 March 2027, we send each London family a short note with its class times restated in Eastern time.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first program at 6 to MCV4U and ICS4U',
    intro: 'The grades are a rough guide; the free lesson places each student by what they can already do.',
    cols: [
      { band: 'Ages 6 to 9', h3: 'Blocks and puzzles', p: 'Visual coding, sequences and loops, with the child explaining the plan before running it.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 9 to 13', h3: 'First typed code', p: 'Python with conditions, functions and small games, plus a first, careful look at how AI learns.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 9 and 10', h3: 'Python and contests', p: 'Real Python, data files such as the London one above, and a first try at the CCC Junior.', courses: ['python-complete-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] },
      { band: 'Grades 11 and 12', h3: 'Both chains', p: 'Support beside ICS3U and ICS4U and beside MHF4U and MCV4U, with no credit granted by us.', courses: ['ics3u-ics4u-computer-science-companion-course', 'ontario-grade-12-university-math-mhf4u-mcv4u-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Will AI make ICS3U pointless for a London teen?',
    intro: 'No. It makes understanding the code more valuable, not less.',
    p1: 'Give an AI assistant the London amenities file and ask how many were built each year, and it may well plot 2021 as a building boom. The tool did the counting correctly and the interpretation wrongly. Spotting that the spike is almost all school rows, and that school rows have no other year, is a human judgment that comes from writing the cross-tab yourself.',
    p2: 'That is how we teach: reason through the problem, write the code, then challenge the result. Teens meet AI tools as part of the work, within each tool&rsquo;s age rules, and use them to explain and check rather than to produce what they hand in.',
    closer: 'ICS4U asks for programs that are fully documented, and documenting code well means understanding every line of it.',
    blogAnchor: 'why understanding beats generating, in our longer essay'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How online classes run for London, Ontario families',
    intro: 'Everything happens on a home computer, so a student in north London and one in the south end share one teacher with no driving.',
    cells: [
      { h3: 'When classes run', p: TIMING },
      { h3: 'Ontario course codes', p: 'Teachers plan in Ontario grades and course codes and know where ICS3U units, MHF4U tests and the Grade 9 EQAO fall. Marked school work stays the student&rsquo;s own.' },
      { h3: 'Class or private', p: 'A class of 15 to 20 students at one stage, or one to one for faster progress, contest work or a hard term in MCV4U.' },
      { h3: 'Nearby towns too', p: 'Students elsewhere in southwestern Ontario join exactly the same classes; nothing depends on where in the region a family lives.' },
      { h3: 'Equipment', p: 'A laptop or desktop with a headset and a stable connection. Senior students install Python and an editor in the first lesson, with the teacher watching the screen.' },
      { h3: 'Free first lesson', p: 'A real lesson, ending with a recommended course and time. We ask for no payment details at this stage.' }
    ],
    spec: { title: 'Online only', p: 'Modern Age Coders has no London, Ontario office or classroom. Every lesson is taught live online from India, in English.' }
  },

  fees: {
    h2: 'What London, Ontario families pay',
    intro: 'Three options, priced in the currency your browser shows.',
    first: 'One complete live lesson, free, finishing with a suggested level and course.',
    group: 'The monthly fee for a class of 15 to 20 students at the same stage.',
    private: 'The monthly fee for a private teacher, at times that suit the student.',
    closer: 'The monthly fee in London is the same as anywhere else in Canada. Billing begins only after the free lesson and once a course and time are agreed; the pricing page explains missed classes and holidays.'
  },

  reviewsH2: 'Google reviews from our families and students',

  book: {
    h2: 'Book a free lesson for a London, Ontario student',
    intro: 'Tell us the grade and the courses. A Grade 4 child might build a looping animation, a Grade 9 student a Python quiz, and an ICS3U student the decade chart from the London file.',
    success: 'Thank you. The team will be in touch soon about a class in London, Ontario.'
  },

  faq: {
    h2: 'London, Ontario coding and AI questions',
    intro: 'The questions London families send us most often.',
    items: [
      { q: 'Do you offer coding classes in London, Ontario?', a: 'Yes, taught live over video rather than in a local centre. Students from age 6 join from home, in a class of 15 to 20 or one to one.' },
      { q: 'Can you help with ICS3U or ICS4U?', a: 'Yes. Our companion course runs beside the school course with practice, code review and projects in Python and Java. We do not grant Ontario credits; the credit is earned at school.' },
      { q: 'Do you tutor MHF4U and MCV4U for London students?', a: 'Yes. Our Grade 12 university math course covers Advanced Functions and Calculus and Vectors alongside school. Ontario lists MHF4U as needed before or at the same time as MCV4U, and we plan lessons in that order.' },
      { q: 'Does a London student need ICS3U for a computer science degree?', a: 'Not always. The University of Waterloo computer science page lists MHF4U and MCV4U as requirements and ICS3U as recommended. Each university sets its own rules, so check its admission page.' },
      { q: 'What is the Grade 9 EQAO math test like?', a: 'EQAO describes it as an online, adaptive test of 54 questions in two sessions, with results included in the final course mark. The 2027 window is 12 January to 5 February 2027.' },
      { q: 'Can my teen write the CCC from London?', a: 'Yes, through a school, since CEMC does not accept individual entries. CEMC lists the 2027 CCC for Wednesday 17 February 2027, at Junior or Senior level.' },
      { q: 'What age can children start coding classes in London, Ontario?', a: 'From 6, with block coding. Most move to typed Python between 9 and 11, and adults are welcome at any age.' },
      { q: 'When are classes held?', a: TIMING + ' Times are always confirmed in Eastern time.' },
      { q: 'Will a 519 or 226 number work in the form?', a: 'Yes. London-area numbers with 519, 226, 548 or 382 all work; enter the ten digits without the leading 1.' },
      { q: 'Where can I see the fees?', a: 'In the fees block on this page: the free trial lesson, the monthly class fee and the monthly private fee, each in your own currency. No charge is made before the trial.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario',
    h2: 'Related pages for London, Ontario students',
    html: 'For the whole province see <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a>; for the country, <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>. Course-by-course help is on <a class="cg-inline-link" href="/ics3u-computer-science-help">ICS3U help</a>, <a class="cg-inline-link" href="/ics4u-computer-science-help">ICS4U help</a> and <a class="cg-inline-link" href="/mhf4u-advanced-functions-tutor">MHF4U help</a>, and contest students can start at <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'London, Ontario and Canada',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/ics3u-computer-science-help', label: 'ICS3U help' },
    { href: '/mcv4u-calculus-and-vectors-tutor', label: 'MCV4U help' },
    { href: '/ccc-senior-guide', label: 'CCC Senior' }
  ],

  personalityCss: `
.cg-root.cg-alo .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.05; }
.cg-root.cg-alo .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-alo .cg-eyebrow { letter-spacing: 0.08em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-alo .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.012em; }
.cg-root.cg-alo .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-alo .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-alo #amenities code { display: block; white-space: pre; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.55; padding: 1rem; border-left: 4px solid var(--cg-accent); }
.cg-root.cg-alo .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-alo .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API (saved raw in ca/src/ontario/): ICS3U and ICS4U descriptions and prerequisites, MCR3U, MHF4U and MCV4U prerequisites (MHF4U before or with MCV4U), ICD2O (2023, Open); ontario.ca OSSD page (computer studies in the STEM group); EQAO Grade 9 format and 2027 window. University of Waterloo CS page (requirements, ICS3U recommended, contests and scholarships, AIF 15 February 2027). CEMC CCC page (format, ladders, 2026 means, Python caveat, 2027 date) and Euclid date. London area codes and Eastern offsets from facts-geo.md.',
    localProject: 'City of London Open Data, Park Amenities (Terms of Use - City of London Open Data, any lawful purpose), CSV downloaded with curl on 22 October 2026 and analysed with our script amenities_page.py (python -I): 1,225 rows; 1,073 with a year; decades 1990s 181, 2000s 279, 2010s 290, 2020s 262; 203 rows dated 2021 (School 164, City 32, Private 7); all 276 school rows dated 2021 or blank (112); Peewee 25 and PeeWee 1. The record-entry reading of 2021 is labelled our inference. Lesson family: a year histogram and a cross-tab that explains a spike; case normalisation.',
    requiredMentions: [
      'Terms of Use for City of London open data',
      '203 rows dated 2021',
      'Not a single school row carries any other year',
      'Peewee 25 times and as PeeWee once',
      '141 of them in 1996 alone',
      '164 are school-owned, 32 city-owned and 7 private',
      'online test of 54 questions over two sessions',
      '2026 average score',
      'hold projected map coordinates',
      '6:30 pm weekday in London'
    ],
    sources: [
      { claim: 'Ontario curriculum content API: ICS3U, ICS4U, MCR3U, MHF4U, MCV4U and ICD2O course records and prerequisites.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code%5Bin%5D=MCR3U,MHF4U,MCV4U,MDM4U,MPM2D,MTH1W,MCF3M,MAP4C,MEL4E&depth=0' },
      { claim: 'Ontario: earning your high school diploma (STEM compulsory credit group, math credits).', url: 'https://www.ontario.ca/page/high-school-graduation-requirements' },
      { claim: 'EQAO Grade 9 Assessment of Mathematics: format, adaptive model, course mark.', url: 'https://www.eqao.com/the-assessments/grade-9-math/' },
      { claim: 'University of Waterloo Computer Science: Ontario requirements, recommended course, contests and scholarships.', url: 'https://uwaterloo.ca/future-students/programs/computer-science' },
      { claim: 'CEMC Canadian Computing Competition: format, ladders, languages, 2026 results, 2027 date.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'CEMC Euclid contest: eligibility and 2027 date.', url: 'https://cemc.uwaterloo.ca/contests/euclid' },
      { claim: 'City of London Open Data: Park Amenities dataset.', url: 'https://opendata.london.ca/datasets/716311972be047f39a5937247ed80a2c_1' },
      { claim: 'Terms of Use - City of London Open Data (any lawful purpose, optional credit, no endorsement).', url: 'https://london.maps.arcgis.com/sharing/rest/content/items/e31458fd0c7e41dd9f93144a9550781d/data' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'That 203 amenities were built in London in 2021: not claimed; the file only dates them 2021, and our record-entry reading is labelled an inference.',
      'Any London or southwestern Ontario population figure: StatCan was not reachable live.',
      'Names of London schools, universities other than as an admission source, or private people: not used; no addresses printed.',
      'That ICS3U is required for every computer science degree: refused; Waterloo lists it as recommended, and each university sets its own rules.',
      'That our classes earn or count toward an Ontario credit: refused; we do not grant Ontario credits.',
      'A total of all amenities built per decade across owners summed with blanks: not printed; 152 rows with no year are reported separately.',
      'CEMC fees: left out of the copy on purpose (currency-neutral page).',
      'Any affiliation with the City of London, the Ontario Ministry of Education, EQAO, CEMC or the University of Waterloo.'
    ]
  }
};
